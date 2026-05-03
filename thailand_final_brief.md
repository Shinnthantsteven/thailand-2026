# Thailand Travel App — FINAL BRIEF FOR CLAUDE CODE

> This is the complete, corrected, final version. Build exactly as specified.

**Traveller:** From Dubai · Muslim (no pork, no strict halal cert needed) · Cannot drive scooter · Hotel budget ฿450–500/night (45–50 AED)

---

## Tech Stack
- React + Vite + Tailwind CSS
- No backend — all data hardcoded in `src/data/`
- Deploy via GitHub Actions to GitHub Pages
- Mobile-first, fully responsive
- PWA manifest (installable on iPhone/Android)
- Dark mode toggle (store in localStorage)

---

## Design
- Premium travel app — Airbnb meets Google Trips
- Fonts: `DM Serif Display` (headings) + `Inter` (body) from Google Fonts
- Colors: green `#3B6D11` `#639922` `#EAF3DE` · amber `#BA7517` `#FAEEDA` · white backgrounds
- Every image: `<img>` with `onerror` fallback to CSS gradient — app never breaks if image fails
- Hero images: full width, dark gradient overlay so text always readable on top
- Activity cards: photo thumbnail + time + name + note + price tag

---

## Image Implementation

Use this pattern for ALL images:
```jsx
<img
  src={`https://images.unsplash.com/photo-XXXXXXX?w=800&q=80&auto=format&fit=crop`}
  alt={place}
  onError={(e) => { e.target.style.display='none'; e.target.parentNode.style.background=fallbackGradient; }}
/>
```

Or use Unsplash source API:
```
https://source.unsplash.com/featured/800x500/?{keyword}
```

---

## CONFIRMED PHOTO KEYWORDS — every place

### Region Heroes
| Region | Unsplash keyword | Gradient fallback |
|--------|-----------------|-------------------|
| Chiang Mai Old City | `chiang+mai+wat+chedi+luang+temple` | `linear-gradient(135deg,#3B6D11,#97C459)` |
| Pai | `pai+thailand+valley+bamboo+bridge+rice` | `linear-gradient(135deg,#0F6E56,#5DCAA5)` |
| Ban Rak Thai | `ban+rak+thai+lake+reflection+yunnan` | `linear-gradient(135deg,#085041,#1D9E75)` |
| Doi Inthanon | `mae+ya+waterfall+doi+inthanon+jungle` | `linear-gradient(135deg,#27500A,#639922)` |
| Nimman | `nimman+road+chiang+mai+cafe+street+night` | `linear-gradient(135deg,#185FA5,#85B7EB)` |

### Activity Thumbnails — every single place
| Place | Unsplash keyword |
|-------|-----------------|
| Monk's Trail / Wat Pha Lat | `wat+pha+lat+jungle+temple+chiang+mai` |
| Jing Jai Market | `jing+jai+market+chiang+mai+saturday` |
| Mae Kha Canal night | `mae+kha+canal+chiang+mai+night+lights` |
| Wat Umong | `wat+umong+tunnel+temple+chiang+mai` |
| Baan Kang Wat | `baan+kang+wat+art+village+chiang+mai` |
| PLUTO Café | `pluto+cafe+chiang+mai+cosmos+interior` |
| Khao Soi bowl | `khao+soi+coconut+curry+noodle+soup+thailand` |
| Huen Phen restaurant | `huen+phen+northern+thai+food+chiang+mai` |
| Kadmanee Market | `kadmanee+market+chiang+mai+lake` |
| Bamboo Bridge Pai | `bamboo+bridge+pai+rice+fields+green+thailand` |
| Sai Ngam Hot Springs | `sai+ngam+hot+springs+pai+mineral+pools` |
| Pai Canyon | `pai+canyon+sunset+ridge+thailand` |
| Yun Lai Viewpoint | `yun+lai+viewpoint+pai+sunrise+fog+valley` |
| Pai Walking Street | `pai+walking+street+night+market+food` |
| Ban Rak Thai lake | `ban+rak+thai+lake+morning+reflection` |
| Ban Rak Thai tea house | `yunnan+chinese+tea+house+oolong` |
| Boat on reservoir | `mountain+reservoir+boat+thailand` |
| Wachirathan Waterfall | `wachirathan+waterfall+doi+inthanon+powerful` |
| Mae Ya Waterfall | `mae+ya+waterfall+jungle+doi+inthanon` |
| Ang Ka cloud forest | `ang+ka+nature+trail+cloud+forest+mossy+boardwalk` |
| Mae Klang Luang | `mae+klang+luang+coffee+village+doi+inthanon` |
| Rice terraces | `ban+pa+pong+piang+rice+terraces+green+chiang+mai` |
| Bamboo Rafting | `bamboo+rafting+river+northern+thailand` |
| Sticky Waterfall | `bua+thong+sticky+waterfall+climbing+limestone` |
| Mon Jam | `mon+jam+hilltop+flowers+garden+chiang+mai` |
| Huay Tung Tao | `huay+tung+tao+lake+bamboo+hut+chiang+mai` |
| Mae Kampong | `mae+kampong+village+mountain+chiang+mai` |
| Per-La-Mer Café | `per+la+mer+cafe+mountain+terrace+chiang+mai` |
| Sunday Walking Street | `wualai+walking+street+sunday+chiang+mai+handicraft` |
| Night Bazaar | `chiang+mai+night+bazaar+market+evening` |

### Food Photos
| Dish | Unsplash keyword |
|------|-----------------|
| Khao Soi | `khao+soi+coconut+curry+noodle+soup` |
| Sai Ua sausage | `sai+ua+northern+thai+sausage+grilled+herb` |
| Gaeng Hang Lay | `gaeng+hang+lay+northern+thai+curry` |
| Pad Kra Pao Gai | `pad+krapao+holy+basil+stir+fry+chicken+egg` |
| Mango Sticky Rice | `mango+sticky+rice+thai+coconut+dessert` |
| Roti Banana | `roti+banana+thai+street+food+crispy` |
| Som Tam | `som+tam+papaya+salad+thai+lime` |
| Tom Yum Gai | `tom+yum+gai+chicken+soup+lemongrass+thai` |
| Pad Thai | `pad+thai+noodles+street+food+egg+peanuts` |
| Yunnan Noodles | `yunnan+rice+noodles+chinese+soup+northern` |
| Pu-erh Tea | `puerh+tea+chinese+teahouse+yunnan` |
| Mountain Coffee | `mountain+coffee+northern+thailand+arabica` |

---

## App Structure — 5 Tabs

1. **Route Map** — SVG route diagram + photo cards for each stop
2. **Full Plan** — date-by-date accordion by region
3. **Food Guide** — photo grid of all dishes + phrases
4. **Grab + 7-Eleven** — fares, tips, shopping list
5. **Tips** — hotels, budget, packing, weather, halal, culture

---

## Tab 1: Route Map

### SVG Route Diagram
Draw a horizontal flowing route with 5 nodes connected by dashed lines:

```
[CM Old City] --minivan ฿200--> [Pai] --driver ฿500--> [Ban Rak Thai] --driver ฿600--> [Doi Inthanon] --songthaew ฿400--> [Nimman CM]
Jun 2–5 · 3N         Jun 5–9 · 4N          Jun 9–13 · 4N              Jun 13–18 · 5N                Jun 18–25 · 7N
```

Style: green nodes, dashed connector line, transport label + cost on each arrow, nights badge on each node.

### Stop Cards (below map)
5 clickable cards with photo + region name + dates + nights — clicking jumps to that region in Full Plan tab.

### Budget Summary Cards
| Accommodation | Food | Transport | Activities | Total | Buffer |
|฿11,000 | ฿8,750 | ฿7,500 | ฿3,300 | ฿30,550 | ฿9,450 (green) |

---

## Tab 2: Full Plan — CORRECTED FINAL DATES

### ⚠️ IMPORTANT: Use these exact dates everywhere in the app

| Region | Check-in | Check-out | Nights |
|--------|----------|-----------|--------|
| Chiang Mai Old City | Jun 2 (arrive) | Jun 5 noon | 3 |
| Pai | Jun 5 (arrive ~5:30pm) | Jun 9 noon | 4 |
| Ban Rak Thai | Jun 9 (arrive ~4pm) | Jun 13 noon | 4 |
| Doi Inthanon / Chom Thong | Jun 13 (arrive ~7pm) | Jun 18 noon | 5 |
| Nimman Chiang Mai | Jun 18 (arrive ~2pm) | Jun 25 noon | 7 |
| Airport area last night | Jun 25 | Jun 26 morning | 1 |
| **Fly Bangkok** | **Jun 26** | — | — |

**Total: 24 paid nights + fly Jun 26**

### Check-in / Check-out Rule (show as callout in UI)
> Check-out always 12pm · Check-in always 2pm · Travel same afternoon · Never pay two rooms one night

---

### REGION 1: Chiang Mai Old City
**Jun 2–5 · 3 nights · Grab works · Walkable**
**Hotel:** Old City area guesthouse · ฿450–500/night · Book tonight

#### June 2 · Tuesday · Arrival
| Time | Activity | Note | Cost | Tag |
|------|----------|------|------|-----|
| Land | Grab to Old City hotel | Open Grab in arrivals — never airport taxi counters | ฿150 | transport |
| All day | Rest only | Shower, eat, sleep. You flew from Dubai. Nothing else. | Free | free |

#### June 3 · Wednesday
| Time | Activity | Note | Cost | Tag |
|------|----------|------|------|-----|
| 7:00am | Super Money Exchange | Best baht rates in Old City. Do before spending anything. | Free | warning |
| 8:00am | Monk's Trail → Wat Pha Lat | Grab to CMU gate ฿70. 30-min jungle walk. Hidden jungle temple. | Free | free |
| 10:30am | Khao Soi Lung Prakit | Order "Khao Soi Gai" (chicken). Arrive before noon — sells out. | ฿80 | food |
| Afternoon | Old City moat walk + Wat Chedi Luang + Wat Phra Singh | All walkable inside the moat square. | Free | free |
| Evening | Mae Kha Canal walk + street food | Lights on canal. Say "mai sai moo" (no pork) at every stall. | ฿100 | food |

#### June 4 · Thursday
| Time | Activity | Note | Cost | Tag |
|------|----------|------|------|-----|
| Morning | Halal breakfast near Chiang Mai Gate | Muslim quarter south of moat — dedicated halal places. | ฿60 | food |
| Noon | Huen Phen restaurant lunch | Northern Thai classics. Ask for beef/chicken versions. | ฿200 | food |
| 4:00pm | Wat Umong underground tunnels | Grab ฿80. Broken Buddha field + forest pond. Best at golden hour. | ฿20 | paid |
| 6:00pm | Baan Kang Wat art village | 10-min walk from Wat Umong. Studios + garden cafes at dusk. | Free | free |
| Evening | PLUTO Café Nimman | Grab ฿60. Space/cosmos interior. Order coffee or mocktail. | ฿200–400 | paid |

#### June 5 · Friday · Travel day to Pai
| Time | Activity | Note | Cost | Tag |
|------|----------|------|------|-----|
| Morning | Buy motion sickness tablets at 7-Eleven | Take 1 with breakfast. 762 curves on Pai road. Essential. | ฿40 | warning |
| 12:00pm | Check out · Leave main bag at hotel | Ask to store bag until June 18 — free, always done. | Free | admin |
| 12:30pm | Grab → Arcade Bus Terminal → Minivan to Pai | Front seat. Eat light. Arrive Pai ~5:30pm. | ฿200 | transport |

---

### REGION 2: Pai
**Jun 5 arrive (5:30pm) → Jun 9 noon check-out · 4 nights**
**Hotel:** Pai Country Huts or similar guesthouse · ฿400–500/night · Book this week
**Transport:** NO Grab · Bicycle ฿70/day · Tuk-tuk ฿150–200/trip · Group tour ฿400–500

#### June 5 · Friday · Arrive evening
| Time | Activity | Note | Cost | Tag |
|------|----------|------|------|-----|
| 5:30pm | Check in · Rest 30 min | Motion sickness may linger. Rest first. | — | — |
| 6:30pm | Pai Walking Street | Roti banana ฿50 · pad thai chicken ฿60 · mango sticky rice ฿60. Live music. | ฿170 | food |
| Tonight | Arrange tuk-tuk for Jun 7 5pm: Bamboo Bridge | Ask guesthouse host. ฿150–200 round trip. | Admin | warning |

#### June 6 · Saturday · Hot Springs + lazy afternoon
| Time | Activity | Note | Cost | Tag |
|------|----------|------|------|-----|
| 8:00am | Sai Ngam Hot Springs — half-day tour | Tour picks up from guesthouse. Crystal mineral pools in forest. Arrive early. | ฿220 + ฿400 tour | paid |
| Noon | Slow lunch · River café · No agenda | Breathing afternoon. Walk the town, sit, exist. No schedule at all. | ฿120 | free |
| Evening | Walking Street again | Same stalls, different things to try. | ฿150 | food |
| Tonight | Book nothing · Rest | Tomorrow is a full day. | Free | — |

#### June 7 · Sunday · Bamboo Bridge + Pai Canyon
| Time | Activity | Note | Cost | Tag |
|------|----------|------|------|-----|
| 8:00am | Rent bicycle + town explore | Coffee at Charlie's House ฿70. Flat and easy cycling. | ฿70 | transport |
| 5:00pm | Bamboo Bridge (Boon Ko Ku So) | Tuk-tuk ฿150–200. June = electric green rice paddies. Tell driver to wait 30 min. | ฿30 | paid |
| Tonight | Book tuk-tuk for 5:15am tomorrow — Yun Lai viewpoint | Agree ฿150–200 round trip. 5:15am strict departure. | Admin | warning |

#### June 8 · Monday · Yun Lai sunrise + Pai Canyon
| Time | Activity | Note | Cost | Tag |
|------|----------|------|------|-----|
| 5:15am | Yun Lai Viewpoint sunrise | Tuk-tuk departs 5:15am. Mist over the valley. Tea included. Worth every minute. | ฿20 | paid |
| 7:30am | Return · Breakfast · Rest morning | Sleep in after early start. No rush today. | — | — |
| 5:30pm | Pai Canyon sunset | Tuk-tuk ฿150. Narrow clay ridges. Most dramatic view in Pai. 5:30pm sharp. | Free | free |
| Tonight | Book private driver to Ban Rak Thai for tomorrow 12:30pm | Arrange through guesthouse. ฿400–600. | Admin | warning |

#### June 9 · Tuesday · Travel to Ban Rak Thai
| Time | Activity | Note | Cost | Tag |
|------|----------|------|------|-----|
| 12:00pm | Check out · Return bicycle | — | — | — |
| 12:30pm | Private driver to Ban Rak Thai | 2–3 hrs. Arrive ~4pm. Message Lungwang "arriving 4pm June 9". | ฿400–600 | transport |

---

### REGION 3: Ban Rak Thai
**Jun 9 arrive (4pm) → Jun 13 noon check-out · 4 nights**
**Hotel:** Lungwang Guest House · ฿350–450/night · BOOK RIGHT NOW — fills fastest
**Transport:** 100% walking · Tiny Yunnan Chinese village · No transport needed at all
**Important:** Message guesthouse "arriving 4pm June 9" when booking

#### June 9 · Tuesday · Arrive
| Time | Activity | Note | Cost | Tag |
|------|----------|------|------|-----|
| 4:00pm | Check in Lungwang Guest House | Lake shore walk at dusk if energy allows. | — | — |

#### June 10–12 · Same daily rhythm (3 days)
| Time | Activity | Note | Cost | Tag |
|------|----------|------|------|-----|
| 6:00am | Lake shore walk — mist at dawn | THE highlight. Mist rolls over the water. Don't skip any morning. | Free | free |
| Morning | Tea house — different each day | Day 1: oolong · Day 2: pu-erh · Day 3: green tea. Sit with no agenda. | ฿100–150 | paid |
| Afternoon | Chinese alley walks + Yunnan food | Yunnan noodles ฿70 · mushroom stir fry ฿80. Say "mai sai moo" every time. | ฿150 | food |
| One evening | Boat trip on reservoir | Book through Lungwang. Golden hour on the water. Split with other guests. | ฿400/boat | paid |

#### June 13 · Friday · Travel south
| Time | Activity | Note | Cost | Tag |
|------|----------|------|------|-----|
| 6:00am | Final lake sunrise walk | Last morning here. | Free | free |
| 12:00pm | Check out Lungwang | — | — | — |
| 12:30pm | Private driver south to Chom Thong | 5–7 hrs. Mountain roads. Message guesthouse "arriving 7pm June 13". | ฿500–700 | transport |
| 7:00pm | Arrive Chom Thong · Eat · Sleep early | Big park day tomorrow. Rest well. | — | — |

---

### REGION 4: Doi Inthanon
**Jun 13 arrive (7pm) → Jun 18 noon check-out · 5 nights**
**Hotel:** Chom Thong town guesthouse · ฿400–500/night
**⚠️ DO NOT book Suan Sook resort (฿800–1,200 = over budget)**
**Transport:** Hire park driver at Chom Thong market ฿900–1,200/full day
**Book tonight + message "arriving late ~7pm June 13"**

#### June 14 · Saturday · Recover + Wachirathan Waterfall
| Time | Activity | Note | Cost | Tag |
|------|----------|------|------|-----|
| Morning | Rest · Recover from travel | — | — | — |
| 3:00pm | Wachirathan Waterfall | Tuk-tuk ฿200–300 round trip. You WILL get completely soaked. Wear it. | ฿300 park | paid |
| Tonight | Arrange full-day park driver for June 15 | Mae Ya → Ang Ka summit → Mae Klang Luang. ฿900–1,200 flat rate. | Admin | warning |

#### June 15 · Sunday · ⭐ BEST DAY OF THE ENTIRE TRIP
| Time | Activity | Note | Cost | Tag |
|------|----------|------|------|-----|
| 6:30am | Driver picks up · Bring jacket + snacks + 2 water bottles | ~15°C at summit. Non-negotiable jacket. | ฿900–1,200 all day | transport |
| 7:00am | Mae Ya Waterfall | 30-min jungle trail. 30-tiered cascade. Keep ticket all day. | ฿300 | paid |
| 10:30am | Ang Ka Nature Trail — summit cloud forest | Mossy misty boardwalk at 15°C. Coldest point of trip. Magical. | Included in ticket | free |
| 1:00pm | Mae Klang Luang village — best coffee of trip | Rice field walk. Lunch here. Driver waits. Take your time. | Free | free |

#### June 16 · Monday · Rice terraces + rest afternoon
| Time | Activity | Note | Cost | Tag |
|------|----------|------|------|-----|
| 7:30am | Ban Pa Pong Piang rice terraces | Half-day driver ฿400–600. June green is electric. Back by noon. | Free entry | free |
| Noon | Full rest afternoon — deliberately empty | Sit in Chom Thong. Eat. Walk the market. Nothing scheduled. | — | rest |

#### June 17 · Tuesday · Bamboo Rafting
| Time | Activity | Note | Cost | Tag |
|------|----------|------|------|-----|
| 8:00am | Bamboo Rafting Maewang | Higher water in June = better rafting. Book through guesthouse. Half day. | ฿500–800 | paid |
| Afternoon | Return · Pack · Early sleep | Message Nimman guesthouse "arriving 2pm June 18". | — | admin |

#### June 18 · Wednesday · Travel to Nimman
| Time | Activity | Note | Cost | Tag |
|------|----------|------|------|-----|
| 12:00pm | Check out Chom Thong | — | — | — |
| 12:30pm | Songthaew to Chiang Mai Nimman | ~1.5 hrs. Runs frequently. Easy route. | ฿300–500 | transport |
| 2:00pm | Check in Nimman guesthouse | — | — | — |
| 2:30pm | Grab to Old City to collect stored main bag | Bag stored since June 5. | ฿80 round trip | transport |

---

### REGION 5: Nimman, Chiang Mai
**Jun 18 arrive (2pm) → Jun 25 noon check-out · 7 nights**
**Hotel:** Nimman area guesthouse · ฿450–500/night · Book within 2 weeks
**Transport:** Grab works · All day trips via group tour vans from Nimman Soi 1

#### June 18 · Wednesday · Arrive + settle
| Time | Activity | Note | Cost | Tag |
|------|----------|------|------|-----|
| Afternoon | Settle in · Laundry · Find tour agent Nimman Soi 1 | Walk Soi 1 and find agent for upcoming trips. | — | admin |

#### June 19 · Thursday · Full rest day
| Time | Activity | Note | Cost | Tag |
|------|----------|------|------|-----|
| All day | City wander · Nimman cafes · slow coffee · no plans | Just came from 5 days of mountains. Genuinely do nothing today. | Free | rest |
| Evening | Book Sticky Waterfall + Mon Jam tour for tomorrow | Nimman Soi 1 tour agent. ฿400–600. | Admin | warning |

#### June 20 · Friday · Sticky Waterfall + Mon Jam
| Time | Activity | Note | Cost | Tag |
|------|----------|------|------|-----|
| 7:30am | Group tour van pickup | — | ฿400–600 | transport |
| 9:00am | Sticky Waterfall (Bua Thong) ~60km north | Walk UP the limestone — surface grips your feet. Otherworldly. | Free entry | free |
| 12:00pm | Mon Jam hilltop gardens + lunch | Flower gardens, mountain views. Back in Nimman ~3–4pm. | ฿100 | paid |
| Evening | Book Mae Kampong tour for June 22 at Nimman Soi 1 | — | Admin | warning |

#### June 21 · Saturday · Jing Jai Market + lake day ⭐ ONLY SATURDAY
| Time | Activity | Note | Cost | Tag |
|------|----------|------|------|-----|
| 8:00am | Jing Jai Market — Saturday only | YOUR ONLY SATURDAY IN CHIANG MAI. Grab ฿70. Do not miss. | Free | free |
| 10:30am | Huay Tung Tao lake — bamboo hut all day | Grab ฿100–150. Pick a hut by water. Order food. Sit. Do not move. | ฿200–400 | paid |
| Evening | Night Bazaar | Near Tha Phae Gate. Every evening. Food + crafts. | Free | free |

#### June 22 · Sunday · Mae Kampong + Sunday Walking Street ⭐ ONLY SUNDAY
| Time | Activity | Note | Cost | Tag |
|------|----------|------|------|-----|
| 7:30am | Group tour to Mae Kampong | Tour van from guesthouse. Pre-booked. | ฿400–600 | transport |
| 9:30am | Per-La-Mer Café | Mountain terrace. Best coffee of the Nimman stretch. | ฿200–350 | food |
| 11:00am | Mae Kampong Village + Waterfall | Wander alleys, tea houses. Back ~3pm. | ฿50 | paid |
| Evening | Sunday Walking Street — Wualai Road | YOUR ONLY SUNDAY IN NIMMAN. Handicrafts, silver, food. | Free | free |

#### June 23 · Monday · Free city day
| Time | Activity | Note | Cost | Tag |
|------|----------|------|------|-----|
| All day | Nimman at your pace · Night Bazaar evening | No tours, no agenda. Walk where you want. Eat what you want. | Low spend | rest |

#### June 24 · Tuesday · Markets + final Khao Soi + pack
| Time | Activity | Note | Cost | Tag |
|------|----------|------|------|-----|
| Morning | Kadmanee Market | Lake view, very local. Last market of the trip. | Free | free |
| Noon | Final Khao Soi Gai at Lung Prakit | One last time. You will miss it in Dubai. | ฿80 | food |
| Afternoon | Pack · Last gifts · Early sleep | — | — | admin |

#### June 25 · Wednesday · Check out + last night
| Time | Activity | Note | Cost | Tag |
|------|----------|------|------|-----|
| 12:00pm | Check out Nimman · Grab to airport area guesthouse | Last night near airport. | ฿80 | transport |
| Afternoon | Last coffee · last walk · last look at the city | — | — | free |
| Tonight | Pre-schedule Grab to airport for tomorrow morning | Set it tonight. Peace of mind. | Admin | warning |

#### June 26 · Thursday · Fly to Bangkok
| Time | Activity | Note | Cost | Tag |
|------|----------|------|------|-----|
| Morning | Pre-scheduled Grab to Chiang Mai airport | 15 min. 1.5 hrs before domestic flight is enough. | ฿150 | transport |
| Flight | Chiang Mai → Bangkok | End of 25-night trip. | — | — |

---

## Tab 3: Food Guide

### Layout
- Filter pills: All · Chiang Mai · Pai · Ban Rak Thai · Doi Inthanon · Always Safe
- Grid of food cards: photo + name + description + price + where + region tag

### All Dishes

| Dish | Description | Price | Where | Region | Notes |
|------|-------------|-------|-------|--------|-------|
| Khao Soi Gai | Coconut curry noodle soup + crispy noodles on top. Dish of the north. | ฿80 | Lung Prakit — before noon | Chiang Mai | Order "Gai" (chicken). Sells out. |
| Sai Ua | Northern sausage with lemongrass + galangal. Smoky, herby. | ฿80 | Huen Phen restaurant | Chiang Mai | Ask for chicken/beef version |
| Gaeng Hang Lay | Burmese-style slow-cooked curry. Rich, deep, slightly sweet. | ฿120 | Huen Phen restaurant | Chiang Mai | Ask for beef (neua) version |
| Pad Kra Pao Gai | Holy basil stir-fry + chicken + fried egg on rice. Order this when unsure. | ฿60–70 | Any restaurant | Everywhere | The default safe Thai dish |
| Tom Yum Gai | Chicken tom yum soup. Fragrant + sour + herby. | ฿80 | Any restaurant | Everywhere | Always safe |
| Som Tam | Green papaya salad. Sour + crunchy + chili. | ฿50 | Market stalls | Everywhere | Say "mai sai goong haeng" (no dried shrimp) |
| Mango Sticky Rice | Glutinous rice + coconut cream + ripe mango. | ฿60 | Everywhere | Everywhere | 100% halal. Order every night. |
| Roti Banana | Crispy pancake + banana + condensed milk. | ฿50 | Pai Walking Street | Pai | 100% halal. Best snack of the trip. |
| Pad Thai Gai | Rice noodles + egg + bean sprouts + peanuts + chicken. | ฿60–80 | Any street stall | Everywhere | Order with "gai" always |
| Yunnan Noodles | Chinese-style noodle soup. Lighter than Thai. | ฿70 | Village restaurants | Ban Rak Thai | Ask "mai sai moo" for chicken broth |
| Mushroom Stir Fry | Local mountain mushrooms + garlic + soy. Usually vegetarian. | ฿80 | Village restaurants | Ban Rak Thai | Usually safe without asking |
| Pu-erh Tea | Aged fermented tea. Earthy and smooth. | ฿100–150 | Tea houses | Ban Rak Thai | Sit for 1 hour minimum |
| Mountain Coffee | Single-origin northern Thai arabica. Light + fruity. | ฿60–70 | Charlie's House Pai / Mae Klang Luang | Pai + Doi Inthanon | Best coffee of the trip at Mae Klang Luang |

### Always Safe Without Asking
Mango sticky rice · Roti banana · Fresh fruit (mango, papaya, watermelon ฿20–50) · Grilled corn ฿20 · All coffees + teas · Thai iced tea · 7-Eleven tuna onigiri · Egg sandwiches · Electrolyte drinks

### Key Phrases (show as prominent card)
| Thai | Pronunciation | Meaning |
|------|--------------|---------|
| ไม่ใส่หมู | Mai sai moo | No pork — say at every stall |
| ฮาลาลไหม | Halal mai? | Is this halal? |
| ข้าวซอยไก่ | Khao Soi Gai | Chicken khao soi |
| ไม่เผ็ด | Mai pet | Not spicy |
| เผ็ดนิดหน่อย | Pet nit noi | A little spicy |
| อร่อย | Aroy | Delicious — say this, cook will love you |
| เท่าไหร่ | Tao rai? | How much? |
| ขอบคุณครับ/ค่ะ | Khob khun krap/ka | Thank you (male/female) |

---

## Tab 4: Grab + 7-Eleven

### Grab Section

**Where Grab Works**
| Location | Status |
|----------|--------|
| Chiang Mai city | ✅ Works perfectly |
| Airport arrivals | ✅ Always use — saves ฿100–200 vs taxi counters |
| Pai | ❌ Does not work |
| Ban Rak Thai | ❌ Does not work — walking only |
| Doi Inthanon / Chom Thong | ❌ Does not work — hire local driver |

**Key Fares**
| Journey | Fare |
|---------|------|
| Airport → Old City hotel | ฿120–150 |
| Old City ↔ Nimman | ฿60–80 |
| Old City → CMU gate (Monk's Trail) | ฿60–80 |
| Old City → Wat Umong | ฿80–100 |
| Nimman → Jing Jai Market | ฿60–80 |
| Nimman → Huay Tung Tao lake | ฿100–150 |
| Nimman → Old City (bag pickup Jun 18) | ฿80 round trip |
| Anywhere → Airport | ฿120–180 |

**Pro Tips**
- Download app + create account TONIGHT in Dubai on UAE wifi
- Only use GrabCar or GrabTaxi (4-wheel). Never GrabBike.
- Drop Grab pin at nearest 7-Eleven — every driver knows every branch
- Pre-schedule airport pickup night before flight (Jun 25 night for Jun 26 flight)
- Surge pricing 6–8pm — walk 2 min from busy area before requesting
- Pay cash — keep ฿20 notes handy
- Rate driver 5 stars — it matters a lot to them

### 7-Eleven Section

**Halal-Safe to Buy**
| Item | Price | Note |
|------|-------|------|
| Tuna/egg onigiri | ฿25–35 | Check label. Avoid anything labelled "moo" |
| Coffee machine | ฿25–40 | Americano, latte, Thai milk coffee |
| Water 1.5L | ฿7–10 | Buy 2 every morning. Never drink tap water. |
| Thai milk tea (bottled) | ฿15–25 | Addictive. Buy every day. |
| Fresh fruit cup | ฿30–45 | Papaya, mango, watermelon |
| Electrolyte drink (Sponsor) | ฿15–25 | After every outdoor activity |
| Motion sickness pills | ฿30–50 | Before Pai minivan + BRT mountain roads |
| Banana milk | ฿15–20 | Thai comfort drink |
| Instant noodles (hot water) | ฿12–15 | Emergency meal — staff add hot water |

**Non-Food Essentials**
| Item | Price | Note |
|------|-------|------|
| Foldable umbrella | ฿79–120 | Buy Day 1. June = rainy season. |
| ATM (Bangkok Bank inside) | ฿220 fee | Best rates for foreign cards. Withdraw ฿5,000–10,000 per visit. |
| SIM top-up | — | Show phone number at counter |
| Sunscreen SPF50 | ฿80–150 | Much cheaper than tourist shops |
| Phone cable | ฿100–200 | Larger branches only |

**Life Hacks**
- Use 7-Eleven as Grab pickup landmark — every driver knows every branch
- Free air con — walk in at 35°C midday, cool down, walk out
- Hot water station for instant noodles ฿12 — best emergency meal

---

## Tab 5: Tips

### Hotel Booking Table (show at top — most important)
| Hotel | Check-in | Check-out | Nights | Budget | Urgency |
|-------|----------|-----------|--------|--------|---------|
| Lungwang Guest House, Ban Rak Thai | Jun 9 eve | Jun 13 noon | 4 | ฿350–450 | 🔴 RIGHT NOW |
| Old City guesthouse, Chiang Mai | Jun 2 | Jun 5 noon | 3 | ฿450–500 | 🟠 Tonight |
| Chom Thong guesthouse, Doi Inthanon | Jun 13 late | Jun 18 noon | 5 | ฿400–500 | 🟠 Tonight + late arrival note |
| Pai guesthouse | Jun 5 eve | Jun 9 noon | 4 | ฿400–500 | 🟠 This week |
| Nimman guesthouse, Chiang Mai | Jun 18 | Jun 25 noon | 7 | ฿450–500 | 🟡 Within 2 weeks |
| Airport area, last night | Jun 25 | Jun 26 | 1 | ฿450–500 | 🟢 Anytime |

### Budget Summary Cards
| Accommodation | Food | Transport | Activities | Total | Budget | Buffer |
|฿11,000 | ฿8,750 | ฿7,500 | ฿3,300 | ฿30,550 | ฿40,000 (4,000 AED) | ฿9,450 (green) |

### Tonight from Dubai
- Book Lungwang Guest House Ban Rak Thai — RIGHT NOW
- Book Old City + Chom Thong guesthouses tonight
- Download Grab app + create account (easier on UAE wifi)
- Download Muslim Pro (offline prayer times + qibla direction)
- Download Google Maps offline — save Chiang Mai + Pai areas
- Buy AIS or DTAC SIM at Chiang Mai airport arrivals ฿299/30 days unlimited

### Money
- Exchange at Super Rich Money Exchange Old City — never airport (5–8% worse)
- Rate: 1 AED = ฿10 · 4,000 AED = ฿40,000
- ATM fee: ฿220 per withdrawal — withdraw ฿5,000–10,000 at a time
- Cash only: guesthouses, food stalls, tuk-tuks, market vendors

### Weather June
- Chiang Mai + Pai: 28–35°C, afternoon rain showers
- Doi Inthanon summit: ~15°C — pack 1 light jacket for June 15 only
- June = peak green season — best time for rice paddies + waterfalls
- Umbrella: Buy at 7-Eleven Day 1 ฿79

### Halal Eating
- "Mai sai moo" = no pork — say at every stall, every meal
- Muslim quarter at Chiang Mai Gate (south moat) — dedicated halal restaurants
- Halal Indian restaurants near Tha Phae Gate + Nimman area
- Ban Haw Mosque near Charoenrat Road, Old City Chiang Mai
- Muslim Pro app shows qibla + prayer times offline

### Temples + Culture
- Cover shoulders + knees at all temples. Carry a light scarf always.
- Remove shoes before entering temple buildings
- Don't point feet at Buddha images — sit cross-legged
- Never show frustration in public — smiling + calm = the Thai way
- Bargaining OK at markets. Never at restaurants or food stalls.

### Health + Safety
- Water: Never tap water. 7-Eleven 1.5L bottles ฿7–10. Always carry one.
- Motion sickness: Take tablets BEFORE Pai minivan AND before Ban Rak Thai mountain driver
- Mosquitoes: DEET spray at dusk near water — Ban Rak Thai lake walks especially
- Sunscreen: SPF 50 every morning. Burns fast at this latitude.

### Packing List (interactive checkboxes in app)
- [ ] Light jacket (Doi Inthanon summit June 15 — 15°C)
- [ ] Motion sickness tablets
- [ ] Travel scarf (temple dress code)
- [ ] Sandals that slip off easily
- [ ] Power bank
- [ ] DEET mosquito spray
- [ ] Sunscreen SPF 50
- [ ] Small backpack for day trips
- [ ] Cash AED to exchange on arrival
- [ ] Grab app downloaded + account created
- [ ] Muslim Pro downloaded offline
- [ ] Google Maps offline saved

---

## Important Callouts (show prominently in UI)

```
⭐ June 15 — Best day of the trip
Mae Ya waterfall → Ang Ka cloud forest → Mae Klang Luang coffee
Pack a jacket. One ticket covers everything all day.

⚠️ June 21 — ONLY Saturday in Chiang Mai
Jing Jai Market is Saturday only. You get one chance. Don't miss it.

⚠️ June 22 — ONLY Sunday in Nimman
Sunday Walking Street Wualai Road. One chance only.

🔴 Ban Rak Thai — Book Lungwang RIGHT NOW
Fills faster than anywhere else on this trip.

⚠️ Doi Inthanon hotel — Stay in Chom Thong town
NOT Suan Sook resort (฿800–1,200 = over budget).
Chom Thong guesthouse ฿400–500 + hire driver daily = better value.

⚠️ Motion sickness
Take tablets BEFORE Pai minivan (Jun 5) AND before Ban Rak Thai driver (Jun 9).
Not after — too late.
```

---

## Notes for Claude Code

1. Traveller CANNOT drive scooter — never mention scooter hire anywhere
2. No pork needed — no strict halal certification required
3. 1 AED = ฿10 — show both currencies in budget sections
4. Every image needs onerror fallback to gradient — app must never show broken image icons
5. June 21 is the ONLY Saturday in Chiang Mai (Jing Jai Market Saturday-only) — highlight this
6. June 22 is the ONLY Sunday in Nimman (Sunday Walking Street) — highlight this
7. Fly date is June 26 (Bangkok flight), last night in hotel is June 25
8. The app should work offline after first load
9. PWA manifest so it installs like a native app on iPhone/Android
10. GitHub Actions workflow auto-deploys to GitHub Pages on every push to main
