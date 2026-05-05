const legs = [
  {
    from: 'Dubai ✈️',
    to: 'Chiang Mai',
    date: 'Jun 2',
    mode: 'Flight',
    how: 'Your Dubai → Bangkok → Chiang Mai flight',
    cost: '—',
    costAED: 0,
    tips: ['Grab (or Bolt) from Chiang Mai airport to hotel: AED 17', 'Open app in arrivals hall — never use airport taxi counters'],
    color: 'blue',
  },
  {
    from: 'Chiang Mai Old City',
    to: 'Pai',
    date: 'Jun 5',
    mode: 'Shared Minivan',
    how: 'Walk to Chiang Mai Arcade Bus Terminal (Grab there ฿70). Buy a seat on shared minivan to Pai. Departs hourly. 762 mountain curves — take motion sickness pill BEFORE.',
    cost: 'AED 17',
    costAED: 17,
    tips: ['Take motion sickness pill with breakfast before leaving', 'Sit in front seat if possible', 'Arrive Pai ~5:30pm'],
    color: 'green',
  },
  {
    from: 'Pai',
    to: 'Ban Rak Thai',
    date: 'Jun 9',
    mode: 'Shared Minivan + Songthaew',
    how: 'Shared minivan from Pai to Mae Hong Son town (2 hrs, AED 20). Then hop on yellow Songthaew pickup truck from Mae Hong Son market heading up to Ban Rak Thai (1 hr, AED 15). Total: AED 35.',
    cost: 'AED 35',
    costAED: 35,
    tips: ['Ask your guesthouse to arrange Songthaew connection', 'Yellow pickup trucks depart from Mae Hong Son market area', 'Mountain road up — take motion sickness pill again'],
    color: 'teal',
  },
  {
    from: 'Ban Rak Thai',
    to: 'Doi Inthanon',
    date: 'Jun 13',
    mode: 'Shared Local Transit',
    how: 'Shared local transport south via Mae Hong Son to Chom Thong. Ask Malee Guesthouse to help arrange — they know the local connections. Long travel day ~5–7 hrs. Arrive evening.',
    cost: 'AED 45',
    costAED: 45,
    tips: ['Ask guesthouse night before to arrange shared transport', 'Bring snacks and water for the journey', 'Arrive Chom Thong evening — rest well for park next day'],
    color: 'green',
  },
  {
    from: 'Doi Inthanon (park)',
    to: 'Doi Inthanon (park activities)',
    date: 'Jun 14–17',
    mode: 'Yellow Shared Trucks inside Park',
    how: 'Inside Doi Inthanon park, yellow shared pickup trucks run between the main sites (waterfalls, summit, pagodas). Flag them down or ask your guesthouse. Pay per leg.',
    cost: 'AED 25 total',
    costAED: 25,
    tips: ['Yellow shared trucks run between all main park spots', 'Wachirathan → Mae Ya → summit area', 'For June 15 best day — these trucks take you to each spot', 'Keep park entry ticket all day — one ticket covers everything'],
    color: 'green',
  },
  {
    from: 'Doi Inthanon',
    to: 'Mon Jam',
    date: 'Jun 18',
    mode: 'Shared Transit + Local Connection',
    how: 'Shared local transport from Chom Thong area north ~2.5 hrs to Mae Rim / Mon Jam area. Ask Nok Chan Mee Na guesthouse to help arrange the day before.',
    cost: 'AED 40',
    costAED: 40,
    tips: ['Book through guesthouse the night before', 'Arrive Mon Jam ~3pm in time for check-in', 'Cool mountain air — enjoy the drive up'],
    color: 'teal',
  },
  {
    from: 'Mon Jam',
    to: 'Nimman Chiang Mai',
    date: 'Jun 20',
    mode: 'Shared Local + Bolt',
    how: 'Shared local transport down from Mae Rim area to Chiang Mai city (~45 min, AED 15). Then Bolt from city edge to Nimman Expat Home (AED 15). Easy downhill drive.',
    cost: 'AED 30',
    costAED: 30,
    tips: ['Much easier than going up — everything is downhill', 'Stop at Huay Tung Tao lake on the way (only 20 min from Mon Jam)', 'Bolt works well once you reach Chiang Mai city'],
    color: 'blue',
  },
  {
    from: 'Nimman',
    to: 'Daily city travel',
    date: 'Jun 20–27',
    mode: 'Bolt App',
    how: 'Use Bolt app for all daily rides in Nimman and Chiang Mai city. Cheaper than Grab. Short rides AED 5–10. Longer rides AED 15–20.',
    cost: 'AED 140 (7 days)',
    costAED: 140,
    tips: ['Download Bolt app before leaving Dubai — easier on UAE WiFi', 'Drop pin at nearest 7-Eleven — drivers know every branch', 'Avoid 6–8pm surge — walk 2 min from busy area first', 'Pay cash — keep ฿20 notes handy'],
    color: 'blue',
  },
  {
    from: 'Nimman',
    to: 'Chiang Mai Airport',
    date: 'Jun 27',
    mode: 'Bolt App',
    how: 'Pre-schedule Bolt to airport the night before (Jun 26 evening). Set pickup time for 1.5 hrs before your flight. Easy, confirmed, no stress.',
    cost: 'AED 17',
    costAED: 17,
    tips: ['Pre-schedule the night before for peace of mind', '15 min drive from Nimman to airport', '1.5 hrs before domestic flight is enough'],
    color: 'blue',
  },
];

const dayTrips = [
  {
    from: 'Pai',
    to: 'Sai Ngam Hot Springs',
    mode: 'Shared Day Tour Van',
    how: 'Book a shared morning van tour from any travel stall on Pai Walking Street or your guesthouse. Van picks you up from guesthouse, drives the steep 15km forest road, waits 1.5 hrs while you soak in the crystal clear pools, drives you back.',
    cost: 'Included in hot springs tour (AED 67 total incl. entry)',
    tips: ['Driver picks you up from guesthouse — no navigation needed', 'Driver waits in parking lot while you swim', '6 people typically share the van — cost-efficient'],
    color: 'teal',
  },
  {
    from: 'Nimman',
    to: 'Mae Kampong Village',
    mode: 'Shared Day Tour Van',
    how: 'Book from Nimman Soi 1 tour agents. Group van picks up from your hotel area. Drops at Mae Kampong village, waits while you explore, brings you back to Nimman.',
    cost: 'AED 40 (transport only)',
    tips: ['Book at Nimman Soi 1 tour agents the day before', 'Van pickup from your hotel area', 'Returns you to Nimman by 4pm'],
    color: 'teal',
  },
];

const colorMap = {
  blue: { border: 'border-blue-100 dark:border-blue-900/30', header: 'bg-blue-50 dark:bg-blue-900/20', icon: 'bg-blue-500', text: 'text-blue-700 dark:text-blue-300' },
  green: { border: 'border-forest-mid/30 dark:border-forest-mid/20', header: 'bg-forest-light dark:bg-forest-dark/30', icon: 'bg-forest-dark', text: 'text-forest-dark dark:text-forest-mid' },
  teal: { border: 'border-teal-100 dark:border-teal-900/30', header: 'bg-teal-50 dark:bg-teal-900/20', icon: 'bg-teal-600', text: 'text-teal-700 dark:text-teal-300' },
};

function LegCard({ leg }) {
  const c = colorMap[leg.color];
  return (
    <div className={`rounded-xl overflow-hidden border ${c.border} mb-3`}>
      <div className={`px-4 py-2.5 ${c.header}`}>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full text-white ${c.icon}`}>{leg.mode}</span>
            {leg.date && <span className="text-[10px] text-gray-500 dark:text-gray-400">{leg.date}</span>}
          </div>
          {leg.costAED > 0 && (
            <span className={`text-sm font-bold ${c.text}`}>{leg.cost}</span>
          )}
        </div>
        <div className="mt-1 flex items-center gap-1">
          <span className={`text-xs font-bold ${c.text}`}>{leg.from}</span>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3 h-3 text-gray-400"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          <span className={`text-xs font-bold ${c.text}`}>{leg.to}</span>
        </div>
      </div>
      <div className="px-4 py-3 bg-white dark:bg-gray-900">
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{leg.how}</p>
        <div className="space-y-1">
          {leg.tips.map((tip, i) => (
            <div key={i} className="flex gap-2">
              <span className={`text-xs flex-shrink-0 ${c.text}`}>→</span>
              <p className="text-xs text-gray-500 dark:text-gray-400">{tip}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const totalTransport = legs.reduce((sum, l) => sum + l.costAED, 0);

export default function TransportTab() {
  return (
    <div className="pb-4">
      <div className="px-4 pt-4 pb-3">
        <h2 className="font-serif text-2xl text-gray-800 dark:text-gray-100">Transport</h2>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">Shared vans · Bolt · No bikes or scooters</p>
      </div>

      {/* Total + key rules */}
      <div className="mx-4 mb-4 p-3 rounded-xl bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800">
        <div className="flex items-center justify-between mb-2">
          <div className="text-xs text-blue-700 dark:text-blue-300 font-semibold uppercase tracking-wide">Total Transport Budget</div>
          <div className="text-lg font-bold text-blue-700 dark:text-blue-300">AED {totalTransport}</div>
        </div>
        <div className="space-y-1">
          <p className="text-xs text-blue-700 dark:text-blue-300">✅ Bolt app in Chiang Mai city (cheaper than Grab)</p>
          <p className="text-xs text-blue-700 dark:text-blue-300">✅ Shared minivans for mountain routes</p>
          <p className="text-xs text-blue-700 dark:text-blue-300">✅ Yellow Songthaew trucks between villages</p>
          <p className="text-xs text-blue-700 dark:text-blue-300">❌ No bikes · No scooters · No private cars</p>
        </div>
      </div>

      {/* Bolt app banner */}
      <div className="mx-4 mb-4 p-3 rounded-xl bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800">
        <div className="flex items-center gap-2 mb-1">
          <div className="w-6 h-6 rounded-md bg-green-500 flex items-center justify-center">
            <span className="text-white text-[10px] font-bold">B</span>
          </div>
          <span className="text-sm font-bold text-green-700 dark:text-green-300">Bolt App — Install Before Flying!</span>
        </div>
        <p className="text-xs text-green-700 dark:text-green-300">Bolt is significantly cheaper than Grab in Chiang Mai. Download and create account in Dubai while on UAE WiFi — much easier than in Thailand.</p>
      </div>

      <div className="px-4">
        <h3 className="font-serif text-lg text-gray-800 dark:text-gray-100 mb-3">Main Journey Legs</h3>
        {legs.map((leg, i) => (
          <LegCard key={i} leg={leg} />
        ))}

        <h3 className="font-serif text-lg text-gray-800 dark:text-gray-100 mb-3 mt-2">Day Trip Transport</h3>
        {dayTrips.map((leg, i) => (
          <LegCard key={i} leg={leg} />
        ))}

        {/* Cost summary */}
        <div className="mt-2 rounded-xl overflow-hidden border border-gray-100 dark:border-gray-800">
          <div className="px-4 py-2.5 bg-gray-50 dark:bg-gray-800/50">
            <h4 className="font-semibold text-sm text-gray-700 dark:text-gray-300">Transport Cost Summary</h4>
          </div>
          <div className="bg-white dark:bg-gray-900 divide-y divide-gray-50 dark:divide-gray-800">
            {legs.filter(l => l.costAED > 0).map((leg, i) => (
              <div key={i} className="px-4 py-2.5 flex items-center justify-between">
                <div>
                  <span className="text-xs font-medium text-gray-700 dark:text-gray-200">{leg.from} → {leg.to}</span>
                  <div className="text-[10px] text-gray-400 dark:text-gray-500">{leg.mode} · {leg.date}</div>
                </div>
                <span className="text-sm font-bold text-forest-dark dark:text-forest-mid">{leg.cost}</span>
              </div>
            ))}
            <div className="px-4 py-3 flex items-center justify-between bg-forest-light dark:bg-forest-dark/30">
              <span className="text-sm font-bold text-forest-dark dark:text-forest-mid">Grand Total</span>
              <span className="text-base font-bold text-forest-dark dark:text-forest-mid">AED {totalTransport}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
