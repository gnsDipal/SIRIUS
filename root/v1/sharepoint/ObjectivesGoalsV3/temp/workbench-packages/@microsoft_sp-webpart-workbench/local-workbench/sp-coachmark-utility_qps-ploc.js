define("6da60671-741f-47c5-b35b-5078edaf312f_0.1.0", ["@microsoft/sp-loader","@microsoft/sp-core-library","@microsoft/load-themed-styles","@microsoft/sp-diagnostics"], function(__WEBPACK_EXTERNAL_MODULE_I6O9__, __WEBPACK_EXTERNAL_MODULE_UWqr__, __WEBPACK_EXTERNAL_MODULE_jOlS__, __WEBPACK_EXTERNAL_MODULE_ut3N__) { return /******/ (function(modules) { // webpackBootstrap
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
/******/ 		var component_0 = { // tslib
/******/ 			i: "01c4df03-e775-48cb-aa14-171ee5199a15",
/******/ 			v: "1.10.0",
/******/ 			m: "17wl"
/******/ 		};
/******/ 		var component_1 = { // react
/******/ 			i: "0d910c1c-13b9-4e1c-9aa4-b008c5e42d7d",
/******/ 			v: "16.9.0",
/******/ 			m: "cDcd"
/******/ 		};
/******/ 		var component_2 = { // react-dom
/******/ 			i: "aa0a46ec-1505-43cd-a44a-93f3a5aa460a",
/******/ 			v: "16.9.0",
/******/ 			m: "faye"
/******/ 		};
/******/ 		var component_3 = { // @microsoft/office-ui-fabric-react-bundle
/******/ 			i: "02a01e42-69ab-403d-8a16-acd128661f8e",
/******/ 			v: "1.12.1",
/******/ 			m: "KL1q"
/******/ 		};
/******/ 		var component_4 = { // @ms/sp-mysitecache
/******/ 			i: "a8d4def5-9852-45c7-905e-2e50203cbb98",
/******/ 			v: "0.1.0",
/******/ 			m: "ZVdo"
/******/ 		};
/******/ 		var component_5 = { // @ms/uifabric-styling-bundle
/******/ 			i: "17ce0976-e69a-4355-be84-89b69a74717d",
/******/ 			v: "0.1.0",
/******/ 			m: "fglE"
/******/ 		};
/******/
/******/ 		return {"vendors~sp-featurehostcontrol~sp-fretimer": [component_0, component_1, component_2, component_3],"vendors~sp-featurehostcontrol": [component_0, component_1, component_3],"sp-featurehostcontrol": [component_0, component_1, component_2, component_4],"vendors~sp-fretimer": [component_0, component_1, component_3, component_5],"sp-fretimer": [component_0, component_1, component_2, component_3, component_4]}[chunkId] || [];
/******/ 	}
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"sp-coachmark-utility": 0
/******/ 	};
/******/
/******/
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "chunk." + ({"vendors~sp-featurehostcontrol~sp-fretimer":"vendors~sp-featurehostcontrol~sp-fretimer","vendors~sp-featurehostcontrol":"vendors~sp-featurehostcontrol","sp-featurehostcontrol":"sp-featurehostcontrol","vendors~sp-fretimer":"vendors~sp-fretimer","sp-fretimer":"sp-fretimer"}[chunkId]||chunkId) + "_" + (["qps-ploc","none"])[{"sp-featurehostcontrol":0,"sp-fretimer":0,"vendors~sp-featurehostcontrol~sp-fretimer":1,"vendors~sp-featurehostcontrol":1,"vendors~sp-fretimer":1}[chunkId]] + ".js"
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
/******/ 	var jsonpArray = window["webpackJsonp_6da60671_741f_47c5_b35b_5078edaf312f_0_1_0"] = window["webpackJsonp_6da60671_741f_47c5_b35b_5078edaf312f_0_1_0"] || [];
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
/******/ 	  var regex = (typeof spScriptNamePattern !== 'undefined') ? spScriptNamePattern : /sp-coachmark-utility_qps-ploc\.js/i;
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

/***/ "6ilQ":
/*!************************************************!*\
  !*** ./lib/FeatureHostControl/IFeatureHost.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "B0DA":
/*!*********************************!*\
  !*** ./lib/CoachmarkUtility.js ***!
  \*********************************/
/*! exports provided: default, DeferLoadingFRETimer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeferLoadingFRETimer", function() { return DeferLoadingFRETimer; });
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/sp-diagnostics */ "ut3N");
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _FirstRunExperience_Constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FirstRunExperience/Constants */ "OHGd");
/**
 * @copyright Microsoft Corporation. All rights reserved.
 */



/**
 * @internal
 *
 * Unified control utility to manage all coaching related surfaces regardless of the caller component.
 * This utility manages the render and queueing mechanism to make sure only one surface is visible at a time
 * Use serviceScope.consume(coachmarkUtility.serviceKey) to get reference for the instance.
 */
var CoachmarkUtility = /** @class */ (function () {
    function CoachmarkUtility(serviceScope) {
        var _this = this;
        this.clear = function () {
            _this._deferLoadingFeatureHostControl
                .then(function (featureHostControl) {
                featureHostControl.instance.clearFeatureHosts();
            })
                .catch(_this._handleError);
        };
        this._serviceScope = serviceScope;
        document.addEventListener(_FirstRunExperience_Constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].COACHMARK_UTILITY_RESET_EVENT, this.clear);
    }
    /**
     * Disable all coach mark functionalities.
     * Note: You should ONLY call this method in automation code. Do NOT call this on production environment.
     */
    CoachmarkUtility._internalAutomationDisable = function () {
        CoachmarkUtility._enabled = false;
    };
    CoachmarkUtility.prototype.attachTeachingBubble = function (origHostProps) {
        if (this._isFirstRunInProgress) {
            return Promise.resolve(undefined);
        }
        return this._deferLoadingFeatureHostControl
            .then(function (featureHostControl) {
            var hostProps = featureHostControl.instance.normalizeTeachingBubbleProps(origHostProps);
            return featureHostControl.instance.attachFeatureHost(hostProps);
        })
            .catch(this._handleError);
    };
    CoachmarkUtility.prototype.attachCoachmark = function (origHostProps) {
        if (this._isFirstRunInProgress) {
            return Promise.resolve(undefined);
        }
        return this._deferLoadingFeatureHostControl
            .then(function (featureHostControl) {
            var hostProps = featureHostControl.instance.normalizeCoachmarkHostProps(origHostProps);
            return featureHostControl.instance.attachFeatureHost(hostProps);
        })
            .catch(this._handleError);
    };
    CoachmarkUtility.prototype.startFRETimer = function (forceStart) {
        var _this = this;
        DeferLoadingFRETimer()
            .then(function (freTimer) {
            freTimer.startFRETimer(_this._serviceScope, forceStart);
        })
            .catch(function (error) { return _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__["_TraceLogger"].logError(CoachmarkUtility._logSource, error); });
    };
    CoachmarkUtility.prototype.dismiss = function (localStorageKey, shouldSetLocalStorageKey) {
        this._deferLoadingFeatureHostControl
            .then(function (featureHostControl) {
            featureHostControl.instance.dismissFeatureHost(localStorageKey, shouldSetLocalStorageKey);
        })
            .catch(this._handleError);
    };
    Object.defineProperty(CoachmarkUtility.prototype, "_deferLoadingFeatureHostControl", {
        get: function () {
            var _this = this;
            if (!CoachmarkUtility._enabled) {
                return Promise.reject(undefined);
            }
            else {
                return Promise.all(/*! import() | sp-featurehostcontrol */[__webpack_require__.e("vendors~sp-featurehostcontrol~sp-fretimer"), __webpack_require__.e("vendors~sp-featurehostcontrol"), __webpack_require__.e("sp-featurehostcontrol")]).then(__webpack_require__.bind(null, /*! ./FeatureHostControl/FeatureHostControl */ "brtj")).then(function (featureHostControl) {
                    if (!featureHostControl.default.instance.serviceScope) {
                        featureHostControl.default.instance.serviceScope = _this._serviceScope;
                    }
                    return featureHostControl.default;
                });
            }
        },
        enumerable: true,
        configurable: true
    });
    CoachmarkUtility.prototype._handleError = function (error) {
        if (error) {
            _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__["_TraceLogger"].logError(CoachmarkUtility._logSource, error);
            return Promise.reject(error);
        }
        else {
            return Promise.reject(undefined);
        }
    };
    Object.defineProperty(CoachmarkUtility.prototype, "_isFirstRunInProgress", {
        get: function () {
            var _a;
            return Boolean(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPFlight"].isEnabled(1787 /* New First Run Experience */) && ((_a = window.sessionStorage) === null || _a === void 0 ? void 0 : _a.getItem(_FirstRunExperience_Constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].FIRSTRUN_SESSION_KEY)));
        },
        enumerable: true,
        configurable: true
    });
    CoachmarkUtility.serviceKey = _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["ServiceKey"].create('sp-coachmark-utility:CoachmarkUtility', CoachmarkUtility);
    CoachmarkUtility._logSource = _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__["_LogSource"].create('CoachmarkUtility');
    CoachmarkUtility._enabled = true;
    return CoachmarkUtility;
}());
/* harmony default export */ __webpack_exports__["default"] = (CoachmarkUtility);
function DeferLoadingFRETimer() {
    return Promise.all(/*! import() | sp-fretimer */[__webpack_require__.e("vendors~sp-featurehostcontrol~sp-fretimer"), __webpack_require__.e("vendors~sp-fretimer"), __webpack_require__.e("sp-fretimer")]).then(__webpack_require__.bind(null, /*! ./FirstRunExperience/FRETimer */ "qGq9")).then(function (freTimer) {
        return freTimer.default;
    });
}


/***/ }),

/***/ "I6O9":
/*!***************************************!*\
  !*** external "@microsoft/sp-loader" ***!
  \***************************************/
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_I6O9__;

/***/ }),

/***/ "OHGd":
/*!*********************************************!*\
  !*** ./lib/FirstRunExperience/Constants.js ***!
  \*********************************************/
/*! exports provided: Constants */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Constants", function() { return Constants; });
// tslint:disable-next-line:typedef variable-name
var Constants = {
    FIRSTRUN_SESSION_KEY: 'FirstRunInProgress',
    SP_FRE_DATA_TAG: 'data-sp-fre-id',
    SP_FRE_OFFSET_LEFT: 'data-offset-left',
    SP_FRE_OFFSET_TOP: 'data-offset-top',
    DISMISS_FRE_CALLOUT_EVENT: 'DismissFRECallout',
    COACHMARK_UTILITY_RESET_EVENT: 'CoachmarkUtilityReset',
    FIRST_RUN_LOCALSTORAGE_KEY: 'CompletedFirstRunExp',
    VERSION_ZERO: '0.0',
    FRE_CURRENT_VERSION: '1.1',
    QOS_PREFIX: 'FirstRunExp'
};


/***/ }),

/***/ "UWqr":
/*!*********************************************!*\
  !*** external "@microsoft/sp-core-library" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_UWqr__;

/***/ }),

/***/ "jOlS":
/*!************************************************!*\
  !*** external "@microsoft/load-themed-styles" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_jOlS__;

/***/ }),

/***/ "mwqp":
/*!**********************!*\
  !*** ./lib/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CoachmarkUtility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CoachmarkUtility */ "B0DA");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CoachmarkUtility", function() { return _CoachmarkUtility__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _FeatureHostControl_IFeatureHost__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FeatureHostControl/IFeatureHost */ "6ilQ");
/* harmony import */ var _FeatureHostControl_IFeatureHost__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_FeatureHostControl_IFeatureHost__WEBPACK_IMPORTED_MODULE_1__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _FeatureHostControl_IFeatureHost__WEBPACK_IMPORTED_MODULE_1__) if(["default","CoachmarkUtility"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _FeatureHostControl_IFeatureHost__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/**
 * This library managing all coachmarks on a page regardless of component hierarchy.
 * In need of joining the FRE sequence, do a lib import of /FirstRunExperience/Components/FREDataIcon
 * @packagedocumentation
 */




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
//# sourceMappingURL=sp-coachmark-utility_[locale].js.map