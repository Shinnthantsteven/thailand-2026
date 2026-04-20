import { regions } from '../data/regions';
import UnsplashImg from './UnsplashImg';

const stops = [
  { label: 'CM Old City', dates: 'Jun 2–5', nights: '3N', regionId: 'chiangmai-old' },
  { label: 'Pai', dates: 'Jun 5–9', nights: '4N', regionId: 'pai' },
  { label: 'Ban Rak Thai', dates: 'Jun 9–13', nights: '4N', regionId: 'banrakthai' },
  { label: 'Doi Inthanon', dates: 'Jun 13–18', nights: '5N', regionId: 'doiinthanon' },
  { label: 'Nimman CM', dates: 'Jun 18–25', nights: '7N', regionId: 'nimman' },
];

const legs = [
  {
    mode: 'Minivan',
    cost: '฿200',
    time: '3–4 hrs',
    from: 'CM Old City',
    to: 'Pai',
    date: 'Jun 5',
    note: 'Arcade Bus Terminal → Pai · 762 curves · Take motion sickness pill first',
    mapsUrl: 'https://www.google.com/maps/dir/?api=1&origin=Arcade+Bus+Terminal+Chiang+Mai+Thailand&destination=Pai+Mae+Hong+Son+Thailand&travelmode=driving',
  },
  {
    mode: 'Private driver',
    cost: '฿500',
    time: '2–3 hrs',
    from: 'Pai',
    to: 'Ban Rak Thai',
    date: 'Jun 9',
    note: 'Book through Pai guesthouse · Mountain road north',
    mapsUrl: 'https://www.google.com/maps/dir/?api=1&origin=Pai+Mae+Hong+Son+Thailand&destination=Ban+Rak+Thai+Mae+Hong+Son+Thailand&travelmode=driving',
  },
  {
    mode: 'Private driver',
    cost: '฿600',
    time: '5–7 hrs',
    from: 'Ban Rak Thai',
    to: 'Doi Inthanon',
    date: 'Jun 13',
    note: 'Book through Lungwang · Long mountain drive south to Chom Thong',
    mapsUrl: 'https://www.google.com/maps/dir/?api=1&origin=Ban+Rak+Thai+Mae+Hong+Son+Thailand&destination=Chom+Thong+Chiang+Mai+Thailand&travelmode=driving',
  },
  {
    mode: 'Songthaew',
    cost: '฿400',
    time: '~1.5 hrs',
    from: 'Doi Inthanon',
    to: 'Nimman CM',
    date: 'Jun 18',
    note: 'Chom Thong → Nimman · Runs frequently · Easy last leg',
    mapsUrl: 'https://www.google.com/maps/dir/?api=1&origin=Chom+Thong+Chiang+Mai+Thailand&destination=Nimman+Road+Chiang+Mai+Thailand&travelmode=driving',
  },
];

const budget = [
  { label: 'Accommodation', thb: '฿11,000', aed: '1,100 AED', color: 'bg-forest-light dark:bg-forest-dark/30 text-forest-dark dark:text-forest-mid' },
  { label: 'Food', thb: '฿8,750', aed: '875 AED', color: 'bg-amber-light dark:bg-amber-dark/20 text-amber-dark dark:text-amber-mid' },
  { label: 'Transport', thb: '฿7,500', aed: '750 AED', color: 'bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300' },
  { label: 'Activities', thb: '฿3,300', aed: '330 AED', color: 'bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300' },
  { label: 'Total', thb: '฿30,550', aed: '3,055 AED', color: 'bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 font-bold' },
  { label: 'Buffer ✓', thb: '฿9,450', aed: '945 AED', color: 'bg-forest-light dark:bg-forest-dark/40 text-forest-dark dark:text-forest-mid font-bold' },
];

const NODE_X = [90, 270, 450, 630, 810];
const NODE_Y = 90;
const R = 46;

export default function RouteMapTab({ onRegionClick }) {
  return (
    <div className="pb-4">
      {/* Hero */}
      <div className="relative h-40 overflow-hidden bg-forest-dark">
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/60 z-10"/>
        <div className="absolute inset-0 z-20 flex flex-col justify-end p-4">
          <h2 className="font-serif text-2xl text-white">Northern Thailand</h2>
          <p className="text-forest-light text-sm">Jun 2–26 · 24 nights · 5 regions</p>
        </div>
      </div>

      {/* SVG Route Map */}
      <div className="mx-4 mt-4 rounded-2xl overflow-hidden bg-white dark:bg-gray-900 shadow-sm border border-gray-100 dark:border-gray-800">
        <div className="p-3 border-b border-gray-100 dark:border-gray-800">
          <h3 className="font-serif text-base text-gray-800 dark:text-gray-100">Your Route</h3>
          <p className="text-xs text-gray-500 dark:text-gray-400">Scroll horizontally →</p>
        </div>
        <div className="overflow-x-auto scrollbar-hide">
          <svg viewBox="0 0 940 220" width="940" height="220" className="block">
            {legs.map((leg, i) => (
              <line
                key={i}
                x1={NODE_X[i] + R}
                y1={NODE_Y}
                x2={NODE_X[i + 1] - R}
                y2={NODE_Y}
                stroke="#639922"
                strokeDasharray="6,4"
                strokeWidth="2"
              />
            ))}
            {legs.map((leg, i) => {
              const mx = (NODE_X[i] + NODE_X[i + 1]) / 2;
              return (
                <g key={i}>
                  <text x={mx} y={NODE_Y - 26} textAnchor="middle" fontSize="9" fill="#3B6D11" fontFamily="Inter,sans-serif" fontWeight="600">
                    {leg.mode}
                  </text>
                  <text x={mx} y={NODE_Y - 14} textAnchor="middle" fontSize="10" fill="#BA7517" fontFamily="Inter,sans-serif" fontWeight="700">
                    {leg.cost}
                  </text>
                  <text x={mx} y={NODE_Y - 2} textAnchor="middle" fontSize="8.5" fill="#6B7280" fontFamily="Inter,sans-serif">
                    {leg.time}
                  </text>
                </g>
              );
            })}
            {stops.map((stop, i) => (
              <g key={i}>
                <circle cx={NODE_X[i]} cy={NODE_Y} r={R} fill="#3B6D11" stroke="white" strokeWidth="3"/>
                <rect x={NODE_X[i] - 18} y={NODE_Y + R + 4} width="36" height="18" rx="9" fill="#639922"/>
                <text x={NODE_X[i]} y={NODE_Y + R + 16} textAnchor="middle" fontSize="10" fill="white" fontFamily="Inter,sans-serif" fontWeight="700">
                  {stop.nights}
                </text>
                <text x={NODE_X[i]} y={NODE_Y - 8} textAnchor="middle" fontSize="9.5" fill="white" fontFamily="Inter,sans-serif" fontWeight="700">
                  {stop.label.split(' ').slice(0, 2).join(' ')}
                </text>
                <text x={NODE_X[i]} y={NODE_Y + 5} textAnchor="middle" fontSize="8" fill="#EAF3DE" fontFamily="Inter,sans-serif">
                  {stop.label.split(' ').slice(2).join(' ')}
                </text>
                <text x={NODE_X[i]} y={NODE_Y + 16} textAnchor="middle" fontSize="8" fill="#EAF3DE" fontFamily="Inter,sans-serif">
                  {stop.dates}
                </text>
              </g>
            ))}
          </svg>
        </div>
      </div>

      {/* Check-in rule */}
      <div className="mx-4 mt-3 p-3 rounded-xl bg-amber-light dark:bg-amber-dark/20 border border-amber-mid/40">
        <p className="text-xs text-amber-dark dark:text-amber-mid font-medium">
          ℹ️ Check-out always 12pm · Check-in always 2pm · Travel same afternoon · Never pay two rooms one night
        </p>
      </div>

      {/* Journey directions */}
      <div className="px-4 mt-4">
        <h3 className="font-serif text-lg text-gray-800 dark:text-gray-100 mb-3">Journey Directions</h3>
        <div className="space-y-2">
          {legs.map((leg, i) => (
            <div key={i} className="rounded-xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 overflow-hidden">
              <div className="p-3">
                <div className="flex items-center justify-between mb-1.5">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-forest-dark dark:text-forest-mid">{leg.from}</span>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3 h-3 text-gray-400">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                    <span className="text-xs font-bold text-forest-dark dark:text-forest-mid">{leg.to}</span>
                  </div>
                  <span className="text-[10px] text-gray-400 dark:text-gray-500">{leg.date}</span>
                </div>
                <div className="flex items-center gap-3 mb-1.5">
                  <span className="text-xs bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300 px-2 py-0.5 rounded-full font-medium">{leg.mode}</span>
                  <span className="text-xs font-bold text-amber-dark dark:text-amber-mid">{leg.cost}</span>
                  <span className="text-xs text-gray-500 dark:text-gray-400">⏱ {leg.time}</span>
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">{leg.note}</p>
                <a
                  href={leg.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-white bg-forest-dark dark:bg-forest-mid rounded-lg px-3 py-1.5"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                  Open in Google Maps
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Stop cards */}
      <div className="px-4 mt-5">
        <h3 className="font-serif text-lg text-gray-800 dark:text-gray-100 mb-3">Stop Details</h3>
        <div className="space-y-3">
          {regions.map((r) => (
            <button
              key={r.id}
              onClick={() => onRegionClick(r.id)}
              className="w-full text-left rounded-xl overflow-hidden shadow-sm border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 flex items-stretch active:scale-[0.99] transition-transform"
            >
              <div className="w-24 h-20 relative flex-shrink-0 overflow-hidden" style={{ background: r.gradient }}>
                <UnsplashImg
                  photoId={r.photoId}
                  gradient={r.gradient}
                  alt={r.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 p-3 flex flex-col justify-center">
                <div className="font-semibold text-sm text-gray-800 dark:text-gray-100">{r.name}</div>
                <div className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{r.dates}</div>
                <div className="text-xs text-forest-dark dark:text-forest-mid font-medium mt-0.5">{r.nights} nights</div>
              </div>
              <div className="flex items-center pr-3">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 text-gray-300">
                  <path d="M9 18l6-6-6-6"/>
                </svg>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Budget summary */}
      <div className="px-4 mt-5">
        <h3 className="font-serif text-lg text-gray-800 dark:text-gray-100 mb-3">Budget Summary</h3>
        <div className="grid grid-cols-2 gap-2">
          {budget.map((b) => (
            <div key={b.label} className={`rounded-xl p-3 ${b.color}`}>
              <div className="text-[10px] uppercase tracking-wide opacity-70 mb-1">{b.label}</div>
              <div className="text-base font-bold">{b.thb}</div>
              <div className="text-[11px] opacity-70">{b.aed}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
