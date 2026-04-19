import { useState } from 'react';
import { dishes, phrases, alwaysSafe } from '../data/food';
import UnsplashImg from './UnsplashImg';

const regionGradients = {
  'Chiang Mai': 'linear-gradient(135deg,#3B6D11,#97C459)',
  'Pai': 'linear-gradient(135deg,#0F6E56,#5DCAA5)',
  'Ban Rak Thai': 'linear-gradient(135deg,#085041,#1D9E75)',
  'Everywhere': 'linear-gradient(135deg,#185FA5,#85B7EB)',
};

const filters = ['All', 'Chiang Mai', 'Pai', 'Ban Rak Thai', 'Everywhere'];

function FoodCard({ dish }) {
  const gradient = regionGradients[dish.region] || 'linear-gradient(135deg,#3B6D11,#97C459)';
  return (
    <div className="rounded-xl overflow-hidden shadow-sm border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900">
      <div className="relative h-32 overflow-hidden" style={{ background: gradient }}>
        <UnsplashImg
          keyword={dish.keyword}
          gradient={gradient}
          alt={dish.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-black/60 to-transparent"/>
        <div className="absolute bottom-2 left-2 right-2 flex items-end justify-between">
          <span className="text-xs bg-black/40 text-white px-1.5 py-0.5 rounded-full">{dish.region}</span>
          <span className="text-sm font-bold text-white">{dish.price}</span>
        </div>
      </div>
      <div className="p-3">
        <h4 className="font-semibold text-sm text-gray-800 dark:text-gray-100">{dish.name}</h4>
        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 leading-snug">{dish.desc}</p>
        <div className="mt-2 flex items-center gap-1">
          <span className="text-[10px] text-gray-400 dark:text-gray-500">📍</span>
          <span className="text-[11px] text-gray-400 dark:text-gray-500">{dish.where}</span>
        </div>
        {dish.note && (
          <div className="mt-1.5 text-[11px] text-amber-dark dark:text-amber-mid font-medium">{dish.note}</div>
        )}
      </div>
    </div>
  );
}

export default function FoodGuideTab() {
  const [filter, setFilter] = useState('All');

  const filtered = filter === 'All' ? dishes : dishes.filter(d => d.region === filter);

  return (
    <div className="pb-4">
      {/* Header */}
      <div className="px-4 pt-4 pb-3">
        <h2 className="font-serif text-2xl text-gray-800 dark:text-gray-100">Food Guide</h2>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">Halal-friendly · Northern Thailand</p>
      </div>

      {/* Filter pills */}
      <div className="px-4 mb-4 flex gap-2 overflow-x-auto scrollbar-hide pb-1">
        {filters.map(f => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`flex-shrink-0 px-3 py-1.5 rounded-full text-xs font-semibold transition-colors
              ${filter === f
                ? 'bg-forest-dark text-white dark:bg-forest-mid dark:text-white'
                : 'bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-300'
              }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Food grid */}
      <div className="px-4 grid grid-cols-2 gap-3 mb-6">
        {filtered.map((d, i) => (
          <FoodCard key={i} dish={d} />
        ))}
      </div>

      {/* Always safe section */}
      <div className="mx-4 mb-5 rounded-xl overflow-hidden border border-forest-mid/30 dark:border-forest-mid/20">
        <div className="px-4 py-3 bg-forest-light dark:bg-forest-dark/30">
          <h3 className="font-semibold text-sm text-forest-dark dark:text-forest-mid">✅ Always Safe Without Asking</h3>
        </div>
        <div className="px-4 py-3 bg-white dark:bg-gray-900">
          <div className="flex flex-wrap gap-2">
            {alwaysSafe.map((item, i) => (
              <span key={i} className="text-xs bg-forest-light dark:bg-forest-dark/20 text-forest-dark dark:text-forest-mid px-2 py-1 rounded-lg">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Phrases card */}
      <div className="mx-4 rounded-xl overflow-hidden border border-amber-mid/30 dark:border-amber-dark/30">
        <div className="px-4 py-3 bg-amber-light dark:bg-amber-dark/20 flex items-center gap-2">
          <span className="text-lg">🗣️</span>
          <h3 className="font-semibold text-sm text-amber-dark dark:text-amber-mid">Key Thai Phrases</h3>
        </div>
        <div className="bg-white dark:bg-gray-900 divide-y divide-gray-50 dark:divide-gray-800">
          {phrases.map((p, i) => (
            <div key={i} className="px-4 py-3 flex items-start gap-3">
              <div className="flex-shrink-0 w-20">
                <div className="text-base leading-tight text-gray-800 dark:text-gray-100">{p.thai}</div>
                <div className="text-[11px] text-forest-dark dark:text-forest-mid font-semibold mt-0.5">{p.pronunciation}</div>
              </div>
              <div className="flex-1 text-xs text-gray-500 dark:text-gray-400 pt-0.5">{p.meaning}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
