self.addEventListener('install', event => {
  console.log('🛠 Service worker установлен');
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  console.log('🚀 Service worker активирован');
});

self.addEventListener('fetch', event => {
  // просто пропускаем все запросы дальше
});
