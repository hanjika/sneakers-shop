// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function(modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function(id, exports) {
    modules[id] = [
      function(require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function() {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function() {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"hkXzs":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "69f74e7f31319ffd";
module.bundle.HMR_BUNDLE_ID = "b3bb0a59227406fc";
"use strict";
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it;
    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F1() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = o[Symbol.iterator]();
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                } // Render the fancy html overlay
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            removeErrorOverlay();
            var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
            document.body.appendChild(overlay);
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>\n          ").concat(stack, "\n        </pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>' + hint + '</div>';
            }).join(''), "\n        </div>\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') {
        reloadCSS();
        return;
    }
    var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
    if (deps) {
        var fn = new Function('require', 'module', 'exports', asset.output);
        modules[asset.id] = [
            fn,
            deps
        ];
    } else if (bundle.parent) hmrApply(bundle.parent, asset);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) return true;
    return getParents(module.bundle.root, id).some(function(v) {
        return hmrAcceptCheck(v[0], v[1], null);
    });
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"23obh":[function(require,module,exports) {
var _data = require("./data");
var _slider = require("./slider");
var _nav = require("./nav");
var _shoppingCart = require("./shopping-cart");
/* Slider buttons */ document.querySelector(".left-btn").addEventListener('click', _slider.imageToLeft);
document.querySelector(".right-btn").addEventListener('click', _slider.imageToRight);
/* Desktop Features */ if (window.innerWidth >= 700) {
    document.querySelector('.main-photo').addEventListener('click', _slider.displayLightbox);
    const thumbnails = document.querySelectorAll('.thumbnail');
    for (const thumbnail of thumbnails)thumbnail.addEventListener('click', _slider.changeImageWithThumbnail);
    /* Lightbox */ const lightboxCloseBtn = document.querySelector('.lightbox-close-btn');
    lightboxCloseBtn.addEventListener('click', ()=>{
        document.querySelector('.lightbox').style.display = 'none';
    });
    const lightboxThumbnails = document.querySelectorAll('.lightbox-thumbnail');
    for (const lbThumbnail of lightboxThumbnails)lbThumbnail.addEventListener('click', _slider.changeImageWithThumbnail);
    document.querySelector(".lightbox-left-btn").addEventListener('click', _slider.imageToLeft);
    document.querySelector(".lightbox-right-btn").addEventListener('click', _slider.imageToRight);
}
window.addEventListener('resize', resize);
function resize() {
    if (window.innerWidth >= 700) {
        document.querySelector('.main-photo').addEventListener('click', _slider.displayLightbox);
        const thumbnails = document.querySelectorAll('.thumbnail');
        for (const thumbnail of thumbnails)thumbnail.addEventListener('click', _slider.changeImageWithThumbnail);
        /* Lightbox */ const lightboxCloseBtn = document.querySelector('.lightbox-close-btn');
        lightboxCloseBtn.addEventListener('click', ()=>{
            document.querySelector('.lightbox').style.display = 'none';
        });
        const lightboxThumbnails = document.querySelectorAll('.lightbox-thumbnail');
        for (const lbThumbnail of lightboxThumbnails)lbThumbnail.addEventListener('click', _slider.changeImageWithThumbnail);
        document.querySelector(".lightbox-left-btn").addEventListener('click', _slider.imageToLeft);
        document.querySelector(".lightbox-right-btn").addEventListener('click', _slider.imageToRight);
    } else document.querySelector('.main-photo').removeEventListener('click', _slider.displayLightbox);
}
/*  Nav */ const navMobile = document.querySelector('.navigation-menu');
const menuBtn = document.querySelector('.menu-btn');
const closeMenuBtn = document.querySelector('.close-menu-btn');
menuBtn.addEventListener('click', ()=>_nav.openNavMenu(navMobile)
);
closeMenuBtn.addEventListener('click', ()=>_nav.closeNavMenu(navMobile)
);
/* Cart */ const cart = document.querySelector('.cart');
const cartBtn = document.querySelector('.shopping-cart-btn');
cartBtn.addEventListener('click', ()=>_shoppingCart.toggleShoppingCart(cart)
);
/* Add to Cart */ const quantity = document.querySelector('.quantity');
const increaseQuantityBtn = document.querySelector('.plus');
increaseQuantityBtn.addEventListener('click', ()=>{
    quantity.textContent = _shoppingCart.increaseQuantity(_data.SNEAKER);
});
const decreaseQuantityBtn = document.querySelector('.minus');
decreaseQuantityBtn.addEventListener('click', ()=>{
    quantity.textContent = _shoppingCart.decreaseQuantity(_data.SNEAKER);
});
const addToCartBtn = document.querySelector('.add-to-cart-btn');
addToCartBtn.addEventListener('click', ()=>{
    _shoppingCart.addToCart(_data.SNEAKER);
    _shoppingCart.openShoppingCart(cart);
});

},{"./data":"9Iwal","./slider":"gtXmp","./nav":"kmbj5","./shopping-cart":"9Lmuf"}],"9Iwal":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "SNEAKER", ()=>SNEAKER
);
const SNEAKER = [
    {
        title: 'Fall Limited Edition Sneakers',
        subtitle: 'Sneaker Company',
        price: 125,
        quantity: 0,
        gallery: [
            {
                'id': 1,
                'enlarged': require('../images/image-product-1.jpg'),
                'thumbnail': require('../images/image-product-1-thumbnail.jpg')
            },
            {
                'id': 2,
                'enlarged': require('../images/image-product-2.jpg'),
                'thumbnail': require('../images/image-product-2-thumbnail.jpg')
            },
            {
                'id': 3,
                'enlarged': require('../images/image-product-3.jpg'),
                'thumbnail': require('../images/image-product-3-thumbnail.jpg')
            },
            {
                'id': 4,
                'enlarged': require('../images/image-product-4.jpg'),
                'thumbnail': require('../images/image-product-4-thumbnail.jpg')
            }
        ]
    }
];

},{"../images/image-product-1.jpg":"uN0wi","../images/image-product-1-thumbnail.jpg":"6BptN","../images/image-product-2.jpg":"ahLb9","../images/image-product-2-thumbnail.jpg":"8xL0b","../images/image-product-3.jpg":"83hBP","../images/image-product-3-thumbnail.jpg":"T16S3","../images/image-product-4.jpg":"fyl8c","../images/image-product-4-thumbnail.jpg":"coIpj","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"uN0wi":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('fqHw8') + "image-product-1.f2a9a7b3.jpg";

},{"./helpers/bundle-url":"8YnfL"}],"8YnfL":[function(require,module,exports) {
"use strict";
var bundleURL = {
};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ('' + err.stack).match(/(https?|file|ftp):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return '/';
}
function getBaseURL(url) {
    return ('' + url).replace(/^((?:https?|file|ftp):\/\/.+)\/[^/]+$/, '$1') + '/';
} // TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ('' + url).match(/(https?|file|ftp):\/\/[^/]+/);
    if (!matches) throw new Error('Origin not found');
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"6BptN":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('fqHw8') + "image-product-1-thumbnail.c103ff29.jpg";

},{"./helpers/bundle-url":"8YnfL"}],"ahLb9":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('fqHw8') + "image-product-2.c31cf31c.jpg";

},{"./helpers/bundle-url":"8YnfL"}],"8xL0b":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('fqHw8') + "image-product-2-thumbnail.73a72f4d.jpg";

},{"./helpers/bundle-url":"8YnfL"}],"83hBP":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('fqHw8') + "image-product-3.20fa0135.jpg";

},{"./helpers/bundle-url":"8YnfL"}],"T16S3":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('fqHw8') + "image-product-3-thumbnail.b7160c8a.jpg";

},{"./helpers/bundle-url":"8YnfL"}],"fyl8c":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('fqHw8') + "image-product-4.77ced84e.jpg";

},{"./helpers/bundle-url":"8YnfL"}],"coIpj":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('fqHw8') + "image-product-4-thumbnail.5dcf3633.jpg";

},{"./helpers/bundle-url":"8YnfL"}],"JacNc":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule') return;
        // Skip duplicate re-exports when they have the same value.
        if (key in dest && dest[key] === source[key]) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"gtXmp":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "imageToLeft", ()=>imageToLeft
);
parcelHelpers.export(exports, "imageToRight", ()=>imageToRight
);
parcelHelpers.export(exports, "displayLightbox", ()=>displayLightbox
);
parcelHelpers.export(exports, "changeImageWithThumbnail", ()=>changeImageWithThumbnail
);
var _data = require("./data");
function imageToLeft(e) {
    const selectedBtn = e.target;
    let currentPic = document.querySelector('.main-photo');
    if (selectedBtn.classList[0] === 'lightbox-left-btn') currentPic = document.querySelector('.lightbox-main-photo');
    const num = currentPic.classList[1];
    if (num === 'one') {
        currentPic.setAttribute('src', _data.SNEAKER[0].gallery[3].enlarged);
        currentPic.classList.remove(num);
        currentPic.classList.add('four');
    } else if (num === 'two') {
        currentPic.setAttribute('src', _data.SNEAKER[0].gallery[0].enlarged);
        currentPic.classList.remove(num);
        currentPic.classList.add('one');
    } else if (num === 'three') {
        currentPic.setAttribute('src', _data.SNEAKER[0].gallery[1].enlarged);
        currentPic.classList.remove(num);
        currentPic.classList.add('two');
    } else if (num === 'four') {
        currentPic.setAttribute('src', _data.SNEAKER[0].gallery[2].enlarged);
        currentPic.classList.remove(num);
        currentPic.classList.add('three');
    }
    if (selectedBtn.classList[0] === 'lightbox-left-btn') activateThumbnails(currentPic);
}
function imageToRight(e) {
    const selectedBtn = e.target;
    let currentPic = document.querySelector('.main-photo');
    if (selectedBtn.classList[0] === 'lightbox-right-btn') currentPic = document.querySelector('.lightbox-main-photo');
    const num = currentPic.classList[1];
    if (num === 'one') {
        currentPic.setAttribute('src', _data.SNEAKER[0].gallery[1].enlarged);
        currentPic.classList.remove(num);
        currentPic.classList.add('two');
    } else if (num === 'two') {
        currentPic.setAttribute('src', _data.SNEAKER[0].gallery[2].enlarged);
        currentPic.classList.remove(num);
        currentPic.classList.add('three');
    } else if (num === 'three') {
        currentPic.setAttribute('src', _data.SNEAKER[0].gallery[3].enlarged);
        currentPic.classList.remove(num);
        currentPic.classList.add('four');
    } else if (num === 'four') {
        currentPic.setAttribute('src', _data.SNEAKER[0].gallery[0].enlarged);
        currentPic.classList.remove(num);
        currentPic.classList.add('one');
    }
    if (selectedBtn.classList[0] === 'lightbox-right-btn') activateThumbnails(currentPic);
}
function displayLightbox() {
    const lightbox = document.querySelector('.lightbox');
    lightbox.style.display = 'flex';
    document.addEventListener('keydown', pressKey);
    document.addEventListener('click', closeLightboxWithOutsideClick);
}
function changeImageWithThumbnail(e) {
    const selected = e.target;
    let photo = document.querySelector('.main-photo');
    if (selected.classList[0] === 'lightbox-thumbnail') photo = document.querySelector('.lightbox-main-photo');
    if (!selected.classList.contains('active')) {
        selected.classList.toggle('active');
        deactivateSiblingImages(selected);
        const num = selected.classList[1];
        if (num === 'one') photo.setAttribute('src', _data.SNEAKER[0].gallery[0].enlarged);
        else if (num === 'two') photo.setAttribute('src', _data.SNEAKER[0].gallery[1].enlarged);
        else if (num === 'three') photo.setAttribute('src', _data.SNEAKER[0].gallery[2].enlarged);
        else if (num === 'four') photo.setAttribute('src', _data.SNEAKER[0].gallery[3].enlarged);
    }
}
function activateThumbnails(currentPic) {
    const num = currentPic.classList[1];
    const allThumbnail = document.querySelectorAll('.lightbox-thumbnail');
    for (const tbnail of allThumbnail)if (tbnail.classList[1] === num) {
        deactivateSiblingImages(tbnail);
        if (!tbnail.classList.contains('active')) tbnail.classList.add('active');
    }
}
function deactivateSiblingImages(selected) {
    let allImages = Array.from(document.querySelectorAll('.thumbnail'));
    if (selected.classList[0] === 'lightbox-thumbnail') allImages = Array.from(document.querySelectorAll('.lightbox-thumbnail'));
    const imageNumber = selected.classList[1];
    const unselectedImages = removeTypeFromArray(allImages, imageNumber);
    for (const image of unselectedImages)if (image.classList.contains('active')) image.classList.remove('active');
}
function removeTypeFromArray(arr, type) {
    const arrWithoutType = arr.slice();
    for(let i = 0; i < arrWithoutType.length; i++){
        const classNumber = arrWithoutType[i].classList[1];
        if (classNumber === type) arrWithoutType.splice(i, 1);
    }
    return arrWithoutType;
}
function pressKey(e) {
    if (e.keyCode === 27) {
        document.querySelector('.lightbox').style.display = 'none';
        document.removeEventListener('keydown', pressKey);
    }
}
function closeLightboxWithOutsideClick(e) {
    if (e.target.classList.contains('lightbox-main-image') || e.target.classList.contains('lightbox') || e.target.classList.contains('lightbox-close') || e.target.classList.contains('lightbox-other-images')) document.querySelector('.lightbox').style.display = 'none';
}

},{"./data":"9Iwal","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"kmbj5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "openNavMenu", ()=>openNavMenu
);
parcelHelpers.export(exports, "closeNavMenu", ()=>closeNavMenu
);
function openNavMenu(menu) {
    menu.classList.add('show-menu');
}
function closeNavMenu(menu) {
    menu.classList.remove('show-menu');
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"9Lmuf":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "toggleShoppingCart", ()=>toggleShoppingCart
);
parcelHelpers.export(exports, "openShoppingCart", ()=>openShoppingCart
);
parcelHelpers.export(exports, "increaseQuantity", ()=>increaseQuantity
);
parcelHelpers.export(exports, "decreaseQuantity", ()=>decreaseQuantity
);
parcelHelpers.export(exports, "addToCart", ()=>addToCart
);
let cartTotal = 0;
let shoppingCart = [];
function toggleShoppingCart(cart) {
    cart.classList.toggle('show-cart');
}
function openShoppingCart(cart) {
    cart.classList.add('show-cart');
}
function increaseQuantity(product) {
    shoppingCart = [];
    for(let i = 0; i < product.length; i++){
        product[i].quantity += 1;
        return product[i].quantity;
    }
}
function decreaseQuantity(product) {
    shoppingCart = [];
    for(let i = 0; i < product.length; i++){
        if (product[i].quantity > 0) product[i].quantity -= 1;
        return product[i].quantity;
    }
}
function addToCart(product) {
    cartTotal = 0;
    for(let i = 0; i < product.length; i++){
        shoppingCart.push(product[i].price * product[i].quantity);
        for(let i1 = 0; i1 < shoppingCart.length; i1++)cartTotal += shoppingCart[i1];
        renderProductInCart(product[i]);
    }
}
function renderProductInCart(product) {
    const orderSummary = document.querySelector('.order-summary');
    const cartProduct = document.createElement('div');
    const cartProductImage = document.createElement('img');
    const cartProductInfo = document.createElement('div');
    const cartProductTitle = document.createElement('h4');
    const cartProductPriceDetails = document.createElement('div');
    const cartProductPrice = document.createElement('span');
    const cartProductQuantity = document.createElement('span');
    const cartProductTotal = document.createElement('span');
    const cartProductRemoveBtn = document.createElement('button');
    const cartCheckout = document.createElement('button');
    cartProduct.classList.add('cart-product');
    cartProductImage.classList.add('cart-product-image');
    cartProductInfo.classList.add('cart-product-info');
    cartProductTitle.classList.add('cart-product-title');
    cartProductPriceDetails.classList.add('cart-product-price-details');
    cartProductPrice.classList.add('cart-product-price');
    cartProductQuantity.classList.add('cart-product-quantity');
    cartProductTotal.classList.add('cart-product-total');
    cartProductRemoveBtn.classList.add('cart-product-remove-btn');
    cartCheckout.classList.add('cart-checkout');
    cartProductInfo.appendChild(cartProductTitle);
    cartProductInfo.appendChild(cartProductPriceDetails);
    cartProductPriceDetails.appendChild(cartProductPrice);
    cartProductPriceDetails.appendChild(cartProductQuantity);
    cartProductPriceDetails.appendChild(cartProductTotal);
    cartProduct.appendChild(cartProductImage);
    cartProduct.appendChild(cartProductInfo);
    cartProduct.appendChild(cartProductRemoveBtn);
    cartProductImage.src = product.gallery[0].thumbnail;
    cartProductTitle.textContent = product.title;
    cartProductPrice.textContent = `$${product.price}`;
    cartProductQuantity.textContent = `x${product.quantity}`;
    cartProductTotal.textContent = `$${product.price * product.quantity}`;
    cartProductRemoveBtn.addEventListener('click', ()=>removeProductFromCart(orderSummary, cartProduct, cartCheckout)
    );
    cartCheckout.textContent = 'Checkout';
    orderSummary.innerHTML = '';
    orderSummary.appendChild(cartProduct);
    orderSummary.appendChild(cartCheckout);
}
function removeProductFromCart(order, product, checkout) {
    // Temporary dirty solution, need to implement the logic to remove checkout button only if there is 0 product in the cart
    order.removeChild(product);
    order.removeChild(checkout);
    order.innerHTML = '<p>Your cart is empty</p>';
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}]},["hkXzs","23obh"], "23obh", "parcelRequire2f07")

//# sourceMappingURL=index.227406fc.js.map
