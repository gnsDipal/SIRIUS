define("8217e442-8ed3-41fd-957d-b112e841286a_0.19.2", ["tslib","@ms/odsp-core-bundle","@microsoft/sp-lodash-subset","@microsoft/sp-core-library","@microsoft/sp-diagnostics"], function(__WEBPACK_EXTERNAL_MODULE__17wl__, __WEBPACK_EXTERNAL_MODULE_K9kD__, __WEBPACK_EXTERNAL_MODULE_Pk8u__, __WEBPACK_EXTERNAL_MODULE_UWqr__, __WEBPACK_EXTERNAL_MODULE_ut3N__) { return /******/ (function(modules) { // webpackBootstrap
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
/******/ 		"sp-telemetry": 0
/******/ 	};
/******/
/******/
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "chunk." + ({"vendors~sp-client-telemetry-aria":"vendors~sp-client-telemetry-aria"}[chunkId]||chunkId) + "_" + "none" + ".js"
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
/******/ 	var jsonpArray = window["webpackJsonp_8217e442_8ed3_41fd_957d_b112e841286a_0_19_2"] = window["webpackJsonp_8217e442_8ed3_41fd_957d_b112e841286a_0_19_2"] || [];
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
/******/ 	  var regex = (typeof spScriptNamePattern !== 'undefined') ? spScriptNamePattern : /sp-telemetry_none\.js/i;
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

/***/ "17wl":
/*!************************!*\
  !*** external "tslib" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__17wl__;

/***/ }),

/***/ "2iJd":
/*!***************************************************!*\
  !*** ./lib/Api/Performance/PerformanceFlights.js ***!
  \***************************************************/
/*! exports provided: _PerformanceFlight, _PerformanceExperiment, _ExperimentKillSwitches, _ExperimentStatus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_PerformanceFlight", function() { return _PerformanceFlight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_PerformanceExperiment", function() { return _PerformanceExperiment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_ExperimentKillSwitches", function() { return _ExperimentKillSwitches; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_ExperimentStatus", function() { return _ExperimentStatus; });
/**
 * List of Flights being tracked for performance impact
 * Use PerformanceLogger.trackFlight() API to track flight status
 *
 * @internal
 */
// tslint:disable-next-line:typedef variable-name
var _PerformanceFlight = {
    SearchPagePayForPlay: 690,
    O365ShellModuleJSClient: 1136,
    CSISuiteNavScriptAsyncClient: 654,
    CSISPHomeLazyLoadSearchPackage: 665,
    CSISPPagesLazyLoadSearchPackage: 666,
    SPPagesSuiteSearchBox: 1240,
    SPClientSuiteNavCommon: 1309,
    CortexKMExperiences: 1229,
    SuiteNavSharedControl: 1353,
    SPHomeNextGen: 1490,
    WexFasterInPlaceNav: 1585,
    WEXCacheThumbnails: 1737,
    SPFxJsonParse2: 1751,
    SPFxInjectTTIBootScript: 1793,
    LoadSecondPhaseShellResourcesImmediately: 1812,
    SPFxFindScrollableParent: 1850,
    SPListHostTransition: 1589,
    WexSPHomeCompanyPortalNavClient: 1276,
    DwellTimeForSharepointPage: 1604,
    WEXTieredCaching: 1703,
    WEXMySiteCacheMangementTieredCaching: 1705,
    WEXUseIndexedDBTieredCaching: 1693,
    WEXWebPartDependenciesPreloadFlight: 1989,
    WEXCanvasReadOnly: 1420,
    SPAppBarClient: 1399,
    YammerWPToTieredCaching: 1715,
    OfficeFeedWPToTieredCaching: 1710,
    WEXAkamaiV2PrivateCDNUpdate: 1994,
    WexCustomerPromise: 1468
};
/**
 * List of SPExperiments being tracked for performance impact
 * Use PerformanceLogger.trackExperiment() API to track Experiment status
 * Note: If the experiment is client-only, make sure you register a kill switch in _ExperimentKillSwitches.
 *
 * @internal
 */
// tslint:disable-next-line:typedef variable-name
var _PerformanceExperiment = {
    SearchBoxPayForPlay: 90043,
    SearchPagePayForPlay: 90031,
    SOXHCWPSubstrateSearchExperiment: 90013,
    MarkFailureInPerformanceLoggerV2: 90036,
    WEXUseIndexedDBTieredCachingExp: 90026,
    WEXMySiteCacheTieredCachingExp: 90047,
    WEXExperimentCDNPerf: 90057,
    SPSuiteNavFetchData: 90008,
    SppplatTwoPhaseRender: 90051,
    WEXTieredCachingLateFlushExp: 90042,
    WEXTieredCachingCacheAndNetwork: 90044,
    VideoMetadataExperiment: 90030,
    SppplatOptimisticPreloadNew: 90009,
    SPHomeTieredCaching: 90060,
    QuickLinkAudienceTargetingExp: 90061,
    HeroVideoMetadataExperiment: 90001,
    WEXImagePreAllocate: 90034,
    PagesClientServerRequestOptimzationExperiment: 90033,
    WEXImageBreakpointStraddlePerfExperiment: 90017,
    SPWebWorkerExp: 90037,
    WEXImgTagOptimization: 90075,
    WEXTitleRegionCroppingExperiment: 90070,
    SOXPageWaitForExpectedControls: 90073,
    WEXViewPortReducePositionCheck: 90019,
    WEXImproveWidthCacheRate: 90078,
    SOXEventUpdate: 90074
};
// This is workaround to ensure we can quickly suspend a perf experiment without deleting the experiment.
// This can be removed if in future experiments can be suspended on flightOnRails.
var _ExperimentKillSwitches = new Map([
    [_PerformanceExperiment.SearchBoxPayForPlay, '3637a3d8-c5d8-4715-923f-fe799346e3fe'],
    [_PerformanceExperiment.SearchPagePayForPlay, '3f06314f-43f6-41f5-8e64-e4f11d0d1cab'],
    [_PerformanceExperiment.SOXHCWPSubstrateSearchExperiment, 'cbd5a3cb-1bec-452e-a1d9-0af2ddca85c1'],
    [_PerformanceExperiment.WEXUseIndexedDBTieredCachingExp, '0e92ea12-b921-49a7-8512-fcec33d254b3'],
    [_PerformanceExperiment.WEXMySiteCacheTieredCachingExp, '9492c151-b23d-4b5c-897c-886d0e5a8cac'],
    [_PerformanceExperiment.WEXExperimentCDNPerf, '96656ede-5be8-476e-bd8f-7c2aa16405ba'],
    [_PerformanceExperiment.SPSuiteNavFetchData, 'fa2b8329-e52e-4361-9e7c-89c09723af19'],
    [_PerformanceExperiment.SppplatTwoPhaseRender, '2b47ad80-61a7-4eb4-8084-f3a5ded03fb7'],
    [_PerformanceExperiment.WEXTieredCachingLateFlushExp, '34d9be30-c822-4146-a2c3-359fa87265b5'],
    [_PerformanceExperiment.WEXTieredCachingCacheAndNetwork, 'dd708dd5-e8fc-4b5e-8f0e-0dcd84c0eb13'],
    [_PerformanceExperiment.VideoMetadataExperiment, 'a79595d4-3f72-40ed-a474-7887101bc7d9'],
    [_PerformanceExperiment.SppplatOptimisticPreloadNew, '58f200d5-4b67-40d9-8670-171727134f4a'],
    [_PerformanceExperiment.SPHomeTieredCaching, '8b29092a-d357-4f4a-8e00-02743f9d2df0'],
    [_PerformanceExperiment.QuickLinkAudienceTargetingExp, '2a3edb34-a1c6-4cf8-b7a4-eff0de2fa1e2'],
    [_PerformanceExperiment.HeroVideoMetadataExperiment, '9e925343-6adf-4060-bd97-359a6867b4f8'],
    [_PerformanceExperiment.WEXImagePreAllocate, 'd4df8a8d-968b-4977-89b7-2d99163bc1aa'],
    [_PerformanceExperiment.WEXImageBreakpointStraddlePerfExperiment, '379e8b8d-c257-420b-afac-94a5bec61e82'],
    [_PerformanceExperiment.SPWebWorkerExp, '0e3a26fb-45b7-49e6-9ce9-a58616ade032'],
    [_PerformanceExperiment.WEXImgTagOptimization, '5953c76d-3d3f-4c12-83d9-15a85955d41d'],
    [_PerformanceExperiment.WEXTitleRegionCroppingExperiment, '3b26b051-8150-4a1b-b7e9-25dcebb352ab'],
    [_PerformanceExperiment.SOXPageWaitForExpectedControls, '7579009e-b058-49b2-a94a-1741ff607a87'],
    [_PerformanceExperiment.SOXEventUpdate, '083a7db3-35f8-4879-b147-7ed5c72b9c1b'],
    [_PerformanceExperiment.WEXViewPortReducePositionCheck, 'ec954142-28d2-4512-bd4b-76004dbd31d6'],
    [_PerformanceExperiment.WEXImproveWidthCacheRate, '08b438c4-326b-432d-94b1-8e8898721ecf']
]);
/**
 * Possible value for _PerformanceExperiment
 *
 * @internal
 */
// tslint:disable-next-line:typedef variable-name
var _ExperimentStatus = {
    /**
     * Experiment is not pushed to current environment
     */
    Disabled: 'Disabled',
    /**
     * Experiment is enabled in current environment for current request with Control existing behavior.
     */
    Control: 'Control',
    /**
     * Experiment is enabled with new treatment behavior.
     */
    Treatment: 'Treatment',
    /**
     * Experiment is enabled with new treatment #2 behavior. Used for multi-value perf experiments
     */
    Treatment2: 'Treatment2',
    /**
     * Experiment is enabled with new treatment #3 behavior. Used for multi-value perf experiments
     */
    Treatment3: 'Treatment3',
    /**
     * Experiment is enabled with new treatment #4 behavior. Used for multi-value perf experiments
     */
    Treatment4: 'Treatment4',
    /**
     * Experiment is enabled with new treatment #5 behavior. Used for multi-value perf experiments
     */
    Treatment5: 'Treatment5'
};


/***/ }),

/***/ "4Fgs":
/*!************************************!*\
  !*** ./lib/ABExperimentWrapper.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ms/odsp-core-bundle */ "K9kD");
/* harmony import */ var _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_1__);


/**
 * We need to wrap ABExperiment since it does not comply with TSDoc
 * documentation requirements for apis.
 * @internal
 */
var ABExperimentWrapper = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ABExperimentWrapper, _super);
    function ABExperimentWrapper() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ABExperimentWrapper;
}(_ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_1__["ABExperiment"]));
/* harmony default export */ __webpack_exports__["default"] = (ABExperimentWrapper);


/***/ }),

/***/ "5yjk":
/*!*****************************************!*\
  !*** ./lib/TelemetrySettingsManager.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/sp-lodash-subset */ "Pk8u");
/* harmony import */ var _microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_1__);
/**
 * @copyright Microsoft Corporation. All rights reserved.
 */


/**
 * TelemetrySettingsManager stores the configuration for Telemetry passed
 * down by the calling application during bootstrapping.
 *
 * @internal
 */
var TelemetrySettingsManager = /** @class */ (function () {
    function TelemetrySettingsManager() {
    }
    TelemetrySettingsManager.initialize = function (settings) {
        this.settings = Object(_microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_1__["cloneDeep"])(settings);
        this._initialized = true;
        this._normalizeContextIds();
    };
    TelemetrySettingsManager.updateSettings = function (settings) {
        this.settings = Object(_microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_1__["merge"])(this.settings, settings);
        this._normalizeContextIds();
    };
    Object.defineProperty(TelemetrySettingsManager, "isInitialized", {
        get: function () {
            return this._initialized;
        },
        enumerable: false,
        configurable: true
    });
    TelemetrySettingsManager._normalizeId = function (id) {
        var guid = _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Guid"].tryParse(id);
        return guid ? guid.toString() : id;
    };
    TelemetrySettingsManager._normalizeContextIds = function () {
        this.settings.siteId = this._normalizeId(this.settings.siteId);
        this.settings.webId = this._normalizeId(this.settings.webId);
        this.settings.correlationId = this._normalizeId(this.settings.correlationId);
        if (this.settings.listId) {
            this.settings.listId = this._normalizeId(this.settings.listId);
            if (this.settings.listItemUniqueId) {
                this.settings.listItemUniqueId = this._normalizeId(this.settings.listItemUniqueId);
            }
        }
    };
    TelemetrySettingsManager._initialized = false;
    return TelemetrySettingsManager;
}());
/* harmony default export */ __webpack_exports__["default"] = (TelemetrySettingsManager);


/***/ }),

/***/ "F00A":
/*!***************************************************!*\
  !*** ./lib/Api/Performance/PageTransitionType.js ***!
  \***************************************************/
/*! exports provided: PageTransitionType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageTransitionType", function() { return PageTransitionType; });
/**
 * This const object is used to track performance for different types of transitions.
 * @internal
 */
// tslint:disable-next-line:typedef variable-name
var PageTransitionType = {
    /**
     * Default value
     */
    none: 0,
    /**
     * Full page load
     */
    fullPageLoad: 4,
    /**
     * In app transition
     */
    onePageAppNavigation: 5,
    /**
     * Cross app transition
     */
    crossAppNavigation: 10
};


/***/ }),

/***/ "H4tX":
/*!***************************************************!*\
  !*** ./lib/Api/Performance/IPerformanceLogger.js ***!
  \***************************************************/
/*! exports provided: IPerformanceLogger, PerformanceDataDimensions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerformanceDataDimensions", function() { return PerformanceDataDimensions; });
/* harmony import */ var _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ms/odsp-core-bundle */ "K9kD");
/* harmony import */ var _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IPerformanceLogger", function() { return _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__["RumOneLogger"]; });

// these should really be referenced from odsp-utilities/src/logging/rumone/rumonelogger.ts

/**
 * Dimension value specifiers.
 *
 * @internal
 */
// tslint:disable-next-line:typedef variable-name
var PerformanceDataDimensions = {
    /**
     * Dimension value that specifies 'layout'.
     */
    Layout: 'layout:',
    /**
     * Dimension value that specifies 'dataProvider'.
     */
    DataProvider: 'dataProvider:'
};


/***/ }),

/***/ "K9kD":
/*!***************************************!*\
  !*** external "@ms/odsp-core-bundle" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_K9kD__;

/***/ }),

/***/ "Pk8u":
/*!**********************************************!*\
  !*** external "@microsoft/sp-lodash-subset" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_Pk8u__;

/***/ }),

/***/ "RrtT":
/*!**************************!*\
  !*** ./lib/Telemetry.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/sp-diagnostics */ "ut3N");
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ms/odsp-core-bundle */ "K9kD");
/* harmony import */ var _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ABExperimentWrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ABExperimentWrapper */ "4Fgs");
/* harmony import */ var _AriaLogger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./AriaLogger */ "n5Pd");
/* harmony import */ var _TelemetrySettingsManager__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./TelemetrySettingsManager */ "5yjk");
/* harmony import */ var _SPPerfExperiment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./SPPerfExperiment */ "awom");
/**
 * @copyright Microsoft Corporation. All rights reserved.
 */







// Killswitch Guid to only allow processing once
var START_PROCESSING_ONCE_KILL_SWITCH = _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Guid"].parse('5d7dbb96-4e5b-4dc1-8451-c59a0c2b7ba0');
// The URL query parameter name to set debug experiments
var DEBUG_EXPERIMENTS_QUERY_PARAM = 'expOverrides';
var DEBUG_QUARANTINE_QUERY_PARAM = 'perfQuarantine';
/**
 * Telemetry class initializes the telemetry pipeline and connect to backend server.
 * Telemetry contains a set of internal APIs that collects data and reports data via
 * the pipeline. The APIs consist of
 *  -- TraceLogger - for logging diagnostic information
 *  -- EngagementLogger - for tracking user interaction with a feature
 *  -- QOS - quality of service, i.e. collecting statistics for how often an operation succeeds/fails
 *  -- PerformanceLogger - for tracking performance data.
 *
 * @internal
 */
var Telemetry = /** @class */ (function () {
    function Telemetry() {
    }
    Object.defineProperty(Telemetry, "buildNumber", {
        /**
         * The build number of the manifests provided by the initial page load
         */
        get: function () {
            return Telemetry._buildNumber;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Initializes the telemetry pipelines based on telemetry settings.
     * Workload name indicates which workload the telemetry data belongs to.
     */
    Telemetry.initialize = function (workloadName, settings) {
        if (!Telemetry._isInitialized) {
            this._workload = workloadName;
            this._originalSession = settings.correlationId;
            _TelemetrySettingsManager__WEBPACK_IMPORTED_MODULE_5__["default"].initialize(settings);
            // This is the telemetry settings with normalized Ids after TelemetrySettingsManager initialize.
            var telemetrySettings = _TelemetrySettingsManager__WEBPACK_IMPORTED_MODULE_5__["default"].settings;
            Telemetry._initializeExperiments(telemetrySettings);
            Telemetry._buildNumber = settings.buildNumber;
            Telemetry._isInitialized = true;
        }
    };
    /**
     * Initializes the telemetry pipelines that depend on odsp-telemetry
     */
    Telemetry.registerTelemetryBackend = function () {
        _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__["_EngagementLogger"]._addHandler(_ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_2__["Engagement"]);
        _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__["_QosLogger"].instance.setLogger(_ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_2__["Qos"]); // tslint:disable-line:no-any
        Telemetry._initializeAria(this._workload);
    };
    /**
     * Loads odsp-telemetry dependencies and
     * processes all the logs in real time (QoS, Engagement and Performance)
     */
    Telemetry.startRealTimeProcessing = function () {
        if (!_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPKillSwitch"].isActivated(START_PROCESSING_ONCE_KILL_SWITCH, '3/12/2020', 'Only allow start processing once')) {
            if (Telemetry._startedRealTimeProcessing) {
                return;
            }
            Telemetry._startedRealTimeProcessing = true;
        }
        Telemetry.registerTelemetryBackend();
        _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__["_EngagementLogger"].startRealTimeProcessing();
        _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__["_QosMonitor"].startRealTimeProcessing();
    };
    Object.defineProperty(Telemetry, "isInitialized", {
        /**
         * Returns true if telemetry has been already initialized.
         */
        get: function () {
            return this._isInitialized;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Used to refresh the telemetry settings when they change from the application
     * (i.e. when an in-place navigation to a different site happens)
     * @param settings - the subset of the telemetry settings to be updated
     */
    Telemetry.updateSettings = function (settings, workloadName) {
        if (!Telemetry.isInitialized) {
            return;
        }
        var prevSiteId = _TelemetrySettingsManager__WEBPACK_IMPORTED_MODULE_5__["default"].settings.siteId;
        var prevWebId = _TelemetrySettingsManager__WEBPACK_IMPORTED_MODULE_5__["default"].settings.webId;
        _TelemetrySettingsManager__WEBPACK_IMPORTED_MODULE_5__["default"].updateSettings(settings);
        if (!this._originalSession) {
            this._originalSession = settings.correlationId;
        }
        var isDifferentWorkLoad = workloadName && this._workload !== workloadName;
        if (isDifferentWorkLoad) {
            this._workload = workloadName;
        }
        if (isDifferentWorkLoad ||
            _TelemetrySettingsManager__WEBPACK_IMPORTED_MODULE_5__["default"].settings.siteId !== prevSiteId ||
            _TelemetrySettingsManager__WEBPACK_IMPORTED_MODULE_5__["default"].settings.webId !== prevWebId) {
            // Re-initialize the Aria logger and experiments if doing cross-site fast navigation.
            Telemetry._initializeAria(this._workload);
            Telemetry._initializeExperiments(_TelemetrySettingsManager__WEBPACK_IMPORTED_MODULE_5__["default"].settings);
        }
        else {
            // Update the Aria logger context if doing page-to-page fast navigation.
            Telemetry._updateAria(this._workload);
        }
        if (settings.buildNumber) {
            Telemetry._buildNumber = settings.buildNumber;
        }
    };
    Telemetry._initializeAria = function (workloadName, update) {
        if (update === void 0) { update = false; }
        var settings = _TelemetrySettingsManager__WEBPACK_IMPORTED_MODULE_5__["default"].settings;
        if (settings && Telemetry._shouldEnable(settings.environment)) {
            var token = Telemetry._getAriaToken(workloadName, settings.environment);
            if (token) {
                var ariaContext = Telemetry._getAriaContext(workloadName, settings);
                _AriaLogger__WEBPACK_IMPORTED_MODULE_4__["default"].initialize(token, ariaContext);
            }
        }
    };
    Telemetry._updateAria = function (workloadName) {
        var settings = _TelemetrySettingsManager__WEBPACK_IMPORTED_MODULE_5__["default"].settings;
        if (settings && Telemetry._shouldEnable(settings.environment)) {
            var ariaContext = Telemetry._getAriaContext(workloadName, settings);
            _AriaLogger__WEBPACK_IMPORTED_MODULE_4__["default"].update(ariaContext);
        }
    };
    Telemetry._getAriaContext = function (workloadName, settings) {
        var authenticated = !!settings.loginName;
        var ariaContext = {
            isAuthenticated: authenticated,
            accountType: authenticated ? _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_2__["AccountType"].Business : _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_2__["AccountType"].BusinessAnonymous,
            market: settings.currentUICultureName,
            session: settings.correlationId,
            version: settings.buildNumber,
            manifest: settings.clientSideApplicationId,
            userId: settings.systemUserKey,
            siteSubscriptionId: settings.siteSubscriptionId,
            siteId: settings.siteId,
            webId: settings.webId,
            webTemplateId: settings.webTemplateId,
            farmLabel: settings.farmLabel,
            environment: settings.environment,
            workload: workloadName,
            completenessCallbackEndpoint: settings.completenessCallbackEndpoint,
            originalSession: this._originalSession
        };
        return ariaContext;
    };
    Telemetry._shouldEnable = function (env) {
        return !!env && location.hostname !== 'localhost';
    };
    Telemetry._getAriaToken = function (workloadName, env) {
        var workloadTokens = this._workloadsAriaTokens.default;
        if (workloadName.toLowerCase() === 'sphomenext') {
            workloadTokens = this._workloadsAriaTokens.sphome;
        }
        var token;
        switch (env.toLowerCase()) {
            case 'edog':
            case 'prodbubble':
                token = workloadTokens.ppeToken;
                break;
            default:
                // Prod/DProd/etc all go to Prod Aria tenant.
                // Env value can tell the data apart.
                token = workloadTokens.prodToken;
                break;
        }
        return token;
    };
    Telemetry._initializeExperiments = function (settings) {
        var _a;
        _ABExperimentWrapper__WEBPACK_IMPORTED_MODULE_3__["default"].Init({
            userLoginName: settings.loginName,
            farmLabel: settings.farmLabel,
            siteSubscriptionId: settings.siteSubscriptionId,
            siteId: settings.siteId,
            webId: settings.webId
        });
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPExperiment"].initialize({
            experimentData: settings.experimentData,
            experimentDataLookup: settings.experimentDataLookup,
            serverTime: settings.serverTime,
            siteId: (_a = settings.siteId) === null || _a === void 0 ? void 0 : _a.toString(),
            aadUserId: settings.aadUserId
        });
        _SPPerfExperiment__WEBPACK_IMPORTED_MODULE_6__["SPPerfExperiment"].initialize({
            aadUserId: settings.aadUserId
        });
        // We don't need to set debug experiments to SPExperiment since it directly calls getVariantAndLogExposure
        // Which already checks expOverrides.
        // We need this for SPPerfExperiment because quarantined users will skip getVariantAndLogExposure.
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPExperiment"].setDebugExperiments(this._getQueryParamValue(DEBUG_EXPERIMENTS_QUERY_PARAM));
        _SPPerfExperiment__WEBPACK_IMPORTED_MODULE_6__["SPPerfExperiment"].enforceQuarantine(this._getQueryParamValue(DEBUG_QUARANTINE_QUERY_PARAM));
    };
    Telemetry._getQueryParamValue = function (name) {
        if (!this._queryParams) {
            this._queryParams = new URLSearchParams(self.location.search);
        }
        if (this._queryParams.has(name)) {
            return this._queryParams.get(name);
        } // else returns undefined
    };
    Telemetry._isInitialized = false;
    Telemetry._workloadsAriaTokens = {
        default: {
            ppeToken: '930040d5f2d14c649c8f4a22a062a2af-a8806003-7416-4799-9a3a-31de703592e5-6968',
            prodToken: '28f004ff2be44e8997a6f113043d583d-3f663b9a-4911-45b4-be6d-e450ca91e808-7336'
        },
        sphome: {
            ppeToken: '956b7a4e25714a6e9cd155df35b54244-719463e8-67d7-419b-b4ba-8dc8355ac519-6720',
            prodToken: '230b2349e5114b9bbfb4e41e8bb0bd31-a49e91ac-3be8-4d87-862e-63473299dfdf-7397'
        }
    };
    Telemetry._startedRealTimeProcessing = false;
    return Telemetry;
}());
/* harmony default export */ __webpack_exports__["default"] = (Telemetry);


/***/ }),

/***/ "UWqr":
/*!*********************************************!*\
  !*** external "@microsoft/sp-core-library" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_UWqr__;

/***/ }),

/***/ "awom":
/*!*********************************!*\
  !*** ./lib/SPPerfExperiment.js ***!
  \*********************************/
/*! exports provided: SPPerfExperiment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SPPerfExperiment", function() { return SPPerfExperiment; });
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Api_Performance_BasePerformanceLogger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Api/Performance/BasePerformanceLogger */ "kJO1");
/* harmony import */ var _Api_Performance_PerformanceFlights__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Api/Performance/PerformanceFlights */ "2iJd");
/* harmony import */ var _trackVariantToLog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./trackVariantToLog */ "cGW8");




/**
 * The wrapper of SPExperiment to be used only by perf experiments for which we don't want all users to participate.
 * We use WEX_PAGES_PURE_PERF_REPORT_EXPERIMENT_ID experiment to scope the users that will be opt-in for performance
 * experiments. Other users will not see any changes from perf experiments.
 *
 * Currently, we want to quarantine 20% users so all users in the treatment group will be quarantined. For quarantined
 * users, all performance experiments will return controlled experiments and nothing will be logged.
 * @internal
 */
var SPPerfExperiment = /** @class */ (function () {
    function SPPerfExperiment() {
    }
    /**
     * Initialize/Re-initialize experiments with latest page context info.
     * @param experimentContext - The context to identify the experiment environment.
     */
    SPPerfExperiment.initialize = function (experimentContext) {
        SPPerfExperiment._perfExperimentContext = experimentContext;
        SPPerfExperiment._determineQuarantineStatus();
        this._isInitialized = true;
    };
    /**
     * RESERVED FOR INTERNAL USAGE.  This method is invoked automatically by the system shell.
     * The application code should not call it directly.
     *
     * Enforce user to be in quarantine group.
     * @param isInQuarantine - The quarantine flag should be enforced.
     *  true - to force be in quarantined
     *  false - to force be not in quarantined
     *  undefined - default value to let hash algorithm decides quarantine.
     */
    SPPerfExperiment.enforceQuarantine = function (isInQuarantine) {
        switch (isInQuarantine) {
            case 'true':
                SPPerfExperiment._enforcedQuarantineStatus = true;
                return;
            case 'false':
                SPPerfExperiment._enforcedQuarantineStatus = false;
                return;
            default:
                SPPerfExperiment._enforcedQuarantineStatus = undefined;
        }
    };
    /**
     * Get the variant of perf experiments and track the experiment in performance logger.
     * @param experimentId - The automatically generated experiment id in Flights on Rails.
     * @param usedInServer - Whether the given experimentId is also evaluated on the server. In this case we will not apply quarantine.
     *  Check the flighting page at aka.ms/flightsui to find this value.
     * @returns - A number of the variant for the given experiment id. It returns undefined if user is in quarantined
     *  group.
     * @internal
     */
    SPPerfExperiment.getVariantAndTrackExperiment = function (experimentId, usedInServer) {
        if (usedInServer === void 0) { usedInServer = false; }
        if (!this._isInitialized && !false) {
            throw new Error("SPPerfExperiment is not initialized. Requested for experiment id: " + experimentId);
        }
        var experimentOverrides = _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPExperiment"].experimentOverrides;
        if (experimentOverrides && experimentOverrides.has(experimentId)) {
            return experimentOverrides.get(experimentId);
        }
        var killSwitchId = _Api_Performance_PerformanceFlights__WEBPACK_IMPORTED_MODULE_2__["_ExperimentKillSwitches"].get(experimentId);
        // This is workaround to ensure we can quickly suspend a perf experiment without deleting the experiment.
        // This can be removed if in future experiments can be suspended on flightOnRails.
        // tslint:disable-next-line:valid-kill-switch-guid
        if (killSwitchId && _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPKillSwitch"].isActivated(killSwitchId)) {
            return 0;
        }
        var isTrackVariantKsActivated = _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPKillSwitch"].isActivated('83c4b0fe-7ef1-467d-bb28-ac9853fb258a'
        /* '10/26/2020', 'Track variantToLog for clarification of status */
        );
        var variant = !isTrackVariantKsActivated
            ? _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPExperiment"]._getVariantWithoutLogging(experimentId)
            : 0;
        var shouldQuarantine = !usedInServer && SPPerfExperiment.isInQuarantine;
        if ( true && !shouldQuarantine) {
            if (isTrackVariantKsActivated) {
                variant = _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPExperiment"]._getVariantWithoutLogging(experimentId);
            }
            if (!isTrackVariantKsActivated) {
                var logToVariant = Object(_trackVariantToLog__WEBPACK_IMPORTED_MODULE_3__["_trackVariantToLog"])(experimentId);
                var statusToLog = SPPerfExperiment.getExperimentStatus(logToVariant);
                _Api_Performance_BasePerformanceLogger__WEBPACK_IMPORTED_MODULE_1__["default"].trackExperiment(experimentId, statusToLog);
            }
            else {
                _Api_Performance_BasePerformanceLogger__WEBPACK_IMPORTED_MODULE_1__["default"].trackExperiment(experimentId, SPPerfExperiment.getExperimentStatus(variant));
            }
        }
        else {
            if (!isTrackVariantKsActivated) {
                // Unit-test or Quarantined user
                _Api_Performance_BasePerformanceLogger__WEBPACK_IMPORTED_MODULE_1__["default"].trackExperiment(experimentId, _Api_Performance_PerformanceFlights__WEBPACK_IMPORTED_MODULE_2__["_ExperimentStatus"].Disabled);
                return 0;
            }
        }
        return variant;
    };
    /**
     * Get the status string based on the variant of the experiment
     * @param variant - The variant of the experiment
     * @param usedInServer - Whether the given experimentId is also evaluated on the server. In this case we will not apply quarantine.
     */
    SPPerfExperiment.getExperimentStatus = function (variant, usedInServer) {
        if (usedInServer === void 0) { usedInServer = false; }
        if (variant === undefined || (!usedInServer && SPPerfExperiment.isInQuarantine)) {
            return _Api_Performance_PerformanceFlights__WEBPACK_IMPORTED_MODULE_2__["_ExperimentStatus"].Disabled;
        }
        switch (variant) {
            case 0:
                return _Api_Performance_PerformanceFlights__WEBPACK_IMPORTED_MODULE_2__["_ExperimentStatus"].Control;
            case 1:
                return _Api_Performance_PerformanceFlights__WEBPACK_IMPORTED_MODULE_2__["_ExperimentStatus"].Treatment;
            case 2:
                return _Api_Performance_PerformanceFlights__WEBPACK_IMPORTED_MODULE_2__["_ExperimentStatus"].Treatment2;
            case 3:
                return _Api_Performance_PerformanceFlights__WEBPACK_IMPORTED_MODULE_2__["_ExperimentStatus"].Treatment3;
            case 4:
                return _Api_Performance_PerformanceFlights__WEBPACK_IMPORTED_MODULE_2__["_ExperimentStatus"].Treatment4;
            case 5:
                return _Api_Performance_PerformanceFlights__WEBPACK_IMPORTED_MODULE_2__["_ExperimentStatus"].Treatment5;
            default:
                return undefined;
        }
    };
    Object.defineProperty(SPPerfExperiment, "isInQuarantine", {
        get: function () {
            return SPPerfExperiment._enforcedQuarantineStatus || SPPerfExperiment._isCurrentUserInQuarantine;
        },
        enumerable: false,
        configurable: true
    });
    SPPerfExperiment.isExperimentDisabled = function (experimentId) {
        return Object(_trackVariantToLog__WEBPACK_IMPORTED_MODULE_3__["_trackVariantToLog"])(experimentId) === undefined;
    };
    /**
     * The djb2 hash function that decides whether the current user is in quarantine.
     * It divides the population into experimentable (80%) and quarantine (20%)
     */
    SPPerfExperiment._determineQuarantineStatus = function () {
        var aadUserId = SPPerfExperiment._perfExperimentContext.aadUserId;
        var inputString = "SPPerfExperiment_" + aadUserId;
        var hash = 5381;
        // tslint:disable:no-bitwise
        for (var i = 0; i < inputString.length; ++i) {
            hash = (hash << 5) + hash + inputString.charCodeAt(i);
            hash = hash & hash;
        }
        this._isCurrentUserInQuarantine = hash % 5 === 0;
    };
    SPPerfExperiment._isInitialized = false;
    return SPPerfExperiment;
}());



/***/ }),

/***/ "c4rS":
/*!**************************************!*\
  !*** ./lib/TelemetryKillSwitches.js ***!
  \**************************************/
/*! exports provided: isLogPreloadInfoKsActivated */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isLogPreloadInfoKsActivated", function() { return isLogPreloadInfoKsActivated; });
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__);

function isLogPreloadInfoKsActivated() {
    return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPKillSwitch"].isActivated('b092e179-78e0-48c0-96fa-b9940f98302d'
    /* '12/01/2020', 'Log availability of preload images, metadata and pre-allocated tags' */
    );
}


/***/ }),

/***/ "cGW8":
/*!**********************************!*\
  !*** ./lib/trackVariantToLog.js ***!
  \**********************************/
/*! exports provided: _trackVariantToLog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_trackVariantToLog", function() { return _trackVariantToLog; });
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__);

var EXPERIMENT_COLLECTION_KEY = 'ODSP_EXPERIMENTS';
function _getExperimentInstance(experimentId) {
    var _a;
    return (_a = window[EXPERIMENT_COLLECTION_KEY]) === null || _a === void 0 ? void 0 : _a[experimentId];
}
/**
 * Getting the variant only for logging.
 * DO NOT export this function outside of sp-telemetry as it's only supposed to be used for logging.
 * @param experimentId - The id of the experiment.
 */
// tslint:disable-next-line:export-name
function _trackVariantToLog(experimentId) {
    var experimentInstance = _getExperimentInstance(experimentId);
    if (!experimentInstance) {
        // The experiment instance will be registered in window object once variant is requested through sp-experiments API.
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPExperiment"]._getVariantWithoutLogging(experimentId);
        experimentInstance = _getExperimentInstance(experimentId);
    }
    // If the experiment is still on AA test, the experiment has not been rolled out to the current user yet.
    return !experimentInstance || experimentInstance._isAATest ? undefined : experimentInstance._variantToLog;
}


/***/ }),

/***/ "kJO1":
/*!******************************************************!*\
  !*** ./lib/Api/Performance/BasePerformanceLogger.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ms/odsp-core-bundle */ "K9kD");
/* harmony import */ var _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @microsoft/sp-diagnostics */ "ut3N");
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _PageTransitionType__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PageTransitionType */ "F00A");
/* harmony import */ var _PerformanceFlights__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./PerformanceFlights */ "2iJd");
/* harmony import */ var _SPPerfExperiment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../SPPerfExperiment */ "awom");
/* harmony import */ var _PageUsageAdapter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./PageUsageAdapter */ "n3bJ");
/* harmony import */ var _trackVariantToLog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../trackVariantToLog */ "cGW8");
/* harmony import */ var _TelemetryKillSwitches__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../TelemetryKillSwitches */ "c4rS");
/* harmony import */ var _microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @microsoft/sp-lodash-subset */ "Pk8u");
/* harmony import */ var _microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_10__);











var PRIVATECDN_HOST = 'privatecdn.sharepointonline.com';
var PRIVATECDN_STAGING_HOST = 'privatecdn-staging.sharepointonline.com';
var PUBLICCDN_HOST = 'publiccdn.sharepointonline.com';
var PUBLICCDN_STAGING_HOST = 'publiccdn-staging.sharepointonline.com';
var AFDCACHE_ASHX = 'afdcache.ashx';
var VTI_BIN = '_vti_bin';
var PRIVATE_CDN_V2 = 'AuthVer';
// For more info: https://developer.mozilla.org/en-US/docs/Web/API/NetworkInformation/effectiveType
var CONNECTIONTYPE_KEY = 'spConnectionType';
// For more info: https://developer.mozilla.org/en-US/docs/Web/API/NetworkInformation/rtt
var RTT_KEY = 'spRTT';
// For more info: https://developer.mozilla.org/en-US/docs/Web/API/NetworkInformation/downlink
var DOWNLINK_KEY = 'spDownlink';
var PRIVATECDNENABLED_KEY = 'PrivateCDNEnabled';
var PUBLICCDNENABLED_KEY = 'PublicCDNEnabled';
// Dimention name capturing CDN status for current tenant.
var CDNSTATUS = 'CDNStatus';
// CND is not enabled for current tenant
var CDNDISABLED = 'Disabled';
// Both Public and private CDN are enabled for current tenant.
var PRIVATEPUBLIC = 'PrivatePublic';
// Only Private CDN is enabled for current tenant.
var PRIVATE = 'Private';
// Only Public CDN is enabled for current tenant.
var PUBLIC = 'Public';
// Build rollout status of current farm.
var FARM_TEMPRATURE = 'FarmTemprature';
var STATUS_ON = 'On';
var STATUS_ON2 = 'On2';
var STATUS_ON3 = 'On3';
var STATUS_ON4 = 'On4';
var STATUS_ON5 = 'On5';
var STATUS_OFF = 'Off';
var STATUS_DISABLED = 'Disabled';
var CLEAR_EXPERIMENTS = _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__["Guid"].parse('f4e6d00a-9527-42ef-99fe-e42d68767b5e');
var PRELOAD_IMAGES_KEY = '_preloadImages';
var PRELOAD_IMAGES_METADATA_KEY = '_preloadMetadata';
var FIRST_INPUT_ENTRY_START = 'processingStart';
var FIRST_INPUT_TARGET = 'target';
var FIRST_INPUT_OUTER_HTML = 'outerHTML';
var PRE_ALLOCATED_IMAGE_KEY = '_preAllocatedImageTags';
/**
 * Usage:
 * 1. Begin an application session with a aggregatable name (e.g. level1.level2.level3) at the very beginning.
 *  e.g.
 *    BasePerformanceLogger.initializeApplication('ContosoApp.Page1')
 *  Only one application per page can be created.
 * 2. To monitor a component as part of EUPL:
 * 2.1 Add the following at the component render start time.
 *    BasePerformanceLogger.addComponent('contosoWebPart1');
 *    BasePerformanceLogger.startMarkForComponent('contosoWebPart1');
 * 2.2 Add the following at the component render end time.
 *    BasePerformanceLogger.endMarkForComponent('contosoWebPart1');
 * 3. To monitor a request:
 * 3.1 Add the following at request start time:
 *    BasePerformanceLogger.startMarkForApi('call1_uniqueId', 'someUrl1');
 * 3.2 Add the following at request end time:
 *    BasePerformanceLogger.endMarkForApi('call1_uniqueId', 'call1', 'someUrl1', response);
 *
 * Note1: due to server side limitation, only the first 4 (soon will be 10) components'
 * data is send to server. The rest can be dumped to console if
 * window.sessionStorage["enableRUMOneDebugging"] == true.
 * Note2: do not include component time that do not affect EUPL (like async time spent.)
 *
 * @preapproved @internal
 */
var BasePerformanceLogger = /** @class */ (function () {
    function BasePerformanceLogger() {
    }
    /**
     * Initialize the application with a name. All perf data is reset for non-fullPageLoad.
     * @param applicationName - name of the application
     * @param pageTransitionType - indicates page transition type
     * @param serverVersion - SharePoint server version
     * @param approvedControls - Approved controls whose EUPL will be measured separately
     */
    BasePerformanceLogger.initializeApplication = function (applicationName, pageTransitionType, serverVersion, approvedControls) {
        if (pageTransitionType === void 0) { pageTransitionType = _PageTransitionType__WEBPACK_IMPORTED_MODULE_4__["PageTransitionType"].fullPageLoad; }
        // for full page load, new logger instance is created, we don't need to reset it
        // However for in page navigation scenario, we need to ensure that current page logger data is reset
        var fullPageLoad = pageTransitionType === _PageTransitionType__WEBPACK_IMPORTED_MODULE_4__["PageTransitionType"].fullPageLoad;
        // For cross app navigation we need to preserve the cross app navigation start time and app start time.
        var appStartTime = this.getCrossAppNavigationStartTime();
        var crossAppNavigationStartTime = this.getApplicationStartTime();
        if (fullPageLoad === false) {
            if (this.isRunning()) {
                // We are nevigating away without completing perf data collection for the current page
                var serverUrl = this._logger.getPerformanceDataPropertyValue('ServerUrl');
                _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_3__["_TraceLogger"].logVerbose(this._logSource, "Performance data could not be collected for current page " + serverUrl + " before resetting");
            }
            this._logger.resetLogger();
            // tslint:disable-next-line:no-any
            this._logger._keyMetrics = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(BasePerformanceLogger._defaultKeyMetrics);
            BasePerformanceLogger._enableMeasuringTTI();
            this._rumOneData = {};
            this._tempData = {};
            delete this._approvedControls;
            if (!this._isClearExperimentsKillSwitchActive()) {
                this._trackedExperiments.clear();
            }
            if (!this._isWebpartExperimentKSActivated) {
                this._webpartExperiments.clear();
            }
        }
        if (pageTransitionType === _PageTransitionType__WEBPACK_IMPORTED_MODULE_4__["PageTransitionType"].crossAppNavigation) {
            this.markCrossAppNavigationStart(crossAppNavigationStartTime);
            this.markApplicationStart(appStartTime);
        }
        this._pageTransitionType = pageTransitionType;
        this
            ._logger._rumoneData.PageTransitionType = this._pageTransitionType; /* tslint:disable-line:no-any */
        this._reset(applicationName);
        this._approvedControls = approvedControls;
        if (serverVersion) {
            this._logger.writeServerVersion(serverVersion);
        }
        if (!!sessionStorage.getItem('spfx-debug')) {
            this._logger.excludePageForPerfData();
        }
        // PageUsage logic is delegated to the PageUsageAdapter instead of doing it here.
        _PageUsageAdapter__WEBPACK_IMPORTED_MODULE_7__["default"].getInstance().initialize();
        BasePerformanceLogger._preloadImageUsage.clear();
        if (!this._isCollectFidKSActive()) {
            BasePerformanceLogger._collectFid();
        }
    };
    /**
     * Track flight rollout performance impact.
     * Should be called only if at least control or treatment was executed.
     * E.g. You don't want to call this when loading home page to measure Title region
     * performance improvement.
     */
    BasePerformanceLogger.trackFlight = function (flightNumber) {
        var flightStatus = BasePerformanceLogger._getFlightStatus(flightNumber);
        this._trackedExperiments.set(flightNumber.toString(), flightStatus);
    };
    /**
     * Track flight rollout performance impact for web part.
     * This API should be mostly called by web part or at least in the context of the web part instance.
     * @param webpartTag -  event identifier used in written telemetry data for first party web
     * parts, e.g., 'WebPart.NewsWebPart.internal.8dd9dec2-c6b3-4d4a-819e-2a5431e901f2'.
     * @param flightNumber - _PerformanceFlight
     */
    BasePerformanceLogger.trackWebpartFlight = function (webpartTag, flightNumber) {
        if (BasePerformanceLogger._isWebpartExperimentKSActivated()) {
            return;
        }
        var flightStatus = BasePerformanceLogger._getFlightStatus(flightNumber);
        if (flightStatus) {
            BasePerformanceLogger._setWebpartExperiments(webpartTag, flightNumber.toString(), flightStatus);
        }
    };
    /**
     * Tracks feature rollout performance impact.
     * Usually it's only needed for server-side experiments. For client-side experiments the status is automatically
     * tracked when calling SPPerfExperiment.getVariantAndTrackVariant.
     * It is caller's responsibility to ensure when feature is on or off by providing
     * appropriate _ExperimentStatus status value
     *
     * Caller is expected to call this API only when feature was executed with old or new experiment.
     *
     * @param experimentId - _PerformanceExperiment
     * @param status  - _ExperimentStatus
     */
    BasePerformanceLogger.trackExperiment = function (experimentId, status) {
        var experimentStatus = BasePerformanceLogger.getExperimentStatusString(status);
        if (experimentStatus) {
            this._trackedExperiments.set(experimentId.toString(), experimentStatus);
        }
    };
    /**
     * Tracks web part specific feature rollout performance impact.
     * This API should be mostly called by web part or at least in the context of the web part instance.
     * Caller is expected to call this API only when feature was executed with old or new experiment.
     * @param webpartTag -  event identifier used in written telemetry data for first party web
     * parts, e.g., 'WebPart.NewsWebPart.internal.8dd9dec2-c6b3-4d4a-819e-2a5431e901f2'.
     * @param experimentId - _PerformanceExperiment
     * @param status  - optional override for status
     * @param usedInServer - Whether the given experimentId is also evaluated on the server. In this case we will not apply quarantine.
     */
    BasePerformanceLogger.trackWebpartExperiment = function (webpartTag, experimentId, status, usedInServer) {
        if (status === void 0) { status = undefined; }
        if (usedInServer === void 0) { usedInServer = false; }
        if (BasePerformanceLogger._isWebpartExperimentKSActivated()) {
            return;
        }
        // get actual variant regardless of quarantine
        var variantToLog = Object(_trackVariantToLog__WEBPACK_IMPORTED_MODULE_8__["_trackVariantToLog"])(experimentId);
        status = status || _SPPerfExperiment__WEBPACK_IMPORTED_MODULE_6__["SPPerfExperiment"].getExperimentStatus(variantToLog, usedInServer);
        var experimentStatus = BasePerformanceLogger.getExperimentStatusString(status);
        if (experimentStatus) {
            BasePerformanceLogger._setWebpartExperiments(webpartTag, experimentId.toString(), experimentStatus);
        }
    };
    Object.defineProperty(BasePerformanceLogger, "fullPageLoad", {
        /**
         * Indicate whether the performance data is for a full page load or in place page navigation.
         */
        get: function () {
            return this._pageTransitionType === _PageTransitionType__WEBPACK_IMPORTED_MODULE_4__["PageTransitionType"].fullPageLoad;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BasePerformanceLogger, "KeyMetrics", {
        get: function () {
            return this._logger.KeyMetrics;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Adds a key metric for the performance logger to collect
     * @param keyMetric - key metric to collect
     */
    BasePerformanceLogger.addKeyMetric = function (keyMetric) {
        if (this._logger.isRunning()) {
            this._logger.addExpectedKeyMetric(keyMetric);
        }
    };
    /**
     * Add a component to track its performance.
     * @param tag - The identifier that identifies the component in the performance data stream.
     */
    BasePerformanceLogger.addComponent = function (tag) {
        if (!this.isRunning()) {
            return;
        }
        this._expectedControls.add(tag);
        this._logger.addExpectedControl(tag);
        if (this._isMarkFailureInPerformanceLoggerFeatureEnabled()) {
            _PageUsageAdapter__WEBPACK_IMPORTED_MODULE_7__["default"].getInstance().addComponent(tag);
        }
    };
    /**
     * Record component start time.
     * @param tag - The identifier that identifies the component in the performance data stream.
     */
    BasePerformanceLogger.startMarkForComponent = function (tag, startTime) {
        if (startTime === void 0) { startTime = this.now(); }
        if (!this.isRunning()) {
            return;
        }
        var componentStartTag = tag + this._componentStartTimeKey;
        BasePerformanceLogger.devMark(componentStartTag);
        this.saveTempData(componentStartTag, startTime);
        this.addComponentBreakdown(tag, 'start', startTime);
    };
    /**
     * Returns comma separated flights/experiments list with status on and off
     * Example: 90037_Off,90038_On
     * @param webpartTag -  event identifier used in written telemetry data for first party web
     * parts, e.g., 'WebPart.internal.8dd9dec2-c6b3-4d4a-819e-2a5431e901f2'.
     *
     */
    BasePerformanceLogger.getWebpartFlightsAndExperiments = function (webpartTag) {
        var flightMap = this._webpartExperiments.get(webpartTag);
        if (!flightMap) {
            return undefined;
        }
        var flightsStatus = [];
        flightMap.forEach(function (status, flight, array) {
            flightsStatus.push(flight + "_" + status);
        });
        return flightsStatus.join(',');
    };
    /**
     * Log into RumOne when ViewPortManager tries to add extra components into EUPL calculation because of inaccurate
     * reservedHeight or audience targeting scenario.
     * E.g. A web part might reserve 500px height in authoring time, but it can be hidden in read mode if audience targeting enabled.
     * Page will allocate 500px height initially to render the web part, but then the space vanished and the web parts below it will
     * be "moved" into view port and impacting EUPL metrics.
     */
    BasePerformanceLogger.onExtraEuplComponentsAdded = function () {
        BasePerformanceLogger.addComponentBreakdown('ViewPort', "RequireExtraComponents" + ++BasePerformanceLogger._extraEuplCalculationCount, BasePerformanceLogger.now());
    };
    /**
     * Record component end time.
     * @param tag - The identifier that identifies the component in the performance data stream.
     * @param waitForPaint - Optional argument which lets you mark the end of component after the repaint.
     */
    BasePerformanceLogger.endMarkForComponent = function (tag, waitForPaint) {
        var _this = this;
        if (waitForPaint) {
            return this.waitForPaint(function () { return BasePerformanceLogger.endMarkForComponentWithTimestamp(tag, _this.now()); });
        }
        else {
            return BasePerformanceLogger.endMarkForComponentWithTimestamp(tag, this.now());
        }
    };
    /**
     * Record component failure time.
     * @param tag - The tag that identifies the component in the performance data stream.
     * @param error - The error that the identifies failed with.
     */
    BasePerformanceLogger.endFailureForComponent = function (tag, error) {
        BasePerformanceLogger.endFailureForComponentWithTimestamp(tag, this.now(), error);
    };
    /**
     * Logs Control Performance metrics to console.
     * @param tag - The identifier that identifies the component in the performance data stream.
     * @param label - User friendly console operation description.
     * @param componentId - Id of the component.
     * @param alias - Alias of the component.
     */
    BasePerformanceLogger.logPerformanceMetricToConsole = function (tag, label, componentId, alias) {
        var curStartTime = this.getComponentStartTime(tag);
        var curEndTime = this.getComponentEndTime(tag);
        var duration = curEndTime - curStartTime;
        _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_3__["_TraceLogger"].logVerbose(this._logSource, _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__["Text"].format('{0} for component {1} ({2}) took {3} ms', label, componentId, alias, duration));
    };
    /**
     * Record component end time.
     * @param tag - The identifier that identifies the component in the performance data stream.
     * @param endTime - the timestamp recorded at some point in time. Allows adding end marks after the
     * component is done loading.
     */
    BasePerformanceLogger.endMarkForComponentWithTimestamp = function (tag, endTime, overwrite) {
        if (!this.isRunning()) {
            return;
        }
        var componentEndTag = tag + this._componentEndTimeKey;
        BasePerformanceLogger.devMark(componentEndTag);
        var componentStartTag = tag + this._componentStartTimeKey;
        BasePerformanceLogger.addToPerformanceTimings(tag, componentStartTag, componentEndTag);
        if (!this.readTempData(componentEndTag) || overwrite) {
            var controlStartTime = this.getComponentStartTime(tag);
            this.reportControlData(tag, controlStartTime, endTime);
            this.saveTempData(componentEndTag, endTime);
            this._markComponentCore(tag, 'end', endTime);
            if (this._isMarkFailureInPerformanceLoggerFeatureEnabled()) {
                _PageUsageAdapter__WEBPACK_IMPORTED_MODULE_7__["default"].getInstance().markSuccess(tag);
            }
        }
    };
    /**
     * Record component failure time.
     * @param tag - The tag that identifies the component in the performance data stream.
     * @param endTime - the timestamp recorded at some point in time. Allows adding end marks after the
     * component is done loading.
     * @param error - The error that the identifies failed with.
     * @param overwrite - The flag to overwrite the existing data.
     */
    BasePerformanceLogger.endFailureForComponentWithTimestamp = function (tag, endTime, error, overwrite) {
        if (!this.readTempData(tag + ".error") || overwrite) {
            this.saveTempData(tag + ".error", endTime);
            BasePerformanceLogger._addPerformanceBreakdown(tag + ".error", endTime);
            if (!this._isMarkWebPartRenderTimeOnErrorKsActivated()) {
                BasePerformanceLogger.endMarkForComponentWithTimestamp(tag, endTime);
            }
            _PageUsageAdapter__WEBPACK_IMPORTED_MODULE_7__["default"].getInstance().markFailure(tag, error);
        }
    };
    /**
     * Record a time in the performance data stream for the component.
     * @param tag - The identifier that identifies the component in the performance data stream.
     * @param name - The name of the mark
     */
    BasePerformanceLogger.markComponent = function (tag, name, timeStamp) {
        if (timeStamp === void 0) { timeStamp = this.now(); }
        if (!this.isRunning()) {
            return;
        }
        this._markComponentCore(tag, name, timeStamp);
    };
    BasePerformanceLogger.markComponentModuleLoaded = function (tag, timeStamp) {
        if (timeStamp === void 0) { timeStamp = this.now(); }
        if (!this.isRunning()) {
            return;
        }
        var nowTime = this._markComponentCore(tag, 'modulesLoaded', timeStamp);
        if (nowTime === null || nowTime === undefined) {
            return;
        }
        if (!this._lastModuleLoadedDuration || nowTime > this._lastModuleLoadedDuration) {
            this._lastModuleLoadedDuration = nowTime;
            this.setPerformanceProperty('lastModuleLoaded', nowTime);
        }
    };
    /**
     * Returns the millisecond from navigationStart to last component's module loaded time.
     */
    BasePerformanceLogger.getLastModuleLoadedDuration = function () {
        return this._lastModuleLoadedDuration;
    };
    /**
     * This is only used in internal Test suite.
     * @internal
     */
    BasePerformanceLogger._getMaxDataFetchTime = function () {
        return this._logger.getPerformanceDataPropertyValue('DataFetch');
    };
    /**
     * Mark the current time associated with the provided tag.
     * @param tag - The identifier of the time
     * @param ignoreMarkKey - Indicates if the tag name should not append 'Mark' string
     */
    BasePerformanceLogger.mark = function (tag, ignoreMarkKey) {
        if (ignoreMarkKey === void 0) { ignoreMarkKey = false; }
        this._mark(tag, ignoreMarkKey);
    };
    /**
     * Mark sp-loader start time
     */
    BasePerformanceLogger.markSpLoaderStart = function (startTime) {
        if (startTime === void 0) { startTime = this.now(); }
        this.setPerformanceProperty(this._spLoaderStartKey, startTime);
    };
    /**
     * Mark the navigate to app start time
     * @param startTime - the time that marks the navigate to app start
     */
    BasePerformanceLogger.markCrossAppNavigationStart = function (startTime) {
        if (startTime === void 0) { startTime = this.now(true); }
        this.setPerformanceProperty(this._crossAppNavigationStartKey, startTime);
    };
    /**
     * Mark application start time
     */
    BasePerformanceLogger.markApplicationStart = function (startTime) {
        if (startTime === void 0) { startTime = this.now(true); }
        this._mark(this._applicationStartKey);
        this._setPerformancePropertyWithEUPLBreakdown(this._applicationStartKey, startTime);
        BasePerformanceLogger.devMark(this._applicationStartKey);
    };
    /**
     * Get the navigate to app start time
     */
    BasePerformanceLogger.getCrossAppNavigationStartTime = function () {
        return this._logger.getPerformanceDataPropertyValue(this._crossAppNavigationStartKey);
    };
    /**
     * Get the application start time
     */
    BasePerformanceLogger.getApplicationStartTime = function () {
        return this._logger.getPerformanceDataPropertyValue(this._applicationStartKey);
    };
    /**
     * Get the recorded component start time.
     * @param tag - The identifier that identifies the component in the performance data stream.
     */
    BasePerformanceLogger.getComponentStartTime = function (tag) {
        return this.readTempData(tag + this._componentStartTimeKey);
    };
    /**
     * Get the recorded component end time.
     * @param tag - The identifier that identifies the component in the performance data stream.
     */
    BasePerformanceLogger.getComponentEndTime = function (tag) {
        return this.readTempData(tag + this._componentEndTimeKey);
    };
    // @todo VSO:237921 - use the correct typings
    // We can't directly use them, as that will cause a dependency for 3rd parties
    /**
     * Get the performance data for the debugger console.
     *
     * @internal
     */
    // tslint:disable-next-line:no-any
    BasePerformanceLogger.getPerformanceData = function () {
        // RumOneSLAPI
        return this._logger.getPerformanceData();
    };
    /**
     * Return current time offset since page navigation started.
     * For in page navigation, it will correctly adjust offset.
     * @param ignoreNavOffset - When set to true, time returned will ignore navigation offset.
     */
    BasePerformanceLogger.now = function (ignoreNavOffset) {
        var navStartOffset = BasePerformanceLogger.readTempData(BasePerformanceLogger._navigationStartOffsetKey) || 0;
        if (!!ignoreNavOffset) {
            navStartOffset = 0;
        }
        if (!!window.performance && window.performance.now && typeof window.performance.now === 'function') {
            return Math.round(window.performance.now()) - navStartOffset;
        }
        else if (!!window.performance &&
            window.performance.timing &&
            window.performance.timing.navigationStart) {
            return Date.now() - window.performance.timing.navigationStart - navStartOffset;
        }
        // This should be very limited case to old browser versions or platforms not supporting performance API
        // We should still get some number for such cases
        _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_3__["_TraceLogger"].logVerbose(BasePerformanceLogger._logSource, "High resolution performance API not supported");
        var perfStartTime = BasePerformanceLogger.readTempData('perfStartTime') || 0;
        return Date.now() - perfStartTime;
    };
    BasePerformanceLogger.setScenarioId = function (scenarioId) {
        if (this.isRunning()) {
            this._scenarioId = scenarioId;
            this._logger.writeScenarioId(this._scenarioId, true);
        }
    };
    BasePerformanceLogger.getScenarioId = function () {
        return this._scenarioId;
    };
    Object.defineProperty(BasePerformanceLogger, "waitOnAddingExpectedControl", {
        get: function () {
            return this._logger.waitOnAddingExpectedControl;
        },
        set: function (shouldWait) {
            this._logger.waitOnAddingExpectedControl = shouldWait;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Determines if the RUMONELogger is running
     */
    BasePerformanceLogger.isRunning = function () {
        return this._logger.isRunning();
    };
    /**
     * Records data fetch time
     * @param dataFetchTime - The data fetch timen.
     */
    BasePerformanceLogger.writeDataFetchTime = function (dataFetchTime) {
        this._logger.writeDataFetchTime(dataFetchTime);
    };
    /**
     * Records Server Side Latency
     * @param duration - The time duration.
     * @param iisLatency - The IIs Latency time.
     */
    BasePerformanceLogger.writeServerSideLatency = function (duration, iisLatency) {
        this._logger.writeServerSideLatency(duration, iisLatency);
    };
    /**
     * Records the Server Correlation ID
     * @param correlationId - The value of the Correlaition ID.
     */
    BasePerformanceLogger.writeServerCorrelationId = function (correlationId) {
        this._logger.writeServerCorrelationId(correlationId);
    };
    /**
     * Records App Cache
     * @param appCache - The App Cache value to be registered.
     */
    BasePerformanceLogger.writeAppCache = function (appCache) {
        this._logger.writeAppCache(appCache);
    };
    /**
     * Records Pre Render Time
     * @param preRenderTime - The pre render time to be recorded.
     */
    BasePerformanceLogger.writePreRenderTime = function (preRenderTime) {
        this._logger.writePreRenderTime(preRenderTime);
    };
    /**
     * Records Render Time
     * @param renderTime - The render time to be recorded.
     * @param overwrite - Determines if any previous value for Render Time should be overwritten.
     */
    BasePerformanceLogger.writeRenderTime = function (renderTime, overwrite) {
        this._logger.writeRenderTime(renderTime, overwrite);
    };
    /**
     * Records Time To Fist Byte
     * @param timeToFirstByte - Time to first byte (TTFB) to be recorded.
     */
    BasePerformanceLogger.writeTimeToFirstByte = function (timeToFirstByte) {
        var performaceData = BasePerformanceLogger.getPerformanceData(); /* tslint:disable-line:no-any */
        performaceData.TTFB = timeToFirstByte;
    };
    /**
     * Add Server Metrics
     * @param metric - A dictionary of the metrics to be added.
     * @param overwrite - Determines if any previous value for this metrics should be overwritten.
     */
    BasePerformanceLogger.addServerMetrics = function (metric, overwrite) {
        this._logger.addServerMetrics(metric, overwrite);
    };
    /**
     * Add additional performance breakdown to the web part. Often added using startMarkForComponent or alternate API
     * DO NOT use this API for fixed key data unrelated to components, rather use setPerformanceProperty API.
     *
     * @param tag - The tag of the component. This should match with tag used for other component related API
     *              like startMarkForComponent
     * @param key - The marker to capture additional timing stage about component. The final key in EUPLBreakdown
     *              dictionary would be tag.key
     * @param value - The value of the time to record
     * @param overwrite - Determines if any previous value for this name should be overwritten.
     */
    BasePerformanceLogger.addComponentBreakdown = function (tag, key, value, overwrite) {
        BasePerformanceLogger._addPerformanceBreakdown(tag + "." + key, value, overwrite);
    };
    /**
     * Read performance breakdown value of the given component.
     * @param tag - The name of the EUPL breakdown. Persisted in RumOne stream.
     * @param key - The name of the EUPL breakdown. Persisted in RumOne stream.
     * @returns value of the breakdown if exist, undefined otherwise
     */
    BasePerformanceLogger.readComponentBreakdown = function (tag, key) {
        return this._logger.readEUPLBreakdown(tag + "." + key);
    };
    /**
     * Allows the browser to repaint, then invokes a callback.
     * Note: Here, we timeout after animation frame to ensure our code executes after paint, not before.
     * @param onDidPaintcallback - callback function invoked after the browser has repainted.
     */
    BasePerformanceLogger.waitForPaint = function (onDidPaintcallback) {
        requestAnimationFrame(function () {
            setTimeout(onDidPaintcallback);
        });
    };
    /**
     * Set Render property for a given name. It invokes setPerformanceProperty() after the browser has repainted.
     * @param tag - The column name to store the data. Persisted in RumOne stream.
     */
    BasePerformanceLogger.setPerformancePropertyAfterRepaint = function (tag) {
        this.waitForPaint(function () { return BasePerformanceLogger.setPerformanceProperty(tag); });
    };
    /**
     * Get performance property for given name, if set using setPerformanceProperty.
     * @param name - The name of the performance property. Persisted in RumOne stream.
     */
    BasePerformanceLogger.getPerformanceProperty = function (name) {
        return this._logger.getPerformanceDataPropertyValue(name);
    };
    /**
     * Set performance property for given name. This will be added as seperate flatten column to the performance data.
     * Do not use random name, such as guid or timestamp, which is not unique across rows.
     * @param name - The column name to store the data. Persisted in RumOne stream.
     * @param value - The value of the performance propetry.
     * @param addToExisting - If true and value is number, will be added to existing value set before using same name.
     */
    BasePerformanceLogger.setPerformanceProperty = function (name, value, addToExisting) {
        if (value === undefined) {
            value = this.now();
        }
        // Add value to existing measurement
        if (addToExisting && typeof value === 'number') {
            var existingValue = this.getPerformanceProperty(name);
            if (existingValue && typeof existingValue === 'number') {
                value += existingValue;
            }
        }
        this._logger.setPerformanceDataPropertyValue(name, value);
    };
    /**
     * Collect W3c Performance Timings
     */
    BasePerformanceLogger.collectW3CPerfTimings = function () {
        this._logger.collectW3CPerfTimings();
    };
    /**
     * Collect W3c Resource Timings
     */
    BasePerformanceLogger.collectW3cResourceTimings = function () {
        this._logger.collectW3cResourceTimings();
    };
    /**
     * Collect control data
     */
    BasePerformanceLogger.readFullEUPLBreakDown = function () {
        return this._logger.readEUPLBreakdown();
    };
    /**
     * Get the time associated with the tag.
     * @param tag - The identifier of the time
     */
    BasePerformanceLogger.getMark = function (tag, ignoreMarkKey) {
        if (ignoreMarkKey === void 0) { ignoreMarkKey = false; }
        return this._getMark(tag, ignoreMarkKey);
    };
    /**
     * Add adhoc performance markers, these markers will not be reported via telemetry,
     * they are only accessible from debugger.
     * And this function needs to be called synchronously.
     * @param tag - The identifier of the time
     */
    BasePerformanceLogger.devMark = function (tag) {
        if (window.performance && typeof window.performance.mark === 'function') {
            window.performance.mark(tag);
        }
    };
    /**
     * Measures the speed of light which represent the time from app start till all web parts are loaded.
     */
    BasePerformanceLogger.measureSpeedOfLight = function () {
        BasePerformanceLogger.addToPerformanceTimings('SpeedOfLight', this._applicationStartKey, this.allWebPartsAddedKey);
    };
    BasePerformanceLogger.saveTempData = function (key, value) {
        BasePerformanceLogger._tempData[key] = value;
    };
    BasePerformanceLogger.readTempData = function (key) {
        return BasePerformanceLogger._tempData[key];
    };
    /**
     * Adds a timeline under the 'Timings' section of the browser's performance profiler.
     * @param measureName - The name under which the measure will show up.
     * @param startMark - The start mark.
     * @param endMark - The end mark.
     */
    BasePerformanceLogger.addToPerformanceTimings = function (measureName, startMark, endMark) {
        var _a;
        if (typeof ((_a = window.performance) === null || _a === void 0 ? void 0 : _a.measure) === 'function') {
            try {
                window.performance.measure("SP." + measureName, startMark, endMark);
            }
            catch (e) {
                // do nothing - most likely either componentStartTag or componentEndTag is not captured.
            }
        }
    };
    BasePerformanceLogger.updatePreloadImageUsage = function (url, usage) {
        var _a;
        if ((_a = window[PRELOAD_IMAGES_METADATA_KEY]) === null || _a === void 0 ? void 0 : _a[url]) {
            var currentUsage = BasePerformanceLogger._preloadImageUsage.get(url);
            BasePerformanceLogger._preloadImageUsage.set(url, Object(_microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_10__["merge"])(currentUsage, usage));
        }
    };
    BasePerformanceLogger.measurePreloadImageUsage = function () {
        if (!window[PRELOAD_IMAGES_METADATA_KEY] || !this._preloadImageUsage.size) {
            return;
        }
        var preloadUsageArray = [];
        this._preloadImageUsage.forEach(function (value) { return preloadUsageArray.push(value); });
        /**
         * Block #1: Summarize number and size for all preloaded images.
         */
        this.setPerformanceProperty('numberOfAllPreloadImages', preloadUsageArray.length);
        /**
         * Block #2: Summarize number and size of preloaded images that are requested before FMP.
         * By analyzing with numberOfAllPreloadImages and sizeOfAllPreloadImages we can know the number and size
         * of images that are preloaded but not used. (outside view port)
         */
        var preloadUsageBeforeFMP = preloadUsageArray.filter(function (usage) { return usage.requestedWith; });
        this.setPerformanceProperty('numberOfPreloadImagesRequestedBeforeFMP', preloadUsageBeforeFMP.length);
        /**
         * Block #3: Summarize number and size of preload images that are requested with same size before FMP.
         * These are perfectly preloaded images that are uses as it is.
         */
        var preloadUsageSame = preloadUsageBeforeFMP.filter(function (usage) { return usage.requestedWith.isSame; });
        this.setPerformanceProperty('numberOfPreloadImagesRequestedBeforeFMPSame', preloadUsageSame.length);
        /**
         * Block #4: Summarize number and size of preload images that are requested before FMP but too small.
         * The client web parts try to request the same image but with larger size. So these preloaded images are wasted.
         */
        var preloadUsageLarge = preloadUsageBeforeFMP.filter(function (usage) {
            return !usage.requestedWith.isSame && !usage.requestedWith.isSmaller && usage.requestedWith.isLarger;
        });
        this.setPerformanceProperty('numberOfPreloadImagesRequestedBeforeFMPSmall', preloadUsageLarge.length);
        /**
         * Block #5: Summarize number and size of preload images that are requested before FMP but too large.
         * The client web parts try to request the same image but with smaller size. Since ideally a smaller breakpoint can be
         * used for preload image, we're wasting majority of the bytes from the preload image.
         */
        var preloadUsageSmall = preloadUsageBeforeFMP.filter(function (usage) { return !usage.requestedWith.isSame && usage.requestedWith.isSmaller; });
        this.setPerformanceProperty('numberOfPreloadImagesRequestedBeforeFMPLarge', preloadUsageSmall.length);
        /**
         * Block #6: Summarize number of pre-allocated image tags and number of the tags that are consumed by web parts.
         */
        if (!Object(_TelemetryKillSwitches__WEBPACK_IMPORTED_MODULE_9__["isLogPreloadInfoKsActivated"])() && window[PRE_ALLOCATED_IMAGE_KEY]) {
            var preAllocatedImageCount = 0;
            var consumedCount = 0;
            // tslint:disable-next-line: forin
            for (var key in window[PRE_ALLOCATED_IMAGE_KEY]) {
                preAllocatedImageCount++;
                if (window[PRE_ALLOCATED_IMAGE_KEY][key].isConsumed) {
                    consumedCount += 1;
                }
            }
            this.setPerformanceProperty('numberOfPreAllocatedImageTags', preAllocatedImageCount);
            this.setPerformanceProperty('numberOfPreAllocatedImageTagsConsumed', consumedCount);
        }
    };
    BasePerformanceLogger.getExperimentStatusString = function (status) {
        switch (status) {
            case _PerformanceFlights__WEBPACK_IMPORTED_MODULE_5__["_ExperimentStatus"].Disabled:
                return STATUS_DISABLED;
            case _PerformanceFlights__WEBPACK_IMPORTED_MODULE_5__["_ExperimentStatus"].Control:
                return STATUS_OFF;
            case _PerformanceFlights__WEBPACK_IMPORTED_MODULE_5__["_ExperimentStatus"].Treatment:
                return STATUS_ON;
            case _PerformanceFlights__WEBPACK_IMPORTED_MODULE_5__["_ExperimentStatus"].Treatment2:
                return STATUS_ON2;
            case _PerformanceFlights__WEBPACK_IMPORTED_MODULE_5__["_ExperimentStatus"].Treatment3:
                return STATUS_ON3;
            case _PerformanceFlights__WEBPACK_IMPORTED_MODULE_5__["_ExperimentStatus"].Treatment4:
                return STATUS_ON4;
            case _PerformanceFlights__WEBPACK_IMPORTED_MODULE_5__["_ExperimentStatus"].Treatment5:
                return STATUS_ON5;
            default:
                return undefined;
        }
    };
    /**
     *  Add additional performance breakdown.
     * If this performance breakdoun ended before the EUPL then it will be added to the EUPLBreakdown
     * else it will be added to the TTIBreakdown
     *
     * @param name - The name of the performance property. Persisted in RumOne stream.
     * @param value - The value of the time to record
     * @param overwrite - Determines if any previous value for this name should be overwritten.
     */
    BasePerformanceLogger._addPerformanceBreakdown = function (name, value, overwrite) {
        if (value > this._eupl) {
            this._logger.addTTIBreakdown(name, value, overwrite);
            if (this._perfBreakdown.length > 0) {
                for (var _i = 0, _a = BasePerformanceLogger._perfBreakdown; _i < _a.length; _i++) {
                    var breakdown = _a[_i];
                    if (breakdown.value > this._eupl) {
                        this._logger.addTTIBreakdown(breakdown.name, breakdown.value, breakdown.overwrite);
                    }
                }
                BasePerformanceLogger._perfBreakdown = [];
            }
        }
        else {
            this._logger.addEUPLBreakdown(name, value, overwrite);
            if (!this._eupl) {
                var breakdown = {
                    name: name,
                    value: value,
                    overwrite: overwrite
                };
                BasePerformanceLogger._perfBreakdown.push(breakdown);
            }
        }
    };
    /**
     * Cosmos does not support dynamic column. We want to duplicate data in EUPLBreakdown for key markers.
     */
    BasePerformanceLogger._setPerformancePropertyWithEUPLBreakdown = function (name, value) {
        this.setPerformanceProperty(name, value);
        BasePerformanceLogger._addPerformanceBreakdown(name, value);
    };
    Object.defineProperty(BasePerformanceLogger, "_logger", {
        get: function () {
            this._ensureInitialized();
            return BasePerformanceLogger._staticLogger;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Initialize the logger.
     * The logger is not initialized in the constructor for lazy initialization.
     */
    BasePerformanceLogger._ensureInitialized = function () {
        if (!BasePerformanceLogger._staticLogger) {
            // Lazy initialization
            BasePerformanceLogger._staticLogger = _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_1__["RumOneLogger"].getRUMOneLogger();
            // Enable measuring time to interactive (TTI)
            BasePerformanceLogger._enableMeasuringTTI();
            // Save default key metrics. They get overwritten and RumOneLogger.resetLogger() does not reset them properly.
            BasePerformanceLogger._defaultKeyMetrics = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(BasePerformanceLogger._staticLogger.KeyMetrics);
            BasePerformanceLogger._staticLogger.registerEUPLComputedHandler(this._EUPLComputedHandler.bind(this));
        }
    };
    BasePerformanceLogger._enableMeasuringTTI = function () {
        if (BasePerformanceLogger._isSPFxInjectTTIBootScriptFlightEnabled()) {
            var idleTimeDuration = 1000;
            // Instruct RUMOneLogger to measure time to interactive (TTI)
            BasePerformanceLogger._staticLogger.setSettings({
                TTISettings: {
                    TTIPolyfillSettings: {
                        enabled: true,
                        calculateTTI: function (ttiAbsoluteTime, rumoneData, from) {
                            return BasePerformanceLogger._calculateTTI(ttiAbsoluteTime, rumoneData.PageTransitionType, from);
                        },
                        options: {
                            // ignore network requests when computing TTI.
                            trackNetworkRequests: false,
                            // don't use a mutation observer for newly added DOM elements that generate network requests.
                            useMutationObserver: false,
                            // main thread idle time duration
                            requiredMainThreadQuietnessDurationInMilliseconds: idleTimeDuration,
                            // network idle time duration
                            requiredNetworkQuietnessDurationInMilliseconds: idleTimeDuration
                        }
                    }
                }
            });
        }
    };
    BasePerformanceLogger._calculateTTI = function (ttiAbsoluteTime, pageTransitionType, from) {
        if (!this._isCollectRequestDataKSActivated()) {
            this._collectRequestData(from);
        }
        // Use navigation start offset value to properly account for all page tranisition types.
        return (ttiAbsoluteTime -
            (BasePerformanceLogger.readTempData(BasePerformanceLogger._navigationStartOffsetKey) || 0));
    };
    // This code is largely copied from odsp-next RUMOneHelper:
    // https://onedrive.visualstudio.com/OneDriveWeb/_git/odsp-next?path=%2Fapps%2Fodsp-next%2Fsrc%2Fodsp-next%2Futilities%2Flogging%2FRUMOneHelper.ts
    // VSO https://onedrive.visualstudio.com/WEX!/_workitems/edit/1017976 to follow up on duplicated code
    BasePerformanceLogger._collectFid = function () {
        var _this = this;
        // per https://web.dev/fid/
        // skip if the page is hidden e.g. opened in a background tab
        if (document.visibilityState !== 'hidden' && 'PerformanceObserver' in window) {
            // There's a performance observer started at app boot that observes first-input entries, but gets shut down sometime later in @ms/tti-polyfill
            // If there's already an event, we can use that. Else, start up another performance observer to get the events.
            if (window.__tti && window.__tti.f) {
                var existingEntries = window.__tti.f;
                if (existingEntries.length > 0) {
                    var entry = existingEntries[0];
                    this._setFirstInputProperties(entry);
                    return;
                }
            }
            try {
                var observer_1 = new PerformanceObserver(function (list) {
                    for (var _i = 0, _a = list.getEntries(); _i < _a.length; _i++) {
                        var entry = _a[_i];
                        _this._setFirstInputProperties(entry);
                        observer_1.disconnect();
                        break;
                    }
                });
                // Start observing first-input entries.
                observer_1.observe({
                    type: 'first-input',
                    buffered: true
                });
            }
            catch (e) {
                // ignore if first input observer isn't supported
            }
        }
    };
    BasePerformanceLogger._setFirstInputProperties = function (entry) {
        var fid = Math.round(entry[FIRST_INPUT_ENTRY_START] - entry.startTime);
        BasePerformanceLogger.setPerformanceProperty('FID', fid);
        BasePerformanceLogger.setPerformanceProperty('FirstInputTime', entry[FIRST_INPUT_ENTRY_START]);
        BasePerformanceLogger.setPerformanceProperty('FirstInputDuration', entry.duration);
        if (entry[FIRST_INPUT_TARGET] && entry[FIRST_INPUT_TARGET][FIRST_INPUT_OUTER_HTML]) {
            BasePerformanceLogger.setPerformanceProperty('FirstInputTarget', JSON.stringify(entry[FIRST_INPUT_TARGET][FIRST_INPUT_OUTER_HTML]));
        }
    };
    BasePerformanceLogger.reportControlData = function (tag, startTime, endTime) {
        if (!this.isRunning) {
            return;
        }
        var controlPerformanceData = {
            controlId: tag,
            startTime: startTime,
            endTime: endTime,
            renderTimeCalculator: this._renderTimeCalculator.bind(this),
            renderTimeRequiredDataChecker: this._renderTimeRequiredDataChecker.bind(this),
            renderTime: undefined,
            ignoreForEUPL: !this._expectedControls.has(tag),
            needFlatten: false
        };
        this._logger.writeControlPerformanceData(controlPerformanceData);
    };
    BasePerformanceLogger._renderTimeRequiredDataChecker = function (rumone, controlData) {
        return rumone && controlData && !isNaN(controlData.endTime);
    };
    /**
     * call back function, exected by RUMOne to compute render time for the control
     */
    BasePerformanceLogger._renderTimeCalculator = function (rumone, controlData) {
        if (rumone && controlData && controlData.endTime) {
            var renderTime = controlData.endTime;
            if (!isNaN(renderTime) && renderTime < 0) {
                var error = new Error("Component " + controlData.controlId + " render time " + renderTime + " is negative\n              ( StartTime: " + controlData.startTime + "\n              endTime: " + controlData.endTime + " pageTransitionType: " + this.fullPageLoad.toString() + ")");
                _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_3__["_TraceLogger"].logError(this._logSource, error, 'negativeRenderTime');
                return 0;
            }
            return renderTime;
        }
        else {
            return 0;
        }
    };
    /**
     * Mark the current time associated with the provided tag.
     * @param tag - The identifier of the time
     */
    BasePerformanceLogger._mark = function (tag, ignoreMarkKey) {
        if (ignoreMarkKey === void 0) { ignoreMarkKey = false; }
        var markName = tag + (ignoreMarkKey ? '' : this._markKey);
        this._logger.mark(markName);
    };
    /**
     * Get the time associated with the tag.
     * @param tag - The identifier of the time
     */
    BasePerformanceLogger._getMark = function (tag, ignoreMarkKey) {
        if (ignoreMarkKey === void 0) { ignoreMarkKey = false; }
        var markName = tag + (ignoreMarkKey ? '' : this._markKey);
        return this._logger.getMarkerTime(markName);
    };
    BasePerformanceLogger._markComponentCore = function (tag, name, markTime) {
        if (markTime === void 0) { markTime = this.now(); }
        var startTime = this.getComponentStartTime(tag);
        if (startTime === undefined) {
            return undefined;
        }
        BasePerformanceLogger._addPerformanceBreakdown(tag + "." + name, markTime);
        return markTime;
    };
    BasePerformanceLogger._reset = function (applicationName, elapsedTime) {
        if (elapsedTime === void 0) { elapsedTime = this.now(); }
        this.saveTempData('perfStartTime', Date.now());
        // Add time elapsed since full page navigation started to compute now offset from nav start
        var navOffset = elapsedTime;
        if (this.fullPageLoad) {
            navOffset = 0;
        }
        else if (this._pageTransitionType === _PageTransitionType__WEBPACK_IMPORTED_MODULE_4__["PageTransitionType"].crossAppNavigation) {
            navOffset = this.getCrossAppNavigationStartTime();
        }
        this.saveTempData(this._navigationStartOffsetKey, navOffset);
        this._setPerformancePropertyWithEUPLBreakdown(this._navigationStartOffsetKey, navOffset);
        this._lastModuleLoadedDuration = undefined;
        this.setScenarioId(applicationName);
        if (this._isClearExperimentsKillSwitchActive()) {
            this._trackedExperiments.clear();
        }
        if (!this._isWebpartExperimentKSActivated) {
            this._webpartExperiments.clear();
        }
        this._eupl = undefined;
        this._expectedControls.clear();
    };
    /**
     * Notified when RUMOneLogger has finished calculating EUPL and ready to upload Performance data.
     */
    BasePerformanceLogger._EUPLComputedHandler = function (eupl) {
        this._eupl = eupl;
        if (_SPPerfExperiment__WEBPACK_IMPORTED_MODULE_6__["SPPerfExperiment"].getVariantAndTrackExperiment(_PerformanceFlights__WEBPACK_IMPORTED_MODULE_5__["_PerformanceExperiment"].WEXViewPortReducePositionCheck) ===
            1) {
            this._collectViewPortManagerMetrics();
        }
        this._collectSPFXPerformanceMarkers();
        this.collectW3CPerfTimings();
        this._collectImageNetworkPerformance(eupl);
        this._collectConnectionInfo();
        if (this.fullPageLoad) {
            this.collectW3cResourceTimings();
        }
        this._collectFirstPaintInfo();
        this._collectServiceWorkerInfo();
        this._collectCDNInfo();
        this._collectFarmBuildRolloutInfo();
        this._collectHorizonOnePerfMetrics(eupl);
        this._addEUPLToPerformanceTimings(eupl);
        if (_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__["_SPFlight"].isEnabled(1647 /* WEXExperimentCDNPerfRollout */)) {
            // Track experiment only when flight WEXExperimentCDNPerfRollout is enabled, otherwise CDN is always enabled.
            _SPPerfExperiment__WEBPACK_IMPORTED_MODULE_6__["SPPerfExperiment"].getVariantAndTrackExperiment(_PerformanceFlights__WEBPACK_IMPORTED_MODULE_5__["_PerformanceExperiment"].WEXExperimentCDNPerf);
        }
        this._addEnabledFlights();
        this.setPerformanceProperty('IsQuarantine', _SPPerfExperiment__WEBPACK_IMPORTED_MODULE_6__["SPPerfExperiment"].isInQuarantine ? 'true' : 'false');
        if (!this._isMarkFailureInPerformanceLoggerFeatureEnabled()) {
            // The page usage logger maintenances the finish moment internally when MarkFailure feature is enabled.
            _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_1__["PageUsageLogger"].getPageUsageLogger().finish(eupl);
        }
    };
    BasePerformanceLogger._addEUPLToPerformanceTimings = function (eupl) {
        if (!this.fullPageLoad || this._scenarioId.indexOf('SPPages.') !== 0) {
            return;
        }
        /**
         * We filter by the controls' 'endTime' to find the ones that match EUPL. Ideally there should only be one control,
         * however, there are cases where the canvas component is in the filtered list,
         * because its 'endTime' matches the 'endTime' of the webpart that was last rendered within the viewport,
         * and by which EUPL was determined.
         * That's why after applying the filter on the list of controls, we sort by 'startTime' in descending order
         * to end up selecting the webpart that was last rendered within the viewport;
         * its 'starTime' will be greater than the canvas's.
         */
        var controls = this._logger
            .readControlPerformanceData()
            .filter(function (control) { return control.endTime === eupl; })
            .sort(function (c1, c2) {
            return c2.startTime - c1.startTime;
        });
        for (var index = 0; index < controls.length; index++) {
            var control = controls[index];
            var controlEndTimeMark = "" + control.controlId + this._componentEndTimeKey;
            var entries = window.performance.getEntriesByName(controlEndTimeMark);
            if (entries.length === 1) {
                // measure from navigation start to controlEndTimeMark
                BasePerformanceLogger.addToPerformanceTimings('EUPL', undefined, controlEndTimeMark);
                break;
            }
        }
    };
    BasePerformanceLogger._collectViewPortManagerMetrics = function () {
        BasePerformanceLogger.setPerformanceProperty('ViewPortRevalidateCount', BasePerformanceLogger._extraEuplCalculationCount);
        BasePerformanceLogger._extraEuplCalculationCount = 0;
    };
    BasePerformanceLogger._collectHorizonOnePerfMetrics = function (eupl) {
        if (this._scenarioId.indexOf('SPPages.') !== 0) {
            return;
        }
        var componentsType = {};
        var firstParty = 'FirstParty';
        var thirdParty = 'ThirdParty';
        var firstPartyMatch = '.internal.';
        var thirdPartyMatch = '.external.';
        var webPartCountInsideViewPort = 0;
        // Only keep webparts
        var controls = this._logger
            .readControlPerformanceData()
            .filter(function (control) {
            var isWebPart = control.controlId.indexOf('WebPart.') === 0;
            if (isWebPart && control.endTime <= eupl) {
                webPartCountInsideViewPort++;
            }
            if ((isWebPart || control.controlId.indexOf('ItemsViewListView') === 0) && !isNaN(control.endTime)) {
                if (!componentsType[firstParty] && control.controlId.indexOf(firstPartyMatch) !== -1) {
                    componentsType[firstParty] = true;
                }
                else if (!componentsType[thirdParty] && control.controlId.indexOf(thirdPartyMatch) !== -1) {
                    componentsType[thirdParty] = true;
                }
                return true;
            }
        })
            .sort(function (c1, c2) {
            return c2.endTime - c1.endTime;
        });
        this.setPerformanceProperty('WebPartCountInsideViewPort', webPartCountInsideViewPort);
        // This indicates if the slowest component is a first party webpart or a third party one.
        var slowestComponentKey = 'SlowestComponent';
        // When the slowest component is a third part one,
        // 'HorizonOneEUPL' is how EUPL would have looked like based on the slowest first party component.
        var horizonOneEUPLKey = 'HorizonOneEUPL';
        // This value captures all types of components on the page.
        // Possible values are 'FirstParty', 'ThirdParty', and 'FirstParty_ThirdParty'.
        var componentsTypeKey = 'ComponentsType';
        var slowestComponent;
        if (controls.length > 0) {
            slowestComponent = controls[0].controlId;
            var slowestComponentType = void 0;
            if (slowestComponent.indexOf(firstPartyMatch) !== -1) {
                slowestComponentType = firstParty;
            }
            else if (slowestComponent.indexOf(thirdPartyMatch) !== -1) {
                slowestComponentType = thirdParty;
            }
            this.setPerformanceProperty(slowestComponentKey, slowestComponentType);
            if (slowestComponentType === thirdParty) {
                // Find slowest first party component
                controls = controls.filter(function (control) { return control.controlId.indexOf(firstPartyMatch) !== -1; });
                if (controls.length > 0) {
                    this.setPerformanceProperty(horizonOneEUPLKey, controls[0].endTime);
                }
            }
            else {
                this.setPerformanceProperty(horizonOneEUPLKey, eupl);
            }
            if (Object.keys(componentsType).length > 0) {
                this.setPerformanceProperty(componentsTypeKey, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(Object.keys(componentsType)).join('_'));
            }
        }
        else {
            // default values
            var notAvailable = 'NA';
            this.setPerformanceProperty(slowestComponentKey, notAvailable);
            this.setPerformanceProperty(horizonOneEUPLKey, eupl);
            this.setPerformanceProperty(componentsTypeKey, notAvailable);
        }
    };
    /**
     * Collect SPFX Performance markers into performance data as first class column
     */
    BasePerformanceLogger._collectSPFXPerformanceMarkers = function () {
        var perfMarksKey = 'spfxPerfMarks';
        var perfMarks = window[perfMarksKey];
        if (perfMarks) {
            for (var markKey in perfMarks) {
                if (markKey && !isNaN(perfMarks[markKey])) {
                    this.setPerformanceProperty(markKey, perfMarks[markKey]);
                }
            }
            // All done, clear this so next page does not mix with it.
            // Making it empty so that if data comes after post flush, it does not throw.
            window[perfMarksKey] = {};
        }
    };
    /**
     * Measure time taken to load viewport images from getPreview or MeTA service
     */
    BasePerformanceLogger._collectImageNetworkPerformance = function (eupl) {
        if (!window.performance) {
            return;
        }
        var markerName = 'ImageTelemetryExecutionTime';
        window.performance.mark(markerName);
        var totalEUPLImages = 0;
        var totalEUPLCDNImages = 0;
        var totalEUPLUserPhoto = 0;
        var totalEUPLCDNUserPhoto = 0;
        var navStartOffset = BasePerformanceLogger.readTempData(BasePerformanceLogger._navigationStartOffsetKey) || 0;
        var imagePerfEntries = window.performance.getEntriesByType('resource');
        var uniqueImages = {};
        for (var index = 0; index < imagePerfEntries.length; index++) {
            var perfEntry = imagePerfEntries[index];
            if (perfEntry.duration === undefined ||
                perfEntry.duration < 0 ||
                perfEntry.startTime < navStartOffset) {
                continue;
            }
            if (uniqueImages[perfEntry.name]) {
                // In case of duplicate request, record slowest request.
                uniqueImages[perfEntry.name].duration = Math.max(uniqueImages[perfEntry.name].duration, perfEntry.duration);
                continue;
            }
            var serviceName = undefined;
            var isUserPhoto = false;
            var isCDN = false;
            var splits = perfEntry.name.split('?');
            var absolutePath = splits[0];
            var segments = absolutePath.split('/');
            if (segments.length <= 3) {
                continue;
            }
            var lastPath = segments[segments.length - 1];
            if ('content' === lastPath && '_api' === segments[3]) {
                serviceName = 'VROOMMeTACache';
            }
            else if ('userphoto.aspx' === lastPath) {
                serviceName = 'UserPhoto';
                isUserPhoto = true;
            }
            else if (!_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__["_SPKillSwitch"].isActivated('c19f6c39-b95b-4bd2-85a4-3b3029254244' /* '10/12/2020', 'Handle AFD URL in BasePerformanceLogger' */) &&
                VTI_BIN === segments[3] &&
                AFDCACHE_ASHX === segments[4]) {
                isCDN = true;
                if ('userphoto.jpg' === lastPath) {
                    serviceName = 'AFDCDNUserPhoto';
                    isUserPhoto = true;
                }
                else {
                    serviceName = 'AFDPrivateCDN';
                }
            }
            else if (PRIVATECDN_HOST === segments[2] || PRIVATECDN_STAGING_HOST === segments[2]) {
                if ('userphoto.jpg' === lastPath) {
                    serviceName = 'CDNUserPhoto';
                    isUserPhoto = true;
                    isCDN = true;
                }
                else {
                    var nameAndExt = lastPath.split('.');
                    if (nameAndExt.length === 2 && this._isKnownImage(nameAndExt[1])) {
                        var queryParam = splits[1];
                        var privateCDN2Enabled = _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__["_SPFlight"].isEnabled(1994 /* WEXAkamaiV2PrivateCDNUpdate */);
                        serviceName =
                            privateCDN2Enabled && (queryParam === null || queryParam === void 0 ? void 0 : queryParam.indexOf(PRIVATE_CDN_V2)) !== -1
                                ? 'PrivateCDNv2'
                                : 'PrivateCDN';
                        isCDN = true;
                    }
                }
            }
            else if (PUBLICCDN_HOST === segments[2] || PUBLICCDN_STAGING_HOST === segments[2]) {
                if (segments.length === 6 && segments[4] === 'transform' && segments[5] === 'thumbnail') {
                    if (!_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__["_SPKillSwitch"].isActivated('224700c7-5fdd-4e4a-b46f-665260980ce9'
                    /*'08/01/2021', 'WEX Separate Hubble telemetry from default images' */
                    )) {
                        var queryParam = splits[1];
                        serviceName =
                            (queryParam === null || queryParam === void 0 ? void 0 : queryParam.indexOf('cdn.hubblecontent.osi.office.net')) > -1
                                ? 'PublicCDNHubble'
                                : 'PublicCDNDefault';
                    }
                    else {
                        serviceName = 'PublicCDNDefault';
                    }
                    isCDN = true;
                }
                else {
                    var nameAndExt = lastPath.split('.');
                    if (nameAndExt.length === 2 && this._isKnownImage(nameAndExt[1])) {
                        serviceName = 'PublicCDN';
                        isCDN = true;
                    }
                }
            }
            else if ('getpreview.ashx' === lastPath) {
                serviceName = 'DocViz';
            }
            else if ('thumbnail' === lastPath && 'transform' === segments[segments.length - 2]) {
                serviceName = 'MeTA';
            }
            var responseStatus = void 0;
            if (serviceName) {
                var perfNetworkEntry = perfEntry;
                var cacheHit = perfEntry.duration <= 10 ||
                    (perfNetworkEntry.transferSize !== undefined && perfNetworkEntry.transferSize === 0) ||
                    // Cache hit guess on transferSize unsupported browsers like IE11.
                    (perfNetworkEntry.transferSize === undefined && perfEntry.duration <= 25);
                // Browser can hit hot memory cache (<= 10ms) or get cached file from disc with some I/O overhead
                responseStatus = cacheHit
                    ? perfEntry.duration <= 1
                        ? 'memoryCacheHit'
                        : 'coldCacheHit'
                    : 'cacheMiss';
                var isRedirect = perfNetworkEntry.redirectStart &&
                    perfNetworkEntry.redirectEnd &&
                    perfNetworkEntry.redirectStart > 0 &&
                    perfNetworkEntry.redirectEnd > 0;
                if (isRedirect) {
                    responseStatus = responseStatus + "_Redirect";
                }
                if (perfEntry.startTime && perfEntry.startTime <= eupl) {
                    if (isCDN) {
                        isUserPhoto ? totalEUPLCDNUserPhoto++ : totalEUPLCDNImages++;
                    }
                    else {
                        isUserPhoto ? totalEUPLUserPhoto++ : totalEUPLImages++;
                    }
                }
                uniqueImages[perfEntry.name] = {
                    service: serviceName,
                    duration: perfEntry.duration,
                    responseStatus: responseStatus
                };
            }
        }
        var scenarioId = this.getScenarioId();
        for (var uniqueImage in uniqueImages) {
            if (uniqueImages[uniqueImage]) {
                var qosMonitor = new _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_3__["_QosMonitor"]('ThumbnailLoadDuration');
                var networdData = uniqueImages[uniqueImage];
                qosMonitor.writeSuccess({
                    service: networdData.service,
                    duration: networdData.duration,
                    scenarioId: scenarioId,
                    responseStatus: networdData.responseStatus
                });
            }
        }
        this.setPerformanceProperty('viewportImageCount', totalEUPLImages);
        this.setPerformanceProperty('viewportUserPhotoCount', totalEUPLUserPhoto);
        this.setPerformanceProperty('viewportCDNImageCount', totalEUPLCDNImages);
        this.setPerformanceProperty('viewportCDNUserPhotoCount', totalEUPLCDNUserPhoto);
        window.performance.measure(markerName, markerName);
    };
    BasePerformanceLogger._isKnownImage = function (ext) {
        // Limit Perf QOS collection to welll known types only.
        return ext === 'png' || ext === 'jpeg' || ext === 'jpg' || ext === 'bmp' || ext === 'tiff';
    };
    /**
     * Collect information about Network connection type e.g. 4g, 3g.
     * For more info: https://developer.mozilla.org/en-US/docs/Web/API/Network_Information_API
     */
    BasePerformanceLogger._collectConnectionInfo = function () {
        var _a, _b, _c;
        // tslint:disable: no-any
        var nav = navigator;
        var connection = nav.connection || nav.mozConnection || nav.webkitConnection;
        var browserNotSupportedValue = 'N/A';
        // tslint:enable: no-any
        if (connection) {
            this._logger.setPerformanceDataPropertyValue(CONNECTIONTYPE_KEY, (_a = connection.effectiveType) !== null && _a !== void 0 ? _a : browserNotSupportedValue);
            this._logger.setPerformanceDataPropertyValue(RTT_KEY, (_b = connection.rtt) !== null && _b !== void 0 ? _b : browserNotSupportedValue);
            this._logger.setPerformanceDataPropertyValue(DOWNLINK_KEY, (_c = connection.downlink) !== null && _c !== void 0 ? _c : browserNotSupportedValue);
        }
    };
    /**
     * Capture flights enabled for performance logging.
     * Note: Flights only explicitly opted for perf measurement are captured here
     * Add flight to _flightsOptedABTesting to opt in for logging
     */
    BasePerformanceLogger._addEnabledFlights = function () {
        var allEnabledFlights = [];
        for (var index = 0; this._flightsOptedABTestingDeprecated && index < this._flightsOptedABTestingDeprecated.length; index++) {
            var flight = this._flightsOptedABTestingDeprecated[index];
            if (_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__["_SPFlight"].isEnabled(flight)) {
                allEnabledFlights.push(flight.toString());
            }
        }
        this._trackedExperiments.forEach(function (status, perfExperiment, array) {
            allEnabledFlights.push(perfExperiment + "_" + status);
        });
        this._logger.addFlights(allEnabledFlights);
    };
    BasePerformanceLogger._collectFirstPaintInfo = function () {
        var _this = this;
        if (window.performance && window.performance.getEntriesByType) {
            var paintMetrics = window.performance.getEntriesByType('paint');
            paintMetrics.forEach(function (performanceEntry, i, entries) {
                if ('first-paint' === performanceEntry.name) {
                    _this.setPerformanceProperty('firstPaint', performanceEntry.startTime);
                }
                else if ('first-contentful-paint' === performanceEntry.name) {
                    _this.setPerformanceProperty('firstContentfulPaint', performanceEntry.startTime);
                }
            });
        }
    };
    BasePerformanceLogger._collectServiceWorkerInfo = function () {
        if (window.performance && window.performance.getEntriesByType) {
            // Collecting data to get service worker boot time
            var serviceWorkerMetric = performance.getEntriesByType('navigation');
            if (serviceWorkerMetric.length) {
                // Get service worker state
                var serviceWorkerState = sessionStorage.getItem('serviceworkerstate') || 'unknown';
                // Push service worker data only for full page load type 4
                this.setPerformanceProperty('serviceworkerstate', serviceWorkerState);
                this.setPerformanceProperty('sw.workerstart', String(serviceWorkerMetric[0].workerStart));
                this.setPerformanceProperty('sw.fetchstart', String(serviceWorkerMetric[0].fetchStart));
                this.setPerformanceProperty('sw.requeststart', String(serviceWorkerMetric[0].requestStart));
                var dynamicRenderingEnabled = _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__["_SPFlight"].isEnabled(1965 /* SPHome */) || _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__["_SPFlight"].isEnabled(1966 /* SPPages */);
                if (!_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__["_SPKillSwitch"].isActivated('7046ad43-266c-434c-8a21-5e33b63253ed' /* '2020/08/18', 'service worker generation stats' */) &&
                    dynamicRenderingEnabled) {
                    // tslint:disable-next-line:no-string-literal
                    var serviceWorkerGenerated = !!window['__spfxMark'];
                    this.setPerformanceProperty('sw.isGenerated', String(serviceWorkerGenerated));
                }
            }
        }
    };
    /**
     * Add CDNStatus dimension to the Performance telementry
     */
    BasePerformanceLogger._collectCDNInfo = function () {
        var privateEnabled = _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_1__["SPAlternativeUrls"].tryGetAlternativeUrl(PRIVATECDNENABLED_KEY) &&
            'true' === _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_1__["SPAlternativeUrls"].tryGetAlternativeUrl(PRIVATECDNENABLED_KEY).toLowerCase();
        var publicEnabled = _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_1__["SPAlternativeUrls"].tryGetAlternativeUrl(PUBLICCDNENABLED_KEY) &&
            'true' === _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_1__["SPAlternativeUrls"].tryGetAlternativeUrl(PUBLICCDNENABLED_KEY).toLowerCase();
        var cdnStatus = CDNDISABLED;
        if (privateEnabled && publicEnabled) {
            cdnStatus = PRIVATEPUBLIC;
        }
        else if (privateEnabled || publicEnabled) {
            cdnStatus = privateEnabled ? PRIVATE : PUBLIC;
        }
        this.setPerformanceProperty(CDNSTATUS, cdnStatus);
    };
    BasePerformanceLogger._collectFarmBuildRolloutInfo = function () {
        var farmTempPercent = "100";
        if (_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__["_SPFlight"].isEnabled(1819 /* WEXPerf10PercentFarm */)) {
            farmTempPercent = '10';
        }
        else if (_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__["_SPFlight"].isEnabled(1826 /* WEXPerf40PercentFarm */)) {
            farmTempPercent = '40';
        }
        else if (_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__["_SPFlight"].isEnabled(1827 /* WEXPerf75PercentFarm */)) {
            farmTempPercent = '75';
        }
        this.setPerformanceProperty(FARM_TEMPRATURE, farmTempPercent);
    };
    BasePerformanceLogger._collectRequestData = function (from) {
        if (window.document && performance && performance.getEntriesByType && from === 'TTI') {
            var urlParams = new URLSearchParams(window.location.search);
            var logDebugData = urlParams.has('LogRequestCategorization');
            var allRequests = performance.getEntriesByType('resource');
            var requestsOutput = {};
            if (logDebugData) {
                /*tslint:disable-next-line:no-string-literal*/
                requestsOutput['allRequests'] = allRequests.map(function (req) { return req.name; });
            }
            var iFrames = document.getElementsByTagName('iframe');
            for (var index = 0; index < iFrames.length; index++) {
                var iFramePerformance = undefined;
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
            var fromSources = BasePerformanceLogger._getSourcesMappings();
            var types = BasePerformanceLogger._getRequestTypeMappings();
            var sources = Object.keys(fromSources);
            for (var index = 0; index < sources.length; index++) {
                var source = sources[index];
                var requests = this._categorizeResourceRequests(allRequests, {
                    from: fromSources[source],
                    requestType: undefined // match any type to get total request count for this source
                });
                var propName = source + 'RequestCountTotal';
                this.setPerformanceProperty(propName, requests.length);
                if (logDebugData) {
                    requestsOutput[propName] = this._getRequestNames(requests);
                }
                var typeKeys = Object.keys(types);
                for (var typeIndex = 0; typeIndex < typeKeys.length; typeIndex++) {
                    var type = typeKeys[typeIndex];
                    var typeRequests = this._categorizeResourceRequests(requests, {
                        from: undefined,
                        requestType: types[type]
                    });
                    propName = source + 'RequestCount' + type;
                    this.setPerformanceProperty(propName, typeRequests.length);
                    if (logDebugData) {
                        requestsOutput[propName] = this._getRequestNames(typeRequests);
                    }
                    // Cross origin requests need to have Timing-Allow-Origin response header set for us to get the values for checking cached
                    // This seems to usually not be set for second party
                    if (type.indexOf('SecondParty') === -1) {
                        var cachedRequests = this._categorizeResourceRequests(typeRequests, {
                            from: undefined,
                            requestType: undefined,
                            cached: BasePerformanceLogger._isRequestFromCache
                        });
                        propName = source + 'RequestCacheHit' + type;
                        this.setPerformanceProperty(propName, cachedRequests.length);
                        if (logDebugData) {
                            requestsOutput[propName] = this._getRequestNames(cachedRequests);
                        }
                    }
                }
                if (requests.length > 0) {
                    var avg = Math.round(requests.reduce(function (sum, currentVal) {
                        return sum + currentVal.duration;
                    }, 0) / requests.length);
                    propName = source + 'RequestDownloadTime';
                    this.setPerformanceProperty(propName, avg);
                    if (logDebugData) {
                        requestsOutput[propName] = avg;
                    }
                }
            }
            if (logDebugData) {
                console.log(JSON.stringify(requestsOutput));
            }
        }
    };
    BasePerformanceLogger._getRequestNames = function (requests) {
        return requests.map(function (req) { return req.name; });
    };
    BasePerformanceLogger._getRequestTypeMappings = function () {
        var types = {};
        /*tslint:disable:no-string-literal*/
        types['ASPX'] = function (element) {
            return /\.aspx/i.test(element.name);
        };
        types['JS'] = function (element) {
            return /\.js/i.test(element.name);
        };
        types['CSS'] = function (element) {
            return /\.css/i.test(element.name);
        };
        types['IMG'] = function (element) {
            return /img/i.test(element.initiatorType) || /\.jpg|\.jpeg|\.png|\.gif/i.test(element.name);
        };
        types['Aria'] = function (element) {
            return /aria\.microsoft\.com/i.test(element.name);
        };
        types['REST'] = function (element) {
            return /_api/i.test(element.name);
        };
        /*tslint:enable:no-string-literal*/
        return types;
    };
    BasePerformanceLogger._getSourcesMappings = function () {
        var fromSources = {};
        /*tslint:disable:no-string-literal*/
        fromSources['SPFxThirdParty'] = BasePerformanceLogger._isRequestFromThirdParty;
        fromSources['SPFxFirstParty'] = BasePerformanceLogger._isRequestFromFirstParty;
        fromSources['SPFxSecondParty'] = BasePerformanceLogger._isRequestFromSecondParty;
        /*tslint:enable:no-string-literal*/
        return fromSources;
    };
    // matching cdn(ppe)sharepointonline.com or adamaihd.net or akamai.odsp.cdn.office.net
    BasePerformanceLogger._isRequestFromCDN = function (element) {
        var name = element.name;
        return /(cdn(ppe)?|static(ppe)?)\.sharepointonline\.com|\.akamaihd\.net|akamai\.odsp\.cdn\.office\.net/i.test(name);
    };
    // matching sharepoint.com or spoppe.com or from a CDN, and is not a ThirdParty request
    BasePerformanceLogger._isRequestFromFirstParty = function (element) {
        // this code accounts for vanity domains
        var name = element.name;
        var isSharePoint = 0 === name.search(window.location.protocol + '//' + window.location.host);
        return (!BasePerformanceLogger._isRequestFromThirdParty(element) &&
            (isSharePoint || BasePerformanceLogger._isRequestFromCDN(element)));
    };
    // all requests that have 'ClientSideAssets' in the URL
    BasePerformanceLogger._isRequestFromThirdParty = function (element) {
        var name = element.name;
        return /ClientSideAssets/i.test(name);
    };
    // All requests that are not first or third party, things like Aria requests
    BasePerformanceLogger._isRequestFromSecondParty = function (element) {
        return (!BasePerformanceLogger._isRequestFromFirstParty(element) &&
            !BasePerformanceLogger._isRequestFromThirdParty(element));
    };
    BasePerformanceLogger._isRequestFromCache = function (element) {
        return element.transferSize === 0 && element.connectStart > 0;
    };
    BasePerformanceLogger._categorizeResourceRequests = function (requests, categorizer /* tslint:disable-line:no-any */) {
        var ret = [];
        for (var index = 0; index < requests.length; index++) {
            /* tslint:disable-next-line:no-any */
            var request = requests[index];
            if ((!categorizer.from || categorizer.from(request)) &&
                (!categorizer.requestType || categorizer.requestType(request)) &&
                (!categorizer.cached || categorizer.cached(request))) {
                ret.push(request);
            }
        }
        return ret;
    };
    BasePerformanceLogger._isSPFxInjectTTIBootScriptFlightEnabled = function () {
        return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__["_SPFlight"].isEnabled(1793 /* SPFxInjectTTIBootScript */);
    };
    BasePerformanceLogger._isMarkFailureInPerformanceLoggerFeatureEnabled = function () {
        return (_SPPerfExperiment__WEBPACK_IMPORTED_MODULE_6__["SPPerfExperiment"].getVariantAndTrackExperiment(_PerformanceFlights__WEBPACK_IMPORTED_MODULE_5__["_PerformanceExperiment"].MarkFailureInPerformanceLoggerV2) === 1);
    };
    BasePerformanceLogger._getFlightStatus = function (flightNumber) {
        return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__["_SPFlight"].isEnabled(flightNumber) ? STATUS_ON : STATUS_OFF;
    };
    BasePerformanceLogger._setWebpartExperiments = function (webpartTag, flightId, flightStatus) {
        var flightMap = this._webpartExperiments.get(webpartTag);
        if (!flightMap) {
            flightMap = new Map();
        }
        if (flightStatus) {
            flightMap.set(flightId, flightStatus);
            this._webpartExperiments.set(webpartTag, flightMap);
        }
    };
    BasePerformanceLogger._isClearExperimentsKillSwitchActive = function () {
        return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__["_SPKillSwitch"].isActivated(CLEAR_EXPERIMENTS, '2020/06/09', 'Clear experiments map.');
    };
    BasePerformanceLogger._isWebpartExperimentKSActivated = function () {
        return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__["_SPKillSwitch"].isActivated(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__["Guid"].parse('4cfbf54a-8bda-43ee-8599-e62f0d1ae9ee'), '2020/06/11', 'Log webpart experiment');
    };
    BasePerformanceLogger._isCollectFidKSActive = function () {
        return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__["_SPKillSwitch"].isActivated('a4f32745-9471-4382-b370-22a704b48526');
    };
    BasePerformanceLogger._isCollectRequestDataKSActivated = function () {
        return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__["_SPKillSwitch"].isActivated('2c3e6a71-a1f1-4177-9c47-3e01faccfced'
        /*'12/2/2020', 'Collect perf data on network requests' */
        );
    };
    BasePerformanceLogger._isMarkWebPartRenderTimeOnErrorKsActivated = function () {
        return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__["_SPKillSwitch"].isActivated('daaa781c-aaca-4423-97f6-0d3cc19d9c41'
        /* '1/19/2021', 'Mark render time for webparts even when there's an error for EUPL measurement' */
        );
    };
    BasePerformanceLogger.extensionsInitializedMetricName = 'ExtensionsInitialized';
    BasePerformanceLogger.renderDeferredStartKey = 'renderDeferredStart';
    BasePerformanceLogger.allWebPartsAddedKey = 'allWebPartsAdded';
    BasePerformanceLogger.canvasRenderStartKey = 'canvasRenderStart';
    BasePerformanceLogger.canvasMountedAt = 'canvasMountedAt';
    BasePerformanceLogger._logSource = _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_3__["_LogSource"].create('BasePerformanceLogger');
    BasePerformanceLogger._rumOneData = {};
    BasePerformanceLogger._tempData = {}; /* tslint:disable-line:no-any */
    BasePerformanceLogger._componentStartTimeKey = 'ComponentStartTime';
    BasePerformanceLogger._componentEndTimeKey = 'ComponentEndTime';
    BasePerformanceLogger._markKey = 'Mark';
    BasePerformanceLogger._spLoaderStartKey = 'spLoaderStart';
    BasePerformanceLogger._applicationStartKey = 'appStart';
    BasePerformanceLogger._navigationStartOffsetKey = 'navigationStartOffset';
    BasePerformanceLogger._crossAppNavigationStartKey = 'crossAppNavigationStart';
    BasePerformanceLogger._pageTransitionType = _PageTransitionType__WEBPACK_IMPORTED_MODULE_4__["PageTransitionType"].none;
    BasePerformanceLogger._trackedExperiments = new Map();
    BasePerformanceLogger._webpartExperiments = new Map();
    BasePerformanceLogger._expectedControls = new Set();
    BasePerformanceLogger._perfBreakdown = [];
    BasePerformanceLogger._preloadImageUsage = new Map();
    BasePerformanceLogger._extraEuplCalculationCount = 0;
    /**
     * @deprecated Use PerformanceFlight or _PerformanceExperiment
     * List of flights which needs to be tracked along with performance data
     * It will allow compare perf data with and without flight enabled.
     */
    BasePerformanceLogger._flightsOptedABTestingDeprecated = [
        1353 /* SuiteNavSharedControl */,
        1490 /* SPHomeNextGen */,
        1751 /* SPFxJsonParse2 */
    ];
    return BasePerformanceLogger;
}());
/* harmony default export */ __webpack_exports__["default"] = (BasePerformanceLogger);


/***/ }),

/***/ "mwqp":
/*!**********************!*\
  !*** ./lib/index.js ***!
  \**********************/
/*! exports provided: _EngagementLogger, _QosMonitor, _PerformanceLogger, _ExperimentStatus, _PerformanceExperiment, _PerformanceFlight, _PageTransitionType, _Telemetry, _ABExperiment, _PageUsageAdapter, _PerformanceDataDimensions, _SPPerfExperiment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/sp-diagnostics */ "ut3N");
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_EngagementLogger", function() { return _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_0__["_EngagementLogger"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_QosMonitor", function() { return _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_0__["_QosMonitor"]; });

/* harmony import */ var _Api_Performance_BasePerformanceLogger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Api/Performance/BasePerformanceLogger */ "kJO1");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_PerformanceLogger", function() { return _Api_Performance_BasePerformanceLogger__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _Api_Performance_PerformanceFlights__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Api/Performance/PerformanceFlights */ "2iJd");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_ExperimentStatus", function() { return _Api_Performance_PerformanceFlights__WEBPACK_IMPORTED_MODULE_2__["_ExperimentStatus"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_PerformanceExperiment", function() { return _Api_Performance_PerformanceFlights__WEBPACK_IMPORTED_MODULE_2__["_PerformanceExperiment"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_PerformanceFlight", function() { return _Api_Performance_PerformanceFlights__WEBPACK_IMPORTED_MODULE_2__["_PerformanceFlight"]; });

/* harmony import */ var _Api_Performance_PageTransitionType__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Api/Performance/PageTransitionType */ "F00A");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_PageTransitionType", function() { return _Api_Performance_PageTransitionType__WEBPACK_IMPORTED_MODULE_3__["PageTransitionType"]; });

/* harmony import */ var _Telemetry__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Telemetry */ "RrtT");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_Telemetry", function() { return _Telemetry__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _ABExperimentWrapper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ABExperimentWrapper */ "4Fgs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_ABExperiment", function() { return _ABExperimentWrapper__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _Api_Performance_PageUsageAdapter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Api/Performance/PageUsageAdapter */ "n3bJ");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_PageUsageAdapter", function() { return _Api_Performance_PageUsageAdapter__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _Api_Performance_IPerformanceLogger__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Api/Performance/IPerformanceLogger */ "H4tX");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_PerformanceDataDimensions", function() { return _Api_Performance_IPerformanceLogger__WEBPACK_IMPORTED_MODULE_7__["PerformanceDataDimensions"]; });

/* harmony import */ var _SPPerfExperiment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./SPPerfExperiment */ "awom");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_SPPerfExperiment", function() { return _SPPerfExperiment__WEBPACK_IMPORTED_MODULE_8__["SPPerfExperiment"]; });












/***/ }),

/***/ "n3bJ":
/*!*************************************************!*\
  !*** ./lib/Api/Performance/PageUsageAdapter.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ms/odsp-core-bundle */ "K9kD");
/* harmony import */ var _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _PageTransitionType__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PageTransitionType */ "F00A");



// In sync with the constant in {@link PageUsageLogger}
var DEFAULT_ADAPTER_NAME = '__default_page_usage__';
var ELAPSED_OFFSET = _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["Guid"].parse('4ce2e29a-2033-4b43-a7df-bb05ac0cf457');
var PAGE_LOAD_CUSTOMER_PROMISE = 'SPPagesAppLoad';
/**
 * Adapter class to connect PageUsageLogger and RumOneLogger. This is primarily used in BasePerformance logger.
 * It is meant to allow loose coupling, with PageUsage specific logic contained here.
 *
 * @internal
 */
var PageUsageAdapter = /** @class */ (function () {
    function PageUsageAdapter(name) {
        this._pageUsageLogger = _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__["PageUsageLogger"].getPageUsageLogger(name);
        this._rumOneLogger = _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__["RumOneLogger"].getRUMOneLogger();
        this._isCustomerPromiseEnabled = _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["_SPFlight"].isEnabled(1468 /* WexCustomerPromise */);
    }
    PageUsageAdapter.getInstance = function (name) {
        if (name === void 0) { name = DEFAULT_ADAPTER_NAME; }
        if (!PageUsageAdapter._adapters[name]) {
            PageUsageAdapter._adapters[name] = new PageUsageAdapter(name);
        }
        return PageUsageAdapter._adapters[name];
    };
    PageUsageAdapter.prototype.initialize = function () {
        var _this = this;
        var _a;
        var isFullPageLoad = this.isFullPageLoad();
        if (this._isCustomerPromiseEnabled) {
            this._customerPromise = new _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__["CustomerPromise"]({
                scenario: PAGE_LOAD_CUSTOMER_PROMISE,
                extraData: { isFullPageLoad: isFullPageLoad }
            });
        }
        this._pageUsageLogger.initialize(this.getApplicationId(), this._isElapseOffsetKillSwitchActivated() ? undefined : isFullPageLoad ? 0 : performance.now(), !this._isAddComponentStartTimeKillSwitchActivated());
        this._pageUsageLogger.markFeature('FullPageLoad', isFullPageLoad === null || isFullPageLoad === void 0 ? void 0 : isFullPageLoad.toString());
        this._pageUsageLogger.markFeature('StartTime', (_a = this.getAppStartTime()) === null || _a === void 0 ? void 0 : _a.toString());
        // Add handler that will be called upon finish(). This will collect additional common perf data before finish()
        this._pageUsageLogger.addPreFinishHandler(function () {
            var perfMarks = window[PageUsageAdapter._perfMarksKey];
            var postFlush;
            // Set postFlush from SPFXPerfMarks first, then fallback to RumOneLogger
            if (perfMarks) {
                postFlush = perfMarks[PageUsageAdapter._perfMarkPostFlush];
            }
            if (typeof postFlush !== 'number' || isNaN(postFlush)) {
                postFlush = _this.getPerformanceProperty(PageUsageAdapter._perfMarkPostFlush);
            }
            if (typeof postFlush === 'number' && !isNaN(postFlush)) {
                _this.markFeature('PostFlush', postFlush.toFixed(2));
            }
            // Set lkgOnTime
            var lkgOnTime = _this.getPerformanceProperty('lkgOnTime');
            if (typeof lkgOnTime === 'string') {
                _this.markFeature('LkgOnTime', lkgOnTime);
            }
            if (_this._isCustomerPromiseEnabled && _this._customerPromise) {
                _this._customerPromise.end({ resultType: _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__["ResultTypeEnum"].Success });
            }
        });
    };
    PageUsageAdapter.prototype.elapsedTime = function () {
        return this._pageUsageLogger.elapsedTime();
    };
    PageUsageAdapter.prototype.addComponent = function (tag) {
        this._pageUsageLogger.addComponent(tag);
    };
    PageUsageAdapter.prototype.markSuccess = function (tag) {
        this._pageUsageLogger.markSuccess(tag);
    };
    PageUsageAdapter.prototype.markFailure = function (key, value) {
        this._pageUsageLogger.markFailure(key, value);
        if (this._isCustomerPromiseEnabled && this._customerPromise && key.indexOf('.external') === -1) {
            // Do not  mark failure external web parts
            this._customerPromise.end({
                resultType: _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__["ResultTypeEnum"].Failure,
                errorCode: key + " failed to load " + value
            });
            this._customerPromise = undefined;
        }
    };
    PageUsageAdapter.prototype.markFeature = function (key, value) {
        this._pageUsageLogger.markFeature(key, value);
    };
    PageUsageAdapter.prototype.getPerformanceProperty = function (key) {
        return this._rumOneLogger.getPerformanceDataPropertyValue(key);
    };
    PageUsageAdapter.prototype.getApplicationId = function () {
        var applicationId = this.getPerformanceProperty('ScenarioId');
        if (typeof applicationId === 'string') {
            return applicationId;
        }
        else {
            return undefined;
        }
    };
    PageUsageAdapter.prototype.isFullPageLoad = function () {
        var pageTransitionType = this._rumOneLogger.getPerformanceDataPropertyValue('PageTransitionType');
        if (pageTransitionType) {
            return _PageTransitionType__WEBPACK_IMPORTED_MODULE_2__["PageTransitionType"].fullPageLoad === pageTransitionType;
        }
        else {
            return undefined;
        }
    };
    PageUsageAdapter.prototype.getAppStartTime = function () {
        var appStartTime = this.getPerformanceProperty('appStart');
        if (typeof appStartTime === 'number') {
            return appStartTime;
        }
        else {
            return undefined;
        }
    };
    PageUsageAdapter.prototype._isElapseOffsetKillSwitchActivated = function () {
        return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["_SPKillSwitch"].isActivated(ELAPSED_OFFSET, '2020/06/10', 'Pass elapse offset parameter to Initialize method');
    };
    PageUsageAdapter.prototype._isAddComponentStartTimeKillSwitchActivated = function () {
        return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["_SPKillSwitch"].isActivated('595059c7-223e-46cc-8da7-d217307d59fb' /* '2020/08/12', 'Add component start time to PageUsage' */);
    };
    PageUsageAdapter._adapters = {};
    PageUsageAdapter._perfMarksKey = 'spfxPerfMarks';
    PageUsageAdapter._perfMarkPostFlush = 'postFlush';
    return PageUsageAdapter;
}());
/* harmony default export */ __webpack_exports__["default"] = (PageUsageAdapter);


/***/ }),

/***/ "n5Pd":
/*!***************************!*\
  !*** ./lib/AriaLogger.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ms/odsp-core-bundle */ "K9kD");
/* harmony import */ var _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__);
/**
 * @copyright Microsoft Corporation. All rights reserved.
 */
/// <reference types="@ms/aria-private" />

/**
 * @internal
 */
var AriaLogger = /** @class */ (function () {
    function AriaLogger() {
    }
    AriaLogger.initialize = function (tenantToken, context) {
        if (AriaLogger.ariaLoggerDisposer && typeof AriaLogger.ariaLoggerDisposer === 'function') {
            AriaLogger.ariaLoggerDisposer();
        }
        __webpack_require__.e(/*! import() | sp-client-telemetry-aria */ "vendors~sp-client-telemetry-aria").then(__webpack_require__.t.bind(null, /*! exports-loader?microsoft.applications.telemetry!@ms/aria-private */ "4IfC", 7)).then(function (aria) {
            AriaLogger.ariaLoggerDisposer = _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__["AriaLoggerCore"].Init(tenantToken, context, aria);
        });
    };
    AriaLogger.update = function (context) {
        _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__["AriaLoggerCore"].updateContext(context);
    };
    return AriaLogger;
}());
/* harmony default export */ __webpack_exports__["default"] = (AriaLogger);


/***/ }),

/***/ "ut3N":
/*!********************************************!*\
  !*** external "@microsoft/sp-diagnostics" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_ut3N__;

/***/ })

/******/ })});;
//# sourceMappingURL=sp-telemetry_none.js.map