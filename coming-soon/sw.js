/*--------------------------------------------------------------
  Service Worker
--------------------------------------------------------------*/
importScripts('./cache-polyfill.js');

/* Variables
================================================== */
var cacheName = 'v1';
var cacheFiles = [
  './'
];

/* Install
================================================== */
self.addEventListener('install', function(e) {
  console.log('[ServiceWorker] Install', cacheName);
  e.waitUntil(
    caches.open(cacheName)
          .then(function(cache) {
            return cache.addAll(cacheFiles);
          })
  );
});

/* Fetch
================================================== */
self.addEventListener('fetch', function(event) {
  console.log('[ServiceWorker] Fetch', event.request.url);
  event.respondWith(
    caches.match(event.request)
          .then(function(response) {
            return response || fetch(event.request);
          })
  );
});

/* Activate
================================================== */
self.addEventListener('activate', function(e) {
  console.log('[ServiceWorker] Activate');
  e.waitUntil(
    caches.keys().then(function(keyList) {
      return Promise.all(keyList.map(function(key) {
        if (cacheName.indexOf(key) === -1) {
          return caches.delete(key);
        }
      }));
    })
  );
});
