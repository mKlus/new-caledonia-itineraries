import React from 'react';
import { Bed, CheckCircle2, AlertCircle, Home, Sparkles } from 'lucide-react';
import { Accommodation } from '../data/types';
import { useCurrency } from '../hooks/useCurrency';

interface AccommodationCardsProps {
  accommodations: Accommodation[];
}

export const AccommodationCards: React.FC<AccommodationCardsProps> = ({ accommodations }) => {
  const { formatCost } = useCurrency();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {accommodations.map((acc, idx) => (
        <div
          key={acc.name}
          className={`bg-white rounded-2xl border ${
            idx === 0 ? 'border-cyan-300 ring-2 ring-cyan-500/20' : 'border-slate-200'
          } p-6 flex flex-col justify-between shadow-xs`}
        >
          <div>
            {/* Top Tag & Price */}
            <div className="flex items-start justify-between gap-3 mb-3">
              <div>
                <span className="inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider text-cyan-700 bg-cyan-50 px-2.5 py-1 rounded-full border border-cyan-200">
                  <Home className="w-3 h-3 text-cyan-600" />
                  {acc.type}
                </span>
                <h3 className="text-xl font-bold text-slate-900 mt-2">{acc.name}</h3>
                <p className="text-xs text-slate-500">{acc.location} • {acc.nights}</p>
              </div>

              <div className="text-right shrink-0">
                <span className="text-xs text-slate-400 block font-medium">From</span>
                <span className="text-base font-bold text-slate-900 block">
                  {formatCost(acc.pricePerNightXPF, acc.pricePerNightAUD)}
                </span>
                <span className="text-[10px] text-slate-500">/ night</span>
              </div>
            </div>

            {/* Bedding for 4 adults + 1 child */}
            <div className="bg-slate-50 rounded-xl p-3 border border-slate-100 mb-4 flex items-center gap-2.5">
              <Bed className="w-4 h-4 text-cyan-600 shrink-0" />
              <div>
                <span className="text-xs font-semibold text-slate-700 block">Bedding for 5 Pax:</span>
                <span className="text-xs text-slate-600">{acc.bedding}</span>
              </div>
            </div>

            {/* Features pills */}
            <div className="flex flex-wrap gap-1.5 mb-4">
              {acc.features.map((feat) => (
                <span
                  key={feat}
                  className="text-[11px] font-medium text-slate-600 bg-slate-100 px-2.5 py-0.5 rounded-md"
                >
                  {feat}
                </span>
              ))}
            </div>

            {/* Pros & Cons */}
            <div className="space-y-2 mb-4 text-xs">
              {acc.pros.map((pro) => (
                <div key={pro} className="flex items-start gap-1.5 text-slate-700">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{pro}</span>
                </div>
              ))}
              {acc.cons.map((con) => (
                <div key={con} className="flex items-start gap-1.5 text-slate-500">
                  <AlertCircle className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
                  <span>{con}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Booking Tip Footer */}
          <div className="mt-4 pt-3 border-t border-slate-100 bg-cyan-50/50 -mx-6 -mb-6 p-4 rounded-b-2xl">
            <div className="flex items-start gap-2 text-xs text-cyan-950">
              <Sparkles className="w-4 h-4 text-cyan-600 shrink-0 mt-0.5" />
              <div>
                <strong className="font-semibold">Booking Advice: </strong>
                <span>{acc.bookingTip}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
