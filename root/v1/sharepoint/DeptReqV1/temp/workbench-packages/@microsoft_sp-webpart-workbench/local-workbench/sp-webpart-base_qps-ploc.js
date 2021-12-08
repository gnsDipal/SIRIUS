define("974a7777-0990-4136-8fa6-95d80114c2e0_1.12.1", ["tslib","@ms/sp-telemetry","@microsoft/sp-component-base","@microsoft/sp-loader","@microsoft/sp-lodash-subset","@microsoft/sp-core-library","@microsoft/sp-page-context","@microsoft/load-themed-styles","@microsoft/sp-diagnostics","@microsoft/sp-http"], function(__WEBPACK_EXTERNAL_MODULE__17wl__, __WEBPACK_EXTERNAL_MODULE__2q6Q__, __WEBPACK_EXTERNAL_MODULE__7Awa__, __WEBPACK_EXTERNAL_MODULE_I6O9__, __WEBPACK_EXTERNAL_MODULE_Pk8u__, __WEBPACK_EXTERNAL_MODULE_UWqr__, __WEBPACK_EXTERNAL_MODULE_X_PM__, __WEBPACK_EXTERNAL_MODULE_jOlS__, __WEBPACK_EXTERNAL_MODULE_ut3N__, __WEBPACK_EXTERNAL_MODULE_vlQI__) { return /******/ (function(modules) { // webpackBootstrap
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
/******/ 		"sp-webpart-base": 0
/******/ 	};
/******/
/******/
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "chunk." + ({"sp-webpart-base-iframedwebpartcontroller":"sp-webpart-base-iframedwebpartcontroller","vendors~spfx-core-teamsenv-teamsJs":"vendors~spfx-core-teamsenv-teamsJs"}[chunkId]||chunkId) + "_" + "none" + ".js"
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
/******/ 	var jsonpArray = window["webpackJsonp_974a7777_0990_4136_8fa6_95d80114c2e0_1_12_1"] = window["webpackJsonp_974a7777_0990_4136_8fa6_95d80114c2e0_1_12_1"] || [];
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
/******/ 	  var regex = (typeof spScriptNamePattern !== 'undefined') ? spScriptNamePattern : /sp-webpart-base_qps-ploc\.js/i;
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

/***/ "+MWs":
/*!************************************!*\
  !*** ./lib/core/SpinnerFactory.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_spinner_module_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/spinner.module.scss */ "VjpS");

/**
 * @internal
 */
var SpinnerFactory = /** @class */ (function () {
    function SpinnerFactory() {
    }
    SpinnerFactory.createSpinner = function (loadingMessage) {
        var spinnerContainerDiv = document.createElement('div');
        spinnerContainerDiv.className = _styles_spinner_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].spinnerContainer;
        var spinnerDiv = document.createElement('div');
        spinnerDiv.className = _styles_spinner_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].spinner;
        spinnerDiv.innerHTML = "<svg class=" + _styles_spinner_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].spinnerSlice + " xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 21 21\">\n      <defs>\n        <style>\n          .slice {\n            fill: none;\n            stroke: currentColor;\n            stroke-miterlimit:10;\n            stroke-width:2px;\n          }\n        </style>\n      </defs>\n      <path class=\"slice\" d=\"M17.5,6.5a10,10,0,0,1,10,10\" transform=\"translate(-7 -6)\"/>\n    </svg>\n    <svg class=" + _styles_spinner_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].spinnerRing + " xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 21 21\">\n      <defs>\n        <style>\n          .ring {\n            fill: none;\n            stroke: currentColor;\n            stroke-miterlimit:10;\n            stroke-width:2px;\n          }\n        </style>\n      </defs>\n      <path class=\"ring\" d=\"M10,0A10,10,0,1,1,0,10,10,10,0,0,1,10,0Z\" transform=\"translate(0.5 0.5)\"/>\n  </svg>";
        spinnerContainerDiv.appendChild(spinnerDiv);
        var spinnerLoadingMessageDiv = document.createElement('div');
        spinnerLoadingMessageDiv.className = _styles_spinner_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].spinnerLoadingMessage;
        spinnerLoadingMessageDiv.innerText = loadingMessage;
        spinnerContainerDiv.appendChild(spinnerLoadingMessageDiv);
        var spinnerAccessibilityContainerDiv = document.createElement('div');
        spinnerAccessibilityContainerDiv.setAttribute('role', 'status');
        spinnerAccessibilityContainerDiv.setAttribute('aria-live', 'polite');
        var spinnerAccessibilityMessageDiv = document.createElement('div');
        spinnerAccessibilityMessageDiv.className = _styles_spinner_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].spinnerAccessibilityMessage;
        spinnerAccessibilityMessageDiv.innerText = loadingMessage;
        spinnerAccessibilityContainerDiv.appendChild(spinnerAccessibilityMessageDiv);
        spinnerContainerDiv.appendChild(spinnerAccessibilityContainerDiv);
        return spinnerContainerDiv;
    };
    return SpinnerFactory;
}());
/* harmony default export */ __webpack_exports__["default"] = (SpinnerFactory);


/***/ }),

/***/ "+ORw":
/*!************************************!*\
  !*** ./lib/common/KillSwitches.js ***!
  \************************************/
/*! exports provided: default, isMoveAsyncTimerKSActivated, isIsolatedWebPartParentHostLifeCycleKsActivated, isClearIntervalTasksKsActivated, isAllowProactiveRenderFailureKsActivated */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isMoveAsyncTimerKSActivated", function() { return isMoveAsyncTimerKSActivated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isIsolatedWebPartParentHostLifeCycleKsActivated", function() { return isIsolatedWebPartParentHostLifeCycleKsActivated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isClearIntervalTasksKsActivated", function() { return isClearIntervalTasksKsActivated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isAllowProactiveRenderFailureKsActivated", function() { return isAllowProactiveRenderFailureKsActivated; });
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__);

var resolveRenderTimeGuid = _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Guid"].parse('d2b2d5e6-4bd3-40f7-b49f-782f95ae1ae1');
var KillSwitches = /** @class */ (function () {
    function KillSwitches() {
    }
    KillSwitches.isResolveRenderTimeActivated = function () {
        return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPKillSwitch"].isActivated(resolveRenderTimeGuid, '2020/04/15', 'Render complete time logged synchronously');
    };
    KillSwitches.isAddSyncRenderTimeKSActivated = function () {
        return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPKillSwitch"].isActivated(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Guid"].parse('57437895-9f0b-42f0-9c9e-aa5cea5286dc'), '05/09/2020', 'Add async Render Time');
    };
    KillSwitches.isExclusiveRenderTimeForBaseCollectionWebPartKSActivated = function () {
        return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPKillSwitch"].isActivated(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Guid"].parse('d84e2f1c-760e-4fb3-9589-95de35f2ddc1'), '06/09/2020', 'Add exclusive render time for base collection web part');
    };
    KillSwitches.isRejectLegacyFabricErrorKSActivated = function () {
        return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPKillSwitch"].isActivated(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Guid"].parse('10f94589-c5da-4d9c-8b4e-040a54822b18'), '06/05/2020', 'Reject load legacy fabric css promise if loading legacy css fails');
    };
    KillSwitches._isWebpartExperimentKSActivated = function () {
        return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPKillSwitch"].isActivated(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Guid"].parse('4cfbf54a-8bda-43ee-8599-e62f0d1ae9ee'), '2020/06/11', 'Log web part perf experiments and flights');
    };
    KillSwitches.isTeamsContextKSActivated = function () {
        return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPKillSwitch"].isActivated(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Guid"].parse('a5daffb0-652e-4ee1-a638-e290089e1de7'), '09/11/2020', 'Refactor a method of IWebPartHost as async, as part of PR to enable teams context.');
    };
    return KillSwitches;
}());
/* harmony default export */ __webpack_exports__["default"] = (KillSwitches);
function isMoveAsyncTimerKSActivated() {
    return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPKillSwitch"].isActivated('28054d9c-1d49-4ff2-a20d-9c8734a53ca4' /* '08/03/2020', 'Starting async timer before render' */);
}
function isIsolatedWebPartParentHostLifeCycleKsActivated() {
    return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPKillSwitch"].isActivated('ad020f8e-7591-407a-b812-2f8f111b9014'
    /** 08/19/2020, 'updates parent host life cycle when isolated web part life cycle updates */
    );
}
function isClearIntervalTasksKsActivated() {
    return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPKillSwitch"].isActivated('1c24a303-960c-46ad-8602-385365076bf4'
    /** 11/16/2020, 'Clear interval task when disposed' */
    );
}
function isAllowProactiveRenderFailureKsActivated() {
    return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPKillSwitch"].isActivated('e50c4ad7-27e6-4665-abde-f8687023ce6b'
    /* '1/11/2021', 'Allow proactive render failure for async render web part.' */
    );
}


/***/ }),

/***/ "+wJ3":
/*!****************************************!*\
  !*** ./lib/core/BaseWebPartContext.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _microsoft_sp_component_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/sp-component-base */ "7Awa");
/* harmony import */ var _microsoft_sp_component_base__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_component_base__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _context_PropertyPaneAccessor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./context/PropertyPaneAccessor */ "/csO");
/**
* @Copyright (c) Microsoft Corporation.  All rights reserved.
*/




/**
 * Web part context object. This object contains the contextual services available to a web part. e.g.
 * a contextual instance to the http client.
 *
 * This base is to be extended by UI-specific WebPart's base.
 *
 * @public
 */
var BaseWebPartContext = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(BaseWebPartContext, _super);
    /** @internal */
    function BaseWebPartContext(parameters) {
        var _this = _super.call(this, parameters) || this;
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__["Validate"].isNotNullOrUndefined(parameters, 'webpart context');
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__["Validate"].isNotNullOrUndefined(parameters.instanceId, 'webpart context instanceId');
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__["Validate"].isNotNullOrUndefined(parameters.webPartTag, 'webpart context webPartTag');
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__["Validate"].isNotNullOrUndefined(parameters.host, 'webpart context host');
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__["Validate"].isNotNullOrUndefined(parameters.isPropertyPaneRenderedByWebPart, 'webpart context isPropertyPaneRenderedByWebPart');
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__["Validate"].isNotNullOrUndefined(parameters.isPropertyPaneOpen, 'webpart context isPropertyPaneOpen');
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__["Validate"].isNotNullOrUndefined(parameters.requestPropertyPaneAction, 'webpart context requestPropertyPaneAction');
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__["Validate"].isNotNullOrUndefined(parameters.formFactor, 'webpart context form factor');
        _this._webPartTag = parameters.webPartTag;
        _this._host = parameters.host;
        _this._requestPropertyPaneAction = parameters.requestPropertyPaneAction;
        _this._isPropertyPaneRenderedByWebPart = parameters.isPropertyPaneRenderedByWebPart;
        _this._isPropertyPaneOpen = parameters.isPropertyPaneOpen;
        _this._privateDataUpdatedEvent = parameters._dataUpdatedEvent;
        _this._formFactor = parameters.formFactor;
        _this._propertyPaneAccessor = new _context_PropertyPaneAccessor__WEBPACK_IMPORTED_MODULE_3__["default"](function () {
            _this._requestPropertyPaneAction(_this.instanceId, 'Open', true);
        }, function () {
            _this._requestPropertyPaneAction(_this.instanceId, 'Close', true);
        }, function () {
            _this._requestPropertyPaneAction(_this.instanceId, 'Refresh', true);
        }, 
        // tslint:disable-next-line:no-any
        function (context) {
            _this._requestPropertyPaneAction(_this.instanceId, 'OpenDetails', true, context);
        }, function () {
            return _this._isPropertyPaneRenderedByWebPart();
        }, function () {
            return _this._isPropertyPaneOpen();
        });
        return _this;
    }
    Object.defineProperty(BaseWebPartContext.prototype, "webPartTag", {
        /**
         * Web part tag to be used for logging and telemetry.
         */
        get: function () {
            return this._webPartTag;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BaseWebPartContext.prototype, "propertyPane", {
        /**
         * Accessor for common web part property pane operations.
         */
        get: function () {
            return this._propertyPaneAccessor;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BaseWebPartContext.prototype, "formFactor", {
        /**
         * Form factor of the web part.
         *
         * @remarks
         * Web parts may behave differently based on its form factor.
         * E.g. a web part rendering as full size may want to set up different margins that when rendering in a canvas.
         *
         * @beta
         */
        get: function () {
            return this._formFactor;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BaseWebPartContext.prototype, "host", {
        /**
         * Web part host.
         *
         * @alpha
         */
        get: function () {
            return this._host;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BaseWebPartContext.prototype, "_dataUpdatedEvent", {
        /**
         * Web part properties updated event.
         *
         * @eventproperty
         * @internal
         */
        get: function () {
            return this._privateDataUpdatedEvent;
        },
        enumerable: false,
        configurable: true
    });
    return BaseWebPartContext;
}(_microsoft_sp_component_base__WEBPACK_IMPORTED_MODULE_1__["BaseComponentContext"]));
/* harmony default export */ __webpack_exports__["default"] = (BaseWebPartContext);


/***/ }),

/***/ "/csO":
/*!**************************************************!*\
  !*** ./lib/core/context/PropertyPaneAccessor.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * @Copyright (c) Microsoft Corporation.  All rights reserved.
 *
 * @file class to help access web part property pane APIs.
 */
/**
 * Web part context property pane accessor. Provides some most commonly used utilities
 * to access the property pane.
 *
 * @public
 */
var PropertyPaneAccessor = /** @class */ (function () {
    function PropertyPaneAccessor(openProperytPane, closePropertyPane, refresh, openDetails, // tslint:disable-line:no-any
    isRenderedByWebPart, isPropertyPaneOpen) {
        this._open = openProperytPane;
        this._close = closePropertyPane;
        this._refresh = refresh;
        this._openDetails = openDetails;
        this._isRenderedByWebPart = isRenderedByWebPart;
        this._isPropertyPaneOpen = isPropertyPaneOpen;
        this.open = this.open.bind(this);
        this.close = this.close.bind(this);
        this.refresh = this.refresh.bind(this);
        this.openDetails = this.openDetails.bind(this);
        this.isRenderedByWebPart = this.isRenderedByWebPart.bind(this);
    }
    /**
     * Api to open the PropertyPane.
     */
    PropertyPaneAccessor.prototype.open = function () {
        this._open();
    };
    /**
     * Api to close the PropertyPane.
     */
    PropertyPaneAccessor.prototype.close = function () {
        this._close();
    };
    /**
     * Api to refresh the contents of the PropertyPane.
     * It's a no operation scenario if a web part is asking to refresh the property pane
     * while some other web part is being configured.
     */
    PropertyPaneAccessor.prototype.refresh = function () {
        this._refresh();
    };
    /**
     * Api to open the Details PropertyPane
     *
     * @param context - pass additional details as context to send back to the caller
     */
    // tslint:disable-next-line:no-any
    PropertyPaneAccessor.prototype.openDetails = function (context) {
        this._openDetails(context);
    };
    /**
     * Returns true if the current property pane source is a web part and not the Canvas or any other source.
     */
    PropertyPaneAccessor.prototype.isRenderedByWebPart = function () {
        return this._isRenderedByWebPart();
    };
    /**
     * Returns true if the PropertyPane is open.
     */
    PropertyPaneAccessor.prototype.isPropertyPaneOpen = function () {
        return this._isPropertyPaneOpen();
    };
    return PropertyPaneAccessor;
}());
/* harmony default export */ __webpack_exports__["default"] = (PropertyPaneAccessor);


/***/ }),

/***/ "/oQI":
/*!*******************************************************************************************!*\
  !*** ../sp-property-pane/lib/propertyPaneFields/propertyPaneToggle/PropertyPaneToggle.js ***!
  \*******************************************************************************************/
/*! exports provided: PropertyPaneToggle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertyPaneToggle", function() { return PropertyPaneToggle; });
/* harmony import */ var _propertyPaneField_IPropertyPaneField__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../propertyPaneField/IPropertyPaneField */ "3ZYD");
// Copyright (c) Microsoft. All rights reserved.

/**
 * Helper method to create a Toggle on the PropertyPane.
 * @param targetProperty - Target property the toggle is associated to.
 * @param properties - Strongly typed Toggle properties.
 *
 * @public
 */
function PropertyPaneToggle(targetProperty, properties) {
    return {
        type: _propertyPaneField_IPropertyPaneField__WEBPACK_IMPORTED_MODULE_0__["PropertyPaneFieldType"].Toggle,
        targetProperty: targetProperty,
        properties: properties
    };
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

/***/ "1a3C":
/*!*************************************************************************************************************!*\
  !*** ../sp-property-pane/lib/propertyPaneFields/propertyPaneDynamicFieldSet/PropertyPaneDynamicFieldSet.js ***!
  \*************************************************************************************************************/
/*! exports provided: PropertyPaneDynamicFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertyPaneDynamicFieldSet", function() { return PropertyPaneDynamicFieldSet; });
/* harmony import */ var _propertyPaneField_IPropertyPaneField__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../propertyPaneField/IPropertyPaneField */ "3ZYD");
// Copyright (c) Microsoft. All rights reserved.

/**
 * Helper method to create a Dynamic Data widget on the Property Pane for a set
 * of dynamic fields with a common data source.
 *
 * These fields can possibly share the same property based on the associated filters.
 * @param properties - Contains entries and options, described as below:
 *  entries - A set of entries to be configured by the widget. Each entry includes the target
 *           property and, optionally, the label to show.
 *  options - Options enabling customized values for callback, filters etc.,
 *           for the given set of dynamic fields.
 * @public
 */
function PropertyPaneDynamicFieldSet(properties) {
    return {
        type: _propertyPaneField_IPropertyPaneField__WEBPACK_IMPORTED_MODULE_0__["PropertyPaneFieldType"].DynamicFieldSet,
        // Multiple entries have mutiple target properties hence not setting a target property here.
        targetProperty: '',
        properties: properties
    };
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

/***/ "3+DO":
/*!********************************************!*\
  !*** ./lib/utils/ExecuteWithoutFailing.js ***!
  \********************************************/
/*! exports provided: executeWithoutFailing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "executeWithoutFailing", function() { return executeWithoutFailing; });
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/sp-diagnostics */ "ut3N");
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__);
/**
 * @Copyright (c) Microsoft Corporation.  All rights reserved.
 *
 * Execute the passed delegate and eat up the exception stack.
 */


/**
 * Execute the passed in delegate with a guarantee that no exception will leak out.
 * Do not use this normally. Only in error handling scenarios where you would like
 * to be defesive.
 * @param method - method to execute.
 * @param logSource - log source.
 */
/* tslint:disable:export-name */
function executeWithoutFailing(method, logSource) {
    /* tslint:enable:export-name */
    _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["Validate"].isNotNullOrUndefined(method, 'method');
    try {
        method();
    }
    catch (e) {
        // Defensive code as this method should never ever throw
        if (logSource) {
            _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_0__["_TraceLogger"].logError(logSource, new Error('Error: ' + e));
        }
    }
}


/***/ }),

/***/ "3ZYD":
/*!******************************************************************************************!*\
  !*** ../sp-property-pane/lib/propertyPaneFields/propertyPaneField/IPropertyPaneField.js ***!
  \******************************************************************************************/
/*! exports provided: PropertyPaneFieldType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertyPaneFieldType", function() { return PropertyPaneFieldType; });
// Copyright (c) Microsoft. All rights reserved.
/**
 * Enum for all the supported PropertyPane field types.
 *
 * Names should be consistent with those in office-ui-fabric-react, be careful to get letter casing correct.
 *
 * @public
 */
var PropertyPaneFieldType;
(function (PropertyPaneFieldType) {
    /**
     * Custom field.
     */
    PropertyPaneFieldType[PropertyPaneFieldType["Custom"] = 1] = "Custom";
    /**
     * Checkbox field.
     */
    PropertyPaneFieldType[PropertyPaneFieldType["CheckBox"] = 2] = "CheckBox";
    /**
     * TextField field.
     */
    PropertyPaneFieldType[PropertyPaneFieldType["TextField"] = 3] = "TextField";
    /**
     * Toggle field.
     */
    PropertyPaneFieldType[PropertyPaneFieldType["Toggle"] = 5] = "Toggle";
    /**
     * Dropdown field.
     */
    PropertyPaneFieldType[PropertyPaneFieldType["Dropdown"] = 6] = "Dropdown";
    /**
     * Label field.
     */
    PropertyPaneFieldType[PropertyPaneFieldType["Label"] = 7] = "Label";
    /**
     * Slider field.
     */
    PropertyPaneFieldType[PropertyPaneFieldType["Slider"] = 8] = "Slider";
    /**
     * Heading field.
     */
    PropertyPaneFieldType[PropertyPaneFieldType["Heading"] = 9] = "Heading";
    /**
     * Choice Group field.
     */
    PropertyPaneFieldType[PropertyPaneFieldType["ChoiceGroup"] = 10] = "ChoiceGroup";
    /**
     * Button field.
     */
    PropertyPaneFieldType[PropertyPaneFieldType["Button"] = 11] = "Button";
    /**
     * Horizontal Rule field.
     */
    PropertyPaneFieldType[PropertyPaneFieldType["HorizontalRule"] = 12] = "HorizontalRule";
    /**
     * Link field.
     */
    PropertyPaneFieldType[PropertyPaneFieldType["Link"] = 13] = "Link";
    /**
     * Dynamic data field.
     * @public
     */
    PropertyPaneFieldType[PropertyPaneFieldType["DynamicField"] = 14] = "DynamicField";
    /**
     * Dynamic Text Field
     *
     * @beta
     * @deprecated - Please use DynamicField
     */
    PropertyPaneFieldType[PropertyPaneFieldType["DynamicTextField"] = 15] = "DynamicTextField";
    /**
     * A set of dynamic fields.
     * @public
     */
    PropertyPaneFieldType[PropertyPaneFieldType["DynamicFieldSet"] = 16] = "DynamicFieldSet";
    /**
     * Spin button
     *
     * @alpha
     */
    PropertyPaneFieldType[PropertyPaneFieldType["SpinButton"] = 17] = "SpinButton";
})(PropertyPaneFieldType || (PropertyPaneFieldType = {}));


/***/ }),

/***/ "7Awa":
/*!***********************************************!*\
  !*** external "@microsoft/sp-component-base" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__7Awa__;

/***/ }),

/***/ "7pKC":
/*!***********************************!*\
  !*** ./lib/PropertyPaneLoader.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/sp-diagnostics */ "ut3N");
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _microsoft_sp_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @microsoft/sp-loader */ "I6O9");
/* harmony import */ var _microsoft_sp_loader__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_loader__WEBPACK_IMPORTED_MODULE_2__);



/**
 * Loads the property pane module, asynchronously.
 * @internal
 */
var PropertyPaneLoader = /** @class */ (function () {
    function PropertyPaneLoader() {
        this._logSource = _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__["_LogSource"].create('PropertyPaneLoader');
    }
    Object.defineProperty(PropertyPaneLoader.prototype, "propertyPane", {
        /**
         * Async property pane getter.
         */
        get: function () {
            var _this = this;
            if (!this._propertyPaneController) {
                var propertyPaneQosMonitor_1 = new _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__["_QosMonitor"]('PropertyPaneLoader.loadPropertyPaneModule');
                if (false) { var propertyPaneController; }
                else {
                    return _microsoft_sp_loader__WEBPACK_IMPORTED_MODULE_2__["SPComponentLoader"].loadComponentById(PropertyPaneLoader._propertyPaneModuleId)
                        .then(function (propertyPane) {
                        if (!_this._propertyPaneController) {
                            _this._propertyPaneController = new propertyPane._PropertyPaneController();
                        }
                        return Promise.resolve(_this._propertyPaneController);
                    })
                        .catch(function (error) {
                        _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__["_TraceLogger"].logErrorData({
                            source: _this._logSource,
                            error: error
                        });
                        propertyPaneQosMonitor_1.writeUnexpectedFailure('UnhandledError', error);
                        return Promise.reject(error);
                    });
                }
            }
            else {
                return Promise.resolve(this._propertyPaneController);
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PropertyPaneLoader.prototype, "isLoaded", {
        /**
         * Whether the property pane controller is loaded.
         * For scenarios that want to do something ONLY when property pane has been loaded (e.g. Close the property pane
         *  if the property pane is loaded and open. But do nothing if property pane has not even been loaded)
         */
        get: function () {
            return !!this._propertyPaneController;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Service key to uniquely identify PropertyPaneLoader in the service scope.
     */
    PropertyPaneLoader.serviceKey = _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["ServiceKey"].create('sp-webpart-base:PropertyPaneLoader', PropertyPaneLoader);
    PropertyPaneLoader._propertyPaneModuleId = 'f9e737b7-f0df-4597-ba8c-3060f82380db';
    return PropertyPaneLoader;
}());
/* harmony default export */ __webpack_exports__["default"] = (PropertyPaneLoader);


/***/ }),

/***/ "7vVn":
/*!********************************************!*\
  !*** ./lib/core/IIframedWebPartMessage.js ***!
  \********************************************/
/*! exports provided: IframedWebPartAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IframedWebPartAction", function() { return IframedWebPartAction; });
/**
 * Strings for the 'action' property on IIframedWebPartMessage.
 * @internal
 */
// tslint:disable-next-line:typedef variable-name
var IframedWebPartAction = {
    /**
     * An action to delete the web part.
     */
    DeleteWebPart: 'iframeDeleteWebPart',
    /**
     * An action to request the current DisplayMode of a WebPart.
     */
    RequestDisplayMode: 'iframeRequestDisplayMode',
    /**
     * An action requested on the PropertyPane.
     */
    RequestPropertyPaneAction: 'iframeRequestPropertyPaneAction',
    /**
     * An action to set the DisplayMode of an iframed WebPart.
     */
    SetDisplayMode: 'iframeSetDisplayMode',
    /**
     * An action to set the dimensions of the iframe to match it's embed contents.
     * Example dimensions: height and/or width.
     */
    SetDimensions: 'iframeSetDimensions',
    /**
     * An action from the IframedWebPartController to the window that
     * is showing the WebPart or PropertyPane.
     */
    SetWebPartData: 'iframeSetWebPartData',
    /**
     * An action to update the WebPart with the data changed by the PropertyPane.
     */
    UpdateWebPartData: 'iframeUpdateWebPartData',
    /**
     * An action to update the PropertyPane with the data changed by the rendered WebPart.
     */
    UpdatePropertyPaneData: 'iframeUpdatePropertyPaneData',
    /**
     * The action corresponds to a PropertyPane lifecycle event.
     */
    UpdatePropertyPaneLifeCycle: 'iframePropertyPaneLifeCycle',
    /**
     * Action to indicate that the web part is rendered in the iframe application
     * where the property pane is to be rendered.
     */
    WebPartRenderedInPropertyPaneIframe: 'webPartRenderedInPropertyPaneIframe',
    /**
     * Action to communicate a message to the main page from the dynamic data scenarios.
     */
    DynamicDataMessage: 'isolatedDynamicDataMessage',
    /**
     * Action corresponds to update life cycle method in page host
     */
    UpdateWebpartLifeCycle: 'iframeUpdateWebpartLifeCycle'
};


/***/ }),

/***/ "BDc9":
/*!**********************************************!*\
  !*** ./lib/core/WebPartWidthCacheManager.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__);

/**
 * Web part cache manager. Key is `layout index - section factor` which maps to a width in px
 * This is primarily used to reduce browser reflow caused by dom dimension calculations.
 *
 * @internal
 */
var WebPartWidthCacheManager = /** @class */ (function () {
    function WebPartWidthCacheManager() {
    }
    /**
     * Returns cached width
     * @param key - string in format '<layoutIndex>-<sectionFactor>'
     * @returns width of given sectionFactor or undefined if it does not exist.
     */
    WebPartWidthCacheManager.get = function (key) {
        return WebPartWidthCacheManager._sectionWidthCache.get(key);
    };
    /**
     * If key exist in cache it returns the value stored.
     * Otherwise, it will calculate the width of dom element and store it in the cache.
     * Calculating the width will cause a reflow.
     *
     * @param domElement - dom element width we want to calculate
     * @param key - cache's key
     *
     * @returns width of domElement
     */
    WebPartWidthCacheManager.getOrCalculateWidth = function (domElement, key) {
        if (key === undefined) {
            return WebPartWidthCacheManager.calculateWebPartWidth(domElement);
        }
        var width = WebPartWidthCacheManager.get(key);
        if (width === undefined) {
            width = WebPartWidthCacheManager.calculateWebPartWidth(domElement);
            WebPartWidthCacheManager._put(key, width);
        }
        return width;
    };
    /**
     * Removes all key-value pairs from the cache
     * It is used when window resizes as all section factor widths needs to be cached again.
     */
    WebPartWidthCacheManager.clear = function () {
        WebPartWidthCacheManager._sectionWidthCache.clear();
    };
    /**
     *
     * This value is the available width of the area in which the web part can render itself.
     * Instead of "Element.clientWidth" which returns an integer, "getComputedStyle" returns
     * a number which is more accurate in sub-pixel.
     * This function uses getBoundingClientRect or getComputedStyle which causes
     * browser reflows. Please use with caution.
     *
     * @remarks
     * {@link https://developer.mozilla.org/en-US/docs/Web/API/Element/clientWidth | clientWidth}
     * {@link https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/parseFloat | parseFloat}
     * {@link https://developer.mozilla.org/en/docs/Web/API/Window/getComputedStyle | getComputedStyle}
     *
     */
    WebPartWidthCacheManager.calculateWebPartWidth = function (domElement) {
        var browser = _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_BrowserDetection"].getBrowserInformation().browser;
        if (browser === _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_Browser"].Edge || browser === _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_Browser"].IE) {
            return domElement.getBoundingClientRect().width;
        }
        else {
            return parseFloat(window.getComputedStyle(domElement).width) || 0;
        }
    };
    /**
     * Caches width sectionFactor.
     * @param key - string in format '<layoutIndex>-<sectionFactor>'
     * @param width - width of canvas section factor in px
     */
    WebPartWidthCacheManager._put = function (key, width) {
        WebPartWidthCacheManager._sectionWidthCache.set(key, width);
    };
    WebPartWidthCacheManager._sectionWidthCache = new Map();
    return WebPartWidthCacheManager;
}());
/* harmony default export */ __webpack_exports__["default"] = (WebPartWidthCacheManager);


/***/ }),

/***/ "Cfps":
/*!*******************************************************************************************!*\
  !*** ../sp-property-pane/lib/propertyPaneFields/propertyPaneSlider/PropertyPaneSlider.js ***!
  \*******************************************************************************************/
/*! exports provided: PropertyPaneSlider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertyPaneSlider", function() { return PropertyPaneSlider; });
/* harmony import */ var _propertyPaneField_IPropertyPaneField__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../propertyPaneField/IPropertyPaneField */ "3ZYD");
// Copyright (c) Microsoft. All rights reserved.

/**
 * Helper method to create a Slider on the PropertyPane.
 * @param targetProperty - Target property the slider is associated to.
 * @param properties - Strongly typed Slider properties.
 *
 * @public
 */
function PropertyPaneSlider(targetProperty, properties) {
    return {
        type: _propertyPaneField_IPropertyPaneField__WEBPACK_IMPORTED_MODULE_0__["PropertyPaneFieldType"].Slider,
        targetProperty: targetProperty,
        properties: properties
    };
}


/***/ }),

/***/ "E2Ji":
/*!*************************************************************************************************!*\
  !*** ../sp-property-pane/lib/propertyPaneFields/propertyPaneTextField/PropertyPaneTextField.js ***!
  \*************************************************************************************************/
/*! exports provided: PropertyPaneTextField */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertyPaneTextField", function() { return PropertyPaneTextField; });
/* harmony import */ var _propertyPaneField_IPropertyPaneField__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../propertyPaneField/IPropertyPaneField */ "3ZYD");
// Copyright (c) Microsoft. All rights reserved.

/**
 * Helper method to create a TextField on the PropertyPane.
 * @param targetProperty - Target property the textfield is associated to.
 * @param properties - Strongly typed TextField properties.
 *
 * @public
 */
function PropertyPaneTextField(targetProperty, properties) {
    return {
        type: _propertyPaneField_IPropertyPaneField__WEBPACK_IMPORTED_MODULE_0__["PropertyPaneFieldType"].TextField,
        targetProperty: targetProperty,
        properties: properties
    };
}


/***/ }),

/***/ "F78M":
/*!*******************************************************************************************!*\
  !*** ../sp-property-pane/lib/propertyPaneFields/propertyPaneButton/PropertyPaneButton.js ***!
  \*******************************************************************************************/
/*! exports provided: PropertyPaneButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertyPaneButton", function() { return PropertyPaneButton; });
/* harmony import */ var _propertyPaneField_IPropertyPaneField__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../propertyPaneField/IPropertyPaneField */ "3ZYD");
/**
 * @Copyright (c) Microsoft Corporation.  All rights reserved.
 *
 * @file PropertyPaneButton.
 */

/**
 * Helper method to create a Button on the PropertyPane.
 * @param targetProperty - Target property the Button is associated to.
 * @param properties - Strongly typed Button properties.
 *
 * @public
 */
function PropertyPaneButton(targetProperty, properties) {
    return {
        type: _propertyPaneField_IPropertyPaneField__WEBPACK_IMPORTED_MODULE_0__["PropertyPaneFieldType"].Button,
        targetProperty: targetProperty,
        properties: properties
    };
}


/***/ }),

/***/ "FbpR":
/*!***************************************************!*\
  !*** ./lib/core/classicPages/ClassicPageUtils.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__);
/**
 * @Copyright (c) Microsoft Corporation.  All rights reserved.
 *
 * This file contains code for the ClientSideWebPartManager. The webart host is expected to
 * load and manage webparts through the webpart manager APIs.
 */

/**
 * Utility class to help fixup web part DOM in classic pages to make the behaviour consistent.
 *
 * @internal
 */
var ClassicPageUtils = /** @class */ (function () {
    function ClassicPageUtils() {
    }
    /**
     * Disable all automatic postbacks by button clicks or enter in an input tag.
     */
    ClassicPageUtils.disableAutomaticPostbacks = function (domElement, env) {
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Validate"].isNotNullOrUndefined(domElement, 'domElement');
        if (env === _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["EnvironmentType"].ClassicSharePoint) {
            /**
             * These are temporary fixes to disable the postbacks in classic pages. This works well with React
             * based web parts because the eventing happens through the React synthetic events and not the
             * browser native events. This may cause problems with non-React based web parts. We may need to
             * revisit this fix and come up with a better fix. . (SPPPLAT VSO#243894) tracks creating a better fix.
             */
            domElement.addEventListener('click', function (event) {
                event.preventDefault ? event.preventDefault() : (event.returnValue = false);
            }, true /* useCapture */);
            domElement.addEventListener('keydown', function (event) {
                if (event.keyCode === 13) {
                    event.preventDefault ? event.preventDefault() : (event.returnValue = false);
                }
            }, true /* useCapture */);
        }
    };
    /**
     * Method to remove the unwanted old fabric styles from the page, which are being injected from the
     * server side. Permanent fix would be remove the server side injection.
     *
     * @todo (VSO SPPPLAT#258820) Remove fabric.min.css and related injections from the server side on the classic page.
     */
    ClassicPageUtils.removeFabricLinks = function () {
        var links = document.getElementsByTagName('link');
        if (links && links.length) {
            for (var i = 0; i < links.length; i++) {
                if (links[i] && links[i].href.indexOf('fabric.min.css') !== -1) {
                    var parentNode = links[i].parentNode;
                    if (parentNode) {
                        parentNode.removeChild(links[i]);
                    }
                }
            }
        }
    };
    return ClassicPageUtils;
}());
/* harmony default export */ __webpack_exports__["default"] = (ClassicPageUtils);


/***/ }),

/***/ "FxQH":
/*!*************************************************************!*\
  !*** ./lib/components/container/MinimalWebPartContainer.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_ClientSideWebPartManagerFactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/ClientSideWebPartManagerFactory */ "wdlX");
/* harmony import */ var _common_KillSwitches__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/KillSwitches */ "+ORw");
/**
 * @Copyright (c) Microsoft Corporation.  All rights reserved.
 */



/**
 * A basic container component to host a web part. This is the simplest component that can
 * host a web part. This should be used in scenarios where performance is key. Edit mode
 * is currently not supported in this container. And this container does not need ReactJS.
 *
 * @internal
 */
var MinimalWebPartContainer = /** @class */ (function () {
    function MinimalWebPartContainer(props) {
        this._validateProps(props);
        this._props = props;
        this._webPartManager = _core_ClientSideWebPartManagerFactory__WEBPACK_IMPORTED_MODULE_1__["default"].create(this._props.host);
    }
    Object.defineProperty(MinimalWebPartContainer.prototype, "webPartManager", {
        /**
         * Get the web part manager for this container.
         */
        get: function () {
            return this._webPartManager;
        },
        enumerable: false,
        configurable: true
    });
    MinimalWebPartContainer.prototype.render = function (domElement) {
        var _this = this;
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Validate"].isNotNullOrUndefined(domElement, 'domElement');
        this._domElement = domElement;
        // We create and append the web part container element to the document
        // so the initialization of the web part can execute as expected.
        // The reason we need the domElement appended to the document is because
        // we have not yet seperated the initlization of the web part from
        // the rendering, when this is no longer the case we may
        // remove this display change. @todo (SPPPLAT VSO#598054)
        //
        // Additionally, if we have the scenario where we want to render
        // the property pane instead of the web part, we need to change the
        // display to 'none' so that only the property pane content appears
        // in the document object and not the web part.
        if (this._props.openPropertyPane) {
            this._domElement.style.display = 'none';
        }
        else {
            this._domElement.style.display = 'block';
        }
        return this._renderWebPart(this._domElement)
            .then(function () {
            if (_this._props.openPropertyPane) {
                _this._webPartManager.requestPropertyPaneAction(_this._props.webPartInstanceId, 'Open');
            }
            else {
                // Scenario: rendering the web part
                if (_this._props.requestDisplayModeStatus) {
                    _this._props.requestDisplayModeStatus();
                }
                if (_this._props.sendDimensionsToParent) {
                    _this._intervalTask = window.setInterval(_this._sendDimensionsCallback.bind(_this), 200);
                }
            }
        })
            .catch(function (error) {
            console.log(error);
        });
    };
    MinimalWebPartContainer.prototype.dispose = function () {
        if (!Object(_common_KillSwitches__WEBPACK_IMPORTED_MODULE_2__["isClearIntervalTasksKsActivated"])() && this._intervalTask) {
            clearTimeout(this._intervalTask);
        }
        this._webPartManager.disposeWebparts(this._props.webPartInstanceId);
        this._webPartManager.dispose();
    };
    MinimalWebPartContainer.prototype.setWebPartData = function (webPartData, instanceId) {
        var webPartManagerContext = this._getWebPartManagerContext(this._domElement, webPartData);
        this._webPartManager
            .setWebPartData(webPartManagerContext, instanceId)
            .catch(function (e) { return console.log(e); });
    };
    /**
     * Invokes the ClientSideWebPartManager.serialize() function and returns the result.
     */
    MinimalWebPartContainer.prototype.serialize = function () {
        var serializedResult = this._webPartManager.serialize(this._props.webPartInstanceId);
        var webPartData = serializedResult.get(this._props.webPartInstanceId);
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Validate"].isNotNullOrUndefined(webPartData, 'webPartData');
        return webPartData;
    };
    /**
     * Sets the display mode of the web part in this instance of the MinimalWebPartContainer via the
     * ClientSideWebPartManager.
     *
     * @returns A promise indicating when the mode switch is complete. There can be a delay if the property
     *   pane chunk needs to be loaded.
     */
    MinimalWebPartContainer.prototype.setDisplayMode = function (displayMode) {
        return this._webPartManager._setDisplayMode(displayMode, this._props.webPartInstanceId);
    };
    /**
     * A call that trickle down to the PropertyPaneController to open/show the
     * property pane context. This is neccessary because the showPropertyPane method
     * in IframedWebPartController will only expose the iframed element but not take
     * care of showing the property pane content.
     */
    MinimalWebPartContainer.prototype.requestPropertyPaneAction = function (instanceId, propertyPaneAction, webPartData) {
        if (webPartData) {
            _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Validate"].isNotNullOrUndefined(this._domElement, 'domElement');
            var webPartManagerContext = this._getWebPartManagerContext(this._domElement, webPartData);
            this._webPartManager
                .setWebPartData(webPartManagerContext, instanceId)
                .catch(function (e) { return console.log(e); });
        }
        this._webPartManager.requestPropertyPaneAction(instanceId, propertyPaneAction);
    };
    /**
     * Returns the height of the element's content including content not visible on the screen due
     * to overflow.
     */
    MinimalWebPartContainer.prototype._getHeight = function () {
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Validate"].isNotNullOrUndefined(this._domElement, 'domElement');
        // The content measured will always be the only child of the 'domElement'.
        // This is because 'this._domElement' is initialized as an empty 'div' element
        // and the ClientSideWebPartManager renders the content into this div.
        var domElementChild = this._domElement.children.item(0);
        // We are using offset height as ooposed to the scroll height because, this way it would respect
        // the vertical scrollbars inside the web part itself, if any.
        return domElementChild.offsetHeight;
    };
    /**
     * Returns the width of the element's content including content not visible on the screen due
     * to overflow.
     */
    MinimalWebPartContainer.prototype._getWidth = function () {
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Validate"].isNotNullOrUndefined(this._domElement, 'domElement');
        // The content measured will always be the only child of the 'domElement'.
        // This is because 'this._domElement' is initialized as an empty 'div' element
        // and the ClientSideWebPartManager renders the content into this div.
        var domElementChild = this._domElement.children.item(0);
        // We are using offset width as opposed to the scroll width because, this way it would respect
        // the horizontal scrollbars inside the web part itself, if any.
        return domElementChild.offsetWidth;
    };
    MinimalWebPartContainer.prototype._sendDimensionsCallback = function () {
        // this callback is only called when 'this._props.sendDimensionsToParent' exists.
        this._props.sendDimensionsToParent(this._getHeight());
    };
    MinimalWebPartContainer.prototype._renderWebPart = function (domElement) {
        var _this = this;
        return this._webPartManager
            .loadWebPart(this._getWebPartManagerContext(domElement, this._props.webPartData))
            .catch(function (error) {
            _this._webPartManager.renderError(domElement, error);
        });
    };
    MinimalWebPartContainer.prototype._getWebPartManagerContext = function (domElement, webPartData) {
        return {
            domElement: domElement,
            instanceId: this._props.webPartInstanceId,
            manifest: this._props.manifest,
            displayMode: this._props.displayMode || (this._props.openPropertyPane ? _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["DisplayMode"].Edit : _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["DisplayMode"].Read),
            webPartData: webPartData,
            addedFromPersistedData: true,
            formFactor: this._props.formFactor,
            pageLayoutType: this._props.pageHostLayoutType
        };
    };
    MinimalWebPartContainer.prototype._validateProps = function (props) {
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Validate"].isNotNullOrUndefined(props, 'props');
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Validate"].isNotNullOrUndefined(props.webPartData, 'props.webPartData');
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Validate"].isNotNullOrUndefined(props.webPartInstanceId, 'props.webPartInstanceId');
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Validate"].isNotNullOrUndefined(props.manifest, 'props.manifest');
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Validate"].isNotNullOrUndefined(props.serviceScope, 'props.applicationContext.serviceScope');
    };
    return MinimalWebPartContainer;
}());
/* harmony default export */ __webpack_exports__["default"] = (MinimalWebPartContainer);


/***/ }),

/***/ "I6O9":
/*!***************************************!*\
  !*** external "@microsoft/sp-loader" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_I6O9__;

/***/ }),

/***/ "Ibtq":
/*!******************************************************!*\
  !*** ./lib/components/host/TeamsAwareWebPartHost.js ***!
  \******************************************************/
/*! exports provided: TeamsAwareWebPartHost */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamsAwareWebPartHost", function() { return TeamsAwareWebPartHost; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _MinimalWebPartHost__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MinimalWebPartHost */ "L5sm");
/* harmony import */ var _core_teams_TeamsEnvironmentManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/teams/TeamsEnvironmentManager */ "UzRH");
/* harmony import */ var _common_KillSwitches__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/KillSwitches */ "+ORw");




/**
 * A webpart host that is Teams Aware.
 * Can be used in cases SP-Page needs to be hosted inside of teams.
 * Webparts in such a page can make use of teams information and be aware that they are hosted inside of teams.
 *
 * @internal
 */
var TeamsAwareWebPartHost = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(TeamsAwareWebPartHost, _super);
    function TeamsAwareWebPartHost() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TeamsAwareWebPartHost.prototype.getAdditionalContextProperties = function () {
        if (_common_KillSwitches__WEBPACK_IMPORTED_MODULE_3__["default"].isTeamsContextKSActivated()) {
            return {};
        }
        var microsoftTeams = _core_teams_TeamsEnvironmentManager__WEBPACK_IMPORTED_MODULE_2__["TeamsEnvironmentManager"].getTeamsJs();
        if (microsoftTeams) {
            return {
                microsoftTeams: {
                    teamsJs: microsoftTeams,
                    context: _core_teams_TeamsEnvironmentManager__WEBPACK_IMPORTED_MODULE_2__["TeamsEnvironmentManager"].getTeamsContext()
                }
            };
        }
        else {
            return {};
        }
    };
    TeamsAwareWebPartHost.prototype.onBeforeWebPartInitialize = function (options) {
        return _super.prototype.onBeforeWebPartInitialize.call(this, options).then(function () {
            return _core_teams_TeamsEnvironmentManager__WEBPACK_IMPORTED_MODULE_2__["TeamsEnvironmentManager"].initialize();
        });
    };
    return TeamsAwareWebPartHost;
}(_MinimalWebPartHost__WEBPACK_IMPORTED_MODULE_1__["MinimalWebPartHost"]));



/***/ }),

/***/ "L5sm":
/*!***************************************************!*\
  !*** ./lib/components/host/MinimalWebPartHost.js ***!
  \***************************************************/
/*! exports provided: MinimalWebPartHost */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MinimalWebPartHost", function() { return MinimalWebPartHost; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _BaseWebPartHost__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BaseWebPartHost */ "tIB3");
/**
 * @Copyright (c) Microsoft Corporation.  All rights reserved.
 */


/**
 * The minimal web part host is the simplest implementation needed to use the
 * Client Side Web Part Manager.
 *
 * @internal
 */
var MinimalWebPartHost = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(MinimalWebPartHost, _super);
    function MinimalWebPartHost() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return MinimalWebPartHost;
}(_BaseWebPartHost__WEBPACK_IMPORTED_MODULE_1__["BaseWebPartHost"]));



/***/ }),

/***/ "Lz2h":
/*!*****************************************************************************************!*\
  !*** ../sp-property-pane/lib/propertyPaneFields/propertyPaneLabel/PropertyPaneLabel.js ***!
  \*****************************************************************************************/
/*! exports provided: PropertyPaneLabel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertyPaneLabel", function() { return PropertyPaneLabel; });
/* harmony import */ var _propertyPaneField_IPropertyPaneField__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../propertyPaneField/IPropertyPaneField */ "3ZYD");
// Copyright (c) Microsoft. All rights reserved.

/**
 * Helper method to create a Label on the PropertyPane.
 * @param targetProperty - Target property the label is associated to.
 * @param properties - Strongly typed Label properties.
 *
 * @public
 */
function PropertyPaneLabel(targetProperty, properties) {
    return {
        type: _propertyPaneField_IPropertyPaneField__WEBPACK_IMPORTED_MODULE_0__["PropertyPaneFieldType"].Label,
        targetProperty: targetProperty,
        properties: properties
    };
}


/***/ }),

/***/ "NdaM":
/*!**********************************************!*\
  !*** ./lib/core/WebPartLoadDataCollector.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ms/sp-telemetry */ "2q6Q");
/* harmony import */ var _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_KillSwitches__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../common/KillSwitches */ "+ORw");
// Copyright (c) Microsoft. All rights reserved.


var NOT_AVAILABLE = 'N/A';
var WebPartLoadDataCollector = /** @class */ (function () {
    function WebPartLoadDataCollector() {
    }
    WebPartLoadDataCollector.collect = function (manifest, webPartTag, pageContext) {
        var getTime = function (key) {
            return (_ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_0__["_PerformanceLogger"].readComponentBreakdown(webPartTag, key) ||
                _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_0__["_PerformanceLogger"].readTempData(webPartTag + "." + key));
        };
        var start = getTime('start');
        var moduleLoaded = getTime('modulesLoaded');
        var initialized = getTime('init');
        var end = getTime('end');
        var isSpinnyShown = !!getTime('displaySpinner');
        var isMultiGeo = Boolean(pageContext && pageContext.legacyPageContext && pageContext.legacyPageContext.isMultiGeoTenant);
        var dataProvider = NOT_AVAILABLE;
        var layoutID = NOT_AVAILABLE;
        var webPartCacheHit = "N/A" /* NotAvailable */;
        var cacheMissReason = "N/A" /* NotApplicable */;
        // Collect data for first-party web parts only. This ideally should be done outside of spfx.
        // VSO#855246 Refactor WebPartLoadDataCollector to move out first-party only logging logic.
        if (manifest.isInternal) {
            var cacheHit = getTime('CacheHit');
            var cacheMiss = getTime('CacheMiss');
            var prefetechedData = getTime('prefetchedData');
            var isCacheApplicable = Boolean(cacheHit || cacheMiss);
            webPartCacheHit = isCacheApplicable
                ? cacheHit
                    ? "true" /* True */
                    : "false" /* False */
                : "N/A" /* NotAvailable */;
            cacheMissReason = WebPartLoadDataCollector._getCacheMissReason(cacheHit, getTime);
            var dataProviderTime_1 = _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_0__["_PerformanceLogger"].now();
            var layoutKey_1 = _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_0__["_PerformanceDataDimensions"].Layout;
            var dataProviderKey_1 = _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_0__["_PerformanceDataDimensions"].DataProvider;
            var perfBreakDown_1 = _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_0__["_PerformanceLogger"].readFullEUPLBreakDown();
            // WebParts which have different layouts and dataproviders, will have perf marks such as
            // webPartTag.dataProvider: [dataProviderName]
            // webPartTag.Layout: [Layout]
            // The logic below will extract the data provider and layout, and log them for perf measurements.
            Object.keys(perfBreakDown_1).forEach(function (key) {
                if (key.indexOf(webPartTag) > -1) {
                    // We only have 1 layout
                    if (layoutID === NOT_AVAILABLE && key.indexOf(layoutKey_1) > -1) {
                        layoutID = key.split(layoutKey_1)[1];
                        // Focus on primary data provider
                    }
                    else if (key.indexOf(dataProviderKey_1) > -1) {
                        // Pick earliest data provider, in case there are multiple
                        if (dataProvider === NOT_AVAILABLE || perfBreakDown_1[key] < dataProviderTime_1) {
                            dataProvider = key.split(dataProviderKey_1)[1];
                            dataProviderTime_1 = perfBreakDown_1[key];
                        }
                    }
                }
            });
            dataProvider = prefetechedData ? 'Prefetch' : dataProvider;
        }
        var webpartPerfFlights = !_common_KillSwitches__WEBPACK_IMPORTED_MODULE_1__["default"]._isWebpartExperimentKSActivated()
            ? _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_0__["_PerformanceLogger"].getWebpartFlightsAndExperiments(webPartTag)
            : undefined;
        var syncRenderTime = this._getSyncRenderTime(layoutID, getTime);
        return {
            alias: manifest.alias,
            isMultiGeo: isMultiGeo,
            isInternal: manifest.isInternal,
            isSpinnyShown: isSpinnyShown,
            manifestId: manifest.id,
            moduleLoadTime: Math.floor(moduleLoaded - start),
            initTime: Math.floor(initialized - moduleLoaded),
            renderTime: Math.floor(end - initialized),
            syncRenderTime: syncRenderTime,
            scenarioId: _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_0__["_PerformanceLogger"].getScenarioId(),
            isFullPage: _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_0__["_PerformanceLogger"].fullPageLoad,
            dataProvider: dataProvider,
            layout: layoutID,
            mySiteCacheHit: webPartCacheHit,
            cacheMissReason: cacheMissReason,
            flights: webpartPerfFlights,
            storeAppId: manifest.storeAppId,
            mpnId: manifest.mpnId,
            componentDeveloperName: manifest.componentDeveloperName
        };
    };
    WebPartLoadDataCollector._getSyncRenderTime = function (layoutID, getTime) {
        var syncRenderTime = undefined;
        if (!_common_KillSwitches__WEBPACK_IMPORTED_MODULE_1__["default"].isAddSyncRenderTimeKSActivated()) {
            syncRenderTime = Math.floor(getTime('syncRender') - getTime('getDataComplete'));
            if (!_common_KillSwitches__WEBPACK_IMPORTED_MODULE_1__["default"].isExclusiveRenderTimeForBaseCollectionWebPartKSActivated()) {
                var postRenderCompleteTime = getTime('postRenderComplete');
                var loadLayoutEnd = getTime('loadLayoutEnd');
                var syncLayoutRenderComplete = getTime('syncLayoutRenderComplete');
                if (loadLayoutEnd && syncLayoutRenderComplete) {
                    // render layout and items inside it
                    syncRenderTime = Math.floor(syncRenderTime + (syncLayoutRenderComplete - loadLayoutEnd));
                }
                if (postRenderCompleteTime) {
                    syncRenderTime = Math.floor(
                    // transposeRow + transposeItems + render + syncPostRender
                    syncRenderTime + (postRenderCompleteTime - getTime(_ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_0__["_PerformanceDataDimensions"].Layout + layoutID)));
                }
            }
        }
        return syncRenderTime;
    };
    WebPartLoadDataCollector._getCacheMissReason = function (cacheHit, getTime) {
        if (cacheHit) {
            return "N/A" /* NotApplicable */;
        }
        var mySiteCacheMissOnConfgMismatch = !!getTime('CacheMissConfigMismatch');
        var mySiteCacheMissOnLateFlush = !!getTime('LateFlush');
        var cachedWebPartNotFound = !!getTime('CachedWebPartNotFound');
        var cacheExpired = !!getTime('CacheExpired');
        var cacheMissReason = "NotSpecified" /* NotSpecified */;
        if (mySiteCacheMissOnConfgMismatch) {
            cacheMissReason = "CacheConfigMissmatch" /* CacheConfigMissmatch */;
        }
        else if (mySiteCacheMissOnLateFlush) {
            cacheMissReason = "LateFlush" /* LateFlush */;
        }
        else if (cachedWebPartNotFound) {
            cacheMissReason = "CachedItemNotFound" /* CachedItemNotFound */;
        }
        else if (cacheExpired) {
            cacheMissReason = "CacheExpired" /* CacheExpired */;
        }
        return cacheMissReason;
    };
    return WebPartLoadDataCollector;
}());
/* harmony default export */ __webpack_exports__["default"] = (WebPartLoadDataCollector);


/***/ }),

/***/ "NmNf":
/*!*****************************************************************************************************!*\
  !*** ../sp-property-pane/lib/propertyPaneFields/propertyPaneChoiceGroup/PropertyPaneChoiceGroup.js ***!
  \*****************************************************************************************************/
/*! exports provided: PropertyPaneChoiceGroup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertyPaneChoiceGroup", function() { return PropertyPaneChoiceGroup; });
/* harmony import */ var _propertyPaneField_IPropertyPaneField__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../propertyPaneField/IPropertyPaneField */ "3ZYD");
// Copyright (c) Microsoft. All rights reserved.

/**
 * Helper method to create a Choice Group on the PropertyPane.
 * @param targetProperty - Target property the choice group is associated to.
 * @param properties - Strongly typed Choice Group properties.
 *
 * @public
 */
function PropertyPaneChoiceGroup(targetProperty, properties) {
    return {
        type: _propertyPaneField_IPropertyPaneField__WEBPACK_IMPORTED_MODULE_0__["PropertyPaneFieldType"].ChoiceGroup,
        targetProperty: targetProperty,
        properties: properties
    };
}


/***/ }),

/***/ "OASt":
/*!**********************************************!*\
  !*** ./lib/core/ClientSideWebPartManager.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _microsoft_sp_component_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/sp-component-base */ "7Awa");
/* harmony import */ var _microsoft_sp_component_base__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_component_base__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @microsoft/sp-diagnostics */ "ut3N");
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _microsoft_sp_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @microsoft/sp-http */ "vlQI");
/* harmony import */ var _microsoft_sp_http__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_http__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _microsoft_sp_loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @microsoft/sp-loader */ "I6O9");
/* harmony import */ var _microsoft_sp_loader__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_loader__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @microsoft/sp-lodash-subset */ "Pk8u");
/* harmony import */ var _microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _microsoft_sp_page_context__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @microsoft/sp-page-context */ "X+PM");
/* harmony import */ var _microsoft_sp_page_context__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_page_context__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _microsoft_load_themed_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @microsoft/load-themed-styles */ "jOlS");
/* harmony import */ var _microsoft_load_themed_styles__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_microsoft_load_themed_styles__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _PropertyPaneLoader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../PropertyPaneLoader */ "7pKC");
/* harmony import */ var _utils_ExecuteWithoutFailing__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/ExecuteWithoutFailing */ "3+DO");
/* harmony import */ var _common_KillSwitches__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../common/KillSwitches */ "+ORw");
/* harmony import */ var _BaseClientSideWebPart__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./BaseClientSideWebPart */ "evvI");
/* harmony import */ var _classicPages_ClassicPageUtils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./classicPages/ClassicPageUtils */ "FbpR");
/* harmony import */ var _ClientSideWebPartStatusRenderer__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./ClientSideWebPartStatusRenderer */ "aOlN");
/* harmony import */ var _error_SPWebPartError__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./error/SPWebPartError */ "ybLs");
/* harmony import */ var _IWebPartData__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./IWebPartData */ "jeXa");
/* harmony import */ var _loaders_IframedWebPartControllerLoader__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./loaders/IframedWebPartControllerLoader */ "VuYt");
/* harmony import */ var _WebPartContext__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./WebPartContext */ "ruV7");
/* harmony import */ var _WebPartFormFactor__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./WebPartFormFactor */ "SmEi");
/* harmony import */ var _WebPartLoadDataCollector__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./WebPartLoadDataCollector */ "NdaM");
/* harmony import */ var _loc_Strings_resx__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./loc/Strings.resx */ "kGqN");
var _loc_Strings_resx__WEBPACK_IMPORTED_MODULE_20___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./loc/Strings.resx */ "kGqN", 1);
/* harmony import */ var _WebPartWidthCacheManager__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./WebPartWidthCacheManager */ "BDc9");
// Copyright (c) Microsoft. All rights reserved.
// This file contains code for the ClientSideWebPartManager. The web part host is expected to
// load and interact with web parts only through the web part manager APIs.






















var THUMBNAIL_MAX_URL_LENGTH = 255; // All SharePoint URL field types have this limit
var DOCVIZ_REGEX = /(\/_layouts\/15\/getpreview.ashx\/?(|(\?(.*?)))$)/i;
// Flight name is 'SppplatIframedWebPartControllerLoadingFeature'
var SPPPLAT_IFRAMED_WEBPART_CONTROLLER_FLIGHT_ID = 1147;
/**
 * The ClientSideWebPartManager is expected to be the public interface to client-side web parts. Each
 * host is expected to create an instance of this class and manage loading of all web parts in that host
 * through that one instance. e.g. On one page, if there are multiple Canvas objects, each one could have
 * one instance of this class. If the page hosts web parts without the Canvas, then the page can have an
 * instance of this class. Overall this class is expected to provide the following purpose:
 *
 *    - Orchestrates loading of one or more web parts in a host.
 *    - It takes care of loading web part dependencies asynchronously. Each web part loads completely
 *      independently of the other web parts in the host.
 *    - Keep a reference to all the loaded web parts and help provide bulk operations on the web parts.
 *    - Help manage memory leak type issues in one place.
 *    - Integrate the web parts with the PropertyPane and other external entities.
 *    - Help troubleshoot web parts during escalations.
 *
 * @internal
 */
var ClientSideWebPartManager = /** @class */ (function () {
    /**
     * Initialize the ClientSideWebPartManager.
     *
     * @param host - Reference to the host. A web part host is a component that is deemed capable of hosting a web
     * part. Any component that implements the IWebPartHost is allowed to host a web part.
     */
    function ClientSideWebPartManager(host) {
        /**
         * Dictionary of all the active web parts in this instance of the manager.
         */
        this._webParts = new Map();
        /**
         * Web part status renderer instance scoped to this web part manager instance.
         */
        this._statusRenderer = new _ClientSideWebPartStatusRenderer__WEBPACK_IMPORTED_MODULE_13__["default"]();
        /**
         * Dictionary of all the iframed web parts in this instance of the manager.
         */
        this._iframedWebpartInstanceIds = new Set();
        this._propertyPaneConsumerQueue = new Map();
        this._displayMode = _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["DisplayMode"].Read;
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["Validate"].isNotNullOrUndefined(host, 'host');
        this._host = host;
        this._pageContext = host.serviceScope.consume(_microsoft_sp_page_context__WEBPACK_IMPORTED_MODULE_6__["PageContext"].serviceKey);
        this._onContainerResize = this._onContainerResize.bind(this);
        this._onPropertyPaneNotifications = this._onPropertyPaneNotifications.bind(this);
        this.requestPropertyPaneAction = this.requestPropertyPaneAction.bind(this);
        this.isPropertyPaneRenderedByWebPart = this.isPropertyPaneRenderedByWebPart.bind(this);
        this.isPropertyPaneOpen = this.isPropertyPaneOpen.bind(this);
        if (ClientSideWebPartManager._webPartManagerList.length === 0) {
            this._initialzeOnResizeEventHandler();
        }
        ClientSideWebPartManager._webPartManagerList.push(this);
    }
    /**
     * Create the web part tag. Web part tag is a unique tag per web part instance and is used for logging and telemetry.
     */
    /* tslint:disable-next-line:no-any */
    ClientSideWebPartManager.createWebPartTag = function (manifest, instanceId) {
        return "WebPart." + manifest.alias + "." + (manifest.isInternal ? 'internal' : 'external') + "." + instanceId;
    };
    ClientSideWebPartManager._instanceOfBase = function (wp) {
        if (!wp) {
            return false;
        }
        else if (wp instanceof _BaseClientSideWebPart__WEBPACK_IMPORTED_MODULE_11__["default"]) {
            return true;
        }
        else {
            /* tslint:disable-next-line:no-string-literal */
            var objectType = wp['__type'];
            return objectType === 'BaseClientSideWebPart' || objectType === 'BaseMRClientSideWebPart';
        }
    };
    ClientSideWebPartManager._getWebPartTag = function (wp) {
        var errorReason;
        if (!ClientSideWebPartManager._instanceOfBase(wp)) {
            errorReason = 'WebpartTag requested for non-webpart';
        }
        else if (!wp.context) {
            // wp not being defined is checked by _instanceOfBase
            errorReason = 'WebpartTag requested for instance that is missing context';
        }
        if (errorReason) {
            _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__["_TraceLogger"].logError(ClientSideWebPartManager._logSource, new Error(errorReason));
            return undefined;
        }
        return wp.context.webPartTag;
    };
    ClientSideWebPartManager._isLoadingIsolatedWebPart = function (context) {
        return (_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["_SPFlight"].isEnabled(SPPPLAT_IFRAMED_WEBPART_CONTROLLER_FLIGHT_ID) &&
            // The next two conditions are neccessary because the same web part
            // will cross this path twice, once when determining if we should load in an
            // iframe and the second time is when we are loading the web part inside
            // the iframe.
            !!context.pageLayoutType &&
            context.pageLayoutType !== 'Isolated' &&
            (context.manifest.isolationLevel === _IWebPartData__WEBPACK_IMPORTED_MODULE_15__["WebPartIsolationLevel"].DomIsolation ||
                // 'isolatedDomain' is a string and we want to check if 'isolatedDomain' has value,
                // instead of undefined or "".
                !!context.manifest.isolatedDomain));
    };
    ClientSideWebPartManager._getWebPartTitle = function (manifest, webPartData) {
        // If the web part has data, take the title from the data.
        var title = webPartData && webPartData.title;
        if (!title) {
            // If the web part has just been created from the Toolbox, use the title from the picked up entry.
            /* tslint:disable-next-line:no-any */
            title = manifest.title && manifest.title.default;
        }
        // If we still do not have a title use the title from the preconfigured entries
        return title || manifest.preconfiguredEntries[0].title.default;
    };
    ClientSideWebPartManager._loadDynamicComponentDependencies = function (components, webPartData, webPartTag) {
        var componentDependencies = (webPartData.serverProcessedContent && webPartData.serverProcessedContent.componentDependencies) || {};
        var dependencies = Object.keys(componentDependencies);
        for (var _i = 0, dependencies_1 = dependencies; _i < dependencies_1.length; _i++) {
            var dep = dependencies_1[_i];
            var componentId = componentDependencies[dep];
            if (_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["Guid"].isValid(componentId)) {
                components.push(_microsoft_sp_loader__WEBPACK_IMPORTED_MODULE_4__["SPComponentLoader"].loadComponentById(componentId));
            }
            else {
                throw new Error("Failed to load web part's (" + webPartTag + ") dynamic dependency " + dep + " with component id {" + componentId + "}");
            }
        }
    };
    Object.defineProperty(ClientSideWebPartManager, "isMaintenanceMode", {
        /**
         * Returns true if the maintenanceMode query string parameter is provided.
         */
        get: function () {
            var urlParams = new _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["UrlQueryParameterCollection"](window.location.href);
            return urlParams.getValue('maintenanceMode') === 'true';
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Load a web part in the provided DOM element. Does the following steps
     *
     *    1. Validate params.
     *    2. Validate the web part manifest.
     *    3. Perform an async import of the web part modules from the provided manifest
     *      - i.e ClientSideWebPartManager._loadWebPartModules
     *    4. Instantiate and initialize the web part object
     *      - i.e. ClientSideWebPartManager._initializeWebPart
     *    5. Render the web part in the provided DOM element
     *      - i.e. ClientSideWebPartManager._renderWebPart
     *
     * If an error happens during any of the above steps, catch the error and log it.
     *
     * @param webPartManagerContext - web part manager context.
     */
    ClientSideWebPartManager.prototype.loadWebPart = function (webPartManagerContext) {
        var _this = this;
        try {
            var context_1 = webPartManagerContext;
            context_1.webPartTag = ClientSideWebPartManager.createWebPartTag(context_1.manifest, context_1.instanceId);
            if (ClientSideWebPartManager._isLoadingIsolatedWebPart(context_1)) {
                return this._loadIsolatedWebPart(context_1);
            }
            var monitor_1 = new _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__["_QosMonitor"]('WebPart.Load', true);
            var loadError_1;
            return new Promise(function (resolve) {
                _this._host.onBeforeWebPartLoad(context_1);
                resolve(_this._loadComponentModules(context_1));
            })
                .then(function (component) {
                _this._host.onAfterWebPartLoad(context_1);
                return component;
            })
                .catch(function (error) {
                loadError_1 = {
                    error: error,
                    stage: 'Load'
                };
                throw loadError_1;
            })
                .then(function (component) {
                if (_common_KillSwitches__WEBPACK_IMPORTED_MODULE_10__["default"].isTeamsContextKSActivated()) {
                    _this._host.onBeforeWebPartInitializeOld(context_1);
                    return _this._initializeWebPart(component, context_1);
                }
                return _this._host.onBeforeWebPartInitialize(context_1).then(function () {
                    return _this._initializeWebPart(component, context_1);
                });
            })
                .then(function (webPart) {
                _this._host.onAfterWebPartInitialize(context_1);
                return webPart;
            })
                .catch(function (error) {
                if (!loadError_1) {
                    loadError_1 = {
                        error: error,
                        stage: 'Initialize'
                    };
                }
                throw loadError_1;
            })
                .then(function (webPart) {
                _this._host.onBeforeWebPartRender(context_1);
                _microsoft_load_themed_styles__WEBPACK_IMPORTED_MODULE_7__["flush"]();
                return webPart;
            })
                .then(function (webPart) { return _this._loadPropertyPaneModule(webPart); })
                .then(function (webPart) { return _this._renderWebPart(webPart); })
                .then(function (_a) {
                var webPart = _a.webPart, renderCompleteTime = _a.renderCompleteTime;
                if (!_common_KillSwitches__WEBPACK_IMPORTED_MODULE_10__["default"].isResolveRenderTimeActivated()) {
                    context_1.renderCompleteTime = renderCompleteTime;
                }
                _this._host.onAfterWebPartRender(context_1);
                _classicPages_ClassicPageUtils__WEBPACK_IMPORTED_MODULE_12__["default"].removeFabricLinks();
                return _this._loadLegacyFabricCssIfRequired(context_1);
            })
                .catch(function (error) {
                if (!loadError_1) {
                    loadError_1 = {
                        error: error,
                        stage: 'Render'
                    };
                }
                throw loadError_1;
            })
                .then(function () {
                var extraData = _WebPartLoadDataCollector__WEBPACK_IMPORTED_MODULE_19__["default"].collect(context_1.manifest, context_1.webPartTag, _this._pageContext);
                monitor_1.writeSuccess(extraData);
            })
                .catch(function (e) {
                monitor_1.writeUnexpectedFailure(e.stage);
                var error = e.error, stage = e.stage;
                switch (stage) {
                    case 'Load':
                        _this._host.onAfterWebPartLoadFailed(context_1, error);
                        break;
                    case 'Initialize':
                        _this._host.onAfterWebPartInitializeFailed(context_1, error);
                        break;
                    case 'Render':
                        _this._host.onAfterWebPartRenderFailed(context_1, error);
                        break;
                }
                var instanceId = context_1.instanceId;
                var errorWebPart = _this._webParts.get(instanceId);
                if (errorWebPart) {
                    errorWebPart.dispose();
                    _this._webParts.delete(instanceId);
                }
                _this._statusRenderer.renderError(context_1.domElement, error);
                throw e.error;
            });
        }
        catch (error) {
            return Promise.reject(error);
        }
    };
    /**
     * Set a IPropertyPaneConsumer object into the set of the Client-side Web Part Manager's
     * managed web parts.
     *
     * @param id - A unique instance id.
     * @param control - A component which wants to use the property Pane.
     *
     * @internal
     */
    ClientSideWebPartManager.prototype.setPropertyPaneConsumer = function (id, control) {
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["Validate"].isNonemptyString(id, 'id');
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["Validate"].isNotNullOrUndefined(control, 'control');
        this._webParts.set(id, control);
        this._registerWebPartAsPropertyPaneConsumer(id);
    };
    /**
     * Fetch web part manifests. This makes a REST call to load the current site's web parts into the module loader.
     */
    ClientSideWebPartManager.prototype.fetchWebPartManifests = function () {
        var _this = this;
        if (!this._toolboxManifestsPromise &&
            // If the webServerRelativeUrl is missing we don't have anything to do here.
            (!this._pageContext.web ||
                !this._pageContext.web.serverRelativeUrl ||
                _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["Environment"].type === _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["EnvironmentType"].Local ||
                _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["Environment"].type === _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["EnvironmentType"].Test)) {
            this._toolboxManifestsPromise = Promise.resolve();
        }
        // if web parts have already been fetched we don't have anything to do here.
        if (!this._toolboxManifestsPromise) {
            var requestCorrelationId_1;
            var qosMonitor_1 = new _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__["_QosMonitor"]('ClientSideWebPartManager.FetchWebParts');
            var requestUrl_1 = _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["UrlUtilities"].removeEndSlash(this._pageContext.web.serverRelativeUrl) + "/_api/web/GetClientSideWebParts";
            this._host.serviceScope.whenFinished(function () {
                var httpClient = _this._host.serviceScope.consume(_microsoft_sp_http__WEBPACK_IMPORTED_MODULE_3__["SPHttpClient"].serviceKey);
                _this._toolboxManifestsPromise = _this._fetchManifestsWithCache(httpClient, requestUrl_1)
                    .then(function (response) {
                    requestCorrelationId_1 = response.correlationId ? response.correlationId.toString() : undefined;
                    if (response.ok) {
                        return (response.jsonCached ||
                            (response.jsonCached = Promise.resolve(response.json())));
                    }
                    else {
                        throw _error_SPWebPartError__WEBPACK_IMPORTED_MODULE_14__["SPWebPartError"].create(_error_SPWebPartError__WEBPACK_IMPORTED_MODULE_14__["SPWebPartErrorCode"].ManifestDownloadFailed);
                    }
                })
                    .then(function (value) {
                    var manifests = value.value.map(function (manifestObject) { return JSON.parse(manifestObject.Manifest); });
                    _this._disambiguateWebPartManifestLocales(manifests);
                    _microsoft_sp_loader__WEBPACK_IMPORTED_MODULE_4__["SPComponentLoader"].registerManifests(manifests);
                    qosMonitor_1.writeSuccess();
                })
                    .catch(function (error) {
                    // Clear out the promise so we can try again if we enter edit mode again.
                    _this._toolboxManifestsPromise = undefined;
                    _this._clearManifestCacheItem(requestUrl_1);
                    _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__["_TraceLogger"].logErrorData({
                        source: ClientSideWebPartManager._logSource,
                        error: error,
                        serviceScope: _this._host.serviceScope
                    });
                    qosMonitor_1.writeUnexpectedFailure('Rejected', error, {
                        correlationId: requestCorrelationId_1
                    });
                    throw error;
                });
            });
        }
        return this._toolboxManifestsPromise;
    };
    /**
     * Get list of active web part manifests.
     *
     * @returns - array of manifests.
     */
    // tslint:disable-next-line:no-any
    ClientSideWebPartManager.prototype.getWebPartManifests = function () {
        var manifests = _microsoft_sp_loader__WEBPACK_IMPORTED_MODULE_4__["SPComponentLoader"]._getManifestReferences();
        var result = []; /* tslint:disable-line:no-any */
        if (manifests) {
            for (var _i = 0, manifests_1 = manifests; _i < manifests_1.length; _i++) {
                var manifest = manifests_1[_i];
                if (manifest && manifest.componentType === 'WebPart') {
                    result.push(manifest); /* tslint:disable-line:no-any */
                }
            }
        }
        return result;
    };
    /**
     * Set the display mode of the specified web part. If no web part id is specified, switch mode of all web parts.
     * If the display mode passed is same as the current mode, no change is applied.
     *
     * @param displayMode - the new DisplayMode.
     * @param instanceId - instance id of the web part.
     */
    ClientSideWebPartManager.prototype.setDisplayMode = function (displayMode, instanceId) {
        this._setDisplayMode(displayMode, instanceId).catch(function (e) {
            return _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__["_TraceLogger"].logVerboseData({
                source: ClientSideWebPartManager._logSource,
                message: e.message
            });
        });
    };
    /**
     * @internalremarks Only use this API if you need to immediately call property pane APIs after switching the mode.
     * @internal
     */
    ClientSideWebPartManager.prototype._setDisplayMode = function (displayMode, instanceId) {
        var _this = this;
        this._displayMode = displayMode;
        if (this._displayMode === _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["DisplayMode"].Read) {
            this._closeIsolatedPropertyPaneIfRequired();
        }
        // We only want to indicate we have loaded, if needed, the property pane
        /* tslint:disable-next-line:no-any */
        var setDisplayModePromise = this._loadPropertyPaneModuleOld();
        // Set the display mode for the requested or all web parts.
        this._executeForIdsOrAll(this._getArrayOrUndefined(instanceId), function (id, webPart) {
            if (webPart) {
                webPart._internalSetDisplayMode(displayMode);
            }
            else if (_this._iframedWebpartInstanceIds.has(id)) {
                var qosMonitor = new _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__["_QosMonitor"]('ClientSideWebPartManager._setDisplayMode');
                if (_this._iframedWebPartController) {
                    qosMonitor.writeSuccess();
                    _this._iframedWebPartController.setDisplayMode(displayMode, id);
                }
                else {
                    qosMonitor.writeUnexpectedFailure('iFrame controller used before deferral loading is complete');
                }
            }
        });
        // Start the dirty bit timer if required
        this._startDirtyBitTimer(displayMode);
        return setDisplayModePromise;
    };
    /**
     * Serialize the specified web part. If no web part is specified, serialize all web parts.
     *
     * @param instanceId - instance id of the web part.
     */
    ClientSideWebPartManager.prototype.serialize = function (instanceId) {
        var _this = this;
        var sd = new Map();
        this._executeForIdsOrAll(this._getArrayOrUndefined(instanceId), function (id, webPart) {
            if (webPart) {
                sd.set(id, webPart._internalSerialize());
            }
            else if (_this._iframedWebpartInstanceIds.has(id)) {
                _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["Validate"].isNotNullOrUndefined(_this._iframedWebPartController, 'IFramedWebPartController is undefined');
                sd.set(id, _this._iframedWebPartController.serialize(id));
            }
        });
        return sd;
    };
    /**
     * Set the web part data for the specified web part.
     *
     * The setWebPartData API has 3 possible scenarios when the web part data is updated externally.
     * - Web part declares useFallbackWhenPropertiesUpdatedExternally manifest field as `true`, web part manager will
     *   trigger the default fallback logic which disposes the web part and reload it using the given context.
     * - Web part overrides `onAfterPropertiesUpdatedExternally` life cycle events, web part manager will first
     *   deserialize the web part data, then invokes the `onAfterPropertiesUpdatedExternally` event to allow web part to
     *   do their customized handling logic.
     * - If useFallbackWhenPropertiesUpdatedExternally manifest field is `false` or `undefined`, and web part does not
     *   override `onAfterPropertiesUpdatedExternally` life cycle events, web part manager will first deserialize the
     *   web part data, then invokes the `_refresh` life cycle to re-render the web part.
     *
     * @param webPartData - the new web part data.
     * @param instanceId - instance id of the web part.
     * @param shouldFallback - whether it should fallback to dispose & reload logic.
     * @returns - A promise that resolves immediately if fallback is not used, or returns the loadWebPart promise
     *  when fallback is used.
     */
    ClientSideWebPartManager.prototype.setWebPartData = function (context, instanceId, shouldFallback) {
        if (shouldFallback === void 0) { shouldFallback = false; }
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["Validate"].isNotNullOrUndefined(context, 'web part manager context');
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["Validate"].isNonemptyString(instanceId, 'web part instance id');
        var wp = this._webParts.get(instanceId);
        var webPartData = context.webPartData;
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["Validate"].isNotNullOrUndefined(webPartData, 'web part data');
        if (wp && webPartData) {
            if (shouldFallback) {
                this.disposeWebparts(instanceId);
                return this.loadWebPart(context);
            }
            else {
                wp._internalSetWebPartData(webPartData);
                _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["_SPEventManager"].instance.raiseEvent(this._getDataUpdatedEventName(webPartData.instanceId), {});
            }
        }
        return Promise.resolve();
    };
    /**
     * Dispose of the current webpart manager and all of the webparts it has loaded.
     */
    ClientSideWebPartManager.prototype.dispose = function () {
        this.disposeWebparts();
        var currentIdx = ClientSideWebPartManager._webPartManagerList.indexOf(this);
        if (currentIdx >= 0) {
            ClientSideWebPartManager._webPartManagerList.splice(currentIdx, 1);
        }
    };
    /**
     * Dispose the specified web part. If no web part is specified, dispose all web parts.
     *
     * @param instanceId - instance id of the web part.
     */
    ClientSideWebPartManager.prototype.disposeWebparts = function (instanceId) {
        var _this = this;
        this._executeForIdsOrAll(this._getArrayOrUndefined(instanceId), function (id, webPart) {
            if (webPart) {
                // Remove references to the web part from the manager before disposing it
                _this._deleteWebPart(id);
                // Actually dispose the web part
                Object(_utils_ExecuteWithoutFailing__WEBPACK_IMPORTED_MODULE_9__["executeWithoutFailing"])(function () {
                    webPart._internalDispose();
                }, ClientSideWebPartManager._logSource);
            }
            else if (_this._iframedWebpartInstanceIds.has(id)) {
                _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["Validate"].isNotNullOrUndefined(_this._iframedWebPartController, 'IFramedWebPartController is undefined');
                _this._iframedWebPartController.deleteWebPart(id);
            }
        });
    };
    /*
     * Get the first web part with preview image url specified. If no web parts are specified, try to get the preview
     * image from all web parts.
     *
     * @param instanceIds - instance ids of the web parts.
     */
    ClientSideWebPartManager.prototype.tryGeneratePreviewImageUrl = function (instanceIds) {
        var _this = this;
        var candidatePreviewImageUrl;
        var previewImageUrl = undefined;
        var previewFromAlias = undefined;
        var monitor = new _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__["_QosMonitor"]('ClientSideWebPartManager.tryGeneratePreviewImageUrl');
        this._executeForIdsOrAll(instanceIds, function (instanceId, webPart) {
            if (webPart) {
                // workaround for typescript targeting es5 only support for...of for array and string
                // also Map does not support some or every
                // @todo: Bug 222340 when switching to es6, use for...of and return after first match
                if (!previewImageUrl) {
                    var webPartThumbnail = webPart.previewImageUrl;
                    if (webPartThumbnail) {
                        previewFromAlias = webPart.context.manifest.alias;
                        if (webPartThumbnail.length < THUMBNAIL_MAX_URL_LENGTH) {
                            candidatePreviewImageUrl = webPartThumbnail;
                            // prefer non-canonical paths due to oAuth allowed end points
                            var normalizedPath = candidatePreviewImageUrl.toUpperCase();
                            /* tslint:disable-next-line:max-line-length */
                            // https://onedrive.visualstudio.com/_search?action=contents&text=authEndpoints&type=code&lp=custom-Collection&filters=ProjectFilters%7BOneDrive%20Service%7DRepositoryFilters%7Bnotify-server%7D&pageSize=25&result=DefaultCollection%2FOneDrive%20Service%2Fnotify-server%2FGBmaster%2F%2FActivity%2FOneDrive.Activity.DataAccess%2Fsrc%2FIdentity%2FSpoUserProvider.cs
                            var isSupportedByOAuth = DOCVIZ_REGEX.test(normalizedPath) || normalizedPath.indexOf('/_API/') >= 0;
                            if (isSupportedByOAuth) {
                                previewImageUrl = candidatePreviewImageUrl;
                            }
                        }
                        else {
                            var imageUrl = webPart.previewImageUrl;
                            _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__["_TraceLogger"].logVerboseData({
                                source: ClientSideWebPartManager._logSource,
                                eventName: 'tryGeneratePreviewImageUrl',
                                message: previewFromAlias + " attempted preview URL of " + (imageUrl && imageUrl.length) + " chars."
                            });
                        }
                    }
                }
            }
            else if (_this._iframedWebpartInstanceIds.has(instanceId)) {
                // @todo: VSO#612911 - add support tryGeneratePreviewImageUrl for iframed webparts
                monitor.writeExpectedFailure('IframedPart');
                return undefined;
            }
        });
        var extraData = monitor && previewFromAlias ? { alias: previewFromAlias } : undefined;
        if (!previewImageUrl && candidatePreviewImageUrl) {
            previewImageUrl = candidatePreviewImageUrl;
            monitor.writeExpectedFailure('NonLayouts', undefined /* ex */, extraData);
        }
        if (!previewImageUrl && previewFromAlias) {
            monitor.writeUnexpectedFailure('PathTooLong', undefined /* ex */, extraData);
            // Ensure to adjust callers if changing this error message!
            throw new Error('tryGeneratePreviewImageUrl PathLengthError.');
        }
        if (!monitor.hasEnded) {
            monitor.writeSuccess(extraData);
        }
        return previewImageUrl;
    };
    /**
     * Request property pane to perform the given action.
     *
     * @param instanceId - web part instance id.
     * @param propertyPaneAction - indicates what action needs to be performed on the property pane.
     * @param renderedByWebPart - indicates whether the the property pane rendered by a web part or not.
     * @param context - pass additional context to property pane
     */
    ClientSideWebPartManager.prototype.requestPropertyPaneAction = function (instanceId, propertyPaneAction, renderedByWebPart, context /* tslint:disable-line:no-any */) {
        var _this = this;
        if (propertyPaneAction === void 0) { propertyPaneAction = 'Default'; }
        if (this._iframedWebpartInstanceIds.has(instanceId)) {
            // Iframe controller scenario
            // Hiding the non-iframed property pane if open, before loading the iframed property pane.
            if (this._propertyPane && this._propertyPane.isOpen()) {
                this._propertyPane.requestAction(instanceId, 'Close', renderedByWebPart);
            }
            /* tslint:disable-next-line:no-any */
            this._iframedWebPartController.requestPropertyPaneAction(propertyPaneAction, instanceId);
        }
        else {
            // Default scenario
            // Hide the Iframed property pane before opening non-iframe scenario.
            // if no iframed property pane is present then this is a no-op.
            if (this._iframedWebPartController) {
                this._iframedWebPartController.requestPropertyPaneAction('Close');
            }
            if (this._propertyPane) {
                this._propertyPane.requestAction(instanceId, propertyPaneAction, renderedByWebPart);
            }
            else if (propertyPaneAction === 'OpenDetails') {
                // If the properyPane is not loaded for OpenDetails Action,
                // We have to load the property pane and then execute the action.
                this._loadPropertyPaneModuleOld(true)
                    .then(function () {
                    return _this._propertyPane.requestAction(instanceId, propertyPaneAction, renderedByWebPart, context);
                })
                    .catch(function (e) {
                    return _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__["_TraceLogger"].logVerboseData({
                        source: ClientSideWebPartManager._logSource,
                        message: e.message
                    });
                });
            }
        }
    };
    /**
     * Returns true if the current property pane source is a web part and not the Canvas or any other source.
     */
    ClientSideWebPartManager.prototype.isPropertyPaneRenderedByWebPart = function () {
        return !!this._propertyPane && this._propertyPane.isRenderedByConsumer();
    };
    /**
     * Returns the state of the PropertyPane if it is open or not.
     */
    ClientSideWebPartManager.prototype.isPropertyPaneOpen = function () {
        return !!this._propertyPane && this._propertyPane.isOpen();
    };
    /**
     * Method to handle the web part delete action from the host. There is a key distinction between delete and dispose.
     * Delete implies that the web part has been deleted from the page and the web part should dispose all the server
     * side or other external resources attached to the web part. Dispose implies that an in-place navigation is
     * happening and the web part manager should delete the web part from its cache.
     *
     * @param instanceId - instance id of the webpart which is deleted.
     */
    ClientSideWebPartManager.prototype.onWebPartDelete = function (instanceId) {
        this.disposeWebparts(instanceId);
    };
    /**
     * Render an error message in the web part container div.  Also logs the error message to the IWebPartHost logger.
     */
    ClientSideWebPartManager.prototype.renderError = function (domElement, error) {
        var _this = this;
        Object(_utils_ExecuteWithoutFailing__WEBPACK_IMPORTED_MODULE_9__["executeWithoutFailing"])(function () {
            _this._statusRenderer.renderError(domElement, error);
            _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__["_TraceLogger"].logErrorData({
                source: ClientSideWebPartManager._logSource,
                error: error,
                serviceScope: _this._host.serviceScope
            });
        }, ClientSideWebPartManager._logSource);
    };
    /**
     * Notify webparts that their container has resized.
     *
     * @param instanceId - if specified only notify one webpart that its container has resized
     */
    ClientSideWebPartManager.prototype.notifyWebPartContainerResize = function (instanceId) {
        var _this = this;
        this._executeForIdsOrAll(this._getArrayOrUndefined(instanceId), function (id, webPart) {
            if (webPart) {
                webPart._internalOnAfterResize();
            }
            else if (_this._iframedWebpartInstanceIds.has(id)) {
                _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["Validate"].isNotNullOrUndefined(_this._iframedWebPartController, 'IFramedWebPartController is undefined');
                _this._iframedWebPartController.notifyContainerResize(id);
            }
        });
    };
    /**
     * Used to ensure the next request for webpart manifests makes a call to the server.
     */
    ClientSideWebPartManager.prototype.clearManifestPromise = function () {
        this._toolboxManifestsPromise = undefined;
    };
    /** ------------------- PROTECTED ------------------- **/
    /**
     * Generate web part context.
     */
    ClientSideWebPartManager.prototype._getWebPartContext = function (context) {
        var webPartTag = ClientSideWebPartManager.createWebPartTag(context.manifest, context.instanceId);
        var sdks = (this._host.getAdditionalContextProperties && this._host.getAdditionalContextProperties()) || {};
        var microsoftTeams = sdks.microsoftTeams && sdks.microsoftTeams.teamsJs;
        var parameters = {
            sdks: sdks,
            microsoftTeams: microsoftTeams,
            parentServiceScope: context.serviceScope || this._host.serviceScope,
            manifest: this._getManifestInstance(context),
            instanceId: context.instanceId,
            webPartTag: webPartTag,
            domElement: context.domElement,
            statusRenderer: this._statusRenderer,
            isPropertyPaneRenderedByWebPart: this.isPropertyPaneRenderedByWebPart,
            isPropertyPaneOpen: this.isPropertyPaneOpen,
            formFactor: context.formFactor || _WebPartFormFactor__WEBPACK_IMPORTED_MODULE_18__["WebPartFormFactor"].Standard,
            host: this._host,
            requestPropertyPaneAction: this.requestPropertyPaneAction,
            loggingTag: webPartTag,
            _dataUpdatedEvent: new _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["SPEvent"](this._getDataUpdatedEventName(context.instanceId)),
            widthCacheKey: context.widthCacheKey
        };
        var webPartContext = new _WebPartContext__WEBPACK_IMPORTED_MODULE_17__["default"](parameters);
        return webPartContext;
    };
    /** ------------------- PRIVATE ------------------- **/
    ClientSideWebPartManager.prototype._initializeWebPart = function (component, context) {
        var webPartType = component;
        /* tslint:disable:no-any */
        if (webPartType.default) {
            webPartType = webPartType.default;
            if (typeof webPartType !== 'function' && webPartType.default) {
                webPartType = webPartType.default;
            }
        }
        /* tslint:enable:no-any */
        var webPart = new webPartType();
        webPart._internalInitialize(this._getWebPartContext(context), !!context.addedFromPersistedData, context.displayMode);
        var instanceId = webPart.instanceId;
        this._webParts.set(instanceId, webPart);
        this._registerWebPartAsPropertyPaneConsumer(instanceId);
        this._startDirtyBitTimer(context.displayMode);
        var webPartDataClone = _microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_5__["cloneDeep"](context.webPartData);
        if (webPartDataClone) {
            webPart._internalDeserialize(webPartDataClone);
        }
        return webPart;
    };
    ClientSideWebPartManager.prototype._fetchManifestsWithCache = function (httpClient, requestUrl) {
        if (!ClientSideWebPartManager._manifestRequestPromiseCache[requestUrl]) {
            ClientSideWebPartManager._manifestRequestPromiseCache[requestUrl] = _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["_SPFlight"].isEnabled(436 /* SppplatUseDeploymentPools */)
                ? httpClient.post(requestUrl, _microsoft_sp_http__WEBPACK_IMPORTED_MODULE_3__["SPHttpClient"].configurations.v1, {
                    body: JSON.stringify({
                        project: _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["Session"].clientSideApplicationId
                    })
                })
                : httpClient.get(requestUrl, _microsoft_sp_http__WEBPACK_IMPORTED_MODULE_3__["SPHttpClient"].configurations.v1);
        }
        return ClientSideWebPartManager._manifestRequestPromiseCache[requestUrl];
    };
    ClientSideWebPartManager.prototype._clearManifestCacheItem = function (requestUrl) {
        delete ClientSideWebPartManager._manifestRequestPromiseCache[requestUrl];
    };
    /**
     * Workaround for a server issue - disambiguate manifest locales if they haven't already been disambiguated
     * (VSO#243888) tracks fixing this issue.
     */
    ClientSideWebPartManager.prototype._disambiguateWebPartManifestLocales = function (manifests) {
        // Attempt to disambiguate locale for each manifest if the server didn't already do that
        var currentLocale = this._pageContext.cultureInfo.currentUICultureName
            ? this._pageContext.cultureInfo.currentUICultureName.toLowerCase()
            : undefined;
        if (currentLocale) {
            // This should only get called once, so it doesn't need to be a private function.
            var disambiguateLocale_1 = function (values) {
                var foundMatch = undefined;
                for (var locale in values) {
                    if (locale && locale.toLowerCase() === currentLocale && values[locale]) {
                        foundMatch = values[locale];
                        break;
                    }
                }
                return {
                    default: foundMatch || values.default
                };
            };
            manifests.forEach(function (manifest) {
                if (manifest.componentType === 'WebPart') {
                    var wpManifest = manifest;
                    wpManifest.preconfiguredEntries.forEach(function (entry) {
                        entry.title = disambiguateLocale_1(entry.title);
                        entry.description = disambiguateLocale_1(entry.description);
                        if (entry.group) {
                            entry.group = disambiguateLocale_1(entry.group);
                        }
                    });
                }
            });
        }
    };
    ClientSideWebPartManager.prototype._loadIsolatedWebPart = function (context) {
        var _this = this;
        this._iframedWebpartInstanceIds.add(context.instanceId);
        var domainUrl = this._ensureUrl(context.manifest.isolatedDomain, this._pageContext.site.absoluteUrl);
        return Object(_loaders_IframedWebPartControllerLoader__WEBPACK_IMPORTED_MODULE_16__["default"])().then(function (iframedWebPartControllerModule) {
            if (!_this._iframedWebPartController) {
                _this._iframedWebPartController = new iframedWebPartControllerModule(_this._host);
            }
            return _this._iframedWebPartController.loadWebPart(domainUrl, _this._pageContext, context);
        });
    };
    ClientSideWebPartManager.prototype._loadComponentModules = function (context) {
        var domElement = context.domElement, manifest = context.manifest, reservedHeight = context.reservedHeight, webPartData = context.webPartData;
        var title = ClientSideWebPartManager._getWebPartTitle(manifest, webPartData);
        this._statusRenderer._displayLoadingIndicator(domElement, title, context.webPartTag, reservedHeight, manifest.isInternal);
        var components = [_microsoft_sp_loader__WEBPACK_IMPORTED_MODULE_4__["SPComponentLoader"].loadComponent(manifest)];
        if (!components[0]) {
            throw _error_SPWebPartError__WEBPACK_IMPORTED_MODULE_14__["SPWebPartError"].create(_error_SPWebPartError__WEBPACK_IMPORTED_MODULE_14__["SPWebPartErrorCode"].ModuleUndefined, context.webPartTag);
        }
        if (webPartData) {
            ClientSideWebPartManager._loadDynamicComponentDependencies(components, webPartData, context.webPartTag);
        }
        return Promise.all(components).then(function (modules) {
            return modules[0];
        });
    };
    /**
     * Execute the provided callback for the list of provided web part ids. If no list if provided,
     * execute the callback on all web parts.
     */
    ClientSideWebPartManager.prototype._executeForIdsOrAll = function (instanceIds, callback) {
        var _this = this;
        if (instanceIds) {
            instanceIds.forEach(function (instanceId) {
                var webPart = _this._webParts.get(instanceId);
                callback(instanceId, webPart);
            });
        }
        else {
            this._webParts.forEach(function (webPart, instanceId) {
                // Check the type because the dictionary can have web parts or property pane controls
                if (ClientSideWebPartManager._instanceOfBase(webPart)) {
                    callback(instanceId, webPart);
                }
            });
            if (this._iframedWebPartController) {
                this._iframedWebPartController.getAllInstanceIds().forEach(function (instanceId) {
                    callback(instanceId);
                });
            }
        }
    };
    /**
     * This is a temporary implementation of updating the host that a web part has updated properties.
     * Currently we run a timer that regularly checks for updated properties and raises the dirty bit
     * handler to the host. todo (VSO SPPPLAT#200728) tracks fixing this scenario in a better way.
     */
    ClientSideWebPartManager.prototype._startDirtyBitTimer = function (mode) {
        var _this = this;
        // Clear the timer in read mode
        if (mode === _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["DisplayMode"].Read) {
            // Do not clear the dirty bit timer in classic pages as there are editable and non-editable
            // web parts on the page simultaneously. Note, only one web part can be truly editable at
            // any give time.
            if (this._dirtyBitTimer && _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["Environment"].type !== _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["EnvironmentType"].ClassicSharePoint) {
                window.clearInterval(this._dirtyBitTimer);
                this._dirtyBitTimer = undefined;
            }
            // If required start the timer in edit mode
        }
        else if (!this._dirtyBitTimer) {
            this._dirtyBitTimer = window.setInterval(function () {
                _this._executeForIdsOrAll(undefined, function (_instanceId, wp) {
                    if (wp) {
                        wp._internalSetDirtyBit();
                    }
                    else if (_this._iframedWebpartInstanceIds.has(_instanceId)) {
                        _this._iframedWebPartController.startDirtyBitTimer(_instanceId);
                    }
                });
            }, 1000);
        }
    };
    ClientSideWebPartManager.prototype._deleteWebPart = function (id) {
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["Validate"].isNotNullOrUndefined(id, 'id');
        // Since the property pane is defer loaded, check if it exists/loaded before
        // using it.
        if (this._propertyPane) {
            this._propertyPane.onConsumerDelete(id);
        }
        var wp = this._webParts.get(id);
        if (wp && ClientSideWebPartManager._instanceOfBase(wp)) {
            _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__["_TraceLogger"].logVerboseData({
                source: ClientSideWebPartManager._logSource,
                message: _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["Text"].format(_loc_Strings_resx__WEBPACK_IMPORTED_MODULE_20__["WebpartDeleteRequested"], ClientSideWebPartManager._getWebPartTag(wp)),
                serviceScope: this._host.serviceScope
            });
        }
        this._webParts.delete(id);
    };
    /**
     * Get web part manifest instance from manifest. Promotes the pre-configured entries.
     */
    /* tslint:disable:no-any */
    ClientSideWebPartManager.prototype._getManifestInstance = function (context) {
        var manifest = context.manifest;
        var manifestClone = _microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_5__["cloneDeep"](manifest);
        delete manifestClone.preconfiguredEntries;
        return manifestClone;
    };
    /* tslint:enable:no-any */
    /**
     * If non-non parameter passed, return array else return undefined.
     */
    ClientSideWebPartManager.prototype._getArrayOrUndefined = function (instanceId) {
        return instanceId ? [instanceId] : undefined;
    };
    ClientSideWebPartManager.prototype._initialzeOnResizeEventHandler = function () {
        window.addEventListener('resize', _microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_5__["debounce"](this._onContainerResize, 1000));
        window.addEventListener('message', this._onPropertyPaneNotifications);
        window.addEventListener('resize', _WebPartWidthCacheManager__WEBPACK_IMPORTED_MODULE_21__["default"].clear);
    };
    /**
     * Window onresize event handler.
     */
    ClientSideWebPartManager.prototype._onContainerResize = function () {
        ClientSideWebPartManager._webPartManagerList.forEach(function (wpm) {
            wpm._webParts.forEach(function (wp) {
                wp._internalOnAfterResize();
            });
        });
    };
    /**
     * Listener for window post message that the property pane.
     *
     * todo (SPPPLAT Bug #299413): Implement missing schema for property pane post messages
     * todo (SPPPLAT PBI #687467): Refactor IframedWebPartContoller
     */
    ClientSideWebPartManager.prototype._onPropertyPaneNotifications = function (event) {
        if (event && event.origin === window.location.origin) {
            switch (event.data) {
                case 'Property pane will open':
                    this._closeIsolatedPropertyPaneIfRequired();
                    break;
                case 'Property pane toggled':
                    _WebPartWidthCacheManager__WEBPACK_IMPORTED_MODULE_21__["default"].clear();
                    this._onContainerResize();
                    break;
            }
        }
    };
    ClientSideWebPartManager.prototype._renderWebPart = function (webPart) {
        return webPart._internalFirstTimeRender().then(function (renderCompleteTime) { return ({ webPart: webPart, renderCompleteTime: renderCompleteTime }); });
    };
    ClientSideWebPartManager.prototype._loadPropertyPaneModule = function (webPart) {
        var _this = this;
        var loadPropertyPane = Promise.resolve(webPart);
        var isEditOrClassic = webPart.displayMode === _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["DisplayMode"].Edit || _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["Environment"].type === _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["EnvironmentType"].ClassicSharePoint;
        if (
        // Classic pages behave differently, page and web part can be in different modes
        // hence tackling it in a different way. This is to fix a sev 1 so keeping the changes minimal.
        // We might revisit the logic in future, as required.
        isEditOrClassic &&
            !this._propertyPane) {
            var propertyPaneQosMonitor_1 = new _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__["_QosMonitor"]('ClientSideWebPartManager._loadPropertyPaneModule');
            var propertyPaneLoader = this._host.serviceScope.consume(_PropertyPaneLoader__WEBPACK_IMPORTED_MODULE_8__["default"].serviceKey);
            loadPropertyPane = propertyPaneLoader.propertyPane
                .then(function (propertyPane) {
                _this._propertyPane = propertyPane;
                _this._registerPendingPropertyPaneConsumers();
                return webPart;
            })
                .catch(function (error) {
                _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__["_TraceLogger"].logErrorData({
                    source: ClientSideWebPartManager._logSource,
                    error: error
                });
                propertyPaneQosMonitor_1.writeUnexpectedFailure('UnhandledError', error);
                throw error;
            });
        }
        return loadPropertyPane;
    };
    ClientSideWebPartManager.prototype._getDataUpdatedEventName = function (webPartInstanceId) {
        return "WebPart_" + webPartInstanceId + "_dataUpdated";
    };
    /**
     * Registers a component as a property pane consumer.
     * @param instanceId - Instance id of the consumer, to be registered with the property pane.
     */
    ClientSideWebPartManager.prototype._registerWebPartAsPropertyPaneConsumer = function (instanceId) {
        if (instanceId) {
            var wp = undefined;
            for (var _i = 0, _a = ClientSideWebPartManager._webPartManagerList; _i < _a.length; _i++) {
                var manager = _a[_i];
                wp = manager._webParts.get(instanceId);
                if (wp) {
                    if (this._propertyPane) {
                        this._propertyPane.registerConsumer(instanceId, wp);
                    }
                    else {
                        this._propertyPaneConsumerQueue.set(instanceId, wp);
                    }
                    break;
                }
            }
        }
    };
    /**
     * Creates an absolute url with the isolatedDomain parameter.
     * @param isolatedDomain - a domain without the protocol. Ex: "PrepSPO-appFEEAB5CE1CB0421FB1AAE5D09E0A8AAA.spgrid.com"
     * @param absoluteUrl - url with protocol that may or may not contain a path. Ex: "https://prepspo.spgrid.com"
     */
    ClientSideWebPartManager.prototype._ensureUrl = function (isolatedDomain, absoluteUrl) {
        if (!isolatedDomain) {
            return absoluteUrl;
        }
        // replace the domain in "https://domain/path" with isolatedDomain
        var slashAdded = false;
        if (absoluteUrl.charAt(absoluteUrl.length - 1) !== '/') {
            absoluteUrl = absoluteUrl + '/';
            slashAdded = true;
        }
        absoluteUrl = absoluteUrl.replace(ClientSideWebPartManager._domainRegex, "https://" + isolatedDomain + "/");
        if (slashAdded) {
            // Remove the ending slash
            absoluteUrl = absoluteUrl.substr(0, absoluteUrl.length - 1);
        }
        return absoluteUrl;
    };
    ClientSideWebPartManager.prototype._registerPendingPropertyPaneConsumers = function () {
        var _this = this;
        this._propertyPaneConsumerQueue.forEach(function (consumer, instanceId) {
            _this._propertyPane.registerConsumer(instanceId, consumer);
        });
    };
    ClientSideWebPartManager.prototype._closeIsolatedPropertyPaneIfRequired = function () {
        ClientSideWebPartManager._webPartManagerList.forEach(function (cswpm) {
            if (cswpm._iframedWebPartController) {
                cswpm._iframedWebPartController.requestPropertyPaneAction('Close');
            }
        });
    };
    /**
     * Load the fabric core library, for third-party web parts if required.
     * @param context - Current context of the web part manager
     * @param qosMonitor - qos monitor for the current flow
     */
    ClientSideWebPartManager.prototype._loadLegacyFabricCssIfRequired = function (context) {
        var _this = this;
        var _a, _b;
        var manifest = context.manifest;
        // We will add the classname for all 3rd party web parts, as many of 3rd party devs use the css not as
        // documentation required.
        var isLegacyFabricCss = _microsoft_sp_component_base__WEBPACK_IMPORTED_MODULE_0__["_LegacyThirdPartyFabricCoreLoader"].needLegacyFabricCss(manifest);
        if (isLegacyFabricCss || !manifest.isInternal) {
            (_b = (_a = context.domElement) === null || _a === void 0 ? void 0 : _a.classList) === null || _b === void 0 ? void 0 : _b.add('ms-SPLegacyFabricBlock');
        }
        return _microsoft_sp_component_base__WEBPACK_IMPORTED_MODULE_0__["_LegacyThirdPartyFabricCoreLoader"]
            .forceLoad(manifest)
            .then(function () { return Promise.resolve(); })
            .catch(function (error) {
            _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__["_TraceLogger"].logErrorData({
                source: ClientSideWebPartManager._logSource,
                error: error,
                serviceScope: _this._host.serviceScope
            });
            if (_common_KillSwitches__WEBPACK_IMPORTED_MODULE_10__["default"].isRejectLegacyFabricErrorKSActivated()) {
                Promise.reject(error); /* tslint:disable-line:no-floating-promises */
            }
            else {
                throw error;
            }
        });
    };
    /**
     * Loads the property pane module asynchronously, if not already loaded.
     */
    ClientSideWebPartManager.prototype._loadPropertyPaneModuleOld = function (renderDetailsPane) {
        var _this = this;
        if ((this._displayMode === _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["DisplayMode"].Edit ||
            renderDetailsPane ||
            // Classic pages behave differently, page and web part can be in different modes
            // hence tackling it in a different way. This is to fix a sev 1 so keeping the changes minimal.
            // We might revisit the logic in future, as required.
            _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["Environment"].type === _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["EnvironmentType"].ClassicSharePoint) &&
            !this._propertyPane) {
            var propertyPaneQosMonitor_2 = new _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__["_QosMonitor"]('ClientSideWebPartManager._loadPropertyPaneModule');
            this._propertyPaneLoader = this._host.serviceScope.consume(_PropertyPaneLoader__WEBPACK_IMPORTED_MODULE_8__["default"].serviceKey);
            return this._propertyPaneLoader.propertyPane
                .then(function (propertyPane) {
                _this._propertyPane = propertyPane;
                _this._registerPendingPropertyPaneConsumers();
                return propertyPane;
            })
                .catch(function (error) {
                _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__["_TraceLogger"].logErrorData({
                    source: ClientSideWebPartManager._logSource,
                    error: error
                });
                propertyPaneQosMonitor_2.writeUnexpectedFailure('UnhandledError', error);
                throw error;
            });
        }
        else {
            return Promise.resolve(undefined);
        }
    };
    /**
     * Reference to the instances of all ClientSideWebPartManager instances in the app.
     */
    ClientSideWebPartManager._webPartManagerList = [];
    ClientSideWebPartManager._domainRegex = new RegExp('^https://[^/]*/');
    /*
     * Web part manager log source
     */
    ClientSideWebPartManager._logSource = _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__["_LogSource"].create('ClientSideWebPartManager');
    ClientSideWebPartManager._manifestRequestPromiseCache = {};
    return ClientSideWebPartManager;
}());
/* harmony default export */ __webpack_exports__["default"] = (ClientSideWebPartManager);


/***/ }),

/***/ "OHkx":
/*!****************************************!*\
  !*** ./lib/utils/ExecuteAndReThrow.js ***!
  \****************************************/
/*! exports provided: executeAndReThrow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "executeAndReThrow", function() { return executeAndReThrow; });
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/sp-diagnostics */ "ut3N");
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__);
/**
 * @Copyright (c) Microsoft Corporation.  All rights reserved.
 *
 * Execute the passed in delegate and re-throw the passed exception
 */


/**
 * Execute the passed in delegate and re-throw a custom error.
 * @param method - method to execute.
 * @param errorToThrow - custom error to throw.
 * @param logSource - log source.
 */
/* tslint:disable:export-name */
function executeAndReThrow(method, errorToThrow, logSource) {
    /* tslint:enable:export-name */
    _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["Validate"].isNotNullOrUndefined(method, 'method');
    try {
        method();
    }
    catch (e) {
        // Defensive code as this method should never ever throw
        if (logSource) {
            _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_0__["_TraceLogger"].logError(logSource, new Error('Error: ' + e));
        }
        errorToThrow.innerError = e;
        throw errorToThrow;
    }
}


/***/ }),

/***/ "Pk8u":
/*!**********************************************!*\
  !*** external "@microsoft/sp-lodash-subset" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_Pk8u__;

/***/ }),

/***/ "SmEi":
/*!***************************************!*\
  !*** ./lib/core/WebPartFormFactor.js ***!
  \***************************************/
/*! exports provided: WebPartFormFactor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebPartFormFactor", function() { return WebPartFormFactor; });
/**
 * Form factor of the web part.
 *
 * @remarks
 * This will change based on how the web part is used, not by the web part itself.
 * In cases like web parts used in Teams tab or as App pages, it will have full size form factor.
 * If a web part is render in a canvas, with other web parts, it will have a canvas web part form factor.
 *
 * @beta
 */
// tslint:disable-next-line:typedef variable-name
var WebPartFormFactor = {
    /**
     * Standard form factor. This means the web part is rendered in a canvas, potentially with other web parts.
     * In this case, the width is determined by the container, and web part self-adjust for height.
     */
    Standard: 0,
    /**
     * Full size form factor. This means the web part is rendered in full size, taking all space available in the page.
     *
     * @remarks
     * This is the case for Teams tabs or single web part App pages.
     */
    FullSize: 1,
    /**
     * Full width form factor. This means the web part has 100% of the width of the page, but the height is controlled
     * by the web part.
     *
     * @alpha
     */
    FullWidth: 2
};


/***/ }),

/***/ "Ti3B":
/*!*********************************!*\
  !*** ./lib/core/BaseWebPart.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _microsoft_sp_component_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/sp-component-base */ "7Awa");
/* harmony import */ var _microsoft_sp_component_base__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_component_base__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @microsoft/sp-diagnostics */ "ut3N");
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @microsoft/sp-lodash-subset */ "Pk8u");
/* harmony import */ var _microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_ExecuteAndReThrow__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/ExecuteAndReThrow */ "OHkx");
/* harmony import */ var _utils_Object__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/Object */ "bfIN");
/* harmony import */ var _SPPropertyPane__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../SPPropertyPane */ "kj+3");
/* harmony import */ var _error_SPWebPartError__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./error/SPWebPartError */ "ybLs");
/* harmony import */ var _loc_Strings_resx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./loc/Strings.resx */ "kGqN");
var _loc_Strings_resx__WEBPACK_IMPORTED_MODULE_9___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./loc/Strings.resx */ "kGqN", 1);
// Copyright (c) Microsoft. All rights reserved.










/**
 * This abstract class implements the UI-agnostic base functionality for a client-side web part.
 * The purpose is to allow a common core between 2D and MR WebParts.
 *
 * @privateRemarks
 * The _refresh() and _dynamicPropertyRefresh() API are the only API that are
 * mandatory to be implemented by our base WebPart classes.
 *
 * @public
 */
var BaseWebPart = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(BaseWebPart, _super);
    /**
     * Constructor for the `BaseWebPart` class.
     *
     * @remarks
     * It is highly recommended that the web part use the OnInit API to perform any web part specific initialization.
     * Most of the web part features like this.context and this.properties are not available to be used before the
     * the onInit part of the web part loading lifecycle.
     */
    function BaseWebPart() {
        var _this = _super.call(this) || this;
        _this._initialized = false;
        _this._baseLogSource = _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_3__["_LogSource"].create('BaseWebPart');
        /**
         * It makes sure we only log edit events once during one editing session.
         */
        _this._hasEditLogged = false;
        _this._emptyResolvedPromise = Promise.resolve();
        _this._disposeDynamicPropertiesIfRequired = _this._disposeDynamicPropertiesIfRequired.bind(_this);
        // Disallow instantiation of the base class by itself
        // tslint:disable-next-line:no-string-literal no-any
        if (_this.constructor['name'] === 'BaseWebPart') {
            throw _error_SPWebPartError__WEBPACK_IMPORTED_MODULE_8__["SPWebPartError"].create(_error_SPWebPartError__WEBPACK_IMPORTED_MODULE_8__["SPWebPartErrorCode"].BaseConstructError);
        }
        return _this;
    }
    Object.defineProperty(BaseWebPart.prototype, "previewImageUrl", {
        /**
         * This property points to the preview image for the web part. The base implementation returns undefined. Web parts
         * that want to provide a valid preview image url need to override this API. The preview image url can be used to
         * create a preview of the web part or of the page on which the web part is present.
         * virtual
         */
        get: function () {
            return undefined;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BaseWebPart.prototype, "displayMode", {
        /**
         * This property is the current display mode of the web part.
         *
         * @readonly
         */
        get: function () {
            return this._displayMode;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BaseWebPart.prototype, "dataVersion", {
        /**
         * The value of this property is stored in the serialized data of the web part to allow developers to manage
         * versioning of their web part. The default version is 1.0
         */
        get: function () {
            return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__["Version"].parse('1.0');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BaseWebPart.prototype, "properties", {
        /**
         * This property is the pointer to the custom property bag of the web part.
         *
         * @readonly
         */
        get: function () {
            if (this._initialized) {
                return this._properties;
            }
            else {
                throw _error_SPWebPartError__WEBPACK_IMPORTED_MODULE_8__["SPWebPartError"].create(_error_SPWebPartError__WEBPACK_IMPORTED_MODULE_8__["SPWebPartErrorCode"].NotInitializedError);
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BaseWebPart.prototype, "propertiesMetadata", {
        /**
         * This property defines metadata for the web part property bag. The metadata can help SharePoint understand
         * the content of the properties better and perform relevant services on the data.
         * virtual
         *
         * @remarks
         * See {@link IWebPartPropertiesMetadata} for more information about how to define metadata
         */
        get: function () {
            return undefined;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BaseWebPart.prototype, "disableReactivePropertyChanges", {
        /**
         * This property is used to change the web part's property pane interaction from Reactive to NonReactive.
         * virtual
         *
         * @remarks
         * The default behavior is Reactive.
         *
         * Reactive implies that changes made in the PropertyPane are transmitted to the web part instantly and the user can
         * see instant updates. This helps the page creator get instant feedback and decide if they should keep the new
         * configuration changes or not.
         *
         * NonReactive implies that the configuration changes are transmitted to the web part only after "Apply" PropertyPane
         * button is clicked.
         */
        get: function () {
            return false;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BaseWebPart.prototype, "accessibleTitle", {
        /**
         * This property points to the accessible title of web part made available to screen readers. The base implementation
         * returns that default title in the manifest. Web parts that want to provide more descriptive title containing
         * contextual information need to override this API.
         * virtual
         */
        get: function () {
            return this._getDefaultAccessibleTitle();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BaseWebPart.prototype, "title", {
        /**
         * Title of the WebPart
         *
         * @readonly
         */
        get: function () {
            return this._title;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BaseWebPart.prototype, "iconImageUrl", {
        /**
         * Icon image URL of the WebPart
         *
         * @internal
         */
        get: function () {
            return this._iconImageUrl;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BaseWebPart.prototype, "description", {
        /**
         * Description of the WebPart
         *
         * @readonly
         */
        get: function () {
            return this._description;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BaseWebPart.prototype, "persistedProperties", {
        /**
         * This property is a pointer to the current set of properties which are already or needs to be persisted.
         *
         * @readonly
         */
        get: function () {
            return this.disableReactivePropertyChanges && this._backupProperties
                ? this._backupProperties
                : this.properties;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * API to get property pane configuration asynchronously.
     *
     * @internal
     */
    // tslint:disable-next-line:no-any
    BaseWebPart.prototype._getPropertyPaneData = function (isDetails, context) {
        var _this = this;
        return this._loadPropertyPaneResources().then(function () {
            var configuration = isDetails
                ? _this.getDetailsPaneConfiguration(context)
                : _this.getPropertyPaneConfiguration();
            _this._fixUpDynamicDataConfiguration(configuration);
            return {
                webPartId: _this.context.instanceId,
                title: _this.title,
                isReactive: !_this.disableReactivePropertyChanges,
                configuration: configuration,
                properties: _this._cloneProperties(_this.properties),
                // Below methods are being overridden in the PropertyPane controller and hence
                // we do not need to bind it here. We still do not want to make it optional because
                // that could lead to unwanted bugs.
                onPropertyPaneFieldChanged: undefined,
                onConfigurationEvent: undefined,
                onRendered: _this.onPropertyPaneRendered,
                dynamicConfiguration: {
                    defaultCallback: (function () {
                        _this._dynamicPropertyRefresh();
                    }).bind(_this),
                    dynamicDataProvider: _this.context.dynamicDataProvider
                }
            };
        });
    };
    /**
     * API to enable asynchronous loading of property pane related resources of a web part.
     *
     * @internal
     */
    BaseWebPart.prototype._loadPropertyPaneResources = function () {
        // Below promise will be undefined only when the web part is opening its property pane for the first time.
        if (!this._loadPropertyPaneResourcesPromise) {
            this._loadPropertyPaneResourcesPromise = this.loadPropertyPaneResources();
        }
        return this._loadPropertyPaneResourcesPromise;
    };
    /**
     * Internal API which is invoked when a property field is changed on the property pane.
     * This API is invoked only for the reactive property pane.
     *
     * @remarks
     * If the old value is of type DynamicProperty, but the new value is a static value
     * (This could happen when the 'targetProperty' is same for both a DynamicField on the
     * Dynamic Data Widget and a TextField which represents afore mentioned Dynamic Field
     * when the DD connection is removed by the end user on the property pane UI. In that
     * case, property pane sends in the static value which corresponds to the dynamic property(DP)
     * present before the DD connection is removed)
     *  then to respect the web part developer's choice of that target property being a DP,
     *  we create a new instace of DP and assign the incoming value as the static value
     *    then update the properties bag with the newly created DP instance.
     * else, update the properties bag with the new value for the property.
     *
     * @param propertyPath - JSON path of the property in the property bag.
     * @param newValue - New value of the property.
     *
     * @internal
     */
    BaseWebPart.prototype._onPropertyPaneFieldChanged = function (propertyPath, newValue /* tslint:disable-line:no-any */, fieldType) {
        var _this = this;
        var oldValue = _microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_4__["get"](this._properties, propertyPath); // tslint:disable-line:no-any
        // Property updates and web part re-rendering happens only in the following cases:
        //  case 1: when there is no change in the old and new value or
        //  case 2: when the event is coming from a button click(this is because, in this case
        //          regtardless of what newValue is we need to re-render the web part.)
        //  case 3: when the event is coming from a custom field(this is because, framework wouldn't
        //          know what exactly changed inside the custom field and we come to this spot in case
        //          case of custom field only when the web part specifically requests it.)
        if (!_microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_4__["isEqual"](oldValue, newValue) ||
            fieldType === _SPPropertyPane__WEBPACK_IMPORTED_MODULE_7__["PropertyPaneFieldType"].Button ||
            fieldType === _SPPropertyPane__WEBPACK_IMPORTED_MODULE_7__["PropertyPaneFieldType"].Custom) {
            // Create backupProperties if it is non-reactive property pane.
            if (this.disableReactivePropertyChanges && !this._backupProperties) {
                this._backupProperties = this._cloneProperties(this.properties);
            }
            if (oldValue instanceof _microsoft_sp_component_base__WEBPACK_IMPORTED_MODULE_1__["DynamicProperty"] && !(newValue instanceof _microsoft_sp_component_base__WEBPACK_IMPORTED_MODULE_1__["DynamicProperty"])) {
                var newDynamicProperty = new _microsoft_sp_component_base__WEBPACK_IMPORTED_MODULE_1__["DynamicProperty"](// tslint:disable-line:no-any
                this.context.dynamicDataProvider, (function () {
                    _this._dynamicPropertyRefresh();
                }).bind(this));
                newDynamicProperty.setValue(newValue);
                newValue = newDynamicProperty;
            }
            this._updateProperty(propertyPath, newValue);
            this.onPropertyPaneFieldChanged(propertyPath, oldValue, newValue);
            this._afterPropertyUpdated(!this.disableReactivePropertyChanges);
        }
    };
    /**
     * Internal API which is invoked when one of the predefined configuration events
     * (defined in `PropertyPaneLifeCycleEvent` enum.) is triggered.
     *
     * See PropertyPaneLifeCycleEvent for more details on the event definitions.
     *
     * @param event - Type of PropertyPaneLifeCycleEvent.
     * @param isOrWillPaneOpen - Indicates whether the pane is already open to configure or
     *  will open now, to be configured.
     *
     * @internal
     */
    BaseWebPart.prototype._onPropertyPaneLifeCycleEvent = function (event) {
        var _this = this;
        // Invoke the callback so that the host can handle the property pane life cycle event.
        if (this.context.host.propertyPaneLifeCycleEventCallback) {
            this.context.host.propertyPaneLifeCycleEventCallback(event, {
                webPartData: this._internalSerialize(),
                isPropertyPaneReactive: this._isPropertyPaneReactive()
            });
        }
        switch (event) {
            case 'ConfigurationStart':
                this._loadPropertyPaneResources()
                    .then(function () { return _this.onPropertyPaneConfigurationStart(); })
                    .catch(function (e) {
                    return _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_3__["_TraceLogger"].logVerboseData({ source: _this._baseLogSource, message: e.message });
                });
                break;
            case 'ConfigurationComplete':
                // Make sure we discard any backed up properties in the non-reactive mode.
                if (this.disableReactivePropertyChanges && this._backupProperties) {
                    // resetting the properties bag.
                    this._properties = this._backupProperties;
                    this._backupProperties = undefined;
                }
                this.onPropertyPaneConfigurationComplete();
                break;
            case 'ApplyClicked':
                // Updating the _backUpProperties with new set of properties.
                this._backupProperties = this.properties;
                this.onAfterPropertyPaneChangesApplied();
                this._afterPropertyUpdated(true);
                break;
        }
    };
    /**
     * Indicates whether the property pane is reactive or not.
     *
     * @remarks
     * The default behavior is Reactive.
     *
     * Reactive implies that changes made in the PropertyPane are transmitted to the web part instantly and the user can
     * see instant updates. This helps the page creator get instant feedback and decide if they should keep the new
     * configuration changes or not.
     *
     * NonReactive implies that the configuration changes are transmitted to the web part only after "Apply" PropertyPane
     * button is clicked.
     *
     * @internal
     */
    BaseWebPart.prototype._isPropertyPaneReactive = function () {
        return !this.disableReactivePropertyChanges;
    };
    /**
     * Internal API to serialize the web part properties.
     *
     * @internal
     */
    BaseWebPart.prototype._internalSerialize = function () {
        var _this = this;
        var data; // tslint:disable-line:no-any
        Object(_utils_ExecuteAndReThrow__WEBPACK_IMPORTED_MODULE_5__["executeAndReThrow"])(function () {
            _this.onBeforeSerialize();
            var propertiesJson = JSON.stringify(_this.properties);
            // Only log edit, if properties have changed and it haven't been logged.
            if (!_this._hasEditLogged && _this._initPropertiesSnapshot !== propertiesJson) {
                var isInternal = !!_this.context.manifest.isInternal;
                var logEntry = new _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_3__["_LogEntry"](_this._baseLogSource.id, 'WebPartEdited', _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_3__["_LogType"].Event, {
                    alias: _this.context.manifest.alias,
                    isInternal: isInternal.toString()
                });
                _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_3__["_EngagementLogger"].logEventWithLogEntry(logEntry);
                _this._hasEditLogged = true;
            }
            var serializedData = _this._serialize();
            _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__["Validate"].isNotNullOrUndefined(serializedData.dataVersion, 'serialized data version');
            // Avoid doing extra work if we know there is no dynamic data
            if (propertiesJson && propertiesJson.indexOf(_microsoft_sp_component_base__WEBPACK_IMPORTED_MODULE_1__["DynamicProperty"]._TYPE_NAME) !== -1) {
                _this._serializeDynamicData(serializedData);
            }
            data = {
                // The serialized data wrapped by the framework
                id: _this.context.manifest.id,
                instanceId: _this.context.instanceId,
                title: _this.title,
                description: _this.description,
                // The serialized data provided by the web part
                serverProcessedContent: serializedData.serverProcessedContent,
                dynamicDataPaths: serializedData.dynamicDataPaths,
                dynamicDataValues: serializedData.dynamicDataValues,
                dataVersion: serializedData.dataVersion.toString(),
                properties: serializedData.properties
            };
        }, _error_SPWebPartError__WEBPACK_IMPORTED_MODULE_8__["SPWebPartError"].create(_error_SPWebPartError__WEBPACK_IMPORTED_MODULE_8__["SPWebPartErrorCode"].SerializationFailed, this.context.webPartTag), this._baseLogSource);
        return data;
    };
    /**
     * Internal API to dispose the web part.
     *
     * See onDispose for more details.
     *
     * @internal
     */
    BaseWebPart.prototype._internalDispose = function () {
        this._disposeDynamicPropertiesIfRequired();
        _super.prototype.dispose.call(this);
    };
    /**
     * Internal API triggered upon a resize of the DOM window's viewport
     *
     * @internal
     */
    BaseWebPart.prototype._internalOnAfterResize = function () {
        /* EMPTY BLOCK */
    };
    /**
     * Internal API to update the web part data.
     *
     * !!!WARNING!!! updating the web part data can be risky. If you end up updating the web part properties
     *  to an invalid format, this could cause the web part to persist invalid data format.
     *
     * @internal
     */
    BaseWebPart.prototype._internalSetWebPartData = function (webPartData) {
        // tslint:disable-line:no-unused-variable
        var oldProperties = this.properties;
        this._internalDeserialize(webPartData);
        this.onAfterPropertiesUpdatedExternally(oldProperties);
    };
    /**
     * Internal API to switch the web part's display mode. This API updates the display mode and then re-renders the web
     * part in the new mode.
     * @internal
     */
    BaseWebPart.prototype._internalSetDisplayMode = function (newDisplayMode) {
        if (this._displayMode !== newDisplayMode) {
            var oldDisplayMode = this._displayMode;
            this._displayMode = newDisplayMode;
            this.onDisplayModeChanged(oldDisplayMode);
        }
    };
    /**
     * Internal API to set the dirty bit on the web part host if the web part properties have changed.
     * @internal
     */
    BaseWebPart.prototype._internalSetDirtyBit = function () {
        // This method could get invoked in classic pages in read mode also. Just ignore the call.
        if (this.displayMode === _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__["DisplayMode"].Read) {
            return;
        }
        var serializedState = this._internalSerialize();
        var newState = JSON.stringify(serializedState);
        // Don't set dirty bit the first time because the Canvas
        // would have done it when the webpart got added.
        if (!this._previousState) {
            this._previousState = newState;
        }
        else if (this._previousState !== newState && this.context.host.setDirty) {
            this.context.host.setDirty(this.context.instanceId, serializedState);
            this._previousState = newState;
        }
    };
    /**
     * This is the initial entry point, which is called by the `ClientSideWebPartManager` immediately
     * after the web part is constructed.  The initialization contract is internal.
     *
     * @param addedFromPersistedData - Tells the Web Part it will need to reinstate some properties
     * from server processed content (see BaseWebPart._reInstateServerProcessedData)
     *
     * @internal
     */
    BaseWebPart.prototype._internalInitialize = function (webPartContext, addedFromPersistedData, mode) {
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__["Validate"].isNotNullOrUndefined(webPartContext, 'webPartContext');
        /* tslint:enable:use-named-parameter */
        Object(_utils_Object__WEBPACK_IMPORTED_MODULE_6__["deepFreeze"])(webPartContext.manifest);
        _super.prototype._initializeContext.call(this, webPartContext);
        // Bind the callbacks
        this.onDispose = this.onDispose.bind(this);
        this.onPropertyPaneRendered = this.onPropertyPaneRendered.bind(this);
        this._initialized = true;
        // Set the display mode of the web part
        this._displayMode = mode;
        // This is important for reinstating properties the way they were
        // before serialization. It must be set before any deserialization occurs.
        this._renderedFromPersistedData = addedFromPersistedData;
        if (!this._renderedFromPersistedData) {
            var isInternal = this.context.manifest.isInternal || false;
            var logEntry = new _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_3__["_LogEntry"](this._baseLogSource.id, 'WebPartAdded', _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_3__["_LogType"].Event, {
                alias: this.context.manifest.alias,
                isInternal: isInternal.toString()
            });
            _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_3__["_EngagementLogger"].logEventWithLogEntry(logEntry);
        }
    };
    /**
     * Internal base implementation of the web part data deserialization.
     *
     * @param data - web part data
     *
     * @internal
     */
    BaseWebPart.prototype._internalDeserialize = function (data) {
        if (data) {
            if (data.title) {
                this._title = data.title;
            }
            if (data.description) {
                this._description = data.description;
            }
            if (data.iconImageUrl) {
                this._iconImageUrl = data.iconImageUrl;
            }
            // For backward-compatibality, convert non-string versions to '1.0'
            // Because we used to serialize the version object in the early versions
            if (typeof data.dataVersion !== 'string') {
                data.dataVersion = '1.0';
            }
            // Note: it is okay not to create clones here
            var deserializedData = {
                properties: data.properties,
                serverProcessedContent: data.serverProcessedContent,
                dynamicDataPaths: data.dynamicDataPaths,
                dynamicDataValues: data.dynamicDataValues,
                dataVersion: _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__["Version"].tryParse(data.dataVersion)
            };
            this._deserializeDynamicData(deserializedData);
            // Note: Initialization of DynamicProperties should always happen after the
            // properties are deserialized. This ensures that all the properties have proper
            // values constructed with types, if required.
            this._initializeDynamicPropertiesIfRequired(deserializedData.properties);
            /* tslint:disable-next-line:no-any */
            var deserializedPropsObject = this._reInstateServerProcessedData(deserializedData.properties, deserializedData.serverProcessedContent);
            // Give the web part an opportunity to deserialize the properties. If the web part
            // returns a valid property bag, use it as is else perform default deserialization.
            var fixedProps = this.onAfterDeserialize(deserializedPropsObject, deserializedData.dataVersion);
            // Cache the properties data just deserialized.
            this._initPropertiesSnapshot = JSON.stringify(deserializedPropsObject);
            if (!fixedProps) {
                throw _error_SPWebPartError__WEBPACK_IMPORTED_MODULE_8__["SPWebPartError"].create(_error_SPWebPartError__WEBPACK_IMPORTED_MODULE_8__["SPWebPartErrorCode"].OnAfterDeserializeReturnedNull, this.context.webPartTag);
            }
            this._properties = fixedProps;
        }
    };
    /**
     * This event method is called when the web part is initialized.
     * virtual
     *
     * @remarks
     * This API should be overridden to perform long running operations e.g. data fetching from a remote service before
     * the initial rendering of the web part. The loading indicator is displayed during the lifetime of this method.
     * This API is called only once during the lifecycle of a web part.
     */
    BaseWebPart.prototype.onInit = function () {
        // Return a resolved promise by default
        return Promise.resolve(undefined);
    };
    /**
     * This event method is called when the display mode of a web part is changed.
     * virtual
     *
     * @remarks
     * The default implementation of this API calls
     * the web part render method to re-render the web part with the new display mode. If a web part developer does not
     * want a full re-render to happen on display mode change, they can override this API and perform specific updates
     * to the web part DOM to switch its display mode.
     *
     * @remarks
     * If the web part is initialized or re-initialized in a different display mode then this
     * lifecycle method is not called.
     *
     * @param oldDisplayMode - The old display mode.
     */
    BaseWebPart.prototype.onDisplayModeChanged = function (oldDisplayMode) {
        /* EMPTY BLOCK */
    };
    /**
     * This event method is called before the web part is serialized.
     * virtual
     *
     * @remarks
     * The default implementation is a no-op. The serialization
     * process serializes the web part property bag i.e. this.properties. This API gives the web part a chance to
     * update it's property bag before the serialization happens. Some web part's may keep their state other objects
     * or even in the DOM. If a web part needs to persist some of that state, it needs to override this API and update
     * the web part property bag to the latest state. If a web part updates the property bag with invalid property
     * values, those will get persisted. So that should be avoided. The web part property bag should always contain
     * valid property values.
     */
    BaseWebPart.prototype.onBeforeSerialize = function () {
        /* EMPTY BLOCK */
    };
    /**
     * This API is called after the web part is deserialized to an object, right before the property bag is populated.
     * virtual
     *
     * @remarks
     * The default implementation is a no-op. A web part developer can override this API if the deserialized object
     * does not fully reflect the initial state of the property bag. This gives the web part developer a chance to
     * populate the property bag right after the data is deserialized to an object.
     *
     * An important scenario to use deserialize is upgrading. An upgraded web part may load the data
     * that was serialized by an older version of the web part that supported a different schema of the property bag,
     * resulting the deserialized object to be incosistent with the current schema of the property bag. The developer
     * can use `onAfterDeserialize` to check the dataVersion and fix the property bag.
     *
     * @param deserializedObject - The object deserialized from the stored data. Note that the schema of  this object
     * is not necessarily consistent with the current property bag, because the serialization could have been done by
     * an older version of the web part
     * @param dataVersion - The data version of the stored data being deserialized. You can use this value to determine
     * if the data was serialized by an older web part. Web parts can define their data version by overriding the
     * dataVersion property.
     *
     * @returns The property bag of the web part
     */
    /* tslint:disable-next-line:no-any */
    BaseWebPart.prototype.onAfterDeserialize = function (deserializedObject, dataVersion) {
        return deserializedObject;
    };
    /**
     * This API enables asynchronous loading of property pane related resources of the web part.
     * @virtual
     *
     * @remarks
     * If not overridden by the web part, base web part resolves the promise immediately.
     *
     * This method is called before any property pane APIs are called.
     * Other property pane APIs cannot be called until this promise is resolved.
     * No other property pane related events are raised except 'PropertyPaneConfigurationComplete'.
     *
     * 'PropertyPaneConfigurationComplete' event can be raised to clean up any pending resources
     * including 'loadPropertyPaneResources' promise.
     */
    BaseWebPart.prototype.loadPropertyPaneResources = function () {
        return this._emptyResolvedPromise;
    };
    /**
     * This API is used to ger the configuration to build the property pane for the web part. If the web part wants
     * to use the PropertyPane for configuration, this API needs to be overridden and the web part needs to return
     * the configuration for the PropertyPane.
     *
     * This API is not invoked until the 'loadPropertyPaneResources' promise is resolved.
     *
     * See IPropertyPane and other PropertyPane integration wiki documentation for more details.
     * virtual
     */
    BaseWebPart.prototype.getPropertyPaneConfiguration = function () {
        return {
            pages: []
        };
    };
    /**
     * This API is used to get the configuration to build the property pane for details.
     * If the web part wants to use the PropertyPane for details configuration,
     * this API needs to be overridden and the web part needs to return the configuration for details.
     *
     * This API is not invoked until the 'loadPropertyPaneResources' promise is resolved.
     *
     * See IPropertyPane and other PropertyPane integration wiki documentation for more details.
     * virtual
     *
     * @param context - additional context passed to getPropertyPaneDetailsConfiguration
     *
     * @alpha
     */
    // tslint:disable-next-line:no-any
    BaseWebPart.prototype.getDetailsPaneConfiguration = function (context) {
        return {
            pages: []
        };
    };
    /**
     * This API should be used to refresh the contents of the PropertyPane.
     * virtual
     *
     * @remarks
     * This API is called at the end of the web part lifecycle on a page. It should be used to dispose any local
     * resources (i.e. DOM elements) that the web part is holding onto. This API is expected to be called in scenarios
     * like page navigation i.e. the host is transitioning from one page to another and disposes the page that is being
     * transitioned out.
     */
    BaseWebPart.prototype.onDispose = function () {
        /* EMPTY BLOCK */
    };
    /**
     * This API is invoked after updating the new value of the property in the property bag when the PropertyPane
     * is being used in Reactive mode.
     * virtual
     *
     * @param propertyPath - JSON path of the property in the property bag.
     *  In the case of custom field, if no target property is provided then a custom value is assigned,
     *  which will be in the form of `__CustomField_<key provided when the custom field is created>`.
     * @param oldValue - Old value of the property.
     *  This value could be undefined/empty in the case of custom field.
     * @param newValue - New value of the property.
     *  This value could be undefined/empty in the case of custom field.
     */
    /* tslint:disable-next-line:no-any */
    BaseWebPart.prototype.onPropertyPaneFieldChanged = function (propertyPath, oldValue, newValue) {
        /* EMPTY BLOCK */
    };
    /**
     * This event method is invoked when the configuration starts on the PropertyPane.
     * virtual
     *
     * @remarks
     * This event method is invoked in the following cases:
     *
     *  - When the PropertyPane is opened.
     *
     *  - When the user switches web parts then the new web part gets this event.
     */
    BaseWebPart.prototype.onPropertyPaneConfigurationStart = function () {
        /* EMPTY BLOCK */
    };
    /**
     * This API is invoked when the configuration is completed on the PropertyPane.
     * virtual
     *
     * @remarks
     * This event method is invoked in the following cases:
     *
     *  - When the CONFIGURATION_COMPLETE_TIMEOUT((currently the value is 5 secs) elapses after the last change.
     *
     *  - When user clicks the "X" (close) button before the CONFIGURATION_COMPLETE_TIMEOUT elapses.
     *
     *  - When user clicks the 'Apply' button before the CONFIGURATION_COMPLETE_TIMEOUT elapses.
     *
     *  - When the user switches web parts then the current web part gets this event.
     */
    BaseWebPart.prototype.onPropertyPaneConfigurationComplete = function () {
        /* EMPTY BLOCK */
    };
    /**
     * This API is invoked after the changes made on the PropertyPane are applied when the PropertyPane is used in
     * Non-Reactive mode. This API is not invoked when the PropertyPane is used in Reactive mode.
     * virtual
     */
    BaseWebPart.prototype.onAfterPropertyPaneChangesApplied = function () {
        /* EMPTY BLOCK */
    };
    /**
     * This API is invoked when the PropertyPane is rendered.
     * virtual
     * @privateRemarks
     * From framework standpoint, we do not want to allow this event handler to be passed in, and trigger it.
     * This api should be deprecated and then removed as part of refactoring.
     */
    BaseWebPart.prototype.onPropertyPaneRendered = function () {
        /* EMPTY BLOCK */
    };
    /**
     * This API is invoked after properties are updated by sources other than the property pane or the web part host.
     * virtual
     *
     * @alpha
     * @param prevProperties - The web part properties before the update.
     */
    BaseWebPart.prototype.onAfterPropertiesUpdatedExternally = function (prevProperties) {
        return this._refresh();
    };
    /**
     * @internal
     */
    BaseWebPart.prototype._internalGetData = function () {
        return this._emptyResolvedPromise;
    };
    /**
     * Gets default accessible title in the format `"<Web part name> web part"`, such as "Image web part".
     * Note: pulled into own method because TypeScript doesn't allow derived classes to call super protected properties.
     *
     * @internal
     */
    BaseWebPart.prototype._getDefaultAccessibleTitle = function () {
        return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__["Text"].format(_loc_Strings_resx__WEBPACK_IMPORTED_MODULE_9__["GenericAccessibleLabelTemplate"], this.title);
    };
    /**
     * This method consumes the properties object from the serialized data and re-applies
     * the field values from the serverProcessedContent. This process will result in the
     * properties bag as it was when the serialization happened.
     */
    /* tslint:disable:no-any */
    BaseWebPart.prototype._reInstateServerProcessedData = function (deserializedProperties, serverProcessedContent) {
        /* tslint:enable:no-any */
        var _this = this;
        if (!deserializedProperties) {
            return {};
        }
        /* tslint:disable-next-line:no-any */
        var fixedProperties = deserializedProperties;
        if (!this._renderedFromPersistedData) {
            return fixedProperties;
        }
        // @privateRemarks Clear out the properties with isHtmlString metadata for security reasons. We only want to
        // propagate values from the serverProcessed content as they are security sanitized by the server. Note, there is a
        // scenario when an end user can update the list item with whatever data they like. In that case, they can
        // eliminate the serverProcessed content and that can cause a potential security hole. Hence, we always want
        // clear out the property values that have isHtmlString metadata.
        this._forEachPropertyWithMetaData(function (propPath, metadata) {
            // This is a temporary hack to make sure that the webparts published using the Mobile app keep rendering.
            // Currently, for those pages, the DocumentEmbedWebPart does not have HTMLProperties pupulated. Hence,
            // we are doing this work around to not unset the property bag.
            // (SPPPLAT VSO#289988) tracks removal of this code.
            if (_this.context.manifest.id !== 'b7dd04e1-19ce-4b24-9132-b60a1c2b910d' && metadata.isHtmlString) {
                _microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_4__["set"](fixedProperties, propPath, undefined);
            }
        }, fixedProperties);
        if (serverProcessedContent) {
            // Re-instate the server processed values in the specified path in the property bag.
            // There is a change that the new shape of the property bag is different. But the
            // the purpose of the inbuilt deserialization is to provide the same properties object
            // back to the web part that has the same shape as when the serialization happened.
            var htmlMaps = [
                serverProcessedContent.htmlStrings,
                serverProcessedContent.searchablePlainTexts,
                serverProcessedContent.imageSources,
                serverProcessedContent.links,
                serverProcessedContent.componentDependencies
            ];
            for (var _i = 0, htmlMaps_1 = htmlMaps; _i < htmlMaps_1.length; _i++) {
                var htmlMap = htmlMaps_1[_i];
                if (htmlMap) {
                    for (var propPath in htmlMap) {
                        /* tslint:disable-line:forin */
                        // WARNING: This is critical code. Please do not modify without fully understanding the data pipeline
                        var value = htmlMap[propPath];
                        if (typeof value === 'string') {
                            _microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_4__["set"](fixedProperties, propPath, value);
                        }
                    }
                }
            }
        }
        return fixedProperties;
    };
    /**
     * Iterates and validates each metadata property before calling metadata processor.
     *
     * @param metadataProcessor - Callback handler to to process validated metadata.
     * @param properties - Optional Properies to process instead of default this.properties
     * @param iteration - Current iteration in case path is being iterated based on wildcard *
     */
    BaseWebPart.prototype._forEachPropertyWithMetaData = function (metadataProcessor, properties /* tslint:disable-line:no-any */) {
        if (this.propertiesMetadata) {
            var _loop_1 = function (propPath) {
                /* tslint:disable-line:forin */
                var metadata = this_1.propertiesMetadata[propPath];
                this_1._validateAndIteratePath(propPath, properties || this_1.properties, function (fixedPropPath, index) {
                    metadataProcessor(fixedPropPath, metadata, index);
                });
            };
            var this_1 = this;
            for (var propPath in this.propertiesMetadata) {
                _loop_1(propPath);
            }
        }
    };
    /**
     * Validates path and iterate over one or multiple wildcard paths
     *
     * @param propPath - Original property path provided in metadata
     * @param properties - Properties to look for the given path.
     * @param propertyPathHandler - Handler to process validated and fixed path
     */
    BaseWebPart.prototype._validateAndIteratePath = function (propPath, properties /* tslint:disable-line:no-any */, propertyPathHandler) {
        var wildcardCount = (propPath.match(/\*/g) || []).length;
        if (wildcardCount > 1) {
            // Skip if there are more than one asterisks in the path (not supported)
            console.warn("Invalid property path: Multiple wildcards are not supported in property paths.\nEntry with path '" + propPath + "' got ignored in the properties metadata.");
            return;
        }
        else if (wildcardCount === 1) {
            var index = propPath.indexOf('[*]');
            if (index < -1) {
                console.warn("Invalid property path: Wildcards are only supported inside brackets to select array\nindices as in 'foo[*].bar'. Entry with path '" + propPath + "' got ignored in the properties metadata.");
                // Skip if the wildcard is not used for an array (not supported)
                return;
            }
            else {
                // Handle the array wildcard by generating each individual property path
                var arrayPath = propPath.substr(0, index);
                /* tslint:disable-next-line:no-any */
                var arrayInstance = _microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_4__["get"](properties, arrayPath);
                if (!arrayInstance) {
                    console.warn("Invalid property path: Could not find an array named '" + arrayPath + "' in the properties.\nEntry with path '" + propPath + "' got ignored in the properties metadata.");
                    return;
                }
                else {
                    for (var i = 0; i < arrayInstance.length; i++) {
                        var fixedPropPath = propPath.replace('*', "" + i);
                        propertyPathHandler(fixedPropPath, i);
                    }
                }
            }
        }
        else {
            propertyPathHandler(propPath);
        }
    };
    /**
     * Iterates and validates each custom property path before calling custom metadata processor.
     *
     * @param metadata - Web part property metadata containing.
     * @param iteration - Current iteration in case path is being iterated based on wildcard *
     * @param customMetadataProcessor - Responsible for processing custom metadata properties.
     */
    BaseWebPart.prototype._foreachCustomMetadata = function (metadata, iteration, customMetadataProcessor, properties /* tslint:disable-line:no-any */) {
        if (metadata && metadata.customMetadata) {
            var _loop_2 = function (propName) {
                /* tslint:disable-line:forin */
                var propPath = metadata.customMetadata[propName];
                if (iteration !== undefined && propPath.indexOf('*') !== -1) {
                    // Custom metadata should be resolved with current iteration of wildcard
                    propPath = propPath.replace('*', iteration.toString());
                }
                this_2._validateAndIteratePath(propPath, properties || this_2.properties, function (fixedPropPath, customIteration) {
                    // Custom metadata should be resolved without iteration
                    if (customIteration === undefined && metadata.customMetadata) {
                        customMetadataProcessor(fixedPropPath, propName);
                    }
                });
            };
            var this_2 = this;
            for (var propName in metadata.customMetadata) {
                _loop_2(propName);
            }
        }
    };
    /**
     * Operations to be done after the property bag is updated.
     *
     * @param shouldRefresh - Indicating whether web part needs to be shouldRefresh or not.
     */
    BaseWebPart.prototype._afterPropertyUpdated = function (shouldRefresh) {
        this._internalSetDirtyBit();
        if (shouldRefresh) {
            this._refresh();
        }
    };
    /**
     * Fixes up a property pane configuration to use dynamic data. This happens in-place.
     * The fix-up consists on adding the necessary hooks to the web part that are required,
     * like the dynamic data provider, the render function and the object it refers to.
     *
     * @param configuration - Property pane configuration to fix up.
     */
    BaseWebPart.prototype._fixUpDynamicDataConfiguration = function (configuration) {
        var _this = this;
        configuration.pages.forEach(function (page) {
            page.groups.forEach(function (group) {
                // Checking if the group is PropertyPaneConditionalGroup, if yes then extracting
                // the required group from it.
                if ('primaryGroup' in group) {
                    var _a = group, primaryGroup = _a.primaryGroup, secondaryGroup = _a.secondaryGroup, showSecondaryGroup = _a.showSecondaryGroup;
                    group = showSecondaryGroup ? secondaryGroup : primaryGroup;
                }
                group = group;
                group.groupFields.forEach(function (field) {
                    if (field.type === _SPPropertyPane__WEBPACK_IMPORTED_MODULE_7__["PropertyPaneFieldType"].DynamicTextField) {
                        var props = field.properties;
                        props.dynamicDataProvider = _this.context.dynamicDataProvider;
                        props.changeCallback = (function () {
                            _this._dynamicPropertyRefresh();
                        }).bind(_this);
                    }
                });
            });
        });
    };
    /**
     * The serializer for the exposed part of the web part data
     *
     * @privateRemarks
     * This serialize API is a public candidate for post-GA (after removing the input parameter)
     */
    BaseWebPart.prototype._serialize = function () {
        var _this = this;
        var serverProcessedContent = {
            htmlStrings: {},
            searchablePlainTexts: {},
            imageSources: {},
            links: {}
        };
        // Since we will end up mutating the property bag during serialization, we need to clone it.
        var properties = this._cloneProperties(this.persistedProperties);
        this._forEachPropertyWithMetaData(function (propPath, metadata, iteration) {
            // Remove fields with shouldNotPersist metadata
            if (metadata.shouldNotPersist) {
                _microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_4__["set"](properties, propPath, undefined);
            }
            // Use the property path as the key in server-processed content maps
            var key = propPath;
            // WARNING: This is critical code. Please do not modify without fully understanding the data pipeline
            var value = _microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_4__["get"](properties, propPath);
            // Skip if the property is non-string or undefined
            if (serverProcessedContent && typeof value === 'string' && value) {
                if (serverProcessedContent.htmlStrings && metadata.isHtmlString) {
                    serverProcessedContent.htmlStrings[key] = value;
                }
                else if (serverProcessedContent.searchablePlainTexts && metadata.isSearchablePlainText) {
                    serverProcessedContent.searchablePlainTexts[key] = value;
                }
                else if (serverProcessedContent.links && metadata.isLink) {
                    serverProcessedContent.links[key] = value;
                }
                else if (serverProcessedContent.imageSources && metadata.isImageSource) {
                    serverProcessedContent.imageSources[key] = value;
                }
                else if (metadata.isComponentDependency) {
                    if (!serverProcessedContent.componentDependencies) {
                        serverProcessedContent.componentDependencies = {};
                    }
                    serverProcessedContent.componentDependencies[key] = value;
                }
                if (metadata.customMetadata) {
                    _this._internalSerializeCustomMetadata(key, metadata, properties, serverProcessedContent, iteration);
                }
                // Unset the extracted property to avoid duplication
                _microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_4__["set"](properties, propPath, undefined);
            }
        });
        return {
            dataVersion: this.dataVersion,
            properties: properties,
            serverProcessedContent: serverProcessedContent
        };
    };
    /**
     * Serialize custom metadata as specified by web part
     *
     * @param propertyPath - Property path used as key of the serialized custom metadata
     * @param metadata - Web part property metadata
     * @param properties - Web part persisted properties
     * @param serverProcessedContent - Server processed data's custom metadata is updated
     * @param iteration - Current iteration in case path is being iterated based on wildcard *
     */
    BaseWebPart.prototype._internalSerializeCustomMetadata = function (propertyPath, metadata, properties, serverProcessedContent, iteration) {
        // Build custom metadata for the given property path
        var customMetadata = {};
        this._foreachCustomMetadata(metadata, iteration, function (customPropertyPath, customPropertyName) {
            var customValue = _microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_4__["get"](properties, customPropertyPath);
            if (serverProcessedContent && customValue !== undefined) {
                // Insert custom metadata key and value
                customMetadata[customPropertyName] = customValue;
            }
        });
        if (!serverProcessedContent.customMetadata) {
            serverProcessedContent.customMetadata = {};
        }
        // Store serialized custom metadata for the given the property path.
        serverProcessedContent.customMetadata[propertyPath] = customMetadata;
    };
    /**
     * This function serializes the Dynamic Data objects from the web part properties into the serialized web part data.
     *
     * If there is a property "myDynamicProperty" in the property bag that points to `"PageContext:user"`,
     * the serialized data is updated as the following:
     * ```
     * serializedData = {
     *   dynamicDataPaths: {
     *     "myDynamicProperty": "PageContext:user"
     *   }
     * }
     * ```
     */
    BaseWebPart.prototype._serializeDynamicData = function (serializedData) {
        var props = serializedData.properties;
        var dynamicDataPaths = {};
        var dynamicDataValues = {}; // tslint:disable-line:no-any
        var key = _microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_4__["findKey"](props, { __type: _microsoft_sp_component_base__WEBPACK_IMPORTED_MODULE_1__["DynamicProperty"]._TYPE_NAME });
        while (key) {
            var dynamicDataReference = _microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_4__["get"](props, key + '.reference');
            var dynamicDataValue = _microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_4__["get"](props, key + '.value');
            if (dynamicDataReference) {
                dynamicDataPaths[key] = dynamicDataReference;
                _microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_4__["unset"](props, key);
            }
            else if (dynamicDataValue !== undefined) {
                // Explicitly checking for 'undefined' because, empty string is a valid dynamicDataValue.
                dynamicDataValues[key] = dynamicDataValue;
                _microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_4__["unset"](props, key);
            }
            else {
                throw new Error('Dynamic Data is misconfigured');
            }
            key = _microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_4__["findKey"](props, { __type: _microsoft_sp_component_base__WEBPACK_IMPORTED_MODULE_1__["DynamicProperty"]._TYPE_NAME });
        }
        serializedData.dynamicDataPaths = dynamicDataPaths;
        serializedData.dynamicDataValues = dynamicDataValues;
    };
    /**
     * This function deserializes the Dynamic Data objects from serialized web part data into web part properties.
     *
     * If the serializedData has a "dynamicDataPaths" or "dynamicDataValues" property,
     * it creates DynamicData objects for it.
     *
     * Example:
     * ```
     * serializedData = {
     *   dynamicDataPaths: {
     *     "myDynamicProperty": "PageContext:user"
     *   }
     * }
     * ```
     *
     * This will create a property "myDynamicProperty" in the web parts properties, with a new DynamicData object that
     * points at "PageContext:user"
     */
    BaseWebPart.prototype._deserializeDynamicData = function (data) {
        var _this = this;
        if (data.dynamicDataPaths) {
            for (var path in data.dynamicDataPaths) {
                if (data.dynamicDataPaths.hasOwnProperty(path)) {
                    var dynamicProperty = new _microsoft_sp_component_base__WEBPACK_IMPORTED_MODULE_1__["DynamicProperty"](// tslint:disable-line:no-any
                    this.context.dynamicDataProvider, (function () {
                        _this._dynamicPropertyRefresh();
                    }).bind(this));
                    dynamicProperty.setReference(data.dynamicDataPaths[path]);
                    _microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_4__["set"](data.properties, path, dynamicProperty);
                }
            }
        }
        if (data.dynamicDataValues) {
            for (var path in data.dynamicDataValues) {
                if (data.dynamicDataValues.hasOwnProperty(path)) {
                    var dynamicProperty = new _microsoft_sp_component_base__WEBPACK_IMPORTED_MODULE_1__["DynamicProperty"](// tslint:disable-line:no-any
                    this.context.dynamicDataProvider, (function () {
                        _this._dynamicPropertyRefresh();
                    }).bind(this));
                    dynamicProperty.setValue(data.dynamicDataValues[path]);
                    _microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_4__["set"](data.properties, path, dynamicProperty);
                }
            }
        }
    };
    /**
     * For each property in the serialized properties of the web part, we check if the property is declared
     * as dynamicProperty in the properties metadata of the web part.
     *  - If yes, then we check
     *    - if the value of it is an instance of DynamicProperty
     *      - If No, then we create and assign a DynamicProperty with the type given specified in the
     *        'dynamicPropertyType' property
     *      - else, it's a no-op.
     *  - If no, then it's a no-op
     *
     * While creating the DynamicProperty, we use the pre-configured value associated with that property from
     * the web part's property bag as the default value.
     * @param deSerializedProperties - deserialized properties of the web part.
     */
    // tslint:disable-next-line:no-any
    BaseWebPart.prototype._initializeDynamicPropertiesIfRequired = function (deSerializedProperties) {
        var _this = this;
        var defaultDynamicPropertyValues = new Map([
            ['boolean', false],
            ['number', 0],
            ['string', ''],
            ['array', []],
            ['object', {}]
        ]);
        this._forEachPropertyWithMetaData(function (propPath, metadata) {
            if (metadata.dynamicPropertyType) {
                var propValue = _microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_4__["get"](deSerializedProperties, propPath); /* tslint:disable-line:no-any */
                if (!(propValue instanceof _microsoft_sp_component_base__WEBPACK_IMPORTED_MODULE_1__["DynamicProperty"])) {
                    var dynamicProperty = void 0; /* tslint:disable-line:no-any */
                    switch (metadata.dynamicPropertyType) {
                        case 'boolean':
                            dynamicProperty = new _microsoft_sp_component_base__WEBPACK_IMPORTED_MODULE_1__["DynamicProperty"](_this.context.dynamicDataProvider, (function () {
                                _this._dynamicPropertyRefresh();
                            }).bind(_this));
                            break;
                        case 'number':
                            dynamicProperty = new _microsoft_sp_component_base__WEBPACK_IMPORTED_MODULE_1__["DynamicProperty"](_this.context.dynamicDataProvider, (function () {
                                _this._dynamicPropertyRefresh();
                            }).bind(_this));
                            break;
                        case 'string':
                            dynamicProperty = new _microsoft_sp_component_base__WEBPACK_IMPORTED_MODULE_1__["DynamicProperty"](_this.context.dynamicDataProvider, (function () {
                                _this._dynamicPropertyRefresh();
                            }).bind(_this));
                            break;
                        case 'array':
                            dynamicProperty = new _microsoft_sp_component_base__WEBPACK_IMPORTED_MODULE_1__["DynamicProperty"](_this.context.dynamicDataProvider, (function () {
                                _this._dynamicPropertyRefresh();
                            }).bind(_this));
                            break;
                        case 'object':
                            dynamicProperty = new _microsoft_sp_component_base__WEBPACK_IMPORTED_MODULE_1__["DynamicProperty"](_this.context.dynamicDataProvider, (function () {
                                _this._dynamicPropertyRefresh();
                            }).bind(_this));
                            break;
                        default:
                            dynamicProperty = new _microsoft_sp_component_base__WEBPACK_IMPORTED_MODULE_1__["DynamicProperty"](// tslint:disable-line:no-any
                            _this.context.dynamicDataProvider, (function () {
                                _this._dynamicPropertyRefresh();
                            }).bind(_this));
                            break;
                    }
                    propValue = propValue || defaultDynamicPropertyValues.get(metadata.dynamicPropertyType);
                    dynamicProperty.setValue(propValue);
                    _microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_4__["set"](deSerializedProperties, propPath, dynamicProperty);
                }
            }
        }, deSerializedProperties);
    };
    /**
     * Disposing the dynamic properties, for those which are declared as dynamic properties.
     *
     * @privateRemarks
     * We are disposing only the declared dynamic properties because we created them on behalf of
     * the web part and hence it is our responsiblity to clean them.
     */
    BaseWebPart.prototype._disposeDynamicPropertiesIfRequired = function () {
        var _this = this;
        this._forEachPropertyWithMetaData(function (propPath, metadata) {
            if (metadata.dynamicPropertyType) {
                // tslint:disable-next-line:no-any
                var propValue = _microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_4__["get"](_this.persistedProperties, propPath);
                if (propValue instanceof _microsoft_sp_component_base__WEBPACK_IMPORTED_MODULE_1__["DynamicProperty"]) {
                    propValue.dispose();
                }
            }
        }, this.persistedProperties);
    };
    /**
     * Update the web part property if it is in the property bag.
     *
     * @param propertyPath - property path as expected by lodash update (https://lodash.com/docs#update).
     *   (e.g. 'o.a.b', 'o[0].a.b[1].c'). These paths are similar to those in the JSONPath spec described by
     *   Stefan Goessner at (http://goessner.net/articles/JsonPath/). Currently we plan to use lodash.get, has
     *   and update APIs which support paths. Some day we may migrate to using actual JSONPath.js. But that
     *   should not be an issue because the path formatting conventions are same in lodash and JSONPath.
     * @param newValue - new value entered by the user for the associated target property
     */
    // tslint:disable-next-line:no-any
    BaseWebPart.prototype._updateProperty = function (propertyPath, newValue) {
        // should we check if this is a valid property path. For now maybe not.
        _microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_4__["update"](this.properties, propertyPath, function () { return newValue; });
    };
    /**
     * Using 'cloneDeepWith' because the web part properties bag will now serialize the
     * dynamic properties as well. One of the building blocks of these properties are dataProviders,
     * which when serialized will result in 'Maximum call stack size exceeded' based on what kind of
     * sources they hold references to.
     * Hence using cloneDeepWith, which lets us handle the special cases and in this case if the property
     * in question is a 'DynamicProperty' and we call '_cloneDeep' api on the dynamicProperty.
     */
    BaseWebPart.prototype._cloneProperties = function (propertiesToClone) {
        return _microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_4__["cloneDeepWith"](propertiesToClone, function (prop) {
            if (prop instanceof _microsoft_sp_component_base__WEBPACK_IMPORTED_MODULE_1__["DynamicProperty"]) {
                return prop._cloneDeep(prop); // tslint:disable-line:no-any
            }
        });
    };
    return BaseWebPart;
}(_microsoft_sp_component_base__WEBPACK_IMPORTED_MODULE_1__["BaseComponent"]));
/* harmony default export */ __webpack_exports__["default"] = (BaseWebPart);


/***/ }),

/***/ "UWqr":
/*!*********************************************!*\
  !*** external "@microsoft/sp-core-library" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_UWqr__;

/***/ }),

/***/ "UhTv":
/*!**********************************!*\
  !*** ./lib/core/ErrorMessage.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_cswp_base_module_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/cswp-base.module.scss */ "jOUx");
/**
 * @copyright Microsoft Corporation. All rights reserved.
 *
 */

/**
 * The error component used for rendering webpart errors.
 */
var ErrorMessage = /** @class */ (function () {
    function ErrorMessage(props) {
        this._props = props;
    }
    ErrorMessage.prototype.render = function () {
        var container = document.createElement('div');
        container.className = _styles_cswp_base_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].errorBox;
        container.setAttribute('role', 'alert');
        container.setAttribute('aria-live', 'assertive');
        var errorMessage = document.createElement('span');
        errorMessage.className = _styles_cswp_base_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].errorBoxText;
        errorMessage.innerText = this._props.errorMessage;
        container.appendChild(errorMessage);
        return container;
    };
    return ErrorMessage;
}());
/* harmony default export */ __webpack_exports__["default"] = (ErrorMessage);


/***/ }),

/***/ "UzRH":
/*!***************************************************!*\
  !*** ./lib/core/teams/TeamsEnvironmentManager.js ***!
  \***************************************************/
/*! exports provided: TeamsEnvironmentManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamsEnvironmentManager", function() { return TeamsEnvironmentManager; });
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__);
/**
 * @Copyright (c) Microsoft Corporation.  All rights reserved.
 */

/**
 * Wrap a Teams SDK function in a Promise. When the callback is invoked,
 * the promise will resolve to the callback arguments.
 * Needed, because we want a guarantee that the execution has finished and the callback func has been called.
 *
 * @param f - Teams SDK function.
 * @returns A promise resolving to the callback arguments.
 */
function promisify(f) {
    return new Promise(function (resolve, reject) {
        try {
            // resolve the promise when the callback is invoked to the callback arguments
            f(function (t) { return resolve(t); });
        }
        catch (e) {
            reject(e);
        }
    });
}
/**
 * Get and store teams context.
 */
var TeamsEnvironmentManager = /** @class */ (function () {
    function TeamsEnvironmentManager() {
    }
    // set teamsContext
    TeamsEnvironmentManager.initialize = function () {
        if (!_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_BrowserUtilities"].isTeamsHosted() || TeamsEnvironmentManager.teamsContext) {
            return Promise.resolve();
        }
        return __webpack_require__.e(/*! import() | spfx-core-teamsenv-teamsJs */ "vendors~spfx-core-teamsenv-teamsJs").then(__webpack_require__.t.bind(null, /*! @microsoft/teams-js */ "d2Ym", 7)).then(function (teamsJS) {
            teamsJS.initialize();
            return promisify(teamsJS.getContext).then(function (context) {
                TeamsEnvironmentManager.teamsContext = context;
                TeamsEnvironmentManager.teamsJs = teamsJS;
            });
        });
    };
    TeamsEnvironmentManager.getTeamsContext = function () {
        return TeamsEnvironmentManager.teamsContext;
    };
    TeamsEnvironmentManager.getTeamsJs = function () {
        return TeamsEnvironmentManager.teamsJs;
    };
    return TeamsEnvironmentManager;
}());



/***/ }),

/***/ "VjpS":
/*!*********************************************!*\
  !*** ./lib/core/styles/spinner.module.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _microsoft_load_themed_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/load-themed-styles */ "jOlS");
/* harmony import */ var _microsoft_load_themed_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_load_themed_styles__WEBPACK_IMPORTED_MODULE_0__);
// Imports


_microsoft_load_themed_styles__WEBPACK_IMPORTED_MODULE_0__["loadStyles"]("@keyframes r_c_7caff1a1{0%{transform:rotate(-45deg)}to{transform:rotate(315deg)}}.n_c_7caff1a1{position:relative;width:100%;padding:164px 0}.o_c_7caff1a1{position:relative;width:20px;height:20px;margin:auto}.p_c_7caff1a1,.q_c_7caff1a1{position:absolute}.p_c_7caff1a1{z-index:0;color:\"[theme:themeLight, default: #c7e0f4]\"}.q_c_7caff1a1{z-index:10;animation:r_c_7caff1a1 1.5s infinite;animation-timing-function:easeInOutCirc}.s_c_7caff1a1,.q_c_7caff1a1{color:\"[theme:themePrimary, default: #0078d4]\"}.s_c_7caff1a1{margin-top:10px;text-align:center}.t_c_7caff1a1{position:absolute;width:1px;height:1px;margin:-1px;padding:0;border-width:0;overflow:hidden}", true);

// Exports
/* harmony default export */ __webpack_exports__["default"] = ({
  spinnerContainer: "n_c_7caff1a1",
  spinner: "o_c_7caff1a1",
  spinnerRing: "p_c_7caff1a1",
  spinnerSlice: "q_c_7caff1a1",
  spin: "r_c_7caff1a1",
  spinnerLoadingMessage: "s_c_7caff1a1",
  spinnerAccessibilityMessage: "t_c_7caff1a1"
});


/***/ }),

/***/ "VuYt":
/*!************************************************************!*\
  !*** ./lib/core/loaders/IframedWebPartControllerLoader.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return IframedWebPartControllerLoader; });
/**
 * Async loader for the full size web part layout
 * @internal
 */
function IframedWebPartControllerLoader() {
    return __webpack_require__.e(/*! import() | sp-webpart-base-iframedwebpartcontroller */ "sp-webpart-base-iframedwebpartcontroller").then(__webpack_require__.bind(null, /*! ./../../chunks/IframedWebPartController/IframedWebPartController */ "CL8W")).then(function (iframedWebPartControllerModule) { return iframedWebPartControllerModule.default; });
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

/***/ "a39N":
/*!******************************************!*\
  !*** ./lib/core/FriendlyErrorMessage.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _loc_Strings_resx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loc/Strings.resx */ "kGqN");
var _loc_Strings_resx__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./loc/Strings.resx */ "kGqN", 1);
/* harmony import */ var _styles_cswp_base_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/cswp-base.module.scss */ "jOUx");
/* harmony import */ var _ErrorMessage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ErrorMessage */ "UhTv");
/**
 * @copyright Microsoft Corporation. All rights reserved.
 *
 */



/**
 * The error friendly component used for rendering webpart errors.
 */
var FriendlyErrorMessage = /** @class */ (function () {
    function FriendlyErrorMessage(props) {
        this._toggleExpandedDetails = this._toggleExpandedDetails.bind(this);
        this._errorMessage = new _ErrorMessage__WEBPACK_IMPORTED_MODULE_2__["default"](props).render();
        this._errorMessage.style.display = 'none';
    }
    FriendlyErrorMessage.prototype.render = function () {
        // Create container element and append children components
        var container = document.createElement('div');
        container.className = _styles_cswp_base_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].errorBox;
        // Header text
        var headerContainer = document.createElement('div');
        var header = document.createElement('h2');
        header.className = _styles_cswp_base_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].somethingWentWrongText;
        header.innerText = _loc_Strings_resx__WEBPACK_IMPORTED_MODULE_0__["WebpartErrorSomethingWentWrong"];
        headerContainer.appendChild(header);
        container.appendChild(header);
        // Supporting text
        var siteAdminText = document.createElement('span');
        siteAdminText.className = _styles_cswp_base_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].siteAdminText;
        siteAdminText.innerText = _loc_Strings_resx__WEBPACK_IMPORTED_MODULE_0__["WebpartErrorSiteAdminAdvice"];
        container.appendChild(siteAdminText);
        // Button to reveal more details
        var buttonContainer = document.createElement('div');
        var techDetailsButton = document.createElement('button');
        techDetailsButton.className = _styles_cswp_base_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].detailsButton;
        techDetailsButton.innerText = _loc_Strings_resx__WEBPACK_IMPORTED_MODULE_0__["WebpartErrorTechnicalDetails"];
        techDetailsButton.onclick = this._toggleExpandedDetails;
        buttonContainer.appendChild(techDetailsButton);
        container.appendChild(buttonContainer);
        // Detailed information that is initially hiddren. Display is toggled with button above.
        container.appendChild(this._errorMessage);
        return container;
    };
    FriendlyErrorMessage.prototype._toggleExpandedDetails = function () {
        if (this._errorMessage.style.display === 'none') {
            this._errorMessage.style.display = '';
        }
        else {
            this._errorMessage.style.display = 'none';
        }
    };
    return FriendlyErrorMessage;
}());
/* harmony default export */ __webpack_exports__["default"] = (FriendlyErrorMessage);


/***/ }),

/***/ "aOlN":
/*!*****************************************************!*\
  !*** ./lib/core/ClientSideWebPartStatusRenderer.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _microsoft_sp_component_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/sp-component-base */ "7Awa");
/* harmony import */ var _microsoft_sp_component_base__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_component_base__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ms/sp-telemetry */ "2q6Q");
/* harmony import */ var _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _loc_Strings_resx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loc/Strings.resx */ "kGqN");
var _loc_Strings_resx__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./loc/Strings.resx */ "kGqN", 1);
/* harmony import */ var _ErrorMessage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ErrorMessage */ "UhTv");
/* harmony import */ var _FriendlyErrorMessage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./FriendlyErrorMessage */ "a39N");
/* harmony import */ var _classicPages_ClassicPageUtils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./classicPages/ClassicPageUtils */ "FbpR");
/* harmony import */ var _SpinnerFactory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./SpinnerFactory */ "+MWs");
/**
* @Copyright (c) Microsoft Corporation.  All rights reserved.
*/








/**
 * This class provides the default implementation for displaying loading indicator and error messages
 * for web parts. The web part host can decide to provide custom implementation of how web parts display
 * loading indicators and error messages.
 *
 * @internal
 */
var ClientSideWebPartStatusRenderer = /** @class */ (function () {
    function ClientSideWebPartStatusRenderer() {
        this._errorId = 'cswp-error';
        this._activeIndicatorCache = new Map();
    }
    /**
     * Returns additional time out before showing the spinner
     *
     * loadingDelayed - Time when asked Viewport loader to check and load web part post module load.
     * inViewportLoaded - Time when web part was allowed to load by viewport loader.
     *
     * 1. If both loadingDelayed and inViewportLoaded are defined return the ViewportWait,
     *    difference between them would reflect total time in the waiting queue
     *    (i.e, inViewportLoaded - loadingDelayed).
     * 2. If only loadingDelayed is defined (i.e, the rendering of the webpart is still in the queue)
     *    return a timeout of 500ms.
     * 3. If both loadingDelayed and inViewportLoaded are undefined return 0 (i.e, let the things be as they are).
     *
     * @param webPartTag - event identifier used in written telemetry data for first party web
     * parts, e.g., 'WebPart.NewsWebPart.8dd9dec2-c6b3-4d4a-819e-2a5431e901f2'.
     */
    ClientSideWebPartStatusRenderer._getAdditionalTimeOut = function (webPartTag) {
        var loadingDelayed = _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_1__["_PerformanceLogger"].readComponentBreakdown(webPartTag, 'loadingDelayed');
        var inViewportLoaded = _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_1__["_PerformanceLogger"].readComponentBreakdown(webPartTag, 'inViewPortLoading');
        var timeout = 0;
        if (loadingDelayed && inViewportLoaded) {
            timeout = inViewportLoaded - loadingDelayed;
        }
        else if (loadingDelayed) {
            timeout = 500;
        }
        else {
            timeout = 0;
        }
        return timeout;
    };
    /**
     * Display a loading spinner.
     *
     * @param domElement - the web part container div.
     * @param loadingMessage - the message to be displayed when the loading spinner id displayed.
     * @param timeout - (optional) timeout to render the loading indicator. Default is 1500ms.
     *
     * @privateRemarks
     * First-party web parts should use _displayLoadingIndicator to log perf data.
     */
    ClientSideWebPartStatusRenderer.prototype.displayLoadingIndicator = function (domElement, loadingMessage, timeout) {
        this._createLoadingIndicator(domElement, loadingMessage, timeout);
    };
    /**
     * Display a loading indicator.
     *
     * @param domElement - the web part container div.
     * @param loadingMessage - the message to be displayed when the loading indicator id displayed.
     * @param performanceLogEventName - event identifier used in written telemetry data for first party web
     * parts, e.g., 'WebPart.NewsWebPart.8dd9dec2-c6b3-4d4a-819e-2a5431e901f2'.
     * @param isInternal - flag to indicate if web part is internal or external.
     * @param timeout - (optional) timeout to render the loading indicator. Default is 1500ms.
     *
     * @internal
     */
    ClientSideWebPartStatusRenderer.prototype._displayLoadingIndicator = function (domElement, loadingMessage, performanceLogEventName, reservedHeight, isInternal, timeout) {
        this._createLoadingIndicator(domElement, loadingMessage, reservedHeight, timeout, performanceLogEventName, isInternal);
    };
    /**
     * Clear the loading indicator.
     *
     * @param domElement - the web part container div.
     */
    ClientSideWebPartStatusRenderer.prototype.clearLoadingIndicator = function (domElement) {
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__["Validate"].isNotNullOrUndefined(domElement, 'domElement');
        if (this._activeIndicatorCache.has(domElement)) {
            var cacheEntry = this._getCacheEntry(domElement);
            if (cacheEntry.loadingTimer) {
                window.clearTimeout(cacheEntry.loadingTimer);
            }
            if (cacheEntry.placeholder) {
                // This is needed because some web parts (e.g. Yammer web part) render within the onInit() phase
                if (cacheEntry.placeholder.parentElement) {
                    cacheEntry.placeholder.parentElement.removeChild(cacheEntry.placeholder);
                }
            }
            this._activeIndicatorCache.delete(domElement);
        }
    };
    /**
     * Render the provided error message in the web part container div.
     * @param domElement - the web part container div.
     * @param error - the error message.
     */
    ClientSideWebPartStatusRenderer.prototype.renderError = function (domElement, error) {
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__["Validate"].isNotNullOrUndefined(domElement, 'domElement');
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__["Validate"].isNotNullOrUndefined(error, 'error');
        var errorText = '';
        if (error instanceof _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__["SPError"]) {
            errorText = error.toStringForUI();
        }
        else {
            var vanillaError = error;
            var stack = vanillaError.stack;
            var newLineSeparator = '\r\n';
            var callStack = stack
                ? _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__["Text"].format(_loc_Strings_resx__WEBPACK_IMPORTED_MODULE_3__["WebpartErrorCallStackText"], newLineSeparator, stack)
                : '';
            errorText = _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__["Text"].format(_loc_Strings_resx__WEBPACK_IMPORTED_MODULE_3__["WebpartErrorErrorText"], newLineSeparator, "" + (vanillaError.message || error), callStack);
        }
        var cacheEntry = this._getCacheEntry(domElement);
        cacheEntry.isErrorBeingRendered = true;
        var errorComponent;
        if (false) {}
        else {
            errorComponent = new _ErrorMessage__WEBPACK_IMPORTED_MODULE_4__["default"]({ errorMessage: errorText }).render();
        }
        var divErr = domElement.querySelector("div[data-sp-id='" + this._errorId + "']");
        if (divErr) {
            divErr.style.display = 'block';
        }
        else {
            divErr = document.createElement('div');
            divErr.setAttribute('data-sp-id', this._errorId);
            this._clearChildren(domElement);
            domElement.appendChild(divErr);
            _classicPages_ClassicPageUtils__WEBPACK_IMPORTED_MODULE_6__["default"].disableAutomaticPostbacks(domElement, _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__["Environment"].type);
        }
        // clearError removes the data-automation-id
        divErr.setAttribute('data-automation-id', 'webPartError');
        divErr.innerHTML = '';
        divErr.appendChild(errorComponent);
    };
    /**
     * Clear the web part error message.
     * @param domElement - the web part container div.
     */
    ClientSideWebPartStatusRenderer.prototype.clearError = function (domElement) {
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__["Validate"].isNotNullOrUndefined(domElement, 'domElement');
        if (!this._activeIndicatorCache.has(domElement)) {
            return;
        }
        var cacheEntry = this._activeIndicatorCache.get(domElement);
        if (cacheEntry && cacheEntry.isErrorBeingRendered) {
            cacheEntry.isErrorBeingRendered = false;
            var divErr = domElement.querySelector("div[data-sp-id='" + this._errorId + "']");
            if (divErr) {
                divErr.style.display = 'none';
                divErr.removeAttribute('data-automation-id');
            }
        }
    };
    ClientSideWebPartStatusRenderer.prototype._createLoadingIndicator = function (domElement, loadingMessage, reservedHeight, timeout, performanceLogEventName, isInternal) {
        var _this = this;
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__["Validate"].isNotNullOrUndefined(domElement, 'domElement');
        if (!timeout || (timeout && isNaN(timeout))) {
            timeout = 1500; // milliseconds
        }
        // In most cases, we do not want to display the loading indicator immediately. We want to delay the
        // display of loading indicator to the point when the user will start noticing the slowness in the UI.
        var cacheEntry = this._getCacheEntry(domElement);
        // Clear if any earlier loading timer
        if (cacheEntry.loadingTimer) {
            window.clearTimeout(cacheEntry.loadingTimer);
        }
        cacheEntry.loadingTimer = window.setTimeout(function () {
            if (performanceLogEventName && isInternal) {
                var additionalTimeOut = ClientSideWebPartStatusRenderer._getAdditionalTimeOut(performanceLogEventName);
                cacheEntry.loadingTimer = window.setTimeout(function () {
                    _this._showLoadingIndicator(domElement, loadingMessage, reservedHeight, performanceLogEventName, isInternal);
                }, additionalTimeOut);
            }
            else {
                _this._showLoadingIndicator(domElement, loadingMessage, reservedHeight, performanceLogEventName, isInternal);
            }
        }, timeout);
    };
    /**
     * Show the loading indicator
     *
     * @param domElement - the web part container div.
     * @param loadingMessage - the message to be displayed when the loading Indicator id displayed.
     * @param performanceLogEventName - event identifier used in written telemetry data for first party web
     * parts, e.g., 'WebPart.NewsWebPart.8dd9dec2-c6b3-4d4a-819e-2a5431e901f2'.
     */
    ClientSideWebPartStatusRenderer.prototype._showLoadingIndicator = function (domElement, loadingMessage, reservedHeight, performanceLogEventName, isInternal) {
        if (performanceLogEventName && isInternal) {
            _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_1__["_PerformanceLogger"].markComponent(performanceLogEventName, 'displaySpinner');
        }
        // This would set style of the loading Indicator and display it.
        this._renderLoadingIndicator(domElement, loadingMessage, reservedHeight, performanceLogEventName);
    };
    ClientSideWebPartStatusRenderer.prototype._renderLoadingIndicator = function (domElement, loadingMessage, reservedHeight, performanceLogEventName) {
        if (!this._activeIndicatorCache.has(domElement)) {
            return;
        }
        var cacheEntry = this._getCacheEntry(domElement);
        // Error is being rendered, don't render loading indicator
        if (cacheEntry.isErrorBeingRendered) {
            return;
        }
        cacheEntry.placeholder = this._createLoadingIndicatorElement(domElement, loadingMessage, reservedHeight, performanceLogEventName);
    };
    ClientSideWebPartStatusRenderer.prototype._getCacheEntry = function (domElement) {
        if (this._activeIndicatorCache.has(domElement)) {
            return this._activeIndicatorCache.get(domElement);
        }
        var cacheEntry = {
            loadingTimer: undefined,
            placeholder: undefined,
            isErrorBeingRendered: false
        };
        this._activeIndicatorCache.set(domElement, cacheEntry);
        return cacheEntry;
    };
    ClientSideWebPartStatusRenderer.prototype._createLoadingIndicatorElement = function (domElement, loadingMessage, reservedHeight, performanceLogEventName) {
        this._clearChildren(domElement);
        var titleMessage = _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__["Text"].format(_loc_Strings_resx__WEBPACK_IMPORTED_MODULE_3__["LoadingStatus"], loadingMessage);
        var loadingIndicatorContainerDiv = performanceLogEventName
            ? _microsoft_sp_component_base__WEBPACK_IMPORTED_MODULE_0__["_ShimmerFactory"].createShimmer(domElement.clientWidth, reservedHeight, performanceLogEventName, titleMessage)
            : this._createSpinnerElement(titleMessage, reservedHeight);
        loadingIndicatorContainerDiv.style.display = 'block';
        return domElement.appendChild(loadingIndicatorContainerDiv);
    };
    ClientSideWebPartStatusRenderer.prototype._createSpinnerElement = function (titleMessage, reservedHeight) {
        var spinnerElement = _SpinnerFactory__WEBPACK_IMPORTED_MODULE_7__["default"].createSpinner(titleMessage);
        if (reservedHeight !== undefined) {
            var parentElement = document.createElement('div');
            parentElement.style.maxHeight = reservedHeight + "px";
            parentElement.appendChild(spinnerElement);
            spinnerElement = parentElement;
        }
        return spinnerElement;
    };
    ClientSideWebPartStatusRenderer.prototype._clearChildren = function (element) {
        // We need to ensure that there are no child nodes. This works for all browsers.
        while (element.hasChildNodes()) {
            if (element.lastChild) {
                element.removeChild(element.lastChild);
            }
        }
    };
    return ClientSideWebPartStatusRenderer;
}());
/* harmony default export */ __webpack_exports__["default"] = (ClientSideWebPartStatusRenderer);


/***/ }),

/***/ "bfIN":
/*!*****************************!*\
  !*** ./lib/utils/Object.js ***!
  \*****************************/
/*! exports provided: deepFreeze */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deepFreeze", function() { return deepFreeze; });
/* harmony import */ var _microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/sp-lodash-subset */ "Pk8u");
/* harmony import */ var _microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_0__);
/**
* @Copyright (c) Microsoft Corporation.  All rights reserved.
*
* Utililty code to help manipulate objects.
*/

/**
 * To make obj fully immutable, freeze each object in obj.
 * @remarks: this works only on pure JSON objects by design.
 * @param obj - object to freeze
 */
/* tslint:disable:export-name */
function deepFreeze(obj) {
    /* tslint:enable:export-name */
    if (!obj) {
        return undefined;
    }
    if (!Object.isFrozen(obj)) {
        Object.freeze(obj);
    }
    var depth = 0;
    var func = function (o) {
        // Do not go more than 5 level deep
        if (++depth > 5) {
            return;
        }
        var propNames = Object.getOwnPropertyNames(o);
        propNames.forEach(function (name) {
            var prop = o[name];
            if (typeof prop === 'object' && !!prop && !_microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_0__["isElement"](prop) && !Object.isFrozen(prop)) {
                func(prop);
            }
        });
    };
    func(obj);
    return obj;
}


/***/ }),

/***/ "evvI":
/*!*******************************************!*\
  !*** ./lib/core/BaseClientSideWebPart.js ***!
  \*******************************************/
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
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _BaseWebPart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./BaseWebPart */ "Ti3B");
/* harmony import */ var _classicPages_ClassicPageUtils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./classicPages/ClassicPageUtils */ "FbpR");
/* harmony import */ var _common_KillSwitches__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../common/KillSwitches */ "+ORw");
/* harmony import */ var _error_SPWebPartError__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./error/SPWebPartError */ "ybLs");
/* harmony import */ var _WebPartWidthCacheManager__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./WebPartWidthCacheManager */ "BDc9");
/* harmony import */ var _styles_cswp_base_module_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./styles/cswp-base.module.scss */ "jOUx");
// Copyright (c) Microsoft. All rights reserved.










/**
 * This abstract class implements the the base functionality for a client-side web part. Every client-side web part
 * needs to inherit from this class.
 *
 * @remarks
 * Along with the base functionality, this class provides some APIs that can be
 * used by the web part. These APIs fall in two catagories.
 *
 * The first category of APIs provide data and functionality. Example, the web part context (i.e. this.context). This
 * API should be used to access contextual data relevant to this web part instance.
 *
 * The second category of APIs provide a base implementation for the web part lifecycle and can be overridden for an
 * updated implementation. The render() API is the only API that is mandatory to be implemented/overridden by a web
 * part. All other life cycle APIs have a base implementation and can be overridden based on the needs of the web part.
 * Please refer to the documentation of the individual APIs to make the right decision.
 *
 * @public
 */
var BaseClientSideWebPart = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(BaseClientSideWebPart, _super);
    /**
     * Constructor for the BaseClientSideWebPart class.
     *
     * @remarks
     * It is highly recommended that the web part use the `onInit()` API to perform any web part specific
     * initialization.  Most of the web part features like this.context and `this.properties` are not
     * available to be used before the the `onInit()` part of the web part loading lifecycle.
     */
    function BaseClientSideWebPart() {
        var _this = _super.call(this) || this;
        _this._logSource = _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__["_LogSource"].create('BaseClientSideWebPart');
        _this._asyncRenderQosMonitor = new _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__["_QosMonitor"]("WebPartAsyncRender");
        // Disallow instantiation of the base class by itself
        // tslint:disable-next-line:no-string-literal no-any
        if (_this.constructor['name'] === 'BaseClientSideWebPart') {
            throw _error_SPWebPartError__WEBPACK_IMPORTED_MODULE_7__["SPWebPartError"].create(_error_SPWebPartError__WEBPACK_IMPORTED_MODULE_7__["SPWebPartErrorCode"].BaseConstructError);
        }
        _this._firstTimeRenderPromises = [];
        return _this;
    }
    Object.defineProperty(BaseClientSideWebPart.prototype, "domElement", {
        // Readonly protected properties. To change these to readonly once TypeScript supports that feature.
        /**
         * This property is a pointer to the root DOM element of the web part. This is a DIV element and contains the whole
         * DOM subtree of the web part.
         *
         * @readonly
         */
        get: function () {
            return this.context.domElement;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BaseClientSideWebPart.prototype, "width", {
        /**
         *
         * This propery returns the width of the container for the web part.
         * @returns Width (in pixels) of the container for the web part.
         *
         * @remarks
         * Web parts should utilize this property to perform operations such as any conditional styling of components
         * based on the initial available width for the web part.
         * @internalRemarks
         * This function retrieves web part's key to get stored section width from cache.
         * If cache key does not exist in cache it will calculate and store the width before returning.
         *
         * In the case where getWebPartCacheKey is not passed down, it will go through the original
         * workflow to caculate web part width.
         * @readonly
         */
        get: function () {
            if (this.displayMode === _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_3__["DisplayMode"].Read) {
                this._width = _WebPartWidthCacheManager__WEBPACK_IMPORTED_MODULE_8__["default"].getOrCalculateWidth(this.domElement, this._getExtendedWidthCacheKey());
            }
            else {
                if (this._width === undefined) {
                    this._width = _WebPartWidthCacheManager__WEBPACK_IMPORTED_MODULE_8__["default"].calculateWebPartWidth(this.domElement);
                }
            }
            return this._width;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BaseClientSideWebPart.prototype, "renderedOnce", {
        /**
         * This property indicates whether the web part has been rendered once or not. After the first time rendering,
         * the value of this property is always true until a full re-render of the web part happens.
         *
         * @readonly
         */
        get: function () {
            return !!this._renderedOnce;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BaseClientSideWebPart.prototype, "renderedFromPersistedData", {
        /**
         * This property indicates whether the web part was rendered from the persisted data (serialized state from the
         * last time that the web part was saved) or not.
         *
         * @remarks
         * Example: When web part is added for the first time using toolbox then the value is false.
         *
         * @readonly
         */
        get: function () {
            return !!this._renderedFromPersistedData;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BaseClientSideWebPart.prototype, "canOpenPopupOnRender", {
        /**
         * This property indicates whether a web part can open a popup on initial render.
         *
         * @remarks
         * In some environments the host
         * re-renders the web parts frequently, and therefore opening popups during render will cause popups to open
         * repeatedly, which is a poor user experience. As an example, the classic SharePoint pages perform postbacks
         * causing the page to re-render on all button clicks.
         *
         * If a web part needs to open a popup on render, it should use this API before opening the popup. If this API
         * returns false, the web part should not open popup on initial render. Some web parts that open popups during
         * render are the document embed web part that pops up the file picker on initial render, embedded video web part
         * that pops up the PropertyPane on initial render.
         *
         * @readonly
         */
        get: function () {
            // @todo (SPPPLAT VSO#243602): if the classic page experience is usable, we should remove this API.
            return true;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BaseClientSideWebPart.prototype, "isRenderAsync", {
        /**
         * Indicates whether the web part is rendering in Async mode.
         *
         * @remarks
         * If the web part overrides this field to return true, then it needs to call renderCompleted API
         * after the web part rendering is complete.
         *
         * The default value is false.
         *
         * @virtual
         */
        get: function () {
            return false;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Internal API to update the webpart upon a resize of the DOM window's viewport
     *
     * See onAfterResize for more details.
     *
     * @internal
     */
    BaseClientSideWebPart.prototype._internalOnAfterResize = function () {
        this._width = undefined;
        this.onAfterResize(this.width);
    };
    /**
     * Internal API for the first time render of the web part. The purpose of this API is to enforce initialization steps
     * before the actual render is called. This API is called only once during the web part loading lifecycle.
     *
     * @returns The promise indicates the render loop is finished (success or fail).
     *
     * @internal
     */
    BaseClientSideWebPart.prototype._internalFirstTimeRender = function () {
        var _this = this;
        /* tslint:enable:no-unused-variable */
        if (this._renderPromiseResolver) {
            throw _error_SPWebPartError__WEBPACK_IMPORTED_MODULE_7__["SPWebPartError"].create(_error_SPWebPartError__WEBPACK_IMPORTED_MODULE_7__["SPWebPartErrorCode"].FirstTimeRenderCalledMoreThanOnce, this.context.webPartTag);
        }
        return new Promise(function (resolve, reject) {
            _this._renderPromiseResolver = resolve;
            _this._renderPromiseRejecter = reject;
            _this._onInViewport();
        });
    };
    /**
     * @internal
     */
    BaseClientSideWebPart.prototype._internalSetDisplayMode = function (newDisplayMode) {
        if (this.displayMode !== newDisplayMode) {
            // Switch display mode will change the canvas width of web part. Clear the cache of width here.
            this._width = undefined;
            this._renderedFromPersistedData = true;
        }
        _super.prototype._internalSetDisplayMode.call(this, newDisplayMode);
    };
    /**
     * @internal
     * {@inheritDoc BaseWebPart._internalInitialize}
     */
    BaseClientSideWebPart.prototype._internalInitialize = function (webPartContext, addedFromPersistedData, mode) {
        _super.prototype._internalInitialize.call(this, webPartContext, addedFromPersistedData, mode);
        this._renderedOnce = false;
        this['__type'] = 'BaseClientSideWebPart'; // tslint:disable-line:no-string-literal no-any
        // Bind the callbacks
        this.render = this.render.bind(this);
        this.onDispose = this.onDispose.bind(this);
        this.renderError = this.renderError.bind(this);
        this.clearError = this.clearError.bind(this);
        this.renderCompleted = this.renderCompleted.bind(this);
        this._asyncRenderTimeout = this._asyncRenderTimeout.bind(this);
    };
    /**
     * This API should be called by web parts that perform Async rendering. Those web part are required to override
     * the isRenderAsync API and return true. One such example is web parts that render content in an IFrame. The
     * web part initiates the IFrame rendering in the `render()` API but the actual rendering is complete only after
     * the iframe loading completes.
     */
    BaseClientSideWebPart.prototype.renderCompleted = function (error) {
        if (!Object(_common_KillSwitches__WEBPACK_IMPORTED_MODULE_6__["isAllowProactiveRenderFailureKsActivated"])() && error) {
            this._handleAsyncRenderFailed(error);
        }
        else {
            this._renderCompleted();
        }
    };
    /**
     * This event method is called when the display mode of a web part is changed.
     *
     * @remarks
     * The default implementation of this API calls
     * the web part render method to re-render the web part with the new display mode. If a web part developer does not
     * want a full re-render to happen on display mode change, they can override this API and perform specific updates
     * to the web part DOM to switch its display mode.
     *
     * @param oldDisplayMode - The old display mode.
     *
     * @virtual
     */
    BaseClientSideWebPart.prototype.onDisplayModeChanged = function (oldDisplayMode) {
        var _this = this;
        _super.prototype.onDisplayModeChanged.call(this, oldDisplayMode);
        if (oldDisplayMode === this.displayMode) {
            return;
        }
        // Note: this quirk has existed for a very long time now. Long enough that it can be considered
        // a part of the design :(. Consider the scenario when the page is loaded with "&Mode=Edit" query
        // string parameter. As per the original design, the host, say, the ModernPage in this case, should call
        // the ClientSideWebPartManager.loadWebPart API with "displayMode == Edit" value. But that is not
        // the case. The ModernPage calls loadWebPart with "displayMode == Read" and then calls
        // ClientSideWebPartManager.setDisplayMode(displayMode == Edit). This opens the door for race condition
        // bugs to occur. Especially as the web part loading lifecycle is becoming more complex. To avoid these
        // race conditions from happening we need to to make sure all the first time rendering promises are
        // resolved before this._renderWithAccessibleTitle can be called.
        if (!_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_3__["_SPKillSwitch"].isActivated(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_3__["Guid"].parse('222961df-4439-412b-9e41-2e659ae18ab6'), '5/11/2018', 'FirstRenderPromises')) {
            Promise.all(this._firstTimeRenderPromises)
                .then(function () { return _this._renderWithAccessibleTitle(); })
                .catch(function (e) { return _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__["_TraceLogger"].logVerboseData({ source: _this._logSource, message: e.message }); });
        }
        else {
            this._renderWithAccessibleTitle();
        }
    };
    /**
     * This API should be used to refresh the contents of the PropertyPane.
     *
     * @remarks
     * This API is called at the end of the web part lifecycle on a page. It should be used to dispose any local
     * resources (i.e. DOM elements) that the web part is holding onto. This API is expected to be called in scenarios
     * like page navigation i.e. the host is transitioning from one page to another and disposes the page that is being
     * transitioned out.
     *
     * @virtual
     */
    BaseClientSideWebPart.prototype.onDispose = function () {
        /* EMPTY BLOCK */
    };
    /**
     * This API is invoked when the web part container dom element width is changed, e.g. when the
     * browser window is resized and when the property pane is toggled open/closed.
     *
     * @param newWidth - Width (in pixels) of the container for the web part after the resize event.
     * @remarks
     * Web parts should utilize this method to perform operations such as potentially re-rendering components
     * based on the new available width for the web part.
     *
     * @virtual
     */
    BaseClientSideWebPart.prototype.onAfterResize = function (newWidth) {
        /* EMPTY BLOCK */
    };
    /**
     * This API should be used to render an error message in the web part display area. Also logs the error message
     * using the trace logger.
     *
     * @param error - An error object containing the error message to render.
     */
    BaseClientSideWebPart.prototype.renderError = function (error) {
        this.context.statusRenderer.clearLoadingIndicator(this.domElement);
        this.context.statusRenderer.renderError(this.domElement, error);
        _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__["_TraceLogger"].logError(this._logSource, error);
    };
    /**
     * This API should be used to clear the error message from the web part display area.
     */
    BaseClientSideWebPart.prototype.clearError = function () {
        this.context.statusRenderer.clearError(this.domElement);
    };
    /**
     * Internal API to trigger a refresh to the WebPart's visual rendition.
     * In this implementation of the BaseWebPart class we call the render API.
     *
     * @internal
     */
    BaseClientSideWebPart.prototype._refresh = function () {
        this._renderWithAccessibleTitle();
    };
    /**
     * Internal API triggered by a dynamic property's callback.
     * In this implementation of the BaseWebPart class we call the render API, only if rendered once.
     *
     * @internal
     */
    BaseClientSideWebPart.prototype._dynamicPropertyRefresh = function () {
        if (this.renderedOnce) {
            this.render();
        }
    };
    /**
     * @returns extends base width cache key with additional info to minimize reflows.
     *  Otherwise if base cache key does not exist return undefined.
     * @internal
     */
    BaseClientSideWebPart.prototype._getExtendedWidthCacheKey = function () {
        var baseKey = this.context.widthCacheKey;
        return baseKey ? this.displayMode + "-" + baseKey : undefined;
    };
    /**
     * The actual initialization and rendering of the Web part starts when it is close enough
     * to the Viewport
     */
    BaseClientSideWebPart.prototype._onInViewport = function () {
        var _this = this;
        // Render promise callback should be defined at this time.
        if (!this._renderPromiseResolver || !this._renderPromiseRejecter) {
            throw _error_SPWebPartError__WEBPACK_IMPORTED_MODULE_7__["SPWebPartError"].create(_error_SPWebPartError__WEBPACK_IMPORTED_MODULE_7__["SPWebPartErrorCode"].RenderPromiseUndefined, this.context.webPartTag);
        }
        // Perform web part initialization and then render the web part.
        var initPromise = this.onInit();
        if (!initPromise) {
            var error = _error_SPWebPartError__WEBPACK_IMPORTED_MODULE_7__["SPWebPartError"].create(_error_SPWebPartError__WEBPACK_IMPORTED_MODULE_7__["SPWebPartErrorCode"].OnInitReturnedNullPromise, this.context.webPartTag);
            this._renderPromiseRejecter(error);
            this._clearRenderPromises();
            return;
        }
        this._firstTimeRenderPromises.push(initPromise);
        initPromise
            .then(function () {
            _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_1__["_PerformanceLogger"].markComponent(_this.context.webPartTag, 'init');
            var getDataPromise = Promise.resolve();
            // Perform web part initialization and then render the web part.
            getDataPromise = _this._internalGetData();
            if (!getDataPromise) {
                throw _error_SPWebPartError__WEBPACK_IMPORTED_MODULE_7__["SPWebPartError"].create(_error_SPWebPartError__WEBPACK_IMPORTED_MODULE_7__["SPWebPartErrorCode"].GetDataReturnedNullPromise, _this.context.webPartTag);
            }
            _this._firstTimeRenderPromises.push(getDataPromise);
            var renderPromise = getDataPromise.then(function () {
                _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_1__["_PerformanceLogger"].markComponent(_this.context.webPartTag, 'getDataComplete');
                // Clear the loading indicator
                _this.context.statusRenderer.clearLoadingIndicator(_this.domElement);
                var isAsyncTimerKSActivated = Object(_common_KillSwitches__WEBPACK_IMPORTED_MODULE_6__["isMoveAsyncTimerKSActivated"])();
                if (!isAsyncTimerKSActivated && _this.isRenderAsync) {
                    _this._startAsyncRenderGuardTimer();
                }
                _this._renderWithAccessibleTitle();
                // Record the time framework has finished calling render(). By this time framework is accountable
                // for loading web part module through fasted CDN and loading web part data through appropriate
                // techniques like Web part cache and synchronous time to execute web part's render() method.
                _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_1__["_PerformanceLogger"].markComponent(_this.context.webPartTag, 'syncRender');
                // If rendering happened synchronously, simply complete the rendering cycle.
                // Else, create a new promise and wait for it to be resolved. The resolution
                // can happen when the web part completes the promise or when the timeout fires.
                if (!_this.isRenderAsync) {
                    _this._resolveOrRejectOnRenderPromise();
                }
                else if (isAsyncTimerKSActivated) {
                    _this._startAsyncRenderGuardTimer();
                }
            });
            return renderPromise;
        })
            .catch(function (e) {
            if (_this._renderPromiseRejecter) {
                _this._renderPromiseRejecter(e);
                _this._clearRenderPromises();
            }
        });
    };
    /**
     * Wraps render to ensure any type of rendering has access to the latest context
     * to provide the most accurate accessible info to screen readers.
     */
    BaseClientSideWebPart.prototype._renderWithAccessibleTitle = function () {
        _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_1__["_PerformanceLogger"].devMark("webpart(" + this.context.webPartTag + ")._renderWithAccessibleTitle");
        this.render();
        // The accessible label is only required in edit mode. It is also not required for mobile devices
        // which only provide view mode
        if (this.displayMode === _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_3__["DisplayMode"].Edit) {
            // Render the accessible description after and associate by ID to avoid re-rendering the whole zone
            // when webpart updates contextual info.
            var accessibleContext = this.accessibleTitle || this._getDefaultAccessibleTitle();
            if (accessibleContext) {
                // Keep ID in sync with ControlZone.render
                var contextualLabelId = "cswpAccessibleLabelContextual_" + this.context.instanceId;
                var accessibleDiv = this.domElement.querySelector("#" + contextualLabelId);
                var isNewLabelElement = !accessibleDiv;
                if (isNewLabelElement) {
                    accessibleDiv = document.createElement('div');
                    accessibleDiv.id = contextualLabelId;
                    accessibleDiv.className = _styles_cswp_base_module_scss__WEBPACK_IMPORTED_MODULE_9__["default"].screenReaderOnly;
                    accessibleDiv.setAttribute('aria-hidden', 'true');
                }
                accessibleDiv.textContent = accessibleContext;
                if (isNewLabelElement) {
                    this.domElement.appendChild(accessibleDiv);
                }
            }
            // Perform classic page fixup. It should only be called in edit mode otherwise it will
            // make anchor elements not working in view mode.
            _classicPages_ClassicPageUtils__WEBPACK_IMPORTED_MODULE_5__["default"].disableAutomaticPostbacks(this.domElement, _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_3__["Environment"].type);
        }
    };
    /**
     * Start async guard timer. This timer is to help avoid losing performance markers for a web part
     * that renders asynchronously but does not call the `renderCompleted` API;
     */
    BaseClientSideWebPart.prototype._startAsyncRenderGuardTimer = function () {
        var _this = this;
        // Note: the timer is 25 seconds because after 30 seconds, the PerformanceLogger will auto expire
        // the log timer and we will lose data. This value needs to be smaller than that.
        this._clearAsyncRenderGuardTimer();
        this._asyncRenderGuardTimer = window.setTimeout(function () {
            _this._asyncRenderTimeout();
        }, 25000);
    };
    /**
     * Render completed.
     */
    BaseClientSideWebPart.prototype._renderCompleted = function () {
        if (this._asyncRenderGuardTimer) {
            this._clearAsyncRenderGuardTimer();
            this._asyncRenderQosMonitor.writeSuccess({
                alias: this.context.manifest.alias,
                webPartId: this.context.manifest.id
            });
            this._resolveOrRejectOnRenderPromise();
        }
    };
    BaseClientSideWebPart.prototype._handleAsyncRenderFailed = function (error) {
        this._logAsyncRenderError(error, 'Failed');
        this._resolveOrRejectOnRenderPromise(error);
    };
    /**
     * Async render timed out. Log error information and
     */
    BaseClientSideWebPart.prototype._asyncRenderTimeout = function () {
        // There is a potential race condition when the async guard timer gets queued into the javascript
        // task queue right at the time when renderCompleted API gets called. Protect against that.
        if (this._asyncRenderGuardTimer) {
            this._clearAsyncRenderGuardTimer();
            // At this time we only log an error and fail the QOS monitor when the async guard timer fires.
            var error = _error_SPWebPartError__WEBPACK_IMPORTED_MODULE_7__["SPWebPartError"].create(_error_SPWebPartError__WEBPACK_IMPORTED_MODULE_7__["SPWebPartErrorCode"].RenderCompletedCallNotCalled, this.context.webPartTag);
            this._logAsyncRenderError(error, 'Timeout');
            this._resolveOrRejectOnRenderPromise();
        }
    };
    BaseClientSideWebPart.prototype._logAsyncRenderError = function (error, qosFailureTag) {
        _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__["_TraceLogger"].logErrorData({
            source: this._logSource,
            error: error,
            serviceScope: this.context.serviceScope
        });
        this._asyncRenderQosMonitor.writeUnexpectedFailure(qosFailureTag, error, {
            alias: this.context.manifest.alias,
            webPartId: this.context.manifest.id,
            instanceId: this.instanceId
        });
    };
    BaseClientSideWebPart.prototype._clearAsyncRenderGuardTimer = function () {
        if (this._asyncRenderGuardTimer) {
            window.clearTimeout(this._asyncRenderGuardTimer);
            this._asyncRenderGuardTimer = undefined;
        }
    };
    /**
     * This is called for every web part whether sync or async once rendering is completed.
     */
    BaseClientSideWebPart.prototype._resolveOrRejectOnRenderPromise = function (error) {
        this._renderedOnce = true;
        _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_1__["_PerformanceLogger"].devMark("webpart(" + this.context.webPartTag + ").complete");
        if (!Object(_common_KillSwitches__WEBPACK_IMPORTED_MODULE_6__["isAllowProactiveRenderFailureKsActivated"])() && error) {
            if (this._renderPromiseRejecter) {
                this._renderPromiseRejecter(error);
            }
        }
        else {
            if (this._renderPromiseResolver) {
                if (!_common_KillSwitches__WEBPACK_IMPORTED_MODULE_6__["default"].isResolveRenderTimeActivated()) {
                    this._renderPromiseResolver(_ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_1__["_PerformanceLogger"].now());
                }
                else {
                    this._renderPromiseResolver();
                }
            }
        }
        this._clearRenderPromises();
    };
    BaseClientSideWebPart.prototype._clearRenderPromises = function () {
        this._renderPromiseResolver = undefined;
        this._renderPromiseRejecter = undefined;
        // Reset minHeight
        this.domElement.style.minHeight = null; // tslint:disable-line:no-null-keyword no-any
    };
    return BaseClientSideWebPart;
}(_BaseWebPart__WEBPACK_IMPORTED_MODULE_4__["default"]));
/* harmony default export */ __webpack_exports__["default"] = (BaseClientSideWebPart);


/***/ }),

/***/ "fNzW":
/*!***********************************************************************************************!*\
  !*** ../sp-property-pane/lib/propertyPaneFields/propertyPaneDropdown/PropertyPaneDropdown.js ***!
  \***********************************************************************************************/
/*! exports provided: PropertyPaneDropdown */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertyPaneDropdown", function() { return PropertyPaneDropdown; });
/* harmony import */ var _propertyPaneField_IPropertyPaneField__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../propertyPaneField/IPropertyPaneField */ "3ZYD");
// Copyright (c) Microsoft. All rights reserved.

/**
 * Helper method to create a Dropdown on the PropertyPane.
 * @param targetProperty - Target property the dropdown is associated to.
 * @param properties - Strongly typed Dropdown properties.
 *
 * @public
 */
function PropertyPaneDropdown(targetProperty, properties) {
    return {
        type: _propertyPaneField_IPropertyPaneField__WEBPACK_IMPORTED_MODULE_0__["PropertyPaneFieldType"].Dropdown,
        targetProperty: targetProperty,
        properties: properties
    };
}


/***/ }),

/***/ "htbj":
/*!******************************************!*\
  !*** ./lib/core/WebPartDataConverter.js ***!
  \******************************************/
/*! exports provided: WebPartDataConverter, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebPartDataConverter", function() { return WebPartDataConverter; });
/* harmony import */ var _microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/sp-lodash-subset */ "Pk8u");
/* harmony import */ var _microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _error_SPWebPartError__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./error/SPWebPartError */ "ybLs");
// Copyright (c) Microsoft. All rights reserved.
/* tslint:disable:member-ordering */



/**
 * On the client, we need to support both HTML and and JSON format of the web part data. This is a utility
 * class to perform conversion between the two formats.
 *
 * @internal
 */
var WebPartDataConverter = /** @class */ (function () {
    function WebPartDataConverter() {
    }
    Object.defineProperty(WebPartDataConverter, "_parsingDocument", {
        /**
         * A temporary document detached from the main document for HTML parsing (call createElement on this)
         *
         * Note: Using document.createElement will create the element on the running document of the page which is
         * dangerous, because when you set innerHTML on the element the content will immediately run on the page.
         * That causes a security issue because we might be parsing something that has a <script> tag (XSS attack).
         * In case of <img> tags, the image gets downloaded immediately which is also unwanted behavior. So, for
         * parsing purposes, we should never use document.createElement and insead use this._parsingDocument.createElement.
         *
         */
        get: function () {
            if (!this._tempDoc) {
                this._tempDoc = document.implementation.createHTMLDocument('tempDocument');
            }
            return this._tempDoc;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Is this string a html web part data ?
     */
    WebPartDataConverter.isWebPartHtml = function (htmlString) {
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["Validate"].isNonemptyString(htmlString, 'htmlString');
        return (htmlString.indexOf('<div') === 0 &&
            htmlString.indexOf(WebPartDataConverter._webPartDataAttribute) !== -1);
    };
    /**
     * Converts an instance of IWebPartData to is corresponding persisted HTML element.
     * See WebPartDataConverter tests for examples.
     */
    WebPartDataConverter.convertWebPartDataToHtml = function (webpartData) {
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["Validate"].isNotNullOrUndefined(webpartData, 'web part data');
        // Clone web part data because we will modify it for conversion
        var wpdata = _microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_0__["cloneDeep"](webpartData);
        WebPartDataConverter._initializeIfNeeded();
        // Add the component id so the GUIDs get search indexed and we can look them up in search
        var componentIdDiv = WebPartDataConverter._wpComponentIdDiv.cloneNode();
        componentIdDiv.textContent = wpdata.id;
        var htmlPropsDiv = WebPartDataConverter._wpHtmlPropsDiv.cloneNode();
        htmlPropsDiv.innerHTML = WebPartDataConverter.convertServerProcessedDataToHtml(wpdata.serverProcessedContent);
        // Server-processed data is translated to html, so clear it out in the IWebPartData object to avoid duplication
        wpdata.serverProcessedContent = undefined;
        var wpHtmlDiv = WebPartDataConverter._wpDiv.cloneNode();
        // We don't need any attribute encoding because dom parser inherently encode/decodes when dealing with innerHTML
        wpHtmlDiv.setAttribute(WebPartDataConverter._webPartDataAttribute, JSON.stringify(wpdata));
        wpHtmlDiv.appendChild(componentIdDiv);
        wpHtmlDiv.appendChild(htmlPropsDiv);
        var wrapper = WebPartDataConverter._parsingDocument.createElement('div');
        wrapper.appendChild(wpHtmlDiv);
        return wrapper.innerHTML;
    };
    /**
     * Converts persisted html element for a web part to its corresponding IWebPartData instance.
     *
     * @remarks
     * Returns undefined in case of bad input.
     * See WebPartDataConverter tests for examples
     *
     * @param htmlString - html formatted web part data.
     * @param links - (optional) Array of the fixed up links. If provided, the values in this array
     *   take over the values in the HTML markup.
     */
    WebPartDataConverter.convertHtmlToWebPartData = function (htmlString, links) {
        var wpdata;
        var wrapper = WebPartDataConverter._parsingDocument.createElement('div');
        wrapper.innerHTML = htmlString.trim();
        // Use children (instead of childNodes) to avoid getting text nodes
        var wpHtmlDiv = wrapper.children[0];
        if (wpHtmlDiv && wpHtmlDiv.hasAttribute(WebPartDataConverter._webPartAttribute)) {
            var wpHtmlDivWebPartAttributeData = wpHtmlDiv.getAttribute(WebPartDataConverter._webPartDataAttribute);
            if (wpHtmlDivWebPartAttributeData) {
                wpdata = JSON.parse(wpHtmlDivWebPartAttributeData);
            }
            // In case of bad input, wpdata will be null
            if (wpdata) {
                var htmlPropsDiv = wpHtmlDiv.querySelector("[" + WebPartDataConverter._htmlPropertiesAttribute + "]");
                wpdata.serverProcessedContent = WebPartDataConverter.convertServerProcessedHtmlToData(htmlPropsDiv.innerHTML, links);
            }
        }
        return wpdata || undefined;
    };
    /**
     * Convert server process data to an equivalent HTML stirng format that the SharePoint server
     * can process for search indexing, link fixup and SafeHTML processing.
     *
     * @remarks
     * HtmlStrings are search indexed. Links and ImageSources are setup for link fixup. All of these are
     * search indexed and passed through SafeHtml processing to sanitize the content.
     *
     * This method is expected to provide reverse processing as compared to `convertHtmltoServerProcessedData`.
     *
     * Input:
     *
     * ```
     * {
     *   htmlStrings: { 'prop1': 'value_of_prop1' },
     *   links: { 'prop2': 'http://www.contoso.com/page1.aspx' },
     *   imageSources: { 'prop3': 'http://www.contoso.com/imag.png' }
     * }
     * ```
     *
     * Output:
     *
     * ```
     * "<div data-sp-prop-name='prop1'>value_of_prop1</div>
     *  <link data-sp-prop-name='prop2' href='http://www.contoso.com/page1.aspx'>
     *  <img data-sp-prop-name='prop3' src='http://www.contoso.com/image.png'>"
     * ```
     */
    WebPartDataConverter.convertServerProcessedDataToHtml = function (serverContent) {
        var result = '';
        if (serverContent) {
            if (serverContent.htmlStrings) {
                result += WebPartDataConverter._convertServerProcessedDataToHtmlByType(serverContent.htmlStrings, 1 /* htmlString */);
            }
            if (serverContent.searchablePlainTexts) {
                result += WebPartDataConverter._convertServerProcessedDataToHtmlByType(serverContent.searchablePlainTexts, 4 /* searchablePlainText */);
            }
            if (serverContent.links) {
                result += WebPartDataConverter._convertServerProcessedDataToHtmlByType(serverContent.links, 2 /* link */);
            }
            if (serverContent.imageSources) {
                result += WebPartDataConverter._convertServerProcessedDataToHtmlByType(serverContent.imageSources, 3 /* imageSource */);
            }
        }
        return result;
    };
    WebPartDataConverter._convertServerProcessedDataToHtmlByType = function (properties, type) {
        var result = '';
        for (var propPath in properties) {
            /* tslint:disable-line:forin */
            var value = properties[propPath];
            result += WebPartDataConverter._getHtmlString(propPath, type, value);
        }
        return result;
    };
    /**
     * Convert an HTML string to its equivalent ISerializedServerProcessedData structure format.
     *
     * @remarks
     * This method is expected to provide reverse processing as compared to convertServerProcessedDataToHtml.
     *
     * Input:
     *
     * ```
     * "<div data-sp-prop-name='prop1'>value_of_prop1</div>
     *  <link data-sp-prop-name='prop2' href='http://www.contoso.com/page1.aspx'>
     *  <img data-sp-prop-name='prop3' src='http://www.contoso.com/image.png'>"
     * ```
     *
     * Output:
     *
     * ```
     * {
     *   htmlStrings: { 'prop1': 'value_of_prop1' },
     *   links: { 'prop2': 'http://www.contoso.com/page1.aspx' },
     *   imageSources: { 'prop3': 'http://www.contoso.com/imag.png' }
     * }
     * ```
     *
     * Array of the fixed up links. If provided, the values in this array take over the values in the HTML markup.
     */
    WebPartDataConverter.convertServerProcessedHtmlToData = function (htmlString, links) {
        var serverContent = {
            htmlStrings: {},
            searchablePlainTexts: {},
            links: {},
            imageSources: {}
        };
        if (!htmlString || htmlString === '') {
            return serverContent;
        }
        var tempNode = WebPartDataConverter._parsingDocument.createElement('DIV');
        tempNode.innerHTML = htmlString;
        var nodes = tempNode.children;
        for (var i = 0; i < nodes.length; i++) {
            var node = nodes[i];
            var key = node.getAttribute(WebPartDataConverter._propNameAttribute);
            if (key) {
                switch (node.tagName) {
                    case 'DIV':
                        if (node.hasAttribute(WebPartDataConverter._searchablePlainTextAttribute) &&
                            serverContent.searchablePlainTexts) {
                            serverContent.searchablePlainTexts[key] = node.textContent;
                        }
                        else if (serverContent.htmlStrings) {
                            serverContent.htmlStrings[key] = node.innerHTML;
                        }
                        break;
                    case 'LINK':
                    case 'A':
                        if (links) {
                            WebPartDataConverter._extractSPLink(node, links, serverContent, key, false);
                        }
                        else {
                            var aTagAttribute = node.getAttribute('href');
                            if (aTagAttribute && serverContent.links) {
                                serverContent.links[key] = aTagAttribute;
                            }
                        }
                        break;
                    // Look for SPIMG because Canvas may replace IMG tags with SPIMG to prevent browser pre-loading
                    case 'IMG':
                    case 'SPIMG':
                        if (links) {
                            WebPartDataConverter._extractSPLink(node, links, serverContent, key, true);
                        }
                        else {
                            var srcAttribute = node.getAttribute('src');
                            if (serverContent.imageSources && srcAttribute) {
                                serverContent.imageSources[key] = srcAttribute;
                            }
                            // This is a temporary fix to make pages published with the mobile app functional.
                            // The mobile app sets the href attribute on the image tag instead of the src attribute.
                            // (SPPPLAT VSO#289988) tracks removal of this code.
                            var hrefAttribute = node.getAttribute('href');
                            if (hrefAttribute &&
                                serverContent &&
                                serverContent.imageSources &&
                                /* tslint:disable-next-line:no-null-keyword */
                                (serverContent.imageSources[key] === undefined || serverContent.imageSources[key] === null)) {
                                serverContent.imageSources[key] = hrefAttribute;
                            }
                        }
                        break;
                }
            }
        }
        return serverContent;
    };
    /**
     * Get the HTML equivalent string for a server processed prop type.
     */
    WebPartDataConverter._getHtmlString = function (propName, propType, propValue) {
        var htmlPropsString = '';
        if (propName && typeof propValue === 'string' && propValue) {
            switch (propType) {
                case 1 /* htmlString */:
                    var htmlDiv = this._parsingDocument.createElement('DIV');
                    htmlDiv.setAttribute(WebPartDataConverter._propNameAttribute, propName);
                    var sanitizedValue = WebPartDataConverter._normalizeHTML(propValue);
                    htmlDiv.innerHTML = sanitizedValue;
                    htmlPropsString = htmlDiv.outerHTML;
                    break;
                case 4 /* searchablePlainText */:
                    var plainTextDiv = this._parsingDocument.createElement('DIV');
                    plainTextDiv.setAttribute(WebPartDataConverter._propNameAttribute, propName);
                    plainTextDiv.setAttribute(WebPartDataConverter._searchablePlainTextAttribute, 'true');
                    plainTextDiv.textContent = propValue;
                    htmlPropsString = plainTextDiv.outerHTML;
                    break;
                case 2 /* link */:
                    var anchorDiv = this._parsingDocument.createElement('A');
                    anchorDiv.setAttribute(WebPartDataConverter._propNameAttribute, propName);
                    anchorDiv.setAttribute('href', propValue);
                    htmlPropsString = anchorDiv.outerHTML;
                    break;
                case 3 /* imageSource */:
                    var imgDiv = this._parsingDocument.createElement('IMG');
                    imgDiv.setAttribute(WebPartDataConverter._propNameAttribute, propName);
                    imgDiv.setAttribute('src', propValue);
                    htmlPropsString = imgDiv.outerHTML;
                    break;
            }
        }
        return htmlPropsString;
    };
    /**
     * We need to send valid html from client, because server should understand it to perform services. This method
     * normalizes html by doing basic validations and removing script tags. Returns empty string if passed invalid HTML.
     * Note that this is not a strict html validation, it just needs to make sure the page doesn't break so the
     * html value (or a valid part of it) gets to server for proper validation and sanitization
     */
    WebPartDataConverter._normalizeHTML = function (htmlString) {
        if (!htmlString || htmlString === '') {
            return htmlString;
        }
        var tempDiv = WebPartDataConverter._parsingDocument.createElement('DIV');
        /* This is a trick to detect invalid html. We put the html string inside a simple structure and check if the DOM
        created for the structure is as expected. If there are unexpected closing tags or characters in the html string
        the structure of this element will be messed up and one our checks would fail */
        tempDiv.innerHTML =
            "<div class='child1'></div>" + ("<div class='main'>" + htmlString + "</div>") + "<div class='child3'></div>";
        var children = tempDiv.children;
        if (!children[0] ||
            children[0].className !== 'child1' ||
            !children[1] ||
            children[1].className !== 'main' ||
            !children[2] ||
            children[2].className !== 'child3') {
            return '';
        }
        // Remove script tags
        // @todo #286930 Make this more robust
        var mainDiv = children[1];
        var scriptTags = mainDiv.querySelectorAll('script');
        for (var i = 0; i < scriptTags.length; i++) {
            var scriptTag = scriptTags[0];
            if (scriptTag && scriptTag.parentElement) {
                scriptTag.parentElement.removeChild(scriptTag);
            }
        }
        return mainDiv.innerHTML;
    };
    WebPartDataConverter._initializeIfNeeded = function () {
        if (!WebPartDataConverter._wpDiv) {
            WebPartDataConverter._wpDiv = WebPartDataConverter._parsingDocument.createElement('div');
            WebPartDataConverter._wpDiv.setAttribute(WebPartDataConverter._webPartAttribute, '');
            WebPartDataConverter._wpDiv.setAttribute(WebPartDataConverter._webPartDataVersionAttribute, '1.0');
            // Note: data-sp-componentid attribute is looked up by the server for module pre-loading
            WebPartDataConverter._wpComponentIdDiv = WebPartDataConverter._parsingDocument.createElement('div');
            WebPartDataConverter._wpComponentIdDiv.setAttribute(WebPartDataConverter._componentIdAttribute, '');
            WebPartDataConverter._wpHtmlPropsDiv = WebPartDataConverter._parsingDocument.createElement('div');
            WebPartDataConverter._wpHtmlPropsDiv.setAttribute(WebPartDataConverter._htmlPropertiesAttribute, '');
        }
    };
    /**
     * Extract the link by processing the links array and the index in the data-sp-splink attribute whose
     * value should be of the format  `__SPLINK__<index>__` where index is the index in the links array.
     */
    WebPartDataConverter._extractSPLink = function (node, links, serverContent, key, isImage) {
        if (links.length <= 0) {
            return;
        }
        var spLinkAttribute = node.getAttribute('data-sp-splink');
        if (spLinkAttribute) {
            var result = WebPartDataConverter._linkPlaceHolderRegex.exec(spLinkAttribute);
            if (result) {
                var index = parseInt(result[1], 10);
                if (!isNaN(index) && !!links[index]) {
                    if (isImage && serverContent.imageSources) {
                        serverContent.imageSources[key] = links[index];
                    }
                    else if (serverContent.links) {
                        serverContent.links[key] = links[index];
                    }
                }
                else {
                    throw _error_SPWebPartError__WEBPACK_IMPORTED_MODULE_2__["SPWebPartError"].create(_error_SPWebPartError__WEBPACK_IMPORTED_MODULE_2__["SPWebPartErrorCode"].InvalidSPLinkIndex, result[1]);
                }
            }
            else {
                throw _error_SPWebPartError__WEBPACK_IMPORTED_MODULE_2__["SPWebPartError"].create(_error_SPWebPartError__WEBPACK_IMPORTED_MODULE_2__["SPWebPartErrorCode"].InvalidSPLinkAttributeFormat, spLinkAttribute);
            }
        }
    };
    WebPartDataConverter._componentIdAttribute = 'data-sp-componentid';
    WebPartDataConverter._htmlPropertiesAttribute = 'data-sp-htmlproperties';
    WebPartDataConverter._propNameAttribute = 'data-sp-prop-name';
    WebPartDataConverter._searchablePlainTextAttribute = 'data-sp-searchableplaintext';
    WebPartDataConverter._webPartAttribute = 'data-sp-webpart';
    WebPartDataConverter._webPartDataAttribute = 'data-sp-webpartdata';
    WebPartDataConverter._webPartDataVersionAttribute = 'data-sp-webpartdataversion';
    /*
     * Regular expression used to extract the integer value from the __SPLINK__<number>__ placeholder.
     */
    WebPartDataConverter._linkPlaceHolderRegex = /^__SPLINK__(\d+)__$/;
    return WebPartDataConverter;
}());

/* harmony default export */ __webpack_exports__["default"] = (WebPartDataConverter);


/***/ }),

/***/ "jOUx":
/*!***********************************************!*\
  !*** ./lib/core/styles/cswp-base.module.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _microsoft_load_themed_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/load-themed-styles */ "jOlS");
/* harmony import */ var _microsoft_load_themed_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_load_themed_styles__WEBPACK_IMPORTED_MODULE_0__);
// Imports


_microsoft_load_themed_styles__WEBPACK_IMPORTED_MODULE_0__["loadStyles"](".a_a_7caff1a1{padding:12px 0;overflow:hidden;position:relative;top:0;left:0;right:0;z-index:1;display:inline-block}[dir=ltr] .a_a_7caff1a1{text-align:left}[dir=rtl] .a_a_7caff1a1{text-align:right}.b_a_7caff1a1{position:relative;display:inline-block;white-space:pre-wrap;color:#605e5c;font-weight:700}.c_a_7caff1a1{text-transform:uppercase;color:#0078d4;border:none;background:none;margin-top:20px}[dir=ltr] .c_a_7caff1a1{padding-left:0}[dir=rtl] .c_a_7caff1a1{padding-right:0}.e_a_7caff1a1{font-weight:400;color:#0078d4}.f_a_7caff1a1{font-weight:700;color:#0078d4}.g_a_7caff1a1{position:absolute;text-indent:-9999px;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;border:0}", true);

// Exports
/* harmony default export */ __webpack_exports__["default"] = ({
  errorBox: "a_a_7caff1a1",
  errorBoxText: "b_a_7caff1a1",
  detailsButton: "c_a_7caff1a1",
  somethingWentWrongText: "e_a_7caff1a1",
  siteAdminText: "f_a_7caff1a1",
  screenReaderOnly: "g_a_7caff1a1"
});


/***/ }),

/***/ "jOlS":
/*!************************************************!*\
  !*** external "@microsoft/load-themed-styles" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_jOlS__;

/***/ }),

/***/ "jeXa":
/*!**********************************!*\
  !*** ./lib/core/IWebPartData.js ***!
  \**********************************/
/*! exports provided: WebPartIsolationLevel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebPartIsolationLevel", function() { return WebPartIsolationLevel; });
// Copyright (c) Microsoft. All rights reserved.
/**
 * Enum describing different levels isolation supported for a web part.
 *
 * @alpha
 */
var WebPartIsolationLevel;
(function (WebPartIsolationLevel) {
    /**
     * Web part is not isolated.
     */
    WebPartIsolationLevel["None"] = "None";
    /**
     * Web part's DOM is isolated from the main page's DOM.
     */
    WebPartIsolationLevel["DomIsolation"] = "DOMIsolation";
})(WebPartIsolationLevel || (WebPartIsolationLevel = {}));


/***/ }),

/***/ "kGqN":
/*!***********************************!*\
  !*** ./lib/core/loc/Strings.resx ***!
  \***********************************/
/*! exports provided: ManifestDownloadFailed, ManifestNullError, ManifestInvalidError, ReadOnlyPropertyError, BaseConstructError, MustOverrideRenderError, NonBaseWebPartError, NotIntializedError, PropertyBagNullError, UndefinedModuleError, ModuleNotLoadedError, IncorrectBoostrapModuleError, MissingExpectedWebPartMemberError, ScriptLoadErrorTemplate, SerializationFailedError, RenderCompletedCallNotCalledError, FirstTimeRenderCalledMoreThanOnceError, InvalidSPLinkAttributeFormatError, InvalidSPLinkIndexError, LoadingStatus, OnAfterDeserializeReturnedNull, OnInitReturnedNullPromise, GenericAccessibleLabelTemplate, StartedLoadingWebPart, WebpartErrorSomethingWentWrong, WebpartErrorSiteAdminAdvice, WebpartErrorTechnicalDetails, WebpartErrorCallStackText, WebpartErrorErrorText, LoadWebpartCalled, WebpartDeleteRequested, UnexpectedLoadRequestNegativeCount, RenderPromiseUndefinedError, RenderTimeout, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"ManifestDownloadFailed\":\"[!!--##Màńĩƒēśţś ƒàĩĺ ţō ďōŵńĺōàď.##--!!]\",\"ManifestNullError\":\"[!!--##Màńĩƒēśţ ƒōŕ ţĥē ŵēƀ ƥàŕţ {0} ĩś ńũĺĺ.##--!!]\",\"ManifestInvalidError\":\"[!!--##Màńĩƒēśţ ƒōŕ ţĥē ŵēƀ ƥàŕţ {0} ĩś ĩńvàĺĩď.##--!!]\",\"ReadOnlyPropertyError\":\"[!!--##Ţĥĩś ĩś à ŕēàď-ōńĺŷ ƥŕōƥēŕţŷ.##--!!]\",\"BaseConstructError\":\"[!!--##ßàśēĆĺĩēńţŚĩďēŴēƀƤàŕţ ĩś àń àƀśţŕàćţ ćĺàśś àńď mũśţ ƀē ēxţēńďēď ƀēƒōŕē ũśē.##--!!]\",\"MustOverrideRenderError\":\"[!!--##Ŕēńďēŕ mēţĥōď ńēēďś ţō ƀē ōvēŕŕĩďēń ĩń ţĥē ďēŕĩvēď ćĺàśś ōƒ ŵēƀ ƥàŕţ {0}.##--!!]\",\"NonBaseWebPartError\":\"[!!--##Ŵēƀ ƥàŕţ {0} mũśţ ĩńĥēŕĩţ ƒŕōm ţĥē ßàśēĆĺĩēńţŚĩďēŴēƀƤàŕţ ćĺàśś.##--!!]\",\"NotIntializedError\":\"[!!--##Ŵēƀ ƥàŕţ {0} ŵàś ńōţ ĩńĩţĩàĺĩźēď ƥŕōƥēŕĺŷ. Ŵēƀ ƥàŕţś mũśţ ƀē ĩńśţàńţĩàţēď ũśĩńĝ ţĥē ĆĺĩēńţŚĩďēŴēƀƤàŕţMàńàĝēŕ. Màńŷ ŵēƀ ƥàŕţ ƒēàţũŕēś ćàńńōţ ƀē ũśēď ţĩĺĺ ţĥē ĩńĩţĩàĺĩźàţĩōń ĩś ćōmƥĺēţē.##--!!]\",\"PropertyBagNullError\":\"[!!--##Ńũĺĺ ƥŕōƥēŕţŷ ƀàĝ ĩś ńōţ àĺĺōŵēď ƒōŕ ŵēƀ ƥàŕţ {0}. Ēmƥţŷ ƥŕōƥēŕţŷ ƀàĝ ĩś śũƥƥōŕţēď.##--!!]\",\"UndefinedModuleError\":\"[!!--##Mōďũĺē ĩś ńōţ ĺōàďēď ōŕ ńōţ ďēƒĩńēď ĩń ţĥē màńĩƒēśţ ƒōŕ ŵēƀ ƥàŕţ {0}.##--!!]\",\"ModuleNotLoadedError\":\"[!!--##ßōōţśţŕàƥ mōďũĺē ƒōŕ ŵēƀ ƥàŕţ {0} ĩś ńōţ ĺōàďēď. Mōďũĺē ńàmēś ēxƥōŕţēď ƀŷ ţĥē ƀũńďĺē àŕē \\u0027{1}\\u0027.##--!!]\",\"IncorrectBoostrapModuleError\":\"[!!--##ßōōţśţŕàƥ mōďũĺē ƒōŕ ŵēƀ ƥàŕţ {0} ńōţ ōƒ ţĥē ćōŕŕēćţ ţŷƥē. Màķē śũŕē ţō ēxƥōŕţ ŷōũŕ ŵēƀ ƥàŕţ àś \\u0027ēxƥōŕţ ďēƒàũĺţ ŴēƀƤàŕţŃàmē\\u0027.##--!!]\",\"MissingExpectedWebPartMemberError\":\"[!!--##Ţĥē ćĺàśś ƒōŕ ŵēƀ ƥàŕţ {0} ĩś mĩśśĩńĝ àń ēxƥēćţēď mēmƀēŕ \\u0027{1}\\u0027.##--!!]\",\"ScriptLoadErrorTemplate\":\"[!!--##Ũńàƀĺē ţō ĺōàď ŵēƀ ƥàŕţ {0} śćŕĩƥţ ŕēśōũŕćēś ďũē ţō: {1}.##--!!]\",\"SerializationFailedError\":\"[!!--##Śēŕĩàĺĩźàţĩōń ƒàĩĺēď ƒōŕ ŵēƀ ƥàŕţ {0}.##--!!]\",\"RenderCompletedCallNotCalledError\":\"[!!--##ŕēńďēŕĆōmƥĺēţēď ĩś ńōţ ćàĺĺēď ƒōŕ àń àśŷńćĥŕōńōũśĺŷ ŕēńďēŕēď ŵēƀ ƥàŕţ {0}.##--!!]\",\"FirstTimeRenderCalledMoreThanOnceError\":\"[!!--##Àţţēmƥţēď ţō ćàĺĺ ƒĩŕśţ ţĩmē ŕēńďēŕ mōŕē ţĥàń ōńćē ƒōŕ ţĥē ŵēƀ ƥàŕţ {0}. Ƥĺēàśē ćōńţàćţ Mĩćŕōśōƒţ ďēvēĺōƥēŕ śũƥƥōŕţ ţō ŕēśōĺvē ţĥĩś.##--!!]\",\"InvalidSPLinkAttributeFormatError\":\"[!!--##Ĩńvàĺĩď ŚƤĹĨŃĶ àţţŕĩƀũţē vàĺũē {0}##--!!]\",\"InvalidSPLinkIndexError\":\"[!!--##Ĩńvàĺĩď ŚƤĹĨŃĶ ĩńďēx vàĺũē {0}##--!!]\",\"LoadingStatus\":\"[!!--##Ĺōàďĩńĝ {0}...##--!!]\",\"OnAfterDeserializeReturnedNull\":\"[!!--##ōńÀƒţēŕĎēśēŕĩàĺĩźē ƒōŕ ŵēƀ ƥàŕţ {0} ŕēţũŕńēď ńũĺĺ ōŕ ũńďēƒĩńēď.##--!!]\",\"OnInitReturnedNullPromise\":\"[!!--##ōńĨńĩţ mēţĥōď ƒōŕ ŵēƀ ƥàŕţ {0} ŕēţũŕńēď ńũĺĺ ōŕ ũńďēƒĩńēď Ƥŕōmĩśē.##--!!]\",\"GenericAccessibleLabelTemplate\":\"[!!--##{0} ŵēƀ ƥàŕţ##--!!]\",\"StartedLoadingWebPart\":\"[!!--##Śţàŕţēď ĺōàďĩńĝ ŵēƀ ƥàŕţ {0}.##--!!]\",\"WebpartErrorSomethingWentWrong\":\"[!!--##Śōmēţĥĩńĝ ŵēńţ ŵŕōńĝ##--!!]\",\"WebpartErrorSiteAdminAdvice\":\"[!!--##Ĩƒ ţĥē ƥŕōƀĺēm ƥēŕśĩśţś, ćōńţàćţ ţĥē śĩţē àďmĩńĩśţŕàţōŕ àńď ĝĩvē ţĥēm ţĥē ĩńƒōŕmàţĩōń ĩń Ţēćĥńĩćàĺ Ďēţàĩĺś.##--!!]\",\"WebpartErrorTechnicalDetails\":\"[!!--##Ţēćĥńĩćàĺ Ďēţàĩĺś##--!!]\",\"WebpartErrorCallStackText\":\"[!!--##ĆÀĹĹ ŚŢÀĆĶ:{0}{1}##--!!]\",\"WebpartErrorErrorText\":\"[!!--##ĒŔŔŌŔ:{0}{1}{0}{0}{2}##--!!]\",\"LoadWebpartCalled\":\"[!!--##Ŕēǫũēśţ {0} ōƒ {1} ŕēćēĩvēď ţō ĺōàď ŵēƀ ƥàŕţ {2}.##--!!]\",\"WebpartDeleteRequested\":\"[!!--##Ŵēƀƥàŕţ {0} ĩś ŕēǫũēśţēď ţō ďēĺēţē.##--!!]\",\"UnexpectedLoadRequestNegativeCount\":\"[!!--##Ũńēxƥēćţēď ńēĝàţĩvē vàĺũē ōƒ _ĺōàďŴēƀƤàŕţŔēǫũēśţś.##--!!]\",\"RenderPromiseUndefinedError\":\"[!!--##Ŵēƀƥàŕţ {0} ŕēńďēŕ ćàĺĺƀàćķ ƥŕōmĩśē ƒōŕ ŕēśōĺvē ōŕ ŕēĴēćţ ĩś ũńďēƒĩńēď.##--!!]\",\"RenderTimeout\":\"[!!--##Ŵēƀƥàŕţ {0} ŕēńďēŕ ţĩmēōũţ.##--!!]\"}");

/***/ }),

/***/ "kj+3":
/*!*******************************!*\
  !*** ./lib/SPPropertyPane.js ***!
  \*******************************/
/*! exports provided: PropertyPaneCustomField, PropertyPaneButton, PropertyPaneCheckbox, PropertyPaneChoiceGroup, PropertyPaneDropdown, PropertyPaneDynamicField, PropertyPaneDynamicFieldSet, PropertyPaneHorizontalRule, PropertyPaneLabel, PropertyPaneLink, PropertyPaneSlider, PropertyPaneTextField, PropertyPaneToggle, PropertyPaneDynamicTextField, PropertyPaneFieldType, PropertyPaneButtonType, PropertyPaneDropdownOptionType, DynamicDataSharedDepth */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertyPaneCustomField", function() { return PropertyPaneCustomField; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertyPaneButton", function() { return PropertyPaneButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertyPaneCheckbox", function() { return PropertyPaneCheckbox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertyPaneChoiceGroup", function() { return PropertyPaneChoiceGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertyPaneDropdown", function() { return PropertyPaneDropdown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertyPaneDynamicField", function() { return PropertyPaneDynamicField; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertyPaneDynamicFieldSet", function() { return PropertyPaneDynamicFieldSet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertyPaneHorizontalRule", function() { return PropertyPaneHorizontalRule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertyPaneLabel", function() { return PropertyPaneLabel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertyPaneLink", function() { return PropertyPaneLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertyPaneSlider", function() { return PropertyPaneSlider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertyPaneTextField", function() { return PropertyPaneTextField; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertyPaneToggle", function() { return PropertyPaneToggle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertyPaneDynamicTextField", function() { return PropertyPaneDynamicTextField; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertyPaneFieldType", function() { return PropertyPaneFieldType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertyPaneButtonType", function() { return PropertyPaneButtonType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertyPaneDropdownOptionType", function() { return PropertyPaneDropdownOptionType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicDataSharedDepth", function() { return DynamicDataSharedDepth; });
/* harmony import */ var _microsoft_sp_property_pane_lib_propertyPaneFields_propertyPaneCustomField_PropertyPaneCustomField__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/sp-property-pane/lib/propertyPaneFields/propertyPaneCustomField/PropertyPaneCustomField */ "w8Nz");
/* harmony import */ var _microsoft_sp_property_pane_lib_propertyPaneFields_propertyPaneButton_PropertyPaneButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/sp-property-pane/lib/propertyPaneFields/propertyPaneButton/PropertyPaneButton */ "F78M");
/* harmony import */ var _microsoft_sp_property_pane_lib_propertyPaneFields_propertyPaneCheckBox_PropertyPaneCheckbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @microsoft/sp-property-pane/lib/propertyPaneFields/propertyPaneCheckBox/PropertyPaneCheckbox */ "nwwH");
/* harmony import */ var _microsoft_sp_property_pane_lib_propertyPaneFields_propertyPaneChoiceGroup_PropertyPaneChoiceGroup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @microsoft/sp-property-pane/lib/propertyPaneFields/propertyPaneChoiceGroup/PropertyPaneChoiceGroup */ "NmNf");
/* harmony import */ var _microsoft_sp_property_pane_lib_propertyPaneFields_propertyPaneDropdown_PropertyPaneDropdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @microsoft/sp-property-pane/lib/propertyPaneFields/propertyPaneDropdown/PropertyPaneDropdown */ "fNzW");
/* harmony import */ var _microsoft_sp_property_pane_lib_propertyPaneFields_propertyPaneDynamicField_PropertyPaneDynamicField__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @microsoft/sp-property-pane/lib/propertyPaneFields/propertyPaneDynamicField/PropertyPaneDynamicField */ "tstL");
/* harmony import */ var _microsoft_sp_property_pane_lib_propertyPaneFields_propertyPaneDynamicFieldSet_PropertyPaneDynamicFieldSet__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @microsoft/sp-property-pane/lib/propertyPaneFields/propertyPaneDynamicFieldSet/PropertyPaneDynamicFieldSet */ "1a3C");
/* harmony import */ var _microsoft_sp_property_pane_lib_propertyPaneFields_propertyPaneHorizontalRule_PropertyPaneHorizontalRule__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @microsoft/sp-property-pane/lib/propertyPaneFields/propertyPaneHorizontalRule/PropertyPaneHorizontalRule */ "vlHk");
/* harmony import */ var _microsoft_sp_property_pane_lib_propertyPaneFields_propertyPaneLabel_PropertyPaneLabel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @microsoft/sp-property-pane/lib/propertyPaneFields/propertyPaneLabel/PropertyPaneLabel */ "Lz2h");
/* harmony import */ var _microsoft_sp_property_pane_lib_propertyPaneFields_propertyPaneToggle_PropertyPaneToggle__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @microsoft/sp-property-pane/lib/propertyPaneFields/propertyPaneToggle/PropertyPaneToggle */ "/oQI");
/* harmony import */ var _microsoft_sp_property_pane_lib_propertyPaneFields_propertyPaneDynamicTextField_PropertyPaneDynamicTextField__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @microsoft/sp-property-pane/lib/propertyPaneFields/propertyPaneDynamicTextField/PropertyPaneDynamicTextField */ "klin");
/* harmony import */ var _microsoft_sp_property_pane_lib_propertyPaneFields_propertyPaneTextField_PropertyPaneTextField__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @microsoft/sp-property-pane/lib/propertyPaneFields/propertyPaneTextField/PropertyPaneTextField */ "E2Ji");
/* harmony import */ var _microsoft_sp_property_pane_lib_propertyPaneFields_propertyPaneLink_PropertyPaneLink__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @microsoft/sp-property-pane/lib/propertyPaneFields/propertyPaneLink/PropertyPaneLink */ "w/wA");
/* harmony import */ var _microsoft_sp_property_pane_lib_propertyPaneFields_propertyPaneSlider_PropertyPaneSlider__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @microsoft/sp-property-pane/lib/propertyPaneFields/propertyPaneSlider/PropertyPaneSlider */ "Cfps");














// ******************** Functions ********************
/**
 * Helper method to create a custom field on the PropertyPane.
 *
 * @remarks
 * The purpose of the custom field is to help the web part developer to add a custom control to
 * the PropertyPane. The PropertyPane supports a host of inbuilt field types. While
 * this list meets the demands of most web parts, but there are exceptional cases
 * when web parts have special needs and need a special control. The custom field
 * helps fill that gap.
 *
 * @param targetProperty - target property for this field. This parameter is being deprecated in future releases.
 * @param properties - Strongly typed Custom field properties.
 *
 * @beta
 * @deprecated This is obsolete now. This function has been moved to `@microsoft/sp-property-pane`.
 * Please consume it from there.
 * @internalremarks We have left the original implementation here to avoid breaking the public API contract.
 */
function PropertyPaneCustomField(properties) {
    return Object(_microsoft_sp_property_pane_lib_propertyPaneFields_propertyPaneCustomField_PropertyPaneCustomField__WEBPACK_IMPORTED_MODULE_0__["PropertyPaneCustomField"])(properties);
}
/**
 * Helper method to create a Button on the PropertyPane.
 * @param targetProperty - Target property the Button is associated to.
 * @param properties - Strongly typed Button properties.
 *
 * @public
 * @deprecated This is obsolete now. This function has been moved to `@microsoft/sp-property-pane`.
 * Please consume it from there.
 * @internalremarks We have left the original implementation here to avoid breaking the public API contract.
 */
function PropertyPaneButton(targetProperty, properties) {
    return Object(_microsoft_sp_property_pane_lib_propertyPaneFields_propertyPaneButton_PropertyPaneButton__WEBPACK_IMPORTED_MODULE_1__["PropertyPaneButton"])(targetProperty, properties);
}
/**
 * Helper method to create a Checkbox on the PropertyPane.
 * @param targetProperty - Target property the checkbox is associated to.
 * @param properties - Strongly typed Checkbox properties.
 *
 * @public
 * @deprecated This is obsolete now. This function has been moved to `@microsoft/sp-property-pane`.
 * Please consume it from there.
 * @internalremarks We have left the original implementation here to avoid breaking the public API contract.
 */
function PropertyPaneCheckbox(targetProperty, properties) {
    return Object(_microsoft_sp_property_pane_lib_propertyPaneFields_propertyPaneCheckBox_PropertyPaneCheckbox__WEBPACK_IMPORTED_MODULE_2__["PropertyPaneCheckbox"])(targetProperty, properties);
}
/**
 * Helper method to create a Choice Group on the PropertyPane.
 * @param targetProperty - Target property the choice group is associated to.
 * @param properties - Strongly typed Choice Group properties.
 *
 * @public
 * @deprecated This is obsolete now. This function has been moved to `@microsoft/sp-property-pane`.
 * Please consume it from there.
 * @internalremarks We have left the original implementation here to avoid breaking the public API contract.
 */
function PropertyPaneChoiceGroup(targetProperty, properties) {
    return Object(_microsoft_sp_property_pane_lib_propertyPaneFields_propertyPaneChoiceGroup_PropertyPaneChoiceGroup__WEBPACK_IMPORTED_MODULE_3__["PropertyPaneChoiceGroup"])(targetProperty, properties);
}
/**
 * Helper method to create a Dropdown on the PropertyPane.
 * @param targetProperty - Target property the dropdown is associated to.
 * @param properties - Strongly typed Dropdown properties.
 *
 * @public
 * @deprecated This is obsolete now. This function has been moved to `@microsoft/sp-property-pane`.
 * Please consume it from there.
 * @internalremarks We have left the original implementation here to avoid breaking the public API contract.
 */
function PropertyPaneDropdown(targetProperty, properties) {
    return Object(_microsoft_sp_property_pane_lib_propertyPaneFields_propertyPaneDropdown_PropertyPaneDropdown__WEBPACK_IMPORTED_MODULE_4__["PropertyPaneDropdown"])(targetProperty, properties);
}
/**
 * Helper method to create a Dynamic Data widget on the PropertyPane for a dynamic field.
 *
 * @param targetProperty - Target property the Dynamic Data widget is associated to.
 * @param options - Options to enable customized values for callback, filters etc.,
 *                  for the dynamic field.
 * @public
 * @deprecated This is obsolete now. This function has been moved to `@microsoft/sp-property-pane`.
 * Please consume it from there.
 * @internalremarks We have left the original implementation here to avoid breaking the public API contract.
 */
function PropertyPaneDynamicField(targetProperty, properties) {
    return Object(_microsoft_sp_property_pane_lib_propertyPaneFields_propertyPaneDynamicField_PropertyPaneDynamicField__WEBPACK_IMPORTED_MODULE_5__["PropertyPaneDynamicField"])(targetProperty, properties);
}
/**
 * Helper method to create a Dynamic Data widget on the Property Pane for a set
 * of dynamic fields with a common data source.
 *
 * These fields can possibly share the same property based on the associated filters.
 * @param properties - Contains entries and options, described as below:
 *  entries - A set of entries to be configured by the widget. Each entry includes the target
 *           property and, optionally, the label to show.
 *  options - Options enabling customized values for callback, filters etc.,
 *           for the given set of dynamic fields.
 * @public
 * @deprecated This is obsolete now. This function has been moved to `@microsoft/sp-property-pane`.
 * Please consume it from there.
 * @internalremarks We have left the original implementation here to avoid breaking the public API contract.
 */
function PropertyPaneDynamicFieldSet(properties) {
    return Object(_microsoft_sp_property_pane_lib_propertyPaneFields_propertyPaneDynamicFieldSet_PropertyPaneDynamicFieldSet__WEBPACK_IMPORTED_MODULE_6__["PropertyPaneDynamicFieldSet"])(properties);
}
/**
 * Helper method to create a Horizontal Rule on the PropertyPane.
 * @param properties - Strongly typed Horizontal Rule properties.
 *
 * @public
 * @deprecated This is obsolete now. This function has been moved to `@microsoft/sp-property-pane`.
 * Please consume it from there.
 * @internalremarks We have left the original implementation here to avoid breaking the public API contract.
 */
function PropertyPaneHorizontalRule() {
    return Object(_microsoft_sp_property_pane_lib_propertyPaneFields_propertyPaneHorizontalRule_PropertyPaneHorizontalRule__WEBPACK_IMPORTED_MODULE_7__["PropertyPaneHorizontalRule"])();
}
/**
 * Helper method to create a Label on the PropertyPane.
 * @param targetProperty - Target property the label is associated to.
 * @param properties - Strongly typed Label properties.
 *
 * @public
 * @deprecated This is obsolete now. This function has been moved to `@microsoft/sp-property-pane`.
 * Please consume it from there.
 * @internalremarks We have left the original implementation here to avoid breaking the public API contract.
 */
function PropertyPaneLabel(targetProperty, properties) {
    return Object(_microsoft_sp_property_pane_lib_propertyPaneFields_propertyPaneLabel_PropertyPaneLabel__WEBPACK_IMPORTED_MODULE_8__["PropertyPaneLabel"])(targetProperty, properties);
}
/**
 * Helper method to create a Link on the PropertyPane.
 * @param targetProperty - Target property the Link is associated to.
 * @param properties - Strongly typed Link properties.
 *
 * @public
 * @deprecated This is obsolete now. This function has been moved to `@microsoft/sp-property-pane`.
 * Please consume it from there.
 * @internalremarks We have left the original implementation here to avoid breaking the public API contract.
 */
function PropertyPaneLink(targetProperty, properties) {
    return Object(_microsoft_sp_property_pane_lib_propertyPaneFields_propertyPaneLink_PropertyPaneLink__WEBPACK_IMPORTED_MODULE_12__["PropertyPaneLink"])(targetProperty, properties);
}
/**
 * Helper method to create a Slider on the PropertyPane.
 * @param targetProperty - Target property the slider is associated to.
 * @param properties - Strongly typed Slider properties.
 *
 * @public
 * @deprecated This is obsolete now. This function has been moved to `@microsoft/sp-property-pane`.
 * Please consume it from there.
 * @internalremarks We have left the original implementation here to avoid breaking the public API contract.
 */
function PropertyPaneSlider(targetProperty, properties) {
    return Object(_microsoft_sp_property_pane_lib_propertyPaneFields_propertyPaneSlider_PropertyPaneSlider__WEBPACK_IMPORTED_MODULE_13__["PropertyPaneSlider"])(targetProperty, properties);
}
/**
 * Helper method to create a TextField on the PropertyPane.
 * @param targetProperty - Target property the textfield is associated to.
 * @param properties - Strongly typed TextField properties.
 *
 * @public
 * @deprecated This is obsolete now. This function has been moved to `@microsoft/sp-property-pane`.
 * Please consume it from there.
 * @internalremarks We have left the original implementation here to avoid breaking the public API contract.
 */
function PropertyPaneTextField(targetProperty, properties) {
    return Object(_microsoft_sp_property_pane_lib_propertyPaneFields_propertyPaneTextField_PropertyPaneTextField__WEBPACK_IMPORTED_MODULE_11__["PropertyPaneTextField"])(targetProperty, properties);
}
/**
 * Helper method to create a Toggle on the PropertyPane.
 * @param targetProperty - Target property the toggle is associated to.
 * @param properties - Strongly typed Toggle properties.
 *
 * @public
 * @deprecated This is obsolete now. This function has been moved to `@microsoft/sp-property-pane`.
 * Please consume it from there.
 * @internalremarks We have left the original implementation here to avoid breaking the public API contract.
 */
function PropertyPaneToggle(targetProperty, properties) {
    return Object(_microsoft_sp_property_pane_lib_propertyPaneFields_propertyPaneToggle_PropertyPaneToggle__WEBPACK_IMPORTED_MODULE_9__["PropertyPaneToggle"])(targetProperty, properties);
}
/**
 * Helper method to create a Dynamic TextField on the PropertyPane.
 * @param targetProperty - Target property the dynamic textfield is associated to.
 * @param properties - Properties of the PropertyPaneDynamicTextField.
 *
 * @beta
 * @deprecated This has been replaced by PropertyPaneDynamicField and moved to `@microsoft/sp-property-pane`.
 * Please consume it from there.
 * @internalremarks We have left the original implementation here to avoid breaking the public API contract.
 */
function PropertyPaneDynamicTextField(targetProperty, properties) {
    return Object(_microsoft_sp_property_pane_lib_propertyPaneFields_propertyPaneDynamicTextField_PropertyPaneDynamicTextField__WEBPACK_IMPORTED_MODULE_10__["PropertyPaneDynamicTextField"])(targetProperty, properties);
}
/**
 * Enum for all the supported PropertyPane field types.
 *
 * Names should be consistent with those in office-ui-fabric-react, be careful to get letter casing correct.
 *
 * @public
 * @deprecated This is obsolete now. This enum has been moved to `@microsoft/sp-property-pane`.
 * Please consume it from there.
 * @internalremarks We have left the original implementation here to avoid breaking the public API contract.
 */
var PropertyPaneFieldType;
(function (PropertyPaneFieldType) {
    /**
     * Custom field.
     */
    PropertyPaneFieldType[PropertyPaneFieldType["Custom"] = 1] = "Custom";
    /**
     * Checkbox field.
     */
    PropertyPaneFieldType[PropertyPaneFieldType["CheckBox"] = 2] = "CheckBox";
    /**
     * TextField field.
     */
    PropertyPaneFieldType[PropertyPaneFieldType["TextField"] = 3] = "TextField";
    /**
     * Toggle field.
     */
    PropertyPaneFieldType[PropertyPaneFieldType["Toggle"] = 5] = "Toggle";
    /**
     * Dropdown field.
     */
    PropertyPaneFieldType[PropertyPaneFieldType["Dropdown"] = 6] = "Dropdown";
    /**
     * Label field.
     */
    PropertyPaneFieldType[PropertyPaneFieldType["Label"] = 7] = "Label";
    /**
     * Slider field.
     */
    PropertyPaneFieldType[PropertyPaneFieldType["Slider"] = 8] = "Slider";
    /**
     * Heading field.
     */
    PropertyPaneFieldType[PropertyPaneFieldType["Heading"] = 9] = "Heading";
    /**
     * Choice Group field.
     */
    PropertyPaneFieldType[PropertyPaneFieldType["ChoiceGroup"] = 10] = "ChoiceGroup";
    /**
     * Button field.
     */
    PropertyPaneFieldType[PropertyPaneFieldType["Button"] = 11] = "Button";
    /**
     * Horizontal Rule field.
     */
    PropertyPaneFieldType[PropertyPaneFieldType["HorizontalRule"] = 12] = "HorizontalRule";
    /**
     * Link field.
     */
    PropertyPaneFieldType[PropertyPaneFieldType["Link"] = 13] = "Link";
    /**
     * Dynamic data field.
     * @public
     */
    PropertyPaneFieldType[PropertyPaneFieldType["DynamicField"] = 14] = "DynamicField";
    /**
     * Dynamic Text Field
     *
     * @beta
     * @deprecated - Please use DynamicField
     */
    PropertyPaneFieldType[PropertyPaneFieldType["DynamicTextField"] = 15] = "DynamicTextField";
    /**
     * A set of dynamic fields.
     * @public
     */
    PropertyPaneFieldType[PropertyPaneFieldType["DynamicFieldSet"] = 16] = "DynamicFieldSet";
    /**
     * Spin button
     *
     * @alpha
     */
    PropertyPaneFieldType[PropertyPaneFieldType["SpinButton"] = 17] = "SpinButton";
})(PropertyPaneFieldType || (PropertyPaneFieldType = {}));
/**
 * Enum for all the supported button types.
 *
 * @public
 * @deprecated This is obsolete now. This enum has been moved to `@microsoft/sp-property-pane`.
 * Please consume it from there.
 * @internalremarks We have left the original implementation here to avoid breaking the public API contract.
 */
var PropertyPaneButtonType;
(function (PropertyPaneButtonType) {
    /**
     * Optional completion action.
     *
     * @remarks
     * Typically used at the end of a form or task when paired with the Primary button OR
     * as a standalone button to undo an action.
     * Examples: "Done" button which closes a container but doesn't make a server call or
     * an "Undo" button when a user is uploading a file in OneDrive.
     */
    PropertyPaneButtonType[PropertyPaneButtonType["Normal"] = 0] = "Normal";
    /**
     * Preferred completion action when paired with a Standard button.
     *
     * @remarks
     * Typically used at the end of a task or form.
     * Examples: "Create", "Save", "Send" which makes a server call.
     */
    PropertyPaneButtonType[PropertyPaneButtonType["Primary"] = 1] = "Primary";
    /**
     * Hero button.
     */
    PropertyPaneButtonType[PropertyPaneButtonType["Hero"] = 2] = "Hero";
    /**
     * Always used as a set with both Standard and Primary compound buttons.
     *
     * @remarks
     * Typically used in a confirmation dialog.
     * Examples: A confirmation dialog when a user discards a form or task with a possible
     * significant time investment such as an email or a complex form
     */
    PropertyPaneButtonType[PropertyPaneButtonType["Compound"] = 3] = "Compound";
    /**
     * Optional actions.
     *
     * @remarks
     * Typically used in a command bar at the top of a view, panel and inside an inline command bar.
     * Examples: Command bar at the top of OneDrive, Outlook, SharePoint. Inline command bar on the
     * top of SharePoint web parts.
     */
    PropertyPaneButtonType[PropertyPaneButtonType["Command"] = 4] = "Command";
    /**
     * Same usage as Command button, when real estate does not allow for icons + labels or as secondary
     * actions within the command bar.
     *
     * @remarks
     * Typically used in Command bar in small and medium responsive web breakpoints. Also used on objects.
     * Examples: OneDrive small and medium responsive web breakpoint Command Bars and view icons within the
     * Command Bar. In SharePoint and OneDrive, Cards with social actions and images which allow users to
     * access the image picker. In SharePoint, formatting experiences such as formatting a story within the
     * Authoring experience. In Calendar, in the bottom of an event creation Callout when clicking inside
     * an empty time range.
     */
    PropertyPaneButtonType[PropertyPaneButtonType["Icon"] = 5] = "Icon";
})(PropertyPaneButtonType || (PropertyPaneButtonType = {}));
/**
 * Specifies the type of option in a dropdown menu rendered by {@link PropertyPaneDropdown}.
 *
 * @public
 * @deprecated This is obsolete now. This enum has been moved to `@microsoft/sp-property-pane`.
 * Please consume it from there.
 * @internalremarks We have left the original implementation here to avoid breaking the public API contract.
 */
var PropertyPaneDropdownOptionType;
(function (PropertyPaneDropdownOptionType) {
    /**
     * Render normal menu item.
     */
    PropertyPaneDropdownOptionType[PropertyPaneDropdownOptionType["Normal"] = 0] = "Normal";
    /**
     * Render a divider.
     */
    PropertyPaneDropdownOptionType[PropertyPaneDropdownOptionType["Divider"] = 1] = "Divider";
    /**
     * Render menu item as a header.
     */
    PropertyPaneDropdownOptionType[PropertyPaneDropdownOptionType["Header"] = 2] = "Header";
})(PropertyPaneDropdownOptionType || (PropertyPaneDropdownOptionType = {}));
/**
 * Enum for the possible values of shared depth of the dynamic data reference.
 *
 * @public
 * @deprecated This is obsolete now. This enum has been moved to `@microsoft/sp-property-pane`.
 * Please consume it from there.
 * @internalremarks We have left the original implementation here to avoid breaking the public API contract.
 */
var DynamicDataSharedDepth;
(function (DynamicDataSharedDepth) {
    /**
     * Indicates that nothing is shared.
     */
    DynamicDataSharedDepth[DynamicDataSharedDepth["None"] = 0] = "None";
    /**
     * Indicates that the dynamic data source is shared.
     */
    DynamicDataSharedDepth[DynamicDataSharedDepth["Source"] = 1] = "Source";
    /**
     * Indicates that both the dynamic data source and the property are shared.
     */
    DynamicDataSharedDepth[DynamicDataSharedDepth["Property"] = 2] = "Property";
})(DynamicDataSharedDepth || (DynamicDataSharedDepth = {}));


/***/ }),

/***/ "klin":
/*!***************************************************************************************************************!*\
  !*** ../sp-property-pane/lib/propertyPaneFields/propertyPaneDynamicTextField/PropertyPaneDynamicTextField.js ***!
  \***************************************************************************************************************/
/*! exports provided: PropertyPaneDynamicTextField */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertyPaneDynamicTextField", function() { return PropertyPaneDynamicTextField; });
/* harmony import */ var _propertyPaneField_IPropertyPaneField__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../propertyPaneField/IPropertyPaneField */ "3ZYD");
// Copyright (c) Microsoft. All rights reserved.

/**
 * Helper method to create a Dynamic TextField on the PropertyPane.
 * @param targetProperty - Target property the dynamic textfield is associated to.
 * @param properties - Properties of the PropertyPaneDynamicTextField.
 *
 * @beta
 * @deprecated - This has been replaced by PropertyPaneDynamicField
 */
function PropertyPaneDynamicTextField(targetProperty, properties) {
    return {
        type: _propertyPaneField_IPropertyPaneField__WEBPACK_IMPORTED_MODULE_0__["PropertyPaneFieldType"].DynamicTextField,
        targetProperty: targetProperty,
        // Properties are fixed up in BaseClientSideWebPart._internalGetPropertyPaneData()
        properties: properties
    };
}


/***/ }),

/***/ "l2n5":
/*!*************************************************************!*\
  !*** ./lib/core/ClientSideWebPartMaintenanceModeManager.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _microsoft_sp_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @microsoft/sp-loader */ "I6O9");
/* harmony import */ var _microsoft_sp_loader__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_loader__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _classicPages_ClassicPageUtils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./classicPages/ClassicPageUtils */ "FbpR");
/* harmony import */ var _ClientSideWebPartManager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ClientSideWebPartManager */ "OASt");
// Copyright (c) Microsoft. All rights reserved.

// This file contains code for the ClientSideWebPartMaintenanceModeManager.




var SP_MAINTENANCE_MODE_MANIFEST_ID = '88019639-8c06-4ba6-8545-03a1f38f8393';
/**
 * The ClientSideWebPartMaintenanceModeManager is the web part manager instance used
 * when the web parts are rendered in maintenance mode.
 *
 * @internal
 */
var ClientSideWebPartMaintenanceModeManager = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ClientSideWebPartMaintenanceModeManager, _super);
    /**
     * See ClientSideWebPartManager
     */
    function ClientSideWebPartMaintenanceModeManager(host) {
        var _this = _super.call(this, host) || this;
        _this._wpMaintenanceModeData = new Map();
        return _this;
    }
    /**
     * See ClientSideWebPartManager
     */
    ClientSideWebPartMaintenanceModeManager.prototype.loadWebPart = function (context) {
        this._loadWebPartInMaintenanceMode(context);
        this._wpMaintenanceModeData.set(context.instanceId, context.webPartData);
        return Promise.resolve();
    };
    /**
     * See ClientSideWebPartManager
     */
    ClientSideWebPartMaintenanceModeManager.prototype.serialize = function (instanceId) {
        return this._wpMaintenanceModeData;
    };
    /**
     * See ClientSideWebPartManager
     */
    ClientSideWebPartMaintenanceModeManager.prototype.dispose = function (instanceId) {
        if (instanceId) {
            this._wpMaintenanceModeData.delete(instanceId);
        }
        else {
            this._wpMaintenanceModeData = new Map();
        }
    };
    ClientSideWebPartMaintenanceModeManager.prototype._loadWebPartInMaintenanceMode = function (context) {
        // Create a disembodied context without an actual web part
        // (It is our responsibility to finish the service scope.)
        var webPartContext = this._getWebPartContext(context);
        webPartContext.serviceScope.finish();
        _microsoft_sp_loader__WEBPACK_IMPORTED_MODULE_2__["SPComponentLoader"].loadComponentById(SP_MAINTENANCE_MODE_MANIFEST_ID)
            .then(function (uiComponentModule) {
            return uiComponentModule.MaintenanceModeRenderer.render(webPartContext, context.webPartData);
        }) /* tslint:disable-line:max-line-length */
            .then(function () { return _classicPages_ClassicPageUtils__WEBPACK_IMPORTED_MODULE_3__["default"].disableAutomaticPostbacks(context.domElement, _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["Environment"].type); })
            .catch(function (e) { return e; });
    };
    return ClientSideWebPartMaintenanceModeManager;
}(_ClientSideWebPartManager__WEBPACK_IMPORTED_MODULE_4__["default"]));
/* harmony default export */ __webpack_exports__["default"] = (ClientSideWebPartMaintenanceModeManager);


/***/ }),

/***/ "mwqp":
/*!**********************!*\
  !*** ./lib/index.js ***!
  \**********************/
/*! exports provided: BaseWebPartContext, WebPartContext, WebPartIsolationLevel, _BaseWebPartHost, _MinimalWebPartHost, _TeamsAwareWebPartHost, BaseWebPart, BaseClientSideWebPart, ClientSideWebPartManager, ClientSideWebPartManagerFactory, _ClientSideWebPartStatusRenderer, WebPartDataConverter, WebPartFormFactor, _IframedWebPartAction, PropertyPaneCustomField, PropertyPaneButton, PropertyPaneCheckbox, PropertyPaneChoiceGroup, PropertyPaneDropdown, PropertyPaneDynamicField, PropertyPaneDynamicFieldSet, PropertyPaneHorizontalRule, PropertyPaneLabel, PropertyPaneLink, PropertyPaneSlider, PropertyPaneTextField, PropertyPaneToggle, PropertyPaneDynamicTextField, PropertyPaneFieldType, PropertyPaneButtonType, PropertyPaneDropdownOptionType, DynamicDataSharedDepth, _MinimalWebPartContainer, _PropertyPaneLoader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_BaseWebPartContext__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/BaseWebPartContext */ "+wJ3");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaseWebPartContext", function() { return _core_BaseWebPartContext__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _core_WebPartContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/WebPartContext */ "ruV7");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WebPartContext", function() { return _core_WebPartContext__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _core_IWebPartData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/IWebPartData */ "jeXa");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WebPartIsolationLevel", function() { return _core_IWebPartData__WEBPACK_IMPORTED_MODULE_2__["WebPartIsolationLevel"]; });

/* harmony import */ var _components_host_BaseWebPartHost__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/host/BaseWebPartHost */ "tIB3");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_BaseWebPartHost", function() { return _components_host_BaseWebPartHost__WEBPACK_IMPORTED_MODULE_3__["BaseWebPartHost"]; });

/* harmony import */ var _components_host_MinimalWebPartHost__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/host/MinimalWebPartHost */ "L5sm");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_MinimalWebPartHost", function() { return _components_host_MinimalWebPartHost__WEBPACK_IMPORTED_MODULE_4__["MinimalWebPartHost"]; });

/* harmony import */ var _components_host_TeamsAwareWebPartHost__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/host/TeamsAwareWebPartHost */ "Ibtq");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_TeamsAwareWebPartHost", function() { return _components_host_TeamsAwareWebPartHost__WEBPACK_IMPORTED_MODULE_5__["TeamsAwareWebPartHost"]; });

/* harmony import */ var _core_BaseWebPart__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./core/BaseWebPart */ "Ti3B");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaseWebPart", function() { return _core_BaseWebPart__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _core_BaseClientSideWebPart__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./core/BaseClientSideWebPart */ "evvI");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaseClientSideWebPart", function() { return _core_BaseClientSideWebPart__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _core_ClientSideWebPartManager__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./core/ClientSideWebPartManager */ "OASt");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ClientSideWebPartManager", function() { return _core_ClientSideWebPartManager__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _core_ClientSideWebPartManagerFactory__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./core/ClientSideWebPartManagerFactory */ "wdlX");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ClientSideWebPartManagerFactory", function() { return _core_ClientSideWebPartManagerFactory__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony import */ var _core_ClientSideWebPartStatusRenderer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./core/ClientSideWebPartStatusRenderer */ "aOlN");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_ClientSideWebPartStatusRenderer", function() { return _core_ClientSideWebPartStatusRenderer__WEBPACK_IMPORTED_MODULE_10__["default"]; });

/* harmony import */ var _core_WebPartDataConverter__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./core/WebPartDataConverter */ "htbj");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WebPartDataConverter", function() { return _core_WebPartDataConverter__WEBPACK_IMPORTED_MODULE_11__["default"]; });

/* harmony import */ var _core_WebPartFormFactor__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./core/WebPartFormFactor */ "SmEi");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WebPartFormFactor", function() { return _core_WebPartFormFactor__WEBPACK_IMPORTED_MODULE_12__["WebPartFormFactor"]; });

/* harmony import */ var _core_IIframedWebPartMessage__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./core/IIframedWebPartMessage */ "7vVn");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_IframedWebPartAction", function() { return _core_IIframedWebPartMessage__WEBPACK_IMPORTED_MODULE_13__["IframedWebPartAction"]; });

/* harmony import */ var _SPPropertyPane__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./SPPropertyPane */ "kj+3");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PropertyPaneCustomField", function() { return _SPPropertyPane__WEBPACK_IMPORTED_MODULE_14__["PropertyPaneCustomField"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PropertyPaneButton", function() { return _SPPropertyPane__WEBPACK_IMPORTED_MODULE_14__["PropertyPaneButton"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PropertyPaneCheckbox", function() { return _SPPropertyPane__WEBPACK_IMPORTED_MODULE_14__["PropertyPaneCheckbox"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PropertyPaneChoiceGroup", function() { return _SPPropertyPane__WEBPACK_IMPORTED_MODULE_14__["PropertyPaneChoiceGroup"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PropertyPaneDropdown", function() { return _SPPropertyPane__WEBPACK_IMPORTED_MODULE_14__["PropertyPaneDropdown"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PropertyPaneDynamicField", function() { return _SPPropertyPane__WEBPACK_IMPORTED_MODULE_14__["PropertyPaneDynamicField"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PropertyPaneDynamicFieldSet", function() { return _SPPropertyPane__WEBPACK_IMPORTED_MODULE_14__["PropertyPaneDynamicFieldSet"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PropertyPaneHorizontalRule", function() { return _SPPropertyPane__WEBPACK_IMPORTED_MODULE_14__["PropertyPaneHorizontalRule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PropertyPaneLabel", function() { return _SPPropertyPane__WEBPACK_IMPORTED_MODULE_14__["PropertyPaneLabel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PropertyPaneLink", function() { return _SPPropertyPane__WEBPACK_IMPORTED_MODULE_14__["PropertyPaneLink"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PropertyPaneSlider", function() { return _SPPropertyPane__WEBPACK_IMPORTED_MODULE_14__["PropertyPaneSlider"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PropertyPaneTextField", function() { return _SPPropertyPane__WEBPACK_IMPORTED_MODULE_14__["PropertyPaneTextField"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PropertyPaneToggle", function() { return _SPPropertyPane__WEBPACK_IMPORTED_MODULE_14__["PropertyPaneToggle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PropertyPaneDynamicTextField", function() { return _SPPropertyPane__WEBPACK_IMPORTED_MODULE_14__["PropertyPaneDynamicTextField"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PropertyPaneFieldType", function() { return _SPPropertyPane__WEBPACK_IMPORTED_MODULE_14__["PropertyPaneFieldType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PropertyPaneButtonType", function() { return _SPPropertyPane__WEBPACK_IMPORTED_MODULE_14__["PropertyPaneButtonType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PropertyPaneDropdownOptionType", function() { return _SPPropertyPane__WEBPACK_IMPORTED_MODULE_14__["PropertyPaneDropdownOptionType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DynamicDataSharedDepth", function() { return _SPPropertyPane__WEBPACK_IMPORTED_MODULE_14__["DynamicDataSharedDepth"]; });

/* harmony import */ var _components_container_MinimalWebPartContainer__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/container/MinimalWebPartContainer */ "FxQH");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_MinimalWebPartContainer", function() { return _components_container_MinimalWebPartContainer__WEBPACK_IMPORTED_MODULE_15__["default"]; });

/* harmony import */ var _PropertyPaneLoader__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./PropertyPaneLoader */ "7pKC");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_PropertyPaneLoader", function() { return _PropertyPaneLoader__WEBPACK_IMPORTED_MODULE_16__["default"]; });

/**
 * SharePoint Framework support for building web parts.
 *
 * @remarks
 * This package defines the APIs used by developers to create a custom web part.
 * A web part is a reusable visual object that a page author can add to their content,
 * and customize using a property pane.  Examples of web parts include an embedded
 * video player, a map, a group calendar, a chart, etc.
 *
 * @packagedocumentation
 */













/* IFramedWebPartController typed exports */






/***/ }),

/***/ "nwwH":
/*!***********************************************************************************************!*\
  !*** ../sp-property-pane/lib/propertyPaneFields/propertyPaneCheckBox/PropertyPaneCheckbox.js ***!
  \***********************************************************************************************/
/*! exports provided: PropertyPaneCheckbox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertyPaneCheckbox", function() { return PropertyPaneCheckbox; });
/* harmony import */ var _propertyPaneField_IPropertyPaneField__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../propertyPaneField/IPropertyPaneField */ "3ZYD");
// Copyright (c) Microsoft. All rights reserved.

/**
 * Helper method to create a Checkbox on the PropertyPane.
 * @param targetProperty - Target property the checkbox is associated to.
 * @param properties - Strongly typed Checkbox properties.
 *
 * @public
 */
function PropertyPaneCheckbox(targetProperty, properties) {
    return {
        type: _propertyPaneField_IPropertyPaneField__WEBPACK_IMPORTED_MODULE_0__["PropertyPaneFieldType"].CheckBox,
        targetProperty: targetProperty,
        properties: properties
    };
}


/***/ }),

/***/ "ruV7":
/*!************************************!*\
  !*** ./lib/core/WebPartContext.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _BaseWebPartContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BaseWebPartContext */ "+wJ3");
/**
* @Copyright (c) Microsoft Corporation.  All rights reserved.
*
* Web part context.
*/



/**
 * Web part context object. This object contains the contextual services available to a web part. e.g.
 * a contextual instance to the http client.
 *
 * @public
 */
var WebPartContext = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(WebPartContext, _super);
    /** @internal */
    function WebPartContext(parameters) {
        var _this = _super.call(this, parameters) || this;
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["Validate"].isNotNullOrUndefined(parameters.domElement, "webpart context domElement");
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["Validate"].isNotNullOrUndefined(parameters.statusRenderer, 'webpart context statusRenderer');
        _this._domElement = parameters.domElement;
        _this._statusRenderer = parameters.statusRenderer;
        // Assert the type to ignore the missing const enums in our internal teamsJs namespace
        _this._teams = parameters.microsoftTeams;
        _this._sdks = parameters.sdks;
        _this._widthCacheKey = parameters.widthCacheKey;
        return _this;
    }
    Object.defineProperty(WebPartContext.prototype, "domElement", {
        /**
         * Reference to the DOM element that hosts this client-side component.
         */
        get: function () {
            return this._domElement;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WebPartContext.prototype, "sdks", {
        /**
         * {@inheritdoc ISDKs}
         */
        get: function () {
            return this._sdks;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WebPartContext.prototype, "statusRenderer", {
        /**
         * Web part status renderer.
         */
        get: function () {
            return this._statusRenderer;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WebPartContext.prototype, "microsoftTeams", {
        /**
         * Contextual information about the current Microsoft Teams tab. This object will only be defined if
         * a component is being hosted in Microsoft Teams.
         *
         * @remarks
         * For more information, please see:
         * {@link https://docs.microsoft.com/en-us/javascript/api/@microsoft/teams-js/?view=msteams-client-js-latest}
         * @public
         * @deprecated - This function has been deprecated
         */
        get: function () {
            return this._teams;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WebPartContext.prototype, "widthCacheKey", {
        /**
         * This functions returns a key generated by web parts display mode, layout index, and section factor.
         * It will return undefined if sectionFactor or display mode is undefined, else return the cache key.
         */
        get: function () {
            return this._widthCacheKey;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * @deprecated - This function has been deprecated
     *
     * @internal
     */
    WebPartContext.prototype._setTeams = function (teams) {
        this._teams = teams;
    };
    return WebPartContext;
}(_BaseWebPartContext__WEBPACK_IMPORTED_MODULE_2__["default"]));
/* harmony default export */ __webpack_exports__["default"] = (WebPartContext);


/***/ }),

/***/ "tIB3":
/*!************************************************!*\
  !*** ./lib/components/host/BaseWebPartHost.js ***!
  \************************************************/
/*! exports provided: BaseWebPartHost */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseWebPartHost", function() { return BaseWebPartHost; });
/* harmony import */ var _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ms/sp-telemetry */ "2q6Q");
/* harmony import */ var _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_KillSwitches__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/KillSwitches */ "+ORw");
/* harmony import */ var _common_Experiments__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/Experiments */ "xdjW");



/**
 * BaseWebPartHost implements the IWebPartHost lifecycle methods as virtual no-op methods.
 *
 * @internal
 */
var BaseWebPartHost = /** @class */ (function () {
    function BaseWebPartHost(serviceScope) {
        this.serviceScope = serviceScope;
    }
    /**
     * @virtual
     */
    BaseWebPartHost.prototype.onBeforeWebPartLoad = function (options) {
        _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_0__["_PerformanceLogger"].devMark("ClientSideWebPartManager.load(" + options.webPartTag + ").start");
        _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_0__["_PerformanceLogger"].startMarkForComponent(options.webPartTag);
        return;
    };
    /**
     * @virtual
     */
    BaseWebPartHost.prototype.onAfterWebPartLoad = function (options) {
        _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_0__["_PerformanceLogger"].devMark("ClientSideWebPartManager.load(" + options.webPartTag + ").end");
        _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_0__["_PerformanceLogger"].markComponentModuleLoaded(options.webPartTag);
        return;
    };
    /**
     * @virtual
     */
    BaseWebPartHost.prototype.onAfterWebPartLoadFailed = function (options, error) {
        if (_common_Experiments__WEBPACK_IMPORTED_MODULE_2__["getMarkFailureInPerformanceLoggerExperimentVariant"]() === 1) {
            _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_0__["_PerformanceLogger"].endFailureForComponent(options.webPartTag, 'Load');
        }
        return;
    };
    /**
     * @virtual
     */
    BaseWebPartHost.prototype.onBeforeWebPartInitializeOld = function (options) {
        _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_0__["_PerformanceLogger"].devMark("ClientSideWebPartManager.initialize(" + options.webPartTag + ").start");
        return;
    };
    /**
     * @virtual
     */
    BaseWebPartHost.prototype.onBeforeWebPartInitialize = function (options) {
        _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_0__["_PerformanceLogger"].devMark("ClientSideWebPartManager.initialize(" + options.webPartTag + ").start");
        return Promise.resolve();
    };
    /**
     * @virtual
     */
    BaseWebPartHost.prototype.onAfterWebPartInitialize = function (options) {
        _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_0__["_PerformanceLogger"].devMark("ClientSideWebPartManager.initialize(" + options.webPartTag + ").end");
        return;
    };
    BaseWebPartHost.prototype.onAfterWebPartInitializeFailed = function (options, error) {
        if (_common_Experiments__WEBPACK_IMPORTED_MODULE_2__["getMarkFailureInPerformanceLoggerExperimentVariant"]() === 1) {
            _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_0__["_PerformanceLogger"].endFailureForComponent(options.webPartTag, 'Initialize');
        }
        return;
    };
    /**
     * @virtual
     */
    BaseWebPartHost.prototype.onBeforeWebPartRender = function (options) {
        _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_0__["_PerformanceLogger"].devMark("ClientSideWebPartManager.render(" + options.webPartTag + ").start");
        return;
    };
    /**
     * @virtual
     */
    BaseWebPartHost.prototype.onAfterWebPartRender = function (options) {
        if (!_common_KillSwitches__WEBPACK_IMPORTED_MODULE_1__["default"].isResolveRenderTimeActivated() && typeof options.renderCompleteTime === 'number') {
            _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_0__["_PerformanceLogger"].endMarkForComponentWithTimestamp(options.webPartTag, options.renderCompleteTime);
        }
        else {
            _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_0__["_PerformanceLogger"].endMarkForComponent(options.webPartTag);
        }
        return;
    };
    BaseWebPartHost.prototype.onAfterWebPartRenderFailed = function (options, error) {
        if (_common_Experiments__WEBPACK_IMPORTED_MODULE_2__["getMarkFailureInPerformanceLoggerExperimentVariant"]() === 1) {
            _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_0__["_PerformanceLogger"].endFailureForComponent(options.webPartTag, 'Render');
        }
        return;
    };
    return BaseWebPartHost;
}());



/***/ }),

/***/ "tstL":
/*!*******************************************************************************************************!*\
  !*** ../sp-property-pane/lib/propertyPaneFields/propertyPaneDynamicField/PropertyPaneDynamicField.js ***!
  \*******************************************************************************************************/
/*! exports provided: PropertyPaneDynamicField */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertyPaneDynamicField", function() { return PropertyPaneDynamicField; });
/* harmony import */ var _propertyPaneField_IPropertyPaneField__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../propertyPaneField/IPropertyPaneField */ "3ZYD");
// Copyright (c) Microsoft. All rights reserved.

/**
 * Helper method to create a Dynamic Data widget on the PropertyPane for a dynamic field.
 *
 * @param targetProperty - Target property the Dynamic Data widget is associated to.
 * @param options - Options to enable customized values for callback, filters etc.,
 *                  for the dynamic field.
 * @public
 */
function PropertyPaneDynamicField(targetProperty, properties) {
    return {
        type: _propertyPaneField_IPropertyPaneField__WEBPACK_IMPORTED_MODULE_0__["PropertyPaneFieldType"].DynamicField,
        targetProperty: targetProperty,
        properties: properties
    };
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

/***/ "vlHk":
/*!***********************************************************************************************************!*\
  !*** ../sp-property-pane/lib/propertyPaneFields/propertyPaneHorizontalRule/PropertyPaneHorizontalRule.js ***!
  \***********************************************************************************************************/
/*! exports provided: PropertyPaneHorizontalRule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertyPaneHorizontalRule", function() { return PropertyPaneHorizontalRule; });
/* harmony import */ var _propertyPaneField_IPropertyPaneField__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../propertyPaneField/IPropertyPaneField */ "3ZYD");
/**
 * @Copyright (c) Microsoft Corporation.  All rights reserved.
 *
 * @file PropertyPaneHorizontalRule.
 */

/**
 * Helper method to create a Horizontal Rule on the PropertyPane.
 * @param properties - Strongly typed Horizontal Rule properties.
 *
 * @public
 */
function PropertyPaneHorizontalRule() {
    return {
        type: _propertyPaneField_IPropertyPaneField__WEBPACK_IMPORTED_MODULE_0__["PropertyPaneFieldType"].HorizontalRule,
        targetProperty: undefined,
        properties: undefined
    };
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

/***/ "w/wA":
/*!***************************************************************************************!*\
  !*** ../sp-property-pane/lib/propertyPaneFields/propertyPaneLink/PropertyPaneLink.js ***!
  \***************************************************************************************/
/*! exports provided: PropertyPaneLink */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertyPaneLink", function() { return PropertyPaneLink; });
/* harmony import */ var _propertyPaneField_IPropertyPaneField__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../propertyPaneField/IPropertyPaneField */ "3ZYD");
// Copyright (c) Microsoft. All rights reserved.

/**
 * Helper method to create a Link on the PropertyPane.
 * @param targetProperty - Target property the Link is associated to.
 * @param properties - Strongly typed Link properties.
 *
 * @public
 */
function PropertyPaneLink(targetProperty, properties) {
    return {
        type: _propertyPaneField_IPropertyPaneField__WEBPACK_IMPORTED_MODULE_0__["PropertyPaneFieldType"].Link,
        targetProperty: undefined,
        properties: properties
    };
}


/***/ }),

/***/ "w8Nz":
/*!*****************************************************************************************************!*\
  !*** ../sp-property-pane/lib/propertyPaneFields/propertyPaneCustomField/PropertyPaneCustomField.js ***!
  \*****************************************************************************************************/
/*! exports provided: PropertyPaneCustomField */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertyPaneCustomField", function() { return PropertyPaneCustomField; });
/* harmony import */ var _propertyPaneField_IPropertyPaneField__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../propertyPaneField/IPropertyPaneField */ "3ZYD");
// Copyright (c) Microsoft. All rights reserved.

/**
 * Helper method to create a custom field on the PropertyPane.
 *
 * @remarks
 * The purpose of the custom field is to help the web part developer to add a custom control to
 * the PropertyPane. The PropertyPane supports a host of inbuilt field types. While
 * this list meets the demands of most web parts, but there are exceptional cases
 * when web parts have special needs and need a special control. The custom field
 * helps fill that gap.
 *
 * @param targetProperty - target property for this field. This parameter is being deprecated in future releases.
 * @param properties - Strongly typed Custom field properties.
 *
 * @beta
 */
function PropertyPaneCustomField(properties) {
    return {
        type: _propertyPaneField_IPropertyPaneField__WEBPACK_IMPORTED_MODULE_0__["PropertyPaneFieldType"].Custom,
        targetProperty: undefined,
        properties: properties
    };
}


/***/ }),

/***/ "wdlX":
/*!*****************************************************!*\
  !*** ./lib/core/ClientSideWebPartManagerFactory.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ClientSideWebPartMaintenanceModeManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ClientSideWebPartMaintenanceModeManager */ "l2n5");
/* harmony import */ var _ClientSideWebPartManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ClientSideWebPartManager */ "OASt");


/**
 * The ClientSideWebPartManagerFactory is the web part manager instance used
 * when the web parts are rendered in maintenance mode.
 *
 * @internal
 */
var ClientSideWebPartManagerFactory = /** @class */ (function () {
    function ClientSideWebPartManagerFactory() {
    }
    ClientSideWebPartManagerFactory.create = function (host) {
        if (_ClientSideWebPartManager__WEBPACK_IMPORTED_MODULE_1__["default"].isMaintenanceMode) {
            return new _ClientSideWebPartMaintenanceModeManager__WEBPACK_IMPORTED_MODULE_0__["default"](host);
        }
        else {
            return new _ClientSideWebPartManager__WEBPACK_IMPORTED_MODULE_1__["default"](host);
        }
    };
    return ClientSideWebPartManagerFactory;
}());
/* harmony default export */ __webpack_exports__["default"] = (ClientSideWebPartManagerFactory);


/***/ }),

/***/ "xdjW":
/*!***********************************!*\
  !*** ./lib/common/Experiments.js ***!
  \***********************************/
/*! exports provided: getMarkFailureInPerformanceLoggerExperimentVariant */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMarkFailureInPerformanceLoggerExperimentVariant", function() { return getMarkFailureInPerformanceLoggerExperimentVariant; });
/* harmony import */ var _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ms/sp-telemetry */ "2q6Q");
/* harmony import */ var _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_0__);

// tslint:disable:export-name
function getMarkFailureInPerformanceLoggerExperimentVariant() {
    return _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_0__["_SPPerfExperiment"].getVariantAndTrackExperiment(90036 /* MarkFailureInPerformanceLoggerV2 */);
}


/***/ }),

/***/ "ybLs":
/*!******************************************!*\
  !*** ./lib/core/error/SPWebPartError.js ***!
  \******************************************/
/*! exports provided: SPWebPartErrorCode, SPWebPartError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SPWebPartErrorCode", function() { return SPWebPartErrorCode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SPWebPartError", function() { return SPWebPartError; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _loc_Strings_resx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../loc/Strings.resx */ "kGqN");
var _loc_Strings_resx__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../loc/Strings.resx */ "kGqN", 1);
/**
 * @copyright (c) Microsoft Corporation. All rights reserved.
 *
 * WellKnown error codes used by the SharePoint client webpart framework.
 */



/*
 * Web part error codes.
 */
var SPWebPartErrorCode;
(function (SPWebPartErrorCode) {
    // params: none
    SPWebPartErrorCode[SPWebPartErrorCode["ModuleUndefined"] = 0] = "ModuleUndefined";
    // params: web part tag, module list.
    SPWebPartErrorCode[SPWebPartErrorCode["ModuleNotLoaded"] = 1] = "ModuleNotLoaded";
    // params: web part tag.
    SPWebPartErrorCode[SPWebPartErrorCode["IncorrectBoostrapModule"] = 2] = "IncorrectBoostrapModule";
    // params: web part tag, method name
    SPWebPartErrorCode[SPWebPartErrorCode["MissingExpectedWebPartMemberError"] = 3] = "MissingExpectedWebPartMemberError";
    // params: web part tag.
    SPWebPartErrorCode[SPWebPartErrorCode["NonBaseWebPart"] = 4] = "NonBaseWebPart";
    // params: error message.
    SPWebPartErrorCode[SPWebPartErrorCode["ScriptLoadError"] = 5] = "ScriptLoadError";
    // params: none
    SPWebPartErrorCode[SPWebPartErrorCode["ManifestDownloadFailed"] = 6] = "ManifestDownloadFailed";
    // params: web part tag.
    SPWebPartErrorCode[SPWebPartErrorCode["ManifestNull"] = 7] = "ManifestNull";
    // params: web part instance id.
    SPWebPartErrorCode[SPWebPartErrorCode["ManifestInvalid"] = 8] = "ManifestInvalid";
    // params: none.
    SPWebPartErrorCode[SPWebPartErrorCode["BaseConstructError"] = 9] = "BaseConstructError";
    // params: web part tag.
    SPWebPartErrorCode[SPWebPartErrorCode["MustOverrideRender"] = 10] = "MustOverrideRender";
    // params: web part tag.
    SPWebPartErrorCode[SPWebPartErrorCode["NotInitializedError"] = 11] = "NotInitializedError";
    // params: web part tag.
    SPWebPartErrorCode[SPWebPartErrorCode["PropertyBagNull"] = 12] = "PropertyBagNull";
    // params:  web part tag.
    SPWebPartErrorCode[SPWebPartErrorCode["OnAfterDeserializeReturnedNull"] = 13] = "OnAfterDeserializeReturnedNull";
    // params:  web part tag.
    SPWebPartErrorCode[SPWebPartErrorCode["OnInitReturnedNullPromise"] = 14] = "OnInitReturnedNullPromise";
    // params: none.
    SPWebPartErrorCode[SPWebPartErrorCode["ReadOnlyProperty"] = 15] = "ReadOnlyProperty";
    // params: web part tag.
    SPWebPartErrorCode[SPWebPartErrorCode["SerializationFailed"] = 16] = "SerializationFailed";
    // params: web part tag.
    SPWebPartErrorCode[SPWebPartErrorCode["FirstTimeRenderCalledMoreThanOnce"] = 17] = "FirstTimeRenderCalledMoreThanOnce";
    // params: web part tag.
    SPWebPartErrorCode[SPWebPartErrorCode["RenderCompletedCallNotCalled"] = 18] = "RenderCompletedCallNotCalled";
    // params: invalid splink attribute format.
    SPWebPartErrorCode[SPWebPartErrorCode["InvalidSPLinkAttributeFormat"] = 19] = "InvalidSPLinkAttributeFormat";
    // params: splink index.
    SPWebPartErrorCode[SPWebPartErrorCode["InvalidSPLinkIndex"] = 20] = "InvalidSPLinkIndex";
    // params: web part tag.
    SPWebPartErrorCode[SPWebPartErrorCode["GetDataReturnedNullPromise"] = 21] = "GetDataReturnedNullPromise";
    // params: web part tag.
    SPWebPartErrorCode[SPWebPartErrorCode["RenderPromiseUndefined"] = 22] = "RenderPromiseUndefined";
    // params: web part tag.
    SPWebPartErrorCode[SPWebPartErrorCode["RenderTimeout"] = 23] = "RenderTimeout";
})(SPWebPartErrorCode || (SPWebPartErrorCode = {}));
/**
 * Web part errors.
 *
 * @internal
 */
var SPWebPartError = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(SPWebPartError, _super);
    /**
     * Constructor for the SPWebPartError class.
     *
     * @param errorCode - a numeric error code of type SPWebPartErrorCode.
     * @param logProperties - (optional) additional properties that can be used to troubleshoot rare to repro bugs.
     * @param params - Error message params.
     *
     */
    function SPWebPartError(errorCode, logProperties) {
        var params = []; // tslint:disable-line:no-any
        for (var _i = 2 // tslint:disable-line:no-any
        ; _i < arguments.length // tslint:disable-line:no-any
        ; _i++ // tslint:disable-line:no-any
        ) {
            params[_i - 2] = arguments[_i]; // tslint:disable-line:no-any
        }
        var _this = this;
        var webPartErrorCode = errorCode;
        if (webPartErrorCode) {
            _this = _super.call(this, SPWebPartErrorCode[webPartErrorCode], _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["Text"].format(SPWebPartError._errorCodeToMessageMap.get(webPartErrorCode), params), logProperties) || this;
            // Manually set the prototype, as we can no longer extend built-in classes like Error, Array, Map, etc
            // https://github.com/Microsoft/TypeScript-wiki/blob/master/Breaking-Changes.md#extending-built-ins-like-error-array-and-map-may-no-longer-work
            //
            // Note: the prototype must also be set on any classes which extend this one
            _this.__proto__ = SPWebPartError.prototype; // tslint:disable-line:no-any
            _this._id = webPartErrorCode;
        }
        return _this;
    }
    Object.defineProperty(SPWebPartError.prototype, "id", {
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SPWebPartError.prototype, "category", {
        /**
         * Returns 'SPWebPartErrorCode'.
         */
        get: function () {
            return 'SPWebPartErrorCode';
        },
        enumerable: false,
        configurable: true
    });
    /* tslint:disable-next-line:no-any */
    SPWebPartError.create = function (errorCode) {
        var params = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            params[_i - 1] = arguments[_i];
        }
        return new SPWebPartError(errorCode, undefined, params);
    };
    SPWebPartError.createWithLogProperties = function (errorCode, logProperties) {
        var params = []; // tslint:disable-line:no-any
        for (var _i = 2 // tslint:disable-line:no-any
        ; _i < arguments.length // tslint:disable-line:no-any
        ; _i++ // tslint:disable-line:no-any
        ) {
            params[_i - 2] = arguments[_i]; // tslint:disable-line:no-any
        }
        return new SPWebPartError(errorCode, logProperties, params);
    };
    /**
     * Error id to string map
     */
    SPWebPartError._errorCodeToMessageMap = new Map([
        [SPWebPartErrorCode.ModuleUndefined, _loc_Strings_resx__WEBPACK_IMPORTED_MODULE_2__["UndefinedModuleError"]],
        [SPWebPartErrorCode.ModuleNotLoaded, _loc_Strings_resx__WEBPACK_IMPORTED_MODULE_2__["ModuleNotLoadedError"]],
        [SPWebPartErrorCode.IncorrectBoostrapModule, _loc_Strings_resx__WEBPACK_IMPORTED_MODULE_2__["IncorrectBoostrapModuleError"]],
        [SPWebPartErrorCode.MissingExpectedWebPartMemberError, _loc_Strings_resx__WEBPACK_IMPORTED_MODULE_2__["MissingExpectedWebPartMemberError"]],
        [SPWebPartErrorCode.NonBaseWebPart, _loc_Strings_resx__WEBPACK_IMPORTED_MODULE_2__["NonBaseWebPartError"]],
        [SPWebPartErrorCode.ScriptLoadError, _loc_Strings_resx__WEBPACK_IMPORTED_MODULE_2__["ScriptLoadErrorTemplate"]],
        [SPWebPartErrorCode.ManifestDownloadFailed, _loc_Strings_resx__WEBPACK_IMPORTED_MODULE_2__["ManifestDownloadFailed"]],
        [SPWebPartErrorCode.ManifestNull, _loc_Strings_resx__WEBPACK_IMPORTED_MODULE_2__["ManifestNullError"]],
        [SPWebPartErrorCode.ManifestInvalid, _loc_Strings_resx__WEBPACK_IMPORTED_MODULE_2__["ManifestInvalidError"]],
        [SPWebPartErrorCode.BaseConstructError, _loc_Strings_resx__WEBPACK_IMPORTED_MODULE_2__["BaseConstructError"]],
        [SPWebPartErrorCode.MustOverrideRender, _loc_Strings_resx__WEBPACK_IMPORTED_MODULE_2__["MustOverrideRenderError"]],
        [SPWebPartErrorCode.NotInitializedError, _loc_Strings_resx__WEBPACK_IMPORTED_MODULE_2__["NotIntializedError"]],
        [SPWebPartErrorCode.PropertyBagNull, _loc_Strings_resx__WEBPACK_IMPORTED_MODULE_2__["PropertyBagNullError"]],
        [SPWebPartErrorCode.OnAfterDeserializeReturnedNull, _loc_Strings_resx__WEBPACK_IMPORTED_MODULE_2__["OnAfterDeserializeReturnedNull"]],
        [SPWebPartErrorCode.OnInitReturnedNullPromise, _loc_Strings_resx__WEBPACK_IMPORTED_MODULE_2__["OnInitReturnedNullPromise"]],
        [SPWebPartErrorCode.ReadOnlyProperty, _loc_Strings_resx__WEBPACK_IMPORTED_MODULE_2__["ReadOnlyPropertyError"]],
        [SPWebPartErrorCode.SerializationFailed, _loc_Strings_resx__WEBPACK_IMPORTED_MODULE_2__["SerializationFailedError"]],
        [SPWebPartErrorCode.FirstTimeRenderCalledMoreThanOnce, _loc_Strings_resx__WEBPACK_IMPORTED_MODULE_2__["FirstTimeRenderCalledMoreThanOnceError"]],
        [SPWebPartErrorCode.RenderCompletedCallNotCalled, _loc_Strings_resx__WEBPACK_IMPORTED_MODULE_2__["RenderCompletedCallNotCalledError"]],
        [SPWebPartErrorCode.InvalidSPLinkAttributeFormat, _loc_Strings_resx__WEBPACK_IMPORTED_MODULE_2__["InvalidSPLinkAttributeFormatError"]],
        [SPWebPartErrorCode.InvalidSPLinkIndex, _loc_Strings_resx__WEBPACK_IMPORTED_MODULE_2__["InvalidSPLinkIndexError"]],
        [SPWebPartErrorCode.RenderPromiseUndefined, _loc_Strings_resx__WEBPACK_IMPORTED_MODULE_2__["RenderPromiseUndefinedError"]],
        [SPWebPartErrorCode.RenderTimeout, _loc_Strings_resx__WEBPACK_IMPORTED_MODULE_2__["RenderTimeout"]]
    ] /* fix this typecast, VSO:397687 */);
    return SPWebPartError;
}(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["SPError"]));



/***/ })

/******/ })});;
//# sourceMappingURL=sp-webpart-base_[locale].js.map