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
  const [selectedQuizId, setSelectedQuizId] = useState<string | null>('islet');
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [highlightedCol, setHighlightedCol] = useState<'all' | 'islet' | 'isle-of-pines' | 'west-coast'>('all');

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
          Compare all three 6-night family options across budget, logistics, snorkeling quality, child safety, and weather resilience to make the best choice for your group.
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

        {/* 3 Quiz Option Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {QUIZ_OPTIONS.map((opt) => {
            const isSelected = selectedQuizId === opt.id;
            return (
              <div
                key={opt.id}
                onClick={() => setSelectedQuizId(opt.id)}
                className={`p-5 rounded-2xl border transition-all cursor-pointer select-none flex flex-col justify-between ${
                  isSelected
                    ? 'bg-white/15 border-cyan-400 shadow-lg ring-2 ring-cyan-400/50 backdrop-blur-md'
                    : 'bg-white/5 border-white/10 hover:bg-white/10'
                }`}
              >
                <div>
                  <span className="text-3xl mb-3 block">{opt.icon}</span>
                  <h3 className="font-bold text-base text-white mb-2">{opt.title}</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">{opt.description}</p>
                </div>
                <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs font-semibold">
                  <span className={isSelected ? 'text-cyan-300' : 'text-slate-400'}>
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
              <span>Explore Full {selectedQuizOption.recommendationTitle.split('—')[1]?.trim()} Itinerary</span>
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
              <span>12-Factor Evaluation Matrix</span>
            </div>
            <h2 className="text-2xl font-bold text-slate-900">
              Side-by-Side Comparison Matrix
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">
              Specific calculations for 4 adults and 1 active 9-year-old child
            </p>
          </div>

          {/* Filter toolbar */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Filter:</span>
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
                    ? 'bg-slate-900 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Matrix Table */}
        <div className="overflow-x-auto border border-slate-200 rounded-2xl">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-slate-900 text-white font-semibold">
              <tr>
                <th className="py-4 px-4 sm:px-6 w-1/4">Evaluation Criteria</th>
                <th className={`py-4 px-4 w-1/4 ${highlightedCol === 'islet' ? 'bg-sky-800' : ''}`}>
                  🏖️ Option 1: Islet Explorer
                </th>
                <th className={`py-4 px-4 w-1/4 ${highlightedCol === 'isle-of-pines' ? 'bg-emerald-800' : ''}`}>
                  🏝️ Option 2: Isle of Pines
                </th>
                <th className={`py-4 px-4 w-1/4 ${highlightedCol === 'west-coast' ? 'bg-amber-800' : ''}`}>
                  🚙 Option 3: West Coast & Poé
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredFactors.map((factor, idx) => (
                <tr key={factor.factor} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/60'}>
                  <td className="py-4 px-4 sm:px-6 font-bold text-slate-900 align-top">
                    {factor.factor}
                  </td>

                  {/* Option 1 */}
                  <td className={`py-4 px-4 text-slate-700 align-top ${highlightedCol === 'islet' ? 'bg-sky-50 font-medium' : ''}`}>
                    {factor.islet.badge && (
                      <span className="inline-block text-[10px] font-extrabold uppercase tracking-wider text-sky-800 bg-sky-100 px-2 py-0.5 rounded mb-1">
                        ★ {factor.islet.badge}
                      </span>
                    )}
                    <p className="leading-relaxed">{factor.islet.text}</p>
                  </td>

                  {/* Option 2 */}
                  <td className={`py-4 px-4 text-slate-700 align-top ${highlightedCol === 'isle-of-pines' ? 'bg-emerald-50 font-medium' : ''}`}>
                    {factor.isleOfPines.badge && (
                      <span className="inline-block text-[10px] font-extrabold uppercase tracking-wider text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded mb-1">
                        ★ {factor.isleOfPines.badge}
                      </span>
                    )}
                    <p className="leading-relaxed">{factor.isleOfPines.text}</p>
                  </td>

                  {/* Option 3 */}
                  <td className={`py-4 px-4 text-slate-700 align-top ${highlightedCol === 'west-coast' ? 'bg-amber-50 font-medium' : ''}`}>
                    {factor.westCoast.badge && (
                      <span className="inline-block text-[10px] font-extrabold uppercase tracking-wider text-amber-800 bg-amber-100 px-2 py-0.5 rounded mb-1">
                        ★ {factor.westCoast.badge}
                      </span>
                    )}
                    <p className="leading-relaxed">{factor.westCoast.text}</p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

    </div>
  );
};
