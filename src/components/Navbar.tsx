import React, { useState } from 'react';
import { Palmtree, Compass, MapPin, Scale, Menu, X, Printer, DollarSign, Sparkles } from 'lucide-react';
import { ItineraryId } from '../data/types';
import { CurrencyMode } from '../hooks/useCurrency';

interface NavbarProps {
  activeTab: ItineraryId;
  setActiveTab: (tab: ItineraryId) => void;
  currencyMode: CurrencyMode;
  setCurrencyMode: (mode: CurrencyMode) => void;
  exchangeRate: number;
  setExchangeRate: (rate: number) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  currencyMode,
  setCurrencyMode,
  exchangeRate,
  setExchangeRate,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currencyModalOpen, setCurrencyModalOpen] = useState(false);

  const tabs: { id: ItineraryId; label: string; shortLabel: string; group: 'active' | 'relax' | 'compare'; icon: React.ReactNode; badge?: string }[] = [
    { id: 'islet', label: 'Option 1: Islet Explorer', shortLabel: 'Opt 1: Islet', group: 'active', icon: <Palmtree className="w-4 h-4 text-sky-400" /> },
    { id: 'isle-of-pines', label: 'Option 2: Isle of Pines', shortLabel: 'Opt 2: Pines', group: 'active', icon: <Compass className="w-4 h-4 text-emerald-400" /> },
    { id: 'west-coast', label: 'Option 3: West Coast & Poé', shortLabel: 'Opt 3: West Coast', group: 'active', icon: <MapPin className="w-4 h-4 text-amber-400" /> },
    { id: 'best-of-both', label: 'Option 4: Best of Both', shortLabel: 'Opt 4: Both', group: 'active', icon: <Sparkles className="w-4 h-4 text-purple-400" /> },
    { id: 'relax-resort', label: 'Option 5: Grand Lagoon Resort', shortLabel: 'Opt 5: Resort', group: 'relax', icon: <Palmtree className="w-4 h-4 text-teal-400" />, badge: 'Relax' },
    { id: 'relax-island', label: 'Option 6: Private Coral Island', shortLabel: 'Opt 6: Island', group: 'relax', icon: <Sparkles className="w-4 h-4 text-cyan-400" />, badge: 'Overwater' },
    { id: 'relax-retreat', label: 'Option 7: Nature & Wellness Retreat', shortLabel: 'Opt 7: Retreat', group: 'relax', icon: <Compass className="w-4 h-4 text-rose-400" />, badge: 'Spa+Golf' },
    { id: 'compare', label: 'Compare All 7', shortLabel: 'Compare All', group: 'compare', icon: <Scale className="w-4 h-4 text-indigo-400" />, badge: 'Decision Tool' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur-md border-b border-slate-800 text-white transition-all shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-2">
          
          {/* Brand Logo */}
          <div 
            className="flex items-center gap-2.5 cursor-pointer select-none shrink-0"
            onClick={() => setActiveTab('islet')}
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-white shadow-lg shadow-cyan-500/20">
              <Palmtree className="w-5 h-5" />
            </div>
            <div>
              <div className="font-bold tracking-tight text-base sm:text-lg flex items-center gap-1.5">
                <span>New Caledonia</span>
                <span className="text-cyan-400 font-semibold text-xs px-2 py-0.5 rounded-full bg-cyan-950 border border-cyan-800">Nov 2026</span>
              </div>
              <p className="text-xs text-slate-400 hidden xl:block">Family Holiday Itineraries (4 Adults + 1 Child)</p>
            </div>
          </div>

          {/* Desktop Navigation Tabs (Horizontal Scroll / Compact) */}
          <nav className="hidden lg:flex items-center gap-1 overflow-x-auto py-1 scrollbar-none">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              const isRelax = tab.group === 'relax';
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all ${
                    isActive
                      ? isRelax
                        ? 'bg-teal-500/25 text-teal-200 border border-teal-500/50 shadow-sm font-semibold'
                        : 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm font-semibold'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                  }`}
                  title={tab.label}
                >
                  {tab.icon}
                  <span>{tab.shortLabel}</span>
                  {tab.badge && (
                    <span className={`text-[9px] uppercase font-bold tracking-wider px-1 py-0.2 rounded border ${
                      isRelax 
                        ? 'bg-teal-500/20 text-teal-300 border-teal-500/30'
                        : 'bg-indigo-500/30 text-indigo-300 border-indigo-500/40'
                    }`}>
                      {tab.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>

          {/* Action Tools */}
          <div className="flex items-center gap-2 shrink-0">
            
            {/* Currency Mode Trigger */}
            <button
              onClick={() => setCurrencyModalOpen(!currencyModalOpen)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition"
              title="Change Currency Display"
            >
              <DollarSign className="w-3.5 h-3.5 text-emerald-400" />
              <span className="uppercase font-semibold">{currencyMode}</span>
              <span className="text-slate-400 text-[10px]">({exchangeRate} XPF)</span>
            </button>

            {/* Print Button */}
            <button
              onClick={() => window.print()}
              className="hidden sm:flex items-center gap-1.5 p-2 rounded-lg text-slate-400 hover:text-slate-200 hover:bg-slate-800 transition"
              title="Print Itinerary"
            >
              <Printer className="w-4 h-4" />
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Currency Preferences Dropdown Modal */}
      {currencyModalOpen && (
        <div className="bg-slate-800 border-b border-slate-700 py-3 px-4 sm:px-8 text-sm">
          <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="text-slate-300 font-medium">Display Mode:</span>
              <div className="inline-flex rounded-lg bg-slate-900 p-0.5 border border-slate-700">
                {(['both', 'aud', 'xpf'] as CurrencyMode[]).map((mode) => (
                  <button
                    key={mode}
                    onClick={() => setCurrencyMode(mode)}
                    className={`px-3 py-1 rounded-md text-xs font-semibold uppercase transition ${
                      currencyMode === mode
                        ? 'bg-cyan-500 text-white shadow'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    {mode === 'both' ? 'Both (XPF + AUD)' : mode}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-slate-300 text-xs">Rate: $1 AUD =</span>
              <input
                type="number"
                min="50"
                max="120"
                value={exchangeRate}
                onChange={(e) => setExchangeRate(Number(e.target.value) || 73)}
                className="w-16 px-2 py-1 bg-slate-900 border border-slate-700 rounded text-center text-xs text-white focus:outline-none focus:border-cyan-500"
              />
              <span className="text-slate-400 text-xs">XPF</span>
            </div>

            <button
              onClick={() => setCurrencyModalOpen(false)}
              className="text-xs text-slate-400 hover:text-white underline ml-auto"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-900 border-b border-slate-800 px-4 pt-2 pb-4 space-y-1">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id);
                  setMobileMenuOpen(false);
                }}
                className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium transition ${
                  isActive
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                    : 'text-slate-300 hover:bg-slate-800'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  {tab.icon}
                  <span>{tab.label}</span>
                </div>
                {tab.badge && (
                  <span className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded bg-indigo-500/30 text-indigo-300">
                    {tab.badge}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      )}
    </header>
  );
};
