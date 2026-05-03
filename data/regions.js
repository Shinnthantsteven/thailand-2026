// ── Photo constants — each key is a unique Wikimedia Commons image ──────────
const P = {
  WAT_PHA_LAT:            'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Chiang_Mai_-_Wat_Pha_Lat_-_0001.jpg/1280px-Chiang_Mai_-_Wat_Pha_Lat_-_0001.jpg',
  WAT_CHEDI_LUANG_DAY:    'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Wat_Chedi_Luang%2C_Buddhist_temple%2C_Chiang_Mai%2C_Thailand.jpg/1280px-Wat_Chedi_Luang%2C_Buddhist_temple%2C_Chiang_Mai%2C_Thailand.jpg',
  WAT_CHEDI_LUANG_NIGHT:  'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Wat_Chedi_Luang_at_night%2C_Chiang_Mai%2C_Thailand.jpg/1280px-Wat_Chedi_Luang_at_night%2C_Chiang_Mai%2C_Thailand.jpg',
  WAT_UMONG:              'https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Wat_Pha_Lat%2C_Chiang_Mai_20250116.jpg/1280px-Wat_Pha_Lat%2C_Chiang_Mai_20250116.jpg',
  PING_RIVER:             'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Ping_River.jpg/1280px-Ping_River.jpg',
  CM_HILL:                'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/View_Chiang_Mai_from_hill.jpg/1280px-View_Chiang_Mai_from_hill.jpg',
  CM_PANORAMIC:           'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Panoramic_view_of_Chiang_Mai_City.jpg/1280px-Panoramic_view_of_Chiang_Mai_City.jpg',
  CM_SKYVIEW:             'https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Chiang_Mai_City_Sky_View.jpg/1280px-Chiang_Mai_City_Sky_View.jpg',
  CM_OLDTOWN:             'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Chiang_mai_oldtown1.jpg/1280px-Chiang_mai_oldtown1.jpg',
  BAZAAR_A:               'https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Chiang_Mai_Night_Bazaar.jpg/1280px-Chiang_Mai_Night_Bazaar.jpg',
  BAZAAR_B:               'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Chiangmai_Nightbazaar-1.JPG/1280px-Chiangmai_Nightbazaar-1.JPG',
  PAI_BAMBOO:             'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Rice_paddy_in_Thailand_%28Boon_Kho_Ku_Sui_Bridge%29.jpg/1280px-Rice_paddy_in_Thailand_%28Boon_Kho_Ku_Sui_Bridge%29.jpg',
  PAI_PADDY:              'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Paddy_fields_in_Pai.jpg/1280px-Paddy_fields_in_Pai.jpg',
  PAI_CANYON:             'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Pai_canyon.jpg/1280px-Pai_canyon.jpg',
  BRT_VILLAGE:            'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Ban_Rak_Thai_Mae_Hong_Sorn_Thailand_%28125159281%29.jpeg/1280px-Ban_Rak_Thai_Mae_Hong_Sorn_Thailand_%28125159281%29.jpeg',
  BRT_LAKE:               'https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Lago_de_MaeAw_al_amanecer._Thailandia_%2817219552190%29.jpg/1280px-Lago_de_MaeAw_al_amanecer._Thailandia_%2817219552190%29.jpg',
  BRT_HARBOUR:            'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Harbour2-ban-rak-thai.jpg/1280px-Harbour2-ban-rak-thai.jpg',
  WACHIRATHAN:            'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Wachirathan_Waterfall_1.jpg/1280px-Wachirathan_Waterfall_1.jpg',
  MAE_YA:                 'https://upload.wikimedia.org/wikipedia/commons/e/e6/Mae_Ya_Waterfall_in_Doi_Inthanon_National_Park%2C_Chiang_Mai%2C_Thailand.jpg',
  ANG_KA:                 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Moist_evergreen_forest%2C_Ang_Ka_Nature_Trail.JPG/1280px-Moist_evergreen_forest%2C_Ang_Ka_Nature_Trail.JPG',
  DOI_MOUNTAIN:           'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Doi_Inthanon%2C_View_of_the_mountains%2C_Thailand.jpg/1280px-Doi_Inthanon%2C_View_of_the_mountains%2C_Thailand.jpg',
  DOI_FIELD:              'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Field_of_Doi_Inthanon_national_park.jpg/1280px-Field_of_Doi_Inthanon_national_park.jpg',
};

export const regions = [
  {
    id: 'chiangmai-old',
    name: 'Chiang Mai Old City',
    dates: 'Jun 2–5',
    nights: 3,
    checkIn: 'Jun 2 (arrive)',
    checkOut: 'Jun 5 noon',
    hotel: 'Nature Boutique Hotel · Old City · ✅ BOOKED',
    transport: 'Grab works · Walkable',
    photoUrl: P.WAT_CHEDI_LUANG_DAY,
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
          { time: '8:00am', name: "Monk's Trail → Wat Pha Lat", note: 'Grab to CMU gate ฿70. 30-min jungle walk. Hidden jungle temple.', cost: 'Free', tag: 'free', photoUrl: P.WAT_PHA_LAT },
          { time: '10:30am', name: 'Khao Soi Lung Prakit', note: 'Order "Khao Soi Gai" (chicken). Arrive before noon — sells out.', cost: '฿80', tag: 'food' },
          { time: 'Afternoon', name: 'Old City moat walk + Wat Chedi Luang + Wat Phra Singh', note: 'All walkable inside the moat square.', cost: 'Free', tag: 'free', photoUrl: P.WAT_CHEDI_LUANG_NIGHT },
          { time: 'Evening', name: 'Mae Kha Canal walk + street food', note: 'Lights on canal. Say "mai sai moo" (no pork) at every stall.', cost: '฿100', tag: 'food', photoUrl: P.PING_RIVER },
        ],
      },
      {
        date: 'June 4 · Thursday',
        activities: [
          { time: 'Morning', name: 'Halal breakfast near Chiang Mai Gate', note: 'Muslim quarter south of moat — dedicated halal places.', cost: '฿60', tag: 'food' },
          { time: 'Noon', name: 'Huen Phen restaurant lunch', note: 'Northern Thai classics. Ask for beef/chicken versions.', cost: '฿200', tag: 'food' },
          { time: '4:00pm', name: 'Wat Umong underground tunnels', note: 'Grab ฿80. Broken Buddha field + forest pond. Best at golden hour.', cost: '฿20', tag: 'paid', photoUrl: P.WAT_UMONG },
          { time: '6:00pm', name: 'Baan Kang Wat art village', note: '10-min walk from Wat Umong. Studios + garden cafes at dusk.', cost: 'Free', tag: 'free', photoUrl: P.CM_HILL },
          { time: 'Evening', name: 'PLUTO Café Nimman', note: 'Grab ฿60. Space/cosmos interior. Order coffee or mocktail.', cost: '฿200–400', tag: 'paid', photoUrl: P.CM_SKYVIEW },
        ],
      },
      {
        date: 'June 5 · Friday · Travel day to Pai',
        activities: [
          { time: 'Morning', name: 'Buy motion sickness tablets at 7-Eleven', note: 'Take 1 with breakfast. 762 curves on Pai road. Essential.', cost: '฿40', tag: 'warning' },
          { time: '12:00pm', name: 'Check out · Leave main bag at hotel', note: 'Ask to store bag until June 20 — free, always done.', cost: 'Free', tag: 'admin' },
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
    hotel: 'Sleep Pai Bed & Breakfast · Pai Riverside ✅ BOOKED',
    transport: 'NO Grab · Bicycle ฿70/day · Tuk-tuk ฿150–200/trip · Group tour ฿400–500',
    photoUrl: P.PAI_BAMBOO,
    gradient: 'linear-gradient(135deg,#0F6E56,#5DCAA5)',
    days: [
      {
        date: 'June 5 · Friday · Arrive evening',
        activities: [
          { time: '5:30pm', name: 'Check in · Rest 30 min', note: 'Motion sickness may linger. Rest first.', cost: '—', tag: '' },
          { time: '6:30pm', name: 'Pai Walking Street', note: 'Roti banana ฿50 · pad thai chicken ฿60 · mango sticky rice ฿60. Live music.', cost: '฿170', tag: 'food', photoUrl: P.BAZAAR_A },
          { time: 'Tonight', name: 'Arrange tuk-tuk for Jun 7 5pm: Bamboo Bridge', note: 'Ask guesthouse host. ฿150–200 round trip.', cost: 'Admin', tag: 'warning' },
        ],
      },
      {
        date: 'June 6 · Saturday · Hot Springs + lazy afternoon',
        activities: [
          { time: '8:00am', name: 'Sai Ngam Hot Springs — half-day tour', note: 'Tour picks up from guesthouse. Crystal mineral pools in forest. Arrive early.', cost: '฿220 + ฿400 tour', tag: 'paid', photoUrl: P.PAI_PADDY },
          { time: 'Noon', name: 'Slow lunch · River café · No agenda', note: 'Breathing afternoon. Walk the town, sit, exist. No schedule at all.', cost: '฿120', tag: 'free' },
          { time: 'Evening', name: 'Walking Street again', note: 'Same stalls, different things to try.', cost: '฿150', tag: 'food' },
        ],
      },
      {
        date: 'June 7 · Sunday · Bamboo Bridge',
        activities: [
          { time: '8:00am', name: 'Rent bicycle + town explore', note: "Coffee at Charlie's House ฿70. Flat and easy cycling.", cost: '฿70', tag: 'transport' },
          { time: '5:00pm', name: 'Bamboo Bridge (Boon Ko Ku So)', note: 'Tuk-tuk ฿150–200. June = electric green rice paddies. Tell driver to wait 30 min.', cost: '฿30', tag: 'paid', photoUrl: P.PAI_BAMBOO },
          { time: 'Tonight', name: 'Book tuk-tuk for 5:15am tomorrow — Yun Lai viewpoint', note: 'Agree ฿150–200 round trip. 5:15am strict departure.', cost: 'Admin', tag: 'warning' },
        ],
      },
      {
        date: 'June 8 · Monday · Yun Lai sunrise + Pai Canyon',
        activities: [
          { time: '5:15am', name: 'Yun Lai Viewpoint sunrise', note: 'Tuk-tuk departs 5:15am. Mist over the valley. Tea included. Worth every minute.', cost: '฿20', tag: 'paid', photoUrl: P.CM_PANORAMIC },
          { time: '7:30am', name: 'Return · Breakfast · Rest morning', note: 'Sleep in after early start. No rush today.', cost: '—', tag: '' },
          { time: '5:30pm', name: 'Pai Canyon sunset', note: 'Tuk-tuk ฿150. Narrow clay ridges. Most dramatic view in Pai. 5:30pm sharp.', cost: 'Free', tag: 'free', photoUrl: P.PAI_CANYON },
          { time: 'Tonight', name: 'Book private driver to Ban Rak Thai for tomorrow 12:30pm', note: 'Arrange through guesthouse. ฿400–600.', cost: 'Admin', tag: 'warning' },
        ],
      },
      {
        date: 'June 9 · Tuesday · Travel to Ban Rak Thai',
        activities: [
          { time: '12:00pm', name: 'Check out · Return bicycle', note: '—', cost: '—', tag: '' },
          { time: '12:30pm', name: 'Private driver to Ban Rak Thai', note: '2–3 hrs. Arrive ~4pm. Message Malee Guesthouse "arriving 4pm June 9".', cost: '฿400–600', tag: 'transport' },
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
    hotel: 'Malee Guesthouse · Mae Hong Son ✅ BOOKED',
    transport: '100% walking · Tiny Yunnan Chinese village · No transport needed',
    photoUrl: P.BRT_VILLAGE,
    gradient: 'linear-gradient(135deg,#085041,#1D9E75)',
    days: [
      {
        date: 'June 9 · Tuesday · Arrive',
        activities: [
          { time: '4:00pm', name: 'Check in Malee Guesthouse', note: 'Lake shore walk at dusk if energy allows.', cost: '—', tag: '' },
        ],
      },
      {
        date: 'June 10–12 · Same daily rhythm (3 days)',
        activities: [
          { time: '6:00am', name: 'Lake shore walk — mist at dawn', note: "THE highlight. Mist rolls over the water. Don't skip any morning.", cost: 'Free', tag: 'free', photoUrl: P.BRT_LAKE },
          { time: 'Morning', name: 'Tea house — different each day', note: 'Day 1: oolong · Day 2: pu-erh · Day 3: green tea. Sit with no agenda.', cost: '฿100–150', tag: 'paid', photoUrl: P.DOI_MOUNTAIN },
          { time: 'Afternoon', name: 'Chinese alley walks + Yunnan food', note: 'Yunnan noodles ฿70 · mushroom stir fry ฿80. Say "mai sai moo" every time.', cost: '฿150', tag: 'food' },
          { time: 'One evening', name: 'Boat trip on reservoir', note: 'Book through guesthouse. Golden hour on the water. Split with other guests.', cost: '฿400/boat', tag: 'paid', photoUrl: P.BRT_HARBOUR },
        ],
      },
      {
        date: 'June 13 · Saturday · Travel south to Doi Inthanon',
        activities: [
          { time: '6:00am', name: 'Final lake sunrise walk', note: 'Last morning here.', cost: 'Free', tag: 'free', photoUrl: P.BRT_LAKE },
          { time: '12:00pm', name: 'Check out Malee Guesthouse', note: '—', cost: '—', tag: '' },
          { time: '12:30pm', name: 'Private driver south to Chom Thong', note: '5–7 hrs. Mountain roads. Message Nok Chan Mee Na "arriving 7pm June 13".', cost: '฿500–700', tag: 'transport' },
          { time: '7:00pm', name: 'Arrive Chom Thong · Eat · Sleep early', note: 'Big park day soon. Rest well.', cost: '—', tag: '' },
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
    hotel: 'Nok Chan Mee Na · Ban Luang, Chom Thong ✅ BOOKED',
    transport: 'Hire park driver at Chom Thong market ฿900–1,200/full day',
    photoUrl: P.MAE_YA,
    gradient: 'linear-gradient(135deg,#27500A,#639922)',
    days: [
      {
        date: 'June 14 · Sunday · Recover + Wachirathan Waterfall',
        activities: [
          { time: 'Morning', name: 'Rest · Recover from travel', note: '—', cost: '—', tag: '' },
          { time: '3:00pm', name: 'Wachirathan Waterfall', note: 'Tuk-tuk ฿200–300 round trip. You WILL get completely soaked. Wear it.', cost: '฿300 park', tag: 'paid', photoUrl: P.WACHIRATHAN },
          { time: 'Tonight', name: 'Arrange full-day park driver for June 15', note: 'Mae Ya → Ang Ka summit → Mae Klang Luang. ฿900–1,200 flat rate.', cost: 'Admin', tag: 'warning' },
        ],
      },
      {
        date: 'June 15 · Monday · ⭐ BEST DAY OF THE ENTIRE TRIP',
        star: true,
        activities: [
          { time: '6:30am', name: 'Driver picks up · Bring jacket + snacks + 2L water', note: '~15°C at summit. Non-negotiable jacket.', cost: '฿900–1,200 all day', tag: 'transport' },
          { time: '7:00am', name: 'Mae Ya Waterfall', note: '30-min jungle trail. 30-tiered cascade. Keep ticket all day.', cost: '฿300', tag: 'paid', photoUrl: P.MAE_YA },
          { time: '10:30am', name: 'Ang Ka Nature Trail — summit cloud forest', note: 'Mossy misty boardwalk at 15°C. Coldest point of trip. Magical.', cost: 'Included', tag: 'free', photoUrl: P.ANG_KA },
          { time: '1:00pm', name: 'Mae Klang Luang village — best coffee of trip', note: 'Rice field walk. Lunch here. Driver waits. Take your time.', cost: 'Free', tag: 'free', photoUrl: P.DOI_FIELD },
        ],
      },
      {
        date: 'June 16 · Tuesday · Rice terraces + rest afternoon',
        activities: [
          { time: '7:30am', name: 'Ban Pa Pong Piang rice terraces', note: 'Half-day driver ฿400–600. June green is electric. Back by noon.', cost: 'Free entry', tag: 'free', photoUrl: P.DOI_MOUNTAIN },
          { time: 'Noon', name: 'Full rest afternoon — deliberately empty', note: 'Sit in Chom Thong. Eat. Walk the market. Nothing scheduled.', cost: '—', tag: 'rest' },
        ],
      },
      {
        date: 'June 17 · Wednesday · Bamboo Rafting',
        activities: [
          { time: '8:00am', name: 'Bamboo Rafting Maewang', note: 'Higher water in June = better rafting. Book through guesthouse. Half day.', cost: '฿500–800', tag: 'paid', photoUrl: P.BRT_HARBOUR },
          { time: 'Afternoon', name: 'Return · Pack · Early sleep', note: 'Message Mon Jaw Doi at Monjam "arriving afternoon June 18".', cost: '—', tag: 'admin' },
        ],
      },
      {
        date: 'June 18 · Thursday · Travel to Mon Jam',
        activities: [
          { time: '12:00pm', name: 'Check out Nok Chan Mee Na', note: '—', cost: '—', tag: '' },
          { time: '12:30pm', name: 'Drive north to Mon Jam (Mae Rim area)', note: '~2.5 hrs via Chiang Mai. Mountain road. Arrive ~3pm.', cost: '฿300–500', tag: 'transport' },
          { time: '3:00pm', name: 'Check in Mon Jaw Doi at Monjam', note: 'Double Room with Private Bathroom · Breakfast included ✅', cost: '—', tag: '' },
          { time: 'Afternoon', name: 'Mon Jam gardens · flowers · clouds', note: 'Walk the hilltop. Breathe the cool mountain air. Enjoy the view.', cost: 'Free', tag: 'free', photoUrl: P.CM_HILL },
        ],
      },
    ],
  },
  {
    id: 'monjam',
    name: 'Mon Jam',
    dates: 'Jun 18–20',
    nights: 2,
    checkIn: 'Jun 18 (arrive ~3pm)',
    checkOut: 'Jun 20 noon',
    hotel: 'Mon Jaw Doi at Monjam · Mae Rim · 8.3 Excellent ✅ BOOKED',
    transport: 'Local driver · ~30 min to Sticky Waterfall · ~20 min to Huay Tung Tao',
    photoUrl: P.CM_HILL,
    gradient: 'linear-gradient(135deg,#2D6A4F,#74C69D)',
    days: [
      {
        date: 'June 18 · Thursday · Arrive + settle',
        activities: [
          { time: '3:00pm', name: 'Check in · rest · enjoy the view', note: 'You just finished 5 days of mountain parks. Breathe. Relax.', cost: '—', tag: 'rest' },
          { time: 'Evening', name: 'Mon Jam hilltop gardens + sunset', note: 'Walk the flower gardens as the sun sets. Clouds roll below. Pure magic.', cost: 'Free', tag: 'free', photoUrl: P.CM_HILL },
        ],
      },
      {
        date: 'June 19 · Friday · Sticky Waterfall + Mon Jam viewpoint',
        activities: [
          { time: '8:00am', name: 'Breakfast included at hotel', note: 'Start day right. Cool mountain morning.', cost: 'Included', tag: 'free' },
          { time: '9:00am', name: 'Sticky Waterfall (Bua Thong)', note: 'Calcium limestone surface grips your bare feet — you can walk straight UP the waterfall. Unique in Thailand.', cost: 'Free entry', tag: 'free', photoUrl: P.WACHIRATHAN },
          { time: '12:00pm', name: 'Return to hotel · lunch', note: 'Rest during midday.', cost: '฿100', tag: 'food' },
          { time: '3:00pm', name: 'Mon Jam viewpoint + Yod Doi coffee', note: 'The hilltop panoramic view in late afternoon. Clouds below the mountains.', cost: '฿100', tag: 'paid', photoUrl: P.ANG_KA },
          { time: 'Evening', name: 'Dinner · cool mountain night', note: 'Best sleep of the trip in the cool air.', cost: '฿150', tag: 'food' },
        ],
      },
      {
        date: 'June 20 · Saturday · Huay Tung Tao → Nimman',
        activities: [
          { time: '8:00am', name: 'Final breakfast included · pack bags', note: 'Last morning waking up in the clouds.', cost: 'Included', tag: 'free' },
          { time: '10:00am', name: 'Check out Mon Jaw Doi at Monjam', note: '—', cost: '—', tag: '' },
          { time: '10:30am', name: 'Huay Tung Tao lake — bamboo hut stop', note: 'Only 20 min away. Pick bamboo hut right on the water. Order food. Sit 2–3 hrs.', cost: '฿200–400', tag: 'paid', photoUrl: P.BRT_LAKE },
          { time: '1:30pm', name: 'Drive to Nimman Expat Home', note: '~30 min. Grab or taxi.', cost: '฿100', tag: 'transport' },
          { time: '2:00pm', name: 'Check in Nimman Expat Home', note: 'Double Bed Room · Jun 20–27 · 7 nights ✅ BOOKED', cost: '—', tag: '' },
          { time: '3:00pm', name: 'Grab to Old City to collect stored main bag', note: 'Bag stored since June 5.', cost: '฿80 round trip', tag: 'transport' },
        ],
      },
    ],
  },
  {
    id: 'nimman',
    name: 'Nimman, Chiang Mai',
    dates: 'Jun 20–27',
    nights: 7,
    checkIn: 'Jun 20 (arrive ~2pm)',
    checkOut: 'Jun 27 noon',
    hotel: 'Nimman Expat Home · Nimmanhemin · 8.7 Excellent ✅ BOOKED',
    transport: 'Grab works · Group tour vans from Nimman Soi 1',
    photoUrl: P.CM_OLDTOWN,
    gradient: 'linear-gradient(135deg,#185FA5,#85B7EB)',
    days: [
      {
        date: 'June 20 · Saturday · Arrive + settle',
        activities: [
          { time: 'Afternoon', name: 'Check in · collect bag from Old City · rest', note: 'Long travel day from Mon Jam via Huay Tung Tao. Settle in.', cost: '—', tag: 'admin' },
          { time: 'Evening', name: 'Walk Nimman Road · find tour agent Soi 1', note: 'Book Mae Kampong tour for Jun 23. Night Bazaar if energy allows.', cost: '—', tag: 'warning' },
        ],
      },
      {
        date: 'June 21 · Sunday · ⚠️ ONLY SUNDAY — Walking Street',
        star: true,
        activities: [
          { time: 'Morning', name: 'Rest · slow coffee · Nimman cafes', note: 'Recover from non-stop travel. Slow morning.', cost: 'Free', tag: 'rest' },
          { time: 'Afternoon', name: 'Old City explore · Tha Phae Gate', note: 'Grab ฿80. Wander the moat area.', cost: 'Free', tag: 'free', photoUrl: P.WAT_CHEDI_LUANG_DAY },
          { time: 'Evening', name: 'Sunday Walking Street — Wualai Road', note: 'YOUR ONLY SUNDAY IN NIMMAN. Handicrafts, silver, food. Do not miss.', cost: 'Free', tag: 'free', photoUrl: P.BAZAAR_B },
        ],
      },
      {
        date: 'June 22 · Monday · Free city day',
        activities: [
          { time: 'All day', name: 'Nimman at your pace · cafes · explore', note: 'No tours today. Walk where you want. Eat what you want.', cost: 'Low spend', tag: 'rest' },
          { time: 'Evening', name: 'Night Bazaar', note: 'Near Tha Phae Gate. Every evening. Food + crafts.', cost: 'Free', tag: 'free', photoUrl: P.BAZAAR_A },
        ],
      },
      {
        date: 'June 23 · Tuesday · Mae Kampong day trip',
        activities: [
          { time: '7:30am', name: 'Group tour to Mae Kampong', note: 'Tour van from Nimman Soi 1. Pre-booked.', cost: '฿400–600', tag: 'transport' },
          { time: '9:30am', name: 'Per-La-Mer Café', note: 'Mountain terrace. Best coffee of the Nimman stretch.', cost: '฿200–350', tag: 'food', photoUrl: P.CM_PANORAMIC },
          { time: '11:00am', name: 'Mae Kampong Village + Waterfall', note: 'Wander alleys, tea houses, waterfall. Back ~3–4pm.', cost: '฿50', tag: 'paid', photoUrl: P.ANG_KA },
          { time: 'Evening', name: 'Night Bazaar', note: 'Food + crafts. Near Tha Phae Gate.', cost: 'Free', tag: 'free', photoUrl: P.BAZAAR_A },
        ],
      },
      {
        date: 'June 24 · Wednesday · Kadmanee Market + Khao Soi',
        activities: [
          { time: 'Morning', name: 'Kadmanee Market', note: 'Lake view, very local. Last market of the trip.', cost: 'Free', tag: 'free', photoUrl: P.BAZAAR_B },
          { time: 'Noon', name: 'Final Khao Soi Gai at Lung Prakit', note: 'One last time. You will miss it in Dubai.', cost: '฿80', tag: 'food' },
          { time: 'Afternoon', name: 'Last gifts shopping · Nimman walk', note: '—', cost: '—', tag: 'free' },
        ],
      },
      {
        date: 'June 25 · Thursday · Free day',
        activities: [
          { time: 'All day', name: 'Free day · Chiang Mai at your own pace', note: 'No agenda. Sit in a café. Walk the moat. Eat whatever you want.', cost: 'Low spend', tag: 'rest' },
          { time: 'Evening', name: 'Night Bazaar · last night out', note: 'Enjoy the city one more time.', cost: 'Free', tag: 'free', photoUrl: P.BAZAAR_A },
        ],
      },
      {
        date: 'June 26 · Friday · Last full day · pack',
        activities: [
          { time: 'Morning', name: 'Last coffee · last walk · last look at the city', note: 'Take it slow. You earned it.', cost: '฿100', tag: 'free' },
          { time: 'Afternoon', name: 'Pack · sort bags · early sleep', note: '—', cost: '—', tag: 'admin' },
          { time: 'Tonight', name: 'Pre-schedule Grab to airport for tomorrow morning', note: 'Set it tonight. Peace of mind.', cost: 'Admin', tag: 'warning' },
        ],
      },
      {
        date: 'June 27 · Saturday · Fly Bangkok',
        activities: [
          { time: 'Morning', name: 'Check out Nimman Expat Home', note: '12pm checkout. Store bags if flight is later.', cost: '—', tag: 'admin' },
          { time: 'Morning', name: 'Pre-scheduled Grab to Chiang Mai airport', note: '1.5 hrs before domestic flight is enough.', cost: '฿150', tag: 'transport' },
          { time: 'Flight', name: 'Chiang Mai → Bangkok ✈️', note: 'End of 25-night Northern Thailand trip. What a journey.', cost: '—', tag: '' },
        ],
      },
    ],
  },
];
