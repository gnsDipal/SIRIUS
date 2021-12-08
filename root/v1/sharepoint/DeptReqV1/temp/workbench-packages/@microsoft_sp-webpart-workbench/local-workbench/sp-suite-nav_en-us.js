define("f8a8ad94-4cf3-4a19-a76b-1cec9da00219_0.1.0", ["tslib","@ms/sp-telemetry","@ms/sp-search-common","@microsoft/sp-loader","@ms/odsp-core-bundle","@microsoft/sp-lodash-subset","@microsoft/sp-core-library","@microsoft/sp-page-context","react","@microsoft/load-themed-styles","@microsoft/sp-diagnostics","@microsoft/sp-http"], function(__WEBPACK_EXTERNAL_MODULE__17wl__, __WEBPACK_EXTERNAL_MODULE__2q6Q__, __WEBPACK_EXTERNAL_MODULE__7jo1__, __WEBPACK_EXTERNAL_MODULE_I6O9__, __WEBPACK_EXTERNAL_MODULE_K9kD__, __WEBPACK_EXTERNAL_MODULE_Pk8u__, __WEBPACK_EXTERNAL_MODULE_UWqr__, __WEBPACK_EXTERNAL_MODULE_X_PM__, __WEBPACK_EXTERNAL_MODULE_cDcd__, __WEBPACK_EXTERNAL_MODULE_jOlS__, __WEBPACK_EXTERNAL_MODULE_ut3N__, __WEBPACK_EXTERNAL_MODULE_vlQI__) { return /******/ (function(modules) { // webpackBootstrap
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
/******/ 		"sp-suite-nav": 0
/******/ 	};
/******/
/******/
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "chunk." + ({"sp-suite-nav-searchBoxProvider":"sp-suite-nav-searchBoxProvider","vendors~html2canvas":"vendors~html2canvas","vendors~sp-suite-nav-search-common":"vendors~sp-suite-nav-search-common","sp-suite-nav-search-common":"sp-suite-nav-search-common","vendors~sp-suite-nav-theming":"vendors~sp-suite-nav-theming"}[chunkId]||chunkId) + "_" + "none" + ".js"
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
/******/ 	var jsonpArray = window["webpackJsonpf8a8ad94_4cf3_4a19_a76b_1cec9da00219_0_1_0"] = window["webpackJsonpf8a8ad94_4cf3_4a19_a76b_1cec9da00219_0_1_0"] || [];
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
/******/ 	  var regex = (typeof spScriptNamePattern !== 'undefined') ? spScriptNamePattern : /sp-suite-nav_en-us\.js/i;
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

/***/ "019d":
/*!*********************************!*\
  !*** ./lib/O365ShellWrapper.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _FlexPaneWrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FlexPaneWrapper */ "J5pV");
/* harmony import */ var _O365ShellPromises__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./O365ShellPromises */ "S309");
/**
 * @Copyright (c) Microsoft Corporation.  All rights reserved.
 *
 * @file Wrapper around the O365Shell global, preventing other files from needing to access the global
 */



var O365ShellWrapper = /** @class */ (function () {
    function O365ShellWrapper() {
        var _this = this;
        this._postRenderSignal = new Promise(function (resolve) {
            _this._postRenderSignalResolve = resolve;
            return;
        });
        this.FlexPane = new _FlexPaneWrapper__WEBPACK_IMPORTED_MODULE_1__["default"]();
        if (!_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPKillSwitch"].isActivated('f3d8b2b7-360b-4089-9f5e-6b50ef348210'
        /* '07/18/2020', 'Use promises only with faster suiteNav flight' */
        )) {
            if (_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPFlight"].isEnabled(1136 /* O365ShellModuleJSClient */)) {
                _O365ShellPromises__WEBPACK_IMPORTED_MODULE_2__["O365ShellPromises"].GetLoadPromise().then(function () { return _this._triggerShellPhaseUpdates(); });
                _O365ShellPromises__WEBPACK_IMPORTED_MODULE_2__["O365ShellPromises"].GetRenderPromise().then(function () { return _this._triggerShellPhaseUpdates(); });
                _O365ShellPromises__WEBPACK_IMPORTED_MODULE_2__["O365ShellPromises"].GetPostRenderPromise().then(function () { return _this._triggerShellPhaseUpdates(); });
            }
            else {
                // This needs the O365ShellModuleJSClient flight to be there for the promises to exist.
                if (!!_O365ShellPromises__WEBPACK_IMPORTED_MODULE_2__["O365ShellPromises"].GetLoadPromise()) {
                    _O365ShellPromises__WEBPACK_IMPORTED_MODULE_2__["O365ShellPromises"].GetLoadPromise().then(function () { return _this._triggerShellPhaseUpdates(); });
                }
                if (!!_O365ShellPromises__WEBPACK_IMPORTED_MODULE_2__["O365ShellPromises"].GetRenderPromise()) {
                    _O365ShellPromises__WEBPACK_IMPORTED_MODULE_2__["O365ShellPromises"].GetRenderPromise().then(function () { return _this._triggerShellPhaseUpdates(); });
                }
                if (!!_O365ShellPromises__WEBPACK_IMPORTED_MODULE_2__["O365ShellPromises"].GetPostRenderPromise()) {
                    _O365ShellPromises__WEBPACK_IMPORTED_MODULE_2__["O365ShellPromises"].GetPostRenderPromise().then(function () { return _this._triggerShellPhaseUpdates(); });
                }
            }
        }
        else {
            _O365ShellPromises__WEBPACK_IMPORTED_MODULE_2__["O365ShellPromises"].GetLoadPromise().then(function () { return _this._triggerShellPhaseUpdates(); });
            _O365ShellPromises__WEBPACK_IMPORTED_MODULE_2__["O365ShellPromises"].GetRenderPromise().then(function () { return _this._triggerShellPhaseUpdates(); });
            _O365ShellPromises__WEBPACK_IMPORTED_MODULE_2__["O365ShellPromises"].GetPostRenderPromise().then(function () { return _this._triggerShellPhaseUpdates(); });
        }
    }
    Object.defineProperty(O365ShellWrapper.prototype, "Navigation", {
        get: function () {
            if (this.DoesShellExist() && O365Shell.Navigation) {
                return O365Shell.Navigation;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(O365ShellWrapper.prototype, "Header", {
        get: function () {
            if (this.DoesShellExist() && O365Shell.Header) {
                return O365Shell.Header;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(O365ShellWrapper.prototype, "Theme", {
        get: function () {
            if (this.DoesShellExist() && O365Shell.Theme) {
                return O365Shell.Theme;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(O365ShellWrapper.prototype, "Search", {
        get: function () {
            if (this.DoesShellExist() && O365Shell.Search) {
                return O365Shell.Search;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(O365ShellWrapper.prototype, "Extensibility", {
        get: function () {
            if (this.DoesShellExist() && O365Shell.Extensibility) {
                return O365Shell.Extensibility;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(O365ShellWrapper.prototype, "NFD", {
        get: function () {
            if (this.DoesShellExist() && O365Shell.NFD) {
                return O365Shell.NFD;
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Sets the data to be consumed by the O365Shell
     */
    O365ShellWrapper.prototype.SetData = function (shellData) {
        O365Shell.SetData(shellData);
    };
    /**
     * Instructs the 0365 shell to render
     */
    O365ShellWrapper.prototype.Render = function (renderSettings, postRendercallback) {
        O365Shell.Render(renderSettings, postRendercallback);
    };
    /**
     * Instructs the 0365 shell to render async
     */
    O365ShellWrapper.prototype.RenderAsync = function (renderSettings, renderCallback, postRenderCallback) {
        O365Shell.RenderAsync(renderSettings, renderCallback, postRenderCallback);
    };
    /**
     * Load shell plus (extra features like notifications). Only functions properly on SPO.
     */
    O365ShellWrapper.prototype.LoadShellPlus = function () {
        O365Shell.LoadShellPlus();
    };
    /**
     * Not provided by O365Shell. Tells whether the O365Shell global exists.
     */
    O365ShellWrapper.prototype.DoesShellExist = function () {
        return typeof O365Shell !== 'undefined';
    };
    /**
     * This is not provided by O365Shell. It just checks if a given member/function name
     * is defined on the global shell object, as an alternative to if (O365Shell.Whatever) \{ ... \}.
     */
    O365ShellWrapper.prototype.HasMember = function (memberName) {
        return this.DoesShellExist() && Boolean(O365Shell[memberName]);
    };
    /**
     * This is not provided by O365Shell. It invokes a given callback when a member/function
     * name is defined. This is useful when a component is trying to access a O365Shell
     * member but is not in charge of loading it.
     *
     * @param member - name to be checked for avaliability
     * @param callback - function to be called if the member is avaliable
     */
    O365ShellWrapper.prototype.OnHasMember = function (memberName, callback) {
        var _this = this;
        if (this.HasMember(memberName)) {
            callback();
        }
        else {
            /** Wait for the next render completition and call this method recursively to check if the member
             * is now available.
             */
            // tslint:disable-next-line: no-floating-promises
            this._postRenderSignal.then(function () { return _this.OnHasMember(memberName, callback); });
        }
    };
    /**
     * Gets the resource loader
     */
    O365ShellWrapper.prototype.GetResourceLoader = function () {
        return O365Shell.GetResourceLoader();
    };
    O365ShellWrapper.prototype.GetRenderSettingsFromContext = function () {
        return O365ShellContext && O365ShellContext.RenderSettings;
    };
    O365ShellWrapper.prototype._triggerShellPhaseUpdates = function () {
        var _this = this;
        var currentResolve = this._postRenderSignalResolve;
        this._postRenderSignal = new Promise(function (resolve) { return (_this._postRenderSignalResolve = resolve); });
        currentResolve();
    };
    return O365ShellWrapper;
}());
/* harmony default export */ __webpack_exports__["default"] = (O365ShellWrapper);


/***/ }),

/***/ "0Oc1":
/*!***********************************************!*\
  !*** ../sp-search-common/lib/getCleanPuid.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getCleanPuid; });
function getCleanPuid(puid) {
    return puid.lastIndexOf('|') > -1 && puid.indexOf('@') > -1
        ? puid.substring(puid.lastIndexOf('|') + 1, puid.indexOf('@'))
        : puid;
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

/***/ "18dJ":
/*!************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-utilities@29.7.9_5d977624104b06c7bcaa2de974ff51f1/node_modules/@ms/odsp-utilities/lib/models/store/BaseDataStore.js ***!
  \************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ms/odsp-core-bundle */ "K9kD");
/* harmony import */ var _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__["DataStore"]; });

// Loading @ms/odsp-utilities/./lib/models/store/BaseDataStore.js



/***/ }),

/***/ "21Zl":
/*!*************************************************!*\
  !*** ./lib/search/manageSubmitSearchHandler.js ***!
  \*************************************************/
/*! exports provided: manageSubmitSearchHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "manageSubmitSearchHandler", function() { return manageSubmitSearchHandler; });
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/sp-diagnostics */ "ut3N");
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ms_sp_search_common_lib_getScenario__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ms/sp-search-common/lib/getScenario */ "cKBR");



function manageSubmitSearchHandler(search, submitSearchHandler, applicationId, asyncFeatures) {
    var handler = asyncFeatures
        ? createAsyncSubmitSearchHandler(submitSearchHandler, asyncFeatures)
        : submitSearchHandler;
    return initSubmitSearchHandlerOnce(search, applicationId)(handler);
}
function createAsyncSubmitSearchHandler(submitSearchHandler, asyncFeatures) {
    asyncFeatures.then(function (features) {
        // Replace the submitSearchHandler with a SERP-aware handler, using
        // the current one as the fallback.
        submitSearchHandler = features.createSubmitSearchHandler(submitSearchHandler);
    });
    return function (searchText, context) { return submitSearchHandler(searchText, context); };
}
var updater;
var currentApplicationId;
/**
 * Register a submit search handler with the shell and implement it by
 * delegating to an underlying handler that may change over time. The returned
 * function is used to update the handler. Until the handler is set, submitted
 * searches will be buffered, and the most recently submitted search will be
 * replayed once a handler is set. If the handler is unset, buffering will
 * resume until a new one is set. This scheme is used to avoid timing issues as
 * we navigate from one app to another, where we could otherwise end up in the
 * shell's default search handler that takes us to office.com.
 */
function initSubmitSearchHandlerOnce(search, applicationId) {
    if (shouldUpdateApplicationId()) {
        currentApplicationId = applicationId;
    }
    if (!updater) {
        var currentHandler_1;
        // We only buffer the single most recently submitted search, as it doesn't
        // make much sense to try replaying multiple submitted searches.
        var bufferedSearch_1;
        updater = function (handler) {
            currentHandler_1 = handler;
            if (bufferedSearch_1) {
                var searchText = bufferedSearch_1.searchText, context = bufferedSearch_1.context;
                bufferedSearch_1 = undefined;
                handler(searchText, context);
            }
            return function () {
                currentHandler_1 = undefined;
            };
        };
        var submitSearch = function (searchText, context) {
            if (searchText.length === 0 && !context) {
                return;
            }
            if (!_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPKillSwitch"].isActivated('7ba71c16-a767-4646-992c-e087c90f8482' /*'07/23/2020', Add scoping control usage telemetry*/)) {
                _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__["_EngagementLogger"].log({
                    name: 'SuiteNavSearchBox.Click',
                    isIntentional: true,
                    extraData: {
                        scenario: Object(_ms_sp_search_common_lib_getScenario__WEBPACK_IMPORTED_MODULE_2__["getScenario"])(shouldUpdateApplicationId() ? currentApplicationId : applicationId),
                        trigger: 'SubmitSearch'
                    }
                });
            }
            if (currentHandler_1) {
                currentHandler_1(searchText, context);
            }
            else {
                bufferedSearch_1 = { searchText: searchText, context: context };
            }
        };
        search().OnSubmitSearch(submitSearch);
    }
    return updater;
}
function shouldUpdateApplicationId() {
    return !_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPKillSwitch"].isActivated('5b830830-d5ff-4c92-a72f-e657332e3aa5' /* '10/05/2020', 'Update applicationId on in-place nav' */);
}


/***/ }),

/***/ "2q6Q":
/*!***********************************!*\
  !*** external "@ms/sp-telemetry" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__2q6Q__;

/***/ }),

/***/ "3/VP":
/*!*************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@1js/search-prefetch@0.2.3_react-native@0.63.4+react@16.9.0/node_modules/@1js/search-prefetch/lib/generateGuid.js ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function () {
    var s4 = function () {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    };
    return (s4() +
        s4() +
        "-" +
        s4() +
        "-" +
        s4() +
        "-" +
        s4() +
        "-" +
        s4() +
        s4() +
        s4());
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZXJhdGVHdWlkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2dlbmVyYXRlR3VpZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZTtJQUNiLElBQU0sRUFBRSxHQUFHO1FBQ1QsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLE9BQU8sQ0FBQzthQUM3QyxRQUFRLENBQUMsRUFBRSxDQUFDO2FBQ1osU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2xCLENBQUMsQ0FBQztJQUNGLE9BQU8sQ0FDTCxFQUFFLEVBQUU7UUFDSixFQUFFLEVBQUU7UUFDSixHQUFHO1FBQ0gsRUFBRSxFQUFFO1FBQ0osR0FBRztRQUNILEVBQUUsRUFBRTtRQUNKLEdBQUc7UUFDSCxFQUFFLEVBQUU7UUFDSixHQUFHO1FBQ0gsRUFBRSxFQUFFO1FBQ0osRUFBRSxFQUFFO1FBQ0osRUFBRSxFQUFFLENBQ0wsQ0FBQztBQUNKLENBQUMsRUFBQyJ9

/***/ }),

/***/ "33Mj":
/*!************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@1js/search-scope@0.0.35_react@16.9.0/node_modules/@1js/search-scope/lib/updateScopeOnRouteChange.js ***!
  \************************************************************************************************************************************************************/
/*! exports provided: updateScopeOnRouteChange */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateScopeOnRouteChange", function() { return updateScopeOnRouteChange; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_isSiteScopeVertical__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/isSiteScopeVertical */ "PFhq");


function updateScopeOnRouteChange(instrumenter, listenToRoute, siteScopeIdOverride) {
    return listenToRoute(function (props) {
        var scope = props.scopes && props.scopes[0];
        var serpVerticalName = props.pathname;
        var hostAppInfo = instrumenter.props.hostAppInfo;
        // Don't do scoping if:
        // 1. We're on MSW
        // 2. Scope=folder-group. Scoping to a folder is deprecated. Should never happen
        // 3. Scope data hasn't been provided yet.
        if (hostAppInfo.id === "MSW" ||
            (scope && (scope.type === "folder-group" || !scope.data))) {
            return;
        }
        function updateScopeDataOnInstrumenter(scopeId, scopeData) {
            instrumenter.setProps({
                hostAppInfo: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, hostAppInfo), { scopeId: scopeId }),
                scenarioContext: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, instrumenter.props.scenarioContext), scopeData),
            });
        }
        if (!scope) {
            // We're on a search vertical without scope set. Scope could be set next, though.
            var scopeId = undefined;
            if (isSharePointSite(hostAppInfo.id) &&
                serpVerticalName &&
                !Object(_utils_isSiteScopeVertical__WEBPACK_IMPORTED_MODULE_1__["default"])(serpVerticalName)) {
                // Cover upscope scenario in team sites.
                // If loading a non-scope vertical in a team site we need to actively
                // change the scope to "global".
                scopeId = "global";
            }
            // Make sure we have a new scope before updating
            if (scopeId !== hostAppInfo.scopeId) {
                updateScopeDataOnInstrumenter(scopeId, {
                    site: undefined,
                    siteAssociation: undefined,
                    personScope: undefined,
                });
            }
        }
        else if (scope.type === "site") {
            // For site scopes apply scope override if provided.
            var siteScopeId = siteScopeIdOverride || scope.type;
            if (isSharePointSite(hostAppInfo.id) &&
                siteScopeId === "site" &&
                hostAppInfo.scopeId === undefined) {
                // If we're on a team site an undefined scopeId is an implicit "site" scope,
                // so no need to set scope in this case.
                return;
            }
            if (siteScopeId !== hostAppInfo.scopeId) {
                updateScopeDataOnInstrumenter(siteScopeId, scope.data);
            }
        }
        else if (scope.type === "person") {
            updateScopeDataOnInstrumenter(scope.type, {
                personScope: scope.data,
            });
        }
    });
    function isSharePointSite(hostAppId) {
        return (hostAppId === "CommSiteSearch" ||
            hostAppId === "HubSiteSearch" ||
            hostAppId === "TeamSiteSearch");
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlU2NvcGVPblJvdXRlQ2hhbmdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3VwZGF0ZVNjb3BlT25Sb3V0ZUNoYW5nZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBTUEsT0FBTyxtQkFBbUIsTUFBTSw2QkFBNkIsQ0FBQztBQUM5RCxNQUFNLFVBQVUsd0JBQXdCLENBQ3RDLFlBQWdDLEVBQ2hDLGFBQTRFLEVBQzVFLG1CQUE4QjtJQUU5QixPQUFPLGFBQWEsQ0FBQyxVQUFDLEtBQW1CO1FBQ3ZDLElBQU0sS0FBSyxHQUF1QixLQUFLLENBQUMsTUFBTSxJQUFJLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbEUsSUFBTSxnQkFBZ0IsR0FBVyxLQUFLLENBQUMsUUFBUSxDQUFDO1FBQ2hELElBQU0sV0FBVyxHQUNmLFlBQVksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDO1FBRWpDLHVCQUF1QjtRQUN2QixrQkFBa0I7UUFDbEIsZ0ZBQWdGO1FBQ2hGLDBDQUEwQztRQUMxQyxJQUNFLFdBQVcsQ0FBQyxFQUFFLEtBQUssS0FBSztZQUN4QixDQUFDLEtBQUssSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEtBQUssY0FBYyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQ3pEO1lBQ0EsT0FBTztTQUNSO1FBRUQsU0FBUyw2QkFBNkIsQ0FDcEMsT0FBMkIsRUFDM0IsU0FBYztZQUVkLFlBQVksQ0FBQyxRQUFRLENBQUM7Z0JBQ3BCLFdBQVcsd0JBQ04sV0FBVyxLQUNkLE9BQU8sU0FBQSxHQUNSO2dCQUNELGVBQWUsd0JBQ1YsWUFBWSxDQUFDLEtBQUssQ0FBQyxlQUFlLEdBQ2xDLFNBQVMsQ0FDYjthQUNGLENBQUMsQ0FBQztRQUNMLENBQUM7UUFFRCxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ1YsaUZBQWlGO1lBQ2pGLElBQUksT0FBTyxHQUF5QixTQUFTLENBQUM7WUFDOUMsSUFDRSxnQkFBZ0IsQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDO2dCQUNoQyxnQkFBZ0I7Z0JBQ2hCLENBQUMsbUJBQW1CLENBQUMsZ0JBQWdCLENBQUMsRUFDdEM7Z0JBQ0Esd0NBQXdDO2dCQUN4QyxxRUFBcUU7Z0JBQ3JFLGdDQUFnQztnQkFDaEMsT0FBTyxHQUFHLFFBQVEsQ0FBQzthQUNwQjtZQUVELGdEQUFnRDtZQUNoRCxJQUFJLE9BQU8sS0FBSyxXQUFXLENBQUMsT0FBTyxFQUFFO2dCQUNuQyw2QkFBNkIsQ0FBQyxPQUFPLEVBQUU7b0JBQ3JDLElBQUksRUFBRSxTQUFTO29CQUNmLGVBQWUsRUFBRSxTQUFTO29CQUMxQixXQUFXLEVBQUUsU0FBUztpQkFDdkIsQ0FBQyxDQUFDO2FBQ0o7U0FDRjthQUFNLElBQUksS0FBSyxDQUFDLElBQUksS0FBSyxNQUFNLEVBQUU7WUFDaEMsb0RBQW9EO1lBQ3BELElBQU0sV0FBVyxHQUNmLG1CQUFtQixJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUM7WUFDcEMsSUFDRSxnQkFBZ0IsQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDO2dCQUNoQyxXQUFXLEtBQUssTUFBTTtnQkFDdEIsV0FBVyxDQUFDLE9BQU8sS0FBSyxTQUFTLEVBQ2pDO2dCQUNBLDRFQUE0RTtnQkFDNUUsd0NBQXdDO2dCQUN4QyxPQUFPO2FBQ1I7WUFDRCxJQUFJLFdBQVcsS0FBSyxXQUFXLENBQUMsT0FBTyxFQUFFO2dCQUN2Qyw2QkFBNkIsQ0FBQyxXQUFXLEVBQUUsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ3hEO1NBQ0Y7YUFBTSxJQUFJLEtBQUssQ0FBQyxJQUFJLEtBQUssUUFBUSxFQUFFO1lBQ2xDLDZCQUE2QixDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUU7Z0JBQ3hDLFdBQVcsRUFBRSxLQUFLLENBQUMsSUFBSTthQUN4QixDQUFDLENBQUM7U0FDSjtJQUNILENBQUMsQ0FBQyxDQUFDO0lBRUgsU0FBUyxnQkFBZ0IsQ0FBQyxTQUFpQjtRQUN6QyxPQUFPLENBQ0wsU0FBUyxLQUFLLGdCQUFnQjtZQUM5QixTQUFTLEtBQUssZUFBZTtZQUM3QixTQUFTLEtBQUssZ0JBQWdCLENBQy9CLENBQUM7SUFDSixDQUFDO0FBQ0gsQ0FBQyJ9

/***/ }),

/***/ "5B2h":
/*!*************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@1js/search-prefetch@0.2.3_react-native@0.63.4+react@16.9.0/node_modules/@1js/search-prefetch/lib/createAsyncTokenProvider.js ***!
  \*************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createAsyncTokenProvider; });
function createAsyncTokenProvider(theAsyncTokenProvider) {
    var theProvider = null;
    return function asyncTokenProvider(spec) {
        return theProvider
            ? theProvider(spec)
            : theAsyncTokenProvider.then(function (provider) { return ((theProvider = provider), provider(spec)); });
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlQXN5bmNUb2tlblByb3ZpZGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2NyZWF0ZUFzeW5jVG9rZW5Qcm92aWRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQSxNQUFNLENBQUMsT0FBTyxVQUFVLHdCQUF3QixDQUM5QyxxQkFBNkM7SUFFN0MsSUFBSSxXQUFXLEdBQXlCLElBQUksQ0FBQztJQUM3QyxPQUFPLFNBQVMsa0JBQWtCLENBQ2hDLElBQXdCO1FBRXhCLE9BQU8sV0FBVztZQUNoQixDQUFDLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQztZQUNuQixDQUFDLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUN4QixVQUFDLFFBQVEsSUFBSyxPQUFBLENBQUMsQ0FBQyxXQUFXLEdBQUcsUUFBUSxDQUFDLEVBQUUsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQTFDLENBQTBDLENBQ3pELENBQUM7SUFDUixDQUFDLENBQUM7QUFDSixDQUFDIn0=

/***/ }),

/***/ "5Oht":
/*!****************************************************!*\
  !*** ./lib/dataAccess/OnPremSuiteNavDataSource.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SuiteNavManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../SuiteNavManager */ "FMHC");
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/sp-diagnostics */ "ut3N");
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _microsoft_sp_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @microsoft/sp-http */ "vlQI");
/* harmony import */ var _microsoft_sp_http__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_http__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_3__);




var OnPremSuiteNavDataSource = /** @class */ (function () {
    /**
     * Initializes a new instance of the SuiteNavManagerConfiguration
     * @TODO Task 161973 Add PageContext and set the
     * webPermissionMask/suiteNavData.UserDisplayName/webServerRelativeUrl/currentUICultureName
     */
    function OnPremSuiteNavDataSource(httpClient, currentUICultureName, webServerRelativeUrl) {
        this.suiteNavService = 1 /* OnPrem */;
        this._currentUICultureName = currentUICultureName;
        this._spHttpClient = httpClient;
        this._siteRelUrl = webServerRelativeUrl === '/' ? '' : webServerRelativeUrl;
    }
    // Downloads the OnPrem version of the SuiteNavData
    OnPremSuiteNavDataSource.prototype.loadData = function () {
        var _this = this;
        var url = this._siteRelUrl +
            '/_api/Microsoft.SharePoint.Portal.SuiteNavData.GetSuiteNavData?v=2&Locale=' +
            this._currentUICultureName;
        var qosMonitor = new _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__["_QosMonitor"]('OnPremSuiteNavDataSource');
        return this._spHttpClient
            .get(url, _microsoft_sp_http__WEBPACK_IMPORTED_MODULE_2__["SPHttpClient"].configurations.v1)
            .then(function (response) {
            if (response.status !== 200) {
                _this._logAndThrowSuiteNavLoadingError(qosMonitor, response);
            }
            return response.json().then(function (jsonString) {
                if (jsonString.value === '') {
                    _this._logAndThrowSuiteNavLoadingError(qosMonitor, response);
                }
                else {
                    qosMonitor.writeSuccess();
                    var suiteNavResponse = JSON.parse(jsonString.value);
                    // If the height of the suiteNav is not provided, assume that it is 50px
                    if (suiteNavResponse.NavBarData && !suiteNavResponse.NavBarData.Dimensions) {
                        suiteNavResponse.NavBarData.Dimensions = {
                            Top: _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_3__["_SPFlight"].isEnabled(621 /* EnableThinSuiteNav */)
                                ? _SuiteNavManager__WEBPACK_IMPORTED_MODULE_0__["DEFAULT_SUITENAV_THIN_HEIGHT"]
                                : _SuiteNavManager__WEBPACK_IMPORTED_MODULE_0__["DEFAULT_SUITENAV_HEIGHT"]
                        };
                    }
                    return suiteNavResponse; // tslint:disable-line:no-any
                }
            });
        });
    };
    OnPremSuiteNavDataSource.prototype._logAndThrowSuiteNavLoadingError = function (qosMonitor, response) {
        var errorMessage = 'Failed to retrieve Hybrid SuiteNavData';
        var error = new Error(errorMessage);
        qosMonitor.writeUnexpectedFailure('FailedToRetrieveOnPremSuiteNavData', error, {
            responseStatus: response ? response.status : '',
            correlationId: response ? response.correlationId : ''
        });
        _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__["_TraceLogger"].logVerbose(OnPremSuiteNavDataSource._logSource, errorMessage);
        throw error;
    };
    // @TODO Bug 169685 change to readonly
    OnPremSuiteNavDataSource._logSource = _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__["_LogSource"].create('OnPremSuiteNavDataSource');
    return OnPremSuiteNavDataSource;
}());
/* harmony default export */ __webpack_exports__["default"] = (OnPremSuiteNavDataSource);


/***/ }),

/***/ "6JRx":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@1js/search-instrumentation@0.2.7_react-native@0.63.4+react@16.9.0/node_modules/@1js/search-instrumentation/lib/createInstrumenter.js ***!
  \*********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createInstrumenter; });
/* harmony import */ var _1js_search_dispatcher_lib_createDispatcher__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @1js/search-dispatcher/lib/createDispatcher */ "duOp");
/* harmony import */ var _1js_search_prefetch_lib_generateGuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @1js/search-prefetch/lib/generateGuid */ "3/VP");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};


var marks = [
    "markAppBoot",
    "markHeaderBoot",
    "markSbInteractive",
    "markSbReady",
    "markZeroQueryReady",
    "markSearchLayoutMount",
    "markSearchLayoutRenderStart",
];
var markDependencies = {
    markAppBoot: [],
    markHeaderBoot: ["markAppBoot"],
    markSbInteractive: ["markHeaderBoot"],
    markSbReady: ["markSbInteractive"],
    markZeroQueryReady: ["markSbReady"],
    SbQuerySubmitted: ["markSbReady"],
    SerpRouteChange: [],
    SerpStartQuery: ["SbQuerySubmitted"],
    SerpFetchStart: ["SbQuerySubmitted", "SerpStartQuery"],
    SerpAnswerFetchDone: ["SerpFetchStart"],
    SerpFetchDone: ["SerpFetchStart"],
    SerpAnswersRenderDone: [
        "markAppBoot",
        "SbQuerySubmitted",
        "SerpRouteChange",
        "SerpFetchStart",
        "SerpAnswerFetchDone",
    ],
    SerpDataReady: ["SerpFetchStart", "SerpFetchDone"],
    SerpRenderDone: [
        "markAppBoot",
        "SbQuerySubmitted",
        "markSearchLayoutMount",
        "markSearchLayoutRenderStart",
        "SerpPrefetchStart",
        "SerpPrefetchDone",
        "SerpConfigStart",
        "SerpConfigDone",
        "SerpRouteChange",
        "SerpStartQuery",
        "SerpFetchStart",
        "SerpDataReady",
        "SerpFetchDone",
        "SerpFullPageLoad",
        "SerpInPlaceNavigation",
        "RouterHistoryChange",
    ],
    ProcessVerticalsConfigStart: [],
    FetchVerticalsConfigStart: [],
    FetchVerticalsConfigDone: [],
    VerticalsRegisterDone: [],
    VerticalsRenderDone: [
        "markAppBoot",
        "SbQuerySubmitted",
        "SerpRouteChange",
        "RouterHistoryChange",
        "SerpPrefetchStart",
        "SerpPrefetchDone",
        "SerpConfigStart",
        "SerpConfigDone",
        "ProcessVerticalsConfigStart",
        "FetchVerticalsConfigStart",
        "FetchVerticalsConfigDone",
        "VerticalsRegisterDone",
    ],
    markSearchLayoutMount: ["SbQuerySubmitted"],
    markSearchLayoutRenderStart: ["SbQuerySubmitted", "markSearchLayoutMount"],
    SerpPrefetchStart: [],
    SerpPrefetchDone: ["SerpPrefetchStart"],
    SerpConfigStart: [],
    SerpConfigDone: ["SerpConfigStart"],
    SerpFullPageLoad: [],
    SerpInPlaceNavigation: [],
    RouterHistoryChange: [],
    SetRefinersFromDeepLinkQueryStart: [],
    SetRefinersFromDeepLinkQueryDone: [],
    CreateCustomAggregationsStart: [],
    CreateCustomAggregationsDone: [],
    UpdateAvailableRefinersStart: [],
    UpdateAvailableRefinersDone: [],
    UpdateRefinersStart: [],
    ClearRefinersStart: [],
    SerpOldRefinerButtonClick: [],
    SerpRefinersCheck: ["UpdateAvailableRefinersStart"],
    SerpRefinersRenderDone: [
        "SerpConfigStart",
        "SerpConfigDone",
        "SerpFetchStart",
        "SerpRouteChange",
        "SerpDataReady",
        "SerpFetchDone",
        "UpdateRefinersStart",
        "ClearRefinersStart",
        "SetRefinersFromDeepLinkQueryStart",
        "SetRefinersFromDeepLinkQueryDone",
        "CreateCustomAggregationsStart",
        "CreateCustomAggregationsDone",
        "UpdateAvailableRefinersStart",
        "UpdateAvailableRefinersDone",
        "SerpOldRefinerButtonClick",
    ],
    ContactDataFetchStart: [],
    ContactDataFetchEnd: [],
    OrganizationChartDataFetchStart: [],
    OrganizationChartDataFetchEnd: [],
};
var getNewConversationManager = function () {
    var activeConversation;
    var lastSubmittedConversation;
    var getNewConversation = function () {
        var logicalSearchIds = {};
        var earlySerpLogicalSearchIdToBeReused = undefined;
        var submitted = false;
        var createLogicalSearchIdInternal = function (context) {
            var logicalSearchId;
            if (context === "serp" && earlySerpLogicalSearchIdToBeReused) {
                logicalSearchId = earlySerpLogicalSearchIdToBeReused;
                earlySerpLogicalSearchIdToBeReused = undefined;
            }
            else {
                logicalSearchId = Object(_1js_search_prefetch_lib_generateGuid__WEBPACK_IMPORTED_MODULE_1__["default"])();
            }
            logicalSearchIds[context] = logicalSearchId;
            if (context === "early-serp") {
                earlySerpLogicalSearchIdToBeReused = logicalSearchId;
                logicalSearchIds["serp"] = logicalSearchId;
            }
            return logicalSearchId;
        };
        return {
            conversationId: Object(_1js_search_prefetch_lib_generateGuid__WEBPACK_IMPORTED_MODULE_1__["default"])(),
            creationTime: Date.now(),
            getSubmittedState: function () {
                return submitted;
            },
            submit: function () {
                submitted = true;
            },
            createLogicalSearchId: createLogicalSearchIdInternal,
            getLogicalSearchId: function (context) {
                return (logicalSearchIds[context] || createLogicalSearchIdInternal(context));
            },
        };
    };
    var startConversationInternal = function () {
        // Store last conversation if it has been submitted
        if (activeConversation && activeConversation.getSubmittedState()) {
            lastSubmittedConversation = activeConversation;
        }
        var conversation = getNewConversation();
        activeConversation = conversation;
        return conversation;
    };
    return {
        startConversation: startConversationInternal,
        getActiveConversation: function () {
            if (!activeConversation || activeConversation.getSubmittedState()) {
                return startConversationInternal();
            }
            return activeConversation;
        },
        getLastSubmittedConversation: function () {
            // Return current conversation if it has been submitted
            if (activeConversation && activeConversation.getSubmittedState()) {
                return activeConversation;
            }
            // In some cases we are have not yet submitted any conversations,
            // for instance on a direct search url navigation. In these cases we create
            // and return a new conversation in the submitted state.
            if (!lastSubmittedConversation) {
                var conversation = getNewConversation();
                conversation.submit();
                lastSubmittedConversation = conversation;
            }
            return lastSubmittedConversation;
        },
    };
};
function createInstrumenter(initialProps) {
    var currentProps = initialProps;
    var doneMarks = {};
    var performanceMarks = marks.reduce(function (partialPerformanceMarks, mark, i) {
        partialPerformanceMarks[mark] = function () {
            if (!doneMarks[mark]) {
                doneMarks[mark] = true;
                currentProps.perf.mark(mark);
            }
            if (i) {
                try {
                    currentProps.perf.measure(marks[i - 1] + "-" + mark, marks[i - 1], mark);
                }
                catch (_a) {
                    /* not supported */
                }
            }
        };
        return partialPerformanceMarks;
    }, {});
    // Variables to keep track of startTime of tracked events
    var startTimeTracker = {};
    return __assign(__assign(__assign({}, Object(_1js_search_dispatcher_lib_createDispatcher__WEBPACK_IMPORTED_MODULE_0__["default"])()), performanceMarks), { conversationManager: getNewConversationManager(), props: currentProps, setProps: function (newProps) {
            this.props = currentProps = __assign(__assign({}, this.props), newProps);
            this.dispatch(newProps);
            return currentProps;
        },
        mark: function (eventName) {
            var measureList = [];
            currentProps.perf.mark(eventName);
            var eventDependencies = markDependencies[eventName] || [];
            for (var _i = 0, eventDependencies_1 = eventDependencies; _i < eventDependencies_1.length; _i++) {
                var dependency = eventDependencies_1[_i];
                try {
                    var measureName = dependency + "-" + eventName;
                    currentProps.perf.measure(measureName, dependency, eventName);
                    var measure = currentProps.perf.getEntriesByName(measureName).pop();
                    if (measure) {
                        // If the current event startTime is later than the previously tracked
                        measure.startTime > (startTimeTracker[eventName] || 0) &&
                            measureList.push(measure);
                    }
                }
                catch (_a) {
                    /* Guard against measure requests where the prereq has not been fulfilled */
                }
            }
            // Update the tracker startTime for next events
            if (measureList.length > 0) {
                // Extracting the metric with the max of startTime
                var lastEventStartTime = Math.max.apply(Math, measureList.map(function (perfMeasure) { return perfMeasure.startTime; }));
                startTimeTracker[eventName] = lastEventStartTime;
            }
            return measureList;
        } });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlSW5zdHJ1bWVudGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2NyZWF0ZUluc3RydW1lbnRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLE9BQU8sZ0JBQWdCLE1BQU0sNkNBQTZDLENBQUM7QUFDM0UsT0FBTyxZQUFZLE1BQU0sdUNBQXVDLENBQUM7QUFXakUsSUFBTSxLQUFLLEdBQTBDO0lBQ25ELGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixvQkFBb0I7SUFDcEIsdUJBQXVCO0lBQ3ZCLDZCQUE2QjtDQUM5QixDQUFDO0FBRUYsSUFBTSxnQkFBZ0IsR0FFbEI7SUFDRixXQUFXLEVBQUUsRUFBRTtJQUNmLGNBQWMsRUFBRSxDQUFDLGFBQWEsQ0FBQztJQUMvQixpQkFBaUIsRUFBRSxDQUFDLGdCQUFnQixDQUFDO0lBQ3JDLFdBQVcsRUFBRSxDQUFDLG1CQUFtQixDQUFDO0lBQ2xDLGtCQUFrQixFQUFFLENBQUMsYUFBYSxDQUFDO0lBQ25DLGdCQUFnQixFQUFFLENBQUMsYUFBYSxDQUFDO0lBQ2pDLGVBQWUsRUFBRSxFQUFFO0lBQ25CLGNBQWMsRUFBRSxDQUFDLGtCQUFrQixDQUFDO0lBQ3BDLGNBQWMsRUFBRSxDQUFDLGtCQUFrQixFQUFFLGdCQUFnQixDQUFDO0lBQ3RELG1CQUFtQixFQUFFLENBQUMsZ0JBQWdCLENBQUM7SUFDdkMsYUFBYSxFQUFFLENBQUMsZ0JBQWdCLENBQUM7SUFDakMscUJBQXFCLEVBQUU7UUFDckIsYUFBYTtRQUNiLGtCQUFrQjtRQUNsQixpQkFBaUI7UUFDakIsZ0JBQWdCO1FBQ2hCLHFCQUFxQjtLQUN0QjtJQUNELGFBQWEsRUFBRSxDQUFDLGdCQUFnQixFQUFFLGVBQWUsQ0FBQztJQUNsRCxjQUFjLEVBQUU7UUFDZCxhQUFhO1FBQ2Isa0JBQWtCO1FBQ2xCLHVCQUF1QjtRQUN2Qiw2QkFBNkI7UUFDN0IsbUJBQW1CO1FBQ25CLGtCQUFrQjtRQUNsQixpQkFBaUI7UUFDakIsZ0JBQWdCO1FBQ2hCLGlCQUFpQjtRQUNqQixnQkFBZ0I7UUFDaEIsZ0JBQWdCO1FBQ2hCLGVBQWU7UUFDZixlQUFlO1FBQ2Ysa0JBQWtCO1FBQ2xCLHVCQUF1QjtRQUN2QixxQkFBcUI7S0FDdEI7SUFDRCwyQkFBMkIsRUFBRSxFQUFFO0lBQy9CLHlCQUF5QixFQUFFLEVBQUU7SUFDN0Isd0JBQXdCLEVBQUUsRUFBRTtJQUM1QixxQkFBcUIsRUFBRSxFQUFFO0lBQ3pCLG1CQUFtQixFQUFFO1FBQ25CLGFBQWE7UUFDYixrQkFBa0I7UUFDbEIsaUJBQWlCO1FBQ2pCLHFCQUFxQjtRQUNyQixtQkFBbUI7UUFDbkIsa0JBQWtCO1FBQ2xCLGlCQUFpQjtRQUNqQixnQkFBZ0I7UUFDaEIsNkJBQTZCO1FBQzdCLDJCQUEyQjtRQUMzQiwwQkFBMEI7UUFDMUIsdUJBQXVCO0tBQ3hCO0lBQ0QscUJBQXFCLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQztJQUMzQywyQkFBMkIsRUFBRSxDQUFDLGtCQUFrQixFQUFFLHVCQUF1QixDQUFDO0lBQzFFLGlCQUFpQixFQUFFLEVBQUU7SUFDckIsZ0JBQWdCLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQztJQUN2QyxlQUFlLEVBQUUsRUFBRTtJQUNuQixjQUFjLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQztJQUNuQyxnQkFBZ0IsRUFBRSxFQUFFO0lBQ3BCLHFCQUFxQixFQUFFLEVBQUU7SUFDekIsbUJBQW1CLEVBQUUsRUFBRTtJQUN2QixpQ0FBaUMsRUFBRSxFQUFFO0lBQ3JDLGdDQUFnQyxFQUFFLEVBQUU7SUFDcEMsNkJBQTZCLEVBQUUsRUFBRTtJQUNqQyw0QkFBNEIsRUFBRSxFQUFFO0lBQ2hDLDRCQUE0QixFQUFFLEVBQUU7SUFDaEMsMkJBQTJCLEVBQUUsRUFBRTtJQUMvQixtQkFBbUIsRUFBRSxFQUFFO0lBQ3ZCLGtCQUFrQixFQUFFLEVBQUU7SUFDdEIseUJBQXlCLEVBQUUsRUFBRTtJQUM3QixpQkFBaUIsRUFBRSxDQUFDLDhCQUE4QixDQUFDO0lBQ25ELHNCQUFzQixFQUFFO1FBQ3RCLGlCQUFpQjtRQUNqQixnQkFBZ0I7UUFDaEIsZ0JBQWdCO1FBQ2hCLGlCQUFpQjtRQUNqQixlQUFlO1FBQ2YsZUFBZTtRQUNmLHFCQUFxQjtRQUNyQixvQkFBb0I7UUFDcEIsbUNBQW1DO1FBQ25DLGtDQUFrQztRQUNsQywrQkFBK0I7UUFDL0IsOEJBQThCO1FBQzlCLDhCQUE4QjtRQUM5Qiw2QkFBNkI7UUFDN0IsMkJBQTJCO0tBQzVCO0lBQ0QscUJBQXFCLEVBQUUsRUFBRTtJQUN6QixtQkFBbUIsRUFBRSxFQUFFO0lBQ3ZCLCtCQUErQixFQUFFLEVBQUU7SUFDbkMsNkJBQTZCLEVBQUUsRUFBRTtDQUNsQyxDQUFDO0FBWUYsSUFBTSx5QkFBeUIsR0FBK0I7SUFDNUQsSUFBSSxrQkFBaUMsQ0FBQztJQUN0QyxJQUFJLHlCQUF3QyxDQUFDO0lBRTdDLElBQU0sa0JBQWtCLEdBQXdCO1FBQzlDLElBQU0sZ0JBQWdCLEdBQTZCLEVBQUUsQ0FBQztRQUN0RCxJQUFJLGtDQUFrQyxHQUF1QixTQUFTLENBQUM7UUFDdkUsSUFBSSxTQUFTLEdBQUcsS0FBSyxDQUFDO1FBRXRCLElBQU0sNkJBQTZCLEdBQUcsVUFBQyxPQUErQjtZQUNwRSxJQUFJLGVBQW1DLENBQUM7WUFFeEMsSUFBSSxPQUFPLEtBQUssTUFBTSxJQUFJLGtDQUFrQyxFQUFFO2dCQUM1RCxlQUFlLEdBQUcsa0NBQWtDLENBQUM7Z0JBQ3JELGtDQUFrQyxHQUFHLFNBQVMsQ0FBQzthQUNoRDtpQkFBTTtnQkFDTCxlQUFlLEdBQUcsWUFBWSxFQUFFLENBQUM7YUFDbEM7WUFFRCxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsR0FBRyxlQUFlLENBQUM7WUFDNUMsSUFBSSxPQUFPLEtBQUssWUFBWSxFQUFFO2dCQUM1QixrQ0FBa0MsR0FBRyxlQUFlLENBQUM7Z0JBQ3JELGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxHQUFHLGVBQWUsQ0FBQzthQUM1QztZQUVELE9BQU8sZUFBZSxDQUFDO1FBQ3pCLENBQUMsQ0FBQztRQUVGLE9BQU87WUFDTCxjQUFjLEVBQUUsWUFBWSxFQUFFO1lBQzlCLFlBQVksRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFO1lBQ3hCLGlCQUFpQixFQUFFO2dCQUNqQixPQUFPLFNBQVMsQ0FBQztZQUNuQixDQUFDO1lBQ0QsTUFBTSxFQUFFO2dCQUNOLFNBQVMsR0FBRyxJQUFJLENBQUM7WUFDbkIsQ0FBQztZQUNELHFCQUFxQixFQUFFLDZCQUE2QjtZQUNwRCxrQkFBa0IsRUFBRSxVQUFDLE9BQStCO2dCQUNsRCxPQUFPLENBQ0wsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLElBQUksNkJBQTZCLENBQUMsT0FBTyxDQUFDLENBQ3BFLENBQUM7WUFDSixDQUFDO1NBQ0YsQ0FBQztJQUNKLENBQUMsQ0FBQztJQUVGLElBQU0seUJBQXlCLEdBQUc7UUFDaEMsbURBQW1EO1FBQ25ELElBQUksa0JBQWtCLElBQUksa0JBQWtCLENBQUMsaUJBQWlCLEVBQUUsRUFBRTtZQUNoRSx5QkFBeUIsR0FBRyxrQkFBa0IsQ0FBQztTQUNoRDtRQUVELElBQU0sWUFBWSxHQUFHLGtCQUFrQixFQUFFLENBQUM7UUFDMUMsa0JBQWtCLEdBQUcsWUFBWSxDQUFDO1FBQ2xDLE9BQU8sWUFBWSxDQUFDO0lBQ3RCLENBQUMsQ0FBQztJQUVGLE9BQU87UUFDTCxpQkFBaUIsRUFBRSx5QkFBeUI7UUFDNUMscUJBQXFCLEVBQUU7WUFDckIsSUFBSSxDQUFDLGtCQUFrQixJQUFJLGtCQUFrQixDQUFDLGlCQUFpQixFQUFFLEVBQUU7Z0JBQ2pFLE9BQU8seUJBQXlCLEVBQUUsQ0FBQzthQUNwQztZQUNELE9BQU8sa0JBQWtCLENBQUM7UUFDNUIsQ0FBQztRQUNELDRCQUE0QixFQUFFO1lBQzVCLHVEQUF1RDtZQUN2RCxJQUFJLGtCQUFrQixJQUFJLGtCQUFrQixDQUFDLGlCQUFpQixFQUFFLEVBQUU7Z0JBQ2hFLE9BQU8sa0JBQWtCLENBQUM7YUFDM0I7WUFFRCxpRUFBaUU7WUFDakUsMkVBQTJFO1lBQzNFLHdEQUF3RDtZQUN4RCxJQUFJLENBQUMseUJBQXlCLEVBQUU7Z0JBQzlCLElBQU0sWUFBWSxHQUFHLGtCQUFrQixFQUFFLENBQUM7Z0JBQzFDLFlBQVksQ0FBQyxNQUFNLEVBQUUsQ0FBQztnQkFDdEIseUJBQXlCLEdBQUcsWUFBWSxDQUFDO2FBQzFDO1lBRUQsT0FBTyx5QkFBeUIsQ0FBQztRQUNuQyxDQUFDO0tBQ0YsQ0FBQztBQUNKLENBQUMsQ0FBQztBQUVGLE1BQU0sQ0FBQyxPQUFPLFVBQVUsa0JBQWtCLENBQ3hDLFlBQXFDO0lBRXJDLElBQUksWUFBWSxHQUE0QixZQUFZLENBQUM7SUFFekQsSUFBTSxTQUFTLEdBQXFELEVBQUUsQ0FBQztJQUV2RSxJQUFNLGdCQUFnQixHQUFxQixLQUFLLENBQUMsTUFBTSxDQUNyRCxVQUFDLHVCQUFrRCxFQUFFLElBQUksRUFBRSxDQUFTO1FBQ2xFLHVCQUF1QixDQUFDLElBQUksQ0FBQyxHQUFHO1lBQzlCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQ3BCLFNBQVMsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUM7Z0JBQ3ZCLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQzlCO1lBRUQsSUFBSSxDQUFDLEVBQUU7Z0JBQ0wsSUFBSTtvQkFDRixZQUFZLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FDcEIsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsU0FBSSxJQUFNLEVBQ3pCLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQ1osSUFBSSxDQUNMLENBQUM7aUJBQ0g7Z0JBQUMsV0FBTTtvQkFDTixtQkFBbUI7aUJBQ3BCO2FBQ0Y7UUFDSCxDQUFDLENBQUM7UUFFRixPQUFPLHVCQUF1QixDQUFDO0lBQ2pDLENBQUMsRUFFRCxFQUFFLENBQ2lCLENBQUM7SUFFdEIseURBQXlEO0lBQ3pELElBQU0sZ0JBQWdCLEdBSWxCLEVBQUUsQ0FBQztJQUVQLHNDQUNLLGdCQUFnQixFQUFnQyxHQUNoRCxnQkFBZ0IsS0FDbkIsbUJBQW1CLEVBQUUseUJBQXlCLEVBQUUsRUFDaEQsS0FBSyxFQUFFLFlBQVksRUFDbkIsUUFBUSxFQUFSLFVBQVMsUUFBc0M7WUFDNUMsSUFBWSxDQUFDLEtBQUssR0FBRyxZQUFZLHlCQUFRLElBQUksQ0FBQyxLQUFLLEdBQUssUUFBUSxDQUFFLENBQUM7WUFDcEUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUN4QixPQUFPLFlBQVksQ0FBQztRQUN0QixDQUFDO1FBQ0QsSUFBSSxFQUFKLFVBQUssU0FBMkI7WUFDOUIsSUFBTSxXQUFXLEdBQXVCLEVBQUUsQ0FBQztZQUMzQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUVsQyxJQUFNLGlCQUFpQixHQUFHLGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUU1RCxLQUF5QixVQUFpQixFQUFqQix1Q0FBaUIsRUFBakIsK0JBQWlCLEVBQWpCLElBQWlCLEVBQUU7Z0JBQXZDLElBQU0sVUFBVSwwQkFBQTtnQkFDbkIsSUFBSTtvQkFDRixJQUFNLFdBQVcsR0FBTSxVQUFVLFNBQUksU0FBVyxDQUFDO29CQUNqRCxZQUFZLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsVUFBVSxFQUFFLFNBQVMsQ0FBQyxDQUFDO29CQUU5RCxJQUFNLE9BQU8sR0FBRyxZQUFZLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFdBQVcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO29CQUN0RSxJQUFJLE9BQU8sRUFBRTt3QkFDWCxzRUFBc0U7d0JBQ3RFLE9BQU8sQ0FBQyxTQUFTLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7NEJBQ3BELFdBQVcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7cUJBQzdCO2lCQUNGO2dCQUFDLFdBQU07b0JBQ04sNEVBQTRFO2lCQUM3RTthQUNGO1lBRUQsK0NBQStDO1lBQy9DLElBQUksV0FBVyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7Z0JBQzFCLGtEQUFrRDtnQkFDbEQsSUFBTSxrQkFBa0IsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FDdkMsSUFBSSxFQUNKLFdBQVcsQ0FBQyxHQUFHLENBQUMsVUFBQyxXQUFXLElBQUssT0FBQSxXQUFXLENBQUMsU0FBUyxFQUFyQixDQUFxQixDQUFDLENBQ3hELENBQUM7Z0JBQ0YsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLEdBQUcsa0JBQWtCLENBQUM7YUFDbEQ7WUFFRCxPQUFPLFdBQVcsQ0FBQztRQUNyQixDQUFDLElBQ0Q7QUFDSixDQUFDIn0=

/***/ }),

/***/ "7fwW":
/*!***********************************************!*\
  !*** ./lib/search/manageSearchBoxSettings.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return manageSearchBoxSettings; });
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _1js_search_prefetch_lib_createAsyncTokenProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @1js/search-prefetch/lib/createAsyncTokenProvider */ "5B2h");
/* harmony import */ var _ms_sp_search_common_lib_getSharePointEnvironment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ms/sp-search-common/lib/getSharePointEnvironment */ "cj/x");
/* harmony import */ var _createSearchInstrumenterOnce__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./createSearchInstrumenterOnce */ "A/Iv");
/* harmony import */ var _createSearchPrefetchStateOnce__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./createSearchPrefetchStateOnce */ "tFCy");





function manageSearchBoxSettings(puid, asyncShell, asyncPageContext) {
    var instrumenter = Object(_createSearchInstrumenterOnce__WEBPACK_IMPORTED_MODULE_3__["default"])();
    var state = Object(_createSearchPrefetchStateOnce__WEBPACK_IMPORTED_MODULE_4__["default"])('@ms/sp-suite-nav', puid || '@ms/sp-suite-navFailedToProvidePuid');
    var asyncFeatures = fetchFeatures(asyncShell, asyncPageContext, instrumenter, state);
    var providerNames = [
        'BingForBusiness',
        'Loki',
        'SharePointSites',
        'Substrate'
    ];
    // The token providers are defer loaded to save bytes. The async token
    // providers below will hand over any token requests to the real token
    // providers when they are available.
    var asyncTokenProviders = providerNames.reduce(function (acc, name) { return ((acc[name] = Object(_1js_search_prefetch_lib_createAsyncTokenProvider__WEBPACK_IMPORTED_MODULE_1__["default"])(asyncFeatures.then(function (_a) {
        var tokenProviders = _a.tokenProviders;
        return tokenProviders[name];
    }))),
        acc); }, {});
    return {
        searchBoxInstrumenter: instrumenter,
        searchBoxCache: state.cache,
        GetTokenRequestDictionary: function () { return asyncTokenProviders; }
    };
}
function fetchFeatures(asyncShell, asyncPageContext, instrumenter, state) {
    asyncPageContext.then(function (_a) {
        var legacyPageContext = _a.legacyPageContext, web = _a.web, site = _a.site;
        var _b, _c;
        var spInfo = _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPKillSwitch"].isActivated('f4e8a95d-d1d5-43e6-bf42-fca8ec3a1bfd'
        /* '10/09/2020', 'spInfo on instrumenter props' */
        )
            ? undefined
            : {
                siteSubscriptionId: legacyPageContext.siteSubscriptionId,
                environment: Object(_ms_sp_search_common_lib_getSharePointEnvironment__WEBPACK_IMPORTED_MODULE_2__["default"])(legacyPageContext.env, legacyPageContext.webAbsoluteUrl),
                farmLabel: legacyPageContext.farmLabel,
                webId: (_b = web) === null || _b === void 0 ? void 0 : _b.id.toString(),
                siteId: (_c = site) === null || _c === void 0 ? void 0 : _c.id.toString()
            };
        return instrumenter.setProps({
            // TODO: Remove spSiteSubscriptionId and spEnvironment once code to read from spInfo has deployed WW.
            spSiteSubscriptionId: legacyPageContext.siteSubscriptionId,
            spEnvironment: Object(_ms_sp_search_common_lib_getSharePointEnvironment__WEBPACK_IMPORTED_MODULE_2__["default"])(legacyPageContext.env, legacyPageContext.webAbsoluteUrl),
            spInfo: spInfo
        });
    });
    return Promise.all([asyncShell, asyncPageContext]).then(function (_a) {
        var shell = _a[0], pageContext = _a[1];
        return Promise.all(/*! import() | sp-suite-nav-search-common */[__webpack_require__.e("vendors~sp-suite-nav-search-common"), __webpack_require__.e("sp-suite-nav-search-common")]).then(__webpack_require__.bind(null, /*! ./createConfiguredCommonSearchFeatures */ "gbBp")).then(function (features) { return features.default(shell, pageContext, instrumenter, state); });
    });
}


/***/ }),

/***/ "7jo1":
/*!***************************************!*\
  !*** external "@ms/sp-search-common" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__7jo1__;

/***/ }),

/***/ "8cFN":
/*!***********************************************!*\
  !*** ./lib/search/manageExitSearchHandler.js ***!
  \***********************************************/
/*! exports provided: manageExitSearchHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "manageExitSearchHandler", function() { return manageExitSearchHandler; });
function manageExitSearchHandler(search, exitSearchHandler) {
    var handler = search().OnExitSearch(exitSearchHandler);
    return function () { return search().RemoveOnExitSearch(handler); };
}


/***/ }),

/***/ "A/Iv":
/*!****************************************************!*\
  !*** ./lib/search/createSearchInstrumenterOnce.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createSearchInstrumenterOnce; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _1js_search_instrumentation_lib_createInstrumenter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @1js/search-instrumentation/lib/createInstrumenter */ "6JRx");
/* harmony import */ var _1js_search_logger_lib_performance__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @1js/search-logger/lib/performance */ "NEjr");
/* harmony import */ var _ms_sp_search_common_lib_serviceEnvironmentUtils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ms/sp-search-common/lib/serviceEnvironmentUtils */ "M8ir");





var instrumenter;
/**
 * Creates the search instrumenter the first time it is called. Returns the
 * created instance on next invocations.
 *
 * @param pageContext - The SharePoint page context
 * @alpha
 */
function createSearchInstrumenterOnce(pageContext) {
    var _a;
    return (instrumenter ||
        (instrumenter = Object(_1js_search_instrumentation_lib_createInstrumenter__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ perf: _1js_search_logger_lib_performance__WEBPACK_IMPORTED_MODULE_3__, hostAppInfo: {
                // Host app information will be filled in ASAP using setProps()
                id: 'Unspecified',
                userRing: '',
                version: ''
            } }, (!_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["_SPKillSwitch"].isActivated('a3778c3f-62c5-497f-803c-3837d4289f4e'
        /* '11/26/2020', '[toreriks] Add service environment info to search instrumenter' */
        ) && ((_a = pageContext) === null || _a === void 0 ? void 0 : _a.legacyPageContext)
            ? {
                serviceEnvInfo: {
                    environment: Object(_ms_sp_search_common_lib_serviceEnvironmentUtils__WEBPACK_IMPORTED_MODULE_4__["getServiceEnvironment"])(pageContext.legacyPageContext) || ''
                }
            }
            : {})))));
}


/***/ }),

/***/ "Dy1t":
/*!*********************************************************!*\
  !*** ./lib/search/initPersonSuggestionClickHandling.js ***!
  \*********************************************************/
/*! exports provided: setPersonSuggestionClickHandler, initPersonSuggestionClickHandling */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setPersonSuggestionClickHandler", function() { return setPersonSuggestionClickHandler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initPersonSuggestionClickHandling", function() { return initPersonSuggestionClickHandling; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _updaters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./updaters */ "wHdv");



var currentClickHandler = function (event) {
    event.preventDefault();
    if (true) {
        console.error('no person suggestion click behavior specified');
    }
};
function setPersonSuggestionClickHandler(clickHandler) {
    currentClickHandler = clickHandler;
}
var initialized = false;
function initPersonSuggestionClickHandling() {
    if (initialized) {
        return;
    }
    initialized = true;
    // Add a provider config updater to update the out-of-the-box person suggestion
    // component with an onClick handler that does our bidding. We never remove
    // this updater so we don't save the cleanup function that's returned.
    Object(_updaters__WEBPACK_IMPORTED_MODULE_2__["addSearchBoxProviderConfigUpdater"])({
        id: 'sp-person-suggestion-click-handler',
        groupUpdaters: [
            {
                groupId: 'person',
                createUpdater: function () {
                    return {
                        component: function (personComponent) { return function (props) {
                            var onClick = function (event) { return currentClickHandler(event, props); };
                            return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](personComponent, 
                            // tslint:disable-next-line:no-any
                            Object.assign({}, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, props), { onClick: onClick }));
                        }; }
                    };
                }
            }
        ]
    });
}


/***/ }),

/***/ "EjJ3":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-utilities@29.7.9_5d977624104b06c7bcaa2de974ff51f1/node_modules/@ms/odsp-utilities/lib/models/store/DataStoreCachingType.js ***!
  \*******************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ms/odsp-core-bundle */ "K9kD");
/* harmony import */ var _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__["DataStoreCachingType"]; });

// Loading @ms/odsp-utilities/./lib/models/store/DataStoreCachingType.js



/***/ }),

/***/ "FMHC":
/*!********************************!*\
  !*** ./lib/SuiteNavManager.js ***!
  \********************************/
/*! exports provided: DEFAULT_SUITENAV_HEIGHT, DEFAULT_SUITENAV_THIN_HEIGHT, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_SUITENAV_HEIGHT", function() { return DEFAULT_SUITENAV_HEIGHT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_SUITENAV_THIN_HEIGHT", function() { return DEFAULT_SUITENAV_THIN_HEIGHT; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _microsoft_sp_page_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @microsoft/sp-page-context */ "X+PM");
/* harmony import */ var _microsoft_sp_page_context__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_page_context__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @microsoft/sp-diagnostics */ "ut3N");
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _microsoft_sp_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @microsoft/sp-http */ "vlQI");
/* harmony import */ var _microsoft_sp_http__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_http__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _microsoft_sp_loader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @microsoft/sp-loader */ "I6O9");
/* harmony import */ var _microsoft_sp_loader__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_loader__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ms_odsp_utilities_lib_models_store_BaseDataStore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ms/odsp-utilities/lib/models/store/BaseDataStore */ "18dJ");
/* harmony import */ var _ms_odsp_utilities_lib_models_store_DataStoreCachingType__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ms/odsp-utilities/lib/models/store/DataStoreCachingType */ "EjJ3");
/* harmony import */ var _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ms/sp-telemetry */ "2q6Q");
/* harmony import */ var _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _models_IShellBaseTheme__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./models/IShellBaseTheme */ "iIlt");
/* harmony import */ var _models_SuiteNavLinkIds__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./models/SuiteNavLinkIds */ "ogh3");
/* harmony import */ var _dataAccess_SPOSuiteNavDataSource__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./dataAccess/SPOSuiteNavDataSource */ "ZG7e");
/* harmony import */ var _dataAccess_OnPremSuiteNavDataSource__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./dataAccess/OnPremSuiteNavDataSource */ "5Oht");
/* harmony import */ var _O365ShellWrapper__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./O365ShellWrapper */ "019d");
/* harmony import */ var _search_manageSearchBoxSettings__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./search/manageSearchBoxSettings */ "7fwW");
/* harmony import */ var _search_initPersonSuggestionClickHandling__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./search/initPersonSuggestionClickHandling */ "Dy1t");
/* harmony import */ var _O365ShellPromises__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./O365ShellPromises */ "S309");
/* harmony import */ var _ms_sp_search_common_lib_getSearchBoxLoadingPattern__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ms/sp-search-common/lib/getSearchBoxLoadingPattern */ "xBAi");
/* harmony import */ var _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ms/odsp-core-bundle */ "K9kD");
/* harmony import */ var _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _SuiteNavManagerStrings_resx__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./SuiteNavManagerStrings.resx */ "qUy2");
var _SuiteNavManagerStrings_resx__WEBPACK_IMPORTED_MODULE_19___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./SuiteNavManagerStrings.resx */ "qUy2", 1);
/**
 * @Copyright (c) Microsoft Corporation.  All rights reserved.
 *
 * @file Data source for the suite nav.
 */




















/**
 * @internal
 */
var DEFAULT_SUITENAV_HEIGHT = '50px';
/**
 * @internal
 */
var DEFAULT_SUITENAV_THIN_HEIGHT = '48px';
var CACHE_PREFIX = 'SPPPLATSuiteNav';
var SERVICE_KEY = 'SuiteNavService';
var DATA_KEY = 'Data';
var DATE_KEY = 'CacheDate';
var VERSION_KEY = 'CacheVersion';
var SESSION_KEY = 'CachedThisSession';
var THEME_KEY = 'ThemeData';
var REACT_SHELL_BOOTSTRAPPER_HOST = 'https://shellprod.msocdn.com';
var REACT_SHELL_BOOTSTRAPPER_PPE_HOST = 'https://shellppe.msocdn.com';
var REACT_SHELL_BOOTSTRAPPER_API = '/api/shellbootstrapper/business/oneshell';
var WINDOW_SCRIPT_LOAD_ERROR = 'o365ShellScriptLoadError';
var WINDOW_IS_SUITE_NAV_DISABLED_BOOLEAN = 'isSuiteNavDisabled';
var WINDOW_REACT_VARIABLE = 'React';
var WINDOW_REACTDOM_VARIABLE = 'ReactDOM';
// This constant can be used to invalidate the cache if we make incompatible changes
var CACHE_VERSION = 1;
var cache = new _ms_odsp_utilities_lib_models_store_BaseDataStore__WEBPACK_IMPORTED_MODULE_6__["default"](CACHE_PREFIX, _ms_odsp_utilities_lib_models_store_DataStoreCachingType__WEBPACK_IMPORTED_MODULE_7__["default"].local);
var logSource = _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_3__["_LogSource"].create('SuiteNavManager');
/**
 * @internal
 */
var SuiteNavManager = /** @class */ (function () {
    function SuiteNavManager(serviceScope) {
        var _this = this;
        this._serviceScope = serviceScope;
        serviceScope.whenFinished(function () {
            _this._httpClient = serviceScope.consume(_microsoft_sp_http__WEBPACK_IMPORTED_MODULE_4__["SPHttpClient"].serviceKey);
            if (_this._shouldLoadAllResourcesFaster()) {
                _this._pageContext = serviceScope.consume(_microsoft_sp_page_context__WEBPACK_IMPORTED_MODULE_2__["PageContext"].serviceKey);
            }
        });
    }
    SuiteNavManager.prototype.initialize = function (suiteNavDiv, isFullPageLoad) {
        if (isFullPageLoad === void 0) { isFullPageLoad = true; }
        this._suiteNavDiv = suiteNavDiv;
        this._isFullPageLoad = isFullPageLoad;
        this._searchBoxSettingsSet = false;
    };
    /**
     * Loads the SuiteNav into the page by obtaining the data, building the model, getting the shell wrapper
     * and rendering it onto the page.
     */
    SuiteNavManager.prototype.loadSuiteNav = function (suiteNavConfig) {
        var _this = this;
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["Validate"].isNotNullOrUndefined(suiteNavConfig, 'suiteNavConfig');
        if (isSuiteNavNewFlowFlightEnabled()) {
            this._initializeSuiteNavConfig(suiteNavConfig);
            this._completeSuiteNavNewFlow();
        }
        else {
            this._initializeSuiteNavConfig(suiteNavConfig);
            var o365ShellWrapper_1 = new _O365ShellWrapper__WEBPACK_IMPORTED_MODULE_13__["default"]();
            // If the shell has been successfully loaded before, always attempt to contact the server for fresh NavBarData
            this._suiteNavModelPromise = this._getSuiteNavModel(o365ShellWrapper_1.DoesShellExist());
            // tslint:disable-next-line: no-floating-promises
            this._suiteNavModelPromise.then(function (suiteNavModel) {
                var suiteNavJSPromise = !o365ShellWrapper_1.DoesShellExist()
                    ? getSuiteNavShell(suiteNavModel.CssUrl, suiteNavModel.JsUrl, suiteNavModel)
                    : Promise.resolve(undefined);
                // tslint:disable-next-line: no-floating-promises
                suiteNavJSPromise.then(function () {
                    setO365ShellData(o365ShellWrapper_1, suiteNavModel.NavBarData);
                    _this._renderSuiteNav(o365ShellWrapper_1);
                });
            });
        }
    };
    SuiteNavManager.prototype.loadSuiteNavNewFlow = function (suiteNavConfig) {
        var _this = this;
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["Validate"].isNotNullOrUndefined(suiteNavConfig, 'suiteNavConfig');
        this._initializeSuiteNavConfig(suiteNavConfig);
        _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_8__["_PerformanceLogger"].trackFlight(_ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_8__["_PerformanceFlight"].O365ShellModuleJSClient);
        _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_8__["_PerformanceLogger"].trackFlight(_ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_8__["_PerformanceFlight"].CSISuiteNavScriptAsyncClient);
        if (this._isPerfFlightOn()) {
            this._loadQosMonitor = new _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_3__["_QosMonitor"]('SuiteNav.Load');
            this._renderQosMonitor = new _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_3__["_QosMonitor"]('SuiteNav.Render');
            this._postRenderQosMonitor = new _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_3__["_QosMonitor"]('SuiteNav.PostRender');
            this._initSearchBoxProviderQosMonitor = new _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_3__["_QosMonitor"]('SuiteNav.InitSearchBoxProvider');
            setTimeout(function () {
                if (!_this._loadQosMonitor.hasEnded) {
                    _this._loadQosMonitor.writeUnexpectedFailure('Timeout');
                }
                if (!_this._renderQosMonitor.hasEnded) {
                    _this._renderQosMonitor.writeUnexpectedFailure('Timeout');
                }
                if (!_this._postRenderQosMonitor.hasEnded) {
                    _this._postRenderQosMonitor.writeUnexpectedFailure('Timeout');
                }
                if (!_this._initSearchBoxProviderQosMonitor.hasEnded) {
                    _this._initSearchBoxProviderQosMonitor.writeUnexpectedFailure('Timeout');
                }
            }, 45000);
            if (!!window[WINDOW_IS_SUITE_NAV_DISABLED_BOOLEAN] || !_O365ShellPromises__WEBPACK_IMPORTED_MODULE_16__["O365ShellPromises"].GetLoadPromise) {
                // SuiteNav disabled flag applies when the suiteNav may be loaded later, through in-place navigation
                // Load promise not being present applies when the suiteNav cannot load later, disabled at server-side
                this._loadQosMonitor.writeExpectedFailure('SuiteNavDisabled');
                this._renderQosMonitor.writeExpectedFailure('SuiteNavDisabled');
                this._postRenderQosMonitor.writeExpectedFailure('SuiteNavDisabled');
            }
            if (this._renderedOnce) {
                // In-place navigation scenarios should not re-render the suiteNav. Track these scenarios.
                // This only adds data to the QoS monitor but the code still works normally.
                this._loadQosMonitor.writeExpectedFailure('InPlaceNav');
                this._renderQosMonitor.writeExpectedFailure('InPlaceNav');
                this._postRenderQosMonitor.writeExpectedFailure('InPlaceNav');
            }
        }
        var qosMonitor = new _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_3__["_QosMonitor"]('SuiteNavManager');
        this._suiteNavLoadStart = _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_8__["_PerformanceLogger"].now();
        this.o365ShellWrapperPromise
            .then(function (o365Shell) { return _this._renderSuiteNav(o365Shell, qosMonitor); })
            .catch(function (errorMessage) {
            qosMonitor.writeUnexpectedFailure('SuiteNavManagerFailure', new Error(errorMessage));
        });
        this._suiteNavModelPromise = this._getSuiteNavModel(this._setO365ShellDataCalledOnce || !this._isFullPageLoad);
    };
    /**
     * Deprecated - Use the private _getSearchBoxProvider that doesn't call configureSearchBox every time.
     */
    SuiteNavManager.prototype.getSearchBoxProvider = function () {
        var _this = this;
        return __webpack_require__.e(/*! import() | sp-suite-nav-searchBoxProvider */ "sp-suite-nav-searchBoxProvider").then(__webpack_require__.bind(null, /*! ./search/SearchBoxProvider */ "SCym"))
            .then(function (searchBoxProviderModule) {
            return _this._serviceScope.consume(searchBoxProviderModule.default.serviceKey);
        })
            .then(function (searchBoxProvider) {
            // Make sure the search box provider has been initialized
            return searchBoxProvider
                .configureSearchBox(_this._suiteNavManagerConfiguration)
                .then(function () { return searchBoxProvider; });
        });
    };
    SuiteNavManager.prototype._initializeSuiteNavConfig = function (suiteNavConfig) {
        this._suiteNavManagerConfiguration = suiteNavConfig;
        if (this._suiteNavManagerConfiguration.updateSuiteNavHeight) {
            this._suiteNavManagerConfiguration.updateSuiteNavHeight(isSuiteNavThinHeaderFlightEnabled() ? DEFAULT_SUITENAV_THIN_HEIGHT : DEFAULT_SUITENAV_HEIGHT);
        }
        this._suiteNavManagerConfiguration.o365ShellRenderSettings.top = this._suiteNavDiv.id;
    };
    Object.defineProperty(SuiteNavManager.prototype, "o365ShellWrapperPromise", {
        get: function () {
            var _this = this;
            if (!this._o365ShellPromise) {
                if (this._isPerfFlightOn()) {
                    var o365ShellWrapper_2 = new _O365ShellWrapper__WEBPACK_IMPORTED_MODULE_13__["default"]();
                    this._o365ShellPromise = _O365ShellPromises__WEBPACK_IMPORTED_MODULE_16__["O365ShellPromises"].GetLoadPromise()
                        .then(function () {
                        if (o365ShellWrapper_2.DoesShellExist()) {
                            // VSO:793997 - Once the server-side code is in place, we should add a perf marker
                            _this._suiteNavModuleLoaded = _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_8__["_PerformanceLogger"].now();
                            _this._o365ShellWrapper = o365ShellWrapper_2;
                            if (!!_this._loadQosMonitor) {
                                _this._loadQosMonitor.writeSuccess();
                            }
                            return o365ShellWrapper_2;
                        }
                        else {
                            if (!!_this._loadQosMonitor) {
                                _this._loadQosMonitor.writeUnexpectedFailure('ShellDoesntExist');
                            }
                            if (!!_this._renderQosMonitor) {
                                _this._renderQosMonitor.writeExpectedFailure('LoadError');
                            }
                            if (!!_this._postRenderQosMonitor) {
                                _this._postRenderQosMonitor.writeExpectedFailure('LoadError');
                            }
                        }
                    })
                        .catch(function (error) {
                        if (!!_this._loadQosMonitor) {
                            _this._loadQosMonitor.writeUnexpectedFailure('LoadError', error);
                        }
                        if (!!_this._renderQosMonitor) {
                            _this._renderQosMonitor.writeExpectedFailure('LoadError', error);
                        }
                        if (!!_this._postRenderQosMonitor) {
                            _this._postRenderQosMonitor.writeExpectedFailure('LoadError', error);
                        }
                        throw error;
                    });
                }
                else {
                    this._o365ShellPromise = _microsoft_sp_loader__WEBPACK_IMPORTED_MODULE_5__["SPComponentLoader"].loadScript(getShellBootstrapUrl()).then(function () {
                        var o365ShellWrapper = new _O365ShellWrapper__WEBPACK_IMPORTED_MODULE_13__["default"]();
                        if (o365ShellWrapper.DoesShellExist()) {
                            _this._suiteNavModuleLoaded = _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_8__["_PerformanceLogger"].now();
                            _this._o365ShellWrapper = o365ShellWrapper;
                            return _this._o365ShellWrapper;
                        }
                    });
                }
            }
            return this._o365ShellPromise;
        },
        enumerable: true,
        configurable: true
    });
    SuiteNavManager.prototype._completeSuiteNavNewFlow = function () {
        var _this = this;
        var o365ShellPromise = this.o365ShellWrapperPromise.then(function (o365Shell) {
            _this._renderSuiteNav(o365Shell);
            return o365Shell;
        });
        var forceUpdate = this._setO365ShellDataCalledOnce || !this._isFullPageLoad;
        if (forceUpdate || !this._suiteNavModelPromise) {
            this._suiteNavModelPromise = this._getSuiteNavModel(forceUpdate);
        }
        // tslint:disable-next-line: no-floating-promises
        Promise.all([o365ShellPromise, this._suiteNavModelPromise]).then(function (promiseResults) {
            var _a, _b;
            var o365Shell = promiseResults[0];
            var suiteNavModelPromiseResult = promiseResults[1];
            if (o365Shell) {
                if (_this._isPerfFlightOn()) {
                    var sharedComponents = _this._getRenderSettings().sharedComponents;
                    if (!!((_a = sharedComponents) === null || _a === void 0 ? void 0 : _a.React) && !!((_b = sharedComponents) === null || _b === void 0 ? void 0 : _b.ReactDOM)) {
                        window[WINDOW_REACT_VARIABLE] = sharedComponents.React;
                        window[WINDOW_REACTDOM_VARIABLE] = sharedComponents.ReactDOM;
                    }
                }
                setO365ShellData(o365Shell, suiteNavModelPromiseResult.NavBarData);
                if (_this._shouldOverrideProductName()) {
                    _this._overrideProductName(o365Shell);
                }
                if (isLoadShellPhase2FlightEnabled()) {
                    var renderSettingsFromContext = o365Shell.GetRenderSettingsFromContext();
                    if (renderSettingsFromContext) {
                        renderSettingsFromContext.breakUpShellCoreTasks = _this._shouldBreakUpShellCoreLRT();
                    }
                    o365Shell.GetResourceLoader().loadNext(); // Load core, searchbox and responsive.
                }
                if (_this._isPerfFlightOn() && _this._shouldUpdateSearchBoxConfig()) {
                    // tslint:disable-next-line: no-floating-promises
                    _this._getSearchBoxProvider().then(function (searchBoxProvider) {
                        return searchBoxProvider.updateSearchBoxConfiguration(_this._suiteNavManagerConfiguration);
                    });
                }
                if (_this._shouldFixInPlaceNavSearch() && _this._isFullPageLoad && _this._shouldRunPostRenderLater()) {
                    _this._setPostRenderCallback(o365Shell);
                }
                var shouldFixInPlaceNav_1 = !_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["_SPKillSwitch"].isActivated('3d796971-176b-46db-81e2-1c9d1fd1a666'
                /* 08/04/2020, 'Fix issues with early in-place nav' */
                );
                // Save a local copy to avoid it being updated by an in-place nav
                var isFullPageLoad_1 = _this._isFullPageLoad;
                setTimeout(function () {
                    o365Shell.GetResourceLoader().loadAll();
                    if (!_this._shouldFixInPlaceNavSearch() &&
                        _this._shouldRunPostRenderLater() &&
                        (shouldFixInPlaceNav_1 ? isFullPageLoad_1 : _this._isFullPageLoad)) {
                        _this._setPostRenderCallback(o365Shell);
                    }
                }, _this._getLoadAllResourcesTimeoutValue());
                _this._setO365ShellDataCalledOnce = true;
                if (!_this._isFullPageLoad) {
                    _this._onRender(o365Shell);
                    _this._onPostRender();
                }
            }
        });
    };
    SuiteNavManager.prototype._setPostRenderCallback = function (o365Shell) {
        var _this = this;
        if (!!_O365ShellPromises__WEBPACK_IMPORTED_MODULE_16__["O365ShellPromises"].GetPostRenderPromise()) {
            _O365ShellPromises__WEBPACK_IMPORTED_MODULE_16__["O365ShellPromises"].GetPostRenderPromise()
                .then(function () {
                try {
                    _this._onPostRender();
                    _this._setSearchBoxSettings(o365Shell);
                    if (!!_this._postRenderQosMonitor) {
                        _this._postRenderQosMonitor.writeSuccess();
                    }
                }
                catch (error) {
                    if (!!_this._postRenderQosMonitor) {
                        _this._postRenderQosMonitor.writeUnexpectedFailure('OnPostRenderError', error);
                    }
                }
            })
                .catch(function (error) {
                if (!!_this._postRenderQosMonitor) {
                    _this._postRenderQosMonitor.writeUnexpectedFailure('PostRenderError', error);
                }
            });
        }
        else {
            this._onPostRender();
            this._setSearchBoxSettings(o365Shell);
        }
    };
    /**
     * Gets the suite nav data. Tries to grab SPO and OnPrem version in parallel and if SPO fails then
     * the onPrem version is loaded.
     * @param webServerRelativeUrl - represents the SharePoint web server relative URL
     * @param cultureName - represents the name of the culture (e.g. 'en-us')
     * @returns a promise that resolves to a string containing the response from the Suite Nav service.
     */
    SuiteNavManager.prototype._getSuiteNavModel = function (forceFetchData) {
        var _this = this;
        var suiteNavModelPromise;
        forceFetchData = !!forceFetchData || this._wasPageRefreshed();
        if (!forceFetchData && this._isCacheValid() && !isCacheOutdated()) {
            suiteNavModelPromise = this._loadSuiteNavFromCache();
        }
        else {
            clearCache();
            suiteNavModelPromise = this._loadSuiteNavFromServer();
        }
        return suiteNavModelPromise.then(function (model) {
            model.NavBarData = _this._suiteNavManagerConfiguration.modifySuiteNavData(model);
            model.NavBarData.UserDisplayName = _this._getUserDisplayName(model.NavBarData.UserDisplayName);
            model.CacheToken = _this._suiteNavManagerConfiguration.cacheToken;
            model.UserIdentifier = _this._suiteNavManagerConfiguration.systemUserKey;
            model.NavBarData.AppBrandTheme = _models_IShellBaseTheme__WEBPACK_IMPORTED_MODULE_9__["DEFAULT_APP_BRAND_THEME"];
            updateCache(model, _this._suiteNavDataSource.suiteNavService);
            if (model && model.NavBarData && model.NavBarData.Dimensions && model.NavBarData.Dimensions.Top) {
                if (_this._suiteNavManagerConfiguration.updateSuiteNavHeight) {
                    _this._suiteNavManagerConfiguration.updateSuiteNavHeight(model.NavBarData.Dimensions.Top);
                }
            }
            return model;
        });
    };
    SuiteNavManager.prototype._wasPageRefreshed = function () {
        return window.performance && window.performance.navigation && window.performance.navigation.type === 1;
    };
    SuiteNavManager.prototype._loadSuiteNavFromCache = function () {
        var _this = this;
        return new Promise(function (complete) {
            cache.getValue(SERVICE_KEY) === 0 /* SPO */
                ? (_this._suiteNavDataSource = _this._createSPODataSource())
                : (_this._suiteNavDataSource = _this._createOnPremDataSource());
            complete(cache.getValue(DATA_KEY));
        });
    };
    SuiteNavManager.prototype._loadSuiteNavFromServer = function () {
        var _this = this;
        this._suiteNavDataSource = this._createSPODataSource();
        var onPremDataSource = this._createOnPremDataSource();
        var onPremSuiteNavResponse = onPremDataSource.loadData();
        onPremSuiteNavResponse.catch(function () {
            createSuiteNavErrorLogEntry('loadData', 'Failed to retrieve Hybrid SuiteNavData');
        });
        return this._suiteNavDataSource
            .loadData()
            .then(function (response) {
            return response;
        })
            .catch(function () {
            createSuiteNavErrorLogEntry('loadData', 'Failed to retrieve SPO SuiteNavData');
            _this._suiteNavDataSource = onPremDataSource;
            return onPremSuiteNavResponse;
        });
    };
    SuiteNavManager.prototype._getSearchBoxProvider = function () {
        var _this = this;
        return __webpack_require__.e(/*! import() | sp-suite-nav-searchBoxProvider */ "sp-suite-nav-searchBoxProvider").then(__webpack_require__.bind(null, /*! ./search/SearchBoxProvider */ "SCym")).then(function (searchBoxProviderModule) {
            var searchBoxProvider = _this._serviceScope.consume(searchBoxProviderModule.default.serviceKey);
            return searchBoxProvider;
        });
    };
    /**
     * Renders the Suite Nav.
     * @param o365Shell - Represents the Suite Nav shell wrapper.
     * @param suiteNavData - Represents the Suite Nav data that will be used for
     * rendering.
     */
    SuiteNavManager.prototype._renderSuiteNav = function (o365Shell, qosMonitor) {
        var _this = this;
        if (this._isPerfFlightOn() && window[WINDOW_SCRIPT_LOAD_ERROR]) {
            this._qosFailure(qosMonitor, 'oneshellScriptLoadFailure');
            return;
        }
        if (!o365Shell) {
            this._qosFailure(qosMonitor, 'o365ShellNotPresent');
            return;
        }
        if (o365Shell && !this._renderedOnce) {
            this._renderedOnce = true;
            if (this._isFullPageLoad) {
                if (this._isPerfFlightOn()) {
                    var renderPromise = _O365ShellPromises__WEBPACK_IMPORTED_MODULE_16__["O365ShellPromises"].GetRenderPromise();
                    if (!renderPromise) {
                        // This check won't be necessary after server-side rollout (commit dff91f5b)
                        this._qosFailure(qosMonitor, 'o365ShellRenderPromiseNotPresent');
                        if (!!this._renderQosMonitor) {
                            this._renderQosMonitor.writeUnexpectedFailure('RenderPromiseDoesntExist');
                        }
                        return;
                    }
                    renderPromise
                        .then(function () {
                        _this._qosSuccess(qosMonitor);
                        try {
                            _this._onRender(o365Shell);
                            if (_this._shouldUpdateSearchBoxConfig()) {
                                // tslint:disable-next-line: no-floating-promises
                                _this._getSearchBoxProvider()
                                    .then(function (searchBoxProvider) {
                                    return searchBoxProvider.configureSearchBox(_this._suiteNavManagerConfiguration);
                                })
                                    .then(function () {
                                    if (_this._initSearchBoxProviderQosMonitor) {
                                        _this._initSearchBoxProviderQosMonitor.writeSuccess();
                                    }
                                }, function (error) {
                                    if (_this._initSearchBoxProviderQosMonitor) {
                                        _this._initSearchBoxProviderQosMonitor.writeUnexpectedFailure('InitSearchBoxProviderError', error);
                                    }
                                });
                            }
                            else {
                                // Getting the search box provider also kicks off initialization
                                _this.getSearchBoxProvider().then(function () {
                                    if (_this._initSearchBoxProviderQosMonitor) {
                                        _this._initSearchBoxProviderQosMonitor.writeSuccess();
                                    }
                                }, function (error) {
                                    if (_this._initSearchBoxProviderQosMonitor) {
                                        _this._initSearchBoxProviderQosMonitor.writeUnexpectedFailure('InitSearchBoxProviderError', error);
                                    }
                                });
                            }
                            if (!!_this._renderQosMonitor) {
                                _this._renderQosMonitor.writeSuccess();
                            }
                        }
                        catch (error) {
                            if (!!_this._renderQosMonitor) {
                                _this._renderQosMonitor.writeUnexpectedFailure('OnRenderError', error);
                            }
                            if (!!_this._postRenderQosMonitor) {
                                _this._postRenderQosMonitor.writeExpectedFailure('RenderError', error);
                            }
                        }
                        if (!_this._shouldRunPostRenderLater()) {
                            _this._onPostRender();
                            _this._setSearchBoxSettings(o365Shell);
                        }
                    })
                        .catch(function (error) {
                        _this._qosFailure(qosMonitor, 'o365ShellRenderPromiseError', error);
                        if (!!_this._renderQosMonitor) {
                            _this._renderQosMonitor.writeUnexpectedFailure('RenderError', error);
                        }
                        if (!!_this._postRenderQosMonitor) {
                            _this._postRenderQosMonitor.writeExpectedFailure('RenderError', error);
                        }
                    });
                }
                else {
                    var renderSettings = this._getRenderSettings();
                    var shellRenderedResolver_1 = function () { return void 0; };
                    if (_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["_SPFlight"].isEnabled(1240) /* SPPagesSuiteSearchBox */) {
                        renderSettings = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, renderSettings), Object(_search_manageSearchBoxSettings__WEBPACK_IMPORTED_MODULE_14__["default"])(this._suiteNavManagerConfiguration.userId, new Promise(function (r) { return (shellRenderedResolver_1 = r); }), new Promise(function (resolve) {
                            return _this._serviceScope.whenFinished(function () {
                                return resolve(_this._serviceScope.consume(_microsoft_sp_page_context__WEBPACK_IMPORTED_MODULE_2__["PageContext"].serviceKey));
                            });
                        })));
                    }
                    o365Shell.RenderAsync(renderSettings, function () {
                        shellRenderedResolver_1(o365Shell);
                        _this._suiteNavRendered = _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_8__["_PerformanceLogger"].now();
                        if (qosMonitor) {
                            _this._qosSuccess(qosMonitor);
                        }
                        _this._onRender(o365Shell);
                    }, function () {
                        _this._onPostRender();
                    });
                }
            }
            else if (!isSuiteNavNewFlowFlightEnabled()) {
                this._onRender(o365Shell);
                this._onPostRender();
            }
            o365Shell.OnHasMember('LoadShellPlus', function () {
                // tslint:disable-next-line: no-floating-promises
                _this._loadShellPlus(o365Shell);
            });
            if (isSPSuiteNavFeedbackFlightEnabled() &&
                this._suiteNavManagerConfiguration.feedbackMetadataCallback &&
                o365Shell.NFD) {
                o365Shell.NFD.OnFeedbackMetadataRequested(function (feedbackMetadata, provideScreenshotCallback) {
                    var feedbackMetadataCallback = _this._suiteNavManagerConfiguration.feedbackMetadataCallback;
                    if (feedbackMetadataCallback) {
                        if (_this._shouldSetAppDataInFeedbackMetadata()) {
                            if (!feedbackMetadata.options.applicationGroup) {
                                feedbackMetadata.options.applicationGroup = {};
                            }
                            if (!feedbackMetadata.options.applicationGroup.appData) {
                                // Default appData to JSON string of emtpy object.
                                feedbackMetadata.options.applicationGroup.appData = '{}';
                            }
                        }
                        feedbackMetadata = feedbackMetadataCallback(feedbackMetadata);
                        if (feedbackMetadata.options &&
                            feedbackMetadata.options.disableIncludeScreenshot === false &&
                            provideScreenshotCallback) {
                            __webpack_require__.e(/*! import() | html2canvas */ "vendors~html2canvas").then(__webpack_require__.t.bind(null, /*! html2canvas */ "Er6C", 7)).then(function (lib) {
                                // Depending on bundling, the html2canvas function might be the imported module or its default export.
                                var html2canvas = lib.default || lib;
                                html2canvas(document.body).then(function (canvas) {
                                    provideScreenshotCallback(canvas.toDataURL('image/jpeg'));
                                });
                            });
                        }
                    }
                    return feedbackMetadata;
                });
                if (this._suiteNavManagerConfiguration.shouldRenderFeedbackButton) {
                    this._addFeedbackButton(o365Shell);
                }
            }
            if (o365Shell.Theme) {
                o365Shell.Theme.OnThemeChanged(function (themeData) { return updateCachedThemeData(themeData); });
            }
            var autoActivateCallback_1 = undefined;
            if (o365Shell.Extensibility && this._suiteNavManagerConfiguration.customButtonData) {
                this._suiteNavManagerConfiguration.customButtonData.forEach(function (buttonConfig) {
                    // Transform configuration data into the format required by the shell
                    var customButton = {
                        id: buttonConfig.id,
                        iconFontName: buttonConfig.iconFontName,
                        iconFontFamily: buttonConfig.iconFontFamily,
                        onHide: buttonConfig.onHide || (buttonConfig.getOnHide && buttonConfig.getOnHide(o365Shell)),
                        onShow: buttonConfig.onShow || (buttonConfig.getOnShow && buttonConfig.getOnShow(o365Shell)),
                        ariaLabel: buttonConfig.ariaLabel,
                        affordanceMenuItemText: buttonConfig.affordanceMenuItemText,
                        isStateless: buttonConfig.isStateless
                    };
                    if (autoActivateCallback_1 === undefined && buttonConfig.getOnAutoActivate) {
                        autoActivateCallback_1 = buttonConfig.getOnAutoActivate(o365Shell);
                    }
                    o365Shell
                        .Extensibility /*Defined at this point*/
                        .AddOrUpdateCustomHeaderButton(customButton);
                });
                if (autoActivateCallback_1 !== undefined) {
                    autoActivateCallback_1();
                }
            }
        }
    };
    SuiteNavManager.prototype._addFeedbackButton = function (o365Shell) {
        var _a;
        var buttonId = 'GiveFeedbackButton';
        var feedbackProviderId = 'Feedback';
        var _onHidePane = function () {
            var _a;
            (_a = o365Shell.FlexPane) === null || _a === void 0 ? void 0 : _a.CloseFlexPaneForProvider(feedbackProviderId);
            _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_18__["EventGroup"].raise(document.body, 'resize', undefined, true);
        };
        var _showPane = function () {
            var _a;
            if (o365Shell.FlexPane) {
                o365Shell.FlexPane.OpenFlexPaneForProvider(feedbackProviderId);
                _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_18__["EventGroup"].raise(document.body, 'resize', undefined, true);
            }
            (_a = o365Shell.Extensibility) === null || _a === void 0 ? void 0 : _a.UpdateButtonState(buttonId, true);
        };
        (_a = o365Shell.Extensibility) === null || _a === void 0 ? void 0 : _a.AddOrUpdateCustomHeaderButton({
            affordanceMenuItemText: _SuiteNavManagerStrings_resx__WEBPACK_IMPORTED_MODULE_19__["FeedbackAriaLabel"],
            ariaLabel: _SuiteNavManagerStrings_resx__WEBPACK_IMPORTED_MODULE_19__["FeedbackAriaLabel"],
            iconFontFamily: 'FabricMDL2Icons-5',
            iconFontName: '\uED15',
            id: buttonId,
            onShow: _showPane,
            onHide: _onHidePane
        });
    };
    SuiteNavManager.prototype._isPerfFlightOn = function () {
        return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["_SPFlight"].isEnabled(1136 /* O365ShellModuleJSClient */);
    };
    SuiteNavManager.prototype._shouldRunPostRenderLater = function () {
        return (this._isPerfFlightOn() &&
            !(
            // Running post-render later seems to cause issues in the SERP when the search app flight is off
            (!_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["_SPFlight"].isEnabled(1228 /* SearchAppClientFlight */) &&
                window.location.href.toLowerCase().indexOf('search.aspx') !== -1)));
    };
    /**
     * Enables update searchBox config calls. The same killswitch id is used in SPHome, SPPages and SPSystemPages
     */
    SuiteNavManager.prototype._shouldUpdateSearchBoxConfig = function () {
        return !_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["_SPKillSwitch"].isActivated('9aa80bce-7894-436c-8b49-14d6b028f55f'
        /* '08/03/2020', 'Update search box configuration every time the app loads the suiteNav' */
        );
    };
    SuiteNavManager.prototype._shouldLoadAllResourcesFaster = function () {
        return !_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["_SPKillSwitch"].isActivated('48dbb787-c335-4dac-bbda-0413b7fc1132' /* '07/21/2020','Suite nav load all timeout value' */);
    };
    SuiteNavManager.prototype._shouldFixInPlaceNavSearch = function () {
        return !_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["_SPKillSwitch"].isActivated('c01189c8-6e72-4df5-a4f4-1304b3eec171' /* '08/31/2020','Fix in-place nav to search.aspx' */);
    };
    SuiteNavManager.prototype._shouldBreakUpShellCoreLRT = function () {
        return !_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["_SPKillSwitch"].isActivated('36cefea0-b4a2-46eb-94a2-259d0af7570a' /* '10/23/2020','Break up shell core LRT' */);
    };
    SuiteNavManager.prototype._setSearchBoxSettingsEveryTime = function () {
        return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["_SPKillSwitch"].isActivated('641236e7-5145-4fae-8930-d7d5e5adfd55' /* '10/28/2020','Set search box settings every time' */);
    };
    SuiteNavManager.prototype._shouldOverrideProductName = function () {
        return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["_SPFlight"].isEnabled(1472 /* CSICortexSuiteNavProductName */);
    };
    /**
     * Overrides the product name in the suiteNav.
     * If there is no client override, it clears the existing overrides to use the default values.
     */
    SuiteNavManager.prototype._overrideProductName = function (o365Shell) {
        var _a, _b;
        if (!!this._suiteNavManagerConfiguration.appHeaderLinkText &&
            !!this._suiteNavManagerConfiguration.appHeaderLinkUrl) {
            (_a = o365Shell.Header) === null || _a === void 0 ? void 0 : _a.UpdateHeaderLink(this._suiteNavManagerConfiguration.appHeaderLinkText, encodeURI(this._suiteNavManagerConfiguration.appHeaderLinkUrl));
        }
        else {
            (_b = o365Shell.Header) === null || _b === void 0 ? void 0 : _b.RemoveAppHeaderOverrides();
        }
    };
    SuiteNavManager.prototype._shouldSetAppDataInFeedbackMetadata = function () {
        return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["_SPKillSwitch"].isActivated('a12253b9-7f27-4c11-bfc9-3e7688b5ce1e' /* '9/14/20', 'Ensure appData in feedback options' */);
    };
    SuiteNavManager.prototype._qosSuccess = function (qosMonitor) {
        var _a;
        (_a = qosMonitor) === null || _a === void 0 ? void 0 : _a.writeSuccess({
            suiteNavLoadStart: this._suiteNavLoadStart,
            suiteNavModuleLoaded: this._suiteNavModuleLoaded,
            suiteNavRendered: this._suiteNavRendered
        });
    };
    SuiteNavManager.prototype._qosFailure = function (qosMonitor, failureTag, error) {
        var _a;
        (_a = qosMonitor) === null || _a === void 0 ? void 0 : _a.writeUnexpectedFailure(failureTag, error, {
            suiteNavLoadStart: this._suiteNavLoadStart,
            suiteNavModuleLoaded: this._suiteNavModuleLoaded,
            suiteNavRendered: this._suiteNavRendered
        });
    };
    SuiteNavManager.prototype._setSearchBoxSettings = function (o365Shell) {
        var _this = this;
        var _a;
        if (this._setSearchBoxSettingsEveryTime() || !this._searchBoxSettingsSet) {
            this._searchBoxSettingsSet = true;
            var pageContextPromise = new Promise(function (resolve) {
                return _this._serviceScope.whenFinished(function () { return resolve(_this._serviceScope.consume(_microsoft_sp_page_context__WEBPACK_IMPORTED_MODULE_2__["PageContext"].serviceKey)); });
            });
            // Pass required settings to the search box using the shim API, for the
            // case where we didn't pass them as part of render settings.
            var searchBoxRenderSettings = Object(_search_manageSearchBoxSettings__WEBPACK_IMPORTED_MODULE_14__["default"])(this._suiteNavManagerConfiguration.userId, Promise.resolve(o365Shell), pageContextPromise);
            var Search_1 = o365Shell.Search;
            if (Search_1) {
                var searchBoxCache_1 = searchBoxRenderSettings.searchBoxCache, searchBoxInstrumenter_1 = searchBoxRenderSettings.searchBoxInstrumenter, GetTokenRequestDictionary_1 = searchBoxRenderSettings.GetTokenRequestDictionary;
                if (searchBoxCache_1 && searchBoxInstrumenter_1 && GetTokenRequestDictionary_1) {
                    if (!_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["_SPKillSwitch"].isActivated('729bb597-6a2f-4bad-8bfa-7e71fc7ad48c'
                    /* '12/08/2020', '[stvikenv] Wait for pageContextPromise before calling O365Shell.Search.SetSearchBoxSettings.' */
                    )) {
                        pageContextPromise.then(function (pageContext) {
                            Search_1.SetSearchBoxSettings({
                                cache: searchBoxCache_1,
                                instrumenter: searchBoxInstrumenter_1,
                                tokenProviders: GetTokenRequestDictionary_1(),
                                loadingPattern: Object(_ms_sp_search_common_lib_getSearchBoxLoadingPattern__WEBPACK_IMPORTED_MODULE_17__["getSearchBoxLoadingPattern"])(pageContext.legacyPageContext)
                            });
                        });
                    }
                    else {
                        Search_1.SetSearchBoxSettings({
                            cache: searchBoxCache_1,
                            instrumenter: searchBoxInstrumenter_1,
                            tokenProviders: GetTokenRequestDictionary_1(),
                            loadingPattern: Object(_ms_sp_search_common_lib_getSearchBoxLoadingPattern__WEBPACK_IMPORTED_MODULE_17__["getSearchBoxLoadingPattern"])((_a = this._pageContext) === null || _a === void 0 ? void 0 : _a.legacyPageContext)
                        });
                    }
                }
            }
        }
    };
    SuiteNavManager.prototype._getRenderSettings = function () {
        var sharedComponentsKillSwitch = _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["Guid"].parse('53083242-74d6-466d-a527-93d4c02051b5');
        if (isSuiteNavNewFlowFlightEnabled()) {
            var cachedThemeData = getCachedThemeData();
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this._suiteNavManagerConfiguration.o365ShellRenderSettings), (!_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["_SPKillSwitch"].isActivated(sharedComponentsKillSwitch, '01/17/2020', 'Pass sharedComponents to IO365Shell') && { sharedComponents: this._suiteNavManagerConfiguration.sharedComponents })), { initialRenderData: {
                    AppBrandTheme: cachedThemeData ? cachedThemeData : _models_IShellBaseTheme__WEBPACK_IMPORTED_MODULE_9__["DEFAULT_APP_BRAND_THEME"],
                    Culture: this._suiteNavManagerConfiguration.currentUICultureName,
                    CurrentMainLinkElementID: _models_SuiteNavLinkIds__WEBPACK_IMPORTED_MODULE_10__["default"].SITES,
                    IsConsumer: false,
                    ShellBootHost: getShellBootstrapHost(),
                    UserDisplayName: this._getUserDisplayName(this._suiteNavManagerConfiguration.userDisplayName),
                    UserID: this._suiteNavManagerConfiguration.userId,
                    WorkloadId: _models_SuiteNavLinkIds__WEBPACK_IMPORTED_MODULE_10__["default"].SHAREPOINT_WORKLOAD
                }, isThinHeader: isSuiteNavThinHeaderFlightEnabled(), enableDelayLoading: true, expectSearchBoxSettings: false });
        }
        else {
            return this._suiteNavManagerConfiguration.o365ShellRenderSettings;
        }
    };
    SuiteNavManager.prototype._onRender = function (o365Shell) {
        var _this = this;
        var _a, _b;
        var actionsMap = this._suiteNavManagerConfiguration.getActionsMap();
        if (actionsMap && Object.keys(actionsMap).length > 0) {
            if (!_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["_SPKillSwitch"].isActivated(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["Guid"].parse('f7a0f115-4c1c-4f1c-a9b6-df0c897169eb'), '07/13/2020', 'Fix null pointers')) {
                // tslint:disable-line: max-line-length
                o365Shell.OnHasMember('Navigation', function () {
                    o365Shell.Navigation.OnLinkClick(function (eventArgs) {
                        var action = actionsMap && actionsMap[eventArgs.Id];
                        if (action) {
                            action();
                        }
                    });
                });
            }
            else {
                (_a = o365Shell.Navigation) === null || _a === void 0 ? void 0 : _a.OnLinkClick(function (eventArgs) {
                    var action = actionsMap && actionsMap[eventArgs.Id];
                    if (action) {
                        action();
                    }
                });
            }
        }
        if (this._suiteNavManagerConfiguration.hamburgerCallback) {
            if ((_b = o365Shell.Navigation) === null || _b === void 0 ? void 0 : _b.OnHamburgerButtonClick) {
                o365Shell.Navigation.OnHamburgerButtonClick(this._suiteNavManagerConfiguration.hamburgerCallback);
            }
        }
        if (!this._shouldRunPostRenderLater()) {
            Object(_search_initPersonSuggestionClickHandling__WEBPACK_IMPORTED_MODULE_15__["initPersonSuggestionClickHandling"])();
        }
        if (!_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["_SPKillSwitch"].isActivated(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["Guid"].parse('f7a0f115-4c1c-4f1c-a9b6-df0c897169eb'), '07/13/2020', 'Fix null pointers')) {
            // tslint:disable-line: max-line-length
            if (!!this._suiteNavManagerConfiguration.customHelpPaneArticleId) {
                o365Shell.OnHasMember('NFD', function () {
                    o365Shell.NFD.SetDefaultHelpId(_this._suiteNavManagerConfiguration.customHelpPaneArticleId);
                });
            }
        }
        else {
            if (o365Shell.NFD && this._suiteNavManagerConfiguration.customHelpPaneArticleId) {
                o365Shell.NFD.SetDefaultHelpId(this._suiteNavManagerConfiguration.customHelpPaneArticleId);
            }
        }
    };
    SuiteNavManager.prototype._onPostRender = function () {
        if (this._shouldRunPostRenderLater()) {
            Object(_search_initPersonSuggestionClickHandling__WEBPACK_IMPORTED_MODULE_15__["initPersonSuggestionClickHandling"])();
        }
        if (this._suiteNavManagerConfiguration.suiteNavPostRenderCallback) {
            this._suiteNavManagerConfiguration.suiteNavPostRenderCallback();
        }
    };
    /**
     * LoadShellPlus will start downloading additional files required for notifications
     * and such. Once ShellPlus is ready, postRenderActions will be called.
     */
    SuiteNavManager.prototype._loadShellPlus = function (o365Shell) {
        return new Promise(function () {
            o365Shell.LoadShellPlus();
        }).catch(function (errorMessage) {
            createSuiteNavErrorLogEntry('loadShellPlus', errorMessage);
        });
    };
    SuiteNavManager.prototype._isCacheValid = function () {
        // Cached data is valid (still usable for rendering) if:
        // - the CSS URL and JS URL are present (if we're trying to load the real suite nav)
        // - the data is for the same user
        // - the cache version is the same
        // - the site client tag is the same (if it's different, the theme has changed)
        var model = cache.getValue(DATA_KEY);
        var oldVersion = cache.getValue(VERSION_KEY);
        var cssJsUrlPresent = model && model.NavBarData && model.JsUrl.length > 0 && model.CssUrl.length > 0;
        var sameVersion = oldVersion === CACHE_VERSION;
        var sameUser = model && model.UserIdentifier === this._suiteNavManagerConfiguration.systemUserKey;
        var sameCacheToken = model && model.CacheToken === this._suiteNavManagerConfiguration.cacheToken;
        return cssJsUrlPresent && sameVersion && sameUser && sameCacheToken;
    };
    SuiteNavManager.prototype._createSPODataSource = function () {
        return new _dataAccess_SPOSuiteNavDataSource__WEBPACK_IMPORTED_MODULE_11__["default"](this._httpClient, this._suiteNavManagerConfiguration.currentUICultureName, this._suiteNavManagerConfiguration.webServerRelativeUrl);
    };
    SuiteNavManager.prototype._createOnPremDataSource = function () {
        return new _dataAccess_OnPremSuiteNavDataSource__WEBPACK_IMPORTED_MODULE_12__["default"](this._httpClient, this._suiteNavManagerConfiguration.currentUICultureName, this._suiteNavManagerConfiguration.webServerRelativeUrl);
    };
    SuiteNavManager.prototype._getUserDisplayName = function (userDisplayName) {
        userDisplayName =
            userDisplayName ||
                (this._suiteNavManagerConfiguration && this._suiteNavManagerConfiguration.userDisplayName);
        return userDisplayName;
    };
    SuiteNavManager.prototype._getLoadAllResourcesTimeoutValue = function () {
        var _a, _b;
        var defaultTimeout = 5000;
        if (!this._shouldLoadAllResourcesFaster() || ((_b = (_a = this._pageContext) === null || _a === void 0 ? void 0 : _a.legacyPageContext) === null || _b === void 0 ? void 0 : _b.env) === 'prodbubble') {
            return defaultTimeout;
        }
        else {
            return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["_SPFlight"].isEnabled(1603 /* SPSuiteNavLoadAllResourcesFast */) ? 1000 : defaultTimeout;
        }
    };
    SuiteNavManager.serviceKey = _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["ServiceKey"].create('sp-suite-nav:SuiteNavManager', SuiteNavManager);
    return SuiteNavManager;
}());
/* harmony default export */ __webpack_exports__["default"] = (SuiteNavManager);
function updateCache(model, service) {
    cache.setValue(DATA_KEY, model);
    cache.setValue(DATE_KEY, new Date());
    cache.setValue(VERSION_KEY, CACHE_VERSION);
    cache.setValue(SESSION_KEY, true, _ms_odsp_utilities_lib_models_store_DataStoreCachingType__WEBPACK_IMPORTED_MODULE_7__["default"].session);
    cache.setValue(SERVICE_KEY, service);
}
function clearCache() {
    cache.remove(DATA_KEY);
    cache.remove(DATE_KEY);
    cache.remove(VERSION_KEY);
    cache.remove(SERVICE_KEY);
}
function getCachedThemeData() {
    var cachedThemeData;
    var themeDataCache = cache.getValue(THEME_KEY);
    if (themeDataCache && themeDataCache.themeData) {
        cachedThemeData = themeDataCache.themeData;
    }
    return cachedThemeData;
}
function updateCachedThemeData(themeData) {
    var themeCache = {
        themeData: themeData,
        cacheDate: new Date()
    };
    cache.setValue(THEME_KEY, themeCache);
}
function getShellBootstrapHost() {
    var searchParams = new URLSearchParams(window.location.search);
    if (searchParams.get('usePPE') === 'true') {
        return "" + REACT_SHELL_BOOTSTRAPPER_PPE_HOST;
    }
    else {
        return "" + REACT_SHELL_BOOTSTRAPPER_HOST;
    }
}
function getShellBootstrapUrl() {
    return "" + getShellBootstrapHost() + REACT_SHELL_BOOTSTRAPPER_API;
}
function setO365ShellData(o365Shell, navBarData) {
    o365Shell.SetData(navBarData);
}
/**
 * Gets the O365Shell object, once it's loaded. This will also load the shell CSS
 */
function getSuiteNavShell(cssUrl, jsUrl, suiteNavModel) {
    _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["Validate"].isNonemptyString(cssUrl, 'cssUrl');
    _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["Validate"].isNonemptyString(jsUrl, 'jsUrl');
    var element = document.createElement('link');
    element.rel = 'stylesheet';
    element.type = 'text/css';
    element.href = cssUrl;
    document.head.appendChild(element);
    // Load themable CSS if we are rendering a fallback shell (e.g. on-prem)
    if (suiteNavModel && suiteNavModel.NavBarData && suiteNavModel.NavBarData.ClientData) {
        try {
            var clientData = JSON.parse(suiteNavModel.NavBarData.ClientData);
            if (clientData && clientData.IsFallbackShell) {
                // tslint:disable-next-line: no-floating-promises
                __webpack_require__.e(/*! import() | sp-suite-nav-theming */ "vendors~sp-suite-nav-theming").then(__webpack_require__.bind(null, /*! @ms/odsp-utilities/lib/theming/SuiteNavTheming */ "Q94h")).then(function (suiteNavTheming) { return suiteNavTheming.loadFallbackShellThemableCss(); });
            }
        }
        catch (errClientData) {
            // Ignore error parsing ClientData
        }
    }
    return _microsoft_sp_loader__WEBPACK_IMPORTED_MODULE_5__["SPComponentLoader"].loadScript(jsUrl);
}
function isCacheOutdated() {
    // 'Outdated' means:
    // - it's more than 24 hours old
    // - it was not cached in the current browsing session (only applies if sessionStorage available)
    var cacheDate = Date.parse(cache.getValue(DATE_KEY));
    var currentDate = new Date();
    var cachedThisSession = cache.getValue(SESSION_KEY, _ms_odsp_utilities_lib_models_store_DataStoreCachingType__WEBPACK_IMPORTED_MODULE_7__["default"].session);
    return (isNaN(cacheDate) ||
        currentDate.getTime() - cacheDate > 24 * 60 * 60 * 1000 ||
        (_ms_odsp_utilities_lib_models_store_BaseDataStore__WEBPACK_IMPORTED_MODULE_6__["default"].hasStorageType(_ms_odsp_utilities_lib_models_store_DataStoreCachingType__WEBPACK_IMPORTED_MODULE_7__["default"].session) && !cachedThisSession));
}
/**
 * Create a log entry for logging
 * @param moduleName - represents the module that the logger was called in
 * @param errorMessage - represents the error string that occured
 */
function createSuiteNavErrorLogEntry(moduleName, errorMessage) {
    _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_3__["_TraceLogger"].logVerbose(logSource, 'SuiteNavManager ' + moduleName + ' ' + errorMessage);
}
function isSuiteNavNewFlowFlightEnabled() {
    return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["_SPFlight"].isEnabled(1309 /* SPClientSuiteNavCommon */);
}
function isLoadShellPhase2FlightEnabled() {
    return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["_SPFlight"].isEnabled(1812 /* LoadSecondPhaseShellResourcesImmediately */);
}
function isSPSuiteNavFeedbackFlightEnabled() {
    return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["_SPFlight"].isEnabled(1836 /* SPSuiteNavFeedback */);
}
function isSuiteNavThinHeaderFlightEnabled() {
    return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["_SPFlight"].isEnabled(621 /* EnableThinSuiteNav */);
}


/***/ }),

/***/ "I6O9":
/*!***************************************!*\
  !*** external "@microsoft/sp-loader" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_I6O9__;

/***/ }),

/***/ "J5pV":
/*!********************************!*\
  !*** ./lib/FlexPaneWrapper.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * @Copyright (c) Microsoft Corporation.  All rights reserved.
 *
 * @file Wrapper around the O365Shell.FlexPane global, preventing other files
 * from needing to access the global
 */
var FlexPaneWrapper = /** @class */ (function () {
    function FlexPaneWrapper() {
    }
    FlexPaneWrapper.prototype.OpenFlexPaneForProvider = function (provider) {
        try {
            return O365Shell.FlexPane.OpenFlexPaneForProvider(provider);
        }
        catch (e) {
            return false;
        }
    };
    FlexPaneWrapper.prototype.CloseFlexPaneForProvider = function (provider) {
        try {
            O365Shell.FlexPane.CloseFlexPaneForProvider(provider);
        }
        catch (e) {
            // do nothing
        }
    };
    return FlexPaneWrapper;
}());
/* harmony default export */ __webpack_exports__["default"] = (FlexPaneWrapper);


/***/ }),

/***/ "K9kD":
/*!***************************************!*\
  !*** external "@ms/odsp-core-bundle" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_K9kD__;

/***/ }),

/***/ "LDNF":
/*!********************************************!*\
  !*** ./lib/search/getSearchShimPromise.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getSearchShimPromise; });
/* harmony import */ var _SuiteNavManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../SuiteNavManager */ "FMHC");

/**
 * Gets the O365 shell search shim safely.
 *
 * @param serviceScope - Service scope used to get the o365shell
 * @returns A promise returning the search shim
 * @alpha
 */
function getSearchShimPromise(serviceScope) {
    return new Promise(function (resolve, reject) {
        if (!serviceScope) {
            reject(Error('serviceScope is undefined.'));
        }
        serviceScope
            .consume(_SuiteNavManager__WEBPACK_IMPORTED_MODULE_0__["default"].serviceKey)
            .o365ShellWrapperPromise.then(function (o365Shell) {
            if (!o365Shell) {
                reject(Error('o365Shell is undefined.'));
            }
            o365Shell.OnHasMember('Search', function () {
                resolve(o365Shell.Search);
            });
        })
            .catch(function (err) { return reject(err); });
    });
}


/***/ }),

/***/ "M8ir":
/*!**********************************************************!*\
  !*** ../sp-search-common/lib/serviceEnvironmentUtils.js ***!
  \**********************************************************/
/*! exports provided: getServiceEnvironment, isGccModerate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getServiceEnvironment", function() { return getServiceEnvironment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isGccModerate", function() { return isGccModerate; });
var gccFarmPrefixes = [
    'us_2_',
    'us_86_',
    'us_96_',
    'us_105_',
    'us_265_',
    'us_266_',
    'us_267_',
    'us_268_',
    'us_269_',
    'us_270_'
];
function getServiceEnvironment(_a) {
    var webAbsoluteUrl = _a.webAbsoluteUrl, farmLabel = _a.farmLabel, env2 = _a.env2, farmSettings = _a.farmSettings;
    var _b;
    if (env2 === 'o365test' || env2 === 'onebox' || env2 === 'edog') {
        return env2;
    }
    if (webAbsoluteUrl.toLowerCase().indexOf('microsoft.sharepoint-df.com') > -1) {
        return 'spdf';
    }
    if ((_b = farmSettings) === null || _b === void 0 ? void 0 : _b.ExternalService_searchcloudenvironment) {
        var searchcloudenvironment = farmSettings
            .ExternalService_searchcloudenvironment;
        return searchcloudenvironment === 'spdf' ? 'prodbubble' : searchcloudenvironment;
    }
    return isGccModerate(farmLabel) ? 'gcc' : env2;
}
function isGccModerate(farmLabel) {
    return (Boolean(farmLabel) && gccFarmPrefixes.some(function (prefix) { return farmLabel.toLowerCase().indexOf(prefix) === 0; }));
}


/***/ }),

/***/ "NEjr":
/*!*************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@1js/search-logger@0.0.36_react@16.9.0/node_modules/@1js/search-logger/lib/performance.js ***!
  \*************************************************************************************************************************************************/
/*! exports provided: measure, now, mark, getEntriesByType, getEntriesByName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _1js_search_logger_utils_lib_performance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @1js/search-logger-utils/lib/performance */ "qLHi");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "measure", function() { return _1js_search_logger_utils_lib_performance__WEBPACK_IMPORTED_MODULE_0__["measure"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "now", function() { return _1js_search_logger_utils_lib_performance__WEBPACK_IMPORTED_MODULE_0__["now"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mark", function() { return _1js_search_logger_utils_lib_performance__WEBPACK_IMPORTED_MODULE_0__["mark"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getEntriesByType", function() { return _1js_search_logger_utils_lib_performance__WEBPACK_IMPORTED_MODULE_0__["getEntriesByType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getEntriesByName", function() { return _1js_search_logger_utils_lib_performance__WEBPACK_IMPORTED_MODULE_0__["getEntriesByName"]; });




/***/ }),

/***/ "PFhq":
/*!*************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@1js/search-scope@0.0.35_react@16.9.0/node_modules/@1js/search-scope/lib/utils/isSiteScopeVertical.js ***!
  \*************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Determines if a vertical has site scope, based on its name.
 *
 * If verticalName contains "site" or "site"+[anything but an "s" alone], the
 * match() is truthy.
 *
 * Examples:
 * "site"    = match() truthy  -> return true
 * "siteall" = match() truthy  -> return true
 * "index"   = match() falsy   -> return false
 * "sites"   = match() falsy   -> return false
 *
 * @param verticalName  The vertical name, e.g. "sitefiles" or "files".
 */
/* harmony default export */ __webpack_exports__["default"] = (function (verticalName) {
    return !!(verticalName === null || verticalName === void 0 ? void 0 : verticalName.match("site(?!s$)"));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXNTaXRlU2NvcGVWZXJ0aWNhbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlscy9pc1NpdGVTY29wZVZlcnRpY2FsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7O0dBYUc7QUFFSCxnQkFBZSxVQUFDLFlBQXVDO0lBQ3JELE9BQUEsQ0FBQyxFQUFDLFlBQVksYUFBWixZQUFZLHVCQUFaLFlBQVksQ0FBRSxLQUFLLENBQUMsWUFBWSxFQUFDO0FBQW5DLENBQW1DLEVBQUMifQ==

/***/ }),

/***/ "Pk8u":
/*!**********************************************!*\
  !*** external "@microsoft/sp-lodash-subset" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_Pk8u__;

/***/ }),

/***/ "S309":
/*!**********************************!*\
  !*** ./lib/O365ShellPromises.js ***!
  \**********************************/
/*! exports provided: O365ShellPromises */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "O365ShellPromises", function() { return O365ShellPromises; });
var WINDOW_LOAD_PROMISE = 'o365ShellLoadPromise';
var WINDOW_RENDER_PROMISE = 'o365ShellRenderPromise';
var WINDOW_POSTRENDER_PROMISE = 'o365ShellPostRenderPromise';
/**
 * Declares a set of promises that are provided from the server-side code to load the suiteNav.
 * @alpha
 */
var O365ShellPromises = /** @class */ (function () {
    function O365ShellPromises() {
    }
    /**
     * Returns a promise that resolves when the shell bootstrapper has finished loading.
     */
    O365ShellPromises.GetLoadPromise = function () {
        return window[WINDOW_LOAD_PROMISE];
    };
    /**
     * Returns a promise that resolves when the shell has finished rendering.
     */
    O365ShellPromises.GetRenderPromise = function () {
        return window[WINDOW_RENDER_PROMISE];
    };
    /**
     * Returns a promise that resolves when the shell has finished the post-render phase.
     */
    O365ShellPromises.GetPostRenderPromise = function () {
        return window[WINDOW_POSTRENDER_PROMISE];
    };
    return O365ShellPromises;
}());



/***/ }),

/***/ "US/c":
/*!********************************************************!*\
  !*** ./lib/search/setPersonSuggestionClickBehavior.js ***!
  \********************************************************/
/*! exports provided: setPersonSuggestionClickBehavior */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setPersonSuggestionClickBehavior", function() { return setPersonSuggestionClickBehavior; });
/* harmony import */ var _initPersonSuggestionClickHandling__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./initPersonSuggestionClickHandling */ "Dy1t");

function makeOpenLivePersonaCardClickHandler(behavior) {
    var openCard = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return behavior
            .initializeLPC()
            .then(function (success) {
            // tslint:disable-next-line:no-any
            var LPC = window.LPC;
            if (success && LPC && LPC.openCard) {
                LPC.openCard.apply(LPC, args);
            }
        })
            .catch(function (error) {
            if (true) {
                console.error('Error initializing LPC and opening card');
                console.error(error);
            }
        });
    };
    return function (event, props) {
        event.preventDefault();
        openCard(document.body, {
            externalAppSessionCorrelationId: behavior.pageCorrelationId,
            personaInfo: {
                identifiers: {
                    PersonaType: 'User',
                    AadObjectId: props.id.split('@')[0],
                    Upn: props.userUpn
                }
            },
            behavior: {
                onCardOpen: props.onClick,
                locationToOpen: 'ExpandedView'
            }
        });
    };
}
var scopeToPersonClickHandler = function (event, props) {
    event.preventDefault();
    if (props.searchBox) {
        props.searchBox.submitSearch('', {
            type: 'scope',
            scopeType: 'person',
            data: {
                id: props.id + "|" + props.userUpn
            }
        });
        props.searchBox.setSearchText('');
    }
    if (props.onClick) {
        props.onClick();
    }
};
function setPersonSuggestionClickBehavior(behavior) {
    var throwUnsupportedError = function (_) {
        throw new Error('Unsupported click behavior');
    };
    switch (behavior.action) {
        case 'openLivePersonaCard':
            Object(_initPersonSuggestionClickHandling__WEBPACK_IMPORTED_MODULE_0__["setPersonSuggestionClickHandler"])(makeOpenLivePersonaCardClickHandler(behavior));
            break;
        case 'scopeToPerson':
            Object(_initPersonSuggestionClickHandling__WEBPACK_IMPORTED_MODULE_0__["setPersonSuggestionClickHandler"])(scopeToPersonClickHandler);
            break;
        case 'ignore':
            Object(_initPersonSuggestionClickHandling__WEBPACK_IMPORTED_MODULE_0__["setPersonSuggestionClickHandler"])(function (event) { return event.preventDefault(); });
            break;
        default:
            // behavior should now be narrowed to type never
            throwUnsupportedError(behavior);
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

/***/ "X+PM":
/*!*********************************************!*\
  !*** external "@microsoft/sp-page-context" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_X_PM__;

/***/ }),

/***/ "ZG7e":
/*!*************************************************!*\
  !*** ./lib/dataAccess/SPOSuiteNavDataSource.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/sp-diagnostics */ "ut3N");
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _microsoft_sp_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/sp-http */ "vlQI");
/* harmony import */ var _microsoft_sp_http__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_http__WEBPACK_IMPORTED_MODULE_1__);
/**
 * @file SPOSuiteNavDataSource.ts
 * @Copyright (c) Microsoft Corporation.  All rights reserved.
 */


var SPOSuiteNavDataSource = /** @class */ (function () {
    /**
     * Initializes a new instance of the SPO
     * @TODO Task 161973 Add PageContext and set the
     * webPermissionMask/suiteNavData.UserDisplayName/webServerRelativeUrl/currentUICultureName
     */
    function SPOSuiteNavDataSource(httpClient, currentUICultureName, webServerRelativeUrl) {
        this.suiteNavService = 0 /* SPO */;
        this._currentUICultureName = currentUICultureName;
        this._spHttpClient = httpClient;
        this._siteRelUrl = webServerRelativeUrl === '/' ? '' : webServerRelativeUrl;
    }
    // Downloads the SPO version of the SuiteNavData
    SPOSuiteNavDataSource.prototype.loadData = function () {
        var url = this._siteRelUrl +
            '/_layouts/15/online/handlers/SpoSuiteLinks.ashx?Locale=' +
            this._currentUICultureName +
            '&v=2&mobilereq=0&msajax=1';
        var qosMonitor = new _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_0__["_QosMonitor"]('SPOSuiteNavDataSource');
        return this._spHttpClient
            .post(url, _microsoft_sp_http__WEBPACK_IMPORTED_MODULE_1__["SPHttpClient"].configurations.v1, {})
            .then(function (response) {
            if (response.status !== 200 || response.headers.get('SharePointError')) {
                var errorMessage = 'Failed to retrieve SPO SuiteNavData';
                var error = new Error(errorMessage);
                _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_0__["_TraceLogger"].logVerbose(SPOSuiteNavDataSource._logSource, errorMessage);
                qosMonitor.writeUnexpectedFailure('FailedToRetrieveSPOSuiteNavData', error, {
                    responseStatus: response ? response.status : '',
                    correlationId: response ? response.correlationId : ''
                });
                return Promise.reject(errorMessage);
            }
            qosMonitor.writeSuccess();
            return response.json().then(function (jsonResponse) {
                return jsonResponse;
            });
        });
    };
    // @TODO Bug 169685 change to readonly
    SPOSuiteNavDataSource._logSource = _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_0__["_LogSource"].create('SPOSuiteNavDataSource');
    return SPOSuiteNavDataSource;
}());
/* harmony default export */ __webpack_exports__["default"] = (SPOSuiteNavDataSource);


/***/ }),

/***/ "bKG0":
/*!*********************************************!*\
  !*** ./lib/SuiteNavManagerConfiguration.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _models_SuiteNavLinkIds__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./models/SuiteNavLinkIds */ "ogh3");
/**
 * @Copyright (c) Microsoft Corporation.  All rights reserved.
 *
 * @file Represents a set of app specific configuration for the suite nav manager.
 */


var SUITE_NAV_USE_SPO_BEHAVIOR_KILL_SWITCH = _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Guid"].parse('22F8084E-9DEB-4642-B63E-E70A7F87C998');
/**
 * SuiteNavManagerConfiguration for the BaseApplication.
 * @internal
 */
var SuiteNavManagerConfiguration = /** @class */ (function () {
    /**
     * Initializes a new instance of the SuiteNavManagerConfiguration.
     * @param suiteNavConfig - Data used to construct an instance of the SuiteNavManagerConfiguration.
     */
    function SuiteNavManagerConfiguration(suiteNavConfig) {
        this.currentUICultureName = suiteNavConfig.currentUICultureName;
        this.customButtonData = suiteNavConfig.customButtonData;
        this.customHelpPaneArticleId = suiteNavConfig.customHelpPaneArticleId;
        this.shouldRenderFeedbackButton = !!suiteNavConfig.shouldRenderFeedbackButton;
        this.feedbackMetadataCallback = suiteNavConfig.feedbackMetadataCallback;
        this.hamburgerCallback = undefined;
        this.o365ShellRenderSettings = {
            collapseO365Settings: true,
            disableDelayLoad: false,
            disableShellPlus: false,
            layout: 'Mouse',
            top: undefined // tslint:disable-line:no-any
        };
        this.preloadedData = suiteNavConfig.preloadedData;
        this.sharedComponents = suiteNavConfig.sharedComponents;
        this.suiteNavPostRenderCallback = undefined;
        this.systemUserKey = suiteNavConfig.systemUserKey || '';
        this.userDisplayName = suiteNavConfig.userDisplayName;
        this.webServerRelativeUrl = suiteNavConfig.webServerRelativeUrl;
        this.appHeaderLinkText = suiteNavConfig.appHeaderLinkText;
        this.appHeaderLinkUrl = suiteNavConfig.appHeaderLinkUrl;
        this._isSuiteNavDisabled = !!suiteNavConfig.disableSuiteNav;
        this._isSuiteNavLoadingDeferred = !!suiteNavConfig.deferSuiteNavLoading;
        this._settingsLinks = suiteNavConfig.settingsData;
        this._signoutUrl = suiteNavConfig.signoutUrl;
        this._siteClientTag = suiteNavConfig.siteClientTag;
        this._webTemplateId = suiteNavConfig.webTemplateId;
        if (!_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPKillSwitch"].isActivated(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Guid"].parse('bc792189-6879-4d06-9c7d-0fcac8abb279'), '04/05/2019', 'SuiteSearchBoxRenderSettings')) {
            var disableSearchBox = !!suiteNavConfig.disableSuiteNavSearchBox;
            (this.o365ShellRenderSettings.enableSearchUX =
                SuiteNavManagerConfiguration.isSearchBoxInHeaderFlighted() && !disableSearchBox),
                (this.o365ShellRenderSettings.initialSearchUXVisibility = false);
        }
    }
    SuiteNavManagerConfiguration.isSearchBoxInHeaderFlighted = function () {
        return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPFlight"].isEnabled(1240); // SPPagesSuiteSearchBox
    };
    SuiteNavManagerConfiguration.prototype.isSuiteNavDisabled = function () {
        return this._isSuiteNavDisabled;
    };
    /**
     * Function for disabling the suiteNav from loading
     */
    SuiteNavManagerConfiguration.prototype.disableSuiteNav = function () {
        this._isSuiteNavDisabled = true;
    };
    SuiteNavManagerConfiguration.prototype.isSuiteNavLoadingDeferred = function () {
        return this._isSuiteNavLoadingDeferred;
    };
    /**
     * Function for defering the suiteNav loading
     */
    SuiteNavManagerConfiguration.prototype.deferSuiteNavLoading = function () {
        this._isSuiteNavLoadingDeferred = true;
    };
    /**
     * Function for modifying the suite nav data that came back from the service.
     * @param suiteNavModel - Model is used to modify the resulting suiteNavData
     * @param themeDictionary - Color palette used to change the suiteNav theme colors
     * @returns the new SuiteNav data
     */
    SuiteNavManagerConfiguration.prototype.modifySuiteNavData = function (suiteNavModel) {
        var suiteNavData = suiteNavModel.NavBarData;
        if (!_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPKillSwitch"].isActivated(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Guid"].parse('5bafa34c-ba7d-4de4-97e8-1cdfb4ce051e'), '3/2/2018', 'Add SharePoint text in SuiteNav Banner')) {
            // This link is mandatory for showing the "SharePoint" text in the Modern SuiteNav.
            suiteNavData.CurrentMainLinkElementID = _models_SuiteNavLinkIds__WEBPACK_IMPORTED_MODULE_1__["default"].SITES;
        }
        suiteNavData.CurrentWorkloadSettingsSubLinks =
            this._settingsLinks && this._settingsLinks.length > 0 ? this._settingsLinks : undefined;
        suiteNavData.FeedbackLink = undefined;
        if (suiteNavData.SignOutLink && this._signoutUrl) {
            suiteNavData.SignOutLink.Url = this._signoutUrl;
        }
        if (suiteNavData.HelpLink) {
            suiteNavData.HelpLink.Url = 'https://go.microsoft.com/fwlink/p/?linkid=827181';
        }
        if (!_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPKillSwitch"].isActivated(SUITE_NAV_USE_SPO_BEHAVIOR_KILL_SWITCH, '9/08/2017', 'SuiteNavUseSPOBehaviors')) {
            var webTemplate = this._webTemplateId;
            var isMySite = webTemplate === "21" /* mySite */ || webTemplate === "54" /* mySiteHost */;
            // Set SPOBehaviors to true outside of the MySites and MySiteHosts.
            // This prevents certain options from appearing in the nav bar
            // that should not be there, like the old Change The Look.
            suiteNavData.UseSPOBehaviors = !isMySite;
        }
        return suiteNavData;
    };
    /**
     * {@inheritDoc ISuiteNavManagerConfiguration.getActionsMap}
     */
    SuiteNavManagerConfiguration.prototype.getActionsMap = function () {
        return {};
    };
    Object.defineProperty(SuiteNavManagerConfiguration.prototype, "userId", {
        /**
         * Gets the user Id
         */
        get: function () {
            if (this.systemUserKey !== '') {
                return this.systemUserKey.substring(this.systemUserKey.lastIndexOf('|') + 1, this.systemUserKey.indexOf('@'));
            }
            else {
                return '';
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiteNavManagerConfiguration.prototype, "cacheToken", {
        /**
         * Gets the cache token.
         * @returns the site client tag or empty string
         */
        get: function () {
            /**
             * The site client tag will be something like '0$$16.0.3912.1218' -- the only part
             * we care about is before the $$. This number will be incremented if the user's theme changes.
             */
            var clientTag = this._siteClientTag;
            if (clientTag !== undefined) {
                return clientTag.substring(0, clientTag.indexOf('$$'));
            }
            return '';
        },
        enumerable: true,
        configurable: true
    });
    return SuiteNavManagerConfiguration;
}());
/* harmony default export */ __webpack_exports__["default"] = (SuiteNavManagerConfiguration);


/***/ }),

/***/ "cDcd":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_cDcd__;

/***/ }),

/***/ "cKBR":
/*!**********************************************!*\
  !*** ../sp-search-common/lib/getScenario.js ***!
  \**********************************************/
/*! exports provided: getScenario */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getScenario", function() { return getScenario; });
var SPSYSTEMPAGES_APP_ID = '7497f5b1-726b-46d8-9798-6be6bbef75c5';
var SPPAGES_APP_ID = 'b6917cb1-93a0-4b97-a84d-7cf49975d4ec';
var SPHOME_APP_ID = '1f019ae1-2de1-4f44-b723-00a6ec1d7445';
var SPSEARCH_APP_ID = 'c1c115a8-896b-4a53-a73c-cde6b8ca00f8';
var SPLIST_APP_ID = '9f012051-e030-4487-9eb7-3365d03be182';
function getScenario(applicationId) {
    var href = window.location.href.toLowerCase();
    switch (applicationId) {
        case SPPAGES_APP_ID:
            if (href.indexOf('/_layouts/15/search.aspx') !== -1) {
                return 'SPO.Search';
            }
            return 'SPO.Page';
        case SPSYSTEMPAGES_APP_ID:
            if (href.indexOf('/_layouts/15/search.aspx') !== -1) {
                return 'SPO.Search';
            }
            else if (href.indexOf('/_layouts/15/news.aspx') !== -1) {
                return 'SPO.Page.News';
            }
            return 'SPO.Page.SystemPage';
        case SPSEARCH_APP_ID:
            return 'SPO.Search';
        case SPHOME_APP_ID:
            return 'SPO.Home';
        case SPLIST_APP_ID:
            return 'SPO.ListHost';
        default: {
            return applicationId;
        }
    }
}


/***/ }),

/***/ "cj/x":
/*!***********************************************************!*\
  !*** ../sp-search-common/lib/getSharePointEnvironment.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getSharePointEnvironment; });
function getSharePointEnvironment(environment, webAbsoluteUrl) {
    return environment &&
        environment === 'prodbubble' &&
        webAbsoluteUrl &&
        webAbsoluteUrl.toLowerCase().indexOf('microsoft.sharepoint-df.com') > -1
        ? 'spdf'
        : environment;
}


/***/ }),

/***/ "duOp":
/*!**************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@1js/search-dispatcher@0.0.31_react@16.9.0/node_modules/@1js/search-dispatcher/lib/createDispatcher.js ***!
  \**************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createDispatcher; });
/**
 * Creates a minimal dispatcher instance. Note that the dispatcher lacks
 * features like argument validation to keep it as tiny as possible.
 */
function createDispatcher() {
    var listeners = [];
    return {
        register: function (callback) {
            return "" + (listeners.push(callback) - 1);
        },
        unregister: function (id) {
            listeners[parseInt(id, 10)] = 0;
        },
        dispatch: function (payload) {
            listeners.forEach(function (listener) { return listener && listener(payload); });
        },
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlRGlzcGF0Y2hlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9jcmVhdGVEaXNwYXRjaGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBOzs7R0FHRztBQUNILE1BQU0sQ0FBQyxPQUFPLFVBQVUsZ0JBQWdCO0lBQ3RDLElBQU0sU0FBUyxHQUFzQyxFQUFFLENBQUM7SUFDeEQsT0FBTztRQUNMLFFBQVEsRUFBUixVQUFTLFFBQThCO1lBQ3JDLE9BQU8sTUFBRyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBRSxDQUFDO1FBQzNDLENBQUM7UUFDRCxVQUFVLEVBQVYsVUFBVyxFQUFVO1lBQ25CLFNBQVMsQ0FBQyxRQUFRLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2xDLENBQUM7UUFDRCxRQUFRLEVBQVIsVUFBUyxPQUFVO1lBQ2pCLFNBQVMsQ0FBQyxPQUFPLENBQUMsVUFBQyxRQUFRLElBQUssT0FBQSxRQUFRLElBQUksUUFBUSxDQUFDLE9BQU8sQ0FBQyxFQUE3QixDQUE2QixDQUFDLENBQUM7UUFDakUsQ0FBQztLQUNGLENBQUM7QUFDSixDQUFDIn0=

/***/ }),

/***/ "iIlt":
/*!***************************************!*\
  !*** ./lib/models/IShellBaseTheme.js ***!
  \***************************************/
/*! exports provided: DEFAULT_APP_BRAND_THEME */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_APP_BRAND_THEME", function() { return DEFAULT_APP_BRAND_THEME; });
/**
 * @Copyright (c) Microsoft Corporation.  All rights reserved.
 *
 * Non-standard casing is to match what an external script expects.
 */
var DEFAULT_APP_BRAND_THEME = {
    Primary: '#0078D4'
};


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
/*! exports provided: SuiteNavManager, DEFAULT_SUITENAV_HEIGHT, DEFAULT_SUITENAV_THIN_HEIGHT, SuiteNavManagerConfiguration, O365ShellPromises, BaseSearchBoxInitializer, createSearchInstrumenterOnce, createSearchPrefetchStateOnce, addSearchBoxProviderConfigUpdater, unsecureShellSearch, shellSearch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SuiteNavManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SuiteNavManager */ "FMHC");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SuiteNavManager", function() { return _SuiteNavManager__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_SUITENAV_HEIGHT", function() { return _SuiteNavManager__WEBPACK_IMPORTED_MODULE_0__["DEFAULT_SUITENAV_HEIGHT"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_SUITENAV_THIN_HEIGHT", function() { return _SuiteNavManager__WEBPACK_IMPORTED_MODULE_0__["DEFAULT_SUITENAV_THIN_HEIGHT"]; });

/* harmony import */ var _SuiteNavManagerConfiguration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SuiteNavManagerConfiguration */ "bKG0");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SuiteNavManagerConfiguration", function() { return _SuiteNavManagerConfiguration__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _O365ShellPromises__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./O365ShellPromises */ "S309");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "O365ShellPromises", function() { return _O365ShellPromises__WEBPACK_IMPORTED_MODULE_2__["O365ShellPromises"]; });

/* harmony import */ var _search_BaseSearchBoxInitializer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./search/BaseSearchBoxInitializer */ "vMVo");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaseSearchBoxInitializer", function() { return _search_BaseSearchBoxInitializer__WEBPACK_IMPORTED_MODULE_3__["BaseSearchBoxInitializer"]; });

/* harmony import */ var _search_createSearchInstrumenterOnce__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./search/createSearchInstrumenterOnce */ "A/Iv");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createSearchInstrumenterOnce", function() { return _search_createSearchInstrumenterOnce__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _search_createSearchPrefetchStateOnce__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./search/createSearchPrefetchStateOnce */ "tFCy");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createSearchPrefetchStateOnce", function() { return _search_createSearchPrefetchStateOnce__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _search_updaters__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./search/updaters */ "wHdv");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addSearchBoxProviderConfigUpdater", function() { return _search_updaters__WEBPACK_IMPORTED_MODULE_6__["addSearchBoxProviderConfigUpdater"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "unsecureShellSearch", function() { return _search_updaters__WEBPACK_IMPORTED_MODULE_6__["unsecureShellSearch"]; });

/* harmony import */ var _search_getSearchShimPromise__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./search/getSearchShimPromise */ "LDNF");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "shellSearch", function() { return _search_getSearchShimPromise__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/**
 * Suite Nav library for applications
 *
 * @packagedocumentation
 */










/***/ }),

/***/ "ogh3":
/*!***************************************!*\
  !*** ./lib/models/SuiteNavLinkIds.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * @Copyright (c) Microsoft Corporation.  All rights reserved.
 *
 * @file Strings for the 'Id' option of suite nav links.
 * These are defined by the suite nav team and are used to correlate icons/colors with links.
 */
var SuiteNavLinkIds = /** @class */ (function () {
    function SuiteNavLinkIds() {
    }
    // Settings menu
    SuiteNavLinkIds.CUSTOM_SETTINGS_1 = 'WorkloadSettingsSubLinks1';
    SuiteNavLinkIds.CUSTOM_SETTINGS_2 = 'WorkloadSettingsSubLinks2';
    SuiteNavLinkIds.CUSTOM_SETTINGS_3 = 'WorkloadSettingsSubLinks3';
    SuiteNavLinkIds.FEEDBACK = 'ShellFeedback';
    SuiteNavLinkIds.DIAGNOSTICS = 'Diagnostics';
    SuiteNavLinkIds.O365_SETTINGS = 'ShellO365Settings'; // 'O365 settings'
    SuiteNavLinkIds.ADD_APP = 'SuiteMenu_zz5_MenuItemCreate'; // 'Add an app'
    SuiteNavLinkIds.CREATE_PAGE = 'SuiteMenu_MenuItemCreatePage'; // 'Create a publishing page'
    SuiteNavLinkIds.SITE_CONTENTS = 'SuiteMenu_zz6_MenuItem_ViewAllSiteContents'; // 'Site contents'
    SuiteNavLinkIds.SITE_SETTINGS = 'SuiteMenu_zz7_MenuItem_Settings'; // 'Site settings'
    SuiteNavLinkIds.USER_ACTIVITY = 'UserActivity'; // User activity dialog
    // Person menu
    SuiteNavLinkIds.ABOUT_ME = 'ShellAboutMe'; // 'About me'/'Edit profile'
    SuiteNavLinkIds.SETTINGS = 'ShellSettings'; // 'Account settings' (ODC)
    SuiteNavLinkIds.MY_SETTINGS = 'SuiteMenu_zz2_ID_PersonalInformation'; // 'My Settings' (ODB)
    SuiteNavLinkIds.SIGN_OUT = 'ShellSignout';
    // Help menu
    SuiteNavLinkIds.HELP = 'HelpLink';
    SuiteNavLinkIds.COMMUNITY = 'ShellCommunity';
    SuiteNavLinkIds.PRIVACY = 'ShellPrivacy';
    SuiteNavLinkIds.LEGAL = 'ShellLegal';
    // App switcher
    SuiteNavLinkIds.ADMIN = 'ShellAdmin';
    SuiteNavLinkIds.MAIL = 'ShellMail'; // 'Outlook'/'Outlook.com'
    SuiteNavLinkIds.CALENDAR = 'ShellCalendar';
    SuiteNavLinkIds.PEOPLE = 'ShellPeople';
    SuiteNavLinkIds.ONEDRIVE = 'ShellDocuments'; // 'OneDrive'
    SuiteNavLinkIds.SHAREPOINT = 'ShellSharepoint';
    SuiteNavLinkIds.WORD = 'ShellWordOnline';
    SuiteNavLinkIds.EXCEL = 'ShellExcelOnline';
    SuiteNavLinkIds.POWERPOINT = 'ShellPowerPointOnline';
    SuiteNavLinkIds.ONENOTE = 'ShellOneNoteOnline';
    SuiteNavLinkIds.SITES = 'ShellSites';
    SuiteNavLinkIds.YAMMER = 'ShellYammer';
    SuiteNavLinkIds.TASKS = 'ShellTasks';
    SuiteNavLinkIds.POWER_BI = 'ShellPowerBI';
    SuiteNavLinkIds.DELVE = 'ShellOfficeGraph'; // 'Delve'
    SuiteNavLinkIds.VIDEO = 'ShellVideo';
    SuiteNavLinkIds.ALCHEMY = 'ShellAlchemy';
    SuiteNavLinkIds.SMILE = 'ShellSendASmile';
    // Workload Id
    SuiteNavLinkIds.SHAREPOINT_WORKLOAD = 'Sharepoint';
    return SuiteNavLinkIds;
}());
/* harmony default export */ __webpack_exports__["default"] = (SuiteNavLinkIds);


/***/ }),

/***/ "qLHi":
/*!************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@1js/search-logger-utils@0.6.4_react@16.9.0/node_modules/@1js/search-logger-utils/lib/performance.js ***!
  \************************************************************************************************************************************************************/
/*! exports provided: measure, now, mark, getEntriesByType, getEntriesByName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "measure", function() { return measure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "now", function() { return now; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mark", function() { return mark; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEntriesByType", function() { return getEntriesByType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEntriesByName", function() { return getEntriesByName; });
var start = new Date().valueOf();
var marks = {};
var timeline = [];
var perfApiFeatureSupported = function (feature) {
    return window.performance && performance[feature];
};
var doMeasure = function (name, startMark, endMark) {
    try {
        window.performance.measure(name, startMark, endMark);
    }
    catch (e) {
        return null;
    }
    var measures = window.performance.getEntriesByName(name, "measure");
    if (measures.length > 0) {
        return measures[measures.length - 1];
    }
    return null;
};
var doApproximateMeasure = function (name, startMark, endMark) {
    var startMarkTime = marks[startMark];
    var endMarkTime = endMark ? marks[endMark] : now();
    if (startMarkTime && endMarkTime) {
        return {
            duration: endMarkTime - startMarkTime,
            entryType: "measure",
            name: name,
            startTime: startMarkTime,
            toJSON: function () {
                return null;
            },
        };
    }
    return null;
};
var doApproximateMark = function (name) {
    timeline.push({
        entryType: "mark",
        name: name,
        startTime: start,
        duration: 0,
        toJSON: function () {
            return null;
        },
    });
    marks[name] = now();
};
var measure = perfApiFeatureSupported("measure")
    ? doMeasure
    : doApproximateMeasure;
var now = perfApiFeatureSupported("now")
    ? performance.now.bind(window.performance)
    : function () { return new Date().valueOf() - start; };
var mark = perfApiFeatureSupported("mark")
    ? window.performance.mark.bind(window.performance)
    : doApproximateMark;
var getEntriesByType = perfApiFeatureSupported("getEntriesByType")
    ? window.performance.getEntriesByType.bind(window.performance)
    : function () { return []; };
var getEntriesByName = perfApiFeatureSupported("getEntriesByName")
    ? window.performance.getEntriesByName.bind(window.performance)
    : function () { return []; };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVyZm9ybWFuY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvcGVyZm9ybWFuY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsSUFBTSxLQUFLLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztBQUNuQyxJQUFNLEtBQUssR0FBOEIsRUFBRSxDQUFDO0FBQzVDLElBQU0sUUFBUSxHQUF1QixFQUFFLENBQUM7QUFFeEMsSUFBTSx1QkFBdUIsR0FBRyxVQUFDLE9BQWlDO0lBQ2hFLE9BQUEsTUFBTSxDQUFDLFdBQVcsSUFBSSxXQUFXLENBQUMsT0FBTyxDQUFDO0FBQTFDLENBQTBDLENBQUM7QUFFN0MsSUFBTSxTQUFTLEdBQUcsVUFDaEIsSUFBWSxFQUNaLFNBQWlCLEVBQ2pCLE9BQWdCO0lBRWhCLElBQUk7UUFDRixNQUFNLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsU0FBUyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0tBQ3REO0lBQUMsT0FBTyxDQUFDLEVBQUU7UUFDVixPQUFPLElBQUksQ0FBQztLQUNiO0lBRUQsSUFBTSxRQUFRLEdBQUcsTUFBTSxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFDdEUsSUFBSSxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtRQUN2QixPQUFPLFFBQVEsQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO0tBQ3RDO0lBRUQsT0FBTyxJQUFJLENBQUM7QUFDZCxDQUFDLENBQUM7QUFFRixJQUFNLG9CQUFvQixHQUFHLFVBQzNCLElBQVksRUFDWixTQUFpQixFQUNqQixPQUFnQjtJQUVoQixJQUFNLGFBQWEsR0FBRyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDdkMsSUFBTSxXQUFXLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO0lBQ3JELElBQUksYUFBYSxJQUFJLFdBQVcsRUFBRTtRQUNoQyxPQUFPO1lBQ0wsUUFBUSxFQUFFLFdBQVcsR0FBRyxhQUFhO1lBQ3JDLFNBQVMsRUFBRSxTQUFTO1lBQ3BCLElBQUksTUFBQTtZQUNKLFNBQVMsRUFBRSxhQUFhO1lBQ3hCLE1BQU0sRUFBTjtnQkFDRSxPQUFPLElBQUksQ0FBQztZQUNkLENBQUM7U0FDRixDQUFDO0tBQ0g7SUFFRCxPQUFPLElBQUksQ0FBQztBQUNkLENBQUMsQ0FBQztBQUVGLElBQU0saUJBQWlCLEdBQUcsVUFBVSxJQUFZO0lBQzlDLFFBQVEsQ0FBQyxJQUFJLENBQUM7UUFDWixTQUFTLEVBQUUsTUFBTTtRQUNqQixJQUFJLEVBQUUsSUFBSTtRQUNWLFNBQVMsRUFBRSxLQUFLO1FBQ2hCLFFBQVEsRUFBRSxDQUFDO1FBQ1gsTUFBTSxFQUFOO1lBQ0UsT0FBTyxJQUFJLENBQUM7UUFDZCxDQUFDO0tBQ0YsQ0FBQyxDQUFDO0lBQ0gsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDO0FBQ3RCLENBQUMsQ0FBQztBQUVGLE1BQU0sQ0FBQyxJQUFNLE9BQU8sR0FJVyx1QkFBdUIsQ0FBQyxTQUFTLENBQUM7SUFDL0QsQ0FBQyxDQUFDLFNBQVM7SUFDWCxDQUFDLENBQUMsb0JBQW9CLENBQUM7QUFFekIsTUFBTSxDQUFDLElBQU0sR0FBRyxHQUFpQix1QkFBdUIsQ0FBQyxLQUFLLENBQUM7SUFDN0QsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUM7SUFDMUMsQ0FBQyxDQUFDLGNBQU0sT0FBQSxJQUFJLElBQUksRUFBRSxDQUFDLE9BQU8sRUFBRSxHQUFHLEtBQUssRUFBNUIsQ0FBNEIsQ0FBQztBQUV2QyxNQUFNLENBQUMsSUFBTSxJQUFJLEdBQTJCLHVCQUF1QixDQUFDLE1BQU0sQ0FBQztJQUN6RSxDQUFDLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUM7SUFDbEQsQ0FBQyxDQUFDLGlCQUFpQixDQUFDO0FBRXRCLE1BQU0sQ0FBQyxJQUFNLGdCQUFnQixHQUdoQix1QkFBdUIsQ0FBQyxrQkFBa0IsQ0FBQztJQUN0RCxDQUFDLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQztJQUM5RCxDQUFDLENBQUMsY0FBTSxPQUFBLEVBQUUsRUFBRixDQUFFLENBQUM7QUFFYixNQUFNLENBQUMsSUFBTSxnQkFBZ0IsR0FHaEIsdUJBQXVCLENBQUMsa0JBQWtCLENBQUM7SUFDdEQsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUM7SUFDOUQsQ0FBQyxDQUFDLGNBQU0sT0FBQSxFQUFFLEVBQUYsQ0FBRSxDQUFDIn0=

/***/ }),

/***/ "qUy2":
/*!*****************************************!*\
  !*** ./lib/SuiteNavManagerStrings.resx ***!
  \*****************************************/
/*! exports provided: FeedbackAriaLabel, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"FeedbackAriaLabel\":\"Provide feedback to Microsoft\"}");

/***/ }),

/***/ "rHDF":
/*!**********************************************!*\
  !*** ../sp-search-common/lib/isGuestUser.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isGuestUser; });
function isGuestUser(context) {
    return !!(context && (context.isAnonymousGuestUser || context.isExternalGuestUser));
}


/***/ }),

/***/ "t+oi":
/*!**********************************************************!*\
  !*** ../sp-search-common/lib/isEligibleForPayForPlay.js ***!
  \**********************************************************/
/*! exports provided: isEligibleForPayForPlay */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEligibleForPayForPlay", function() { return isEligibleForPayForPlay; });
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _isGuestUser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isGuestUser */ "rHDF");


function isEligibleForPayForPlay(context) {
    var _a;
    if (_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPKillSwitch"].isActivated('2c558de4-b861-43fa-81b6-f367d9c6941e'
    /* '12/08/2020', '[stvikenv] Never use PFP for guest users or users without the 1240 flight enabled.' */
    )) {
        return true;
    }
    else {
        return (_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPFlight"].isEnabled(1240 /* SPPagesSuiteSearchBox */) &&
            !Object(_isGuestUser__WEBPACK_IMPORTED_MODULE_1__["default"])(context) &&
            !(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPFlight"].isEnabled(1810 /* OverrideSuiteNavSearch */) &&
                ((_a = context) === null || _a === void 0 ? void 0 : _a.searchBoxInNavBar) === 3 /* Hidden */));
    }
}


/***/ }),

/***/ "tFCy":
/*!*****************************************************!*\
  !*** ./lib/search/createSearchPrefetchStateOnce.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createSearchPrefetchStateOnce; });
/* harmony import */ var _ms_sp_search_common_lib_getCleanPuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ms/sp-search-common/lib/getCleanPuid */ "0Oc1");

var state;
/**
 * Creates the search prefetch library state the first time it is called.
 * Returns the created state on next invocations.
 *
 * @alpha
 */
// tslint:disable-next-line:export-name
function createSearchPrefetchStateOnce(createdBy, puid) {
    if (state) {
        return state;
    }
    try {
        puid = Object(_ms_sp_search_common_lib_getCleanPuid__WEBPACK_IMPORTED_MODULE_0__["default"])(puid);
    }
    catch (_a) {
        puid = 'HostAppFailedToProvidePuid';
    }
    return (state = {
        puid: puid || 'HostAppFailedToProvidePuid',
        cache: {
            createdBy: createdBy,
            createdAt: 0,
            participants: [],
            caches: {}
        }
    });
}


/***/ }),

/***/ "ut3N":
/*!********************************************!*\
  !*** external "@microsoft/sp-diagnostics" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_ut3N__;

/***/ }),

/***/ "vMVo":
/*!************************************************!*\
  !*** ./lib/search/BaseSearchBoxInitializer.js ***!
  \************************************************/
/*! exports provided: BaseSearchBoxInitializer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseSearchBoxInitializer", function() { return BaseSearchBoxInitializer; });
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ms_sp_search_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ms/sp-search-common */ "7jo1");
/* harmony import */ var _ms_sp_search_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ms_sp_search_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _1js_search_scope_lib_updateScopeOnRouteChange__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @1js/search-scope/lib/updateScopeOnRouteChange */ "33Mj");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! .. */ "mwqp");
/* harmony import */ var _manageExitSearchHandler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./manageExitSearchHandler */ "8cFN");
/* harmony import */ var _manageSubmitSearchHandler__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./manageSubmitSearchHandler */ "21Zl");
/* harmony import */ var _setPersonSuggestionClickBehavior__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./setPersonSuggestionClickBehavior */ "US/c");
/* harmony import */ var _updaters__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./updaters */ "wHdv");








function shouldSearchBoxBeVisible(appId) {
    // Global flight check for the search box in the header
    if (!___WEBPACK_IMPORTED_MODULE_3__["SuiteNavManagerConfiguration"].isSearchBoxInHeaderFlighted()) {
        return false;
    }
    switch (appId) {
        case '1f019ae1-2de1-4f44-b723-00a6ec1d7445':
            // sp-home app
            return true;
        case 'c1c115a8-896b-4a53-a73c-cde6b8ca00f8':
            // sp-search app
            return true;
        case '7497f5b1-726b-46d8-9798-6be6bbef75c5':
        // sp-system-pages app
        case 'b6917cb1-93a0-4b97-a84d-7cf49975d4ec':
            // sp-pages app, which has an extra flight check
            return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPFlight"].isEnabled(1240 /* SPPagesSuiteSearchBox */);
        case '9f012051-e030-4487-9eb7-3365d03be182':
            // sp-list-host
            return true;
        default:
            // To enable the search box in other apps, add their appId above.
            // Flight checks should live here so that we can know whether the
            // search box should be visible before we've even loaded the app.
            return false;
    }
}
function setSearchBoxVisibility(appId) {
    Object(_updaters__WEBPACK_IMPORTED_MODULE_7__["unsecureShellSearch"])().SetSearchBoxVisibility(shouldSearchBoxBeVisible(appId));
}
/**
 * Suite search box initializers should subclass this class.
 *
 * @alpha
 */
var BaseSearchBoxInitializer = /** @class */ (function () {
    function BaseSearchBoxInitializer() {
        this.disposeList = [];
        this.currentProps = {
            pathname: '',
            querySearchText: ''
        };
    }
    /**
     * Initializes the suite search box, and returns a function that, when called,
     * will dispose the search box, and hide/show it if the application being transitioned
     * into isn't/is enabled for the suite search box.
     */
    BaseSearchBoxInitializer.prototype.initialize = function (suiteNavManager, submitSearchHandler, exitSearchHandler, asyncFeatures) {
        var _this = this;
        var disposeListenToRouteKillSwitchActivated = _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPKillSwitch"].isActivated('be5b4925-507f-4ffa-9a30-c9de5095f583'
        /* '2020/10/20', '[toreriks] Dispose listenToRoute subscriptions.' */
        );
        return this.suiteNavRendered()
            .then(function () { return suiteNavManager.getSearchBoxProvider(); })
            .then(function (searchBoxProvider) {
            setSearchBoxVisibility(_this.applicationId);
            _this.disposeList.push(Object(_manageSubmitSearchHandler__WEBPACK_IMPORTED_MODULE_5__["manageSubmitSearchHandler"])(_updaters__WEBPACK_IMPORTED_MODULE_7__["unsecureShellSearch"], submitSearchHandler, _this.applicationId, asyncFeatures), Object(_manageExitSearchHandler__WEBPACK_IMPORTED_MODULE_4__["manageExitSearchHandler"])(_updaters__WEBPACK_IMPORTED_MODULE_7__["unsecureShellSearch"], exitSearchHandler));
            if (asyncFeatures) {
                asyncFeatures.then(function (_a) {
                    var listenToRoute = _a.listenToRoute, getSearchRoute = _a.getSearchRoute, conf = _a.conf;
                    var initialProps = getSearchRoute();
                    _this.onRouteInitialized(initialProps);
                    _this.currentProps = initialProps;
                    var instrumenter = Object(___WEBPACK_IMPORTED_MODULE_3__["createSearchInstrumenterOnce"])();
                    instrumenter.setProps({ clientVersion: getClientVersion(conf) });
                    if (!disposeListenToRouteKillSwitchActivated) {
                        _this.disposeList.push(Object(_1js_search_scope_lib_updateScopeOnRouteChange__WEBPACK_IMPORTED_MODULE_2__["updateScopeOnRouteChange"])(instrumenter, listenToRoute, _this.defaultScopeId));
                    }
                    else {
                        Object(_1js_search_scope_lib_updateScopeOnRouteChange__WEBPACK_IMPORTED_MODULE_2__["updateScopeOnRouteChange"])(instrumenter, listenToRoute, _this.defaultScopeId);
                    }
                    _this.disposeList.push(listenToRoute(function (props) {
                        _this.onRouteChanged(_this.currentProps, props);
                        if (_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPFlight"].isEnabled(1534 /*CSISpoScopeControl*/)) {
                            _this.updateScopingControlConfigFromSearchRouteProps(props);
                        }
                        _this.currentProps = props;
                    }));
                });
            }
            _this.onSuiteNavRendered();
            _this.disposeList.push(searchBoxProvider.onActivated(function () { return _this.onSearchBoxActivated(); }));
            return function (nextApplicationId) {
                if (nextApplicationId) {
                    setSearchBoxVisibility(nextApplicationId);
                }
                _this.disposeList.forEach(function (dispose) { return dispose(); });
                if (!_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPKillSwitch"].isActivated('b16b228f-d3a3-47f0-963a-070c50096867'
                /* '09/28/2020', '[stvikenv] Clear disposeList after invoking dispose callbacks.' */
                )) {
                    _this.disposeList = [];
                }
            };
        });
    };
    /**
     * Update the searchbox texts depending on the current and previous routes
     */
    BaseSearchBoxInitializer.prototype.updateSearchBoxText = function (newRoute, oldRoute) {
        var _a, _b, _c, _d, _e, _f;
        // if killswitch activated, use previous fct version
        if (_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPKillSwitch"].isActivated('78791d40-e0ad-44a7-8b9c-7d4a4e4c6733'
        /* '24/11/2020', '[angannat] Fix updateSearchBoxText.' */
        )) {
            if (!oldRoute || !newRoute.querySearchText) {
                return;
            }
            // Only update the searchText if the current searchText is the one from the previous page
            // or if we don't have the previous querySearchText
            if (!oldRoute.querySearchText || oldRoute.querySearchText === ((_b = (_a = Object(_updaters__WEBPACK_IMPORTED_MODULE_7__["unsecureShellSearch"])()).GetSearchText) === null || _b === void 0 ? void 0 : _b.call(_a))) {
                (_d = (_c = Object(_updaters__WEBPACK_IMPORTED_MODULE_7__["unsecureShellSearch"])()).SetSearchText) === null || _d === void 0 ? void 0 : _d.call(_c, newRoute.querySearchText);
            }
            return;
        }
        var searchBox = document.querySelector('#sbcId input');
        // don't update the searchtext if there is no new text or if the searchbox is active (user is typing something)
        if (!newRoute.querySearchText || (document.activeElement && document.activeElement === searchBox)) {
            return;
        }
        (_f = (_e = Object(_updaters__WEBPACK_IMPORTED_MODULE_7__["unsecureShellSearch"])()).SetSearchText) === null || _f === void 0 ? void 0 : _f.call(_e, newRoute.querySearchText);
    };
    BaseSearchBoxInitializer.prototype.onSearchBoxActivated = function () {
        // Optional to override in subclasses
    };
    BaseSearchBoxInitializer.prototype.setPersonSuggestionClickBehavior = function (behavior) {
        Object(_setPersonSuggestionClickBehavior__WEBPACK_IMPORTED_MODULE_6__["setPersonSuggestionClickBehavior"])(behavior);
    };
    BaseSearchBoxInitializer.prototype.updateScopingControlConfigFromSearchRouteProps = function (props) {
        // In SERP, change scope to whole org through breadcrumb, props.pathname is null at initial state
        // from sp-pages to SERP with whole org search scope props.scopes is undefined
        if (props.pathname) {
            Object(_ms_sp_search_common__WEBPACK_IMPORTED_MODULE_1__["scopingControlManagerLoader"])().then(function (manager) {
                return manager.reconfigureScopingControlFromSearchRoute(props, Object(___WEBPACK_IMPORTED_MODULE_3__["createSearchInstrumenterOnce"])());
            });
        }
    };
    return BaseSearchBoxInitializer;
}());

function getClientVersion(conf) {
    try {
        return conf.gets('searchux.clientVersion');
    }
    catch (_a) {
        // Swallow exceptions
        return undefined;
    }
}


/***/ }),

/***/ "vlQI":
/*!*************************************!*\
  !*** external "@microsoft/sp-http" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_vlQI__;

/***/ }),

/***/ "wHdv":
/*!********************************!*\
  !*** ./lib/search/updaters.js ***!
  \********************************/
/*! exports provided: unsecureShellSearch, addSearchBoxProviderConfigUpdater */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unsecureShellSearch", function() { return unsecureShellSearch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addSearchBoxProviderConfigUpdater", function() { return addSearchBoxProviderConfigUpdater; });
/** Gets the O365 shell. */
function shell() {
    // tslint:disable-next-line:no-string-literal
    return window['O365Shell'];
}
/**
 * Gets the O365 shell search shim.
 *
 * @alpha
 */
function unsecureShellSearch() {
    return shell().Search;
}
var currentUpdaters = [];
var dirtyUpdaters = false;
function setUpdaters() {
    if (dirtyUpdaters) {
        try {
            // Take no chances regarding mutations - hand off a copy of the array.
            unsecureShellSearch().SetProviderConfigUpdaters(currentUpdaters.slice());
            dirtyUpdaters = false;
        }
        catch (error) {
            if (true) {
                console.error(error);
            }
        }
    }
}
/**
 * Adds a provider config updater to the set of updaters used by the search box
 * in the shell.
 *
 * @param updater - The provider config updater to add.
 *
 * @returns A function to remove the updater that was added.
 *
 * @alpha
 */
function addSearchBoxProviderConfigUpdater(updater) {
    if (currentUpdaters.some(function (u) { return u.id === updater.id; })) {
        return function () { return undefined; };
    }
    // We debounce changes by a 0-ms timeout so that you can add/remove
    // multiple updaters in the same frame without triggering multiple
    // reconfigurations of the search box in the header.
    currentUpdaters.push(updater);
    dirtyUpdaters = true;
    window.setTimeout(setUpdaters, 0);
    return function () {
        currentUpdaters = currentUpdaters.filter(function (u) { return u.id !== updater.id; });
        dirtyUpdaters = true;
        window.setTimeout(setUpdaters, 0);
    };
}


/***/ }),

/***/ "xBAi":
/*!*************************************************************!*\
  !*** ../sp-search-common/lib/getSearchBoxLoadingPattern.js ***!
  \*************************************************************/
/*! exports provided: getSearchBoxLoadingPattern */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSearchBoxLoadingPattern", function() { return getSearchBoxLoadingPattern; });
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/sp-lodash-subset */ "Pk8u");
/* harmony import */ var _microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ms/sp-telemetry */ "2q6Q");
/* harmony import */ var _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _isEligibleForPayForPlay__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./isEligibleForPayForPlay */ "t+oi");




function isPayForPlayEnabledByFlight() {
    return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPFlight"].isEnabled(765 /* SearchBoxPayForPlay */);
}
function isPayForPlayEnabledByExperiment() {
    if (!_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPFlight"].isEnabled(60059 /* EnableSearchBoxPayForPlayExperiment */)) {
        return false;
    }
    var variant = _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_2__["_SPPerfExperiment"].getVariantAndTrackExperiment(_ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_2__["_PerformanceExperiment"].SearchBoxPayForPlay);
    return variant === 1;
}
var getSearchBoxLoadingPattern = Object(_microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_1__["once"])(function (context) {
    if (Object(_isEligibleForPayForPlay__WEBPACK_IMPORTED_MODULE_3__["isEligibleForPayForPlay"])(context) &&
        (isPayForPlayEnabledByFlight() || isPayForPlayEnabledByExperiment())) {
        return 'pfp';
    }
    else {
        return 'eager';
    }
});


/***/ })

/******/ })});;
//# sourceMappingURL=sp-suite-nav_[locale].js.map