import { useState, useEffect, useRef } from 'react';
import { regions } from '../data/regions';
import UnsplashImg from './UnsplashImg';

const tagStyles = {
  free: 'bg-forest-light text-forest-dark dark:bg-forest-dark/30 dark:text-forest-mid',
  food: 'bg-amber-light text-amber-dark dark:bg-amber-dark/20 dark:text-amber-mid',
  paid: 'bg-blue-50 text-blue-700 dark:bg-blue-900/20 dark:text-blue-300',
  transport: 'bg-purple-50 text-purple-700 dark:bg-purple-900/20 dark:text-purple-300',
  warning: 'bg-red-50 text-red-700 dark:bg-red-900/20 dark:text-red-300',
  admin: 'bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400',
  rest: 'bg-teal-50 text-teal-700 dark:bg-teal-900/20 dark:text-teal-300',
};

const callouts = [
  { emoji: '⭐', title: 'June 15 — Best day of the entire trip', body: 'Mae Ya waterfall → Ang Ka cloud forest → Mae Klang Luang coffee. Pack a jacket. One ticket covers everything.', type: 'star' },
  { emoji: '⚠️', title: 'June 21 — ONLY Saturday in Chiang Mai', body: 'Jing Jai Market is Saturday only. You get one chance. Do not miss it.', type: 'warning' },
  { emoji: '⚠️', title: 'June 22 — ONLY Sunday in Nimman', body: 'Sunday Walking Street Wualai Road. One chance only.', type: 'warning' },
  { emoji: '🔴', title: 'Ban Rak Thai — Book Lungwang RIGHT NOW', body: 'Fills faster than anywhere else on this trip.', type: 'urgent' },
  { emoji: '⚠️', title: 'Doi Inthanon — Stay in Chom Thong town', body: 'NOT Suan Sook resort (฿800–1,200 = over budget). Chom Thong guesthouse ฿400–500 + hire driver daily = better value.', type: 'warning' },
  { emoji: '⚠️', title: 'Motion sickness', body: 'Take tablets BEFORE Pai minivan (Jun 5) AND before Ban Rak Thai driver (Jun 9). Not after — too late.', type: 'warning' },
];

const calloutStyle = {
  star: 'bg-amber-light dark:bg-amber-dark/20 border-amber-mid/40',
  warning: 'bg-red-50 dark:bg-red-900/10 border-red-200 dark:border-red-800',
  urgent: 'bg-red-100 dark:bg-red-900/20 border-red-400 dark:border-red-700',
};
const calloutTextStyle = {
  star: 'text-amber-dark dark:text-amber-mid',
  warning: 'text-red-800 dark:text-red-300',
  urgent: 'text-red-900 dark:text-red-200',
};

function ActivityRow({ act }) {
  if (!act.tag && act.note === '—' && act.cost === '—') return null;
  return (
    <div className="py-2 border-b border-gray-50 dark:border-gray-800 last:border-0">
      {act.photoUrl && (
        <div className="mb-2 rounded-lg overflow-hidden h-36 w-full">
          <UnsplashImg
            photoUrl={act.photoUrl}
            gradient="linear-gradient(135deg,#3B6D11,#97C459)"
            alt={act.name}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      <div className="flex gap-2">
        <div className="w-16 flex-shrink-0 text-xs text-gray-400 dark:text-gray-500 pt-0.5">{act.time}</div>
        <div className="flex-1 min-w-0">
          <div className="flex items-start gap-2 flex-wrap">
            <span className="text-sm font-medium text-gray-800 dark:text-gray-100 leading-snug">{act.name}</span>
            {act.tag && tagStyles[act.tag] && (
              <span className={`text-[9px] font-semibold uppercase tracking-wide px-1.5 py-0.5 rounded-full flex-shrink-0 ${tagStyles[act.tag]}`}>
                {act.tag}
              </span>
            )}
          </div>
          {act.note && act.note !== '—' && (
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5 leading-snug">{act.note}</p>
          )}
        </div>
        {act.cost && act.cost !== '—' && (
          <div className="flex-shrink-0 text-xs font-semibold text-forest-dark dark:text-forest-mid pt-0.5">{act.cost}</div>
        )}
      </div>
    </div>
  );
}

function DaySection({ day }) {
  const isStar = day.star;
  return (
    <div className={`mb-3 rounded-xl overflow-hidden border ${isStar ? 'border-amber-mid/50 dark:border-amber-dark/50' : 'border-gray-100 dark:border-gray-800'}`}>
      <div className={`px-3 py-2 ${isStar ? 'bg-amber-light dark:bg-amber-dark/20' : 'bg-gray-50 dark:bg-gray-800/50'}`}>
        <h4 className={`text-sm font-semibold ${isStar ? 'text-amber-dark dark:text-amber-mid' : 'text-gray-700 dark:text-gray-300'}`}>
          {day.date}
        </h4>
      </div>
      <div className="px-3 bg-white dark:bg-gray-900">
        {day.activities.map((act, i) => (
          <ActivityRow key={i} act={act} />
        ))}
      </div>
    </div>
  );
}

function RegionAccordion({ region, isOpen, onToggle, refProp }) {
  return (
    <div ref={refProp} className="mb-3 rounded-2xl overflow-hidden shadow-sm border border-gray-100 dark:border-gray-800">
      <button onClick={onToggle} className="w-full text-left">
        <div className="relative h-28 overflow-hidden" style={{ background: region.gradient }}>
          <UnsplashImg
            photoUrl={region.photoUrl}
            gradient={region.gradient}
            alt={region.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"/>
          <div className="absolute bottom-0 left-0 right-0 p-3 flex items-end justify-between">
            <div>
              <h3 className="font-serif text-lg text-white leading-tight">{region.name}</h3>
              <p className="text-xs text-white/80">{region.dates} · {region.nights} nights</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs bg-white/20 text-white px-2 py-0.5 rounded-full">{region.nights}N</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" className={`w-5 h-5 transition-transform ${isOpen ? 'rotate-180' : ''}`}>
                <path d="M19 9l-7 7-7-7"/>
              </svg>
            </div>
          </div>
        </div>
      </button>

      {isOpen && (
        <div className="bg-white dark:bg-gray-900">
          <div className="px-3 py-2 bg-gray-50 dark:bg-gray-800/50 border-b border-gray-100 dark:border-gray-800">
            <p className="text-xs text-gray-600 dark:text-gray-400">🏨 {region.hotel}</p>
            <p className="text-xs text-gray-500 dark:text-gray-500 mt-0.5">🚗 {region.transport}</p>
          </div>
          <div className="p-3">
            {region.days.map((day, i) => (
              <DaySection key={i} day={day} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default function FullPlanTab({ jumpRegion, onJumpDone }) {
  const [open, setOpen] = useState({});
  const refs = useRef({});

  useEffect(() => {
    if (jumpRegion) {
      setOpen(prev => ({ ...prev, [jumpRegion]: true }));
      setTimeout(() => {
        refs.current[jumpRegion]?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        onJumpDone?.();
      }, 100);
    }
  }, [jumpRegion]);

  function toggle(id) {
    setOpen(prev => ({ ...prev, [id]: !prev[id] }));
  }

  return (
    <div className="pb-4">
      <div className="px-4 pt-4">
        <h2 className="font-serif text-xl text-gray-800 dark:text-gray-100 mb-3">Important Alerts</h2>
        <div className="space-y-2 mb-4">
          {callouts.map((c, i) => (
            <div key={i} className={`rounded-xl p-3 border ${calloutStyle[c.type]}`}>
              <div className={`font-semibold text-sm ${calloutTextStyle[c.type]}`}>{c.emoji} {c.title}</div>
              <p className={`text-xs mt-0.5 ${calloutTextStyle[c.type]} opacity-80`}>{c.body}</p>
            </div>
          ))}
        </div>
        <div className="mb-4 p-3 rounded-xl bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800">
          <p className="text-xs text-blue-800 dark:text-blue-300 font-medium">
            📋 Check-out always 12pm · Check-in always 2pm · Travel same afternoon · Never pay two rooms one night
          </p>
        </div>
        <h2 className="font-serif text-xl text-gray-800 dark:text-gray-100 mb-3">Day-by-Day Plan</h2>
      </div>

      <div className="px-4">
        {regions.map((r) => (
          <RegionAccordion
            key={r.id}
            region={r}
            isOpen={!!open[r.id]}
            onToggle={() => toggle(r.id)}
            refProp={(el) => { refs.current[r.id] = el; }}
          />
        ))}
      </div>

      <div className="mx-4 mt-2 p-3 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
        <div className="text-sm font-semibold text-gray-700 dark:text-gray-200">Jun 25 · Airport area · Last night</div>
        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">฿450–500 · Check in after Nimman checkout · Pre-schedule Grab for Jun 26 morning flight</p>
        <div className="mt-2 pt-2 border-t border-gray-200 dark:border-gray-700 text-sm font-semibold text-amber-dark dark:text-amber-mid">
          Jun 26 · Thursday · Fly Chiang Mai → Bangkok · End of trip
        </div>
      </div>
    </div>
  );
}
