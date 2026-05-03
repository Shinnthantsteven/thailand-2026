export const hotels = [
  { name: 'Nature Boutique Hotel · Chiang Mai Old City', checkIn: 'Jun 2', checkOut: 'Jun 5', nights: 3, budget: 'AED 133', urgency: 'green', urgencyLabel: '✅ BOOKED' },
  { name: 'Sleep Pai Bed & Breakfast · Pai Riverside', checkIn: 'Jun 5', checkOut: 'Jun 9', nights: 4, budget: 'AED 216', urgency: 'green', urgencyLabel: '✅ BOOKED' },
  { name: 'Malee Guesthouse · Ban Rak Thai', checkIn: 'Jun 9', checkOut: 'Jun 13', nights: 4, budget: 'AED 323', urgency: 'red', urgencyLabel: '⚠️ 92% cancel fee!' },
  { name: 'Nok Chan Mee Na · Doi Inthanon', checkIn: 'Jun 13', checkOut: 'Jun 18', nights: 5, budget: 'AED 313', urgency: 'green', urgencyLabel: '✅ BOOKED' },
  { name: 'Mon Jaw Doi at Monjam · Mon Jam', checkIn: 'Jun 18', checkOut: 'Jun 20', nights: 2, budget: 'AED 172', urgency: 'orange', urgencyLabel: '⚠️ Cancel before May 19!' },
  { name: 'Nimman Expat Home · Nimman', checkIn: 'Jun 20', checkOut: 'Jun 27', nights: 7, budget: 'AED 365', urgency: 'green', urgencyLabel: '✅ BOOKED' },
];

export const budget = {
  rows: [
    { label: 'Hotels (25 nights)', thb: '฿14,299', aed: 'AED 1,544' },
    { label: 'Food (25 days)', thb: '฿9,200', aed: 'AED 1,000' },
    { label: 'Transport', thb: '฿4,163', aed: 'AED 451' },
    { label: 'Activities', thb: '฿2,750', aed: 'AED 300' },
  ],
  total: { label: 'Grand Total', thb: '฿30,412', aed: 'AED 3,295' },
  yourBudget: { label: 'Your Budget', thb: '฿40,000', aed: 'AED 4,544' },
  buffer: { label: 'Buffer ✓', thb: '฿9,588', aed: 'AED 1,249' },
};

export const transportBreakdown = [
  { region: 'Chiang Mai Old City', items: ['Airport → Hotel (Bolt): AED 17', 'City rides 3 days (Bolt): AED 45'], total: 'AED 62' },
  { region: 'Pai', items: ['Shared minivan CM → Pai: AED 17', 'Shared day tour (Hot Springs etc): AED 40'], total: 'AED 57' },
  { region: 'Ban Rak Thai', items: ['Shared minivan Pai → Mae Hong Son: AED 20', 'Yellow Songthaew → Ban Rak Thai: AED 15'], total: 'AED 35' },
  { region: 'Doi Inthanon', items: ['Local shared transit to park: AED 45', 'Shared yellow trucks inside park: AED 25'], total: 'AED 70' },
  { region: 'Mon Jam', items: ['Shared transit Doi Inthanon → Mon Jam: AED 40'], total: 'AED 40' },
  { region: 'Nimman', items: ['Mon Jam → Nimman (shared/Bolt): AED 30', 'City rides 7 days (Bolt): AED 140', 'Hotel → Airport (Bolt): AED 17'], total: 'AED 187' },
];

export const activitiesBreakdown = [
  { region: 'Chiang Mai Old City', items: ['Wat Umong Underground Tunnels: AED 2', "Monk's Trail to Wat Pha Lat: FREE", 'Wat Chedi Luang + Wat Phra Singh: FREE', 'Baan Kang Wat Art Village: FREE'], total: 'AED 2' },
  { region: 'Pai', items: ['Sai Ngam Hot Springs (shared tour + entry): AED 67', 'Bamboo Bridge Boon Ko Ku So: AED 3', 'Yun Lai Viewpoint Sunrise: AED 2', 'Pai Canyon Sunset: FREE'], total: 'AED 72' },
  { region: 'Ban Rak Thai', items: ['Reservoir Boat Trip (per boat, split): AED 43', 'Tea House sessions: AED 16', 'Lake Shore Mist Walk: FREE'], total: 'AED 59' },
  { region: 'Doi Inthanon', items: ['National Park Entry (covers all waterfalls + Ang Ka): AED 33', 'Maewang Bamboo Rafting: AED 57', 'Mae Klang Luang Village: FREE', 'Rice Terraces: FREE'], total: 'AED 90' },
  { region: 'Mon Jam', items: ['Mon Jam Viewpoint + Yod Doi Coffee: AED 11', 'Huay Tung Tao Lake entry: AED 6', 'Sticky Waterfall Bua Thong: FREE', 'Hilltop Gardens: FREE'], total: 'AED 17' },
  { region: 'Nimman', items: ['Mae Kampong Village entry: AED 5', 'Sunday Walking Street: FREE', 'Night Bazaar: FREE', 'Kadmanee Market: FREE'], total: 'AED 5' },
];

export const tonightList = [
  'Visa approval pending — confirm before May 19 for Mon Jam cancellation deadline',
  'Download Bolt app — cheaper than Grab in Chiang Mai city',
  'Download Muslim Pro (offline prayer times + qibla direction)',
  'Download Google Maps offline — save Chiang Mai, Pai, Mae Hong Son areas',
  'Buy AIS or DTAC SIM at Chiang Mai airport arrivals ฿299/30 days unlimited',
  'Check Tabby June 30 payment — AED 253 due while in Thailand',
];

export const moneyTips = [
  'Exchange at Super Rich Money Exchange Old City — never airport (5–8% worse)',
  'Rate: 1 AED ≈ ฿10 · Total trip budget AED 3,295',
  'ATM fee: ฿220 per withdrawal — withdraw ฿5,000–10,000 at a time',
  'Cash only: guesthouses, food stalls, tuk-tuks, market vendors',
  'Tabby June 30 payment AED 253 due while in Thailand — ensure card has balance',
];

export const transportTips = [
  'Use Bolt app in Chiang Mai city and Nimman — cheaper than Grab',
  'Shared minivan CM → Pai from Arcade Bus Terminal — departs hourly, AED 17',
  'Shared minivan Pai → Mae Hong Son, then yellow Songthaew to Ban Rak Thai',
  'No Bolt or Grab in mountains — book shared tours through your guesthouse',
  'Inside Doi Inthanon park: use yellow shared pickup trucks between sites',
  'For hot springs Pai: join shared day tour — driver picks up, waits 1.5 hrs, drops back',
  'Never pay for private car — always ask guesthouse for shared transport option first',
];

export const weatherTips = [
  'Chiang Mai + Pai: 28–35°C, afternoon rain showers',
  'Ban Rak Thai: cooler at altitude, misty mornings — light layer useful',
  'Doi Inthanon summit: ~15°C — pack 1 light jacket for June 15 only',
  'Mon Jam: cool hilltop — pleasant sleeping weather, light layer at night',
  'June = peak green season — best time for rice paddies + waterfalls',
  'Umbrella: Buy at 7-Eleven Day 1 ฿79',
];

export const halalTips = [
  '"Mai sai moo" = no pork — say at every stall, every meal',
  'Muslim quarter at Chiang Mai Gate (south moat) — dedicated halal restaurants',
  'Halal Indian restaurants near Tha Phae Gate + Nimman area',
  'Ban Haw Mosque near Charoenrat Road, Old City Chiang Mai',
  'Muslim Pro app shows qibla + prayer times offline',
  'Yunnan food in Ban Rak Thai — mostly vegetable-based, confirm no pork each time',
];

export const cultureTips = [
  'Cover shoulders + knees at all temples. Carry a light scarf always.',
  'Remove shoes before entering temple buildings',
  "Don't point feet at Buddha images — sit cross-legged",
  'Never show frustration in public — smiling + calm = the Thai way',
  'Bargaining OK at markets. Never at restaurants or food stalls.',
];

export const healthTips = [
  'Water: Never tap water. 7-Eleven 1.5L bottles ฿7–10. Always carry one.',
  'Motion sickness: Take tablets BEFORE Pai minivan AND before Ban Rak Thai mountain driver — not after',
  'Mosquitoes: DEET spray at dusk near water — Ban Rak Thai lake walks especially',
  'Sunscreen: SPF 50 every morning. Burns fast at this latitude.',
  'Electrolyte drinks (Sponsor brand) after every waterfall / outdoor activity',
];

export const packingList = [
  { id: 'jacket', label: 'Light jacket (Doi Inthanon summit Jun 15 · Mon Jam nights)' },
  { id: 'meds', label: 'Motion sickness tablets' },
  { id: 'scarf', label: 'Travel scarf (temple dress code)' },
  { id: 'sandals', label: 'Sandals that slip off easily' },
  { id: 'powerbank', label: 'Power bank' },
  { id: 'deet', label: 'DEET mosquito spray' },
  { id: 'sunscreen', label: 'Sunscreen SPF 50' },
  { id: 'daypack', label: 'Small backpack for day trips' },
  { id: 'cash', label: 'Cash AED to exchange on arrival' },
  { id: 'bolt', label: 'Bolt app downloaded + account created' },
  { id: 'muslimpro', label: 'Muslim Pro downloaded offline' },
  { id: 'maps', label: 'Google Maps offline saved' },
  { id: 'swimwear', label: 'Swimwear — Sticky Waterfall + Huay Tung Tao lake' },
];
