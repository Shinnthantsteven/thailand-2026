const grabLocations = [
  { location: 'Chiang Mai city', status: true, note: 'Works perfectly' },
  { location: 'Airport arrivals', status: true, note: 'Always use — saves ฿100–200 vs taxi counters' },
  { location: 'Pai', status: false, note: 'Does not work' },
  { location: 'Ban Rak Thai', status: false, note: 'Does not work — walking only' },
  { location: 'Doi Inthanon / Chom Thong', status: false, note: 'Does not work — hire local driver' },
];

const grabFares = [
  { journey: 'Airport → Old City hotel', fare: '฿120–150' },
  { journey: 'Old City ↔ Nimman', fare: '฿60–80' },
  { journey: 'Old City → CMU gate (Monk\'s Trail)', fare: '฿60–80' },
  { journey: 'Old City → Wat Umong', fare: '฿80–100' },
  { journey: 'Nimman → Jing Jai Market', fare: '฿60–80' },
  { journey: 'Nimman → Huay Tung Tao lake', fare: '฿100–150' },
  { journey: 'Nimman → Old City (bag pickup Jun 18)', fare: '฿80 round trip' },
  { journey: 'Anywhere → Airport', fare: '฿120–180' },
];

const grabTips = [
  'Download app + create account TONIGHT in Dubai on UAE wifi',
  'Only use GrabCar or GrabTaxi (4-wheel). Never GrabBike.',
  'Drop Grab pin at nearest 7-Eleven — every driver knows every branch',
  'Pre-schedule airport pickup night before flight (Jun 25 night for Jun 26 flight)',
  'Surge pricing 6–8pm — walk 2 min from busy area before requesting',
  'Pay cash — keep ฿20 notes handy',
  'Rate driver 5 stars — it matters a lot to them',
];

const sevenFood = [
  { item: 'Tuna/egg onigiri', price: '฿25–35', note: 'Check label. Avoid anything labelled "moo"' },
  { item: 'Coffee machine', price: '฿25–40', note: 'Americano, latte, Thai milk coffee' },
  { item: 'Water 1.5L', price: '฿7–10', note: 'Buy 2 every morning. Never drink tap water.' },
  { item: 'Thai milk tea (bottled)', price: '฿15–25', note: 'Addictive. Buy every day.' },
  { item: 'Fresh fruit cup', price: '฿30–45', note: 'Papaya, mango, watermelon' },
  { item: 'Electrolyte drink (Sponsor)', price: '฿15–25', note: 'After every outdoor activity' },
  { item: 'Motion sickness pills', price: '฿30–50', note: 'Before Pai minivan + BRT mountain roads' },
  { item: 'Banana milk', price: '฿15–20', note: 'Thai comfort drink' },
  { item: 'Instant noodles (hot water)', price: '฿12–15', note: 'Emergency meal — staff add hot water' },
];

const sevenNonFood = [
  { item: 'Foldable umbrella', price: '฿79–120', note: 'Buy Day 1. June = rainy season.' },
  { item: 'ATM (Bangkok Bank inside)', price: '฿220 fee', note: 'Best rates for foreign cards. Withdraw ฿5,000–10,000.' },
  { item: 'SIM top-up', price: '—', note: 'Show phone number at counter' },
  { item: 'Sunscreen SPF50', price: '฿80–150', note: 'Much cheaper than tourist shops' },
  { item: 'Phone cable', price: '฿100–200', note: 'Larger branches only' },
];

const sevenHacks = [
  'Use 7-Eleven as Grab pickup landmark — every driver knows every branch',
  'Free air con — walk in at 35°C midday, cool down, walk out',
  'Hot water station for instant noodles ฿12 — best emergency meal',
];

function Section({ title, color, children }) {
  return (
    <div className={`mx-4 mb-4 rounded-xl overflow-hidden border ${color}`}>
      <div className={`px-4 py-2.5 ${color.replace('border-', 'bg-').replace(/dark:[^ ]+/g, '').trim()} bg-opacity-50`}>
        <h3 className="font-semibold text-sm">{title}</h3>
      </div>
      <div className="bg-white dark:bg-gray-900">{children}</div>
    </div>
  );
}

export default function GrabTab() {
  return (
    <div className="pb-4">
      <div className="px-4 pt-4 pb-3">
        <h2 className="font-serif text-2xl text-gray-800 dark:text-gray-100">Grab + 7-Eleven</h2>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">Transport guide + halal shopping list</p>
      </div>

      {/* Grab section header */}
      <div className="mx-4 mb-3 flex items-center gap-2">
        <div className="w-7 h-7 rounded-lg bg-green-500 flex items-center justify-center">
          <span className="text-white text-xs font-bold">G</span>
        </div>
        <h3 className="font-serif text-lg text-gray-800 dark:text-gray-100">Grab</h3>
      </div>

      {/* Where Grab works */}
      <div className="mx-4 mb-3 rounded-xl overflow-hidden border border-gray-100 dark:border-gray-800">
        <div className="px-4 py-2.5 bg-gray-50 dark:bg-gray-800/50">
          <h4 className="font-semibold text-sm text-gray-700 dark:text-gray-300">Where Grab Works</h4>
        </div>
        <div className="divide-y divide-gray-50 dark:divide-gray-800">
          {grabLocations.map((loc, i) => (
            <div key={i} className="px-4 py-3 flex items-start gap-3 bg-white dark:bg-gray-900">
              <span className="text-base flex-shrink-0 mt-0.5">{loc.status ? '✅' : '❌'}</span>
              <div>
                <div className="text-sm font-medium text-gray-800 dark:text-gray-100">{loc.location}</div>
                <div className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{loc.note}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Fares */}
      <div className="mx-4 mb-3 rounded-xl overflow-hidden border border-gray-100 dark:border-gray-800">
        <div className="px-4 py-2.5 bg-gray-50 dark:bg-gray-800/50">
          <h4 className="font-semibold text-sm text-gray-700 dark:text-gray-300">Key Fares</h4>
        </div>
        <div className="divide-y divide-gray-50 dark:divide-gray-800 bg-white dark:bg-gray-900">
          {grabFares.map((f, i) => (
            <div key={i} className="px-4 py-2.5 flex items-center justify-between gap-3">
              <span className="text-sm text-gray-700 dark:text-gray-300">{f.journey}</span>
              <span className="text-sm font-bold text-forest-dark dark:text-forest-mid flex-shrink-0">{f.fare}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Pro tips */}
      <div className="mx-4 mb-5 rounded-xl overflow-hidden border border-blue-100 dark:border-blue-900/30">
        <div className="px-4 py-2.5 bg-blue-50 dark:bg-blue-900/20">
          <h4 className="font-semibold text-sm text-blue-700 dark:text-blue-300">Pro Tips</h4>
        </div>
        <div className="px-4 py-3 bg-white dark:bg-gray-900 space-y-2">
          {grabTips.map((tip, i) => (
            <div key={i} className="flex gap-2">
              <span className="text-blue-400 flex-shrink-0 text-sm">→</span>
              <p className="text-sm text-gray-600 dark:text-gray-400">{tip}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 7-Eleven section */}
      <div className="mx-4 mb-3 flex items-center gap-2">
        <div className="w-7 h-7 rounded-lg bg-red-500 flex items-center justify-center">
          <span className="text-white text-[10px] font-bold">7</span>
        </div>
        <h3 className="font-serif text-lg text-gray-800 dark:text-gray-100">7-Eleven</h3>
      </div>

      {/* Halal-safe food */}
      <div className="mx-4 mb-3 rounded-xl overflow-hidden border border-forest-mid/30 dark:border-forest-mid/20">
        <div className="px-4 py-2.5 bg-forest-light dark:bg-forest-dark/30">
          <h4 className="font-semibold text-sm text-forest-dark dark:text-forest-mid">✅ Halal-Safe to Buy</h4>
        </div>
        <div className="divide-y divide-gray-50 dark:divide-gray-800 bg-white dark:bg-gray-900">
          {sevenFood.map((item, i) => (
            <div key={i} className="px-4 py-2.5 flex items-start gap-3">
              <div className="flex-1">
                <div className="text-sm font-medium text-gray-800 dark:text-gray-100">{item.item}</div>
                <div className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{item.note}</div>
              </div>
              <span className="text-sm font-semibold text-forest-dark dark:text-forest-mid flex-shrink-0">{item.price}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Non-food essentials */}
      <div className="mx-4 mb-3 rounded-xl overflow-hidden border border-amber-mid/30 dark:border-amber-dark/30">
        <div className="px-4 py-2.5 bg-amber-light dark:bg-amber-dark/20">
          <h4 className="font-semibold text-sm text-amber-dark dark:text-amber-mid">🛒 Non-Food Essentials</h4>
        </div>
        <div className="divide-y divide-gray-50 dark:divide-gray-800 bg-white dark:bg-gray-900">
          {sevenNonFood.map((item, i) => (
            <div key={i} className="px-4 py-2.5 flex items-start gap-3">
              <div className="flex-1">
                <div className="text-sm font-medium text-gray-800 dark:text-gray-100">{item.item}</div>
                <div className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{item.note}</div>
              </div>
              <span className="text-sm font-semibold text-amber-dark dark:text-amber-mid flex-shrink-0">{item.price}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Life hacks */}
      <div className="mx-4 mb-4 rounded-xl overflow-hidden border border-purple-100 dark:border-purple-900/30">
        <div className="px-4 py-2.5 bg-purple-50 dark:bg-purple-900/20">
          <h4 className="font-semibold text-sm text-purple-700 dark:text-purple-300">⚡ Life Hacks</h4>
        </div>
        <div className="px-4 py-3 bg-white dark:bg-gray-900 space-y-2">
          {sevenHacks.map((hack, i) => (
            <div key={i} className="flex gap-2">
              <span className="text-purple-400 flex-shrink-0">→</span>
              <p className="text-sm text-gray-600 dark:text-gray-400">{hack}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
