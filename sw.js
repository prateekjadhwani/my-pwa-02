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
    "url": "assets/icon/icon.png",
    "revision": "b96ad6e1e0b755c8cd45e6aec40bca25"
  },
  {
    "url": "build/app.js",
    "revision": "63caad35a5a000166eaf6df6d73ddd2c"
  },
  {
    "url": "build/app/app.global.js",
    "revision": "20d47b97dd281128288df87550224bcd"
  },
  {
    "url": "build/app/app.r3bljive.js",
    "revision": "6d2eb10304fce46b94b74aa32fffd40e"
  },
  {
    "url": "build/app/app.registry.json",
    "revision": "e8192c451e015aeb6fd262d5f22e5482"
  },
  {
    "url": "build/app/app.t9xdltoj.js",
    "revision": "99617a4db29652aecfb492168a143130"
  },
  {
    "url": "build/app/cidhnfwg.es5.js",
    "revision": "ecf64ba64e422f857d6d643100f832f5"
  },
  {
    "url": "build/app/cidhnfwg.js",
    "revision": "e40a970a9a3c9ea9914e8582fe4101f8"
  },
  {
    "url": "build/app/ec1qccao.es5.js",
    "revision": "6a44789ef2783dc3470b5bc7c2448d4c"
  },
  {
    "url": "build/app/ec1qccao.js",
    "revision": "b6777d9e1cd247f66dada3e8b437c943"
  },
  {
    "url": "build/app/p6ybp6zt.es5.js",
    "revision": "2a27adf66bc678e6853b826598b44515"
  },
  {
    "url": "build/app/p6ybp6zt.js",
    "revision": "a45ce15d011f92e5a51a124d5061d87a"
  },
  {
    "url": "host.config.json",
    "revision": "fbf1becd2264f4f52ad01f24a307b58a"
  },
  {
    "url": "index.html",
    "revision": "635acc48d739d992f1109f5d225a6b3a"
  },
  {
    "url": "manifest.json",
    "revision": "0c129721ede7cd25304ebdd238d774ad"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
