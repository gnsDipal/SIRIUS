define("c79b9f88-6338-40fb-b463-3aad22a88b15_0.1.0", ["tslib","@ms/sp-telemetry","@microsoft/sp-loader","@microsoft/office-ui-fabric-react-bundle","@microsoft/sp-core-library","@microsoft/sp-page-context","@microsoft/sp-webpart-base","react","@ms/sp-component-utilities","@microsoft/load-themed-styles","@microsoft/sp-diagnostics","@microsoft/sp-http","@ms/odsp-utilities-bundle"], function(__WEBPACK_EXTERNAL_MODULE__17wl__, __WEBPACK_EXTERNAL_MODULE__2q6Q__, __WEBPACK_EXTERNAL_MODULE_I6O9__, __WEBPACK_EXTERNAL_MODULE_KL1q__, __WEBPACK_EXTERNAL_MODULE_UWqr__, __WEBPACK_EXTERNAL_MODULE_X_PM__, __WEBPACK_EXTERNAL_MODULE_br4S__, __WEBPACK_EXTERNAL_MODULE_cDcd__, __WEBPACK_EXTERNAL_MODULE_hiL___, __WEBPACK_EXTERNAL_MODULE_jOlS__, __WEBPACK_EXTERNAL_MODULE_ut3N__, __WEBPACK_EXTERNAL_MODULE_vlQI__, __WEBPACK_EXTERNAL_MODULE_y88i__) { return /******/ (function(modules) { // webpackBootstrap
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
/******/ 		var component_0 = { // react-dom
/******/ 			i: "aa0a46ec-1505-43cd-a44a-93f3a5aa460a",
/******/ 			v: "16.9.0",
/******/ 			m: "faye"
/******/ 		};
/******/ 		var component_1 = { // @ms/uifabric-styling-bundle
/******/ 			i: "17ce0976-e69a-4355-be84-89b69a74717d",
/******/ 			v: "0.1.0",
/******/ 			m: "fglE"
/******/ 		};
/******/
/******/ 		return {"vendors~webpack-shared-editmode-fabric-dialog": [component_0, component_1]}[chunkId] || [];
/******/ 	}
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"sp-webpart-shared-editmode": 0
/******/ 	};
/******/
/******/
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "chunk." + ({"vendors~webpack-shared-editmode-fabric-di~7720c46f":"vendors~webpack-shared-editmode-fabric-di~7720c46f","vendors~webpack-shared-editmode-fabric-dialog":"vendors~webpack-shared-editmode-fabric-dialog","webpack-shared-editmode-fabric-dialog-footer":"webpack-shared-editmode-fabric-dialog-footer"}[chunkId]||chunkId) + "_" + "none" + ".js"
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
/******/ 	var jsonpArray = window["webpackJsonpc79b9f88_6338_40fb_b463_3aad22a88b15_0_1_0"] = window["webpackJsonpc79b9f88_6338_40fb_b463_3aad22a88b15_0_1_0"] || [];
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
/******/ 	  var regex = (typeof spScriptNamePattern !== 'undefined') ? spScriptNamePattern : /sp-webpart-shared-editmode_default\.js/i;
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

/***/ "0C7E":
/*!****************************************************!*\
  !*** ./lib/localFilePreview/LocalFilePreview.resx ***!
  \****************************************************/
/*! exports provided: UploadWarningMessage, PreviewAltTextWhileUploading, FileTypeError, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"UploadWarningMessage\":\"UploadWarningMessage\",\"PreviewAltTextWhileUploading\":\"PreviewAltTextWhileUploading\",\"FileTypeError\":\"FileTypeError\"}");

/***/ }),

/***/ "17wl":
/*!************************!*\
  !*** external "tslib" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__17wl__;

/***/ }),

/***/ "2q6Q":
/*!***********************************!*\
  !*** external "@ms/sp-telemetry" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__2q6Q__;

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

/***/ "5vP7":
/*!*********************************!*\
  !*** ./lib/components/index.js ***!
  \*********************************/
/*! exports provided: LazyDialog, DeferredDialog, LazyDialogFooter, DeferredDialogFooter, LazyDialogContent, DeferredDialogContent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DeferredDialog_DeferredDialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DeferredDialog/DeferredDialog */ "7HsN");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LazyDialog", function() { return _DeferredDialog_DeferredDialog__WEBPACK_IMPORTED_MODULE_0__["LazyDialog"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DeferredDialog", function() { return _DeferredDialog_DeferredDialog__WEBPACK_IMPORTED_MODULE_0__["DeferredDialog"]; });

/* harmony import */ var _DeferredDialog_DeferredDialogFooter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DeferredDialog/DeferredDialogFooter */ "nxBm");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LazyDialogFooter", function() { return _DeferredDialog_DeferredDialogFooter__WEBPACK_IMPORTED_MODULE_1__["LazyDialogFooter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DeferredDialogFooter", function() { return _DeferredDialog_DeferredDialogFooter__WEBPACK_IMPORTED_MODULE_1__["DeferredDialogFooter"]; });

/* harmony import */ var _DeferredDialog_DeferredDialogContent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DeferredDialog/DeferredDialogContent */ "cQcO");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LazyDialogContent", function() { return _DeferredDialog_DeferredDialogContent__WEBPACK_IMPORTED_MODULE_2__["LazyDialogContent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DeferredDialogContent", function() { return _DeferredDialog_DeferredDialogContent__WEBPACK_IMPORTED_MODULE_2__["DeferredDialogContent"]; });

/**
 * @copyright Microsoft Corporation. All rights reserved.
 */





/***/ }),

/***/ "7HsN":
/*!*********************************************************!*\
  !*** ./lib/components/DeferredDialog/DeferredDialog.js ***!
  \*********************************************************/
/*! exports provided: LazyDialog, DeferredDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LazyDialog", function() { return LazyDialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeferredDialog", function() { return DeferredDialog; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/**
 * @copyright Microsoft Corporation. All rights reserved.
 */


// tslint:disable-next-line: variable-name
var LazyDialog = react__WEBPACK_IMPORTED_MODULE_1__["lazy"](function () {
    return Promise.all(/*! import() | webpack-shared-editmode-fabric-dialog */[__webpack_require__.e("vendors~webpack-shared-editmode-fabric-di~7720c46f"), __webpack_require__.e("vendors~webpack-shared-editmode-fabric-dialog")]).then(__webpack_require__.bind(null, /*! office-ui-fabric-react/lib/components/Dialog/Dialog */ "23Sn")).then(function (_a) {
        var Dialog = _a.Dialog;
        return { default: Dialog };
    });
});
/**
 * A deferred load fabric dialog component for smaller initial bundle size.
 * You can use `DialogFooter` and `DialogContent` from 'office-ui-fabric-react' directly, because their's sizes are small.
 */
function DeferredDialog(_a) {
    var _b = _a.fallback, fallback = _b === void 0 ? react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null) : _b, restProps = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(_a, ["fallback"]);
    return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Suspense"], { fallback: fallback },
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](LazyDialog, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, restProps))));
}


/***/ }),

/***/ "7Uem":
/*!********************************************!*\
  !*** ./lib/spFileHandler/SPFileHandler.js ***!
  \********************************************/
/*! exports provided: SPFileHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SPFileHandler", function() { return SPFileHandler; });
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/sp-diagnostics */ "ut3N");
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _microsoft_sp_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @microsoft/sp-http */ "vlQI");
/* harmony import */ var _microsoft_sp_http__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_http__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _microsoft_sp_page_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @microsoft/sp-page-context */ "X+PM");
/* harmony import */ var _microsoft_sp_page_context__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_page_context__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ms/odsp-utilities-bundle */ "y88i");
/* harmony import */ var _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _SPFileHandlerError__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SPFileHandlerError */ "g3qw");
/* harmony import */ var _SPFileHandler_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./SPFileHandler.types */ "sC07");
/* harmony import */ var _SPFileHandlerStrings_resx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./SPFileHandlerStrings.resx */ "cII6");
var _SPFileHandlerStrings_resx__WEBPACK_IMPORTED_MODULE_7___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./SPFileHandlerStrings.resx */ "cII6", 1);
/**
 * @Copyright (c) Microsoft Corporation.  All rights reserved.
 *
 * @file SPFileHandler.ts
 */








var ERROR_CODE_SECURITY_VALIDATION_TIMEOUT = '-2130575252';
var ERROR_CODE_INVALID_CHARACTERS = '-2130575245';
var ERROR_CODE_NO_PERMISSION = '-2147024891';
var ERROR_CODE_SITE_ASSETS_EXIST = '-2130575257';
var ERROR_CODE_FOLDER_EXIST = '-2130575342';
var SPFileHandler = /** @class */ (function () {
    function SPFileHandler(options) {
        var _this = this;
        options.serviceScope.whenFinished(function () {
            _this._httpClient = options.serviceScope.consume(_microsoft_sp_http__WEBPACK_IMPORTED_MODULE_2__["SPHttpClient"].serviceKey);
            _this._pageContext = options.serviceScope.consume(_microsoft_sp_page_context__WEBPACK_IMPORTED_MODULE_3__["PageContext"].serviceKey);
        });
        this._qosPrefix = options.qosPrefix;
        this._containerUrl = options.containerUrl;
    }
    Object.defineProperty(SPFileHandler, "pagePathName", {
        /**
         * Leaf URL portion of the page as serverRequestPath doesn't change within the session.
         * Note that page renames don't chang the pathname after the page title was first entered.
         */
        get: function () {
            var isNewPage = window.location.pathname.toUpperCase().indexOf('/NEWPAGE.ASPX') !== -1;
            if (isNewPage) {
                _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_0__["_TraceLogger"].logError(SPFileHandler._logSource, new Error('Page media upload before page titled.'));
            }
            return window.location.pathname;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Get a Url safe file name without incompatible special characters
     */
    SPFileHandler.replaceSpecialCharacters = function (inputString) {
        // TODO: #431082- @CMalonzo to cleanup.
        // This must NEVER include the dot or it will interfere with extension filenames!!!
        var specialChars = new RegExp('[&/\\# ,+()$~\'":*?<>{}|]|%2.', 'g');
        // If file is set by JS code for TAB test, normally this inputString is undefined.
        return inputString ? inputString.replace(specialChars, '-') : '';
    };
    /**
     * Validate the file type with a list of extensions
     */
    SPFileHandler.validateFileType = function (file, fileExtensions) {
        var fileName = (file && file.name) || file; // tslint:disable-line:no-any
        var dotIndex = fileName.lastIndexOf('.');
        var ext;
        if (dotIndex === -1) {
            return false;
        }
        else {
            ext = fileName.substring(dotIndex + 1, fileName.length);
        }
        return fileExtensions.indexOf(ext.toLowerCase()) > -1;
    };
    /**
     * Without %27 and params encoded like this, query will fail on the server because of overencoding with slashes
     * disappearing
     * @param key
     * @param value
     */
    SPFileHandler._encodeQuerySegment = function (key, value) {
        return key + "=%27" + _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_4__["UriEncoding"].encodeRestUriStringToken(value) + "%27";
    };
    SPFileHandler._matchErrorCode = function (error, errorCode) {
        return error.code ? String(error.code).indexOf(errorCode) > -1 : false;
    };
    SPFileHandler._mapServerResponseToUploadResult = function (uploadResponse) {
        return {
            listId: uploadResponse.ListId,
            uniqueId: uploadResponse.UniqueId,
            serverRelativeUrl: uploadResponse.ServerRelativeUrl,
            title: uploadResponse.Title
        };
    };
    /**
     * Read a file as dataURL for display, then this method to define the action
     * on completion of the reading
     */
    SPFileHandler.prototype.readFile = function (file) {
        var _this = this;
        if (!this._reader) {
            this._reader = new FileReader();
        }
        var readPromise = new Promise(function (resolve, reject) {
            if (!file) {
                _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_0__["_TraceLogger"].logVerbose(SPFileHandler._logSource, 'File is undefined');
                reject(new RangeError('FileUndefined'));
            }
            // It always read as string when readAsArrayBuffer is not used.
            _this._reader.onloadend = function () { return resolve(_this._reader.result); };
            _this._reader.onerror = function () {
                _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_0__["_TraceLogger"].logVerbose(SPFileHandler._logSource, 'Error occurred when reading the file');
                reject(_this._reader.error);
            };
            _this._reader.readAsDataURL(file);
        });
        return readPromise;
    };
    /**
     * Uploads a single local file to pre-defined end point, with an optionally specified name.
     * @param file - the single file from local to be uploaded.
     * @param overridenFileName - the name to override the original file name, if given.
     * @param overriddenPageName - the name to override the page name, if given.
     * @returns - a promise to define the actions on completion of each file upload.
     */
    SPFileHandler.prototype.uploadLocalFile = function (file, overriddenFileName, overriddenPageName) {
        var originalFileName = file instanceof File ? file.name : undefined;
        var fileName = overriddenFileName || originalFileName;
        var uploadLocalMonitor = new _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_0__["_QosMonitor"](this._qosPrefix + ".UploadLocalFile");
        var fullEndPoint = this._getEndPoint(fileName, undefined /* fileSrc */, overriddenPageName);
        var correlationId;
        return this._uploadCore(fullEndPoint, file)
            .then(function (uploadResponse) {
            correlationId = uploadResponse.correlationId;
            return uploadResponse.json();
        })
            .then(function (serverResponse) {
            var odataError = serverResponse[_SPFileHandler_types__WEBPACK_IMPORTED_MODULE_6__["ODATA_ERROR_KEY"]];
            if (!odataError) {
                uploadLocalMonitor.writeSuccess();
                return SPFileHandler._mapServerResponseToUploadResult(serverResponse);
            }
            else {
                var extraData = {
                    odataErrorCode: odataError.code,
                    odataErrorMessage: odataError.message && odataError.message.value,
                    correlationId: correlationId ? correlationId.toString() : undefined
                };
                if (SPFileHandler._matchErrorCode(odataError, ERROR_CODE_SECURITY_VALIDATION_TIMEOUT)) {
                    uploadLocalMonitor.writeExpectedFailure('SecurityValidationTimeOut', undefined, extraData);
                    throw new _SPFileHandlerError__WEBPACK_IMPORTED_MODULE_5__["SPFileHandlerError"](_SPFileHandlerStrings_resx__WEBPACK_IMPORTED_MODULE_7__["UploadSecurityValidationTimeOutErrorMessage"], odataError.code);
                }
                else if (SPFileHandler._matchErrorCode(odataError, ERROR_CODE_INVALID_CHARACTERS)) {
                    uploadLocalMonitor.writeExpectedFailure('InvalidCharacters', undefined, extraData);
                    throw new _SPFileHandlerError__WEBPACK_IMPORTED_MODULE_5__["SPFileHandlerError"](_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["Text"].format(_SPFileHandlerStrings_resx__WEBPACK_IMPORTED_MODULE_7__["UploadInvalidFileNameCharacterErrorMessage"], fileName), odataError.code);
                }
                else if (SPFileHandler._matchErrorCode(odataError, ERROR_CODE_NO_PERMISSION)) {
                    uploadLocalMonitor.writeExpectedFailure('NoPermission', undefined, extraData);
                    throw new _SPFileHandlerError__WEBPACK_IMPORTED_MODULE_5__["SPFileHandlerError"](_SPFileHandlerStrings_resx__WEBPACK_IMPORTED_MODULE_7__["UploadNoPermissionErrorMessage"], odataError.code);
                }
                else if (SPFileHandler._matchErrorCode(odataError, ERROR_CODE_SITE_ASSETS_EXIST) ||
                    SPFileHandler._matchErrorCode(odataError, ERROR_CODE_FOLDER_EXIST)) {
                    // These two errors means the endpoint failed to create site assets library or the folder to store images
                    // Because a list/folder with the same name already exists.
                    // Actually, it's not caused by conflict of file name or folder name. These two errors were thrown most
                    // likely because users don't have permission to access the site assets or the folder. Endpoint can't see
                    // folder/list without permission, so the endpoint will try to create the folder/list thus the API failed
                    // Because the folder/list exists but not visible to the current user.
                    // We need to tell users it is a permission issue.
                    uploadLocalMonitor.writeExpectedFailure('FileFolderAlreadyExists', undefined, extraData);
                    throw new _SPFileHandlerError__WEBPACK_IMPORTED_MODULE_5__["SPFileHandlerError"](_SPFileHandlerStrings_resx__WEBPACK_IMPORTED_MODULE_7__["UploadNoPermissionErrorMessage"], odataError.code);
                }
                else {
                    uploadLocalMonitor.writeUnexpectedFailure('UncategorizedError', undefined, extraData);
                    throw new _SPFileHandlerError__WEBPACK_IMPORTED_MODULE_5__["SPFileHandlerError"](_SPFileHandlerStrings_resx__WEBPACK_IMPORTED_MODULE_7__["UnknownError"], odataError.code);
                }
            }
        })
            .catch(function (error) {
            uploadLocalMonitor.writeUnexpectedFailure('RuntimeError', error, {
                errorDetails: JSON.stringify(error)
            });
            throw new _SPFileHandlerError__WEBPACK_IMPORTED_MODULE_5__["SPFileHandlerError"](_SPFileHandlerStrings_resx__WEBPACK_IMPORTED_MODULE_7__["UnknownError"]);
        });
    };
    /**
     * Uploads an external file to pre-defined end point, with an optionally specified name.
     * @param fileSrc - the source of the file from external to be uploaded to SharePoint.
     * @param overridenFileName - the name to override the original file name, if given.
     * @returns - a promise to define the actions on completion of each file upload.
     */
    SPFileHandler.prototype.uploadExternalFile = function (fileSrc, overriddenFileName) {
        var fullEndPoint = this._getEndPoint(overriddenFileName, fileSrc);
        var uploadExternalMonitor = new _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_0__["_QosMonitor"](this._qosPrefix + ".UploadExternalFile");
        var correlationId;
        return this._uploadCore(fullEndPoint, undefined)
            .then(function (uploadResponse) {
            correlationId = uploadResponse.correlationId;
            return uploadResponse.json();
        })
            .then(function (serverResponse) {
            var odataError = serverResponse[_SPFileHandler_types__WEBPACK_IMPORTED_MODULE_6__["ODATA_ERROR_KEY"]];
            if (!odataError) {
                uploadExternalMonitor.writeSuccess();
                return SPFileHandler._mapServerResponseToUploadResult(serverResponse);
            }
            else {
                // tslint:disable-next-line:no-any
                var extraData = {
                    odataErrorCode: odataError.code,
                    odataErrorMessage: odataError.message && odataError.message.value,
                    correlationId: correlationId ? correlationId.toString() : undefined
                };
                uploadExternalMonitor.writeUnexpectedFailure('UncategorizedError', undefined, extraData);
                throw new _SPFileHandlerError__WEBPACK_IMPORTED_MODULE_5__["SPFileHandlerError"](_SPFileHandlerStrings_resx__WEBPACK_IMPORTED_MODULE_7__["UnknownError"], odataError.code);
            }
        })
            .catch(function (error) {
            uploadExternalMonitor.writeUnexpectedFailure('RuntimeError', error, {
                errorDetails: JSON.stringify(error)
            });
            throw new _SPFileHandlerError__WEBPACK_IMPORTED_MODULE_5__["SPFileHandlerError"](_SPFileHandlerStrings_resx__WEBPACK_IMPORTED_MODULE_7__["UnknownError"]);
        });
    };
    /**
     * Validate the mime type with a list of extensions
     */
    SPFileHandler.prototype.validateMimeType = function (file, fileExtensions) {
        if (file.type) {
            var mimeType = file.type.split('/').pop();
            if (mimeType) {
                return fileExtensions.indexOf(mimeType.toLowerCase()) > -1;
            }
        }
        return false;
    };
    /**
     * Get the current page name without extension and special characters
     */
    SPFileHandler.prototype.getPageName = function (pathname) {
        if (pathname === void 0) { pathname = ''; }
        pathname = pathname.trim();
        var pageTitle = this.removeExtension(pathname);
        var pageName = SPFileHandler.replaceSpecialCharacters(pageTitle);
        var getEmptyPageNameQos = new _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_0__["_QosMonitor"]('FilePicker.UploadItem.GetPageName');
        if (!pageName) {
            var pageId = (this._pageContext.listItem && this._pageContext.listItem.id) || 'fastPageCreation';
            getEmptyPageNameQos.writeUnexpectedFailure('EmptyPageName', undefined, {
                pathNameTrimmedLen: pathname.length,
                isPathNameEndWithSlash: (pathname[pathname.length - 1] === '/').toString(),
                isPageTitleEmpty: (!pageTitle.trim()).toString(),
                pageId: pageId.toString()
            });
            // Set pageId as pageName's default value if pageName is empty,
            // otherwise upload file would failed due to empty page name.
            pageName = pageId.toString();
        }
        else {
            getEmptyPageNameQos.writeSuccess();
        }
        return pageName;
    };
    /**
     * Remove the extesion from a file name
     */
    SPFileHandler.prototype.removeExtension = function (inputString) {
        var lastSlashIndex = inputString.lastIndexOf('/');
        var rawTitle = lastSlashIndex === -1 ? inputString : inputString.substring(lastSlashIndex + 1);
        var lastDotIndex = rawTitle.lastIndexOf('.');
        return lastDotIndex === -1 ? rawTitle : rawTitle.substring(0, lastDotIndex);
    };
    // tslint:disable-next-line:no-any
    SPFileHandler.prototype._uploadCore = function (fullEndPoint, body) {
        var webAbsoluteUrl = (this._pageContext && this._pageContext.web && this._pageContext.web.absoluteUrl) || '';
        var headers = new Headers();
        headers.append('accept', 'application/json; odata=nometadata');
        headers.append('OData-version', '3.0');
        var postUrl = _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_4__["Uri"].concatenate(webAbsoluteUrl, fullEndPoint);
        return this._httpClient.post(postUrl, _microsoft_sp_http__WEBPACK_IMPORTED_MODULE_2__["SPHttpClient"].configurations.v1, { headers: headers, body: body });
    };
    /**
     * Get the full end point url using the file name and container
     */
    SPFileHandler.prototype._getEndPoint = function (fileName, fileSrc, overriddenPageName) {
        fileName = encodeURIComponent(fileName);
        var select = '$select=ListId,ServerRelativeUrl,Title,UniqueId';
        if (this._containerUrl) {
            var containerUrl = encodeURIComponent(this._containerUrl);
            return ('/_api/web/GetFolderByServerRelativeUrl(' +
                _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["UrlUtilities"].convertToODataStringLiteral(containerUrl) +
                ')/Files/Add(url=' +
                _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["UrlUtilities"].convertToODataStringLiteral(fileName) +
                (", overwrite=false)?" + select));
        }
        if (fileSrc) {
            return ('/_api/sitepages/AddImageFromExternalUrl?' +
                this._createSitePageEndpoint(fileName, overriddenPageName) +
                '&' +
                SPFileHandler._encodeQuerySegment('externalUrl', fileSrc) +
                ("&" + select));
        }
        return ('/_api/sitepages/AddImage?' + this._createSitePageEndpoint(fileName, overriddenPageName) + ("&" + select));
    };
    SPFileHandler.prototype._createSitePageEndpoint = function (encodedFileName, overriddenPageName) {
        var pageName = overriddenPageName || this.getPageName(SPFileHandler.pagePathName);
        return (SPFileHandler._encodeQuerySegment('imageFileName', encodedFileName) +
            '&' +
            SPFileHandler._encodeQuerySegment('pageName', pageName));
    };
    SPFileHandler._logSource = _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_0__["_LogSource"].create('PublishingWebPartSPFileHandler');
    return SPFileHandler;
}());



/***/ }),

/***/ "9Nun":
/*!**********************************************************************!*\
  !*** ./lib/propertyPaneFields/PropertyPaneAudienceToggle.module.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../../common/temp/node_modules/.pnpm/css-loader@3.2.1_webpack@4.44.2/node_modules/css-loader/dist/cjs.js!../../../../common/temp/node_modules/.pnpm/postcss-loader@3.0.0/node_modules/postcss-loader/src??postcss!./PropertyPaneAudienceToggle.module.css */ "Ep7n");
var loader = __webpack_require__(/*! @microsoft/load-themed-styles */ "jOlS");

if(typeof content === "string") content = [[module.i, content]];

// add the styles to the DOM
for (var i = 0; i < content.length; i++) loader.loadStyles(content[i][1], true);

if(content.locals) module.exports = content.locals;

/***/ }),

/***/ "DRLi":
/*!***************************************!*\
  !*** ./lib/localFilePreview/index.js ***!
  \***************************************/
/*! exports provided: LocalFilePreview */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _LocalFilePreview__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LocalFilePreview */ "vS7n");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LocalFilePreview", function() { return _LocalFilePreview__WEBPACK_IMPORTED_MODULE_0__["default"]; });

 // tslint:disable-line:export-name


/***/ }),

/***/ "Ep7n":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/css-loader@3.2.1_webpack@4.44.2/node_modules/css-loader/dist/cjs.js!/agent/_work/1/s/common/temp/node_modules/.pnpm/postcss-loader@3.0.0/node_modules/postcss-loader/src??postcss!./lib/propertyPaneFields/PropertyPaneAudienceToggle.module.css ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../common/temp/node_modules/.pnpm/css-loader@3.2.1_webpack@4.44.2/node_modules/css-loader/dist/runtime/api.js */ "5ADk")(false);
// Module
exports.push([module.i, ".a_a_7c0c6d12{display:-ms-inline-flexbox;display:inline-flex}", ""]);


/***/ }),

/***/ "EszB":
/*!************************************************!*\
  !*** ./lib/spFileHandler/ensureOrientation.js ***!
  \************************************************/
/*! exports provided: rotatedExifOrientation, ensureOrientation, calculateExifOrientation, convertDataUriToArrayBuffer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotatedExifOrientation", function() { return rotatedExifOrientation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ensureOrientation", function() { return ensureOrientation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calculateExifOrientation", function() { return calculateExifOrientation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertDataUriToArrayBuffer", function() { return convertDataUriToArrayBuffer; });
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/sp-diagnostics */ "ut3N");
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__);
/**
 * @copyright Microsoft Corporation. All rights reserved.
 *
 * @file ensureOrientation.ts
 * Utility for reading image EXIF data to rotate the image as per original orientation.
 */


var ASCII_EXIF_CODE = 0x45786966;
var EXIF_ORIENTATION = 0x0112;
var JPEG_START = 0xffd8;
var LITTLE_ENDIANNESS_TAG = 0x4949;
var SIGNIFICANT_NUMBER_MASK = 0xff00;
var SEGMENT_MARKER = 0xffe1;
var rotatedExifOrientation = [5, 6, 7, 8];
// Rotation logic adapted from https://jsfiddle.net/wunderbart/w1hw5kv1/
/**
 * Ensures image orientation based on its x64 EXIF data.
 * @param imageElement - <img /> element presumed with visibility=hidden
 * @param onFlipCallback - optional callback to execute upon rotation flipping aspect ratio
 */
function ensureOrientation(imageElement, onFlipCallback) {
    if (!imageElement || !imageElement.src) {
        return;
    }
    var browserInfo = _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["_BrowserDetection"].getBrowserInformation();
    if (browserInfo.browser === _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["_Browser"].Firefox ||
        ((browserInfo.browser === _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["_Browser"].Chrome || browserInfo.browser === _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["_Browser"].EdgeChromium) &&
            browserInfo.browserVersion &&
            browserInfo.browserVersion.greaterThan(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["Version"].parse('81.0.0.0')))) {
        imageElement.style.visibility = 'visible';
        return;
    }
    convertDataUriToArrayBuffer(imageElement.src)
        .then(function (buffer) { return calculateExifOrientation(buffer); })
        .then(function (exifOrientation) {
        if (isNaN(exifOrientation) || exifOrientation === 1) {
            imageElement.style.transform = undefined;
            imageElement.style.visibility = 'visible';
            return; // either missing transform info or oriented properly already
        }
        var flipDimensions = [5, 6, 7, 8].indexOf(exifOrientation) !== -1;
        if (flipDimensions && onFlipCallback) {
            onFlipCallback();
        }
        var matrixValues;
        switch (exifOrientation) {
            // mirror on vertical axis
            case 2:
                matrixValues = '-1, 0, 0, 1, 0, 0';
                break;
            // rotate 180
            case 3:
                matrixValues = '-1, 0, 0, -1, 0, 0';
                break;
            // rotate 180 and mirror on vertical axis
            case 4:
                matrixValues = '1, 0, 0, -1, 0, 0';
                break;
            // rotate 90 clockwise and mirror on vertical axis
            case 5:
                matrixValues = '0, 1, 1, 0, 0, 0';
                break;
            // rotate 90 clockwise
            case 6:
                matrixValues = '0, 1, -1, 0, 0, 0';
                break;
            // rotate 90 counter-clockwise and mirror on vertical axis
            case 7:
                matrixValues = '0, -1, -1, 0, 0, 0';
                break;
            // rotate 90 counter-clockwise
            case 8:
                matrixValues = '0, -1, 1, 0, 0, 0';
                break;
        }
        imageElement.style.transform = "matrix(" + matrixValues + ")";
        imageElement.style.visibility = 'visible';
    })
        .catch(function (error) {
        return _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_0__["_TraceLogger"].logError(_microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_0__["_LogSource"].create('ensureOrientation'), error, 'convertDataUriToArrayBuffer');
    });
}
// Adapted from
// http://stackoverflow.com/questions/7584794/accessing-jpeg-exif-rotation-data-in-javascript-on-the-client-side
function calculateExifOrientation(buffer) {
    if (!buffer) {
        return Promise.resolve(undefined);
    }
    var dataView = new DataView(buffer);
    if (dataView.getUint16(0, false) !== JPEG_START) {
        return Promise.resolve(undefined);
    }
    var length = dataView.byteLength;
    var offset = 2;
    while (offset < length) {
        var marker = dataView.getUint16(offset, false);
        offset += 2;
        if (marker === SEGMENT_MARKER) {
            if (dataView.getUint32((offset += 2), false) !== ASCII_EXIF_CODE) {
                return Promise.resolve(undefined);
            }
            var isLittleEndian = dataView.getUint16((offset += 6), false) === LITTLE_ENDIANNESS_TAG;
            offset += dataView.getUint32(offset + 4, isLittleEndian);
            var tags = dataView.getUint16(offset, isLittleEndian);
            offset += 2;
            for (var i = 0; i < tags; i++) {
                if (dataView.getUint16(offset + i * 12, isLittleEndian) === EXIF_ORIENTATION) {
                    var exifOrientation = dataView.getUint16(offset + i * 12 + 8, isLittleEndian);
                    return Promise.resolve(exifOrientation);
                }
            }
            // tslint:disable-next-line:no-bitwise
        }
        else if ((marker & SIGNIFICANT_NUMBER_MASK) !== SIGNIFICANT_NUMBER_MASK) {
            break;
        }
        else {
            offset += dataView.getUint16(offset, false);
        }
    }
    return Promise.resolve(undefined);
}
function convertDataUriToArrayBuffer(dataUri) {
    // Simpler to fetch than getting a bunch of libraries to do the conversion
    return fetch(dataUri)
        .then(function (res) {
        return res.arrayBuffer();
    })
        .catch(function (error) {
        // For unsupported browsers, move on
        return Promise.resolve(undefined);
    });
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

/***/ "KL1q":
/*!***********************************************************!*\
  !*** external "@microsoft/office-ui-fabric-react-bundle" ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_KL1q__;

/***/ }),

/***/ "P83t":
/*!**********************************************************!*\
  !*** ./lib/localFilePreview/LocalFilePreview.module.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../../common/temp/node_modules/.pnpm/css-loader@3.2.1_webpack@4.44.2/node_modules/css-loader/dist/cjs.js!../../../../common/temp/node_modules/.pnpm/postcss-loader@3.0.0/node_modules/postcss-loader/src??postcss!./LocalFilePreview.module.css */ "ycAZ");
var loader = __webpack_require__(/*! @microsoft/load-themed-styles */ "jOlS");

if(typeof content === "string") content = [[module.i, content]];

// add the styles to the DOM
for (var i = 0; i < content.length; i++) loader.loadStyles(content[i][1], true);

if(content.locals) module.exports = content.locals;

/***/ }),

/***/ "UGg9":
/*!*****************************************!*\
  !*** ./lib/propertyPaneFields/index.js ***!
  \*****************************************/
/*! exports provided: PropertyPaneAudienceToggle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PropertyPaneAudienceToggle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PropertyPaneAudienceToggle */ "fpzE");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PropertyPaneAudienceToggle", function() { return _PropertyPaneAudienceToggle__WEBPACK_IMPORTED_MODULE_0__["PropertyPaneAudienceToggle"]; });




/***/ }),

/***/ "UWqr":
/*!*********************************************!*\
  !*** external "@microsoft/sp-core-library" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_UWqr__;

/***/ }),

/***/ "VB/2":
/*!****************************************************!*\
  !*** ./lib/docLibraryContext/DocLibraryContext.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _microsoft_sp_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/sp-http */ "vlQI");
/* harmony import */ var _microsoft_sp_http__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_http__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _microsoft_sp_page_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/sp-page-context */ "X+PM");
/* harmony import */ var _microsoft_sp_page_context__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_page_context__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ms/odsp-utilities-bundle */ "y88i");
/* harmony import */ var _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ms/sp-telemetry */ "2q6Q");
/* harmony import */ var _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_3__);




var NOT_FOUND_SP_ERROR_CODE = '-2146232832';
var DocLibraryContext = /** @class */ (function () {
    function DocLibraryContext(serviceScope, errorCallback) {
        var _this = this;
        var pageContext;
        serviceScope.whenFinished(function () {
            _this._spHttpClient = serviceScope.consume(_microsoft_sp_http__WEBPACK_IMPORTED_MODULE_0__["SPHttpClient"].serviceKey);
            pageContext = serviceScope.consume(_microsoft_sp_page_context__WEBPACK_IMPORTED_MODULE_1__["PageContext"].serviceKey);
        });
        if (pageContext && pageContext.web) {
            this._webAbsoluteUrl = pageContext.web.absoluteUrl;
            this._webId = (pageContext.web.id && pageContext.web.id.toString()) || '';
        }
        else {
            this._webAbsoluteUrl = this._webId = '';
        }
        this._siteId =
            (pageContext && pageContext.site && pageContext.site.id && pageContext.site.id.toString()) || '';
        this._errorCallback = errorCallback;
    }
    Object.defineProperty(DocLibraryContext.prototype, "defaultDocumentLibrary", {
        get: function () {
            var url = _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_2__["Uri"].concatenate(this._webAbsoluteUrl, '_api/web/DefaultDocumentLibrary?$expand=RootFolder');
            return this._spHttpClient
                .get(url, _microsoft_sp_http__WEBPACK_IMPORTED_MODULE_0__["SPHttpClient"].configurations.v1)
                .then(function (response) { return response.json(); });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DocLibraryContext.prototype, "siteContext", {
        get: function () {
            var _this = this;
            if (this._siteContext) {
                return Promise.resolve(this._siteContext);
            }
            else {
                return this._getContainingFolderSiteContext().then(function (response) {
                    _this._siteContext = response;
                    return response;
                });
            }
        },
        enumerable: true,
        configurable: true
    });
    DocLibraryContext.prototype._getContainingFolderSiteContext = function () {
        var _this = this;
        var siteContext = {
            webAbsoluteUrl: this._webAbsoluteUrl,
            libraryName: '',
            defaultLibraryId: '',
            pickerDomain: window.location.protocol + '//' + window.location.hostname,
            siteId: this._siteId,
            webId: this._webId
        };
        var monitor = new _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_3__["_QosMonitor"]('GetWebDefaultLibrary');
        return this.defaultDocumentLibrary
            .then(function (list) {
            if (list.error) {
                throw new Error(list.error.code);
            }
            siteContext.libraryName = list.RootFolder.Name;
            siteContext.defaultLibraryId = list.Id;
            monitor.writeSuccess();
            return siteContext;
        })
            .catch(function (error) {
            if (error.message.indexOf(NOT_FOUND_SP_ERROR_CODE) >= 0) {
                monitor.writeExpectedFailure('ListDeleted');
            }
            else {
                monitor.writeUnexpectedFailure(undefined /*tag*/, error);
            }
            if (_this._errorCallback) {
                _this._errorCallback(siteContext);
                return siteContext;
            }
            else {
                throw error;
            }
        });
    };
    return DocLibraryContext;
}());
/* harmony default export */ __webpack_exports__["default"] = (DocLibraryContext);


/***/ }),

/***/ "X+PM":
/*!*********************************************!*\
  !*** external "@microsoft/sp-page-context" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_X_PM__;

/***/ }),

/***/ "XL+4":
/*!**************************************************!*\
  !*** ./lib/filePickerLoader/FilePickerLoader.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/sp-diagnostics */ "ut3N");
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _microsoft_sp_loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/sp-loader */ "I6O9");
/* harmony import */ var _microsoft_sp_loader__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_loader__WEBPACK_IMPORTED_MODULE_1__);


var FilePickerLoader = /** @class */ (function () {
    function FilePickerLoader() {
    }
    /**
     * Load and initialize FilePicker control.
     */
    FilePickerLoader.load = function (serviceScope, filePickerData) {
        // tslint:disable-next-line:no-any TODO: VSO#423786
        return _microsoft_sp_loader__WEBPACK_IMPORTED_MODULE_1__["SPComponentLoader"].loadComponentById(FilePickerLoader.filePickerComponentId).then(function (module) {
            var filePicker = new module.FilePicker(serviceScope);
            filePicker.initialize(filePickerData);
            filePicker
                .fetchData()
                .catch(function (error) { return _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_0__["_TraceLogger"].logError(_microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_0__["_LogSource"].create('FilePickerLoader'), error, 'fetchData'); });
            return filePicker;
        });
    };
    FilePickerLoader.filePickerComponentId = 'a81a5cf6-c9ad-4a0a-85aa-68c03d2d22a2';
    return FilePickerLoader;
}());
/* harmony default export */ __webpack_exports__["default"] = (FilePickerLoader);


/***/ }),

/***/ "ZMFq":
/*!****************************************************************!*\
  !*** ./lib/propertyPaneFields/PropertyPaneAudienceToggle.resx ***!
  \****************************************************************/
/*! exports provided: EnableLabel, IconTooltip, OnText, OffText, OnAriaLabel, OffAriaLabel, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"EnableLabel\":\"EnableLabel\",\"IconTooltip\":\"IconTooltip\",\"OnText\":\"OnText\",\"OffText\":\"OffText\",\"OnAriaLabel\":\"OnAriaLabel\",\"OffAriaLabel\":\"OffAriaLabel\"}");

/***/ }),

/***/ "br4S":
/*!*********************************************!*\
  !*** external "@microsoft/sp-webpart-base" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_br4S__;

/***/ }),

/***/ "cDcd":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_cDcd__;

/***/ }),

/***/ "cII6":
/*!*****************************************************!*\
  !*** ./lib/spFileHandler/SPFileHandlerStrings.resx ***!
  \*****************************************************/
/*! exports provided: UploadSecurityValidationTimeOutErrorMessage, UploadInvalidFileNameCharacterErrorMessage, UploadNoPermissionErrorMessage, UnknownError, UploadWarningMessage, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"UploadSecurityValidationTimeOutErrorMessage\":\"UploadSecurityValidationTimeOutErrorMessage\",\"UploadInvalidFileNameCharacterErrorMessage\":\"UploadInvalidFileNameCharacterErrorMessage\",\"UploadNoPermissionErrorMessage\":\"UploadNoPermissionErrorMessage\",\"UnknownError\":\"UnknownError\",\"UploadWarningMessage\":\"UploadWarningMessage\"}");

/***/ }),

/***/ "cQcO":
/*!****************************************************************!*\
  !*** ./lib/components/DeferredDialog/DeferredDialogContent.js ***!
  \****************************************************************/
/*! exports provided: LazyDialogContent, DeferredDialogContent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LazyDialogContent", function() { return LazyDialogContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeferredDialogContent", function() { return DeferredDialogContent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/**
 * @copyright Microsoft Corporation. All rights reserved.
 */


// tslint:disable-next-line: variable-name
var LazyDialogContent = react__WEBPACK_IMPORTED_MODULE_1__["lazy"](function () {
    return __webpack_require__.e(/*! import() | webpack-shared-editmode-fabric-dialog-content */ "vendors~webpack-shared-editmode-fabric-di~7720c46f").then(__webpack_require__.bind(null, /*! office-ui-fabric-react/lib/components/Dialog/DialogContent */ "+dJA")).then(function (_a) {
        var DialogContent = _a.DialogContent;
        return { default: DialogContent };
    });
});
function DeferredDialogContent(_a) {
    var _b = _a.fallback, fallback = _b === void 0 ? react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null) : _b, restProps = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(_a, ["fallback"]);
    return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Suspense"], { fallback: fallback },
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](LazyDialogContent, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, restProps))));
}


/***/ }),

/***/ "f1EN":
/*!**************************************************************!*\
  !*** ./lib/localFilePreview/LocalFilePreview.module.scss.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* tslint:disable */
__webpack_require__(/*! ./LocalFilePreview.module.css */ "P83t");
var styles = {
    localFilePreview: 'b_b_7c0c6d12',
    uploadingIcon: 'c_b_7c0c6d12',
    uploadingSpinner: 'e_b_7c0c6d12',
    spin: 'f_b_7c0c6d12',
    imagePreview: 'g_b_7c0c6d12',
    uploadingMessage: 'h_b_7c0c6d12'
};
/* harmony default export */ __webpack_exports__["default"] = (styles);
/* tslint:enable */ 


/***/ }),

/***/ "fpzE":
/*!**************************************************************!*\
  !*** ./lib/propertyPaneFields/PropertyPaneAudienceToggle.js ***!
  \**************************************************************/
/*! exports provided: PropertyPaneAudienceToggle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertyPaneAudienceToggle", function() { return PropertyPaneAudienceToggle; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/office-ui-fabric-react-bundle */ "KL1q");
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _microsoft_sp_webpart_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @microsoft/sp-webpart-base */ "br4S");
/* harmony import */ var _microsoft_sp_webpart_base__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_webpart_base__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _PropertyPaneAudienceToggle_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PropertyPaneAudienceToggle.module.scss */ "vNFS");
/* harmony import */ var _PropertyPaneAudienceToggle_resx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PropertyPaneAudienceToggle.resx */ "ZMFq");
var _PropertyPaneAudienceToggle_resx__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./PropertyPaneAudienceToggle.resx */ "ZMFq", 1);





/**
 * Create the audience toggle property pane control.
 * @param targetProperty The target property of the web part.
 * @param infoLink The options to configure the audience toggle.
 */
function PropertyPaneAudienceToggle(targetProperty, options) {
    var label = (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: _PropertyPaneAudienceToggle_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].container },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_1__["Label"], { "aria-label": _PropertyPaneAudienceToggle_resx__WEBPACK_IMPORTED_MODULE_4__["EnableLabel"] }, _PropertyPaneAudienceToggle_resx__WEBPACK_IMPORTED_MODULE_4__["EnableLabel"]),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_1__["TooltipHost"], { content: _PropertyPaneAudienceToggle_resx__WEBPACK_IMPORTED_MODULE_4__["IconTooltip"] },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_1__["IconButton"], { "aria-label": _PropertyPaneAudienceToggle_resx__WEBPACK_IMPORTED_MODULE_4__["IconTooltip"], iconProps: { iconName: 'info' }, href: options.infoLink, target: '_blank' }))));
    return Object(_microsoft_sp_webpart_base__WEBPACK_IMPORTED_MODULE_2__["PropertyPaneToggle"])(targetProperty, {
        key: targetProperty,
        label: label,
        onText: _PropertyPaneAudienceToggle_resx__WEBPACK_IMPORTED_MODULE_4__["OnText"],
        offText: _PropertyPaneAudienceToggle_resx__WEBPACK_IMPORTED_MODULE_4__["OffText"],
        onAriaLabel: _PropertyPaneAudienceToggle_resx__WEBPACK_IMPORTED_MODULE_4__["OnAriaLabel"],
        offAriaLabel: _PropertyPaneAudienceToggle_resx__WEBPACK_IMPORTED_MODULE_4__["OffAriaLabel"],
        dataAutomationId: options.dataAutomationId
    });
}


/***/ }),

/***/ "g3qw":
/*!*************************************************!*\
  !*** ./lib/spFileHandler/SPFileHandlerError.js ***!
  \*************************************************/
/*! exports provided: SPFileHandlerError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SPFileHandlerError", function() { return SPFileHandlerError; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/**
 * @Copyright (c) Microsoft Corporation.  All rights reserved.
 *
 * @file SPFileHandlerError.ts
 */

var SPFileHandlerError = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(SPFileHandlerError, _super);
    function SPFileHandlerError(message, errorCode) {
        var _this = _super.call(this, message) || this;
        // Manually set the prototype, as we can no longer extend built-in classes like Error, Array, Map, etc
        // tslint:disable-next-line:max-line-length
        // [https://github.com/Microsoft/TypeScript-wiki/blob/master/Breaking-Changes.md#extending-built-ins-like-error-array-and-map-may-no-longer-work](https://github.com/Microsoft/TypeScript-wiki/blob/master/Breaking-Changes.md#extending-built-ins-like-error-array-and-map-may-no-longer-work)
        //
        // Note: the prototype must also be set on any classes which extend this one
        _this.__proto__ = SPFileHandlerError.prototype; // tslint:disable-line:no-any
        _this.errorCode = errorCode;
        return _this;
    }
    return SPFileHandlerError;
}(Error));



/***/ }),

/***/ "hiL/":
/*!*********************************************!*\
  !*** external "@ms/sp-component-utilities" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_hiL___;

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
/*! exports provided: PropertyPaneAudienceToggle, FilePickerLoader, calculateExifOrientation, convertDataUriToArrayBuffer, ensureOrientation, rotatedExifOrientation, SPFileHandler, SPFileHandlerError, LocalFilePreview, DocLibraryContext, LazyDialog, DeferredDialog, LazyDialogFooter, DeferredDialogFooter, LazyDialogContent, DeferredDialogContent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _propertyPaneFields_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./propertyPaneFields/index */ "UGg9");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PropertyPaneAudienceToggle", function() { return _propertyPaneFields_index__WEBPACK_IMPORTED_MODULE_0__["PropertyPaneAudienceToggle"]; });

/* harmony import */ var _filePickerLoader_FilePickerLoader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./filePickerLoader/FilePickerLoader */ "XL+4");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FilePickerLoader", function() { return _filePickerLoader_FilePickerLoader__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _spFileHandler_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./spFileHandler/index */ "plNn");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "calculateExifOrientation", function() { return _spFileHandler_index__WEBPACK_IMPORTED_MODULE_2__["calculateExifOrientation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "convertDataUriToArrayBuffer", function() { return _spFileHandler_index__WEBPACK_IMPORTED_MODULE_2__["convertDataUriToArrayBuffer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ensureOrientation", function() { return _spFileHandler_index__WEBPACK_IMPORTED_MODULE_2__["ensureOrientation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "rotatedExifOrientation", function() { return _spFileHandler_index__WEBPACK_IMPORTED_MODULE_2__["rotatedExifOrientation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SPFileHandler", function() { return _spFileHandler_index__WEBPACK_IMPORTED_MODULE_2__["SPFileHandler"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SPFileHandlerError", function() { return _spFileHandler_index__WEBPACK_IMPORTED_MODULE_2__["SPFileHandlerError"]; });

/* harmony import */ var _localFilePreview_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./localFilePreview/index */ "DRLi");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LocalFilePreview", function() { return _localFilePreview_index__WEBPACK_IMPORTED_MODULE_3__["LocalFilePreview"]; });

/* harmony import */ var _docLibraryContext_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./docLibraryContext/index */ "pxIN");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DocLibraryContext", function() { return _docLibraryContext_index__WEBPACK_IMPORTED_MODULE_4__["DocLibraryContext"]; });

/* harmony import */ var _components_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/index */ "5vP7");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LazyDialog", function() { return _components_index__WEBPACK_IMPORTED_MODULE_5__["LazyDialog"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DeferredDialog", function() { return _components_index__WEBPACK_IMPORTED_MODULE_5__["DeferredDialog"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LazyDialogFooter", function() { return _components_index__WEBPACK_IMPORTED_MODULE_5__["LazyDialogFooter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DeferredDialogFooter", function() { return _components_index__WEBPACK_IMPORTED_MODULE_5__["DeferredDialogFooter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LazyDialogContent", function() { return _components_index__WEBPACK_IMPORTED_MODULE_5__["LazyDialogContent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DeferredDialogContent", function() { return _components_index__WEBPACK_IMPORTED_MODULE_5__["DeferredDialogContent"]; });









/***/ }),

/***/ "nxBm":
/*!***************************************************************!*\
  !*** ./lib/components/DeferredDialog/DeferredDialogFooter.js ***!
  \***************************************************************/
/*! exports provided: LazyDialogFooter, DeferredDialogFooter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LazyDialogFooter", function() { return LazyDialogFooter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeferredDialogFooter", function() { return DeferredDialogFooter; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/**
 * @copyright Microsoft Corporation. All rights reserved.
 */


// tslint:disable-next-line: variable-name
var LazyDialogFooter = react__WEBPACK_IMPORTED_MODULE_1__["lazy"](function () {
    return __webpack_require__.e(/*! import() | webpack-shared-editmode-fabric-dialog-footer */ "webpack-shared-editmode-fabric-dialog-footer").then(__webpack_require__.bind(null, /*! office-ui-fabric-react/lib/components/Dialog/DialogFooter */ "5xuA")).then(function (_a) {
        var DialogFooter = _a.DialogFooter;
        return { default: DialogFooter };
    });
});
function DeferredDialogFooter(_a) {
    var _b = _a.fallback, fallback = _b === void 0 ? react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null) : _b, restProps = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(_a, ["fallback"]);
    return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Suspense"], { fallback: fallback },
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](LazyDialogFooter, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, restProps))));
}


/***/ }),

/***/ "plNn":
/*!************************************!*\
  !*** ./lib/spFileHandler/index.js ***!
  \************************************/
/*! exports provided: calculateExifOrientation, convertDataUriToArrayBuffer, ensureOrientation, rotatedExifOrientation, SPFileHandler, SPFileHandlerError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ensureOrientation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ensureOrientation */ "EszB");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "calculateExifOrientation", function() { return _ensureOrientation__WEBPACK_IMPORTED_MODULE_0__["calculateExifOrientation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "convertDataUriToArrayBuffer", function() { return _ensureOrientation__WEBPACK_IMPORTED_MODULE_0__["convertDataUriToArrayBuffer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ensureOrientation", function() { return _ensureOrientation__WEBPACK_IMPORTED_MODULE_0__["ensureOrientation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "rotatedExifOrientation", function() { return _ensureOrientation__WEBPACK_IMPORTED_MODULE_0__["rotatedExifOrientation"]; });

/* harmony import */ var _SPFileHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SPFileHandler */ "7Uem");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SPFileHandler", function() { return _SPFileHandler__WEBPACK_IMPORTED_MODULE_1__["SPFileHandler"]; });

/* harmony import */ var _SPFileHandlerError__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SPFileHandlerError */ "g3qw");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SPFileHandlerError", function() { return _SPFileHandlerError__WEBPACK_IMPORTED_MODULE_2__["SPFileHandlerError"]; });

// @copyright Microsoft Corporation. All rights reserved.





/***/ }),

/***/ "pxIN":
/*!****************************************!*\
  !*** ./lib/docLibraryContext/index.js ***!
  \****************************************/
/*! exports provided: DocLibraryContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DocLibraryContext__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DocLibraryContext */ "VB/2");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DocLibraryContext", function() { return _DocLibraryContext__WEBPACK_IMPORTED_MODULE_0__["default"]; });




/***/ }),

/***/ "sC07":
/*!**************************************************!*\
  !*** ./lib/spFileHandler/SPFileHandler.types.js ***!
  \**************************************************/
/*! exports provided: ODATA_ERROR_KEY */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ODATA_ERROR_KEY", function() { return ODATA_ERROR_KEY; });
// @copyright Microsoft Corporation. All rights reserved.
var ODATA_ERROR_KEY = 'odata.error';


/***/ }),

/***/ "ut3N":
/*!********************************************!*\
  !*** external "@microsoft/sp-diagnostics" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_ut3N__;

/***/ }),

/***/ "vNFS":
/*!**************************************************************************!*\
  !*** ./lib/propertyPaneFields/PropertyPaneAudienceToggle.module.scss.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* tslint:disable */
__webpack_require__(/*! ./PropertyPaneAudienceToggle.module.css */ "9Nun");
var styles = {
    container: 'a_a_7c0c6d12'
};
/* harmony default export */ __webpack_exports__["default"] = (styles);
/* tslint:enable */ 


/***/ }),

/***/ "vS7n":
/*!**************************************************!*\
  !*** ./lib/localFilePreview/LocalFilePreview.js ***!
  \**************************************************/
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
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @microsoft/sp-diagnostics */ "ut3N");
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ms/sp-component-utilities */ "hiL/");
/* harmony import */ var _ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ms/sp-telemetry */ "2q6Q");
/* harmony import */ var _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _spFileHandler_SPFileHandler__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../spFileHandler/SPFileHandler */ "7Uem");
/* harmony import */ var _spFileHandler_ensureOrientation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../spFileHandler/ensureOrientation */ "EszB");
/* harmony import */ var _LocalFilePreview_module_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./LocalFilePreview.module.scss */ "f1EN");
/* harmony import */ var _LocalFilePreview_resx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./LocalFilePreview.resx */ "0C7E");
var _LocalFilePreview_resx__WEBPACK_IMPORTED_MODULE_9___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./LocalFilePreview.resx */ "0C7E", 1);
/**
 * @Copyright (c) Microsoft Corporation.  All rights reserved.
 *
 * @file LocalFilePreview.tsx
 */










var LocalFilePreview = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(LocalFilePreview, _super);
    function LocalFilePreview(props) {
        var _this = _super.call(this, props) || this;
        _this._isImageFlipped = false;
        _this._handleImageLoad = function (ev) {
            var image = ev.target;
            Object(_spFileHandler_ensureOrientation__WEBPACK_IMPORTED_MODULE_7__["ensureOrientation"])(image, function () {
                _this._isImageFlipped = true;
            });
        };
        /**
         * Defines what is supposed to happen before the upload start, and set the callback
         * when upload process is finished
         */
        _this._startUpload = function (file) {
            var imageUploadMonitor = new _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_5__["_QosMonitor"](_this.props.QosTag);
            try {
                var overriddenFileName = '';
                var prefix = Math.floor(Math.random() * 100000).toString();
                var isFileExternalImage = 'src' in file;
                if (file instanceof File && _spFileHandler_SPFileHandler__WEBPACK_IMPORTED_MODULE_6__["SPFileHandler"].validateFileType(file, _ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_4__["spConstants"].imageExtensions)) {
                    // Validate the file type and use file.name as fileName
                    overriddenFileName = prefix + "-" + _spFileHandler_SPFileHandler__WEBPACK_IMPORTED_MODULE_6__["SPFileHandler"].replaceSpecialCharacters(file.name);
                }
                else if (file instanceof Blob &&
                    _this._spFileHandler.validateMimeType(file, _ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_4__["spConstants"].imageExtensions)) {
                    // Validate the mime type and use file.type and create a new filename
                    overriddenFileName = prefix + "." + file.type.split('/').pop();
                }
                else if (isFileExternalImage &&
                    _spFileHandler_SPFileHandler__WEBPACK_IMPORTED_MODULE_6__["SPFileHandler"].validateFileType(file.src, _ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_4__["spConstants"].imageExtensions)) {
                    file = file;
                    overriddenFileName = prefix + "-" + _spFileHandler_SPFileHandler__WEBPACK_IMPORTED_MODULE_6__["SPFileHandler"].replaceSpecialCharacters(file.name);
                }
                else {
                    _this._onUploadError(new Error(_LocalFilePreview_resx__WEBPACK_IMPORTED_MODULE_9__["FileTypeError"]));
                    imageUploadMonitor.writeExpectedFailure('InvalidFileType');
                    return;
                }
                window.addEventListener('beforeunload', _this._promptUploadingWarning);
                var uploadPromise = file instanceof File || file instanceof Blob
                    ? _this._spFileHandler.uploadLocalFile(file, overriddenFileName)
                    : _this._spFileHandler.uploadExternalFile(file.src, overriddenFileName);
                uploadPromise
                    .then(function (response) {
                    _this._onUploadComplete(response, file instanceof File ? file.name : undefined);
                    imageUploadMonitor.writeSuccess();
                })
                    .catch(function (error) {
                    imageUploadMonitor.writeUnexpectedFailure('UploadPromise', error);
                    _this._onUploadError(error);
                });
            }
            catch (exception) {
                imageUploadMonitor.writeUnexpectedFailure('CatchAll', exception);
                _this._onUploadError(exception);
            }
        };
        /**
         *  Defines what is supposed to happen when the upload process is complete,
         *  including clearing the mask/monitor/error msg
         */
        _this._onUploadComplete = function (response, fileName) {
            window.removeEventListener('beforeunload', _this._promptUploadingWarning);
            if (_this._imagePreview && _this._imagePreview.naturalHeight && _this._imagePreview.naturalWidth) {
                var naturalWidth = _this._isImageFlipped
                    ? _this._imagePreview.naturalHeight
                    : _this._imagePreview.naturalWidth;
                var naturalHeight = _this._isImageFlipped
                    ? _this._imagePreview.naturalWidth
                    : _this._imagePreview.naturalHeight;
                _this.props.onUploadComplete(response, fileName, naturalWidth, naturalHeight);
            }
            else {
                _this.props.onUploadComplete(response, fileName);
            }
        };
        _this._onUploadError = function (error) {
            window.removeEventListener('beforeunload', _this._promptUploadingWarning);
            if (_this.props.onUploadError) {
                _this.props.onUploadError(error, _this.props.externalFile ? _this.props.externalFile.src : undefined);
            }
        };
        _this._spFileHandler = new _spFileHandler_SPFileHandler__WEBPACK_IMPORTED_MODULE_6__["SPFileHandler"]({
            serviceScope: props.serviceScope,
            qosPrefix: props.QosTag
        });
        _this.state = {
            imageDataString: undefined
        };
        return _this;
    }
    LocalFilePreview.prototype.UNSAFE_componentWillMount = function () {
        if (this.props.externalFile) {
            this._startUpload(this.props.externalFile);
        }
        else if (this.props.localFile) {
            this._startUpload(this.props.localFile);
        }
    };
    LocalFilePreview.prototype.componentDidMount = function () {
        this._setStateForLocalFile();
    };
    LocalFilePreview.prototype.componentWillUnmount = function () {
        if (this._rejectPromise) {
            this._rejectPromise();
            this._rejectPromise = undefined;
        }
    };
    LocalFilePreview.prototype.render = function () {
        var imagePreview = (
        /** Set visibility of img to hidden if orientation needs detection */
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("img", { className: _LocalFilePreview_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].imagePreview, alt: _LocalFilePreview_resx__WEBPACK_IMPORTED_MODULE_9__["PreviewAltTextWhileUploading"], src: this.state.imageDataString, ref: this._resolveRef('_imagePreview'), onLoad: this._handleImageLoad }));
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: _LocalFilePreview_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].localFilePreview, ref: this._resolveRef('_root'), "data-automation-id": 'localFilePreview' },
            this.state.imageDataString && imagePreview,
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: _LocalFilePreview_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].uploadingIcon },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_2__["Icon"], { iconName: 'Sync', className: _LocalFilePreview_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].uploadingSpinner }),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", { className: _LocalFilePreview_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].uploadingMessage, "aria-live": 'assertive', "aria-atomic": true }, this.props.uploadingMessage))));
    };
    LocalFilePreview.prototype._setStateForLocalFile = function () {
        var _this = this;
        if (this.props.localFile) {
            // We need to reject the promise when the component gets unmounted otherwise
            // we get a setState warning in the debugger
            var readingPromise = new Promise(function (resolve, reject) {
                _this._rejectPromise = reject;
                resolve(_this._spFileHandler.readFile(_this.props.localFile));
            });
            readingPromise
                .then(function (src) {
                _this.setState({
                    imageDataString: src
                });
            })
                .catch(function (error) {
                _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_3__["_TraceLogger"].logError(_microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_3__["_LogSource"].create('LocalFilePreview'), error, 'ReadLocalFile');
            });
        }
        else if (this.props.externalFile) {
            this.setState({
                imageDataString: this.props.externalFile.src
            });
        }
    };
    /* We need this 'any' because Event.returnValue is defined */
    /* as a boolean in TypeScript, but for the beforeUnload    */
    /* event this is defined as a string, which we are using   */
    /* here. We won't change TypeScript, so we do this.        */
    // tslint:disable-next-line:no-any
    LocalFilePreview.prototype._promptUploadingWarning = function (e) {
        var confirmationMessage = _LocalFilePreview_resx__WEBPACK_IMPORTED_MODULE_9__["UploadWarningMessage"];
        e.returnValue = confirmationMessage; // Gecko, Trident, Chrome 34+
        return confirmationMessage; // Gecko, WebKit, Chrome <34
    };
    return LocalFilePreview;
}(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_2__["BaseComponent"]));
/* harmony default export */ __webpack_exports__["default"] = (LocalFilePreview);


/***/ }),

/***/ "vlQI":
/*!*************************************!*\
  !*** external "@microsoft/sp-http" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_vlQI__;

/***/ }),

/***/ "y88i":
/*!********************************************!*\
  !*** external "@ms/odsp-utilities-bundle" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_y88i__;

/***/ }),

/***/ "ycAZ":
/*!********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/css-loader@3.2.1_webpack@4.44.2/node_modules/css-loader/dist/cjs.js!/agent/_work/1/s/common/temp/node_modules/.pnpm/postcss-loader@3.0.0/node_modules/postcss-loader/src??postcss!./lib/localFilePreview/LocalFilePreview.module.css ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../common/temp/node_modules/.pnpm/css-loader@3.2.1_webpack@4.44.2/node_modules/css-loader/dist/runtime/api.js */ "5ADk")(false);
// Module
exports.push([module.i, ".b_b_7c0c6d12{margin:0 auto;z-index:0;width:100%;height:100%;background-size:cover;background-position:50%;background-repeat:no-repeat}.b_b_7c0c6d12:before{content:\"\";display:block;height:100%;position:absolute;bottom:0;left:0;right:0;top:0;width:100%;background-color:\"[theme:blackTranslucent40, default: rgba(0,0,0,.4)]\"}.b_b_7c0c6d12 .c_b_7c0c6d12{position:absolute;top:50%;transform:translate(-50%,-50%);padding:10px;text-align:center;color:#fff}[dir=ltr] .b_b_7c0c6d12 .c_b_7c0c6d12{left:50%}[dir=rtl] .b_b_7c0c6d12 .c_b_7c0c6d12{right:50%}.b_b_7c0c6d12 .c_b_7c0c6d12 .e_b_7c0c6d12{display:block;font-size:48px;margin:8px 0;animation:f_b_7c0c6d12 2s linear infinite}@keyframes f_b_7c0c6d12{0%{transform:rotate(0)}to{transform:rotate(1turn)}}.b_b_7c0c6d12 .g_b_7c0c6d12{position:relative;visibility:hidden;opacity:.5;max-width:100%;max-height:100%}.b_b_7c0c6d12 .h_b_7c0c6d12{font-size:21px;font-weight:100;font-weight:300;color:\"[theme:white, default: #ffffff]\"}.b_b_7c0c6d12 img{display:block;margin:0 auto;max-width:100%}.b_b_7c0c6d12 img:not([src]){display:none}", ""]);


/***/ })

/******/ })});;
//# sourceMappingURL=sp-webpart-shared-editmode_[locale].js.map