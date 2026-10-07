// Encrypts private/vietnam-plan.html -> public/vault/vietnam.enc.json
// Usage:  npm run lock          (asks for a password, input hidden)
//         VAULT_PASSWORD=... npm run lock   (non-interactive)
// The password is NEVER written to disk. Only salt + iv + ciphertext are saved.
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { randomBytes, pbkdf2Sync, createCipheriv } from 'node:crypto';
import { gzipSync } from 'node:zlib';
import readline from 'node:readline';

const SRC = 'private/vietnam-plan.html';
const OUT = 'public/vault/vietnam.enc.json';
const ITER = 600000; // PBKDF2-SHA256, OWASP 2023 recommendation

function ask(q) {
  return new Promise((resolve) => {
    const rl = readline.createInterface({ input: process.stdin, output: process.stdout, terminal: true });
    rl._writeToOutput = (s) => { if (s.includes(q)) rl.output.write(s); else rl.output.write(s.replace(/[^\r\n]/g, '*')); };
    rl.question(q, (a) => { rl.close(); process.stdout.write('\n'); resolve(a); });
  });
}

let password = process.env.VAULT_PASSWORD;
if (!password) {
  password = await ask('New password: ');
  const again = await ask('Repeat password: ');
  if (password !== again) { console.error('Passwords do not match.'); process.exit(1); }
}
if (password.length < 10) { console.error('Use at least 10 characters (a 4-word passphrase is best).'); process.exit(1); }

let html;
try { html = readFileSync(SRC); } catch { console.error(`Missing ${SRC}. Put your Bali–Vietnam index.html there first.`); process.exit(1); }

const salt = randomBytes(16);
const iv = randomBytes(12);
const key = pbkdf2Sync(password, salt, ITER, 32, 'sha256');
const cipher = createCipheriv('aes-256-gcm', key, iv);
const data = Buffer.concat([cipher.update(gzipSync(html, { level: 9 })), cipher.final(), cipher.getAuthTag()]);

mkdirSync('public/vault', { recursive: true });
writeFileSync(OUT, JSON.stringify({ v: 1, kdf: 'PBKDF2-SHA256', iter: ITER, cipher: 'AES-256-GCM', salt: salt.toString('base64'), iv: iv.toString('base64'), data: data.toString('base64') }));
console.log(`Locked ${SRC} -> ${OUT} (${(data.length / 1024).toFixed(0)} KB). Now run: npm run build`);
