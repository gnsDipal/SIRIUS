define("1c6c9123-7aac-41f3-a376-3caea41ed83f_1.12.1", ["@ms/sp-telemetry","@microsoft/sp-dynamic-data","@microsoft/sp-lodash-subset","@microsoft/sp-core-library","@microsoft/sp-page-context","@microsoft/load-themed-styles","@microsoft/sp-diagnostics","@microsoft/sp-http"], function(__WEBPACK_EXTERNAL_MODULE__2q6Q__, __WEBPACK_EXTERNAL_MODULE__84nK__, __WEBPACK_EXTERNAL_MODULE_Pk8u__, __WEBPACK_EXTERNAL_MODULE_UWqr__, __WEBPACK_EXTERNAL_MODULE_X_PM__, __WEBPACK_EXTERNAL_MODULE_jOlS__, __WEBPACK_EXTERNAL_MODULE_ut3N__, __WEBPACK_EXTERNAL_MODULE_vlQI__) { return /******/ (function(modules) { // webpackBootstrap
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
/******/ 		"sp-loader": 0
/******/ 	};
/******/
/******/
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "chunk." + ({"systemjs-component-loader":"systemjs-component-loader","vendors~debug-prompt-components~developer-tools":"vendors~debug-prompt-components~developer-tools","vendors~debug-prompt-components":"vendors~debug-prompt-components","debug-prompt-components":"debug-prompt-components","vendors~developer-tools":"vendors~developer-tools","developer-tools":"developer-tools"}[chunkId]||chunkId) + "_" + (["qps-ploca","none"])[{"systemjs-component-loader":0,"debug-prompt-components":0,"developer-tools":0,"vendors~debug-prompt-components~developer-tools":1,"vendors~debug-prompt-components":1,"vendors~developer-tools":1}[chunkId]] + ".js"
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
/******/ 	var jsonpArray = window["webpackJsonp_1c6c9123_7aac_41f3_a376_3caea41ed83f_1_12_1"] = window["webpackJsonp_1c6c9123_7aac_41f3_a376_3caea41ed83f_1_12_1"] || [];
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
/******/ 	  var regex = (typeof spScriptNamePattern !== 'undefined') ? spScriptNamePattern : /sp-loader_qps-ploca\.js/i;
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

/***/ "+Zvm":
/*!**********************************!*\
  !*** ./lib/debug/DebugStatus.js ***!
  \**********************************/
/*! exports provided: DebugStatus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DebugStatus", function() { return DebugStatus; });
/* harmony import */ var _ensureDebugComponents__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ensureDebugComponents */ "X2Mq");

/**
 * State of whether debug is allowed or not.
 * "false" means debug has not been confirmed or is prohibited, and "true" means debug is allowed.
 */
var _loaderDebugAllowed = false;
var _manifestsDebugAllowed = false;
var _debugAllowedPromise;
var DebugStatus = /** @class */ (function () {
    function DebugStatus() {
    }
    DebugStatus.confirmDebugAllowed = function (options) {
        // Initially set values from sessionStorage options.
        _loaderDebugAllowed = options.loaderDebugAlreadyAllowed || false;
        _manifestsDebugAllowed = options.manifestsDebugAlreadyAllowed || false;
        if (DebugStatus._requiresPrompt(options)) {
            if (!_debugAllowedPromise) {
                _debugAllowedPromise = new Promise(function (resolve) {
                    // Download the prompt
                    Object(_ensureDebugComponents__WEBPACK_IMPORTED_MODULE_0__["default"])()
                        .then(function (debugComponents) {
                        // Show the prompt
                        return debugComponents.showDebugPrompt(options).then(function (allowed) {
                            _debugAllowedPromise = undefined;
                            if (options.loaderRequested) {
                                _loaderDebugAllowed = allowed;
                            }
                            if (options.manifestsRequested) {
                                _manifestsDebugAllowed = allowed;
                            }
                            resolve(allowed);
                        });
                    })
                        .catch(console.error);
                });
                return _debugAllowedPromise;
            }
            else {
                throw new Error('Debug prompt is currently being shown and cannot be shown again until it has been dismissed.');
            }
        }
        else {
            return Promise.resolve(DebugStatus.peekDebugAllowed(options));
        }
    };
    DebugStatus.dangerouslyEnableDebug = function () {
        _loaderDebugAllowed = true;
        _manifestsDebugAllowed = true;
    };
    /**
     * Determines if all requested debug URLs are allowed.
     * @param options - IDebugPromptOptions.
     */
    DebugStatus.peekDebugAllowed = function (options) {
        return ((!options.loaderRequested || _loaderDebugAllowed) &&
            (!options.manifestsRequested || _manifestsDebugAllowed));
    };
    /**
     * Only require the prompt when a debug URL is requested and not already allowed.
     * @param options - IDebugPromptOptions.
     */
    DebugStatus._requiresPrompt = function (options) {
        return ((options.loaderRequested && !_loaderDebugAllowed) ||
            (options.manifestsRequested && !_manifestsDebugAllowed));
    };
    DebugStatus.shouldUseReactDomProfiling = false;
    return DebugStatus;
}());



/***/ }),

/***/ "1Ivw":
/*!*******************************************************!*\
  !*** ./lib/tiny/componentLoader/SPComponentLoader.js ***!
  \*******************************************************/
/*! exports provided: SPComponentLoader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SPComponentLoader", function() { return SPComponentLoader; });
/* harmony import */ var _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ms/sp-telemetry */ "2q6Q");
/* harmony import */ var _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _debug_DebugManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../debug/DebugManager */ "GV8Z");
/* harmony import */ var _stores_ComponentStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../stores/ComponentStore */ "eaMA");
/* harmony import */ var _stores_ManifestStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../stores/ManifestStore */ "Eke5");
/* harmony import */ var _utilities_componentConstants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utilities/componentConstants */ "kd3Z");
/* harmony import */ var _utilities_telemetryConstants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utilities/telemetryConstants */ "4mHd");
/* harmony import */ var _common_killSwitches__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/killSwitches */ "zBRI");
/* harmony import */ var _common_normalize__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/normalize */ "XBF6");
/* harmony import */ var _common_platformLoader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../common/platformLoader */ "pxRb");









/**
 * SPFx component loader.
 *
 * @public
 */
var SPComponentLoader = /** @class */ (function () {
    function SPComponentLoader(loaderArgs) {
        var bundledComponents = loaderArgs.bundledComponents, ctor = loaderArgs.ctor, _a = loaderArgs.debugData, debugLoader = _a.debugLoader, debugManifests = _a.debugManifests, registerAsNonDebug = _a.registerAsNonDebug, preloadedData = loaderArgs.preloadedData, serviceScope = loaderArgs.serviceScope, useSecondaryCdn = loaderArgs.useSecondaryCdn;
        this._serviceScope = serviceScope;
        if (useSecondaryCdn) {
            // _TraceLogger.logError
        }
        // Let's see if we should stop here.  In order to facilitate easier diagnosis of
        // customer issues - and in particular custom code messing with common
        // functionality, we make it possible to disable all 3rd party code by using
        // the query string ?disable3PCode
        if (!Object(_common_killSwitches__WEBPACK_IMPORTED_MODULE_6__["isDisable3PCodeKillswitchActivated"])()) {
            var urlParams = new URLSearchParams(window.location.search);
            this._skipThirdPartyCode = urlParams.has('disable3PCode');
        }
        else {
            this._skipThirdPartyCode = false;
        }
        this._loader = new ctor(this._serviceScope, useSecondaryCdn);
        SPComponentLoader._headElement = document === null || document === void 0 ? void 0 : document.getElementsByTagName('head')[0];
        _stores_ManifestStore__WEBPACK_IMPORTED_MODULE_3__["default"].instance.registerPreloadedManifests(preloadedData);
        if (debugManifests) {
            if (!registerAsNonDebug && !Object(_common_killSwitches__WEBPACK_IMPORTED_MODULE_6__["isDangerouslyEnableDebugKSActivated"])()) {
                _stores_ManifestStore__WEBPACK_IMPORTED_MODULE_3__["default"].instance.registerDebugManifests(debugManifests);
            }
            else {
                _stores_ManifestStore__WEBPACK_IMPORTED_MODULE_3__["default"].instance.registerManifests(debugManifests, registerAsNonDebug);
            }
        }
        var monitor = new _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_0__["_QosMonitor"]('SPComponentLoader.pinnedManifests');
        var pinnedManifests = [];
        // Pin and store bundled components in the assembly
        for (var _i = 0, _b = Object.keys(bundledComponents); _i < _b.length; _i++) {
            var id = _b[_i];
            var version = id === _utilities_componentConstants__WEBPACK_IMPORTED_MODULE_4__["reactComponentId"] || id === _utilities_componentConstants__WEBPACK_IMPORTED_MODULE_4__["reactDomComponentId"] ? _utilities_componentConstants__WEBPACK_IMPORTED_MODULE_4__["react16Version"] : undefined;
            var shouldPin = !debugLoader && !version;
            // Only pin with the production loader to allow debug manifests to be loaded
            // We don't pin react or react-dom since components can bring in different versions
            if (shouldPin) {
                _stores_ManifestStore__WEBPACK_IMPORTED_MODULE_3__["default"].instance._pinManifest(id);
            }
            var manifest = _stores_ManifestStore__WEBPACK_IMPORTED_MODULE_3__["default"].instance.tryGetManifest(id, version);
            if (manifest) {
                var component = bundledComponents[id];
                var cid = Object(_common_normalize__WEBPACK_IMPORTED_MODULE_7__["normalizeComponentId"])(manifest.id, manifest.version);
                if (shouldPin) {
                    pinnedManifests.push(cid);
                }
                this._loader.ensure(cid, component);
                _stores_ComponentStore__WEBPACK_IMPORTED_MODULE_2__["default"].instance.storeLoadedComponent(manifest.id, manifest.version, component);
            }
        }
        monitor.writeSuccess({ pinnedManifests: pinnedManifests });
    }
    /**
     * {@inheritDoc  ISPComponentLoader.loadComponent}
     */
    SPComponentLoader.prototype.loadComponent = function (manifest) {
        var monitor;
        var extraData;
        if (!manifest.isInternal && this._skipThirdPartyCode) {
            // Return an indefinitely pending promise to avoid loading the code and error handling
            return new Promise(function () { }); // tslint:disable-line:no-empty
        }
        if (Object(_common_killSwitches__WEBPACK_IMPORTED_MODULE_6__["isSkipFirstPartyLoaderLogKillswtichActivated"])() || !manifest.isInternal) {
            monitor = new _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_0__["_QosMonitor"](_utilities_telemetryConstants__WEBPACK_IMPORTED_MODULE_5__["loadComponentQosScenarioName"]);
            extraData = {
                alias: manifest.alias,
                isDebug: manifest._isDebug,
                isInternal: manifest.isInternal,
                manifestId: manifest.id,
                version: manifest.version
            };
        }
        return this._loader
            .loadComponent(manifest)
            .then(function (c) {
            if (monitor) {
                monitor.writeSuccess(extraData);
            }
            return c;
        })
            .catch(function (e) {
            if (monitor) {
                monitor.writeUnexpectedFailure(undefined, undefined, e);
            }
            throw e.systemjsError || e.requirejsError || e;
        });
    };
    /**
     * {@inheritDoc  ISPComponentLoader.loadComponentById}
     *
     * @public
     */
    SPComponentLoader.prototype.loadComponentById = function (id, version) {
        var _this = this;
        var manifest = _stores_ManifestStore__WEBPACK_IMPORTED_MODULE_3__["default"].instance.tryGetManifest(id, version);
        if (manifest) {
            return this.loadComponent(manifest);
        }
        else {
            return _stores_ManifestStore__WEBPACK_IMPORTED_MODULE_3__["default"].instance.requestManifest(id, version).then(function (m) { return _this.loadComponent(m); });
        }
    };
    /**
     * {@inheritDoc  ISPComponentLoader.loadCss}
     */
    SPComponentLoader.prototype.loadCss = function (url) {
        var link = document.createElement('link');
        link.rel = 'stylesheet';
        link.type = 'text/css';
        link.href = url;
        SPComponentLoader._headElement.appendChild(link);
    };
    /**
     * {@inheritDoc  ISPComponentLoader.loadScript}
     */
    SPComponentLoader.prototype.loadScript = function (url, options) {
        var monitor = new _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_0__["_QosMonitor"]('TinySPComponentLoader.loadScript');
        return this._loader
            .loadScript(url, options)
            .then(function (m) {
            monitor.writeSuccess();
            return m;
        })
            .catch(function (e) {
            monitor.writeUnexpectedFailure(undefined, e);
            throw e;
        });
    };
    /**
     * {@inheritdoc ISPComponentLoader._loadDebugManifestsForWorkbench}
     *
     * @internal
     */
    SPComponentLoader.prototype._loadDebugManifestsForWorkbench = function (manifestsFileUrl) {
        return _debug_DebugManager__WEBPACK_IMPORTED_MODULE_1__["DebugManager"].loadAndRegisterManifestsFile(this, manifestsFileUrl, true);
    };
    /**
     * {@inheritdoc ISPComponentLoader._startApplication}
     *
     * @internal
     */
    SPComponentLoader.prototype._startApplication = function (preloadedData) {
        return Object(_common_platformLoader__WEBPACK_IMPORTED_MODULE_8__["startApplication"])(preloadedData, this._serviceScope).then(function (app) {
            /*
             * Normally non-SPFx environments locate their SPFx host application via a window variable
             * that our startup code assigns like this:
             *
             *   global.moduleLoaderPromise = global.spModuleLoader.start(spClientSidePageContext, handleFailure)
             *
             * However, in the case of the modern ListView, the "listview-spfx-host" loads after the main scripts,
             * which creates a race condition where window.moduleLoaderPromise sometimes might not be assigned yet
             * when their code tries to read it.  In that situation, they can register a callback like this:
             *
             * if (window['moduleLoaderPromise']) {
             *   window['moduleLoaderPromise'].then((application) => {
             *     doSomething(application);
             *   });
             * } else {
             *   window['_spLoaderCallback'] = function(application) {
             *     doSomething(application);
             *   };
             * }
             */
            /* tslint:disable:no-string-literal */
            if (window['_spLoaderCallback']) {
                var _spLoaderCallback = window['_spLoaderCallback']; // tslint:disable-line:no-any
                _spLoaderCallback(app);
            }
            /* tslint:enable:no-string-literal */
            return app;
        });
    };
    /**
     * {@inheritdoc ISPComponentLoader._preloadComponents}
     *
     * @internal
     */
    SPComponentLoader.prototype._preloadComponents = function () {
        var _this = this;
        if (!Object(_common_killSwitches__WEBPACK_IMPORTED_MODULE_6__["isOptimsticPreloadFilteredToViewPortKillswitchActivated"])() && document && document.head) {
            var attributeName = 'data-sp-componentId';
            var preloadElements = document.head.querySelectorAll("link[rel=preload][" + attributeName + "],script[" + attributeName + "]");
            var preloadedIdSet = new Set();
            for (var i = 0; i < preloadElements.length; i++) {
                var componentId = preloadElements[i].getAttribute(attributeName);
                if (componentId && !preloadedIdSet.has(componentId)) {
                    preloadedIdSet.add(componentId);
                }
            }
            preloadedIdSet.forEach(function (id) {
                var manifest = _this.tryGetManifestById(id);
                if (manifest) {
                    // We don't need to care if these succeed or fail here, and are just focused on starting the load.
                    _this.loadComponent(manifest); // tslint:disable-line:no-floating-promises
                }
            });
        }
        else {
            _stores_ManifestStore__WEBPACK_IMPORTED_MODULE_3__["default"].instance.getRegisteredManifests(true).forEach(function (manifest) {
                // We don't need to care if these succeed or fail here, and are just focused on starting the load.
                _this.loadComponent(manifest); // tslint:disable-line:no-floating-promises
            });
        }
    };
    /**
     * {@inheritdoc ISPComponentLoader._unloadComponents}
     *
     * @internal
     */
    SPComponentLoader.prototype._unloadComponents = function () {
        for (var _i = 0, _a = _stores_ManifestStore__WEBPACK_IMPORTED_MODULE_3__["default"].instance.getRegisteredManifests(); _i < _a.length; _i++) {
            var m = _a[_i];
            _stores_ComponentStore__WEBPACK_IMPORTED_MODULE_2__["default"].instance.deleteComponent(m.id, m.version);
            this._loader.delete(m);
        }
    };
    // #region Candidates for deletion
    SPComponentLoader.prototype.registerManifests = function (manifests) {
        _stores_ManifestStore__WEBPACK_IMPORTED_MODULE_3__["default"].instance.registerManifests(manifests, false);
    };
    SPComponentLoader.prototype.requestManifest = function (id, version) {
        return _stores_ManifestStore__WEBPACK_IMPORTED_MODULE_3__["default"].instance.requestManifest(id, version);
    };
    SPComponentLoader.prototype.tryGetLoadedComponent = function (manifest) {
        return _stores_ComponentStore__WEBPACK_IMPORTED_MODULE_2__["default"].instance.tryGetComponentReference(manifest.id, manifest.version);
    };
    SPComponentLoader.prototype.tryGetManifestById = function (id, version) {
        return _stores_ManifestStore__WEBPACK_IMPORTED_MODULE_3__["default"].instance.tryGetManifest(id, version);
    };
    Object.defineProperty(SPComponentLoader.prototype, "_manifestReferences", {
        get: function () {
            return _stores_ManifestStore__WEBPACK_IMPORTED_MODULE_3__["default"].instance.getRegisteredManifests();
        },
        enumerable: false,
        configurable: true
    });
    SPComponentLoader.prototype._initialize = function (preloadedData, bundledComponents, debugData) {
        /* no-op*/
    };
    return SPComponentLoader;
}());



/***/ }),

/***/ "2L73":
/*!*************************************!*\
  !*** ./lib/debug/DebugManager.resx ***!
  \*************************************/
/*! exports provided: errorLoadingDebugScriptHTTPS, errorLoadingDebugScriptHTTP, errorLoadingDebugScriptMalformed, errorLoadingDebugScriptUnknown, errorLoadingDebugLoaderTitle, errorLoadingDebugManifestTitle, errorLoadingUnknownTitle, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"errorLoadingDebugScriptHTTPS\":\"Ēŕŕōŕ ĺōàďĩńĝ ďēƀũĝ śćŕĩƥţ. Ēńśũŕē ţĥē śēŕvēŕ ĩś ŕũńńĩńĝ àńď ţĥē \\u0022{0}\\u0022 ƥàŕàmēţēŕ ŨŔĹ ĩś ćōŕŕēćţ.\",\"errorLoadingDebugScriptHTTP\":\"Ēŕŕōŕ ĺōàďĩńĝ ďēƀũĝ śćŕĩƥţ. Ēńśũŕē ţĥē śēŕvēŕ ĩś ŕũńńĩńĝ, ţĥē \\u0022{0}\\u0022 ƥàŕàmēţēŕ ŨŔĹ ĩś ćōŕŕēćţ, àńď ĺōàďĩńĝ ũńśàƒē śćŕĩƥţś ĩś àĺĺōŵēď. Àĺśō ćōńśĩďēŕ ũśĩńĝ à ďēvēĺōƥmēńţ ćēŕţĩƒĩćàţē àńď śēŕvĩńĝ ďēƀũĝ śćŕĩƥţś ōvēŕ ĤŢŢƤŚ.\",\"errorLoadingDebugScriptMalformed\":\"Ēŕŕōŕ ĺōàďĩńĝ ďēƀũĝ śćŕĩƥţ. Ţĥē ďēƀũĝ ŨŔĹ ({0}) àƥƥēàŕś ţō ƀē màĺƒōŕmēď.\",\"errorLoadingDebugScriptUnknown\":\"Ũńķńōŵń ēŕŕōŕ ĺōàďĩńĝ à ďēƀũĝ śćŕĩƥţ.\",\"errorLoadingDebugLoaderTitle\":\"Ēŕŕōŕ ĺōàďĩńĝ ďēƀũĝ ĺōàďēŕ.\",\"errorLoadingDebugManifestTitle\":\"Ēŕŕōŕ ĺōàďĩńĝ ďēƀũĝ màńĩƒēśţś.\",\"errorLoadingUnknownTitle\":\"Ēŕŕōŕ ĺōàďĩńĝ ďēƀũĝ śćŕĩƥţś.\"}");

/***/ }),

/***/ "2clK":
/*!***************************************************!*\
  !*** ./lib/DeveloperTools/DeveloperToolsProxy.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * @Copyright (c) Microsoft Corporation.  All rights reserved.
 *
 * @file DeveloperToolsProxy.ts
 */
/**
 * Developer tools.
 * Allows to register tabs in the developer tools.
 *
 * @internal
 */
var DeveloperToolsProxy = /** @class */ (function () {
    function DeveloperToolsProxy() {
    }
    /**
     * Initializes the developer tools with an implementation.
     * Must be called once before it can be used.
     */
    DeveloperToolsProxy.initialize = function (developerToolsLoader, serviceScope) {
        DeveloperToolsProxy._instance = developerToolsLoader;
        DeveloperToolsProxy._instance.initialize(serviceScope);
    };
    /**
     * {@inheritDoc  IDeveloperTools.registerDeveloperToolsTab}
     */
    DeveloperToolsProxy.registerDeveloperToolsTab = function (developerToolsTab) {
        DeveloperToolsProxy._instance.registerDeveloperToolsTab(developerToolsTab);
    };
    return DeveloperToolsProxy;
}());
/* harmony default export */ __webpack_exports__["default"] = (DeveloperToolsProxy);


/***/ }),

/***/ "2q6Q":
/*!***********************************!*\
  !*** external "@ms/sp-telemetry" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__2q6Q__;

/***/ }),

/***/ "3a0R":
/*!*******************************************************************************************!*\
  !*** ./lib/DeveloperTools/BrowserDeveloperToolsWarning/BrowserDeveloperToolsWarning.resx ***!
  \*******************************************************************************************/
/*! exports provided: warningHeading, warningLine1, warningLine2, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"warningHeading\":\"Ŵàŕńĩńĝ!\",\"warningLine1\":\"Ũśē ōƒ ţĥĩś ţōōĺ ēxƥōśēś ŷōũ ţō ƥōţēńţĩàĺ śēćũŕĩţŷ ţĥŕēàţś ŵĥĩćĥ ćàń ŕēśũĺţ ĩń ōţĥēŕś ĝàĩńĩńĝ àććēśś ţō ŷōũŕ ƥēŕśōńàĺ Ōƒƒĩćē 365 ďàţà (ďōćũmēńţś, ēmàĩĺś, ćōńvēŕśàţĩōńś àńď mōŕē). Màķē śũŕē ŷōũ ţŕũśţ ţĥē ƥēŕśōń ōŕ ōŕĝàńĩźàţĩōń ţĥàţ àśķēď ŷōũ ţō àććēśś ţĥĩś ţōōĺ ƀēƒōŕē ƥŕōćēēďĩńĝ.\",\"warningLine2\":\"Ĺēàŕń mōŕē ĥēŕē: {0}\"}");

/***/ }),

/***/ "4mHd":
/*!*********************************************!*\
  !*** ./lib/utilities/telemetryConstants.js ***!
  \*********************************************/
/*! exports provided: loadScriptQosScenarioName, loadComponentQosScenarioName, loadComponentImplQosScenarioName, loadPathDependencyQosScenarioName, loadScriptWithRequireQosScenarioName, loadComponentWithRequireQosScenarioName, loadComponentWithFallbackSystemQosScenarioName, emptyComponentErrorTagName, configureSystemJsErrorTagName, loadComponentDependenciesErrorTagName, loadPathDependenciesErrorTagName, usingSecondaryCdnEventName, noSecondaryCdnUrl, spStarterLogSource, startApplicationLogSource, loadComponentLogSource, loadScriptLogSource, resolveAddressLogSource, componentStoreLogSource, manifestStoreLogSource, spRequireJsComponentLoader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadScriptQosScenarioName", function() { return loadScriptQosScenarioName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadComponentQosScenarioName", function() { return loadComponentQosScenarioName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadComponentImplQosScenarioName", function() { return loadComponentImplQosScenarioName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadPathDependencyQosScenarioName", function() { return loadPathDependencyQosScenarioName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadScriptWithRequireQosScenarioName", function() { return loadScriptWithRequireQosScenarioName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadComponentWithRequireQosScenarioName", function() { return loadComponentWithRequireQosScenarioName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadComponentWithFallbackSystemQosScenarioName", function() { return loadComponentWithFallbackSystemQosScenarioName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "emptyComponentErrorTagName", function() { return emptyComponentErrorTagName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "configureSystemJsErrorTagName", function() { return configureSystemJsErrorTagName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadComponentDependenciesErrorTagName", function() { return loadComponentDependenciesErrorTagName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadPathDependenciesErrorTagName", function() { return loadPathDependenciesErrorTagName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "usingSecondaryCdnEventName", function() { return usingSecondaryCdnEventName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "noSecondaryCdnUrl", function() { return noSecondaryCdnUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "spStarterLogSource", function() { return spStarterLogSource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startApplicationLogSource", function() { return startApplicationLogSource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadComponentLogSource", function() { return loadComponentLogSource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadScriptLogSource", function() { return loadScriptLogSource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resolveAddressLogSource", function() { return resolveAddressLogSource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "componentStoreLogSource", function() { return componentStoreLogSource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "manifestStoreLogSource", function() { return manifestStoreLogSource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "spRequireJsComponentLoader", function() { return spRequireJsComponentLoader; });
// ISPComponentLoader.loadComponent
var loadScriptQosScenarioName = 'SPComponentLoader.loadScript';
var loadComponentQosScenarioName = 'SPComponentLoader.loadComponent';
var loadComponentImplQosScenarioName = 'SPComponentLoader._loadComponentImpl';
var loadPathDependencyQosScenarioName = 'SPComponentLoader.loadPathDependency';
var loadScriptWithRequireQosScenarioName = 'SPComponentLoader.loadScriptWithRequire';
var loadComponentWithRequireQosScenarioName = 'SPComponentLoader.loadComponentWithRequire';
var loadComponentWithFallbackSystemQosScenarioName = 'SPComponentLoader.loadComponentWithFallbackSystem'; /* tslint:disable-line:max-line-length */
var emptyComponentErrorTagName = 'EmptyComponent';
var configureSystemJsErrorTagName = 'ConfigureSystemJs';
var loadComponentDependenciesErrorTagName = 'LoadComponentDependencies';
var loadPathDependenciesErrorTagName = 'LoadPathDependencies';
var usingSecondaryCdnEventName = 'UsingSecondaryCdn';
var noSecondaryCdnUrl = 'NoSecondaryCdnUrl';
// Log sources
var spStarterLogSource = { id: 'SPStarter.start' };
var startApplicationLogSource = { id: 'SPComponentLoader.startApplication' };
var loadComponentLogSource = { id: 'SPComponentLoader.loadComponent' };
var loadScriptLogSource = { id: 'SPComponentLoader.loadScript' };
var resolveAddressLogSource = { id: 'resolveAddress' };
var componentStoreLogSource = { id: 'ComponentStore' };
var manifestStoreLogSource = { id: 'ManifestStore' };
var spRequireJsComponentLoader = { id: 'SPRequireJsComponentLoader' };


/***/ }),

/***/ "65wc":
/*!**********************************************!*\
  !*** ./lib/tiny/common/dependencyLoading.js ***!
  \**********************************************/
/*! exports provided: loadComponentDependencies, loadPathDependencies */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadComponentDependencies", function() { return loadComponentDependencies; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadPathDependencies", function() { return loadPathDependencies; });
/* harmony import */ var _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ms/sp-telemetry */ "2q6Q");
/* harmony import */ var _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _stores_ComponentStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../stores/ComponentStore */ "eaMA");
/* harmony import */ var _stores_ManifestStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../stores/ManifestStore */ "Eke5");
/* harmony import */ var _killSwitches__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./killSwitches */ "zBRI");




// tslint:disable:export-name
/**
 * Load all the component dependencies of an SPFx component.
 *
 * @param loader - Module loader instance.
 * @param manifest - Manifest of the dependent component.
 * @param depNames - Array of dependency names.
 *
 * @returns An array of Promises resolving to a respective dependency.
 */
function loadComponentDependencies(loader, manifest, depNames) {
    var deps = [];
    var scriptResources = manifest.loaderConfig.scriptResources;
    var _loop_1 = function (depName) {
        var resource = scriptResources[depName];
        if (!resource.shouldNotPreload && resource.type === 'component') {
            var dep = loadComponentDependency(loader, depName, resource);
            if (dep) {
                if (Object(_killSwitches__WEBPACK_IMPORTED_MODULE_3__["isLoadComponentDependenciesKillSwitchActivated"])()) {
                    deps.push(dep);
                }
                else {
                    deps.push(dep.catch(function (originalError) {
                        var monitor = new _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_0__["_QosMonitor"]('SPLoader.loadComponentDependenciesFailures');
                        var mId = manifest.id, mVersion = manifest.version;
                        var _a = resource, id = _a.id, version = _a.version;
                        monitor.writeUnexpectedFailure(undefined, new Error("Could not load dependency " + id + "_" + version + " for dependent " + mId + "_" + mVersion), { originalError: originalError });
                        throw originalError;
                    }));
                }
            }
        }
    };
    for (var _i = 0, depNames_1 = depNames; _i < depNames_1.length; _i++) {
        var depName = depNames_1[_i];
        _loop_1(depName);
    }
    return deps;
}
/**
 * Load all the path dependencies of an SPFx component.
 *
 * @param loader - Module loader instance.
 * @param manifest - Manifest of the dependent component.
 * @param depNames - Array of dependency names.
 *
 * @returns An array of Promises resolving to a respective dependency.
 */
function loadPathDependencies(loader, manifest, depNames) {
    var deps = [];
    var loadedPathDeps = new Set();
    var _a = manifest.loaderConfig, entryModuleId = _a.entryModuleId, scriptResources = _a.scriptResources;
    for (var _i = 0, depNames_2 = depNames; _i < depNames_2.length; _i++) {
        var depName = depNames_2[_i];
        var resource = scriptResources[depName];
        if (!resource.shouldNotPreload &&
            (resource.type === 'path' || resource.type === 'localizedPath') &&
            !loadedPathDeps.has(depName) &&
            depName !== entryModuleId) {
            loadedPathDeps.add(depName);
            deps.push(loadPathDependency(loader, manifest, depName, resource, loadedPathDeps));
        }
    }
    return deps;
}
/**
 * Load a component dependency.
 *
 * @param loader - Module loader instance.
 * @param name - Name of the dependency to load.
 * @param resource - Module configuration of the dependency.
 *
 * @returns A promise resolving to the dependency or undefined if the dependency did not need to be loaded.
 */
function loadComponentDependency(loader, name, resource) {
    var dep;
    var depManifest = _stores_ManifestStore__WEBPACK_IMPORTED_MODULE_2__["default"].instance.tryGetManifest(resource.id, resource.version);
    if (depManifest) {
        // If the dependency has been loaded then skip trying to load it
        var depReference = _stores_ComponentStore__WEBPACK_IMPORTED_MODULE_1__["default"].instance.tryGetComponentReference(depManifest.id, depManifest.version);
        if (!depReference) {
            dep = loader.loadComponent(depManifest);
        }
    }
    else {
        if (resource.failoverPath) {
            dep = loader.load(name);
        }
        else {
            dep = _stores_ManifestStore__WEBPACK_IMPORTED_MODULE_2__["default"].instance
                .requestManifest(resource.id, resource.version)
                .then(function (m) { return loader.loadComponent(m); });
        }
    }
    return dep;
}
/**
 * Load a path dependency.
 *
 * @param loader - Module loader instance.
 * @param manifest - Manifest of the dependent component.
 * @param name - Name of the path dependency.
 * @param resource - Configuration of the path dependency.
 * @param loadedPathDependencies - Set of already loaded path dependencies.
 */
function loadPathDependency(loader, manifest, name, resource, loadedPathDependencies) {
    var globalDeps = [];
    if (resource.globalDependencies) {
        for (var _i = 0, _a = resource.globalDependencies; _i < _a.length; _i++) {
            var gDep = _a[_i];
            // If a path dependency is a dependency of another path we should still only load it once
            if (!loadedPathDependencies.has(gDep)) {
                loadedPathDependencies.add(gDep);
                var gResource = manifest.loaderConfig.scriptResources[gDep];
                globalDeps.push(loadPathDependency(loader, manifest, gDep, gResource, loadedPathDependencies));
            }
        }
    }
    return Promise.all(globalDeps).then(function () { return loader.loadEntryPoint(manifest, name, resource.globalName); });
}


/***/ }),

/***/ "6EK5":
/*!************************************!*\
  !*** ./lib/tiny/common/flights.js ***!
  \************************************/
/*! exports provided: isMSALThirdPartyEnabled, isSafariAuthPatchEnbled, isDeploymentPoolsFlightEnabled, isAkamaiCrossOriginFlightEnabled, isMinimalStartFlightEnabled */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isMSALThirdPartyEnabled", function() { return isMSALThirdPartyEnabled; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSafariAuthPatchEnbled", function() { return isSafariAuthPatchEnbled; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDeploymentPoolsFlightEnabled", function() { return isDeploymentPoolsFlightEnabled; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isAkamaiCrossOriginFlightEnabled", function() { return isAkamaiCrossOriginFlightEnabled; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isMinimalStartFlightEnabled", function() { return isMinimalStartFlightEnabled; });
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__);
// tslint:disable:export-name

/**
 * Use MSAL for 3rd party requests
 */
function isMSALThirdPartyEnabled() {
    /* Use MSAL for 3rd Party Requests */
    return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPFlight"].isEnabled(1887);
}
/**
 * SppplatSafariAuthPatch
 */
function isSafariAuthPatchEnbled() {
    return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPFlight"].isEnabled(687);
}
/**
 * SppplatUseDeploymentPools
 */
function isDeploymentPoolsFlightEnabled() {
    return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPFlight"].isEnabled(436);
}
function isAkamaiCrossOriginFlightEnabled() {
    return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPFlight"].isEnabled(1106);
}
/**
 * SppplatMinimalStart
 */
function isMinimalStartFlightEnabled() {
    return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPFlight"].isEnabled(1685);
}


/***/ }),

/***/ "76db":
/*!***********************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/raw-loader@0.5.1/node_modules/raw-loader!./lib/DeveloperTools/BrowserDeveloperToolsWarning/BrowserDeveloperToolsWarning.css ***!
  \***********************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".heading {\r\n  font-size: 70px;\r\n  font-family: Helvetica, Arial, sans-serif;\r\n  font-weight: 700;\r\n  color: red;\r\n  -webkit-text-stroke: 2px black;\r\n}\r\n\r\n.otherLines {\r\n  font-size: 15px;\r\n  font-family: Helvetica, Arial, sans-serif;\r\n  font-weight: 700;\r\n}\r\n"

/***/ }),

/***/ "84nK":
/*!*********************************************!*\
  !*** external "@microsoft/sp-dynamic-data" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__84nK__;

/***/ }),

/***/ "9obq":
/*!*********************************************************!*\
  !*** ./lib/requirejs/DeferredSystemJsFallbackLoader.js ***!
  \*********************************************************/
/*! exports provided: DeferredSystemJsFallbackLoader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeferredSystemJsFallbackLoader", function() { return DeferredSystemJsFallbackLoader; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "WYdG");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__);


var DeferredSystemJsFallbackLoader = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(DeferredSystemJsFallbackLoader, _super);
    function DeferredSystemJsFallbackLoader() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DeferredSystemJsFallbackLoader.getInstance = function () {
        return this._getInstance();
    };
    DeferredSystemJsFallbackLoader.prototype.create = function (scope) {
        return new this._classType(scope);
    };
    DeferredSystemJsFallbackLoader.prototype._internalLoad = function () {
        return __webpack_require__.e(/*! import() | systemjs-component-loader */ "systemjs-component-loader").then(__webpack_require__.bind(null, /*! ./SystemJsFallbackLoader */ "PypK")).then(function (module) { return module.SystemJsFallbackLoader; });
    };
    return DeferredSystemJsFallbackLoader;
}(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["_DeferredClass"]));



/***/ }),

/***/ "ASbA":
/*!****************************************!*\
  !*** ./lib/utilities/isCorsEnabled.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isCorsEnabled; });
// https://spo*.akamaihd.net/
var corsMatch = /^https:\/\/spo.*?\.akamaihd\.net\/?[^?]/;
/**
 * Given a URL, determines if that URL resource is served with the
 * Access-Control-Allow-Origin: * CORS header.
 */
function isCorsEnabled(src) {
    return !!src && src.search(corsMatch) === 0;
}


/***/ }),

/***/ "AtZb":
/*!*************************************!*\
  !*** ./lib/debug/showDebugError.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return showDebugError; });
/* harmony import */ var _ensureDebugComponents__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ensureDebugComponents */ "X2Mq");

function showDebugError(innerError, errorText, title) {
    return Object(_ensureDebugComponents__WEBPACK_IMPORTED_MODULE_0__["default"])().then(function (debugComponents) {
        debugComponents.showError(innerError, errorText, title);
    });
}


/***/ }),

/***/ "BBmw":
/*!************************************!*\
  !*** ./lib/error/SPLoaderError.js ***!
  \************************************/
/*! exports provided: SPLoaderErrorCode, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SPLoaderErrorCode", function() { return SPLoaderErrorCode; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "WYdG");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Error_resx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Error.resx */ "HcMa");
var _Error_resx__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./Error.resx */ "HcMa", 1);
/* harmony import */ var _loc_Common_resx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../loc/Common.resx */ "p2pk");
var _loc_Common_resx__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../loc/Common.resx */ "p2pk", 1);




/*
 * sp-loader error codes.
 */
var SPLoaderErrorCode;
(function (SPLoaderErrorCode) {
    SPLoaderErrorCode[SPLoaderErrorCode["loadComponentMaxRetriesError"] = 0] = "loadComponentMaxRetriesError";
    SPLoaderErrorCode[SPLoaderErrorCode["loadComponentError"] = 1] = "loadComponentError";
    SPLoaderErrorCode[SPLoaderErrorCode["loadComponentReturnsEmptyError"] = 2] = "loadComponentReturnsEmptyError";
    SPLoaderErrorCode[SPLoaderErrorCode["loadComponentReturnsDefaultEmptyError"] = 3] = "loadComponentReturnsDefaultEmptyError";
    SPLoaderErrorCode[SPLoaderErrorCode["loadComponentDependencyError"] = 4] = "loadComponentDependencyError";
    SPLoaderErrorCode[SPLoaderErrorCode["manifestNotFoundError"] = 5] = "manifestNotFoundError";
    SPLoaderErrorCode[SPLoaderErrorCode["loadPathDependencyBlockedByAnotherDependencyError"] = 6] = "loadPathDependencyBlockedByAnotherDependencyError";
    SPLoaderErrorCode[SPLoaderErrorCode["moduleHasUndeclaredDependencyError"] = 7] = "moduleHasUndeclaredDependencyError";
    SPLoaderErrorCode[SPLoaderErrorCode["loadEntryPointError"] = 8] = "loadEntryPointError";
    SPLoaderErrorCode[SPLoaderErrorCode["loadPathDependencyError"] = 9] = "loadPathDependencyError";
    SPLoaderErrorCode[SPLoaderErrorCode["loadComponentDependencyFailoverPathError"] = 10] = "loadComponentDependencyFailoverPathError";
    SPLoaderErrorCode[SPLoaderErrorCode["loadScriptWithStringError"] = 11] = "loadScriptWithStringError";
    SPLoaderErrorCode[SPLoaderErrorCode["urlStatusLocalhostFileNotFoundError"] = 12] = "urlStatusLocalhostFileNotFoundError";
    SPLoaderErrorCode[SPLoaderErrorCode["urlStatusFileNotFoundError"] = 13] = "urlStatusFileNotFoundError";
    SPLoaderErrorCode[SPLoaderErrorCode["urlStatusForbiddenError"] = 14] = "urlStatusForbiddenError";
    SPLoaderErrorCode[SPLoaderErrorCode["urlStatusClientErrorError"] = 15] = "urlStatusClientErrorError";
    SPLoaderErrorCode[SPLoaderErrorCode["urlStatusServerErrorError"] = 16] = "urlStatusServerErrorError";
    SPLoaderErrorCode[SPLoaderErrorCode["urlStatusLocalhostNetworkErrorError"] = 17] = "urlStatusLocalhostNetworkErrorError";
    SPLoaderErrorCode[SPLoaderErrorCode["urlStatusDocLibNetworkErrorError"] = 18] = "urlStatusDocLibNetworkErrorError";
    SPLoaderErrorCode[SPLoaderErrorCode["urlStatusHttpsNetworkErrorError"] = 19] = "urlStatusHttpsNetworkErrorError";
    SPLoaderErrorCode[SPLoaderErrorCode["urlStatusNetworkErrorError"] = 20] = "urlStatusNetworkErrorError";
    SPLoaderErrorCode[SPLoaderErrorCode["urlStatusUndefinedError"] = 21] = "urlStatusUndefinedError";
    SPLoaderErrorCode[SPLoaderErrorCode["failedToCreateGlobalVariable"] = 22] = "failedToCreateGlobalVariable";
    SPLoaderErrorCode[SPLoaderErrorCode["dependencyLoadError"] = 23] = "dependencyLoadError";
    SPLoaderErrorCode[SPLoaderErrorCode["missingPathDependencyError"] = 24] = "missingPathDependencyError";
})(SPLoaderErrorCode || (SPLoaderErrorCode = {}));
/**
 * sp-loader errors.
 *
 * @internal
 */
var SPLoaderError = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(SPLoaderError, _super);
    function SPLoaderError(errorCode, innerError, isExpected) {
        var params = []; // tslint:disable-line:no-any
        for (var _i = 3 // tslint:disable-line:no-any
        ; _i < arguments.length // tslint:disable-line:no-any
        ; _i++ // tslint:disable-line:no-any
        ) {
            params[_i - 3] = arguments[_i]; // tslint:disable-line:no-any
        }
        var _this = _super.call(this, SPLoaderErrorCode[errorCode], _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["Text"].format.apply(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["Text"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])([SPLoaderError._errorCodeToMessageMap.get(errorCode)], params))) || this;
        _this._isExpected = false;
        // Manually set the prototype, as we can no longer extend built-in classes like Error, Array, Map, etc
        // tslint:disable-next-line:max-line-length
        // [https://github.com/Microsoft/TypeScript-wiki/blob/master/Breaking-Changes.md#extending-built-ins-like-error-array-and-map-may-no-longer-work](https://github.com/Microsoft/TypeScript-wiki/blob/master/Breaking-Changes.md#extending-built-ins-like-error-array-and-map-may-no-longer-work)
        //
        // Note: the prototype must also be set on any classes which extend this one
        _this.__proto__ = SPLoaderError.prototype; // tslint:disable-line:no-any
        _this._loaderErrorCode = errorCode;
        _this.innerError = innerError;
        // If the inner error is expected, the error is expected.
        // Otherwise, look at the flag, or set the default to false.
        if (_this.innerError instanceof SPLoaderError) {
            _this._isExpected = _this.innerError.isExpected;
        }
        _this._isExpected = _this._isExpected || isExpected || false;
        return _this;
    }
    Object.defineProperty(SPLoaderError.prototype, "id", {
        /**
         * Error id.
         */
        get: function () {
            return this._loaderErrorCode;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SPLoaderError.prototype, "category", {
        /**
         * Error category.
         */
        get: function () {
            return 'SPLoaderError';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SPLoaderError.prototype, "isExpected", {
        /**
         * True if the error is an expected error.
         * This can happen when it's surfacing an error that happened in the loader,
         * or there is a transient network problem.
         */
        get: function () {
            return this._isExpected;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Error id to string map
     */
    SPLoaderError._errorCodeToMessageMap = new Map([
        [SPLoaderErrorCode.loadComponentMaxRetriesError, _loc_Common_resx__WEBPACK_IMPORTED_MODULE_3__["loadComponentMaxRetriesError"]],
        [SPLoaderErrorCode.loadComponentError, _Error_resx__WEBPACK_IMPORTED_MODULE_2__["loadComponentError"]],
        [SPLoaderErrorCode.loadComponentReturnsEmptyError, _Error_resx__WEBPACK_IMPORTED_MODULE_2__["loadComponentReturnsEmptyError"]],
        [
            SPLoaderErrorCode.loadComponentReturnsDefaultEmptyError,
            _Error_resx__WEBPACK_IMPORTED_MODULE_2__["loadComponentReturnsDefaultEmptyError"]
        ],
        [SPLoaderErrorCode.loadComponentDependencyError, _Error_resx__WEBPACK_IMPORTED_MODULE_2__["loadComponentDependencyError"]],
        [SPLoaderErrorCode.manifestNotFoundError, _loc_Common_resx__WEBPACK_IMPORTED_MODULE_3__["manifestNotFoundError"]],
        // tslint:disable-next-line:max-line-length
        [
            SPLoaderErrorCode.loadPathDependencyBlockedByAnotherDependencyError,
            _Error_resx__WEBPACK_IMPORTED_MODULE_2__["loadPathDependencyBlockedByAnotherDependencyError"]
        ],
        [SPLoaderErrorCode.moduleHasUndeclaredDependencyError, _Error_resx__WEBPACK_IMPORTED_MODULE_2__["moduleHasUndeclaredDependencyError"]],
        [SPLoaderErrorCode.loadEntryPointError, _Error_resx__WEBPACK_IMPORTED_MODULE_2__["loadEntryPointError"]],
        [SPLoaderErrorCode.loadPathDependencyError, _Error_resx__WEBPACK_IMPORTED_MODULE_2__["loadPathDependencyError"]],
        [
            SPLoaderErrorCode.loadComponentDependencyFailoverPathError,
            _Error_resx__WEBPACK_IMPORTED_MODULE_2__["loadComponentDependencyFailoverPathError"]
        ],
        [SPLoaderErrorCode.loadScriptWithStringError, _Error_resx__WEBPACK_IMPORTED_MODULE_2__["loadScriptWithStringError"]],
        [SPLoaderErrorCode.urlStatusLocalhostFileNotFoundError, _Error_resx__WEBPACK_IMPORTED_MODULE_2__["urlStatusLocalhostFileNotFoundError"]],
        [SPLoaderErrorCode.urlStatusFileNotFoundError, _Error_resx__WEBPACK_IMPORTED_MODULE_2__["urlStatusFileNotFoundError"]],
        [SPLoaderErrorCode.urlStatusForbiddenError, _Error_resx__WEBPACK_IMPORTED_MODULE_2__["urlStatusForbiddenError"]],
        [SPLoaderErrorCode.urlStatusClientErrorError, _Error_resx__WEBPACK_IMPORTED_MODULE_2__["urlStatusClientErrorError"]],
        [SPLoaderErrorCode.urlStatusServerErrorError, _Error_resx__WEBPACK_IMPORTED_MODULE_2__["urlStatusServerErrorError"]],
        [SPLoaderErrorCode.urlStatusLocalhostNetworkErrorError, _Error_resx__WEBPACK_IMPORTED_MODULE_2__["urlStatusLocalhostNetworkErrorError"]],
        // Note that the doclib error shows the standard network error message
        [SPLoaderErrorCode.urlStatusDocLibNetworkErrorError, _Error_resx__WEBPACK_IMPORTED_MODULE_2__["urlStatusNetworkErrorError"]],
        [SPLoaderErrorCode.urlStatusHttpsNetworkErrorError, _Error_resx__WEBPACK_IMPORTED_MODULE_2__["urlStatusHttpsNetworkErrorError"]],
        [SPLoaderErrorCode.urlStatusNetworkErrorError, _Error_resx__WEBPACK_IMPORTED_MODULE_2__["urlStatusNetworkErrorError"]],
        [SPLoaderErrorCode.urlStatusUndefinedError, _Error_resx__WEBPACK_IMPORTED_MODULE_2__["urlStatusUndefinedError"]],
        [SPLoaderErrorCode.failedToCreateGlobalVariable, _Error_resx__WEBPACK_IMPORTED_MODULE_2__["failedToCreateGlobalVariableError"]],
        [SPLoaderErrorCode.dependencyLoadError, _Error_resx__WEBPACK_IMPORTED_MODULE_2__["dependencyLoadError"]],
        [SPLoaderErrorCode.missingPathDependencyError, _Error_resx__WEBPACK_IMPORTED_MODULE_2__["missingPathDependencyError"]]
    ] /* fix this typecast, VSO:397687 */);
    return SPLoaderError;
}(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["SPError"]));
/* harmony default export */ __webpack_exports__["default"] = (SPLoaderError);


/***/ }),

/***/ "BwFs":
/*!**********************************!*\
  !*** ./lib/starter/Starter.resx ***!
  \**********************************/
/*! exports provided: browserNotSupportedError, loaderUserFriendlyError, invalidPreloadedDataError, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"browserNotSupportedError\":\"Ţĥĩś vēŕśĩōń ōƒ ŷōũŕ ƀŕōŵśēŕ ĩś ńōţ śũƥƥōŕţēď. Ƥĺēàśē ũƥďàţē ŷōũŕ ƀŕōŵśēŕ ţō ţĥē ĺàţēśţ vēŕśĩōń.\",\"loaderUserFriendlyError\":\"Ćàń\\u0027ţ ĺōàď ţĥē àƥƥĺĩćàţĩōń ōń ţĥĩś ƥàĝē. Ũśē ţĥē ƀŕōŵśēŕ ßàćķ ƀũţţōń ţō ŕēţŕŷ. Ĩƒ ţĥē ƥŕōƀĺēm ƥēŕśĩśţś, ćōńţàćţ ţĥē àďmĩńĩśţŕàţōŕ ōƒ ţĥē śĩţē àńď ĝĩvē ţĥēm ţĥē ĩńƒōŕmàţĩōń ĩń Ţēćĥńĩćàĺ Ďēţàĩĺś.\",\"invalidPreloadedDataError\":\"Ĩńvàĺĩď ƥŕēĺōàďēď ďàţà.\"}");

/***/ }),

/***/ "CI3B":
/*!************************************************!*\
  !*** ./lib/requirejs/loadScriptWithoutEval.js ***!
  \************************************************/
/*! exports provided: loadScriptWithoutEval */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadScriptWithoutEval", function() { return loadScriptWithoutEval; });
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utilities_isCorsEnabled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utilities/isCorsEnabled */ "ASbA");


/**
 * Start download the script without evaluating it.
 * For chromium based browsers, Edge, Safari and Firefox use <link rel='preload'>.
 * For IE, use <script type= 'text/cache'>. Wrong type will let IE avoid evaluating.
 * For other browser, won't affect.
 *
 * Tested in Chrome, Edge Chromium, Edge, Safari, IE, Firefox.
 *
 * @param scriptUrl The script url.
 */
function loadScriptWithoutEval(scriptUrl, appendJSExtension) {
    if (appendJSExtension === void 0) { appendJSExtension = true; }
    if (!document) {
        return Promise.resolve();
    }
    if (appendJSExtension) {
        scriptUrl = scriptUrl + ".js";
    }
    return new Promise(function (resolve, reject) {
        var browser = _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_BrowserDetection"].getBrowserInformation().browser;
        var isCrossOrigin = Object(_utilities_isCorsEnabled__WEBPACK_IMPORTED_MODULE_1__["default"])(scriptUrl);
        switch (browser) {
            case _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_Browser"].Chrome:
            case _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_Browser"].EdgeChromium:
            case _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_Browser"].Edge:
            case _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_Browser"].Safari:
            case _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_Browser"].Firefox: {
                var link = document.createElement('link');
                link.as = 'script';
                link.rel = 'preload';
                if (isCrossOrigin) {
                    link.crossOrigin = 'anonymous';
                }
                link.href = scriptUrl;
                link.onload = function () { return resolve(); };
                link.onerror = function (e) { return reject(e); };
                document.head.appendChild(link);
                break;
            }
            case _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_Browser"].IE: {
                var script = document.createElement('script');
                // IE will not evaluate the script.
                script.type = 'text/cache';
                script.src = scriptUrl;
                if (isCrossOrigin) {
                    script.crossOrigin = 'anonymous';
                }
                document.head.appendChild(script);
                break;
            }
            default: {
                resolve();
            }
        }
    });
}


/***/ }),

/***/ "Eke5":
/*!*************************************!*\
  !*** ./lib/stores/ManifestStore.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tiny_store_ManifestStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../tiny/store/ManifestStore */ "kLLm");
/**
 * @Copyright (c) Microsoft Corporation.  All rights reserved.
 *
 * @file ManifestStore.ts
 */


/**
 * This class maintains a cache of the manifests on the current page.
 *
 * @internal
 */
var ManifestStore = /** @class */ (function () {
    function ManifestStore() {
    }
    Object.defineProperty(ManifestStore, "instance", {
        get: function () {
            if (!this._instance) {
                // This is only for unit tests
                var root = _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["ServiceScope"].startNewRoot();
                root.finish();
                this._instance = new _tiny_store_ManifestStore__WEBPACK_IMPORTED_MODULE_1__["OldManifestStoreShim"](root, '');
            }
            return this._instance;
        },
        set: function (instance) {
            this._instance = instance;
        },
        enumerable: false,
        configurable: true
    });
    return ManifestStore;
}());
/* harmony default export */ __webpack_exports__["default"] = (ManifestStore);


/***/ }),

/***/ "F+Lb":
/*!************************************!*\
  !*** ./lib/stores/AddressStore.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Copyright (c) Microsoft. All rights reserved.
/**
 * Stores the address for each module by its normalized name.
 * This is used for SystemJS to know how to locate each module.
 */
var AddressStore = /** @class */ (function () {
    function AddressStore() {
        /**
         * Map from normalized name to address
         */
        this._addressMap = new Map();
        this._reverseAddressMap = new Map();
    }
    Object.defineProperty(AddressStore, "instance", {
        get: function () {
            if (!AddressStore._instance) {
                AddressStore._instance = new AddressStore();
            }
            return AddressStore._instance;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Returns an address for a module, given its normalized name.
     * @param normalizedName - Normalized name
     */
    AddressStore.prototype.tryGetAddress = function (normalizedName) {
        return this._addressMap.get(normalizedName);
    };
    /**
     * Returns the normalized name for a given address.
     * If the address hasn't been set in the AddressStore, it returns undefined
     * @param address - Address
     */
    AddressStore.prototype.getNormalizedName = function (address) {
        if (this._reverseAddressMap.has(address)) {
            return this._reverseAddressMap.get(address);
        }
        else {
            return undefined;
        }
    };
    /**
     * Set a mapping from a module's normalized name to the module address.
     *
     * @remarks
     * If the address has been set for a previous module's normalized name, when searching for that address
     * the original module's normalized name will be returned.
     * @param normalizedName - Module normalized name
     * @param address - Module address
     */
    AddressStore.prototype.set = function (normalizedName, address) {
        // Multiple normalized names can point to the same address
        if (!this._addressMap.has(normalizedName)) {
            this._addressMap.set(normalizedName, address);
        }
        // An address can point only to one normalized name
        // For implementation purposes, this is the first one that is registered
        // RequireJsLoader.configure handles this case
        if (!this._reverseAddressMap.has(address)) {
            this._reverseAddressMap.set(address, normalizedName);
        }
    };
    return AddressStore;
}());
/* harmony default export */ __webpack_exports__["default"] = (AddressStore);


/***/ }),

/***/ "GHH8":
/*!********************************************!*\
  !*** ./lib/tiny/common/createRootScope.js ***!
  \********************************************/
/*! exports provided: createRootScope */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createRootScope", function() { return createRootScope; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "WYdG");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @microsoft/sp-diagnostics */ "ut3N");
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _microsoft_sp_dynamic_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @microsoft/sp-dynamic-data */ "84nK");
/* harmony import */ var _microsoft_sp_dynamic_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_dynamic_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _microsoft_sp_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @microsoft/sp-http */ "vlQI");
/* harmony import */ var _microsoft_sp_http__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_http__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _microsoft_sp_page_context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @microsoft/sp-page-context */ "X+PM");
/* harmony import */ var _microsoft_sp_page_context__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_page_context__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _flights__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./flights */ "6EK5");
// tslint:disable:export-name







/**
 * Create a root service scope and initialize with SPFx services:
 *   - PageContext
 *   - DynamicDataManager
 *   - HttpClient
 *   - SPHttpClient
 *   - GraphHttpClientContext
 *   - DigestCache
 *
 * @param pageContext - the current SPPageContext
 *
 * @returns - the root scope
 */
function createRootScope(pageContext) {
    var root = _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["ServiceScope"].startNewRoot();
    root.provide(_microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__["_logSourceServiceKey"], _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__["_LogSource"].create('RootServiceScope'));
    root.createDefaultAndProvide(_microsoft_sp_page_context__WEBPACK_IMPORTED_MODULE_5__["PageContext"].serviceKey);
    root.createDefaultAndProvide(_microsoft_sp_dynamic_data__WEBPACK_IMPORTED_MODULE_3__["_DynamicDataUtilities"].IDynamicDataManagerServiceKey);
    root.createDefaultAndProvide(_microsoft_sp_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"].serviceKey);
    var spHttpClient = root.createDefaultAndProvide(_microsoft_sp_http__WEBPACK_IMPORTED_MODULE_4__["SPHttpClient"].serviceKey);
    var graphContext = root.createDefaultAndProvide(_microsoft_sp_http__WEBPACK_IMPORTED_MODULE_4__["_GraphHttpClientContext"].serviceKey);
    var digestCache = root.createDefaultAndProvide(_microsoft_sp_http__WEBPACK_IMPORTED_MODULE_4__["DigestCache"].serviceKey);
    root.finish();
    initializeGraphHttpClient(pageContext, spHttpClient, graphContext);
    initializeDigestCache(pageContext, digestCache);
    return root;
}
function initializeGraphHttpClient(pageContext, spHttpClient, graphContext) {
    var aadInstanceUrl = pageContext.aadInstanceUrl, aadSessionId = pageContext.aadSessionId, aadTenantId = pageContext.aadTenantId, aadUserId = pageContext.aadUserId, CorrelationId = pageContext.CorrelationId, env = pageContext.env, isAnonymousGuestUser = pageContext.isAnonymousGuestUser, isExternalGuestUser = pageContext.isExternalGuestUser, msGraphEndpointUrl = pageContext.msGraphEndpointUrl, spfx3rdPartyServicePrincipalId = pageContext.spfx3rdPartyServicePrincipalId, spfxOBOFlowEnabled = pageContext.spfxOBOFlowEnabled, userPrincipalName = pageContext.userPrincipalName, webAbsoluteUrl = pageContext.webAbsoluteUrl, webServerRelativeUrl = pageContext.webServerRelativeUrl;
    if (_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["Environment"].type !== _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["EnvironmentType"].Local) {
        graphContext.initialize(webServerRelativeUrl, msGraphEndpointUrl, webAbsoluteUrl);
    }
    var defaultAadConfig = {
        aadInstanceUrl: aadInstanceUrl,
        aadSessionId: aadSessionId,
        aadTenantId: aadTenantId,
        aadUserId: aadUserId,
        redirectUri: window.location.origin + "/_forms/" + _microsoft_sp_http__WEBPACK_IMPORTED_MODULE_4__["_AadConstants"].SPFX_SINGLE_SIGN_ON_REPLY_URL,
        servicePrincipalId: spfx3rdPartyServicePrincipalId,
        spRequestGuid: CorrelationId,
        userPrincipalName: isAnonymousGuestUser || isExternalGuestUser ? undefined : userPrincipalName
    };
    var oboConfig;
    if (Object(_flights__WEBPACK_IMPORTED_MODULE_6__["isMSALThirdPartyEnabled"])()) {
        defaultAadConfig.aadInstanceUrl =
            !env || env.toLowerCase() !== 'edog'
                ? 'https://login.microsoftonline.com'
                : 'https://login.windows-ppe.net';
    }
    if ((spfxOBOFlowEnabled && _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["_BrowserUtilities"].isMobileWebView()) ||
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["_BrowserUtilities"].isWebViewHosted() ||
        (Object(_flights__WEBPACK_IMPORTED_MODULE_6__["isSafariAuthPatchEnbled"])() && /.*AppleWebKit.*Safari/.test(navigator.userAgent))) {
        oboConfig = { spHttpClient: spHttpClient, serverRelativeUrl: webAbsoluteUrl };
    }
    try {
        _microsoft_sp_http__WEBPACK_IMPORTED_MODULE_4__["_AadTokenProviders"]._initialize(new _microsoft_sp_http__WEBPACK_IMPORTED_MODULE_4__["AadTokenProvider"](defaultAadConfig, oboConfig), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, defaultAadConfig), { servicePrincipalId: _microsoft_sp_http__WEBPACK_IMPORTED_MODULE_4__["_AadConstants"].PRE_AUTHORIZED_APP_PRINCIPAL_ID }));
    }
    catch (e) {
        _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__["_TraceLogger"].logVerbose(_microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__["_LogSource"].create('RootServiceScope'), 'AadTokenProviders: Failed to initialize');
    }
}
function initializeDigestCache(pageContext, digestCache) {
    var formDigestTimeoutSeconds = pageContext.formDigestTimeoutSeconds, formDigestValue = pageContext.formDigestValue, serverTime = pageContext.serverTime, webAbsoluteUrl = pageContext.webAbsoluteUrl, webServerRelativeUrl = pageContext.webServerRelativeUrl;
    // Value of serverTime is same as what comes as part of formDigestValue
    // but is in locale neutral ISO 8601 format. So it will get correctly
    // parsed by Date class irrespective of client locale.
    // serverTime is accurate to the order of ms, while DateTime which comes
    // as part of formDigestValue is trimmed to order of seconds. Subtract
    // 30s from expirationTimeStamp to avoid any timing errors b/w server and client
    var expirationTimestamp = new Date(serverTime).getTime() + 1000 * formDigestTimeoutSeconds - 30000;
    for (var _i = 0, _a = [webAbsoluteUrl, webServerRelativeUrl]; _i < _a.length; _i++) {
        var url = _a[_i];
        digestCache.addDigestToCache(url, formDigestValue, expirationTimestamp);
    }
}


/***/ }),

/***/ "GV8Z":
/*!***********************************!*\
  !*** ./lib/debug/DebugManager.js ***!
  \***********************************/
/*! exports provided: DebugManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DebugManager", function() { return DebugManager; });
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tiny_common_killSwitches__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../tiny/common/killSwitches */ "zBRI");
/* harmony import */ var _stores_ManifestStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../stores/ManifestStore */ "Eke5");
/* harmony import */ var _DebugStatus__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DebugStatus */ "+Zvm");
/* harmony import */ var _showDebugError__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./showDebugError */ "AtZb");
/* harmony import */ var _DebugManager_resx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./DebugManager.resx */ "2L73");
var _DebugManager_resx__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./DebugManager.resx */ "2L73", 1);






/**
 * Put debug data in a session variable so it gets cleared when the browser or tab is closed.
 */
var SPFX_DEBUG_SESSION_VAR_ID = 'spfx-debug';
/**
 * The ?debugManifestsFile query parameter
 */
var DEBUG_MANIFESTS_FILE_QUERY_PARAM_NAME = 'debugManifestsFile';
/**
 * The ?livereload query parameter. This enabled automatic reloading when using gulp serve
 */
var LIVERELOAD_QUERY_PARAM_NAME = 'livereload';
/**
 * The ?loader query parameter. This is replacing the ?moduleLoader query parameter
 */
var LOADER_QUERY_PARAM_NAME = 'loader';
/**
 * Resets the debug state. Mutually exclusive to all other debug parameters.
 */
var RESET_QUERY_PARAM_NAME = 'reset';
/**
 * If set to "true", use the react-dom profiling bundle.
 */
var REACT_PROFILER = 'react-profiler';
var LOADER_EXPORTS_NAME = 'spModuleLoader';
var EMPTY_DEBUG_LOAD_RESULT = {
    debugLoader: undefined,
    debugManifests: undefined,
    liveReload: false,
    registerAsNonDebug: false
};
/**
 * Provides APIs to manage debug scripts.
 *
 * This is used in order to provide security measures before running arbitrary code, and to provide
 * improved debugging experience when a debug loader is used.
 *
 * @internal
 */
var DebugManager = /** @class */ (function () {
    function DebugManager() {
    }
    /**
     * Checks if debug scripts are requested.
     * This method is the first thing called after flights are initialized in SPStarter.start() and should not be called
     * anywhere else.
     *
     * The following cases are supported (in order):
     *  - If the ?reset query parameter is present, clear the debug data and load the page normally.
     *  - If there is SPFX Debug session data containing the testMode property, load the scripts specified in the
     *      session data and return the debug loader and/or manifests. This case is only used for integration tests. The
     *      session data will get set externally by the test harness.
     *  - If the ?loader and/or the ?debugManifestsFile query parameter is present, prompt for
     *      consent and, if consent is granted, load the scripts, record the URLs in the SPFX Debug session data, and
     *      return the debug loader and/or manifests.
     *  - If there is SPFX Debug session data containing a loader URL and/or a manifests file URL, prompt for consent and,
     *      if consent is granted, load the scripts and return the debug loader and/or debug manifests.
     *  - In all other cases, return with no debug loader or manifests.
     *
     * @param componentLoader - The component loader to use to load debug scripts.
     * @param debugData - If defined, the currently executing loader is already a debug loader and the
     *  specified debug data was loaded by the non-debug loader. If the currently executing loader is already a debug
     *  loader, just set these manifests in the manifest store and return.
     *
     * @returns Promise optionally resolving to a debug loader.
     */
    DebugManager.initialize = function (componentLoader, debugData) {
        var queryParameters = new URL(window.location.href).searchParams;
        if (debugData) {
            if (!Object(_tiny_common_killSwitches__WEBPACK_IMPORTED_MODULE_1__["isReactProfilerKSActivated"])()) {
                // Currently we can limit this to debugging and allow it for production if needed.
                _DebugStatus__WEBPACK_IMPORTED_MODULE_3__["DebugStatus"].shouldUseReactDomProfiling =
                    (queryParameters.get(REACT_PROFILER) || '').toLowerCase() === 'true';
            }
            _DebugStatus__WEBPACK_IMPORTED_MODULE_3__["DebugStatus"].dangerouslyEnableDebug();
            DebugManager._registerManifests(debugData.debugManifests || [], debugData.registerAsNonDebug);
            if (debugData.liveReload) {
                DebugManager._enableLiveReload(componentLoader);
            }
            return Promise.resolve(EMPTY_DEBUG_LOAD_RESULT);
        }
        if (!DebugManager._initializationPromise) {
            var spfxDebugSessionData_1 = {};
            var isSpfxDebugEnabled = _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPFlight"].isDebugFlightEnabled;
            try {
                spfxDebugSessionData_1 = JSON.parse(sessionStorage.getItem(SPFX_DEBUG_SESSION_VAR_ID) || '{}');
            }
            catch (e) {
                // Error parsing session data. Assume there is no debug session data.
            }
            DebugManager._initializationPromise = DebugManager._handleDebugParameters(componentLoader, spfxDebugSessionData_1, queryParameters, isSpfxDebugEnabled).then(function (debugLoadResult) {
                if (!Object(_tiny_common_killSwitches__WEBPACK_IMPORTED_MODULE_1__["isReactProfilerKSActivated"])()) {
                    // Currently we can limit this to debugging and allow it for production if needed.
                    _DebugStatus__WEBPACK_IMPORTED_MODULE_3__["DebugStatus"].shouldUseReactDomProfiling =
                        (queryParameters.get(REACT_PROFILER) || '').toLowerCase() === 'true';
                }
                // Always re-save the session data before continuing
                spfxDebugSessionData_1.liveReload = DebugManager._liveReload;
                spfxDebugSessionData_1.loaderUrl = DebugManager._debugLoaderUrl;
                spfxDebugSessionData_1.manifestsFileUrl = DebugManager._debugManifestsFileUrl;
                try {
                    var serializedDebugSessionData = JSON.stringify(spfxDebugSessionData_1);
                    if (serializedDebugSessionData !== '{}') {
                        sessionStorage.setItem(SPFX_DEBUG_SESSION_VAR_ID, serializedDebugSessionData);
                    }
                    else {
                        sessionStorage.removeItem(SPFX_DEBUG_SESSION_VAR_ID);
                    }
                }
                catch (e) {
                    // If we get an error saving the debug session data, don't interrupt the rest of the initialization flow
                }
                return debugLoadResult;
            });
        }
        return DebugManager._initializationPromise;
    };
    DebugManager.loadAndRegisterManifestsFile = function (componentLoader, manifestsFileUrl, registerAsNonDebug) {
        return componentLoader
            .loadScript(manifestsFileUrl)
            .then(function (manifestScript) {
            var manifests = manifestScript.getManifests();
            DebugManager._registerManifests(manifests, registerAsNonDebug);
            return manifests;
        });
    };
    DebugManager._handleDebugParameters = function (componentLoader, spfxDebugSessionData, queryParameters, isSpfxDebugEnabled) {
        return new Promise(function (resolve) {
            if (queryParameters.get(RESET_QUERY_PARAM_NAME) !== null) {
                // The ?reset query parameter is present, clear the debug data and load the page normally.
                spfxDebugSessionData.testMode = undefined;
                sessionStorage.removeItem(SPFX_DEBUG_SESSION_VAR_ID);
                resolve(EMPTY_DEBUG_LOAD_RESULT);
            }
            else if (isSpfxDebugEnabled && spfxDebugSessionData.testMode) {
                // The test mode session property is set
                _DebugStatus__WEBPACK_IMPORTED_MODULE_3__["DebugStatus"].dangerouslyEnableDebug();
                DebugManager._debugManifestsFileUrl = spfxDebugSessionData.manifestsFileUrl;
                DebugManager._debugLoaderUrl = spfxDebugSessionData.loaderUrl;
                DebugManager._getDebugScripts(componentLoader, resolve, /* registerAsNonDebug */ false);
            }
            else {
                // We aren't in test mode, so keep going with the normal debug loader flow
                DebugManager._handleNonTestModeDebugParameters(componentLoader, spfxDebugSessionData, queryParameters, isSpfxDebugEnabled, resolve);
            }
        });
    };
    DebugManager._handleNonTestModeDebugParameters = function (componentLoader, spfxDebugSessionData, queryParameters, isSpfxDebugEnabled, resolve) {
        var debugManifestsFileUrl = queryParameters.get(DEBUG_MANIFESTS_FILE_QUERY_PARAM_NAME) ||
            spfxDebugSessionData.manifestsFileUrl ||
            undefined;
        var debugLoaderUrl = isSpfxDebugEnabled
            ? queryParameters.get(LOADER_QUERY_PARAM_NAME) || spfxDebugSessionData.loaderUrl || undefined
            : undefined;
        var liveReload = isSpfxDebugEnabled
            ? queryParameters.get(LIVERELOAD_QUERY_PARAM_NAME) === 'true' ||
                spfxDebugSessionData.liveReload ||
                false
            : false;
        // Check if the manifests file and/or the loader that we're trying to use have already been
        // allowed and set in the sessionStorage debug data. If they've already been allowed, we don't have to
        // prompt the user again.
        var loaderDebugAlreadyAllowed = debugLoaderUrl === spfxDebugSessionData.loaderUrl;
        var manifestsDebugAlreadyAllowed = debugManifestsFileUrl === spfxDebugSessionData.manifestsFileUrl;
        if (debugLoaderUrl || debugManifestsFileUrl) {
            _DebugStatus__WEBPACK_IMPORTED_MODULE_3__["DebugStatus"].confirmDebugAllowed({
                loaderRequested: !!debugLoaderUrl,
                manifestsRequested: !!debugManifestsFileUrl,
                loaderDebugAlreadyAllowed: loaderDebugAlreadyAllowed,
                manifestsDebugAlreadyAllowed: manifestsDebugAlreadyAllowed
            })
                .then(function (allowed) {
                if (allowed) {
                    // Save the debug URLs onto the DebugManager's state so they will be written to the debug
                    // session data
                    DebugManager._liveReload = liveReload;
                    DebugManager._debugLoaderUrl = debugLoaderUrl;
                    DebugManager._debugManifestsFileUrl = debugManifestsFileUrl;
                    DebugManager._getDebugScripts(componentLoader, resolve, /* registerAsNonDebug */ false);
                }
                else {
                    resolve(EMPTY_DEBUG_LOAD_RESULT);
                }
            })
                .catch(console.error);
        }
        else {
            // No debug scripts requested.
            resolve(EMPTY_DEBUG_LOAD_RESULT);
        }
    };
    DebugManager._getDebugScripts = function (componentLoader, resolve, registerAsNonDebug) {
        var loaderUrl = DebugManager._debugLoaderUrl;
        var manifestFileUrl = DebugManager._debugManifestsFileUrl;
        var debugLoaderPromise = loaderUrl
            ? DebugManager._loadLoader(componentLoader, loaderUrl)
            : Promise.resolve(undefined);
        var debugManifestsFilePromise = manifestFileUrl
            ? DebugManager.loadAndRegisterManifestsFile(componentLoader, manifestFileUrl, registerAsNonDebug)
            : Promise.resolve(undefined);
        // Wrap errors so we know where the error came from
        debugLoaderPromise = debugLoaderPromise.catch(function (error) {
            throw { errorSource: 'loader', error: error };
        });
        debugManifestsFilePromise = debugManifestsFilePromise.catch(function (error) {
            throw { errorSource: 'manifestsFile', error: error };
        });
        Promise.all([debugLoaderPromise, debugManifestsFilePromise])
            .then(function (_a) {
            var debugLoader = _a[0], debugManifests = _a[1];
            resolve({ debugLoader: debugLoader, debugManifests: debugManifests, liveReload: DebugManager._liveReload, registerAsNonDebug: registerAsNonDebug });
        })
            .catch(function (error) {
            if (error instanceof Error) {
                Object(_showDebugError__WEBPACK_IMPORTED_MODULE_4__["default"])(error, _DebugManager_resx__WEBPACK_IMPORTED_MODULE_5__["errorLoadingDebugScriptUnknown"], _DebugManager_resx__WEBPACK_IMPORTED_MODULE_5__["errorLoadingUnknownTitle"]).catch(console.error);
            }
            else {
                var errorText = _DebugManager_resx__WEBPACK_IMPORTED_MODULE_5__["errorLoadingDebugScriptUnknown"];
                var title = _DebugManager_resx__WEBPACK_IMPORTED_MODULE_5__["errorLoadingUnknownTitle"];
                switch (error.errorSource) {
                    case 'loader':
                        errorText = DebugManager._getUrlErrorText(loaderUrl || '', LOADER_QUERY_PARAM_NAME);
                        title = _DebugManager_resx__WEBPACK_IMPORTED_MODULE_5__["errorLoadingDebugLoaderTitle"];
                        break;
                    case 'manifestsFile':
                        errorText = DebugManager._getUrlErrorText(manifestFileUrl || '', DEBUG_MANIFESTS_FILE_QUERY_PARAM_NAME);
                        title = _DebugManager_resx__WEBPACK_IMPORTED_MODULE_5__["errorLoadingDebugManifestTitle"];
                        break;
                }
                Object(_showDebugError__WEBPACK_IMPORTED_MODULE_4__["default"])(error.error, errorText, title).catch(console.error);
            }
        });
    };
    DebugManager._loadLoader = function (componentLoader, loaderUrl) {
        // This deletes the variable window.spModuleLoader created by the assembly
        delete window[LOADER_EXPORTS_NAME];
        // Delete all existing webpackJsonp globals before loading a new assembly
        for (var _i = 0, _a = Object.keys(window); _i < _a.length; _i++) {
            var globalName = _a[_i];
            if (globalName.match(/^webpackJsonp/i)) {
                delete window[globalName];
            }
        }
        return componentLoader.loadScript(loaderUrl, { globalExportsName: LOADER_EXPORTS_NAME });
    };
    DebugManager._getUrlErrorText = function (url, paramName) {
        var isMalformed = !url.match(/^https?\:\/\//);
        var isHttps = !isMalformed && !!url.match(/^https/);
        return isMalformed
            ? _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Text"].format(_DebugManager_resx__WEBPACK_IMPORTED_MODULE_5__["errorLoadingDebugScriptMalformed"], url)
            : _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Text"].format(isHttps ? _DebugManager_resx__WEBPACK_IMPORTED_MODULE_5__["errorLoadingDebugScriptHTTPS"] : _DebugManager_resx__WEBPACK_IMPORTED_MODULE_5__["errorLoadingDebugScriptHTTP"], paramName);
    };
    DebugManager._registerManifests = function (manifests, registerAsNonDebug) {
        if (registerAsNonDebug) {
            _stores_ManifestStore__WEBPACK_IMPORTED_MODULE_2__["default"].instance.registerManifests(manifests, false);
        }
        else {
            _stores_ManifestStore__WEBPACK_IMPORTED_MODULE_2__["default"].instance.registerDebugManifests(manifests);
        }
    };
    DebugManager._enableLiveReload = function (componentLoader) {
        try {
            // This is the default port and default location of the livereload script from gulp-connect
            // We don't override these in the sp-client build chain. Once we have proper Hot Module Replacement
            // from react/webpack-dev-server this code will be made redundant.
            componentLoader.loadScript('https://localhost:35729/livereload.js').catch(function () {
                /* no-op */
            });
        }
        catch (_) {
            /* no-op */
        }
    };
    return DebugManager;
}());



/***/ }),

/***/ "HLbO":
/*!***************************************!*\
  !*** ./lib/utilities/KillSwitches.js ***!
  \***************************************/
/*! exports provided: KillSwitches */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KillSwitches", function() { return KillSwitches; });
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__);
/**
 * @Copyright (c) Microsoft Corporation.  All rights reserved.
 */

var KillSwitches = /** @class */ (function () {
    function KillSwitches() {
    }
    KillSwitches.isErrorAspxUrlFixActivated = function () {
        return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPKillSwitch"].isActivated(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Guid"].parse('4b94b3f2-a60f-4044-99e8-82e1cceb0e6b'), '7/1/20', 'Invalid Error.aspx URL');
    };
    return KillSwitches;
}());



/***/ }),

/***/ "HcMa":
/*!******************************!*\
  !*** ./lib/error/Error.resx ***!
  \******************************/
/*! exports provided: listSeparator, loadComponentError, loadComponentDependencyError, loadComponentDependencyFailoverPathError, loadPathDependencyError, loadPathDependencyBlockedByAnotherDependencyError, loadEntryPointError, loadComponentReturnsEmptyError, loadComponentReturnsDefaultEmptyError, moduleHasUndeclaredDependencyError, loadScriptWithStringError, urlStatusLocalhostFileNotFoundError, urlStatusFileNotFoundError, urlStatusForbiddenError, urlStatusClientErrorError, urlStatusServerErrorError, urlStatusLocalhostNetworkErrorError, urlStatusHttpsNetworkErrorError, urlStatusNetworkErrorError, urlStatusUndefinedError, failedToCreateGlobalVariableError, dependencyLoadError, missingPathDependencyError, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"listSeparator\":\", \",\"loadComponentError\":\"Ƒàĩĺēď ţō ĺōàď ćōmƥōńēńţ \\u0022{0}\\u0022 ({1}). Ōŕĩĝĩńàĺ ēŕŕōŕ: {2}\",\"loadComponentDependencyError\":\"Ƒàĩĺēď ţō ĺōàď ćōmƥōńēńţ ďēƥēńďēńćŷ \\u0022{0}\\u0022 ƒŕōm ćōmƥōńēńţ \\u0022{1}\\u0022 ({2}). Ōŕĩĝĩńàĺ ēŕŕōŕ: {3}\",\"loadComponentDependencyFailoverPathError\":\"Ƒàĩĺēď ţō ĺōàď ćōmƥōńēńţ ďēƥēńďēńćŷ \\u0022{0}\\u0022 ŵĩţĥ ƒàĩĺōvēŕ ƥàţĥ \\u0022{1}\\u0022 ƒŕōm ćōmƥōńēńţ \\u0022{2}\\u0022 ({3}). Ōŕĩĝĩńàĺ ēŕŕōŕ: {4}\",\"loadPathDependencyError\":\"Ƒàĩĺēď ţō ĺōàď ƥàţĥ ďēƥēńďēńćŷ \\u0022{0}\\u0022 ƒŕōm ćōmƥōńēńţ \\u0022{1}\\u0022 ({2}). Ōŕĩĝĩńàĺ ēŕŕōŕ: {3}\",\"loadPathDependencyBlockedByAnotherDependencyError\":\"Ƒàĩĺēď ţō ĺōàď ƥàţĥ ďēƥēńďēńćŷ \\u0022{0}\\u0022 ƒŕōm ćōmƥōńēńţ \\u0022{1}\\u0022 ({2}) ďũē ţō àńōţĥēŕ ďēƥēńďēńćŷ ţĥàţ ƒàĩĺēď ţō ĺōàď.\",\"loadEntryPointError\":\"Ƒàĩĺēď ţō ĺōàď ēńţŕŷ ƥōĩńţ ƒŕōm ćōmƥōńēńţ \\u0022{0}\\u0022 ({1}). Ōŕĩĝĩńàĺ ēŕŕōŕ: {2}\",\"loadComponentReturnsEmptyError\":\"ĺōàďĆōmƥōńēńţ() ŕēţũŕńēď àń ēmƥţŷ ōƀĴēćţ ƒōŕ ćōmƥōńēńţ \\u0022{0}\\u0022 ({1}).\",\"loadComponentReturnsDefaultEmptyError\":\"ĺōàďĆōmƥōńēńţ() ŕēţũŕńēď àń ōƀĴēćţ ŵĩţĥ àń ēmƥţŷ ďēƒàũĺţ ƥŕōƥēŕţŷ ƒōŕ ćōmƥōńēńţ \\u0022{0}\\u0022 ({1}).\",\"moduleHasUndeclaredDependencyError\":\"Ţĥē ēńţŕŷ ƥōĩńţ ƒōŕ ćōmƥōńēńţ \\u0022{0}\\u0022 ({1}) ĥàś à ďēƥēńďēńćŷ ōń \\u0022{2}\\u0022 ţĥàţ ĩś ńōţ ďēćĺàŕēď ĩń ţĥē màńĩƒēśţ.\",\"loadScriptWithStringError\":\"ĺōàďŚćŕĩƥţ ƒũńćţĩōń ďōēśń\\u0027ţ àĺĺōŵ à śţŕĩńĝ àś 2ńď ƥàŕàmēţēŕ. Ũśē ĨĹōàďŚćŕĩƥţŌƥţĩōńś ĩńśţēàď.\",\"urlStatusLocalhostFileNotFoundError\":\"Ƒàĩĺēď ţō ĺōàď ŨŔĹ \\u0027{3}\\u0027 ƒōŕ ŕēśōũŕćē \\u0027{2}\\u0027 ĩń ćōmƥōńēńţ \\u0027{0}\\u0027 ({1}). Ţĥē ƒĩĺē ŵàś ńōţ ƒōũńď ĩń ţĥē śēŕvēŕ. Màķē śũŕē ţĥàţ ŷōũ àŕē ŕũńńĩńĝ \\u0027ĝũĺƥ śēŕvē\\u0027.\",\"urlStatusFileNotFoundError\":\"Ƒàĩĺēď ţō ĺōàď ŨŔĹ \\u0027{3}\\u0027 ƒōŕ ŕēśōũŕćē \\u0027{2}\\u0027 ĩń ćōmƥōńēńţ \\u0027{0}\\u0027 ({1}). Ţĥē ƒĩĺē ŵàś ńōţ ƒōũńď ĩń ţĥē śēŕvēŕ.\",\"urlStatusForbiddenError\":\"Ƒàĩĺēď ţō ĺōàď ŨŔĹ \\u0027{3}\\u0027 ƒōŕ ŕēśōũŕćē \\u0027{2}\\u0027 ĩń ćōmƥōńēńţ \\u0027{0}\\u0027 ({1}). Ţĥē àććēśś ţō ţĥē ƒĩĺē ĩś ƒōŕƀĩďďēń.\",\"urlStatusClientErrorError\":\"Ƒàĩĺēď ţō ĺōàď ŨŔĹ \\u0027{3}\\u0027 ƒōŕ ŕēśōũŕćē \\u0027{2}\\u0027 ĩń ćōmƥōńēńţ \\u0027{0}\\u0027 ({1}). Ţĥēŕē ŵàś àń ēŕŕōŕ ŕēǫũēśţĩńĝ ţĥē ƒĩĺē.\",\"urlStatusServerErrorError\":\"Ƒàĩĺēď ţō ĺōàď ŨŔĹ \\u0027{3}\\u0027 ƒōŕ ŕēśōũŕćē \\u0027{2}\\u0027 ĩń ćōmƥōńēńţ \\u0027{0}\\u0027 ({1}). Ţĥēŕē ŵàś à ƥŕōƀĺēm ĩń ţĥē śēŕvēŕ.\",\"urlStatusLocalhostNetworkErrorError\":\"Ƒàĩĺēď ţō ĺōàď ŨŔĹ \\u0027{3}\\u0027 ƒōŕ ŕēśōũŕćē \\u0027{2}\\u0027 ĩń ćōmƥōńēńţ \\u0027{0}\\u0027 ({1}). Ţĥēŕē ŵàś à ńēţŵōŕķ ƥŕōƀĺēm. Màķē śũŕē ţĥàţ ŷōũ àŕē ŕũńńĩńĝ \\u0027ĝũĺƥ śēŕvē\\u0027 àńď ŷōũ ĥàvē ŕũń \\u0027ĝũĺƥ ţŕũśţ-ďēv-ćēŕţ\\u0027.\",\"urlStatusHttpsNetworkErrorError\":\"Ƒàĩĺēď ţō ĺōàď ŨŔĹ \\u0027{3}\\u0027 ƒōŕ ŕēśōũŕćē \\u0027{2}\\u0027 ĩń ćōmƥōńēńţ \\u0027{0}\\u0027 ({1}). Ţĥēŕē ŵàś à ńēţŵōŕķ ƥŕōƀĺēm. Ţĥĩś màŷ ƀē à ƥŕōƀĺēm ŵĩţĥ à ĤŢŢƤŚ ćēŕţĩƒĩćàţē. Màķē śũŕē ŷōũ ĥàvē ţĥē ŕĩĝĥţ ćēŕţĩƒĩćàţē.\",\"urlStatusNetworkErrorError\":\"Ƒàĩĺēď ţō ĺōàď ŨŔĹ \\u0027{3}\\u0027 ƒōŕ ŕēśōũŕćē \\u0027{2}\\u0027 ĩń ćōmƥōńēńţ \\u0027{0}\\u0027 ({1}). Ţĥēŕē ŵàś à ńēţŵōŕķ ƥŕōƀĺēm.\",\"urlStatusUndefinedError\":\"Ƒàĩĺēď ţō ĺōàď ŨŔĹ \\u0027{3}\\u0027 ƒōŕ ŕēśōũŕćē \\u0027{2}\\u0027 ĩń ćōmƥōńēńţ \\u0027{0}\\u0027 ({1}) ƀēćàũśē ōƒ ũńķńōŵń ƥŕōƀĺēmś.\",\"failedToCreateGlobalVariableError\":\"Ƒàĩĺēď ţō ćŕēàţē ĝĺōƀàĺ vàŕĩàƀĺē \\u0022{0}\\u0022 ƒŕōm śćŕĩƥţ \\u0022{1}\\u0022\",\"dependencyLoadError\":\"Ƒàĩĺēď ţō ĺōàď mōďũĺē \\u0027{0}\\u0027 ƀēćàũśē ďēƥēńďēńćŷ {1} ŵàś ńōţ ĺōàďēď\",\"missingPathDependencyError\":\"Mĩśśĩńĝ ƥàţĥ ďēƥēńďēńćŷ \\u0022{0}\\u0022 ƒŕōm ćōmƥōńēńţ \\u0022{1}\\u0022 ({2}). Ēxĩśţĩńĝ ƥàţĥ ďēƥēńďēńćĩēś: {3}\"}");

/***/ }),

/***/ "IG7x":
/*!****************************************************!*\
  !*** ./lib/DeveloperTools/DeveloperToolsLoader.js ***!
  \****************************************************/
/*! exports provided: initialize, registerDeveloperToolsTab, toggleDeveloperTools */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialize", function() { return initialize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerDeveloperToolsTab", function() { return registerDeveloperToolsTab; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleDeveloperTools", function() { return toggleDeveloperTools; });
/**
 * @Copyright (c) Microsoft Corporation.  All rights reserved.
 *
 * @file DeveloperToolsLoader.ts
 */
var F12_KEYCODE = 123;
var MAC_PLATFORM_IDENTIFIER = 'MacIntel';
var _listenerHasBeenRegistered = false;
var _developerTools;
var _developerToolsTabsBacklog = [];
function initialize(serviceScope) {
    if (!_listenerHasBeenRegistered) {
        document.documentElement.addEventListener('keydown', function (event) {
            var isMac = navigator.platform === MAC_PLATFORM_IDENTIFIER;
            // Detect ctrl+F12 for any platform, and detect ⌘+F12 on macs
            if (((event.ctrlKey && !event.metaKey) || (isMac && event.metaKey && !event.ctrlKey)) &&
                !event.altKey &&
                event.keyCode === F12_KEYCODE) {
                // ctrl+F12
                toggleDeveloperTools(serviceScope);
                event.preventDefault();
            }
        });
        _listenerHasBeenRegistered = true;
    }
}
/**
 * Registers a tab in the developer tools. The developer tools are invoked by pressing "CTRL+F12".
 *
 * @param developerToolsTab - The tab definition.
 *
 * @internal
 */
function registerDeveloperToolsTab(developerToolsTab) {
    if (_developerTools) {
        _developerTools.registerDeveloperToolsTab(developerToolsTab);
    }
    else {
        _developerToolsTabsBacklog.push(developerToolsTab);
    }
}
/**
 * Shows/hides the developer tools panel.
 *
 * @internal
 */
function toggleDeveloperTools(serviceScope) {
    // tslint:disable-line:export-name
    if (_developerTools) {
        _developerTools.toggleDeveloperTools();
    }
    else {
        // tslint:disable-next-line:no-require-ensure (this code doesn't support the import(...) pattern)
        Promise.all(/*! require.ensure | developer-tools */[__webpack_require__.e("vendors~debug-prompt-components~developer-tools"), __webpack_require__.e("vendors~developer-tools"), __webpack_require__.e("developer-tools")]).then((function (require) {
            _initializeDeveloperTools(__webpack_require__(/*! ./DeveloperTools */ "PVnk").default, serviceScope);
        }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
    }
}
function _initializeDeveloperTools(developerToolsClass, serviceScope) {
    _developerTools = developerToolsClass.instance;
    _developerTools.initialize(serviceScope);
    _developerToolsTabsBacklog.forEach(function (developerToolsTab) {
        _developerTools.registerDeveloperToolsTab(developerToolsTab);
    });
    _developerTools.showHideDeveloperTools(true);
}


/***/ }),

/***/ "Jkl9":
/*!********************************!*\
  !*** ./lib/stores/Stores.resx ***!
  \********************************/
/*! exports provided: tooManyComponentsError, deleteComponentLog, noComponentFoundError, manifestNotFoundByIdError, tooManyManifestsError, tooManyCompatibleVersionsError, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"tooManyComponentsError\":\"Ţōō màńŷ ćōmƥōńēńţś ƒōũńď ƒōŕ ĩď \\u0022{0}\\u0022.\",\"deleteComponentLog\":\"Ďēĺēţĩńĝ ćōmƥōńēńţ \\u0022{0}\\u0022 vēŕśĩōń \\u0022{1}\\u0022 ƒŕōm ţĥē śţōŕē.\",\"noComponentFoundError\":\"Ńō ćōmƥōńēńţ ƒōũńď ƒōŕ ĩď \\u0022{0}\\u0022.\",\"manifestNotFoundByIdError\":\"Màńĩƒēśţ ńōţ ƒōũńď ƒōŕ ćōmƥōńēńţ ĩď \\u0022{0}\\u0022.\",\"tooManyManifestsError\":\"{0} màńĩƒēśţś (vēŕśĩōńś {1}) ƒōũńď ƒōŕ ćōmƥōńēńţ \\u0022{2}\\u0022.\",\"tooManyCompatibleVersionsError\":\"{0} ćōmƥàţĩƀĺē vēŕśĩōńś ({1}) ƒōũńď ƒōŕ ćōmƥōńēńţ \\u0022{2}\\u0022 vēŕśĩōń \\u0022{3}\\u0022.\"}");

/***/ }),

/***/ "KZU3":
/*!*****************************************!*\
  !*** ./lib/loader/SPComponentLoader.js ***!
  \*****************************************/
/*! exports provided: SPComponentLoader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SPComponentLoader", function() { return SPComponentLoader; });
/* harmony import */ var _microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/sp-lodash-subset */ "Pk8u");
/* harmony import */ var _microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_0__);
// Copyright (c) Microsoft. All rights reserved.

/**
 * Component loader.
 * Needs to be initialized with an implemented `ISPComponentLoader`.
 *
 * @public
 */
var SPComponentLoader = /** @class */ (function () {
    function SPComponentLoader() {
    }
    /**
     * Initializes the component loader with an implementation.
     * Must be called once before it can be used.
     *
     * @internal
     */
    SPComponentLoader._initialize = function (componentLoader) {
        SPComponentLoader._instance = componentLoader;
    };
    /**
     * {@inheritDoc  _ISPComponentLoader._startApplication}
     *
     * @internal
     */
    SPComponentLoader._startApplication = function (preloadedData) {
        return SPComponentLoader._instance._startApplication(preloadedData);
    };
    /**
     * {@inheritdoc _ISPComponentLoader._preloadComponents}
     *
     * @internal
     */
    SPComponentLoader._preloadComponents = function () {
        SPComponentLoader._instance._preloadComponents();
    };
    // Public API
    /**
     * {@inheritDoc  _ISPComponentLoader.loadCss}
     */
    SPComponentLoader.loadCss = function (url) {
        return SPComponentLoader._instance.loadCss(url);
    };
    /**
     * {@inheritDoc  _ISPComponentLoader.loadScript}
     */
    SPComponentLoader.loadScript = function (url, options) {
        return SPComponentLoader._instance.loadScript(url, options);
    };
    /**
     * {@inheritDoc  _ISPComponentLoader.loadComponent}
     */
    SPComponentLoader.loadComponent = function (manifest) {
        return SPComponentLoader._instance.loadComponent(manifest);
    };
    // Alpha API
    /**
     * {@inheritDoc  _ISPComponentLoader.loadComponentById}
     *
     * @public
     */
    SPComponentLoader.loadComponentById = function (id, version) {
        return SPComponentLoader._instance.loadComponentById(id, version);
    };
    /**
     * {@inheritDoc  _ISPComponentLoader.registerManifests}
     *
     * @alpha
     */
    SPComponentLoader.registerManifests = function (manifests) {
        return SPComponentLoader._instance.registerManifests(manifests);
    };
    /**
     * {@inheritDoc  _ISPComponentLoader.manifestReferences}
     *
     * @internal
     */
    SPComponentLoader._getManifestReferences = function () {
        return SPComponentLoader._instance._manifestReferences;
    };
    /**
     * Returns static copies of all the manifests.
     *
     * @public
     */
    SPComponentLoader.getManifests = function () {
        var retVal = [];
        SPComponentLoader._instance._manifestReferences.forEach(function (manifest) {
            retVal.push(Object(_microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_0__["cloneDeep"])(manifest));
        });
        return retVal;
    };
    /**
     * {@inheritDoc  _ISPComponentLoader.tryGetLoadedComponent}
     *
     * @alpha
     */
    SPComponentLoader.tryGetLoadedComponent = function (manifest) {
        return SPComponentLoader._instance.tryGetLoadedComponent(manifest);
    };
    /**
     * {@inheritDoc  _ISPComponentLoader.tryGetManifestById}
     *
     * @alpha
     */
    SPComponentLoader.tryGetManifestById = function (id, version) {
        return SPComponentLoader._instance.tryGetManifestById(id, version);
    };
    /**
     * {@inheritdoc ManifestStore.requestManifest}
     *
     * @alpha
     */
    SPComponentLoader.requestManifest = function (id, version) {
        return SPComponentLoader._instance.requestManifest(id, version);
    };
    // Internal methods
    /**
     * {@inheritDoc  _ISPComponentLoader._loadDebugManifestsForWorkbench}
     *
     * @internal
     */
    SPComponentLoader._loadDebugManifestsForWorkbench = function (manifestsFileUrl) {
        return SPComponentLoader._instance._loadDebugManifestsForWorkbench(manifestsFileUrl);
    };
    return SPComponentLoader;
}());



/***/ }),

/***/ "Pk8u":
/*!**********************************************!*\
  !*** external "@microsoft/sp-lodash-subset" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_Pk8u__;

/***/ }),

/***/ "QXOy":
/*!*************************************************!*\
  !*** ./lib/tiny/requireLoader/RequireLoader.js ***!
  \*************************************************/
/*! exports provided: RequireLoader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequireLoader", function() { return RequireLoader; });
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ms/sp-telemetry */ "2q6Q");
/* harmony import */ var _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _requirejs_DeferredSystemJsFallbackLoader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../requirejs/DeferredSystemJsFallbackLoader */ "9obq");
/* harmony import */ var _stores_ComponentStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../stores/ComponentStore */ "eaMA");
/* harmony import */ var _utilities_LoadComponentExecutor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utilities/LoadComponentExecutor */ "td2X");
/* harmony import */ var _common_dependencyLoading__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/dependencyLoading */ "65wc");
/* harmony import */ var _common_normalize__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/normalize */ "XBF6");
/* harmony import */ var _RequireConfigurator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./RequireConfigurator */ "bnA/");
/* harmony import */ var _common_killSwitches__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../common/killSwitches */ "zBRI");









/**
 * RequireJS Loader
 */
var RequireLoader = /** @class */ (function () {
    function RequireLoader(_serviceScope, _useSecondaryCdn) {
        this._serviceScope = _serviceScope;
        this._useSecondaryCdn = _useSecondaryCdn;
        var isRequireLoaded = isRequireJsLoaded();
        if (!isRequireLoaded) {
            // using raw-loader ensures the module is loaded with the correct global (window) context
             false
                ? undefined
                : eval.call(window, __webpack_require__(/*! !raw-loader!../../../blobs/requirejs/2.1.20/require.min */ "pJEz"));
        }
        this._requireJs = window.requirejs;
        this._define = window.define;
        this._configurator = new _RequireConfigurator__WEBPACK_IMPORTED_MODULE_7__["RequireConfigurator"](this._requireJs, this._useSecondaryCdn, isRequireLoaded);
        this._loadComponentExecutor = new _utilities_LoadComponentExecutor__WEBPACK_IMPORTED_MODULE_4__["default"](this._loadComponent.bind(this));
    }
    /**
     * {@inheritdoc IModuleLoader.delete}
     *
     * @remarks Calls RequireJS undef() and removes the script tag from the head.
     */
    RequireLoader.prototype.delete = function (manifest) {
        var _a;
        var name = Object(_common_normalize__WEBPACK_IMPORTED_MODULE_6__["normalizeComponentId"])(manifest.id, manifest.version);
        this._requireJs.undef(name);
        var tags = document.querySelectorAll("script[data-requiremodule='" + name + "']");
        for (var i = 0; i < tags.length; ++i) {
            var t = tags[i];
            (_a = t.parentElement) === null || _a === void 0 ? void 0 : _a.removeChild(t);
        }
    };
    /**
     * {@inheritdoc IModuleLoader.ensure}
     */
    RequireLoader.prototype.ensure = function (moduleName, module) {
        this._requireJs.undef(moduleName);
        this._define(moduleName, [], function () { return module; });
        this._requireJs([moduleName]);
    };
    /**
     * {@inheritdoc IModuleLoader.loadComponent}
     */
    RequireLoader.prototype.loadComponent = function (manifest) {
        var _this = this;
        return new Promise(function (resolve) {
            var id = manifest.id, version = manifest.version;
            var component = _stores_ComponentStore__WEBPACK_IMPORTED_MODULE_3__["default"].instance.tryGetComponent(id, version);
            if (!component) {
                component = _this._loadComponentExecutor.loadComponent(manifest, 0);
                _stores_ComponentStore__WEBPACK_IMPORTED_MODULE_3__["default"].instance.storeComponent(id, version, component);
            }
            resolve(component);
        });
    };
    /**
     * {@inheritdoc IModuleLoader.loadEntryPoint}
     */
    RequireLoader.prototype.loadEntryPoint = function (manifest, name, globalName) {
        var normalizedName = name
            ? Object(_common_normalize__WEBPACK_IMPORTED_MODULE_6__["normalizeName"])(manifest, name)
            : Object(_common_normalize__WEBPACK_IMPORTED_MODULE_6__["normalizeComponentId"])(manifest.id, manifest.version);
        return this.load(normalizedName, globalName).then(function (module) {
            if (!name && manifest.loaderConfig.exportName) {
                module = module[manifest.loaderConfig.exportName];
            }
            return module;
        });
    };
    /**
     * {@inheritdoc IModuleLoader.loadScript}
     */
    RequireLoader.prototype.loadScript = function (url, options) {
        if (options === null || options === void 0 ? void 0 : options.globalExportsName) {
            this._configurator.configLoadScript(url, options.globalExportsName);
        }
        return this.load(url, options === null || options === void 0 ? void 0 : options.globalExportsName);
    };
    /**
     * {@inheritdoc IModuleLoader.load}
     */
    RequireLoader.prototype.load = function (moduleName, globalName) {
        var _this = this;
        return new Promise(function (resolve) {
            moduleName = _this._configurator.getDuplicateModuleName(moduleName) || moduleName;
            resolve(_this._require(moduleName));
        }).then(function (module) {
            /*
             * Resolves with the correct loaded module, when applicable.
             *
             * If the module is defined by a global variable, it returns the object in the global variable.
             * If the module has been loaded correctly, it returns the loaded module.
             * If the module failed to load and it's an SPFx component, we try to load a different version
             * of the same component.
             *
             * This happens because if the version in the manifest and the version in the module name don't match,
             * RequireJS has a weird behavior where it loads the component but doesn't return it.
             */
            if (globalName) {
                if (window.hasOwnProperty(globalName)) {
                    module = window[globalName];
                    _this.ensure(moduleName, module);
                }
                else {
                    module = {};
                }
            }
            else if (!module && isSPFxComponent(moduleName)) {
                return _this._loadWithDifferentModuleId(moduleName);
            }
            return module;
        });
    };
    RequireLoader.prototype._loadComponent = function (manifest, retryCount) {
        var _this = this;
        if (retryCount === void 0) { retryCount = 0; }
        var requireMonitor;
        var fallbackMonitor;
        if (Object(_common_killSwitches__WEBPACK_IMPORTED_MODULE_8__["isSkipFirstPartyTinyLogKillswtichActivated"])() || !manifest.isInternal) {
            requireMonitor = new _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_1__["_QosMonitor"]('TinyRequireLoader._loadComponent');
        }
        var extraData = {
            alias: manifest.alias,
            isDebug: manifest._isDebug,
            isInternal: manifest.isInternal,
            manifestId: manifest.id,
            version: manifest.version
        };
        var depNames = Object.keys(manifest.loaderConfig.scriptResources);
        return Promise.all(Object(_common_dependencyLoading__WEBPACK_IMPORTED_MODULE_5__["loadComponentDependencies"])(this, manifest, depNames))
            .then(function () {
            // Load component dependencies first to ensure the manifests exist before configuration
            _this._configurator.configLoadComponent(manifest);
            // Load path dependencies after configuration to ensure the correct paths are configured
            return Promise.all(Object(_common_dependencyLoading__WEBPACK_IMPORTED_MODULE_5__["loadPathDependencies"])(_this, manifest, depNames));
        })
            .then(function () {
            var component = Promise.resolve({});
            if (manifest.loaderConfig.entryModuleId) {
                component = _this.loadEntryPoint(manifest);
            }
            else {
                _this.ensure(Object(_common_normalize__WEBPACK_IMPORTED_MODULE_6__["normalizeComponentId"])(manifest.id, manifest.version), {});
            }
            return component;
        })
            .catch(function (e) {
            // Stop retrying after the second retry (3 total attempts)
            if (retryCount > 1) {
                throw e;
            }
            // If the attempt to load fails, the module loader deletes the module to try to load it again
            // Otherwise, the retry will get the module from the cache, thus failing again.
            _this.delete(manifest);
            return _this._loadComponent(manifest, retryCount + 1);
        })
            .catch(function (e) {
            extraData.requirejsError = e;
            if (!Object(_common_killSwitches__WEBPACK_IMPORTED_MODULE_8__["isSkipFirstPartyTinyLogKillswtichActivated"])() && manifest.isInternal) {
                requireMonitor = new _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_1__["_QosMonitor"]('TinyRequireLoader._loadComponent');
            }
            if (requireMonitor) {
                requireMonitor.writeUnexpectedFailure(undefined, e, extraData);
            }
            _stores_ComponentStore__WEBPACK_IMPORTED_MODULE_3__["default"].instance.deleteComponent(manifest.id, manifest.version);
            // Only use the fallback for third party components
            if (manifest.isInternal) {
                throw e;
            }
            fallbackMonitor = new _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_1__["_QosMonitor"]('TinyRequireLoader._loadComponentWithFallback');
            return _this._ensureFallback();
        })
            .then(function (c) {
            if (!c) {
                return _this._systemJsFallbackLoader.loadComponent(manifest);
            }
            if (requireMonitor) {
                requireMonitor.writeSuccess();
            }
            return c;
        })
            .catch(function (e) {
            if (fallbackMonitor) {
                extraData.systemjsError = e;
                fallbackMonitor.writeUnexpectedFailure(undefined, e, extraData);
            }
            throw extraData;
        });
    };
    RequireLoader.prototype._ensureFallback = function () {
        var _this = this;
        if (this._systemJsFallbackLoader) {
            return Promise.resolve();
        }
        return _requirejs_DeferredSystemJsFallbackLoader__WEBPACK_IMPORTED_MODULE_2__["DeferredSystemJsFallbackLoader"].getInstance()
            .load()
            .then(function () {
            _this._systemJsFallbackLoader = _requirejs_DeferredSystemJsFallbackLoader__WEBPACK_IMPORTED_MODULE_2__["DeferredSystemJsFallbackLoader"].getInstance().create(_this._serviceScope);
            _this._loadComponentExecutor.setAlternativeExecutor(_this._systemJsFallbackLoader.executor);
            _this._systemJsFallbackLoader.executor.setAlternativeExecutor(_this._loadComponentExecutor);
        });
    };
    /**
     * Looks at the path to see if it is a provider hosted app.  If it is, it modifies the existing
     * module name to match the provider hosted app js module name and then loads the component.  If
     * its not that case it looks at the registry of RequireJS to find another version of the same
     * component as moduleName, if found, it configures RequireJS with the same dependency resolution
     * (that comes from the manifest) and ensuring that the path points only to the found version,
     * and it loads the component.
     */
    RequireLoader.prototype._loadWithDifferentModuleId = function (moduleName) {
        // tslint:disable-next-line:no-any
        var requireContext = this._requireJs.s.contexts._;
        var path = requireContext.config.paths[moduleName];
        var requestedComponentId = splitComponentIdFromModuleName(moduleName);
        var loadedModuleName = '';
        if (path.indexOf('/sp-provider-hosted-web-part') !== -1) {
            // The provider hosted web part has js files with a fixed guid (given below), but
            // each instance of a webpart gets it's own unique guid which doesn't match the JS.
            // Therefore when we see this we replace it automatically and retry.
            loadedModuleName = '4fca678e-55b6-46c8-b823-dd875dfdb951_1.0.0';
        }
        else {
            var registry = Object.keys(requireContext.registry);
            for (var _i = 0, registry_1 = registry; _i < registry_1.length; _i++) {
                var rName = registry_1[_i];
                var loadedComponentId = splitComponentIdFromModuleName(rName);
                if (requestedComponentId === loadedComponentId && moduleName !== rName) {
                    loadedModuleName = rName;
                    break;
                }
            }
        }
        if (!loadedModuleName) {
            return Promise.reject('');
        }
        this._configurator.replaceModuleInConfig(loadedModuleName, moduleName, path);
        return this._require(loadedModuleName);
    };
    RequireLoader.prototype._require = function (moduleName) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._requireJs([moduleName], function (module) { return resolve(module); }, function (error) { return reject(error); });
        });
    };
    return RequireLoader;
}());

function isRequireJsLoaded() {
    return window.requirejs !== undefined && window.require !== undefined && window.define !== undefined;
}
function isSPFxComponent(moduleName) {
    if (moduleName.split('/').length > 1) {
        return false; // This is a path dependency, not a component itself
    }
    var substrings = moduleName.split('_');
    return substrings.length === 2 && _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Guid"].isValid(substrings[0]) && _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Version"].isValid(substrings[1]);
}
function splitComponentIdFromModuleName(moduleName) {
    return moduleName.split('_')[0];
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

/***/ "W2kl":
/*!*****************************************!*\
  !*** ./lib/utilities/resolveAddress.js ***!
  \*****************************************/
/*! exports provided: default, resolvePath */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return resolveAddress; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resolvePath", function() { return resolvePath; });
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/sp-diagnostics */ "ut3N");
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _stores_LocaleStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../stores/LocaleStore */ "XZXY");
/* harmony import */ var _telemetryConstants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./telemetryConstants */ "4mHd");
/* harmony import */ var _Utilities_resx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Utilities.resx */ "hpQ8");
var _Utilities_resx__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./Utilities.resx */ "hpQ8", 1);





/**
 * Given a manifest and a resource name returns the URL to the resource.
 *
 * For path or localizedPath dependencies, it returns the full URL to the resource.
 * For component dependencies, it returns the full URL to the failover path,
 * or returns an empty string if it doesn't exist.
 *
 * If the resource name is not present in the loader config, it throws an error.
 */
function resolveAddress(manifest, resourceName, useSecondaryCdn) {
    if (useSecondaryCdn === void 0) { useSecondaryCdn = false; }
    _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Validate"].isNotNullOrUndefined(manifest, 'manifest');
    _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Validate"].isNonemptyString(resourceName, 'resourceName');
    if (!manifest.loaderConfig.scriptResources.hasOwnProperty(resourceName)) {
        var error = new Error(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Text"].format(_Utilities_resx__WEBPACK_IMPORTED_MODULE_4__["resourceNotFoundError"], resourceName, manifest.id, manifest.alias));
        _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__["_TraceLogger"].logError(_telemetryConstants__WEBPACK_IMPORTED_MODULE_3__["resolveAddressLogSource"], error);
        throw error;
    }
    var moduleConfiguration = manifest.loaderConfig.scriptResources[resourceName];
    var address = resolveModuleConfiguration(resourceName, moduleConfiguration);
    // Prepend the base URL if this isn't a fully-qualified URL.
    if (!address.match(/^https?\:\/\//i)) {
        var moduleBaseUrl = manifest.loaderConfig.internalModuleBaseUrls[0];
        // Use the secondary CDN url if we have fallen back and the manifest contains the url
        if (manifest.isInternal && useSecondaryCdn) {
            var secondaryCdnUrl = manifest.loaderConfig.internalModuleBaseUrls[1];
            if (!secondaryCdnUrl) {
                _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__["_TraceLogger"].logError(_telemetryConstants__WEBPACK_IMPORTED_MODULE_3__["resolveAddressLogSource"], new Error(_telemetryConstants__WEBPACK_IMPORTED_MODULE_3__["noSecondaryCdnUrl"]), _telemetryConstants__WEBPACK_IMPORTED_MODULE_3__["noSecondaryCdnUrl"]);
            }
            else {
                moduleBaseUrl = secondaryCdnUrl;
            }
        }
        // Replace this with shared URL concatenation logic. VSO#249681
        moduleBaseUrl = moduleBaseUrl.replace(/\/+$/, '');
        address = moduleBaseUrl + "/" + address;
    }
    return address;
}
/**
 * Resolves a IModuleConfiguration to a URL
 *
 * Take a look at the IModuleConfiguration documentation for more information.
 */
function resolveModuleConfiguration(moduleName, moduleConfiguration) {
    if (moduleConfiguration) {
        switch (moduleConfiguration.type) {
            case 'component':
                var failoverPath = moduleConfiguration.failoverPath;
                if (!failoverPath) {
                    throw new Error(_Utilities_resx__WEBPACK_IMPORTED_MODULE_4__["noFailoverPathError"]);
                }
                return resolvePath(failoverPath);
            case 'path':
                return resolvePath(moduleConfiguration.path);
            case 'localizedPath':
                return resolvePath(resolveLocalizedModuleConfiguration(moduleConfiguration));
            case null: // tslint:disable-line:no-null-keyword
            case undefined:
            default:
                // tslint:disable-line:no-switch-case-fall-through
                return moduleName;
        }
    }
    else {
        return moduleName;
    }
}
/**
 * Resolves a path to the default or debug version of a script.
 *
 * If a debug version is present, it uses that. Otherwise uses the default one.
 * If the path is a string, it returns it unchanged.
 */
function resolvePath(path) {
    if (typeof path === 'string') {
        return path;
    }
    else {
        if (path.debug) {
            return path.debug;
        }
        else {
            return path.default;
        }
    }
}
/**
 * Resolves a localized module config to a path.
 */
function resolveLocalizedModuleConfiguration(moduleConfiguration) {
    // Workaround for temporary issue in SPOREL. VSO#279843
    var currentLocale = _stores_LocaleStore__WEBPACK_IMPORTED_MODULE_2__["default"].getLocale();
    if (moduleConfiguration.paths) {
        // This only applies when testing production manifests without the server
        if (currentLocale) {
            for (var locale in moduleConfiguration.paths) {
                if (locale &&
                    locale.toUpperCase() === currentLocale.toUpperCase() &&
                    moduleConfiguration.paths[locale]) {
                    return moduleConfiguration.paths[locale];
                }
            }
        }
    }
    return moduleConfiguration.defaultPath;
}


/***/ }),

/***/ "WYdG":
/*!****************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/tslib@1.10.0/node_modules/tslib/tslib.es6.js ***!
  \****************************************************************************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "X+PM":
/*!*********************************************!*\
  !*** external "@microsoft/sp-page-context" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_X_PM__;

/***/ }),

/***/ "X2Mq":
/*!********************************************!*\
  !*** ./lib/debug/ensureDebugComponents.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ensureDebugComponents; });
var _debugComponentsPromise;
function ensureDebugComponents() {
    if (!_debugComponentsPromise) {
        _debugComponentsPromise = Promise.all(/*! import() | debug-prompt-components */[__webpack_require__.e("vendors~debug-prompt-components~developer-tools"), __webpack_require__.e("vendors~debug-prompt-components"), __webpack_require__.e("debug-prompt-components")]).then(__webpack_require__.bind(null, /*! ./debugComponents */ "bEFm"));
    }
    return _debugComponentsPromise;
}


/***/ }),

/***/ "XBF6":
/*!**************************************!*\
  !*** ./lib/tiny/common/normalize.js ***!
  \**************************************/
/*! exports provided: normalizeComponentId, normalizeName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalizeComponentId", function() { return normalizeComponentId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalizeName", function() { return normalizeName; });
// tslint:disable:export-name
function normalizeComponentId(id, version) {
    return id + "_" + version;
}
function normalizeName(manifest, name) {
    return normalizeComponentId(manifest.id, manifest.version) + "/" + name;
}


/***/ }),

/***/ "XZXY":
/*!***********************************!*\
  !*** ./lib/stores/LocaleStore.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * @internal
 */
var LocaleStore = /** @class */ (function () {
    function LocaleStore() {
    }
    LocaleStore.getLocale = function () {
        return LocaleStore._locale;
    };
    LocaleStore.setLocale = function (locale) {
        LocaleStore._locale = locale;
    };
    LocaleStore._locale = undefined;
    return LocaleStore;
}());
/* harmony default export */ __webpack_exports__["default"] = (LocaleStore);


/***/ }),

/***/ "Y/fc":
/*!****************************************!*\
  !*** ./lib/stores/ManifestProvider.js ***!
  \****************************************/
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




/**
 * @internal
 */
var ManifestProvider = /** @class */ (function () {
    function ManifestProvider(serviceScope, webAbsoluteUrl) {
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Validate"].isNotNullOrUndefined(serviceScope, 'serviceScope');
        this._logSource = _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__["_LogSource"].create('ManifestProvider');
        this._webAbsoluteUrl = webAbsoluteUrl;
        this._pageContext = serviceScope.consume(_microsoft_sp_page_context__WEBPACK_IMPORTED_MODULE_3__["PageContext"].serviceKey);
        this._httpClient = serviceScope.consume(_microsoft_sp_http__WEBPACK_IMPORTED_MODULE_2__["SPHttpClient"].serviceKey);
    }
    /**
     * Given a component id and version, requests its manifest (and all its dependencies) to SharePoint
     * through a REST API.
     * Returns a promise with all the manifests.
     * @param componentId - Id of the requested component
     * @param version - Optional. Version of the requested component
     */
    ManifestProvider.prototype.tryGetManifest = function (componentId, version) {
        return this.tryGetManifests([{ id: componentId, version: version }]);
    };
    /**
     * Given an array of ids and versions, requests their manifest (and all their dependencies) to SharePoint
     * through a REST API.
     * Returns a promise with all the manifests.
     * @param ids - Array with all the id and version pairs
     */
    ManifestProvider.prototype.tryGetManifests = function (ids) {
        var _this = this;
        var qosMonitor = new _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__["_QosMonitor"]('ManifestProvider.tryGetManifests');
        var webUrl = (this._pageContext.web && this._pageContext.web.absoluteUrl) || this._webAbsoluteUrl;
        return this._httpClient
            .post(webUrl + ManifestProvider._restApiUrl, _microsoft_sp_http__WEBPACK_IMPORTED_MODULE_2__["SPHttpClient"].configurations.v1, _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPFlight"].isEnabled(436 /* SppplatUseDeploymentPools */)
            ? {
                body: JSON.stringify({
                    components: ids,
                    project: _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Session"].clientSideApplicationId
                })
            }
            : {
                body: JSON.stringify({
                    components: ids
                })
            })
            .then(function (response) {
            if (!response.ok) {
                var error = new Error("GetClientSideComponents failed with HTTP status " + response.status);
                qosMonitor.writeUnexpectedFailure('UnsuccessfulResponse', error, {
                    statusCode: response.status,
                    correlationId: response.correlationId
                });
                throw error;
            }
            qosMonitor.writeSuccess({ correlationId: response.correlationId });
            return response.json().then(_this._extractManifests);
        })
            .catch(function (error) {
            _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__["_TraceLogger"].logError(_this._logSource, error);
            qosMonitor.writeUnexpectedFailure(undefined, error);
            throw error;
        });
    };
    ManifestProvider.prototype._extractManifests = function (response) {
        return response.value
            .filter(function (qr) { return qr.Status === 0 && !!qr.Manifest; }) // Remove query results that weren't successful or empty manifests
            .map(function (qr) { return JSON.parse(qr.Manifest); }); // Create the manifest object out of the string
    };
    ManifestProvider._restApiUrl = '/_api/web/GetClientSideComponents';
    return ManifestProvider;
}());
/* harmony default export */ __webpack_exports__["default"] = (ManifestProvider);


/***/ }),

/***/ "a8RQ":
/*!********************************************!*\
  !*** ./lib/tiny/store/ManifestProvider.js ***!
  \********************************************/
/*! exports provided: ManifestProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManifestProvider", function() { return ManifestProvider; });
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/sp-diagnostics */ "ut3N");
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _microsoft_sp_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @microsoft/sp-http */ "vlQI");
/* harmony import */ var _microsoft_sp_http__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_http__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _microsoft_sp_page_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @microsoft/sp-page-context */ "X+PM");
/* harmony import */ var _microsoft_sp_page_context__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_page_context__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _common_flights__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/flights */ "6EK5");
/* harmony import */ var _common_killSwitches__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/killSwitches */ "zBRI");






/**
 * Data provider for manifest fetching with the server.
 */
var ManifestProvider = /** @class */ (function () {
    function ManifestProvider(serviceScope, _webAbsoluteUrl) {
        this._webAbsoluteUrl = _webAbsoluteUrl;
        this._pageContext = serviceScope.consume(_microsoft_sp_page_context__WEBPACK_IMPORTED_MODULE_3__["PageContext"].serviceKey);
        this._httpClient = serviceScope.consume(_microsoft_sp_http__WEBPACK_IMPORTED_MODULE_2__["SPHttpClient"].serviceKey);
    }
    /**
     * Make a server request to fetch a collection of component manifests.
     *
     * @param requests - Array of manifests to fetch from the server
     *
     * @returns A promise resolving to an array of component manifests
     */
    ManifestProvider.prototype.fetchManifests = function (requests) {
        var isKSNotActivated = !Object(_common_killSwitches__WEBPACK_IMPORTED_MODULE_5__["isRejectOnNotFoundManifestsKillSwitchActivated"])();
        var logSuccess = !Object(_common_killSwitches__WEBPACK_IMPORTED_MODULE_5__["isLogSuccessOfTryGetManifestsKillSwitchActivated"])();
        var qosMonitor = new _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__["_QosMonitor"]('ManifestProvider.tryGetManifests');
        var extraData = {};
        // tslint:disable-next-line:no-any
        var body = { components: requests };
        if (Object(_common_flights__WEBPACK_IMPORTED_MODULE_4__["isDeploymentPoolsFlightEnabled"])()) {
            body.project = _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Session"].clientSideApplicationId;
        }
        var requestIds;
        if (isKSNotActivated) {
            requestIds = new Set();
            for (var _i = 0, requests_1 = requests; _i < requests_1.length; _i++) {
                var r = requests_1[_i];
                requestIds.add(r.id);
            }
        }
        return this._httpClient
            .post(((this._pageContext.web && this._pageContext.web.absoluteUrl) || this._webAbsoluteUrl) + "/_api/web/GetClientSideComponents", // tslint:disable:max-line-length
        _microsoft_sp_http__WEBPACK_IMPORTED_MODULE_2__["SPHttpClient"].configurations.v1, {
            body: JSON.stringify(body)
        })
            .then(function (response) {
            if (!response.ok) {
                throw new Error("ManifestProvider GetClientSideComponents failed with HTTP status " + response.status + " and correlation id " + response.correlationId); // tslint:disable:max-line-length
            }
            else if (logSuccess && response.correlationId) {
                extraData.correlationId = response.correlationId.toString();
            }
            return response.json();
        })
            .then(function (componentResponse) {
            var manifests = [];
            for (var _i = 0, _a = componentResponse.value; _i < _a.length; _i++) {
                var r = _a[_i];
                if (r.Status === 0 && r.Manifest) {
                    var manifest = JSON.parse(r.Manifest);
                    manifests.push(manifest);
                    if (isKSNotActivated) {
                        requestIds.delete(manifest.id);
                    }
                }
            }
            if (isKSNotActivated && requestIds.size) {
                throw new Error('Did not fetch all manifests');
            }
            if (logSuccess) {
                qosMonitor.writeSuccess(extraData);
            }
            return manifests;
        })
            .catch(function (e) {
            _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__["_TraceLogger"].logErrorData({ source: ManifestProvider._logSource, error: e });
            qosMonitor.writeUnexpectedFailure(undefined, e, (isKSNotActivated && { manifestRequests: requests }) || undefined);
            throw e;
        });
    };
    ManifestProvider._logSource = _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__["_LogSource"].create('ManifestProvider');
    return ManifestProvider;
}());



/***/ }),

/***/ "bnA/":
/*!*******************************************************!*\
  !*** ./lib/tiny/requireLoader/RequireConfigurator.js ***!
  \*******************************************************/
/*! exports provided: RequireConfigurator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequireConfigurator", function() { return RequireConfigurator; });
/* harmony import */ var _requirejs_loadScriptWithoutEval__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../requirejs/loadScriptWithoutEval */ "CI3B");
/* harmony import */ var _stores_AddressStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../stores/AddressStore */ "F+Lb");
/* harmony import */ var _stores_ManifestStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../stores/ManifestStore */ "Eke5");
/* harmony import */ var _utilities_isCorsEnabled__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utilities/isCorsEnabled */ "ASbA");
/* harmony import */ var _utilities_resolveAddress__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utilities/resolveAddress */ "W2kl");
/* harmony import */ var _common_flights__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/flights */ "6EK5");
/* harmony import */ var _common_normalize__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/normalize */ "XBF6");







var RequireConfigurator = /** @class */ (function () {
    function RequireConfigurator(_requireJs, _useSecondaryCdn, skipBaseConfig) {
        this._requireJs = _requireJs;
        this._useSecondaryCdn = _useSecondaryCdn;
        this._configuredFailoverPaths = new Set();
        this._duplicateModuleNames = new Map();
        var config = {
            waitSeconds: 90
        };
        if (!skipBaseConfig) {
            config.baseUrl = 'https://relative-path.invalid';
        }
        // <script crossorigin="anonymous"> enables scripts be transparent to service workers
        if (Object(_common_flights__WEBPACK_IMPORTED_MODULE_5__["isAkamaiCrossOriginFlightEnabled"])()) {
            config.onNodeCreated = function (node, c, n, url) {
                if (Object(_utilities_isCorsEnabled__WEBPACK_IMPORTED_MODULE_3__["default"])(url)) {
                    node.setAttribute('crossorigin', 'anonymous');
                }
            };
        }
        this._requireJs.config(config);
    }
    RequireConfigurator.prototype.configLoadComponent = function (manifest) {
        var resources = manifest.loaderConfig.scriptResources;
        var config = { paths: {}, map: {}, shim: {} };
        var currentMapConfig = {};
        var resourceNames = Object.keys(resources);
        for (var _i = 0, resourceNames_1 = resourceNames; _i < resourceNames_1.length; _i++) {
            var name_1 = resourceNames_1[_i];
            var resource = resources[name_1];
            if (resource.type === 'component') {
                this._configureComponentResource(name_1, resource, manifest, config, currentMapConfig);
            }
            else {
                this._configurePathResource(name_1, resource, manifest, config, currentMapConfig);
            }
        }
        var normalizedName = Object(_common_normalize__WEBPACK_IMPORTED_MODULE_6__["normalizeComponentId"])(manifest.id, manifest.version);
        config.map[normalizedName] = currentMapConfig;
        this._requireJs.config(config);
        // There's a global __spfxPreloadedModules that may host the define arguments for preloaded components.
        // This ensures that RequireJS will automatically load them if they are present.
        if (window.define &&
            window.__spfxPreloadedModules &&
            window.__spfxPreloadedModules.hasOwnProperty(normalizedName)) {
            var args = window.__spfxPreloadedModules[normalizedName];
            window.define(args.id, args.deps, args.f);
            delete window.__spfxPreloadedModules[normalizedName];
        }
    };
    RequireConfigurator.prototype.configLoadScript = function (url, globalExportsName) {
        var _a;
        this._requireJs.config({ shim: (_a = {}, _a[url.replace(/\.js$/, '')] = { exports: globalExportsName }, _a) });
    };
    RequireConfigurator.prototype.getDuplicateModuleName = function (moduleName) {
        return this._duplicateModuleNames.get(moduleName);
    };
    RequireConfigurator.prototype.replaceModuleInConfig = function (existingModuleName, newModuleName, modulePath) {
        var _a, _b;
        // tslint:disable-next-line:no-any
        var requireContext = this._requireJs.s.contexts._;
        this._requireJs.config({
            map: (_a = {}, _a[existingModuleName] = requireContext.config.map[newModuleName], _a),
            paths: (_b = {}, _b[existingModuleName] = modulePath, _b)
        });
        // Remove the definition (including the <script> tag) of any previously load of the same component
        // Otherwise RequireJS can't load the module again
        this._requireJs.undef(newModuleName);
        this._requireJs.undef(existingModuleName);
        // Avoid two path entries going to the same path
        requireContext.config.paths[newModuleName] = "SPFx: Use " + existingModuleName + " instead";
    };
    RequireConfigurator.prototype._configurePathResource = function (name, resource, manifest, config, mapConfig) {
        // Step 1: Set map configuration with the normalized name.
        // The normalized name of the entry point is the name of the component (i.e. <id>_<version>)
        // Other path dependencies have the resource name appended (i.e. <id>_<version>/<name>)
        var normalizedName;
        if (name === manifest.loaderConfig.entryModuleId) {
            // the entry point of the module
            normalizedName = Object(_common_normalize__WEBPACK_IMPORTED_MODULE_6__["normalizeComponentId"])(manifest.id, manifest.version);
        }
        else {
            normalizedName = Object(_common_normalize__WEBPACK_IMPORTED_MODULE_6__["normalizeName"])(manifest, name);
            mapConfig[name] = normalizedName;
        }
        // Step 2: Set path configuration with the URL of the resource.
        // If the URL for the resource is already used by another manifest, we re-use that normalized name.
        var address = resolveAddressRequire(manifest, name, this._useSecondaryCdn);
        var existingNormalizedNameForAddress = _stores_AddressStore__WEBPACK_IMPORTED_MODULE_1__["default"].instance.getNormalizedName(address);
        if (existingNormalizedNameForAddress) {
            mapConfig[name] = existingNormalizedNameForAddress;
            this._duplicateModuleNames.set(normalizedName, existingNormalizedNameForAddress);
        }
        else {
            // Start downloading the script without evaluating it.
            // tslint:disable-next-line: no-floating-promises
            Object(_requirejs_loadScriptWithoutEval__WEBPACK_IMPORTED_MODULE_0__["loadScriptWithoutEval"])(address);
            config.paths[normalizedName] = address;
            _stores_AddressStore__WEBPACK_IMPORTED_MODULE_1__["default"].instance.set(normalizedName, address);
        }
        // Step 3: Set shim configuration with global names and dependencies, if applicable.
        // Only path configurations (not localized path configurations) support it.
        // There are some issues with JQuery and Yammer using RequireJS that we can self-recover.
        // This does nothing if JQuery or Yammer are not dependencies of the component.
        fixKnownIssues(name, manifest.loaderConfig.scriptResources, resource);
        if (resource.globalName) {
            config.shim[normalizedName] = {
                exports: resource.globalName,
                deps: resource.globalDependencies
            };
        }
    };
    RequireConfigurator.prototype._configureComponentResource = function (name, moduleConfiguration, manifest, config, mapConfig) {
        // Map the dependency to the normalized name of the component.
        var resourceManifest = _stores_ManifestStore__WEBPACK_IMPORTED_MODULE_2__["default"].instance.tryGetManifest(moduleConfiguration.id, moduleConfiguration.version);
        if (resourceManifest) {
            mapConfig[name] = Object(_common_normalize__WEBPACK_IMPORTED_MODULE_6__["normalizeComponentId"])(resourceManifest.id, resourceManifest.version);
        }
        if (moduleConfiguration.failoverPath) {
            // Multiple components can have the same dependencies with failover paths. Configure only once.
            if (!this._configuredFailoverPaths.has(name)) {
                this._configuredFailoverPaths.add(name);
                // Store the address both in RequireJS and the AddressStore for the SPFx loader.
                var address = resolveAddressRequire(manifest, name, this._useSecondaryCdn);
                // Start downloading the script without evaluating it.
                // tslint:disable-next-line: no-floating-promises
                Object(_requirejs_loadScriptWithoutEval__WEBPACK_IMPORTED_MODULE_0__["loadScriptWithoutEval"])(address);
                config.paths[name] = address;
                _stores_AddressStore__WEBPACK_IMPORTED_MODULE_1__["default"].instance.set(name, address);
            }
        }
    };
    return RequireConfigurator;
}());

function resolveAddressRequire(manifest, resourceName, useSecondaryCdn) {
    // Remove the .js extension
    return Object(_utilities_resolveAddress__WEBPACK_IMPORTED_MODULE_4__["default"])(manifest, resourceName, useSecondaryCdn).replace(/.js$/, '');
}
function fixKnownIssues(name, resources, resource) {
    // tslint:disable:no-string-literal
    // Fix-up: Some customers declared jQuery dependency without explicitly declaring a global name in the manifest
    // Fix-up: Some customers declared the global as 'jquery' instead of 'jQuery'
    // RequireJS doesn't work properly in either of those cases
    fixWrongGlobalName(name, 'jquery', 'jquery', 'jQuery', resource);
    // Fix-up: Some customers declare JQuery UI without the dependency on JQuery
    if (name.toLowerCase() === 'jqueryui' &&
        (!resource.globalDependencies || resource.globalDependencies.length === 0)) {
        if (resources['jquery']) {
            resource.globalDependencies = ['jquery'];
        }
        else if (resources['jQuery']) {
            resource.globalDependencies = ['jQuery'];
        }
    }
    // Fix-up: Some customers declared yammer dependency without explicitly declaring a global name in the manifest
    // Fix-up: Some customers declared the global as 'yammer' instead of 'yam'
    fixWrongGlobalName(name, 'yammer', 'yammer', 'yam', resource);
    // tslint:enable:no-string-literal
}
function fixWrongGlobalName(name, expectedName, knownBadName, expectedGlobalName, resource) {
    if ((name.toLowerCase() === expectedName && !resource.globalName) || resource.globalName === knownBadName) {
        resource.globalName = expectedGlobalName;
    }
}


/***/ }),

/***/ "cnPT":
/*!*********************************************!*\
  !*** ./lib/utilities/ResourceUrlChecker.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/sp-diagnostics */ "ut3N");
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _resolveAddress__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./resolveAddress */ "W2kl");
/* harmony import */ var _error_ErrorBuilder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../error/ErrorBuilder */ "ff4n");




var UrlStatus;
(function (UrlStatus) {
    UrlStatus[UrlStatus["Undefined"] = 0] = "Undefined";
    UrlStatus[UrlStatus["OK"] = 1] = "OK";
    UrlStatus[UrlStatus["FileNotFound"] = 2] = "FileNotFound";
    UrlStatus[UrlStatus["Forbidden"] = 3] = "Forbidden";
    UrlStatus[UrlStatus["ClientError"] = 4] = "ClientError";
    UrlStatus[UrlStatus["ServerError"] = 5] = "ServerError";
    UrlStatus[UrlStatus["NetworkError"] = 6] = "NetworkError";
})(UrlStatus || (UrlStatus = {}));
/**
 * Checks if a resource URL is accessible and throws the right error for each case.
 *
 * In the case of localhost errors, it provides guidance on usage of 'gulp' to solve them.
 */
var ResourceUrlChecker = /** @class */ (function () {
    function ResourceUrlChecker() {
    }
    /**
     * Checks the resource URL for the HTTP response status code.
     * If the response is not successful, it throws the appropriate error.
     * @param manifest - Manifest where the resource is defined
     * @param name - Name of the resource to check
     */
    ResourceUrlChecker.checkResourceUrl = function (manifest, name) {
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Validate"].isNotNullOrUndefined(manifest, 'manifest');
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Validate"].isNonemptyString(name, 'name');
        var url = Object(_resolveAddress__WEBPACK_IMPORTED_MODULE_2__["default"])(manifest, name, ResourceUrlChecker.useSecondaryCdn);
        return ResourceUrlChecker._getUrlStatus(url).then(function (urlStatus) {
            if (urlStatus !== UrlStatus.OK) {
                return ResourceUrlChecker._throwUrlStatusError(urlStatus, manifest, name, url);
            }
            return Promise.resolve();
        });
    };
    ResourceUrlChecker._throwUrlStatusError = function (urlStatus, manifest, resourceName, url) {
        switch (urlStatus) {
            case UrlStatus.FileNotFound:
                if (url.match(ResourceUrlChecker.localhostUrlRegex)) {
                    throw _error_ErrorBuilder__WEBPACK_IMPORTED_MODULE_3__["default"].buildUrlStatusLocalhostFileNotFoundError(manifest, resourceName, url);
                }
                else {
                    throw _error_ErrorBuilder__WEBPACK_IMPORTED_MODULE_3__["default"].buildUrlStatusFileNotFoundError(manifest, resourceName, url);
                }
            case UrlStatus.Forbidden:
                throw _error_ErrorBuilder__WEBPACK_IMPORTED_MODULE_3__["default"].buildUrlStatusForbiddenError(manifest, resourceName, url);
            case UrlStatus.ClientError:
                throw _error_ErrorBuilder__WEBPACK_IMPORTED_MODULE_3__["default"].buildUrlStatusClientErrorError(manifest, resourceName, url);
            case UrlStatus.ServerError:
                throw _error_ErrorBuilder__WEBPACK_IMPORTED_MODULE_3__["default"].buildUrlStatusServerErrorError(manifest, resourceName, url);
            case UrlStatus.NetworkError:
                if (url.match(ResourceUrlChecker.localhostUrlRegex)) {
                    throw _error_ErrorBuilder__WEBPACK_IMPORTED_MODULE_3__["default"].buildUrlStatusLocalhostNetworkErrorError(manifest, resourceName, url);
                }
                else if (url.match(ResourceUrlChecker.tenantUrlRegex)) {
                    throw _error_ErrorBuilder__WEBPACK_IMPORTED_MODULE_3__["default"].buildUrlStatusDocLibNetworkErrorError(manifest, resourceName, url);
                }
                else if (url.match(ResourceUrlChecker.httpsUrlRegex)) {
                    throw _error_ErrorBuilder__WEBPACK_IMPORTED_MODULE_3__["default"].buildUrlStatusHttpsNetworkErrorError(manifest, resourceName, url);
                }
                else {
                    throw _error_ErrorBuilder__WEBPACK_IMPORTED_MODULE_3__["default"].buildUrlStatusNetworkErrorError(manifest, resourceName, url);
                }
            case UrlStatus.Undefined:
            default:
                // tslint:disable-line:no-switch-case-fall-through
                throw _error_ErrorBuilder__WEBPACK_IMPORTED_MODULE_3__["default"].buildUrlStatusUndefinedError(manifest, resourceName, url);
        }
    };
    // This is not using HttpClient because it might not be initialized at this time.
    // Do not use this code outside of sp-loader
    ResourceUrlChecker._getUrlStatus = function (url) {
        var requestInit = {
            method: 'HEAD',
            mode: 'cors'
        };
        var request = new Request(url, requestInit);
        return window
            .fetch(request)
            .then(function (response) {
            var httpStatusCode = response.status;
            if (httpStatusCode >= 200 && httpStatusCode < 300) {
                return UrlStatus.OK;
            }
            if (httpStatusCode === 404) {
                return UrlStatus.FileNotFound;
            }
            if (httpStatusCode === 403) {
                return UrlStatus.Forbidden;
            }
            if (httpStatusCode >= 400 && httpStatusCode < 500) {
                return UrlStatus.ClientError;
            }
            if (httpStatusCode >= 500 && httpStatusCode < 600) {
                return UrlStatus.ServerError;
            }
            return UrlStatus.Undefined;
        })
            .catch(function (error) {
            _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__["_TraceLogger"].logError(ResourceUrlChecker._logSource, error);
            return UrlStatus.NetworkError;
        });
    };
    ResourceUrlChecker.useSecondaryCdn = false;
    ResourceUrlChecker._logSource = _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__["_LogSource"].create('ResourceUrlChecker');
    ResourceUrlChecker.localhostUrlRegex = /^http[s]?:\/\/localhost/;
    ResourceUrlChecker.tenantUrlRegex = /^http[s]?:\/\/[a-zA-Z0-9]+.sharepoint.com/;
    ResourceUrlChecker.httpsUrlRegex = /^https:\/\//;
    return ResourceUrlChecker;
}());
/* harmony default export */ __webpack_exports__["default"] = (ResourceUrlChecker);


/***/ }),

/***/ "dQRF":
/*!******************************************!*\
  !*** ./lib/utilities/SPLoaderFlights.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ms/sp-telemetry */ "2q6Q");
/* harmony import */ var _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_1__);


/**
 * Class to expose flight checks on sp-loader
 *
 * @internal
 */
var SPLoaderFlights = /** @class */ (function () {
    function SPLoaderFlights() {
    }
    SPLoaderFlights._isSafariAuthPatchEnabled = function () {
        return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPFlight"].isEnabled(687 /*SppplatSafariAuthPatch */);
    };
    SPLoaderFlights._isMinimalStartFlightEnabled = function () {
        var status = _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPExperiment"].getVariantAndLogExposure(90051 /* SppplatTwoPhaseRender */) === 1;
        _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_1__["_PerformanceLogger"].trackExperiment(90051, status ? 'Treatment' : 'Control');
        return status;
    };
    SPLoaderFlights._isOptimisticPreloadEnabled = function () {
        return _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_1__["_SPPerfExperiment"].getVariantAndTrackExperiment(90009) === 1;
    };
    SPLoaderFlights._isSPWebWorkerEnabled = function () {
        return (_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPFlight"].isEnabled(60105 /* SPWebWorkerFlight */) ||
            _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_1__["_SPPerfExperiment"].getVariantAndTrackExperiment(_ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_1__["_PerformanceExperiment"].SPWebWorkerExp) === 1);
    };
    return SPLoaderFlights;
}());
/* harmony default export */ __webpack_exports__["default"] = (SPLoaderFlights);


/***/ }),

/***/ "eaMA":
/*!**************************************!*\
  !*** ./lib/stores/ComponentStore.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tiny_store_ComponentStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../tiny/store/ComponentStore */ "pQk7");
/**
 * @Copyright (c) Microsoft Corporation.  All rights reserved.
 *
 * @file ComponentStore.ts
 */

/**
 * Stores component modules by id and version.
 * Used by the component loader to retrieve already loaded components.
 */
var ComponentStore = /** @class */ (function () {
    function ComponentStore() {
    }
    Object.defineProperty(ComponentStore, "instance", {
        get: function () {
            if (!ComponentStore._instance) {
                ComponentStore._instance = new _tiny_store_ComponentStore__WEBPACK_IMPORTED_MODULE_0__["ComponentStore"]();
            }
            return ComponentStore._instance;
        },
        enumerable: false,
        configurable: true
    });
    return ComponentStore;
}());
/* harmony default export */ __webpack_exports__["default"] = (ComponentStore);


/***/ }),

/***/ "ff4n":
/*!***********************************!*\
  !*** ./lib/error/ErrorBuilder.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "WYdG");
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/sp-diagnostics */ "ut3N");
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _SPLoaderError__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SPLoaderError */ "BBmw");
/* harmony import */ var _utilities_telemetryConstants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utilities/telemetryConstants */ "4mHd");
/* harmony import */ var _Error_resx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Error.resx */ "HcMa");
var _Error_resx__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./Error.resx */ "HcMa", 1);

/**
 * This class builds specific errors for sp-loader.
 * This is short-hand for all the error creation, so the production code looks cleaner.
 */




var loadComponentImplEventName = 'loadComponentImpl';
var ErrorBuilder = /** @class */ (function () {
    function ErrorBuilder() {
    }
    ErrorBuilder.buildLoadComponentError = function (manifest, error) {
        // <value>Failed to load component "{0}" ({1}).
        // Original error: {2}</value>
        return this.buildErrorWithVerboseLog(_SPLoaderError__WEBPACK_IMPORTED_MODULE_2__["SPLoaderErrorCode"].loadComponentError, error, false, _utilities_telemetryConstants__WEBPACK_IMPORTED_MODULE_3__["loadComponentLogSource"], loadComponentImplEventName, manifest.id, manifest.alias, error.message);
    };
    ErrorBuilder.buildLoadComponentReturnsEmptyError = function (manifest) {
        // <value>loadComponent() returned an empty object for component "{0}" ({1}).</value>
        return this.buildErrorWithVerboseLog(_SPLoaderError__WEBPACK_IMPORTED_MODULE_2__["SPLoaderErrorCode"].loadComponentReturnsEmptyError, undefined, false, _utilities_telemetryConstants__WEBPACK_IMPORTED_MODULE_3__["loadComponentLogSource"], loadComponentImplEventName, manifest.id, manifest.alias);
    };
    ErrorBuilder.buildLoadComponentReturnsDefaultEmptyError = function (manifest) {
        // <value>loadComponent() returned an object with an empty default property for component "{0}" ({1}).</value>
        return this.buildErrorWithVerboseLog(_SPLoaderError__WEBPACK_IMPORTED_MODULE_2__["SPLoaderErrorCode"].loadComponentReturnsDefaultEmptyError, undefined, false, _utilities_telemetryConstants__WEBPACK_IMPORTED_MODULE_3__["loadComponentLogSource"], loadComponentImplEventName, manifest.id, manifest.alias);
    };
    ErrorBuilder.buildLoadComponentDependencyError = function (manifest, error) {
        // <value>Failed to load component dependency "{0}" from component "{1}" ({2}).
        // Original error: {3}</value>
        return this.buildErrorWithVerboseLog(_SPLoaderError__WEBPACK_IMPORTED_MODULE_2__["SPLoaderErrorCode"].loadComponentDependencyError, error, false, _utilities_telemetryConstants__WEBPACK_IMPORTED_MODULE_3__["loadComponentLogSource"], loadComponentImplEventName, manifest.id, manifest.alias, error.message);
    };
    ErrorBuilder.buildManifestNotFoundError = function (moduleConfiguration) {
        // <value>Manifest not found for component id "{0}" and version "{1}".</value>
        return this.buildErrorWithVerboseLog(_SPLoaderError__WEBPACK_IMPORTED_MODULE_2__["SPLoaderErrorCode"].manifestNotFoundError, undefined, false, _utilities_telemetryConstants__WEBPACK_IMPORTED_MODULE_3__["loadComponentLogSource"], undefined, moduleConfiguration.id, moduleConfiguration.version);
    };
    ErrorBuilder.buildLoadPathDependencyBlockedError = function (manifest, name) {
        // tslint:disable-next-line:max-line-length
        // <value>Failed to load path dependency "{0}" from component "{1}" ({2}) due to another dependency that failed to load.</value>
        return this.buildErrorWithVerboseLog(_SPLoaderError__WEBPACK_IMPORTED_MODULE_2__["SPLoaderErrorCode"].loadPathDependencyBlockedByAnotherDependencyError, undefined, false, _utilities_telemetryConstants__WEBPACK_IMPORTED_MODULE_3__["loadComponentLogSource"], undefined, name, manifest.id, manifest.alias);
    };
    ErrorBuilder.buildModuleHasUndeclaredDependencyError = function (manifest, dependencyName) {
        // tslint:disable-next-line:max-line-length
        // <value>The entry point for component "{0}" ({1}) has a dependency on "{2}" that is not declared in the manifest.</value>
        return this.buildErrorWithErrorLog(_SPLoaderError__WEBPACK_IMPORTED_MODULE_2__["SPLoaderErrorCode"].moduleHasUndeclaredDependencyError, undefined, true, // This is an error when building the manifest/JS so it's an expected error
        _utilities_telemetryConstants__WEBPACK_IMPORTED_MODULE_3__["loadComponentLogSource"], undefined, manifest.id, manifest.alias, dependencyName);
    };
    ErrorBuilder.buildLoadEntryPointError = function (manifest, error) {
        // <value>Failed to load entry point from component "{0}" ({1}).
        // Original error: {2}</value>
        return this.buildErrorWithVerboseLog(_SPLoaderError__WEBPACK_IMPORTED_MODULE_2__["SPLoaderErrorCode"].loadEntryPointError, error, false, _utilities_telemetryConstants__WEBPACK_IMPORTED_MODULE_3__["loadComponentLogSource"], undefined, manifest.id, manifest.alias, error.message);
    };
    ErrorBuilder.buildLoadPathDependencyError = function (manifest, dependencyName, error) {
        // <value>Failed to load path dependency "{0}" from component "{1}" ({2}).
        // Original error: {3}</value>
        return this.buildErrorWithVerboseLog(_SPLoaderError__WEBPACK_IMPORTED_MODULE_2__["SPLoaderErrorCode"].loadPathDependencyError, error, false, _utilities_telemetryConstants__WEBPACK_IMPORTED_MODULE_3__["loadComponentLogSource"], undefined, dependencyName, manifest.id, manifest.alias, error.message);
    };
    ErrorBuilder.buildMissingPathDependencyError = function (manifest, dependencyName) {
        // <value>Missing path dependency "{0}" from component "{1}" ({2}). Existing path dependencies: {3}</value>
        return this.buildErrorWithVerboseLog(_SPLoaderError__WEBPACK_IMPORTED_MODULE_2__["SPLoaderErrorCode"].missingPathDependencyError, undefined, true, _utilities_telemetryConstants__WEBPACK_IMPORTED_MODULE_3__["loadComponentLogSource"], undefined, dependencyName, manifest.id, manifest.alias, Object.keys(manifest.loaderConfig.scriptResources).join(_Error_resx__WEBPACK_IMPORTED_MODULE_4__["listSeparator"]));
    };
    ErrorBuilder.buildLoadComponentDependencyFailoverPathError = function (manifest, dependencyName, failoverPath, error) {
        // <value>Failed to load component dependency "{0}" with failover path "{1}" from component "{2}" ({3}).
        // Original error: {4}</value>
        return this.buildErrorWithVerboseLog(_SPLoaderError__WEBPACK_IMPORTED_MODULE_2__["SPLoaderErrorCode"].loadComponentDependencyFailoverPathError, error, false, _utilities_telemetryConstants__WEBPACK_IMPORTED_MODULE_3__["loadComponentLogSource"], undefined, dependencyName, failoverPath, manifest.id, manifest.alias, error.message);
    };
    ErrorBuilder.buildLoadScriptWithStringError = function () {
        // <value>loadScript function doesn't allow a string as 2nd parameter. Use ILoadScriptOptions instead.</value>
        return this.buildErrorWithErrorLog(_SPLoaderError__WEBPACK_IMPORTED_MODULE_2__["SPLoaderErrorCode"].loadScriptWithStringError, undefined, true, // Expected error, as it is caused by a wrong input from the user
        _utilities_telemetryConstants__WEBPACK_IMPORTED_MODULE_3__["loadScriptLogSource"], undefined);
    };
    ErrorBuilder.buildUrlStatusLocalhostFileNotFoundError = function (manifest, resourceName, url) {
        // tslint:disable-next-line:max-line-length
        // <value>Failed to load URL '{3}' for resource '{2}' in component '{0}' ({1}). The file was not found in the server.
        // Make sure that you are running 'gulp serve'.</value>
        return this.buildErrorWithErrorLog(_SPLoaderError__WEBPACK_IMPORTED_MODULE_2__["SPLoaderErrorCode"].urlStatusLocalhostFileNotFoundError, undefined, true, // Expected error, as it is caused by a user action (not running gulp serve)
        _utilities_telemetryConstants__WEBPACK_IMPORTED_MODULE_3__["loadScriptLogSource"], undefined, manifest.id, manifest.alias, resourceName, url);
    };
    ErrorBuilder.buildUrlStatusFileNotFoundError = function (manifest, resourceName, url) {
        // tslint:disable-next-line:max-line-length
        // <value>Failed to load URL '{3}' for resource '{2}' in component '{0}' ({1}). The file was not found in the server.</value>
        return this.buildErrorWithErrorLog(_SPLoaderError__WEBPACK_IMPORTED_MODULE_2__["SPLoaderErrorCode"].urlStatusFileNotFoundError, undefined, true, // Expected error, as it is caused by a wrong URL in the manifest
        _utilities_telemetryConstants__WEBPACK_IMPORTED_MODULE_3__["loadScriptLogSource"], undefined, manifest.id, manifest.alias, resourceName, url);
    };
    ErrorBuilder.buildUrlStatusForbiddenError = function (manifest, resourceName, url) {
        // tslint:disable-next-line:max-line-length
        // <value>Failed to load URL '{3}' for resource '{2}' in component '{0}' ({1}). The access to the file is forbidden.</value>
        return this.buildErrorWithErrorLog(_SPLoaderError__WEBPACK_IMPORTED_MODULE_2__["SPLoaderErrorCode"].urlStatusForbiddenError, undefined, true, // Expected error, as it is caused by accessing a URL/CDN without permission
        _utilities_telemetryConstants__WEBPACK_IMPORTED_MODULE_3__["loadScriptLogSource"], undefined, manifest.id, manifest.alias, resourceName, url);
    };
    ErrorBuilder.buildUrlStatusClientErrorError = function (manifest, resourceName, url) {
        // tslint:disable-next-line:max-line-length
        // <value>Failed to load URL '{3}' for resource '{2}' in component '{0}' ({1}). There was an error requesting the file.</value>
        return this.buildErrorWithErrorLog(_SPLoaderError__WEBPACK_IMPORTED_MODULE_2__["SPLoaderErrorCode"].urlStatusClientErrorError, undefined, false, // Unexpected error
        _utilities_telemetryConstants__WEBPACK_IMPORTED_MODULE_3__["loadScriptLogSource"], undefined, manifest.id, manifest.alias, resourceName, url);
    };
    ErrorBuilder.buildUrlStatusServerErrorError = function (manifest, resourceName, url) {
        // tslint:disable-next-line:max-line-length
        // <value>Failed to load URL '{3}' for resource '{2}' in component '{0}' ({1}). There was a problem in the server.</value>
        return this.buildErrorWithErrorLog(_SPLoaderError__WEBPACK_IMPORTED_MODULE_2__["SPLoaderErrorCode"].urlStatusServerErrorError, undefined, false, // Unexpected error
        _utilities_telemetryConstants__WEBPACK_IMPORTED_MODULE_3__["loadScriptLogSource"], undefined, manifest.id, manifest.alias, resourceName, url);
    };
    ErrorBuilder.buildUrlStatusLocalhostNetworkErrorError = function (manifest, resourceName, url) {
        // tslint:disable-next-line:max-line-length
        // <value>Failed to load URL '{3}' for resource '{2}' in component '{0}' ({1}). There was a network problem.
        // Make sure that you are running 'gulp serve' and you have run 'gulp trust-dev-cert'.</value>
        return this.buildErrorWithErrorLog(_SPLoaderError__WEBPACK_IMPORTED_MODULE_2__["SPLoaderErrorCode"].urlStatusLocalhostNetworkErrorError, undefined, true, // Expected error, as it is caused by a user action (not running gulp serve)
        _utilities_telemetryConstants__WEBPACK_IMPORTED_MODULE_3__["loadScriptLogSource"], undefined, manifest.id, manifest.alias, resourceName, url);
    };
    ErrorBuilder.buildUrlStatusDocLibNetworkErrorError = function (manifest, resourceName, url) {
        // tslint:disable-next-line:max-line-length
        // <value>Failed to load URL '{3}' for resource '{2}' in component '{0}' ({1}). There was a network problem.</value>
        return this.buildErrorWithErrorLog(_SPLoaderError__WEBPACK_IMPORTED_MODULE_2__["SPLoaderErrorCode"].urlStatusDocLibNetworkErrorError, undefined, true, // Expected error, as it is caused by the tenant admin not enabling CDN
        _utilities_telemetryConstants__WEBPACK_IMPORTED_MODULE_3__["loadScriptLogSource"], undefined, manifest.id, manifest.alias, resourceName, url);
    };
    ErrorBuilder.buildUrlStatusHttpsNetworkErrorError = function (manifest, resourceName, url) {
        // tslint:disable-next-line:max-line-length
        // <value>Failed to load URL '{3}' for resource '{2}' in component '{0}' ({1}). There was a network problem.
        // This may be a problem with a HTTPS certificate. Make sure you have the right certificate.</value>
        return this.buildErrorWithErrorLog(_SPLoaderError__WEBPACK_IMPORTED_MODULE_2__["SPLoaderErrorCode"].urlStatusHttpsNetworkErrorError, undefined, true, _utilities_telemetryConstants__WEBPACK_IMPORTED_MODULE_3__["loadScriptLogSource"], undefined, manifest.id, manifest.alias, resourceName, url);
    };
    ErrorBuilder.buildUrlStatusNetworkErrorError = function (manifest, resourceName, url) {
        // tslint:disable-next-line:max-line-length
        // <value>Failed to load URL '{3}' for resource '{2}' in component '{0}' ({1}). There was a network problem.</value>
        return this.buildErrorWithErrorLog(_SPLoaderError__WEBPACK_IMPORTED_MODULE_2__["SPLoaderErrorCode"].urlStatusNetworkErrorError, undefined, true, _utilities_telemetryConstants__WEBPACK_IMPORTED_MODULE_3__["loadScriptLogSource"], undefined, manifest.id, manifest.alias, resourceName, url);
    };
    ErrorBuilder.buildUrlStatusUndefinedError = function (manifest, resourceName, url) {
        // tslint:disable-next-line:max-line-length
        // <value>Failed to load URL '{3}' for resource '{2}' in component '{0}' ({1}) because of unknown problems.</value>
        return this.buildErrorWithErrorLog(_SPLoaderError__WEBPACK_IMPORTED_MODULE_2__["SPLoaderErrorCode"].urlStatusUndefinedError, undefined, false, // Unexpected error
        _utilities_telemetryConstants__WEBPACK_IMPORTED_MODULE_3__["loadScriptLogSource"], undefined, manifest.id, manifest.alias, resourceName, url);
    };
    ErrorBuilder.buildScriptFailedToCreateGlobalError = function (globalName, scriptUrl) {
        return this.buildErrorWithErrorLog(_SPLoaderError__WEBPACK_IMPORTED_MODULE_2__["SPLoaderErrorCode"].failedToCreateGlobalVariable, undefined, false, _utilities_telemetryConstants__WEBPACK_IMPORTED_MODULE_3__["loadScriptLogSource"], undefined, globalName, scriptUrl);
    };
    ErrorBuilder.buildModuleHasFailedDependencyError = function (resource, dependency) {
        // <value>Failed to load module '{0}' because dependency {1} was not loaded</value>
        return this.buildErrorWithErrorLog(_SPLoaderError__WEBPACK_IMPORTED_MODULE_2__["SPLoaderErrorCode"].dependencyLoadError, undefined, true, // Unexpected error
        _utilities_telemetryConstants__WEBPACK_IMPORTED_MODULE_3__["loadScriptLogSource"], undefined, resource, dependency);
    };
    ErrorBuilder.buildErrorWithVerboseLog = function (errorCode, innerError, isExpected, source, eventName) {
        var params = []; // tslint:disable-line:no-any
        for (var _i = 5 // tslint:disable-line:no-any
        ; _i < arguments.length // tslint:disable-line:no-any
        ; _i++ // tslint:disable-line:no-any
        ) {
            params[_i - 5] = arguments[_i]; // tslint:disable-line:no-any
        }
        var error = new (_SPLoaderError__WEBPACK_IMPORTED_MODULE_2__["default"].bind.apply(_SPLoaderError__WEBPACK_IMPORTED_MODULE_2__["default"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])([void 0, errorCode, innerError, isExpected], params)))();
        _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__["_TraceLogger"].logVerbose(source, error.message, eventName);
        return error;
    };
    ErrorBuilder.buildErrorWithErrorLog = function (errorCode, innerError, isExpected, source, eventName) {
        var params = []; // tslint:disable-line:no-any
        for (var _i = 5 // tslint:disable-line:no-any
        ; _i < arguments.length // tslint:disable-line:no-any
        ; _i++ // tslint:disable-line:no-any
        ) {
            params[_i - 5] = arguments[_i]; // tslint:disable-line:no-any
        }
        var error = new (_SPLoaderError__WEBPACK_IMPORTED_MODULE_2__["default"].bind.apply(_SPLoaderError__WEBPACK_IMPORTED_MODULE_2__["default"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])([void 0, errorCode, innerError, isExpected], params)))();
        _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__["_TraceLogger"].logError(source, error, eventName);
        return error;
    };
    return ErrorBuilder;
}());
/* harmony default export */ __webpack_exports__["default"] = (ErrorBuilder);


/***/ }),

/***/ "hpQ8":
/*!**************************************!*\
  !*** ./lib/utilities/Utilities.resx ***!
  \**************************************/
/*! exports provided: ie9OrOlderNotSupportedError, firefox43OrOlderNotSupportedError, platformFailedToLoadError, platformFailedToLoadWithMessageError, applicationFailedToInitializeError, resourceNotFoundError, noFailoverPathError, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"ie9OrOlderNotSupportedError\":\"Ţĥĩś ƥàĝē ďōēś ńōţ śũƥƥōŕţ Ĩńţēŕńēţ Ēxƥĺōŕēŕ ŕēĺēàśēś ōĺďēŕ ţĥàń vēŕśĩōń 10. Ƥĺēàśē ũƥďàţē ŷōũŕ ŵēƀ ƀŕōŵśēŕ.\",\"firefox43OrOlderNotSupportedError\":\"Ţĥĩś ƥàĝē ďōēś ńōţ śũƥƥōŕţ Mōźĩĺĺà Ƒĩŕēƒōx ŕēĺēàśēś ōĺďēŕ ţĥàń vēŕśĩōń 44. Ƥĺēàśē ũƥďàţē ŷōũŕ ŵēƀ ƀŕōŵśēŕ.\",\"platformFailedToLoadError\":\"Ƥĺàţƒōŕm ƒàĩĺēď ţō ĺōàď. Ĩď: \\u0022{0}\\u0022, ńàmē: \\u0022{1}\\u0022\",\"platformFailedToLoadWithMessageError\":\"Ƥĺàţƒōŕm ƒàĩĺēď ţō ĺōàď. Ĩď: \\u0022{0}\\u0022, ńàmē: \\u0022{1}\\u0022. Ēŕŕōŕ: {2}\",\"applicationFailedToInitializeError\":\"Ēŕŕōŕ ĩńĩţĩàĺĩźĩńĝ àƥƥĺĩćàţĩōń. Ēŕŕōŕ: {0}\",\"resourceNotFoundError\":\"Ŕēśōũŕćē \\u0022{0}\\u0022 ńōţ ƒōũńď ĩń ĺōàďēŕ ćōńƒĩĝũŕàţĩōń ōƒ màńĩƒēśţ ƒōŕ ćōmƥōńēńţ \\u0022{1}\\u0022 ({2}).\",\"noFailoverPathError\":\"Ćàńńōţ ćàĺĺ ŕēśōĺvēÀďďŕēśś() ōń à ćōmƥōńēńţ ŵĩţĥ ńō ƒàĩĺōvēŕ ƥàţĥ\"}");

/***/ }),

/***/ "jOlS":
/*!************************************************!*\
  !*** external "@microsoft/load-themed-styles" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_jOlS__;

/***/ }),

/***/ "kLLm":
/*!*****************************************!*\
  !*** ./lib/tiny/store/ManifestStore.js ***!
  \*****************************************/
/*! exports provided: ManifestStore, OldManifestStoreShim */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManifestStore", function() { return ManifestStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OldManifestStoreShim", function() { return OldManifestStoreShim; });
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ms/sp-telemetry */ "2q6Q");
/* harmony import */ var _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _debug_DebugStatus__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../debug/DebugStatus */ "+Zvm");
/* harmony import */ var _stores_ComponentStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../stores/ComponentStore */ "eaMA");
/* harmony import */ var _utilities_componentConstants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utilities/componentConstants */ "kd3Z");
/* harmony import */ var _common_killSwitches__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/killSwitches */ "zBRI");
/* harmony import */ var _common_normalize__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/normalize */ "XBF6");
/* harmony import */ var _ManifestProvider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ManifestProvider */ "a8RQ");








/**
 * Manages all the manifests on the current page and provides access to fetching manifests
 * from the server.
 */
var ManifestStore = /** @class */ (function () {
    function ManifestStore(_provider) {
        this._provider = _provider;
        this._store = new Map();
        this._auditLog = [];
    }
    /**
     * Add a collection of manifests to the store.
     *
     * @param manifests - Array of manifests
     * @param shouldOverwrite - Should the manifest be added if there is an existing manifest
     * @param shouldPin - Should the manifest be pinned
     * @param isDebug - Are the manifests debug
     *
     * @returns A boolean indicating if all the manifests were added or not
     */
    ManifestStore.prototype.addManifests = function (manifests, shouldOverwrite, shouldPin, isDebug) {
        var isSuccess = true;
        for (var _i = 0, manifests_1 = manifests; _i < manifests_1.length; _i++) {
            var m = manifests_1[_i];
            var result = this.addManifest(m, shouldOverwrite, shouldPin, isDebug);
            isSuccess = isSuccess && result;
        }
        return isSuccess;
    };
    /**
     * Add a manifest to the store.
     *
     * @param manifest - manifest to add
     * @param shouldOverwrite - Should the manifest be added if there is an existing manifest
     * @param shouldPin - Should the manifest be pinned
     * @param isDebug - Is the manifest debug
     *
     * @returns A boolean indicating if the manifest was added or not
     */
    ManifestStore.prototype.addManifest = function (manifest, shouldOverwrite, shouldPin, isDebug) {
        var id = manifest.id, isInternal = manifest.isInternal, version = manifest.version;
        if (!Object(_common_killSwitches__WEBPACK_IMPORTED_MODULE_5__["isReactProfilerKSActivated"])() && _debug_DebugStatus__WEBPACK_IMPORTED_MODULE_2__["DebugStatus"].shouldUseReactDomProfiling) {
            augmentManifestForProfiling(manifest);
        }
        var storeEntry = this._store.get(id);
        if (storeEntry === null || storeEntry === void 0 ? void 0 : storeEntry.isPinned) {
            return false;
        }
        var normalizedId = Object(_common_normalize__WEBPACK_IMPORTED_MODULE_6__["normalizeComponentId"])(id, version);
        var existingManifest = storeEntry === null || storeEntry === void 0 ? void 0 : storeEntry.manifests.get(normalizedId);
        if (existingManifest && !shouldOverwrite) {
            return false;
        }
        if (!storeEntry) {
            storeEntry = {
                manifests: new Map()
            };
            this._store.set(id, storeEntry);
        }
        if (shouldPin ||
            (!_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPFlight"].isDebugFlightEnabled && isInternal && id !== _utilities_componentConstants__WEBPACK_IMPORTED_MODULE_4__["reactComponentId"] && id !== _utilities_componentConstants__WEBPACK_IMPORTED_MODULE_4__["reactDomComponentId"])) {
            storeEntry.isPinned = true;
        }
        var newEntry = { manifest: manifest };
        if (isDebug) {
            newEntry.isDebug = true;
        }
        storeEntry.manifests.set(normalizedId, newEntry);
        this._auditLog.push("addManifest: " + normalizedId);
        return true;
    };
    /**
     * Delete all non-pinned manifests in the store.
     */
    ManifestStore.prototype.clearManifests = function () {
        var _this = this;
        this._store.forEach(function (sEntry, sKey) {
            if (!sEntry.isPinned && sKey !== _utilities_componentConstants__WEBPACK_IMPORTED_MODULE_4__["reactComponentId"] && sKey !== _utilities_componentConstants__WEBPACK_IMPORTED_MODULE_4__["reactDomComponentId"]) {
                sEntry.manifests.forEach(function (mEntry, mKey) {
                    if (!mEntry.isDebug) {
                        // If there is only one manifest delete the whole entry
                        if (sEntry.manifests.size === 1) {
                            _this._store.delete(sKey);
                            _this._auditLog.push("clearManifests: " + sKey);
                        }
                        else {
                            sEntry.manifests.delete(mKey);
                            _this._auditLog.push("clearManiefsts: " + mKey);
                        }
                    }
                });
            }
        });
    };
    /**
     * Delete a manifest from the store.
     *
     * @param id - Manifest id
     * @param version - Manifest version
     */
    ManifestStore.prototype.deleteManifest = function (id, version) {
        var storeEntry = this._store.get(id);
        if (!storeEntry || storeEntry.isPinned) {
            return false;
        }
        if (storeEntry.manifests.size === 1) {
            this._auditLog.push("deleteManifest: " + id);
            return this._store.delete(id);
        }
        else {
            var cid = Object(_common_normalize__WEBPACK_IMPORTED_MODULE_6__["normalizeComponentId"])(id, version);
            this._auditLog.push("deleteManifest: " + cid);
            return storeEntry.manifests.delete(cid);
        }
    };
    /**
     * Fetch manifests from the server.
     *
     * @param requests - Array of manifest requests
     *
     * @returns A promise resolving to an array of component manifests
     */
    ManifestStore.prototype.fetchManifests = function (requests) {
        var _this = this;
        return this._provider.fetchManifests(requests).then(function (manifests) {
            _this.addManifests(manifests, false, false, false);
            return manifests;
        });
    };
    /**
     *
     * @deprecated This is only used in debug scenarios. Needs further refactoring.
     */
    ManifestStore.prototype.getAllStoreEntries = function () {
        var entries = [];
        this._store.forEach(function (sEntry) {
            entries.push(sEntry);
        });
        return entries;
    };
    /**
     * Return all manifests in the store.
     *
     * @param onlyUnloaded -  Only return the set of non-debug manifests where the component has not been loaded.
     *
     * @returns An array of component manifests.
     */
    ManifestStore.prototype.getAllManifests = function (onlyUnloaded) {
        var manifests = [];
        this._store.forEach(function (sEntry) {
            sEntry.manifests.forEach(function (mEntry) {
                if (!onlyUnloaded ||
                    !_stores_ComponentStore__WEBPACK_IMPORTED_MODULE_3__["default"].instance.tryGetComponentReference(mEntry.manifest.id, mEntry.manifest.version)) {
                    if (!onlyUnloaded) {
                        manifests.push(mEntry.manifest);
                    }
                    else if (!mEntry.isDebug) {
                        // If we're only fetching unloaded manifests, then only return non-debug manifests
                        manifests.push(mEntry.manifest);
                    }
                }
            });
        });
        return manifests;
    };
    /**
     * Get one manifest from the store.
     *
     * @param id - Manifest id
     * @param version - Manifest version
     *
     * @remarks If the version is not provided and there is no debug manifest, then if,
     *   and only if, one manifest exists return it. If multiple versions exist and there is
     *   a debug manifest, return it. Otherwise, an error is thrown. If the version is
     *   provided and multiple manifests exist, return the highest compatible version.
     *
     * @returns If the requested manifest exists, return it
     */
    ManifestStore.prototype.getManifest = function (id, version) {
        var storeEntry = this._store.get(id);
        var manifest;
        if (storeEntry) {
            var manifests = storeEntry.manifests;
            if (!version) {
                if (manifests.size > 1) {
                    manifests.forEach(function (mEntry) {
                        // If multiple manifests, then return the debug manifest
                        if (mEntry.isDebug) {
                            manifest = mEntry.manifest;
                        }
                    });
                    // If no debug manifest, then a version must always be requested with multiple manifests
                    if (!manifest) {
                        throw new Error("Multiple versions of " + id);
                    }
                }
                else {
                    // We should only loop once but IE11 lacks support for Array.from and Map.values
                    manifests.forEach(function (mEntry) {
                        manifest = mEntry.manifest;
                    });
                }
            }
            else {
                var reqVersion_1 = _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Version"].parse(version);
                var storeVersions_1 = [];
                manifests.forEach(function (mEntry) {
                    var entryVersion = mEntry.manifest.version;
                    var mVersion = _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Version"].parse(entryVersion);
                    storeVersions_1.push("" + entryVersion);
                    if ((mVersion.greaterThan(reqVersion_1) && mVersion.satisfies(reqVersion_1)) ||
                        mVersion.equals(reqVersion_1)) {
                        reqVersion_1 = mVersion;
                        manifest = mEntry.manifest;
                    }
                });
                if (!manifest) {
                    var monitor = new _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_1__["_QosMonitor"]('ManifestStore.getManifestFailures');
                    monitor.writeUnexpectedFailure(undefined, new Error("Cannot find manifest for " + id + "_" + version + ". Store had [" + storeVersions_1.join(', ') + "]."), { addedManifestsAuditLog: this._auditLog });
                }
            }
        }
        return manifest;
    };
    return ManifestStore;
}());

/**
 * Remap things that depend on react-dom to react-dom-profiling if react-dom profiling is enabled
 *
 * @param manifest - the manifest to augment
 */
function augmentManifestForProfiling(manifest) {
    if (manifest.loaderConfig && manifest.loaderConfig.scriptResources) {
        for (var resourceId in manifest.loaderConfig.scriptResources) {
            if (manifest.loaderConfig.scriptResources.hasOwnProperty(resourceId)) {
                var resource = manifest.loaderConfig.scriptResources[resourceId];
                if (resource.type === 'component') {
                    var componentResource = resource;
                    if (componentResource.id === _utilities_componentConstants__WEBPACK_IMPORTED_MODULE_4__["reactDomComponentId"] && componentResource.version === _utilities_componentConstants__WEBPACK_IMPORTED_MODULE_4__["react16Version"]) {
                        componentResource.id = _utilities_componentConstants__WEBPACK_IMPORTED_MODULE_4__["reactDomProfilingComponentId"];
                    }
                }
            }
        }
    }
}
/**
 * Shim between the tiny ManifestStore and the old ManifestStore.
 *
 * To be deleted when isTinyLoaderKSActivated is removed.
 */
var OldManifestStoreShim = /** @class */ (function () {
    function OldManifestStoreShim(serviceScope, webAbsoluteUrl) {
        this._impl = new ManifestStore(new _ManifestProvider__WEBPACK_IMPORTED_MODULE_7__["ManifestProvider"](serviceScope, webAbsoluteUrl));
    }
    OldManifestStoreShim.prototype.registerPreloadedManifests = function (preloadedData) {
        var manifests = preloadedData.manifests;
        this._impl.addManifests(manifests, true, false, false);
        // tslint:disable-next-line:no-string-literal
        this._impl.addManifests(window['g_webPartManifests'] || [], true, false, false);
    };
    OldManifestStoreShim.prototype.registerDebugManifests = function (manifests) {
        this._impl.addManifests(manifests, true, false, true);
    };
    OldManifestStoreShim.prototype.tryGetManifest = function (id, version, shouldLog) {
        if (shouldLog === void 0) { shouldLog = true; }
        try {
            return this._impl.getManifest(id, version);
        }
        catch (e) {
            return undefined;
        }
    };
    OldManifestStoreShim.prototype.getManifest = function (id, version) {
        var m = this._impl.getManifest(id, version);
        if (m) {
            return m;
        }
        else {
            throw new Error("Manifest not found " + Object(_common_normalize__WEBPACK_IMPORTED_MODULE_6__["normalizeComponentId"])(id, version || ''));
        }
    };
    OldManifestStoreShim.prototype.getRegisteredManifests = function (onlyUnloaded) {
        return this._impl.getAllManifests(onlyUnloaded);
    };
    OldManifestStoreShim.prototype.replaceManifests = function (manifests) {
        this._impl.clearManifests();
        this._impl.addManifests(manifests, false, false, false);
    };
    OldManifestStoreShim.prototype._getManifestMap = function () {
        var retVal = new Map();
        this._impl._store.forEach(function (sEntry) {
            sEntry.manifests.forEach(function (mEntry, mEntryKey) {
                var isDebug = mEntry.isDebug, _a = mEntry.manifest, id = _a.id, version = _a.version;
                var val = { id: id, version: version };
                if (isDebug) {
                    val.debugManifest = mEntry.manifest;
                }
                else {
                    val.manifest = mEntry.manifest;
                }
                retVal.set(mEntryKey, val);
            });
        });
        return retVal;
    };
    OldManifestStoreShim.prototype.registerManifests = function (manifests, overwriteExisting) {
        this._impl.addManifests(manifests, overwriteExisting, false, false);
    };
    OldManifestStoreShim.prototype._pinManifest = function (componentId) {
        var entry = this._impl._store.get(componentId);
        if (entry) {
            entry.isPinned = true;
        }
    };
    OldManifestStoreShim.prototype.requestManifest = function (id, version) {
        var _this = this;
        if (Object(_common_killSwitches__WEBPACK_IMPORTED_MODULE_5__["isRequestManifestKillSwitchActivated"])()) {
            return this._impl.fetchManifests([{ id: id, version: version }]).then(function () {
                return _this._impl.getManifest(id, version);
            });
        }
        else {
            var monitor = new _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_1__["_QosMonitor"]('ManifestStore.RequestManifest');
            var manifest = this._impl.getManifest(id, version);
            if (manifest) {
                monitor.writeSuccess();
                return Promise.resolve(manifest);
            }
            else {
                monitor.writeUnexpectedFailure(undefined, new Error("Manifest " + id + "_" + version + " not in store"));
                return this._impl.fetchManifests([{ id: id, version: version }]).then(function () {
                    return _this._impl.getManifest(id, version);
                });
            }
        }
    };
    OldManifestStoreShim.prototype.requestManifests = function (requests) {
        return this._impl.fetchManifests(requests);
    };
    return OldManifestStoreShim;
}());



/***/ }),

/***/ "kd3Z":
/*!*********************************************!*\
  !*** ./lib/utilities/componentConstants.js ***!
  \*********************************************/
/*! exports provided: reactComponentId, reactDomComponentId, reactDomProfilingComponentId, spApplicationBaseComponentId, listViewHostComponentId, classicPageAppComponentId, react16Version, spApplicationBaseName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reactComponentId", function() { return reactComponentId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reactDomComponentId", function() { return reactDomComponentId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reactDomProfilingComponentId", function() { return reactDomProfilingComponentId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "spApplicationBaseComponentId", function() { return spApplicationBaseComponentId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listViewHostComponentId", function() { return listViewHostComponentId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "classicPageAppComponentId", function() { return classicPageAppComponentId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "react16Version", function() { return react16Version; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "spApplicationBaseName", function() { return spApplicationBaseName; });
// IDs
var reactComponentId = '0d910c1c-13b9-4e1c-9aa4-b008c5e42d7d';
var reactDomComponentId = 'aa0a46ec-1505-43cd-a44a-93f3a5aa460a';
var reactDomProfilingComponentId = 'd0619256-3350-4eb2-95df-31fbc25c4451';
var spApplicationBaseComponentId = '4df9bb86-ab0a-4aab-ab5f-48bf167048fb';
var listViewHostComponentId = 'b1ab4aaa-f779-405c-8683-d3a750b5d18d';
var classicPageAppComponentId = 'eb4b666b-5c29-4dad-9a99-23613f21a2b7';
// Versions
var react16Version = '16.9.0';
// Names
var spApplicationBaseName = '@microsoft/sp-application-base';


/***/ }),

/***/ "mKTs":
/*!***************************************************************************************!*\
  !*** ./lib/DeveloperTools/BrowserDeveloperToolsWarning/showBrowserDevToolsWarning.js ***!
  \***************************************************************************************/
/*! exports provided: showBrowserDevToolsWarning, minifyConsoleCSS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showBrowserDevToolsWarning", function() { return showBrowserDevToolsWarning; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "minifyConsoleCSS", function() { return minifyConsoleCSS; });
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _BrowserDeveloperToolsWarning_resx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BrowserDeveloperToolsWarning.resx */ "3a0R");
var _BrowserDeveloperToolsWarning_resx__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./BrowserDeveloperToolsWarning.resx */ "3a0R", 1);


var WARNING_URL = 'https://technet.microsoft.com/en-us/library/bb794823.aspx';
function showBrowserDevToolsWarning() {
    var browserInfo = _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_BrowserDetection"].getBrowserInformation();
    var warningHeading = _BrowserDeveloperToolsWarning_resx__WEBPACK_IMPORTED_MODULE_1__["warningHeading"];
    var warningLine1 = _BrowserDeveloperToolsWarning_resx__WEBPACK_IMPORTED_MODULE_1__["warningLine1"];
    var warningLine2 = _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Text"].format(_BrowserDeveloperToolsWarning_resx__WEBPACK_IMPORTED_MODULE_1__["warningLine2"], WARNING_URL);
    if (browserInfo.browser === _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_Browser"].Chrome ||
        browserInfo.browser === _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_Browser"].Firefox ||
        browserInfo.browser === _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_Browser"].Safari) {
        var stylesCss =  false
            ? undefined
            : __webpack_require__(/*! !raw-loader!./BrowserDeveloperToolsWarning.css */ "76db");
        // Parse out the styles from the CSS file
        var headingCss = minifyConsoleCSS((stylesCss.match(/\.heading\s*{([^}]+)}/) || [])[1]);
        var otherLinesCss = minifyConsoleCSS((stylesCss.match(/\.otherLines\s*{([^}]+)}/) || [])[1]);
        // Formatting supported
        console.log("\n%c" + warningHeading + "%c\n" + warningLine1 + "\n\n" + warningLine2 + "\n\n", headingCss, otherLinesCss);
    }
    else {
        // No formatting
        console.log("\n" + warningHeading + "\n" + warningLine1 + "\n\n" + warningLine2 + "\n\n");
    }
}
function minifyConsoleCSS(css) {
    return css
        .replace(/^\s+/g, '') // Leading whitespace
        .replace(/:\s+/g, ':') // Leading attribute whitespace
        .replace(/;\s+/g, ';') // Trailing attribute whitespace
        .replace(/,\s+/g, ',') // Whitespace between commas in multi-value attribues
        .replace(/;$/, ''); // Remove final semi-colon
}


/***/ }),

/***/ "mwqp":
/*!**********************!*\
  !*** ./lib/index.js ***!
  \**********************/
/*! exports provided: SPComponentLoader, _SPStarter, _SPLoaderFlights, _ManifestStore, _ManifestProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _loader_SPComponentLoader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loader/SPComponentLoader */ "KZU3");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SPComponentLoader", function() { return _loader_SPComponentLoader__WEBPACK_IMPORTED_MODULE_0__["SPComponentLoader"]; });

/* harmony import */ var _starter_SPStarter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./starter/SPStarter */ "wMLj");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_SPStarter", function() { return _starter_SPStarter__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _utilities_SPLoaderFlights__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utilities/SPLoaderFlights */ "dQRF");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_SPLoaderFlights", function() { return _utilities_SPLoaderFlights__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _stores_ManifestStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./stores/ManifestStore */ "Eke5");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_ManifestStore", function() { return _stores_ManifestStore__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _stores_ManifestProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./stores/ManifestProvider */ "Y/fc");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_ManifestProvider", function() { return _stores_ManifestProvider__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/**
 * The SharePoint Framework loader
 *
 * @remarks
 * Built on familiar standards such as RequireJS and WebPack,
 * the loader is the first part of the SharePoint Framework to load on a page.
 * It manages versioning and loading of client-side components.
 *
 * @packagedocumentation
 */
// Static proxies for the API







/***/ }),

/***/ "p2pk":
/*!*****************************!*\
  !*** ./lib/loc/Common.resx ***!
  \*****************************/
/*! exports provided: loadComponentMaxRetriesError, manifestNotFoundError, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"loadComponentMaxRetriesError\":\"Àţţēmƥţēď ţō ĺōàď ćōmƥōńēńţ \\u0022{0}\\u0022 ({1}) {2} ţĩmēś ŵĩţĥōũţ śũććēśś.\",\"manifestNotFoundError\":\"Màńĩƒēśţ ńōţ ƒōũńď ƒōŕ ćōmƥōńēńţ ĩď \\u0022{0}\\u0022 àńď vēŕśĩōń \\u0022{1}\\u0022.\"}");

/***/ }),

/***/ "pJEz":
/*!****************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/raw-loader@0.5.1/node_modules/raw-loader!./blobs/requirejs/2.1.20/require.min.js ***!
  \****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\r\n RequireJS 2.1.20 Copyright (c) 2010-2015, The Dojo Foundation All Rights Reserved.\r\n Available via the MIT or new BSD license.\r\n see: http://github.com/jrburke/requirejs for details\r\n*/\r\nvar requirejs,require,define;\r\n(function(ba){function G(b){return\"[object Function]\"===K.call(b)}function H(b){return\"[object Array]\"===K.call(b)}function v(b,c){if(b){var d;for(d=0;d<b.length&&(!b[d]||!c(b[d],d,b));d+=1);}}function T(b,c){if(b){var d;for(d=b.length-1;-1<d&&(!b[d]||!c(b[d],d,b));d-=1);}}function t(b,c){return fa.call(b,c)}function n(b,c){return t(b,c)&&b[c]}function A(b,c){for(var d in b)if(t(b,d)&&c(b[d],d))break}function U(b,c,d,e){c&&A(c,function(c,i){if(d||!t(b,i))e&&\"object\"===typeof c&&c&&!H(c)&&!G(c)&&!(c instanceof\r\nRegExp)?(b[i]||(b[i]={}),U(b[i],c,d,e)):b[i]=c});return b}function u(b,c){return function(){return c.apply(b,arguments)}}function ca(b){throw b;}function da(b){if(!b)return b;var c=ba;v(b.split(\".\"),function(b){c=c[b]});return c}function B(b,c,d,e){c=Error(c+\"\\nhttp://requirejs.org/docs/errors.html#\"+b);c.requireType=b;c.requireModules=e;d&&(c.originalError=d);return c}function ga(b){function c(a,j,b){var f,l,c,d,h,e,g,i,j=j&&j.split(\"/\"),p=k.map,m=p&&p[\"*\"];if(a){a=a.split(\"/\");l=a.length-1;k.nodeIdCompat&&\r\nQ.test(a[l])&&(a[l]=a[l].replace(Q,\"\"));\".\"===a[0].charAt(0)&&j&&(l=j.slice(0,j.length-1),a=l.concat(a));l=a;for(c=0;c<l.length;c++)if(d=l[c],\".\"===d)l.splice(c,1),c-=1;else if(\"..\"===d&&!(0===c||1===c&&\"..\"===l[2]||\"..\"===l[c-1])&&0<c)l.splice(c-1,2),c-=2;a=a.join(\"/\")}if(b&&p&&(j||m)){l=a.split(\"/\");c=l.length;a:for(;0<c;c-=1){h=l.slice(0,c).join(\"/\");if(j)for(d=j.length;0<d;d-=1)if(b=n(p,j.slice(0,d).join(\"/\")))if(b=n(b,h)){f=b;e=c;break a}!g&&(m&&n(m,h))&&(g=n(m,h),i=c)}!f&&g&&(f=g,e=i);f&&(l.splice(0,\r\ne,f),a=l.join(\"/\"))}return(f=n(k.pkgs,a))?f:a}function d(a){z&&v(document.getElementsByTagName(\"script\"),function(j){if(j.getAttribute(\"data-requiremodule\")===a&&j.getAttribute(\"data-requirecontext\")===h.contextName)return j.parentNode.removeChild(j),!0})}function p(a){var j=n(k.paths,a);if(j&&H(j)&&1<j.length)return j.shift(),h.require.undef(a),h.makeRequire(null,{skipMap:!0})([a]),!0}function g(a){var j,c=a?a.indexOf(\"!\"):-1;-1<c&&(j=a.substring(0,c),a=a.substring(c+1,a.length));return[j,a]}function i(a,\r\nj,b,f){var l,d,e=null,i=j?j.name:null,k=a,p=!0,m=\"\";a||(p=!1,a=\"_@r\"+(K+=1));a=g(a);e=a[0];a=a[1];e&&(e=c(e,i,f),d=n(q,e));a&&(e?m=d&&d.normalize?d.normalize(a,function(a){return c(a,i,f)}):-1===a.indexOf(\"!\")?c(a,i,f):a:(m=c(a,i,f),a=g(m),e=a[0],m=a[1],b=!0,l=h.nameToUrl(m)));b=e&&!d&&!b?\"_unnormalized\"+(O+=1):\"\";return{prefix:e,name:m,parentMap:j,unnormalized:!!b,url:l,originalName:k,isDefine:p,id:(e?e+\"!\"+m:m)+b}}function r(a){var j=a.id,b=n(m,j);b||(b=m[j]=new h.Module(a));return b}function s(a,\r\nj,b){var f=a.id,c=n(m,f);if(t(q,f)&&(!c||c.defineEmitComplete))\"defined\"===j&&b(q[f]);else if(c=r(a),c.error&&\"error\"===j)b(c.error);else c.on(j,b)}function w(a,b){var c=a.requireModules,f=!1;if(b)b(a);else if(v(c,function(b){if(b=n(m,b))b.error=a,b.events.error&&(f=!0,b.emit(\"error\",a))}),!f)e.onError(a)}function x(){R.length&&(v(R,function(a){var b=a[0];\"string\"===typeof b&&(h.defQueueMap[b]=!0);C.push(a)}),R=[])}function y(a){delete m[a];delete V[a]}function F(a,b,c){var f=a.map.id;a.error?a.emit(\"error\",\r\na.error):(b[f]=!0,v(a.depMaps,function(f,d){var e=f.id,h=n(m,e);h&&(!a.depMatched[d]&&!c[e])&&(n(b,e)?(a.defineDep(d,q[e]),a.check()):F(h,b,c))}),c[f]=!0)}function D(){var a,b,c=(a=1E3*k.waitSeconds)&&h.startTime+a<(new Date).getTime(),f=[],l=[],e=!1,i=!0;if(!W){W=!0;A(V,function(a){var h=a.map,g=h.id;if(a.enabled&&(h.isDefine||l.push(a),!a.error))if(!a.inited&&c)p(g)?e=b=!0:(f.push(g),d(g));else if(!a.inited&&(a.fetched&&h.isDefine)&&(e=!0,!h.prefix))return i=!1});if(c&&f.length)return a=B(\"timeout\",\r\n\"Load timeout for modules: \"+f,null,f),a.contextName=h.contextName,w(a);i&&v(l,function(a){F(a,{},{})});if((!c||b)&&e)if((z||ea)&&!X)X=setTimeout(function(){X=0;D()},50);W=!1}}function E(a){t(q,a[0])||r(i(a[0],null,!0)).init(a[1],a[2])}function I(a){var a=a.currentTarget||a.srcElement,b=h.onScriptLoad;a.detachEvent&&!Y?a.detachEvent(\"onreadystatechange\",b):a.removeEventListener(\"load\",b,!1);b=h.onScriptError;(!a.detachEvent||Y)&&a.removeEventListener(\"error\",b,!1);return{node:a,id:a&&a.getAttribute(\"data-requiremodule\")}}\r\nfunction J(){var a;for(x();C.length;){a=C.shift();if(null===a[0])return w(B(\"mismatch\",\"Mismatched anonymous define() module: \"+a[a.length-1]));E(a)}h.defQueueMap={}}var W,Z,h,L,X,k={waitSeconds:7,baseUrl:\"./\",paths:{},bundles:{},pkgs:{},shim:{},config:{}},m={},V={},$={},C=[],q={},S={},aa={},K=1,O=1;L={require:function(a){return a.require?a.require:a.require=h.makeRequire(a.map)},exports:function(a){a.usingExports=!0;if(a.map.isDefine)return a.exports?q[a.map.id]=a.exports:a.exports=q[a.map.id]={}},\r\nmodule:function(a){return a.module?a.module:a.module={id:a.map.id,uri:a.map.url,config:function(){return n(k.config,a.map.id)||{}},exports:a.exports||(a.exports={})}}};Z=function(a){this.events=n($,a.id)||{};this.map=a;this.shim=n(k.shim,a.id);this.depExports=[];this.depMaps=[];this.depMatched=[];this.pluginMaps={};this.depCount=0};Z.prototype={init:function(a,b,c,f){f=f||{};if(!this.inited){this.factory=b;if(c)this.on(\"error\",c);else this.events.error&&(c=u(this,function(a){this.emit(\"error\",a)}));\r\nthis.depMaps=a&&a.slice(0);this.errback=c;this.inited=!0;this.ignore=f.ignore;f.enabled||this.enabled?this.enable():this.check()}},defineDep:function(a,b){this.depMatched[a]||(this.depMatched[a]=!0,this.depCount-=1,this.depExports[a]=b)},fetch:function(){if(!this.fetched){this.fetched=!0;h.startTime=(new Date).getTime();var a=this.map;if(this.shim)h.makeRequire(this.map,{enableBuildCallback:!0})(this.shim.deps||[],u(this,function(){return a.prefix?this.callPlugin():this.load()}));else return a.prefix?\r\nthis.callPlugin():this.load()}},load:function(){var a=this.map.url;S[a]||(S[a]=!0,h.load(this.map.id,a))},check:function(){if(this.enabled&&!this.enabling){var a,b,c=this.map.id;b=this.depExports;var f=this.exports,l=this.factory;if(this.inited)if(this.error)this.emit(\"error\",this.error);else{if(!this.defining){this.defining=!0;if(1>this.depCount&&!this.defined){if(G(l)){if(this.events.error&&this.map.isDefine||e.onError!==ca)try{f=h.execCb(c,l,b,f)}catch(d){a=d}else f=h.execCb(c,l,b,f);this.map.isDefine&&\r\nvoid 0===f&&((b=this.module)?f=b.exports:this.usingExports&&(f=this.exports));if(a)return a.requireMap=this.map,a.requireModules=this.map.isDefine?[this.map.id]:null,a.requireType=this.map.isDefine?\"define\":\"require\",w(this.error=a)}else f=l;this.exports=f;if(this.map.isDefine&&!this.ignore&&(q[c]=f,e.onResourceLoad))e.onResourceLoad(h,this.map,this.depMaps);y(c);this.defined=!0}this.defining=!1;this.defined&&!this.defineEmitted&&(this.defineEmitted=!0,this.emit(\"defined\",this.exports),this.defineEmitComplete=\r\n!0)}}else t(h.defQueueMap,c)||this.fetch()}},callPlugin:function(){var a=this.map,b=a.id,d=i(a.prefix);this.depMaps.push(d);s(d,\"defined\",u(this,function(f){var l,d;d=n(aa,this.map.id);var g=this.map.name,P=this.map.parentMap?this.map.parentMap.name:null,p=h.makeRequire(a.parentMap,{enableBuildCallback:!0});if(this.map.unnormalized){if(f.normalize&&(g=f.normalize(g,function(a){return c(a,P,!0)})||\"\"),f=i(a.prefix+\"!\"+g,this.map.parentMap),s(f,\"defined\",u(this,function(a){this.init([],function(){return a},\r\nnull,{enabled:!0,ignore:!0})})),d=n(m,f.id)){this.depMaps.push(f);if(this.events.error)d.on(\"error\",u(this,function(a){this.emit(\"error\",a)}));d.enable()}}else d?(this.map.url=h.nameToUrl(d),this.load()):(l=u(this,function(a){this.init([],function(){return a},null,{enabled:!0})}),l.error=u(this,function(a){this.inited=!0;this.error=a;a.requireModules=[b];A(m,function(a){0===a.map.id.indexOf(b+\"_unnormalized\")&&y(a.map.id)});w(a)}),l.fromText=u(this,function(f,c){var d=a.name,g=i(d),P=M;c&&(f=c);P&&\r\n(M=!1);r(g);t(k.config,b)&&(k.config[d]=k.config[b]);try{e.exec(f)}catch(m){return w(B(\"fromtexteval\",\"fromText eval for \"+b+\" failed: \"+m,m,[b]))}P&&(M=!0);this.depMaps.push(g);h.completeLoad(d);p([d],l)}),f.load(a.name,p,l,k))}));h.enable(d,this);this.pluginMaps[d.id]=d},enable:function(){V[this.map.id]=this;this.enabling=this.enabled=!0;v(this.depMaps,u(this,function(a,b){var c,f;if(\"string\"===typeof a){a=i(a,this.map.isDefine?this.map:this.map.parentMap,!1,!this.skipMap);this.depMaps[b]=a;if(c=\r\nn(L,a.id)){this.depExports[b]=c(this);return}this.depCount+=1;s(a,\"defined\",u(this,function(a){this.undefed||(this.defineDep(b,a),this.check())}));this.errback?s(a,\"error\",u(this,this.errback)):this.events.error&&s(a,\"error\",u(this,function(a){this.emit(\"error\",a)}))}c=a.id;f=m[c];!t(L,c)&&(f&&!f.enabled)&&h.enable(a,this)}));A(this.pluginMaps,u(this,function(a){var b=n(m,a.id);b&&!b.enabled&&h.enable(a,this)}));this.enabling=!1;this.check()},on:function(a,b){var c=this.events[a];c||(c=this.events[a]=\r\n[]);c.push(b)},emit:function(a,b){v(this.events[a],function(a){a(b)});\"error\"===a&&delete this.events[a]}};h={config:k,contextName:b,registry:m,defined:q,urlFetched:S,defQueue:C,defQueueMap:{},Module:Z,makeModuleMap:i,nextTick:e.nextTick,onError:w,configure:function(a){a.baseUrl&&\"/\"!==a.baseUrl.charAt(a.baseUrl.length-1)&&(a.baseUrl+=\"/\");var b=k.shim,c={paths:!0,bundles:!0,config:!0,map:!0};A(a,function(a,b){c[b]?(k[b]||(k[b]={}),U(k[b],a,!0,!0)):k[b]=a});a.bundles&&A(a.bundles,function(a,b){v(a,\r\nfunction(a){a!==b&&(aa[a]=b)})});a.shim&&(A(a.shim,function(a,c){H(a)&&(a={deps:a});if((a.exports||a.init)&&!a.exportsFn)a.exportsFn=h.makeShimExports(a);b[c]=a}),k.shim=b);a.packages&&v(a.packages,function(a){var b,a=\"string\"===typeof a?{name:a}:a;b=a.name;a.location&&(k.paths[b]=a.location);k.pkgs[b]=a.name+\"/\"+(a.main||\"main\").replace(ha,\"\").replace(Q,\"\")});A(m,function(a,b){!a.inited&&!a.map.unnormalized&&(a.map=i(b,null,!0))});if(a.deps||a.callback)h.require(a.deps||[],a.callback)},makeShimExports:function(a){return function(){var b;\r\na.init&&(b=a.init.apply(ba,arguments));return b||a.exports&&da(a.exports)}},makeRequire:function(a,j){function g(c,d,p){var k,n;j.enableBuildCallback&&(d&&G(d))&&(d.__requireJsBuild=!0);if(\"string\"===typeof c){if(G(d))return w(B(\"requireargs\",\"Invalid require call\"),p);if(a&&t(L,c))return L[c](m[a.id]);if(e.get)return e.get(h,c,a,g);k=i(c,a,!1,!0);k=k.id;return!t(q,k)?w(B(\"notloaded\",'Module name \"'+k+'\" has not been loaded yet for context: '+b+(a?\"\":\". Use require([])\"))):q[k]}J();h.nextTick(function(){J();\r\nn=r(i(null,a));n.skipMap=j.skipMap;n.init(c,d,p,{enabled:!0});D()});return g}j=j||{};U(g,{isBrowser:z,toUrl:function(b){var d,e=b.lastIndexOf(\".\"),j=b.split(\"/\")[0];if(-1!==e&&(!(\".\"===j||\"..\"===j)||1<e))d=b.substring(e,b.length),b=b.substring(0,e);return h.nameToUrl(c(b,a&&a.id,!0),d,!0)},defined:function(b){return t(q,i(b,a,!1,!0).id)},specified:function(b){b=i(b,a,!1,!0).id;return t(q,b)||t(m,b)}});a||(g.undef=function(b){x();var c=i(b,a,!0),e=n(m,b);e.undefed=!0;d(b);delete q[b];delete S[c.url];\r\ndelete $[b];T(C,function(a,c){a[0]===b&&C.splice(c,1)});delete h.defQueueMap[b];e&&(e.events.defined&&($[b]=e.events),y(b))});return g},enable:function(a){n(m,a.id)&&r(a).enable()},completeLoad:function(a){var b,c,d=n(k.shim,a)||{},e=d.exports;for(x();C.length;){c=C.shift();if(null===c[0]){c[0]=a;if(b)break;b=!0}else c[0]===a&&(b=!0);E(c)}h.defQueueMap={};c=n(m,a);if(!b&&!t(q,a)&&c&&!c.inited){if(k.enforceDefine&&(!e||!da(e)))return p(a)?void 0:w(B(\"nodefine\",\"No define call for \"+a,null,[a]));E([a,\r\nd.deps||[],d.exportsFn])}D()},nameToUrl:function(a,b,c){var d,g,i;(d=n(k.pkgs,a))&&(a=d);if(d=n(aa,a))return h.nameToUrl(d,b,c);if(e.jsExtRegExp.test(a))d=a+(b||\"\");else{d=k.paths;a=a.split(\"/\");for(g=a.length;0<g;g-=1)if(i=a.slice(0,g).join(\"/\"),i=n(d,i)){H(i)&&(i=i[0]);a.splice(0,g,i);break}d=a.join(\"/\");d+=b||(/^data\\:|\\?/.test(d)||c?\"\":\".js\");d=(\"/\"===d.charAt(0)||d.match(/^[\\w\\+\\.\\-]+:/)?\"\":k.baseUrl)+d}return k.urlArgs?d+((-1===d.indexOf(\"?\")?\"?\":\"&\")+k.urlArgs):d},load:function(a,b){e.load(h,\r\na,b)},execCb:function(a,b,c,d){return b.apply(d,c)},onScriptLoad:function(a){if(\"load\"===a.type||ia.test((a.currentTarget||a.srcElement).readyState))N=null,a=I(a),h.completeLoad(a.id)},onScriptError:function(a){var b=I(a);if(!p(b.id))return w(B(\"scripterror\",\"Script error for: \"+b.id,a,[b.id]))}};h.require=h.makeRequire();return h}var e,x,y,D,I,E,N,J,r,O,ja=/(\\/\\*([\\s\\S]*?)\\*\\/|([^:]|^)\\/\\/(.*)$)/mg,ka=/[^.]\\s*require\\s*\\(\\s*[\"']([^'\"\\s]+)[\"']\\s*\\)/g,Q=/\\.js$/,ha=/^\\.\\//;x=Object.prototype;var K=\r\nx.toString,fa=x.hasOwnProperty,z=!!(\"undefined\"!==typeof window&&\"undefined\"!==typeof navigator&&window.document),ea=!z&&\"undefined\"!==typeof importScripts,ia=z&&\"PLAYSTATION 3\"===navigator.platform?/^complete$/:/^(complete|loaded)$/,Y=\"undefined\"!==typeof opera&&\"[object Opera]\"===opera.toString(),F={},s={},R=[],M=!1;if(\"undefined\"===typeof define){if(\"undefined\"!==typeof requirejs){if(G(requirejs))return;s=requirejs;requirejs=void 0}\"undefined\"!==typeof require&&!G(require)&&(s=require,require=\r\nvoid 0);e=requirejs=function(b,c,d,p){var g,i=\"_\";!H(b)&&\"string\"!==typeof b&&(g=b,H(c)?(b=c,c=d,d=p):b=[]);g&&g.context&&(i=g.context);(p=n(F,i))||(p=F[i]=e.s.newContext(i));g&&p.configure(g);return p.require(b,c,d)};e.config=function(b){return e(b)};e.nextTick=\"undefined\"!==typeof setTimeout?function(b){setTimeout(b,4)}:function(b){b()};require||(require=e);e.version=\"2.1.20\";e.jsExtRegExp=/^\\/|:|\\?|\\.js$/;e.isBrowser=z;x=e.s={contexts:F,newContext:ga};e({});v([\"toUrl\",\"undef\",\"defined\",\"specified\"],\r\nfunction(b){e[b]=function(){var c=F._;return c.require[b].apply(c,arguments)}});if(z&&(y=x.head=document.getElementsByTagName(\"head\")[0],D=document.getElementsByTagName(\"base\")[0]))y=x.head=D.parentNode;e.onError=ca;e.createNode=function(b){var c=b.xhtml?document.createElementNS(\"http://www.w3.org/1999/xhtml\",\"html:script\"):document.createElement(\"script\");c.type=b.scriptType||\"text/javascript\";c.charset=\"utf-8\";c.async=!0;return c};e.load=function(b,c,d){var p=b&&b.config||{},g;if(z){g=e.createNode(p,\r\nc,d);if(p.onNodeCreated)p.onNodeCreated(g,p,c,d);g.setAttribute(\"data-requirecontext\",b.contextName);g.setAttribute(\"data-requiremodule\",c);g.attachEvent&&!(g.attachEvent.toString&&0>g.attachEvent.toString().indexOf(\"[native code\"))&&!Y?(M=!0,g.attachEvent(\"onreadystatechange\",b.onScriptLoad)):(g.addEventListener(\"load\",b.onScriptLoad,!1),g.addEventListener(\"error\",b.onScriptError,!1));g.src=d;J=g;D?y.insertBefore(g,D):y.appendChild(g);J=null;return g}if(ea)try{importScripts(d),b.completeLoad(c)}catch(i){b.onError(B(\"importscripts\",\r\n\"importScripts failed for \"+c+\" at \"+d,i,[c]))}};z&&!s.skipDataMain&&T(document.getElementsByTagName(\"script\"),function(b){y||(y=b.parentNode);if(I=b.getAttribute(\"data-main\"))return r=I,s.baseUrl||(E=r.split(\"/\"),r=E.pop(),O=E.length?E.join(\"/\")+\"/\":\"./\",s.baseUrl=O),r=r.replace(Q,\"\"),e.jsExtRegExp.test(r)&&(r=I),s.deps=s.deps?s.deps.concat(r):[r],!0});define=function(b,c,d){var e,g;\"string\"!==typeof b&&(d=c,c=b,b=null);H(c)||(d=c,c=null);!c&&G(d)&&(c=[],d.length&&(d.toString().replace(ja,\"\").replace(ka,\r\nfunction(b,d){c.push(d)}),c=(1===d.length?[\"require\"]:[\"require\",\"exports\",\"module\"]).concat(c)));if(M){if(!(e=J))N&&\"interactive\"===N.readyState||T(document.getElementsByTagName(\"script\"),function(b){if(\"interactive\"===b.readyState)return N=b}),e=N;e&&(b||(b=e.getAttribute(\"data-requiremodule\")),g=F[e.getAttribute(\"data-requirecontext\")])}g?(g.defQueue.push([b,c,d]),g.defQueueMap[b]=!0):R.push([b,c,d])};define.amd={jQuery:!0};e.exec=function(b){return eval(b)};e(s)}})(this);\r\n"

/***/ }),

/***/ "pQk7":
/*!******************************************!*\
  !*** ./lib/tiny/store/ComponentStore.js ***!
  \******************************************/
/*! exports provided: ComponentStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentStore", function() { return ComponentStore; });
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_normalize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/normalize */ "XBF6");
/* harmony import */ var _stores_Stores_resx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../stores/Stores.resx */ "Jkl9");
var _stores_Stores_resx__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../stores/Stores.resx */ "Jkl9", 1);



/**
 * Manages loaded components and component load promises.
 */
var ComponentStore = /** @class */ (function () {
    function ComponentStore() {
        this._componentPromises = new Map();
        this._components = new Map();
        this._componentVersions = new Map();
    }
    /**
     * Try and get a component load promise.
     *
     * @param id - Component id
     * @param version - Component version
     *
     * @returns If the component load promise exists, return it
     */
    ComponentStore.prototype.tryGetComponent = function (id, version) {
        return this._componentPromises.get(Object(_common_normalize__WEBPACK_IMPORTED_MODULE_1__["normalizeComponentId"])(id, version));
    };
    /**
     * Try and get a loaded component.
     *
     * @param id - Component id
     * @param version - Component version
     *
     * @returns If the component has been loaded, return it
     */
    ComponentStore.prototype.tryGetComponentReference = function (id, version) {
        return this._components.get(Object(_common_normalize__WEBPACK_IMPORTED_MODULE_1__["normalizeComponentId"])(id, version));
    };
    /**
     * Get all loaded components.
     *
     * @remarks
     * This is not meant to be used as the regular behavior of ComponentStore as it's exposing its internals.
     * This exists only to ensure the SystemJS side-loader knows about all components loaded by RequireJS.
     *
     * @returns Map of all the loaded components
     */
    // tslint:disable-next-line:no-any
    ComponentStore.prototype.getAllComponentReferences = function () {
        return this._components;
    };
    /**
     * Try and get a component load promise by id.
     *
     * @param id - Component id
     *
     * @returns If, and only if, one component with the id exists, return a promise
     *   which will resolve to the component.
     */
    ComponentStore.prototype.tryGetComponentById = function (id) {
        try {
            return this.getComponentById(id);
        }
        catch (e) {
            return undefined;
        }
    };
    /**
     * Get a component load promise by id.
     *
     * @remarks If there is no component or there are multiple components an exception will be thrown.
     *
     * @param id - Component id
     *
     * @returns If, and only if, one component with the id exists, return a promise
     *   which will resolve to the component.
     */
    ComponentStore.prototype.getComponentById = function (id) {
        var versions = this._componentVersions.get(id) || [];
        if (versions.length !== 1) {
            var msg = versions.length === 0 ? _stores_Stores_resx__WEBPACK_IMPORTED_MODULE_2__["noComponentFoundError"] : _stores_Stores_resx__WEBPACK_IMPORTED_MODULE_2__["tooManyComponentsError"];
            throw new Error(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Text"].format(msg, id));
        }
        // If a version exists then the component must exist in either map
        var normalizedId = Object(_common_normalize__WEBPACK_IMPORTED_MODULE_1__["normalizeComponentId"])(id, versions[0]);
        var retVal;
        var component = this._components.get(normalizedId);
        if (component) {
            retVal = Promise.resolve(component);
        }
        else {
            retVal = this._componentPromises.get(normalizedId);
        }
        return retVal;
    };
    /**
     * Store a component load promise.
     *
     * @param id - Component id
     * @param version - Component version
     * @param componentPromise - Component load promise
     *
     * @returns A boolean indicating if the component load promise was stored
     */
    ComponentStore.prototype.storeComponent = function (id, version, componentPromise) {
        var _this = this;
        var normalizedId = Object(_common_normalize__WEBPACK_IMPORTED_MODULE_1__["normalizeComponentId"])(id, version);
        var shouldStore = !this._componentPromises.get(normalizedId);
        if (shouldStore) {
            this._storeVersion(id, version);
            this._componentPromises.set(normalizedId, componentPromise);
            componentPromise
                .then(function (component) {
                // Ensure the component hasn't been deleted before storing the component
                if (_this._componentPromises.has(normalizedId)) {
                    _this._components.set(normalizedId, component);
                }
                return component;
            })
                .catch(function () {
                /* no-op */
            });
        }
        return shouldStore;
    };
    /**
     * Store a loaded component.
     *
     * @param id - Component id
     * @param version - Component version
     * @param component - Loaded component
     *
     * @returns A boolean indicating if the component was stored
     */
    ComponentStore.prototype.storeLoadedComponent = function (id, version, component) {
        var normalizedId = Object(_common_normalize__WEBPACK_IMPORTED_MODULE_1__["normalizeComponentId"])(id, version);
        var shouldStore = !this._components.get(normalizedId);
        if (shouldStore) {
            this._storeVersion(id, version);
            this._components.set(normalizedId, component);
            this._componentPromises.set(normalizedId, Promise.resolve(component));
        }
        return shouldStore;
    };
    /**
     * Delete a component.
     *
     * @param id - Component id
     * @param version - Component version
     *
     * @returns A boolean indicating if the component was deleted
     */
    ComponentStore.prototype.deleteComponent = function (id, version) {
        var normalizedId = Object(_common_normalize__WEBPACK_IMPORTED_MODULE_1__["normalizeComponentId"])(id, version);
        // A component should always, if it exists, be in the promise map
        var isDeleted = this._componentPromises.delete(normalizedId);
        if (isDeleted) {
            this._components.delete(normalizedId);
            var versions = this._componentVersions.get(id);
            var i = versions.indexOf(version);
            if (i > -1) {
                versions.splice(i, 1);
                if (versions.length === 0) {
                    this._componentVersions.delete(id);
                }
            }
        }
        return isDeleted;
    };
    /**
     * This is only used to satisfy the old ComponentStore interface.
     * @todo Delete when graduating tiny loader flight
     */
    ComponentStore.prototype._getComponentById = function (id) {
        return this.getComponentById(id);
    };
    /**
     * Track stored versions for a component.
     *
     * @param id - Component id
     * @param version - Component version
     */
    ComponentStore.prototype._storeVersion = function (id, version) {
        if (!this._componentVersions.has(id)) {
            this._componentVersions.set(id, []);
        }
        this._componentVersions.get(id).push(version);
    };
    return ComponentStore;
}());



/***/ }),

/***/ "pxRb":
/*!*******************************************!*\
  !*** ./lib/tiny/common/platformLoader.js ***!
  \*******************************************/
/*! exports provided: startApplication */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startApplication", function() { return startApplication; });
/* harmony import */ var _loader_SPComponentLoader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../loader/SPComponentLoader */ "KZU3");
/* harmony import */ var _stores_ComponentStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../stores/ComponentStore */ "eaMA");
/* harmony import */ var _stores_ManifestStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../stores/ManifestStore */ "Eke5");
/* harmony import */ var _utilities_componentConstants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utilities/componentConstants */ "kd3Z");




function startApplication(preloadedData, serviceScope) {
    return new Promise(function (resolve) {
        updateServiceWorkerState();
        var appBaseManifest = _stores_ManifestStore__WEBPACK_IMPORTED_MODULE_2__["default"].instance.tryGetManifest(_utilities_componentConstants__WEBPACK_IMPORTED_MODULE_3__["spApplicationBaseComponentId"]);
        var app;
        if (appBaseManifest) {
            var appBase = _stores_ComponentStore__WEBPACK_IMPORTED_MODULE_1__["default"].instance.tryGetComponentReference(appBaseManifest.id, appBaseManifest.version);
            if (appBase) {
                app = navigateToApplication(appBase, preloadedData, serviceScope);
            }
        }
        resolve(app);
    })
        .then(function (app) {
        if (!app) {
            return _loader_SPComponentLoader__WEBPACK_IMPORTED_MODULE_0__["SPComponentLoader"].loadComponentById(_utilities_componentConstants__WEBPACK_IMPORTED_MODULE_3__["spApplicationBaseComponentId"]).then(function (a) { return navigateToApplication(a, preloadedData, serviceScope); });
        }
        return app;
    })
        .catch(function (e) {
        throw e;
    });
}
function updateServiceWorkerState() {
    var _a;
    try {
        if ((_a = window.navigator.serviceWorker) === null || _a === void 0 ? void 0 : _a.controller) {
            sessionStorage.setItem('serviceworkerstate', window.navigator.serviceWorker.controller.state.toString());
        }
        else {
            sessionStorage.removeItem('serviceworkerstate');
        }
    }
    catch (e) {
        // catch
    }
}
function navigateToApplication(appBase, preloadedData, serviceScope) {
    return new appBase._Navigator(serviceScope).navigateToApplication(preloadedData);
}


/***/ }),

/***/ "td2X":
/*!************************************************!*\
  !*** ./lib/utilities/LoadComponentExecutor.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var LoadComponentExecutor = /** @class */ (function () {
    function LoadComponentExecutor(loadFunction) {
        this._pendingLoads = [];
        this._loadFunction = loadFunction;
    }
    LoadComponentExecutor.prototype.setAlternativeExecutor = function (executor) {
        this._alternativeExecutor = executor;
        executor._alternativeExecutor = this;
    };
    LoadComponentExecutor.prototype.loadComponent = function (manifest, retryCount) {
        var _this = this;
        if (!this._canRunLoad()) {
            return new Promise(function (resolve, reject) {
                _this._pendingLoads.push(function () {
                    _this.loadComponent(manifest, retryCount).then(resolve, reject);
                });
            });
        }
        this._incrementActiveLoads();
        return this._loadFunction(manifest, retryCount)
            .then(function (module) {
            _this._decrementActiveLoads();
            return module;
        })
            .catch(function (error) {
            _this._decrementActiveLoads();
            throw error;
        });
    };
    Object.defineProperty(LoadComponentExecutor.prototype, "isRunning", {
        /**
         * Returns true if SystemJS is currently running any loadComponent() call.
         *
         * @remarks
         * This is used to ensure that SystemJS will not run while RequireJS is not done with all loads.
         */
        get: function () {
            return this._activeLoads > 0;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * When called, executes all the loadComponent() calls that couldn't be executed before.
     *
     * @remarks
     * This is used to ensure that we don't run SystemJS while RequireJS is not done trying to load a component.
     */
    LoadComponentExecutor.prototype.processPendingLoads = function () {
        var _loadsToRun = this._pendingLoads;
        this._pendingLoads = [];
        _loadsToRun.forEach(function (load) { return load(); });
    };
    /**
     * Returns true if loadComponent() can be executed.
     *
     * @remarks
     * It just checks that RequireJS is not running at the time, as both can't work at the same time.
     */
    LoadComponentExecutor.prototype._canRunLoad = function () {
        return !this._alternativeExecutor || !this._alternativeExecutor.isRunning;
    };
    /**
     * Increments the number of active loads.
     */
    LoadComponentExecutor.prototype._incrementActiveLoads = function () {
        this._activeLoads++;
    };
    /**
     * Decrements the number of active loads.
     * When there are no active loads, it tries to load any pending request in RequireJS.
     */
    LoadComponentExecutor.prototype._decrementActiveLoads = function () {
        this._activeLoads--;
        if (this._activeLoads === 0 && this._alternativeExecutor) {
            this._alternativeExecutor.processPendingLoads();
        }
    };
    return LoadComponentExecutor;
}());
/* harmony default export */ __webpack_exports__["default"] = (LoadComponentExecutor);


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

/***/ "wMLj":
/*!**********************************!*\
  !*** ./lib/starter/SPStarter.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/sp-diagnostics */ "ut3N");
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ms/sp-telemetry */ "2q6Q");
/* harmony import */ var _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _debug_DebugManager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../debug/DebugManager */ "GV8Z");
/* harmony import */ var _debug_DebugStatus__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../debug/DebugStatus */ "+Zvm");
/* harmony import */ var _DeveloperTools_BrowserDeveloperToolsWarning_showBrowserDevToolsWarning__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../DeveloperTools/BrowserDeveloperToolsWarning/showBrowserDevToolsWarning */ "mKTs");
/* harmony import */ var _DeveloperTools_DeveloperToolsLoader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../DeveloperTools/DeveloperToolsLoader */ "IG7x");
/* harmony import */ var _DeveloperTools_DeveloperToolsProxy__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../DeveloperTools/DeveloperToolsProxy */ "2clK");
/* harmony import */ var _stores_LocaleStore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../stores/LocaleStore */ "XZXY");
/* harmony import */ var _stores_ManifestStore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../stores/ManifestStore */ "Eke5");
/* harmony import */ var _tiny_common_createRootScope__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../tiny/common/createRootScope */ "GHH8");
/* harmony import */ var _tiny_common_killSwitches__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../tiny/common/killSwitches */ "zBRI");
/* harmony import */ var _tiny_componentLoader_SPComponentLoader__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../tiny/componentLoader/SPComponentLoader */ "1Ivw");
/* harmony import */ var _tiny_requireLoader_RequireLoader__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../tiny/requireLoader/RequireLoader */ "QXOy");
/* harmony import */ var _tiny_store_ManifestStore__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../tiny/store/ManifestStore */ "kLLm");
/* harmony import */ var _utilities_componentConstants__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../utilities/componentConstants */ "kd3Z");
/* harmony import */ var _utilities_KillSwitches__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../utilities/KillSwitches */ "HLbO");
/* harmony import */ var _utilities_ResourceUrlChecker__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../utilities/ResourceUrlChecker */ "cnPT");
/* harmony import */ var _utilities_SPLoaderFlights__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../utilities/SPLoaderFlights */ "dQRF");
/* harmony import */ var _Starter_resx__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./Starter.resx */ "BwFs");
var _Starter_resx__WEBPACK_IMPORTED_MODULE_19___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./Starter.resx */ "BwFs", 1);
/**
 * @Copyright (c) Microsoft Corporation.  All rights reserved.
 */




















// !!! Show the developer tools warning as soon as the page loads !!!
if (false) {}
var ARIA_DISABLE_TELEMETRY_LOGGING_FLIGHT_ID = 1190;
var DEBUG_FLIGHTS_QUERY_PARAM = 'debugFlights';
var DEBUG_KILLSWITCHES_QUERY_PARAM = 'debugKillSwitches';
var COMPONENT_LOADER_GLOBAL_VARIABLE = '_spComponentLoader';
// QoS constants
var startQosScenarioName = 'SPComponentLoader.start';
/**
 * Bootstrapper for the application
 * @internal
 */
var SPStarter = /** @class */ (function () {
    function SPStarter() {
    }
    /**
     * Sets a map with the bundled components. These components will be added to the component loader
     * during initialization, so they won't need to be loaded afterwards.
     * The map is of the form `componentId: string -> component: Object`
     *
     * @internal
     */
    SPStarter._setBundledComponents = function (bundledComponents) {
        if (!SPStarter._bundledComponents) {
            SPStarter._bundledComponents = bundledComponents;
        }
        else {
            throw new Error('Bundled components can be only set once'); // TODO mpasarin: Localize
        }
    };
    /**
     * Raise the `onSecondFlush` event to resume starting with the full set of preloaded data.
     * This is called by the page scripts to resume loading the framework. Do not call it from your own code.
     *
     * @param preloadedData - Full set of preloaded data for the current session.
     */
    SPStarter.startSecondFlush = function (preloadedData) {
        _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_2__["_PerformanceLogger"].setPerformanceProperty('SPStarter.startSecondFlush');
        window[COMPONENT_LOADER_GLOBAL_VARIABLE].registerManifests(preloadedData.manifests);
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPEventManager"].instance.raiseStickyEvent('onSecondFlush', preloadedData);
    };
    /**
     * This is called by the page scripts to start loading the framework. Do not call it from your own code.
     * @param preloadedData - Data initialized on the page by the server.
     * @param handleFailure - Error handler function provided by the server to execute if there is SPFx can't be loaded.
     *  It may redirect to an error page or log error data in the console.
     * @param debugData - This parameter is used when the loader initializes a debug loader and
     *  should never be provided by any external callers.
     * @param isFirstFlush - Indicates whether the caller intends to call `startSecondFlush` to finish starting SPFx.
     */
    SPStarter.start = function (preloadedData, handleFailure, debugData, isFirstFlush, isWorkerScope) {
        var _this = this;
        _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_2__["_PerformanceLogger"].devMark('SPStarter.start');
        var _a = preloadedData.clientSideApplicationId, clientSideApplicationId = _a === void 0 ? '00000000-0000-0000-0000-000000000000' : _a, spPageContextInfo = preloadedData.spPageContextInfo;
        var correlationId = spPageContextInfo.CorrelationId;
        // Initialize flights and killswitches
        this._initializeFlightsAndKillswitches(spPageContextInfo);
        if (debugData && !Object(_tiny_common_killSwitches__WEBPACK_IMPORTED_MODULE_11__["isDangerouslyEnableDebugKSActivated"])()) {
            _debug_DebugStatus__WEBPACK_IMPORTED_MODULE_4__["DebugStatus"].dangerouslyEnableDebug();
        }
        var serviceScope = Object(_tiny_common_createRootScope__WEBPACK_IMPORTED_MODULE_10__["createRootScope"])(spPageContextInfo);
        _stores_ManifestStore__WEBPACK_IMPORTED_MODULE_9__["default"].instance = new _tiny_store_ManifestStore__WEBPACK_IMPORTED_MODULE_14__["OldManifestStoreShim"](serviceScope, spPageContextInfo.webAbsoluteUrl);
        var spLoader = __webpack_require__(/*! ../index */ "mwqp");
        _utilities_ResourceUrlChecker__WEBPACK_IMPORTED_MODULE_17__["default"].useSecondaryCdn = SPStarter.useSecondaryCdn;
        var componentLoader = new _tiny_componentLoader_SPComponentLoader__WEBPACK_IMPORTED_MODULE_12__["SPComponentLoader"]({
            preloadedData: preloadedData,
            serviceScope: serviceScope,
            bundledComponents: SPStarter._getBundledComponents(),
            ctor: _tiny_requireLoader_RequireLoader__WEBPACK_IMPORTED_MODULE_13__["RequireLoader"],
            debugData: debugData || {},
            useSecondaryCdn: SPStarter.useSecondaryCdn
        });
        var qosMonitor = undefined;
        try {
            // Initialize telemetry
            _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Log"]._initialize(new _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__["_LogHandler"]());
            SPStarter._initializeEnvironment(clientSideApplicationId);
            _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Session"]._initialize({
                clientSideApplicationId: clientSideApplicationId,
                applicationId: correlationId
            });
            SPStarter._initializeTelemetry(preloadedData);
            _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_2__["_PerformanceLogger"].markSpLoaderStart();
            if (!isWorkerScope) {
                // Ensure that Telemetry logs in real time, if not already doing so
                window.setTimeout(function () {
                    SPStarter._logDataInRealTime();
                }, SPStarter._realTimeProcessingWaitTime);
            }
            qosMonitor = new _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__["_QosMonitor"](startQosScenarioName);
            // Set locale
            _stores_LocaleStore__WEBPACK_IMPORTED_MODULE_8__["default"].setLocale(spPageContextInfo.currentUICultureName);
            // Initialize the proxies
            componentLoader._initialize(preloadedData, SPStarter._getBundledComponents(), debugData || {});
            spLoader.SPComponentLoader._initialize(componentLoader);
            window[COMPONENT_LOADER_GLOBAL_VARIABLE] = spLoader.SPComponentLoader;
        }
        catch (error) {
            return Promise.reject(error);
        }
        if (isWorkerScope) {
            return Promise.resolve({});
        }
        else if (_utilities_SPLoaderFlights__WEBPACK_IMPORTED_MODULE_18__["default"]._isSPWebWorkerEnabled()) {
            var workerProxy = serviceScope.consume(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_WebWorkerProxy"].serviceKey);
            workerProxy.init(function (markName) { return _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_2__["_PerformanceLogger"].setPerformanceProperty(markName); });
        }
        return _debug_DebugManager__WEBPACK_IMPORTED_MODULE_3__["DebugManager"].initialize(componentLoader, debugData)
            .then(function (debugLoadResult) {
            if (debugLoadResult.debugLoader) {
                // If we're loading a debug loader, call "start" on it instead of continuing with the normal initialization
                // flow
                componentLoader._unloadComponents();
                return debugLoadResult.debugLoader.start(preloadedData, handleFailure, debugLoadResult, isFirstFlush);
            }
            // Load the dev tools after the debug loader to reference the right diagnostics component
            _DeveloperTools_DeveloperToolsProxy__WEBPACK_IMPORTED_MODULE_7__["default"].initialize(_DeveloperTools_DeveloperToolsLoader__WEBPACK_IMPORTED_MODULE_6__, serviceScope);
            // Only run the experiment if the tiny loader is running
            if (_utilities_SPLoaderFlights__WEBPACK_IMPORTED_MODULE_18__["default"]._isOptimisticPreloadEnabled()) {
                spLoader.SPComponentLoader._preloadComponents();
            }
            if (_utilities_SPLoaderFlights__WEBPACK_IMPORTED_MODULE_18__["default"]._isMinimalStartFlightEnabled() && !isFirstFlush) {
                _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPEventManager"].instance.raiseStickyEvent('onSecondFlush', preloadedData);
            }
            var status = _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPExperiment"].getVariantAndLogExposure(90033 /* PagesClientServerRequestOptimzationExperiment */) === 1;
            _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_2__["_PerformanceLogger"].trackExperiment(90033, status ? 'Treatment' : 'Control');
            // Start the application
            return spLoader.SPComponentLoader._startApplication(preloadedData);
        })
            .then(function (application) {
            qosMonitor.writeSuccess();
            // Log telemetry data from buffers to the server
            SPStarter._logDataInRealTime();
            return application;
        })
            .catch(function (error) {
            if (qosMonitor) {
                if (error.message === 'Out of stack space') {
                    qosMonitor.writeExpectedFailure('ConflictingPolyfill', error);
                }
                else {
                    qosMonitor.writeUnexpectedFailure('StartApplication', error);
                }
            }
            SPStarter._logDataInRealTime();
            return _this.handleError(error, _Starter_resx__WEBPACK_IMPORTED_MODULE_19__["loaderUserFriendlyError"], _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_2__["_Telemetry"].isInitialized ? 'ClientError' : 'ClientErrorBeforeTelemetry', correlationId, preloadedData);
        });
    };
    SPStarter._logDataInRealTime = function () {
        if (!SPStarter._isTelemetryDisabled() && !SPStarter._isTelemetryLoggingInRealTime) {
            _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_2__["_Telemetry"].startRealTimeProcessing();
            SPStarter._isTelemetryLoggingInRealTime = true;
        }
    };
    /**
     * Returns the bundled components variable, after checking it exists.
     * If it doesn't exist, it throws an error as SPFx cannot be initialized without it.
     */
    SPStarter._getBundledComponents = function () {
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Validate"].isNotNullOrUndefined(SPStarter._bundledComponents, 'bundledComponents');
        return SPStarter._bundledComponents;
    };
    SPStarter._initializeEnvironment = function (clientSideApplicationId) {
        var type;
        /* tslint:disable:no-string-literal */
        if (window.location.hostname === 'localhost' ||
            (window['ENVIRONMENTTYPE'] && window['ENVIRONMENTTYPE'] === 'Local')) {
            /* tslint:enable:no-string-literal */
            type = _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["EnvironmentType"].Local;
        }
        else if (clientSideApplicationId === 'eb4b666b-5c29-4dad-9a99-23613f21a2b7') {
            // 'eb4b666b-5c29-4dad-9a99-23613f21a2b7' is the classic page application id.
            type = _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["EnvironmentType"].ClassicSharePoint;
        }
        else {
            type = _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["EnvironmentType"].SharePoint;
        }
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Environment"]._initialize({ type: type });
    };
    SPStarter._initializeTelemetry = function (preloadedData) {
        var _a;
        if (SPStarter._isTelemetryDisabled()) {
            return;
        }
        var buildNumber = preloadedData.buildNumber, clientSideApplicationId = preloadedData.clientSideApplicationId, listItemId = preloadedData.listItemId, manifests = preloadedData.manifests, spPageContextInfo = preloadedData.spPageContextInfo;
        var listItemUniqueId = listItemId || ((_a = preloadedData.item) === null || _a === void 0 ? void 0 : _a.UniqueId);
        var aadUserId = spPageContextInfo.aadUserId, completenessUrls = spPageContextInfo.completenessUrls, CorrelationId = spPageContextInfo.CorrelationId, currentUICultureName = spPageContextInfo.currentUICultureName, env = spPageContextInfo.env, experimentData = spPageContextInfo.experimentData, experimentDataLookup = spPageContextInfo.experimentDataLookup, farmLabel = spPageContextInfo.farmLabel, listId = spPageContextInfo.listId, serverTime = spPageContextInfo.serverTime, siteId = spPageContextInfo.siteId, siteSubscriptionId = spPageContextInfo.siteSubscriptionId, systemUserKey = spPageContextInfo.systemUserKey, userLoginName = spPageContextInfo.userLoginName, webId = spPageContextInfo.webId, webTemplate = spPageContextInfo.webTemplate;
        // The first manifest is always the application's manifest.
        _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_2__["_Telemetry"].initialize(manifests[0].alias, {
            environment: env,
            farmLabel: farmLabel,
            clientSideApplicationId: clientSideApplicationId || '',
            siteSubscriptionId: siteSubscriptionId,
            buildNumber: buildNumber,
            loginName: userLoginName,
            systemUserKey: systemUserKey,
            currentUICultureName: currentUICultureName,
            correlationId: CorrelationId,
            enableConsoleLog: SPStarter._isConsoleLogEnabled(),
            siteId: siteId,
            webId: webId,
            webTemplateId: webTemplate,
            completenessCallbackEndpoint: this._extractCompletenessCallbackEndpoint(completenessUrls),
            listId: listId,
            listItemUniqueId: listItemUniqueId,
            experimentData: experimentData,
            experimentDataLookup: experimentDataLookup,
            serverTime: serverTime,
            aadUserId: aadUserId
        });
        _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__["_Diagnostics"].initialize({
            enableConsoleLog: SPStarter._isConsoleLogEnabled(),
            siteId: siteId,
            webId: webId,
            listId: listId,
            listItemUniqueId: listItemId,
            correlationId: CorrelationId
        });
    };
    SPStarter._initializeFlightsAndKillswitches = function (spPageContextInfo) {
        // Initialize flights and killswitches with the data from the server
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPFlight"].initialize(spPageContextInfo.ExpFeatures);
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPKillSwitch"].initialize(spPageContextInfo.killSwitches);
        // Initialize debug flights and killswitches from the query params
        var allowDebugQueryParameter = _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPFlight"].isDebugFlightEnabled || _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Environment"].type === _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["EnvironmentType"].Local;
        if (allowDebugQueryParameter) {
            _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPFlight"].setDebugFlights(this._getQueryParamValue(DEBUG_FLIGHTS_QUERY_PARAM));
            _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPKillSwitch"].setDebugKillswitches(this._getQueryParamValue(DEBUG_KILLSWITCHES_QUERY_PARAM));
        }
    };
    SPStarter._isQueryParameterTrue = function (name) {
        var parameterValue;
        try {
            parameterValue = this._getQueryParamValue(name) === 'true';
        }
        catch (error) {
            parameterValue = false;
        }
        return parameterValue;
    };
    SPStarter._isConsoleLogEnabled = function () {
        return SPStarter._isQueryParameterTrue('enableConsoleLog');
    };
    SPStarter._isTelemetryDisabled = function () {
        return (SPStarter._isQueryParameterTrue('disableTelemetry') ||
            _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPFlight"].isEnabled(ARIA_DISABLE_TELEMETRY_LOGGING_FLIGHT_ID));
    };
    SPStarter.handleError = function (error, userFriendlyMessage, operationName, correlationId, preloadedData) {
        var errorInformation = {
            message: userFriendlyMessage,
            correlationId: correlationId,
            error: error,
            operationName: operationName
        };
        if (this._isRedirectDisabled(preloadedData)) {
            this._consoleErrorHandleFailure(errorInformation);
        }
        else {
            this._errorAspxHandleFailure(errorInformation, preloadedData);
        }
        return Promise.reject(error);
    };
    SPStarter._isRedirectDisabled = function (preloadedData) {
        return (SPStarter._isQueryParameterTrue('noredir') ||
            _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Environment"].type === _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["EnvironmentType"].ClassicSharePoint || // Classic pages
            _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Environment"].type === _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["EnvironmentType"].Local || // Local workbench
            preloadedData.clientSideApplicationId === _utilities_componentConstants__WEBPACK_IMPORTED_MODULE_15__["listViewHostComponentId"]); // ListView application
    };
    SPStarter._consoleErrorHandleFailure = function (errorInformation) {
        console.error(errorInformation.message);
        if (errorInformation.correlationId) {
            console.error("Correlation Id: " + errorInformation.correlationId);
        }
        if (errorInformation.operationName) {
            console.error("Operation name: " + errorInformation.operationName);
        }
        if (errorInformation.error) {
            console.error(errorInformation.error.message);
            console.error("CALL STACK: " + errorInformation.error.stack);
        }
    };
    SPStarter._errorAspxHandleFailure = function (errorInformation, preloadedData) {
        var _a;
        window.location.href =
            (!_utilities_KillSwitches__WEBPACK_IMPORTED_MODULE_16__["KillSwitches"].isErrorAspxUrlFixActivated()
                ? (((_a = preloadedData.spPageContextInfo) === null || _a === void 0 ? void 0 : _a.webAbsoluteUrl) || '') + '/_layouts/15/error.aspx'
                : '_layouts/15/error.aspx') +
                '?ErrorCorrelationId=' +
                encodeURIComponent(errorInformation.correlationId || '') +
                '&ErrorText=' +
                encodeURIComponent(errorInformation.message) +
                '&ErrorDetails=' +
                encodeURIComponent(errorInformation.error ? errorInformation.error.toString() : '') +
                '&Name=' +
                encodeURIComponent(errorInformation.operationName || 'DefaultOperation') +
                '&ErrorCategory=spfx';
    };
    SPStarter._extractCompletenessCallbackEndpoint = function (completenessUrls) {
        if (completenessUrls && completenessUrls.length > 0) {
            return completenessUrls[0] + "/api/collection";
        }
        else {
            return undefined;
        }
    };
    SPStarter._getQueryParamValue = function (name) {
        if (!this._queryParams) {
            this._queryParams = new URLSearchParams(self.location.search);
        }
        if (this._queryParams.has(name)) {
            return this._queryParams.get(name);
        } // else returns undefined
    };
    /**
     * Value indicating if we should load scripts from the secondary CDN.
     */
    SPStarter.useSecondaryCdn = false;
    SPStarter._bundledComponents = undefined;
    SPStarter._isTelemetryLoggingInRealTime = false;
    SPStarter._realTimeProcessingWaitTime = 1 * 1000; // 1 second
    return SPStarter;
}());
/* harmony default export */ __webpack_exports__["default"] = (SPStarter);


/***/ }),

/***/ "zBRI":
/*!*****************************************!*\
  !*** ./lib/tiny/common/killSwitches.js ***!
  \*****************************************/
/*! exports provided: isReactProfilerKSActivated, isDangerouslyEnableDebugKSActivated, isSkipFirstPartyLoaderLogKillswtichActivated, isSkipFirstPartyTinyLogKillswtichActivated, isDisable3PCodeKillswitchActivated, isOptimsticPreloadFilteredToViewPortKillswitchActivated, isRequestManifestKillSwitchActivated, isRejectOnNotFoundManifestsKillSwitchActivated, isLoadComponentDependenciesKillSwitchActivated, isLogSuccessOfTryGetManifestsKillSwitchActivated */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isReactProfilerKSActivated", function() { return isReactProfilerKSActivated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDangerouslyEnableDebugKSActivated", function() { return isDangerouslyEnableDebugKSActivated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSkipFirstPartyLoaderLogKillswtichActivated", function() { return isSkipFirstPartyLoaderLogKillswtichActivated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSkipFirstPartyTinyLogKillswtichActivated", function() { return isSkipFirstPartyTinyLogKillswtichActivated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDisable3PCodeKillswitchActivated", function() { return isDisable3PCodeKillswitchActivated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isOptimsticPreloadFilteredToViewPortKillswitchActivated", function() { return isOptimsticPreloadFilteredToViewPortKillswitchActivated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isRequestManifestKillSwitchActivated", function() { return isRequestManifestKillSwitchActivated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isRejectOnNotFoundManifestsKillSwitchActivated", function() { return isRejectOnNotFoundManifestsKillSwitchActivated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isLoadComponentDependenciesKillSwitchActivated", function() { return isLoadComponentDependenciesKillSwitchActivated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isLogSuccessOfTryGetManifestsKillSwitchActivated", function() { return isLogSuccessOfTryGetManifestsKillSwitchActivated; });
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__);
// tslint:disable:export-name

function isReactProfilerKSActivated() {
    return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPKillSwitch"].isActivated('86a7f111-fd30-473c-ae8e-2aebd51e76fb'
    /* '04/13/2020', 'Add the toggle that can enable the react profiler on the existence of specified query' */
    );
}
function isDangerouslyEnableDebugKSActivated() {
    return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPKillSwitch"].isActivated('e0187f01-1210-45a0-9865-716fedd0630a'
    /* '07/17/19', 'Enable debug when using debug loader' */
    );
}
function isSkipFirstPartyLoaderLogKillswtichActivated() {
    return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPKillSwitch"].isActivated('8f96cdcd-e215-4a2b-870e-9857af6b3706'
    /* '10/01/20', 'Stop logging loadComponent QoS in SPComponentLoader' */
    );
}
function isSkipFirstPartyTinyLogKillswtichActivated() {
    return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPKillSwitch"].isActivated('a67ffebb-e928-40d1-b6a9-4d544b9f0618'
    /* '10/14/20', 'Stop logging loadComponent QoS in RequireLoader' */
    );
}
function isDisable3PCodeKillswitchActivated() {
    return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPKillSwitch"].isActivated('d326e3b8-c718-43c5-b920-a2b2ee0ea0fb'
    /* '11/13/20', 'Allow a query string to stop loading 3rd party code' */
    );
}
function isOptimsticPreloadFilteredToViewPortKillswitchActivated() {
    return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPKillSwitch"].isActivated('062b97f3-4876-4c1d-920a-ab6b44c4931d'
    /* '12/01/20', 'Filter optimstic preloads to viewport only components' */
    );
}
function isRequestManifestKillSwitchActivated() {
    return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPKillSwitch"].isActivated('1ae2c8f3-eaab-4d49-9a8e-0a4f9e4fe4d5'
    /* '12/18/20', 'Monitor how often we have to fetch manifests' */
    );
}
function isRejectOnNotFoundManifestsKillSwitchActivated() {
    return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPKillSwitch"].isActivated('40391ecf-2963-4b4d-b6cf-a08365509a80'
    /* '12/18/20', 'Reject the manifest fetch if we don't return an actual manifest' */
    );
}
function isLoadComponentDependenciesKillSwitchActivated() {
    return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPKillSwitch"].isActivated('51f950cd-c0bf-4927-a126-bb8283026ea9'
    /* '12/18/20', 'Add logging to determine which dependency failed to load for a dependent component' */
    );
}
function isLogSuccessOfTryGetManifestsKillSwitchActivated() {
    return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPKillSwitch"].isActivated('87c8b069-0111-40b1-9700-b9905283d324'
    /* '12/21/20', 'Add logging to so we get request id's on succcess for try get manifests' */
    );
}


/***/ })

/******/ })});;
//# sourceMappingURL=sp-loader_[locale].js.map