import HotelTable from './HotelTable';
import BudgetCards from './BudgetCards';
import PackingList from './PackingList';
import { tonightTodos, moneyTips, simTips, weatherTips, templeTips, healthTips } from '../data/tips';

function TipSection({ title, icon, children }) {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 overflow-hidden">
      <div className="px-4 py-3 border-b border-gray-100 dark:border-gray-700">
        <h3 className="font-serif text-lg font-bold text-neutral-ink dark:text-gray-100">{icon} {title}</h3>
      </div>
      <div className="p-4">{children}</div>
    </div>
  );
}

export default function TipsTab() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-6 space-y-6">
      {/* Tonight from Dubai */}
      <div className="bg-red-600 text-white rounded-2xl p-5">
        <h2 className="font-serif text-xl font-bold mb-3">🚨 Do Tonight from Dubai</h2>
        <ul className="space-y-2">
          {tonightTodos.map((todo, i) => (
            <li key={i} className="flex gap-2 text-sm">
              <span className="shrink-0">→</span>
              <span>{todo}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Hotel table */}
      <HotelTable />

      {/* Budget */}
      <TipSection title="Budget Summary" icon="💰">
        <BudgetCards />
      </TipSection>

      {/* Money */}
      <TipSection title="Money" icon="💵">
        <div className="grid sm:grid-cols-2 gap-3">
          {moneyTips.map((t, i) => (
            <div key={i} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-3">
              <p className="font-semibold text-sm text-neutral-ink dark:text-gray-100 mb-0.5">{t.title}</p>
              <p className="text-xs text-neutral-muted dark:text-gray-400">{t.body}</p>
            </div>
          ))}
        </div>
      </TipSection>

      {/* SIM card */}
      <TipSection title="SIM Card" icon="📶">
        <div className="grid sm:grid-cols-2 gap-3">
          {simTips.map((t, i) => (
            <div key={i} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-3">
              <p className="font-semibold text-sm text-neutral-ink dark:text-gray-100 mb-0.5">{t.title}</p>
              <p className="text-xs text-neutral-muted dark:text-gray-400">{t.body}</p>
            </div>
          ))}
        </div>
      </TipSection>

      {/* Weather */}
      <TipSection title="Weather in June" icon="🌦️">
        <div className="space-y-3">
          {weatherTips.map((t, i) => (
            <div key={i} className="flex gap-3 border-b border-gray-50 dark:border-gray-800 last:border-0 pb-3 last:pb-0">
              <div className="flex-1">
                <p className="font-semibold text-sm text-neutral-ink dark:text-gray-100">{t.title}</p>
                <p className="text-xs text-neutral-muted dark:text-gray-400">{t.body}</p>
              </div>
            </div>
          ))}
        </div>
      </TipSection>

      {/* Temples */}
      <TipSection title="Temples + Culture" icon="🛕">
        <ul className="space-y-2">
          {templeTips.map((tip, i) => (
            <li key={i} className="flex gap-2 text-sm text-neutral-muted dark:text-gray-400">
              <span className="text-forest-mid shrink-0">•</span>
              {tip}
            </li>
          ))}
        </ul>
      </TipSection>

      {/* Health */}
      <TipSection title="Health + Safety" icon="🏥">
        <div className="space-y-3">
          {healthTips.map((t, i) => (
            <div key={i} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-3">
              <p className="font-semibold text-sm text-neutral-ink dark:text-gray-100 mb-0.5">{t.title}</p>
              <p className="text-xs text-neutral-muted dark:text-gray-400">{t.body}</p>
            </div>
          ))}
        </div>
      </TipSection>

      {/* Packing list */}
      <PackingList />
    </div>
  );
}
