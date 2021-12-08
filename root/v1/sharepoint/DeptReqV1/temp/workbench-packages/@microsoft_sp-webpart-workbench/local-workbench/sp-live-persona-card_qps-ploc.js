define("7d834519-e86f-4d2b-ad52-b9b35dab66f1_0.1.0", ["tslib","@ms/sp-telemetry","@microsoft/sp-loader","@microsoft/office-ui-fabric-react-bundle","@microsoft/sp-core-library","react","@microsoft/load-themed-styles","@microsoft/sp-diagnostics"], function(__WEBPACK_EXTERNAL_MODULE__17wl__, __WEBPACK_EXTERNAL_MODULE__2q6Q__, __WEBPACK_EXTERNAL_MODULE_I6O9__, __WEBPACK_EXTERNAL_MODULE_KL1q__, __WEBPACK_EXTERNAL_MODULE_UWqr__, __WEBPACK_EXTERNAL_MODULE_cDcd__, __WEBPACK_EXTERNAL_MODULE_jOlS__, __WEBPACK_EXTERNAL_MODULE_ut3N__) { return /******/ (function(modules) { // webpackBootstrap
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
/******/ 		var component_0 = { // @ms/odsp-core-bundle
/******/ 			i: "2e09fb9b-13bb-48f2-859f-97d6fff71176",
/******/ 			v: "1.1.13",
/******/ 			m: "K9kD"
/******/ 		};
/******/ 		var component_1 = { // @ms/uifabric-styling-bundle
/******/ 			i: "17ce0976-e69a-4355-be84-89b69a74717d",
/******/ 			v: "0.1.0",
/******/ 			m: "fglE"
/******/ 		};
/******/ 		var component_2 = { // @microsoft/sp-page-context
/******/ 			i: "1c4541f7-5c31-41aa-9fa8-fbc9dc14c0a8",
/******/ 			v: "1.12.1",
/******/ 			m: "X+PM"
/******/ 		};
/******/ 		var component_3 = { // @ms/odsp-utilities-bundle
/******/ 			i: "cc2cc925-b5be-41bb-880a-f0f8030c6aff",
/******/ 			v: "5.3.140",
/******/ 			m: "y88i"
/******/ 		};
/******/
/******/ 		return {"vendors~live-persona-card-loader": [component_0, component_1],"live-persona-card-loader": [component_2, component_3],"vendors~data-sync-nucleus": [component_0, component_1]}[chunkId] || [];
/******/ 	}
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"sp-live-persona-card": 0
/******/ 	};
/******/
/******/
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "chunk." + ({"vendors~live-persona-card-loader":"vendors~live-persona-card-loader","live-persona-card-loader":"live-persona-card-loader","vendors~data-sync-nucleus":"vendors~data-sync-nucleus"}[chunkId]||chunkId) + "_" + (["qps-ploc","none"])[{"0":1,"live-persona-card-loader":0,"vendors~live-persona-card-loader":1,"vendors~data-sync-nucleus":1}[chunkId]] + ".js"
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
/******/ 	var jsonpArray = window["webpackJsonp_7d834519_e86f_4d2b_ad52_b9b35dab66f1_0_1_0"] = window["webpackJsonp_7d834519_e86f_4d2b_ad52_b9b35dab66f1_0_1_0"] || [];
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
/******/ 	  var regex = (typeof spScriptNamePattern !== 'undefined') ? spScriptNamePattern : /sp-live-persona-card_qps-ploc\.js/i;
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

/***/ "BnYD":
/*!***************************!*\
  !*** ./lib/EventUtils.js ***!
  \***************************/
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

/***/ "HGaC":
/*!**************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/css-loader@3.2.1_webpack@4.44.2/node_modules/css-loader/dist/cjs.js!/agent/_work/1/s/common/temp/node_modules/.pnpm/postcss-loader@3.0.0/node_modules/postcss-loader/src??postcss!./lib/LivePersonaCard.module.css ***!
  \**************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../common/temp/node_modules/.pnpm/css-loader@3.2.1_webpack@4.44.2/node_modules/css-loader/dist/runtime/api.js */ "5ADk")(false);
// Module
exports.push([module.i, ".a_a_434b99a9{cursor:pointer}.a_a_434b99a9:hover{outline:0}", ""]);


/***/ }),

/***/ "I6O9":
/*!***************************************!*\
  !*** external "@microsoft/sp-loader" ***!
  \***************************************/
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

/***/ "PjTD":
/*!****************************************!*\
  !*** ./lib/LivePersonaCard.module.css ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../common/temp/node_modules/.pnpm/css-loader@3.2.1_webpack@4.44.2/node_modules/css-loader/dist/cjs.js!../../../common/temp/node_modules/.pnpm/postcss-loader@3.0.0/node_modules/postcss-loader/src??postcss!./LivePersonaCard.module.css */ "HGaC");
var loader = __webpack_require__(/*! @microsoft/load-themed-styles */ "jOlS");

if(typeof content === "string") content = [[module.i, content]];

// add the styles to the DOM
for (var i = 0; i < content.length; i++) loader.loadStyles(content[i][1], true);

if(content.locals) module.exports = content.locals;

/***/ }),

/***/ "U9bt":
/*!********************************!*\
  !*** ./lib/LivePersonaCard.js ***!
  \********************************/
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
/* harmony import */ var _FlightsAndKillSwitches__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./FlightsAndKillSwitches */ "eURu");
/* harmony import */ var _EventUtils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./EventUtils */ "BnYD");
/* harmony import */ var _LivePersonaCard_module_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./LivePersonaCard.module.scss */ "vWlW");
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
        return Promise.all(/*! import() | live-persona-card-loader */[__webpack_require__.e("vendors~live-persona-card-loader"), __webpack_require__.e("live-persona-card-loader")]).then(__webpack_require__.bind(null, /*! ./LivePersonaCardLoader */ "Mdbv")).then(function (loaderModule) { return loaderModule.default; });
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

/***/ "UWqr":
/*!*********************************************!*\
  !*** external "@microsoft/sp-core-library" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_UWqr__;

/***/ }),

/***/ "cDcd":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_cDcd__;

/***/ }),

/***/ "eURu":
/*!***************************************!*\
  !*** ./lib/FlightsAndKillSwitches.js ***!
  \***************************************/
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
/*! exports provided: bootstrapLPC, LivePersonaCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _LivePersonaCard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LivePersonaCard */ "U9bt");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bootstrapLPC", function() { return _LivePersonaCard__WEBPACK_IMPORTED_MODULE_0__["bootstrapLPC"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LivePersonaCard", function() { return _LivePersonaCard__WEBPACK_IMPORTED_MODULE_0__["default"]; });




/***/ }),

/***/ "ut3N":
/*!********************************************!*\
  !*** external "@microsoft/sp-diagnostics" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_ut3N__;

/***/ }),

/***/ "vWlW":
/*!********************************************!*\
  !*** ./lib/LivePersonaCard.module.scss.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* tslint:disable */
__webpack_require__(/*! ./LivePersonaCard.module.css */ "PjTD");
var styles = {
    livePersonaCardWrapper: 'a_a_434b99a9'
};
/* harmony default export */ __webpack_exports__["default"] = (styles);
/* tslint:enable */ 


/***/ })

/******/ })});;
//# sourceMappingURL=sp-live-persona-card_[locale].js.map