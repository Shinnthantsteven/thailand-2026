import { budget } from '../data/tips';

const icons = ['🏨', '🍜', '🚗', '🎟️'];

export default function BudgetCards() {
  const total = budget.reduce((sum, b) => sum + b.thb, 0);
  const tripBudget = 40000;
  const buffer = tripBudget - total;

  return (
    <div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
        {budget.map((b, i) => (
          <div key={i} className="bg-white dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-800 p-4 text-center shadow-sm">
            <div className="text-2xl mb-1">{icons[i]}</div>
            <p className="text-lg font-bold text-neutral-ink dark:text-gray-100">฿{b.thb.toLocaleString()}</p>
            <p className="text-xs text-neutral-muted dark:text-gray-400 leading-tight mt-0.5">{b.category}</p>
          </div>
        ))}
      </div>

      <div className="bg-forest-dark text-white rounded-2xl p-5">
        <div className="flex justify-between items-center mb-3">
          <span className="text-white/80 text-sm">Total estimated</span>
          <span className="text-xl font-bold">฿{total.toLocaleString()}</span>
        </div>
        <div className="flex justify-between items-center mb-3">
          <span className="text-white/80 text-sm">Your budget (4,000 AED)</span>
          <span className="text-xl font-bold">฿{tripBudget.toLocaleString()}</span>
        </div>
        <div className="border-t border-white/20 pt-3 flex justify-between items-center">
          <span className="font-semibold">Buffer remaining</span>
          <div className="text-right">
            <span className="text-2xl font-bold text-amber-mid">฿{buffer.toLocaleString()}</span>
            <p className="text-xs text-white/60">{(buffer / 10).toLocaleString()} AED</p>
          </div>
        </div>
      </div>
    </div>
  );
}
