import { useEffect, useRef, useState } from 'react';
import { decryptVault, loadVault, vaultSupported } from '../vault';

export default function LockScreen({ vaultName, title, onUnlock }) {
  const [pw, setPw] = useState('');
  const [show, setShow] = useState(false);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');
  const [fails, setFails] = useState(0);
  const [waitUntil, setWaitUntil] = useState(0);
  const [, tick] = useState(0);
  const pkgRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => { inputRef.current?.focus(); }, []);
  useEffect(() => {
    if (waitUntil <= Date.now()) return;
    const t = setInterval(() => { tick((n) => n + 1); if (Date.now() >= waitUntil) clearInterval(t); }, 500);
    return () => clearInterval(t);
  }, [waitUntil]);

  const wait = Math.max(0, Math.ceil((waitUntil - Date.now()) / 1000));

  async function submit(e) {
    e.preventDefault();
    if (busy || wait > 0 || !pw) return;
    setBusy(true); setError('');
    try {
      pkgRef.current = pkgRef.current || await loadVault(vaultName);
      const html = await decryptVault(pw, pkgRef.current);
      setPw('');
      onUnlock(html);
    } catch (err) {
      if (err.code === 'BAD_PASSWORD') {
        const n = fails + 1; setFails(n);
        // slow down repeated guesses: 0s, 0s, 5s, 10s, 20s ... (max 60s)
        if (n >= 3) setWaitUntil(Date.now() + Math.min(60, 5 * 2 ** (n - 3)) * 1000);
        setError('Wrong password.');
      } else {
        setError(err.message || 'Something went wrong.');
      }
      setBusy(false);
    }
  }

  return (
    <div className="flex min-h-[calc(100svh-var(--shell-h))] items-center justify-center px-4 py-10">
      <form onSubmit={submit} className="w-full max-w-sm rounded-3xl border border-stone-200 bg-white p-6 shadow-xl">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-950 text-2xl text-white">🔒</div>
        <h2 className="text-center font-serif text-2xl text-stone-950">{title}</h2>
        <p className="mt-1 text-center text-sm text-stone-600">This plan is private. Enter the password to open it.</p>

        {!vaultSupported() && (
          <p className="mt-4 rounded-xl bg-amber-50 p-3 text-xs text-amber-900">
            Your browser can't unlock this plan here. Open the app over https (or in an up-to-date Safari/Chrome).
          </p>
        )}

        <div className="relative mt-5">
          <input
            ref={inputRef}
            type={show ? 'text' : 'password'}
            value={pw}
            onChange={(e) => setPw(e.target.value)}
            placeholder="Password"
            autoComplete="off" autoCapitalize="none" autoCorrect="off" spellCheck={false}
            className="w-full rounded-2xl border border-stone-300 bg-stone-50 px-4 py-3 pr-16 text-base outline-none focus:border-emerald-700 focus:ring-2 focus:ring-emerald-200"
          />
          <button type="button" onClick={() => setShow((s) => !s)}
            className="absolute right-2 top-1/2 -translate-y-1/2 rounded-lg px-3 py-1 text-xs font-bold text-emerald-900">
            {show ? 'Hide' : 'Show'}
          </button>
        </div>

        {error && <p role="alert" className="mt-3 text-center text-sm font-semibold text-red-700">{error}{wait > 0 ? ` Try again in ${wait}s.` : ''}</p>}

        <button type="submit" disabled={busy || wait > 0 || !pw || !vaultSupported()}
          className="mt-4 w-full rounded-2xl bg-emerald-950 py-3 text-sm font-black text-white transition disabled:opacity-50">
          {busy ? 'Unlocking…' : 'Unlock'}
        </button>
        <p className="mt-4 text-center text-[11px] text-stone-500">Encrypted on this app · AES-256 · the password is never stored</p>
      </form>
    </div>
  );
}
