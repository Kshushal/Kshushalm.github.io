'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"canvaskit/canvaskit.js": "5fda3f1af7d6433d53b24083e2219fa0",
"canvaskit/skwasm.js.symbols": "b349d46f4e859adcd7b2b2d5cc112ff0",
"canvaskit/chromium/canvaskit.js": "87325e67bf77a9b483250e1fb1b54677",
"canvaskit/chromium/canvaskit.js.symbols": "52028edbd1c3b9ed9878e4da6a51705b",
"canvaskit/chromium/canvaskit.wasm": "496d052d450e406023a31933485080e7",
"canvaskit/canvaskit.js.symbols": "ee385d39fbe380a8209fa659edea298c",
"canvaskit/canvaskit.wasm": "40ce46c90c9907684bd5d9fb13820601",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"canvaskit/skwasm.wasm": "c86180064ba6f16918b628c0460a17a5",
"canvaskit/skwasm.js": "f17a293d422e2c0b3a04962e68236cc2",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"manifest.json": "b786323ac7b310e4d984d87b8268b3f6",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"version.json": "8e4bbf67d7701970119d2ce704dfde22",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"main.dart.js": "5cc927e78c7dcf536fba09665e0756ed",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "56fc0af06636cf875a75b6a3819b2e13",
"assets/AssetManifest.bin": "ce842a8fcacf5309231d35ae9e8e0c36",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/NOTICES": "5ab8c8a2374115cdd75bbfcc17d39be1",
"assets/assets/images/ficon.png": "839042c83529d6f7d4f6b9844850caef",
"assets/assets/images/background.png": "0614a717659df3fd409c60ff04fac983",
"assets/assets/images/wl.png": "9c98733b0faadbef33e0ccaea2b40d15",
"assets/assets/images/email.png": "f59e8ec158ec05d21c8b251d7b0017ca",
"assets/assets/images/css.png": "901452b1808e80fd6d93bc6b1874629c",
"assets/assets/images/dicon.webp": "4cc8a8f9f12cdb7352bfb717914ecd12",
"assets/assets/images/micon.png": "4742742b9e05f518ba004865a979f912",
"assets/assets/images/dartlogo.png": "ec6441301e108fbf054a895d1dd733a2",
"assets/assets/images/messanger.png": "beacdbb3a93df25674af2f5302f5633a",
"assets/assets/images/dart.png": "484de270d4cd34598ef7c48b3b673c11",
"assets/assets/images/people.png": "f6561cf54d239a098a72225cd21bdc80",
"assets/assets/images/cicon.png": "b6be382d0cf9e7db4a6a1d3a302caba3",
"assets/assets/images/in.png": "a65bf53ef6a1d1555120edfc1810f551",
"assets/assets/images/sign.png": "09ce9472b81f95dc3193a4ce58872bfb",
"assets/assets/images/git.png": "7b08b14f30c2110a685bafcd33e8a480",
"assets/assets/images/graphic.png": "d7aaa5a5615483382572b5d5c24c5e5b",
"assets/assets/images/recent_work_bg.png": "531a8461fd1ec42f03f4cfb891790635",
"assets/assets/images/fire.png": "1468d978f274877f0c405c48fcc97c1b",
"assets/assets/images/bg_img_2.png": "8257ef89b2dfeab767578260965a7e2d",
"assets/assets/images/android.png": "4f917f91ac87a78d2f1643b996db3d4b",
"assets/assets/images/work_2.png": "e1d3843d3e6d8752cfe40f655caab6d5",
"assets/assets/images/skype.png": "955d4329bf55cd47008c2edd6c08ad99",
"assets/assets/images/Intreaction_design.png": "98e873648b7c2d3062556f2f8c09d4c3",
"assets/assets/images/desktop.png": "d4794e3ddcb4fce9a2c12246e3b4d8a7",
"assets/assets/images/flutter.png": "07934617b71b5546054a2ac557beb048",
"assets/assets/images/html.png": "7f0083dfa4b30bee0ed1822c13d9c5cd",
"assets/assets/images/work_4.png": "74e5fc2d50c04cdd638cfa878bd2ef66",
"assets/assets/images/hand.png": "d7c6f40ec1244a86fb4610cd515fee55",
"assets/assets/images/web.png": "d7fcb334e5a837cd76267119c2cff0be",
"assets/assets/images/whatsapp.png": "e33ef8b852729cd9dd7c6af3837f9b23",
"assets/assets/images/insta.png": "bd3f44e94e19e2cd2fed522e65f67657",
"assets/assets/images/Hover_flip.png": "57d317fc22080b316188ebe73407065b",
"assets/assets/images/Hover.png": "f0a2318c40269d84384f56f54d25ad69",
"assets/assets/images/statem.png": "4d4b5c3017a8ceea28eaf85748a4f752",
"assets/assets/images/download.png": "d9317d736e7b69f20f57f6ab13f34d3c",
"assets/assets/images/ios.png": "3f154aa76de6e132c02bed76752cd5fb",
"assets/assets/images/work_3.png": "035401cff7e0fc62875bb280c53523c5",
"assets/assets/images/person.png": "6ede1e25d66c72b4e0ca2e5459cfd8b1",
"assets/assets/images/js.png": "36f5949a45cf7e373c02796443249fcb",
"assets/assets/images/ui.png": "6ca82a6c70f80fd75c56b1fe66caa180",
"assets/assets/images/Logo.png": "f76fc5deb917710b053e34eb147af750",
"assets/assets/images/contact_icon.png": "856b95eb03d60fa2576140e4c3d034b9",
"assets/assets/images/s_img.png": "03502a08a7e16dfee9394190f4d44769",
"assets/assets/images/work_1.png": "ff8242cdad37e4c83136a90a325810a8",
"assets/assets/images/firebase.png": "92ba119b10d65d535a5011847cbdc6f9",
"assets/assets/images/senlogo.png": "e3f65bbf6e008170eb0d2adb0d015cff",
"assets/assets/app5_files/work4.webp": "670e97c7dd7f8ceb8fba96cbece8e828",
"assets/assets/app5_files/saved_resource.html": "3c2ccda97c47ede0b1c91b11efd575ea",
"assets/assets/app5_files/unnamed(18).webp": "6183e5a446dfa5ae8d93375927fb8ae3",
"assets/assets/app5_files/unnamed(15).webp": "81226fe56259fe6976bc69271844349a",
"assets/assets/app5_files/unnamed(10).webp": "3e380ea2b4cdbad2b298963a827d21fe",
"assets/assets/app5_files/lazy.min.js": "936c777790659f304d0d75dd37c349c5",
"assets/assets/app5_files/unnamed(17).webp": "c3d7960132b3da262b721e88cfb2583f",
"assets/assets/app5_files/unnamed(12).webp": "3d062e5a53615dc86d86c61b02d94b2a",
"assets/assets/app5_files/unnamed(7).webp": "33c0318476b0ef5af1d1e65de6990f65",
"assets/assets/app5_files/unnamed(16).webp": "b749a61620dd403c6ab24a289ed700dd",
"assets/assets/app5_files/unnamed(14).webp": "26ae874f3b7051bc5b112960c251080f",
"assets/assets/app5_files/work2.webp": "235fdea16c0750fae7b8d0390b90afe1",
"assets/assets/app5_files/api.js": "9b8ea8cdfc0120a3b34ec8cdc11c6def",
"assets/assets/app5_files/work3.webp": "68734965aaafd1a0d9079f82af01c229",
"assets/assets/app5_files/gtm.js": "40790f61cc6be46f42cce41373399ffb",
"assets/assets/app5_files/styles__ltr.css": "5208f5e6c617977a89cf80522b53a899",
"assets/assets/app5_files/unnamed.jpg": "e7a9663fb57c22eca359854c1bfcd957",
"assets/assets/app5_files/js": "9f8ff4963ad112a65632dd4a2dce5b1b",
"assets/assets/app5_files/Ka1BqJ8qqr7GVFY8ckyfe5sDiZjR9d2vliJ-h9yILmk.js": "3e99048a5a604ff3d779dbe93486bd78",
"assets/assets/app5_files/unnamed.webp": "fd2c41e0ab85518f440d9b002d8c775b",
"assets/assets/app5_files/chat_load.js": "6f1eb4fc6cdc3deff740515f06314c13",
"assets/assets/app5_files/unnamed(13).webp": "792739476ea4bd5bc0c3109f3ec97621",
"assets/assets/app5_files/saved_resource(1).html": "3c2ccda97c47ede0b1c91b11efd575ea",
"assets/assets/app5_files/unnamed(1).webp": "1cb87ad964e0cec9a8b520d284976d3d",
"assets/assets/app5_files/india.png": "bc17a6a2c949ef742da294b810ed19e5",
"assets/assets/app5_files/m=_b,_tp": "884dfdc80250cfe26ac2e2adffbf90b7",
"assets/assets/app5_files/recaptcha__en.js": "2976ee1346f476ef821a24e820de8efe",
"assets/assets/app5_files/unnamed(6).webp": "3e380ea2b4cdbad2b298963a827d21fe",
"assets/assets/app5_files/unnamed(9).webp": "792739476ea4bd5bc0c3109f3ec97621",
"assets/assets/app5_files/work1.webp": "b40636d7d616812f0f94a73de3e71b2b",
"assets/assets/app5_files/unnamed(8).webp": "3d062e5a53615dc86d86c61b02d94b2a",
"assets/assets/app5_files/unnamed(11).webp": "33c0318476b0ef5af1d1e65de6990f65",
"assets/assets/app5_files/anchor.html": "12d52116cc294b497d47d99ab35e6230",
"assets/AssetManifest.json": "8a4bd6c1233f11ada330cc99b30585fa",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"index.html": "38adf2fb72a9a8b8a6231c088f6685c6",
"/": "38adf2fb72a9a8b8a6231c088f6685c6",
"flutter_bootstrap.js": "f587720ef3cb1dd30a3db64fd8063f32"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
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
