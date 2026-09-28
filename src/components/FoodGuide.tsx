import React from 'react';
import { Croissant, ShoppingBag, Utensils, AlertTriangle } from 'lucide-react';
import { BakeryOrFoodSpot } from '../data/types';

interface FoodGuideProps {
  spots: BakeryOrFoodSpot[];
}

export const FoodGuide: React.FC<FoodGuideProps> = ({ spots }) => {
  return (
    <div className="space-y-6">
      
      {/* Armistice Day Callout Banner */}
      <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 sm:p-5 flex items-start gap-3.5">
        <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
        <div className="text-xs sm:text-sm text-amber-950">
          <strong className="font-bold">Public Holiday Reminder: Wednesday, 11 November 2026 (Armistice Day)</strong>
          <p className="mt-1 text-amber-800 leading-relaxed">
            Supermarkets, banks, and standard retail bakeries across Nouméa and Bourail will be closed. 
            All featured itineraries are specifically scheduled around this: Wednesday is allocated to outdoor nature reserves 
            (Parc de la Rivière Bleue, Fort Teremba, and island boat charters) which remain open. 
            <strong> Ensure you purchase groceries and breakfast baguettes on Tuesday afternoon!</strong>
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {spots.map((spot) => (
          <div
            key={spot.name}
            className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                  {spot.type.includes('Bakery') && <Croissant className="w-4 h-4 text-amber-600" />}
                  {spot.type.includes('Supermarket') && <ShoppingBag className="w-4 h-4 text-emerald-600" />}
                  {spot.type.includes('Bistro') && <Utensils className="w-4 h-4 text-rose-600" />}
                  {spot.type}
                </span>
              </div>

              <h3 className="text-base font-bold text-slate-900 mb-1">{spot.name}</h3>
              <p className="text-xs text-slate-500 mb-2">{spot.location}</p>

              <div className="bg-slate-50 rounded-xl p-2.5 text-xs text-slate-700 mb-3 border border-slate-100">
                <strong className="text-slate-900">Must Try: </strong>
                <span>{spot.specialty}</span>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed">
                {spot.recommendation}
              </p>
            </div>

            {spot.holidayNote && (
              <div className="mt-3 pt-2.5 border-t border-slate-100 text-[11px] text-amber-700 font-medium">
                ⚠️ {spot.holidayNote}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
