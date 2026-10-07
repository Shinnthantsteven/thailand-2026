// Decrypts the locked plan in the browser. The password never leaves the device
// and is not stored anywhere; the key is derived with PBKDF2 and used for AES-256-GCM.
const b64 = (s) => Uint8Array.from(atob(s), (c) => c.charCodeAt(0));

export const vaultSupported = () => !!(globalThis.crypto && crypto.subtle && typeof DecompressionStream !== 'undefined');

export async function loadVault(name) {
  const res = await fetch(`${import.meta.env.BASE_URL}vault/${name}.enc.json`, { cache: 'no-cache' });
  if (!res.ok) throw new Error('Could not load the locked plan. Check your connection.');
  return res.json();
}

export async function decryptVault(password, pkg) {
  const base = await crypto.subtle.importKey('raw', new TextEncoder().encode(password), 'PBKDF2', false, ['deriveKey']);
  const key = await crypto.subtle.deriveKey(
    { name: 'PBKDF2', salt: b64(pkg.salt), iterations: pkg.iter, hash: 'SHA-256' },
    base, { name: 'AES-GCM', length: 256 }, false, ['decrypt']
  );
  let plain;
  try {
    plain = await crypto.subtle.decrypt({ name: 'AES-GCM', iv: b64(pkg.iv) }, key, b64(pkg.data));
  } catch {
    const e = new Error('Wrong password'); e.code = 'BAD_PASSWORD'; throw e;
  }
  const stream = new Blob([plain]).stream().pipeThrough(new DecompressionStream('gzip'));
  return new Response(stream).text();
}
