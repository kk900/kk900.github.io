self.addEventListener('install', event => event.waitUntil(caches.open('kk-pwa-cache')
    .then(cache => cache.addAll([
        '/',
        '/index.html',
        '/favicon.ico',
        '/favicon-16.png',
        '/favicon-32.png',
        '/favicon-192.png',
        '/favicon-384.png',
    ]))));