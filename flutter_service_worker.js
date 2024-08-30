'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "f8cc53698bfa440c98ef2dfa20e55b61",
".git/config": "d845d0cb61deafdd4cdad1878d1a9a35",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "a6b6beb8d66b2a85154a8f61937bc139",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "982dd82a2f78a3cbdc78c7d15e811140",
".git/logs/refs/heads/master": "982dd82a2f78a3cbdc78c7d15e811140",
".git/logs/refs/remotes/origin/master": "091b68ae0432570932e6ac3c0813c1de",
".git/objects/01/857ed8992c966b4cc26fb38a02eb4e56c44403": "e3cae8a02c3a576392eb220d588a3db8",
".git/objects/0c/30bdea4c129a89602dd68d0dc401581571b755": "548b9357a771ba15c218f859032adc20",
".git/objects/12/ba53aac76ec7e5c76cdd9ffb33e7728ac5c0f1": "82302f2074ce9240daff96ce0ade7784",
".git/objects/14/231c264f37fe61cb5a31d8d6520a2609900121": "287a231a4d51f4ed59e67e34a89a8390",
".git/objects/16/5da67191b73406e15fc3e6cf7cda3c195dc735": "86cfac30d97fb45bba2f4417782645d6",
".git/objects/1e/25fb4841dbfcbc6e4fa75d9417a4113ba250bc": "e91280155bc02e320c2a664e7fefc7b5",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/a815b01690d80fece62d013aabbc3225593195": "9b90d911244bce355931e8a573304a33",
".git/objects/21/f8533fc6108c4ba0a8a5b9405769d52b47120c": "a1398cf3ca8baebd072c7a3e19cb64e7",
".git/objects/23/aebb6a4eae6d34b94f0066c54384618bb32e64": "892daf812e792fa26b530a8f113ee219",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/27/9b9ad4620af73884e1ab60da63e2ef0f474676": "0b8b1138b4db1a87e38cc71d2bea2710",
".git/objects/2f/1633d60c1e219ff20205bfd8babf80373cd350": "a21a9aedea90a6c3aceaf4d1029be142",
".git/objects/30/8e5577bfa4ba24d4247ac281e6000c71585d12": "d2a7c10c598d7c7db21ea65a0a833a93",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/3a/4febd8e35df73822175618cc8526e955cb0901": "cb580682d318a9628fe3aaba2e1d6b5a",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/4c/de3ad3755d33166aa32fc7f410f8a7424b1408": "b3cc933ba27633224bf1edc3d8fcc1bc",
".git/objects/4e/217c704e89856d10baa70ea42e16ec886467b1": "c6e80b831e98a62d40497f17a41ba2fd",
".git/objects/5d/15fadf1864d70c7184fca7d3efde79cdf68af5": "79a44d8578cc18e3add64aa6a97f0da0",
".git/objects/61/81afa883112845173241818fadd8d4c9e365f7": "021cfac2f5104b216ffa39fefba323e2",
".git/objects/61/bb6792e9299d43c442e222532ddf16b9e604ed": "80911d986eaeeeeff58ba05d1fe73667",
".git/objects/63/5fe079f77dc82fbe2628a62ef16da64412aafd": "eb19b998938c9f45c7bf8c31366410b0",
".git/objects/6a/63b25c7a5d7cbc7f3a4e15b50456eff8a61207": "94dfc72f7c718cad89630ced7849d815",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/83/b8cb304aec28d9242c6b5f565644ed87b13cc0": "4c5ac7a080885e279b66261765ad0cda",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/806649dae38c6e962d096a6d950575600b35f5": "f856c481065da509b8b269e79cadd020",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/300214546c3bf3cf01546e73f5fecbce203201": "a74ad153cdf845652704550660361528",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/93/d3a25074f012fc75a3a45b053c38f10e6f0997": "7cbcce776783a30d1f696f0f334adc54",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/9f/3a36945f797af63b51b3d18c68c11cdca3af1f": "368b902787db9e4e46daee6495e56c2e",
".git/objects/a0/cf9585d7992e3d8dfae5560fa1bfedd0207651": "66b5430f8efb65c015fd613f89d053ec",
".git/objects/a2/c2c501d92cade4609fbff2a20d058036a0f07d": "5799cad65f96fe00122233a5625d5041",
".git/objects/a5/3efdf92300d180241adcd14d81d15a734c4e08": "cdce04155deb291d95d5b2a8a45a186e",
".git/objects/a7/e7096172b561bb32d1b2170e392be800b4855d": "be180a432e7907f2e7fecf483fac6fb3",
".git/objects/a9/7d0c6fd270b109af7e8a4e06b8efbe47ee504d": "42dbb00e47ab6bdec4e0752c63cf8337",
".git/objects/a9/a15fea875d8c8ccf5411be8619835f9ab4e50b": "8cca38327cb56e1fdf2288b13e8bf22d",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/bf/bb15e4a23797b2911505ed768121d00b72e5f7": "897c6b3413b52c4038e0b06036b2a924",
".git/objects/d1/9602a5b5d1ffb38e82001a02b31482fa3fd80e": "270d2d8ecad5d0ef9a153c92dbe2eda6",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/323e0f50a6cf460390c61a24b4fcfb32162e10": "88a96fb52417dae047e29be59c8b0be5",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/db/f2e177341a215197fe89bc9cc68f1e57de224f": "5a2d40d7f2479493820ce50973c10ba0",
".git/objects/e2/6d0c73c9fea00a0a4bc628a96985d75b3a63ba": "62f5aaba3d44f79f9aa1eb586016337b",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/aaea732918d2c24406864bd02920eb0947ace1": "0ae4c15e0e850100a2cd9ec4da1326f3",
".git/objects/f4/a266dd37d5066da46c9a6b8898073ae2930a64": "90c22367f91de9fd622ad04f0a5fd7c8",
".git/objects/f5/010cda95492006dae3638dfb01a8d0822a1e6a": "04eb9fcdf209b67f396e5ab84cb956e2",
".git/refs/heads/master": "a0abeda43335d20e6455fc755ab53ebe",
".git/refs/remotes/origin/master": "a0abeda43335d20e6455fc755ab53ebe",
"assets/AssetManifest.bin": "7227d43b871b04fe67f096f361a99779",
"assets/AssetManifest.bin.json": "08e044ab58eea2ae9c5ca386bd219cf0",
"assets/AssetManifest.json": "abb75f2c5b7d7adb63eb9c059e1ab1b6",
"assets/assets/gif/degree.gif": "a091bdbfe19808d03ce8cb20a36b41c1",
"assets/assets/images/4840.jpg": "028dd6da765ff67a3e32cd818b41fe4a",
"assets/assets/images/abhi.png": "97989047d1717489ca844e48eae2fd0a",
"assets/assets/images/abhi_image.png": "7c1da7a8246c80cf9f8bdb28ddb6a784",
"assets/assets/images/education.svg": "5f97f2de92b1c81961ba1e837b478ebc",
"assets/assets/images/idea.png": "d9420cdb8d15debd7b3a3625238a4992",
"assets/assets/images/instagram.png": "5c570427ee23f69853d28aec805eee79",
"assets/assets/images/linkedin.png": "d492efc706db983e74258dbd348f2208",
"assets/assets/images/twitter.png": "3e8e7ee8666a9f4e2946f39ff2f806e3",
"assets/assets/images/web-programming.png": "a8a75d5811a3ae43b5dd20516a278612",
"assets/FontManifest.json": "63cf747f431a96cef4802b0ad5c6fa7d",
"assets/fonts/BonaNovaSC-Bold.ttf": "f3354d48b76d9f3782df196bfb03b884",
"assets/fonts/MaterialIcons-Regular.otf": "bd4b8113fc425f0ffcf07377cf77a51d",
"assets/fonts/Montserrat-Regular.ttf": "5e077c15f6e1d334dd4e9be62b28ac75",
"assets/fonts/Tiny5-Regular.ttf": "6e6ba498de8bbc91d05ea784652d1943",
"assets/NOTICES": "c1bb4d85faa40e9183f962af65a824e9",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "5fda3f1af7d6433d53b24083e2219fa0",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "87325e67bf77a9b483250e1fb1b54677",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "9fa2ffe90a40d062dd2343c7b84caf01",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f31737fb005cd3a3c6bd9355efd33061",
"flutter_bootstrap.js": "4262d973a3d7a928033f0af2a4ad46e8",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "58fcc17f20ecf3d84bea10ffc65e8f8a",
"/": "58fcc17f20ecf3d84bea10ffc65e8f8a",
"main.dart.js": "56cce7f829a3a3461670147bdbe51fe5",
"manifest.json": "9138407b5edabb91a4ce311720238c3d",
"version.json": "b6242d654583a276adf3cb898e186b8c"};
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
