import React from 'react';
import { Calendar, Users, MapPin, Luggage, ArrowRight, Map, Scale } from 'lucide-react';
import { ItineraryOption, ItineraryId } from '../data/types';
import { useCurrency } from '../hooks/useCurrency';

interface HeroBannerProps {
  option: ItineraryOption;
  setActiveTab: (tab: ItineraryId) => void;
}

export const HeroBanner: React.FC<HeroBannerProps> = ({ option, setActiveTab }) => {
  const { formatCost } = useCurrency();

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -120;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section className={`relative overflow-hidden bg-gradient-to-br ${option.heroImageGradient} text-white py-12 sm:py-16 px-4 sm:px-6 lg:px-8 shadow-inner`}>
      {/* Decorative background grid subtle overlay */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        <div className="max-w-3xl">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-white/15 text-white backdrop-blur-md border border-white/20 mb-4 shadow-xs">
            <span>{option.badge}</span>
          </div>

          {/* Title & Tagline */}
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-3 leading-tight drop-shadow-xs">
            {option.title}
          </h1>
          <p className="text-base sm:text-xl text-slate-100/90 leading-relaxed font-normal mb-8">
            {option.overviewSummary}
          </p>

          {/* Quick Stat Pills */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 mb-8">
            <div className="bg-white/10 backdrop-blur-md border border-white/15 rounded-xl p-3 flex flex-col justify-center">
              <div className="flex items-center gap-1.5 text-xs text-slate-200 mb-1">
                <Calendar className="w-3.5 h-3.5 text-cyan-300" />
                <span>Trip Dates</span>
              </div>
              <span className="font-bold text-xs sm:text-sm text-white">8 – 14 Nov 2026</span>
              <span className="text-[10px] text-slate-300">6 Nights Total</span>
            </div>

            <div className="bg-white/10 backdrop-blur-md border border-white/15 rounded-xl p-3 flex flex-col justify-center">
              <div className="flex items-center gap-1.5 text-xs text-slate-200 mb-1">
                <Users className="w-3.5 h-3.5 text-emerald-300" />
                <span>Family Party</span>
              </div>
              <span className="font-bold text-xs sm:text-sm text-white">4 Adults + 1 Child</span>
              <span className="text-[10px] text-slate-300">Active 9-Year-Old</span>
            </div>

            <div className="bg-white/10 backdrop-blur-md border border-white/15 rounded-xl p-3 flex flex-col justify-center">
              <div className="flex items-center gap-1.5 text-xs text-slate-200 mb-1">
                <MapPin className="w-3.5 h-3.5 text-amber-300" />
                <span>Base Location</span>
              </div>
              <span className="font-bold text-xs sm:text-sm text-white truncate" title={option.baseLocation}>
                {option.baseLocation}
              </span>
              <span className="text-[10px] text-slate-300">
                {option.hotelMoves === 0 ? '0 Hotel Moves' : `${option.hotelMoves} Hotel Moves`}
              </span>
            </div>

            <div className="bg-white/10 backdrop-blur-md border border-white/15 rounded-xl p-3 flex flex-col justify-center">
              <div className="flex items-center gap-1.5 text-xs text-slate-200 mb-1">
                <Luggage className="w-3.5 h-3.5 text-purple-300" />
                <span>Estimated Cost</span>
              </div>
              <span className="font-bold text-xs sm:text-sm text-white">
                {formatCost(option.cost5PaxXPF, option.cost5PaxAUD)}
              </span>
              <span className="text-[10px] text-slate-300">
                ~${option.costPerPersonAUD} AUD / person
              </span>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => scrollTo('schedule')}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm bg-white text-slate-900 hover:bg-slate-100 shadow-md hover:shadow-lg transition cursor-pointer"
            >
              <span>View 7-Day Schedule</span>
              <ArrowRight className="w-4 h-4 text-slate-700" />
            </button>

            <button
              onClick={() => scrollTo('map-section')}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-sm bg-white/15 text-white hover:bg-white/25 backdrop-blur-md border border-white/20 transition cursor-pointer"
            >
              <Map className="w-4 h-4" />
              <span>Explore Map & Coordinates</span>
            </button>

            <button
              onClick={() => setActiveTab('compare')}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-sm bg-white/15 text-white hover:bg-white/25 backdrop-blur-md border border-white/20 transition cursor-pointer"
            >
              <Scale className="w-4 h-4" />
              <span>Compare vs Other 2 Options</span>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};
