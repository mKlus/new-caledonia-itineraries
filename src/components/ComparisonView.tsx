import React, { useState } from 'react';
import { Target, Scale, Award, ArrowRight, Check, Compass, Car, MapPin, Sparkles } from 'lucide-react';
import { QUIZ_OPTIONS, COMPARISON_FACTORS, DISTANCE_METRICS } from '../data/comparisonData';
import { LOCATIONS } from '../data/locations';
import { InteractiveMap } from './InteractiveMap';
import { ItineraryId } from '../data/types';

interface ComparisonViewProps {
  setActiveTab: (tab: ItineraryId) => void;
}

export const ComparisonView: React.FC<ComparisonViewProps> = ({ setActiveTab }) => {
  const [selectedQuizId, setSelectedQuizId] = useState<string | null>('relax-resort');
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [tableFilter, setTableFilter] = useState<'all' | 'relax' | 'active'>('all');
  const [highlightedCol, setHighlightedCol] = useState<'all' | 'islet' | 'isle-of-pines' | 'west-coast' | 'best-of-both' | 'relax-resort' | 'relax-island' | 'relax-retreat'>('all');

  const selectedQuizOption = QUIZ_OPTIONS.find((q) => q.id === selectedQuizId);

  const filteredFactors = activeCategory === 'all'
    ? COMPARISON_FACTORS
    : COMPARISON_FACTORS.filter((f) => f.category === activeCategory);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-12">
      
      {/* Hero Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-indigo-50 text-indigo-700 border border-indigo-200">
          <Scale className="w-3.5 h-3.5" />
          <span>Side-by-Side Evaluation</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Itinerary Comparison & Decision Guide
        </h1>
        <p className="text-sm sm:text-base text-slate-600">
          Compare all four 6-night family options across budget, logistics, dining, snorkeling quality, child safety, and weather resilience to make the best choice for your group.
        </p>
      </div>

      {/* 1. Interactive Decision Helper Quiz */}
      <section id="quiz" className="bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white rounded-3xl p-6 sm:p-10 shadow-xl border border-indigo-900/50">
        <div className="max-w-3xl mx-auto text-center mb-8">
          <div className="inline-flex items-center gap-2 text-cyan-400 text-xs uppercase font-bold tracking-wider mb-2">
            <Target className="w-4 h-4" />
            <span>Interactive Decision Helper</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold">
            Which Itinerary Matches Your Family Best?
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 mt-2">
            Select your party’s highest priority to see the immediate recommended match:
          </p>
        </div>

        {/* 7 Quiz Option Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-8">
          {QUIZ_OPTIONS.map((opt) => {
            const isSelected = selectedQuizId === opt.id;
            const isRelax = opt.id.startsWith('relax');
            return (
              <div
                key={opt.id}
                onClick={() => setSelectedQuizId(opt.id)}
                className={`p-5 rounded-2xl border transition-all cursor-pointer select-none flex flex-col justify-between ${
                  isSelected
                    ? isRelax
                      ? 'bg-teal-500/20 border-teal-400 shadow-lg ring-2 ring-teal-400/50 backdrop-blur-md'
                      : 'bg-white/15 border-cyan-400 shadow-lg ring-2 ring-cyan-400/50 backdrop-blur-md'
                    : 'bg-white/5 border-white/10 hover:bg-white/10'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-3xl">{opt.icon}</span>
                    {isRelax && (
                      <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-teal-500/20 text-teal-300 border border-teal-500/30">
                        Relax Priority
                      </span>
                    )}
                  </div>
                  <h3 className="font-bold text-base text-white mb-2">{opt.title}</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">{opt.description}</p>
                </div>
                <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs font-semibold">
                  <span className={isSelected ? (isRelax ? 'text-teal-300' : 'text-cyan-300') : 'text-slate-400'}>
                    {isSelected ? '✓ Selected Priority' : 'Select Priority'}
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Recommendation Reveal Box */}
        {selectedQuizOption && (
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 sm:p-8 animate-fade-in max-w-3xl mx-auto">
            <div className="flex items-center gap-2 text-cyan-300 font-bold text-xs uppercase tracking-wider mb-2">
              <Sparkles className="w-4 h-4" />
              <span>Recommended Family Match</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
              {selectedQuizOption.recommendationTitle}
            </h3>
            <p className="text-sm text-slate-200 leading-relaxed mb-6">
              {selectedQuizOption.recommendationBody}
            </p>

            <button
              onClick={() => setActiveTab(selectedQuizOption.id)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white shadow-lg transition cursor-pointer"
            >
              <span>Explore Full {selectedQuizOption.recommendationTitle.split('—')[1]?.trim() || selectedQuizOption.recommendationTitle} Itinerary</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </section>

      {/* 2. Master Archipelago Map & Scale Section */}
      <section className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-6">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-cyan-700 mb-1">
            <Compass className="w-4 h-4 text-cyan-600" />
            <span>Archipelago Perspective & Scale</span>
          </div>
          <h2 className="text-2xl font-bold text-slate-900">
            Geographic Scale: How Much of New Caledonia Do We Explore?
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-3xl">
            Grande Terre is over 400 km long with a rugged central mountain cordillera. For a 6-night family trip with a 9-year-old child, strategic geographical focus avoids highway exhaustion while delivering the best reef and nature experiences.
          </p>
        </div>

        {/* Map */}
        <InteractiveMap itineraryId="compare" locations={LOCATIONS} />

        {/* Distance Matrix Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs sm:text-sm border border-slate-200 rounded-xl overflow-hidden">
            <thead className="bg-slate-100 font-semibold text-slate-700">
              <tr>
                <th className="py-3 px-4">Itinerary</th>
                <th className="py-3 px-4">Geographic Footprint</th>
                <th className="py-3 px-4">Total Driving</th>
                <th className="py-3 px-4">Avg. Driving / Day</th>
                <th className="py-3 px-4">Hotel Moves</th>
                <th className="py-3 px-4">Family Effort Rating</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {DISTANCE_METRICS.map((metric) => (
                <tr key={metric.name} className="hover:bg-slate-50">
                  <td className="py-3 px-4 font-bold text-slate-900">{metric.name}</td>
                  <td className="py-3 px-4 text-slate-600">{metric.reach}</td>
                  <td className="py-3 px-4 font-semibold text-slate-900">{metric.totalDriving}</td>
                  <td className="py-3 px-4 text-slate-600">{metric.avgDailyDriving}</td>
                  <td className="py-3 px-4 font-semibold text-slate-900">{metric.hotelMoves}</td>
                  <td className="py-3 px-4">
                    <span className={`inline-block px-2.5 py-1 rounded-md text-xs font-semibold ${
                      metric.highlight
                        ? 'bg-emerald-100 text-emerald-800'
                        : 'bg-slate-100 text-slate-700'
                    }`}>
                      {metric.effortRating}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 3. 12-Factor Side-by-Side Comparison Matrix */}
      <section className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-cyan-700 mb-1">
              <Award className="w-4 h-4 text-cyan-600" />
              <span>Multi-Factor Evaluation Matrix</span>
            </div>
            <h2 className="text-2xl font-bold text-slate-900">
              Side-by-Side Comparison Matrix
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">
              Specific calculations for 4 adults and 1 active 9-year-old child
            </p>
          </div>

          {/* Group View Toggle (All vs Relaxing Resorts vs Active Touring) */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-xl border border-slate-200 text-xs font-semibold">
            <button
              onClick={() => setTableFilter('all')}
              className={`px-3 py-1.5 rounded-lg transition ${
                tableFilter === 'all'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              All 7 Options
            </button>
            <button
              onClick={() => setTableFilter('relax')}
              className={`px-3 py-1.5 rounded-lg transition flex items-center gap-1 ${
                tableFilter === 'relax'
                  ? 'bg-teal-600 text-white shadow-xs'
                  : 'text-teal-700 hover:text-teal-900'
              }`}
            >
              <span>🌺 Relaxing Resorts (Opt 5–7)</span>
            </button>
            <button
              onClick={() => setTableFilter('active')}
              className={`px-3 py-1.5 rounded-lg transition ${
                tableFilter === 'active'
                  ? 'bg-indigo-600 text-white shadow-xs'
                  : 'text-indigo-700 hover:text-indigo-900'
              }`}
            >
              Active Touring (Opt 1–4)
            </button>
          </div>
        </div>

        {/* Category Factor filter toolbar */}
        <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-100">
          <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Factor Category:</span>
          {[
            { id: 'all', label: 'All Factors' },
            { id: 'logistics', label: 'Logistics & Bases' },
            { id: 'reef', label: 'Snorkel & Marine' },
            { id: 'kids', label: 'Child Experience' },
            { id: 'food', label: 'Food & Bakeries' },
            { id: 'budget', label: 'Budget & Cost' },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-slate-800 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Matrix Table */}
        <div className="overflow-x-auto border border-slate-200 rounded-2xl shadow-xs">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-slate-900 text-white font-semibold">
              <tr>
                <th className="py-4 px-3 sm:px-4 min-w-[180px]">Evaluation Criteria</th>

                {/* Option 5: Grand Lagoon Resort */}
                {(tableFilter === 'all' || tableFilter === 'relax') && (
                  <th className={`py-4 px-3 min-w-[220px] ${highlightedCol === 'relax-resort' ? 'bg-teal-900' : 'bg-slate-900'}`}>
                    <span className="text-teal-300 font-bold block text-[11px] uppercase tracking-wider">Option 5</span>
                    🌺 Grand Lagoon Resort Base
                  </th>
                )}

                {/* Option 6: Private Coral Island */}
                {(tableFilter === 'all' || tableFilter === 'relax') && (
                  <th className={`py-4 px-3 min-w-[220px] ${highlightedCol === 'relax-island' ? 'bg-cyan-900' : 'bg-slate-900'}`}>
                    <span className="text-cyan-300 font-bold block text-[11px] uppercase tracking-wider">Option 6</span>
                    🏝️ Private Coral Island
                  </th>
                )}

                {/* Option 7: Nature & Wellness */}
                {(tableFilter === 'all' || tableFilter === 'relax') && (
                  <th className={`py-4 px-3 min-w-[220px] ${highlightedCol === 'relax-retreat' ? 'bg-rose-900' : 'bg-slate-900'}`}>
                    <span className="text-rose-300 font-bold block text-[11px] uppercase tracking-wider">Option 7</span>
                    🌿 Nature & Wellness Retreat
                  </th>
                )}

                {/* Option 1: Islet Explorer */}
                {(tableFilter === 'all' || tableFilter === 'active') && (
                  <th className={`py-4 px-3 min-w-[220px] ${highlightedCol === 'islet' ? 'bg-sky-800' : 'bg-slate-900'}`}>
                    <span className="text-sky-300 font-bold block text-[11px] uppercase tracking-wider">Option 1</span>
                    🏖️ Islet Explorer
                  </th>
                )}

                {/* Option 2: Isle of Pines */}
                {(tableFilter === 'all' || tableFilter === 'active') && (
                  <th className={`py-4 px-3 min-w-[220px] ${highlightedCol === 'isle-of-pines' ? 'bg-emerald-800' : 'bg-slate-900'}`}>
                    <span className="text-emerald-300 font-bold block text-[11px] uppercase tracking-wider">Option 2</span>
                    🌲 Isle of Pines
                  </th>
                )}

                {/* Option 3: West Coast & Poé */}
                {(tableFilter === 'all' || tableFilter === 'active') && (
                  <th className={`py-4 px-3 min-w-[220px] ${highlightedCol === 'west-coast' ? 'bg-amber-800' : 'bg-slate-900'}`}>
                    <span className="text-amber-300 font-bold block text-[11px] uppercase tracking-wider">Option 3</span>
                    🚙 West Coast & Poé
                  </th>
                )}

                {/* Option 4: Best of Both */}
                {(tableFilter === 'all' || tableFilter === 'active') && (
                  <th className={`py-4 px-3 min-w-[220px] ${highlightedCol === 'best-of-both' ? 'bg-indigo-800' : 'bg-slate-900'}`}>
                    <span className="text-indigo-300 font-bold block text-[11px] uppercase tracking-wider">Option 4</span>
                    ✨ Best of Both
                  </th>
                )}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredFactors.map((factor, idx) => (
                <tr key={factor.factor} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/60'}>
                  <td className="py-4 px-3 sm:px-4 font-bold text-slate-900 align-top">
                    {factor.factor}
                  </td>

                  {/* Option 5: Grand Lagoon Resort */}
                  {(tableFilter === 'all' || tableFilter === 'relax') && (
                    <td className={`py-4 px-3 text-slate-700 align-top ${highlightedCol === 'relax-resort' ? 'bg-teal-50 font-medium' : ''}`}>
                      {factor.relaxResort?.badge && (
                        <span className="inline-block text-[10px] font-extrabold uppercase tracking-wider text-teal-800 bg-teal-100 px-2 py-0.5 rounded mb-1">
                          ★ {factor.relaxResort.badge}
                        </span>
                      )}
                      <p className="leading-relaxed">{factor.relaxResort?.text}</p>
                    </td>
                  )}

                  {/* Option 6: Private Coral Island */}
                  {(tableFilter === 'all' || tableFilter === 'relax') && (
                    <td className={`py-4 px-3 text-slate-700 align-top ${highlightedCol === 'relax-island' ? 'bg-cyan-50 font-medium' : ''}`}>
                      {factor.relaxIsland?.badge && (
                        <span className="inline-block text-[10px] font-extrabold uppercase tracking-wider text-cyan-800 bg-cyan-100 px-2 py-0.5 rounded mb-1">
                          ★ {factor.relaxIsland.badge}
                        </span>
                      )}
                      <p className="leading-relaxed">{factor.relaxIsland?.text}</p>
                    </td>
                  )}

                  {/* Option 7: Nature & Wellness */}
                  {(tableFilter === 'all' || tableFilter === 'relax') && (
                    <td className={`py-4 px-3 text-slate-700 align-top ${highlightedCol === 'relax-retreat' ? 'bg-rose-50 font-medium' : ''}`}>
                      {factor.relaxRetreat?.badge && (
                        <span className="inline-block text-[10px] font-extrabold uppercase tracking-wider text-rose-800 bg-rose-100 px-2 py-0.5 rounded mb-1">
                          ★ {factor.relaxRetreat.badge}
                        </span>
                      )}
                      <p className="leading-relaxed">{factor.relaxRetreat?.text}</p>
                    </td>
                  )}

                  {/* Option 1 */}
                  {(tableFilter === 'all' || tableFilter === 'active') && (
                    <td className={`py-4 px-3 text-slate-700 align-top ${highlightedCol === 'islet' ? 'bg-sky-50 font-medium' : ''}`}>
                      {factor.islet.badge && (
                        <span className="inline-block text-[10px] font-extrabold uppercase tracking-wider text-sky-800 bg-sky-100 px-2 py-0.5 rounded mb-1">
                          ★ {factor.islet.badge}
                        </span>
                      )}
                      <p className="leading-relaxed">{factor.islet.text}</p>
                    </td>
                  )}

                  {/* Option 2 */}
                  {(tableFilter === 'all' || tableFilter === 'active') && (
                    <td className={`py-4 px-3 text-slate-700 align-top ${highlightedCol === 'isle-of-pines' ? 'bg-emerald-50 font-medium' : ''}`}>
                      {factor.isleOfPines.badge && (
                        <span className="inline-block text-[10px] font-extrabold uppercase tracking-wider text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded mb-1">
                          ★ {factor.isleOfPines.badge}
                        </span>
                      )}
                      <p className="leading-relaxed">{factor.isleOfPines.text}</p>
                    </td>
                  )}

                  {/* Option 3 */}
                  {(tableFilter === 'all' || tableFilter === 'active') && (
                    <td className={`py-4 px-3 text-slate-700 align-top ${highlightedCol === 'west-coast' ? 'bg-amber-50 font-medium' : ''}`}>
                      {factor.westCoast.badge && (
                        <span className="inline-block text-[10px] font-extrabold uppercase tracking-wider text-amber-800 bg-amber-100 px-2 py-0.5 rounded mb-1">
                          ★ {factor.westCoast.badge}
                        </span>
                      )}
                      <p className="leading-relaxed">{factor.westCoast.text}</p>
                    </td>
                  )}

                  {/* Option 4 */}
                  {(tableFilter === 'all' || tableFilter === 'active') && (
                    <td className={`py-4 px-3 text-slate-700 align-top ${highlightedCol === 'best-of-both' ? 'bg-indigo-50 font-medium' : ''}`}>
                      {factor.bestOfBoth?.badge && (
                        <span className="inline-block text-[10px] font-extrabold uppercase tracking-wider text-indigo-800 bg-indigo-100 px-2 py-0.5 rounded mb-1">
                          ★ {factor.bestOfBoth.badge}
                        </span>
                      )}
                      <p className="leading-relaxed">{factor.bestOfBoth?.text}</p>
                    </td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

    </div>
  );
};
