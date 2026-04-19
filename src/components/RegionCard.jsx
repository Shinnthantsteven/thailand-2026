import { useState } from 'react';
import PlaceImage from './PlaceImage';
import DayAccordion from './DayAccordion';

const urgencyColors = {
  critical: 'bg-red-600 text-white',
  high: 'bg-amber-dark text-white',
  medium: 'bg-amber-mid text-neutral-ink',
  low: 'bg-forest-mid text-white',
};

export default function RegionCard({ region }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="rounded-2xl overflow-hidden shadow-md bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 mb-6">
      {/* Hero */}
      <div className="relative h-52 sm:h-64 cursor-pointer" onClick={() => setExpanded(!expanded)}>
        <PlaceImage
          keyword={region.heroKeyword}
          fallbackGradient={region.gradientFallback}
          className="w-full h-52 sm:h-64"
          size="800x500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

        {/* Region name overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-5">
          <div className="flex items-end justify-between">
            <div>
              <h2 className="font-serif text-2xl text-white font-bold drop-shadow-lg">{region.name}</h2>
              <p className="text-white/80 text-sm mt-0.5">{region.dates}</p>
            </div>
            <div className="flex flex-col items-end gap-1">
              <span className="bg-white/20 backdrop-blur-sm text-white text-sm px-3 py-1 rounded-full font-medium">
                {region.nights} nights
              </span>
              <span className={`text-xs px-2 py-1 rounded-full font-semibold ${urgencyColors[region.hotel.urgencyLevel]}`}>
                {region.hotel.urgency}
              </span>
            </div>
          </div>
        </div>

        {/* Expand indicator */}
        <div className="absolute top-3 right-3 bg-white/20 backdrop-blur-sm rounded-full w-8 h-8 flex items-center justify-center text-white">
          <span className={`transition-transform duration-200 text-sm ${expanded ? 'rotate-180' : ''}`}>▼</span>
        </div>
      </div>

      {/* Info bar */}
      <div className="px-5 py-3 bg-gray-50 dark:bg-gray-800/50 border-b border-gray-100 dark:border-gray-800 flex flex-wrap gap-3 items-center justify-between">
        <div className="flex flex-wrap gap-2">
          {region.transport.map((t, i) => (
            <span key={i} className="text-xs bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full px-3 py-1 text-neutral-muted dark:text-gray-400 font-medium">
              {t}
            </span>
          ))}
        </div>
        <div className="text-right">
          <p className="text-xs text-neutral-muted dark:text-gray-500">Hotel</p>
          <p className="text-sm font-semibold text-neutral-ink dark:text-gray-200">{region.hotel.name}</p>
          <p className="text-xs text-forest-dark dark:text-forest-mid">{region.hotel.price}</p>
        </div>
      </div>

      {/* Callout if any */}
      {region.callout && (
        <div className={`mx-5 mt-4 px-4 py-3 rounded-xl text-sm font-medium ${region.callout.type === 'critical' ? 'bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-300 border border-red-200 dark:border-red-800' : 'bg-amber-light dark:bg-amber-900/20 text-amber-dark dark:text-amber-mid border border-amber-mid/30'}`}>
          {region.callout.type === 'critical' ? '🚨 ' : '⚠️ '}{region.callout.text}
        </div>
      )}

      {/* Days accordion */}
      {expanded && (
        <div className="px-5 py-4">
          {region.days.map((day, i) => (
            <DayAccordion key={i} day={day} />
          ))}
        </div>
      )}

      {!expanded && (
        <button
          onClick={() => setExpanded(true)}
          className="w-full py-3 text-sm text-forest-dark dark:text-forest-mid font-medium hover:bg-forest-light dark:hover:bg-forest-dark/10 transition-colors"
        >
          Show {region.days.length} days →
        </button>
      )}
    </div>
  );
}
