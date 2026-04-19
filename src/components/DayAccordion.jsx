import { useState } from 'react';
import ActivityRow from './ActivityRow';

export default function DayAccordion({ day }) {
  const [open, setOpen] = useState(false);
  const isBestDay = day.label?.includes('BEST DAY');
  const isTravelDay = day.label === 'Travel day';

  return (
    <div className={`border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden mb-2 transition-all ${isBestDay ? 'ring-2 ring-amber-mid' : ''}`}>
      <button
        onClick={() => setOpen(!open)}
        className={`w-full flex items-center justify-between px-4 py-3 text-left transition-colors
          ${isBestDay
            ? 'bg-amber-light dark:bg-amber-900/20 hover:bg-amber-mid/20'
            : isTravelDay
              ? 'bg-blue-50 dark:bg-blue-900/10 hover:bg-blue-100 dark:hover:bg-blue-900/20'
              : 'bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-750'
          }
        `}
      >
        <div className="flex items-center gap-3">
          <div>
            <div className="flex items-center gap-2">
              <span className="font-semibold text-sm text-neutral-ink dark:text-gray-100">
                {day.date}
              </span>
              <span className="text-xs text-neutral-muted dark:text-gray-500">
                {day.dayName}
              </span>
            </div>
            {day.label && (
              <span className={`text-xs font-medium mt-0.5 block ${isBestDay ? 'text-amber-dark dark:text-amber-mid' : isTravelDay ? 'text-blue-600 dark:text-blue-400' : 'text-forest-dark dark:text-forest-mid'}`}>
                {day.label}
              </span>
            )}
          </div>
          {day.callout && (
            <span className="hidden sm:inline-block text-xs px-2 py-0.5 rounded-full bg-amber-mid/30 text-amber-dark dark:text-amber-mid font-medium">
              ⚠️ Note
            </span>
          )}
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs text-neutral-muted dark:text-gray-500">{day.activities.length} activities</span>
          <span className={`text-neutral-muted dark:text-gray-400 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}>
            ▼
          </span>
        </div>
      </button>

      {open && (
        <div className="bg-white dark:bg-gray-900 px-4">
          {day.callout && (
            <div className={`mt-3 px-3 py-2 rounded-lg text-sm ${day.callout.type === 'amber' ? 'bg-amber-light dark:bg-amber-900/20 text-amber-dark dark:text-amber-mid' : 'bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-300'}`}>
              ⚠️ {day.callout.text}
            </div>
          )}
          {day.activities.map((act, i) => (
            <ActivityRow key={i} activity={act} />
          ))}
        </div>
      )}
    </div>
  );
}
