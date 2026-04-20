const P = {
  TEMPLE:    'https://live.staticflickr.com/3366/3344201566_718cf80480_b.jpg',
  FOOD:      'https://live.staticflickr.com/3571/3455802448_2df4dd77ff_b.jpg',
  MARKET:    'https://live.staticflickr.com/65535/51952125016_0da0f77229.jpg',
  CITY:      'https://live.staticflickr.com/5304/5551811685_c291b3edec_b.jpg',
  PAI:       'https://live.staticflickr.com/2170/2214163089_a437592291.jpg',
  LAKE:      'https://live.staticflickr.com/4670/26243583198_97b92339d1_b.jpg',
  CANYON:    'https://live.staticflickr.com/551/19389050852_a3cb4a05a9_b.jpg',
  WATERFALL: 'https://upload.wikimedia.org/wikipedia/commons/e/e6/Mae_Ya_Waterfall_in_Doi_Inthanon_National_Park%2C_Chiang_Mai%2C_Thailand.jpg',
  RICE:      'https://live.staticflickr.com/1923/44459745554_d7214ae541_b.jpg',
  MOUNTAIN:  'https://live.staticflickr.com/168/370739990_20cbec75f4_b.jpg',
};

export const regions = [
  {
    id: 'chiangmai-old',
    name: 'Chiang Mai Old City',
    dates: 'Jun 2–5',
    nights: 3,
    checkIn: 'Jun 2 (arrive)',
    checkOut: 'Jun 5 noon',
    hotel: 'Old City area guesthouse · ฿450–500/night',
    transport: 'Grab works · Walkable',
    photoUrl: P.TEMPLE,
    gradient: 'linear-gradient(135deg,#3B6D11,#97C459)',
    days: [
      {
        date: 'June 2 · Tuesday · Arrival',
        activities: [
          { time: 'Land', name: 'Grab to Old City hotel', note: 'Open Grab in arrivals — never airport taxi counters', cost: '฿150', tag: 'transport' },
          { time: 'All day', name: 'Rest only', note: 'Shower, eat, sleep. You flew from Dubai. Nothing else.', cost: 'Free', tag: 'free' },
        ],
      },
      {
        date: 'June 3 · Wednesday',
        activities: [
          { time: '7:00am', name: 'Super Money Exchange', note: 'Best baht rates in Old City. Do before spending anything.', cost: 'Free', tag: 'warning' },
          { time: '8:00am', name: "Monk's Trail → Wat Pha Lat", note: 'Grab to CMU gate ฿70. 30-min jungle walk. Hidden jungle temple.', cost: 'Free', tag: 'free', photoUrl: P.TEMPLE },
          { time: '10:30am', name: 'Khao Soi Lung Prakit', note: 'Order "Khao Soi Gai" (chicken). Arrive before noon — sells out.', cost: '฿80', tag: 'food', photoUrl: P.FOOD },
          { time: 'Afternoon', name: 'Old City moat walk + Wat Chedi Luang + Wat Phra Singh', note: 'All walkable inside the moat square.', cost: 'Free', tag: 'free' },
          { time: 'Evening', name: 'Mae Kha Canal walk + street food', note: 'Lights on canal. Say "mai sai moo" (no pork) at every stall.', cost: '฿100', tag: 'food', photoUrl: P.MARKET },
        ],
      },
      {
        date: 'June 4 · Thursday',
        activities: [
          { time: 'Morning', name: 'Halal breakfast near Chiang Mai Gate', note: 'Muslim quarter south of moat — dedicated halal places.', cost: '฿60', tag: 'food' },
          { time: 'Noon', name: 'Huen Phen restaurant lunch', note: 'Northern Thai classics. Ask for beef/chicken versions.', cost: '฿200', tag: 'food', photoUrl: P.FOOD },
          { time: '4:00pm', name: 'Wat Umong underground tunnels', note: 'Grab ฿80. Broken Buddha field + forest pond. Best at golden hour.', cost: '฿20', tag: 'paid', photoUrl: P.TEMPLE },
          { time: '6:00pm', name: 'Baan Kang Wat art village', note: '10-min walk from Wat Umong. Studios + garden cafes at dusk.', cost: 'Free', tag: 'free', photoUrl: P.CITY },
          { time: 'Evening', name: 'PLUTO Café Nimman', note: 'Grab ฿60. Space/cosmos interior. Order coffee or mocktail.', cost: '฿200–400', tag: 'paid', photoUrl: P.CITY },
        ],
      },
      {
        date: 'June 5 · Friday · Travel day to Pai',
        activities: [
          { time: 'Morning', name: 'Buy motion sickness tablets at 7-Eleven', note: 'Take 1 with breakfast. 762 curves on Pai road. Essential.', cost: '฿40', tag: 'warning' },
          { time: '12:00pm', name: 'Check out · Leave main bag at hotel', note: 'Ask to store bag until June 18 — free, always done.', cost: 'Free', tag: 'admin' },
          { time: '12:30pm', name: 'Grab → Arcade Bus Terminal → Minivan to Pai', note: 'Front seat. Eat light. Arrive Pai ~5:30pm.', cost: '฿200', tag: 'transport' },
        ],
      },
    ],
  },
  {
    id: 'pai',
    name: 'Pai',
    dates: 'Jun 5–9',
    nights: 4,
    checkIn: 'Jun 5 (arrive ~5:30pm)',
    checkOut: 'Jun 9 noon',
    hotel: 'Pai Country Huts or similar · ฿400–500/night',
    transport: 'NO Grab · Bicycle ฿70/day · Tuk-tuk ฿150–200/trip · Group tour ฿400–500',
    photoUrl: P.PAI,
    gradient: 'linear-gradient(135deg,#0F6E56,#5DCAA5)',
    days: [
      {
        date: 'June 5 · Friday · Arrive evening',
        activities: [
          { time: '5:30pm', name: 'Check in · Rest 30 min', note: 'Motion sickness may linger. Rest first.', cost: '—', tag: '' },
          { time: '6:30pm', name: 'Pai Walking Street', note: 'Roti banana ฿50 · pad thai chicken ฿60 · mango sticky rice ฿60. Live music.', cost: '฿170', tag: 'food', photoUrl: P.MARKET },
          { time: 'Tonight', name: 'Arrange tuk-tuk for Jun 7 5pm: Bamboo Bridge', note: 'Ask guesthouse host. ฿150–200 round trip.', cost: 'Admin', tag: 'warning' },
        ],
      },
      {
        date: 'June 6 · Saturday · Hot Springs + lazy afternoon',
        activities: [
          { time: '8:00am', name: 'Sai Ngam Hot Springs — half-day tour', note: 'Tour picks up from guesthouse. Crystal mineral pools in forest. Arrive early.', cost: '฿220 + ฿400 tour', tag: 'paid', photoUrl: P.LAKE },
          { time: 'Noon', name: 'Slow lunch · River café · No agenda', note: 'Breathing afternoon. Walk the town, sit, exist. No schedule at all.', cost: '฿120', tag: 'free' },
          { time: 'Evening', name: 'Walking Street again', note: 'Same stalls, different things to try.', cost: '฿150', tag: 'food' },
        ],
      },
      {
        date: 'June 7 · Sunday · Bamboo Bridge',
        activities: [
          { time: '8:00am', name: 'Rent bicycle + town explore', note: "Coffee at Charlie's House ฿70. Flat and easy cycling.", cost: '฿70', tag: 'transport' },
          { time: '5:00pm', name: 'Bamboo Bridge (Boon Ko Ku So)', note: 'Tuk-tuk ฿150–200. June = electric green rice paddies. Tell driver to wait 30 min.', cost: '฿30', tag: 'paid', photoUrl: P.PAI },
          { time: 'Tonight', name: 'Book tuk-tuk for 5:15am tomorrow — Yun Lai viewpoint', note: 'Agree ฿150–200 round trip. 5:15am strict departure.', cost: 'Admin', tag: 'warning' },
        ],
      },
      {
        date: 'June 8 · Monday · Yun Lai sunrise + Pai Canyon',
        activities: [
          { time: '5:15am', name: 'Yun Lai Viewpoint sunrise', note: 'Tuk-tuk departs 5:15am. Mist over the valley. Tea included. Worth every minute.', cost: '฿20', tag: 'paid', photoUrl: P.MOUNTAIN },
          { time: '7:30am', name: 'Return · Breakfast · Rest morning', note: 'Sleep in after early start. No rush today.', cost: '—', tag: '' },
          { time: '5:30pm', name: 'Pai Canyon sunset', note: 'Tuk-tuk ฿150. Narrow clay ridges. Most dramatic view in Pai. 5:30pm sharp.', cost: 'Free', tag: 'free', photoUrl: P.CANYON },
          { time: 'Tonight', name: 'Book private driver to Ban Rak Thai for tomorrow 12:30pm', note: 'Arrange through guesthouse. ฿400–600.', cost: 'Admin', tag: 'warning' },
        ],
      },
      {
        date: 'June 9 · Tuesday · Travel to Ban Rak Thai',
        activities: [
          { time: '12:00pm', name: 'Check out · Return bicycle', note: '—', cost: '—', tag: '' },
          { time: '12:30pm', name: 'Private driver to Ban Rak Thai', note: '2–3 hrs. Arrive ~4pm. Message Lungwang "arriving 4pm June 9".', cost: '฿400–600', tag: 'transport' },
        ],
      },
    ],
  },
  {
    id: 'banrakthai',
    name: 'Ban Rak Thai',
    dates: 'Jun 9–13',
    nights: 4,
    checkIn: 'Jun 9 (arrive ~4pm)',
    checkOut: 'Jun 13 noon',
    hotel: 'Lungwang Guest House · ฿350–450/night · BOOK RIGHT NOW',
    transport: '100% walking · Tiny Yunnan Chinese village · No transport needed',
    photoUrl: P.LAKE,
    gradient: 'linear-gradient(135deg,#085041,#1D9E75)',
    days: [
      {
        date: 'June 9 · Tuesday · Arrive',
        activities: [
          { time: '4:00pm', name: 'Check in Lungwang Guest House', note: 'Lake shore walk at dusk if energy allows.', cost: '—', tag: '' },
        ],
      },
      {
        date: 'June 10–12 · Same daily rhythm (3 days)',
        activities: [
          { time: '6:00am', name: 'Lake shore walk — mist at dawn', note: "THE highlight. Mist rolls over the water. Don't skip any morning.", cost: 'Free', tag: 'free', photoUrl: P.LAKE },
          { time: 'Morning', name: 'Tea house — different each day', note: 'Day 1: oolong · Day 2: pu-erh · Day 3: green tea. Sit with no agenda.', cost: '฿100–150', tag: 'paid', photoUrl: P.MOUNTAIN },
          { time: 'Afternoon', name: 'Chinese alley walks + Yunnan food', note: 'Yunnan noodles ฿70 · mushroom stir fry ฿80. Say "mai sai moo" every time.', cost: '฿150', tag: 'food' },
          { time: 'One evening', name: 'Boat trip on reservoir', note: 'Book through Lungwang. Golden hour on the water. Split with other guests.', cost: '฿400/boat', tag: 'paid', photoUrl: P.LAKE },
        ],
      },
      {
        date: 'June 13 · Friday · Travel south',
        activities: [
          { time: '6:00am', name: 'Final lake sunrise walk', note: 'Last morning here.', cost: 'Free', tag: 'free' },
          { time: '12:00pm', name: 'Check out Lungwang', note: '—', cost: '—', tag: '' },
          { time: '12:30pm', name: 'Private driver south to Chom Thong', note: '5–7 hrs. Mountain roads. Message guesthouse "arriving 7pm June 13".', cost: '฿500–700', tag: 'transport' },
          { time: '7:00pm', name: 'Arrive Chom Thong · Eat · Sleep early', note: 'Big park day tomorrow. Rest well.', cost: '—', tag: '' },
        ],
      },
    ],
  },
  {
    id: 'doiinthanon',
    name: 'Doi Inthanon',
    dates: 'Jun 13–18',
    nights: 5,
    checkIn: 'Jun 13 (arrive ~7pm)',
    checkOut: 'Jun 18 noon',
    hotel: 'Chom Thong town guesthouse · ฿400–500/night',
    transport: 'Hire park driver at Chom Thong market ฿900–1,200/full day',
    photoUrl: P.WATERFALL,
    gradient: 'linear-gradient(135deg,#27500A,#639922)',
    days: [
      {
        date: 'June 14 · Saturday · Recover + Wachirathan Waterfall',
        activities: [
          { time: 'Morning', name: 'Rest · Recover from travel', note: '—', cost: '—', tag: '' },
          { time: '3:00pm', name: 'Wachirathan Waterfall', note: 'Tuk-tuk ฿200–300 round trip. You WILL get completely soaked. Wear it.', cost: '฿300 park', tag: 'paid', photoUrl: P.WATERFALL },
          { time: 'Tonight', name: 'Arrange full-day park driver for June 15', note: 'Mae Ya → Ang Ka summit → Mae Klang Luang. ฿900–1,200 flat rate.', cost: 'Admin', tag: 'warning' },
        ],
      },
      {
        date: 'June 15 · Sunday · ⭐ BEST DAY OF THE ENTIRE TRIP',
        star: true,
        activities: [
          { time: '6:30am', name: 'Driver picks up · Bring jacket + snacks + 2L water', note: '~15°C at summit. Non-negotiable jacket.', cost: '฿900–1,200 all day', tag: 'transport' },
          { time: '7:00am', name: 'Mae Ya Waterfall', note: '30-min jungle trail. 30-tiered cascade. Keep ticket all day.', cost: '฿300', tag: 'paid', photoUrl: P.WATERFALL },
          { time: '10:30am', name: 'Ang Ka Nature Trail — summit cloud forest', note: 'Mossy misty boardwalk at 15°C. Coldest point of trip. Magical.', cost: 'Included in ticket', tag: 'free', photoUrl: P.MOUNTAIN },
          { time: '1:00pm', name: 'Mae Klang Luang village — best coffee of trip', note: 'Rice field walk. Lunch here. Driver waits. Take your time.', cost: 'Free', tag: 'free', photoUrl: P.RICE },
        ],
      },
      {
        date: 'June 16 · Monday · Rice terraces + rest afternoon',
        activities: [
          { time: '7:30am', name: 'Ban Pa Pong Piang rice terraces', note: 'Half-day driver ฿400–600. June green is electric. Back by noon.', cost: 'Free entry', tag: 'free', photoUrl: P.RICE },
          { time: 'Noon', name: 'Full rest afternoon — deliberately empty', note: 'Sit in Chom Thong. Eat. Walk the market. Nothing scheduled.', cost: '—', tag: 'rest' },
        ],
      },
      {
        date: 'June 17 · Tuesday · Bamboo Rafting',
        activities: [
          { time: '8:00am', name: 'Bamboo Rafting Maewang', note: 'Higher water in June = better rafting. Book through guesthouse. Half day.', cost: '฿500–800', tag: 'paid', photoUrl: P.LAKE },
          { time: 'Afternoon', name: 'Return · Pack · Early sleep', note: 'Message Nimman guesthouse "arriving 2pm June 18".', cost: '—', tag: 'admin' },
        ],
      },
      {
        date: 'June 18 · Wednesday · Travel to Nimman',
        activities: [
          { time: '12:00pm', name: 'Check out Chom Thong', note: '—', cost: '—', tag: '' },
          { time: '12:30pm', name: 'Songthaew to Chiang Mai Nimman', note: '~1.5 hrs. Runs frequently. Easy route.', cost: '฿300–500', tag: 'transport' },
          { time: '2:00pm', name: 'Check in Nimman guesthouse', note: '—', cost: '—', tag: '' },
          { time: '2:30pm', name: 'Grab to Old City to collect stored main bag', note: 'Bag stored since June 5.', cost: '฿80 round trip', tag: 'transport' },
        ],
      },
    ],
  },
  {
    id: 'nimman',
    name: 'Nimman, Chiang Mai',
    dates: 'Jun 18–25',
    nights: 7,
    checkIn: 'Jun 18 (arrive ~2pm)',
    checkOut: 'Jun 25 noon',
    hotel: 'Nimman area guesthouse · ฿450–500/night',
    transport: 'Grab works · Group tour vans from Nimman Soi 1',
    photoUrl: P.CITY,
    gradient: 'linear-gradient(135deg,#185FA5,#85B7EB)',
    days: [
      {
        date: 'June 18 · Wednesday · Arrive + settle',
        activities: [
          { time: 'Afternoon', name: 'Settle in · Laundry · Find tour agent Nimman Soi 1', note: 'Walk Soi 1 and find agent for upcoming trips.', cost: '—', tag: 'admin' },
        ],
      },
      {
        date: 'June 19 · Thursday · Full rest day',
        activities: [
          { time: 'All day', name: 'City wander · Nimman cafes · slow coffee · no plans', note: 'Just came from 5 days of mountains. Genuinely do nothing today.', cost: 'Free', tag: 'rest' },
          { time: 'Evening', name: 'Book Sticky Waterfall + Mon Jam tour for tomorrow', note: 'Nimman Soi 1 tour agent. ฿400–600.', cost: 'Admin', tag: 'warning' },
        ],
      },
      {
        date: 'June 20 · Friday · Sticky Waterfall + Mon Jam',
        activities: [
          { time: '7:30am', name: 'Group tour van pickup', note: '—', cost: '฿400–600', tag: 'transport' },
          { time: '9:00am', name: 'Sticky Waterfall (Bua Thong) ~60km north', note: 'Walk UP the limestone — surface grips your feet. Otherworldly.', cost: 'Free entry', tag: 'free', photoUrl: P.WATERFALL },
          { time: '12:00pm', name: 'Mon Jam hilltop gardens + lunch', note: 'Flower gardens, mountain views. Back in Nimman ~3–4pm.', cost: '฿100', tag: 'paid', photoUrl: P.MOUNTAIN },
          { time: 'Evening', name: 'Book Mae Kampong tour for June 22', note: 'Nimman Soi 1 tour agent.', cost: 'Admin', tag: 'warning' },
        ],
      },
      {
        date: 'June 21 · Saturday · ⚠️ ONLY SATURDAY — Jing Jai Market + lake day',
        star: true,
        activities: [
          { time: '8:00am', name: 'Jing Jai Market — Saturday only', note: 'YOUR ONLY SATURDAY IN CHIANG MAI. Grab ฿70. Do not miss.', cost: 'Free', tag: 'free', photoUrl: P.MARKET },
          { time: '10:30am', name: 'Huay Tung Tao lake — bamboo hut all day', note: 'Grab ฿100–150. Pick a hut by water. Order food. Sit. Do not move.', cost: '฿200–400', tag: 'paid', photoUrl: P.LAKE },
          { time: 'Evening', name: 'Night Bazaar', note: 'Near Tha Phae Gate. Every evening. Food + crafts.', cost: 'Free', tag: 'free', photoUrl: P.MARKET },
        ],
      },
      {
        date: 'June 22 · Sunday · ⚠️ ONLY SUNDAY — Mae Kampong + Sunday Walking Street',
        star: true,
        activities: [
          { time: '7:30am', name: 'Group tour to Mae Kampong', note: 'Tour van from guesthouse. Pre-booked.', cost: '฿400–600', tag: 'transport' },
          { time: '9:30am', name: 'Per-La-Mer Café', note: 'Mountain terrace. Best coffee of the Nimman stretch.', cost: '฿200–350', tag: 'food', photoUrl: P.MOUNTAIN },
          { time: '11:00am', name: 'Mae Kampong Village + Waterfall', note: 'Wander alleys, tea houses. Back ~3pm.', cost: '฿50', tag: 'paid', photoUrl: P.WATERFALL },
          { time: 'Evening', name: 'Sunday Walking Street — Wualai Road', note: 'YOUR ONLY SUNDAY IN NIMMAN. Handicrafts, silver, food.', cost: 'Free', tag: 'free', photoUrl: P.MARKET },
        ],
      },
      {
        date: 'June 23 · Monday · Free city day',
        activities: [
          { time: 'All day', name: 'Nimman at your pace · Night Bazaar evening', note: 'No tours, no agenda. Walk where you want. Eat what you want.', cost: 'Low spend', tag: 'rest' },
        ],
      },
      {
        date: 'June 24 · Tuesday · Markets + final Khao Soi + pack',
        activities: [
          { time: 'Morning', name: 'Kadmanee Market', note: 'Lake view, very local. Last market of the trip.', cost: 'Free', tag: 'free', photoUrl: P.MARKET },
          { time: 'Noon', name: 'Final Khao Soi Gai at Lung Prakit', note: 'One last time. You will miss it in Dubai.', cost: '฿80', tag: 'food', photoUrl: P.FOOD },
          { time: 'Afternoon', name: 'Pack · Last gifts · Early sleep', note: '—', cost: '—', tag: 'admin' },
        ],
      },
      {
        date: 'June 25 · Wednesday · Check out + last night',
        activities: [
          { time: '12:00pm', name: 'Check out Nimman · Grab to airport area guesthouse', note: 'Last night near airport.', cost: '฿80', tag: 'transport' },
          { time: 'Afternoon', name: 'Last coffee · last walk · last look at the city', note: '—', cost: '—', tag: 'free' },
          { time: 'Tonight', name: 'Pre-schedule Grab to airport for tomorrow morning', note: 'Set it tonight. Peace of mind.', cost: 'Admin', tag: 'warning' },
        ],
      },
      {
        date: 'June 26 · Thursday · Fly to Bangkok',
        activities: [
          { time: 'Morning', name: 'Pre-scheduled Grab to Chiang Mai airport', note: '15 min. 1.5 hrs before domestic flight is enough.', cost: '฿150', tag: 'transport' },
          { time: 'Flight', name: 'Chiang Mai → Bangkok', note: 'End of 25-night trip.', cost: '—', tag: '' },
        ],
      },
    ],
  },
];
