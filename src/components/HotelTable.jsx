import { hotels } from '../data/tips';

const urgencyStyles = {
  critical: 'bg-red-600 text-white',
  high: 'bg-amber-dark text-white',
  medium: 'bg-amber-mid text-neutral-ink',
  low: 'bg-forest-mid text-white',
};

export default function HotelTable() {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 overflow-hidden">
      <div className="px-4 py-3 bg-gray-50 dark:bg-gray-800 border-b border-gray-100 dark:border-gray-700">
        <h3 className="font-serif text-lg font-bold text-neutral-ink dark:text-gray-100">Hotel Booking Table</h3>
        <p className="text-xs text-neutral-muted dark:text-gray-400 mt-0.5">2pm check-in · 12pm check-out — always.</p>
      </div>
      <div className="divide-y divide-gray-50 dark:divide-gray-800">
        {hotels.map((h, i) => (
          <div key={i} className="px-4 py-4">
            <div className="flex items-start justify-between gap-2">
              <div className="flex-1">
                <p className="text-sm font-semibold text-neutral-ink dark:text-gray-100">{h.name}</p>
                <p className="text-xs text-neutral-muted dark:text-gray-400 mt-0.5">
                  {h.checkIn} → {h.checkOut} · {h.nights} nights · {h.budget}
                </p>
              </div>
              <span className={`text-xs px-2 py-1 rounded-full font-semibold shrink-0 ${urgencyStyles[h.urgencyLevel]}`}>
                {h.urgency}
              </span>
            </div>
          </div>
        ))}
      </div>
      <div className="px-4 py-3 bg-amber-light dark:bg-amber-900/20 border-t border-amber-mid/20">
        <p className="text-xs text-amber-dark dark:text-amber-mid font-medium">
          ⚠️ On each transition day, store bags at reception and travel light. Never pay for two rooms on the same night.
        </p>
      </div>
    </div>
  );
}
