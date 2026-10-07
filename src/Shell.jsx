import { useCallback, useEffect, useRef, useState } from 'react';
import App from './App';
import LockScreen from './components/LockScreen';

const PLANS = [
  { id: 'thailand', emoji: '🇹🇭', name: 'Thailand 2026', sub: 'Jun 2026 · Chiang Mai → Pai → Bangkok', locked: false },
  { id: 'vietnam', emoji: '🌴', name: 'Bali → Vietnam 2027', sub: 'Jun 2027 · Private', locked: true, vault: 'vietnam' },
];
const AUTO_LOCK_MS = 5 * 60 * 1000; // lock again if the app stays in the background this long

export default function Shell() {
  const [plan, setPlan] = useState('thailand');
  const [open, setOpen] = useState(false);
  const [vaultHtml, setVaultHtml] = useState(null); // decrypted plan lives in memory only
  const hiddenAt = useRef(0);
  const current = PLANS.find((p) => p.id === plan);

  const lock = useCallback(() => { setVaultHtml(null); }, []);

  useEffect(() => {
    const onVis = () => {
      if (document.hidden) hiddenAt.current = Date.now();
      else if (hiddenAt.current && Date.now() - hiddenAt.current > AUTO_LOCK_MS) lock();
    };
    document.addEventListener('visibilitychange', onVis);
    return () => document.removeEventListener('visibilitychange', onVis);
  }, [lock]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  const choose = (id) => { setPlan(id); setOpen(false); window.scrollTo(0, 0); };
  const unlocked = vaultHtml !== null;

  return (
    <div className="vacation-shell">
      <div className="shell-bar">
        <button onClick={() => setOpen(true)} aria-label="Open menu" aria-expanded={open} className="shell-burger">
          <span /><span /><span />
        </button>
        <div className="min-w-0 flex-1 truncate font-serif text-lg leading-none">{current.name}</div>
        {plan === 'vietnam' && unlocked && (
          <button onClick={lock} className="rounded-xl bg-white/10 px-3 py-1.5 text-xs font-black">🔓 Lock</button>
        )}
      </div>

      {open && <div className="shell-overlay" onClick={() => setOpen(false)} aria-hidden="true" />}
      <aside className={`shell-drawer ${open ? 'is-open' : ''}`} aria-hidden={!open} aria-label="Vacation plans">
        <div className="mb-1 font-serif text-2xl">Vacation</div>
        <p className="mb-5 text-xs text-emerald-100/80">Choose a plan to view</p>
        <nav className="flex flex-col gap-2">
          {PLANS.map((p) => (
            <button key={p.id} onClick={() => choose(p.id)} tabIndex={open ? 0 : -1}
              className={`flex items-center gap-3 rounded-2xl px-3 py-3 text-left transition ${plan === p.id ? 'bg-white text-emerald-950' : 'bg-white/10 text-white'}`}>
              <span className="text-2xl">{p.emoji}</span>
              <span className="min-w-0 flex-1">
                <span className="block text-sm font-black">{p.name}</span>
                <span className={`block truncate text-[11px] ${plan === p.id ? 'text-stone-600' : 'text-emerald-100/80'}`}>{p.sub}</span>
              </span>
              {p.locked && <span aria-label={unlocked ? 'unlocked' : 'locked'}>{unlocked ? '🔓' : '🔒'}</span>}
            </button>
          ))}
        </nav>
        {unlocked && (
          <button onClick={() => { lock(); setOpen(false); }} tabIndex={open ? 0 : -1}
            className="mt-6 w-full rounded-2xl border border-white/30 py-2.5 text-xs font-black text-white">
            Lock private plan now
          </button>
        )}
      </aside>

      {plan === 'thailand' && <App />}
      {plan === 'vietnam' && (unlocked
        ? <iframe title="Bali → Vietnam 2027" srcDoc={vaultHtml} className="shell-frame" />
        : <LockScreen vaultName={current.vault} title={current.name} onUnlock={setVaultHtml} />)}
    </div>
  );
}
