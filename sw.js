/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/YYPcyY
 */

importScripts(
  "https://storage.googleapis.com/workbox-cdn/releases/3.0.0-alpha.6/workbox-sw.js"
);

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "assets/icon/favicon.ico",
    "revision": "d2f619d796fbe8bed6200da2691aa5b6"
  },
  {
    "url": "my-pwa-02/assets/icon/icon.png",
    "revision": "b96ad6e1e0b755c8cd45e6aec40bca25"
  },
  {
    "url": "my-pwa-02/build/app.js",
    "revision": "d5be025c2341ad4056799da17e6e8e73"
  },
  {
    "url": "my-pwa-02/build/app/app.5x5ulrty.js",
    "revision": "aecc0dcafadb244849a233d9c8f70cd3"
  },
  {
    "url": "my-pwa-02/build/app/app.global.js",
    "revision": "20d47b97dd281128288df87550224bcd"
  },
  {
    "url": "my-pwa-02/build/app/app.r3bljive.js",
    "revision": "6d2eb10304fce46b94b74aa32fffd40e"
  },
  {
    "url": "my-pwa-02/build/app/app.registry.json",
    "revision": "65b44c6988cdcb5ea52247543c1cf39e"
  },
  {
    "url": "my-pwa-02/build/app/cidhnfwg.es5.js",
    "revision": "ecf64ba64e422f857d6d643100f832f5"
  },
  {
    "url": "my-pwa-02/build/app/cidhnfwg.js",
    "revision": "e40a970a9a3c9ea9914e8582fe4101f8"
  },
  {
    "url": "my-pwa-02/build/app/ec1qccao.es5.js",
    "revision": "6a44789ef2783dc3470b5bc7c2448d4c"
  },
  {
    "url": "my-pwa-02/build/app/ec1qccao.js",
    "revision": "b6777d9e1cd247f66dada3e8b437c943"
  },
  {
    "url": "my-pwa-02/build/app/p6ybp6zt.es5.js",
    "revision": "2a27adf66bc678e6853b826598b44515"
  },
  {
    "url": "my-pwa-02/build/app/p6ybp6zt.js",
    "revision": "a45ce15d011f92e5a51a124d5061d87a"
  },
  {
    "url": "my-pwa-02/host.config.json",
    "revision": "ffeb531beb695e80060aab6c5a79b611"
  },
  {
    "url": "index.html",
    "revision": "f4a8cb46e3bafb0434ccfa64670e3aa8"
  },
  {
    "url": "my-pwa-02/manifest.json",
    "revision": "e33a9f39d3f8b2c46d13156237b4e0ae"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
