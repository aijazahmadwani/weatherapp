importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.0.2/workbox-sw.js');

workbox.googleAnalytics.initialize();
workbox.routing.registerRoute(
  /assets/,
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: 'static-files',
    plugins: [
      new workbox.expiration.ExpirationPlugin({
        purgeOnQuotaError: true,
        maxEntries: 100

      })
    ]
  })
)

workbox.routing.registerRoute(
  "/",
  new workbox.strategies.NetworkFirst({
    cacheName: 'homepage',
    plugins: [
      new workbox.expiration.ExpirationPlugin({
        purgeOnQuotaError: true,
        maxEntries: 100

      })
    ]
  })
)
workbox.routing.registerRoute(
'/details.html','/days.html','/hours.html',
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: 'htmlpages',
    plugins: [
      new workbox.expiration.ExpirationPlugin({
        purgeOnQuotaError: true,
        maxEntries: 100

      })
    ]
  })
)