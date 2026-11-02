// Keeps the app opening with bad signal at the table.
// App files: network first (so updates arrive), cached copy as fallback.
// Whisper runtime from jsDelivr: versioned and never changes, so cached once and kept.
// Whisper models are cached by the Whisper library itself; this file never touches that cache.
const CACHE = "session-scribe-v4";
const LIB_CACHE = "session-scribe-lib";
const SHELL = ["./", "./index.html", "./manifest.webmanifest", "./icon-192.png", "./icon-512.png", "./apple-touch-icon.png"];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL)).then(() => self.skipWaiting()));
});
self.addEventListener("activate", e => {
  // only remove this app's own old shell caches
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k.startsWith("session-scribe-v") && k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
const cacheFirst = (req, name) => caches.open(name).then(c => c.match(req).then(hit => hit || fetch(req).then(res => { if (res.ok || res.type === "opaque") c.put(req, res.clone()); return res; })));
self.addEventListener("fetch", e => {
  const url = new URL(e.request.url);
  if (e.request.method !== "GET") return;
  if (url.origin === location.origin) {
    e.respondWith(fetch(e.request).then(r => { const copy = r.clone(); caches.open(CACHE).then(c => c.put(e.request, copy)); return r; }).catch(() => caches.match(e.request).then(r => r || caches.match("./index.html"))));
  } else if (url.hostname === "cdn.jsdelivr.net") {
    e.respondWith(cacheFirst(e.request, LIB_CACHE));
  } else if (url.hostname.endsWith("googleapis.com") || url.hostname.endsWith("gstatic.com")) {
    e.respondWith(cacheFirst(e.request, LIB_CACHE));
  }
});
