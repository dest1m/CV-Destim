// sw.js - Basic Service Worker
const CACHE_NAME = 'desti-portfolio-v1';

self.addEventListener('install', (event) => {
  console.log('Service Worker: Installed');
});

self.addEventListener('fetch', (event) => {
  // Biarkan kosong untuk PWA Basic agar instalasi aktif
});
