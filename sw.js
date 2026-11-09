// Lets the app open with no signal.
// App pages: network first (so updates arrive), cached copy as fallback.
// lib/ (AI engine, fonts, readers): cached once and reused; their file names change when they're updated.
// AI models are cached by the AI engine itself; this file never touches that cache.
const CACHE = "session-scribe-v12";
const LIB_CACHE = "session-scribe-lib-2";
const SHELL = ["./", "./index.html", "./manifest.webmanifest", "./icon-192.png", "./icon-512.png", "./apple-touch-icon.png"];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL)).then(() => self.skipWaiting()));
});
self.addEventListener("activate", e => {
  // remove only this app's own outdated caches
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => (k.startsWith("session-scribe-v") && k !== CACHE) || (k.startsWith("session-scribe-lib") && k !== LIB_CACHE)).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
const cacheFirst = (req, name) => caches.open(name).then(c => c.match(req).then(hit => hit || fetch(req).then(res => { if (res.ok) c.put(req, res.clone()); return res; })));
self.addEventListener("fetch", e => {
  const url = new URL(e.request.url);
  if (e.request.method !== "GET") return;
  if (url.origin === location.origin) {
    if (url.pathname.includes("/lib/")) { e.respondWith(cacheFirst(e.request, LIB_CACHE)); return; }
    e.respondWith(fetch(e.request).then(r => { const copy = r.clone(); caches.open(CACHE).then(c => c.put(e.request, copy)); return r; }).catch(() => caches.match(e.request).then(r => r || caches.match("./index.html"))));
  } else if (url.hostname === "cdn.jsdelivr.net") {
    e.respondWith(cacheFirst(e.request, LIB_CACHE));
  }
});
