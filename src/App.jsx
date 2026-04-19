import { useState, useEffect } from 'react';
import Nav from './components/Nav';
import RegionCard from './components/RegionCard';
import FoodCard from './components/FoodCard';
import HalalGuide from './components/HalalGuide';
import GrabGuide from './components/GrabGuide';
import TipsTab from './components/TipsTab';
import { regions } from './data/regions';
import { foods } from './data/food';

const foodRegions = ['All', 'Chiang Mai', 'Pai', 'Ban Rak Thai', 'Doi Inthanon', 'Always Safe'];

export default function App() {
  const [activeTab, setActiveTab] = useState('plan');
  const [darkMode, setDarkMode] = useState(() => {
    const stored = localStorage.getItem('darkMode');
    return stored ? JSON.parse(stored) : false;
  });
  const [foodFilter, setFoodFilter] = useState('All');

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  const filteredFoods = foodFilter === 'All'
    ? foods
    : foods.filter(f => f.region === foodFilter);

  return (
    <div className="min-h-screen bg-neutral-cream dark:bg-gray-950 transition-colors duration-200">
      <Nav
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      {/* Hero banner — only on plan tab */}
      {activeTab === 'plan' && (
        <div
          className="relative h-40 sm:h-56 flex items-end"
          style={{ background: 'linear-gradient(135deg, #3B6D11 0%, #639922 50%, #BA7517 100%)' }}
        >
          <div className="absolute inset-0 bg-black/30" />
          <div className="relative z-10 max-w-5xl mx-auto w-full px-4 pb-6">
            <p className="text-white/70 text-sm font-medium tracking-wide uppercase">25 Days · Northern Thailand</p>
            <h1 className="font-serif text-4xl sm:text-5xl text-white font-bold mt-1 drop-shadow-lg">
              Thailand 2026
            </h1>
            <p className="text-white/80 text-sm mt-1">June 2 – 27 · Chiang Mai → Pai → Ban Rak Thai → Doi Inthanon → Nimman</p>
          </div>
        </div>
      )}

      <main className="max-w-5xl mx-auto">
        {/* Full Plan Tab */}
        {activeTab === 'plan' && (
          <div className="px-4 py-6 space-y-0">
            {/* Special callouts */}
            <div className="grid sm:grid-cols-2 gap-3 mb-6">
              <div className="bg-amber-light dark:bg-amber-900/20 border border-amber-mid rounded-xl px-4 py-3">
                <p className="text-xs font-semibold text-amber-dark dark:text-amber-mid uppercase tracking-wide">Saturday June 20 only</p>
                <p className="text-sm text-amber-dark dark:text-amber-mid mt-0.5">Your ONLY Saturday in Chiang Mai. Jing Jai Market is Saturday-only. Do not miss it.</p>
              </div>
              <div className="bg-amber-light dark:bg-amber-900/20 border border-amber-mid rounded-xl px-4 py-3">
                <p className="text-xs font-semibold text-amber-dark dark:text-amber-mid uppercase tracking-wide">Sunday June 21 only</p>
                <p className="text-sm text-amber-dark dark:text-amber-mid mt-0.5">Your ONLY Sunday in Nimman. Sunday Walking Street tonight on Wualai Road.</p>
              </div>
              <div className="bg-red-50 dark:bg-red-900/10 border border-red-200 dark:border-red-800 rounded-xl px-4 py-3">
                <p className="text-xs font-semibold text-red-600 dark:text-red-400 uppercase tracking-wide">🚨 Book RIGHT NOW</p>
                <p className="text-sm text-red-700 dark:text-red-300 mt-0.5">Lungwang Guest House, Ban Rak Thai — fills faster than anywhere else on this trip.</p>
              </div>
              <div className="bg-red-50 dark:bg-red-900/10 border border-red-200 dark:border-red-800 rounded-xl px-4 py-3">
                <p className="text-xs font-semibold text-red-600 dark:text-red-400 uppercase tracking-wide">⚠️ Hotel warning</p>
                <p className="text-sm text-red-700 dark:text-red-300 mt-0.5">Do NOT book Suan Sook resort (฿800–1,200). Stay Chom Thong town + hire driver daily.</p>
              </div>
            </div>

            {regions.map(region => (
              <RegionCard key={region.id} region={region} />
            ))}
          </div>
        )}

        {/* Food Guide Tab */}
        {activeTab === 'food' && (
          <div className="px-4 py-6">
            <h2 className="font-serif text-3xl font-bold text-neutral-ink dark:text-gray-100 mb-1">Food Guide</h2>
            <p className="text-neutral-muted dark:text-gray-400 text-sm mb-4">Every dish worth eating on this trip — with halal notes.</p>
            <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-2 mb-5">
              {foodRegions.map(r => (
                <button
                  key={r}
                  onClick={() => setFoodFilter(r)}
                  className={`px-3 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                    foodFilter === r
                      ? 'bg-forest-dark text-white'
                      : 'bg-white dark:bg-gray-800 text-neutral-muted dark:text-gray-400 border border-gray-200 dark:border-gray-700 hover:border-forest-mid'
                  }`}
                >
                  {r}
                </button>
              ))}
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {filteredFoods.map(food => (
                <FoodCard key={food.id} food={food} />
              ))}
            </div>
          </div>
        )}

        {/* Halal Guide Tab */}
        {activeTab === 'halal' && <HalalGuide />}

        {/* Grab + 7-Eleven Tab */}
        {activeTab === 'grab' && <GrabGuide />}

        {/* Tips Tab */}
        {activeTab === 'tips' && <TipsTab />}
      </main>

      <footer className="text-center py-6 text-xs text-neutral-muted dark:text-gray-600 mt-8">
        Thailand 2026 · June 2–27 · Have an incredible trip 🌿
      </footer>
    </div>
  );
}
