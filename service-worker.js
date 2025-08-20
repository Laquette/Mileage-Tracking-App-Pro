javascriptconst CACHE_NAME = 'trackdrive-v1';
const urlsToCache = [
  '/trackdrive/',
  '/trackdrive/index.html',
  '/trackdrive/manifest.json'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
