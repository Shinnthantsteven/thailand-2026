import { useState, useEffect } from 'react';
import Nav from './components/Nav';
import RouteMapTab from './components/RouteMapTab';
import FullPlanTab from './components/FullPlanTab';
import FoodGuideTab from './components/FoodGuideTab';
import GrabTab from './components/GrabTab';
import TipsTab from './components/TipsTab';

export default function App() {
  const [tab, setTab] = useState(0);
  const [dark, setDark] = useState(() => localStorage.getItem('dark') === 'true');
  const [jumpRegion, setJumpRegion] = useState(null);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark);
    localStorage.setItem('dark', String(dark));
  }, [dark]);

  function handleRegionClick(regionId) {
    setJumpRegion(regionId);
    setTab(1);
  }

  return (
    <div className="min-h-screen bg-neutral-cream dark:bg-gray-950">
      {/* Sticky header */}
      <header className="sticky top-0 z-40 bg-forest-dark text-white px-4 py-2.5 flex items-center justify-between shadow-md">
        <div>
          <h1 className="font-serif text-lg leading-tight">Thailand 2026</h1>
          <p className="text-[11px] text-forest-light opacity-90">Jun 2–26 · 24 nights · Northern Thailand</p>
        </div>
        <button
          onClick={() => setDark(d => !d)}
          className="w-9 h-9 rounded-full flex items-center justify-center hover:bg-forest-mid/40 transition text-lg"
          aria-label="Toggle dark mode"
        >
          {dark ? '☀️' : '🌙'}
        </button>
      </header>

      {/* Tab content */}
      <main className="pb-20">
        {tab === 0 && <RouteMapTab onRegionClick={handleRegionClick} />}
        {tab === 1 && (
          <FullPlanTab
            jumpRegion={jumpRegion}
            onJumpDone={() => setJumpRegion(null)}
          />
        )}
        {tab === 2 && <FoodGuideTab />}
        {tab === 3 && <GrabTab />}
        {tab === 4 && <TipsTab />}
      </main>

      <Nav active={tab} onChange={setTab} />
    </div>
  );
}
