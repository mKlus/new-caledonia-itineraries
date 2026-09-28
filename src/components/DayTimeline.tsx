import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Sun, Moon, Utensils, DollarSign, Lightbulb, Clock } from 'lucide-react';
import { DaySchedule } from '../data/types';
import { useCurrency } from '../hooks/useCurrency';

interface DayTimelineProps {
  days: DaySchedule[];
}

export const DayTimeline: React.FC<DayTimelineProps> = ({ days }) => {
  const { formatCost } = useCurrency();
  const [selectedDay, setSelectedDay] = useState<number | 'all'>('all');
  const [expandedDays, setExpandedDays] = useState<Record<number, boolean>>(() => {
    const initial: Record<number, boolean> = {};
    days.forEach((d) => {
      initial[d.dayNumber] = true;
    });
    return initial;
  });

  const toggleDay = (dayNum: number) => {
    setExpandedDays((prev) => ({
      ...prev,
      [dayNum]: !prev[dayNum],
    }));
  };

  const handleExpandAll = (expand: boolean) => {
    const updated: Record<number, boolean> = {};
    days.forEach((d) => {
      updated[d.dayNumber] = expand;
    });
    setExpandedDays(updated);
  };

  const filteredDays = selectedDay === 'all'
    ? days
    : days.filter((d) => d.dayNumber === selectedDay);

  const areAllExpanded = days.every((d) => expandedDays[d.dayNumber]);

  return (
    <div className="space-y-6">
      
      {/* Day Filter Controls */}
      <div className="flex flex-wrap items-center justify-between gap-3 bg-white p-3.5 sm:p-4 rounded-2xl border border-slate-200 shadow-xs">
        <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-1">
          <button
            onClick={() => setSelectedDay('all')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition cursor-pointer ${
              selectedDay === 'all'
                ? 'bg-slate-900 text-white shadow-xs'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            All 7 Days
          </button>
          {days.map((day) => {
            const isSelected = selectedDay === day.dayNumber;
            return (
              <button
                key={day.dayNumber}
                onClick={() => setSelectedDay(day.dayNumber)}
                className={`whitespace-nowrap px-3 py-1.5 rounded-lg text-xs font-semibold transition cursor-pointer ${
                  isSelected
                    ? 'bg-cyan-600 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                Day {day.dayNumber}
              </button>
            );
          })}
        </div>

        <button
          onClick={() => handleExpandAll(!areAllExpanded)}
          className="text-xs font-semibold text-slate-600 hover:text-slate-900 px-3 py-1.5 rounded-lg border border-slate-200 hover:bg-slate-50 transition cursor-pointer ml-auto"
        >
          {areAllExpanded ? 'Collapse All Days' : 'Expand All Days'}
        </button>
      </div>

      {/* Days List */}
      <div className="space-y-4">
        {filteredDays.map((day) => {
          const isExpanded = expandedDays[day.dayNumber] ?? true;

          return (
            <div
              key={day.dayNumber}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs transition hover:border-slate-300"
            >
              {/* Day Header Accordion Toggle */}
              <div
                onClick={() => toggleDay(day.dayNumber)}
                className="flex items-center justify-between p-4 sm:p-5 cursor-pointer bg-slate-50/80 hover:bg-slate-100/80 transition select-none border-b border-slate-100"
              >
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 rounded-xl bg-cyan-600 text-white flex flex-col items-center justify-center shrink-0 shadow-xs">
                    <span className="text-[10px] uppercase font-bold tracking-tight">Day</span>
                    <span className="text-base font-extrabold leading-none">{day.dayNumber}</span>
                  </div>

                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <span className="text-xs font-bold text-cyan-700 uppercase tracking-wider">{day.date}</span>
                      <span className="text-slate-300">•</span>
                      <span className="text-xs text-slate-500 font-medium">{day.subtitle}</span>
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                      {day.title}
                    </h3>
                  </div>
                </div>

                <div className="flex items-center gap-3 shrink-0">
                  <div className="hidden sm:flex flex-col items-end text-right">
                    <span className="text-[10px] uppercase font-semibold text-slate-400">Est. Day Spend</span>
                    <span className="text-xs font-bold text-slate-700">
                      {formatCost(day.dayEstCostXPF, day.dayEstCostAUD)}
                    </span>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-500">
                    {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </div>
              </div>

              {/* Day Body */}
              {isExpanded && (
                <div className="p-4 sm:p-6 space-y-6">
                  
                  {/* Summary paragraph */}
                  <p className="text-sm text-slate-600 leading-relaxed italic border-l-3 border-cyan-500 pl-3">
                    {day.summary}
                  </p>

                  {/* 4 Time Slots Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    
                    {/* Morning */}
                    <div className="bg-sky-50/60 rounded-xl p-4 border border-sky-100">
                      <div className="flex items-center gap-2 text-sky-800 font-bold text-xs uppercase tracking-wider mb-2">
                        <Sun className="w-4 h-4 text-amber-500" />
                        <span>Morning: {day.morning.time}</span>
                      </div>
                      <h4 className="text-sm font-bold text-slate-900 mb-1.5">{day.morning.title}</h4>
                      <p className="text-xs text-slate-600 leading-relaxed mb-3">{day.morning.description}</p>
                      {day.morning.tips && (
                        <div className="flex items-start gap-1.5 text-xs text-sky-900 bg-sky-100/70 p-2 rounded-lg">
                          <Lightbulb className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                          <span><strong>Tip:</strong> {day.morning.tips}</span>
                        </div>
                      )}
                    </div>

                    {/* Lunch */}
                    <div className="bg-amber-50/60 rounded-xl p-4 border border-amber-100">
                      <div className="flex items-center justify-between text-amber-800 font-bold text-xs uppercase tracking-wider mb-2">
                        <div className="flex items-center gap-1.5">
                          <Utensils className="w-4 h-4 text-amber-600" />
                          <span>Lunch Suggestion</span>
                        </div>
                        {day.lunch.estCostXPF !== undefined && (
                          <span className="text-[11px] font-semibold text-amber-900 bg-amber-200/60 px-2 py-0.5 rounded-full">
                            {formatCost(day.lunch.estCostXPF, day.lunch.estCostAUD)}
                          </span>
                        )}
                      </div>
                      <h4 className="text-sm font-bold text-slate-900 mb-1.5">{day.lunch.place}</h4>
                      <p className="text-xs text-slate-600 leading-relaxed">{day.lunch.description}</p>
                    </div>

                    {/* Afternoon */}
                    <div className="bg-emerald-50/60 rounded-xl p-4 border border-emerald-100">
                      <div className="flex items-center gap-2 text-emerald-800 font-bold text-xs uppercase tracking-wider mb-2">
                        <Clock className="w-4 h-4 text-emerald-600" />
                        <span>Afternoon: {day.afternoon.time}</span>
                      </div>
                      <h4 className="text-sm font-bold text-slate-900 mb-1.5">{day.afternoon.title}</h4>
                      <p className="text-xs text-slate-600 leading-relaxed mb-3">{day.afternoon.description}</p>
                      {day.afternoon.tips && (
                        <div className="flex items-start gap-1.5 text-xs text-emerald-900 bg-emerald-100/70 p-2 rounded-lg">
                          <Lightbulb className="w-3.5 h-3.5 text-emerald-700 shrink-0 mt-0.5" />
                          <span><strong>Tip:</strong> {day.afternoon.tips}</span>
                        </div>
                      )}
                    </div>

                    {/* Dinner & Evening */}
                    <div className="bg-indigo-50/60 rounded-xl p-4 border border-indigo-100">
                      <div className="flex items-center justify-between text-indigo-800 font-bold text-xs uppercase tracking-wider mb-2">
                        <div className="flex items-center gap-1.5">
                          <Moon className="w-4 h-4 text-indigo-600" />
                          <span>Dinner & Evening</span>
                        </div>
                        {day.dinner.estCostXPF !== undefined && (
                          <span className="text-[11px] font-semibold text-indigo-900 bg-indigo-200/60 px-2 py-0.5 rounded-full">
                            {formatCost(day.dinner.estCostXPF, day.dinner.estCostAUD)}
                          </span>
                        )}
                      </div>
                      <h4 className="text-sm font-bold text-slate-900 mb-1.5">{day.dinner.place}</h4>
                      <p className="text-xs text-slate-600 leading-relaxed mb-2">{day.dinner.description}</p>
                      <p className="text-xs text-slate-500">{day.evening.description}</p>
                    </div>

                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
