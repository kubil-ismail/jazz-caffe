/* eslint-disable no-restricted-globals */
import "regenerator-runtime/runtime";
import { precacheAndRoute } from "workbox-precaching/precacheAndRoute";
import { cleanupOutdatedCaches } from "workbox-precaching";
import { registerRoute } from "workbox-routing/registerRoute";
import { CacheFirst, NetworkFirst } from "workbox-strategies";
import { ExpirationPlugin } from "workbox-expiration";
import { skipWaiting, clientsClaim, setCacheNameDetails } from "workbox-core";

skipWaiting();
clientsClaim();

setCacheNameDetails({
  prefix: "chilia",
  precache: "precache",
  runtime: "runtime",
});

precacheAndRoute(
  [
    ...self.__WB_MANIFEST,
    {
      url: "https://fonts.googleapis.com/css?family=Allura|Dancing+Script|Great+Vibes&display=swap",
      revision: 1,
    },
    {
      url: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css",
      revision: 1,
    },
    {
      url: "https://images.unsplash.com/photo-1550767552-374fd1babc81?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      revision: 1,
    },
    {
      url: "https://images.unsplash.com/photo-1583873583541-dcbf3120ff05?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80",
      revision: 1,
    },
    {
      url: "https://images.unsplash.com/photo-1583873583541-dcbf3120ff05?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80",
      revision: 1,
    },
  ],
  {
    ignoreURLParametersMatching: [/.*/],
  }
);

registerRoute(
  ({ url }) =>
    url.origin === "https://restaurant-api.dicoding.dev" &&
    (url.pathname.startsWith("/images/") ||
      url.pathname.startsWith("/list/") ||
      url.pathname.startsWith("/detail/")),
  new NetworkFirst({
    cacheName: "dicoding-restaurant-api",
    plugins: [
      new ExpirationPlugin({
        maxAgeSeconds: 60 * 60 * 24 * 30 * 2,
        maxEntries: 100,
      }),
    ],
  })
);

registerRoute(
  ({ url }) =>
    url.origin === "https://restaurant-api.dicoding.dev" &&
    url.pathname.startsWith("/list/"),
  new NetworkFirst({
    cacheName: "dicoding-restaurant-api",
    plugins: [
      new ExpirationPlugin({
        maxAgeSeconds: 60 * 60 * 24 * 30 * 2,
        maxEntries: 100,
      }),
    ],
  })
);

registerRoute(
  ({ request }) => request.destination === "image",
  new CacheFirst({
    cacheName: "images",
    plugins: [
      new ExpirationPlugin({
        maxEntries: 60,
        maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
      }),
    ],
  })
);

cleanupOutdatedCaches();
