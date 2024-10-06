'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "9a9281231c4e3a1d4f148fbd34907071",
"assets/AssetManifest.bin.json": "fbdcd56ca6095139db927084f5742297",
"assets/AssetManifest.json": "a68dc53cc61da9605527aa723c6934b1",
"assets/assets/images/africa.jpg": "27fc2c6667bd5bd7bba8117fafe28d86",
"assets/assets/images/animals.jpg": "2e218a94e7842a946d772082ac8c5590",
"assets/assets/images/antarctica.jpg": "71e86242fca831839833d1caa23f107e",
"assets/assets/images/asia.jpg": "bbcf97c1be29e77360e8407b7e2eaa05",
"assets/assets/images/australia.jpg": "6170e8a703652c6b814dca7020050086",
"assets/assets/images/backpage.png": "c574c0deeb4e42a934c423f026fc3f4e",
"assets/assets/images/calender.png": "8d4a6f81c1a7f2dae951b4e532f892f1",
"assets/assets/images/cover.jpg": "e1e4b2e46b8d6eabb7330afb0c0d30ff",
"assets/assets/images/design.png": "31fc5865c6e2cec49a8bf85313242a67",
"assets/assets/images/dp.png": "52baabcf6d2c00b8d4d290237ccac125",
"assets/assets/images/email.png": "bdfb4e74b43df853b0b7f2124344de3c",
"assets/assets/images/europe.jpg": "29a721b78efc7f928faf042c88806468",
"assets/assets/images/firebase.png": "5bb2cb1d383353e6ced80930d1097615",
"assets/assets/images/flutter.png": "23ded1e93189e77c12bda66ca4274d08",
"assets/assets/images/git.png": "4ec9a3823499f46c1ebf60f6a8f43b9c",
"assets/assets/images/github.png": "088be43f4b8003f715f4d26c981a5ddb",
"assets/assets/images/in.png": "ad6884c64deb890226860148e2d62e1c",
"assets/assets/images/insta.png": "cc1e9597ab5186deeedcad484d27778d",
"assets/assets/images/it.png": "5a1acd564c0835d7e015c2123ba9ffcd",
"assets/assets/images/ITB.png": "a22a3c2368cf36095041e798356da115",
"assets/assets/images/jb.png": "6df5d5776ca9cf568895fb57036d564d",
"assets/assets/images/js.png": "1348eba6c70c7918beb1aa4e99aeef88",
"assets/assets/images/logo.png": "502688b6da3b67edea5ffc34ad3ba438",
"assets/assets/images/modp.png": "27efdbe0e11f2aab5ff80416710e53ce",
"assets/assets/images/mongo.png": "8c8ff922bc938d28900b4184c1e7a275",
"assets/assets/images/mrdp.png": "eff3aa2f729ea0d73abe24808f070978",
"assets/assets/images/north_america.jpg": "867d729d34a03bf38136bd45954ec218",
"assets/assets/images/photography.jpeg": "b0d14d6d4a94d33404a7df1344e7533b",
"assets/assets/images/point.png": "98afad711363a9d20dc2ccc635391190",
"assets/assets/images/postman.png": "3e657c77e923c2cae914bb43e8c17475",
"assets/assets/images/profile.png": "baf53e4617b119522055f10bee845ebe",
"assets/assets/images/profile1.png": "1a8d01e9add16905d334756eeb0f14b3",
"assets/assets/images/shado.png": "8135966d9a4687dac9869264a0bd1bd8",
"assets/assets/images/south_america.jpg": "1920c86e11a06921b339f00ff1d0ddea",
"assets/assets/images/trekking.jpg": "283eae13ae9587874b93fed5c9b4a118",
"assets/assets/images/ts.png": "aef3ee6ebf9926d28efa5c962744cf01",
"assets/assets/images/whaitgit.png": "dd654e661816a2d7de05ccfaa95b7227",
"assets/assets/images/whaitin.png": "92ec2bce4c182f5755c1f5bfbbe9ddbe",
"assets/assets/images/wightemail.png": "7a2bbbe39d894df810ae111c1e0ff0d7",
"assets/FontManifest.json": "367d1136a8c038074fb602e82e8c29d3",
"assets/fonts/Electrolize-Regular.ttf": "1be3e0aaeb2bbd1985615a49da7f2eaf",
"assets/fonts/MaterialIcons-Regular.otf": "09061a999984f53967512e5b1a804b25",
"assets/fonts/Montserrat-Regular.ttf": "ee6539921d713482b8ccd4d0d23961bb",
"assets/NOTICES": "8e8fe7cc54b5046ff9642be18f975b8c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/iconsax_flutter/fonts/FlutterIconsax.ttf": "83c878235f9c448928034fe5bcba1c8a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.ico": "a62ed61d10ea008415f8e7d73a4f26fb",
"favicon.png": "f2b31c1b97a11084b7a2447de9958a3e",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/android-chrome-192x192.png": "f2b31c1b97a11084b7a2447de9958a3e",
"icons/android-chrome-512x512.png": "60c7aeeac790aa1bf64aace45228c003",
"icons/apple-touch-icon.png": "73018b8f769147cfed4dbdec567a1998",
"index.html": "456b0aff5944f7456da8acd4f011d6cb",
"/": "456b0aff5944f7456da8acd4f011d6cb",
"logo.png": "06b74e3791c16bd6a01b8c344cedb3a6",
"main.dart.js": "b134c642cee35df70e730015c3d45e8d",
"manifest.json": "ce79553c1dd74a6c5d07903bee3bcc72",
"version.json": "cc132570d6d238130e38adc59e1f998d"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
