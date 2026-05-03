import { useState, useEffect } from 'react';
import UnsplashImg from './UnsplashImg';
import { tonightList, moneyTips, weatherTips, halalTips, cultureTips, healthTips, packingList } from '../data/tips';

const foods = [
  {
    name: 'Khao Soi',
    region: 'Chiang Mai',
    price: '฿80',
    priceAED: 'AED 9',
    halal: true,
    desc: 'Creamy coconut curry noodle soup — Northern Thailand\'s most famous dish. Order Khao Soi Gai (chicken). Lung Prakit is the best spot.',
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Khao_soi.jpg/1280px-Khao_soi.jpg',
  },
  {
    name: 'Mango Sticky Rice',
    region: 'Everywhere',
    price: '฿60',
    priceAED: 'AED 7',
    halal: true,
    desc: 'Sweet sticky rice with fresh mango and coconut milk. Best from Walking Street stalls at night.',
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Mango_with_sticky_rice.jpg/1280px-Mango_with_sticky_rice.jpg',
  },
  {
    name: 'Pad Thai (Chicken)',
    region: 'Everywhere',
    price: '฿60',
    priceAED: 'AED 7',
    halal: true,
    desc: 'Stir-fried rice noodles with egg, bean sprouts, peanuts. Say "sai kai" (chicken). Avoid the shrimp version.',
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Pad_thai_kung_Chang_Khien_street_food_stall.jpg/1280px-Pad_thai_kung_Chang_Khien_street_food_stall.jpg',
  },
  {
    name: 'Roti Banana',
    region: 'Pai',
    price: '฿50',
    priceAED: 'AED 6',
    halal: true,
    desc: 'Crispy pan-fried flatbread filled with banana and condensed milk. Walking Street staple in Pai.',
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Roti_Mataba.jpg/1280px-Roti_Mataba.jpg',
  },
  {
    name: 'Yunnan Noodles',
    region: 'Ban Rak Thai',
    price: '฿70',
    priceAED: 'AED 8',
    halal: true,
    desc: 'Chinese-style noodle soup from the Yunnan community in Ban Rak Thai. Ask "mai sai moo" (no pork) to be safe.',
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Crossed-Bridged_Noodles_%28%E8%BF%87%E6%A1%A5%E7%B1%B3%E7%BA%BF%29.jpg/1280px-Crossed-Bridged_Noodles_%28%E8%BF%87%E6%A1%A5%E7%B1%B3%E7%BA%BF%29.jpg',
  },
  {
    name: 'Pu-erh Tea',
    region: 'Ban Rak Thai',
    price: '฿100',
    priceAED: 'AED 11',
    halal: true,
    desc: 'Traditional aged Chinese tea from the local tea houses. Sit, sip slowly, no agenda. The Ban Rak Thai experience.',
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Pu-erh_tea.jpg/1280px-Pu-erh_tea.jpg',
  },
  {
    name: 'Mountain Village Coffee',
    region: 'Doi Inthanon',
    price: '฿80',
    priceAED: 'AED 9',
    halal: true,
    desc: 'Arabica coffee grown on the Doi Inthanon slopes. Best at Mae Klang Luang village after your waterfall day.',
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/A_small_cup_of_coffee.JPG/1280px-A_small_cup_of_coffee.JPG',
  },
  {
    name: 'Street Fruit',
    region: 'Everywhere',
    price: '฿30',
    priceAED: 'AED 4',
    halal: true,
    desc: 'Fresh cut papaya, mango, watermelon from street carts. Best snack in 35°C heat. Buy from 7-Eleven too.',
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Papaya_on_market.jpg/1280px-Papaya_on_market.jpg',
  },
];

function TipSection({ title, emoji, items, color = 'gray' }) {
  const colorMap = {
    gray: 'border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-800/50 text-gray-700 dark:text-gray-300',
    green: 'border-forest-mid/30 dark:border-forest-mid/20 bg-forest-light dark:bg-forest-dark/30 text-forest-dark dark:text-forest-mid',
    amber: 'border-amber-mid/30 dark:border-amber-dark/30 bg-amber-light dark:bg-amber-dark/20 text-amber-dark dark:text-amber-mid',
    blue: 'border-blue-100 dark:border-blue-900/30 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300',
    red: 'border-red-100 dark:border-red-900/30 bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-300',
    purple: 'border-purple-100 dark:border-purple-900/30 bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300',
  };
  return (
    <div className={`mx-4 mb-3 rounded-xl overflow-hidden border ${colorMap[color].split(' ')[0]}`}>
      <div className={`px-4 py-2.5 ${colorMap[color]}`}>
        <h3 className="font-semibold text-sm">{emoji} {title}</h3>
      </div>
      <div className="px-4 py-3 bg-white dark:bg-gray-900 space-y-2">
        {items.map((item, i) => (
          <div key={i} className="flex gap-2">
            <span className="text-gray-300 dark:text-gray-600 flex-shrink-0 mt-0.5">•</span>
            <p className="text-sm text-gray-600 dark:text-gray-400">{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function TipsTab() {
  const [checked, setChecked] = useState(() => {
    try { return JSON.parse(localStorage.getItem('packing') || '{}'); } catch { return {}; }
  });

  useEffect(() => {
    localStorage.setItem('packing', JSON.stringify(checked));
  }, [checked]);

  function toggle(id) {
    setChecked(prev => ({ ...prev, [id]: !prev[id] }));
  }

  const doneCount = packingList.filter(p => checked[p.id]).length;

  return (
    <div className="pb-4">
      <div className="px-4 pt-4 pb-3">
        <h2 className="font-serif text-2xl text-gray-800 dark:text-gray-100">Tips</h2>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">Food · Halal · Culture · Health · Packing</p>
      </div>

      {/* Food Guide with Photos */}
      <div className="px-4 mb-4">
        <h3 className="font-serif text-lg text-gray-800 dark:text-gray-100 mb-1">🍜 Must-Eat Food Guide</h3>
        <p className="text-xs text-gray-500 dark:text-gray-400 mb-3">Halal-friendly · All confirmed safe</p>
        <div className="grid grid-cols-2 gap-3">
          {foods.map((food, i) => (
            <div key={i} className="rounded-xl overflow-hidden border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900">
              <div className="relative h-28 overflow-hidden" style={{ background: 'linear-gradient(135deg,#BA7517,#F5C842)' }}>
                <UnsplashImg
                  photoUrl={food.photo}
                  gradient="linear-gradient(135deg,#BA7517,#F5C842)"
                  alt={food.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-black/60 to-transparent"/>
                <div className="absolute bottom-2 left-2 right-2 flex items-end justify-between">
                  <span className="text-[10px] bg-black/40 text-white px-1.5 py-0.5 rounded-full">{food.region}</span>
                  <span className="text-xs font-bold text-white">{food.priceAED}</span>
                </div>
                {food.halal && (
                  <div className="absolute top-2 right-2 text-[9px] bg-green-500 text-white px-1.5 py-0.5 rounded-full font-bold">HALAL ✓</div>
                )}
              </div>
              <div className="p-2.5">
                <h4 className="font-semibold text-xs text-gray-800 dark:text-gray-100">{food.name}</h4>
                <p className="text-[10px] text-gray-500 dark:text-gray-400 mt-0.5 leading-snug">{food.desc}</p>
                <div className="mt-1 text-[10px] text-amber-dark dark:text-amber-mid font-semibold">{food.price}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tonight */}
      <div className="mx-4 mb-3 rounded-xl overflow-hidden border border-red-200 dark:border-red-800/50">
        <div className="px-4 py-2.5 bg-red-50 dark:bg-red-900/20">
          <h3 className="font-semibold text-sm text-red-700 dark:text-red-300">🔴 Do Before You Fly</h3>
        </div>
        <div className="px-4 py-3 bg-white dark:bg-gray-900 space-y-2">
          {tonightList.map((item, i) => (
            <div key={i} className="flex gap-2">
              <span className="text-red-400 flex-shrink-0 text-sm mt-0.5">!</span>
              <p className="text-sm text-gray-700 dark:text-gray-300 font-medium">{item}</p>
            </div>
          ))}
        </div>
      </div>

      <TipSection title="Money Tips" emoji="💵" items={moneyTips} color="amber" />
      <TipSection title="Weather in June" emoji="🌧️" items={weatherTips} color="blue" />
      <TipSection title="Halal Eating" emoji="🕌" items={halalTips} color="green" />
      <TipSection title="Temples + Culture" emoji="🛕" items={cultureTips} color="purple" />
      <TipSection title="Health + Safety" emoji="💊" items={healthTips} color="red" />

      {/* Packing list */}
      <div className="mx-4 mt-1">
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-serif text-lg text-gray-800 dark:text-gray-100">🎒 Packing List</h3>
          <span className="text-xs font-semibold text-forest-dark dark:text-forest-mid bg-forest-light dark:bg-forest-dark/30 px-2 py-0.5 rounded-full">
            {doneCount}/{packingList.length}
          </span>
        </div>
        <div className="rounded-xl overflow-hidden border border-gray-100 dark:border-gray-800">
          {packingList.map((item, i) => (
            <button
              key={item.id}
              onClick={() => toggle(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 text-left bg-white dark:bg-gray-900 transition-colors
                ${i < packingList.length - 1 ? 'border-b border-gray-50 dark:border-gray-800' : ''}
                ${checked[item.id] ? 'opacity-60' : ''}`}
            >
              <div className={`w-5 h-5 rounded border-2 flex-shrink-0 flex items-center justify-center transition-colors
                ${checked[item.id]
                  ? 'bg-forest-dark border-forest-dark dark:bg-forest-mid dark:border-forest-mid'
                  : 'border-gray-300 dark:border-gray-600'
                }`}
              >
                {checked[item.id] && (
                  <svg viewBox="0 0 12 12" fill="none" stroke="white" strokeWidth="2" className="w-3 h-3">
                    <path d="M2 6l3 3 5-5"/>
                  </svg>
                )}
              </div>
              <span className={`text-sm ${checked[item.id] ? 'line-through text-gray-400 dark:text-gray-600' : 'text-gray-700 dark:text-gray-300'}`}>
                {item.label}
              </span>
            </button>
          ))}
        </div>
        {doneCount === packingList.length && (
          <div className="mt-2 text-center text-sm text-forest-dark dark:text-forest-mid font-semibold">
            ✅ All packed — you're ready for Thailand!
          </div>
        )}
      </div>
    </div>
  );
}
