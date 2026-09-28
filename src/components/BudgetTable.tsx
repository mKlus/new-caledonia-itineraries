import React from 'react';
import { DollarSign, PieChart, Users } from 'lucide-react';
import { BudgetItem } from '../data/types';
import { useCurrency } from '../hooks/useCurrency';

interface BudgetTableProps {
  items: BudgetItem[];
  totalXPF: number;
  totalAUD: number;
  perPersonAUD: number;
}

export const BudgetTable: React.FC<BudgetTableProps> = ({ items, totalXPF, totalAUD, perPersonAUD }) => {
  const { formatCost, exchangeRate, setExchangeRate } = useCurrency();

  return (
    <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
      
      {/* Header with live currency exchange rate controller */}
      <div className="p-4 sm:p-5 bg-slate-50 border-b border-slate-200 flex flex-wrap items-center justify-between gap-4">
        <div>
          <h3 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
            <PieChart className="w-5 h-5 text-cyan-600" />
            <span>Complete 6-Night Holiday Budget (5 People)</span>
          </h3>
          <p className="text-xs text-slate-500 mt-0.5">
            Calculated for 4 Adults + 1 Active 9-Year-Old Child
          </p>
        </div>

        <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-xl border border-slate-200 shadow-2xs text-xs">
          <span className="text-slate-500 font-medium">Exchange Rate: $1 AUD =</span>
          <input
            type="number"
            min="50"
            max="120"
            value={exchangeRate}
            onChange={(e) => setExchangeRate(Number(e.target.value) || 73)}
            className="w-14 px-2 py-0.5 border border-slate-300 rounded font-bold text-center text-slate-900 focus:outline-none focus:border-cyan-500"
          />
          <span className="text-slate-500 font-medium">XPF</span>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs sm:text-sm">
          <thead className="bg-slate-100/75 text-slate-700 font-semibold border-b border-slate-200">
            <tr>
              <th className="py-3 px-4 sm:px-6">Expense Category</th>
              <th className="py-3 px-4">Item & Coverage</th>
              <th className="py-3 px-4 text-right">Cost (5 Pax)</th>
              <th className="py-3 px-4 sm:px-6">Logistical Notes</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {items.map((item) => (
              <tr key={item.item} className="hover:bg-slate-50/60 transition">
                <td className="py-3.5 px-4 sm:px-6 font-semibold text-slate-900">
                  {item.category}
                </td>
                <td className="py-3.5 px-4 text-slate-700">
                  {item.item}
                </td>
                <td className="py-3.5 px-4 text-right font-bold text-slate-900 whitespace-nowrap">
                  {formatCost(item.costXPF, item.costAUD)}
                </td>
                <td className="py-3.5 px-4 sm:px-6 text-xs text-slate-500">
                  {item.notes}
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot className="bg-slate-900 text-white font-bold border-t-2 border-slate-950">
            <tr>
              <td colSpan={2} className="py-4 px-4 sm:px-6 text-sm">
                Total Estimated Family Holiday Cost:
              </td>
              <td className="py-4 px-4 text-right text-base text-cyan-300 whitespace-nowrap">
                {formatCost(totalXPF, totalAUD)}
              </td>
              <td className="py-4 px-4 sm:px-6 text-xs text-slate-300">
                <div className="flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5 text-cyan-400" />
                  <span>~${perPersonAUD} AUD / person (5 pax)</span>
                </div>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};
