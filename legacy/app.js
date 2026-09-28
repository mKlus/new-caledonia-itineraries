/**
 * New Caledonia Itineraries — Modern Interactive Core
 * Handles navigation, day filtering, map interactions, currency converter,
 * checklist persistence, and comparison tools.
 */

// Mobile Navigation Toggle
function initMobileNav() {
  const toggleBtn = document.querySelector('.mobile-toggle');
  const navLinks = document.querySelector('.nav-links');
  
  if (toggleBtn && navLinks) {
    toggleBtn.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('nav-open');
      toggleBtn.setAttribute('aria-expanded', isOpen);
      toggleBtn.innerHTML = isOpen ? '✕' : '☰';
    });

    // Close when clicking outside
    document.addEventListener('click', (e) => {
      if (!navLinks.contains(e.target) && !toggleBtn.contains(e.target) && navLinks.classList.contains('nav-open')) {
        navLinks.classList.remove('nav-open');
        toggleBtn.setAttribute('aria-expanded', 'false');
        toggleBtn.innerHTML = '☰';
      }
    });
  }
}

// Sticky Sub-Navigation with ScrollSpy
function initSubNav() {
  const subnavLinks = document.querySelectorAll('.subnav-link');
  if (subnavLinks.length === 0) return;

  const sections = Array.from(subnavLinks).map(link => {
    const id = link.getAttribute('href').substring(1);
    return document.getElementById(id);
  }).filter(Boolean);

  function onScroll() {
    const scrollPos = window.scrollY + 120;
    let currentId = '';

    for (let i = sections.length - 1; i >= 0; i--) {
      if (sections[i].offsetTop <= scrollPos) {
        currentId = sections[i].id;
        break;
      }
    }

    subnavLinks.forEach(link => {
      if (link.getAttribute('href') === '#' + currentId) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

// Day Filter & Expand/Collapse for Timeline
function initDayFilter() {
  const filterBtns = document.querySelectorAll('.day-filter-btn');
  const dayBlocks = document.querySelectorAll('.day-block');
  const expandAllBtn = document.getElementById('expand-all-days');

  if (filterBtns.length === 0 || dayBlocks.length === 0) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const targetDay = btn.getAttribute('data-day');

      dayBlocks.forEach(block => {
        if (targetDay === 'all' || block.getAttribute('data-day') === targetDay) {
          block.style.display = 'block';
          // Smooth fade in
          block.classList.add('fade-in');
        } else {
          block.style.display = 'none';
        }
      });
    });
  });

  if (expandAllBtn) {
    let allExpanded = true;
    expandAllBtn.addEventListener('click', () => {
      allExpanded = !allExpanded;
      dayBlocks.forEach(block => {
        const body = block.querySelector('.day-body');
        const toggleIcon = block.querySelector('.day-toggle-icon');
        if (body) {
          body.style.display = allExpanded ? 'block' : 'none';
          if (toggleIcon) toggleIcon.textContent = allExpanded ? '▲' : '▼';
        }
      });
      expandAllBtn.textContent = allExpanded ? 'Collapse All Days' : 'Expand All Days';
    });
  }

  // Individual day collapse/expand on header click
  dayBlocks.forEach(block => {
    const header = block.querySelector('.day-header');
    const body = block.querySelector('.day-body');
    if (header && body) {
      header.style.cursor = 'pointer';
      header.addEventListener('click', (e) => {
        // Prevent toggle if clicking a link inside header
        if (e.target.tagName.toLowerCase() === 'a') return;
        const isCollapsed = body.style.display === 'none';
        body.style.display = isCollapsed ? 'block' : 'none';
        const toggleIcon = header.querySelector('.day-toggle-icon');
        if (toggleIcon) toggleIcon.textContent = isCollapsed ? '▲' : '▼';
      });
    }
  });
}

// Currency & Budget Converter
function initCurrencyConverter() {
  const rateInput = document.getElementById('currency-rate');
  const xpfInputs = document.querySelectorAll('[data-xpf]');
  const audToggle = document.getElementById('currency-aud');
  const xpfToggle = document.getElementById('currency-xpf');
  const bothToggle = document.getElementById('currency-both');

  if (!xpfInputs.length) return;

  function updatePrices() {
    const rate = parseFloat(rateInput ? rateInput.value : 73) || 73;
    const mode = audToggle && audToggle.checked ? 'aud' : (xpfToggle && xpfToggle.checked ? 'xpf' : 'both');

    xpfInputs.forEach(el => {
      const xpf = parseFloat(el.getAttribute('data-xpf'));
      if (isNaN(xpf)) return;
      const aud = Math.round(xpf / rate);

      if (mode === 'aud') {
        el.textContent = `~$${aud.toLocaleString()} AUD`;
      } else if (mode === 'xpf') {
        el.textContent = `${xpf.toLocaleString()} XPF`;
      } else {
        el.textContent = `${xpf.toLocaleString()} XPF (~$${aud.toLocaleString()} AUD)`;
      }
    });
  }

  if (rateInput) rateInput.addEventListener('input', updatePrices);
  [audToggle, xpfToggle, bothToggle].forEach(toggle => {
    if (toggle) toggle.addEventListener('change', updatePrices);
  });

  updatePrices();
}

// Interactive Map Location Chips
function initMapChips(map, markersMap) {
  const chips = document.querySelectorAll('.location-chip');
  if (!chips.length || !map || !markersMap) return;

  chips.forEach(chip => {
    chip.addEventListener('click', () => {
      const key = chip.getAttribute('data-loc');
      chips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');

      const markerData = markersMap[key];
      if (markerData && markerData.marker) {
        map.flyTo(markerData.latlng, 13, { duration: 1.2 });
        setTimeout(() => {
          markerData.marker.openPopup();
        }, 1250);
      }
    });
  });
}

// Checklist LocalStorage Persistence
function initChecklist() {
  const checkboxes = document.querySelectorAll('.checklist-item input[type="checkbox"]');
  if (!checkboxes.length) return;

  const pageId = window.location.pathname.split('/').pop() || 'index';

  checkboxes.forEach((cb, idx) => {
    const key = `nc_check_${pageId}_${idx}`;
    const saved = localStorage.getItem(key);
    if (saved === 'true') {
      cb.checked = true;
      cb.closest('.checklist-item')?.classList.add('checked');
    }

    cb.addEventListener('change', () => {
      localStorage.setItem(key, cb.checked);
      if (cb.checked) {
        cb.closest('.checklist-item')?.classList.add('checked');
      } else {
        cb.closest('.checklist-item')?.classList.remove('checked');
      }
      updateChecklistProgress();
    });
  });

  function updateChecklistProgress() {
    const total = checkboxes.length;
    const checked = document.querySelectorAll('.checklist-item input[type="checkbox"]:checked').length;
    const progText = document.getElementById('checklist-progress-text');
    const progBar = document.getElementById('checklist-progress-bar');
    if (progText) progText.textContent = `${checked} of ${total} items checked`;
    if (progBar) progBar.style.width = `${(checked / total) * 100}%`;
  }

  updateChecklistProgress();
}

// Back to Top Button & Reading Progress
function initScrollTools() {
  const backToTop = document.getElementById('back-to-top');
  const progBar = document.getElementById('reading-progress');

  window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    const total = document.documentElement.scrollHeight - window.innerHeight;

    if (progBar && total > 0) {
      progBar.style.width = `${(scrolled / total) * 100}%`;
    }

    if (backToTop) {
      if (scrolled > 400) {
        backToTop.classList.add('visible');
      } else {
        backToTop.classList.remove('visible');
      }
    }
  }, { passive: true });

  if (backToTop) {
    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}

// Comparison Page Filter & Interactive Quiz
function initComparisonTools() {
  // Category Filtering
  const catButtons = document.querySelectorAll('.cat-filter-btn');
  const tableRows = document.querySelectorAll('.comp-table tbody tr[data-cat]');

  if (catButtons.length && tableRows.length) {
    catButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        catButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const cat = btn.getAttribute('data-cat');
        tableRows.forEach(row => {
          if (cat === 'all' || row.getAttribute('data-cat') === cat) {
            row.style.display = '';
          } else {
            row.style.display = 'none';
          }
        });
      });
    });
  }

  // Column Highlighting
  const colButtons = document.querySelectorAll('.col-highlight-btn');
  const table = document.querySelector('.comp-table');

  if (colButtons.length && table) {
    colButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const col = btn.getAttribute('data-col');
        colButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        table.classList.remove('highlight-opt1', 'highlight-opt2', 'highlight-opt3');
        if (col !== 'all') {
          table.classList.add(`highlight-${col}`);
        }
      });
    });
  }
}

// Initialize on DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
  initMobileNav();
  initSubNav();
  initDayFilter();
  initCurrencyConverter();
  initChecklist();
  initScrollTools();
  initComparisonTools();
});
