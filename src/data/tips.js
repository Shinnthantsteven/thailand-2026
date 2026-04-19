export const hotels = [
  { name: 'Old City guesthouse, Chiang Mai', checkIn: 'Jun 2', checkOut: 'Jun 5 noon', nights: 3, budget: '฿450–500', urgency: 'Book tonight', urgencyLevel: 'high' },
  { name: 'Pai guesthouse (Pai Country Huts)', checkIn: 'Jun 5 eve', checkOut: 'Jun 8 noon', nights: 3, budget: '฿400–500', urgency: 'Book this week', urgencyLevel: 'medium' },
  { name: 'Lungwang Guest House, Ban Rak Thai', checkIn: 'Jun 8 eve', checkOut: 'Jun 12 noon', nights: 4, budget: '฿350–450', urgency: 'Book RIGHT NOW', urgencyLevel: 'critical' },
  { name: 'Chom Thong guesthouse, Doi Inthanon', checkIn: 'Jun 12 late', checkOut: 'Jun 17 noon', nights: 5, budget: '฿400–500', urgency: 'Book tonight + message re late arrival', urgencyLevel: 'high' },
  { name: 'Nimman guesthouse, Chiang Mai', checkIn: 'Jun 17', checkOut: 'Jun 26 noon', nights: 9, budget: '฿450–500', urgency: 'Book within 2 weeks', urgencyLevel: 'low' },
  { name: 'Old City/airport area, Chiang Mai', checkIn: 'Jun 26', checkOut: 'Jun 27', nights: 1, budget: '฿450–500', urgency: 'Anytime', urgencyLevel: 'low' },
];

export const budget = [
  { category: 'Accommodation (25 nights avg ฿440)', thb: 11000, aed: 1100 },
  { category: 'Food (฿350/day × 25)', thb: 8750, aed: 875 },
  { category: 'Transport (no scooter premium)', thb: 7500, aed: 750 },
  { category: 'Activities + entry fees', thb: 3300, aed: 330 },
];

export const tonightTodos = [
  'Book Lungwang Guest House Ban Rak Thai (fills fastest of all stops)',
  'Book Old City Chiang Mai guesthouse',
  'Book Chom Thong guesthouse (message: "arriving late ~7pm June 12")',
  'Download Grab + create account (easier on UAE wifi than on arrival)',
  'Download Muslim Pro (offline prayer times + qibla direction)',
  'Download Google Maps offline — save Chiang Mai + Pai + Mae Hong Son areas',
];

export const moneyTips = [
  { title: 'Best exchange', body: 'Super Rich Money Exchange in Old City. Never at airport (5–8% worse rates).' },
  { title: 'Rate', body: '1 AED = ฿10. Budget 4,000 AED = ฿40,000.' },
  { title: 'ATM fee', body: '฿220 per withdrawal at every Thai ATM. Withdraw ฿5,000–10,000 at once.' },
  { title: 'Cash only', body: 'Most guesthouses, food stalls, tuk-tuks, market vendors.' },
];

export const simTips = [
  { title: 'Buy at airport', body: 'Chiang Mai airport arrivals: AIS or DTAC tourist SIM.' },
  { title: 'Cost', body: '฿299 for 30 days, unlimited data.' },
  { title: 'Coverage', body: 'Strong in Chiang Mai + Pai. Weak in Ban Rak Thai (embrace the offline time).' },
  { title: 'Top-up', body: 'Any 7-Eleven — show your phone number at counter.' },
];

export const weatherTips = [
  { title: 'Chiang Mai + Pai', body: '28–35°C. Afternoon rain showers most days.' },
  { title: 'Doi Inthanon summit', body: '~15°C. Pack 1 light jacket for June 14 park day only.' },
  { title: 'Morning rule', body: 'Always clearest — plan outdoor activities in the morning.' },
  { title: 'Umbrella', body: 'Buy at 7-Eleven Day 1. ฿79 foldable.' },
  { title: 'Rice paddies', body: 'June = electric green. Perfect timing for Pai + Doi Inthanon scenery.' },
];

export const templeTips = [
  'Cover shoulders + knees at every temple. Carry a light scarf in bag always.',
  'Remove shoes before entering temple buildings.',
  'Don\'t point feet at Buddha images — sit cross-legged or tuck feet to side.',
  'Wai (hands together, small bow) when greeting locals — appreciated.',
  'Never show frustration in public. Smiling + calm = the Thai way.',
  'Bargaining OK at night markets + souvenir stalls. Never at restaurants or food stalls.',
];

export const healthTips = [
  { title: 'Water', body: 'Never tap water. Buy 1.5L at 7-Eleven ฿7–10. Carry 1 bottle always.' },
  { title: 'Mosquitoes', body: 'DEET spray at dusk near water (Ban Rak Thai lake walks, canal walks).' },
  { title: 'Sun', body: 'SPF 50 every morning. Re-apply midday. Burns fast at this latitude.' },
  { title: 'Motion sickness', body: 'Take tablets BEFORE Pai minivan and mountain road drivers. Not after — too late.' },
  { title: 'Safety', body: 'Chiang Mai region is very safe. Low crime, welcoming locals. Relax.' },
];

export const packingList = [
  { item: 'Light jacket (for Doi Inthanon summit only — June 14)', category: 'clothing' },
  { item: 'Foldable umbrella OR buy at 7-Eleven Day 1', category: 'essentials' },
  { item: 'Motion sickness tablets (Dramamine or equivalent)', category: 'health' },
  { item: 'Travel scarf (temples dress code)', category: 'clothing' },
  { item: 'Sandals that slip off easily (temple visits)', category: 'clothing' },
  { item: 'Power bank', category: 'tech' },
  { item: 'Mosquito repellent DEET spray', category: 'health' },
  { item: 'Sunscreen SPF 50', category: 'health' },
  { item: 'Small backpack for day trips', category: 'essentials' },
  { item: 'Cash in AED to exchange (or USD works too)', category: 'money' },
  { item: 'Muslim Pro app downloaded offline', category: 'apps' },
  { item: 'Grab app downloaded + account created', category: 'apps' },
];
