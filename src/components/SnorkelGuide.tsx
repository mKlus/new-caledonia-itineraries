import React from 'react';
import { Star, ShieldAlert, Waves, Compass, Fish } from 'lucide-react';
import { SnorkelSpot } from '../data/types';

interface SnorkelGuideProps {
  spots: SnorkelSpot[];
}

export const SnorkelGuide: React.FC<SnorkelGuideProps> = ({ spots }) => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {spots.map((spot) => (
          <div
            key={spot.name}
            className="bg-white rounded-2xl border border-slate-200 p-5 flex flex-col justify-between shadow-xs hover:border-slate-300 transition"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="text-xs font-bold uppercase tracking-wider text-cyan-600 bg-cyan-50 px-2.5 py-0.5 rounded-full">
                  {spot.entryType}
                </span>

                {/* Kid Friendly Star Rating */}
                <div className="flex items-center gap-0.5" title={`Kid Friendly Rating: ${spot.kidFriendlyRating}/5`}>
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-3.5 h-3.5 ${
                        i < spot.kidFriendlyRating ? 'text-amber-400 fill-amber-400' : 'text-slate-200'
                      }`}
                    />
                  ))}
                </div>
              </div>

              <h3 className="text-base font-bold text-slate-900 mb-1">{spot.name}</h3>
              <p className="text-xs text-slate-500 mb-3">{spot.location} • Depth: {spot.depth}</p>

              {/* Marine life tags */}
              <div className="mb-4">
                <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block mb-1.5 flex items-center gap-1">
                  <Fish className="w-3.5 h-3.5 text-cyan-500" />
                  Key Marine Life:
                </span>
                <div className="flex flex-wrap gap-1">
                  {spot.marineLife.map((animal) => (
                    <span
                      key={animal}
                      className="text-[11px] font-medium text-cyan-800 bg-cyan-50/80 px-2 py-0.5 rounded-md border border-cyan-100"
                    >
                      {animal}
                    </span>
                  ))}
                </div>
              </div>

              {/* Notes */}
              <p className="text-xs text-slate-600 leading-relaxed mb-3">
                {spot.notes}
              </p>
            </div>

            {/* Conditions & Caution Alert */}
            <div className="pt-3 border-t border-slate-100 space-y-2 text-[11px]">
              <div className="flex items-start gap-1.5 text-slate-600">
                <Compass className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                <span><strong>Best Time:</strong> {spot.bestTime}</span>
              </div>
              <div className="flex items-start gap-1.5 text-emerald-800 bg-emerald-50/70 p-2 rounded-lg border border-emerald-100">
                <Waves className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Water Safety:</strong> {spot.currentCaution}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
