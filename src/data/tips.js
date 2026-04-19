export const hotels = [
  { name: 'Lungwang Guest House, Ban Rak Thai', checkIn: 'Jun 9 evening', checkOut: 'Jun 13 noon', nights: 4, budget: '฿350–450', urgency: 'red', urgencyLabel: 'RIGHT NOW' },
  { name: 'Old City guesthouse, Chiang Mai', checkIn: 'Jun 2', checkOut: 'Jun 5 noon', nights: 3, budget: '฿450–500', urgency: 'orange', urgencyLabel: 'Tonight' },
  { name: 'Chom Thong guesthouse, Doi Inthanon area', checkIn: 'Jun 13 late', checkOut: 'Jun 18 noon', nights: 5, budget: '฿400–500', urgency: 'orange', urgencyLabel: 'Tonight + late arrival note' },
  { name: 'Pai guesthouse (Pai Country Huts)', checkIn: 'Jun 5 evening', checkOut: 'Jun 9 noon', nights: 4, budget: '฿400–500', urgency: 'orange', urgencyLabel: 'This week' },
  { name: 'Nimman guesthouse, Chiang Mai', checkIn: 'Jun 18', checkOut: 'Jun 25 noon', nights: 7, budget: '฿450–500', urgency: 'yellow', urgencyLabel: 'Within 2 weeks' },
  { name: 'Airport area, last night', checkIn: 'Jun 25', checkOut: 'Jun 26 morning', nights: 1, budget: '฿450–500', urgency: 'green', urgencyLabel: 'Anytime' },
];

export const budget = {
  rows: [
    { label: 'Accommodation', thb: '฿11,000', aed: '1,100 AED' },
    { label: 'Food', thb: '฿8,750', aed: '875 AED' },
    { label: 'Transport', thb: '฿7,500', aed: '750 AED' },
    { label: 'Activities', thb: '฿3,300', aed: '330 AED' },
  ],
  total: { label: 'Total', thb: '฿30,550', aed: '3,055 AED' },
  yourBudget: { label: 'Your Budget', thb: '฿40,000', aed: '4,000 AED' },
  buffer: { label: 'Buffer (green)', thb: '฿9,450', aed: '945 AED' },
};

export const tonightList = [
  'Book Lungwang Guest House Ban Rak Thai — RIGHT NOW',
  'Book Old City + Chom Thong guesthouses tonight',
  'Download Grab app + create account (easier on UAE wifi)',
  'Download Muslim Pro (offline prayer times + qibla direction)',
  'Download Google Maps offline — save Chiang Mai + Pai areas',
  'Buy AIS or DTAC SIM at Chiang Mai airport arrivals ฿299/30 days unlimited',
];

export const moneyTips = [
  'Exchange at Super Rich Money Exchange Old City — never airport (5–8% worse)',
  'Rate: 1 AED = ฿10 · 4,000 AED = ฿40,000',
  'ATM fee: ฿220 per withdrawal — withdraw ฿5,000–10,000 at a time',
  'Cash only: guesthouses, food stalls, tuk-tuks, market vendors',
];

export const weatherTips = [
  'Chiang Mai + Pai: 28–35°C, afternoon rain showers',
  'Doi Inthanon summit: ~15°C — pack 1 light jacket for June 15 only',
  'June = peak green season — best time for rice paddies + waterfalls',
  'Umbrella: Buy at 7-Eleven Day 1 ฿79',
];

export const halalTips = [
  '"Mai sai moo" = no pork — say at every stall, every meal',
  'Muslim quarter at Chiang Mai Gate (south moat) — dedicated halal restaurants',
  'Halal Indian restaurants near Tha Phae Gate + Nimman area',
  'Ban Haw Mosque near Charoenrat Road, Old City Chiang Mai',
  'Muslim Pro app shows qibla + prayer times offline',
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
];

export const packingList = [
  { id: 'jacket', label: 'Light jacket (Doi Inthanon summit June 15 — 15°C)' },
  { id: 'meds', label: 'Motion sickness tablets' },
  { id: 'scarf', label: 'Travel scarf (temple dress code)' },
  { id: 'sandals', label: 'Sandals that slip off easily' },
  { id: 'powerbank', label: 'Power bank' },
  { id: 'deet', label: 'DEET mosquito spray' },
  { id: 'sunscreen', label: 'Sunscreen SPF 50' },
  { id: 'daypack', label: 'Small backpack for day trips' },
  { id: 'cash', label: 'Cash AED to exchange on arrival' },
  { id: 'grab', label: 'Grab app downloaded + account created' },
  { id: 'muslimpro', label: 'Muslim Pro downloaded offline' },
  { id: 'maps', label: 'Google Maps offline saved' },
];
