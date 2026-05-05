import UnsplashImg from './UnsplashImg';

const hotels = [
  {
    id: 1,
    name: 'Nature Boutique Hotel',
    location: 'Chiang Mai Old City',
    dates: 'Jun 2–5',
    nights: 3,
    costAED: 133,
    costTHB: '฿1,229',
    status: 'booked',
    room: 'Single Room',
    bathroom: 'Shared bathroom',
    includes: ['Free WiFi', 'Drinking water'],
    cancelPolicy: 'Free cancel before May 30, 2026',
    gradient: 'linear-gradient(135deg,#3B6D11,#97C459)',
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Wat_Chedi_Luang%2C_Buddhist_temple%2C_Chiang_Mai%2C_Thailand.jpg/1280px-Wat_Chedi_Luang%2C_Buddhist_temple%2C_Chiang_Mai%2C_Thailand.jpg',
    note: 'Central Old City location. Good base for temples and halal food quarter.',
  },
  {
    id: 2,
    name: 'Sleep Pai Bed & Breakfast',
    location: 'Pai Riverside',
    dates: 'Jun 5–9',
    nights: 4,
    costAED: 216,
    costTHB: '฿1,996',
    status: 'booked',
    room: 'Bungalow',
    bathroom: 'Private bathroom',
    includes: ['Free WiFi', 'Parking'],
    cancelPolicy: 'Free cancel before Jun 5, 2026',
    gradient: 'linear-gradient(135deg,#0F6E56,#5DCAA5)',
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Paddy_fields_in_Pai.jpg/1280px-Paddy_fields_in_Pai.jpg',
    note: 'Riverside location in Pai. Walking distance to Walking Street.',
  },
  {
    id: 3,
    name: 'Malee Guesthouse',
    location: 'Ban Rak Thai · Mae Hong Son',
    dates: 'Jun 9–13',
    nights: 4,
    costAED: 323,
    costTHB: '฿2,994',
    status: 'booked',
    room: 'Double or Twin Room',
    bathroom: 'Private bathroom',
    includes: ['Free WiFi', 'Parking', 'Coffee & tea'],
    cancelPolicy: '⚠️ 92% charge on ANY cancellation!',
    gradient: 'linear-gradient(135deg,#085041,#1D9E75)',
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Ban_Rak_Thai_Mae_Hong_Sorn_Thailand_%28125159281%29.jpeg/1280px-Ban_Rak_Thai_Mae_Hong_Sorn_Thailand_%28125159281%29.jpeg',
    note: 'Right in the Yunnan Chinese tea village. Lake views. Book is final — no cancel.',
  },
  {
    id: 4,
    name: 'Nok Chan Mee Na',
    location: 'Ban Luang, Chom Thong · Doi Inthanon',
    dates: 'Jun 13–18',
    nights: 5,
    costAED: 313,
    costTHB: '฿2,900',
    status: 'booked',
    room: 'Bungalow',
    bathroom: 'Private bathroom',
    includes: ['Free WiFi', 'Parking', 'Drinking water', 'Coffee & tea'],
    cancelPolicy: 'Free cancel before Jun 13, 2026',
    gradient: 'linear-gradient(135deg,#27500A,#639922)',
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/e/e6/Mae_Ya_Waterfall_in_Doi_Inthanon_National_Park%2C_Chiang_Mai%2C_Thailand.jpg',
    note: 'Right on park road 1009. Close to Mae Ya Waterfall and Doi Inthanon summit.',
  },
  {
    id: 5,
    name: 'Mon Jaw Doi at Monjam',
    location: 'Mae Rim · Mon Jam Hilltop',
    dates: 'Jun 18–20',
    nights: 2,
    costAED: 172,
    costTHB: '฿1,800',
    status: 'booked',
    room: 'Double Room with Private Bathroom',
    bathroom: 'Private bathroom',
    includes: ['Breakfast included', 'Free WiFi', 'Parking', 'Coffee & tea', 'Drinking water'],
    cancelPolicy: '⚠️ Free cancel before May 19, 2026 · Payment due May 17',
    gradient: 'linear-gradient(135deg,#2D6A4F,#74C69D)',
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Doi_Inthanon%2C_View_of_the_mountains%2C_Thailand.jpg/1280px-Doi_Inthanon%2C_View_of_the_mountains%2C_Thailand.jpg',
    note: 'Hilltop hotel with cloud views. Breakfast included. 8.3 Excellent rating.',
  },
  {
    id: 6,
    name: 'Nimman Expat Home',
    location: 'Nimmanhemin · Chiang Mai',
    dates: 'Jun 20–27',
    nights: 7,
    costAED: 365,
    costTHB: '฿3,380',
    status: 'booked',
    room: 'Double Bed Room',
    bathroom: 'Private bathroom',
    includes: ['Free WiFi', 'Parking'],
    cancelPolicy: 'Free cancel before Jun 20, 2026 · Payment due Jun 18',
    gradient: 'linear-gradient(135deg,#185FA5,#85B7EB)',
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Chiang_mai_oldtown1.jpg/1280px-Chiang_mai_oldtown1.jpg',
    note: 'Central Nimman location. Walking to cafes, markets, tour agents on Soi 1. 8.7 Excellent.',
  },
];

const totalAED = hotels.reduce((sum, h) => sum + h.costAED, 0);

export default function HotelsTab() {
  return (
    <div className="pb-4">
      <div className="px-4 pt-4 pb-3">
        <h2 className="font-serif text-2xl text-gray-800 dark:text-gray-100">Hotels</h2>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">6 hotels · 25 nights · All booked ✅</p>
      </div>

      {/* Total cost banner */}
      <div className="mx-4 mb-4 p-3 rounded-xl bg-forest-light dark:bg-forest-dark/30 border border-forest-mid/30">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-xs text-forest-dark/70 dark:text-forest-mid/70 uppercase tracking-wide">Total Hotel Cost</div>
            <div className="text-2xl font-bold text-forest-dark dark:text-forest-mid">AED {totalAED}</div>
          </div>
          <div className="text-right">
            <div className="text-xs text-forest-dark/70 dark:text-forest-mid/70">25 nights</div>
            <div className="text-sm font-semibold text-forest-dark dark:text-forest-mid">AED {(totalAED/25).toFixed(0)}/night avg</div>
          </div>
        </div>
      </div>

      {/* Hotel cards */}
      <div className="px-4 space-y-4">
        {hotels.map((hotel) => (
          <div key={hotel.id} className="rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-800 shadow-sm">
            {/* Photo */}
            <div className="relative h-36 overflow-hidden" style={{ background: hotel.gradient }}>
              <UnsplashImg photoUrl={hotel.photoUrl} gradient={hotel.gradient} alt={hotel.name} className="w-full h-full object-cover"/>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"/>
              <div className="absolute bottom-0 left-0 right-0 p-3 flex items-end justify-between">
                <div>
                  <h3 className="font-serif text-base text-white leading-tight">{hotel.name}</h3>
                  <p className="text-xs text-white/80">{hotel.location}</p>
                </div>
                <div className="text-right">
                  <div className="text-lg font-bold text-white">AED {hotel.costAED}</div>
                  <div className="text-xs text-white/70">{hotel.costTHB}</div>
                </div>
              </div>
            </div>

            {/* Details */}
            <div className="bg-white dark:bg-gray-900 p-3">
              {/* Dates + nights */}
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-gray-700 dark:text-gray-200">{hotel.dates}</span>
                  <span className="text-xs bg-forest-light dark:bg-forest-dark/30 text-forest-dark dark:text-forest-mid px-2 py-0.5 rounded-full font-semibold">{hotel.nights} nights</span>
                </div>
                <span className="text-xs bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 px-2 py-0.5 rounded-full font-semibold">✅ BOOKED</span>
              </div>

              {/* Room type */}
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs text-gray-500 dark:text-gray-400">🛏️ {hotel.room}</span>
                <span className="text-gray-300">·</span>
                <span className="text-xs text-gray-500 dark:text-gray-400">🚿 {hotel.bathroom}</span>
              </div>

              {/* Includes */}
              <div className="flex flex-wrap gap-1 mb-2">
                {hotel.includes.map((inc, i) => (
                  <span key={i} className="text-[10px] bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 px-2 py-0.5 rounded-full">
                    {inc}
                  </span>
                ))}
              </div>

              {/* Note */}
              <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">{hotel.note}</p>

              {/* Cancel policy */}
              <div className={`text-xs px-2 py-1.5 rounded-lg font-medium ${
                hotel.cancelPolicy.includes('⚠️')
                  ? 'bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-300'
                  : 'bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300'
              }`}>
                📋 {hotel.cancelPolicy}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Cost per night breakdown */}
      <div className="mx-4 mt-4">
        <h3 className="font-serif text-lg text-gray-800 dark:text-gray-100 mb-2">Cost Per Night</h3>
        <div className="rounded-xl overflow-hidden border border-gray-100 dark:border-gray-800">
          {hotels.map((h, i) => (
            <div key={h.id} className={`flex items-center px-4 py-2.5 bg-white dark:bg-gray-900 ${i < hotels.length - 1 ? 'border-b border-gray-50 dark:border-gray-800' : ''}`}>
              <div className="flex-1">
                <div className="text-sm font-medium text-gray-700 dark:text-gray-200">{h.name}</div>
                <div className="text-xs text-gray-400 dark:text-gray-500">{h.dates} · {h.nights} nights</div>
              </div>
              <div className="text-right">
                <div className="text-sm font-bold text-forest-dark dark:text-forest-mid">AED {h.costAED}</div>
                <div className="text-xs text-gray-400">AED {(h.costAED/h.nights).toFixed(0)}/night</div>
              </div>
            </div>
          ))}
          <div className="flex items-center px-4 py-3 bg-forest-light dark:bg-forest-dark/30 border-t border-forest-mid/20">
            <div className="flex-1 text-sm font-bold text-forest-dark dark:text-forest-mid">Total · 25 nights</div>
            <div className="text-base font-bold text-forest-dark dark:text-forest-mid">AED {totalAED}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
