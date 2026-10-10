// No se almacenan datos clínicos ni páginas autenticadas sin conexión.
self.addEventListener('install', event => self.skipWaiting());
self.addEventListener('activate', event => event.waitUntil(self.clients.claim()));
self.addEventListener('fetch', event => { /* Solicitudes directas a la red */ });
