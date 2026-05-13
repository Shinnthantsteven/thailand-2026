
import { useMemo, useState } from 'react';
import { hotels, budget, rules, messages, days } from './data/trip';
import { dishes, phrases, alwaysSafe } from './data/food';

const tabs = ['Overview', 'Regions', 'Plan', 'Food', 'Transport', 'Budget', 'Messages', 'Docs'];

const regions = [
  ['Chiang Mai Old City','Jun 3–5','Collection O Khu Mueang','🛕','temple','Soft landing: temples, canals, easy food.','This is where you recover from the flight and start gently before the mountain loop.','SuperRich exchange|Monk’s Trail → Wat Pha Lat|Mae Kha Canal|Wat Chedi Luang at night|Baan Kang Wat|PLUTO Café','Khao Soi Gai|Chiang Mai Gate breakfast|street food dinner|one PLUTO drink','Walk inside Old City. Use Grab/Bolt only for far points.'],
  ['Pai','Jun 5–9','Sleep Pai B&B','♨️','water','Slow mountain town: hot spring, rice fields, sunrise, canyon.','Pai is not for rushing. Best value is slow scenery, walking street food, and tuk tuk day trips.','Sai Ngam Hot Springs|Pai Walking Street|Bamboo Bridge|Yun Lai Viewpoint|Pai Canyon sunset','Roti banana|Pad Thai Gai|mango sticky rice|local rice meals','No reliable Grab. Use tuk tuk and agree round-trip price before you go.'],
  ['Ban Rak Thai','Jun 9–13','Malee Guesthouse','🍵','village','Misty lake, tea houses, Yunnan village life.','Three slow days here are a strength. You get lake mist, tea, photos, and quiet village feeling without many paid activities.','Dawn lake mist walk|tea houses|Yunnan village walk|lake photos|early sleep before long transfer','Yunnan noodles|mushroom stir fry|Pu-erh tea|simple village dinner','Walk in village. Arrange Ban Rak Thai → Mae Hong Son transport one day before leaving.'],
  ['Doi Inthanon / Chom Thong','Jun 13–18','Nok Chan Mee Na','🌿','forest','Heart of trip: waterfalls, summit, cloud forest, rural coffee village.','Spend money here because the driver unlocks Mae Ya, summit, Ang Ka, and Mae Klang Luang properly.','Wachirathan Waterfall|Mae Ya Waterfall|Summit|Ang Ka Nature Trail|Mae Klang Luang|Mae Wang bamboo rafting','mountain coffee|simple local lunch|cheap Chom Thong dinner','Use hotel-arranged driver/songthaew. Target Jun 15 + Jun 17 bundle: 3,000–3,500 THB.'],
  ['Mon Jam','Jun 18–20','Mon Jaw Doi at Monjam','⛰️','mountain','Mountain chill only: clouds, cool air, sunset, rest.','Mon Jam should not become another transport headache. It is for enjoying the hotel and mountain view after Doi.','breakfast view|flower gardens if close|hilltop sunset|rest|cheap café only if nearby','included breakfast|simple mountain dinner|coffee if nearby','Ask hotel for shared ride down to Chiang Mai/Nimman. No Sticky Waterfall from here.'],
  ['Nimman / Chiang Mai','Jun 20–27','Nimman Expat Home','🌙','market','Easy ending: markets, rest, food, Mae Kampong.','This is the best base for your final week: rest cheaply, do markets, and take the Mae Kampong join tour.','One Nimman|Wua Lai optional Saturday Night Market|Jing Jai Market|Sunday Walking Street|Mae Kampong village + waterfall','market breakfast|street food snacks|final Khao Soi|Mae Kampong tea/snack','Walk/Bolt in city. Mae Kampong should be a join/shared tour around 800–1,500 THB.'],
  ['Bangkok','Jun 27–30','Collection O The Spades Hostel','🏙️','market','Final city: temples, Chao Phraya, street food, fly home.','Bangkok is your cool-down. Easy BTS, great cheap food, and 3 nights before flying home to Dubai.','Wat Phra Kaew + Grand Palace|Chao Phraya boat|Wat Arun|Khao San Road|MBK Center|Silom street food','Pad Thai|mango sticky rice|Khao San street food|river café snack','BTS Skytrain/MRT for everything. Airport Rail Link (City Line) cheapest to Suvarnabhumi.'],
].map(([name,dates,hotel,emoji,tone,purpose,why,doList,foodList,transport]) => ({
  name, dates, hotel, emoji, tone, purpose, why,
  do: doList.split('|'), food: foodList.split('|'), transport,
  map: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(name + ' Thailand')}`,
}));

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
  {
    title: 'Chiang Mai → Pai',
    image: '/photos/route-chiangmai-to-pai.png',
    note: 'Main mountain transfer by shared minivan. Take motion-sickness tablet and sit in front if possible.',
  },
  {
    title: 'Pai → Ban Rak Thai',
    image: '/photos/route-pai-to-ban-rak-thai.png',
    note: 'Budget method is Pai → Mae Hong Son, then local taxi/songthaew to Ban Rak Thai.',
  },
  {
    title: 'Ban Rak Thai → Doi side',
    image: '/photos/route-ban-rak-thai-to-doi.png',
    note: 'Hardest transfer day. Travel only. Start early and keep cash.',
  },
  {
    title: 'Doi side → Mon Jam',
    image: '/photos/route-doi-to-mon-jam.png',
    note: 'Budget route via Chom Thong and Chiang Mai before going up to Mon Jam.',
  },
  {
    title: 'Mon Jam → Nimman',
    image: '/photos/route-mon-jam-to-nimman.png',
    note: 'Ask hotel for shared ride first. Backup is taxi via Mae Rim.',
  },
  {
    title: 'Nimman → Mae Kampong',
    image: '/photos/route-nimman-to-mae-kampong.png',
    note: 'Best as a join/shared day tour from Nimman.',
  },
  {
    title: 'Doi hotel → Mae Ya',
    image: '/photos/route-doi-hotel-to-mae-ya.png',
    note: 'Start early for your main Doi day. Best first stop of the day.',
  },
  {
    title: 'Mae Ya → Ang Ka',
    image: '/photos/route-mae-ya-to-ang-ka.png',
    note: 'This is the longest internal Doi drive. Keep this in your timing buffer.',
  },
  {
    title: 'Ang Ka → Mae Klang Luang',
    image: '/photos/route-ang-ka-to-mae-klang-luang.png',
    note: 'Short downhill transfer to the coffee village and lunch stop.',
  },
  {
    title: 'Doi hotel → Mae Wang',
    image: '/photos/route-doi-hotel-to-mae-wang.png',
    note: 'Morning route for bamboo rafting day. Add rice terrace only if budget allows.',
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
  temple: '/photos/wat-chedi-luang-night.jpg',
  water: '/photos/wachirathan-waterfall.jpg',
  mountain: '/photos/mon-jam-cover.jpg',
  forest: '/photos/ang-ka-nature-trail.jpg',
  food: '/photos/local-thai-meal.jpg',
  market: '/photos/nimman-cover.jpg',
  transfer: '/photos/doi-inthanon-cover.jpg',
  village: '/photos/mae-kampong-village.jpg',
  rest: '/photos/mon-jam-cover.jpg',
};

function realPhotoFor(title = '', subtitle = '', tone = '') {
  const text = `${title} ${subtitle}`.toLowerCase();
  const found = realPhotos.find(([keys]) => keys.split('|').some(k => text.includes(k.toLowerCase())));
  if (found?.[1]) return found[1];
  const regionFallback = realPhotos.find(([keys]) => subtitle && keys.split('|').some(k => subtitle.toLowerCase().includes(k.toLowerCase())));
  if (regionFallback?.[1]) return regionFallback[1];
  return fallbackByTone[tone] || '/photos/chiangmai-old-cover.jpg';
}

const asset = (path) => `${import.meta.env.BASE_URL}${path.replace(/^\/+/, "")}`;
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

function Visual({tone='mountain',title,subtitle,className=''}) {
  const [emoji,bg] = visual[tone] || visual.mountain;
  const photo = asset(realPhotoFor(title, subtitle, tone));
  return <div className={cn('relative min-h-[180px] overflow-hidden rounded-[2rem] bg-gradient-to-br p-5 text-white shadow-lg', bg, className)}>
    <img src={photo} alt={title} className="absolute inset-0 h-full w-full object-cover" loading="lazy" onError={(e)=>{e.currentTarget.src=asset('/photos/chiangmai-old-cover.jpg')}} />
    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/5"/>
    <div className="absolute bottom-5 left-5 right-5">
      <h3 className="mt-1 text-xl font-black leading-tight drop-shadow">{title}</h3>
      {subtitle && <p className="mt-1 max-w-[85%] text-sm text-white/90">{subtitle}</p>}
    </div>
  </div>
}

function Header({active,setActive}) {
  return <header className="sticky top-0 z-40 border-b border-white/10 bg-emerald-950/95 text-white backdrop-blur">
    <div className="mx-auto max-w-7xl px-4 py-4">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex items-center gap-3">
          <div className="grid h-12 w-12 place-items-center rounded-2xl bg-lime-300 text-2xl shadow-lg">🌿</div>
          <div>
            <h1 className="font-serif text-2xl leading-none">Thailand 2026</h1>
            <p className="mt-1 text-sm text-emerald-100">premium travel dashboard · maps · food · transport</p>
          </div>
        </div>
        <nav className="flex gap-2 overflow-x-auto pb-1">
          {tabs.map(tab => <button key={tab} onClick={()=>setActive(tab)} className={cn('whitespace-nowrap rounded-2xl px-4 py-2 text-sm font-black transition', active===tab?'bg-white text-emerald-950 shadow':'bg-white/10 text-white hover:bg-white/20')}>{tab}</button>)}
        </nav>
      </div>
    </div>
  </header>
}

function Title({title,subtitle}) {
  return <div><h2 className="font-serif text-3xl text-stone-950">{title}</h2><p className="mt-1 text-sm text-stone-600">{subtitle}</p></div>
}

function Stat({label,value}) {
  return <div className="rounded-[2rem] bg-white p-4 shadow-sm ring-1 ring-stone-200"><p className="text-xs font-black uppercase tracking-[0.2em] text-stone-500">{label}</p><p className="mt-1 text-2xl font-black text-emerald-950">{value}</p></div>
}

function Overview() {
  return <div className="space-y-6">
    <section className="grid gap-5 lg:grid-cols-[1.25fr_.75fr]">
      <div className="rounded-[2.25rem] bg-gradient-to-br from-emerald-950 via-emerald-800 to-lime-600 p-6 text-white shadow-xl">
        <p className="text-sm font-black uppercase tracking-[0.3em] text-lime-200">final strategy</p>
        <h2 className="mt-3 font-serif text-4xl leading-tight">Save money everywhere. Spend only where the trip becomes real.</h2>
        <p className="mt-4 max-w-3xl text-emerald-50">Doi Inthanon and Mae Kampong are protected. Elephant, Sticky Waterfall, Huay Tung Tao, massage, and shopping are cut. This version is cleaner, visual, and more useful while travelling.</p>
        <div className="mt-6 flex flex-wrap gap-2"><Badge tone="green">Doi protected</Badge><Badge tone="green">Mae Kampong protected</Badge><Badge tone="amber">4,000 AED budget</Badge><Badge tone="blue">Google Maps links</Badge></div>
      </div>
      <div className="grid gap-3"><Stat label="Total budget" value={budget.total}/><Stat label="Hotels" value={budget.hotels}/><Stat label="Remaining" value={budget.remaining}/></div>
    </section>
    <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">{regions.map(r => <RegionMini key={r.name} r={r}/>)}</section>
  </div>
}

function RegionMini({r}) {
  return <div className="overflow-hidden rounded-[2rem] bg-white shadow-sm ring-1 ring-stone-200">
    <Visual tone={r.tone} title={`${r.emoji} ${r.name}`} subtitle={r.purpose} className="min-h-[170px] rounded-none"/>
    <div className="p-5"><div className="flex flex-wrap gap-2"><Badge tone="blue">{r.dates}</Badge><Badge>{r.hotel}</Badge></div><p className="mt-3 text-sm text-stone-600">{r.why}</p><div className="mt-4"><MapButton url={r.map}/></div></div>
  </div>
}

function RegionsTab() {
  return <div className="space-y-5"><Title title="Region-by-region plan" subtitle="Each region has one job. This prevents transport mistakes and budget leaks."/>
  {regions.map(r => <article key={r.name} className="grid overflow-hidden rounded-[2rem] bg-white shadow-sm ring-1 ring-stone-200 lg:grid-cols-[360px_1fr]">
    <Visual tone={r.tone} title={`${r.emoji} ${r.name}`} subtitle={r.purpose} className="h-full min-h-[300px] rounded-none"/>
    <div className="p-6"><div className="flex flex-wrap gap-2"><Badge tone="blue">{r.dates}</Badge><Badge>{r.hotel}</Badge></div><h3 className="mt-3 font-serif text-2xl text-stone-950">{r.name}</h3><p className="mt-3 text-stone-700">{r.why}</p>
    <div className="mt-5 grid gap-4 md:grid-cols-3"><Info title="Activities" items={r.do}/><Info title="Food" items={r.food}/><div className="rounded-2xl bg-stone-50 p-4"><h4 className="font-black text-stone-900">Transport rule</h4><p className="mt-2 text-sm text-stone-600">{r.transport}</p></div></div><div className="mt-5"><MapButton url={r.map} label="Open region map"/></div></div>
  </article>)}</div>
}

function Info({title,items}) {
  return <div className="rounded-2xl bg-stone-50 p-4"><h4 className="font-black text-stone-900">{title}</h4><ul className="mt-2 space-y-1 text-sm text-stone-600">{items.map(x=><li key={x}>• {x}</li>)}</ul></div>
}

function PlanTab() {
  return <div className="space-y-5"><Title title="Full day-by-day plan" subtitle="Timing, food, transport, cost, risk notes, and Maps buttons for each useful activity." />{days.map((day,i)=><DayCard key={day.date} day={day} index={i}/>)}</div>
}

function DayCard({day,index}) {
  const text = `${day.area} ${day.summary} ${day.items.map(x=>x[1]).join(' ')}`;
  const tone = classify(text);
  const important = /heart|Doi Inthanon|Mae Kampong/i.test(text);
  const transfer = /transfer|travel/i.test(text);
  return <article className="overflow-hidden rounded-[2rem] bg-white shadow-sm ring-1 ring-stone-200">
    <div className="grid lg:grid-cols-[330px_1fr]">
      <Visual tone={tone} title={`Day ${index+1}: ${day.date}`} subtitle={day.area} className="h-full min-h-[260px] rounded-none"/>
      <div className="p-5"><div className="flex flex-wrap gap-2"><Badge tone={important?'green':transfer?'amber':'stone'}>{day.budget}</Badge><Badge tone="blue">{day.hotel}</Badge><MapButton url={mapSearch(day.area + ' Thailand')} label="Area map"/></div><h3 className="mt-3 font-serif text-2xl text-stone-950">{day.date}</h3><p className="font-black text-emerald-800">{day.area}</p><p className="mt-3 text-stone-700">{day.summary}</p>
      <div className="mt-4 space-y-3">{day.items.map((it,idx)=><div key={idx} className="grid gap-3 rounded-2xl bg-stone-50 p-3 md:grid-cols-[110px_1fr_auto_auto] md:items-center"><b className="text-emerald-800">{it[0]}</b><span className="text-sm text-stone-700">{it[1]}</span><b className="text-sm text-stone-900">{it[2]}</b><MapButton url={mapSearch(`${it[1]} ${day.area} Thailand`)} label="Map"/></div>)}</div>
      <div className="mt-4 grid gap-3 md:grid-cols-3"><Tiny title="Transport" text={day.transport}/><Tiny title="Food" text={day.food}/><Tiny title="Risk" text={day.risk}/></div></div>
    </div>
  </article>
}

function Tiny({title,text}) {
  return <div className="rounded-2xl border border-stone-200 p-3"><p className="font-black text-stone-950">{title}</p><p className="mt-1 text-xs leading-relaxed text-stone-600">{text}</p></div>
}

function FoodTab() {
  const [filter,setFilter] = useState('All');
  const filters = ['All', ...Array.from(new Set(dishes.map(d=>d.region)))];
  const list = filter==='All' ? dishes : dishes.filter(d=>d.region===filter);
  return <div className="space-y-5"><Title title="Food guide" subtitle="Generated-style food cards, regional suggestions, halal-safe notes, and Maps buttons."/>
    <div className="flex gap-2 overflow-x-auto pb-1">{filters.map(f=><button key={f} onClick={()=>setFilter(f)} className={cn('rounded-2xl px-4 py-2 text-sm font-black', filter===f?'bg-emerald-950 text-white':'bg-white text-stone-700 ring-1 ring-stone-200')}>{f}</button>)}</div>
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">{list.map(d=><FoodCard key={d.name} dish={d}/>)}</div>
    <div className="grid gap-4 lg:grid-cols-2"><div className="rounded-[2rem] bg-white p-5 ring-1 ring-stone-200"><h3 className="font-serif text-2xl">Safe cheap foods</h3><div className="mt-3 flex flex-wrap gap-2">{alwaysSafe.map(x=><Badge key={x} tone="green">{x}</Badge>)}</div></div><div className="rounded-[2rem] bg-white p-5 ring-1 ring-stone-200"><h3 className="font-serif text-2xl">Thai phrases</h3><div className="mt-3 grid gap-2">{phrases.map(p=><div key={p.thai} className="rounded-2xl bg-stone-50 p-3 text-sm"><b>{p.pronunciation}</b> — {p.meaning} <span className="text-stone-400">({p.thai})</span></div>)}</div></div></div>
  </div>
}

function FoodCard({dish}) {
  return <div className="overflow-hidden rounded-[2rem] bg-white shadow-sm ring-1 ring-stone-200">
    <Visual tone={dish.name.includes('Tea') || dish.name.includes('Coffee') ? 'forest' : 'food'} title={dish.name} subtitle={dish.region} className="min-h-[160px] rounded-none"/>
    <div className="p-4"><div className="flex items-start justify-between gap-3"><h3 className="font-black text-stone-950">{dish.name}</h3><Badge tone="amber">{dish.price}</Badge></div><p className="mt-2 text-sm text-stone-600">{dish.desc}</p><p className="mt-3 text-xs font-black text-emerald-800">📍 {dish.where}</p><p className="mt-1 text-xs text-amber-700">{dish.note}</p><div className="mt-4 flex flex-wrap gap-2"><MapButton url={mapSearch(`${dish.where} ${dish.name} Thailand`)}/><MapButton url={mapSearch(`${dish.name} near me Thailand`)} label="Find near me"/></div></div>
  </div>
}

function TransportTab() {
  const hard = days.filter(d=>/June 13|June 15|June 17|June 18|June 20|June 25/.test(d.date));
  return <div className="space-y-5"><Title title="Transport command center" subtitle="Use this tab before each difficult movement. Every big route has a Google Maps direction link."/>
    <div className="grid gap-4 lg:grid-cols-2">{routeLegs.map(leg=><div key={leg.date+leg.to} className="rounded-[2rem] bg-white p-5 ring-1 ring-stone-200"><div className="flex flex-wrap items-center justify-between gap-3"><h3 className="font-serif text-xl text-stone-950">{leg.date}: {leg.from} → {leg.to}</h3><Badge tone="amber">{leg.cost}</Badge></div><p className="mt-2 font-black text-emerald-800">{leg.mode} · {leg.time}</p><p className="mt-2 text-sm text-stone-600">{leg.note}</p><div className="mt-4"><MapButton url={leg.url} label="Directions"/></div></div>)}</div>
    <Title title="Route previews" subtitle="Main transfer routes and Doi internal route cards made for the app."/>
    <div className="grid gap-4 lg:grid-cols-3">{routeVisuals.map((route)=><div key={route.title} className="overflow-hidden rounded-[2rem] bg-white ring-1 ring-stone-200"><img src={asset(route.image)} alt={route.title} className="h-52 w-full object-cover" loading="lazy"/><div className="p-4"><h3 className="font-black text-stone-950">{route.title}</h3><p className="mt-2 text-sm text-stone-600">{route.note}</p></div></div>)}</div>
    <Title title="Hard-day notes" subtitle="Detailed notes from your final itinerary."/>
    <div className="grid gap-4 lg:grid-cols-2">{hard.map(day=><div key={day.date} className="rounded-[2rem] bg-white p-5 ring-1 ring-stone-200"><div className="flex items-start justify-between gap-3"><h3 className="font-serif text-2xl text-stone-950">{day.date}</h3><Badge tone="amber">{day.budget}</Badge></div><p className="mt-2 font-black text-emerald-800">{day.summary}</p><p className="mt-3 text-sm text-stone-700">{day.transport}</p><div className="mt-4 space-y-2">{day.items.slice(0,5).map((it,i)=><div key={i} className="rounded-2xl bg-stone-50 p-3 text-sm"><b>{it[0]}</b> · {it[1]} <span className="font-black text-stone-900">{it[2]}</span></div>)}</div></div>)}</div>
  </div>
}

function BudgetTab() {
  return <div className="space-y-5"><Title title="Budget system" subtitle="The whole trip works because expensive extras are cut and heart-of-trip days are protected."/>
    <div className="grid gap-4 md:grid-cols-3"><Stat label="Total" value={budget.total}/><Stat label="Hotels" value={budget.hotels}/><Stat label="Remaining" value={budget.remaining}/></div>
    <div className="grid gap-4 lg:grid-cols-2"><div className="rounded-[2rem] bg-white p-5 ring-1 ring-stone-200"><h3 className="font-serif text-2xl">Remaining split</h3>{budget.split.map(([a,b,c])=><div key={a} className="mt-3 rounded-2xl bg-stone-50 p-3"><div className="flex justify-between gap-4"><b>{a}</b><b className="text-emerald-800">{b}</b></div><p className="text-sm text-stone-600">{c}</p></div>)}</div><div className="rounded-[2rem] bg-white p-5 ring-1 ring-stone-200"><h3 className="font-serif text-2xl">Final rules</h3><ol className="mt-3 space-y-2">{rules.map((r,i)=><li key={r} className="rounded-2xl bg-stone-50 p-3 text-sm"><b>{i+1}.</b> {r}</li>)}</ol></div></div>
    <div className="grid gap-4 lg:grid-cols-2"><ListPanel title="Protect" items={budget.protect} tone="green"/><ListPanel title="Cut" items={budget.cuts} tone="red"/></div>
  </div>
}

function ListPanel({title,items,tone}) {
  return <div className="rounded-[2rem] bg-white p-5 ring-1 ring-stone-200"><h3 className="font-serif text-2xl">{title}</h3><div className="mt-3 flex flex-wrap gap-2">{items.map(x=><Badge key={x} tone={tone}>{x}</Badge>)}</div></div>
}

function HotelsTab() {
  return <div className="space-y-5"><Title title="Hotels" subtitle="All bases, their purpose, and quick map links."/><div className="grid gap-4 md:grid-cols-2">{hotels.map(h=><div key={h.name} className="rounded-[2rem] bg-white p-5 shadow-sm ring-1 ring-stone-200"><div className="flex flex-wrap gap-2"><Badge tone="blue">{h.dates}</Badge><Badge tone="amber">{h.cost}</Badge></div><h3 className="mt-3 font-serif text-2xl text-stone-950">{h.name}</h3><p className="font-black text-emerald-800">{h.area}</p><p className="mt-2 text-sm text-stone-600">{h.note}</p><div className="mt-4"><MapButton url={mapSearch(`${h.name} ${h.area} Thailand`)} label="Hotel map"/></div></div>)}</div></div>
}

function MessagesTab() {
  const [copied,setCopied] = useState('');
  async function copy(m) { await navigator.clipboard?.writeText(m.text); setCopied(m.title); setTimeout(()=>setCopied(''),1200); }
  return <div className="space-y-5"><Title title="Copy-paste messages" subtitle="Tap copy and send to hotels or drivers." />{messages.map(m=><div key={m.title} className="rounded-[2rem] bg-white p-5 ring-1 ring-stone-200"><div className="flex items-center justify-between gap-3"><h3 className="font-black text-stone-950">{m.title}</h3><button onClick={()=>copy(m)} className="rounded-2xl bg-emerald-950 px-4 py-2 text-sm font-black text-white">{copied===m.title?'Copied':'Copy'}</button></div><pre className="mt-4 whitespace-pre-wrap rounded-2xl bg-stone-50 p-4 text-sm text-stone-700">{m.text}</pre></div>)}</div>
}


// ── DOCS TAB ─────────────────────────────────────────────────────────────────

const docFlights = [
  {
    leg: 'Dubai → Bangkok',
    date: 'Tue 2 Jun 2026',
    depart: '21:00 DXB',
    arrive: 'Wed 3 Jun · 09:45 BKK (Suvarnabhumi)',
    carrier: 'Gulf Air · GF511 + GF152',
    ref: 'NJHPKW',
    customerRef: '40-962561025',
    baggage: '1 personal item + 1 cabin bag (6kg) + 1 checked bag (25kg)',
    note: 'Check in online early. Halal meal selected.',
    tone: 'blue',
  },
  {
    leg: 'Bangkok → Chiang Mai',
    date: 'Wed 3 Jun 2026',
    depart: '12:20 BKK (Suvarnabhumi)',
    arrive: '13:40 CNX (Chiang Mai Intl)',
    carrier: 'Thai AirAsia · FD4118',
    ref: 'Kiwi #782708388',
    customerRef: '',
    baggage: '1 cabin bag only (7kg, 23×36×56cm) — NO checked bag',
    note: '⚠️ 2h35m connection from international. Move fast after landing. No baggage carousel wait.',
    tone: 'amber',
  },
  {
    leg: 'Chiang Mai → Bangkok',
    date: 'Sat 27 Jun 2026',
    depart: '07:00 CNX',
    arrive: '08:15 BKK (Suvarnabhumi)',
    carrier: 'Thai AirAsia · FD4105',
    ref: 'Kiwi #782708388',
    customerRef: '',
    baggage: '1 cabin bag only (7kg)',
    note: 'Pre-schedule Bolt to airport night before. Departs early.',
    tone: 'amber',
  },
  {
    leg: 'Bangkok → Dubai',
    date: 'Tue 30 Jun 2026',
    depart: '20:15 BKK (Suvarnabhumi)',
    arrive: 'Wed 1 Jul · 03:30 DXB',
    carrier: 'Gulf Air · GF153 + GF500',
    ref: 'NJHPKW',
    customerRef: '40-962561025',
    baggage: '1 personal item + 1 cabin bag (6kg) + 1 checked bag (25kg)',
    note: 'Arrive airport by 17:00. Check in online.',
    tone: 'blue',
  },
];

const docHotels = [
  {
    name: 'Collection O Khu Mueang (Tha Phae Gate)',
    area: 'Chiang Mai Old City',
    dates: 'Jun 3–5 (2 nights)',
    bookingId: '658915915',
    ref: '',
    cost: 'USD 18.46 (~AED 68)',
    paymentDate: 'May 30, 2026',
    paymentCard: 'Card ending 3086',
    status: 'Pay May 30',
    tone: 'amber',
    note: 'Free cancellation before Jun 1. Old City near Tha Phae Gate.',
  },
  {
    name: 'Sleep Pai Bed & Breakfast',
    area: 'Pai',
    dates: 'Jun 5–9 (4 nights)',
    bookingId: '655350451',
    ref: '5644600441',
    cost: 'THB 1,996',
    paymentDate: 'On arrival',
    paymentCard: 'Pay at property',
    status: 'Pay on arrival',
    tone: 'red',
    note: 'Agoda did NOT collect. Pay property directly on Jun 5. Have cash/card ready.',
  },
  {
    name: 'Malee Guesthouse',
    area: 'Mok Cham Pae, Mae Hong Son',
    dates: 'Jun 9–13 (4 nights)',
    bookingId: '653407107',
    ref: '6717227020',
    cost: 'AED 323 / THB 2,994',
    paymentDate: 'Already paid',
    paymentCard: 'Card ending 3467',
    status: 'Paid ✓',
    tone: 'green',
    note: '⚠️ 92% cancellation charge for any cancellation. Non-refundable effectively. Booking name: Shinn Thant Steven.',
  },
  {
    name: 'Nok Chan Mee Na',
    area: 'Ban Luang, Chom Thong',
    dates: 'Jun 13–18 (5 nights)',
    bookingId: '655354771',
    ref: '',
    cost: 'THB 2,899.55 (~AED 313)',
    paymentDate: 'Jun 11, 2026',
    paymentCard: 'Card ending 3467',
    status: 'Pay Jun 11',
    tone: 'amber',
    note: 'Free cancel before Jun 13. Key base for Doi Inthanon. Message hotel for late check-in Jun 13.',
  },
  {
    name: 'Mon Jaw Doi at Monjam',
    area: 'Mae Rim, Mon Jam',
    dates: 'Jun 18–20 (2 nights)',
    bookingId: '655368147',
    ref: '5271274052',
    cost: 'AED 217 / THB 1,800',
    paymentDate: 'Already paid',
    paymentCard: 'Card ending 3467',
    status: 'Paid ✓',
    tone: 'green',
    note: 'Breakfast included. Mountain highland at 1,400m. Already charged May 13.',
  },
  {
    name: 'Nimman Expat Home',
    area: 'Nimmanhemin, Chiang Mai',
    dates: 'Jun 20–27 (7 nights)',
    bookingId: '655405255',
    ref: '',
    cost: 'THB 3,379.88 (~AED 365)',
    paymentDate: 'Jun 18, 2026',
    paymentCard: 'Card ending 3467',
    status: 'Pay Jun 18',
    tone: 'amber',
    note: 'Free cancel before Jun 20. Booking name: Shinn Thant Steven. Show passport if asked.',
  },
  {
    name: 'Collection O The Spades Hostel',
    area: 'Siam, Bangkok',
    dates: 'Jun 27–30 (3 nights)',
    bookingId: '659015327',
    ref: '',
    cost: 'THB 554.76 (~AED 58)',
    paymentDate: 'Jun 24, 2026',
    paymentCard: 'Card ending 3086',
    status: 'Pay Jun 24',
    tone: 'amber',
    note: 'Mixed dorm (8 bed). Free cancel before Jun 26. Near Siam BTS. Card ending 3086.',
  },
];

const docVisa = {
  type: 'Thai e-Visa — Tourist TR (Single Entry)',
  number: '***REMOVED-VISA***',
  passport: '***REMOVED-PASSPORT*** (Myanmar)',
  issued: '06 May 2026 · Dubai',
  validFrom: '06 May 2026',
  validUntil: '03 August 2026',
  ref: 'DXB001-202604-5520373',
  note: 'Single entry — do not exit Thailand mid-trip or visa becomes invalid.',
};

const paymentTimeline = [
  { date: 'May 30', what: 'Collection O Chiang Mai', amount: 'USD 18.46', card: '3086', done: false },
  { date: 'Jun 5', what: 'Sleep Pai B&B (at property)', amount: 'THB 1,996', card: 'Cash/card', done: false },
  { date: 'Jun 11', what: 'Nok Chan Mee Na', amount: 'THB 2,900', card: '3467', done: false },
  { date: 'Jun 18', what: 'Nimman Expat Home', amount: 'THB 3,380', card: '3467', done: false },
  { date: 'Jun 24', what: 'Bangkok hostel (Spades)', amount: 'THB 555', card: '3086', done: false },
];

function DocsTab() {
  return (
    <div className="space-y-8">
      <Title title="Trip Documents" subtitle="All flights, hotels, visa, and payment deadlines in one place." />

      {/* VISA */}
      <section>
        <h3 className="mb-3 font-serif text-2xl text-stone-950">🛂 Thai e-Visa</h3>
        <div className="rounded-[2rem] bg-white p-5 ring-1 ring-stone-200">
          <div className="flex flex-wrap gap-2 mb-4">
            <Badge tone="green">{docVisa.type}</Badge>
            <Badge tone="blue">Visa #{docVisa.number}</Badge>
            <Badge tone="stone">Valid until {docVisa.validUntil}</Badge>
          </div>
          <div className="grid gap-2 text-sm md:grid-cols-2">
            <div className="rounded-2xl bg-stone-50 p-3"><b className="text-stone-500 text-xs uppercase">Passport</b><p className="mt-1 font-black">{docVisa.passport}</p></div>
            <div className="rounded-2xl bg-stone-50 p-3"><b className="text-stone-500 text-xs uppercase">Issued</b><p className="mt-1 font-black">{docVisa.issued}</p></div>
            <div className="rounded-2xl bg-stone-50 p-3"><b className="text-stone-500 text-xs uppercase">Valid From</b><p className="mt-1 font-black">{docVisa.validFrom}</p></div>
            <div className="rounded-2xl bg-stone-50 p-3"><b className="text-stone-500 text-xs uppercase">Transaction Ref</b><p className="mt-1 font-black">{docVisa.ref}</p></div>
          </div>
          <p className="mt-4 rounded-2xl bg-amber-50 p-3 text-sm text-amber-800">⚠️ {docVisa.note}</p>
        </div>
      </section>

      {/* FLIGHTS */}
      <section>
        <h3 className="mb-3 font-serif text-2xl text-stone-950">✈️ Flights</h3>
        <div className="grid gap-4 lg:grid-cols-2">
          {docFlights.map(f => (
            <div key={f.leg} className="rounded-[2rem] bg-white p-5 ring-1 ring-stone-200">
              <div className="flex flex-wrap gap-2 mb-3">
                <Badge tone={f.tone}>{f.date}</Badge>
                {f.ref && <Badge tone="stone">Ref: {f.ref}</Badge>}
              </div>
              <h4 className="font-black text-lg text-stone-950">{f.leg}</h4>
              <div className="mt-3 grid gap-2 text-sm">
                <div className="flex gap-2 items-start rounded-2xl bg-stone-50 p-3">
                  <span className="text-stone-400 shrink-0 w-20 text-xs uppercase font-black pt-0.5">Depart</span>
                  <span className="font-black">{f.depart}</span>
                </div>
                <div className="flex gap-2 items-start rounded-2xl bg-stone-50 p-3">
                  <span className="text-stone-400 shrink-0 w-20 text-xs uppercase font-black pt-0.5">Arrive</span>
                  <span className="font-black">{f.arrive}</span>
                </div>
                <div className="flex gap-2 items-start rounded-2xl bg-stone-50 p-3">
                  <span className="text-stone-400 shrink-0 w-20 text-xs uppercase font-black pt-0.5">Carrier</span>
                  <span>{f.carrier}</span>
                </div>
                <div className="flex gap-2 items-start rounded-2xl bg-stone-50 p-3">
                  <span className="text-stone-400 shrink-0 w-20 text-xs uppercase font-black pt-0.5">Baggage</span>
                  <span>{f.baggage}</span>
                </div>
                {f.customerRef && (
                  <div className="flex gap-2 items-start rounded-2xl bg-stone-50 p-3">
                    <span className="text-stone-400 shrink-0 w-20 text-xs uppercase font-black pt-0.5">Booking</span>
                    <span>{f.customerRef}</span>
                  </div>
                )}
              </div>
              <p className="mt-3 rounded-2xl bg-amber-50 p-3 text-xs text-amber-800">{f.note}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PAYMENT TIMELINE */}
      <section>
        <h3 className="mb-3 font-serif text-2xl text-stone-950">💳 Payment Deadlines</h3>
        <div className="rounded-[2rem] bg-white p-5 ring-1 ring-stone-200">
          <div className="space-y-3">
            {paymentTimeline.map(p => (
              <div key={p.date + p.what} className="grid grid-cols-[80px_1fr_auto] items-center gap-3 rounded-2xl bg-stone-50 p-3 text-sm">
                <span className="font-black text-emerald-800">{p.date}</span>
                <div>
                  <p className="font-black text-stone-900">{p.what}</p>
                  <p className="text-stone-500 text-xs">Card ending {p.card}</p>
                </div>
                <Badge tone={p.done ? 'green' : 'amber'}>{p.amount}</Badge>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOTELS */}
      <section>
        <h3 className="mb-3 font-serif text-2xl text-stone-950">🏨 Hotels & Bookings</h3>
        <div className="grid gap-4 lg:grid-cols-2">
          {docHotels.map(h => (
            <div key={h.bookingId} className="rounded-[2rem] bg-white p-5 ring-1 ring-stone-200">
              <div className="flex flex-wrap gap-2 mb-3">
                <Badge tone="blue">{h.dates}</Badge>
                <Badge tone={h.tone}>{h.status}</Badge>
              </div>
              <h4 className="font-black text-stone-950">{h.name}</h4>
              <p className="text-sm text-emerald-800 font-black mb-3">{h.area}</p>
              <div className="grid gap-2 text-sm">
                <div className="flex gap-2 items-center rounded-2xl bg-stone-50 p-3">
                  <span className="text-stone-400 text-xs uppercase font-black w-24 shrink-0">Booking ID</span>
                  <span className="font-black">{h.bookingId}</span>
                </div>
                {h.ref && (
                  <div className="flex gap-2 items-center rounded-2xl bg-stone-50 p-3">
                    <span className="text-stone-400 text-xs uppercase font-black w-24 shrink-0">Ref</span>
                    <span className="font-black">{h.ref}</span>
                  </div>
                )}
                <div className="flex gap-2 items-center rounded-2xl bg-stone-50 p-3">
                  <span className="text-stone-400 text-xs uppercase font-black w-24 shrink-0">Cost</span>
                  <span>{h.cost}</span>
                </div>
                <div className="flex gap-2 items-center rounded-2xl bg-stone-50 p-3">
                  <span className="text-stone-400 text-xs uppercase font-black w-24 shrink-0">Payment</span>
                  <span>{h.paymentDate} · {h.paymentCard}</span>
                </div>
              </div>
              <p className="mt-3 rounded-2xl bg-stone-50 p-3 text-xs text-stone-600">{h.note}</p>
              <div className="mt-3">
                <MapButton url={mapSearch(h.name + ' ' + h.area)} label="Hotel map"/>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default function App() {
  const [active,setActive] = useState('Overview');
  const Screen = useMemo(()=>({Overview, Regions:RegionsTab, Plan:PlanTab, Food:FoodTab, Transport:TransportTab, Budget:BudgetTab, Messages:MessagesTab, Docs:DocsTab}[active]),[active]);
  return <div className="min-h-screen bg-[#f4efe4] text-stone-900"><Header active={active} setActive={setActive}/><main className="mx-auto max-w-7xl px-4 py-6"><Screen/></main></div>
}

