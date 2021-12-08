define("8502035a-8180-4e8d-9513-07d22f75b15c_0.1.0", ["@microsoft/sp-loader","@microsoft/sp-core-library"], function(__WEBPACK_EXTERNAL_MODULE_I6O9__, __WEBPACK_EXTERNAL_MODULE_UWqr__) { return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	// Returns a list of SPFx components used in a given chunk but not used in the runtime chunk
/******/ 	function getAsyncSpfxComponents(chunkId) {
/******/ 		var component_0 = { // @microsoft/sp-diagnostics
/******/ 			i: "78359e4b-07c2-43c6-8d0b-d060b4d577e8",
/******/ 			v: "1.12.1",
/******/ 			m: "ut3N"
/******/ 		};
/******/ 		var component_1 = { // @microsoft/sp-http
/******/ 			i: "c07208f0-ea3b-4c1a-9965-ac1b825211a6",
/******/ 			v: "1.12.1",
/******/ 			m: "vlQI"
/******/ 		};
/******/ 		var component_2 = { // tslib
/******/ 			i: "01c4df03-e775-48cb-aa14-171ee5199a15",
/******/ 			v: "1.10.0",
/******/ 			m: "17wl"
/******/ 		};
/******/ 		var component_3 = { // @microsoft/sp-lodash-subset
/******/ 			i: "73e1dc6c-8441-42cc-ad47-4bd3659f8a3a",
/******/ 			v: "1.12.1",
/******/ 			m: "Pk8u"
/******/ 		};
/******/ 		var component_4 = { // @ms/sp-telemetry
/******/ 			i: "8217e442-8ed3-41fd-957d-b112e841286a",
/******/ 			v: "0.19.2",
/******/ 			m: "2q6Q"
/******/ 		};
/******/
/******/ 		return {"sp-search-common-searchpageprovider": [component_0, component_1],"vendors~sp-search-common-scopingcontrolmanager": [component_2],"sp-search-common-scopingcontrolmanager": [component_2, component_3, component_4, component_0, component_1]}[chunkId] || [];
/******/ 	}
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"sp-search-common": 0
/******/ 	};
/******/
/******/
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "chunk." + ({"sp-search-common-searchpageprovider":"sp-search-common-searchpageprovider","vendors~search-page-strings":"vendors~search-page-strings","vendors~sp-search-common-scopingcontrolmanager":"vendors~sp-search-common-scopingcontrolmanager","sp-search-common-scopingcontrolmanager":"sp-search-common-scopingcontrolmanager"}[chunkId]||chunkId) + "_" + "none" + ".js"
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
/******/ 		// SPFx Component async loading
/******/
/******/ 		var chunkAsyncComponents = getAsyncSpfxComponents(chunkId);
/******/ 		for (var i = 0; i < chunkAsyncComponents.length; i++) {
/******/ 			// Has the component already been loaded into the modules object?
/******/ 			if (!modules[chunkAsyncComponents[i].m]) {
/******/ 				(function (chunkComponent){
/******/ 					promises.push(spfxLoader.SPComponentLoader.loadComponentById(
/******/ 						chunkComponent.i,
/******/ 						chunkComponent.v
/******/ 					).then(function (component) {
/******/ 						modules[chunkComponent.m] = function(module) {
/******/ 							module.exports = component;
/******/ 						};
/******/ 					}));
/******/ 				})(chunkAsyncComponents[i]);
/******/ 			}
/******/ 		}
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
/******/ 	var spfxLoader = __webpack_require__("I6O9");
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = window["webpackJsonp_8502035a_8180_4e8d_9513_07d22f75b15c_0_1_0"] = window["webpackJsonp_8502035a_8180_4e8d_9513_07d22f75b15c_0_1_0"] || [];
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
/******/ 	  var regex = (typeof spScriptNamePattern !== 'undefined') ? spScriptNamePattern : /sp-search-common_qps-ploca\.js/i;
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

/***/ "+KwQ":
/*!********************************************!*\
  !*** ./lib/scopingControlManagerLoader.js ***!
  \********************************************/
/*! exports provided: scopingControlManagerLoader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scopingControlManagerLoader", function() { return scopingControlManagerLoader; });
function scopingControlManagerLoader() {
    return Promise.all(/*! import() | sp-search-common-scopingcontrolmanager */[__webpack_require__.e("vendors~sp-search-common-scopingcontrolmanager"), __webpack_require__.e("sp-search-common-scopingcontrolmanager")]).then(__webpack_require__.bind(null, /*! ./ScopingControlManager */ "vixR")).then(function (module) { return new module.default(); });
}


/***/ }),

/***/ "A6Yf":
/*!****************************************!*\
  !*** ./lib/isScopeControlAvailable.js ***!
  \****************************************/
/*! exports provided: isScopeControlAvailable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isScopeControlAvailable", function() { return isScopeControlAvailable; });
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _getSearchScope__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getSearchScope */ "lIYu");


function isScopeControlAvailable(spPageContextInfo) {
    return (_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPFlight"].isEnabled(1534 /*CSISpoScopeControl*/) &&
        Object(_getSearchScope__WEBPACK_IMPORTED_MODULE_1__["getSearchScope"])(spPageContextInfo) !== 1 /* Tenant */);
}


/***/ }),

/***/ "AT/v":
/*!**************************!*\
  !*** ./lib/parseGuid.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return parseGuid; });
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__);

function parseGuid(s) {
    return (_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Guid"].tryParse(s || '') || '').toString();
}


/***/ }),

/***/ "BkCc":
/*!************************!*\
  !*** ./lib/ScopeId.js ***!
  \************************/
/*! exports provided: isHubScope, isSiteScope, isNotOrgScope */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isHubScope", function() { return isHubScope; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSiteScope", function() { return isSiteScope; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNotOrgScope", function() { return isNotOrgScope; });
function isHubScope(activeScope) {
    return activeScope === 'spSiteHub' || activeScope === 'spHubHub';
}
function isSiteScope(activeScope) {
    return activeScope === 'spSiteSite' || activeScope === 'spHubSite';
}
function isNotOrgScope(activeScope) {
    return (activeScope === 'spSiteSite' ||
        activeScope === 'spHubSite' ||
        activeScope === 'spSiteHub' ||
        activeScope === 'spHubHub');
}


/***/ }),

/***/ "DYqK":
/*!***********************************!*\
  !*** ./lib/getStringMapLoader.js ***!
  \***********************************/
/*! exports provided: getStringMapLoader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStringMapLoader", function() { return getStringMapLoader; });
var getStringMapLoader = function (prefetchLocale) {
    return __webpack_require__.e(/*! import() | search-page-strings */ "vendors~search-page-strings").then(__webpack_require__.t.bind(null, /*! @1js/search-page/dist/amd/lib/strings */ "j83h", 7)).then(function (m) { return m.getStringMapLoader(prefetchLocale); });
};


/***/ }),

/***/ "I6O9":
/*!***************************************!*\
  !*** external "@microsoft/sp-loader" ***!
  \***************************************/
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_I6O9__;

/***/ }),

/***/ "UWqr":
/*!*********************************************!*\
  !*** external "@microsoft/sp-core-library" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_UWqr__;

/***/ }),

/***/ "W90b":
/*!*************************!*\
  !*** ./lib/getWebId.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getWebId; });
/* harmony import */ var _parseGuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./parseGuid */ "AT/v");

function getWebId(legacyPageContext) {
    return Object(_parseGuid__WEBPACK_IMPORTED_MODULE_0__["default"])(legacyPageContext.webId);
}


/***/ }),

/***/ "cbxx":
/*!*********************************************!*\
  !*** ./lib/ScopingControlScopesString.resx ***!
  \*********************************************/
/*! exports provided: CurrentSiteSearchScope, AllSitesInHubSearchScope, CurrentHubSearchScope, CurrentHubAndSites, WholeOrgSearchScope, search, newsSearchSearchBoxPlaceholder, SearchInSharePoint, hubSiteSearchBoxPlaceholder, searchThisSite, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"CurrentSiteSearchScope\":\"Ćũŕŕēńţ śĩţē\",\"AllSitesInHubSearchScope\":\"Àĺĺ śĩţēś ĩń ĥũƀ\",\"CurrentHubSearchScope\":\"Ćũŕŕēńţ ĥũƀ\",\"CurrentHubAndSites\":\"Ćũŕŕēńţ ĥũƀ àńď śĩţēś\",\"WholeOrgSearchScope\":\"Ŵĥōĺē ōŕĝàńĩźàţĩōń\",\"search\":\"Śēàŕćĥ\",\"newsSearchSearchBoxPlaceholder\":\"Śēàŕćĥ ńēŵś\",\"SearchInSharePoint\":\"Śēàŕćĥ ĩń ŚĥàŕēƤōĩńţ\",\"hubSiteSearchBoxPlaceholder\":\"Śēàŕćĥ àćŕōśś śĩţēś\",\"searchThisSite\":\"Śēàŕćĥ ţĥĩś śĩţē\"}");

/***/ }),

/***/ "hZWw":
/*!**************************!*\
  !*** ./lib/getSiteId.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getSiteId; });
/* harmony import */ var _parseGuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./parseGuid */ "AT/v");

function getSiteId(legacyPageContext) {
    return Object(_parseGuid__WEBPACK_IMPORTED_MODULE_0__["default"])(legacyPageContext.siteId);
}


/***/ }),

/***/ "lIYu":
/*!*******************************!*\
  !*** ./lib/getSearchScope.js ***!
  \*******************************/
/*! exports provided: getSearchScope, isDefaultScopedHomeSite */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSearchScope", function() { return getSearchScope; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDefaultScopedHomeSite", function() { return isDefaultScopedHomeSite; });
/* harmony import */ var _getSiteId__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getSiteId */ "hZWw");
/* harmony import */ var _getWebId__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getWebId */ "W90b");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__);



/**
 * function to get searchScopeType from pageContext
 * returns searchScopeType: Site, Hub, Tenant
 */
function getSearchScope(legacyPageContext) {
    if (_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__["_SPFlight"].isEnabled(1534 /*CSISpoScopeControl*/)) {
        if (isDefaultScopedHomeSite(legacyPageContext)) {
            return 1 /* Tenant */;
        }
        if (legacyPageContext.searchScope !== undefined &&
            legacyPageContext.searchScope !== 0 /* Default */) {
            if (!legacyPageContext.hubSiteId && legacyPageContext.searchScope === 2 /* Hub */) {
                return 3 /* Site */;
            }
            return legacyPageContext.searchScope;
        }
        return legacyPageContext.isHubSite ? 2 /* Hub */ : 3 /* Site */;
    }
    else {
        return isDefaultScopedHomeSite(legacyPageContext)
            ? 1 /* Tenant */
            : // if searchscope default and the site is a hubsite
                (legacyPageContext.searchScope === 0 /* Default */ ||
                    legacyPageContext.searchScope === undefined) &&
                    legacyPageContext.isHubSite
                    ? 2 /* Hub */
                    : legacyPageContext.searchScope === undefined
                        ? 0 /* Default */
                        : legacyPageContext.searchScope;
    }
}
function isDefaultScopedHomeSite(legacyPageContext) {
    /* tslint:disable:no-any */
    var companyPortalRef = legacyPageContext.companyPortalReference;
    var defaultOverrideKSActive = _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__["_SPKillSwitch"].isActivated(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__["Guid"].parse('cdebeda5-bd7b-48aa-b3ea-8570a6375a36'), '6/3/2020', 'Only override Home site search scope if it has "default" search scope');
    return (companyPortalRef &&
        companyPortalRef.SiteId === Object(_getSiteId__WEBPACK_IMPORTED_MODULE_0__["default"])(legacyPageContext) &&
        companyPortalRef.WebId === Object(_getWebId__WEBPACK_IMPORTED_MODULE_1__["default"])(legacyPageContext) &&
        (defaultOverrideKSActive || legacyPageContext.searchScope === 0 /* Default */));
}


/***/ }),

/***/ "mwqp":
/*!**********************!*\
  !*** ./lib/index.js ***!
  \**********************/
/*! exports provided: getSearchBoxPlaceholderText, getStringMapLoader, isHubScope, isNotOrgScope, isSiteScope, scopingControlManagerLoader, searchPageProviderLoader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _getSearchBoxPlaceholderText__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getSearchBoxPlaceholderText */ "wfjr");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getSearchBoxPlaceholderText", function() { return _getSearchBoxPlaceholderText__WEBPACK_IMPORTED_MODULE_0__["getSearchBoxPlaceholderText"]; });

/* harmony import */ var _getStringMapLoader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getStringMapLoader */ "DYqK");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getStringMapLoader", function() { return _getStringMapLoader__WEBPACK_IMPORTED_MODULE_1__["getStringMapLoader"]; });

/* harmony import */ var _ScopeId__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ScopeId */ "BkCc");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isHubScope", function() { return _ScopeId__WEBPACK_IMPORTED_MODULE_2__["isHubScope"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isNotOrgScope", function() { return _ScopeId__WEBPACK_IMPORTED_MODULE_2__["isNotOrgScope"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isSiteScope", function() { return _ScopeId__WEBPACK_IMPORTED_MODULE_2__["isSiteScope"]; });

/* harmony import */ var _scopingControlManagerLoader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scopingControlManagerLoader */ "+KwQ");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scopingControlManagerLoader", function() { return _scopingControlManagerLoader__WEBPACK_IMPORTED_MODULE_3__["scopingControlManagerLoader"]; });

/* harmony import */ var _searchPageProvider_SearchPageProviderLoader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./searchPageProvider/SearchPageProviderLoader */ "r9GC");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "searchPageProviderLoader", function() { return _searchPageProvider_SearchPageProviderLoader__WEBPACK_IMPORTED_MODULE_4__["searchPageProviderLoader"]; });

/**
 * [YOUR SUMMARY GOES HERE.]
 *
 * @remarks
 * If you are using API Extractor for this library, the documentation in this comment
 * will be used for the entire package.
 *
 * @packagedocumentation
 */







/***/ }),

/***/ "r9GC":
/*!************************************************************!*\
  !*** ./lib/searchPageProvider/SearchPageProviderLoader.js ***!
  \************************************************************/
/*! exports provided: searchPageProviderLoader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchPageProviderLoader", function() { return searchPageProviderLoader; });
// tslint:disable-next-line: export-name
function searchPageProviderLoader(spHttpClient, defaultSubmitSearch, getPageContext, pushUrl) {
    return __webpack_require__.e(/*! import() | sp-search-common-searchpageprovider */ "sp-search-common-searchpageprovider").then(__webpack_require__.bind(null, /*! ./SearchPageProvider */ "RMNh")).then(function (module) { return new module.default(spHttpClient, defaultSubmitSearch, getPageContext, pushUrl); });
}


/***/ }),

/***/ "wfjr":
/*!********************************************!*\
  !*** ./lib/getSearchBoxPlaceholderText.js ***!
  \********************************************/
/*! exports provided: getSearchBoxPlaceholderText */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSearchBoxPlaceholderText", function() { return getSearchBoxPlaceholderText; });
/* harmony import */ var _isScopeControlAvailable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isScopeControlAvailable */ "A6Yf");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _getSearchScope__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getSearchScope */ "lIYu");
/* harmony import */ var _ScopingControlScopesString_resx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ScopingControlScopesString.resx */ "cbxx");
var _ScopingControlScopesString_resx__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./ScopingControlScopesString.resx */ "cbxx", 1);




function getSearchBoxPlaceholderText(spPageContextInfo) {
    if (!!spPageContextInfo.searchBoxPlaceholderText) {
        return spPageContextInfo.searchBoxPlaceholderText;
    }
    if (_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["_SPFlight"].isEnabled(1534 /*CSISpoScopeControl*/) && Object(_isScopeControlAvailable__WEBPACK_IMPORTED_MODULE_0__["isScopeControlAvailable"])(spPageContextInfo)) {
        return _ScopingControlScopesString_resx__WEBPACK_IMPORTED_MODULE_3__["search"];
    }
    if (window.location.href.toLowerCase().indexOf('/_layouts/15/news.aspx') !== -1) {
        return _ScopingControlScopesString_resx__WEBPACK_IMPORTED_MODULE_3__["newsSearchSearchBoxPlaceholder"];
    }
    var searchScope = Object(_getSearchScope__WEBPACK_IMPORTED_MODULE_2__["getSearchScope"])(spPageContextInfo);
    if (searchScope === 2 /* Hub */ && !!spPageContextInfo.hubSiteId) {
        return _ScopingControlScopesString_resx__WEBPACK_IMPORTED_MODULE_3__["hubSiteSearchBoxPlaceholder"];
    }
    return searchScope === 1 /* Tenant */
        ? _ScopingControlScopesString_resx__WEBPACK_IMPORTED_MODULE_3__["SearchInSharePoint"]
        : _ScopingControlScopesString_resx__WEBPACK_IMPORTED_MODULE_3__["searchThisSite"];
}


/***/ })

/******/ })});;
//# sourceMappingURL=sp-search-common_[locale].js.map