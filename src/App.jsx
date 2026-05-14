
import { useMemo, useState } from 'react';
import { hotels, budget, rules, messages, days } from './data/trip';
import { dishes, phrases, alwaysSafe } from './data/food';

const tabs = ['Dashboard', 'Plan', 'Route', 'Hotels', 'Food', 'Docs', 'Map'];

const regions = [
  ['Chiang Mai Old City','Jun 3–5','Collection O Khu Mueang','🛕','temple','Soft landing: temples, canals, easy food.','This is where you recover from the flight and start gently before the mountain loop.','SuperRich exchange|Monk\'s Trail → Wat Pha Lat|Mae Kha Canal|Wat Chedi Luang at night|Baan Kang Wat|PLUTO Café','Khao Soi Gai|Chiang Mai Gate breakfast|street food dinner|one PLUTO drink','Walk inside Old City. Use Grab/Bolt only for far points.'],
  ['Pai','Jun 5–9','Sleep Pai B&B','♨️','water','Slow mountain town: hot spring, rice fields, sunrise, canyon.','Pai is not for rushing. Best value is slow scenery, walking street food, and tuk tuk day trips.','Sai Ngam Hot Springs|Pai Walking Street|Bamboo Bridge|Yun Lai Viewpoint|Pai Canyon sunset','Roti banana|Pad Thai Gai|mango sticky rice|local rice meals','No reliable Grab. Use tuk tuk and agree round-trip price before you go.'],
  ['Ban Rak Thai','Jun 9–13','Malee Guesthouse','🍵','village','Misty lake, tea houses, Yunnan village life.','Three slow days here are a strength. You get lake mist, tea, photos, and quiet village feeling without many paid activities.','Dawn lake mist walk|tea houses|Yunnan village walk|lake photos|early sleep before long transfer','Yunnan noodles|mushroom stir fry|Pu-erh tea|simple village dinner','Walk in village. Arrange Ban Rak Thai → Mae Hong Son transport one day before leaving.'],
  ['Doi Inthanon / Chom Thong','Jun 13–18','Nok Chan Mee Na','🌿','forest','Heart of trip: waterfalls, summit, cloud forest, rural coffee village.','Spend money here because the driver unlocks Mae Ya, summit, Ang Ka, and Mae Klang Luang properly.','Mae Ya Waterfall|Summit|Ang Ka Nature Trail|Mae Klang Luang|Mae Wang bamboo rafting','mountain coffee|simple local lunch|cheap Chom Thong dinner','Use hotel-arranged driver/songthaew. Target Jun 15 + Jun 17 bundle: 3,000–3,500 THB.'],
  ['Mon Jam','Jun 18–20','Mon Jaw Doi at Monjam','⛰️','mountain','Mountain chill only: clouds, cool air, sunset, rest.','Mon Jam should not become another transport headache. It is for enjoying the hotel and mountain view after Doi.','breakfast view|flower gardens if close|hilltop sunset|rest|cheap café only if nearby','included breakfast|simple mountain dinner|coffee if nearby','Ask hotel for shared ride down to Chiang Mai/Nimman. No Sticky Waterfall from here.'],
  ['Nimman / Chiang Mai','Jun 20–27','Nimman Expat Home','🌙','market','Easy ending: markets, rest, food, Mae Kampong.','This is the best base for your final week: rest cheaply, do markets, and take the Mae Kampong join tour.','One Nimman|Wua Lai optional Saturday Night Market|Jing Jai Market|Sunday Walking Street|Mae Kampong village + waterfall','market breakfast|street food snacks|final Khao Soi|Mae Kampong tea/snack','Walk/Bolt in city. Mae Kampong should be a join/shared tour around 800–1,500 THB.'],
  ['Bangkok','Jun 27–30','Collection O The Spades Hostel','🏙️','market','Final city: shopping, food, and fly home.','Bangkok is your cool-down. Keep it simple: Siam/MBK shopping, easy BTS, cheap food, and rest before flying home to Dubai.','Siam shopping|MBK Center|simple street food|hostel rest|airport day','Pad Thai|mango sticky rice|Siam food court|street food snack','BTS/MRT for city. Airport Rail Link is cheapest to Suvarnabhumi.'],
].map(([name,dates,hotel,emoji,tone,purpose,why,doList,foodList,transport]) => ({
  name, dates, hotel, emoji, tone, purpose, why,
  do: doList.split('|'), food: foodList.split('|'), transport,
  map: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(name + ' Thailand')}`,
}));

// Region to days mapping
const regionDays = {
  'Chiang Mai Old City': days.filter(d => ['June 3','June 4'].includes(d.date)),
  'Pai': days.filter(d => ['June 5','June 6','June 7','June 8','June 9'].includes(d.date)),
  'Ban Rak Thai': days.filter(d => ['June 9','June 10','June 11','June 12','June 13'].includes(d.date)),
  'Doi Inthanon / Chom Thong': days.filter(d => ['June 13','June 14','June 15','June 16','June 17','June 18'].includes(d.date)),
  'Mon Jam': days.filter(d => ['June 18','June 19','June 20'].includes(d.date)),
  'Nimman / Chiang Mai': days.filter(d => ['June 20','June 21','June 22','June 23','June 24','June 25','June 26','June 27'].includes(d.date)),
  'Bangkok': days.filter(d => ['June 27','June 28','June 29','June 30'].includes(d.date)),
};

const routeLegs = [
  ['Jun 5','Chiang Mai Old City','Pai','Shared minivan','250–400 THB','3–4 hrs','Take motion sickness tablet first. Sit front if possible.'],
  ['Jun 9','Pai','Ban Rak Thai','Van + local songthaew/taxi','480–800 THB','4–5 hrs','Pai → Mae Hong Son by van, then local ride to Ban Rak Thai.'],
  ['Jun 13','Ban Rak Thai','Nok Chan Mee Na / Chom Thong','4-leg budget transfer','1,000–1,800 THB','full day','Hardest travel day. Start 7 AM. No activities.'],
  ['Jun 15','Nok Chan Mee Na','Doi Inthanon loop','Private local driver/songthaew','bundle 3,000–3,500 THB','7 AM–5 PM','Mae Ya → Summit → Ang Ka → Mae Klang Luang. Driver waits.'],
  ['Jun 18','Chom Thong / Nok Chan Mee Na','Mon Jam','Local transfer via Chiang Mai','900–1,600 THB','half/full day','Budget route: hotel → Chom Thong → Chiang Mai → Mon Jam.'],
  ['Jun 20','Mon Jam','Nimman','Shared ride first','150–800 THB','1–2 hrs','Ask hotel first. Backup: Mon Jam → Mae Rim → Nimman.'],
  ['Jun 25','Nimman','Mae Kampong','Join/shared tour','800–1,500 THB target','full day','Heart-of-trip day. Avoid expensive private solo ride.'],
  ['Jun 27','Chiang Mai','Bangkok','Thai AirAsia FD4105','On flight','1h 15m','Departs CNX 07:00, arrives BKK Suvarnabhumi 08:15. Pre-schedule Bolt to airport night before.'],
].map(([date, from, to, mode, cost, time, note]) => ({
  date, from, to, mode, cost, time, note,
  url: `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(from + ' Thailand')}&destination=${encodeURIComponent(to + ' Thailand')}&travelmode=driving`
}));

const routeVisuals = [
  { title:'Chiang Mai → Pai', image:'/photos/route-chiangmai-to-pai.png', note:'Main mountain minivan. Take motion-sickness tablet and sit front.' },
  { title:'Pai → Ban Rak Thai', image:'/photos/route-pai-to-ban-rak-thai.png', note:'Pai → Mae Hong Son by van, then local taxi/songthaew to Ban Rak Thai.' },
  { title:'Ban Rak Thai → Doi side', image:'/photos/route-ban-rak-thai-to-doi.png', note:'Hardest transfer day. Travel only. Start early, keep cash.' },
  { title:'Doi side → Mon Jam', image:'/photos/route-doi-to-mon-jam.png', note:'Budget route via Chom Thong and Chiang Mai before going up to Mon Jam.' },
  { title:'Mon Jam → Nimman', image:'/photos/route-mon-jam-to-nimman.png', note:'Ask hotel for shared ride first. Backup is taxi via Mae Rim.' },
  { title:'Nimman → Mae Kampong', image:'/photos/route-nimman-to-mae-kampong.png', note:'Best as a join/shared day tour from Nimman.' },
  { title:'Doi hotel → Mae Ya', image:'/photos/route-doi-hotel-to-mae-ya.png', note:'Start early for main Doi day. Best first stop.' },
  { title:'Mae Ya → Ang Ka', image:'/photos/route-mae-ya-to-ang-ka.png', note:'Longest internal Doi drive. Keep buffer time.' },
  { title:'Ang Ka → Mae Klang Luang', image:'/photos/route-ang-ka-to-mae-klang-luang.png', note:'Short downhill to the coffee village and lunch stop.' },
  { title:'Doi hotel → Mae Wang', image:'/photos/route-doi-hotel-to-mae-wang.png', note:'Morning route for bamboo rafting day.' },
];

const routePlansV5 = [
  {
    id:'cnx-arrival', date:'Jun 3', title:'Chiang Mai Airport → Old City base',
    subtitle:'First landing day, keep it simple', tone:'temple',
    cost:'150–250 THB', time:'20–30 min', photo:'/photos/chiangmai-old-cover.jpg',
    steps:[
      ['Jun 3 · 13:40','CNX Airport arrivals','Collection O Khu Mueang / Tha Phae Gate','Grab/Bolt','15–25 min','150–250 THB'],
      ['Jun 3 · 16:30','Hotel / Old City','SuperRich Money Exchange','Walk / short ride','5–15 min','Free'],
      ['Jun 3 · 17:30','SuperRich','Mae Kha Canal Walk','Walk','10 min','Free'],
      ['Jun 3 · 19:00','Mae Kha Canal','Tha Phae Gate food area','Walk','10 min','80–150 THB food'],
      ['Jun 3 · 20:00','Tha Phae Gate','Wat Chedi Luang outside walk','Walk','10 min','Free'],
    ],
    days:[
      ['Jun 3','13:40 arrive CNX → Grab/Bolt to hotel → check in + rest → SuperRich money exchange → Mae Kha Canal walk → Tha Phae Gate street food → Wat Chedi Luang optional outside walk.'],
      ['Jun 4','Monk\'s Trail / Wat Pha Lat morning, rest midday, Baan Kang Wat late afternoon, PLUTO/Nimman evening.'],
    ],
    places:[
      ['SuperRich Money Exchange','/photos/super-rich-money-exchange.jpg','Exchange AED→THB here. Best rates in Old City.'],
      ['Mae Kha Canal Walk','/photos/mae-kha-canal.jpg','Easy flat evening walk after a travel day.'],
      ['Tha Phae Gate','/photos/tha-phae-gate.jpg','Old City landmark and easy food area.'],
      ['Wat Chedi Luang','/photos/wat-chedi-luang-night.jpg','Evening outside walk only, no entry needed.'],
      ['Monk\'s Trail / Wat Pha Lat','/photos/wat-pha-lat.jpg','Jun 4 morning jungle temple walk.'],
      ['Baan Kang Wat Art Village','/photos/baan-kang-wat.jpg','Jun 4 late afternoon art village.'],
    ],
    save:'Do not book tours here. Walk Old City. Grab/Bolt only for Monk\'s Trail and Baan Kang Wat.',
    english:'Hello, I need to go from Chiang Mai Airport to Collection O Khu Mueang near Tha Phae Gate. I have only one small bag. Please use the meter/app price. Thank you.',
    thai:'สวัสดีครับ ผมต้องการไปจากสนามบินเชียงใหม่ ไปที่ Collection O Khu Mueang ใกล้ประตูท่าแพ ผมมีกระเป๋าเล็กใบเดียว ขอราคาตามแอป/มิเตอร์นะครับ ขอบคุณครับ',
  },
  {
    id:'cm-pai', date:'Jun 5', title:'Chiang Mai Old City → Pai',
    subtitle:'Main mountain minivan ride', tone:'water',
    cost:'250–400 THB', time:'3–4 hrs', photo:'/photos/route-chiangmai-to-pai.png',
    steps:[
      ['Jun 5 · 09:00','Collection O Khu Mueang','Arcade Bus Terminal / pickup point','Grab/Bolt','15–30 min','70–150 THB'],
      ['Jun 5 · 09:30','Chiang Mai pickup','Pai','Shared minivan','3–4 hrs','250–400 THB'],
      ['Jun 5 · 13:30','Pai town','Sleep Pai B&B','Walk/tuk tuk','5–15 min','50–100 THB'],
      ['Jun 5 · evening','Sleep Pai B&B','Pai Walking Street','Walk','5 min','food budget'],
    ],
    days:[
      ['Jun 5','Check out Chiang Mai, take motion sickness tablet, shared minivan to Pai (3–4 hrs), check in Sleep Pai B&B, rest, Pai Walking Street evening.'],
    ],
    places:[
      ['Pai Walking Street','/photos/pai-walking-street.jpg','Evening food, roti, live music.'],
    ],
    save:'Take motion sickness tablet before minivan. Sit near the front. Do not eat heavy meal before the ride.',
    english:'Hello, I need a seat in a shared minivan from Chiang Mai to Pai on June 5. I prefer morning departure. Can you confirm pickup point, departure time, price, and arrival time in Pai?',
    thai:'สวัสดีครับ ผมต้องการจองรถตู้ร่วมจากเชียงใหม่ไปปาย วันที่ 5 มิถุนายน ขอรอบเช้าได้ไหมครับ รบกวนแจ้งจุดขึ้นรถ เวลาออกเดินทาง ราคา และเวลาถึงปายด้วยครับ',
  },
  {
    id:'pai-region', date:'Jun 5–9', title:'Pai region',
    subtitle:'Hot spring, bamboo bridge, sunrise, canyon', tone:'water',
    cost:'400–850 THB/day', time:'4 nights', photo:'/photos/pai-cover.jpg',
    steps:[
      ['Jun 6 · 08:00','Sleep Pai B&B','Sai Ngam Hot Springs','Shared tour / tuk tuk','30–45 min','300–500 THB ride'],
      ['Jun 7 · 08:30','Sleep Pai B&B','Bamboo Bridge Pai','Tuk tuk round trip','20–35 min','250–400 THB round trip'],
      ['Jun 8 · 05:30','Sleep Pai B&B','Yun Lai Viewpoint','Tuk tuk','20–30 min','200–400 THB'],
      ['Jun 8 · 16:30','Pai town','Pai Canyon','Tuk tuk','15–25 min','200–300 THB'],
    ],
    days:[
      ['Jun 6','Sai Ngam Hot Springs half-day. Fixed tuk tuk round-trip price before going.'],
      ['Jun 7','Bamboo Bridge Pai morning. Agree round-trip price and pickup time before leaving.'],
      ['Jun 8','Yun Lai Viewpoint sunrise early morning, Pai Canyon sunset only if dry.'],
    ],
    places:[
      ['Sai Ngam Hot Springs','/photos/sai-ngam-hot-springs.jpg','Relax half-day. Do not go without fixed return.'],
      ['Bamboo Bridge Pai','/photos/bamboo-bridge-pai.jpg','Rice-field bridge walk.'],
      ['Yun Lai Viewpoint','/photos/yun-lai-viewpoint.jpg','Early sunrise/mist. Worth the early start.'],
      ['Pai Canyon','/photos/pai-canyon.jpg','Sunset only if ground is dry after rain.'],
    ],
    save:'No reliable Grab in Pai. Always agree round-trip price and pickup time before leaving town.',
    english:'Hello, I want to go to this place and come back to Pai town. Can you wait or pick me up later? What is the round-trip price?',
    thai:'สวัสดีครับ ผมอยากไปที่นี่แล้วกลับตัวเมืองปาย รอหรือมารับกลับได้ไหมครับ ราคาไปกลับเท่าไหร่ครับ',
  },
  {
    id:'pai-brt', date:'Jun 9', title:'Pai → Ban Rak Thai',
    subtitle:'Split route via Mae Hong Son', tone:'transfer',
    cost:'480–800 THB', time:'4–5 hrs', photo:'/photos/route-pai-to-ban-rak-thai.png',
    steps:[
      ['Jun 9 · 08:30','Sleep Pai B&B','Pai van pickup / bus office','Walk/tuk tuk','5–15 min','0–100 THB'],
      ['Jun 9 · 09:00','Pai','Mae Hong Son town','Shared van','2.5–3.5 hrs','180–300 THB'],
      ['Jun 9 · 12:30','Mae Hong Son town','Ban Rak Thai village','Local songthaew/taxi','1–1.5 hrs','300–500 THB'],
      ['Jun 9 · 14:30','Ban Rak Thai','Malee Guesthouse','Walk','5–15 min','Free'],
    ],
    days:[
      ['Jun 9','Check out Pai, shared van to Mae Hong Son, then local songthaew/taxi uphill to Ban Rak Thai, walk to Malee Guesthouse.'],
    ],
    places:[
      ['Ban Rak Thai lake','/photos/ban-rak-thai-lake.jpg','Arrive and keep it slow. Lake walk only.'],
      ['Ban Rak Thai tea house','/photos/ban-rak-thai-tea-house.jpg','Tea village vibe from the start.'],
    ],
    save:'Ask Sleep Pai B&B one day before for van timing and Mae Hong Son connection.',
    english:'Hello, I need to travel from Pai to Ban Rak Thai on June 9. I want the cheap local option. Is it possible to go Pai → Mae Hong Son by shared van, then Mae Hong Son → Ban Rak Thai by local songthaew or taxi? Please tell me the time, price, and pickup point.',
    thai:'สวัสดีครับ วันที่ 9 มิถุนายน ผมต้องการเดินทางจากปายไปบ้านรักไทย ผมต้องการวิธีประหยัด สามารถไปจากปายไปแม่ฮ่องสอนด้วยรถตู้ร่วม แล้วต่อรถสองแถวหรือแท็กซี่ท้องถิ่นไปบ้านรักไทยได้ไหมครับ รบกวนแจ้งเวลา ราคา และจุดขึ้นรถด้วยครับ',
  },
  {
    id:'ban-rak-thai', date:'Jun 9–13', title:'Ban Rak Thai',
    subtitle:'Lake, tea village, slow stay', tone:'village',
    cost:'300–500 THB/day', time:'4 nights', photo:'/photos/ban-rak-thai-cover.jpg',
    steps:[
      ['Jun 10 · 06:00','Malee Guesthouse','Ban Rak Thai lake walk','Walk','5–30 min','Free'],
      ['Jun 10–12 · morning','Lake area','Tea houses','Walk','5–15 min','100–150 THB'],
      ['Jun 10–12 · afternoon','Guesthouse','Yunnan village lanes','Walk','easy','Free'],
      ['Jun 12 · evening','Malee Guesthouse','Arrange tomorrow ride to Mae Hong Son','Ask hotel','admin','confirm price/time'],
    ],
    days:[
      ['Jun 10','Dawn lake mist walk, tea house, village walk, Yunnan food.'],
      ['Jun 11','Same slow rhythm. No need to add far places.'],
      ['Jun 12','Final lake/tea day. Arrange tomorrow transport to Mae Hong Son.'],
    ],
    places:[
      ['Ban Rak Thai lake','/photos/ban-rak-thai-lake.jpg','Dawn mist walk — best in the morning.'],
      ['Ban Rak Thai tea house','/photos/ban-rak-thai-tea-house.jpg','Tea stop by the lake.'],
      ['Yunnan village food','/photos/ban-rak-thai-yunnan-food.jpg','Simple Yunnan meals.'],
    ],
    save:'Do not add far places. The village already gives the lake and mountain feeling. Walking only.',
    english:'Hello, I need to leave Ban Rak Thai tomorrow morning and go to Mae Hong Son town. Can you help arrange a local ride? What time and price?',
    thai:'สวัสดีครับ พรุ่งนี้เช้าผมต้องออกจากบ้านรักไทยไปตัวเมืองแม่ฮ่องสอน ช่วยจัดรถท้องถิ่นได้ไหมครับ เวลาไหนและราคาเท่าไหร่ครับ',
  },
  {
    id:'brt-doi', date:'Jun 13', title:'Ban Rak Thai → Nok Chan Mee Na / Doi side',
    subtitle:'Hardest transfer day, no activities', tone:'transfer',
    cost:'1,000–1,800 THB', time:'Full day', photo:'/photos/route-ban-rak-thai-to-doi.png',
    steps:[
      ['Jun 13 · 07:00','Malee Guesthouse / Ban Rak Thai','Mae Hong Son town','Local taxi/songthaew','1–1.5 hrs','300–500 THB'],
      ['Jun 13 · 09:00','Mae Hong Son town','Chiang Mai','Shared van/bus','5–6 hrs','250–500 THB'],
      ['Jun 13 · 15:30','Chiang Mai','Chom Thong','Local van/songthaew/bus','1.5–2 hrs','35–150 THB'],
      ['Jun 13 · 18:00','Chom Thong','Nok Chan Mee Na','Local taxi/songthaew','20–40 min','150–400 THB'],
      ['Jun 13 · 19:00–21:00','Nok Chan Mee Na','Late check-in, eat, sleep','Rest','night','food only'],
    ],
    days:[
      ['Jun 13','Leave Ban Rak Thai 7 AM. Goal is only to reach Nok Chan Mee Na, eat, and sleep. No sightseeing.'],
    ],
    places:[
      ['Nok Chan Mee Na / Doi base','/photos/nok-chan-mee-na-rice-field.jpg','Arrive and rest — no activities today.'],
    ],
    save:'Ask Malee Guesthouse to arrange first leg night before. Keep cash and snacks. Message Nok Chan Mee Na about late check-in.',
    english:'Hello, on June 13 I need to travel from Ban Rak Thai / Malee Guesthouse to Nok Chan Mee Na near Chom Thong. I want a budget route, not sightseeing. Can you help arrange the first ride to Mae Hong Son town early morning? I need to continue to Chiang Mai, then Chom Thong, then Nok Chan Mee Na. Please tell me the best departure time and price.',
    thai:'สวัสดีครับ วันที่ 13 มิถุนายน ผมต้องการเดินทางจากบ้านรักไทย / Malee Guesthouse ไปที่พัก Nok Chan Mee Na แถวจอมทอง ผมต้องการเส้นทางประหยัด ไม่แวะเที่ยว รบกวนช่วยจัดรถช่วงแรกไปตัวเมืองแม่ฮ่องสอนตอนเช้าได้ไหมครับ จากนั้นผมจะต่อไปเชียงใหม่ ต่อไปจอมทอง และไป Nok Chan Mee Na รบกวนแจ้งเวลาออกเดินทางที่ดีที่สุดและราคาด้วยครับ',
  },
  {
    id:'doi-heart', date:'Jun 15', title:'Doi Inthanon heart route',
    subtitle:'Private local driver/songthaew · 7 AM–5 PM', tone:'forest',
    cost:'1,800–2,000 THB one day / bundle max 3,500 THB', time:'7 AM–5 PM', photo:'/photos/mae-ya-waterfall.jpg',
    steps:[
      ['Jun 15 · 07:00','Nok Chan Mee Na Hotel','Mae Ya Waterfall','Private driver/songthaew','45–70 min','driver waits'],
      ['Jun 15 · 08:00','Mae Ya Waterfall','Doi Inthanon Summit','Same driver','1–1.5 hrs','included'],
      ['Jun 15 · 10:30','Doi Inthanon Summit','Ang Ka Nature Trail','Same driver','5–15 min','included'],
      ['Jun 15 · 12:30','Ang Ka Nature Trail','Mae Klang Luang Village + coffee','Same driver','30–45 min','included'],
      ['Jun 15 · 15:30','Mae Klang Luang','Nok Chan Mee Na Hotel','Same driver','45–70 min','included'],
    ],
    days:[
      ['Jun 14','Recover at hotel. Arrange driver for Jun 15 tonight. Target fixed price.'],
      ['Jun 15','Mae Ya → Summit → Ang Ka → Mae Klang Luang → back hotel. Driver waits at each place.'],
      ['Jun 16','Rest day. Rice-field view, cheap food, no driver.'],
      ['Jun 17','Mae Wang bamboo rafting only if weather and price are good.'],
    ],
    places:[
      ['Mae Ya Waterfall','/photos/mae-ya-waterfall.jpg','First stop. Best early before crowds.'],
      ['Ang Ka Nature Trail','/photos/ang-ka-nature-trail.jpg','Cloud forest boardwalk near summit.'],
      ['Mae Klang Luang Village + Coffee','/photos/mae-klang-luang-village.jpg','Coffee, rural fields, lunch stop.'],
    ],
    save:'Fix price before leaving. Target one day: 1,800–2,000 THB. Bundle Jun 15 + Jun 17 Mae Wang: 3,200–3,500 THB.',
    english:'Hello, I need a private local driver/songthaew for Doi Inthanon full day from Nok Chan Mee Na.\n\nDate: June 15\nPickup: 7:00 AM\nReturn: around 5:00 PM\n\nRoute:\nNok Chan Mee Na → Mae Ya Waterfall → Doi Inthanon Summit → Ang Ka Nature Trail → Mae Klang Luang Village + coffee → back to Nok Chan Mee Na.\n\nPlease wait at each place. I want a fixed price before we start. My budget is around 1,800–2,000 THB for the day. Is this possible?',
    thai:'สวัสดีครับ ผมต้องการรถพร้อมคนขับ / รถสองแถวแบบส่วนตัว ไปดอยอินทนนท์ 1 วัน จากที่พัก Nok Chan Mee Na\n\nวันที่: 15 มิถุนายน\nรับที่พัก: 7 โมงเช้า\nกลับประมาณ: 5 โมงเย็น\n\nเส้นทาง:\nNok Chan Mee Na → น้ำตกแม่ยะ → ยอดดอยอินทนนท์ → เส้นทางศึกษาธรรมชาติอ่างกา → บ้านแม่กลางหลวง + กาแฟ → กลับ Nok Chan Mee Na\n\nรบกวนรอที่แต่ละจุดด้วยครับ ผมอยากตกลงราคาเหมารวมก่อนออกเดินทาง งบประมาณของผมประมาณ 1,800–2,000 บาท สำหรับ 1 วัน ได้ไหมครับ',
  },
  {
    id:'doi-monjam', date:'Jun 18', title:'Doi side → Mon Jam',
    subtitle:'Transfer via Chiang Mai / Mae Rim', tone:'mountain',
    cost:'900–1,600 THB', time:'Half/full day', photo:'/photos/route-doi-to-mon-jam.png',
    steps:[
      ['Jun 18 · 09:00','Nok Chan Mee Na','Chom Thong','Local taxi/songthaew','20–40 min','150–400 THB'],
      ['Jun 18 · 10:00','Chom Thong','Chiang Mai','Local bus/van/songthaew','1.5–2 hrs','35–150 THB'],
      ['Jun 18 · 12:30','Chiang Mai','Mae Rim / Mon Jam road','Shared songthaew/local ride','1–1.5 hrs','150–500 THB'],
      ['Jun 18 · 14:00','Mon Jam area','Mon Jaw Doi at Monjam','Local drop','10–20 min','included/extra'],
    ],
    days:[
      ['Jun 18','Check out Nok Chan Mee Na, travel via Chom Thong and Chiang Mai, check in Mon Jam. Sunset/rest only.'],
    ],
    places:[
      ['Mon Jam mountain view','/photos/mon-jam-cover.jpg','Arrive, rest, sunset, clouds.'],
    ],
    save:'Ask Nok Chan Mee Na first. Avoid expensive private car if shared route via Chom Thong → Chiang Mai → Mon Jam is possible.',
    english:'Hello, on June 18 I need to go from Nok Chan Mee Na / Chom Thong to Mon Jaw Doi at Monjam. I want the cheapest possible option. Is there a shared songthaew, local van, or split route via Chiang Mai / Mae Rim? Please tell me the time, price, and pickup point.',
    thai:'สวัสดีครับ วันที่ 18 มิถุนายน ผมต้องการเดินทางจาก Nok Chan Mee Na / จอมทอง ไป Mon Jaw Doi at Monjam ผมต้องการวิธีที่ประหยัดที่สุด มีรถสองแถวร่วม รถตู้ท้องถิ่น หรือเส้นทางต่อรถผ่านเชียงใหม่ / แม่ริมไหมครับ รบกวนแจ้งเวลา ราคา และจุดขึ้นรถด้วยครับ',
  },
  {
    id:'monjam-nimman', date:'Jun 20', title:'Mon Jam → Nimman',
    subtitle:'Ask hotel for shared ride first', tone:'market',
    cost:'150–800 THB', time:'1–2 hrs', photo:'/photos/route-mon-jam-to-nimman.png',
    steps:[
      ['Jun 20 · 10:00','Mon Jaw Doi at Monjam','Mae Rim / Chiang Mai city edge','Shared ride/local songthaew','45–90 min','150–500 THB'],
      ['Jun 20 · 12:00','Chiang Mai city edge','Nimman Expat Home','Bolt/Grab','15–25 min','80–200 THB'],
    ],
    days:[
      ['Jun 20','Ask Mon Jam hotel for shared ride down, reach Nimman, check in, rest and food.'],
    ],
    places:[
      ['Nimman base','/photos/nimman-cover.jpg','Final Chiang Mai base. Easy food and markets.'],
    ],
    save:'Ask Mon Jam hotel first. Do not accept 1,200+ THB too fast. Ask for shared ride or songthaew option.',
    english:'Hello, on June 20 I need to go from Mon Jaw Doi at Monjam to Nimman, Chiang Mai. Do you have any shared ride, shared songthaew, or cheap local option? I do not need a private expensive car. Please tell me the price and pickup time.',
    thai:'สวัสดีครับ วันที่ 20 มิถุนายน ผมต้องการเดินทางจาก Mon Jaw Doi at Monjam ไปนิมมาน เชียงใหม่ มีรถร่วม รถสองแถวร่วม หรือวิธีท้องถิ่นราคาประหยัดไหมครับ ผมไม่ต้องการรถส่วนตัวราคาแพง รบกวนแจ้งราคาและเวลารับด้วยครับ',
  },
  {
    id:'mae-kampong', date:'Jun 25', title:'Nimman → Mae Kampong day trip',
    subtitle:'Join/shared tour only', tone:'village',
    cost:'800–1,500 THB target', time:'Full day', photo:'/photos/route-nimman-to-mae-kampong.png',
    steps:[
      ['Jun 25 · 08:00','Nimman Expat Home','Join/shared tour pickup','Van/songthaew','pickup','included'],
      ['Jun 25 · 09:30','Chiang Mai','Mae Kampong Village','Join tour van','1–1.5 hrs','included'],
      ['Jun 25 · 10:00–12:00','Mae Kampong Village','Village walk / stream paths','Walking','slow','Free'],
      ['Jun 25 · 13:30','Village','Mae Kampong Waterfall','Walk','15–30 min','small fee / free'],
      ['Jun 25 · 15:30','Mae Kampong','Nimman Expat Home','Join tour van','1–1.5 hrs','included'],
    ],
    days:[
      ['Jun 25','Join tour pickup from Nimman, village walk, waterfall if safe, tea/coffee stop, return Nimman. Protected heart day.'],
    ],
    places:[
      ['Mae Kampong Village','/photos/mae-kampong-village.jpg','Wooden houses, mountain stream, slow walk.'],
      ['Mae Kampong Waterfall','/photos/mae-kampong-waterfall.jpg','Only if weather is safe after rain.'],
      ['Tea / coffee stop','/photos/pluto-cafe.jpg','Short snack stop before return.'],
    ],
    save:'Good price: 800–1,500 THB. Okay up to 2,000 THB. Avoid 2,500+ private solo quote. This is protected.',
    english:'Hello, I want to join a shared day trip from Nimman to Mae Kampong on June 25. I want to visit Mae Kampong Village and Mae Kampong Waterfall only. I do not want too many extra shopping stops. Please tell me pickup time, return time, price, and what is included.',
    thai:'สวัสดีครับ ผมต้องการร่วมทริปแบบแชร์จากนิมมานไปแม่กำปอง วันที่ 25 มิถุนายน ผมอยากไปหมู่บ้านแม่กำปองและน้ำตกแม่กำปองเท่านั้น ไม่อยากแวะร้านช้อปปิ้งหลายจุด รบกวนแจ้งเวลารับ เวลากลับ ราคา และรวมอะไรบ้างครับ',
  },
  {
    id:'cnx-bkk', date:'Jun 27', title:'Nimman → CNX Airport → Bangkok',
    subtitle:'Early flight · Wake 05:30', tone:'transfer',
    cost:'150–250 THB to airport + flight', time:'Wake 05:30', photo:'/photos/nimman-cover.jpg',
    steps:[
      ['Jun 27 · 05:30','Nimman Expat Home','Chiang Mai Airport CNX','Bolt pre-scheduled','15–25 min','150–250 THB'],
      ['Jun 27 · 07:00','CNX','Bangkok Suvarnabhumi BKK','Thai AirAsia FD4105','1h 15m','flight'],
      ['Jun 27 · 08:15','BKK Airport','The Spades Hostel / Siam area','Airport Rail Link or Grab','45–75 min','45–250 THB'],
    ],
    days:[
      ['Jun 27','Pre-scheduled Bolt to CNX at 05:30. AirAsia 07:00 to Bangkok. Check in Spades hostel. Simple Bangkok evening.'],
      ['Jun 28–29','Shopping and food only. Siam, MBK, street food. No hard plan.'],
      ['Jun 30','Airport day. Go BKK early at 17:00. Gulf Air home.'],
    ],
    places:[
      ['Siam / MBK shopping','/photos/bangkok-simple.jpg','Simple shopping and food.'],
      ['Bangkok street food','/photos/pad-thai.jpg','Eat, rest, no heavy plan.'],
    ],
    save:'Pre-schedule Bolt to CNX the night before. From BKK, Airport Rail Link is cheapest to city.',
    english:'Hello, I need to go from Nimman Expat Home to Chiang Mai Airport early morning on June 27. My flight is at 7:00 AM. Please pick me up at 5:30 AM. I have only one small bag.',
    thai:'สวัสดีครับ วันที่ 27 มิถุนายน ผมต้องการเดินทางจาก Nimman Expat Home ไปสนามบินเชียงใหม่ตอนเช้า เที่ยวบินของผมเวลา 7 โมงเช้า รบกวนมารับเวลา 5:30 น. ผมมีกระเป๋าเล็กใบเดียวครับ',
  },
];

const visual = {
  temple:['🛕','from-[#2f1b08] via-[#9b5a17] to-[#ffd36a]'],
  water:['💦','from-[#053047] via-[#168aad] to-[#b7e4c7]'],
  mountain:['⛰️','from-[#14213d] via-[#2d6a4f] to-[#b7e4c7]'],
  forest:['🌿','from-[#081c15] via-[#2d6a4f] to-[#d8f3dc]'],
  food:['🍜','from-[#5f0f40] via-[#fb8b24] to-[#ffe8a3]'],
  market:['🏮','from-[#3a0ca3] via-[#f72585] to-[#ffd166]'],
  transfer:['🚐','from-[#111827] via-[#475569] to-[#bfdbfe]'],
  rest:['🛏️','from-[#0f766e] via-[#34d399] to-[#ecfccb]'],
  village:['🏡','from-[#1b4332] via-[#74c69d] to-[#ffe8a3]'],
};

const realPhotos = [
  ['Chiang Mai Old City|chiangmai old|Old City', '/photos/chiangmai-old-cover.jpg'],
  ['Pai|pai cover', '/photos/pai-cover.jpg'],
  ['Ban Rak Thai|ban-rak-thai-cover', '/photos/ban-rak-thai-cover.jpg'],
  ['Doi Inthanon|Chom Thong|doi-inthanon-cover|Nok Chan Mee Na', '/photos/doi-inthanon-cover.jpg'],
  ['Mon Jam|mon-jam-cover', '/photos/mon-jam-cover.jpg'],
  ['Bangkok|Bangkok Siam|Siam|MBK|The Spades Hostel|Collection O The Spades', '/photos/bangkok-simple.jpg'],
  ['Nimman|Nimman / Chiang Mai|nimman-cover|Jing Jai|Sunday Walking Street', '/photos/nimman-cover.jpg'],
  ['Wat Pha Lat|Monk Trail', '/photos/wat-pha-lat.jpg'],
  ['Wat Chedi Luang|Wat Phra Singh', '/photos/wat-chedi-luang-night.jpg'],
  ['Mae Kha Canal', '/photos/mae-kha-canal.jpg'],
  ['Baan Kang Wat', '/photos/baan-kang-wat.jpg'],
  ['PLUTO|Pluto', '/photos/pluto-cafe.jpg'],
  ['Sai Ngam|Hot Springs', '/photos/sai-ngam-hot-springs.jpg'],
  ['Bamboo Bridge', '/photos/bamboo-bridge-pai.jpg'],
  ['Yun Lai', '/photos/yun-lai-viewpoint.jpg'],
  ['Pai Canyon', '/photos/pai-canyon.jpg'],
  ['Pai Walking Street|Night Bazaar|Walking Street', '/photos/pai-walking-street.jpg'],
  ['Ban Rak Thai lake|lake mist', '/photos/ban-rak-thai-lake.jpg'],
  ['tea house|tea houses', '/photos/ban-rak-thai-tea-house.jpg'],
  ['Yunnan Noodles|Yunnan food', '/photos/ban-rak-thai-yunnan-food.jpg'],
  ['Wachirathan', '/photos/wachirathan-waterfall.jpg'],
  ['Mae Ya', '/photos/mae-ya-waterfall.jpg'],
  ['Ang Ka', '/photos/ang-ka-nature-trail.jpg'],
  ['Mae Klang Luang', '/photos/mae-klang-luang-village.jpg'],
  ['Mae Wang bamboo rafting|Bamboo Rafting Maewang|Mae Wang', '/photos/mae-wang-bamboo-rafting.jpg'],
  ['rice-field|Ban Pa Pong Piang', '/photos/nok-chan-mee-na-rice-field.jpg'],
  ['Mae Kampong', '/photos/mae-kampong-village.jpg'],
  ['Khao Soi', '/photos/khao-soi.jpg'],
  ['Mango Sticky Rice', '/photos/mango-sticky-rice.jpg'],
  ['Roti Banana|Roti', '/photos/banana-roti.jpg'],
  ['Pad Thai', '/photos/pad-thai.jpg'],
  ['Pu-erh Tea|tea', '/photos/pu-erh-tea.jpg'],
  ['Mushroom Stir Fry|Mushroom', '/photos/mushroom-stir-fry.jpg'],
  ['Pad Kra Pao|Tom Yum|Som Tam|cheap Thai meal|local Thai', '/photos/local-thai-meal.jpg'],
  ['Mountain Coffee|coffee|PLUTO Café', '/photos/pluto-cafe.jpg'],
];

const fallbackByTone = {
  temple:'/photos/wat-chedi-luang-night.jpg', water:'/photos/wachirathan-waterfall.jpg',
  mountain:'/photos/mon-jam-cover.jpg', forest:'/photos/ang-ka-nature-trail.jpg',
  food:'/photos/local-thai-meal.jpg', market:'/photos/nimman-cover.jpg',
  transfer:'/photos/doi-inthanon-cover.jpg', village:'/photos/mae-kampong-village.jpg',
  rest:'/photos/mon-jam-cover.jpg',
};

function realPhotoFor(title='', subtitle='', tone='') {
  const text = `${title} ${subtitle}`.toLowerCase();
  const found = realPhotos.find(([keys]) => keys.split('|').some(k => text.includes(k.toLowerCase())));
  if (found?.[1]) return found[1];
  const regionFallback = realPhotos.find(([keys]) => subtitle && keys.split('|').some(k => subtitle.toLowerCase().includes(k.toLowerCase())));
  if (regionFallback?.[1]) return regionFallback[1];
  return fallbackByTone[tone] || '/photos/chiangmai-old-cover.jpg';
}

const asset = (path) => `${import.meta.env.BASE_URL}${path.replace(/^\/+/, '')}`;
const cn = (...xs) => xs.filter(Boolean).join(' ');
const mapSearch = (q) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q)}`;

function classify(text='') {
  const t = text.toLowerCase();
  if (/(transfer|van|taxi|songthaew|grab|bolt|airport|driver|tuk|check out)/.test(t)) return 'transfer';
  if (/(waterfall|hot spring|rafting|canal|lake|river)/.test(t)) return 'water';
  if (/(temple|wat|trail|monk|chedi)/.test(t)) return 'temple';
  if (/(market|walking street|jing jai|wua lai|one nimman)/.test(t)) return 'market';
  if (/(breakfast|lunch|dinner|food|khao|coffee|café|cafe|tea|roti|rice)/.test(t)) return 'food';
  if (/(village|ban rak|mae kampong|mae klang)/.test(t)) return 'village';
  if (/(rest|sleep|laundry|pack|recover)/.test(t)) return 'rest';
  return 'mountain';
}

function Badge({children,tone='stone'}) {
  const map = {
    green:'bg-emerald-100 text-emerald-900 ring-emerald-200',
    amber:'bg-amber-100 text-amber-900 ring-amber-200',
    red:'bg-red-100 text-red-900 ring-red-200',
    blue:'bg-sky-100 text-sky-900 ring-sky-200',
    stone:'bg-stone-100 text-stone-700 ring-stone-200',
  };
  return <span className={cn('inline-flex rounded-full px-3 py-1 text-xs font-black ring-1', map[tone])}>{children}</span>
}

function MapButton({url,label='Google Maps'}) {
  return <a href={url} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-full bg-emerald-950 px-3 py-2 text-xs font-black text-white shadow-sm hover:bg-emerald-800">📍 {label}</a>
}

function MessageBox({title, text, label, copied, copyText}) {
  return (
    <div className="rounded-[1.5rem] bg-stone-50 p-4 ring-1 ring-stone-200">
      <div className="flex items-center justify-between gap-3 mb-3">
        <h5 className="font-black text-stone-950 text-sm">{title}</h5>
        <button onClick={()=>copyText(label,text)} className="shrink-0 rounded-full bg-emerald-950 px-4 py-2 text-xs font-black text-white hover:bg-emerald-800 transition-colors">
          {copied===label ? '✓ Copied' : 'Copy'}
        </button>
      </div>
      <pre className="whitespace-pre-wrap text-xs leading-relaxed text-stone-700 font-sans">{text}</pre>
    </div>
  );
}

function WeatherMood({tone='', title=''}) {
  const text = `${tone} ${title}`.toLowerCase();
  const mood = text.includes('doi') || text.includes('forest') || text.includes('water') || text.includes('pai') || text.includes('mae kampong') ? 'rain' : text.includes('bangkok') || text.includes('market') ? 'glow' : 'sun';
  if (mood === 'rain') {
    return <div className="weather-layer rain-layer" aria-hidden="true">{Array.from({length:18},(_,i)=><i key={i} style={{left:`${(i*17)%100}%`, animationDelay:`${(i%6)*.22}s`, animationDuration:`${1.1+(i%5)*.16}s`}} />)}</div>;
  }
  if (mood === 'glow') return <div className="weather-layer city-glow" aria-hidden="true"><span/><b/></div>;
  return <div className="weather-layer sun-layer" aria-hidden="true"><span/></div>;
}

function Visual({tone='mountain',title,subtitle,className=''}) {
  const [emoji,bg] = visual[tone] || visual.mountain;
  const photo = asset(realPhotoFor(title, subtitle, tone));
  return <div className={cn('region-visual relative min-h-[128px] overflow-hidden rounded-[1.35rem] bg-gradient-to-br p-3 text-white shadow-lg sm:min-h-[180px] sm:rounded-[2rem] sm:p-5', bg, className)}>
    <img src={photo} alt={title} className="absolute inset-0 h-full w-full object-cover" loading="lazy" onError={(e)=>{e.currentTarget.src=asset('/photos/chiangmai-old-cover.jpg')}} />
    <WeatherMood tone={tone} title={title}/>
    <div className="absolute inset-0 bg-gradient-to-t from-black/72 via-black/25 to-black/5"/>
    <div className="absolute bottom-3 left-3 right-3 sm:bottom-5 sm:left-5 sm:right-5">
      <h3 className="mt-1 text-base font-black leading-tight drop-shadow sm:text-xl">{title}</h3>
      {subtitle && <p className="mt-1 max-w-[94%] text-[11px] leading-snug text-white/90 sm:max-w-[85%] sm:text-sm">{subtitle}</p>}
    </div>
  </div>
}

function Header({active,setActive}) {
  return <header className="app-header sticky top-0 z-40 border-b border-white/10 bg-emerald-950/95 text-white backdrop-blur">
    <div className="mx-auto max-w-7xl px-3 py-2 sm:px-4 sm:py-4">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex items-center gap-3">
          <img src={asset('/favicon.png')} alt="Thailand 2026" className="h-9 w-9 rounded-xl object-cover shadow-lg ring-2 ring-white/30 sm:h-12 sm:w-12 sm:rounded-2xl"/>
          <div>
            <h1 className="font-serif text-lg leading-none sm:text-2xl">Thailand 2026</h1>
            <p className="mt-1 text-xs text-emerald-100 sm:text-sm">Jun 3–30 · Chiang Mai → Pai → Doi → Bangkok</p>
          </div>
        </div>
        <nav className="flex gap-2 overflow-x-auto pb-1">
          {tabs.map(tab => <button key={tab} onClick={()=>setActive(tab)} className={cn('whitespace-nowrap rounded-2xl px-3 py-1.5 text-[11px] font-black transition sm:px-4 sm:py-2 sm:text-sm', active===tab?'bg-white text-emerald-950 shadow':'bg-white/10 text-white hover:bg-white/20')}>{tab}</button>)}
        </nav>
      </div>
    </div>
  </header>
}

function Title({title,subtitle}) {
  return <div><h2 className="font-serif text-2xl text-stone-950 sm:text-3xl">{title}</h2><p className="mt-1 text-xs text-stone-600 sm:text-sm">{subtitle}</p></div>
}

function Stat({label,value}) {
  return <div className="rounded-[1.5rem] bg-white sm:rounded-[2rem] p-4 shadow-sm ring-1 ring-stone-200"><p className="text-xs font-black uppercase tracking-[0.2em] text-stone-500">{label}</p><p className="mt-1 text-2xl font-black text-emerald-950">{value}</p></div>
}

function Overview() {
  const paid = 2060 + 217 + 323;
  const upcoming = 68 + 216 + 313 + 365 + 58;
  const total = 4000;
  const remaining = Math.max(0, total - paid - upcoming);
  const pct = Math.min(100, Math.round(((paid + upcoming) / total) * 100));
  return <div className="space-y-6">
    <section className="grid gap-5 lg:grid-cols-[1.2fr_.8fr]">
      <div className="relative overflow-hidden rounded-[2.25rem] bg-gradient-to-br from-emerald-950 via-emerald-800 to-lime-600 p-6 text-white shadow-xl">
        <img src={asset('/favicon.png')} alt="" className="absolute -right-10 -top-10 h-52 w-52 rounded-[3rem] object-cover opacity-30 blur-[1px]"/>
        <div className="relative">
          <p className="text-sm font-black uppercase tracking-[0.3em] text-lime-200">30-day trip plan</p>
          <h2 className="mt-3 font-serif text-4xl leading-tight">Dubai → Chiang Mai → Northern Loop → Bangkok → Dubai</h2>
          <p className="mt-4 max-w-3xl text-emerald-50">Trip starts <b>June 3</b> when you land in Chiang Mai. Doi Inthanon and Mae Kampong are protected as the heart of the trip.</p>
          <div className="mt-6 flex flex-wrap gap-2">
            <Badge tone="green">Doi Inthanon protected</Badge>
            <Badge tone="green">Mae Kampong protected</Badge>
            <Badge tone="amber">4,000 AED budget</Badge>
            <Badge tone="blue">Docs + flights included</Badge>
          </div>
        </div>
      </div>
      <WeatherWidget/>
    </section>
    <section className="grid gap-4 md:grid-cols-4">
      <Stat label="Budget" value="AED 4,000"/>
      <Stat label="Paid/locked" value={`AED ${(paid+upcoming).toLocaleString()}`}/>
      <Stat label="Free cash" value={`AED ${remaining.toLocaleString()}`}/>
      <Stat label="Trip start" value="Jun 3"/>
    </section>
    <section className="rounded-[1.5rem] bg-white sm:rounded-[2rem] p-5 shadow-sm ring-1 ring-stone-200">
      <div className="flex items-center justify-between gap-4">
        <div><h3 className="font-serif text-2xl text-stone-950">Budget tracker</h3><p className="text-sm text-stone-500">Target 4,000 AED. Booked + upcoming vs remaining.</p></div>
        <Badge tone="amber">{pct}% allocated</Badge>
      </div>
      <div className="mt-4 h-4 overflow-hidden rounded-full bg-stone-100"><div className="h-full rounded-full bg-emerald-700" style={{width:`${pct}%`}}/></div>
    </section>
    <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">{regions.map(r => <RegionMini key={r.name} r={r}/>)}</section>
  </div>
}

function WeatherWidget() {
  return <div className="relative overflow-hidden rounded-[2.25rem] bg-gradient-to-br from-sky-950 via-sky-700 to-cyan-500 p-6 text-white shadow-xl">
    <style>{`@keyframes rain{0%{transform:translateY(-40px);opacity:0}10%{opacity:.8}100%{transform:translateY(230px);opacity:0}}@keyframes cloud{0%,100%{transform:translateX(0)}50%{transform:translateX(16px)}}.drop{position:absolute;top:-20px;width:2px;height:18px;border-radius:9px;background:rgba(191,232,255,.75);animation:rain linear infinite}.cloud{animation:cloud 5s ease-in-out infinite}`}</style>
    {Array.from({length:30},(_,i)=><span key={i} className="drop" style={{left:`${(i*29)%100}%`,animationDuration:`${0.8+(i%5)*0.18}s`,animationDelay:`${(i%7)*0.17}s`}}/>)}
    <div className="cloud absolute right-6 top-5 text-7xl opacity-30">☁️</div>
    <div className="relative">
      <p className="text-xs font-black uppercase tracking-[0.25em] text-sky-200">June weather alert</p>
      <h3 className="mt-3 font-serif text-3xl">Rainy season mode</h3>
      <p className="mt-2 text-sky-50">Warm days, afternoon showers, misty mountain mornings. Plan main activities in the morning.</p>
      <div className="mt-5 grid gap-2 text-sm">
        <div className="rounded-2xl bg-white/15 p-3 ring-1 ring-white/20">🌧️ Pack poncho / small umbrella</div>
        <div className="rounded-2xl bg-white/15 p-3 ring-1 ring-white/20">🥾 Shoes with grip for waterfalls</div>
        <div className="rounded-2xl bg-white/15 p-3 ring-1 ring-white/20">⛰️ Doi + Mon Jam can feel cool</div>
      </div>
    </div>
  </div>
}

function RegionMini({r}) {
  return <div className="overflow-hidden rounded-[1.5rem] bg-white sm:rounded-[2rem] shadow-sm ring-1 ring-stone-200">
    <Visual tone={r.tone} title={`${r.emoji} ${r.name}`} subtitle={r.purpose} className="min-h-[170px] rounded-none"/>
    <div className="p-5">
      <div className="flex flex-wrap gap-2"><Badge tone="blue">{r.dates}</Badge><Badge>{r.hotel}</Badge></div>
      <p className="mt-3 text-sm text-stone-600">{r.why}</p>
      <div className="mt-4"><MapButton url={r.map}/></div>
    </div>
  </div>
}

// ── PLAN TAB — region cards click to show day breakdown ──────────────────────
function PlanTab() {
  const [openRegion, setOpenRegion] = useState(null);

  return (
    <div className="space-y-5">
      <Title title="Day-by-day plan" subtitle="Tap a region card to see its full day breakdown."/>
      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
        {regions.map(r => (
          <RegionPlanCard
            key={r.name}
            r={r}
            isOpen={openRegion === r.name}
            onToggle={() => setOpenRegion(openRegion === r.name ? null : r.name)}
            regionDayList={regionDays[r.name] || []}
          />
        ))}
      </div>
    </div>
  );
}

function RegionPlanCard({r, isOpen, onToggle, regionDayList}) {
  return (
    <div className={cn('overflow-hidden rounded-[1.5rem] bg-white sm:rounded-[2rem] shadow-sm ring-1 transition-all', isOpen ? 'md:col-span-2 xl:col-span-3 ring-emerald-400' : 'ring-stone-200')}>
      <button className="w-full text-left" onClick={onToggle}>
        <Visual tone={r.tone} title={`${r.emoji} ${r.name}`} subtitle={r.purpose} className="min-h-[118px] rounded-none sm:min-h-[160px]"/>
        <div className="p-3 sm:p-4">
          <div className="flex items-center justify-between gap-2">
            <div className="flex flex-wrap gap-2">
              <Badge tone="blue">{r.dates}</Badge>
              <Badge tone="stone">{r.hotel}</Badge>
            </div>
            <span className="shrink-0 rounded-full bg-stone-100 px-2.5 py-1 text-[10px] font-black text-stone-600 sm:text-xs">
              {isOpen ? '▲ Close' : '▼ Show days'}
            </span>
          </div>
          <p className="mt-2 text-xs leading-relaxed text-stone-600 sm:text-sm">{r.why}</p>
        </div>
      </button>

      {isOpen && (
        <div className="border-t border-stone-100 p-4 space-y-4">
          {/* Activities + food + transport */}
          <div className="grid gap-3 sm:grid-cols-3">
            <div className="rounded-2xl bg-stone-50 p-4">
              <h4 className="font-black text-stone-900 text-sm mb-2">Activities</h4>
              <ul className="space-y-1">{r.do.map(x => <li key={x} className="text-xs text-stone-600">• {x}</li>)}</ul>
            </div>
            <div className="rounded-2xl bg-stone-50 p-4">
              <h4 className="font-black text-stone-900 text-sm mb-2">Food</h4>
              <ul className="space-y-1">{r.food.map(x => <li key={x} className="text-xs text-stone-600">• {x}</li>)}</ul>
            </div>
            <div className="rounded-2xl bg-stone-50 p-4">
              <h4 className="font-black text-stone-900 text-sm mb-2">Transport rule</h4>
              <p className="text-xs text-stone-600">{r.transport}</p>
            </div>
          </div>

          {/* Day breakdown */}
          {regionDayList.length > 0 && (
            <div className="space-y-3">
              <h4 className="font-black text-stone-950">Day breakdown</h4>
              {regionDayList.map(day => <DayBlock key={day.date} day={day}/>)}
            </div>
          )}

          <MapButton url={r.map} label="Open region map"/>
        </div>
      )}
    </div>
  );
}

const markedPlacePhotos = [
  ['SuperRich money exchange', '/photos/super-rich-money-exchange.jpg'],
  ['Mae Kha Canal', '/photos/mae-kha-canal.jpg'],
  ['Tha Phae Gate', '/photos/tha-phae-gate.jpg'],
  ['Wat Chedi Luang', '/photos/wat-chedi-luang-night.jpg'],
  ['Monk', '/photos/wat-pha-lat.jpg'],
  ['Wat Pha Lat', '/photos/wat-pha-lat.jpg'],
  ['Baan Kang Wat', '/photos/baan-kang-wat.jpg'],
  ['Sai Ngam', '/photos/sai-ngam-hot-springs.jpg'],
  ['Bamboo Bridge', '/photos/bamboo-bridge-pai.jpg'],
  ['Yun Lai', '/photos/yun-lai-viewpoint.jpg'],
  ['Pai Canyon', '/photos/pai-canyon.jpg'],
  ['Pai Walking Street', '/photos/pai-walking-street.jpg'],
  ['Mae Ya', '/photos/mae-ya-waterfall.jpg'],
  ['Ang Ka', '/photos/ang-ka-nature-trail.jpg'],
  ['Mae Klang Luang', '/photos/mae-klang-luang-village.jpg'],
  ['Mae Kampong', '/photos/mae-kampong-village.jpg'],
  ['Wachirathan', '/photos/wachirathan-waterfall.jpg'],
];

function markedPhotoFor(text='') {
  const lower = text.toLowerCase();
  const hit = markedPlacePhotos.find(([key]) => lower.includes(key.toLowerCase()));
  return hit?.[1] || '';
}

function DayBlock({day}) {
  const important = /heart|Doi Inthanon|Mae Kampong/i.test(day.summary);
  const isTransfer = /transfer|travel/i.test(day.area + day.summary);
  return (
    <div className="rounded-[1.5rem] bg-stone-50 p-4 ring-1 ring-stone-200">
      <div className="flex flex-wrap items-center gap-2 mb-2">
        <h5 className="font-black text-stone-950">{day.date}</h5>
        <Badge tone={important ? 'green' : isTransfer ? 'amber' : 'blue'}>{day.budget}</Badge>
        {important && <Badge tone="green">🌿 Heart day</Badge>}
        {isTransfer && !important && <Badge tone="amber">⚠️ Transfer day</Badge>}
      </div>
      <p className="text-sm text-emerald-800 font-semibold mb-3">{day.summary}</p>
      <div className="space-y-2">
        {day.items.map((it, idx) => {
          const photoPath = markedPhotoFor(it[1]);
          return (
            <div key={idx} className={cn('overflow-hidden rounded-2xl bg-white ring-1 ring-stone-200', photoPath ? 'grid sm:grid-cols-[130px_1fr]' : '')}>
              {photoPath && <img src={asset(photoPath)} alt={it[1]} className="h-24 w-full object-cover sm:h-full" loading="lazy" onError={(e)=>{e.currentTarget.style.display='none'}}/>}
              <div className="p-3">
                <div className="flex flex-wrap gap-1.5 mb-1">
                  <span className="text-xs font-black text-emerald-800">{it[0]}</span>
                  <span className="text-xs font-black text-amber-700">{it[2]}</span>
                </div>
                <p className="text-xs text-stone-700">{it[1]}</p>
                <div className="mt-2"><MapButton url={mapSearch(`${it[1]} ${day.area} Thailand`)} label="Map"/></div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="mt-3 grid gap-2 sm:grid-cols-3 text-xs">
        <div className="rounded-xl bg-white p-2 ring-1 ring-stone-200"><b className="text-stone-700">Transport</b><p className="mt-0.5 text-stone-500">{day.transport}</p></div>
        <div className="rounded-xl bg-white p-2 ring-1 ring-stone-200"><b className="text-stone-700">Food</b><p className="mt-0.5 text-stone-500">{day.food}</p></div>
        <div className="rounded-xl bg-white p-2 ring-1 ring-stone-200"><b className="text-stone-700">Risk</b><p className="mt-0.5 text-stone-500">{day.risk}</p></div>
      </div>
    </div>
  );
}

// ── ROUTE TAB ─────────────────────────────────────────────────────────────────
function RouteTab() {
  const [open, setOpen] = useState('cnx-arrival');
  const [copied, setCopied] = useState('');
  async function copyText(label, text) { await navigator.clipboard?.writeText(text); setCopied(label); setTimeout(()=>setCopied(''), 1500); }
  const active = routePlansV5.find(p => p.id === open) || routePlansV5[0];

  function directionUrl(from, to) {
    return `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(from + ' Thailand')}&destination=${encodeURIComponent(to + ' Thailand')}&travelmode=driving`;
  }

  return (
    <div className="space-y-4">
      <Title title="Route & directions" subtitle="Tap a route card. See step-by-step directions, cost, and copy-paste messages in English and Thai."/>

      {/* Mobile horizontal scroll */}
      <div className="flex gap-2 overflow-x-auto pb-2 lg:hidden">
        {routePlansV5.map(plan => (
          <button key={plan.id} onClick={()=>setOpen(plan.id)}
            className={cn('min-w-[200px] rounded-2xl p-3 text-left shadow-sm ring-1 transition', open===plan.id ? 'bg-emerald-950 text-white ring-emerald-950' : 'bg-white text-stone-900 ring-stone-200')}>
            <p className={cn('text-[10px] font-black uppercase tracking-widest', open===plan.id ? 'text-emerald-100' : 'text-stone-500')}>{plan.date}</p>
            <h3 className="mt-1 text-sm font-black leading-tight">{plan.title}</h3>
            <p className={cn('mt-1 line-clamp-2 text-[11px]', open===plan.id ? 'text-white/75' : 'text-stone-500')}>{plan.subtitle}</p>
          </button>
        ))}
      </div>

      <div className="grid gap-5 lg:grid-cols-[300px_1fr]">
        {/* Desktop sidebar */}
        <aside className="hidden space-y-2 lg:block lg:sticky lg:top-24 lg:self-start">
          {routePlansV5.map(plan => (
            <button key={plan.id} onClick={()=>setOpen(plan.id)}
              className={cn('w-full rounded-[1.5rem] p-4 text-left shadow-sm ring-1 transition', open===plan.id ? 'bg-emerald-950 text-white ring-emerald-950' : 'bg-white text-stone-900 ring-stone-200 hover:ring-emerald-300')}>
              <p className={cn('text-xs font-black uppercase tracking-widest', open===plan.id ? 'text-emerald-100' : 'text-stone-500')}>{plan.date}</p>
              <h3 className="mt-1 font-serif text-lg leading-tight">{plan.title}</h3>
              <p className={cn('mt-1 text-xs', open===plan.id ? 'text-white/75' : 'text-stone-500')}>{plan.subtitle}</p>
            </button>
          ))}
        </aside>

        {/* Detail panel */}
        <section className="space-y-4">
          <article className="overflow-hidden rounded-[1.5rem] bg-white sm:rounded-[2rem] shadow-sm ring-1 ring-stone-200">
            <Visual tone={active.tone} title={active.title} subtitle={active.subtitle} className="min-h-[185px] rounded-none sm:min-h-[220px]"/>
            <div className="p-4 sm:p-5 space-y-4">
              <div className="flex flex-wrap gap-2">
                <Badge tone="blue">{active.date}</Badge>
                <Badge tone="amber">{active.cost}</Badge>
                <Badge tone="green">{active.time}</Badge>
              </div>

              {/* Day plan */}
              <div className="rounded-[1.5rem] bg-emerald-50 p-4 ring-1 ring-emerald-100">
                <h4 className="font-black text-emerald-950 mb-3">Day plan</h4>
                <div className="space-y-2">
                  {active.days.map(([day, detail]) => (
                    <div key={day} className="rounded-2xl bg-white p-3 ring-1 ring-emerald-100">
                      <p className="text-xs font-black uppercase tracking-wider text-emerald-800">{day}</p>
                      <p className="mt-1 text-xs leading-relaxed text-stone-700">{detail}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Steps */}
              <div className="rounded-[1.5rem] bg-stone-50 p-4">
                <h4 className="font-black text-stone-950 mb-1">Step-by-step directions</h4>
                <p className="text-xs text-stone-500 mb-3">Each step includes transport, duration, cost, and Directions link.</p>
                <div className="space-y-2">
                  {active.steps.map((step, i) => {
                    const [time, from, to, mode, duration, cost] = step;
                    return (
                      <div key={i} className="rounded-2xl bg-white p-3 ring-1 ring-stone-200">
                        <div className="grid gap-2 sm:grid-cols-[100px_1fr_auto] sm:items-center">
                          <div className="rounded-xl bg-emerald-950 px-3 py-2 text-center text-[11px] font-black text-white">{time}</div>
                          <div>
                            <p className="text-sm font-black text-stone-950">{from} → {to}</p>
                            <p className="mt-0.5 text-xs text-stone-500">{mode} · {duration} · {cost}</p>
                          </div>
                          <MapButton url={directionUrl(from, to)} label="Directions"/>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Marked places */}
              <div>
                <h4 className="font-black text-stone-950 mb-1">Marked places</h4>
                <p className="text-xs text-stone-500 mb-3">Photos only for important marked places — no check-in/rest/admin rows.</p>
                <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
                  {active.places.map(([name, photo, note]) => (
                    <div key={name} className="overflow-hidden rounded-[1.5rem] bg-stone-50 ring-1 ring-stone-200">
                      <img src={asset(photo)} alt={name} className="h-32 w-full object-cover" loading="lazy" onError={(e)=>{e.currentTarget.src=asset('/photos/chiangmai-old-cover.jpg')}}/>
                      <div className="p-3">
                        <h5 className="text-sm font-black text-stone-950">{name}</h5>
                        <p className="mt-1 text-xs text-stone-600">{note}</p>
                        <div className="mt-3"><MapButton url={mapSearch(name + ' Thailand')} label="Map"/></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Cost-saving rule */}
              <div className="rounded-[1.5rem] bg-amber-50 p-4 text-sm leading-relaxed text-amber-900 ring-1 ring-amber-200">
                <b>Cost-saving rule:</b> {active.save}
              </div>

              {/* Messages */}
              <div>
                <h4 className="font-black text-stone-950 mb-3">Message to driver / hotel</h4>
                <div className="grid gap-4 md:grid-cols-2">
                  <MessageBox title="English message" text={active.english} label={`${active.id}-en`} copied={copied} copyText={copyText}/>
                  <MessageBox title="Thai message (ข้อความภาษาไทย)" text={active.thai} label={`${active.id}-th`} copied={copied} copyText={copyText}/>
                </div>
              </div>
            </div>
          </article>
        </section>
      </div>
    </div>
  );
}

function RegionsTab() {
  return <div className="space-y-5"><Title title="Region overview" subtitle="Each region has one job. Activities, food, and transport rule at a glance."/>
  {regions.map(r => <article key={r.name} className="grid overflow-hidden rounded-[1.5rem] bg-white sm:rounded-[2rem] shadow-sm ring-1 ring-stone-200 lg:grid-cols-[360px_1fr]">
    <Visual tone={r.tone} title={`${r.emoji} ${r.name}`} subtitle={r.purpose} className="h-full min-h-[300px] rounded-none"/>
    <div className="p-6">
      <div className="flex flex-wrap gap-2"><Badge tone="blue">{r.dates}</Badge><Badge>{r.hotel}</Badge></div>
      <h3 className="mt-3 font-serif text-2xl text-stone-950">{r.name}</h3>
      <p className="mt-3 text-stone-700">{r.why}</p>
      <div className="mt-5 grid gap-4 md:grid-cols-3">
        <Info title="Activities" items={r.do}/>
        <Info title="Food" items={r.food}/>
        <div className="rounded-2xl bg-stone-50 p-4"><h4 className="font-black text-stone-900">Transport rule</h4><p className="mt-2 text-sm text-stone-600">{r.transport}</p></div>
      </div>
      <div className="mt-5"><MapButton url={r.map} label="Open region map"/></div>
    </div>
  </article>)}</div>
}

function Info({title,items}) {
  return <div className="rounded-2xl bg-stone-50 p-4"><h4 className="font-black text-stone-900">{title}</h4><ul className="mt-2 space-y-1 text-sm text-stone-600">{items.map(x=><li key={x}>• {x}</li>)}</ul></div>
}

function FoodTab() {
  const [filter,setFilter] = useState('All');
  const filters = ['All', ...Array.from(new Set(dishes.map(d=>d.region)))];
  const list = filter==='All' ? dishes : dishes.filter(d=>d.region===filter);
  return <div className="space-y-5"><Title title="Food guide" subtitle="Regional dishes, halal-safe notes, and Maps buttons."/>
    <div className="flex gap-2 overflow-x-auto pb-1">{filters.map(f=><button key={f} onClick={()=>setFilter(f)} className={cn('rounded-2xl px-4 py-2 text-sm font-black', filter===f?'bg-emerald-950 text-white':'bg-white text-stone-700 ring-1 ring-stone-200')}>{f}</button>)}</div>
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">{list.map(d=><FoodCard key={d.name} dish={d}/>)}</div>
    <div className="grid gap-4 lg:grid-cols-2">
      <div className="rounded-[1.5rem] bg-white sm:rounded-[2rem] p-5 ring-1 ring-stone-200"><h3 className="font-serif text-2xl">Safe cheap foods</h3><div className="mt-3 flex flex-wrap gap-2">{alwaysSafe.map(x=><Badge key={x} tone="green">{x}</Badge>)}</div></div>
      <div className="rounded-[1.5rem] bg-white sm:rounded-[2rem] p-5 ring-1 ring-stone-200"><h3 className="font-serif text-2xl">Thai phrases</h3><div className="mt-3 grid gap-2">{phrases.map(p=><div key={p.thai} className="rounded-2xl bg-stone-50 p-3 text-sm"><b>{p.pronunciation}</b> — {p.meaning} <span className="text-stone-400">({p.thai})</span></div>)}</div></div>
    </div>
  </div>
}

function FoodCard({dish}) {
  return <div className="overflow-hidden rounded-[1.5rem] bg-white sm:rounded-[2rem] shadow-sm ring-1 ring-stone-200">
    <div className="relative h-48 overflow-hidden bg-gradient-to-br from-amber-700 to-orange-300">
      <img src={dish.photoUrl || asset(realPhotoFor(dish.name, dish.region, 'food'))} alt={dish.name} className="h-full w-full object-cover" loading="lazy"/>
      <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent"/>
      <div className="absolute bottom-4 left-4 right-4"><h3 className="text-xl font-black text-white drop-shadow">{dish.name}</h3><p className="text-sm font-semibold text-white/85">{dish.region}</p></div>
    </div>
    <div className="p-4">
      <div className="flex items-start justify-between gap-3"><h3 className="font-black text-stone-950">{dish.name}</h3><Badge tone="amber">{dish.price}</Badge></div>
      <p className="mt-2 text-sm text-stone-600">{dish.desc}</p>
      <p className="mt-3 text-xs font-black text-emerald-800">📍 {dish.where}</p>
      <p className="mt-1 text-xs text-amber-700">{dish.note}</p>
      <div className="mt-4 flex flex-wrap gap-2"><MapButton url={mapSearch(`${dish.where} ${dish.name} Thailand`)}/></div>
    </div>
  </div>
}

function BudgetTab() {
  return <div className="space-y-5"><Title title="Budget system" subtitle="Expensive extras cut. Heart-of-trip days protected."/>
    <div className="grid gap-4 md:grid-cols-3"><Stat label="Total" value={budget.total}/><Stat label="Hotels" value={budget.hotels}/><Stat label="Remaining" value={budget.remaining}/></div>
    <div className="grid gap-4 lg:grid-cols-2">
      <div className="rounded-[1.5rem] bg-white sm:rounded-[2rem] p-5 ring-1 ring-stone-200"><h3 className="font-serif text-2xl">Remaining split</h3>{budget.split.map(([a,b,c])=><div key={a} className="mt-3 rounded-2xl bg-stone-50 p-3"><div className="flex justify-between gap-4"><b>{a}</b><b className="text-emerald-800">{b}</b></div><p className="text-sm text-stone-600">{c}</p></div>)}</div>
      <div className="rounded-[1.5rem] bg-white sm:rounded-[2rem] p-5 ring-1 ring-stone-200"><h3 className="font-serif text-2xl">Final rules</h3><ol className="mt-3 space-y-2">{rules.map((r,i)=><li key={r} className="rounded-2xl bg-stone-50 p-3 text-sm"><b>{i+1}.</b> {r}</li>)}</ol></div>
    </div>
    <div className="grid gap-4 lg:grid-cols-2"><ListPanel title="Protect" items={budget.protect} tone="green"/><ListPanel title="Cut" items={budget.cuts} tone="red"/></div>
  </div>
}

function ListPanel({title,items,tone}) {
  return <div className="rounded-[1.5rem] bg-white sm:rounded-[2rem] p-5 ring-1 ring-stone-200"><h3 className="font-serif text-2xl">{title}</h3><div className="mt-3 flex flex-wrap gap-2">{items.map(x=><Badge key={x} tone={tone}>{x}</Badge>)}</div></div>
}

function HotelsTab() {
  return <div className="space-y-5"><Title title="Hotels" subtitle="All bases, their purpose, and quick map links."/><div className="grid gap-4 md:grid-cols-2">{hotels.map(h=><div key={h.name} className="rounded-[1.5rem] bg-white sm:rounded-[2rem] p-5 shadow-sm ring-1 ring-stone-200"><div className="flex flex-wrap gap-2"><Badge tone="blue">{h.dates}</Badge><Badge tone="amber">{h.cost}</Badge></div><h3 className="mt-3 font-serif text-2xl text-stone-950">{h.name}</h3><p className="font-black text-emerald-800">{h.area}</p><p className="mt-2 text-sm text-stone-600">{h.note}</p><div className="mt-4"><MapButton url={mapSearch(`${h.name} ${h.area} Thailand`)} label="Hotel map"/></div></div>)}</div></div>
}

function MapTab() {
  const points = [
    ['🛕','Chiang Mai Old City','Jun 3–5 · Tha Phae Gate base'],
    ['♨️','Pai','Jun 5–9 · slow mountain town'],
    ['🍵','Ban Rak Thai','Jun 9–13 · lake and tea village'],
    ['💦','Mae Ya Waterfall','Doi Inthanon must-do'],
    ['⛰️','Doi Inthanon Summit','Highest point in Thailand'],
    ['🌿','Nok Chan Mee Na','Jun 13–18 · Doi base'],
    ['🏔️','Mon Jam','Jun 18–20 · mountain chill'],
    ['🌙','Nimman Chiang Mai','Jun 20–27 · final CM base'],
    ['🏡','Mae Kampong','Protected heart day trip'],
    ['🏙️','Bangkok Siam','Jun 27–30 · final city'],
  ];
  return <div className="space-y-5"><Title title="Map pointers" subtitle="All important regions with Google Maps buttons."/>
    <div className="overflow-hidden rounded-[1.5rem] bg-white sm:rounded-[2rem] shadow-sm ring-1 ring-stone-200"><iframe title="Thailand route map" src="https://maps.google.com/maps?q=Chiang%20Mai%20Thailand&z=7&output=embed" className="h-[420px] w-full border-0" loading="lazy"/></div>
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">{points.map(([emoji,name,desc])=><div key={name} className="rounded-[1.5rem] bg-white sm:rounded-[2rem] p-5 shadow-sm ring-1 ring-stone-200"><div className="text-3xl">{emoji}</div><h3 className="mt-2 font-serif text-2xl text-stone-950">{name}</h3><p className="mt-1 text-sm text-stone-600">{desc}</p><div className="mt-4"><MapButton url={mapSearch(name + ' Thailand')} label="Open map"/></div></div>)}</div>
    <div className="grid gap-4 lg:grid-cols-2">{routeLegs.map(leg=><div key={leg.date+leg.to} className="rounded-[1.5rem] bg-white sm:rounded-[2rem] p-5 ring-1 ring-stone-200"><div className="flex flex-wrap items-center justify-between gap-3"><h3 className="font-serif text-xl text-stone-950">{leg.date}: {leg.from} → {leg.to}</h3><Badge tone="amber">{leg.cost}</Badge></div><p className="mt-2 text-sm text-stone-600">{leg.mode} · {leg.time}. {leg.note}</p><div className="mt-4"><MapButton url={leg.url} label="Directions"/></div></div>)}</div>
  </div>
}

// ── DOCS TAB ──────────────────────────────────────────────────────────────────
const docFlights = [
  { leg:'Dubai → Bangkok', date:'Tue 2 Jun 2026', depart:'21:00 DXB', arrive:'Wed 3 Jun · 09:45 BKK', carrier:'Gulf Air · GF511 + GF152', ref:'NJHPKW', baggage:'1 personal item + 1 cabin (6kg) + 1 checked (25kg)', note:'Check in online early. Halal meal selected.', tone:'blue' },
  { leg:'Bangkok → Chiang Mai', date:'Wed 3 Jun 2026', depart:'12:20 BKK', arrive:'13:40 CNX', carrier:'Thai AirAsia · FD4118', ref:'Kiwi #782708388', baggage:'1 cabin bag only (7kg) — NO checked bag', note:'⚠️ 2h35m connection. Move fast after landing. No baggage carousel.', tone:'amber' },
  { leg:'Chiang Mai → Bangkok', date:'Sat 27 Jun 2026', depart:'07:00 CNX', arrive:'08:15 BKK', carrier:'Thai AirAsia · FD4105', ref:'Kiwi #782708388', baggage:'1 cabin bag only (7kg)', note:'Pre-schedule Bolt to airport night before.', tone:'amber' },
  { leg:'Bangkok → Dubai', date:'Tue 30 Jun 2026', depart:'20:15 BKK', arrive:'Wed 1 Jul · 03:30 DXB', carrier:'Gulf Air · GF153 + GF500', ref:'NJHPKW', baggage:'1 personal item + 1 cabin (6kg) + 1 checked (25kg)', note:'Arrive airport by 17:00.', tone:'blue' },
];

const docHotels = [
  { name:'Collection O Khu Mueang (Tha Phae Gate)', area:'Chiang Mai Old City', dates:'Jun 3–5', bookingId:'658915915', cost:'USD 18.46 (~AED 68)', paymentDate:'May 30, 2026', paymentCard:'Card ending 3086', status:'Pay May 30', tone:'amber', note:'Free cancellation before Jun 1.' },
  { name:'Sleep Pai Bed & Breakfast', area:'Pai', dates:'Jun 5–9', bookingId:'655350451', ref:'5644600441', cost:'THB 1,996', paymentDate:'On arrival', paymentCard:'Pay at property', status:'Pay on arrival', tone:'red', note:'Agoda did NOT collect. Pay property on Jun 5 directly.' },
  { name:'Malee Guesthouse', area:'Mae Hong Son / Ban Rak Thai', dates:'Jun 9–13', bookingId:'653407107', ref:'6717227020', cost:'AED 323 / THB 2,994', paymentDate:'Already paid', paymentCard:'Card ending 3467', status:'Paid ✓', tone:'green', note:'⚠️ 92% cancellation charge. Effectively non-refundable.' },
  { name:'Nok Chan Mee Na', area:'Ban Luang, Chom Thong', dates:'Jun 13–18', bookingId:'655354771', cost:'THB 2,899.55 (~AED 313)', paymentDate:'Jun 11, 2026', paymentCard:'Card ending 3467', status:'Pay Jun 11', tone:'amber', note:'Free cancel before Jun 13. Message hotel for late check-in Jun 13.' },
  { name:'Mon Jaw Doi at Monjam', area:'Mae Rim, Mon Jam', dates:'Jun 18–20', bookingId:'655368147', ref:'5271274052', cost:'AED 217 / THB 1,800', paymentDate:'Already paid', paymentCard:'Card ending 3467', status:'Paid ✓', tone:'green', note:'Breakfast included. Charged May 13.' },
  { name:'Nimman Expat Home', area:'Nimmanhemin, Chiang Mai', dates:'Jun 20–27', bookingId:'655405255', cost:'THB 3,379.88 (~AED 365)', paymentDate:'Jun 18, 2026', paymentCard:'Card ending 3467', status:'Pay Jun 18', tone:'amber', note:'Free cancel before Jun 20. Show passport if name questioned.' },
  { name:'Collection O The Spades Hostel', area:'Siam, Bangkok', dates:'Jun 27–30', bookingId:'659015327', cost:'THB 554.76 (~AED 58)', paymentDate:'Jun 24, 2026', paymentCard:'Card ending 3086', status:'Pay Jun 24', tone:'amber', note:'Mixed dorm 8-bed. Free cancel before Jun 26. Near Siam BTS.' },
];

const docVisa = {
  type:'Thai e-Visa — Tourist TR (Single Entry)',
  number:'***REMOVED-VISA***',
  passport:'***REMOVED-PASSPORT*** (Myanmar)',
  issued:'06 May 2026 · Dubai',
  validFrom:'06 May 2026',
  validUntil:'03 August 2026',
  ref:'DXB001-202604-5520373',
  note:'Single entry — do not exit Thailand mid-trip or visa becomes invalid.',
};

const paymentTimeline = [
  { date:'May 30', what:'Collection O Chiang Mai', amount:'USD 18.46', card:'3086' },
  { date:'Jun 5', what:'Sleep Pai B&B (at property)', amount:'THB 1,996', card:'Cash/card' },
  { date:'Jun 11', what:'Nok Chan Mee Na', amount:'THB 2,900', card:'3467' },
  { date:'Jun 18', what:'Nimman Expat Home', amount:'THB 3,380', card:'3467' },
  { date:'Jun 24', what:'Bangkok hostel (Spades)', amount:'THB 555', card:'3086' },
];

function DocsTab() {
  return (
    <div className="space-y-8">
      <Title title="Trip Documents" subtitle="Visa, flights, hotels, and payment deadlines all in one place."/>
      <section>
        <h3 className="mb-3 font-serif text-2xl text-stone-950">🛂 Thai e-Visa</h3>
        <div className="rounded-[1.5rem] bg-white sm:rounded-[2rem] p-5 ring-1 ring-stone-200">
          <div className="flex flex-wrap gap-2 mb-4"><Badge tone="green">{docVisa.type}</Badge><Badge tone="blue">Visa #{docVisa.number}</Badge><Badge tone="stone">Valid until {docVisa.validUntil}</Badge></div>
          <div className="grid gap-2 text-sm md:grid-cols-2">
            {[['Passport',docVisa.passport],['Issued',docVisa.issued],['Valid From',docVisa.validFrom],['Transaction Ref',docVisa.ref]].map(([label,val])=>
              <div key={label} className="rounded-2xl bg-stone-50 p-3"><b className="text-stone-500 text-xs uppercase">{label}</b><p className="mt-1 font-black">{val}</p></div>)}
          </div>
          <p className="mt-4 rounded-2xl bg-amber-50 p-3 text-sm text-amber-800">⚠️ {docVisa.note}</p>
        </div>
      </section>
      <section>
        <h3 className="mb-3 font-serif text-2xl text-stone-950">✈️ Flights</h3>
        <div className="grid gap-4 lg:grid-cols-2">
          {docFlights.map(f=>(
            <div key={f.leg} className="rounded-[1.5rem] bg-white sm:rounded-[2rem] p-5 ring-1 ring-stone-200">
              <div className="flex flex-wrap gap-2 mb-3"><Badge tone={f.tone}>{f.date}</Badge><Badge tone="stone">Ref: {f.ref}</Badge></div>
              <h4 className="font-black text-lg text-stone-950">{f.leg}</h4>
              <div className="mt-3 grid gap-2 text-sm">
                {[['Depart',f.depart],['Arrive',f.arrive],['Carrier',f.carrier],['Baggage',f.baggage]].map(([label,val])=>
                  <div key={label} className="flex gap-2 items-start rounded-2xl bg-stone-50 p-3"><span className="text-stone-400 shrink-0 w-16 text-xs uppercase font-black pt-0.5">{label}</span><span>{val}</span></div>)}
              </div>
              <p className="mt-3 rounded-2xl bg-amber-50 p-3 text-xs text-amber-800">{f.note}</p>
            </div>
          ))}
        </div>
      </section>
      <section>
        <h3 className="mb-3 font-serif text-2xl text-stone-950">💳 Payment Deadlines</h3>
        <div className="rounded-[1.5rem] bg-white sm:rounded-[2rem] p-5 ring-1 ring-stone-200 space-y-3">
          {paymentTimeline.map(p=>(
            <div key={p.date+p.what} className="grid grid-cols-[80px_1fr_auto] items-center gap-3 rounded-2xl bg-stone-50 p-3 text-sm">
              <span className="font-black text-emerald-800">{p.date}</span>
              <div><p className="font-black text-stone-900">{p.what}</p><p className="text-stone-500 text-xs">Card ending {p.card}</p></div>
              <Badge tone="amber">{p.amount}</Badge>
            </div>
          ))}
        </div>
      </section>
      <section>
        <h3 className="mb-3 font-serif text-2xl text-stone-950">🏨 Hotels & Bookings</h3>
        <div className="grid gap-4 lg:grid-cols-2">
          {docHotels.map(h=>(
            <div key={h.bookingId} className="rounded-[1.5rem] bg-white sm:rounded-[2rem] p-5 ring-1 ring-stone-200">
              <div className="flex flex-wrap gap-2 mb-3"><Badge tone="blue">{h.dates}</Badge><Badge tone={h.tone}>{h.status}</Badge></div>
              <h4 className="font-black text-stone-950">{h.name}</h4>
              <p className="text-sm text-emerald-800 font-black mb-3">{h.area}</p>
              <div className="grid gap-2 text-sm">
                {[['Booking ID',h.bookingId],['Cost',h.cost],['Payment',`${h.paymentDate} · ${h.paymentCard}`]].map(([label,val])=>
                  <div key={label} className="flex gap-2 items-center rounded-2xl bg-stone-50 p-3"><span className="text-stone-400 text-xs uppercase font-black w-20 shrink-0">{label}</span><span>{val}</span></div>)}
              </div>
              <p className="mt-3 rounded-2xl bg-stone-50 p-3 text-xs text-stone-600">{h.note}</p>
              <div className="mt-3"><MapButton url={mapSearch(h.name+' '+h.area)} label="Hotel map"/></div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default function App() {
  const [active, setActive] = useState('Dashboard');
  const screens = { Dashboard:Overview, Plan:PlanTab, Route:RouteTab, Hotels:RegionsTab, Food:FoodTab, Docs:DocsTab, Map:MapTab };
  const Screen = useMemo(() => screens[active] || Overview, [active]);
  return <div className="app-shell min-h-screen bg-[#f4efe4] text-stone-900"><Header active={active} setActive={setActive}/><main className="app-main mx-auto max-w-7xl px-3 pb-8 pt-4 sm:px-4 sm:py-6"><Screen/></main></div>
}