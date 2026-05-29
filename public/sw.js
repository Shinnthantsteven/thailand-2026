/* Thailand 2026 offline cache service worker */
const CACHE_NAME = 'thailand-2026-offline-v7-transport-fixed';
const PRECACHE_URLS = [
  "./",
  "./index.html",
  "./manifest.json",
  "./apple-touch-icon.png",
  "./assets/index-CF_h_CKU.css",
  "./assets/index-BLDkRW3W.js",
  "./favicon-16x16.png",
  "./favicon-32x32.png",
  "./favicon.ico",
  "./favicon.png",
  "./favicon.svg",
  "./photos/ang-ka-nature-trail.jpg",
  "./photos/baan-kang-wat.jpg",
  "./photos/bamboo-bridge-pai.jpg",
  "./photos/ban-rak-thai-cover.jpg",
  "./photos/ban-rak-thai-lake.jpg",
  "./photos/ban-rak-thai-tea-house.jpg",
  "./photos/ban-rak-thai-yunnan-food.jpg",
  "./photos/banana-roti.jpg",
  "./photos/bangkok-simple.jpg",
  "./photos/chiangmai-old-cover.jpg",
  "./photos/doi-inthanon-cover.jpg",
  "./photos/khao-soi.jpg",
  "./photos/local-thai-meal.jpg",
  "./photos/mae-kampong-village.jpg",
  "./photos/mae-kampong-waterfall.jpg",
  "./photos/mae-kha-canal.jpg",
  "./photos/mae-klang-luang-village.jpg",
  "./photos/mae-wang-bamboo-rafting.jpg",
  "./photos/mae-ya-waterfall.jpg",
  "./photos/mango-sticky-rice.jpg",
  "./photos/mon-jam-cover.jpg",
  "./photos/mushroom-stir-fry.jpg",
  "./photos/nimman-cover.jpg",
  "./photos/nok-chan-mee-na-rice-field.jpg",
  "./photos/pad-thai.jpg",
  "./photos/pai-canyon.jpg",
  "./photos/pai-cover.jpg",
  "./photos/pai-walking-street.jpg",
  "./photos/pluto-cafe.jpg",
  "./photos/pu-erh-tea.jpg",
  "./photos/route-ang-ka-to-mae-klang-luang.png",
  "./photos/route-ban-rak-thai-to-doi.png",
  "./photos/route-chiangmai-to-pai.png",
  "./photos/route-doi-hotel-to-mae-wang.png",
  "./photos/route-doi-hotel-to-mae-ya.png",
  "./photos/route-doi-to-mon-jam.png",
  "./photos/route-mae-ya-to-ang-ka.png",
  "./photos/route-mon-jam-to-nimman.png",
  "./photos/route-nimman-to-mae-kampong.png",
  "./photos/route-pai-to-ban-rak-thai.png",
  "./photos/sai-ngam-hot-springs.jpg",
  "./photos/super-rich-money-exchange.jpg",
  "./photos/tha-phae-gate.jpg",
  "./photos/wachirathan-waterfall.jpg",
  "./photos/wat-chedi-luang-night.jpg",
  "./photos/wat-pha-lat.jpg",
  "./photos/yun-lai-viewpoint.jpg"
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(async (cache) => {
      for (const url of PRECACHE_URLS) {
        try {
          await cache.add(new Request(url, { cache: 'reload' }));
        } catch (err) {
          console.warn('[Thailand 2026 SW] cache skipped:', url, err);
        }
      }
    }).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => Promise.all(
      keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
    )).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;

  const url = new URL(req.url);

  // Navigation: try online first, fall back to the cached app shell.
  if (req.mode === 'navigate') {
    event.respondWith(
      fetch(req).then((res) => {
        const copy = res.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put('./index.html', copy));
        return res;
      }).catch(async () => {
        return (await caches.match('./index.html')) || (await caches.match('./'));
      })
    );
    return;
  }

  // Same-origin static files: cache first, then network and save.
  if (url.origin === self.location.origin) {
    event.respondWith(
      caches.match(req).then((cached) => cached || fetch(req).then((res) => {
        const copy = res.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(req, copy));
        return res;
      }).catch(() => caches.match('./index.html')))
    );
    return;
  }

  // External links such as Google Maps need internet.
  event.respondWith(fetch(req).catch(() => new Response('', { status: 504, statusText: 'Offline' })));
});
