define("2e09fb9b-13bb-48f2-859f-97d6fff71176_1.1.13", ["tslib"], function(__WEBPACK_EXTERNAL_MODULE__17wl__) { return /******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 	};
/******/
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"odsp-core-bundle": 0
/******/ 	};
/******/
/******/
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "chunk." + ({"rumone-fci":"rumone-fci"}[chunkId]||chunkId) + "_" + "none" + ".js"
/******/ 	}
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 							error.name = 'ChunkLoadError';
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = window["webpackJsonp_2e09fb9b_13bb_48f2_859f_97d6fff71176_1_1_13"] = window["webpackJsonp_2e09fb9b_13bb_48f2_859f_97d6fff71176_1_1_13"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// Set the webpack public path
/******/ 	(function () {
/******/ 	  var scripts = document.getElementsByTagName('script');
/******/ 	  var regex = (typeof spScriptNamePattern !== 'undefined') ? spScriptNamePattern : /odsp-core-bundle_none\.js/i;
/******/ 	  var publicPath;
/******/
/******/ 	  if (scripts && scripts.length) {
/******/ 	    for (var i = 0; i < scripts.length; i++) {
/******/ 	      if (!scripts[i]) continue;
/******/ 	      var path = scripts[i].getAttribute('src');
/******/ 	      if (path && path.match(regex)) {
/******/ 	        publicPath = path.substring(0, path.lastIndexOf('/') + 1);
/******/ 	        break;
/******/ 	      }
/******/ 	    }
/******/ 	  }
/******/
/******/ 	  if (!publicPath) {
/******/ 	    for (var global in window.__setWebpackPublicPathLoaderSrcRegistry__) {
/******/ 	      if (global && global.match(regex)) {
/******/ 	        publicPath = global.substring(0, global.lastIndexOf('/') + 1);
/******/ 	        break;
/******/ 	      }
/******/ 	    }
/******/ 	  }
/******/ 	  __webpack_require__.p = publicPath;
/******/ 	})();
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "mwqp");
/******/ })
/************************************************************************/
/******/ ({

/***/ "++rU":
/*!***********************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/telemetry-manager@1.1.3/node_modules/@ms/telemetry-manager/lib/events/RUMOneDataUpload.event.js ***!
  \***********************************************************************************************************************************************************/
/*! exports provided: RUMOneDataUpload */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RUMOneDataUpload", function() { return RUMOneDataUpload; });
/* harmony import */ var _SingleEventBase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../SingleEventBase */ "yb4E");
// OneDrive:IgnoreCodeCoverage

var RUMOneDataUpload = Object(_SingleEventBase__WEBPACK_IMPORTED_MODULE_0__["createSingleEvent"])({
    eventName: 'RUMOneDataUpload,',
    shortEventName: 'RUMOneDataUpload'
}, {
    streamName: 1 /* String */,
    dictionary: 4 /* Object */,
    privacyClassification: {
        isPrefixingDisabled: true,
        type: 1 /* String */
    }
}).withData({ privacyClassification: "requiredService" /* requiredService */ });
//# sourceMappingURL=RUMOneDataUpload.event.js.map

/***/ }),

/***/ "+35T":
/*!******************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-utilities@29.7.9_5d977624104b06c7bcaa2de974ff51f1/node_modules/@ms/odsp-utilities/lib/encoding/UriEncoding.js ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// OneDrive:IgnoreCodeCoverage
var UriEncoding = /** @class */ (function () {
    function UriEncoding() {
    }
    /////////////////////////////
    // This file is more clean of all unneeded pollutants. It only contains the minimum amount of code required for someone to use the URI class.
    // You should think twice before adding anything else into this file because you will be causing unneeded bloat from someone else.
    /////////////////////////////
    /**
     * This function performs an aggressive unicode URL-encoding.
     * Convert non alphanum character into UTF-8 code string in format %XX%XX%XX.
     *
     * Escape unsafe characters
     *   CTL | SP | <"> | "#" | "%" | "<" | ">" | "'" | "&"
     * in the URL path (before "?", "#")
     * No encoding on query string.
     *
     * @param {string} str - String to encode
     * @param {boolean} bAsUrl - Encode in the same way as the code in unmanaged (Url::UrlEncode) code and
     *                           SP OM (SPHttpUtility.UrlKeyValueEncode and SPHttpUtility.UrlPathEncode).
     * @param {boolean} bForFilterQuery
     * @param {boolean} bForCallback - Only escape the characters after 0x7F to workaround bug O12: 452191
     */
    UriEncoding.encodeURIComponent = function (str, bAsUrl, bForFilterQuery, bForCallback) {
        var strOut = '';
        var strByte;
        var ix = 0;
        var strEscaped = ' "%<>\'&';
        if (!str) {
            // making this more robust
            return '';
        }
        var len = str.length;
        for (ix = 0; ix < len; ix++) {
            var charCode = str.charCodeAt(ix);
            var curChar = str.charAt(ix);
            if (bAsUrl && (curChar === '#' || curChar === '?')) {
                strOut += str.substr(ix);
                break;
            }
            if (bForFilterQuery && curChar === '&') {
                strOut += curChar;
                continue;
            }
            if (charCode <= 0x7f) {
                if (bForCallback) {
                    strOut += curChar;
                }
                else {
                    if ((charCode >= 97 && charCode <= 122) ||
                        (charCode >= 65 && charCode <= 90) ||
                        (charCode >= 48 && charCode <= 57) ||
                        (bAsUrl && charCode >= 32 && charCode <= 95 && strEscaped.indexOf(curChar) < 0)) {
                        strOut += curChar;
                    }
                    else if (charCode <= 0x0f) {
                        strOut += '%0' + charCode.toString(16).toUpperCase();
                    }
                    else if (charCode <= 0x7f) {
                        strOut += '%' + charCode.toString(16).toUpperCase();
                    }
                }
            }
            else if (charCode <= 0x07ff) {
                strByte = 0xc0 | (charCode >> 6);
                strOut += '%' + strByte.toString(16).toUpperCase();
                strByte = 0x80 | (charCode & 0x003f);
                strOut += '%' + strByte.toString(16).toUpperCase();
            }
            else if ((charCode & 0xfc00) !== 0xd800) {
                strByte = 0xe0 | (charCode >> 12);
                strOut += '%' + strByte.toString(16).toUpperCase();
                strByte = 0x80 | ((charCode & 0x0fc0) >> 6); // middle 6 bits
                strOut += '%' + strByte.toString(16).toUpperCase();
                strByte = 0x80 | (charCode & 0x003f); // lower 6 bits
                strOut += '%' + strByte.toString(16).toUpperCase();
            }
            else if (ix < str.length - 1) {
                charCode = (charCode & 0x03ff) << 10; // lower 10 bits of first char
                ix++;
                var nextCharCode = str.charCodeAt(ix);
                charCode |= nextCharCode & 0x03ff; // lower 10 bits of second char
                charCode += 0x10000;
                strByte = 0xf0 | (charCode >> 18);
                strOut += '%' + strByte.toString(16).toUpperCase();
                strByte = 0x80 | ((charCode & 0x3f000) >> 12); // upper 6 bits
                strOut += '%' + strByte.toString(16).toUpperCase();
                strByte = 0x80 | ((charCode & 0x0fc0) >> 6); // middle 6 bits
                strOut += '%' + strByte.toString(16).toUpperCase();
                strByte = 0x80 | (charCode & 0x003f); // lower 6 bits
                strOut += '%' + strByte.toString(16).toUpperCase();
            }
        }
        return strOut;
    };
    /**
     * Callbacks do not work if a #bookmark is in the URL. If there is a bookmark then we need to remove it. We also need to
     * deal with the scenario where there is not a bookmark but there is an unencoded # as a part of a name/value after the '?'.
     * This is how things should work here:
     * .../foo.aspx -> .../foo.aspx (unchanged)
     * .../foo.aspx#bookmark -> .../foo.aspx (bookmark is removed)
     * .../foo.aspx#bookmark?name=value -> .../foo.aspx?name=value (bookmark is removed)
     * .../foo.aspx#bookmark?name1=value#extra1&name2=value2 -> .../foo.aspx?name1=value#extra1&name2=value2 (only the bookmark # is removed)
     * .../foo.aspx?name1=value#extra1&name2=value2 -> .../foo.aspx?name1=value#extra1&name2=value2 (unchanged)
     */
    UriEncoding.escapeUrlForCallback = function (str) {
        var iPound = str.indexOf('#');
        var iQues = str.indexOf('?');
        if (iPound > 0 && (iQues === -1 || iPound < iQues)) {
            var strNew = str.substr(0, iPound);
            if (iQues > 0) {
                strNew += str.substr(iQues); // Need to include the '?' along with the "name=value" pairs.
            }
            str = strNew;
        }
        return UriEncoding.encodeURIComponent(str, true, false, true);
    };
    /**
     * SharePoint REST processor expect single quote ' to be escaped to '' in tokens (this applies to %27 too).
     * See example for usage.
     * @example
     * "getFolderByServerRelativeUrl('"+encodeRestUriStringToken("don't know.txt")+"')" should became "getFolderByServerRelativeUrl('don''t know.txt')""
     */
    UriEncoding.encodeRestUriStringToken = function (stringToken) {
        if (stringToken) {
            stringToken = stringToken.replace(/'/g, "''");
            stringToken = stringToken.replace(/%27/g, '%27%27');
            stringToken = UriEncoding.encodeURIComponent(stringToken);
        }
        return stringToken;
    };
    return UriEncoding;
}());
/* harmony default export */ __webpack_exports__["default"] = (UriEncoding);
//# sourceMappingURL=UriEncoding.js.map

/***/ }),

/***/ "+7kh":
/*!**********************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-utilities@29.7.9_5d977624104b06c7bcaa2de974ff51f1/node_modules/@ms/odsp-utilities/lib/navigation/AddressParser.js ***!
  \**********************************************************************************************************************************************************************************/
/*! exports provided: deserializeQuery, getQueryStringFromUrl, getUrlWithoutQueryString */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deserializeQuery", function() { return deserializeQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getQueryStringFromUrl", function() { return getQueryStringFromUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUrlWithoutQueryString", function() { return getUrlWithoutQueryString; });
function deserializeQuery(paramsString) {
    var viewParams = {};
    if (paramsString) {
        var paramParts = paramsString.split('&');
        for (var i = 0; i < paramParts.length; i++) {
            var param = paramParts[i].split('=');
            // For query strings only, '+' is a valid substitute for a space, but decodeURIComponent
            // doesn't take this into account.
            if (typeof param[1] !== 'undefined') {
                param[1] = param[1].replace(/\+/g, ' ');
                viewParams[param[0]] = decodeURIComponent(param[1]);
            }
        }
    }
    return viewParams;
}
function getQueryStringFromUrl(url) {
    return url.substring(url.indexOf('?') + 1);
}
function getUrlWithoutQueryString(url) {
    return url.substring(0, url.indexOf('?'));
}
//# sourceMappingURL=AddressParser.js.map

/***/ }),

/***/ "+r/n":
/*!**************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/murmurhash@0.0.2/node_modules/murmurhash/murmurhash.js ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function(){
  var _global = this;

  /**
   * JS Implementation of MurmurHash2
   *
   * @author <a href="mailto:gary.court@gmail.com">Gary Court</a>
   * @see http://github.com/garycourt/murmurhash-js
   * @author <a href="mailto:aappleby@gmail.com">Austin Appleby</a>
   * @see http://sites.google.com/site/murmurhash/
   *
   * @param {string} str ASCII only
   * @param {number} seed Positive integer only
   * @return {number} 32-bit positive integer hash
   */
  function MurmurHashV2(str, seed) {
    var
      l = str.length,
      h = seed ^ l,
      i = 0,
      k;

    while (l >= 4) {
      k =
        ((str.charCodeAt(i) & 0xff)) |
        ((str.charCodeAt(++i) & 0xff) << 8) |
        ((str.charCodeAt(++i) & 0xff) << 16) |
        ((str.charCodeAt(++i) & 0xff) << 24);

      k = (((k & 0xffff) * 0x5bd1e995) + ((((k >>> 16) * 0x5bd1e995) & 0xffff) << 16));
      k ^= k >>> 24;
      k = (((k & 0xffff) * 0x5bd1e995) + ((((k >>> 16) * 0x5bd1e995) & 0xffff) << 16));

    h = (((h & 0xffff) * 0x5bd1e995) + ((((h >>> 16) * 0x5bd1e995) & 0xffff) << 16)) ^ k;

      l -= 4;
      ++i;
    }

    switch (l) {
    case 3: h ^= (str.charCodeAt(i + 2) & 0xff) << 16;
    case 2: h ^= (str.charCodeAt(i + 1) & 0xff) << 8;
    case 1: h ^= (str.charCodeAt(i) & 0xff);
            h = (((h & 0xffff) * 0x5bd1e995) + ((((h >>> 16) * 0x5bd1e995) & 0xffff) << 16));
    }

    h ^= h >>> 13;
    h = (((h & 0xffff) * 0x5bd1e995) + ((((h >>> 16) * 0x5bd1e995) & 0xffff) << 16));
    h ^= h >>> 15;

    return h >>> 0;
  };

  /**
   * JS Implementation of MurmurHash3 (r136) (as of May 20, 2011)
   *
   * @author <a href="mailto:gary.court@gmail.com">Gary Court</a>
   * @see http://github.com/garycourt/murmurhash-js
   * @author <a href="mailto:aappleby@gmail.com">Austin Appleby</a>
   * @see http://sites.google.com/site/murmurhash/
   *
   * @param {string} key ASCII only
   * @param {number} seed Positive integer only
   * @return {number} 32-bit positive integer hash
   */
  function MurmurHashV3(key, seed) {
    var remainder, bytes, h1, h1b, c1, c1b, c2, c2b, k1, i;

    remainder = key.length & 3; // key.length % 4
    bytes = key.length - remainder;
    h1 = seed;
    c1 = 0xcc9e2d51;
    c2 = 0x1b873593;
    i = 0;

    while (i < bytes) {
        k1 =
          ((key.charCodeAt(i) & 0xff)) |
          ((key.charCodeAt(++i) & 0xff) << 8) |
          ((key.charCodeAt(++i) & 0xff) << 16) |
          ((key.charCodeAt(++i) & 0xff) << 24);
      ++i;

      k1 = ((((k1 & 0xffff) * c1) + ((((k1 >>> 16) * c1) & 0xffff) << 16))) & 0xffffffff;
      k1 = (k1 << 15) | (k1 >>> 17);
      k1 = ((((k1 & 0xffff) * c2) + ((((k1 >>> 16) * c2) & 0xffff) << 16))) & 0xffffffff;

      h1 ^= k1;
          h1 = (h1 << 13) | (h1 >>> 19);
      h1b = ((((h1 & 0xffff) * 5) + ((((h1 >>> 16) * 5) & 0xffff) << 16))) & 0xffffffff;
      h1 = (((h1b & 0xffff) + 0x6b64) + ((((h1b >>> 16) + 0xe654) & 0xffff) << 16));
    }

    k1 = 0;

    switch (remainder) {
      case 3: k1 ^= (key.charCodeAt(i + 2) & 0xff) << 16;
      case 2: k1 ^= (key.charCodeAt(i + 1) & 0xff) << 8;
      case 1: k1 ^= (key.charCodeAt(i) & 0xff);

      k1 = (((k1 & 0xffff) * c1) + ((((k1 >>> 16) * c1) & 0xffff) << 16)) & 0xffffffff;
      k1 = (k1 << 15) | (k1 >>> 17);
      k1 = (((k1 & 0xffff) * c2) + ((((k1 >>> 16) * c2) & 0xffff) << 16)) & 0xffffffff;
      h1 ^= k1;
    }

    h1 ^= key.length;

    h1 ^= h1 >>> 16;
    h1 = (((h1 & 0xffff) * 0x85ebca6b) + ((((h1 >>> 16) * 0x85ebca6b) & 0xffff) << 16)) & 0xffffffff;
    h1 ^= h1 >>> 13;
    h1 = ((((h1 & 0xffff) * 0xc2b2ae35) + ((((h1 >>> 16) * 0xc2b2ae35) & 0xffff) << 16))) & 0xffffffff;
    h1 ^= h1 >>> 16;

    return h1 >>> 0;
  }

  var murmur = MurmurHashV3;
  murmur.v2 = MurmurHashV2;
  murmur.v3 = MurmurHashV3;

  if (true) {
    module.exports = murmur;
  } else { var _previousRoot; }
}());


/***/ }),

/***/ "17wl":
/*!************************!*\
  !*** external "tslib" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__17wl__;

/***/ }),

/***/ "18dJ":
/*!************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-utilities@29.7.9_5d977624104b06c7bcaa2de974ff51f1/node_modules/@ms/odsp-utilities/lib/models/store/BaseDataStore.js ***!
  \************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DataStoreCachingType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DataStoreCachingType */ "EjJ3");

// DataStore class is used for transparent caching of data in memory and/or browser storage
// - Parameter defaultCachingType defines whether you want to use browser storage for all operations
// and which type of storage - session or local
// - Parameter dataStoreKey is used to prefix every key in browser storage. Actual key for browser storage
// will be dataStoreKey + key used in setValue method.
// - If DataStore is instantiated with some type of browser caching enabled - it will test if browser storage
// is available and use it. If it's not it will fall back to in-memory cache.
// - If DataStore is instantiated from two different places with same dataStoreKey and some type of
// browser storage caching, the memory storage will be shared as well as browser storage.
var DataStore = /** @class */ (function () {
    function DataStore(dataStoreKey, defaultCachingType) {
        if (defaultCachingType === void 0) { defaultCachingType = _DataStoreCachingType__WEBPACK_IMPORTED_MODULE_0__["default"].none; }
        DataStore.init();
        this.dataStoreKey = dataStoreKey;
        this.defaultCachingType = defaultCachingType;
        if (defaultCachingType === _DataStoreCachingType__WEBPACK_IMPORTED_MODULE_0__["default"].none) {
            this.dataStore = {};
        }
        else {
            var store = DataStore._dataStore[this.dataStoreKey];
            if (store === undefined) {
                DataStore._dataStore[this.dataStoreKey] = {};
            }
            this.dataStore = DataStore._dataStore[this.dataStoreKey];
        }
    }
    DataStore.hasStorageType = function (storageType) {
        DataStore.init();
        switch (storageType) {
            case _DataStoreCachingType__WEBPACK_IMPORTED_MODULE_0__["default"].none:
                return true;
            case _DataStoreCachingType__WEBPACK_IMPORTED_MODULE_0__["default"].sharedMemory:
                return true;
            case _DataStoreCachingType__WEBPACK_IMPORTED_MODULE_0__["default"].session:
                return !!DataStore._sessionStorage;
            case _DataStoreCachingType__WEBPACK_IMPORTED_MODULE_0__["default"].local:
                return !!DataStore._localStorage;
        }
        return false;
    };
    DataStore.init = function () {
        if (DataStore._initialized) {
            return;
        }
        // Need a try/catch since window.localStorage can throw.
        try {
            if ('localStorage' in window && window.localStorage && DataStore.testStorage(window.localStorage)) {
                DataStore._localStorage = window.localStorage;
            }
        }
        catch (exUsingLocalStorage) {
            // do nothing
        }
        try {
            if ('sessionStorage' in window &&
                window.sessionStorage &&
                DataStore.testStorage(window.sessionStorage)) {
                DataStore._sessionStorage = window.sessionStorage;
            }
        }
        catch (exUsingSessionStorage) {
            // do nothing
        }
        // Fallback logic
        // tslint:disable-next-line:triple-equals
        if (DataStore._localStorage == null) {
            DataStore._localStorage = DataStore._sessionStorage;
        }
        DataStore._initialized = true;
    };
    /** Need to check whether the value in localStorage is of the correct type.
     * In Private Browsing in Safari, for example, localStorage is accessible,
     * but all of the non-built-in properties return undefined, and setting
     * such a property causes an exception.
     */
    DataStore.testStorage = function (storage) {
        var _testKey = 'BrowserStorageTest';
        var _testValue = '1';
        var result = false;
        try {
            storage.setItem(_testKey, _testValue);
            if (storage.getItem(_testKey) === _testValue) {
                result = true;
            }
            storage.removeItem(_testKey);
        }
        catch (e) {
            /* no-op, return false */
        }
        return result;
    };
    DataStore.prototype.setValue = function (key, value, cachingTypeOverride, normalizeKey) {
        if (normalizeKey === void 0) { normalizeKey = true; }
        key = normalizeKey ? this.normalizeKey(key) : key;
        this.dataStore[key] = value;
        var storage = this.getStorage(cachingTypeOverride);
        if (storage) {
            try {
                var objectsFound = [];
                var s = JSON.stringify(value, function (key, value) {
                    if (typeof value === 'object' && value !== null) {
                        if (objectsFound.indexOf(value) !== -1) {
                            // discard the key if circular dependency was found
                            return;
                        }
                        // Otherwise store value in the cache
                        objectsFound.push(value);
                    }
                    return value;
                });
                // empty cache
                objectsFound = null;
                storage.setItem(this.dataStoreKey + key, s);
            }
            catch (e) {
                // do nothing
            }
        }
    };
    DataStore.prototype.getValue = function (key, cachingTypeOverride, normalizeKey, forceFetchFromBrowserStorage) {
        if (normalizeKey === void 0) { normalizeKey = true; }
        if (forceFetchFromBrowserStorage === void 0) { forceFetchFromBrowserStorage = false; }
        key = normalizeKey ? this.normalizeKey(key) : key;
        var value = this.dataStore[key];
        var storage = this.getStorage(cachingTypeOverride);
        if ((value === undefined || forceFetchFromBrowserStorage) && storage) {
            var s = storage.getItem(this.dataStoreKey + key);
            if (s) {
                try {
                    value = JSON.parse(s);
                    this.dataStore[key] = value;
                }
                catch (e) {
                    value = undefined;
                }
            }
        }
        return value;
    };
    DataStore.prototype.remove = function (key, cachingTypeOverride, normalizeKey) {
        if (normalizeKey === void 0) { normalizeKey = true; }
        key = normalizeKey ? this.normalizeKey(key) : key;
        var storage = this.getStorage(cachingTypeOverride);
        if (storage) {
            storage.removeItem(this.dataStoreKey + key);
        }
        delete this.dataStore[key];
    };
    DataStore.prototype.getStorage = function (cachingTypeOverride) {
        var cachingType = cachingTypeOverride ? cachingTypeOverride : this.defaultCachingType;
        switch (cachingType) {
            case _DataStoreCachingType__WEBPACK_IMPORTED_MODULE_0__["default"].none:
                return null;
            case _DataStoreCachingType__WEBPACK_IMPORTED_MODULE_0__["default"].sharedMemory:
                return null;
            case _DataStoreCachingType__WEBPACK_IMPORTED_MODULE_0__["default"].session:
                return DataStore._sessionStorage;
            case _DataStoreCachingType__WEBPACK_IMPORTED_MODULE_0__["default"].local:
                return DataStore._localStorage;
        }
        return null;
    };
    DataStore.prototype.normalizeKey = function (key) {
        return (key && key.toLowerCase()) || '';
    };
    DataStore._sessionStorage = null;
    DataStore._localStorage = null;
    DataStore._dataStore = {};
    DataStore._initialized = false;
    return DataStore;
}());
/* harmony default export */ __webpack_exports__["default"] = (DataStore);
//# sourceMappingURL=BaseDataStore.js.map

/***/ }),

/***/ "1hLk":
/*!***********************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-utilities@29.7.9_5d977624104b06c7bcaa2de974ff51f1/node_modules/@ms/odsp-utilities/lib/locale/Locale.js ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// OneDrive:IgnoreCodeCoverage
var Locale = /** @class */ (function () {
    function Locale() {
    }
    /**
     * Sets the locale to be used by the app.
     * @param {string} language - The language used to render the app.
     */
    Locale.invalidate = function (language) {
        if (typeof window === 'undefined') {
            return; // This check has been added if the code is being executed in service worker.
        }
        Locale.isRightToLeft = window.document && document.documentElement.getAttribute('dir') === 'rtl';
        Locale.safeLeft = Locale.isRightToLeft ? 'right' : 'left';
        Locale.safeRight = Locale.isRightToLeft ? 'left' : 'right';
        /** Robert Chen has the detailed explanation here : The most magic thing here is that OneDrive page and teamsite page has exactly the same line of code with regard to html tag Lang attribute.
         * <SharePoint:SPHtmlTag lang="<%$Resources:wss,language_value%>" dir="<%$Resources:wss,multipages_direction_dir_value%>" ID="SPHtmlTag" runat="server">
         * And in teamsite doclib, this lang gets executed to the current user locale. And that is actually already a magic------What happens here is the in order to get the doclib page in ContentDB, we had a standard MondoSproc call which gets the page and the SPWeb. In constructing the web, SP *  * code has smart logic to set Thread.CurrentThread.CurrentUICulture to match the MUI language! And with that magic, ="<%$Resources:wss,language_value%> actually gets sets properly to the user language, not the pre-defined web language.
         * For OneDrive.aspx which lives inside _layouts folder, the order of code execution changes. We must have executed this line of ASPX code first ="<%$Resources:wss,language_value%> before SPWeb was opened and did the magic to set Thread.CurrentThread.CurrentUICulture.
         * So the Thread.CurrentThread.CurrentUICulture affecting ="<%$Resources:wss,language_value%> with SPWeb magic end up not working in Onedrive.aspx! And there’s really nothing that we can do about it unless we rewrite the page!
         * So the conclusion is that the lang attribute is by design (of implementation) different from the regular team site pages which live inside content db.
         */
        language =
            language || (window['_spPageContextInfo'] && window['_spPageContextInfo'].currentUICultureName);
        // fallback of xml:lang for IE9
        Locale.language =
            language ||
                (window.document &&
                    (document.documentElement.getAttribute('lang') ||
                        document.documentElement.getAttribute('xml:lang'))) ||
                'en-us';
    };
    return Locale;
}());
Locale.invalidate();
/* harmony default export */ __webpack_exports__["default"] = (Locale);
//# sourceMappingURL=Locale.js.map

/***/ }),

/***/ "2h7V":
/*!***********************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/utilities-strings@1.0.1/node_modules/@ms/utilities-strings/lib/index.js ***!
  \***********************************************************************************************************************************/
/*! exports provided: format, formatToArray, doesStringEndWith, doesStringStartWith, rightPad, leftPad, findOneOf, equalsCaseInsensitive, capitalize, decapitalize, pluralSelect, getLocalizedCountValue, formatWithLocalizedCountValue, repeat, padData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "format", function() { return format; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatToArray", function() { return formatToArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doesStringEndWith", function() { return doesStringEndWith; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doesStringStartWith", function() { return doesStringStartWith; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rightPad", function() { return rightPad; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "leftPad", function() { return leftPad; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findOneOf", function() { return findOneOf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "equalsCaseInsensitive", function() { return equalsCaseInsensitive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "capitalize", function() { return capitalize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "decapitalize", function() { return decapitalize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pluralSelect", function() { return pluralSelect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLocalizedCountValue", function() { return getLocalizedCountValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatWithLocalizedCountValue", function() { return formatWithLocalizedCountValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "repeat", function() { return repeat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "padData", function() { return padData; });
// Regex that finds {#} so it can be replaced by the arguments in string format
var FORMAT_REGEX = /\{(\d+)\}/g;
/**
 * String Format is like C# string format. Use template strings instead unless the string is dynamic.
 * Calling format on a string with less arguments than specified in the format will substitute 'undefined'
 *
 * @example
 * ```
 * expect('hello {0}!'.format('mike')).toEqual('hello mike!')
 * ```
 *
 * @public
 */
// tslint:disable-next-line:no-any
function format(template) {
    var values = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        values[_i - 1] = arguments[_i];
    }
    return template.replace(FORMAT_REGEX, function (match, valueIndex) {
        var value = values[Number(valueIndex)];
        // Checking null for consistency with old behavior, all other values pass through.
        return value === null ? '' : "" + value;
    });
}
/**
 * Returns an array made of replacement values and string literal values, in order.
 * @param template - Base string with replacement tokens.
 * @param values - Array of values to insert into corresponding replacement token.
 *
 * @public
 */
// tslint:disable-next-line:no-any
function formatToArray(template) {
    var values = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        values[_i - 1] = arguments[_i];
    }
    var parts = [];
    var regexResult;
    var lastIndex = 0;
    while ((regexResult = FORMAT_REGEX.exec(template))) {
        // The full string of characters matched.
        var match = regexResult[0];
        // Get replacement value.
        var valueIndex = parseInt(match.replace(/\{|\}+/g, ''), 10);
        var replacementValue = values[valueIndex];
        // Get text between tokens and add to our array.
        if (regexResult.index > lastIndex) {
            parts.push(template.substring(lastIndex, regexResult.index));
        }
        // Save last index.
        lastIndex = FORMAT_REGEX.lastIndex;
        // Add replacement value to our array.
        parts.push(replacementValue);
    }
    // Grab any remaining text after the last match.
    if (lastIndex !== template.length) {
        parts.push(template.substring(lastIndex, template.length));
    }
    return parts;
}
/**
 * Returns true if s ends with suffix.
 *
 * @public
 */
function doesStringEndWith(s, suffix) {
    return s.substr(s.length - suffix.length) === suffix;
}
/**
 * Returns true if s starts with prefix.
 *
 * @public
 */
function doesStringStartWith(s, prefix) {
    return s.substr(0, prefix.length) === prefix;
}
/**
 * Return a string of the given length, using 0s to pad in from the right.
 *
 * @public
 */
function rightPad(data, length) {
    var result = data.toString();
    while (result.length < length) {
        result = result + "0";
    }
    return result;
}
/**
 * Return a string of the given length, using 0s to pad in from the left.
 *
 * @public
 */
function leftPad(data, length) {
    var result = data.toString();
    while (result.length < length) {
        result = "0" + result;
    }
    return result;
}
/**
 * Look for any of the chars in searchValues in str.
 * Returns the index of the char found or -1 if nothing is found.
 *
 * @public
 */
function findOneOf(str, searchValues) {
    for (var idx = 0; idx < str.length; idx++) {
        if (searchValues.indexOf(str[idx]) >= 0) {
            return idx;
        }
    }
    return -1; // none of the searchValues exist in string
}
/**
 * Determines if two strings are equal when both converted to uppercase.
 *
 * @public
 */
function equalsCaseInsensitive(a, b) {
    if (a && b) {
        return a.toUpperCase() === b.toUpperCase();
    }
    return a === b;
}
/**
 * Capitalizes the first letter of str.
 *
 * @public
 */
function capitalize(str) {
    if (str) {
        return str[0].toUpperCase() + str.substr(1);
    }
    return str;
}
/**
 * De-capitalizes the first letter of str.
 *
 * @public
 */
function decapitalize(str) {
    if (str) {
        return str[0].toLowerCase() + str.substr(1);
    }
    return str;
}
/**
 * Selects a string based on plurality.
 *
 * @param count - The value to base selection on
 * @param single - The string to select when it's a singular value
 * @param multiple - The string to select when it's a plural value
 *
 * @deprecated This method does NOT give accurate results for many languages!!
 *             Use getLocalizedCountValue instead.
 *
 * @public
 */
function pluralSelect(count, single, plural) {
    return count === 1 ? single : plural;
}
/**
 * Given a specially formatted localized text, a set of intervals, and a count,
 * return the localized text which corresponds to the first interval the
 * count falls into.
 *
 * Please see https://microsoft.sharepoint.com/teams/OISGPortal/LocKits/Lockit%20Instructions/SharePoint%20Core%20Localization.aspx
 * for more details.
 *
 * @param locText - || deliminated blocks of localized texts, representing
 *  the various singular and plural forms of the string  being localized
 * @param intervals - || deliminated blocks of numeric intervals, defining the ranges
 *  of that interval. Has special support for , * and -.
 * @param count - The count used to determine which interval to return.
 *
 * @returns The localized block which corresponds to the first interval the count falls into.
 *
 * @example
 * StringHelper.getLocalizedCountValue('items||item||items', '0||1||2-', 0)
 *   returns items
 * StringHelper.getLocalizedCountValue('items||item||items', '0||1||2-', 1)
 *   returns item
 * StringHelper.getLocalizedCountValue('items||item||items', '0||1||2-', 2)
 *   returns items
 *
 * @public
 */
function getLocalizedCountValue(locText, intervals, count) {
    count = Number(count); // defensively make sure count is a number
    // !!!IMPORTANT!!! changes in this function need to be in sync with
    // the methods with the same name located at:
    // otools/inc/sts/stsom/utilities/SPLocUtility.cs
    // sts/Client/Script/Init/LocUtility.cs
    if (locText === undefined || intervals === undefined || count === undefined) {
        return '';
    }
    var ret = '';
    var locIndex = -1;
    var intervalsArray = intervals.split('||');
    for (var i = 0, length_1 = intervalsArray.length; i < length_1; i++) {
        var interval = intervalsArray[i];
        if (!interval) {
            continue;
        }
        var subIntervalsArray = interval.split(',');
        for (var _i = 0, subIntervalsArray_1 = subIntervalsArray; _i < subIntervalsArray_1.length; _i++) {
            var subInterval = subIntervalsArray_1[_i];
            if (!subInterval) {
                continue;
            }
            // there are three possiblities, wildcard, interval, or number
            if (isNaN(Number(subInterval))) {
                if (subInterval.indexOf('-') !== -1) {
                    // if it's an interval the format is Number-Number
                    var range = subInterval.split('-');
                    if (range.length !== 2) {
                        continue;
                    }
                    var min = void 0;
                    var max = void 0;
                    if (range[0] === '') {
                        min = 0;
                    }
                    else {
                        if (isNaN(Number(range[0]))) {
                            continue;
                        }
                        else {
                            min = parseInt(range[0], 10);
                        }
                    }
                    if (count >= min) {
                        if (range[1] === '') {
                            locIndex = i;
                            break;
                        }
                        else {
                            if (isNaN(Number(range[1]))) {
                                continue;
                            }
                            else {
                                max = parseInt(range[1], 10);
                            }
                        }
                        if (count <= max) {
                            locIndex = i;
                            break;
                        }
                    }
                }
                else if (subInterval.indexOf('*') !== -1) {
                    // Wildcard
                    var regexExpr = subInterval.trim().replace(/\*/g, '[0-9]*');
                    var regex = new RegExp("^" + regexExpr + "$");
                    if (regex.test(count.toString())) {
                        locIndex = i;
                        break;
                    }
                }
            }
            else {
                var exactNumber = parseInt(subInterval, 10);
                if (count === exactNumber) {
                    locIndex = i;
                    break;
                }
            }
        }
        if (locIndex !== -1) {
            break;
        }
    }
    if (locIndex !== -1) {
        var locValues = locText.split('||');
        if (locValues[locIndex]) {
            ret = locValues[locIndex];
        }
    }
    return ret;
}
/**
 * Format the locText with the localized count value.
 *
 * @public
 */
function formatWithLocalizedCountValue(locText, intervals, count) {
    var template = getLocalizedCountValue(locText, intervals, count);
    var result = format(template || '', count.toString());
    return result;
}
/**
 * Return a string repeated n number of times.
 *
 * @public
 */
function repeat(str, n) {
    var result = '';
    if (!str || n < 1 || n > Number.MAX_SAFE_INTEGER) {
        return result;
    }
    do {
        if (n % 2) {
            result += str;
        }
        n = Math.floor(n / 2);
        if (n) {
            str += str;
        }
    } while (n);
    return result;
}
/**
 * Return a string of the given length, using pad string to pad in from the right.
 *
 * @public
 */
function padData(data, targetLength, padString, right) {
    if (right === void 0) { right = false; }
    if (data.length > targetLength) {
        return String(data);
    }
    padString = !!padString ? padString : ' ';
    targetLength = targetLength - data.length;
    if (targetLength > padString.length) {
        padString += repeat("" + padString, targetLength / padString.length);
    }
    padString = padString.slice(0, targetLength);
    return right ? "" + data + padString : "" + padString + data;
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "3l1C":
/*!*******************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/utilities-objects@1.0.0/node_modules/@ms/utilities-objects/lib/safeSerialize.js ***!
  \*******************************************************************************************************************************************/
/*! exports provided: safeSerialize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "safeSerialize", function() { return safeSerialize; });
/**
 * This is a function you can call to safely serialize anything to JSON.
 * The built-in JSON.stringify() throws an exception for circular references and can't handle
 * many built-ins such as HTMLElements and the global window object.
 */
function safeSerialize(obj) {
    var str;
    try {
        var seenObjects_1 = [];
        str = JSON.stringify(obj, function (key, value) {
            if (value === window) {
                return '[window]';
            }
            else if (value instanceof HTMLElement) {
                return '[HTMLElement]';
            }
            else if (typeof value === 'function') {
                return '[function]';
            }
            else if (typeof value === 'object') {
                if (value === null) {
                    return value;
                }
                else if (seenObjects_1.indexOf(value) === -1) {
                    seenObjects_1.push(value);
                    return value;
                }
                else {
                    return '[circular]';
                }
            }
            else {
                return value;
            }
        });
    }
    catch (err) {
        // Note: we make this be a JSON string, so that consumers
        // can always call JSON.parse.
        str = JSON.stringify('[object]');
    }
    return str;
}
//# sourceMappingURL=safeSerialize.js.map

/***/ }),

/***/ "4nNU":
/*!******************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/telemetry-manager@1.1.3/node_modules/@ms/telemetry-manager/lib/events/CaughtError.event.js ***!
  \******************************************************************************************************************************************************/
/*! exports provided: CaughtError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CaughtError", function() { return CaughtError; });
/* harmony import */ var _SingleEventBase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../SingleEventBase */ "yb4E");
/* harmony import */ var _Trace_event__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Trace.event */ "K5xv");
// OneDrive:IgnoreCodeCoverage


var CaughtError = Object(_SingleEventBase__WEBPACK_IMPORTED_MODULE_0__["createSingleEvent"])({
    eventName: 'CaughtError,Trace,',
    shortEventName: 'CaughtError',
    critical: true,
    requiresParent: false
}, {
    stack: 1 /* String */,
    extraData: 4 /* Object */,
    privacyClassification: {
        isPrefixingDisabled: true,
        type: 1 /* String */
    }
}, _Trace_event__WEBPACK_IMPORTED_MODULE_1__["Trace"]).withData({ privacyClassification: "requiredService" /* requiredService */ });
//# sourceMappingURL=CaughtError.event.js.map

/***/ }),

/***/ "5JHQ":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-utilities@29.7.9_5d977624104b06c7bcaa2de974ff51f1/node_modules/@ms/odsp-utilities/lib/logging/events/ExperimentTypeEnum.js ***!
  \*******************************************************************************************************************************************************************************************/
/*! exports provided: ExperimentTypeEnum */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExperimentTypeEnum", function() { return ExperimentTypeEnum; });
var ExperimentTypeEnum;
(function (ExperimentTypeEnum) {
    ExperimentTypeEnum[ExperimentTypeEnum["Unknown"] = 0] = "Unknown";
    ExperimentTypeEnum[ExperimentTypeEnum["User"] = 1] = "User";
    ExperimentTypeEnum[ExperimentTypeEnum["Site"] = 2] = "Site";
})(ExperimentTypeEnum || (ExperimentTypeEnum = {}));
//# sourceMappingURL=ExperimentTypeEnum.js.map

/***/ }),

/***/ "689m":
/*!*************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-utilities@29.7.9_5d977624104b06c7bcaa2de974ff51f1/node_modules/@ms/odsp-utilities/lib/logging/events/Beacon.event.js ***!
  \*************************************************************************************************************************************************************************************/
/*! exports provided: Beacon, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Beacon", function() { return Beacon; });
/* harmony import */ var _PairedEventBase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../PairedEventBase */ "g/c1");
// OneDrive:IgnoreCodeCoverage

var Beacon = Object(_PairedEventBase__WEBPACK_IMPORTED_MODULE_0__["createPairedEvent"])({
    eventName: 'Beacon,',
    shortEventName: 'Beacon',
    requiresParent: false
}, {
    name: 1 /* String */,
    status: 1 /* String */,
    success: 3 /* Boolean */,
    retryCount: 2 /* Number */,
    totalRetries: 2 /* Number */,
    eventCount: 2 /* Number */
});
/* harmony default export */ __webpack_exports__["default"] = (Beacon);
//# sourceMappingURL=Beacon.event.js.map

/***/ }),

/***/ "6Tvd":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/telemetry-addon-aria@1.1.3_@uifabric+utilities@7.33.2/node_modules/@ms/telemetry-addon-aria/lib/decorators/withPrivacyClassification.js ***!
  \***************************************************************************************************************************************************************************************************/
/*! exports provided: withPrivacyClassification */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withPrivacyClassification", function() { return withPrivacyClassification; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);

/**
 * Decorator for an `AriaTelemetryHandler` which ensures all events have a specified `privacyClassification` field
 * before being recorded to Aria.
 * @internal
 */
function withPrivacyClassification(privacyClassification) {
    return function (create) {
        var getPrivacyClassification = typeof privacyClassification === 'function' ? privacyClassification : function () { return privacyClassification; };
        return /** @class */ (function (_super) {
            Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(WithPrivacyClassification, _super);
            function WithPrivacyClassification(params) {
                var _this = this;
                var baseOnLogEvent = params.onLogEvent;
                _this = _super.call(this, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, params), { onLogEvent: function (clonedEvent) {
                        var event = baseOnLogEvent ? baseOnLogEvent(clonedEvent) : clonedEvent;
                        if (event.data) {
                            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, event), { data: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, event.data), { privacyClassification: getPrivacyClassification(event) }) });
                        }
                    } })) || this;
                return _this;
            }
            return WithPrivacyClassification;
        }(create));
    };
}
//# sourceMappingURL=withPrivacyClassification.js.map

/***/ }),

/***/ "6e34":
/*!**********************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/utilities-error@1.0.0/node_modules/@ms/utilities-error/lib/ApiError.js ***!
  \**********************************************************************************************************************************/
/*! exports provided: ApiError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiError", function() { return ApiError; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _CustomError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CustomError */ "unYt");


/**
 * Custom error base class for the common scenario of generic errors that should be reported in
 * Quality of Service metrics.
 * @public
 */
var ApiError = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ApiError, _super);
    function ApiError(props) {
        var _this = _super.call(this, props) || this;
        _this.name = 'ApiError';
        var innerError = props.innerError;
        var innerErrorAsApiError = innerError ? innerError : undefined;
        var errorData = innerErrorAsApiError
            ? Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, (typeof innerErrorAsApiError.correlationId === 'string'
                ? { correlationId: innerErrorAsApiError.correlationId }
                : {})), (typeof innerErrorAsApiError.isExpected === 'boolean'
                ? { isExpected: innerErrorAsApiError.isExpected }
                : {})), (typeof innerErrorAsApiError.name === 'string' ? { code: innerErrorAsApiError.name } : {})), (typeof innerErrorAsApiError.code === 'string' ? { code: innerErrorAsApiError.code } : {})), (typeof innerErrorAsApiError.extraData === 'object'
                ? { extraData: innerErrorAsApiError.extraData }
                : {})) : {};
        var _a = props.correlationId, correlationId = _a === void 0 ? errorData.correlationId : _a, _b = props.isExpected, isExpected = _b === void 0 ? errorData.isExpected : _b, extraData = props.extraData;
        _this.correlationId = correlationId;
        _this.isExpected = !!isExpected;
        _this.code = props.code || errorData.code || '';
        _this.extraData = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, (errorData.extraData || {})), (extraData || {}));
        return _this;
    }
    return ApiError;
}(_CustomError__WEBPACK_IMPORTED_MODULE_1__["CustomError"]));

//# sourceMappingURL=ApiError.js.map

/***/ }),

/***/ "70sN":
/*!******************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-utilities@29.7.9_5d977624104b06c7bcaa2de974ff51f1/node_modules/@ms/odsp-utilities/lib/logging/ABExperiment.js ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: TargetType, ABExpHash, EXPERIMENTS_WITH_V1_HASHING, ABExperiment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TargetType", function() { return TargetType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ABExpHash", function() { return ABExpHash; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EXPERIMENTS_WITH_V1_HASHING", function() { return EXPERIMENTS_WITH_V1_HASHING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ABExperiment", function() { return ABExperiment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _events_Engagement_event__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./events/Engagement.event */ "cDPE");
/* harmony import */ var _events_Experiment_event__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./events/Experiment.event */ "vqMB");
/* harmony import */ var _events_ExperimentTypeEnum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./events/ExperimentTypeEnum */ "5JHQ");
/* harmony import */ var _killswitch_Killswitch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../killswitch/Killswitch */ "QUgr");
/* harmony import */ var _navigation_AddressParser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../navigation/AddressParser */ "+7kh");
/* harmony import */ var _ErrorHelper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ErrorHelper */ "lmjA");
/* harmony import */ var _features_FeatureOverrides__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../features/FeatureOverrides */ "iVgB");
/* harmony import */ var murmurhash__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! murmurhash */ "+r/n");
/* harmony import */ var murmurhash__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(murmurhash__WEBPACK_IMPORTED_MODULE_8__);
// OneDrive:IgnoreCodeCoverage









/**
 * Enum for the types of targets that can be used to run an experiment.
 * Only the values of user (default) or site should be used. Other types are maintained
 * for backwards compatibility.
 */
var TargetType;
(function (TargetType) {
    TargetType[TargetType["user"] = 1] = "user";
    TargetType[TargetType["tenant"] = 2] = "tenant";
    TargetType[TargetType["farm"] = 3] = "farm";
    TargetType[TargetType["site"] = 4] = "site";
})(TargetType || (TargetType = {}));
/**
 * Enum for the types of algorithms used for assignment. Only v2 should be used for all new experiments.
 */
var ABExpHash;
(function (ABExpHash) {
    /**
     * Original implementation using DJB2 hash, and using user or site ID, farm label and site subscription ID as hash input.
     * No new experiments should be created using this hash implementation.
     */
    ABExpHash[ABExpHash["v1"] = 1] = "v1";
    /** New implementation using Murmur hash, and only user or site id as hash input. All new experiments should use this hash function. */
    ABExpHash[ABExpHash["v2"] = 2] = "v2";
})(ABExpHash || (ABExpHash = {}));
var EXPERIMENTS_WITH_V1_HASHING = [
    'ChangeFlowToAutomate2',
    'DocLibServiceWorkerExperimentV2',
    'FileHoverCardAssign',
    'flowOdbCommandBarCoachmarkExperiment',
    'flowOdbCommandBarCoachmarkExperiment2',
    'flowRemindMeCoachmarkExperiment',
    'flowRemindMeCoachmarkExperiment2',
    'flowRequestSignOffCoachmarkExperiment2',
    'FluentLightBoxExperiment',
    'NewCreateSiteEntryPointExperiment'
];
/**
 * This class will be used for AB Testing type of experiments.
 *
 * You can force a single experiment on or off using query params:
 *   `enableExp=MyExperimentName` or `disableExp=MyExperimentName`
 *
 * (Note: even if an experiment is forced on/off, the actual experiment state for the given target
 * will be logged, rather than the forced state.)
 */
var ABExperiment = /** @class */ (function () {
    /**
     * @param experimentData The data for the experiment. e.g.
     * ```
     * { name: "ExperimentName", startData: "01/01/2018", version: ABExpHash.v2 }.
     * ```
     * Note: property `name` should only contain alphanumeric characters (no spaces or other
     * special characters). Property `version` must be specified as `ABExpHash.v2` for all new experiments.
     * @param aaToABFeature If provided, the experiment will initially run as an A/A experiment
     * under the given `name` plus "AA" at the end (e.g. "MyExperimentAA"). When the feature
     * is enabled, the experiment will convert to an A/B experiment using the original `name`.
     * (In an "A/A experiment," data is logged to help ensure everything is working correctly, but
     * everyone gets the old experience.)
     *
     * @example
     * // set the experiment data
     * let newMenuExperimentData: IABExperimentData = { name: "NewMenuExperiment", startDate: "2019/06/01", version: ABExpHash.v2 };
     * // create the experiment object
     * let newMenuExperiment: ABExperiment = new ABExperiment(newMenuExperimentData);
     */
    function ABExperiment(experimentData, aaToABFeature) {
        var originalName = experimentData.name;
        var isAAExperiment = aaToABFeature && !_features_FeatureOverrides__WEBPACK_IMPORTED_MODULE_7__["default"].isFeatureEnabled(aaToABFeature);
        if (!_killswitch_Killswitch__WEBPACK_IMPORTED_MODULE_4__["Killswitch"].isActivated('ecfe2fe1-07c6-4117-98d8-27582d0384f7', '10/25/2018') &&
            !this._isValidName(experimentData.name)) {
            _ErrorHelper__WEBPACK_IMPORTED_MODULE_6__["default"].log("Experiment name '" + experimentData.name + "' is invalid.");
        }
        var hashVersion = EXPERIMENTS_WITH_V1_HASHING.indexOf(experimentData.name) > -1 ? ABExpHash.v1 : ABExpHash.v2;
        this._experimentData = experimentData = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ segmentPopulation: 0.5, targetType: TargetType.user, version: hashVersion }, experimentData);
        if (isAAExperiment) {
            experimentData.name += 'AA';
        }
        this._isOn = false;
        if (!ABExperiment._pageContext) {
            // log that the App that wants to do experiments
            // does not have host settings and quit doing the experiment checks
            _events_Engagement_event__WEBPACK_IMPORTED_MODULE_1__["Engagement"].logData({ name: this._experimentData.name + '.Experiment.HostSettingsMissing' });
        }
        else {
            // set the isOn flag based on the target type
            // if it ever reaches the default then return false
            switch (this._experimentData.targetType) {
                case TargetType.user:
                    this._isOn = this._isUserExperimentOn();
                    break;
                case TargetType.tenant:
                    this._isOn = this._isTenantExperimentOn();
                    break;
                case TargetType.farm:
                    this._isOn = this._isFarmExperimentOn();
                    break;
                case TargetType.site:
                    this._isOn = this._isSiteExperimentOn();
                    break;
            }
        }
        // If we're in A/A experiment stage, everyone gets the old experience
        // (the checks above are still needed so we log which population segment the target is in)
        if (isAAExperiment) {
            this._isOn = false;
        }
        // Check whether the experiment has been forced on or off
        // (do this after the checks above so it doesn't affect logging)
        var viewParams = Object(_navigation_AddressParser__WEBPACK_IMPORTED_MODULE_5__["deserializeQuery"])((window.location.search || '').substr(1));
        var enabledExps = (viewParams['enableExp'] || '').split(',');
        var disabledExps = (viewParams['disableExp'] || '').split(',');
        if (enabledExps.indexOf(originalName) !== -1) {
            this._isOn = true;
        }
        else if (disabledExps.indexOf(originalName) !== -1) {
            this._isOn = false;
        }
    }
    /**
     * Initializes ABExperiment with the pageContext.
     * @param pageContext The _spPageContextInfo of the app where is experiment is running.
     */
    ABExperiment.init = function (pageContext) {
        ABExperiment._pageContext = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, pageContext), { userLoginName: pageContext.userLoginName || 'missing_user', siteSubscriptionId: pageContext.siteSubscriptionId || 'missing_tenant', farmLabel: pageContext.farmLabel || 'missing_farm', siteId: pageContext.siteId || 'missing_site' });
    };
    /** @deprecated Please use `init` */
    ABExperiment.Init = function (pageContext) {
        ABExperiment.init(pageContext);
    };
    /**
     * Returns the experiment data to be used for logging purposes.
     */
    ABExperiment.prototype.getExperimentData = function () {
        return this._experimentData;
    };
    /**
     * Checks if the current target is selected to be part of the experiment.
     */
    ABExperiment.prototype.isOn = function () {
        return this._isOn;
    };
    /**
     * Checks if the current target is selected to be part of the experiment.
     * @deprecated Use `isOn`
     */
    ABExperiment.prototype.IsExperimentOn = function () {
        return this._isOn;
    };
    /**
     * Checks if the current user is being selected to be part of the experiment.
     */
    ABExperiment.prototype._isUserExperimentOn = function () {
        // in case there are no host settings default to no experiments
        var pageContext = ABExperiment._pageContext;
        if (!pageContext) {
            return false;
        }
        var targetToken = '';
        var _a = this._experimentData, experimentName = _a.name, version = _a.version;
        if (version === ABExpHash.v1) {
            targetToken =
                experimentName +
                    '_' +
                    pageContext.userLoginName +
                    '_' +
                    pageContext.siteSubscriptionId +
                    '_' +
                    pageContext.farmLabel;
        }
        else if (version === ABExpHash.v2) {
            targetToken = experimentName + pageContext.userLoginName;
        }
        return this._isExperimentOn(targetToken);
    };
    /**
     * Checks if the current tenant is being selected to be part of the experiment.
     */
    ABExperiment.prototype._isTenantExperimentOn = function () {
        // in case there are no settings default to no experiment path
        var pageContext = ABExperiment._pageContext;
        if (!pageContext) {
            return false;
        }
        var targetToken = '';
        var _a = this._experimentData, experimentName = _a.name, version = _a.version;
        if (version === ABExpHash.v1) {
            targetToken = experimentName + '_' + pageContext.siteSubscriptionId + '_' + pageContext.farmLabel;
        }
        else if (version === ABExpHash.v2) {
            targetToken = experimentName + pageContext.siteSubscriptionId;
        }
        return this._isExperimentOn(targetToken);
    };
    /**
     * Checks if the current farm is being selected to be part of the experiment.
     */
    ABExperiment.prototype._isFarmExperimentOn = function () {
        // in case there are no settings default to no experiment path
        var pageContext = ABExperiment._pageContext;
        if (!pageContext) {
            return false;
        }
        var targetToken = '';
        var _a = this._experimentData, experimentName = _a.name, version = _a.version;
        if (version === ABExpHash.v1) {
            targetToken =
                experimentName +
                    '_' +
                    this._getSiteId() +
                    '_' +
                    pageContext.siteSubscriptionId +
                    '_' +
                    pageContext.farmLabel;
        }
        else if (version === ABExpHash.v2) {
            targetToken = experimentName + this._getSiteId();
        }
        return this._isExperimentOn(targetToken);
    };
    /**
     * Checks if the current site in the current tenant is being selected to be part of the experiment.
     */
    ABExperiment.prototype._isSiteExperimentOn = function () {
        // in case there are no settings default to no experiment path
        var pageContext = ABExperiment._pageContext;
        if (!pageContext) {
            return false;
        }
        // build the token using siteId and SiteSubscriptionId
        // since siteId is unique inside a tenant
        var targetToken = this._experimentData.name +
            '_' +
            this._getSiteId() +
            '_' +
            pageContext.siteSubscriptionId +
            '_' +
            pageContext.farmLabel;
        return this._isExperimentOn(targetToken);
    };
    /**
     * Ensures the experiment data passed is valid. For now this means making sure the name only
     * contains alphanumeric characters (no spaces or underscores).
     *
     * @param experimentData experiment data passed to the constructor
     */
    ABExperiment.prototype._isValidName = function (experimentName) {
        return !/[^A-Za-z0-9]/.test(experimentName);
    };
    /**
     * Returns the siteId if it is passed when ABExperiment is instantiated, else
     * returns the siteId present in the page context
     */
    ABExperiment.prototype._getSiteId = function () {
        var pageContext = ABExperiment._pageContext;
        return !!this._experimentData.siteId ? this._experimentData.siteId : pageContext.siteId;
    };
    /**
     * Returns true if the curent target type is being selected to be part of the experiment.
     * @param targetToken this is the unique identfier for target.
     * @returns true if the targetToken is in the segementPopulation defined for the experiment.
     */
    ABExperiment.prototype._isExperimentOn = function (targetToken) {
        if (!targetToken) {
            return false;
        }
        // get the hash number for the specified targetToken
        var varHash = 0;
        if (this._experimentData.version === ABExpHash.v1) {
            varHash = this._getHashNumber(targetToken);
        }
        else if (this._experimentData.version === ABExpHash.v2) {
            varHash = this._getHashNumberMurmur(targetToken);
        }
        // it returns true if varHash is less than segementPopulation
        // same time, it logs experiment info
        var result = varHash <= this._experimentData.segmentPopulation;
        this._logData(result);
        return result;
    };
    /**
     * DEPRECATED: all new experiments should use `ABExpHash.v2` (see `_getHashNumberMurmur`).
     * This version of the hash function may result in biasing issues or sample ratio mismatch
     * and is maintained for backwards compatibility for preexisting experiments only.
     * Returns an unique number based on the string provided.
     * @param inputString this is the unique uber identfier for target.
     */
    ABExperiment.prototype._getHashNumber = function (inputString) {
        // in case there will be empty strings returns 1
        // this will take it to the experiment off path
        if (inputString.length === 0) {
            return 1;
        }
        var hash = 5381;
        for (var i = 0; i < inputString.length; ++i) {
            hash = (hash << 5) + hash + inputString.charCodeAt(i);
            hash = hash & hash;
        }
        hash = hash & 0xffff;
        return hash / 0xffff;
    };
    /**
     * Returns an unique number based on Murmur hash of string provided
     * @param inputString this is the unique uber identfier for target.
     */
    ABExperiment.prototype._getHashNumberMurmur = function (inputString) {
        return murmurhash__WEBPACK_IMPORTED_MODULE_8__["v3"](inputString, 1) / 0xffffffff;
    };
    /**
     * Returns experiment type based on target type set
     */
    ABExperiment.prototype._getExperimentType = function () {
        if (this._experimentData.targetType === TargetType.user) {
            return _events_ExperimentTypeEnum__WEBPACK_IMPORTED_MODULE_3__["ExperimentTypeEnum"].User;
        }
        else if (this._experimentData.targetType === TargetType.site) {
            return _events_ExperimentTypeEnum__WEBPACK_IMPORTED_MODULE_3__["ExperimentTypeEnum"].Site;
        }
        else {
            // only user and site level experiments are supported
            return _events_ExperimentTypeEnum__WEBPACK_IMPORTED_MODULE_3__["ExperimentTypeEnum"].Unknown;
        }
    };
    /**
     * Log the experiment data for testing purposes.
     */
    ABExperiment.prototype._logData = function (isOn) {
        _events_Experiment_event__WEBPACK_IMPORTED_MODULE_2__["Experiment"].logData({
            name: '',
            isInRamp: isOn,
            experiment: this._experimentData.name,
            variant: isOn.toString(),
            assignmentType: this._getExperimentType(),
            // site level experiments require logging assignment IDs because unlike user IDs, it is not automatically captured.
            assignmentId: this._experimentData.targetType === TargetType.site ? this._getSiteId() : ''
        });
    };
    return ABExperiment;
}());

//# sourceMappingURL=ABExperiment.js.map

/***/ }),

/***/ "7FgT":
/*!*****************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/telemetry-manager@1.1.3/node_modules/@ms/telemetry-manager/lib/utilities/getCustomerPromiseManager.js ***!
  \*****************************************************************************************************************************************************************/
/*! exports provided: getCustomerPromiseManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCustomerPromiseManager", function() { return getCustomerPromiseManager; });
/* harmony import */ var _Manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Manager */ "wq9f");

/**
 * @public
 * Returns dedicated telemetry manager for customer promise events
 * @return
 */
function getCustomerPromiseManager() {
    var manager = (window.CUSTOMERPROMISE_MANAGER = window.CUSTOMERPROMISE_MANAGER || Object(_Manager__WEBPACK_IMPORTED_MODULE_0__["createManager"])());
    return manager;
}
//# sourceMappingURL=getCustomerPromiseManager.js.map

/***/ }),

/***/ "7Ihg":
/*!***********************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-utilities@29.7.9_5d977624104b06c7bcaa2de974ff51f1/node_modules/@ms/odsp-utilities/lib/async/Promise.js ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: SignalPromise, CancelablePromise, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ms_utilities_async_lib_promise_CancelablePromise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ms/utilities-async/lib/promise/CancelablePromise */ "XnbY");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SignalPromise", function() { return _ms_utilities_async_lib_promise_CancelablePromise__WEBPACK_IMPORTED_MODULE_0__["SignalPromise"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CancelablePromise", function() { return _ms_utilities_async_lib_promise_CancelablePromise__WEBPACK_IMPORTED_MODULE_0__["CancelablePromise"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _ms_utilities_async_lib_promise_CancelablePromise__WEBPACK_IMPORTED_MODULE_0__["default"]; });



//# sourceMappingURL=Promise.js.map

/***/ }),

/***/ "8G1T":
/*!***************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-utilities@29.7.9_5d977624104b06c7bcaa2de974ff51f1/node_modules/@ms/odsp-utilities/lib/features/Features.js ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FeaturesBasic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FeaturesBasic */ "JB/h");

var _microServicePageContext;
var _odcRamps;
var _odcConfig;
var _expFeatures;
var _ecsRolloutsEnabled;
var _initialized = false;
function initialize() {
    var _a;
    // OneDrive.com initialization
    _microServicePageContext = window.PageContext;
    // ODC initialization
    var odcFlightInfo = window.Flight;
    _odcRamps = odcFlightInfo && odcFlightInfo.Ramps;
    _odcConfig = window.FilesConfig;
    // SP/ODB: for backward compatibility,
    // if _spPageContextInfo is still available
    // this performs the initialization of the _expFeatures.
    var flighting = window.Flighting; // Old SharePoint pages use this.
    var spPageContextInfo = window._spPageContextInfo;
    _ecsRolloutsEnabled = (_a = window.Flight) === null || _a === void 0 ? void 0 : _a.ecsRolloutsEnabled;
    if (!_expFeatures && spPageContextInfo) {
        if (!spPageContextInfo.ExpFeatures && flighting && flighting.ExpFeatures) {
            spPageContextInfo.ExpFeatures = flighting.ExpFeatures;
        }
        Features.initSPExpFeatures(spPageContextInfo.ExpFeatures);
    }
    _initialized = true;
}
var Features = /** @class */ (function () {
    function Features() {
    }
    //You should not add features here but in your own file
    /**
     * Performs the initialization of the client side features for
     * SP and ODB in scenarios where the window['_spPageContextInfo']
     * is not available.
     *
     * @param {number[]} expFeatures - The bit map of the client side features
     * usually provided by the ISPPageContext.
     *
     * @example initSPExpFeatures(pageContextInfo.ExpFeatures)
     */
    Features.initSPExpFeatures = function (expFeatures) {
        _expFeatures = expFeatures;
    };
    /**
     * This function will return true when the feature is enabled and
     * will check the proper config for SP,ODB and/or ODC to determine.
     *
     * @requires In scenarios where the window['_spPagecontextInfo'] might not exist
     * this function requires initSPExpFeatures before checing the state of ODB features.
     *
     * @param {IFeature} feature - the feature to be checked if enabled.
     * @return {boolean} - True if the feature is found active.
     */
    Features.isFeatureEnabled = function (feature) {
        // Avoid performing expensive initialization logic multiple times
        if (!_initialized) {
            initialize();
        }
        var result = !!feature.Fallback;
        var ODB = feature.ODB, ODC = feature.ODC, ECS = feature.ECS, OneDrive = feature.OneDrive;
        if (ODB !== undefined && _expFeatures) {
            result = Object(_FeaturesBasic__WEBPACK_IMPORTED_MODULE_0__["isSPFeatureEnabled"])(feature, _expFeatures);
        }
        if (ODC !== undefined && _odcConfig) {
            if (typeof ODC === 'boolean') {
                result = ODC;
            }
            else if (_odcRamps && _odcRamps[ODC]) {
                result = true;
            }
            else if (_odcConfig && _odcConfig[ODC]) {
                result = true;
            }
        }
        if (ECS !== undefined && _ecsRolloutsEnabled && _ecsRolloutsEnabled.indexOf(ECS) >= 0) {
            result = true;
        }
        if (OneDrive !== undefined && _microServicePageContext) {
            result = OneDrive;
        }
        return result;
    };
    /* This feature is always on */
    Features.On = { Fallback: true };
    /* This feature is always off */
    Features.Off = {};
    return Features;
}());
/* harmony default export */ __webpack_exports__["default"] = (Features);
//# sourceMappingURL=Features.js.map

/***/ }),

/***/ "AAls":
/*!*********************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-utilities@29.7.9_5d977624104b06c7bcaa2de974ff51f1/node_modules/@ms/odsp-utilities/lib/performance/Performance.js ***!
  \*********************************************************************************************************************************************************************************/
/*! exports provided: now, mark */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "now", function() { return now; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mark", function() { return mark; });
// OneDrive:IgnoreCodeCoverage
function now() {
    return window.performance && performance.now ? Math.round(performance.now()) : Date.now();
}
function mark(name) {
    if (window.performance && performance.mark) {
        performance.mark(name);
    }
}
//# sourceMappingURL=Performance.js.map

/***/ }),

/***/ "BY+f":
/*!*****************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-utilities@29.7.9_5d977624104b06c7bcaa2de974ff51f1/node_modules/@ms/odsp-utilities/lib/string/StringHelper.js ***!
  \*****************************************************************************************************************************************************************************/
/*! exports provided: format, formatToArray, doesStringEndWith, doesStringStartWith, rightPad, leftPad, findOneOf, equalsCaseInsensitive, capitalize, decapitalize, pluralSelect, getLocalizedCountValue, formatWithLocalizedCountValue, repeat, padData, getLocaleNumberString */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLocaleNumberString", function() { return getLocaleNumberString; });
/* harmony import */ var _locale_Locale__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../locale/Locale */ "1hLk");
/* harmony import */ var _ms_utilities_strings_lib_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ms/utilities-strings/lib/index */ "2h7V");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "format", function() { return _ms_utilities_strings_lib_index__WEBPACK_IMPORTED_MODULE_1__["format"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "formatToArray", function() { return _ms_utilities_strings_lib_index__WEBPACK_IMPORTED_MODULE_1__["formatToArray"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "doesStringEndWith", function() { return _ms_utilities_strings_lib_index__WEBPACK_IMPORTED_MODULE_1__["doesStringEndWith"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "doesStringStartWith", function() { return _ms_utilities_strings_lib_index__WEBPACK_IMPORTED_MODULE_1__["doesStringStartWith"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "rightPad", function() { return _ms_utilities_strings_lib_index__WEBPACK_IMPORTED_MODULE_1__["rightPad"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "leftPad", function() { return _ms_utilities_strings_lib_index__WEBPACK_IMPORTED_MODULE_1__["leftPad"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "findOneOf", function() { return _ms_utilities_strings_lib_index__WEBPACK_IMPORTED_MODULE_1__["findOneOf"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "equalsCaseInsensitive", function() { return _ms_utilities_strings_lib_index__WEBPACK_IMPORTED_MODULE_1__["equalsCaseInsensitive"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "capitalize", function() { return _ms_utilities_strings_lib_index__WEBPACK_IMPORTED_MODULE_1__["capitalize"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "decapitalize", function() { return _ms_utilities_strings_lib_index__WEBPACK_IMPORTED_MODULE_1__["decapitalize"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pluralSelect", function() { return _ms_utilities_strings_lib_index__WEBPACK_IMPORTED_MODULE_1__["pluralSelect"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getLocalizedCountValue", function() { return _ms_utilities_strings_lib_index__WEBPACK_IMPORTED_MODULE_1__["getLocalizedCountValue"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "formatWithLocalizedCountValue", function() { return _ms_utilities_strings_lib_index__WEBPACK_IMPORTED_MODULE_1__["formatWithLocalizedCountValue"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "repeat", function() { return _ms_utilities_strings_lib_index__WEBPACK_IMPORTED_MODULE_1__["repeat"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "padData", function() { return _ms_utilities_strings_lib_index__WEBPACK_IMPORTED_MODULE_1__["padData"]; });

// OneDrive:IgnoreCodeCoverage


function getLocaleNumberString(number, options, defaultValue) {
    var result = defaultValue;
    var lang = _locale_Locale__WEBPACK_IMPORTED_MODULE_0__["default"].language;
    if (number) {
        try {
            result = number.toLocaleString(lang, options);
        }
        catch (e) {
            // in case 'lang' is invalid for browser, fallback to let browser use own logic for determining language
            result = number.toLocaleString([], options);
        }
    }
    return result;
}
//# sourceMappingURL=StringHelper.js.map

/***/ }),

/***/ "BgFM":
/*!***************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-utilities@29.7.9_5d977624104b06c7bcaa2de974ff51f1/node_modules/@ms/odsp-utilities/lib/logging/events/ResultTypeEnum.js ***!
  \***************************************************************************************************************************************************************************************/
/*! exports provided: ResultTypeEnum */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ms_telemetry_manager_lib_events_ResultTypeEnum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ms/telemetry-manager/lib/events/ResultTypeEnum */ "Z+U/");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ResultTypeEnum", function() { return _ms_telemetry_manager_lib_events_ResultTypeEnum__WEBPACK_IMPORTED_MODULE_0__["ResultTypeEnum"]; });


//# sourceMappingURL=ResultTypeEnum.js.map

/***/ }),

/***/ "D8Gs":
/*!**************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/sp-experiments@2.0.213_e509c819ab980023b76e5746ec0fc9e2/node_modules/@ms/sp-experiments/lib/flightsonrails/SPExperiment.js ***!
  \**************************************************************************************************************************************************************************************/
/*! exports provided: getVariantAndLogExposure, getExperiment, _getVariantWithoutLogging */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getVariantAndLogExposure", function() { return getVariantAndLogExposure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getExperiment", function() { return getExperiment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_getVariantWithoutLogging", function() { return _getVariantWithoutLogging; });
/* harmony import */ var _ms_odsp_utilities_lib_navigation_AddressParser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ms/odsp-utilities/lib/navigation/AddressParser */ "+7kh");
/* harmony import */ var _ms_odsp_utilities_lib_killswitch_Killswitch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ms/odsp-utilities/lib/killswitch/Killswitch */ "QUgr");
/* harmony import */ var _Experiment_event__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Experiment.event */ "q/PO");
/**
 * @copyright Microsoft Corporation. All rights reserved.
 *
 * @file Contains the API definition for determining and logging experiment assignment for experiments created in Flights on Rails.
 * See ../README.md for more details on how to use this API.
 *
 * Technical summary: Before each page is served, the data for all active Flights on Rails experiments (for SPO web) is encoded in a
 * highly compressed format and sent as part of the page context. The API here provides three services: it will decode the assignment data
 * for any given experiment, it will provide a way to automatically or manually log this data to the experiment stream for later analysis,
 * and it will handle overriding the assignment if a user provides new data in a query parameter.
 */
// tslint:disable: no-inferrable-types
// tslint:disable: no-bitwise



/** The start of the reserved range for client experiments created in Flights on Rails. */
var MIN_EXPERIMENT_ID = 90000;
/** Anyone may manually enter a query parameter in the URL with this key to force assignment to a particular value. */
var QUERY_OVERRIDE_KEY = 'expOverrides';
/** DEPRECATED: A prefix used in the key name for all experiment log cache data placed in session storage. */
var SESSION_STORAGE_CACHE_PREFIX = 'experimentLogCache';
/** The last serverTime used to update the log cache */
var SESSION_STORAGE_CACHE_TIME = 'experimentLogCacheTime';
/** The list of experimentId-isLoggedAtExposure pairs that have already been logged for the current page context (proxied by serverTime) */
var SESSION_STORAGE_CACHE_EXPERIMENTS = 'experimentLogCache';
/**
 * This class is used internally to retrieve experiment assignment details and logging information for experiments created in Flights on
 * Rails. It should not be called by user code -- use the exported functions instead (listed at the end of the file).
 */
var SPExperiment = /** @class */ (function () {
    /**
     * Performs the logic of determining assignment and logging information.
     * Query override parameters have the highest priority and are considered first.
     * The data sent from the server stored in the page context is decoded and considered next.
     * @param experimentId - The id of the experiment created in Flights on Rails. This will be an integer greater than or equal to
     * MIN_EXPERIMENT_ID, e.g. 90123.
     * @param context - The context for the current page. This constructor verifies that both experimentData and experimentDataLookup are
     * defined in the context. If they are not, then we return an experiment object that always shows the control experience and never logs.
     * @param shouldLogVariantPropertyAccess - Determines whether a log is sent when variantToDisplay is accessed. Should be set to true
     * only for getExperiment, and set to false for getVariantAndLogExposure.
     */
    function SPExperiment(experimentId, context, shouldLogVariantPropertyAccess) {
        /** During an AA test, the API will always return a variantToDisplay of 0, but will log what the variant hash would have been. */
        this._isAATest = false;
        /**
         * The naturally assigned variant may be overridden either in the Flights on Rails UI or by using the URL query override.
         * The experiment data pipeline will track which users or sites have been exposed to overrides and remove them from analysis.
         * Note: by convention, we will set _isAATest to false whenever there is an override, though that data will be ignored.
         */
        this._isOverride = false;
        /** Determines whether an additional log should be sent when accessing variantToDisplay. See @_logInternal for more info. */
        this._shouldLogVariantPropertyAccess = false;
        /** Indicates whether the "hidden" log sent for variantToDisplay has been sent. Redundant logging is suppressed for efficiency. */
        this._loggedPropertyAccess = false;
        /** Indicates whether the "intentional" log has been sent. Redundant logging is suppressed for efficiency. */
        this._loggedExposure = false;
        /**
         * The variant to display to the end user. A value of 0 indicates that the original, control experience should be shown, whereas a value
         * of n \> 0 indicates that the nth treatment group should be shown.
         */
        this._variantToDisplay = 0;
        this._experimentId = experimentId;
        this._shouldLogVariantPropertyAccess = shouldLogVariantPropertyAccess;
        this._aadUserId = context.aadUserId;
        this._siteId = context.siteId;
        this._serverTime = context.serverTime;
        /** Logic to read query override parameters (exit early if find a match).
         * Example: if the page is loaded with 'expOverrides=[[90123,1],[90124,2],[90500,0]]' and this constructor is called with an
         * experimentId of 90124, then the variantToDisplay will be set to 2 regardless of the current page context.
         * Note: if there is a match, the API will always return the override specified, even if it is invalid. */
        if (!!window && !!window.location && !!window.location.search) {
            var expParams = Object(_ms_odsp_utilities_lib_navigation_AddressParser__WEBPACK_IMPORTED_MODULE_0__["deserializeQuery"])(window.location.search.substr(1))[QUERY_OVERRIDE_KEY];
            if (!!expParams) {
                var overrides = void 0;
                try {
                    overrides = JSON.parse(expParams);
                }
                catch (_a) {
                    overrides = [];
                }
                for (var _i = 0, overrides_1 = overrides; _i < overrides_1.length; _i++) {
                    var element = overrides_1[_i];
                    if (!!element && element.length === 2 && element[0] === experimentId) {
                        this._setProperties(element[1], element[1], false, true);
                        return;
                    }
                }
            }
        }
        /* We expect all pages to have experimentData, experimentDataLookup, and serverTime defined (the first two can be empty). If they're
         * not present or we are trying to access an out-of-bounds id, treat the experiment as not existing or turned off. */
        if (context.experimentData === undefined ||
            context.experimentDataLookup === undefined ||
            context.serverTime === undefined ||
            this._experimentId < MIN_EXPERIMENT_ID) {
            this._variantToDisplay = 0;
            this._variantToLog = undefined;
            return;
        }
        // logic to decode assignment details (variantToLog, variantToDisplay) from experiment data.
        var adjustedId = experimentId - MIN_EXPERIMENT_ID;
        var controlCode = SPExperiment._decodeAt(context.experimentData, adjustedId);
        if (controlCode === 0) {
            // experiment does not exist or is turned off
            this._setProperties(0, undefined, false, false);
        }
        else if (controlCode >= 1 && controlCode <= 4) {
            // assigned a variant 0-3
            this._setProperties(controlCode - 1, controlCode - 1, false, false);
        }
        else if (controlCode === 5) {
            // assigned a variant 4+
            var variant = SPExperiment._lookup(context.experimentDataLookup, adjustedId);
            this._setProperties(variant, variant, false, false);
        }
        else if (controlCode >= 6 && controlCode <= 9) {
            // experiment is in AA testing; would have assigned a variant 0-3
            this._setProperties(0, controlCode - 6, true, false);
        }
        else if (controlCode === 10) {
            // experiment is in AA testing; would have assigned a variant 4+
            this._setProperties(0, SPExperiment._lookup(context.experimentDataLookup, adjustedId), true, false);
        }
        else if (controlCode >= 11 && controlCode <= 14) {
            // an override has been applied with value 0-3
            this._setProperties(controlCode - 11, controlCode - 11, false, true);
        }
        else {
            // controlCode === 15
            // an override has been applied with value 4+
            var variant = SPExperiment._lookup(context.experimentDataLookup, adjustedId);
            this._setProperties(variant, variant, false, true);
        }
        this._saveExperiments();
    }
    Object.defineProperty(SPExperiment.prototype, "variantToDisplay", {
        get: function () {
            if (this._shouldLogVariantPropertyAccess) {
                this._logInternal(false /*isExposureLogSite*/);
            }
            return this._variantToDisplay;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Finds the control code for the experiment at the given index, which specifies what should be displayed and what should be logged.
     * The data contract matches the encoding done on the server side in SPExperimentManager.cs.
     * @param b64 - The base64-encoded (RFC 4648) string containing bit-stuffed experiment data that was generated on the server.
     * @param index - The ordinal index of the experiment. This is equivalent to the experiment id minus the minimum experiment id.
     * @returns The four-bit control code (a number 0-15) for the given experiment. The semantics of this control code are defined
     * in the constructor.
     */
    SPExperiment._decodeAt = function (b64, index) {
        /* Each b64 character represents 6 bits of information, whereas each control code contains 4 bits. Therefore, a b64 string with
         * n characters will contain 6n bits of information, which is used to represent (6n)/4 control codes. */
        var maxIndex = Math.floor((b64.length * 3) / 2) - 1;
        // experiments beyond maxIndex do not exist or are not turned on, so they are not sent to the client by design.
        if (index > maxIndex) {
            return 0;
        }
        // get the index of the first b64 character that contains information on the given experiment.
        var ilow = Math.floor((index / 3) * 2);
        /* Since each b64 character represents 6 bits of information, the 4-bit control code may be contained in the most or least
         * significant 4 out of 6 bits of a single character, or be split between two different characters. */
        switch (index % 3) {
            case 0:
                // leftmost 4 out of 6 bits
                return SPExperiment._ctoi(b64[ilow]) >> 2;
            case 1:
                // rightmost 2 bits from first char; leftmost 2 bits from second char
                return ((SPExperiment._ctoi(b64[ilow]) & 3) << 2) | (SPExperiment._ctoi(b64[ilow + 1]) >> 4);
            case 2:
                // rightmost 4 out of 6 bits
                return SPExperiment._ctoi(b64[ilow]) & 15;
        }
        return 0; // unreachable
    };
    /**
     * Converts a single character in a base64-encoded (RFC 4648) message to the corresponding 6-bit integer value.
     * @param b64char - The single character to decode.
     * @returns The RFC 4648 integer interpretation of the given character, in the range [0,63].
     */
    SPExperiment._ctoi = function (b64char) {
        var i = b64char.charCodeAt(0);
        if (i >= 65 && i <= 90) {
            return i - 65; // 'A'-'Z'
        }
        else if (i >= 97 && i <= 122) {
            return i - 71; // 'a'-'z'
        }
        else if (i >= 48 && i <= 57) {
            return i + 4; // '0'-'9'
        }
        else if (i === 43) {
            return 62; // '+'
        }
        else {
            return 63; // '/'
        }
    };
    /**
     * Looks up the variant value for the given experiment. If a variant value can not be encoded in the four-bit control sequence
     * (i.e. if it is 4 or greater), it will be stored in the lookup table instead. Each index of the lookup table corresponds to
     * a variant value, and the string at a specific index contains all the experiment ids that have been assigned that variant.
     * @param expDataLookup - The lookup table generated and encoded on the server.
     * @param adjId - The ordinal index of the experiment. This is equivalent to the experiment id minus the minimum experiment id.
     * @returns The assigned variant value for the given experiment.
     */
    SPExperiment._lookup = function (expDataLookup, adjId) {
        // convert the adjusted experiment id to a three-digit base36 representation, then search for this value in the lookup table.
        var encodedId = adjId.toString(36);
        encodedId = Array(4 - encodedId.length).join('0') + encodedId; // workaround for padStart
        for (var arrayIndex = 0; arrayIndex < expDataLookup.length; arrayIndex++) {
            for (var stringIndex = 0; stringIndex < expDataLookup[arrayIndex].length - 2; stringIndex += 3) {
                if (expDataLookup[arrayIndex].substring(stringIndex, stringIndex + 3) === encodedId) {
                    // an array index of 0 corresponds to a variant value of 4, 1 corresponds to 5, etc.
                    return arrayIndex + 4;
                }
            }
        }
        return 0; // should be unreachable, but would likely be detected by SRM alerting if it was somehow executed
    };
    // Basic helper methods to access sessionStorage without risk of throwing. Use only when failed access is acceptable.
    SPExperiment._getItemFromSessionStorageNoThrow = function (key) {
        try {
            return sessionStorage.getItem(key);
        }
        catch (e) {
            // ignore errors
            return null;
        }
    };
    SPExperiment._setItemInSessionStorageNoThrow = function (key, value) {
        try {
            sessionStorage.setItem(key, value);
        }
        catch (e) {
            // ignore errors
        }
    };
    /**
     * Sends the relevant experiment assignment information and metadata to Aria. This data will be used to conduct experimental analysis.
     * If the experiment is turned off, or if repeated calls are made from the same object, this will be a no-op instead. Redundant calls
     * are suppressed for efficiency reasons only.
     */
    SPExperiment.prototype.logExposure = function () {
        this._logInternal(true /*isExposureLogSite*/);
    };
    /** Returns the full key name for a log cache value to be placed in session storage. */
    SPExperiment.prototype._getLogCacheKey = function (isLoggedAtExposure) {
        return SESSION_STORAGE_CACHE_PREFIX + this._experimentId + isLoggedAtExposure;
    };
    /**
     * store experiments, will be used by other telemetry such as RUMOne to get experiment state
     */
    SPExperiment.prototype._saveExperiments = function () {
        window.ODSP_EXPERIMENTS = window.ODSP_EXPERIMENTS || {};
        window.ODSP_EXPERIMENTS[this._experimentId] = this;
    };
    /**
     * Internal implementation of the logging method.
     *
     * ### CACHING ###
     * The experiment data pipeline only needs to receive a single log for each experiment from each user (for user-based experiments) or
     * siteId (for site-based experiments) for each combination of isAATest, isOverride, and isExposureLogSite. Here, we provide a
     * best-effort attempt to reduce the number of extraneous logs that are sent by the experimentation API to reduce COGS.
     * There are two levels of caching. The first, simple level just stores whether a log has already been sent for a given SPExperiment
     * object. This is recorded in this._loggedExposure and this._loggedPropertyAccess.
     * The second level of caching limits the number of logs sent to one per serverTime, experimentId, and isExposureLogSite. Since an
     * experiment may be restarted at any time (effectively turning it into a new experiment as far as the data pipeline is concerned), and
     * the client has no knowledge of this restart action, we need to send an additional log whenever the serverTime is updated even if the
     * assignment details are identical. Therefore, we keep two pieces of cache data: the last updated serverTime, and a list of all
     * experimentId-isLoggedAtExposure pairs that have already logged with that page context. Whenever a new serverTime is detected, the
     * entire cache is cleared.
     *
     * ### LOGGING AT EXPOSURE ###
     * One common issue when using the getExperiment API is that the logExposure() method is called at the incorrect time, leading to biased
     * sampling. To try to mitigate this, we will send an additional log when the variantToDisplay property is accessed to create a
     * different set of samples. If sample ratio mismatch is detected from the "intentional" logs, we can still use the new set of logs to
     * try to recover the experiment.
     * @param isExposureLogSite - this should be set to true when the caller is intentionally logging exposure, i.e. when called from the
     * getVariantAndLogExposure() API or when calling experiment.logExposure(). This should be set to false when the "hidden" logging
     * automatically happens when accessing the variantToDisplay property of an ISpExperiment object returned from getExperiment().
     */
    SPExperiment.prototype._logInternal = function (isExposureLogSite) {
        var _a;
        // a value of undefined means no logging should be done (experiment is off)
        var shouldLog = this._variantToLog !== undefined &&
            // check if there is a cache hit in the first-level SPExperiment object cache
            ((isExposureLogSite && !this._loggedExposure) || (!isExposureLogSite && !this._loggedPropertyAccess));
        // check if there is a cache hit in the second-level session storage cache
        var cacheRefreshTime = null;
        var loggedList = null;
        if (!_ms_odsp_utilities_lib_killswitch_Killswitch__WEBPACK_IMPORTED_MODULE_1__["Killswitch"].isActivated('7F6F3045-99EF-42F7-88C7-940CBF7EE30C', '2021/01/15', 'ServerTime cache for experiment logging - second killswitch') &&
            shouldLog) {
            cacheRefreshTime = SPExperiment._getItemFromSessionStorageNoThrow(SESSION_STORAGE_CACHE_TIME);
            loggedList = SPExperiment._getItemFromSessionStorageNoThrow(SESSION_STORAGE_CACHE_EXPERIMENTS);
            shouldLog =
                cacheRefreshTime !== this._serverTime ||
                    !loggedList ||
                    loggedList.indexOf(this._experimentId.toString() + isExposureLogSite) === -1;
        }
        else if (shouldLog && !!this._aadUserId && !!this._siteId && !!this._serverTime) {
            var cache = SPExperiment._getItemFromSessionStorageNoThrow(this._getLogCacheKey(isExposureLogSite));
            if (!!cache) {
                var cacheValue = JSON.parse(cache);
                if (cacheValue.aadUserId === this._aadUserId &&
                    cacheValue.siteId === this._siteId &&
                    new Date(this._serverTime).valueOf() - new Date(cacheValue.serverTime).valueOf() <
                        1350000 /* 15 days */ &&
                    (cacheValue.isOverride || (!this._isOverride && cacheValue.isAATest === this._isAATest))) {
                    shouldLog = false;
                }
            }
        }
        if (shouldLog && this._variantToLog !== undefined) {
            // need redundant undefined check here for the compiler
            var data = {
                experimentId: this._experimentId,
                variant: this._variantToLog,
                isAATest: this._isAATest,
                isOverride: this._isOverride,
                isLoggedAtExposure: isExposureLogSite,
                serverTime: this._serverTime
            };
            _Experiment_event__WEBPACK_IMPORTED_MODULE_2__["Experiment"].logData(data);
            // prevent additional logging from same object for the same logging type (exposure or assignment) (first-level cache)
            if (isExposureLogSite) {
                this._loggedExposure = true;
            }
            else {
                this._loggedPropertyAccess = true;
            }
            // use a best-effort approach to prevent redundant logging in the same session by using a second-level session storage cache
            if (!_ms_odsp_utilities_lib_killswitch_Killswitch__WEBPACK_IMPORTED_MODULE_1__["Killswitch"].isActivated('7F6F3045-99EF-42F7-88C7-940CBF7EE30C', '2021/01/15', 'ServerTime cache for experiment logging - second killswitch')) {
                if (cacheRefreshTime === this._serverTime) {
                    SPExperiment._setItemInSessionStorageNoThrow(SESSION_STORAGE_CACHE_EXPERIMENTS, ((loggedList !== null && loggedList !== void 0 ? loggedList : '')) + this._experimentId.toString() + isExposureLogSite);
                }
                else {
                    // extra check needed for compiler; serverTime will always be defined
                    SPExperiment._setItemInSessionStorageNoThrow(SESSION_STORAGE_CACHE_TIME, (_a = this._serverTime, (_a !== null && _a !== void 0 ? _a : '')));
                    SPExperiment._setItemInSessionStorageNoThrow(SESSION_STORAGE_CACHE_EXPERIMENTS, this._experimentId.toString() + isExposureLogSite);
                }
            }
            else if (!!this._aadUserId && !!this._siteId && !!this._serverTime) {
                var logCache = {
                    aadUserId: this._aadUserId,
                    siteId: this._siteId,
                    isAATest: this._isAATest,
                    isOverride: this._isOverride,
                    serverTime: this._serverTime
                };
                SPExperiment._setItemInSessionStorageNoThrow(this._getLogCacheKey(isExposureLogSite), JSON.stringify(logCache));
            }
        }
    };
    /** Sets some private properties. Used in the constructor to increase readability. */
    SPExperiment.prototype._setProperties = function (variantToDisplay, variantToLog, isAATest, isOverride) {
        this._variantToDisplay = variantToDisplay;
        this._variantToLog = variantToLog;
        this._isAATest = isAATest;
        this._isOverride = isOverride;
    };
    return SPExperiment;
}());
/**
 * @internal
 * Retrieves the variant assignment for the given Flights on Rails experiment from the given page context. This method automatically
 * logs the assignment data to the experiment stream, so it is crucial that this method is called only when the differences between variants
 * would become visible to the end user. If the assignment must be retrieved earlier, call getExperiment to get an ISpExperiment
 * object and use variantToDisplay and logExposure() at the appropriate times.
 * @param experimentId - The automatically generated experiment id in Flights on Rails. Check the flighting page at aka.ms/flightsui to find
 * this value.
 * @param context - The encoded experiment data from the page context. An object of type ISpPageContext may be used here. If either
 * experimentData or experimentDataLookup is undefined, the experiment will be considered to be turned off and the control experience will
 * be shown.
 * @returns The variant to display to the end user. A value of 0 indicates that the original, control experience should be shown, whereas
 * a value of n \> 0 indicates that the nth treatment group should be shown.
 */
function getVariantAndLogExposure(experimentId, context) {
    var exp = new SPExperiment(experimentId, context, false /*shouldLogVariantPropertyAccess*/);
    exp.logExposure();
    return exp.variantToDisplay;
}
/**
 * @internal
 * FOR ADVANCED SCENARIOS ONLY - use only when manual logging is required.
 * Retrieves the variant assignment for the given Flights on Rails experiment from the given page context.
 * @param experimentId - The automatically generated experiment id in Flights on Rails. Check the flighting page at aka.ms/flightsui to find
 * this value.
 * @param context - The encoded experiment data from the page context. An object of type ISpPageContext may be used here. If either
 * experimentData or experimentDataLookup is undefined, the experiment will be considered to be turned off and the control experience will
 * be shown.
 * @returns An ISpExperiment object. The property variantToDisplay indicates the variant to display to the end user. A value of 0 indicates
 * that the original, control experience should be shown, whereas a value of n \> 0 indicates that the nth treatment group should be shown.
 * The method logExposure() will send assignment information to the experiment data stream. Calling this method is MANDATORY if and when
 * the differences between variants would become visible to the end user.
 */
function getExperiment(experimentId, context) {
    return new SPExperiment(experimentId, context, true /*shouldLogVariantPropertyAccess*/);
}
/**
 * @internal
 * DO NOT USE UNLESS THERE IS NO NEED FOR SCORECARDS - this API will not log exposure to the experiment
 * Retrieves the variant assignment for the given Flights on Rails experiment from the given page context. This method does not log exposure
 * to the experiment, only returns the variant. This should be used only in cases where you want to retrieve the assignment, but do not want
 * the data to be logged. When using this API, the experimentation dashboard at aka.ms/odspexp and the automated SRM detection would
 * also be unavailable.
 * @param experimentId - The automatically generated experiment id in Flights on Rails. Check the flighting page at aka.ms/flightsui to find
 * this value.
 * @param context - The encoded experiment data from the page context. An object of type ISpPageContext may be used here. If either
 * experimentData or experimentDataLookup is undefined, the experiment will be considered to be turned off and the control experience will
 * be shown.
 * @returns The variant to display to the end user. A value of 0 indicates that the original, control experience should be shown, whereas
 * a value of n \> 0 indicates that the nth treatment group should be shown.
 */
function _getVariantWithoutLogging(experimentId, context) {
    var exp = new SPExperiment(experimentId, context, false /*shouldLogVariantPropertyAccess*/);
    return exp.variantToDisplay;
}
//# sourceMappingURL=SPExperiment.js.map

/***/ }),

/***/ "EjJ3":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-utilities@29.7.9_5d977624104b06c7bcaa2de974ff51f1/node_modules/@ms/odsp-utilities/lib/models/store/DataStoreCachingType.js ***!
  \*******************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var DataStoreCachingType;
(function (DataStoreCachingType) {
    DataStoreCachingType[DataStoreCachingType["none"] = 0] = "none";
    DataStoreCachingType[DataStoreCachingType["session"] = 1] = "session";
    DataStoreCachingType[DataStoreCachingType["local"] = 2] = "local";
    DataStoreCachingType[DataStoreCachingType["sharedMemory"] = 3] = "sharedMemory";
})(DataStoreCachingType || (DataStoreCachingType = {}));
/* harmony default export */ __webpack_exports__["default"] = (DataStoreCachingType);
//# sourceMappingURL=DataStoreCachingType.js.map

/***/ }),

/***/ "FAIF":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-datasources@45.13.10_e509c819ab980023b76e5746ec0fc9e2/node_modules/@ms/odsp-datasources/lib/dataSources/base/GetDataError.js ***!
  \*********************************************************************************************************************************************************************************************/
/*! exports provided: GetDataError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetDataError", function() { return GetDataError; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ms_utilities_error_lib_ApiError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ms/utilities-error/lib/ApiError */ "6e34");


var GetDataError = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(GetDataError, _super);
    function GetDataError(props) {
        var _this = this;
        var _a = props.errorData, errorData = _a === void 0 ? (props.innerError instanceof GetDataError && props.innerError.errorData) ||
            {
                status: 0
            } : _a;
        var _b = errorData.message, errorDataMessage = _b === void 0 ? undefined : _b, _c = errorData.correlationId, correlationId = _c === void 0 ? undefined : _c, _d = errorData.code, code = _d === void 0 ? undefined : _d, normalizedErrorData = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(errorData, ["message", "correlationId", "code"]);
        var message = typeof errorDataMessage === 'object'
            ? errorDataMessage
                ? typeof errorDataMessage.value === 'string'
                    ? // Might be a localized error message structure.
                        errorDataMessage.value
                    : JSON.stringify(errorDataMessage)
                : "" + errorDataMessage
            : errorDataMessage;
        var finalProps = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, (typeof correlationId === 'string'
            ? {
                correlationId: correlationId
            }
            : {})), (typeof code === 'string'
            ? {
                code: code
            }
            : {})), (typeof message === 'string'
            ? {
                message: message
            }
            : {})), props), { extraData: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, (props.extraData || {})), { hasAuthChallenge: !!normalizedErrorData.authenticate, status: normalizedErrorData.status, infected: normalizedErrorData.infected, groupThrottle: normalizedErrorData.groupThrottle, statusText: normalizedErrorData.statusText }) });
        _this = _super.call(this, finalProps) || this;
        _this.name = 'GetDataError';
        _this.errorData = errorData;
        // Copy over all props from the `errorData`, so that this `Error` instance
        // appears to implement the same contract.
        for (var _i = 0, _e = Object.keys(normalizedErrorData); _i < _e.length; _i++) {
            var key = _e[_i];
            _this[key] = normalizedErrorData[key];
        }
        return _this;
    }
    return GetDataError;
}(_ms_utilities_error_lib_ApiError__WEBPACK_IMPORTED_MODULE_1__["ApiError"]));

//# sourceMappingURL=GetDataError.js.map

/***/ }),

/***/ "FAc7":
/*!************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-utilities@29.7.9_5d977624104b06c7bcaa2de974ff51f1/node_modules/@ms/odsp-utilities/lib/icons/ItemType.js ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: ItemType, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemType", function() { return ItemType; });
var ItemType;
(function (ItemType) {
    ItemType[ItemType["File"] = 0] = "File";
    ItemType[ItemType["Folder"] = 1] = "Folder";
    ItemType[ItemType["Media"] = 2] = "Media";
    ItemType[ItemType["OneNote"] = 3] = "OneNote";
    ItemType[ItemType["Unknown"] = 4] = "Unknown";
    ItemType[ItemType["Error"] = 5] = "Error";
    ItemType[ItemType["App"] = 6] = "App";
    ItemType[ItemType["Subsite"] = 7] = "Subsite";
    /** A shortcut link pointing to some target destination or Url */
    ItemType[ItemType["Shortcut"] = 8] = "Shortcut";
})(ItemType || (ItemType = {}));
/* harmony default export */ __webpack_exports__["default"] = (ItemType);
//# sourceMappingURL=ItemType.js.map

/***/ }),

/***/ "Fb2z":
/*!*******************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/telemetry-addon-aria@1.1.3_@uifabric+utilities@7.33.2/node_modules/@ms/telemetry-addon-aria/lib/AriaEventBuilder.js ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: getAriaEventInfo, buildAriaEvent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAriaEventInfo", function() { return getAriaEventInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildAriaEvent", function() { return buildAriaEvent; });
/* harmony import */ var _ms_telemetry_manager_lib_EventBase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ms/telemetry-manager/lib/EventBase */ "HMXl");
/* harmony import */ var _ms_utilities_strings_lib_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ms/utilities-strings/lib/index */ "2h7V");
/* harmony import */ var _ms_telemetry_manager_lib_ErrorHelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ms/telemetry-manager/lib/ErrorHelper */ "qJrk");



/**
 * Receives an event produced by the telemetry system and extracts and formats the data suitable
 * for logging to Aria.
 * @internal
 */
function getAriaEventInfo(event) {
    var values = {
        CorrelationVector: event.vector.toString(),
        ValidationErrors: event.validationErrors,
        WebLog_FullName: event.eventName,
        WebLog_EventType: _ms_telemetry_manager_lib_EventBase__WEBPACK_IMPORTED_MODULE_0__["ClonedEventType"][event.eventType]
    };
    var names = event.eventName.split(',');
    for (var _i = 0, names_1 = names; _i < names_1.length; _i++) {
        var name_1 = names_1[_i];
        if (name_1) {
            values["WebLog_Type_" + name_1] = 1;
        }
    }
    var data = event.data, context = event.context;
    if (context) {
        for (var key in context) {
            if (Object.prototype.hasOwnProperty.call(context, key)) {
                var value = context[key];
                if (value === undefined || value === null) {
                    continue;
                }
                var loggingName = Object(_ms_utilities_strings_lib_index__WEBPACK_IMPORTED_MODULE_1__["capitalize"])(key);
                values[loggingName] = value;
            }
        }
    }
    if (data) {
        for (var field in data) {
            if (Object.prototype.hasOwnProperty.call(data, field)) {
                var value = data[field];
                if (value === undefined || value === null) {
                    continue;
                }
                var propertyMetadata = event.metadata[field];
                if (propertyMetadata) {
                    var loggingName = propertyMetadata.isPrefixingDisabled
                        ? Object(_ms_utilities_strings_lib_index__WEBPACK_IMPORTED_MODULE_1__["capitalize"])(field)
                        : Object(_ms_utilities_strings_lib_index__WEBPACK_IMPORTED_MODULE_1__["capitalize"])(propertyMetadata.definedInName) + "_" + field;
                    var type = propertyMetadata.type;
                    if (type === 4 /* Object */) {
                        for (var subField in value) {
                            if (Object.prototype.hasOwnProperty.call(value, subField)) {
                                var subValue = value[subField];
                                if (subValue !== undefined && subValue !== null && subValue !== '') {
                                    var serializedValue = void 0;
                                    // Do not write values which would serialize as empty since they do not provide meaningful
                                    // information in instrumentation back-ends.
                                    if (typeof subValue === 'object') {
                                        // Value has already been checked for null.
                                        try {
                                            serializedValue = JSON.stringify(subValue);
                                        }
                                        catch (e) {
                                            serializedValue = subValue;
                                        }
                                    }
                                    else {
                                        serializedValue = subValue;
                                    }
                                    values[loggingName + "_" + subField.replace(/\./g, '_')] = serializedValue;
                                }
                            }
                        }
                    }
                    else {
                        values[loggingName] = type === 6 /* Enum */ ? propertyMetadata.typeRef[value] : value;
                    }
                }
            }
        }
    }
    return {
        name: event.isEventTypePrefixingDisabled ? names[names.length - 2] : "ev_" + names[names.length - 2],
        values: values
    };
}
/**
 * Given an Aria implementation, builds an event suitable for logging.
 * @internal
 */
function buildAriaEvent(ariaTelemetry, event) {
    var _a = getAriaEventInfo(event), name = _a.name, values = _a.values;
    var eventProperties = new ariaTelemetry.EventProperties();
    eventProperties.name = name;
    setProperties(ariaTelemetry, eventProperties, values);
    return eventProperties;
}
function setProperties(ariaTelemetry, properties, values) {
    // We are getting a lot of errorCode 3 aria errors complaining about invalid property keys
    // In order to fix the problem we need to know what the problematic keys are
    var lastKey;
    try {
        for (var key in values) {
            if (Object.prototype.hasOwnProperty.call(values, key)) {
                lastKey = key;
                properties.setProperty(key, values[key]);
            }
        }
    }
    catch (exception) {
        var errorCode = void 0;
        var error = void 0;
        if (exception instanceof ariaTelemetry.Exception) {
            errorCode = exception.ErrorCode();
            error = new Error("Aria error: " + exception.toString());
        }
        if (error) {
            // If it is an aria error that is thrown then log it with the error code and the key we tried to set
            exception.handled = true;
            _ms_telemetry_manager_lib_ErrorHelper__WEBPACK_IMPORTED_MODULE_2__["logError"](error, {
                errorCode: errorCode,
                propertyKey: lastKey
            });
        }
        // Regardless of what kind of error it was, rethrow the error so we don't try to log the event
        throw exception;
    }
}
//# sourceMappingURL=AriaEventBuilder.js.map

/***/ }),

/***/ "G2nw":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-datasources@45.13.10_e509c819ab980023b76e5746ec0fc9e2/node_modules/@ms/odsp-datasources/lib/dataSources/base/ServerData.js ***!
  \*******************************************************************************************************************************************************************************************/
/*! exports provided: SERVICEWORKER_DATASOURCE_HEADER_KEY, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SERVICEWORKER_DATASOURCE_HEADER_KEY", function() { return SERVICEWORKER_DATASOURCE_HEADER_KEY; });
/* harmony import */ var _ms_odsp_utilities_lib_async_Signal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ms/odsp-utilities/lib/async/Signal */ "LSjO");
/* harmony import */ var _ms_odsp_utilities_lib_uri_Uri__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ms/odsp-utilities/lib/uri/Uri */ "I5DX");
/* harmony import */ var _ms_odsp_utilities_lib_encoding_UriEncoding__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ms/odsp-utilities/lib/encoding/UriEncoding */ "+35T");
/* harmony import */ var _ms_odsp_utilities_lib_killswitch_Killswitch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ms/odsp-utilities/lib/killswitch/Killswitch */ "QUgr");




var SERVICEWORKER_DATASOURCE_HEADER_KEY = 'X-SERVICEWORKER-DATA-SOURCE';
function _parseBlobError(blob) {
    var signal = new _ms_odsp_utilities_lib_async_Signal__WEBPACK_IMPORTED_MODULE_0__["default"]();
    var reader;
    var onLoad = function () {
        if (reader.result) {
            var response = void 0;
            try {
                response = JSON.parse(reader.result);
                signal.complete(response);
            }
            catch (error) {
                signal.complete({ message: 'Unable to parse blob result.' });
            }
        }
    };
    var onError = function () {
        signal.complete({ message: 'Unable to read blob error response.' });
    };
    try {
        reader = new FileReader();
        reader.addEventListener('load', onLoad);
        reader.addEventListener('error', onError);
        reader.readAsText(blob);
    }
    catch (error) {
        onError();
    }
    return signal.getPromise().then(function (errorData) {
        if (reader) {
            reader.removeEventListener('load', onLoad);
            reader.removeEventListener('error', onError);
        }
        return errorData;
    });
}
var ServerData = /** @class */ (function () {
    function ServerData(request, strUrl, params) {
        this._request = request;
        this._url = strUrl;
        this._webAbsoluteUrl = params && params.webAbsoluteUrl;
        this._isCanaryRequest = params && params.isCanaryRequest;
    }
    ServerData.prototype.getSourceUrl = function () {
        return this._url;
    };
    ServerData.prototype.getAllResponseHeaders = function () {
        return this._request.getAllResponseHeaders();
    };
    ServerData.prototype.getCorrelationId = function () {
        return this.getResponseHeader('SPRequestGuid');
    };
    ServerData.prototype.getGroupThrottle = function () {
        return this.getResponseHeader('SPGroupThrottle');
    };
    ServerData.prototype.getAuthErrorType = function () {
        return this.getResponseHeader('x-ms-diagnostics');
    };
    ServerData.prototype.getMSCorrelationVector = function () {
        return this.getResponseHeader('MS-CV');
    };
    ServerData.prototype.getServiceWorkerDataSourceHeader = function () {
        return this.getResponseHeader(SERVICEWORKER_DATASOURCE_HEADER_KEY);
    };
    ServerData.prototype.getServiceWorkerFetchInfoFromHeader = function () {
        return this.getResponseHeader('X-ServiceWorkerFetchInfo');
    };
    ServerData.prototype.getRetryAfterHeader = function () {
        var stringValue = this.getResponseHeader('Retry-After');
        var value = Number(stringValue);
        return isNaN(value) ? undefined : value;
    };
    ServerData.prototype.getStatus = function () {
        try {
            // We read the status in a try catch to avoid issues
            // with IE implementation which throws a bogus exception
            return this._request.status;
        }
        catch (e) {
            // do nothing
        }
    };
    ServerData.prototype.getAuthenticationRedirect = function () {
        return this.getResponseHeader('X-Forms_Based_Auth_Required');
    };
    ServerData.prototype.getFBAError = function () {
        return this.getResponseHeader('X-MSDAVEXT_Error');
    };
    ServerData.prototype.getAuthenticateHeader = function () {
        return this.getResponseHeader('WWW-Authenticate');
    };
    ServerData.prototype.getResponseType = function () {
        return this._request.responseType;
    };
    ServerData.prototype.getResponseText = function () {
        if (!this._request.responseType || this._request.responseType === 'text') {
            return this._request.responseText;
        }
        else {
            return this._request.response;
        }
    };
    ServerData.prototype.getErrorResponseText = function () {
        if (this._request.responseType === 'blob') {
            var errorData = {
                status: this._request.status,
                statusText: this._request.statusText,
                infected: !!this.getResponseHeader('x-virus-infected'),
                authenticate: this.getResponseHeader('WWW-Authenticate')
            };
            return errorData;
        }
        else {
            return this.getResponseText();
        }
    };
    ServerData.prototype.parseError = function () {
        var _this = this;
        var signal = new _ms_odsp_utilities_lib_async_Signal__WEBPACK_IMPORTED_MODULE_0__["default"]();
        if (!this._request.responseType || this._request.responseType === 'text') {
            signal.complete(this._request.responseText);
        }
        else if (this._request.responseType === 'blob') {
            _parseBlobError(this._request.response).then(function (response) {
                var errorData = {
                    data: response,
                    status: _this.getStatus(),
                    statusText: _this._request.statusText,
                    infected: !!_this.getResponseHeader('x-virus-infected'),
                    authenticate: _this.getResponseHeader('WWW-Authenticate')
                };
                signal.complete(errorData);
            });
        }
        else {
            signal.complete(this._request.response);
        }
        return signal.getPromise();
    };
    ServerData.prototype.getValue = function (key) {
        var value;
        switch (key) {
            case ServerData.DataValueKeys.SourceURL:
                value = this.getSourceUrl();
                break;
            case ServerData.DataValueKeys.CorrelationId:
                value = this.getCorrelationId();
                break;
            case ServerData.DataValueKeys.Status:
                value = this.getStatus();
                break;
            case ServerData.DataValueKeys.AuthenticationRedirect:
                value = this.getAuthenticationRedirect();
                break;
            case ServerData.DataValueKeys.ResponseText:
                value = this.getResponseText();
                break;
            case ServerData.DataValueKeys.ErrorResponseText:
                value = this.getErrorResponseText();
                break;
        }
        return value;
    };
    ServerData.prototype.getRedirectUrl = function () {
        var isRedirectUrlKSEnabled = _ms_odsp_utilities_lib_killswitch_Killswitch__WEBPACK_IMPORTED_MODULE_3__["Killswitch"].isActivated('56A1255F-5247-4496-A8A2-FF9190FC7342', '11/17/2020', 'redirect url when access denied');
        if (this._isCanaryRequest) {
            if (this.getStatus() === 403) {
                if (this.shouldRedirectToErrorCustomPromptLocation()) {
                    return this.getRedirectToErrorCustomPromptLocation();
                }
                else {
                    return this.getRedirectLoginPageUrl();
                }
            }
            else {
                return this.getAccessDeniedRedirectUrl();
            }
        }
        else if (this.getStatus() === 403) {
            if (this.shouldRedirectToErrorCustomPromptLocation()) {
                return this.getRedirectToErrorCustomPromptLocation();
            }
            else if (!isRedirectUrlKSEnabled) {
                return this.getRedirectLoginPageUrl();
            }
        }
        else if (this.getStatus() === 401) {
            if (this.shouldRedirectToErrorCustomPromptLocation()) {
                return this.getRedirectToErrorCustomPromptLocation();
            }
            else if (!isRedirectUrlKSEnabled) {
                return this.getRedirectLoginPageUrl();
            }
        }
    };
    ServerData.prototype.getRedirectLoginPageUrl = function () {
        var redirectUrl;
        // if users hit 403 again, they're unauthenticated, try redirect to auth.
        var redirectLoginPageURL = this.getAuthenticationRedirect();
        if (redirectLoginPageURL) {
            var redirectLoginPageUri = new _ms_odsp_utilities_lib_uri_Uri__WEBPACK_IMPORTED_MODULE_1__["default"](redirectLoginPageURL);
            redirectLoginPageUri.setQueryParameter('ReturnUrl', _ms_odsp_utilities_lib_encoding_UriEncoding__WEBPACK_IMPORTED_MODULE_2__["default"].encodeURIComponent(window.location.href));
            redirectUrl = redirectLoginPageUri.toString();
        }
        return redirectUrl;
    };
    ServerData.prototype.getAccessDeniedRedirectUrl = function () {
        var redirectUrl;
        if (this._webAbsoluteUrl) {
            var redirectLoginPageURL = this._webAbsoluteUrl + '/_layouts/15/AccessDenied.aspx';
            if (redirectLoginPageURL) {
                var redirectLoginPageUri = new _ms_odsp_utilities_lib_uri_Uri__WEBPACK_IMPORTED_MODULE_1__["default"](redirectLoginPageURL);
                redirectLoginPageUri.setQueryParameter('Source', _ms_odsp_utilities_lib_encoding_UriEncoding__WEBPACK_IMPORTED_MODULE_2__["default"].encodeURIComponent(window.location.href));
                redirectLoginPageUri.setQueryParameter('Type', 'list');
                redirectLoginPageUri.setQueryParameter('correlation', _ms_odsp_utilities_lib_encoding_UriEncoding__WEBPACK_IMPORTED_MODULE_2__["default"].encodeURIComponent(this.getCorrelationId()));
                // todo: set list guid! (we don't have that info from server context yet).
                // the access denied page will still kind of work, except that we'll request access to the site, not the list.
                // redirectLoginPageUri.setQueryParameter('name', context.listName);
                // Ideally this should be using the navigation resource, but it is not guaranteed to be present here some
                // DataSources do not extend the base DataSource.
                redirectUrl = redirectLoginPageUri.toString();
            }
        }
        return redirectUrl;
    };
    ServerData.prototype.getRedirectToErrorCustomPromptLocation = function () {
        var errorCustomPromptLocation = this.getResponseHeader('X-SPO-ErrorCustomPromptLocation');
        var reattestionPageUri = new _ms_odsp_utilities_lib_uri_Uri__WEBPACK_IMPORTED_MODULE_1__["default"](errorCustomPromptLocation);
        reattestionPageUri.setQueryParameter('ReturnUrl', window.location.href);
        return reattestionPageUri.toString();
    };
    /**
     * If a 401/403 is returned, check for the SharePoint custom error code that indicates the
     * user needs to reattest and redirect to the custom prompt location.
     */
    ServerData.prototype.shouldRedirectToErrorCustomPromptLocation = function () {
        var spErrorCode = this.getResponseHeader('X-SPO-ErrorCode');
        var legacySharePointErrorCode = this.getResponseHeader('sharepointerror');
        return spErrorCode === '9.3' || legacySharePointErrorCode === '-2130575129';
    };
    ServerData.prototype.getResponseHeadersDictionary = function () {
        var headerMap = {};
        // Get the raw header string
        var headerString = this.getAllResponseHeaders();
        if (headerString) {
            // Convert the header string into an array of individual headers
            var arr = headerString.trim().split(/[\r\n]+/);
            if (arr && arr.length > 0) {
                // Create a map of header names to values
                arr.forEach(function (line) {
                    var parts = line.split(': ');
                    var header = parts.shift();
                    var value = parts.join(': ');
                    headerMap[header] = value;
                });
            }
        }
        this.getResponseHeadersDictionary = function () { return headerMap; };
        return headerMap;
    };
    ServerData.prototype.getResponseHeader = function (header) {
        var responseHeaders = this.getResponseHeadersDictionary();
        return (responseHeaders[header.toLowerCase()] ||
            responseHeaders[header] ||
            this._request.getResponseHeader(header));
    };
    /* tslint:disable:variable-name */
    ServerData.DataValueKeys = {
        // (String) Original source url for this request.
        SourceURL: 'SourceUrl',
        // (String) SharePoint CorrelationId that corresponds with this request.
        CorrelationId: 'CorrelationId',
        // (Number) HTTP status code for this request
        Status: 'Status',
        // (String) URL to redirect to in case of an error
        AuthenticationRedirect: 'AuthenticationRedirect',
        // (String) Response text for this server request.
        ResponseText: 'ResponseText',
        // (String) Error Response for this server request.
        ErrorResponseText: 'ErrorResponseText',
        // (String) GroupThrottle Response for this server request.
        GroupThrottle: 'GroupThrottle'
    };
    return ServerData;
}());
/* harmony default export */ __webpack_exports__["default"] = (ServerData);
//# sourceMappingURL=ServerData.js.map

/***/ }),

/***/ "HMXl":
/*!***************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/telemetry-manager@1.1.3/node_modules/@ms/telemetry-manager/lib/EventBase.js ***!
  \***************************************************************************************************************************************/
/*! exports provided: ClonedEventType, ValidationErrorType, AccountType, addEventProps, EventBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClonedEventType", function() { return ClonedEventType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidationErrorType", function() { return ValidationErrorType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountType", function() { return AccountType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addEventProps", function() { return addEventProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventBase", function() { return EventBase; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Manager */ "wq9f");
/* harmony import */ var _CorrelationVector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CorrelationVector */ "L3+i");
/* harmony import */ var _ms_utilities_objects_lib_assign__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ms/utilities-objects/lib/assign */ "Xdo2");




// tslint:disable:no-bitwise
var _id = 0;
/**
 * @public
 */
var ClonedEventType;
(function (ClonedEventType) {
    ClonedEventType[ClonedEventType["Single"] = 0] = "Single";
    ClonedEventType[ClonedEventType["Start"] = 1] = "Start";
    ClonedEventType[ClonedEventType["End"] = 2] = "End";
})(ClonedEventType || (ClonedEventType = {}));
/**
 * @public
 */
var ValidationErrorType;
(function (ValidationErrorType) {
    ValidationErrorType[ValidationErrorType["NoParent"] = 1] = "NoParent";
})(ValidationErrorType || (ValidationErrorType = {}));
/**
 * @public
 */
var AccountType;
(function (AccountType) {
    AccountType[AccountType["Consumer"] = 0] = "Consumer";
    AccountType[AccountType["ConsumerAnonymous"] = 1] = "ConsumerAnonymous";
    AccountType[AccountType["Business"] = 2] = "Business";
    AccountType[AccountType["BusinessAnonymous"] = 3] = "BusinessAnonymous";
    AccountType[AccountType["Unknown"] = 4] = "Unknown";
})(AccountType || (AccountType = {}));
/**
 * @public
 */
function addEventProps(eventPrototype, props, metadata, baseClass) {
    Object(_ms_utilities_objects_lib_assign__WEBPACK_IMPORTED_MODULE_3__["assign"])(eventPrototype, props);
    var resultMetadata = {};
    for (var key in metadata) {
        if (Object.prototype.hasOwnProperty.call(metadata, key)) {
            var item = metadata[key];
            var result = (resultMetadata[key] = ((typeof item === 'number' ? { type: item } : item)));
            result.definedInName = props.shortEventName;
            if (result.type === 2 /* Number */) {
                result.isMetric = true;
            }
        }
    }
    eventPrototype.metadata = baseClass
        ? Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, baseClass.prototype.metadata), resultMetadata) : resultMetadata;
}
var managerSpecificEventTypes = new WeakMap(); // tslint:disable-line:no-any
/**
 * @public
 */
var EventBase = /** @class */ (function () {
    function EventBase(data, startType, parent) {
        this.context = {};
        this.validationErrors = 0;
        this.data = {};
        this.context = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.addContext({}));
        this.id = _id++;
        this.enabled = this._isEnabled();
        // Set the parent id if needed
        if (parent) {
            this.parentId = parent.id;
        }
        else if (this.requiresParent) {
            this._addValidationError(ValidationErrorType.NoParent);
        }
        // Set the start time
        this.startTime = (data && data.startTimeOverride) || _Manager__WEBPACK_IMPORTED_MODULE_1__["Manager"].getTime();
        this.vector = new _CorrelationVector__WEBPACK_IMPORTED_MODULE_2__["CorrelationVector"](parent ? parent.vector : _CorrelationVector__WEBPACK_IMPORTED_MODULE_2__["CorrelationVector"].RootVector);
        // Set the data if we have it
        if (data) {
            this._setData(data);
        }
        // Send the start event
        this._logEvent(startType);
    }
    /**
     * This will return true if the event is enabled
     */
    EventBase.enabled = function () {
        return this.prototype._isEnabled();
    };
    /**
     * This will return true if the event is of this type
     * @param event {IEvent} The event to compare
     */
    EventBase.isTypeOf = function (event) {
        return event.eventName.indexOf(this.prototype.shortEventName + ',') >= 0;
    };
    // tslint:disable-next-line:no-any
    EventBase.withManager = function (manager) {
        if (!manager || manager === _Manager__WEBPACK_IMPORTED_MODULE_1__["Manager"]) {
            return this;
        }
        var eventTypesForManager = managerSpecificEventTypes.get(manager);
        if (!eventTypesForManager) {
            eventTypesForManager = new WeakMap();
            managerSpecificEventTypes.set(manager, eventTypesForManager);
        }
        var eventType = eventTypesForManager.get(this);
        if (eventType) {
            return eventType;
        }
        // @ts-ignore
        var EventWithManager = /** @class */ (function (_super) {
            Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(EventWithManager, _super);
            function EventWithManager() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return EventWithManager;
        }(this));
        // @ts-ignore
        EventWithManager.prototype.manager = manager;
        eventType = EventWithManager;
        eventTypesForManager.set(this, eventType);
        return eventType;
    };
    // tslint:disable-next-line:no-any
    EventBase.withData = function (modifier) {
        if (!modifier) {
            return this;
        }
        var addData = typeof modifier !== 'function'
            ? // tslint:disable-next-line:no-any
                function (data) { return (Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, modifier), data)); }
            : modifier;
        // @ts-ignore
        var EventWithData = /** @class */ (function (_super) {
            Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(EventWithData, _super);
            function EventWithData() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            // tslint:disable-next-line:no-any
            EventWithData.prototype.addData = function (data) {
                var localData = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, data), addData(data));
                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, localData), _super.prototype.addData.call(this, localData));
            };
            return EventWithData;
        }(this));
        return EventWithData;
    };
    // tslint:disable-next-line:no-any
    EventBase.withContext = function (modifier) {
        if (!modifier) {
            return this;
        }
        var addContext = typeof modifier !== 'function'
            ? function (context) { return (Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, modifier), context)); }
            : modifier;
        // @ts-ignore
        var EventWithContext = /** @class */ (function (_super) {
            Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(EventWithContext, _super);
            function EventWithContext() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            EventWithContext.prototype.addContext = function (context) {
                var localContext = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, context), addContext(context));
                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, localContext), _super.prototype.addContext.call(this, localContext));
            };
            return EventWithContext;
        }(this));
        return EventWithContext;
    };
    // tslint:disable-next-line:no-any
    EventBase.from = function (sourceEventType) {
        if (!sourceEventType) {
            return this;
        }
        return this.withManager(sourceEventType.prototype.manager)
            .withContext(function (context) { return sourceEventType.prototype.addContext(context); })
            .withData(function (data) { return sourceEventType.prototype.addData(data); }); // tslint:disable-line:no-any
    };
    EventBase.prototype.addContext = function (context) {
        return copyObject(this.manager, context, {});
    };
    EventBase.prototype.addData = function (data) {
        return data;
    };
    EventBase.prototype._isEnabled = function () {
        // All events are enabled by default
        return !this.samplingFeature || _Manager__WEBPACK_IMPORTED_MODULE_1__["Manager"].isFeatureEnabled(this.samplingFeature);
    };
    EventBase.prototype._setData = function (data) {
        var localData = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.addData(this.data)), data);
        processData(this.manager, this.metadata, localData, this.data);
    };
    EventBase.prototype._logEvent = function (eventType) {
        this.manager.logEvent(this, eventType);
    };
    EventBase.prototype._addValidationError = function (type) {
        this.validationErrors = this.validationErrors | type;
        this.manager.logValidationError(this, type);
    };
    return EventBase;
}());

function processData(manager, metadata, source, target) {
    for (var _i = 0, _a = Object.keys(source); _i < _a.length; _i++) {
        var key = _a[_i];
        if (key in metadata) {
            var declaration = metadata[key];
            processValue(manager, source, target, key, declaration);
        }
    }
}
function processValue(manager, source, target, key, keyDeclaration) {
    var value = source[key];
    switch (typeof value) {
        case 'string':
            // Allow the cleaner to know what it is being stored as
            // This might be used to always scrub values for a particular key
            var cleaned = manager.cleanString(value, key, keyDeclaration);
            if (cleaned !== undefined) {
                target[key] = cleaned;
            }
            return;
        case 'undefined':
            return;
        case 'object':
            // Need to handle ABExperiment objects
            if (value && Object.getPrototypeOf(value) === Object.prototype) {
                // Still overwrite
                target[key] = copyObject(manager, value, {});
            }
            else {
                target[key] = value;
            }
            return;
        default:
            target[key] = value;
            return;
    }
}
function copyObject(manager, source, target) {
    for (var _i = 0, _a = Object.keys(source); _i < _a.length; _i++) {
        var key = _a[_i];
        processValue(manager, source, target, key);
    }
    return target;
}
var proto = EventBase.prototype;
proto.eventName = 'EventBase,';
proto.shortEventName = 'EventBase';
// All events are not critical by default
proto.critical = false;
// All events require parents by default
proto.requiresParent = true;
proto.manager = _Manager__WEBPACK_IMPORTED_MODULE_1__["Manager"];
//# sourceMappingURL=EventBase.js.map

/***/ }),

/***/ "HddE":
/*!***************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-utilities@29.7.9_5d977624104b06c7bcaa2de974ff51f1/node_modules/@ms/odsp-utilities/lib/performance/PerformanceMarker.js ***!
  \***************************************************************************************************************************************************************************************/
/*! exports provided: HighResolutionTimingSupported, MARKER_PREFIX, mark, measure, getMarkerTime, clearMarks, getAllMarks */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HighResolutionTimingSupported", function() { return HighResolutionTimingSupported; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MARKER_PREFIX", function() { return MARKER_PREFIX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mark", function() { return mark; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "measure", function() { return measure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMarkerTime", function() { return getMarkerTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearMarks", function() { return clearMarks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllMarks", function() { return getAllMarks; });
// OneDrive:IgnoreCodeCoverage
var performance = window.performance;
var HighResolutionTimingSupported = !!performance &&
    typeof performance.mark === 'function' &&
    typeof performance.clearMarks === 'function' &&
    typeof performance.now === 'function';

var MARKER_PREFIX = 'EUPL.';
var _markCount = 0;
var _perfMarks = (window['_perfMarks'] = window['_perfMarks'] || []); // used for browsers do not support native performance.mark
function mark(name, limit) {
    var markName = addPrefix(name);
    if (limit === null || limit === undefined || _markCount < limit) {
        if (HighResolutionTimingSupported) {
            performance.mark(markName);
        }
        else {
            // this is for browser does not support native performance.mark
            _perfMarks.push({
                name: markName,
                startTime: Date.now()
            });
        }
        _markCount++;
    }
}
function measure(name, startName, endName) {
    if (HighResolutionTimingSupported) {
        if (getMarkerTime(startName) > 0 && getMarkerTime(endName) > 0) {
            try {
                performance.measure(addPrefix(name), addPrefix(startName), addPrefix(endName));
            }
            catch (_a) {
                // Not important.
            }
        }
    }
}
function getMarkerTime(name) {
    var markName = addPrefix(name);
    if (HighResolutionTimingSupported) {
        var mark_1 = performance.getEntriesByName(markName, 'mark');
        return mark_1 && mark_1.length > 0 ? Math.round(mark_1[0].startTime) : NaN;
    }
    else {
        var mark_2 = _perfMarks.filter(function (mark) { return mark.name === markName; })[0];
        return mark_2 && mark_2.startTime;
    }
}
function clearMarks(names) {
    var markNames = [];
    if (names) {
        markNames = names.map(addPrefix);
    }
    if (HighResolutionTimingSupported) {
        performance
            .getEntriesByType('mark')
            .filter(function (mark) {
            if (markNames.length > 0) {
                return markNames.indexOf(mark.name) >= 0;
            }
            return mark.name.lastIndexOf(MARKER_PREFIX, 0) === 0;
        })
            .forEach(function (mark) {
            performance.clearMarks(mark.name);
        });
    }
    else {
        _perfMarks = [];
    }
}
function getAllMarks() {
    'use strict';
    if (HighResolutionTimingSupported) {
        return performance.getEntriesByType('mark').filter(function (mark) {
            return mark.name.lastIndexOf(MARKER_PREFIX, 0) === 0;
        });
    }
    else {
        return _perfMarks;
    }
}
function addPrefix(name) {
    return name.lastIndexOf(MARKER_PREFIX, 0) === 0 ? name : MARKER_PREFIX + name;
}
//# sourceMappingURL=PerformanceMarker.js.map

/***/ }),

/***/ "I5DX":
/*!*****************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-utilities@29.7.9_5d977624104b06c7bcaa2de974ff51f1/node_modules/@ms/odsp-utilities/lib/uri/Uri.js ***!
  \*****************************************************************************************************************************************************************/
/*! exports provided: UriPartial, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UriPartial", function() { return UriPartial; });
/* harmony import */ var _object_ObjectUtil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../object/ObjectUtil */ "Nsau");
/* harmony import */ var _string_StringHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../string/StringHelper */ "BY+f");


var UriPartial;
(function (UriPartial) {
    /** The scheme segment of the URI */
    UriPartial[UriPartial["scheme"] = 0] = "scheme";
    /** The scheme and authority segments of the URI */
    UriPartial[UriPartial["authority"] = 1] = "authority";
    /** The scheme, authority, and path segments of the URI */
    UriPartial[UriPartial["path"] = 2] = "path";
    /** The scheme, authority, path, and query segments of the URI */
    UriPartial[UriPartial["query"] = 3] = "query";
})(UriPartial || (UriPartial = {}));
var DELIMITERS = /[;\/?:@&=$,]/;
var AUTHORITY_TERMINATORS = /[\/?]/;
function queryToLower(queryObj) {
    var newQuery = {};
    for (var key in queryObj) {
        if (queryObj.hasOwnProperty(key)) {
            newQuery[key.toLowerCase()] = queryObj[key].toLowerCase();
        }
    }
    return newQuery;
}
/**
 * Partial port of groove\Misc\URI.cpp, which was based on RFC2396 and RFC3986 (http://www.ietf.org/rfc/rfc2396.txt).
 * There are a few differences between this implementation and the RFC:
 *  - Implementation does not support parameters (we don't use them, and partial implementation was incorrect)
 *  - Implementation supports some relative URIs at a glance but more investigation required
 *
 *   foo://example.com:8042/over/there?name=ferret#nose
 *   \_/   \______________/\_________/ \_________/ \__/
 *    |           |            |            |        |
 * scheme     authority       path        query   fragment
 *
 * Possible improvements:
 *  - Support path parameters
 *  - Fully support and test relative URLs based on RFC
 *  - Allow changing/removing remaining URI components (i.e. user, host, port, parameters)
 *  - URI.equals could allow ?foo=1&bar=2 equals ?bar=2&foo=1
 *  - URI.parseURI should have better error handling rather than just setting it as path
 *  - URI.getQueryAsObject should have better error handling for query of "a=1&a=2"
 */
var Uri = /** @class */ (function () {
    function Uri(uriString, options) {
        // All of these are decoded (if relevant) unless specified as encoded.
        this._scheme = '';
        this._user = '';
        this._host = '';
        this._port = '';
        this._path = '';
        this._pathSegments = [];
        this._pathEncoded = '';
        this._query = {};
        this._fragment = '';
        if (options) {
            this._queryCaseInsensitive = !!options.queryCaseInsensitive;
            this._pathCaseInsensitive = !!options.pathCaseInsensitive;
        }
        this._parseURI(uriString);
    }
    Uri.concatenate = function () {
        var uriParts = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            uriParts[_i] = arguments[_i];
        }
        var result = '';
        for (var i = 0; i < uriParts.length; i++) {
            var part = uriParts[i];
            if (i > 0) {
                part = Uri.ensureNoPrecedingSlash(part);
            }
            if (i < uriParts.length - 1) {
                part = Uri.ensureTrailingSlash(part);
            }
            result += part;
        }
        return result;
    };
    Uri.ensureNoPrecedingSlash = function (part) {
        return part[0] === '/' ? part.substr(1) : part;
    };
    Uri.ensureTrailingSlash = function (part) {
        return part[part.length - 1] !== '/' ? part + '/' : part;
    };
    Uri.prototype.getScheme = function () {
        return this._scheme;
    };
    Uri.prototype.setScheme = function (scheme) {
        this._scheme = scheme;
    };
    Uri.prototype.getAuthority = function () {
        return this._getAuthority(false);
    };
    Uri.prototype.setAuthority = function (authority) {
        this._parseAuthority(authority);
    };
    Uri.prototype.getUser = function () {
        return this._user;
    };
    Uri.prototype.getHost = function () {
        return this._host;
    };
    Uri.prototype.getPort = function () {
        return this._port;
    };
    Uri.prototype.getPath = function (trimTrailingSlash) {
        var retPath = this._path;
        if (Boolean(trimTrailingSlash)) {
            // If the last character is a slash
            if (retPath !== null && retPath.lastIndexOf('/') === retPath.length - 1) {
                retPath = retPath.slice(0, -1); //trim last character
            }
        }
        return retPath;
    };
    /**
     * Returns a string containing the leftmost portion of the URI string, ending with the portion specified by part
     */
    Uri.prototype.getLeftPart = function (part) {
        var ret = this._scheme + '://'; // default value is UriPartial.scheme
        if (part === UriPartial.authority) {
            ret += this.getAuthority();
        }
        if (part === UriPartial.path) {
            ret += this.getPath();
        }
        if (part === UriPartial.query) {
            ret += this.getQuery();
        }
        return ret;
    };
    Uri.prototype.setPath = function (path) {
        if (path && path[0] !== '/') {
            path = '/' + path;
        }
        this._parsePath(path);
    };
    Uri.prototype.getPathSegments = function () {
        return this._pathSegments;
    };
    Uri.prototype.getLastPathSegment = function () {
        var pathSegments = this._pathSegments;
        return pathSegments[pathSegments.length - 1] || '';
    };
    Uri.prototype.getQuery = function (encoded) {
        return this._serializeQuery(encoded);
    };
    /**
     * Query is not well-defined but is commonly formatted as key=value and delimited with & or ;
     * (http://www.w3.org/TR/REC-html40/appendix/notes.html#h-B.2.2)
     *  - URI with query "a=1&b=2" or "a=1;b=2" will return {a: "1", b: "2"}
     *  - Mixed-mode will also work: "a=1&b=2;c=3" will return {a: "1", b: "2", c: "3"}
     *  - Assumes that parameters will be unique (i.e. "a=1&a=2" is not allowed and will produce unexpected results)
     */
    Uri.prototype.setQuery = function (query) {
        this.setQueryFromObject(this._deserializeQuery(query));
    };
    Uri.prototype.getQueryAsObject = function () {
        return this._query;
    };
    Uri.prototype.setQueryFromObject = function (queryObj) {
        this._query = {};
        for (var queryKey in queryObj) {
            if (queryObj.hasOwnProperty(queryKey)) {
                this.setQueryParameter(queryKey, queryObj[queryKey]);
            }
        }
    };
    Uri.prototype.getQueryParameter = function (queryKey) {
        var ret = null;
        var query = this._query;
        if (this._queryCaseInsensitive) {
            queryKey = queryKey.toLowerCase();
            for (var key in query) {
                if (query.hasOwnProperty(key) && key.toLowerCase() === queryKey) {
                    ret = query[key];
                }
            }
        }
        else {
            ret = query[queryKey];
        }
        return ret || null;
    };
    /**
     * Adds query parameter to the end if queryKey does not exist, or
     * overwrites existing query value if queryKey already exists.
     */
    Uri.prototype.setQueryParameter = function (queryKey, queryValue, ignoreEmptyValues) {
        if (ignoreEmptyValues === void 0) { ignoreEmptyValues = true; }
        var queryValueDecoded = this._decodeQueryString(queryValue);
        // there is no point adding undefined or modifying existing values to undefined or null.
        if (!!queryValueDecoded || ignoreEmptyValues) {
            this._query[this._decodeQueryString(queryKey)] = queryValueDecoded;
        }
    };
    Uri.prototype.removeQueryParameter = function (queryKey) {
        delete this._query[this._decodeQueryString(queryKey)];
    };
    Uri.prototype.getFragment = function () {
        return this._fragment;
    };
    Uri.prototype.setFragment = function (fragment) {
        if (fragment[0] === '#') {
            fragment = fragment.substring(1);
        }
        // Treat the fragment as a query string (decode + as space) because we pass in
        // query parameters using the fragment on page load.
        this._fragment = this._decodeQueryString(fragment);
    };
    /**
     * Does a strict equality check of URIs (including same query parameters
     * in the same order, and most comparisons case-sensitive).
     * According to RFC3986: scheme and host should be case-insensitive.
     * Note: This does not follow RFC2616's URI Comparison since it is not HTTP-specific.
     *
     * KNOWN ISSUE: Depending on your definition of "incorrect," this could return
     * incorrect results for URI parts that get decoded.
     * For example: http://somewhere/my%2fpath and http://somewhere/my/path
     * will compare as equal because the comparisons are done to decoded versions.
     */
    Uri.prototype.equals = function (uri) {
        return (Object(_string_StringHelper__WEBPACK_IMPORTED_MODULE_1__["equalsCaseInsensitive"])(this._scheme, uri.getScheme()) &&
            this._user === uri.getUser() &&
            Object(_string_StringHelper__WEBPACK_IMPORTED_MODULE_1__["equalsCaseInsensitive"])(this._host, uri.getHost()) &&
            this._port === uri.getPort() &&
            this._fragment === uri.getFragment() &&
            this._equalsCaseAppropriate(this.getPath(/*trimTrailingSlash*/ true), uri.getPath(true), this._pathCaseInsensitive) &&
            this._equalsCaseAppropriate(this.getQuery(), uri.getQuery(), this._queryCaseInsensitive));
    };
    /**
     * Does an equivalence check of two URIs. Checks to see if the URIs are
     * equivalent, but they may not be exact! Strings are compared case
     * insensitive and query parameters can be in any order.
     *
     * KNOWN ISSUE: Depending on your definition of "incorrect," this could return
     * incorrect results for URI parts that get decoded.
     * For example: http://somewhere/my%2fpath and http://somewhere/my/path
     * will compare as equal because the comparisons are done to decoded versions.
     */
    Uri.prototype.equivalent = function (uri) {
        return (Object(_string_StringHelper__WEBPACK_IMPORTED_MODULE_1__["equalsCaseInsensitive"])(this._scheme, uri.getScheme()) &&
            Object(_string_StringHelper__WEBPACK_IMPORTED_MODULE_1__["equalsCaseInsensitive"])(this._user, uri.getUser()) &&
            Object(_string_StringHelper__WEBPACK_IMPORTED_MODULE_1__["equalsCaseInsensitive"])(this._host, uri.getHost()) &&
            Object(_string_StringHelper__WEBPACK_IMPORTED_MODULE_1__["equalsCaseInsensitive"])(this._port, uri.getPort()) &&
            Object(_string_StringHelper__WEBPACK_IMPORTED_MODULE_1__["equalsCaseInsensitive"])(this.getPath(/*trimTrailingSlash*/ true), uri.getPath(true)) &&
            Object(_object_ObjectUtil__WEBPACK_IMPORTED_MODULE_0__["deepCompare"])(queryToLower(this.getQueryAsObject()), queryToLower(uri.getQueryAsObject())) &&
            Object(_string_StringHelper__WEBPACK_IMPORTED_MODULE_1__["equalsCaseInsensitive"])(this._fragment, uri.getFragment()));
    };
    /**
     * Note that this returns the URL encoded/escaped while the getXXX() methods
     * for the individual components return the unescaped strings. Returning a
     * concatenation of the decoded components would change the semantics of the
     * URL. See section 2.4.2 of RFC 2396 (http://www.ietf.org/rfc/rfc2396.txt).
     *
     * Use doNotPercentEncodeHost to indicate that the output should not have a
     * percent-encoded host, such as when passing to the url parameter of
     * XmlHttpRequest.open(). Section 3.2.2 of RFC 2396 only allows alphanumeric
     * characters and hyphen in the host of a URL, so percent-encoded hosts are
     * not allowed. While section 3.2.2 of RFC 3986 does not restrict the host
     * character set anymore, not all browsers can handle a percent-encoded host
     * - DNS lookup fails.  But, they will convert the unencoded Unicode to the
     * IDNA encoding (punycode), so leaving the host as-is in this case is preferred.
     */
    Uri.prototype.toString = function (outputOptions) {
        return this._getStringInternal(/*encoded*/ true, outputOptions);
    };
    /**
     * This method should be used to obtain a string for display purposes only,
     * because as mentioned above, a decoded URL may have different semantics than
     * the encoded version.
     */
    Uri.prototype.getDecodedStringForDisplay = function () {
        return this._getStringInternal(/*encoded*/ false);
    };
    /*
     * Input URI of "foo://user:pass@host.com/alpha/beta/gamma/delta;p;a;r;a;m;s?q=1&u=2&e=3&r=4&y=5#fragment"
     * would return "foo://user:pass@host.com/alpha/beta/gamma/delta;p;a;r;a;m;s";
     */
    Uri.prototype.getStringWithoutQueryAndFragment = function () {
        return this._getStringWithoutQueryAndFragmentInternal(/*encoded=*/ true);
    };
    Uri.prototype._equalsCaseAppropriate = function (a, b, isCaseInsensitive) {
        if (isCaseInsensitive) {
            return Object(_string_StringHelper__WEBPACK_IMPORTED_MODULE_1__["equalsCaseInsensitive"])(a, b);
        }
        return a === b;
    };
    Uri.prototype._getStringInternal = function (encoded, outputOptions) {
        var ret = this._getStringWithoutQueryAndFragmentInternal(encoded, outputOptions);
        var query = this.getQuery(encoded);
        if (query) {
            ret += '?' + query;
        }
        if (this._fragment) {
            ret += '#' + (encoded ? encodeURIComponent(this._fragment) : this._fragment);
        }
        return ret;
    };
    Uri.prototype._getStringWithoutQueryAndFragmentInternal = function (encoded, outputOptions) {
        var ret = '';
        if (this._scheme) {
            ret += (encoded ? encodeURIComponent(this._scheme) : this._scheme) + ':';
        }
        // Authority includes user, host, and port
        var authority = this._getAuthority(/*encoded=*/ encoded, outputOptions);
        if (authority) {
            ret += '//' + authority;
        }
        if (this._pathEncoded) {
            ret += encoded ? this._pathEncoded : this._path;
        }
        return ret;
    };
    Uri.prototype._deserializeQuery = function (queryStr) {
        var queryObj = {};
        if (queryStr.indexOf('?') === 0) {
            queryStr = queryStr.substring(1);
        }
        for (var _i = 0, _a = queryStr.split(/[;&]+/); _i < _a.length; _i++) {
            var queryPart = _a[_i];
            var keyEndIndex = queryPart.indexOf('=');
            // "foo" is a legal query string equivalent to "foo="
            if (keyEndIndex < 0) {
                keyEndIndex = queryPart.length;
            }
            if (keyEndIndex > 0) {
                queryObj[queryPart.substr(0, keyEndIndex)] = queryPart.substr(keyEndIndex + 1);
            }
        }
        return queryObj;
    };
    Uri.prototype._serializeQuery = function (encoded) {
        var queryStr = '';
        for (var queryKey in this._query) {
            if (this._query.hasOwnProperty(queryKey)) {
                var key = queryKey;
                var value = this._query[queryKey];
                if (encoded) {
                    key = encodeURIComponent(key);
                    value = encodeURIComponent(value);
                }
                if (value === null || value === '') {
                    queryStr += key + '=&';
                }
                else {
                    queryStr += key + '=' + value + '&';
                }
            }
        }
        if (queryStr !== '') {
            queryStr = queryStr.slice(0, -1); //trim extra & at the end
        }
        return queryStr;
    };
    Uri.prototype._parseURI = function (uriString) {
        var remainingString = uriString;
        // Find fragment
        var fragmentBeginPos = remainingString.indexOf('#');
        if (fragmentBeginPos >= 0) {
            var fragment = remainingString.substring(fragmentBeginPos + 1);
            this.setFragment(fragment);
            remainingString = remainingString.substring(0, fragmentBeginPos); //remove fragment
        }
        // Find scheme
        var schemeEndPos = remainingString.search(DELIMITERS);
        if (schemeEndPos >= 0) {
            if (remainingString[schemeEndPos] === ':') {
                this.setScheme(remainingString.substring(0, schemeEndPos));
                remainingString = remainingString.substring(schemeEndPos + 1); //remove scheme
            }
        }
        else {
            this.setPath(remainingString);
            return;
        }
        // Find authority
        var authority = '';
        var doubleSlashPos = remainingString.indexOf('//');
        if (doubleSlashPos === 0) {
            remainingString = remainingString.substring(2); //skip the //
            var authorityEndPos = remainingString.search(AUTHORITY_TERMINATORS);
            if (authorityEndPos >= 0) {
                authority = remainingString.substring(0, authorityEndPos);
                remainingString = remainingString.substring(authorityEndPos); //remove authority
            }
            else {
                authority = remainingString;
                remainingString = '';
            }
            this.setAuthority(authority);
            if (!remainingString) {
                this.setPath('');
                return;
            }
        }
        // Find query
        var queryBeginPos = remainingString.indexOf('?');
        if (queryBeginPos >= 0) {
            this.setQuery(remainingString.substring(queryBeginPos + 1));
            remainingString = remainingString.substring(0, queryBeginPos);
        }
        this.setPath(remainingString);
    };
    Uri.prototype._parseAuthority = function (authority) {
        this._host = authority;
        var userNameEndPos = authority.lastIndexOf('@');
        if (userNameEndPos >= 0) {
            this._host = this._host.substring(userNameEndPos + 1);
        }
        var hostPortSeparatorPos = this._host.indexOf(':');
        if (userNameEndPos < 0 && hostPortSeparatorPos < 0) {
            return;
        }
        var authorityComponents = authority;
        if (userNameEndPos < 0) {
            this._host = authorityComponents;
        }
        else {
            this._user = authorityComponents.substring(0, userNameEndPos);
            this._host = authorityComponents.substring(userNameEndPos + 1);
        }
        if (hostPortSeparatorPos >= 0) {
            this._port = this._host.substring(hostPortSeparatorPos + 1);
            this._host = this._host.substring(0, hostPortSeparatorPos);
        }
        this._user = decodeURIComponent(this._user);
        this._host = decodeURIComponent(this._host);
    };
    Uri.prototype._parsePath = function (remainingString) {
        this._path = decodeURIComponent(remainingString);
        var pathSegments = (this._pathSegments = []);
        this._pathEncoded = remainingString;
        // We have to split the path BEFORE decoding so that encoded / characters
        // don't get interpreted as path separators.
        var encodedPathSegments = remainingString.split('/');
        for (var i = 0; i < encodedPathSegments.length; ++i) {
            pathSegments[i] = decodeURIComponent(encodedPathSegments[i]);
        }
        // Trims first/last element if empty
        if (pathSegments[0] === '') {
            pathSegments.shift(); // remove first element
        }
        if (pathSegments[pathSegments.length - 1] === '') {
            pathSegments.pop(); // remove last element
        }
    };
    Uri.prototype._getAuthority = function (encoded, outputOptions) {
        if (outputOptions === void 0) { outputOptions = {}; }
        // Note that if encoded is false, doNotPercentEncodeHost doesn't matter - the whole URI (including host) will not be encoded.
        var doNotPercentEncodeHost = outputOptions && outputOptions.doNotPercentEncodeHost;
        var authority = '';
        var user;
        var host;
        var port;
        if (encoded) {
            // While technically a reserved character, ':' is commonly used in the
            // username to denote username:password, so we special case not encoding
            // the first occurence of this character.
            user = encodeURIComponent(this._user).replace('%3A', ':');
            if (doNotPercentEncodeHost) {
                host = this._host;
            }
            else {
                host = encodeURIComponent(this._host);
            }
            port = encodeURIComponent(this._port);
        }
        else {
            user = this._user;
            host = this._host;
            port = this._port;
        }
        if (user !== '') {
            authority = user + '@';
        }
        if (this._host !== '') {
            authority += host;
        }
        if (this._port !== '') {
            authority += ':' + port;
        }
        return authority;
    };
    Uri.prototype._decodeQueryString = function (component) {
        // For query strings only, "+" is a valid substitute for a space, but decodeURIComponent
        // doesn't take this into account. (Note that replace("+", " ") only replaces one +.)
        var result = component;
        try {
            result = decodeURIComponent(component.replace(/\+/g, ' '));
        }
        catch (e) {
            // %1 (or anything with a % that is not a result of calling encodeURIComponent)
            // would make decodeURIComponent throw a URI malformed exception.
            // Return the original value in these cases.
        }
        return result;
    };
    return Uri;
}());
/* harmony default export */ __webpack_exports__["default"] = (Uri);
//# sourceMappingURL=Uri.js.map

/***/ }),

/***/ "I844":
/*!*************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/utilities-async@1.1.1/node_modules/@ms/utilities-async/lib/signal/CancelableSignal.js ***!
  \*************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _promise_CancelablePromise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../promise/CancelablePromise */ "XnbY");
// OneDrive:IgnoreCodeCoverage

/**
 * Signal is used to manage a promise without having to pass a function to the Promise constructor.
 * Example:
 * var s = new Signal<boolean>();
 * setTimeout(() => {
 *    s.complete(true);
 * }, 1000);
 * return s.promise;
 */
var Signal = /** @class */ (function () {
    /**
     * Create a new Signal (also known as a Deferred in some circles.)
     * @param: oncancel A function to be called when the promise is cancelled.
     */
    function Signal(oncancel) {
        this._promise = new _promise_CancelablePromise__WEBPACK_IMPORTED_MODULE_0__["SignalPromise"](oncancel);
    }
    /**
     * The underlying promise that the Signal manages.
     */
    Signal.prototype.getPromise = function () {
        return this._promise;
    };
    /**
     * Cancel the underlying promise.
     */
    Signal.prototype.cancel = function () {
        this._promise.cancel();
    };
    /**
     * Complete the underlying promise with the given value.
     */
    Signal.prototype.complete = function (value) {
        this._promise._completed(value);
    };
    /**
     * Put the underlying promise into the error state with the given value.
     */
    // tslint:disable-next-line: no-any
    Signal.prototype.error = function (value) {
        this._promise._error(value);
    };
    return Signal;
}());
/* harmony default export */ __webpack_exports__["default"] = (Signal);
//# sourceMappingURL=CancelableSignal.js.map

/***/ }),

/***/ "JB/h":
/*!********************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-utilities@29.7.9_5d977624104b06c7bcaa2de974ff51f1/node_modules/@ms/odsp-utilities/lib/features/FeaturesBasic.js ***!
  \********************************************************************************************************************************************************************************/
/*! exports provided: isSPFeatureEnabled */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSPFeatureEnabled", function() { return isSPFeatureEnabled; });
/* harmony import */ var _killswitch_Killswitch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../killswitch/Killswitch */ "QUgr");

function isSPFeatureEnabled(feature, expFeatures) {
    var result = !!feature.Fallback;
    var odb = feature.ODB;
    var elem;
    var mask;
    if (typeof odb === 'boolean') {
        result = odb;
    }
    else if (odb > 0) {
        if (!_killswitch_Killswitch__WEBPACK_IMPORTED_MODULE_0__["Killswitch"].isActivated('567ec2dd-e6e4-448a-b62e-dc197c2f6674', '09/21/2020', 'SPEED_New_Client_ReservationId_RangeSet2_KillSwitch')) {
            // 1. Flights currently process 2 different range sets 1. [0 - 2000]
            // and 2. [60000 - 89999] that are bit encoded as a bitarray.
            // 2. A. Flights from 0 - 2000 are encoded in bit array position
            // 0 - 2000.
            // 2. B. Flights from 60000 onwards are encoded in bit array position
            // 2001 onwards. (As the preceding range has taken up slots 0 - 2000)
            // 3. The bit array is integer encoded and sent as a javascript
            // snippet to the client page.
            // 4. This SPFlight class needs to determine the current position of
            // the flight based on the flightId in the javascript integer snippet.
            // 5. Here since all flights eventually are a single stream of bits
            // from 0 onwards. We must map the new flight range to get the right
            // index position. So RangeSet 1 [0 - 2000] flightIds maps to [0 - 2000]
            // indices in the bit array while RangeSet 2 [60000+=] flightIds
            // maps to [2001+=] indices in the bit array. So 2000 here
            // is used to indicate the previous indices which are already
            // occupied by flightIds [0 - 2000]. 1 is because arrays are 0 index
            // counters. So if the bit array count is 2000 there are actually
            // 2001 flights evauluated.
            if (odb >= 60000) {
                var flight = odb - 60000 + 2000 + 1; // This gets the correct flights
                // index position for flights greater than 60000.
                elem = Math.floor(flight / 32);
                mask = 1 << flight % 32;
            }
            else if (odb <= 2000) {
                // prevent invalid featureIDs > 2000 from getting results from FeatureIds > 60000
                elem = Math.floor(odb / 32);
                mask = 1 << odb % 32;
            }
            else {
                return false;
            }
        }
        else {
            elem = Math.floor(odb / 32);
            mask = 1 << odb % 32;
        }
        result = elem < expFeatures.length && (expFeatures[elem] & mask) !== 0;
    }
    return result;
}
//# sourceMappingURL=FeaturesBasic.js.map

/***/ }),

/***/ "Joik":
/*!**********************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-utilities@29.7.9_5d977624104b06c7bcaa2de974ff51f1/node_modules/@ms/odsp-utilities/lib/logging/events/Api.event.js ***!
  \**********************************************************************************************************************************************************************************/
/*! exports provided: ResultTypeEnum, Api, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Api", function() { return Api; });
/* harmony import */ var _PairedEventBase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../PairedEventBase */ "g/c1");
/* harmony import */ var _Qos_event__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Qos.event */ "c09w");
/* harmony import */ var _ResultTypeEnum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ResultTypeEnum */ "BgFM");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ResultTypeEnum", function() { return _ResultTypeEnum__WEBPACK_IMPORTED_MODULE_2__["ResultTypeEnum"]; });

// OneDrive:IgnoreCodeCoverage




var Api = Object(_PairedEventBase__WEBPACK_IMPORTED_MODULE_0__["createPairedEvent"])({
    eventName: 'Api,Qos,',
    shortEventName: 'Api'
}, {
    url: 1 /* String */,
    privacyClassification: {
        isPrefixingDisabled: true,
        type: 1 /* String */
    }
}, _Qos_event__WEBPACK_IMPORTED_MODULE_1__["Qos"]).withData({ privacyClassification: "requiredService" /* requiredService */ });
/* harmony default export */ __webpack_exports__["default"] = (Api);
//# sourceMappingURL=Api.event.js.map

/***/ }),

/***/ "K5xv":
/*!************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/telemetry-manager@1.1.3/node_modules/@ms/telemetry-manager/lib/events/Trace.event.js ***!
  \************************************************************************************************************************************************/
/*! exports provided: Trace */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Trace", function() { return Trace; });
/* harmony import */ var _SingleEventBase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../SingleEventBase */ "yb4E");
// OneDrive:IgnoreCodeCoverage

var Trace = Object(_SingleEventBase__WEBPACK_IMPORTED_MODULE_0__["createSingleEvent"])({
    eventName: 'Trace,',
    shortEventName: 'Trace',
    requiresParent: false
}, {
    message: 1 /* String */,
    privacyClassification: {
        isPrefixingDisabled: true,
        type: 1 /* String */
    }
}).withData({
    privacyClassification: "requiredService" /* requiredService */,
    privacyDataTypes: ['browsingHistory']
});
//# sourceMappingURL=Trace.event.js.map

/***/ }),

/***/ "K65J":
/*!***********************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-utilities@29.7.9_5d977624104b06c7bcaa2de974ff51f1/node_modules/@ms/odsp-utilities/lib/logging/rumone/APITracker.js ***!
  \***********************************************************************************************************************************************************************************/
/*! exports provided: global, APICallType, RUMOneAPITracker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "global", function() { return global; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APICallType", function() { return APICallType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RUMOneAPITracker", function() { return RUMOneAPITracker; });
// OneDrive:IgnoreCodeCoverage
var global = typeof window === 'undefined' ? self : window;
function getRequestIdGenerator() {
    var requestId = 0;
    return function () {
        return (requestId++).toString();
    };
}
var APICallType;
(function (APICallType) {
    APICallType[APICallType["xhr"] = 0] = "xhr";
    APICallType[APICallType["fetch"] = 1] = "fetch";
})(APICallType || (APICallType = {}));
var RUMOneAPITracker = /** @class */ (function () {
    function RUMOneAPITracker() {
        this._requestIdGenerator = getRequestIdGenerator();
    }
    /**
     * instrument
     */
    RUMOneAPITracker.prototype.instrument = function (options) {
        var _this_1 = this;
        if (!global.__RUMOneAPITrackerInstrumented) {
            global.__RUMOneAPITrackerInstrumented = true;
        }
        else {
            return;
        }
        var fetchOptions = options.fetch, xhrOptions = options.xhr;
        if ('XMLHttpRequest' in global && typeof XMLHttpRequest !== 'undefined') {
            this._originalXhrSend = XMLHttpRequest.prototype.send;
            this._originalXhrOpen = XMLHttpRequest.prototype.open;
            var _this_2 = this;
            XMLHttpRequest.prototype.open = function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                // No arrow function.
                this.requestUrl = args[1];
                return _this_2._originalXhrOpen.apply(this, args);
            };
            XMLHttpRequest.prototype.send = function () {
                var _this_1 = this;
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                // No arrow function.
                var requestId = _this_2._requestIdGenerator();
                xhrOptions.onRequest({
                    request: this,
                    id: requestId,
                    type: 0 /* xhr */
                });
                this.addEventListener('readystatechange', function () {
                    if (_this_1.readyState === 4) {
                        xhrOptions.onResponse({
                            request: _this_1,
                            id: requestId,
                            type: 0 /* xhr */
                        });
                    }
                });
                return _this_2._originalXhrSend.apply(this, args);
            };
        }
        if ('fetch' in global && typeof global.fetch !== 'undefined') {
            this._originalFetch = global.fetch.bind(global);
            global.fetch = function (input, init) {
                return new Promise(function (resolve, reject) {
                    var requestId = _this_1._requestIdGenerator();
                    fetchOptions.onRequest({
                        request: input,
                        id: requestId,
                        type: 1 /* fetch */
                    });
                    _this_1._originalFetch(input, init).then(function (response) {
                        fetchOptions.onResponse({
                            response: response,
                            id: requestId,
                            type: 1 /* fetch */
                        });
                        resolve(response);
                    }, function (err) {
                        reject(err);
                    });
                });
            };
        }
    };
    RUMOneAPITracker.prototype.undoInstrument = function () {
        global.__RUMOneAPITrackerInstrumented = false;
        if (this._originalXhrOpen) {
            XMLHttpRequest.prototype.open = this._originalXhrOpen;
        }
        if (this._originalXhrSend) {
            XMLHttpRequest.prototype.send = this._originalXhrSend;
        }
        if (this._originalFetch) {
            global.fetch = this._originalFetch;
        }
    };
    return RUMOneAPITracker;
}());

//# sourceMappingURL=APITracker.js.map

/***/ }),

/***/ "KaEC":
/*!*****************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-utilities@29.7.9_5d977624104b06c7bcaa2de974ff51f1/node_modules/@ms/odsp-utilities/lib/xhr/XHR.js ***!
  \*****************************************************************************************************************************************************************/
/*! exports provided: XHRStatus, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XHRStatus", function() { return XHRStatus; });
/* harmony import */ var _async_Async__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../async/Async */ "wzyn");
/* harmony import */ var _logging_ErrorHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../logging/ErrorHelper */ "lmjA");
/* harmony import */ var _object_ObjectUtil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../object/ObjectUtil */ "Nsau");



/**
 * Special status values based on states of the XHR instance.
 */
var XHRStatus;
(function (XHRStatus) {
    XHRStatus[XHRStatus["blocked"] = 0] = "blocked";
    XHRStatus[XHRStatus["exception"] = -1] = "exception";
    XHRStatus[XHRStatus["timeout"] = -2] = "timeout";
    XHRStatus[XHRStatus["abort"] = -3] = "abort";
})(XHRStatus || (XHRStatus = {}));
var XHR = /** @class */ (function () {
    function XHR(options) {
        this._async = new _async_Async__WEBPACK_IMPORTED_MODULE_0__["default"](this);
        var url = options.url, _a = options.requestTimeoutInMS, requestTimeoutInMS = _a === void 0 ? XHR.DEFAULT_TIMEOUT_MS : _a, postData = options.json, _b = options.responseType, responseType = _b === void 0 ? '' : _b, _c = options.headers, headers = _c === void 0 ? {} : _c, _d = options.withCredentials, withCredentials = _d === void 0 ? false : _d, _e = options.needsCors, needsCors = _e === void 0 ? false : _e, progressCallback = options.onProgress, uploadProgressCallback = options.onUploadProgress;
        var _f = options.method, method = _f === void 0 ? postData ? 'POST' : 'GET' : _f;
        this._url = url;
        this._requestTimeoutInMS = requestTimeoutInMS;
        this._postData = postData;
        this._headers = headers;
        this._method = method;
        this._withCredentials = withCredentials;
        this._needsCors = needsCors;
        this._responseType = responseType;
        this._progressCallback = progressCallback;
        this._uploadProgressCallback = uploadProgressCallback;
    }
    XHR.prototype.abort = function (isCancelled) {
        var aborted = this._abortRequest();
        if (aborted && !isCancelled) {
            this._callFailureCallback(this._request, -3 /* abort */, false);
        }
    };
    XHR.prototype.start = function (successCallback, failureCallback) {
        var _this = this;
        this._successCallback = successCallback;
        this._failureCallback = failureCallback;
        var _a = this, method = _a._method, headers = _a._headers;
        try {
            this._request = this._getRequest();
            var _b = this, progressCallback_1 = _b._progressCallback, uploadProgressCallback_1 = _b._uploadProgressCallback, request_1 = _b._request, responseType = _b._responseType;
            if (progressCallback_1) {
                request_1.onprogress = function (event) {
                    try {
                        progressCallback_1(event);
                    }
                    catch (error) {
                        _logging_ErrorHelper__WEBPACK_IMPORTED_MODULE_1__["default"].logError(error);
                    }
                };
            }
            if (uploadProgressCallback_1) {
                request_1.upload.onprogress = function (event) {
                    try {
                        uploadProgressCallback_1(event);
                    }
                    catch (error) {
                        _logging_ErrorHelper__WEBPACK_IMPORTED_MODULE_1__["default"].logError(error);
                    }
                };
            }
            this._async.setTimeout(function () {
                // Check if we havent logged this event already
                if (!_this._completed) {
                    _this._timeoutCallback();
                }
            }, this._requestTimeoutInMS);
            // Report Qos on the actual qos calls
            request_1.onreadystatechange = function () {
                // Check if we havent logged this event in a timeout
                if (!_this._completed) {
                    var DONE = 4; // Default done readystate
                    try {
                        DONE = request_1.DONE || 4;
                    }
                    catch (e) {
                        // IE 9 will throw here if the request was aborted just swallow this
                    }
                    if (request_1.readyState === DONE) {
                        _this._requestEndCallback();
                    }
                }
            };
            request_1.open(method, this._url, true);
            if ('withCredentials' in request_1) {
                request_1.withCredentials = this._withCredentials;
            }
            // In IE, responseType has to be set after open is called
            request_1.responseType = responseType;
            // Headers have to be set after open is called
            for (var x in headers) {
                request_1.setRequestHeader(x, headers[x]);
            }
            request_1.send(this._postData);
        }
        catch (error) {
            _logging_ErrorHelper__WEBPACK_IMPORTED_MODULE_1__["default"].logError(error, {
                origin: location ? location.origin : 'unknown',
                withCredentials: this._withCredentials,
                requestUrl: this._url,
                headers: Object(_object_ObjectUtil__WEBPACK_IMPORTED_MODULE_2__["safeSerialize"])(headers),
                method: method
            });
            // abort the request and set the exception status code
            this._abortRequest();
            this._callFailureCallback(this._request, -1 /* exception */, false);
        }
    };
    XHR.prototype._getRequest = function () {
        var _this = this;
        if (!this._needsCors || !window['XDomainRequest']) {
            return new XMLHttpRequest();
        }
        // This is only needed for IE 9 to support CORS requests
        // Note: we can not set headers on XDomainRequest
        var request = new XDomainRequest();
        request.setRequestHeader = function () {
            /* Intentionally left blank */
        };
        request.onprogress = function () {
            /* Intentionally left blank */
        };
        request.ontimeout = function () {
            /* Intentionally left blank */
        };
        request.onload = function () {
            _this._requestEndCallback();
        };
        return request;
    };
    XHR.prototype._abortRequest = function () {
        var actuallyAborted = false;
        if (!this._completed) {
            this._completed = true;
            // Clear the timeout for the request
            this._async.dispose();
            // Cancel the request
            try {
                if (this._request) {
                    this._request.abort();
                }
            }
            catch (error) {
                // IE 9 will throw here if the request was aborted just swallow this
            }
            actuallyAborted = true;
        }
        return actuallyAborted;
    };
    XHR.prototype._timeoutCallback = function () {
        if (!this._completed) {
            this._abortRequest();
            this._callFailureCallback(this._request, -2 /* timeout */, true);
        }
    };
    XHR.prototype._callSuccessCallback = function (xhr, statusCode) {
        try {
            if (this._successCallback) {
                this._successCallback(xhr, statusCode);
            }
        }
        catch (error) {
            _logging_ErrorHelper__WEBPACK_IMPORTED_MODULE_1__["default"].log(error);
        }
    };
    XHR.prototype._callFailureCallback = function (xhr, statusCode, timeout) {
        try {
            if (this._failureCallback) {
                this._failureCallback(xhr, statusCode, timeout);
            }
        }
        catch (error) {
            _logging_ErrorHelper__WEBPACK_IMPORTED_MODULE_1__["default"].log(error);
        }
    };
    XHR.prototype._requestEndCallback = function () {
        if (!this._completed) {
            this._completed = true;
            var status_1 = -1 /* exception */;
            try {
                // Clear the timeout for the request
                this._async.dispose();
                try {
                    status_1 = this._request.status;
                }
                catch (error) {
                    // IE 9 will throw here if the request was aborted just swallow this
                }
            }
            catch (error) {
                status_1 = -1 /* exception */;
                _logging_ErrorHelper__WEBPACK_IMPORTED_MODULE_1__["default"].log(error);
            }
            if (status_1 < 400 && status_1 > 0) {
                this._callSuccessCallback(this._request, status_1);
            }
            else {
                this._callFailureCallback(this._request, status_1, false);
            }
        }
    };
    XHR.DEFAULT_TIMEOUT_MS = 30000;
    return XHR;
}());
/* harmony default export */ __webpack_exports__["default"] = (XHR);
//# sourceMappingURL=XHR.js.map

/***/ }),

/***/ "L3+i":
/*!***********************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/telemetry-manager@1.1.3/node_modules/@ms/telemetry-manager/lib/CorrelationVector.js ***!
  \***********************************************************************************************************************************************/
/*! exports provided: CorrelationVector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CorrelationVector", function() { return CorrelationVector; });
/* harmony import */ var _ms_utilities_guid_lib_Guid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ms/utilities-guid/lib/Guid */ "Ng1F");

var CorrelationVector = /** @class */ (function () {
    function CorrelationVector(parent, current) {
        if (parent) {
            this.root = parent.root;
            this.parent = parent.current;
        }
        else {
            this.root = this.parent = _ms_utilities_guid_lib_Guid__WEBPACK_IMPORTED_MODULE_0__["Empty"];
        }
        if (current) {
            this.current = current;
        }
        else {
            this.current = _ms_utilities_guid_lib_Guid__WEBPACK_IMPORTED_MODULE_0__["generate"]();
        }
    }
    CorrelationVector._getCorrelationVector = function () {
        var rootVector;
        if (typeof window !== 'undefined') {
            rootVector = window.rootVector;
        }
        else if (typeof self !== 'undefined') {
            rootVector = self.rootVector;
        }
        return rootVector || new CorrelationVector();
    };
    CorrelationVector.prototype.toString = function () {
        return this.root + "#" + this.parent + "#" + this.current;
    };
    CorrelationVector.RootVector = CorrelationVector._getCorrelationVector();
    return CorrelationVector;
}());

//# sourceMappingURL=CorrelationVector.js.map

/***/ }),

/***/ "LSjO":
/*!**********************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-utilities@29.7.9_5d977624104b06c7bcaa2de974ff51f1/node_modules/@ms/odsp-utilities/lib/async/Signal.js ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ms_utilities_async_lib_signal_CancelableSignal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ms/utilities-async/lib/signal/CancelableSignal */ "I844");
/* empty/unused harmony star reexport *//* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _ms_utilities_async_lib_signal_CancelableSignal__WEBPACK_IMPORTED_MODULE_0__["default"]; });



//# sourceMappingURL=Signal.js.map

/***/ }),

/***/ "Ng1F":
/*!****************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/utilities-guid@1.0.0/node_modules/@ms/utilities-guid/lib/Guid.js ***!
  \****************************************************************************************************************************/
/*! exports provided: Empty, generate, normalizeLower, normalizeUpper, normalizeDashes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Empty", function() { return Empty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generate", function() { return generate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalizeLower", function() { return normalizeLower; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalizeUpper", function() { return normalizeUpper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalizeDashes", function() { return normalizeDashes; });
// tslint:disable:no-bitwise
function generateUuidPart(length) {
    var str = '';
    while (str.length < length) {
        var num = Math.random() * 16;
        num = num | 0; // clear decimal
        str += num.toString(16);
    }
    return str;
}
/**
 * @public
 */
var Empty = '00000000-0000-0000-0000-000000000000';
/**
 * Return a v4 UUID as specified by RFC 4122 http://tools.ietf.org/html/rfc4122
 *
 * @public
 */
function generate() {
    var parts = [];
    parts.push(generateUuidPart(8));
    parts.push(generateUuidPart(4));
    // first digit must be 4 since we are using pseudorandom numbers
    var timeHighAndVersion = '4' + generateUuidPart(3);
    parts.push(timeHighAndVersion);
    // first digit must have first two bits set to 10
    var clockSeqHiAndReserved = generateUuidPart(4);
    // ClockSeqHiAndReserved is a base-16 string.
    var intVal = parseInt(clockSeqHiAndReserved[0], 16);
    intVal = intVal & 3; // clear out first two bits
    intVal = intVal | 8; // set first bit to 1
    clockSeqHiAndReserved = intVal.toString(16) + clockSeqHiAndReserved.substr(1);
    parts.push(clockSeqHiAndReserved);
    parts.push(generateUuidPart(12));
    return parts.join('-');
}
/**
 * Normalizes a GUID to lowercase. Returns '' if guid is not given.
 * @param includeBrackets - if true, add or keep brackets; if false, strip brackets
 *
 * @public
 */
function normalizeLower(guid, includeBrackets) {
    if (includeBrackets === void 0) { includeBrackets = false; }
    return guid ? _normalizeBrackets(guid.toLowerCase(), includeBrackets) : '';
}
/**
 * Normalizes a GUID to uppercase. Returns '' if guid is not given.
 * @param includeBrackets - if true, add or keep brackets; if false, strip brackets
 *
 * @public
 */
function normalizeUpper(guid, includeBrackets) {
    if (includeBrackets === void 0) { includeBrackets = false; }
    return guid ? _normalizeBrackets(guid.toUpperCase(), includeBrackets) : '';
}
/**
 * Normalizes the dashes in a GUID. Returns '' if the input is null, undefined, or does not contain
 * 32 hexadecimal characters.
 * @param guid - The GUID
 * @param includeBrackets - if true, output will contain brackets; if false, output will not
 *
 * @public
 */
function normalizeDashes(guid, includeBrackets) {
    if (includeBrackets === void 0) { includeBrackets = false; }
    if (guid) {
        var parsed = guid.replace(/[^A-Fa-f0-9]/g, '');
        if (parsed.length === 32) {
            return _normalizeBrackets(parsed.slice(0, 8) + "-" + parsed.slice(8, 12) + "-" + parsed.slice(12, 16) + "-" + parsed.slice(16, 20) + "-" + parsed.slice(20), includeBrackets);
        }
    }
    return '';
}
function _normalizeBrackets(guid, includeBrackets) {
    var match = guid.match(/^\{(.*)\}$/);
    if (match) {
        return includeBrackets ? match[0] : match[1];
    }
    return includeBrackets ? '{' + guid + '}' : guid;
}
//# sourceMappingURL=Guid.js.map

/***/ }),

/***/ "Nsau":
/*!***************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-utilities@29.7.9_5d977624104b06c7bcaa2de974ff51f1/node_modules/@ms/odsp-utilities/lib/object/ObjectUtil.js ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: deepCopy, deepCompare, safeSerialize, extend, DEFAULT_DELIMITER, KEYVALUE_DELIMITER, serialize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_DELIMITER", function() { return DEFAULT_DELIMITER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KEYVALUE_DELIMITER", function() { return KEYVALUE_DELIMITER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "serialize", function() { return serialize; });
/* harmony import */ var _encoding_UriEncoding__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../encoding/UriEncoding */ "+35T");
/* harmony import */ var _ms_utilities_objects_lib_deepCopy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ms/utilities-objects/lib/deepCopy */ "jpKs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deepCopy", function() { return _ms_utilities_objects_lib_deepCopy__WEBPACK_IMPORTED_MODULE_1__["deepCopy"]; });

/* harmony import */ var _ms_utilities_objects_lib_deepCompare__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ms/utilities-objects/lib/deepCompare */ "qll9");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deepCompare", function() { return _ms_utilities_objects_lib_deepCompare__WEBPACK_IMPORTED_MODULE_2__["deepCompare"]; });

/* harmony import */ var _ms_utilities_objects_lib_safeSerialize__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ms/utilities-objects/lib/safeSerialize */ "3l1C");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "safeSerialize", function() { return _ms_utilities_objects_lib_safeSerialize__WEBPACK_IMPORTED_MODULE_3__["safeSerialize"]; });

/* harmony import */ var _ms_utilities_objects_lib_assign__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ms/utilities-objects/lib/assign */ "Xdo2");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "extend", function() { return _ms_utilities_objects_lib_assign__WEBPACK_IMPORTED_MODULE_4__["assign"]; });






var DEFAULT_DELIMITER = '&';
var KEYVALUE_DELIMITER = '=';
/**
 * Serializes the object Name Values Pairs (Depth of 1).
 * Used for Query Strings and Cookie Values
 * @param {any} obj Object with name value pairs
 * @param {string} delimeter  Delimiter seperates the pairs
 * @param {boolean} skipEncoding True to skip encoding
 */
function serialize(obj, delimiter, skipEncoding) {
    delimiter = delimiter || DEFAULT_DELIMITER;
    var values = Object.keys(obj).map(function (name) {
        // Get the value and convert it to a string
        var value = obj[name];
        value = value ? value.toString() : '';
        if (!skipEncoding) {
            value = _encoding_UriEncoding__WEBPACK_IMPORTED_MODULE_0__["default"].encodeURIComponent(value);
        }
        // Add the encoded value to the array
        return name + KEYVALUE_DELIMITER + value;
    });
    return values.join(delimiter);
}
//# sourceMappingURL=ObjectUtil.js.map

/***/ }),

/***/ "Oa+Z":
/*!***************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-utilities@29.7.9_5d977624104b06c7bcaa2de974ff51f1/node_modules/@ms/odsp-utilities/lib/events/EventGroup.js ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: EventGroup, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventGroup", function() { return EventGroup; });
/* harmony import */ var _logging_ErrorHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../logging/ErrorHelper */ "lmjA");
/* harmony import */ var _Events__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Events */ "dcNl");


function logToErrorHelper(error) {
    _logging_ErrorHelper__WEBPACK_IMPORTED_MODULE_0__["default"].log(error);
}
/** An instance of EventGroup allows anything with a handle to it to trigger events on it.
 *  If the target is an HTMLElement, the event will be attached to the element and can be
 *  triggered as usual (like clicking for onclick).
 *  The event can be triggered by calling EventGroup.raise() here. If the target is an
 *  HTMLElement, the event gets raised and is handled by the browser. Otherwise, it gets
 *  handled here in EventGroup, and the handler is called in the context of the parent
 *  (which is passed in in the constructor).
 */
var EventGroup = /** @class */ (function () {
    /** parent: the context in which events attached to non-HTMLElements are called */
    function EventGroup(parent, onError) {
        if (onError === void 0) { onError = logToErrorHelper; }
        this._id = EventGroup._uniqueId++;
        this._parent = parent;
        this._onError = onError;
        this._eventRecords = [];
    }
    /**
     *  Events raised here by default have bubbling set to false and cancelable set to true.
     *  This applies also to built-in events being raised manually here on HTMLElements,
     *  which may lead to unexpected behavior if it differs from the defaults.
     */
    EventGroup.raise = function (target, eventName, eventArgs, bubbleEvent) {
        return _Events__WEBPACK_IMPORTED_MODULE_1__["raise"](target, eventName, eventArgs, bubbleEvent);
    };
    EventGroup.isObserved = function (target, eventName) {
        var events = target && target.__events__;
        return !!events && !!events[eventName];
    };
    /** Check to see if the target has declared support of the given event. */
    EventGroup.isDeclared = function (target, eventName) {
        var declaredEvents = target && target.__declaredEvents;
        return !!declaredEvents && !!declaredEvents[eventName];
    };
    EventGroup.stopPropagation = function (event) {
        if (event.stopPropagation) {
            event.stopPropagation();
        }
    };
    EventGroup.prototype.dispose = function () {
        if (!this._isDisposed) {
            this._isDisposed = true;
            this.off();
            this._parent = null;
        }
    };
    /** On the target, attach a set of events, where the events object is a name to function mapping. */
    EventGroup.prototype.onAll = function (target, events, useCapture) {
        for (var eventName in events) {
            this.on(target, eventName, events[eventName], useCapture);
        }
    };
    /** On the target, attach an event whose handler will be called in the context of the parent
     * of this instance of EventGroup.
     */
    EventGroup.prototype.on = function (target, eventName, callback, useCapture) {
        var _this = this;
        if (eventName.indexOf(',') > -1) {
            var events = eventName.split(/[ ,]+/);
            for (var i = 0; i < events.length; i++) {
                this.on(target, events[i], callback, useCapture);
            }
        }
        else {
            var parent = this._parent;
            var eventRecord = {
                target: target,
                eventName: eventName,
                parent: parent,
                callback: callback,
                objectCallback: null,
                elementCallback: null,
                useCapture: useCapture
            };
            // Initialize and wire up the record on the target, so that it can call the callback if the event fires.
            var events_1 = (target.__events__ = target.__events__ || {});
            events_1[eventName] =
                events_1[eventName] ||
                    {
                        count: 0
                    };
            events_1[eventName][this._id] = events_1[eventName][this._id] || [];
            events_1[eventName][this._id].push(eventRecord);
            events_1[eventName].count++;
            if (_Events__WEBPACK_IMPORTED_MODULE_1__["isDOMEventTarget"](target)) {
                var processElementEvent = function () {
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i] = arguments[_i];
                    }
                    if (_this._isDisposed) {
                        return;
                    }
                    try {
                        var result = callback.apply(parent, args);
                        if (result === false && args[0] && args[0].preventDefault) {
                            var e = args[0];
                            e.preventDefault();
                            EventGroup.stopPropagation(e);
                        }
                    }
                    catch (e) {
                        _this._onError(e);
                    }
                    return result;
                };
                eventRecord.elementCallback = processElementEvent;
                /* tslint:disable:ban-native-functions */
                target.addEventListener(eventName, processElementEvent, useCapture);
                /* tslint:enable:ban-native-functions */
            }
            else {
                var processObjectEvent = function () {
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i] = arguments[_i];
                    }
                    if (_this._isDisposed) {
                        return;
                    }
                    return callback.apply(parent, args);
                };
                eventRecord.objectCallback = processObjectEvent;
            }
            // Remember the record locally, so that it can be removed.
            this._eventRecords.push(eventRecord);
        }
    };
    EventGroup.prototype.off = function (target, eventName, callback, useCapture) {
        for (var i = 0; i < this._eventRecords.length; i++) {
            var eventRecord = this._eventRecords[i];
            if ((!target || target === eventRecord.target) &&
                (!eventName || eventName === eventRecord.eventName) &&
                (!callback || callback === eventRecord.callback) &&
                (typeof useCapture !== 'boolean' || useCapture === eventRecord.useCapture)) {
                var events = eventRecord.target.__events__;
                var targetArrayLookup = events[eventRecord.eventName];
                var targetArray = targetArrayLookup ? targetArrayLookup[this._id] : null;
                // We may have already target's entries, so check for null.
                if (targetArray) {
                    if (targetArray.length === 1 || !callback) {
                        targetArrayLookup.count -= targetArray.length;
                        delete events[eventRecord.eventName][this._id];
                    }
                    else {
                        targetArrayLookup.count--;
                        targetArray.splice(targetArray.indexOf(eventRecord), 1);
                    }
                    if (!targetArrayLookup.count) {
                        delete events[eventRecord.eventName];
                    }
                }
                if (eventRecord.elementCallback) {
                    if (eventRecord.target.removeEventListener) {
                        eventRecord.target.removeEventListener(eventRecord.eventName, eventRecord.elementCallback, eventRecord.useCapture);
                    }
                }
                this._eventRecords.splice(i--, 1);
            }
        }
    };
    /** Trigger the given event in the context of this instance of EventGroup. */
    EventGroup.prototype.raise = function (eventName, eventArgs, bubbleEvent) {
        return EventGroup.raise(this._parent, eventName, eventArgs, bubbleEvent);
    };
    /** Declare an event as being supported by this instance of EventGroup. */
    EventGroup.prototype.declare = function (event) {
        var declaredEvents = (this._parent.__declaredEvents = this._parent.__declaredEvents || {});
        if (typeof event === 'string') {
            declaredEvents[event] = true;
        }
        else {
            for (var i = 0; i < event.length; i++) {
                declaredEvents[event[i]] = true;
            }
        }
    };
    EventGroup._uniqueId = 0;
    return EventGroup;
}());

/* harmony default export */ __webpack_exports__["default"] = (EventGroup);
//# sourceMappingURL=EventGroup.js.map

/***/ }),

/***/ "PayJ":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-datasources@45.13.10_e509c819ab980023b76e5746ec0fc9e2/node_modules/@ms/odsp-datasources/lib/dataSources/base/DataRequestor.js ***!
  \**********************************************************************************************************************************************************************************************/
/*! exports provided: getSyncTelemetryHandler, isQosEndSchemaOverride, DataRequestor, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isQosEndSchemaOverride", function() { return isQosEndSchemaOverride; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataRequestor", function() { return DataRequestor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ms_odsp_utilities_lib_async_Promise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ms/odsp-utilities/lib/async/Promise */ "7Ihg");
/* harmony import */ var _ms_odsp_utilities_lib_async_Retry__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ms/odsp-utilities/lib/async/Retry */ "Qbl6");
/* harmony import */ var _ms_odsp_utilities_lib_logging_events_Api_event__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ms/odsp-utilities/lib/logging/events/Api.event */ "Joik");
/* harmony import */ var _ms_odsp_utilities_lib_logging_events_Engagement_event__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ms/odsp-utilities/lib/logging/events/Engagement.event */ "cDPE");
/* harmony import */ var _ms_odsp_utilities_lib_logging_events_Qos_event__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ms/odsp-utilities/lib/logging/events/Qos.event */ "c09w");
/* harmony import */ var _ms_odsp_utilities_lib_logging_rumone_RUMOneLogger__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ms/odsp-utilities/lib/logging/rumone/RUMOneLogger */ "UKDt");
/* harmony import */ var _ms_utilities_error_lib_ApiError__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ms/utilities-error/lib/ApiError */ "6e34");
/* harmony import */ var _ms_odsp_utilities_lib_uri_SimpleUri__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ms/odsp-utilities/lib/uri/SimpleUri */ "mbD+");
/* harmony import */ var _ms_odsp_utilities_lib_logging_RequestDurationLoggingHelper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ms/odsp-utilities/lib/logging/RequestDurationLoggingHelper */ "nXow");
/* harmony import */ var _GetDataError__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./GetDataError */ "FAIF");
/* harmony import */ var _ApiErrorCodes__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ApiErrorCodes */ "uD5U");
/* harmony import */ var _ServerConnection__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./ServerConnection */ "n0/4");
/* harmony import */ var _SyncTelemetryHandler__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./SyncTelemetryHandler */ "lxGK");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getSyncTelemetryHandler", function() { return _SyncTelemetryHandler__WEBPACK_IMPORTED_MODULE_13__["getSyncTelemetryHandler"]; });
















var currentWindow = typeof window !== 'undefined' ? window : undefined;
var performance = currentWindow && currentWindow.performance;
function isQosEndSchemaOverride(item) {
    return typeof item === 'object';
}
var DataRequestor = /** @class */ (function () {
    function DataRequestor(params, dependencies) {
        this._pageContext = dependencies
            ? dependencies.pageContext
            : params.pageContext;
        this._tokenProvider = dependencies && dependencies.tokenProvider;
        this._dataSyncClient = dependencies && dependencies.dataSyncClient;
        this._qosName = params.qosName;
        this._apiEvent = (dependencies && dependencies.apiEvent) || _ms_odsp_utilities_lib_logging_events_Api_event__WEBPACK_IMPORTED_MODULE_3__["default"];
        this._engagement = (dependencies && dependencies.engagement) || _ms_odsp_utilities_lib_logging_events_Engagement_event__WEBPACK_IMPORTED_MODULE_4__["Engagement"];
        this._normalizeErrors = !!params.normalizeErrors;
        this._getDataWithTokenProvider = dependencies && dependencies.getDataWithTokenProvider;
        this._getDataWithSyncClient = dependencies && dependencies.getDataWithSyncClient;
    }
    DataRequestor.parseJSON = function (responseText) {
        return (responseText && JSON.parse(responseText)) || undefined;
    };
    DataRequestor.prototype.getData = function (options) {
        var _this = this;
        var _a;
        var _b = options.parseResponse, parseResponse = _b === void 0 ? DataRequestor.parseJSON : _b, qosExtraData = options.qosExtraData, _c = options.additionalPostData, additionalPostData = _c === void 0 ? '' : _c, contentType = options.contentType, _d = options.method, method = _d === void 0 ? 'POST' : _d, _e = options.maxRetries, maxRetries = _e === void 0 ? 0 : _e, responseType = options.responseType, onUploadProgress = options.onUploadProgress, timeout = options.timeout, _f = options.noTimeoutInLastRetry, noTimeoutInLastRetry = _f === void 0 ? false : _f;
        var pageContext = this._pageContext;
        var tokenProvider = this._tokenProvider;
        var getDataWithTokenProvider = this._getDataWithTokenProvider;
        var getDataWithSyncClient = this._getDataWithSyncClient;
        var qosNames = [];
        if (this._qosName) {
            qosNames.push(this._qosName);
        }
        if (options.qosName) {
            qosNames.push(options.qosName);
        }
        var qosName = qosNames.join('.');
        // Implement the callback that could be overridden by a strategy which calls via the Sync client.
        // This function could take some overrides compared to the original `options`.
        var getDataForSyncMiddleware = function (syncClientOverrides) {
            var url = syncClientOverrides.url, telemetryHandler = syncClientOverrides.telemetryHandler, specifiedAuthToken = syncClientOverrides.authToken, _a = syncClientOverrides.useExactAuthToken, useExactAuthToken = _a === void 0 ? false : _a;
            var shouldRetry = true;
            var telemetryUri = new _ms_odsp_utilities_lib_uri_SimpleUri__WEBPACK_IMPORTED_MODULE_8__["SimpleUri"](url);
            var safeUrlForLogging = telemetryUri.authority + "/{ length: " + telemetryUri.path.length + ", segments: " + telemetryUri.segments.length + " }";
            // Implement the callback that could be overridden by a strategy which obtains an auth token via a provider.
            // This function could take some overrides compared to the original `options`.
            var getDataForTokenProviderMiddleware = function (tokenProviderOverrides) {
                var authToken = tokenProviderOverrides.authToken, finalQosExtraData = tokenProviderOverrides.qosExtraData;
                var _a = options.crossSiteCollectionCall, crossSiteCollectionCall = _a === void 0 ? false : _a, _b = options.noRedirect, noRedirect = _b === void 0 ? false : _b, _c = options.needsRequestDigest, needsRequestDigest = _c === void 0 ? true : _c;
                var additionalHeaders = options.additionalHeaders ? Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, options.additionalHeaders) : undefined;
                // Add Authorization header to request if authToken exists on _spPageContext
                // and an Authorization header doesn't already exist on the request.
                if (authToken) {
                    var authorizationHeaderValue = useExactAuthToken ? authToken : "Bearer " + authToken;
                    // Add Authorization header if it doesn't exist already.
                    if (additionalHeaders) {
                        var authorizationHeaderSpecified = false;
                        for (var headerKey in additionalHeaders) {
                            if (headerKey) {
                                if (headerKey.toLowerCase() === 'authorization') {
                                    authorizationHeaderSpecified = true;
                                }
                            }
                        }
                        if (!authorizationHeaderSpecified) {
                            additionalHeaders['Authorization'] = authorizationHeaderValue;
                        }
                    }
                    else {
                        additionalHeaders = {
                            Authorization: authorizationHeaderValue
                        };
                    }
                    // Since Authorization header is present, the request is cross-origin.
                    crossSiteCollectionCall = true;
                    needsRequestDigest = false;
                    noRedirect = true;
                }
                var serverConnection = new _ServerConnection__WEBPACK_IMPORTED_MODULE_12__["ServerConnection"](Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, (pageContext
                    ? {
                        webServerRelativeUrl: pageContext.webServerRelativeUrl,
                        webAbsoluteUrl: crossSiteCollectionCall ? pageContext.webAbsoluteUrl : undefined,
                        formDigest: {
                            // Pull current digest state from the page.
                            // This helps initial requests avoid extra server calls.
                            // Unit tests will need to spoof this in order to avoid the need to mock the digest response.
                            serverTime: pageContext.serverTime,
                            updateFormDigestPageLoaded: pageContext.updateFormDigestPageLoaded,
                            formDigestValue: pageContext.formDigestValue,
                            formDigestTimeoutSeconds: pageContext.formDigestTimeoutSeconds
                        }
                    }
                    : {})), { needsRequestDigest: needsRequestDigest, engagement: _this._engagement, operationName: _this._qosName }));
                var currentOrigin = currentWindow && currentWindow.location && new _ms_odsp_utilities_lib_uri_SimpleUri__WEBPACK_IMPORTED_MODULE_8__["SimpleUri"](currentWindow.location.href).authority;
                var targetOrigin = new _ms_odsp_utilities_lib_uri_SimpleUri__WEBPACK_IMPORTED_MODULE_8__["SimpleUri"](url).authority;
                var lastApiEvent;
                var serviceWorkerDataSource;
                /* tslint:disable: no-any */
                var onExecute = function (complete, error) {
                    /* tslint:enable: no-any */
                    // forward declaration to shut up linter
                    var doGetData;
                    var onDataSuccess = function (apiEvent, requestPerformanceStartTime) { return function (serverData) {
                        var response = serverData.getResponseText();
                        serviceWorkerDataSource = serverData.getServiceWorkerDataSourceHeader();
                        var performanceMetrics = Object(_ms_odsp_utilities_lib_logging_RequestDurationLoggingHelper__WEBPACK_IMPORTED_MODULE_9__["getRequestEntryDurationMetrics"])(url, requestPerformanceStartTime);
                        var extraData = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, (qosExtraData || {})), { needsRequestDigest: needsRequestDigest, hasAuthToken: !!authToken, isCrossOrigin: !!currentOrigin && currentOrigin !== targetOrigin, CorrelationId: serverData.getCorrelationId() }), (finalQosExtraData || {})), { HttpStatus: serverData.getStatus(), serviceWorkerDataSource: serviceWorkerDataSource || undefined, rawRequestDuration: performanceMetrics.duration, performanceEntry: JSON.stringify(performanceMetrics), serviceWorkerFetchInfo: serverData.getServiceWorkerFetchInfoFromHeader() || undefined });
                        var parsedResponse = false;
                        var parseError;
                        var data;
                        var blobData;
                        var qosData;
                        try {
                            if (isBlobResponse(responseType, response)) {
                                blobData = response;
                            }
                            else {
                                // This line could throw if the response does not have the expected data type.
                                // For example, there is at least one handler (SpoSuiteLinks.ashx) that will return
                                // an HTML error page rather than the expected JSON on error. We should count that case
                                // as a failure even though *something* was successfully returned.
                                data = parseResponse(response, serverData);
                            }
                            parsedResponse = true;
                        }
                        catch (e) {
                            parseError = e;
                            qosData = {
                                resultType: _ms_odsp_utilities_lib_logging_events_Qos_event__WEBPACK_IMPORTED_MODULE_5__["ResultTypeEnum"].Failure,
                                resultCode: 'InvalidJSON',
                                error: typeof e === 'object' ? JSON.stringify(e) : e,
                                extraData: extraData
                            };
                        }
                        if (!qosData) {
                            qosData = {
                                resultType: _ms_odsp_utilities_lib_logging_events_Qos_event__WEBPACK_IMPORTED_MODULE_5__["ResultTypeEnum"].Success,
                                extraData: extraData
                            };
                        }
                        if (telemetryHandler) {
                            var eventData = telemetryHandler({
                                response: data,
                                eventData: qosData
                            }).eventData;
                            qosData = eventData;
                        }
                        apiEvent.end(qosData);
                        // pass the response to the caller
                        if (parsedResponse) {
                            try {
                                complete(blobData || data);
                            }
                            catch (ex) {
                                // the caller failed to handle the data
                                // no-op
                            }
                        }
                        else {
                            // let the caller know there was an error in parsing the data
                            error(_this._normalizeErrors
                                ? new _GetDataError__WEBPACK_IMPORTED_MODULE_10__["GetDataError"]({
                                    code: '-1,parse_response',
                                    innerError: parseError,
                                    errorData: {
                                        status: serverData.getStatus()
                                    }
                                })
                                : undefined);
                        }
                        serverConnection = undefined;
                    }; };
                    var onError = function (apiEvent, requestPerformanceStartTime) { return function (serverData, requestError) {
                        var performanceMetrics = Object(_ms_odsp_utilities_lib_logging_RequestDurationLoggingHelper__WEBPACK_IMPORTED_MODULE_9__["getRequestEntryDurationMetrics"])(url, requestPerformanceStartTime);
                        var extraData = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, (qosExtraData || {})), { needsRequestDigest: needsRequestDigest, hasAuthToken: !!authToken, isCrossOrigin: !!currentOrigin && currentOrigin !== targetOrigin, rawRequestDuration: performanceMetrics.duration, performanceEntry: JSON.stringify(performanceMetrics) });
                        var isOffline = typeof navigator !== 'undefined' && navigator.onLine === false;
                        if (!serverData) {
                            var code = _ApiErrorCodes__WEBPACK_IMPORTED_MODULE_11__["unknown"];
                            var isExpected = true;
                            var status_1 = 0;
                            if (requestError && requestError instanceof _ms_utilities_error_lib_ApiError__WEBPACK_IMPORTED_MODULE_7__["ApiError"]) {
                                code = requestError.code;
                                isExpected = requestError.isExpected;
                                status_1 = -1;
                            }
                            if (isOffline && (code === _ApiErrorCodes__WEBPACK_IMPORTED_MODULE_11__["noConnection"] || code === _ApiErrorCodes__WEBPACK_IMPORTED_MODULE_11__["unknown"])) {
                                // Upgrade no connection errors to offline as it is more descriptive
                                code = _ApiErrorCodes__WEBPACK_IMPORTED_MODULE_11__["offline"];
                            }
                            var errorData = {
                                status: status_1,
                                code: code
                            };
                            // Request completed, but did not return data or a useful status code. This can happen for any number of reasons:
                            // CORS Rejection (we could make a guess about this by comparing url origins)
                            // Request blocked by client (e.g. extension)
                            // Request blocked by firewall
                            var qosData = {
                                resultType: isExpected ? _ms_odsp_utilities_lib_logging_events_Qos_event__WEBPACK_IMPORTED_MODULE_5__["ResultTypeEnum"].ExpectedFailure : _ms_odsp_utilities_lib_logging_events_Qos_event__WEBPACK_IMPORTED_MODULE_5__["ResultTypeEnum"].Failure,
                                resultCode: code,
                                extraData: extraData
                            };
                            // Ensure that Promises that wrap the data request always complete.
                            error(_this._normalizeErrors
                                ? new _GetDataError__WEBPACK_IMPORTED_MODULE_10__["GetDataError"]({
                                    errorData: errorData,
                                    innerError: requestError
                                })
                                : errorData);
                            if (telemetryHandler) {
                                var eventData = telemetryHandler({
                                    eventData: qosData,
                                    errorData: errorData
                                }).eventData;
                                qosData = eventData;
                            }
                            apiEvent.end(qosData);
                            return;
                        }
                        var correlationId = serverData.getCorrelationId();
                        var groupThrottle = serverData.getGroupThrottle();
                        var MSCorrelationVector = serverData.getMSCorrelationVector();
                        var status = serverData.getStatus();
                        var authErrorType = serverData.getAuthErrorType();
                        var fbaHeaderError = serverData.getFBAError();
                        extraData = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, extraData), { CorrelationId: correlationId, HttpStatus: status, GroupThrottle: groupThrottle, MSCorrelationVector: MSCorrelationVector, AuthErrorType: authErrorType });
                        var resultType = _ms_odsp_utilities_lib_logging_events_Qos_event__WEBPACK_IMPORTED_MODULE_5__["ResultTypeEnum"].Failure;
                        if ((status === 401 && fbaHeaderError) ||
                            status === 403 ||
                            status === 404 ||
                            status === 429 ||
                            status === 503 ||
                            status === -1 ||
                            (status === 0 && isOffline)) {
                            // no need to retry authentication errors...
                            // no need to retry document not found errors...
                            // no need to retry resource throttling errors... (we need to back away from it. 503 is SQL throttling)
                            // no need to retry if the request was missing parameters
                            // no need to retry if we are offline
                            shouldRetry = false;
                            resultType = _ms_odsp_utilities_lib_logging_events_Qos_event__WEBPACK_IMPORTED_MODULE_5__["ResultTypeEnum"].ExpectedFailure;
                        }
                        var parseQosError = function (response) {
                            var errorData = undefined;
                            var innerError;
                            if (typeof response === 'object' && typeof response.status === 'number') {
                                // Test to see if the response is already an IErrorData
                                errorData = response;
                            }
                            else if (typeof response === 'string') {
                                var parsedData = undefined;
                                try {
                                    parsedData = JSON.parse(response);
                                }
                                catch (ex) {
                                    // np-op
                                }
                                innerError = getAuthErrorData({
                                    authDiagnostics: authErrorType,
                                    fbaHeaderError: fbaHeaderError
                                });
                                if (parsedData) {
                                    if (parsedData.error_description) {
                                        errorData = {
                                            code: "-1," + (parsedData.error || 'Unknown'),
                                            message: parsedData.error_description
                                        };
                                    }
                                    else if (typeof parsedData.error === 'string') {
                                        errorData = {
                                            message: parsedData.error
                                        };
                                    }
                                    else {
                                        errorData = ((parsedData.error || parsedData['odata.error'] || { responseData: parsedData }));
                                    }
                                }
                            }
                            errorData = (errorData || {});
                            errorData.status = status;
                            errorData.retryAfter = serverData.getRetryAfterHeader();
                            var errorWithRedirect = errorData;
                            var payloadRedirectUrl = errorWithRedirect['@error.redirectUrl'];
                            var redirectUrl = serverData.getRedirectUrl() || payloadRedirectUrl;
                            if (redirectUrl) {
                                // If there is a process to handle the error, then it's expected.
                                resultType = _ms_odsp_utilities_lib_logging_events_Qos_event__WEBPACK_IMPORTED_MODULE_5__["ResultTypeEnum"].ExpectedFailure;
                            }
                            errorData.redirectUrl = redirectUrl;
                            errorData.authenticate = serverData.getAuthenticateHeader();
                            if (correlationId) {
                                errorData.correlationId = correlationId;
                            }
                            if (groupThrottle) {
                                errorData.groupThrottle = groupThrottle;
                            }
                            if (errorData.code === '-1,policy_enforced') {
                                resultType = _ms_odsp_utilities_lib_logging_events_Qos_event__WEBPACK_IMPORTED_MODULE_5__["ResultTypeEnum"].ExpectedFailure;
                            }
                            if (innerError && innerError.isExpected) {
                                resultType = _ms_odsp_utilities_lib_logging_events_Qos_event__WEBPACK_IMPORTED_MODULE_5__["ResultTypeEnum"].ExpectedFailure;
                            }
                            errorData.code = (innerError && innerError.code) || errorData.code || _ApiErrorCodes__WEBPACK_IMPORTED_MODULE_11__["unknown"];
                            var resultCode = "[" + status.toString() + "] " + errorData.code;
                            var errorMessage = JSON.stringify(errorData);
                            var qosData = {
                                resultType: resultType,
                                error: errorMessage,
                                resultCode: resultCode,
                                extraData: extraData
                            };
                            if (telemetryHandler) {
                                var _a = telemetryHandler({
                                    eventData: qosData,
                                    errorData: errorData
                                }), eventData = _a.eventData, canRetry = _a.canRetry;
                                qosData = eventData;
                                if (canRetry === true || canRetry === false) {
                                    shouldRetry = canRetry;
                                }
                            }
                            apiEvent.end(qosData);
                            error(_this._normalizeErrors
                                ? new _GetDataError__WEBPACK_IMPORTED_MODULE_10__["GetDataError"](Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ errorData: errorData,
                                    innerError: innerError }, (resultType === _ms_odsp_utilities_lib_logging_events_Qos_event__WEBPACK_IMPORTED_MODULE_5__["ResultTypeEnum"].ExpectedFailure
                                    ? {
                                        isExpected: true
                                    }
                                    : {})))
                                : errorData);
                        };
                        var responseType = serverData.getResponseType();
                        if (!responseType || responseType === 'text') {
                            var responseText = serverData.getResponseText();
                            parseQosError(responseText);
                        }
                        else {
                            serverData.parseError().then(parseQosError);
                        }
                    }; };
                    doGetData = function () {
                        var apiEvent = (lastApiEvent = new _this._apiEvent({
                            url: safeUrlForLogging,
                            name: qosName
                        }));
                        var requestPerformanceStartTime = performance && performance.now();
                        serverConnection.getServerDataFromUrl({
                            url: url,
                            successCallback: onDataSuccess(apiEvent, requestPerformanceStartTime),
                            failureCallback: onError(apiEvent, requestPerformanceStartTime),
                            uploadProgressCallback: onUploadProgress,
                            additionalPostData: additionalPostData,
                            method: method,
                            additionalHeaders: additionalHeaders,
                            contentType: contentType,
                            withCredentials: authToken ? false : undefined,
                            noRedirect: noRedirect,
                            responseType: responseType,
                            needsRequestDigest: needsRequestDigest
                        });
                    };
                    doGetData();
                };
                var rumOne = _ms_odsp_utilities_lib_logging_rumone_RUMOneLogger__WEBPACK_IMPORTED_MODULE_6__["RUMOneLogger"].getRUMOneLogger();
                var apiStartTime = Date.now();
                if (rumOne) {
                    if (!Boolean(rumOne.readTempData('appDataFetchStart'))) {
                        // Record the App DataFetch start before the first API call
                        rumOne.saveTempData('appDataFetchStart', apiStartTime);
                    }
                }
                return createPromise({
                    timeout: timeout,
                    onExecute: onExecute,
                    maxRetries: maxRetries,
                    noTimeoutInLastRetry: noTimeoutInLastRetry,
                    canRetry: function () { return shouldRetry; },
                    onCancel: function (isFinal) {
                        if (serverConnection) {
                            serverConnection.abort();
                            if (isFinal) {
                                // do not dispose serverConnection when data requestor is in the middle of retries.
                                serverConnection.dispose();
                            }
                        }
                    }
                }).then(function (result) {
                    if (serverConnection) {
                        serverConnection.dispose();
                    }
                    return result;
                }, function (error) {
                    if (serverConnection) {
                        serverConnection.dispose();
                    }
                    if (!lastApiEvent.endTime && _ms_odsp_utilities_lib_async_Promise__WEBPACK_IMPORTED_MODULE_1__["default"].isCanceled(error)) {
                        // If we haven't fired the end event of the latest api event, then fire it now
                        lastApiEvent.end({
                            resultCode: _ApiErrorCodes__WEBPACK_IMPORTED_MODULE_11__["canceled"],
                            resultType: _ms_odsp_utilities_lib_logging_events_Qos_event__WEBPACK_IMPORTED_MODULE_5__["ResultTypeEnum"].ExpectedFailure
                        });
                    }
                    return _ms_odsp_utilities_lib_async_Promise__WEBPACK_IMPORTED_MODULE_1__["default"].reject(error);
                });
            };
            if (specifiedAuthToken) {
                return _ms_odsp_utilities_lib_async_Promise__WEBPACK_IMPORTED_MODULE_1__["default"].resolve(specifiedAuthToken).then(function (authToken) {
                    return getDataForTokenProviderMiddleware({
                        url: url,
                        authToken: authToken
                    });
                });
            }
            if (tokenProvider && tokenProvider.getAuthToken) {
                if (getDataWithTokenProvider) {
                    // If the is a strategy to handle a call with a token provider, use it, passing the 'default' call in as an argument.
                    return getDataWithTokenProvider({
                        apiEvent: _this._apiEvent,
                        getData: getDataForTokenProviderMiddleware,
                        options: {
                            url: url,
                            authToken: options.authToken,
                            qosExtraData: options.qosExtraData
                        },
                        webAbsoluteUrl: pageContext && pageContext.webAbsoluteUrl,
                        qosName: qosName,
                        tokenProvider: tokenProvider
                    });
                }
                return _ms_odsp_utilities_lib_async_Promise__WEBPACK_IMPORTED_MODULE_1__["default"].resolve(tokenProvider.getAuthToken({
                    url: url,
                    webAbsoluteUrl: pageContext && pageContext.webAbsoluteUrl
                })).then(function (result) {
                    return getDataForTokenProviderMiddleware(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ url: url }, (!result
                        ? {}
                        : typeof result === 'string'
                            ? {
                                authToken: result
                            }
                            : {
                                authToken: result.authToken,
                                qosExtraData: {
                                    AuthCorrelationId: result.correlationId,
                                    AuthExpiration: result.expiresOn
                                }
                            })));
                });
            }
            if (pageContext) {
                if (pageContext.getAuthToken) {
                    return _ms_odsp_utilities_lib_async_Promise__WEBPACK_IMPORTED_MODULE_1__["default"].resolve(pageContext.getAuthToken()).then(function (authToken) {
                        return getDataForTokenProviderMiddleware({ url: url, authToken: authToken });
                    });
                }
                if (pageContext.authToken) {
                    return _ms_odsp_utilities_lib_async_Promise__WEBPACK_IMPORTED_MODULE_1__["default"].resolve(pageContext.authToken).then(function (authToken) {
                        return getDataForTokenProviderMiddleware({ url: url, authToken: authToken });
                    });
                }
            }
            return getDataForTokenProviderMiddleware({
                url: url
            });
        };
        var getDataForSyncClientOptions = {
            authToken: options.authToken,
            telemetryHandler: options.telemetryHandler,
            url: options.url,
            useExactAuthToken: options.useExactAuthToken
        };
        if (getDataWithSyncClient) {
            // If there is a strategy to call with Sync integration, call it and pass the 'default' call.
            return getDataWithSyncClient({
                options: getDataForSyncClientOptions,
                aadUserId: (_a = pageContext) === null || _a === void 0 ? void 0 : _a.aadUserId,
                dataSyncClient: this._dataSyncClient,
                getData: getDataForSyncMiddleware
            });
        }
        // Make the default call without a Sync client strategy.
        return getDataForSyncMiddleware(getDataForSyncClientOptions);
    };
    return DataRequestor;
}());

function createPromise(props) {
    var onExecute = props.onExecute, onCancel = props.onCancel, timeout = props.timeout, canRetry = props.canRetry, noTimeoutInLastRetry = props.noTimeoutInLastRetry;
    var numRetries = 0;
    var maxRetries = Math.max(props.maxRetries, 0);
    var promise;
    var createTimeoutPromise = function () {
        var promise = new _ms_odsp_utilities_lib_async_Promise__WEBPACK_IMPORTED_MODULE_1__["default"](onExecute, function () {
            onCancel(numRetries >= maxRetries || !canRetry());
        });
        // when it is the last retry and noTimeoutInLastRetry is set to true, do not set timeout to allow calls to finish,
        // we at least can get data no matter how slow
        if (timeout && (!noTimeoutInLastRetry || numRetries < maxRetries)) {
            return _ms_odsp_utilities_lib_async_Promise__WEBPACK_IMPORTED_MODULE_1__["default"].timeout(timeout, promise);
        }
        return promise;
    };
    if (numRetries < maxRetries) {
        // retry promise
        promise = Object(_ms_odsp_utilities_lib_async_Retry__WEBPACK_IMPORTED_MODULE_2__["default"])({
            canRetry: canRetry,
            retries: maxRetries,
            callback: createTimeoutPromise,
            beforeRetry: function () {
                numRetries++;
            }
        });
    }
    else {
        promise = createTimeoutPromise();
    }
    return promise;
}
function isBlobResponse(responseType, response) {
    return responseType === 'blob' && response && typeof response === 'object';
}
function getAuthErrorData(options) {
    var authDiagnostics = options.authDiagnostics, fbaHeaderError = options.fbaHeaderError;
    // Input strings look like this:
    //
    // 3000006;reason="Token contains invalid signature.";category="invalid_client"
    //
    // We want to take that and make a string like this:
    //
    // 3000006,invalid_client
    if (authDiagnostics) {
        try {
            var _a = /(\d+)(?:;reason="([^"]+?)")?(?:;category="([^"]+?)")?/.exec(authDiagnostics), _b = _a[1], id = _b === void 0 ? '-1' : _b, _c = _a[2], reason = _c === void 0 ? '' : _c, _d = _a[3], category = _d === void 0 ? 'unknown' : _d;
            var isExpected = void 0;
            switch (Number(id)) {
                // Error codes come from here:
                // https://onedrive.visualstudio.com/SharePoint%20Online/_git/SPO?path=%2Fsts%2Fstsom%2FApplicationServices%2FSPOAuthException.cs&_a=contents&version=GBmaster
                case 3000000: // SslIsRequired
                case 3000003: // InvalidAudienceUri
                case 3000006: // InvalidSignature
                case 3001003: // InvalidScope
                case 3001004: // InvalidRole
                case 3001005: // PolicyEnforced
                case 3002000: // ScenarioNotSupported
                case 3004009: // PopAppNotWhiteListed
                case 3004010: // PopInvalidScope
                case 3003000: // SessionRevoked
                    isExpected = true;
                    break;
                default:
                    isExpected = false;
                    break;
            }
            return new _ms_utilities_error_lib_ApiError__WEBPACK_IMPORTED_MODULE_7__["ApiError"]({
                code: id + "," + category,
                message: reason,
                isExpected: isExpected
            });
        }
        catch (e) {
            return new _ms_utilities_error_lib_ApiError__WEBPACK_IMPORTED_MODULE_7__["ApiError"]({
                code: '-1,Unknown',
                innerError: e
            });
        }
    }
    if (fbaHeaderError) {
        // when LegacyAuthProtocolsEnabled is turned off on tenant side,
        // API calls with missing or invalid auth cookie will return http 401 response with this header:
        // X-MSDAVEXT_Error: 917656; Access+denied.+Before+opening+files+in+this+location%2c+you+must+first+browse+to+the+web+site+and+select+the+option+to+login+automatically.
        try {
            var _e = /(\d+);\s+(.+)/.exec(fbaHeaderError), _f = _e[1], id = _f === void 0 ? '-1' : _f, _g = _e[2], reason = _g === void 0 ? '' : _g;
            return new _ms_utilities_error_lib_ApiError__WEBPACK_IMPORTED_MODULE_7__["ApiError"]({
                code: "" + id,
                message: reason,
                isExpected: true
            });
        }
        catch (e) {
            return new _ms_utilities_error_lib_ApiError__WEBPACK_IMPORTED_MODULE_7__["ApiError"]({
                code: '-1,Unknown',
                innerError: e
            });
        }
    }
}
/* harmony default export */ __webpack_exports__["default"] = (DataRequestor);
//# sourceMappingURL=DataRequestor.js.map

/***/ }),

/***/ "PhF+":
/*!*********************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/telemetry-manager@1.1.3/node_modules/@ms/telemetry-manager/lib/PairedEventBase.js ***!
  \*********************************************************************************************************************************************/
/*! exports provided: createPairedEvent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPairedEvent", function() { return createPairedEvent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _EventBase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EventBase */ "HMXl");
/* harmony import */ var _Manager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Manager */ "wq9f");
/* harmony import */ var _events_ResultTypeEnum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./events/ResultTypeEnum */ "Z+U/");
/* harmony import */ var _ErrorHelper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ErrorHelper */ "qJrk");
/* harmony import */ var _ms_utilities_objects_lib_safeSerialize__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ms/utilities-objects/lib/safeSerialize */ "3l1C");
// OneDrive:CoverageThreshold(75)






var schemaExceptionErrorCode = 'GetSchemaException';
var promiseCreationFailureErrorCode = 'PromiseCreationFailed';
var timeoutErrorCode = 'Timeout';
function generateQosResult(resultType, resultCode, error) {
    var schema = {
        resultType: resultType
    };
    if (resultCode) {
        schema.resultCode = resultCode;
    }
    if (error) {
        schema.error = error;
    }
    return schema;
}
var PairedEventBase = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(PairedEventBase, _super);
    function PairedEventBase(data, parent) {
        return _super.call(this, data, _EventBase__WEBPACK_IMPORTED_MODULE_1__["ClonedEventType"].Start, parent) || this;
    }
    PairedEventBase.instrumentPromise = function (startSchema, createPromise, getCompleteSchema, getErrorSchema, // tslint:disable-line:no-any
    timeoutMs, timeoutSchema, parent) {
        var promise;
        var event = new this(startSchema, parent);
        if (timeoutMs) {
            event.setTimeout(timeoutMs, timeoutSchema);
        }
        var onComplete = function (result) {
            var schema;
            if (getCompleteSchema) {
                try {
                    schema = getCompleteSchema(result);
                }
                catch (e) {
                    schema = generateQosResult(_events_ResultTypeEnum__WEBPACK_IMPORTED_MODULE_3__["ResultTypeEnum"].Failure, schemaExceptionErrorCode, e.toString());
                }
            }
            else {
                schema = generateQosResult(_events_ResultTypeEnum__WEBPACK_IMPORTED_MODULE_3__["ResultTypeEnum"].Success);
            }
            event.end(schema);
        };
        var onError = function (errorArgs) {
            var schema;
            if (getErrorSchema) {
                try {
                    schema = getErrorSchema(errorArgs);
                }
                catch (e) {
                    schema = generateQosResult(_events_ResultTypeEnum__WEBPACK_IMPORTED_MODULE_3__["ResultTypeEnum"].Failure, schemaExceptionErrorCode, e.toString());
                }
            }
            else if (errorArgs) {
                var failureResultType = errorArgs instanceof Error && errorArgs.name === 'Canceled'
                    ? _events_ResultTypeEnum__WEBPACK_IMPORTED_MODULE_3__["ResultTypeEnum"].ExpectedFailure
                    : _events_ResultTypeEnum__WEBPACK_IMPORTED_MODULE_3__["ResultTypeEnum"].Failure;
                schema = generateQosResult(failureResultType, undefined, Object(_ms_utilities_objects_lib_safeSerialize__WEBPACK_IMPORTED_MODULE_5__["safeSerialize"])(errorArgs));
            }
            else {
                schema = generateQosResult(_events_ResultTypeEnum__WEBPACK_IMPORTED_MODULE_3__["ResultTypeEnum"].Failure);
            }
            event.end(schema);
        };
        try {
            promise = createPromise();
        }
        catch (e) {
            event.end(generateQosResult(_events_ResultTypeEnum__WEBPACK_IMPORTED_MODULE_3__["ResultTypeEnum"].Failure, promiseCreationFailureErrorCode, e.toString()));
            throw e;
        }
        promise.then(onComplete, onError);
        return promise;
    };
    PairedEventBase.prototype.setTimeout = function (ms, data) {
        this._clearTimeout();
        if (!data) {
            data = generateQosResult(_events_ResultTypeEnum__WEBPACK_IMPORTED_MODULE_3__["ResultTypeEnum"].Failure, timeoutErrorCode);
        }
        /* tslint:disable-next-line:ban-native-functions */
        this.timeoutId = window.setTimeout(this.end.bind(this, data), ms);
    };
    PairedEventBase.prototype.verbose = function (message) {
        if (this.endTime) {
            // event already ended, no need to log anymore
            return;
        }
        if (this._isQosEvent()) {
            var qosSchema = this.data;
            _ErrorHelper__WEBPACK_IMPORTED_MODULE_4__["verbose"](message, qosSchema.name);
        }
    };
    PairedEventBase.prototype.end = function (data) {
        // Make sure end can only be called once
        if (!this.endTime) {
            // Set the end time
            this.endTime = _Manager__WEBPACK_IMPORTED_MODULE_2__["Manager"].getTime();
            var localData = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ duration: this.endTime - this.startTime }, data);
            this._setData(localData);
            // Log the event end
            this._logEvent(_EventBase__WEBPACK_IMPORTED_MODULE_1__["ClonedEventType"].End);
            // If this is a QOS event log and contains an error message trigger the upload of logs by calling
            // the ErrorHelper
            if (this._isQosEvent()) {
                var qosSchema = this.data;
                if (qosSchema.error) {
                    _ErrorHelper__WEBPACK_IMPORTED_MODULE_4__["log"](qosSchema.error, qosSchema.name, qosSchema.resultCode, qosSchema.resultType);
                }
            }
            this._clearTimeout();
        }
    };
    PairedEventBase.prototype._clearTimeout = function () {
        if (this.timeoutId) {
            /* tslint:disable-next-line:ban-native-functions */
            window.clearTimeout(this.timeoutId);
            this.timeoutId = undefined;
        }
    };
    PairedEventBase.prototype._isQosEvent = function () {
        return this.eventName.indexOf('Qos,') >= 0;
    };
    return PairedEventBase;
}(_EventBase__WEBPACK_IMPORTED_MODULE_1__["EventBase"]));
/**
 * @public
 */
function createPairedEvent(props, metadata, baseClass) {
    var PairedEvent = /** @class */ (function (_super) {
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(PairedEvent, _super);
        function PairedEvent() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return PairedEvent;
    }(PairedEventBase));
    // duration should be default metadata to be included in reported data
    var metadataWithDuration = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, metadata), { duration: {
            isPrefixingDisabled: true,
            type: 2 /* Number */
        } });
    Object(_EventBase__WEBPACK_IMPORTED_MODULE_1__["addEventProps"])(PairedEvent.prototype, props, metadataWithDuration, baseClass);
    return PairedEvent;
}
//# sourceMappingURL=PairedEventBase.js.map

/***/ }),

/***/ "PmmX":
/*!**************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/telemetry-manager@1.1.3/node_modules/@ms/telemetry-manager/lib/events/Verbose.event.js ***!
  \**************************************************************************************************************************************************/
/*! exports provided: Verbose */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Verbose", function() { return Verbose; });
/* harmony import */ var _SingleEventBase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../SingleEventBase */ "yb4E");
/* harmony import */ var _Trace_event__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Trace.event */ "K5xv");
// OneDrive:IgnoreCodeCoverage


var Verbose = Object(_SingleEventBase__WEBPACK_IMPORTED_MODULE_0__["createSingleEvent"])({
    eventName: 'Verbose,Trace,',
    shortEventName: 'Verbose',
    requiresParent: false
}, {
    name: {
        isKey: true,
        type: 1 /* String */
    },
    privacyClassification: {
        isPrefixingDisabled: true,
        type: 1 /* String */
    }
}, _Trace_event__WEBPACK_IMPORTED_MODULE_1__["Trace"]).withData({ privacyClassification: "requiredService" /* requiredService */ });
//# sourceMappingURL=Verbose.event.js.map

/***/ }),

/***/ "QUgr":
/*!*******************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-utilities@29.7.9_5d977624104b06c7bcaa2de974ff51f1/node_modules/@ms/odsp-utilities/lib/killswitch/Killswitch.js ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: Killswitch, getKillSwitch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Killswitch", function() { return Killswitch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getKillSwitch", function() { return getKillSwitch; });
/* harmony import */ var _guid_Guid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../guid/Guid */ "vo05");

var Killswitch = /** @class */ (function () {
    function Killswitch() {
    }
    /**
     * Performs the static initialization of the kill switches map.
     * @param {{[key: string]: boolean}} killSwitches - The map of all active killswitches.
     */
    Killswitch.initKillSwitches = function (killSwitches) {
        Killswitch._killSwitches = killSwitches || {};
    };
    /**
     * Returns true if the given SPO killswitch is found in the static map
     * of active killswitches.
     * @requires - The application should initialize the static map
     * of active killswitches using initKillSwitches before invoking this method.
     * @param killSwitch - The string representation of the guid identifying the
     * killswitch to check.
     * @param date - The date when the kill switch check has been added to the codebase.
     * @param message - A text message associated with the kill switch.
     * @returns True if the given kill switch is found active.
     */
    Killswitch.isActivated = function (killSwitch, date, message) {
        // use _spPageContextInfo for backward compatibility while still available
        var pageContext = window['_spPageContextInfo'];
        if (!Killswitch._killSwitches && pageContext && pageContext.killSwitches) {
            Killswitch.initKillSwitches(pageContext.killSwitches);
        }
        if (killSwitch && Killswitch._killSwitches) {
            return Killswitch._killSwitches[_guid_Guid__WEBPACK_IMPORTED_MODULE_0__["default"].normalizeUpper(killSwitch, false /*includeBrackets*/)];
        }
        else {
            return false;
        }
    };
    return Killswitch;
}());

function getKillSwitch(pageContext) {
    var killSwitches = pageContext && pageContext.killSwitches;
    return {
        isActivated: function (killSwitch, date, message) {
            return !!killSwitches && !!killSwitches[_guid_Guid__WEBPACK_IMPORTED_MODULE_0__["default"].normalizeUpper(killSwitch, false /*includeBrackets*/)];
        }
    };
}
//# sourceMappingURL=Killswitch.js.map

/***/ }),

/***/ "Qbl6":
/*!*********************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-utilities@29.7.9_5d977624104b06c7bcaa2de974ff51f1/node_modules/@ms/odsp-utilities/lib/async/Retry.js ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Retry; });
/* harmony import */ var _Signal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Signal */ "LSjO");

/**
 * Retry allows you to invoke a callback a configurable number of times before giving up.
 */
function Retry(config) {
    var adjustRetries = config.adjustRetries, async = config.async, beforeRetry = config.beforeRetry, callback = config.callback, _a = config.canRetry, canRetry = _a === void 0 ? function () { return true; } : _a, delay = config.delay, resetAttemptsOnRestart = config.resetAttemptsOnRestart, retries = config.retries, shouldRestart = config.shouldRestart;
    var attempts = 0;
    var promise;
    var signal = new _Signal__WEBPACK_IMPORTED_MODULE_0__["default"](function () {
        promise.cancel();
    });
    function onSuccess(value) {
        if (shouldRestart && shouldRestart()) {
            if (resetAttemptsOnRestart) {
                attempts = 0;
            }
            callCallback();
        }
        else {
            signal.complete(value);
        }
    }
    function onError(error) {
        if (adjustRetries) {
            retries = adjustRetries(error);
        }
        if (attempts < retries && canRetry(error)) {
            attempts++;
            if (beforeRetry) {
                beforeRetry();
            }
            if (typeof delay === 'number' && async) {
                async.setTimeout(callCallback, delay);
            }
            else {
                callCallback();
            }
        }
        else {
            signal.error(error);
        }
    }
    function callCallback() {
        promise = callback();
        promise.then(onSuccess, onError);
    }
    callCallback();
    return signal.getPromise();
}
//# sourceMappingURL=Retry.js.map

/***/ }),

/***/ "Qgrq":
/*!****************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-utilities@29.7.9_5d977624104b06c7bcaa2de974ff51f1/node_modules/@ms/odsp-utilities/lib/logging/rumone/TTI.js ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: restartLongTaskObserver, measureTTI, measureFCI, TTIIsSupported */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "measureTTI", function() { return measureTTI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "measureFCI", function() { return measureFCI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TTIIsSupported", function() { return TTIIsSupported; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _performance_Performance__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../performance/Performance */ "AAls");
/* harmony import */ var _ms_tti_polyfill_lib_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ms/tti-polyfill/lib/index */ "qS3b");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "restartLongTaskObserver", function() { return _ms_tti_polyfill_lib_index__WEBPACK_IMPORTED_MODULE_2__["restartLongTaskObserver"]; });

// OneDrive:IgnoreCodeCoverage




/**
 * use tti-polyfill to meaure time to interative
 * @param options ITTIMeaurementOptions
 * return promise of tti value
 */
function measureTTI(options) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
        var _options, ttilib;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _options = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({
                        minValue: Object(_performance_Performance__WEBPACK_IMPORTED_MODULE_1__["now"])(),
                        useMutationObserver: false,
                        trackNetworkRequests: false,
                        requiredMainThreadQuietnessDurationInMilliseconds: 1000,
                        requiredNetworkQuietnessDurationInMilliseconds: 1000
                    }, options);
                    return [4 /*yield*/, Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! @ms/tti-polyfill/lib/index */ "qS3b"))];
                case 1:
                    ttilib = _a.sent();
                    return [2 /*return*/, ttilib.getFirstConsistentlyInteractive(_options)];
            }
        });
    });
}
function measureFCI() {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
        var options, fcilib;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
            switch (_a.label) {
                case 0:
                    options = {
                        measurementStartTime: Object(_performance_Performance__WEBPACK_IMPORTED_MODULE_1__["now"])(),
                        requiredMainThreadCPUIdleDurationInMilliseconds: 1000
                    };
                    return [4 /*yield*/, __webpack_require__.e(/*! import() | rumone-fci */ "rumone-fci").then(__webpack_require__.bind(null, /*! @ms/rumone-fci/lib/index */ "KhX7"))];
                case 1:
                    fcilib = _a.sent();
                    return [2 /*return*/, fcilib.getFirstCPUIdle(options)];
            }
        });
    });
}
function TTIIsSupported() {
    return 'PerformanceLongTaskTiming' in window;
}
//# sourceMappingURL=TTI.js.map

/***/ }),

/***/ "QuA1":
/*!*************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-utilities@29.7.9_5d977624104b06c7bcaa2de974ff51f1/node_modules/@ms/odsp-utilities/lib/logging/Manager.js ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: createManager, Manager, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ms_telemetry_manager_lib_Manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ms/telemetry-manager/lib/Manager */ "wq9f");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createManager", function() { return _ms_telemetry_manager_lib_Manager__WEBPACK_IMPORTED_MODULE_0__["createManager"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Manager", function() { return _ms_telemetry_manager_lib_Manager__WEBPACK_IMPORTED_MODULE_0__["Manager"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _ms_telemetry_manager_lib_Manager__WEBPACK_IMPORTED_MODULE_0__["Manager"]; });

// OneDrive:CoverageThreshold(75)


//# sourceMappingURL=Manager.js.map

/***/ }),

/***/ "R7Zs":
/*!****************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/tti-polyfill@1.1.0/node_modules/@ms/tti-polyfill/lib/activityTrackerUtils.js ***!
  \****************************************************************************************************************************************/
/*! exports provided: patchXMLHTTPRequest, patchFetch, observeResourceFetchingMutations */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "patchXMLHTTPRequest", function() { return patchXMLHTTPRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "patchFetch", function() { return patchFetch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "observeResourceFetchingMutations", function() { return observeResourceFetchingMutations; });
var uniqueId = 0;
/**
 * Overrides the native XHR send method in order to keep track of in-flight
 * network requests.
 * @param {!Function} beforeXHRSendCb
 * @param {!Function} onRequestCompletedCb
 */
function patchXMLHTTPRequest(beforeXHRSendCb, onRequestCompletedCb) {
    var send = XMLHttpRequest.prototype.send;
    var requestId = uniqueId++;
    XMLHttpRequest.prototype.send = function () {
        var _this = this;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        // No arrow function.
        beforeXHRSendCb(requestId.toString());
        this.addEventListener('readystatechange', function () {
            // readyState 4 corresponds to 'DONE'
            if (_this.readyState === 4) {
                onRequestCompletedCb(requestId.toString());
            }
        });
        return send.apply(this, args);
    };
}
/**
 * Overrides the native fetch() in order to keep track of in-flight network
 * requests.
 * @param {!Function} beforeRequestCb
 * @param {!Function} afterRequestCb
 */
function patchFetch(beforeRequestCb, afterRequestCb) {
    var originalFetch = window.fetch;
    // explicitely rather than implicitely.
    window.fetch = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return new Promise(function (resolve, reject) {
            var requestId = uniqueId++;
            beforeRequestCb(requestId.toString());
            originalFetch.apply(void 0, args).then(function (value) {
                afterRequestCb(requestId.toString());
                resolve(value);
            }, function (err) {
                afterRequestCb(err);
                reject(err);
            });
        });
    };
}
var requestCreatingNodeNames = ['img', 'script', 'iframe', 'link', 'audio', 'video', 'source'];
/**
 * Determines if a node or its descendants match one of the passed node names.
 * @param {!Array<!Node>|!NodeList<!Node>} nodes
 * @param {!Array<string>} nodeNames
 * @return {boolean}
 */
function subtreeContainsNodeName(nodes, nodeNames) {
    for (var _i = 0, _a = nodes; _i < _a.length; _i++) {
        var node = _a[_i];
        if (nodeNames.includes(node.nodeName.toLowerCase()) ||
            subtreeContainsNodeName(node.children, nodeNames)) {
            return true;
        }
    }
    return false;
}
/**
 * Start observing DOM mutations for added nodes that may initiate network
 * requests.
 * @param {!Function} callback
 * @return {!MutationObserver}
 */
function observeResourceFetchingMutations(callback) {
    var mutationObserver = new MutationObserver(function (mutations) {
        for (var _i = 0, mutations_1 = mutations; _i < mutations_1.length; _i++) {
            var mutation = mutations_1[_i];
            if (mutation.type === 'childList' &&
                subtreeContainsNodeName(mutation.addedNodes, requestCreatingNodeNames)) {
                callback(mutation);
            }
            else if (mutation.type === 'attributes' &&
                requestCreatingNodeNames.includes(mutation.target.tagName.toLowerCase())) {
                callback(mutation);
            }
        }
    });
    mutationObserver.observe(document, {
        attributes: true,
        childList: true,
        subtree: true,
        attributeFilter: ['href', 'src']
    });
    return mutationObserver;
}
//# sourceMappingURL=activityTrackerUtils.js.map

/***/ }),

/***/ "RPSv":
/*!********************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/tti-polyfill@1.1.0/node_modules/@ms/tti-polyfill/lib/firstConsistentlyInteractiveDetector.js ***!
  \********************************************************************************************************************************************************/
/*! exports provided: restartLongTaskObserver, FirstConsistentlyInteractiveDetector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "restartLongTaskObserver", function() { return restartLongTaskObserver; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirstConsistentlyInteractiveDetector", function() { return FirstConsistentlyInteractiveDetector; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _activityTrackerUtils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./activityTrackerUtils */ "R7Zs");
/* harmony import */ var _debug__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./debug */ "reD7");
/* harmony import */ var _firstConsistentlyInteractiveCore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./firstConsistentlyInteractiveCore */ "RVD1");




function mark(name) {
    if (window.performance && performance.mark) {
        performance.mark(name);
    }
}
/**
 * restartLongTaskObserver
 * @public
 */
function restartLongTaskObserver() {
    if (window.__tti) {
        window.__tti.o.observe({ entryTypes: ['longtask'] });
    }
}
/**
 * Class to detect first consistently interactive.
 */
var FirstConsistentlyInteractiveDetector = /** @class */ (function () {
    /**
     * @param {!FirstConsistentlyInteractiveDetectorInit=} config
     */
    function FirstConsistentlyInteractiveDetector(config) {
        var _this = this;
        if (config === void 0) { config = {}; }
        this._useMutationObserver = !!config.useMutationObserver;
        this._trackNetworkRequests = !!config.trackNetworkRequests;
        // If minValue is null, by default it is DOMContentLoadedEnd.
        this._minValue = config.minValue || null;
        this._requiredMainThreadQuietnessDurationInMilliseconds =
            config.requiredMainThreadQuietnessDurationInMilliseconds || 5000;
        this._requiredNetworkQuietnessDurationInMilliseconds =
            config.requiredNetworkQuietnessDurationInMilliseconds || 5000;
        var snippetEntries = window.__tti && window.__tti.e;
        var snippetObserver = window.__tti && window.__tti.o;
        this._longTaskId = 0;
        // If we recorded some long tasks before this class was initialized,
        // consume them now.
        if (snippetEntries) {
            Object(_debug__WEBPACK_IMPORTED_MODULE_2__["log"])("Consuming the long task entries already recorded.");
            this._longTasks = snippetEntries.map(function (performanceEntry) {
                return _this._createLongTask(performanceEntry);
            });
            window.__tti.e = [];
        }
        else {
            this._longTasks = [];
        }
        // If we had a long task observer attached by the snippet, disconnect it
        // here. We will be adding a new long task observer soon with a more
        // complex callback.
        if (snippetObserver) {
            snippetObserver.disconnect();
        }
        this._networkRequests = [];
        this._incompleteJSInitiatedRequestStartTimes = new Map();
        this._timerId = undefined;
        this._timerActivationTime = -Infinity;
        // Timer tasks are only scheduled when detector is enabled.
        this._scheduleTimerTasks = false;
        /** @type {?Function} */
        this._firstConsistentlyInteractiveResolver = null;
        /** @type {?PerformanceObserver} */
        this._performanceObserver = null;
        /** @type {?MutationObserver} */
        this._mutationObserver = null;
        this._registerListeners(this._trackNetworkRequests);
    }
    /**
     * Starts checking for a first consistently interactive time and returns a
     * promise that resolves to the found time.
     * @return {!Promise<number>}
     * @public
     */
    FirstConsistentlyInteractiveDetector.prototype.getFirstConsistentlyInteractive = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._firstConsistentlyInteractiveResolver = resolve;
            if (document.readyState === 'complete') {
                _this.startSchedulingTimerTasks();
            }
            else {
                window.addEventListener('load', function () {
                    _this.startSchedulingTimerTasks();
                });
            }
        });
    };
    /**
     * Starts scheduling the timer that checks for network quiescence (a 5-second
     * window of no more than 2 in-flight network requests).
     */
    FirstConsistentlyInteractiveDetector.prototype.startSchedulingTimerTasks = function () {
        Object(_debug__WEBPACK_IMPORTED_MODULE_2__["log"])("Enabling FirstConsistentlyInteractiveDetector");
        this._scheduleTimerTasks = true;
        var lastLongTaskEnd = this._longTasks.length > 0 ? this._longTasks[this._longTasks.length - 1].end : 0;
        var lastKnownNetwork2Busy = Object(_firstConsistentlyInteractiveCore__WEBPACK_IMPORTED_MODULE_3__["computeLastKnownNetwork2Busy"])(this._incompleteRequestStarts(), this._networkRequests);
        this._rescheduleTimer(Math.max(this._trackNetworkRequests
            ? lastKnownNetwork2Busy + this._requiredNetworkQuietnessDurationInMilliseconds
            : 0, lastLongTaskEnd));
    };
    /**
     * Resets the timer that checks for network quiescence.
     * @param {number} earliestTime A timestamp in ms, and the time is relative
     *     to navigationStart.
     */
    FirstConsistentlyInteractiveDetector.prototype._rescheduleTimer = function (earliestTime) {
        var _this = this;
        // Check if ready to start looking for firstConsistentlyInteractive
        if (!this._scheduleTimerTasks) {
            Object(_debug__WEBPACK_IMPORTED_MODULE_2__["log"])("startSchedulingTimerTasks must be called before " + "calling rescheduleTimer");
            return;
        }
        Object(_debug__WEBPACK_IMPORTED_MODULE_2__["log"])("Attempting to reschedule FirstConsistentlyInteractive " + ("check to " + earliestTime));
        Object(_debug__WEBPACK_IMPORTED_MODULE_2__["log"])("Previous timer activation time: " + this._timerActivationTime);
        if (this._timerActivationTime > earliestTime) {
            Object(_debug__WEBPACK_IMPORTED_MODULE_2__["log"])("Current activation time is greater than attempted " + "reschedule time. No need to postpone.");
            return;
        }
        clearTimeout(this._timerId);
        this._timerId = setTimeout(function () {
            _this._checkTTI();
        }, Math.max(0, earliestTime - performance.now()));
        this._timerActivationTime = earliestTime;
        Object(_debug__WEBPACK_IMPORTED_MODULE_2__["log"])("Rescheduled firstConsistentlyInteractive check at " + earliestTime);
    };
    /**
     * Removes all timers and event listeners.
     */
    FirstConsistentlyInteractiveDetector.prototype._disable = function () {
        Object(_debug__WEBPACK_IMPORTED_MODULE_2__["log"])("Disabling FirstConsistentlyInteractiveDetector");
        clearTimeout(this._timerId);
        this._scheduleTimerTasks = false;
        this._unregisterListeners();
    };
    /**
     * Adds
     */
    FirstConsistentlyInteractiveDetector.prototype._registerPerformanceObserver = function (trackNetworkRequests) {
        var _this = this;
        if (trackNetworkRequests === void 0) { trackNetworkRequests = true; }
        this._performanceObserver = new PerformanceObserver(function (entryList) {
            var entries = entryList.getEntries();
            for (var _i = 0, entries_1 = entries; _i < entries_1.length; _i++) {
                var entry = entries_1[_i];
                if (entry.entryType === 'resource' && trackNetworkRequests) {
                    _this._networkRequestFinishedCallback(entry);
                }
                if (entry.entryType === 'longtask') {
                    _this._longTaskFinishedCallback(entry);
                }
            }
        });
        this._performanceObserver.observe({
            entryTypes: trackNetworkRequests ? ['longtask', 'resource'] : ['longtask']
        });
    };
    /**
     * Registers listeners to detect XHR, fetch, resource timing entries, and
     * DOM mutations to detect long tasks and network quiescence.
     */
    FirstConsistentlyInteractiveDetector.prototype._registerListeners = function (trackNetworkRequests) {
        if (trackNetworkRequests === void 0) { trackNetworkRequests = true; }
        if (trackNetworkRequests) {
            _activityTrackerUtils__WEBPACK_IMPORTED_MODULE_1__["patchXMLHTTPRequest"](this._beforeJSInitiatedRequestCallback.bind(this), this._afterJSInitiatedRequestCallback.bind(this));
            _activityTrackerUtils__WEBPACK_IMPORTED_MODULE_1__["patchFetch"](this._beforeJSInitiatedRequestCallback.bind(this), this._afterJSInitiatedRequestCallback.bind(this));
        }
        this._registerPerformanceObserver(trackNetworkRequests);
        if (this._useMutationObserver) {
            this._mutationObserver = _activityTrackerUtils__WEBPACK_IMPORTED_MODULE_1__["observeResourceFetchingMutations"](this._mutationObserverCallback.bind(this));
        }
    };
    /**
     * Removes all added listeners.
     */
    FirstConsistentlyInteractiveDetector.prototype._unregisterListeners = function () {
        // We will leave the XHR / Fetch objects the way they were,
        // since we cannot guarantee they were not modified further in between.
        // Only unregister performance observers.
        if (this._performanceObserver) {
            this._performanceObserver.disconnect();
        }
        if (this._mutationObserver) {
            this._mutationObserver.disconnect();
        }
    };
    /**
     * A callback to be run before any new XHR requests. This adds the request
     * to a map so in-flight requests can be tracked.
     * @param {string} requestId
     */
    FirstConsistentlyInteractiveDetector.prototype._beforeJSInitiatedRequestCallback = function (requestId) {
        Object(_debug__WEBPACK_IMPORTED_MODULE_2__["log"])("Starting JS initiated request. Request ID: " + requestId);
        this._incompleteJSInitiatedRequestStartTimes.set(requestId, performance.now());
        Object(_debug__WEBPACK_IMPORTED_MODULE_2__["log"])("Active XHRs: " + this._incompleteJSInitiatedRequestStartTimes.size);
    };
    /**
     * A callback to be run once any XHR requests have completed. This removes
     * the request from the in-flight request map.
     * @param {string} requestId
     */
    FirstConsistentlyInteractiveDetector.prototype._afterJSInitiatedRequestCallback = function (requestId) {
        Object(_debug__WEBPACK_IMPORTED_MODULE_2__["log"])("Completed JS initiated request with request ID: " + requestId);
        this._incompleteJSInitiatedRequestStartTimes.delete(requestId);
        Object(_debug__WEBPACK_IMPORTED_MODULE_2__["log"])("Active XHRs: " + this._incompleteJSInitiatedRequestStartTimes.size);
    };
    /**
     * A callback to be run once new resource timing entries are observed.
     * This adds the entry to an array and resets the timeout detecting the
     * quiet window.
     * @param {PerformanceEntry} performanceEntry
     */
    FirstConsistentlyInteractiveDetector.prototype._networkRequestFinishedCallback = function (performanceEntry) {
        Object(_debug__WEBPACK_IMPORTED_MODULE_2__["log"])("Network request finished", performanceEntry);
        this._networkRequests.push({
            start: performanceEntry.fetchStart,
            end: performanceEntry.responseEnd
        });
        this._rescheduleTimer(Object(_firstConsistentlyInteractiveCore__WEBPACK_IMPORTED_MODULE_3__["computeLastKnownNetwork2Busy"])(this._incompleteRequestStarts(), this._networkRequests) +
            this._requiredNetworkQuietnessDurationInMilliseconds);
    };
    /**
     * A callback to be run once new long tasks are observed. This resets the
     * timeout detecting the quiet window.
     * @param {PerformanceEntry} performanceEntry
     */
    FirstConsistentlyInteractiveDetector.prototype._longTaskFinishedCallback = function (performanceEntry) {
        Object(_debug__WEBPACK_IMPORTED_MODULE_2__["log"])("Long task finished", performanceEntry);
        var task = this._createLongTask(performanceEntry);
        var markName = "longTaskEnd" + task.id;
        mark(markName);
        task.endMarkName = markName;
        this._longTasks.push(task);
        this._rescheduleTimer(task.end + this._requiredMainThreadQuietnessDurationInMilliseconds);
    };
    /**
     * A callback to be run once any DOM elements are added that would initiate
     * a new network request. This resets the timeout detecting the quiet window.
     * @param {!MutationRecord} mutationRecord
     */
    FirstConsistentlyInteractiveDetector.prototype._mutationObserverCallback = function (mutationRecord) {
        Object(_debug__WEBPACK_IMPORTED_MODULE_2__["log"])("Potentially network resource fetching mutation detected", mutationRecord);
        Object(_debug__WEBPACK_IMPORTED_MODULE_2__["log"])("Pushing back FirstConsistentlyInteractive check by " + this._requiredNetworkQuietnessDurationInMilliseconds + " milliseconds.");
        this._rescheduleTimer(performance.now() + this._requiredNetworkQuietnessDurationInMilliseconds);
    };
    /**
     * Returns either a manually set min value or the time since
     * domContentLoadedEventEnd and navigationStart. If the
     * domContentLoadedEventEnd data isn't available, `null` is returned.
     * @return {number|null}
     */
    FirstConsistentlyInteractiveDetector.prototype._getMinValue = function () {
        if (this._minValue) {
            return this._minValue;
        }
        if (performance.timing.domContentLoadedEventEnd) {
            return performance.timing.domContentLoadedEventEnd - performance.timing.navigationStart;
        }
        return null;
    };
    FirstConsistentlyInteractiveDetector.prototype._createLongTask = function (performanceEntry) {
        var taskEndTime = performanceEntry.startTime + performanceEntry.duration;
        var task = {
            attribution: performanceEntry.attribution,
            name: performanceEntry.name,
            start: Math.round(performanceEntry.startTime),
            end: Math.round(taskEndTime),
            id: this._longTaskId++
        };
        return task;
    };
    /**
     * Gets a list of all in-flight requests.
     * @return {!Array}
     */
    FirstConsistentlyInteractiveDetector.prototype._incompleteRequestStarts = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(Array.from(this._incompleteJSInitiatedRequestStartTimes.values()));
    };
    /**
     * Checks to see if a first consistently interactive time has been found.
     * If one has been found, the promise resolver is invoked with the time. If
     * no time has been found, the timeout detecting the quiet window is reset.
     */
    FirstConsistentlyInteractiveDetector.prototype._checkTTI = function () {
        Object(_debug__WEBPACK_IMPORTED_MODULE_2__["log"])("Checking if First Consistently Interactive was reached...");
        var navigationStart = performance.timing.navigationStart;
        var lastBusy = Object(_firstConsistentlyInteractiveCore__WEBPACK_IMPORTED_MODULE_3__["computeLastKnownNetwork2Busy"])(this._incompleteRequestStarts(), this._networkRequests);
        // First paint is not available in non-chrome browsers at the moment.
        var firstPaint = window.chrome && window.chrome.loadTimes
            ? window.chrome.loadTimes().firstPaintTime * 1000 - navigationStart
            : 0;
        var searchStart = firstPaint || performance.timing.domContentLoadedEventEnd - navigationStart;
        var minValue = this._getMinValue();
        var currentTime = performance.now();
        // Ideally we will only start scheduling timers after DOMContentLoaded and
        // this case should never be hit.
        if (minValue === null) {
            Object(_debug__WEBPACK_IMPORTED_MODULE_2__["log"])("No usable minimum value yet. Postponing check.");
            this._rescheduleTimer(Math.max(this._trackNetworkRequests ? lastBusy + this._requiredNetworkQuietnessDurationInMilliseconds : 0, currentTime + 1000));
            return;
        }
        Object(_debug__WEBPACK_IMPORTED_MODULE_2__["log"])("Parameter values:");
        Object(_debug__WEBPACK_IMPORTED_MODULE_2__["log"])("NavigationStart", navigationStart);
        Object(_debug__WEBPACK_IMPORTED_MODULE_2__["log"])("lastKnownNetwork2Busy", lastBusy);
        Object(_debug__WEBPACK_IMPORTED_MODULE_2__["log"])("Search Start", searchStart);
        Object(_debug__WEBPACK_IMPORTED_MODULE_2__["log"])("Min Value", minValue);
        Object(_debug__WEBPACK_IMPORTED_MODULE_2__["log"])("Last busy", lastBusy);
        Object(_debug__WEBPACK_IMPORTED_MODULE_2__["log"])("Current time", currentTime);
        Object(_debug__WEBPACK_IMPORTED_MODULE_2__["log"])("Long tasks", this._longTasks);
        Object(_debug__WEBPACK_IMPORTED_MODULE_2__["log"])("Incomplete JS Request Start Times", this._incompleteRequestStarts());
        Object(_debug__WEBPACK_IMPORTED_MODULE_2__["log"])("Network requests", this._networkRequests);
        var maybeFCI = Object(_firstConsistentlyInteractiveCore__WEBPACK_IMPORTED_MODULE_3__["computeFirstConsistentlyInteractive"])(searchStart, minValue, lastBusy, currentTime, this._longTasks, this._trackNetworkRequests, this._requiredMainThreadQuietnessDurationInMilliseconds, this._requiredNetworkQuietnessDurationInMilliseconds);
        if (maybeFCI && this._firstConsistentlyInteractiveResolver) {
            Object(_debug__WEBPACK_IMPORTED_MODULE_2__["log"])("maybeFCI", maybeFCI);
            this._firstConsistentlyInteractiveResolver({
                tti: maybeFCI,
                longTasks: this._longTasks
            });
            this._disable();
        }
        else {
            // First Consistently Interactive was not reached for whatever reasons.
            // Check again in one second. Eventually we should become confident enough
            // in our scheduler logic to get rid of this step.
            Object(_debug__WEBPACK_IMPORTED_MODULE_2__["log"])("Could not detect First Consistently Interactive. " + "Retrying in 1 second.");
            this._rescheduleTimer(performance.now() + 1000);
        }
    };
    return FirstConsistentlyInteractiveDetector;
}());

//# sourceMappingURL=firstConsistentlyInteractiveDetector.js.map

/***/ }),

/***/ "RVD1":
/*!****************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/tti-polyfill@1.1.0/node_modules/@ms/tti-polyfill/lib/firstConsistentlyInteractiveCore.js ***!
  \****************************************************************************************************************************************************/
/*! exports provided: computeFirstConsistentlyInteractive, computeLastKnownNetwork2Busy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "computeFirstConsistentlyInteractive", function() { return computeFirstConsistentlyInteractive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "computeLastKnownNetwork2Busy", function() { return computeLastKnownNetwork2Busy; });
function computeFirstConsistentlyInteractive(searchStart, minValue, lastKnownNetwork2Busy, currentTime, longTasks, trackNetworkRequests, requiredMainThreadQuietnessDurationInMilliseconds, requiredNetworkQuietnessDurationInMilliseconds) {
    // Have not reached network 2-quiet yet.
    if (trackNetworkRequests &&
        currentTime - lastKnownNetwork2Busy < requiredNetworkQuietnessDurationInMilliseconds) {
        return null;
    }
    var maybeFCI = longTasks.length === 0 ? searchStart : longTasks[longTasks.length - 1].end;
    // Main thread has not been quiet for long enough.
    if (currentTime - maybeFCI < requiredMainThreadQuietnessDurationInMilliseconds) {
        return null;
    }
    if (maybeFCI && longTasks.length > 0) {
        var endMarkName = longTasks[longTasks.length - 1].endMarkName;
        if (endMarkName) {
            // looks like we have found TTI caused by long task, show it in profile
            performance.measure('TTI', undefined, endMarkName);
        }
    }
    return Math.max(maybeFCI, minValue);
}
/**
 * Computes the time (in milliseconds since requestStart) that the network was
 * last known to have >2 requests in-flight.
 * @param {!Array<number>} incompleteRequestStarts
 * @param {!Array<{start: (number), end: (number)}>} observedResourceRequests
 * @return {number}
 */
function computeLastKnownNetwork2Busy(incompleteRequestStarts, observedResourceRequests) {
    if (incompleteRequestStarts.length > 2) {
        return performance.now();
    }
    var endpoints = [];
    for (var _i = 0, observedResourceRequests_1 = observedResourceRequests; _i < observedResourceRequests_1.length; _i++) {
        var req = observedResourceRequests_1[_i];
        endpoints.push({
            timestamp: req.start,
            type: 'requestStart'
        });
        endpoints.push({
            timestamp: req.end,
            type: 'requestEnd'
        });
    }
    for (var _a = 0, incompleteRequestStarts_1 = incompleteRequestStarts; _a < incompleteRequestStarts_1.length; _a++) {
        var ts = incompleteRequestStarts_1[_a];
        endpoints.push({
            timestamp: ts,
            type: 'requestStart'
        });
    }
    endpoints.sort(function (a, b) { return a.timestamp - b.timestamp; });
    var currentActive = incompleteRequestStarts.length;
    for (var i = endpoints.length - 1; i >= 0; i--) {
        var endpoint = endpoints[i];
        switch (endpoint.type) {
            case 'requestStart':
                currentActive--;
                break;
            case 'requestEnd':
                currentActive++;
                if (currentActive > 2) {
                    return endpoint.timestamp;
                }
                break;
            default:
                throw Error('Internal Error: This should never happen');
        }
    }
    // If we reach here, we were never network 2-busy.
    return 0;
}
//# sourceMappingURL=firstConsistentlyInteractiveCore.js.map

/***/ }),

/***/ "TZi5":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-utilities@29.7.9_5d977624104b06c7bcaa2de974ff51f1/node_modules/@ms/odsp-utilities/lib/logging/rumone/PageTransitionType.js ***!
  \*******************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// OneDrive:IgnoreCodeCoverage
var PageTransitionType;
(function (PageTransitionType) {
    PageTransitionType[PageTransitionType["none"] = 0] = "none";
    PageTransitionType[PageTransitionType["fullPageLoad"] = 4] = "fullPageLoad";
    PageTransitionType[PageTransitionType["onePageAppNavigation"] = 5] = "onePageAppNavigation";
})(PageTransitionType || (PageTransitionType = {}));
/* harmony default export */ __webpack_exports__["default"] = (PageTransitionType);
//# sourceMappingURL=PageTransitionType.js.map

/***/ }),

/***/ "UKDt":
/*!*************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-utilities@29.7.9_5d977624104b06c7bcaa2de974ff51f1/node_modules/@ms/odsp-utilities/lib/logging/rumone/RUMOneLogger.js ***!
  \*************************************************************************************************************************************************************************************/
/*! exports provided: APICallHostType, APICallPerformanceData, ControlPerformanceData, default, RUMOneLogger */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APICallHostType", function() { return APICallHostType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APICallPerformanceData", function() { return APICallPerformanceData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControlPerformanceData", function() { return ControlPerformanceData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RUMOneLogger", function() { return RUMOneLogger; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _async_Async__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../async/Async */ "wzyn");
/* harmony import */ var _PageTransitionType__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PageTransitionType */ "TZi5");
/* harmony import */ var _events_RUMOneDataUpload_event__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../events/RUMOneDataUpload.event */ "pXMM");
/* harmony import */ var _browser_PlatformDetection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../browser/PlatformDetection */ "dv0D");
/* harmony import */ var _performance_PerformanceMarker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../performance/PerformanceMarker */ "HddE");
/* harmony import */ var _killswitch_Killswitch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../killswitch/Killswitch */ "QUgr");
/* harmony import */ var _TTI__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./TTI */ "Qgrq");
/* harmony import */ var _APITracker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./APITracker */ "K65J");
/* harmony import */ var _uri_Uri__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../uri/Uri */ "I5DX");
/* harmony import */ var _uri_SimpleUri__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../uri/SimpleUri */ "mbD+");

// OneDrive:IgnoreCodeCoverage










var PerformanceDataState;
(function (PerformanceDataState) {
    /**
     * Not enought data collected to upload
     * At this state logger isRunning is true
     */
    PerformanceDataState[PerformanceDataState["Incomplete"] = 1] = "Incomplete";
    /**
     * Required data collected and can be uploaded.
     * Practically all expected controls has rendered by this time
     * and EUPL and TTI have been collected.
     * At this state logger isRunning is true but sooner to change to false.
     */
    PerformanceDataState[PerformanceDataState["ReadyToUpload"] = 2] = "ReadyToUpload";
    /**
     * Incomplete -> ReadyToUpload |  ERROR_TIMEOUT time elapsed -> Uploaded
     * Performance data has been uploaded for the current page.
     * Until reset, no more data will be uploaded.
     */
    PerformanceDataState[PerformanceDataState["Uploaded"] = 3] = "Uploaded";
    /**
     * Incomplete -> ERROR_TIMEOUT time elapsed -> TimeOut -> Uploaded
     * Timeout occured before expected controls could finish rendering
     * Data will be uploaded as it is but without EUPL.
     * Consumer should consider EUPL="" as > 30 sec for performance analysis
     *
     * if EUPL measurement times out first, the state will become TimeOut, we will stop the measurement cycle and skip TTI measurement
     */
    PerformanceDataState[PerformanceDataState["TimeOut"] = 4] = "TimeOut";
    /**
     * Incomplete -> (ERROR_TIMEOUT time elapsed && TimeOut) | ReadyToUpload -> Skipped
     * This is a state where data has been collected or timeout but uploading the data was skipped
     * This happens when consumer has asked to do so based on the page's debug environment
     */
    PerformanceDataState[PerformanceDataState["Skipped"] = 5] = "Skipped";
})(PerformanceDataState || (PerformanceDataState = {}));
var APICallHostType;
(function (APICallHostType) {
    APICallHostType[APICallHostType["own"] = 0] = "own";
    APICallHostType[APICallHostType["cors"] = 1] = "cors";
})(APICallHostType || (APICallHostType = {}));
var APICallPerformanceData = /** @class */ (function () {
    function APICallPerformanceData(url, duration, correlationid, status, startTime, endTime, name) {
        this.url = url;
        this.duration = duration;
        this.correlationId = correlationid;
        this.status = status;
        this.startTime = startTime;
        this.endTime = endTime;
        this.name = name;
        this.clientDurationInMilliseconds = new Date(endTime).getTime() - new Date(startTime).getTime();
        this.origin = url && new _uri_Uri__WEBPACK_IMPORTED_MODULE_9__["default"](url).getHost();
    }
    return APICallPerformanceData;
}());

// Default key metrics which are always required before perf perf data is uploaded.
// For any additional key metric call addExpectedKeyMetric API
var DEFAULT_KEY_METRICS = ['EUPL', 'ScenarioId'];
// Each property column should confirm to this regex to align with Aria column name restriction.
var PROPERTY_NAME_REGEX = /^[a-zA-Z0-9](([a-zA-Z0-9|_|\.]){0,98}[a-zA-Z0-9])?$/;
// This regex gets the request text between /_api/ or /api/ and ( or ? so that we get the name of the API but don't get any PII
var REQUEST_API_REGEX = /(?:\/api\/|\/_api\/)(.*?)(?:\(|\?|$)/;
var ControlPerformanceData = /** @class */ (function () {
    function ControlPerformanceData(controlId, startTime, endTime, renderTimeCalculator, renderTimeRequiredDataChecker, ignoreForEUPL, needFlatten) {
        this.controlId = controlId;
        this.startTime = startTime;
        this.endTime = endTime;
        this.renderTimeCalculator = renderTimeCalculator;
        this.renderTimeRequiredDataChecker = renderTimeRequiredDataChecker;
        this.ignoreForEUPL = ignoreForEUPL === undefined ? true : ignoreForEUPL;
        this.needFlatten = needFlatten === undefined ? false : needFlatten;
    }
    return ControlPerformanceData;
}());

function isNullOrUndefined(item) {
    'use strict';
    return item === null || typeof item === 'undefined';
}
var DEFAULT_LOGGER_NAME = '__default_rumone__';
var DEFAULT_CONFIG = {
    checkInterval: 100,
    error_timeout: 30000,
    max_markers: 200 // suppport maximum 200 perf markers
};
var PERFTESTNAME = 'perftest';
/**
 * It is a new client side perf instrumentation, it logs more metrics, like scenario, api data, server request id, duration, etc in 1 single schema.
 * It has server side usage DB and cosmos supports.
 */
var RUMOneLogger = /** @class */ (function () {
    function RUMOneLogger(name, logFunc, rumOneconfig) {
        if (rumOneconfig === void 0) { rumOneconfig = DEFAULT_CONFIG; }
        this._keyMetrics = DEFAULT_KEY_METRICS.slice(0);
        this.async = new _async_Async__WEBPACK_IMPORTED_MODULE_1__["default"](this);
        this.dataStartTime = Date.now();
        this._rumoneData = {};
        this.dataState = PerformanceDataState.Incomplete;
        this.controls = [];
        this.apis = [];
        this._apiBuffer = {};
        this._loggingFunctions = [];
        this.euplBreakDown = {};
        this.ttiBreakDown = {};
        this.serverMetrics = {};
        this.isW3cTimingCollected = false;
        this._isW3cResourceTimingCollected = {};
        this.tempData = {};
        this._settings = {};
        this._emergencyUpdateFunc = this._emergencyUpload.bind(this);
        this._name = name;
        this.registerLoggingFunc(logFunc);
        this._config = rumOneconfig;
        this.setPerfDataTimer();
        this._platformDetection = new _browser_PlatformDetection__WEBPACK_IMPORTED_MODULE_4__["default"]();
        this._hookUnloadEvent();
        this._apiTracker = new _APITracker__WEBPACK_IMPORTED_MODULE_8__["RUMOneAPITracker"]();
    }
    /**
     * * RUMOneLogger.getRUMOneLogger: Use this method to get an intance of RUMOneLogger
     * with default parameters.
     * @param name: name of the instance of RUMOneLogger.
     * If not provided, the default singleton RUMOneLogger instance will be returned
     * @param logFunc: method of uploading collected RUMOne data to telemetry data storage
     * @param rumOneConfig: configuration of RUMOneLogger, do not pass in and use default if you
     * are not sure
     */
    RUMOneLogger.getRUMOneLogger = function (name, logFunc, rumOneConfig) {
        if (name === void 0) { name = DEFAULT_LOGGER_NAME; }
        if (rumOneConfig === void 0) { rumOneConfig = DEFAULT_CONFIG; }
        var loggingFunc = logFunc ||
            (function (streamName, dictProperties) {
                _events_RUMOneDataUpload_event__WEBPACK_IMPORTED_MODULE_3__["RUMOneDataUpload"].logData({ streamName: streamName, dictionary: dictProperties });
            });
        if (!RUMOneLogger.Loggers[name]) {
            try {
                var logger = new RUMOneLogger(name, loggingFunc, rumOneConfig);
                if (name === DEFAULT_LOGGER_NAME) {
                    RUMOneLogger.rumOneLogger = logger;
                }
                RUMOneLogger.Loggers[name] = logger;
            }
            catch (e) {
                // If RUMOneLogger fails, don't block UX
            }
        }
        return RUMOneLogger.Loggers[name];
    };
    RUMOneLogger.prototype.registerLoggingFunc = function (loggingFunc) {
        var _this = this;
        var index = this._loggingFunctions.indexOf(loggingFunc);
        if (index < 0) {
            this._loggingFunctions.push(loggingFunc);
        }
        return function () {
            if (index >= 0) {
                _this._loggingFunctions.splice(index, 1);
            }
        };
    };
    Object.defineProperty(RUMOneLogger.prototype, "KeyMetrics", {
        get: function () {
            if (this._TTIMeasurementEnabled()) {
                this.addExpectedKeyMetric('TTI');
                this.addExpectedKeyMetric('FCI');
            }
            return this._keyMetrics;
        },
        enumerable: true,
        configurable: true
    });
    RUMOneLogger.prototype.getPerformanceData = function () {
        return this._rumoneData;
    };
    RUMOneLogger.prototype.startAPIMeasurement = function (options) {
        var _this = this;
        var ignore = (options && options.ignore) || (function (url) { return false; });
        var getAPIName = (options && options.getAPIName) || (function (url) { return undefined; });
        var onRequest = function (options) {
            var id = options.id, request = options.request, type = options.type;
            var apiData = new APICallPerformanceData();
            apiData.startTime = new Date().toISOString();
            apiData.startTimeRelative = _this.now();
            if (type === 1 /* fetch */) {
                apiData.url = typeof request === 'string' ? request : request.url;
            }
            _this._apiBuffer[id] = apiData;
        };
        this._apiTracker.instrument({
            fetch: {
                onRequest: onRequest,
                onResponse: function (options) {
                    var response = options.response, id = options.id;
                    var apiData = _this._apiBuffer[id];
                    if (apiData && !ignore(apiData.url)) {
                        var durationStr = void 0;
                        try {
                            durationStr = response.headers.get('SPClientServiceRequestDuration');
                        }
                        catch (ex) {
                            /* ignore */
                        }
                        var correlationId = void 0;
                        try {
                            correlationId = response.headers.get('SPRequestGuid');
                        }
                        catch (ex) {
                            /* ignore */
                        }
                        apiData.name = getAPIName(apiData.url);
                        apiData = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, apiData), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ endTime: new Date().toISOString(), endTimeRelative: _this.now(), clientDurationInMilliseconds: _this.now() - apiData.startTimeRelative, status: response.status }, (durationStr
                            ? {
                                duration: Number(durationStr)
                            }
                            : {})), (correlationId
                            ? {
                                correlationId: correlationId
                            }
                            : {})));
                        _this.apis.push(apiData);
                    }
                }
            },
            xhr: {
                onRequest: onRequest,
                onResponse: function (options) {
                    var request = options.request, id = options.id;
                    var apiData = _this._apiBuffer[id];
                    var url = request.responseURL || request.requestUrl;
                    if (apiData && !ignore(url)) {
                        var durationStr = void 0;
                        durationStr = request.getResponseHeader('SPClientServiceRequestDuration');
                        var correlationId = void 0;
                        correlationId = request.getResponseHeader('SPRequestGuid');
                        apiData.name = getAPIName(url);
                        apiData = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, apiData), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ endTime: new Date().toISOString(), endTimeRelative: _this.now(), clientDurationInMilliseconds: _this.now() - apiData.startTimeRelative, status: request.status }, (durationStr
                            ? {
                                duration: Number(durationStr)
                            }
                            : {})), (correlationId
                            ? {
                                correlationId: correlationId
                            }
                            : {})), { url: url }));
                        _this.apis.push(apiData);
                    }
                }
            }
        });
        return function () {
            _this._apiTracker.undoInstrument();
        };
    };
    RUMOneLogger.prototype.resetLogger = function () {
        this._emergencyUpload(); // upload ready key metrics if we have not. this should rarely happen
        this._apiBuffer = {};
        this.dataStartTime = new Date().getTime();
        this.dataState = PerformanceDataState.Incomplete;
        this.isW3cTimingCollected = false;
        this._isW3cResourceTimingCollected = {};
        this.controls = [];
        this.apis = [];
        this.tempData = {};
        this._rumoneData = {};
        this._settings = {};
        this._keyMetrics = DEFAULT_KEY_METRICS.slice(0);
        this.clearPerfDataTimer();
        this.setPerfDataTimer();
        this.euplBreakDown = {};
        this.ttiBreakDown = {};
        this.serverMetrics = {};
        this.clearResourceTimings();
        Object(_performance_PerformanceMarker__WEBPACK_IMPORTED_MODULE_5__["clearMarks"])(this._getOwnMakers().map(function (marker) { return marker.name; }));
        RUMOneLogger._markers[this._name] = [];
        this._unhookUnloadEvent();
        this._hookUnloadEvent();
        this._ttiPromise = undefined;
        this._fciPromise = undefined;
        this.logMessageInConsole('Reset performance Logger Done');
    };
    RUMOneLogger.prototype.setSettings = function (settings) {
        this._settings = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this._settings), settings);
    };
    /**
     * Consumer should own logic to determine whether to ignore the  page for perf data collection
     * when Called this API, RUMOneLogger will not upload data but display in the console for debug purpose
     * E.g. Hidden Preload.aspx page for sharepoint or a debug page with #debugManifest or ?moduleLoader= in the url
     *
     */
    RUMOneLogger.prototype.excludePageForPerfData = function () {
        this.setSettings({
            excludePageData: true
        });
    };
    RUMOneLogger.prototype.getPerformanceDataPropertyValue = function (key) {
        return key && this._rumoneData[key];
    };
    /**
     * Use this API carefully to add extra dynamic columns to Performance data.
     * addEUPLBreakdown with needFlatter can do same thing, but add duplicate data into two columns
     * CAUTION: Do not use this API for random name as it can explode number of columns
     * Use column names which are going to be consistent and don't explode in count over time.
     * Like name based on guid, timestamp or counters are bad examples to use as key.
     *
     * @param key Name of the dynamic coulmn confirming to Regex /^[a-zA-Z0-9](([a-zA-Z0-9|_|\.]){0,98}[a-zA-Z0-9])?$/
     * @param value Corresponding value
     *
     * Throws Error when key does not confirm to the Supported Regex
     */
    RUMOneLogger.prototype.setPerformanceDataPropertyValue = function (key, value) {
        if (key && PROPERTY_NAME_REGEX.test(key)) {
            this._rumoneData[key] = value;
            return true;
        }
        else {
            console.error("key " + key + " does not confrim to the Regex " + PROPERTY_NAME_REGEX);
            return false;
        }
    };
    RUMOneLogger.prototype.addExpectedControl = function (control) {
        var normalizedControl = this._normalizeControl(control);
        if (!this.expectingControl(control)) {
            this.controls.push(normalizedControl);
        }
        else {
            // Ensure expected controls are not ignored from EUPL
            this.controls.filter(function (expected) { return expected.controlId === normalizedControl.controlId; })[0].ignoreForEUPL = normalizedControl.ignoreForEUPL;
        }
    };
    RUMOneLogger.prototype.expectingControl = function (control) {
        var normalizedControl = this._normalizeControl(control);
        return (this.controls.filter(function (expected) { return expected.controlId === normalizedControl.controlId; })
            .length > 0);
    };
    RUMOneLogger.prototype.writeServerCorrelationId = function (correlationId) {
        this._rumoneData.ServerCorrelationId = this._rumoneData.ServerCorrelationId || correlationId;
    };
    RUMOneLogger.prototype.writeServerUrl = function () {
        this._rumoneData.ServerUrl = this._processEUIIUrl(location.href);
    };
    RUMOneLogger.prototype.writeServerSideLatency = function (duration, iisLatency) {
        if (!this.isCollected('ServerRequestDuration')) {
            this._rumoneData.ServerRequestDuration = duration;
            this._rumoneData.IISLatency = iisLatency;
        }
    };
    RUMOneLogger.prototype.writeControlPerformanceData = function (controlData) {
        if (controlData) {
            var foundControl = this.controls.filter(function (control) { return control.controlId === controlData.controlId; })[0];
            if (foundControl) {
                if (!foundControl.data) {
                    foundControl.data = controlData;
                }
            }
            else {
                var control = {
                    controlId: controlData.controlId,
                    data: controlData,
                    ignoreForEUPL: controlData.ignoreForEUPL
                };
                this.controls.push(control);
            }
        }
    };
    RUMOneLogger.prototype.writeAPICallPerformanceData = function (apiData) {
        if (apiData) {
            this.apis.push(apiData);
        }
    };
    RUMOneLogger.prototype.readAPICallPerformanceData = function () {
        return this.apis;
    };
    RUMOneLogger.prototype.writeAppCache = function (appCache) {
        if (!this.isCollected('AppCache')) {
            this._rumoneData.AppCache = appCache;
        }
    };
    RUMOneLogger.prototype.writePageTransitionType = function (pageTransitionType, overwrite) {
        if ((!this.isCollected('PageTransitionType') || overwrite) &&
            (pageTransitionType === _PageTransitionType__WEBPACK_IMPORTED_MODULE_2__["default"].fullPageLoad ||
                pageTransitionType === _PageTransitionType__WEBPACK_IMPORTED_MODULE_2__["default"].none ||
                pageTransitionType === _PageTransitionType__WEBPACK_IMPORTED_MODULE_2__["default"].onePageAppNavigation)) {
            this._rumoneData.PageTransitionType = pageTransitionType;
        }
    };
    RUMOneLogger.prototype.writeScenarioId = function (scenarioId, overwrite) {
        if (!this.isCollected('ScenarioId') || overwrite) {
            this._rumoneData.ScenarioId = scenarioId;
        }
    };
    RUMOneLogger.prototype.collectW3CPerfTimings = function () {
        if (!this.isW3cTimingCollected) {
            var w3cTimeStampNames = [
                'navigationStart',
                'unloadEventStart',
                'unloadEventEnd',
                'fetchStart',
                'redirectStart',
                'redirectEnd',
                'domainLookupStart',
                'domainLookupEnd',
                'connectStart',
                'secureConnectionStart',
                'connectEnd',
                'requestStart',
                'responseStart',
                'responseEnd',
                'domLoading',
                'domComplete',
                'loadEventStart',
                'loadEventEnd'
            ];
            var perfTimingObject = performance && performance.timing;
            if (perfTimingObject) {
                for (var index = 0; index < w3cTimeStampNames.length; index++) {
                    var w3cObject = perfTimingObject[w3cTimeStampNames[index]];
                    if (w3cObject) {
                        this._logRUMOneData(this.getW3cTimingName(w3cTimeStampNames[index]), Number(w3cObject));
                    }
                }
                this.isW3cTimingCollected = true;
            }
        }
    };
    /**
     * report w3c resource timings
     * @param logSummery: log resource timing summary, including RequestCountTotal, total RequestDownloadTime
     * @param start: collect resource timing that only started less than start, default 0 means count everything from navigationStart
     */
    RUMOneLogger.prototype.collectW3cResourceTimings = function (options) {
        if (options === void 0) { options = undefined; }
        var _a = options || {}, _b = _a.logSummery, logSummery = _b === void 0 ? true : _b, _c = _a.start, start = _c === void 0 ? 0 : _c, _d = _a.end, end = _d === void 0 ? Math.round(this.now()) : _d, _e = _a.columnNameOverride, columnNameOverride = _e === void 0 ? function (name) { return name; } : _e;
        var optionKey = "logSummery=" + logSummery + "|start=" + start + "|end=" + end + "|columnNameOverride=" + columnNameOverride;
        var isW3cResourceTimingCollected = this._isW3cResourceTimingCollected[optionKey];
        if (window.document && !isW3cResourceTimingCollected && performance && performance.getEntriesByType) {
            var allRequests = performance.getEntriesByType('resource');
            var iFrames = document.getElementsByTagName('iframe');
            for (var index = 0; index < iFrames.length; index++) {
                var iFramePerformance = null;
                try {
                    iFramePerformance = iFrames[index].contentWindow.performance;
                }
                catch (e) {
                    // sometimes we can't access iFrame.
                }
                if (iFramePerformance && iFramePerformance.getEntriesByType) {
                    allRequests.concat(iFramePerformance.getEntriesByType('resource'));
                }
            }
            var fromSources_1 = {};
            fromSources_1['SharePoint'] = function (element) {
                // this code accounts for vanity domains
                var name = element.name;
                return 0 === name.search(window.location.protocol + '//' + window.location.host);
            }; //matching sharepoint.com or spoppe.com
            fromSources_1['CDN'] = RUMOneLogger._isRequestFromCDN;
            fromSources_1['ThirdParty'] = function (element) {
                return !fromSources_1['SharePoint'](element) && !fromSources_1['CDN'](element);
            }; // all requests other than sharepoint requests or cdn requests
            var types = {};
            types['ASPX'] = function (element) {
                return /\.aspx/i.test(element.name);
            };
            types['JS'] = function (element) {
                return /script/i.test(element.initiatorType);
            };
            types['CSS'] = function (element) {
                return /link|css/i.test(element.initiatorType);
            };
            types['IMG'] = function (element) {
                return /img/i.test(element.initiatorType);
            };
            allRequests = allRequests.filter(function (request) { return request.startTime >= start && request.startTime <= end; });
            var sources = Object.keys(fromSources_1);
            for (var index = 0; index < sources.length; index++) {
                var source = sources[index];
                var requests = this.categorizeResourceRequests(allRequests, {
                    from: fromSources_1[source],
                    requestType: null //match any type to get total request count for this source
                });
                if (logSummery) {
                    this._logRUMOneData(columnNameOverride(source + 'RequestCountTotal'), requests.length); //SharePoint|CDN|ThirdParty resource request count
                }
                var typeKeys = Object.keys(types);
                for (var typeIndex = 0; typeIndex < typeKeys.length; typeIndex++) {
                    var type = typeKeys[typeIndex];
                    if (logSummery) {
                        this._logRUMOneData(columnNameOverride(source + 'RequestCount' + type), this.categorizeResourceRequests(requests, {
                            from: null,
                            requestType: types[type]
                        }).length); //SharePoint|CDN|ThirdParty ASPX resource request count
                    }
                }
                if (requests.length > 0) {
                    if (logSummery) {
                        this._logRUMOneData(columnNameOverride(source + 'RequestDownloadTime'), Math.round(requests.reduce(function (sum, currentVal) {
                            return sum + currentVal.duration;
                        }, 0) / requests.length)); //SharePoint|CDN|ThirdParty resource request average duration
                    }
                    // log the file names of all resource requests in a JSON string. The output after processing will looks like:
                    // [{name: "require-db6c47e2.js", startTime: 500, duration: 100},{name: "RenderListDataAsStream", startTime: 200, duration: 10}]
                    // The raw resource name before this processing is "https://msft.spoppe.com/teams/SPGroups/_api/web/GetList(@listUrl)/RenderListDataAsStream?Paged=TRUE&p_FileLeafRef=test%2eurl&p_ID=213&PageFirstRow=121&View=6eab4254-2f2f-4086-91c0-549ae900cc93&@listUrl=%27%2Fteams%2FSPGroups%2FVNextDocLib%27"
                    if (source === 'CDN') {
                        // only log file names for CDN requests since other source may contain EUII
                        var files = JSON.stringify(requests.map(function (timing) {
                            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ name: timing.name
                                    .split('/')
                                    .map(function (urlToken) {
                                    return urlToken.split('?')[0];
                                })
                                    .filter(function (urlToken) {
                                    return urlToken && urlToken.length > 0;
                                })
                                    .slice(-1)[0]
                                    .replace(/\(.*?\)/g, '()'), startTime: Math.round(timing.startTime), duration: Math.round(timing.duration), transferSize: timing.transferSize || 0, fetchStart: Math.round(timing.fetchStart), requestStart: Math.round(timing.requestStart) }, getProperty(timing, 'workerStart')), getProperty(timing, 'connectionStart')), getProperty(timing, 'connectionEnd')), getProperty(timing, 'domainLookupStart')), getProperty(timing, 'domainLookupEnd')), getProperty(timing, 'responseStart')), getProperty(timing, 'responseEnd')), getProperty(timing, 'redirectStart')), getProperty(timing, 'redirectEnd')), getProperty(timing, 'secureConnectionStart'));
                        }));
                        this._logRUMOneData(columnNameOverride(source + 'RequestNames'), files);
                    }
                }
            }
            this._isW3cResourceTimingCollected[optionKey] = true;
        }
    };
    RUMOneLogger.prototype.saveTempData = function (key, value) {
        this.tempData[key] = value;
    };
    RUMOneLogger.prototype.readTempData = function (key) {
        return this.tempData[key];
    };
    RUMOneLogger.prototype.writeRenderTime = function (renderTime, overwrite) {
        if (!this.isCollected('RenderTime') || overwrite) {
            this._rumoneData.RenderTime = renderTime;
        }
    };
    RUMOneLogger.prototype.writePreRenderTime = function (preRender) {
        if (!this.isCollected('PreRender')) {
            this._rumoneData.PreRender = preRender;
        }
    };
    RUMOneLogger.prototype.writePostRenderTime = function (postRender) {
        if (!this.isCollected('PostRender')) {
            this._rumoneData.PostRender = postRender;
        }
    };
    RUMOneLogger.prototype.writeDataFetchTime = function (dataFetch, overwrite) {
        if (!this.isCollected('DataFetch') || overwrite) {
            this._rumoneData.DataFetch = dataFetch;
        }
    };
    RUMOneLogger.prototype.writeAppInfo = function (appInfo, overwrite) {
        if (!this.isCollected('AppInfo') || overwrite) {
            this._rumoneData.AppInfo = appInfo;
        }
    };
    RUMOneLogger.prototype.isRunning = function () {
        return !(this.dataState === PerformanceDataState.Uploaded ||
            this.dataState === PerformanceDataState.TimeOut ||
            this.dataState === PerformanceDataState.Skipped);
    };
    RUMOneLogger.prototype.writeEUPLBreakdown = function (euplBreakdown, overwrite) {
        return this._writeBreakdown(this.euplBreakDown, euplBreakdown, overwrite);
    };
    RUMOneLogger.prototype.addEUPLBreakdown = function (name, value, overwrite) {
        return this._addBreakdown(this.euplBreakDown, name, value, overwrite);
    };
    RUMOneLogger.prototype.readEUPLBreakdown = function (name) {
        return this._readBreakdown(this.euplBreakDown, name);
    };
    RUMOneLogger.prototype.writeTTIBreakdown = function (ttiBreakdown, overwrite) {
        return this._writeBreakdown(this.ttiBreakDown, ttiBreakdown, overwrite);
    };
    RUMOneLogger.prototype.addTTIBreakdown = function (name, value, overwrite) {
        return this._addBreakdown(this.ttiBreakDown, name, value, overwrite);
    };
    RUMOneLogger.prototype.readTTIBreakdown = function (name) {
        return this._readBreakdown(this.ttiBreakDown, name);
    };
    /**
     * Add list of flights enabled for this page.
     */
    RUMOneLogger.prototype.addFlights = function (flights) {
        if (flights && flights.length > 0) {
            var _flights = JSON.parse(this.getPerformanceDataPropertyValue('Flights') || '[]');
            for (var index = 0; index < flights.length; index++) {
                var flight = flights[index];
                if (flight && _flights.indexOf(flight) === -1) {
                    _flights.push(flight);
                }
            }
            this._rumoneData.Flights = JSON.stringify(_flights);
        }
    };
    /**
     * Collect ALL sharepoint client and server flights status and have them serialized into a bit array (_vector).
     * So when client query try to find the enabling status of feature {odb: x}, it can be checked by _vector[feature.odb] !== '0'
     * Note: this function will overwrite the Flights fields, if you have called addFlights() API, your added flight information will be overwritten to
     * this entire client side flight status.
     */
    RUMOneLogger.prototype.collectSPClientFlights = function (context) {
        var featureVectors = context.ExpFeatures;
        var ret = '';
        for (var _i = 0, featureVectors_1 = featureVectors; _i < featureVectors_1.length; _i++) {
            var vector = featureVectors_1[_i];
            var bitStr = this._numberToBinString(vector);
            var reversed = bitStr.split('').reverse().join('');
            ret += reversed;
        }
        this._rumoneData.Flights = ret;
    };
    RUMOneLogger.prototype.addServerMetrics = function (metric, overwrite) {
        if (metric) {
            for (var key in metric) {
                if (key &&
                    !isNullOrUndefined(metric[key]) &&
                    (isNullOrUndefined(this.serverMetrics[key]) || overwrite)) {
                    this.serverMetrics[key] = metric[key];
                }
            }
        }
    };
    /**
     * Write version of the Sharepoint server served the request
     */
    RUMOneLogger.prototype.writeServerVersion = function (version) {
        this._rumoneData.SharePointServerVersion = version;
    };
    RUMOneLogger.prototype.readControlPerformanceData = function () {
        return this.controls
            .filter(function (control) { return !!control.data; })
            .map(function (control) { return control.data; });
    };
    RUMOneLogger.prototype.mark = function (name) {
        var marks = (RUMOneLogger._markers[this._name] = RUMOneLogger._markers[this._name] || []);
        marks.push(name);
        Object(_performance_PerformanceMarker__WEBPACK_IMPORTED_MODULE_5__["mark"])(name);
    };
    RUMOneLogger.prototype.now = function () {
        return performance && performance.now ? Math.round(performance.now()) : NaN;
    };
    /**
     * Register handler function that will be called back when EUPL is computed successfully.
     * @param handler function that app register, wiill be called back when EUPL is computed.
     */
    RUMOneLogger.prototype.registerEUPLComputedHandler = function (handler) {
        this._EUPLComputedHandler = handler;
    };
    /**
     * Register handler function that will be called back when timeout happens.
     * @param handler function that app register, will be called back when timeout happens
     */
    RUMOneLogger.prototype.registerErrorHandler = function (handler) {
        /* no-op */
    };
    RUMOneLogger.prototype.getMarkerTime = function (name) {
        return Object(_performance_PerformanceMarker__WEBPACK_IMPORTED_MODULE_5__["getMarkerTime"])(name);
    };
    /**
     * Add key expected metric. RUMONeLogger will wait upon these key metrics to be collected
     * before uploading performance data.
     * @param keyMetric
     */
    RUMOneLogger.prototype.addExpectedKeyMetric = function (keyMetric) {
        if (this._keyMetrics && this._keyMetrics.indexOf(keyMetric) === -1) {
            this._keyMetrics.push(keyMetric);
        }
    };
    Object.defineProperty(RUMOneLogger.prototype, "waitOnAddingExpectedControl", {
        /**
         * If set to true, RUMOnelogger will wait until this is not set false again before concluding all expected controls are added
         * Set it to true if not all expected controls are added
         * Set it to false once all expected controls has been added
         */
        set: function (wait) {
            this.setSettings({ waitOnAddingExpectedControl: wait });
        },
        enumerable: true,
        configurable: true
    });
    // matching cdn(ppe)sharepointonline.com or adamaihd.net or akamai.odsp.cdn.office.net
    RUMOneLogger._isRequestFromCDN = function (element) {
        var pageContext = window['_spPageContextInfo'];
        var name = element.name;
        if (pageContext &&
            pageContext.cdnPrefix &&
            0 === name.search(window.location.protocol + '//' + pageContext.cdnPrefix)) {
            return true;
        }
        if (pageContext && pageContext.cdnBaseUrl && 0 === name.search(pageContext.cdnBaseUrl)) {
            return true;
        }
        return /(cdn(ppe)?|static(ppe)?)\.sharepointonline\.com|\.akamaihd\.net|akamai\.odsp\.cdn\.office\.net/i.test(name);
    };
    /**
     * use tti-polyfill to measure browser thread idle time which we define as TTI (time to interactive)
     * in most of the time, people do not need to directly call this method, it will be called internally
     * after EUPL is collected if measureTTI setting is set.
     */
    RUMOneLogger.prototype._measureTTI = function () {
        var _this = this;
        this._rumoneData.TTISupported = Object(_TTI__WEBPACK_IMPORTED_MODULE_7__["TTIIsSupported"])();
        // make sure only call measureTTI once per measurement
        if (this._TTIPolyfillEnabled() && !this._ttiPromise) {
            this._ttiPromise = Object(_TTI__WEBPACK_IMPORTED_MODULE_7__["measureTTI"])(this._settings.TTISettings.TTIPolyfillSettings.options);
            this._ttiPromise.then(function (ttiResult) {
                var _a = ttiResult || {}, tti = _a.tti, longTasks = _a.longTasks;
                var ttiAbsoluteTime = tti;
                if (isNullOrUndefined(tti)) {
                    tti = NaN; // if TTI is not supported, set it to NaN to make isCollected('TTI') return correctly
                }
                else {
                    var calculator = _this._settings.TTISettings.TTIPolyfillSettings.calculateTTI;
                    if (calculator) {
                        tti = calculator(Math.round(tti), _this._rumoneData, 'TTI');
                    }
                }
                _this._rumoneData.TTI = tti;
                if (longTasks) {
                    _this._rumoneData.TTILongTasks = JSON.stringify(longTasks);
                }
                if (!_killswitch_Killswitch__WEBPACK_IMPORTED_MODULE_6__["Killswitch"].isActivated('c0c98200-06d9-4819-bab1-e23925e47daa', '12/1/2020')) {
                    _this._logLastRequestBeforeTTI(tti, longTasks, 'TTI');
                }
                _this.collectW3cResourceTimings({
                    logSummery: false,
                    start: ttiAbsoluteTime - (tti - _this._rumoneData.EUPL),
                    end: ttiAbsoluteTime,
                    columnNameOverride: function (name) { return name + "OfTTI"; }
                });
            });
        }
        if (this._TTIPolyfillEnabled() && !this._fciPromise) {
            this._fciPromise = Object(_TTI__WEBPACK_IMPORTED_MODULE_7__["measureFCI"])();
            this._fciPromise.then(function (fciResult) {
                var _a = fciResult || {}, fci = _a.fci, longTasks = _a.longTasks;
                if (isNullOrUndefined(fci)) {
                    fci = NaN; // if FCI is not supported, set it to NaN to make isCollected('FCI') return correctly
                }
                else {
                    var calculator = _this._settings.TTISettings.TTIPolyfillSettings.calculateTTI;
                    if (calculator) {
                        fci = calculator(Math.round(fci), _this._rumoneData, 'FCI');
                    }
                }
                _this._rumoneData.FCI = fci;
                if (longTasks) {
                    _this._rumoneData.FCILongTasks = JSON.stringify(longTasks);
                }
                if (!_killswitch_Killswitch__WEBPACK_IMPORTED_MODULE_6__["Killswitch"].isActivated('c0c98200-06d9-4819-bab1-e23925e47daa', '12/1/2020')) {
                    _this._logLastRequestBeforeTTI(fci, longTasks, 'FCI');
                }
            });
        }
    };
    RUMOneLogger.prototype._logLastRequestBeforeTTI = function (tti, longTasks, source) {
        // Find the last request that ends before the last LRT begins - this is likely to have caused that LRT
        var requests = performance.getEntriesByType('resource');
        if (tti && longTasks && longTasks.length > 0 && requests && requests.length > 0) {
            var lastLRTStart = longTasks[longTasks.length - 1].start;
            var closestToTTI = requests[0];
            for (var _i = 0, requests_1 = requests; _i < requests_1.length; _i++) {
                var req = requests_1[_i];
                // longTasks are only captured up until TTI, so we don't actually need to check against TTI
                if (req.responseEnd < lastLRTStart && req.responseEnd > closestToTTI.responseEnd) {
                    closestToTTI = req;
                }
            }
            // If request comes from the CDN we can log the name, else just log the authority due to PII concerns
            var requestName = void 0;
            if (RUMOneLogger._isRequestFromCDN(closestToTTI)) {
                requestName = closestToTTI.name;
            }
            else {
                if (!_killswitch_Killswitch__WEBPACK_IMPORTED_MODULE_6__["Killswitch"].isActivated('3340adbc-757d-4e71-ac26-573b256191f2', '1/15/2021')) {
                    requestName = this._processLastNetworkUrl(closestToTTI.name);
                }
                else {
                    requestName = this._processEUIIUrl(closestToTTI.name);
                }
            }
            var requestType = void 0;
            if (/\.aspx/i.test(closestToTTI.name)) {
                requestType = 'ASPX';
            }
            else if (/\.js/i.test(closestToTTI.name)) {
                requestType = 'JS';
            }
            else if (/\.css/i.test(closestToTTI.name)) {
                requestType = 'CSS';
            }
            else if (/img/i.test(closestToTTI.initiatorType) ||
                /\.jpg|\.jpeg|\.png|\.gif/i.test(closestToTTI.name)) {
                requestType = 'IMG';
            }
            else if (/aria\.microsoft\.com/i.test(closestToTTI.name)) {
                requestType = 'Aria';
            }
            else if (/_api/i.test(closestToTTI.name)) {
                requestType = 'API';
            }
            else {
                requestType = 'Other';
            }
            if (source === 'TTI') {
                this._rumoneData.TTILastRequestName = requestName;
                this._rumoneData.TTILastRequestType = requestType;
                if (!_killswitch_Killswitch__WEBPACK_IMPORTED_MODULE_6__["Killswitch"].isActivated('c4618257-45c8-40ee-b4bd-1933c46fed21', '1/22/2021')) {
                    this._rumoneData.TTILastRequestStartTime = closestToTTI.startTime;
                    this._rumoneData.TTILastRequestEndTime = closestToTTI.responseEnd;
                }
            }
            else {
                this._rumoneData.FCILastRequestName = requestName;
                this._rumoneData.FCILastRequestType = requestType;
                if (!_killswitch_Killswitch__WEBPACK_IMPORTED_MODULE_6__["Killswitch"].isActivated('c4618257-45c8-40ee-b4bd-1933c46fed21', '1/22/2021')) {
                    this._rumoneData.FCILastRequestStartTime = closestToTTI.startTime;
                    this._rumoneData.FCILastRequestEndTime = closestToTTI.responseEnd;
                }
            }
        }
    };
    // convert a number to DWORD bit string, fill in 0s to the higher bits
    RUMOneLogger.prototype._numberToBinString = function (dec) {
        var baseStr = (dec >>> 0).toString(2);
        return "" + Array(32 - baseStr.length + 1).join('0') + baseStr;
    };
    RUMOneLogger.prototype._logRUMOneData = function (key, value) {
        if (key) {
            this._rumoneData[key] = value;
        }
    };
    RUMOneLogger.prototype.clearResourceTimings = function () {
        if (performance && performance.clearResourceTimings) {
            performance.clearResourceTimings();
        }
    };
    RUMOneLogger.prototype._isBreakdownValue = function (data) {
        return data.needFlatten !== undefined;
    };
    RUMOneLogger.prototype.collectMarks = function () {
        var _this = this;
        var marks = {};
        var markerIndex = 0;
        this._getOwnMakers().forEach(function (mark) {
            if (markerIndex < _this._config.max_markers) {
                var markName = mark.name.substr(_performance_PerformanceMarker__WEBPACK_IMPORTED_MODULE_5__["MARKER_PREFIX"].length) + (".mark" + markerIndex++);
                marks[markName] = Math.round(mark.startTime); // covert to rumone collected marks to object and merge to EUPL Breakdown
            }
        });
        this.writeEUPLBreakdown(JSON.stringify(marks));
    };
    RUMOneLogger.prototype._getOwnMakers = function () {
        var _this = this;
        var markers = RUMOneLogger._markers;
        var markersFromOtherInstances = [].concat.apply([], Object.keys(markers)
            .filter(function (name) { return markers.hasOwnProperty(name) && name !== _this._name; })
            .map(function (name) { return markers[name]; }));
        // include markers generated by current rumone instance and all externally created perf markers
        var results = Object(_performance_PerformanceMarker__WEBPACK_IMPORTED_MODULE_5__["getAllMarks"])().filter(function (mark) { return markersFromOtherInstances.indexOf(mark.name) === -1; });
        return results;
    };
    RUMOneLogger.prototype.logMessageInConsole = function (message) {
        if (this.isRUMOneDebuggingEnabled) {
            console.log(message);
        }
    };
    Object.defineProperty(RUMOneLogger.prototype, "isRUMOneDebuggingEnabled", {
        get: function () {
            try {
                if ('sessionStorage' in window && window.sessionStorage) {
                    var debugStr = window.sessionStorage['enableRUMOneDebugging'];
                    var debug = debugStr && debugStr.toLowerCase() === 'true';
                    return debug && typeof console !== 'undefined' && !!console;
                }
            }
            catch (e) {
                // sessionStorage errors
            }
            return false;
        },
        enumerable: true,
        configurable: true
    });
    RUMOneLogger.prototype.logObjectForDebugging = function (propertyName, dictProperties) {
        if (this.isRUMOneDebuggingEnabled) {
            var logMessageText = this._name + " " + propertyName + ' : ' + JSON.stringify(dictProperties);
            console.log(logMessageText);
        }
    };
    RUMOneLogger.prototype.isCollected = function (name) {
        return !isNullOrUndefined(this.getPerformanceDataPropertyValue(name));
    };
    RUMOneLogger.prototype._normalizeControl = function (control) {
        return typeof control === 'string'
            ? {
                controlId: control,
                ignoreForEUPL: false
            }
            : control;
    };
    RUMOneLogger.prototype.setPerfDataTimer = function () {
        this.perfDataTimer = this.async.setTimeout(this.loopForDataCompleteness, this._config.checkInterval);
    };
    RUMOneLogger.prototype.clearPerfDataTimer = function () {
        if (!isNullOrUndefined(this.perfDataTimer)) {
            this.async.clearTimeout(this.perfDataTimer);
            this.perfDataTimer = null;
        }
    };
    RUMOneLogger.prototype._hookUnloadEvent = function () {
        /* tslint:disable:ban-native-functions */
        if (window.addEventListener) {
            window.addEventListener('beforeunload', this._emergencyUpdateFunc);
        }
        /* tslint:enable:ban-native-functions */
    };
    RUMOneLogger.prototype._unhookUnloadEvent = function () {
        /* tslint:disable:ban-native-functions */
        if (window.removeEventListener) {
            window.removeEventListener('beforeunload', this._emergencyUpdateFunc);
        }
        /* tslint:enable:ban-native-functions */
    };
    RUMOneLogger.prototype.categorizeResourceRequests = function (requests, categorizer) {
        var ret = [];
        for (var index = 0; index < requests.length; index++) {
            var request = requests[index];
            if ((!categorizer.from || categorizer.from(request)) &&
                (!categorizer.requestType || categorizer.requestType(request))) {
                ret.push(request);
            }
        }
        return ret;
    };
    RUMOneLogger.prototype._setFCP = function () {
        var fcp = NaN;
        var paints = performance && performance.getEntriesByType && performance.getEntriesByType('paint');
        if (paints && paints.length > 0) {
            var rawfcp = paints.filter(function (p) { return p.name === 'first-contentful-paint'; });
            if (rawfcp && rawfcp.length === 1) {
                fcp = rawfcp[0].startTime;
            }
            else {
                var rawfp = paints.filter(function (p) { return p.name === 'first-paint'; });
                if (rawfp && rawfp.length === 1) {
                    fcp = rawfp[0].startTime;
                }
            }
        }
        if (!isNaN(fcp)) {
            this._rumoneData.FCP = Math.round(fcp);
        }
    };
    RUMOneLogger.prototype.collectSupplementaryData = function () {
        this._setFCP();
        this.setAPIDataToRUMOne();
        this.collectMarks();
        this.writeServerUrl();
        this.setBrowseInfo();
        this.setReferrer();
        this._collectMemoryData();
        this._collectPageServerData();
        this._setAppInfo();
        this._setTestName();
        this._collectExperiments();
        this._rumoneData.ServerMetrics = JSON.stringify(this.serverMetrics);
        this._rumoneData.EUPLBreakdown = JSON.stringify(this.euplBreakDown);
        this._rumoneData.TTIBreakdown = JSON.stringify(this.ttiBreakDown);
    };
    RUMOneLogger.prototype._collectExperiments = function () {
        // Based on lumissik@microsoft.com, we should not log experiment data with server time older than 15 days,
        // You can refer to SPExperiment.ts:_logInternal for more details.
        var expired = 1000 * 60 * 60 * 24 * 15;
        var latestExpState = window.ODSP_EXPERIMENTS || {};
        var ret = {};
        for (var id in latestExpState) {
            if (latestExpState.hasOwnProperty(id)) {
                var experiment = latestExpState[id];
                if (experiment &&
                    experiment._serverTime &&
                    Date.now() - new Date(experiment._serverTime).getTime() < expired) {
                    ret[id] = latestExpState[id];
                }
            }
        }
        this._rumoneData.SPExperiments = JSON.stringify(ret);
    };
    RUMOneLogger.prototype._setTestName = function () {
        var uri = new _uri_Uri__WEBPACK_IMPORTED_MODULE_9__["default"](location.href);
        var perfTestName = uri.getQueryParameter(PERFTESTNAME);
        if (perfTestName && !this._rumoneData.TestName) {
            this._rumoneData.TestName = perfTestName;
        }
    };
    RUMOneLogger.prototype.loopForDataCompleteness = function () {
        this.clearPerfDataTimer();
        if (!this._settings.waitOnAddingExpectedControl) {
            if (this.isRUMOneDebuggingEnabled) {
                this.logMessageInConsole('====================================================================');
                this.logObjectForDebugging('RUMONE: ', this._rumoneData);
                this.logObjectForDebugging('RUMOne DataState: ', String(this.getReadableDataState(this.dataState)));
                this.logObjectForDebugging('Controls: ', this.controls);
                this.logObjectForDebugging('API Performance Data: ', this.apis);
                this.logObjectForDebugging('Temp Data: ', this.tempData);
                this.logObjectForDebugging('EUPLBreakdown: ', this.euplBreakDown);
                this.logObjectForDebugging('TTIBreakdown: ', this.ttiBreakDown);
                this.logObjectForDebugging('ServerMetrics: ', this.serverMetrics);
                this.logMessageInConsole('====================================================================\n\n');
            }
            if (!this.isRunning()) {
                return;
            }
            this._updateState();
        }
        // Check timeout
        this._checkTimeout();
        if (this.isRunning()) {
            this.setPerfDataTimer();
        }
    };
    // the state machine
    RUMOneLogger.prototype._updateState = function () {
        switch (this.dataState) {
            case PerformanceDataState.Incomplete:
                this.processControlRenderTime();
                if (this.readyToComputeEUPL()) {
                    // if all expected control data is available, compute EUPL
                    this.setEUPL();
                }
                var missingControls = this._getMissedControls();
                if (this._TTIMeasurementEnabled() && this.isCollected('EUPL') && missingControls.length === 0) {
                    // after EUPL is reached and all deferred controls are also rendered,
                    // start detecting TTI
                    this._measureTTI();
                }
                if (this._getMissedKeyMetrics().length === 0 && missingControls.length === 0) {
                    // all key metrics and all control perf data (including deferred) are collected, ready to upload EUPL data
                    this.dataState = PerformanceDataState.ReadyToUpload;
                }
                break;
            case PerformanceDataState.ReadyToUpload:
                this._uploadPerfData({
                    emergency: false
                });
                break;
            default:
                // other states skipped, timeout, Uploaded. In these cases, RUMOne alread stopped, measurement cycle is done
                break;
        }
    };
    /**
     * Check if we reached TIMEOUT without being ready to upload and timeout if so
     */
    RUMOneLogger.prototype._checkTimeout = function () {
        if (!this.isRunning() || this.dataState === PerformanceDataState.ReadyToUpload) {
            return;
        }
        var now = Date.now();
        if (this.dataState === PerformanceDataState.Incomplete &&
            now - this.dataStartTime <= this._config.error_timeout) {
            return; // Nope, we still have time for EUPL
        }
        // Upload whatever data we have without all key metrics
        var error = {
            reason: 'TimeOut',
            details: {
                MissingMetrics: this._getMissedKeyMetrics(),
                MissingControls: this._getMissedControls()
            }
        };
        this._rumoneData.RUMOneError = JSON.stringify(error);
        this.dataState = PerformanceDataState.TimeOut;
        this._uploadPerfData({
            emergency: false
        });
    };
    /**
     * Get array of missing key metrices
     */
    RUMOneLogger.prototype._getMissedKeyMetrics = function () {
        var missedKeyMetrics = [];
        for (var i = 0; i < this.KeyMetrics.length; i++) {
            // check if key metrics are collected
            var keyMetricValue = this.getPerformanceDataPropertyValue(this.KeyMetrics[i]);
            if (isNullOrUndefined(keyMetricValue)) {
                missedKeyMetrics.push(this.KeyMetrics[i]);
            }
        }
        return missedKeyMetrics;
    };
    /**
     * Get array of controls missing data
     */
    RUMOneLogger.prototype._getMissedControls = function () {
        return this.controls.filter(function (control) { return !control.data || !control.data.renderTime; });
    };
    // since we allow secondary controls reported but not be used to calculate EUPL,
    // these controls might be very slow and we are in higher risky that end user navigates
    // away from this page before we upload our data although EUPL might be available already.
    // This should be hooked with onunload event and resetlogger method
    RUMOneLogger.prototype._emergencyUpload = function () {
        if (this.isRunning()) {
            this._uploadPerfData({
                emergency: true
            });
        }
    };
    // if emergency set to true, we will not validate data state in uploadPerfData call
    // since current page is navigating away, mostly likely we already collected key metrics
    // only waiting for secondary controls, we should upload data collected so far
    RUMOneLogger.prototype._uploadPerfData = function (options) {
        this.writeControlDataToRUMOne();
        this.collectSupplementaryData();
        var emergency = options.emergency;
        this._rumoneData.EmergencyUploaded = !!emergency;
        try {
            if (this._settings.excludePageData) {
                this.dataState = PerformanceDataState.Skipped;
                this.logMessageInConsole('Uploading perf data skipped as requested by the consumer');
            }
            else if (!emergency &&
                this.dataState !== PerformanceDataState.ReadyToUpload &&
                this.dataState !== PerformanceDataState.TimeOut) {
                console.error("Error: Uploading perf data called with wrong data state " + this.dataState);
            }
            else if (!(this._loggingFunctions && this._loggingFunctions.length > 0)) {
                console.error('Uploading perf data skipped as loggingFunc is not defined');
            }
            else if (!this._rumoneData) {
                console.error('Error: Uploading perf data called but perf data is not available');
            }
            else {
                var dataToBeUploaded_1 = this.getPerformanceData();
                this._loggingFunctions.forEach(function (loggingFunc) {
                    loggingFunc('RUMOne', dataToBeUploaded_1);
                });
                this.dataState = PerformanceDataState.Uploaded;
                if (this.isRUMOneDebuggingEnabled) {
                    this.logMessageInConsole('Final Data uploaded');
                    this.logObjectForDebugging('RUMONE: ', dataToBeUploaded_1);
                    this.logObjectForDebugging('RUMOne DataState: ', this.getReadableDataState(this.dataState));
                }
            }
        }
        catch (e) {
            (function (errorText) {
                if (typeof console !== 'undefined' && Boolean(console)) {
                    console.error(errorText);
                }
            })("PerformanceLogger error writing RUMOne data: " + e);
        }
        finally {
            if (!this.isRunning()) {
                this._unhookUnloadEvent();
                this._apiTracker.undoInstrument();
            }
        }
    };
    RUMOneLogger.prototype._TTIPolyfillEnabled = function () {
        if (this._settings.TTISettings &&
            this._settings.TTISettings.TTIPolyfillSettings &&
            this._settings.TTISettings.TTIPolyfillSettings.enabled) {
            return true;
        }
        else {
            return false;
        }
    };
    RUMOneLogger.prototype._TTIMeasurementEnabled = function () {
        return this._TTIPolyfillEnabled();
    };
    RUMOneLogger.prototype.getReadableDataState = function (_dataState) {
        for (var key in PerformanceDataState) {
            if (_dataState === Number(PerformanceDataState[key])) {
                return key;
            }
        }
        return 'NaN';
    };
    /**
     * Write Control and corresponding render time for top 10 renderTime controls.
     */
    RUMOneLogger.prototype.writeControlDataToRUMOne = function () {
        if (this.controls && this.controls.length) {
            var byRenderTime = this.controls
                .slice(0)
                .filter(function (control) { return !!control.data && !!control.data.renderTime && !control.ignoreForEUPL; });
            byRenderTime.sort(function (control1, control2) {
                return control2.data.renderTime - control1.data.renderTime;
            });
            // We have maximum 10 slots for the Control render data collection
            for (var index = 0; index < 10 && index < byRenderTime.length; index++) {
                this._logRUMOneData("Control" + (index + 1) + "Id", byRenderTime[index].controlId);
                this._logRUMOneData("Control" + (index + 1) + "RenderTime", byRenderTime[index].data.renderTime);
            }
            // for secondary controls, we wrote data into EUPL breakdown
            var secondaryControls_1 = {};
            this.controls
                .slice(0)
                .filter(function (control) { return !!control.data && !!control.data.renderTime && !!control.ignoreForEUPL; })
                .forEach(function (control) {
                secondaryControls_1[control.controlId] = {
                    data: control.data.renderTime,
                    needFlatten: control.data.needFlatten
                };
            });
            if (Object.keys(secondaryControls_1).length > 0) {
                this.writeEUPLBreakdown(JSON.stringify(secondaryControls_1), true);
            }
        }
    };
    /**
     * Calculate renderTime for the controls ready for it.
     */
    RUMOneLogger.prototype.processControlRenderTime = function () {
        for (var _i = 0, _a = this.controls; _i < _a.length; _i++) {
            var control = _a[_i];
            // if this control is not processed yet and ready to be processed
            if (control.data &&
                !control.data.renderTime &&
                control.data.renderTimeRequiredDataChecker(this, control.data)) {
                control.data.renderTime = control.data.renderTimeCalculator(this, control.data);
            }
        }
    };
    RUMOneLogger.prototype.readyToComputeEUPL = function () {
        var keyControls = this.controls.filter(function (control) { return !control.ignoreForEUPL; });
        var ready = keyControls.length > 0;
        for (var _i = 0, keyControls_1 = keyControls; _i < keyControls_1.length; _i++) {
            var control = keyControls_1[_i];
            if (!control.data || !control.data.renderTime) {
                ready = false;
                break;
            }
        }
        return ready;
    };
    RUMOneLogger.prototype.setEUPL = function () {
        if (!this.isCollected('EUPL')) {
            var eupl = 0;
            for (var _i = 0, _a = this.controls; _i < _a.length; _i++) {
                var control = _a[_i];
                if (!control.ignoreForEUPL &&
                    control.data &&
                    control.data.renderTime &&
                    eupl < control.data.renderTime) {
                    eupl = control.data.renderTime;
                }
            }
            this._rumoneData.EUPL = eupl;
            if (typeof this._EUPLComputedHandler === 'function') {
                this._EUPLComputedHandler(eupl);
            }
        }
    };
    RUMOneLogger.prototype.setBrowseInfo = function () {
        this._rumoneData.Browser = this._platformDetection.browserName + this._platformDetection.browserMajor;
        this._rumoneData.BrowserIsMobile = this._platformDetection.isMobile;
    };
    RUMOneLogger.prototype._collectMemoryData = function () {
        if (!this.isCollected('UsedJSHeapSize') &&
            typeof performance !== 'undefined' &&
            typeof performance.memory !== 'undefined') {
            this._rumoneData.UsedJSHeapSize = performance.memory.usedJSHeapSize;
            this._rumoneData.TotalJSHeapSize = performance.memory.totalJSHeapSize;
        }
    };
    RUMOneLogger.prototype._collectPageServerData = function () {
        this.addServerMetrics({
            cpuDuration: window['g_cpuDuration'],
            duration: window['g_duration'],
            iisLatency: window['g_iisLatency'],
            queryCount: window['g_queryCount'],
            queryDuration: window['g_queryDuration'],
            spPageContextDuration: window['g_pageContextDuration'],
            deferred_cpuDuration: window['g_deferred_cpuDuration'],
            deferred_duration: window['g_deferred_duration'],
            deferred_iisLatency: window['g_deferred_iisLatency'],
            deferred_queryCount: window['g_deferred_queryCount'],
            deferred_queryDuration: window['g_deferred_queryDuration']
        });
    };
    RUMOneLogger.prototype.setAPIDataToRUMOne = function () {
        var calls = 0;
        var durationSum = 0;
        var apisToReport = [];
        for (var index = 0; index < this.apis.length; index++) {
            var apiData = this.apis[index];
            if (apiData) {
                calls++;
                durationSum += apiData.duration;
                if (!apiData.origin) {
                    apiData.origin = new _uri_Uri__WEBPACK_IMPORTED_MODULE_9__["default"](apiData.url).getHost();
                }
                apiData.hostType =
                    new _uri_Uri__WEBPACK_IMPORTED_MODULE_9__["default"](window.location.href).getHost() === apiData.origin
                        ? APICallHostType.own
                        : APICallHostType.cors;
                var url = apiData.url, apiDataWithoutUrl = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(apiData, ["url"]); // get rid of EUII url before report
                apisToReport.push(apiDataWithoutUrl);
            }
        }
        this._rumoneData.APICallCount = calls;
        this._rumoneData.APICallDurationSum = durationSum;
        this._rumoneData.APICalls = JSON.stringify(apisToReport);
    };
    RUMOneLogger.prototype.setReferrer = function () {
        this._rumoneData.Referrer = this._processEUIIUrl(document.referrer); // EUII is prohibited to be sent via Aira
    };
    RUMOneLogger.prototype._setAppInfo = function () {
        if (!this._rumoneData.AppInfo) {
            var _spModuleLink = window['_spModuleLink'];
            if (_spModuleLink) {
                var buildNumber = _spModuleLink.buildNumber, manifestName = _spModuleLink.manifestName, scenarioName = _spModuleLink.scenarioName;
                var appInfo = JSON.stringify({
                    buildNumber: buildNumber,
                    manifestName: manifestName,
                    scenarioName: scenarioName
                });
                this._rumoneData.AppInfo = appInfo;
            }
        }
    };
    RUMOneLogger.prototype.getW3cTimingName = function (timingName) {
        if (timingName !== 'secureConnectionStart') {
            return 'W3c' + timingName.charAt(0).toUpperCase() + timingName.slice(1);
        }
        else {
            return 'W3cSecureConnectStart'; // to workaround a RUMOne schema issue W3cSecureConnectStart should be W3cSecureConnectionStart
        }
    };
    RUMOneLogger.prototype._writeBreakdown = function (breakdownData, breakdownToWrite, overwrite) {
        if (breakdownToWrite) {
            try {
                var breakdown = JSON.parse(breakdownToWrite);
                for (var key in breakdown) {
                    if (!breakdown.hasOwnProperty(key)) {
                        continue;
                    }
                    this._addBreakdown(breakdownData, key, breakdown[key], overwrite);
                }
            }
            catch (e) {
                // in case the euplBreakdown is invalid JSON
                this.logMessageInConsole('Failed to write EUPL breakdown data:' + e.toString());
            }
        }
    };
    RUMOneLogger.prototype._addBreakdown = function (breakdownData, name, value, overwrite) {
        if (name && !isNullOrUndefined(value)) {
            if (isNullOrUndefined(breakdownData[name]) || overwrite) {
                var data = this._isBreakdownValue(value) ? value.data : value;
                breakdownData[name] = data;
            }
            //  kusto job to parse EUPLBreakdown property bag is expensive and cause a lot kusto/MDM perf issues.
            //  to workaround it, we flatten EUPLBreakdown properties that are marked with needFlatten===true to send
            //  them to aria as individual columns. After this change, kusto query does not need to parse json any more.
            if (this._isBreakdownValue(value) && value.needFlatten && (!this.isCollected(name) || overwrite)) {
                this._logRUMOneData(name, value.data);
            }
        }
    };
    RUMOneLogger.prototype._readBreakdown = function (breakdownData, name) {
        return !!name ? breakdownData[name] : breakdownData;
    };
    RUMOneLogger.prototype._processEUIIUrl = function (url) {
        var telemetryUri = new _uri_SimpleUri__WEBPACK_IMPORTED_MODULE_10__["default"](url || '');
        return telemetryUri.authority + "/{ length: " + telemetryUri.path.length + ", segments: " + telemetryUri.segments.length + " }"; // EUII is prohibited to be sent via Aira
    };
    RUMOneLogger.prototype._processLastNetworkUrl = function (url) {
        var telemetryUri = new _uri_SimpleUri__WEBPACK_IMPORTED_MODULE_10__["default"](url || '');
        // lpcres requests don't contain any PII
        if (!_killswitch_Killswitch__WEBPACK_IMPORTED_MODULE_6__["Killswitch"].isActivated('1a4ef9da-fcc5-408b-8933-7b01b3abe79b', '1/21/2021') &&
            telemetryUri.authority.indexOf('lpcres') > 0) {
            return url;
        }
        var str = REQUEST_API_REGEX.exec(url);
        var path = '';
        if (str && str.length > 0) {
            path = "" + str[0];
        }
        return "" + telemetryUri.authority + path;
    };
    RUMOneLogger.rumOneLogger = undefined;
    RUMOneLogger.Loggers = {};
    RUMOneLogger._markers = {};
    return RUMOneLogger;
}());
/* harmony default export */ __webpack_exports__["default"] = (RUMOneLogger);
function getProperty(timing, propertyName) {
    return propertyName in timing ? { propertyName: Math.round(timing[propertyName]) } : {};
}

//# sourceMappingURL=RUMOneLogger.js.map

/***/ }),

/***/ "UaHH":
/*!************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/utilities-disposables@1.0.0/node_modules/@ms/utilities-disposables/lib/Disposable.js ***!
  \************************************************************************************************************************************************/
/*! exports provided: isDisposable, hook */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDisposable", function() { return isDisposable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hook", function() { return hook; });
var DisposalChain = /** @class */ (function () {
    function DisposalChain(owner) {
        this._callbacks = [];
        this._owner = owner;
    }
    DisposalChain.prototype.addCallback = function (callback) {
        this._callbacks.push(callback);
    };
    DisposalChain.prototype.dispose = function () {
        // Handle dispose callbacks is the reverse order from when they were attached.
        var callback;
        while ((callback = this._callbacks.pop())) {
            callback.call(this._owner);
        }
    };
    return DisposalChain;
}());
/**
 * Determines whether not an object requires is disposable.
 *
 * @export
 * @template T
 * @param {(T | IDisposable)} object
 * @returns {object is IDisposable}
 */
function isDisposable(object) {
    return typeof object.dispose === 'function';
}
function hook(instance, onDispose) {
    var disposable = instance;
    var dispose = disposable.dispose;
    var disposalChain = (typeof dispose === 'function' && dispose.disposalChain) || createDisposalChain(disposable);
    disposalChain.addCallback(onDispose);
    return disposable;
}
function createDisposalChain(disposable) {
    var disposalChain = new DisposalChain(disposable);
    var dispose = disposable.dispose;
    var disposeHook = (function () {
        disposalChain.dispose();
        if (dispose) {
            // Restore the old dispose method and clean up modifications.
            disposable.dispose = dispose;
            disposable.dispose();
        }
    });
    disposable.dispose = disposeHook;
    disposeHook.disposalChain = disposalChain;
    return disposalChain;
}
//# sourceMappingURL=Disposable.js.map

/***/ }),

/***/ "V87q":
/*!*****************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-utilities@29.7.9_5d977624104b06c7bcaa2de974ff51f1/node_modules/@ms/odsp-utilities/lib/aria/AriaLoggerCore.js ***!
  \*****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _logging_EventBase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../logging/EventBase */ "WquY");
/* harmony import */ var _logging_Manager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../logging/Manager */ "QuA1");
/* harmony import */ var _logging_events_Beacon_event__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../logging/events/Beacon.event */ "689m");
/* harmony import */ var _logging_ErrorHelper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../logging/ErrorHelper */ "lmjA");
/* harmony import */ var _browser_PlatformDetection__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../browser/PlatformDetection */ "dv0D");
/* harmony import */ var _logging_DataCompletenessInfo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../logging/DataCompletenessInfo */ "pUoS");
/* harmony import */ var _uri_SimpleUri__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../uri/SimpleUri */ "mbD+");
/* harmony import */ var _ms_telemetry_addon_aria_lib_AriaTelemetryHandler__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ms/telemetry-addon-aria/lib/AriaTelemetryHandler */ "yBP4");
/* harmony import */ var _ms_telemetry_addon_aria_lib_decorators_withPrivacyClassification__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ms/telemetry-addon-aria/lib/decorators/withPrivacyClassification */ "6Tvd");
/* harmony import */ var _async_Promise__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../async/Promise */ "7Ihg");
// OneDrive:IgnoreCodeCoverage











var ARIA_QOS_NAME = 'AriaBeacon';
var ariaTelemetryHandler;
var config = {
    logStartEvents: false,
    Init: init,
    updateContext: updateContext,
    isInitialized: isInitialized
};
/* harmony default export */ __webpack_exports__["default"] = (config);
var CoreAriaTelemetryHandler = Object(_ms_telemetry_addon_aria_lib_decorators_withPrivacyClassification__WEBPACK_IMPORTED_MODULE_9__["withPrivacyClassification"])("requiredService" /* requiredService */)(_ms_telemetry_addon_aria_lib_AriaTelemetryHandler__WEBPACK_IMPORTED_MODULE_8__["AriaTelemetryHandler"]);
function isInitialized(aria) {
    return !!ariaTelemetryHandler;
}
function init(tenantToken, context, aria, dependencies) {
    if (dependencies === void 0) { dependencies = {}; }
    try {
        config.logStartEvents = true;
        var loggerContext = createLoggerContext(context, dependencies.platformDetection);
        var completenessUri_1 = new _uri_SimpleUri__WEBPACK_IMPORTED_MODULE_7__["SimpleUri"](context.completenessCallbackEndpoint);
        var completenessContext_1 = {
            telemetryTenantToken: tenantToken,
            appVersion: context.version,
            environment: context.environment,
            workload: context.workload,
            farmLabel: context.farmLabel,
            farmName: context.farmName,
            callbackEndpoint: completenessUri_1
        };
        ariaTelemetryHandler = new CoreAriaTelemetryHandler({
            ariaLoader: function () { return _async_Promise__WEBPACK_IMPORTED_MODULE_10__["default"].resolve(aria); },
            context: loggerContext,
            tenantToken: tenantToken,
            disableCookies: context.disableCookies,
            ariaLogConfiguration: {
                collectorUrl: context.collectorUrl
            },
            logStartEvents: config.logStartEvents,
            ariaQos: {
                isQosEvent: function (event) {
                    return (_logging_events_Beacon_event__WEBPACK_IMPORTED_MODULE_3__["Beacon"].isTypeOf(event) &&
                        !!event.data &&
                        event.data.name === ARIA_QOS_NAME);
                },
                reportQos: function (params) {
                    var isSuccess = params.result, statusCode = params.statusCode, events = params.events;
                    new _logging_events_Beacon_event__WEBPACK_IMPORTED_MODULE_3__["Beacon"]({
                        name: ARIA_QOS_NAME,
                        retryCount: 0,
                        totalRetries: 0,
                        eventCount: events ? events.length : 0
                    }).end({
                        success: isSuccess === 0,
                        status: statusCode + ''
                    });
                    if (true) {
                        // Display errors if the aria logger is failing to log
                        if (isSuccess !== 0) {
                            _logging_ErrorHelper__WEBPACK_IMPORTED_MODULE_4__["default"].log(new Error("Aria logger failed with status code " + statusCode));
                        }
                    }
                    // If completeness Url is provided, send event to completeness endpoint
                    if (completenessUri_1.authority !== '') {
                        new _logging_DataCompletenessInfo__WEBPACK_IMPORTED_MODULE_6__["DataCompletenessInfo"](completenessContext_1, isSuccess, statusCode, new Date().getTime(), events).send();
                    }
                }
            }
        });
        var logHandlerRemover_1 = ariaTelemetryHandler.attach(_logging_Manager__WEBPACK_IMPORTED_MODULE_2__["Manager"]);
        return function () {
            logHandlerRemover_1();
            ariaTelemetryHandler = undefined;
        };
    }
    catch (e) {
        if (e instanceof aria.Exception) {
            e = new Error("Aria error: " + e.toString());
        }
        _logging_ErrorHelper__WEBPACK_IMPORTED_MODULE_4__["default"].log(e);
        ariaTelemetryHandler = undefined;
        return function () {
            /* no-op */
        };
    }
}
function updateContext(context, dependencies) {
    if (dependencies === void 0) { dependencies = {}; }
    if (ariaTelemetryHandler) {
        var loggerContext = createLoggerContext(context, dependencies.platformDetection);
        ariaTelemetryHandler.updateContext(loggerContext);
    }
}
function createLoggerContext(context, platformDetection) {
    if (platformDetection === void 0) { platformDetection = new _browser_PlatformDetection__WEBPACK_IMPORTED_MODULE_5__["default"](); }
    var loggerContext = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ AccountType: _logging_EventBase__WEBPACK_IMPORTED_MODULE_1__["AccountType"][context.accountType], BrowserIsMobile: platformDetection.isMobile, BrowserIsPWA: platformDetection.isPWA, BrowserMajVer: platformDetection.browserMajor, BrowserMinVer: platformDetection.browserMinor, BrowserName: platformDetection.browserName, BrowserUserAgent: platformDetection.userAgent, Environment: context.environment, FarmLabel: context.farmLabel, FarmName: context.farmName, IsAuthenticated: context.isAuthenticated ? 1 : 0, Market: context.market, Manifest: context.manifest, OSName: platformDetection.osName, OSVersion: platformDetection.osVersion, Session: context.session, SiteSubscriptionId: context.siteSubscriptionId || '', UserId: context.userId, Version: context.version, Workload: context.workload, SiteId: context.siteId, WebId: context.webId, WebTemplateId: context.webTemplateId }, (context.context || {}));
    return loggerContext;
}
//# sourceMappingURL=AriaLoggerCore.js.map

/***/ }),

/***/ "VW2E":
/*!*******************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/utilities-disposables@1.0.0/node_modules/@ms/utilities-disposables/lib/Scope.js ***!
  \*******************************************************************************************************************************************/
/*! exports provided: Scope */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Scope", function() { return Scope; });
/* harmony import */ var _Disposable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Disposable */ "UaHH");

/**
 * Lifetime manager for scoping components.
 *
 * @export
 * @class Scope
 * @implements {IDisposable}
 *
 * @example
 *  const scope = new Scope();
 *
 *  let instance = new (scope.attached(MyComponent))();
 *
 *  scope.dispose();
 */
var Scope = /** @class */ (function () {
    /**
     * Creates an instance of Scope.
     */
    function Scope() {
        this._disposables = {};
        this._lastDisposableId = 0;
        this.isDisposed = false;
    }
    Scope.prototype.attach = function (instance) {
        var _this = this;
        var id = "" + ++this._lastDisposableId;
        var disposable = Object(_Disposable__WEBPACK_IMPORTED_MODULE_0__["hook"])(instance, function () {
            delete _this._disposables[id];
        });
        this._disposables[id] = disposable;
        return disposable;
    };
    /**
     * Disposes this scope and any attached objects.
     */
    Scope.prototype.dispose = function () {
        if (!this.isDisposed) {
            this.isDisposed = true;
        }
        var disposables = this._disposables;
        for (var _i = 0, _a = Object.keys(disposables); _i < _a.length; _i++) {
            var id = _a[_i];
            var disposable = disposables[id];
            if (disposable && Object(_Disposable__WEBPACK_IMPORTED_MODULE_0__["isDisposable"])(disposable)) {
                disposable.dispose();
            }
            delete disposables[id];
        }
    };
    return Scope;
}());

//# sourceMappingURL=Scope.js.map

/***/ }),

/***/ "WOFc":
/*!***************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/telemetry-manager@1.1.3/node_modules/@ms/telemetry-manager/lib/events/QosError.event.js ***!
  \***************************************************************************************************************************************************/
/*! exports provided: ResultTypeEnum, QosError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QosError", function() { return QosError; });
/* harmony import */ var _SingleEventBase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../SingleEventBase */ "yb4E");
/* harmony import */ var _CaughtError_event__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CaughtError.event */ "4nNU");
/* harmony import */ var _ResultTypeEnum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ResultTypeEnum */ "Z+U/");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ResultTypeEnum", function() { return _ResultTypeEnum__WEBPACK_IMPORTED_MODULE_2__["ResultTypeEnum"]; });

// OneDrive:IgnoreCodeCoverage




var QosError = Object(_SingleEventBase__WEBPACK_IMPORTED_MODULE_0__["createSingleEvent"])({
    eventName: 'QosError,CaughtError,Trace,',
    shortEventName: 'QosError',
    critical: true
}, {
    name: {
        isKey: true,
        type: 1 /* String */
    },
    resultCode: 1 /* String */,
    resultType: {
        typeRef: _ResultTypeEnum__WEBPACK_IMPORTED_MODULE_2__["ResultTypeEnum"],
        type: 6 /* Enum */
    }
}, _CaughtError_event__WEBPACK_IMPORTED_MODULE_1__["CaughtError"]).withData({ privacyClassification: "requiredDiagnostic" /* requiredDiagnostic */ });
//# sourceMappingURL=QosError.event.js.map

/***/ }),

/***/ "WgxZ":
/*!*********************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/sp-resource-path@1.0.0/node_modules/@ms/sp-resource-path/lib/index.js ***!
  \*********************************************************************************************************************************/
/*! exports provided: SPResourcePath, SPResourcePathFormat */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SPResourcePath__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SPResourcePath */ "nF3k");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SPResourcePath", function() { return _SPResourcePath__WEBPACK_IMPORTED_MODULE_0__["SPResourcePath"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SPResourcePathFormat", function() { return _SPResourcePath__WEBPACK_IMPORTED_MODULE_0__["SPResourcePathFormat"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "WquY":
/*!***************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-utilities@29.7.9_5d977624104b06c7bcaa2de974ff51f1/node_modules/@ms/odsp-utilities/lib/logging/EventBase.js ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: ClonedEventType, ValidationErrorType, AccountType, addEventProps, EventBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ms_telemetry_manager_lib_EventBase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ms/telemetry-manager/lib/EventBase */ "HMXl");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ClonedEventType", function() { return _ms_telemetry_manager_lib_EventBase__WEBPACK_IMPORTED_MODULE_0__["ClonedEventType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ValidationErrorType", function() { return _ms_telemetry_manager_lib_EventBase__WEBPACK_IMPORTED_MODULE_0__["ValidationErrorType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AccountType", function() { return _ms_telemetry_manager_lib_EventBase__WEBPACK_IMPORTED_MODULE_0__["AccountType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addEventProps", function() { return _ms_telemetry_manager_lib_EventBase__WEBPACK_IMPORTED_MODULE_0__["addEventProps"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EventBase", function() { return _ms_telemetry_manager_lib_EventBase__WEBPACK_IMPORTED_MODULE_0__["EventBase"]; });

// OneDrive:CoverageThreshold(92)

//# sourceMappingURL=EventBase.js.map

/***/ }),

/***/ "Xdo2":
/*!************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/utilities-objects@1.0.0/node_modules/@ms/utilities-objects/lib/assign.js ***!
  \************************************************************************************************************************************/
/*! exports provided: assign */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assign", function() { return assign; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);

/**
 * @public
 */
function assign(base, extension) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(base, extension);
}
//# sourceMappingURL=assign.js.map

/***/ }),

/***/ "XnbY":
/*!***************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/utilities-async@1.1.1/node_modules/@ms/utilities-async/lib/promise/CancelablePromise.js ***!
  \***************************************************************************************************************************************************/
/*! exports provided: SignalPromise, CancelablePromise, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignalPromise", function() { return SignalPromise; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CancelablePromise", function() { return CancelablePromise; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _events_Events__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../events/Events */ "fDs1");
// This file was originally ported from WinJS.


// tslint:disable-next-line: no-any
function doneHandler(value) {
    /* tslint:disable-next-line:ban-native-functions */
    window.setTimeout(function () {
        _events_Events__WEBPACK_IMPORTED_MODULE_1__["raise"](CancelablePromiseImplementation, errorET, { error: value });
    }, 0);
}
var errorET = 'error';
var canceledName = 'Canceled';
//
// Global error counter, for each error which enters the system we increment this once and then
// the error number travels with the error as it traverses the tree of potential handlers.
//
// When someone has registered to be told about error [using EventGroup.on(Promise, 'error')] promises
// which are in error will get tagged with a ._errorId field. This tagged field is the
// contract by which nested promises with errors will be identified as chaining for the
// purposes of the callonerror semantics. If a nested promise in error is encountered without
// a ._errorId it will be assumed to be foreign and treated as an interop boundary and
// a new error id will be minted.
//
// tslint:disable-next-line: variable-name
var error_number = 1;
// tslint:disable-next-line: variable-name
var state_created; // -> working
// tslint:disable-next-line: variable-name
var state_working; // -> error | error_notify | success | success_notify | canceled | waiting
// tslint:disable-next-line: variable-name
var state_waiting; // -> error | error_notify | success | success_notify | waiting_canceled
// tslint:disable-next-line: variable-name
var state_waiting_canceled; // -> error | error_notify | success | success_notify | canceling
// tslint:disable-next-line: variable-name
var state_canceled; // -> error | error_notify | success | success_notify | canceling
// tslint:disable-next-line: variable-name
var state_canceling; // -> error_notify
// tslint:disable-next-line: variable-name
var state_success_notify; // -> success
// tslint:disable-next-line: variable-name
var state_success; // -> .
// tslint:disable-next-line: variable-name
var state_error_notify; // -> error
// tslint:disable-next-line: variable-name
var state_error; // -> .
// Noop function, used in the various states to indicate that they don't support a given
// message. Named with the somewhat cute name '_' because it reads really well in the states.
// tslint:disable-next-line: no-any
function noop() {
    /* No-op */
}
// Initial state
//
state_created = {
    name: 'created',
    enter: function (promise) {
        promise._setState(state_working);
    },
    cancel: noop,
    done: noop,
    then: noop,
    _completed: noop,
    _error: noop,
    _notify: noop,
    _setCompleteValue: noop,
    _setErrorValue: noop
};
// Ready state, waiting for a message (completed/error), able to be canceled
//
state_working = {
    name: 'working',
    enter: noop,
    cancel: function (promise) {
        promise._setState(state_canceled);
    },
    done: done,
    then: then,
    _completed: completed,
    _error: error,
    _notify: noop,
    _setCompleteValue: setCompleteValue,
    _setErrorValue: setErrorValue
};
// Waiting state, if a promise is completed with a value which is itself a promise
// (has a then() method) it signs up to be informed when that child promise is
// fulfilled at which point it will be fulfilled with that value.
//
state_waiting = {
    name: 'waiting',
    enter: function (promise) {
        var waitedUpon = promise._value;
        // We can special case our own intermediate promises which are not in a
        //  terminal state by just pushing this promise as a listener without
        //  having to create new indirection functions
        if (waitedUpon instanceof ThenPromise &&
            waitedUpon._state !== state_error &&
            waitedUpon._state !== state_success) {
            pushListener(waitedUpon, { promise: promise });
        }
        else {
            // tslint:disable-next-line: no-shadowed-variable
            var error_1 = function (value) {
                if (waitedUpon._errorId) {
                    promise._chainedError(value, waitedUpon);
                }
                else {
                    // Because this is an interop boundary we want to indicate that this
                    //  error has been handled by the promise infrastructure before we
                    //  begin a new handling chain.
                    //
                    callonerror(promise, value, detailsForHandledError, waitedUpon, error_1);
                    promise._error(value);
                }
            };
            error_1.handlesOnError = true;
            waitedUpon.then(promise._completed.bind(promise), error_1);
        }
    },
    cancel: function (promise) {
        promise._setState(state_waiting_canceled);
    },
    done: done,
    then: then,
    _completed: completed,
    _error: error,
    _notify: noop,
    _setCompleteValue: setCompleteValue,
    _setErrorValue: setErrorValue
};
// Waiting canceled state, when a promise has been in a waiting state and receives a
// request to cancel its pending work it will forward that request to the child promise
// and then waits to be informed of the result. This promise moves itself into the
// canceling state but understands that the child promise may instead push it to a
// different state.
//
state_waiting_canceled = {
    name: 'waiting_canceled',
    enter: function (promise) {
        // Initiate a transition to canceling. Triggering a cancel on the promise
        // that we are waiting upon may result in a different state transition
        // before the state machine pump runs again.
        promise._setState(state_canceling);
        var waitedUpon = promise._value;
        if (CancelablePromiseImplementation.is(waitedUpon)) {
            waitedUpon.cancel();
        }
    },
    cancel: noop,
    done: done,
    then: then,
    _completed: completed,
    _error: error,
    _notify: noop,
    _setCompleteValue: setCompleteValue,
    _setErrorValue: setErrorValue
};
// Canceled state, moves to the canceling state and then tells the promise to do
// whatever it might need to do on cancelation.
//
state_canceled = {
    name: 'canceled',
    enter: function (promise) {
        // Initiate a transition to canceling. The _cancelAction may change the state
        // before the state machine pump runs again.
        promise._setState(state_canceling);
        promise._cancelAction();
    },
    cancel: noop,
    done: done,
    then: then,
    _completed: completed,
    _error: error,
    _notify: noop,
    _setCompleteValue: setCompleteValue,
    _setErrorValue: setErrorValue
};
// Canceling state, commits to the promise moving to an error state with an error
// object whose 'name' and 'message' properties contain the string "Canceled"
//
state_canceling = {
    name: 'canceling',
    // tslint:disable-next-line: no-any
    enter: function (promise) {
        // tslint:disable-next-line: no-shadowed-variable
        var error = new Error(canceledName);
        error.name = error.message;
        error._handled = true;
        promise._value = error;
        promise._setState(state_error_notify);
    },
    cancel: noop,
    done: noop,
    then: noop,
    _completed: noop,
    _error: noop,
    _notify: noop,
    _setCompleteValue: noop,
    _setErrorValue: noop
};
// Success notify state, moves a promise to the success state and notifies all children
//
state_success_notify = {
    name: 'complete_notify',
    enter: function (promise) {
        if (promise._listeners) {
            var queue = [promise];
            var p = void 0;
            while (queue.length) {
                p = queue.shift();
                if (p) {
                    p._state._notify(p, queue);
                }
            }
        }
        promise._setState(state_success);
    },
    cancel: noop,
    done: function (promise, onComplete, onError) { return CompletePromise.prototype.done.call(promise, onComplete); },
    then: function (promise, onComplete, onError) {
        return CompletePromise.prototype.then.call(promise, onComplete, onError);
    },
    _completed: noop,
    _error: noop,
    _notify: notifySuccess,
    _setCompleteValue: noop,
    _setErrorValue: noop
};
// Success state, moves a promise to the success state and does NOT notify any children.
// Some upstream promise is owning the notification pass.
//
state_success = {
    name: 'success',
    enter: function (promise) {
        promise._cleanupAction();
    },
    cancel: noop,
    done: function (promise, onComplete, onError) { return CompletePromise.prototype.done.call(promise, onComplete); },
    then: function (promise, onComplete, onError) {
        return CompletePromise.prototype.then.call(promise, onComplete);
    },
    _completed: noop,
    _error: noop,
    _notify: notifySuccess,
    _setCompleteValue: noop,
    _setErrorValue: noop
};
// Error notify state, moves a promise to the error state and notifies all children
//
state_error_notify = {
    name: 'error_notify',
    enter: function (promise) {
        if (promise._listeners) {
            var queue = [promise];
            var p = void 0;
            while (queue.length) {
                p = queue.shift();
                if (p) {
                    p._state._notify(p, queue);
                }
            }
        }
        promise._setState(state_error);
    },
    cancel: noop,
    done: function (promise, onComplete, onError) { return ErrorPromise.prototype.done.call(promise, onComplete, onError); },
    then: function (promise, onComplete, onError) {
        return ErrorPromise.prototype.then.call(promise, onComplete, onError);
    },
    _completed: noop,
    _error: noop,
    _notify: notifyError,
    _setCompleteValue: noop,
    _setErrorValue: noop
};
// Error state, moves a promise to the error state and does NOT notify any children.
// Some upstream promise is owning the notification pass.
//
state_error = {
    name: 'error',
    enter: function (promise) {
        promise._cleanupAction();
    },
    cancel: noop,
    done: function (promise, onComplete, onError) { return ErrorPromise.prototype.done.call(promise, onComplete, onError); },
    then: function (promise, onComplete, onError) {
        return ErrorPromise.prototype.then.call(promise, onComplete, onError);
    },
    _completed: noop,
    _error: noop,
    _notify: notifyError,
    _setCompleteValue: noop,
    _setErrorValue: noop
};
//
// The statemachine implementation follows a very particular pattern, the states are specified
// as static stateless bags of functions which are then indirected through the state machine
// instance (a Promise). As such all of the functions on each state have the promise instance
// passed to them explicitly as a parameter and the Promise instance members do a little
// dance where they indirect through the state and insert themselves in the argument list.
//
// We could instead call directly through the promise states however then every caller
// would have to remember to do things like pumping the state machine to catch state transitions.
//
//
// Implementations of shared state machine code.
//
function completed(promise, value) {
    promise._value = value;
    promise._setState(CancelablePromiseImplementation.isPromise(value) ? state_waiting : state_success_notify);
}
function createErrorDetails(
// tslint:disable-next-line: no-any
exception, 
// tslint:disable-next-line: no-shadowed-variable no-any
error, 
// tslint:disable-next-line: no-any
promise, id, parent, 
// tslint:disable-next-line: no-any
handler) {
    return {
        exception: exception,
        error: error,
        promise: promise,
        handler: handler,
        id: id,
        parent: parent
    };
}
function detailsForHandledError(
// tslint:disable-next-line: no-any
promise, 
// tslint:disable-next-line: no-any
errorValue, context, 
// tslint:disable-next-line: no-any
handler) {
    var _a, _b;
    var exception = (_a = context) === null || _a === void 0 ? void 0 : _a._isException;
    var errorId = (_b = context) === null || _b === void 0 ? void 0 : _b._errorId;
    return createErrorDetails(exception ? errorValue : null, exception ? null : errorValue, promise, errorId, context, handler);
}
function detailsForChainedError(
// tslint:disable-next-line: no-any
promise, 
// tslint:disable-next-line: no-any
errorValue, context) {
    var _a, _b;
    var exception = (_a = context) === null || _a === void 0 ? void 0 : _a._isException;
    var errorId = (_b = context) === null || _b === void 0 ? void 0 : _b._errorId;
    if (promise instanceof CancelablePromiseImplementation) {
        setErrorInfo(promise, errorId, exception);
    }
    return createErrorDetails(exception ? errorValue : null, exception ? null : errorValue, promise, errorId, context);
}
// tslint:disable-next-line: no-any
function detailsForError(promise, errorValue) {
    var errorId = ++error_number;
    if (promise instanceof CancelablePromiseImplementation) {
        setErrorInfo(promise, errorId);
    }
    return createErrorDetails(null, errorValue, promise, errorId);
}
function detailsForException(
// tslint:disable-next-line: no-any
promise, 
// tslint:disable-next-line: no-any
exceptionValue) {
    var errorId = ++error_number;
    if (promise instanceof CancelablePromiseImplementation) {
        setErrorInfo(promise, errorId, true);
    }
    return createErrorDetails(exceptionValue, null, promise, errorId);
}
function done(promise, onComplete, onError) {
    pushListener(promise, { c: onComplete, e: onError });
}
function error(
// tslint:disable-next-line: no-any
promise, value, onerrorDetails, context) {
    promise._value = value;
    callonerror(promise, value, onerrorDetails, context);
    promise._setState(state_error_notify);
}
function notifySuccess(promise, queue) {
    var value = promise._value;
    var listeners = promise._listeners;
    if (!listeners) {
        return;
    }
    promise._listeners = null;
    var i;
    var len;
    for (i = 0, len = listeners.length; i < len; i++) {
        var listener = listeners[i];
        var onComplete = listener.c;
        var target = listener.promise;
        if (target) {
            try {
                target._setCompleteValue(onComplete ? onComplete(value) : value);
            }
            catch (ex) {
                target._setExceptionValue(ex);
            }
            if (target._state !== state_waiting && target._listeners) {
                queue.push(target);
            }
        }
        else {
            CompletePromise.prototype.done.call(promise, onComplete);
        }
    }
}
function notifyError(promise, 
// tslint:disable-next-line: no-any
queue) {
    var value = promise._value;
    var listeners = promise._listeners;
    if (!listeners) {
        return;
    }
    promise._listeners = null;
    var i;
    var len;
    for (i = 0, len = listeners.length; i < len; i++) {
        var listener = listeners[i];
        var onError = listener.e;
        var target = listener.promise;
        if (target) {
            try {
                if (onError) {
                    if (!onError.handlesOnError) {
                        callonerror(target, value, detailsForHandledError, promise, onError);
                    }
                    target._setCompleteValue(onError(value));
                }
                else {
                    target._setChainedErrorValue(value, promise);
                }
            }
            catch (ex) {
                target._setExceptionValue(ex);
            }
            if (target._state !== state_waiting && target._listeners) {
                queue.push(target);
            }
        }
        else {
            ErrorPromise.prototype.done.call(promise, undefined, onError);
        }
    }
}
function callonerror(promise, value, onerrorDetailsGenerator, context, 
// tslint:disable-next-line: no-any
handler) {
    if (value instanceof Error && value.message === canceledName) {
        return;
    }
    _events_Events__WEBPACK_IMPORTED_MODULE_1__["raise"](CancelablePromiseImplementation, errorET, onerrorDetailsGenerator(promise, value, context, handler));
}
function pushListener(promise, listener) {
    var listeners = promise._listeners;
    if (listeners) {
        listeners.push(listener);
    }
    else {
        listeners = [listener];
    }
    promise._listeners = listeners;
}
// The difference beween setCompleteValue()/setErrorValue() and complete()/error() is that setXXXValue() moves
// a promise directly to the success/error state without starting another notification pass (because one
// is already ongoing).
function setErrorInfo(promise, errorId, isException) {
    promise._isException = isException || false;
    promise._errorId = errorId;
}
function setErrorValue(promise, 
// tslint:disable-next-line: no-any
value, onerrorDetails, context) {
    promise._value = value;
    callonerror(promise, value, onerrorDetails, context);
    promise._setState(state_error);
}
function setCompleteValue(promise, value) {
    var targetState;
    if (CancelablePromiseImplementation.isPromise(value)) {
        targetState = state_waiting;
    }
    else {
        targetState = state_success;
    }
    promise._value = value;
    promise._setState(targetState);
}
function then(promise, onComplete, onError) {
    var result = new ThenPromise(promise);
    pushListener(promise, { promise: result, c: onComplete, e: onError });
    return result;
}
//
// Slim promise implementations for already completed promises, these are created
// under the hood on synchronous completion paths as well as by Promise.wrap
// and Promise.wrapError.
//
var ErrorPromise = /** @class */ (function () {
    function ErrorPromise(value, errorFunc) {
        if (errorFunc === void 0) { errorFunc = detailsForError; }
        this._value = value;
        callonerror(this, value, errorFunc);
    }
    ErrorPromise.prototype.cancel = function () {
        /* No-op */
    };
    // tslint:disable-next-line: no-any
    ErrorPromise.prototype.done = function (onComplete, onError) {
        var value = this._value;
        if (onError) {
            try {
                if (!onError.handlesOnError) {
                    callonerror(this, value, detailsForHandledError, this, onError);
                }
                var result = onError(value);
                if (CancelablePromiseImplementation.is(result)) {
                    // If a promise is returned we need to wait on it.
                    result.done();
                }
                return;
            }
            catch (ex) {
                value = ex;
            }
        }
        if (value instanceof Error && value.message === canceledName) {
            // suppress cancel
            return;
        }
        // force the exception to be thrown asyncronously to avoid any try/catch blocks
        //
        doneHandler(value);
    };
    ErrorPromise.prototype.then = function (onComplete, onError) {
        // If the promise is already in a error state and no error handler is provided
        // we optimize by simply returning the promise instead of creating a new one.
        //
        if (!onError) {
            return this;
        }
        var result;
        var value = this._value;
        try {
            if (!onError.handlesOnError) {
                callonerror(this, value, detailsForHandledError, this, onError);
            }
            result = new CompletePromise(onError(value));
        }
        catch (ex) {
            // If the value throw from the error handler is the same as the value
            // provided to the error handler then there is no need for a new promise.
            //
            if (ex === value) {
                result = this;
            }
            else {
                result = new ExceptionPromise(ex);
            }
        }
        return result;
    };
    ErrorPromise.prototype.catch = function (onError) {
        return this.then(undefined, onError);
    };
    return ErrorPromise;
}());
var ExceptionPromise = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ExceptionPromise, _super);
    // tslint:disable-next-line: no-any
    function ExceptionPromise(value) {
        return _super.call(this, value, detailsForException) || this;
    }
    return ExceptionPromise;
}(ErrorPromise));
var CompletePromise = /** @class */ (function () {
    function CompletePromise(value) {
        if (CancelablePromiseImplementation.isPromise(value)) {
            var result = new ThenPromise(null);
            result._setCompleteValue(value);
            return result;
        }
        this._value = value;
    }
    CompletePromise.prototype.cancel = function () {
        /* No-op */
    };
    // tslint:disable-next-line: no-any
    CompletePromise.prototype.done = function (onComplete, onError) {
        if (!onComplete) {
            return;
        }
        try {
            var result = onComplete(this._value);
            if (CancelablePromiseImplementation.is(result)) {
                result.done();
            }
        }
        catch (ex) {
            // force the exception to be thrown asynchronously to avoid any try/catch blocks
            doneHandler(ex);
        }
    };
    CompletePromise.prototype.then = function (onComplete, onError) {
        var resultPromise;
        try {
            // If the value returned from the completion handler is the same as the value
            // provided to the completion handler then there is no need for a new promise.
            //
            var newValue = onComplete ? onComplete(this._value) : this._value;
            var promise = this;
            resultPromise = this._isSameValue(newValue, promise) ? promise : new CompletePromise(newValue);
        }
        catch (ex) {
            resultPromise = new ExceptionPromise(ex);
        }
        return resultPromise;
    };
    CompletePromise.prototype.catch = function (onError) {
        return this.then(undefined);
    };
    // tslint:disable-next-line:function-name
    CompletePromise.prototype._isSameValue = function (value, promise) {
        return value === this._value;
    };
    return CompletePromise;
}());
function timeout(timeoutMS) {
    var id;
    return new CancelablePromiseImplementation(function (c) {
        /* tslint:disable-next-line:ban-native-functions */
        id = window.setTimeout(c, timeoutMS);
    }, function () {
        if (id) {
            /* tslint:disable-next-line:ban-native-functions */
            window.clearTimeout(id);
        }
    });
}
// tslint:disable-next-line: no-shadowed-variable
function timeoutWithPromise(
// tslint:disable-next-line: no-shadowed-variable
timeout, promise) {
    var cancelPromise = function () {
        promise.cancel();
    };
    var cancelTimeout = function () {
        timeout.cancel();
    };
    timeout.then(cancelPromise);
    promise.then(cancelTimeout, cancelTimeout);
    return promise;
}
function getCancelAll(values) {
    var valuesIndexable = values;
    return function () {
        for (var _i = 0, _a = Object.keys(valuesIndexable); _i < _a.length; _i++) {
            var key = _a[_i];
            var promise = CancelablePromiseImplementation.as(valuesIndexable[key]);
            promise.cancel();
        }
    };
}
// tslint:disable-next-line: no-any
var staticCanceledPromise;
var CancelablePromiseImplementation = /** @class */ (function () {
    // tslint:disable-next-line: no-any
    function CancelablePromiseImplementation(init, oncancel) {
        this._init(init, oncancel);
    }
    Object.defineProperty(CancelablePromiseImplementation, "cancel", {
        // tslint:disable-next-line: no-any
        get: function () {
            return staticCanceledPromise || (staticCanceledPromise = new ErrorPromise(new Error(canceledName)));
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Returns a promise that is fulfilled when one of the input promises
     * has been fulfilled.
     */
    CancelablePromiseImplementation.any = function (values) {
        return new CancelablePromiseImplementation(function (complete, 
        // tslint:disable-next-line: no-shadowed-variable no-any
        error) {
            var keys = Object.keys(values);
            var pending = keys.length;
            if (pending === 0) {
                complete();
            }
            var valuesIndexable = values;
            var _loop_1 = function (key) {
                var valueAsCancelable = CancelablePromiseImplementation.as(valuesIndexable[key]);
                valueAsCancelable.then(function () {
                    complete({ key: key, value: valueAsCancelable });
                }, 
                // tslint:disable-next-line: no-any
                function (e) {
                    if (e instanceof Error && e.name === canceledName) {
                        if (--pending === 0) {
                            complete(CancelablePromiseImplementation.cancel);
                        }
                        return;
                    }
                    error({ key: key, value: valueAsCancelable });
                });
            };
            for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
                var key = keys_1[_i];
                _loop_1(key);
            }
        }, getCancelAll(values));
    };
    CancelablePromiseImplementation.race = function (values) {
        // tslint:disable-next-line: no-shadowed-variable no-any
        return new CancelablePromiseImplementation(function (complete, error) {
            var keys = Object.keys(values);
            var pending = keys.length;
            if (pending === 0) {
                complete();
            }
            var valuesIndexable = values;
            for (var _i = 0, keys_2 = keys; _i < keys_2.length; _i++) {
                var key = keys_2[_i];
                // tslint:disable-next-line: no-any
                CancelablePromiseImplementation.as(valuesIndexable[key]).then(complete, function (e) {
                    if (e instanceof Error && e.name === canceledName) {
                        if (--pending === 0) {
                            complete(CancelablePromiseImplementation.cancel);
                        }
                        return;
                    }
                    error(e);
                });
            }
        }, getCancelAll(values));
    };
    CancelablePromiseImplementation.as = function (value) {
        return CancelablePromiseImplementation.is(value) ? value : new CompletePromise(value);
    };
    /**
     * Determines whether a value fulfills the promise contract.
     */
    CancelablePromiseImplementation.is = function (value) {
        return (CancelablePromiseImplementation.isPromise(value) &&
            typeof value.cancel === 'function');
    };
    CancelablePromiseImplementation.isPromise = function (value) {
        return !!value && typeof value === 'object' && typeof value.then === 'function';
    };
    /**
     * Determines whether an error value represents a promise cancellation.
     */
    CancelablePromiseImplementation.isCanceled = function (e) {
        return e instanceof Error && e.name === canceledName;
    };
    // tslint:disable-next-line: no-any
    CancelablePromiseImplementation.all = function (values) {
        // tslint:disable-next-line: no-any no-shadowed-variable
        return new CancelablePromiseImplementation(function (complete, error) {
            var keys = Object.keys(values);
            // tslint:disable-next-line: no-any
            var errors = Array.isArray(values) ? [] : {};
            // tslint:disable-next-line: no-any
            var results = Array.isArray(values) ? [] : {};
            var pending = keys.length;
            var argDone = function () {
                if (--pending === 0) {
                    var errorKeys = Object.keys(errors);
                    var errorCount = errorKeys.length;
                    if (errorCount === 0) {
                        complete(results);
                    }
                    else {
                        if (errorKeys.every(function (key) { return CancelablePromiseImplementation.isCanceled(errors[key]); })) {
                            complete(CancelablePromiseImplementation.cancel);
                        }
                        else {
                            error(errors);
                        }
                    }
                }
            };
            var _loop_2 = function (key) {
                var value = values[key];
                if (value === undefined) {
                    pending--;
                }
                else {
                    CancelablePromiseImplementation.then(value, 
                    // tslint:disable-next-line: no-any
                    function (result) {
                        results[key] = result;
                        argDone();
                    }, 
                    // tslint:disable-next-line: no-any no-shadowed-variable
                    function (error) {
                        errors[key] = error;
                        argDone();
                    });
                }
            };
            for (var _i = 0, keys_3 = keys; _i < keys_3.length; _i++) {
                var key = keys_3[_i];
                _loop_2(key);
            }
            if (pending === 0) {
                complete(results);
            }
        }, getCancelAll(values));
    };
    CancelablePromiseImplementation.then = function (value, onComplete, onError) {
        return CancelablePromiseImplementation.as(value).then(onComplete, onError);
    };
    CancelablePromiseImplementation.thenEach = function (values, onComplete, onError) {
        // tslint:disable-next-line: no-any
        var result = Array.isArray(values) ? [] : {};
        for (var _i = 0, _a = Object.keys(values); _i < _a.length; _i++) {
            var key = _a[_i];
            result[key] = CancelablePromiseImplementation.then(values[key], onComplete, onError);
        }
        return CancelablePromiseImplementation.all(result);
    };
    // tslint:disable-next-line: no-any
    CancelablePromiseImplementation.serial = function (tasks) {
        // tslint:disable-next-line: no-any
        return tasks.reduce(function (previous, task) {
            return previous.then(task);
        }, CancelablePromiseImplementation.wrap());
    };
    CancelablePromiseImplementation.timeout = function (time, promise) {
        var to = timeout(time);
        return promise ? timeoutWithPromise(to, promise) : to;
    };
    /**
     * Wraps a non-promise value in a promise. You can use this function if you need
     * to pass a value to a function that requires a promise.
     */
    CancelablePromiseImplementation.wrap = function (value) {
        return new CompletePromise(value);
    };
    CancelablePromiseImplementation.resolve = function (value) {
        return CancelablePromiseImplementation.wrap(value);
    };
    /**
     * Wraps a non-promise error value in a promise. You can use this function if you need
     * to pass an error to a function that requires a promise.
     */
    // tslint:disable-next-line: no-shadowed-variable no-any
    CancelablePromiseImplementation.wrapError = function (error) {
        return new ErrorPromise(error);
    };
    // tslint:disable-next-line: no-shadowed-variable no-any
    CancelablePromiseImplementation.reject = function (error) {
        return CancelablePromiseImplementation.wrapError(error);
    };
    /**
     * Attempts to cancel the fulfillment of a promised value. If the promise hasn't
     * already been fulfilled and cancellation is supported, the promise enters
     * the error state with a value of Error("Canceled").
     */
    CancelablePromiseImplementation.prototype.cancel = function () {
        this._state.cancel(this);
        this._run();
    };
    /**
     * Allows you to specify the work to be done on the fulfillment of the promised value,
     * the error handling to be performed if the promise fails to fulfill
     * a value.
     *
     * After the handlers have finished executing, this function throws any error that would have been returned
     * from then() as a promise in the error state.
     *
     * @param onComplete The function to be called if the promise is fulfilled successfully with a value. The fulfilled value is passed as the single argument. If the value is null, the fulfilled value is returned. The value returned from the function becomes the fulfilled value of the promise returned by then. If an exception is thrown while executing the function, the promise returned by then moves into the error state.
     * @param onError The function to be called if the promise is fulfilled with an error. The error is passed as the single argument. If it is null, the error is forwarded. The value returned from the function is the fulfilled value of the promise returned by then.
     */
    // tslint:disable-next-line: no-any
    CancelablePromiseImplementation.prototype.done = function (onComplete, onError) {
        this._state.done(this, onComplete, onError);
    };
    CancelablePromiseImplementation.prototype.then = function (onComplete, onError) {
        return this._state.then(this, onComplete, onError);
    };
    CancelablePromiseImplementation.prototype.catch = function (onError) {
        return this.then(undefined, onError);
    };
    // tslint:disable-next-line: no-any function-name
    CancelablePromiseImplementation.prototype._init = function (init, oncancel) {
        this._oncancel = oncancel;
        this._setState(state_created);
        this._run();
        try {
            if (init) {
                init(this._completed.bind(this), this._error.bind(this));
            }
            else {
                this._setExceptionValue(new Error('No init value for Promise'));
            }
        }
        catch (ex) {
            this._setExceptionValue(ex);
        }
    };
    // tslint:disable-next-line:function-name
    CancelablePromiseImplementation.prototype._cancelAction = function () {
        if (this._oncancel) {
            try {
                this._oncancel();
            }
            catch (ex) {
                /* ignore */
            }
        }
    };
    // tslint:disable-next-line:function-name
    CancelablePromiseImplementation.prototype._cleanupAction = function () {
        this._oncancel = undefined;
    };
    // tslint:disable-next-line: no-any function-name
    CancelablePromiseImplementation.prototype._chainedError = function (value, context) {
        var result = this._state._error(this, value, detailsForChainedError, context);
        this._run();
        return result;
    };
    // tslint:disable-next-line:function-name
    CancelablePromiseImplementation.prototype._completed = function (value) {
        var result = this._state._completed(this, value);
        this._run();
        return result;
    };
    // tslint:disable-next-line:function-name
    CancelablePromiseImplementation.prototype._error = function (value) {
        var result = this._state._error(this, value, detailsForError);
        this._run();
        return result;
    };
    // tslint:disable-next-line: no-any function-name
    CancelablePromiseImplementation.prototype._setState = function (state) {
        this._nextState = state;
    };
    // tslint:disable-next-line: no-any function-name
    CancelablePromiseImplementation.prototype._setCompleteValue = function (value) {
        this._state._setCompleteValue(this, value);
        this._run();
    };
    // tslint:disable-next-line: no-any function-name
    CancelablePromiseImplementation.prototype._setChainedErrorValue = function (value, context) {
        var result = this._state._setErrorValue(this, value, detailsForChainedError, context);
        this._run();
        return result;
    };
    // tslint:disable-next-line: no-any function-name
    CancelablePromiseImplementation.prototype._setExceptionValue = function (value) {
        var result = this._state._setErrorValue(this, value, detailsForException);
        this._run();
        return result;
    };
    // tslint:disable-next-line:function-name
    CancelablePromiseImplementation.prototype._run = function () {
        while (this._nextState) {
            this._state = this._nextState;
            this._nextState = undefined;
            this._state.enter(this);
        }
    };
    // tslint:disable-next-line:function-name
    CancelablePromiseImplementation.prototype._isSameValue = function (value, promise) {
        return value === this._value;
    };
    return CancelablePromiseImplementation;
}());
_events_Events__WEBPACK_IMPORTED_MODULE_1__["declare"](CancelablePromiseImplementation, errorET);
//
// Internal implementation detail promise, ThenPromise is created when a promise needs
// to be returned from a then() method.
//
var ThenPromise = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ThenPromise, _super);
    // tslint:disable-next-line: no-any
    function ThenPromise(creator) {
        var _this = _super.call(this) || this;
        _this._creator = creator;
        _this._initThen();
        return _this;
    }
    // tslint:disable-next-line:function-name
    ThenPromise.prototype._init = function () {
        // Override to do nothing.
    };
    // tslint:disable-next-line:function-name
    ThenPromise.prototype._cancelAction = function () {
        if (this._creator) {
            this._creator.cancel();
        }
    };
    // tslint:disable-next-line:function-name
    ThenPromise.prototype._cleanupAction = function () {
        this._creator = null;
    };
    ThenPromise.prototype._initThen = function () {
        this._setState(state_created);
        this._run();
    };
    return ThenPromise;
}(CancelablePromiseImplementation));
var SignalPromiseImplementation = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(SignalPromiseImplementation, _super);
    function SignalPromiseImplementation(cancel) {
        var _this = _super.call(this) || this;
        _this._oncancel = cancel;
        _this._initSignal();
        return _this;
    }
    // tslint:disable-next-line:function-name
    SignalPromiseImplementation.prototype._init = function () {
        // Override to do nothing.
    };
    // tslint:disable-next-line:function-name
    SignalPromiseImplementation.prototype._cancelAction = function () {
        if (this._oncancel) {
            this._oncancel();
        }
    };
    // tslint:disable-next-line:function-name
    SignalPromiseImplementation.prototype._cleanupAction = function () {
        this._oncancel = undefined;
    };
    SignalPromiseImplementation.prototype._initSignal = function () {
        this._setState(state_created);
        this._run();
    };
    return SignalPromiseImplementation;
}(CancelablePromiseImplementation));
/**
 * Represents a singal promise type and constructor.
 * This type is for legacy use only, and should not be used outside this source package.
 */
var SignalPromise = SignalPromiseImplementation;
/**
 * Represents a cancelable promise type and constructor.
 * This type is intended to be assignable to the ES6 `Promise` type for compatibility,
 * so that `CancelablePromise` may be a used as a polyfill for `Promise`.
 */
var CancelablePromise = CancelablePromiseImplementation;
/* harmony default export */ __webpack_exports__["default"] = (CancelablePromise);
//# sourceMappingURL=CancelablePromise.js.map

/***/ }),

/***/ "Z+U/":
/*!***************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/telemetry-manager@1.1.3/node_modules/@ms/telemetry-manager/lib/events/ResultTypeEnum.js ***!
  \***************************************************************************************************************************************************/
/*! exports provided: ResultTypeEnum */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultTypeEnum", function() { return ResultTypeEnum; });
/**
 * @public
 */
var ResultTypeEnum;
(function (ResultTypeEnum) {
    ResultTypeEnum[ResultTypeEnum["Success"] = 0] = "Success";
    ResultTypeEnum[ResultTypeEnum["Failure"] = 1] = "Failure";
    ResultTypeEnum[ResultTypeEnum["ExpectedFailure"] = 2] = "ExpectedFailure";
})(ResultTypeEnum || (ResultTypeEnum = {}));
//# sourceMappingURL=ResultTypeEnum.js.map

/***/ }),

/***/ "ZjtH":
/*!*********************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-utilities@29.7.9_5d977624104b06c7bcaa2de974ff51f1/node_modules/@ms/odsp-utilities/lib/scope/Scope.js ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ms_utilities_disposables_lib_Scope__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ms/utilities-disposables/lib/Scope */ "VW2E");


/**
 * Lifetime manager for scoping components.
 *
 * @export
 * @class Scope
 * @implements {IDisposable}
 *
 * @example
 *  const scope = new Scope();
 *
 *  let instance = new (scope.attached(MyComponent))();
 *
 *  scope.dispose();
 */
var Scope = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(Scope, _super);
    function Scope() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Produces a constructor for instances of a type which will be bound to the lifetime
     * of this scope.
     *
     * @template T the type of object to be created.
     * @param {T} the original constructor for the type.
     * @returns {T} a new constructor to invoke to create the object.
     */
    Scope.prototype.attached = function (type) {
        var scope = this;
        var Attached = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return scope.attach(type.apply(this, args) || this);
        };
        if (true) {
            // This pattern results in the correct type being displayed in the debugger
            var wrappedConstructor_1 = Attached;
            Attached = function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                return wrappedConstructor_1.apply(Object.create(type.prototype), args);
            };
        }
        Attached.prototype = type.prototype;
        return Attached;
    };
    return Scope;
}(_ms_utilities_disposables_lib_Scope__WEBPACK_IMPORTED_MODULE_1__["Scope"]));
/* harmony default export */ __webpack_exports__["default"] = (Scope);
//# sourceMappingURL=Scope.js.map

/***/ }),

/***/ "aflu":
/*!**********************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/telemetry-manager@1.1.3/node_modules/@ms/telemetry-manager/lib/events/CustomerPromise.event.js ***!
  \**********************************************************************************************************************************************************/
/*! exports provided: ResultTypeEnum, CustomerPromiseBase, CustomerPromise */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerPromiseBase", function() { return CustomerPromiseBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerPromise", function() { return CustomerPromise; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _PairedEventBase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../PairedEventBase */ "PhF+");
/* harmony import */ var _ResultTypeEnum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ResultTypeEnum */ "Z+U/");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ResultTypeEnum", function() { return _ResultTypeEnum__WEBPACK_IMPORTED_MODULE_2__["ResultTypeEnum"]; });

/* harmony import */ var _Manager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Manager */ "wq9f");
/* harmony import */ var _utilities_getCustomerPromiseManager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utilities/getCustomerPromiseManager */ "7FgT");
// OneDrive:IgnoreCodeCoverage






/**
 * @public
 */
var CustomerPromiseBase = Object(_PairedEventBase__WEBPACK_IMPORTED_MODULE_1__["createPairedEvent"])({
    eventName: 'CustomerPromise,',
    shortEventName: 'CustomerPromise',
    requiresParent: false
}, {
    scenario: {
        isKey: true,
        isPrefixingDisabled: true,
        type: 1 /* String */
    },
    errorCode: {
        isPrefixingDisabled: true,
        type: 1 /* String */
    },
    resultType: {
        typeRef: _ResultTypeEnum__WEBPACK_IMPORTED_MODULE_2__["ResultTypeEnum"],
        isPrefixingDisabled: true,
        type: 6 /* Enum */
    },
    resultCategory: {
        isPrefixingDisabled: true,
        type: 1 /* String */
    },
    extraData: 4 /* Object */,
    httpStatus: {
        isPrefixingDisabled: true,
        type: 2 /* Number */
    },
    perfGoalInMs: {
        isPrefixingDisabled: true,
        type: 2 /* Number */
    },
    duration: {
        isPrefixingDisabled: true,
        type: 2 /* Number */
    }
});
/**
 * @public
 */
var CustomerPromise = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(class_1, _super);
    function class_1(data) {
        var _a, _b;
        var _this = _super.call(this, data) || this;
        if ((_a = data) === null || _a === void 0 ? void 0 : _a.perfGoalInMs) {
            _this.setTimeout((_b = data) === null || _b === void 0 ? void 0 : _b.perfGoalInMs, {
                resultType: _ResultTypeEnum__WEBPACK_IMPORTED_MODULE_2__["ResultTypeEnum"].Failure,
                errorCode: 'Missing Perf Goal'
            });
        }
        return _this;
    }
    class_1.prototype.end = function (data) {
        if (data && data.extraData && this.data.extraData) {
            // Merge extraData from start event into end event
            data = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, data), { extraData: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.data.extraData), data.extraData) });
        }
        if (data) {
            data = this._assessPerf(data);
        }
        return _super.prototype.end.call(this, data);
    };
    class_1.prototype._assessPerf = function (data) {
        if (!this.endTime) {
            var perfGoal = data.perfGoalInMs || this.data.perfGoalInMs; // perfGoal set in end can override start
            if (perfGoal && data.resultType !== _ResultTypeEnum__WEBPACK_IMPORTED_MODULE_2__["ResultTypeEnum"].Failure) {
                var duration = _Manager__WEBPACK_IMPORTED_MODULE_3__["Manager"].getTime() - this.startTime;
                if (perfGoal < duration) {
                    data = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, data), { resultType: _ResultTypeEnum__WEBPACK_IMPORTED_MODULE_2__["ResultTypeEnum"].Failure, errorCode: 'Missing Perf Goal', extraData: data.errorCode
                            ? Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, data.extraData), { innerErrorCode: data.errorCode }) : undefined });
                }
            }
        }
        return data;
    };
    return class_1;
}(CustomerPromiseBase)).withManager(Object(_utilities_getCustomerPromiseManager__WEBPACK_IMPORTED_MODULE_4__["getCustomerPromiseManager"])());
//# sourceMappingURL=CustomerPromise.event.js.map

/***/ }),

/***/ "c09w":
/*!**********************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-utilities@29.7.9_5d977624104b06c7bcaa2de974ff51f1/node_modules/@ms/odsp-utilities/lib/logging/events/Qos.event.js ***!
  \**********************************************************************************************************************************************************************************/
/*! exports provided: ResultTypeEnum, QosBase, Qos, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ms_telemetry_manager_lib_events_Qos_event__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ms/telemetry-manager/lib/events/Qos.event */ "eT67");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ResultTypeEnum", function() { return _ms_telemetry_manager_lib_events_Qos_event__WEBPACK_IMPORTED_MODULE_0__["ResultTypeEnum"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "QosBase", function() { return _ms_telemetry_manager_lib_events_Qos_event__WEBPACK_IMPORTED_MODULE_0__["QosBase"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Qos", function() { return _ms_telemetry_manager_lib_events_Qos_event__WEBPACK_IMPORTED_MODULE_0__["Qos"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _ms_telemetry_manager_lib_events_Qos_event__WEBPACK_IMPORTED_MODULE_0__["Qos"]; });

// OneDrive:IgnoreCodeCoverage


//# sourceMappingURL=Qos.event.js.map

/***/ }),

/***/ "cDPE":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-utilities@29.7.9_5d977624104b06c7bcaa2de974ff51f1/node_modules/@ms/odsp-utilities/lib/logging/events/Engagement.event.js ***!
  \*****************************************************************************************************************************************************************************************/
/*! exports provided: Engagement, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ms_telemetry_manager_lib_events_Engagement_event__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ms/telemetry-manager/lib/events/Engagement.event */ "pL7Y");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Engagement", function() { return _ms_telemetry_manager_lib_events_Engagement_event__WEBPACK_IMPORTED_MODULE_0__["Engagement"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _ms_telemetry_manager_lib_events_Engagement_event__WEBPACK_IMPORTED_MODULE_0__["Engagement"]; });

// OneDrive:IgnoreCodeCoverage


//# sourceMappingURL=Engagement.event.js.map

/***/ }),

/***/ "dcNl":
/*!***********************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-utilities@29.7.9_5d977624104b06c7bcaa2de974ff51f1/node_modules/@ms/odsp-utilities/lib/events/Events.js ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: isDOMEventTarget, isEventTarget, declare, raise */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ms_utilities_async_lib_events_Events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ms/utilities-async/lib/events/Events */ "fDs1");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isDOMEventTarget", function() { return _ms_utilities_async_lib_events_Events__WEBPACK_IMPORTED_MODULE_0__["isDOMEventTarget"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isEventTarget", function() { return _ms_utilities_async_lib_events_Events__WEBPACK_IMPORTED_MODULE_0__["isEventTarget"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "declare", function() { return _ms_utilities_async_lib_events_Events__WEBPACK_IMPORTED_MODULE_0__["declare"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "raise", function() { return _ms_utilities_async_lib_events_Events__WEBPACK_IMPORTED_MODULE_0__["raise"]; });


//# sourceMappingURL=Events.js.map

/***/ }),

/***/ "dv0D":
/*!***********************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-utilities@29.7.9_5d977624104b06c7bcaa2de974ff51f1/node_modules/@ms/odsp-utilities/lib/browser/PlatformDetection.js ***!
  \***********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ms_utilities_browser_lib_PlatformDetection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ms/utilities-browser/lib/PlatformDetection */ "u0q+");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _ms_utilities_browser_lib_PlatformDetection__WEBPACK_IMPORTED_MODULE_0__["PlatformDetection"]; });

// OneDrive:IgnoreCodeCoverage

//# sourceMappingURL=PlatformDetection.js.map

/***/ }),

/***/ "eJPJ":
/*!******************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/telemetry-manager@1.1.3/node_modules/@ms/telemetry-manager/lib/utilities/CircularBuffer.js ***!
  \******************************************************************************************************************************************************/
/*! exports provided: CircularBuffer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CircularBuffer", function() { return CircularBuffer; });
var CircularBuffer = /** @class */ (function () {
    function CircularBuffer(size) {
        if (size <= 0) {
            throw new Error('Size must be positive');
        }
        this._size = size;
        this._buffer = new Array(size);
        this._length = 0;
        this._head = -1;
    }
    CircularBuffer.prototype.push = function (item) {
        if (this._length < this._size) {
            this._length++;
        }
        this._head++;
        if (this._head === this._size) {
            this._head = 0;
        }
        this._buffer[this._head] = item;
    };
    CircularBuffer.prototype.popOldest = function () {
        if (this._length === 0) {
            return null;
        }
        var tail = (this._head - this._length + 1 + this._size) % this._size;
        this._length--;
        return this._buffer[tail];
    };
    return CircularBuffer;
}());

//# sourceMappingURL=CircularBuffer.js.map

/***/ }),

/***/ "eT67":
/*!**********************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/telemetry-manager@1.1.3/node_modules/@ms/telemetry-manager/lib/events/Qos.event.js ***!
  \**********************************************************************************************************************************************/
/*! exports provided: ResultTypeEnum, QosBase, Qos */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QosBase", function() { return QosBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Qos", function() { return Qos; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _PairedEventBase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../PairedEventBase */ "PhF+");
/* harmony import */ var _ResultTypeEnum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ResultTypeEnum */ "Z+U/");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ResultTypeEnum", function() { return _ResultTypeEnum__WEBPACK_IMPORTED_MODULE_2__["ResultTypeEnum"]; });

// OneDrive:IgnoreCodeCoverage




/**
 * @public
 */
var QosBase = Object(_PairedEventBase__WEBPACK_IMPORTED_MODULE_1__["createPairedEvent"])({
    eventName: 'Qos,',
    shortEventName: 'Qos'
}, {
    name: {
        isKey: true,
        isPrefixingDisabled: true,
        type: 1 /* String */
    },
    startTimeOverride: {
        isPrefixingDisabled: true,
        type: 2 /* Number */
    },
    resultCode: {
        isPrefixingDisabled: true,
        type: 1 /* String */
    },
    resultType: {
        typeRef: _ResultTypeEnum__WEBPACK_IMPORTED_MODULE_2__["ResultTypeEnum"],
        isPrefixingDisabled: true,
        type: 6 /* Enum */
    },
    error: {
        isPrefixingDisabled: true,
        type: 1 /* String */
    },
    extraData: 4 /* Object */,
    extraMetrics: {
        isPrefixingDisabled: true,
        type: 4 /* Object */
    },
    privacyClassification: {
        isPrefixingDisabled: true,
        type: 1 /* String */
    }
}).withData({
    privacyClassification: "requiredService" /* requiredService */,
    privacyDataTypes: ['productAndServicePerformance']
});
/**
 * @public
 */
var Qos = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(Qos, _super);
    function Qos() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Qos.prototype.end = function (data) {
        if (data && data.extraData && this.data.extraData) {
            // Merge extraData from start event into end event
            data = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, data), { extraData: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.data.extraData), data.extraData) });
        }
        return _super.prototype.end.call(this, data);
    };
    return Qos;
}(QosBase));

//# sourceMappingURL=Qos.event.js.map

/***/ }),

/***/ "fDs1":
/*!***************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/utilities-async@1.1.1/node_modules/@ms/utilities-async/lib/events/Events.js ***!
  \***************************************************************************************************************************************/
/*! exports provided: isDOMEventTarget, isEventTarget, declare, raise */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDOMEventTarget", function() { return isDOMEventTarget; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEventTarget", function() { return isEventTarget; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "declare", function() { return declare; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "raise", function() { return raise; });
// NOTE: This module should have no dependencies!
function isDOMEventTarget(target) {
    return !!target && typeof target.addEventListener === 'function';
}
function isEventTarget(target) {
    return !!target && !!target.__events__;
}
function declare(parent, event) {
    var host = parent;
    var declaredEvents = (host.__declaredEvents = host.__declaredEvents || {});
    if (typeof event === 'string') {
        declaredEvents[event] = true;
    }
    else {
        for (var i = 0; i < event.length; i++) {
            declaredEvents[event[i]] = true;
        }
    }
}
function raise(target, eventName, eventArgs, bubbleEvent) {
    var finalTarget = target;
    var retVal;
    if (isDOMEventTarget(finalTarget)) {
        if (document.createEvent) {
            var ev = document.createEvent('HTMLEvents');
            ev.initEvent(eventName, bubbleEvent, true);
            ev.args = eventArgs;
            retVal = finalTarget.dispatchEvent(ev);
        }
    }
    else {
        while (finalTarget && retVal !== false) {
            if (isEventTarget(finalTarget)) {
                var events = finalTarget.__events__;
                var eventRecords = events[eventName];
                for (var id in eventRecords) {
                    if (Object.prototype.hasOwnProperty.call(eventRecords, id)) {
                        var eventRecordList = eventRecords[id];
                        for (var listIndex = 0; retVal !== false && listIndex < eventRecordList.length; listIndex++) {
                            var record = eventRecordList[listIndex];
                            if (record.objectCallback) {
                                retVal = record.objectCallback.call(record.parent, eventArgs);
                            }
                        }
                    }
                }
                // If the target has a parent, bubble the event up.
                finalTarget = bubbleEvent ? finalTarget.parent : null;
            }
            else {
                finalTarget = null;
            }
        }
    }
    return retVal;
}
//# sourceMappingURL=Events.js.map

/***/ }),

/***/ "g/c1":
/*!*********************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-utilities@29.7.9_5d977624104b06c7bcaa2de974ff51f1/node_modules/@ms/odsp-utilities/lib/logging/PairedEventBase.js ***!
  \*********************************************************************************************************************************************************************************/
/*! exports provided: createPairedEvent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ms_telemetry_manager_lib_PairedEventBase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ms/telemetry-manager/lib/PairedEventBase */ "PhF+");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createPairedEvent", function() { return _ms_telemetry_manager_lib_PairedEventBase__WEBPACK_IMPORTED_MODULE_0__["createPairedEvent"]; });

// OneDrive:CoverageThreshold(75)

//# sourceMappingURL=PairedEventBase.js.map

/***/ }),

/***/ "hNDC":
/*!****************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/telemetry-manager@1.1.3/node_modules/@ms/telemetry-manager/lib/events/PageUsage.event.js ***!
  \****************************************************************************************************************************************************/
/*! exports provided: PageUsageLogger */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageUsageLogger", function() { return PageUsageLogger; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SingleEventBase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../SingleEventBase */ "yb4E");


var pageUsageEvent = Object(_SingleEventBase__WEBPACK_IMPORTED_MODULE_1__["createSingleEvent"])({
    eventName: 'PageUsage,',
    shortEventName: 'PageUsage'
}, {
    eupl: {
        isPrefixingDisabled: true,
        type: 2 /* Number */
    },
    result: {
        isPrefixingDisabled: true,
        type: 3 /* Boolean */
    },
    failure: {
        isPrefixingDisabled: true,
        type: 1 /* String */
    },
    feature: {
        isPrefixingDisabled: true,
        type: 1 /* String */
    }
});
var DEFAULT_LOGGER_NAME = '__default_page_usage__';
var ComponentState;
(function (ComponentState) {
    ComponentState[ComponentState["Start"] = 0] = "Start";
    ComponentState[ComponentState["Success"] = 1] = "Success";
    ComponentState[ComponentState["Failure"] = 2] = "Failure";
    ComponentState[ComponentState["Timeout"] = 3] = "Timeout";
})(ComponentState || (ComponentState = {}));
function getComponentDuration(component) {
    return component.endTime - component.startTime;
}
var PageUsageLogger = /** @class */ (function () {
    function PageUsageLogger() {
        var _this = this;
        // When graduate the new mode, remove the `_startTime` variable.
        // tslint:disable-next-line:typedef
        this._startTime = 0;
        // tslint:disable-next-line:typedef
        this._elapsedOffset = 0;
        // tslint:disable-next-line:typedef
        this._timerId = 0;
        // tslint:disable-next-line:typedef
        this._timeoutLimit = 15000; // 15 seconds
        // This is temporary and should be removed once corresponding KS in calling code (e.g sp-client) is graduated
        this._addComponentStartTime = false;
        // When graduate the new mode, remove the `_failures` variable.
        this._failures = [];
        this._features = [];
        // Graduate the new mode after base performance logger is SP-Client moves to new pattern.
        this._newMode = false;
        this._components = {};
        // Additional handlers to call right before finish
        this._preFinishHandlers = [];
        /**
         * If the previous logging is not completed yet, finish the event with `Flush` failure.
         */
        this._flushIfNecessary = function () {
            if (_this._timerId) {
                if (_this._newMode) {
                    // With new mode, flush information is passed to `finish` method as parameter.
                }
                else {
                    _this._failures.push('Flush');
                }
                _this.finish(undefined, /* isFlushRequest */ true);
            }
        };
        // This listener must be added before Aria is loaded.
        // Aria is using `beforeunload` event to emergency flush the events to its end point.
        // So, we need to flush our events to Aria queue first before Aria's listener is run.
        window.addEventListener('beforeunload', this._flushIfNecessary);
    }
    /**
     * Get an instance of PageUsageLogger with default parameters.
     * @param name The name of the instance of PageUsageLogger.
     *             If not provided, the default PageUsageLogger instance will be returned.
     */
    PageUsageLogger.getPageUsageLogger = function (name) {
        if (name === void 0) { name = DEFAULT_LOGGER_NAME; }
        if (!PageUsageLogger._loggers[name]) {
            PageUsageLogger._loggers[name] = new PageUsageLogger();
        }
        return PageUsageLogger._loggers[name];
    };
    PageUsageLogger.prototype.initialize = function (scenarioId, elapsedOffset, addComponentStartTime) {
        var _this = this;
        if (scenarioId === void 0) { scenarioId = ''; }
        if (elapsedOffset === void 0) { elapsedOffset = 0; }
        if (addComponentStartTime === void 0) { addComponentStartTime = false; }
        this._flushIfNecessary();
        if (this._endsWith(scenarioId, '.isEdit')) {
            // We do only care about the view mode scenarios.
            return;
        }
        this._startTime = performance.now();
        this._elapsedOffset = elapsedOffset;
        this._addComponentStartTime = addComponentStartTime;
        this._failures = [];
        this._features = [];
        this._preFinishHandlers = [];
        this._timerId = setTimeout(function () {
            // tslint:disable-line:ban-native-functions
            if (_this._newMode) {
                Object.keys(_this._components).forEach(function (tag) {
                    var component = _this._components[tag];
                    if (component.state === 0 /* Start */) {
                        // The component has not been settled after seconds, set it as timeout.
                        _this._components[tag] = {
                            state: 3 /* Timeout */,
                            tag: component.tag
                        };
                    }
                });
            }
            else {
                _this._failures.push('Timeout');
            }
            _this.finish();
        }, this._timeoutLimit);
        if (window.location.href.toLowerCase().indexOf('/_layouts/') !== -1) {
            this.markFeature('LayoutPage', 'true');
        }
    };
    /**
     * The elapsed time since the page is navigated.
     *
     * - If the page is first full loaded, the value equals to `performance.now()`.
     * - If the page is fast navigated, the value represents the time since fast navigation.
     */
    PageUsageLogger.prototype.elapsedTime = function () {
        return performance.now() - this._elapsedOffset;
    };
    PageUsageLogger.prototype.addComponent = function (tag) {
        var _this = this;
        this._newMode = true;
        if (!this._timerId) {
            // The logger is not initialized. No-op.
        }
        else if (this._components[tag]) {
            // The component is added to page usage logger more than once.
        }
        else {
            var promise = new Promise(function (settle) {
                _this._components[tag] = {
                    state: 0 /* Start */,
                    tag: tag,
                    startTime: _this.elapsedTime(),
                    settle: settle
                };
            });
            // After each component is settled, we check if all components are settled.
            // We pass current timer ID to ensure it checks on the current run's components.
            var currentTimerId_1 = this._timerId;
            promise.then(function () { return _this._check(currentTimerId_1); });
        }
    };
    PageUsageLogger.prototype.markSuccess = function (tag) {
        var _a;
        if (!this._timerId) {
            // The logger is not initialized. No-op.
        }
        else {
            var component = this._components[tag];
            if (((_a = component) === null || _a === void 0 ? void 0 : _a.state) === 0 /* Start */) {
                this._components[tag] = {
                    state: 1 /* Success */,
                    tag: tag,
                    startTime: component.startTime,
                    endTime: this.elapsedTime()
                };
                component.settle();
            }
        }
    };
    PageUsageLogger.prototype.markFailure = function (key, value) {
        if (value === void 0) { value = ''; }
        var _a;
        if (this._newMode) {
            // Rename the parameter names when graduate the new mode.
            var tag = key;
            var error = value;
            if (!this._timerId) {
                // The logger is not initialized. No-op.
            }
            else {
                var component = this._components[tag];
                if (((_a = component) === null || _a === void 0 ? void 0 : _a.state) === 0 /* Start */) {
                    this._components[tag] = {
                        state: 2 /* Failure */,
                        tag: tag,
                        startTime: component.startTime,
                        endTime: this.elapsedTime(),
                        error: error
                    };
                    component.settle();
                }
            }
        }
        else {
            if (this._timerId) {
                this._failures.push(key + ":" + (value || ''));
            }
            else {
                // The logger is not initialized. No-op.
            }
        }
    };
    PageUsageLogger.prototype.markFeature = function (key, value) {
        if (this._timerId) {
            this._features.push(key + ":" + (value || ''));
        }
        else {
            // The logger is not initialized. No-op.
        }
    };
    /** @deprecated The finish step is managed internally when run in new mode. */
    // When graduate new mode, change `finish` method to `private`.
    PageUsageLogger.prototype.finish = function (eupl, isFlushRequest) {
        var _a;
        var _this = this;
        if (this._timerId) {
            var result = void 0;
            var failure = void 0;
            var euplData = void 0;
            // Call any handlers added to be executed sequentially at start of finish()
            this._preFinishHandlers.forEach(function (handler) {
                try {
                    handler();
                }
                catch (_a) {
                    // Eat exception so that finish() does not fail due to a handler
                }
            });
            if (this._newMode) {
                var components = Object.keys(this._components).map(function (tag) { return _this._components[tag]; });
                var successComponents = components.filter(function (component) { return component.state === 1 /* Success */; });
                var failedComponents = components.filter(function (component) { return component.state === 2 /* Failure */; });
                var timeoutComponents = components.filter(function (component) { return component.state === 3 /* Timeout */; });
                result = failedComponents.length === 0 && timeoutComponents.length === 0;
                failure = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(failedComponents.map(function (component) { return component.tag + ":" + component.error; }), timeoutComponents.map(function (component) { return component.tag + ":Timeout"; }), (isFlushRequest ? ['Flush'] : [])).join(';');
                var settledComponents = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(successComponents, failedComponents).sort(function (a, b) { return b.endTime - a.endTime; });
                euplData = settledComponents.length > 0 ? settledComponents[0].endTime : this.elapsedTime();
                var longDurationComponents = settledComponents.sort(function (a, b) { return getComponentDuration(b) - getComponentDuration(a); }).slice(0, 3);
                var componentPerfStats = void 0;
                if (this._addComponentStartTime) {
                    componentPerfStats = longDurationComponents.map(function (component) {
                        return component.tag + ":" + component.startTime.toFixed(2) + "," + getComponentDuration(component).toFixed(2);
                    });
                }
                else {
                    componentPerfStats = longDurationComponents.map(function (component) { return component.tag + ":" + getComponentDuration(component); });
                }
                (_a = this._features).push.apply(_a, componentPerfStats);
            }
            else {
                // If the user jumps to another page before fully load, we consider it as success.
                result = this._failures.filter(function (failure) { return failure !== 'Flush'; }).length === 0;
                failure = this._failures.join(';');
                euplData = eupl || performance.now() - this._startTime;
            }
            pageUsageEvent.logData({
                eupl: euplData,
                result: result,
                failure: failure,
                feature: this._features.join(';')
            });
            clearTimeout(this._timerId); // tslint:disable-line:ban-native-functions
            this._timerId = 0;
            this._failures = [];
            this._features = [];
            this._components = {};
            this._preFinishHandlers = [];
            this._newMode = false;
        }
        else {
            // The logger is not initialized. No-op.
        }
    };
    /**
     * Add a handler that will be called at beginning of the finish() step.
     * This can be used to add additional data needed before finish() is executed.
     */
    PageUsageLogger.prototype.addPreFinishHandler = function (handler) {
        if (this._timerId) {
            this._preFinishHandlers.push(handler);
        }
    };
    PageUsageLogger.prototype._check = function (timerId) {
        var _this = this;
        // We need to wait one tick for other components status before check.
        setTimeout(function () {
            if (_this._timerId !== timerId) {
                // The logger has been re-initialized, we don't need to check on previous run's components.
                return;
            }
            var components = Object.keys(_this._components).map(function (tag) { return _this._components[tag]; });
            var unsettledComponents = components.filter(function (component) { return component.state === 0 /* Start */; });
            if (unsettledComponents.length === 0) {
                _this.finish();
            }
        });
    };
    PageUsageLogger.prototype._endsWith = function (a, b) {
        return a.lastIndexOf(b) + b.length === a.length;
    };
    PageUsageLogger._loggers = {};
    return PageUsageLogger;
}());

//# sourceMappingURL=PageUsage.event.js.map

/***/ }),

/***/ "iVgB":
/*!***********************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-utilities@29.7.9_5d977624104b06c7bcaa2de974ff51f1/node_modules/@ms/odsp-utilities/lib/features/FeatureOverrides.js ***!
  \***********************************************************************************************************************************************************************************/
/*! exports provided: ENABLE_PARAM_KEY, DISABLE_PARAM_KEY, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ENABLE_PARAM_KEY", function() { return ENABLE_PARAM_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DISABLE_PARAM_KEY", function() { return DISABLE_PARAM_KEY; });
/* harmony import */ var _Features__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Features */ "8G1T");
/* harmony import */ var _FeaturesBasic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FeaturesBasic */ "JB/h");
/* harmony import */ var _navigation_AddressParser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../navigation/AddressParser */ "+7kh");
/* harmony import */ var _models_store_BaseDataStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/store/BaseDataStore */ "18dJ");
/* harmony import */ var _models_store_DataStoreCachingType__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/store/DataStoreCachingType */ "EjJ3");
/* harmony import */ var _killswitch_Killswitch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../killswitch/Killswitch */ "QUgr");
// OneDrive:IgnoreCodeCoverage






var ENABLE_PARAM_KEY = 'enableFeatures';
var DISABLE_PARAM_KEY = 'disableFeatures';
var STORE_KEY = 'Store';
var AllowFeatureOverrides = { ODB: 587, ODC: 'AllowFeatureOverrides', Fallback: false };
var SPODebugOnlyCookieRedirect = { ODB: 357, ODC: null, Fallback: false };
var SPODebugOnlyCookieRedirect2 = { ODB: 342, ODC: null, Fallback: false };
var STORE_NAME = 'FeatureOverrides';
var _overrides = {};
var _store = new _models_store_BaseDataStore__WEBPACK_IMPORTED_MODULE_3__["default"](STORE_NAME, _models_store_DataStoreCachingType__WEBPACK_IMPORTED_MODULE_4__["default"].session);
var ENABLE_COOKIE_NAME = STORE_NAME + "_" + ENABLE_PARAM_KEY;
var DISABLE_COOKIE_NAME = STORE_NAME + "_" + DISABLE_PARAM_KEY;
function _getCookieValue(cookieName) {
    var val = document.cookie.match('(^|;)\\s*' + cookieName + '\\s*=\\s*([^;]+)');
    return val ? val.pop() : '';
}
function _setFeatureSettingsToCookie(overrides) {
    var enableFeatures = [];
    var disableFeatures = [];
    for (var key in overrides) {
        (overrides[key] ? enableFeatures : disableFeatures).push(key);
    }
    document.cookie = ENABLE_COOKIE_NAME + "=" + enableFeatures.join(',') + ";path=/";
    document.cookie = DISABLE_COOKIE_NAME + "=" + disableFeatures.join(',') + ";path=/";
}
function _getFeatureSettingsFromCookie() {
    var overrides = {};
    var enableFeatures = _getCookieValue(ENABLE_COOKIE_NAME);
    if (enableFeatures) {
        for (var _i = 0, _a = enableFeatures.split(','); _i < _a.length; _i++) {
            var param = _a[_i];
            overrides[param] = true;
        }
    }
    var disableFeatures = _getCookieValue(DISABLE_COOKIE_NAME);
    if (disableFeatures) {
        for (var _b = 0, _c = disableFeatures.split(','); _b < _c.length; _b++) {
            var param = _c[_b];
            overrides[param] = false;
        }
    }
    return overrides;
}
function init() {
    var useSessionStorage = _killswitch_Killswitch__WEBPACK_IMPORTED_MODULE_5__["Killswitch"].isActivated('CA76C674-5DEE-4C8A-9EDF-82C275E0CF01', '11/27/2018', "Don't save enable/disable features query params to session storage");
    if (useSessionStorage) {
        // Load existing values
        var overrides = _store.getValue(STORE_KEY);
        if (overrides) {
            _overrides = overrides;
        }
        else {
            _overrides = {};
        }
    }
    else {
        _overrides = _getFeatureSettingsFromCookie();
    }
    // Parse the url and add any valid feature params in the override map
    var uri = location.search ? location.search.substring(1) : '';
    var params = _navigation_AddressParser__WEBPACK_IMPORTED_MODULE_2__["deserializeQuery"](uri);
    var enableFeatures = params[ENABLE_PARAM_KEY];
    if (enableFeatures) {
        for (var _i = 0, _a = enableFeatures.split(','); _i < _a.length; _i++) {
            var param = _a[_i];
            _overrides[param] = true;
        }
    }
    var disableFeatures = params[DISABLE_PARAM_KEY];
    if (disableFeatures) {
        for (var _b = 0, _c = disableFeatures.split(','); _b < _c.length; _b++) {
            var param = _c[_b];
            _overrides[param] = false;
        }
    }
    if (useSessionStorage) {
        _store.setValue(STORE_KEY, _overrides);
    }
    else {
        _setFeatureSettingsToCookie(_overrides);
    }
}
var FeatureOverrides = /** @class */ (function () {
    function FeatureOverrides() {
    }
    Object.defineProperty(FeatureOverrides, "Overrides", {
        get: function () {
            return _overrides;
        },
        enumerable: true,
        configurable: true
    });
    /** For use in environments without window._spPageContextInfo, first call Features.initSPExpFeatures(pageContext.ExpFeatures) then this */
    FeatureOverrides.evaluateCanOverride = function () {
        if (true) {
            FeatureOverrides.CanOverride = true;
        }
        else {}
    };
    FeatureOverrides.isFeatureEnabled = function (feature, expFeatures) {
        // Check if there is an overriden value for the given feature
        if (FeatureOverrides.CanOverride) {
            if (feature.ODB in _overrides) {
                return _overrides[feature.ODB];
            }
            else if (feature.ODC in _overrides) {
                return _overrides[feature.ODC];
            }
        }
        if (expFeatures) {
            return Object(_FeaturesBasic__WEBPACK_IMPORTED_MODULE_1__["isSPFeatureEnabled"])(feature, expFeatures);
        }
        return _Features__WEBPACK_IMPORTED_MODULE_0__["default"].isFeatureEnabled(feature);
    };
    FeatureOverrides.AllowFeatureOverrides = AllowFeatureOverrides;
    FeatureOverrides.SPODebugOnlyCookieRedirect = SPODebugOnlyCookieRedirect;
    return FeatureOverrides;
}());
/* harmony default export */ __webpack_exports__["default"] = (FeatureOverrides);
FeatureOverrides.evaluateCanOverride();
if (FeatureOverrides.CanOverride) {
    init();
}
//# sourceMappingURL=FeatureOverrides.js.map

/***/ }),

/***/ "jpKs":
/*!**************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/utilities-objects@1.0.0/node_modules/@ms/utilities-objects/lib/deepCopy.js ***!
  \**************************************************************************************************************************************/
/*! exports provided: deepCopy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deepCopy", function() { return deepCopy; });
/**
 * Returns a copy of the specified object by deeply cloning all of its properties.
 */
function deepCopy(object) {
    var refsCopied = [];
    function copyRecurse(obj) {
        var result = null;
        if (obj) {
            if (Array.isArray(obj)) {
                // @ts-ignore
                result = [];
            }
            else {
                // create clone of the object with same prototype chain
                result = Object.create(Object.getPrototypeOf(obj));
            }
            // iterate over all the properties in the object
            Object.keys(obj).forEach(function (key) {
                // recursively copy the object's properties if the property is an object
                var value = obj[key];
                if (typeof value === 'object') {
                    // @ts-ignore
                    if (refsCopied.indexOf(value) !== -1) {
                        throw new Error("Cannot perform DeepCopy() because a circular reference was encountered, object: " + obj + ", property: " + key);
                    }
                    // @ts-ignore
                    refsCopied.push(value);
                    // @ts-ignore
                    result[key] = copyRecurse(value);
                    refsCopied.pop();
                }
                else {
                    // @ts-ignore
                    result[key] = value;
                }
            });
        }
        return result;
    }
    if (typeof object !== 'object') {
        return object;
    }
    return copyRecurse(object);
}
//# sourceMappingURL=deepCopy.js.map

/***/ }),

/***/ "lmjA":
/*!*****************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-utilities@29.7.9_5d977624104b06c7bcaa2de974ff51f1/node_modules/@ms/odsp-utilities/lib/logging/ErrorHelper.js ***!
  \*****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ms_telemetry_manager_lib_ErrorHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ms/telemetry-manager/lib/ErrorHelper */ "qJrk");
// OneDrive:IgnoreCodeCoverage

/* harmony default export */ __webpack_exports__["default"] = (_ms_telemetry_manager_lib_ErrorHelper__WEBPACK_IMPORTED_MODULE_0__);
//# sourceMappingURL=ErrorHelper.js.map

/***/ }),

/***/ "lxGK":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-datasources@45.13.10_e509c819ab980023b76e5746ec0fc9e2/node_modules/@ms/odsp-datasources/lib/dataSources/base/SyncTelemetryHandler.js ***!
  \*****************************************************************************************************************************************************************************************************/
/*! exports provided: getSyncTelemetryHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSyncTelemetryHandler", function() { return getSyncTelemetryHandler; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ms_telemetry_manager_lib_events_Qos_event__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ms/telemetry-manager/lib/events/Qos.event */ "eT67");


function getSyncTelemetryHandler(dataSyncClient, telemetryHandler) {
    return function (input, endpoint) {
        var eventData = input.eventData;
        var extraData = eventData.extraData;
        var syncQos = {
            performanceEntry: extraData && extraData['performanceEntry'],
            httpStatus: extraData && extraData['HttpStatus'],
            correlationId: extraData && extraData['CorrelationId'],
            succeeded: (eventData && eventData.resultType === _ms_telemetry_manager_lib_events_Qos_event__WEBPACK_IMPORTED_MODULE_1__["ResultTypeEnum"].Success) || false,
            resultCode: eventData && eventData.resultCode,
            endpoint: endpoint
        };
        var handlerOutput = telemetryHandler && telemetryHandler(input);
        var canRetrySync = dataSyncClient.onRequestComplete(syncQos);
        extraData['dataSyncQos'] = dataSyncClient.getQosInfo();
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, (handlerOutput || {})), { eventData: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, (handlerOutput ? handlerOutput.eventData : eventData)), { extraData: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, (handlerOutput ? handlerOutput.eventData.extraData : eventData.extraData)), dataSyncClient.getQosInfo()) }), canRetry: canRetrySync && (!handlerOutput || handlerOutput.canRetry) });
    };
}
//# sourceMappingURL=SyncTelemetryHandler.js.map

/***/ }),

/***/ "mP+V":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-utilities@29.7.9_5d977624104b06c7bcaa2de974ff51f1/node_modules/@ms/odsp-utilities/lib/logging/events/CustomerPromise.event.js ***!
  \**********************************************************************************************************************************************************************************************/
/*! exports provided: ResultTypeEnum, CustomerPromiseBase, CustomerPromise */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ms_telemetry_manager_lib_events_CustomerPromise_event__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ms/telemetry-manager/lib/events/CustomerPromise.event */ "aflu");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ResultTypeEnum", function() { return _ms_telemetry_manager_lib_events_CustomerPromise_event__WEBPACK_IMPORTED_MODULE_0__["ResultTypeEnum"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CustomerPromiseBase", function() { return _ms_telemetry_manager_lib_events_CustomerPromise_event__WEBPACK_IMPORTED_MODULE_0__["CustomerPromiseBase"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CustomerPromise", function() { return _ms_telemetry_manager_lib_events_CustomerPromise_event__WEBPACK_IMPORTED_MODULE_0__["CustomerPromise"]; });

// OneDrive:IgnoreCodeCoverage

//# sourceMappingURL=CustomerPromise.event.js.map

/***/ }),

/***/ "mbD+":
/*!***********************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-utilities@29.7.9_5d977624104b06c7bcaa2de974ff51f1/node_modules/@ms/odsp-utilities/lib/uri/SimpleUri.js ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: SimpleUri, UriFormat, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ms_sp_resource_path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ms/sp-resource-path */ "WgxZ");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SimpleUri", function() { return _ms_sp_resource_path__WEBPACK_IMPORTED_MODULE_0__["SPResourcePath"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UriFormat", function() { return _ms_sp_resource_path__WEBPACK_IMPORTED_MODULE_0__["SPResourcePathFormat"]; });



/* harmony default export */ __webpack_exports__["default"] = (_ms_sp_resource_path__WEBPACK_IMPORTED_MODULE_0__["SPResourcePath"]);
//# sourceMappingURL=SimpleUri.js.map

/***/ }),

/***/ "mwqp":
/*!**********************!*\
  !*** ./lib/index.js ***!
  \**********************/
/*! exports provided: PageUsageLogger, ResultTypeEnum, QosBase, Qos, CustomerPromiseBase, CustomerPromise, Engagement, ClonedEventType, ValidationErrorType, AccountType, addEventProps, EventBase, SPAlternativeUrls, AriaLoggerCore, TargetType, ABExpHash, EXPERIMENTS_WITH_V1_HASHING, ABExperiment, APICallHostType, APICallPerformanceData, ControlPerformanceData, RUMOneLogger, RumOneLogger, getVariantAndLogExposure, getExperiment, _getVariantWithoutLogging, ENABLE_PARAM_KEY, DISABLE_PARAM_KEY, FeatureOverrides, PerformanceMarker, deserializeQuery, getQueryStringFromUrl, getUrlWithoutQueryString, SingleEventBase, PairedEventBase, XHRStatus, XHR, PlatformDetection, StringHelper, deepCopy, deepCompare, safeSerialize, extend, DEFAULT_DELIMITER, KEYVALUE_DELIMITER, serialize, Locale, createManager, Manager, UriPartial, Uri, DataStoreCachingType, DataStore, EventGroup, OdspErrorHelper, ItemType, SignalPromise, CancelablePromise, Promise, Async, Killswitch, getKillSwitch, Guid, Features, getSyncTelemetryHandler, isQosEndSchemaOverride, DataRequestor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ms_odsp_utilities_lib_logging_events_PageUsage_event__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ms/odsp-utilities/lib/logging/events/PageUsage.event */ "qRNb");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PageUsageLogger", function() { return _ms_odsp_utilities_lib_logging_events_PageUsage_event__WEBPACK_IMPORTED_MODULE_0__["PageUsageLogger"]; });

/* harmony import */ var _ms_odsp_utilities_lib_logging_events_Qos_event__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ms/odsp-utilities/lib/logging/events/Qos.event */ "c09w");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ResultTypeEnum", function() { return _ms_odsp_utilities_lib_logging_events_Qos_event__WEBPACK_IMPORTED_MODULE_1__["ResultTypeEnum"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "QosBase", function() { return _ms_odsp_utilities_lib_logging_events_Qos_event__WEBPACK_IMPORTED_MODULE_1__["QosBase"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Qos", function() { return _ms_odsp_utilities_lib_logging_events_Qos_event__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _ms_odsp_utilities_lib_logging_events_CustomerPromise_event__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ms/odsp-utilities/lib/logging/events/CustomerPromise.event */ "mP+V");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CustomerPromiseBase", function() { return _ms_odsp_utilities_lib_logging_events_CustomerPromise_event__WEBPACK_IMPORTED_MODULE_2__["CustomerPromiseBase"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CustomerPromise", function() { return _ms_odsp_utilities_lib_logging_events_CustomerPromise_event__WEBPACK_IMPORTED_MODULE_2__["CustomerPromise"]; });

/* harmony import */ var _ms_odsp_utilities_lib_logging_events_Engagement_event__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ms/odsp-utilities/lib/logging/events/Engagement.event */ "cDPE");
/* empty/unused harmony star reexport *//* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Engagement", function() { return _ms_odsp_utilities_lib_logging_events_Engagement_event__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _ms_odsp_utilities_lib_logging_EventBase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ms/odsp-utilities/lib/logging/EventBase */ "WquY");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ClonedEventType", function() { return _ms_odsp_utilities_lib_logging_EventBase__WEBPACK_IMPORTED_MODULE_4__["ClonedEventType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ValidationErrorType", function() { return _ms_odsp_utilities_lib_logging_EventBase__WEBPACK_IMPORTED_MODULE_4__["ValidationErrorType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AccountType", function() { return _ms_odsp_utilities_lib_logging_EventBase__WEBPACK_IMPORTED_MODULE_4__["AccountType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addEventProps", function() { return _ms_odsp_utilities_lib_logging_EventBase__WEBPACK_IMPORTED_MODULE_4__["addEventProps"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EventBase", function() { return _ms_odsp_utilities_lib_logging_EventBase__WEBPACK_IMPORTED_MODULE_4__["EventBase"]; });

/* harmony import */ var _ms_odsp_utilities_lib_alternativeUrls_SPAlternativeUrls__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ms/odsp-utilities/lib/alternativeUrls/SPAlternativeUrls */ "vmDi");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "SPAlternativeUrls", function() { return _ms_odsp_utilities_lib_alternativeUrls_SPAlternativeUrls__WEBPACK_IMPORTED_MODULE_5__; });
/* harmony import */ var _ms_odsp_utilities_lib_aria_AriaLoggerCore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ms/odsp-utilities/lib/aria/AriaLoggerCore */ "V87q");
/* empty/unused harmony star reexport *//* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AriaLoggerCore", function() { return _ms_odsp_utilities_lib_aria_AriaLoggerCore__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _ms_odsp_utilities_lib_logging_ABExperiment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ms/odsp-utilities/lib/logging/ABExperiment */ "70sN");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TargetType", function() { return _ms_odsp_utilities_lib_logging_ABExperiment__WEBPACK_IMPORTED_MODULE_7__["TargetType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ABExpHash", function() { return _ms_odsp_utilities_lib_logging_ABExperiment__WEBPACK_IMPORTED_MODULE_7__["ABExpHash"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EXPERIMENTS_WITH_V1_HASHING", function() { return _ms_odsp_utilities_lib_logging_ABExperiment__WEBPACK_IMPORTED_MODULE_7__["EXPERIMENTS_WITH_V1_HASHING"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ABExperiment", function() { return _ms_odsp_utilities_lib_logging_ABExperiment__WEBPACK_IMPORTED_MODULE_7__["ABExperiment"]; });

/* harmony import */ var _ms_odsp_utilities_lib_logging_rumone_RUMOneLogger__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ms/odsp-utilities/lib/logging/rumone/RUMOneLogger */ "UKDt");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "APICallHostType", function() { return _ms_odsp_utilities_lib_logging_rumone_RUMOneLogger__WEBPACK_IMPORTED_MODULE_8__["APICallHostType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "APICallPerformanceData", function() { return _ms_odsp_utilities_lib_logging_rumone_RUMOneLogger__WEBPACK_IMPORTED_MODULE_8__["APICallPerformanceData"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ControlPerformanceData", function() { return _ms_odsp_utilities_lib_logging_rumone_RUMOneLogger__WEBPACK_IMPORTED_MODULE_8__["ControlPerformanceData"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RUMOneLogger", function() { return _ms_odsp_utilities_lib_logging_rumone_RUMOneLogger__WEBPACK_IMPORTED_MODULE_8__["RUMOneLogger"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RumOneLogger", function() { return _ms_odsp_utilities_lib_logging_rumone_RUMOneLogger__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _ms_sp_experiments_lib_flightsonrails_SPExperiment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ms/sp-experiments/lib/flightsonrails/SPExperiment */ "D8Gs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getVariantAndLogExposure", function() { return _ms_sp_experiments_lib_flightsonrails_SPExperiment__WEBPACK_IMPORTED_MODULE_9__["getVariantAndLogExposure"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getExperiment", function() { return _ms_sp_experiments_lib_flightsonrails_SPExperiment__WEBPACK_IMPORTED_MODULE_9__["getExperiment"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_getVariantWithoutLogging", function() { return _ms_sp_experiments_lib_flightsonrails_SPExperiment__WEBPACK_IMPORTED_MODULE_9__["_getVariantWithoutLogging"]; });

/* harmony import */ var _ms_odsp_utilities_lib_features_FeatureOverrides__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ms/odsp-utilities/lib/features/FeatureOverrides */ "iVgB");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ENABLE_PARAM_KEY", function() { return _ms_odsp_utilities_lib_features_FeatureOverrides__WEBPACK_IMPORTED_MODULE_10__["ENABLE_PARAM_KEY"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DISABLE_PARAM_KEY", function() { return _ms_odsp_utilities_lib_features_FeatureOverrides__WEBPACK_IMPORTED_MODULE_10__["DISABLE_PARAM_KEY"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FeatureOverrides", function() { return _ms_odsp_utilities_lib_features_FeatureOverrides__WEBPACK_IMPORTED_MODULE_10__["default"]; });

/* harmony import */ var _ms_odsp_utilities_lib_performance_PerformanceMarker__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ms/odsp-utilities/lib/performance/PerformanceMarker */ "HddE");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "PerformanceMarker", function() { return _ms_odsp_utilities_lib_performance_PerformanceMarker__WEBPACK_IMPORTED_MODULE_11__; });
/* harmony import */ var _ms_odsp_utilities_lib_navigation_AddressParser__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ms/odsp-utilities/lib/navigation/AddressParser */ "+7kh");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deserializeQuery", function() { return _ms_odsp_utilities_lib_navigation_AddressParser__WEBPACK_IMPORTED_MODULE_12__["deserializeQuery"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getQueryStringFromUrl", function() { return _ms_odsp_utilities_lib_navigation_AddressParser__WEBPACK_IMPORTED_MODULE_12__["getQueryStringFromUrl"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getUrlWithoutQueryString", function() { return _ms_odsp_utilities_lib_navigation_AddressParser__WEBPACK_IMPORTED_MODULE_12__["getUrlWithoutQueryString"]; });

/* harmony import */ var _ms_odsp_utilities_lib_logging_SingleEventBase__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ms/odsp-utilities/lib/logging/SingleEventBase */ "ruBb");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "SingleEventBase", function() { return _ms_odsp_utilities_lib_logging_SingleEventBase__WEBPACK_IMPORTED_MODULE_13__; });
/* harmony import */ var _ms_odsp_utilities_lib_logging_PairedEventBase__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ms/odsp-utilities/lib/logging/PairedEventBase */ "g/c1");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "PairedEventBase", function() { return _ms_odsp_utilities_lib_logging_PairedEventBase__WEBPACK_IMPORTED_MODULE_14__; });
/* harmony import */ var _ms_odsp_utilities_lib_xhr_XHR__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ms/odsp-utilities/lib/xhr/XHR */ "KaEC");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "XHRStatus", function() { return _ms_odsp_utilities_lib_xhr_XHR__WEBPACK_IMPORTED_MODULE_15__["XHRStatus"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "XHR", function() { return _ms_odsp_utilities_lib_xhr_XHR__WEBPACK_IMPORTED_MODULE_15__["default"]; });

/* harmony import */ var _ms_odsp_utilities_lib_browser_PlatformDetection__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ms/odsp-utilities/lib/browser/PlatformDetection */ "dv0D");
/* empty/unused harmony star reexport *//* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PlatformDetection", function() { return _ms_odsp_utilities_lib_browser_PlatformDetection__WEBPACK_IMPORTED_MODULE_16__["default"]; });

/* harmony import */ var _ms_odsp_utilities_lib_string_StringHelper__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ms/odsp-utilities/lib/string/StringHelper */ "BY+f");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "StringHelper", function() { return _ms_odsp_utilities_lib_string_StringHelper__WEBPACK_IMPORTED_MODULE_17__; });
/* harmony import */ var _ms_odsp_utilities_lib_logging_events_ResultTypeEnum__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ms/odsp-utilities/lib/logging/events/ResultTypeEnum */ "BgFM");
/* empty/unused harmony star reexport *//* harmony import */ var _ms_odsp_utilities_lib_object_ObjectUtil__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ms/odsp-utilities/lib/object/ObjectUtil */ "Nsau");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deepCopy", function() { return _ms_odsp_utilities_lib_object_ObjectUtil__WEBPACK_IMPORTED_MODULE_19__["deepCopy"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deepCompare", function() { return _ms_odsp_utilities_lib_object_ObjectUtil__WEBPACK_IMPORTED_MODULE_19__["deepCompare"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "safeSerialize", function() { return _ms_odsp_utilities_lib_object_ObjectUtil__WEBPACK_IMPORTED_MODULE_19__["safeSerialize"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "extend", function() { return _ms_odsp_utilities_lib_object_ObjectUtil__WEBPACK_IMPORTED_MODULE_19__["extend"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_DELIMITER", function() { return _ms_odsp_utilities_lib_object_ObjectUtil__WEBPACK_IMPORTED_MODULE_19__["DEFAULT_DELIMITER"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KEYVALUE_DELIMITER", function() { return _ms_odsp_utilities_lib_object_ObjectUtil__WEBPACK_IMPORTED_MODULE_19__["KEYVALUE_DELIMITER"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "serialize", function() { return _ms_odsp_utilities_lib_object_ObjectUtil__WEBPACK_IMPORTED_MODULE_19__["serialize"]; });

/* harmony import */ var _ms_odsp_utilities_lib_locale_Locale__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ms/odsp-utilities/lib/locale/Locale */ "1hLk");
/* empty/unused harmony star reexport *//* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Locale", function() { return _ms_odsp_utilities_lib_locale_Locale__WEBPACK_IMPORTED_MODULE_20__["default"]; });

/* harmony import */ var _ms_odsp_utilities_lib_logging_Manager__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @ms/odsp-utilities/lib/logging/Manager */ "QuA1");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createManager", function() { return _ms_odsp_utilities_lib_logging_Manager__WEBPACK_IMPORTED_MODULE_21__["createManager"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Manager", function() { return _ms_odsp_utilities_lib_logging_Manager__WEBPACK_IMPORTED_MODULE_21__["default"]; });

/* harmony import */ var _ms_odsp_utilities_lib_uri_Uri__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @ms/odsp-utilities/lib/uri/Uri */ "I5DX");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UriPartial", function() { return _ms_odsp_utilities_lib_uri_Uri__WEBPACK_IMPORTED_MODULE_22__["UriPartial"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Uri", function() { return _ms_odsp_utilities_lib_uri_Uri__WEBPACK_IMPORTED_MODULE_22__["default"]; });

/* harmony import */ var _ms_odsp_utilities_lib_models_store_DataStoreCachingType__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @ms/odsp-utilities/lib/models/store/DataStoreCachingType */ "EjJ3");
/* empty/unused harmony star reexport *//* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DataStoreCachingType", function() { return _ms_odsp_utilities_lib_models_store_DataStoreCachingType__WEBPACK_IMPORTED_MODULE_23__["default"]; });

/* harmony import */ var _ms_odsp_utilities_lib_models_store_BaseDataStore__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @ms/odsp-utilities/lib/models/store/BaseDataStore */ "18dJ");
/* empty/unused harmony star reexport *//* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DataStore", function() { return _ms_odsp_utilities_lib_models_store_BaseDataStore__WEBPACK_IMPORTED_MODULE_24__["default"]; });

/* harmony import */ var _ms_odsp_utilities_lib_events_EventGroup__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @ms/odsp-utilities/lib/events/EventGroup */ "Oa+Z");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EventGroup", function() { return _ms_odsp_utilities_lib_events_EventGroup__WEBPACK_IMPORTED_MODULE_25__["EventGroup"]; });

/* harmony import */ var _ms_odsp_utilities_lib_logging_ErrorHelper__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @ms/odsp-utilities/lib/logging/ErrorHelper */ "lmjA");
/* empty/unused harmony star reexport *//* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OdspErrorHelper", function() { return _ms_odsp_utilities_lib_logging_ErrorHelper__WEBPACK_IMPORTED_MODULE_26__["default"]; });

/* harmony import */ var _ms_odsp_utilities_lib_icons_ItemType__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @ms/odsp-utilities/lib/icons/ItemType */ "FAc7");
/* empty/unused harmony star reexport *//* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ItemType", function() { return _ms_odsp_utilities_lib_icons_ItemType__WEBPACK_IMPORTED_MODULE_27__["default"]; });

/* harmony import */ var _ms_odsp_utilities_lib_async_Promise__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @ms/odsp-utilities/lib/async/Promise */ "7Ihg");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SignalPromise", function() { return _ms_odsp_utilities_lib_async_Promise__WEBPACK_IMPORTED_MODULE_28__["SignalPromise"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CancelablePromise", function() { return _ms_odsp_utilities_lib_async_Promise__WEBPACK_IMPORTED_MODULE_28__["CancelablePromise"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Promise", function() { return _ms_odsp_utilities_lib_async_Promise__WEBPACK_IMPORTED_MODULE_28__["default"]; });

/* harmony import */ var _ms_odsp_utilities_lib_async_Async__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @ms/odsp-utilities/lib/async/Async */ "wzyn");
/* empty/unused harmony star reexport *//* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Async", function() { return _ms_odsp_utilities_lib_async_Async__WEBPACK_IMPORTED_MODULE_29__["default"]; });

/* harmony import */ var _ms_odsp_utilities_lib_killswitch_Killswitch__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @ms/odsp-utilities/lib/killswitch/Killswitch */ "QUgr");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Killswitch", function() { return _ms_odsp_utilities_lib_killswitch_Killswitch__WEBPACK_IMPORTED_MODULE_30__["Killswitch"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getKillSwitch", function() { return _ms_odsp_utilities_lib_killswitch_Killswitch__WEBPACK_IMPORTED_MODULE_30__["getKillSwitch"]; });

/* harmony import */ var _ms_odsp_utilities_lib_guid_Guid__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @ms/odsp-utilities/lib/guid/Guid */ "vo05");
/* empty/unused harmony star reexport *//* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Guid", function() { return _ms_odsp_utilities_lib_guid_Guid__WEBPACK_IMPORTED_MODULE_31__["default"]; });

/* harmony import */ var _ms_odsp_utilities_lib_features_Features__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @ms/odsp-utilities/lib/features/Features */ "8G1T");
/* empty/unused harmony star reexport *//* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Features", function() { return _ms_odsp_utilities_lib_features_Features__WEBPACK_IMPORTED_MODULE_32__["default"]; });

/* harmony import */ var _ms_odsp_datasources_lib_dataSources_base_DataRequestor__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @ms/odsp-datasources/lib/dataSources/base/DataRequestor */ "PayJ");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getSyncTelemetryHandler", function() { return _ms_odsp_datasources_lib_dataSources_base_DataRequestor__WEBPACK_IMPORTED_MODULE_33__["getSyncTelemetryHandler"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isQosEndSchemaOverride", function() { return _ms_odsp_datasources_lib_dataSources_base_DataRequestor__WEBPACK_IMPORTED_MODULE_33__["isQosEndSchemaOverride"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DataRequestor", function() { return _ms_odsp_datasources_lib_dataSources_base_DataRequestor__WEBPACK_IMPORTED_MODULE_33__["default"]; });

/**
 * [YOUR SUMMARY GOES HERE.]
 *
 * @remarks
 * If you are using API Extractor for this library, the documentation in this comment
 * will be used for the entire package.
 *
 * @packagedocumentation
 */
// sp-telemetry















// theme bundle





















// sp-search-common


// sp-suite-nav





// sp-teams-lib




// application-base









// other entries from odsp-datasources:
/*
@internal
*/

/*
@internal
*/

// Don't export ServerConnection or ServerData unless they wind up getting used extensively
// elsewhere.  Currently including them results in a net code-gain in all assemblies, and one
// unnamed chunk in lists get smaller.


/***/ }),

/***/ "n0/4":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-datasources@45.13.10_e509c819ab980023b76e5746ec0fc9e2/node_modules/@ms/odsp-datasources/lib/dataSources/base/ServerConnection.js ***!
  \*************************************************************************************************************************************************************************************************/
/*! exports provided: ServerConnection, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServerConnection", function() { return ServerConnection; });
/* harmony import */ var _ms_odsp_utilities_lib_uri_Uri__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ms/odsp-utilities/lib/uri/Uri */ "I5DX");
/* harmony import */ var _ms_odsp_utilities_lib_scope_Scope__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ms/odsp-utilities/lib/scope/Scope */ "ZjtH");
/* harmony import */ var _ms_odsp_utilities_lib_events_EventGroup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ms/odsp-utilities/lib/events/EventGroup */ "Oa+Z");
/* harmony import */ var _ms_odsp_utilities_lib_async_Promise__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ms/odsp-utilities/lib/async/Promise */ "7Ihg");
/* harmony import */ var _ms_utilities_error_lib_ApiError__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ms/utilities-error/lib/ApiError */ "6e34");
/* harmony import */ var _ServerData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ServerData */ "G2nw");
/* harmony import */ var _ApiErrorCodes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ApiErrorCodes */ "uD5U");







// Seconds subtracted from request digest interval to compensate for client-server delay
var CLIENT_SERVER_BUFFER = 60;
function _isXhrAborted(xhr) {
    return !!xhr && xhr.isCancelled;
}
function _hasConnection(xhr) {
    try {
        // status isn't necessarily valid unless the readyState is true.
        if (xhr.readyState === 4 && (typeof xhr.status === 'undefined' || xhr.status === 0)) {
            return false;
        }
    }
    catch (e) {
        return false;
    }
    return true;
}
var ServerConnection = /** @class */ (function () {
    function ServerConnection(params) {
        if (params === void 0) { params = {}; }
        this._scope = new _ms_odsp_utilities_lib_scope_Scope__WEBPACK_IMPORTED_MODULE_1__["default"]();
        this._events = this._scope.attach(new _ms_odsp_utilities_lib_events_EventGroup__WEBPACK_IMPORTED_MODULE_2__["default"](this));
        // If the absolute URL is provided, it will be used for most requests.
        var webAbsoluteUrl = params.webAbsoluteUrl || params.webUrl;
        // The server-relative URL is used for caching request digests.
        // If it's not provided, try and calculate it from the absolute URL.
        this._webServerRelativeUrl =
            params.webServerRelativeUrl || (webAbsoluteUrl && new _ms_odsp_utilities_lib_uri_Uri__WEBPACK_IMPORTED_MODULE_0__["default"](webAbsoluteUrl).getPath());
        if (this._webServerRelativeUrl === '/') {
            this._webServerRelativeUrl = '';
        }
        if (webAbsoluteUrl) {
            this._webAbsoluteUrl = webAbsoluteUrl;
            this._alwaysGetDigest = true;
        }
        else {
            this._alwaysGetDigest = false;
        }
        this._needsRequestDigest = params.needsRequestDigest !== false;
        if (this._needsRequestDigest) {
            this._tryLoadDigest(params.formDigest);
        }
        this._requestCanaryForAuth = false;
        this._engagement = params.engagement;
        this._operationName = params.operationName;
    }
    ServerConnection._isValidFormDigest = function (formDigest) {
        // Value of serverTime is same as what comes as part of formDigestValue
        // but is in locale neutral ISO 8601 format. So it will get correctly
        // parsed by Date class irrespective of client locale.
        // serverTime is accurate to the order of ms, while DateTime which comes
        // as part of formDigestValue is trimmed to order of seconds. Subtract
        // 60 s from formDigestTimeoutSeconds to avoid any timing errors b/w
        // server and client.
        return (formDigest &&
            formDigest.serverTime &&
            Date.now() - new Date(formDigest.serverTime).getTime() <
                (formDigest.formDigestTimeoutSeconds - CLIENT_SERVER_BUFFER) * 1000 /*convert to ms*/);
    };
    ServerConnection.prototype.dispose = function () {
        this._scope.dispose();
    };
    ServerConnection.prototype.abort = function () {
        if (this._currentRequest) {
            // Add a custom field to this request object so we can pass the message to the OnReadyStateChange function that THIS specific XHR has been canceled!
            //  It's unclear to me is this is really needed.  Some documentation I have ready states 'Calling abort resets the object; the onreadystatechange
            //  event handler is removed, and readyState is changed to 0 (uninitialized).'  If this is the case, then the onreadystatechange should never be
            //  called and if it is then the state of the request is set to 0, which I handle below.
            // For completeness only I leave this here.  (Belt and suspenders).
            var request = this._currentRequest;
            request.isCancelled = true;
            // Now abort this XHR
            request.abort();
            this._currentRequest = undefined;
        }
    };
    ServerConnection.prototype.isRequestActive = function () {
        return !!this._currentRequest;
    };
    ServerConnection.prototype.getServerDataFromUrl = function (options) {
        var _this = this;
        var strUrl = options.url, successCallback = options.successCallback, failureCallback = options.failureCallback, uploadProgressCallback = options.uploadProgressCallback, additionalPostData = options.additionalPostData, _a = options.isRest, fRest = _a === void 0 ? true : _a, _b = options.method, method = _b === void 0 ? 'POST' : _b, withCredentials = options.withCredentials, additionalHeaders = options.additionalHeaders, contentType = options.contentType, noRedirect = options.noRedirect, responseType = options.responseType, _c = options.needsRequestDigest, needsRequestDigest = _c === void 0 ? this._needsRequestDigest : _c;
        var startTime = new Date().toISOString();
        var req = new XMLHttpRequest();
        req.open(method, strUrl, true);
        if (typeof withCredentials === 'boolean') {
            req.withCredentials = withCredentials;
        }
        if (responseType) {
            req.responseType = responseType;
        }
        // Set the Content Type
        if (contentType) {
            req.setRequestHeader('Content-Type', contentType);
        }
        else {
            if (fRest) {
                req.setRequestHeader('Content-Type', 'application/json;odata=verbose');
            }
            else {
                req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
            }
        }
        var acceptHeaderSpecified = false;
        if (additionalHeaders) {
            for (var headerKey in additionalHeaders) {
                if (headerKey) {
                    req.setRequestHeader(headerKey, additionalHeaders[headerKey]);
                    if (headerKey.toLowerCase() === 'accept') {
                        acceptHeaderSpecified = true;
                    }
                }
            }
        }
        if (!acceptHeaderSpecified) {
            req.setRequestHeader('accept', 'application/json;odata=verbose');
        }
        // Remember this request so we can tell if we have a request in flight and so we can cancel it if needed.
        this._currentRequest = req;
        var onRequestDigestReady = function (requestDigest) {
            if (needsRequestDigest && requestDigest) {
                req.setRequestHeader('x-requestdigest', requestDigest);
            }
            _this._events.on(req, 'readystatechange', function () {
                _this._onReadyStateChange(req, strUrl, successCallback, failureCallback, noRedirect, startTime);
            });
            if (uploadProgressCallback && req.upload) {
                _this._events.on(req.upload, 'progress', function (event) {
                    uploadProgressCallback(event);
                });
            }
            req.send(additionalPostData);
        };
        if (needsRequestDigest) {
            this._ensureRequestDigest(onRequestDigestReady, failureCallback);
        }
        else {
            onRequestDigestReady();
        }
    };
    ServerConnection.prototype.ensureRequestDigest = function (callback, failureCallback) {
        this._ensureRequestDigest(callback, failureCallback);
    };
    ServerConnection.prototype._ensureRequestDigest = function (callback, failureCallback) {
        // if requestDigest is available and not expired then use it, otherwise get a new one
        var currentDigest = ServerConnection._formDigests[this._webServerRelativeUrl];
        if (!this._alwaysGetDigest && ServerConnection._isValidFormDigest(currentDigest)) {
            callback(currentDigest.formDigestValue);
        }
        else {
            this._ensureRequestDigestWorker(callback, failureCallback);
        }
    };
    ServerConnection.prototype._ensureRequestDigestWorker = function (callback, failureCallback) {
        var _this = this;
        var formDigestRequestTime = new Date();
        var serverConnection = new ServerConnection({
            needsRequestDigest: false,
            webServerRelativeUrl: this._webServerRelativeUrl,
            webUrl: undefined
        });
        if (!callback) {
            // no callback only means we're doing auth only request.
            serverConnection._requestCanaryForAuth = true;
        }
        var webUrl = this._webAbsoluteUrl || this._webServerRelativeUrl;
        if (typeof webUrl === 'string') {
            // If static promise does not exist, create it
            if (!ServerConnection._requestDigestPromise) {
                ServerConnection._requestDigestPromise = new _ms_odsp_utilities_lib_async_Promise__WEBPACK_IMPORTED_MODULE_3__["default"](function (complete, e) {
                    var onDataSuccess = function (serverData) {
                        var responseText = serverData.getResponseText();
                        var jsonObj = JSON.parse(responseText);
                        var requestDigest = jsonObj.d.GetContextWebInformation;
                        ServerConnection._formDigests[_this._webServerRelativeUrl] = {
                            serverTime: formDigestRequestTime.toISOString(),
                            formDigestValue: requestDigest.FormDigestValue,
                            formDigestTimeoutSeconds: requestDigest.FormDigestTimeoutSeconds - CLIENT_SERVER_BUFFER,
                            updateFormDigestPageLoaded: new Date()
                        };
                        complete(ServerConnection._formDigests[_this._webServerRelativeUrl].formDigestValue);
                        ServerConnection._requestDigestPromise = undefined;
                    };
                    var onDataError = function (serverData, error) {
                        if (callback) {
                            callback(undefined);
                        }
                        else if (failureCallback) {
                            failureCallback(serverData, error);
                        }
                        e(undefined);
                        ServerConnection._requestDigestPromise = undefined;
                    };
                    serverConnection.getServerDataFromUrl({
                        url: _ms_odsp_utilities_lib_uri_Uri__WEBPACK_IMPORTED_MODULE_0__["default"].concatenate(webUrl, '/_api/contextinfo'),
                        successCallback: onDataSuccess,
                        failureCallback: onDataError,
                        method: 'POST',
                        noRedirect: !!failureCallback
                    });
                });
            }
            ServerConnection._requestDigestPromise.then(function (requestDigest) {
                if (callback) {
                    callback(requestDigest);
                }
                return requestDigest;
            });
        }
        else if (failureCallback) {
            failureCallback(undefined, new _ms_utilities_error_lib_ApiError__WEBPACK_IMPORTED_MODULE_4__["ApiError"]({
                code: _ApiErrorCodes__WEBPACK_IMPORTED_MODULE_6__["missingWebForDigestAuth"],
                isExpected: false
            }));
        }
    };
    ServerConnection.prototype._onReadyStateChange = function (req, strUrl, successCallback, failureCallback, noRedirect, startTime) {
        // Don't do anything unless the State is 'Ready' and this request has not yet been aborted.
        if (req.readyState !== 4) {
            return;
        }
        // undefined out the request that this object is holding onto.  This is the flag to let us know that we no longer have an active request.
        this._currentRequest = undefined;
        this._events.off(req);
        if (req.upload) {
            this._events.off(req.upload);
        }
        if (_isXhrAborted(req)) {
            failureCallback(undefined, new _ms_utilities_error_lib_ApiError__WEBPACK_IMPORTED_MODULE_4__["ApiError"]({
                code: _ApiErrorCodes__WEBPACK_IMPORTED_MODULE_6__["requestAborted"],
                isExpected: true
            }));
        }
        else if (!_hasConnection(req)) {
            failureCallback(undefined, new _ms_utilities_error_lib_ApiError__WEBPACK_IMPORTED_MODULE_4__["ApiError"]({
                code: _ApiErrorCodes__WEBPACK_IMPORTED_MODULE_6__["noConnection"],
                isExpected: true
            }));
        }
        else {
            var serverData_1 = new _ServerData__WEBPACK_IMPORTED_MODULE_5__["default"](req, strUrl, {
                webAbsoluteUrl: this._webAbsoluteUrl || this._webServerRelativeUrl,
                isCanaryRequest: this._requestCanaryForAuth
            });
            var status_1 = serverData_1.getStatus();
            var shouldRedirectToErrorCustomPromptLocation = !noRedirect && serverData_1.shouldRedirectToErrorCustomPromptLocation();
            if (this._requestCanaryForAuth) {
                this._requestCanaryForAuth = false;
                if (status_1 === 403) {
                    var redirectUrl = serverData_1.getRedirectLoginPageUrl();
                    try {
                        if (shouldRedirectToErrorCustomPromptLocation) {
                            window.location.href = serverData_1.getRedirectToErrorCustomPromptLocation();
                        }
                        else {
                            failureCallback(serverData_1);
                        }
                    }
                    catch (e) {
                        // ignore
                    }
                    if (redirectUrl && !noRedirect) {
                        window.location.href = redirectUrl;
                    }
                }
                else {
                    var redirectUrl = serverData_1.getAccessDeniedRedirectUrl();
                    // we got form digest, so user is authenticated, they just don't have access to call the API requested
                    // let data source know about the error so it get properly accounted
                    try {
                        failureCallback(serverData_1);
                    }
                    catch (e) {
                        // ignore
                    }
                    if (redirectUrl && !noRedirect) {
                        if (this._engagement) {
                            this._engagement.logData({
                                name: 'AccessDeniedRedirect',
                                isIntentional: false,
                                extraData: {
                                    originalOperation: this._operationName || ''
                                }
                            });
                        }
                        window.location.href = redirectUrl;
                    }
                }
                return;
            }
            if (status_1 === 200 || status_1 === 201 || status_1 === 204) {
                // success case
                successCallback(serverData_1);
                return;
            }
            else if (status_1 === 403) {
                // authentication required
                ServerConnection._requestDigestPromise = undefined;
                if (noRedirect) {
                    // call Canary to check if the user has already signed in or not.
                    this._ensureRequestDigestWorker(undefined, function (_, error) { return failureCallback(serverData_1, error); });
                }
                else {
                    if (shouldRedirectToErrorCustomPromptLocation) {
                        window.location.href = serverData_1.getRedirectToErrorCustomPromptLocation();
                    }
                    else {
                        this._ensureRequestDigestWorker(undefined);
                    }
                }
                return;
            }
            else if (status_1 === 401) {
                if (shouldRedirectToErrorCustomPromptLocation) {
                    window.location.href = serverData_1.getRedirectToErrorCustomPromptLocation();
                }
            }
            failureCallback(serverData_1);
        }
    };
    /** Attempts to load or refresh the cached form digest with the params form digest data. */
    ServerConnection.prototype._tryLoadDigest = function (formDigest) {
        if (ServerConnection._isValidFormDigest(formDigest)) {
            ServerConnection._formDigests[this._webServerRelativeUrl] = formDigest;
            return;
        }
        // should start using the params data when:
        // params has valid form digest data and
        // - the cached form digest data is invalid or expired or
        // - the params digest data is fresher that the cached data.
        var cachedFormDigest = ServerConnection._formDigests[this._webServerRelativeUrl];
        if (ServerConnection._isValidFormDigest(formDigest) &&
            (!ServerConnection._isValidFormDigest(cachedFormDigest) ||
                (cachedFormDigest &&
                    new Date(cachedFormDigest.serverTime).getTime() < new Date(formDigest.serverTime).getTime()))) {
            ServerConnection._formDigests[this._webServerRelativeUrl] = formDigest;
        }
    };
    ServerConnection._formDigests = {};
    ServerConnection._requestDigestPromise = undefined;
    return ServerConnection;
}());

/* harmony default export */ __webpack_exports__["default"] = (ServerConnection);
//# sourceMappingURL=ServerConnection.js.map

/***/ }),

/***/ "nF3k":
/*!******************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/sp-resource-path@1.0.0/node_modules/@ms/sp-resource-path/lib/SPResourcePath.js ***!
  \******************************************************************************************************************************************/
/*! exports provided: SPResourcePathFormat, SPResourcePath */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SPResourcePathFormat", function() { return SPResourcePathFormat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SPResourcePath", function() { return SPResourcePath; });
/**
 * @public
 */
var SPResourcePathFormat;
(function (SPResourcePathFormat) {
    SPResourcePathFormat[SPResourcePathFormat["absolute"] = 0] = "absolute";
    SPResourcePathFormat[SPResourcePathFormat["relative"] = 1] = "relative";
    SPResourcePathFormat[SPResourcePathFormat["serverRelative"] = 2] = "serverRelative";
})(SPResourcePathFormat || (SPResourcePathFormat = {}));
/**
 * Simplified implementation of a URI parser which does not attempt decoding of segments,
 * handling of query strings, or separation of the fragment. Intended for use on SharePoint
 * Resource Paths or other URL-like entities which may not actually conform to the URL
 * specification, but may be used for simple transformations of URLs.
 *
 * This class makes several assumptions about the format of input URLs:
 * - Absolute URLs begin with '<scheme>://<host>'
 * - Relative URLs being with '/'
 * - URLs never have a trailing '/'
 *
 * @public
 */
var SPResourcePath = /** @class */ (function () {
    /**
     * Creates an instance of SPResourcePath.
     *
     * @param value - A string representing a well-formed, decoded SharePoint resource path.
     */
    function SPResourcePath(value) {
        if (value === void 0) { value = ''; }
        var rootDelimeter = '//';
        var indexOfRootDelimeter = value.indexOf(rootDelimeter);
        var indexOfPathDelimeter = value.indexOf('/');
        // The root delimeter is the first instance of '//', unless preceded by a lone '/'
        var endIndexOfRootDelimeter = indexOfRootDelimeter > -1 && indexOfRootDelimeter <= indexOfPathDelimeter
            ? indexOfRootDelimeter + rootDelimeter.length
            : -1;
        var authority = getAuthority(value, endIndexOfRootDelimeter);
        var domain = authority && authority.slice(endIndexOfRootDelimeter);
        // By definition, everything after the authority is the path
        var path = value.slice(authority.length);
        var format = authority
            ? SPResourcePathFormat.absolute
            : path[0] === '/'
                ? SPResourcePathFormat.serverRelative
                : SPResourcePathFormat.relative;
        var segments = path.split('/');
        this.authority = authority;
        this.domain = domain;
        this.format = format;
        this.path = path;
        this.segments = segments;
        this.value = value;
    }
    return SPResourcePath;
}());

function getAuthority(value, endIndexOfRootDelimeter) {
    if (endIndexOfRootDelimeter > -1) {
        var indexOfNextSegment = value.indexOf('/', endIndexOfRootDelimeter);
        if (indexOfNextSegment > -1) {
            return value.slice(0, indexOfNextSegment);
        }
        else {
            return value;
        }
    }
    else {
        return '';
    }
}
//# sourceMappingURL=SPResourcePath.js.map

/***/ }),

/***/ "nXow":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-utilities@29.7.9_5d977624104b06c7bcaa2de974ff51f1/node_modules/@ms/odsp-utilities/lib/logging/RequestDurationLoggingHelper.js ***!
  \**********************************************************************************************************************************************************************************************/
/*! exports provided: getRequestEntryDurationMetrics */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRequestEntryDurationMetrics", function() { return getRequestEntryDurationMetrics; });
/* harmony import */ var _uri_SimpleUri__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../uri/SimpleUri */ "mbD+");
// OneDrive:IgnoreCodeCoverage

/**
 * This function returns the request duration recording by the browser via window.performance.getEntries().
 * @param url
 * @param executeTimeStamp
 * @param overrideWindow allows passing in a override window object, i.e. iframe window
 */
function getRequestEntryDurationMetrics(url, requestPerformanceStartTime, overrideWindow) {
    var currentWindow = overrideWindow || window;
    if (!currentWindow || !currentWindow.performance || !url || !requestPerformanceStartTime) {
        return { duration: -1 };
    }
    try {
        var entries = performance.getEntriesByType('resource');
        // If targetOrigin is missing it means the url is relative. In order to compare urls with the ones we get from performance.getEntries()
        // we need to have a complete url, so pre-pend current origin to relative url.
        var targetOrigin = new _uri_SimpleUri__WEBPACK_IMPORTED_MODULE_0__["SimpleUri"](url).authority;
        if (!targetOrigin) {
            var currentOrigin = currentWindow.location && new _uri_SimpleUri__WEBPACK_IMPORTED_MODULE_0__["SimpleUri"](currentWindow.location.href).authority;
            url = currentOrigin + url;
        }
        var entry = void 0;
        // Performance entries are in chronological order of request starttime, we look back from end of the list to start from most recent entry.
        for (var i = entries.length - 1; i >= 0; i--) {
            var currentEntry = entries[i];
            // We want to find the request record that was made most-immediately after client initiated the request
            if (currentEntry.startTime < requestPerformanceStartTime) {
                break;
            }
            // Filter to entry that matches the request url
            if (decodeURIComponent(currentEntry.name) === decodeURIComponent(url)) {
                entry = currentEntry;
            }
        }
        if (entry) {
            var pickedMetrics = (function (_a) {
                var connectEnd = _a.connectEnd, connectStart = _a.connectStart, decodedBodySize = _a.decodedBodySize, domainLookupend = _a.domainLookupend, domainLookupStart = _a.domainLookupStart, _b = _a.duration, duration = _b === void 0 ? -1 : _b, // Default to -1 if not available to indicate error
                encodedBodySize = _a.encodedBodySize, fetchStart = _a.fetchStart, nextHopProtocol = _a.nextHopProtocol, redirectEnd = _a.redirectEnd, redirectStart = _a.redirectStart, requestStart = _a.requestStart, responseEnd = _a.responseEnd, responseStart = _a.responseStart, secureConnectionStart = _a.secureConnectionStart, startTime = _a.startTime, transferSize = _a.transferSize, workerStart = _a.workerStart;
                return ({
                    connectEnd: connectEnd,
                    connectStart: connectStart,
                    decodedBodySize: decodedBodySize,
                    domainLookupend: domainLookupend,
                    domainLookupStart: domainLookupStart,
                    duration: duration,
                    encodedBodySize: encodedBodySize,
                    fetchStart: fetchStart,
                    nextHopProtocol: nextHopProtocol,
                    redirectEnd: redirectEnd,
                    redirectStart: redirectStart,
                    requestStart: requestStart,
                    responseEnd: responseEnd,
                    responseStart: responseStart,
                    secureConnectionStart: secureConnectionStart,
                    startTime: startTime,
                    transferSize: transferSize,
                    workerStart: workerStart
                });
            })(entry);
            return pickedMetrics;
        }
        else {
            return { duration: -1 /* Default to -1 if not available to indicate error */ };
        }
    }
    catch (ex) {
        return { duration: -1 /* Default to -1 if not available to indicate error */ };
    }
}
//# sourceMappingURL=RequestDurationLoggingHelper.js.map

/***/ }),

/***/ "pL7Y":
/*!*****************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/telemetry-manager@1.1.3/node_modules/@ms/telemetry-manager/lib/events/Engagement.event.js ***!
  \*****************************************************************************************************************************************************/
/*! exports provided: Engagement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Engagement", function() { return Engagement; });
/* harmony import */ var _SingleEventBase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../SingleEventBase */ "yb4E");
// OneDrive:IgnoreCodeCoverage

/**
 * @public
 */
var Engagement = Object(_SingleEventBase__WEBPACK_IMPORTED_MODULE_0__["createSingleEvent"])({
    eventName: 'Engagement,',
    shortEventName: 'Engagement'
}, {
    name: {
        isKey: true,
        isPrefixingDisabled: true,
        type: 1 /* String */
    },
    isIntentional: {
        isPrefixingDisabled: true,
        type: 3 /* Boolean */
    },
    scenario: {
        isPrefixingDisabled: true,
        type: 1 /* String */
    },
    location: {
        isPrefixingDisabled: true,
        type: 1 /* String */
    },
    usageType: {
        isPrefixingDisabled: true,
        type: 1 /* String */
    },
    currentPage: {
        isPrefixingDisabled: true,
        type: 1 /* String */
    },
    previousPage: {
        isPrefixingDisabled: true,
        type: 1 /* String */
    },
    experiment: {
        isPrefixingDisabled: true,
        type: 4 /* Object */
    },
    siteId: {
        isPrefixingDisabled: true,
        type: 1 /* String */
    },
    webId: {
        isPrefixingDisabled: true,
        type: 1 /* String */
    },
    listId: {
        isPrefixingDisabled: true,
        type: 1 /* String */
    },
    groupId: {
        isPrefixingDisabled: true,
        type: 1 /* String */
    },
    docId: {
        isPrefixingDisabled: true,
        type: 1 /* String */
    },
    webTemplateId: {
        isPrefixingDisabled: true,
        type: 1 /* String */
    },
    listTemplateId: {
        isPrefixingDisabled: true,
        type: 1 /* String */
    },
    siteType: {
        isPrefixingDisabled: true,
        type: 1 /* String */
    },
    feature: {
        isPrefixingDisabled: true,
        type: 1 /* String */
    },
    component: {
        isPrefixingDisabled: true,
        type: 1 /* String */
    },
    extraData: 4 /* Object */,
    objectType: {
        isPrefixingDisabled: true,
        type: 1 /* String */
    },
    datasource: {
        isPrefixingDisabled: true,
        type: 1 /* String */
    },
    action: {
        isPrefixingDisabled: true,
        type: 1 /* String */
    },
    privacyClassification: {
        isPrefixingDisabled: true,
        type: 1 /* String */
    }
}).withData({
    privacyClassification: "optionalDiagnostic" /* optionalDiagnostic */,
    privacyDataTypes: ['browsingHistory']
});
//# sourceMappingURL=Engagement.event.js.map

/***/ }),

/***/ "pUoS":
/*!**************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-utilities@29.7.9_5d977624104b06c7bcaa2de974ff51f1/node_modules/@ms/odsp-utilities/lib/logging/DataCompletenessInfo.js ***!
  \**************************************************************************************************************************************************************************************/
/*! exports provided: DataCompletenessInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataCompletenessInfo", function() { return DataCompletenessInfo; });
/* harmony import */ var _xhr_XHR__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../xhr/XHR */ "KaEC");
/* harmony import */ var _ErrorHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ErrorHelper */ "lmjA");


var DataCompletenessInfo = /** @class */ (function () {
    function DataCompletenessInfo(context, isSuccess, statusCode, timestamp, events) {
        this._endpointUrl = context.callbackEndpoint.authority + context.callbackEndpoint.path;
        var eventSummary = {};
        if (events) {
            for (var e = 0; e < events.length; ++e) {
                eventSummary[events[e].EventType] = eventSummary[events[e].EventType] + 1 || 1;
            }
        }
        var completenessDataObj = {
            TelemetryTenantId: context.telemetryTenantToken.substring(0, 32),
            AppVersion: context.appVersion,
            EventType: isSuccess,
            StatusCode: statusCode,
            EventCount: events ? events.length : 0,
            Timestamp: timestamp,
            Environment: context.environment || '',
            DatapointSchemaVersion: '1.0',
            TelemetrySource: 'Aria',
            EventSummary: eventSummary,
            Workload: context.workload || '',
            FarmLabel: context.farmLabel || '',
            FarmName: context.farmName || ''
        };
        this._dataCompletenessJson = JSON.stringify(completenessDataObj);
    }
    Object.defineProperty(DataCompletenessInfo.prototype, "endpointUrl", {
        get: function () {
            return this._endpointUrl;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataCompletenessInfo.prototype, "dataCompletenessJson", {
        get: function () {
            return this._dataCompletenessJson;
        },
        enumerable: true,
        configurable: true
    });
    DataCompletenessInfo.prototype.send = function () {
        var xhr = new _xhr_XHR__WEBPACK_IMPORTED_MODULE_0__["default"]({
            method: 'POST',
            url: this._endpointUrl,
            json: this._dataCompletenessJson,
            requestTimeoutInMS: 1000
        });
        xhr.start(function (xhr, status) {
            // success, no op
        }, function (xhr, statusCode, timeout) {
            if (true) {
                // Display errors if the completeness info couldn't be sent
                _ErrorHelper__WEBPACK_IMPORTED_MODULE_1__["default"].log(new Error("DataCompletenessInfo failed to be sent with status code " + statusCode));
            }
        });
    };
    return DataCompletenessInfo;
}());

//# sourceMappingURL=DataCompletenessInfo.js.map

/***/ }),

/***/ "pXMM":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-utilities@29.7.9_5d977624104b06c7bcaa2de974ff51f1/node_modules/@ms/odsp-utilities/lib/logging/events/RUMOneDataUpload.event.js ***!
  \***********************************************************************************************************************************************************************************************/
/*! exports provided: RUMOneDataUpload, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ms_telemetry_manager_lib_events_RUMOneDataUpload_event__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ms/telemetry-manager/lib/events/RUMOneDataUpload.event */ "++rU");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RUMOneDataUpload", function() { return _ms_telemetry_manager_lib_events_RUMOneDataUpload_event__WEBPACK_IMPORTED_MODULE_0__["RUMOneDataUpload"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _ms_telemetry_manager_lib_events_RUMOneDataUpload_event__WEBPACK_IMPORTED_MODULE_0__["RUMOneDataUpload"]; });

// OneDrive:IgnoreCodeCoverage


//# sourceMappingURL=RUMOneDataUpload.event.js.map

/***/ }),

/***/ "q/PO":
/*!******************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/sp-experiments@2.0.213_e509c819ab980023b76e5746ec0fc9e2/node_modules/@ms/sp-experiments/lib/flightsonrails/Experiment.event.js ***!
  \******************************************************************************************************************************************************************************************/
/*! exports provided: Experiment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Experiment", function() { return Experiment; });
/* harmony import */ var _ms_odsp_utilities_lib_logging_SingleEventBase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ms/odsp-utilities/lib/logging/SingleEventBase */ "ruBb");
/**
 * @copyright Microsoft Corporation. All rights reserved.
 *
 * @file Contains the data schema for experiment events and the logging callback to send telemetry to Aria.
 * Usage:
 *  import { IExperimentFlightSingleSchema, Experiment } from 'path/to/Experiment.event';
 *  const data: IExperimentFlightSingleSchema = {...};
 *  Experiment.logData(data);
 */

var Experiment = Object(_ms_odsp_utilities_lib_logging_SingleEventBase__WEBPACK_IMPORTED_MODULE_0__["createSingleEvent"])({
    eventName: 'ExperimentFlight,',
    shortEventName: 'ExperimentFlight'
}, {
    experimentId: {
        isPrefixingDisabled: true,
        type: 2 /* Number */
    },
    variant: {
        isPrefixingDisabled: true,
        type: 2 /* Number */
    },
    isAATest: {
        isPrefixingDisabled: true,
        type: 3 /* Boolean */
    },
    isOverride: {
        isPrefixingDisabled: true,
        type: 3 /* Boolean */
    },
    isLoggedAtExposure: {
        isPrefixingDisabled: true,
        type: 3 /* Boolean */
    },
    serverTime: {
        isPrefixingDisabled: true,
        type: 1 /* String */
    }
});
//# sourceMappingURL=Experiment.event.js.map

/***/ }),

/***/ "qJrk":
/*!*****************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/telemetry-manager@1.1.3/node_modules/@ms/telemetry-manager/lib/ErrorHelper.js ***!
  \*****************************************************************************************************************************************/
/*! exports provided: verbose, logError, log, getErrorMessage, isExpectedError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "verbose", function() { return verbose; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logError", function() { return logError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "log", function() { return log; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getErrorMessage", function() { return getErrorMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isExpectedError", function() { return isExpectedError; });
/* harmony import */ var _events_CaughtError_event__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./events/CaughtError.event */ "4nNU");
/* harmony import */ var _events_QosError_event__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./events/QosError.event */ "WOFc");
/* harmony import */ var _events_Verbose_event__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./events/Verbose.event */ "PmmX");
/* harmony import */ var _utilities_CircularBuffer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utilities/CircularBuffer */ "eJPJ");
/* harmony import */ var _ms_utilities_objects_lib_safeSerialize__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ms/utilities-objects/lib/safeSerialize */ "3l1C");





var MAX_VERBOSE_LOGS = 50;
var CANCELED = 'Canceled';
var _verboseLogs = new _utilities_CircularBuffer__WEBPACK_IMPORTED_MODULE_3__["CircularBuffer"](MAX_VERBOSE_LOGS);
/**
 * @public
 */
function verbose(message, eventName) {
    _verboseLogs.push({
        name: eventName,
        message: message
    });
}
/**
 * @public
 */
function logError(error, extraData, qosData) {
    if (!error || _isCanceled(error)) {
        return;
    }
    var message = getErrorMessage(error);
    var stack = error && typeof error === 'object' && 'stack' in error && error.stack ? error.stack : '';
    var schema;
    while ((schema = _verboseLogs.popOldest())) {
        _events_Verbose_event__WEBPACK_IMPORTED_MODULE_2__["Verbose"].logData(schema);
    }
    if (qosData && qosData.eventName) {
        _events_QosError_event__WEBPACK_IMPORTED_MODULE_1__["QosError"].logData({
            name: qosData.eventName,
            resultCode: qosData.resultCode,
            resultType: qosData.resultType,
            extraData: extraData || {},
            message: message,
            stack: stack
        });
    }
    else {
        _events_CaughtError_event__WEBPACK_IMPORTED_MODULE_0__["CaughtError"].logData({
            extraData: extraData || {},
            message: message,
            stack: stack
        });
    }
}
/**
 * @public
 */
function log(error, eventName, resultCode, resultType) {
    logError(error, undefined, { eventName: eventName, resultCode: resultCode, resultType: resultType });
}
/**
 * Extract the error message from the error
 * @public
 */
function getErrorMessage(error) {
    var message = '';
    if (error) {
        if (typeof error === 'object' && 'message' in error) {
            message = error.message;
        }
        else if (typeof error === 'object' && 'description' in error) {
            message = error.description;
        }
        else if (typeof error === 'object') {
            message = Object(_ms_utilities_objects_lib_safeSerialize__WEBPACK_IMPORTED_MODULE_4__["safeSerialize"])(error);
        }
        else if (error.toString) {
            message = error.toString();
        }
    }
    return message;
}
/**
 * @internal Determine if an error is expected by checking for matches in expectedErrors.
 * @param error Error to determine if expected
 * @param expectedErrors An array of known errors to check against
 * @note If the error is already marked as expected, returns true without checking `expectedErrors`
 */
function isExpectedError(error, expectedErrors) {
    if (error.isExpected === true) {
        return true;
    }
    if (error.message === undefined && error.code === undefined) {
        console.error('Error message and code are both undefined. "error" must specify at least message or code');
    }
    var compare = function (a, b) {
        if (!(a && b)) {
            return false;
        }
        return a.localeCompare(b, undefined, { sensitivity: 'base' }) === 0 || a === b;
    };
    var isMatch = false;
    for (var _i = 0, expectedErrors_1 = expectedErrors; _i < expectedErrors_1.length; _i++) {
        var expectedError = expectedErrors_1[_i];
        var errorCodeMatches = compare(expectedError.code, error.code);
        var errorMessageMatches = compare(expectedError.message, error.message);
        if (expectedError.code && error.code && expectedError.message && error.message) {
            isMatch = errorCodeMatches && errorMessageMatches;
        }
        else if (expectedError.code && error.code) {
            isMatch = errorCodeMatches;
        }
        else if (expectedError.message && error.message) {
            isMatch = errorMessageMatches;
        }
        if (isMatch) {
            return isMatch;
        }
    }
    return isMatch;
}
function _isCanceled(error) {
    return (error === CANCELED ||
        (!!error && typeof error === 'object' && 'name' in error && error.name === CANCELED) ||
        (!!error && typeof error === 'object' && 'message' in error && error.message === CANCELED));
}
//# sourceMappingURL=ErrorHelper.js.map

/***/ }),

/***/ "qRNb":
/*!****************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-utilities@29.7.9_5d977624104b06c7bcaa2de974ff51f1/node_modules/@ms/odsp-utilities/lib/logging/events/PageUsage.event.js ***!
  \****************************************************************************************************************************************************************************************/
/*! exports provided: PageUsageLogger */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ms_telemetry_manager_lib_events_PageUsage_event__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ms/telemetry-manager/lib/events/PageUsage.event */ "hNDC");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PageUsageLogger", function() { return _ms_telemetry_manager_lib_events_PageUsage_event__WEBPACK_IMPORTED_MODULE_0__["PageUsageLogger"]; });

// OneDrive:IgnoreCodeCoverage

//# sourceMappingURL=PageUsage.event.js.map

/***/ }),

/***/ "qS3b":
/*!*************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/tti-polyfill@1.1.0/node_modules/@ms/tti-polyfill/lib/index.js ***!
  \*************************************************************************************************************************/
/*! exports provided: restartLongTaskObserver, getFirstConsistentlyInteractive */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFirstConsistentlyInteractive", function() { return getFirstConsistentlyInteractive; });
/* harmony import */ var _firstConsistentlyInteractiveDetector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./firstConsistentlyInteractiveDetector */ "RPSv");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "restartLongTaskObserver", function() { return _firstConsistentlyInteractiveDetector__WEBPACK_IMPORTED_MODULE_0__["restartLongTaskObserver"]; });

// Copyright 2017 Google Inc. All rights reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.


/**
 * Returns a promise that resolves to the first consistently interactive time
 * (in milliseconds) or null if the browser doesn't support the features
 * required for detection.
 * @param {!FirstConsistentlyInteractiveDetectorInit=} opts Configuration
 *     options for the polyfill
 * @return {!Promise} TODO(philipwalton): for some reason the type
 *     {!Promise<(number|null)>} isn't working here, check if this is fixed in
 *     a new version of closure compiler.
 * @public
 */
function getFirstConsistentlyInteractive(opts) {
    if (opts === void 0) { opts = {}; }
    if ('PerformanceLongTaskTiming' in window) {
        var detector = new _firstConsistentlyInteractiveDetector__WEBPACK_IMPORTED_MODULE_0__["FirstConsistentlyInteractiveDetector"](opts);
        return detector.getFirstConsistentlyInteractive();
    }
    else {
        return Promise.resolve(null);
    }
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "qll9":
/*!*****************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/utilities-objects@1.0.0/node_modules/@ms/utilities-objects/lib/deepCompare.js ***!
  \*****************************************************************************************************************************************/
/*! exports provided: deepCompare */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deepCompare", function() { return deepCompare; });
/**
 * Deeply compares the objects by recursively comparing all their properties,
 * objects with circular references are not supported, prototype members and functions are ignored
 */
function deepCompare(objA, objB, equivalent) {
    // keep track of references that have been compared to find circular references while walking down either object
    var refsComparedA = [];
    var refsComparedB = [];
    var compare = equivalent
        ? equivalent
        : function (a, b) {
            return a === b;
        };
    function equals(a, b) {
        // try a simple equality test first
        if (a === b) {
            return true;
        }
        if (a === null || b === null) {
            return false;
        }
        // if both are objects, then further comparison is required
        if (typeof a === 'object' && typeof b === 'object') {
            // perform deep comparison over object's properties
            var aKeys = Object.keys(a).sort();
            var bKeys_1 = Object.keys(b).sort();
            // does one object have a different number of properties?
            if (aKeys.length !== bKeys_1.length) {
                return false;
            }
            var keysMatch = aKeys.every(function (key, index) {
                // key names should match
                if (key !== bKeys_1[index]) {
                    return false;
                }
                else if (typeof a[key] === 'function' || typeof b[key] === 'function') {
                    // skip comparison of function properties
                    return true;
                    // @ts-ignore
                }
                else if (!compare(a[key], b[key])) {
                    // if this is an Object then recursive testing is needed on its properties
                    if (typeof a[key] === 'object') {
                        // if this property was encountered before then we're going in circles, give up
                        // @ts-ignore
                        if (refsComparedA.indexOf(a[key]) !== -1) {
                            throw new Error("Cannot perform DeepCompare() because a circular reference was encountered, object: " + a + ", property: " + key);
                        }
                        // @ts-ignore
                        refsComparedA.push(a[key]);
                        // @ts-ignore
                        if (refsComparedB.indexOf(b[key]) !== -1) {
                            throw new Error("Cannot perform DeepCompare() because a circular reference was encountered, object: " + b + ", property: " + key);
                        }
                        // @ts-ignore
                        refsComparedB.push(b[key]);
                        // recursive compare object's properties
                        if (!equals(a[key], b[key])) {
                            return false;
                        }
                        refsComparedA.pop();
                        refsComparedB.pop();
                        return true;
                    }
                    else {
                        // properties don't match
                        return false;
                    }
                }
                else {
                    return true;
                }
            });
            if (!keysMatch) {
                return false;
            }
        }
        else {
            // parameters aren't equal, and at least one is not an Object
            return false;
        }
        // everything is equal
        return true;
    }
    return equals(objA, objB);
}
//# sourceMappingURL=deepCompare.js.map

/***/ }),

/***/ "reD7":
/*!*************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/tti-polyfill@1.1.0/node_modules/@ms/tti-polyfill/lib/debug.js ***!
  \*************************************************************************************************************************/
/*! exports provided: log */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "log", function() { return log; });
/**
 * Prints a log statement to the console if the DEBUG flag is true.
 * @param {...*} args
 */
// tslint:disable-next-line:no-any
function log() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    if (isTTILoggingEnabled()) {
        // eslint-disable-next-line no-console
        console.log.apply(console, args);
    }
}
function isTTILoggingEnabled() {
    try {
        if ('sessionStorage' in window && window.sessionStorage) {
            var debugStr = window.sessionStorage['enableTTILogging'];
            var debug = debugStr && debugStr.toLowerCase() === 'true';
            return debug && typeof console !== 'undefined' && !!console;
        }
    }
    catch (e) {
        // sessionStorage errors
    }
    return false;
}
//# sourceMappingURL=debug.js.map

/***/ }),

/***/ "ruBb":
/*!*********************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-utilities@29.7.9_5d977624104b06c7bcaa2de974ff51f1/node_modules/@ms/odsp-utilities/lib/logging/SingleEventBase.js ***!
  \*********************************************************************************************************************************************************************************/
/*! exports provided: createSingleEvent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ms_telemetry_manager_lib_SingleEventBase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ms/telemetry-manager/lib/SingleEventBase */ "yb4E");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createSingleEvent", function() { return _ms_telemetry_manager_lib_SingleEventBase__WEBPACK_IMPORTED_MODULE_0__["createSingleEvent"]; });

// OneDrive:CoverageThreshold(0)

//# sourceMappingURL=SingleEventBase.js.map

/***/ }),

/***/ "u0q+":
/*!**************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/utilities-browser@1.0.2_@uifabric+utilities@7.33.2/node_modules/@ms/utilities-browser/lib/PlatformDetection.js ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: getBrowser, getBrowserVersion, getOS, PlatformDetection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBrowser", function() { return getBrowser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBrowserVersion", function() { return getBrowserVersion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOS", function() { return getOS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlatformDetection", function() { return PlatformDetection; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
// OneDrive:IgnoreCodeCoverage

function getBrowser(userAgent) {
    userAgent = userAgent.toLowerCase();
    // We want to figure out which ONE browser the user is most likely on.
    // The order of the checks is important so we're not deceived by (for example)
    // Chrome saying that it's Safari.
    // (Each regular expression captures the version number so we can parse it later.)
    var matchedBrowser;
    function testBrowserVersion(pattern) {
        return (matchedBrowser = RegExp(pattern + "(\\d+)([\\d.]*)").exec(userAgent));
    }
    // IE <= 10 has something like 'MSIE 9' in the user agent.
    // This is also what newer versions do in compatibility mode.
    // IE 11 sample user agent contains:
    // Trident/7.0; other stuff... rv:11.0
    var isIE = testBrowserVersion('msie ') || testBrowserVersion('trident.*rv:');
    var isIE9 = matchedBrowser && matchedBrowser[1] === '9';
    // This is Edge (it pretends to be Chrome and Safari).
    var isEdge = !matchedBrowser && testBrowserVersion('edge/');
    // This is Edge Chromium.
    var isEdgeChromium = !matchedBrowser && testBrowserVersion('edg/');
    var isFirefox = !matchedBrowser && testBrowserVersion('fxios|firefox/');
    // Note: lots of random browsers say they're Chrome and will end up in this bucket
    var isChrome = !matchedBrowser && testBrowserVersion('(?:chrome|crios)/');
    var isSafari = !matchedBrowser && /safari\/(\d+)/.test(userAgent);
    if (isSafari) {
        testBrowserVersion('version/');
    }
    // At this point, matchedBrowser should contain the version information
    // Some other browser categories:
    //   IE Mobile: /iemobile\/(\d+)/
    //   IE Mobile in desktop mode: contains WPDesktop; get version from Trident version
    //   Opera (currently goes into Chrome bucket): /opr\/(\d+)/
    var browserName = isIE
        ? 'IE'
        : isEdge
            ? 'Edge'
            : isEdgeChromium
                ? 'EdgeChromium'
                : isFirefox
                    ? 'Firefox'
                    : isChrome
                        ? 'Chrome'
                        : isSafari
                            ? 'Safari'
                            : 'NA';
    return {
        browserName: browserName,
        isChrome: !!isChrome,
        isEdge: !!isEdge,
        isEdgeChromium: !!isEdgeChromium,
        isFirefox: !!isFirefox,
        isIE: !!isIE,
        isIE9: !!isIE9,
        isSafari: !!isSafari,
        matchedBrowser: matchedBrowser
    };
}
function getBrowserVersion(info) {
    var matchedBrowser = info.matchedBrowser;
    // Parse the captured version number for user's browser.
    var browserMajor = (matchedBrowser && parseInt(matchedBrowser[1], 10)) || 0;
    var browserMinor = (matchedBrowser && matchedBrowser[2] && matchedBrowser[2].slice(1)) || '0';
    return {
        browserMajor: browserMajor,
        browserMinor: browserMinor
    };
}
function getOS(userAgent) {
    userAgent = userAgent.toLowerCase();
    // Parse device which gives hints about os / mobile state.
    // Windows Phone IE sometimes pretends to be Android, so explicitly check for Windows Phone first.
    // (wpdesktop is used by Windows Phone in desktop mode.)
    var isWinPhone = /windows phone|wpdesktop/.test(userAgent);
    var matchedOS = isWinPhone || /ipad|iphone|ipod|android/.exec(userAgent);
    // true[0] is undefined, which is falsy
    var device = matchedOS && matchedOS[0];
    var isAndroid = device === 'android';
    var isIPad = device === 'ipad';
    var isIOS = !!device && !isAndroid;
    var isMac = !matchedOS && userAgent.indexOf('macintosh') > -1;
    var isWindows = !matchedOS && userAgent.indexOf('windows nt') > -1;
    var osName = isWindows
        ? 'Windows'
        : isWinPhone
            ? 'Windows Phone'
            : isMac
                ? 'OSX'
                : isIOS
                    ? 'IOS'
                    : isAndroid
                        ? 'Android'
                        : 'NA';
    return {
        isAndroid: isAndroid,
        isIOS: isIOS,
        isIPad: isIPad,
        isMac: isMac,
        isWindows: isWindows,
        isWinPhone: !!isWinPhone,
        isMobile: !!matchedOS,
        osName: osName
    };
}

/**
 * Use PlatformDetection to evaluate which user experience makes sense for the user's
 * platform. NOTE: This class is NOT COMPLETE! Meaning not all values are parsed out of
 * the user agent. If something is missing that you need, add it and add unit tests.
 * WARNING: Avoid using browser checks when you can use detection techniques for caps checking.
 */
var PlatformDetection = /** @class */ (function () {
    function PlatformDetection(inputAgent) {
        var root = typeof window !== 'undefined' ? window : typeof self !== 'undefined' ? self : undefined;
        if (!inputAgent) {
            inputAgent = (root && root.navigator && navigator.userAgent) || '';
        }
        var userAgent = inputAgent;
        var agent = inputAgent.toLowerCase();
        var browserInfo = getBrowser(agent);
        var browserVersion = getBrowserVersion(browserInfo);
        var osInfo = getOS(agent);
        var isMobile = osInfo.isMobile;
        var isElectron = /electron\/\\d+[\\d.]*/.test(agent);
        var isWinAppWipEnabled = agent.indexOf('winappwipenabled') > -1;
        var isPWA = typeof window !== 'undefined' && window.matchMedia
            ? window.matchMedia('(display-mode: standalone)').matches ||
                window.matchMedia('(display-mode: minimal-ui)').matches
            : false;
        // Other operating systems:
        //   Chrome OS: /cros/
        //   Linux: /linux/ (Android can also say it's Linux, so check for Android first)
        // WARNING: Avoid using browser checks when you can use detection techniques for caps checking.
        var osVersionMatch = /[\s\(](os|os x|windows (?:phone|nt)|android) ([\d._]+)/.exec(agent);
        var isUnlimitedStyleSheetsSupported = false;
        var isWebDavSupported = false;
        var isFolderUploadSupported = false;
        var isHtml5FileUploadSupported = false;
        if (root && root.document) {
            /**
             * Checks to see if styleSheet exists as a property off of a style element.
             * This will determine if style registration should be done via cssText (<= IE9) or not
             */
            var emptyStyle = document.createElement('style');
            emptyStyle.type = 'text/css';
            isUnlimitedStyleSheetsSupported = !emptyStyle.styleSheet;
            isWebDavSupported = 'addBehavior' in HTMLDivElement.prototype;
            var input = document.createElement('input');
            input.type = 'file';
            var file = root.File;
            var fileProto = file && file.prototype;
            isHtml5FileUploadSupported = !!(fileProto &&
                (fileProto.slice || fileProto.mozSlice || fileProto.webkitSlice));
            isFolderUploadSupported = 'webkitdirectory' in input && !isElectron;
        }
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, browserInfo), browserVersion), osInfo), { isElectron: isElectron, 
            // OS Identification
            osVersion: osVersionMatch ? osVersionMatch[2] : 'NA', isWindows81: !isMobile && /windows (?:8\.1|nt 6\.3)/.test(agent), isWindows10: !isMobile && agent.indexOf('windows nt 10') > -1, isWindows7: !isMobile && agent.indexOf('windows nt 6.1') > -1, 
            // Device identification
            isWinAppWipEnabled: isWinAppWipEnabled,
            isPWA: isPWA, 
            // Capabilities
            areCSS3TransitionsSupported: !browserInfo.isIE || browserVersion.browserMajor > 9, areTouchEventsSupported: !!root && 'ontouchstart' in root, isFolderUploadSupported: isFolderUploadSupported,
            isHtml5FileUploadSupported: isHtml5FileUploadSupported, isRetinaSupported: !!root && root.devicePixelRatio > 1, isUnlimitedStyleSheetsSupported: isUnlimitedStyleSheetsSupported,
            isWebDavSupported: isWebDavSupported,
            // Raw user agent
            userAgent: userAgent });
    }
    return PlatformDetection;
}());

//# sourceMappingURL=PlatformDetection.js.map

/***/ }),

/***/ "uD5U":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-datasources@45.13.10_e509c819ab980023b76e5746ec0fc9e2/node_modules/@ms/odsp-datasources/lib/dataSources/base/ApiErrorCodes.js ***!
  \**********************************************************************************************************************************************************************************************/
/*! exports provided: unknown, requestAborted, canceled, noConnection, offline, missingWebForDigestAuth */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unknown", function() { return unknown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "requestAborted", function() { return requestAborted; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "canceled", function() { return canceled; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "noConnection", function() { return noConnection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "offline", function() { return offline; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "missingWebForDigestAuth", function() { return missingWebForDigestAuth; });
var unknown = 'Unknown';
var requestAborted = 'RequestAborted';
var canceled = 'Canceled';
// Used for status code 0 responses
var noConnection = 'NoConnection';
var offline = 'Offline';
var missingWebForDigestAuth = 'MissingWebForDigestAuth';
//# sourceMappingURL=ApiErrorCodes.js.map

/***/ }),

/***/ "unYt":
/*!*************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/utilities-error@1.0.0/node_modules/@ms/utilities-error/lib/CustomError.js ***!
  \*************************************************************************************************************************************/
/*! exports provided: CustomError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomError", function() { return CustomError; });
/**
 * Base class for custom errors.
 * Derive sub-classes from this class to implement errors which support
 * strongly-typed constructors and visible fields.
 * @public
 *
 * @remarks
 * The pattern to extend Error properly is documented here:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error
 */
var CustomError = /** @class */ (function () {
    function CustomError(props) {
        if (props === void 0) { props = {}; }
        // The real error will be returned.
        var error = new Error(props.message || (props.innerError && props.innerError.message));
        this.message = error.message;
        this.innerError = props.innerError;
        this.stack = error.stack;
        this.name = error.name;
        // Avoid using assign since some platforms (native) do not enumerate prototyped objects.
        for (var key in this) {
            if (Object.prototype.hasOwnProperty.call(this, key)) {
                // @ts-ignore TOO BAD
                error[key] = this[key];
            }
        }
        var customErrorType = Object.getPrototypeOf(this);
        // @ts-ignore
        if (Error.captureStackTrace) {
            // @ts-ignore
            Error.captureStackTrace(error, customErrorType);
        }
        if (Object.setPrototypeOf) {
            // Force the error instance to use the custom prototype.
            // This works on all supported browsers, except PhantomJS.
            Object.setPrototypeOf(error, customErrorType);
            return error;
        }
    }
    return CustomError;
}());

// For Error, need to manually extend the built-in type since TypeScript does not emit the necessary output.
if (Object.setPrototypeOf) {
    // This works on all supported browsers, except PhantomJS.
    CustomError.prototype = Object.create(Error.prototype, {
        constructor: {
            value: Error,
            enumerable: false,
            writable: true,
            configurable: true
        }
    });
    Object.setPrototypeOf(CustomError, Error);
}
//# sourceMappingURL=CustomError.js.map

/***/ }),

/***/ "vmDi":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-utilities@29.7.9_5d977624104b06c7bcaa2de974ff51f1/node_modules/@ms/odsp-utilities/lib/alternativeUrls/SPAlternativeUrls.js ***!
  \*******************************************************************************************************************************************************************************************/
/*! exports provided: UserPhotoSize, tryGetAlternativeUrl, isAlterantiveUrlFresh, updateMap, getUrlTable, getUserPhotoUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserPhotoSize", function() { return UserPhotoSize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tryGetAlternativeUrl", function() { return tryGetAlternativeUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isAlterantiveUrlFresh", function() { return isAlterantiveUrlFresh; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateMap", function() { return updateMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUrlTable", function() { return getUrlTable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserPhotoUrl", function() { return getUserPhotoUrl; });
/* harmony import */ var _uri_Uri__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../uri/Uri */ "I5DX");
/* harmony import */ var _logging_events_Qos_event__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../logging/events/Qos.event */ "c09w");
/* harmony import */ var _killswitch_Killswitch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../killswitch/Killswitch */ "QUgr");



/**
 * This enum defines sizes of the user photos.
 * Small is 48x48 px
 * Medium is 96x96 px
 * Large is as uploaded by the user
 *
 * @alpha
 */
var UserPhotoSize;
(function (UserPhotoSize) {
    /**
     * Small image is 48x48 px.
     */
    UserPhotoSize[UserPhotoSize["Small"] = 1] = "Small";
    /**
     * Medium image is 96x96 px.
     */
    UserPhotoSize[UserPhotoSize["Medium"] = 2] = "Medium";
    /**
     * Large image dimensions are as uploaded by the user.
     */
    UserPhotoSize[UserPhotoSize["Large"] = 3] = "Large";
})(UserPhotoSize || (UserPhotoSize = {}));
var EXPIRATION_TOKEN = '_eat_';
var EXPIRATION_TOKEN_SEPARATOR = '_';
var OAT_EXPIRATION_TOKEN = '_oat_';
var P1_EXPIRATION = 'P1';
// @internalremarks: Note - 'UserPhotoAspx' is defined by a constant UserPhotoKey specified in
// @internalremarks: depot/devmainoverride/sporel/sts/stsom/SitePages/SitePageAlternativeUrlMapBuilder.cs
var USER_PHOTO_KEY = 'UserPhotoAspx';
var DEFAULT_USER_PHOTO_BASE_URL = '/_layouts/15/userphoto.aspx';
var USER_PHOTO_SIZE_PARAM = 'size';
var USER_PHOTO_ACCOUNT_NAME_PARAM = 'accountname';
var _urlTable = {};
var QOS_TRYGETALTERNATIVEURLFAILURE = 'TryGetAlternativeUrlFailure';
var SPPAGE_CONTEXT_INFO_KEY = '_spPageContextInfo';
var SPHOMEPAGE_CONTEXT_INFO_KEY = '_spHomePageContext';
/**
 * If an alternative URL is available, then this returns the URL that should be used
 * for rendering the image.  Otherwise, undefined is returned.
 * @todo We want to add model so updateMap is called by each app during page context initialization.
 * That model will need maintenance on each new app is added but then we can fallback to window global to keep coverage for corner scenarios.
 */
function tryGetAlternativeUrl(primaryUrl) {
    var _a, _b;
    function _getUrlFromPageContext(key) {
        if (isAlterantiveUrlFresh(window[key].userPhotoCdnBaseUrl)) {
            return window[key].userPhotoCdnBaseUrl;
        }
        else {
            delete window[key].userPhotoCdnBaseUrl;
            return '';
        }
    }
    try {
        var alternativeUrl = _urlTable && _urlTable[primaryUrl];
        if (!alternativeUrl && USER_PHOTO_KEY === primaryUrl) {
            if ((_a = window[SPPAGE_CONTEXT_INFO_KEY]) === null || _a === void 0 ? void 0 : _a.userPhotoCdnBaseUrl) {
                alternativeUrl = _getUrlFromPageContext(SPPAGE_CONTEXT_INFO_KEY);
            }
            else if ((_b = window[SPHOMEPAGE_CONTEXT_INFO_KEY]) === null || _b === void 0 ? void 0 : _b.userPhotoCdnBaseUrl) {
                alternativeUrl = _getUrlFromPageContext(SPHOMEPAGE_CONTEXT_INFO_KEY);
            }
        }
        if (!alternativeUrl) {
            return undefined;
        }
        if (!isAlterantiveUrlFresh(alternativeUrl)) {
            delete _urlTable[primaryUrl];
            return undefined;
        }
        return alternativeUrl;
    }
    catch (ex) {
        var qosEvent = new _logging_events_Qos_event__WEBPACK_IMPORTED_MODULE_1__["Qos"]({ name: QOS_TRYGETALTERNATIVEURLFAILURE });
        qosEvent.end({
            resultType: _logging_events_Qos_event__WEBPACK_IMPORTED_MODULE_1__["ResultTypeEnum"].Failure,
            resultCode: 'Unexpected',
            extraData: {
                error: ex
            }
        });
    }
    return undefined;
}
/**
 * Check for expired auth token. Returns false if auth token has expired
 * Private CDN item will have a query string parameter _eat_=xxxx_yyyyyyyyyy, where xxxx is an expiration
 * time in Epoch format (number of seconds since 1970/1/1).
 * The real URL example is
 * https://privatecdn.sharepointonline.com/msft.spoppe.com/sites/wex/SiteAssets/SitePages/SamplePage/image.jpg
 *   ?_eat_=1480392900_16330f287fe138cea33c424221c6fa1d79e6cdeb470bc0000894645994ba1a14
 *   &_oat_=1480392900_f312136e0ffd87c26165973f042a98dfd40130d4981d6d3fd71643c7e4fdb485
 *   &width=300
 * If the parameter is available in the alternative Url,
 * check whether this is at least 30 seconds out in the future, and return the alternative
 * URL only if still valid. Return undefined otherwise, falling back to the original non-optimized behavior
 * note that the URLs provided by the server always have at least 15 minutes of the valid time, so it is
 * unlikely expired situation will appear too often.
 *
 * @param alternativeUrl
 */
function isAlterantiveUrlFresh(alternativeUrl) {
    var uri = new _uri_Uri__WEBPACK_IMPORTED_MODULE_0__["default"](alternativeUrl);
    var oatAuthTokenEnabled = !_killswitch_Killswitch__WEBPACK_IMPORTED_MODULE_2__["Killswitch"].isActivated('b4156049-bba5-4b6e-b030-fe40bc82594c', '10/26/2020', 'WEX check OAT for expiration time instead of EAT');
    var authToken = oatAuthTokenEnabled
        ? uri.getQueryParameter(OAT_EXPIRATION_TOKEN)
        : uri.getQueryParameter(EXPIRATION_TOKEN);
    if (authToken) {
        var split = authToken.split(EXPIRATION_TOKEN_SEPARATOR);
        var expirationTime = undefined;
        if (split.length === 2) {
            expirationTime = Number(split[0]);
        }
        if (!expirationTime) {
            // hightly unexpected, but logging nevertheless
            var qosEvent = new _logging_events_Qos_event__WEBPACK_IMPORTED_MODULE_1__["Qos"]({ name: QOS_TRYGETALTERNATIVEURLFAILURE });
            qosEvent.end({
                resultType: _logging_events_Qos_event__WEBPACK_IMPORTED_MODULE_1__["ResultTypeEnum"].Failure,
                resultCode: oatAuthTokenEnabled ? 'OatParamUnexpectedFormat' : 'EatParamUnexpectedFormat',
                extraData: {
                    eatParam: authToken
                }
            });
            return true;
        }
        // Shift expiration time by 30 seconds to ensure the browser has ample time to fetch the resource
        // before it actually does expire.
        expirationTime -= 30;
        // getTime() returns Epoch time in milliseconds.
        if (Date.now() / 1000 > expirationTime) {
            return false;
        }
    }
    if (!_killswitch_Killswitch__WEBPACK_IMPORTED_MODULE_2__["Killswitch"].isActivated('a8bd7908-feb7-4b5a-9919-70ecf2a2a9f8', '11/30/2020', 'WEX check AFD P1 expiration time fresh')) {
        var p1 = uri.getQueryParameter(P1_EXPIRATION);
        // Not AFD CDN URL, return true
        if (!p1) {
            return true;
        }
        var p1ExpirationTime = Number(p1);
        // Shift expiration time by 30 seconds to ensure the browser has ample time to fetch the resource
        // before it actually does expire.
        p1ExpirationTime -= 30;
        // getTime() returns Epoch time in milliseconds.
        if (Date.now() / 1000 > p1ExpirationTime) {
            return false;
        }
    }
    return true;
}
/**
 * Updates the map by adding the specified entries, overwriting any previous entries
 * with the same key names.
 */
function updateMap(alternativeUrlTable) {
    if (!alternativeUrlTable) {
        return;
    }
    for (var key in alternativeUrlTable) {
        _urlTable[key] = alternativeUrlTable[key];
    }
}
/**
 * For diagnostic purposes, this returns the current map.
 * The key is the primaryUrl, and the value is the alternativeUrl.
 */
function getUrlTable() {
    return _urlTable;
}
/**
 * UserPhoto mapping is auto added into the Alternative URL map when private CDN is enabled
 * and tenant admin configured origin * /userphoto.aspx
 * If CDN is not enabled, the default _layouts/15/userphoto.aspx will be used.
 * @param size Parameter may have value S,L,M. If none or other is provided, S will be used by default.
 */
function getUserPhotoUrl(accountName, size) {
    var userPhotoBaseUrl = tryGetAlternativeUrl(USER_PHOTO_KEY) || DEFAULT_USER_PHOTO_BASE_URL;
    var sizeLetter;
    switch (size) {
        case 2 /* Medium */:
            sizeLetter = 'M';
            break;
        case 3 /* Large */:
            sizeLetter = 'L';
            break;
        default:
            // Default to small if size is not provided. Server will assume small either way, but having the
            // parameter explicitly will reduce variability in CDN, and will increase probability of the cache hit.
            sizeLetter = 'S';
    }
    var userPhotoUri = new _uri_Uri__WEBPACK_IMPORTED_MODULE_0__["default"](userPhotoBaseUrl);
    userPhotoUri.setQueryParameter(USER_PHOTO_SIZE_PARAM, sizeLetter);
    // empty accountName will resolve to the default doughboy picture
    userPhotoUri.setQueryParameter(USER_PHOTO_ACCOUNT_NAME_PARAM, accountName || '');
    return userPhotoUri.toString();
}
//# sourceMappingURL=SPAlternativeUrls.js.map

/***/ }),

/***/ "vo05":
/*!*******************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-utilities@29.7.9_5d977624104b06c7bcaa2de974ff51f1/node_modules/@ms/odsp-utilities/lib/guid/Guid.js ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ms_utilities_guid_lib_Guid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ms/utilities-guid/lib/Guid */ "Ng1F");

var Guid = _ms_utilities_guid_lib_Guid__WEBPACK_IMPORTED_MODULE_0__;
/* harmony default export */ __webpack_exports__["default"] = (Guid);
//# sourceMappingURL=Guid.js.map

/***/ }),

/***/ "vqMB":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-utilities@29.7.9_5d977624104b06c7bcaa2de974ff51f1/node_modules/@ms/odsp-utilities/lib/logging/events/Experiment.event.js ***!
  \*****************************************************************************************************************************************************************************************/
/*! exports provided: Experiment, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Experiment", function() { return Experiment; });
/* harmony import */ var _SingleEventBase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../SingleEventBase */ "ruBb");
/* harmony import */ var _ExperimentTypeEnum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ExperimentTypeEnum */ "5JHQ");
// OneDrive:IgnoreCodeCoverage


var Experiment = Object(_SingleEventBase__WEBPACK_IMPORTED_MODULE_0__["createSingleEvent"])({
    eventName: 'Experiment,',
    shortEventName: 'Experiment'
}, {
    name: {
        isPrefixingDisabled: true,
        type: 1 /* String */
    },
    isInRamp: {
        isPrefixingDisabled: true,
        type: 3 /* Boolean */
    },
    experiment: {
        isPrefixingDisabled: true,
        type: 1 /* String */
    },
    variant: {
        isPrefixingDisabled: true,
        type: 1 /* String */
    },
    assignmentType: {
        isPrefixingDisabled: true,
        type: 6 /* Enum */,
        typeRef: _ExperimentTypeEnum__WEBPACK_IMPORTED_MODULE_1__["ExperimentTypeEnum"]
    },
    assignmentId: {
        isPrefixingDisabled: true,
        type: 1 /* String */
    }
});
/* harmony default export */ __webpack_exports__["default"] = (Experiment);
//# sourceMappingURL=Experiment.event.js.map

/***/ }),

/***/ "wq9f":
/*!*************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/telemetry-manager@1.1.3/node_modules/@ms/telemetry-manager/lib/Manager.js ***!
  \*************************************************************************************************************************************/
/*! exports provided: createManager, Manager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createManager", function() { return createManager; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Manager", function() { return Manager; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ms_utilities_objects_lib_deepCopy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ms/utilities-objects/lib/deepCopy */ "jpKs");


var maxBufferSize = 500;
function getStartDate() {
    if (window.performance && window.performance.timing && window.performance.timing.navigationStart) {
        return new Date(window.performance.timing.navigationStart);
    }
    else {
        return new Date();
    }
}
var PrivateManager = /** @class */ (function () {
    function PrivateManager() {
        this._handlers = [];
        this._buffer = [];
        this._validationLoggers = [];
        this._featureEnablers = [];
    }
    Object.defineProperty(PrivateManager.prototype, "startDate", {
        get: function () {
            return getStartDate();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PrivateManager.prototype, "startTime", {
        get: function () {
            var startDate = this.startDate;
            return startDate.getTime();
        },
        enumerable: true,
        configurable: true
    });
    PrivateManager.prototype.getTime = function () {
        return new Date().getTime();
    };
    /** This is the overrideable clean string function. Return undefined to drop a parameter altogether. */
    PrivateManager.prototype.cleanString = function (str) {
        return str;
    };
    PrivateManager.prototype.addLogHandler = function (handler) {
        var handlers = this._handlers;
        var buffer = this._buffer;
        handlers.push(handler);
        // Return the buffer so the handler can get missed events
        return buffer.slice();
    };
    PrivateManager.prototype.removeLogHandler = function (handler) {
        var handlers = this._handlers;
        for (var x = 0; x < handlers.length; x++) {
            if (handlers[x] === handler) {
                // Remove the handler
                handlers.splice(x, 1);
                break;
            }
        }
    };
    PrivateManager.prototype.logEvent = function (event, eventType) {
        var buffer = this._buffer;
        var handlers = this._handlers;
        // Clone the object (do it natively because the browser can mark it as a type)
        var clonedEvent = Object.freeze({
            data: Object(_ms_utilities_objects_lib_deepCopy__WEBPACK_IMPORTED_MODULE_1__["deepCopy"])(event.data),
            context: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, event.context),
            id: event.id,
            enabled: event.enabled,
            critical: event.critical,
            endTime: event.endTime,
            eventName: event.eventName,
            shortEventName: event.shortEventName,
            parentId: event.parentId,
            startTime: event.startTime,
            eventType: eventType,
            metadata: event.metadata,
            vector: event.vector,
            validationErrors: event.validationErrors,
            isEventTypePrefixingDisabled: event.isEventTypePrefixingDisabled
        });
        // Add to the buffer
        buffer.push(clonedEvent);
        if (buffer.length > maxBufferSize) {
            buffer.splice(1, Infinity);
            // Make sure we have a handler before the buffer is overrun
            if (handlers.length === 0) {
                _handleBaseLoggingError(new Error('Logging buffer overflow hit before any logging handler was registered'));
            }
        }
        // Let handlers know the log event has completed
        for (var x = 0; x < handlers.length; x++) {
            try {
                handlers[x](clonedEvent);
            }
            catch (e) {
                _handleBaseLoggingError(e);
            }
        }
    };
    PrivateManager.prototype.addValidationErrorLogger = function (validationLogger) {
        var validationLoggers = this._validationLoggers;
        validationLoggers.push(validationLogger);
    };
    PrivateManager.prototype.removeValidationErrorLogger = function (validationLogger) {
        var validationLoggers = this._validationLoggers;
        var index = validationLoggers.indexOf(validationLogger);
        if (index > -1) {
            validationLoggers.splice(index, 1);
        }
    };
    PrivateManager.prototype.logValidationError = function (event, type) {
        var validationLoggers = this._validationLoggers;
        for (var _i = 0, validationLoggers_1 = validationLoggers; _i < validationLoggers_1.length; _i++) {
            var validationLogger = validationLoggers_1[_i];
            try {
                validationLogger(event, type);
            }
            catch (e) {
                _handleBaseLoggingError(e);
            }
        }
    };
    PrivateManager.prototype.isFeatureEnabled = function (feature) {
        var featureEnablers = this._featureEnablers;
        for (var _i = 0, featureEnablers_1 = featureEnablers; _i < featureEnablers_1.length; _i++) {
            var featureEnabler = featureEnablers_1[_i];
            if (featureEnabler(feature)) {
                return true;
            }
        }
        return false;
    };
    PrivateManager.prototype.addFeatureEnabler = function (featureEnabler) {
        var featureEnablers = this._featureEnablers;
        featureEnablers.push(featureEnabler);
    };
    PrivateManager.prototype.removeFeatureEnabler = function (featureEnabler) {
        var featureEnablers = this._featureEnablers;
        var index = featureEnablers.indexOf(featureEnabler);
        if (index > -1) {
            featureEnablers.splice(index, 1);
        }
    };
    PrivateManager.prototype.getStack = function () {
        var error;
        try {
            var w = window;
            if (w.______ExpectedError______) {
                w.______ExpectedError______();
            }
        }
        catch (e) {
            error = e;
        }
        return (error && error.stack) || undefined;
    };
    return PrivateManager;
}());
/**
 * Creates a new, private manager with its own event queue and handlers.
 * @public
 */
function createManager() {
    return new PrivateManager();
}
function createDefaultGlobalManager() {
    var globalManager;
    if (typeof window !== 'undefined') {
        globalManager = window.ODSP_TELEMETRY_MANAGER = window.ODSP_TELEMETRY_MANAGER || createManager();
    }
    else if (typeof self !== 'undefined') {
        globalManager = self.ODSP_TELEMETRY_MANAGER = self.ODSP_TELEMETRY_MANAGER || createManager();
    }
    else {
        globalManager = createManager();
    }
    return globalManager;
}
/**
 * Gets the default/fallback telemetry manager for the running application.
 * @public
 */
var Manager = createDefaultGlobalManager();
function _handleBaseLoggingError(error) {
    console.error('Telemetry Manager:', error);
}
//# sourceMappingURL=Manager.js.map

/***/ }),

/***/ "wzyn":
/*!*********************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-utilities@29.7.9_5d977624104b06c7bcaa2de974ff51f1/node_modules/@ms/odsp-utilities/lib/async/Async.js ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _logging_ErrorHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../logging/ErrorHelper */ "lmjA");

/**
 * Bugs often appear in async code when stuff gets disposed, but async operations don't get canceled.
 * This Async helper class solves these issues by tying async code to the lifetime of a disposable object.
 *
 * Usage: Anything class extending from BaseModel can access this helper via this.async. Otherwise create a
 * new instance of the class and remember to call dispose() during your code's dispose handler.
 */
function noop() {
    // Do nothing.
}
function logToErrorHelper(error) {
    _logging_ErrorHelper__WEBPACK_IMPORTED_MODULE_0__["default"].log(error);
}
var Async = /** @class */ (function () {
    function Async(parent, onError) {
        if (onError === void 0) { onError = logToErrorHelper; }
        this._isDisposed = false;
        this._parent = parent || null;
        this._onErrorHandler = onError;
        this._timeoutIds = null;
        this._immediateIds = null;
        this._animationFrameIds = null;
        this._intervalIds = null;
    }
    /**
     * Dispose function, clears all async operations.
     */
    Async.prototype.dispose = function () {
        if (this._isDisposed) {
            return;
        }
        this._isDisposed = true;
        this._parent = null;
        // Clear timeouts.
        if (this._timeoutIds) {
            for (var _i = 0, _a = Object.keys(this._timeoutIds); _i < _a.length; _i++) {
                var id = _a[_i];
                this.clearTimeout(Number(id));
            }
            this._timeoutIds = null;
        }
        // Clear immediates.
        if (this._immediateIds) {
            for (var _b = 0, _c = Object.keys(this._immediateIds); _b < _c.length; _b++) {
                var id = _c[_b];
                this.clearImmediate(Number(id));
            }
            this._immediateIds = null;
        }
        // Clear intervals.
        if (this._intervalIds) {
            for (var _d = 0, _e = Object.keys(this._intervalIds); _d < _e.length; _d++) {
                var id = _e[_d];
                this.clearInterval(Number(id));
            }
            this._intervalIds = null;
        }
        // Clear animation frames.
        if (this._animationFrameIds) {
            for (var _f = 0, _g = Object.keys(this._animationFrameIds); _f < _g.length; _f++) {
                var id = _g[_f];
                this.cancelAnimationFrame(Number(id));
            }
            this._animationFrameIds = null;
        }
    };
    /**
     * SetTimeout override, which will auto cancel the timeout during dispose.
     * @param callback Callback to execute.
     * @param duration Duration in milliseconds.
     * @return The setTimeout id.
     */
    Async.prototype.setTimeout = function (callback, duration) {
        var _this = this;
        var timeoutId = 0;
        if (!this._isDisposed) {
            var timeoutIds_1 = this._timeoutIds || (this._timeoutIds = {});
            var parent_1 = this._parent;
            /* tslint:disable:ban-native-functions */
            timeoutId = setTimeout(function () {
                // Time to execute the timeout, enqueue it as a foreground task to be executed.
                try {
                    // Now delete the record and call the callback.
                    delete timeoutIds_1[timeoutId];
                    callback.apply(parent_1);
                }
                catch (e) {
                    _this._logError(e);
                }
            }, duration);
            /* tslint:enable:ban-native-functions */
            timeoutIds_1[timeoutId] = true;
        }
        return timeoutId;
    };
    /**
     * Clears the timeout.
     * @param id Id to cancel.
     */
    Async.prototype.clearTimeout = function (id) {
        var timeoutIds = this._timeoutIds;
        if (timeoutIds && timeoutIds[id]) {
            /* tslint:disable:ban-native-functions */
            clearTimeout(id);
            /* tslint:enable:ban-native-functions */
            delete timeoutIds[id];
        }
    };
    /**
     * SetImmediate override, which will auto cancel the immediate during dispose.
     * @param callback Callback to execute.
     * @return The setTimeout id.
     */
    Async.prototype.setImmediate = function (callback) {
        var _this = this;
        var immediateId = 0;
        if (!this._isDisposed) {
            var immediateIds_1 = this._immediateIds || (this._immediateIds = {});
            var parent_2 = this._parent;
            var setImmediateCallback = function () {
                // Time to execute the timeout, enqueue it as a foreground task to be executed.
                try {
                    // Now delete the record and call the callback.
                    delete immediateIds_1[immediateId];
                    callback.apply(parent_2);
                }
                catch (e) {
                    _this._logError(e);
                }
            };
            /* tslint:disable:ban-native-functions */
            immediateId = window.setImmediate
                ? window.setImmediate(setImmediateCallback)
                : window.setTimeout(setImmediateCallback, 0);
            /* tslint:enable:ban-native-functions */
            immediateIds_1[immediateId] = true;
        }
        return immediateId;
    };
    /**
     * Clears the immediate.
     * @param id Id to cancel.
     */
    Async.prototype.clearImmediate = function (id) {
        var immediateIds = this._immediateIds;
        if (immediateIds && immediateIds[id]) {
            /* tslint:disable:ban-native-functions */
            window.clearImmediate ? window.clearImmediate(id) : window.clearTimeout(id);
            delete immediateIds[id];
            /* tslint:enable:ban-native-functions */
        }
    };
    /**
     * SetInterval override, which will auto cancel the timeout during dispose.
     * @param callback Callback to execute.
     * @param duration Duration in milliseconds.
     * @return The setTimeout id.
     */
    Async.prototype.setInterval = function (callback, duration) {
        var _this = this;
        var intervalId = 0;
        if (!this._isDisposed) {
            if (!this._intervalIds) {
                this._intervalIds = {};
            }
            var parent_3 = this._parent;
            /* tslint:disable:ban-native-functions */
            intervalId = setInterval(function () {
                // Time to execute the interval callback, enqueue it as a foreground task to be executed.
                try {
                    callback.apply(parent_3);
                }
                catch (e) {
                    _this._logError(e);
                }
            }, duration);
            /* tslint:enable:ban-native-functions */
            this._intervalIds[intervalId] = true;
        }
        return intervalId;
    };
    /**
     * Clears the interval.
     * @param id Id to cancel.
     */
    Async.prototype.clearInterval = function (id) {
        if (this._intervalIds && this._intervalIds[id]) {
            /* tslint:disable:ban-native-functions */
            clearInterval(id);
            delete this._intervalIds[id];
            /* tslint:enable:ban-native-functions */
        }
    };
    /**
     * Creates a function that, when executed, will only call the func function at most once per
     * every wait milliseconds. Provide an options object to indicate that func should be invoked
     * on the leading and/or trailing edge of the wait timeout. Subsequent calls to the throttled
     * function will return the result of the last func call.
     *
     * Note: If leading and trailing options are true func will be called on the trailing edge of
     * the timeout only if the the throttled function is invoked more than once during the wait timeout.
     *
     * @param func The function to throttle.
     * @param wait The number of milliseconds to throttle executions to. Defaults to 0.
     * @param options The options object.
     * @param options.leading Specify execution on the leading edge of the timeout.
     * @param options.trailing Specify execution on the trailing edge of the timeout.
     * @return The new throttled function.
     */
    Async.prototype.throttle = function (func, wait, options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        if (this._isDisposed) {
            return noop;
        }
        var waitMS = wait || 0;
        var _a = options.leading, leading = _a === void 0 ? true : _a, _b = options.trailing, trailing = _b === void 0 ? true : _b;
        var lastExecuteTime = 0;
        var lastResult;
        var lastArgs;
        var timeoutId = null;
        var parent = this._parent;
        var callback = function (userCall) {
            var now = new Date().getTime();
            var delta = now - lastExecuteTime;
            var waitLength = leading ? waitMS - delta : waitMS;
            if (delta >= waitMS && (!userCall || leading)) {
                lastExecuteTime = now;
                if (timeoutId) {
                    _this.clearTimeout(timeoutId);
                    timeoutId = null;
                }
                lastResult = func.apply(parent, lastArgs);
            }
            else if (timeoutId === null && trailing) {
                timeoutId = _this.setTimeout(callback, waitLength);
            }
            return lastResult;
        };
        var resultFunction = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            lastArgs = args;
            return callback(true);
        };
        return resultFunction;
    };
    /**
     * Creates a function that will delay the execution of func until after wait milliseconds have
     * elapsed since the last time it was invoked. Provide an options object to indicate that func
     * should be invoked on the leading and/or trailing edge of the wait timeout. Subsequent calls
     * to the debounced function will return the result of the last func call.
     *
     * Note: If leading and trailing options are true func will be called on the trailing edge of
     * the timeout only if the the debounced function is invoked more than once during the wait
     * timeout.
     *
     * @param func The function to debounce.
     * @param wait The number of milliseconds to delay.
     * @param options The options object.
     * @param options.leading Specify execution on the leading edge of the timeout.
     * @param options.maxWait The maximum time func is allowed to be delayed before it's called.
     * @param options.trailing Specify execution on the trailing edge of the timeout.
     * @return The new debounced function.
     */
    Async.prototype.debounce = function (func, wait, options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        if (this._isDisposed) {
            return noop;
        }
        var waitMS = wait || 0;
        var _a = options.leading, leading = _a === void 0 ? false : _a, _b = options.trailing, trailing = _b === void 0 ? true : _b, _c = options.maxWait, maxWait = _c === void 0 ? NaN : _c;
        var lastCallTime = 0;
        var lastExecuteTime = new Date().getTime();
        var lastResult;
        var lastArgs;
        var timeoutId = null;
        var parent = this._parent;
        var callback = function (userCall) {
            var now = new Date().getTime();
            var executeImmediately = false;
            if (userCall) {
                if (leading && now - lastCallTime >= waitMS) {
                    executeImmediately = true;
                }
                lastCallTime = now;
            }
            var delta = now - lastCallTime;
            var waitLength = waitMS - delta;
            var maxWaitDelta = now - lastExecuteTime;
            var maxWaitExpired = false;
            if (!isNaN(maxWait)) {
                // maxWait only matters when there is a pending callback
                if (maxWaitDelta >= maxWait && timeoutId) {
                    maxWaitExpired = true;
                }
                else {
                    waitLength = Math.min(waitLength, maxWait - maxWaitDelta);
                }
            }
            if (delta >= waitMS || maxWaitExpired || executeImmediately) {
                if (timeoutId) {
                    _this.clearTimeout(timeoutId);
                    timeoutId = null;
                }
                lastExecuteTime = now;
                lastResult = func.apply(parent, lastArgs);
            }
            else if ((timeoutId === null || !userCall) && trailing) {
                timeoutId = _this.setTimeout(callback, waitLength);
            }
            return lastResult;
        };
        var resultFunction = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            lastArgs = args;
            return callback(true);
        };
        return resultFunction;
    };
    Async.prototype.requestAnimationFrame = function (callback) {
        var _this = this;
        var animationFrameId = 0;
        if (!this._isDisposed) {
            var animationFrameIds_1 = this._animationFrameIds || (this._animationFrameIds = {});
            var parent_4 = this._parent;
            var animationFrameCallback = function () {
                try {
                    // Now delete the record and call the callback.
                    delete animationFrameIds_1[animationFrameId];
                    callback.apply(parent_4);
                }
                catch (e) {
                    _this._logError(e);
                }
            };
            /* tslint:disable:ban-native-functions */
            animationFrameId = window.requestAnimationFrame
                ? window.requestAnimationFrame(animationFrameCallback)
                : window.setTimeout(animationFrameCallback, 0);
            /* tslint:enable:ban-native-functions */
            animationFrameIds_1[animationFrameId] = true;
        }
        return animationFrameId;
    };
    Async.prototype.cancelAnimationFrame = function (id) {
        var animationFrameIds = this._animationFrameIds;
        if (animationFrameIds && animationFrameIds[id]) {
            /* tslint:disable:ban-native-functions */
            window.cancelAnimationFrame ? window.cancelAnimationFrame(id) : window.clearTimeout(id);
            /* tslint:enable:ban-native-functions */
            delete animationFrameIds[id];
        }
    };
    Async.prototype._logError = function (e) {
        if (this._onErrorHandler) {
            this._onErrorHandler(e);
        }
    };
    return Async;
}());
/* harmony default export */ __webpack_exports__["default"] = (Async);
//# sourceMappingURL=Async.js.map

/***/ }),

/***/ "yBP4":
/*!***********************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/telemetry-addon-aria@1.1.3_@uifabric+utilities@7.33.2/node_modules/@ms/telemetry-addon-aria/lib/AriaTelemetryHandler.js ***!
  \***********************************************************************************************************************************************************************************/
/*! exports provided: AriaTelemetryHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AriaTelemetryHandler", function() { return AriaTelemetryHandler; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ms_telemetry_manager_lib_EventBase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ms/telemetry-manager/lib/EventBase */ "HMXl");
/* harmony import */ var _AriaEventBuilder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AriaEventBuilder */ "Fb2z");
/* harmony import */ var _ms_telemetry_manager_lib_ErrorHelper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ms/telemetry-manager/lib/ErrorHelper */ "qJrk");
/* harmony import */ var _ms_utilities_strings_lib_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ms/utilities-strings/lib/index */ "2h7V");





/**
 * Telemetry handler for reporting events to Aria.
 * This handler ensures that events logged to Aria are well-formed and supplied with baseline required metadata fields.
 *
 * Host applications should generally use a class derived from this class, such as WebSharedAriaTelemtryHandler,
 * which supply default metadata extracted from context.
 * @public
 */
var AriaTelemetryHandler = /** @class */ (function () {
    function AriaTelemetryHandler(params) {
        var _this = this;
        /**
         * Directly logs an event to Aria using this handler.
         */
        this.logEvent = function (event) {
            var finalEvent = _this._onLogEvent ? _this._onLogEvent(event) : event;
            _this._createLogHandler().then(function (logHandler) { return logHandler(finalEvent); });
        };
        this._getAria = memorizePromise(function () {
            return params.ariaLoader().then(function (aria) {
                initializeLogManager(aria, params);
                return aria;
            });
        });
        this._getLogger = memorizePromise(function () {
            return _this._getAria().then(function (aria) {
                var logger = createLogger(aria, params.tenantToken, params.context);
                return [logger, aria];
            });
        });
        this._createLogHandler = memorizePromise(function () {
            return _this._getLogger().then(function (_a) {
                var logger = _a[0], aria = _a[1];
                var logHandler = createLogHandler(aria, logger, params.logStartEvents, params.ariaQos);
                return logHandler;
            });
        });
        this._onLogEvent = params.onLogEvent;
    }
    /**
     * Attaches this handler to a telemetry manager to log all its reported events to Aria.
     */
    AriaTelemetryHandler.prototype.attach = function (manager) {
        // Ensure the log handler has a chance to initialize before being attached.
        this._createLogHandler();
        var logEvent = this.logEvent;
        manager.addLogHandler(logEvent).forEach(logEvent);
        return function () { return manager.removeLogHandler(logEvent); };
    };
    /**
     * Update the Aria event context.
     */
    AriaTelemetryHandler.prototype.updateContext = function (context) {
        this._getLogger().then(function (_a) {
            var logger = _a[0];
            return updateContext(logger, context);
        });
    };
    return AriaTelemetryHandler;
}());

function createLogHandler(aria, logger, logStartEvents, ariaQosParams) {
    if (logStartEvents === void 0) { logStartEvents = true; }
    if (ariaQosParams === void 0) { ariaQosParams = undefined; }
    return function (event) {
        // Try/catch individual events so that one bad event doesn't cause the rest to fail to get logged
        try {
            if (event.enabled &&
                (event.eventType !== _ms_telemetry_manager_lib_EventBase__WEBPACK_IMPORTED_MODULE_1__["ClonedEventType"].Start || logStartEvents) &&
                !(ariaQosParams && ariaQosParams.isQosEvent(event))) {
                var eventProperties = Object(_AriaEventBuilder__WEBPACK_IMPORTED_MODULE_2__["buildAriaEvent"])(aria, event);
                logger.logEvent(eventProperties);
            }
        }
        catch (exception) {
            var error = void 0;
            if (exception instanceof aria.Exception) {
                error = new Error("Aria error: " + exception.toString());
            }
            if (!exception || !exception.handled) {
                // Only log the exception if it was not already logged before
                _ms_telemetry_manager_lib_ErrorHelper__WEBPACK_IMPORTED_MODULE_3__["log"](error || exception);
            }
        }
    };
}
function initializeLogManager(aria, params) {
    if (!aria.LogManager.isInitialized()) {
        aria.LogManager.initialize(params.tenantToken, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ disableCookies: params.disableCookies }, (params.offlineCache
            ? {
                browserOverrides: {
                    onGetData: params.offlineCache.getData,
                    onSaveData: params.offlineCache.saveData
                }
            }
            : {})), (params.ariaLogConfiguration || {})));
        if (typeof window !== 'undefined' && typeof window.addEventListener === 'function') {
            window.addEventListener('beforeunload', function () {
                aria.LogManager.flush();
            });
        }
    }
    aria.LogManager.addCallbackListener(function (callbackType, statusCode, tenantToken, events) {
        if (tenantToken !== params.tenantToken) {
            return;
        }
        if (params.ariaQos) {
            params.ariaQos.reportQos({
                result: callbackType,
                statusCode: statusCode,
                events: events
            });
        }
    });
}
function createLogger(aria, tenantToken, context) {
    if (context === void 0) { context = {}; }
    var logger = new aria.Logger(tenantToken);
    updateContext(logger, context);
    return logger;
}
function updateContext(logger, context) {
    var session = context.Session, version = context.Version, osName = context.OSName, osVersion = context.OSVersion, market = context.Market, userId = context.UserId, manifest = context.Manifest, otherContext = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(context, ["Session", "Version", "OSName", "OSVersion", "Market", "UserId", "Manifest"]);
    var semanticContext = logger.getSemanticContext();
    if (session) {
        logger.setContext('AppInfo.Session', session);
    }
    if (manifest) {
        logger.setContext('AppInfo.Manifest', manifest);
    }
    if (version) {
        semanticContext.setAppVersion(version);
    }
    semanticContext.setUserLanguage(market || '');
    if (userId) {
        semanticContext.setUserId(userId);
    }
    if (osName) {
        semanticContext.setDeviceOsName(osName);
    }
    if (osVersion) {
        semanticContext.setDeviceOsVersion(osVersion);
    }
    for (var key in otherContext) {
        if (Object.prototype.hasOwnProperty.call(otherContext, key)) {
            var value = otherContext[key];
            if (value === undefined || value === null) {
                continue;
            }
            var finalKey = Object(_ms_utilities_strings_lib_index__WEBPACK_IMPORTED_MODULE_4__["capitalize"])(key);
            logger.setContext(finalKey, otherContext[key]);
        }
    }
}
function memorizePromise(func) {
    var promise = undefined;
    return function () {
        if (!promise) {
            promise = func();
        }
        return promise;
    };
}
//# sourceMappingURL=AriaTelemetryHandler.js.map

/***/ }),

/***/ "yb4E":
/*!*********************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/telemetry-manager@1.1.3/node_modules/@ms/telemetry-manager/lib/SingleEventBase.js ***!
  \*********************************************************************************************************************************************/
/*! exports provided: createSingleEvent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSingleEvent", function() { return createSingleEvent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _EventBase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EventBase */ "HMXl");
// OneDrive:CoverageThreshold(0)


function logData(data, parent) {
    return new this(data, _EventBase__WEBPACK_IMPORTED_MODULE_1__["ClonedEventType"].Single, parent);
}
function logEmptyData(parent) {
    return new this(null, _EventBase__WEBPACK_IMPORTED_MODULE_1__["ClonedEventType"].Single, parent);
}
/**
 * @public
 */
function createSingleEvent(props, metadata, baseClass) {
    var SingleEvent = /** @class */ (function (_super) {
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(SingleEvent, _super);
        function SingleEvent() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        // tslint:disable-next-line:typedef
        SingleEvent.logData = metadata ? logData : logEmptyData;
        return SingleEvent;
    }(_EventBase__WEBPACK_IMPORTED_MODULE_1__["EventBase"]));
    Object(_EventBase__WEBPACK_IMPORTED_MODULE_1__["addEventProps"])(SingleEvent.prototype, props, metadata || {}, baseClass);
    return SingleEvent;
}
//# sourceMappingURL=SingleEventBase.js.map

/***/ })

/******/ })});;
//# sourceMappingURL=odsp-core-bundle_none.js.map