const grabCoverage = [
  { location: 'Chiang Mai city', status: true, note: 'Works perfectly everywhere' },
  { location: 'Airport arrivals', status: true, note: 'Always use — saves ฿100–200 vs taxi counters' },
  { location: 'Pai', status: false, note: 'Does not work — tuk-tuk or bicycle' },
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
  { journey: 'Nimman → Old City (last night)', fare: '฿80' },
  { journey: 'Old City/Nimman → Airport', fare: '฿120–180' },
];

const grabTips = [
  { icon: '📱', tip: 'Download app + create account tonight in Dubai on UAE wifi — much easier than on arrival' },
  { icon: '🚗', tip: 'Only use GrabCar or GrabTaxi (4-wheel). Never GrabBike.' },
  { icon: '7️⃣', tip: 'Drop Grab pin at the nearest 7-Eleven — every driver knows every 7-Eleven' },
  { icon: '⏰', tip: 'Pre-schedule airport pickup the night before your flight (June 26 night for June 27 flight)' },
  { icon: '📈', tip: 'Surge pricing 6–8pm — walk 2 minutes from busy area before requesting' },
  { icon: '💵', tip: 'Pay cash — keep ฿20 notes ready' },
  { icon: '⭐', tip: 'Rate your driver 5 stars — it matters a lot to them' },
];

const sevenElevenFood = [
  { item: 'Tuna onigiri', price: '฿25–35', note: 'Check label — tuna or egg only. Avoid "moo"' },
  { item: 'Egg onigiri', price: '฿25–35', note: 'Safe' },
  { item: 'Coffee machine', price: '฿25–40', note: 'Americano, latte, Thai milk coffee. Surprisingly good.' },
  { item: 'Water 1.5L', price: '฿7–10', note: 'Buy 2 every single morning' },
  { item: 'Thai milk tea (bottled)', price: '฿15–25', note: 'Addictive. Buy daily.' },
  { item: 'Fresh fruit cup', price: '฿30–45', note: 'Papaya, mango, watermelon' },
  { item: 'Banana milk', price: '฿15–20', note: 'Thai comfort drink' },
  { item: 'Electrolyte drink (Sponsor)', price: '฿15–25', note: 'Buy after every outdoor activity. June = 35°C.' },
  { item: 'Motion sickness pills', price: '฿30–50', note: 'Buy before Pai minivan + Ban Rak Thai mountain roads' },
  { item: 'Instant noodles (hot water)', price: '฿12–15', note: 'Emergency meal. Staff add hot water at counter.' },
];

const sevenElevenNonfood = [
  { item: 'Foldable umbrella', price: '฿79–120', note: 'Buy Day 1. June = rainy season.' },
  { item: 'ATM (Bangkok Bank inside)', price: '฿220 fee', note: 'Best rates for foreign cards. Withdraw ฿5,000–10,000 at a time to minimise fees.' },
  { item: 'SIM top-up', price: '—', note: 'Show phone number at counter. AIS or DTAC.' },
  { item: 'Sunscreen SPF50', price: '฿80–150', note: 'Much cheaper than tourist shops' },
  { item: 'Phone cable', price: '฿100–200', note: 'Available in larger branches' },
];

const sevenElevenHacks = [
  'Use 7-Eleven as your Grab pickup landmark — every driver knows every branch',
  'Free air con refuge — walk in at 35°C midday, cool down for 5 minutes',
  'Hot water station for instant noodles ฿12 — best emergency meal',
  'Never buy items labelled "moo" (pork) — skip hot dogs at the door',
];

export default function GrabGuide() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-6 space-y-8">
      {/* Grab section */}
      <section>
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-green-500 rounded-xl flex items-center justify-center text-white text-xl font-bold">G</div>
          <h2 className="font-serif text-2xl font-bold text-neutral-ink dark:text-gray-100">Grab App</h2>
        </div>

        {/* Coverage */}
        <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 overflow-hidden mb-4">
          <div className="px-4 py-3 bg-gray-50 dark:bg-gray-800 border-b border-gray-100 dark:border-gray-700">
            <h3 className="font-semibold text-sm text-neutral-ink dark:text-gray-200">Where Grab Works</h3>
          </div>
          {grabCoverage.map((row, i) => (
            <div key={i} className="flex items-center gap-3 px-4 py-3 border-b border-gray-50 dark:border-gray-800 last:border-0">
              <span className="text-lg">{row.status ? '✅' : '❌'}</span>
              <div>
                <p className="text-sm font-medium text-neutral-ink dark:text-gray-100">{row.location}</p>
                <p className="text-xs text-neutral-muted dark:text-gray-400">{row.note}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Fares */}
        <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 overflow-hidden mb-4">
          <div className="px-4 py-3 bg-gray-50 dark:bg-gray-800 border-b border-gray-100 dark:border-gray-700">
            <h3 className="font-semibold text-sm text-neutral-ink dark:text-gray-200">Key Fares</h3>
          </div>
          {grabFares.map((row, i) => (
            <div key={i} className="flex items-center justify-between px-4 py-3 border-b border-gray-50 dark:border-gray-800 last:border-0">
              <p className="text-sm text-neutral-ink dark:text-gray-200">{row.journey}</p>
              <span className="text-sm font-bold text-forest-dark dark:text-forest-mid ml-3 shrink-0">{row.fare}</span>
            </div>
          ))}
        </div>

        {/* Pro tips */}
        <div className="bg-blue-50 dark:bg-blue-900/10 rounded-2xl p-4 space-y-3">
          <h3 className="font-semibold text-sm text-blue-800 dark:text-blue-300">Pro Tips</h3>
          {grabTips.map((t, i) => (
            <div key={i} className="flex gap-3 text-sm text-blue-800 dark:text-blue-300">
              <span className="shrink-0">{t.icon}</span>
              <p>{t.tip}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 7-Eleven section */}
      <section>
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-red-600 rounded-xl flex items-center justify-center text-white text-lg font-bold">7</div>
          <h2 className="font-serif text-2xl font-bold text-neutral-ink dark:text-gray-100">7-Eleven Guide</h2>
        </div>

        {/* Halal food */}
        <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 overflow-hidden mb-4">
          <div className="px-4 py-3 bg-green-50 dark:bg-green-900/10 border-b border-gray-100 dark:border-gray-700">
            <h3 className="font-semibold text-sm text-green-800 dark:text-green-300">✅ Halal-Safe Items</h3>
          </div>
          {sevenElevenFood.map((row, i) => (
            <div key={i} className="flex items-start justify-between px-4 py-3 border-b border-gray-50 dark:border-gray-800 last:border-0">
              <div>
                <p className="text-sm font-medium text-neutral-ink dark:text-gray-100">{row.item}</p>
                <p className="text-xs text-neutral-muted dark:text-gray-400">{row.note}</p>
              </div>
              <span className="text-sm font-bold text-forest-dark dark:text-forest-mid ml-3 shrink-0">{row.price}</span>
            </div>
          ))}
        </div>

        {/* Non-food */}
        <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 overflow-hidden mb-4">
          <div className="px-4 py-3 bg-gray-50 dark:bg-gray-800 border-b border-gray-100 dark:border-gray-700">
            <h3 className="font-semibold text-sm text-neutral-ink dark:text-gray-200">Non-Food Essentials</h3>
          </div>
          {sevenElevenNonfood.map((row, i) => (
            <div key={i} className="flex items-start justify-between px-4 py-3 border-b border-gray-50 dark:border-gray-800 last:border-0">
              <div>
                <p className="text-sm font-medium text-neutral-ink dark:text-gray-100">{row.item}</p>
                <p className="text-xs text-neutral-muted dark:text-gray-400">{row.note}</p>
              </div>
              <span className="text-sm font-bold text-forest-dark dark:text-forest-mid ml-3 shrink-0">{row.price}</span>
            </div>
          ))}
        </div>

        {/* Hacks */}
        <div className="bg-amber-light dark:bg-amber-900/20 rounded-2xl p-4 space-y-2">
          <h3 className="font-semibold text-sm text-amber-dark dark:text-amber-mid">Life Hacks</h3>
          {sevenElevenHacks.map((hack, i) => (
            <div key={i} className="flex gap-2 text-sm text-amber-dark dark:text-amber-mid">
              <span className="shrink-0">💡</span>
              <p>{hack}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
