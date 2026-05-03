import { useState, useEffect } from 'react';
import { hotels, budget, tonightList, moneyTips, transportTips, transportBreakdown, activitiesBreakdown, weatherTips, halalTips, cultureTips, healthTips, packingList } from '../data/tips';

const urgencyStyle = {
  red: 'bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300 border-red-300 dark:border-red-700',
  orange: 'bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-300 border-orange-300 dark:border-orange-700',
  yellow: 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300 border-yellow-300 dark:border-yellow-700',
  green: 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 border-green-300 dark:border-green-700',
};

function TipSection({ title, emoji, items, color = 'gray' }) {
  const colorMap = {
    gray: 'border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-800/50 text-gray-700 dark:text-gray-300',
    green: 'border-forest-mid/30 dark:border-forest-mid/20 bg-forest-light dark:bg-forest-dark/30 text-forest-dark dark:text-forest-mid',
    amber: 'border-amber-mid/30 dark:border-amber-dark/30 bg-amber-light dark:bg-amber-dark/20 text-amber-dark dark:text-amber-mid',
    blue: 'border-blue-100 dark:border-blue-900/30 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300',
    red: 'border-red-100 dark:border-red-900/30 bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-300',
    purple: 'border-purple-100 dark:border-purple-900/30 bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300',
  };
  return (
    <div className={`mx-4 mb-3 rounded-xl overflow-hidden border ${colorMap[color].split(' ')[0]}`}>
      <div className={`px-4 py-2.5 ${colorMap[color]}`}>
        <h3 className="font-semibold text-sm">{emoji} {title}</h3>
      </div>
      <div className="px-4 py-3 bg-white dark:bg-gray-900 space-y-2">
        {items.map((item, i) => (
          <div key={i} className="flex gap-2">
            <span className="text-gray-300 dark:text-gray-600 flex-shrink-0 mt-0.5">•</span>
            <p className="text-sm text-gray-600 dark:text-gray-400">{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function BreakdownSection({ title, emoji, data, color }) {
  const colorMap = {
    purple: { border: 'border-purple-100 dark:border-purple-900/30', header: 'bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300', total: 'text-purple-700 dark:text-purple-300' },
    blue: { border: 'border-blue-100 dark:border-blue-900/30', header: 'bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300', total: 'text-blue-700 dark:text-blue-300' },
  };
  const c = colorMap[color];
  return (
    <div className={`mx-4 mb-3 rounded-xl overflow-hidden border ${c.border}`}>
      <div className={`px-4 py-2.5 ${c.header}`}>
        <h3 className="font-semibold text-sm">{emoji} {title}</h3>
      </div>
      <div className="bg-white dark:bg-gray-900 divide-y divide-gray-50 dark:divide-gray-800">
        {data.map((section, i) => (
          <div key={i} className="px-4 py-3">
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-xs font-bold text-gray-700 dark:text-gray-200">{section.region}</span>
              <span className={`text-xs font-bold ${c.total}`}>{section.total}</span>
            </div>
            {section.items.map((item, j) => (
              <div key={j} className="flex gap-2 mt-0.5">
                <span className="text-gray-300 flex-shrink-0">→</span>
                <p className="text-xs text-gray-500 dark:text-gray-400">{item}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function TipsTab() {
  const [checked, setChecked] = useState(() => {
    try { return JSON.parse(localStorage.getItem('packing') || '{}'); } catch { return {}; }
  });

  useEffect(() => {
    localStorage.setItem('packing', JSON.stringify(checked));
  }, [checked]);

  function toggle(id) {
    setChecked(prev => ({ ...prev, [id]: !prev[id] }));
  }

  const doneCount = packingList.filter(p => checked[p.id]).length;

  return (
    <div className="pb-4">
      <div className="px-4 pt-4 pb-3">
        <h2 className="font-serif text-2xl text-gray-800 dark:text-gray-100">Trip Tips</h2>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">Hotels · Budget · Transport · Activities · Culture</p>
      </div>

      {/* Hotels */}
      <div className="mx-4 mb-4">
        <h3 className="font-serif text-lg text-gray-800 dark:text-gray-100 mb-2">🏨 All Hotels</h3>
        <div className="rounded-xl overflow-hidden border border-gray-100 dark:border-gray-800">
          {hotels.map((h, i) => (
            <div key={i} className={`flex gap-3 p-3 bg-white dark:bg-gray-900 ${i < hotels.length - 1 ? 'border-b border-gray-50 dark:border-gray-800' : ''}`}>
              <div className="flex-1 min-w-0">
                <div className="text-sm font-medium text-gray-800 dark:text-gray-100 leading-tight">{h.name}</div>
                <div className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                  {h.checkIn} → {h.checkOut} · {h.nights} nights · <span className="font-semibold text-forest-dark dark:text-forest-mid">{h.budget}</span>
                </div>
              </div>
              <span className={`flex-shrink-0 text-[10px] font-bold px-2 py-0.5 rounded-full border self-start mt-0.5 ${urgencyStyle[h.urgency]}`}>
                {h.urgencyLabel}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Budget Summary */}
      <div className="mx-4 mb-4">
        <h3 className="font-serif text-lg text-gray-800 dark:text-gray-100 mb-2">💰 Budget Summary</h3>
        <div className="grid grid-cols-2 gap-2">
          {budget.rows.map((r) => (
            <div key={r.label} className="rounded-xl p-3 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800">
              <div className="text-[10px] uppercase tracking-wide text-gray-400 dark:text-gray-500 mb-1">{r.label}</div>
              <div className="text-base font-bold text-gray-800 dark:text-gray-100">{r.aed}</div>
              <div className="text-[11px] text-gray-400 dark:text-gray-500">{r.thb}</div>
            </div>
          ))}
          <div className="rounded-xl p-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
            <div className="text-[10px] uppercase tracking-wide text-gray-500 mb-1">Grand Total</div>
            <div className="text-base font-bold text-gray-800 dark:text-gray-100">{budget.total.aed}</div>
            <div className="text-[11px] text-gray-400">{budget.total.thb}</div>
          </div>
          <div className="rounded-xl p-3 bg-forest-light dark:bg-forest-dark/30 border border-forest-mid/30">
            <div className="text-[10px] uppercase tracking-wide text-forest-dark dark:text-forest-mid mb-1">Buffer ✓</div>
            <div className="text-base font-bold text-forest-dark dark:text-forest-mid">{budget.buffer.aed}</div>
            <div className="text-[11px] text-forest-dark/70 dark:text-forest-mid/70">{budget.buffer.thb}</div>
          </div>
        </div>
        <div className="mt-2 p-2.5 rounded-lg bg-gray-50 dark:bg-gray-800 text-center">
          <span className="text-xs text-gray-500 dark:text-gray-400">Your total budget: </span>
          <span className="text-sm font-bold text-gray-800 dark:text-gray-100">{budget.yourBudget.aed}</span>
          <span className="text-xs text-gray-500 dark:text-gray-400"> · 1 AED = ฿10</span>
        </div>
      </div>

      {/* Transport Breakdown */}
      <BreakdownSection title="Transport by Region" emoji="🚌" data={transportBreakdown} color="blue" />

      {/* Activities Breakdown */}
      <BreakdownSection title="Activities by Region" emoji="🎯" data={activitiesBreakdown} color="purple" />

      {/* Tonight */}
      <div className="mx-4 mb-3 rounded-xl overflow-hidden border border-red-200 dark:border-red-800/50">
        <div className="px-4 py-2.5 bg-red-50 dark:bg-red-900/20">
          <h3 className="font-semibold text-sm text-red-700 dark:text-red-300">🔴 Do Before You Fly</h3>
        </div>
        <div className="px-4 py-3 bg-white dark:bg-gray-900 space-y-2">
          {tonightList.map((item, i) => (
            <div key={i} className="flex gap-2">
              <span className="text-red-400 flex-shrink-0 text-sm mt-0.5">!</span>
              <p className="text-sm text-gray-700 dark:text-gray-300 font-medium">{item}</p>
            </div>
          ))}
        </div>
      </div>

      <TipSection title="Transport Tips" emoji="🚌" items={transportTips} color="blue" />
      <TipSection title="Money" emoji="💵" items={moneyTips} color="amber" />
      <TipSection title="Weather in June" emoji="🌧️" items={weatherTips} color="blue" />
      <TipSection title="Halal Eating" emoji="🕌" items={halalTips} color="green" />
      <TipSection title="Temples + Culture" emoji="🛕" items={cultureTips} color="purple" />
      <TipSection title="Health + Safety" emoji="💊" items={healthTips} color="red" />

      {/* Packing list */}
      <div className="mx-4 mt-1">
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-serif text-lg text-gray-800 dark:text-gray-100">🎒 Packing List</h3>
          <span className="text-xs font-semibold text-forest-dark dark:text-forest-mid bg-forest-light dark:bg-forest-dark/30 px-2 py-0.5 rounded-full">
            {doneCount}/{packingList.length}
          </span>
        </div>
        <div className="rounded-xl overflow-hidden border border-gray-100 dark:border-gray-800">
          {packingList.map((item, i) => (
            <button
              key={item.id}
              onClick={() => toggle(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 text-left bg-white dark:bg-gray-900 transition-colors
                ${i < packingList.length - 1 ? 'border-b border-gray-50 dark:border-gray-800' : ''}
                ${checked[item.id] ? 'opacity-60' : ''}`}
            >
              <div className={`w-5 h-5 rounded border-2 flex-shrink-0 flex items-center justify-center transition-colors
                ${checked[item.id]
                  ? 'bg-forest-dark border-forest-dark dark:bg-forest-mid dark:border-forest-mid'
                  : 'border-gray-300 dark:border-gray-600'
                }`}
              >
                {checked[item.id] && (
                  <svg viewBox="0 0 12 12" fill="none" stroke="white" strokeWidth="2" className="w-3 h-3">
                    <path d="M2 6l3 3 5-5"/>
                  </svg>
                )}
              </div>
              <span className={`text-sm ${checked[item.id] ? 'line-through text-gray-400 dark:text-gray-600' : 'text-gray-700 dark:text-gray-300'}`}>
                {item.label}
              </span>
            </button>
          ))}
        </div>
        {doneCount === packingList.length && (
          <div className="mt-2 text-center text-sm text-forest-dark dark:text-forest-mid font-semibold">
            ✅ All packed — you're ready for Thailand!
          </div>
        )}
      </div>
    </div>
  );
}
