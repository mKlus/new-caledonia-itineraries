import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { SubNav } from './components/SubNav';
import { HeroBanner } from './components/HeroBanner';
import { InteractiveMap } from './components/InteractiveMap';
import { DayTimeline } from './components/DayTimeline';
import { AccommodationCards } from './components/AccommodationCards';
import { SnorkelGuide } from './components/SnorkelGuide';
import { FoodGuide } from './components/FoodGuide';
import { BudgetTable } from './components/BudgetTable';
import { ChecklistWidget } from './components/ChecklistWidget';
import { ComparisonView } from './components/ComparisonView';
import { ITINERARIES } from './data/itineraries';
import { LOCATIONS } from './data/locations';
import { ItineraryId } from './data/types';
import { useCurrency } from './hooks/useCurrency';
import { Palmtree, MapPin, Calendar, CheckCircle2, ShieldCheck, Heart } from 'lucide-react';

const getInitialTab = (): ItineraryId => {
  const hash = window.location.hash.replace('#', '').toLowerCase();
  if (hash === 'isle-of-pines' || hash === 'opt2') return 'isle-of-pines';
  if (hash === 'west-coast' || hash === 'opt3') return 'west-coast';
  if (hash === 'compare' || hash === 'matrix') return 'compare';
  return 'islet';
};

export const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<ItineraryId>(getInitialTab);
  const currencyTools = useCurrency();

  // Sync hash on tab switch
  const handleTabChange = (tab: ItineraryId) => {
    setActiveTab(tab);
    window.location.hash = tab;
  };

  // Listen to hash changes (e.g. browser back/forward)
  React.useEffect(() => {
    const onHashChange = () => {
      setActiveTab(getInitialTab());
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const currentOption = activeTab !== 'compare' ? ITINERARIES[activeTab] : null;

  const subNavItems = [
    { id: 'overview', label: 'Overview' },
    { id: 'map-section', label: 'Interactive Map' },
    { id: 'schedule', label: '7-Day Schedule' },
    { id: 'stays', label: 'Where to Stay' },
    { id: 'snorkeling', label: 'Snorkel Intel' },
    { id: 'dining', label: 'Bakeries & Food' },
    { id: 'budget', label: 'Budget & Cost' },
    { id: 'checklist', label: 'Action Checklist' },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans antialiased selection:bg-cyan-500 selection:text-white">
      
      {/* Top Navbar */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={handleTabChange}
        currencyMode={currencyTools.currencyMode}
        setCurrencyMode={currencyTools.setCurrencyMode}
        exchangeRate={currencyTools.exchangeRate}
        setExchangeRate={currencyTools.setExchangeRate}
      />

      {/* Main Content Area */}
      {activeTab === 'compare' ? (
        <main className="flex-1">
          <ComparisonView setActiveTab={handleTabChange} />
        </main>
      ) : currentOption ? (
        <main className="flex-1">
          
          {/* Sub Navigation Bar */}
          <SubNav items={subNavItems} />

          {/* Hero Header Banner */}
          <HeroBanner option={currentOption} setActiveTab={handleTabChange} />

          {/* Body Sections */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">
            
            {/* 1. Overview & Key Highlights */}
            <section id="overview" className="scroll-mt-36">
              <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-xs">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-cyan-700 mb-2">
                  <Palmtree className="w-4 h-4 text-cyan-600" />
                  <span>Strategic Highlights</span>
                </div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Why This Itinerary Works for 4 Adults & a 9-Year-Old
                </h2>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
                  {currentOption.idealFor}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                  {currentOption.keyHighlights.map((hl, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-100 text-xs sm:text-sm text-slate-700"
                    >
                      <CheckCircle2 className="w-4 h-4 text-cyan-600 shrink-0 mt-0.5" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* 2. Interactive Map */}
            <section id="map-section" className="scroll-mt-36">
              <div className="mb-4">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-cyan-700 mb-1">
                  <MapPin className="w-4 h-4 text-cyan-600" />
                  <span>Geographic Routes & Coordinates</span>
                </div>
                <h2 className="text-2xl font-bold text-slate-900">
                  Interactive Map & Driving Trails
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                  Click on any pin or chip below to zoom directly to beaches, hotels, and boat departure piers
                </p>
              </div>

              <InteractiveMap itineraryId={currentOption.id} locations={LOCATIONS} />
            </section>

            {/* 3. Day-by-Day Schedule */}
            <section id="schedule" className="scroll-mt-36">
              <div className="mb-4">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-cyan-700 mb-1">
                  <Calendar className="w-4 h-4 text-cyan-600" />
                  <span>Complete Itinerary</span>
                </div>
                <h2 className="text-2xl font-bold text-slate-900">
                  7-Day Schedule (Sunday 8 Nov – Saturday 14 Nov 2026)
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                  Scheduled around QF91 arrival (12:35 PM) and QF92 departure (1:50 PM)
                </p>
              </div>

              <DayTimeline days={currentOption.days} />
            </section>

            {/* 4. Where to Stay */}
            <section id="stays" className="scroll-mt-36">
              <div className="mb-4">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-cyan-700 mb-1">
                  <ShieldCheck className="w-4 h-4 text-cyan-600" />
                  <span>Curated Accommodations</span>
                </div>
                <h2 className="text-2xl font-bold text-slate-900">
                  Where to Stay: 2-Bedroom Apartments & Family Bungalows
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                  Bedding configurations verified for 4 adults + 1 child
                </p>
              </div>

              <AccommodationCards accommodations={currentOption.accommodations} />
            </section>

            {/* 5. Snorkeling Intel */}
            <section id="snorkeling" className="scroll-mt-36">
              <div className="mb-4">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-cyan-700 mb-1">
                  <Palmtree className="w-4 h-4 text-cyan-600" />
                  <span>Marine Reserves & Reef Safety</span>
                </div>
                <h2 className="text-2xl font-bold text-slate-900">
                  Snorkel Intel: Tides, Marine Life & Kid Safety
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                  Rated for 9-year-old child comfort, wave protection, and marine biodiversity
                </p>
              </div>

              <SnorkelGuide spots={currentOption.snorkelingSpots} />
            </section>

            {/* 6. Food & Bakeries */}
            <section id="dining" className="scroll-mt-36">
              <div className="mb-4">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-cyan-700 mb-1">
                  <Heart className="w-4 h-4 text-cyan-600" />
                  <span>French Pastries, Markets & Bistros</span>
                </div>
                <h2 className="text-2xl font-bold text-slate-900">
                  Boulangeries, Supermarkets & Dining Highlights
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                  Includes opening hours and advice for the Wednesday 11 Nov (Armistice Day) holiday
                </p>
              </div>

              <FoodGuide spots={currentOption.diningSpots} />
            </section>

            {/* 7. Budget & Cost */}
            <section id="budget" className="scroll-mt-36">
              <div className="mb-4">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-cyan-700 mb-1">
                  <ShieldCheck className="w-4 h-4 text-cyan-600" />
                  <span>Transparent Cost Estimates</span>
                </div>
                <h2 className="text-2xl font-bold text-slate-900">
                  Budget Breakdown & Currency Converter
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                  Realistic costs including car rental, fuel, charters, groceries, and dining
                </p>
              </div>

              <BudgetTable
                items={currentOption.budgetBreakdown}
                totalXPF={currentOption.cost5PaxXPF}
                totalAUD={currentOption.cost5PaxAUD}
                perPersonAUD={currentOption.costPerPersonAUD}
              />
            </section>

            {/* 8. Action Checklist */}
            <section id="checklist" className="scroll-mt-36">
              <div className="mb-4">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-cyan-700 mb-1">
                  <CheckCircle2 className="w-4 h-4 text-cyan-600" />
                  <span>Planning Timeline</span>
                </div>
                <h2 className="text-2xl font-bold text-slate-900">
                  Pre-Departure Action Checklist
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                  Tick items off as you complete bookings and preparations
                </p>
              </div>

              <ChecklistWidget itineraryId={currentOption.id} items={currentOption.checklist} />
            </section>

          </div>
        </main>
      ) : null}

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-800 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-cyan-600 flex items-center justify-center text-white">
                <Palmtree className="w-4 h-4" />
              </div>
              <span className="font-bold text-slate-200 text-sm">
                New Caledonia Family Holiday Itineraries (Nov 2026)
              </span>
            </div>

            <div className="flex items-center gap-4 text-slate-400">
              <button
                onClick={() => handleTabChange('islet')}
                className="hover:text-cyan-400 transition cursor-pointer"
              >
                Option 1
              </button>
              <button
                onClick={() => handleTabChange('isle-of-pines')}
                className="hover:text-cyan-400 transition cursor-pointer"
              >
                Option 2
              </button>
              <button
                onClick={() => handleTabChange('west-coast')}
                className="hover:text-cyan-400 transition cursor-pointer"
              >
                Option 3
              </button>
              <button
                onClick={() => handleTabChange('compare')}
                className="hover:text-cyan-400 transition font-semibold text-slate-200 cursor-pointer"
              >
                Comparison Matrix
              </button>
            </div>
          </div>

          <p className="text-slate-500 leading-relaxed max-w-3xl">
            Fact-checked for 4 adults and 1 active 9-year-old traveling 8–14 Nov 2026 arriving on QF91 and departing on QF92. 
            All marine operations, accommodation availability, and opening hours subject to seasonal and weather conditions.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
