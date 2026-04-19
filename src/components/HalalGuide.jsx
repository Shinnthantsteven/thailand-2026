import { phrases } from '../data/food';

const regionData = [
  {
    name: 'Chiang Mai',
    icon: '🏛️',
    tips: [
      'Muslim quarter near Chiang Mai Gate (south moat) — dedicated halal restaurants daily',
      'Khao Soi — always order "Gai" (chicken). Most shops can accommodate.',
      'Halal Indian restaurants near Tha Phae Gate area',
      'Indian + Middle Eastern restaurants in Nimman area',
      'Night Bazaar grilled seafood stalls — safe with "mai sai moo"',
    ],
  },
  {
    name: 'Pai',
    icon: '🌿',
    tips: [
      'Roti banana = 100% halal',
      'Mango sticky rice = 100% halal',
      'Pad Thai — order with "gai" (chicken) + "mai sai moo"',
      'Mountain coffee = 100% fine everywhere',
    ],
  },
  {
    name: 'Ban Rak Thai',
    icon: '🍵',
    tips: [
      'Chinese food culture = more pork-heavy. "Mai sai moo" is your most important phrase here.',
      'Yunnan noodles — ask for chicken broth version',
      'Mushroom stir fry — usually vegetarian already',
      'Tea houses = 100% safe',
    ],
  },
  {
    name: 'Doi Inthanon',
    icon: '⛰️',
    tips: [
      'Village food at Mae Klang Luang — rice + vegetables + grilled chicken. Very safe.',
      'Hmong market food — corn, strawberries, sweet potato = all halal',
      'Chom Thong town — order "Khao Gai" (rice with chicken) at any restaurant',
    ],
  },
];

const alwaysSafe = [
  'Mango sticky rice', 'Roti banana', 'Fresh fruit (mango, papaya, watermelon)',
  'Grilled corn', 'All coffees + teas', 'Mountain coffee', 'Thai iced tea',
  'Electrolyte drinks', '7-Eleven tuna onigiri', 'Egg sandwiches', 'Fresh fruit cups',
];

export default function HalalGuide() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-6 space-y-6">
      {/* Banner */}
      <div className="bg-forest-dark text-white rounded-2xl p-5">
        <div className="text-2xl mb-2">☪️</div>
        <h2 className="font-serif text-2xl font-bold mb-2">Halal Eating Guide</h2>
        <p className="text-white/85 text-sm leading-relaxed">
          No strict halal certification needed — you're Muslim, not pork-aware. The golden phrase is <strong>"Mai sai moo"</strong> (no pork) at every stall. Say it clearly and chefs will accommodate.
          June 2026 is not Ramadan — no fasting considerations.
        </p>
      </div>

      {/* Key phrase card */}
      <div className="bg-amber-light dark:bg-amber-900/20 border-2 border-amber-mid rounded-2xl p-5">
        <h3 className="font-serif text-xl font-bold text-amber-dark dark:text-amber-mid mb-4">Essential Phrases</h3>
        <div className="grid gap-3">
          {phrases.map((p, i) => (
            <div key={i} className={`flex items-center justify-between py-2 border-b border-amber-mid/20 last:border-0 ${p.priority ? 'font-semibold' : ''}`}>
              <div>
                <span className="text-neutral-ink dark:text-gray-100 text-sm">{p.phrase}</span>
                {p.priority && <span className="ml-2 text-xs bg-amber-dark text-white px-1.5 py-0.5 rounded">Key</span>}
                <p className="text-xs text-neutral-muted dark:text-gray-400">{p.meaning}</p>
              </div>
              <span className="text-lg text-gray-700 dark:text-gray-300 font-medium">{p.thai}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Region guides */}
      <div className="grid sm:grid-cols-2 gap-4">
        {regionData.map((r) => (
          <div key={r.name} className="bg-white dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-800 p-4">
            <h3 className="font-serif text-lg font-bold text-neutral-ink dark:text-gray-100 mb-3">
              {r.icon} {r.name}
            </h3>
            <ul className="space-y-2">
              {r.tips.map((tip, i) => (
                <li key={i} className="text-sm text-neutral-muted dark:text-gray-400 flex gap-2">
                  <span className="text-forest-mid shrink-0">•</span>
                  {tip}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Always safe */}
      <div className="bg-forest-light dark:bg-forest-dark/20 rounded-2xl p-5">
        <h3 className="font-serif text-xl font-bold text-forest-dark dark:text-forest-mid mb-3">✅ Always Safe — No Questions Needed</h3>
        <div className="flex flex-wrap gap-2">
          {alwaysSafe.map((item, i) => (
            <span key={i} className="text-sm bg-white dark:bg-gray-900 text-forest-dark dark:text-forest-mid px-3 py-1 rounded-full border border-forest-mid/30 font-medium">
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Mosque + apps */}
      <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 p-5 space-y-4">
        <h3 className="font-serif text-xl font-bold text-neutral-ink dark:text-gray-100">🕌 Prayer + Mosque</h3>
        <div className="bg-coral-light dark:bg-coral-dark/20 rounded-xl p-4">
          <p className="font-semibold text-sm text-neutral-ink dark:text-gray-100">Masjid Chiang Mai (Ban Haw Mosque)</p>
          <p className="text-sm text-neutral-muted dark:text-gray-400 mt-1">Near Charoenrat Road — oldest mosque in the city, walking distance from Old City.</p>
        </div>
        <div className="grid sm:grid-cols-2 gap-3">
          <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4">
            <p className="font-semibold text-sm text-neutral-ink dark:text-gray-100 mb-1">📱 Muslim Pro app</p>
            <p className="text-xs text-neutral-muted dark:text-gray-400">Download before Dubai departure. Works offline. Shows qibla direction + prayer times anywhere including Ban Rak Thai (weak signal area).</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4">
            <p className="font-semibold text-sm text-neutral-ink dark:text-gray-100 mb-1">📅 June 2026</p>
            <p className="text-xs text-neutral-muted dark:text-gray-400">Not Ramadan — no fasting considerations. Eat freely. Focus on halal ingredients only.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
