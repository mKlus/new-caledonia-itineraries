import React from 'react';
import { CheckSquare, Calendar, Tag } from 'lucide-react';
import { ChecklistItem } from '../data/types';
import { useLocalStorage } from '../hooks/useLocalStorage';

interface ChecklistWidgetProps {
  itineraryId: string;
  items: ChecklistItem[];
}

export const ChecklistWidget: React.FC<ChecklistWidgetProps> = ({ itineraryId, items }) => {
  const [checkedIds, setCheckedIds] = useLocalStorage<string[]>(`nc_checklist_${itineraryId}`, []);

  const toggleItem = (id: string) => {
    setCheckedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const total = items.length;
  const completed = items.filter((item) => checkedIds.includes(item.id)).length;
  const progressPercent = total > 0 ? Math.round((completed / total) * 100) : 0;

  return (
    <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs p-5 sm:p-6">
      
      {/* Header & Progress */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
        <div>
          <h3 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
            <CheckSquare className="w-5 h-5 text-cyan-600" />
            <span>Pre-Departure Action Checklist</span>
          </h3>
          <p className="text-xs text-slate-500 mt-0.5">
            Progress is automatically saved to your browser’s storage
          </p>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-xs font-semibold text-slate-700">
            {completed} of {total} completed ({progressPercent}%)
          </span>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-slate-100 rounded-full h-2.5 mb-6 overflow-hidden">
        <div
          className="bg-gradient-to-r from-cyan-500 to-emerald-500 h-2.5 rounded-full transition-all duration-300"
          style={{ width: `${progressPercent}%` }}
        />
      </div>

      {/* Checklist items */}
      <div className="space-y-3">
        {items.map((item) => {
          const isChecked = checkedIds.includes(item.id);

          return (
            <div
              key={item.id}
              onClick={() => toggleItem(item.id)}
              className={`flex items-start gap-3.5 p-3.5 rounded-xl border transition cursor-pointer select-none ${
                isChecked
                  ? 'bg-slate-50 border-slate-200 opacity-60'
                  : 'bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50/50'
              }`}
            >
              <input
                type="checkbox"
                checked={isChecked}
                onChange={() => {}} // handled by parent div
                className="w-4 h-4 mt-1 rounded border-slate-300 text-cyan-600 focus:ring-cyan-500 cursor-pointer"
              />

              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-2 mb-0.5">
                  <span
                    className={`text-sm font-semibold ${
                      isChecked ? 'line-through text-slate-500' : 'text-slate-900'
                    }`}
                  >
                    {item.task}
                  </span>
                  <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-cyan-700 bg-cyan-50 px-2 py-0.5 rounded-md">
                    <Calendar className="w-3 h-3" />
                    {item.deadline}
                  </span>
                </div>
                <p className="text-xs text-slate-500">{item.notes}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
