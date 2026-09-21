// Minimal service worker: makes the app installable. Network-first, no offline caching of YouTube/Supabase.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', e => { if (e.request.mode === 'navigate') e.respondWith(fetch(e.request).catch(() => caches.match('./index.html'))); });
