define("1cea229f-b208-4202-8014-22503d92a019_0.1.0", ["tslib","@ms/sp-telemetry","@microsoft/sp-image-helper","@microsoft/sp-loader","@ms/odsp-core-bundle","@microsoft/office-ui-fabric-react-bundle","@microsoft/sp-lodash-subset","@microsoft/sp-core-library","@microsoft/sp-page-context","@ms/i18n-utilities","@ms/sp-component-utilities","@microsoft/sp-diagnostics","@microsoft/sp-http","@ms/odsp-utilities-bundle"], function(__WEBPACK_EXTERNAL_MODULE__17wl__, __WEBPACK_EXTERNAL_MODULE__2q6Q__, __WEBPACK_EXTERNAL_MODULE__8dK2__, __WEBPACK_EXTERNAL_MODULE_I6O9__, __WEBPACK_EXTERNAL_MODULE_K9kD__, __WEBPACK_EXTERNAL_MODULE_KL1q__, __WEBPACK_EXTERNAL_MODULE_Pk8u__, __WEBPACK_EXTERNAL_MODULE_UWqr__, __WEBPACK_EXTERNAL_MODULE_X_PM__, __WEBPACK_EXTERNAL_MODULE_Ycni__, __WEBPACK_EXTERNAL_MODULE_hiL___, __WEBPACK_EXTERNAL_MODULE_ut3N__, __WEBPACK_EXTERNAL_MODULE_vlQI__, __WEBPACK_EXTERNAL_MODULE_y88i__) { return /******/ (function(modules) { // webpackBootstrap
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
/******/ 		"sp-dataproviders": 0
/******/ 	};
/******/
/******/
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "chunk." + ({"sp-queryablemanagedproperties":"sp-queryablemanagedproperties","sp-retrievablemanagedproperties":"sp-retrievablemanagedproperties"}[chunkId]||chunkId) + "_" + "none" + ".js"
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
/******/ 	var jsonpArray = window["webpackJsonp_1cea229f_b208_4202_8014_22503d92a019_0_1_0"] = window["webpackJsonp_1cea229f_b208_4202_8014_22503d92a019_0_1_0"] || [];
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
/******/ 	  var regex = (typeof spScriptNamePattern !== 'undefined') ? spScriptNamePattern : /sp-dataproviders_en-us\.js/i;
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

/***/ "+UUZ":
/*!***********************************************************************!*\
  !*** ./lib/httpClients/sphome/SPHomeMicroserviceNotAvailableError.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * @internal
 */
var SPHomeMicroserviceNotAvailableError = /** @class */ (function () {
    function SPHomeMicroserviceNotAvailableError(message) {
        this.name = 'SPHomeMicroserviceNotAvailableError';
        this.message = 'SPHome Microservice not available in this environment';
        this.message = message || this.message;
    }
    return SPHomeMicroserviceNotAvailableError;
}());
/* harmony default export */ __webpack_exports__["default"] = (SPHomeMicroserviceNotAvailableError);


/***/ }),

/***/ "/3i9":
/*!******************************************************!*\
  !*** ./lib/dataProviders/news/MyNewsDataProvider.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _microsoft_sp_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/sp-http */ "vlQI");
/* harmony import */ var _microsoft_sp_http__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_http__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _models_NewsDataSource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./models/NewsDataSource */ "aE90");
/* harmony import */ var _DataProviderFlights__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../DataProviderFlights */ "Xkwe");
/* harmony import */ var _MicroServiceNewsDataProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MicroServiceNewsDataProvider */ "ugjH");
/* harmony import */ var _utilities_NewsUtilities__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utilities/NewsUtilities */ "JpAn");
/* harmony import */ var _loc_Strings_resx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./loc/Strings.resx */ "hE4m");
var _loc_Strings_resx__WEBPACK_IMPORTED_MODULE_6___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./loc/Strings.resx */ "hE4m", 1);
/* harmony import */ var _common_TieredCacheHelper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/TieredCacheHelper */ "nJGZ");








/**
 * @internal
 */
var MyNewsDataProvider = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(MyNewsDataProvider, _super);
    function MyNewsDataProvider() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.id = 'myNews';
        _this.title = _loc_Strings_resx__WEBPACK_IMPORTED_MODULE_6__["MyNewsDataProviderTitle"];
        return _this;
    }
    Object.defineProperty(MyNewsDataProvider.prototype, "qosMonitorLabel", {
        get: function () {
            return 'MyNewsDataSource';
        },
        enumerable: true,
        configurable: true
    });
    MyNewsDataProvider.prototype.executeRequest_deprecated = function (requestInfo) {
        return this._sphomeHttpClient.post(this.getMicroservicePath(requestInfo), _utilities_NewsUtilities__WEBPACK_IMPORTED_MODULE_5__["NewsUtilities"].getFilterQueryBody(requestInfo.filterKQLQuery));
    };
    MyNewsDataProvider.prototype.executeRequest = function (requestInfo) {
        var isCacheAndNetwork = _DataProviderFlights__WEBPACK_IMPORTED_MODULE_3__["default"].isCacheAndNetworkEnabled();
        var cacheOptions = {
            alias: _utilities_NewsUtilities__WEBPACK_IMPORTED_MODULE_5__["NewsUtilities"].aliasPrefix + this.id,
            id: requestInfo.webpartId,
            expirationDuration: 600000,
            cacheStrategy: isCacheAndNetwork ? _microsoft_sp_http__WEBPACK_IMPORTED_MODULE_1__["_CacheStrategy"].CacheAndNetwork : _microsoft_sp_http__WEBPACK_IMPORTED_MODULE_1__["_CacheStrategy"].CacheThenNetwork,
            extraProps: new Map([[_common_TieredCacheHelper__WEBPACK_IMPORTED_MODULE_7__["default"].useStalePropName, true]]) // tslint:disable-line:no-any
        };
        if (!requestInfo.canCacheRequest) {
            cacheOptions.cacheStrategy = _microsoft_sp_http__WEBPACK_IMPORTED_MODULE_1__["_CacheStrategy"].NetworkOnly;
        }
        return this._sphomeHttpClient.post(this.getMicroservicePath(requestInfo), _utilities_NewsUtilities__WEBPACK_IMPORTED_MODULE_5__["NewsUtilities"].getFilterQueryBody(requestInfo.filterKQLQuery), 
        /*version*/ undefined, 
        /*extraHeaders*/ undefined, cacheOptions);
    };
    MyNewsDataProvider.prototype.getMicroservicePath = function (requestInfo) {
        var endpointPath = 'news/filtered';
        var queryParams = "start=" + requestInfo.skip + "&count=" + requestInfo.count;
        queryParams += Object(_models_NewsDataSource__WEBPACK_IMPORTED_MODULE_2__["_appendAudienceFilteringQueryParam"])(requestInfo);
        queryParams += Object(_models_NewsDataSource__WEBPACK_IMPORTED_MODULE_2__["_appendLanguageOverrideQueryParam"])(requestInfo);
        return endpointPath + "?" + queryParams;
    };
    return MyNewsDataProvider;
}(_MicroServiceNewsDataProvider__WEBPACK_IMPORTED_MODULE_4__["default"]));
/* harmony default export */ __webpack_exports__["default"] = (MyNewsDataProvider);


/***/ }),

/***/ "/AZ8":
/*!*********************************************************!*\
  !*** ./lib/dataProviders/common/KMTieredCacheHelper.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ms_sp_component_utilities_lib_topics_TopicFlightingUtilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ms/sp-component-utilities/lib/topics/TopicFlightingUtilities */ "Tpx+");
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/sp-diagnostics */ "ut3N");
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @microsoft/sp-lodash-subset */ "Pk8u");
/* harmony import */ var _microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ms/sp-component-utilities */ "hiL/");
/* harmony import */ var _ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _common_TieredCacheHelper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/TieredCacheHelper */ "nJGZ");
/**
 * @copyright Microsoft Corporation. All rights reserved.
 */






var CORTEX_INVALID_IDB_PAGES = 'CortexInvalidIDBPages';
var ERROR_API_FAILURE = 'APIFailure';
/**
 * Handles the response from API calls for KM related features (e.g. Annotations, Suggestions, etc.)
 * when IndexedDB is enabled.
 *
 * Parses the client cachable response.
 * If no cached response exists then just return server response.
 * If no server response exists then just return the cached response.
 * If both cached and server responses coexist then there is a promise race which then
 * returns whichever response (caced or server) that gets processed first. If the cached
 * response is processed before the server response then we attach a callback to ensure the
 * server request is sent to update the cache.
 * @param response the client cachable response
 * @param isRawData the callback to test if the response data needs to be processed
 * @param processRawData the callback to process the rawData
 * @param args extra args to process the raw data
 * @param qosMonitor the QOS monitor used by processHttpResponse
 * @param qosTagPrefix the QOS log prefix tag representing the calling module (e.g. CSIKM.Annotate)
 * @internal
 */
var KMTieredCacheHelper = /** @class */ (function () {
    function KMTieredCacheHelper() {
    }
    KMTieredCacheHelper.parseClientCachableResponse = function (response, isRawData, isCachedDataEmpty, processRawData, // tslint:disable-line:no-any
    qosMonitor, qosTagPrefix, uniquePageId) {
        var _this = this;
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__["Validate"].isNotNullOrUndefined(response, 'response');
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__["Validate"].isNotNullOrUndefined(isRawData, 'isRawData');
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__["Validate"].isNotNullOrUndefined(isCachedDataEmpty, 'isCachedDataEmpty');
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__["Validate"].isNotNullOrUndefined(processRawData, 'processRawData');
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__["Validate"].isNotNullOrUndefined(qosMonitor, 'qosMonitor');
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__["Validate"].isNonemptyString(qosTagPrefix, 'qosTagPrefix');
        if (!response.cachedResponse && !response.serverResponse) {
            var err = new Error('ParseClientCachableResponse_EmptyResponse');
            qosMonitor.writeUnexpectedFailure(err.message);
            throw err;
        }
        // If uniquePageId is specified check to see if it's been flagged as invalid for returning from the cache
        var isPageInvalided = uniquePageId && this._isIdInvalidForCacheUsage(uniquePageId);
        // If it's a server only response or the page cache has been invalidated, don't look in
        // the cache and wait for the processed server response.
        if ((!response.cachedResponse || isPageInvalided) && response.serverResponse) {
            return response.serverResponse.then(function (spHttpClientResponse) {
                if (isPageInvalided) {
                    // The id is now valid since the cache gets updated after the server response
                    _this._clearIdFromInvalidCacheUsage(uniquePageId);
                }
                return _this._processHttpResponse(spHttpClientResponse, qosMonitor);
            });
        }
        var cachedValue;
        var cacheOnlyQos = new _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__["_QosMonitor"](qosTagPrefix + ".IndexedDB.CacheOnly.DP");
        var cacheResponse = _common_TieredCacheHelper__WEBPACK_IMPORTED_MODULE_5__["default"].processResponseRawData(response.cachedResponse, isRawData, processRawData.bind(this)).then(function (processedResponse) {
            cachedValue = JSON.stringify(processedResponse);
            cacheOnlyQos.writeSuccess();
            if (isCachedDataEmpty(processedResponse)) {
                return Promise.reject('Indexed DB cached data is empty');
            }
            else {
                return processedResponse;
            }
        });
        // If it's a cache only response, then just return the processed cached response
        if (!response.serverResponse) {
            return cacheResponse;
        }
        /* At this point we know we have both cached and server responses that need to be processed.
          We can't guarantee which of the two promises is resolved first, so we use a promise race to chain
          the server callback in the case where cached promise is processed before the server. */
        var serverResponseResolved = false;
        var serverResponse = response.serverResponse.then(function (spHttpClientResponse) {
            serverResponseResolved = true;
            if (cachedValue) {
                try {
                    _this._logCacheRefreshedQos(cachedValue, spHttpClientResponse, processRawData.bind(_this), qosTagPrefix);
                }
                catch (e) {
                    // do nothing
                }
            }
            return _this._processHttpResponse(spHttpClientResponse, qosMonitor);
        });
        /* We use GUIDs to identify whether the processed response is from the cache or the server.
          We utilize this information when processing the SmartRace, specifically in the case where
          we have cached response but no server response yet. When that happens, we execute additional
          logic to handle the server callback. */
        var cachedDataPromiseId = _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__["Guid"].parse('fdbcc3e7-1aa1-4bc5-809c-fd4b4cf3ce56');
        var serverDataPromiseId = _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__["Guid"].parse('ae67b80b-7315-447c-94bc-8d51c712bfb8');
        var promiseRaceMap = [
            {
                raceablePromise: cacheResponse,
                raceId: cachedDataPromiseId
            },
            {
                raceablePromise: serverResponse,
                raceId: serverDataPromiseId
            }
        ];
        return _ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_4__["SmartRace"].race(promiseRaceMap).then(function (raceResponse) {
            /* If cached response returns first, and there is callback for server response,
              server call should also happen */
            if (raceResponse.raceId === cachedDataPromiseId && !serverResponseResolved) {
                serverResponse
                    .then(function (processedServerResponse) {
                    return processedServerResponse;
                })
                    .catch(function (error) {
                    throw error;
                });
            }
            if (serverResponseResolved) {
                return serverResponse;
            }
            else {
                return cacheResponse;
            }
        });
    };
    /**
     * Does some basic validation on the input parameters and returns an IUniquePageID object
     * if validation was successful otherwise undefined.
     * @param siteId Guid that is the SPO page context site ID
     * @param webId Guid that is the SPO page context web ID
     * @param uniqueId Guid that is the SPO page store page field data unique ID
     */
    KMTieredCacheHelper.getUniquePageId = function (siteId, webId, uniqueId) {
        var _a, _b, _c;
        if (((_a = siteId) === null || _a === void 0 ? void 0 : _a.toString().length) && ((_b = webId) === null || _b === void 0 ? void 0 : _b.toString().length) && ((_c = uniqueId) === null || _c === void 0 ? void 0 : _c.toString().length)) {
            return {
                siteId: siteId.toString(),
                webId: webId.toString(),
                uniqueId: uniqueId.toString()
            };
        }
        else {
            return undefined;
        }
    };
    /**
     * Adds the specified page to the list of invalidated pages for Indexed DB usage.
     */
    KMTieredCacheHelper.setInvalidForCacheUsage = function (uniquePageId) {
        var _a;
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__["Validate"].isNotNullOrUndefined(uniquePageId.uniqueId, 'uniquePageId.uniqueId');
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__["Validate"].isNotNullOrUndefined(uniquePageId.siteId, 'uniquePageId.siteId');
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__["Validate"].isNotNullOrUndefined(uniquePageId.webId, 'uniquePageId.webId');
        var invalidIds = (_a = this._getInvalidIdsFromStorage(), (_a !== null && _a !== void 0 ? _a : []));
        if (this._getIndexOf(uniquePageId, invalidIds) === this._indexNotPresent) {
            invalidIds.push(uniquePageId);
            sessionStorage.setItem(CORTEX_INVALID_IDB_PAGES, JSON.stringify(invalidIds));
        }
    };
    /**
     * Removes the specified page from the list of flagged invalid pages for Indexed DB usage.
     */
    KMTieredCacheHelper._clearIdFromInvalidCacheUsage = function (uniquePageId) {
        var invalidIds = this._getInvalidIdsFromStorage();
        if (invalidIds) {
            var index = this._getIndexOf(uniquePageId, invalidIds);
            if (index !== this._indexNotPresent) {
                if (invalidIds.length === 1) {
                    sessionStorage.removeItem(CORTEX_INVALID_IDB_PAGES);
                }
                else {
                    invalidIds.splice(index, 1);
                    sessionStorage.setItem(CORTEX_INVALID_IDB_PAGES, JSON.stringify(invalidIds));
                }
            }
        }
    };
    /**
     * Returns true if the specified page has been flagged as invalid for cache usage.
     */
    KMTieredCacheHelper._isIdInvalidForCacheUsage = function (uniquePageId) {
        var invalidIds = this._getInvalidIdsFromStorage();
        if (invalidIds) {
            return this._getIndexOf(uniquePageId, invalidIds) !== this._indexNotPresent;
        }
        else {
            return false;
        }
    };
    /**
     * Returns the position of the first occurrence of a specified unique page ID in a list of IDs.
     * @param uniquePageId The IUniquePageId to search for
     * @param listOfIds The list of IUniquePageIds to search in
     */
    KMTieredCacheHelper._getIndexOf = function (uniquePageId, listOfIds) {
        return Object(_microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_3__["findIndex"])(listOfIds, function (element) {
            return element.uniqueId === uniquePageId.uniqueId &&
                element.siteId === uniquePageId.siteId &&
                element.webId === uniquePageId.webId;
        });
    };
    /**
     * Returns the list of flagged page IDs from session storage which have been flagged as invalid from cache.
     */
    KMTieredCacheHelper._getInvalidIdsFromStorage = function () {
        var _a, _b;
        if ((_a = sessionStorage) === null || _a === void 0 ? void 0 : _a.getItem) {
            var rawInvalidPages = (_b = sessionStorage.getItem(CORTEX_INVALID_IDB_PAGES), (_b !== null && _b !== void 0 ? _b : ''));
            if (!!rawInvalidPages) {
                return JSON.parse(rawInvalidPages);
            }
        }
        else {
            return undefined;
        }
    };
    KMTieredCacheHelper._logCacheRefreshedQos = function (cachedResponse, httpClientResponse, processRawData, // tslint:disable-line:no-any
    qosTagPrefix) {
        var _this = this;
        if (!httpClientResponse.clone || httpClientResponse.status !== 200) {
            return;
        }
        var response = httpClientResponse.clone();
        response
            .json()
            .then(function (rawData) {
            // Compare updated response with cached value and send telemetry on whether the entities have changed.
            var cacheUpdateTag;
            var newResponse = processRawData(rawData);
            if (_this._compareResponseData(cachedResponse, JSON.stringify(newResponse))) {
                cacheUpdateTag = 'RefreshedNoChanges.DP';
            }
            else {
                cacheUpdateTag = 'Refreshed.DP';
            }
            var cacheUpdatedQos = new _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__["_QosMonitor"](qosTagPrefix + ".IndexedDB." + cacheUpdateTag);
            cacheUpdatedQos.writeSuccess();
        })
            .catch(function (error) {
            return Promise.reject(error);
        });
    };
    KMTieredCacheHelper._compareResponseData = function (cachedResponse, newResponse) {
        var _a;
        return !!((_a = cachedResponse) === null || _a === void 0 ? void 0 : _a.length) && cachedResponse === newResponse;
    };
    KMTieredCacheHelper._getExtraData = function (response) {
        return {
            mscv: response.headers.get('ms-cv'),
            requestId: response.headers.get('request-id'),
            status: response.status
        };
    };
    KMTieredCacheHelper._processAPIError = function (response, qosMonitor) {
        var extraData = this._getExtraData(response);
        var errorMessage = extraData.mscv === null
            ? "Substrate Cortex API server failure: $tag::" + response.status + "::" + response.statusText
            : "Microservice API server failure: $tag::" + response.status + "::" + response.statusText;
        var error = new Error(errorMessage);
        if (response.status === 403) {
            qosMonitor.writeExpectedFailure(ERROR_API_FAILURE, error, extraData);
            // We don't want to throw error for 403 this is an expected error.
            return undefined;
        }
        else {
            qosMonitor.writeUnexpectedFailure(ERROR_API_FAILURE, error, extraData);
            return error;
        }
    };
    /**
     * Handles the response from API call of KM related features.
     * @param response response from the KM feature API
     * @param qosMonitor qos monitor
     */
    KMTieredCacheHelper._processHttpResponse = function (response, qosMonitor) {
        Object(_ms_sp_component_utilities_lib_topics_TopicFlightingUtilities__WEBPACK_IMPORTED_MODULE_0__["setCortexDisabledFlag"])(response);
        if (response.ok) {
            qosMonitor.writeSuccess(this._getExtraData(response));
            return response.json();
        }
        else {
            var err = this._processAPIError(response, qosMonitor);
            if (err) {
                return Promise.reject(err);
            }
            else {
                // Resolving undefined if 403 to be treated as expected error
                return Promise.resolve(undefined);
            }
        }
    };
    KMTieredCacheHelper.onlyIndexedDB = _common_TieredCacheHelper__WEBPACK_IMPORTED_MODULE_5__["default"].onlyIndexedDB;
    KMTieredCacheHelper._indexNotPresent = -1;
    return KMTieredCacheHelper;
}());
/* harmony default export */ __webpack_exports__["default"] = (KMTieredCacheHelper);


/***/ }),

/***/ "/Lye":
/*!**************************************************************!*\
  !*** ./lib/dataProviders/page/PageMetadataProviderLoader.js ***!
  \**************************************************************/
/*! exports provided: PageMetadataProviderLoader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageMetadataProviderLoader", function() { return PageMetadataProviderLoader; });
/* harmony import */ var _microsoft_sp_loader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/sp-loader */ "I6O9");
/* harmony import */ var _microsoft_sp_loader__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_loader__WEBPACK_IMPORTED_MODULE_0__);

var PageMetadataProviderLoader = /** @class */ (function () {
    function PageMetadataProviderLoader() {
    }
    PageMetadataProviderLoader.load = function (options) {
        if (!PageMetadataProviderLoader._promise) {
            // tslint:disable-next-line:max-line-length
            PageMetadataProviderLoader._promise = _microsoft_sp_loader__WEBPACK_IMPORTED_MODULE_0__["SPComponentLoader"].loadComponentById(PageMetadataProviderLoader._dataProviderComponentId).then(function (module) { return new module.PageDataProvider(options); });
        }
        return PageMetadataProviderLoader._promise;
    };
    PageMetadataProviderLoader._dataProviderComponentId = '1cea229f-b208-4202-8014-22503d92a019';
    return PageMetadataProviderLoader;
}());



/***/ }),

/***/ "0itf":
/*!****************************************************!*\
  !*** ./lib/httpClients/sphome/SPHomeHttpClient.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/office-ui-fabric-react-bundle */ "KL1q");
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/sp-diagnostics */ "ut3N");
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ms/sp-component-utilities */ "hiL/");
/* harmony import */ var _ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _microsoft_sp_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @microsoft/sp-http */ "vlQI");
/* harmony import */ var _microsoft_sp_http__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_http__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _microsoft_sp_page_context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @microsoft/sp-page-context */ "X+PM");
/* harmony import */ var _microsoft_sp_page_context__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_page_context__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _SPHomeMicroserviceNotAvailableError__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./SPHomeMicroserviceNotAvailableError */ "+UUZ");
/* harmony import */ var _common_SPHttpMicroserviceClient__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/SPHttpMicroserviceClient */ "yCFC");
/* harmony import */ var _dataProviders_common_TieredCacheHelper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../dataProviders/common/TieredCacheHelper */ "nJGZ");
/* harmony import */ var _dataProviders_DataProvidersKillSwitches__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../dataProviders/DataProvidersKillSwitches */ "evK2");











// Window Variables
var TOKEN_EXP_OFFSET = 15000; // 15 seconds
var SPHOME_CLIENT_CONTEXT = '_spHomeClientContext';
var TOKEN_PREFETCH_COMPLETE = '_spHomeClientContextLoaded';
var _useSPHttpClientKS = new _ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_2__["KillSwitch"]('0306551a-b040-4e46-ae3d-98f35375764b' /*'02/18/2020', 'WEX_UseSpHttpClientInSpHomeDataProvider' */);
/**
 * SPHomeHttpClient is used to perform REST calls to the SharePoint Home microservice.
 * For API documentation see https://aka.ms/sphomeapidoc
 * It abstracts the fetching of tokens and passing the correct headers
 * when calling the microservice.
 * @internal
 */
var SPHomeHttpClient = /** @class */ (function () {
    function SPHomeHttpClient(serviceScope) {
        var _this = this;
        this._isServiceAvailable = undefined;
        this._hasPrefetchedToken = false;
        this._requestUpdater = function (props) {
            return _this._fetchTokenIfExpired().then(function () {
                return {
                    url: _this._generateUrlVersionedPath(props.url),
                    options: _this._getRequestOptions(props.options)
                };
            });
        };
        if (this._isPrefetchTokenFlightEnabled) {
            this._initializeFromPrefetchedToken = new Promise(function (resolve, reject) {
                var asyncObj = new _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__["Async"]();
                window[TOKEN_PREFETCH_COMPLETE] = function () {
                    asyncObj.dispose();
                    var qosMonitor = new _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__["_QosMonitor"]('SpHomeClientContextPrefetch');
                    try {
                        _this._initializeWithPrefetchedToken();
                        if (!_this._hasPrefetchedToken) {
                            qosMonitor.writeUnexpectedFailure('NoPrefetchedToken');
                        }
                        else {
                            qosMonitor.writeSuccess();
                        }
                    }
                    catch (error) {
                        qosMonitor.writeUnexpectedFailure('Unexpected', error);
                        reject(error);
                    }
                    resolve();
                };
                // Guarantee of promise closure in case TOKEN_PREFETCH_COMPLETE is never executed in extreme scenarios
                // like environment does not support prefetch token or unexpected error occured on server.
                // However do not build feature on timeout. If it is occuring more often you need to fix root cause.
                // See VSO#876977 for more context
                asyncObj.setTimeout(function () { return !_this._hasPrefetchedToken && reject(new Error('Timeout')); }, 10000);
            });
        }
        this._stopUsingSPHttpMSClient = Object(_dataProviders_DataProvidersKillSwitches__WEBPACK_IMPORTED_MODULE_9__["stopUsingSPHttpMSClient"])();
        serviceScope.whenFinished(function () {
            _this._spHttpClient = serviceScope.consume(_microsoft_sp_http__WEBPACK_IMPORTED_MODULE_3__["SPHttpClient"].serviceKey);
            if (!_this._stopUsingSPHttpMSClient) {
                _this._spHttpMicroserviceClient = serviceScope.consume(_common_SPHttpMicroserviceClient__WEBPACK_IMPORTED_MODULE_7__["serviceKey"]);
                _this._spHttpMicroserviceClient.requestUpdater = _this._requestUpdater;
            }
            _this._httpClient = serviceScope.consume(_microsoft_sp_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"].serviceKey);
            _this._pageContext = serviceScope.consume(_microsoft_sp_page_context__WEBPACK_IMPORTED_MODULE_5__["PageContext"].serviceKey);
            if (_this._isPrefetchTokenFlightEnabled) {
                _this._initializeWithPrefetchedToken();
            }
            _this._isUserSupportedBySubstrate = _this._isSubtrateSupportedUser(serviceScope.consume(_microsoft_sp_page_context__WEBPACK_IMPORTED_MODULE_5__["PageContext"].serviceKey).user);
        });
    }
    SPHomeHttpClient.prototype.get = function (path, version, extraHeaders, cacheConfiguration) {
        if (cacheConfiguration) {
            return this._get(path, version, extraHeaders, cacheConfiguration);
        }
        else {
            return this._get_deprecated(path, version, extraHeaders);
        }
    };
    SPHomeHttpClient.prototype.post = function (path, body, version, extraHeaders, cacheConfiguration) {
        if (cacheConfiguration) {
            return this._post(path, body, version, extraHeaders, cacheConfiguration);
        }
        else {
            return this._post_deprecated(path, body, version, extraHeaders);
        }
    };
    Object.defineProperty(SPHomeHttpClient.prototype, "isServiceAvailable", {
        get: function () {
            var _this = this;
            // Use cached value since _fetchTokenIfExpired will otherwise
            // retry even if it already determined that service isn't available.
            if (this._isServiceAvailable !== undefined) {
                return Promise.resolve(this._isServiceAvailable);
            }
            else {
                return this._fetchTokenIfExpired()
                    .then(function () {
                    _this._isServiceAvailable = true;
                    return _this._isServiceAvailable;
                })
                    .catch(function (error) {
                    _this._isServiceAvailable = false;
                    return _this._isServiceAvailable;
                });
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SPHomeHttpClient.prototype, "isUserSupportedBySubstrate", {
        get: function () {
            return this._isUserSupportedBySubstrate;
        },
        enumerable: true,
        configurable: true
    });
    SPHomeHttpClient.prototype._get = function (path, version, extraHeaders, cacheConfiguration) {
        var _this = this;
        if (!this._stopUsingSPHttpMSClient && this._spHttpMicroserviceClient) {
            var versionedPath = this._generateVersionedPath(path, version);
            return this._spHttpMicroserviceClient.get(versionedPath, new _microsoft_sp_http__WEBPACK_IMPORTED_MODULE_3__["SPHttpClientConfiguration"](_microsoft_sp_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"].configurations.v1, {}), this._getRequestOptions({}, extraHeaders), this._getCacheConfiguration(cacheConfiguration, versionedPath));
        }
        return this._fetchTokenIfExpired().then(function () {
            return _this._spHttpClient.get(_this._generateUrl(path, version), new _microsoft_sp_http__WEBPACK_IMPORTED_MODULE_3__["SPHttpClientConfiguration"](_microsoft_sp_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"].configurations.v1, {}), _this._getRequestOptions({}, extraHeaders), cacheConfiguration);
        });
    };
    SPHomeHttpClient.prototype._get_deprecated = function (path, version, extraHeaders) {
        var _this = this;
        return this._fetchTokenIfExpired().then(function () {
            if (!_useSPHttpClientKS.isActivated()) {
                return _this._spHttpClient.get(_this._generateUrl(path, version), new _microsoft_sp_http__WEBPACK_IMPORTED_MODULE_3__["SPHttpClientConfiguration"](_microsoft_sp_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"].configurations.v1, {}), _this._getRequestOptions({}, extraHeaders));
            }
            return _this._httpClient.get(_this._generateUrl(path, version), _microsoft_sp_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"].configurations.v1, _this._getRequestOptions({}, extraHeaders));
        });
    };
    SPHomeHttpClient.prototype._post = function (path, body, version, extraHeaders, cacheConfiguration) {
        var _this = this;
        if (body === void 0) { body = ''; }
        if (!this._stopUsingSPHttpMSClient && this._spHttpMicroserviceClient) {
            var versionedPath = this._generateVersionedPath(path, version);
            return this._spHttpMicroserviceClient.fetch(versionedPath, new _microsoft_sp_http__WEBPACK_IMPORTED_MODULE_3__["SPHttpClientConfiguration"](_microsoft_sp_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"].configurations.v1, {}), this._getRequestOptions({ body: body }, extraHeaders, 'POST'), this._getCacheConfiguration(cacheConfiguration, versionedPath));
        }
        return this._fetchTokenIfExpired().then(function () {
            return _this._spHttpClient.fetch(_this._generateUrl(path, version), new _microsoft_sp_http__WEBPACK_IMPORTED_MODULE_3__["SPHttpClientConfiguration"](_microsoft_sp_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"].configurations.v1, {}), _this._getRequestOptions({ body: body }, extraHeaders, 'POST'), cacheConfiguration);
        });
    };
    SPHomeHttpClient.prototype._post_deprecated = function (path, body, version, extraHeaders) {
        var _this = this;
        if (body === void 0) { body = ''; }
        return this._fetchTokenIfExpired().then(function () {
            if (!_useSPHttpClientKS.isActivated()) {
                return _this._spHttpClient.post(_this._generateUrl(path, version), new _microsoft_sp_http__WEBPACK_IMPORTED_MODULE_3__["SPHttpClientConfiguration"](_microsoft_sp_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"].configurations.v1, {}), _this._getRequestOptions({ body: body }, extraHeaders));
            }
            return _this._httpClient.post(_this._generateUrl(path, version), _microsoft_sp_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"].configurations.v1, _this._getRequestOptions({ body: body }, extraHeaders));
        });
    };
    SPHomeHttpClient.prototype._getCacheConfiguration = function (cacheConfiguration, parentKeyOverride) {
        if (cacheConfiguration) {
            if (!cacheConfiguration.extraProps) {
                cacheConfiguration.extraProps = new Map(); // tslint:disable-line:no-any
            }
            cacheConfiguration.extraProps.set(_dataProviders_common_TieredCacheHelper__WEBPACK_IMPORTED_MODULE_8__["default"].parentKeyOverride, parentKeyOverride);
        }
        return cacheConfiguration;
    };
    SPHomeHttpClient.prototype._generateUrl = function (path, version) {
        if (version === void 0) { version = 1; }
        return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_4__["Text"].format(SPHomeHttpClient.MICROSERVICE_ENDPOINT, this._url, version, path);
    };
    SPHomeHttpClient.prototype._generateUrlVersionedPath = function (versionedPath) {
        return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_4__["Text"].format(SPHomeHttpClient.MICROSERVICE_ENDPOINT_V, this._url, versionedPath);
    };
    SPHomeHttpClient.prototype._generateVersionedPath = function (path, version) {
        if (version === void 0) { version = 1; }
        return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_4__["Text"].format(SPHomeHttpClient.VERSIONED_PATH, version, path);
    };
    SPHomeHttpClient.prototype._isTokenValid = function () {
        return this._tokenExpiry && this._tokenExpiry > new Date();
    };
    /**
     * To talk with the microservice we need three pieces of information:
     * - the url of the microservice to talk to
     * - the token to pass to the microservice for authentication
     * - the payload we need to pass to the microservice so it understands how
     *   to talk to sharepoint
     * These all come from the same endpoint and can be fetched in a single request
     */
    SPHomeHttpClient.prototype._getTokenAndMicroserviceDetails = function () {
        var _this = this;
        var qosMonitor = new _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__["_QosMonitor"]('SPHomeHttpClient');
        var correlationId;
        var url = this._pageContext.web.absoluteUrl + "/_api/sphomeservice/context?$expand=Token,Payload";
        return this._spHttpClient
            .get(url, _microsoft_sp_http__WEBPACK_IMPORTED_MODULE_3__["SPHttpClient"].configurations.v1)
            .then(function (response) {
            correlationId = response.correlationId ? response.correlationId.toString() : undefined;
            if (response.ok) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                qosMonitor.writeUnexpectedFailure('FailedResponse', error, {
                    correlationId: correlationId,
                    Status: response.status
                });
                throw error;
            }
        })
            .then(function (response) {
            if (!response.Token || !response.Token.access_token) {
                _this._isServiceAvailable = false;
                throw new _SPHomeMicroserviceNotAvailableError__WEBPACK_IMPORTED_MODULE_6__["default"]();
            }
            _this._isServiceAvailable = true;
            _this._token = response.Token.access_token;
            _this._tokenExpiry = new Date(Number(response.Token.expires_on) * 1000 - TOKEN_EXP_OFFSET);
            _this._payload = response.Payload;
            _this._url = response.Urls[0];
            _this._alreadyGettingTokenPromise = undefined;
            qosMonitor.writeSuccess();
        })
            .catch(function (error) {
            if (error instanceof _SPHomeMicroserviceNotAvailableError__WEBPACK_IMPORTED_MODULE_6__["default"]) {
                qosMonitor.writeExpectedFailure('NotAvailable', error, { correlationId: correlationId });
            }
            else {
                qosMonitor.writeUnexpectedFailure('SPHomeHttpClient', error, { correlationId: correlationId });
            }
            _this._alreadyGettingTokenPromise = undefined;
            throw error;
        });
    };
    SPHomeHttpClient.prototype._getRequestOptions = function (options, extraHeaders, method) {
        if (options === void 0) { options = {}; }
        var _a;
        options.headers = options.headers || {};
        if (this._token) {
            options.headers['Authorization'] = "Bearer " + this._token; // tslint:disable-line:no-string-literal
        }
        if (this._payload) {
            options.headers['SPHome-ApiContext'] = this._payload;
        }
        options.headers['Content-Type'] = 'application/json';
        options.headers['SPHome-ClientType'] = 'PagesWeb';
        if ((_a = this._pageContext) === null || _a === void 0 ? void 0 : _a.legacyPageContext) {
            // tslint:disable-next-line:no-string-literal
            options.headers['FarmLabel'] = this._pageContext.legacyPageContext.farmLabel;
        }
        if (method) {
            options.headers['X-HTTP-Method'] = method;
            options.method = method;
        }
        if (extraHeaders) {
            extraHeaders.forEach(function (value, key) {
                options.headers[key] = value;
            });
        }
        return options;
    };
    SPHomeHttpClient.prototype._initializeWithPrefetchedToken = function () {
        var qosMonitor = new _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__["_QosMonitor"]('InitializeSpHomeClientContext');
        try {
            if (!this._hasPrefetchedToken) {
                if (window[SPHOME_CLIENT_CONTEXT] && window[SPHOME_CLIENT_CONTEXT] !== []) {
                    var spHomeClientContext = window[SPHOME_CLIENT_CONTEXT];
                    var token = spHomeClientContext.Token;
                    this._token = token && token.AccessToken;
                    this._payload = spHomeClientContext.Payload;
                    this._url = spHomeClientContext.Urls && spHomeClientContext.Urls[0];
                    this._tokenExpiry =
                        token &&
                            token.ExpiresOn &&
                            new Date(Number(spHomeClientContext.Token.ExpiresOn) * 1000 - TOKEN_EXP_OFFSET);
                    this._hasPrefetchedToken = true;
                    qosMonitor.writeSuccess();
                }
                else {
                    if (window[SPHOME_CLIENT_CONTEXT] === []) {
                        qosMonitor.writeUnexpectedFailure('SPHomeClientContextNotAvailable', new Error('EmptyTokenReturned'));
                    }
                    else {
                        qosMonitor.writeExpectedFailure('SPHomeClientContextNotAvailable', new Error('TokenNotAvailable'));
                    }
                }
            }
        }
        catch (error) {
            this._hasPrefetchedToken = false;
            qosMonitor.writeUnexpectedFailure('InitializeSPHomeClientContextFailed', error.message);
        }
        return this._hasPrefetchedToken;
    };
    SPHomeHttpClient.prototype._fetchTokenIfExpired = function () {
        if (this._isTokenValid()) {
            return Promise.resolve();
        }
        if (!this._alreadyGettingTokenPromise) {
            if (this._isPrefetchTokenFlightEnabled) {
                // Return the response that comes back faster
                var prefetchTokenPromiseId = _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_4__["Guid"].parse('928806ac-3e49-4e4e-9114-7c392215230f');
                var microserviceTokenPromiseId = _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_4__["Guid"].parse('5ff931f9-8682-4614-b4f1-9b8d1aa74942');
                var promiseRaceMap = [
                    {
                        raceablePromise: this._initializeFromPrefetchedToken,
                        raceId: prefetchTokenPromiseId
                    },
                    {
                        raceablePromise: this._getTokenAndMicroserviceDetails(),
                        raceId: microserviceTokenPromiseId
                    }
                ];
                this._alreadyGettingTokenPromise = _ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_2__["SmartRace"].race(promiseRaceMap)
                    .then(function (raceResponse) {
                    return raceResponse.raceablePromise;
                })
                    .catch(function (error) {
                    throw error;
                });
            }
            else {
                this._alreadyGettingTokenPromise = this._getTokenAndMicroserviceDetails();
            }
        }
        return this._alreadyGettingTokenPromise;
    };
    Object.defineProperty(SPHomeHttpClient.prototype, "_isPrefetchTokenFlightEnabled", {
        get: function () {
            return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_4__["_SPFlight"].isEnabled(1265 /* SPHomeServiceContextPrefetch */);
        },
        enumerable: true,
        configurable: true
    });
    SPHomeHttpClient.prototype._isSubtrateSupportedUser = function (user) {
        if (user) {
            var isAnonymousGuestUser = user.isAnonymousGuestUser, isExternalGuestUser = user.isExternalGuestUser;
            return !isAnonymousGuestUser && !isExternalGuestUser;
        }
        return true; // In the unlikely case of a race condition assume supported
    };
    SPHomeHttpClient.serviceKey = _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_4__["ServiceKey"].create('sp-component-utilities:SPHomeHttpClient', SPHomeHttpClient);
    SPHomeHttpClient.MICROSERVICE_ENDPOINT = '{0}/api/v{1}/{2}';
    SPHomeHttpClient.MICROSERVICE_ENDPOINT_V = '{0}/api/{1}';
    SPHomeHttpClient.VERSIONED_PATH = 'v{0}/{1}';
    return SPHomeHttpClient;
}());
/* harmony default export */ __webpack_exports__["default"] = (SPHomeHttpClient);


/***/ }),

/***/ "0oRV":
/*!*****************************************************!*\
  !*** ./lib/dataProviders/search/KQLQueryBuilder.js ***!
  \*****************************************************/
/*! exports provided: AUDIENCE_TARGET_KQL_QUERY, KQLQueryBuilder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUDIENCE_TARGET_KQL_QUERY", function() { return AUDIENCE_TARGET_KQL_QUERY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KQLQueryBuilder", function() { return KQLQueryBuilder; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/sp-lodash-subset */ "Pk8u");
/* harmony import */ var _microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ms/sp-component-utilities */ "hiL/");
/* harmony import */ var _ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _enums_ContentLocation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./enums/ContentLocation */ "nNRp");
/* harmony import */ var _enums_ContentType__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./enums/ContentType */ "G3Sr");
/* harmony import */ var _common_enums_DocumentType__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/enums/DocumentType */ "kyLF");
/* harmony import */ var _common_enums_FilterOperator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/enums/FilterOperator */ "PdqL");
/* harmony import */ var _common_enums_FilterSince__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/enums/FilterSince */ "R8uK");
/* harmony import */ var _common_enums_FilterType__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../common/enums/FilterType */ "Z0FC");
/* harmony import */ var _enums_ManagedDataType__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./enums/ManagedDataType */ "ui8f");
/* harmony import */ var _search_enums_SearchAPISortDirection__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../search/enums/SearchAPISortDirection */ "zDft");
/* harmony import */ var _enums_SortType__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./enums/SortType */ "nDsE");
/* harmony import */ var _common_enums_UserType__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../common/enums/UserType */ "JUc+");
/* harmony import */ var _common_TokenUtilities__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../common/TokenUtilities */ "YoTJ");
/* harmony import */ var _DataProviderFlights__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../DataProviderFlights */ "Xkwe");
/* harmony import */ var _DataProvidersKillSwitches__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../DataProvidersKillSwitches */ "evK2");
// Copyright (c) Microsoft Corporation. All rights reserved.
















var CREATED = 'Created';
var LAST_MODIFIED = 'LastModifiedTime';
var DEFAULT_SOURCE_ID = '8413CD39-2156-4E00-B54D-11EFD9ABDB89';
var CONTACT_SEARCH_STRING = 'ContentTypeId:0x0106*';
var WIKI_SEARCH_STRING = 'ContentTypeId:0x010108*';
var WEBPART_SEARCH_STRING = 'ContentTypeId:0x01010901*';
var MODERN_SEARCH_STRING = 'ContentTypeId:0x0101009D1CB255DA76424F860D91F20E6C4118*';
var PUBLISHING_SEARCH_STRING = 'ContentTypeId:0x010100C568DB52D9D0A14D9B2FDCC96666E9F2007948130EC3DB064584E219954237AF39*';
var DOCUMENT_SEARCH_STRING = 'IsDocument:1';
var EVENT_SEARCH_STRING = 'ContentTypeId:0x0102*';
var ISSUE_SEARCH_STRING = 'ContentTypeId:0x0103*';
var TASK_SEARCH_STRING = 'ContentTypeId:0x0108*';
var LINK_SEARCH_STRING = 'ContentTypeId:0x0105*';
var VIDEO_SEARCH_STRING = 'ContentTypeId:0x010100F3754F12A9B6490D9622A01FE9D8F012*';
var HUB_SITE_SEARCH_PROPERTY = 'DepartmentId';
// Search schema limit for managed properties
// https://technet.microsoft.com/en-us/library/cc262787(v=office.15).aspx#Search
var MANAGED_PROPERTIES_LIMIT = 50000;
/**
 * @internal
 */
var AUDIENCE_TARGET_KQL_QUERY = '(ModernAudienceAadObjectIds:{User.Audiences} OR NOT IsAudienceTargeted:true)';
/**
 * @internal
 */
var KQLQueryBuilder = /** @class */ (function () {
    function KQLQueryBuilder() {
    }
    KQLQueryBuilder.generateKqlFromFilters = function (p) {
        /*
         * Like filter types are arranged together so that they can be OR'd together.  For example:
         *   (title:"SharePoint*" OR title:"Office*") AND modifiedby:"Henry Ford"
         */
        var kql = '';
        var isFilteringByDate = false;
        if (!p || !p.query || !p.query.filters) {
            return { expr: kql, isFilteringByDate: isFilteringByDate };
        }
        /*
         * Like filter types are arranged together so that they can be OR'd together.  For example:
         *   (title:"SharePoint*" OR title:"Office*") AND modifiedby:"Henry Ford"
         */
        // create a copy (not deep) to preserve the original sort order
        var filters = Object(_microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_1__["clone"])(p.query.filters);
        // remove any undefined filters
        var i = filters.length;
        while (i--) {
            if ((filters[i].value === undefined || filters[i].value === '') &&
                (filters[i].userType === undefined || filters[i].userType === _common_enums_UserType__WEBPACK_IMPORTED_MODULE_12__["UserType"].SpecificUser)) {
                filters.splice(i, 1);
            }
        }
        // sort the filters so like filter types are next to each other
        filters = filters.sort(function (a, b) {
            return a.filterType - b.filterType;
        });
        var inParens = false;
        for (var j = 0; j < filters.length; j++) {
            // insert appropriate operator to separate expressions
            if (j > 0) {
                kql += " " + (inParens ? 'OR' : 'AND') + " ";
            }
            var filter = filters[j];
            var nextFilter = j < filters.length - 1 ? filters[j + 1] : {};
            // if not in parens and having more than one filter left,
            // check to see if we should open parens by peeking ahead at the next filter
            if (!inParens &&
                nextFilter.value !== undefined && // there are more filters after this one
                filter.filterType === nextFilter.filterType) {
                // next filter is the same as this one
                kql += '(';
                inParens = true;
            }
            var filterExpr = this._kqlFilter(filter, p.queryableManagedProperties);
            kql += filterExpr.expr;
            isFilteringByDate = isFilteringByDate || filterExpr.isFilteringByDate;
            // if in parens and not having another matching filter type, close the parens
            if (inParens && filter.filterType !== nextFilter.filterType) {
                // next filter is not the same as this one
                kql += ')';
                inParens = false;
            }
        }
        if (kql.length > 0) {
            kql += ' AND';
        }
        return { expr: kql, isFilteringByDate: isFilteringByDate };
    };
    // For usage, please refer to the test case
    //   'should build queryTemplate using filters and filterGroups' in KQLQueryBuilder.test.ts.
    KQLQueryBuilder.generateKqlFromFilterGroup = function (p) {
        if (!p || !p.query || !p.query.filterGroup) {
            return { expr: '', isFilteringByDate: false };
        }
        var filterExpr = this._buildFilterGroupExpr(p.query.filterGroup, p.queryableManagedProperties);
        if (filterExpr.expr.length > 0) {
            filterExpr.expr += ' AND';
        }
        return filterExpr;
    };
    KQLQueryBuilder.generateQuery = function (p, pageContext) {
        /*
         * Most of the query options are implemented in the KQL query passed to the QueryTemplate search option.
         */
        var kql = '';
        if (!p || !p.query) {
            return { queryTemplate: kql };
        }
        var isFilteringByDate = false;
        var hasFilters = false;
        if (p.query.advancedQueryText) {
            kql = p.query.advancedQueryText;
        }
        else if (p.query.filterGroup) {
            var filterExpr = this.generateKqlFromFilterGroup(p);
            kql = filterExpr.expr;
            isFilteringByDate = filterExpr.isFilteringByDate;
        }
        else if (p.query.filters) {
            var filterExpr = this.generateKqlFromFilters(p);
            kql = filterExpr.expr;
            isFilteringByDate = filterExpr.isFilteringByDate;
        }
        if (kql.length > 0) {
            hasFilters = true;
        }
        kql += " " + this.generateContentLocationKqlQuery(p);
        // Generate KQL for Content and Document Type
        kql += this._generateContentKql(p, hasFilters);
        var timeZoneId = undefined;
        if (isFilteringByDate) {
            timeZoneId = pageContext.user.preferUserTimeZone
                ? pageContext.user.timeZoneInfo.id
                : pageContext.web.timeZoneInfo.id;
        }
        if (p.audienceTarget) {
            kql = kql.trim() + (" " + AUDIENCE_TARGET_KQL_QUERY);
        }
        return { queryTemplate: kql.trim(), timeZoneId: timeZoneId };
    };
    KQLQueryBuilder.generateContentLocationKqlQuery = function (options) {
        var _this = this;
        switch (options.query.contentLocation) {
            case _enums_ContentLocation__WEBPACK_IMPORTED_MODULE_3__["ContentLocation"].AllSitesInTheHub:
                return "" + this._siteCriteria(options.hubSiteId, HUB_SITE_SEARCH_PROPERTY);
            case _enums_ContentLocation__WEBPACK_IMPORTED_MODULE_3__["ContentLocation"].CurrentSite:
                return this._generateSiteIdCriteria(options.siteId, options.webId);
            case _enums_ContentLocation__WEBPACK_IMPORTED_MODULE_3__["ContentLocation"].CurrentSiteCollection:
                return "(" + this._siteCriteria(options.siteId, 'NormSiteID') + ")";
            case _enums_ContentLocation__WEBPACK_IMPORTED_MODULE_3__["ContentLocation"].SelectedSites:
                if (options.siteIds && options.siteIds.length > 0) {
                    var exps = options.siteIds.map(function (site) {
                        return _this._generateSiteIdCriteria(site.siteId, site.webId);
                    });
                    return "(" + exps.join(' OR ') + ")";
                }
        }
        return '';
    };
    KQLQueryBuilder.generateSearchAPIQueryOptions = function (kql, timeZoneId, p) {
        var enableDynamicGroups = p.isPrivateGroup;
        if (!enableDynamicGroups && p.query) {
            enableDynamicGroups =
                p.query.contentLocation === _enums_ContentLocation__WEBPACK_IMPORTED_MODULE_3__["ContentLocation"].AllSites ||
                    p.query.contentLocation === _enums_ContentLocation__WEBPACK_IMPORTED_MODULE_3__["ContentLocation"].AllSitesInTheHub;
        }
        /*
         * Set EnableDynamicGroups:True will cause an extra latency overhead on the query since we
         * need to look up all dynamic groups that a user is member of before sending the query down to
         * the search farm. The overhead of potentially two roundtrips to AAD to fetch the groups can
         * be a few 100s  milliseconds. Plus we're contributing to AAD traffic volume, which could
         * cause AAD throttling of SharePoint.
         */
        var enableDynamicGroupsString = enableDynamicGroups ? 'True' : 'False';
        /*
         * Set EnableMultiGeoSearchString:True will cause an extra latency overhead on the query since we
         * need to query all the locations' index. In MSIT it will cause about 3000 milliseconds latency since MSIT
         * has the most locations.  In other Prod tenants, the latency would be lower.
         *
         * https://docs.microsoft.com/en-us/sharepoint/dev/solution-guidance/multigeo-search
         */
        var enableMultiGeoSearchString = p.enableMultiGeoSearch ? 'True' : 'False';
        var options = {
            ClientType: p.clientType,
            QueryTemplate: kql,
            TimeZoneId: timeZoneId,
            // reduce the content returned by the Search API to only those columns used
            // see OOTBSchemaOSS.cs for a list of possible fields to query against
            SelectProperties: [
                'ContentType',
                'ContentTypeId',
                'Title',
                'EditorOwsUser',
                'ModifiedBy',
                'LastModifiedBy',
                'FileExtension',
                'FileType',
                'Path',
                'SiteName',
                'SiteTitle',
                'PictureThumbnailURL',
                'DefaultEncodingURL',
                'LastModifiedTime',
                'ListID',
                'ListItemID',
                // To provide to getpreview.ashx (getpreviewhandler.ashx.cs)
                'SiteID',
                'WebId',
                'UniqueID'
            ],
            Properties: [
                { Name: 'TrimSelectProperties', Value: { StrVal: '1', QueryPropertyValueTypeIndex: 1 } },
                {
                    Name: 'EnableDynamicGroups',
                    Value: { BoolVal: enableDynamicGroupsString, QueryPropertyValueTypeIndex: 3 }
                },
                {
                    Name: 'EnableMultiGeoSearch',
                    Value: { BoolVal: enableMultiGeoSearchString, QueryPropertyValueTypeIndex: 3 }
                }
            ]
        };
        options.SourceId = DEFAULT_SOURCE_ID;
        options.TrimDuplicates = false;
        // only return these additional fields if querying for Contact content type
        if (kql.indexOf(CONTACT_SEARCH_STRING) > -1) {
            options.SelectProperties.push('UserName', 'WorkEmail', 'OrgNames', 'JobTitle', 'WorkPhone', 'MobilePhone');
        }
        // add created and LastModifiedTime fields to output to assist in debugging date filter output
        if (p.query && p.query.filters) {
            var filters = p.query.filters;
            var includeCreatedField = false;
            var includeLastModifiedField = false;
            for (var i = 0; i < filters.length; i++) {
                var filter = filters[i];
                switch (filter.filterType) {
                    case _common_enums_FilterType__WEBPACK_IMPORTED_MODULE_8__["FilterType"].RecentlyAdded:
                        includeCreatedField = true;
                        break;
                    case _common_enums_FilterType__WEBPACK_IMPORTED_MODULE_8__["FilterType"].RecentlyChanged:
                        includeLastModifiedField = true;
                        break;
                }
            }
            if (includeCreatedField) {
                options.SelectProperties.push(CREATED);
            }
            if (includeLastModifiedField) {
                options.SelectProperties.push(LAST_MODIFIED);
            }
        }
        // selectProperties is an array of output fields to be added to the request
        if (p.selectProperties) {
            var mapSelected = {};
            for (var i = 0; i < options.SelectProperties.length; i++) {
                mapSelected[options.SelectProperties[i]] = true;
            }
            for (var i = 0; i < p.selectProperties.length; i++) {
                this._addSelectField(options.SelectProperties, p.selectProperties[i], mapSelected);
            }
        }
        if (p.maxItemsPerPage) {
            options.RowLimit = p.maxItemsPerPage;
            options.RowsPerPage = p.maxItemsPerPage;
        }
        if (p.startRow) {
            options.StartRow = p.startRow;
        }
        if (p.query) {
            switch (p.query.sortType) {
                case _enums_SortType__WEBPACK_IMPORTED_MODULE_11__["SortType"].MostRecent:
                    options.SortList = [
                        {
                            Property: LAST_MODIFIED,
                            Direction: _search_enums_SearchAPISortDirection__WEBPACK_IMPORTED_MODULE_10__["SearchAPISortDirection"].descending
                        }
                    ];
                    break;
                case _enums_SortType__WEBPACK_IMPORTED_MODULE_11__["SortType"].MostViewed:
                    options.SortList = [
                        {
                            Property: 'ViewsLifeTime',
                            Direction: _search_enums_SearchAPISortDirection__WEBPACK_IMPORTED_MODULE_10__["SearchAPISortDirection"].descending
                        }
                    ];
                    break;
                case _enums_SortType__WEBPACK_IMPORTED_MODULE_11__["SortType"].Trending:
                    options.SortList = [
                        {
                            Property: 'ViewsRecent',
                            Direction: _search_enums_SearchAPISortDirection__WEBPACK_IMPORTED_MODULE_10__["SearchAPISortDirection"].descending
                        }
                    ];
                    break;
                case _enums_SortType__WEBPACK_IMPORTED_MODULE_11__["SortType"].FieldAscending:
                case _enums_SortType__WEBPACK_IMPORTED_MODULE_11__["SortType"].FieldDescending:
                    if (p.query.sortField) {
                        options.SortList = [
                            {
                                Property: p.query.sortField,
                                Direction: p.query.sortType === _enums_SortType__WEBPACK_IMPORTED_MODULE_11__["SortType"].FieldAscending
                                    ? _search_enums_SearchAPISortDirection__WEBPACK_IMPORTED_MODULE_10__["SearchAPISortDirection"].ascending
                                    : _search_enums_SearchAPISortDirection__WEBPACK_IMPORTED_MODULE_10__["SearchAPISortDirection"].descending
                            }
                        ];
                    }
                    break;
            }
        }
        return options;
    };
    KQLQueryBuilder.generateSearchAPIQueryOptionsForManagedProperties = function (p) {
        var query = p.query;
        var options = query.managedPropertiesRefinerOptions;
        var limit = !isNaN(options.limit) ? options.limit : MANAGED_PROPERTIES_LIMIT;
        var matchText = options.managedPropertyMatchText
            ? "*" + options.managedPropertyMatchText + "*"
            : '*';
        var encodedMatchText = btoa(Object(_microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_1__["unescape"])(encodeURIComponent(matchText)));
        var path;
        switch (query.contentLocation) {
            case _enums_ContentLocation__WEBPACK_IMPORTED_MODULE_3__["ContentLocation"].CurrentSite:
                path = p.webAbsoluteUrl;
                break;
            case _enums_ContentLocation__WEBPACK_IMPORTED_MODULE_3__["ContentLocation"].CurrentSiteCollection:
                path = p.siteAbsoluteUrl;
                break;
            case _enums_ContentLocation__WEBPACK_IMPORTED_MODULE_3__["ContentLocation"].AllSites:
            default:
                path = new URL(p.webAbsoluteUrl).origin;
        }
        var kql = "path:\"" + path + "\" " + this._generateContentKql(p, false);
        var searchAPIQueryOptions = {
            ClientType: p.clientType,
            SourceId: DEFAULT_SOURCE_ID,
            Querytext: kql,
            Refiners: "ManagedProperties(filter3i=" + limit + "/0/" + encodedMatchText + ",sort=name/ascending)",
            EnableQueryRules: false,
            ProcessBestBets: false,
            ProcessPersonalFavorites: false,
            Properties: [
                {
                    Name: 'EnableDynamicGroups',
                    Value: {
                        BoolVal: 'False',
                        QueryPropertyValueTypeIndex: 3 // BooleanType
                    }
                },
                {
                    Name: 'ClientFunction',
                    Value: {
                        StrVal: 'SchemaLookup',
                        QueryPropertyValueTypeIndex: 1 // StringType
                    }
                }
            ]
        };
        return searchAPIQueryOptions;
    };
    KQLQueryBuilder._buildFilterGroupExpr = function (filterGroup, queryableManagedProperties) {
        var _this = this;
        var kql = '';
        var isFilteringByDate = false;
        if (filterGroup.filters) {
            filterGroup.filters.forEach(function (filter) {
                if ((filter.value === undefined || filter.value === '') &&
                    (filter.userType === undefined || filter.userType === _common_enums_UserType__WEBPACK_IMPORTED_MODULE_12__["UserType"].SpecificUser)) {
                    return;
                }
                var filterExpr = _this._kqlFilter(filter, queryableManagedProperties);
                isFilteringByDate = isFilteringByDate || filterExpr.isFilteringByDate;
                kql = _this._chainKqlFilterExpr(kql, filterExpr, filterGroup.logicalOperator);
            });
        }
        if (filterGroup.filterGroups) {
            filterGroup.filterGroups.forEach(function (group) {
                var filterExpr = _this._buildFilterGroupExpr(group, queryableManagedProperties);
                isFilteringByDate = isFilteringByDate || filterExpr.isFilteringByDate;
                kql = _this._chainKqlFilterExpr(kql, filterExpr, filterGroup.logicalOperator);
            });
        }
        if (kql) {
            kql += ')';
        }
        return { expr: kql, isFilteringByDate: isFilteringByDate };
    };
    KQLQueryBuilder._chainKqlFilterExpr = function (currentKql, filterExpr, logicalOperator) {
        var newKql = currentKql;
        if (filterExpr.expr) {
            if (!newKql) {
                newKql = '(';
            }
            else {
                newKql += " " + logicalOperator + " ";
            }
            newKql += filterExpr.expr;
        }
        return newKql;
    };
    KQLQueryBuilder._generateContentKql = function (options, hasFilters) {
        var query = options.query, languageCode = options.languageCode;
        var kql = '';
        var newsSearchString = "(" + MODERN_SEARCH_STRING + " AND PromotedState=2)";
        // image or picture or has an image file extension
        var imageSearchString = "(FileType=" + _ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_2__["spConstants"].imageExtensions.join(' OR FileType=') + ")";
        var pagesKql = "(" + WIKI_SEARCH_STRING + " OR " + WEBPART_SEARCH_STRING + " OR " + MODERN_SEARCH_STRING + " OR " + PUBLISHING_SEARCH_STRING + ")";
        // if content types are not specified then default to searching for documents
        var contentTypes = query.contentTypes || [_enums_ContentType__WEBPACK_IMPORTED_MODULE_4__["ContentType"].Document];
        var findAllContentTypes = false;
        if (contentTypes.indexOf(_enums_ContentType__WEBPACK_IMPORTED_MODULE_4__["ContentType"].All) > -1) {
            findAllContentTypes = true;
            if (query.contentLocation === _enums_ContentLocation__WEBPACK_IMPORTED_MODULE_3__["ContentLocation"].AllSites && !hasFilters) {
                kql += '*';
            }
        }
        var findDocuments = false;
        var findPages = false;
        if (!findAllContentTypes) {
            var op = '';
            for (var i = 0; i < contentTypes.length; ++i) {
                if (i === 1) {
                    op = ' OR';
                }
                switch (contentTypes[i]) {
                    case _enums_ContentType__WEBPACK_IMPORTED_MODULE_4__["ContentType"].Document:
                        kql = this._appendCriteriaUniquely(kql, op, DOCUMENT_SEARCH_STRING);
                        // Exclude pages when searching for documents only.  Without this, the search criteria for documents
                        // would return pages in its results as well. This takes out modern pages, classic pages, system pages,
                        // PublishingImages (of type aspx but content type images), and pages in SiteAssets
                        if (!findDocuments) {
                            kql += ' AND NOT (FileType:aspx OR FileType:html OR FileType:htm OR FileType:mhtml)';
                        }
                        findDocuments = true;
                        break;
                    case _enums_ContentType__WEBPACK_IMPORTED_MODULE_4__["ContentType"].Page:
                        kql = this._appendCriteriaUniquely(kql, op, pagesKql, languageCode);
                        if (!findPages) {
                            kql += " AND NOT (FileType:one OR FileType:onepkg OR FileType:ms-one-stub OR FileType:onetoc OR FileType:onetoc2)"; /* tslint:disable-line:max-line-length */
                        }
                        findPages = true;
                        break;
                    case _enums_ContentType__WEBPACK_IMPORTED_MODULE_4__["ContentType"].News:
                        kql = this._appendCriteriaUniquely(kql, op, newsSearchString, languageCode);
                        break;
                    case _enums_ContentType__WEBPACK_IMPORTED_MODULE_4__["ContentType"].Event:
                        kql = this._appendCriteriaUniquely(kql, op, EVENT_SEARCH_STRING);
                        break;
                    case _enums_ContentType__WEBPACK_IMPORTED_MODULE_4__["ContentType"].Issue:
                        kql = this._appendCriteriaUniquely(kql, op, ISSUE_SEARCH_STRING);
                        break;
                    case _enums_ContentType__WEBPACK_IMPORTED_MODULE_4__["ContentType"].Task:
                        kql = this._appendCriteriaUniquely(kql, op, TASK_SEARCH_STRING);
                        break;
                    case _enums_ContentType__WEBPACK_IMPORTED_MODULE_4__["ContentType"].Link:
                        kql = this._appendCriteriaUniquely(kql, op, LINK_SEARCH_STRING);
                        break;
                    case _enums_ContentType__WEBPACK_IMPORTED_MODULE_4__["ContentType"].Contact:
                        kql = this._appendCriteriaUniquely(kql, op, CONTACT_SEARCH_STRING);
                        break;
                    case _enums_ContentType__WEBPACK_IMPORTED_MODULE_4__["ContentType"].Video:
                        kql = this._appendCriteriaUniquely(kql, op, VIDEO_SEARCH_STRING);
                        if (Object(_DataProviderFlights__WEBPACK_IMPORTED_MODULE_14__["isSharePointVideoFilterInKQLQueryEnabled"])()) {
                            // Temporarily include O365 videos too. They are retiring in March 2021, will remove the below part then.
                            if (op === '') {
                                kql += ' OR '; // Add OR before appending video extensions if op is empty (ie. Video is first contenttype in query sequence). Otherwise OR will automatically be added by _appendCriteriaUniquely
                            }
                            kql = this._appendCriteriaUniquely(kql, op, this._documentTypeCriteria(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(_ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_2__["spConstants"].videoExtensions)));
                        }
                        break;
                    case _enums_ContentType__WEBPACK_IMPORTED_MODULE_4__["ContentType"].Image:
                        kql = this._appendCriteriaUniquely(kql, op, imageSearchString);
                        break;
                }
            }
        }
        // @todo: VSTS #764958 - KQLQueryBuilder should be using a string array to build up the query
        // Support identifying pages translated to the user's language preference
        if (languageCode && findAllContentTypes) {
            kql +=
                "" + (!Object(_DataProvidersKillSwitches__WEBPACK_IMPORTED_MODULE_15__["removeLeadingANDInMultilingualKQLKSActive"])() ? '' : ' AND') +
                    (
                    // include translations in the user preferred language
                    " (SPTranslationLanguage:" + languageCode + " ") +
                    (
                    // a base language page with no translation available
                    "OR (NOT SPTranslatedLanguages:" + languageCode + " AND NOT SPIsTranslation:true))");
        }
        if (findDocuments || findAllContentTypes) {
            // default to finding all document types
            var documentTypes = query.documentTypes || [_common_enums_DocumentType__WEBPACK_IMPORTED_MODULE_5__["DocumentType"].Any];
            if (documentTypes.indexOf(_common_enums_DocumentType__WEBPACK_IMPORTED_MODULE_5__["DocumentType"].Any) === -1) {
                var op = '';
                for (var i = 0; i < documentTypes.length; ++i) {
                    if (i === 1) {
                        op = ' OR';
                    }
                    // document extensions are in sync with those found in /common/fileTypeIcons/FileTypeIconMap.ts
                    switch (documentTypes[i]) {
                        case _common_enums_DocumentType__WEBPACK_IMPORTED_MODULE_5__["DocumentType"].Word:
                            kql = this._appendCriteriaUniquely(kql, op, this._documentTypeCriteria(['doc', 'docm', 'docx']));
                            break;
                        case _common_enums_DocumentType__WEBPACK_IMPORTED_MODULE_5__["DocumentType"].Excel:
                            kql = this._appendCriteriaUniquely(kql, op, this._documentTypeCriteria(['xls', 'xlsb', 'xlsm', 'xlsx']));
                            break;
                        case _common_enums_DocumentType__WEBPACK_IMPORTED_MODULE_5__["DocumentType"].PowerPoint:
                            kql = this._appendCriteriaUniquely(kql, op, this._documentTypeCriteria(['pot', 'potx', 'ppt', 'pptm', 'pptx']));
                            break;
                        case _common_enums_DocumentType__WEBPACK_IMPORTED_MODULE_5__["DocumentType"].OneNote:
                            kql = this._appendCriteriaUniquely(kql, op, this._documentTypeCriteria(['one', 'onepkg', 'ms-one-stub', 'onetoc', 'onetoc2']));
                            break;
                        case _common_enums_DocumentType__WEBPACK_IMPORTED_MODULE_5__["DocumentType"].Visio:
                            kql = this._appendCriteriaUniquely(kql, op, this._documentTypeCriteria(['vsd', 'vsdm', 'vsdx', 'vdw']));
                            break;
                        case _common_enums_DocumentType__WEBPACK_IMPORTED_MODULE_5__["DocumentType"].PDF:
                            kql = this._appendCriteriaUniquely(kql, op, this._documentTypeCriteria(['pdf']));
                            break;
                    }
                }
            }
        }
        return kql && " (" + kql.trim() + ")";
    };
    KQLQueryBuilder._addSelectField = function (fields, field, mapSelected) {
        if (!mapSelected[field]) {
            mapSelected[field] = true;
            fields.push(field);
        }
    };
    KQLQueryBuilder._generateSiteIdCriteria = function (siteId, webId) {
        return "(" + this._siteCriteria(siteId, 'NormSiteID') + " AND " + this._siteCriteria(webId, 'NormWebId') + ")";
    };
    KQLQueryBuilder._siteCriteria = function (id, field) {
        if (field === HUB_SITE_SEARCH_PROPERTY) {
            // Hub site search by DepartmentId, it may have braces stored in its value
            return "(" + field + ":" + id + " OR " + field + ":{" + id + "})";
        }
        else {
            // NormSiteID and NormWebId will always be without braces
            return field + ":" + id;
        }
    };
    // Only add criteria to the KQL expression if the criteria has not been added already.
    KQLQueryBuilder._appendCriteriaUniquely = function (kql, op, criteria, languageCode) {
        if (kql.indexOf(criteria) === -1) {
            // Support identifying pages translated to the user's language preference
            if (languageCode) {
                criteria +=
                    "" + (!Object(_DataProvidersKillSwitches__WEBPACK_IMPORTED_MODULE_15__["removeLeadingANDInMultilingualKQLKSActive"])() ? '' : ' AND ') +
                        (
                        // include translations in the user preferred language
                        " (SPTranslationLanguage:" + languageCode + " ") +
                        (
                        // a base language page with no translation available
                        "OR (NOT SPTranslatedLanguages:" + languageCode + " AND NOT SPIsTranslation:true))");
            }
            kql += op + " " + criteria;
        }
        return kql;
    };
    // generate KQL syntax for a filter setting
    KQLQueryBuilder._kqlFilter = function (filter, queryableManagedProperties) {
        var expr = ' ';
        var isFilteringByDate = false;
        if (filter && (filter.value !== undefined || filter.userType !== undefined)) {
            var value = filter.value !== undefined ? filter.value.toString() : '';
            var filterType = filter.filterType;
            var dateField = void 0;
            switch (filterType) {
                case _common_enums_FilterType__WEBPACK_IMPORTED_MODULE_8__["FilterType"].TitleContaining:
                    expr += value ? "title:\"" + value + "\"" : '';
                    break;
                case _common_enums_FilterType__WEBPACK_IMPORTED_MODULE_8__["FilterType"].AnyTextContaining:
                    expr += value ? "\"" + value + "\"" : '';
                    break;
                case _common_enums_FilterType__WEBPACK_IMPORTED_MODULE_8__["FilterType"].TaggedWith:
                    expr += value ? "tags:\"" + value + "\"" : '';
                    break;
                case _common_enums_FilterType__WEBPACK_IMPORTED_MODULE_8__["FilterType"].CreatedBy:
                    if (filter.userType === _common_enums_UserType__WEBPACK_IMPORTED_MODULE_12__["UserType"].CurrentUser) {
                        expr += 'createdby:{User}';
                    }
                    else if (value) {
                        if (_common_TokenUtilities__WEBPACK_IMPORTED_MODULE_13__["default"].isValidMeToken(value)) {
                            expr += 'createdby:{User}';
                        }
                        else {
                            expr += "createdby:\"" + value + "\"";
                        }
                    }
                    break;
                case _common_enums_FilterType__WEBPACK_IMPORTED_MODULE_8__["FilterType"].ModifiedBy:
                    if (filter.userType === _common_enums_UserType__WEBPACK_IMPORTED_MODULE_12__["UserType"].CurrentUser) {
                        expr += 'modifiedby:{User}';
                    }
                    else if (value) {
                        if (_common_TokenUtilities__WEBPACK_IMPORTED_MODULE_13__["default"].isValidMeToken(value)) {
                            expr += 'modifiedby:{User}';
                        }
                        else {
                            expr += "modifiedby:\"" + value + "\"";
                        }
                    }
                    break;
                case _common_enums_FilterType__WEBPACK_IMPORTED_MODULE_8__["FilterType"].RecentlyAdded:
                    dateField = CREATED;
                    break;
                case _common_enums_FilterType__WEBPACK_IMPORTED_MODULE_8__["FilterType"].RecentlyChanged:
                    dateField = LAST_MODIFIED;
                    break;
                case _common_enums_FilterType__WEBPACK_IMPORTED_MODULE_8__["FilterType"].Field:
                    if (queryableManagedProperties) {
                        var result = this._managedPropertyFilter(filter, queryableManagedProperties);
                        expr += result.expr;
                        isFilteringByDate = result.isFilteringByDate;
                    }
                    break;
            }
            // Let the Search API handle rationalizing local time by using convenient date variables.
            // Also handles localizing what is the start date of the week.
            if (dateField) {
                isFilteringByDate = true;
                switch (this._filterSince(value)) {
                    case _common_enums_FilterSince__WEBPACK_IMPORTED_MODULE_7__["FilterSince"].Today:
                        expr += dateField + "=today";
                        break;
                    case _common_enums_FilterSince__WEBPACK_IMPORTED_MODULE_7__["FilterSince"].Yesterday:
                        expr += "(" + dateField + "=today OR " + dateField + "=yesterday)";
                        break;
                    case _common_enums_FilterSince__WEBPACK_IMPORTED_MODULE_7__["FilterSince"].ThisWeek:
                        expr += dateField + "=\"this week\"";
                        break;
                    case _common_enums_FilterSince__WEBPACK_IMPORTED_MODULE_7__["FilterSince"].ThisMonth:
                        expr += dateField + "=\"this month\"";
                        break;
                    case _common_enums_FilterSince__WEBPACK_IMPORTED_MODULE_7__["FilterSince"].LastMonth:
                        expr += "(" + dateField + "=\"this month\" OR " + dateField + "=\"last month\")";
                        break;
                    case _common_enums_FilterSince__WEBPACK_IMPORTED_MODULE_7__["FilterSince"].ThisYear:
                        expr += dateField + "=\"this year\"";
                        break;
                    case _common_enums_FilterSince__WEBPACK_IMPORTED_MODULE_7__["FilterSince"].LastYear:
                        expr += "(" + dateField + "=\"this year\" OR " + dateField + "=\"last year\")";
                        break;
                }
            }
        }
        return {
            expr: expr.trim(),
            isFilteringByDate: isFilteringByDate
        };
    };
    KQLQueryBuilder._filterSince = function (value) {
        try {
            return parseInt(value, 10);
        }
        catch (ex) {
            return _common_enums_FilterSince__WEBPACK_IMPORTED_MODULE_7__["FilterSince"].ThisMonth; // return the default
        }
    };
    KQLQueryBuilder._documentTypeCriteria = function (exts) {
        return "(FileType:" + exts.join(' OR FileType:') + ")";
    };
    KQLQueryBuilder._managedPropertyFilter = function (filter, queryableManagedProperties) {
        var type = filter.fieldInfo || queryableManagedProperties[filter.fieldname];
        // If field is custom managed properties and its data type is not available, treat it as Text type.
        type = type || _enums_ManagedDataType__WEBPACK_IMPORTED_MODULE_9__["ManagedDataType"].Text;
        var value = this._parseManagedFieldValue(filter.value, type);
        var expr = '';
        var isFilteringByDate = type === _enums_ManagedDataType__WEBPACK_IMPORTED_MODULE_9__["ManagedDataType"].DateTime;
        // blank entry considered valid criteria only for Equals, NotEqual and Between
        if (value.trim() === '' &&
            filter.op !== _common_enums_FilterOperator__WEBPACK_IMPORTED_MODULE_6__["FilterOperator"].Equals &&
            filter.op !== _common_enums_FilterOperator__WEBPACK_IMPORTED_MODULE_6__["FilterOperator"].NotEqual &&
            filter.op !== _common_enums_FilterOperator__WEBPACK_IMPORTED_MODULE_6__["FilterOperator"].Between) {
            return {
                expr: '',
                isFilteringByDate: false // No date value provided
            };
        }
        switch (filter.op) {
            case _common_enums_FilterOperator__WEBPACK_IMPORTED_MODULE_6__["FilterOperator"].BeginsWith:
                // remove surrounding quotes
                var unquoted = value.substr(1, value.length - 2);
                expr = filter.fieldname + "=\"" + unquoted + "*\"";
                break;
            case _common_enums_FilterOperator__WEBPACK_IMPORTED_MODULE_6__["FilterOperator"].Between:
                // written so that if only one side of the expression is provided then it is still filtered
                // this will help give instant feedback as the entries are composed
                var value2 = this._parseManagedFieldValue(filter.value2, type);
                if (value.trim() !== '' && value2.trim() !== '') {
                    expr = filter.fieldname + ">=" + value + " AND " + filter.fieldname + "<=" + value2;
                }
                else if (value.trim() !== '') {
                    expr = filter.fieldname + ">=" + value;
                }
                else if (value2.trim() !== '') {
                    expr = filter.fieldname + "<=" + value2;
                }
                break;
            case _common_enums_FilterOperator__WEBPACK_IMPORTED_MODULE_6__["FilterOperator"].Contains:
                expr = filter.fieldname + ":" + value;
                break;
            case _common_enums_FilterOperator__WEBPACK_IMPORTED_MODULE_6__["FilterOperator"].DoesNotContain:
                expr = "-" + filter.fieldname + ":" + value;
                break;
            // not supported by KQL
            // case FilterOperator.EndsWith:
            case _common_enums_FilterOperator__WEBPACK_IMPORTED_MODULE_6__["FilterOperator"].Equals:
                expr = filter.fieldname + "=" + value;
                break;
            case _common_enums_FilterOperator__WEBPACK_IMPORTED_MODULE_6__["FilterOperator"].GreaterThan:
                expr = filter.fieldname + ">" + value;
                break;
            case _common_enums_FilterOperator__WEBPACK_IMPORTED_MODULE_6__["FilterOperator"].GreaterThanOrEqualTo:
                expr = filter.fieldname + ">=" + value;
                break;
            case _common_enums_FilterOperator__WEBPACK_IMPORTED_MODULE_6__["FilterOperator"].LessThan:
                expr = filter.fieldname + "<" + value;
                break;
            case _common_enums_FilterOperator__WEBPACK_IMPORTED_MODULE_6__["FilterOperator"].LessThanOrEqualTo:
                expr = filter.fieldname + "<=" + value;
                break;
            case _common_enums_FilterOperator__WEBPACK_IMPORTED_MODULE_6__["FilterOperator"].NotEqual:
                expr = "-" + filter.fieldname + "=" + value;
                break;
        }
        return {
            expr: expr,
            isFilteringByDate: isFilteringByDate
        };
    };
    // Ensure the format of our entry can be interpreted by KQL.
    // This function returns an empty string if it can't evaluate a result from the input.
    KQLQueryBuilder._parseManagedFieldValue = function (entry, type) {
        var result = '';
        switch (type) {
            case _enums_ManagedDataType__WEBPACK_IMPORTED_MODULE_9__["ManagedDataType"].DateTime:
                if (typeof entry === 'string' && _common_TokenUtilities__WEBPACK_IMPORTED_MODULE_13__["default"].isValidTodayToken(entry)) {
                    var offset = entry.substr('[today]'.length) || '';
                    result = offset ? "{Today" + offset + "}" : '{Today}';
                    return result;
                }
                var dt = new Date(entry.toString());
                // is a date object?
                if (Object.prototype.toString.call(dt) === '[object Date]') {
                    // is a valid date?
                    if (!isNaN(dt.getTime())) {
                        // date format that KQL expects
                        result = "\"" + dt.toISOString() + "\"";
                    }
                }
                break;
            case _enums_ManagedDataType__WEBPACK_IMPORTED_MODULE_9__["ManagedDataType"].Decimal:
            case _enums_ManagedDataType__WEBPACK_IMPORTED_MODULE_9__["ManagedDataType"].Double:
                var n = parseFloat(entry.toString());
                if (!isNaN(n)) {
                    result = n.toString();
                }
                break;
            case _enums_ManagedDataType__WEBPACK_IMPORTED_MODULE_9__["ManagedDataType"].Integer:
                var i = parseInt(entry.toString(), 10);
                if (!isNaN(i)) {
                    result = i.toString();
                }
                break;
            case _enums_ManagedDataType__WEBPACK_IMPORTED_MODULE_9__["ManagedDataType"].Text:
                if (typeof entry === 'string' && _common_TokenUtilities__WEBPACK_IMPORTED_MODULE_13__["default"].isValidMeToken(entry)) {
                    result = '{User}';
                }
                else {
                    result = "\"" + entry.toString().trim() + "\"";
                }
                break;
            case _enums_ManagedDataType__WEBPACK_IMPORTED_MODULE_9__["ManagedDataType"].YesNo:
                result = entry ? 'true' : 'false';
                break;
            default:
                // unsupported type, return empty string
                break;
        }
        return result;
    };
    return KQLQueryBuilder;
}());



/***/ }),

/***/ "1/hL":
/*!**********************************************************!*\
  !*** ./lib/dataProviders/event/EventCAMLQueryBuilder.js ***!
  \**********************************************************/
/*! exports provided: buildCAMLQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildCAMLQuery", function() { return buildCAMLQuery; });
/* harmony import */ var _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ms/odsp-utilities-bundle */ "y88i");
/* harmony import */ var _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _DataProviderFlights__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../DataProviderFlights */ "Xkwe");
/**
 * @copyright (c) Microsoft Corporation. All rights reserved.
 * @file EventCAMLQueryBuilder.ts
 */



/**
 * Compact CAML query string for less transfer payload.
 * @param camlQuery The CAML query string.
 */
function compact(camlQuery) {
    return (camlQuery
        // Replace `" />` to `"/>` to reduce one space.
        .replace(/" \/>/g, '"/>')
        // Trim spaces on each line.
        .split(/(?:\r\n|\r|\n)/)
        .map(function (line) { return line.trim(); })
        .join(''));
}
function addOneDay(dateString) {
    // @todo SPDate.addDay(1).toISOString(SPTimeZone.UserPrefer): string
    var date = new Date(dateString);
    date.setDate(date.getDate() + 1);
    return date.toISOString().split('T')[0];
}
function buildRowLimitQuery(query) {
    return query.rowLimit ? "<RowLimit Paged=\"FALSE\">" + query.rowLimit + "</RowLimit>" : '';
}
function buildCategoryQuery(query) {
    return query.category
        ? "\n      <Eq>\n        <FieldRef Name='Category' />\n        <Value Type='Choice'>" + _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_0__["HtmlEncoding"].encodeText(query.category) + "</Value>\n      </Eq>\n    "
        : '';
}
function buildStartEndDateQuery(query, timeZone) {
    // Any events have overlap with the date range [startDate, endDate] should be shown.
    // From code aspect, the events finish after `startDate` should show.
    var startDateQuery = "\n      <Geq>\n        <FieldRef Name=\"EndDate\" />\n        <Value IncludeTimeValue=\"True\" Type=\"DateTime\">\n          " + (query.startDate || '<Today />') + "\n        </Value>\n      </Geq>\n    ";
    // The `endDate` is optional. When it is available, the events start before `endDate` should show.
    var endDateQuery = query.endDate
        ? "\n      <Lt>\n        <FieldRef Name=\"EventDate\" />\n        <Value IncludeTimeValue=\"True\" Type=\"DateTime\">\n          " + addOneDay(query.endDate) + "\n        </Value>\n      </Lt>\n    "
        : '';
    var allDayStartDate = query.startDate
        ? convertToUTCDateISOString(query.startDate, timeZone)
        : '<Today />';
    var allDayEndDate = query.endDate
        ? convertToUTCDateISOString(addOneDay(query.endDate), timeZone)
        : '';
    // TODO #623058: allDayStartDateQuery builder and startDateQuery builder look very similar,
    // need to reduce the duplicated code.
    var allDayStartDateQuery = "\n        <Geq>\n          <FieldRef Name=\"EndDate\" />\n          <Value IncludeTimeValue=\"True\" Type=\"DateTime\">\n            " + allDayStartDate + "\n          </Value>\n        </Geq>\n      ";
    var allDayEndDateQuery = query.endDate
        ? "\n      <Lt>\n        <FieldRef Name=\"EventDate\" />\n        <Value IncludeTimeValue=\"True\" Type=\"DateTime\">\n          " + allDayEndDate + "\n        </Value>\n      </Lt>\n    "
        : '';
    var nonAllDayQuery = "\n      <Neq>\n        <FieldRef Name=\"fAllDayEvent\" />\n        <Value Type=\"Boolean\">1</Value>\n      </Neq>\n    ";
    if (endDateQuery) {
        return "\n      <Or>\n        <And>\n          " + nonAllDayQuery + "\n          <And>\n            " + startDateQuery + "\n            " + endDateQuery + "\n          </And>\n        </And>\n        <And>\n          <Eq>\n            <FieldRef Name=\"fAllDayEvent\" />\n            <Value Type=\"Boolean\">1</Value>\n          </Eq>\n          <And>\n            " + allDayStartDateQuery + "\n            " + allDayEndDateQuery + "\n          </And>\n        </And>\n      </Or>\n      ";
    }
    else {
        return "\n      <Or>\n        <And>\n          " + nonAllDayQuery + "\n          " + startDateQuery + "\n        </And>\n        <And>\n          <Eq>\n            <FieldRef Name=\"fAllDayEvent\" />\n            <Value Type=\"Boolean\">1</Value>\n          </Eq>\n          " + allDayStartDateQuery + "\n        </And>\n      </Or>";
    }
}
function buildFilterQuery(query, timeZone) {
    var categoryQuery = buildCategoryQuery(query);
    var startEndDateQuery = buildStartEndDateQuery(query, timeZone);
    if (categoryQuery) {
        return "\n      <And>\n        " + startEndDateQuery + "\n        " + categoryQuery + "\n      </And>\n    ";
    }
    else {
        return startEndDateQuery;
    }
}
function excludeRecurrenceEvents(query) {
    return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["_SPFlight"].isEnabled(1634 /* SOXEventsQueryOptOutRecurrent*/)
        ? // This Neq query is work around for some sites having events with fRecurrence = null
            // @example https://icm.ad.msft.net/imp/v3/incidents/details/111662419/home
            "\n      <And>\n        " + query + "\n        <Neq>\n          <FieldRef Name=\"fRecurrence\" />\n          <Value Type=\"Boolean\">1</Value>\n        </Neq>\n      </And>\n    "
        : "\n      <And>\n        " + query + "\n        <Eq>\n          <FieldRef Name=\"fRecurrence\" />\n          <Value Type=\"Boolean\">0</Value>\n        </Eq>\n      </And>\n    ";
}
// tslint:disable-next-line:export-name
function buildCAMLQuery(query, timeZone) {
    // @todo 332365 Allow the caller to specify the request fields.
    return compact("\n    <View>\n      <ViewFields>\n        " + (Object(_DataProviderFlights__WEBPACK_IMPORTED_MODULE_2__["isEventsWebPartFluentFlightEnabled"])() ? '<FieldRef Name="BannerUrl" />' : '') + "\n        <FieldRef Name=\"Category\" />\n        <FieldRef Name=\"EndDate\" />\n        <FieldRef Name=\"EventDate\" />\n        <FieldRef Name=\"ID\" />\n        <FieldRef Name=\"Location\" />\n        <FieldRef Name=\"Title\" />\n        <FieldRef Name=\"fAllDayEvent\" />\n        " + (Object(_DataProviderFlights__WEBPACK_IMPORTED_MODULE_2__["isNewApiToCREventFlightEnabled"])() ? '<FieldRef Name="_ModernAudienceTargetUserField" />' : '') + "\n      </ViewFields>\n      <Query>\n        <Where>\n          " + excludeRecurrenceEvents(buildFilterQuery(query, timeZone)) + "\n        </Where>\n      </Query>\n      " + buildRowLimitQuery(query) + "\n    </View>\n  ");
}
/**
 * @param dateString The date string, e.g. 2018-09-27
 * @param timeZone The timeZone that user are using.
 *
 * @returns ISODateStringFormat.
 */
function convertToUTCDateISOString(dateString, timeZone) {
    var date = new Date(dateString);
    // When user type 2018-09-28 (2018-09-28T00:00:00.000Z), and the timezone that user are using is Pacific Time,
    // the offset is 480. The actual UTC date string should be 2018-09-27T16:00:00.000Z.
    // What we need to do is minus the timeZone.Offset.
    date.setMinutes(date.getMinutes() - timeZone.offset);
    return date.toISOString();
}


/***/ }),

/***/ "17wl":
/*!************************!*\
  !*** external "tslib" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__17wl__;

/***/ }),

/***/ "2Rre":
/*!**************************************************************!*\
  !*** ./lib/dataProviders/news/models/NewsDataProviderIds.js ***!
  \**************************************************************/
/*! exports provided: news, viewCounts, currentViewCounts, hubNews, newsDigest, multiSiteNews, myNews, staleViewCounts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "news", function() { return news; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "viewCounts", function() { return viewCounts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "currentViewCounts", function() { return currentViewCounts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hubNews", function() { return hubNews; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "newsDigest", function() { return newsDigest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multiSiteNews", function() { return multiSiteNews; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "myNews", function() { return myNews; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staleViewCounts", function() { return staleViewCounts; });
/**
 * @file NewsDataProviderIds.ts
 * @Copyright (c) Microsoft Corporation.  All rights reserved.
 */
/** @public */
var news = 'news';
/** @public */
var viewCounts = 'viewCounts';
/** @public */
var currentViewCounts = 'currentViewCounts';
/** @public */
var hubNews = 'hubNews';
/** @public */
var newsDigest = 'newsDigest';
/** @public */
var multiSiteNews = 'multiSiteNews';
/** @public */
var myNews = 'myNews';
/** @public */
var staleViewCounts = 'staleViewCounts';


/***/ }),

/***/ "2q6Q":
/*!***********************************!*\
  !*** external "@ms/sp-telemetry" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__2q6Q__;

/***/ }),

/***/ "3KUD":
/*!******************************************************!*\
  !*** ./lib/dataProviders/event/EventAPIUtilities.js ***!
  \******************************************************/
/*! exports provided: AUDIENCE_TARGET_FIELD_ID, constructEventPayload, parseResponse, parseResponseToGetAudienceTargetEnabledFlag, parseEventId, parseAudienceId */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUDIENCE_TARGET_FIELD_ID", function() { return AUDIENCE_TARGET_FIELD_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "constructEventPayload", function() { return constructEventPayload; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseResponse", function() { return parseResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseResponseToGetAudienceTargetEnabledFlag", function() { return parseResponseToGetAudienceTargetEnabledFlag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseEventId", function() { return parseEventId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseAudienceId", function() { return parseAudienceId; });
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _DataProviderFlights__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../DataProviderFlights */ "Xkwe");
/* harmony import */ var _Strings_resx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Strings.resx */ "fP0x");
var _Strings_resx__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./Strings.resx */ "fP0x", 1);



var AUDIENCE_TARGET_FIELD_ID = '7F759147-C861-4CD6-A11F-5AA3037D9634';
var GUID_STRING_LEN = 36;
function convertToFormValue(key, value) {
    return {
        FieldName: key,
        FieldValue: value
    };
}
function formatString(value) {
    return "" + (value < 10 ? '0' : '') + value;
}
function getDateTimeString(date) {
    return (date.getFullYear() + "-" + formatString(date.getMonth() + 1) + "-" + formatString(date.getDate()) +
        (" " + formatString(date.getHours()) + ":" + formatString(date.getMinutes()) + ":" + formatString(date.getSeconds())));
}
function constructEventPayload(event, attendeesKeys) {
    var payload = {
        formValues: [
            convertToFormValue('Title', event.title),
            convertToFormValue('Category', event.category
                ? event.category instanceof Array
                    ? JSON.stringify(event.category)
                    : event.category
                : ''),
            convertToFormValue('Description', event.description),
            convertToFormValue('Location', event.location),
            convertToFormValue('EventDate', getDateTimeString(event.startTime)),
            convertToFormValue('EndDate', getDateTimeString(event.endTime)),
            convertToFormValue('fAllDayEvent', event.isAllDayEvent ? 'true' : 'false'),
            convertToFormValue('Workspace', event.linkUrl ? event.linkUrl + ", " + event.linkName : ''),
            convertToFormValue('BannerUrl', event.bannerUrl),
            // TODO
            convertToFormValue('ParticipantsPicker', JSON.stringify(attendeesKeys.map(function (name) { return ({ Key: name }); }))),
            convertToFormValue('Geolocation', event.geolocation ? "Point (" + event.geolocation.longitude + " " + event.geolocation.latitude + ")" : '')
        ],
        bNewDocumentUpdate: false,
        // tslint:disable-next-line: no-null-keyword
        checkInComment: null
    };
    if (Object(_DataProviderFlights__WEBPACK_IMPORTED_MODULE_1__["isNewApiToCREventFlightEnabled"])() && event.audiences) {
        payload.formValues.push(convertToFormValue('_ModernAudienceTargetUserField', JSON.stringify(event.audiences.map(function (audience) { return ({ Key: audience }); }))));
    }
    return payload;
}
function parseResponse(response) {
    if (response.status >= 200 && response.status < 300) {
        if (response.status === 204) {
            // 204 No Content
            return Promise.resolve();
        }
        else {
            return response.json();
        }
    }
    else {
        return response.json().then(function (result) {
            var eventError = constructErrorFromResponse(response.correlationId, response.status, result.error);
            throw eventError;
        });
    }
}
function parseResponseToGetAudienceTargetEnabledFlag(response) {
    if (response.status >= 200 && response.status < 300) {
        return Promise.resolve(true);
    }
    else {
        return response.json().then(function (result) {
            if (response.status === 400 &&
                typeof result.error.message === 'string' &&
                result.error.message.indexOf(AUDIENCE_TARGET_FIELD_ID)) {
                return Promise.resolve(false);
            }
            var eventError = constructErrorFromResponse(response.correlationId, response.status, result.error);
            throw eventError;
        });
    }
}
function parseEventId(content) {
    var failedCreation = content.value.filter(function (item) { return item.ErrorCode !== 0; });
    if (failedCreation.length > 0) {
        var eventError = {
            correlationId: _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Guid"].empty,
            httpStatus: 200,
            code: failedCreation[0].ErrorCode.toString(),
            message: failedCreation[0].ErrorMessage
        };
        throw eventError;
    }
    // if no errors, id must be there.
    return content.value.filter(function (item) { return item.FieldName === 'Id'; })[0].FieldValue;
}
function parseAudienceId(info) {
    var _a;
    // Group userId looks like `c:0t.c|tenant|63fba586-ae30-4cad-86bf-a9f62734e8f2`
    // Extract the audience ID like `63fba586-ae30-4cad-86bf-a9f62734e8f2`
    if (((_a = info.Name) === null || _a === void 0 ? void 0 : _a.length) >= GUID_STRING_LEN) {
        return info.Name.substr(info.Name.length - GUID_STRING_LEN);
    }
    else {
        return '';
    }
}
function constructErrorFromResponse(correlationId, httpStatus, error) {
    var responseError = error || {
        code: 'UnknownErrorCode',
        message: _Strings_resx__WEBPACK_IMPORTED_MODULE_2__["UnknownErrorMessage"]
    };
    var eventError = {
        correlationId: correlationId,
        httpStatus: httpStatus,
        code: responseError.code,
        message: typeof responseError.message === 'string' ? responseError.message : responseError.message.value
    };
    return eventError;
}


/***/ }),

/***/ "3Rlg":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/file-loader@1.1.11_webpack@4.44.2/node_modules/file-loader/dist/cjs.js?name=icon_[name]_[hash:8].[ext]!./lib/dataProviders/news/assets/helpitemimg2-2x.png ***!
  \******************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "icon_helpitemimg2-2x_5a055172.png";

/***/ }),

/***/ "3p+P":
/*!***********************************************************!*\
  !*** ./lib/dataProviders/event/EventsListDataProvider.js ***!
  \***********************************************************/
/*! exports provided: EventsListDataProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventsListDataProvider", function() { return EventsListDataProvider; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _microsoft_sp_page_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/sp-page-context */ "X+PM");
/* harmony import */ var _microsoft_sp_page_context__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_page_context__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _microsoft_sp_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @microsoft/sp-http */ "vlQI");
/* harmony import */ var _microsoft_sp_http__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_http__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ms/sp-component-utilities */ "hiL/");
/* harmony import */ var _ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Strings_resx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Strings.resx */ "fP0x");
var _Strings_resx__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./Strings.resx */ "fP0x", 1);






// More error code from sporel: %SDXROOT%\sporel\projectserver\webproj\shared\Common\SPErrorCode.cs.
var EXPECTED_FAILURE_ERROR_CODE = [
    -2130575322,
    -2147024891 // Access denied.
];
/**
 * @internal
 */
var EventsListDataProvider = /** @class */ (function () {
    function EventsListDataProvider(serviceScope) {
        this._serviceScope = serviceScope;
    }
    EventsListDataProvider.prototype.getEventsLists = function () {
        var _this = this;
        return this._afterServiceScopeFinished().then(function (_a) {
            var pageContext = _a.pageContext, httpClient = _a.httpClient;
            var webAbsoluteUrl = pageContext.web.absoluteUrl;
            var endpointUrl = webAbsoluteUrl + "/_api/web/Lists?$filter=BaseTemplate eq 106&$select=Id,Title";
            return httpClient
                .get(endpointUrl, _microsoft_sp_http__WEBPACK_IMPORTED_MODULE_2__["SPHttpClient"].configurations.v1)
                .then(_this._parseResponse)
                .then(function (json) { return json.value; });
        });
    };
    EventsListDataProvider.prototype.ensureEventsList = function () {
        var _this = this;
        return this._afterServiceScopeFinished().then(function (_a) {
            var pageContext = _a.pageContext, httpClient = _a.httpClient;
            var webAbsoluteUrl = pageContext.web.absoluteUrl;
            var endpointUrl = webAbsoluteUrl + "/_api/Lists/EnsureEventsList?$select=Title,Id";
            return httpClient
                .post(endpointUrl, _microsoft_sp_http__WEBPACK_IMPORTED_MODULE_2__["SPHttpClient"].configurations.v1, {})
                .then(_this._parseResponse);
        });
    };
    // @todo: VSO #368348 - Cache events permission check result to get better performance
    EventsListDataProvider.prototype.getEventsListPermission = function (listId) {
        var _this = this;
        if (!listId) {
            return Promise.resolve(undefined);
        }
        return this._afterServiceScopeFinished().then(function (_a) {
            var pageContext = _a.pageContext, httpClient = _a.httpClient;
            var webAbsoluteUrl = pageContext.web.absoluteUrl;
            var url = webAbsoluteUrl + "/_api/web/Lists(guid'" + listId + "')/EffectiveBasePermissions";
            return httpClient
                .get(url, _microsoft_sp_http__WEBPACK_IMPORTED_MODULE_2__["SPHttpClient"].configurations.v1)
                .then(_this._parseResponse)
                .then(function (data) { return new _microsoft_sp_page_context__WEBPACK_IMPORTED_MODULE_1__["SPPermission"](data); })
                .catch(function (error) {
                EXPECTED_FAILURE_ERROR_CODE.forEach(function (errorCode) {
                    if (error.code.indexOf(String(errorCode)) !== -1) {
                        throw new _ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_3__["ExpectedFailure"]("SPErrorCode_" + error.code, error.message, {
                            correlationId: error.correlationId ? error.correlationId.toString() : undefined
                        });
                    }
                });
                return Promise.reject(error);
            });
        });
    };
    EventsListDataProvider.prototype._afterServiceScopeFinished = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this._serviceScope.whenFinished(function () {
                resolve({
                    pageContext: _this._serviceScope.consume(_microsoft_sp_page_context__WEBPACK_IMPORTED_MODULE_1__["PageContext"].serviceKey),
                    httpClient: _this._serviceScope.consume(_microsoft_sp_http__WEBPACK_IMPORTED_MODULE_2__["SPHttpClient"].serviceKey)
                });
            });
        });
    };
    EventsListDataProvider.prototype._parseResponse = function (response) {
        if (response.status >= 200 && response.status < 300) {
            if (response.status === 204) {
                // 204 No Content
                return Promise.resolve();
            }
            else {
                return response.json();
            }
        }
        else {
            return response.json().then(function (result) {
                var responseError = result.error || {
                    code: 'UnknownErrorCode',
                    message: _Strings_resx__WEBPACK_IMPORTED_MODULE_4__["UnknownErrorMessage"]
                };
                var eventError = {
                    correlationId: response.correlationId,
                    httpStatus: response.status,
                    code: responseError.code,
                    message: typeof responseError.message === 'string' ? responseError.message : responseError.message.value
                };
                throw eventError;
            });
        }
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_3__["monitor"])('EventDataProvider.GetEventsLists')
    ], EventsListDataProvider.prototype, "getEventsLists", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_3__["monitor"])('EventDataProvider.EnsureEventsList')
    ], EventsListDataProvider.prototype, "ensureEventsList", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_3__["monitor"])('EventDataProvider.GetEventsListPermission')
    ], EventsListDataProvider.prototype, "getEventsListPermission", null);
    return EventsListDataProvider;
}());



/***/ }),

/***/ "5qZt":
/*!**********************************************************!*\
  !*** ./lib/dataProviders/news/NewsSearchDataProvider.js ***!
  \**********************************************************/
/*! exports provided: NewsSearchDataProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsSearchDataProvider", function() { return NewsSearchDataProvider; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utilities_NewsUtilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utilities/NewsUtilities */ "JpAn");
/* harmony import */ var _search_enums_SearchAPISortDirection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../search/enums/SearchAPISortDirection */ "zDft");
/* harmony import */ var _search_SearchDataProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../search/SearchDataProvider */ "dU3L");
// @copyright (c) Microsoft Corporation. All rights reserved.




/**
 * @internal
 */
var NewsSearchDataProvider = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(NewsSearchDataProvider, _super);
    function NewsSearchDataProvider() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._mapResponse = function (searchResult) {
            var result = _utilities_NewsUtilities__WEBPACK_IMPORTED_MODULE_1__["NewsUtilities"].extractNewsItemsFromSearch(searchResult.rows, _this._pageContext);
            return Promise.resolve(result);
        };
        return _this;
    }
    NewsSearchDataProvider._requestNewsData = function (options) {
        var sitePageContentTypeId = '0x0101009D1CB255DA76424F860D91F20E6C4118';
        var ctAndPromotedState = "ContentTypeId:" + sitePageContentTypeId + "* AND PromotedState:2";
        var queryTemplate = [];
        if (!options.uniqueIdGuids) {
            queryTemplate.push("{searchterms} " + ctAndPromotedState);
        }
        else {
            // To keep the search request small (due to limit of characters),
            // only requesting UniqueIds across all sites on the entire tenant
            // NewsWebPart._refreshPinnedItemMetadata desambiguates and picks
            // the correct one based on SiteId, WebId, ListId and UniqueId
            queryTemplate.push(ctAndPromotedState + " AND (");
            options.uniqueIdGuids.forEach(function (guid, index) {
                if (index === 0) {
                    queryTemplate.push("UniqueID:" + guid.toString());
                }
                else {
                    queryTemplate.push(" OR UniqueID:" + guid.toString());
                }
                queryTemplate.push(" OR UniqueID:{" + guid.toString() + "}");
            });
            queryTemplate.push(")");
        }
        return NewsSearchDataProvider._request(options, queryTemplate.join(''));
    };
    NewsSearchDataProvider._request = function (options, queryTemplate) {
        var dataProvider = new NewsSearchDataProvider({
            serviceScope: options.serviceScope
        });
        return dataProvider.requestData({
            searchOptions: {
                query: {
                    contentLocation: options.contentLocation
                }
            },
            searchAPIQueryOptions: {
                Properties: [
                    { Name: 'EnableDynamicGroups', Value: { BoolVal: true, QueryPropertyValueTypeIndex: 3 } },
                    { Name: 'EnableMultiGeoSearch', Value: { BoolVal: true, QueryPropertyValueTypeIndex: 3 } }
                ],
                Querytext: options.searchText || '',
                QueryTemplate: queryTemplate,
                RowLimit: options.rowLimit,
                SelectProperties: [
                    'CreatedBy',
                    'AuthorOWSUSER',
                    'Description',
                    'PictureThumbnailURL',
                    'FirstPublishedDate',
                    'Title',
                    'FileName',
                    'ListItemId',
                    'OriginalPath',
                    'Path',
                    'SiteTitle',
                    'SPSiteURL',
                    'SPWebUrl',
                    'ViewCountLifetime',
                    'UniqueID',
                    'SiteID',
                    'WebId',
                    'ListId'
                ],
                SortList: [{ Property: 'LastModifiedTime', Direction: _search_enums_SearchAPISortDirection__WEBPACK_IMPORTED_MODULE_2__["SearchAPISortDirection"].descending }],
                StartRow: options.startRow,
                TrimDuplicates: true
            }
        });
    };
    return NewsSearchDataProvider;
}(_search_SearchDataProvider__WEBPACK_IMPORTED_MODULE_3__["SearchDataProvider"]));



/***/ }),

/***/ "6DSs":
/*!***********************************************!*\
  !*** ./lib/dataSources/base/loc/Strings.resx ***!
  \***********************************************/
/*! exports provided: DataSourceResponseError, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"DataSourceResponseError\":\"Can\\u0027t get data. {0}: {1} REST call failed. Status Code: {2} Status Message: {3}\"}");

/***/ }),

/***/ "6ZIT":
/*!**********************************!*\
  !*** ./lib/dataSources/index.js ***!
  \**********************************/
/*! exports provided: ListDataSource, ListFieldDataSource, ListFieldType, ListItemDataSource, SPRenderListDataOptions, ListViewDataSource, BaseDataSource, ODataQueryStringBuilder, SPDataSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _list_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list/index */ "kYeP");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ListDataSource", function() { return _list_index__WEBPACK_IMPORTED_MODULE_0__["ListDataSource"]; });

/* harmony import */ var _listField_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./listField/index */ "GfEc");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ListFieldDataSource", function() { return _listField_index__WEBPACK_IMPORTED_MODULE_1__["ListFieldDataSource"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ListFieldType", function() { return _listField_index__WEBPACK_IMPORTED_MODULE_1__["ListFieldType"]; });

/* harmony import */ var _listItem_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./listItem/index */ "K5cs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ListItemDataSource", function() { return _listItem_index__WEBPACK_IMPORTED_MODULE_2__["ListItemDataSource"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SPRenderListDataOptions", function() { return _listItem_index__WEBPACK_IMPORTED_MODULE_2__["SPRenderListDataOptions"]; });

/* harmony import */ var _listView_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./listView/index */ "SQCk");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ListViewDataSource", function() { return _listView_index__WEBPACK_IMPORTED_MODULE_3__["ListViewDataSource"]; });

/* harmony import */ var _base_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./base/index */ "jnk8");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaseDataSource", function() { return _base_index__WEBPACK_IMPORTED_MODULE_4__["BaseDataSource"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ODataQueryStringBuilder", function() { return _base_index__WEBPACK_IMPORTED_MODULE_4__["ODataQueryStringBuilder"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SPDataSource", function() { return _base_index__WEBPACK_IMPORTED_MODULE_4__["SPDataSource"]; });








/***/ }),

/***/ "78D3":
/*!***************************************************************!*\
  !*** ./lib/dataProviders/page/WPDataExtractorDataProvider.js ***!
  \***************************************************************/
/*! exports provided: _getWebPartDataFromPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_getWebPartDataFromPage", function() { return _getWebPartDataFromPage; });
/* harmony import */ var _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ms/sp-telemetry */ "2q6Q");
/* harmony import */ var _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _PageMetadataProviderLoader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PageMetadataProviderLoader */ "/Lye");


/**
 * Gets the serialized information stored in a webpart
 * @internal
 */
// tslint:disable-next-line:export-name
function _getWebPartDataFromPage(props) {
    // tslint:disable-next-line:max-line-length
    var pageRelativeUrl = props.pageRelativeUrl, webPartInstanceId = props.webPartInstanceId, componentName = props.componentName, webPartAlias = props.webPartAlias, defaultWebPartData = props.defaultWebPartData, serviceScope = props.serviceScope, processWebPartDataCallback = props.processWebPartDataCallback;
    var qosMonitor = new _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_0__["_QosMonitor"](componentName + ".ParseWebPartDataFromPage");
    var dataProviderOptions = { serviceScope: serviceScope };
    var pageDataProvider = _PageMetadataProviderLoader__WEBPACK_IMPORTED_MODULE_1__["PageMetadataProviderLoader"].load(dataProviderOptions);
    // tslint:disable-next-line:max-line-length
    return (pageDataProvider
        .then(function (dataProvider) {
        return dataProvider.requestData({ pageRelativeUrl: pageRelativeUrl });
    })
        // tslint:disable-next-line:no-any
        .then(function (response) {
        var firstResponse = response[0];
        var legacyResponseKey = 'CanvasJson1';
        var jsonToParse = firstResponse[legacyResponseKey] || firstResponse;
        if (!jsonToParse) {
            _handleStockContent(qosMonitor, webPartAlias);
        }
        // Having ICanvasControl here, limits the option of using
        // sp-dataproviders, using any for now.
        // @todo Link to the bug: https://onedrive.visualstudio.com/CSI/_workitems/edit/794727
        return JSON.parse(jsonToParse); // tslint:disable-line:no-any
    })
        // tslint:disable-next-line:no-any
        .then(function (canvasControls) {
        return _getWebPartByUniqueId(webPartInstanceId, canvasControls);
    })
        .then(
    // tslint:disable-next-line:no-any
    function (control) {
        var webPartData;
        if (control) {
            webPartData = control.webPartData; // tslint:disable-line:no-any
        }
        if (webPartData) {
            webPartData.instanceId = webPartInstanceId;
            if (processWebPartDataCallback) {
                webPartData = processWebPartDataCallback(webPartData);
            }
            qosMonitor.writeSuccess(_logData(webPartAlias));
        }
        else {
            var noInstanceError = new Error('NoInstanceDataFound');
            qosMonitor.writeUnexpectedFailure(noInstanceError.message, noInstanceError, _logData(webPartAlias));
            throw noInstanceError;
        }
        return webPartData;
    })
        .catch(function (ex) {
        if (!qosMonitor.hasEnded) {
            qosMonitor.writeUnexpectedFailure('FailedToParse', ex, _logData(webPartAlias));
        }
        _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_0__["_EngagementLogger"].logEvent(componentName + ".LoadDefaultWebPartData");
        return defaultWebPartData;
    })
        .then(function (webPartData) { return webPartData; }));
}
function _getWebPartByUniqueId(webPartUniqueId, canvasControls // tslint:disable-line:no-any
// tslint:disable-next-line:no-any
) {
    if (canvasControls) {
        for (var _i = 0, canvasControls_1 = canvasControls; _i < canvasControls_1.length; _i++) {
            var control = canvasControls_1[_i];
            if (control.id === webPartUniqueId) {
                return control;
            }
        }
    }
    return undefined;
}
function _logData(webPartAlias) {
    return { webpart: webPartAlias };
}
function _handleStockContent(qosMonitor, webPartAlias) {
    var stockContentError = new Error('StockContent');
    qosMonitor.writeExpectedFailure(stockContentError.message, stockContentError, _logData(webPartAlias));
    throw stockContentError;
}


/***/ }),

/***/ "7REe":
/*!**************************************************************!*\
  !*** ./lib/dataProviders/viewcount/ViewCountDataProvider.js ***!
  \**************************************************************/
/*! exports provided: ViewCountDataProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewCountDataProvider", function() { return ViewCountDataProvider; });
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ms/sp-telemetry */ "2q6Q");
/* harmony import */ var _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _httpClients__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../httpClients */ "e+fh");
/* harmony import */ var _httpClients_sphome_MicroServiceErrorUtils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../httpClients/sphome/MicroServiceErrorUtils */ "Gw73");




var viewCountsQOSName = 'ExchangeViewCountsFetch';
var viewCountsQOSFallbackName = 'ExchangeViewCountsFetchSearchFallback';
/**
 * @internal
 */
var ViewCountDataProvider = /** @class */ (function () {
    function ViewCountDataProvider(serviceScope) {
        var _this = this;
        serviceScope.whenFinished(function () {
            _this._sphomeHttpClient = serviceScope.consume(_httpClients__WEBPACK_IMPORTED_MODULE_2__["SPHomeHttpClient"].serviceKey);
        });
    }
    ViewCountDataProvider.prototype.getViewCounts = function (items) {
        var _this = this;
        if (items.length === 0) {
            return Promise.resolve([]);
        }
        var qosMonitor = new _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_1__["_QosMonitor"](viewCountsQOSName);
        if (!this._sphomeHttpClient.isUserSupportedBySubstrate) {
            qosMonitor.writeExpectedFailure('SubstrateUnsupportedUser');
            return Promise.resolve([]);
        }
        var body = this._requestForItem(items);
        return this._sphomeHttpClient
            .post('documents/metadata', JSON.stringify(body))
            .then(function (response) {
            if (response.ok) {
                return response.json();
            }
            else {
                var extraData = Object(_httpClients_sphome_MicroServiceErrorUtils__WEBPACK_IMPORTED_MODULE_3__["extractErrorExtraDataFromResponse"])(response);
                var errorCode = extraData.errorCode;
                var error = new Error(errorCode);
                qosMonitor.writeUnexpectedFailure(errorCode, error, extraData);
                throw error;
            }
        })
            .then(function (responseJson) {
            qosMonitor.writeSuccess();
            return items.map(function (item) { return _this._addMicroserviceViewCount(item, responseJson.Items); });
        })
            .catch(function (error) {
            if (!qosMonitor.hasEnded) {
                qosMonitor.writeUnexpectedFailure(viewCountsQOSFallbackName, error);
            }
            return [];
        });
    };
    ViewCountDataProvider.prototype._addMicroserviceViewCount = function (item, response) {
        var _this = this;
        var matchedResponse = response.filter(function (serverItem) {
            return (_this._guidEquals(serverItem.Site.ItemReference.SiteId, item.siteId) &&
                _this._guidEquals(serverItem.Site.ItemReference.WebId, item.webId) &&
                _this._guidEquals(serverItem.UniqueId, item.uniqueId));
        })[0];
        if (matchedResponse && matchedResponse.Views !== undefined) {
            item.viewCount = matchedResponse.Views;
        }
        return item;
    };
    ViewCountDataProvider.prototype._guidEquals = function (firstGuidString, secondGuidString) {
        var firstGuid = _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Guid"].tryParse(firstGuidString);
        var secondGuid = _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Guid"].tryParse(secondGuidString);
        return firstGuid && secondGuid && firstGuid.equals(secondGuid);
    };
    ViewCountDataProvider.prototype._requestForItem = function (items) {
        return [].concat.apply([], items.map(function (item) { return [
            {
                Site: {
                    ItemReference: {
                        SiteId: item.siteId,
                        WebId: item.webId,
                        Type: 'SiteReference'
                    },
                    Type: 'Site'
                },
                Library: {
                    ListId: item.listId,
                    Type: 'Library'
                },
                UniqueId: item.uniqueId,
                Type: 'Document'
            },
            {
                Site: {
                    ItemReference: {
                        SiteId: item.siteId,
                        WebId: item.webId,
                        Type: 'GroupReference'
                    },
                    Type: 'Site'
                },
                Library: {
                    ListId: item.listId,
                    Type: 'Library'
                },
                UniqueId: item.uniqueId,
                Type: 'Document'
            }
        ]; }));
    };
    ViewCountDataProvider.serviceKey = _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["ServiceKey"].create('sp-dataproviders:ViewCountDataProvider', ViewCountDataProvider);
    return ViewCountDataProvider;
}());



/***/ }),

/***/ "7dHj":
/*!**************************************************!*\
  !*** ./lib/dataProviders/page/PageDataSource.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ms/odsp-utilities-bundle */ "y88i");
/* harmony import */ var _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _dataSources_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../dataSources/base */ "jnk8");



/**
 * @internal
 */
var PageDataSource = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(PageDataSource, _super);
    function PageDataSource() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PageDataSource.prototype.getPageJsonBlob = function (webAbsoluteUrl, pageUrl, queryString) {
        return this.get(webAbsoluteUrl, "_api/sitepages/pages/GetByUrl('" + _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_1__["UriEncoding"].encodeRestUriStringToken(pageUrl) + "')", queryString, 'PageDataSource', 'getPageJsonBlob').then(function (jsonData) { return [jsonData]; });
    };
    PageDataSource.prototype.getPageCanvasContent = function (relativePageUrl) {
        return this.get('/', // baseEndPoint
        relativePageUrl, // apiRelativePath
        'asjson=1', // backfill query to avoid Chrome caching JSON as regular page response
        'PageDataSource', // dataSourceName
        'getPageCanvasContent') // dataSourceMethodName
            .then(function (jsonData) { return jsonData.page.Content.CanvasContent1; });
    };
    return PageDataSource;
}(_dataSources_base__WEBPACK_IMPORTED_MODULE_2__["SPDataSource"]));
/* harmony default export */ __webpack_exports__["default"] = (PageDataSource);


/***/ }),

/***/ "7gDu":
/*!*************************************************************!*\
  !*** ./lib/dataProviders/page/TemplatePanelDataProvider.js ***!
  \*************************************************************/
/*! exports provided: TemplatePanelDataSource, TemplateSelectedPageCopyDataSource, TemplateSelectedPageAsJsonDataSource, DefaultNewPageTemplateIdDataSource, DeleteTemplatePageDataSource, TemplatePanelDataProvider, TemplatePanelSelectedPageCopyDataProvider, TemplatePanelSelectedPageAsJsonDataProvider, DefaultNewPageTemplateIdDataProvider, DeleteTemplatePageDataProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemplatePanelDataSource", function() { return TemplatePanelDataSource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemplateSelectedPageCopyDataSource", function() { return TemplateSelectedPageCopyDataSource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemplateSelectedPageAsJsonDataSource", function() { return TemplateSelectedPageAsJsonDataSource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultNewPageTemplateIdDataSource", function() { return DefaultNewPageTemplateIdDataSource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteTemplatePageDataSource", function() { return DeleteTemplatePageDataSource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemplatePanelDataProvider", function() { return TemplatePanelDataProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemplatePanelSelectedPageCopyDataProvider", function() { return TemplatePanelSelectedPageCopyDataProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemplatePanelSelectedPageAsJsonDataProvider", function() { return TemplatePanelSelectedPageAsJsonDataProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultNewPageTemplateIdDataProvider", function() { return DefaultNewPageTemplateIdDataProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteTemplatePageDataProvider", function() { return DeleteTemplatePageDataProvider; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/sp-diagnostics */ "ut3N");
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _dataSources_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../dataSources/base */ "jnk8");
/* harmony import */ var _BaseDataProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../BaseDataProvider */ "L/SE");
/**
 * @Copyright (c) Microsoft Corporation.  All rights reserved.
 */




/**
 * @internal
 */
var TemplatePanelDataSource = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(TemplatePanelDataSource, _super);
    function TemplatePanelDataSource() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TemplatePanelDataSource.prototype.getPages = function (webAbsoluteUrl) {
        var monitor = new _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__["_QosMonitor"]('TemplatePanelDataSource.getPages');
        return this.get(webAbsoluteUrl, '_api/sitepages/pages/templates', 'asjson=1', 'TemplatePanelDataSource', 'getPages')
            .then(function (jsonData) {
            monitor.writeSuccess();
            return [jsonData];
        })
            .catch(function (response) {
            if (response.status === 404) {
                monitor.writeExpectedFailure('TemplatePanelError', Error(response.statusMessage || 'getPage returned 404'), {
                    correlationId: response.correlationId,
                    status: response.status
                });
            }
            else {
                monitor.writeUnexpectedFailure('TemplatePanelError', Error(response.statusMessage || 'Failed to getPage'), {
                    correlationId: response.correlationId,
                    status: response.status
                });
            }
            return Promise.resolve(undefined);
        });
    };
    return TemplatePanelDataSource;
}(_dataSources_base__WEBPACK_IMPORTED_MODULE_2__["SPDataSource"]));

/**
 * @internal
 */
var TemplateSelectedPageCopyDataSource = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(TemplateSelectedPageCopyDataSource, _super);
    function TemplateSelectedPageCopyDataSource() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TemplateSelectedPageCopyDataSource.prototype.getPage = function (webAbsoluteUrl, id) {
        var monitor = new _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__["_QosMonitor"]('TemplateSelectedPageCopyDataSource.getPage');
        return this.get(webAbsoluteUrl, "_api/sitepages/pages(" + id + ")", '$select=CanvasContent1,LayoutWebpartsContent', 'TemplateCopyDataSource', 'getPage')
            .then(function (jsonData) {
            monitor.writeSuccess();
            return [jsonData];
        })
            .catch(function (response) {
            monitor.writeUnexpectedFailure('TemplateSelectedPageCopyError', Error(response.statusMessage || 'Failed to getPage'), {
                correlationId: response.correlationId,
                status: response.status
            });
            return Promise.resolve(undefined);
        });
    };
    return TemplateSelectedPageCopyDataSource;
}(_dataSources_base__WEBPACK_IMPORTED_MODULE_2__["SPDataSource"]));

/**
 * @internal
 */
var TemplateSelectedPageAsJsonDataSource = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(TemplateSelectedPageAsJsonDataSource, _super);
    function TemplateSelectedPageAsJsonDataSource() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TemplateSelectedPageAsJsonDataSource.prototype.getPage = function (pageAbsoluteUrl) {
        var monitor = new _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__["_QosMonitor"]('TemplateSelectedPageAsJsonDataSource.getPage');
        return this.get(pageAbsoluteUrl, '', 'as=json', 'TemplateSelectedPageAsJsonDataSource', 'getPage')
            .then(function (jsonData) {
            monitor.writeSuccess();
            return [jsonData];
        })
            .catch(function (response) {
            monitor.writeUnexpectedFailure('TemplateSelectedPageAsJsonError', Error(response.statusMessage || 'Failed to getPage'), {
                correlationId: response.correlationId,
                status: response.status
            });
            return Promise.resolve(undefined);
        });
    };
    return TemplateSelectedPageAsJsonDataSource;
}(_dataSources_base__WEBPACK_IMPORTED_MODULE_2__["SPDataSource"]));

/**
 * @internal
 */
var DefaultNewPageTemplateIdDataSource = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(DefaultNewPageTemplateIdDataSource, _super);
    function DefaultNewPageTemplateIdDataSource() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DefaultNewPageTemplateIdDataSource.prototype.getDefaultNewPageTemplateId = function (requestingWebUrl) {
        var _apiRelativePath = '_api/web/DefaultNewPageTemplateId';
        var dataSourceMethodName = 'GetDefaultNewPageTemplateId';
        var monitor = new _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__["_QosMonitor"](DefaultNewPageTemplateIdDataSource._dataSourceName + '.' + dataSourceMethodName);
        return this.get(requestingWebUrl, _apiRelativePath, '' /* queryString */, DefaultNewPageTemplateIdDataSource._dataSourceName, dataSourceMethodName, this._headers)
            .then(function (_a) {
            var value = _a.value;
            var toReturn = value;
            monitor.writeSuccess();
            return toReturn;
        })
            .catch(function (response) {
            monitor.writeUnexpectedFailure(DefaultNewPageTemplateIdDataSource._errorTag, Error(response.statusMessage || 'Failed to get DefaultNewPageTemplateId'), {
                correlationId: response.correlationId,
                status: response.status
            });
            return Promise.resolve(undefined);
        });
    };
    DefaultNewPageTemplateIdDataSource.prototype.setDefaultNewPageTemplateId = function (requestingWebUrl, templateId) {
        var dataSourceMethodName = 'SetDefaultNewPageTemplateId';
        var _apiRelativePath = '_api/web/SetDefaultNewPageTemplateId';
        var monitor = new _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__["_QosMonitor"](DefaultNewPageTemplateIdDataSource._dataSourceName + '.' + dataSourceMethodName, true /* copyToEngagement */);
        return this.post(requestingWebUrl, _apiRelativePath, '' /* queryString */, JSON.stringify({
            defaultNewPageTemplateId: templateId
        }), DefaultNewPageTemplateIdDataSource._dataSourceName, dataSourceMethodName, this._headers, true /* throwHttpClientResponse */, true /* skipJsonParse */)
            .then(function () {
            monitor.writeSuccess();
            return true;
        })
            .catch(function (response) {
            monitor.writeUnexpectedFailure(DefaultNewPageTemplateIdDataSource._errorTag, Error(response.statusMessage || 'Failed to set DefaultNewPageTemplateId'), {
                correlationId: response.correlationId,
                status: response.status
            });
            return false;
        });
    };
    Object.defineProperty(DefaultNewPageTemplateIdDataSource.prototype, "_headers", {
        get: function () {
            var headers = new Headers();
            headers.append('Content-Type', 'application/json; odata=verbose');
            headers.append('Accept', 'application/json; odata.metadata=minimal');
            return headers;
        },
        enumerable: true,
        configurable: true
    });
    DefaultNewPageTemplateIdDataSource._dataSourceName = 'DefaultNewPageTemplateIdDataSource';
    DefaultNewPageTemplateIdDataSource._errorTag = 'DefaultNewPageTemplateIdError';
    return DefaultNewPageTemplateIdDataSource;
}(_dataSources_base__WEBPACK_IMPORTED_MODULE_2__["SPDataSource"]));

/**
 * @internal
 */
var DeleteTemplatePageDataSource = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(DeleteTemplatePageDataSource, _super);
    function DeleteTemplatePageDataSource() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DeleteTemplatePageDataSource.prototype.deleteTemplatePage = function (requestingWebUrl, relativePageUrl) {
        var dataSourceMethodName = 'deleteTemplatePage';
        var monitor = new _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__["_QosMonitor"](DeleteTemplatePageDataSource._dataSourceName + '.' + dataSourceMethodName);
        var relPath = DeleteTemplatePageDataSource._apiRelativePath + "('" + relativePageUrl + "')";
        return this.post(requestingWebUrl, relPath + "/recycle()", '' /* queryString */, '', DeleteTemplatePageDataSource._dataSourceName, dataSourceMethodName, this._headers, true /* throwHttpClientResponse */, true /* skipJsonParse */)
            .then(function () {
            monitor.writeSuccess();
            return true;
        })
            .catch(function (response) {
            monitor.writeUnexpectedFailure(DeleteTemplatePageDataSource._errorTag, Error(response.statusMessage || 'Failed to delete template page'), {
                correlationId: response.correlationId,
                status: response.status
            });
            return false;
        });
    };
    Object.defineProperty(DeleteTemplatePageDataSource.prototype, "_headers", {
        get: function () {
            var headers = new Headers();
            headers.append('Content-Type', 'application/json; odata=verbose');
            headers.append('Accept', 'application/json; odata.metadata=minimal');
            headers.append('IF-MATCH', '*');
            return headers;
        },
        enumerable: true,
        configurable: true
    });
    DeleteTemplatePageDataSource._apiRelativePath = '_api/web/GetFileByServerRelativeUrl';
    DeleteTemplatePageDataSource._dataSourceName = 'DeleteTemplatePageDataSource';
    DeleteTemplatePageDataSource._errorTag = 'DeleteTemplatePageError';
    return DeleteTemplatePageDataSource;
}(_dataSources_base__WEBPACK_IMPORTED_MODULE_2__["SPDataSource"]));

/**
 * @internal
 */
var TemplatePanelDataProvider = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(TemplatePanelDataProvider, _super);
    function TemplatePanelDataProvider() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.id = 'PageTemplates';
        _this.title = 'Template Data Provider';
        return _this;
    }
    TemplatePanelDataProvider.prototype.getItems = function (request) {
        if (!this._templatePanelDataSource) {
            this._templatePanelDataSource = new TemplatePanelDataSource({ spHttpClient: this.spHttpClient });
        }
        return this._templatePanelDataSource.getPages(request.webAbsoluteUrl);
    };
    return TemplatePanelDataProvider;
}(_BaseDataProvider__WEBPACK_IMPORTED_MODULE_3__["BaseDataProvider"]));

/**
 * @internal
 */
var TemplatePanelSelectedPageCopyDataProvider = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(TemplatePanelSelectedPageCopyDataProvider, _super);
    function TemplatePanelSelectedPageCopyDataProvider() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.id = 'PageTemplatesCopy';
        _this.title = 'Template Copy Data Provider';
        return _this;
    }
    TemplatePanelSelectedPageCopyDataProvider.prototype.getItems = function (request) {
        if (!this._templateSelectedPageCopyDataSource) {
            this._templateSelectedPageCopyDataSource = new TemplateSelectedPageCopyDataSource({
                spHttpClient: this.spHttpClient
            });
        }
        return this._templateSelectedPageCopyDataSource.getPage(request.webAbsoluteUrl, request.page.Id);
    };
    return TemplatePanelSelectedPageCopyDataProvider;
}(_BaseDataProvider__WEBPACK_IMPORTED_MODULE_3__["BaseDataProvider"]));

/**
 * @internal
 */
var TemplatePanelSelectedPageAsJsonDataProvider = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(TemplatePanelSelectedPageAsJsonDataProvider, _super);
    function TemplatePanelSelectedPageAsJsonDataProvider() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.id = 'PageTemplatesAsJson';
        _this.title = 'Template As Json Data Provider';
        return _this;
    }
    TemplatePanelSelectedPageAsJsonDataProvider.prototype.getItems = function (request) {
        if (!this._templateSelectedPageAsJsonDataSource) {
            this._templateSelectedPageAsJsonDataSource = new TemplateSelectedPageAsJsonDataSource({
                spHttpClient: this.spHttpClient
            });
        }
        return this._templateSelectedPageAsJsonDataSource.getPage(request.page.AbsoluteUrl);
    };
    return TemplatePanelSelectedPageAsJsonDataProvider;
}(_BaseDataProvider__WEBPACK_IMPORTED_MODULE_3__["BaseDataProvider"]));

/**
 * @internal
 */
var DefaultNewPageTemplateIdDataProvider = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(DefaultNewPageTemplateIdDataProvider, _super);
    function DefaultNewPageTemplateIdDataProvider() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.id = 'DefaultNewPageTemplateId';
        _this.title = 'Default New Page Template Id Data Provider';
        // tslint:disable:no-any
        _this.getItems = function () {
            /* no-op */
            return Promise.resolve([]);
        };
        return _this;
    }
    DefaultNewPageTemplateIdDataProvider.prototype.getDefaultNewPageTemplateId = function (request) {
        var _this = this;
        var ensureDataSource = this._defaultNewPageTemplateIdDataSource
            ? Promise.resolve()
            : this.resolveServices().then(function () {
                _this._defaultNewPageTemplateIdDataSource = new DefaultNewPageTemplateIdDataSource({
                    spHttpClient: _this.spHttpClient
                });
            });
        return ensureDataSource.then(function () {
            return _this._defaultNewPageTemplateIdDataSource.getDefaultNewPageTemplateId(request.RequestingWebUrl);
        });
    };
    DefaultNewPageTemplateIdDataProvider.prototype.setDefaultNewPageTemplateId = function (request) {
        var _this = this;
        var ensureDataSource = this._defaultNewPageTemplateIdDataSource
            ? Promise.resolve()
            : this.resolveServices().then(function () {
                _this._defaultNewPageTemplateIdDataSource = new DefaultNewPageTemplateIdDataSource({
                    spHttpClient: _this.spHttpClient
                });
            });
        return ensureDataSource.then(function () {
            return _this._defaultNewPageTemplateIdDataSource.setDefaultNewPageTemplateId(request.RequestingWebUrl, request.DefaultNewPageTemplateId);
        });
    };
    return DefaultNewPageTemplateIdDataProvider;
}(_BaseDataProvider__WEBPACK_IMPORTED_MODULE_3__["BaseDataProvider"]));

/**
 * @internal
 */
var DeleteTemplatePageDataProvider = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(DeleteTemplatePageDataProvider, _super);
    function DeleteTemplatePageDataProvider() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.id = 'DeleteTemplatePage';
        _this.title = 'Delete Template Page Data Provider';
        // tslint:disable:no-any
        _this.getItems = function () {
            /* no-op */
            return Promise.resolve([]);
        };
        return _this;
    }
    DeleteTemplatePageDataProvider.prototype.deleteTemplatePage = function (request) {
        var _this = this;
        var ensureDataSource = this._defaultDeleteTemplatePageDataSource
            ? Promise.resolve()
            : this.resolveServices().then(function () {
                _this._defaultDeleteTemplatePageDataSource = new DeleteTemplatePageDataSource({
                    spHttpClient: _this.spHttpClient
                });
            });
        return ensureDataSource.then(function () {
            return _this._defaultDeleteTemplatePageDataSource.deleteTemplatePage(request.RequestingWebUrl, request.RelativePageUrl);
        });
    };
    return DeleteTemplatePageDataProvider;
}(_BaseDataProvider__WEBPACK_IMPORTED_MODULE_3__["BaseDataProvider"]));



/***/ }),

/***/ "8GMp":
/*!*****************************************************!*\
  !*** ./lib/dataProviders/search/SearchUtilities.js ***!
  \*****************************************************/
/*! exports provided: sanitizeSearchQueryParameter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sanitizeSearchQueryParameter", function() { return sanitizeSearchQueryParameter; });
// Copyright (c) Microsoft Corporation. All rights reserved.
/**
 * @internal
 * This function is used to sanitize parameters that used for search.
 * There are some characters that search is not supported as described in the doc:
 * https://docs.microsoft.com/en-us/sharepoint/dev/general-development/keyword-query-language-kql-syntax-reference
 * @param value - The value of the parameter for search query.
 */
// tslint:disable-next-line:export-name
function sanitizeSearchQueryParameter(value) {
    if (!value) {
        return '';
    }
    // Spacial character * means prefix matching, which must not have any content after it.
    // Spacial characters {, }, " need to be in pairs in query template.
    // Query template contains only one of them is invalid.
    var charactersInvalidateQueryTemplate = '[*{}"]';
    var regex = new RegExp(charactersInvalidateQueryTemplate, 'g');
    return value.replace(regex, ' ');
}


/***/ }),

/***/ "8dK2":
/*!*********************************************!*\
  !*** external "@microsoft/sp-image-helper" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__8dK2__;

/***/ }),

/***/ "8xI1":
/*!**********************************************************!*\
  !*** ./lib/dataSources/listField/enums/ListFieldType.js ***!
  \**********************************************************/
/*! exports provided: ListFieldType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListFieldType", function() { return ListFieldType; });
/**
 * See: https://msdn.microsoft.com/en-us/library/office/microsoft.sharepoint.client.fieldtype.aspx
 *
 * @internal
 */
// tslint:disable-next-line:typedef variable-name
var ListFieldType = {
    // Enable as needed
    // Invalid: 0,
    Integer: 1,
    Text: 2,
    // Note: 3,
    DateTime: 4,
    Counter: 5,
    Choice: 6,
    // Lookup: 7,
    Boolean: 8,
    Number: 9,
    Currency: 10,
    // URL: 11,
    // Computed: 12,
    // Threading: 13,
    // Guid: 14,
    MultiChoice: 15,
    // GridChoice: 16,
    // Calculated: 17,
    // File: 18,
    // Attachments: 19,
    User: 20
    // Recurrence: 21,
    // CrossProjectLink: 22,
    // ModStat: 23,
    // Error: 24,
    // ContentTypeId: 25,
    // PageSeparator: 26,
    // ThreadIndex: 27,
    // WorkflowStatus: 28,
    // AllDayEvent: 29, // like boolean
    // WorkflowEventType: 30
    // Geolocation: ?
    // OutcomeChoice: ?
    // MaxItems: 31 // per the documentation must not be used
};


/***/ }),

/***/ "8xPP":
/*!****************************************************************!*\
  !*** ./lib/dataProviders/location/BingLocationDataProvider.js ***!
  \****************************************************************/
/*! exports provided: BingLocationDataProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BingLocationDataProvider", function() { return BingLocationDataProvider; });
/* harmony import */ var _microsoft_sp_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/sp-http */ "vlQI");
/* harmony import */ var _microsoft_sp_http__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_http__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _microsoft_sp_page_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/sp-page-context */ "X+PM");
/* harmony import */ var _microsoft_sp_page_context__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_page_context__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ms/odsp-utilities-bundle */ "y88i");
/* harmony import */ var _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ms/sp-component-utilities */ "hiL/");
/* harmony import */ var _ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ms/sp-telemetry */ "2q6Q");
/* harmony import */ var _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_4__);
// @copyright (c) Microsoft Corporation. All rights reserved.





var LOCATION_SUGGESTIONS_COUNT = 5;
var BING_API_APPID = 'DEFC13FBC2E876A56E00AD5BDB9B690CD6B55B16';
var AUTO_SUGGEST_ENDPOINT = 'https://www.bingapis.com/api/v6/Places/AutoSuggest';
var BINGMAP_KEY = 'AmOSPT8X9eXz5u_8hQauiEyLHFJOG522w2XBbewYRhDtcEAUpsVIbvpApHbDAtyA';
var LOCATION_ENDPOINT = 'https://dev.virtualearth.net/REST/v1/Locations';
/**
 * Provides a location data provider from the Bing API.
 * @internal
 */
var BingLocationDataProvider = /** @class */ (function () {
    function BingLocationDataProvider(options) {
        this._httpClient = options.serviceScope.consume(_microsoft_sp_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"].serviceKey);
        this._cultureName = options.serviceScope.consume(_microsoft_sp_page_context__WEBPACK_IMPORTED_MODULE_1__["PageContext"].serviceKey).cultureInfo.currentUICultureName;
        this._qosPrefix = options.qosPrefix;
    }
    BingLocationDataProvider.prototype.getLocationSuggestions = function (location, suggestionsCount) {
        if (suggestionsCount === void 0) { suggestionsCount = LOCATION_SUGGESTIONS_COUNT; }
        var qosMonitor = new _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_4__["_QosMonitor"](this._qosPrefix + ".BingLocationDataProvider.GetLocationSuggestions");
        var uri = new _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_2__["Uri"](AUTO_SUGGEST_ENDPOINT);
        uri.setQueryParameter('q', location);
        uri.setQueryParameter('appid', BING_API_APPID);
        uri.setQueryParameter('structuredaddress', 'true');
        uri.setQueryParameter('setmkt', this._cultureName);
        uri.setQueryParameter('setlang', this._cultureName);
        uri.setQueryParameter('count', String(suggestionsCount));
        // Currently there's a problem with China and Japan locations, so hard code below query to mitigate the issue.
        if (this._cultureName.toLowerCase() === 'zh-cn') {
            uri.setQueryParameter('localmapview', '40.173091266970914,116.1689437866211,39.68604237738654,116.63105621337891');
            uri.setQueryParameter('localcircularview', '39.9295,116.4,100');
        }
        else if (this._cultureName.toLowerCase() === 'ja-jp') {
            uri.setQueryParameter('localmapview', '36.266035662679684,139.24756548070306,35.10266624641582,140.5796577658593');
            uri.setQueryParameter('localcircularview', '39.9785614013672,116.308280944824,100');
        }
        return this._httpClient
            .get(uri.toString(), _microsoft_sp_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"].configurations.v1)
            .catch(function (error) { return Promise.reject(new _ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_3__["UnexpectedFailure"]('NetworkError', error)); })
            .then(this._parseResponse)
            .then(function (response) {
            if (response && response.value) {
                qosMonitor.writeSuccess();
                return response.value.filter(function (bingLocation) { return bingLocation.address; });
            }
            else {
                qosMonitor.writeUnexpectedFailure('BingLocationDataProvider: value data does not exist in response.');
            }
        });
    };
    BingLocationDataProvider.prototype.getLocationInfo = function (location, maxResult) {
        if (maxResult === void 0) { maxResult = 1; }
        var qosMonitor = new _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_4__["_QosMonitor"](this._qosPrefix + ".BingLocationDataProvider.GetLocationInfo");
        var uri = new _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_2__["Uri"](LOCATION_ENDPOINT);
        uri.setQueryParameter('query', location);
        uri.setQueryParameter('o', 'json');
        uri.setQueryParameter('c', this._cultureName);
        uri.setQueryParameter('maxResults', maxResult.toString());
        uri.setQueryParameter('key', BINGMAP_KEY);
        return this._httpClient
            .get(uri.toString(), _microsoft_sp_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"].configurations.v1)
            .catch(function (error) {
            qosMonitor.writeUnexpectedFailure('BingLocationDataProvider.getLocationInfo: network error.');
            return Promise.reject(new _ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_3__["UnexpectedFailure"]('NetworkError', error));
        })
            .then(this._parseResponse)
            .then(function (response) {
            try {
                var bingMapLocationList = response.resourceSets[0].resources.map(function (resource) { return ({
                    name: resource.name,
                    coordinates: {
                        latitude: resource.point.coordinates[0],
                        longitude: resource.point.coordinates[1]
                    }
                }); });
                qosMonitor.writeSuccess();
                return bingMapLocationList;
            }
            catch (error) {
                qosMonitor.writeUnexpectedFailure('BingLocationDataProvider.getLocationInfo: invalid response.');
                return Promise.reject(error);
            }
        });
    };
    BingLocationDataProvider.prototype._parseResponse = function (response) {
        if (response.ok) {
            return response
                .json()
                .catch(function (error) {
                return Promise.reject(new _ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_3__["UnexpectedFailure"]('FailedToParseResponse', error, { statusCode: response.status }));
            });
        }
        else {
            return response
                .json()
                .catch(function (error) {
                return Promise.reject(new _ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_3__["UnexpectedFailure"]('FailedToParseError', error, { statusCode: response.status }));
            })
                .then(function (error) {
                return Promise.reject(new _ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_3__["UnexpectedFailure"]('RequestFailure', JSON.stringify(error), { statusCode: response.status }));
            });
        }
    };
    return BingLocationDataProvider;
}());



/***/ }),

/***/ "9G/9":
/*!***************************************************!*\
  !*** ./lib/dataProviders/search/loc/Strings.resx ***!
  \***************************************************/
/*! exports provided: SearchDataProviderTitle, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"SearchDataProviderTitle\":\"Search\"}");

/***/ }),

/***/ "AARv":
/*!*******************************************************************!*\
  !*** ./lib/dataSources/listItem/enums/SPRenderListDataOptions.js ***!
  \*******************************************************************/
/*! exports provided: SPRenderListDataOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SPRenderListDataOptions", function() { return SPRenderListDataOptions; });
// @todo: VSO: 335499 Move data sources to odsp-datasources
// odsp-datasources has this as RenderOptions in ListItemPostDataHelper.ts but it is not exported
/**
 * @internal
 */
// tslint:disable-next-line:typedef variable-name
var SPRenderListDataOptions = {
    None: 0x00,
    ContextInfo: 0x01,
    ListData: 0x02,
    ListSchema: 0x04
    /*
      Enable as needed.
  
      MenuView = 0x08,
      ListContentType = 0x10,
  
      // The returned list will have a FileSystemItemId field on each item if possible.
      FileSystemItemId = 0x20,
  
      // Returns the client form schema to add and edit items.
      ClientFormSchema = 0x40,
  
      // Returns QuickLaunch navigation nodes.
      QuickLaunch = 0x80,
  
      // Returns Spotlight rendering information.
      Spotlight = 0x100,
  
      // Returns Visualization rendering information.
      Visualization = 0x200,
  
      // Returns view XML and other information about the current view.
      ViewMetadata = 0x400,
  
      // Prevents AutoHyperlink from being run on text fields in this query.
      DisableAutoHyperlink = 0x800,
  
      // Enables urls pointing to Media TA service, such as .thumbnailUrl, .videoManifestUrl, .pdfConversionUrls.
      EnableMediaTAUrls = 0x1000,
  
      // Return Parent folder information.
      ParentInfo = 0x2000,
  
      // Return Page context info for the current list being rendered.
      PageContextInfo = 0x4000,
  
      // Return client-side component manifest information associated with the list.
      ClientSideComponentManifest = 0x8000
    */
};


/***/ }),

/***/ "AzJr":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/file-loader@1.1.11_webpack@4.44.2/node_modules/file-loader/dist/cjs.js?name=icon_[name]_[hash:8].[ext]!./lib/dataProviders/news/assets/helpitemimg3.png ***!
  \***************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "icon_helpitemimg3_7f442b60.png";

/***/ }),

/***/ "EEym":
/*!***********************************************************************!*\
  !*** ./lib/dataProviders/Topics/TopicSuggestionSearchDataProvider.js ***!
  \***********************************************************************/
/*! exports provided: TopicSuggestionSearchDataProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopicSuggestionSearchDataProvider", function() { return TopicSuggestionSearchDataProvider; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _microsoft_sp_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @microsoft/sp-http */ "vlQI");
/* harmony import */ var _microsoft_sp_http__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_http__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @microsoft/sp-diagnostics */ "ut3N");
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _httpClients__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../httpClients */ "e+fh");
/* harmony import */ var _ms_sp_component_utilities_lib_topics_TopicFlightingUtilities__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ms/sp-component-utilities/lib/topics/TopicFlightingUtilities */ "Tpx+");
/* harmony import */ var _DataProvidersKillSwitches__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../DataProvidersKillSwitches */ "evK2");
/* harmony import */ var _common_KMTieredCacheHelper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/KMTieredCacheHelper */ "/AZ8");
/**
 * @copyright (c) Microsoft Corporation.  All rights reserved.
 */








var TOPIC_SUGGESTION_SEARCH_API_URL = "knowledgebase/entities/suggestions(query='{0}',lcid={1},count={2},relationCount={3})";
var VERSION_NUMBER = 2;
var ERROR_MESSAGE = 'Invalid argument languageId or count';
var FIVE_MINUTES = 5 * 60 * 1000; /* 5 minutes */
/**
 * This class retrieves Topic suggestions of an specific query from the API.
 */
/**
 *  @internal
 */
var TopicSuggestionSearchDataProvider = /** @class */ (function () {
    function TopicSuggestionSearchDataProvider(serviceScope) {
        var _this = this;
        this._warmUpQueryRun = false;
        this._processRawData = function (rawData) {
            return rawData.value;
        };
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["Validate"].isNotNullOrUndefined(serviceScope, 'serviceScope');
        serviceScope.whenFinished(function () {
            _this._spHomeHttpClient = serviceScope.consume(_httpClients__WEBPACK_IMPORTED_MODULE_4__["SPHomeHttpClient"].serviceKey);
        });
        this._indexedDBEnabled = Object(_ms_sp_component_utilities_lib_topics_TopicFlightingUtilities__WEBPACK_IMPORTED_MODULE_5__["isIndexedDBEnabledForOdspAPIs"])() && !Object(_DataProvidersKillSwitches__WEBPACK_IMPORTED_MODULE_6__["isTopicSuggestionsTieredCachingKSActivated"])();
        if (this._shouldWarmUpSuggestionsApi()) {
            TopicSuggestionSearchDataProvider._lastInitQueryTime = new Date().getTime();
            this._warmUpSuggestionsApi();
        }
    }
    TopicSuggestionSearchDataProvider.prototype.getTopicSuggestions = function (queryString, languageId, count /* The max number of topics to retrieve */, relationCount /* The max number of relations to retrieve. Optional parameter defaulted to 0. */, cacheOptions) {
        if (relationCount === void 0) { relationCount = 0; }
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var mockReponse, legacyQos, formattedUrl;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                if (Object(_ms_sp_component_utilities_lib_topics_TopicFlightingUtilities__WEBPACK_IMPORTED_MODULE_5__["isRunTAB"])()) {
                    mockReponse = this._getTABMockData();
                    return [2 /*return*/, Promise.resolve(!!mockReponse ? JSON.parse(mockReponse) : { value: [] })];
                }
                legacyQos = new _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_3__["_QosMonitor"](TopicSuggestionSearchDataProvider._legacyQosTag);
                if (languageId.length === 0 || count < 1) {
                    legacyQos.writeUnexpectedFailure(TopicSuggestionSearchDataProvider._legacyQosTag, new Error(ERROR_MESSAGE));
                    throw new Error(ERROR_MESSAGE);
                }
                if (queryString.length === 0 && this._topicSuggestionData) {
                    return [2 /*return*/, this._topicSuggestionData];
                }
                formattedUrl = _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["Text"].format(TOPIC_SUGGESTION_SEARCH_API_URL, queryString, languageId, count, relationCount);
                if (this._indexedDBEnabled && cacheOptions) {
                    return [2 /*return*/, this._requestData(formattedUrl, cacheOptions)];
                }
                else {
                    return [2 /*return*/, this._requestDataLegacy(formattedUrl, legacyQos)];
                }
                return [2 /*return*/];
            });
        });
    };
    TopicSuggestionSearchDataProvider.prototype._requestData = function (formattedUrl, cacheOptions, qosMonitor) {
        var _this = this;
        var suggestionsQueryQos = qosMonitor
            ? qosMonitor
            : new _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_3__["_QosMonitor"](TopicSuggestionSearchDataProvider._qosTagPrefix + '.SuggestionsQuery.DP');
        return this._executeRequest(formattedUrl, cacheOptions)
            .then(function (response) {
            return _common_KMTieredCacheHelper__WEBPACK_IMPORTED_MODULE_7__["default"].parseClientCachableResponse(response, _this._isRawData, _this._isCachedDataEmpty, _this._processRawData, suggestionsQueryQos, TopicSuggestionSearchDataProvider._qosTagPrefix)
                .then(function (topics) {
                var isCachedData = true;
                if (_this._isRawData(topics)) {
                    topics = _this._processRawData(topics);
                    isCachedData = false;
                }
                var suggestionSearchAPIResponse = {
                    value: topics,
                    isCachedResponse: isCachedData
                };
                return suggestionSearchAPIResponse;
            })
                .catch(function (error) {
                return Promise.reject(error);
            });
        })
            .catch(function (error) {
            suggestionsQueryQos.writeUnexpectedFailure('UnexpectedFailure', error);
            return Promise.reject(error);
        });
    };
    TopicSuggestionSearchDataProvider.prototype._executeRequest = function (formattedUrl, cacheOptions) {
        return this._spHomeHttpClient.get(formattedUrl, VERSION_NUMBER, undefined, // extraHeaders
        cacheOptions);
    };
    TopicSuggestionSearchDataProvider.prototype._requestDataLegacy = function (formattedUrl, legacyQos) {
        var _this = this;
        return this._spHomeHttpClient
            .get(formattedUrl, VERSION_NUMBER)
            .then(function (response) {
            Object(_ms_sp_component_utilities_lib_topics_TopicFlightingUtilities__WEBPACK_IMPORTED_MODULE_5__["setCortexDisabledFlag"])(response);
            _this._qosLog(response, legacyQos);
            if (response.ok) {
                _this._topicSuggestionData = response.json();
                return _this._topicSuggestionData;
            }
            else {
                var error = new Error(response.statusText);
                throw error;
            }
        })
            .catch(function (error) {
            legacyQos.writeUnexpectedFailure(TopicSuggestionSearchDataProvider._legacyQosTag, error);
            return Promise.reject(error);
        });
    };
    Object.defineProperty(TopicSuggestionSearchDataProvider.prototype, "_isPageInEditMode", {
        get: function () {
            var urlQuery = new URLSearchParams(window.location.search);
            var queryString = urlQuery.toString();
            return queryString.indexOf('Mode=Edit') !== -1;
        },
        enumerable: true,
        configurable: true
    });
    TopicSuggestionSearchDataProvider.prototype._isRawData = function (data) {
        return data && data.value;
    };
    TopicSuggestionSearchDataProvider.prototype._isCachedDataEmpty = function (data) {
        return data.length === 0;
    };
    /**
     * Makes a call to the topic suggestions API as an init operation to warm up
     * the substrate as it is the bottleneck to the scenario's overall performance.
     */
    TopicSuggestionSearchDataProvider.prototype._warmUpSuggestionsApi = function () {
        var _this = this;
        if (this._isPageInEditMode && !this._warmUpQueryRun) {
            this._warmUpQueryRun = true;
            if (Object(_ms_sp_component_utilities_lib_topics_TopicFlightingUtilities__WEBPACK_IMPORTED_MODULE_5__["isRunTAB"])()) {
                var mockReponse = this._getTABMockData();
                this._topicSuggestionData = Promise.resolve(!!mockReponse ? JSON.parse(mockReponse) : { value: [] });
                return;
            }
            var warmUpTag = TopicSuggestionSearchDataProvider._qosTagPrefix + '.Init.DP';
            var qosMonitor_1 = new _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_3__["_QosMonitor"](warmUpTag);
            var formattedUrl = _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["Text"].format(TOPIC_SUGGESTION_SEARCH_API_URL, '' /* Default zero term */, '1033' /* Default language */, 5 /* Default topics to fetch */, 4 /* Default relation count */);
            if (this._indexedDBEnabled) {
                var cacheOptions = {
                    alias: 'FirstParty_KMTopicSuggestionSearchDP',
                    id: 'KMTopicSuggestionSearchDP',
                    expirationDuration: FIVE_MINUTES,
                    cacheStrategy: _microsoft_sp_http__WEBPACK_IMPORTED_MODULE_2__["_CacheStrategy"].CacheThenNetwork,
                    extraProps: new Map([[_common_KMTieredCacheHelper__WEBPACK_IMPORTED_MODULE_7__["default"].onlyIndexedDB, true]])
                };
                this._topicSuggestionData = this._requestData(formattedUrl, cacheOptions, qosMonitor_1);
            }
            else {
                this._spHomeHttpClient
                    .get(formattedUrl, VERSION_NUMBER)
                    .then(function (response) {
                    Object(_ms_sp_component_utilities_lib_topics_TopicFlightingUtilities__WEBPACK_IMPORTED_MODULE_5__["setCortexDisabledFlag"])(response);
                    _this._qosLog(response, qosMonitor_1, 'FailedStatusOnWarmUp');
                    if (response.ok) {
                        _this._topicSuggestionData = response.json();
                        return response.json();
                    }
                })
                    .catch(function (error) {
                    qosMonitor_1.writeUnexpectedFailure('FailedOnWarmUp', error);
                });
            }
        }
    };
    TopicSuggestionSearchDataProvider.prototype._getExtraData = function (response) {
        return {
            mscv: response.headers.get('ms-cv'),
            status: response.status
        };
    };
    TopicSuggestionSearchDataProvider.prototype._qosLog = function (response, qosMonitor, tagNameSuffix) {
        if (response.ok) {
            qosMonitor.writeSuccess(this._getExtraData(response));
        }
        else {
            var err = new Error(response.statusText);
            if (response.status === 403) {
                qosMonitor.writeExpectedFailure('ExpectedFailure403', err, this._getExtraData(response));
            }
            else {
                qosMonitor.writeUnexpectedFailure(tagNameSuffix, err, this._getExtraData(response));
            }
        }
    };
    TopicSuggestionSearchDataProvider.prototype._shouldWarmUpSuggestionsApi = function () {
        // We should warm up the suggestions API if it's been more than 5 minutes since last tried
        var diff = new Date().getTime() - TopicSuggestionSearchDataProvider._lastInitQueryTime;
        return !TopicSuggestionSearchDataProvider._lastInitQueryTime || diff > FIVE_MINUTES;
    };
    /**
     * Get mock data.
     */
    TopicSuggestionSearchDataProvider.prototype._getTABMockData = function () {
        return window.sessionStorage.getItem('MOCK_TOPIC_SUGGESTION_RESPONSE');
    };
    TopicSuggestionSearchDataProvider._qosTagPrefix = 'CSIKM.HashTagging';
    TopicSuggestionSearchDataProvider._legacyQosTag = TopicSuggestionSearchDataProvider._qosTagPrefix + '.DP';
    return TopicSuggestionSearchDataProvider;
}());



/***/ }),

/***/ "Ebj+":
/*!********************************************************!*\
  !*** ./lib/dataSources/listItem/ListItemDataSource.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _dataSources_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../dataSources/base */ "jnk8");
/* harmony import */ var _enums_SPRenderListDataOptions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./enums/SPRenderListDataOptions */ "AARv");
/* harmony import */ var _loc_Strings_resx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loc/Strings.resx */ "R/pT");
var _loc_Strings_resx__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./loc/Strings.resx */ "R/pT", 1);
/**
 * @copyright Microsoft Corporation. All rights reserved.
 *
 * @file Data source that calls SharePoint's _api/web/lists/GetById(@id)/RenderListDataAsStream?View= REST endpoint
 * to return items within a SharePoint List.
 */

// @todo: VSO: 335499 Move data sources to odsp-datasources



/**
 * @internal
 */
var ListItemDataSource = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ListItemDataSource, _super);
    function ListItemDataSource() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Query for items within a SharePoint list via the RenderListDataAsStream REST API.
     *
     * Parameter values must be sanitized for the url beforehand.
     * @param webAbsoluteUrl - path to the site containing the lists
     * @param listId - guid identifying which list to query
     * @param listTitle - alternative input from listId to indicate which list to query by title
     * @param renderOptions - SPRenderListDataOptions flags, defaults to SPRenderListDataOptions.None
     * @param caml - view definition in CAML format
     * @param queryString - options passed to the RenderListDataAsStream API via the query string
     * See SPRenderListDataOverrideParameters for full list of queryString options.
     */
    // @todo: define result types
    // tslint:disable:no-any
    ListItemDataSource.prototype.getItemsForList = function (webAbsoluteUrl, listId, listTitle, isDefaultDocumentLibrary, renderOptions, caml, queryString, throwSPHttpClientResponse, imageFieldsToTryRewriteToCdnUrls, audienceTarget, viewId) {
        if (!isDefaultDocumentLibrary && !listId && !listTitle) {
            throw _loc_Strings_resx__WEBPACK_IMPORTED_MODULE_3__["ErrorMissingListIdentifier"];
        }
        if (renderOptions === undefined) {
            renderOptions = _enums_SPRenderListDataOptions__WEBPACK_IMPORTED_MODULE_2__["SPRenderListDataOptions"].None;
        }
        // clean up the query string so it is ready to append
        if (queryString) {
            if (queryString.indexOf('?') === 0) {
                queryString = queryString.substring(1);
            }
            if (queryString.indexOf('&') !== 0) {
                queryString = '&' + queryString;
            }
        }
        else {
            queryString = '';
        }
        var listPath;
        if (isDefaultDocumentLibrary) {
            listPath = 'DefaultDocumentLibrary';
        }
        else {
            listPath = 'Lists';
            listPath += listId ? "(guid'" + listId + "')" : "/GetByTitle('" + listTitle + "')";
        }
        var viewQueryString = viewId ? "View=" + viewId : '';
        var restPath = "/_api/web/" + listPath + "/RenderListDataAsStream?" + viewQueryString + queryString;
        var body = {
            parameters: {
                __metadata: {
                    type: 'SP.RenderListDataParameters'
                },
                RenderOptions: renderOptions
            }
        };
        var headers = new Headers();
        headers.append('Content-Type', 'application/json;odata=verbose');
        headers.append('Accept', 'application/json;odata=nometadata');
        headers.append('OData-Version', '3.0');
        if (caml) {
            body.parameters.ViewXml = caml;
        }
        if (imageFieldsToTryRewriteToCdnUrls) {
            body.parameters.ImageFieldsToTryRewriteToCdnUrls = imageFieldsToTryRewriteToCdnUrls;
        }
        if (audienceTarget !== undefined) {
            body.parameters.AudienceTarget = audienceTarget;
        }
        return this.post(webAbsoluteUrl, restPath, '', JSON.stringify(body), 'ListItemDataSource', 'getItemsForList', headers, throwSPHttpClientResponse).then(function (result) {
            return result.ListData.Row;
        });
    };
    return ListItemDataSource;
}(_dataSources_base__WEBPACK_IMPORTED_MODULE_1__["SPDataSource"]));
/* harmony default export */ __webpack_exports__["default"] = (ListItemDataSource);


/***/ }),

/***/ "FS93":
/*!****************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-media@2.0.244/node_modules/@ms/odsp-media/dist/media/images/news/Modernize_News.svg ***!
  \****************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "Modernize_News_a3fe9f83e59c20415da4c571d192296b.svg";

/***/ }),

/***/ "G3Sr":
/*!*******************************************************!*\
  !*** ./lib/dataProviders/search/enums/ContentType.js ***!
  \*******************************************************/
/*! exports provided: ContentType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentType", function() { return ContentType; });
/**
 * @internal
 */
// tslint:disable-next-line:typedef variable-name
var ContentType = {
    Document: 1,
    Page: 2,
    Video: 3,
    Event: 4,
    Issue: 5,
    Task: 6,
    Link: 7,
    Contact: 8,
    Image: 9,
    News: 10,
    All: 99
};


/***/ }),

/***/ "GEDN":
/*!******************************************************************!*\
  !*** ./lib/dataProviders/news/ExchangeViewCountsDataProvider.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _viewcount__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../viewcount */ "WzQS");
/* harmony import */ var _microsoft_sp_page_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/sp-page-context */ "X+PM");
/* harmony import */ var _microsoft_sp_page_context__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_page_context__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @microsoft/sp-lodash-subset */ "Pk8u");
/* harmony import */ var _microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_2__);



var SERVER_MAX_ITEMS_PER_REQUEST = 10;
/**
 * Provides a simple data provider for the SharePoint Search REST API.
 * @internal
 */
var ExchangeViewCountsDataProvider = /** @class */ (function () {
    function ExchangeViewCountsDataProvider(options) {
        var _this = this;
        this.id = 'ExchangeViewCounts';
        this.title = '';
        this.options = options;
        this.options.serviceScope.whenFinished(function () {
            _this._pageContext = _this.options.serviceScope.consume(_microsoft_sp_page_context__WEBPACK_IMPORTED_MODULE_1__["PageContext"].serviceKey);
            _this._viewCountDataSource = _this.options.serviceScope.consume(_viewcount__WEBPACK_IMPORTED_MODULE_0__["ViewCountDataProvider"].serviceKey);
        });
    }
    ExchangeViewCountsDataProvider._getViewCountFromCacheIfAvailable = function (newsItem) {
        if (this._viewCountCache.hasOwnProperty(newsItem.uniqueId)) {
            newsItem.viewCounts = this._viewCountCache[newsItem.uniqueId];
        }
    };
    ExchangeViewCountsDataProvider._cacheViewCounts = function (newsItems) {
        var _this = this;
        newsItems.forEach(function (newsItem) {
            if (newsItem.uniqueId !== undefined) {
                _this._viewCountCache[newsItem.uniqueId] = newsItem.viewCounts;
            }
        });
    };
    ExchangeViewCountsDataProvider.prototype.requestData = function (newsItems) {
        var newsItemChunks = Object(_microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_2__["chunk"])(newsItems, SERVER_MAX_ITEMS_PER_REQUEST);
        return Promise.all(newsItemChunks.map(this._createRequestForItems.bind(this))).then(function () { return newsItems; });
    };
    ExchangeViewCountsDataProvider.prototype._addViewCountsToItems = function (newsItems, results) {
        return newsItems.filter(this._needsViewCount).map(function (newsItem) {
            var viewCount = results.filter(function (result) {
                return (result.uniqueId === newsItem.uniqueId ||
                    (result.siteId === newsItem.siteId &&
                        result.webId === newsItem.webId &&
                        result.listItemId === Number(newsItem.listItemId)));
            })[0];
            newsItem.viewCounts = viewCount !== undefined ? Number(viewCount.viewCount) : undefined;
            return newsItem;
        });
    };
    ExchangeViewCountsDataProvider.prototype._createRequestForItems = function (newsItems) {
        var _this = this;
        return this._viewCountDataSource
            .getViewCounts(this._buildRequest(newsItems))
            .then(function (results) {
            newsItems = _this._addViewCountsToItems(newsItems, results);
            ExchangeViewCountsDataProvider._cacheViewCounts(newsItems);
            return newsItems;
        });
    };
    ExchangeViewCountsDataProvider.prototype._buildRequest = function (newsItems) {
        var siteId = this._pageContext.site.id.toString();
        var webId = this._pageContext.web.id.toString();
        return newsItems.filter(this._needsViewCount).map(function (newsItem) {
            return {
                listItemId: Number(newsItem.listItemId) || 0,
                uniqueId: newsItem.uniqueId,
                siteId: newsItem.siteId || siteId,
                webId: newsItem.webId || webId,
                listId: newsItem.listId
            };
        });
    };
    ExchangeViewCountsDataProvider.prototype._needsViewCount = function (newsItem) {
        ExchangeViewCountsDataProvider._getViewCountFromCacheIfAvailable(newsItem);
        var vc = newsItem.viewCounts;
        return vc === undefined || vc === null || typeof vc !== 'number';
    };
    ExchangeViewCountsDataProvider._viewCountCache = {};
    return ExchangeViewCountsDataProvider;
}());
/* harmony default export */ __webpack_exports__["default"] = (ExchangeViewCountsDataProvider);


/***/ }),

/***/ "GYQK":
/*!************************************************************!*\
  !*** ../sp-component-utilities/lib/common/KillSwitches.js ***!
  \************************************************************/
/*! exports provided: KillSwitches, isUseMockTopicDataKSActivated, isUseCortexTopicExperiencesCapabilityKSActivated, isLogCortexDisabledFlagGetFalseOnceKSActivated, skipLogEngagementForCortexDisabledKSActivated, removeCortexDisabledFlagforManagementAPIsKSActivated, isUseMockForCortexTABTestKSActivated */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KillSwitches", function() { return KillSwitches; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isUseMockTopicDataKSActivated", function() { return isUseMockTopicDataKSActivated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isUseCortexTopicExperiencesCapabilityKSActivated", function() { return isUseCortexTopicExperiencesCapabilityKSActivated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isLogCortexDisabledFlagGetFalseOnceKSActivated", function() { return isLogCortexDisabledFlagGetFalseOnceKSActivated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "skipLogEngagementForCortexDisabledKSActivated", function() { return skipLogEngagementForCortexDisabledKSActivated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeCortexDisabledFlagforManagementAPIsKSActivated", function() { return removeCortexDisabledFlagforManagementAPIsKSActivated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isUseMockForCortexTABTestKSActivated", function() { return isUseMockForCortexTABTestKSActivated; });
/* harmony import */ var _performance_KillSwitch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../performance/KillSwitch */ "NfQ8");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__);


var KillSwitches = /** @class */ (function () {
    function KillSwitches() {
    }
    KillSwitches.newYoutubeUrlRegexKS = new _performance_KillSwitch__WEBPACK_IMPORTED_MODULE_0__["KillSwitch"]('93326c3b-13a0-4ea5-9979-87eddec6d21a');
    KillSwitches.urlUtilityRefactor = new _performance_KillSwitch__WEBPACK_IMPORTED_MODULE_0__["KillSwitch"]('77727f04-2ebb-4f7a-b916-692003f4dec7' /* '10/01/2019', 'Refactor URL utilities' */);
    return KillSwitches;
}());

function isUseMockTopicDataKSActivated() {
    return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["_SPKillSwitch"].isActivated('b27c283f-9033-4ffd-b8f3-fa2d0df94179' /* '05/12/2020',
    'Add flag for mocking Topic Data APIs' */);
}
function isUseCortexTopicExperiencesCapabilityKSActivated() {
    return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["_SPKillSwitch"].isActivated('ca79b9bc-75c7-408c-a782-3d77c04d41e9' /* '09/11/2020',
    'Cortex enabled check comming from Page Context' */);
}
function isLogCortexDisabledFlagGetFalseOnceKSActivated() {
    return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["_SPKillSwitch"].isActivated('03fe1e3a-35a4-4d30-9d7d-eba1b4537dbb' /* '10/08/2020',
    'CortexDisabledFlag.Get.False gets logged only once per session instead of once per call' */);
}
function skipLogEngagementForCortexDisabledKSActivated() {
    return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["_SPKillSwitch"].isActivated('e857fd57-8c06-424c-ab9c-ad26d18e5e3f' /* '12/02/2020',
    'Skips engagement logging for CortexDisabledFlag.Get.False' */);
}
function removeCortexDisabledFlagforManagementAPIsKSActivated() {
    return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["_SPKillSwitch"].isActivated('9243c796-7671-4ca8-9aab-3c6252d8379b'
    /* '10/22/2020', 'Management API's should not disable cortex because they have a smaller set of authorized users.' */
    );
}
function isUseMockForCortexTABTestKSActivated() {
    return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["_SPKillSwitch"].isActivated('fa29b3db-0910-4ee3-8f75-cd116fabcc43'
    /* '1/12/20221', 'Control if use mock data for TAB test' */
    );
}


/***/ }),

/***/ "GfEc":
/*!********************************************!*\
  !*** ./lib/dataSources/listField/index.js ***!
  \********************************************/
/*! exports provided: ListFieldDataSource, ListFieldType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ListFieldDataSource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ListFieldDataSource */ "KbXN");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ListFieldDataSource", function() { return _ListFieldDataSource__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _enums_ListFieldType__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./enums/ListFieldType */ "8xI1");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ListFieldType", function() { return _enums_ListFieldType__WEBPACK_IMPORTED_MODULE_1__["ListFieldType"]; });





/***/ }),

/***/ "GoGY":
/*!*******************************************************!*\
  !*** ./lib/dataProviders/news/HubNewsDataProvider.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _microsoft_sp_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/sp-http */ "vlQI");
/* harmony import */ var _microsoft_sp_http__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_http__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _models_NewsDataSource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./models/NewsDataSource */ "aE90");
/* harmony import */ var _DataProviderFlights__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../DataProviderFlights */ "Xkwe");
/* harmony import */ var _MicroServiceNewsDataProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MicroServiceNewsDataProvider */ "ugjH");
/* harmony import */ var _utilities_NewsUtilities__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utilities/NewsUtilities */ "JpAn");
/* harmony import */ var _loc_Strings_resx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./loc/Strings.resx */ "hE4m");
var _loc_Strings_resx__WEBPACK_IMPORTED_MODULE_6___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./loc/Strings.resx */ "hE4m", 1);
/* harmony import */ var _common_TieredCacheHelper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/TieredCacheHelper */ "nJGZ");








/**
 * @internal
 */
var HubNewsDataProvider = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(HubNewsDataProvider, _super);
    function HubNewsDataProvider() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.id = 'hubNews';
        _this.title = _loc_Strings_resx__WEBPACK_IMPORTED_MODULE_6__["HubNewsDataProviderTitle"];
        return _this;
    }
    Object.defineProperty(HubNewsDataProvider.prototype, "qosMonitorLabel", {
        get: function () {
            return 'HubNewsDataSource';
        },
        enumerable: true,
        configurable: true
    });
    /* tslint:disable-next-line:no-any */
    HubNewsDataProvider.prototype.extractMicroserviceNewsItems = function (data) {
        return _utilities_NewsUtilities__WEBPACK_IMPORTED_MODULE_5__["NewsUtilities"].extractMicroserviceNewsItems(data, this._pageContext, true /*fallbackToCurrentSite*/);
    };
    HubNewsDataProvider.prototype.executeRequest_deprecated = function (requestInfo) {
        return this._sphomeHttpClient.post(this.getMicroservicePath(requestInfo), _utilities_NewsUtilities__WEBPACK_IMPORTED_MODULE_5__["NewsUtilities"].getFilterQueryBody(requestInfo.filterKQLQuery));
    };
    HubNewsDataProvider.prototype.executeRequest = function (requestInfo) {
        var isCacheAndNetwork = _DataProviderFlights__WEBPACK_IMPORTED_MODULE_3__["default"].isCacheAndNetworkEnabled();
        var cacheOptions = {
            alias: _utilities_NewsUtilities__WEBPACK_IMPORTED_MODULE_5__["NewsUtilities"].aliasPrefix + this.id,
            id: requestInfo.webpartId,
            expirationDuration: 600000,
            cacheStrategy: isCacheAndNetwork ? _microsoft_sp_http__WEBPACK_IMPORTED_MODULE_1__["_CacheStrategy"].CacheAndNetwork : _microsoft_sp_http__WEBPACK_IMPORTED_MODULE_1__["_CacheStrategy"].CacheThenNetwork,
            extraProps: new Map([[_common_TieredCacheHelper__WEBPACK_IMPORTED_MODULE_7__["default"].useStalePropName, true]]) // tslint:disable-line:no-any
        };
        if (!requestInfo.canCacheRequest) {
            cacheOptions.cacheStrategy = _microsoft_sp_http__WEBPACK_IMPORTED_MODULE_1__["_CacheStrategy"].NetworkOnly;
        }
        return this._sphomeHttpClient.post(this.getMicroservicePath(requestInfo), _utilities_NewsUtilities__WEBPACK_IMPORTED_MODULE_5__["NewsUtilities"].getFilterQueryBody(requestInfo.filterKQLQuery), 
        /*version*/ undefined, 
        /*extraHeaders*/ undefined, cacheOptions);
    };
    HubNewsDataProvider.prototype.getMicroservicePath = function (requestInfo) {
        var endpointPath = 'news/hub/filtered';
        var queryParams = "departmentId=" + requestInfo.hubId + "&start=" + requestInfo.skip + "&count=" + requestInfo.count;
        queryParams += Object(_models_NewsDataSource__WEBPACK_IMPORTED_MODULE_2__["_appendAudienceFilteringQueryParam"])(requestInfo);
        queryParams += Object(_models_NewsDataSource__WEBPACK_IMPORTED_MODULE_2__["_appendLanguageOverrideQueryParam"])(requestInfo);
        return endpointPath + "?" + queryParams;
    };
    return HubNewsDataProvider;
}(_MicroServiceNewsDataProvider__WEBPACK_IMPORTED_MODULE_4__["default"]));
/* harmony default export */ __webpack_exports__["default"] = (HubNewsDataProvider);


/***/ }),

/***/ "Gw73":
/*!**********************************************************!*\
  !*** ./lib/httpClients/sphome/MicroServiceErrorUtils.js ***!
  \**********************************************************/
/*! exports provided: extractErrorExtraDataFromResponse, hasResponseMSCV, getMicroServiceErrorCode, isThrottledResponse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extractErrorExtraDataFromResponse", function() { return extractErrorExtraDataFromResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasResponseMSCV", function() { return hasResponseMSCV; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMicroServiceErrorCode", function() { return getMicroServiceErrorCode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isThrottledResponse", function() { return isThrottledResponse; });
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__);

var AZURE_FRONT_DOOR_HANDLING = 'AzureFrontDoorHeadersMissing';
var THROTTLED_RESPONSE = 'ThrottledResponse';
var OTHER_MS_ISSUE = 'ResponseNotOk';
function extractErrorExtraDataFromResponse(response) {
    var extraData = {
        MSCV: response.headers.get('MS-CV'),
        responseStatus: response.status.toString()
    };
    var isMSCVResponse = hasResponseMSCV(extraData.MSCV, response.url);
    extraData.errorCode = getMicroServiceErrorCode(response.status, isMSCVResponse);
    return extraData;
}
// When we have MS-CV returned, it means the request reached Microservice and they send us the MS-CV
// Extra check for IE as IE11 does not add the CORS Origin header
// https://medium.com/@mozak104/how-to-solve-ie-edge-cors-error-f52e57778252
function hasResponseMSCV(mscv, url) {
    return (_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_BrowserDetection"].getBrowserInformation().browser === _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_Browser"].IE || url) && !!mscv;
}
// If we have MS-CV returned, it means the request hit to Micro service and they handled it
// and then we classify if it is a throttled response or not.
// If we don't have MSCV, request failed even before reaching Microservice at AFD layer
function getMicroServiceErrorCode(httpStatus, isMSCVResponse) {
    return isMSCVResponse
        ? isThrottledResponse(httpStatus)
            ? THROTTLED_RESPONSE
            : OTHER_MS_ISSUE
        : AZURE_FRONT_DOOR_HANDLING;
}
function isThrottledResponse(statusCode) {
    return statusCode === 429 || statusCode === 503;
}


/***/ }),

/***/ "H4oF":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/file-loader@1.1.11_webpack@4.44.2/node_modules/file-loader/dist/cjs.js?name=icon_[name]_[hash:8].[ext]!./lib/dataProviders/news/assets/helpitemimg1-2x.png ***!
  \******************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "icon_helpitemimg1-2x_296a0ca6.png";

/***/ }),

/***/ "I6O9":
/*!***************************************!*\
  !*** external "@microsoft/sp-loader" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_I6O9__;

/***/ }),

/***/ "IIPt":
/*!**********************************************************!*\
  !*** ./lib/dataProviders/search/PersonaSettingsCache.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ms/sp-component-utilities */ "hiL/");
/* harmony import */ var _ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_0__);

/**
 * This creates a cache of persona setting. Settings are retrieved from the cache based on name
 * @internal
 */
var PersonaSettingsCache = /** @class */ (function () {
    function PersonaSettingsCache() {
    }
    PersonaSettingsCache.prototype.getPerson = function (owsId, author) {
        var person;
        var name;
        var email;
        var accountName;
        if (!owsId && author) {
            var info = author.split(';');
            if (info.length > 0) {
                name = info[info.length - 1];
            }
        }
        else if (owsId) {
            var info = owsId.split(' | ');
            if (info.length >= 2) {
                email = info[0];
                name = info[1];
            }
            // Some users have Work email Id different from login Id. e.g. FirstName.LastName@mywork.com and flast@mywork.com
            // API like userphoto resolving accountName using WorkEmail find it hard when it is different from alias.
            // Secondly client also end up using two different URL for same user, hence two copy for save user photo.
            if (info.length >= 3 && info[2]) {
                // e.g. '693A30232E667C6D656D6207C62656E7061707040E636F6D i:0#.f|membership|user@contoso.com'
                var accountNameInfo = info[2].split(' ');
                if (accountNameInfo.length > 1 && accountNameInfo[1].length > 1) {
                    // e.g. 'i:0#.f|membership|user@contoso.com'
                    accountName = this._getAccountNameFromClaim(accountNameInfo[1]); // e.g. user@contoso.com
                }
            }
        }
        person = { name: name };
        if (accountName) {
            person.profileImageSrc = _ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_0__["SPUtility"].getUserPhotoUrl(accountName);
        }
        if (email) {
            person.email = email;
            if (!person.profileImageSrc) {
                person.profileImageSrc = _ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_0__["SPUtility"].getUserPhotoUrl(email);
            }
        }
        else {
            if (name) {
                person.initials = this._getEditorInitials(name);
            }
            else if (!person.profileImageSrc) {
                // when server doesn't return editorName, fall back to default profile image.
                person.profileImageSrc = _ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_0__["SPUtility"].getUserPhotoUrl();
            }
        }
        return person;
    };
    /**
     * Get the user's initials based on display name
     */
    PersonaSettingsCache.prototype._getEditorInitials = function (name) {
        var result;
        if (name) {
            // throw away alias surrounded by parens, then separate the names
            var words = name.split('(')[0].trim().split(' ');
            switch (words.length) {
                case 1:
                    result = words[0].substring(0, 2);
                    break;
                default:
                    result = words[0].charAt(0) + words[words.length - 1].charAt(0);
                    break;
            }
            result = result.toUpperCase();
        }
        return result;
    };
    /**
     * Retrieve account name from the claim.
     * @example 'i:0h.f|membership|alias\@contoso.com' should return alias\@contoso.com
     */
    PersonaSettingsCache.prototype._getAccountNameFromClaim = function (claim) {
        if (claim) {
            var index = claim.lastIndexOf('|');
            if (index >= 0) {
                return claim.substr(index + 1);
            }
        }
        return undefined;
    };
    return PersonaSettingsCache;
}());
/* harmony default export */ __webpack_exports__["default"] = (PersonaSettingsCache);


/***/ }),

/***/ "JEu8":
/*!*****************************!*\
  !*** ./lib/models/index.js ***!
  \*****************************/
/*! exports provided: SeeAllPageLayoutWebparts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ISeeAllQueryParameters__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ISeeAllQueryParameters */ "urBa");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SeeAllPageLayoutWebparts", function() { return _ISeeAllQueryParameters__WEBPACK_IMPORTED_MODULE_0__["SeeAllPageLayoutWebparts"]; });




/***/ }),

/***/ "JUc+":
/*!****************************************************!*\
  !*** ./lib/dataProviders/common/enums/UserType.js ***!
  \****************************************************/
/*! exports provided: UserType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserType", function() { return UserType; });
/**
 * @internal
 */
// tslint:disable-next-line:typedef variable-name
var UserType = {
    /**
     * Indicates user is the current session user.
     */
    CurrentUser: 1,
    /**
     * Indicates user is who match the given match text (e.g. name).
     */
    SpecificUser: 2
};


/***/ }),

/***/ "JpAn":
/*!***********************************************************!*\
  !*** ./lib/dataProviders/news/utilities/NewsUtilities.js ***!
  \***********************************************************/
/*! exports provided: NewsUtilities */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsUtilities", function() { return NewsUtilities; });
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/sp-diagnostics */ "ut3N");
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _microsoft_sp_image_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @microsoft/sp-image-helper */ "8dK2");
/* harmony import */ var _microsoft_sp_image_helper__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_image_helper__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _microsoft_sp_page_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @microsoft/sp-page-context */ "X+PM");
/* harmony import */ var _microsoft_sp_page_context__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_page_context__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ms/odsp-utilities-bundle */ "y88i");
/* harmony import */ var _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ms_odsp_utilities_lib_alternativeUrls_SPAlternativeUrls__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ms/odsp-utilities/lib/alternativeUrls/SPAlternativeUrls */ "vmDi");
/* harmony import */ var _ms_odsp_utilities_lib_alternativeUrls_SPAlternativeUrls__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_ms_odsp_utilities_lib_alternativeUrls_SPAlternativeUrls__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ms/sp-component-utilities */ "hiL/");
/* harmony import */ var _ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _models_NewsDataSource__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../models/NewsDataSource */ "aE90");
/* harmony import */ var _loc_Strings_resx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../loc/Strings.resx */ "hE4m");
var _loc_Strings_resx__WEBPACK_IMPORTED_MODULE_8___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../loc/Strings.resx */ "hE4m", 1);
/* harmony import */ var _AssetsHelper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./AssetsHelper */ "MFri");
/* harmony import */ var _models_NewsEmptyStateType__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../models/NewsEmptyStateType */ "NRPc");
/* harmony import */ var _TryGetAuthoritativeSiteDetails__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./TryGetAuthoritativeSiteDetails */ "bLNn");
/**
 * @copyright Microsoft Corporation. All rights reserved.
 */












var CALLER_ID = 'newsProcessBannerImageUrl';
var DEFAULT_EMPTY_STATE_ITEM_COUNT = 3;
var NO_THUMBNAIL = '';
/**
 * Provides simple utilities to work with INewsItems and DataProviders for News
 * @internal
 */
var NewsUtilities = /** @class */ (function () {
    function NewsUtilities() {
    }
    NewsUtilities.cacheViewCountsValue = function (absoluteUrl, listItemId, viewCounts) {
        var currentValue = NewsUtilities.viewCountsDictionary[absoluteUrl + '/' + listItemId];
        if (currentValue === undefined || currentValue < viewCounts) {
            NewsUtilities.viewCountsDictionary[absoluteUrl + '/' + listItemId] = viewCounts;
        }
    };
    // public only for unit test access
    NewsUtilities._internalGetTeamSiteHelpItems = function (count, serviceScope) {
        var maxCount = count !== undefined && count <= DEFAULT_EMPTY_STATE_ITEM_COUNT ? count : DEFAULT_EMPTY_STATE_ITEM_COUNT;
        var result = [];
        var isHomepageModernized = false;
        if (serviceScope) {
            serviceScope.whenFinished(function () {
                var pageContext = serviceScope.consume(_microsoft_sp_page_context__WEBPACK_IMPORTED_MODULE_3__["PageContext"].serviceKey);
                isHomepageModernized = pageContext.legacyPageContext.IsHomepageModernized;
            });
        }
        var data = [
            {
                description: isHomepageModernized
                    ? _loc_Strings_resx__WEBPACK_IMPORTED_MODULE_8__["HelpItemModernizedDescription"]
                    : _loc_Strings_resx__WEBPACK_IMPORTED_MODULE_8__["HelpItem1Description"],
                title: isHomepageModernized ? _loc_Strings_resx__WEBPACK_IMPORTED_MODULE_8__["HelpItemModernizedTitle"] : _loc_Strings_resx__WEBPACK_IMPORTED_MODULE_8__["HelpItem1Title"],
                url: isHomepageModernized ? NewsUtilities._mdrnHelpUrl : _loc_Strings_resx__WEBPACK_IMPORTED_MODULE_8__["HelpItem1Url"]
            },
            { description: _loc_Strings_resx__WEBPACK_IMPORTED_MODULE_8__["HelpItem2Description"], title: _loc_Strings_resx__WEBPACK_IMPORTED_MODULE_8__["HelpItem2Title"], url: _loc_Strings_resx__WEBPACK_IMPORTED_MODULE_8__["HelpItem2Url"] },
            { description: _loc_Strings_resx__WEBPACK_IMPORTED_MODULE_8__["HelpItem3Description"], title: _loc_Strings_resx__WEBPACK_IMPORTED_MODULE_8__["HelpItem3Title"], url: _loc_Strings_resx__WEBPACK_IMPORTED_MODULE_8__["HelpItem3Url"] }
        ];
        for (var index = 0; index < maxCount; index++) {
            var helpGuid = 'f7752afa-9c69-49c8-bc62-5b5b35d01775';
            var imageKey = isHomepageModernized && index === 0 ? 'Modern' : "" + (index + 1);
            result.push({
                author: _loc_Strings_resx__WEBPACK_IMPORTED_MODULE_8__["HelpItemAuthor"],
                authorInitial: 'SP',
                authorAccountName: '',
                description: data[index].description,
                image: _AssetsHelper__WEBPACK_IMPORTED_MODULE_9__["AssetsHelper"].getIconUrl('HelpImg' + imageKey),
                publishedOn: new Date(),
                publishedOnRelativeTime: '',
                title: data[index].title,
                url: data[index].url,
                listItemId: '',
                viewCounts: undefined,
                isHelpArticle: true,
                uniqueId: helpGuid,
                siteId: helpGuid,
                webId: helpGuid
            });
        }
        return result;
    };
    NewsUtilities.isValidNewsSource = function (value) {
        return (value === _models_NewsDataSource__WEBPACK_IMPORTED_MODULE_7__["NewsDataSource"].CurrentSite ||
            value === _models_NewsDataSource__WEBPACK_IMPORTED_MODULE_7__["NewsDataSource"].Hub ||
            value === _models_NewsDataSource__WEBPACK_IMPORTED_MODULE_7__["NewsDataSource"].ChooseSites ||
            value === _models_NewsDataSource__WEBPACK_IMPORTED_MODULE_7__["NewsDataSource"].MyNews);
    };
    NewsUtilities.getEmptyStateItems = function (emptyStateType, serviceScope, count, width) {
        switch (emptyStateType) {
            case _models_NewsEmptyStateType__WEBPACK_IMPORTED_MODULE_10__["NewsEmptyStateType"].CommSite:
                return NewsUtilities.getCommSiteHelpArticles(count);
            case _models_NewsEmptyStateType__WEBPACK_IMPORTED_MODULE_10__["NewsEmptyStateType"].TeamSite:
                return NewsUtilities._internalGetTeamSiteHelpItems(count, serviceScope);
            case _models_NewsEmptyStateType__WEBPACK_IMPORTED_MODULE_10__["NewsEmptyStateType"].Carousel:
                return NewsUtilities.getEmptyCarouselItems(count, width);
            default:
                return [];
        }
    };
    NewsUtilities.getCommSiteHelpArticles = function (count) {
        var maxCount = count !== undefined && count <= DEFAULT_EMPTY_STATE_ITEM_COUNT ? count : DEFAULT_EMPTY_STATE_ITEM_COUNT;
        var result = [];
        for (var index = 0; index < maxCount; index++) {
            var randomGuid = _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Guid"].newGuid().toString();
            result.push({
                author: _loc_Strings_resx__WEBPACK_IMPORTED_MODULE_8__["EmptyStateArticleAuthor"],
                authorAccountName: '',
                description: _loc_Strings_resx__WEBPACK_IMPORTED_MODULE_8__["EmptyStateArticleDescription"],
                image: '',
                publishedOn: undefined,
                publishedOnRelativeTime: _loc_Strings_resx__WEBPACK_IMPORTED_MODULE_8__["EmptyStatePublishedRelativeTime"],
                title: _loc_Strings_resx__WEBPACK_IMPORTED_MODULE_8__["EmptyStateArticleTitle"],
                url: undefined,
                listItemId: '',
                viewCounts: undefined,
                isHelpArticle: true,
                uniqueId: randomGuid,
                siteId: randomGuid,
                webId: randomGuid
            });
        }
        return result;
    };
    NewsUtilities.getEmptyCarouselItems = function (count, width) {
        var maxCount = count !== undefined && count <= DEFAULT_EMPTY_STATE_ITEM_COUNT ? count : DEFAULT_EMPTY_STATE_ITEM_COUNT;
        var result = [];
        var titles = [
            _loc_Strings_resx__WEBPACK_IMPORTED_MODULE_8__["CarouselStockTitle1"],
            _loc_Strings_resx__WEBPACK_IMPORTED_MODULE_8__["CarouselStockTitle2"],
            _loc_Strings_resx__WEBPACK_IMPORTED_MODULE_8__["CarouselStockTitle3"]
        ];
        for (var index = 0; index < maxCount; index++) {
            var randomGuid = _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Guid"].newGuid().toString();
            result.push({
                author: '',
                authorAccountName: '',
                description: '',
                image: _ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_6__["DefaultImageHelper"].getDefaultNewsCarouselImageById(index, width),
                publishedOn: undefined,
                publishedOnRelativeTime: '',
                title: titles[index],
                url: undefined,
                listItemId: '',
                viewCounts: undefined,
                isHelpArticle: true,
                uniqueId: randomGuid,
                siteId: randomGuid,
                webId: randomGuid
            });
        }
        return result;
    };
    Object.defineProperty(NewsUtilities, "autofillItem", {
        get: function () {
            var randomGuid = _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Guid"].newGuid().toString();
            return {
                author: '',
                authorAccountName: '',
                description: '',
                image: '',
                publishedOn: undefined,
                publishedOnRelativeTime: _loc_Strings_resx__WEBPACK_IMPORTED_MODULE_8__["EmptyStatePublishedRelativeTime"],
                title: _loc_Strings_resx__WEBPACK_IMPORTED_MODULE_8__["AutofillArticleTitle"],
                url: undefined,
                listItemId: '',
                viewCounts: undefined,
                isHelpArticle: true,
                uniqueId: randomGuid,
                siteId: randomGuid,
                webId: randomGuid
            };
        },
        enumerable: true,
        configurable: true
    });
    NewsUtilities.getTipActionNewsItem = function (isContributor, webAbsoluteUrl) {
        var randomGuid = _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Guid"].newGuid().toString();
        return {
            author: '',
            authorAccountName: '',
            description: isContributor
                ? _loc_Strings_resx__WEBPACK_IMPORTED_MODULE_8__["CallToActionContributorDescription"]
                : _loc_Strings_resx__WEBPACK_IMPORTED_MODULE_8__["CallToActionViewerDescription"],
            image: '',
            isContributorActionCard: isContributor,
            publishedOn: undefined,
            publishedOnRelativeTime: '',
            title: isContributor ? _loc_Strings_resx__WEBPACK_IMPORTED_MODULE_8__["CallToActionContributorTitle"] : _loc_Strings_resx__WEBPACK_IMPORTED_MODULE_8__["CallToActionViewerTitle"],
            url: isContributor
                ? _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_4__["Uri"].concatenate(webAbsoluteUrl, '/_layouts/15/CreateSitePage.aspx?source=') +
                    _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_4__["UriEncoding"].encodeURIComponent(window.location.pathname) +
                    '&promotedState=1'
                : _loc_Strings_resx__WEBPACK_IMPORTED_MODULE_8__["HelpItem1Url"],
            listItemId: '',
            viewCounts: undefined,
            isHelpArticle: true,
            uniqueId: randomGuid,
            siteId: randomGuid,
            webId: randomGuid
        };
    };
    /* tslint:disable-next-line:no-any */
    NewsUtilities.extractNewsItemsFromSearch = function (data, pageContext) {
        return data.map(function (result) {
            var siteId = result.SiteID ? _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Guid"].parse(result.SiteID).toString() : undefined;
            var webId = result.WebId ? _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Guid"].parse(result.WebId).toString() : undefined;
            var listId = result.ListId ? _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Guid"].parse(result.ListId).toString() : undefined;
            var uniqueId = result.UniqueID
                ? _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Guid"].parse(result.UniqueID).toString()
                : undefined;
            var viewCountLifetime = result.ViewCountLifetime;
            var viewCounts = typeof viewCountLifetime === 'number' ? viewCountLifetime : undefined;
            var authoritativeSite = Object(_TryGetAuthoritativeSiteDetails__WEBPACK_IMPORTED_MODULE_11__["tryGetAuthoritativeSiteDetails"])(siteId, webId, pageContext);
            var siteUrl = result.SPWebUrl;
            var imageUrl = NewsUtilities._handleDefaultBanner(result.PictureThumbnailURL);
            return {
                author: NewsUtilities._getUserDisplayNameFromSearch(result.CreatedBy),
                authorAccountName: result.AuthorOWSUSER,
                description: result.Description || '',
                isAuthoritative: !!authoritativeSite,
                image: imageUrl || NO_THUMBNAIL,
                publishedOn: new Date(result.FirstPublishedDate),
                publishedOnRelativeTime: '',
                title: result.Title || result.FileName,
                url: NewsUtilities.encodeSegments(result.Path),
                listItemId: result.ListItemId,
                originalSourceItemId: undefined,
                originalSourceUrl: NewsUtilities.encodeSegments(result.OriginalPath),
                path: result.Path,
                siteTitle: NewsUtilities._getSiteTitle(result, siteId, webId, pageContext),
                siteUrl: siteUrl,
                viewCounts: viewCounts,
                isHelpArticle: false,
                uniqueId: uniqueId,
                siteId: siteId,
                webId: webId,
                listId: listId
            };
        });
    };
    /* tslint:disable-next-line:no-any */
    NewsUtilities.extractNewsItems = function (data, pageContext) {
        return data.map(function (result) {
            var normalizeId = function (id) { return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Guid"].parse(id).toString(); };
            var siteId = result.SiteID ? normalizeId(result.SiteID) : pageContext.site.id.toString();
            var webId = result.WebId ? normalizeId(result.WebId) : pageContext.web.id.toString();
            var listId = result.ListId
                ? normalizeId(result.ListId)
                : pageContext.list && pageContext.list.id && pageContext.list.id.toString();
            var uniqueId = result.UniqueId
                ? normalizeId(result.UniqueId)
                : pageContext.listItem && pageContext.listItem.id && pageContext.listItem.id.toString();
            var authoritativeSite = Object(_TryGetAuthoritativeSiteDetails__WEBPACK_IMPORTED_MODULE_11__["tryGetAuthoritativeSiteDetails"])(siteId, webId, pageContext);
            var BannerImageUrl = result.BannerImageUrl, BannerThumbnailUrl = result.BannerThumbnailUrl;
            var imageUrl;
            if (_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPFlight"].isEnabled(1047 /* EnableWebTemplatesGallery */) &&
                BannerImageUrl &&
                BannerImageUrl.toUpperCase().indexOf('/_LAYOUTS/IMAGES/') > -1) {
                imageUrl = NewsUtilities._handleDefaultBanner(BannerImageUrl);
            }
            else {
                imageUrl = NewsUtilities._handleDefaultBanner(BannerThumbnailUrl || BannerImageUrl);
            }
            return {
                author: result.CreatedBy.Name,
                authorAccountName: result.CreatedBy.AccountName,
                description: result.Description ? result.Description : '',
                isAuthoritative: !!authoritativeSite,
                image: imageUrl || NO_THUMBNAIL,
                publishedOn: new Date(result.FirstPublished),
                publishedOnRelativeTime: '',
                title: result.Title || result.FileName,
                url: NewsUtilities.encodeSegments(result.AbsoluteUrl),
                listItemId: result.Id,
                originalSourceItemId: result.OriginalSourceItemId,
                originalSourceUrl: NewsUtilities.encodeSegments(result.OriginalSourceUrl),
                path: result.Path && result.Path.DecodedUrl,
                siteTitle: authoritativeSite
                    ? NewsUtilities._getSiteTitle(result, siteId, webId, pageContext)
                    : undefined,
                siteUrl: pageContext.web.absoluteUrl,
                viewCounts: undefined,
                isHelpArticle: false,
                uniqueId: uniqueId,
                siteId: siteId,
                webId: webId,
                listId: listId
            };
        });
    };
    NewsUtilities.extractMicroserviceNewsItems = function (data /* tslint:disable-line:no-any */, pageContext, fallbackToCurrentSite) {
        return data.map(function (result) {
            var siteId;
            var webId;
            var listId;
            var itemReference = result.Site && result.Site.ItemReference;
            var library = result.Library;
            var siteGuid = _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Guid"].tryParse(itemReference && itemReference.SiteId);
            siteId = (siteGuid && siteGuid.toString()) || (fallbackToCurrentSite && pageContext.site.id.toString());
            var webGuid = _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Guid"].tryParse(itemReference && itemReference.WebId);
            webId = (webGuid && webGuid.toString()) || (fallbackToCurrentSite && pageContext.web.id.toString());
            var listGuid = _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Guid"].tryParse(library && library.ListId);
            listId = listGuid && listGuid.toString();
            var uniqueId = result.UniqueId ? _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Guid"].parse(result.UniqueId).toString() : undefined;
            var authoritativeSite = Object(_TryGetAuthoritativeSiteDetails__WEBPACK_IMPORTED_MODULE_11__["tryGetAuthoritativeSiteDetails"])(siteId, webId, pageContext);
            var siteUrl = result.Site && result.Site.Url ? result.Site.Url : result.SiteUrl || pageContext.site.absoluteUrl;
            var imageUrl = NewsUtilities._handleDefaultBanner(result.ImageUrl);
            return {
                author: result.Author && result.Author.Title ? result.Author.Title : '',
                authorAccountName: result.Author && result.Author.AccountName ? result.Author.AccountName : '',
                description: result.Description,
                isAuthoritative: result.IsAuthoritativeNews || !!authoritativeSite,
                image: imageUrl || NO_THUMBNAIL,
                publishedOn: new Date(result.FirstPublishedDate),
                publishedOnRelativeTime: '',
                title: result.Title,
                url: NewsUtilities.encodeSegments(result.Url),
                viewCounts: undefined,
                isHelpArticle: false,
                siteTitle: NewsUtilities._getSiteTitle(result, siteId, webId, pageContext),
                siteUrl: siteUrl,
                listItemId: result.ListItemId,
                originalSourceItemId: result.OriginalSourceItemId,
                originalSourceUrl: NewsUtilities.encodeSegments(result.OriginalSourceUrl),
                path: result.Path && result.Path.DecodedUrl,
                uniqueId: uniqueId,
                siteId: siteId,
                webId: webId,
                listId: listId
            };
        });
    };
    /**
     *
     * @param bannerImageUrl - PictureThumbnailUrl from search
     * @param defaultUniqueId - News article's guid
     * @param pageContext - PageContext for the current site
     * @param imageWidth - width of the container
     * @param siteId - Site ID that the article was posted to
     * @param webId - Web ID that the article was posted to
     * @param contextBaseUrl - Absolute URL of site that the article was posted to
     */
    NewsUtilities.processBannerImageUrlPart = function (bannerImageUrl, defaultUniqueId, pageContext, imageWidth, siteId, webId, contextBaseUrl) {
        try {
            var result = NewsUtilities._processBannerImageUrlPartCore(bannerImageUrl, defaultUniqueId, pageContext, imageWidth, siteId, webId, contextBaseUrl);
            return result;
        }
        catch (ex) {
            // tslint:disable-next-line:no-any
            var extraData = {
                defaultUniqueId: defaultUniqueId,
                imageWidth: imageWidth
            };
            if (siteId) {
                // tslint:disable:no-string-literal
                extraData['siteId'] = siteId;
            }
            if (webId) {
                extraData['webId'] = siteId;
                // tslint:enable:no-string-literal
            }
            var monitor = new _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__["_QosMonitor"]('News.processBannerImageUrlPart');
            monitor.writeExpectedFailure('UrlError', ex, extraData);
            return ''; // Treat as no thumbnail
        }
    };
    /**
     * Returns original URL in case it is not private CDN Url.
     * returns resource path URL in cae of CDN Url
     * it doesn't check for stale CDN Url
     * @param imageUrlPart - URL of image from data source
     */
    NewsUtilities.getResourceFromPrivateCDNUrl = function (bannerImageUrl) {
        if (_microsoft_sp_image_helper__WEBPACK_IMPORTED_MODULE_2__["_ThumbnailUrlGenerator"].getThumbnailProvider(bannerImageUrl) === _microsoft_sp_image_helper__WEBPACK_IMPORTED_MODULE_2__["_ThumbnailProviderType"].PrivateCDN) {
            var privateCDNResourcePath = new _microsoft_sp_image_helper__WEBPACK_IMPORTED_MODULE_2__["_SPResourcePath"](bannerImageUrl);
            bannerImageUrl = "https:/" + privateCDNResourcePath.path;
            bannerImageUrl = bannerImageUrl.split('?')[0]; // Get rid of query param
        }
        return bannerImageUrl;
    };
    NewsUtilities.isPrefetchStale = function (pageUrl) {
        if (this._initialUrl === undefined) {
            this._initialUrl = pageUrl;
            return false;
        }
        else {
            return true;
        }
    };
    NewsUtilities.extractParamFromUrl = function (param, pageUrl) {
        var queryStringParameterTitleExtractor = new RegExp("[?&]" + param + "=([^?&]+)(&|$)");
        return queryStringParameterTitleExtractor.test(pageUrl)
            ? decodeURIComponent(queryStringParameterTitleExtractor.exec(pageUrl)[1])
            : undefined;
    };
    NewsUtilities.isNewsItemInList = function (newsList, newsPost) {
        if (!newsList || !newsPost) {
            return false;
        }
        return newsList.some(function (item, index) {
            return item &&
                NewsUtilities.getNewsItemKey(item, "" + index) === NewsUtilities.getNewsItemKey(newsPost, "" + index);
        });
    };
    NewsUtilities.getPaddingCount = function (requestInfo, realNewsCount) {
        var paddingCount = 0;
        if (requestInfo.emptyItemType) {
            paddingCount = requestInfo.count - realNewsCount;
            paddingCount = requestInfo.emptyItemsCount
                ? Math.min(requestInfo.emptyItemsCount, paddingCount)
                : paddingCount;
        }
        return paddingCount;
    };
    NewsUtilities.hasSameSetOfPosts = function (newsList1, newsList2) {
        if (!newsList1 || !newsList2 || newsList1.length !== newsList2.length) {
            return false;
        }
        var areEqual = true;
        newsList1.every(function (item1) {
            areEqual =
                areEqual &&
                    newsList2.some(function (item2) {
                        return item1.url === item2.url;
                    });
            return areEqual;
        });
        return areEqual;
    };
    NewsUtilities.hasSameOrderOfPosts = function (newsList1, newsList2) {
        if (!newsList1 || !newsList2 || newsList1.length !== newsList2.length) {
            return false;
        }
        for (var index = 0; index < newsList1.length; index++) {
            if (newsList1[index] !== newsList2[index]) {
                return false;
            }
        }
        return true;
    };
    NewsUtilities.removeQueryParam = function (url, queryParam) {
        if (url && queryParam) {
            var uri = new _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_4__["Uri"](url);
            uri.removeQueryParameter(queryParam);
            return uri.toString();
        }
        return url;
    };
    NewsUtilities.didRenderedPropertiesChange = function (updatedItem, currentItem) {
        return (updatedItem &&
            currentItem &&
            (updatedItem.description !== currentItem.description ||
                updatedItem.image !== currentItem.image ||
                updatedItem.title !== currentItem.title));
    };
    NewsUtilities.getNewsItemKey = function (item, helpArticleKey) {
        return item.isHelpArticle
            ? helpArticleKey
            : item.siteId + "-" + item.webId + "-" + item.listId + "-" + item.uniqueId;
    };
    Object.defineProperty(NewsUtilities, "isOnSeeAllPage", {
        get: function () {
            var currentUri = new _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_4__["Uri"](window.location.href);
            return _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_4__["StringHelper"].doesStringEndWith(currentUri.getPath(true).toLowerCase(), '/_layouts/15/news.aspx');
        },
        enumerable: true,
        configurable: true
    });
    NewsUtilities.getFilterQueryBody = function (filterQuery) {
        if (filterQuery === void 0) { filterQuery = ''; }
        return JSON.stringify(filterQuery);
    };
    NewsUtilities.encodeSegments = function (url) {
        if (!url) {
            return url;
        }
        // Avoid the encodeSegments call from removing the trailing slash from the input url
        // as some sites require it to correctly navigate to the page.
        var endingSlash = url.substring(url.length - 1) === '/' ? '/' : '';
        var resourcePath = new _microsoft_sp_image_helper__WEBPACK_IMPORTED_MODULE_2__["_SPResourcePath"](url);
        if (!resourcePath.authority && !resourcePath.domain) {
            return url;
        }
        var aspxRegex = new RegExp('.+.aspx');
        var encodedURLRegex = new RegExp('^(?:[^%]|%[0-9A-Fa-f]{2})+$');
        var encodedSegments = resourcePath.segments
            .filter(function (seg) { return !!seg; })
            .map(function (seg) {
            try {
                if (aspxRegex.test(seg)) {
                    var segToEncode = aspxRegex.exec(encodedURLRegex.test(seg) ? decodeURIComponent(seg) : seg)[0];
                    return seg.replace(aspxRegex, encodeURIComponent(segToEncode));
                }
                else {
                    return seg;
                }
            }
            catch (_a) {
                // Exception handling for Malform URL with single %. If not handled by encodedURLRegex
                return seg;
            }
        });
        return (_ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_4__["Uri"].concatenate.apply(_ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_4__["Uri"], [resourcePath.authority].concat(encodedSegments)) +
            endingSlash +
            resourcePath.searchParamString);
    };
    NewsUtilities._shouldDeprecateDocViz = function () {
        return _microsoft_sp_image_helper__WEBPACK_IMPORTED_MODULE_2__["_ThumbnailUrlGenerator"].isVROOMThumbnailEnabled();
    };
    NewsUtilities._getSiteTitle = function (data /* tslint:disable-line:no-any */, siteId, webId, pageContext) {
        var title = data.SiteTitle;
        if (!title) {
            var siteGuid = _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Guid"].tryParse(siteId);
            var webGuid = _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Guid"].tryParse(webId);
            var useContextWebTitle = siteGuid && webGuid && siteGuid.equals(pageContext.site.id) && webGuid.equals(pageContext.web.id);
            if (useContextWebTitle) {
                title = pageContext.web.title;
            }
        }
        return title;
    };
    NewsUtilities._getUserDisplayNameFromSearch = function (user) {
        var displayName = user;
        var parts = user && user.split('|');
        if (parts && parts.length > 1) {
            displayName = parts[1];
        }
        return displayName || '';
    };
    NewsUtilities._handleDefaultBanner = function (imageUrl) {
        if (NewsUtilities._isDefaultBannerImage(imageUrl)) {
            return NO_THUMBNAIL;
        }
        return imageUrl;
    };
    NewsUtilities._extractImageFromBanner = function (bannerImageUrl) {
        var parts = bannerImageUrl.split(', ');
        var index = parts.length > 1 ? 1 : 0;
        return parts[index].trim();
    };
    NewsUtilities._isDefaultBannerImage = function (bannerImageUrl) {
        return (!bannerImageUrl ||
            _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_4__["StringHelper"].doesStringEndWith(NewsUtilities._extractImageFromBanner(bannerImageUrl), '/images/sitepagethumbnail.png'));
    };
    /**
     *
     * @param bannerImageUrl - PictureThumbnailUrl from search
     * @param defaultUniqueId - News article's guid
     * @param pageContext - PageContext for the current site
     * @param imageWidth - width of the container
     * @param monitor - Reliability monitor
     * @param siteId - Site ID that the article was posted to
     * @param webId - Web ID that the article was posted to
     * @param contextBaseUrl - Absolute URL of site that the article was posted to
     */
    NewsUtilities._processBannerImageUrlPartCore = function (bannerImageUrl, defaultUniqueId, pageContext, imageWidth, siteId, webId, contextBaseUrl) {
        var imageUrlPart = NewsUtilities._extractImageFromBanner(bannerImageUrl);
        var absoluteUrl = contextBaseUrl || pageContext.web.absoluteUrl;
        var logPrefix = CALLER_ID + ":";
        var externalBanner = NewsUtilities._tryGetExternalBanner(pageContext, imageUrlPart, logPrefix);
        if (externalBanner) {
            return externalBanner;
        }
        if (NewsUtilities._isDefaultBannerImage(imageUrlPart)) {
            return '';
        }
        var provider = _microsoft_sp_image_helper__WEBPACK_IMPORTED_MODULE_2__["_ThumbnailUrlGenerator"].getThumbnailProvider(imageUrlPart);
        if (provider === _microsoft_sp_image_helper__WEBPACK_IMPORTED_MODULE_2__["_ThumbnailProviderType"].PrivateCDN && !Object(_ms_odsp_utilities_lib_alternativeUrls_SPAlternativeUrls__WEBPACK_IMPORTED_MODULE_5__["isAlterantiveUrlFresh"])(imageUrlPart)) {
            // Token has expired, convert into resource path,
            // which can be regenerated based on services available for rewrite.
            var privateCDNResourcePath = new _microsoft_sp_image_helper__WEBPACK_IMPORTED_MODULE_2__["_SPResourcePath"](imageUrlPart);
            imageUrlPart = "https:/" + privateCDNResourcePath.path;
            imageUrlPart = imageUrlPart.split('?')[0]; // Get rid of query param
            provider = _microsoft_sp_image_helper__WEBPACK_IMPORTED_MODULE_2__["_ThumbnailProviderType"].Original;
        }
        var imageResource = new _microsoft_sp_image_helper__WEBPACK_IMPORTED_MODULE_2__["_SPResourcePath"](imageUrlPart);
        var path = imageResource.path.toLowerCase();
        if (provider === _microsoft_sp_image_helper__WEBPACK_IMPORTED_MODULE_2__["_ThumbnailProviderType"].Stock) {
            return imageUrlPart;
        }
        else if (provider === _microsoft_sp_image_helper__WEBPACK_IMPORTED_MODULE_2__["_ThumbnailProviderType"].VROOMMeTACache ||
            provider === _microsoft_sp_image_helper__WEBPACK_IMPORTED_MODULE_2__["_ThumbnailProviderType"].PrivateCDN ||
            provider === _microsoft_sp_image_helper__WEBPACK_IMPORTED_MODULE_2__["_ThumbnailProviderType"].PublicCDN ||
            provider === _microsoft_sp_image_helper__WEBPACK_IMPORTED_MODULE_2__["_ThumbnailProviderType"].MeTA) {
            return _microsoft_sp_image_helper__WEBPACK_IMPORTED_MODULE_2__["_ThumbnailUrlGenerator"].updateThumbnailWidth(imageUrlPart, imageWidth);
        }
        if (provider === _microsoft_sp_image_helper__WEBPACK_IMPORTED_MODULE_2__["_ThumbnailProviderType"].DocViz) {
            // Url already points to the GetPreview service.
            // Use the correct resoultion query string parameter.
            _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__["_TraceLogger"].logVerbose(NewsUtilities._logSource, logPrefix + " already from GetPreview");
            if (NewsUtilities._shouldDeprecateDocViz()) {
                var thumbnailUrl = _microsoft_sp_image_helper__WEBPACK_IMPORTED_MODULE_2__["_ThumbnailUrlGenerator"].fromGetPreview(imageUrlPart, CALLER_ID, imageWidth);
                if (thumbnailUrl) {
                    return thumbnailUrl;
                }
            }
            var resolution = _microsoft_sp_image_helper__WEBPACK_IMPORTED_MODULE_2__["_PreviewUtility"].normalizeWidthToResolution(imageWidth);
            var imageUri = new _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_4__["Uri"](imageUrlPart);
            imageUri.setQueryParameter(_microsoft_sp_image_helper__WEBPACK_IMPORTED_MODULE_2__["_PreviewHelper"].RESOLUTION, resolution.toString());
            return imageUri.toString();
        }
        // WEXReWriteBannerImageUrl: Don't process again if server already mapped to Thumbnail Service.
        var notCanonical = provider !== _microsoft_sp_image_helper__WEBPACK_IMPORTED_MODULE_2__["_ThumbnailProviderType"].SharePointHost && provider !== _microsoft_sp_image_helper__WEBPACK_IMPORTED_MODULE_2__["_ThumbnailProviderType"].MySite;
        if (provider !== _microsoft_sp_image_helper__WEBPACK_IMPORTED_MODULE_2__["_ThumbnailProviderType"].Unknown && notCanonical) {
            return _microsoft_sp_image_helper__WEBPACK_IMPORTED_MODULE_2__["_ThumbnailUrlGenerator"].updateThumbnailWidth(imageUrlPart, imageWidth);
        }
        // If we have path, we should use that to generate URL, because Guids belongs to aspx path
        // Mixing that with Banner image URL can create confusion when BannerImage is from different Web.
        var request = {
            absoluteUrl: imageResource.authority || absoluteUrl,
            fileType: _microsoft_sp_image_helper__WEBPACK_IMPORTED_MODULE_2__["_PreviewUtility"].getFileExtension(imageResource),
            spResource: path,
            width: imageWidth,
            callerId: CALLER_ID
        };
        var defaultImage = _ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_6__["DefaultImageHelper"].getDefaultImage(imageResource, request.width);
        return _microsoft_sp_image_helper__WEBPACK_IMPORTED_MODULE_2__["_ThumbnailUrlGenerator"].getThumbnailUrl(request, defaultImage);
    };
    /**
     * Returns image from different host as is or undefiend if on same host.
     * @param imageUrlPart - URL of image from data source
     * @param logPrefix - prefix for logging
     */
    NewsUtilities._tryGetExternalBanner = function (pageContext, imageUrlPart, logPrefix) {
        var imageResourcePath = new _microsoft_sp_image_helper__WEBPACK_IMPORTED_MODULE_2__["_SPResourcePath"](imageUrlPart);
        var imageUriHost = NO_THUMBNAIL;
        if (imageResourcePath) {
            imageUriHost = imageResourcePath.authority;
        }
        if (imageUriHost && !_ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_6__["UrlUtility"].isInternalResource(imageUrlPart, pageContext)) {
            _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__["_TraceLogger"].logVerbose(NewsUtilities._logSource, logPrefix + " external host");
            return imageUrlPart;
        }
        return undefined;
    };
    NewsUtilities.aliasPrefix = 'FirstParty_NewsWebPart_';
    NewsUtilities.viewCountsDictionary = {};
    NewsUtilities._logSource = _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__["_LogSource"].create('NewsUtilities');
    NewsUtilities._mdrnHelpUrl = ' https://go.microsoft.com/fwlink/?linkid=2103711';
    return NewsUtilities;
}());



/***/ }),

/***/ "K5cs":
/*!*******************************************!*\
  !*** ./lib/dataSources/listItem/index.js ***!
  \*******************************************/
/*! exports provided: ListItemDataSource, SPRenderListDataOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ListItemDataSource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ListItemDataSource */ "Ebj+");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ListItemDataSource", function() { return _ListItemDataSource__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _enums_SPRenderListDataOptions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./enums/SPRenderListDataOptions */ "AARv");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SPRenderListDataOptions", function() { return _enums_SPRenderListDataOptions__WEBPACK_IMPORTED_MODULE_1__["SPRenderListDataOptions"]; });





/***/ }),

/***/ "K9kD":
/*!***************************************!*\
  !*** external "@ms/odsp-core-bundle" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_K9kD__;

/***/ }),

/***/ "KL1q":
/*!***********************************************************!*\
  !*** external "@microsoft/office-ui-fabric-react-bundle" ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_KL1q__;

/***/ }),

/***/ "KbXN":
/*!**********************************************************!*\
  !*** ./lib/dataSources/listField/ListFieldDataSource.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _dataSources_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../dataSources/base */ "jnk8");
// @todo: VSO: 335499 Move data sources to odsp-datasources


/**
 * @internal
 */
var ListFieldDataSource = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ListFieldDataSource, _super);
    function ListFieldDataSource() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Query for lists available within a web site with OData query functionality.
     *
     * Parameter values must be sanitized for the url beforehand.
     * @param webAbsoluteUrl - path to the site containing the lists
     * @param listId - identifier of the SharePoint list as a guid in string format
     * @param queryString - OData query string options including $orderby, $top, $skip, $filter, $select
     * See: http://www.odata.org/documentation/odata-version-2-0/uri-conventions/#QueryStringOptions
     */
    ListFieldDataSource.prototype.getFieldsForList = function (webAbsoluteUrl, listId, queryString) {
        return this.get(webAbsoluteUrl, "/_api/web/lists('" + listId + "')/Fields", queryString, 'ListFieldDataSource', 'getFieldsForList', 
        // provide an accept header override to suppress odata output and reduce the response size
        {
            headers: {
                accept: 'application/json;odata.metadata=none'
            }
        }).then(function (jsonData) {
            return jsonData.value;
        });
    };
    return ListFieldDataSource;
}(_dataSources_base__WEBPACK_IMPORTED_MODULE_1__["SPDataSource"]));
/* harmony default export */ __webpack_exports__["default"] = (ListFieldDataSource);


/***/ }),

/***/ "L/SE":
/*!***********************************************!*\
  !*** ./lib/dataProviders/BaseDataProvider.js ***!
  \***********************************************/
/*! exports provided: BaseDataProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseDataProvider", function() { return BaseDataProvider; });
/* harmony import */ var _microsoft_sp_page_context__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/sp-page-context */ "X+PM");
/* harmony import */ var _microsoft_sp_page_context__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_page_context__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _microsoft_sp_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/sp-http */ "vlQI");
/* harmony import */ var _microsoft_sp_http__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_http__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__);



/**
 * Provides a helper base class for a data provider in order to reduce line count.
 *
 * @internal
 */
// tslint:disable-next-line:no-any
var BaseDataProvider = /** @class */ (function () {
    function BaseDataProvider(options) {
        this._options = options;
        this._serviceScope = options.serviceScope;
        // The constructor is returned via the DataProviderLoader.  The receiver can call it with ServiceScope
        // and receive the instance returned here.
        return this;
    }
    // Format of data changes per the request so return is an "any".
    // tslint:disable-next-line:no-any
    BaseDataProvider.prototype.requestData = function (request) {
        var _this = this;
        return this.resolveServices().then(function () { return _this.getItems(request); });
    };
    BaseDataProvider.prototype.resolveServices = function () {
        var _this = this;
        return new Promise(function (complete, reject) {
            _this._serviceScope.whenFinished(function () {
                _this._pageContext = _this._serviceScope.consume(_microsoft_sp_page_context__WEBPACK_IMPORTED_MODULE_0__["PageContext"].serviceKey);
                _this._baseEndPoint = _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__["UrlUtilities"].removeEndSlash(_this._pageContext.web.absoluteUrl);
                if (_this._options.useHttpClient) {
                    _this._httpClient = _this._serviceScope.consume(_microsoft_sp_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"].serviceKey);
                }
                else {
                    _this._spHttpClient = _this._serviceScope.consume(_microsoft_sp_http__WEBPACK_IMPORTED_MODULE_1__["SPHttpClient"].serviceKey);
                }
                if (_this._options.requiresTokenProvider) {
                    _this._tokenProvider = _this._serviceScope.consume(_microsoft_sp_http__WEBPACK_IMPORTED_MODULE_1__["OAuthTokenProvider"].serviceKey);
                }
                complete();
            });
        });
    };
    Object.defineProperty(BaseDataProvider.prototype, "options", {
        get: function () {
            return this._options;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseDataProvider.prototype, "httpClient", {
        get: function () {
            return this._httpClient;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseDataProvider.prototype, "spHttpClient", {
        get: function () {
            return this._spHttpClient;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseDataProvider.prototype, "pageContext", {
        get: function () {
            return this._pageContext;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseDataProvider.prototype, "tokenProvider", {
        get: function () {
            return this._tokenProvider;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseDataProvider.prototype, "baseEndPoint", {
        get: function () {
            return this._baseEndPoint;
        },
        enumerable: true,
        configurable: true
    });
    return BaseDataProvider;
}());



/***/ }),

/***/ "M0r2":
/*!**********************************************************!*\
  !*** ./lib/dataProviders/page/PageSearchDataProvider.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _search_PersonaSettingsCache__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../search/PersonaSettingsCache */ "IIPt");
/* harmony import */ var _search_SearchDataProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../search/SearchDataProvider */ "dU3L");




/**
 * @internal
 */
var PageSearchDataProvider = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(PageSearchDataProvider, _super);
    function PageSearchDataProvider() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._mapResponse = function (searchResults) {
            var results = searchResults.rows.map(function (row) { return ({
                id: _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["Guid"].tryParse(row.UniqueID),
                lastEditor: _this._personaSettingsCache.getPerson(row.EditorOwsUser, row.ModifiedBy),
                lastModifiedDate: row.ModifiedOwsDate && new Date(row.ModifiedOwsDate),
                title: row.Title,
                url: row.DefaultEncodingURL
            }); });
            return Promise.resolve(results);
        };
        return _this;
    }
    PageSearchDataProvider.prototype._initVariables = function () {
        this._personaSettingsCache = new _search_PersonaSettingsCache__WEBPACK_IMPORTED_MODULE_2__["default"]();
    };
    return PageSearchDataProvider;
}(_search_SearchDataProvider__WEBPACK_IMPORTED_MODULE_3__["SearchDataProvider"]));
/* harmony default export */ __webpack_exports__["default"] = (PageSearchDataProvider);


/***/ }),

/***/ "MFri":
/*!**********************************************************!*\
  !*** ./lib/dataProviders/news/utilities/AssetsHelper.js ***!
  \**********************************************************/
/*! exports provided: AssetsHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssetsHelper", function() { return AssetsHelper; });
/**
 * @copyright Microsoft Corporation. All rights reserved.
 */
var AssetsHelper = /** @class */ (function () {
    function AssetsHelper() {
    }
    /**
     * get icon url from the assets folder based on the key.
     * @return icon url in src/webparts/Newsreel/assets folder.
     * auto return retina icon url for retina device.
     */
    AssetsHelper.getIconUrl = function (key) {
        if (key === AssetsHelper._modernizedImageKey && !AssetsHelper._assetIconsMap[this._modernizedImageKey]) {
            var modernImgUrl = __webpack_require__(/*! @ms/odsp-media/dist/media/images/news/Modernize_News.svg */ "FS93");
            AssetsHelper._assetIconsMap[this._modernizedImageKey] = [modernImgUrl, modernImgUrl];
        }
        var icons = AssetsHelper._assetIconsMap[key];
        var index = window.devicePixelRatio >= 2 && icons.length >= 2 ? 1 : 0;
        return icons[index];
    };
    /* tslint:disable:max-line-length */
    AssetsHelper._assetIconsMap = {
        HelpImg1: [
            __webpack_require__(/*! !file-loader?name=icon_[name]_[hash:8].[ext]!../assets/helpitemimg1.png */ "fMQH"),
            __webpack_require__(/*! !file-loader?name=icon_[name]_[hash:8].[ext]!../assets/helpitemimg1-2x.png */ "H4oF")
        ],
        HelpImg2: [
            __webpack_require__(/*! !file-loader?name=icon_[name]_[hash:8].[ext]!../assets/helpitemimg2.png */ "lMGj"),
            __webpack_require__(/*! !file-loader?name=icon_[name]_[hash:8].[ext]!../assets/helpitemimg2-2x.png */ "3Rlg")
        ],
        HelpImg3: [
            __webpack_require__(/*! !file-loader?name=icon_[name]_[hash:8].[ext]!../assets/helpitemimg3.png */ "AzJr"),
            __webpack_require__(/*! !file-loader?name=icon_[name]_[hash:8].[ext]!../assets/helpitemimg3-2x.png */ "hfyH")
        ]
    };
    /* tslint:enable:max-line-length */
    AssetsHelper._modernizedImageKey = 'HelpImgModern';
    return AssetsHelper;
}());



/***/ }),

/***/ "NRPc":
/*!*************************************************************!*\
  !*** ./lib/dataProviders/news/models/NewsEmptyStateType.js ***!
  \*************************************************************/
/*! exports provided: NewsEmptyStateType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsEmptyStateType", function() { return NewsEmptyStateType; });
// @Copyright (c) Microsoft Corporation.  All rights reserved.
/**
 * @internal
 */
// tslint:disable-next-line:typedef variable-name
var NewsEmptyStateType = {
    None: 0,
    TeamSite: 1,
    CommSite: 2,
    Carousel: 3
};


/***/ }),

/***/ "NfQ8":
/*!***************************************************************!*\
  !*** ../sp-component-utilities/lib/performance/KillSwitch.js ***!
  \***************************************************************/
/*! exports provided: KillSwitch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KillSwitch", function() { return KillSwitch; });
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__);

/**
 * @deprecated DO NOT USE - Use _SPKillSwitch from `@microsoft/sp-core-library`.
 * Example: _SPKillSwitch.isActivated('00000000-0000-0000-0000-000000000000' \/* 'MM/DD/YYYY', 'My Feature' *\/);
 *
 * Class representing kill switch information.
 */
var KillSwitch = /** @class */ (function () {
    /**
     * Specify date and description within comment section
     * e.g. ('efc0bbdb-5840-4f29-ae06-6415236103a5' /* '4/9/2019', 'SOX_EventDataPickerAutoFocus' *\/)
     *
     *
     * @param guid - Guid of the kill switch. It is highly recommended to use lowercase without {} for best performance
     */
    function KillSwitch(guid) {
        this._guid = _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Guid"].parse(guid);
    }
    /**
     * Returns true if kill switch has been activated.
     */
    KillSwitch.prototype.isActivated = function () {
        return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPKillSwitch"].isActivated(this._guid, '', '');
    };
    return KillSwitch;
}());



/***/ }),

/***/ "PdqL":
/*!**********************************************************!*\
  !*** ./lib/dataProviders/common/enums/FilterOperator.js ***!
  \**********************************************************/
/*! exports provided: FilterOperator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterOperator", function() { return FilterOperator; });
/**
 * @internal
 */
// tslint:disable-next-line:typedef variable-name
var FilterOperator = {
    Equals: 1,
    NotEqual: 2,
    BeginsWith: 3,
    EndsWith: 4,
    Contains: 5,
    DoesNotContain: 6,
    LessThan: 7,
    GreaterThan: 8,
    Between: 9,
    GreaterThanOrEqualTo: 10,
    LessThanOrEqualTo: 11,
    IsNull: 12
};


/***/ }),

/***/ "Pk8u":
/*!**********************************************!*\
  !*** external "@microsoft/sp-lodash-subset" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_Pk8u__;

/***/ }),

/***/ "Pu3M":
/*!************************************************************************!*\
  !*** ./lib/dataProviders/Topics/firstRun/TopicFirstRunCacheManager.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/sp-diagnostics */ "ut3N");
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_0__);
/**
 * @Copyright (c) Microsoft Corporation.  All rights reserved.
 */

var valueMap = {
    true: true,
    false: false
};
var TopicFirstRunCacheManager = /** @class */ (function () {
    function TopicFirstRunCacheManager() {
    }
    TopicFirstRunCacheManager.getIsFirstRun = function (key) {
        var val = window.localStorage.getItem(key);
        return valueMap[val];
    };
    TopicFirstRunCacheManager.setIsFirstRun = function (key, isFirstRun) {
        var firstRun = window.localStorage.getItem(key);
        var firstRunString = String(isFirstRun);
        if (firstRun !== firstRunString) {
            try {
                window.localStorage.setItem(key, firstRunString);
            }
            catch (error) {
                _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_0__["_TraceLogger"].logError(TopicFirstRunCacheManager._logSource, error);
            }
        }
    };
    TopicFirstRunCacheManager._logSource = _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_0__["_LogSource"].create('CortexFirstRunCacheManager');
    return TopicFirstRunCacheManager;
}());
/* harmony default export */ __webpack_exports__["default"] = (TopicFirstRunCacheManager);


/***/ }),

/***/ "QRxg":
/*!*************************************************!*\
  !*** ./lib/dataProviders/page/loc/Strings.resx ***!
  \*************************************************/
/*! exports provided: PageDataProviderTitle, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"PageDataProviderTitle\":\"Page\"}");

/***/ }),

/***/ "QaIw":
/*!**********************************************************!*\
  !*** ./lib/dataProviders/news/NewsDigestDataProvider.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _models_NewsDataProviderIds__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./models/NewsDataProviderIds */ "2Rre");

/**
 * Represents the NewsDigest data provider.
 * @internal
 */
var NewsDigestDataProvider = /** @class */ (function () {
    function NewsDigestDataProvider(options) {
        this.id = _models_NewsDataProviderIds__WEBPACK_IMPORTED_MODULE_0__["newsDigest"];
        this.title = 'NewsDigest';
        this.options = options;
    }
    NewsDigestDataProvider.prototype.requestData = function (requestInfo) {
        var response = this.options.newsItems || [];
        return Promise.resolve(response);
    };
    return NewsDigestDataProvider;
}());
/* harmony default export */ __webpack_exports__["default"] = (NewsDigestDataProvider);


/***/ }),

/***/ "R/pT":
/*!***************************************************!*\
  !*** ./lib/dataSources/listItem/loc/Strings.resx ***!
  \***************************************************/
/*! exports provided: ErrorMissingListIdentifier, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"ErrorMissingListIdentifier\":\"Can\\u0027t get data. A list identifier or title must be specified.\"}");

/***/ }),

/***/ "R3v1":
/*!**************************************************************!*\
  !*** ./lib/dataProviders/bookmarks/BookmarksDataProvider.js ***!
  \**************************************************************/
/*! exports provided: BookmarksDataProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookmarksDataProvider", function() { return BookmarksDataProvider; });
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/sp-diagnostics */ "ut3N");
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _httpClients__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../httpClients */ "e+fh");


var addBookmarkQOSName = 'AddBookmark';
var removeBookmarkQOSName = 'RemoveBookmark';
var isBookmarkedQOSName = 'IsBookmarked';
/**
 * @internal
 */
// Keep in sync with apps/sp-pages/src/chunks/sp-pages-social/bookmarks/BookmarksDataProvider.ts
var BookmarksDataProvider = /** @class */ (function () {
    function BookmarksDataProvider(qosComponentName, serviceScope) {
        var _this = this;
        this._qosComponentName = qosComponentName;
        serviceScope.whenFinished(function () {
            _this._spHomeHttpClient = serviceScope.consume(_httpClients__WEBPACK_IMPORTED_MODULE_1__["SPHomeHttpClient"].serviceKey);
        });
    }
    BookmarksDataProvider.prototype.addBookmark = function (url) {
        var qosMonitor = new _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_0__["_QosMonitor"](this._qosComponentName + '.' + addBookmarkQOSName);
        var body = url;
        return this._spHomeHttpClient
            .post('documents/followed/add', JSON.stringify(body))
            .then(function (response) { return response.ok; })
            .then(function (ok) {
            qosMonitor.writeSuccess();
            return ok;
        })
            .catch(function (error) {
            qosMonitor.writeUnexpectedFailure(addBookmarkQOSName);
            return false;
        });
    };
    BookmarksDataProvider.prototype.removeBookmark = function (url) {
        var qosMonitor = new _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_0__["_QosMonitor"](this._qosComponentName + '.' + removeBookmarkQOSName);
        var body = decodeURI(url);
        return this._spHomeHttpClient
            .post('documents/followed/remove', JSON.stringify(body))
            .then(function (response) { return response.ok; })
            .then(function (ok) {
            qosMonitor.writeSuccess();
            return ok;
        })
            .catch(function (error) {
            qosMonitor.writeUnexpectedFailure(removeBookmarkQOSName);
            return false;
        });
    };
    BookmarksDataProvider.prototype.isBookmarked = function (bookmarkCard) {
        var qosMonitor = new _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_0__["_QosMonitor"](this._qosComponentName + '.' + isBookmarkedQOSName);
        if (!this._spHomeHttpClient.isUserSupportedBySubstrate) {
            qosMonitor.writeExpectedFailure('SubstrateUnsupportedUser');
            return Promise.resolve(false);
        }
        return this._isBookmarkedRequest(bookmarkCard)
            .then(function (response) {
            qosMonitor.writeSuccess();
            return response.json();
        })
            .then(function (data) {
            return data.SavedForLater;
        })
            .catch(function (error) {
            qosMonitor.writeUnexpectedFailure(isBookmarkedQOSName);
            return false;
        });
    };
    BookmarksDataProvider.prototype._isBookmarkedRequest = function (bookmarkCard) {
        var apiUrl = "document/metadata?siteId=" + bookmarkCard.siteId + "&webId=" + bookmarkCard.webId +
            ("&listId=" + bookmarkCard.listId + "&uniqueId=" + bookmarkCard.listItemUniqueId + "&url=" + bookmarkCard.url) +
            (bookmarkCard.groupId ? "&groupId=" + bookmarkCard.groupId : '');
        return this._spHomeHttpClient.get(apiUrl);
    };
    return BookmarksDataProvider;
}());



/***/ }),

/***/ "R8uK":
/*!*******************************************************!*\
  !*** ./lib/dataProviders/common/enums/FilterSince.js ***!
  \*******************************************************/
/*! exports provided: FilterSince */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterSince", function() { return FilterSince; });
/**
 * @internal
 */
// tslint:disable-next-line:typedef variable-name
var FilterSince = {
    Today: 1,
    Yesterday: 2,
    ThisWeek: 3,
    ThisMonth: 4,
    LastMonth: 5,
    ThisYear: 6,
    LastYear: 7
};


/***/ }),

/***/ "RSuL":
/*!************************************************!*\
  !*** ./lib/dataSources/base/BaseDataSource.js ***!
  \************************************************/
/*! exports provided: BaseDataSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseDataSource", function() { return BaseDataSource; });
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__);

// @todo: VSO: 335499 Move data sources to odsp-datasources
/**
 * @internal
 */
var BaseDataSource = /** @class */ (function () {
    function BaseDataSource(options) {
        this._pageContext = options.pageContext;
    }
    BaseDataSource.prototype.buildUrl = function (webAbsoluteUrl, apiRelativePath, queryString) {
        var webUrl = _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["UrlUtilities"].removeEndSlash(webAbsoluteUrl);
        var pathSeparator = apiRelativePath.indexOf('/') === 0 ? '' : '/';
        var queryStringSeparator = apiRelativePath.indexOf('?') > -1 ? '&' : '?';
        return "" + webUrl + pathSeparator + apiRelativePath + (queryString ? queryStringSeparator + queryString : '');
    };
    Object.defineProperty(BaseDataSource.prototype, "pageContext", {
        get: function () {
            return this._pageContext;
        },
        enumerable: true,
        configurable: true
    });
    return BaseDataSource;
}());



/***/ }),

/***/ "S/19":
/*!*****************************!*\
  !*** ./lib/search/index.js ***!
  \*****************************/
/*! exports provided: SearchAPIRequest, SearchAPISortDirection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SearchAPIRequest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SearchAPIRequest */ "rOX9");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SearchAPIRequest", function() { return _SearchAPIRequest__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _enums_SearchAPISortDirection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./enums/SearchAPISortDirection */ "zDft");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SearchAPISortDirection", function() { return _enums_SearchAPISortDirection__WEBPACK_IMPORTED_MODULE_1__["SearchAPISortDirection"]; });





/***/ }),

/***/ "SQCk":
/*!*******************************************!*\
  !*** ./lib/dataSources/listView/index.js ***!
  \*******************************************/
/*! exports provided: ListViewDataSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ListViewDataSource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ListViewDataSource */ "y/+K");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ListViewDataSource", function() { return _ListViewDataSource__WEBPACK_IMPORTED_MODULE_0__["default"]; });

// Copyright (c) Microsoft Corporation. All rights reserved.



/***/ }),

/***/ "SkGr":
/*!***********************************************************!*\
  !*** ./lib/dataProviders/event/EventTimeZoneUtilities.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ms_i18n_utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ms/i18n-utilities */ "Ycni");
/* harmony import */ var _ms_i18n_utilities__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ms_i18n_utilities__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ms/sp-component-utilities */ "hiL/");
/* harmony import */ var _ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_1__);
// @copyright (c) Microsoft Corporation. All rights reserved.


var EventTimeZoneUtilities = /** @class */ (function () {
    function EventTimeZoneUtilities() {
    }
    /**
     * Utility function to convert utc response date string to utc date object
     * @param dateString represents the date string
     * @param timeZone represents the timezone information
     * @param isAllDay represents whether the event is all day event. true means all day and false means not all day.
     * @returns the utc timezone date information
     */
    EventTimeZoneUtilities.dateStringToUTCDate = function (dateString, timeZone, isAllDay) {
        if (EventTimeZoneUtilities._allDayKillSwitch.isActivated()) {
            return new Date(dateString);
        }
        var date = new Date(EventTimeZoneUtilities.ensureISOTimestamp(dateString));
        if (!isAllDay) {
            return date;
        }
        // When all-day, the h/min/s/ms data are 0, and should be treaded as local time(user's timezone)
        var localSPDate = new _ms_i18n_utilities__WEBPACK_IMPORTED_MODULE_0__["SPDate"]({
            fullYear: date.getUTCFullYear(),
            month: date.getUTCMonth(),
            date: date.getUTCDate(),
            hours: date.getUTCHours(),
            minutes: date.getUTCMinutes(),
            seconds: date.getUTCSeconds(),
            milliseconds: date.getUTCMilliseconds()
        });
        var utcSPDate = localSPDate.convertToUTC(timeZone);
        var utcDate = new Date(Date.UTC(utcSPDate.fullYear, utcSPDate.month, utcSPDate.date, utcSPDate.hours, utcSPDate.minutes, utcSPDate.seconds, utcSPDate.milliseconds));
        return utcDate;
    };
    /**
     * Utility function to convert utc response date string to local date object
     * @param dateString represents the date string
     * @param timeZone represents the timezone information
     * @param isAllDay represents whether the event is all day event. true means all day and false means not all day.
     * @returns the local timezone date information
     */
    EventTimeZoneUtilities.dateStringToLocalDate = function (dateString, timeZone, isAllDay) {
        var date = new Date(EventTimeZoneUtilities.ensureISOTimestamp(dateString));
        if (!timeZone) {
            return date;
        }
        var utcSPDate = new _ms_i18n_utilities__WEBPACK_IMPORTED_MODULE_0__["SPDate"]({
            fullYear: date.getUTCFullYear(),
            month: date.getUTCMonth(),
            date: date.getUTCDate(),
            hours: date.getUTCHours(),
            minutes: date.getUTCMinutes(),
            seconds: date.getUTCSeconds(),
            milliseconds: date.getUTCMilliseconds()
        });
        // When all-day, the h/min/s/ms data are 0, and should be treaded as local time(user's timezone)
        var localSPDate = isAllDay ? utcSPDate : utcSPDate.convertFromUTC(timeZone);
        return new Date(localSPDate.fullYear, localSPDate.month, localSPDate.date, localSPDate.hours, localSPDate.minutes, localSPDate.seconds);
    };
    /**
     * Utility function to convert local timezone to utc timezone
     * @param date represents the local timezone date string
     * @param timeZone represents the timezone information
     * @returns the utc timezone date information
     */
    EventTimeZoneUtilities.localToUtc = function (date, timeZone) {
        if (!timeZone) {
            return date;
        }
        var spDate = new _ms_i18n_utilities__WEBPACK_IMPORTED_MODULE_0__["SPDate"]({
            fullYear: date.getFullYear(),
            date: date.getDate(),
            month: date.getMonth(),
            hours: date.getHours(),
            minutes: date.getMinutes(),
            seconds: date.getSeconds()
        });
        var utcSPDate = spDate.convertToUTC(timeZone);
        var utcDate = new Date(Date.UTC(utcSPDate.fullYear, utcSPDate.month, utcSPDate.date, utcSPDate.hours, utcSPDate.minutes, utcSPDate.seconds));
        return utcDate;
    };
    /**
     * The function converts dateString which misses Z at the end to ISO timestamp format.
     * The ISO timestamp format is like 'YYYY-MM-DDThh:mm:ssZ'.
     * The date time return from Search REST API in some sites is like '2018-12-05T21:00:00.0000000'
     * which misses Z at the end.
     * @param dateString - dateString of an event
     * @return parsed ISO dateString.
     */
    EventTimeZoneUtilities.ensureISOTimestamp = function (dateString) {
        // Check if dateString is ISO format
        if (/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.?[0-9]*Z$/i.test(dateString)) {
            return dateString;
            // Check if dateString only misses the Z from ISO format
        }
        else if (/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.?[0-9]*$/i.test(dateString)) {
            return dateString.substring(0, 19) + "Z";
        }
        else {
            throw new Error("EventTimeZoneUtilities: date time string " + dateString + " is not supported");
        }
    };
    EventTimeZoneUtilities._allDayKillSwitch = new _ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_1__["KillSwitch"]('5a511229-1361-450b-a2ac-61bdf600d687' /* '7/25/2019', 'SOX_GroupCalendarAllDayFix' */);
    return EventTimeZoneUtilities;
}());
/* harmony default export */ __webpack_exports__["default"] = (EventTimeZoneUtilities);


/***/ }),

/***/ "TYqH":
/*!*****************************************************************!*\
  !*** ./lib/dataProviders/news/utilities/NewsDigestUtilities.js ***!
  \*****************************************************************/
/*! exports provided: NewsDigestUtilities */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsDigestUtilities", function() { return NewsDigestUtilities; });
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ms/sp-telemetry */ "2q6Q");
/* harmony import */ var _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _microsoft_sp_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @microsoft/sp-http */ "vlQI");
/* harmony import */ var _microsoft_sp_http__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_http__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ms/odsp-utilities-bundle */ "y88i");
/* harmony import */ var _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @microsoft/sp-diagnostics */ "ut3N");
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_4__);





/**
 * Provides utilities to work with News Digest First run experience
 * @internal
 */
var NewsDigestUtilities = /** @class */ (function () {
    function NewsDigestUtilities(pageContext, spHttpClient, newsDigestBubbleType) {
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Validate"].isNotNullOrUndefined(pageContext, 'pageContext');
        this._pageContext = pageContext;
        this._spHttpClient = spHttpClient;
        this._newsDigestBubbleType = newsDigestBubbleType;
        this._absoluteUrl = this._pageContext.web.absoluteUrl;
        return this;
    }
    Object.defineProperty(NewsDigestUtilities.prototype, "_newsDigestFirstExperienceBitRestApiUrl", {
        get: function () {
            return (this._absoluteUrl +
                '/_api/SP.Directory.DirectorySession/GetGraphUser(principalName=' +
                "'" +
                _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_3__["UriEncoding"].encodeURIComponent(this._pageContext.user.loginName) +
                "')");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NewsDigestUtilities.prototype, "_newsDigestFirstExperienceBitRestUrl", {
        get: function () {
            return this._newsDigestFirstExperienceBitRestApiUrl + '?$select=' + this._newsDigestBubbleType;
        },
        enumerable: true,
        configurable: true
    });
    NewsDigestUtilities.readCachedFirstRunExperience = function (key) {
        var firstRun = window.localStorage.getItem(key);
        if (!firstRun) {
            return undefined;
        }
        return firstRun === 'true' ? true : false;
    };
    NewsDigestUtilities.prototype.writeCachedFirstRunExperience = function (firstRunExperience) {
        var key = this._newsDigestBubbleType;
        var firstRun = window.localStorage.getItem(key);
        var firstRunString = String(firstRunExperience);
        if (firstRun !== firstRunString) {
            try {
                window.localStorage.setItem(key, firstRunString);
            }
            catch (error) {
                _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_4__["_TraceLogger"].logError(NewsDigestUtilities._logSource, error);
            }
        }
    };
    NewsDigestUtilities.prototype.showFirstRun = function () {
        var firstRunExpeienceCache = NewsDigestUtilities.readCachedFirstRunExperience(this._newsDigestBubbleType);
        if (firstRunExpeienceCache === true) {
            _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_4__["_TraceLogger"].logVerbose(NewsDigestUtilities._logSource, this._newsDigestBubbleType + ' is true in the local storage');
            return Promise.resolve(false);
        }
        else if (firstRunExpeienceCache === false) {
            _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_4__["_TraceLogger"].logVerbose(NewsDigestUtilities._logSource, this._newsDigestBubbleType + ' is false in the local storage');
            return Promise.resolve(true);
        }
        else {
            return this.getFirstRunBitApi();
        }
    };
    NewsDigestUtilities.prototype.setFirstRunSeen = function (newsDigestFirstRunSeenByUser) {
        var _this = this;
        var qosMonitor = new _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_1__["_QosMonitor"]('SetNewsDigestFirstRunExperienceAPI');
        var data = {};
        data[this._newsDigestBubbleType] = Boolean(newsDigestFirstRunSeenByUser);
        var contentType = 'application/json; odata=minimalmetadata';
        var headers = new Headers();
        headers.append('Accept', "*/*, " + contentType);
        headers.append('Content-Type', contentType);
        headers.append('X-HTTP-Method', 'PATCH');
        headers.append('X-ClientType', 'NewsDigest_SetFirstRunBit');
        return this._spHttpClient
            .post(this._newsDigestFirstExperienceBitRestApiUrl, _microsoft_sp_http__WEBPACK_IMPORTED_MODULE_2__["SPHttpClient"].configurations.v1, {
            body: JSON.stringify(data),
            headers: headers
        })
            .then(function (response) {
            _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_4__["_TraceLogger"].logVerbose(NewsDigestUtilities._logSource, "Set news digest first run bit to API: " + newsDigestFirstRunSeenByUser);
            qosMonitor.writeSuccess();
            _this.writeCachedFirstRunExperience(newsDigestFirstRunSeenByUser);
        })
            .catch(function (error) {
            _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_4__["_TraceLogger"].logError(NewsDigestUtilities._logSource, error);
            qosMonitor.writeUnexpectedFailure('SetNewsDigestFirstRunExperienceAPI', error);
            throw error;
        });
    };
    NewsDigestUtilities.prototype.getFirstRunBitApi = function () {
        var _this = this;
        var qosMonitor = new _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_1__["_QosMonitor"]('GetNewsDigestFirstRunExperienceAPI');
        var headers = new Headers();
        headers.append('X-ClientType', 'NewsDigest_GetFirstRunBit');
        return this._spHttpClient
            .get(this._newsDigestFirstExperienceBitRestUrl, _microsoft_sp_http__WEBPACK_IMPORTED_MODULE_2__["SPHttpClient"].configurations.v1, {
            headers: headers
        })
            .then(function (response) {
            return response.json();
        })
            .then(function (data) {
            var newsDigestFirstExperienceBit = data[_this._newsDigestBubbleType];
            _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_4__["_TraceLogger"].logVerbose(NewsDigestUtilities._logSource, "Get news digest first run bit from API, status: " + newsDigestFirstExperienceBit);
            qosMonitor.writeSuccess();
            _this.writeCachedFirstRunExperience(newsDigestFirstExperienceBit);
            return !newsDigestFirstExperienceBit;
        })
            .catch(function (error) {
            _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_4__["_TraceLogger"].logError(NewsDigestUtilities._logSource, error);
            qosMonitor.writeUnexpectedFailure('FailedToGetNewsDigestFirstExperienceError', error);
            return false;
        });
    };
    NewsDigestUtilities._logSource = _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_4__["_LogSource"].create('NewsDigestFirstRunDataProvider');
    return NewsDigestUtilities;
}());



/***/ }),

/***/ "TZiv":
/*!********************************************************!*\
  !*** ./lib/dataProviders/Topics/firstRun/Constants.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * @copyright (c) Microsoft Corporation.  All rights reserved.
 */
var Constants = /** @class */ (function () {
    function Constants() {
    }
    Constants.topicFirstRun = 'CSIKM.FirstRun';
    // Log Prefixes
    Constants.topicFirstRunDPLogPrefix = Constants.topicFirstRun + ".DP";
    Constants.topicFirstRunGetAPIDPPrefix = Constants.topicFirstRun + "GetAPI.DP";
    Constants.topicFirstRunSetAPIDPPrefix = Constants.topicFirstRun + "SetAPI.DP";
    return Constants;
}());
/* harmony default export */ __webpack_exports__["default"] = (Constants);


/***/ }),

/***/ "Tpx+":
/*!***********************************************************************!*\
  !*** ../sp-component-utilities/lib/topics/TopicFlightingUtilities.js ***!
  \***********************************************************************/
/*! exports provided: isCortexEnabled, setCortexDisabledFlag, isIndexedDBEnabledForCortexAPIs, isIndexedDBEnabledForOdspAPIs, isIndexedDBEnabledForSubstrateAPIs, isRunTAB */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isCortexEnabled", function() { return isCortexEnabled; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCortexDisabledFlag", function() { return setCortexDisabledFlag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isIndexedDBEnabledForCortexAPIs", function() { return isIndexedDBEnabledForCortexAPIs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isIndexedDBEnabledForOdspAPIs", function() { return isIndexedDBEnabledForOdspAPIs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isIndexedDBEnabledForSubstrateAPIs", function() { return isIndexedDBEnabledForSubstrateAPIs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isRunTAB", function() { return isRunTAB; });
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/sp-diagnostics */ "ut3N");
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_KillSwitches__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/KillSwitches */ "GYQK");
/**
 * @Copyright (c) Microsoft Corporation.  All rights reserved.
 */



var CORTEX_DISABLE_FLAG = 'cortexDisableFlag';
var LAST_CORTEX_DISABLE_FLAG_LOGGED = 'lastCortexDisableFlagLogged';
var DISABLED_FLAG_LOG_PREFIX = 'CSIKM.CortexEnabledFlag';
var DISABLED_FLAG_ACTION_SET = '.Set';
var DISABLED_FLAG_ACTION_GET = '.Get';
var DISABLED_FLAG_STATUS_TRUE = '.True';
var DISABLED_FLAG_STATUS_FALSE = '.False';
var USE_TIERED_CACHING = 1703; /* WEXTieredCaching */
var USE_INDEXED_DB_FOR_ODSP_APIS = 1082; /* IndexedDBForKm enabled Indexed DB for ODSP APIs */
var USE_INDEXED_DB_FOR_SUBSTRATE_APIS = 60083; /* CortexIndexedDBForSubstrateAPIs enabled Indexed DB for Substrate APIs */
var USE_INDEXED_DB_FOR_ODSP_EXPERIMENT = 90041; /* CortexIndexedDBForOdspExperiment */
var USE_INDEXED_DB_FOR_SUBSTRATE_EXPERIMENT = 90059; /* CortexIndexedDBForSubstrateExperiment */
/**
 * Return true if Cortex should be enabled for this user.
 */
/* tslint:disable-next-line:export-name */
function isCortexEnabled(pageContext) {
    if (!Object(_common_KillSwitches__WEBPACK_IMPORTED_MODULE_2__["isUseCortexTopicExperiencesCapabilityKSActivated"])()) {
        return (isCortexFlightEnabled() &&
            ((!isCortexDisabledFlagActive() && isCortexLicenseEnabled(pageContext)) || isMock()));
    }
    else {
        return (isCortexFlightEnabled() &&
            ((!isCortexDisabledFlagActive() && isKnowledgeCenterUrlConfigured(pageContext)) || isMock()));
    }
}
/**
 * Add time stamp to session storage disabling Cortex for 24 hrs
 */
/* tslint:disable-next-line:no-any */
function setCortexDisabledFlag(response) {
    var _a, _b, _c;
    if (((_a = response) === null || _a === void 0 ? void 0 : _a.status) === 403) {
        // one hour in milliseconds
        var timeInMilliseconds = 3600000;
        var cortexDisabledFlag = new Date(new Date().getTime() + timeInMilliseconds);
        if ((_b = sessionStorage) === null || _b === void 0 ? void 0 : _b.setItem) {
            sessionStorage.setItem(CORTEX_DISABLE_FLAG, cortexDisabledFlag.toISOString());
            var logTagCortexDisableSetTrue = DISABLED_FLAG_LOG_PREFIX + DISABLED_FLAG_ACTION_SET + DISABLED_FLAG_STATUS_TRUE;
            if (!Object(_common_KillSwitches__WEBPACK_IMPORTED_MODULE_2__["isLogCortexDisabledFlagGetFalseOnceKSActivated"])()) {
                engamentLogOncePerAction(logTagCortexDisableSetTrue);
            }
            else {
                _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_0__["_EngagementLogger"].logEvent(logTagCortexDisableSetTrue);
            }
            if (!Object(_common_KillSwitches__WEBPACK_IMPORTED_MODULE_2__["isLogCortexDisabledFlagGetFalseOnceKSActivated"])() && ((_c = sessionStorage) === null || _c === void 0 ? void 0 : _c.removeItem)) {
                sessionStorage.removeItem(LAST_CORTEX_DISABLE_FLAG_LOGGED);
            }
        }
    }
}
/**
 * Determines if IndexedDB caching is enabled for Cortex APIs
 *
 * @returns true if dependant flight WEXTieredCaching is enabled,
 * and flights for IndexedDB with ODSP APIs is enabled OR flights for IndexedDB with Substrate APIs is enabled.
 */
function isIndexedDBEnabledForCortexAPIs() {
    return (_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["_SPFlight"].isEnabled(USE_TIERED_CACHING) &&
        (isIndexedDBFlightEnabledForOdspAPIs() || isIndexedDBFlightEnabledForSubstrateAPIs()));
}
/**
 * Determines if IndexedDB caching is enabled specifically for the Cortex ODSP APIs
 *
 * @returns true if CortexIndexedDBForOdspExperiment is on or IndexedDBForKm flight is enabled.
 */
function isIndexedDBEnabledForOdspAPIs() {
    return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["_SPFlight"].isEnabled(USE_TIERED_CACHING) && isIndexedDBFlightEnabledForOdspAPIs();
}
/**
 * Determines if IndexedDB caching is enabled specifically for the Cortex Substrate APIs
 *
 * @returns true if dependant WEXTieredCaching flight is enabled,
 * and IndexedDB flight is enabled for use with Substrate APIs.
 */
function isIndexedDBEnabledForSubstrateAPIs() {
    return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["_SPFlight"].isEnabled(USE_TIERED_CACHING) && isIndexedDBFlightEnabledForSubstrateAPIs();
}
/**
 * Helper function does flight checks for IndexedDB caching with ODSP APIs
 *
 * @returns true if CortexIndexedDBForOdspExperiment is on or IndexedDBForKm flight is enabled.
 */
function isIndexedDBFlightEnabledForOdspAPIs() {
    return (_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["_SPExperiment"].getVariantAndLogExposure(USE_INDEXED_DB_FOR_ODSP_EXPERIMENT) === 1 ||
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["_SPFlight"].isEnabled(USE_INDEXED_DB_FOR_ODSP_APIS));
}
/**
 * Helper function does flight checks for IndexedDB caching with Substrate APIs
 *
 * @returns true if CortexIndexedDBForSubstrateExperiment is on or CortexIndexedDBForSubstrateAPIs flight is enabled.
 */
function isIndexedDBFlightEnabledForSubstrateAPIs() {
    return (_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["_SPExperiment"].getVariantAndLogExposure(USE_INDEXED_DB_FOR_SUBSTRATE_EXPERIMENT) === 1 ||
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["_SPFlight"].isEnabled(USE_INDEXED_DB_FOR_SUBSTRATE_APIS));
}
/**
 * Check if is running TAB test.
 */
function isRunTAB() {
    return !Object(_common_KillSwitches__WEBPACK_IMPORTED_MODULE_2__["isUseMockForCortexTABTestKSActivated"])() && window.sessionStorage.getItem('isRunTAB') === 'true';
}
/**
 * Returns true if cache flag is active
 */
function isCortexDisabledFlagActive() {
    var _a, _b, _c;
    if (ignoreCortexDisabledFlag()) {
        return false;
    }
    if ((_a = sessionStorage) === null || _a === void 0 ? void 0 : _a.getItem) {
        var expiration = (_b = sessionStorage.getItem(CORTEX_DISABLE_FLAG), (_b !== null && _b !== void 0 ? _b : ''));
        if (expiration) {
            var expirationDate = new Date(expiration);
            if (!isNaN(expirationDate.getTime()) && expirationDate > new Date()) {
                var logTagCortexDisableGetTrue = DISABLED_FLAG_LOG_PREFIX + DISABLED_FLAG_ACTION_GET + DISABLED_FLAG_STATUS_TRUE;
                if (!Object(_common_KillSwitches__WEBPACK_IMPORTED_MODULE_2__["isLogCortexDisabledFlagGetFalseOnceKSActivated"])()) {
                    engamentLogOncePerAction(logTagCortexDisableGetTrue);
                }
                else {
                    _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_0__["_EngagementLogger"].logEvent(logTagCortexDisableGetTrue);
                }
                return true;
            }
            else {
                if ((_c = sessionStorage) === null || _c === void 0 ? void 0 : _c.removeItem) {
                    sessionStorage.removeItem(CORTEX_DISABLE_FLAG);
                    var logTagCortexDisableSetFalse = DISABLED_FLAG_LOG_PREFIX + DISABLED_FLAG_ACTION_SET + DISABLED_FLAG_STATUS_FALSE;
                    if (!Object(_common_KillSwitches__WEBPACK_IMPORTED_MODULE_2__["isLogCortexDisabledFlagGetFalseOnceKSActivated"])()) {
                        engamentLogOncePerAction(logTagCortexDisableSetFalse);
                    }
                    else {
                        _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_0__["_EngagementLogger"].logEvent(logTagCortexDisableSetFalse);
                    }
                }
            }
        }
    }
    var logTagCortexDisableGetFalse = DISABLED_FLAG_LOG_PREFIX + DISABLED_FLAG_ACTION_GET + DISABLED_FLAG_STATUS_FALSE;
    if (!Object(_common_KillSwitches__WEBPACK_IMPORTED_MODULE_2__["isLogCortexDisabledFlagGetFalseOnceKSActivated"])()) {
        engamentLogOncePerAction(logTagCortexDisableGetFalse, Object(_common_KillSwitches__WEBPACK_IMPORTED_MODULE_2__["skipLogEngagementForCortexDisabledKSActivated"])() /* logEngagement */);
    }
    else if (Object(_common_KillSwitches__WEBPACK_IMPORTED_MODULE_2__["skipLogEngagementForCortexDisabledKSActivated"])()) {
        _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_0__["_EngagementLogger"].logEvent(logTagCortexDisableGetFalse);
    }
    return false;
}
function engamentLogOncePerAction(tag, logEngagement) {
    if (logEngagement === void 0) { logEngagement = true; }
    var _a, _b, _c;
    if ((_a = sessionStorage) === null || _a === void 0 ? void 0 : _a.getItem) {
        var lastEngLogged = (_b = sessionStorage.getItem(LAST_CORTEX_DISABLE_FLAG_LOGGED), (_b !== null && _b !== void 0 ? _b : ''));
        if (lastEngLogged !== tag && ((_c = sessionStorage) === null || _c === void 0 ? void 0 : _c.setItem)) {
            if (logEngagement) {
                _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_0__["_EngagementLogger"].logEvent(tag);
            }
            sessionStorage.setItem(LAST_CORTEX_DISABLE_FLAG_LOGGED, tag);
        }
    }
}
/**
 * Return true if the Knowledge Center url is configured
 */
function isKnowledgeCenterUrlConfigured(pageContext) {
    var _a, _b, _c, _d, _e;
    return (((_b = (_a = pageContext) === null || _a === void 0 ? void 0 : _a.knowledgeHubSiteDetails) === null || _b === void 0 ? void 0 : _b.Url) || // tslint:disable-line:no-any
     ((_e = (_d = (_c = pageContext) === null || _c === void 0 ? void 0 : _c.legacyPageContext) === null || _d === void 0 ? void 0 : _d.knowledgeHubSiteDetails) === null || _e === void 0 ? void 0 : _e.Url) // tslint:disable-line:no-any
    );
}
/**
 * Return true if Cortex License is enabled for this tenant.
 */
function isCortexLicenseEnabled(pageContext) {
    var _a, _b, _c;
    return (((_a = pageContext) === null || _a === void 0 ? void 0 : _a.HasCortexTopicExperiencesCapability) || // tslint:disable-line:no-any
     ((_c = (_b = pageContext) === null || _b === void 0 ? void 0 : _b.legacyPageContext) === null || _c === void 0 ? void 0 : _c.HasCortexTopicExperiencesCapability) // tslint:disable-line:no-any
    );
}
/**
 * Return true if the uber Cortex KM experiences flight is enabled
 */
function isCortexFlightEnabled() {
    return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["_SPFlight"].isEnabled(1229); /* CortexKMExperiences = 1229 */
}
/**
 * Return true if we are running in debug with mockApi
 */
function isMock() {
    if (!Object(_common_KillSwitches__WEBPACK_IMPORTED_MODULE_2__["isUseMockTopicDataKSActivated"])() && _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["_SPFlight"].isDebugFlightEnabled) {
        var queryParams = new URL(window.location.href);
        return queryParams.searchParams.get('useMockTopicData') === 'true';
    }
    else {
        return false;
    }
}
/**
 * Return true if we want to ignore cortexDisableFlag
 */
function ignoreCortexDisabledFlag() {
    if (!Object(_common_KillSwitches__WEBPACK_IMPORTED_MODULE_2__["removeCortexDisabledFlagforManagementAPIsKSActivated"])()) {
        var queryParams = new URL(window.location.href);
        return queryParams.searchParams.get('ignoreCortexDisabledFlag') === 'true';
    }
    else {
        return false;
    }
}


/***/ }),

/***/ "UWqr":
/*!*********************************************!*\
  !*** external "@microsoft/sp-core-library" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_UWqr__;

/***/ }),

/***/ "W83Y":
/*!**********************************************************************!*\
  !*** ./lib/dataProviders/Topics/firstRun/TopicFirstRunFailReason.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * @Copyright (c) Microsoft Corporation.  All rights reserved.
 */
var TopicFirstRunFailReason;
(function (TopicFirstRunFailReason) {
    TopicFirstRunFailReason["GetFirstRunHTTPError403"] = "GetFirstErrorHTTP403";
    TopicFirstRunFailReason["GetFirstRunHTTPStatusError"] = "GetFirstHTTPStatusError";
    TopicFirstRunFailReason["GetFirstRunHTTPRequestError"] = "GetFirstHTTPRequestError";
})(TopicFirstRunFailReason || (TopicFirstRunFailReason = {}));
/* harmony default export */ __webpack_exports__["default"] = (TopicFirstRunFailReason);


/***/ }),

/***/ "WzQS":
/*!**********************************************!*\
  !*** ./lib/dataProviders/viewcount/index.js ***!
  \**********************************************/
/*! exports provided: ViewCountDataProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ViewCountDataProvider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ViewCountDataProvider */ "7REe");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ViewCountDataProvider", function() { return _ViewCountDataProvider__WEBPACK_IMPORTED_MODULE_0__["ViewCountDataProvider"]; });




/***/ }),

/***/ "X+PM":
/*!*********************************************!*\
  !*** external "@microsoft/sp-page-context" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_X_PM__;

/***/ }),

/***/ "Xkwe":
/*!**************************************************!*\
  !*** ./lib/dataProviders/DataProviderFlights.js ***!
  \**************************************************/
/*! exports provided: default, isNewApiToCREventFlightEnabled, isEventsWebPartFluentFlightEnabled, isSharePointVideoFilterInKQLQueryEnabled */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNewApiToCREventFlightEnabled", function() { return isNewApiToCREventFlightEnabled; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEventsWebPartFluentFlightEnabled", function() { return isEventsWebPartFluentFlightEnabled; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSharePointVideoFilterInKQLQueryEnabled", function() { return isSharePointVideoFilterInKQLQueryEnabled; });
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ms/sp-telemetry */ "2q6Q");
/* harmony import */ var _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_1__);
// @copyright Microsoft Corporation. All rights reserved.


var USE_TIERED_CACHING = 1703; /* WEXTieredCaching */
var USE_MY_SITE_CACHE = 1705; /* WEXMySiteCacheMangementTieredCaching */
var USE_INDEXED_DB = 1693; /* WEXUseIndexedDBTieredCaching */
var DataProviderFlights = /** @class */ (function () {
    function DataProviderFlights() {
    }
    DataProviderFlights.isTieredCachingEnabled = function () {
        var mySiteCacheEnabled = this._isMySiteCacheEnabled();
        var indexedDBEnabled = this._isIndexedDBEnabled();
        return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPFlight"].isEnabled(USE_TIERED_CACHING) && (mySiteCacheEnabled || indexedDBEnabled);
    };
    DataProviderFlights.isCacheAndNetworkEnabled = function () {
        // Always fallback to cache and network while my site cache is being rolled out
        return this._isMySiteCacheEnabled();
    };
    DataProviderFlights._isIndexedDBEnabled = function () {
        return (_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPFlight"].isEnabled(USE_INDEXED_DB) ||
            _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_1__["_SPPerfExperiment"].getVariantAndTrackExperiment(_ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_1__["_PerformanceExperiment"].WEXUseIndexedDBTieredCachingExp) === 1);
    };
    DataProviderFlights._isMySiteCacheEnabled = function () {
        return (_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPFlight"].isEnabled(USE_MY_SITE_CACHE) ||
            _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_1__["_SPPerfExperiment"].getVariantAndTrackExperiment(_ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_1__["_PerformanceExperiment"].WEXMySiteCacheTieredCachingExp) === 1);
    };
    return DataProviderFlights;
}());
/* harmony default export */ __webpack_exports__["default"] = (DataProviderFlights);
function isNewApiToCREventFlightEnabled() {
    return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPFlight"].isEnabled(60013 /* SOXEventUseNewAPI */);
}
function isEventsWebPartFluentFlightEnabled() {
    return _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_1__["_SPPerfExperiment"].getVariantAndTrackExperiment(_ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_1__["_PerformanceExperiment"].SOXEventUpdate) === 1;
}
function isSharePointVideoFilterInKQLQueryEnabled() {
    return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPFlight"].isEnabled(1538 /* VideoFilterInHightlightedContent*/);
}


/***/ }),

/***/ "Y4on":
/*!******************************************!*\
  !*** ./lib/dataProviders/event/index.js ***!
  \******************************************/
/*! exports provided: EventDataProvider, EventsSearchDataProvider, EventsListDataProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EventDataProvider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EventDataProvider */ "pKc4");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EventDataProvider", function() { return _EventDataProvider__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _EventsSearchDataProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EventsSearchDataProvider */ "x7Ly");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EventsSearchDataProvider", function() { return _EventsSearchDataProvider__WEBPACK_IMPORTED_MODULE_1__["EventsSearchDataProvider"]; });

/* harmony import */ var _EventsListDataProvider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EventsListDataProvider */ "3p+P");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EventsListDataProvider", function() { return _EventsListDataProvider__WEBPACK_IMPORTED_MODULE_2__["EventsListDataProvider"]; });






/***/ }),

/***/ "Ycni":
/*!*************************************!*\
  !*** external "@ms/i18n-utilities" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_Ycni__;

/***/ }),

/***/ "YkpB":
/*!*************************************************!*\
  !*** ./lib/dataProviders/list/loc/Strings.resx ***!
  \*************************************************/
/*! exports provided: ListDataProviderTitle, ErrorInvalidListRequestType, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"ListDataProviderTitle\":\"List\",\"ErrorInvalidListRequestType\":\"Invalid ListRequestType value.\"}");

/***/ }),

/***/ "YoTJ":
/*!****************************************************!*\
  !*** ./lib/dataProviders/common/TokenUtilities.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * @internal
 */
var TokenUtilities = /** @class */ (function () {
    function TokenUtilities() {
    }
    TokenUtilities.isValidMeToken = function (value) {
        var regex = new RegExp('^\\[me\\]$', 'i');
        return regex.test(value);
    };
    TokenUtilities.isValidTodayToken = function (value) {
        var regex = new RegExp('^\\[today\\]([\\+|\\-]\\d+$)?$', 'i');
        return regex.test(value);
    };
    return TokenUtilities;
}());
/* harmony default export */ __webpack_exports__["default"] = (TokenUtilities);


/***/ }),

/***/ "Z0FC":
/*!******************************************************!*\
  !*** ./lib/dataProviders/common/enums/FilterType.js ***!
  \******************************************************/
/*! exports provided: FilterType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterType", function() { return FilterType; });
/**
 * A filter type can imply a filter field, operator and/or value
 *
 * @internal
 */
// tslint:disable-next-line:typedef variable-name
var FilterType = {
    TitleContaining: 1,
    AnyTextContaining: 2,
    TaggedWith: 3,
    CreatedBy: 4,
    ModifiedBy: 5,
    Field: 6,
    RecentlyChanged: 7,
    RecentlyAdded: 8,
    PageAuthorByline: 9 // page author byline = value. Currently only page library has this type.
};


/***/ }),

/***/ "aE90":
/*!*********************************************************!*\
  !*** ./lib/dataProviders/news/models/NewsDataSource.js ***!
  \*********************************************************/
/*! exports provided: NewsDataSource, newsDataSourceProp, _appendAudienceFilteringQueryParam, _appendLanguageOverrideQueryParam, _getExtraDataForLogging */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsDataSource", function() { return NewsDataSource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "newsDataSourceProp", function() { return newsDataSourceProp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_appendAudienceFilteringQueryParam", function() { return _appendAudienceFilteringQueryParam; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_appendLanguageOverrideQueryParam", function() { return _appendLanguageOverrideQueryParam; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_getExtraDataForLogging", function() { return _getExtraDataForLogging; });
/* harmony import */ var _utilities_NewsUtilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utilities/NewsUtilities */ "JpAn");

/**
 * @internal
 */
// tslint:disable-next-line:typedef variable-name
var NewsDataSource = {
    CurrentSite: 1,
    Hub: 2,
    ChooseSites: 3,
    MyNews: 4
};
/**
 * @internal
 */
var newsDataSourceProp = 'newsDataSourceProp';
var audienceFilterQueryParam = 'filterByAudience';
/**
 * @internal
 * @returns Query string portion for audience targeting if requested or empty
 * @param requestInfo - request metadata which contains audienceTargetingEnabled flag
 */
function _appendAudienceFilteringQueryParam(requestInfo) {
    if (requestInfo.audienceTargetingEnabled) {
        return "&" + audienceFilterQueryParam + "=true";
    }
    return '';
}
/**
 * @internal
 * @returns Query string portion for multilingual page language override
 * @param requestInfo - request metadata which contains audienceTargetingEnabled flag
 */
function _appendLanguageOverrideQueryParam(requestInfo) {
    var languageOverride = requestInfo.languageOverride;
    if (languageOverride) {
        return "&languageOverride=" + languageOverride;
    }
    return '';
}
/**
 * @internal
 * @returns Extra data for QoS monitor logging for audience targeting status
 * @param requestInfo - request metadata which contains audienceTargetingEnabled flag,
 *  KQL and CAML filter queries if any available
 */
function _getExtraDataForLogging(requestInfo, pageContext) {
    var filterAddedInfo = 'noFilter';
    if (!!requestInfo.serializedFilterQuery) {
        filterAddedInfo = 'filterCAMLQueryAdded';
    }
    else if (!!requestInfo.filterKQLQuery) {
        filterAddedInfo = 'filterKQLQueryAdded';
    }
    var extraData = {
        audienceTargetingEnabled: (!!requestInfo.audienceTargetingEnabled).toString(),
        isOnSeeAllPage: _utilities_NewsUtilities__WEBPACK_IMPORTED_MODULE_0__["NewsUtilities"].isOnSeeAllPage.toString(),
        // map isLanguageOverride value to Qos_extraData_isAdvancedMode as an existing field must be used for Jarvis chart
        isAdvanceMode: (!!requestInfo.languageOverride).toString(),
        alias: filterAddedInfo
    };
    if (pageContext && pageContext.legacyPageContext && pageContext.legacyPageContext.isHubSite) {
        extraData.service = 'HubSite';
    }
    return extraData;
}


/***/ }),

/***/ "bLNn":
/*!****************************************************************************!*\
  !*** ./lib/dataProviders/news/utilities/TryGetAuthoritativeSiteDetails.js ***!
  \****************************************************************************/
/*! exports provided: tryGetAuthoritativeSiteDetails */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tryGetAuthoritativeSiteDetails", function() { return tryGetAuthoritativeSiteDetails; });
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__);
/**
 * @copyright Microsoft Corporation. All rights reserved.
 */

var ORG_NEWS_MULTI_SITE_DETAILS_KEY = 'organizationNewsSiteReference';
/**
 * @internal
 */
function tryGetAuthoritativeSiteDetails(siteId, webId, pageContext) {
    if (!siteId ||
        !webId ||
        !pageContext.legacyPageContext ||
        !pageContext.legacyPageContext[ORG_NEWS_MULTI_SITE_DETAILS_KEY]) {
        return undefined;
    }
    var siteGuid = _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Guid"].tryParse(siteId);
    var webGuid = _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Guid"].tryParse(webId);
    if (!siteGuid || !webGuid) {
        return undefined;
    }
    var orgSites;
    if (pageContext.legacyPageContext[ORG_NEWS_MULTI_SITE_DETAILS_KEY]) {
        orgSites = pageContext.legacyPageContext[ORG_NEWS_MULTI_SITE_DETAILS_KEY];
    }
    for (var _i = 0, orgSites_1 = orgSites; _i < orgSites_1.length; _i++) {
        var site = orgSites_1[_i];
        if (isSiteAuthoritative(siteGuid, webGuid, site)) {
            return site;
        }
    }
    return undefined;
}
function isSiteAuthoritative(siteGuid, webGuid, siteDetails) {
    var authoritativeNewsSiteGuid = _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Guid"].tryParse(siteDetails.SiteId);
    var authoritativeNewsWebGuid = _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Guid"].tryParse(siteDetails.WebId);
    return (authoritativeNewsSiteGuid &&
        authoritativeNewsWebGuid &&
        siteGuid.equals(authoritativeNewsSiteGuid) &&
        webGuid.equals(authoritativeNewsWebGuid));
}


/***/ }),

/***/ "dONd":
/*!*******************************************************************************!*\
  !*** ./lib/dataProviders/search/managedProperty/DeferredManagedProperties.js ***!
  \*******************************************************************************/
/*! exports provided: DeferredManagedProperties */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeferredManagedProperties", function() { return DeferredManagedProperties; });
/**
 * @public
 */
var DeferredManagedProperties = /** @class */ (function () {
    function DeferredManagedProperties() {
    }
    DeferredManagedProperties.ensureQueryableManagedProperties = function () {
        if (!DeferredManagedProperties._loadedQueryableManagedPropertiesPromise) {
            DeferredManagedProperties._loadedQueryableManagedPropertiesPromise = __webpack_require__.e(/*! import() | sp-queryablemanagedproperties */ "sp-queryablemanagedproperties").then(__webpack_require__.bind(null, /*! ./QueryableManagedProperties */ "n9CK")).then(function (module) {
                return module.default;
            });
        }
        return DeferredManagedProperties._loadedQueryableManagedPropertiesPromise;
    };
    DeferredManagedProperties.ensureRetrievableManagedProperties = function () {
        if (!DeferredManagedProperties._loadedRetrievableManagedPromise) {
            DeferredManagedProperties._loadedRetrievableManagedPromise = __webpack_require__.e(/*! import() | sp-retrievablemanagedproperties */ "sp-retrievablemanagedproperties").then(__webpack_require__.bind(null, /*! ./RetrievableManagedProperties */ "oz+a")).then(function (module) {
                return module.default;
            });
        }
        return DeferredManagedProperties._loadedRetrievableManagedPromise;
    };
    return DeferredManagedProperties;
}());



/***/ }),

/***/ "dU3L":
/*!********************************************************!*\
  !*** ./lib/dataProviders/search/SearchDataProvider.js ***!
  \********************************************************/
/*! exports provided: SearchDataProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchDataProvider", function() { return SearchDataProvider; });
/* harmony import */ var _microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/sp-lodash-subset */ "Pk8u");
/* harmony import */ var _microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ms/odsp-utilities-bundle */ "y88i");
/* harmony import */ var _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _microsoft_sp_page_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @microsoft/sp-page-context */ "X+PM");
/* harmony import */ var _microsoft_sp_page_context__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_page_context__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _microsoft_sp_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @microsoft/sp-http */ "vlQI");
/* harmony import */ var _microsoft_sp_http__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_http__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _search_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../search/index */ "S/19");
/* harmony import */ var _KQLQueryBuilder__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./KQLQueryBuilder */ "0oRV");
/* harmony import */ var _loc_Strings_resx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./loc/Strings.resx */ "9G/9");
var _loc_Strings_resx__WEBPACK_IMPORTED_MODULE_6___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./loc/Strings.resx */ "9G/9", 1);







/**
 * Provides a simple data provider for the SharePoint Search REST API.
 * @internal
 */
var SearchDataProvider = /** @class */ (function () {
    function SearchDataProvider(options) {
        var _this = this;
        this.id = 'Search';
        this.title = _loc_Strings_resx__WEBPACK_IMPORTED_MODULE_6__["SearchDataProviderTitle"];
        this.options = options;
        this.options.serviceScope.whenFinished(function () {
            _this._spHttpClient = _this.options.serviceScope.consume(_microsoft_sp_http__WEBPACK_IMPORTED_MODULE_3__["SPHttpClient"].serviceKey);
            _this._pageContext = _this.options.serviceScope.consume(_microsoft_sp_page_context__WEBPACK_IMPORTED_MODULE_2__["PageContext"].serviceKey);
            _this._initVariables();
        });
        this._searchAPIRequest = new _search_index__WEBPACK_IMPORTED_MODULE_4__["SearchAPIRequest"](options.serviceScope, false /* isMockMode */, options.qosPrefix || '');
        // Set fall back locale language when it is not defined.
        if (!_ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_1__["Locale"].language) {
            _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_1__["Locale"].language = 'en-us';
        }
        // The constructor is returned via the DataProviderLoader.  The receiver can call it with ServiceScope
        // and receive the instance returned here.
        return this;
    }
    SearchDataProvider.prototype.requestData = function (options) {
        var searchAPIQueryOptions = null; /* tslint:disable-line:no-null-keyword */
        // Determine if request is for getting managed properties.
        if (Object(_microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_0__["has"])(options.searchOptions, 'query.managedPropertiesRefinerOptions')) {
            searchAPIQueryOptions = _KQLQueryBuilder__WEBPACK_IMPORTED_MODULE_5__["KQLQueryBuilder"].generateSearchAPIQueryOptionsForManagedProperties(options.searchOptions);
            return this._searchAPIRequest
                .getManagedPropertiesQueryResponse(searchAPIQueryOptions)
                .catch(function (error) { return Promise.reject(error); });
        }
        if (options.returnCachedValues) {
            return this._returnCachedResults();
        }
        if (!!options.searchAPIQueryOptions) {
            searchAPIQueryOptions = options.searchAPIQueryOptions;
        }
        else if (!!options.searchOptions) {
            var def = _KQLQueryBuilder__WEBPACK_IMPORTED_MODULE_5__["KQLQueryBuilder"].generateQuery(options.searchOptions, this._pageContext);
            searchAPIQueryOptions = _KQLQueryBuilder__WEBPACK_IMPORTED_MODULE_5__["KQLQueryBuilder"].generateSearchAPIQueryOptions(def.queryTemplate, def.timeZoneId, options.searchOptions);
        }
        if (!searchAPIQueryOptions) {
            return Promise.resolve([]);
        }
        return this._searchAPIRequest
            .getSearchQueryResponse(searchAPIQueryOptions)
            .then(this._mapResponse)
            .catch(function (error) { return Promise.reject(error); });
    };
    /*
     * Override to initialize variables based on IDataProviderOptions of your data provider.
     */
    SearchDataProvider.prototype._initVariables = function () {
        // Default behavior is a noop.
    };
    /*
     * Override to convert the search response properties to the appropriate data type array for your data provider.
     */
    SearchDataProvider.prototype._mapResponse = function (searchResult) {
        // Default behavior is no transformation.
        return Promise.resolve(searchResult);
    };
    /**
     * Override to return cached results if no need to query for search API
     */
    SearchDataProvider.prototype._returnCachedResults = function () {
        return Promise.resolve([]);
    };
    return SearchDataProvider;
}());



/***/ }),

/***/ "e+fh":
/*!**********************************!*\
  !*** ./lib/httpClients/index.js ***!
  \**********************************/
/*! exports provided: SPHomeHttpClient, SPHomeMicroserviceNotAvailableError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sphome_SPHomeHttpClient__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sphome/SPHomeHttpClient */ "0itf");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SPHomeHttpClient", function() { return _sphome_SPHomeHttpClient__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _sphome_SPHomeMicroserviceNotAvailableError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sphome/SPHomeMicroserviceNotAvailableError */ "+UUZ");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SPHomeMicroserviceNotAvailableError", function() { return _sphome_SPHomeMicroserviceNotAvailableError__WEBPACK_IMPORTED_MODULE_1__["default"]; });





/***/ }),

/***/ "evK2":
/*!********************************************************!*\
  !*** ./lib/dataProviders/DataProvidersKillSwitches.js ***!
  \********************************************************/
/*! exports provided: isTopicSuggestionsTieredCachingKSActivated, stopUsingSPHttpMSClient, removeLeadingANDInMultilingualKQLKSActive */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isTopicSuggestionsTieredCachingKSActivated", function() { return isTopicSuggestionsTieredCachingKSActivated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stopUsingSPHttpMSClient", function() { return stopUsingSPHttpMSClient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeLeadingANDInMultilingualKQLKSActive", function() { return removeLeadingANDInMultilingualKQLKSActive; });
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__);
// @copyright Microsoft Corporation. All rights reserved.

function isTopicSuggestionsTieredCachingKSActivated() {
    return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPKillSwitch"].isActivated('040e5812-ee72-430b-93d9-42b62ff8ce13'
    /* '10/15/2020', 'Use tiered caching feature for topic suggestions API requests' */
    );
}
function stopUsingSPHttpMSClient() {
    return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPKillSwitch"].isActivated('14b96c7e-3dcc-42e8-8a42-f56091d1f9f3' /* '10/14/2020', 'stop using SPHttpMicroserviceClient when KS is active' */);
}
function removeLeadingANDInMultilingualKQLKSActive() {
    // remove KS in KQLQueryBuilder.test.ts
    return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPKillSwitch"].isActivated('83c7fd57-b124-44b5-98c9-19fbfa5e8826' /* '12/28/2020', 'correct AND operator inside multilingual query parentheses' */);
}


/***/ }),

/***/ "fMQH":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/file-loader@1.1.11_webpack@4.44.2/node_modules/file-loader/dist/cjs.js?name=icon_[name]_[hash:8].[ext]!./lib/dataProviders/news/assets/helpitemimg1.png ***!
  \***************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "icon_helpitemimg1_c0dba21d.png";

/***/ }),

/***/ "fP0x":
/*!**********************************************!*\
  !*** ./lib/dataProviders/event/Strings.resx ***!
  \**********************************************/
/*! exports provided: UnknownErrorMessage, DataNotExistErrorMessage, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"UnknownErrorMessage\":\"Unknown error happens.\",\"DataNotExistErrorMessage\":\"This Events list no longer exists. Try a different Events list.\"}");

/***/ }),

/***/ "g25W":
/*!****************************************************!*\
  !*** ./lib/dataProviders/page/PageDataProvider.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _BaseDataProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../BaseDataProvider */ "L/SE");
/* harmony import */ var _PageDataSource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PageDataSource */ "7dHj");
/* harmony import */ var _loc_Strings_resx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loc/Strings.resx */ "QRxg");
var _loc_Strings_resx__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./loc/Strings.resx */ "QRxg", 1);




/**
 * @internal
 */
var PageDataProvider = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(PageDataProvider, _super);
    function PageDataProvider() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.id = 'Page';
        _this.title = _loc_Strings_resx__WEBPACK_IMPORTED_MODULE_3__["PageDataProviderTitle"];
        return _this;
    }
    PageDataProvider.prototype.getItems = function (request) {
        if (!this._pageDataSource) {
            this._pageDataSource = new _PageDataSource__WEBPACK_IMPORTED_MODULE_2__["default"]({ spHttpClient: this.spHttpClient });
        }
        return this._pageDataSource
            .getPageCanvasContent(request.pageRelativeUrl)
            .then(function (canvasJson) { return [canvasJson]; });
    };
    return PageDataProvider;
}(_BaseDataProvider__WEBPACK_IMPORTED_MODULE_1__["BaseDataProvider"]));
/* harmony default export */ __webpack_exports__["default"] = (PageDataProvider);


/***/ }),

/***/ "g9eu":
/*!*********************************************************!*\
  !*** ./lib/dataSources/base/ODataQueryStringBuilder.js ***!
  \*********************************************************/
/*! exports provided: ODataQueryStringBuilder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ODataQueryStringBuilder", function() { return ODataQueryStringBuilder; });
/* harmony import */ var _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ms/odsp-utilities-bundle */ "y88i");
/* harmony import */ var _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_0__);

/**
 * @internal
 */
var ODataQueryStringBuilder = /** @class */ (function () {
    function ODataQueryStringBuilder() {
    }
    /**
     * Helper method to build a query string with OData options including $select, $filter, $top, $skip, $orderby
     * and $expand.
     * @param request - query options in IODataRequest format
     */
    ODataQueryStringBuilder.generateQueryString = function (request) {
        var queryString = request.queryString || '';
        var fields = request.fields
            ? request.fields
                .map(function (field) {
                return _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_0__["UriEncoding"].encodeURIComponent(field);
            })
                .join(',')
            : undefined;
        queryString +=
            this._generateOption(queryString, 'select', fields, false) +
                this._generateOption(queryString, 'filter', request.filter, true) +
                this._generateOption(queryString, 'top', request.top, true) +
                this._generateOption(queryString, 'skip', request.skip, true) +
                this._generateOption(queryString, 'orderby', request.orderBy, true) +
                this._generateOption(queryString, 'expand', request.expand, true);
        // remove the initial '&'
        if (queryString.indexOf('&') === 0) {
            queryString = queryString.slice(1);
        }
        return queryString;
    };
    ODataQueryStringBuilder._generateOption = function (queryString, option, value, sanitize) {
        if (value && queryString.indexOf("$" + option) === -1) {
            var stringValue = sanitize
                ? _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_0__["UriEncoding"].encodeRestUriStringToken(value.toString())
                : value.toString();
            return "&$" + option + "=" + stringValue;
        }
        else {
            return '';
        }
    };
    return ODataQueryStringBuilder;
}());



/***/ }),

/***/ "gnrN":
/*!****************************************************!*\
  !*** ./lib/dataProviders/list/CAMLQueryBuilder.js ***!
  \****************************************************/
/*! exports provided: CAMLQueryBuilder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CAMLQueryBuilder", function() { return CAMLQueryBuilder; });
/* harmony import */ var _dataSources__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../dataSources */ "6ZIT");
/* harmony import */ var _common_enums_FilterSince__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/enums/FilterSince */ "R8uK");
/* harmony import */ var _search_enums_ContentType__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../search/enums/ContentType */ "G3Sr");
/* harmony import */ var _common_enums_DocumentType__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/enums/DocumentType */ "kyLF");
/* harmony import */ var _common_enums_UserType__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/enums/UserType */ "JUc+");
/* harmony import */ var _common_enums_FilterOperator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/enums/FilterOperator */ "PdqL");
/* harmony import */ var _common_enums_FilterType__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/enums/FilterType */ "Z0FC");
/* harmony import */ var _common_TokenUtilities__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/TokenUtilities */ "YoTJ");
/**
 * @file CAMLQueryBuilder.ts
 * @copyright (c) Microsoft Corporation. All rights reserved.
 */








var TITLE_CONTAINING_FIELD_NAME = 'Title';
var CREATED_BY_FIELD_NAME = 'Author';
var PAGE_AUTHOR_FIELD_NAME = '_AuthorByline';
var MODIFIED_BY_FIELD_NAME = 'Editor';
var RECENTLY_ADDED_FIELD_NAME = 'Created';
var RECENTLY_CHANGED_FIELD_NAME = 'Modified';
var MODIFIED_FIELD_NAME = 'Modified';
/**
 * @internal
 */
var CAMLQueryBuilder = /** @class */ (function () {
    function CAMLQueryBuilder() {
    }
    /**
     * Helper method to build CAML query XML.
     * @param options - query options in IListOptions format
     */
    CAMLQueryBuilder.generateCAMLQuery = function (options, encodeForGETRequest) {
        var _this = this;
        // set defaults
        options = options || {};
        options.documentTypes = options.documentTypes || [_common_enums_DocumentType__WEBPACK_IMPORTED_MODULE_3__["DocumentType"].Any];
        options.fields = options.fields || [
            'Editor',
            'FileLeafRef',
            'File_x0020_Type',
            'ID',
            'Modified',
            'Title',
            'UniqueID'
        ];
        options.filters = options.filters || [];
        options.fieldDictionary = options.fieldDictionary || {};
        var criteria = [];
        var criteriaClose = [];
        var foundAny = false;
        options.documentTypes.map(function (documentType) {
            switch (documentType) {
                case _common_enums_DocumentType__WEBPACK_IMPORTED_MODULE_3__["DocumentType"].Any:
                    foundAny = true;
                    break;
                case _common_enums_DocumentType__WEBPACK_IMPORTED_MODULE_3__["DocumentType"].Word:
                    // @todo: VSO #340007 - share these string lists with KQLQueryBuilder instead of having them in two places
                    criteria.push(_this._documentTypeCriteria(['doc', 'docm', 'docx']));
                    break;
                case _common_enums_DocumentType__WEBPACK_IMPORTED_MODULE_3__["DocumentType"].Excel:
                    criteria.push(_this._documentTypeCriteria(['xls', 'xlsb', 'xlsm', 'xlsx']));
                    break;
                case _common_enums_DocumentType__WEBPACK_IMPORTED_MODULE_3__["DocumentType"].PowerPoint:
                    criteria.push(_this._documentTypeCriteria(['pot', 'potx', 'ppt', 'pptm', 'pptx']));
                    break;
                case _common_enums_DocumentType__WEBPACK_IMPORTED_MODULE_3__["DocumentType"].OneNote:
                    criteria.push(_this._documentTypeCriteria(['one', 'onepkg', 'ms-one-stub']));
                    break;
                case _common_enums_DocumentType__WEBPACK_IMPORTED_MODULE_3__["DocumentType"].Visio:
                    criteria.push(_this._documentTypeCriteria(['vsd', 'vsdm', 'vsdx', 'vdw']));
                    break;
                case _common_enums_DocumentType__WEBPACK_IMPORTED_MODULE_3__["DocumentType"].PDF:
                    criteria.push(_this._documentTypeCriteria(['pdf']));
                    break;
            }
        });
        if (foundAny) {
            // Ignore other document type criteria if DocumentType.Any is also selected.
            criteria = [];
        }
        if (criteria.length) {
            criteria = ['<And><In><FieldRef Name="File_x0020_Type" /><Values>'].concat(criteria, '</Values></In>');
            criteriaClose.push('</And>');
        }
        if (foundAny) {
            criteria = [
                "<And><And><Eq><FieldRef Name=\"FSObjType\" /><Value Type=\"Integer\">0</Value></Eq>" + CAMLQueryBuilder._generateNotIn('File_x0020_Type', ['onetoc', 'onetoc2']) + "</And>"
            ];
            criteriaClose.push('</And>');
        }
        if (options.contentTypes && options.contentTypes.indexOf(_search_enums_ContentType__WEBPACK_IMPORTED_MODULE_2__["ContentType"].News) > -1) {
            // PromotedState of news page item is 2.
            criteria.push("<And><Eq><FieldRef Name=\"PromotedState\" /><Value Type=\"Integer\">2</Value></Eq>");
            criteriaClose.push('</And>');
        }
        if (options.languageCode) {
            this._filterByLanguage(options, criteria, criteriaClose);
        }
        var sortField = options.sortField || MODIFIED_FIELD_NAME;
        var sortOrderAscending = 'true';
        if (sortField === MODIFIED_FIELD_NAME) {
            sortOrderAscending = 'false';
        }
        var rowLimit = '';
        if (options.maxItemsPerPage) {
            // @todo: consider using paging retrieval of data
            rowLimit = "<RowLimit Paged=\"false\">" + options.maxItemsPerPage + "</RowLimit>";
        }
        var viewFields = options.fields.map(function (field) { return "<FieldRef Name=\"" + field + "\" />"; }).join('');
        return ('<View Scope="RecursiveAll">' +
            '<Query>' +
            CAMLQueryBuilder.generateCAMLFilter(options, criteria, criteriaClose, encodeForGETRequest) +
            '<OrderBy>' +
            (
            // @todo: consider supporting multiple field sorts either automatically or by user selection
            "<FieldRef Name=\"" + sortField + "\" Ascending=\"" + sortOrderAscending + "\" />") +
            '</OrderBy>' +
            '</Query>' +
            '<ViewFields>' +
            viewFields +
            '</ViewFields>' +
            rowLimit +
            '</View>');
    };
    /**
     * Helper method to build CAML query XML.
     * @param options - query options in IListOptions format
     * @param criteria - optional criteria to be added to the filter CAML
     * @param criteriaClose - optional closing markup only required if criteria was provided
     */
    CAMLQueryBuilder.generateCAMLFilter = function (options, criteria, criteriaClose, encodeForGETRequest) {
        var _this = this;
        criteria = criteria || [];
        criteriaClose = criteriaClose || [];
        // If filterGroup is specified, will build CAML filter from filter group instead of filters
        if (options.filterGroup) {
            var filterCriteria = this._generateCriteriaFromFilterGroup(options.filterGroup, options.fieldDictionary, encodeForGETRequest);
            return ('<Where>' +
                criteria.join('') +
                (filterCriteria ? '<And>' : '') +
                filterCriteria +
                '<Eq>' +
                // exclude folders from results
                '<FieldRef Name="FSObjType" />' +
                '<Value Type="Integer">0</Value>' +
                '</Eq>' +
                (filterCriteria ? '</And>' : '') +
                criteriaClose.join('') +
                '</Where>');
        }
        var sameTypeAndNameFiltersMap = new Map();
        options.filters.map(function (filter) {
            if (filter) {
                var filterFieldName = _this._generateFieldName(filter);
                var filterCriteria = _this._generateCriteria(filter, options.fieldDictionary, encodeForGETRequest);
                if (filterFieldName && filterCriteria) {
                    if (!sameTypeAndNameFiltersMap.get(filter.filterType)) {
                        sameTypeAndNameFiltersMap.set(filter.filterType, new Map());
                    }
                    if (!sameTypeAndNameFiltersMap.get(filter.filterType).get(filterFieldName)) {
                        sameTypeAndNameFiltersMap.get(filter.filterType).set(filterFieldName, []);
                    }
                    sameTypeAndNameFiltersMap.get(filter.filterType).get(filterFieldName).push(filterCriteria);
                }
            }
        });
        sameTypeAndNameFiltersMap.forEach(function (sameNameFiltersMap) {
            sameNameFiltersMap.forEach(function (filters) {
                // 1. Generate the <Or> tags within the filters of the same type and field name.
                // 2. Generate <And> tags for filters generated from step 1.
                criteria.push("<And>" + _this._combineCriteria(filters, 'Or'));
                criteriaClose.push('</And>');
            });
        });
        return ('<Where>' +
            criteria.join('') +
            '<Eq>' +
            // exclude folders from results
            '<FieldRef Name="FSObjType" />' +
            '<Value Type="Integer">0</Value>' +
            '</Eq>' +
            criteriaClose.join('') +
            '</Where>');
    };
    CAMLQueryBuilder._generateNotIn = function (fieldRef, values) {
        var neqValues = values.map(function (value) { return "<Neq><FieldRef Name=\"" + fieldRef + "\" /><Value Type=\"Text\">" + value + "</Value></Neq>"; });
        return neqValues.reduceRight(function (prev, current) {
            return prev === '' ? current : "<And>" + current + prev + "</And>";
        }, '');
    };
    CAMLQueryBuilder._generateCriteriaFromFilterGroup = function (filterGroup, fieldDictionary, encodeForGETRequest) {
        var _this = this;
        var resultCriteria = '';
        // Build criteria from filters
        if (filterGroup.filters) {
            resultCriteria = filterGroup.filters.reduce(function (previousCriteria, currentFilter) {
                var currentCriteria = _this._generateCriteria(currentFilter, fieldDictionary, encodeForGETRequest);
                return CAMLQueryBuilder._appendCriteria(filterGroup.logicalOperator, previousCriteria, currentCriteria);
            }, resultCriteria);
        }
        // Build criteria from groups
        if (filterGroup.filterGroups) {
            resultCriteria = filterGroup.filterGroups.reduce(function (previousCriteria, currentFilterGroup) {
                var currentCriteria = _this._generateCriteriaFromFilterGroup(currentFilterGroup, fieldDictionary);
                return CAMLQueryBuilder._appendCriteria(filterGroup.logicalOperator, previousCriteria, currentCriteria);
            }, resultCriteria);
        }
        return resultCriteria;
    };
    CAMLQueryBuilder._appendCriteria = function (logicalOperator, previousCriteria, currentCriteria) {
        var normalizedOperator = logicalOperator === 'AND' ? 'And' : 'Or';
        if (previousCriteria && currentCriteria) {
            return "<" + normalizedOperator + ">" + previousCriteria + currentCriteria + "</" + normalizedOperator + ">";
        }
        else {
            return previousCriteria + currentCriteria;
        }
    };
    CAMLQueryBuilder._generateFieldName = function (filter) {
        switch (filter.filterType) {
            case _common_enums_FilterType__WEBPACK_IMPORTED_MODULE_6__["FilterType"].TitleContaining:
                return TITLE_CONTAINING_FIELD_NAME;
            case _common_enums_FilterType__WEBPACK_IMPORTED_MODULE_6__["FilterType"].CreatedBy:
                return CREATED_BY_FIELD_NAME;
            case _common_enums_FilterType__WEBPACK_IMPORTED_MODULE_6__["FilterType"].PageAuthorByline:
                return PAGE_AUTHOR_FIELD_NAME;
            case _common_enums_FilterType__WEBPACK_IMPORTED_MODULE_6__["FilterType"].ModifiedBy:
                return MODIFIED_BY_FIELD_NAME;
            case _common_enums_FilterType__WEBPACK_IMPORTED_MODULE_6__["FilterType"].RecentlyAdded:
                return RECENTLY_ADDED_FIELD_NAME;
            case _common_enums_FilterType__WEBPACK_IMPORTED_MODULE_6__["FilterType"].RecentlyChanged:
                return RECENTLY_CHANGED_FIELD_NAME;
            case _common_enums_FilterType__WEBPACK_IMPORTED_MODULE_6__["FilterType"].Field:
                return filter.fieldname;
        }
        return '';
    };
    CAMLQueryBuilder._generateCriteria = function (filter, fieldDictionary, encodeForGETRequest) {
        var encodedValue = filter.value
            ? this._encodeUserEntryForXML(filter.value.toString(), encodeForGETRequest)
            : '';
        switch (filter.filterType) {
            case _common_enums_FilterType__WEBPACK_IMPORTED_MODULE_6__["FilterType"].TitleContaining:
                return encodedValue
                    ? "<Contains><FieldRef Name=\"Title\"/><Value Type=\"Text\">" + encodedValue + "</Value></Contains>"
                    : '';
            case _common_enums_FilterType__WEBPACK_IMPORTED_MODULE_6__["FilterType"].CreatedBy:
                return this._userTypeCriteria(filter.userType, encodedValue, CREATED_BY_FIELD_NAME, filter.op);
            case _common_enums_FilterType__WEBPACK_IMPORTED_MODULE_6__["FilterType"].PageAuthorByline:
                return this._userTypeCriteria(filter.userType, encodedValue, PAGE_AUTHOR_FIELD_NAME, filter.op);
            case _common_enums_FilterType__WEBPACK_IMPORTED_MODULE_6__["FilterType"].ModifiedBy:
                return this._userTypeCriteria(filter.userType, encodedValue, MODIFIED_BY_FIELD_NAME, filter.op);
            case _common_enums_FilterType__WEBPACK_IMPORTED_MODULE_6__["FilterType"].RecentlyAdded:
                return this._dateTimeTypeCriteria(filter.value, RECENTLY_ADDED_FIELD_NAME);
            case _common_enums_FilterType__WEBPACK_IMPORTED_MODULE_6__["FilterType"].RecentlyChanged:
                return this._dateTimeTypeCriteria(filter.value, RECENTLY_CHANGED_FIELD_NAME);
            case _common_enums_FilterType__WEBPACK_IMPORTED_MODULE_6__["FilterType"].Field:
                return this._fieldTypeCriteria(filter, fieldDictionary, encodeForGETRequest);
        }
        return '';
    };
    CAMLQueryBuilder._encodeUserEntryForXML = function (entry, encodeForGETRequest) {
        var div = document.createElement('div');
        div.appendChild(document.createTextNode(entry));
        if (encodeForGETRequest) {
            // .replace(new RegExp('\'', 'g'), '%27%27') is required because encodeURIComponent does not encode
            // the ' (single quote) character. For reference, see:
            // https://alanristic.wordpress.com/2013/02/16/javascript-escape-vs-encodeuri-vs-encodeuricomponent/
            // Additionaly, we need to escape the ' (single quote character) for proper CAML to SQL query execution
            // That is achieved by appending another ' before the original one. Therefore encoding ' as %27%27
            // https://stackoverflow.com/questions/1586560/how-do-i-escape-a-single-quote-in-sql-server
            return encodeURIComponent(div.innerHTML).replace(new RegExp("'", 'g'), '%27%27');
        }
        return div.innerHTML;
    };
    CAMLQueryBuilder._documentTypeCriteria = function (extensions) {
        return extensions
            .map(function (extension) {
            return "<Value Type=\"Text\">" + extension + "</Value>";
        })
            .join('');
    };
    CAMLQueryBuilder._getISODateString = function (date) {
        return date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
    };
    CAMLQueryBuilder._getDateTimeTypeComparisonValueElement = function (field, startDate, endDate) {
        return [
            '<And>',
            this._comparisonElement('Geq', field, "<Value Type=\"DateTime\">" + this._getISODateString(startDate) + "</Value>"),
            this._comparisonElement('Leq', field, "<Value Type=\"DateTime\">" + this._getISODateString(endDate) + "</Value>"),
            '</And>'
        ].join('');
    };
    CAMLQueryBuilder._dateTimeTypeCriteria = function (entry, field) {
        var today = new Date();
        if (typeof entry === 'number') {
            switch (entry) {
                case _common_enums_FilterSince__WEBPACK_IMPORTED_MODULE_1__["FilterSince"].Today:
                    return this._comparisonElement('Eq', field, '<Value Type="DateTime"><Today /></Value>');
                case _common_enums_FilterSince__WEBPACK_IMPORTED_MODULE_1__["FilterSince"].Yesterday:
                    return this._comparisonElement('Eq', field, '<Value Type="DateTime"><Today OffsetDays="-1" /></Value>');
                case _common_enums_FilterSince__WEBPACK_IMPORTED_MODULE_1__["FilterSince"].ThisWeek:
                    var thisWeekBegin = new Date(today.getFullYear(), today.getMonth(), today.getDate() - today.getDay());
                    return this._getDateTimeTypeComparisonValueElement(field, thisWeekBegin, today);
                case _common_enums_FilterSince__WEBPACK_IMPORTED_MODULE_1__["FilterSince"].ThisMonth:
                    var thisMonthBegin = new Date(today.getFullYear(), today.getMonth(), 1);
                    var thisMonthEnd = new Date(today.getFullYear(), today.getMonth() + 1, 0);
                    return this._getDateTimeTypeComparisonValueElement(field, thisMonthBegin, thisMonthEnd);
                case _common_enums_FilterSince__WEBPACK_IMPORTED_MODULE_1__["FilterSince"].LastMonth:
                    var lastMonthBegin = new Date(today.getFullYear(), today.getMonth() - 1, 1);
                    var lastMonthEnd = new Date(today.getFullYear(), today.getMonth(), 0);
                    return this._getDateTimeTypeComparisonValueElement(field, lastMonthBegin, lastMonthEnd);
                case _common_enums_FilterSince__WEBPACK_IMPORTED_MODULE_1__["FilterSince"].ThisYear:
                    var thisYearBegin = new Date(today.getFullYear(), 0, 1);
                    var thisYearEnd = new Date(today.getFullYear(), 11, 31);
                    return this._getDateTimeTypeComparisonValueElement(field, thisYearBegin, thisYearEnd);
                case _common_enums_FilterSince__WEBPACK_IMPORTED_MODULE_1__["FilterSince"].LastYear:
                    var lastYearBegin = new Date(today.getFullYear() - 1, 0, 1);
                    var lastYearEnd = new Date(today.getFullYear() - 1, 11, 31);
                    return this._getDateTimeTypeComparisonValueElement(field, lastYearBegin, lastYearEnd);
            }
        }
        return '';
    };
    CAMLQueryBuilder._userTypeCriteria = function (type, entry, field, op) {
        switch (op) {
            case _common_enums_FilterOperator__WEBPACK_IMPORTED_MODULE_5__["FilterOperator"].IsNull:
                return this._comparisonElement('IsNull', field, '');
            case _common_enums_FilterOperator__WEBPACK_IMPORTED_MODULE_5__["FilterOperator"].Equals:
            default:
                var currentUserCriteria = this._comparisonElement('Eq', field, '<Value Type="Integer"><UserID Type="Integer" /></Value>');
                if (type === _common_enums_UserType__WEBPACK_IMPORTED_MODULE_4__["UserType"].CurrentUser) {
                    return currentUserCriteria;
                }
                else if (type === _common_enums_UserType__WEBPACK_IMPORTED_MODULE_4__["UserType"].SpecificUser && entry) {
                    return _common_TokenUtilities__WEBPACK_IMPORTED_MODULE_7__["default"].isValidMeToken(entry)
                        ? currentUserCriteria
                        : this._comparisonElement('Eq', field, "<Value Type=\"User\">" + entry.toString() + "</Value>");
                }
                return '';
        }
    };
    CAMLQueryBuilder._criteriaElement = function (operator, fieldInfo, value, encodeForGETRequest) {
        var fieldValue = encodeForGETRequest
            ? this._encodeUserEntryForXML(value, encodeForGETRequest)
            : value;
        var valueElement = "<Value Type=\"" + fieldInfo.TypeAsString + "\">" + fieldValue + "</Value>";
        if (fieldInfo.FieldTypeKind === _dataSources__WEBPACK_IMPORTED_MODULE_0__["ListFieldType"].User && _common_TokenUtilities__WEBPACK_IMPORTED_MODULE_7__["default"].isValidMeToken(fieldValue)) {
            valueElement = '<Value Type="Integer"><UserID Type="Integer" /></Value>';
        }
        else if (fieldInfo.FieldTypeKind === _dataSources__WEBPACK_IMPORTED_MODULE_0__["ListFieldType"].DateTime &&
            _common_TokenUtilities__WEBPACK_IMPORTED_MODULE_7__["default"].isValidTodayToken(fieldValue)) {
            var offsetStr = fieldValue.substr('[today]'.length) || '0';
            var offset = parseInt(offsetStr, 0);
            valueElement = "<Value Type=\"DateTime\"><Today OffsetDays=\"" + offset + "\" /></Value>";
        }
        return this._comparisonElement(operator, fieldInfo.InternalName, valueElement);
    };
    CAMLQueryBuilder._comparisonElement = function (operator, field, valueElement) {
        return "<" + operator + "><FieldRef Name=\"" + field + "\"/>" + valueElement + "</" + operator + ">";
    };
    // <In> operator cannot handle MultiChoice and MultiTaxonomy field so we build include function with <Or>.
    CAMLQueryBuilder._includeElement = function (fieldInfo, values, encodeForGETRequest) {
        var _this = this;
        var criteria = values.map(function (value) {
            if (!value) {
                return "<IsNull><FieldRef Name=\"" + fieldInfo.InternalName + "\"/></IsNull>";
            }
            else {
                return _this._criteriaElement('Eq', fieldInfo, value, encodeForGETRequest);
            }
        });
        return this._combineCriteria(criteria, 'Or');
    };
    CAMLQueryBuilder._combineCriteria = function (criteria, operator) {
        if (!criteria || criteria.length === 0) {
            return '';
        }
        var criteriaString = '';
        for (var index = 1; index < criteria.length; index++) {
            criteriaString += "<" + operator + ">";
        }
        criteriaString += criteria[0];
        for (var index = 1; index < criteria.length; index++) {
            criteriaString += criteria[index] + "</" + operator + ">";
        }
        return criteriaString;
    };
    CAMLQueryBuilder._fieldTypeCriteria = function (filter, fieldDictionary, encodeForGETRequest) {
        var _this = this;
        if (!filter.fieldInfo && !fieldDictionary) {
            return '';
        }
        var fieldInfo = filter.fieldInfo || fieldDictionary[filter.fieldname];
        if (!fieldInfo) {
            return '';
        }
        var value = this._parseListFieldValue(filter.value, fieldInfo.FieldTypeKind);
        // blank entry considered valid criteria only for Equals, NotEqual and Between
        if (value.trim() === '' &&
            filter.op !== _common_enums_FilterOperator__WEBPACK_IMPORTED_MODULE_5__["FilterOperator"].Equals &&
            filter.op !== _common_enums_FilterOperator__WEBPACK_IMPORTED_MODULE_5__["FilterOperator"].NotEqual &&
            filter.op !== _common_enums_FilterOperator__WEBPACK_IMPORTED_MODULE_5__["FilterOperator"].Between) {
            return '';
        }
        var expr = '';
        switch (filter.op) {
            case _common_enums_FilterOperator__WEBPACK_IMPORTED_MODULE_5__["FilterOperator"].BeginsWith:
                expr = this._criteriaElement('BeginsWith', fieldInfo, value, encodeForGETRequest);
                break;
            case _common_enums_FilterOperator__WEBPACK_IMPORTED_MODULE_5__["FilterOperator"].Between:
                // written so that if only one side of the expression is provided then it is still filtered
                // this will help give instant feedback as the entries are composed
                var value2 = this._parseListFieldValue(filter.value2, fieldInfo.FieldTypeKind);
                if (value.trim() !== '' && value2.trim() !== '') {
                    expr =
                        '<And>' +
                            this._criteriaElement('Geq', fieldInfo, value, encodeForGETRequest) +
                            this._criteriaElement('Leq', fieldInfo, value2, encodeForGETRequest) +
                            '</And>';
                }
                else if (value.trim() !== '') {
                    expr = this._criteriaElement('Geq', fieldInfo, value, encodeForGETRequest);
                }
                else if (value2.trim() !== '') {
                    expr = this._criteriaElement('Leq', fieldInfo, value2, encodeForGETRequest);
                }
                break;
            case _common_enums_FilterOperator__WEBPACK_IMPORTED_MODULE_5__["FilterOperator"].Contains:
                expr = this._criteriaElement('Contains', fieldInfo, value, encodeForGETRequest);
                break;
            // not supported by CAML
            // case FilterOperator.DoesNotContain:
            case _common_enums_FilterOperator__WEBPACK_IMPORTED_MODULE_5__["FilterOperator"].Equals:
                if (filter.values && filter.values.length > 0) {
                    expr = this._includeElement(fieldInfo, filter.values.map(function (filterValue) {
                        return _this._parseListFieldValue(filterValue, fieldInfo.FieldTypeKind);
                    }), encodeForGETRequest);
                }
                else {
                    expr = this._criteriaElement('Eq', fieldInfo, value, encodeForGETRequest);
                }
                break;
            case _common_enums_FilterOperator__WEBPACK_IMPORTED_MODULE_5__["FilterOperator"].GreaterThan:
                expr = this._criteriaElement('Gt', fieldInfo, value, encodeForGETRequest);
                break;
            case _common_enums_FilterOperator__WEBPACK_IMPORTED_MODULE_5__["FilterOperator"].GreaterThanOrEqualTo:
                expr = this._criteriaElement('Geq', fieldInfo, value, encodeForGETRequest);
                break;
            case _common_enums_FilterOperator__WEBPACK_IMPORTED_MODULE_5__["FilterOperator"].LessThan:
                expr = this._criteriaElement('Lt', fieldInfo, value, encodeForGETRequest);
                break;
            case _common_enums_FilterOperator__WEBPACK_IMPORTED_MODULE_5__["FilterOperator"].LessThanOrEqualTo:
                expr = this._criteriaElement('Leq', fieldInfo, value, encodeForGETRequest);
                break;
            case _common_enums_FilterOperator__WEBPACK_IMPORTED_MODULE_5__["FilterOperator"].NotEqual:
                expr = this._criteriaElement('Neq', fieldInfo, value, encodeForGETRequest);
                break;
        }
        return expr;
    };
    // Parse entry and reformat it as needed for valid CAML.
    //
    // @todo: This code is currently a near copy of  _parseManagedPropertyFieldValue in KQLQueryBuilder. Need to
    // determine whether it is practical to merge the two or if they should remain separate to allow each to evolve for
    // their particular situations. For example, we may end up supporting more data types in CAML that are not
    // applicable to KQL.
    CAMLQueryBuilder._parseListFieldValue = function (entry, type) {
        var result = '';
        if (entry === undefined) {
            return result;
        }
        switch (type) {
            case _dataSources__WEBPACK_IMPORTED_MODULE_0__["ListFieldType"].DateTime:
                if (typeof entry === 'string' && _common_TokenUtilities__WEBPACK_IMPORTED_MODULE_7__["default"].isValidTodayToken(entry)) {
                    result = entry.trim();
                    break;
                }
                var dt = new Date(entry.toString());
                // is a date object?
                if (Object.prototype.toString.call(dt) === '[object Date]') {
                    // is a valid date?
                    if (!isNaN(dt.getTime())) {
                        // date format that CAML expects
                        result = "" + dt.toISOString();
                    }
                }
                break;
            case _dataSources__WEBPACK_IMPORTED_MODULE_0__["ListFieldType"].Number:
            case _dataSources__WEBPACK_IMPORTED_MODULE_0__["ListFieldType"].Currency:
                var n = parseFloat(entry.toString());
                if (!isNaN(n)) {
                    result = n.toString();
                }
                break;
            case _dataSources__WEBPACK_IMPORTED_MODULE_0__["ListFieldType"].Integer:
            case _dataSources__WEBPACK_IMPORTED_MODULE_0__["ListFieldType"].Counter:
                var i = parseInt(entry.toString(), 10);
                if (!isNaN(i)) {
                    result = i.toString();
                }
                break;
            case _dataSources__WEBPACK_IMPORTED_MODULE_0__["ListFieldType"].User:
            case _dataSources__WEBPACK_IMPORTED_MODULE_0__["ListFieldType"].Text:
            default:
                result = "" + entry.toString().trim();
                break;
        }
        return this._encodeUserEntryForXML(result);
    };
    CAMLQueryBuilder._filterByLanguage = function (options, criteria, criteriaClose) {
        var findAllContentTypes = options.contentTypes && options.contentTypes.indexOf(_search_enums_ContentType__WEBPACK_IMPORTED_MODULE_2__["ContentType"].All) > -1;
        var findPages = false;
        var findNews = false;
        if (options.contentTypes && !findAllContentTypes) {
            for (var i = 0; i < options.contentTypes.length; ++i) {
                switch (options.contentTypes[i]) {
                    case _search_enums_ContentType__WEBPACK_IMPORTED_MODULE_2__["ContentType"].Page:
                        findPages = true;
                        break;
                    case _search_enums_ContentType__WEBPACK_IMPORTED_MODULE_2__["ContentType"].News:
                        findNews = true;
                        break;
                }
            }
        }
        if (options.languageCode && (findAllContentTypes || findPages || findNews)) {
            var languageCode = options.languageCode;
            var translationLanguageField = '<FieldRef Name="_SPTranslationLanguage" />';
            var translationLanguageValue = "<Value Type=\"Choice\">" + languageCode + "</Value>";
            var isTranslationLanguage = "<Eq>" + translationLanguageField + translationLanguageValue + "</Eq>";
            var translatedLanguagesField = '<FieldRef Name="_SPTranslatedLanguages" />';
            var translatedLanguagesValue = "<Value Type=\"MultiChoice\">" + languageCode + "</Value>";
            var isNotTranslatedLanguage = "<Neq>" + translatedLanguagesField + translatedLanguagesValue + "</Neq>";
            var isNotTranslation = "<IsNull>" + translationLanguageField + "</IsNull>";
            criteria.push("<And><Or>" + isTranslationLanguage + "<And>" + isNotTranslatedLanguage + isNotTranslation + "</And></Or>");
            criteriaClose.push('</And>');
        }
    };
    return CAMLQueryBuilder;
}());



/***/ }),

/***/ "h10f":
/*!****************************************************!*\
  !*** ./lib/dataProviders/news/NewsDataProvider.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ms/sp-telemetry */ "2q6Q");
/* harmony import */ var _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _microsoft_sp_page_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/sp-page-context */ "X+PM");
/* harmony import */ var _microsoft_sp_page_context__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_page_context__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _microsoft_sp_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @microsoft/sp-http */ "vlQI");
/* harmony import */ var _microsoft_sp_http__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_http__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ms/odsp-utilities-bundle */ "y88i");
/* harmony import */ var _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ms/sp-component-utilities */ "hiL/");
/* harmony import */ var _ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _models_NewsDataSource__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./models/NewsDataSource */ "aE90");
/* harmony import */ var _utilities_NewsUtilities__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utilities/NewsUtilities */ "JpAn");
/* harmony import */ var _loc_Strings_resx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./loc/Strings.resx */ "hE4m");
var _loc_Strings_resx__WEBPACK_IMPORTED_MODULE_7___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./loc/Strings.resx */ "hE4m", 1);
/* harmony import */ var _DataProviderFlights__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../DataProviderFlights */ "Xkwe");
/* harmony import */ var _common_TieredCacheHelper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../common/TieredCacheHelper */ "nJGZ");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_10__);
/**
 * @copyright Microsoft Corporation. All rights reserved.
 */











var PageRequestHeaders = /** @class */ (function () {
    function PageRequestHeaders(method) {
        this['OData-Version'] = '3.0';
        this['If-Match'] = '*';
        this['X-HTTP-Method'] = method;
    }
    return PageRequestHeaders;
}());
/**
 * A data provider for the SharePoint news
 * @internal
 */
var NewsDataProvider = /** @class */ (function () {
    function NewsDataProvider(options) {
        var _this = this;
        this.id = 'News';
        this.title = _loc_Strings_resx__WEBPACK_IMPORTED_MODULE_7__["NewsDataProviderTitle"];
        this.options = options;
        this._isTieredCachingEnabled = _DataProviderFlights__WEBPACK_IMPORTED_MODULE_8__["default"].isTieredCachingEnabled();
        this.options.serviceScope.whenFinished(function () {
            _this._spHttpClient = _this.options.serviceScope.consume(_microsoft_sp_http__WEBPACK_IMPORTED_MODULE_2__["SPHttpClient"].serviceKey);
            _this._pageContext = _this.options.serviceScope.consume(_microsoft_sp_page_context__WEBPACK_IMPORTED_MODULE_1__["PageContext"].serviceKey);
            _this._absoluteUrl = _this._pageContext === undefined ? undefined : _this._pageContext.web.absoluteUrl;
        });
        if (!_ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_3__["Locale"].language) {
            _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_3__["Locale"].language = 'en-us';
        }
        return this;
    }
    NewsDataProvider.prototype.requestData = function (requestInfo) {
        var _this = this;
        var request = this._executeRequest(requestInfo);
        return request.then(function (response) {
            /* If tiered caching is not enabled, or
              the cacheDataProvider is loaded too late and responses are defaulted to no cache,
              so the response is from server call */
            if (response instanceof _microsoft_sp_http__WEBPACK_IMPORTED_MODULE_2__["SPHttpClientResponse"]) {
                return _this._parseSPHttpClientResponse(response, requestInfo);
            }
            // If caching startegy is cache and network
            if (_DataProviderFlights__WEBPACK_IMPORTED_MODULE_8__["default"].isCacheAndNetworkEnabled()) {
                var cacheAndNetworkResponse = response;
                if (cacheAndNetworkResponse.serverResponse && cacheAndNetworkResponse.cachedResponse) {
                    return _this._applyCacheAndNetwork(cacheAndNetworkResponse, requestInfo);
                }
            }
            // If caching startegy is cache then network
            return _this._parseClientCachableResponse(response, requestInfo);
        });
    };
    NewsDataProvider.prototype._applyCacheAndNetwork = function (response, requestInfo) {
        var _this = this;
        var serverPromise = response.serverResponse.then(function (serverData) {
            return _this._parseSPHttpClientResponse(serverData, requestInfo, true);
        });
        var cacheResponse = _common_TieredCacheHelper__WEBPACK_IMPORTED_MODULE_9__["default"].processResponseRawData(response.cachedResponse, this._isRawData, this._processRawData.bind(this), requestInfo);
        // Return the response that comes back faster
        var cachedDataPromiseId = _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_10__["Guid"].parse('9b794e3a-a041-4fb4-870d-a1121ca57ca7');
        var serverDataPromiseId = _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_10__["Guid"].parse('4d757517-a42f-4546-a76a-8d0da7dd2a07');
        var promiseRaceMap = [
            {
                raceablePromise: cacheResponse,
                raceId: cachedDataPromiseId
            },
            {
                raceablePromise: serverPromise,
                raceId: serverDataPromiseId
            }
        ];
        return _ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_4__["SmartRace"].race(promiseRaceMap).then(function (raceResponse) {
            if (raceResponse.raceId === cachedDataPromiseId) {
                serverPromise
                    .then(function (newsData) {
                    requestInfo.onServerResponseResolved(newsData);
                })
                    .catch(function () {
                    /* No Op: The page is already rendered with cache data, no need to break it */
                });
            }
            return raceResponse.raceablePromise;
        });
    };
    NewsDataProvider.prototype._executeRequest = function (requestInfo) {
        var body = {
            metadataFilter: requestInfo.serializedFilterQuery,
            languageOverride: requestInfo.languageOverride
        };
        var optionsToPass = {
            body: JSON.stringify(body),
            headers: new PageRequestHeaders('POST')
        };
        if (!this._isTieredCachingEnabled) {
            return this._spHttpClient.post(this._getNewsItemsUrl(requestInfo), _microsoft_sp_http__WEBPACK_IMPORTED_MODULE_2__["SPHttpClient"].configurations.v1, optionsToPass);
        }
        else {
            optionsToPass.method = 'POST';
            var isCacheAndNetwork = _DataProviderFlights__WEBPACK_IMPORTED_MODULE_8__["default"].isCacheAndNetworkEnabled();
            var cacheOptions = {
                alias: _utilities_NewsUtilities__WEBPACK_IMPORTED_MODULE_6__["NewsUtilities"].aliasPrefix + this.id,
                id: requestInfo.webpartId,
                expirationDuration: 600000,
                cacheStrategy: isCacheAndNetwork ? _microsoft_sp_http__WEBPACK_IMPORTED_MODULE_2__["_CacheStrategy"].CacheAndNetwork : _microsoft_sp_http__WEBPACK_IMPORTED_MODULE_2__["_CacheStrategy"].CacheThenNetwork,
                extraProps: new Map([[_common_TieredCacheHelper__WEBPACK_IMPORTED_MODULE_9__["default"].useStalePropName, true]]) // tslint:disable-line:no-any
            };
            if (!requestInfo.canCacheRequest) {
                cacheOptions.cacheStrategy = _microsoft_sp_http__WEBPACK_IMPORTED_MODULE_2__["_CacheStrategy"].NetworkOnly;
            }
            return this._spHttpClient.fetch(this._getNewsItemsUrl(requestInfo), _microsoft_sp_http__WEBPACK_IMPORTED_MODULE_2__["SPHttpClient"].configurations.v1, optionsToPass, cacheOptions);
        }
    };
    NewsDataProvider.prototype._getNewsItemsUrl = function (requestInfo) {
        var webUrl = _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_3__["UriEncoding"].escapeUrlForCallback(this._absoluteUrl);
        var newsApi = '/_api/sitepages/pages/' +
            (requestInfo.audienceTargetingEnabled ? 'FeedTargeted' : 'feed') +
            '?promotedstate=2&published=true';
        var skip = '&$skip=' + (requestInfo.skip ? requestInfo.skip.toString() : '0');
        var top = '&$top=' + (requestInfo.count > 0 ? requestInfo.count.toString() : '');
        var expand = '&$expand=CreatedBy';
        // tslint:disable-next-line: max-line-length
        var select = '&$select=Description,BannerImageUrl,BannerThumbnailUrl,AbsoluteUrl,FirstPublished,Title,FileName,Id,UniqueId,ListId,OriginalSourceItemId,OriginalSourceUrl,Path';
        return webUrl + newsApi + skip + top + expand + select;
    };
    NewsDataProvider.prototype._isRawData = function (data) {
        return data && data.value;
    };
    NewsDataProvider.prototype._parseClientCachableResponse = function (response, requestInfo) {
        var _this = this;
        var serverResponse = response.serverResponse
            ? response.serverResponse.then(function (spHttpClientResponse) {
                return _this._parseSPHttpClientResponse(spHttpClientResponse, requestInfo);
            })
            : undefined;
        // If cachedResponse is available and needs to be returned
        if (response.cachedResponse) {
            /*If server response is also available, it means the cache response is stale.
              Server response should be used to onServerResponseResolved to for example
              re-render the web part with fresh data. */
            if (serverResponse) {
                serverResponse
                    .then(function (newsData) {
                    requestInfo.onServerResponseResolved(newsData);
                })
                    .catch(function () {
                    /* No Op: Qos is already logged in _parseSPHttpClientResponse,
                    and no need to throw. The page is already rendered with cache data, no need to break it */
                });
            }
            return _common_TieredCacheHelper__WEBPACK_IMPORTED_MODULE_9__["default"].processResponseRawData(response.cachedResponse, this._isRawData, this._processRawData.bind(this), requestInfo);
        }
        return serverResponse;
    };
    NewsDataProvider.prototype._parseSPHttpClientResponse = function (response, requestInfo, isInSmartRace) {
        var _this = this;
        var extraData = Object(_models_NewsDataSource__WEBPACK_IMPORTED_MODULE_5__["_getExtraDataForLogging"])(requestInfo);
        var qosName = isInSmartRace
            ? 'NewsreelDataSource.getNewsItemsInSmartRace'
            : 'NewsreelDataSource.getNewsItems';
        var qosMonitor = new _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_0__["_QosMonitor"](qosName);
        extraData.correlationId = "" + response.correlationId;
        extraData.responseStatus = "" + response.status;
        extraData.message = response.statusMessage;
        if (response.ok) {
            return response
                .json()
                .then(function (rawData) {
                var data = _this._processRawData(rawData, requestInfo);
                qosMonitor.writeSuccess(extraData);
                return data;
            })
                .catch(function (error) {
                qosMonitor.writeUnexpectedFailure('Unexpected', error, extraData);
                throw error;
            });
        }
        else {
            var responseError = new Error(response.statusMessage);
            qosMonitor.writeUnexpectedFailure('Unexpected', responseError, extraData);
            return Promise.reject(responseError);
        }
    };
    NewsDataProvider.prototype._processRawData = function (rawData, requestInfo) {
        var paddingCount = _utilities_NewsUtilities__WEBPACK_IMPORTED_MODULE_6__["NewsUtilities"].getPaddingCount(requestInfo, rawData.value ? rawData.value.length : 0);
        var data = rawData.value && rawData.value.length > 0
            ? _utilities_NewsUtilities__WEBPACK_IMPORTED_MODULE_6__["NewsUtilities"].extractNewsItems(rawData.value, this._pageContext)
            : [];
        data = data.concat(_utilities_NewsUtilities__WEBPACK_IMPORTED_MODULE_6__["NewsUtilities"].getEmptyStateItems(requestInfo.emptyItemType, this.options.serviceScope, paddingCount, requestInfo.webpartWidth));
        return data;
    };
    return NewsDataProvider;
}());
/* harmony default export */ __webpack_exports__["default"] = (NewsDataProvider);


/***/ }),

/***/ "hE4m":
/*!*************************************************!*\
  !*** ./lib/dataProviders/news/loc/Strings.resx ***!
  \*************************************************/
/*! exports provided: HelpItem1Title, HelpItem1Description, HelpItem1Url, HelpItem2Title, HelpItem2Description, HelpItem2Url, HelpItem3Title, HelpItem3Description, HelpItem3Url, HelpItemModernizedTitle, HelpItemModernizedDescription, HelpItemAuthor, NewsDataProviderTitle, NewsDigestDataProviderTitle, HubNewsDataProviderTitle, MyNewsDataProviderTitle, ViewCountsDataProviderTitle, MultiSiteNewsDataProviderTitle, CallToActionContributorTitle, CallToActionViewerTitle, CallToActionContributorDescription, CallToActionViewerDescription, EmptyStateArticleTitle, EmptyStateArticleDescription, EmptyStateArticleAuthor, EmptyStatePublishedRelativeTime, AutofillArticleTitle, CarouselStockTitle1, CarouselStockTitle2, CarouselStockTitle3, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"HelpItem1Title\":\"Keep your team updated with news on your team site\",\"HelpItem1Description\":\"From the site home page you\\u0027ll be able to quickly author a news post – a status update, trip report, or even just highlight a document with some additional context provided to the team.\",\"HelpItem1Url\":\"https://go.microsoft.com/fwlink/p/?linkid=827920\",\"HelpItem2Title\":\"What is a team site?\",\"HelpItem2Description\":\"A SharePoint team site connects you and your team to the content, information, and apps you rely on every day. For example, you can use a team site to store and collaborate on files or to create and manage lists of information. On a team site home page, you can view links to important team files, apps, and web pages and see recent site activity in the activity feed.\",\"HelpItem2Url\":\"https://go.microsoft.com/fwlink/p/?linkid=827918\",\"HelpItem3Title\":\"Add a page to a site\",\"HelpItem3Description\":\"Using pages is a great way to share ideas using images, Excel, Word and PowerPoint documents, video, and more. You can create and publish pages quickly and easily, and they look great on any device. When you create a page, you add and customize web parts with a toolbox available right in the editing pane. And, you can publish with just a click.\",\"HelpItem3Url\":\"https://go.microsoft.com/fwlink/p/?linkid=827919\",\"HelpItemModernizedTitle\":\"Welcome to the new team site experience\",\"HelpItemModernizedDescription\":\"Quickly author a new news post, a status update, or a trip report on the new team site home page.\",\"HelpItemAuthor\":\"SharePoint\",\"NewsDataProviderTitle\":\"News\",\"NewsDigestDataProviderTitle\":\"NewsDigest\",\"HubNewsDataProviderTitle\":\"Hub News\",\"MyNewsDataProviderTitle\":\"My News\",\"ViewCountsDataProviderTitle\":\"View Counts\",\"MultiSiteNewsDataProviderTitle\":\"Multi-site News\",\"CallToActionContributorTitle\":\"Create a news post\",\"CallToActionViewerTitle\":\"No news posts are available right now\",\"CallToActionContributorDescription\":\"Keep your audience engaged by sharing your latest updates.\",\"CallToActionViewerDescription\":\"Check back later to see the latest News.\",\"EmptyStateArticleTitle\":\"Title of news post\",\"EmptyStateArticleDescription\":\"Preview that shows the first few lines of the article.\",\"EmptyStateArticleAuthor\":\"Author name\",\"EmptyStatePublishedRelativeTime\":\"A few seconds ago\",\"AutofillArticleTitle\":\"Automatic\",\"CarouselStockTitle1\":\"Build successful portals\",\"CarouselStockTitle2\":\"Modern SharePoint branding\",\"CarouselStockTitle3\":\"SharePoint News reaches more users\"}");

/***/ }),

/***/ "hfyH":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/file-loader@1.1.11_webpack@4.44.2/node_modules/file-loader/dist/cjs.js?name=icon_[name]_[hash:8].[ext]!./lib/dataProviders/news/assets/helpitemimg3-2x.png ***!
  \******************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "icon_helpitemimg3-2x_ef307bcc.png";

/***/ }),

/***/ "hiL/":
/*!*********************************************!*\
  !*** external "@ms/sp-component-utilities" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_hiL___;

/***/ }),

/***/ "jnk8":
/*!***************************************!*\
  !*** ./lib/dataSources/base/index.js ***!
  \***************************************/
/*! exports provided: BaseDataSource, SPDataSource, ODataQueryStringBuilder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BaseDataSource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseDataSource */ "RSuL");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaseDataSource", function() { return _BaseDataSource__WEBPACK_IMPORTED_MODULE_0__["BaseDataSource"]; });

/* harmony import */ var _SPDataSource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SPDataSource */ "ukKy");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SPDataSource", function() { return _SPDataSource__WEBPACK_IMPORTED_MODULE_1__["SPDataSource"]; });

/* harmony import */ var _ODataQueryStringBuilder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ODataQueryStringBuilder */ "g9eu");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ODataQueryStringBuilder", function() { return _ODataQueryStringBuilder__WEBPACK_IMPORTED_MODULE_2__["ODataQueryStringBuilder"]; });

// building blocks


// helpers



/***/ }),

/***/ "jrLr":
/*!************************************!*\
  !*** ./lib/dataProviders/index.js ***!
  \************************************/
/*! exports provided: BaseDataProvider, BookmarksDataProvider, NewsUtilities, news, viewCounts, currentViewCounts, hubNews, newsDigest, multiSiteNews, myNews, staleViewCounts, NewsDataSource, newsDataSourceProp, _appendAudienceFilteringQueryParam, _appendLanguageOverrideQueryParam, _getExtraDataForLogging, NewsEmptyStateType, ExchangeViewCountsDataProvider, HubNewsDataProvider, MicroServiceNewsDataProvider, NewsDataProvider, NewsDigestDataProvider, NewsDigestUtilities, NewsSearchDataProvider, MultiSiteNewsDataProvider, MyNewsDataProvider, tryGetAuthoritativeSiteDetails, DocumentType, FilterOperator, FilterSince, FilterType, UserType, TokenUtilities, ContentLocation, ContentType, DeferredManagedProperties, KQLQueryBuilder, AUDIENCE_TARGET_KQL_QUERY, ManagedDataType, SortType, SearchDataProvider, PersonaSettingsCache, sanitizeSearchQueryParameter, CAMLQueryBuilder, ListRequestType, ListDataProvider, ContentRollupDataProvider, EventDataProvider, EventsSearchDataProvider, EventsListDataProvider, PageDataProvider, PageDataSource, _getWebPartDataFromPage, PageSearchDataProvider, TemplatePanelDataSource, TemplateSelectedPageCopyDataSource, TemplateSelectedPageAsJsonDataSource, DefaultNewPageTemplateIdDataSource, DeleteTemplatePageDataSource, TemplatePanelDataProvider, TemplatePanelSelectedPageCopyDataProvider, TemplatePanelSelectedPageAsJsonDataProvider, DefaultNewPageTemplateIdDataProvider, DeleteTemplatePageDataProvider, RecentDocumentsDataProvider, BingLocationDataProvider, TopicSuggestionSearchDataProvider, TopicFirstRunDataProvider, TopicFirstRunKeys, ViewCountDataProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BaseDataProvider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseDataProvider */ "L/SE");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaseDataProvider", function() { return _BaseDataProvider__WEBPACK_IMPORTED_MODULE_0__["BaseDataProvider"]; });

/* harmony import */ var _bookmarks_BookmarksDataProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bookmarks/BookmarksDataProvider */ "R3v1");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BookmarksDataProvider", function() { return _bookmarks_BookmarksDataProvider__WEBPACK_IMPORTED_MODULE_1__["BookmarksDataProvider"]; });

/* harmony import */ var _news_utilities_NewsUtilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./news/utilities/NewsUtilities */ "JpAn");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NewsUtilities", function() { return _news_utilities_NewsUtilities__WEBPACK_IMPORTED_MODULE_2__["NewsUtilities"]; });

/* harmony import */ var _news_models_NewsDataProviderIds__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./news/models/NewsDataProviderIds */ "2Rre");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "news", function() { return _news_models_NewsDataProviderIds__WEBPACK_IMPORTED_MODULE_3__["news"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "viewCounts", function() { return _news_models_NewsDataProviderIds__WEBPACK_IMPORTED_MODULE_3__["viewCounts"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "currentViewCounts", function() { return _news_models_NewsDataProviderIds__WEBPACK_IMPORTED_MODULE_3__["currentViewCounts"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hubNews", function() { return _news_models_NewsDataProviderIds__WEBPACK_IMPORTED_MODULE_3__["hubNews"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "newsDigest", function() { return _news_models_NewsDataProviderIds__WEBPACK_IMPORTED_MODULE_3__["newsDigest"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "multiSiteNews", function() { return _news_models_NewsDataProviderIds__WEBPACK_IMPORTED_MODULE_3__["multiSiteNews"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "myNews", function() { return _news_models_NewsDataProviderIds__WEBPACK_IMPORTED_MODULE_3__["myNews"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staleViewCounts", function() { return _news_models_NewsDataProviderIds__WEBPACK_IMPORTED_MODULE_3__["staleViewCounts"]; });

/* harmony import */ var _news_models_NewsDataSource__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./news/models/NewsDataSource */ "aE90");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NewsDataSource", function() { return _news_models_NewsDataSource__WEBPACK_IMPORTED_MODULE_4__["NewsDataSource"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "newsDataSourceProp", function() { return _news_models_NewsDataSource__WEBPACK_IMPORTED_MODULE_4__["newsDataSourceProp"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_appendAudienceFilteringQueryParam", function() { return _news_models_NewsDataSource__WEBPACK_IMPORTED_MODULE_4__["_appendAudienceFilteringQueryParam"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_appendLanguageOverrideQueryParam", function() { return _news_models_NewsDataSource__WEBPACK_IMPORTED_MODULE_4__["_appendLanguageOverrideQueryParam"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_getExtraDataForLogging", function() { return _news_models_NewsDataSource__WEBPACK_IMPORTED_MODULE_4__["_getExtraDataForLogging"]; });

/* harmony import */ var _news_models_NewsEmptyStateType__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./news/models/NewsEmptyStateType */ "NRPc");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NewsEmptyStateType", function() { return _news_models_NewsEmptyStateType__WEBPACK_IMPORTED_MODULE_5__["NewsEmptyStateType"]; });

/* harmony import */ var _news_ExchangeViewCountsDataProvider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./news/ExchangeViewCountsDataProvider */ "GEDN");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ExchangeViewCountsDataProvider", function() { return _news_ExchangeViewCountsDataProvider__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _news_HubNewsDataProvider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./news/HubNewsDataProvider */ "GoGY");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HubNewsDataProvider", function() { return _news_HubNewsDataProvider__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _news_MicroServiceNewsDataProvider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./news/MicroServiceNewsDataProvider */ "ugjH");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MicroServiceNewsDataProvider", function() { return _news_MicroServiceNewsDataProvider__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _news_NewsDataProvider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./news/NewsDataProvider */ "h10f");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NewsDataProvider", function() { return _news_NewsDataProvider__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony import */ var _news_NewsDigestDataProvider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./news/NewsDigestDataProvider */ "QaIw");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NewsDigestDataProvider", function() { return _news_NewsDigestDataProvider__WEBPACK_IMPORTED_MODULE_10__["default"]; });

/* harmony import */ var _news_utilities_NewsDigestUtilities__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./news/utilities/NewsDigestUtilities */ "TYqH");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NewsDigestUtilities", function() { return _news_utilities_NewsDigestUtilities__WEBPACK_IMPORTED_MODULE_11__["NewsDigestUtilities"]; });

/* harmony import */ var _news_NewsSearchDataProvider__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./news/NewsSearchDataProvider */ "5qZt");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NewsSearchDataProvider", function() { return _news_NewsSearchDataProvider__WEBPACK_IMPORTED_MODULE_12__["NewsSearchDataProvider"]; });

/* harmony import */ var _news_MultiSiteNewsDataProvider__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./news/MultiSiteNewsDataProvider */ "y8rg");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MultiSiteNewsDataProvider", function() { return _news_MultiSiteNewsDataProvider__WEBPACK_IMPORTED_MODULE_13__["default"]; });

/* harmony import */ var _news_MyNewsDataProvider__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./news/MyNewsDataProvider */ "/3i9");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MyNewsDataProvider", function() { return _news_MyNewsDataProvider__WEBPACK_IMPORTED_MODULE_14__["default"]; });

/* harmony import */ var _news_utilities_TryGetAuthoritativeSiteDetails__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./news/utilities/TryGetAuthoritativeSiteDetails */ "bLNn");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tryGetAuthoritativeSiteDetails", function() { return _news_utilities_TryGetAuthoritativeSiteDetails__WEBPACK_IMPORTED_MODULE_15__["tryGetAuthoritativeSiteDetails"]; });

/* harmony import */ var _common_enums_DocumentType__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./common/enums/DocumentType */ "kyLF");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DocumentType", function() { return _common_enums_DocumentType__WEBPACK_IMPORTED_MODULE_16__["DocumentType"]; });

/* harmony import */ var _common_enums_FilterOperator__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./common/enums/FilterOperator */ "PdqL");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FilterOperator", function() { return _common_enums_FilterOperator__WEBPACK_IMPORTED_MODULE_17__["FilterOperator"]; });

/* harmony import */ var _common_enums_FilterSince__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./common/enums/FilterSince */ "R8uK");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FilterSince", function() { return _common_enums_FilterSince__WEBPACK_IMPORTED_MODULE_18__["FilterSince"]; });

/* harmony import */ var _common_enums_FilterType__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./common/enums/FilterType */ "Z0FC");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FilterType", function() { return _common_enums_FilterType__WEBPACK_IMPORTED_MODULE_19__["FilterType"]; });

/* harmony import */ var _common_enums_UserType__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./common/enums/UserType */ "JUc+");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserType", function() { return _common_enums_UserType__WEBPACK_IMPORTED_MODULE_20__["UserType"]; });

/* harmony import */ var _common_TokenUtilities__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./common/TokenUtilities */ "YoTJ");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TokenUtilities", function() { return _common_TokenUtilities__WEBPACK_IMPORTED_MODULE_21__["default"]; });

/* harmony import */ var _search_enums_ContentLocation__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./search/enums/ContentLocation */ "nNRp");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ContentLocation", function() { return _search_enums_ContentLocation__WEBPACK_IMPORTED_MODULE_22__["ContentLocation"]; });

/* harmony import */ var _search_enums_ContentType__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./search/enums/ContentType */ "G3Sr");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ContentType", function() { return _search_enums_ContentType__WEBPACK_IMPORTED_MODULE_23__["ContentType"]; });

/* harmony import */ var _search_managedProperty_DeferredManagedProperties__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./search/managedProperty/DeferredManagedProperties */ "dONd");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DeferredManagedProperties", function() { return _search_managedProperty_DeferredManagedProperties__WEBPACK_IMPORTED_MODULE_24__["DeferredManagedProperties"]; });

/* harmony import */ var _search_KQLQueryBuilder__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./search/KQLQueryBuilder */ "0oRV");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KQLQueryBuilder", function() { return _search_KQLQueryBuilder__WEBPACK_IMPORTED_MODULE_25__["KQLQueryBuilder"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AUDIENCE_TARGET_KQL_QUERY", function() { return _search_KQLQueryBuilder__WEBPACK_IMPORTED_MODULE_25__["AUDIENCE_TARGET_KQL_QUERY"]; });

/* harmony import */ var _search_enums_ManagedDataType__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./search/enums/ManagedDataType */ "ui8f");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ManagedDataType", function() { return _search_enums_ManagedDataType__WEBPACK_IMPORTED_MODULE_26__["ManagedDataType"]; });

/* harmony import */ var _search_enums_SortType__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./search/enums/SortType */ "nDsE");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SortType", function() { return _search_enums_SortType__WEBPACK_IMPORTED_MODULE_27__["SortType"]; });

/* harmony import */ var _search_SearchDataProvider__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./search/SearchDataProvider */ "dU3L");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SearchDataProvider", function() { return _search_SearchDataProvider__WEBPACK_IMPORTED_MODULE_28__["SearchDataProvider"]; });

/* harmony import */ var _search_PersonaSettingsCache__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./search/PersonaSettingsCache */ "IIPt");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PersonaSettingsCache", function() { return _search_PersonaSettingsCache__WEBPACK_IMPORTED_MODULE_29__["default"]; });

/* harmony import */ var _search_SearchUtilities__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./search/SearchUtilities */ "8GMp");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sanitizeSearchQueryParameter", function() { return _search_SearchUtilities__WEBPACK_IMPORTED_MODULE_30__["sanitizeSearchQueryParameter"]; });

/* harmony import */ var _list_CAMLQueryBuilder__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./list/CAMLQueryBuilder */ "gnrN");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CAMLQueryBuilder", function() { return _list_CAMLQueryBuilder__WEBPACK_IMPORTED_MODULE_31__["CAMLQueryBuilder"]; });

/* harmony import */ var _list_enums_ListRequestType__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./list/enums/ListRequestType */ "wo2m");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ListRequestType", function() { return _list_enums_ListRequestType__WEBPACK_IMPORTED_MODULE_32__["ListRequestType"]; });

/* harmony import */ var _list_ListDataProvider__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./list/ListDataProvider */ "mBlM");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ListDataProvider", function() { return _list_ListDataProvider__WEBPACK_IMPORTED_MODULE_33__["default"]; });

/* harmony import */ var _contentRollup_ContentRollupDataProvider__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./contentRollup/ContentRollupDataProvider */ "wWkW");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ContentRollupDataProvider", function() { return _contentRollup_ContentRollupDataProvider__WEBPACK_IMPORTED_MODULE_34__["default"]; });

/* harmony import */ var _event_index__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./event/index */ "Y4on");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EventDataProvider", function() { return _event_index__WEBPACK_IMPORTED_MODULE_35__["EventDataProvider"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EventsSearchDataProvider", function() { return _event_index__WEBPACK_IMPORTED_MODULE_35__["EventsSearchDataProvider"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EventsListDataProvider", function() { return _event_index__WEBPACK_IMPORTED_MODULE_35__["EventsListDataProvider"]; });

/* harmony import */ var _page_PageDataProvider__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./page/PageDataProvider */ "g25W");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PageDataProvider", function() { return _page_PageDataProvider__WEBPACK_IMPORTED_MODULE_36__["default"]; });

/* harmony import */ var _page_PageDataSource__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./page/PageDataSource */ "7dHj");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PageDataSource", function() { return _page_PageDataSource__WEBPACK_IMPORTED_MODULE_37__["default"]; });

/* harmony import */ var _page_WPDataExtractorDataProvider__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./page/WPDataExtractorDataProvider */ "78D3");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_getWebPartDataFromPage", function() { return _page_WPDataExtractorDataProvider__WEBPACK_IMPORTED_MODULE_38__["_getWebPartDataFromPage"]; });

/* harmony import */ var _page_PageSearchDataProvider__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./page/PageSearchDataProvider */ "M0r2");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PageSearchDataProvider", function() { return _page_PageSearchDataProvider__WEBPACK_IMPORTED_MODULE_39__["default"]; });

/* harmony import */ var _page_TemplatePanelDataProvider__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./page/TemplatePanelDataProvider */ "7gDu");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TemplatePanelDataSource", function() { return _page_TemplatePanelDataProvider__WEBPACK_IMPORTED_MODULE_40__["TemplatePanelDataSource"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TemplateSelectedPageCopyDataSource", function() { return _page_TemplatePanelDataProvider__WEBPACK_IMPORTED_MODULE_40__["TemplateSelectedPageCopyDataSource"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TemplateSelectedPageAsJsonDataSource", function() { return _page_TemplatePanelDataProvider__WEBPACK_IMPORTED_MODULE_40__["TemplateSelectedPageAsJsonDataSource"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DefaultNewPageTemplateIdDataSource", function() { return _page_TemplatePanelDataProvider__WEBPACK_IMPORTED_MODULE_40__["DefaultNewPageTemplateIdDataSource"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DeleteTemplatePageDataSource", function() { return _page_TemplatePanelDataProvider__WEBPACK_IMPORTED_MODULE_40__["DeleteTemplatePageDataSource"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TemplatePanelDataProvider", function() { return _page_TemplatePanelDataProvider__WEBPACK_IMPORTED_MODULE_40__["TemplatePanelDataProvider"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TemplatePanelSelectedPageCopyDataProvider", function() { return _page_TemplatePanelDataProvider__WEBPACK_IMPORTED_MODULE_40__["TemplatePanelSelectedPageCopyDataProvider"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TemplatePanelSelectedPageAsJsonDataProvider", function() { return _page_TemplatePanelDataProvider__WEBPACK_IMPORTED_MODULE_40__["TemplatePanelSelectedPageAsJsonDataProvider"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DefaultNewPageTemplateIdDataProvider", function() { return _page_TemplatePanelDataProvider__WEBPACK_IMPORTED_MODULE_40__["DefaultNewPageTemplateIdDataProvider"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DeleteTemplatePageDataProvider", function() { return _page_TemplatePanelDataProvider__WEBPACK_IMPORTED_MODULE_40__["DeleteTemplatePageDataProvider"]; });

/* harmony import */ var _recentDocuments_RecentDocumentsDataProvider__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./recentDocuments/RecentDocumentsDataProvider */ "ojNL");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RecentDocumentsDataProvider", function() { return _recentDocuments_RecentDocumentsDataProvider__WEBPACK_IMPORTED_MODULE_41__["RecentDocumentsDataProvider"]; });

/* harmony import */ var _location_BingLocationDataProvider__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./location/BingLocationDataProvider */ "8xPP");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BingLocationDataProvider", function() { return _location_BingLocationDataProvider__WEBPACK_IMPORTED_MODULE_42__["BingLocationDataProvider"]; });

/* harmony import */ var _Topics_TopicSuggestionSearchDataProvider__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./Topics/TopicSuggestionSearchDataProvider */ "EEym");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TopicSuggestionSearchDataProvider", function() { return _Topics_TopicSuggestionSearchDataProvider__WEBPACK_IMPORTED_MODULE_43__["TopicSuggestionSearchDataProvider"]; });

/* harmony import */ var _Topics_firstRun_TopicFirstRunDataProvider__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./Topics/firstRun/TopicFirstRunDataProvider */ "oDvX");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TopicFirstRunDataProvider", function() { return _Topics_firstRun_TopicFirstRunDataProvider__WEBPACK_IMPORTED_MODULE_44__["default"]; });

/* harmony import */ var _Topics_firstRun_TopicFirstRunKeys__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./Topics/firstRun/TopicFirstRunKeys */ "kzVb");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TopicFirstRunKeys", function() { return _Topics_firstRun_TopicFirstRunKeys__WEBPACK_IMPORTED_MODULE_45__["default"]; });

/* harmony import */ var _viewcount__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./viewcount */ "WzQS");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ViewCountDataProvider", function() { return _viewcount__WEBPACK_IMPORTED_MODULE_46__["ViewCountDataProvider"]; });

// building blocks


// news data providers and models














// DataProvider common exports






// SearchDataProvider exports









// ListDataProvider exports



// ContentRollupDataProvider exports

// Event exports





// TemplatePanelDataProvider exports


// BingLocationDataProvider exports

// TopicDataProvider






/***/ }),

/***/ "kYeP":
/*!***************************************!*\
  !*** ./lib/dataSources/list/index.js ***!
  \***************************************/
/*! exports provided: ListDataSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ListDataSource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ListDataSource */ "lBch");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ListDataSource", function() { return _ListDataSource__WEBPACK_IMPORTED_MODULE_0__["default"]; });




/***/ }),

/***/ "kyLF":
/*!********************************************************!*\
  !*** ./lib/dataProviders/common/enums/DocumentType.js ***!
  \********************************************************/
/*! exports provided: DocumentType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentType", function() { return DocumentType; });
/**
 * Do not change the values once in use.
 *
 * @internal
 */
// tslint:disable-next-line:typedef variable-name
var DocumentType = {
    Word: 1,
    Excel: 2,
    PowerPoint: 3,
    OneNote: 4,
    Visio: 5,
    // Not really necessary, but skipped a few for room for other Office doc types
    // before PDF which is not an Office doc type.  The order in the dropdown is
    // not mandated by these Ids.
    PDF: 10,
    // Other: 11, use if we allow adding a custom extension
    Any: 99
};


/***/ }),

/***/ "kzVb":
/*!****************************************************************!*\
  !*** ./lib/dataProviders/Topics/firstRun/TopicFirstRunKeys.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * @Copyright (c) Microsoft Corporation.  All rights reserved.
 */
/**
 *  @internal
 *
 * Keys are used in local storage
 */
var TopicFirstRunKeys;
(function (TopicFirstRunKeys) {
    TopicFirstRunKeys["KnowledgeCenter"] = "KnowledgeCenterFirstRun";
    TopicFirstRunKeys["KnowledgeManagementTopicPage"] = "KnowledgeManagementTopicPageFirstRun";
})(TopicFirstRunKeys || (TopicFirstRunKeys = {}));
/* harmony default export */ __webpack_exports__["default"] = (TopicFirstRunKeys);


/***/ }),

/***/ "lBch":
/*!************************************************!*\
  !*** ./lib/dataSources/list/ListDataSource.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _dataSources_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../dataSources/base */ "jnk8");
// @todo: VSO: 335499 Move data sources to odsp-datasources


/**
 * @internal
 */
var ListDataSource = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ListDataSource, _super);
    function ListDataSource() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Query for lists available within a web site with OData query functionality.
     *
     * Parameter values must be sanitized for the url beforehand.
     * @param webAbsoluteUrl - path to the site containing the lists
     * @param queryString - OData query string options including $orderby, $top, $skip, $filter, $select
     * See: http://www.odata.org/documentation/odata-version-2-0/uri-conventions/#QueryStringOptions
     */
    ListDataSource.prototype.getListsForWeb = function (webAbsoluteUrl, queryString) {
        return this.get(webAbsoluteUrl, '/_api/web/lists', queryString, 'ListDataSource', 'getListsForWeb', 
        // provide an accept header override to suppress odata output and reduce the response size
        {
            headers: {
                accept: 'application/json;odata.metadata=none'
            }
        }).then(function (jsonData) {
            return jsonData.value;
        });
    };
    /**
     * Query for to fetch details on a specific list under a given web.
     *
     * Parameter values must be sanitized for the url beforehand.
     * @param webAbsoluteUrl - path to the site containing the lists
     * @param listId - guid id of the list to fetch
     * @param queryString - OData query string options including $orderby, $top, $skip, $filter, $select
     * See: http://www.odata.org/documentation/odata-version-2-0/uri-conventions/#QueryStringOptions
     */
    ListDataSource.prototype.getListFromWeb = function (webAbsoluteUrl, listId, queryString) {
        return this.get(webAbsoluteUrl, "/_api/web/lists(guid'" + listId + "')", queryString, 'ListDataSource', 'getListFromWeb').then(function (jsonData) {
            return jsonData;
        });
    };
    /**
     * Query for to fetch details of default document libary under a given web.
     *
     * Parameter values must be sanitized for the url beforehand.
     * @param webAbsoluteUrl - path to the site containing the lists
     * @param queryString - OData query string options including $orderby, $top, $skip, $filter, $select
     * See: http://www.odata.org/documentation/odata-version-2-0/uri-conventions/#QueryStringOptions
     */
    ListDataSource.prototype.getDefaultDocumentLibrary = function (webAbsoluteUrl, queryString) {
        return this.get(webAbsoluteUrl, '/_api/web/DefaultDocumentLibrary', queryString, 'ListDataSource', 'getDefaultDocumentLibrary').then(function (jsonData) {
            return jsonData;
        });
    };
    return ListDataSource;
}(_dataSources_base__WEBPACK_IMPORTED_MODULE_1__["SPDataSource"]));
/* harmony default export */ __webpack_exports__["default"] = (ListDataSource);


/***/ }),

/***/ "lMGj":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/file-loader@1.1.11_webpack@4.44.2/node_modules/file-loader/dist/cjs.js?name=icon_[name]_[hash:8].[ext]!./lib/dataProviders/news/assets/helpitemimg2.png ***!
  \***************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "icon_helpitemimg2_4dca3af9.png";

/***/ }),

/***/ "mBlM":
/*!****************************************************!*\
  !*** ./lib/dataProviders/list/ListDataProvider.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/sp-diagnostics */ "ut3N");
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _dataSources_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../dataSources/base */ "jnk8");
/* harmony import */ var _BaseDataProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../BaseDataProvider */ "L/SE");
/* harmony import */ var _enums_ListRequestType__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./enums/ListRequestType */ "wo2m");
/* harmony import */ var _dataSources__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../dataSources */ "6ZIT");
/* harmony import */ var _loc_Strings_resx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./loc/Strings.resx */ "YkpB");
var _loc_Strings_resx__WEBPACK_IMPORTED_MODULE_6___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./loc/Strings.resx */ "YkpB", 1);







// @todo: VSO# 339962 - Cross site CAML queries. (see odsp-datasources ListItemRequester)
// @todo: VSO# 339965 - Get items from a persisted CAML view. (see odsp-datasources ListItemRequester)
/**
 * Provides a data provider for the SharePoint _api/web/lists endpoint.
 * @internal
 */
var ListDataProvider = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ListDataProvider, _super);
    function ListDataProvider() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.id = 'List';
        _this.title = _loc_Strings_resx__WEBPACK_IMPORTED_MODULE_6__["ListDataProviderTitle"];
        _this._logSource = _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__["_LogSource"].create('ListDataProvider');
        return _this;
    }
    // tslint:disable-next-line:no-any
    ListDataProvider.prototype.getItems = function (request) {
        var _this = this;
        switch (request.requestType) {
            case _enums_ListRequestType__WEBPACK_IMPORTED_MODULE_4__["ListRequestType"].List:
                if (!this._listDataSource) {
                    this._listDataSource = new _dataSources__WEBPACK_IMPORTED_MODULE_5__["ListDataSource"]({ spHttpClient: this.spHttpClient });
                }
                return this._listDataSource.getListsForWeb(this.baseEndPoint, _dataSources_base__WEBPACK_IMPORTED_MODULE_2__["ODataQueryStringBuilder"].generateQueryString(request));
            case _enums_ListRequestType__WEBPACK_IMPORTED_MODULE_4__["ListRequestType"].Item:
                if (!this._listItemDataSource) {
                    this._listItemDataSource = new _dataSources__WEBPACK_IMPORTED_MODULE_5__["ListItemDataSource"]({ spHttpClient: this.spHttpClient });
                }
                if (request.viewId) {
                    if (!this._listViewDataSource) {
                        this._listViewDataSource = new _dataSources__WEBPACK_IMPORTED_MODULE_5__["ListViewDataSource"]({ spHttpClient: this.spHttpClient });
                    }
                    return this._listViewDataSource
                        .updateViewXml(this.baseEndPoint, request.id, request.viewId, request.caml)
                        .then(function () {
                        return _this._listItemDataSource.getItemsForList(_this.baseEndPoint, request.id, request.title, request.isDefaultDocumentLibrary, request.renderOptions, undefined, undefined, undefined, undefined, request.audienceTarget, request.viewId);
                    });
                }
                else {
                    return this._listItemDataSource.getItemsForList(this.baseEndPoint, request.id, request.title, request.isDefaultDocumentLibrary, request.renderOptions, request.caml, undefined, undefined, undefined, request.audienceTarget);
                }
            case _enums_ListRequestType__WEBPACK_IMPORTED_MODULE_4__["ListRequestType"].Field:
                if (!this._listFieldDataSource) {
                    this._listFieldDataSource = new _dataSources__WEBPACK_IMPORTED_MODULE_5__["ListFieldDataSource"]({ spHttpClient: this.spHttpClient });
                }
                return this._listFieldDataSource.getFieldsForList(this.baseEndPoint, request.id, _dataSources_base__WEBPACK_IMPORTED_MODULE_2__["ODataQueryStringBuilder"].generateQueryString(request));
            default:
                var error = new Error(_loc_Strings_resx__WEBPACK_IMPORTED_MODULE_6__["ErrorInvalidListRequestType"]);
                _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__["_TraceLogger"].logError(this._logSource, error);
                return Promise.reject(error);
        }
    };
    /**
     * Add a view for the list.
     *
     * @param listId - GUID identifying which list to add the view
     */
    ListDataProvider.prototype.addView = function (listId) {
        if (!this._listViewDataSource) {
            this._listViewDataSource = new _dataSources__WEBPACK_IMPORTED_MODULE_5__["ListViewDataSource"]({ spHttpClient: this.spHttpClient });
        }
        return this._listViewDataSource.addView(this.baseEndPoint, listId);
    };
    return ListDataProvider;
}(_BaseDataProvider__WEBPACK_IMPORTED_MODULE_3__["BaseDataProvider"]));
/* harmony default export */ __webpack_exports__["default"] = (ListDataProvider);


/***/ }),

/***/ "mwqp":
/*!**********************!*\
  !*** ./lib/index.js ***!
  \**********************/
/*! exports provided: BaseDataProvider, BookmarksDataProvider, NewsUtilities, news, viewCounts, currentViewCounts, hubNews, newsDigest, multiSiteNews, myNews, staleViewCounts, NewsDataSource, newsDataSourceProp, _appendAudienceFilteringQueryParam, _appendLanguageOverrideQueryParam, _getExtraDataForLogging, NewsEmptyStateType, ExchangeViewCountsDataProvider, HubNewsDataProvider, MicroServiceNewsDataProvider, NewsDataProvider, NewsDigestDataProvider, NewsDigestUtilities, NewsSearchDataProvider, MultiSiteNewsDataProvider, MyNewsDataProvider, tryGetAuthoritativeSiteDetails, DocumentType, FilterOperator, FilterSince, FilterType, UserType, TokenUtilities, ContentLocation, ContentType, DeferredManagedProperties, KQLQueryBuilder, AUDIENCE_TARGET_KQL_QUERY, ManagedDataType, SortType, SearchDataProvider, PersonaSettingsCache, sanitizeSearchQueryParameter, CAMLQueryBuilder, ListRequestType, ListDataProvider, ContentRollupDataProvider, EventDataProvider, EventsSearchDataProvider, EventsListDataProvider, PageDataProvider, PageDataSource, _getWebPartDataFromPage, PageSearchDataProvider, TemplatePanelDataSource, TemplateSelectedPageCopyDataSource, TemplateSelectedPageAsJsonDataSource, DefaultNewPageTemplateIdDataSource, DeleteTemplatePageDataSource, TemplatePanelDataProvider, TemplatePanelSelectedPageCopyDataProvider, TemplatePanelSelectedPageAsJsonDataProvider, DefaultNewPageTemplateIdDataProvider, DeleteTemplatePageDataProvider, RecentDocumentsDataProvider, BingLocationDataProvider, TopicSuggestionSearchDataProvider, TopicFirstRunDataProvider, TopicFirstRunKeys, ViewCountDataProvider, ListDataSource, ListFieldDataSource, ListFieldType, ListItemDataSource, SPRenderListDataOptions, ListViewDataSource, BaseDataSource, ODataQueryStringBuilder, SPDataSource, SPHomeHttpClient, SPHomeMicroserviceNotAvailableError, SeeAllPageLayoutWebparts, SearchAPIRequest, SearchAPISortDirection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dataProviders_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dataProviders/index */ "jrLr");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaseDataProvider", function() { return _dataProviders_index__WEBPACK_IMPORTED_MODULE_0__["BaseDataProvider"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BookmarksDataProvider", function() { return _dataProviders_index__WEBPACK_IMPORTED_MODULE_0__["BookmarksDataProvider"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NewsUtilities", function() { return _dataProviders_index__WEBPACK_IMPORTED_MODULE_0__["NewsUtilities"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "news", function() { return _dataProviders_index__WEBPACK_IMPORTED_MODULE_0__["news"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "viewCounts", function() { return _dataProviders_index__WEBPACK_IMPORTED_MODULE_0__["viewCounts"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "currentViewCounts", function() { return _dataProviders_index__WEBPACK_IMPORTED_MODULE_0__["currentViewCounts"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hubNews", function() { return _dataProviders_index__WEBPACK_IMPORTED_MODULE_0__["hubNews"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "newsDigest", function() { return _dataProviders_index__WEBPACK_IMPORTED_MODULE_0__["newsDigest"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "multiSiteNews", function() { return _dataProviders_index__WEBPACK_IMPORTED_MODULE_0__["multiSiteNews"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "myNews", function() { return _dataProviders_index__WEBPACK_IMPORTED_MODULE_0__["myNews"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staleViewCounts", function() { return _dataProviders_index__WEBPACK_IMPORTED_MODULE_0__["staleViewCounts"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NewsDataSource", function() { return _dataProviders_index__WEBPACK_IMPORTED_MODULE_0__["NewsDataSource"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "newsDataSourceProp", function() { return _dataProviders_index__WEBPACK_IMPORTED_MODULE_0__["newsDataSourceProp"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_appendAudienceFilteringQueryParam", function() { return _dataProviders_index__WEBPACK_IMPORTED_MODULE_0__["_appendAudienceFilteringQueryParam"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_appendLanguageOverrideQueryParam", function() { return _dataProviders_index__WEBPACK_IMPORTED_MODULE_0__["_appendLanguageOverrideQueryParam"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_getExtraDataForLogging", function() { return _dataProviders_index__WEBPACK_IMPORTED_MODULE_0__["_getExtraDataForLogging"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NewsEmptyStateType", function() { return _dataProviders_index__WEBPACK_IMPORTED_MODULE_0__["NewsEmptyStateType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ExchangeViewCountsDataProvider", function() { return _dataProviders_index__WEBPACK_IMPORTED_MODULE_0__["ExchangeViewCountsDataProvider"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HubNewsDataProvider", function() { return _dataProviders_index__WEBPACK_IMPORTED_MODULE_0__["HubNewsDataProvider"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MicroServiceNewsDataProvider", function() { return _dataProviders_index__WEBPACK_IMPORTED_MODULE_0__["MicroServiceNewsDataProvider"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NewsDataProvider", function() { return _dataProviders_index__WEBPACK_IMPORTED_MODULE_0__["NewsDataProvider"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NewsDigestDataProvider", function() { return _dataProviders_index__WEBPACK_IMPORTED_MODULE_0__["NewsDigestDataProvider"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NewsDigestUtilities", function() { return _dataProviders_index__WEBPACK_IMPORTED_MODULE_0__["NewsDigestUtilities"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NewsSearchDataProvider", function() { return _dataProviders_index__WEBPACK_IMPORTED_MODULE_0__["NewsSearchDataProvider"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MultiSiteNewsDataProvider", function() { return _dataProviders_index__WEBPACK_IMPORTED_MODULE_0__["MultiSiteNewsDataProvider"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MyNewsDataProvider", function() { return _dataProviders_index__WEBPACK_IMPORTED_MODULE_0__["MyNewsDataProvider"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tryGetAuthoritativeSiteDetails", function() { return _dataProviders_index__WEBPACK_IMPORTED_MODULE_0__["tryGetAuthoritativeSiteDetails"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DocumentType", function() { return _dataProviders_index__WEBPACK_IMPORTED_MODULE_0__["DocumentType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FilterOperator", function() { return _dataProviders_index__WEBPACK_IMPORTED_MODULE_0__["FilterOperator"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FilterSince", function() { return _dataProviders_index__WEBPACK_IMPORTED_MODULE_0__["FilterSince"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FilterType", function() { return _dataProviders_index__WEBPACK_IMPORTED_MODULE_0__["FilterType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserType", function() { return _dataProviders_index__WEBPACK_IMPORTED_MODULE_0__["UserType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TokenUtilities", function() { return _dataProviders_index__WEBPACK_IMPORTED_MODULE_0__["TokenUtilities"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ContentLocation", function() { return _dataProviders_index__WEBPACK_IMPORTED_MODULE_0__["ContentLocation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ContentType", function() { return _dataProviders_index__WEBPACK_IMPORTED_MODULE_0__["ContentType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DeferredManagedProperties", function() { return _dataProviders_index__WEBPACK_IMPORTED_MODULE_0__["DeferredManagedProperties"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KQLQueryBuilder", function() { return _dataProviders_index__WEBPACK_IMPORTED_MODULE_0__["KQLQueryBuilder"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AUDIENCE_TARGET_KQL_QUERY", function() { return _dataProviders_index__WEBPACK_IMPORTED_MODULE_0__["AUDIENCE_TARGET_KQL_QUERY"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ManagedDataType", function() { return _dataProviders_index__WEBPACK_IMPORTED_MODULE_0__["ManagedDataType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SortType", function() { return _dataProviders_index__WEBPACK_IMPORTED_MODULE_0__["SortType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SearchDataProvider", function() { return _dataProviders_index__WEBPACK_IMPORTED_MODULE_0__["SearchDataProvider"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PersonaSettingsCache", function() { return _dataProviders_index__WEBPACK_IMPORTED_MODULE_0__["PersonaSettingsCache"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sanitizeSearchQueryParameter", function() { return _dataProviders_index__WEBPACK_IMPORTED_MODULE_0__["sanitizeSearchQueryParameter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CAMLQueryBuilder", function() { return _dataProviders_index__WEBPACK_IMPORTED_MODULE_0__["CAMLQueryBuilder"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ListRequestType", function() { return _dataProviders_index__WEBPACK_IMPORTED_MODULE_0__["ListRequestType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ListDataProvider", function() { return _dataProviders_index__WEBPACK_IMPORTED_MODULE_0__["ListDataProvider"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ContentRollupDataProvider", function() { return _dataProviders_index__WEBPACK_IMPORTED_MODULE_0__["ContentRollupDataProvider"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EventDataProvider", function() { return _dataProviders_index__WEBPACK_IMPORTED_MODULE_0__["EventDataProvider"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EventsSearchDataProvider", function() { return _dataProviders_index__WEBPACK_IMPORTED_MODULE_0__["EventsSearchDataProvider"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EventsListDataProvider", function() { return _dataProviders_index__WEBPACK_IMPORTED_MODULE_0__["EventsListDataProvider"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PageDataProvider", function() { return _dataProviders_index__WEBPACK_IMPORTED_MODULE_0__["PageDataProvider"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PageDataSource", function() { return _dataProviders_index__WEBPACK_IMPORTED_MODULE_0__["PageDataSource"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_getWebPartDataFromPage", function() { return _dataProviders_index__WEBPACK_IMPORTED_MODULE_0__["_getWebPartDataFromPage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PageSearchDataProvider", function() { return _dataProviders_index__WEBPACK_IMPORTED_MODULE_0__["PageSearchDataProvider"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TemplatePanelDataSource", function() { return _dataProviders_index__WEBPACK_IMPORTED_MODULE_0__["TemplatePanelDataSource"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TemplateSelectedPageCopyDataSource", function() { return _dataProviders_index__WEBPACK_IMPORTED_MODULE_0__["TemplateSelectedPageCopyDataSource"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TemplateSelectedPageAsJsonDataSource", function() { return _dataProviders_index__WEBPACK_IMPORTED_MODULE_0__["TemplateSelectedPageAsJsonDataSource"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DefaultNewPageTemplateIdDataSource", function() { return _dataProviders_index__WEBPACK_IMPORTED_MODULE_0__["DefaultNewPageTemplateIdDataSource"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DeleteTemplatePageDataSource", function() { return _dataProviders_index__WEBPACK_IMPORTED_MODULE_0__["DeleteTemplatePageDataSource"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TemplatePanelDataProvider", function() { return _dataProviders_index__WEBPACK_IMPORTED_MODULE_0__["TemplatePanelDataProvider"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TemplatePanelSelectedPageCopyDataProvider", function() { return _dataProviders_index__WEBPACK_IMPORTED_MODULE_0__["TemplatePanelSelectedPageCopyDataProvider"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TemplatePanelSelectedPageAsJsonDataProvider", function() { return _dataProviders_index__WEBPACK_IMPORTED_MODULE_0__["TemplatePanelSelectedPageAsJsonDataProvider"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DefaultNewPageTemplateIdDataProvider", function() { return _dataProviders_index__WEBPACK_IMPORTED_MODULE_0__["DefaultNewPageTemplateIdDataProvider"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DeleteTemplatePageDataProvider", function() { return _dataProviders_index__WEBPACK_IMPORTED_MODULE_0__["DeleteTemplatePageDataProvider"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RecentDocumentsDataProvider", function() { return _dataProviders_index__WEBPACK_IMPORTED_MODULE_0__["RecentDocumentsDataProvider"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BingLocationDataProvider", function() { return _dataProviders_index__WEBPACK_IMPORTED_MODULE_0__["BingLocationDataProvider"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TopicSuggestionSearchDataProvider", function() { return _dataProviders_index__WEBPACK_IMPORTED_MODULE_0__["TopicSuggestionSearchDataProvider"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TopicFirstRunDataProvider", function() { return _dataProviders_index__WEBPACK_IMPORTED_MODULE_0__["TopicFirstRunDataProvider"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TopicFirstRunKeys", function() { return _dataProviders_index__WEBPACK_IMPORTED_MODULE_0__["TopicFirstRunKeys"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ViewCountDataProvider", function() { return _dataProviders_index__WEBPACK_IMPORTED_MODULE_0__["ViewCountDataProvider"]; });

/* harmony import */ var _dataSources__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dataSources */ "6ZIT");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ListDataSource", function() { return _dataSources__WEBPACK_IMPORTED_MODULE_1__["ListDataSource"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ListFieldDataSource", function() { return _dataSources__WEBPACK_IMPORTED_MODULE_1__["ListFieldDataSource"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ListFieldType", function() { return _dataSources__WEBPACK_IMPORTED_MODULE_1__["ListFieldType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ListItemDataSource", function() { return _dataSources__WEBPACK_IMPORTED_MODULE_1__["ListItemDataSource"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SPRenderListDataOptions", function() { return _dataSources__WEBPACK_IMPORTED_MODULE_1__["SPRenderListDataOptions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ListViewDataSource", function() { return _dataSources__WEBPACK_IMPORTED_MODULE_1__["ListViewDataSource"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaseDataSource", function() { return _dataSources__WEBPACK_IMPORTED_MODULE_1__["BaseDataSource"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ODataQueryStringBuilder", function() { return _dataSources__WEBPACK_IMPORTED_MODULE_1__["ODataQueryStringBuilder"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SPDataSource", function() { return _dataSources__WEBPACK_IMPORTED_MODULE_1__["SPDataSource"]; });

/* harmony import */ var _httpClients__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./httpClients */ "e+fh");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SPHomeHttpClient", function() { return _httpClients__WEBPACK_IMPORTED_MODULE_2__["SPHomeHttpClient"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SPHomeMicroserviceNotAvailableError", function() { return _httpClients__WEBPACK_IMPORTED_MODULE_2__["SPHomeMicroserviceNotAvailableError"]; });

/* harmony import */ var _models_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./models/index */ "JEu8");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SeeAllPageLayoutWebparts", function() { return _models_index__WEBPACK_IMPORTED_MODULE_3__["SeeAllPageLayoutWebparts"]; });

/* harmony import */ var _search_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./search/index */ "S/19");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SearchAPIRequest", function() { return _search_index__WEBPACK_IMPORTED_MODULE_4__["SearchAPIRequest"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SearchAPISortDirection", function() { return _search_index__WEBPACK_IMPORTED_MODULE_4__["SearchAPISortDirection"]; });








/***/ }),

/***/ "nDsE":
/*!****************************************************!*\
  !*** ./lib/dataProviders/search/enums/SortType.js ***!
  \****************************************************/
/*! exports provided: SortType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortType", function() { return SortType; });
/**
 * @internal
 */
// tslint:disable-next-line:typedef variable-name
var SortType = {
    MostRecent: 1,
    MostViewed: 2,
    Trending: 3,
    FieldAscending: 4,
    FieldDescending: 5
};


/***/ }),

/***/ "nJGZ":
/*!*******************************************************!*\
  !*** ./lib/dataProviders/common/TieredCacheHelper.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/**
 * @copyright Microsoft Corporation. All rights reserved.
 */

/**
 * Processes the response result to TProcessed if it is needed
 * @param response the response
 * @param isRawData the callback to test if the response data needs to be processed
 * @param processRawData the callback to process the rawData
 * @param args extra args to process the raw data
 * @internal
 */
var TieredCacheHelper = /** @class */ (function () {
    function TieredCacheHelper() {
    }
    TieredCacheHelper.processResponseRawData = function (response, isRawData, processRawData) {
        var args = []; // tslint:disable-line:no-any
        for (var _i = 3 // tslint:disable-line:no-any
        ; _i < arguments.length // tslint:disable-line:no-any
        ; _i++ // tslint:disable-line:no-any
        ) {
            args[_i - 3] = arguments[_i]; // tslint:disable-line:no-any
        }
        return response.then(function (data) {
            return isRawData(data) ? processRawData.apply(void 0, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])([data], args)) : data;
        });
    };
    TieredCacheHelper.useStalePropName = 'useStale';
    TieredCacheHelper.parentKeyOverride = 'parentKeyOverride';
    TieredCacheHelper.onlyIndexedDB = 'onlyIndexedDB';
    TieredCacheHelper.onlyMySiteCache = 'onlyMySiteCache';
    return TieredCacheHelper;
}());
/* harmony default export */ __webpack_exports__["default"] = (TieredCacheHelper);


/***/ }),

/***/ "nNRp":
/*!***********************************************************!*\
  !*** ./lib/dataProviders/search/enums/ContentLocation.js ***!
  \***********************************************************/
/*! exports provided: ContentLocation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentLocation", function() { return ContentLocation; });
// Copyright (c) Microsoft Corporation. All rights reserved.
/**
 * @internal
 */
// tslint:disable-next-line:typedef variable-name
var ContentLocation = {
    CurrentSite: 1,
    CurrentSiteCollection: 2,
    AllSites: 3,
    CurrentSiteDocumentLibrary: 4,
    AllSitesInTheHub: 5,
    CurrentSitePageLibrary: 6,
    CurrentSiteEventsList: 7,
    SelectedSites: 99
};


/***/ }),

/***/ "oDvX":
/*!************************************************************************!*\
  !*** ./lib/dataProviders/Topics/firstRun/TopicFirstRunDataProvider.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ms/sp-telemetry */ "2q6Q");
/* harmony import */ var _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @microsoft/sp-diagnostics */ "ut3N");
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _microsoft_sp_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @microsoft/sp-http */ "vlQI");
/* harmony import */ var _microsoft_sp_http__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_http__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ms/odsp-utilities-bundle */ "y88i");
/* harmony import */ var _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _TopicFirstRunFailReason__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./TopicFirstRunFailReason */ "W83Y");
/* harmony import */ var _TopicFirstRunCacheManager__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./TopicFirstRunCacheManager */ "Pu3M");
/* harmony import */ var _TopicFirstRunKeys__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./TopicFirstRunKeys */ "kzVb");
/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Constants */ "TZiv");
/**
 * @Copyright (c) Microsoft Corporation.  All rights reserved.
 */
var _a;

/* tslint:disable:no-any */








/**
 * map from the local names (used in localStorage) to the names for the bits on the server
 */
var serverFirstRunKeyMap = (_a = {},
    _a[_TopicFirstRunKeys__WEBPACK_IMPORTED_MODULE_7__["default"].KnowledgeCenter] = 'sharePointKnowledgeCenterFirstRun',
    _a[_TopicFirstRunKeys__WEBPACK_IMPORTED_MODULE_7__["default"].KnowledgeManagementTopicPage] = 'sharePointKnowledgeManagementTopicPageFirstRun',
    _a);
/**
 *  @internal
 */
var TopicFirstRunDataProvider = /** @class */ (function () {
    function TopicFirstRunDataProvider(pageContext, spHttpClient) {
        this._spHttpClient = spHttpClient;
        this._pageContext = pageContext;
    }
    TopicFirstRunDataProvider._domainUrl = function () {
        return decodeURIComponent(window.location.protocol + "//" + window.location.host);
    };
    /**
     * Get error extra data from a response
     */
    TopicFirstRunDataProvider._getErrorExtraData = function (response) {
        var correlationId = response.headers.get('sprequestguid') || '';
        var spVersion = response.headers.get('microsoftsharepointteamservices') || '';
        return {
            status: response.status,
            correlationId: correlationId,
            spVersion: spVersion
        };
    };
    /**
     * Whether run specific page first time, read from localStorage or server
     * @param key - page key
     */
    TopicFirstRunDataProvider.prototype.getIsFirstRun = function (key) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var firstRunCache;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        firstRunCache = _TopicFirstRunCacheManager__WEBPACK_IMPORTED_MODULE_6__["default"].getIsFirstRun(key);
                        if (!(typeof firstRunCache === 'boolean')) return [3 /*break*/, 1];
                        _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__["_TraceLogger"].logVerbose(TopicFirstRunDataProvider._logSource, _Constants__WEBPACK_IMPORTED_MODULE_8__["default"].topicFirstRun + " is " + firstRunCache + " in the local storage");
                        return [2 /*return*/, firstRunCache];
                    case 1: return [4 /*yield*/, this._getServerIsFirstRun(key)];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Set server and localStorage whether run specific page first time
     * @param key - page key
     * @param isFirstRun - whether run the page first time
     */
    TopicFirstRunDataProvider.prototype.setIsFirstRun = function (key, isFirstRun) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.setServerIsFirstRun(key, isFirstRun)];
                    case 1:
                        _a.sent();
                        this.setLocalIsFirstRun(key, isFirstRun);
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Set server whether run specific page first time
     * @param key - page key
     * @param isFirstRun - whether run the page first time
     */
    TopicFirstRunDataProvider.prototype.setServerIsFirstRun = function (key, isFirstRun) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var firstRunServerFlag, qosMonitor, data, response, httpError;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        firstRunServerFlag = !isFirstRun;
                        qosMonitor = new _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_1__["_QosMonitor"](_Constants__WEBPACK_IMPORTED_MODULE_8__["default"].topicFirstRunGetAPIDPPrefix);
                        data = {};
                        data[serverFirstRunKeyMap[key]] = firstRunServerFlag;
                        return [4 /*yield*/, this._spHttpClient.post(this._bitRestUrl, _microsoft_sp_http__WEBPACK_IMPORTED_MODULE_3__["SPHttpClient"].configurations.v1, {
                                body: JSON.stringify(data),
                                headers: {
                                    Accept: '*/*, application/json; odata=minimalmetadata',
                                    'X-HTTP-Method': 'PATCH',
                                    'Content-Type': 'application/json; odata=minimalmetadata',
                                    'X-ClientType': 'PageAuthoring_SetFirstRunBit'
                                }
                            })];
                    case 1:
                        response = _a.sent();
                        if (response.ok) {
                            _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__["_TraceLogger"].logVerbose(TopicFirstRunDataProvider._logSource, "Request successfully for setting page authoring first run, the status: " + firstRunServerFlag);
                            qosMonitor.writeSuccess();
                        }
                        else {
                            httpError = new Error(response.statusText);
                            _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__["_TraceLogger"].logError(TopicFirstRunDataProvider._logSource, httpError);
                            qosMonitor.writeUnexpectedFailure(_Constants__WEBPACK_IMPORTED_MODULE_8__["default"].topicFirstRunSetAPIDPPrefix, httpError, TopicFirstRunDataProvider._getErrorExtraData(response));
                            throw httpError;
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Set localStorage whether run specific page first time
     * @param key - page key
     * @param isFirstRun - whether run the page first time
     */
    TopicFirstRunDataProvider.prototype.setLocalIsFirstRun = function (key, isFirstRun) {
        _TopicFirstRunCacheManager__WEBPACK_IMPORTED_MODULE_6__["default"].setIsFirstRun(key, isFirstRun);
    };
    TopicFirstRunDataProvider.prototype._getServerIsFirstRun = function (key) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var qosMonitor, response, data, firstRunBit, httpError, extraData, error_1;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        qosMonitor = new _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_1__["_QosMonitor"](_Constants__WEBPACK_IMPORTED_MODULE_8__["default"].topicFirstRunGetAPIDPPrefix);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 6, , 7]);
                        return [4 /*yield*/, this._spHttpClient.get(this._retrieveBitRestUrl(key), _microsoft_sp_http__WEBPACK_IMPORTED_MODULE_3__["SPHttpClient"].configurations.v1, {
                                headers: {
                                    'X-ClientType': 'PageAuthoring_GetFirstRunBit'
                                }
                            })];
                    case 2:
                        response = _a.sent();
                        if (!response.ok) return [3 /*break*/, 4];
                        return [4 /*yield*/, response.json()];
                    case 3:
                        data = _a.sent();
                        firstRunBit = data[serverFirstRunKeyMap[key]];
                        _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__["_TraceLogger"].logVerbose(TopicFirstRunDataProvider._logSource, "Retrieving first run bit " + key + " successfully, the status: " + !firstRunBit);
                        qosMonitor.writeSuccess();
                        // Reverse the result as server return false if data not set
                        return [2 /*return*/, !firstRunBit];
                    case 4:
                        httpError = new Error(response.statusText);
                        extraData = TopicFirstRunDataProvider._getErrorExtraData(response);
                        if (response.status === 403) {
                            qosMonitor.writeExpectedFailure(_TopicFirstRunFailReason__WEBPACK_IMPORTED_MODULE_5__["default"].GetFirstRunHTTPError403, httpError, extraData);
                            return [2 /*return*/, false];
                        }
                        else {
                            _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__["_TraceLogger"].logError(TopicFirstRunDataProvider._logSource, httpError);
                            qosMonitor.writeUnexpectedFailure(_TopicFirstRunFailReason__WEBPACK_IMPORTED_MODULE_5__["default"].GetFirstRunHTTPStatusError, httpError, extraData);
                            return [2 /*return*/, Promise.reject(httpError)];
                        }
                        _a.label = 5;
                    case 5: return [3 /*break*/, 7];
                    case 6:
                        error_1 = _a.sent();
                        _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__["_TraceLogger"].logError(TopicFirstRunDataProvider._logSource, error_1);
                        qosMonitor.writeUnexpectedFailure(_TopicFirstRunFailReason__WEBPACK_IMPORTED_MODULE_5__["default"].GetFirstRunHTTPRequestError, error_1);
                        return [2 /*return*/, Promise.reject(error_1)];
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    TopicFirstRunDataProvider.prototype._retrieveBitRestUrl = function (key) {
        return this._bitRestUrl + "?$select=" + serverFirstRunKeyMap[key];
    };
    Object.defineProperty(TopicFirstRunDataProvider.prototype, "_bitRestUrl", {
        /**
         * Gets the REST endpoint Url for retriving user property
         */
        get: function () {
            return TopicFirstRunDataProvider._domainUrl() + "/_api/SP.Directory.DirectorySession/GetGraphUser(principalName='" + _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_4__["UriEncoding"].encodeURIComponent(this._pageContext.legacyPageContext.userLoginName) + "')";
        },
        enumerable: true,
        configurable: true
    });
    TopicFirstRunDataProvider._logSource = _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__["_LogSource"].create(_Constants__WEBPACK_IMPORTED_MODULE_8__["default"].topicFirstRunDPLogPrefix);
    return TopicFirstRunDataProvider;
}());
/* harmony default export */ __webpack_exports__["default"] = (TopicFirstRunDataProvider);


/***/ }),

/***/ "ojNL":
/*!**************************************************************************!*\
  !*** ./lib/dataProviders/recentDocuments/RecentDocumentsDataProvider.js ***!
  \**************************************************************************/
/*! exports provided: RecentDocumentsDataProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecentDocumentsDataProvider", function() { return RecentDocumentsDataProvider; });
/* harmony import */ var _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ms/sp-telemetry */ "2q6Q");
/* harmony import */ var _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ms/odsp-utilities-bundle */ "y88i");
/* harmony import */ var _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__);



var ONE_NOTE_EXTENSION = 'one';
// Use a random GUID as X-Office-Version
var OFFICE_VERSION = 'aec61d34-20ca-455f-ba08-4fbe7e366f81';
// From	\ocscommon\dll\Definitions\Applications\ApplicationInfo.cs, SPO is 120
var OFFICE_APPLICATION = '120';
// spo web platform
var OFFICE_PLATFORM = 'Web';
/**
 * A data provider that queries the MRU API for the user's recent documents
 * @internal
 */
var RecentDocumentsDataProvider = /** @class */ (function () {
    function RecentDocumentsDataProvider(pageContext) {
        this.id = 'RecentDocuments';
        this.title = 'Recent documents';
        this._pageContext = pageContext;
    }
    RecentDocumentsDataProvider.prototype.requestData = function (requestInfo) {
        var _this = this;
        var qosMonitor = new _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_0__["_QosMonitor"]('RecentDocumentsDataProvider.getRecentDocuments');
        return requestInfo.authToken
            .then(function (token) {
            return fetch(_this._getApiUrl(requestInfo), _this._getHttpConfig(token));
        })
            .then(function (response) {
            qosMonitor.writeSuccess();
            return response.json();
        })
            .catch(function (error) {
            qosMonitor.writeUnexpectedFailure('Unexpected', error);
            return undefined;
        })
            .then(function (jsonResponse) {
            if (jsonResponse && jsonResponse.documents && jsonResponse.documents.items) {
                return jsonResponse.documents.items.map(function (document) {
                    var accessDate = new Date(document.time_stamp);
                    var filePathUrl = document.url.substring(0, document.url.lastIndexOf('/'));
                    // document.extension is not specified by the MRU API for OneNote documents
                    var extension = document.app === 'OneNote' ? ONE_NOTE_EXTENSION : document.extension;
                    var documentUri = new _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_1__["Uri"](document.url);
                    documentUri.setQueryParameter('web', '1');
                    return {
                        fileName: document.title,
                        fileUrl: documentUri.toString(),
                        filePathSegments: document.display_path,
                        filePathUrl: filePathUrl,
                        fileType: document.app,
                        fileExtension: extension,
                        lastAccessedRelative: accessDate
                    };
                });
            }
            return [];
        });
    };
    RecentDocumentsDataProvider.prototype._getApiUrl = function (requestInfo) {
        var url = this._pageContext.legacyPageContext.msMruEndpointUrl;
        var endpoint = '/ocs/v2/recent/docs';
        var queryParams = "apps=Word,Excel,PowerPoint,Visio,OneNote,Sway,PdfViewer&show=" + (requestInfo.numDocsToRequest || 50) + "&sort=Date";
        return "" + url + endpoint + "?" + queryParams;
    };
    RecentDocumentsDataProvider.prototype._getHttpConfig = function (authToken) {
        var headers = new Headers();
        headers.set('Authorization', "Bearer " + authToken);
        headers.set('Content-Type', 'application/json');
        headers.set('X-Office-Application', OFFICE_APPLICATION);
        headers.set('X-Office-Platform', OFFICE_PLATFORM);
        headers.set('X-Office-Version', OFFICE_VERSION);
        headers.set('X-CorrelationId', _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__["Guid"].newGuid().toString());
        return {
            headers: headers
        };
    };
    return RecentDocumentsDataProvider;
}());



/***/ }),

/***/ "pKc4":
/*!******************************************************!*\
  !*** ./lib/dataProviders/event/EventDataProvider.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _microsoft_sp_page_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/sp-page-context */ "X+PM");
/* harmony import */ var _microsoft_sp_page_context__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_page_context__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _microsoft_sp_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @microsoft/sp-http */ "vlQI");
/* harmony import */ var _microsoft_sp_http__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_http__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @microsoft/sp-lodash-subset */ "Pk8u");
/* harmony import */ var _microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ms/sp-telemetry */ "2q6Q");
/* harmony import */ var _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ms/sp-component-utilities */ "hiL/");
/* harmony import */ var _ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _EventCAMLQueryBuilder__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./EventCAMLQueryBuilder */ "1/hL");
/* harmony import */ var _EventTimeZoneUtilities__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./EventTimeZoneUtilities */ "SkGr");
/* harmony import */ var _EventAPIUtilities__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./EventAPIUtilities */ "3KUD");
/* harmony import */ var _DataProviderFlights__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../DataProviderFlights */ "Xkwe");
/* harmony import */ var _Strings_resx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Strings.resx */ "fP0x");
var _Strings_resx__WEBPACK_IMPORTED_MODULE_11___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./Strings.resx */ "fP0x", 1);
/**
 * @copyright (c) Microsoft Corporation. All rights reserved.
 * @file EventDataProvider.ts
 */













/**
 * Data provider to retrieve and manipulate SharePoint event list.
 * TODO VSO #333107: Make Event Data Provider generic
 * @internal
 */
var EventDataProvider = /** @class */ (function () {
    function EventDataProvider(options) {
        this.id = 'Event';
        this.title = 'EventDataProvider';
        /**
         * The map from event URI to event item ETag value.
         * This value is maintained inside data provider.
         *
         * @remarks
         * The event URI constructs as `${webAbsoluteUrl}/_api/web/Lists(guid'${listGuid}')/items(${eventId})`
         */
        this._eventToETag = new Map();
        this.options = options;
        this._serviceScope = options.serviceScope;
    }
    EventDataProvider.prototype.requestData = function (requestOptions) {
        var _this = this;
        if (!requestOptions.listId) {
            return Promise.resolve([]);
        }
        // Start date must NOT be after end date, otherwise it produces inaccurate and confusing results.
        if (requestOptions.startDate &&
            requestOptions.endDate &&
            new Date(requestOptions.startDate) > new Date(requestOptions.endDate)) {
            return Promise.resolve([]);
        }
        // These headers are critical to request data with CAML.
        var headers = {
            Accept: 'application/json;odata=verbose',
            'Content-Type': 'application/json;odata=verbose',
            'Odata-Version': '3.0'
        };
        var timeZone;
        return this._afterServiceScopeFinished()
            .then(function (_a) {
            var pageContext = _a.pageContext, httpClient = _a.httpClient;
            var webAbsoluteUrl = _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_4__["UrlUtilities"].removeEndSlash(pageContext.web.absoluteUrl);
            timeZone = _this._getTimeZoneFromPageContext(pageContext);
            var listGuid = requestOptions.listId.toString();
            var queryString = _this._buildQueryString(requestOptions);
            var url = webAbsoluteUrl + "/_api/web/Lists(guid'" + listGuid + "')/RenderListDataAsStream?" + queryString;
            var body = JSON.stringify({
                parameters: {
                    __metadata: { type: 'SP.RenderListDataParameters' },
                    DatesInUtc: true,
                    RenderOptions: 3,
                    ViewXml: Object(_EventCAMLQueryBuilder__WEBPACK_IMPORTED_MODULE_7__["buildCAMLQuery"])(requestOptions, timeZone),
                    AudienceTarget: requestOptions.audienceTarget
                }
            });
            return httpClient.post(url, _microsoft_sp_http__WEBPACK_IMPORTED_MODULE_2__["SPHttpClient"].configurations.v1, { body: body, headers: headers });
        })
            .then(_EventAPIUtilities__WEBPACK_IMPORTED_MODULE_9__["parseResponse"])
            .then(function (response) {
            if (response && response.ListData && response.ListData.Row instanceof Array) {
                return response.ListData.Row.map(function (row) {
                    var _a;
                    return ({
                        id: row.ID,
                        category: row.Category,
                        title: _this._htmlDecode(row.Title),
                        description: undefined,
                        // fAllDayEvent.value has two values: '1' and '0', which represent all day event and not all day event.
                        startTime: _EventTimeZoneUtilities__WEBPACK_IMPORTED_MODULE_8__["default"].dateStringToLocalDate(row.EventDate, timeZone, row['fAllDayEvent.value'] === '1'),
                        endTime: _EventTimeZoneUtilities__WEBPACK_IMPORTED_MODULE_8__["default"].dateStringToLocalDate(row.EndDate, timeZone, row['fAllDayEvent.value'] === '1'),
                        allDay: row['fAllDayEvent.value'] === '1',
                        location: _this._htmlDecode(row.Location),
                        attendees: undefined,
                        containsAudiences: Object(_DataProviderFlights__WEBPACK_IMPORTED_MODULE_10__["isNewApiToCREventFlightEnabled"])()
                            ? // tslint:disable-next-line:no-string-literal
                                ((_a = row['_ModernAudienceTargetUserField']) === null || _a === void 0 ? void 0 : _a.length) > 0
                            : undefined,
                        prevPageQuery: _this._constructPageQuery(response.ListData.PrevHref),
                        nextPageQuery: _this._constructPageQuery(response.ListData.NextHref),
                        // Following fields needn't be retrieved with CAML provider.
                        geolocation: undefined,
                        linkUrl: '',
                        linkName: '',
                        bannerUrl: Object(_DataProviderFlights__WEBPACK_IMPORTED_MODULE_10__["isEventsWebPartFluentFlightEnabled"])() ? String(row.BannerUrl) : undefined,
                        webName: '',
                        webUrl: ''
                    });
                });
            }
            else {
                throw new Error(_Strings_resx__WEBPACK_IMPORTED_MODULE_11__["DataNotExistErrorMessage"]);
            }
        });
    };
    EventDataProvider.prototype.requestEventItem = function (listId, eventId) {
        return this._requestEventItem(listId, eventId, false /* useUTC */);
    };
    EventDataProvider.prototype.requestUTCEventItem = function (webAbsoluteUrl, listId, eventId) {
        return this._requestEventItem(listId, eventId, true /* useUTC */, webAbsoluteUrl);
    };
    EventDataProvider.prototype.updateEventItem = function (listId, eventId, event) {
        var _this = this;
        if (!Object(_DataProviderFlights__WEBPACK_IMPORTED_MODULE_10__["isNewApiToCREventFlightEnabled"])()) {
            return this._updateEventItemFlightDisabled(listId, eventId, event);
        }
        var eventUri;
        return this._afterServiceScopeFinished()
            .then(function (_a) {
            var pageContext = _a.pageContext, httpClient = _a.httpClient;
            var webAbsoluteUrl = _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_4__["UrlUtilities"].removeEndSlash(pageContext.web.absoluteUrl);
            eventUri = webAbsoluteUrl + "/_api/web/Lists(guid'" + listId.toString() + "')/items('" + eventId + "')/ValidateUpdateListItem()";
            var headers = {
                'If-Match': _this._eventToETag.get(eventUri),
                'Content-Type': 'application/json;charset=utf-8'
            };
            return _this._getEventPeopleIds(event.attendees).then(function (infos) {
                var body = JSON.stringify(Object(_EventAPIUtilities__WEBPACK_IMPORTED_MODULE_9__["constructEventPayload"])(event, infos.map(function (info) { return info.UserPrincipalName || info.LoginName; })));
                return httpClient.post(eventUri, _microsoft_sp_http__WEBPACK_IMPORTED_MODULE_2__["SPHttpClient"].configurations.v1, { headers: headers, body: body });
            });
        })
            .then(function (response) { return Object(_EventAPIUtilities__WEBPACK_IMPORTED_MODULE_9__["parseResponse"])(response).then(function () { return response; }); })
            .then(function (response) {
            _this._eventToETag.set(eventUri, response.headers.get('ETag'));
        });
    };
    EventDataProvider.prototype.deleteEventItem = function (listId, eventId) {
        var _this = this;
        var eventUri;
        return this._afterServiceScopeFinished()
            .then(function (_a) {
            var pageContext = _a.pageContext, httpClient = _a.httpClient;
            var webAbsoluteUrl = _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_4__["UrlUtilities"].removeEndSlash(pageContext.web.absoluteUrl);
            eventUri = webAbsoluteUrl + "/_api/web/Lists(guid'" + listId.toString() + "')/items(" + eventId + ")";
            var headers = {
                'If-Match': _this._eventToETag.get(eventUri)
            };
            return httpClient.fetch(eventUri, _microsoft_sp_http__WEBPACK_IMPORTED_MODULE_2__["SPHttpClient"].configurations.v1, {
                headers: headers,
                method: 'DELETE'
            });
        })
            .then(_EventAPIUtilities__WEBPACK_IMPORTED_MODULE_9__["parseResponse"])
            .then(function () {
            _this._eventToETag.delete(eventUri);
        })
            .catch(function (error) {
            // Delete event error due to skype meeting link.
            // @todo: SOX VSO #359886 to investigate the root cause, for instance, capture the error and log it.
            if (error.code === '-2130575234, Microsoft.SharePoint.SPException') {
                _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_5__["_EngagementLogger"].logEvent('EventDataProvider.DeleteEventItemFailure.HasSkypeLink');
            }
            else {
                throw error;
            }
        });
    };
    EventDataProvider.prototype.createEventItem = function (listId, event) {
        var _this = this;
        if (!Object(_DataProviderFlights__WEBPACK_IMPORTED_MODULE_10__["isNewApiToCREventFlightEnabled"])()) {
            return this._createEventItemFlightDisabled(listId, event);
        }
        return this._afterServiceScopeFinished()
            .then(function (_a) {
            var pageContext = _a.pageContext, httpClient = _a.httpClient;
            var webAbsoluteUrl = _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_4__["UrlUtilities"].removeEndSlash(pageContext.web.absoluteUrl);
            var url = webAbsoluteUrl + "/_api/web/Lists(guid'" + listId.toString() + "')/AddValidateUpdateItemUsingPath()";
            var headers = {
                Accept: 'application/json',
                'Content-Type': 'application/json;charset=utf-8'
            };
            return _this._getEventPeopleIds(event.attendees).then(function (infos) {
                var body = JSON.stringify(Object(_EventAPIUtilities__WEBPACK_IMPORTED_MODULE_9__["constructEventPayload"])(event, infos.map(function (info) { return info.UserPrincipalName || info.LoginName; })));
                return httpClient.post(url, _microsoft_sp_http__WEBPACK_IMPORTED_MODULE_2__["SPHttpClient"].configurations.v1, { headers: headers, body: body });
            });
        })
            .then(_EventAPIUtilities__WEBPACK_IMPORTED_MODULE_9__["parseResponse"])
            .then(_EventAPIUtilities__WEBPACK_IMPORTED_MODULE_9__["parseEventId"])
            .then(function (eventId) { return _this.requestEventItem(listId, eventId); });
    };
    EventDataProvider.prototype.getAllCategories = function (listId) {
        var getCategoriesPromises = Promise.all([
            this.getInUsedCategories(listId),
            this.getPreDefinedCategories(listId)
        ]);
        return getCategoriesPromises.then(function (_a) {
            var inUsedCategories = _a[0], predefinedCategories = _a[1];
            return Object(_microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_3__["uniq"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(inUsedCategories, predefinedCategories.categories)).sort();
        });
    };
    EventDataProvider.prototype.getPreDefinedCategories = function (listId) {
        return this._afterServiceScopeFinished().then(function (_a) {
            var pageContext = _a.pageContext, httpClient = _a.httpClient;
            var webAbsoluteUrl = _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_4__["UrlUtilities"].removeEndSlash(pageContext.web.absoluteUrl);
            var url = webAbsoluteUrl + "/_api/web/Lists(guid'" + listId.toString() + "')/fields/GetByInternalNameOrTitle('Category')";
            return httpClient
                .get(url, _microsoft_sp_http__WEBPACK_IMPORTED_MODULE_2__["SPHttpClient"].configurations.v1)
                .then(_EventAPIUtilities__WEBPACK_IMPORTED_MODULE_9__["parseResponse"])
                .then(function (categories) {
                return {
                    categories: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(categories.Choices),
                    type: categories.TypeAsString
                };
            });
        });
    };
    EventDataProvider.prototype.getInUsedCategories = function (listId) {
        var _this = this;
        return this._afterServiceScopeFinished().then(function (_a) {
            var pageContext = _a.pageContext, httpClient = _a.httpClient;
            var webAbsoluteUrl = _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_4__["UrlUtilities"].removeEndSlash(pageContext.web.absoluteUrl);
            return _this._getViewId(webAbsoluteUrl, listId.toString(), httpClient).then(function (viewId) {
                return _this._getCategoriesFromView(webAbsoluteUrl, listId.toString(), httpClient, viewId);
            });
        });
    };
    EventDataProvider.prototype.convertDisplayedDateToUTC = function (date) {
        var _this = this;
        return this._afterServiceScopeFinished().then(function (_a) {
            var pageContext = _a.pageContext;
            return _EventTimeZoneUtilities__WEBPACK_IMPORTED_MODULE_8__["default"].localToUtc(date, _this._getTimeZoneFromPageContext(pageContext));
        });
    };
    EventDataProvider.prototype.getAudienceTargetEnabledFlag = function (listId) {
        return this._afterServiceScopeFinished()
            .then(function (_a) {
            var pageContext = _a.pageContext, httpClient = _a.httpClient;
            var webAbsoluteUrl = _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_4__["UrlUtilities"].removeEndSlash(pageContext.web.absoluteUrl);
            var url = webAbsoluteUrl + "/_api/web/Lists(guid'" + listId.toString() + "')/Fields(guid'" + _EventAPIUtilities__WEBPACK_IMPORTED_MODULE_9__["AUDIENCE_TARGET_FIELD_ID"] + "')";
            var headers = {
                Accept: 'application/json',
                'Content-Type': 'application/json;charset=utf-8'
            };
            return httpClient.get(url, _microsoft_sp_http__WEBPACK_IMPORTED_MODULE_2__["SPHttpClient"].configurations.v1, { headers: headers });
        })
            .then(_EventAPIUtilities__WEBPACK_IMPORTED_MODULE_9__["parseResponseToGetAudienceTargetEnabledFlag"]);
    };
    EventDataProvider.prototype._createEventItemFlightDisabled = function (listId, event) {
        var _this = this;
        var webAbsoluteUrl;
        var timeZone;
        var listGuid = listId.toString();
        return this._afterServiceScopeFinished()
            .then(function (_a) {
            var pageContext = _a.pageContext, httpClient = _a.httpClient;
            webAbsoluteUrl = _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_4__["UrlUtilities"].removeEndSlash(pageContext.web.absoluteUrl);
            timeZone = _this._getTimeZoneFromPageContext(pageContext);
            var select = [
                'Attachments',
                'BannerUrl',
                'Category',
                'Description',
                'EffectiveBasePermissions',
                'EndDate',
                'EventDate',
                'fAllDayEvent',
                'Geolocation',
                'ID',
                'Location',
                'ParticipantsPickerId',
                'Title',
                'Workspace',
                'fRecurrence'
            ];
            var url = webAbsoluteUrl + "/_api/web/Lists(guid'" + listGuid + "')/items?$select=" + select.join(',');
            var headers = {
                Accept: 'application/json',
                'Content-Type': 'application/json;charset=utf-8'
            };
            return _this._constructEventPayload(event, timeZone).then(function (eventPayload) {
                var body = JSON.stringify(eventPayload);
                return httpClient.post(url, _microsoft_sp_http__WEBPACK_IMPORTED_MODULE_2__["SPHttpClient"].configurations.v1, { headers: headers, body: body });
            });
        })
            .then(_EventAPIUtilities__WEBPACK_IMPORTED_MODULE_9__["parseResponse"])
            .then(function (responseEvent) {
            var eventUri = webAbsoluteUrl + "/_api/web/Lists(guid'" + listGuid + "')/items(" + responseEvent.ID + ")";
            _this._eventToETag.set(eventUri, responseEvent['@odata.etag']);
            return _this._mapRESTResponseEvent(responseEvent, timeZone);
        });
    };
    EventDataProvider.prototype._updateEventItemFlightDisabled = function (listId, eventId, event) {
        var _this = this;
        var eventUri;
        var timeZone;
        return this._afterServiceScopeFinished()
            .then(function (_a) {
            var pageContext = _a.pageContext, httpClient = _a.httpClient;
            timeZone = _this._getTimeZoneFromPageContext(pageContext);
            var webAbsoluteUrl = _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_4__["UrlUtilities"].removeEndSlash(pageContext.web.absoluteUrl);
            eventUri = webAbsoluteUrl + "/_api/web/Lists(guid'" + listId.toString() + "')/items(" + eventId + ")";
            var headers = {
                'If-Match': _this._eventToETag.get(eventUri),
                'X-HTTP-Method': 'MERGE',
                'Content-Type': 'application/json;charset=utf-8'
            };
            return _this._constructEventPayload(event, timeZone).then(function (eventPayload) {
                var body = JSON.stringify(eventPayload);
                return httpClient.post(eventUri, _microsoft_sp_http__WEBPACK_IMPORTED_MODULE_2__["SPHttpClient"].configurations.v1, { headers: headers, body: body });
            });
        })
            .then(function (response) { return Object(_EventAPIUtilities__WEBPACK_IMPORTED_MODULE_9__["parseResponse"])(response).then(function () { return response; }); })
            .then(function (response) {
            _this._eventToETag.set(eventUri, response.headers.get('ETag'));
        });
    };
    EventDataProvider.prototype._getViewId = function (webAbsoluteUrl, listId, httpClient) {
        // For events list, its default view is Calendar type, to get the distinct value of Category column,
        // we need tabular view with BaseViewId === 1
        // @todo: ensure view?
        // @todo: cache view id
        var endpointUrl = webAbsoluteUrl + "/_api/web/Lists/GetById('" + listId + "')/Views?$select=Id&$filter=BaseViewId eq '1'";
        return httpClient
            .get(endpointUrl, _microsoft_sp_http__WEBPACK_IMPORTED_MODULE_2__["SPHttpClient"].configurations.v1)
            .then(_EventAPIUtilities__WEBPACK_IMPORTED_MODULE_9__["parseResponse"])
            .then(function (json) {
            if (json.value && json.value.length > 0) {
                return json.value[0].Id;
            }
            else {
                // @todo: Loc of error message
                return Promise.reject(new Error('No view is found.'));
            }
        });
    };
    EventDataProvider.prototype._getCategoriesFromView = function (webAbsoluteUrl, listId, httpClient, viewId) {
        var _this = this;
        var endpointUrl = webAbsoluteUrl + "/_api/web/Lists/GetById('" + listId + "')/RenderListFilterData" +
            ("?FieldInternalName='Category'&ViewId='" + viewId + "'");
        return httpClient
            .post(endpointUrl, _microsoft_sp_http__WEBPACK_IMPORTED_MODULE_2__["SPHttpClient"].configurations.v1, {})
            .then(function (response) {
            if (response.ok) {
                return response.text();
            }
            else {
                // @todo: have better way to handle this response?
                throw new Error(JSON.stringify(response));
            }
        })
            .then(function (text) {
            // Response text is like <SELECT id="..." ><OPTION  SELECTED Value="Business">Business</OPTION>...</SELECT>.
            // Use regular expression to extract all Value attribute.
            var regex = new RegExp("Value=\"([^\"]*)", 'g');
            var values = text.match(regex);
            // Parse Value attribute, e.g. parse Value="Business" to Business.
            // Decode the HTML attribute value.
            var categories = values
                .map(function (val) { return val.replace(regex, '$1'); })
                .map(_this._htmlDecode);
            // This is to remove duplicated "" which represents All and Empty cases
            // @todo: handle these 2 cases if required
            return Object(_microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_3__["uniq"])(categories);
        });
    };
    EventDataProvider.prototype._mapRESTResponseEvent = function (event, timeZone, useUTC) {
        var _this = this;
        if (useUTC === void 0) { useUTC = false; }
        return this._getEventAttachments(event).then(function (attachments) { return ({
            id: event.ID.toString(),
            category: event.Category,
            title: event.Title,
            description: event.Description,
            startTime: useUTC
                ? _EventTimeZoneUtilities__WEBPACK_IMPORTED_MODULE_8__["default"].dateStringToUTCDate(event.EventDate, timeZone, event.fAllDayEvent)
                : _EventTimeZoneUtilities__WEBPACK_IMPORTED_MODULE_8__["default"].dateStringToLocalDate(event.EventDate, timeZone, event.fAllDayEvent),
            endTime: useUTC
                ? _EventTimeZoneUtilities__WEBPACK_IMPORTED_MODULE_8__["default"].dateStringToUTCDate(event.EndDate, timeZone, event.fAllDayEvent)
                : _EventTimeZoneUtilities__WEBPACK_IMPORTED_MODULE_8__["default"].dateStringToLocalDate(event.EndDate, timeZone, event.fAllDayEvent),
            location: event.Location,
            attendees: _this._mapRESTResponsePeople(event.ParticipantsPicker),
            audiences: Object(_DataProviderFlights__WEBPACK_IMPORTED_MODULE_10__["isNewApiToCREventFlightEnabled"])()
                ? _this._mapRESTResponseAudience(event.OData__ModernAudienceTargetUserField, event['OData__ModernAudienceTargetUserField@odata.navigationLink'])
                : undefined,
            bannerUrl: event.BannerUrl ? event.BannerUrl.Url : '',
            attachments: attachments,
            linkName: event.Workspace ? event.Workspace.Description : '',
            linkUrl: event.Workspace ? event.Workspace.Url : '',
            isAllDayEvent: event.fAllDayEvent,
            geolocation: event.Geolocation
                ? {
                    latitude: event.Geolocation.Latitude,
                    longitude: event.Geolocation.Longitude
                }
                : undefined,
            permission: new _microsoft_sp_page_context__WEBPACK_IMPORTED_MODULE_1__["SPPermission"](event.EffectiveBasePermissions),
            isRecurrence: event.fRecurrence,
            // @todo 335770 Move the prev/next page query information inside data provider.
            prevPageQuery: undefined,
            nextPageQuery: undefined,
            webName: '',
            webUrl: ''
        }); });
    };
    EventDataProvider.prototype._getEventAttachments = function (responseEvent) {
        var _this = this;
        return this._afterServiceScopeFinished().then(function (_a) {
            var pageContext = _a.pageContext, httpClient = _a.httpClient;
            var webAbsoluteUrl = _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_4__["UrlUtilities"].removeEndSlash(pageContext.web.absoluteUrl);
            if (!responseEvent.Attachments) {
                return Promise.resolve([]);
            }
            else {
                var batch_1 = httpClient.beginBatch();
                var paths = responseEvent.AttachmentFiles.map(function (attachment) { return attachment.ServerRelativeUrl; });
                var batchPromises_1 = paths.map(function (path) {
                    var url = webAbsoluteUrl + "/_api/web/getFileByUrl('" + path + "')";
                    var headers = {
                        Accept: 'application/json',
                        'Content-Type': 'application/json;charset=utf-8'
                    };
                    return batch_1
                        .get(url, _microsoft_sp_http__WEBPACK_IMPORTED_MODULE_2__["SPHttpClientBatch"].configurations.v1, { headers: headers })
                        .then(function (response) { return Object(_EventAPIUtilities__WEBPACK_IMPORTED_MODULE_9__["parseResponse"])(response); });
                });
                return batch_1
                    .execute()
                    .then(function () { return Promise.all(batchPromises_1); })
                    .then(_this._mapRESTAttachments);
            }
        });
    };
    EventDataProvider.prototype._constructEventPayload = function (event, timeZone) {
        return this._getEventPeopleIds(event.attendees)
            .then(function (infos) { return infos.map(function (info) { return info.Id; }); })
            .then(function (ids) {
            var payload = {
                // tslint:disable:no-null-keyword
                Title: event.title,
                Category: event.category ? event.category : null,
                Description: event.description,
                Location: event.location,
                EventDate: _EventTimeZoneUtilities__WEBPACK_IMPORTED_MODULE_8__["default"].localToUtc(event.startTime, timeZone).toISOString(),
                EndDate: _EventTimeZoneUtilities__WEBPACK_IMPORTED_MODULE_8__["default"].localToUtc(event.endTime, timeZone).toISOString(),
                fAllDayEvent: event.isAllDayEvent,
                Workspace: {
                    Description: event.linkName,
                    Url: event.linkUrl
                },
                BannerUrl: {
                    Url: event.bannerUrl
                },
                ParticipantsPickerId: ids,
                Geolocation: event.geolocation
                    ? {
                        Latitude: event.geolocation.latitude,
                        Longitude: event.geolocation.longitude
                    }
                    : // When its value is undefined, it must store null to list item, otherwise list item won't be updated.
                        null,
                // tslint:enable:no-null-keyword
                fRecurrence: event.isRecurrence
            };
            return payload;
        });
    };
    EventDataProvider.prototype._getEventPeopleIds = function (users) {
        if (users.length > 0) {
            return this._afterServiceScopeFinished().then(function (_a) {
                var pageContext = _a.pageContext, httpClient = _a.httpClient;
                var webAbsoluteUrl = _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_4__["UrlUtilities"].removeEndSlash(pageContext.web.absoluteUrl);
                var batch = httpClient.beginBatch();
                var batchPromises = users.map(function (user) {
                    // The @param syntax is used to workaround the api issue that replaces `\` with '/'.
                    var url = webAbsoluteUrl + "/_api/web/ensureUser(@user)?@user='" + encodeURIComponent(user.id) + "'";
                    return batch
                        .get(url, _microsoft_sp_http__WEBPACK_IMPORTED_MODULE_2__["SPHttpClientBatch"].configurations.v1)
                        .then(_EventAPIUtilities__WEBPACK_IMPORTED_MODULE_9__["parseResponse"])
                        .then(function (participantsPicker) { return participantsPicker; });
                });
                return batch.execute().then(function () { return Promise.all(batchPromises); });
            });
        }
        else {
            return Promise.resolve([]);
        }
    };
    /**
     * If event items are on current site then webAbsoluteUrl can be calculated from pageContext here.
     * For hub site roll up scenario, event items could come from other sites. In this case we can't
     * calculate it here and should pass it as a parameter.
     */
    EventDataProvider.prototype._requestEventItem = function (listId, eventId, useUTC, webAbsoluteUrl) {
        var _this = this;
        if (useUTC === void 0) { useUTC = false; }
        var eventUri;
        var timeZone;
        return this._afterServiceScopeFinished()
            .then(function (_a) {
            var pageContext = _a.pageContext, httpClient = _a.httpClient;
            timeZone = _this._getTimeZoneFromPageContext(pageContext);
            webAbsoluteUrl = webAbsoluteUrl || _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_4__["UrlUtilities"].removeEndSlash(pageContext.web.absoluteUrl);
            // @todo: investigate if there is a way to request fields even if they are missing in part of items,
            // but most of them are having the fields.
            var select = [
                'Attachments',
                'BannerUrl',
                'Category',
                'Description',
                'EffectiveBasePermissions',
                'EndDate',
                'EventDate',
                'fAllDayEvent',
                'ID',
                'Location',
                'ParticipantsPicker/Name',
                'ParticipantsPicker/Title',
                'Title',
                'Workspace',
                'fRecurrence',
                'Geolocation'
            ];
            var expand = ['AttachmentFiles', 'ParticipantsPicker'];
            eventUri = webAbsoluteUrl + "/_api/web/Lists(guid'" + listId.toString() + "')/items(" + eventId + ")";
            var headers = {
                Accept: 'application/json',
                'Content-Type': 'application/json;charset=utf-8'
            };
            var getAudienceTargetEnabledFlagPromise = Object(_DataProviderFlights__WEBPACK_IMPORTED_MODULE_10__["isNewApiToCREventFlightEnabled"])()
                ? _this.getAudienceTargetEnabledFlag(listId)
                : Promise.resolve(false);
            return getAudienceTargetEnabledFlagPromise.then(function (isAudienceTargetEnabled) {
                if (isAudienceTargetEnabled) {
                    select.push('OData__ModernAudienceTargetUserField/Name');
                    expand.push('OData__ModernAudienceTargetUserField');
                }
                var queryString = "$select=" + select.join(',') + "&$expand=" + expand.join(',');
                var url = eventUri + "/?" + queryString;
                return httpClient.get(url, _microsoft_sp_http__WEBPACK_IMPORTED_MODULE_2__["SPHttpClient"].configurations.v1, { headers: headers });
            });
        })
            .then(_EventAPIUtilities__WEBPACK_IMPORTED_MODULE_9__["parseResponse"])
            .then(function (responseEvent) {
            _this._eventToETag.set(eventUri, responseEvent['@odata.etag']);
            return _this._mapRESTResponseEvent(responseEvent, timeZone, useUTC);
        });
    };
    EventDataProvider.prototype._afterServiceScopeFinished = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this._serviceScope.whenFinished(function () {
                resolve({
                    pageContext: _this._serviceScope.consume(_microsoft_sp_page_context__WEBPACK_IMPORTED_MODULE_1__["PageContext"].serviceKey),
                    httpClient: _this._serviceScope.consume(_microsoft_sp_http__WEBPACK_IMPORTED_MODULE_2__["SPHttpClient"].serviceKey)
                });
            });
        });
    };
    EventDataProvider.prototype._buildQueryString = function (requestOptions) {
        if (requestOptions.pageQuery) {
            // If we get page query, we could skip other query string parameters.
            return requestOptions.pageQuery;
        }
        else {
            var queries = [];
            if (requestOptions.orderBy) {
                queries.push(['SortField', requestOptions.orderBy.field], ['SortDir', requestOptions.orderBy.direction]);
            }
            return queries.map(function (query) { return query.join('='); }).join('&');
        }
    };
    EventDataProvider.prototype._mapRESTResponsePeople = function (eventPeople) {
        if (!eventPeople) {
            return [];
        }
        else {
            return eventPeople.map(function (info) { return ({
                id: info.Name,
                name: info.Title
            }); });
        }
    };
    EventDataProvider.prototype._mapRESTResponseAudience = function (eventAudience, isAudienceFieldRequested) {
        if (eventAudience) {
            return eventAudience.map(function (info) { return Object(_EventAPIUtilities__WEBPACK_IMPORTED_MODULE_9__["parseAudienceId"])(info); });
        }
        else {
            // If no audiences are added to the event, 'event.OData__ModernAudienceTargetUserField' will not exist in the response
            // Thus we need 'OData__ModernAudienceTargetUserField@odata.navigationLink' to judge if audience targeting is enabled
            if (isAudienceFieldRequested) {
                return [];
            }
            return undefined;
        }
    };
    EventDataProvider.prototype._mapRESTAttachments = function (attachments) {
        if (!attachments) {
            return [];
        }
        else {
            return attachments.map(function (attachment) { return ({
                fileName: attachment.Name,
                fileSize: attachment.Length,
                filePreviewUrl: attachment.LinkingUri,
                fileRelativeUrl: attachment.ServerRelativeUrl
            }); });
        }
    };
    EventDataProvider.prototype._constructPageQuery = function (pageQuery) {
        if (pageQuery) {
            return (pageQuery
                // Strip off the first `?` character.
                .substr(1)
                // Fix up the empty view GUID. If we are sending this, the end point is not happy.
                .replace('&View=00000000-0000-0000-0000-000000000000', ''));
        }
        else {
            return '';
        }
    };
    EventDataProvider.prototype._getTimeZoneFromPageContext = function (context) {
        return context.user.preferUserTimeZone ? context.user.timeZoneInfo : context.web.timeZoneInfo;
    };
    EventDataProvider.prototype._htmlDecode = function (str) {
        if (false) {}
        else if (str) {
            var parser = new DOMParser();
            var doc = parser.parseFromString(str, 'text/html');
            return doc.body.innerText;
        }
        else {
            return str;
        }
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_6__["monitor"])('EventDataProvider.RequestData')
    ], EventDataProvider.prototype, "requestData", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_6__["monitor"])('EventDataProvider.UpdateEventItem')
    ], EventDataProvider.prototype, "updateEventItem", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_6__["monitor"])('EventDataProvider.DeleteEventItem')
    ], EventDataProvider.prototype, "deleteEventItem", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_6__["monitor"])('EventDataProvider.CreateEventItem')
    ], EventDataProvider.prototype, "createEventItem", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_6__["monitor"])('EventDataProvider.GetPreDefinedCategories')
    ], EventDataProvider.prototype, "getPreDefinedCategories", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_6__["monitor"])('EventDataProvider.GetInUsedCategories')
    ], EventDataProvider.prototype, "getInUsedCategories", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_6__["monitor"])('EventDataProvider.GetAudienceTargetEnabledFlag')
    ], EventDataProvider.prototype, "getAudienceTargetEnabledFlag", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_6__["monitor"])('EventDataProvider.GetEventAttachments')
    ], EventDataProvider.prototype, "_getEventAttachments", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_6__["monitor"])('EventDataProvider.GetEventPeopleIds')
    ], EventDataProvider.prototype, "_getEventPeopleIds", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_6__["monitor"])('EventDataProvider.RequestEventItem')
    ], EventDataProvider.prototype, "_requestEventItem", null);
    return EventDataProvider;
}());
/* harmony default export */ __webpack_exports__["default"] = (EventDataProvider);


/***/ }),

/***/ "rOX9":
/*!****************************************!*\
  !*** ./lib/search/SearchAPIRequest.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/sp-lodash-subset */ "Pk8u");
/* harmony import */ var _microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _microsoft_sp_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/sp-http */ "vlQI");
/* harmony import */ var _microsoft_sp_http__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_http__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _microsoft_sp_page_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @microsoft/sp-page-context */ "X+PM");
/* harmony import */ var _microsoft_sp_page_context__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_page_context__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ms/sp-telemetry */ "2q6Q");
/* harmony import */ var _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @microsoft/sp-diagnostics */ "ut3N");
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_4__);





/**
 * Provides a simple wrapper for the SharePoint Search REST API.
 * @internal
 */
var SearchAPIRequest = /** @class */ (function () {
    function SearchAPIRequest(serviceScope, isMockMode, qosPrefix) {
        if (isMockMode === void 0) { isMockMode = false; }
        if (qosPrefix === void 0) { qosPrefix = ''; }
        this._serviceScope = serviceScope;
        this._isMockMode = isMockMode;
        this._qosPrefix = qosPrefix;
    }
    SearchAPIRequest.prototype.getSearchQueryResponse = function (options) {
        var _this = this;
        // @todo: rename SearchDataProviderGetResponse monitor to SearchAPIRequest
        var _qosMonitor = this._qosPrefix
            ? new _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_3__["_QosMonitor"](this._qosPrefix + ".SearchDataProviderGetResponse")
            : new _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_3__["_QosMonitor"]('SearchDataProviderGetResponse');
        if (this._isMockMode) {
            _qosMonitor.writeSuccess();
            return Promise.resolve(this.mockResponse);
        }
        else {
            return this._getRawSearchQueryResponse(options)
                .then(function (rawResponse) {
                var simplifiedResult = _this._simplifyResultForTemplating(rawResponse);
                _qosMonitor.writeSuccess();
                return simplifiedResult;
            })
                .catch(function (error) {
                var correlationIdKey = 'correlationId';
                _qosMonitor.writeUnexpectedFailure('FailedSearchPOST', error, {
                    correlationId: error[correlationIdKey]
                });
                return Promise.reject(error);
            });
        }
    };
    SearchAPIRequest.prototype.getManagedPropertiesQueryResponse = function (options) {
        var _qosMonitor = new _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_3__["_QosMonitor"]('ManagedPropertiesRequest');
        if (this._isMockMode) {
            _qosMonitor.writeSuccess();
            return Promise.resolve([]);
        }
        else {
            return this._getRawSearchQueryResponse(options)
                .then(function (rawResponse) {
                var refiners = Object(_microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_0__["has"])(rawResponse.PrimaryQueryResult, 'RefinementResults.Refiners')
                    ? rawResponse.PrimaryQueryResult.RefinementResults.Refiners
                    : [];
                var entries = refiners.length > 0 ? refiners[0].Entries : [];
                var managedProperties = entries.map(function (entry) { return entry.RefinementName; });
                _qosMonitor.writeSuccess();
                return Promise.resolve(managedProperties);
            })
                .catch(function (error) {
                _qosMonitor.writeUnexpectedFailure('ManagedPropertiesRequestFailed', error);
                return Promise.reject(error);
            });
        }
    };
    SearchAPIRequest.prototype._getRawSearchQueryResponse = function (options) {
        var _this = this;
        // set default ClientType if one not already provided
        options.ClientType = options.ClientType || 'ModernWebPart';
        var body = '{ "request": ' + (options ? JSON.stringify(options) : '{}') + ' }';
        var headers = new Headers();
        headers.append('Accept', 'application/json;odata=nometadata');
        headers.append('Content-type', 'application/json;charset=utf-8');
        headers.append('OData-Version', '3.0');
        return this._afterServiceScopeFinished().then(function (_a) {
            var pageContext = _a.pageContext, spHttpClient = _a.spHttpClient;
            var postUrl = pageContext.web.absoluteUrl + "/_api/search/postquery";
            return spHttpClient
                .post(postUrl, _microsoft_sp_http__WEBPACK_IMPORTED_MODULE_1__["SPHttpClient"].configurations.v1, { body: body, headers: headers })
                .then(_this._parseResponse);
        });
    };
    /*
     * The result format from the SharePoint Search REST API provides type information at the field
     * level that is useful for some, but makes client side templating a little cumbersome. This function
     * simplifies the result format by removing the metadata information.
     */
    SearchAPIRequest.prototype._simplifyResultForTemplating = function (searchResult) {
        var parsedData = {};
        try {
            var parsedRows = [];
            var rows = searchResult.PrimaryQueryResult.RelevantResults.Table.Rows;
            for (var r = 0; r < rows.length; r++) {
                var parsedRow = {};
                var cells = rows[r].Cells; // get the cells
                for (var c = 0; c < cells.length; c++) {
                    var cell = cells[c];
                    var cellKey = cell.Key;
                    parsedRow[cellKey] = cell.Value;
                }
                parsedRows.push(parsedRow);
            }
            parsedData.rows = parsedRows;
        }
        catch (ex) {
            parsedData.rows = []; // invalid data format or empty result
        }
        return parsedData;
    };
    SearchAPIRequest.prototype._afterServiceScopeFinished = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this._serviceScope.whenFinished(function () {
                resolve({
                    pageContext: _this._serviceScope.consume(_microsoft_sp_page_context__WEBPACK_IMPORTED_MODULE_2__["PageContext"].serviceKey),
                    spHttpClient: _this._serviceScope.consume(_microsoft_sp_http__WEBPACK_IMPORTED_MODULE_1__["SPHttpClient"].serviceKey)
                });
            });
        });
    };
    SearchAPIRequest.prototype._parseResponse = function (response) {
        if (response.status >= 200 && response.status < 300) {
            return response.json();
        }
        else {
            return response.json().then(function (error) {
                var errorMessage = "BadSearchResponse: statusMessage=" + response.statusMessage;
                _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_4__["_TraceLogger"].logVerbose(SearchAPIRequest._LogSource, errorMessage + ", response inner error=" + JSON.stringify(error));
                throw {
                    message: errorMessage,
                    status: response.status,
                    correlationId: response.correlationId ? response.correlationId.toString() : '',
                    innerError: error
                };
            });
        }
    };
    SearchAPIRequest._LogSource = _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_4__["_LogSource"].create('SearchAPIRequest');
    return SearchAPIRequest;
}());
/* harmony default export */ __webpack_exports__["default"] = (SearchAPIRequest);


/***/ }),

/***/ "ugjH":
/*!****************************************************************!*\
  !*** ./lib/dataProviders/news/MicroServiceNewsDataProvider.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/sp-diagnostics */ "ut3N");
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _microsoft_sp_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @microsoft/sp-http */ "vlQI");
/* harmony import */ var _microsoft_sp_http__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_http__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _microsoft_sp_page_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @microsoft/sp-page-context */ "X+PM");
/* harmony import */ var _microsoft_sp_page_context__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_page_context__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ms/sp-component-utilities */ "hiL/");
/* harmony import */ var _ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _httpClients__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../httpClients */ "e+fh");
/* harmony import */ var _models_NewsDataSource__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./models/NewsDataSource */ "aE90");
/* harmony import */ var _utilities_NewsUtilities__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utilities/NewsUtilities */ "JpAn");
/* harmony import */ var _DataProviderFlights__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../DataProviderFlights */ "Xkwe");
/* harmony import */ var _common_TieredCacheHelper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../common/TieredCacheHelper */ "nJGZ");
/* harmony import */ var _httpClients_sphome_MicroServiceErrorUtils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../httpClients/sphome/MicroServiceErrorUtils */ "Gw73");
/* harmony import */ var _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ms/sp-telemetry */ "2q6Q");
/* harmony import */ var _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_11__);












var EMPTY_RESPONSE = 'EmptyResponse';
var EXPECTED_ERROR = 'ExpectedError';
var MAIN_SITE_URL = 'mainSiteUrl';
var RESPONSE_PARSE_ERROR = '_Response_Parse_Error';
var TAG_CACHE = 'Cache';
var TAG_SERVER = 'Server';
var THROTTLED_QOS_MONITOR_LABEL = 'GetNewsItems.ThrottledResult';
var TOKEN_NOT_AVAILABLE = 'TokenNotAvailable';
var UNEXPECTED_ERROR = 'UnexpectedError';
var UNEXPECTED_RETRYABLE_ERROR = 'UnexpectedRetryableError';
var ZERO_RESULTS_QOS_MONITOR_LABEL = 'GetNewsItems.ZeroResult';
var PAGE_USAGE_KEY_NAME = 'MicroServiceNews';
var PAGE_USAGE_START_TIME = 'StartTime';
var PAGE_USAGE_END_TIME = 'EndTime';
var PAGE_USAGE_FAILURE = 'Failure';
/**
 * @internal
 */
var MicroServiceNewsDataProvider = /** @class */ (function () {
    function MicroServiceNewsDataProvider(options) {
        var _this = this;
        this._maxRetryCount = 3;
        this._processRawData = function (rawData, requestInfo, qosMonitor) {
            var paddingCount = _utilities_NewsUtilities__WEBPACK_IMPORTED_MODULE_7__["NewsUtilities"].getPaddingCount(requestInfo, rawData.Items ? rawData.Items.length : 0);
            var isEmptyResult = !rawData.Items || rawData.Items.length === 0;
            // TODO: VSO https://onedrive.visualstudio.com/WEX!/_workitems/edit/818436/
            // Adding this extra monitor to track empty or zero results from Microservice,
            _this._logEmptyResultToQos(_this._extraData, isEmptyResult, rawData);
            var data = isEmptyResult ? [] : _this.extractMicroserviceNewsItems(rawData.Items);
            data = data.concat(_utilities_NewsUtilities__WEBPACK_IMPORTED_MODULE_7__["NewsUtilities"].getEmptyStateItems(requestInfo.emptyItemType, _this.options.serviceScope, paddingCount, requestInfo.webpartWidth));
            qosMonitor.writeSuccess(_this._extraData);
            return data;
        };
        this.options = options;
        this.options.serviceScope.whenFinished(function () {
            _this._pageContext = _this.options.serviceScope.consume(_microsoft_sp_page_context__WEBPACK_IMPORTED_MODULE_3__["PageContext"].serviceKey);
            _this._sphomeHttpClient = _this.options.serviceScope.consume(_httpClients__WEBPACK_IMPORTED_MODULE_5__["SPHomeHttpClient"].serviceKey);
        });
    }
    Object.defineProperty(MicroServiceNewsDataProvider.prototype, "isMicroserviceUnavailable", {
        get: function () {
            return this._sphomeHttpClient.isServiceAvailable;
        },
        enumerable: true,
        configurable: true
    });
    MicroServiceNewsDataProvider.prototype.requestData = function (requestInfo) {
        var _this = this;
        var retryCount = 0;
        // Add PageUsage start data. Return paths should add end data.
        var requestCount = MicroServiceNewsDataProvider._requestCount++;
        this._addPageUsageStartData(requestCount);
        // Tiered caching experience (with new logging)
        if (_DataProviderFlights__WEBPACK_IMPORTED_MODULE_8__["default"].isTieredCachingEnabled()) {
            return this._requestData(requestInfo, retryCount)
                .then(function (newsItems) {
                _this._addPageUsageEndData(requestCount, retryCount);
                return newsItems;
            })
                .catch(function (error) {
                if (++retryCount < _this._maxRetryCount && _this.shouldRetryDataFetch(error)) {
                    return _this._requestData(requestInfo, retryCount).then(function (newsItems) {
                        _this._addPageUsageEndData(requestCount, retryCount);
                        return newsItems;
                    });
                }
                _this._addPageUsageEndData(requestCount, retryCount, true);
                throw error;
            });
        }
        return this._requestDataWithRetry(requestInfo, retryCount)
            .then(function (newsItems) {
            _this._addPageUsageEndData(requestCount, retryCount);
            return newsItems;
        })
            .catch(function (error) {
            if (++retryCount < _this._maxRetryCount && _this.shouldRetryDataFetch(error)) {
                return _this._requestDataWithRetry(requestInfo, retryCount).then(function (newsItems) {
                    _this._addPageUsageEndData(requestCount, retryCount);
                    return newsItems;
                });
            }
            _this._addPageUsageEndData(requestCount, retryCount, true);
            throw error;
        });
    };
    /* tslint:disable-next-line:no-any */
    MicroServiceNewsDataProvider.prototype.extractMicroserviceNewsItems = function (data) {
        return _utilities_NewsUtilities__WEBPACK_IMPORTED_MODULE_7__["NewsUtilities"].extractMicroserviceNewsItems(data, this._pageContext);
    };
    MicroServiceNewsDataProvider.prototype.shouldRetryDataFetch = function (error) {
        return error.message === UNEXPECTED_RETRYABLE_ERROR;
    };
    MicroServiceNewsDataProvider.prototype._applyCacheAndNetwork = function (response, requestInfo, qosMonitor) {
        var serverCallQoS = new _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__["_QosMonitor"](this.qosMonitorLabel + ".getNewsItemsInSmartRace");
        var serverPromise = this._processHttpClientResponsePromise(response.serverResponse, requestInfo, serverCallQoS);
        var cacheQoS = new _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__["_QosMonitor"](this.qosMonitorLabel + ".getCachedNewsItemsInSmartRace");
        var cacheResponse = _common_TieredCacheHelper__WEBPACK_IMPORTED_MODULE_9__["default"].processResponseRawData(response.cachedResponse, this._isRawData, this._processRawData.bind(this), requestInfo, cacheQoS).catch(function (e) {
            cacheQoS.writeUnexpectedFailure('ParseCacheResultsFailed', e);
            throw e;
        });
        // Return the response that comes back faster
        var cachedDataPromiseId = _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Guid"].parse('9b794e3a-a041-4fb4-870d-a1121ca57ca7');
        var serverDataPromiseId = _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Guid"].parse('4d757517-a42f-4546-a76a-8d0da7dd2a07');
        var promiseRaceMap = [
            {
                raceablePromise: cacheResponse,
                raceId: cachedDataPromiseId
            },
            {
                raceablePromise: serverPromise,
                raceId: serverDataPromiseId
            }
        ];
        return _ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_4__["SmartRace"].race(promiseRaceMap)
            .then(function (raceResponse) {
            if (raceResponse.raceId === cachedDataPromiseId) {
                serverPromise
                    .then(function (newsData) {
                    requestInfo.onServerResponseResolved(newsData);
                })
                    .catch(function () {
                    /* No Op: The page is already rendered with cache data, no need to break it */
                });
            }
            qosMonitor.writeSuccess({
                cacheStatus: raceResponse.raceId === cachedDataPromiseId ? 'WonRace' : 'LostRace'
            });
            return raceResponse.raceablePromise;
        })
            .catch(function (error) {
            qosMonitor.writeUnexpectedFailure('SmartRaceFailed', error);
            throw error;
        });
    };
    /**
     * Adds start time to PageUsage.
     */
    MicroServiceNewsDataProvider.prototype._addPageUsageStartData = function (requestCount) {
        var adapter = _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_11__["_PageUsageAdapter"].getInstance();
        var startTime = adapter.elapsedTime();
        adapter.markFeature(PAGE_USAGE_KEY_NAME + "-" + this.qosMonitorLabel + "-" + PAGE_USAGE_START_TIME + "-" + requestCount, startTime.toFixed(2));
    };
    /**
     * Adds end time and optional failure to PageUsage.
     */
    MicroServiceNewsDataProvider.prototype._addPageUsageEndData = function (requestCount, retryCount, isFailure) {
        var adapter = _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_11__["_PageUsageAdapter"].getInstance();
        var endTime = adapter.elapsedTime();
        adapter.markFeature(PAGE_USAGE_KEY_NAME + "-" + this.qosMonitorLabel + "-" + PAGE_USAGE_END_TIME + "-" + requestCount + "-" + retryCount, endTime.toFixed(2));
        if (isFailure) {
            adapter.markFeature(PAGE_USAGE_KEY_NAME + "-" + this.qosMonitorLabel + "-" +
                (requestCount + "-" + retryCount + "-" + PAGE_USAGE_FAILURE));
        }
    };
    MicroServiceNewsDataProvider.prototype._addMoreAdditionalFields = function (response) {
        this._extraData.spHomeServer = response.headers.get('sphome-server');
        var spHomeSharepointId = response.headers.get('sphome-sharepointid');
        if (spHomeSharepointId) {
            this._extraData.spHomeSharepointId = spHomeSharepointId;
        }
    };
    MicroServiceNewsDataProvider.prototype._addCacheAndServerEmptyStateLogs = function (responsePromise, cacheHit, isCacheDataEmpty) {
        var _this = this;
        var shouldLogEmptyCache = cacheHit && isCacheDataEmpty;
        var cacheTag = shouldLogEmptyCache ? TAG_CACHE : '';
        return responsePromise
            .then(function (newsItems) {
            var isServerResultEmpty = _this._isEmptyResponse(newsItems);
            if (isServerResultEmpty || shouldLogEmptyCache) {
                var serverTag = isServerResultEmpty ? TAG_SERVER : '';
                _this._writeToEmptyResultsMonitor(cacheHit, "" + cacheTag + serverTag + EMPTY_RESPONSE);
            }
            return newsItems;
        })
            .catch(function (error) {
            _this._writeToEmptyResultsMonitor(cacheHit, "" + cacheTag + TAG_SERVER + RESPONSE_PARSE_ERROR, error);
            throw error;
        });
    };
    // Expected error if status code is 4xx.
    // Except for 429 which is throttling error
    MicroServiceNewsDataProvider.prototype._getIsExpectedError = function (httpStatus) {
        return httpStatus >= 400 && httpStatus < 500 && !Object(_httpClients_sphome_MicroServiceErrorUtils__WEBPACK_IMPORTED_MODULE_10__["isThrottledResponse"])(httpStatus);
    };
    // Unexpected retryable error if status code is 5xx.
    // Except for 503 which is throttling error
    MicroServiceNewsDataProvider.prototype._getIsUnExpectedRetryableError = function (httpStatus) {
        return httpStatus >= 500 && httpStatus < 600 && !Object(_httpClients_sphome_MicroServiceErrorUtils__WEBPACK_IMPORTED_MODULE_10__["isThrottledResponse"])(httpStatus);
    };
    MicroServiceNewsDataProvider.prototype._isEmptyResponse = function (response) {
        var items = response && response.filter(function (item) { var _a; return !((_a = item) === null || _a === void 0 ? void 0 : _a.isHelpArticle); });
        return !items || items.length === 0;
    };
    MicroServiceNewsDataProvider.prototype._isRawData = function (response) {
        return response && response.Items !== undefined;
    };
    MicroServiceNewsDataProvider.prototype._logEmptyResultToQos = function (extraData, isEmptyResult, responseJson) {
        var qosMonitorEmptyResults = new _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__["_QosMonitor"](this.qosMonitorLabel + ".getNewsItems.EmptyResults");
        if (isEmptyResult) {
            qosMonitorEmptyResults.writeUnexpectedFailure(EMPTY_RESPONSE, new Error("200 " + (!responseJson.Items ? 'No Items' : '0 Items')), extraData);
        }
        else {
            qosMonitorEmptyResults.writeSuccess(extraData);
        }
    };
    MicroServiceNewsDataProvider.prototype._logThrottledResultToQos = function (extraData, httpStatus) {
        if (Object(_httpClients_sphome_MicroServiceErrorUtils__WEBPACK_IMPORTED_MODULE_10__["isThrottledResponse"])(httpStatus)) {
            var qosMonitorThrottledResults = new _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__["_QosMonitor"](THROTTLED_QOS_MONITOR_LABEL);
            // Re-purposing dataProvider field to log news data provider information
            extraData.dataProvider = this.qosMonitorLabel;
            qosMonitorThrottledResults.writeSuccess(extraData);
        }
    };
    MicroServiceNewsDataProvider.prototype._parseClientCachableResponse = function (response, requestInfo, qosMonitor) {
        var _this = this;
        var cacheResponse = response.cachedResponse &&
            _common_TieredCacheHelper__WEBPACK_IMPORTED_MODULE_9__["default"].processResponseRawData(response.cachedResponse, this._isRawData, this._processRawData, requestInfo, qosMonitor);
        var serverResponse = response.serverResponse
            ? this._processHttpClientResponsePromise(response.serverResponse, requestInfo, qosMonitor)
            : undefined;
        if (cacheResponse) {
            cacheResponse
                .then(function (newsItems) {
                var isCacheDataEmpty = _this._isEmptyResponse(newsItems);
                /* If server response is also available, it means the cache response is stale.
                Server response could be used to re-render the web part with fresh data. */
                if (serverResponse) {
                    _this._addCacheAndServerEmptyStateLogs(serverResponse, true, isCacheDataEmpty)
                        .then(function (newsData) {
                        requestInfo.onServerResponseResolved(newsData);
                    })
                        .catch(function () {
                        /* No Op: The page is already rendered with cache data, no need to break it */
                    });
                }
                else {
                    var cacheTag = isCacheDataEmpty ? TAG_CACHE : '';
                    if (isCacheDataEmpty) {
                        _this._writeToEmptyResultsMonitor(true, "" + cacheTag + EMPTY_RESPONSE);
                    }
                }
            })
                .catch(function () {
                /* No Op */
            });
            return cacheResponse;
        }
        qosMonitor.writeSuccess(this._extraData);
        return this._addCacheAndServerEmptyStateLogs(serverResponse, false, true);
    };
    MicroServiceNewsDataProvider.prototype._parseHttpClientResponse = function (response, requestInfo, qosMonitor) {
        var _this = this;
        var extraData = Object(_models_NewsDataSource__WEBPACK_IMPORTED_MODULE_6__["_getExtraDataForLogging"])(requestInfo);
        extraData.responseStatus = response.status.toString();
        var isMSCVResponse = Object(_httpClients_sphome_MicroServiceErrorUtils__WEBPACK_IMPORTED_MODULE_10__["hasResponseMSCV"])(extraData.MSCV, extraData.URL);
        var errorCode = Object(_httpClients_sphome_MicroServiceErrorUtils__WEBPACK_IMPORTED_MODULE_10__["getMicroServiceErrorCode"])(response.status, isMSCVResponse);
        if (response.ok) {
            return response
                .json()
                .then(function (rawData) {
                var data = _this._processRawData(rawData, requestInfo, qosMonitor);
                qosMonitor.writeSuccess(extraData);
                return data;
            })
                .catch(function (error) {
                qosMonitor.writeUnexpectedFailure(errorCode, error, extraData);
                throw error;
            });
        }
        else {
            qosMonitor.writeUnexpectedFailure(errorCode, new Error(UNEXPECTED_ERROR), extraData);
            return Promise.reject();
        }
    };
    MicroServiceNewsDataProvider.prototype._processHttpClientResponsePromise = function (response, requestInfo, qosMonitor) {
        var _this = this;
        var serverHttpResponse;
        return response
            .then(function (serverResponse) {
            serverHttpResponse = serverResponse;
            return serverResponse.json();
        })
            .then(function (responseJson) {
            return _this._processMicroserviceServiceResponse(responseJson, requestInfo, qosMonitor, serverHttpResponse);
        });
    };
    MicroServiceNewsDataProvider.prototype._processMicroserviceServiceResponse = function (responseJson, requestInfo, qosMonitor, serverHttpResponse) {
        this._extraData.URL = _utilities_NewsUtilities__WEBPACK_IMPORTED_MODULE_7__["NewsUtilities"].removeQueryParam(serverHttpResponse.url, MAIN_SITE_URL);
        this._extraData.MSCV = serverHttpResponse.headers.get('MS-CV');
        this._addMoreAdditionalFields(serverHttpResponse);
        var isMSCVResponse = Object(_httpClients_sphome_MicroServiceErrorUtils__WEBPACK_IMPORTED_MODULE_10__["hasResponseMSCV"])(this._extraData.MSCV, this._extraData.URL);
        var validResponse = serverHttpResponse.ok && isMSCVResponse;
        if (validResponse) {
            return this._processRawData(responseJson, requestInfo, qosMonitor);
        }
        else {
            var httpStatus = serverHttpResponse.status;
            var errorCode = Object(_httpClients_sphome_MicroServiceErrorUtils__WEBPACK_IMPORTED_MODULE_10__["getMicroServiceErrorCode"])(httpStatus, isMSCVResponse);
            this._extraData.statusCode = httpStatus.toString();
            // Re-purposing responseStatus field to log status text information
            this._extraData.responseStatus = serverHttpResponse.statusText;
            var error = undefined;
            var errorResponseJson = responseJson;
            // Classify error based on status code we receive
            if (this._getIsExpectedError(httpStatus)) {
                error = new Error(EXPECTED_ERROR);
                this._extraData.id = errorResponseJson.ErrorLabel;
                qosMonitor.writeExpectedFailure(errorCode, error, this._extraData);
            }
            else {
                if (this._getIsUnExpectedRetryableError(httpStatus)) {
                    // Unexpected error if status code is 5xx, which we can retry
                    error = new Error(UNEXPECTED_RETRYABLE_ERROR);
                }
                else {
                    // All other errors
                    error = new Error(UNEXPECTED_ERROR);
                    this._logThrottledResultToQos(this._extraData, httpStatus);
                }
                this._extraData.id = errorResponseJson.ErrorLabel;
                qosMonitor.writeUnexpectedFailure(errorCode, error, this._extraData);
            }
            throw error;
        }
    };
    MicroServiceNewsDataProvider.prototype._requestData = function (requestInfo, retryCount) {
        var _this = this;
        var qosMonitor = new _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__["_QosMonitor"](this.qosMonitorLabel + ".getNewsItems");
        this._extraData = Object(_models_NewsDataSource__WEBPACK_IMPORTED_MODULE_6__["_getExtraDataForLogging"])(requestInfo, this._pageContext);
        this._extraData.retryCount = retryCount;
        return this.executeRequest(requestInfo)
            .then(function (response) {
            if (response instanceof _microsoft_sp_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientResponse"]) {
                return _this._parseHttpClientResponse(response, requestInfo, qosMonitor);
            }
            if (_DataProviderFlights__WEBPACK_IMPORTED_MODULE_8__["default"].isCacheAndNetworkEnabled()) {
                var cacheAndNetworkResponse = response;
                if (cacheAndNetworkResponse.serverResponse && cacheAndNetworkResponse.cachedResponse) {
                    return _this._applyCacheAndNetwork(cacheAndNetworkResponse, requestInfo, qosMonitor);
                }
            }
            var clientCachableResponse = response;
            return _this._parseClientCachableResponse(clientCachableResponse, requestInfo, qosMonitor);
        })
            .catch(function (error) {
            if (!qosMonitor.hasEnded && _this._extraData.retryCount === 0) {
                if (error instanceof _httpClients__WEBPACK_IMPORTED_MODULE_5__["SPHomeMicroserviceNotAvailableError"]) {
                    qosMonitor.writeUnexpectedFailure(TOKEN_NOT_AVAILABLE, error, _this._extraData);
                }
                else {
                    var errorMessage = error.message;
                    error = new Error(UNEXPECTED_ERROR);
                    qosMonitor.writeUnexpectedFailure(errorMessage, error, _this._extraData);
                }
            }
            throw error;
        });
    };
    MicroServiceNewsDataProvider.prototype._requestDataWithRetry = function (requestInfo, retryCount) {
        var _this = this;
        var httpResponse;
        var isMSCVResponse;
        var qosMonitor = new _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__["_QosMonitor"](this.qosMonitorLabel + ".getNewsItems");
        var validResponse = false;
        this._extraData = Object(_models_NewsDataSource__WEBPACK_IMPORTED_MODULE_6__["_getExtraDataForLogging"])(requestInfo, this._pageContext);
        this._extraData.retryCount = retryCount;
        return this.executeRequest_deprecated(requestInfo)
            .then(function (response) {
            httpResponse = response;
            _this._extraData.URL = _utilities_NewsUtilities__WEBPACK_IMPORTED_MODULE_7__["NewsUtilities"].removeQueryParam(response.url, MAIN_SITE_URL);
            _this._extraData.MSCV = response.headers.get('MS-CV');
            _this._addMoreAdditionalFields(response);
            isMSCVResponse = Object(_httpClients_sphome_MicroServiceErrorUtils__WEBPACK_IMPORTED_MODULE_10__["hasResponseMSCV"])(_this._extraData.MSCV, _this._extraData.URL);
            validResponse = response.ok && !!isMSCVResponse;
            return response.json();
        })
            .then(function (responseJson) {
            if (validResponse) {
                return _this._processRawData(responseJson, requestInfo, qosMonitor);
            }
            else {
                var httpStatus = httpResponse.status;
                var errorCode = Object(_httpClients_sphome_MicroServiceErrorUtils__WEBPACK_IMPORTED_MODULE_10__["getMicroServiceErrorCode"])(httpStatus, isMSCVResponse);
                _this._extraData.statusCode = httpStatus.toString();
                // Re-purposing responseStatus field to log status text information
                _this._extraData.responseStatus = httpResponse.statusText;
                var error = undefined;
                var errorResponseJson = responseJson;
                // Classify error based on status code we receive
                if (_this._getIsExpectedError(httpStatus)) {
                    error = new Error(EXPECTED_ERROR);
                    _this._extraData.id = errorResponseJson.ErrorLabel;
                    qosMonitor.writeExpectedFailure(errorCode, error, _this._extraData);
                }
                else {
                    if (_this._getIsUnExpectedRetryableError(httpStatus)) {
                        // Unexpected error if status code is 5xx, which we can retry
                        error = new Error(UNEXPECTED_RETRYABLE_ERROR);
                    }
                    else {
                        // All other errors
                        error = new Error(UNEXPECTED_ERROR);
                        _this._logThrottledResultToQos(_this._extraData, httpStatus);
                    }
                    _this._extraData.id = errorResponseJson.ErrorLabel;
                    qosMonitor.writeUnexpectedFailure(errorCode, error, _this._extraData);
                }
                throw error;
            }
        })
            .catch(function (error) {
            if (!qosMonitor.hasEnded && _this._extraData.retryCount === 0) {
                if (error instanceof _httpClients__WEBPACK_IMPORTED_MODULE_5__["SPHomeMicroserviceNotAvailableError"]) {
                    qosMonitor.writeUnexpectedFailure(TOKEN_NOT_AVAILABLE, error, _this._extraData);
                }
                else {
                    var errorMessage = error.message;
                    error = new Error(UNEXPECTED_ERROR);
                    qosMonitor.writeUnexpectedFailure(errorMessage, error, _this._extraData);
                }
            }
            throw error;
        });
    };
    MicroServiceNewsDataProvider.prototype._writeToEmptyResultsMonitor = function (cacheHit, sourceIndicator, error) {
        var qosMonitorEmptyResults = new _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__["_QosMonitor"](ZERO_RESULTS_QOS_MONITOR_LABEL);
        // Re-purposing mySiteCacheHit field to log news data provider information
        this._extraData.mySiteCacheHit = cacheHit;
        // Re-purposing instanceId field to log news data provider information
        this._extraData.dataProvider = this.qosMonitorLabel;
        // Re-purposing source field to indicate whether cache or server response is
        this._extraData.source = sourceIndicator;
        if (error) {
            qosMonitorEmptyResults.writeUnexpectedFailure(sourceIndicator, error, this._extraData);
        }
        else {
            if (cacheHit && sourceIndicator === "" + TAG_CACHE + TAG_SERVER + EMPTY_RESPONSE) {
                qosMonitorEmptyResults.writeExpectedFailure(sourceIndicator, new Error('Expected Cache and Server Empty Result'), this._extraData);
            }
            else {
                qosMonitorEmptyResults.writeSuccess(this._extraData);
            }
        }
    };
    /**
     * Request count is needed to match start/end times as there could be multiple calls for same data provider.
     */
    MicroServiceNewsDataProvider._requestCount = 0;
    return MicroServiceNewsDataProvider;
}());
/* harmony default export */ __webpack_exports__["default"] = (MicroServiceNewsDataProvider);


/***/ }),

/***/ "ui8f":
/*!***********************************************************!*\
  !*** ./lib/dataProviders/search/enums/ManagedDataType.js ***!
  \***********************************************************/
/*! exports provided: ManagedDataType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagedDataType", function() { return ManagedDataType; });
/**
 * @internal
 */
// tslint:disable-next-line:typedef variable-name
var ManagedDataType = {
    Text: 1,
    Integer: 2,
    Decimal: 3,
    DateTime: 4,
    YesNo: 5,
    Binary: 6,
    Double: 7
};


/***/ }),

/***/ "ukKy":
/*!**********************************************!*\
  !*** ./lib/dataSources/base/SPDataSource.js ***!
  \**********************************************/
/*! exports provided: SPDataSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SPDataSource", function() { return SPDataSource; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _microsoft_sp_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/sp-http */ "vlQI");
/* harmony import */ var _microsoft_sp_http__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_http__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _BaseDataSource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./BaseDataSource */ "RSuL");
/* harmony import */ var _loc_Strings_resx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./loc/Strings.resx */ "6DSs");
var _loc_Strings_resx__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./loc/Strings.resx */ "6DSs", 1);





// @todo: VSO: 335499 Move data sources to odsp-datasources
/**
 * @internal
 */
var SPDataSource = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(SPDataSource, _super);
    function SPDataSource(options) {
        var _this = _super.call(this, options) || this;
        _this._spHttpClient = options.spHttpClient;
        return _this;
    }
    /**
     * Issue an HTTP GET to a REST resource.
     *
     * Parameter values must be sanitized for the URL beforehand.
     * @param baseEndPoint - path to the site providing the api end point
     * @param apiRelativePath - REST endpoint which may include query string parameters
     * @param queryString - additional query string parameters not already in the apiRelativePath
     * @param dataSourceName - data source name for error output
     * @param dataSourceMethodName - data source method name for error output
     * @param headers - headers to append to the request
     * @param throwHttpClientResponse - Throw the response error rather than a generated error
     * @param skipJsonParse - Optionally skip JSON.parse of response
     */
    SPDataSource.prototype.get = function (baseEndPoint, apiRelativePath, queryString, dataSourceName, dataSourceMethodName, 
    // work-around a build issue, declaring "headers?: Header" adds whatwg-fetch dependency
    // @todo: VSO #339907 to resolve the issue so the "any" can be changed to "Header".
    headers, // tslint:disable-line:no-any
    throwHttpClientResponse, skipJsonParse
    // tslint:disable-next-line:no-any
    ) {
        var requestUrl = this.buildUrl(baseEndPoint, apiRelativePath, queryString);
        return this._getResponse(this._spHttpClient.get(requestUrl, _microsoft_sp_http__WEBPACK_IMPORTED_MODULE_1__["SPHttpClient"].configurations.v1, { headers: headers }), dataSourceName, dataSourceMethodName, throwHttpClientResponse, skipJsonParse);
    };
    /**
     * Issue an HTTP POST to a REST resource.
     *
     * URL related parameter values must be sanitized beforehand.
     * @param baseEndPoint - path to the site providing the api end point
     * @param apiRelativePath - REST endpoint which may include query string parameters
     * @param queryString - additional query string parameters not already in the apiRelativePath
     * @param body - JSON content to post to the REST API
     * @param dataSourceName - data source name for error output
     * @param dataSourceMethodName - data source method name for error output
     * @param headers - headers to append to the request
     * @param throwHttpClientResponse - include raw response as error output
     * @param skipJsonParse - Optionally skip JSON.parse of response
     */
    SPDataSource.prototype.post = function (baseEndPoint, apiRelativePath, queryString, body, dataSourceName, dataSourceMethodName, 
    // work-around a build issue, declaring "headers?: Header" adds whatwg-fetch dependency
    // @todo: VSO #339907 to resolve the issue so the "any" can be changed to "Header".
    headers, // tslint:disable-line:no-any
    throwHttpClientResponse, skipJsonParse
    // tslint:disable-next-line:no-any
    ) {
        var requestUrl = this.buildUrl(baseEndPoint, apiRelativePath, queryString);
        return this._getResponse(this._spHttpClient.post(requestUrl, _microsoft_sp_http__WEBPACK_IMPORTED_MODULE_1__["SPHttpClient"].configurations.v1, { body: body, headers: headers }), dataSourceName, dataSourceMethodName, throwHttpClientResponse, skipJsonParse);
    };
    /**
     * Issue an HTTP PATCH to a REST resource.
     *
     * URL related parameter values must be sanitized beforehand.
     * @param baseEndPoint - path to the site providing the api end point
     * @param apiRelativePath - REST endpoint which may include query string parameters
     * @param queryString - additional query string parameters not already in the apiRelativePath
     * @param body - JSON content to patch to the REST API
     * @param dataSourceName - data source name for error output
     * @param dataSourceMethodName - data source method name for error output
     * @param headers - headers to append to the request
     * @param throwHttpClientResponse - include raw response as error output
     * @param skipJsonParse - Optionally skip JSON.parse of response
     */
    SPDataSource.prototype.patch = function (baseEndPoint, apiRelativePath, queryString, body, dataSourceName, dataSourceMethodName, 
    // work-around a build issue, declaring "headers?: Header" adds whatwg-fetch dependency
    // @todo: VSO #339907 to resolve the issue so the "any" can be changed to "Header".
    headers, // tslint:disable-line:no-any
    throwHttpClientResponse, skipJsonParse
    // tslint:disable-next-line:no-any
    ) {
        var requestUrl = this.buildUrl(baseEndPoint, apiRelativePath, queryString);
        return this._getResponse(this._spHttpClient.fetch(requestUrl, _microsoft_sp_http__WEBPACK_IMPORTED_MODULE_1__["SPHttpClient"].configurations.v1, {
            body: body,
            headers: headers,
            method: 'PATCH'
        }), dataSourceName, dataSourceMethodName, throwHttpClientResponse, skipJsonParse);
    };
    SPDataSource.prototype._getResponse = function (promise, dataSourceName, dataSourceMethodName, throwHttpClientResponse, skipJsonParse
    // tslint:disable-next-line:no-any
    ) {
        return promise.then(function (response) {
            if (response.ok) {
                if (skipJsonParse) {
                    return {};
                }
                else {
                    return response.json();
                }
            }
            else {
                var errorMessage_1 = _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__["Text"].format(_loc_Strings_resx__WEBPACK_IMPORTED_MODULE_4__["DataSourceResponseError"], dataSourceName, dataSourceMethodName, response.status, response.statusMessage);
                if (throwHttpClientResponse) {
                    throw response;
                }
                else {
                    return response.json().then(function (error) {
                        throw {
                            message: errorMessage_1,
                            status: response.status,
                            correlationId: response.correlationId ? response.correlationId.toString() : '',
                            innerError: error
                        };
                    });
                }
            }
        });
    };
    return SPDataSource;
}(_BaseDataSource__WEBPACK_IMPORTED_MODULE_3__["BaseDataSource"]));



/***/ }),

/***/ "urBa":
/*!**********************************************!*\
  !*** ./lib/models/ISeeAllQueryParameters.js ***!
  \**********************************************/
/*! exports provided: SeeAllPageLayoutWebparts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeeAllPageLayoutWebparts", function() { return SeeAllPageLayoutWebparts; });
/**
 * @internal
 */
// tslint:disable-next-line:typedef variable-name
var SeeAllPageLayoutWebparts = {
    HighlightedContent: 1,
    SiteActivity: 2,
    Sites: 3,
    RecentDocuments: 4,
    OfficeFeed: 5,
    MyTopics: 6,
    Other: 999
};


/***/ }),

/***/ "ut3N":
/*!********************************************!*\
  !*** external "@microsoft/sp-diagnostics" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_ut3N__;

/***/ }),

/***/ "vlQI":
/*!*************************************!*\
  !*** external "@microsoft/sp-http" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_vlQI__;

/***/ }),

/***/ "vmDi":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-utilities@29.7.9_5d977624104b06c7bcaa2de974ff51f1/node_modules/@ms/odsp-utilities/lib/alternativeUrls/SPAlternativeUrls.js ***!
  \*******************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Loading @ms/odsp-utilities/./lib/alternativeUrls/SPAlternativeUrls.js
var pkg = __webpack_require__(/*! @ms/odsp-core-bundle */ "K9kD");
module.exports = pkg.SPAlternativeUrls;

/***/ }),

/***/ "wWkW":
/*!**********************************************************************!*\
  !*** ./lib/dataProviders/contentRollup/ContentRollupDataProvider.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/sp-lodash-subset */ "Pk8u");
/* harmony import */ var _microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ms/sp-component-utilities */ "hiL/");
/* harmony import */ var _ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _search_PersonaSettingsCache__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../search/PersonaSettingsCache */ "IIPt");
/* harmony import */ var _search_SearchDataProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../search/SearchDataProvider */ "dU3L");





/**
 * TODO: Consider moving this logic to ContentRollupWebPart.ts
 * @internal
 */
var ContentRollupDataProvider = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ContentRollupDataProvider, _super);
    function ContentRollupDataProvider() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._mapResponse = function (searchResult) {
            var result = [];
            var extensions = ['aspx', 'html', 'htm'];
            for (var _i = 0, _a = searchResult.rows; _i < _a.length; _i++) {
                var row = _a[_i];
                var editor = _this._personaSettingsCache.getPerson(row.EditorOwsUser, row.ModifiedBy);
                var webPath = extensions.indexOf(row.FileExtension) > -1
                    ? row.Path
                    : _ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_2__["SPUtility"].getWebPathOfFile(row.DefaultEncodingURL ? row.DefaultEncodingURL : row.Path);
                var modifiedDate = row.LastModifiedTime;
                /**
                 * SitePath is returned as two parts separated by a semi-colon.
                 * Example:
                 * https://contoso.sharepoint.com/sites/teamsite/sitepages/;com.sharepoint.contoso./sites/teamsite/sitepages/
                 * The first value is the one we want for SitePath.
                 */
                var sitePath = row.SitePath;
                if (sitePath) {
                    sitePath = sitePath.split(';')[0];
                }
                var formattedDate = _ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_2__["SPFormatDateTime"].formatTimestampToDisplayDate(modifiedDate, _this._pageContext, {
                    skeleton: 'yMMMd'
                });
                var item = _microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_1__["extend"](row, {
                    Name: editor.name,
                    Email: editor.email,
                    ProfileImageSrc: editor.profileImageSrc,
                    Initials: editor.initials,
                    InitialsColor: editor.initials,
                    WebPath: webPath,
                    ModifiedDate: formattedDate,
                    SitePath: sitePath
                });
                if (item.SiteName) {
                    item.SiteName = encodeURI(item.SiteName);
                }
                result.push(item);
            }
            /* tslint:disable:no-any */
            return new Promise(function (resolve, reject) {
                return resolve(result);
            });
            /* tslint:enable: no-any */
        };
        return _this;
    }
    ContentRollupDataProvider.prototype._initVariables = function () {
        this._personaSettingsCache = new _search_PersonaSettingsCache__WEBPACK_IMPORTED_MODULE_3__["default"]();
    };
    return ContentRollupDataProvider;
}(_search_SearchDataProvider__WEBPACK_IMPORTED_MODULE_4__["SearchDataProvider"]));
/* harmony default export */ __webpack_exports__["default"] = (ContentRollupDataProvider);


/***/ }),

/***/ "wo2m":
/*!*********************************************************!*\
  !*** ./lib/dataProviders/list/enums/ListRequestType.js ***!
  \*********************************************************/
/*! exports provided: ListRequestType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListRequestType", function() { return ListRequestType; });
/**
 * @internal
 */
// tslint:disable-next-line:typedef variable-name
var ListRequestType = {
    List: 1,
    Item: 2,
    Field: 3
};


/***/ }),

/***/ "x7Ly":
/*!*************************************************************!*\
  !*** ./lib/dataProviders/event/EventsSearchDataProvider.js ***!
  \*************************************************************/
/*! exports provided: EventsSearchDataProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventsSearchDataProvider", function() { return EventsSearchDataProvider; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _search_SearchDataProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../search/SearchDataProvider */ "dU3L");
/* harmony import */ var _EventTimeZoneUtilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EventTimeZoneUtilities */ "SkGr");
/* harmony import */ var _DataProviderFlights__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../DataProviderFlights */ "Xkwe");
// @copyright (c) Microsoft Corporation. All rights reserved.




/**
 * @internal
 */
var EventsSearchDataProvider = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(EventsSearchDataProvider, _super);
    function EventsSearchDataProvider() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._mapResponse = function (searchResult) {
            var timeZone = _this._pageContext.user.preferUserTimeZone
                ? _this._pageContext.user.timeZoneInfo
                : _this._pageContext.web.timeZoneInfo;
            var result = searchResult.rows.map(function (row) {
                var isAllDayEvent = row.IsAllDayEvent === 'true';
                var startTime = _EventTimeZoneUtilities__WEBPACK_IMPORTED_MODULE_2__["default"].dateStringToLocalDate(row.EventsRollUpStartDate.toString(), timeZone, isAllDayEvent);
                var endTime = _EventTimeZoneUtilities__WEBPACK_IMPORTED_MODULE_2__["default"].dateStringToLocalDate(row.EventsRollUpEndDate.toString(), timeZone, isAllDayEvent);
                return {
                    endTime: endTime,
                    isAllDayEvent: isAllDayEvent,
                    startTime: startTime,
                    id: row.ListItemID,
                    attendees: undefined,
                    audiences: undefined,
                    bannerUrl: Object(_DataProviderFlights__WEBPACK_IMPORTED_MODULE_3__["isEventsWebPartFluentFlightEnabled"])()
                        ? row.BannerUrlOWSURLH
                            ? row.BannerUrlOWSURLH.split(',')[0]
                            : ''
                        : undefined,
                    category: row.EventsRollUpCategory ? row.EventsRollUpCategory.toString() : '',
                    description: undefined,
                    geolocation: undefined,
                    linkName: undefined,
                    linkUrl: undefined,
                    listId: row.ListID,
                    location: row.Location ? row.Location.toString() : '',
                    nextPageQuery: undefined,
                    prevPageQuery: undefined,
                    title: row.Title,
                    webName: row.SiteTitle ? row.SiteTitle : '',
                    webUrl: row.SPWebUrl ? row.SPWebUrl.toString() : '',
                    containsAudiences: Object(_DataProviderFlights__WEBPACK_IMPORTED_MODULE_3__["isNewApiToCREventFlightEnabled"])() ? Boolean(row.ModernAudienceAadObjectIds) : false
                };
            });
            return Promise.resolve(result);
        };
        return _this;
    }
    Object.defineProperty(EventsSearchDataProvider, "selectProperties", {
        get: function () {
            var properties = [
                'EventsRollUpCategory',
                'EventsRollUpEndDate',
                'EventsRollUpStartDate',
                'IsAllDayEvent',
                'ListID',
                'ListItemID',
                'Location',
                'SiteTitle',
                'SPWebUrl',
                'Title'
            ];
            if (Object(_DataProviderFlights__WEBPACK_IMPORTED_MODULE_3__["isEventsWebPartFluentFlightEnabled"])()) {
                properties.push('BannerUrlOWSURLH');
            }
            return properties;
        },
        enumerable: true,
        configurable: true
    });
    return EventsSearchDataProvider;
}(_search_SearchDataProvider__WEBPACK_IMPORTED_MODULE_1__["SearchDataProvider"]));



/***/ }),

/***/ "y/+K":
/*!********************************************************!*\
  !*** ./lib/dataSources/listView/ListViewDataSource.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ms/sp-component-utilities */ "hiL/");
/* harmony import */ var _ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _dataSources_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../dataSources/base */ "jnk8");
// Copyright (c) Microsoft Corporation. All rights reserved.



/**
 * The data source for list view.
 *
 * @internal
 */
var ListViewDataSource = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ListViewDataSource, _super);
    function ListViewDataSource() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Add a view for the list.
     *
     * @param webAbsoluteUrl - URL to the site containing the list
     * @param listId - GUID identifying which list to add the view
     */
    ListViewDataSource.prototype.addView = function (webAbsoluteUrl, listId) {
        var apiRelativeUrl = "/_api/web/lists('" + listId + "')/Views/Add";
        var body = JSON.stringify({
            parameters: {
                __metadata: { type: 'SP.ViewCreationInformation' },
                PersonalView: false
            }
        });
        return this.post(webAbsoluteUrl, apiRelativeUrl, undefined, body, 'ListViewDataSource', 'addView', {
            Accept: 'application/json;odata=verbose',
            'Content-Type': 'application/json;odata=verbose',
            'Odata-Version': '3.0'
        }).then(function (jsonData) {
            return jsonData.d;
        });
    };
    /**
     * Update the ViewXml for a given view.
     *
     * @param webAbsoluteUrl - URL to the site containing the list
     * @param listId - GUID identifying which list the view belongs to
     * @param viewId - GUID of the view
     * @param viewXml - The CAML query string
     */
    ListViewDataSource.prototype.updateViewXml = function (webAbsoluteUrl, listId, viewId, viewXml) {
        var apiRelativeUrl = "/_api/web/lists('" + listId + "')/views('" + viewId + "')/SetViewXml()";
        var body = JSON.stringify({
            viewXml: viewXml
        });
        return this.post(webAbsoluteUrl, apiRelativeUrl, undefined, body, 'ListViewDataSource', 'updateViewXml', {
            Accept: 'application/json;odata=verbose',
            'Content-Type': 'application/json;odata=verbose',
            'Odata-Version': '3.0'
        }).then(function (jsonData) {
            return jsonData.d;
        });
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_1__["monitor"])('ListViewDataSource.addView')
    ], ListViewDataSource.prototype, "addView", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_1__["monitor"])('ListViewDataSource.updateViewXml')
    ], ListViewDataSource.prototype, "updateViewXml", null);
    return ListViewDataSource;
}(_dataSources_base__WEBPACK_IMPORTED_MODULE_2__["SPDataSource"]));
/* harmony default export */ __webpack_exports__["default"] = (ListViewDataSource);


/***/ }),

/***/ "y88i":
/*!********************************************!*\
  !*** external "@ms/odsp-utilities-bundle" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_y88i__;

/***/ }),

/***/ "y8rg":
/*!*************************************************************!*\
  !*** ./lib/dataProviders/news/MultiSiteNewsDataProvider.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _microsoft_sp_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/sp-http */ "vlQI");
/* harmony import */ var _microsoft_sp_http__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_http__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @microsoft/sp-lodash-subset */ "Pk8u");
/* harmony import */ var _microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _models_NewsDataSource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./models/NewsDataSource */ "aE90");
/* harmony import */ var _DataProviderFlights__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../DataProviderFlights */ "Xkwe");
/* harmony import */ var _MicroServiceNewsDataProvider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./MicroServiceNewsDataProvider */ "ugjH");
/* harmony import */ var _utilities_NewsUtilities__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utilities/NewsUtilities */ "JpAn");
/* harmony import */ var _loc_Strings_resx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./loc/Strings.resx */ "hE4m");
var _loc_Strings_resx__WEBPACK_IMPORTED_MODULE_7___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./loc/Strings.resx */ "hE4m", 1);
/* harmony import */ var _common_TieredCacheHelper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../common/TieredCacheHelper */ "nJGZ");
/**
 * @copyright Microsoft Corporation. All rights reserved.
 */









/**
 * @internal
 */
var MultiSiteNewsDataProvider = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(MultiSiteNewsDataProvider, _super);
    function MultiSiteNewsDataProvider() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.id = 'MultiSiteNews';
        _this.title = _loc_Strings_resx__WEBPACK_IMPORTED_MODULE_7__["MultiSiteNewsDataProviderTitle"];
        return _this;
    }
    Object.defineProperty(MultiSiteNewsDataProvider.prototype, "qosMonitorLabel", {
        get: function () {
            return 'MultiSiteNewsDataSource';
        },
        enumerable: true,
        configurable: true
    });
    MultiSiteNewsDataProvider.prototype.requestData = function (requestInfo) {
        if (requestInfo.siteList.length === 0) {
            return Promise.resolve(this._getNewsItemsWithPadding(requestInfo, 0));
        }
        return _super.prototype.requestData.call(this, requestInfo);
    };
    /* tslint:disable-next-line:no-any */
    MultiSiteNewsDataProvider.prototype.extractMicroserviceNewsItems = function (data) {
        return _utilities_NewsUtilities__WEBPACK_IMPORTED_MODULE_6__["NewsUtilities"].extractMicroserviceNewsItems(data, this._pageContext, true /*fallbackToCurrentSite*/);
    };
    MultiSiteNewsDataProvider.prototype.executeRequest_deprecated = function (requestInfo) {
        return this._sphomeHttpClient.post(this.getMicroservicePath(requestInfo), this._getSiteListAndFilterBody(requestInfo.siteList, requestInfo.filterKQLQuery));
    };
    MultiSiteNewsDataProvider.prototype.executeRequest = function (requestInfo) {
        var isCacheAndNetwork = _DataProviderFlights__WEBPACK_IMPORTED_MODULE_4__["default"].isCacheAndNetworkEnabled();
        var cacheOptions = {
            alias: _utilities_NewsUtilities__WEBPACK_IMPORTED_MODULE_6__["NewsUtilities"].aliasPrefix + this.id,
            id: requestInfo.webpartId,
            expirationDuration: 600000,
            cacheStrategy: isCacheAndNetwork ? _microsoft_sp_http__WEBPACK_IMPORTED_MODULE_1__["_CacheStrategy"].CacheAndNetwork : _microsoft_sp_http__WEBPACK_IMPORTED_MODULE_1__["_CacheStrategy"].CacheThenNetwork,
            extraProps: new Map([[_common_TieredCacheHelper__WEBPACK_IMPORTED_MODULE_8__["default"].useStalePropName, true]]) // tslint:disable-line:no-any
        };
        if (!requestInfo.canCacheRequest) {
            cacheOptions.cacheStrategy = _microsoft_sp_http__WEBPACK_IMPORTED_MODULE_1__["_CacheStrategy"].NetworkOnly;
        }
        return this._sphomeHttpClient.post(this.getMicroservicePath(requestInfo), this._getSiteListAndFilterBody(requestInfo.siteList, requestInfo.filterKQLQuery), 
        /*version*/ undefined, 
        /*extraHeaders*/ undefined, cacheOptions);
    };
    MultiSiteNewsDataProvider.prototype.getMicroservicePath = function (requestInfo) {
        var endpointPath = 'news/sites/filtered';
        var mainSiteUrlQuery = "mainSiteUrl=" + this._pageContext.site.absoluteUrl + "&";
        var queryParams = "start=" + requestInfo.skip + "&count=" + requestInfo.count;
        queryParams += Object(_models_NewsDataSource__WEBPACK_IMPORTED_MODULE_3__["_appendAudienceFilteringQueryParam"])(requestInfo);
        queryParams += Object(_models_NewsDataSource__WEBPACK_IMPORTED_MODULE_3__["_appendLanguageOverrideQueryParam"])(requestInfo);
        var queryCurrentSite = this._shouldQueryCurrentSite(requestInfo.siteList);
        return endpointPath + "?" + (queryCurrentSite ? mainSiteUrlQuery : '') + queryParams;
    };
    MultiSiteNewsDataProvider.prototype._getNewsItemsWithPadding = function (requestInfo, newsCount) {
        var paddingCount = _utilities_NewsUtilities__WEBPACK_IMPORTED_MODULE_6__["NewsUtilities"].getPaddingCount(requestInfo, newsCount);
        return _utilities_NewsUtilities__WEBPACK_IMPORTED_MODULE_6__["NewsUtilities"].getEmptyStateItems(requestInfo.emptyItemType, this.options.serviceScope, paddingCount, requestInfo.webpartWidth);
    };
    MultiSiteNewsDataProvider.prototype._shouldQueryCurrentSite = function (siteList) {
        var currentSiteId = this._pageContext.site.id.toString();
        var currentWebId = this._pageContext.web.id.toString();
        return (_microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_2__["findIndex"](siteList, function (site) { return site.ItemReference.SiteId === currentSiteId && site.ItemReference.WebId === currentWebId; }) > -1);
    };
    MultiSiteNewsDataProvider.prototype._getSiteListAndFilterBody = function (siteList, filterKQLQuery) {
        var referenceListItems = siteList.map(function (site) {
            return {
                Type: 'SiteReference',
                SiteId: site.ItemReference.SiteId,
                WebId: site.ItemReference.WebId
            };
        });
        return JSON.stringify({
            ReferenceList: referenceListItems,
            FilterQuery: filterKQLQuery
        });
    };
    return MultiSiteNewsDataProvider;
}(_MicroServiceNewsDataProvider__WEBPACK_IMPORTED_MODULE_5__["default"]));
/* harmony default export */ __webpack_exports__["default"] = (MultiSiteNewsDataProvider);


/***/ }),

/***/ "yCFC":
/*!************************************************************!*\
  !*** ./lib/httpClients/common/SPHttpMicroserviceClient.js ***!
  \************************************************************/
/*! exports provided: default, serviceKey */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "serviceKey", function() { return serviceKey; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _microsoft_sp_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/sp-http */ "vlQI");
/* harmony import */ var _microsoft_sp_http__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_http__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__);

// Copyright (c) Microsoft. All rights reserved.


/**
 * SPHttpMicroserviceClient is used to perform REST calls to the SharePoint Home microservice.
 * It abstracts the fetching of tokens and passing the correct headers
 * when calling the microservice.
 * @internal
 */
var SPHttpMicroserviceClient = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(SPHttpMicroserviceClient, _super);
    function SPHttpMicroserviceClient(serviceScope) {
        var _this = _super.call(this, serviceScope) || this;
        _this._requestUpdater = function (props) { return Promise.resolve(props); };
        return _this;
    }
    Object.defineProperty(SPHttpMicroserviceClient.prototype, "requestUpdater", {
        set: function (requestUpdater) {
            this._requestUpdater = requestUpdater;
        },
        enumerable: true,
        configurable: true
    });
    SPHttpMicroserviceClient.prototype._fetch = function (url, configuration, options) {
        var _this = this;
        return this._requestUpdater({ url: url, options: options }).then(function (props) {
            return _super.prototype._fetch.call(_this, props.url, configuration, props.options);
        });
    };
    return SPHttpMicroserviceClient;
}(_microsoft_sp_http__WEBPACK_IMPORTED_MODULE_1__["SPHttpClient"]));
/* harmony default export */ __webpack_exports__["default"] = (SPHttpMicroserviceClient);
/**
 * The service key for SPHttpMicroserviceClient.
 */
var serviceKey = _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__["ServiceKey"].create('sp-http:SPHttpMicroserviceClient', SPHttpMicroserviceClient);


/***/ }),

/***/ "zDft":
/*!****************************************************!*\
  !*** ./lib/search/enums/SearchAPISortDirection.js ***!
  \****************************************************/
/*! exports provided: SearchAPISortDirection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchAPISortDirection", function() { return SearchAPISortDirection; });
/**
 * @internal
 */
var SearchAPISortDirection = /** @class */ (function () {
    function SearchAPISortDirection() {
    }
    SearchAPISortDirection.ascending = 0;
    SearchAPISortDirection.descending = 1;
    return SearchAPISortDirection;
}());



/***/ })

/******/ })});;
//# sourceMappingURL=sp-dataproviders_[locale].js.map