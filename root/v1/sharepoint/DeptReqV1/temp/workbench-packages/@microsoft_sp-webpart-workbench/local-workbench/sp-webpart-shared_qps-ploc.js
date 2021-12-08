define("914330ee-2df2-4f6e-a858-30c23a812408_1.15.53", ["tslib","@ms/sp-telemetry","@microsoft/sp-component-base","@microsoft/sp-loader","@microsoft/office-ui-fabric-react-bundle","@microsoft/sp-lodash-subset","@microsoft/sp-core-library","@microsoft/sp-page-context","@ms/i18n-utilities","@microsoft/sp-webpart-base","react","react-dom","@ms/sp-component-utilities","@microsoft/load-themed-styles","@ms/sp-deferred-component","@microsoft/sp-diagnostics","@microsoft/sp-http","@ms/odsp-utilities-bundle"], function(__WEBPACK_EXTERNAL_MODULE__17wl__, __WEBPACK_EXTERNAL_MODULE__2q6Q__, __WEBPACK_EXTERNAL_MODULE__7Awa__, __WEBPACK_EXTERNAL_MODULE_I6O9__, __WEBPACK_EXTERNAL_MODULE_KL1q__, __WEBPACK_EXTERNAL_MODULE_Pk8u__, __WEBPACK_EXTERNAL_MODULE_UWqr__, __WEBPACK_EXTERNAL_MODULE_X_PM__, __WEBPACK_EXTERNAL_MODULE_Ycni__, __WEBPACK_EXTERNAL_MODULE_br4S__, __WEBPACK_EXTERNAL_MODULE_cDcd__, __WEBPACK_EXTERNAL_MODULE_faye__, __WEBPACK_EXTERNAL_MODULE_hiL___, __WEBPACK_EXTERNAL_MODULE_jOlS__, __WEBPACK_EXTERNAL_MODULE_qjmy__, __WEBPACK_EXTERNAL_MODULE_ut3N__, __WEBPACK_EXTERNAL_MODULE_vlQI__, __WEBPACK_EXTERNAL_MODULE_y88i__) { return /******/ (function(modules) { // webpackBootstrap
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
/******/ 		var component_0 = { // @ms/sp-webpart-shared-editmode
/******/ 			i: "c79b9f88-6338-40fb-b463-3aad22a88b15",
/******/ 			v: "0.1.0",
/******/ 			m: "9poL"
/******/ 		};
/******/ 		var component_1 = { // @ms/odsp-core-bundle
/******/ 			i: "2e09fb9b-13bb-48f2-859f-97d6fff71176",
/******/ 			v: "1.1.13",
/******/ 			m: "K9kD"
/******/ 		};
/******/ 		var component_2 = { // @ms/uifabric-styling-bundle
/******/ 			i: "17ce0976-e69a-4355-be84-89b69a74717d",
/******/ 			v: "0.1.0",
/******/ 			m: "fglE"
/******/ 		};
/******/
/******/ 		return {"sp-edit-utilities": [component_0],"vendors~live-persona-card-loader": [component_1, component_2],"vendors~data-sync-nucleus": [component_1, component_2]}[chunkId] || [];
/******/ 	}
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"sp-webpart-shared": 0
/******/ 	};
/******/
/******/
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "chunk." + ({"sp-edit-utilities":"sp-edit-utilities","vendors~live-persona-card-loader":"vendors~live-persona-card-loader","live-persona-card-loader":"live-persona-card-loader","vendors~sp-caption-element-edit":"vendors~sp-caption-element-edit","sp-caption-element-edit":"sp-caption-element-edit","vendors~sp-fabric-teaching-bubble":"vendors~sp-fabric-teaching-bubble","vendors~data-sync-nucleus":"vendors~data-sync-nucleus"}[chunkId]||chunkId) + "_" + (["qps-ploc","none"])[{"0":1,"live-persona-card-loader":0,"sp-caption-element-edit":0,"sp-edit-utilities":1,"vendors~live-persona-card-loader":1,"vendors~sp-caption-element-edit":1,"vendors~sp-fabric-teaching-bubble":1,"vendors~data-sync-nucleus":1}[chunkId]] + ".js"
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
/******/ 	var jsonpArray = window["webpackJsonp_914330ee_2df2_4f6e_a858_30c23a812408_1_15_53"] = window["webpackJsonp_914330ee_2df2_4f6e_a858_30c23a812408_1_15_53"] || [];
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
/******/ 	  var regex = (typeof spScriptNamePattern !== 'undefined') ? spScriptNamePattern : /sp-webpart-shared_qps-ploc\.js/i;
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

/***/ "+y93":
/*!*******************************************************************!*\
  !*** ./lib/baseCollectionWebPart/style/BaseCollection.module.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../../../common/temp/node_modules/.pnpm/css-loader@3.2.1_webpack@4.44.2/node_modules/css-loader/dist/cjs.js!../../../../../common/temp/node_modules/.pnpm/postcss-loader@3.0.0/node_modules/postcss-loader/src??postcss!./BaseCollection.module.css */ "wXfs");
var loader = __webpack_require__(/*! @microsoft/load-themed-styles */ "jOlS");

if(typeof content === "string") content = [[module.i, content]];

// add the styles to the DOM
for (var i = 0; i < content.length; i++) loader.loadStyles(content[i][1], true);

if(content.locals) module.exports = content.locals;

/***/ }),

/***/ "0Y8v":
/*!****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/css-loader@3.2.1_webpack@4.44.2/node_modules/css-loader/dist/cjs.js!/agent/_work/1/s/common/temp/node_modules/.pnpm/postcss-loader@3.0.0/node_modules/postcss-loader/src??postcss!./lib/captionElement/CaptionElement.module.css ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../common/temp/node_modules/.pnpm/css-loader@3.2.1_webpack@4.44.2/node_modules/css-loader/dist/runtime/api.js */ "5ADk")(false);
// Module
exports.push([module.i, ".u_e_658c9e0a{font-size:14px;font-weight:400;font-weight:300;line-height:1.6em}.u_e_658c9e0a,.v_e_658c9e0a{overflow-x:hidden;text-overflow:ellipsis}.v_e_658c9e0a{color:\"[theme:neutralPrimary, default: #323130]\"}@media screen and (min-width:320px){.v_e_658c9e0a:not(.q_e_658c9e0a){font-weight:300;font-size:21px;font-weight:100}}@media screen and (min-width:480px){.v_e_658c9e0a:not(.q_e_658c9e0a){font-size:24px}}[dir=ltr] .w_e_658c9e0a{text-align:left}[dir=rtl] .w_e_658c9e0a{text-align:right}.x_e_658c9e0a{text-align:center}[dir=ltr] .y_e_658c9e0a{text-align:right}[dir=rtl] .y_e_658c9e0a{text-align:left}.z_e_658c9e0a{margin-bottom:18px}.aa_e_658c9e0a{margin-bottom:11px}.ab_e_658c9e0a{margin-bottom:0}.ac_e_658c9e0a{white-space:pre-wrap}.ae_e_658c9e0a{background-color:transparent;border:none;box-sizing:border-box;display:block;margin:0;outline:0;overflow:hidden;resize:none;width:100%;font-family:inherit;font-size:inherit;font-weight:inherit;line-height:inherit;text-align:inherit}.ae_e_658c9e0a:-ms-input-placeholder{color:\"[theme:neutralTertiary, default: #a19f9d]\"}.textarea:-ms-input-placeholder{color:\"[theme:neutralTertiary, default: #a19f9d]\"}.ae_e_658c9e0a::placeholder{color:\"[theme:neutralTertiary, default: #a19f9d]\"}", ""]);


/***/ }),

/***/ "17wl":
/*!************************!*\
  !*** external "tslib" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__17wl__;

/***/ }),

/***/ "1hxI":
/*!*******************************************************!*\
  !*** ./lib/dataProviderPrototype/BaseDataProvider.js ***!
  \*******************************************************/
/*! exports provided: BaseDataProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseDataProvider", function() { return BaseDataProvider; });
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__);
/**
 * @Copyright (c) Microsoft Corporation.  All rights reserved.
 */

/**
 * Base data provider.
 *
 * @alpha
 */
var BaseDataProvider = /** @class */ (function () {
    function BaseDataProvider(configuration) {
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Validate"].isNotNullOrUndefined(configuration, 'configuration');
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Validate"].isNotNullOrUndefined(configuration.serviceScope, 'configuration.serviceScope');
        this.configuration = configuration;
    }
    return BaseDataProvider;
}());



/***/ }),

/***/ "2aLq":
/*!*************************************************!*\
  !*** ../sp-live-persona-card/lib/EventUtils.js ***!
  \*************************************************/
/*! exports provided: generateEnterKeyDownEvent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateEnterKeyDownEvent", function() { return generateEnterKeyDownEvent; });
// Copyright (c) Microsoft Corporation. All rights reserved.
// tslint:disable-next-line export-name
function generateEnterKeyDownEvent() {
    if (KeyboardEvent instanceof Function) {
        return new KeyboardEvent('keydown', {
            bubbles: true,
            cancelable: true,
            key: 'Enter',
            code: 'Enter',
            keyCode: 13,
            which: 13
        });
    }
    // For IE
    var keyboardEvent = document.createEvent('KeyboardEvent');
    // tslint:disable-next-line no-any
    keyboardEvent.initKeyboardEvent('keydown', true, // bubbles
    true, // cancelable
    window, // view
    'Enter', // char
    'Enter', // key
    0, // location
    '', // modifiersListArg
    false // repeat
    );
    return keyboardEvent;
}


/***/ }),

/***/ "2azk":
/*!*******************************!*\
  !*** ./lib/lessText/index.js ***!
  \*******************************/
/*! exports provided: LessText */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _LessText__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LessText */ "46Sk");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LessText", function() { return _LessText__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/**
 * @copyright Microsoft Corporation. All rights reserved.
 */
 // tslint:disable-line:export-name


/***/ }),

/***/ "2pa0":
/*!**********************************************************!*\
  !*** ./lib/dataProviderPrototype/WebPartDataProvider.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _MysiteCacheDataProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MysiteCacheDataProvider */ "6aUX");


/**
 * A data provider for web parts that is expected to help web part developers
 * adopt performance best practices.
 *
 * @alpha
 */
var WebPartDataProvider = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(WebPartDataProvider, _super);
    function WebPartDataProvider() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return WebPartDataProvider;
}(_MysiteCacheDataProvider__WEBPACK_IMPORTED_MODULE_1__["default"]));
/* harmony default export */ __webpack_exports__["default"] = (WebPartDataProvider);


/***/ }),

/***/ "2q6Q":
/*!***********************************!*\
  !*** external "@ms/sp-telemetry" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__2q6Q__;

/***/ }),

/***/ "46Sk":
/*!**********************************!*\
  !*** ./lib/lessText/LessText.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/office-ui-fabric-react-bundle */ "KL1q");
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _LessText_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./LessText.module.scss */ "8Y2T");
/**
 * @copyright Microsoft Corporation. All rights reserved.
 *
 * @file LessText.tsx
 */




var TITLE_ATTRIBUTE_NAME = 'title';
/**
 * The delay time in millisecond to re-render after window resize.
 *
 * This number must be larger than the delay time to trigger web part re-render in ClientSideWebPartManager.
 * The web part re-render will update the container width first, then LessText updates the truncation based on width.
 * https://aka.ms/AA4ukua
 */
var DELAY_IN_MILLISECOND = 1010;
// Note: Any changes in this file should be in sync with LessText in sp-canvas-toolbox project.
var LessText = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(LessText, _super);
    function LessText(props) {
        var _this = _super.call(this, props) || this;
        /**
         * Call update at runtime to truncate the text whenever on needs.
         */
        _this.update = function () {
            if (_this._textContainerElementRef.current) {
                _this._async.requestAnimationFrame(_this._truncateLines);
            }
        };
        _this._truncateLines = function () {
            if (!_this._textContainerElementRef.current) {
                return;
            }
            var text = _this.props.text || '';
            _this._textContainerElementRef.current.textContent = text;
            var lines = Math.round(_this.props.lines);
            var lineHeight = window
                .getComputedStyle(_this._textContainerElementRef.current, undefined)
                .getPropertyValue('line-height');
            var maxHeight = lines * parseFloat(lineHeight);
            var currHeight = _this._contentHeight;
            _this._textArray = text.split('');
            var shouldTrim = currHeight > maxHeight && lines > 0;
            if (shouldTrim) {
                var trimmedLength = _this._trimAndCalculateLength(currHeight, maxHeight);
                _this._applyTextNumber(trimmedLength);
            }
            if (shouldTrim && _this.props.autoShowTitle) {
                _this._textContainerElementRef.current.title = text;
            }
            else {
                // It doesn't make sense to show duplicate text because it is not truncated.
                _this._textContainerElementRef.current.removeAttribute(TITLE_ATTRIBUTE_NAME);
            }
            if (_this.props.onAfterTruncate) {
                _this.props.onAfterTruncate(shouldTrim);
            }
        };
        _this._async = new _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_1__["Async"](_this);
        _this._eventGroup = new _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_1__["EventGroup"](_this);
        _this._handleWindowResize = _this._async.debounce(_this._handleWindowResizeCore, DELAY_IN_MILLISECOND);
        _this._textContainerElementRef = react__WEBPACK_IMPORTED_MODULE_2__["createRef"]();
        return _this;
    }
    LessText.prototype.componentDidMount = function () {
        // Leverage `setTimeout` here to wait for the batch async styles are loaded.
        this._async.setTimeout(this.update, 0);
        this._eventGroup.on(window, 'resize', this._handleWindowResize);
    };
    LessText.prototype.componentDidUpdate = function () {
        this.update();
    };
    LessText.prototype.componentWillUnmount = function () {
        this._eventGroup.off(window, 'resize', this._handleWindowResize);
        this._eventGroup.dispose();
        this._async.dispose();
    };
    LessText.prototype.render = function () {
        return (react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, Object(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_1__["getNativeProps"])(this.props, _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_1__["divProperties"]), { "data-automation-id": 'less-text', ref: this._textContainerElementRef, className: Object(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_1__["css"])(_LessText_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].lessText, this.props.className) }), this.props.text));
    };
    Object.defineProperty(LessText.prototype, "_omission", {
        get: function () {
            return this.props.omission || '…';
        },
        enumerable: true,
        configurable: true
    });
    LessText.prototype._handleWindowResizeCore = function () {
        this.update();
    };
    Object.defineProperty(LessText.prototype, "_contentHeight", {
        get: function () {
            if (this._textContainerElementRef.current) {
                var contentStyles = window.getComputedStyle(this._textContainerElementRef.current);
                var padding = 0;
                if (contentStyles && contentStyles.paddingTop && contentStyles.paddingBottom) {
                    padding = parseFloat(contentStyles.paddingTop) + parseFloat(contentStyles.paddingBottom);
                }
                return this._textContainerElementRef.current.offsetHeight - padding;
            }
            return 0;
        },
        enumerable: true,
        configurable: true
    });
    LessText.prototype._trimAndCalculateLength = function (currentValue, maxValue) {
        var allowedTextNumber = this._textArray.length;
        if (!this._textContainerElementRef.current) {
            return allowedTextNumber;
        }
        var minTextNumber = 1, maxTextNumber = allowedTextNumber;
        do {
            var currentTextNumber = Math.floor((minTextNumber + maxTextNumber + 1) / 2);
            this._applyTextNumber(currentTextNumber);
            currentValue = this._contentHeight;
            if (currentValue > maxValue) {
                maxTextNumber = currentTextNumber - 1;
            }
            else {
                minTextNumber = currentTextNumber;
            }
        } while (minTextNumber < maxTextNumber);
        return minTextNumber;
    };
    LessText.prototype._applyTextNumber = function (newTextNumber) {
        var newText = this._textArray.slice(0, newTextNumber);
        var newTextJoined = newText.join('');
        if (this._textContainerElementRef.current) {
            this._textContainerElementRef.current.textContent =
                this._textContainerElementRef.current.textContent === newTextJoined
                    ? newTextJoined
                    : newTextJoined + this._omission;
        }
    };
    return LessText;
}(react__WEBPACK_IMPORTED_MODULE_2__["PureComponent"]));
/* harmony default export */ __webpack_exports__["default"] = (LessText);


/***/ }),

/***/ "4Aoc":
/*!******************************************************************!*\
  !*** ../sp-live-persona-card/lib/LivePersonaCard.module.scss.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* tslint:disable */
__webpack_require__(/*! ./LivePersonaCard.module.css */ "4SS+");
var styles = {
    livePersonaCardWrapper: 'a_a_434b99a9'
};
/* harmony default export */ __webpack_exports__["default"] = (styles);
/* tslint:enable */ 


/***/ }),

/***/ "4SS+":
/*!**************************************************************!*\
  !*** ../sp-live-persona-card/lib/LivePersonaCard.module.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../common/temp/node_modules/.pnpm/css-loader@3.2.1_webpack@4.44.2/node_modules/css-loader/dist/cjs.js!../../../common/temp/node_modules/.pnpm/postcss-loader@3.0.0/node_modules/postcss-loader/src??postcss!./LivePersonaCard.module.css */ "sGEB");
var loader = __webpack_require__(/*! @microsoft/load-themed-styles */ "jOlS");

if(typeof content === "string") content = [[module.i, content]];

// add the styles to the DOM
for (var i = 0; i < content.length; i++) loader.loadStyles(content[i][1], true);

if(content.locals) module.exports = content.locals;

/***/ }),

/***/ "4X80":
/*!**********************************************************!*\
  !*** ./lib/emphasisStyle/BaseEmphasisComponentStyles.js ***!
  \**********************************************************/
/*! exports provided: BaseEmphasisComponentStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseEmphasisComponentStyles", function() { return BaseEmphasisComponentStyles; });
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/office-ui-fabric-react-bundle */ "KL1q");
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__);
/**
 * @copyright Microsoft Corporation. All rights reserved.
 */

/**
 * @deprecated
 * @todo #710430 use fabric "mergeStyles()" to convert style to className on need,
 * instead of converting them all with this class.
 */
var BaseEmphasisComponentStyles = /** @class */ (function () {
    function BaseEmphasisComponentStyles() {
    }
    BaseEmphasisComponentStyles.prototype.getClassNames = function (styleProps, shouldUpdate) {
        if (shouldUpdate === void 0) { shouldUpdate = true; }
        if (shouldUpdate || !this._cachedClassNames) {
            this._cachedClassNames = Object(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__["classNamesFunction"])()(this.getStyles, styleProps);
        }
        return this._cachedClassNames;
    };
    return BaseEmphasisComponentStyles;
}());



/***/ }),

/***/ "4cyI":
/*!**********************************!*\
  !*** ./lib/parallax/Parallax.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/office-ui-fabric-react-bundle */ "KL1q");
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ScrollEventHandler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ScrollEventHandler */ "5Vlp");
/**
 * @copyright Microsoft Corporation. All rights reserved.
 *
 * @file Parallax effect utility.  Accepts a target element and sets a translate3d
 * on the target element once the container is scrolled beyond the top bound of the
 * scrollable parent viewport.
 */



var Parallax = /** @class */ (function () {
    function Parallax() {
        var _this = this;
        this._parallaxElements = new Set();
        this._parallaxFactor = 1.81; // Parallax ratio, taken from example parallax site
        this._onScroll = function (event, clientRect) {
            window.requestAnimationFrame(_this._updateParallax.bind(_this, clientRect));
        };
        this._updateParallax = function (clientRect) {
            var scrollRegionTop = clientRect.top;
            _this._parallaxElements.forEach(function (ele) {
                if (ele.parentElement) {
                    var _a = ele.parentElement.getBoundingClientRect(), top_1 = _a.top, bottom = _a.bottom;
                    if (top_1 < scrollRegionTop && bottom > scrollRegionTop) {
                        var parallaxDistance = Math.round((scrollRegionTop - top_1) / _this._parallaxFactor);
                        _this._setTranslate(ele, parallaxDistance);
                    }
                    else if (top_1 >= scrollRegionTop) {
                        _this._setTranslate(ele, 0);
                    }
                }
            });
        };
    }
    Object.defineProperty(Parallax, "instance", {
        get: function () {
            if (Parallax._instance === undefined) {
                Parallax._instance = new Parallax();
            }
            return Parallax._instance;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Parallax.prototype, "isParallaxEnabled", {
        /**
         * We want to disable Parallax effect for IE and Edge.  There are issues with scrolling perf, which results
         * in choppy animation when scrolling.
         */
        get: function () {
            var browserInfo = _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_BrowserDetection"].getBrowserInformation();
            var canAddParallax = browserInfo.browser !== _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_Browser"].Edge &&
                browserInfo.browser !== _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_Browser"].IE &&
                !_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_BrowserUtilities"].isWebViewHosted();
            return canAddParallax;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Applies parallax effect onto the targetElement
     * @param targetElement
     */
    Parallax.prototype.tryAddParallax = function (targetElement) {
        var canAddParallax = this.isParallaxEnabled;
        if (canAddParallax) {
            _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Validate"].isNotNullOrUndefined(targetElement, 'targetElement');
            // Fabric lookup defaults to window. On mobile viewport, a page's scrollable element is document.body.
            // Fabric's return type is incorrect, so we must assert.
            var scrollableParent = Object(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_1__["findScrollableParent"])(targetElement);
            var scrollTarget = scrollableParent === window ? document.body : scrollableParent;
            _ScrollEventHandler__WEBPACK_IMPORTED_MODULE_2__["ScrollEventHandler"].instance.register(targetElement, this._onScroll, scrollTarget);
            this._parallaxElements.add(targetElement);
            targetElement.style.setProperty('will-change', 'transform');
        }
        return canAddParallax;
    };
    /**
     * Removes parallax effect from the targetElement
     * @param targetElement
     */
    Parallax.prototype.removeParallax = function (targetElement) {
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Validate"].isNotNullOrUndefined(targetElement, 'targetElement');
        if (this._parallaxElements.has(targetElement)) {
            this._parallaxElements.delete(targetElement);
            _ScrollEventHandler__WEBPACK_IMPORTED_MODULE_2__["ScrollEventHandler"].instance.unregister(targetElement, this._onScroll);
            this._setTranslate(targetElement, 0);
            targetElement.style.removeProperty('will-change');
        }
    };
    Parallax.prototype._setTranslate = function (elm, topPosition) {
        var translate = 'translate3d(0px,' + topPosition + 'px, 0px)';
        elm.style.transform = translate;
    };
    return Parallax;
}());
/* harmony default export */ __webpack_exports__["default"] = (Parallax);


/***/ }),

/***/ "5ADk":
/*!***********************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/css-loader@3.2.1_webpack@4.44.2/node_modules/css-loader/dist/runtime/api.js ***!
  \***********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], "{").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      // eslint-disable-next-line prefer-destructuring
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = modules[_i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = "(".concat(item[2], ") and (").concat(mediaQuery, ")");
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot).concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "5Vlp":
/*!********************************************!*\
  !*** ./lib/parallax/ScrollEventHandler.js ***!
  \********************************************/
/*! exports provided: ScrollEventHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollEventHandler", function() { return ScrollEventHandler; });
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/sp-lodash-subset */ "Pk8u");
/* harmony import */ var _microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_1__);


/**
 * Common scroll event handler to optimize multiple individual handlers and cost of calculating ClientRect.
 * It also optimizes calculating scrollable parents.
 * It also notifies on window resize besides scroll event
 *
 * @internal
 */
var ScrollEventHandler = /** @class */ (function () {
    /**
     * Private Constructor of singleton class
     */
    function ScrollEventHandler() {
        var _this = this;
        /**
         * Register an element to receive notification on scroll event
         *
         * @param element - Element for which scroll event is desired
         * @param callbackFunction - Callback function for handling event
         * @param scrollableParent - Optional scrollable Parent if already known
         */
        this.register = function (element, callbackFunction, scrollableParent) {
            // Use if scrollable parent is provided, as that is more performant.
            if (!_this._scrollableParents || !_this._scrollableParents.length) {
                _this._scrollableParents = scrollableParent ? [scrollableParent] : _this._findScrollableParents(element);
            }
            // We want to listen to the scrollable parent's scroll event, if one exists.
            _this._scrollableParents.forEach(function (parent, index, allParents) {
                var totalRegisteredCount = _this._updateRegisteredChildren(parent, 1);
                // First time: add event listener
                if (totalRegisteredCount === 1) {
                    _this._listenEvents(parent);
                }
            });
            _this._listenEvents(window);
            _this._eventListeners.add(callbackFunction);
        };
        /**
         * Returns all scrollable parents between element and the body of the document.
         * It is often one but in case of Classic pages there might be intermediate parents.
         */
        this._findScrollableParents = function (startingElement) {
            var parents = [];
            var parent = startingElement;
            while (parent) {
                parent = ScrollEventHandler._findScrollableParent(parent);
                if (parent) {
                    parents.push(parent);
                    parent = parent.parentElement;
                }
            }
            return parents.length ? parents : [document.body];
        };
        /**
         * Stop listening to scroll and resize events.
         */
        this._unlistenEvents = function (parent) {
            if (!parent) {
                return;
            }
            var isWindow = parent === window;
            if (!isWindow || (isWindow && _this._isListeningWindow)) {
                _this._removeEventListener(parent);
                if (isWindow) {
                    _this._isListeningWindow = false;
                }
            }
        };
        /**
         * It keeps track of how many lazily loaded children are registered to a scrollable parent.
         * This record keeping is required to deregister event handler from the parent when There
         * are no children listening to events.
         */
        this._updateRegisteredChildren = function (scrollableParent, count) {
            var lazyChildrenCount = count + Number(scrollableParent.getAttribute(ScrollEventHandler._eventTrackerAttribute));
            if (lazyChildrenCount > 0) {
                scrollableParent.setAttribute(ScrollEventHandler._eventTrackerAttribute, lazyChildrenCount.toString());
            }
            else {
                scrollableParent.removeAttribute(ScrollEventHandler._eventTrackerAttribute);
            }
            return lazyChildrenCount;
        };
        this._eventListeners = new Set();
        this._isListeningWindow = false;
        this._lazyHandler = _microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_1__["throttle"](this._scrollEventHandler, 10).bind(this);
    }
    Object.defineProperty(ScrollEventHandler, "instance", {
        get: function () {
            // Lazy initialize the singleton
            if (ScrollEventHandler._instance === undefined) {
                ScrollEventHandler._instance = new ScrollEventHandler();
            }
            return ScrollEventHandler._instance;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Unregister a loaded element which should not be tracked any more.
     */
    ScrollEventHandler.prototype.unregister = function (element, callbackFunction) {
        var _this = this;
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Validate"].isNotNullOrUndefined(callbackFunction, 'unregister callback function');
        if (!this._eventListeners.has(callbackFunction)) {
            return;
        }
        this._eventListeners.delete(callbackFunction);
        var parents = this._scrollableParents && this._scrollableParents.length
            ? this._scrollableParents
            : this._findScrollableParents(element);
        parents.forEach(function (parent, index, allParents) {
            var count = _this._updateRegisteredChildren(parent, -1);
            if (count <= 0) {
                // This was the last listener for this parent, unregister event
                _this._unlistenEvents(parent);
            }
        });
        if (this._eventListeners.size === 0) {
            this._unlistenEvents(window);
        }
    };
    /**
     * Event handler which is called upon scroll and resize events.
     */
    ScrollEventHandler.prototype._scrollEventHandler = function (event) {
        var _this = this;
        // Optimize calculating getBoundingClientRect
        if (!this._cachedClientRect || this._cacheExpired) {
            this._cachedClientRect = this._scrollableParents[this._scrollableParents.length - 1].getBoundingClientRect();
            this._cachedClientRectAge = Date.now();
        }
        this._eventListeners.forEach(function (listener) {
            listener(event, _this._cachedClientRect);
        });
    };
    /**
     * Start listening to scroll and resize events. It is safe to call this API multiple times on a DOM
     * element, it does not lead to multiple attached events.
     */
    ScrollEventHandler.prototype._listenEvents = function (parent) {
        if (!parent) {
            return;
        }
        var isWindow = parent === window;
        if (!isWindow || (isWindow && !this._isListeningWindow)) {
            this._addEventListener(parent);
            if (isWindow) {
                this._isListeningWindow = true;
            }
        }
    };
    /**
     * Add Listener to scroll and resize events for given element or window
     */
    ScrollEventHandler.prototype._addEventListener = function (element) {
        element.addEventListener(ScrollEventHandler.SCROLL, this._lazyHandler, false);
        element.addEventListener(ScrollEventHandler.RESIZE, this._lazyHandler, false);
    };
    /**
     * Remove Listeners from scroll and resize events for given element or window
     */
    ScrollEventHandler.prototype._removeEventListener = function (element) {
        element.removeEventListener(ScrollEventHandler.SCROLL, this._lazyHandler);
        element.removeEventListener(ScrollEventHandler.RESIZE, this._lazyHandler);
    };
    Object.defineProperty(ScrollEventHandler.prototype, "_cacheExpired", {
        get: function () {
            return Date.now() - this._cachedClientRectAge >= ScrollEventHandler.CACHE_EXPIRED;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * This attribute managed the number of scroll event handlers that are registered to
     * a scrollable parent. When the number of events becomes zero, the event handler is
     * unregistered.
     */
    ScrollEventHandler._eventTrackerAttribute = 'data-sp-scroll-event-listener';
    ScrollEventHandler.SCROLL = 'scroll';
    ScrollEventHandler.RESIZE = 'resize';
    ScrollEventHandler.CACHE_EXPIRED = 100;
    /**
     * Traverses up the DOM tree for the element with the data-is-scrollable=true attribute,
     * or return the window object.
     */
    ScrollEventHandler._findScrollableParent = function (startingElement) {
        var DATA_IS_SCROLLABLE_ATTRIBUTE = 'data-is-scrollable';
        var el = startingElement;
        var body = document.body;
        // First do a quick scan for the scrollable attribute.
        while (el && el !== body) {
            if (el.getAttribute(DATA_IS_SCROLLABLE_ATTRIBUTE) === 'true') {
                return el;
            }
            el = el.parentElement;
        }
        // If we haven't found it, the use the slower method: compute styles to evaluate if overflow is set.
        el = startingElement;
        while (el && el !== body) {
            var styles = getComputedStyle(el);
            if (styles) {
                var overflowY = styles.getPropertyValue('overflow-y');
                if (overflowY && (overflowY === ScrollEventHandler.SCROLL || overflowY === 'auto')) {
                    return el;
                }
            }
            el = el.parentElement;
        }
        // Fall back to window scroll.
        if (!el || el === body) {
            el = undefined;
        }
        return el;
    };
    return ScrollEventHandler;
}());



/***/ }),

/***/ "6UW+":
/*!************************************************************!*\
  !*** ./lib/baseCollectionWebPart/BaseCollectionWebPart.js ***!
  \************************************************************/
/*! exports provided: RefreshType, BaseCollectionWebPart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RefreshType", function() { return RefreshType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseCollectionWebPart", function() { return BaseCollectionWebPart; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "faye");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @microsoft/sp-lodash-subset */ "Pk8u");
/* harmony import */ var _microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @microsoft/sp-diagnostics */ "ut3N");
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _microsoft_sp_component_base__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @microsoft/sp-component-base */ "7Awa");
/* harmony import */ var _microsoft_sp_component_base__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_component_base__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ms/sp-telemetry */ "2q6Q");
/* harmony import */ var _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _microsoft_sp_webpart_base__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @microsoft/sp-webpart-base */ "br4S");
/* harmony import */ var _microsoft_sp_webpart_base__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_webpart_base__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @microsoft/office-ui-fabric-react-bundle */ "KL1q");
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _microsoft_sp_page_context__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @microsoft/sp-page-context */ "X+PM");
/* harmony import */ var _microsoft_sp_page_context__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_page_context__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ms/sp-component-utilities */ "hiL/");
/* harmony import */ var _ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _BaseCollection__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./BaseCollection */ "Ek86");
/* harmony import */ var _mySiteWebPartCache_MySiteWebPartCacheManager__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../mySiteWebPartCache/MySiteWebPartCacheManager */ "sRXn");
/* harmony import */ var _BaseCollectionFlights__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./BaseCollectionFlights */ "YDJB");
/* harmony import */ var _BaseCollectionKillSwitches__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./BaseCollectionKillSwitches */ "pDlU");
/* harmony import */ var _loc_Strings_resx__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./loc/Strings.resx */ "IBxL");
var _loc_Strings_resx__WEBPACK_IMPORTED_MODULE_16___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./loc/Strings.resx */ "IBxL", 1);
/**
 * @file BaseCollectionWebPart.ts
 * @copyright Microsoft Corporation. All rights reserved.
 *
 * @remark A base class for WebParts that share common features for rendering SharePoint content.  Includes support
 *         for multiple layouts and data providers via display field mapping.
 */

















// tslint:disable-next-line:typedef variable-name
var RefreshType = {
    /**
     * Appends the new response with the existing data
     */
    Append: 0,
    /**
     * Replaces current data with the new response
     */
    Replace: 1,
    /**
     * Returns the new response but does not override the current data
     */
    Compare: 2
};
var TIERED_CACHE_VERSION = '2.0';
var _lkgSizeKS = new _ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_11__["KillSwitch"]('4edae48c-3b13-49f4-9d36-ae20f68406f4' /*'02/28/2020', 'WEX_LogLKGSize' */);
var BaseCollectionWebPart = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(BaseCollectionWebPart, _super);
    function BaseCollectionWebPart() {
        var _this = _super.call(this) || this;
        _this._handleThemeChangedEvent = function (eventArgs) {
            _this._emphasisTheme = eventArgs.theme;
            _this.render();
        };
        _this._disableDataRequest = false;
        _this._isSelectedLayoutLogged = false;
        return _this;
    }
    // for size avoid reference to OAuthUtilityError which avoids loading sp-client-shared
    BaseCollectionWebPart._isOAuthUtilityError = function (error) {
        var prototype = Object.getPrototypeOf(error); // tslint:disable-line:no-any
        return prototype.constructor && prototype.constructor.name === 'OAuthUtilityError';
    };
    BaseCollectionWebPart._getContextLogSource = function (context) {
        var contextTag = context && context.webPartTag;
        return _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_4__["_LogSource"].create(contextTag || 'BaseCollectionWebPart');
    };
    Object.defineProperty(BaseCollectionWebPart.prototype, "component", {
        /**
         * @returns The react component of the actively rendered BaseCollectionWebPart
         * @see IBaseCollectionWebPartViewProperties
         * @see IBaseCollectionWebPartViewState
         */
        get: function () {
            return this._component;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseCollectionWebPart.prototype, "response", {
        /**
         * @returns The current data being rendered by BaseCollectionWebPart
         * @see IDataRow
         */
        get: function () {
            return this._response;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseCollectionWebPart.prototype, "activeLayoutInfo", {
        /**
         * @returns Configuration property bag for the actively used layout by the BaseCollectionWebPart
         * @see ILayoutInfo
         */
        get: function () {
            return this._activeLayoutInfo;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseCollectionWebPart.prototype, "activeDataProviderInfo", {
        /**
         * @returns Configuration property bag for the actively used data provider by the BaseCollectionWebPart
         * @see IDataProviderInfo
         */
        get: function () {
            return this._activeDataProviderInfo;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseCollectionWebPart.prototype, "isContributor", {
        /**
         * @returns True if current user has permissions to add list items. False otherwise.
         */
        get: function () {
            var permissions = this.context.pageContext.web.permissions;
            return !!permissions && permissions.hasPermission(_microsoft_sp_page_context__WEBPACK_IMPORTED_MODULE_10__["SPPermission"].addListItems);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseCollectionWebPart.prototype, "isRenderAsync", {
        /**
         * @returns always true so component render performance is measured correctly when it's DOM is mounted
         * during componentDidMount.
         */
        get: function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseCollectionWebPart.prototype, "sectionBackgroundTheme", {
        /**
         * @returns the theme variant of the section that hosts current web part.
         * The value will be ready after onInit;
         */
        get: function () {
            return this._emphasisTheme;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Sets or Updates a prop value in the active Layout. The prop change will take effect on the next rendering.
     */
    // tslint:disable-next-line:no-any
    BaseCollectionWebPart.prototype.updateActiveLayoutProp = function (prop, value) {
        this._activeLayoutInfo.properties[prop] = value;
    };
    /**
     * Initialize the WebPart.  If overridden, be sure to call super.onInit() at some point and return
     * it's value from your onInit.
     */
    BaseCollectionWebPart.prototype.onInit = function () {
        var _this = this;
        this._response = [];
        // Retrieve the options of BaseCollectionWeb part that the web part wants to use.
        this._options = this.options;
        var qosMonitorMount = new _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_6__["_QosMonitor"](this._options.qosPrefix + "Mount");
        if (!this._shouldUseLegacyMySiteWebPartCache() && !Object(_BaseCollectionKillSwitches__WEBPACK_IMPORTED_MODULE_15__["isLoggingFlightsPerformanceKSActive"])()) {
            // tslint:disable: max-line-length
            _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_6__["_PerformanceLogger"].trackWebpartFlight(this.context.webPartTag, _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_6__["_PerformanceFlight"].WEXTieredCaching);
            _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_6__["_PerformanceLogger"].trackWebpartFlight(this.context.webPartTag, _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_6__["_PerformanceFlight"].WEXMySiteCacheMangementTieredCaching);
            _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_6__["_PerformanceLogger"].trackWebpartFlight(this.context.webPartTag, _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_6__["_PerformanceFlight"].WEXUseIndexedDBTieredCaching);
            _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_6__["_PerformanceLogger"].trackWebpartExperiment(this.context.webPartTag, _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_6__["_PerformanceExperiment"].WEXUseIndexedDBTieredCachingExp);
            _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_6__["_PerformanceLogger"].trackWebpartExperiment(this.context.webPartTag, _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_6__["_PerformanceExperiment"].WEXMySiteCacheTieredCachingExp);
            _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_6__["_PerformanceLogger"].trackWebpartExperiment(this.context.webPartTag, _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_6__["_PerformanceExperiment"].WEXTieredCachingLateFlushExp);
            _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_6__["_PerformanceLogger"].trackWebpartExperiment(this.context.webPartTag, _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_6__["_PerformanceExperiment"].WEXTieredCachingCacheAndNetwork);
            // tslint:enable: max-line-length
        }
        this._onComponentMounted = this._onComponentMounted.bind(this);
        // Retrieve the initial property pane settings when the web part instance is new.
        this.setDefaultProperties(this.properties);
        this._layoutInfos = this.layouts;
        // @todo: support dynamic loading of layouts
        // this._loadLayoutsFromUrls(this._options.layoutUrls);
        this._setSelectedLayout();
        // @todo: support dynamic loading of dataProviders
        // this._loadDataProvidersFromUrls(this._options.dataProviderUrls);
        this._setSelectedDataProvider();
        this._getDisplayFieldMaps();
        // perform initial empty render if the layout supports it
        if (this._activeLayoutInfo.hasInitialLoadingState) {
            this.render();
        }
        return new Promise(function (complete, reject) {
            var serviceScope = _this.context.serviceScope;
            serviceScope.whenFinished(function () {
                // Get resources from the service scope.
                _this.pageContext = serviceScope.consume(_microsoft_sp_page_context__WEBPACK_IMPORTED_MODULE_10__["PageContext"].serviceKey);
                if (_this._shouldUseLegacyMySiteWebPartCache()) {
                    _this._mySiteCacheWebPartManager = serviceScope.consume(_mySiteWebPartCache_MySiteWebPartCacheManager__WEBPACK_IMPORTED_MODULE_13__["MySiteWebPartCacheManager"].serviceKey);
                }
                _this._setPageContextVariables();
                _this._async = new _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_9__["Async"](_this);
                // 500 is totally arbitrary from just playing around / suggestions from Stack Overflow
                // [!WEX VSO: 207916] - Investigate reasonable, user-friendly time delay for text field rendering
                var delayInMilliseconds = _this._options.delayBeforeNoResultsMessage === undefined
                    ? 500
                    : _this._options.delayBeforeNoResultsMessage;
                // @todo [!WEX VSO: 323801] - Consider initializing this in the constructor.
                _this.delayedGetDataAndRender = _this._async.debounce(_this.refreshData, delayInMilliseconds);
                var request;
                var prefetchedData = _this.getPrefetchedData(_this._activeDataProviderInfo.id, _this._activeLayoutInfo.id);
                var task;
                var combinedDataPerfEndMark = "prefetchedData" /* combinedCachedDataRequest */;
                var _a = _this.context, instanceId = _a.instanceId, manifest = _a.manifest, webPartTag = _a.webPartTag;
                // prefetch data is a way that the news web part preloads data on the page. It is different from mysite cache.
                if (prefetchedData !== undefined) {
                    task = "bcwpPrefetchedData" /* prefetchedData */;
                    request = new Promise(function (resolve) {
                        _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_6__["_PerformanceLogger"].markComponent(webPartTag, combinedDataPerfEndMark);
                        _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_6__["_PerformanceLogger"].markComponent(webPartTag, 'CacheHit');
                        return resolve(prefetchedData);
                    });
                }
                else if (_this._shouldUseLegacyMySiteWebPartCache()) {
                    task = "bcwpCachedDataRequest" /* cachedDataRequest */;
                    var config = _this.dataCacheConfiguration;
                    var requestConfigBase = {
                        requestData: _this.requestData.bind(_this),
                        dataUpdated: _this.setResponseAndRender.bind(_this),
                        webPartInstanceId: instanceId,
                        webPartAlias: manifest.alias,
                        secondsToInvalidate: undefined
                    };
                    if (!_BaseCollectionFlights__WEBPACK_IMPORTED_MODULE_14__["default"].isMySiteCacheSmartRaceRefactorEnabled()) {
                        var requestConfigDeprecated = requestConfigBase;
                        requestConfigDeprecated.config = config;
                        requestConfigDeprecated.webPartTag = webPartTag;
                        request = _this._mySiteCacheWebPartManager.requestWebPartCacheData_deprecated(requestConfigDeprecated);
                    }
                    else {
                        var tag_1 = "BaseCollection_" + webPartTag;
                        _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_6__["_PerformanceLogger"].markComponent(tag_1, 'LKGRequest');
                        var requestConfig = requestConfigBase;
                        requestConfig.serializedConfiguration = JSON.stringify(config);
                        request = _this._mySiteCacheWebPartManager
                            .requestWebPartCacheData(requestConfig)
                            .then(function (cacheResult) {
                            _this._isResponseFromCache = cacheResult.cacheResponseType === _ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_11__["CacheResponseType"].CachedData;
                            if (_lkgSizeKS.isActivated()) {
                                return cacheResult.cacheResponseAsync || cacheResult.serverResponseAsync;
                            }
                            return (cacheResult.cacheResponseAsync || cacheResult.serverResponseAsync).then(function (data) {
                                // Log cache size with Hit or Miss
                                var logEntry = new _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_4__["_LogEntry"]("MySiteCacheDataMetrics", "CacheDataSize", _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_4__["_LogType"].Event, {
                                    dataSizeInKB: data ? "" + JSON.stringify(data).length / 1024 : '0',
                                    dataProvider: _this._activeDataProviderInfo.id,
                                    isCacheHit: "" + _this._isResponseFromCache,
                                    numberOfItems: data ? "" + data.length : '0'
                                });
                                _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_4__["_EngagementLogger"].logEventWithLogEntry(logEntry);
                                return data;
                            });
                        })
                            .then(function (data) {
                            _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_6__["_PerformanceLogger"].markComponent(tag_1, 'DataReturned');
                            return data;
                        });
                    }
                }
                else {
                    task = "bcwpRacePrefetchedDataAsync" /* racePrefetchedDataAsync */;
                    if (_this._shouldUseLegacyMySiteWebPartCache()) {
                        _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_6__["_PerformanceLogger"].markComponent(webPartTag, 'CacheMiss');
                        _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_6__["_PerformanceLogger"].markComponent(webPartTag, 'LateFlush');
                    }
                    request = Promise.race([
                        _this._getPrefetchedDataAsync(_this._activeDataProviderInfo.id, _this._activeLayoutInfo.id),
                        _this.requestData()
                    ]);
                }
                var logSource = BaseCollectionWebPart._getContextLogSource(_this.context);
                if (task) {
                    _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_4__["_TraceLogger"].logVerbose(logSource, task + ".start");
                }
                request
                    .then(function (response) {
                    if (_this._shouldUseLegacyMySiteWebPartCache() &&
                        _this._mySiteCacheWebPartManager.getCacheItemVersion(_this.context.instanceId) ===
                            TIERED_CACHE_VERSION) {
                        response = _this.postProcessTieredCachedData(response);
                    }
                    _this._response = response;
                    if (task) {
                        _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_4__["_TraceLogger"].logVerbose(logSource, task + ".end");
                    }
                    if (!_this.renderedOnce) {
                        qosMonitorMount.writeSuccess();
                    }
                    complete();
                })
                    .catch(function (error) {
                    _this._handleRequestDataError(error);
                    if (task) {
                        _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_4__["_TraceLogger"].logError(logSource, error, task + ".end");
                    }
                    qosMonitorMount.writeUnexpectedFailure('FailedInitialDataRequest', error);
                    complete();
                });
            });
        }).then(function () { return _this._getEmphasisTheme(); });
    };
    /**
     * Override to process the tiered cached data
     *
     * @param tieredCacheData The raw data coming back from Tiered Caching model
     */
    BaseCollectionWebPart.prototype.postProcessTieredCachedData = function (tieredCacheData) {
        return tieredCacheData;
    };
    /**
     * Call this to set the active layout by id.
     *
     * @param layoutId - Indicates which layout is selected for rendering.
     */
    BaseCollectionWebPart.prototype.setLayoutById = function (layoutId) {
        this.properties.layoutId = layoutId;
        this._setSelectedLayout();
    };
    /**
     * Call this to set the active layout by key.
     *
     * @param key - Indicates which layout is selected for rendering.
     */
    BaseCollectionWebPart.prototype.setLayoutByKey = function (key) {
        for (var _i = 0, _a = this._layoutInfos; _i < _a.length; _i++) {
            var layout = _a[_i];
            if (layout.option && layout.option.key === key) {
                this.setLayoutById(layout.id);
                break;
            }
        }
    };
    /**
     * Override to get Prefetched Data immediately if available
     */
    BaseCollectionWebPart.prototype.getPrefetchedData = function (dataProviderId, layoutId) {
        return undefined;
    };
    /**
     * Override to allow prefetched data to be loaded when available
     */
    BaseCollectionWebPart.prototype.getPrefetchedDataAsync = function (dataProviderId, layoutId) {
        return new Promise(function (resolve, reject) {
            /* EMPTY BLOCK*/
        });
    };
    Object.defineProperty(BaseCollectionWebPart.prototype, "dataProvider", {
        /**
         * Returns the active data provider.  The intent is to allow your web part to invoke
         * additional data provider methods in order to support CRUD operations.
         */
        // tslint:disable:no-any
        get: function () {
            var _this = this;
            var promise = new Promise(function (complete, reject) {
                if (_this._activeDataProviderInfo.dataProvider) {
                    // Avoid re-allocating the data provider.
                    complete(_this._activeDataProviderInfo.dataProvider);
                }
                else {
                    // Load the data provider if it has not been loaded or the selected data provider has changed.
                    _this._activeDataProviderInfo
                        .loadDataProvider(_this._activeDataProviderInfo.options || {
                        serviceScope: _this.context.serviceScope,
                        qosPrefix: _this._options.qosPrefix
                    })
                        .then(function (dataProvider) {
                        // store the instance so it does not have to be re-allocated
                        _this._activeDataProviderInfo.dataProvider = dataProvider;
                        complete(dataProvider);
                    }, function (error) {
                        reject(error);
                    });
                }
            });
            return promise;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseCollectionWebPart.prototype, "usingEmptyStateRows", {
        // tslint:enable:no-any
        /**
         * Returns true if the web part is being populated with empty state rows.
         */
        get: function () {
            return this._usingEmptyStateRows;
        },
        enumerable: true,
        configurable: true
    });
    BaseCollectionWebPart.prototype.onAfterPropertiesUpdatedExternally = function (oldProperties) {
        var _this = this;
        var oldTitle = oldProperties.title, oldLayoutId = oldProperties.layoutId, oldHideWebPartWhenEmpty = oldProperties.hideWebPartWhenEmpty, oldAddToPageScreenReaderLabel = oldProperties.addToPageScreenReaderLabel, otherOldProperties = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(oldProperties, ["title", "layoutId", "hideWebPartWhenEmpty", "addToPageScreenReaderLabel"]);
        var _a = this.properties, newTitle = _a.title, newLayoutId = _a.layoutId, newHideWebPartWhenEmpty = _a.hideWebPartWhenEmpty, newAddToPageScreenReaderLabel = _a.addToPageScreenReaderLabel, otherNewProperties = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(_a, ["title", "layoutId", "hideWebPartWhenEmpty", "addToPageScreenReaderLabel"]);
        var shouldRender = _microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_3__["isEqual"](otherOldProperties, otherNewProperties) &&
            (oldTitle !== newTitle ||
                oldLayoutId !== newLayoutId ||
                oldHideWebPartWhenEmpty !== newHideWebPartWhenEmpty ||
                oldAddToPageScreenReaderLabel !== newAddToPageScreenReaderLabel);
        if (shouldRender) {
            this.render();
        }
        else {
            if (oldProperties.dataProviderId !== this.properties.dataProviderId) {
                // Switch data provider if it is changed.
                this.setDataProviderById(this.properties.dataProviderId);
            }
            if (!_microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_3__["isEqual"](otherOldProperties, otherNewProperties)) {
                var qos_1 = new _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_6__["_QosMonitor"]('BaseCollectionWebPart.onAfterPropertiesUpdatedExternally');
                // For any properties other than title and layoutId are changed, re-fetch data and re-render.
                // The promise never throws, so adding void to suppress no-floating-promises rule
                void this.refreshData().then(function (result) {
                    var extraData = { alias: "" + _this.context.manifest.alias };
                    if (result) {
                        qos_1.writeSuccess(extraData);
                    }
                    else {
                        qos_1.writeUnexpectedFailure('Failed to refreshData', undefined, extraData);
                    }
                });
            }
        }
    };
    /**
     * Call this to set the active data provider by id.
     *
     * @param dataProviderId - Indicates the selected data provider.
     */
    BaseCollectionWebPart.prototype.setDataProviderById = function (dataProviderId) {
        this.properties.dataProviderId = dataProviderId;
        this._setSelectedDataProvider();
    };
    /**
     * Call this to set the active data provider by key.
     *
     * @param key - Indicates the selected data provider.
     */
    BaseCollectionWebPart.prototype.setDataProviderByKey = function (key) {
        for (var _i = 0, _a = this.dataProviders; _i < _a.length; _i++) {
            var dataProvider = _a[_i];
            if (dataProvider.option && dataProvider.option.key === key) {
                this.setDataProviderById(dataProvider.id);
                break;
            }
        }
    };
    /**
     * Override to return the display field map appropriate for the active layout and data provider.
     *
     * @param layoutId - Indicates the active layout.
     * @param dataProviderId - Indicates the active data provider.
     *
     * @returns A display field map.
     */
    BaseCollectionWebPart.prototype.getDisplayFieldMap = function (layoutId, dataProviderId) {
        // With no mapping the data will be sent to the layout as received from the data provider.
        return undefined;
    };
    Object.defineProperty(BaseCollectionWebPart.prototype, "propertyPaneLayoutOptions", {
        /*
         * The derived WebPart should implement getPropertyPaneConfiguration(): IPropertyPaneConfiguration
         * per the requirements of the BaseClientSideWebPart.
         */
        /**
         * Returns configuration panel for the layout selections.  This should be leveraged in the WebPart's
         * getPropertyPaneConfiguration implementation.
         *
         * @returns An array of layout options derived from the WebPart's layouts.
         */
        get: function () {
            var iconSidePixels = 32;
            return this._layoutInfos.map(function (layoutInfo) {
                var option = layoutInfo.option;
                return {
                    ariaLabel: option.ariaLabel,
                    imageSize: { width: iconSidePixels, height: iconSidePixels },
                    imageSrc: option.imageSrc,
                    key: option.key,
                    text: option.title,
                    themableSvg: option.themableSvg,
                    iconProps: option.iconProps
                };
            });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseCollectionWebPart.prototype, "dataCacheConfiguration", {
        /**
         * Override if options.deprecated_canCacheResults=true to use minimal set of configuration
         * properties. If it has changed since the last time cached, webpart will act as if the cache
         * was missing/expired.
         *
         * @remarks Do NOT include layout specific or other non-data provider options
         * to minimize unneccessary cache misses (if layout or other property that does
         * not impact the data cached is updated).
         */
        get: function () {
            return {};
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Call refreshData() from your WebPart to invoke a new request for data.
     *
     * @param request  - Optional input for the data provider. If not provided, the getRequest method will be invoked to
     * obtain the input for the data provider.
     * @param refreshType - Defaults to REFRESH_TYPE.REPLACE which replaces the current data with the results from the
     * new request.  Set to REFRESH_TYPE.APPEND in order to append the new data to the end of existing results.
     * @param shouldRender - Defaults to true, in which case the WebPart redraws.  Set to false to prevent a redraw so
     * that the WebPart can call the render() method on its own timing.
     *
     * @returns A promise with an IDataRow[] which is the resulting data available to the WebPart.
     */
    // @todo: VSO #474457 - Add RefreshType.Update which merges additional fields into the records already loaded.
    BaseCollectionWebPart.prototype.refreshData = function (request, // tslint:disable-line:no-any
    refreshType, shouldRender) {
        var _this = this;
        if (refreshType === void 0) { refreshType = RefreshType.Replace; }
        if (shouldRender === void 0) { shouldRender = true; }
        return this.requestData(request)
            .then(function (response) {
            var result;
            switch (refreshType) {
                case RefreshType.Append:
                    result = _this._response = _this._response.concat(response);
                    break;
                case RefreshType.Compare:
                    result = response;
                    break;
                case RefreshType.Replace:
                default:
                    result = _this._response = response;
                    break;
            }
            if (shouldRender) {
                _this.render(); // Note this is not throwable so we don't need to handle render layout error here.
            }
            return Promise.resolve(result);
        })
            .catch(function (error) {
            _this._handleRequestDataError(error);
            return Promise.resolve(undefined);
        });
    };
    /**
     * Override this function to perform any adjustments to a data row before it is rendered.
     * The default implementation does not alter the data.
     *
     * @param layoutId - Indicates the active layout.
     * @param dataProviderId - Indicates the active data provider.
     * @param row - A row of data as received from the data source.
     *
     * @returns A row of data after it has been transposed from the original form to the desired format.
     */
    // tslint:disable-next-line:no-any
    BaseCollectionWebPart.prototype.transposeRow = function (layoutId, dataProviderId, row) {
        return row;
    };
    /**
     * Override this function to perform any adjustments to the set data rows before they are rendered.
     * The default implementation does not alter the data.
     * This gets executed after transposeRow
     *
     * @param layoutId - Indicates the active layout.
     * @param dataProviderId - Indicates the active data provider.
     * @param items - The rows of data as received from the data source.
     *
     * @returns The rows of data after they have been transposed from the original form to the desired format.
     */
    // tslint:disable-next-line:no-any
    BaseCollectionWebPart.prototype.transposeItems = function (layoutId, dataProviderId, items) {
        return items;
    };
    /**
     * Performs the display field map transpose of your data provider results and renders the WebPart with the
     * provided layout.
     */
    BaseCollectionWebPart.prototype.render = function () {
        var _this = this;
        var qosMonitor = new _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_6__["_QosMonitor"](this._options.qosPrefix + "Render");
        var extraData = {
            alias: this._options.qosPrefix
        };
        if (!this._activeLayoutInfo) {
            var error = new Error(_loc_Strings_resx__WEBPACK_IMPORTED_MODULE_16__["ErrorNoLayout"]);
            this._handleRenderLayoutError(error);
            qosMonitor.writeUnexpectedFailure('FailedNoLayout', error, extraData);
            this.renderCompleted();
            return;
        }
        extraData.layout = this._activeLayoutInfo.id;
        // Allow the WebPart to run its own code prior to the render.
        this.onPreRender(this._activeLayoutInfo.id, this._activeDataProviderInfo.id, this._response)
            .then(function (renderOptions) {
            // update configuration per any changes returned in the onPreRender method.
            if (renderOptions) {
                for (var name_1 in renderOptions) {
                    if (renderOptions.hasOwnProperty(name_1)) {
                        _this._options[name_1] = renderOptions[name_1];
                    }
                }
            }
            var webPartTag = _this.context.webPartTag;
            _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_6__["_PerformanceLogger"].markComponent(webPartTag, "" + _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_6__["_PerformanceDataDimensions"].Layout + _this.activeLayoutInfo.id);
            // forward properties to the layout
            var viewProps = _microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_3__["extend"](_this._options, _this.properties, _this._activeLayoutInfo && _this._activeLayoutInfo.properties);
            viewProps.webPartTag = webPartTag;
            viewProps.emphasisTheme = _this._emphasisTheme;
            if (!viewProps.emphasisTheme) {
                viewProps.emphasisTheme = Object(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_9__["getTheme"])();
            }
            if (_BaseCollectionFlights__WEBPACK_IMPORTED_MODULE_14__["default"].isMySiteCacheSmartRaceRefactorEnabled()) {
                viewProps.isRenderedFromCacheData = _this._isResponseFromCache;
            }
            viewProps.isInTeamsContext = !!_this.context.microsoftTeams;
            viewProps.hasInitialLoadingState = _this._activeLayoutInfo.hasInitialLoadingState;
            viewProps.displayMode = _this.displayMode;
            viewProps.errorCallback = _this._handleRenderLayoutError.bind(_this);
            viewProps.renderedOnce = _this.renderedOnce;
            viewProps.defaultTitle = _this.defaultTitle;
            viewProps.layoutInfo = _this._activeLayoutInfo;
            viewProps.width = _this.width;
            // Allows the view to use SPFx events on behalf of the web part
            viewProps.registerEvent = function (name, cb) { return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_7__["_SPEventManager"].instance.registerEvent(name, _this, cb); };
            viewProps.unregisterEvent = function (name, cb) { return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_7__["_SPEventManager"].instance.unregisterEvent(name, _this, cb); };
            if (_this._activeLayoutInfo.displayFieldMaps) {
                viewProps.displayFieldMap = _this._activeLayoutInfo.displayFieldMaps[_this._activeDataProviderInfo.id];
            }
            viewProps.items = undefined;
            viewProps.onComponentMounted = _this._onComponentMounted;
            viewProps.onTitleChange = function (newTitle) { return (_this.properties.title = newTitle); };
            // Check if our layout has display field maps and we have a data provider.
            if (_this._activeLayoutInfo.displayFieldMaps && _this._activeDataProviderInfo) {
                var map = _this._activeLayoutInfo.displayFieldMaps[_this._activeDataProviderInfo.id];
                // If we have a map then apply it to the data provider response to generate our items.
                if (map) {
                    // Some layouts (such as list) need access to the display field map to determine which elements
                    // (e.g., columns) to display.
                    viewProps.displayFieldMap = map;
                    if (_this._response) {
                        viewProps.items = map.transpose(_this._response, function (row) {
                            return _this.transposeRow(_this._activeLayoutInfo.id, _this._activeDataProviderInfo.id, row);
                        });
                    }
                    else {
                        viewProps.items = [];
                    }
                }
            }
            // By default with no map and no provided transpose function, the items become the response.
            if (!viewProps.items) {
                if (_this._response) {
                    // Provide an opportunity for a transpose the data even if a map was not used.
                    viewProps.items = _this._response.map(
                    // tslint:disable-next-line:no-any
                    function (row) {
                        return _this.transposeRow(_this._activeLayoutInfo.id, _this._activeDataProviderInfo.id, row);
                    });
                }
                else {
                    viewProps.items = [];
                }
            }
            viewProps.items = _this.transposeItems(_this._activeLayoutInfo.id, _this._activeDataProviderInfo.id, viewProps.items);
            try {
                // any is required to avoid having to expose IBaseCollectionWebPartOptions to IBaseCollectionWebPartProperties
                var element = react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_BaseCollection__WEBPACK_IMPORTED_MODULE_12__["default"], // tslint:disable-line:no-any
                viewProps); // tslint:disable-line:no-any
                _this._component = react_dom__WEBPACK_IMPORTED_MODULE_2__["render"](element, _this.domElement);
                if (!_this.renderedOnce && _this._component && !_this.renderedFromPersistedData) {
                    _this._component.focusOnTitle();
                }
                // Allow the WebPart to run its own code after the render.
                _this.onPostRender(_this._activeLayoutInfo.id, _this._activeDataProviderInfo.id, _this._response)
                    .then(function () {
                    qosMonitor.writeSuccess(extraData);
                })
                    .catch(function (error) {
                    qosMonitor.writeUnexpectedFailure('FailedPostRender', error, extraData);
                });
            }
            catch (error) {
                extraData.stack = error.stack;
                qosMonitor.writeUnexpectedFailure('FailedRender', error, extraData);
            }
            if (!_BaseCollectionKillSwitches__WEBPACK_IMPORTED_MODULE_15__["default"].exclusiveRenderTimeForBaseCollectionWebPart.isActivated()) {
                _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_6__["_PerformanceLogger"].saveTempData(webPartTag + ".postRenderComplete", _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_6__["_PerformanceLogger"].now());
            }
        })
            .catch(function (error) {
            _this._handleRenderLayoutError(error);
            qosMonitor.writeUnexpectedFailure('FailedPreRender', error, extraData);
            _this.renderCompleted();
            return;
        });
    };
    /**
     * Override this function to receive notification when render is about to start. Use this method to interrogate
     * the response and adjust the WebPart state if necessary prior to rendering. An example use would be to change
     * the current layout based upon data found (or not found) in the data response.
     *
     * Use the return value to update BaseCollectionWebPart configuration prior to rendering. Any configuration values
     * provided are appended to the current BaseCollectionWebPart configuration. Use this to set configuration dynamically
     * for the feature options in IBaseCollectionWebPartLayoutState which include whether to render a title, +Add
     * button, See all link, pagination control or message view.
     *
     * @param layoutId - Indicates the active layout.
     * @param dataProviderId - Indicates the active data provider.
     * @param response - The data rows as received from the data source.
     *
     * @returns A promise is returned that may result in success or error. A success result can include a hash object of
     * type IBaseCollectionWebPartLayoutState, with values to be appended to the current set of options.
     */
    BaseCollectionWebPart.prototype.onPreRender = function (layoutId, dataProviderId, response) {
        return Promise.resolve(undefined); // return success with no configuration changes
    };
    /*
     * Override this function to receive notification when render has completed.  The intent is to provide a facility
     * for implementing followup data requests and updates to the rendered display.  The current layoutId and
     * dataProviderId are passed in case the WebPart supports alternative layouts/data providers and follow up steps
     * after using one might be different than after using another.
     *
     * @param layoutId - Indicates the active layout.
     * @param dataProviderId - Indicates the active data provider.
     * @param response - The data rows as received from the data source.
     *
     * @returns A promise is returned that may result in success or error.
     */
    BaseCollectionWebPart.prototype.onPostRender = function (layoutId, dataProviderId, response) {
        return Promise.resolve(undefined); // return success
        // use Promise.reject(error) if an error is to be returned.
    };
    /**
     * Serialize edits to the WebPart title per the BaseClientSideWebPart's onBeforeSerialize function.  If you override
     * then call super.onBeforeSerialize() in order to allow BaseCollectionWebPart to serialize the WebPart title.
     */
    BaseCollectionWebPart.prototype.onBeforeSerialize = function () {
        if (this.properties.title) {
            // remove surrounding white space
            this.properties.title = this.properties.title.trim();
        }
    };
    /**
     * Unmount the React DOM tree when web part is disposed.
     */
    BaseCollectionWebPart.prototype.onDispose = function () {
        react_dom__WEBPACK_IMPORTED_MODULE_2__["unmountComponentAtNode"](this.domElement);
        var themeProvider = this.context.serviceScope.consume(_microsoft_sp_component_base__WEBPACK_IMPORTED_MODULE_5__["ThemeProvider"].serviceKey);
        themeProvider.themeChangedEvent.remove(this, this._handleThemeChangedEvent);
        _super.prototype.onDispose.call(this);
    };
    Object.defineProperty(BaseCollectionWebPart.prototype, "propertiesMetadata", {
        /**
         * Return the WebPart properties metadata per the BaseClientSideWebPart's propertiesMetadata function.  If you
         * override then call super.propertiesMetadata() to get the initial set of properties before adding your own.
         *
         * @returns The WebPart properties metadata.
         */
        get: function () {
            // Ideally when child classes call super.propertiesMetadata, it should be merged.
            // However It's an issue in Typescript that can call getter/setter logic when sub-classing.
            // https://github.com/Microsoft/TypeScript/issues/338
            // So if you are overriding this getter, ensure these lines are copies as well.
            return {
                title: { isSearchablePlainText: true },
                baseUrl: { isLink: true },
                layoutComponentId: { isComponentDependency: true }
            };
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Called when the property pane is closed. Invokes a data request and then renders the result.
     */
    BaseCollectionWebPart.prototype.onDiscard = function () {
        var _this = this;
        this.refreshData().catch(function (error) {
            return _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_4__["_TraceLogger"].logError(BaseCollectionWebPart._getContextLogSource(_this.context), error, 'RefreshData');
        });
    };
    /**
     * Override to set property default values where no values are present.
     * The default implementation does nothing.
     *
     * @param properties - The WebPart properties object for modification.
     */
    BaseCollectionWebPart.prototype.setDefaultProperties = function (properties) {
        // Override to initialize the WebPart properties object with default values where none have been provided.
        return;
    };
    Object.defineProperty(BaseCollectionWebPart.prototype, "defaultTitle", {
        /**
         * Override to provide your WebPart with a default generated title. The user may type over the generated title
         * to specifically title the instance of the WebPart.  The default implementation returns placeholder
         * text for the title.
         *
         * @returns The title as a string.
         */
        get: function () {
            return _loc_Strings_resx__WEBPACK_IMPORTED_MODULE_16__["TitlePlaceholder"];
        },
        enumerable: true,
        configurable: true
    });
    /**
     * The set of data items to return in place of empty results from data provider.
     * @param layoutId - Indicates the active layout.
     * @param dataProviderId - Indicates the active data provider.
     * @param response - The data rows as received from the data source.
     *
     * @returns Set of data to be displayed instead of empty set.
     *
     * @example Override to specify data fo user to understand the layout of webpart instead of plain "no results"
     * experience.
     */
    BaseCollectionWebPart.prototype.getEmptyStateRows = function (layoutId, dataProviderId) {
        return undefined;
    };
    /**
     *
     * @param response - The new data rows. This will overwrite the current response.
     */
    BaseCollectionWebPart.prototype.setResponse = function (response) {
        this._response = response;
    };
    /**
     *
     * @param response - The data rows to be rendered. This will overwrite the current response.
     */
    BaseCollectionWebPart.prototype.setResponseAndRender = function (response) {
        if (_BaseCollectionFlights__WEBPACK_IMPORTED_MODULE_14__["default"].isMySiteCacheSmartRaceRefactorEnabled()) {
            this._isResponseFromCache = false;
        }
        this._response = response;
        this.render();
    };
    // @todo: We can make a type alias on "any" and use it in this file. That would allow readers to understand the
    // @todo: 685640 - Refactor promise chains in BaseCollectionWebPart requestData metod
    // typing and avoid multiple use of tslint-disable.
    // tslint:disable-next-line:no-any
    BaseCollectionWebPart.prototype.requestData = function (request) {
        var _this = this;
        var webPartTag = this.context.webPartTag;
        var logSource = BaseCollectionWebPart._getContextLogSource(this.context);
        if (!this._disableDataRequest) {
            _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_4__["_TraceLogger"].logVerbose(logSource, "bcwpRequestData" /* requestData */ + ".start");
        }
        return new Promise(function (complete, reject) {
            if (_this._disableDataRequest) {
                _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_4__["_TraceLogger"].logVerbose(logSource, "bcwpRequestData" /* requestData */ + ".end");
                complete([]);
                return;
            }
            if (_this._activeDataProviderInfo) {
                var qosMonitor_1 = new _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_6__["_QosMonitor"](_this._options.qosPrefix + "RequestData");
                _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_4__["_TraceLogger"].logVerbose(logSource, "bcwpDataProvider" /* dataProvider */ + ".start");
                _this.dataProvider.then(function (dataProvider) {
                    // Default to the optionally provided request via the refreshData or requestMoreData methods,
                    // otherwise invoke the WebPart's getRequest method.
                    _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_6__["_PerformanceLogger"].markComponent(webPartTag, "" + _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_6__["_PerformanceDataDimensions"].DataProvider + dataProvider.id);
                    _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_4__["_TraceLogger"].logVerbose(logSource, "bcwpDataProvider" /* dataProvider */ + ".end");
                    request =
                        request || _this.getRequest(_this._activeDataProviderInfo.id, _this._activeLayoutInfo.id);
                    dataProvider.requestData(request).then(function (response) {
                        _this._usingEmptyStateRows = false;
                        if (!response || response.length === 0) {
                            _this._usingEmptyStateRows = true;
                            var empty = _this.getEmptyStateRows(_this._activeLayoutInfo.id, dataProvider.id);
                            if (empty) {
                                response = empty;
                            }
                        }
                        complete(response);
                        _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_4__["_TraceLogger"].logVerbose(logSource, "bcwpRequestData" /* requestData */ + ".end");
                        qosMonitor_1.writeSuccess();
                    }, function (error) {
                        _this.context.statusRenderer.clearLoadingIndicator(_this.domElement);
                        _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_4__["_TraceLogger"].logVerbose(logSource, "bcwpRequestData" /* requestData */ + ".end");
                        qosMonitor_1.writeUnexpectedFailure('FailedDataRequest', error);
                        if (BaseCollectionWebPart._isOAuthUtilityError(error) && _this.canHandleOAuthError(error)) {
                            _this.render();
                            complete(undefined);
                        }
                        else {
                            reject(error);
                        }
                    });
                }, function (error) {
                    _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_6__["_PerformanceLogger"].markComponent(webPartTag, "bcwpDataProvider" /* dataProvider */ + ".end");
                    qosMonitor_1.writeUnexpectedFailure('FailedToLoadDataProvider', error);
                    reject(error);
                });
            }
            else {
                _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_4__["_TraceLogger"].logVerbose(logSource, "bcwpRequestData" /* requestData */ + ".end");
                // The derived WebPart class has not provided a data provider.
                reject(new Error(_loc_Strings_resx__WEBPACK_IMPORTED_MODULE_16__["ErrorNoDataProvider"]));
            }
        });
    };
    BaseCollectionWebPart.prototype.disableDataRequest = function () {
        this._disableDataRequest = true;
    };
    BaseCollectionWebPart.prototype.enableDataRequest = function () {
        this._disableDataRequest = false;
    };
    // Override to receive notification of an OAuth error. Return true if handled so that the default
    // error render is not performed. This is intended to be used to render the OAuthErrorRenderer component
    // to direct the user to login.
    BaseCollectionWebPart.prototype.canHandleOAuthError = function (error) {
        return false;
    };
    // Override in webpart to receive notification of an error and handle differently
    BaseCollectionWebPart.prototype.canHandleWebpartError = function (error) {
        return false;
    };
    // Override to add BaseCollectionWebpart selected layout engagement log when configuration completes on PropertyPane
    BaseCollectionWebPart.prototype.onPropertyPaneConfigurationComplete = function () {
        _super.prototype.onPropertyPaneConfigurationComplete.call(this);
        if (this.properties.layoutId) {
            this._addBCWPSelectedLayoutEngagementLog(this.properties.layoutId);
        }
    };
    BaseCollectionWebPart.prototype._handleRenderLayoutError = function (error) {
        if (!this.canHandleWebpartError(error)) {
            // We won't call subclass' renderError since subclass may call this.render() again and cause infinite loop.
            _super.prototype.renderError.call(this, error);
        }
    };
    BaseCollectionWebPart.prototype._handleRequestDataError = function (error) {
        if (BaseCollectionWebPart._isOAuthUtilityError(error) && this.canHandleOAuthError(error)) {
            // Allow the web part to render a login message and link
            this.render();
        }
        else {
            this.renderError(error);
        }
    };
    BaseCollectionWebPart.prototype._setPageContextVariables = function () {
        if (this._options.requirePageContextVariables) {
            // validate expected page context values are present
            if (!this.pageContext) {
                throw new Error(_loc_Strings_resx__WEBPACK_IMPORTED_MODULE_16__["ErrorMissingPageContext"]);
            }
            if (!this.pageContext.web) {
                throw new Error(_loc_Strings_resx__WEBPACK_IMPORTED_MODULE_16__["ErrorMissingWeb"]);
            }
            // for test pages that aren't localhost and all other hostTypes
            if (this.pageContext.web.absoluteUrl) {
                // if test page
                if ( true && _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_7__["Environment"].type === _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_7__["EnvironmentType"].Local) {
                    if (this.pageContext.web.absoluteUrl.indexOf('https://microsoft.sharepoint.com') === 0) {
                        // MSIT
                        this.properties.webId = 'c7ecb072-9d0b-4b2c-9f6e-75337cb6c06a';
                        // @todo: set test siteId for MSIT
                    }
                    else {
                        // eDog
                        this.properties.webId = 'a50ff2b3-f789-4251-aad1-5909f23aed4f';
                        // @todo: set test siteId for eDog
                    }
                    // not test pages and not localhost
                }
                else {
                    if (!this.pageContext.web.id) {
                        throw new Error(_loc_Strings_resx__WEBPACK_IMPORTED_MODULE_16__["ErrorMissingWebId"]);
                    }
                    this.properties.webId = this.pageContext.web.id.toString();
                    if (!this.pageContext.site) {
                        throw new Error(_loc_Strings_resx__WEBPACK_IMPORTED_MODULE_16__["ErrorMissingSite"]);
                    }
                    if (!this.pageContext.site.id) {
                        throw new Error(_loc_Strings_resx__WEBPACK_IMPORTED_MODULE_16__["ErrorMissingSiteId"]);
                    }
                    this.properties.siteId = this.pageContext.site.id.toString();
                }
                this.properties.baseUrl = this.pageContext.web.absoluteUrl;
            }
            else {
                // localhost, mimic eDog
                this.properties.webId = 'a50ff2b3-f789-4251-aad1-5909f23aed4f';
                // @todo: set test siteId for eDog
                this.properties.baseUrl = 'https://msft.spoppe.com/sites/wex';
            }
        }
    };
    BaseCollectionWebPart.prototype._setSelectedLayout = function () {
        // Default to the first layout if none are selected.
        if (!this.properties.layoutId && this._layoutInfos.length > 0) {
            this.properties.layoutId = this._layoutInfos[0].id;
            this.properties.layoutComponentId = this._layoutInfos[0].componentId;
        }
        var layoutId = this.properties.layoutId;
        if (layoutId) {
            for (var _i = 0, _a = this._layoutInfos; _i < _a.length; _i++) {
                var layoutInfo = _a[_i];
                if (layoutInfo.id === layoutId) {
                    this._activeLayoutInfo = layoutInfo;
                    this.properties.layoutComponentId = this._activeLayoutInfo.componentId;
                    break;
                }
            }
        }
    };
    BaseCollectionWebPart.prototype._addBCWPSelectedLayoutEngagementLog = function (layoutId) {
        if (!this._isSelectedLayoutLogged) {
            var logData = {
                component: 'BaseWPSelectedLayout',
                extraData: {
                    layoutId: layoutId
                },
                feature: 'WebPart',
                name: this.context.manifest.alias + ".BCWPSelectedLayout"
            };
            _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_4__["_EngagementLogger"].log(logData);
            this._isSelectedLayoutLogged = true;
        }
    };
    BaseCollectionWebPart.prototype._setSelectedDataProvider = function () {
        // Default to the first data provider if none are selected.
        if (!this.properties.dataProviderId && this.dataProviders.length > 0) {
            this.properties.dataProviderId = this.dataProviders[0].id;
            this.properties.dataProviderComponentId = this.dataProviders[0].componentId;
        }
        if (this.properties.dataProviderId) {
            for (var _i = 0, _a = this.dataProviders; _i < _a.length; _i++) {
                var dataProviderInfo = _a[_i];
                if (dataProviderInfo && dataProviderInfo.id === this.properties.dataProviderId) {
                    this._activeDataProviderInfo = dataProviderInfo;
                    break;
                }
            }
        }
    };
    BaseCollectionWebPart.prototype._getDisplayFieldMaps = function () {
        var _this = this;
        this._layoutInfos.map(function (layout) {
            if (!layout.displayFieldMaps) {
                layout.displayFieldMaps = {};
            }
            _this.dataProviders.map(function (dataProvider) {
                if (dataProvider) {
                    layout.displayFieldMaps[dataProvider.id] = _this.getDisplayFieldMap(layout.id, dataProvider.id);
                }
            });
        });
    };
    BaseCollectionWebPart.prototype._getEmphasisTheme = function () {
        var themeProvider = this.context.serviceScope.consume(_microsoft_sp_component_base__WEBPACK_IMPORTED_MODULE_5__["ThemeProvider"].serviceKey);
        this._emphasisTheme = themeProvider.tryGetTheme();
        themeProvider.themeChangedEvent.add(this, this._handleThemeChangedEvent);
    };
    BaseCollectionWebPart.prototype._onComponentMounted = function () {
        if (!this.options.isRenderAsync) {
            this.renderCompleted();
        }
    };
    BaseCollectionWebPart.prototype._getPrefetchedDataAsync = function (dataProviderId, layoutId) {
        var _this = this;
        var tag = "bcwpGetPrefetchedDataAsync" /* getPrefetchedDataAsync */;
        var logSource = BaseCollectionWebPart._getContextLogSource(this.context);
        _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_4__["_TraceLogger"].logVerbose(logSource, tag + ".start");
        return this.getPrefetchedDataAsync(dataProviderId, layoutId)
            .then(function (value) {
            _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_4__["_TraceLogger"].logVerbose(logSource, tag + ".end");
            _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_6__["_PerformanceLogger"].markComponent(_this.context.webPartTag, "prefetchedData" /* combinedCachedDataRequest */);
            return Promise.resolve(value);
        })
            .catch(function (error) {
            _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_4__["_TraceLogger"].logVerbose(logSource, tag + ".end");
            return Promise.reject(error);
        });
    };
    BaseCollectionWebPart.prototype._shouldUseLegacyMySiteWebPartCache = function () {
        return (this._options.deprecated_canCacheResults &&
            !(this._options.temporary_isTieredCacheImplementedInDataProvider &&
                _BaseCollectionFlights__WEBPACK_IMPORTED_MODULE_14__["default"].isTieredCachingEnabled()));
    };
    return BaseCollectionWebPart;
}(_microsoft_sp_webpart_base__WEBPACK_IMPORTED_MODULE_8__["BaseClientSideWebPart"]));



/***/ }),

/***/ "6aUX":
/*!**************************************************************!*\
  !*** ./lib/dataProviderPrototype/MysiteCacheDataProvider.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _BaseDataProvider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BaseDataProvider */ "1hxI");
/* harmony import */ var _mySiteWebPartCache_MySiteWebPartCacheManager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../mySiteWebPartCache/MySiteWebPartCacheManager */ "sRXn");




/**
 * This is a prototype at the current point. The goal is to build some base code that will
 * help our customers follow the performance best practices to build web parts.
 *
 * @alpha
 */
var MysiteCacheDataProvider = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(MysiteCacheDataProvider, _super);
    function MysiteCacheDataProvider(configuration) {
        var _this = _super.call(this, configuration) || this;
        _this._cacheManager = configuration.serviceScope.consume(_mySiteWebPartCache_MySiteWebPartCacheManager__WEBPACK_IMPORTED_MODULE_3__["MySiteWebPartCacheManager"].serviceKey);
        return _this;
    }
    // Format of data changes per the request so return is an "any".
    MysiteCacheDataProvider.prototype.requestData = function (request) {
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["Validate"].isNotNullOrUndefined(request, 'request');
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["Validate"].isNotNullOrUndefined(request.fetchData, 'request.fetchData');
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["Validate"].isNotNullOrUndefined(request.dataReceived, 'request.dataReceived');
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["Validate"].isNonemptyString(request.cacheKey, 'request.cacheKey');
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["Validate"].isNonemptyString(request.alias, 'request.alias');
        /* tslint:disable:no-any */
        return this._cacheManager.requestWebPartCacheData_deprecated({
            requestData: request.fetchData,
            dataUpdated: request.dataReceived,
            config: request.cacheParameters,
            webPartInstanceId: request.cacheKey,
            webPartAlias: request.alias,
            webPartTag: request.alias
        });
        /* tslint:enable:no-any */
    };
    return MysiteCacheDataProvider;
}(_BaseDataProvider__WEBPACK_IMPORTED_MODULE_2__["BaseDataProvider"]));
/* harmony default export */ __webpack_exports__["default"] = (MysiteCacheDataProvider);


/***/ }),

/***/ "6fI1":
/*!********************************************!*\
  !*** ./lib/dateBox/DateBox.module.scss.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* tslint:disable */
__webpack_require__(/*! ./DateBox.module.css */ "vstr");
var styles = {
    box: 'j_c_658c9e0a',
    boxIsSmall: 'k_c_658c9e0a',
    boxIsMedium: 'l_c_658c9e0a',
    boxIsLarge: 'm_c_658c9e0a',
    boxIsSingleDay: 'n_c_658c9e0a',
    boxIsMultipleDays: 'o_c_658c9e0a',
    month: 'p_c_658c9e0a',
    fluent: 'q_c_658c9e0a',
    day: 'r_c_658c9e0a',
    date: 's_c_658c9e0a',
    separator: 't_c_658c9e0a'
};
/* harmony default export */ __webpack_exports__["default"] = (styles);
/* tslint:enable */ 


/***/ }),

/***/ "70g6":
/*!**********************************************************!*\
  !*** ./lib/captionElement/CaptionElement.module.scss.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* tslint:disable */
__webpack_require__(/*! ./CaptionElement.module.css */ "liUP");
var styles = {
    captionElement__caption: 'u_e_658c9e0a',
    captionElement__title: 'v_e_658c9e0a',
    fluent: 'q_e_658c9e0a',
    captionElement__leftAlign: 'w_e_658c9e0a',
    captionElement__centerAlign: 'x_e_658c9e0a',
    captionElement__rightAlign: 'y_e_658c9e0a',
    captionElement__LargeMargin: 'z_e_658c9e0a',
    captionElement__MiddleMargin: 'aa_e_658c9e0a',
    captionElement__NoMargin: 'ab_e_658c9e0a',
    titleBreakInLines: 'ac_e_658c9e0a',
    textarea: 'ae_e_658c9e0a'
};
/* harmony default export */ __webpack_exports__["default"] = (styles);
/* tslint:enable */ 


/***/ }),

/***/ "7Awa":
/*!***********************************************!*\
  !*** external "@microsoft/sp-component-base" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__7Awa__;

/***/ }),

/***/ "7asK":
/*!********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/css-loader@3.2.1_webpack@4.44.2/node_modules/css-loader/dist/cjs.js!/agent/_work/1/s/common/temp/node_modules/.pnpm/postcss-loader@3.0.0/node_modules/postcss-loader/src??postcss!./lib/pagination/Pagination.module.css ***!
  \********************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../common/temp/node_modules/.pnpm/css-loader@3.2.1_webpack@4.44.2/node_modules/css-loader/dist/runtime/api.js */ "5ADk")(false);
// Module
exports.push([module.i, ".b_b_658c9e0a{width:100%;min-width:240px;text-align:center;margin:0;padding:2px 0;border:1px solid transparent;position:relative}.b_b_658c9e0a .ms-Icon{line-height:inherit}[dir=ltr] .b_b_658c9e0a [data-icon-name=ChevronLeft]{margin-left:0}[dir=ltr] .b_b_658c9e0a [data-icon-name=ChevronRight],[dir=rtl] .b_b_658c9e0a [data-icon-name=ChevronLeft]{margin-right:0}[dir=rtl] .b_b_658c9e0a [data-icon-name=ChevronRight]{margin-left:0}.b_b_658c9e0a button{font-size:14px;font-weight:400;padding:8px 4px;margin:0 8px;cursor:pointer;cursor:hand;position:relative;height:32px!important;display:none;outline:0}.b_b_658c9e0a:not(.c_b_658c9e0a) button:active{background:\"[theme:white, default: #ffffff]\"}.b_b_658c9e0a .e_b_658c9e0a,.b_b_658c9e0a .f_b_658c9e0a{margin:0;display:inline-block;border:none}.b_b_658c9e0a .e_b_658c9e0a i,.b_b_658c9e0a .f_b_658c9e0a i{margin:0 10px;position:relative;top:2px}.b_b_658c9e0a .g_b_658c9e0a{border-bottom:2px solid!important;cursor:default;position:relative;top:-2px;height:20px;color:\"[theme:black, default: #000000]\"}.b_b_658c9e0a .g_b_658c9e0a.h_b_658c9e0a{border:1px dotted!important;border-bottom:3px solid!important}[dir=ltr] .i_b_658c9e0a{text-align:left}[dir=rtl] .i_b_658c9e0a{text-align:right}[dir=ltr] .i_b_658c9e0a .f_b_658c9e0a{float:right}[dir=rtl] .i_b_658c9e0a .f_b_658c9e0a{float:left}@media only screen and (min-width:640px){.b_b_658c9e0a button{display:inline-block}}", ""]);


/***/ }),

/***/ "7tYx":
/*!*************************************!*\
  !*** ./lib/captionElement/index.js ***!
  \*************************************/
/*! exports provided: CaptionElement, CaptionElementAlignPosition, CaptionElementType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CaptionElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CaptionElement */ "Ar4x");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CaptionElement", function() { return _CaptionElement__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CaptionElementAlignPosition", function() { return _CaptionElement__WEBPACK_IMPORTED_MODULE_0__["CaptionElementAlignPosition"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CaptionElementType", function() { return _CaptionElement__WEBPACK_IMPORTED_MODULE_0__["CaptionElementType"]; });




/***/ }),

/***/ "8/ux":
/*!********************************************!*\
  !*** ./lib/dataProviderPrototype/index.js ***!
  \********************************************/
/*! exports provided: WebPartDataProvider, BaseDataWebPart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _WebPartDataProvider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./WebPartDataProvider */ "2pa0");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WebPartDataProvider", function() { return _WebPartDataProvider__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _BaseDataWebPart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BaseDataWebPart */ "kTvz");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaseDataWebPart", function() { return _BaseDataWebPart__WEBPACK_IMPORTED_MODULE_1__["BaseDataWebPart"]; });





/***/ }),

/***/ "8LHw":
/*!******************************************************************!*\
  !*** ./lib/mySiteWebPartCache/MySiteWebPartCacheDataProvider.js ***!
  \******************************************************************/
/*! exports provided: MySiteWebPartCacheDataProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MySiteWebPartCacheDataProvider", function() { return MySiteWebPartCacheDataProvider; });
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/office-ui-fabric-react-bundle */ "KL1q");
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @microsoft/sp-diagnostics */ "ut3N");
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _microsoft_sp_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @microsoft/sp-http */ "vlQI");
/* harmony import */ var _microsoft_sp_http__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_http__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @microsoft/sp-lodash-subset */ "Pk8u");
/* harmony import */ var _microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _microsoft_sp_page_context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @microsoft/sp-page-context */ "X+PM");
/* harmony import */ var _microsoft_sp_page_context__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_page_context__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ms/sp-component-utilities */ "hiL/");
/* harmony import */ var _ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ms/odsp-utilities-bundle */ "y88i");
/* harmony import */ var _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ms/sp-telemetry */ "2q6Q");
/* harmony import */ var _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _MySiteWebPartCacheHelper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./MySiteWebPartCacheHelper */ "Apzv");
/**
 * @file MySiteWebPartCacheDataProvider.ts
 * @copyright Microsoft Corporation. All rights reserved.
 *
 * @remark DataProvider for the MySiteWebPartCacheManager.
 */










var WEX_MY_SITE_CACHE_SMART_RACE = 1549; /* MySiteCacheSmartRaceRefactor */
var NO_UPDATED_WRITEBACK_FLIGHT = 1917; /* WEXMySiteCacheNoUpdatedWriteback */
var SERVICE_PRESSURE_REFRESH_TIMEOUT_MS = 750;
var LOW_PRESSURE_NO_EXPIRY_MAX_AGE_IN_S = 86400; // 1 day
// Window Variables
var PREFETCHED_WEBPARTDATA = "_spWebPartData";
var WEBPART_PREFETCH_COMPLETE = "_spWebPartDataLoaded";
// Property and Field titles
var FIELDNAME = "FieldName";
var FIELDVALUE = "FieldValue";
var SPBUILTINFIELDID_ID = "Id";
var SPBUILTINFIELDID_TITLE = "Title";
var SPBUILTINFIELDID_ALT_TITLE = "AltTitle";
var SPHOMECACHELIST_HASHCODE_FIELDNAME = "HashCode";
var SPHOMECACHELIST_CACHEVERSION_FIELDNAME = "CacheVersion";
var SPHOMECACHELIST_VALUE_FIELDNAME = "Value";
var PERSONALCACHEITEM_ID = "ListItemId";
var PERSONALCACHEITEM_MODIFIED = "ModifiedTimeUtc";
var PERSONALCACHEITEM_UNIQUEID = "ListItemUniqueId";
// MySite Cache Schema Version
var CURRENT_CACHE_VERSION = "1.0";
var TIERED_CACHE_VERSION = "2.0";
var TIERED_DISABLED_CACHE_VERSION = "1.5";
// QOS tags
var QOS_PREFIX = "MySiteWebPartCacheDataProvider.";
// Page level performance marker whether LKG arrived on time or not before any web part asked.
var LKG_ON_TIME = 'lkgOnTime';
var PERF_PREFIX = 'MySiteWebPartCacheDataProvider';
var _lkgSizeKS = new _ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_6__["KillSwitch"]('4edae48c-3b13-49f4-9d36-ae20f68406f4' /*'02/28/2020', 'WEX_LogLKGSize' */);
var _cacheUpdateFixKS = new _ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_6__["KillSwitch"]('119E9B3E-9B4E-4575-B09A-972FE0E35921' /*'06/23/2020', 'WEX_CacheUpdateFix' */);
var MySiteWebPartCacheDataProvider = /** @class */ (function () {
    function MySiteWebPartCacheDataProvider(serviceScope) {
        var _this = this;
        this._cacheItemsMap = new Map();
        this._cacheItemVersionMap = new Map();
        this._hasFlushCompleted = false;
        this._hasInitializedSynchronously = false;
        /**
         * Server API call to update remote cache item
         */
        this._updateRemoteCacheItemsAPI = function (absoluteUrl, items) {
            _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["Validate"].isNotNullOrUndefined(absoluteUrl, 'absoluteUrl');
            _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["Validate"].isNotNullOrUndefined(items, 'items');
            var qosSuffix = "_writeCache";
            var qosMonitor = new _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__["_QosMonitor"](QOS_PREFIX + qosSuffix);
            _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_8__["_PerformanceLogger"].startMarkForComponent(qosSuffix);
            // update the local map of cache items
            _this._updateLocalItems(items);
            var url = _MySiteWebPartCacheHelper__WEBPACK_IMPORTED_MODULE_9__["MySiteWebPartCacheHelper"].getPersonalCacheItemUpdateUrl(absoluteUrl);
            var body = _MySiteWebPartCacheHelper__WEBPACK_IMPORTED_MODULE_9__["MySiteWebPartCacheHelper"].getUpdatePersonalCacheItemsBody(items, _this._mySiteAbsoluteUrl);
            var extraData = {};
            if (_lkgSizeKS.isActivated()) {
                extraData = {
                    count: items.length
                };
            }
            else {
                extraData = {
                    count: items.length,
                    dataSizeInKB: JSON.stringify(items).length / 1024
                };
            }
            return _MySiteWebPartCacheHelper__WEBPACK_IMPORTED_MODULE_9__["MySiteWebPartCacheHelper"].post(_this._spHttpClient, url, body, _MySiteWebPartCacheHelper__WEBPACK_IMPORTED_MODULE_9__["MySiteWebPartCacheHelper"].checkStatus)
                .then(function (response) {
                qosMonitor.writeSuccess(extraData);
                _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_8__["_PerformanceLogger"].endMarkForComponent(qosSuffix);
                return response;
            })
                .catch(function (error) {
                qosMonitor.writeUnexpectedFailure('WriteCacheError', error, extraData);
                _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_8__["_PerformanceLogger"].endMarkForComponent(qosSuffix);
                return Promise.reject(error);
            });
        };
        this._updateRemotePersonalCacheItems = function () {
            if (MySiteWebPartCacheDataProvider._itemsToDeferUpdate.size > 0) {
                MySiteWebPartCacheDataProvider._itemsToDeferUpdate.forEach(function (items, absoluteUrl) {
                    _this._updateRemoteCacheItemsAPI(absoluteUrl, items).catch(function (error) {
                        return _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__["_TraceLogger"].logError(MySiteWebPartCacheDataProvider._logSource, error, 'UpdateRemoteCacheItems');
                    });
                });
                MySiteWebPartCacheDataProvider._itemsToDeferUpdate.clear();
            }
        };
        this._remoteUpdater = function (executeOnce) {
            _this._updateRemotePersonalCacheItems();
            if (!executeOnce) {
                _this._writeCacheTimer = _this._async.setTimeout(_this._remoteUpdater, 10 * 1000);
            }
        };
        this._hookUnloadEvent = function () {
            window.addEventListener('beforeunload', _this._emergencyUpload);
        };
        this._unhookUnloadEvent = function () {
            window.removeEventListener('beforeunload', _this._emergencyUpload);
        };
        // If end user navigates away,  we should upload data collected so far
        this._emergencyUpload = function () {
            // Update data
            _this._remoteUpdater(true /* executeOnce */);
            // Remove event listener
            _this._unhookUnloadEvent();
            // Clear scheduled timeout
            if (_this._writeCacheTimer) {
                _this._async.clearTimeout(_this._writeCacheTimer);
            }
        };
        _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_8__["_PerformanceLogger"].startMarkForComponent(PERF_PREFIX);
        this._async = new _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__["Async"](this);
        var getDataFromFlush = function () {
            var qosSuffix = '_tryInitializeFromLateFlush';
            var qosMonitor = new _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__["_QosMonitor"](QOS_PREFIX + qosSuffix);
            try {
                _this._tryInitializeFromPage();
                if (!_this._hasFlushCompleted) {
                    qosMonitor.writeUnexpectedFailure('NoCacheMetadata');
                }
                else {
                    qosMonitor.writeSuccess();
                }
            }
            catch (error) {
                qosMonitor.writeUnexpectedFailure('CatchAll', error);
            }
        };
        var maxWaitTime = MySiteWebPartCacheDataProvider._increaseLateFlushKS()
            ? 2 * 60 * 1000
            : 4 * 60 * 1000; // 4 minutes
        var millisecondsToWait = 50;
        var waitTime = 0;
        this._initializeFromLateFlush = new Promise(function (resolve, reject) {
            var qosSuffix = '_initializeFromLateFlush';
            var qosMonitor = new _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__["_QosMonitor"](QOS_PREFIX + qosSuffix);
            // if _spWebPartDataLoaded() has not been defined already, lets define it.
            // _spWebPartDataLoaded() can be defined already when tiered caching
            // is enabled for some webparts but legacy cache is active in other webparts
            if (!window[WEBPART_PREFETCH_COMPLETE]) {
                window[WEBPART_PREFETCH_COMPLETE] = getDataFromFlush;
            }
            var asyncStart = new _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__["Async"]();
            asyncStart.setInterval(function () {
                // server flush happened before _spWebPartDataLoaded() was exposed,
                // lets extract the contents of the _spWebPardData if any
                if (!_this._hasFlushCompleted && window[PREFETCHED_WEBPARTDATA]) {
                    getDataFromFlush();
                }
                // Data has been extracted, lets stop async interval
                if (_this._hasFlushCompleted && window[PREFETCHED_WEBPARTDATA]) {
                    _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_8__["_PerformanceLogger"].markComponent(PERF_PREFIX, _this._hasInitializedSynchronously ? 'SyncFlushCompleted' : 'LateFlushCompleted');
                    qosMonitor.writeSuccess({ initializedAsync: !_this._hasInitializedSynchronously });
                    asyncStart.dispose();
                    return resolve();
                }
                if (waitTime >= maxWaitTime) {
                    _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_8__["_PerformanceLogger"].endMarkForComponent(PERF_PREFIX);
                    qosMonitor.writeUnexpectedFailure('TimedOut');
                    asyncStart.dispose();
                    return reject();
                }
                // Increase wait time
                waitTime += millisecondsToWait;
            }, millisecondsToWait);
        });
        serviceScope.whenFinished(function () {
            _this._pageContext = serviceScope.consume(_microsoft_sp_page_context__WEBPACK_IMPORTED_MODULE_5__["PageContext"].serviceKey);
            _this._spHttpClient = serviceScope.consume(_microsoft_sp_http__WEBPACK_IMPORTED_MODULE_3__["SPHttpClient"].serviceKey);
            _this._tryInitializeSynchronously();
            // Start updating changes no sooner than 10 seconds via remoteUpdater
            _this._remoteUpdater();
            // listen for events caused by user navigating away
            _this._hookUnloadEvent();
            _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__["_EngagementLogger"].logEvent('MySiteWebPartCacheDataProvider.Constructor');
        });
    }
    MySiteWebPartCacheDataProvider._increaseLateFlushKS = function () {
        return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["_SPKillSwitch"].isActivated('ab30cf50-82cc-4361-9270-edce465b67d7' /*'08/12/2020', 'WEX_LateFlishTimeIncrease' */);
    };
    Object.defineProperty(MySiteWebPartCacheDataProvider.prototype, "currentListRelativeFolderPath", {
        get: function () {
            return this._currentListRelativeFolderPath;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MySiteWebPartCacheDataProvider.prototype, "currentWebAbsoluteUrl", {
        get: function () {
            return this._currentWebAbsoluteUrl;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MySiteWebPartCacheDataProvider.prototype, "mySiteAbsoluteUrl", {
        get: function () {
            return this._mySiteAbsoluteUrl;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MySiteWebPartCacheDataProvider.prototype, "hasFlushCompleted", {
        get: function () {
            return this._hasFlushCompleted;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MySiteWebPartCacheDataProvider.prototype, "initializeFromLateFlush", {
        get: function () {
            return this._initializeFromLateFlush;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MySiteWebPartCacheDataProvider.prototype, "currentPageCacheFolderKey", {
        set: function (folderKey) {
            this._currentPageCacheFolderKey = folderKey;
            this._currentListRelativeFolderPath = this._getListRelativeFolderPath();
        },
        enumerable: true,
        configurable: true
    });
    MySiteWebPartCacheDataProvider.prototype.getCacheItemVersion = function (webPartInstanceId) {
        return this._cacheItemVersionMap.get(webPartInstanceId);
    };
    MySiteWebPartCacheDataProvider.prototype.getWebPartIdLogObject = function (webPartAlias, webPartInstanceId, cacheStatus, serverStatus) {
        return {
            alias: webPartAlias,
            instanceId: webPartInstanceId,
            isSmartRaceEnabled: this._isMySiteCacheSmartRaceRefactorEnabled(),
            cacheStatus: cacheStatus,
            serverStatus: serverStatus
        };
    };
    /**
     * Returns cached data for specified webpart instance and configuration, if any.
     * @param id - (webpart) instance identifier
     * @param hash - configuration hash to avoid showing incompatible data from previous cache
     * @internal
     */
    MySiteWebPartCacheDataProvider.prototype._internalAdvancedGetCachedData = function (id, hash) {
        // params validated at the manager level
        var cachedWebPart = this._getCachedItem(id);
        if (cachedWebPart && cachedWebPart.hash === hash) {
            return JSON.parse(cachedWebPart.result);
        }
        return undefined;
    };
    /**
     * In advanced usage scenarios, allows caller to directly update cache item
     * @param context - web part context
     * @param hash - configuration hash to avoid showing data for different configuration of same instance
     * @param serializedData
     * @internal
     */
    MySiteWebPartCacheDataProvider.prototype._internalAdvancedSetCacheData = function (context, hash, serializedData) {
        // params validated at the manager level
        this._tryUpdateCache(context.instanceId, context.manifest.alias, serializedData, hash);
    };
    /**
     * Returns cached data for the calling WebPart while handling caching and re-rendering.
     *
     * @param requestData - A function that returns an P type and makes the service data request.
     * @param dataUpdated - A function that returns the updated data when there is a cache hit on the original
     *                      request.
     * @param config - The current WebPart config.
     * @param webPartInstanceId - The WebPart instanceId.
     * @param webPartAlias - The WebPart alias (manifest alias).
     * @param rerender - Controls whether or not to re-render on new data after rendering cached data.
     *                   Default: Always re-render.
     * @param secondsToInvalidate - A number of seconds representing the amount of time to expire cached results.
     *                              Default: Don't expire cached results automatically.
     * @returns - A promise that represents WebPart data returned from the request or cache.
     */
    MySiteWebPartCacheDataProvider.prototype.getWebPartData = function (requestData, dataUpdated, config, // tslint:disable-line:no-any
    webPartInstanceId, webPartAlias, rerender, secondsToInvalidate, webPartTag) {
        var _this = this;
        if (rerender === void 0) { rerender = true; }
        if (secondsToInvalidate === void 0) { secondsToInvalidate = -1; }
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["Validate"].isNotNullOrUndefined(requestData, 'requestData');
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["Validate"].isNotNullOrUndefined(dataUpdated, 'dataUpdated');
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["Validate"].isNotNullOrUndefined(config, 'config');
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["Validate"].isNonemptyString(webPartInstanceId, 'webPartInstanceId');
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["Validate"].isNonemptyString(webPartAlias, 'webPartAlias');
        var qosSuffix = "getWebPartData";
        var qosMonitor = new _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__["_QosMonitor"](QOS_PREFIX + qosSuffix);
        var rawResponseString = "";
        var response = undefined;
        var cachedWebPart = this._getCachedItem(webPartInstanceId);
        var webPartHash = _MySiteWebPartCacheHelper__WEBPACK_IMPORTED_MODULE_9__["MySiteWebPartCacheHelper"].generateHash(JSON.stringify(config));
        webPartTag = webPartTag || "WebPart." + webPartAlias + ".internal." + webPartInstanceId;
        // Delay fresh call data if server is under pressure AND LKG is late
        if (this._isThrottlingEnabled() && !this._hasFlushCompleted) {
            requestData = this._getThrottledServerCall(requestData);
        }
        this._logCacheStart(webPartInstanceId, webPartTag, 'MySiteWebPartCacheDataProvider.GetWebPartData');
        this._captureCacheKeyUsageTelemetry(webPartAlias, webPartHash);
        var forceRefreshOnConfigMismatch = !!cachedWebPart && webPartHash !== cachedWebPart.hash;
        if (cachedWebPart && !forceRefreshOnConfigMismatch) {
            // Scenario: Cache exists and hash key is also same.
            if (_MySiteWebPartCacheHelper__WEBPACK_IMPORTED_MODULE_9__["MySiteWebPartCacheHelper"].isExpired(this._utcTimeStamp, cachedWebPart.modified, secondsToInvalidate)) {
                // Scenario: Cache exists, hash key is also same but expired.
                // This WebPart is cached but the cached item has passed its invalidation time.
                this._logCacheExpired(webPartTag);
                return requestData()
                    .then(function (rawResponse) {
                    response = rawResponse;
                    rawResponseString = JSON.stringify(response);
                    _this._tryUpdateCache(webPartInstanceId, webPartAlias, rawResponseString, webPartHash, cachedWebPart.id);
                    qosMonitor.writeSuccess(_this.getWebPartIdLogObject(webPartAlias, webPartInstanceId));
                })
                    .catch(function (error) {
                    // This will tell us if requestData() or dataUpdated fails, specifically.
                    _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__["_TraceLogger"].logError(MySiteWebPartCacheDataProvider._logSource, error, "getWebPartData: error while processing cached WebPart item " + webPartInstanceId + ".");
                    qosMonitor.writeUnexpectedFailure("ExpiredCacheUpdateError", error, _this.getWebPartIdLogObject(webPartAlias, webPartInstanceId));
                    if (true) {
                        throw error;
                    }
                })
                    .then(function () {
                    return response;
                });
            }
            else {
                try {
                    if (webPartHash === cachedWebPart.hash) {
                        // Scenario: Most Happy path - We found cache and usable
                        return this._returnCachedDataWithRefresh(cachedWebPart, requestData, dataUpdated, config, webPartInstanceId, webPartAlias, qosMonitor, webPartHash, rerender, secondsToInvalidate);
                    }
                }
                catch (error) {
                    _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__["_TraceLogger"].logError(MySiteWebPartCacheDataProvider._logSource, error, "getWebPartData: error while processing cache item request for " + webPartTag + ".");
                    qosMonitor.writeUnexpectedFailure("CachedItemUpdateError", error, this.getWebPartIdLogObject(webPartAlias, webPartInstanceId));
                }
                finally {
                    // If the WebPart is cached, we should always at least return the cached result, regardless of error.
                    this._logCacheHit(webPartTag);
                    return Promise.resolve(JSON.parse(cachedWebPart.result));
                }
            }
        }
        else {
            // This WebPart is not cached or maybe the flush from server hasn't yet completed.
            // Request the data as its result will still be needed (and is re-used) in the refresh scenario
            this._logCacheMiss(webPartTag);
            this._logConfigMismatch(webPartTag, cachedWebPart, !forceRefreshOnConfigMismatch);
            var fetchFromServer_1 = requestData();
            var handleServerFetch_1 = fetchFromServer_1
                .then(function (rawResponse) {
                _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__["_TraceLogger"].logVerbose(MySiteWebPartCacheDataProvider._logSource, "CacheMiss: Requested cached item for " + webPartTag + " doesn't exist. Creating.");
                response = rawResponse;
                rawResponseString = JSON.stringify(response);
                _this._tryUpdateCache(webPartInstanceId, webPartAlias, rawResponseString, webPartHash, !!cachedWebPart ? cachedWebPart.id : undefined);
                qosMonitor.writeSuccess(_this.getWebPartIdLogObject(webPartAlias, webPartInstanceId));
            })
                .catch(function (error) {
                // This will tell us if requestData() or dataUpdated fails, specifically.
                _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__["_TraceLogger"].logError(MySiteWebPartCacheDataProvider._logSource, error, "getWebPartData: error while processing non-cached item for " + webPartTag + ".");
                qosMonitor.writeUnexpectedFailure("NewItemRequestSaveRenderError", error, _this.getWebPartIdLogObject(webPartAlias, webPartInstanceId));
                if (true) {
                    throw error;
                }
            })
                .then(function () {
                return response;
            });
            // Scenario: Flush has completed but we could not return cached from it for some reason.
            // The only bet we have is actual data fetch
            if (this._hasFlushCompleted) {
                return handleServerFetch_1;
            }
            // Scenario Race: We are in the situation to return from lkgFlush or actual data fetch, whichever completes first.
            this._logLateFlush(webPartTag);
            // Lets first create promise for retrieving data from late flush
            var waitOnDataFromFlush = this._initializeFromLateFlush
                .then(function () { return _this._getCachedItem(webPartInstanceId); })
                .then(function (cachedItem) {
                if (_this._canUseCachedData_deprecated(cachedItem, config, secondsToInvalidate)) {
                    return _this._returnCachedDataWithRefresh(cachedItem, function () {
                        return fetchFromServer_1;
                    }, // utilize the pending promise
                    dataUpdated, config, webPartInstanceId, webPartAlias, qosMonitor, webPartHash, rerender, secondsToInvalidate);
                }
                else {
                    _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__["_TraceLogger"].logVerbose(MySiteWebPartCacheDataProvider._logSource, "Late flush resulted in a miss " + webPartAlias + "." + webPartInstanceId);
                    return handleServerFetch_1;
                }
            });
            // Note that by default Promise.race will return whichever resolve or reject first.
            // TODO: Return one resolve first.
            return Promise.race([waitOnDataFromFlush, handleServerFetch_1]);
        } // End of else block handling fetch from server and racing if flush is late too.
    };
    /**
     * Returns cached data for the matching configuration if available,
     * otherwise the server data for the same config.
     *
     * @returns - A promise containing the Type and the Data returned from the server request or cache.
     */
    MySiteWebPartCacheDataProvider.prototype.getCacheData = function (requestConfig) {
        var _this = this;
        var dataUpdated = requestConfig.dataUpdated, serializedConfiguration = requestConfig.serializedConfiguration, webPartAlias = requestConfig.webPartAlias, webPartInstanceId = requestConfig.webPartInstanceId, secondsToInvalidate = requestConfig.secondsToInvalidate;
        var requestData = requestConfig.requestData;
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["Validate"].isNotNullOrUndefined(requestData, 'requestData');
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["Validate"].isNotNullOrUndefined(dataUpdated, 'dataUpdated');
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["Validate"].isNotNullOrUndefined(serializedConfiguration, 'serializedConfiguration');
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["Validate"].isNonemptyString(webPartAlias, 'webPartAlias');
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["Validate"].isNonemptyString(webPartInstanceId, 'webPartInstanceId');
        var cachedData = this._getCachedItem(webPartInstanceId);
        var dataHash = _MySiteWebPartCacheHelper__WEBPACK_IMPORTED_MODULE_9__["MySiteWebPartCacheHelper"].generateHash(serializedConfiguration);
        var webPartTag = "WebPart." + webPartAlias + ".internal." + webPartInstanceId;
        this._logCacheStart(webPartInstanceId, webPartTag, 'MySiteWebPartCacheDataProvider.GetCacheData');
        // Let's assume server response rejection.
        // This will be overriden by calling the server on a throttled fashion
        // if cache data is stale, non existent of if throttling is disabled.
        // Promise rejection will take out this server response from Smart Racing.
        var cacheResult = {
            cacheResponseType: _ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_6__["CacheResponseType"].ServerData,
            serverResponseAsync: Promise.reject().catch(function (e) { return e; })
        };
        var enforceThrottleIfRequired = function (cacheMofidiedDate) {
            return _this._shouldRequestServerDataWhenThrottling(cacheMofidiedDate)
                ? _this._tryUpdateCacheAsync(requestData, dataUpdated, webPartAlias, webPartInstanceId, dataHash)
                : cacheResult.serverResponseAsync;
        };
        if (this._isThrottlingEnabled()) {
            // Delay fresh call data if server is under pressure AND LKG is late
            if (!this._hasFlushCompleted) {
                requestData = this._getThrottledServerCall(requestData);
            }
        }
        else {
            // Throttling not enabled, we always return server call
            cacheResult.serverResponseAsync = this._tryUpdateCacheAsync(requestData, dataUpdated, webPartAlias, webPartInstanceId, dataHash);
        }
        // Data is cached and usable (has not expired)
        if (this._canUseCachedData(cachedData, dataHash, secondsToInvalidate, webPartTag)) {
            cacheResult.cacheResponseType = _ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_6__["CacheResponseType"].CachedData;
            cacheResult.cacheResponseAsync = Promise.resolve(JSON.parse(cachedData.result));
            // Enforce throttling if required
            if (this._isThrottlingEnabled()) {
                cacheResult.serverResponseAsync = enforceThrottleIfRequired(cachedData.modified);
            }
            return Promise.resolve(cacheResult);
            // Data is not cached or flush from server hasn't yet completed.
        }
        else {
            this._logCacheMiss(webPartTag);
            // Flush from server hasn't completed
            if (!this._hasFlushCompleted) {
                this._logLateFlush(webPartTag);
                // Wait for data to be flushed
                var waitOnDataFromFlush = this._initializeFromLateFlush
                    .then(function () { return _this._getCachedItem(webPartInstanceId); })
                    .then(function (cachedItem) {
                    // Data is cached and usable (has not expired)
                    if (_this._canUseCachedData(cachedItem, dataHash, secondsToInvalidate, webPartTag)) {
                        cacheResult.cacheResponseType = _ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_6__["CacheResponseType"].CachedData;
                        cacheResult.cacheResponseAsync = Promise.resolve(JSON.parse(cachedItem.result));
                        // Enforce throttling if required
                        if (_this._isThrottlingEnabled()) {
                            cacheResult.serverResponseAsync = enforceThrottleIfRequired(cachedData.modified);
                        }
                    }
                    return Promise.resolve(cacheResult);
                });
                // If cached data is not available, let's request server data in a throttled way
                if (this._isThrottlingEnabled()) {
                    cacheResult.serverResponseAsync = waitOnDataFromFlush.then(function (r) { return r.serverResponseAsync; });
                }
                // Return the response that comes back faster
                var cachedDataPromiseId_1 = _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["Guid"].parse('f45cfbcb-6bff-4e57-93d9-5427a620ab01');
                var serverDataPromiseId = _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["Guid"].parse('4bba5b4c-4f1a-4639-9512-3abc0226331a');
                var promiseRaceMap = [
                    {
                        raceablePromise: waitOnDataFromFlush.then(function (r) { return r.cacheResponseAsync || r.serverResponseAsync; }),
                        raceId: cachedDataPromiseId_1
                    },
                    {
                        raceablePromise: cacheResult.serverResponseAsync,
                        raceId: serverDataPromiseId
                    }
                ];
                return _ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_6__["SmartRace"].race(promiseRaceMap)
                    .then(function (raceResponse) {
                    var fasterResponse = {
                        cacheResponseType: raceResponse.raceId === cachedDataPromiseId_1
                            ? _ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_6__["CacheResponseType"].CachedData
                            : _ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_6__["CacheResponseType"].ServerData,
                        cacheResponseAsync: raceResponse.raceId === cachedDataPromiseId_1 ? raceResponse.raceablePromise : undefined,
                        serverResponseAsync: cacheResult.serverResponseAsync
                    };
                    return fasterResponse;
                })
                    .catch(function (error) {
                    _this._logSmartRaceError(error);
                    throw error;
                });
            }
            // Flush completed and cache was not available,
            // Return data from the server
            cacheResult.cacheResponseType = _ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_6__["CacheResponseType"].ServerData;
            if (this._isThrottlingEnabled()) {
                cacheResult.serverResponseAsync = this._tryUpdateCacheAsync(requestData, dataUpdated, webPartAlias, webPartInstanceId, dataHash);
            }
            return Promise.resolve(cacheResult);
        }
    };
    MySiteWebPartCacheDataProvider.prototype._tryUpdateCacheAsync = function (request, onRequestCompleted, webPartAlias, webPartInstanceId, dataHash) {
        var _this = this;
        return request().then(function (rawResponse) {
            if (onRequestCompleted) {
                onRequestCompleted(rawResponse);
            }
            var rawResponseString = JSON.stringify(rawResponse);
            _this._tryUpdateCache(webPartInstanceId, webPartAlias, rawResponseString, dataHash);
            return rawResponse;
        });
    };
    MySiteWebPartCacheDataProvider.prototype._canUseCachedData = function (cachedData, dataHash, secondsToInvalidate, webPartTag) {
        var isConfigMatch = !!cachedData && (cachedData.hash === dataHash || cachedData.cacheVersion === TIERED_CACHE_VERSION);
        this._logConfigMismatch(webPartTag, cachedData, isConfigMatch);
        if (!!cachedData) {
            var isCacheExpired = _MySiteWebPartCacheHelper__WEBPACK_IMPORTED_MODULE_9__["MySiteWebPartCacheHelper"].isExpired(this._utcTimeStamp, cachedData.modified, secondsToInvalidate);
            if (isCacheExpired) {
                this._logCacheExpired(webPartTag);
            }
            if (isConfigMatch && !isCacheExpired) {
                this._logCacheHit(webPartTag);
                return true;
            }
        }
        return false;
    };
    MySiteWebPartCacheDataProvider.prototype._canUseCachedData_deprecated = function (cachedWebPart, config, // tslint:disable-line:no-any
    secondsToInvalidate) {
        if (secondsToInvalidate === void 0) { secondsToInvalidate = -1; }
        return (!!cachedWebPart &&
            (cachedWebPart.hash === _MySiteWebPartCacheHelper__WEBPACK_IMPORTED_MODULE_9__["MySiteWebPartCacheHelper"].generateHash(JSON.stringify(config)) ||
                cachedWebPart.cacheVersion === TIERED_CACHE_VERSION) &&
            !_MySiteWebPartCacheHelper__WEBPACK_IMPORTED_MODULE_9__["MySiteWebPartCacheHelper"].isExpired(this._utcTimeStamp, cachedWebPart.modified, secondsToInvalidate));
    };
    MySiteWebPartCacheDataProvider.prototype._returnCachedDataWithRefresh = function (cachedWebPart, requestData, dataUpdated, config, // tslint:disable-line:no-any
    webPartInstanceId, webPartAlias, qosMonitor, webPartHash, rerender, secondsToInvalidate) {
        var _this = this;
        if (rerender === void 0) { rerender = true; }
        if (secondsToInvalidate === void 0) { secondsToInvalidate = -1; }
        var rawResponseString = "";
        var response = undefined;
        _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__["_TraceLogger"].logVerbose(MySiteWebPartCacheDataProvider._logSource, "Found cached item " + webPartInstanceId + " with matching config.");
        if (this._shouldRequestServerDataWhenThrottling(cachedWebPart.modified)) {
            requestData()
                .then(function (rawResponse) {
                response = rawResponse;
                rawResponseString = JSON.stringify(response);
                if (cachedWebPart.result !== rawResponseString) {
                    // This WebPart is cached; the config has not changed, but the result needs updating.
                    _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__["_TraceLogger"].logVerbose(MySiteWebPartCacheDataProvider._logSource, "Requested item " + webPartInstanceId + " has newer results; updating.");
                    _this._saveRenderAndUpdateItem(dataUpdated, rerender, response, webPartInstanceId, webPartAlias, rawResponseString, webPartHash, cachedWebPart.id);
                    qosMonitor.writeSuccess(_this.getWebPartIdLogObject(webPartAlias, webPartInstanceId));
                    _this._logCacheMatchApiResult(webPartAlias, false);
                }
                else {
                    // This WebPart is cached; the result and config have not changed; No op.
                    _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__["_TraceLogger"].logVerbose(MySiteWebPartCacheDataProvider._logSource, "Requested cached item " + webPartInstanceId + " has matching result; No write back.");
                    qosMonitor.writeSuccess(_this.getWebPartIdLogObject(webPartAlias, webPartInstanceId));
                    _this._logCacheMatchApiResult(webPartAlias, true);
                }
            })
                .catch(function (error) {
                _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__["_TraceLogger"].logError(MySiteWebPartCacheDataProvider._logSource, error, "getWebPartData: error while processing cached WebPart item " + webPartInstanceId + ".");
                qosMonitor.writeUnexpectedFailure("CachedItemUpdatedResultError", error, _this.getWebPartIdLogObject(webPartAlias, webPartInstanceId));
            });
        }
        return Promise.resolve(JSON.parse(cachedWebPart.result));
    };
    MySiteWebPartCacheDataProvider.prototype._logCacheMatchApiResult = function (webPartAlias, isMatch) {
        _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__["_EngagementLogger"].logEventWithLogEntry(new _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__["_LogEntry"]('MySiteWebPartValidCache_deprecated', webPartAlias, _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__["_LogType"].Event, {
            CacheMatchApiResult: isMatch ? 'Match' : 'Not match'
        }));
    };
    /**
     * Saves, renders, and updates cache data.
     *
     * @param dataUpdated - A function that saves the response to the WebPart and then renders.
     * @param rerender - Controls whether or not to re-render on new data after rendering cached data.
     *                   Default: Always re-render.
     * @param response - The response from a requestData() call.
     * @param webPartInstanceId - The WebPart instanceId.
     * @param webPartAlias - The WebPart alias (manifest alias).
     * @param rawResponseString - The raw response string from a requestData() call.
     *                            We need the raw string before saving/transformation for consistency.
     * @param webPartHash - The hash of the WebPart config to write back to the cache.
     * @param cacheItemId - The ID (SharePointListItem ID) of the item to update.
     */
    MySiteWebPartCacheDataProvider.prototype._saveRenderAndUpdateItem = function (dataUpdated, rerender, response, webPartInstanceId, webPartAlias, rawResponseString, webPartHash, cacheItemId) {
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["Validate"].isNotNullOrUndefined(dataUpdated, 'dataUpdated');
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["Validate"].isNotNullOrUndefined(rerender, 'rerender');
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["Validate"].isNotNullOrUndefined(response, 'response');
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["Validate"].isNonemptyString(webPartInstanceId, 'webPartInstanceId');
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["Validate"].isNonemptyString(webPartAlias, 'webPartAlias');
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["Validate"].isNonemptyString(rawResponseString, 'rawResponseString');
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["Validate"].isNonemptyString(webPartHash, 'webPartHash');
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["Validate"].isNotNullOrUndefined(cacheItemId, 'cacheItemId');
        if (rerender) {
            dataUpdated(response);
        }
        this._updateCache(webPartInstanceId, webPartAlias, rawResponseString, webPartHash, cacheItemId);
    };
    MySiteWebPartCacheDataProvider.prototype._tryInitializeSynchronously = function () {
        var qosSuffix = "_initialize";
        var qosMonitor = new _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__["_QosMonitor"](QOS_PREFIX + qosSuffix);
        var spPageContextInfoError = "Page " + this._currentPageCacheFolderKey + " is missing _spPageContextInfo.";
        var spWebPartDataError = "Page " + this._currentPageCacheFolderKey + " has not yet gotten the LKG flush.";
        if (this._pageContext) {
            this._getPrefetchedPageContextProperties(this._pageContext.legacyPageContext);
            if (this._tryInitializeFromPage()) {
                this._hasInitializedSynchronously = true;
                _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_8__["_PerformanceLogger"].markComponent(PERF_PREFIX, 'SyncFlushCompleted');
                qosMonitor.writeSuccess();
            }
            else {
                _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_8__["_PerformanceLogger"].markComponent(PERF_PREFIX, 'DelayedFlush');
                _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__["_TraceLogger"].logError(MySiteWebPartCacheDataProvider._logSource, new Error(), spWebPartDataError);
                qosMonitor.writeExpectedFailure('DelayedFlush', new Error());
            }
        }
        else {
            _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_8__["_PerformanceLogger"].markComponent(PERF_PREFIX, 'SyncMissingContextInfo');
            _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__["_TraceLogger"].logError(MySiteWebPartCacheDataProvider._logSource, new Error(), spPageContextInfoError);
            qosMonitor.writeUnexpectedFailure("SPPageContextInfoError", new Error());
        }
    };
    MySiteWebPartCacheDataProvider.prototype._tryInitializeFromPage = function () {
        if (this._hasFlushCompleted) {
            return true;
        }
        else if (window[PREFETCHED_WEBPARTDATA]) {
            this._getPrefetchedWebPartDataProperties(window[PREFETCHED_WEBPARTDATA].Properties);
            this._getPrefetchedWebPartDataItems(window[PREFETCHED_WEBPARTDATA].Items);
            this._hasFlushCompleted = true;
        }
        return this._hasFlushCompleted;
    };
    MySiteWebPartCacheDataProvider.prototype._getCachedItem = function (webPartInstanceId) {
        return this._cacheItemsMap.get(webPartInstanceId);
    };
    /**
     * Get the flushed WebPartData Properties.
     */
    // tslint:disable-next-line:no-any
    MySiteWebPartCacheDataProvider.prototype._getPrefetchedWebPartDataProperties = function (data) {
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["Validate"].isNotNullOrUndefined(data, 'data');
        this._mySiteAbsoluteUrl = data.MySiteUrl;
        // Later refactor to reuse setter currentPageCacheFolderKey
        this._currentPageCacheFolderKey = data.PageCacheFolderKey;
        this._webPartCachePath = data.WebPartCachePath;
        if (data.UtcTimeStamp) {
            this._utcTimeStamp = _MySiteWebPartCacheHelper__WEBPACK_IMPORTED_MODULE_9__["MySiteWebPartCacheHelper"].dateTimeStringToJsDate(data.UtcTimeStamp);
        }
        // this is used by PersonalCache/XGeo methods to know what folder to write to.
        // need to update on page nav.
        // Later refactor to reuse setter currentPageCacheFolderKey
        this._currentListRelativeFolderPath = this._getListRelativeFolderPath();
    };
    /**
     * Get the flushed Page Context Properties.
     */
    // tslint:disable-next-line:no-any
    MySiteWebPartCacheDataProvider.prototype._getPrefetchedPageContextProperties = function (data) {
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["Validate"].isNotNullOrUndefined(data, 'data');
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["Validate"].isNonemptyString(data.webAbsoluteUrl, 'data.webAbsoluteUrl');
        this._currentWebAbsoluteUrl = data.webAbsoluteUrl;
    };
    /**
     * Get the flushed WebPartData Items.
     */
    // tslint:disable-next-line:no-any
    MySiteWebPartCacheDataProvider.prototype._getPrefetchedWebPartDataItems = function (data) {
        var _this = this;
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["Validate"].isNotNullOrUndefined(data, 'data');
        Object.keys(data).forEach(function (key) {
            var cacheItem = {
                webPartInstanceId: key,
                result: data[key].Value,
                hash: data[key].HashCode,
                id: Number(data[key].ID),
                uniqueId: _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["Guid"].parse(data[key].UniqueId),
                modified: _MySiteWebPartCacheHelper__WEBPACK_IMPORTED_MODULE_9__["MySiteWebPartCacheHelper"].dateTimeStringToJsDate(data[key].Modified),
                cacheVersion: data[key].CacheVersion
            };
            if (cacheItem.cacheVersion === TIERED_DISABLED_CACHE_VERSION ||
                cacheItem.cacheVersion === TIERED_CACHE_VERSION) {
                var altTitle = void 0;
                var componentId = '';
                try {
                    altTitle = JSON.parse(data[key].AltTitle);
                    componentId = altTitle.id;
                }
                catch (e) {
                    componentId = data[key].AltTitle;
                }
                cacheItem.webPartInstanceId = componentId;
                _this._cacheItemVersionMap.set(componentId, cacheItem.cacheVersion);
                _this._cacheItemsMap.set(componentId, cacheItem);
            }
            else {
                _this._cacheItemVersionMap.set(key, cacheItem.cacheVersion);
                _this._cacheItemsMap.set(key, cacheItem);
            }
        });
        this._logCacheItemSize();
    };
    /**
     * Call this before any server update operation requring flush data like remote item creation
     */
    MySiteWebPartCacheDataProvider.prototype._ensureFlush = function () {
        if (this._hasFlushCompleted) {
            return Promise.resolve();
        }
        return this._initializeFromLateFlush;
    };
    /**
     * Creates cached item placeholder on the server, then updates it (batched along with others)
     * @todo - This could be batched too
     */
    MySiteWebPartCacheDataProvider.prototype._createRemoteCacheItem = function (title, value, hash) {
        var _this = this;
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["Validate"].isNonemptyString(title, 'title');
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["Validate"].isNonemptyString(value, 'value');
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["Validate"].isNonemptyString(hash, 'hash');
        var personalCacheItems = [];
        var personalCacheItem = {
            AltTitle: undefined,
            CacheValue: value,
            CacheValueHash: hash,
            ListItemId: undefined,
            ListItemUniqueId: undefined,
            CacheVersion: undefined,
            CacheKey: title,
            ModifiedTimeUtc: undefined
        };
        personalCacheItems.push(personalCacheItem);
        return this._ensureFlush()
            .then(function () { return _this._createPersonalCacheItemsAPI(_this._currentListRelativeFolderPath, personalCacheItems); })
            .then(function (response) {
            if (response) {
                return _this._createLocalCacheItemFromServerResponse(response);
            }
        });
    };
    /**
     * Server API call to create a single PersonalCacheItem.
     * @todo - This can be updated to properly handle batch creation by iterating over all data.value
     */
    MySiteWebPartCacheDataProvider.prototype._createPersonalCacheItemsAPI = function (listRelativeFolderPath, items) {
        var _this = this;
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["Validate"].isNonemptyString(listRelativeFolderPath, 'listRelativeFolderPath');
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["Validate"].isNotNullOrUndefined(items, 'items');
        var url = _MySiteWebPartCacheHelper__WEBPACK_IMPORTED_MODULE_9__["MySiteWebPartCacheHelper"].getPersonalCacheItemCreateUrl(this._currentWebAbsoluteUrl);
        var body = _MySiteWebPartCacheHelper__WEBPACK_IMPORTED_MODULE_9__["MySiteWebPartCacheHelper"].getCreatePersonalCacheItemBody(listRelativeFolderPath, items, this._mySiteAbsoluteUrl);
        // this creates a PersonalCacheItem, which is basically a placeholder.
        return (_MySiteWebPartCacheHelper__WEBPACK_IMPORTED_MODULE_9__["MySiteWebPartCacheHelper"].post(this._spHttpClient, url, body, _MySiteWebPartCacheHelper__WEBPACK_IMPORTED_MODULE_9__["MySiteWebPartCacheHelper"].checkStatus)
            .then(function (response) { return response.json(); })
            // tslint:disable-next-line:no-any
            .then(function (data) {
            _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["Validate"].isNotNullOrUndefined(data, 'data');
            // Synthesize a complete PersonalCacheItem locally
            // using the returned Placeholder data (data) and the data
            // we want to save to it (item).
            var item = items[0];
            var personalCacheItems = [];
            var personalCacheItem = {
                AltTitle: undefined,
                CacheValue: item.CacheValue,
                CacheValueHash: item.CacheValueHash,
                ListItemId: data.value[0][PERSONALCACHEITEM_ID],
                ListItemUniqueId: data.value[0][PERSONALCACHEITEM_UNIQUEID],
                CacheVersion: CURRENT_CACHE_VERSION,
                CacheKey: item.CacheKey,
                ModifiedTimeUtc: data.value[0][PERSONALCACHEITEM_MODIFIED]
            };
            personalCacheItems.push(personalCacheItem);
            // update the local map of cache items
            _this._createLocalItems(personalCacheItems);
            // next step is to update the created PersonalCacheItem (placeholders) with data.
            _this._addItemToBeUpdated(_this._currentWebAbsoluteUrl, personalCacheItem);
        }));
    };
    /**
     * Updates an existing remote cached item.
     */
    MySiteWebPartCacheDataProvider.prototype._updateRemoteCacheItem = function (cacheKey, value, hash, itemID) {
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["Validate"].isNonemptyString(cacheKey, 'cacheKey');
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["Validate"].isNonemptyString(hash, 'hash');
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["Validate"].isNotNullOrUndefined(itemID, 'itemID');
        if (!value) {
            value = '';
        }
        var personalCacheItems = [];
        var personalCacheItem = {
            AltTitle: undefined,
            CacheValue: value,
            CacheValueHash: hash,
            ListItemId: itemID,
            ListItemUniqueId: undefined,
            CacheVersion: CURRENT_CACHE_VERSION,
            CacheKey: _cacheUpdateFixKS.isActivated() ? undefined : cacheKey,
            ModifiedTimeUtc: undefined
        };
        // The code below will only execute when the Tiered caching flights get disabled
        // This allows the cache entry to be updated with the AltTitle and cacheVersion
        // allowing backward and forward compatibility with flight changes
        if (this._cacheItemVersionMap.get(cacheKey) === TIERED_CACHE_VERSION) {
            personalCacheItem.AltTitle = JSON.stringify({ id: cacheKey });
            personalCacheItem.CacheVersion = TIERED_DISABLED_CACHE_VERSION;
        }
        personalCacheItems.push(personalCacheItem);
        this._addItemToBeUpdated(this._currentWebAbsoluteUrl, personalCacheItem);
        return Promise.resolve();
    };
    MySiteWebPartCacheDataProvider.prototype._addItemToBeUpdated = function (absoluteUrl, item) {
        if (MySiteWebPartCacheDataProvider._itemsToDeferUpdate.has(absoluteUrl)) {
            var cachedItems = MySiteWebPartCacheDataProvider._itemsToDeferUpdate.get(absoluteUrl);
            var index = Object(_microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_4__["findIndex"])(cachedItems, function (cache) { return item.CacheKey === cache.CacheKey; });
            if (index >= 0) {
                cachedItems[index] = item;
            }
            else {
                cachedItems.push(item);
            }
        }
        else {
            MySiteWebPartCacheDataProvider._itemsToDeferUpdate.set(absoluteUrl, [item]);
        }
    };
    /**
     * Update the cache.
     * IF we already have the webPartUniqueID in the cachedItemMap, then update the existing item.
     * ELSE - we haven't seen this item before, we create a new item.
     * Note: If your intention is not to block on this call, make sure you use an async setTimeout.
     */
    MySiteWebPartCacheDataProvider.prototype._updateCache = function (webPartInstanceId, webPartAlias, result, hash, id) {
        var _this = this;
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["Validate"].isNonemptyString(webPartInstanceId, 'webPartInstanceId');
        var cacheKey = webPartInstanceId;
        var qosSuffix = "_updateCache";
        var qosMonitor = new _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__["_QosMonitor"](QOS_PREFIX + qosSuffix);
        // We update the error tag as we enter each chained Promise.
        var qosUpdateCacheError = "UnknownError";
        var cachedWebPart = this._getCachedItem(cacheKey);
        var isNoOp = cachedWebPart && cachedWebPart.hash === hash && cachedWebPart.result === result;
        if (isNoOp) {
            qosUpdateCacheError = 'NoOp';
            qosMonitor.writeExpectedFailure(qosUpdateCacheError, 
            /*ex*/ undefined, this.getWebPartIdLogObject(webPartAlias, webPartInstanceId));
            return;
        }
        try {
            var createOrUpdatePromise = void 0;
            // If the map contains a local cache entry, we update the server cache item.
            if (this._cacheItemsMap.has(cacheKey)) {
                _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__["_TraceLogger"].logVerbose(MySiteWebPartCacheDataProvider._logSource, "Updating Cache Item " + cacheKey + ".");
                qosUpdateCacheError = "UpdateCacheItemError";
                if (id === undefined) {
                    id = this._getCachedItem(cacheKey).id;
                }
                createOrUpdatePromise = this._updateRemoteCacheItem(cacheKey, result, hash, id);
                // Else this must be a new entry, create the server cache item.
            }
            else {
                _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__["_TraceLogger"].logVerbose(MySiteWebPartCacheDataProvider._logSource, "Creating Cache Item " + cacheKey + ".");
                qosUpdateCacheError = "CreateCacheItemError";
                createOrUpdatePromise = this._createRemoteCacheItem(cacheKey, result, hash);
            }
            createOrUpdatePromise
                .then(function () {
                qosMonitor.writeSuccess(_this.getWebPartIdLogObject(webPartAlias, webPartInstanceId));
            })
                .catch(function (error) {
                _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__["_TraceLogger"].logError(MySiteWebPartCacheDataProvider._logSource, error, 
                /* tslint:disable-next-line:max-line-length */
                "_updateCache: " + qosUpdateCacheError + " WebPart: " + webPartInstanceId + " Page: " + _this._currentPageCacheFolderKey);
                qosMonitor.writeUnexpectedFailure(qosUpdateCacheError, error, _this.getWebPartIdLogObject(webPartAlias, webPartInstanceId));
            });
        }
        catch (error) {
            qosMonitor.writeUnexpectedFailure(qosUpdateCacheError, error, this.getWebPartIdLogObject(webPartAlias, webPartInstanceId));
        }
    };
    /**
     * Update the cache without throwing an exception.
     */
    MySiteWebPartCacheDataProvider.prototype._tryUpdateCache = function (webPartInstanceId, webPartAlias, result, hash, id) {
        try {
            this._updateCache(webPartInstanceId, webPartAlias, result, hash, id);
        }
        catch (error) {
            _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__["_TraceLogger"].logError(MySiteWebPartCacheDataProvider._logSource, error, "getWebPartData: error while processing item " + webPartInstanceId + ".");
        }
    };
    /**
     * Adds an item (i.e., from the server API creation response) to the client cache map.
     */
    MySiteWebPartCacheDataProvider.prototype._createLocalCacheItemFromServerResponse = function (response) {
        var _this = this;
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["Validate"].isNotNullOrUndefined(response, 'response');
        var qosSuffix = "_createCacheItemInMap";
        var qosMonitor = new _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__["_QosMonitor"](QOS_PREFIX + qosSuffix);
        var qosCreateCacheItemMapError = "UnknownError";
        var cacheItemKey;
        return (response
            .json()
            // tslint:disable-next-line:no-any
            .then(function (data) {
            _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["Validate"].isNotNullOrUndefined(data, 'data');
            _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["Validate"].isNotNullOrUndefined(data.value, 'data.value');
            var altTitle;
            var cacheItemId;
            var cacheItemHash;
            var cacheItemVersion;
            var cacheItemResult;
            var fieldName;
            var fieldValue;
            var cacheItemModified = _MySiteWebPartCacheHelper__WEBPACK_IMPORTED_MODULE_9__["MySiteWebPartCacheHelper"].getDateNowAsUTC();
            // Parse Create and Update responses.
            qosCreateCacheItemMapError = "ResponseParseError";
            Object.keys(data.value).forEach(function (key) {
                fieldName = data.value[key][FIELDNAME];
                fieldValue = data.value[key][FIELDVALUE];
                switch (fieldName) {
                    // These cases are only in the create response.
                    case SPBUILTINFIELDID_ID:
                        cacheItemId = +fieldValue;
                        break;
                    case SPBUILTINFIELDID_TITLE:
                        cacheItemKey = fieldValue;
                        break;
                    case SPBUILTINFIELDID_ALT_TITLE:
                        altTitle = fieldValue;
                        break;
                    case SPHOMECACHELIST_HASHCODE_FIELDNAME:
                        cacheItemHash = fieldValue;
                        break;
                    case SPHOMECACHELIST_CACHEVERSION_FIELDNAME:
                        cacheItemVersion = fieldValue;
                        break;
                    case SPHOMECACHELIST_VALUE_FIELDNAME:
                        cacheItemResult = fieldValue;
                        break;
                    default:
                        break;
                }
            });
            qosCreateCacheItemMapError = "CreateCacheItemMapError";
            if (!_this._cacheItemsMap.has(cacheItemKey)) {
                // Add a new item from an item creation response.
                var cacheItem = {
                    webPartInstanceId: cacheItemKey,
                    result: cacheItemResult,
                    hash: cacheItemHash,
                    id: cacheItemId,
                    modified: cacheItemModified,
                    cacheVersion: cacheItemVersion
                };
                if (cacheItem.cacheVersion === TIERED_DISABLED_CACHE_VERSION ||
                    cacheItem.cacheVersion === TIERED_CACHE_VERSION) {
                    cacheItem.webPartInstanceId = altTitle;
                    _this._cacheItemVersionMap.set(altTitle, cacheItem.cacheVersion);
                    _this._cacheItemsMap.set(altTitle, cacheItem);
                }
                else {
                    _this._cacheItemVersionMap.set(cacheItemKey, cacheItem.cacheVersion);
                    _this._cacheItemsMap.set(cacheItemKey, cacheItem);
                }
            }
            _this._logCacheItemSize();
            qosMonitor.writeSuccess();
            return response;
        })
            .catch(function (error) {
            _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__["_TraceLogger"].logError(MySiteWebPartCacheDataProvider._logSource, error, "_createCacheItemInMap: error client caching response for WebPart: " + cacheItemKey);
            qosMonitor.writeUnexpectedFailure(qosCreateCacheItemMapError, error);
            return Promise.resolve(undefined);
        }));
    };
    MySiteWebPartCacheDataProvider.prototype._getListRelativeFolderPath = function () {
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["Validate"].isNonemptyString(this._webPartCachePath, 'this._webPartCachePath');
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["Validate"].isNonemptyString(this._currentPageCacheFolderKey, 'this._currentPageCacheFolderKey');
        var webPartCacheFolderName = _MySiteWebPartCacheHelper__WEBPACK_IMPORTED_MODULE_9__["MySiteWebPartCacheHelper"].getUrlLastSegment(this._webPartCachePath);
        return _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_7__["Uri"].concatenate(webPartCacheFolderName, this._currentPageCacheFolderKey);
    };
    MySiteWebPartCacheDataProvider.prototype._createLocalItems = function (items) {
        var _this = this;
        items.forEach(function (item) {
            if (!_this._cacheItemsMap.has(item.CacheKey)) {
                // Add a new item from an item creation response.
                var newCacheItem = {
                    webPartInstanceId: item.CacheKey,
                    result: item.CacheValue,
                    hash: item.CacheValueHash,
                    id: item.ListItemId,
                    modified: item.ModifiedTimeUtc,
                    cacheVersion: item.CacheVersion
                };
                _this._cacheItemsMap.set(item.CacheKey, newCacheItem);
            }
        });
        this._logCacheItemSize();
    };
    MySiteWebPartCacheDataProvider.prototype._updateLocalItems = function (items) {
        var _this = this;
        items.forEach(function (item) {
            if (_this._cacheItemsMap.has(item.CacheKey)) {
                var existingCacheItem = _this._getCachedItem(item.CacheKey);
                existingCacheItem.result = item.CacheValue;
                existingCacheItem.hash = item.CacheValueHash;
                existingCacheItem.cacheVersion = item.CacheVersion;
            }
        });
        this._logCacheItemSize();
    };
    MySiteWebPartCacheDataProvider.prototype._logCacheItemSize = function () {
        _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__["_TraceLogger"].logVerbose(MySiteWebPartCacheDataProvider._logSource, "_cacheItemsMap Size: " + this._cacheItemsMap.size + ".");
    };
    MySiteWebPartCacheDataProvider.prototype._captureCacheKeyUsageTelemetry = function (webPartAlias, configHash) {
        var qosMonitor = new _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__["_QosMonitor"]("MySiteWebPartCacheConfigHash");
        qosMonitor.writeSuccess({
            alias: webPartAlias,
            id: this._currentPageCacheFolderKey,
            instanceId: configHash
        });
    };
    MySiteWebPartCacheDataProvider.prototype._logCacheStart = function (webPartInstanceId, webPartTag, eventName) {
        _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__["_TraceLogger"].logVerbose(MySiteWebPartCacheDataProvider._logSource, "WebPart: " + webPartInstanceId + ", Page: " + this._currentPageCacheFolderKey + ", Environment: " + _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["Environment"].type + ".");
        _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__["_EngagementLogger"].logEvent(eventName);
        _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_8__["_PerformanceLogger"].markComponent(webPartTag, 'CacheStart');
    };
    MySiteWebPartCacheDataProvider.prototype._logConfigMismatch = function (webPartTag, cachedData, isConfigMatch) {
        if (!cachedData) {
            _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__["_TraceLogger"].logVerbose(MySiteWebPartCacheDataProvider._logSource, "Cached data not found for " + webPartTag);
            _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_8__["_PerformanceLogger"].markComponent(webPartTag, 'CachedWebPartNotFound');
        }
        else if (!isConfigMatch) {
            _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__["_TraceLogger"].logVerbose(MySiteWebPartCacheDataProvider._logSource, "Cache config mismatch for " + webPartTag);
            _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_8__["_PerformanceLogger"].markComponent(webPartTag, 'CacheMissConfigMismatch');
        }
    };
    MySiteWebPartCacheDataProvider.prototype._logCacheHit = function (webPartTag) {
        this._setLKGOnTimeState(true, 'true');
        _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__["_TraceLogger"].logVerbose(MySiteWebPartCacheDataProvider._logSource, "CacheHit: Returning cached item for " + webPartTag + ".");
        _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_8__["_PerformanceLogger"].markComponent(webPartTag, 'CacheHit');
    };
    MySiteWebPartCacheDataProvider.prototype._logCacheExpired = function (webPartTag) {
        this._setLKGOnTimeState(true, 'stale');
        _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__["_TraceLogger"].logVerbose(MySiteWebPartCacheDataProvider._logSource, "Requested cached item for " + webPartTag + " exists but is expired.");
        _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_8__["_PerformanceLogger"].markComponent(webPartTag, 'CacheExpired');
        this._logCacheMiss(webPartTag);
    };
    MySiteWebPartCacheDataProvider.prototype._logCacheMiss = function (webPartTag) {
        this._setLKGOnTimeState(false, 'false');
        _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__["_TraceLogger"].logVerbose(MySiteWebPartCacheDataProvider._logSource, "Cache Miss for " + webPartTag);
        _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__["_EngagementLogger"].logEvent('MySiteWebPartCacheDataProvider.CacheMiss');
        _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_8__["_PerformanceLogger"].markComponent(webPartTag, 'CacheMiss');
    };
    MySiteWebPartCacheDataProvider.prototype._logLateFlush = function (webPartTag) {
        this._setLKGOnTimeState(false, 'false');
        _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__["_TraceLogger"].logVerbose(MySiteWebPartCacheDataProvider._logSource, "Racing between late flush and data fetch for " + webPartTag);
        _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_8__["_PerformanceLogger"].markComponent(webPartTag, 'LateFlush');
    };
    MySiteWebPartCacheDataProvider.prototype._setLKGOnTimeState = function (onTime, state) {
        if (this._cacheOnTime === undefined) {
            this._cacheOnTime = onTime;
            _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_8__["_PerformanceLogger"].setPerformanceProperty(LKG_ON_TIME, state);
        }
    };
    MySiteWebPartCacheDataProvider.prototype._logSmartRaceError = function (error) {
        _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__["_TraceLogger"].logError(MySiteWebPartCacheDataProvider._logSource, error);
    };
    MySiteWebPartCacheDataProvider.prototype._isMySiteCacheSmartRaceRefactorEnabled = function () {
        return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["_SPFlight"].isEnabled(WEX_MY_SITE_CACHE_SMART_RACE);
    };
    MySiteWebPartCacheDataProvider.prototype._isThrottlingEnabled = function () {
        return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["_SPFlight"].isEnabled(NO_UPDATED_WRITEBACK_FLIGHT);
    };
    MySiteWebPartCacheDataProvider.prototype._shouldRequestServerDataWhenThrottling = function (cacheWebPartMofidiedDate) {
        var isThrottled = this._isThrottlingEnabled();
        if (!isThrottled || // Call for fresh data if throttling is OFF (as usual)
            // Throttled where cached hit without expiry age is beyond fallback mage age
            (isThrottled &&
                _MySiteWebPartCacheHelper__WEBPACK_IMPORTED_MODULE_9__["MySiteWebPartCacheHelper"].isExpired(this._utcTimeStamp, cacheWebPartMofidiedDate, LOW_PRESSURE_NO_EXPIRY_MAX_AGE_IN_S))) {
            return true;
        }
        return false;
    };
    MySiteWebPartCacheDataProvider.prototype._getThrottledServerCall = function (requestData) {
        var _this = this;
        var requestDataCore = requestData;
        return function () {
            return new Promise(function (resolve, reject) {
                _this._async.setTimeout(function () {
                    requestDataCore()
                        .then(function (result) { return resolve(result); })
                        .catch(function (e) { return reject(e); });
                }, SERVICE_PRESSURE_REFRESH_TIMEOUT_MS);
            }); // end of timed out promise
        }; // end of redefinition
    };
    MySiteWebPartCacheDataProvider._itemsToDeferUpdate = new Map();
    MySiteWebPartCacheDataProvider._logSource = _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__["_LogSource"].create('MySiteWebPartCacheDataProvider');
    return MySiteWebPartCacheDataProvider;
}());



/***/ }),

/***/ "8Y2T":
/*!**********************************************!*\
  !*** ./lib/lessText/LessText.module.scss.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* tslint:disable */
__webpack_require__(/*! ./LessText.module.css */ "WMj5");
var styles = {
    lessText: 'a_a_658c9e0a'
};
/* harmony default export */ __webpack_exports__["default"] = (styles);
/* tslint:enable */ 


/***/ }),

/***/ "9mLi":
/*!*******************************!*\
  !*** ./lib/WebViewUtility.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__);

/**
 * Utility related to native app rendering which uses WebView.
 * Currently the main purpose is to help deal with link interception when
 * layouts do not use anchor tags for their links.
 */
var WebViewUtility = /** @class */ (function () {
    function WebViewUtility() {
    }
    WebViewUtility.getOpenDocumentAction = function (url) {
        if (!url || !_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_BrowserUtilities"].isWebViewHosted()) {
            return undefined;
        }
        return JSON.stringify({
            key: WebViewUtility.documentKey,
            args: {
                command: WebViewUtility.documentCommand,
                url: url,
                version: '1.0'
            }
        });
    };
    Object.defineProperty(WebViewUtility, "webViewActionRole", {
        get: function () {
            if (_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPFlight"].isEnabled(1374 /* SPTeamsLinkInterception */)) {
                return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_BrowserUtilities"].isWebViewHosted() && !_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_BrowserUtilities"].isTeamsWebViewHosted()
                    ? 'button'
                    : undefined;
            }
            else {
                return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_BrowserUtilities"].isWebViewHosted() ? 'button' : undefined;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WebViewUtility, "documentKey", {
        get: function () {
            return 'openDocument';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WebViewUtility, "documentCommand", {
        get: function () {
            return 'sitePageUserAction';
        },
        enumerable: true,
        configurable: true
    });
    return WebViewUtility;
}());
/* harmony default export */ __webpack_exports__["default"] = (WebViewUtility);


/***/ }),

/***/ "Apzv":
/*!************************************************************!*\
  !*** ./lib/mySiteWebPartCache/MySiteWebPartCacheHelper.js ***!
  \************************************************************/
/*! exports provided: MySiteWebPartCacheHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MySiteWebPartCacheHelper", function() { return MySiteWebPartCacheHelper; });
/* harmony import */ var _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ms/odsp-utilities-bundle */ "y88i");
/* harmony import */ var _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Flights__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Flights */ "dVDx");
/* harmony import */ var _microsoft_sp_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @microsoft/sp-http */ "vlQI");
/* harmony import */ var _microsoft_sp_http__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_http__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ms/sp-component-utilities */ "hiL/");
/* harmony import */ var _ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_4__);
/**
 * @file MySiteWebPartCacheHelper.ts
 * @copyright Microsoft Corporation. All rights reserved.
 *
 * @remark Helper class for the MySiteWebPartCache.
 */





var RESOURCEPATH_ENTITYTYPE = "SP.ResourcePath";
// REST API Segments
var FOLDERS_ADDSUBFOLDER_API_SEGMENT = "/AddSubFolder(@subfolderTitle)";
var REMOTEWEB_API_ENDPOINT = "/_api/SP.RemoteWeb(@remoteWeb)";
var PERSONALCACHE_API_ENDPOINT = "/_api/SP.UserProfiles.PersonalCache";
var WEB_GETFOLDERBYSERVERRELATIVEPATH_API_SEGMENT = "/Web/GetFolderByServerRelativePath(DecodedUrl=@parentFolderRelativeUrl)";
var READCACHEORCREATE = "/ReadCacheOrCreate";
var WRITECACHE = "/WriteCache";
var DELETECACHE = "/DeleteCacheItemsAsync";
var READCACHEORCREATE2 = "/ReadCacheOrCreate2";
var WRITECACHE2 = "/WriteCache2";
var DELETECACHE2 = "/DeleteCacheItemsAsync2";
var MySiteWebPartCacheHelper = /** @class */ (function () {
    function MySiteWebPartCacheHelper() {
    }
    /**
     * Creates a REST url for creating a subfolder at the specified Remote folder location.
     *
     * @param currentWebAbsoluteUrl - Absolute web url of the current context.
     * @param remoteWebAbsoluteUrl - Absolute web url of the target remote web.
     * @param remoteParentFolderRelativeUrl - Relative url of the folder to create the subfolder in.
     * @param remoteFolderName - Title of the remote subfolder to be created.
     *
     * @returns - REST url and query string to create a subfolder at a Remote folder location.
     */
    MySiteWebPartCacheHelper.getRemoteSubfolderCreateUrl = function (currentWebAbsoluteUrl, remoteWebAbsoluteUrl, remoteParentFolderRelativeUrl, remoteFolderName) {
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["Validate"].isNonemptyString(currentWebAbsoluteUrl, 'currentWebAbsoluteUrl');
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["Validate"].isNonemptyString(remoteWebAbsoluteUrl, 'remoteWebAbsoluteUrl');
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["Validate"].isNonemptyString(remoteParentFolderRelativeUrl, 'remoteParentFolderRelativeUrl');
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["Validate"].isNonemptyString(remoteFolderName, 'remoteFolderName');
        var encodedRemoteWebAbsoluteUrl = _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_0__["UriEncoding"].encodeRestUriStringToken(remoteWebAbsoluteUrl);
        var encodedRemoteParentFolderRelativeUrl = _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_0__["UriEncoding"].encodeRestUriStringToken(remoteParentFolderRelativeUrl);
        var encodedRemoteFolderName = _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_0__["UriEncoding"].encodeRestUriStringToken(remoteFolderName);
        var url = _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_0__["Uri"].concatenate(_ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_0__["Uri"].concatenate(_ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_0__["Uri"].concatenate(currentWebAbsoluteUrl, REMOTEWEB_API_ENDPOINT), WEB_GETFOLDERBYSERVERRELATIVEPATH_API_SEGMENT), FOLDERS_ADDSUBFOLDER_API_SEGMENT) +
            ("?@remoteWeb='" + encodedRemoteWebAbsoluteUrl + "'") +
            ("&@parentFolderRelativeUrl='" + encodedRemoteParentFolderRelativeUrl + "'") +
            ("&@subfolderTitle='" + encodedRemoteFolderName + "'");
        return url;
    };
    /**
     * Retrieves the last uri segment.
     *
     * @param url - The target url.
     *
     * @returns - The last segment of the given url.
     */
    MySiteWebPartCacheHelper.getUrlLastSegment = function (url) {
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["Validate"].isNonemptyString(url, 'url');
        var uri = new _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_0__["Uri"](url);
        return uri.getLastPathSegment();
    };
    /**
     * Retrieves the url, minus the last segment.
     *
     * @param url - The target url.
     *
     * @returns - The url, minus the last segment.
     */
    MySiteWebPartCacheHelper.getUrlWithoutLastSegment = function (url) {
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["Validate"].isNonemptyString(url, 'url');
        var lastSlashIndex = url.lastIndexOf('/');
        var urlWithoutLastSegment = lastSlashIndex > -1 ? url.substring(0, lastSlashIndex) : url;
        return urlWithoutLastSegment;
    };
    /**
     * Creates a REST url for creating PersonalCacheItems.
     *
     * @param currentWebAbsoluteUrl - Absolute web url of the current context.
     *
     * @returns - REST url to create PersonalCacheItems.
     */
    MySiteWebPartCacheHelper.getPersonalCacheItemCreateUrl = function (currentWebAbsoluteUrl) {
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["Validate"].isNonemptyString(currentWebAbsoluteUrl, 'currentWebAbsoluteUrl');
        var endPoint = Object(_Flights__WEBPACK_IMPORTED_MODULE_2__["isPersonalCacheFlightEnabled"])() ? READCACHEORCREATE2 : READCACHEORCREATE;
        var url = _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_0__["Uri"].concatenate(_ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_0__["Uri"].concatenate(currentWebAbsoluteUrl, PERSONALCACHE_API_ENDPOINT), endPoint);
        return url;
    };
    /**
     * Creates a REST url for updating PersonalCacheItems.
     *
     * @param currentWebAbsoluteUrl - Absolute web url of the current context.
     *
     * @returns - REST url to update PersonalCacheItems.
     */
    MySiteWebPartCacheHelper.getPersonalCacheItemUpdateUrl = function (currentWebAbsoluteUrl) {
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["Validate"].isNonemptyString(currentWebAbsoluteUrl, 'currentWebAbsoluteUrl');
        var endPoint = Object(_Flights__WEBPACK_IMPORTED_MODULE_2__["isPersonalCacheFlightEnabled"])() ? WRITECACHE2 : WRITECACHE;
        var url = _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_0__["Uri"].concatenate(_ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_0__["Uri"].concatenate(currentWebAbsoluteUrl, PERSONALCACHE_API_ENDPOINT), endPoint);
        return url;
    };
    /**
     * Creates a REST url for deleting PersonalCacheItems.
     *
     * @param currentWebAbsoluteUrl - Absolute web url of the current context.
     *
     * @returns - REST url to update PersonalCacheItems.
     */
    MySiteWebPartCacheHelper.getPersonalCacheItemDeleteUrl = function (currentWebAbsoluteUrl) {
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["Validate"].isNonemptyString(currentWebAbsoluteUrl, 'currentWebAbsoluteUrl');
        var endPoint = Object(_Flights__WEBPACK_IMPORTED_MODULE_2__["isPersonalCacheFlightEnabled"])() ? DELETECACHE2 : DELETECACHE;
        var url = _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_0__["Uri"].concatenate(_ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_0__["Uri"].concatenate(currentWebAbsoluteUrl, PERSONALCACHE_API_ENDPOINT), endPoint);
        return url;
    };
    /**
     * Convert date string format like 2016-08-24T23:13:18.97-07:00 to Date object.
     *
     * @param dateTime - A date string like 2016-08-24T23:13:18.97-07:00
     *
     * @returns - A Date object with the datetime of the input string.
     */
    MySiteWebPartCacheHelper.dateTimeStringToJsDate = function (dateTime) {
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["Validate"].isNonemptyString(dateTime, 'dateTime');
        var timeValues = dateTime.split(/[^0-9]/);
        if (timeValues.length < 6) {
            return; // error
        }
        else {
            return new Date(Date.UTC(Number(timeValues[0]), Number(timeValues[1]) - 1, Number(timeValues[2]), Number(timeValues[3]), Number(timeValues[4]), Number(timeValues[5])));
        }
    };
    /**
     * Checks the status of a response and resolves/rejects the Promise.
     *
     * @param Response - The response to check.
     *
     * @returns - A resolved/rejected Promise object.
     */
    MySiteWebPartCacheHelper.checkStatus = function (response) {
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["Validate"].isNotNullOrUndefined(response, 'response');
        if (response.status >= 200 && response.status < 300) {
            return Promise.resolve(response);
        }
        else {
            return Promise.reject(new Error(JSON.stringify(response)));
        }
    };
    /**
     * Checks the status of a response and resolves/rejects the Promise.
     * Note: Because of a folder creation bug, 500 is a valid response.
     *
     * @param Response - The response to check.
     *
     * @returns - A resolved/rejected Promise object.
     */
    MySiteWebPartCacheHelper.checkFolderStatus = function (response) {
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["Validate"].isNotNullOrUndefined(response, 'response');
        if ((response.status >= 200 && response.status < 300) || response.status === 500) {
            return Promise.resolve(response);
        }
        else {
            return Promise.reject(new Error(JSON.stringify(response)));
        }
    };
    /**
     * Creates a JSON body for creating PersonalCacheItems.
     *
     * @param listRelativeFolderPath - Web relative folder path for the cache item.
     * @param items - The PersonalCacheItems to be created.
     *
     * @returns - JSON body for creating PersonalCacheItems.
     */
    MySiteWebPartCacheHelper.getCreatePersonalCacheItemBody = function (listRelativeFolderPath, items, mySiteUrl) {
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["Validate"].isNonemptyString(listRelativeFolderPath, 'listRelativeFolderPath');
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["Validate"].isNotNullOrUndefined(items, 'items');
        var requiredItems = "";
        items.forEach(function (item) {
            if (requiredItems !== "") {
                requiredItems = requiredItems + ", ";
            }
            requiredItems = requiredItems + item.CacheKey;
        });
        var body = {
            folderPath: {
                __metadata: {
                    type: "" + RESOURCEPATH_ENTITYTYPE
                },
                DecodedUrl: "" + listRelativeFolderPath
            },
            requiredCacheKeys: ["" + requiredItems],
            createIfMissing: true
        };
        if (mySiteUrl && Object(_Flights__WEBPACK_IMPORTED_MODULE_2__["isPersonalCacheFlightEnabled"])()) {
            var key = 'mySiteUrl';
            body[key] = mySiteUrl;
        }
        return body;
    };
    /**
     * Creates a JSON body for creating PersonalCacheItems.
     *
     * @param listRelativeFolderPath - Web relative folder path for the cache item.
     * @param items - The PersonalCacheItems to be created.
     *
     * @returns - JSON body for creating PersonalCacheItems.
     */
    MySiteWebPartCacheHelper.getReadPersonalCacheItemBody = function (listRelativeFolderPath, instanceIds, mySiteUrl) {
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["Validate"].isNonemptyString(listRelativeFolderPath, 'listRelativeFolderPath');
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["Validate"].isNotNullOrUndefined(instanceIds, 'instanceIds');
        var body = {
            folderPath: {
                __metadata: {
                    type: "" + RESOURCEPATH_ENTITYTYPE
                },
                DecodedUrl: "" + listRelativeFolderPath
            },
            requiredCacheKeys: instanceIds,
            createIfMissing: false
        };
        if (mySiteUrl && Object(_Flights__WEBPACK_IMPORTED_MODULE_2__["isPersonalCacheFlightEnabled"])()) {
            var key = 'mySiteUrl';
            body[key] = mySiteUrl;
        }
        return body;
    };
    /**
     * Creates a JSON body for updating PersonalCacheItems.
     *
     * @param items - Value of the result to be cached.
     *
     * @returns - JSON body for updating PersonalCacheItems.
     */
    MySiteWebPartCacheHelper.getUpdatePersonalCacheItemsBody = function (items, mySiteUrl, isDelete) {
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["Validate"].isNotNullOrUndefined(items, 'items');
        // tslint:disable-next-line:no-any
        var body = { cacheItems: [] };
        items.forEach(function (item) {
            if (isDelete) {
                item.CacheValue = ''; // clear to avoid hitting CSOM size limit
            }
            body.cacheItems.push(item);
        });
        if (mySiteUrl && Object(_Flights__WEBPACK_IMPORTED_MODULE_2__["isPersonalCacheFlightEnabled"])()) {
            var key = 'mySiteUrl';
            body[key] = mySiteUrl;
        }
        return body;
    };
    /**
     * Posts to SPHTTPClient
     *
     * @param spHttpClient - The SPHttpClient object to post with.
     * @param url - The url to post to.
     * @param body - The body to post with.
     *
     * @returns - JSON body for updating a WebPart Cache Item.
     */
    MySiteWebPartCacheHelper.post = function (spHttpClient, url, body, checkStatusFunction) {
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["Validate"].isNotNullOrUndefined(spHttpClient, 'spHttpClient');
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["Validate"].isNonemptyString(url, 'url');
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["Validate"].isNotNullOrUndefined(body, 'body');
        return spHttpClient
            .post(url, _microsoft_sp_http__WEBPACK_IMPORTED_MODULE_3__["SPHttpClient"].configurations.v1, {
            body: JSON.stringify(body),
            headers: { 'OData-Version': '3.0' } // we will convert to 4 when there are docs with examples :)
        })
            .then(checkStatusFunction);
    };
    /**
     * Create an MD5 hash from an input string.
     *
     * @param stringTohash - The string to hash.
     *
     * @returns - A hashed string.
     */
    MySiteWebPartCacheHelper.generateHash = function (stringToHash) {
        return Object(_ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_4__["Md5Hash"])(stringToHash);
    };
    /**
     * Create an UTC Date object (time -> Now).
     *
     * @returns - A UTC Date object.
     */
    MySiteWebPartCacheHelper.getDateNowAsUTC = function () {
        var date = new Date();
        return new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds()));
    };
    /**
     * Get a Date with seconds added.
     *
     * @param date - The Date to add seconds to.
     * @param seconds - The seconds to add to the Date.
     *
     * @returns - A Date with seconds added.
     */
    MySiteWebPartCacheHelper.addSecondsToDate = function (date, seconds) {
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["Validate"].isNotNullOrUndefined(date, 'date');
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["Validate"].isNotNullOrUndefined(seconds, 'seconds');
        var datePlusSeconds = new Date(date.toString());
        datePlusSeconds.setTime(datePlusSeconds.getTime() + seconds * 1000);
        return datePlusSeconds;
    };
    /**
     * Compare a date with a date plus seconds added.
     *
     * @param referenceDate - The Date to add seconds to.
     * @param dateToCompare - The Date to compare to reference you will add seconds to.
     * @param secondsToAdd - A number of seconds to add to dateToCompare.
     *
     * @returns - True (boolean) if the referenceDate is greater than the dateToCompare plus secondsToAdd.
     */
    MySiteWebPartCacheHelper.isExpired = function (referenceDate, dateToCompare, secondsToAdd) {
        return (referenceDate &&
            dateToCompare &&
            secondsToAdd &&
            secondsToAdd > 0 &&
            referenceDate > MySiteWebPartCacheHelper.addSecondsToDate(dateToCompare, secondsToAdd));
    };
    return MySiteWebPartCacheHelper;
}());



/***/ }),

/***/ "Ar4x":
/*!**********************************************!*\
  !*** ./lib/captionElement/CaptionElement.js ***!
  \**********************************************/
/*! exports provided: CaptionElementType, CaptionElementAlignPosition, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CaptionElementType", function() { return CaptionElementType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CaptionElementAlignPosition", function() { return CaptionElementAlignPosition; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @microsoft/office-ui-fabric-react-bundle */ "KL1q");
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @microsoft/sp-diagnostics */ "ut3N");
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @microsoft/sp-lodash-subset */ "Pk8u");
/* harmony import */ var _microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ms/sp-telemetry */ "2q6Q");
/* harmony import */ var _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _fluentScope_FluentScope__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../fluentScope/FluentScope */ "edZz");
/* harmony import */ var _loaders_CaptionElementEditLoader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../loaders/CaptionElementEditLoader */ "S6GZ");
/* harmony import */ var _CaptionElement_module_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./CaptionElement.module.scss */ "70g6");
/* harmony import */ var _CaptionElement_styles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./CaptionElement.styles */ "Q1Rn");
/* harmony import */ var _baseCollectionWebPart_BaseCollectionKillSwitches__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../baseCollectionWebPart/BaseCollectionKillSwitches */ "pDlU");











// tslint:disable-next-line:typedef variable-name
var CaptionElementType = { Caption: 1, Title: 2 };
// tslint:disable-next-line:typedef variable-name
var CaptionElementAlignPosition = { PageDirection: 1, Center: 2 };
/**
 * Caption for various content webparts.
 * NOTE: Only display if the content has been selected!
 *
 * @todo: Consider making this component generic, something like 'EditableTextSpan'. Rather than
 *        building in text styles specifically for captions and web part titles, those styles could be
 *        set by the parent using the className prop. Then this could be used in more places.
 */
var CaptionElement = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(CaptionElement, _super);
    function CaptionElement(props) {
        var _this = _super.call(this, props) || this;
        _this._handleChange = function (ev) {
            var newText = ev.target.value;
            _this.setState({ text: newText }, function () {
                if (_this.props.onChange) {
                    _this.props.onChange(newText, ev);
                }
            });
        };
        _this._handleFocus = function () {
            /**
             * Record the initial text content when focus entered text field.
             * It is used in blur event handler to compare the content.
             */
            if (_this.props.moduleName && _this.props.isEditMode) {
                _this._initialValue = _this.state.text;
            }
        };
        _this._handleBlur = function () {
            /**
             * Scenario name:
             * 1. Number of time caption element is entered in edit mode.
             * 2. Distribution of character number added in caption element after one edition.
             * 3. Type of edition user take. E.g. Clear, Add or Edit content.
             *    Clear - reset the content of caption element to initial/unset state.
             *    Add - change from initial/unset state to customized content. (first edit)
             *    Edit - any edition that changes the content apart from add and clear
             * Signal: Log the value of text area when focus goes out. Seen it as user finished edit.
             * It will not be logged if user doesn't make change.
             */
            if (_this.props.moduleName && _this.props.isEditMode) {
                var action = void 0;
                var currentText = _this.state.text;
                if (_this._initialValue !== currentText) {
                    if (currentText.length === 0) {
                        action = 'Clear';
                    }
                    else if (_this._initialValue.length === 0) {
                        action = 'Add';
                    }
                    else {
                        action = 'Edit';
                    }
                    _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_5__["_EngagementLogger"].logEventWithLogEntry(new _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_3__["_LogEntry"](_this.props.moduleName, 'CaptionElement', _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_3__["_LogType"].Event, {
                        action: action,
                        length: currentText.length.toString()
                    }));
                }
            }
        };
        _this.state = {
            text: props.text
        };
        return _this;
    }
    CaptionElement.prototype.UNSAFE_componentWillReceiveProps = function (nextProps) {
        this.setState({ text: nextProps.text });
    };
    CaptionElement.prototype.render = function () {
        var _a, _b, _c, _d, _e, _f, _g;
        var captionElementMarginBottomClassName = Object(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_2__["css"])((_a = {},
            _a[_CaptionElement_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].captionElement__NoMargin] = !this.props.marginBottomSize || this.props.marginBottomSize === 'None',
            _a), (_b = {}, _b[_CaptionElement_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].captionElement__MiddleMargin] = this.props.marginBottomSize === 'Middle', _b), (_c = {}, _c[_CaptionElement_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].captionElement__LargeMargin] = this.props.marginBottomSize === 'Large', _c));
        var captionElementTypeClassName = Object(_fluentScope_FluentScope__WEBPACK_IMPORTED_MODULE_6__["isFluentEnabledFor"])('WebPartChrome')
            ? Object(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_2__["mergeStyles"])(this.props.type === CaptionElementType.Caption && _CaptionElement_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].captionElement__caption, this.props.type === CaptionElementType.Title && _CaptionElement_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].captionElement__title, _CaptionElement_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].fluent, this.props.type === CaptionElementType.Title && Object(_CaptionElement_styles__WEBPACK_IMPORTED_MODULE_9__["getFluentStyles"])({ theme: Object(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_2__["getTheme"])() }).title)
            : Object(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_2__["css"])((_d = {}, _d[_CaptionElement_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].captionElement__caption] = this.props.type === CaptionElementType.Caption, _d), (_e = {}, _e[_CaptionElement_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].captionElement__title] = this.props.type === CaptionElementType.Title, _e));
        var captionElementAlignPositionClassName = Object(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_2__["css"])((_f = {},
            _f[_CaptionElement_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].captionElement__leftAlign] = this.props.alignPosition === CaptionElementAlignPosition.PageDirection,
            _f), (_g = {},
            _g[_CaptionElement_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].captionElement__centerAlign] = this.props.alignPosition === CaptionElementAlignPosition.Center,
            _g));
        var captionElementTitleBreakInLinesClassName = _CaptionElement_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].titleBreakInLines;
        var captionElementClassName = Object(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_2__["css"])(captionElementMarginBottomClassName, captionElementTypeClassName, captionElementAlignPositionClassName, captionElementTitleBreakInLinesClassName, this.props.className);
        var content = this.props.isEditMode &&
            (_baseCollectionWebPart_BaseCollectionKillSwitches__WEBPACK_IMPORTED_MODULE_10__["default"].topicPageTitleNotEditableEditMode.isActivated() ||
                this.props.isTitleEditable !== false)
            ? this._renderEditMode
            : this._renderViewMode;
        if (this.props.useFigCaptionTag) {
            return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("figcaption", { className: captionElementClassName, "data-automation-id": 'captionElement' }, content));
        }
        else {
            return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: captionElementClassName, "data-automation-id": 'captionElement' }, content));
        }
    };
    CaptionElement.prototype.value = function () {
        return this.state.text;
    };
    CaptionElement.prototype.focusOnCaptionElement = function () {
        if (this._textarea) {
            this._textarea.focus();
        }
    };
    Object.defineProperty(CaptionElement.prototype, "_renderEditMode", {
        /**
         * Render an editable text area.
         */
        get: function () {
            return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_loaders_CaptionElementEditLoader__WEBPACK_IMPORTED_MODULE_7__["CaptionElementEditLoader"], { handleChange: this._handleChange, placeholder: this.props.placeholder, text: this.state.text, handleFocus: this._handleFocus, handleBlur: this._handleBlur, type: CaptionElementType.Title }));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CaptionElement.prototype, "_renderViewMode", {
        /**
         * Render a read-only text span.
         */
        get: function () {
            var headingLevel = this.props.headingLevel;
            return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", { role: headingLevel && 'heading', "aria-level": headingLevel }, this.state.text));
        },
        enumerable: true,
        configurable: true
    });
    CaptionElement.defaultProps = {
        isEditMode: false,
        text: undefined,
        onChange: _microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_4__["noop"],
        placeholder: undefined,
        type: CaptionElementType.Caption,
        alignPosition: CaptionElementAlignPosition.Center
    };
    return CaptionElement;
}(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_2__["BaseComponent"]));
/* harmony default export */ __webpack_exports__["default"] = (CaptionElement);


/***/ }),

/***/ "B+18":
/*!********************************************************!*\
  !*** ./lib/webPartChrome/WebPartChrome.module.scss.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* tslint:disable */
__webpack_require__(/*! ./WebPartChrome.module.css */ "lqAP");
var styles = {
    webPartChrome: 'ai_g_658c9e0a',
    webPartHeader: 'aj_g_658c9e0a',
    content: 'ak_g_658c9e0a',
    title: 'al_g_658c9e0a',
    add: 'am_g_658c9e0a',
    addMenuForWebPartChrome: 'an_g_658c9e0a',
    addMenuForWebPartChrome_nonFlighted: 'ao_g_658c9e0a',
    seeAll: 'ap_g_658c9e0a',
    seeAllLinkMarginBottomLarge: 'aq_g_658c9e0a',
    seeAllLinkMarginBottomMiddle: 'ar_g_658c9e0a',
    seeAllLinkMarginBottomNone: 'as_g_658c9e0a',
    forcedContrastBackground: 'at_g_658c9e0a'
};
/* harmony default export */ __webpack_exports__["default"] = (styles);
/* tslint:enable */ 


/***/ }),

/***/ "BngB":
/*!**********************************!*\
  !*** ./lib/placeHolder/index.js ***!
  \**********************************/
/*! exports provided: Placeholder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Placeholder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Placeholder */ "W4J7");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Placeholder", function() { return _Placeholder__WEBPACK_IMPORTED_MODULE_0__["default"]; });




/***/ }),

/***/ "Cy4Q":
/*!******************************!*\
  !*** ./lib/imaging/index.js ***!
  \******************************/
/*! exports provided: webPartPreviewThumbnail, DoughboyDetector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _webPartPreviewThumbnail__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./webPartPreviewThumbnail */ "esDr");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "webPartPreviewThumbnail", function() { return _webPartPreviewThumbnail__WEBPACK_IMPORTED_MODULE_0__["webPartPreviewThumbnail"]; });

/* harmony import */ var _DoughboyDetector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DoughboyDetector */ "at2l");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DoughboyDetector", function() { return _DoughboyDetector__WEBPACK_IMPORTED_MODULE_1__["DoughboyDetector"]; });





/***/ }),

/***/ "D2cq":
/*!**************************************************!*\
  !*** ./lib/pagination/Pagination.module.scss.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* tslint:disable */
__webpack_require__(/*! ./Pagination.module.css */ "gcbh");
var styles = {
    Pagination: 'b_b_658c9e0a',
    themed: 'c_b_658c9e0a',
    prev: 'e_b_658c9e0a',
    next: 'f_b_658c9e0a',
    selected: 'g_b_658c9e0a',
    focus: 'h_b_658c9e0a',
    noPageNum: 'i_b_658c9e0a'
};
/* harmony default export */ __webpack_exports__["default"] = (styles);
/* tslint:enable */ 


/***/ }),

/***/ "E8QA":
/*!**************************************!*\
  !*** ./lib/pagination/IPageProps.js ***!
  \**************************************/
/*! exports provided: PageType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageType", function() { return PageType; });
/**
 * @copyright Microsoft Corporation. All rights reserved.
 *
 * @file IPageProps.ts
 */
// tslint:disable-next-line:typedef variable-name
var PageType = {
    /**
     * Represents the page button with index which let user goes to specific page.
     */
    Default: 0,
    /**
     * Represents the page button which let user goes to the previous page.
     */
    Prev: 1,
    /**
     * Represents the page button which let user goes to the next page.
     */
    Next: 2
};


/***/ }),

/***/ "Ek86":
/*!*****************************************************!*\
  !*** ./lib/baseCollectionWebPart/BaseCollection.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "faye");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @microsoft/sp-diagnostics */ "ut3N");
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @microsoft/office-ui-fabric-react-bundle */ "KL1q");
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ms/sp-component-utilities */ "hiL/");
/* harmony import */ var _ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ms/sp-telemetry */ "2q6Q");
/* harmony import */ var _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _webPartChrome_WebPartChrome__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../webPartChrome/WebPartChrome */ "LjNA");
/* harmony import */ var _BaseCollectionKillSwitches__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./BaseCollectionKillSwitches */ "pDlU");
/* harmony import */ var _loc_Strings_resx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./loc/Strings.resx */ "IBxL");
var _loc_Strings_resx__WEBPACK_IMPORTED_MODULE_10___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./loc/Strings.resx */ "IBxL", 1);
/* harmony import */ var _style_BaseCollection_module_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./style/BaseCollection.module.scss */ "sgZW");
/**
 * @file BaseCollection.tsx
 * @copyright Microsoft Corporation. All rights reserved.
 */












var BaseCollection = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(BaseCollection, _super);
    function BaseCollection(props) {
        var _this = _super.call(this, props) || this;
        _this._webPartChromeRef = react__WEBPACK_IMPORTED_MODULE_1__["createRef"]();
        _this._handleTitleChange = function (newTitle) {
            _this.props.onTitleChange(newTitle);
        };
        _this._layoutContainerRef = react__WEBPACK_IMPORTED_MODULE_1__["createRef"]();
        return _this;
    }
    BaseCollection.prototype.componentDidMount = function () {
        var onComponentMounted = this.props.onComponentMounted;
        // If child layout component is being added dynamically, wait for it to be mounted
        if (!this._isDynamicLayout && onComponentMounted) {
            onComponentMounted();
        }
    };
    BaseCollection.prototype.componentWillUnmount = function () {
        if (this._layoutContainerRef.current) {
            react_dom__WEBPACK_IMPORTED_MODULE_2__["unmountComponentAtNode"](this._layoutContainerRef.current);
            this._layoutContainerRef = undefined; // To release memory kept in Edge despite unmountComponentAtNode
        }
    };
    BaseCollection.prototype.render = function () {
        var _a = this.props, addButton = _a.addButton, defaultTitle = _a.defaultTitle, displayMode = _a.displayMode, emphasisTheme = _a.emphasisTheme, errorCallback = _a.errorCallback, hideWebPartWhenEmpty = _a.hideWebPartWhenEmpty, isInTeamsContext = _a.isInTeamsContext, isRenderedFromCacheData = _a.isRenderedFromCacheData, paginationProps = _a.paginationProps, panelElement = _a.panelElement, qosPrefix = _a.qosPrefix, seeAllLink = _a.seeAllLink, isTitleEditable = _a.isTitleEditable;
        var qosMonitorRender = new _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_4__["_QosMonitor"](qosPrefix + "ComponentRender");
        var emptyResponsePlaceholder = this._renderEmptyResult(qosMonitorRender);
        var dataAutomationId = isRenderedFromCacheData
            ? 'BaseCollection-Cache'
            : 'BaseCollection-FreshData';
        if (!emptyResponsePlaceholder) {
            this._renderLayout();
        }
        var result;
        try {
            if (!Object(_BaseCollectionKillSwitches__WEBPACK_IMPORTED_MODULE_9__["isCompleteHideEmptyPartKsActivated"])() &&
                hideWebPartWhenEmpty &&
                emptyResponsePlaceholder &&
                (!seeAllLink || !seeAllLink.show) &&
                displayMode === _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_3__["DisplayMode"].Read) {
                result = false;
            }
            else {
                result = (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_5__["Fabric"], null,
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_webPartChrome_WebPartChrome__WEBPACK_IMPORTED_MODULE_8__["default"], { addButton: addButton, contentElement: this._renderWebPartDisplay(emptyResponsePlaceholder), dataAutomationId: dataAutomationId, forceContrastBackground: isInTeamsContext, isEditMode: displayMode === _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_3__["DisplayMode"].Edit, onTitleChange: this._handleTitleChange, pagination: paginationProps, panelElement: panelElement, placeholder: defaultTitle, ref: this._webPartChromeRef, seeAllLink: seeAllLink, showTitle: this._shouldShowTitle, theme: emphasisTheme, title: this._title, isTitleEditable: !_BaseCollectionKillSwitches__WEBPACK_IMPORTED_MODULE_9__["default"].topicPageTitleNotEditableEditMode.isActivated()
                            ? isTitleEditable
                            : undefined }),
                    this._dialogRef ? react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { ref: this._dialogRef }) : undefined));
            }
        }
        catch (ex) {
            errorCallback(ex);
            qosMonitorRender.writeUnexpectedFailure('FailedToRender', ex);
        }
        qosMonitorRender.writeSuccess();
        return result;
    };
    BaseCollection.prototype.focusOnTitle = function () {
        var chrome = this._webPartChromeRef.current;
        if (chrome) {
            chrome.focusOnTitle();
        }
    };
    Object.defineProperty(BaseCollection.prototype, "_hasEmptyResponse", {
        get: function () {
            var items = this.props.items;
            return !!items && items.length < 1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseCollection.prototype, "_emptyResponseText", {
        get: function () {
            var _a = this.props, displayMode = _a.displayMode, hasInitialLoadingState = _a.hasInitialLoadingState, hideWebPartWhenEmpty = _a.hideWebPartWhenEmpty, emptyResponseText = _a.emptyResponseText;
            if (this._hasEmptyResponse && !hasInitialLoadingState) {
                // if no results and hideWebPartWhenEmpty is set true
                if (hideWebPartWhenEmpty && displayMode === _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_3__["DisplayMode"].Read) {
                    return;
                }
                // only consider using emptyResponseText when it is non-empty string
                // since empty string makes no sense to customers,
                // otherwise fall back to use NoResults
                return !!emptyResponseText ? emptyResponseText : _loc_Strings_resx__WEBPACK_IMPORTED_MODULE_10__["NoResults"];
            }
        },
        enumerable: true,
        configurable: true
    });
    BaseCollection.prototype._renderEmptyResult = function (qosMonitorRender) {
        var _a = this.props, errorCallback = _a.errorCallback, hasInitialLoadingState = _a.hasInitialLoadingState, layoutInfo = _a.layoutInfo;
        // if we have a response and the response contains 0 rows
        if (this._hasEmptyResponse && !hasInitialLoadingState) {
            try {
                var layoutId = (layoutInfo && layoutInfo.id) || '';
                var className = Object(_BaseCollectionKillSwitches__WEBPACK_IMPORTED_MODULE_9__["usingThemeStyleForText"])() && this.props.emphasisTheme ? '' : _style_BaseCollection_module_scss__WEBPACK_IMPORTED_MODULE_11__["default"].emptyResult;
                var style = Object(_BaseCollectionKillSwitches__WEBPACK_IMPORTED_MODULE_9__["usingThemeStyleForText"])()
                    ? { color: this.props.emphasisTheme.palette.neutralPrimary }
                    : {};
                return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", { className: className, "data-automation-id": layoutId + "-no-results", style: style }, this._emptyResponseText));
            }
            catch (er) {
                errorCallback(er);
                qosMonitorRender.writeUnexpectedFailure('FailedToRenderEmptyResult');
            }
        }
        return undefined;
    };
    BaseCollection.prototype._renderLayout = function () {
        var _this = this;
        var _a = this.props, emphasisTheme = _a.emphasisTheme, errorCallback = _a.errorCallback, layoutInfo = _a.layoutInfo, onComponentMounted = _a.onComponentMounted, qosPrefix = _a.qosPrefix;
        if (!_BaseCollectionKillSwitches__WEBPACK_IMPORTED_MODULE_9__["default"].exclusiveRenderTimeForBaseCollectionWebPart.isActivated()) {
            _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_7__["_PerformanceLogger"].saveTempData(this.props.webPartTag + ".loadLayoutStart", _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_7__["_PerformanceLogger"].now());
        }
        var qosMonitorRenderLayout = new _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_4__["_QosMonitor"](qosPrefix + "ComponentRenderLayout");
        this._isDynamicLayout = true;
        layoutInfo
            .loadLayout()
            // tslint:disable-next-line:no-any
            .then(function (layoutClass) {
            if (!_BaseCollectionKillSwitches__WEBPACK_IMPORTED_MODULE_9__["default"].exclusiveRenderTimeForBaseCollectionWebPart.isActivated()) {
                _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_7__["_PerformanceLogger"].saveTempData(_this.props.webPartTag + ".loadLayoutEnd", _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_7__["_PerformanceLogger"].now());
            }
            // Must use React.createElement over JSX markup since ComponentClass is involved
            var layout = react__WEBPACK_IMPORTED_MODULE_1__["createElement"](layoutClass, _this.props);
            if (emphasisTheme) {
                var customizerProps = { settings: { theme: emphasisTheme } };
                layout = react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_5__["Customizer"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, customizerProps), layout);
            }
            var _handleComponentRendered = function () {
                qosMonitorRenderLayout.writeSuccess();
                if (onComponentMounted) {
                    onComponentMounted();
                }
            };
            if (_this._layoutContainerRef.current) {
                react_dom__WEBPACK_IMPORTED_MODULE_2__["render"](layout, _this._layoutContainerRef.current, _handleComponentRendered);
            }
            else {
                _handleComponentRendered();
            }
            if (!_BaseCollectionKillSwitches__WEBPACK_IMPORTED_MODULE_9__["default"].exclusiveRenderTimeForBaseCollectionWebPart.isActivated()) {
                _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_7__["_PerformanceLogger"].saveTempData(_this.props.webPartTag + ".syncLayoutRenderComplete", _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_7__["_PerformanceLogger"].now());
            }
        })
            .catch(function (error) {
            errorCallback(error);
            qosMonitorRenderLayout.writeUnexpectedFailure('FailedToRenderLayout', error);
        });
    };
    Object.defineProperty(BaseCollection.prototype, "_title", {
        get: function () {
            var _a = this.props, defaultTitle = _a.defaultTitle, displayMode = _a.displayMode, displayPlaceholderTitleInReadMode = _a.displayPlaceholderTitleInReadMode, title = _a.title;
            // if webpart opts in, render the placeholder title in read mode
            if (displayMode === _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_3__["DisplayMode"].Read && displayPlaceholderTitleInReadMode && !title) {
                return defaultTitle;
            }
            return title || '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseCollection.prototype, "_shouldShowTitle", {
        get: function () {
            var _a = this.props, displayMode = _a.displayMode, hasInitialLoadingState = _a.hasInitialLoadingState, showTitle = _a.showTitle;
            // Display the title if showing the initial loading state, if there is data to display,
            // or the webpart is rendering with an empty response message. Avoid displaying the title
            // if there is no content below it.
            var isRenderingContent = hasInitialLoadingState || !this._hasEmptyResponse || Boolean(this._emptyResponseText);
            return ((showTitle && displayMode === _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_3__["DisplayMode"].Edit) || (isRenderingContent && showTitle && !!this._title));
        },
        enumerable: true,
        configurable: true
    });
    BaseCollection.prototype._renderWebPartDisplay = function (emptyResult) {
        var _a = this.props, addToPageScreenReaderLabel = _a.addToPageScreenReaderLabel, displayMode = _a.displayMode, messageView = _a.messageView, renderedOnce = _a.renderedOnce;
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null,
            displayMode === _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_3__["DisplayMode"].Edit && !renderedOnce && addToPageScreenReaderLabel && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_6__["ScreenReaderAlert"], { readingMode: _ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_6__["ReadingMode"].ReadImmediately, message: addToPageScreenReaderLabel })),
            messageView && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_5__["MessageBar"], { className: _style_BaseCollection_module_scss__WEBPACK_IMPORTED_MODULE_11__["default"].messageView, ariaLabel: messageView.ariaLabel, messageBarType: messageView.messageBarType }, messageView.message)),
            emptyResult || react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { ref: this._layoutContainerRef })));
    };
    return BaseCollection;
}(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_5__["BaseComponent"]));
/* harmony default export */ __webpack_exports__["default"] = (BaseCollection);


/***/ }),

/***/ "EpOV":
/*!**********************************!*\
  !*** ./lib/dateBox/DateBox.resx ***!
  \**********************************/
/*! exports provided: DefaultMonthText, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"DefaultMonthText\":\"[!!--##Mōńţĥ##--!!]\"}");

/***/ }),

/***/ "GrTz":
/*!************************************************!*\
  !*** ./lib/dateTimeHelper/DateTimeHelper.resx ***!
  \************************************************/
/*! exports provided: RelativeDateTime_DayAndTime, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RelativeDateTime_DayAndTime\":\"[!!--##{0} àţ {1}##--!!]\"}");

/***/ }),

/***/ "H10Q":
/*!******************************************************!*\
  !*** ../sp-live-persona-card/lib/LivePersonaCard.js ***!
  \******************************************************/
/*! exports provided: bootstrapLPC, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bootstrapLPC", function() { return bootstrapLPC; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @microsoft/sp-diagnostics */ "ut3N");
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ms_sp_component_utilities_lib_decorators_monitor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ms/sp-component-utilities/lib/decorators/monitor */ "MzPy");
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @microsoft/office-ui-fabric-react-bundle */ "KL1q");
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _FlightsAndKillSwitches__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./FlightsAndKillSwitches */ "NmG0");
/* harmony import */ var _EventUtils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./EventUtils */ "2aLq");
/* harmony import */ var _LivePersonaCard_module_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./LivePersonaCard.module.scss */ "4Aoc");
/**
 * @copyright Microsoft Corporation. All rights reserved.
 *
 * @file LivePersonaCard wrapper component.
 */









var DEFAULT_CLIENT = 'SPPeopleWebPart';
var Monitored = /** @class */ (function () {
    function Monitored() {
    }
    Monitored.prototype.getLPCLoader = function () {
        return Promise.all(/*! import() | live-persona-card-loader */[__webpack_require__.e("vendors~live-persona-card-loader"), __webpack_require__.e("live-persona-card-loader")]).then(__webpack_require__.bind(null, /*! ./LivePersonaCardLoader */ "oCe/")).then(function (loaderModule) { return loaderModule.default; });
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_ms_sp_component_utilities_lib_decorators_monitor__WEBPACK_IMPORTED_MODULE_4__["monitor"])('LivePersonaCard.Load')
    ], Monitored.prototype, "getLPCLoader", null);
    return Monitored;
}());
var monitored = new Monitored();
/**
 * Starts loading and bootstrapping the LPC code, returning a promise that
 * resolves once it has been ensured that LPC is loaded and initialized.
 *
 * Note that bootstrapping also happens on demand if you mount a LivePersonaCard
 * component, so this is only necessary if you want LPC to be bootstrapped sooner
 * than that.
 */
function bootstrapLPC(serviceScope, clientType) {
    if (clientType === void 0) { clientType = DEFAULT_CLIENT; }
    return monitored.getLPCLoader().then(function (loader) { return loader.bootstrap(serviceScope, clientType); });
}
var LivePersonaCard = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(LivePersonaCard, _super);
    function LivePersonaCard(props) {
        var _this = _super.call(this, props) || this;
        _this._isUnMounted = false;
        /**
         * Bootstraps the LPC via a delay timeout. (only when _alwaysOnDemand KS is pulled)
         * @param e - optional and unused (kept for mouse handler compat)
         * @param force - force immediate loading, clearing any previous delays (only when _alwaysOnDemand KS is pulled)
         */
        _this._bootstrapLivePersonaCard = function (e, force) {
            var _a, _b, _c;
            if (!LivePersonaCard._isLivePersonaCardFlightEnabled() || _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_3__["_BrowserUtilities"].isMobileWebView()) {
                return Promise.resolve();
            }
            if (!LivePersonaCard.LivePersonaCardHoverTarget) {
                if (Object(_FlightsAndKillSwitches__WEBPACK_IMPORTED_MODULE_6__["isTriggerLPCOnFirstUserActionFlightEnabled"])()) {
                    if (!_this._loadPromise) {
                        _this._loadPromise = _this._bootstrapCore((_a = e) === null || _a === void 0 ? void 0 : _a.nativeEvent);
                    }
                    return _this._loadPromise;
                }
                if (!_this._loadPromise && force) {
                    _this._loadPromise = _this._bootstrapCore((_b = e) === null || _b === void 0 ? void 0 : _b.nativeEvent);
                }
                return _this._loadPromise || Promise.resolve();
            }
            else {
                _this._updateBundleMountedState((_c = e) === null || _c === void 0 ? void 0 : _c.nativeEvent);
                return Promise.resolve();
            }
        };
        _this._bootstrapCore = function (event) {
            _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__["_TraceLogger"].logVerbose(_this._logSource, 'LivePersonaCard._bootstrapCore');
            return monitored
                .getLPCLoader()
                .then(function (loader) { return loader.bootstrap(_this.props.serviceScope, _this._clientType); })
                .then(function () {
                if (!_this._isUnMounted) {
                    _this._updateBundleMountedState(event);
                }
            })
                .catch(function (error) {
                _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__["_TraceLogger"].logError(_this._logSource, error, 'BootstrapLivePersonaCard');
            });
        };
        _this._manuallyDispatchEventToTriggerCallout = function (previousEvent) {
            var _a, _b, _c;
            if (!Object(_FlightsAndKillSwitches__WEBPACK_IMPORTED_MODULE_6__["isTriggerLPCOnFirstUserActionFlightEnabled"])()) {
                return;
            }
            if (((_a = previousEvent) === null || _a === void 0 ? void 0 : _a.type) === 'keydown' && _this._ref.current) {
                (_b = Object(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_5__["getFirstTabbable"])(_this._ref.current, _this._ref.current, true)) === null || _b === void 0 ? void 0 : _b.focus();
                (_c = _this._ref.current.firstElementChild) === null || _c === void 0 ? void 0 : _c.dispatchEvent(Object(_EventUtils__WEBPACK_IMPORTED_MODULE_7__["generateEnterKeyDownEvent"])());
            }
        };
        _this._logTriggerAction = function (event, source) {
            if (Object(_FlightsAndKillSwitches__WEBPACK_IMPORTED_MODULE_6__["isTriggerLPCOnFirstUserActionFlightEnabled"])() &&
                source === "Keyboard" /* Keyboard */ &&
                event.keyCode !== _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_5__["KeyCodes"].enter) {
                return;
            }
            // Scenario: We want to know how many times after user hovers or enter on lpc element,
            // the card can be opened successfully.
            _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__["_EngagementLogger"].logEventWithLogEntry(new _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__["_LogEntry"]('LivePersonaCard', _this._logScenario + ".Trigger", _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__["_LogType"].Event, {
                hasUPN: Boolean(_this.props.upn).toString(),
                source: source,
                isBundleLoaded: _this.state.isBundleLoaded.toString()
            }));
            if (Object(_FlightsAndKillSwitches__WEBPACK_IMPORTED_MODULE_6__["isTriggerLPCOnFirstUserActionFlightEnabled"])() && _this._isLPCBundleLoaded()) {
                return;
            }
            _this._bootstrapLivePersonaCard(event, /*force*/ true).catch(_this._traceBootstrapFailure);
        };
        _this._handleCardOpen = function () {
            // Scenario: We want to know how many times after user click the item inside a card,
            // the card can be opened successfully.
            // Signal: card open callback is called, we treat the card is opened.
            _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__["_EngagementLogger"].logEvent("LivePersonaCard." + _this._logScenario, 'Open');
            var onCardOpen = _this.props.onCardOpen;
            if (onCardOpen) {
                onCardOpen();
            }
        };
        _this._traceBootstrapFailure = function (error) {
            _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__["_TraceLogger"].logError(_this._logSource, error, 'LivePersonaCard.bootstrap');
        };
        _this._logSource = _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__["_LogSource"].create('LivePersonaCard');
        _this._ref = react__WEBPACK_IMPORTED_MODULE_1__["createRef"]();
        _this.state = { isBundleLoaded: false };
        return _this;
    }
    /**
     * Check if the flight is enabled in the farm.
     *
     * Note that, the Loki service and LivePersonaCard is always disabled in Gallatin, BlackForest.
     */
    LivePersonaCard._isLivePersonaCardFlightEnabled = function () {
        return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_3__["_SPFlight"].isEnabled(/* LivePeopleCards05 */ 809);
    };
    Object.defineProperty(LivePersonaCard, "LivePersonaCardHoverTarget", {
        get: function () {
            return window.LivePersonaCardHoverTargetV2; // tslint:disable-line:no-any
        },
        enumerable: true,
        configurable: true
    });
    LivePersonaCard.prototype.componentDidMount = function () {
        if (!Object(_FlightsAndKillSwitches__WEBPACK_IMPORTED_MODULE_6__["isTriggerLPCOnFirstUserActionFlightEnabled"])() && !this.props.disabled) {
            this._bootstrapLivePersonaCard().catch(this._traceBootstrapFailure);
        }
    };
    LivePersonaCard.prototype.UNSAFE_componentWillReceiveProps = function (nextProps) {
        if (!Object(_FlightsAndKillSwitches__WEBPACK_IMPORTED_MODULE_6__["isTriggerLPCOnFirstUserActionFlightEnabled"])() && this.props.disabled && !nextProps.disabled) {
            this._bootstrapLivePersonaCard().catch(this._traceBootstrapFailure);
        }
    };
    LivePersonaCard.prototype.componentWillUnmount = function () {
        this._isUnMounted = true;
        if (this._loadTimeout) {
            window.clearTimeout(this._loadTimeout);
        }
    };
    LivePersonaCard.prototype.render = function () {
        var _this = this;
        if (this.props.disabled) {
            return react__WEBPACK_IMPORTED_MODULE_1__["Children"].only(this.props.children);
        }
        if (_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_3__["_BrowserUtilities"].isMobileWebView()) {
            // This is for native app to trigger native people profile cards.
            return react__WEBPACK_IMPORTED_MODULE_1__["cloneElement"](react__WEBPACK_IMPORTED_MODULE_1__["Children"].only(this.props.children), {
                role: 'button',
                'data-sp-action': JSON.stringify({
                    key: 'viewUserProfileDetails',
                    args: { upn: this.props.upn }
                }),
                onClick: function () {
                    /* no-op */
                } // It's just intended to be intercepted by native mobile app.
            });
        }
        // The LPC is not working for external viewer. Check on it to mitigate the React 16 error boundary break.
        // See details in https://onedrive.visualstudio.com/SOX/_workitems/edit/663895
        var handleMouseEvent = function (e) {
            return _this._logTriggerAction(e, "Mouse" /* Mouse */);
        };
        // tslint:disable-next-line
        var Wrapper = this.props.useSpan ? 'span' : 'div';
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](Wrapper, { className: Object(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_5__["css"])(this.props.className, _LivePersonaCard_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].livePersonaCardWrapper), onClickCapture: handleMouseEvent, onKeyDownCapture: function (ev) { return _this._logTriggerAction(ev, "Keyboard" /* Keyboard */); }, onMouseOver: handleMouseEvent, ref: Object(_FlightsAndKillSwitches__WEBPACK_IMPORTED_MODULE_6__["isTriggerLPCOnFirstUserActionFlightEnabled"])() ? this._ref : undefined }, this._renderContent()));
    };
    LivePersonaCard.prototype._renderContent = function () {
        var livePersonaCardHoverTargetProps = {
            cardParameters: {
                personaInfo: {
                    identifiers: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ PersonaType: (this.props.hostAppPersonaInfo && this.props.hostAppPersonaInfo.PersonaType) || 'User', Upn: this.props.upn, Smtp: this.props.upn }, (this.props.hostAppPersonaInfo && {
                        LocationId: this.props.hostAppPersonaInfo.LocationId,
                        OlsPersonaId: this.props.hostAppPersonaInfo.OlsPersonaId,
                        AadObjectId: this.props.hostAppPersonaInfo.PersonaAadObjectId,
                        DisplayName: this.props.hostAppPersonaInfo.PersonaDisplayName
                    })),
                    displayName: this.props.displayName,
                    personaCoinColor: Object(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_5__["getPersonaInitialsColor"])({ text: this.props.displayName })
                },
                externalAppSessionCorrelationId: this.props.externalAppSessionCorrelationId,
                behavior: {
                    onCardOpen: this._handleCardOpen,
                    onCardClose: this.props.onCardClose,
                    disableHover: this.props.disableHover,
                    disableClick: this.props.disableClick
                },
                ariaLabel: this.props.ariaLabel
            },
            tabIndex: this.props.tabIndex
        };
        if (this.props.upn && this._isLPCBundleLoaded()) {
            return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](LivePersonaCard.LivePersonaCardHoverTarget, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, livePersonaCardHoverTargetProps, { onCardOpen: this._handleCardOpen }), react__WEBPACK_IMPORTED_MODULE_1__["Children"].only(this.props.children)));
        }
        if (Object(_FlightsAndKillSwitches__WEBPACK_IMPORTED_MODULE_6__["isTriggerLPCOnFirstUserActionFlightEnabled"])() && this.props.upn && !this._isLPCBundleLoaded()) {
            return react__WEBPACK_IMPORTED_MODULE_1__["cloneElement"](react__WEBPACK_IMPORTED_MODULE_1__["Children"].only(this.props.children), {
                tabIndex: 0,
                'data-is-focusable': true
            });
        }
        return react__WEBPACK_IMPORTED_MODULE_1__["Children"].only(this.props.children);
    };
    LivePersonaCard.prototype._isLPCBundleLoaded = function () {
        return this.state.isBundleLoaded && !!LivePersonaCard.LivePersonaCardHoverTarget;
    };
    Object.defineProperty(LivePersonaCard.prototype, "_logScenario", {
        get: function () {
            return this.props.clientScenario || 'unset';
        },
        enumerable: true,
        configurable: true
    });
    LivePersonaCard.prototype._updateBundleMountedState = function (event) {
        var _this = this;
        this.setState({ isBundleLoaded: true }, function () { return _this._manuallyDispatchEventToTriggerCallout(event); });
    };
    Object.defineProperty(LivePersonaCard.prototype, "_clientType", {
        get: function () {
            return this.props.clientType || DEFAULT_CLIENT;
        },
        enumerable: true,
        configurable: true
    });
    return LivePersonaCard;
}(react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]));
/* harmony default export */ __webpack_exports__["default"] = (LivePersonaCard);


/***/ }),

/***/ "HcPF":
/*!*************************************!*\
  !*** ./lib/handleItemNavigation.js ***!
  \*************************************/
/*! exports provided: handleItemNavigation, getUrlTarget, isExternalUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleItemNavigation", function() { return handleItemNavigation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUrlTarget", function() { return getUrlTarget; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isExternalUrl", function() { return isExternalUrl; });
/* harmony import */ var _ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ms/sp-component-utilities */ "hiL/");
/* harmony import */ var _ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ms/odsp-utilities-bundle */ "y88i");
/* harmony import */ var _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__);



/**
 * For pages navigates inline to improve performance. Otherwise opens in a separate tab
 * @param url - link target URL
 *
 * @internal
 */
function handleItemNavigation(url) {
    var extension = _ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_0__["ExtensionHelper"].getExtension(new _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_1__["Uri"](url)) || '';
    if (extension === 'aspx' ||
        (_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__["_SPFlight"].isEnabled(1374 /* SPTeamsLinkInterception */) && _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__["_BrowserUtilities"].isTeamsHosted())) {
        postMessage("router://" + url, location.origin);
    }
    else {
        window.open(url, getUrlTarget(url));
    }
}
/**
 * Get target based on url. Either `_blank` or `_self`.
 * If the url is a SharePoint internal url, it will return `_self`.
 * Otherwise it will return `_blank`
 */
function getUrlTarget(url) {
    return isExternalUrl(url) ? '_blank' : '_self';
}
function isExternalUrl(url) {
    if (!url) {
        return false;
    }
    var host = new _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_1__["Uri"](url).getHost();
    return Boolean(host) && host.toLocaleLowerCase() !== window.location.host.toLowerCase();
}


/***/ }),

/***/ "Hxkh":
/*!*************************************************!*\
  !*** ./lib/truncateText/truncateText.styles.js ***!
  \*************************************************/
/*! exports provided: truncateText */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "truncateText", function() { return truncateText; });
/**
 * Generates the text truncation styles.
 * @param lineCount maximum number of lines to display.
 * @param lineHeight line height of each line.
 *  When use em as unit, simply use number type like 2.
 *  When use px unit, use string type like `14px`
 * @param verticalPaddingInPixel the top and bottom margin padding in pixel.
 */
function truncateText(lineCount, lineHeight) {
    if (lineHeight === void 0) { lineHeight = 1.35; }
    var contentMaxHeight = undefined;
    if (typeof lineHeight === 'number') {
        contentMaxHeight = lineCount * lineHeight + "em";
    }
    else {
        try {
            var lineHeightInPixel = Number(lineHeight.substr(0, lineHeight.length - 2));
            var maxHeightInPixel = lineCount * lineHeightInPixel;
            if (isNaN(maxHeightInPixel)) {
                throw 'Invalid line height input';
            }
            contentMaxHeight = maxHeightInPixel + "px";
        }
        catch (error) {
            throw new error('Invalid line-height input format');
        }
    }
    return {
        overflow: 'hidden',
        display: '-webkit-box',
        '-webkit-box-orient': 'vertical',
        '-webkit-line-clamp': lineCount.toString(),
        boxSizing: 'content-box',
        maxHeight: contentMaxHeight,
        textOverflow: lineCount === 1 ? 'ellipsis' : undefined
    }; // tslint:disable-line:no-any
}


/***/ }),

/***/ "I6O9":
/*!***************************************!*\
  !*** external "@microsoft/sp-loader" ***!
  \***************************************/
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_I6O9__;

/***/ }),

/***/ "IBxL":
/*!****************************************************!*\
  !*** ./lib/baseCollectionWebPart/loc/Strings.resx ***!
  \****************************************************/
/*! exports provided: ErrorMissingPageContext, ErrorMissingWeb, ErrorMissingWebId, ErrorMissingSite, ErrorMissingSiteId, ErrorNoDataProvider, TitlePlaceholder, NoResults, ErrorNoLayout, SeeAll, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"ErrorMissingPageContext\":\"[!!--##Ţĥē ƥàĝē ćōńţēxţ ĩś ńōţ ƥŕōvĩďēď ƀŷ ţĥē ĥōśţ ēńvĩŕōńmēńţ.##--!!]\",\"ErrorMissingWeb\":\"[!!--##Ţĥē ƥàĝē ćōńţēxţ ďōēś ńōţ ƥŕōvĩďē à ŵēƀ ĩńśţàńćē.##--!!]\",\"ErrorMissingWebId\":\"[!!--##Ţĥē ƥàĝē ćōńţēxţ ďōēś ńōţ ƥŕōvĩďē à ŵēƀ ĩďēńţĩƒĩēŕ.##--!!]\",\"ErrorMissingSite\":\"[!!--##Ţĥē ƥàĝē ćōńţēxţ ďōēś ńōţ ƥŕōvĩďē à śĩţē ĩńśţàńćē.##--!!]\",\"ErrorMissingSiteId\":\"[!!--##Ţĥē ƥàĝē ćōńţēxţ ďōēś ńōţ ƥŕōvĩďē à śĩţē ĩďēńţĩƒĩēŕ.##--!!]\",\"ErrorNoDataProvider\":\"[!!--##À ďàţà śōũŕćē ĩś ŕēǫũĩŕēď.##--!!]\",\"TitlePlaceholder\":\"[!!--##Ţĩţĺē##--!!]\",\"NoResults\":\"[!!--##Ŵē ďĩďń\\u0027ţ ƒĩńď àńŷţĥĩńĝ ţō śĥōŵ ĥēŕē.##--!!]\",\"ErrorNoLayout\":\"[!!--##À ĺàŷōũţ ĩś ŕēǫũĩŕēď.##--!!]\",\"SeeAll\":\"[!!--##Śēē àĺĺ##--!!]\"}");

/***/ }),

/***/ "KL1q":
/*!***********************************************************!*\
  !*** external "@microsoft/office-ui-fabric-react-bundle" ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_KL1q__;

/***/ }),

/***/ "LjNA":
/*!********************************************!*\
  !*** ./lib/webPartChrome/WebPartChrome.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @microsoft/office-ui-fabric-react-bundle */ "KL1q");
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ms/sp-component-utilities */ "hiL/");
/* harmony import */ var _ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @microsoft/sp-lodash-subset */ "Pk8u");
/* harmony import */ var _microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _captionElement_CaptionElement__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../captionElement/CaptionElement */ "Ar4x");
/* harmony import */ var _pagination_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../pagination/index */ "r6nC");
/* harmony import */ var _WebPartChromeStyles_styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./WebPartChromeStyles.styles */ "zfKF");
/* harmony import */ var _DeferredTeachingBubble__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./DeferredTeachingBubble */ "eyMx");
/* harmony import */ var _baseCollectionWebPart_BaseCollectionKillSwitches__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../baseCollectionWebPart/BaseCollectionKillSwitches */ "pDlU");
/* harmony import */ var _loc_Strings_resx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./loc/Strings.resx */ "xTKt");
var _loc_Strings_resx__WEBPACK_IMPORTED_MODULE_11___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./loc/Strings.resx */ "xTKt", 1);
/* harmony import */ var _WebPartChrome_module_scss__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./WebPartChrome.module.scss */ "B+18");

/**
 * @file WebPartChrome.tsx
 * @Copyright (c) Microsoft Corporation.  All rights reserved.
 */












var WebPartChrome = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(WebPartChrome, _super);
    function WebPartChrome(props) {
        var _this = _super.call(this, props) || this;
        _this._handleClick = function (ev) {
            var _a = _this.props, seeAllLink = _a.seeAllLink, webPartAlias = _a.webPartAlias;
            if (seeAllLink.teachingBubble && !_this.state.isTeachingBubbleDismissed) {
                _this._onDismissTeachingBubble();
            }
            _ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_4__["ScreenReaderAlert"].read(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_3__["Text"].format(_loc_Strings_resx__WEBPACK_IMPORTED_MODULE_11__["SeeAllPageLoadingAlertTemplate"], webPartAlias || ''), _ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_4__["ReadingMode"].ReadImmediately);
            seeAllLink.onClick(ev);
        };
        _this._onDismissTeachingBubble = function () {
            var seeAllLink = _this.props.seeAllLink;
            if (_this._isMounted) {
                _this.setState({
                    isTeachingBubbleDismissed: true
                });
            }
            if (seeAllLink) {
                seeAllLink.teachingBubble.onDismiss();
            }
        };
        _this._handleSeeAllLinkKeyDown = function (event) {
            if (event.keyCode === _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_2__["KeyCodes"].enter) {
                _ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_4__["ScreenReaderAlert"].read(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_3__["Text"].format(_loc_Strings_resx__WEBPACK_IMPORTED_MODULE_11__["SeeAllPageLoadingAlertTemplate"], _this.props.webPartAlias || ''), _ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_4__["ReadingMode"].ReadImmediately);
            }
        };
        _this.state = {
            isTeachingBubbleDismissed: false
        };
        return _this;
    }
    Object.defineProperty(WebPartChrome.prototype, "_classNames", {
        get: function () {
            var theme = this.props.theme;
            return (Boolean(theme) &&
                _WebPartChromeStyles_styles__WEBPACK_IMPORTED_MODULE_8__["default"].getClassNames(_WebPartChromeStyles_styles__WEBPACK_IMPORTED_MODULE_8__["default"].getStyles, {
                    root: 'webPartChrome',
                    theme: theme
                }));
        },
        enumerable: true,
        configurable: true
    });
    WebPartChrome.prototype.componentDidMount = function () {
        this._isMounted = true;
    };
    WebPartChrome.prototype.componentWillUnmount = function () {
        this._isMounted = false;
    };
    WebPartChrome.prototype.render = function () {
        var _a;
        var _b = this.props, dataAutomationId = _b.dataAutomationId, forceContrastBackground = _b.forceContrastBackground, seeAllLink = _b.seeAllLink, showTitle = _b.showTitle;
        var shouldShowWebPartHeader = (seeAllLink && seeAllLink.show) || showTitle;
        var chrome = (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { "data-automation-id": dataAutomationId, className: Object(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_2__["css"])(_WebPartChrome_module_scss__WEBPACK_IMPORTED_MODULE_12__["default"].webPartChrome, (_a = {},
                _a[_WebPartChrome_module_scss__WEBPACK_IMPORTED_MODULE_12__["default"].forcedContrastBackground] = forceContrastBackground,
                _a)) },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: shouldShowWebPartHeader ? _WebPartChrome_module_scss__WEBPACK_IMPORTED_MODULE_12__["default"].webPartHeader : '', "data-automation-id": shouldShowWebPartHeader ? 'webPartHeader' : '' },
                this._renderTitle(),
                this._renderSeeAllLink()),
            this._renderContent(),
            this._renderTeachingBubble()));
        if (this.props.theme) {
            return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_2__["Customizer"], { settings: { theme: this.props.theme } }, chrome);
        }
        else {
            return chrome;
        }
    };
    WebPartChrome.prototype.focusOnTitle = function () {
        if (this._captionElement) {
            this._captionElement.focusOnCaptionElement();
        }
    };
    WebPartChrome.prototype._renderTitle = function () {
        var _a = this.props, customTitle = _a.customTitle, isEditMode = _a.isEditMode, onTitleChange = _a.onTitleChange, placeholder = _a.placeholder, showTitle = _a.showTitle, title = _a.title, titleAlignment = _a.titleAlignment, isTitleEditable = _a.isTitleEditable;
        return showTitle ? (customTitle || (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_captionElement_CaptionElement__WEBPACK_IMPORTED_MODULE_6__["default"], { className: Object(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_2__["css"])(this._classNames && this._classNames.title, _WebPartChrome_module_scss__WEBPACK_IMPORTED_MODULE_12__["default"].title), ref: this._resolveRef('_captionElement'), type: _captionElement_CaptionElement__WEBPACK_IMPORTED_MODULE_6__["CaptionElementType"].Title, isEditMode: isEditMode, text: title, onChange: onTitleChange || _microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_5__["noop"], placeholder: placeholder, alignPosition: titleAlignment || _captionElement_CaptionElement__WEBPACK_IMPORTED_MODULE_6__["CaptionElementAlignPosition"].PageDirection, headingLevel: 2, marginBottomSize: this._titleMarginBottomSize, isTitleEditable: !_baseCollectionWebPart_BaseCollectionKillSwitches__WEBPACK_IMPORTED_MODULE_10__["default"].topicPageTitleNotEditableEditMode.isActivated()
                ? isTitleEditable
                : undefined }))) : (
        // empty div to hold for flex-grow value, ensure SeeAll button won't shift
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: _WebPartChrome_module_scss__WEBPACK_IMPORTED_MODULE_12__["default"].title }));
    };
    WebPartChrome.prototype._renderContent = function () {
        var _a = this.props, contentElement = _a.contentElement, pagination = _a.pagination, panelElement = _a.panelElement;
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: _WebPartChrome_module_scss__WEBPACK_IMPORTED_MODULE_12__["default"].content },
            this._renderAddButton(),
            contentElement,
            panelElement,
            pagination && react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_pagination_index__WEBPACK_IMPORTED_MODULE_7__["Pagination"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, pagination))));
    };
    Object.defineProperty(WebPartChrome.prototype, "_titleMarginBottomSize", {
        get: function () {
            var _a = this.props, addButton = _a.addButton, seeAllLink = _a.seeAllLink, showTitle = _a.showTitle, titleMarginBottomSize = _a.titleMarginBottomSize;
            if (titleMarginBottomSize !== undefined) {
                return titleMarginBottomSize;
            }
            else if ((!seeAllLink || !seeAllLink.show) && !showTitle) {
                return 'None';
            }
            else if (addButton.show) {
                return 'Middle';
            }
            else {
                return 'Large';
            }
        },
        enumerable: true,
        configurable: true
    });
    WebPartChrome.prototype._renderSeeAllLink = function () {
        var seeAllLink = this.props.seeAllLink;
        var seeAllLinkClassName;
        switch (this._titleMarginBottomSize) {
            case 'Large':
                seeAllLinkClassName = _WebPartChrome_module_scss__WEBPACK_IMPORTED_MODULE_12__["default"].seeAllLinkMarginBottomLarge;
                break;
            case 'Middle':
                seeAllLinkClassName = _WebPartChrome_module_scss__WEBPACK_IMPORTED_MODULE_12__["default"].seeAllLinkMarginBottomMiddle;
                break;
            case 'None':
                seeAllLinkClassName = _WebPartChrome_module_scss__WEBPACK_IMPORTED_MODULE_12__["default"].seeAllLinkMarginBottomNone;
                break;
        }
        return (seeAllLink &&
            seeAllLink.show &&
            seeAllLink.href && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", { className: seeAllLinkClassName, ref: this._resolveRef('_teachingBubbleTargetElement') },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_2__["Link"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ "aria-label": seeAllLink.ariaLabel || _loc_Strings_resx__WEBPACK_IMPORTED_MODULE_11__["SeeAllLinkAriaLabel"], className: Object(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_2__["css"])(!seeAllLink.disabled && this._classNames && this._classNames.seeAll, _WebPartChrome_module_scss__WEBPACK_IMPORTED_MODULE_12__["default"].seeAll), disabled: seeAllLink.disabled, onClick: this._handleClick, onKeyDown: this._handleSeeAllLinkKeyDown, "data-interception": 'propagate', "data-automation-id": seeAllLink.automationId, id: seeAllLink.id, "data-sp-action": seeAllLink.action }, { href: seeAllLink.href } /* VSO:391730 Remove this workaround */), seeAllLink.label || _loc_Strings_resx__WEBPACK_IMPORTED_MODULE_11__["SeeAllLink"]))));
    };
    WebPartChrome.prototype._renderTeachingBubble = function () {
        var teachingBubble = this.props.seeAllLink.teachingBubble;
        return this._showTeachingBubble && !this.state.isTeachingBubbleDismissed ? (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_DeferredTeachingBubble__WEBPACK_IMPORTED_MODULE_9__["default"], { deferredProps: {
                headline: teachingBubble.headline,
                targetElement: this._teachingBubbleTargetElement,
                onDismiss: this._onDismissTeachingBubble,
                hasCloseIcon: true,
                calloutProps: {
                    doNotLayer: false,
                    gapSpace: 2,
                    isBeakVisible: true,
                    directionalHint: _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_2__["DirectionalHint"].topAutoEdge
                },
                primaryButtonProps: teachingBubble.primaryButtonProps,
                closeButtonAriaLabel: _loc_Strings_resx__WEBPACK_IMPORTED_MODULE_11__["CloseTeachingBubbleAriaLabel"]
            } }, teachingBubble.text)) : undefined;
    };
    Object.defineProperty(WebPartChrome.prototype, "_showTeachingBubble", {
        get: function () {
            var seeAllLink = this.props.seeAllLink;
            return Boolean(seeAllLink && seeAllLink.teachingBubble && seeAllLink.teachingBubble.show);
        },
        enumerable: true,
        configurable: true
    });
    WebPartChrome.prototype._renderAddButton = function () {
        var options = this.props.addButton;
        if (!options || !options.show) {
            return undefined;
        }
        var commonOptions = {
            ariaLabel: options.ariaLabel || _loc_Strings_resx__WEBPACK_IMPORTED_MODULE_11__["AddButtonAriaLabel"],
            ariaDescription: options.ariaDescription,
            disabled: options.disabled,
            iconProps: { iconName: 'CalculatorAddition' },
            label: options.label || _loc_Strings_resx__WEBPACK_IMPORTED_MODULE_11__["AddButtonLabel"]
        };
        commonOptions['data-automation-id'] = options.automationId;
        commonOptions['data-interception'] = 'propagate';
        if (!options.menuProps) {
            return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_2__["ActionButton"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, commonOptions, { className: Object(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_2__["css"])(!options.disabled && this._classNames && this._classNames.add, _WebPartChrome_module_scss__WEBPACK_IMPORTED_MODULE_12__["default"].add), href: options.href, onClick: options.onClick }), commonOptions.label));
        }
        else {
            return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_2__["DefaultButton"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, commonOptions, { 
                // VSO #574996 - Utilize getStyles for button styling in WebPartChrome.tsx
                className: Object(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_2__["css"])(!options.disabled && this._classNames && this._classNames.add, _WebPartChrome_module_scss__WEBPACK_IMPORTED_MODULE_12__["default"].add, _WebPartChrome_module_scss__WEBPACK_IMPORTED_MODULE_12__["default"].addMenuForWebPartChrome, !this._classNames && _WebPartChrome_module_scss__WEBPACK_IMPORTED_MODULE_12__["default"].addMenuForWebPartChrome_nonFlighted), menuProps: options.menuProps, styles: {
                    label: {
                        fontWeight: 400
                    }
                } }), commonOptions.label));
        }
    };
    WebPartChrome.defaultProps = {
        isEditMode: false,
        seeAllLink: { show: false },
        addButton: { show: false },
        contentElement: react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null)
    };
    return WebPartChrome;
}(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_2__["BaseComponent"]));
/* harmony default export */ __webpack_exports__["default"] = (WebPartChrome);


/***/ }),

/***/ "MzPy":
/*!***********************************************************!*\
  !*** ../sp-component-utilities/lib/decorators/monitor.js ***!
  \***********************************************************/
/*! exports provided: UnexpectedFailure, ExpectedFailure, monitor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnexpectedFailure", function() { return UnexpectedFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpectedFailure", function() { return ExpectedFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "monitor", function() { return monitor; });
/* harmony import */ var _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ms/sp-telemetry */ "2q6Q");
/* harmony import */ var _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_0__);
/**
 * @copyright (c) Microsoft Corporation. All rights reserved.
 * @file monitor.ts
 */

function normalizeError(error) {
    if (error instanceof Error) {
        return error;
    }
    else {
        return new Error(error);
    }
}
/**
 * The unexpected failure for QoS monitor.
 */
var UnexpectedFailure = /** @class */ (function () {
    function UnexpectedFailure(tagNameSuffix, innerError, extraData) {
        this._tagNameSuffix = tagNameSuffix;
        this._innerError = normalizeError(innerError);
        this._extraData = extraData;
    }
    Object.defineProperty(UnexpectedFailure.prototype, "tagNameSuffix", {
        get: function () {
            return this._tagNameSuffix;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UnexpectedFailure.prototype, "innerError", {
        get: function () {
            return this._innerError;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UnexpectedFailure.prototype, "extraData", {
        get: function () {
            return this._extraData;
        },
        enumerable: true,
        configurable: true
    });
    return UnexpectedFailure;
}());

/**
 * The expected failure for QoS monitor.
 */
var ExpectedFailure = /** @class */ (function () {
    function ExpectedFailure(tagNameSuffix, innerError, extraData) {
        this._tagNameSuffix = tagNameSuffix;
        this._innerError = normalizeError(innerError);
        this._extraData = extraData;
    }
    Object.defineProperty(ExpectedFailure.prototype, "tagNameSuffix", {
        get: function () {
            return this._tagNameSuffix;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ExpectedFailure.prototype, "innerError", {
        get: function () {
            return this._innerError;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ExpectedFailure.prototype, "extraData", {
        get: function () {
            return this._extraData;
        },
        enumerable: true,
        configurable: true
    });
    return ExpectedFailure;
}());

/**
 * QoS monitor decorator.
 * @param scenarioName - The scenario name for QoS monitor.
 */
function monitor(scenarioName) {
    return function (target, key, 
    // tslint:disable-next-line:no-any
    descriptor) {
        if (descriptor.value) {
            var originalFunction_1 = descriptor.value; // tslint:disable-line:no-any
            // tslint:disable-next-line:no-any
            descriptor.value = function monitorWrapper() {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                var qosMonitor = new _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_0__["_QosMonitor"](scenarioName);
                // @todo Support the synchronous method with try-catch block.
                var promise = originalFunction_1.apply(this, args);
                return promise.then(function (result) {
                    qosMonitor.writeSuccess();
                    return result;
                }, function (error) {
                    if (error instanceof ExpectedFailure) {
                        qosMonitor.writeExpectedFailure(error.tagNameSuffix, error.innerError, error.extraData);
                        throw error.innerError;
                    }
                    else if (error instanceof UnexpectedFailure) {
                        qosMonitor.writeUnexpectedFailure(error.tagNameSuffix, error.innerError, error.extraData);
                        throw error.innerError;
                    }
                    else {
                        qosMonitor.writeUnexpectedFailure('UnexpectedFailure', error);
                        throw error;
                    }
                });
            };
        }
    };
}


/***/ }),

/***/ "NMfr":
/*!********************************************!*\
  !*** ./lib/displayFieldMap/MappedField.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * @file MappedField.ts
 * @copyright Microsoft Corporation. All rights reserved.
 */
var MappedField = /** @class */ (function () {
    function MappedField(target, displayField, onRenderCell) {
        this._target = target;
        this._displayField = displayField;
        this._onRenderCell = onRenderCell;
    }
    Object.defineProperty(MappedField.prototype, "target", {
        get: function () {
            return this._target;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MappedField.prototype, "sources", {
        get: function () {
            return this._displayField.sources || [];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MappedField.prototype, "linkUrls", {
        get: function () {
            return this._displayField.linkUrls || [];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MappedField.prototype, "heading", {
        get: function () {
            return this._displayField.heading || '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MappedField.prototype, "width", {
        get: function () {
            // tslint:disable-next-line:no-null-keyword
            return this._displayField.width === undefined || this._displayField.width === null
                ? 100
                : this._displayField.width;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MappedField.prototype, "onRenderCell", {
        get: function () {
            return this._onRenderCell;
        },
        enumerable: true,
        configurable: true
    });
    return MappedField;
}());
/* harmony default export */ __webpack_exports__["default"] = (MappedField);


/***/ }),

/***/ "NmG0":
/*!*************************************************************!*\
  !*** ../sp-live-persona-card/lib/FlightsAndKillSwitches.js ***!
  \*************************************************************/
/*! exports provided: isTriggerLPCOnFirstUserActionFlightEnabled */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isTriggerLPCOnFirstUserActionFlightEnabled", function() { return isTriggerLPCOnFirstUserActionFlightEnabled; });
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__);
// Copyright (c) Microsoft Corporation. All rights reserved.

// tslint:disable-next-line: export-name
function isTriggerLPCOnFirstUserActionFlightEnabled() {
    return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPFlight"].isEnabled(1697 /*TriggerLPCOnFirstUserAction*/);
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

/***/ "Pte6":
/*!*****************************************!*\
  !*** ./lib/oauthErrorRenderer/index.js ***!
  \*****************************************/
/*! exports provided: OAuthErrorRenderer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _OAuthErrorRenderer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./OAuthErrorRenderer */ "VPd/");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OAuthErrorRenderer", function() { return _OAuthErrorRenderer__WEBPACK_IMPORTED_MODULE_0__["default"]; });




/***/ }),

/***/ "Q1Rn":
/*!*****************************************************!*\
  !*** ./lib/captionElement/CaptionElement.styles.js ***!
  \*****************************************************/
/*! exports provided: getFluentStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFluentStyles", function() { return getFluentStyles; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
// Copyright (c) Microsoft Corporation. All rights reserved.

function getFluentStyles(props) {
    return {
        title: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, props.theme.fonts.xLarge)
    };
}


/***/ }),

/***/ "R983":
/*!********************************!*\
  !*** ./lib/pagination/Page.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @microsoft/office-ui-fabric-react-bundle */ "KL1q");
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ms/odsp-utilities-bundle */ "y88i");
/* harmony import */ var _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _IPageProps__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./IPageProps */ "E8QA");
/* harmony import */ var _Strings_resx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Strings.resx */ "WTsn");
var _Strings_resx__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./Strings.resx */ "WTsn", 1);
/* harmony import */ var _Pagination_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Pagination.module.scss */ "D2cq");
/**
 * @copyright Microsoft Corporation. All rights reserved.
 *
 * @file Page.tsx
 */







var Page = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(Page, _super);
    function Page() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._handleClick = function () {
            _this.props.onClick(_this.props.pageNumber, _this.props.pageType);
        };
        return _this;
    }
    Page.prototype.render = function () {
        var _a;
        var isPrevPage = this.props.pageType === _IPageProps__WEBPACK_IMPORTED_MODULE_4__["PageType"].Prev;
        var isNextPage = this.props.pageType === _IPageProps__WEBPACK_IMPORTED_MODULE_4__["PageType"].Next;
        var pageClassName = Object(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_2__["css"])((_a = {},
            _a[_Pagination_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].selected] = this.props.selected,
            _a[_Pagination_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].prev] = isPrevPage,
            _a[_Pagination_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].next] = isNextPage,
            _a), this.props.className);
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_2__["ActionButton"], { className: pageClassName, ariaLabel: this._pageAriaLabel, disabled: this.props.disabled, onClick: this._handleClick },
            isPrevPage && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_2__["Icon"], { iconName: _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_3__["Locale"].isRightToLeft ? 'ChevronRight' : 'ChevronLeft', "aria-hidden": 'true' })),
            this.props.text,
            isNextPage && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_2__["Icon"], { iconName: _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_3__["Locale"].isRightToLeft ? 'ChevronLeft' : 'ChevronRight', "aria-hidden": 'true' }))));
    };
    Object.defineProperty(Page.prototype, "_pageAriaLabel", {
        get: function () {
            var ariaLabel;
            if (this.props.pageNumber) {
                ariaLabel =
                    this.props.pageType === _IPageProps__WEBPACK_IMPORTED_MODULE_4__["PageType"].Default
                        ? _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_3__["StringHelper"].format(_Strings_resx__WEBPACK_IMPORTED_MODULE_5__["Page"], this.props.pageNumber)
                        : _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_3__["StringHelper"].format(_Strings_resx__WEBPACK_IMPORTED_MODULE_5__["PrevNextButtonAriaLabel"], this.props.text, this.props.pageNumber);
            }
            else {
                ariaLabel = _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_3__["StringHelper"].format(_Strings_resx__WEBPACK_IMPORTED_MODULE_5__["PrevNextButtonCompactModeAriaLabel"], this.props.text);
            }
            return ariaLabel;
        },
        enumerable: true,
        configurable: true
    });
    return Page;
}(react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]));
/* harmony default export */ __webpack_exports__["default"] = (Page);


/***/ }),

/***/ "RPH0":
/*!******************************!*\
  !*** ./lib/dateBox/index.js ***!
  \******************************/
/*! exports provided: DateBox, DateBoxSize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DateBox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DateBox */ "ZrIV");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DateBox", function() { return _DateBox__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DateBoxSize", function() { return _DateBox__WEBPACK_IMPORTED_MODULE_0__["DateBoxSize"]; });





/***/ }),

/***/ "S6GZ":
/*!*************************************************!*\
  !*** ./lib/loaders/CaptionElementEditLoader.js ***!
  \*************************************************/
/*! exports provided: CaptionElementEditLoader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CaptionElementEditLoader", function() { return CaptionElementEditLoader; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


// tslint:disable-next-line:variable-name
var CaptionElementEditLoaderComponent = react__WEBPACK_IMPORTED_MODULE_1__["lazy"](function () {
    return Promise.all(/*! import() | sp-caption-element-edit */[__webpack_require__.e("vendors~sp-caption-element-edit"), __webpack_require__.e("sp-caption-element-edit")]).then(__webpack_require__.bind(null, /*! ../deferredUtilities/CaptionElementEdit */ "Emhs")).then(function (module) { return ({
        default: module.default
    }); });
});
function CaptionElementEditLoader(props) {
    return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Suspense"], { fallback: false },
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](CaptionElementEditLoaderComponent, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, props))));
}


/***/ }),

/***/ "St77":
/*!*********************************************!*\
  !*** ./lib/placeHolder/Placeholder.scss.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* tslint:disable */
__webpack_require__(/*! ./Placeholder.css */ "hzLU");
var styles = {};
/* harmony default export */ __webpack_exports__["default"] = (styles);
/* tslint:enable */ 


/***/ }),

/***/ "UWqr":
/*!*********************************************!*\
  !*** external "@microsoft/sp-core-library" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_UWqr__;

/***/ }),

/***/ "VPd/":
/*!******************************************************!*\
  !*** ./lib/oauthErrorRenderer/OAuthErrorRenderer.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @microsoft/sp-diagnostics */ "ut3N");
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _placeHolder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../placeHolder */ "BngB");
/* harmony import */ var _loc_Strings_resx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./loc/Strings.resx */ "j3t2");
var _loc_Strings_resx__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./loc/Strings.resx */ "j3t2", 1);
/**
 * @Copyright (c) Microsoft Corporation.  All rights reserved.
 *
 * @file Common component used to display the error placeholder in case of OAuth Error.
 *
 */





/**
 * Common component used to display the error placeholder in case of OAuth Error.
 *
 * @internal
 */
var OAuthErrorRenderer = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(OAuthErrorRenderer, _super);
    function OAuthErrorRenderer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._onLogin = function () {
            _this._logAction('Click');
            window.location.href = _this.props.error.redirectUrl;
        };
        _this._logAction = function (action) {
            var logEntry = new _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__["_LogEntry"]('OAuthErrorRenderer', "MultiFactorAuthentication." + action, _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__["_LogType"].Event, {
                webpartAlias: _this.props.webpartAlias
            });
            _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__["_EngagementLogger"].logEventWithLogEntry(logEntry);
        };
        return _this;
    }
    /**
     * Render the error place holder user experience.
     */
    OAuthErrorRenderer.prototype.render = function () {
        var isMultiFactor = !!this.props.error.redirectUrl;
        var friendlyErrorMessage = isMultiFactor
            ? _loc_Strings_resx__WEBPACK_IMPORTED_MODULE_4__["MultiFactorAuthMessage"]
            : this.props.customErrorMessage || this.props.error.message;
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: this.props.contentClassName },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_placeHolder__WEBPACK_IMPORTED_MODULE_3__["Placeholder"], { icon: this.props.webpartIcon || 'Permissions', iconText: this.props.webpartName, buttonLabel: isMultiFactor && _loc_Strings_resx__WEBPACK_IMPORTED_MODULE_4__["LoginButtonLabel"], description: friendlyErrorMessage, onAdd: isMultiFactor && this._onLogin })));
    };
    // Should know how often multi-factor auth is occurring
    OAuthErrorRenderer.prototype.componentDidMount = function () {
        if (this.props.error.redirectUrl) {
            this._logAction('Render');
        }
    };
    return OAuthErrorRenderer;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));
/* harmony default export */ __webpack_exports__["default"] = (OAuthErrorRenderer);


/***/ }),

/***/ "W4J7":
/*!****************************************!*\
  !*** ./lib/placeHolder/Placeholder.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @microsoft/office-ui-fabric-react-bundle */ "KL1q");
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _fluentScope_FluentScope__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../fluentScope/FluentScope */ "edZz");
/* harmony import */ var _textClamp_TextClamp__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../textClamp/TextClamp */ "YxRI");
/* harmony import */ var _Placeholder_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Placeholder.scss */ "St77");
/**
 * @Copyright (c) Microsoft Corporation.  All rights reserved.
 *
 * @file Common web part placeholder component.
 *
 */







var MAX_DESCRIPTION_LINES = 3;
/**
 * Component used to place holder user experience in the web part display area.
 *
 * @internal
 */
/* tslint:disable:no-any */
var Placeholder = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(Placeholder, _super);
    function Placeholder() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._handleWindowResize = function () {
            if (!Placeholder.shouldUseCssClamp) {
                _this._processLines();
            }
        };
        return _this;
    }
    Object.defineProperty(Placeholder, "shouldUseCssClamp", {
        get: function () {
            if (this._shouldUseCssClamp === undefined) {
                this._shouldUseCssClamp = _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_3__["_BrowserDetection"].getBrowserInformation().browser !== _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_3__["_Browser"].IE;
            }
            return this._shouldUseCssClamp;
        },
        enumerable: true,
        configurable: true
    });
    Placeholder._isEllipsisOverflowKillSwitchActivated = function () {
        return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_3__["_SPKillSwitch"].isActivated(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_3__["Guid"].parse('e984b51f-12c9-45ea-abba-2dc3869cdc79'), '2018/3/27', 'ReplaceOverflowingTitleTextWithEllipsis');
    };
    Placeholder.prototype.UNSAFE_componentWillMount = function () {
        this._processLines = this._async.throttle(this._processLines, 500);
    };
    Placeholder.prototype.componentDidMount = function () {
        this._processLines();
        window.addEventListener('resize', this._handleWindowResize);
    };
    Placeholder.prototype.componentDidUpdate = function (prevProps) {
        // Since truncation can be lengthy, instead of complex shouldComponentUpdate
        // just simplify to width change
        if (this.props.description && this.props.webpartWidth !== prevProps.webpartWidth) {
            this._processLines();
        }
    };
    Placeholder.prototype.componentWillUnmount = function () {
        window.removeEventListener('resize', this._handleWindowResize);
    };
    /**
     * Render the place holder user experience.
     */
    Placeholder.prototype.render = function () {
        var _a = this.props, children = _a.children, contentClassName = _a.contentClassName, description = _a.description, icon = _a.icon, iconText = _a.iconText;
        this._descriptionId = "description-" + Math.random().toString();
        var isFluent = Object(_fluentScope_FluentScope__WEBPACK_IMPORTED_MODULE_4__["isFluentEnabledFor"])('Placeholder');
        var descriptionClassName = Object(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_2__["css"])('Placeholder-descriptionText', {
            'Placeholder-text-fluent': isFluent,
            'Placeholder-text-truncate': Placeholder.shouldUseCssClamp
        });
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: Object(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_2__["css"])('Placeholder', contentClassName, { 'Placeholder--autoHeight': !!children }) },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: 'Placeholder-container' },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: 'Placeholder-head' },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: 'Placeholder-headContainer' },
                        icon && react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_2__["Icon"], { className: 'Placeholder-icon', iconName: icon }),
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", { className: Object(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_2__["css"])('Placeholder-text', { ellipsisKillSwitch: Placeholder._isEllipsisOverflowKillSwitchActivated() }, { 'Placeholder-text-fluent': isFluent }) }, iconText))),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: 'Placeholder-description' },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", { className: descriptionClassName, id: this._descriptionId, ref: this._resolveRef('_placeholderDescription') }, description)),
                children,
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: 'Placeholder-description' },
                    this.buttonElement,
                    this._extraButtonElements))));
    };
    Object.defineProperty(Placeholder.prototype, "buttonElement", {
        /**
         * Render the button element.
         */
        get: function () {
            return (this.props.buttonLabel &&
                this._renderButtonElement({
                    description: this.props.description,
                    label: this.props.buttonLabel,
                    onClick: this.props.onAdd
                }, true));
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Focus the button element.
     */
    Placeholder.prototype.focusOnPlaceHolderButton = function () {
        if (this._placeholderButton) {
            this._placeholderButton.focus();
        }
    };
    Object.defineProperty(Placeholder.prototype, "_extraButtonElements", {
        /**
         * If the placeholder contains multiple buttons, render these buttons element.
         */
        get: function () {
            var _this = this;
            return (this.props.extraButtons &&
                this.props.extraButtons.map(function (buttonProps, index) { return _this._renderButtonElement(buttonProps, false); }));
        },
        enumerable: true,
        configurable: true
    });
    Placeholder.prototype._processLines = function () {
        if (this._placeholderDescription &&
            // Don't truncate in the native app which has less affordances for seeing full instructions
            !_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_3__["_BrowserUtilities"].isWebViewHosted()) {
            Object(_textClamp_TextClamp__WEBPACK_IMPORTED_MODULE_5__["clampElement"])(this._placeholderDescription, MAX_DESCRIPTION_LINES, this.props.description);
        }
    };
    Placeholder.prototype._renderButtonElement = function (buttonProps, isDefaultButton) {
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_2__["PrimaryButton"], { componentRef: isDefaultButton && this._resolveRef('_placeholderButton'), "data-automation-id": 'placeholderButton', onClick: buttonProps.onClick, ariaDescription: buttonProps.description }, buttonProps.label));
    };
    return Placeholder;
}(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_2__["BaseComponent"]));
/* harmony default export */ __webpack_exports__["default"] = (Placeholder);


/***/ }),

/***/ "WJ35":
/*!*************************************!*\
  !*** ./lib/dateTimeHelper/index.js ***!
  \*************************************/
/*! exports provided: getRelativeDateTimeStringForLists, isSameDay */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _getRelativeDateTimeStringForLists__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getRelativeDateTimeStringForLists */ "eikI");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getRelativeDateTimeStringForLists", function() { return _getRelativeDateTimeStringForLists__WEBPACK_IMPORTED_MODULE_0__["getRelativeDateTimeStringForLists"]; });

/* harmony import */ var _isSameDay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isSameDay */ "tDzM");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isSameDay", function() { return _isSameDay__WEBPACK_IMPORTED_MODULE_1__["isSameDay"]; });





/***/ }),

/***/ "WMj5":
/*!******************************************!*\
  !*** ./lib/lessText/LessText.module.css ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../../common/temp/node_modules/.pnpm/css-loader@3.2.1_webpack@4.44.2/node_modules/css-loader/dist/cjs.js!../../../../common/temp/node_modules/.pnpm/postcss-loader@3.0.0/node_modules/postcss-loader/src??postcss!./LessText.module.css */ "lPa3");
var loader = __webpack_require__(/*! @microsoft/load-themed-styles */ "jOlS");

if(typeof content === "string") content = [[module.i, content]];

// add the styles to the DOM
for (var i = 0; i < content.length; i++) loader.loadStyles(content[i][1], true);

if(content.locals) module.exports = content.locals;

/***/ }),

/***/ "WTsn":
/*!*************************************!*\
  !*** ./lib/pagination/Strings.resx ***!
  \*************************************/
/*! exports provided: Page, PaginationPrev, PaginationNext, PrevNextButtonAriaLabel, PrevNextButtonCompactModeAriaLabel, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"Page\":\"[!!--##Ƥàĝē {0}##--!!]\",\"PaginationPrev\":\"[!!--##Ƥŕēvĩōũś##--!!]\",\"PaginationNext\":\"[!!--##Ńēxţ##--!!]\",\"PrevNextButtonAriaLabel\":\"[!!--##Ĝō ţō ţĥē {0} ƥàĝē, ŷōũ àŕē ćũŕŕēńţĺŷ ōń ƥàĝē {1}.##--!!]\",\"PrevNextButtonCompactModeAriaLabel\":\"[!!--##Ĝō ţō ţĥē {0} ƥàĝē.##--!!]\"}");

/***/ }),

/***/ "X+PM":
/*!*********************************************!*\
  !*** external "@microsoft/sp-page-context" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_X_PM__;

/***/ }),

/***/ "X3LC":
/*!******************************************!*\
  !*** ./lib/webPartTitle/WebPartTitle.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @microsoft/office-ui-fabric-react-bundle */ "KL1q");
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @microsoft/sp-lodash-subset */ "Pk8u");
/* harmony import */ var _microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _captionElement_CaptionElement__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../captionElement/CaptionElement */ "Ar4x");
/* harmony import */ var _Flights__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Flights */ "dVDx");
/* harmony import */ var _WebPartTitle_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./WebPartTitle.styles */ "s20b");







var HEADING_LEVEL = 2;
/**
 * Title for various webparts.
 */
var WebPartTitle = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(WebPartTitle, _super);
    function WebPartTitle(props) {
        var _this = _super.call(this, props) || this;
        _this._captionElementRef = react__WEBPACK_IMPORTED_MODULE_1__["createRef"]();
        return _this;
    }
    WebPartTitle.prototype.render = function () {
        var _a = this.props, alignPosition = _a.alignPosition, className = _a.className, edit = _a.edit, marginBottomSize = _a.marginBottomSize, onTitleChange = _a.onTitleChange, placeholder = _a.placeholder, title = _a.title, theme = _a.theme;
        var classNameForTheme = Object(_Flights__WEBPACK_IMPORTED_MODULE_5__["isDeprecateEmphasisClassFlightEnabled"])()
            ? Object(_WebPartTitle_styles__WEBPACK_IMPORTED_MODULE_6__["getClassNames"])(_WebPartTitle_styles__WEBPACK_IMPORTED_MODULE_6__["getStyles"], { variantTheme: theme }).captionElement
            : new _WebPartTitle_styles__WEBPACK_IMPORTED_MODULE_6__["WebPartTitleStyles"]().getClassNames({ variantTheme: theme }).captionElement;
        var cssClassName = Object(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_2__["css"])(className, classNameForTheme);
        var captionElementProps = {
            type: _captionElement_CaptionElement__WEBPACK_IMPORTED_MODULE_4__["CaptionElementType"].Title,
            isEditMode: edit,
            text: title,
            onChange: onTitleChange,
            placeholder: placeholder,
            alignPosition: alignPosition,
            className: cssClassName,
            headingLevel: HEADING_LEVEL,
            marginBottomSize: marginBottomSize
        };
        if (!edit && !title) {
            return false;
        }
        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_captionElement_CaptionElement__WEBPACK_IMPORTED_MODULE_4__["default"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ ref: this._captionElementRef }, captionElementProps));
    };
    WebPartTitle.prototype.value = function () {
        return this._captionElementRef.current.value();
    };
    WebPartTitle.prototype.focusOnWebPartTitle = function () {
        this._captionElementRef.current.focusOnCaptionElement();
    };
    WebPartTitle.defaultProps = {
        edit: false,
        title: undefined,
        onTitleChange: _microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_3__["noop"],
        placeholder: undefined,
        className: undefined,
        alignPosition: _captionElement_CaptionElement__WEBPACK_IMPORTED_MODULE_4__["CaptionElementAlignPosition"].PageDirection,
        marginBottomSize: 'None'
    };
    return WebPartTitle;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));
/* harmony default export */ __webpack_exports__["default"] = (WebPartTitle);


/***/ }),

/***/ "YDJB":
/*!************************************************************!*\
  !*** ./lib/baseCollectionWebPart/BaseCollectionFlights.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ms/sp-telemetry */ "2q6Q");
/* harmony import */ var _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_1__);
// @copyright Microsoft Corporation. All rights reserved.


var WEX_MY_SITE_CACHE_SMART_RACE = 1549; /* MySiteCacheSmartRaceRefactor */
var USE_TIERED_CACHING = 1703; /* WEXTieredCaching */
var USE_MY_SITE_CACHE = 1705; /* WEXMySiteCacheMangementTieredCaching */
var USE_INDEXED_DB = 1693; /* WEXUseIndexedDBTieredCaching */
var BaseCollectionFlights = /** @class */ (function () {
    function BaseCollectionFlights() {
    }
    BaseCollectionFlights.isMySiteCacheSmartRaceRefactorEnabled = function () {
        return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPFlight"].isEnabled(WEX_MY_SITE_CACHE_SMART_RACE);
    };
    BaseCollectionFlights.isTieredCachingEnabled = function () {
        return (BaseCollectionFlights._isTieredCachingEnabled() &&
            (BaseCollectionFlights._isMySiteCacheTieredModelEnabled() ||
                BaseCollectionFlights._isIDBTieredModelEnabled()));
    };
    BaseCollectionFlights._isTieredCachingEnabled = function () {
        return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPFlight"].isEnabled(USE_TIERED_CACHING);
    };
    BaseCollectionFlights._isMySiteCacheTieredModelEnabled = function () {
        return (_ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_1__["_SPPerfExperiment"].getVariantAndTrackExperiment(_ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_1__["_PerformanceExperiment"].WEXMySiteCacheTieredCachingExp) === 1 || _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPFlight"].isEnabled(USE_MY_SITE_CACHE));
    };
    BaseCollectionFlights._isIDBTieredModelEnabled = function () {
        return (_ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_1__["_SPPerfExperiment"].getVariantAndTrackExperiment(_ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_1__["_PerformanceExperiment"].WEXUseIndexedDBTieredCachingExp) === 1 || _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPFlight"].isEnabled(USE_INDEXED_DB));
    };
    return BaseCollectionFlights;
}());
/* harmony default export */ __webpack_exports__["default"] = (BaseCollectionFlights);


/***/ }),

/***/ "Ycni":
/*!*************************************!*\
  !*** external "@ms/i18n-utilities" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_Ycni__;

/***/ }),

/***/ "YxRI":
/*!************************************!*\
  !*** ./lib/textClamp/TextClamp.js ***!
  \************************************/
/*! exports provided: clampText, clampElement, TextClamp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clampText", function() { return clampText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clampElement", function() { return clampElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextClamp", function() { return TextClamp; });
var TextClampService = /** @class */ (function () {
    function TextClampService() {
        this._x = 0;
        this._y = 0;
        this._line = 1;
        this._whitespace = /(?!\xA0)\s/;
        this._hyphen = /\u2010|\u002d|\u00ad/;
        this._metrics = {};
    }
    Object.defineProperty(TextClampService, "instance", {
        get: function () {
            return TextClampService._instance || (TextClampService._instance = new TextClampService());
        },
        enumerable: true,
        configurable: true
    });
    TextClampService.prototype.clampText = function (props) {
        this._resetCursor();
        return this._clampText(props);
    };
    TextClampService.prototype.clampElement = function (element, maxLines, otherText, ellipsis) {
        if (!element) {
            return { text: '', lines: 0 };
        }
        var rect = element.getBoundingClientRect();
        var width = Math.round(rect.width);
        var height = Math.round(rect.height);
        var computedStyle = this._getComputedStyle(element);
        if (computedStyle.boxSizing === 'border-box') {
            width -=
                this._parseInt(computedStyle.borderRightWidth) +
                    this._parseInt(computedStyle.borderLeftWidth) +
                    this._parseInt(computedStyle.paddingRight) +
                    this._parseInt(computedStyle.paddingLeft);
            height -=
                this._parseInt(computedStyle.borderTopWidth) +
                    this._parseInt(computedStyle.borderBottomWidth) +
                    this._parseInt(computedStyle.paddingTop) +
                    this._parseInt(computedStyle.paddingBottom);
        }
        //
        // HACK: IE breaks text if width equals element width - decrease width by 1 for IE
        //
        // tslint:disable-next-line:no-string-literal
        if (window['MSInputMethodContext'] && document['documentMode']) {
            --width;
        }
        var size = parseFloat(computedStyle.fontSize);
        var calculatedSize = 1.1 * size;
        var lineHeight = Math.floor(computedStyle.lineHeight === 'normal' ? calculatedSize : parseFloat(computedStyle.lineHeight));
        this._resetCursor();
        if (element.childElementCount && !otherText) {
            return this._clampComplexElement(element, width, height, lineHeight, maxLines, ellipsis);
        }
        var result = this._clampText({
            text: otherText || element.textContent,
            maxLines: maxLines,
            ellipsis: ellipsis,
            width: width,
            height: height,
            lineHeight: lineHeight,
            style: computedStyle.fontStyle || '',
            variant: computedStyle.fontVariant || '',
            weight: computedStyle.fontWeight || '',
            size: size,
            family: computedStyle.fontFamily || ''
        });
        element.textContent = result.text;
        return result;
    };
    TextClampService.prototype._getComputedStyle = function (element) {
        var key = '__computedStyle';
        return element[key] || (element[key] = getComputedStyle(element));
    };
    TextClampService.prototype._parseInt = function (value) {
        var n = parseInt(value, 10);
        return !isNaN(n) ? n : 0;
    };
    TextClampService.prototype._createCanvas = function () {
        var canvas = document.createElement('canvas');
        canvas.width = 1;
        canvas.height = 1;
        return canvas.getContext('2d');
    };
    TextClampService.prototype._resetCursor = function () {
        this._x = 0;
        this._y = 0;
        this._line = 1;
    };
    TextClampService.prototype._getFontStyle = function (font, otherWeight) {
        return ("" + (font.style || 'normal') +
            (" " + (font.variant || 'normal')) +
            (" " + (otherWeight || font.weight || 'normal')) +
            (" " + font.size + "px") +
            (" " + (font.family || 'sans-serif')));
    };
    TextClampService.prototype._setFont = function (font) {
        if (!this._context) {
            this._context = this._createCanvas();
        }
        this._font = this._getFontStyle(font);
        this._numericWeight = parseInt(font.weight, 10);
        if ((this._isExtendedWeight =
            !isNaN(this._numericWeight) &&
                this._numericWeight !== /*normal*/ 400 &&
                this._numericWeight !== /*bold*/ 700)) {
            if (!this._context2) {
                this._context2 = this._createCanvas();
            }
            this._context.font = this._getFontStyle(font, 'normal');
            this._context2.font = this._getFontStyle(font, 'bold');
        }
        else {
            this._context.font = this._font;
        }
    };
    TextClampService.prototype._measureChar = function (char) {
        var metrics = this._metrics[this._font] || (this._metrics[this._font] = {});
        var width = metrics[char];
        if (width) {
            return width;
        }
        width = this._context.measureText(char).width;
        if (this._isExtendedWeight) {
            var width700 = this._context2.measureText(char).width;
            var delta = (width700 - width) / 3;
            width -= /*normal*/ ((400 - this._numericWeight) / 100) * delta;
        }
        metrics[char] = width;
        return width;
    };
    TextClampService.prototype._clampText = function (props) {
        var text = props.text, width = props.width, height = props.height, lineHeight = props.lineHeight, maxLines = props.maxLines, _a = props.ellipsis, ellipsis = _a === void 0 ? '\u2026' : _a;
        if (!text || !text.length || !width || !height || height < lineHeight || !maxLines) {
            return { text: '', lines: 0 };
        }
        this._setFont(props);
        var breakpoint;
        var wasWhitespace;
        var isLastLine = maxLines === this._line;
        if (isLastLine) {
            this._x += this._measureChar(ellipsis);
        }
        var len = text.length;
        for (var i = 0; i < len;) {
            var char = text[i];
            var isWhitespace = this._whitespace.test(char);
            if (wasWhitespace && isWhitespace) {
                ++i;
                continue;
            }
            var charWidth = this._measureChar(char);
            if (this._x + charWidth > width) {
                if (isLastLine) {
                    return {
                        text: text.substring(0, wasWhitespace ? i - 1 : i) + ellipsis,
                        didClamp: true,
                        lines: this._line
                    };
                }
                if (breakpoint && !isWhitespace) {
                    i = breakpoint;
                }
                else if (isWhitespace) {
                    ++i;
                }
                this._y += lineHeight;
                isLastLine = ++this._line === maxLines || this._y + lineHeight * 2 > height;
                this._x = isLastLine ? this._measureChar(ellipsis) : 0;
                breakpoint = 0;
            }
            else {
                if (isWhitespace || this._hyphen.test(char)) {
                    breakpoint = i;
                }
                this._x += charWidth;
                ++i;
            }
            wasWhitespace = isWhitespace;
        }
        return { text: text, lines: this._line };
    };
    TextClampService.prototype._clampComplexElement = function (element, width, height, lineHeight, maxLines, ellipsis) {
        var treeWalker = document.createTreeWalker(element, NodeFilter.SHOW_TEXT, 
        /*filter*/ null, // tslint:disable-line:no-null-keyword
        /*entityReferenceExpansion*/ false);
        var node;
        while ((node = treeWalker.nextNode())) {
            var computedStyle = this._getComputedStyle(node.parentElement || node.parentNode);
            var result = this._clampText({
                text: node.nodeValue,
                maxLines: maxLines,
                ellipsis: ellipsis,
                width: width,
                height: height,
                lineHeight: lineHeight,
                style: computedStyle.fontStyle || '',
                variant: computedStyle.fontVariant || '',
                weight: computedStyle.fontWeight || '',
                size: parseFloat(computedStyle.fontSize),
                family: computedStyle.fontFamily || ''
            });
            if (result.didClamp) {
                node.nodeValue = result.text;
                while ((node = treeWalker.nextNode())) {
                    node.parentNode.removeChild(node);
                }
                return result;
            }
        }
    };
    return TextClampService;
}());
/**
 * Truncates a text string to fit a given bounding box, and ends the string
 * with an ellipsis if the text overflows.
 *
 * @export
 * @function clampText
 * @param props - Text clamp settings
 * @return The text clamp result
 */
function clampText(props) {
    return TextClampService.instance.clampText(props);
}
/**
 * Using getComputedStyle and getBoundingClientRect, this function extracts all
 * parameters required by the clampText function and truncates the text content
 * of the HTMLElement to fit its bounding box.
 *
 * @export
 * @function clampElement
 * @param element - Source element to extract properties from
 * @param maxLines - Maximum number of lines before clamping text
 * @param otherText - If specified, overrides the text content of the element
 * @param ellipsis - If specified, overrides the ellipsis character
 * @return The ITextClampResult result.
 */
function clampElement(element, maxLines, otherText, ellipsis) {
    return TextClampService.instance.clampElement(element, maxLines, otherText, ellipsis);
}
/**
 * A stateless React component that truncates a text string to fit a given bounding box,
 * and ends the string with an ellipsis if the text overflows.
 *
 * @export
 * @function TextClamp
 * @param props - Behavioral text clamping settings
 * @return The clamped text
 */
// tslint:disable-next-line:variable-name
var TextClamp = function (props) {
    // tslint:disable-next-line:no-any
    return clampText(props).text;
};


/***/ }),

/***/ "ZE7E":
/*!************************************************!*\
  !*** ./lib/displayFieldMap/DisplayFieldMap.js ***!
  \************************************************/
/*! exports provided: LINK_FIELDNAME_SUFFIX, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LINK_FIELDNAME_SUFFIX", function() { return LINK_FIELDNAME_SUFFIX; });
/* harmony import */ var _CalculatedField__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CalculatedField */ "e83p");
/**
 * @file Functions to transpose data from one named structure to another that is compatible with a display template.
 * @copyright Microsoft Corporation. All rights reserved.
 */

var LINK_FIELDNAME_SUFFIX = '_linkUrl';
var DisplayFieldMap = /** @class */ (function () {
    function DisplayFieldMap(map) {
        this._map = map;
    }
    // Return an individual value from an object.
    DisplayFieldMap.prototype.fieldValue = function (field, row) {
        if (field instanceof _CalculatedField__WEBPACK_IMPORTED_MODULE_0__["default"]) {
            return field.formatter(row);
        }
        else {
            return this._firstIdentifiedValue(row, field.sources);
        }
    };
    // Return an individual linkUrl from an object.
    DisplayFieldMap.prototype.fieldLinkUrl = function (field, row) {
        return this._firstIdentifiedValue(row, field.linkUrls);
    };
    // Return an object with its attributes re-mapped to different property names as identified in the
    // display field map.  Optionally pass in a preProcess function to manipulate the data prior to
    // applying the display map.
    DisplayFieldMap.prototype.transposeRow = function (row, preProcess) {
        if (!row) {
            // marker for triggering onRenderMissingRow for infinite scroll
            return row;
        }
        var sourceRow = preProcess ? preProcess(row) : row;
        var result = {};
        if (this._map) {
            for (var i = 0; i < this._map.length; i++) {
                var field = this._map[i];
                result[field.target] = this.fieldValue(field, sourceRow);
                if (field.linkUrls) {
                    result[field.target + LINK_FIELDNAME_SUFFIX] = this.fieldLinkUrl(field, sourceRow);
                }
            }
        }
        return result;
    };
    // Returns all objects re-mapped via the transposeRow function.
    DisplayFieldMap.prototype.transpose = function (rows, preProcess) {
        var result = [];
        for (var i = 0; i < rows.length; i++) {
            result[i] = this.transposeRow(rows[i], preProcess);
        }
        return result;
    };
    Object.defineProperty(DisplayFieldMap.prototype, "map", {
        get: function () {
            return this._map;
        },
        enumerable: true,
        configurable: true
    });
    DisplayFieldMap.prototype._firstIdentifiedValue = function (row, sources) {
        for (var i = 0; i < sources.length; i++) {
            var fieldName = sources[i];
            var value = row[fieldName];
            // Skip if the value is empty (undefined, null or an empty string)
            if (value !== undefined && value !== null && value !== '') {
                // tslint:disable-line:no-null-keyword
                return row[fieldName];
            }
        }
        return undefined; // defaults to undefined
    };
    return DisplayFieldMap;
}());
/* harmony default export */ __webpack_exports__["default"] = (DisplayFieldMap);


/***/ }),

/***/ "ZUan":
/*!************************************!*\
  !*** ./lib/webPartChrome/index.js ***!
  \************************************/
/*! exports provided: WebPartChrome */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _WebPartChrome__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./WebPartChrome */ "LjNA");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WebPartChrome", function() { return _WebPartChrome__WEBPACK_IMPORTED_MODULE_0__["default"]; });




/***/ }),

/***/ "ZrIV":
/*!********************************!*\
  !*** ./lib/dateBox/DateBox.js ***!
  \********************************/
/*! exports provided: DateBoxSize, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateBoxSize", function() { return DateBoxSize; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @microsoft/office-ui-fabric-react-bundle */ "KL1q");
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @microsoft/sp-lodash-subset */ "Pk8u");
/* harmony import */ var _microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ms_i18n_utilities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ms/i18n-utilities */ "Ycni");
/* harmony import */ var _ms_i18n_utilities__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ms_i18n_utilities__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _dateTimeHelper_isSameDay__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../dateTimeHelper/isSameDay */ "tDzM");
/* harmony import */ var _fluentScope_FluentScope__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../fluentScope/FluentScope */ "edZz");
/* harmony import */ var _DateBox_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./DateBox.module.scss */ "6fI1");
/* harmony import */ var _DateBox_resx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./DateBox.resx */ "EpOV");
var _DateBox_resx__WEBPACK_IMPORTED_MODULE_8___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./DateBox.resx */ "EpOV", 1);









/**
 * This enums defines the size options of the date box.
 */
// tslint:disable-next-line:typedef variable-name
var DateBoxSize = { Small: 0, Medium: 1, Large: 2 };
/**
 * Mapping from the date box size to class names that indicates size.
 * The keys of the mapping should align with the DateBoxSize enum.
 * @todo #281147: Use the enum as the key after upgrade to TypeScript 2.1.3.
 */
var sizeClassNameMapping = {
    0: _DateBox_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].boxIsSmall,
    1: _DateBox_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].boxIsMedium,
    2: _DateBox_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].boxIsLarge
};
/**
 * The date box component.
 */
var DateBox = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(DateBox, _super);
    function DateBox() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DateBox.prototype.render = function () {
        var _a = this.props, startDate = _a.startDate, endDate = _a.endDate;
        this._sizeClassName = _microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_3__["get"](sizeClassNameMapping, this.props.size);
        if (!startDate || !endDate || Object(_dateTimeHelper_isSameDay__WEBPACK_IMPORTED_MODULE_5__["isSameDay"])(startDate, endDate)) {
            return this._singleDayDateBoxElement;
        }
        else {
            return this._multipleDaysDateBoxElement;
        }
    };
    Object.defineProperty(DateBox.prototype, "_singleDayDateBoxElement", {
        get: function () {
            var _a = this.props, startDate = _a.startDate, endDate = _a.endDate, formatMonth = _a.formatMonth, formatDay = _a.formatDay;
            var date = startDate || endDate;
            var month = date ? formatMonth(date) : _DateBox_resx__WEBPACK_IMPORTED_MODULE_8__["DefaultMonthText"];
            // @todo, May replace this '01' with a string generated from i18n-utilities
            var day = date ? formatDay(date) : '01';
            var isFluent = Object(_fluentScope_FluentScope__WEBPACK_IMPORTED_MODULE_6__["isFluentEnabledFor"])('EventsWebPart');
            return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: Object(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_2__["css"])(_DateBox_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].box, _DateBox_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].boxIsSingleDay, this._sizeClassName, this.props.className), "data-automation-id": 'singleDayBox' },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: Object(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_2__["css"])(_DateBox_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].month, isFluent && _DateBox_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].fluent), "data-automation-id": 'singleDayMonthContainer' }, month),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: Object(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_2__["css"])(_DateBox_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].day, isFluent && _DateBox_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].fluent), "data-automation-id": 'singleDayDayContainer' }, day)));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DateBox.prototype, "_multipleDaysDateBoxElement", {
        get: function () {
            var _a = this.props, startDate = _a.startDate, endDate = _a.endDate, formatDate = _a.formatDate;
            var isFluent = Object(_fluentScope_FluentScope__WEBPACK_IMPORTED_MODULE_6__["isFluentEnabledFor"])('EventsWebPart');
            return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: Object(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_2__["css"])(_DateBox_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].box, _DateBox_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].boxIsMultipleDays, this._sizeClassName, this.props.className), "data-automation-id": 'multipleDayBox' },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: Object(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_2__["css"])(_DateBox_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].date, isFluent && _DateBox_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].fluent), "data-automation-id": 'multipleDayStartDateContainer' }, formatDate(startDate)),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("hr", { className: _DateBox_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].separator }),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: Object(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_2__["css"])(_DateBox_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].date, isFluent && _DateBox_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].fluent), "data-automation-id": 'multipleDayEndDateContainer' }, formatDate(endDate))));
        },
        enumerable: true,
        configurable: true
    });
    DateBox.defaultProps = {
        formatDate: function (date) {
            return _ms_i18n_utilities__WEBPACK_IMPORTED_MODULE_4__["LocaleFormat"].formatDate(date, { skeleton: 'MMMd' }).toUpperCase();
        },
        formatMonth: function (date) {
            return _ms_i18n_utilities__WEBPACK_IMPORTED_MODULE_4__["LocaleFormat"].formatDate(date, { skeleton: 'MMM' }).toUpperCase();
        },
        formatDay: function (date) {
            return _ms_i18n_utilities__WEBPACK_IMPORTED_MODULE_4__["LocaleFormat"].formatDate(date, { skeleton: 'd' });
        }
    };
    return DateBox;
}(react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]));
/* harmony default export */ __webpack_exports__["default"] = (DateBox);


/***/ }),

/***/ "at2l":
/*!*****************************************!*\
  !*** ./lib/imaging/DoughboyDetector.js ***!
  \*****************************************/
/*! exports provided: DoughboyDetector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DoughboyDetector", function() { return DoughboyDetector; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @microsoft/sp-diagnostics */ "ut3N");
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ms/sp-component-utilities */ "hiL/");
/* harmony import */ var _ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_4__);
/**
 * @copyright Microsoft Corporation. All rights reserved.
 *
 * @file A react wrapper component that helps detect doughboy image for persona avatar.
 */





// This list and doughboy detection logic is inspired from image-lib.
// @see https://msfast.visualstudio.com/Developer/_git/npm-image-lib?path=%2Fsrc%2FdoughboyDetection%2FisDoughboy.ts
var doughboyImageFingerprints = new Set([
    '03590920bdfd864322cf7e8cca891bb4',
    '0381c1bcfc0b809623b805e322dd9fa1',
    '03d374b16722d252588fa2d58a3e828d',
    '0540187fe91e3b78e3b5d06999eebf80',
    '083313c7a8083e625c0def330dbd7cdd',
    '0974242efa7f7b9bb52240ee615b931b',
    '0bbb13911b2ce26da17bbdf2ea3404b6',
    '0d827eba349aa0591be57331540fc4f4',
    '0e47add0cdf9530b9e30ddef0c489a40',
    '0f78c3aa1a3da070d8f62bb9a2ee76ae',
    '0fe8fe2f5220263be4cbd5f61d9cf23c',
    '178a70df6ddfa637e3d4f0ea9a80fbdd',
    '1a960363e8daa165d3b82144b0d68c03',
    '1e033e719ef573ec796c38bf8ac41dfc',
    '1f420b466365299439abf6fe2f8bff6a',
    '20f0b5fb7de21fa889b002714ec58f20',
    '2149d6090d915f849f5c33c07545fb03',
    '23d161d98611bae938697c4d0af3bfd4',
    '241b2579d59d10255b2e405fbcbb9117',
    '26736ef07954f237039d261c357f06e5',
    '279ec9ccb88c02985b4e1f645b755faf',
    '2d523e15f73a2b345887c8b8299c8d3c',
    '2fce211aefcaec7742455aa616edfa32',
    '2f73a4291c58a29acc783b73fa88c282',
    '3178a5744ef0cd2b61757583d7b7ccf1',
    '319f83a0e835d32ce2660a4de654a7c0',
    '3a9c8d1a8fae79004ed36c0147bdd71b',
    '3fa3e0b2e84cb77f00799dca10f1a03e',
    '4a48f26592f4e1498d7a478a4c48609c',
    '41ebba55d20ff0a87734a09d88dc8f27',
    '4312d1e9ec65cb2412e83a64f50fcdd1',
    '44f2e736a8f04d1b47a1151eb37e0a64',
    '48e8c755618be2d66c67976910bac81f',
    '49fe29d48bd08304cb7a9be0a4256b8a',
    '5b60516651aebbbc796eafdee967ef2c',
    '613c9c11d6bfdec3dd2a568412b79762',
    '62fe9bb236110e4553483b02e1989986',
    '68df1aaa4d4d20f6749dcf0cbcbfd182',
    '6c06b3944a82b194dd56b848d5c1e53f',
    '6fe016add870f202c0a30c70ee943c73',
    '7024c1dc5ed913c848ac81adadfedee4',
    '7ad602295f8386b7615b582d87bcc294',
    '7f25de15c2e701c901252f81c1911af2',
    '8193ab3946149e9175a3c3d44219e9e1',
    '8a2bceaca7e84b8f4da535d772625c6f',
    '8a430e2d85dc31b60c0c6f68d7cc4c20',
    '8b02cb6c9f9d7a7e895970d94317e20a',
    '8ddba906d9614422695d3c9756afee7f',
    '8f296bb8aac7be4f08409d8dbbbc8714',
    '9029ea4d3ee7796fe043710dfff1d218',
    '90ac8c284c2ac3a6f6b7e6518dbb6227',
    '965331b9e159f7e263f86866902241e8',
    '98f88501895b89e844d24793dadc8a9f',
    '9a85f4ab720503d37748e2d854a238dc',
    '9aae9266066558e0e42223ed4d82b1f8',
    'a284f85a5a3096a5e90f670316993365',
    'a3f3c88a874da09d43c8f88deb9246b6',
    'ab08afa407a9c009513a07525fadf367',
    'ba3cc3f8be4b187472e2f5f7d5376bb9',
    'b3b9212834745aa4457f459f12e56653',
    'b8a930a9d063513ea9bba50a34aaaba5',
    'b8f6d5994ef9e9a96180ea43dbb00ed6',
    'baa367f8c4aef7abdcb912c61f53ed10',
    'bc4fab3f78291f699922e57650be557f',
    'c065f1d4e77c3678be1ff6aa835dda69',
    'c4ae58fb4e94e08cfff98beddeb615ac',
    'c63681d72227d0813a5cdfccb62be638',
    'c903233a37600953361096a5c28d0d46',
    'c9dc379c327bef6f8db124f5f013fe22',
    'cbcecad0b1eb14fe8186c566f22b0fa1',
    'cd26d43c2fabf764bfc054d06462f64f',
    'cd849e71a1785cc1f046b181e68bbec3',
    'd283507fbbeb97715a321ddbd2442164',
    'd6c8114c17555266c90ad015c2acd8b9',
    'dacd2fb8ace0a4176a74a228539b3d33',
    'e6ede0691f3312bd6fd9f1066153a868',
    'e72abfe847c8792f99bc8b2cbeb65886',
    'ea754dbc9eba7d06ae4b444f722c24df',
    'f0d90ca687e974534dfc12798166c7e6',
    'ffb18190d6e56748b5d6d743ff7421ad'
]);
var LOAD_DELAY_MS = 7000; // based on 95th load percentile
var AFD_USERPHOTO_SUBPATH = '_vti_bin/afdcache.ashx/_userprofile/userphoto.jpg';
var CDN_USERPHOTO_SUBPATH = '/_userprofile/userphoto.jpg';
var PRIVATECDN_PREFIX = 'https://privatecdn';
var USERPHOTO_SUBPATH = '/_layouts/15/userphoto.aspx';
var CALLER_ID = 'DoughboyDetector';
var USERPHOTO = 'UserPhoto';
var CDNUSERPHOTO = 'CDNUserPhoto';
var AFDCDNUSERPHOTO = 'AFDCDNUserPhoto';
var DoughboyDetector = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(DoughboyDetector, _super);
    function DoughboyDetector(props) {
        var _this = _super.call(this, props) || this;
        _this._unmounted = false;
        _this._completeDetection = function () {
            if (_this.props.onDetectCompleted) {
                _this.props.onDetectCompleted();
            }
        };
        _this.revokeBlobUrl = function () {
            if (_this._blobUrl) {
                URL.revokeObjectURL(_this._blobUrl);
                _this._blobUrl = undefined;
            }
        };
        _this._logSource = _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__["_LogSource"].create('DoughboyDetector');
        var imageData = DoughboyDetector._imageDataCache.get(props.imageUrl);
        _this.state = {
            imageData: imageData
        };
        return _this;
    }
    DoughboyDetector.prototype.componentDidMount = function () {
        var _this = this;
        if (this.state.imageData) {
            requestAnimationFrame(this._completeDetection);
        }
        else {
            if (!this.props.disableDelayDetect) {
                setTimeout(function () {
                    _this._resolveImage(_this.props.imageUrl).then(_this._completeDetection, _this._completeDetection);
                }, LOAD_DELAY_MS);
            }
            else {
                this._resolveImage(this.props.imageUrl).then(this._completeDetection, this._completeDetection);
            }
        }
    };
    DoughboyDetector.prototype.UNSAFE_componentWillReceiveProps = function (nextProps) {
        var _this = this;
        if (this.props.imageUrl !== nextProps.imageUrl) {
            var imageData = DoughboyDetector._imageDataCache.get(nextProps.imageUrl);
            if (imageData) {
                this.setState({ imageData: imageData });
            }
            else {
                this._resolveImage(nextProps.imageUrl).catch(function (error) {
                    return _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__["_TraceLogger"].logError(_this._logSource, error, 'ResolveImage');
                });
            }
        }
    };
    DoughboyDetector.prototype.componentWillUnmount = function () {
        this._unmounted = true;
        this.revokeBlobUrl();
    };
    DoughboyDetector.prototype.render = function () {
        return this.props.renderImage(this.state.imageData || '', this.props.imageProps, this._extraProps);
    };
    DoughboyDetector.prototype._resolveImage = function (imageUrl) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var imageElement = document.createElement('img');
            imageElement.onload = function () {
                var imageBase64 = _this._getImageBase64(imageElement);
                var imageFingerprint = Object(_ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_3__["Md5Hash"])(imageBase64);
                var isDoughboyImage = doughboyImageFingerprints.has(imageFingerprint);
                if (isDoughboyImage) {
                    _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__["_EngagementLogger"].logEventWithLogEntry(new _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__["_LogEntry"]('DoughboyDetector', 'IsDoughboyImage', _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__["_LogType"].Event, {
                        fingerprint: imageFingerprint
                    }));
                    reject(new _ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_3__["ExpectedFailure"]('DoughboyImageDetected'));
                }
                else if (_this._unmounted) {
                    reject(new _ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_3__["ExpectedFailure"]('ElementUnmounted'));
                }
                else {
                    var imageData = "data:image/png;base64," + imageBase64;
                    _this.setState({ imageData: imageData });
                    DoughboyDetector._imageDataCache.set(imageUrl, imageData);
                    resolve();
                }
            };
            imageElement.onerror = function (event) {
                reject(new _ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_3__["ExpectedFailure"]('DownloadImageFailed', event.error)); // tslint:disable-line:no-any
            };
            if (!_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_4__["_SPKillSwitch"].isActivated('a2a16402-2f33-4194-9f64-0401227d07bd' /* '08/24/2020', 'Use blob to mitigate cross-domain' */)) {
                _this._downloadImageBlob(imageUrl)
                    .then(function (blob) {
                    _this.revokeBlobUrl();
                    _this._blobUrl = URL.createObjectURL(blob);
                    imageElement.src = _this._blobUrl;
                })
                    .catch(function () { return (imageElement.src = imageUrl); });
            }
            else {
                imageElement.src = imageUrl;
            }
            imageElement.crossOrigin = 'anonymous';
        });
    };
    DoughboyDetector.prototype._downloadImageBlob = function (url) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var userPhotoQOSKilled = _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_4__["_SPKillSwitch"].isActivated('debde2df-6396-4e00-a52b-9f0e28593f6f' /* '11/24/2020', 'WEX Collect User Photo load reliability data' */);
            var userPhotoMonitor;
            var request = new XMLHttpRequest();
            request.open('GET', url);
            request.responseType = 'blob';
            var serviceName = '';
            if (!userPhotoQOSKilled) {
                var lowerCaseUrl = url.toLowerCase();
                serviceName =
                    lowerCaseUrl.indexOf(USERPHOTO_SUBPATH) > -1
                        ? USERPHOTO
                        : lowerCaseUrl.indexOf(AFD_USERPHOTO_SUBPATH) > -1
                            ? AFDCDNUSERPHOTO
                            : lowerCaseUrl.indexOf(PRIVATECDN_PREFIX) > -1 && lowerCaseUrl.indexOf(CDN_USERPHOTO_SUBPATH) > -1
                                ? CDNUSERPHOTO
                                : 'Unknown';
                userPhotoMonitor = new _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__["_QosMonitor"]("UserPhotoRenderService." + serviceName);
            }
            request.onload = function () {
                var _a;
                var succeeded = request.status >= 200 && request.status < 300 && request.response;
                if (succeeded) {
                    if (!userPhotoQOSKilled) {
                        var cacheHit = serviceName === CDNUSERPHOTO || serviceName === AFDCDNUSERPHOTO
                            ? request.getResponseHeader('x-cache')
                            : '';
                        var ccc = serviceName === AFDCDNUSERPHOTO ? request.getResponseHeader('x-ccc') : '';
                        var originCacheHit = request.getResponseHeader('x-cache-origin');
                        userPhotoMonitor.writeSuccess({
                            service: serviceName,
                            alias: CALLER_ID,
                            statusCode: request.status,
                            CDNCache: (_a = cacheHit) === null || _a === void 0 ? void 0 : _a.split(' ')[0],
                            OriginCache: originCacheHit,
                            cacheCountryCode: ccc,
                            size: request.response.size,
                            source: request.response.type
                        });
                    }
                    return resolve(request.response);
                }
                else {
                    // tslint:disable-next-line: no-null-keyword
                    var redirectUrl = request.getResponseHeader('location');
                    if (redirectUrl && request.status >= 300 && request.status < 400) {
                        _this._downloadImageBlob(redirectUrl).then(resolve).catch(reject);
                    }
                    else {
                        if (!userPhotoQOSKilled) {
                            var error = new Error("<url>" + Object(_ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_3__["scrubUrl"])(undefined, url) + "</url> <errorCode>" + request.status + "</errorCode>");
                            userPhotoMonitor.writeUnexpectedFailure(serviceName + " failed", error, {
                                alias: CALLER_ID,
                                statusCode: request.status
                            });
                        }
                        reject('');
                    }
                    return resolve(request.response);
                }
            };
            request.onerror = function () {
                if (!userPhotoQOSKilled) {
                    var error = new Error("<url>" + Object(_ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_3__["scrubUrl"])(undefined, url) + "</url> <errorCode>" + request.status + "</errorCode>");
                    userPhotoMonitor.writeUnexpectedFailure(serviceName + " failed", error, {
                        alias: CALLER_ID,
                        headers: request.getAllResponseHeaders()
                    });
                }
                reject('');
            };
            request.send();
        });
    };
    DoughboyDetector.prototype._getImageBase64 = function (imageElement) {
        var canvas = document.createElement('canvas');
        canvas.width = imageElement.width;
        canvas.height = imageElement.height;
        var context = canvas.getContext('2d');
        context.drawImage(imageElement, 0, 0);
        var dataUrl;
        try {
            dataUrl = canvas.toDataURL('image/png');
            this.revokeBlobUrl();
        }
        catch (error) {
            // The canvas is probably tainted, due to an image from another domain
            return '';
        }
        return dataUrl.replace(/^data:image\/png;base64,/, '');
    };
    Object.defineProperty(DoughboyDetector.prototype, "_extraProps", {
        get: function () {
            // Some components (like `LivePersonaCard`) are using `React.cloneElement` to inject extra props to its children.
            // Exclude the declared props from `this.props`, the left fields are the injected props, group them as `extraProps`.
            var _a = this.props, imageUrl = _a.imageUrl, imageProps = _a.imageProps, renderImage = _a.renderImage, onDetectCompleted = _a.onDetectCompleted, extraProps = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(_a, ["imageUrl", "imageProps", "renderImage", "onDetectCompleted"]);
            return extraProps;
        },
        enumerable: true,
        configurable: true
    });
    DoughboyDetector._imageDataCache = new Map();
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_3__["monitor"])('DoughboyDetector.ResolveImage')
    ], DoughboyDetector.prototype, "_resolveImage", null);
    return DoughboyDetector;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));



/***/ }),

/***/ "br4S":
/*!*********************************************!*\
  !*** external "@microsoft/sp-webpart-base" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_br4S__;

/***/ }),

/***/ "bzHd":
/*!********************************************!*\
  !*** ./lib/baseCollectionWebPart/index.js ***!
  \********************************************/
/*! exports provided: BaseCollection, BaseCollectionWebPart, RefreshType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BaseCollection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseCollection */ "Ek86");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaseCollection", function() { return _BaseCollection__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _BaseCollectionWebPart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BaseCollectionWebPart */ "6UW+");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaseCollectionWebPart", function() { return _BaseCollectionWebPart__WEBPACK_IMPORTED_MODULE_1__["BaseCollectionWebPart"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RefreshType", function() { return _BaseCollectionWebPart__WEBPACK_IMPORTED_MODULE_1__["RefreshType"]; });





/***/ }),

/***/ "cDcd":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_cDcd__;

/***/ }),

/***/ "cb9A":
/*!*****************************************!*\
  !*** ./lib/mySiteWebPartCache/index.js ***!
  \*****************************************/
/*! exports provided: MySiteWebPartCacheManager, MySiteWebPartCacheHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MySiteWebPartCacheManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MySiteWebPartCacheManager */ "sRXn");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MySiteWebPartCacheManager", function() { return _MySiteWebPartCacheManager__WEBPACK_IMPORTED_MODULE_0__["MySiteWebPartCacheManager"]; });

/* harmony import */ var _MySiteWebPartCacheHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MySiteWebPartCacheHelper */ "Apzv");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MySiteWebPartCacheHelper", function() { return _MySiteWebPartCacheHelper__WEBPACK_IMPORTED_MODULE_1__["MySiteWebPartCacheHelper"]; });





/***/ }),

/***/ "dVDx":
/*!************************!*\
  !*** ./lib/Flights.js ***!
  \************************/
/*! exports provided: isPersonalCacheFlightEnabled, isDeprecateEmphasisClassFlightEnabled */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPersonalCacheFlightEnabled", function() { return isPersonalCacheFlightEnabled; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDeprecateEmphasisClassFlightEnabled", function() { return isDeprecateEmphasisClassFlightEnabled; });
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__);

function isPersonalCacheFlightEnabled() {
    return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPFlight"].isEnabled(1671 /* WexSPHomePersonalCacheClient  */);
}
function isDeprecateEmphasisClassFlightEnabled() {
    return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPFlight"].isEnabled(276 /* SOXDeprecateEmphasisClass */);
}


/***/ }),

/***/ "e+Na":
/*!**************************************!*\
  !*** ./lib/pagination/Pagination.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @microsoft/office-ui-fabric-react-bundle */ "KL1q");
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _IPageProps__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./IPageProps */ "E8QA");
/* harmony import */ var _Page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Page */ "R983");
/* harmony import */ var _Pagination_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Pagination.module.scss */ "D2cq");
/* harmony import */ var _Strings_resx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Strings.resx */ "WTsn");
var _Strings_resx__WEBPACK_IMPORTED_MODULE_6___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./Strings.resx */ "WTsn", 1);
/**
 * @copyright Microsoft Corporation. All rights reserved.
 *
 * @file Pagination.tsx
 */







var Pagination = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(Pagination, _super);
    function Pagination() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._handleClick = function (pageNumber, pageType) {
            _this.props.onPageChange(pageNumber, pageType);
        };
        return _this;
    }
    Pagination.prototype.render = function () {
        var _a;
        var paginationClassName = Object(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_2__["css"])(_Pagination_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].Pagination, (_a = {},
            _a[_Pagination_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].noPageNum] = !this.props.showPageNum,
            _a[_Pagination_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].themed] = true,
            _a), this.props.className);
        return this.props.itemsCount === 0 ? undefined : react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: paginationClassName }, this.pages);
    };
    Object.defineProperty(Pagination.prototype, "pages", {
        get: function () {
            var pages = [];
            var totalPages = Math.ceil(this.props.itemsCount / this.props.itemsPerPage);
            var pageLength = this.props.pageLength;
            var currentPage = this.props.currentPage;
            if (currentPage < 1) {
                currentPage = 1;
            }
            if (currentPage > totalPages) {
                currentPage = totalPages;
            }
            var startPage = Math.max(1, currentPage - Math.floor(pageLength / 2));
            var endPage = Math.min(totalPages, currentPage + Math.floor(pageLength / 2));
            if (endPage - startPage + 1 < pageLength) {
                if (currentPage < totalPages / 2) {
                    endPage = Math.min(totalPages, pageLength + startPage);
                }
                else {
                    startPage = Math.max(1, endPage - pageLength);
                }
            }
            if (endPage - startPage + 1 > pageLength) {
                if (currentPage > totalPages / 2) {
                    startPage++;
                }
                else {
                    endPage--;
                }
            }
            var prevPageNum = currentPage - 1 > 0 ? currentPage - 1 : currentPage;
            var nextPageNum = currentPage === endPage ? endPage : currentPage + 1;
            // Build Prev Page, disable it if current page number is 1
            pages.push(react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Page__WEBPACK_IMPORTED_MODULE_4__["default"], { className: this.props.pageClassName, key: _Strings_resx__WEBPACK_IMPORTED_MODULE_6__["PaginationPrev"] + prevPageNum, text: _Strings_resx__WEBPACK_IMPORTED_MODULE_6__["PaginationPrev"], pageType: _IPageProps__WEBPACK_IMPORTED_MODULE_3__["PageType"].Prev, pageNumber: this.props.showPageNum ? prevPageNum : undefined, selected: false, disabled: this.props.showPageNum ? currentPage === 1 : !this.props.hasPrevPage, onClick: this._handleClick }));
            // Build Default Page
            if (this.props.showPageNum) {
                for (var pageNum = startPage; pageNum <= endPage; pageNum++) {
                    var pageTxt = "" + pageNum;
                    pages.push(react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Page__WEBPACK_IMPORTED_MODULE_4__["default"], { key: pageTxt + pageNum, text: pageTxt, pageType: _IPageProps__WEBPACK_IMPORTED_MODULE_3__["PageType"].Default, pageNumber: pageNum, selected: currentPage === pageNum, disabled: false, onClick: this._handleClick }));
                }
            }
            // Build Next Page, disable it if current page number is the endPage
            pages.push(react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Page__WEBPACK_IMPORTED_MODULE_4__["default"], { key: _Strings_resx__WEBPACK_IMPORTED_MODULE_6__["PaginationNext"] + nextPageNum, text: _Strings_resx__WEBPACK_IMPORTED_MODULE_6__["PaginationNext"], pageType: _IPageProps__WEBPACK_IMPORTED_MODULE_3__["PageType"].Next, pageNumber: this.props.showPageNum ? nextPageNum : undefined, selected: false, disabled: this.props.showPageNum ? currentPage === endPage : !this.props.hasNextPage, onClick: this._handleClick }));
            return pages;
        },
        enumerable: true,
        configurable: true
    });
    return Pagination;
}(react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]));
/* harmony default export */ __webpack_exports__["default"] = (Pagination);


/***/ }),

/***/ "e83p":
/*!************************************************!*\
  !*** ./lib/displayFieldMap/CalculatedField.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _MappedField__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MappedField */ "NMfr");
/**
 * @file CalculatedField.ts
 * @copyright Microsoft Corporation. All rights reserved.
 */


var CalculatedField = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(CalculatedField, _super);
    function CalculatedField(target, displayField, formatter, onRenderCell) {
        var _this = _super.call(this, target, displayField, onRenderCell) || this;
        _this._formatter = formatter;
        return _this;
    }
    Object.defineProperty(CalculatedField.prototype, "formatter", {
        get: function () {
            return this._formatter;
        },
        enumerable: true,
        configurable: true
    });
    return CalculatedField;
}(_MappedField__WEBPACK_IMPORTED_MODULE_1__["default"]));
/* harmony default export */ __webpack_exports__["default"] = (CalculatedField);


/***/ }),

/***/ "edZz":
/*!****************************************!*\
  !*** ./lib/fluentScope/FluentScope.js ***!
  \****************************************/
/*! exports provided: isFluentEnabledFor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFluentEnabledFor", function() { return isFluentEnabledFor; });
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ms/sp-component-utilities */ "hiL/");
/* harmony import */ var _ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_1__);
// Copyright (c) Microsoft Corporation. All rights reserved.


// tslint:disable:max-line-length
var killSwitches = new Map([
    [
        'BingPreviewLayout',
        new _ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_1__["KillSwitch"]('6b97fd96-8919-4573-b4a1-39c3c8eeb85c' /* '11/27/2019', 'SOX_FluentForBingPreviewLayout' */)
    ],
    [
        'CardLayout',
        new _ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_1__["KillSwitch"]('ce40e47f-c3e5-42d2-9efe-4b6188db03d1' /* '8/15/2019', 'SOX_FluentForCardLayout' */)
    ],
    [
        'CarouselLayout',
        new _ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_1__["KillSwitch"]('6e3efcdb-adea-446e-b6d4-478e12d9496e' /* '8/22/2019', 'SOX_FluentForCarouselLayout' */)
    ],
    [
        'Comments',
        new _ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_1__["KillSwitch"]('06a4b297-8a39-42f0-8146-4fcf15fd9f28' /* '2/20/2020', 'SOX_FluentForComments' */)
    ],
    [
        'CountdownWebPart',
        new _ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_1__["KillSwitch"]('c6fa633c-4a49-41bb-bd61-7ad3dd3d3454' /* '11/27/2019', 'SOX_FluentForCountdownWebPart' */)
    ],
    [
        'EmbedVideoWebPart',
        new _ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_1__["KillSwitch"]('ffdc82e4-1f7e-4e32-86ba-ee7eaa5e72f4' /* '8/19/2019', 'SOX_FluentForEmbedVideoWebPart' */)
    ],
    [
        'EmbedWebPart',
        new _ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_1__["KillSwitch"]('a3df45a2-bcb9-44cc-a627-4b09d4380fc3' /* '8/19/2019', 'SOX_FluentForEmbedWebPart' */)
    ],
    [
        'EventPage',
        new _ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_1__["KillSwitch"]('6270b19a-4c92-4495-ad4e-1f1f570e6090' /* '11/27/2019', 'SOX_FluentForEventPage' */)
    ],
    [
        'EventsWebPart',
        new _ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_1__["KillSwitch"]('51737f74-23f0-4561-b1ce-effeb15cb292' /* '8/19/2019', 'SOX_FluentForEventsWebPart' */)
    ],
    [
        'FilePicker',
        new _ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_1__["KillSwitch"]('71d414f5-27f8-4b93-a33a-f3f29553ea12' /* '11/27/2019', 'SOX_FluentForFilePicker' */)
    ],
    [
        'GridLayout',
        new _ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_1__["KillSwitch"]('d6eeb7f8-ed0d-4a68-b6fb-ec66727d7cc1' /* '10/10/2019', 'SOX_FluentForGridLayout' */)
    ],
    [
        'HeroWebPart',
        new _ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_1__["KillSwitch"]('8b97c8da-b25b-4d07-9515-46eaccb3c73d' /* '8/19/2019', 'SOX_FluentForHeroWebPart' */)
    ],
    [
        'HighlightedContentWebPart',
        new _ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_1__["KillSwitch"]('ef7e4a68-45ff-424f-a5e6-e26c12f69b19' /* '8/15/2019', 'SOX_FluentForHighlightedContentWebPart' */)
    ],
    [
        'ImageWebPart',
        new _ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_1__["KillSwitch"]('cab84481-432c-4dbf-9ce9-709caad5e633' /* '5/11/2020', 'SOX_FluentForImageWebPart' */)
    ],
    [
        'ImageGalleryWebPart',
        new _ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_1__["KillSwitch"]('ee689cfa-5c47-4164-927b-cb0a45c1c1e3' /* '8/19/2019', 'SOX_FluentForImageGalleryWebPart' */)
    ],
    [
        'LinkPreviewWebPart',
        new _ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_1__["KillSwitch"]('3ec632bc-a93c-4f10-bb68-aa7fc31a4488' /* '8/19/2019', 'SOX_FluentForLinkPreviewWebPart' */)
    ],
    [
        'NewsLink',
        new _ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_1__["KillSwitch"]('33fdacb6-7922-46c3-a714-37bb86d77e91' /* '2/7/2020', 'SOX_FluentForNewsLink' */)
    ],
    [
        'NewsWebPart',
        new _ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_1__["KillSwitch"]('a8f14b1a-2490-4c19-a00d-41a8c1cfce3a' /* '8/19/2019', 'SOX_FluentForNewsWebPart' */)
    ],
    [
        'PeopleWebPart',
        new _ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_1__["KillSwitch"]('a2f6df81-a3a3-41cb-ba37-cc1950ca6dba' /* '8/15/2019', 'SOX_FluentForPeopleWebPart' */)
    ],
    [
        'Placeholder',
        new _ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_1__["KillSwitch"]('d5c0b7e0-1cda-4d45-9c2a-3dd032eebbde' /* '8/26/2019', 'SOX_FluentForPlaceholder' */)
    ],
    [
        'QuickLinksWebPart',
        new _ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_1__["KillSwitch"]('359dce78-87f7-46fb-a45f-b39db2c61420' /* '8/15/2019', 'SOX_FluentForQuickLinks' */)
    ],
    [
        'RecommendedItems',
        new _ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_1__["KillSwitch"]('c9dc4780-e883-4dd7-bbf5-7230e6473649' /* '2/20/2020', 'SOX_FluentForRecommendedItems' */)
    ],
    [
        'SavedForLaterWebPart',
        new _ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_1__["KillSwitch"]('78e3dc6a-a821-44fa-8215-ea2ff42c5442' /* '11/27/2019', 'SOX_FluentForSavedForLaterWebPart' */)
    ],
    [
        'SitesWebPart',
        new _ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_1__["KillSwitch"]('c1702a8e-b2ca-408a-a75e-1bf24740a795' /* '8/22/2019', 'SOX_FluentForSitesWebPart' */)
    ],
    [
        'TitleRegionWebPart',
        new _ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_1__["KillSwitch"]('7e3ee066-0e56-4b8a-9b1e-94e15d634e90' /* '8/15/2019', 'SOX_FluentForTitleRegionWebPart' */)
    ],
    [
        'Toolbox',
        new _ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_1__["KillSwitch"]('b7369ea0-90b4-4183-8f1a-d7e1361154eb' /* '8/19/2019', 'SOX_FluentForToolbox' */)
    ],
    [
        'WeatherWebPart',
        new _ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_1__["KillSwitch"]('7437672a-92b8-4e74-80f3-4aaaf1513845' /* '8/19/2019', 'SOX_FluentForWeatherWebPart' */)
    ],
    [
        'WorldClockWebPart',
        new _ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_1__["KillSwitch"]('3a445c98-91ff-4e3e-8f97-323164409dbb' /* '11/27/2019', 'SOX_FluentForWorldClockWebPart' */)
    ],
    [
        'WebPartChrome',
        new _ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_1__["KillSwitch"]('e3df5196-b5db-42de-bccb-9b898a3cee62' /* '8/15/2019', 'SOX_FluentForWebPartChrome' */)
    ]
]);
// tslint:enable:max-line-length
function isFluentEnabledFor(feature) {
    var killSwitch = killSwitches.get(feature);
    return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPFlight"].isEnabled(1248) && killSwitch && !killSwitch.isActivated();
}


/***/ }),

/***/ "eikI":
/*!*****************************************************************!*\
  !*** ./lib/dateTimeHelper/getRelativeDateTimeStringForLists.js ***!
  \*****************************************************************/
/*! exports provided: getRelativeDateTimeStringForLists */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRelativeDateTimeStringForLists", function() { return getRelativeDateTimeStringForLists; });
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ms_i18n_utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ms/i18n-utilities */ "Ycni");
/* harmony import */ var _ms_i18n_utilities__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ms_i18n_utilities__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _DateTimeHelper_resx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DateTimeHelper.resx */ "GrTz");
var _DateTimeHelper_resx__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./DateTimeHelper.resx */ "GrTz", 1);
/**
 * @copyright Microsoft Corporation. All rights reserved.
 */



var ONE_SECOND = 1000;
var ONE_MINUTE = 60 * ONE_SECOND;
var ONE_HOUR = 60 * ONE_MINUTE;
function _getModifiedDate(millisecondsDifference, future) {
    if (!future) {
        millisecondsDifference = -millisecondsDifference;
    }
    return new Date(Date.now() + millisecondsDifference);
}
/**
 * Returns the formatted and localized relative date/time string for a list's relative date/time string.
 *
 * @param relativeDateTimeJSString: list server-processed date value string
 */
function getRelativeDateTimeStringForLists(relativeDateTimeJSString) {
    var codes = relativeDateTimeJSString.split('|');
    if (codes[0] === '0') {
        // Passthrough case
        return codes[1];
    }
    var future = codes[1] === '1';
    var timeBucket = codes[2];
    var timeValue = codes.length >= 4 ? codes[3] : undefined;
    var timeValueNumber = Number(timeValue);
    var timeValue2 = codes.length >= 5 ? codes[4] : undefined;
    switch (timeBucket) {
        case '1':
            // a few seconds
            return _ms_i18n_utilities__WEBPACK_IMPORTED_MODULE_1__["LocaleFormat"].formatRelativeTimeApproximate(_getModifiedDate(ONE_SECOND, future));
        case '2':
            // about a minute
            return _ms_i18n_utilities__WEBPACK_IMPORTED_MODULE_1__["LocaleFormat"].formatRelativeTimeApproximate(_getModifiedDate(ONE_MINUTE, future));
        case '3':
            // x minutes
            return _ms_i18n_utilities__WEBPACK_IMPORTED_MODULE_1__["LocaleFormat"].formatRelativeTime(future ? timeValueNumber : -timeValueNumber, 'minute');
        case '4':
            // about an hour
            return _ms_i18n_utilities__WEBPACK_IMPORTED_MODULE_1__["LocaleFormat"].formatRelativeTimeApproximate(_getModifiedDate(ONE_HOUR, future));
        case '5':
            // tomorrow/yesterday or tomorrow at x/yesterday at x
            var dayString = _ms_i18n_utilities__WEBPACK_IMPORTED_MODULE_1__["LocaleFormat"].formatRelativeTime(future ? 1 : -1, 'day');
            return timeValue ? _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Text"].format(_DateTimeHelper_resx__WEBPACK_IMPORTED_MODULE_2__["RelativeDateTime_DayAndTime"], dayString, timeValue) : dayString;
        case '6':
            // x hours
            return _ms_i18n_utilities__WEBPACK_IMPORTED_MODULE_1__["LocaleFormat"].formatRelativeTimeApproximate(_getModifiedDate(timeValueNumber * ONE_HOUR, future));
        case '7':
            // day and time
            return timeValue2 ? _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Text"].format(_DateTimeHelper_resx__WEBPACK_IMPORTED_MODULE_2__["RelativeDateTime_DayAndTime"], timeValue, timeValue2) : timeValue;
        case '8':
            // x days
            return _ms_i18n_utilities__WEBPACK_IMPORTED_MODULE_1__["LocaleFormat"].formatRelativeTime(future ? timeValueNumber : -timeValueNumber, 'day');
        case '9':
            // today
            return _ms_i18n_utilities__WEBPACK_IMPORTED_MODULE_1__["LocaleFormat"].formatRelativeTime(0, 'day');
    }
}


/***/ }),

/***/ "esDr":
/*!************************************************!*\
  !*** ./lib/imaging/webPartPreviewThumbnail.js ***!
  \************************************************/
/*! exports provided: webPartPreviewThumbnail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "webPartPreviewThumbnail", function() { return webPartPreviewThumbnail; });
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ms/odsp-utilities-bundle */ "y88i");
/* harmony import */ var _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ms/sp-component-utilities */ "hiL/");
/* harmony import */ var _ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_2__);
/**
 * @copyright Microsoft Corporation. All rights reserved.
 */



/**
 * Produces the page thumbnail URL that is tailored to fit into the 255 char limit of BannerURL.
 */
function webPartPreviewThumbnail(_a) {
    var pageContext = _a.pageContext, url = _a.url, siteId = _a.siteId, webId = _a.webId, uniqueId = _a.uniqueId, callerId = _a.callerId, originalWidth = _a.originalWidth, originalHeight = _a.originalHeight;
    if (!url) {
        return undefined;
    }
    var extension = _ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_2__["ExtensionHelper"].getExtension(new _ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_2__["SPResourcePath"](url)) || '';
    if (!_ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_2__["PreviewHelper"].hasThumbnailOrFileTypeSupportsPreview(extension, undefined /*thumbnail*/) &&
        extension !== 'gif') {
        return undefined;
    }
    var contextWebAbsoluteUrl = pageContext && pageContext.web.absoluteUrl;
    var rootUrl = contextWebAbsoluteUrl || window.location.href;
    var rootUri = new _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_1__["Uri"](rootUrl);
    // To fit within the URL field type max length, always go against root site collection
    var tenantRootUrl = rootUri.getLeftPart(1);
    var canUseShortestGetPreviewUrl = !!(siteId && webId && uniqueId);
    var relativeFullPath;
    // For those fake urls which are defined in defaultImageUrlMap (PreviewHelper.ts)
    var isNonWebRelativeUrl = pageContext && pageContext.web && pageContext.web.serverRelativeUrl && url
        ? url.toUpperCase().indexOf(pageContext.web.serverRelativeUrl.toUpperCase()) === -1
        : true; // in absence of information assume non-web relative.
    var pathOverGuid = _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPFlight"].isEnabled(60134 /* WEXUsePathOverGuidForBannerImageUrl */) || !canUseShortestGetPreviewUrl;
    if (pathOverGuid && url && !isNonWebRelativeUrl) {
        var absoluteCanonicalUrl = _getAbsoluteCanonicalUrl(url, tenantRootUrl, isNonWebRelativeUrl, pageContext);
        var absoluteCanonicalUri = new _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_1__["Uri"](absoluteCanonicalUrl);
        if (absoluteCanonicalUri.getHost().toUpperCase() === rootUri.getHost().toUpperCase()) {
            relativeFullPath = absoluteCanonicalUri.getPath();
            canUseShortestGetPreviewUrl = !!relativeFullPath;
        }
    }
    if (canUseShortestGetPreviewUrl) {
        // Must NOT use a media service or CDN Urls that return URLs with expiration!
        var bannerImageUrl = _ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_2__["PreviewHelper"].getPreviewImageUrl(extension, undefined /* thumbnail */, tenantRootUrl /* baseUrl */, relativeFullPath /* path */, siteId, webId, uniqueId, undefined /* width */, true /* isBannerImageUrl to help fit within 255 char limit */, callerId, originalWidth, originalHeight);
        // Check length before using it.
        if (bannerImageUrl && bannerImageUrl.length <= 255) {
            return bannerImageUrl;
        }
    }
    return _getAbsoluteCanonicalUrl(url, tenantRootUrl, isNonWebRelativeUrl, pageContext);
}
function _getAbsoluteCanonicalUrl(url, tenantRootUrl, isNonWebRelativeUrl, pageContext) {
    var contextWebAbsoluteUrl = pageContext && pageContext.web.absoluteUrl;
    var uri = new _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_1__["Uri"](url);
    var isInputUrlAbsolute = uri.getHost() !== '';
    var absoluteUrlPrefix = isNonWebRelativeUrl ? tenantRootUrl : contextWebAbsoluteUrl;
    var relativeUrl = isNonWebRelativeUrl
        ? url
        : url.substr(pageContext.web.serverRelativeUrl.length);
    return isInputUrlAbsolute ? url : _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_1__["Uri"].concatenate(absoluteUrlPrefix, relativeUrl);
}


/***/ }),

/***/ "eyMx":
/*!*****************************************************!*\
  !*** ./lib/webPartChrome/DeferredTeachingBubble.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ms_sp_deferred_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ms/sp-deferred-component */ "qjmy");
/* harmony import */ var _ms_sp_deferred_component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ms_sp_deferred_component__WEBPACK_IMPORTED_MODULE_1__);


var DeferredTeachingBubble = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(DeferredTeachingBubble, _super);
    function DeferredTeachingBubble() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DeferredTeachingBubble.prototype._internalLoad = function () {
        return __webpack_require__.e(/*! import() | sp-fabric-teaching-bubble */ "vendors~sp-fabric-teaching-bubble").then(__webpack_require__.bind(null, /*! office-ui-fabric-react/lib/TeachingBubble */ "rpLR")).then(function (chunk) { return chunk.TeachingBubble; });
    };
    return DeferredTeachingBubble;
}(_ms_sp_deferred_component__WEBPACK_IMPORTED_MODULE_1__["_DeferredComponent"]));
/* harmony default export */ __webpack_exports__["default"] = (DeferredTeachingBubble);


/***/ }),

/***/ "faye":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_faye__;

/***/ }),

/***/ "gcbh":
/*!**********************************************!*\
  !*** ./lib/pagination/Pagination.module.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../../common/temp/node_modules/.pnpm/css-loader@3.2.1_webpack@4.44.2/node_modules/css-loader/dist/cjs.js!../../../../common/temp/node_modules/.pnpm/postcss-loader@3.0.0/node_modules/postcss-loader/src??postcss!./Pagination.module.css */ "7asK");
var loader = __webpack_require__(/*! @microsoft/load-themed-styles */ "jOlS");

if(typeof content === "string") content = [[module.i, content]];

// add the styles to the DOM
for (var i = 0; i < content.length; i++) loader.loadStyles(content[i][1], true);

if(content.locals) module.exports = content.locals;

/***/ }),

/***/ "hiL/":
/*!*********************************************!*\
  !*** external "@ms/sp-component-utilities" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_hiL___;

/***/ }),

/***/ "hzLU":
/*!*****************************************!*\
  !*** ./lib/placeHolder/Placeholder.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../../common/temp/node_modules/.pnpm/css-loader@3.2.1_webpack@4.44.2/node_modules/css-loader/dist/cjs.js!../../../../common/temp/node_modules/.pnpm/postcss-loader@3.0.0/node_modules/postcss-loader/src??postcss!./Placeholder.css */ "u3RV");
var loader = __webpack_require__(/*! @microsoft/load-themed-styles */ "jOlS");

if(typeof content === "string") content = [[module.i, content]];

// add the styles to the DOM
for (var i = 0; i < content.length; i++) loader.loadStyles(content[i][1], true);

if(content.locals) module.exports = content.locals;

/***/ }),

/***/ "i2P5":
/*!**************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/css-loader@3.2.1_webpack@4.44.2/node_modules/css-loader/dist/cjs.js!/agent/_work/1/s/common/temp/node_modules/.pnpm/postcss-loader@3.0.0/node_modules/postcss-loader/src??postcss!./lib/webPartChrome/WebPartChrome.module.css ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../common/temp/node_modules/.pnpm/css-loader@3.2.1_webpack@4.44.2/node_modules/css-loader/dist/runtime/api.js */ "5ADk")(false);
// Module
exports.push([module.i, ".ai_g_658c9e0a{-ms-flex-align:stretch;align-items:stretch;-ms-flex-direction:column;flex-direction:column}.ai_g_658c9e0a,.aj_g_658c9e0a{display:-ms-flexbox;display:flex}.aj_g_658c9e0a{-ms-flex-align:baseline;align-items:baseline}.ak_g_658c9e0a{-ms-flex-order:2;order:2;width:100%}.al_g_658c9e0a{-ms-flex-positive:1;flex-grow:1}[dir=ltr] .al_g_658c9e0a{margin-right:32px}[dir=rtl] .al_g_658c9e0a{margin-left:32px}.ms-Button.am_g_658c9e0a{height:auto;margin-bottom:23px;border:0}[dir=ltr] .ms-Button.am_g_658c9e0a{padding-left:0}[dir=rtl] .ms-Button.am_g_658c9e0a{padding-right:0}[dir=ltr] .ms-Button.am_g_658c9e0a .ms-Icon{margin-left:0}[dir=rtl] .ms-Button.am_g_658c9e0a .ms-Icon{margin-right:0}.ms-Button.an_g_658c9e0a{background-color:transparent;height:35px;margin-bottom:5px;margin-top:-9px}.ms-Button.ao_g_658c9e0a .ms-Button-icon,.ms-Button.ao_g_658c9e0a:hover .ms-Button-label{color:\"[theme:themePrimary, default: #0078d4]\"}.ap_g_658c9e0a{white-space:nowrap}[dir=ltr] .ap_g_658c9e0a{margin-left:auto}[dir=rtl] .ap_g_658c9e0a{margin-right:auto}.CanvasSection--edit .al_g_658c9e0a{-ms-flex-negative:0;flex-shrink:0}.aq_g_658c9e0a{margin-bottom:18px}.ar_g_658c9e0a{margin-bottom:11px}.as_g_658c9e0a{margin-bottom:0}.at_g_658c9e0a{background-color:#fff}", ""]);


/***/ }),

/***/ "j3t2":
/*!*************************************************!*\
  !*** ./lib/oauthErrorRenderer/loc/Strings.resx ***!
  \*************************************************/
/*! exports provided: MultiFactorAuthMessage, LoginButtonLabel, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"MultiFactorAuthMessage\":\"[!!--##Ŵē ńēēď ŷōũ ţō śĩĝń ĩń àĝàĩń. Ōńćē ŷōũ ďō, ŵē\\u0027ĺĺ ƀŕĩńĝ ŷōũ ƀàćķ ĥēŕē.##--!!]\",\"LoginButtonLabel\":\"[!!--##Ćōńţĩńũē##--!!]\"}");

/***/ }),

/***/ "jOlS":
/*!************************************************!*\
  !*** external "@microsoft/load-themed-styles" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_jOlS__;

/***/ }),

/***/ "kTvz":
/*!******************************************************!*\
  !*** ./lib/dataProviderPrototype/BaseDataWebPart.js ***!
  \******************************************************/
/*! exports provided: BaseDataWebPart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseDataWebPart", function() { return BaseDataWebPart; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _microsoft_sp_webpart_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/sp-webpart-base */ "br4S");
/* harmony import */ var _microsoft_sp_webpart_base__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_webpart_base__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _WebPartDataProvider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./WebPartDataProvider */ "2pa0");
/**
 * @Copyright (c) Microsoft Corporation.  All rights reserved.
 */



/**
 * This is a prototype at the current point. The goal is to build some base code that will
 * help our customers follow the performance best practices to build web parts.
 *
 * @alpha
 */
var BaseDataWebPart = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(BaseDataWebPart, _super);
    function BaseDataWebPart() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Data updated callback
         * @todo: data should be typed as IResponse<TData>. (VSO#399477) tracks fixing that in the MySiteWebPartCacheManager.
         */
        /* tslint:disable-next-line:no-any */
        _this._internalDataReceived = function (data) {
            _this.dataReceived({
                data: data,
                metadata: {}
            });
        };
        return _this;
    }
    Object.defineProperty(BaseDataWebPart.prototype, "dataProviderConfiguration", {
        /*
         * @virtual
         */
        get: function () {
            return {
                /* tslint:disable-next-line:no-any */
                serviceScope: this.context.serviceScope
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseDataWebPart.prototype, "dataProvider", {
        /**
         * @sealed
         */
        get: function () {
            if (!this._dataProvider) {
                this._dataProvider = new _WebPartDataProvider__WEBPACK_IMPORTED_MODULE_2__["default"](this.dataProviderConfiguration);
            }
            return this._dataProvider;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseDataWebPart.prototype, "cacheKey", {
        /**
         * The default value of the cacheKey is the web part instanceId.
         *
         * @virtual
         */
        get: function () {
            return this.context.instanceId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseDataWebPart.prototype, "alias", {
        /**
         * The default value of the cacheKey is the web part instanceId.
         *
         * @virtual
         */
        get: function () {
            return this.context.manifest.alias;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseDataWebPart.prototype, "cacheParameters", {
        /**
         * The cache parameters. By default it's the properties of the web part.
         *
         * @virtual
         */
        get: function () {
            /* tslint:disable-next-line:no-any */
            return this.properties;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @private
     */
    BaseDataWebPart.prototype._internalGetData = function () {
        var request = {
            fetchData: this.fetchData,
            dataReceived: this._internalDataReceived,
            cacheKey: this.cacheKey,
            alias: this.alias,
            cacheParameters: this.cacheParameters,
            webPartTag: this.context && this.context.webPartTag
        };
        return this.dataProvider.requestData(request).then(function (data) {
            request.dataReceived({
                data: data,
                metadata: {}
            });
        });
    };
    return BaseDataWebPart;
}(_microsoft_sp_webpart_base__WEBPACK_IMPORTED_MODULE_1__["BaseClientSideWebPart"]));



/***/ }),

/***/ "lPa3":
/*!****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/css-loader@3.2.1_webpack@4.44.2/node_modules/css-loader/dist/cjs.js!/agent/_work/1/s/common/temp/node_modules/.pnpm/postcss-loader@3.0.0/node_modules/postcss-loader/src??postcss!./lib/lessText/LessText.module.css ***!
  \****************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../common/temp/node_modules/.pnpm/css-loader@3.2.1_webpack@4.44.2/node_modules/css-loader/dist/runtime/api.js */ "5ADk")(false);
// Module
exports.push([module.i, ".a_a_658c9e0a{word-wrap:break-word!important}", ""]);


/***/ }),

/***/ "liUP":
/*!******************************************************!*\
  !*** ./lib/captionElement/CaptionElement.module.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../../common/temp/node_modules/.pnpm/css-loader@3.2.1_webpack@4.44.2/node_modules/css-loader/dist/cjs.js!../../../../common/temp/node_modules/.pnpm/postcss-loader@3.0.0/node_modules/postcss-loader/src??postcss!./CaptionElement.module.css */ "0Y8v");
var loader = __webpack_require__(/*! @microsoft/load-themed-styles */ "jOlS");

if(typeof content === "string") content = [[module.i, content]];

// add the styles to the DOM
for (var i = 0; i < content.length; i++) loader.loadStyles(content[i][1], true);

if(content.locals) module.exports = content.locals;

/***/ }),

/***/ "lqAP":
/*!****************************************************!*\
  !*** ./lib/webPartChrome/WebPartChrome.module.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../../common/temp/node_modules/.pnpm/css-loader@3.2.1_webpack@4.44.2/node_modules/css-loader/dist/cjs.js!../../../../common/temp/node_modules/.pnpm/postcss-loader@3.0.0/node_modules/postcss-loader/src??postcss!./WebPartChrome.module.css */ "i2P5");
var loader = __webpack_require__(/*! @microsoft/load-themed-styles */ "jOlS");

if(typeof content === "string") content = [[module.i, content]];

// add the styles to the DOM
for (var i = 0; i < content.length; i++) loader.loadStyles(content[i][1], true);

if(content.locals) module.exports = content.locals;

/***/ }),

/***/ "mwqp":
/*!**********************!*\
  !*** ./lib/index.js ***!
  \**********************/
/*! exports provided: BaseCollection, BaseCollectionWebPart, RefreshType, CaptionElement, CaptionElementAlignPosition, CaptionElementType, WebPartDataProvider, BaseDataWebPart, DateBox, DateBoxSize, getRelativeDateTimeStringForLists, isSameDay, CalculatedField, DisplayFieldMap, MappedField, LINK_FIELDNAME_SUFFIX, BaseEmphasisComponentStyles, isFluentEnabledFor, handleItemNavigation, getUrlTarget, isExternalUrl, webPartPreviewThumbnail, DoughboyDetector, LessText, truncateText, MySiteWebPartCacheManager, MySiteWebPartCacheHelper, OAuthErrorRenderer, PageType, Pagination, Parallax, Placeholder, clampText, TextClamp, clampElement, WebPartChrome, WebPartTitle, WebViewUtility, LivePersonaCard, EditModeUtilitiesLoader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _baseCollectionWebPart_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./baseCollectionWebPart/index */ "bzHd");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaseCollection", function() { return _baseCollectionWebPart_index__WEBPACK_IMPORTED_MODULE_0__["BaseCollection"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaseCollectionWebPart", function() { return _baseCollectionWebPart_index__WEBPACK_IMPORTED_MODULE_0__["BaseCollectionWebPart"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RefreshType", function() { return _baseCollectionWebPart_index__WEBPACK_IMPORTED_MODULE_0__["RefreshType"]; });

/* harmony import */ var _captionElement_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./captionElement/index */ "7tYx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CaptionElement", function() { return _captionElement_index__WEBPACK_IMPORTED_MODULE_1__["CaptionElement"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CaptionElementAlignPosition", function() { return _captionElement_index__WEBPACK_IMPORTED_MODULE_1__["CaptionElementAlignPosition"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CaptionElementType", function() { return _captionElement_index__WEBPACK_IMPORTED_MODULE_1__["CaptionElementType"]; });

/* harmony import */ var _dataProviderPrototype_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dataProviderPrototype/index */ "8/ux");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WebPartDataProvider", function() { return _dataProviderPrototype_index__WEBPACK_IMPORTED_MODULE_2__["WebPartDataProvider"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaseDataWebPart", function() { return _dataProviderPrototype_index__WEBPACK_IMPORTED_MODULE_2__["BaseDataWebPart"]; });

/* harmony import */ var _dateBox_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dateBox/index */ "RPH0");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DateBox", function() { return _dateBox_index__WEBPACK_IMPORTED_MODULE_3__["DateBox"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DateBoxSize", function() { return _dateBox_index__WEBPACK_IMPORTED_MODULE_3__["DateBoxSize"]; });

/* harmony import */ var _dateTimeHelper_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dateTimeHelper/index */ "WJ35");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getRelativeDateTimeStringForLists", function() { return _dateTimeHelper_index__WEBPACK_IMPORTED_MODULE_4__["getRelativeDateTimeStringForLists"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isSameDay", function() { return _dateTimeHelper_index__WEBPACK_IMPORTED_MODULE_4__["isSameDay"]; });

/* harmony import */ var _displayFieldMap_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./displayFieldMap/index */ "viTq");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CalculatedField", function() { return _displayFieldMap_index__WEBPACK_IMPORTED_MODULE_5__["CalculatedField"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DisplayFieldMap", function() { return _displayFieldMap_index__WEBPACK_IMPORTED_MODULE_5__["DisplayFieldMap"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MappedField", function() { return _displayFieldMap_index__WEBPACK_IMPORTED_MODULE_5__["MappedField"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LINK_FIELDNAME_SUFFIX", function() { return _displayFieldMap_index__WEBPACK_IMPORTED_MODULE_5__["LINK_FIELDNAME_SUFFIX"]; });

/* harmony import */ var _emphasisStyle_BaseEmphasisComponentStyles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./emphasisStyle/BaseEmphasisComponentStyles */ "4X80");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaseEmphasisComponentStyles", function() { return _emphasisStyle_BaseEmphasisComponentStyles__WEBPACK_IMPORTED_MODULE_6__["BaseEmphasisComponentStyles"]; });

/* harmony import */ var _fluentScope_FluentScope__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./fluentScope/FluentScope */ "edZz");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isFluentEnabledFor", function() { return _fluentScope_FluentScope__WEBPACK_IMPORTED_MODULE_7__["isFluentEnabledFor"]; });

/* harmony import */ var _handleItemNavigation__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./handleItemNavigation */ "HcPF");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "handleItemNavigation", function() { return _handleItemNavigation__WEBPACK_IMPORTED_MODULE_8__["handleItemNavigation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getUrlTarget", function() { return _handleItemNavigation__WEBPACK_IMPORTED_MODULE_8__["getUrlTarget"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isExternalUrl", function() { return _handleItemNavigation__WEBPACK_IMPORTED_MODULE_8__["isExternalUrl"]; });

/* harmony import */ var _imaging_index__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./imaging/index */ "Cy4Q");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "webPartPreviewThumbnail", function() { return _imaging_index__WEBPACK_IMPORTED_MODULE_9__["webPartPreviewThumbnail"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DoughboyDetector", function() { return _imaging_index__WEBPACK_IMPORTED_MODULE_9__["DoughboyDetector"]; });

/* harmony import */ var _lessText_index__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./lessText/index */ "2azk");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LessText", function() { return _lessText_index__WEBPACK_IMPORTED_MODULE_10__["LessText"]; });

/* harmony import */ var _truncateText_truncateText_styles__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./truncateText/truncateText.styles */ "Hxkh");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "truncateText", function() { return _truncateText_truncateText_styles__WEBPACK_IMPORTED_MODULE_11__["truncateText"]; });

/* harmony import */ var _mySiteWebPartCache_index__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./mySiteWebPartCache/index */ "cb9A");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MySiteWebPartCacheManager", function() { return _mySiteWebPartCache_index__WEBPACK_IMPORTED_MODULE_12__["MySiteWebPartCacheManager"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MySiteWebPartCacheHelper", function() { return _mySiteWebPartCache_index__WEBPACK_IMPORTED_MODULE_12__["MySiteWebPartCacheHelper"]; });

/* harmony import */ var _oauthErrorRenderer_index__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./oauthErrorRenderer/index */ "Pte6");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OAuthErrorRenderer", function() { return _oauthErrorRenderer_index__WEBPACK_IMPORTED_MODULE_13__["OAuthErrorRenderer"]; });

/* harmony import */ var _pagination_index__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pagination/index */ "r6nC");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PageType", function() { return _pagination_index__WEBPACK_IMPORTED_MODULE_14__["PageType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Pagination", function() { return _pagination_index__WEBPACK_IMPORTED_MODULE_14__["Pagination"]; });

/* harmony import */ var _parallax_Parallax__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./parallax/Parallax */ "4cyI");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Parallax", function() { return _parallax_Parallax__WEBPACK_IMPORTED_MODULE_15__["default"]; });

/* harmony import */ var _placeHolder_index__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./placeHolder/index */ "BngB");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Placeholder", function() { return _placeHolder_index__WEBPACK_IMPORTED_MODULE_16__["Placeholder"]; });

/* harmony import */ var _textClamp_TextClamp__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./textClamp/TextClamp */ "YxRI");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "clampText", function() { return _textClamp_TextClamp__WEBPACK_IMPORTED_MODULE_17__["clampText"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TextClamp", function() { return _textClamp_TextClamp__WEBPACK_IMPORTED_MODULE_17__["TextClamp"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "clampElement", function() { return _textClamp_TextClamp__WEBPACK_IMPORTED_MODULE_17__["clampElement"]; });

/* harmony import */ var _webPartChrome_index__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./webPartChrome/index */ "ZUan");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WebPartChrome", function() { return _webPartChrome_index__WEBPACK_IMPORTED_MODULE_18__["WebPartChrome"]; });

/* harmony import */ var _webPartTitle_WebPartTitle__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./webPartTitle/WebPartTitle */ "X3LC");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WebPartTitle", function() { return _webPartTitle_WebPartTitle__WEBPACK_IMPORTED_MODULE_19__["default"]; });

/* harmony import */ var _WebViewUtility__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./WebViewUtility */ "9mLi");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WebViewUtility", function() { return _WebViewUtility__WEBPACK_IMPORTED_MODULE_20__["default"]; });

/* harmony import */ var _ms_sp_live_persona_card_lib_LivePersonaCard__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @ms/sp-live-persona-card/lib/LivePersonaCard */ "H10Q");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LivePersonaCard", function() { return _ms_sp_live_persona_card_lib_LivePersonaCard__WEBPACK_IMPORTED_MODULE_21__["default"]; });

/* harmony import */ var _loaders_EditModeUtilitiesLoader__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./loaders/EditModeUtilitiesLoader */ "rfLl");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EditModeUtilitiesLoader", function() { return _loaders_EditModeUtilitiesLoader__WEBPACK_IMPORTED_MODULE_22__["EditModeUtilitiesLoader"]; });


























/***/ }),

/***/ "pDlU":
/*!*****************************************************************!*\
  !*** ./lib/baseCollectionWebPart/BaseCollectionKillSwitches.js ***!
  \*****************************************************************/
/*! exports provided: default, isLoggingFlightsPerformanceKSActive, usingThemeStyleForText, isCompleteHideEmptyPartKsActivated */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isLoggingFlightsPerformanceKSActive", function() { return isLoggingFlightsPerformanceKSActive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "usingThemeStyleForText", function() { return usingThemeStyleForText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isCompleteHideEmptyPartKsActivated", function() { return isCompleteHideEmptyPartKsActivated; });
/* harmony import */ var _ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ms/sp-component-utilities */ "hiL/");
/* harmony import */ var _ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__);
// @copyright Microsoft Corporation. All rights reserved.


var BaseCollectionKillSwitches = /** @class */ (function () {
    function BaseCollectionKillSwitches() {
    }
    BaseCollectionKillSwitches.exclusiveRenderTimeForBaseCollectionWebPart = 
    // tslint:disable-next-line: max-line-length
    new _ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_0__["KillSwitch"]('d84e2f1c-760e-4fb3-9589-95de35f2ddc1' /* '06/09/2020', 'Add exclusive render time for base collection web part' */);
    BaseCollectionKillSwitches.topicPageTitleNotEditableEditMode = 
    // tslint:disable-next-line: max-line-length
    new _ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_0__["KillSwitch"]('5725af9c-dbe0-43f3-b157-b24ec7350f2b' /* '06/18/2020', 'Topic page web part titles should not be editable in edit mode.' */);
    return BaseCollectionKillSwitches;
}());
/* harmony default export */ __webpack_exports__["default"] = (BaseCollectionKillSwitches);
function isLoggingFlightsPerformanceKSActive() {
    // tslint:disable-next-line: max-line-length
    return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["_SPKillSwitch"].isActivated('f186df9f-68c1-472c-94fe-d68b47deaa27' /* '07/15/2020', 'Track Flight and Experiment performance for WPs using TieredCaching' */);
}
function usingThemeStyleForText() {
    return !_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["_SPKillSwitch"].isActivated('9da07b7d-b53a-4c3d-bced-36f541fd231f' /* '07/23/2020', 'Use theme style for placeholder text' */);
}
function isCompleteHideEmptyPartKsActivated() {
    return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["_SPKillSwitch"].isActivated('a9c735bc-d46f-4459-bfa8-02a215cdf6dc'
    /* '01/20/2021', 'Completely hide empty web parts by removing extra spaces" */
    );
}


/***/ }),

/***/ "qjmy":
/*!********************************************!*\
  !*** external "@ms/sp-deferred-component" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_qjmy__;

/***/ }),

/***/ "r6nC":
/*!*********************************!*\
  !*** ./lib/pagination/index.js ***!
  \*********************************/
/*! exports provided: PageType, Pagination */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _IPageProps__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./IPageProps */ "E8QA");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PageType", function() { return _IPageProps__WEBPACK_IMPORTED_MODULE_0__["PageType"]; });

/* harmony import */ var _Pagination__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Pagination */ "e+Na");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Pagination", function() { return _Pagination__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/**
 * @copyright Microsoft Corporation. All rights reserved.
 */




/***/ }),

/***/ "rfLl":
/*!************************************************!*\
  !*** ./lib/loaders/EditModeUtilitiesLoader.js ***!
  \************************************************/
/*! exports provided: EditModeUtilitiesLoader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditModeUtilitiesLoader", function() { return EditModeUtilitiesLoader; });
var EditModeUtilitiesLoader = /** @class */ (function () {
    function EditModeUtilitiesLoader() {
    }
    EditModeUtilitiesLoader.GetUtilities = function () {
        if (!EditModeUtilitiesLoader._promise) {
            EditModeUtilitiesLoader._promise = __webpack_require__.e(/*! import() | sp-edit-utilities */ "sp-edit-utilities").then(__webpack_require__.bind(null, /*! ../deferredUtilities/EditModeUtilities */ "aABU"));
        }
        return EditModeUtilitiesLoader._promise;
    };
    return EditModeUtilitiesLoader;
}());



/***/ }),

/***/ "s20b":
/*!*************************************************!*\
  !*** ./lib/webPartTitle/WebPartTitle.styles.js ***!
  \*************************************************/
/*! exports provided: getClassNames, getStyles, WebPartTitleStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getClassNames", function() { return getClassNames; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStyles", function() { return getStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebPartTitleStyles", function() { return WebPartTitleStyles; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/office-ui-fabric-react-bundle */ "KL1q");
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _emphasisStyle_BaseEmphasisComponentStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../emphasisStyle/BaseEmphasisComponentStyles */ "4X80");
/**
 * @copyright Microsoft Corporation. All rights reserved.
 */



var getClassNames = Object(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_1__["classNamesFunction"])();
var getStyles = function (props) {
    if (!props.variantTheme) {
        return {
            captionElement: undefined
        };
    }
    else {
        return {
            captionElement: [
                {
                    selectors: {
                        '& span': {
                            color: props.variantTheme.semanticColors.bodyText
                        },
                        '& textarea': {
                            color: props.variantTheme.semanticColors.bodyText + ' !important'
                        },
                        '& textarea::placeholder': {
                            color: props.variantTheme.semanticColors.bodySubtext + ' !important'
                        }
                    }
                }
            ]
        };
    }
};
var WebPartTitleStyles = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(WebPartTitleStyles, _super);
    function WebPartTitleStyles() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WebPartTitleStyles.prototype.getStyles = function (props) {
        return getStyles(props);
    };
    return WebPartTitleStyles;
}(_emphasisStyle_BaseEmphasisComponentStyles__WEBPACK_IMPORTED_MODULE_2__["BaseEmphasisComponentStyles"]));



/***/ }),

/***/ "sGEB":
/*!************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/css-loader@3.2.1_webpack@4.44.2/node_modules/css-loader/dist/cjs.js!/agent/_work/1/s/common/temp/node_modules/.pnpm/postcss-loader@3.0.0/node_modules/postcss-loader/src??postcss!../sp-live-persona-card/lib/LivePersonaCard.module.css ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../common/temp/node_modules/.pnpm/css-loader@3.2.1_webpack@4.44.2/node_modules/css-loader/dist/runtime/api.js */ "5ADk")(false);
// Module
exports.push([module.i, ".a_a_434b99a9{cursor:pointer}.a_a_434b99a9:hover{outline:0}", ""]);


/***/ }),

/***/ "sRXn":
/*!*************************************************************!*\
  !*** ./lib/mySiteWebPartCache/MySiteWebPartCacheManager.js ***!
  \*************************************************************/
/*! exports provided: MySiteWebPartCacheManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MySiteWebPartCacheManager", function() { return MySiteWebPartCacheManager; });
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ms/sp-component-utilities */ "hiL/");
/* harmony import */ var _ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ms/sp-telemetry */ "2q6Q");
/* harmony import */ var _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @microsoft/sp-diagnostics */ "ut3N");
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _MySiteWebPartCacheDataProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MySiteWebPartCacheDataProvider */ "8LHw");
/* harmony import */ var _microsoft_sp_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @microsoft/sp-http */ "vlQI");
/* harmony import */ var _microsoft_sp_http__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_http__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _MySiteWebPartCacheHelper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./MySiteWebPartCacheHelper */ "Apzv");
/**
 * @file MySiteWebPartCacheManager.ts
 * @copyright Microsoft Corporation. All rights reserved.
 *
 * @remark The MySite WebPart Cache Manager for fetching and retrieving WebPart result data.
 */







var PREFETCHED_WEBPARTDATA = "_spWebPartData";
var WEBPART_PREFETCH_COMPLETE = "_spWebPartDataLoaded";
var QOS_PREFIX = "MySiteWebPartCacheDataManager.";
var PAGE_DESERIALIZATION_STICKY_EVENT_NAME = 'pageDeserializationFinished_legacyMySite';
var RESET_CACHE_MANAGER_EVENT_NAME = 'resetLegacyCacheManager';
var _noEmptyDeleteAPICallFixKS = new _ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_1__["KillSwitch"]('02ee5e09-105f-4ae4-b419-43a170c73e73' /*'06/16/2020', 'WEX_NoEmptyCacheAPICallFix' */);
var MySiteWebPartCacheManager = /** @class */ (function () {
    function MySiteWebPartCacheManager(serviceScope) {
        var _this = this;
        this._isDisposed = false;
        this._mySiteWebPartCacheDataProvider = new _MySiteWebPartCacheDataProvider__WEBPACK_IMPORTED_MODULE_4__["MySiteWebPartCacheDataProvider"](serviceScope);
        this._logSource = _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_3__["_LogSource"].create('MySiteWebPartCacheManager');
        this._serviceScope = serviceScope;
        serviceScope.whenFinished(function () {
            _this._spHttpClient = serviceScope.consume(_microsoft_sp_http__WEBPACK_IMPORTED_MODULE_5__["SPHttpClient"].serviceKey);
        });
        // Register sticky event listener for deleting extra cache entries
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPEventManager"].instance.registerEvent(PAGE_DESERIALIZATION_STICKY_EVENT_NAME, this, this.deleteUnmatchedCacheEntries);
        // Register sticky event listener for reseting cache data provider
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPEventManager"].instance.registerEvent(RESET_CACHE_MANAGER_EVENT_NAME, this, this.initializeCacheProvider);
    }
    MySiteWebPartCacheManager._calculateHash = function (config) {
        return _MySiteWebPartCacheHelper__WEBPACK_IMPORTED_MODULE_6__["MySiteWebPartCacheHelper"].generateHash(JSON.stringify(config));
    };
    Object.defineProperty(MySiteWebPartCacheManager.prototype, "instanceId", {
        get: function () {
            return this._instanceId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MySiteWebPartCacheManager.prototype, "componentId", {
        get: function () {
            return '96f08fe4-4e36-4fc2-8d13-f19ac082aedd';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MySiteWebPartCacheManager.prototype, "isDisposed", {
        get: function () {
            return this._isDisposed;
        },
        enumerable: true,
        configurable: true
    });
    MySiteWebPartCacheManager.prototype.dispose = function () {
        if (!this._isDisposed) {
            this._isDisposed = true;
        }
    };
    MySiteWebPartCacheManager.prototype.getCacheItemVersion = function (webPartInstanceId) {
        return this._mySiteWebPartCacheDataProvider.getCacheItemVersion(webPartInstanceId);
    };
    MySiteWebPartCacheManager.prototype.initializeCacheProvider = function (pageUniqueId) {
        if (window[PREFETCHED_WEBPARTDATA] &&
            window[PREFETCHED_WEBPARTDATA].Properties &&
            window[PREFETCHED_WEBPARTDATA].Properties.PageCacheFolderKey &&
            pageUniqueId !== window[PREFETCHED_WEBPARTDATA].Properties.PageCacheFolderKey) {
            // invalidate cache for current page
            window[PREFETCHED_WEBPARTDATA] = undefined;
            window[WEBPART_PREFETCH_COMPLETE] = undefined;
        }
        // initialize cache provider
        this._mySiteWebPartCacheDataProvider = new _MySiteWebPartCacheDataProvider__WEBPACK_IMPORTED_MODULE_4__["MySiteWebPartCacheDataProvider"](this._serviceScope);
        _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_3__["_EngagementLogger"].logEvent('MySiteWebPartCacheDataManager.InPageNavTriggered');
    };
    /**
     * Returns cached data for the calling WebPart while handling caching and re-rendering.
     *
     * @returns - A promise that represents WebPart data returned from the request or cache.
     */
    MySiteWebPartCacheManager.prototype.requestWebPartCacheData_deprecated = function (requestConfig) {
        return this._mySiteWebPartCacheDataProvider.getWebPartData(requestConfig.requestData, requestConfig.dataUpdated, requestConfig.config, requestConfig.webPartInstanceId, requestConfig.webPartAlias, requestConfig.rerender, requestConfig.secondsToInvalidate, requestConfig.webPartTag);
    };
    /**
     * Returns cached data for the matching configuration if available,
     * otherwise the server data for the same config.
     *
     * @returns - A promise containing the Type and the Data returned from the server request or cache.
     */
    MySiteWebPartCacheManager.prototype.requestWebPartCacheData = function (requestConfig) {
        var _this = this;
        var qosSuffix = "requestWebPartCacheData";
        var qosMonitor = new _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_3__["_QosMonitor"](QOS_PREFIX + qosSuffix);
        return this._mySiteWebPartCacheDataProvider
            .getCacheData(requestConfig)
            .then(function (cacheResult) {
            var cacheStatus = cacheResult.cacheResponseType === _ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_1__["CacheResponseType"].CachedData ? 'Completed' : 'Miss';
            var serverStatus = cacheResult.cacheResponseType === _ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_1__["CacheResponseType"].CachedData ? 'Waiting' : 'Completed';
            qosMonitor.writeSuccess(_this._mySiteWebPartCacheDataProvider.getWebPartIdLogObject(requestConfig.webPartAlias, requestConfig.webPartInstanceId, cacheStatus, serverStatus));
            return cacheResult;
        })
            .catch(function (error) {
            error.serverResponseAsync.catch(function (serverError) {
                qosMonitor.writeUnexpectedFailure('FailedToRetrieveCacheAndServerData', serverError, _this._mySiteWebPartCacheDataProvider.getWebPartIdLogObject(requestConfig.webPartAlias, requestConfig.webPartInstanceId, 'Failed', 'Failed'));
            });
            return error;
        });
    };
    /**
     * ADVANCED: returns cached data for specified webpart instance, if any.
     * @param context - webpart instance context
     * @param configuration - configuration object to hash for ensuring cached data is still compatible
     * @param cacheKeyOverride - allow caller to override cache key to something else other than instant id
     */
    MySiteWebPartCacheManager.prototype.getCachedData = function (context, configuration) {
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Validate"].isNotNullOrUndefined(context, 'context');
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Validate"].isNotNullOrUndefined(configuration, 'configuration');
        return this._mySiteWebPartCacheDataProvider._internalAdvancedGetCachedData(context.instanceId, MySiteWebPartCacheManager._calculateHash(configuration));
    };
    /**
     * ADVANCED: caches the specified data for specified webpart instance & configuration, if any.
     * @param context - webpart instance context
     * @param configuration - configuration object to hash for ensuring cached data is still compatible
     * @param data - data to serialize and cache, or undefined if cache should be cleared
     */
    MySiteWebPartCacheManager.prototype.setCachedData = function (context, configuration, data) {
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Validate"].isNotNullOrUndefined(context, 'context');
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Validate"].isNotNullOrUndefined(configuration, 'configuration');
        this._mySiteWebPartCacheDataProvider._internalAdvancedSetCacheData(context, MySiteWebPartCacheManager._calculateHash(configuration), data && JSON.stringify(data));
    };
    MySiteWebPartCacheManager.prototype.deleteUnmatchedCacheEntries = function (instanceIds) {
        var _this = this;
        if (this._mySiteWebPartCacheDataProvider.hasFlushCompleted) {
            this._deleteEntries(instanceIds);
        }
        else {
            this._mySiteWebPartCacheDataProvider.initializeFromLateFlush
                .then(function () {
                _this._deleteEntries(instanceIds);
            })
                .catch(function (error) { return _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_3__["_TraceLogger"].logError(_this._logSource, error, 'DeleteEntries'); });
        }
    };
    /**
     * Deletes cache entries that should not be there. Either because older webparts
     * have been deleted or because data from other pages was saved into this page's cache;
     * which was caused by not reseting the cache provider when there is page to page navigation.
     */
    MySiteWebPartCacheManager.prototype._deleteEntries = function (instanceIds) {
        var _this = this;
        var qosSuffix = 'deleteExtraCacheEntries';
        _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_2__["_PerformanceLogger"].startMarkForComponent(qosSuffix);
        var qos = new _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_3__["_QosMonitor"](QOS_PREFIX + qosSuffix);
        var flushedItemIDs = Object.keys(window[PREFETCHED_WEBPARTDATA] ? window[PREFETCHED_WEBPARTDATA].Items : []).map(function (key) { return key; });
        var itemsToDelete = flushedItemIDs.filter(function (instanceId) { return instanceIds.indexOf(instanceId) < 0; });
        if (itemsToDelete.length === 0) {
            qos.writeSuccess(this._getLogObject(0));
            _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_3__["_TraceLogger"].logVerbose(this._logSource, "No extra cache entries to clear");
            return;
        }
        var url = _MySiteWebPartCacheHelper__WEBPACK_IMPORTED_MODULE_6__["MySiteWebPartCacheHelper"].getPersonalCacheItemCreateUrl(this._mySiteWebPartCacheDataProvider.currentWebAbsoluteUrl);
        var body = _MySiteWebPartCacheHelper__WEBPACK_IMPORTED_MODULE_6__["MySiteWebPartCacheHelper"].getReadPersonalCacheItemBody(this._mySiteWebPartCacheDataProvider.currentListRelativeFolderPath, itemsToDelete, this._mySiteWebPartCacheDataProvider.mySiteAbsoluteUrl);
        _MySiteWebPartCacheHelper__WEBPACK_IMPORTED_MODULE_6__["MySiteWebPartCacheHelper"].post(this._spHttpClient, url, body, _MySiteWebPartCacheHelper__WEBPACK_IMPORTED_MODULE_6__["MySiteWebPartCacheHelper"].checkStatus)
            .then(function (response) { return response.json(); })
            .then(function (items) {
            var personalCacheItemsToDelete = items.value;
            // Temporarily remove all entries from the remote cache.
            // All entries will be re-generated by Update methods.
            var deleteUrl = _MySiteWebPartCacheHelper__WEBPACK_IMPORTED_MODULE_6__["MySiteWebPartCacheHelper"].getPersonalCacheItemDeleteUrl(_this._mySiteWebPartCacheDataProvider.currentWebAbsoluteUrl);
            // We need to ensure that we don't delete entries that have the AltTitle value set.
            if (_noEmptyDeleteAPICallFixKS.isActivated()) {
                personalCacheItemsToDelete = personalCacheItemsToDelete.filter(function (item) { return item.AltTitle === undefined; });
            }
            else {
                personalCacheItemsToDelete = personalCacheItemsToDelete.filter(function (item) { return !item.AltTitle; });
                // Only call API if there are items to delete
                if (personalCacheItemsToDelete.length === 0) {
                    _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_3__["_TraceLogger"].logVerbose(_this._logSource, "No extra cache entries to clear");
                    return Promise.resolve(personalCacheItemsToDelete);
                }
            }
            var deleteBody = _MySiteWebPartCacheHelper__WEBPACK_IMPORTED_MODULE_6__["MySiteWebPartCacheHelper"].getUpdatePersonalCacheItemsBody(personalCacheItemsToDelete, _this._mySiteWebPartCacheDataProvider.mySiteAbsoluteUrl, 
            /* isDelete */ true);
            if (_noEmptyDeleteAPICallFixKS.isActivated()) {
                return _MySiteWebPartCacheHelper__WEBPACK_IMPORTED_MODULE_6__["MySiteWebPartCacheHelper"].post(_this._spHttpClient, deleteUrl, deleteBody, _MySiteWebPartCacheHelper__WEBPACK_IMPORTED_MODULE_6__["MySiteWebPartCacheHelper"].checkStatus);
            }
            else {
                return _MySiteWebPartCacheHelper__WEBPACK_IMPORTED_MODULE_6__["MySiteWebPartCacheHelper"].post(_this._spHttpClient, deleteUrl, deleteBody, _MySiteWebPartCacheHelper__WEBPACK_IMPORTED_MODULE_6__["MySiteWebPartCacheHelper"].checkStatus)
                    .then(function (response) { return response.json(); })
                    .then(function (itemsDeleted) {
                    _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_3__["_TraceLogger"].logVerbose(_this._logSource, "Cleared " + itemsDeleted.length + " entries");
                    return itemsDeleted;
                });
            }
        })
            // tslint:disable-next-line:no-any
            .then(function (response) {
            if (_noEmptyDeleteAPICallFixKS.isActivated()) {
                return response.json();
            }
            return response;
        })
            .then(function (itemsDeleted) {
            if (_noEmptyDeleteAPICallFixKS.isActivated()) {
                qos.writeSuccess(_this._getLogObject(itemsToDelete.length));
                _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_2__["_PerformanceLogger"].endMarkForComponent(qosSuffix);
                _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_3__["_TraceLogger"].logVerbose(_this._logSource, "Cleared " + itemsDeleted.length + " entries");
            }
            else {
                var itemsDeletedCount = (itemsDeleted && itemsDeleted.length) || 0;
                qos.writeSuccess(_this._getLogObject(itemsDeletedCount));
                _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_2__["_PerformanceLogger"].endMarkForComponent(qosSuffix);
            }
        })
            .catch(function (error) {
            qos.writeUnexpectedFailure('DeleteExtraCacheError', error);
            _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_2__["_PerformanceLogger"].endMarkForComponent(qosSuffix);
        });
    };
    MySiteWebPartCacheManager.prototype._getLogObject = function (extraItemCount) {
        return { extraItemCount: extraItemCount };
    };
    MySiteWebPartCacheManager.serviceKey = _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["ServiceKey"].create('sp-component-utilities:MySiteWebPartCacheManager', MySiteWebPartCacheManager);
    return MySiteWebPartCacheManager;
}());



/***/ }),

/***/ "sgZW":
/*!***********************************************************************!*\
  !*** ./lib/baseCollectionWebPart/style/BaseCollection.module.scss.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* tslint:disable */
__webpack_require__(/*! ./BaseCollection.module.css */ "+y93");
var styles = {
    emptyResult: 'af_f_658c9e0a',
    messageView: 'ag_f_658c9e0a',
    titleContainer: 'ah_f_658c9e0a'
};
/* harmony default export */ __webpack_exports__["default"] = (styles);
/* tslint:enable */ 


/***/ }),

/***/ "tDzM":
/*!*****************************************!*\
  !*** ./lib/dateTimeHelper/isSameDay.js ***!
  \*****************************************/
/*! exports provided: isSameDay */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSameDay", function() { return isSameDay; });
/**
 * Return if two dates are on the same day.
 * @param date1: The first date.
 * @param date2: The second date.
 */
function isSameDay(date1, date2) {
    if (!date1 || !date2) {
        return false;
    }
    return (date1.getFullYear() === date2.getFullYear() &&
        date1.getMonth() === date2.getMonth() &&
        date1.getDate() === date2.getDate());
}


/***/ }),

/***/ "u3RV":
/*!***************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/css-loader@3.2.1_webpack@4.44.2/node_modules/css-loader/dist/cjs.js!/agent/_work/1/s/common/temp/node_modules/.pnpm/postcss-loader@3.0.0/node_modules/postcss-loader/src??postcss!./lib/placeHolder/Placeholder.css ***!
  \***************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../common/temp/node_modules/.pnpm/css-loader@3.2.1_webpack@4.44.2/node_modules/css-loader/dist/runtime/api.js */ "5ADk")(false);
// Module
exports.push([module.i, ".Placeholder{display:-ms-flexbox;display:flex}.Placeholder.Placeholder--autoHeight .Placeholder-container{height:auto;padding:80px 0}.Placeholder .Placeholder-container{box-sizing:border-box;zoom:1;-ms-flex-align:center;align-items:center;color:\"[theme:neutralSecondary, default: #605e5c]\";background-color:\"[theme:neutralLighter, default: #f3f2f1]\";width:100%;height:326px;padding:80px 0 0}.Placeholder .Placeholder-container:after,.Placeholder .Placeholder-container:before{display:table;content:\"\";line-height:0}.Placeholder .Placeholder-container:after{clear:both}.Placeholder .Placeholder-container .Placeholder-head{margin:0 -8px;box-sizing:border-box;zoom:1;color:\"[theme:neutralPrimary, default: #323130]\"}.Placeholder .Placeholder-container .Placeholder-head:after,.Placeholder .Placeholder-container .Placeholder-head:before{display:table;content:\"\";line-height:0}.Placeholder .Placeholder-container .Placeholder-head:after{clear:both}.Placeholder .Placeholder-container .Placeholder-head .Placeholder-headContainer{height:100%;white-space:nowrap;text-align:center}.Placeholder .Placeholder-container .Placeholder-head .Placeholder-icon{display:inline-block;vertical-align:middle;white-space:normal;font-size:42px;font-weight:100}.Placeholder .Placeholder-container .Placeholder-head .Placeholder-text{display:inline-block;vertical-align:middle;white-space:normal;line-height:normal}[dir=ltr] .Placeholder .Placeholder-container .Placeholder-head .Placeholder-text{padding-left:16px}[dir=rtl] .Placeholder .Placeholder-container .Placeholder-head .Placeholder-text{padding-right:16px}.Placeholder .Placeholder-container .Placeholder-head .Placeholder-text:not(.Placeholder-text-fluent){font-size:28px;font-weight:100}.Placeholder .Placeholder-container .Placeholder-head .Placeholder-text.Placeholder-text-fluent{font-size:\"[theme:xLargeFontSize, default: 20px]\";font-weight:\"[theme:xLargeFontWeight, default: 600]\"}.Placeholder .Placeholder-container .Placeholder-head .Placeholder-text:not(.ellipsisKillSwitch){max-width:70%;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.Placeholder .Placeholder-container .Placeholder-description{box-sizing:border-box;zoom:1;width:65%;vertical-align:middle;margin:0 auto;text-align:center}.Placeholder .Placeholder-container .Placeholder-description:after,.Placeholder .Placeholder-container .Placeholder-description:before{display:table;content:\"\";line-height:0}.Placeholder .Placeholder-container .Placeholder-description:after{clear:both}.Placeholder .Placeholder-container .Placeholder-description .Placeholder-descriptionText{color:\"[theme:neutralSecondary, default: #605e5c]\";margin:20px 0 28px;line-height:23px}.Placeholder .Placeholder-container .Placeholder-description .Placeholder-descriptionText:not(.Placeholder-text-fluent){font-size:17px;font-weight:100}.Placeholder .Placeholder-container .Placeholder-description .Placeholder-descriptionText.Placeholder-text-fluent{font-size:\"[theme:mediumPlusFontSize, default: 16px]\";font-weight:\"[theme:mediumPlusFontWeight, default: 400]\"}.Placeholder .Placeholder-container .Placeholder-description .Placeholder-descriptionText:not(.Placeholder-text-truncate){display:inline-block}.Placeholder .Placeholder-container .Placeholder-description .Placeholder-descriptionText.Placeholder-text-truncate{display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:3;box-sizing:content-box;max-height:69px;overflow:hidden}.Placeholder .Placeholder-container button{margin:2px 4px}.Placeholder-overlay{position:relative;height:100%;z-index:1}.Placeholder-overlay .Placeholder-spinnerContainer{position:relative;width:100%;margin:164px 0}", ""]);


/***/ }),

/***/ "ut3N":
/*!********************************************!*\
  !*** external "@microsoft/sp-diagnostics" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_ut3N__;

/***/ }),

/***/ "viTq":
/*!**************************************!*\
  !*** ./lib/displayFieldMap/index.js ***!
  \**************************************/
/*! exports provided: CalculatedField, DisplayFieldMap, MappedField, LINK_FIELDNAME_SUFFIX */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CalculatedField__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CalculatedField */ "e83p");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CalculatedField", function() { return _CalculatedField__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _DisplayFieldMap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DisplayFieldMap */ "ZE7E");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DisplayFieldMap", function() { return _DisplayFieldMap__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _MappedField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MappedField */ "NMfr");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MappedField", function() { return _MappedField__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LINK_FIELDNAME_SUFFIX", function() { return _DisplayFieldMap__WEBPACK_IMPORTED_MODULE_1__["LINK_FIELDNAME_SUFFIX"]; });







/***/ }),

/***/ "vlQI":
/*!*************************************!*\
  !*** external "@microsoft/sp-http" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_vlQI__;

/***/ }),

/***/ "vstr":
/*!****************************************!*\
  !*** ./lib/dateBox/DateBox.module.css ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../../common/temp/node_modules/.pnpm/css-loader@3.2.1_webpack@4.44.2/node_modules/css-loader/dist/cjs.js!../../../../common/temp/node_modules/.pnpm/postcss-loader@3.0.0/node_modules/postcss-loader/src??postcss!./DateBox.module.css */ "wAy5");
var loader = __webpack_require__(/*! @microsoft/load-themed-styles */ "jOlS");

if(typeof content === "string") content = [[module.i, content]];

// add the styles to the DOM
for (var i = 0; i < content.length; i++) loader.loadStyles(content[i][1], true);

if(content.locals) module.exports = content.locals;

/***/ }),

/***/ "wAy5":
/*!**************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/css-loader@3.2.1_webpack@4.44.2/node_modules/css-loader/dist/cjs.js!/agent/_work/1/s/common/temp/node_modules/.pnpm/postcss-loader@3.0.0/node_modules/postcss-loader/src??postcss!./lib/dateBox/DateBox.module.css ***!
  \**************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../common/temp/node_modules/.pnpm/css-loader@3.2.1_webpack@4.44.2/node_modules/css-loader/dist/runtime/api.js */ "5ADk")(false);
// Module
exports.push([module.i, ".j_c_658c9e0a{font-weight:400;border:1px solid;color:\"[theme:neutralPrimary, default: #323130]\";display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center;text-align:center}.j_c_658c9e0a.k_c_658c9e0a{height:62px;width:62px}.j_c_658c9e0a.l_c_658c9e0a{height:80px;width:80px}.j_c_658c9e0a.m_c_658c9e0a{height:104px;width:104px}.j_c_658c9e0a.n_c_658c9e0a{-ms-flex-pack:center;justify-content:center}.j_c_658c9e0a.o_c_658c9e0a{-ms-flex-pack:justify;justify-content:space-between}.k_c_658c9e0a .p_c_658c9e0a:not(.q_c_658c9e0a){font-size:12px;font-weight:400}.l_c_658c9e0a .p_c_658c9e0a:not(.q_c_658c9e0a){font-size:15px;font-weight:400}.m_c_658c9e0a .p_c_658c9e0a:not(.q_c_658c9e0a){font-size:21px;font-weight:100}.k_c_658c9e0a .p_c_658c9e0a.q_c_658c9e0a{font-size:\"[theme:smallFontSize, default: 12px]\";font-weight:\"[theme:smallFontWeight, default: 400]\";font-weight:600}.l_c_658c9e0a .p_c_658c9e0a.q_c_658c9e0a{font-size:\"[theme:mediumFontSize, default: 14px]\";font-weight:\"[theme:mediumFontWeight, default: 400]\";font-weight:600}.m_c_658c9e0a .p_c_658c9e0a.q_c_658c9e0a{font-size:\"[theme:xLargeFontSize, default: 20px]\";font-weight:\"[theme:xLargeFontWeight, default: 600]\";font-weight:600}.r_c_658c9e0a{font-weight:600}.k_c_658c9e0a .r_c_658c9e0a:not(.q_c_658c9e0a){font-size:21px}.l_c_658c9e0a .r_c_658c9e0a:not(.q_c_658c9e0a),.m_c_658c9e0a .r_c_658c9e0a:not(.q_c_658c9e0a){font-size:28px}.k_c_658c9e0a .r_c_658c9e0a.q_c_658c9e0a{font-size:\"[theme:xLargeFontSize, default: 20px]\";font-weight:\"[theme:xLargeFontWeight, default: 600]\"}.l_c_658c9e0a .r_c_658c9e0a.q_c_658c9e0a,.m_c_658c9e0a .r_c_658c9e0a.q_c_658c9e0a{font-size:\"[theme:xxLargeFontSize, default: 28px]\";font-weight:\"[theme:xxLargeFontWeight, default: 600]\"}.s_c_658c9e0a{-ms-flex-positive:1;flex-grow:1;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center}.k_c_658c9e0a .s_c_658c9e0a:not(.q_c_658c9e0a){font-size:10px;font-weight:600}.l_c_658c9e0a .s_c_658c9e0a:not(.q_c_658c9e0a){font-size:12px;font-weight:400}.m_c_658c9e0a .s_c_658c9e0a:not(.q_c_658c9e0a){font-size:15px;font-weight:400}.k_c_658c9e0a .s_c_658c9e0a.q_c_658c9e0a{font-size:\"[theme:xSmallFontSize, default: 10px]\";font-weight:\"[theme:xSmallFontWeight, default: 400]\";font-weight:600}.l_c_658c9e0a .s_c_658c9e0a.q_c_658c9e0a{font-size:\"[theme:smallFontSize, default: 12px]\";font-weight:\"[theme:smallFontWeight, default: 400]\";font-weight:600}.m_c_658c9e0a .s_c_658c9e0a.q_c_658c9e0a{font-size:\"[theme:mediumPlusFontSize, default: 16px]\";font-weight:\"[theme:mediumPlusFontWeight, default: 400]\";font-weight:600}.t_c_658c9e0a{margin:0;border:0;border-bottom:1px solid}.k_c_658c9e0a .t_c_658c9e0a{width:31px}.l_c_658c9e0a .t_c_658c9e0a{width:40px}.m_c_658c9e0a .t_c_658c9e0a{width:52px}", ""]);


/***/ }),

/***/ "wXfs":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/css-loader@3.2.1_webpack@4.44.2/node_modules/css-loader/dist/cjs.js!/agent/_work/1/s/common/temp/node_modules/.pnpm/postcss-loader@3.0.0/node_modules/postcss-loader/src??postcss!./lib/baseCollectionWebPart/style/BaseCollection.module.css ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../common/temp/node_modules/.pnpm/css-loader@3.2.1_webpack@4.44.2/node_modules/css-loader/dist/runtime/api.js */ "5ADk")(false);
// Module
exports.push([module.i, ".af_f_658c9e0a{color:\"[theme:neutralPrimary, default: #323130]\"}.ag_f_658c9e0a{margin-bottom:5px}.ah_f_658c9e0a a::-moz-focus-inner,.ah_f_658c9e0a button::-moz-focus-inner{border:0}.ah_f_658c9e0a a,.ah_f_658c9e0a button{outline:transparent;position:relative}.ah_f_658c9e0a.ms-Fabric.is-focusVisible a:focus:after,.ah_f_658c9e0a.ms-Fabric.is-focusVisible button:focus:after,.ms-Fabric.is-focusVisible .ah_f_658c9e0a a:focus:after,.ms-Fabric.is-focusVisible .ah_f_658c9e0a button:focus:after{content:\"\";position:absolute;top:0;right:0;bottom:0;left:0;border:1px solid \"[theme:neutralsecondary, default: #605e5c]\";border-radius:inherit;pointer-events:none}", ""]);


/***/ }),

/***/ "xTKt":
/*!********************************************!*\
  !*** ./lib/webPartChrome/loc/Strings.resx ***!
  \********************************************/
/*! exports provided: SeeAllLink, SeeAllLinkAriaLabel, AddButtonLabel, AddButtonAriaLabel, CloseTeachingBubbleAriaLabel, SeeAllPageLoadingAlertTemplate, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"SeeAllLink\":\"[!!--##Śēē àĺĺ##--!!]\",\"SeeAllLinkAriaLabel\":\"[!!--##Śēē àĺĺ. Ƥŕēśś ēńţēŕ ţō ƀŕōŵśē àĺĺ ĩţēmś.##--!!]\",\"AddButtonLabel\":\"[!!--##Àďď##--!!]\",\"AddButtonAriaLabel\":\"[!!--##Àďď àń ĩţēm##--!!]\",\"CloseTeachingBubbleAriaLabel\":\"[!!--##Ćĺōśē ţēàćĥĩńĝ ƀũƀƀĺē##--!!]\",\"SeeAllPageLoadingAlertTemplate\":\"[!!--##Ţĥē Śēē Àĺĺ ƥàĝē ƒōŕ ţĥē {0} ŵēƀ ƥàŕţ ĩś ōƥēńĩńĝ.##--!!]\"}");

/***/ }),

/***/ "y88i":
/*!********************************************!*\
  !*** external "@ms/odsp-utilities-bundle" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_y88i__;

/***/ }),

/***/ "zfKF":
/*!*********************************************************!*\
  !*** ./lib/webPartChrome/WebPartChromeStyles.styles.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/office-ui-fabric-react-bundle */ "KL1q");
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__);

var WebPartChromeStyles = /** @class */ (function () {
    function WebPartChromeStyles() {
    }
    WebPartChromeStyles.getStyles = function (props) {
        var theme = props.theme;
        var semanticColors = theme.semanticColors;
        return {
            title: [
                {
                    selectors: {
                        '& span': {
                            color: semanticColors.bodyText
                        },
                        '& textarea': {
                            color: theme.semanticColors.bodyText + ' !important'
                        },
                        '& textarea::placeholder': {
                            color: theme.semanticColors.bodySubtext + ' !important'
                        }
                    }
                }
            ],
            add: [
                {
                    color: semanticColors.bodyText,
                    selectors: {
                        '& .ms-Button-icon': {
                            color: semanticColors.link
                        },
                        '&:hover .ms-Button-icon, &:active .ms-Button-icon, &:focus .ms-Button-icon': {
                            color: semanticColors.linkHovered + ' !important'
                        },
                        '& .ms-Button-label': {
                            color: semanticColors.actionLink
                        },
                        '&:hover .ms-Button-label, &:active .ms-Button-label, &:focus .ms-Button-label': {
                            color: semanticColors.actionLinkHovered + ' !important'
                        },
                        '& .ms-Button-menuIcon': {
                            color: semanticColors.bodySubtext
                        },
                        '&:hover .ms-Button-menuIcon, &:active .ms-Button-menuIcon, &:focus .ms-Button-menuIcon': {
                            color: semanticColors.bodySubtext + ' !important'
                        }
                    }
                }
            ],
            seeAll: [
                {
                    color: semanticColors.link,
                    selectors: {
                        '&:hover, &:active': {
                            color: semanticColors.linkHovered
                        },
                        '&:focus': {
                            color: semanticColors.link
                        }
                    }
                }
            ]
        };
    };
    WebPartChromeStyles.getClassNames = Object(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__["classNamesFunction"])();
    return WebPartChromeStyles;
}());
/* harmony default export */ __webpack_exports__["default"] = (WebPartChromeStyles);


/***/ })

/******/ })});;
//# sourceMappingURL=sp-webpart-shared_[locale].js.map