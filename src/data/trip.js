export const hotels = [
  { dates:'Jun 3–5', area:'Chiang Mai Old City', name:'Collection O Khu Mueang (Tha Phae Gate)', cost:'AED 68 / ฿555', note:'Old City base near Tha Phae Gate. 2 nights.' },
  { dates:'Jun 5–9', area:'Pai', name:'Sleep Pai Bed & Breakfast', cost:'AED 216 / ฿1,996', note:'Pai Riverside. Walking Street access. Pay at property.' },
  { dates:'Jun 9–13', area:'Ban Rak Thai / Mae Hong Son', name:'Malee Guesthouse', cost:'AED 323 / ฿2,994', note:'Quiet lake/tea village base. Cancellation is strict (92%).' },
  { dates:'Jun 13–18', area:'Doi Inthanon / Chom Thong', name:'Nok Chan Mee Na', cost:'AED 313 / ฿2,900', note:'Important base for Doi Inthanon. Ask hotel for driver.' },
  { dates:'Jun 18–20', area:'Mon Jam', name:'Mon Jaw Doi at Monjam', cost:'AED 217 / ฿1,800', note:'Mountain chill only. Breakfast included. Already paid.' },
  { dates:'Jun 20–27', area:'Nimman', name:'Nimman Expat Home', cost:'AED 365 / ฿3,380', note:'Final Chiang Mai base. Markets + Mae Kampong access.' },
  { dates:'Jun 27–30', area:'Bangkok', name:'Collection O The Spades Hostel (Siam)', cost:'AED 58 / ฿555', note:'Mixed dorm near Siam BTS. 3 nights before flight home.' },
];

export const budget = {
  total: 'AED 4,000',
  hotels: 'AED 1,544',
  remaining: 'AED 2,500',
  split: [
    ['Food', 'AED 850–950', 'mostly local food, 7-Eleven sometimes'],
    ['Transport', 'AED 950–1,100', 'shared vans/songthaews, Bolt in city'],
    ['Activities', 'AED 350–450', 'Doi driver + Mae Kampong priority'],
    ['Emergency buffer', 'AED 150–250', 'cash safety'],
  ],
  cuts: ['Elephant tour', 'Sticky Waterfall', 'Huay Tung Tao Lake', 'Massage', 'Shopping'],
  protect: ['Doi Inthanon driver package', 'Mae Kampong', 'Pai hot spring', 'Ban Rak Thai slow stay'],
};

export const rules = [
  'Arrange difficult transport one day before.',
  'Doi driver must be fixed price.',
  'Mon Jam is for relaxing only, not side trips.',
  'No activities on Jun 13 and Jun 18 except transfer/check-in.',
  'Morning = main activity. Afternoon = flexible.',
  'Rain poncho from 7-Eleven is enough.',
  'Keep cash for rural areas.',
  'Do not cut Doi Inthanon or Mae Kampong.',
];

export const messages = [
  {
    title: 'Nok Chan Mee Na late check-in',
    text: 'Hello, I have a booking on June 13. I may arrive late, around 8–9 PM. Is late check-in okay? Thank you.',
  },
  {
    title: 'Nok Chan Mee Na Doi driver package',
    text: 'Hello, I need a local driver/songthaew for 2 days from Nok Chan Mee Na hotel.\n\nJune 15: Doi Inthanon full day — Mae Ya Waterfall, summit, Ang Ka Nature Trail, Mae Klang Luang village.\n\nJune 17: Mae Wang bamboo rafting in the morning. Ban Pa Pong Piang rice terrace only if price is okay.\n\nSame driver for both days. Pick up and return to hotel both days. Driver waits at each place.\n\nMy budget is 3,000 THB total for both days. Fixed price. Is this possible?',
  },
  {
    title: 'If driver price is high',
    text: 'I understand. My maximum budget is 3,200 THB total for both days. I can confirm now if this price is okay.',
  },
  {
    title: 'Mon Jam shared ride',
    text: 'Hello, tomorrow I need to go from Mon Jaw Doi at Monjam to Chiang Mai / Nimman. Do you have any shared ride, shared songthaew, or shared van? I want a cheap option. Thank you.',
  },
];

export const days = [
  {
    date:'June 1', area:'Preparation', hotel:'No hotel / pre-trip', budget:'0–100 THB',
    summary:'Packing and setup only. Flight departs tonight at 21:00.',
    items:[
      ['All day','Prepare 7 kg cabin bag, passport, e-visa printout, booking confirmations, offline maps, motion sickness tablets, powerbank, cables.','0–100 THB'],
      ['18:00','Head to Dubai International Airport (DXB).','Taxi/Uber'],
      ['21:00','Gulf Air GF511 departs Dubai.','On flight'],
    ],
    transport:'Taxi/Uber to DXB early.', food:'Eat before airport or airport food.', risk:'Check in online. Print or save e-visa. Passport + powerbank in hand luggage.',
  },
  {
    date:'June 2', area:'In transit', hotel:'On flight', budget:'0 THB',
    summary:'Overnight flight Dubai → Bangkok. Arrive Bangkok 09:45. AirAsia to Chiang Mai at 12:20.',
    items:[
      ['09:45','Land Bangkok Suvarnabhumi. Clear immigration.','Immigration'],
      ['10:30','Airside: AirAsia check-in counter (same airport).','Free'],
      ['12:20','AirAsia FD4118 Bangkok → Chiang Mai.','On flight'],
      ['13:40','Arrive Chiang Mai (CNX).','Landed'],
    ],
    transport:'All same airport (Suvarnabhumi). No transfer needed. Immigration → check-in → gate.', food:'Grab airport snack between flights.', risk:'2h35m connection is tight. Move fast after landing. No checked bag = no belt wait.',
  },
  {
    date:'June 3', area:'Chiang Mai Old City', hotel:'Collection O Khu Mueang (Tha Phae Gate)', budget:'350–600 THB',
    summary:'Arrive 13:40, check in, rest, then SuperRich + Mae Kha Canal + Tha Phae Gate street food.',
    items:[
      ['13:40','Arrive CNX. Grab/Bolt airport → Collection O (Tha Phae Gate).','150–250 THB'],
      ['14:30','Check in, shower, rest 1–2 hours.','Free'],
      ['16:30','SuperRich money exchange. Open until late, walking distance in Old City.','Free'],
      ['17:30','Mae Kha Canal walk. Easy flat walk, no effort needed.','Free'],
      ['19:00','Street food dinner near Tha Phae Gate. Lots of options right by hotel.','80–150 THB'],
      ['20:00','Wat Chedi Luang outside walk (optional). Old City moat loop.','Free'],
    ],
    transport:'Grab/Bolt from airport only. Rest of evening is walking distance from hotel.', food:'Street food near Tha Phae Gate. Keep it cheap and easy.', risk:'You had a long travel day from Dubai. SuperRich + canal + food is enough. No far trips tonight.',
  },
  {
    date:'June 4', area:'Chiang Mai Old City', hotel:'Collection O Khu Mueang (Tha Phae Gate)', budget:'450–750 THB',
    summary:'Full day: Monk’s Trail, Khao Soi, Baan Kang Wat, PLUTO Café, Nimman evening.',
    items:[
      ['8:30 AM','Monk’s Trail → Wat Pha Lat. Go early before heat. Best of Chiang Mai.','Transport 70–150 THB'],
      ['10:30 AM','Chiang Mai Gate morning market breakfast (if open) or local café.','60–100 THB'],
      ['11:30 AM','Khao Soi Gai lunch. Must-eat, don’t skip.','60–100 THB'],
      ['1:00–3:30 PM','Rest at hotel. Afternoon heat is intense in June.','Free'],
      ['4:00 PM','Baan Kang Wat art village. Grab/Bolt there.','Free + 80–150 THB transport'],
      ['6:00 PM','PLUTO Café + Nimman walk + dinner.','200–350 THB'],
    ],
    transport:'Walk Old City in morning. Grab/Bolt to Nimman/Baan Kang Wat afternoon.', food:'Khao Soi is essential today. PLUTO one drink only.', risk:'Morning activity is priority. Do not skip Monk’s Trail for a lie-in.',
  },
  {
    date:'June 5', area:'Chiang Mai → Pai', hotel:'Sleep Pai Bed & Breakfast', budget:'500–800 THB',
    summary:'Shared minivan to Pai and light walking street night.',
    items:[['8:00–9:00 AM','Check out, take motion sickness tablet, eat light.','40–100 THB'],['9:00–10:00 AM','Shared minivan Chiang Mai → Pai. Sit front if possible.','250–400 THB'],['1:00–2:00 PM','Arrive Pai, check in, rest.','Free'],['7:00–9:00 PM','Pai Walking Street, food, arrange tuk tuk for hot spring.','150–220 THB']],
    transport:'Shared minivan; 3–4 hours and many curves.', food:'Light breakfast/snacks, street food dinner.', risk:'Avoid phone during van ride.',
  },
  {
    date:'June 6', area:'Pai', hotel:'Sleep Pai Bed & Breakfast', budget:'500–850 THB',
    summary:'Sai Ngam Hot Springs main relax day.',
    items:[['8:00–8:30 AM','Tuk tuk to Sai Ngam Hot Springs, fixed round trip and pickup.','300–500 THB'],['9:00 AM–12:30 PM','Hot spring half-day. Bring towel, water, extra clothes.','Entry/extra as needed'],['1:00 PM','Return to Pai, lunch, rest.','100–180 THB'],['Evening','Simple dinner and optional town walk.','120–220 THB']],
    transport:'Tuk tuk with fixed pickup. Do not rely on random return ride.', food:'Local lunch and dinner.', risk:'Do not walk back from hot spring.',
  },
  {
    date:'June 7', area:'Pai', hotel:'Sleep Pai Bed & Breakfast', budget:'400–700 THB',
    summary:'Bamboo Bridge rice-field/farm walk.',
    items:[['8:30 AM','Tuk tuk to Bamboo Bridge, fixed return and pickup time.','250–400 THB'],['9:00–11:00 AM','Bamboo Bridge walk and photos.','Small entry/30 THB if charged'],['Afternoon','Pai town lunch, café/rest.','150–250 THB'],['Evening','Chill dinner.','100–180 THB']],
    transport:'Tuk tuk fixed return.', food:'Local food only.', risk:'No need to add more places.',
  },
  {
    date:'June 8', area:'Pai', hotel:'Sleep Pai Bed & Breakfast', budget:'500–800 THB',
    summary:'Yun Lai sunrise + Pai Canyon sunset.',
    items:[['5:30–6:00 AM','Yun Lai Viewpoint sunrise/mist.','200–400 THB transport + small entry'],['Morning','Return hotel, breakfast, rest.','100–150 THB'],['4:30–6:30 PM','Pai Canyon sunset if ground is dry.','Transport/entry minimal'],['Night','Book Pai → Mae Hong Son van for June 9.','Admin']],
    transport:'Local tuk tuk/driver for sunrise and canyon.', food:'Breakfast + dinner local.', risk:'Skip Pai Canyon if muddy.',
  },
  {
    date:'June 9', area:'Pai → Ban Rak Thai', hotel:'Malee Guesthouse', budget:'600–900 THB',
    summary:'Transfer to Ban Rak Thai and rest.',
    items:[['8:30–9:30 AM','Pai → Mae Hong Son shared van.','180–300 THB'],['12:00–12:30 PM','Arrive Mae Hong Son.','—'],['After arrival','Mae Hong Son → Ban Rak Thai / Malee Guesthouse by songthaew/local taxi.','300–500 THB'],['1:30–2:30 PM','Check in, rest, light village walk.','Free']],
    transport:'Shared van + songthaew/taxi.', food:'Simple transfer food 250–400 THB.', risk:'Book van the night before.',
  },
  {
    date:'June 10', area:'Ban Rak Thai', hotel:'Malee Guesthouse', budget:'300–500 THB',
    summary:'Slow lake, tea, village day.',
    items:[['6:00–7:00 AM','Lake mist walk.','Free'],['Late morning','Tea house, lake view, slow breakfast/tea.','100–150 THB'],['Afternoon','Rest and short village walk.','Free'],['Evening','Yunnan-style dinner, Chinese alley walk, lake view.','150–250 THB']],
    transport:'Walking only.', food:'Tea house + Yunnan food.', risk:'No need for Pang Oung; Ban Rak Thai already gives lake/mountain vibe.',
  },
  {
    date:'June 11', area:'Ban Rak Thai', hotel:'Malee Guesthouse', budget:'300–500 THB',
    summary:'Second slow village day.',
    items:[['Morning','Sunrise/lake walk if weather is good, tea plantation area, tea café.','100–150 THB'],['Afternoon','Rest, photos, village walk.','Free'],['Evening','Yunnan food, relax at guesthouse.','150–250 THB']],
    transport:'Walking only.', food:'Local Yunnan food.', risk:'Stay slow; do not add far trips.',
  },
  {
    date:'June 12', area:'Ban Rak Thai', hotel:'Malee Guesthouse', budget:'300–500 THB',
    summary:'Final slow day and arrange next transport.',
    items:[['Morning','Slow breakfast, lake/tea house, final photos.','100–150 THB'],['Afternoon','Rest and prepare for long travel. Ask Malee Guesthouse for Ban Rak Thai → Mae Hong Son transport.','Admin'],['Evening','Early dinner and sleep early.','150–250 THB']],
    transport:'Arrange tomorrow’s first leg.', food:'Cheap local meals.', risk:'June 13 starts early.',
  },
  {
    date:'June 13', area:'Ban Rak Thai → Doi Inthanon side', hotel:'Nok Chan Mee Na', budget:'1,000–1,800 THB',
    summary:'Hardest transfer day. No activities.',
    items:[['7:00 AM','Ban Rak Thai → Mae Hong Son by songthaew/local taxi.','300–500 THB'],['Morning/midday','Mae Hong Son → Chiang Mai by shared van/bus.','250–500 THB'],['Afternoon/evening','Chiang Mai → Chom Thong by local bus/songthaew/van.','35–150 THB'],['Evening','Chom Thong → Nok Chan Mee Na by local taxi/songthaew/tuk tuk.','150–400 THB'],['8–9 PM possible','Late check-in, eat, sleep.','250–450 THB food']],
    transport:'Four-leg budget route.', food:'Transfer food, 7-Eleven/local meal.', risk:'Message Nok Chan Mee Na about late arrival. No activity this day.',
  },
  {
    date:'June 14', area:'Doi Inthanon / Chom Thong', hotel:'Nok Chan Mee Na', budget:'500–900 THB',
    summary:'Recover and arrange the Doi Inthanon driver package. No waterfall today.',
    items:[['Morning','Sleep and recover after the long transfer.','Free'],['Afternoon','Stay around Nok Chan Mee Na / Chom Thong, light food, laundry, rest.','150–300 THB'],['Evening','Dinner, rest, arrange Doi driver package for June 15.','250–400 THB food']],
    transport:'None unless needed for food. Save energy and cash.', food:'Simple local food.', risk:'Ask hotel for June 15 + 17 driver package tonight.',
  },
  {
    date:'June 15', area:'Doi Inthanon', hotel:'Nok Chan Mee Na', budget:'1,700–2,200 THB',
    summary:'Heart-of-trip Doi Inthanon main day.',
    items:[['7:00 AM','Leave hotel with fixed-price local driver/songthaew.','Driver package'],['8:00–9:30 AM','Mae Ya Waterfall.','Park/driver cost'],['10:30–11:00 AM','Summit / highest point.','Included'],['11:00 AM–12:00 PM','Ang Ka Nature Trail.','Included'],['12:30–1:30 PM','Lunch.','150–250 THB'],['2:00–3:30 PM','Mae Klang Luang Village + coffee/rural fields.','100–200 THB'],['4:30–5:30 PM','Return hotel.','Included']],
    transport:'Local driver from Nok Chan Mee Na. Bundle target June 15 + June 17: 3,000 THB; max 3,500 THB.', food:'Lunch + drinks 250–400 THB.', risk:'Do not use public transport inside park for this route.',
  },
  {
    date:'June 16', area:'Doi Inthanon / Chom Thong', hotel:'Nok Chan Mee Na', budget:'250–450 THB',
    summary:'Full rest day.',
    items:[['All day','Sleep late, enjoy rice-field/rural view, hand-wash laundry, simple food, no driver, no tour.','250–450 THB']],
    transport:'None.', food:'Cheap local food.', risk:'Protect energy and budget.',
  },
  {
    date:'June 17', area:'Mae Wang / Doi side', hotel:'Nok Chan Mee Na', budget:'1,200–1,700 THB',
    summary:'Mae Wang bamboo rafting; cancel if heavy rain.',
    items:[['8:30–9:00 AM','Leave hotel with same driver/songthaew if possible.','Driver package'],['10:00–11:30 AM','Mae Wang bamboo rafting.','Rafting/driver cost'],['12:00–1:00 PM','Lunch.','100–200 THB'],['Afternoon','Return hotel. Only add Ban Pa Pong Piang if already cheap/good.','Optional'],['Rain Plan B','If heavy rain/rafting cancelled: stay at Nok Chan Mee Na, rest, rice-field view, laundry, cheap food, save money.','Low cost']],
    transport:'Same driver if bundle works.', food:'Local lunch/dinner.', risk:'Do not force rafting or rice terrace in heavy rain.',
  },
  {
    date:'June 18', area:'Doi side → Mon Jam', hotel:'Mon Jaw Doi at Monjam', budget:'900–1,600 THB',
    summary:'Second hard transfer day. Arrive Mon Jam and relax.',
    items:[['Morning','Nok Chan Mee Na → Chom Thong by local taxi/songthaew/tuk tuk.','150–400 THB'],['Midday','Chom Thong → Chiang Mai by local bus/songthaew/van.','35–150 THB'],['Afternoon','Chiang Mai → Mon Jam by shared van/songthaew/taxi.','150–300 THB shared / 600–1,000 fixed'],['3–5 PM','Check in Mon Jam, sunset view, dinner, rest.','300–500 THB food']],
    transport:'Budget-balanced route via Chiang Mai.', food:'Simple meals.', risk:'No activity except transfer/check-in.',
  },
  {
    date:'June 19', area:'Mon Jam', hotel:'Mon Jaw Doi at Monjam', budget:'300–600 THB',
    summary:'Mon Jam chill-only day.',
    items:[['Morning','Breakfast, mountain view, nearby flower fields/viewpoints if cheap.','0–100 THB'],['Afternoon','Simple café only if cheap or sit at hotel/cloud view.','0–100 THB'],['Evening','Sunset from hilltop, dinner, rest.','200–400 THB']],
    transport:'Walking / small local ride only 0–200 THB.', food:'Cheap food.', risk:'No Sticky Waterfall from Mon Jam; it is not a cheap 30-minute tuk-tuk ride.',
  },
  {
    date:'June 20', area:'Mon Jam → Nimman', hotel:'Nimman Expat Home', budget:'500–1,000 THB',
    summary:'Move to Nimman + optional Saturday night market.',
    items:[['Morning','Breakfast, check out. Ask Mon Jam hotel for shared ride/songthaew to Chiang Mai/Nimman.','150–300 THB if shared'],['Backup','If no shared ride: Mon Jam → Mae Rim → Nimman, or fixed local ride direct.','300–800 THB'],['Afternoon','Check in Nimman, rest.','Free'],['Evening','One Nimman/Nimman walk. Optional Wua Lai Saturday Night Market if energy is good.','100–200 THB food']],
    transport:'Shared ride first, fallback local ride. Avoid 1,200+ THB.', food:'Cheap Nimman dinner/market snacks.', risk:'Huay Tung Tao Lake removed.',
  },
  {
    date:'June 21', area:'Nimman / Chiang Mai markets', hotel:'Nimman Expat Home', budget:'400–700 THB',
    summary:'Sunday market day: Jing Jai morning + Sunday Walking Street evening.',
    items:[['8:00–10:30 AM','Jing Jai Market for breakfast/local market.','100–200 THB'],['Afternoon','Rest at Nimman.','Free'],['5:30–8:30 PM','Sunday Walking Street. Walk, browse, street food. No shopping.','100–250 THB'],['Transport','Grab/Bolt/red songthaew if needed.','100–250 THB']],
    transport:'Bolt/songthaew as needed.', food:'Market food only.', risk:'This is your only Sunday in Nimman.',
  },
  {
    date:'June 22', area:'Nimman', hotel:'Nimman Expat Home', budget:'300–500 THB',
    summary:'Free city day.',
    items:[['All day','Cheap breakfast, rest, local food, hand wash/laundry, optional easy Old City walk if bored.','300–500 THB']],
    transport:'Walk / short Grab only if needed.', food:'Local food.', risk:'No paid tour.',
  },
  {
    date:'June 23', area:'Nimman', hotel:'Nimman Expat Home', budget:'300–500 THB',
    summary:'Buffer day; elephant cut.',
    items:[['All day','Free day, no paid tour, café only if budget allows, rest.','300–500 THB']],
    transport:'Minimal.', food:'Local food.', risk:'Protect budget.',
  },
  {
    date:'June 24', area:'Nimman', hotel:'Nimman Expat Home', budget:'350–600 THB',
    summary:'Rest and prepare for Mae Kampong.',
    items:[['All day','No shopping, no massage, local food, rest.','350–600 THB'],['Evening','Book Mae Kampong join/shared tour around Nimman/local tour desk for June 25.','Admin']],
    transport:'Minimal.', food:'Local food.', risk:'Mae Kampong is heart-of-trip; book only if price is fair.',
  },
  {
    date:'June 25', area:'Mae Kampong', hotel:'Nimman Expat Home', budget:'1,200–1,800 THB',
    summary:'Heart-of-trip Mae Kampong village + waterfall day.',
    items:[['8:00 AM','Leave Nimman by join/shared tour.','800–1,500 THB target'],['9:30–10:00 AM','Arrive Mae Kampong.','Included'],['10:00 AM–12:00 PM','Village walk: wooden houses, stream paths, slow mountain vibe.','Free'],['12:00–1:00 PM','Lunch.','150–250 THB'],['1:30–3:00 PM','Mae Kampong Waterfall; skip if heavy rain.','Free/small fee'],['3:30–4:30 PM','Final village walk/tea/local snack.','100–150 THB'],['5:00–6:00 PM','Back Nimman.','Included']],
    transport:'Join tour/shared tour from Nimman. Good 800–1,500; okay 2,000; avoid 2,500+ solo/private.', food:'Lunch/snacks 250–400 THB.', risk:'Avoid tours overloaded with unrelated stops.',
  },
  {
    date:'June 26', area:'Nimman', hotel:'Nimman Expat Home', budget:'400–700 THB',
    summary:'Final easy day.',
    items:[['Morning','Pack and final local food.','100–200 THB'],['Afternoon','Final Nimman walk, no far trip, no shopping unless tiny.','200–400 THB'],['Evening','Prepare for checkout/airport.','Admin']],
    transport:'Minimal.', food:'Local food.', risk:'Do not add new activity.',
  },
  {
    date:'June 27', area:'Nimman → Bangkok', hotel:'Collection O The Spades Hostel (Siam)', budget:'300–600 THB',
    summary:'Check out Nimman. AirAsia 07:00 → Bangkok 08:15. Check in Bangkok hostel.',
    items:[
      ['05:30','Wake up, check out Nimman Expat Home.','Free'],
      ['06:00','Bolt Nimman → Chiang Mai Airport (CNX).','150–250 THB'],
      ['07:00','AirAsia FD4105 Chiang Mai → Bangkok Suvarnabhumi.','On flight'],
      ['08:15','Arrive Bangkok. Grab or Airport Rail Link to Siam/Ratchathewi.','150–200 THB'],
      ['10:00','Check in Collection O The Spades Hostel (early or store luggage).','Free'],
      ['Afternoon','Siam area walk or MBK browse.','Free–150 THB'],
      ['Evening','Ratchathewi street food dinner.','80–150 THB'],
    ],
    transport:'Bolt to CNX early. Airport Rail Link (City Line) is cheapest from Suvarnabhumi → Phaya Thai → BTS to Siam.', food:'Street food near Siam/Ratchathewi.', risk:'Early wake up. Bolt should be pre-scheduled night before.',
  },
  {
    date:'June 28', area:'Bangkok', hotel:'Collection O The Spades Hostel (Siam)', budget:'500–900 THB',
    summary:'Bangkok day 1: Grand Palace/Wat Phra Kaew area, Chao Phraya, Wat Arun, street food.',
    items:[
      ['8:00 AM','Wat Phra Kaew + Grand Palace. Go early before heat and crowds.','500 THB entry (or skip to save)'],
      ['11:30 AM','Pad Thai lunch near river.','80–150 THB'],
      ['1:00 PM','Chao Phraya Express Boat → Wat Arun.','15–30 THB boat + free'],
      ['3:00 PM','Return to hostel, rest.','Free'],
      ['Evening','Khao San Road or Silom street food walk.','150–300 THB'],
    ],
    transport:'BTS Skytrain or MRT for city moves. Cheapest option.', food:'Street food + river area food.', risk:'Grand Palace is very hot June; go early morning only.',
  },
  {
    date:'June 29', area:'Bangkok', hotel:'Collection O The Spades Hostel (Siam)', budget:'400–700 THB',
    summary:'Bangkok day 2: relaxed. Markets, Siam, or rest before flight home.',
    items:[
      ['Morning','Siam Paragon/MBK browse or nearby market.','Free'],
      ['Afternoon','Rest at hostel. Final Bangkok café if budget allows.','100–200 THB'],
      ['Evening','Final Bangkok street food dinner near Ratchathewi.','100–200 THB'],
      ['Night','Pack, prepare documents, pre-schedule Grab for tomorrow.','Admin'],
    ],
    transport:'BTS is everywhere from Siam.', food:'Street food or market.', risk:'Light day — save energy for tomorrow’s flight. Do not go far.',
  },
  {
    date:'June 30', area:'Bangkok → Dubai', hotel:'On flight', budget:'300–500 THB',
    summary:'Check out and fly home. Gulf Air departs 20:15, arrives Dubai Jul 1 at 03:30.',
    items:[
      ['Morning','Check out Collection O The Spades Hostel.','Free'],
      ['Afternoon','Relax near Siam or early airport.','Free'],
      ['16:00','Head to Suvarnabhumi (BKK). Allow 1h by Grab/Rail.','150–250 THB'],
      ['17:00','At airport. Check in online, drop bag, security.','Admin'],
      ['20:15','Gulf Air GF153 Bangkok → Dubai. Arrives Jul 1 03:30.','On flight'],
    ],
    transport:'Grab or Airport Rail Link (City Line from Phaya Thai). Get there by 17:00.', food:'Airport food or bring snack.', risk:'Check in online. Print or have boarding pass ready. Arrive airport by 17:00.',
  },
];
