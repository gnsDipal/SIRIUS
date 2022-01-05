define("764afdc3-183e-47f5-8d20-a62aff2b0881_0.1.0", ["tslib","@ms/sp-telemetry","@ms/sp-suite-nav","@microsoft/sp-application-base","@microsoft/sp-loader","@ms/odsp-core-bundle","@microsoft/office-ui-fabric-react-bundle","@microsoft/sp-lodash-subset","@microsoft/sp-core-library","@microsoft/sp-page-context","react","react-dom","@microsoft/load-themed-styles","@microsoft/sp-diagnostics","@ms/uifabric-variants-bundle","@ms/odsp-utilities-bundle","@ms/sp-a11y"], function(__WEBPACK_EXTERNAL_MODULE__17wl__, __WEBPACK_EXTERNAL_MODULE__2q6Q__, __WEBPACK_EXTERNAL_MODULE__6iXJ__, __WEBPACK_EXTERNAL_MODULE_GPet__, __WEBPACK_EXTERNAL_MODULE_I6O9__, __WEBPACK_EXTERNAL_MODULE_K9kD__, __WEBPACK_EXTERNAL_MODULE_KL1q__, __WEBPACK_EXTERNAL_MODULE_Pk8u__, __WEBPACK_EXTERNAL_MODULE_UWqr__, __WEBPACK_EXTERNAL_MODULE_X_PM__, __WEBPACK_EXTERNAL_MODULE_cDcd__, __WEBPACK_EXTERNAL_MODULE_faye__, __WEBPACK_EXTERNAL_MODULE_jOlS__, __WEBPACK_EXTERNAL_MODULE_ut3N__, __WEBPACK_EXTERNAL_MODULE_wrw2__, __WEBPACK_EXTERNAL_MODULE_y88i__, __WEBPACK_EXTERNAL_MODULE_ytfe__) { return /******/ (function(modules) { // webpackBootstrap
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
/******/ 		var component_0 = { // @ms/uifabric-styling-bundle
/******/ 			i: "17ce0976-e69a-4355-be84-89b69a74717d",
/******/ 			v: "0.1.0",
/******/ 			m: "fglE"
/******/ 		};
/******/
/******/ 		return {"vendors~spcx-sitefooter": [component_0],"vendors~data-sync-nucleus": [component_0]}[chunkId] || [];
/******/ 	}
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"sp-pages-core": 0
/******/ 	};
/******/
/******/
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "chunk." + ({"spcx-mobileupsellview":"spcx-mobileupsellview","vendors~shared-react-shyconductor":"vendors~shared-react-shyconductor","vendors~spcx-sitefooter":"vendors~spcx-sitefooter","vendors~data-sync-nucleus":"vendors~data-sync-nucleus"}[chunkId]||chunkId) + "_" + (["qps-ploca","none"])[{"0":1,"spcx-mobileupsellview":0,"vendors~shared-react-shyconductor":1,"vendors~spcx-sitefooter":1,"vendors~data-sync-nucleus":1}[chunkId]] + ".js"
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
/******/ 	var jsonpArray = window["webpackJsonp_764afdc3_183e_47f5_8d20_a62aff2b0881_0_1_0"] = window["webpackJsonp_764afdc3_183e_47f5_8d20_a62aff2b0881_0_1_0"] || [];
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
/******/ 	  var regex = (typeof spScriptNamePattern !== 'undefined') ? spScriptNamePattern : /sp-pages-core_qps-ploca\.js/i;
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

/***/ "+FEy":
/*!*******************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/prop-types@15.7.2/node_modules/prop-types/checkPropTypes.js ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var printWarning = function() {};

if (true) {
  var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "Bqrk");
  var loggedTypeFailures = {};
  var has = Function.call.bind(Object.prototype.hasOwnProperty);

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function() {
  if (true) {
    loggedTypeFailures = {};
  }
}

module.exports = checkPropTypes;


/***/ }),

/***/ "+Uvl":
/*!**********************************************************!*\
  !*** ./lib/core/components/chrome/Chrome.module.scss.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* tslint:disable */
__webpack_require__(/*! ./Chrome.module.css */ "ZQe2");
var styles = {
    pageLayoutRoot: 'k_b_beed2cf1',
    belowHeader: 'l_b_beed2cf1',
    wrapperMaxWidth: 'm_b_beed2cf1',
    spNavEdit: 'n_b_beed2cf1',
    headerCompactLayout: 'o_b_beed2cf1',
    headerStandardLayout: 'p_b_beed2cf1',
    headerMobileLayout: 'q_b_beed2cf1',
    hubNavPlaceholder: 'r_b_beed2cf1',
    spAppBarParentMobile: 's_b_beed2cf1'
};
/* harmony default export */ __webpack_exports__["default"] = (styles);
/* tslint:enable */ 


/***/ }),

/***/ "+hfF":
/*!*******************************************************!*\
  !*** ./lib/core/components/router/LinkInterceptor.js ***!
  \*******************************************************/
/*! exports provided: DataInterceptionType, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataInterceptionType", function() { return DataInterceptionType; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @microsoft/office-ui-fabric-react-bundle */ "KL1q");
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @microsoft/sp-diagnostics */ "ut3N");
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ms_sp_component_utilities_lib_teams_TeamsLibLoader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ms/sp-component-utilities/lib/teams/TeamsLibLoader */ "iFY+");
/* harmony import */ var _components_webViewCommunicator_HostCommunicationProcessor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/webViewCommunicator/HostCommunicationProcessor */ "oWsq");
/* harmony import */ var _LinkTargetType__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./LinkTargetType */ "ceyN");
/* harmony import */ var _PageApplicationRouter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./PageApplicationRouter */ "0iU6");
/* harmony import */ var _utilities_Killswitches__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../utilities/Killswitches */ "XjSx");
/**
 * @copyright Microsoft Corporation. All rights reserved.
 */










// Dictionary of application Id's to labels. Used for telemetry.
var appIdToLabel = new Map([
    ['b6917cb1-93a0-4b97-a84d-7cf49975d4ec', 'SpPages'],
    ['1f019ae1-2de1-4f44-b723-00a6ec1d7445', 'SPHome']
]);
/**
 * Used to specify how click interception should be handled on anchor tags.
 *
 * @remarks
 * Example usage: `<a data-interception={DataInterceptionType.Propagate} ...>`
 *
 * @internal
 */
// tslint:disable-next-line:typedef variable-name
var DataInterceptionType = {
    /**
     * intercept click, but ensure onClick is run before in-place navigation occurs
     */
    Propagate: 'propagate',
    /**
     * disable click interception completely
     */
    Off: 'off',
    /**
     * intercept clicks, this is the default behavior if data-interception isn't provided
     */
    On: 'on'
};
var HOST_TIMEOUT = 500;
var SKIP_ATTRIBUTE = 'data-skip-host';
/**
 * This class is used to implement click interception on any anchor/button
 * on a given page and to pass those click actions back through a callback for handling.
 * There are also contracts for custom properties on anchor/button elements giving specific
 * interception instruction.
 * These include:
 * - data-interception=(on,propagate,off)
 * - data-sp-action=(<action>)
 *   This is used to specify an action to send to the host application (the logic for which is
 *   not implemented in this class)
 *
 * @internal
 */
var LinkInterceptor = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(LinkInterceptor, _super);
    function LinkInterceptor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LinkInterceptor.prototype.componentDidMount = function () {
        this._async = new _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_2__["Async"]();
        document.body.addEventListener('click', this._interceptClick, true);
    };
    LinkInterceptor.prototype.componentWillUnmount = function () {
        document.body.removeEventListener('click', this._interceptClick, true);
        this._async.dispose();
        this._hostCommunicatorRef && this._hostCommunicatorRef.dispose();
    };
    LinkInterceptor.prototype.render = function () {
        return this.props.children;
    };
    Object.defineProperty(LinkInterceptor.prototype, "_hostCommunicator", {
        get: function () {
            if (!this.props.messageConverter) {
                return undefined;
            }
            return (this._hostCommunicatorRef ||
                (this._hostCommunicatorRef = new _components_webViewCommunicator_HostCommunicationProcessor__WEBPACK_IMPORTED_MODULE_6__["default"](this.props.serviceScope, this.props.messageConverter)));
        },
        enumerable: true,
        configurable: true
    });
    LinkInterceptor.prototype._callCommunicatorWithFallback = function (communicatorPromise, element) {
        var _this = this;
        var isIntercepted = false;
        Promise.race([
            communicatorPromise.then(function (hostIntercepted) { return (isIntercepted = hostIntercepted); }),
            new Promise(function (resolve) { return _this._async.setTimeout(resolve, HOST_TIMEOUT); })
        ])
            .catch(function (error) {
            _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_4__["_TraceLogger"].logError(LinkInterceptor._logSource, error);
        })
            .then(function () {
            if (!isIntercepted) {
                element.setAttribute(SKIP_ATTRIBUTE, 'true');
                element.click();
            }
        })
            .catch(function (_) {
            /* no-op */
        });
    };
    LinkInterceptor.prototype._getNearestClickTarget = function (element) {
        while (element &&
            element.tagName !== 'BODY' &&
            element.tagName !== 'A' &&
            element.tagName !== 'BUTTON' &&
            String(element.getAttribute('role')).toLowerCase() !== 'button') {
            element = element.parentElement;
        }
        return element;
    };
    LinkInterceptor.prototype._hostHandleAction = function (element, action) {
        if (this._hostCommunicator) {
            this._callCommunicatorWithFallback(this._hostCommunicator.sendAction(action), element);
        }
        else {
            _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_4__["_TraceLogger"].logError(LinkInterceptor._logSource, new Error('hostCommunicationProcessor not provided'));
        }
    };
    LinkInterceptor.prototype._hostHandleRoute = function (element, canonicalHref, actionObj) {
        if (this._hostCommunicator) {
            this._callCommunicatorWithFallback(this._hostCommunicator.sendNavigate(canonicalHref, actionObj), element);
        }
        else {
            _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_4__["_TraceLogger"].logError(LinkInterceptor._logSource, new Error('hostCommunicationProcessor not provided'));
        }
    };
    LinkInterceptor.prototype._interceptAnchorClick = function (element, event) {
        var _this = this;
        if (event.ctrlKey || event.metaKey) {
            return true;
        }
        var interceptionOption;
        if (_utilities_Killswitches__WEBPACK_IMPORTED_MODULE_9__["default"].isContextMenuDataPropagateKSActive()) {
            interceptionOption =
                element.getAttribute('data-interception') ||
                    (element.classList.length && element.classList.contains('ms-Nav-link')
                        ? DataInterceptionType.Propagate
                        : '');
        }
        else {
            interceptionOption =
                element.getAttribute('data-interception') ||
                    (element.classList.length &&
                        (element.classList.contains('ms-Nav-link') || element.classList.contains('ms-ContextualMenu-link'))
                        ? DataInterceptionType.Propagate
                        : '');
        }
        if (!interceptionOption) {
            interceptionOption = this._findParentInterceptionOption(element);
        }
        var interceptionEnforced = false;
        if (_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_3__["_SPFlight"].isEnabled(1374 /* SPTeamsLinkInterception */) && _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_3__["_BrowserUtilities"].isTeamsHosted()) {
            // if in Teams, we want to intercept all links.
            interceptionEnforced = true;
        }
        var hrefAttributeText = element.getAttribute('href') || '';
        var target = element.getAttribute('target') || _LinkTargetType__WEBPACK_IMPORTED_MODULE_7__["default"].self;
        var skipHost = element.hasAttribute(SKIP_ATTRIBUTE);
        var action = element.getAttribute('data-sp-action');
        var siteType = element.getAttribute('data-sp-sitetype-hint');
        var canonicalHref = new URL(element.href || window.location.href);
        if (appIdToLabel.has(this.props.applicationId)) {
            var navigationComponent_1 = element.getAttribute('data-navigationcomponent');
            if (navigationComponent_1) {
                setTimeout(function () {
                    return _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_4__["_EngagementLogger"].logEvent(appIdToLabel.get(_this.props.applicationId) + "." + navigationComponent_1 + ".NavigationComponent.Click");
                }, 0);
            }
        }
        if (hrefAttributeText === '' ||
            hrefAttributeText[0] === '#' ||
            this._onlyFragmentChanged(element.href) ||
            (!interceptionEnforced &&
                (interceptionOption === DataInterceptionType.Off ||
                    (this._honorTargetBlank(event) && target !== _LinkTargetType__WEBPACK_IMPORTED_MODULE_7__["default"].self) ||
                    canonicalHref.href === window.location.href))) {
            return true;
        }
        if (_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_3__["_SPFlight"].isEnabled(1374 /* SPTeamsLinkInterception */) && _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_3__["_BrowserUtilities"].isTeamsHosted()) {
            // if the anchor tag has 'download' attribute, then just hand over the click event to teams
            // and let it handle the download event.
            // Cross origin links should be intercepted and opened via browser.
            // This is because electron navigates to them instead of downloading, this creates a jarring experience.
            // for e.g., in such cases teams would navigate to that page but back button won't work.
            if (element.hasAttribute('download')) {
                var isHttp = canonicalHref.protocol === 'https:' || canonicalHref.protocol === 'http:';
                if (!isHttp || (isHttp && !this._isDifferentOrigin(canonicalHref))) {
                    return true;
                }
            }
            event.preventDefault();
            if (interceptionOption !== DataInterceptionType.Propagate) {
                event.stopPropagation();
            }
            var state_1 = siteType ? { siteType: siteType } : undefined;
            Object(_PageApplicationRouter__WEBPACK_IMPORTED_MODULE_8__["asyncHistory"])()
                .then(function (history) {
                return _ms_sp_component_utilities_lib_teams_TeamsLibLoader__WEBPACK_IMPORTED_MODULE_5__["TeamsLibLoader"].load()
                    .then(function (spTeamsWrapper) {
                    spTeamsWrapper.handleLinkNavigation(canonicalHref, _this.props.serviceScope, history, state_1);
                })
                    .catch(function (error) {
                    _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_4__["_TraceLogger"].logError(LinkInterceptor._logSource, error);
                    window.open(canonicalHref.href);
                });
            })
                .catch(function (error) {
                _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_4__["_TraceLogger"].logError(LinkInterceptor._logSource, error);
                window.open(canonicalHref.href);
            });
            return true;
        }
        if (this._isDifferentOrigin(canonicalHref)) {
            return true;
        }
        event.preventDefault();
        if (interceptionOption !== DataInterceptionType.Propagate) {
            event.stopPropagation();
        }
        if (!this.props.shouldHostCommunicate || !_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_3__["_BrowserUtilities"].isWebViewHosted() || skipHost) {
            skipHost && element.removeAttribute(SKIP_ATTRIBUTE);
            return this._propagateLinkEvent(canonicalHref, siteType ? { siteType: siteType } : undefined);
        }
        else {
            var actionObj = undefined;
            try {
                action && (actionObj = JSON.parse(action));
            }
            catch (error) {
                /* action was malformed, ignore it */
            }
            this._hostHandleRoute(element, canonicalHref.href, actionObj);
            return false;
        }
    };
    LinkInterceptor.prototype._interceptButtonClick = function (element, event) {
        var action = element.getAttribute('data-sp-action');
        if (!action) {
            return true;
        }
        var skipHost = element.hasAttribute(SKIP_ATTRIBUTE);
        if (!_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_3__["_BrowserUtilities"].isWebViewHosted() || !this.props.shouldHostCommunicate || skipHost) {
            skipHost && element.removeAttribute(SKIP_ATTRIBUTE);
            return true;
        }
        else {
            try {
                var actionObj = JSON.parse(action);
                this._hostHandleAction(element, actionObj);
                event.preventDefault();
                event.stopPropagation();
                return false;
            }
            catch (error) {
                _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_4__["_TraceLogger"].logError(LinkInterceptor._logSource, error);
                return true;
            }
        }
    };
    LinkInterceptor.prototype._isDifferentOrigin = function (newURL) {
        return newURL.origin !== window.location.origin;
    };
    LinkInterceptor.prototype._interceptClick = function (event) {
        if (!this.props.shouldIntercept || !this.props.shouldIntercept(event)) {
            return true;
        }
        var element = this._getNearestClickTarget(event.target);
        if (element && element.tagName === 'A') {
            return this._interceptAnchorClick(element, event);
        }
        else if (element &&
            (element.tagName === 'BUTTON' || String(element.getAttribute('role')).toLowerCase() === 'button')) {
            return this._interceptButtonClick(element, event);
        }
        return true;
    };
    LinkInterceptor.prototype._propagateLinkEvent = function (canonicalHref, state) {
        this.props.onIntercept(0 /* LINK */, canonicalHref.href.replace(canonicalHref.origin, ''), state);
        return true;
    };
    LinkInterceptor.prototype._onlyFragmentChanged = function (href) {
        var currentURL = new URL(window.location.href.split('#')[0]);
        var hrefURL = new URL(href.split('#')[0]);
        return (currentURL.origin === hrefURL.origin &&
            currentURL.pathname === hrefURL.pathname &&
            currentURL.search === hrefURL.search);
    };
    LinkInterceptor.prototype._honorTargetBlank = function (event) {
        return ((this.props.applicationId !== 'b6917cb1-93a0-4b97-a84d-7cf49975d4ec' &&
            this.props.applicationId !== '7497f5b1-726b-46d8-9798-6be6bbef75c5') ||
            this._inSearchBox(event));
    };
    LinkInterceptor.prototype._inSearchBox = function (event) {
        var element = event.target;
        while ((element = element.parentElement)) {
            if (element.id.indexOf('ms-searchux-popup') === 0) {
                return true;
            }
        }
        return false;
    };
    LinkInterceptor.prototype._findParentInterceptionOption = function (element) {
        var interceptionOption = '';
        while (element && (element = element.parentElement) && element.tagName !== 'body') {
            if ((interceptionOption = element.getAttribute('data-interception'))) {
                return interceptionOption;
            }
        }
        return '';
    };
    LinkInterceptor._logSource = _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_4__["_LogSource"].create('LinkInterceptor');
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_2__["autobind"]
    ], LinkInterceptor.prototype, "_interceptClick", null);
    return LinkInterceptor;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));
/* harmony default export */ __webpack_exports__["default"] = (LinkInterceptor);


/***/ }),

/***/ "+sSs":
/*!************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/redux@3.6.0/node_modules/redux/es/applyMiddleware.js ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return applyMiddleware; });
/* harmony import */ var _compose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./compose */ "zLLz");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };



/**
 * Creates a store enhancer that applies middleware to the dispatch method
 * of the Redux store. This is handy for a variety of tasks, such as expressing
 * asynchronous actions in a concise manner, or logging every action payload.
 *
 * See `redux-thunk` package as an example of the Redux middleware.
 *
 * Because middleware is potentially asynchronous, this should be the first
 * store enhancer in the composition chain.
 *
 * Note that each middleware will be given the `dispatch` and `getState` functions
 * as named arguments.
 *
 * @param {...Function} middlewares The middleware chain to be applied.
 * @returns {Function} A store enhancer applying the middleware.
 */
function applyMiddleware() {
  for (var _len = arguments.length, middlewares = Array(_len), _key = 0; _key < _len; _key++) {
    middlewares[_key] = arguments[_key];
  }

  return function (createStore) {
    return function (reducer, preloadedState, enhancer) {
      var store = createStore(reducer, preloadedState, enhancer);
      var _dispatch = store.dispatch;
      var chain = [];

      var middlewareAPI = {
        getState: store.getState,
        dispatch: function dispatch(action) {
          return _dispatch(action);
        }
      };
      chain = middlewares.map(function (middleware) {
        return middleware(middlewareAPI);
      });
      _dispatch = _compose__WEBPACK_IMPORTED_MODULE_0__["default"].apply(undefined, chain)(store.dispatch);

      return _extends({}, store, {
        dispatch: _dispatch
      });
    };
  };
}

/***/ }),

/***/ "/Ry9":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/css-loader@3.2.1_webpack@4.44.2/node_modules/css-loader/dist/cjs.js!/agent/_work/1/s/common/temp/node_modules/.pnpm/postcss-loader@3.0.0/node_modules/postcss-loader/src??postcss!./lib/core/components/chrome/PageLayoutScrollRegion/PageLayoutScrollRegion.module.css ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../common/temp/node_modules/.pnpm/css-loader@3.2.1_webpack@4.44.2/node_modules/css-loader/dist/runtime/api.js */ "5ADk")(false);
// Module
exports.push([module.i, ".a_a_beed2cf1{position:relative;width:100%;height:100%;overflow-y:auto;overflow-x:hidden;-webkit-overflow-scrolling:touch;outline-width:0}.a_a_beed2cf1.b_a_beed2cf1{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}@media print{.a_a_beed2cf1,.a_a_beed2cf1.c_a_beed2cf1{overflow:visible}}.e_a_beed2cf1{position:relative;width:100%;height:100%;overflow-y:auto;overflow-x:hidden;-webkit-overflow-scrolling:touch}.e_a_beed2cf1.b_a_beed2cf1{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}@media print{.e_a_beed2cf1,.e_a_beed2cf1.c_a_beed2cf1{overflow:visible}}.f_a_beed2cf1,.g_a_beed2cf1{position:relative;z-index:7}.h_a_beed2cf1,.i_a_beed2cf1{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;height:100%}.j_a_beed2cf1{height:100%}", ""]);


/***/ }),

/***/ "/jB0":
/*!************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/lodash-es@4.17.20/node_modules/lodash-es/_overArg.js ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

/* harmony default export */ __webpack_exports__["default"] = (overArg);


/***/ }),

/***/ "0iU6":
/*!*************************************************************!*\
  !*** ./lib/core/components/router/PageApplicationRouter.js ***!
  \*************************************************************/
/*! exports provided: asyncHistory, PageApplicationRouterContext, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "asyncHistory", function() { return asyncHistory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageApplicationRouterContext", function() { return PageApplicationRouterContext; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_Router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router/Router */ "vZVg");
/* harmony import */ var react_router_Router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_Router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var history__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! history */ "sQ8p");
/* harmony import */ var office_ui_fabric_react_lib_utilities_decorators_withResponsiveMode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! office-ui-fabric-react/lib/utilities/decorators/withResponsiveMode */ "5qgq");
/* harmony import */ var office_ui_fabric_react_lib_utilities_decorators_withResponsiveMode__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(office_ui_fabric_react_lib_utilities_decorators_withResponsiveMode__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _microsoft_sp_application_base__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @microsoft/sp-application-base */ "GPet");
/* harmony import */ var _microsoft_sp_application_base__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_application_base__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @microsoft/office-ui-fabric-react-bundle */ "KL1q");
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @microsoft/sp-lodash-subset */ "Pk8u");
/* harmony import */ var _microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _microsoft_sp_page_context__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @microsoft/sp-page-context */ "X+PM");
/* harmony import */ var _microsoft_sp_page_context__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_page_context__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _ms_sp_component_utilities_lib_teams_TeamsLibLoader__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ms/sp-component-utilities/lib/teams/TeamsLibLoader */ "iFY+");
/* harmony import */ var _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ms/sp-telemetry */ "2q6Q");
/* harmony import */ var _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _chrome_AppChrome__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../chrome/AppChrome */ "bt6h");
/* harmony import */ var _BasePageApplicationRouter__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./BasePageApplicationRouter */ "tj0g");
/* harmony import */ var _LinkInterceptor__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./LinkInterceptor */ "+hfF");
/* harmony import */ var _LoadingIndicator__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./LoadingIndicator */ "NAKQ");
/* harmony import */ var _components_webViewCommunicator_WebViewRouterPostMessageProcessor__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../components/webViewCommunicator/WebViewRouterPostMessageProcessor */ "ZIiG");
/* harmony import */ var _PageRoute__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./PageRoute */ "5H8k");
/* harmony import */ var _AsyncHistory__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./AsyncHistory */ "olRP");
/* harmony import */ var _utilities_Flights__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../utilities/Flights */ "yCLn");
/* harmony import */ var _utilities_Killswitches__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../utilities/Killswitches */ "XjSx");
/* harmony import */ var _utilities_TeamsUtilities__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../utilities/TeamsUtilities */ "6RRI");
/* harmony import */ var _utilities_docLibRoutes__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../utilities/docLibRoutes */ "m6Lh");
/* harmony import */ var _utilities_NavigationUtility__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../utilities/NavigationUtility */ "c4nI");
/* harmony import */ var _utilities_SitePageUtilities__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../utilities/SitePageUtilities */ "sXoH");
/**
 * @copyright Microsoft Corporation. All rights reserved.
 */

























/**
 * Async history provider.
 *
 * @internal
 */
function asyncHistory() {
    return _AsyncHistory__WEBPACK_IMPORTED_MODULE_18__["default"].getHistory();
}
/**
 * @internal
 */
// tslint:disable-next-line:variable-name
var PageApplicationRouterContext = react__WEBPACK_IMPORTED_MODULE_1__["createContext"]({});
/**
 * Default router implementation provided by BasePageApplication.
 *
 * @internal
 */
var PageApplicationRouter = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(PageApplicationRouter, _super);
    function PageApplicationRouter(props) {
        var _this = _super.call(this, props) || this;
        _this._fallbackRender = function (props) {
            if (!_this._lastRenderedNode) {
                return false;
            }
            if (_this._isTransitionToSearch(window.location.pathname)) {
                return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_LoadingIndicator__WEBPACK_IMPORTED_MODULE_15__["default"], null);
            }
            return _this.props.routeConfig.loadingElement ? (_this.props.routeConfig.loadingElement(_this._lastRenderedNode, props)) : (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_LoadingIndicator__WEBPACK_IMPORTED_MODULE_15__["default"], null));
        };
        _this._uploadNavInSessionInfo = function () {
            if (!PageApplicationRouter._hasSessionUploaded) {
                PageApplicationRouter.sessionMonitor.writeSuccess({
                    alias: PageApplicationRouter._reasonSessionEnded,
                    fallbacks: PageApplicationRouter._numNavInSession
                });
                PageApplicationRouter._hasSessionUploaded = true;
                if (!_utilities_Killswitches__WEBPACK_IMPORTED_MODULE_20__["default"].removeSessionEventListenerKSActivated()) {
                    window.removeEventListener('beforeunload', _this._uploadNavInSessionInfo);
                    /* tslint:disable-next-line:no-string-literal */
                    window['navInSessionTelemetry'] = undefined;
                    /* tslint:disable-next-line:no-string-literal */
                    window['sessionEndedReason'] = undefined;
                }
            }
        };
        // Initialize withResponsiveMode ASAP to avoid React commit phase short-circuit.
        Object(office_ui_fabric_react_lib_utilities_decorators_withResponsiveMode__WEBPACK_IMPORTED_MODULE_4__["initializeResponsiveMode"])();
        return _this;
    }
    Object.defineProperty(PageApplicationRouter, "_isIE11", {
        get: function () {
            // tslint:disable-next-line:no-string-literal
            return !!window['MSInputMethodContext'] && !!document['documentMode'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PageApplicationRouter, "_reasonSessionEnded", {
        get: function () {
            return (PageApplicationRouter._sessionEndedReason ||
                // tslint:disable-next-line:no-string-literal
                window['sessionEndedReason'] ||
                'RouteNav.Expected.PageApplicationRouter');
        },
        enumerable: true,
        configurable: true
    });
    PageApplicationRouter.navigateFullPage = function (targetUrl, serviceScope) {
        if (_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_8__["_SPFlight"].isEnabled(1374 /* SPTeamsLinkInterception */) && _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_8__["_BrowserUtilities"].isTeamsHosted()) {
            PageApplicationRouter.handleLinkNavigationInTeams(targetUrl, serviceScope);
        }
        else {
            window.location.href = targetUrl;
        }
    };
    PageApplicationRouter.handleLinkNavigationInTeams = function (targetUrl, serviceScope) {
        // intercept document and classic page links
        _ms_sp_component_utilities_lib_teams_TeamsLibLoader__WEBPACK_IMPORTED_MODULE_10__["TeamsLibLoader"].load()
            .then(function (spTeamsWrapper) {
            spTeamsWrapper.handleLinkNavigation(new URL(window.location.origin + targetUrl), serviceScope);
        })
            .catch(function () {
            // Error occurred, open link in browser.
            return window.open(targetUrl);
        });
    };
    PageApplicationRouter.prototype.UNSAFE_componentWillMount = function () {
        this._history = this._createHistory();
    };
    PageApplicationRouter.prototype.componentDidMount = function () {
        if (!_utilities_Killswitches__WEBPACK_IMPORTED_MODULE_20__["default"].logNavInSessionKSActivated() && !PageApplicationRouter.sessionMonitor) {
            PageApplicationRouter.sessionMonitor = new _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_11__["_QosMonitor"]('PageApplicationRouter.sessionMonitor');
        }
        if (this.props.routeConfig.enablePostMessageBasedRouterNavigation &&
            this.props.routeConfig.webViewCommunicatorService) {
            this._webViewPostMessageProcessor = new _components_webViewCommunicator_WebViewRouterPostMessageProcessor__WEBPACK_IMPORTED_MODULE_16__["default"](this.props.routeConfig.webViewCommunicatorService, this._onIntercept);
        }
        if (!_utilities_Killswitches__WEBPACK_IMPORTED_MODULE_20__["default"].logNavInSessionKSActivated()) {
            window.addEventListener('beforeunload', this._uploadNavInSessionInfo);
        }
    };
    PageApplicationRouter.prototype.componentWillUnmount = function () {
        if (this._webViewPostMessageProcessor) {
            this._webViewPostMessageProcessor.dispose();
        }
        this._lastRenderedNode && (this._lastRenderedNode = undefined);
    };
    PageApplicationRouter.prototype.render = function () {
        var routeConfig = this.props.routeConfig;
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](PageApplicationRouterContext.Provider, { value: {
                history: this._history,
                routeRenderCallback: this._componentRenderedCallback
            } },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_router_Router__WEBPACK_IMPORTED_MODULE_2___default.a, { history: this._history },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_LinkInterceptor__WEBPACK_IMPORTED_MODULE_14__["default"], { applicationId: routeConfig.applicationId, serviceScope: this.props.serviceScope, shouldIntercept: routeConfig.shouldIntercept, onIntercept: this._onIntercept, shouldHostCommunicate: this._shouldHostCommunicate(), messageConverter: routeConfig.hostMessageConverter }, this._showAppChrome() ? (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_chrome_AppChrome__WEBPACK_IMPORTED_MODULE_12__["default"], { serviceScope: this.props.serviceScope, invalidate: this.props.invalidate, renderToString: _utilities_Flights__WEBPACK_IMPORTED_MODULE_19__["default"].isHydrationEnabled && this.props.renderToString, getRenderConfig: this.props.getRenderConfig }, this._renderPageContent())) : (this._renderPageContent())))));
    };
    PageApplicationRouter.prototype._showAppChrome = function () {
        var showAppChromeConfig = this.props.getRenderConfig().showAppChrome;
        return showAppChromeConfig === undefined ? true : showAppChromeConfig;
    };
    PageApplicationRouter.prototype._renderPageContent = function () {
        if (this.props.renderToString) {
            return null; // tslint:disable-line:no-null-keyword
        }
        // tslint:disable-next-line:no-any
        var properties = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.props), { history: this._history, reRenderCallback: this._forceRerender, undoNavigateAndRedirect: this._undoInPlaceAndRedirect });
        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](this.props.layout, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, properties), this._fallbackRoute());
    };
    PageApplicationRouter.prototype._forceRerender = function () {
        this.forceUpdate();
    };
    PageApplicationRouter.prototype._componentRenderedCallback = function (component) {
        this._lastRenderedNode = component;
    };
    /**
     * Create a custom history with an overriden listen function
     * so that we can intercept the history changes and emit different
     * routes to the Router component (which listens to the history).
     */
    PageApplicationRouter.prototype._createHistory = function () {
        var _this = this;
        var history = Object(history__WEBPACK_IMPORTED_MODULE_3__["createBrowserHistory"])();
        var oldListenRef = history.listen;
        var customHistory = Object(_microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_7__["extend"])(history, {
            listen: function (listener) {
                // When the react-router initally calls listen, we want to send it a custom re-written route.
                // This means even from a cold app start we will receive the correct re-written route.
                history.location = _this._rewriter(history.location);
                listener(history.location, '');
                return oldListenRef.bind(history)(function (location, action) {
                    /**
                     * numNavInSession maintains a count of all the navigations in a session.
                     * We should only update it if the action is PUSH or POP (not REPLACE).
                     * If forcedPath is set, then it means that we are going to do a full page load. So don't increment the count
                     */
                    if (!_utilities_Killswitches__WEBPACK_IMPORTED_MODULE_20__["default"].logNavInSessionKSActivated() &&
                        !_this._forcedPath &&
                        (history.action === 'PUSH' || history.action === 'POP')) {
                        PageApplicationRouter._numNavInSession++;
                    }
                    history.location = _this._rewriter(location);
                    listener(history.location, action);
                });
            }
        });
        _AsyncHistory__WEBPACK_IMPORTED_MODULE_18__["default"].setHistory(customHistory);
        return customHistory;
    };
    PageApplicationRouter.prototype._fallbackRoute = function () {
        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_PageRoute__WEBPACK_IMPORTED_MODULE_17__["default"], { noCache: true, render: this._routeNotFound });
    };
    PageApplicationRouter.prototype._isTransitionToSearch = function (url) {
        return !!url && url.toLowerCase().indexOf('/_layouts/15/search.aspx') === 0;
    };
    /**
     * @remarks
     *
     * Calls the navigate prop passed with the route the user attempted to access but the router
     * was unable to match. The navigation method returns an INavigationResult signaling if it
     * was able to handle the route. If it is not able to handle the route we need to trigger a
     * force redirect.
     */
    PageApplicationRouter.prototype._routeNotFound = function (props) {
        var _this = this;
        // this method has already run and we are waiting for redirect, keep showing the indicator
        if (this._forcedPath) {
            return this._fallbackRender(props);
        }
        window.performance.mark('AppNavStart');
        if (!_utilities_Flights__WEBPACK_IMPORTED_MODULE_19__["default"].isDocLibTransitionEnabled() &&
            !_utilities_Killswitches__WEBPACK_IMPORTED_MODULE_20__["default"].isDocLibFullPageLoadTelemetryKSActivated() &&
            Object(_utilities_docLibRoutes__WEBPACK_IMPORTED_MODULE_22__["isListView"])(this._history.location.pathname, this._history.location.search)) {
            /**
             * Through this monitor we are calculating the number of hits that happen on
             * doc-lib from pages, when the list-host flight is turned off.
             * This would tell us how has the usage (from pages to doc-lib) been impacted
             * by the introduction of in-place nav experience (i.e list host flight).
             */
            var qosMonitor = new _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_11__["_QosMonitor"]('PagesToDocLibWithoutListHostFlight');
            qosMonitor.writeSuccess();
        }
        var targetPath = _utilities_Flights__WEBPACK_IMPORTED_MODULE_19__["default"].isDocLibTransitionEnabled()
            ? this._rewriteLibraryRoutes(this._history.location.pathname, this._history.location.search)
            : this._history.location.pathname;
        var targetUrl = this._history.location.pathname + this._history.location.search + this._history.location.hash;
        var navProps = {
            enableCache: true,
            enableDataPrefetch: this._shouldDataPrefetch()
        };
        setTimeout(function () {
            var _a;
            targetPath += _this._history.location.search;
            var navigatePromise;
            if (_utilities_NavigationUtility__WEBPACK_IMPORTED_MODULE_23__["default"].canNavigateWithCachedPreloadedJson() &&
                !!((_a = _this._history.location.state) === null || _a === void 0 ? void 0 : _a.preloadedCacheKey)) {
                var preloadMonitor_1 = new _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_11__["_QosMonitor"]('NavigateWithPreloadedJson');
                navigatePromise = _utilities_NavigationUtility__WEBPACK_IMPORTED_MODULE_23__["default"].generatePreloadedCacheDataPromise(_this._history.location.state.preloadedCacheKey, function (hostPreloadedData) { return _this.props.navigateToPreloadedData(hostPreloadedData); })
                    .then(function (navigationResult) {
                    preloadMonitor_1.writeSuccess();
                    return navigationResult;
                })
                    .catch(function (error) {
                    preloadMonitor_1.writeUnexpectedFailure(undefined, error);
                    return _this.props.navigate(targetPath, navProps);
                });
            }
            else if (_this._shouldGeneratePreloadedDataForUrl()) {
                navigatePromise = _this._generatePreloadedDataPromise(targetUrl).catch(function (_) {
                    return _this.props.navigate(targetPath, navProps);
                });
            }
            else {
                navigatePromise = _this.props.navigate(targetPath, navProps);
            }
            navigatePromise
                .then(function (result) {
                // VSO: 593416 tracks this. Do not access the object here since it should be disposed.
                if (result.operation === 'Unsupported') {
                    if (result.unsupportedReason === 'TransitionsExceeded') {
                        // tslint:disable-next-line:no-string-literal
                        window['sessionEndedReason'] = 'RouteNav.Known.TransitionsExceeded';
                        window.location.href = window.location.href;
                    }
                    else {
                        _this._undoInPlaceAndRedirect(targetUrl, 'RouteNav.Known.Unsupported');
                    }
                }
                else if (result.operation === 'UpdateContext') {
                    // Application failed to detect it could in-place nav likely due to a URL redirect.
                    // Here we replace the url with the new url (getting rid of the redirect) so the application
                    // can load correctly. If this fails the catch below will be hit and hard redirect.
                    var pageContext = _this.props.serviceScope.consume(_microsoft_sp_page_context__WEBPACK_IMPORTED_MODULE_9__["PageContext"].serviceKey);
                    _this._history.replace(pageContext.legacyPageContext.serverRequestPath, {
                        isXSite: result.isXSite
                    });
                }
            })
                .catch(function (error) {
                // If navigate fails then do a full-page refresh
                var sessionEndedReason = 'RouteNav.Unknown.PageApplicationRouter';
                if (!_utilities_Killswitches__WEBPACK_IMPORTED_MODULE_20__["default"].granularNavInSessionKSActivated()) {
                    sessionEndedReason = _microsoft_sp_application_base__WEBPACK_IMPORTED_MODULE_5__["_NavigationDataError"].sessionEndedReason(error._errorCode, 'XApp');
                }
                _this._undoInPlaceAndRedirect(targetUrl, sessionEndedReason);
            });
        });
        return this._fallbackRender(props);
    };
    PageApplicationRouter.prototype._shouldGeneratePreloadedDataForUrl = function () {
        return Boolean(this.props.routeConfig &&
            this.props.routeConfig.generatePreloadedDataForUrl &&
            typeof this.props.routeConfig.generatePreloadedDataForUrl === 'function');
    };
    PageApplicationRouter.prototype._generatePreloadedDataPromise = function (targetUrl) {
        var _this = this;
        return this.props.routeConfig.generatePreloadedDataForUrl(targetUrl).then(function (preloadedData) {
            if (preloadedData) {
                return _this.props.navigateToPreloadedData(preloadedData);
            }
            else {
                return Promise.reject(new Error('PreloadedData generation failed'));
            }
        });
    };
    PageApplicationRouter.prototype._rewriteLibraryRoutes = function (pathname, qsp) {
        var pageContext = this.props.serviceScope.consume(_microsoft_sp_page_context__WEBPACK_IMPORTED_MODULE_9__["PageContext"].serviceKey);
        var docLibUrls = Object(_utilities_docLibRoutes__WEBPACK_IMPORTED_MODULE_22__["default"])(pageContext).map(function (node) { return node.Url; });
        var docLibIndex = docLibUrls.indexOf(pathname + (!_utilities_Killswitches__WEBPACK_IMPORTED_MODULE_20__["default"].isOneUpViewKSActivated() ? qsp : ''));
        if (docLibIndex > -1 || Object(_utilities_docLibRoutes__WEBPACK_IMPORTED_MODULE_22__["isListView"])(pathname, qsp)) {
            return this._extractWebUrl(pageContext) + '_layouts/15/listhost.aspx';
        }
        else {
            return pathname;
        }
    };
    PageApplicationRouter.prototype._extractWebUrl = function (pageContext) {
        return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_8__["UrlUtilities"].removeEndSlash(pageContext.legacyPageContext.webServerRelativeUrl) + '/';
    };
    PageApplicationRouter.prototype._onIntercept = function (type, value, state) {
        var _this = this;
        if (type === 0 /* LINK */) {
            setTimeout(function () {
                if (_utilities_TeamsUtilities__WEBPACK_IMPORTED_MODULE_21__["default"].isTeamsStageViewHosted()) {
                    PageApplicationRouter.handleLinkNavigationInTeams(value, _this.props.serviceScope);
                }
                else {
                    _this._history.push(value, state);
                }
            });
        }
    };
    PageApplicationRouter.prototype._rewriter = function (location) {
        if (!location.query) {
            location.query = {};
            if (PageApplicationRouter._isIE11 || typeof Array.from === 'undefined') {
                // Array.from not supported in IE11
                var iterator = 
                // tslint:disable-next-line:no-any
                new URLSearchParams(location.search).entries();
                for (var curItem = iterator.next(); curItem && !curItem.done; curItem = iterator.next()) {
                    if (Array.isArray(curItem.value) && curItem.value.length > 1) {
                        location.query[curItem.value[0]] = curItem.value[1];
                    }
                }
            }
            else {
                Array.from(
                // tslint:disable-next-line:no-any
                new URLSearchParams(location.search).entries()).forEach(function (_a) {
                    var key = _a[0], value = _a[1];
                    location.query[key] = value;
                });
            }
        }
        if (_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_8__["_SPFlight"].isEnabled(1626 /* CSISearchQueryExtension */)) {
            var searchQueryManager_1 = this.props.serviceScope.consume(_microsoft_sp_application_base__WEBPACK_IMPORTED_MODULE_5__["_SearchQueryManager"].serviceKey);
            if (searchQueryManager_1.isInitialized()) {
                var pageContext_1 = this.props.serviceScope.consume(_microsoft_sp_page_context__WEBPACK_IMPORTED_MODULE_9__["PageContext"].serviceKey);
                // tslint:disable-next-line:no-floating-promises
                searchQueryManager_1
                    .updateFromLocation(location)
                    .then(function () { return searchQueryManager_1.getSearchQuery(); })
                    .then(function (query) { return pageContext_1._setSearchQuery(query); });
            }
        }
        if (this._forcedPath) {
            location.pathname = this._forcedPath;
            return location;
        }
        if (this.props.routeConfig.rewriteRoute) {
            location = this.props.routeConfig.rewriteRoute(location);
        }
        return location;
    };
    PageApplicationRouter.prototype._shouldHostCommunicate = function () {
        return this.props.routeConfig.shouldHostCommunicate === undefined
            ? false
            : this.props.routeConfig.shouldHostCommunicate;
    };
    PageApplicationRouter.prototype._undoInPlaceAndRedirect = function (targetUrl, reason) {
        var _this = this;
        if (reason === void 0) { reason = 'RouteNav.Unknown.PageApplicationRouter'; }
        /**
         * PR: 618059
         * The purpose of UndoInPlaceAndRedirect() is to do a full-page load to the target page
         * and simultaneously ensure that the browser history doesn't mess up.
         *
         * This function should be called only once, but it has been observed that it gets called twice.
         * As a result sometimes, it lands into a race condition, wherein we may not navigate to the correct url.
         * Hence, through the following check, the subsequent executions of this function is avoided.
         */
        if (!_utilities_Killswitches__WEBPACK_IMPORTED_MODULE_20__["default"].singletonUndoInPlaceNavKillSwitchActivated() &&
            PageApplicationRouter._alreadyInUdnoInPlace) {
            return;
        }
        PageApplicationRouter._alreadyInUdnoInPlace = true;
        // Browsers seem to store a state about if an in-place navigation happened between urls
        // and if it did, then it doesn't hard relaod on the back button. This is causing a corner
        // case where if we only reload after navigating to the new url then the browser thinks
        // it can in-place navigate to sharepoint from other urls on the same origin. To fix this we
        // jump back the history and then trigger a full reload.
        // store the old path, so we can force the router to not render the old route when we go back
        this._forcedPath = targetUrl.split('?')[0];
        if (!_utilities_Killswitches__WEBPACK_IMPORTED_MODULE_20__["default"].logNavInSessionKSActivated()) {
            PageApplicationRouter._sessionEndedReason = reason;
        }
        /**
         * Safari caches the page during navigation.
         * In page-to-page transitions, we show a shimmer before we navigate.
         * Safari caches this shimmered page and hence, when the user click on the back button, the
         * browser ends up showing this shimmering page.
         *
         * To fix this, we are checking the persisted property of onpageshow event.
         * It is set to false on initial page load.
         * When page is loaded from back-forward cache, it is set to true.
         * And if it is true, then we will do a full-page load.
         *
         * Scenarios impacted:
         * 1. modern pages to doclib (with relative link), followed by back button click
         * 2. modern pages to classic pages, followed by back button click
         */
        if (this._isSafariBrowser()) {
            // tslint:disable-next-line: no-any
            window.onpageshow = function (event) {
                if (event.persisted) {
                    window.location.reload();
                }
            };
        }
        this._history.goBack();
        // Once we undo the history, wait for it to reflect in the location before we force the location
        // forward to the external url. Alternatively wait 1s
        Promise.race([
            new Promise(function (resolve) {
                var intervalId = window.setInterval(function () {
                    if (window.location.pathname !== _this._forcedPath) {
                        window.clearInterval(intervalId);
                        resolve();
                    }
                }, 10);
            }),
            new Promise(function (resolve) { return window.setTimeout(function () { return resolve(); }, 1000); })
        ])
            .then(function () {
            PageApplicationRouter.navigateFullPage(targetUrl, _this.props.serviceScope);
            if (_utilities_Killswitches__WEBPACK_IMPORTED_MODULE_20__["default"].singletonUndoInPlaceNavKillSwitchActivated()) {
                delete _this._forcedPath;
            }
        })
            .catch(function () {
            PageApplicationRouter.navigateFullPage(targetUrl, _this.props.serviceScope);
            if (_utilities_Killswitches__WEBPACK_IMPORTED_MODULE_20__["default"].singletonUndoInPlaceNavKillSwitchActivated()) {
                delete _this._forcedPath;
            }
        });
    };
    PageApplicationRouter.prototype._isSafariBrowser = function () {
        return !_utilities_Killswitches__WEBPACK_IMPORTED_MODULE_20__["default"].isSafariBrowserKSActivated()
            ? _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_8__["_BrowserDetection"].getBrowserInformation().browser === _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_8__["_Browser"].Safari
            : false;
    };
    /**
     * Check if the destination URL belongs to sp-pages app or sp-home app.
     * If so, enable prefetching of data
     */
    PageApplicationRouter.prototype._shouldDataPrefetch = function () {
        return (_utilities_Killswitches__WEBPACK_IMPORTED_MODULE_20__["default"].dataPrefetchOptimizationKSActivated() ||
            _utilities_SitePageUtilities__WEBPACK_IMPORTED_MODULE_24__["default"].isSitePagesRoute(window.location.pathname) ||
            window.location.pathname.toLowerCase().indexOf('/_layouts/15/sharepoint.aspx') !== -1);
    };
    PageApplicationRouter._numNavInSession = 0;
    PageApplicationRouter._hasSessionUploaded = false;
    PageApplicationRouter._alreadyInUdnoInPlace = false;
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_6__["autobind"]
    ], PageApplicationRouter.prototype, "_forceRerender", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_6__["autobind"]
    ], PageApplicationRouter.prototype, "_componentRenderedCallback", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_6__["autobind"]
    ], PageApplicationRouter.prototype, "_routeNotFound", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_6__["autobind"]
    ], PageApplicationRouter.prototype, "_onIntercept", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_6__["autobind"]
    ], PageApplicationRouter.prototype, "_undoInPlaceAndRedirect", null);
    return PageApplicationRouter;
}(_BasePageApplicationRouter__WEBPACK_IMPORTED_MODULE_13__["default"]));
/* harmony default export */ __webpack_exports__["default"] = (PageApplicationRouter);


/***/ }),

/***/ "17wl":
/*!************************!*\
  !*** external "tslib" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__17wl__;

/***/ }),

/***/ "1AEj":
/*!*****************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/path-to-regexp@1.8.0/node_modules/path-to-regexp/index.js ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isarray = __webpack_require__(/*! isarray */ "GQeK")

/**
 * Expose `pathToRegexp`.
 */
module.exports = pathToRegexp
module.exports.parse = parse
module.exports.compile = compile
module.exports.tokensToFunction = tokensToFunction
module.exports.tokensToRegExp = tokensToRegExp

/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */
var PATH_REGEXP = new RegExp([
  // Match escaped characters that would otherwise appear in future matches.
  // This allows the user to escape special characters that won't transform.
  '(\\\\.)',
  // Match Express-style parameters and un-named parameters with a prefix
  // and optional suffixes. Matches appear as:
  //
  // "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
  // "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
  // "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
  '([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'
].join('|'), 'g')

/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */
function parse (str, options) {
  var tokens = []
  var key = 0
  var index = 0
  var path = ''
  var defaultDelimiter = options && options.delimiter || '/'
  var res

  while ((res = PATH_REGEXP.exec(str)) != null) {
    var m = res[0]
    var escaped = res[1]
    var offset = res.index
    path += str.slice(index, offset)
    index = offset + m.length

    // Ignore already escaped sequences.
    if (escaped) {
      path += escaped[1]
      continue
    }

    var next = str[index]
    var prefix = res[2]
    var name = res[3]
    var capture = res[4]
    var group = res[5]
    var modifier = res[6]
    var asterisk = res[7]

    // Push the current path onto the tokens.
    if (path) {
      tokens.push(path)
      path = ''
    }

    var partial = prefix != null && next != null && next !== prefix
    var repeat = modifier === '+' || modifier === '*'
    var optional = modifier === '?' || modifier === '*'
    var delimiter = res[2] || defaultDelimiter
    var pattern = capture || group

    tokens.push({
      name: name || key++,
      prefix: prefix || '',
      delimiter: delimiter,
      optional: optional,
      repeat: repeat,
      partial: partial,
      asterisk: !!asterisk,
      pattern: pattern ? escapeGroup(pattern) : (asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?')
    })
  }

  // Match any characters still remaining.
  if (index < str.length) {
    path += str.substr(index)
  }

  // If the path exists, push it onto the end.
  if (path) {
    tokens.push(path)
  }

  return tokens
}

/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */
function compile (str, options) {
  return tokensToFunction(parse(str, options), options)
}

/**
 * Prettier encoding of URI path segments.
 *
 * @param  {string}
 * @return {string}
 */
function encodeURIComponentPretty (str) {
  return encodeURI(str).replace(/[\/?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
  })
}

/**
 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
 *
 * @param  {string}
 * @return {string}
 */
function encodeAsterisk (str) {
  return encodeURI(str).replace(/[?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
  })
}

/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction (tokens, options) {
  // Compile all the tokens into regexps.
  var matches = new Array(tokens.length)

  // Compile all the patterns before compilation.
  for (var i = 0; i < tokens.length; i++) {
    if (typeof tokens[i] === 'object') {
      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$', flags(options))
    }
  }

  return function (obj, opts) {
    var path = ''
    var data = obj || {}
    var options = opts || {}
    var encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent

    for (var i = 0; i < tokens.length; i++) {
      var token = tokens[i]

      if (typeof token === 'string') {
        path += token

        continue
      }

      var value = data[token.name]
      var segment

      if (value == null) {
        if (token.optional) {
          // Prepend partial segment prefixes.
          if (token.partial) {
            path += token.prefix
          }

          continue
        } else {
          throw new TypeError('Expected "' + token.name + '" to be defined')
        }
      }

      if (isarray(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`')
        }

        if (value.length === 0) {
          if (token.optional) {
            continue
          } else {
            throw new TypeError('Expected "' + token.name + '" to not be empty')
          }
        }

        for (var j = 0; j < value.length; j++) {
          segment = encode(value[j])

          if (!matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`')
          }

          path += (j === 0 ? token.prefix : token.delimiter) + segment
        }

        continue
      }

      segment = token.asterisk ? encodeAsterisk(value) : encode(value)

      if (!matches[i].test(segment)) {
        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"')
      }

      path += token.prefix + segment
    }

    return path
  }
}

/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */
function escapeString (str) {
  return str.replace(/([.+*?=^!:${}()[\]|\/\\])/g, '\\$1')
}

/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */
function escapeGroup (group) {
  return group.replace(/([=!:$\/()])/g, '\\$1')
}

/**
 * Attach the keys as a property of the regexp.
 *
 * @param  {!RegExp} re
 * @param  {Array}   keys
 * @return {!RegExp}
 */
function attachKeys (re, keys) {
  re.keys = keys
  return re
}

/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {string}
 */
function flags (options) {
  return options && options.sensitive ? '' : 'i'
}

/**
 * Pull out keys from a regexp.
 *
 * @param  {!RegExp} path
 * @param  {!Array}  keys
 * @return {!RegExp}
 */
function regexpToRegexp (path, keys) {
  // Use a negative lookahead to match only capturing groups.
  var groups = path.source.match(/\((?!\?)/g)

  if (groups) {
    for (var i = 0; i < groups.length; i++) {
      keys.push({
        name: i,
        prefix: null,
        delimiter: null,
        optional: false,
        repeat: false,
        partial: false,
        asterisk: false,
        pattern: null
      })
    }
  }

  return attachKeys(path, keys)
}

/**
 * Transform an array into a regexp.
 *
 * @param  {!Array}  path
 * @param  {Array}   keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function arrayToRegexp (path, keys, options) {
  var parts = []

  for (var i = 0; i < path.length; i++) {
    parts.push(pathToRegexp(path[i], keys, options).source)
  }

  var regexp = new RegExp('(?:' + parts.join('|') + ')', flags(options))

  return attachKeys(regexp, keys)
}

/**
 * Create a path regexp from string input.
 *
 * @param  {string}  path
 * @param  {!Array}  keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function stringToRegexp (path, keys, options) {
  return tokensToRegExp(parse(path, options), keys, options)
}

/**
 * Expose a function for taking tokens and returning a RegExp.
 *
 * @param  {!Array}          tokens
 * @param  {(Array|Object)=} keys
 * @param  {Object=}         options
 * @return {!RegExp}
 */
function tokensToRegExp (tokens, keys, options) {
  if (!isarray(keys)) {
    options = /** @type {!Object} */ (keys || options)
    keys = []
  }

  options = options || {}

  var strict = options.strict
  var end = options.end !== false
  var route = ''

  // Iterate over the tokens and create our regexp string.
  for (var i = 0; i < tokens.length; i++) {
    var token = tokens[i]

    if (typeof token === 'string') {
      route += escapeString(token)
    } else {
      var prefix = escapeString(token.prefix)
      var capture = '(?:' + token.pattern + ')'

      keys.push(token)

      if (token.repeat) {
        capture += '(?:' + prefix + capture + ')*'
      }

      if (token.optional) {
        if (!token.partial) {
          capture = '(?:' + prefix + '(' + capture + '))?'
        } else {
          capture = prefix + '(' + capture + ')?'
        }
      } else {
        capture = prefix + '(' + capture + ')'
      }

      route += capture
    }
  }

  var delimiter = escapeString(options.delimiter || '/')
  var endsWithDelimiter = route.slice(-delimiter.length) === delimiter

  // In non-strict mode we allow a slash at the end of match. If the path to
  // match already ends with a slash, we remove it for consistency. The slash
  // is valid at the end of a path match, not in the middle. This is important
  // in non-ending mode, where "/test/" shouldn't match "/test//route".
  if (!strict) {
    route = (endsWithDelimiter ? route.slice(0, -delimiter.length) : route) + '(?:' + delimiter + '(?=$))?'
  }

  if (end) {
    route += '$'
  } else {
    // In non-ending mode, we need the capturing groups to match as much as
    // possible by using a positive lookahead to the end or next path segment.
    route += strict && endsWithDelimiter ? '' : '(?=' + delimiter + '|$)'
  }

  return attachKeys(new RegExp('^' + route, flags(options)), keys)
}

/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 *
 * @param  {(string|RegExp|Array)} path
 * @param  {(Array|Object)=}       keys
 * @param  {Object=}               options
 * @return {!RegExp}
 */
function pathToRegexp (path, keys, options) {
  if (!isarray(keys)) {
    options = /** @type {!Object} */ (keys || options)
    keys = []
  }

  options = options || {}

  if (path instanceof RegExp) {
    return regexpToRegexp(path, /** @type {!Array} */ (keys))
  }

  if (isarray(path)) {
    return arrayToRegexp(/** @type {!Array} */ (path), /** @type {!Array} */ (keys), options)
  }

  return stringToRegexp(/** @type {string} */ (path), /** @type {!Array} */ (keys), options)
}


/***/ }),

/***/ "1p9G":
/*!***************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/lodash-es@4.17.20/node_modules/lodash-es/_baseGetTag.js ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_Symbol.js */ "O/dw");
/* harmony import */ var _getRawTag_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_getRawTag.js */ "NwWT");
/* harmony import */ var _objectToString_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_objectToString.js */ "noIK");




/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = _Symbol_js__WEBPACK_IMPORTED_MODULE_0__["default"] ? _Symbol_js__WEBPACK_IMPORTED_MODULE_0__["default"].toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? Object(_getRawTag_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value)
    : Object(_objectToString_js__WEBPACK_IMPORTED_MODULE_2__["default"])(value);
}

/* harmony default export */ __webpack_exports__["default"] = (baseGetTag);


/***/ }),

/***/ "2R/J":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-datasources@45.13.10_e509c819ab980023b76e5746ec0fc9e2/node_modules/@ms/odsp-datasources/lib/interfaces/theming/SPVariantThemeType.js ***!
  \*****************************************************************************************************************************************************************************************************/
/*! exports provided: SPVariantThemeType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SPVariantThemeType", function() { return SPVariantThemeType; });
/**
 * See the equivalent in SPWeb
 * Variants documentation: https://github.com/OfficeDev/office-ui-fabric-react/tree/master/packages/variants
 *  0: no emphasis - appears as normal
 *  1: neutral emphasis - soft shade of background as background (light gray in default theme)
 *  2: soft variant - soft tint of the primary color as background (light blue in default theme)
 *  3: strong variant - primary color as background, text uses original background color (white on blue in default theme)
 */
var SPVariantThemeType;
(function (SPVariantThemeType) {
    SPVariantThemeType[SPVariantThemeType["None"] = 0] = "None";
    SPVariantThemeType[SPVariantThemeType["Neutral"] = 1] = "Neutral";
    SPVariantThemeType[SPVariantThemeType["Soft"] = 2] = "Soft";
    SPVariantThemeType[SPVariantThemeType["Strong"] = 3] = "Strong";
})(SPVariantThemeType || (SPVariantThemeType = {}));
//# sourceMappingURL=SPVariantThemeType.js.map

/***/ }),

/***/ "2q6Q":
/*!***********************************!*\
  !*** external "@ms/sp-telemetry" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__2q6Q__;

/***/ }),

/***/ "4UEl":
/*!***************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/react-router@4.2.0_react@16.9.0/node_modules/react-router/Switch.js ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _react = __webpack_require__(/*! react */ "cDcd");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "KObg");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _warning = __webpack_require__(/*! warning */ "4qLk");

var _warning2 = _interopRequireDefault(_warning);

var _invariant = __webpack_require__(/*! invariant */ "EMEJ");

var _invariant2 = _interopRequireDefault(_invariant);

var _matchPath = __webpack_require__(/*! ./matchPath */ "la+X");

var _matchPath2 = _interopRequireDefault(_matchPath);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * The public API for rendering the first <Route> that matches.
 */
var Switch = function (_React$Component) {
  _inherits(Switch, _React$Component);

  function Switch() {
    _classCallCheck(this, Switch);

    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }

  Switch.prototype.componentWillMount = function componentWillMount() {
    (0, _invariant2.default)(this.context.router, 'You should not use <Switch> outside a <Router>');
  };

  Switch.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    (0, _warning2.default)(!(nextProps.location && !this.props.location), '<Switch> elements should not change from uncontrolled to controlled (or vice versa). You initially used no "location" prop and then provided one on a subsequent render.');

    (0, _warning2.default)(!(!nextProps.location && this.props.location), '<Switch> elements should not change from controlled to uncontrolled (or vice versa). You provided a "location" prop initially but omitted it on a subsequent render.');
  };

  Switch.prototype.render = function render() {
    var route = this.context.router.route;
    var children = this.props.children;

    var location = this.props.location || route.location;

    var match = void 0,
        child = void 0;
    _react2.default.Children.forEach(children, function (element) {
      if (!_react2.default.isValidElement(element)) return;

      var _element$props = element.props,
          pathProp = _element$props.path,
          exact = _element$props.exact,
          strict = _element$props.strict,
          sensitive = _element$props.sensitive,
          from = _element$props.from;

      var path = pathProp || from;

      if (match == null) {
        child = element;
        match = path ? (0, _matchPath2.default)(location.pathname, { path: path, exact: exact, strict: strict, sensitive: sensitive }) : route.match;
      }
    });

    return match ? _react2.default.cloneElement(child, { location: location, computedMatch: match }) : null;
  };

  return Switch;
}(_react2.default.Component);

Switch.contextTypes = {
  router: _propTypes2.default.shape({
    route: _propTypes2.default.object.isRequired
  }).isRequired
};
Switch.propTypes = {
  children: _propTypes2.default.node,
  location: _propTypes2.default.object
};
exports.default = Switch;

/***/ }),

/***/ "4oe0":
/*!*****************************************************************!*\
  !*** ./lib/core/components/render/HighOrderLayoutComponents.js ***!
  \*****************************************************************/
/*! exports provided: _withManagedRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_withManagedRoutes", function() { return _withManagedRoutes; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_Route__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router/Route */ "g0SQ");
/* harmony import */ var react_router_Route__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_Route__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_Switch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router/Switch */ "4UEl");
/* harmony import */ var react_router_Switch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router_Switch__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _PageApplicationLayoutComponent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./PageApplicationLayoutComponent */ "ZN0e");

/**
 * @copyright Microsoft Corporation. All rights reserved.
 */





/**
 * Provides a high-level layout component that injects managed route paths to the layout
 * @param LayoutComponent - Represents the wrapped application layout component
 * @param componentProps - Represents the wrapped application layout component props
 * @param rootPath - Represents the application root path
 *
 * @returns A page application layout component type with managed routes.
 *
 * @remarks
 * 1. Managed routes are managed by the framework and includes fallback routes in case the application
 * isn't able to handle a given route
 * 2. https://reactjs.org/docs/higher-order-components.html elaborates on HOCs
 *
 * @internal
 */
// tslint:disable-next-line:export-name
function _withManagedRoutes(
// tslint:disable-next-line:variable-name
LayoutComponent, componentProps, rootPath) {
    _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_4__["Validate"].isNotNullOrUndefined(LayoutComponent, 'LayoutComponent');
    _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_4__["Validate"].isNotNullOrUndefined(componentProps, 'componentProps');
    _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_4__["Validate"].isNonemptyString(rootPath, 'rootPath');
    return /** @class */ (function (_super) {
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(class_1, _super);
        function class_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this._onRender = function (routeProps) {
                return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](LayoutComponent, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, _this.props, routeProps, componentProps));
            };
            return _this;
        }
        class_1.prototype.render = function () {
            return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_router_Switch__WEBPACK_IMPORTED_MODULE_3___default.a, null,
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_router_Route__WEBPACK_IMPORTED_MODULE_2___default.a, { path: rootPath, render: this._onRender }),
                this.props.children));
        };
        return class_1;
    }(_PageApplicationLayoutComponent__WEBPACK_IMPORTED_MODULE_5__["default"]));
}


/***/ }),

/***/ "4qLk":
/*!*****************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/warning@3.0.0/node_modules/warning/browser.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = function() {};

if (true) {
  warning = function(condition, format, args) {
    var len = arguments.length;
    args = new Array(len > 2 ? len - 2 : 0);
    for (var key = 2; key < len; key++) {
      args[key - 2] = arguments[key];
    }
    if (format === undefined) {
      throw new Error(
        '`warning(condition, format, ...args)` requires a warning ' +
        'message argument'
      );
    }

    if (format.length < 10 || (/^[s\W]*$/).test(format)) {
      throw new Error(
        'The warning format should be able to uniquely identify this ' +
        'warning. Please, use a more descriptive format than: ' + format
      );
    }

    if (!condition) {
      var argIndex = 0;
      var message = 'Warning: ' +
        format.replace(/%s/g, function() {
          return args[argIndex++];
        });
      if (typeof console !== 'undefined') {
        console.error(message);
      }
      try {
        // This error was thrown as a convenience so that you can use this stack
        // to find the callsite that caused this warning to fire.
        throw new Error(message);
      } catch(x) {}
    }
  };
}

module.exports = warning;


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

/***/ "5H8k":
/*!*************************************************!*\
  !*** ./lib/core/components/router/PageRoute.js ***!
  \*************************************************/
/*! exports provided: PageRoute, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageRoute", function() { return PageRoute; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_Route__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router/Route */ "g0SQ");
/* harmony import */ var react_router_Route__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_Route__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _PageApplicationRouter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PageApplicationRouter */ "0iU6");




/**
 * Extension of Route from react-router used to send a cache of the
 * tree up the stack through to the routeRenderCallback in the context.
 *
 * @internal
 */
var PageRoute = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(PageRoute, _super);
    function PageRoute() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PageRoute.prototype.render = function () {
        var superRender = _super.prototype.render.bind(this);
        // tslint:disable-next-line:no-any
        var noCache = this.props.noCache;
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_PageApplicationRouter__WEBPACK_IMPORTED_MODULE_3__["PageApplicationRouterContext"].Consumer, null, function (context) {
            var node = superRender();
            if (!noCache) {
                context && context.routeRenderCallback && context.routeRenderCallback(node);
            }
            return node;
        }));
    };
    return PageRoute;
}(react_router_Route__WEBPACK_IMPORTED_MODULE_2___default.a));

/**
 * Cast export so it can be consumed correctly
 *
 * @internal
 */
var _default = PageRoute; // tslint:disable-line:no-any
// tslint:disable-next-line:export-name
/* harmony default export */ __webpack_exports__["default"] = (_default);


/***/ }),

/***/ "5qgq":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/utilities/decorators/withResponsiveMode.js ***!
  \**********************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Loading office-ui-fabric-react/./lib/utilities/decorators/withResponsiveMode.js
var pkg = __webpack_require__(/*! @microsoft/office-ui-fabric-react-bundle */ "KL1q");
module.exports = pkg.workaround_withResponsiveMode;

/***/ }),

/***/ "6HbI":
/*!************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/history@4.7.2/node_modules/history/es/createTransitionManager.js ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! warning */ "4qLk");
/* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(warning__WEBPACK_IMPORTED_MODULE_0__);


var createTransitionManager = function createTransitionManager() {
  var prompt = null;

  var setPrompt = function setPrompt(nextPrompt) {
    warning__WEBPACK_IMPORTED_MODULE_0___default()(prompt == null, 'A history supports only one prompt at a time');

    prompt = nextPrompt;

    return function () {
      if (prompt === nextPrompt) prompt = null;
    };
  };

  var confirmTransitionTo = function confirmTransitionTo(location, action, getUserConfirmation, callback) {
    // TODO: If another transition starts while we're still confirming
    // the previous one, we may end up in a weird state. Figure out the
    // best way to handle this.
    if (prompt != null) {
      var result = typeof prompt === 'function' ? prompt(location, action) : prompt;

      if (typeof result === 'string') {
        if (typeof getUserConfirmation === 'function') {
          getUserConfirmation(result, callback);
        } else {
          warning__WEBPACK_IMPORTED_MODULE_0___default()(false, 'A history needs a getUserConfirmation function in order to use a prompt message');

          callback(true);
        }
      } else {
        // Return false from a transition hook to cancel the transition.
        callback(result !== false);
      }
    } else {
      callback(true);
    }
  };

  var listeners = [];

  var appendListener = function appendListener(fn) {
    var isActive = true;

    var listener = function listener() {
      if (isActive) fn.apply(undefined, arguments);
    };

    listeners.push(listener);

    return function () {
      isActive = false;
      listeners = listeners.filter(function (item) {
        return item !== listener;
      });
    };
  };

  var notifyListeners = function notifyListeners() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    listeners.forEach(function (listener) {
      return listener.apply(undefined, args);
    });
  };

  return {
    setPrompt: setPrompt,
    confirmTransitionTo: confirmTransitionTo,
    appendListener: appendListener,
    notifyListeners: notifyListeners
  };
};

/* harmony default export */ __webpack_exports__["default"] = (createTransitionManager);

/***/ }),

/***/ "6RRI":
/*!**********************************************!*\
  !*** ./lib/core/utilities/TeamsUtilities.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__);

/**
 * TeamsUtilities
 * @internal
 */
var TeamsUtilities = /** @class */ (function () {
    function TeamsUtilities() {
    }
    TeamsUtilities.isTeamsStageViewHosted = function () {
        return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPFlight"].isEnabled(1485 /* Teams Stage-View Experience */)
            ? window['TeamsStageViewHosted'] === 'stageView' // tslint:disable-line:no-string-literal
            : false;
    };
    return TeamsUtilities;
}());
/* harmony default export */ __webpack_exports__["default"] = (TeamsUtilities);


/***/ }),

/***/ "6iXJ":
/*!***********************************!*\
  !*** external "@ms/sp-suite-nav" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__6iXJ__;

/***/ }),

/***/ "6kzE":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/ProgressIndicator/ProgressIndicator.base.js ***!
  \**********************************************************************************************************************************************************************************************************************/
/*! exports provided: ProgressIndicatorBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressIndicatorBase", function() { return ProgressIndicatorBase; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Utilities */ "mkpW");



var getClassNames = Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["classNamesFunction"])();
// if the percentComplete is near 0, don't animate it.
// This prevents animations on reset to 0 scenarios
var ZERO_THRESHOLD = 0.01;
/**
 * ProgressIndicator with no default styles.
 * [Use the `styles` API to add your own styles.](https://github.com/microsoft/fluentui/wiki/Styling)
 */
var ProgressIndicatorBase = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ProgressIndicatorBase, _super);
    function ProgressIndicatorBase() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._onRenderProgress = function (props) {
            var _a = _this.props, ariaValueText = _a.ariaValueText, barHeight = _a.barHeight, className = _a.className, styles = _a.styles, theme = _a.theme;
            var percentComplete = typeof _this.props.percentComplete === 'number'
                ? Math.min(100, Math.max(0, _this.props.percentComplete * 100))
                : undefined;
            var classNames = getClassNames(styles, {
                theme: theme,
                className: className,
                barHeight: barHeight,
                indeterminate: percentComplete === undefined ? true : false,
            });
            var progressBarStyles = {
                width: percentComplete !== undefined ? percentComplete + '%' : undefined,
                transition: percentComplete !== undefined && percentComplete < ZERO_THRESHOLD ? 'none' : undefined,
            };
            var ariaValueMin = percentComplete !== undefined ? 0 : undefined;
            var ariaValueMax = percentComplete !== undefined ? 100 : undefined;
            var ariaValueNow = percentComplete !== undefined ? Math.floor(percentComplete) : undefined;
            return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: classNames.itemProgress },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: classNames.progressTrack }),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: classNames.progressBar, style: progressBarStyles, role: "progressbar", "aria-valuemin": ariaValueMin, "aria-valuemax": ariaValueMax, "aria-valuenow": ariaValueNow, "aria-valuetext": ariaValueText })));
        };
        return _this;
    }
    ProgressIndicatorBase.prototype.render = function () {
        var _a = this.props, barHeight = _a.barHeight, className = _a.className, 
        // eslint-disable-next-line deprecation/deprecation
        _b = _a.label, 
        // eslint-disable-next-line deprecation/deprecation
        label = _b === void 0 ? this.props.title : _b, // Fall back to deprecated value.
        description = _a.description, styles = _a.styles, theme = _a.theme, progressHidden = _a.progressHidden, _c = _a.onRenderProgress, onRenderProgress = _c === void 0 ? this._onRenderProgress : _c;
        var percentComplete = typeof this.props.percentComplete === 'number'
            ? Math.min(100, Math.max(0, this.props.percentComplete * 100))
            : undefined;
        var classNames = getClassNames(styles, {
            theme: theme,
            className: className,
            barHeight: barHeight,
            indeterminate: percentComplete === undefined ? true : false,
        });
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: classNames.root },
            label ? react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: classNames.itemName }, label) : null,
            !progressHidden
                ? onRenderProgress(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.props), { percentComplete: percentComplete }), this._onRenderProgress)
                : null,
            description ? react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: classNames.itemDescription }, description) : null));
    };
    ProgressIndicatorBase.defaultProps = {
        label: '',
        description: '',
        width: 180,
    };
    return ProgressIndicatorBase;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));

//# sourceMappingURL=ProgressIndicator.base.js.map

/***/ }),

/***/ "7NNT":
/*!************************************************!*\
  !*** ./lib/core/components/chrome/BasePage.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _BasePage_Props__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BasePage.Props */ "RmMj");
/* harmony import */ var _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ms/sp-telemetry */ "2q6Q");
/* harmony import */ var _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_3__);
/**
 * @file BasePage.tsx
 *
 * @Copyright (c) Microsoft Corporation.  All rights reserved.
 */




/**
 * Provides the abstract base class for all pages.
 * @internal
 */
var BasePage = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(BasePage, _super);
    /**
     * Initializes a new instance of the BasePage class.
     * @param props - Initial props.
     */
    function BasePage(props) {
        var _this = _super.call(this, props) || this;
        _this.state = _this.initializeState();
        return _this;
    }
    /**
     * Occurs after the BasePage component has been mounted.
     * @virtual
     */
    BasePage.prototype.componentDidMount = function () {
        this._isMounted = true;
        this.initialize().catch(function (error) {
            throw error;
        });
    };
    /**
     * Occurs before the BasePage component is unmounted.
     * @virtual
     */
    BasePage.prototype.componentWillUnmount = function () {
        this._isMounted = false;
    };
    /**
     * Occurs when an error is thrown in the BasePage component tree.
     * @virtual
     */
    BasePage.prototype.componentDidCatch = function (error, errorInfo) {
        this.onError(error, errorInfo);
    };
    /**
     * If the loading stage has completed, renders the page wrapped
     * inside the page context.
     */
    BasePage.prototype.render = function () {
        if (!this.state.canRender) {
            return this.renderFallback();
        }
        this._currentContext = this.createPageContext();
        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_BasePage_Props__WEBPACK_IMPORTED_MODULE_2__["pageContext"].Provider, { value: this._currentContext }, this.renderPage());
    };
    /**
     * Determines whether the BasePage component needs to render again.
     * @param nextProps - New props.
     * @param nextState - New state.
     */
    BasePage.prototype.shouldComponentUpdate = function (nextProps, nextState) {
        return true;
    };
    /**
     * Initializes the BasePage state.
     * @virtual
     */
    BasePage.prototype.initializeState = function () {
        return {};
    };
    /**
     * Creates the page context.
     * @virtual
     */
    BasePage.prototype.createPageContext = function () {
        return {
            serviceScope: this.props.serviceScope,
            history: this.props.history
        };
    };
    /**
     * Returns a set of load operations that must complete before the page can render.
     *
     * Override this method in your code to add additional loading operations.
     * @virtual
     */
    BasePage.prototype.getLoadOperations = function () {
        var _this = this;
        var pageRequest = this.createPageRequest();
        return [
            /* initiatePageRequest */
            this.initiatePageRequest(pageRequest).then(function () {
                /* loadPageLayout */
                return _this.loadPageLayout().then(function (pageLayoutClass) {
                    _this._isMounted && _this.setState({ pageLayoutClass: pageLayoutClass });
                });
            })
        ];
    };
    /**
     * Occurs after the page is mounted, and must complete before the BasePage component
     * can render.
     * @virtual
     */
    BasePage.prototype.onLoad = function () {
        var _this = this;
        return Promise.all(this.getLoadOperations()).then(function () {
            _this.props.onLoaded && _this.props.onLoaded();
        });
    };
    /**
     * Occurs after all loading operations have completed and the BasePage component
     * can render.
     * @virtual
     */
    BasePage.prototype.onRender = function () {
        var _this = this;
        if (!this.state.canRender && this._isMounted) {
            this.setState({ canRender: true }, function () {
                _this.onDidPaint();
            });
        }
        else {
            //
            // TODO: demyren/bekaise; clean up among canRender, isTransitioning and provide a
            // system that reliably guards against re-renders etc.
            //
            // For now, below canRender is true on most in-place navs scenarios.
            // Ensure onDidPaint still gets called, otherwise the EUPL end marker isn't recorded.
            //
            this.onDidPaint();
        }
    };
    /**
     * Occurs after the BasePage component has rendered and painted to the screen.
     * @virtual
     */
    BasePage.prototype.onDidPaint = function () {
        // empty
    };
    /**
     * Occurs when an unhandled error occurs in the BasePage component.
     * @param error - The error.
     * @param errorInfo - Provides React component stack information.
     * @virtual
     */
    BasePage.prototype.onError = function (error, errorInfo) {
        // The `onError` lifecycle is the final place to catch page errors.
        // We monitor on their absolute count trades to capture render issues.
        var basePageMonitor = new _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_3__["_QosMonitor"]('BasePageError');
        if (errorInfo) {
            basePageMonitor.writeUnexpectedFailure('RenderError', error, {
                callStack: error.stack,
                componentStack: errorInfo.componentStack
            });
        }
        else {
            basePageMonitor.writeUnexpectedFailure('InitializeError', error, {
                callStack: error.stack
            });
        }
    };
    /**
     * Initializes the BasePage component by invoking the onLoad phase,
     * followed by the onRender phase.
     *
     * Initialization happens automatically when the BasePage component is first mounted.
     * However, initialize can subsequently be invoked manually, as a result of a URL change
     * or other state change that requires the onLoad and onRender phases to replay.
     * @virtual
     */
    BasePage.prototype.initialize = function () {
        var _this = this;
        return this.onLoad()
            .then(function () { return _this.onRender(); })
            .catch(function (error) { return _this.onError(error); });
    };
    /**
     * Fallback for when we can't render (i.e. initial load or navigating)
     */
    BasePage.prototype.renderFallback = function () {
        return null; // tslint:disable-line:no-null-keyword
    };
    return BasePage;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));
/* harmony default export */ __webpack_exports__["default"] = (BasePage);


/***/ }),

/***/ "7Oi+":
/*!********************************************************************************************!*\
  !*** ./lib/core/components/chrome/PageLayoutScrollRegion/PageLayoutScrollRegion.styles.js ***!
  \********************************************************************************************/
/*! exports provided: PageLayoutScrollRegionStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageLayoutScrollRegionStyles", function() { return PageLayoutScrollRegionStyles; });
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/office-ui-fabric-react-bundle */ "KL1q");
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__);

var PageLayoutScrollRegionStyles = /** @class */ (function () {
    function PageLayoutScrollRegionStyles() {
    }
    PageLayoutScrollRegionStyles.getClassNames = function (props) {
        return Object(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__["classNamesFunction"])()(PageLayoutScrollRegionStyles._getStyle, props);
    };
    PageLayoutScrollRegionStyles._getStyle = function (props) {
        var _a = props.theme, effects = _a.effects, palette = _a.palette;
        return {
            pagesCoreFloatingRoot: [
                {
                    padding: 24,
                    backgroundColor: palette.neutralLighter,
                    boxSizing: 'border-box'
                }
            ],
            pagesCoreFloatingChild: [
                {
                    boxShadow: effects.elevation8
                }
            ]
        };
    };
    return PageLayoutScrollRegionStyles;
}());



/***/ }),

/***/ "87/5":
/*!**************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/symbol-observable@1.2.0/node_modules/symbol-observable/es/index.js ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global, module) {/* harmony import */ var _ponyfill_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ponyfill.js */ "mhe/");
/* global window */


var root;

if (typeof self !== 'undefined') {
  root = self;
} else if (typeof window !== 'undefined') {
  root = window;
} else if (typeof global !== 'undefined') {
  root = global;
} else if (true) {
  root = module;
} else {}

var result = Object(_ponyfill_js__WEBPACK_IMPORTED_MODULE_0__["default"])(root);
/* harmony default export */ __webpack_exports__["default"] = (result);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../webpack@4.44.2/node_modules/webpack/buildin/global.js */ "c5Wh"), __webpack_require__(/*! ./../../../../webpack@4.44.2/node_modules/webpack/buildin/harmony-module.js */ "cUpl")(module)))

/***/ }),

/***/ "8VYI":
/*!************************************************!*\
  !*** ./lib/core/components/chrome/Variants.js ***!
  \************************************************/
/*! exports provided: setEmphasisHeader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setEmphasisHeader", function() { return setEmphasisHeader; });
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/office-ui-fabric-react-bundle */ "KL1q");
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ms_odsp_datasources_lib_interfaces_theming_SPVariantThemeType__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ms/odsp-datasources/lib/interfaces/theming/SPVariantThemeType */ "2R/J");
/* harmony import */ var _ms_uifabric_variants_bundle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ms/uifabric-variants-bundle */ "wrw2");
/* harmony import */ var _ms_uifabric_variants_bundle__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ms_uifabric_variants_bundle__WEBPACK_IMPORTED_MODULE_2__);



// tslint:disable-next-line:export-name
function setEmphasisHeader(headerEmphasis, newTheme) {
    if (!newTheme) {
        newTheme = Object(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__["getTheme"])();
    }
    var t = undefined;
    switch (headerEmphasis) {
        case _ms_odsp_datasources_lib_interfaces_theming_SPVariantThemeType__WEBPACK_IMPORTED_MODULE_1__["SPVariantThemeType"].Neutral:
            t = Object(_ms_uifabric_variants_bundle__WEBPACK_IMPORTED_MODULE_2__["getNeutralVariant"])(newTheme);
            break;
        case _ms_odsp_datasources_lib_interfaces_theming_SPVariantThemeType__WEBPACK_IMPORTED_MODULE_1__["SPVariantThemeType"].Soft:
            t = Object(_ms_uifabric_variants_bundle__WEBPACK_IMPORTED_MODULE_2__["getSoftVariant"])(newTheme);
            break;
        case _ms_odsp_datasources_lib_interfaces_theming_SPVariantThemeType__WEBPACK_IMPORTED_MODULE_1__["SPVariantThemeType"].Strong:
            t = Object(_ms_uifabric_variants_bundle__WEBPACK_IMPORTED_MODULE_2__["getStrongVariant"])(newTheme);
            break;
        default:
        case _ms_odsp_datasources_lib_interfaces_theming_SPVariantThemeType__WEBPACK_IMPORTED_MODULE_1__["SPVariantThemeType"].None:
    }
    _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__["Customizations"].applySettings({ headerEmphasisTheme: t });
}


/***/ }),

/***/ "8oKq":
/*!*************************************************************!*\
  !*** ./lib/core/components/chrome/SiteFooter/SiteFooter.js ***!
  \*************************************************************/
/*! exports provided: SiteFooter, DEFAULT_SITE_FOOTER_MIN_HEIGHT, SITE_FOOTER_PERFORMANCE_TAG */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SiteFooter", function() { return SiteFooter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_SITE_FOOTER_MIN_HEIGHT", function() { return DEFAULT_SITE_FOOTER_MIN_HEIGHT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SITE_FOOTER_PERFORMANCE_TAG", function() { return SITE_FOOTER_PERFORMANCE_TAG; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @microsoft/sp-diagnostics */ "ut3N");
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ms_odsp_datasources_lib_models_chrome_ChromeOptions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ms/odsp-datasources/lib/models/chrome/ChromeOptions */ "Vb17");
/* harmony import */ var _ms_sp_component_utilities_lib_navigationUtilities_NavigationNodeUtilities__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ms/sp-component-utilities/lib/navigationUtilities/NavigationNodeUtilities */ "wcgA");
/* harmony import */ var _loaders_spcx_siteFooter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../loaders/spcx-siteFooter */ "q3o8");
/* harmony import */ var _SiteFooter_resx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./SiteFooter.resx */ "PBJ4");
var _SiteFooter_resx__WEBPACK_IMPORTED_MODULE_7___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./SiteFooter.resx */ "PBJ4", 1);








var SiteFooter = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(SiteFooter, _super);
    function SiteFooter(props) {
        var _this = _super.call(this, props) || this;
        _this.state = { compositeFooter: undefined };
        _this._simpleFooterStrings = {
            poweredBy: _SiteFooter_resx__WEBPACK_IMPORTED_MODULE_7__["poweredBy"],
            createSite: _SiteFooter_resx__WEBPACK_IMPORTED_MODULE_7__["createSite"],
            mobileUpsell: _SiteFooter_resx__WEBPACK_IMPORTED_MODULE_7__["mobileUpsell"],
            edit: _SiteFooter_resx__WEBPACK_IMPORTED_MODULE_7__["edit"],
            editAriaLabel: _SiteFooter_resx__WEBPACK_IMPORTED_MODULE_7__["editAriaLabel"]
        };
        // for now, these are the same type
        _this._megaFooterStrings = _this._simpleFooterStrings;
        return _this;
    }
    Object.defineProperty(SiteFooter.prototype, "_isFooterEnabled", {
        get: function () {
            return (this.props.chromeOptions.nav.placement !== _ms_odsp_datasources_lib_models_chrome_ChromeOptions__WEBPACK_IMPORTED_MODULE_4__["NavPlacementType"].LEFT &&
                ((!_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__["_BrowserUtilities"].isMobileBrowser() && !_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__["_BrowserUtilities"].isEmbedded()) ||
                    // tslint:disable-next-line:no-string-literal
                    window['teamsCustomAppType'] === 'portals'));
        },
        enumerable: true,
        configurable: true
    });
    SiteFooter.prototype.componentDidMount = function () {
        var _this = this;
        Object(_loaders_spcx_siteFooter__WEBPACK_IMPORTED_MODULE_6__["compositeFooterLoader"])()
            .then(function (footer) {
            _this.setState({ compositeFooter: footer });
        })
            .catch(function (error) {
            _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_3__["_TraceLogger"].logError(SiteFooter._logSource, error);
        });
    };
    SiteFooter.prototype.render = function () {
        return (this._isFooterEnabled && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("footer", { className: this.props.className }, 
        /* TODO: content bottom placeholder - site footer */
        this.state.compositeFooter &&
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](this.state.compositeFooter, this._getCompositeFooterProps()))));
    };
    SiteFooter.prototype._getCompositeFooterProps = function () {
        return {
            chromeOptions: this.props.chromeOptions,
            pageContext: this.props.pageContext,
            simpleFooterStrings: this._simpleFooterStrings,
            megaFooterStrings: this._megaFooterStrings,
            onEditNavClicked: this.props.onEditNavClicked,
            enableMobileUpsell: this.props.enableMobileUpsell,
            footerNavigationNodes: this.props.footerNodes
                ? _ms_sp_component_utilities_lib_navigationUtilities_NavigationNodeUtilities__WEBPACK_IMPORTED_MODULE_5__["default"].transformNavNodesToLinks(this.props.footerNodes, 0)
                : undefined
        };
    };
    SiteFooter._logSource = _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_3__["_LogSource"].create('SiteFooter');
    return SiteFooter;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));

var DEFAULT_SITE_FOOTER_MIN_HEIGHT = 48;
var SITE_FOOTER_PERFORMANCE_TAG = 'Page.SiteFooter.internal.03025612-a400-4804-a78e-e1493200a43b';


/***/ }),

/***/ "9OPX":
/*!**************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/history@4.7.2/node_modules/history/es/LocationUtils.js ***!
  \**************************************************************************************************************/
/*! exports provided: createLocation, locationsAreEqual */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createLocation", function() { return createLocation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "locationsAreEqual", function() { return locationsAreEqual; });
/* harmony import */ var resolve_pathname__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! resolve-pathname */ "hLFe");
/* harmony import */ var value_equal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! value-equal */ "FWZX");
/* harmony import */ var _PathUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PathUtils */ "K/iH");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };





var createLocation = function createLocation(path, state, key, currentLocation) {
  var location = void 0;
  if (typeof path === 'string') {
    // Two-arg form: push(path, state)
    location = Object(_PathUtils__WEBPACK_IMPORTED_MODULE_2__["parsePath"])(path);
    location.state = state;
  } else {
    // One-arg form: push(location)
    location = _extends({}, path);

    if (location.pathname === undefined) location.pathname = '';

    if (location.search) {
      if (location.search.charAt(0) !== '?') location.search = '?' + location.search;
    } else {
      location.search = '';
    }

    if (location.hash) {
      if (location.hash.charAt(0) !== '#') location.hash = '#' + location.hash;
    } else {
      location.hash = '';
    }

    if (state !== undefined && location.state === undefined) location.state = state;
  }

  try {
    location.pathname = decodeURI(location.pathname);
  } catch (e) {
    if (e instanceof URIError) {
      throw new URIError('Pathname "' + location.pathname + '" could not be decoded. ' + 'This is likely caused by an invalid percent-encoding.');
    } else {
      throw e;
    }
  }

  if (key) location.key = key;

  if (currentLocation) {
    // Resolve incomplete/relative pathname relative to current location.
    if (!location.pathname) {
      location.pathname = currentLocation.pathname;
    } else if (location.pathname.charAt(0) !== '/') {
      location.pathname = Object(resolve_pathname__WEBPACK_IMPORTED_MODULE_0__["default"])(location.pathname, currentLocation.pathname);
    }
  } else {
    // When there is no prior location and pathname is empty, set it to /
    if (!location.pathname) {
      location.pathname = '/';
    }
  }

  return location;
};

var locationsAreEqual = function locationsAreEqual(a, b) {
  return a.pathname === b.pathname && a.search === b.search && a.hash === b.hash && a.key === b.key && Object(value_equal__WEBPACK_IMPORTED_MODULE_1__["default"])(a.state, b.state);
};

/***/ }),

/***/ "9sgm":
/*!******************************************************!*\
  !*** ./lib/core/services/custom/a11y/A11yService.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ms_sp_a11y__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ms/sp-a11y */ "ytfe");
/* harmony import */ var _ms_sp_a11y__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ms_sp_a11y__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _BasePageApplicationService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../BasePageApplicationService */ "ITs/");
/**
 * @copyright Microsoft Corporation. All rights reserved.
 */




/**
 * Represents a custom service which provides Accessibility management capabilities
 * to the page-based application
 *
 * @internal
 */
var A11yService = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(A11yService, _super);
    /**
     * Initializes a new instance of the A11yService
     * @param serviceScope - Represents the service scope.
     */
    function A11yService(serviceScope) {
        return _super.call(this, serviceScope, {
            serviceKey: A11yService.serviceKey,
            isShared: false
        }) || this;
    }
    /**
     * Creates a new accessibility manager and associates it with the underlying dom element.
     * @param domElement - The DomElement associated with the accessibility control.
     */
    A11yService.prototype.createA11yManager = function (domElement) {
        var _this = this;
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["Validate"].isNotNullOrUndefined(domElement, 'domElement');
        _super.prototype.createServiceComponent.call(this, this.componentConfiguration, function (configuration) {
            return _ms_sp_a11y__WEBPACK_IMPORTED_MODULE_2__["A11yManager"].create(domElement, _this.componentConfiguration || undefined);
        });
    };
    Object.defineProperty(A11yService.prototype, "a11yManager", {
        /**
         * Gets the Accessibility manager.
         */
        get: function () {
            return this.serviceComponent;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Gets the service name
     */
    A11yService.a11yServiceName = 'sp-pages-core:A11yManager';
    /**
     * Gets the service key.
     */
    A11yService.serviceKey = _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["ServiceKey"].create(A11yService.a11yServiceName, A11yService);
    return A11yService;
}(_BasePageApplicationService__WEBPACK_IMPORTED_MODULE_3__["default"]));
/* harmony default export */ __webpack_exports__["default"] = (A11yService);


/***/ }),

/***/ "A/Pf":
/*!***********************************************************!*\
  !*** ./lib/core/services/store/StoreManagementService.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _BasePageApplicationService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../BasePageApplicationService */ "ITs/");
/**
 * @copyright Microsoft Corporation. All rights reserved.
 */



/**
 * Represents a service that serves store management capabilities
 * for page-based applications.
 *
 * @internal
 */
var StoreManagementService = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(StoreManagementService, _super);
    /**
     * Initializes a new instance of the Store Management Service.
     * @param serviceScope - Represents the service scope
     */
    function StoreManagementService(serviceScope) {
        return _super.call(this, serviceScope, {
            serviceKey: StoreManagementService.serviceKey,
            isShared: false
        }) || this;
    }
    /**
     * Creates a page store for maintaining application state
     * @param config - Represents the store config.
     * @param storeFactory - Represents the page store factory.
     */
    StoreManagementService.prototype.createStore = function (config, storeFactory) {
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["Validate"].isNotNullOrUndefined(config, 'config');
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["Validate"].isNotNullOrUndefined(storeFactory, 'storeFactory');
        _super.prototype.createServiceComponent.call(this, config, storeFactory);
    };
    Object.defineProperty(StoreManagementService.prototype, "store", {
        /**
         * Gets the store associated with the service
         */
        get: function () {
            return this.serviceComponent;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Gets the service key.
     */
    StoreManagementService.serviceKey = _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["ServiceKey"].create("sp-pages-core:StoreService" /* StoreService */, StoreManagementService);
    return StoreManagementService;
}(_BasePageApplicationService__WEBPACK_IMPORTED_MODULE_2__["default"]));
/* harmony default export */ __webpack_exports__["default"] = (StoreManagementService);


/***/ }),

/***/ "AXdo":
/*!************************************************!*\
  !*** ./lib/core/components/store/PageStore.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "TgFA");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @microsoft/sp-lodash-subset */ "Pk8u");
/* harmony import */ var _microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ms/sp-telemetry */ "2q6Q");
/* harmony import */ var _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @microsoft/sp-diagnostics */ "ut3N");
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ms_odsp_datasources_lib_DesignPackage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ms/odsp-datasources/lib/DesignPackage */ "cGzF");
/* harmony import */ var _reducers_RouteReducer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../reducers/RouteReducer */ "REfO");
/* harmony import */ var _reducers_SiteChromeReducer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../reducers/SiteChromeReducer */ "OjPL");
/* harmony import */ var _reducers_PostRenderReducer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../reducers/PostRenderReducer */ "KajA");
/**
 * @copyright Microsoft Corporation. All rights reserved.
 */










/**
 * Represents a PageStore as a base that can be extended from or used out of the box
 *
 * @internal
 */
var PageStore = /** @class */ (function () {
    /**
     * Initializes a new instance of the Page Store.
     * @param configData - Represents the store configuration
     */
    function PageStore(configData) {
        // tslint:disable-next-line:no-any
        this._additonalReducers = {};
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__["Validate"].isNotNullOrUndefined(configData, 'configData');
        this._actionListeners = [];
        this._reduxStore = Object(redux__WEBPACK_IMPORTED_MODULE_1__["createStore"])(this._getStoreReducers(configData), this._getInitialState(configData), 
        // tslint:disable-next-line:no-any
         true ? __webpack_require__(/*! redux-devtools-extension */ "l324").devToolsEnhancer() : undefined);
    }
    PageStore._logEntry = function (source, entry) {
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__["Validate"].isNotNullOrUndefined(source, 'source');
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__["Validate"].isNotNullOrUndefined(entry, 'entry');
        switch (entry.logType) {
            case _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_5__["_LogType"].Error:
                _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_5__["_TraceLogger"].logErrorWithLogEntry(source, entry);
                break;
            case _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_5__["_LogType"].Event:
                _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_4__["_EngagementLogger"].logEventWithLogEntry(entry);
                break;
            default:
                _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_5__["_TraceLogger"].logVerboseWithLogEntry(source, entry);
                break;
        }
    };
    /**
     * Dispatches an action to trigger a state change.
     *
     * @param action - Represents the action to dispatch.
     * @returns The action that was dispatched.
     */
    // tslint:disable-next-line:no-any
    PageStore.prototype.dispatch = function (action) {
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__["Validate"].isNotNullOrUndefined(action, 'action');
        if (action.logEntry) {
            PageStore._logEntry(PageStore._logSource, action.logEntry);
        }
        this._reduxStore.dispatch(action);
        this._actionListeners.forEach(function (actionListener) {
            return setTimeout(function () {
                actionListener(action);
            });
        });
        return action;
    };
    /**
     * Reads the state tree contained in the store.
     *
     * @returns The application state.
     */
    PageStore.prototype.getState = function () {
        return this._reduxStore.getState();
    };
    /**
     * Gets a slice of the state contained in the store
     * @param key - Represents the key to the state slice.
     * @param defaultValue - Represents the optional default value.
     *
     * @returns the sliced state
     */
    PageStore.prototype.getStateSlice = function (key, defaultValue) {
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__["Validate"].isNonemptyString(key, 'key');
        return Object(_microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_3__["get"])(this.getState(), key, defaultValue);
    };
    /**
     * Registers a change listener with the store.
     *
     * @param listener - Represents the change callback to be invoked on dispatch.
     * @param isStoreListener - If the subscription is for the store or for actions
     * @returns A function to remove the change listener.
     */
    PageStore.prototype.subscribe = function (listener, isStoreListener) {
        var _this = this;
        if (isStoreListener === void 0) { isStoreListener = true; }
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__["Validate"].isNotNullOrUndefined(listener, 'listener');
        if (isStoreListener) {
            return this._reduxStore.subscribe(function () {
                try {
                    listener();
                }
                catch (error) {
                    _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_5__["_TraceLogger"].logError(PageStore._logSource, error);
                }
            });
        }
        else {
            this._actionListeners.push(listener);
            return function () {
                var index = _this._actionListeners.indexOf(listener);
                if (index > -1) {
                    _this._actionListeners.splice(index, 1);
                }
            };
        }
    };
    /**
     * Adds a new reducer to the redux store.
     * Used for adding reducers after initial load (i.e. defer-loaded reducers)
     * @param key - Represetns the key to the state slice
     * @param reducer - Reducer function managing the state slice
     */
    PageStore.prototype.addReducer = function (key, reducer) {
        this._additonalReducers[key] = reducer;
        this._reduxStore.replaceReducer(this._getStoreReducers());
    };
    PageStore.prototype._getStoreReducers = function (configData) {
        // add initial application reducer
        if (configData && configData.rootApplicationReducer && !this._additonalReducers.application) {
            this._additonalReducers.application = configData.rootApplicationReducer;
        }
        else {
            this._additonalReducers.application = function (s, a) { return a; };
        }
        return Object(redux__WEBPACK_IMPORTED_MODULE_1__["combineReducers"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this._additonalReducers), { route: _reducers_RouteReducer__WEBPACK_IMPORTED_MODULE_7__["default"].reducer, chrome: _reducers_SiteChromeReducer__WEBPACK_IMPORTED_MODULE_8__["siteChromeReducer"], postRender: _reducers_PostRenderReducer__WEBPACK_IMPORTED_MODULE_9__["postRenderReducer"] }));
    };
    PageStore.prototype._getInitialState = function (configData) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, (configData.rootApplicationReducer && { application: configData.initialApplicationState })), { route: {
                currentRoute: '',
                inTransition: false,
                nextRoute: '',
                isXOrigin: false,
                mode: _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__["DisplayMode"].Read
            }, chrome: {
                chromeOptions: configData.pageContext && this._getInitialSiteChrome(configData.pageContext)
            }, postRender: {
                isPostRender: false,
                priority: undefined
            } });
    };
    PageStore.prototype._getInitialSiteChrome = function (pageContext) {
        return Object(_ms_odsp_datasources_lib_DesignPackage__WEBPACK_IMPORTED_MODULE_6__["getCurrentChromeOptions"])(pageContext);
    };
    PageStore._logSource = _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_5__["_LogSource"].create('sp-pages-core:PageStore');
    return PageStore;
}());
/* harmony default export */ __webpack_exports__["default"] = (PageStore);


/***/ }),

/***/ "Bqrk":
/*!*****************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/prop-types@15.7.2/node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ "CuBB":
/*!**********************************************************!*\
  !*** ./lib/core/components/chrome/PreloadedComponent.js ***!
  \**********************************************************/
/*! exports provided: PreloadedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreloadedComponent", function() { return PreloadedComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @microsoft/office-ui-fabric-react-bundle */ "KL1q");
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _microsoft_sp_loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @microsoft/sp-loader */ "I6O9");
/* harmony import */ var _microsoft_sp_loader__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_loader__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @microsoft/sp-diagnostics */ "ut3N");
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_4__);





var PreloadedComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(PreloadedComponent, _super);
    function PreloadedComponent(props) {
        var _this = _super.call(this, props) || this;
        _this._logSource = _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_4__["_LogSource"].create(_this.props.componentName);
        _this.state = {};
        return _this;
    }
    PreloadedComponent.prototype.UNSAFE_componentWillMount = function () {
        // start loading @ms/sp-pages-preload before mount
        if (!this._tryLoadAlreadyLoadedComponent()) {
            this._loadComponentPromise = this._loadComponent();
        }
    };
    PreloadedComponent.prototype.componentDidMount = function () {
        var _this = this;
        // now once the component has mounted, finish resolving the load component promise
        // this is done to minimize the time the user sees the blank/placeholder chrome
        this._loadComponentPromise &&
            this._loadComponentPromise
                .then(function (module) {
                _this._onLoad(module);
            })
                .catch(function (e) {
                _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_4__["_TraceLogger"].logError(_this._logSource, e);
            });
    };
    PreloadedComponent.prototype.render = function () {
        return this.state.preloadedComponent
            ? react__WEBPACK_IMPORTED_MODULE_1__["createElement"](this.state.preloadedComponent, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.props.componentProps))
            : this.props.placeHolder || null; // tslint:disable-line:no-null-keyword
    };
    PreloadedComponent.prototype._onLoad = function (module) {
        this.setState({
            preloadedComponent: module[this.props.componentName]
        });
    };
    PreloadedComponent.prototype._tryLoadAlreadyLoadedComponent = function () {
        var manifest = _microsoft_sp_loader__WEBPACK_IMPORTED_MODULE_3__["SPComponentLoader"].tryGetManifestById('1e2cdec9-1360-4295-b73c-98d6f51866d5');
        if (manifest) {
            var component = _microsoft_sp_loader__WEBPACK_IMPORTED_MODULE_3__["SPComponentLoader"].tryGetLoadedComponent(manifest);
            if (component) {
                this._onLoad(component);
                return true;
            }
        }
        return false;
    };
    PreloadedComponent.prototype._loadComponent = function () {
        return _microsoft_sp_loader__WEBPACK_IMPORTED_MODULE_3__["SPComponentLoader"].loadComponentById('1e2cdec9-1360-4295-b73c-98d6f51866d5');
    };
    return PreloadedComponent;
}(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_2__["BaseComponent"]));



/***/ }),

/***/ "DAKc":
/*!***************************************************************!*\
  !*** ./lib/core/components/chrome/EditNav/DeferredEditNav.js ***!
  \***************************************************************/
/*! exports provided: DeferredEditNav */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeferredEditNav", function() { return DeferredEditNav; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _PreloadedComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../PreloadedComponent */ "CuBB");
/**
 * @copyright Microsoft Corporation. All rights reserved.
 */


/**
 * @internal
 * EditNav component used by navigation controls such as LeftNav, HorizontalNav and Footer to edit
 * navigation data.
 */
// tslint:disable-next-line:variable-name
var DeferredEditNav = function (props) {
    /* tslint:disable:no-string-literal */
    if (props.chromeComponents && props.chromeComponents['DeferredEditNav']) {
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](props.chromeComponents['DeferredEditNav'], props // tslint:disable-line:no-any
        );
    }
    /* tslint:enable:no-string-literal */
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_PreloadedComponent__WEBPACK_IMPORTED_MODULE_1__["PreloadedComponent"], { componentName: 'DeferredEditNav', componentProps: props });
};


/***/ }),

/***/ "DRdk":
/*!******************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-datasources@45.13.10_e509c819ab980023b76e5746ec0fc9e2/node_modules/@ms/odsp-datasources/lib/interfaces/WebTemplateType.js ***!
  \******************************************************************************************************************************************************************************************/
/*! exports provided: WebTemplateType, isTeamSiteLike, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebTemplateType", function() { return WebTemplateType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isTeamSiteLike", function() { return isTeamSiteLike; });
// OneDrive:IgnoreCodeCoverage
/**
 * SharePoint SPWeb (subsite) template values, from WebTemplate in sts\stsom\Core\spwebtemplate.cs
 */
var WebTemplateType;
(function (WebTemplateType) {
    WebTemplateType[WebTemplateType["invalid"] = -1] = "invalid";
    /** Team collaboration site */
    WebTemplateType[WebTemplateType["teamSite"] = 1] = "teamSite";
    /** Meeting workspace site */
    WebTemplateType[WebTemplateType["meetings"] = 2] = "meetings";
    WebTemplateType[WebTemplateType["centralAdmin"] = 3] = "centralAdmin";
    WebTemplateType[WebTemplateType["wiki"] = 4] = "wiki";
    WebTemplateType[WebTemplateType["documentCenter"] = 7] = "documentCenter";
    WebTemplateType[WebTemplateType["blog"] = 9] = "blog";
    WebTemplateType[WebTemplateType["tenantAdmin"] = 16] = "tenantAdmin";
    WebTemplateType[WebTemplateType["app"] = 17] = "app";
    WebTemplateType[WebTemplateType["appCatalog"] = 18] = "appCatalog";
    /** Mysite personal web */
    WebTemplateType[WebTemplateType["mySite"] = 21] = "mySite";
    WebTemplateType[WebTemplateType["subgroup"] = 39] = "subgroup";
    WebTemplateType[WebTemplateType["publishingPortal"] = 52] = "publishingPortal";
    WebTemplateType[WebTemplateType["mySiteHost"] = 54] = "mySiteHost";
    WebTemplateType[WebTemplateType["enterpriseWiki"] = 56] = "enterpriseWiki";
    WebTemplateType[WebTemplateType["group"] = 64] = "group";
    /** POINTPUBLISHINGPERSONAL#1 aka Blog site */
    WebTemplateType[WebTemplateType["pointPublishingPersonal"] = 66] = "pointPublishingPersonal";
    /** SITEPAGEPUBLISHING#0 aka Communications site */
    WebTemplateType[WebTemplateType["sitePagePublishing"] = 68] = "sitePagePublishing";
    WebTemplateType[WebTemplateType["teamChannel"] = 69] = "teamChannel";
    WebTemplateType[WebTemplateType["projectWebAppSite"] = 6221] = "projectWebAppSite";
    WebTemplateType[WebTemplateType["contentCenter"] = 6001] = "contentCenter";
})(WebTemplateType || (WebTemplateType = {}));
/**
 * Returns true if the SPWeb Site is not ODB or Group site.
 */
function isTeamSiteLike(template) {
    'use strict';
    var templateEnum = Number(template);
    return templateEnum !== WebTemplateType.mySite && templateEnum !== WebTemplateType.group;
}
/* harmony default export */ __webpack_exports__["default"] = (WebTemplateType);
//# sourceMappingURL=WebTemplateType.js.map

/***/ }),

/***/ "EMEJ":
/*!*********************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/invariant@2.2.4/node_modules/invariant/browser.js ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var invariant = function(condition, format, a, b, c, d, e, f) {
  if (true) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  }

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error(
        'Minified exception occurred; use the non-minified dev environment ' +
        'for the full error message and additional helpful warnings.'
      );
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(
        format.replace(/%s/g, function() { return args[argIndex++]; })
      );
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
};

module.exports = invariant;


/***/ }),

/***/ "FElI":
/*!*********************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/history@4.7.2/node_modules/history/es/DOMUtils.js ***!
  \*********************************************************************************************************/
/*! exports provided: canUseDOM, addEventListener, removeEventListener, getConfirmation, supportsHistory, supportsPopStateOnHashChange, supportsGoWithoutReloadUsingHash, isExtraneousPopstateEvent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "canUseDOM", function() { return canUseDOM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addEventListener", function() { return addEventListener; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeEventListener", function() { return removeEventListener; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getConfirmation", function() { return getConfirmation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "supportsHistory", function() { return supportsHistory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "supportsPopStateOnHashChange", function() { return supportsPopStateOnHashChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "supportsGoWithoutReloadUsingHash", function() { return supportsGoWithoutReloadUsingHash; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isExtraneousPopstateEvent", function() { return isExtraneousPopstateEvent; });
var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

var addEventListener = function addEventListener(node, event, listener) {
  return node.addEventListener ? node.addEventListener(event, listener, false) : node.attachEvent('on' + event, listener);
};

var removeEventListener = function removeEventListener(node, event, listener) {
  return node.removeEventListener ? node.removeEventListener(event, listener, false) : node.detachEvent('on' + event, listener);
};

var getConfirmation = function getConfirmation(message, callback) {
  return callback(window.confirm(message));
}; // eslint-disable-line no-alert

/**
 * Returns true if the HTML5 history API is supported. Taken from Modernizr.
 *
 * https://github.com/Modernizr/Modernizr/blob/master/LICENSE
 * https://github.com/Modernizr/Modernizr/blob/master/feature-detects/history.js
 * changed to avoid false negatives for Windows Phones: https://github.com/reactjs/react-router/issues/586
 */
var supportsHistory = function supportsHistory() {
  var ua = window.navigator.userAgent;

  if ((ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) && ua.indexOf('Mobile Safari') !== -1 && ua.indexOf('Chrome') === -1 && ua.indexOf('Windows Phone') === -1) return false;

  return window.history && 'pushState' in window.history;
};

/**
 * Returns true if browser fires popstate on hash change.
 * IE10 and IE11 do not.
 */
var supportsPopStateOnHashChange = function supportsPopStateOnHashChange() {
  return window.navigator.userAgent.indexOf('Trident') === -1;
};

/**
 * Returns false if using go(n) with hash history causes a full page reload.
 */
var supportsGoWithoutReloadUsingHash = function supportsGoWithoutReloadUsingHash() {
  return window.navigator.userAgent.indexOf('Firefox') === -1;
};

/**
 * Returns true if a given popstate event is an extraneous WebKit event.
 * Accounts for the fact that Chrome on iOS fires real popstate events
 * containing undefined state when pressing the back button.
 */
var isExtraneousPopstateEvent = function isExtraneousPopstateEvent(event) {
  return event.state === undefined && navigator.userAgent.indexOf('CriOS') === -1;
};

/***/ }),

/***/ "FW/H":
/*!*****************************************!*\
  !*** ./lib/core/BasePageApplication.js ***!
  \*****************************************/
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
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @microsoft/office-ui-fabric-react-bundle */ "KL1q");
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _microsoft_sp_application_base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @microsoft/sp-application-base */ "GPet");
/* harmony import */ var _microsoft_sp_application_base__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_application_base__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _microsoft_sp_loader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @microsoft/sp-loader */ "I6O9");
/* harmony import */ var _microsoft_sp_loader__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_loader__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ms/odsp-utilities-bundle */ "y88i");
/* harmony import */ var _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _services_custom_a11y_A11yService__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/custom/a11y/A11yService */ "9sgm");
/* harmony import */ var _utilities_Flights__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utilities/Flights */ "yCLn");
/* harmony import */ var _PageApplicationContext__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./PageApplicationContext */ "X36I");
/* harmony import */ var _components_store_PageStore__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/store/PageStore */ "AXdo");
/* harmony import */ var _components_suiteNav_PageSuiteNavConfigurationManager__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/suiteNav/PageSuiteNavConfigurationManager */ "K5zV");
/* harmony import */ var _services_suiteNav_PageSuiteNavConfigurationService__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/suiteNav/PageSuiteNavConfigurationService */ "Qp6t");
/* harmony import */ var _components_router_PageApplicationRouter__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/router/PageApplicationRouter */ "0iU6");
/* harmony import */ var _services_render_RenderingService__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./services/render/RenderingService */ "tDL/");
/* harmony import */ var _services_router_RoutingService__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./services/router/RoutingService */ "T2Nm");
/* harmony import */ var _utilities_ServiceUtility__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./utilities/ServiceUtility */ "g4+3");
/* harmony import */ var _services_store_StoreManagementService__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./services/store/StoreManagementService */ "A/Pf");
/* harmony import */ var _SPPagesCore_resx__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../SPPagesCore.resx */ "hWnv");
var _SPPagesCore_resx__WEBPACK_IMPORTED_MODULE_19___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../SPPagesCore.resx */ "hWnv", 1);
/* harmony import */ var _executors_PostRenderExecutor__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./executors/PostRenderExecutor */ "flPb");
/* harmony import */ var _utilities_StoreUtility__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./utilities/StoreUtility */ "XF7y");
/* harmony import */ var _utilities_Killswitches__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./utilities/Killswitches */ "XjSx");
/**
 * @copyright Microsoft Corporation. All rights reserved.
 */























/**
 * Represents a BasePageApplication that incorporates a page lifecycle and
 * provides services and functionalities required by all modern page-based
 * applications.
 *
 * @internal
 */
var BasePageApplication = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(BasePageApplication, _super);
    function BasePageApplication() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Utility function to build an empty page configuration
     *
     * @returns an empty page configuration
     */
    BasePageApplication.buildEmptyPageConfiguration = function () {
        /* tslint:disable:no-any */
        return {
            isPageApplicationEnabled: false,
            getRenderConfig: function () { return ({}); },
            getSuiteNavConfig: function (data) { return ({}); },
            getRouteConfig: function () { return ({}); },
            getStoreConfig: function () { return ({}); }
        };
        /* tslint:enable:no-any */
    };
    /**
     * Instructs the page-based application to undertake page preload operations if any including
     * loading page specific context, preloading required components etc.
     * @virtual
     *
     * @remarks
     * Override this method if applicable
     */
    BasePageApplication.prototype.onBeforePageLoad = function () {
        // load components before preloaded components such as NewsWebPart
        // these are only components required for initial page rendering such as site header/header extension
        this.preLoadPageComponents();
        if (!_utilities_Killswitches__WEBPACK_IMPORTED_MODULE_22__["default"].loadAlternativeUrlsInBasePageApplicationKSActivated()) {
            this._loadAlternativeUrlMap();
        }
        // check if snapshots are available
        var chromeDiv = document.getElementById('chromeDiv');
        if (chromeDiv) {
            this._pageSnapShot = chromeDiv.innerHTML;
        }
        return Promise.resolve();
    };
    /**
     * Instructs the page-based application to undertake an page post load operations if any
     * including telemetry, performance markers etc.
     * @virtual
     *
     * @remarks
     * Override this method if applicable
     */
    BasePageApplication.prototype.onAfterPageLoad = function () {
        /** EMPTY BLOCK **/
    };
    /**
     * Instructs the page based application to undertake prerender operations
     * @virtual
     *
     * @remarks
     * Override this method if applicable
     */
    BasePageApplication.prototype.onBeforePageRender = function () {
        if (_utilities_Flights__WEBPACK_IMPORTED_MODULE_9__["default"].isServiceWorkerEnabled()) {
            var splash = document.getElementById('splash');
            if (splash) {
                splash.remove();
            }
        }
    };
    /**
     * Instructs the page based application to undertake post-render operations.
     * @virtual
     *
     * @remarks
     * Override this method if applicable
     */
    BasePageApplication.prototype.onAfterPageRender = function () {
        /** EMPTY BLOCK **/
    };
    /**
     * Instructs the page-based application to undertake clean up tasks if any before
     * we dispose the application. The application chrome is available at this stage
     * @virtual
     *
     * @remarks
     * Override this method if applicable
     */
    BasePageApplication.prototype.onBeforePageUnload = function () {
        /** EMPTY BLOCK **/
    };
    /**
     * Instructs the page-based application to undertake clean up tasks if any before
     * we dispose the application. The application chrome is no longer available
     * @virtual
     *
     * @remarks
     * Override this method if applicable
     */
    BasePageApplication.prototype.onBeforePageDispose = function () {
        /** EMPTY BLOCK **/
    };
    /**
     * {@inheritDoc @microsoft/sp-application-base#BaseApplication.suiteNavConfiguration}
     */
    BasePageApplication.prototype.suiteNavConfiguration = function () {
        if (!this.context.pageConfiguration.isPageApplicationEnabled) {
            return _super.prototype.suiteNavConfiguration.call(this);
        }
        return this.context.fetchService(_services_suiteNav_PageSuiteNavConfigurationService__WEBPACK_IMPORTED_MODULE_13__["default"].serviceKey).suiteNavConfigManager;
    };
    /**
     * Gets the default page application context.
     *
     * @param contextParameters - Represents the application context
     * @virtual
     * @returns A PageApplication context
     *
     * @remarks
     * Override this method if page needs to extend the default PageApplicationContext
     */
    BasePageApplication.prototype.getPageApplicationContext = function (contextParameters) {
        return new _PageApplicationContext__WEBPACK_IMPORTED_MODULE_10__["default"](contextParameters);
    };
    /**
     * Gets the default page rendering component.
     *
     * @param configData - Represents the render configuration data
     * @param context - Represents the application context
     * @virtual
     * @returns A page rendering component
     *
     * @remarks
     * This method needs to be implemented by applications that are consume
     * page-based application services.
     */
    BasePageApplication.prototype.getPageApplicationLayout = function (configData, context) {
        throw new Error('Needs to be implemented by the derived application!');
    };
    /**
     * Gets the default page store component.
     *
     * @param configData - Represents the store configuration data
     * @virtual
     * @returns A page store component
     *
     * @remarks
     * Override this method if default implementation needs to be extended
     */
    BasePageApplication.prototype.getPageStore = function (configData) {
        return new _components_store_PageStore__WEBPACK_IMPORTED_MODULE_11__["default"](configData);
    };
    /**
     * Gets the default page router component.
     *
     * @param configData - Represents the route configuration data
     * @virtual
     * @returns A page router component
     *
     * @remarks
     * Override this method if default implementation needs to be extended
     */
    BasePageApplication.prototype.getPageRouter = function (configData) {
        return _components_router_PageApplicationRouter__WEBPACK_IMPORTED_MODULE_14__["default"];
    };
    /**
     * Gets the default suite nav configuration manager.
     *
     * @param configData - Represents the page specific suite nav configuration data
     * @virtual
     * @returns A page suite nav configuration manager
     *
     * @remarks
     * Override this method if default implementation needs to be extended
     */
    BasePageApplication.prototype.getPageSuiteNavConfigurationManager = function (configData) {
        return new _components_suiteNav_PageSuiteNavConfigurationManager__WEBPACK_IMPORTED_MODULE_12__["default"](configData);
    };
    BasePageApplication.prototype._registerCoreExecutors = function () {
        this._postRenderExecutor = new _executors_PostRenderExecutor__WEBPACK_IMPORTED_MODULE_20__["default"]();
        this._unsubscribePostRenderExecutor = _utilities_StoreUtility__WEBPACK_IMPORTED_MODULE_21__["default"].subscribe(this.context.pageApplicationServiceScope, this._postRenderExecutor.execute, false);
    };
    /**
     * Loads additional services specific to the page-based application before initiating application render.
     *
     * @returns A collection of page services that aren't part of the core framework
     * @virtual
     * @remarks
     * Override this method to load additional page services before initiating application render.
     */
    BasePageApplication.prototype.loadAdditionalServices = function () {
        return [];
    };
    /**
     * {@inheritDoc @microsoft/sp-application-base#BaseApplication._getApplicationContext}
     */
    BasePageApplication.prototype._getApplicationContext = function (contextParameters) {
        return this.getPageApplicationContext(contextParameters);
    };
    /**
     * {@inheritdoc @microsoft/sp-application-base#BaseApplication.onBeforeLoad}
     */
    BasePageApplication.prototype.onBeforeLoad = function () {
        var _this = this;
        this.context.pageConfiguration = this.loadPageConfiguration();
        return this.onBeforePageLoad().then(function () { return Promise.all(_this._loadPageServices()); });
    };
    /**
     * Invoked by SPFx during application load.
     * @override
     *
     * @remarks
     * The page based application overrides the application load and breaks it down into discrete
     * page load lifecycle operations including pre-loading required page components,
     * loading page services, and instructing the application on completion of load operation
     */
    BasePageApplication.prototype.onLoad = function () {
        var _this = this;
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_5__["Validate"].isNotNullOrUndefined(this.context, 'context');
        this._disposed = false;
        if (_microsoft_sp_loader__WEBPACK_IMPORTED_MODULE_6__["_SPLoaderFlights"]._isMinimalStartFlightEnabled()) {
            if (!this.context.pageConfiguration.isPageApplicationEnabled) {
                return _super.prototype.onLoad.call(this);
            }
            return new Promise(function (resolve, reject) {
                try {
                    _this.onAfterPageLoad();
                    _this.context.pageApplicationServiceScope.finish();
                    resolve();
                }
                catch (e) {
                    reject(new Error(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_5__["Text"].format(_SPPagesCore_resx__WEBPACK_IMPORTED_MODULE_19__["pageFailedToLoadService"], e)));
                }
            });
        }
        else {
            return this.onBeforePageLoad()
                .then(function () {
                _this.context.pageConfiguration = _this.loadPageConfiguration();
                if (!_this.context.pageConfiguration.isPageApplicationEnabled) {
                    return _super.prototype.onLoad.call(_this);
                }
                return Promise.all(_this._loadPageServices())
                    .then(function () {
                    _this.onAfterPageLoad();
                    _this.context.pageApplicationServiceScope.finish();
                })
                    .catch(function (e) {
                    throw new Error(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_5__["Text"].format(_SPPagesCore_resx__WEBPACK_IMPORTED_MODULE_19__["pageFailedToLoadService"], e));
                });
            })
                .catch(function (e) {
                throw new Error(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_5__["Text"].format(_SPPagesCore_resx__WEBPACK_IMPORTED_MODULE_19__["pageFailedToPreload"], e));
            });
        }
    };
    /**
     * Invoked by SPFx after application has loaded to begin the render process
     * @override
     *
     * @remarks
     * The page based application overrides the application render and breaks it down into discrete
     * page render lifecycle operations including pre-render tasks, rendering the page
     * and instructing the application to perform post render operations
     */
    BasePageApplication.prototype.onRender = function () {
        var _this = this;
        if (!this.context.pageConfiguration.isPageApplicationEnabled) {
            _super.prototype.onRender.call(this);
        }
        else {
            this.onBeforePageRender();
            // Provision the A11yManager if configured by the page-based application
            var a11yService = this.context.fetchService(_services_custom_a11y_A11yService__WEBPACK_IMPORTED_MODULE_8__["default"].serviceKey);
            if (a11yService) {
                a11yService.createA11yManager(this.domElement);
            }
            this._registerCoreExecutors();
            var elem = react__WEBPACK_IMPORTED_MODULE_1__["createElement"](this.context.fetchService(_services_router_RoutingService__WEBPACK_IMPORTED_MODULE_16__["default"].serviceKey).router, {
                key: this.context.manifest.id || '',
                layout: this.context.fetchService(_services_render_RenderingService__WEBPACK_IMPORTED_MODULE_15__["default"].serviceKey).renderer,
                navigate: this._navigate.bind(this),
                navigateToPreloadedData: function (preloadedData) {
                    return _this.context.navigator.navigateToPreloadedData(preloadedData);
                },
                invalidate: function (url) { return _this.context.navigator.invalidate(url); },
                routeConfig: this.context.pageConfiguration.getRouteConfig(),
                getRenderConfig: this.context.pageConfiguration.getRenderConfig,
                serviceScope: this.context.pageApplicationServiceScope
            });
            // Render the page-based application
            if (_utilities_Flights__WEBPACK_IMPORTED_MODULE_9__["default"].isHydrationEnabled && this._pageSnapShot) {
                react_dom__WEBPACK_IMPORTED_MODULE_2__["hydrate"](elem, this.domElement, this.onAfterPageRender);
            }
            else {
                react_dom__WEBPACK_IMPORTED_MODULE_2__["render"](elem, this.domElement, this.onAfterPageRender);
                if (_utilities_Flights__WEBPACK_IMPORTED_MODULE_9__["default"].isHydrationEnabled) {
                    var queueComponentSnapshot = this.context.pageConfiguration.getRenderConfig().queueComponentSnapshot;
                    if (queueComponentSnapshot) {
                        queueComponentSnapshot('Chrome', react__WEBPACK_IMPORTED_MODULE_1__["createElement"](this.context.fetchService(_services_router_RoutingService__WEBPACK_IMPORTED_MODULE_16__["default"].serviceKey).router, {
                            key: this.context.manifest.id || '',
                            renderToString: true,
                            layout: this.context.fetchService(_services_render_RenderingService__WEBPACK_IMPORTED_MODULE_15__["default"].serviceKey).renderer,
                            navigateToPreloadedData: function (preloadedData) {
                                return _this.context.navigator.navigateToPreloadedData(preloadedData);
                            },
                            navigate: this._navigate.bind(this),
                            invalidate: function (url) { return _this.context.navigator.invalidate(url); },
                            routeConfig: this.context.pageConfiguration.getRouteConfig(),
                            getRenderConfig: this.context.pageConfiguration.getRenderConfig,
                            serviceScope: this.context.pageApplicationServiceScope
                        }));
                    }
                }
            }
        }
    };
    /**
     * This is called by SPFx before the application is disposed.
     * @override
     */
    BasePageApplication.prototype.onUnload = function () {
        if (!this.context.pageConfiguration.isPageApplicationEnabled) {
            _super.prototype.onUnload.call(this);
        }
        else {
            this.onBeforePageUnload();
        }
    };
    /**
     * This is called by SPFx at the end of the application lifecycle.
     * @override
     *
     * @remarks
     * SPFx BaseApplication should invoke onDispose on window.unload
     */
    BasePageApplication.prototype.onDispose = function () {
        if (this._disposed) {
            return;
        }
        if (!this.context.pageConfiguration.isPageApplicationEnabled) {
            _super.prototype.onDispose.call(this);
        }
        else {
            this.onBeforePageDispose();
            this.context.dispose();
            this._unsubscribePostRenderExecutor && this._unsubscribePostRenderExecutor();
        }
        this._disposed = true;
    };
    /**
     * Preload components that are required for initial page rendering.
     * @virtual
     */
    BasePageApplication.prototype.preLoadPageComponents = function () {
        _microsoft_sp_loader__WEBPACK_IMPORTED_MODULE_6__["SPComponentLoader"].loadComponentById('1e2cdec9-1360-4295-b73c-98d6f51866d5').catch(function (_) {
            /* no-op */
        });
    };
    /**
     * Loads the services required by the page based application. This includes both the core services
     * that are required by the page lifecycle as well as custom services that are application specific
     */
    BasePageApplication.prototype._loadPageServices = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(this._loadCoreServices(), this.loadAdditionalServices());
    };
    BasePageApplication.prototype._loadCoreServices = function () {
        var corePageServices = [];
        // Layout rendering service
        corePageServices.push(this._loadRenderingService());
        // Store management Service
        corePageServices.push(this._loadStoreManagementService());
        // Routing service
        corePageServices.push(this._loadRoutingService());
        // Suite Nav configuration service
        corePageServices.push(this._loadSuiteNavConfigService());
        // A11y Manager service
        if (this.context.pageConfiguration.getA11yManagerConfig) {
            var a11yConfig = this.context.pageConfiguration.getA11yManagerConfig();
            corePageServices.push(this._loadA11yService(a11yConfig));
        }
        return corePageServices;
    };
    BasePageApplication.prototype._loadRenderingService = function () {
        var _this = this;
        var renderConfig = this.context.pageConfiguration.getRenderConfig();
        return _utilities_ServiceUtility__WEBPACK_IMPORTED_MODULE_17__["default"].loadService(renderConfig, function (config) {
            return new _services_render_RenderingService__WEBPACK_IMPORTED_MODULE_15__["default"](_this.context.pageApplicationServiceScope);
        }, function (svc) {
            var renderSvc = _this.context.registerService(svc);
            renderSvc.createPageRenderer(renderConfig, function (config) {
                return _this.getPageApplicationLayout(config, _this.context);
            });
            return renderSvc;
        }, function (err) {
            return new Error(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_5__["Text"].format(_SPPagesCore_resx__WEBPACK_IMPORTED_MODULE_19__["failureToLoadRenderingService"], err));
        });
    };
    BasePageApplication.prototype._loadStoreManagementService = function () {
        var _this = this;
        var storeConfig = this.context.pageConfiguration.getStoreConfig();
        return _utilities_ServiceUtility__WEBPACK_IMPORTED_MODULE_17__["default"].loadService(storeConfig, function (config) {
            return new _services_store_StoreManagementService__WEBPACK_IMPORTED_MODULE_18__["default"](_this.context.pageApplicationServiceScope);
        }, function (svc) {
            var storeSvc = _this.context.registerService(svc);
            storeSvc.createStore(storeConfig, function (config) { return _this.getPageStore(config); });
            return storeSvc;
        }, function (err) {
            return new Error(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_5__["Text"].format(_SPPagesCore_resx__WEBPACK_IMPORTED_MODULE_19__["failureToLoadStoreManagementService"], err));
        });
    };
    BasePageApplication.prototype._loadRoutingService = function () {
        var _this = this;
        var routeConfig = this.context.pageConfiguration.getRouteConfig();
        return _utilities_ServiceUtility__WEBPACK_IMPORTED_MODULE_17__["default"].loadService(routeConfig, function (config) {
            return new _services_router_RoutingService__WEBPACK_IMPORTED_MODULE_16__["default"](_this.context.pageApplicationServiceScope);
        }, function (svc) {
            var routeSvc = _this.context.registerService(svc);
            routeSvc.createRouter(routeConfig, function (config) { return _this.getPageRouter(config); });
            return routeSvc;
        }, function (err) {
            return new Error(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_5__["Text"].format(_SPPagesCore_resx__WEBPACK_IMPORTED_MODULE_19__["failureToLoadRoutingService"], err));
        });
    };
    BasePageApplication.prototype._loadSuiteNavConfigService = function () {
        var _this = this;
        var appSuiteNavConfig = this._getSuiteNavManagerConfigurationData();
        appSuiteNavConfig.sharedComponents = { React: react__WEBPACK_IMPORTED_MODULE_1__, ReactDOM: react_dom__WEBPACK_IMPORTED_MODULE_2__ };
        var pageSuiteNavConfig = this.context.pageConfiguration.getSuiteNavConfig(appSuiteNavConfig);
        return _utilities_ServiceUtility__WEBPACK_IMPORTED_MODULE_17__["default"].loadService(pageSuiteNavConfig, function (config) {
            return new _services_suiteNav_PageSuiteNavConfigurationService__WEBPACK_IMPORTED_MODULE_13__["default"](_this.context.pageApplicationServiceScope);
        }, function (svc) {
            var suiteSvc = _this.context.registerService(svc);
            suiteSvc.createSuiteNavConfigManager(pageSuiteNavConfig, function (config) {
                return _this.getPageSuiteNavConfigurationManager(config);
            });
            return suiteSvc;
        }, function (err) {
            return new Error(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_5__["Text"].format(_SPPagesCore_resx__WEBPACK_IMPORTED_MODULE_19__["failureToloadSuiteNavManager"], err));
        });
    };
    BasePageApplication.prototype._loadA11yService = function (a11yConfig) {
        var _this = this;
        return _utilities_ServiceUtility__WEBPACK_IMPORTED_MODULE_17__["default"].loadService(a11yConfig, function (config) {
            return new _services_custom_a11y_A11yService__WEBPACK_IMPORTED_MODULE_8__["default"](_this.context.pageApplicationServiceScope);
        }, function (svc) {
            var a11ySvc = _this.context.registerService(svc);
            a11ySvc.componentConfiguration = a11yConfig;
            return a11ySvc;
        }, function (err) {
            return new Error(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_5__["Text"].format(_SPPagesCore_resx__WEBPACK_IMPORTED_MODULE_19__["failureToloadA11yManager"], err));
        });
    };
    /**
     * Loads alternative URL map, e.g for CDNs.
     * It first tries to load from AlternativeUrlMap in preloaded data, but as a fallback it will load from PageContext.
     */
    BasePageApplication.prototype._loadAlternativeUrlMap = function () {
        var _a, _b, _c, _d, _e, _f;
        var alternativeUrlMap = (_c = (_b = (_a = this.context.preloadedData) === null || _a === void 0 ? void 0 : _a.page) === null || _b === void 0 ? void 0 : _b.Content) === null || _c === void 0 ? void 0 : _c.AlternativeUrlMap;
        // Fallback to using PageContext for user photo URL
        // This is needed for apps like system pages that do not pass alternativeUrlMap in preload data
        // Ideally, server should send it, tracking task: https://onedrive.visualstudio.com/WEX!/_workitems/edit/1029433
        if (!((_d = alternativeUrlMap) === null || _d === void 0 ? void 0 : _d.UserPhotoAspx) && ((_f = (_e = this.context.pageContext) === null || _e === void 0 ? void 0 : _e.legacyPageContext) === null || _f === void 0 ? void 0 : _f.userPhotoCdnBaseUrl)) {
            alternativeUrlMap = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, alternativeUrlMap), { UserPhotoAspx: this.context.pageContext.legacyPageContext.userPhotoCdnBaseUrl });
        }
        if (alternativeUrlMap) {
            _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_7__["SPAlternativeUrls"].updateMap(alternativeUrlMap);
        }
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_3__["autobind"]
    ], BasePageApplication.prototype, "onAfterPageRender", null);
    return BasePageApplication;
}(_microsoft_sp_application_base__WEBPACK_IMPORTED_MODULE_4__["BaseApplication"]));
/* harmony default export */ __webpack_exports__["default"] = (BasePageApplication);


/***/ }),

/***/ "FWZX":
/*!***********************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/value-equal@0.4.0/node_modules/value-equal/index.js ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function valueEqual(a, b) {
  if (a === b) return true;

  if (a == null || b == null) return false;

  if (Array.isArray(a)) {
    return Array.isArray(b) && a.length === b.length && a.every(function (item, index) {
      return valueEqual(item, b[index]);
    });
  }

  var aType = typeof a === 'undefined' ? 'undefined' : _typeof(a);
  var bType = typeof b === 'undefined' ? 'undefined' : _typeof(b);

  if (aType !== bType) return false;

  if (aType === 'object') {
    var aValue = a.valueOf();
    var bValue = b.valueOf();

    if (aValue !== a || bValue !== b) return valueEqual(aValue, bValue);

    var aKeys = Object.keys(a);
    var bKeys = Object.keys(b);

    if (aKeys.length !== bKeys.length) return false;

    return aKeys.every(function (key) {
      return valueEqual(a[key], b[key]);
    });
  }

  return false;
}

/* harmony default export */ __webpack_exports__["default"] = (valueEqual);

/***/ }),

/***/ "GPet":
/*!*************************************************!*\
  !*** external "@microsoft/sp-application-base" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_GPet__;

/***/ }),

/***/ "GQeK":
/*!***************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/isarray@0.0.1/node_modules/isarray/index.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = Array.isArray || function (arr) {
  return Object.prototype.toString.call(arr) == '[object Array]';
};


/***/ }),

/***/ "GlwB":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-datasources@45.13.10_e509c819ab980023b76e5746ec0fc9e2/node_modules/@ms/odsp-datasources/lib/interfaces/ISpPageContext.js ***!
  \*****************************************************************************************************************************************************************************************/
/*! exports provided: SiteResourceQuotaState, SearchBoxInNavBarType, TeamsChannelType, SearchScopeType, SPWebPropertyFlags2, DEFAULT_LOGO_URL, getServerUrl, getSafeWebServerRelativeUrl, isGroupWebContext, isRootWebContext, isTeamsRootWebContext, isModernTemplate, isHomePlusHubWithExtendedHeader, isHomePlusHub, isHomeSite, isAnonymousOrGuest, shouldLoadAppBar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SiteResourceQuotaState", function() { return SiteResourceQuotaState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchBoxInNavBarType", function() { return SearchBoxInNavBarType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamsChannelType", function() { return TeamsChannelType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchScopeType", function() { return SearchScopeType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SPWebPropertyFlags2", function() { return SPWebPropertyFlags2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_LOGO_URL", function() { return DEFAULT_LOGO_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getServerUrl", function() { return getServerUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSafeWebServerRelativeUrl", function() { return getSafeWebServerRelativeUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isGroupWebContext", function() { return isGroupWebContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isRootWebContext", function() { return isRootWebContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isTeamsRootWebContext", function() { return isTeamsRootWebContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isModernTemplate", function() { return isModernTemplate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isHomePlusHubWithExtendedHeader", function() { return isHomePlusHubWithExtendedHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isHomePlusHub", function() { return isHomePlusHub; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isHomeSite", function() { return isHomeSite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isAnonymousOrGuest", function() { return isAnonymousOrGuest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shouldLoadAppBar", function() { return shouldLoadAppBar; });
/* harmony import */ var _models_chrome_ChromeOptions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/chrome/ChromeOptions */ "Vb17");

/**
 *   A value indicating the state of the reqource quota for a site.
 */
var SiteResourceQuotaState;
(function (SiteResourceQuotaState) {
    /** No quota issues */
    SiteResourceQuotaState[SiteResourceQuotaState["NoWarning"] = 0] = "NoWarning";
    /** Close to reaching disk quota warning */
    SiteResourceQuotaState[SiteResourceQuotaState["Warning"] = 1] = "Warning";
    /** Over quota */
    SiteResourceQuotaState[SiteResourceQuotaState["OverQuota"] = 2] = "OverQuota";
})(SiteResourceQuotaState || (SiteResourceQuotaState = {}));
/**
 * Search box in nav bar
 */
var SearchBoxInNavBarType;
(function (SearchBoxInNavBarType) {
    /** Default behavior will be AllPages */
    SearchBoxInNavBarType[SearchBoxInNavBarType["Default"] = 0] = "Default";
    /** Display search box in nav bar for all pages */
    SearchBoxInNavBarType[SearchBoxInNavBarType["AllPages"] = 1] = "AllPages";
    /** Display search box in nav bar for modern pages only */
    SearchBoxInNavBarType[SearchBoxInNavBarType["ModernOnly"] = 2] = "ModernOnly";
    /** Do not display search box in nav bar */
    SearchBoxInNavBarType[SearchBoxInNavBarType["Hidden"] = 3] = "Hidden";
})(SearchBoxInNavBarType || (SearchBoxInNavBarType = {}));
/** The possible types of a Teams Channel. */
var TeamsChannelType;
(function (TeamsChannelType) {
    /** This is not a site backing a teams channel */
    TeamsChannelType[TeamsChannelType["None"] = 0] = "None";
    /** Site is backing a Private Channel */
    TeamsChannelType[TeamsChannelType["PrivateChannel"] = 1] = "PrivateChannel";
    /** Site is backing a Shared Channel */
    TeamsChannelType[TeamsChannelType["SharedChannel"] = 2] = "SharedChannel";
    /** Site is backing a Standard Channel */
    TeamsChannelType[TeamsChannelType["StandardChannel"] = 3] = "StandardChannel";
})(TeamsChannelType || (TeamsChannelType = {}));
/**
 * Search box search scope
 * When the value is Default, it follows the existing search scope rule.
 * For example, hub site has hub scope, non-hub site has site scope.
 */
var SearchScopeType;
(function (SearchScopeType) {
    SearchScopeType[SearchScopeType["Default"] = 0] = "Default";
    SearchScopeType[SearchScopeType["Tenant"] = 1] = "Tenant";
    SearchScopeType[SearchScopeType["Hub"] = 2] = "Hub";
    SearchScopeType[SearchScopeType["Site"] = 3] = "Site";
})(SearchScopeType || (SearchScopeType = {}));
/**
 * Web property flags enum
 * property name matchs SPWebPropertyFlags2 definition in sts/stsom/SPWeb.cs
 */
var SPWebPropertyFlags2;
(function (SPWebPropertyFlags2) {
    /** Indicates whether site footer is enabled in this web */
    SPWebPropertyFlags2[SPWebPropertyFlags2["FooterEnabled"] = 2] = "FooterEnabled";
    /** Indicates whether mega menu is enabled on this web */
    SPWebPropertyFlags2[SPWebPropertyFlags2["MegaMenuEnabled"] = 128] = "MegaMenuEnabled";
    /** Indicates which emphasis is assigned to the footer when combined */
    SPWebPropertyFlags2[SPWebPropertyFlags2["FooterEmphasis0"] = 256] = "FooterEmphasis0";
    SPWebPropertyFlags2[SPWebPropertyFlags2["FooterEmphasis1"] = 512] = "FooterEmphasis1";
    /** Indicates which footer layout type is selected when combined */
    SPWebPropertyFlags2[SPWebPropertyFlags2["FooterLayout0"] = 1024] = "FooterLayout0";
    SPWebPropertyFlags2[SPWebPropertyFlags2["FooterLayout1"] = 2048] = "FooterLayout1";
    SPWebPropertyFlags2[SPWebPropertyFlags2["HideTitleInHeader"] = 33554432] = "HideTitleInHeader";
})(SPWebPropertyFlags2 || (SPWebPropertyFlags2 = {}));
/** Default site logo URL */
var DEFAULT_LOGO_URL = '_layouts/15/images/siteicon.png';
/**
 * Gets the absolute URL of the server (like https://microsoft.sharepoint.com).
 * Input can be an ISpPageContext or other object containing absolute and server-relative web URLs.
 *
 * @example
 *  Returns "https://microsoft.sharepoint.com"
 *      getServerUrl({
 *          webAbsoluteUrl: "https://microsoft.sharepoint.com/sites/odsp",
 *          webServerRelativeUrl: "/sites/odsp"
 *      })
 *
 * Returns "http://server"
 *     getServerUrl({
 *          webAbsoluteUrl: "http://server",
 *          webServerRelativeUrl: "/"
 *     })
 */
function getServerUrl(pageContext) {
    'use strict';
    var webAbsoluteUrl = pageContext.webAbsoluteUrl, webServerRelativeUrl = pageContext.webServerRelativeUrl;
    // Handle cases like http://server site collection, where webServerRelativeUrl will be '/'
    return webServerRelativeUrl === '/' || webServerRelativeUrl === ''
        ? webAbsoluteUrl
        : webAbsoluteUrl.substring(0, webAbsoluteUrl.lastIndexOf(webServerRelativeUrl));
}
/**
 * In most cases, returns the webServerRelativeUrl as-is.
 * For the root web (http://server), returns ''.
 *
 * This function is needed because the root web's webServerRelativeUrl will be '/',
 * which is usually not desirable when combining with other paths. For example:
 *    Good:  '/myweb' + '/_api/contextinfo' => '/myweb/_api/contextinfo'
 *    Bad:   '/'      + '/_api/contextinfo' => '//_api/contextinfo'
 *    Fixed: ''       + '/_api/contextinfo' => '/_api/contextinfo'
 *
 * @param pageContext - An ISpPageContext or other object containing the server-relative URL of a web
 */
function getSafeWebServerRelativeUrl(pageContext) {
    'use strict';
    return pageContext.webServerRelativeUrl === '/' ? '' : pageContext.webServerRelativeUrl;
}
/**
 * Returns true if the current web is the root of a site collection associated with a group.
 * Otherwise it returns false.
 */
function isGroupWebContext(pageContext) {
    'use strict';
    return pageContext && !!pageContext.groupId && pageContext.webAbsoluteUrl === pageContext.siteAbsoluteUrl;
}
/**
 * Returns true if the current web is the root web.
 * Otherwise it returns false.
 */
function isRootWebContext(pageContext) {
    'use strict';
    return pageContext && pageContext.webAbsoluteUrl === pageContext.siteAbsoluteUrl;
}
/**
 * Returns true if the current Web is the Root Web of a Teams-connected SPSite.
 * Otherwise it returns false.
 */
function isTeamsRootWebContext(pageContext) {
    'use strict';
    return (pageContext &&
        isRootWebContext(pageContext) &&
        pageContext.groupId &&
        pageContext.isTeamsConnectedSite &&
        !pageContext.isTeamsChannelSite);
}
/**
 * Returns true if the current web templates is one of the modern templates:
 * STS#3, GROUP#0, SITEPAGEPUBLISHING#0, TEAMSCHANNEL#0/1.
 */
function isModernTemplate(pageContext) {
    var modernTemplates = [
        'STS#3',
        'GROUP#0',
        'SITEPAGEPUBLISHING#0',
        'TEAMSCHANNEL#0',
        'TEAMSCHANNEL#1'
    ];
    return modernTemplates.indexOf(pageContext.webTemplateConfiguration) !== -1;
}
/**
 * Helper function to check if current site meet these conditions:
 *     1. home site
 *     2. hub site
 *     3. with extended header layout
 * @param spPageContext page context instance
 */
function isHomePlusHubWithExtendedHeader(spPageContext) {
    return !!(spPageContext.headerLayout === _models_chrome_ChromeOptions__WEBPACK_IMPORTED_MODULE_0__["UnifiedHeaderLayout"].extended && isHomePlusHub(spPageContext));
}
/**
 * Helper function to check if current site meet these conditions:
 *     1. home site
 *     2. hub site
 */
function isHomePlusHub(spPageContext) {
    return !!(isHomeSite(spPageContext) && spPageContext.isHubSite);
}
/**
 * Helper function to check if current site is configured as a home site
 * @param spPageContext page context instance
 */
function isHomeSite(spPageContext) {
    return !!(spPageContext.companyPortalReference &&
        spPageContext.companyPortalReference.SiteId &&
        spPageContext.siteId &&
        spPageContext.siteId.indexOf(spPageContext.companyPortalReference.SiteId) >= 0);
}
/**
 * Helper function to check if the current user is anonymous or a guest of any kind.
 */
function isAnonymousOrGuest(spPageContext) {
    return !!(spPageContext.isAnonymousGuestUser ||
        spPageContext.isExternalGuestUser ||
        spPageContext.isEmailAuthenticationGuestUser ||
        spPageContext.isNativeFederatedUser);
}
/**
 * Helper function to check if the app bar should load or not in the current context.
 */
function shouldLoadAppBar(spPageContext) {
    return (!isAnonymousOrGuest(spPageContext) && spPageContext.appBarParams && !spPageContext.appBarParams.isDisabled);
}
//# sourceMappingURL=ISpPageContext.js.map

/***/ }),

/***/ "HyBu":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-datasources@45.13.10_e509c819ab980023b76e5746ec0fc9e2/node_modules/@ms/odsp-datasources/lib/dataSources/listCollection/ListTemplateType.js ***!
  \***********************************************************************************************************************************************************************************************************/
/*! exports provided: ListTemplateType, ListBaseType, isDocumentLibrary, isDocLib, isGenericList, isPromotedLinksList, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListTemplateType", function() { return ListTemplateType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListBaseType", function() { return ListBaseType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDocumentLibrary", function() { return isDocumentLibrary; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDocLib", function() { return isDocLib; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isGenericList", function() { return isGenericList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPromotedLinksList", function() { return isPromotedLinksList; });
/**
 * List template types, from SPListTemplateType in sts\Core\splist.cs.
 */
var ListTemplateType;
(function (ListTemplateType) {
    // Note: some of these are commented because they're unused, and commenting them out
    // decreases the output file size.
    ListTemplateType[ListTemplateType["invalidType"] = -1] = "invalidType";
    ListTemplateType[ListTemplateType["noListTemplate"] = 0] = "noListTemplate";
    // begin usable types
    /** Custom list */
    ListTemplateType[ListTemplateType["genericList"] = 100] = "genericList";
    ListTemplateType[ListTemplateType["documentLibrary"] = 101] = "documentLibrary";
    ListTemplateType[ListTemplateType["survey"] = 102] = "survey";
    ListTemplateType[ListTemplateType["links"] = 103] = "links";
    ListTemplateType[ListTemplateType["announcements"] = 104] = "announcements";
    ListTemplateType[ListTemplateType["contacts"] = 105] = "contacts";
    /** Calendar */
    ListTemplateType[ListTemplateType["events"] = 106] = "events";
    ListTemplateType[ListTemplateType["tasks"] = 107] = "tasks";
    // discussionBoard = 108,
    ListTemplateType[ListTemplateType["pictureLibrary"] = 109] = "pictureLibrary";
    // /** Data sources for a site */
    // dataSources = 110,
    /** Site template gallery */
    ListTemplateType[ListTemplateType["webTemplateCatalog"] = 111] = "webTemplateCatalog";
    // userInformation = 112,
    ListTemplateType[ListTemplateType["webPartCatalog"] = 113] = "webPartCatalog";
    ListTemplateType[ListTemplateType["listTemplateCatalog"] = 114] = "listTemplateCatalog";
    ListTemplateType[ListTemplateType["xmlFormLibrary"] = 115] = "xmlFormLibrary";
    ListTemplateType[ListTemplateType["masterPageCatalog"] = 116] = "masterPageCatalog";
    // noCodeWorkflows = 117,
    // /** Custom Workflow Process */
    // workflowProcess = 118,
    /** Wiki Page Library */
    ListTemplateType[ListTemplateType["webPageLibrary"] = 119] = "webPageLibrary";
    // /** Custom grid for a list */
    ListTemplateType[ListTemplateType["customGrid"] = 120] = "customGrid";
    ListTemplateType[ListTemplateType["solutionCatalog"] = 121] = "solutionCatalog";
    // noCodePublic = 122,
    ListTemplateType[ListTemplateType["themeCatalog"] = 123] = "themeCatalog";
    ListTemplateType[ListTemplateType["designCatalog"] = 124] = "designCatalog";
    ListTemplateType[ListTemplateType["appDataCatalog"] = 125] = "appDataCatalog";
    // /** Data connection library for sharing information about external data connections */
    // dataConnectionLibrary = 130,
    // workflowHistory = 140,
    /** Project Tasks */
    ListTemplateType[ListTemplateType["ganttTasks"] = 150] = "ganttTasks";
    // helpLibrary = 151,
    // accessRequest = 160,
    ListTemplateType[ListTemplateType["promotedLinks"] = 170] = "promotedLinks";
    ListTemplateType[ListTemplateType["tasksWithTimelineAndHierarchy"] = 171] = "tasksWithTimelineAndHierarchy";
    // maintenanceLogs = 175
    // Range 200-299 is used for Meetings List Template Id
    /** Meeting Series (Meeting) */
    ListTemplateType[ListTemplateType["meetings"] = 200] = "meetings";
    // /** Agenda (Meeting) */
    // agenda = 201,
    // /** Attendees (Meeting) */
    // meetingUser = 202,
    // /** Decisions (Meeting) */
    // decision = 204,
    // /** Objectives (Meeting) */
    // meetingObjective = 207,
    // /** Text Box (Meeting) */
    // textBox = 210,
    // /** Things To Bring (Meeting) */
    // thingsToBring = 211,
    // /** Workspace Pages (Meeting) */
    // homePageLibrary = 212,
    // /** Posts (Blog) */
    // posts = 301,
    // /** Comments (Blog) */
    // comments = 302,
    // /** Categories (Blog) */
    // categories = 303,
    // // Range 400-499 is used for lists that are specific to GroupBoard (Group Work Site).
    // facility = 402,
    // whereabouts = 403,
    // callTrack = 404,
    // circulation = 405,
    // timecard = 420,
    // holidays = 421,
    // IMEDic = 499,
    ListTemplateType[ListTemplateType["externalList"] = 600] = "externalList";
    ListTemplateType[ListTemplateType["mySiteDocumentLibrary"] = 700] = "mySiteDocumentLibrary";
    ListTemplateType[ListTemplateType["publishingPageLibrary"] = 850] = "publishingPageLibrary";
    ListTemplateType[ListTemplateType["publishingAsset"] = 851] = "publishingAsset";
    ListTemplateType[ListTemplateType["issueTracking"] = 1100] = "issueTracking";
    // adminTasks = 1200,
    // healthRules = 1220,
    // healthReports = 1221,
    // developerSiteDraftApps = 1230,
    ListTemplateType[ListTemplateType["contentCenterModelLibrary"] = 1328] = "contentCenterModelLibrary";
    ListTemplateType[ListTemplateType["contentCenterPrimeLibrary"] = 1329] = "contentCenterPrimeLibrary";
    ListTemplateType[ListTemplateType["contentCenterSampleLibrary"] = 1330] = "contentCenterSampleLibrary";
    ListTemplateType[ListTemplateType["contentCenterModelUsageList"] = 1331] = "contentCenterModelUsageList";
    // accessApp = 3100, // Access app entry point
    // alchemyMobileForm = 3101, // Mobile form app entry point
    // alchemyApprovalWorkflow = 3102, // Approval workflow app entry point
    // sharingLinks = 3300
})(ListTemplateType || (ListTemplateType = {}));
/**
 *  Specifies the base type for a list, from SPBaseType in sts\Core\splist.cs.
 */
var ListBaseType;
(function (ListBaseType) {
    ListBaseType[ListBaseType["invalidType"] = -1] = "invalidType";
    ListBaseType[ListBaseType["GenericList"] = 0] = "GenericList";
    ListBaseType[ListBaseType["DocumentLibrary"] = 1] = "DocumentLibrary";
})(ListBaseType || (ListBaseType = {}));
var DOCLIB_TEMPLATES = [
    // NOTE: If updating these, also update the isDocumentLibrary check in odsp-next ListViewDataPrefetch!
    ListTemplateType.mySiteDocumentLibrary,
    ListTemplateType.documentLibrary,
    ListTemplateType.pictureLibrary,
    ListTemplateType.xmlFormLibrary,
    ListTemplateType.webPageLibrary,
    ListTemplateType.publishingPageLibrary,
    ListTemplateType.publishingAsset
];
/**
 * Returns true if the list template is any type of document library:
 * standard, mysite, picture, XML form, or web page.
 */
function isDocumentLibrary(template) {
    'use strict';
    var templateEnum = Number(template);
    return DOCLIB_TEMPLATES.indexOf(templateEnum) !== -1;
}
/**
 * returns true if the list basetype is document library
 * This is the correct way to identify document library. isDocumentLibrary should be deprecated.
 */
function isDocLib(template) {
    var baseType = Number(template);
    return baseType === ListBaseType.DocumentLibrary;
}
function isGenericList(template) {
    'use strict';
    return (template === ListTemplateType.genericList ||
        template === ListTemplateType.announcements ||
        template === ListTemplateType.issueTracking ||
        template === ListTemplateType.contacts ||
        template === ListTemplateType.customGrid);
}
function isPromotedLinksList(template) {
    'use strict';
    var templateEnum = Number(template);
    return templateEnum === ListTemplateType.promotedLinks;
}
/* harmony default export */ __webpack_exports__["default"] = (ListTemplateType);
//# sourceMappingURL=ListTemplateType.js.map

/***/ }),

/***/ "I5DX":
/*!*****************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-utilities@29.7.9_5d977624104b06c7bcaa2de974ff51f1/node_modules/@ms/odsp-utilities/lib/uri/Uri.js ***!
  \*****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ms/odsp-core-bundle */ "K9kD");
/* harmony import */ var _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__["Uri"]; });

// Loading @ms/odsp-utilities/./lib/uri/Uri.js



/***/ }),

/***/ "I6O9":
/*!***************************************!*\
  !*** external "@microsoft/sp-loader" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_I6O9__;

/***/ }),

/***/ "IDCp":
/*!*****************************************************!*\
  !*** ./lib/core/actions/SiteChromeActionCreator.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utilities_StoreUtility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utilities/StoreUtility */ "XF7y");
/**
 * @file SiteChromeActionCreator.ts
 *
 * @Copyright (c) Microsoft Corporation.  All rights reserved.
 */

/**
 * @internal
 * Contains all actions related to load/change chrome configuration
 */
var SiteChromeActionCreator = /** @class */ (function () {
    function SiteChromeActionCreator() {
    }
    /**
     * Load chrome configuration into the current page
     */
    SiteChromeActionCreator.load = function (serviceScope, chromeOptions) {
        _utilities_StoreUtility__WEBPACK_IMPORTED_MODULE_0__["default"].getStore(serviceScope).dispatch({
            type: "CHROME_CONFIG_LOAD" /* CHROME_CONFIG_LOAD */,
            payload: chromeOptions
        });
    };
    /**
     * Start to render deferred components
     */
    SiteChromeActionCreator.loadDeferredComponents = function (serviceScope) {
        if (_utilities_StoreUtility__WEBPACK_IMPORTED_MODULE_0__["default"].getState(serviceScope).chrome.renderDeferredComponents) {
            return;
        }
        _utilities_StoreUtility__WEBPACK_IMPORTED_MODULE_0__["default"].getStore(serviceScope).dispatch({
            type: "LOAD_DEFERRED_CHROME_COMPONENTS" /* LOAD_DEFERRED_CHROME_COMPONENTS */,
            payload: false
        });
    };
    /**
     * Show edit nav with nav group information passed in through editNavProps
     * @param serviceScope - service scope
     * @param editNavProps - nav group and callbacks
     */
    SiteChromeActionCreator.showEditNav = function (serviceScope, editNavProps) {
        _utilities_StoreUtility__WEBPACK_IMPORTED_MODULE_0__["default"].getStore(serviceScope).dispatch({
            type: "SHOW_EDITNAV" /* SHOW_EDITNAV */,
            payload: editNavProps
        });
    };
    /**
     * Hide edit nav
     */
    SiteChromeActionCreator.closeEditNav = function (serviceScope) {
        _utilities_StoreUtility__WEBPACK_IMPORTED_MODULE_0__["default"].getStore(serviceScope).dispatch({
            type: "CLOSE_EDITNAV" /* CLOSE_EDITNAV */
        });
    };
    /**
     * update nav links
     */
    SiteChromeActionCreator.updateNavLinks = function (serviceScope) {
        _utilities_StoreUtility__WEBPACK_IMPORTED_MODULE_0__["default"].getStore(serviceScope).dispatch({ type: "UPDATE_NAVLINKS" /* UPDATE_NAVLINKS */ });
    };
    /**
     * toggle the nav control rendered from suite nav hamburger button
     * @param serviceScope - service scope
     */
    SiteChromeActionCreator.toggleNavOnTop = function (serviceScope) {
        _utilities_StoreUtility__WEBPACK_IMPORTED_MODULE_0__["default"].getStore(serviceScope).dispatch({ type: "TOGGLE_NAVONTOP" /* TOGGLE_NAVONTOP */ });
    };
    /**
     * End inplace nav transition, page context should be refreshed at this state
     * @param serviceScope - service scope
     */
    SiteChromeActionCreator.updatePageContext = function (serviceScope) {
        _utilities_StoreUtility__WEBPACK_IMPORTED_MODULE_0__["default"].getStore(serviceScope).dispatch({ type: "UPDATE_PAGECONTEXT" /* UPDATE_PAGECONTEXT */ });
    };
    return SiteChromeActionCreator;
}());
/* harmony default export */ __webpack_exports__["default"] = (SiteChromeActionCreator);


/***/ }),

/***/ "ITs/":
/*!*********************************************************!*\
  !*** ./lib/core/services/BasePageApplicationService.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__);
/**
 * @copyright Microsoft Corporation. All rights reserved.
 */

/**
 * Represents a Base Page Application service that serves as a base class for
 * application services.
 *
 * @internal
 */
var BasePageApplicationService = /** @class */ (function () {
    /**
     * Initializes a new instance of the BasePageApplicationService.
     * @param serviceScope - Represents the service scope
     * @param serviceConfiguration - Represents the service configuration
     */
    function BasePageApplicationService(serviceScope, serviceConfiguration) {
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Validate"].isNotNullOrUndefined(serviceScope, 'serviceScope');
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Validate"].isNotNullOrUndefined(serviceConfiguration, 'serviceConfiguration');
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Validate"].isNotNullOrUndefined(serviceConfiguration.serviceKey, 'serviceConfiguration.serviceKey');
        this._serviceScope = serviceScope;
        this._serviceConfiguration = serviceConfiguration;
        this._isDisposed = false;
    }
    /**
     * This method is called to permanently dispose the object.
     */
    BasePageApplicationService.prototype.dispose = function () {
        if (!this._isDisposed) {
            this.onDispose();
            this._isDisposed = true;
        }
    };
    Object.defineProperty(BasePageApplicationService.prototype, "componentConfiguration", {
        /**
         * Gets the service component configuration.
         */
        get: function () {
            return this._componentConfiguration;
        },
        /**
         * Sets the service component configuration.
         */
        set: function (config) {
            this._componentConfiguration = config;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BasePageApplicationService.prototype, "serviceConfiguration", {
        /**
         * Gets the service configuration.
         */
        get: function () {
            return this._serviceConfiguration;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BasePageApplicationService.prototype, "serviceScope", {
        /**
         * Gets the service scope
         */
        get: function () {
            return this._serviceScope;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BasePageApplicationService.prototype, "isDisposed", {
        /**
         * Returns true if the dispose() method has been called.
         */
        get: function () {
            return this._isDisposed;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Creates a service component required by a page based application
     * @param config - Represents the service configuration.
     * @param componentFactory - Represents an component factory.
     */
    BasePageApplicationService.prototype.createServiceComponent = function (config, componentFactory) {
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Validate"].isNotNullOrUndefined(componentFactory, 'componentFactory');
        if (this._serviceComponent === undefined) {
            this._componentConfiguration = config;
            this._serviceComponent = componentFactory(config);
        }
    };
    Object.defineProperty(BasePageApplicationService.prototype, "serviceComponent", {
        /**
         * Gets the component associated with the service
         */
        get: function () {
            return this._serviceComponent;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Override this method to dispose a service
     * @virtual
     */
    BasePageApplicationService.prototype.onDispose = function () {
        /** EMPTY BLOCK **/
    };
    return BasePageApplicationService;
}());
/* harmony default export */ __webpack_exports__["default"] = (BasePageApplicationService);


/***/ }),

/***/ "IWZV":
/*!****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/css-loader@3.2.1_webpack@4.44.2/node_modules/css-loader/dist/cjs.js!/agent/_work/1/s/common/temp/node_modules/.pnpm/postcss-loader@3.0.0/node_modules/postcss-loader/src??postcss!./lib/core/components/chrome/Chrome.module.css ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../common/temp/node_modules/.pnpm/css-loader@3.2.1_webpack@4.44.2/node_modules/css-loader/dist/runtime/api.js */ "5ADk")(false);
// Module
exports.push([module.i, "body{margin:0;padding:0;background-color:\"[theme:white, default: #ffffff]\";color:\"[theme:neutralPrimary, default: #323130]\";overflow-x:hidden;overflow-y:auto;-webkit-overflow-scrolling:touch}body,html{height:100%}.k_b_beed2cf1{-ms-flex-positive:1;flex-grow:1;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;position:relative;width:100%}[data-sp-feature-tag=\"Site header host\"]{border-bottom:1px solid;border-color:\"[theme:bodyDivider, default: #edebe9]\"}.l_b_beed2cf1{-ms-flex-positive:1;flex-grow:1;min-height:0;-ms-flex-preferred-size:0;flex-basis:0}.l_b_beed2cf1,.mainContent{width:100%;display:-ms-flexbox;display:flex}.mainContent{-ms-flex-direction:column;flex-direction:column;-ms-flex-positive:1;flex-grow:1;min-width:0}.m_b_beed2cf1{max-width:100%}.sp-pageLayout-horizontalNav .n_b_beed2cf1{position:absolute;top:0;bottom:0;z-index:8}.statusScreenReader{display:block;width:0;height:0;overflow:hidden}.o_b_beed2cf1{height:80px}.p_b_beed2cf1{height:108px}.q_b_beed2cf1{height:64px}.r_b_beed2cf1{height:40px}.s_b_beed2cf1{padding-bottom:48px;overflow:hidden}", ""]);


/***/ }),

/***/ "Iycx":
/*!*************************************************************************************!*\
  !*** ./lib/core/components/chrome/PageLayoutScrollRegion/PageLayoutScrollRegion.js ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @microsoft/sp-lodash-subset */ "Pk8u");
/* harmony import */ var _microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ms_odsp_datasources_lib_models_chrome_ChromeOptions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ms/odsp-datasources/lib/models/chrome/ChromeOptions */ "Vb17");
/* harmony import */ var _ms_odsp_shared_react_lib_utilities_shyConductor_ShyConductorLoader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ms/odsp-shared-react/lib/utilities/shyConductor/ShyConductorLoader */ "txfU");
/* harmony import */ var _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ms/sp-telemetry */ "2q6Q");
/* harmony import */ var _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @microsoft/office-ui-fabric-react-bundle */ "KL1q");
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ms/odsp-utilities-bundle */ "y88i");
/* harmony import */ var _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _PageLayoutScrollRegion_styles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./PageLayoutScrollRegion.styles */ "7Oi+");
/* harmony import */ var _SiteFooter_SiteFooter__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../SiteFooter/SiteFooter */ "8oKq");
/* harmony import */ var _actions_SiteChromeActionCreator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../actions/SiteChromeActionCreator */ "IDCp");
/* harmony import */ var _MobileUpsellButton_DeferredMobileUpsellButton__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../MobileUpsellButton/DeferredMobileUpsellButton */ "o7Lc");
/* harmony import */ var _PageLayoutScrollRegion_module_scss__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./PageLayoutScrollRegion.module.scss */ "NDUk");
/* harmony import */ var _utilities_Killswitches__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../utilities/Killswitches */ "XjSx");
/* harmony import */ var _utilities_Flights__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../utilities/Flights */ "yCLn");
/* harmony import */ var _SiteFooter_SiteFooter_resx__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../SiteFooter/SiteFooter.resx */ "PBJ4");
var _SiteFooter_SiteFooter_resx__WEBPACK_IMPORTED_MODULE_16___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../SiteFooter/SiteFooter.resx */ "PBJ4", 1);

















/**
 * @internal
 * Page layout scroll region, tempoary exposed to be consumed by sp-home directly
 */
var PageLayoutScrollRegion = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(PageLayoutScrollRegion, _super);
    function PageLayoutScrollRegion(props) {
        var _a;
        var _this = _super.call(this, props) || this;
        _this._scrollRegionRef = react__WEBPACK_IMPORTED_MODULE_1__["createRef"]();
        _this._isMounted = false;
        _this.componentDidMount = function () {
            var _a;
            _this._isMounted = true;
            _this._lastPathname = window.location.pathname;
            if (_utilities_Killswitches__WEBPACK_IMPORTED_MODULE_14__["default"].isScrollTopFixKSActive()) {
                _this._registerShyConductor();
            }
            else {
                if (_this.props.pageStore) {
                    _this._pageStoreUnsubscriber = (_a = _this.props.pageStore) === null || _a === void 0 ? void 0 : _a.subscribe(function () {
                        var _a;
                        var haveDeferredComponentsRendered = _this.state.renderDeferredComponents;
                        if (!haveDeferredComponentsRendered && ((_a = _this.props.pageStore) === null || _a === void 0 ? void 0 : _a.getState().chrome.renderDeferredComponents) &&
                            _this._isMounted) {
                            _this._registerShyConductor();
                            _this.setState({ renderDeferredComponents: true });
                        }
                    });
                }
                else {
                    _this._registerShyConductor();
                }
            }
            if (_this._scrollRegionParentTriggerScrollTop()) {
                _this._unsubscriberScrollTop =
                    _this.props.requestScrollTopCallback && _this.props.requestScrollTopCallback(_this._scrollTop);
            }
            if (!_utilities_Killswitches__WEBPACK_IMPORTED_MODULE_14__["default"].isScrollRegionPrintFixKSActive()) {
                window.addEventListener('beforeprint', _this._onBeforePrint);
            }
            _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_6__["_PerformanceLogger"].devMark('PageLayoutScrollRegion.Mounted');
        };
        _this._handleEditNavClicked = function (group, exitEditCallback, updateDisplayedLinks) {
            _this._onEditNavClicked(group, exitEditCallback, updateDisplayedLinks, undefined, _SiteFooter_SiteFooter_resx__WEBPACK_IMPORTED_MODULE_16__["EditNavFooterTitle"]);
        };
        _this._onEditNavClicked = function (group, exitEditCallback, updateDisplayedLinks, hideSearchBox, title) {
            if (group && group.links) {
                var editNavProps = {
                    pageContext: _this.props.pageContext,
                    group: group,
                    exitEditMode: function () {
                        _actions_SiteChromeActionCreator__WEBPACK_IMPORTED_MODULE_11__["default"].closeEditNav(_this.props.serviceScope);
                        if (exitEditCallback) {
                            exitEditCallback();
                        }
                    },
                    updateDisplayedLinks: updateDisplayedLinks,
                    title: title
                };
                _actions_SiteChromeActionCreator__WEBPACK_IMPORTED_MODULE_11__["default"].showEditNav(_this.props.serviceScope, editNavProps);
            }
        };
        _this._scrollTop = function () {
            if (_this._isMounted &&
                (_utilities_Killswitches__WEBPACK_IMPORTED_MODULE_14__["default"].isDisableScrollToTopWhenContainsAnchorKSActivated() ||
                    !Boolean(new _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_8__["Uri"](window.location.href).getFragment()))) {
                requestAnimationFrame(function () {
                    if (_this._scrollRegion) {
                        _this._scrollRegion.scrollTop = 0;
                    }
                });
            }
        };
        _this._onBeforePrint = function () {
            if (_this._scrollRegion.scrollBy) {
                _this._scrollRegion.scrollBy({ left: 0, top: _this._scrollRegion.scrollHeight, behavior: 'smooth' });
            }
        };
        _this.state = {
            renderDeferredComponents: ((_a = _this.props.pageStore) === null || _a === void 0 ? void 0 : _a.getState().chrome.renderDeferredComponents) || false
        };
        return _this;
    }
    PageLayoutScrollRegion_1 = PageLayoutScrollRegion;
    PageLayoutScrollRegion._getViewPortIntegratedSiteFooter = function (viewPortManager) {
        if (!PageLayoutScrollRegion_1._viewPortIntegratedSiteFooterComponent) {
            PageLayoutScrollRegion_1._viewPortIntegratedSiteFooterComponent = viewPortManager.getViewPortIntegratedComponent(_SiteFooter_SiteFooter__WEBPACK_IMPORTED_MODULE_10__["SiteFooter"]);
        }
        return PageLayoutScrollRegion_1._viewPortIntegratedSiteFooterComponent;
    };
    Object.defineProperty(PageLayoutScrollRegion.prototype, "rootElement", {
        get: function () {
            return this._scrollRegionRef.current || undefined;
        },
        enumerable: true,
        configurable: true
    });
    PageLayoutScrollRegion.prototype.componentDidUpdate = function (prevProps, prevState) {
        var _this = this;
        if (!_utilities_Killswitches__WEBPACK_IMPORTED_MODULE_14__["default"].isScrollTopFixKSActive() && this._scrollRegionParentTriggerScrollTop()) {
            return;
        }
        var isUpdateTriggeredByDeferLoad = !prevState.renderDeferredComponents && this.state.renderDeferredComponents;
        if (_utilities_Killswitches__WEBPACK_IMPORTED_MODULE_14__["default"].isScrollTopFixKSActive()) {
            if (!this.props.disableAutoScrollOnUpdate && this.props.scrollKey !== prevProps.scrollKey) {
                requestAnimationFrame(function () {
                    var scrollRegion = (_this._scrollRegionRef.current || document.body);
                    scrollRegion.scrollTop = 0;
                });
            }
        }
        else {
            if (!this.props.disableAutoScrollOnUpdate &&
                this.props.scrollKey !== prevProps.scrollKey &&
                isUpdateTriggeredByDeferLoad &&
                this._lastPathname !== window.location.pathname) {
                requestAnimationFrame(function () {
                    var scrollRegion = (_this._scrollRegionRef.current || document.body);
                    scrollRegion.scrollTop = 0;
                    _this._lastPathname = window.location.pathname;
                });
            }
        }
    };
    PageLayoutScrollRegion.prototype.componentWillUnmount = function () {
        this._isMounted = false;
        if (this._scrollRegionParentTriggerScrollTop() && this._unsubscriberScrollTop) {
            this._unsubscriberScrollTop();
        }
        if (this._pageStoreUnsubscriber) {
            this._pageStoreUnsubscriber();
        }
        if (!_utilities_Killswitches__WEBPACK_IMPORTED_MODULE_14__["default"].isScrollRegionPrintFixKSActive()) {
            window.removeEventListener('beforeprint', this._onBeforePrint);
        }
    };
    PageLayoutScrollRegion.prototype.render = function () {
        var _a, _b, _c, _d;
        var scrollRegionAttrs = {};
        var chromeOptions = this.props.pageStore
            ? this.props.pageStore.getState().chrome.chromeOptions
            : this.props.chromeOptions;
        if (this.props.chromeOptions && this.props.chromeOptions.footer && chromeOptions) {
            chromeOptions.footer = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, chromeOptions.footer), this.props.chromeOptions.footer);
        }
        if (!_utilities_Flights__WEBPACK_IMPORTED_MODULE_15__["default"].isMegaFooterEnabled() && chromeOptions) {
            chromeOptions.footer = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, chromeOptions.footer), { layout: _ms_odsp_datasources_lib_models_chrome_ChromeOptions__WEBPACK_IMPORTED_MODULE_4__["FooterLayout"].SIMPLE, emphasis: _ms_odsp_datasources_lib_models_chrome_ChromeOptions__WEBPACK_IMPORTED_MODULE_4__["FooterEmphasis"].Strong });
        }
        var floatingRootClassName;
        var floatingChildClassName;
        if (!_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__["_BrowserUtilities"].isMobileBrowser() ||
            _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__["_BrowserUtilities"].isTeamsHosted() ||
            !_utilities_Killswitches__WEBPACK_IMPORTED_MODULE_14__["default"].fixFooterOnMobile()) {
            if (this.props.isFocusMode) {
                var floatClassNames = _PageLayoutScrollRegion_styles__WEBPACK_IMPORTED_MODULE_9__["PageLayoutScrollRegionStyles"].getClassNames({
                    theme: Object(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_7__["getTheme"])()
                });
                floatingRootClassName = floatClassNames.pagesCoreFloatingRoot;
                floatingChildClassName = floatClassNames.pagesCoreFloatingChild;
            }
            scrollRegionAttrs = {
                'data-is-scrollable': 'true',
                className: Object(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_7__["css"])(_utilities_Killswitches__WEBPACK_IMPORTED_MODULE_14__["default"].isScrollRegionCSSWorkaroundKSActive()
                    ? _PageLayoutScrollRegion_module_scss__WEBPACK_IMPORTED_MODULE_13__["default"].scrollRegion
                    : _PageLayoutScrollRegion_module_scss__WEBPACK_IMPORTED_MODULE_13__["default"].pagesCoreScrollRegion, this.props.className, !_utilities_Killswitches__WEBPACK_IMPORTED_MODULE_14__["default"].isFocusModeScrollRegionFixKSActive() && floatingRootClassName, chromeOptions && chromeOptions.nav.placement === _ms_odsp_datasources_lib_models_chrome_ChromeOptions__WEBPACK_IMPORTED_MODULE_4__["NavPlacementType"].LEFT ? 'flex' : '', _PageLayoutScrollRegion_module_scss__WEBPACK_IMPORTED_MODULE_13__["default"].fixPartialPrint),
                'data-automation-id': 'contentScrollRegion'
            };
        }
        floatingChildClassName = Object(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_7__["css"])(floatingChildClassName, _utilities_Killswitches__WEBPACK_IMPORTED_MODULE_14__["default"].isScrollRegionCSSWorkaroundKSActive()
            ? _PageLayoutScrollRegion_module_scss__WEBPACK_IMPORTED_MODULE_13__["default"].scrollRegionFlexRoot
            : _PageLayoutScrollRegion_module_scss__WEBPACK_IMPORTED_MODULE_13__["default"].pagesCoreScrollRegionFlexRoot, this.props.floatingChildClassName);
        if (this.props.onScroll) {
            Object(_microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_3__["extend"])(scrollRegionAttrs, { onScroll: this.props.onScroll });
        }
        var isFooterEnabled = ((_b = (_a = chromeOptions) === null || _a === void 0 ? void 0 : _a.nav) === null || _b === void 0 ? void 0 : _b.placement) !== _ms_odsp_datasources_lib_models_chrome_ChromeOptions__WEBPACK_IMPORTED_MODULE_4__["NavPlacementType"].LEFT &&
            ((!_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__["_BrowserUtilities"].isMobileBrowser() && !_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__["_BrowserUtilities"].isEmbedded()) ||
                // tslint:disable-next-line:no-string-literal
                window['teamsCustomAppType'] === 'portals');
        var showFooter = Boolean(this.props.footerConfig && this.props.footerConfig.showFooter) &&
            Boolean(this.props.pageContext) &&
            Boolean(chromeOptions) &&
            !((_d = (_c = chromeOptions) === null || _c === void 0 ? void 0 : _c.footer) === null || _d === void 0 ? void 0 : _d.hidden) &&
            isFooterEnabled &&
            (_utilities_Killswitches__WEBPACK_IMPORTED_MODULE_14__["default"].isScrollTopFixKSActive() || this.state.renderDeferredComponents) &&
            (_utilities_Killswitches__WEBPACK_IMPORTED_MODULE_14__["default"].isFocusModeScrollRegionFixKSActive() || this.props.isFocusMode === undefined
                ? true
                : !this.props.isFocusMode);
        var showMobileUpsell = this.props.showMobileUpsell &&
            // tslint:disable-next-line:no-string-literal
            !(window['teamsCustomAppType'] === 'portals');
        var siteFooter;
        if (showFooter) {
            var viewPortManager = this.props.viewPortManager;
            var originalProps = {
                pageContext: this.props.pageContext,
                chromeOptions: chromeOptions,
                className: _utilities_Killswitches__WEBPACK_IMPORTED_MODULE_14__["default"].isScrollRegionCSSWorkaroundKSActive()
                    ? _PageLayoutScrollRegion_module_scss__WEBPACK_IMPORTED_MODULE_13__["default"].footer
                    : _PageLayoutScrollRegion_module_scss__WEBPACK_IMPORTED_MODULE_13__["default"].pagesCoreFooter,
                enableMobileUpsell: showMobileUpsell,
                footerNodes: this.props.footerConfig ? this.props.footerConfig.footerNavigationNodes : undefined,
                onEditNavClicked: _utilities_Flights__WEBPACK_IMPORTED_MODULE_15__["default"].isMegaFooterEnabled() ? this._handleEditNavClicked : this._onEditNavClicked
            };
            // No addition ks/flight/exp because the place where passing the viewport manager prop should have been protected.
            if (viewPortManager) {
                siteFooter = react__WEBPACK_IMPORTED_MODULE_1__["createElement"](PageLayoutScrollRegion_1._getViewPortIntegratedSiteFooter(viewPortManager), {
                    id: _SiteFooter_SiteFooter__WEBPACK_IMPORTED_MODULE_10__["SITE_FOOTER_PERFORMANCE_TAG"],
                    renderCompleteReportType: 'ComponentRender',
                    preservedHeight: _SiteFooter_SiteFooter__WEBPACK_IMPORTED_MODULE_10__["DEFAULT_SITE_FOOTER_MIN_HEIGHT"],
                    viewPortManager: viewPortManager,
                    originalComponentProps: originalProps
                });
            }
            else {
                siteFooter = react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_SiteFooter_SiteFooter__WEBPACK_IMPORTED_MODULE_10__["SiteFooter"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, originalProps));
            }
        }
        var ariaRole = this.props.ariaRole;
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, scrollRegionAttrs, { "aria-label": this.props.ariaLabel, id: this.props.id, ref: this._scrollRegionRef, role: ariaRole ? ariaRole : 'main', tabIndex: ariaRole ? undefined : -1 }),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: floatingChildClassName },
                this.props.children,
                siteFooter),
            showMobileUpsell && react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_MobileUpsellButton_DeferredMobileUpsellButton__WEBPACK_IMPORTED_MODULE_12__["default"], null)));
    };
    Object.defineProperty(PageLayoutScrollRegion.prototype, "_scrollRegion", {
        get: function () {
            return (this._scrollRegionRef.current || document.body);
        },
        enumerable: true,
        configurable: true
    });
    PageLayoutScrollRegion.prototype._scrollRegionParentTriggerScrollTop = function () {
        return !_utilities_Killswitches__WEBPACK_IMPORTED_MODULE_14__["default"].isScrollTopFixKSActive() && !!this.props.requestScrollTopCallback;
    };
    PageLayoutScrollRegion.prototype._registerShyConductor = function () {
        var _this = this;
        // tslint:disable-next-line:no-floating-promises
        Object(_ms_odsp_shared_react_lib_utilities_shyConductor_ShyConductorLoader__WEBPACK_IMPORTED_MODULE_5__["getShyConductor"])().then(function (sc) {
            sc.registerContentElement(_this.rootElement);
        });
    };
    var PageLayoutScrollRegion_1;
    PageLayoutScrollRegion = PageLayoutScrollRegion_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_7__["customizable"])('PageLayoutScrollRegion', ['chromeOptions', 'theme'])
    ], PageLayoutScrollRegion);
    return PageLayoutScrollRegion;
}(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_7__["BaseComponent"]));
/* harmony default export */ __webpack_exports__["default"] = (PageLayoutScrollRegion);


/***/ }),

/***/ "K/iH":
/*!**********************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/history@4.7.2/node_modules/history/es/PathUtils.js ***!
  \**********************************************************************************************************/
/*! exports provided: addLeadingSlash, stripLeadingSlash, hasBasename, stripBasename, stripTrailingSlash, parsePath, createPath */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addLeadingSlash", function() { return addLeadingSlash; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stripLeadingSlash", function() { return stripLeadingSlash; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasBasename", function() { return hasBasename; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stripBasename", function() { return stripBasename; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stripTrailingSlash", function() { return stripTrailingSlash; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parsePath", function() { return parsePath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPath", function() { return createPath; });
var addLeadingSlash = function addLeadingSlash(path) {
  return path.charAt(0) === '/' ? path : '/' + path;
};

var stripLeadingSlash = function stripLeadingSlash(path) {
  return path.charAt(0) === '/' ? path.substr(1) : path;
};

var hasBasename = function hasBasename(path, prefix) {
  return new RegExp('^' + prefix + '(\\/|\\?|#|$)', 'i').test(path);
};

var stripBasename = function stripBasename(path, prefix) {
  return hasBasename(path, prefix) ? path.substr(prefix.length) : path;
};

var stripTrailingSlash = function stripTrailingSlash(path) {
  return path.charAt(path.length - 1) === '/' ? path.slice(0, -1) : path;
};

var parsePath = function parsePath(path) {
  var pathname = path || '/';
  var search = '';
  var hash = '';

  var hashIndex = pathname.indexOf('#');
  if (hashIndex !== -1) {
    hash = pathname.substr(hashIndex);
    pathname = pathname.substr(0, hashIndex);
  }

  var searchIndex = pathname.indexOf('?');
  if (searchIndex !== -1) {
    search = pathname.substr(searchIndex);
    pathname = pathname.substr(0, searchIndex);
  }

  return {
    pathname: pathname,
    search: search === '?' ? '' : search,
    hash: hash === '#' ? '' : hash
  };
};

var createPath = function createPath(location) {
  var pathname = location.pathname,
      search = location.search,
      hash = location.hash;


  var path = pathname || '/';

  if (search && search !== '?') path += search.charAt(0) === '?' ? search : '?' + search;

  if (hash && hash !== '#') path += hash.charAt(0) === '#' ? hash : '#' + hash;

  return path;
};

/***/ }),

/***/ "K5zV":
/*!**************************************************************************!*\
  !*** ./lib/core/components/suiteNav/PageSuiteNavConfigurationManager.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ms_sp_suite_nav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ms/sp-suite-nav */ "6iXJ");
/* harmony import */ var _ms_sp_suite_nav__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ms_sp_suite_nav__WEBPACK_IMPORTED_MODULE_2__);
/**
 * @copyright Microsoft Corporation. All rights reserved.
 */



/**
 * Represents a suite navigation configuration manager that serves
 * custom page configurations
 *
 * @internal
 */
var PageSuiteNavConfigurationManager = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(PageSuiteNavConfigurationManager, _super);
    /**
     * Initializes a new instance of PageSuiteNavigationManager class
     * @param configuration - Represents a custom page suite nav configuration
     */
    function PageSuiteNavConfigurationManager(configuration) {
        var _this = this;
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["Validate"].isNotNullOrUndefined(configuration, 'configuration');
        _this = _super.call(this, configuration) || this;
        _this._configuration = configuration;
        _this._initializeConfigurationManager();
        return _this;
    }
    /**
     * Function for modifying the suite nav data that came back from the service.
     * @param suiteNavModel - Represents a Model used to modify the resulting suiteNavData
     * @param themeDictionary - Represents a Color palette used to change the suiteNav theme colors
     * @returns the new SuiteNav data
     */
    PageSuiteNavConfigurationManager.prototype.modifySuiteNavData = function (suiteNavModel) {
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["Validate"].isNotNullOrUndefined(suiteNavModel, 'suiteNavModel');
        var suiteNavData = _super.prototype.modifySuiteNavData.call(this, suiteNavModel);
        return this.modifySuiteNavBarData(suiteNavData);
    };
    /**
     * Overriding this method enables applications to modify nav bar data
     * including adding custom links
     * @param suiteNavData - Represents a suite nav data
     * @virtual
     *
     * @returns Suite nav configuration with custom links
     */
    PageSuiteNavConfigurationManager.prototype.modifySuiteNavBarData = function (suiteNavData) {
        return suiteNavData;
    };
    /**
     * Overriding this method enables applications to add a single custom link
     * @param existingLinks - Represents the existing links of a specific type
     * @param customLink - Represents a custom link
     * @virtual
     *
     * @returns Suite nav configuration with custom link
     */
    PageSuiteNavConfigurationManager.prototype.addCustomNavLink = function (existingLinks, customLink) {
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["Validate"].isNotNullOrUndefined(existingLinks, 'existingLinks');
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["Validate"].isNotNullOrUndefined(customLink, 'customLink');
        var hasLink = false;
        for (var _i = 0, existingLinks_1 = existingLinks; _i < existingLinks_1.length; _i++) {
            var link = existingLinks_1[_i];
            if (link && link.Id === customLink.Id) {
                hasLink = true;
                break;
            }
        }
        if (!hasLink) {
            existingLinks.push(customLink);
        }
    };
    Object.defineProperty(PageSuiteNavConfigurationManager.prototype, "configuration", {
        /**
         * Gets the suite nav configuration
         */
        get: function () {
            return this._configuration;
        },
        enumerable: true,
        configurable: true
    });
    PageSuiteNavConfigurationManager.prototype._initializeConfigurationManager = function () {
        if (this._configuration.isDeferred) {
            this.disableSuiteNav();
        }
    };
    return PageSuiteNavConfigurationManager;
}(_ms_sp_suite_nav__WEBPACK_IMPORTED_MODULE_2__["SuiteNavManagerConfiguration"]));
/* harmony default export */ __webpack_exports__["default"] = (PageSuiteNavConfigurationManager);


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

/***/ "KObg":
/*!**********************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/prop-types@15.7.2/node_modules/prop-types/index.js ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var ReactIs = __webpack_require__(/*! react-is */ "taRQ");

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ "UXj/")(ReactIs.isElement, throwOnDirectAccess);
} else {}


/***/ }),

/***/ "KajA":
/*!************************************************!*\
  !*** ./lib/core/reducers/PostRenderReducer.js ***!
  \************************************************/
/*! exports provided: postRenderReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postRenderReducer", function() { return postRenderReducer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _actions_PostRenderActionCreator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/PostRenderActionCreator */ "vuTp");
/**
 * @copyright Microsoft Corporation. All rights reserved.
 */


/**
 * Post Render Reducer
 * @param state - Represents the current post render state
 * @param action - Represents the current action
 */
// tslint:disable-next-line:export-name
function postRenderReducer(state, action) {
    switch (action.type) {
        case "POST_RENDER" /* POST_RENDER */:
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, state), { priority: action.payload === undefined ? _actions_PostRenderActionCreator__WEBPACK_IMPORTED_MODULE_1__["PostRenderPriority"].High : action.payload, isPostRender: true });
        case "RESET_POST_RENDER" /* RESET_POST_RENDER */:
            return {
                priority: undefined,
                isPostRender: false
            };
        default:
            return (state || {
                isPostRender: false
            });
    }
}


/***/ }),

/***/ "Lk6p":
/*!***********************************************************!*\
  !*** ./lib/core/components/chrome/SiteLeftNav/LeftNav.js ***!
  \***********************************************************/
/*! exports provided: LeftNav */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeftNav", function() { return LeftNav; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/office-ui-fabric-react-bundle */ "KL1q");
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _PreloadedComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../PreloadedComponent */ "CuBB");
/* harmony import */ var _LeftNav_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./LeftNav.module.scss */ "Z1sk");
/**
 * @copyright Microsoft Corporation. All rights reserved.
 */





/**
 * @internal
 * LeftNav chrome control
 */
// tslint:disable-next-line:variable-name
var LeftNav = function (props) {
    var _a;
    /* tslint:disable:no-string-literal */
    if (props.chromeComponents && props.chromeComponents['LeftNav']) {
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](props.chromeComponents['LeftNav'], props);
    }
    /* tslint:enable:no-string-literal */
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_PreloadedComponent__WEBPACK_IMPORTED_MODULE_3__["PreloadedComponent"], { componentName: 'LeftNav', componentProps: props, placeHolder: react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: Object(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_1__["css"])(_LeftNav_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].leftNavPlaceHolder, props.className, (_a = {},
                _a[_LeftNav_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].leftNavWidthKS] = !_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__["_SPKillSwitch"].isActivated(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__["Guid"].parse('2fe4edff-416f-426b-a7bb-a54c2e7834fa'), '06/05/2020', 'increase LeftNav width to conform to doc lib'),
                _a)) }) }));
};


/***/ }),

/***/ "NAKQ":
/*!********************************************************!*\
  !*** ./lib/core/components/router/LoadingIndicator.js ***!
  \********************************************************/
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
/* harmony import */ var _ms_sp_suite_nav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ms/sp-suite-nav */ "6iXJ");
/* harmony import */ var _ms_sp_suite_nav__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ms_sp_suite_nav__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var office_ui_fabric_react_lib_components_ProgressIndicator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! office-ui-fabric-react/lib/components/ProgressIndicator */ "gyPE");
/* harmony import */ var _utilities_Flights__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utilities/Flights */ "yCLn");
/**
 * @copyright (c) Microsoft Corporation.  All rights reserved.
 */







/**
 * Loading indicator (bar) to be shared across libraries
 *
 * @internal
 */
var LoadingIndicator = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(LoadingIndicator, _super);
    function LoadingIndicator(props) {
        var _this = _super.call(this, props) || this;
        _this._getStyles = function (_styleProps) {
            return {
                root: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ width: '100%', position: 'fixed', top: _this._shouldSitBelowSuiteNav()
                        ? '0'
                        : _utilities_Flights__WEBPACK_IMPORTED_MODULE_6__["default"].isSuiteNavThinHeaderEnabled()
                            ? _ms_sp_suite_nav__WEBPACK_IMPORTED_MODULE_3__["DEFAULT_SUITENAV_THIN_HEIGHT"]
                            : _ms_sp_suite_nav__WEBPACK_IMPORTED_MODULE_3__["DEFAULT_SUITENAV_HEIGHT"], left: '0px', zIndex: 9999 }, _this.props.customStyles),
                itemProgress: {
                    width: '100%',
                    paddingTop: 0
                }
            };
        };
        _this.state = {
            progress: 0.3
        };
        return _this;
    }
    LoadingIndicator.prototype.componentDidMount = function () {
        var _this = this;
        this._mounted = true;
        this._async = new _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_2__["Async"]();
        this._async.setInterval(function () {
            var progress = _this.state.progress;
            progress = Math.min(progress + /* magic */ Math.random() * 0.2 + 0.1, 1);
            _this._mounted && _this.setState({ progress: progress });
            if (progress >= 1) {
                _this._async.dispose();
            }
        }, 207);
    };
    LoadingIndicator.prototype.componentWillUnmount = function () {
        this._mounted = false;
        this._async.dispose();
    };
    LoadingIndicator.prototype.render = function () {
        if (_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_4__["_BrowserUtilities"].isEmbedded()) {
            return null; // tslint:disable-line:no-null-keyword
        }
        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](office_ui_fabric_react_lib_components_ProgressIndicator__WEBPACK_IMPORTED_MODULE_5__["ProgressIndicator"], { percentComplete: this.state.progress, styles: this._getStyles });
    };
    LoadingIndicator.prototype._shouldSitBelowSuiteNav = function () {
        return false;
    };
    return LoadingIndicator;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));
/* harmony default export */ __webpack_exports__["default"] = (LoadingIndicator);


/***/ }),

/***/ "NDUk":
/*!*************************************************************************************************!*\
  !*** ./lib/core/components/chrome/PageLayoutScrollRegion/PageLayoutScrollRegion.module.scss.js ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* tslint:disable */
__webpack_require__(/*! ./PageLayoutScrollRegion.module.css */ "lAVr");
var styles = {
    pagesCoreScrollRegion: 'a_a_beed2cf1',
    '-ms-flex': 'b_a_beed2cf1',
    flex: 'b_a_beed2cf1',
    fixPartialPrint: 'c_a_beed2cf1',
    scrollRegion: 'e_a_beed2cf1',
    pagesCoreFooter: 'f_a_beed2cf1',
    footer: 'g_a_beed2cf1',
    pagesCoreScrollRegionFlexRoot: 'h_a_beed2cf1',
    scrollRegionFlexRoot: 'i_a_beed2cf1',
    scrollRegionFlexRootKSFallback: 'j_a_beed2cf1'
};
/* harmony default export */ __webpack_exports__["default"] = (styles);
/* tslint:enable */ 


/***/ }),

/***/ "NDu+":
/*!************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/redux@3.6.0/node_modules/redux/es/combineReducers.js ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return combineReducers; });
/* harmony import */ var _createStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createStore */ "hok/");
/* harmony import */ var lodash_es_isPlainObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash-es/isPlainObject */ "R0P3");
/* harmony import */ var _utils_warning__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/warning */ "oAK6");




function getUndefinedStateErrorMessage(key, action) {
  var actionType = action && action.type;
  var actionName = actionType && '"' + actionType.toString() + '"' || 'an action';

  return 'Given action ' + actionName + ', reducer "' + key + '" returned undefined. ' + 'To ignore an action, you must explicitly return the previous state.';
}

function getUnexpectedStateShapeWarningMessage(inputState, reducers, action, unexpectedKeyCache) {
  var reducerKeys = Object.keys(reducers);
  var argumentName = action && action.type === _createStore__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].INIT ? 'preloadedState argument passed to createStore' : 'previous state received by the reducer';

  if (reducerKeys.length === 0) {
    return 'Store does not have a valid reducer. Make sure the argument passed ' + 'to combineReducers is an object whose values are reducers.';
  }

  if (!Object(lodash_es_isPlainObject__WEBPACK_IMPORTED_MODULE_1__["default"])(inputState)) {
    return 'The ' + argumentName + ' has unexpected type of "' + {}.toString.call(inputState).match(/\s([a-z|A-Z]+)/)[1] + '". Expected argument to be an object with the following ' + ('keys: "' + reducerKeys.join('", "') + '"');
  }

  var unexpectedKeys = Object.keys(inputState).filter(function (key) {
    return !reducers.hasOwnProperty(key) && !unexpectedKeyCache[key];
  });

  unexpectedKeys.forEach(function (key) {
    unexpectedKeyCache[key] = true;
  });

  if (unexpectedKeys.length > 0) {
    return 'Unexpected ' + (unexpectedKeys.length > 1 ? 'keys' : 'key') + ' ' + ('"' + unexpectedKeys.join('", "') + '" found in ' + argumentName + '. ') + 'Expected to find one of the known reducer keys instead: ' + ('"' + reducerKeys.join('", "') + '". Unexpected keys will be ignored.');
  }
}

function assertReducerSanity(reducers) {
  Object.keys(reducers).forEach(function (key) {
    var reducer = reducers[key];
    var initialState = reducer(undefined, { type: _createStore__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].INIT });

    if (typeof initialState === 'undefined') {
      throw new Error('Reducer "' + key + '" returned undefined during initialization. ' + 'If the state passed to the reducer is undefined, you must ' + 'explicitly return the initial state. The initial state may ' + 'not be undefined.');
    }

    var type = '@@redux/PROBE_UNKNOWN_ACTION_' + Math.random().toString(36).substring(7).split('').join('.');
    if (typeof reducer(undefined, { type: type }) === 'undefined') {
      throw new Error('Reducer "' + key + '" returned undefined when probed with a random type. ' + ('Don\'t try to handle ' + _createStore__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].INIT + ' or other actions in "redux/*" ') + 'namespace. They are considered private. Instead, you must return the ' + 'current state for any unknown actions, unless it is undefined, ' + 'in which case you must return the initial state, regardless of the ' + 'action type. The initial state may not be undefined.');
    }
  });
}

/**
 * Turns an object whose values are different reducer functions, into a single
 * reducer function. It will call every child reducer, and gather their results
 * into a single state object, whose keys correspond to the keys of the passed
 * reducer functions.
 *
 * @param {Object} reducers An object whose values correspond to different
 * reducer functions that need to be combined into one. One handy way to obtain
 * it is to use ES6 `import * as reducers` syntax. The reducers may never return
 * undefined for any action. Instead, they should return their initial state
 * if the state passed to them was undefined, and the current state for any
 * unrecognized action.
 *
 * @returns {Function} A reducer function that invokes every reducer inside the
 * passed object, and builds a state object with the same shape.
 */
function combineReducers(reducers) {
  var reducerKeys = Object.keys(reducers);
  var finalReducers = {};
  for (var i = 0; i < reducerKeys.length; i++) {
    var key = reducerKeys[i];

    if (true) {
      if (typeof reducers[key] === 'undefined') {
        Object(_utils_warning__WEBPACK_IMPORTED_MODULE_2__["default"])('No reducer provided for key "' + key + '"');
      }
    }

    if (typeof reducers[key] === 'function') {
      finalReducers[key] = reducers[key];
    }
  }
  var finalReducerKeys = Object.keys(finalReducers);

  if (true) {
    var unexpectedKeyCache = {};
  }

  var sanityError;
  try {
    assertReducerSanity(finalReducers);
  } catch (e) {
    sanityError = e;
  }

  return function combination() {
    var state = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
    var action = arguments[1];

    if (sanityError) {
      throw sanityError;
    }

    if (true) {
      var warningMessage = getUnexpectedStateShapeWarningMessage(state, finalReducers, action, unexpectedKeyCache);
      if (warningMessage) {
        Object(_utils_warning__WEBPACK_IMPORTED_MODULE_2__["default"])(warningMessage);
      }
    }

    var hasChanged = false;
    var nextState = {};
    for (var i = 0; i < finalReducerKeys.length; i++) {
      var key = finalReducerKeys[i];
      var reducer = finalReducers[key];
      var previousStateForKey = state[key];
      var nextStateForKey = reducer(previousStateForKey, action);
      if (typeof nextStateForKey === 'undefined') {
        var errorMessage = getUndefinedStateErrorMessage(key, action);
        throw new Error(errorMessage);
      }
      nextState[key] = nextStateForKey;
      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
    }
    return hasChanged ? nextState : state;
  };
}

/***/ }),

/***/ "NOEC":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/ProgressIndicator/ProgressIndicator.styles.js ***!
  \************************************************************************************************************************************************************************************************************************/
/*! exports provided: getStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStyles", function() { return getStyles; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Styling__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Styling */ "PL71");
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Utilities */ "mkpW");



var GlobalClassNames = {
    root: 'ms-ProgressIndicator',
    itemName: 'ms-ProgressIndicator-itemName',
    itemDescription: 'ms-ProgressIndicator-itemDescription',
    itemProgress: 'ms-ProgressIndicator-itemProgress',
    progressTrack: 'ms-ProgressIndicator-progressTrack',
    progressBar: 'ms-ProgressIndicator-progressBar',
};
var IndeterminateProgress = Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["memoizeFunction"])(function () {
    return Object(_Styling__WEBPACK_IMPORTED_MODULE_1__["keyframes"])({
        '0%': {
            left: '-30%',
        },
        '100%': {
            left: '100%',
        },
    });
});
var IndeterminateProgressRTL = Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["memoizeFunction"])(function () {
    return Object(_Styling__WEBPACK_IMPORTED_MODULE_1__["keyframes"])({
        '100%': {
            right: '-30%',
        },
        '0%': {
            right: '100%',
        },
    });
});
var getStyles = function (props) {
    var _a, _b, _c;
    var isRTL = Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["getRTL"])(props.theme);
    var className = props.className, indeterminate = props.indeterminate, theme = props.theme, _d = props.barHeight, barHeight = _d === void 0 ? 2 : _d;
    var palette = theme.palette, semanticColors = theme.semanticColors, fonts = theme.fonts;
    var classNames = Object(_Styling__WEBPACK_IMPORTED_MODULE_1__["getGlobalClassNames"])(GlobalClassNames, theme);
    var marginBetweenText = 8;
    var textHeight = 18;
    var progressTrackColor = palette.neutralLight;
    return {
        root: [classNames.root, fonts.medium, className],
        itemName: [
            classNames.itemName,
            _Styling__WEBPACK_IMPORTED_MODULE_1__["noWrap"],
            {
                color: semanticColors.bodyText,
                paddingTop: marginBetweenText / 2,
                lineHeight: textHeight + 2,
            },
        ],
        itemDescription: [
            classNames.itemDescription,
            {
                color: semanticColors.bodySubtext,
                fontSize: fonts.small.fontSize,
                lineHeight: textHeight,
            },
        ],
        itemProgress: [
            classNames.itemProgress,
            {
                position: 'relative',
                overflow: 'hidden',
                height: barHeight,
                padding: marginBetweenText + "px 0",
            },
        ],
        progressTrack: [
            classNames.progressTrack,
            {
                position: 'absolute',
                width: '100%',
                height: barHeight,
                backgroundColor: progressTrackColor,
                selectors: (_a = {},
                    _a[_Styling__WEBPACK_IMPORTED_MODULE_1__["HighContrastSelector"]] = {
                        borderBottom: '1px solid WindowText',
                    },
                    _a),
            },
        ],
        progressBar: [
            {
                backgroundColor: palette.themePrimary,
                height: barHeight,
                position: 'absolute',
                transition: 'width .3s ease',
                width: 0,
                selectors: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])((_b = {}, _b[_Styling__WEBPACK_IMPORTED_MODULE_1__["HighContrastSelector"]] = {
                    backgroundColor: 'highlight',
                }, _b), Object(_Styling__WEBPACK_IMPORTED_MODULE_1__["getEdgeChromiumNoHighContrastAdjustSelector"])()),
            },
            indeterminate
                ? {
                    position: 'absolute',
                    minWidth: '33%',
                    background: "linear-gradient(to right, " + progressTrackColor + " 0%, " +
                        (palette.themePrimary + " 50%, " + progressTrackColor + " 100%)"),
                    animation: (isRTL ? IndeterminateProgressRTL() : IndeterminateProgress()) + " 3s infinite",
                    selectors: (_c = {},
                        _c[_Styling__WEBPACK_IMPORTED_MODULE_1__["HighContrastSelector"]] = {
                            background: "highlight",
                        },
                        _c),
                }
                : {
                    transition: 'width .15s linear',
                },
            classNames.progressBar,
        ],
    };
};
//# sourceMappingURL=ProgressIndicator.styles.js.map

/***/ }),

/***/ "NwWT":
/*!**************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/lodash-es@4.17.20/node_modules/lodash-es/_getRawTag.js ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_Symbol.js */ "O/dw");


/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = _Symbol_js__WEBPACK_IMPORTED_MODULE_0__["default"] ? _Symbol_js__WEBPACK_IMPORTED_MODULE_0__["default"].toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

/* harmony default export */ __webpack_exports__["default"] = (getRawTag);


/***/ }),

/***/ "O/dw":
/*!***********************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/lodash-es@4.17.20/node_modules/lodash-es/_Symbol.js ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _root_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_root.js */ "Z+Tx");


/** Built-in value references. */
var Symbol = _root_js__WEBPACK_IMPORTED_MODULE_0__["default"].Symbol;

/* harmony default export */ __webpack_exports__["default"] = (Symbol);


/***/ }),

/***/ "OPY8":
/*!*****************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/lodash-es@4.17.20/node_modules/lodash-es/_getPrototype.js ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _overArg_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_overArg.js */ "/jB0");


/** Built-in value references. */
var getPrototype = Object(_overArg_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Object.getPrototypeOf, Object);

/* harmony default export */ __webpack_exports__["default"] = (getPrototype);


/***/ }),

/***/ "OjPL":
/*!************************************************!*\
  !*** ./lib/core/reducers/SiteChromeReducer.js ***!
  \************************************************/
/*! exports provided: siteChromeReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "siteChromeReducer", function() { return siteChromeReducer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);

/**
 * Site chrome reducer
 * @param state - Represents the current site chrome state
 * @param action - Represents the current action
 */
// tslint:disable-next-line:export-name
function siteChromeReducer(state, action) {
    switch (action.type) {
        case "CHROME_CONFIG_LOAD" /* CHROME_CONFIG_LOAD */:
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, state), { forceUpdate: true, chromeOptions: action.payload });
        case "LOAD_DEFERRED_CHROME_COMPONENTS" /* LOAD_DEFERRED_CHROME_COMPONENTS */:
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, state), { forceUpdate: false, renderDeferredComponents: true });
        case "SET_ISWELCOMEPAGE" /* SET_ISWELCOMEPAGE */:
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, state), { forceUpdate: false, isWelcomePage: action.payload });
        case "UPDATE_NAVLINKS" /* UPDATE_NAVLINKS */:
        case "UPDATE_PAGECONTEXT" /* UPDATE_PAGECONTEXT */:
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, state), { forceUpdate: true });
        case "SHOW_EDITNAV" /* SHOW_EDITNAV */:
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, state), { showEditNav: true, forceUpdate: false, editNavProps: action.payload });
        case "CLOSE_EDITNAV" /* CLOSE_EDITNAV */:
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, state), { showEditNav: false, forceUpdate: false, editNavProps: undefined });
        case "TOGGLE_NAVONTOP" /* TOGGLE_NAVONTOP */:
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, state), { forceUpdate: false, isNavOnTop: !state.isNavOnTop });
        default:
            return state || {};
    }
}


/***/ }),

/***/ "PBJ4":
/*!***************************************************************!*\
  !*** ./lib/core/components/chrome/SiteFooter/SiteFooter.resx ***!
  \***************************************************************/
/*! exports provided: poweredBy, createSite, mobileUpsell, mobileUpsellAria, edit, editAriaLabel, companyLogoAlt, EditNavFooterTitle, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"poweredBy\":\"Ƥōŵēŕēď ƀŷ ŚĥàŕēƤōĩńţ ćōmmũńĩćàţĩōń śĩţēś.\",\"createSite\":\"Ćĺĩćķ ĥēŕē ţō ćŕēàţē ŷōũŕ ōŵń.\",\"mobileUpsell\":\"Ĝēţ Mōƀĩĺē Àƥƥ\",\"mobileUpsellAria\":\"ĝēţ mōƀĩĺē àƥƥ ƒōōţēŕ ćōńţŕōĺ\",\"edit\":\"Ēďĩţ\",\"editAriaLabel\":\"Ēďĩţ śĩţē ƒōōţēŕ ĺĩńķś\",\"companyLogoAlt\":\"Ćōmƥàńŷ ĺōĝō\",\"EditNavFooterTitle\":\"Ēďĩţ ƒōōţēŕ\"}");

/***/ }),

/***/ "PDHC":
/*!***************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/lodash-es@4.17.20/node_modules/lodash-es/_freeGlobal.js ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/* harmony default export */ __webpack_exports__["default"] = (freeGlobal);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack@4.44.2/node_modules/webpack/buildin/global.js */ "c5Wh")))

/***/ }),

/***/ "PL71":
/*!**************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/Styling.js ***!
  \**************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/office-ui-fabric-react-bundle */ "KL1q");
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
// Loading office-ui-fabric-react/./lib/Styling.js


/***/ }),

/***/ "Pk8u":
/*!**********************************************!*\
  !*** external "@microsoft/sp-lodash-subset" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_Pk8u__;

/***/ }),

/***/ "Plin":
/*!********************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/history@4.7.2/node_modules/history/es/createMemoryHistory.js ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! warning */ "4qLk");
/* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(warning__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _PathUtils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PathUtils */ "K/iH");
/* harmony import */ var _LocationUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LocationUtils */ "9OPX");
/* harmony import */ var _createTransitionManager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./createTransitionManager */ "6HbI");
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };






var clamp = function clamp(n, lowerBound, upperBound) {
  return Math.min(Math.max(n, lowerBound), upperBound);
};

/**
 * Creates a history object that stores locations in memory.
 */
var createMemoryHistory = function createMemoryHistory() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var getUserConfirmation = props.getUserConfirmation,
      _props$initialEntries = props.initialEntries,
      initialEntries = _props$initialEntries === undefined ? ['/'] : _props$initialEntries,
      _props$initialIndex = props.initialIndex,
      initialIndex = _props$initialIndex === undefined ? 0 : _props$initialIndex,
      _props$keyLength = props.keyLength,
      keyLength = _props$keyLength === undefined ? 6 : _props$keyLength;


  var transitionManager = Object(_createTransitionManager__WEBPACK_IMPORTED_MODULE_3__["default"])();

  var setState = function setState(nextState) {
    _extends(history, nextState);

    history.length = history.entries.length;

    transitionManager.notifyListeners(history.location, history.action);
  };

  var createKey = function createKey() {
    return Math.random().toString(36).substr(2, keyLength);
  };

  var index = clamp(initialIndex, 0, initialEntries.length - 1);
  var entries = initialEntries.map(function (entry) {
    return typeof entry === 'string' ? Object(_LocationUtils__WEBPACK_IMPORTED_MODULE_2__["createLocation"])(entry, undefined, createKey()) : Object(_LocationUtils__WEBPACK_IMPORTED_MODULE_2__["createLocation"])(entry, undefined, entry.key || createKey());
  });

  // Public interface

  var createHref = _PathUtils__WEBPACK_IMPORTED_MODULE_1__["createPath"];

  var push = function push(path, state) {
    warning__WEBPACK_IMPORTED_MODULE_0___default()(!((typeof path === 'undefined' ? 'undefined' : _typeof(path)) === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to push when the 1st ' + 'argument is a location-like object that already has state; it is ignored');

    var action = 'PUSH';
    var location = Object(_LocationUtils__WEBPACK_IMPORTED_MODULE_2__["createLocation"])(path, state, createKey(), history.location);

    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;

      var prevIndex = history.index;
      var nextIndex = prevIndex + 1;

      var nextEntries = history.entries.slice(0);
      if (nextEntries.length > nextIndex) {
        nextEntries.splice(nextIndex, nextEntries.length - nextIndex, location);
      } else {
        nextEntries.push(location);
      }

      setState({
        action: action,
        location: location,
        index: nextIndex,
        entries: nextEntries
      });
    });
  };

  var replace = function replace(path, state) {
    warning__WEBPACK_IMPORTED_MODULE_0___default()(!((typeof path === 'undefined' ? 'undefined' : _typeof(path)) === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to replace when the 1st ' + 'argument is a location-like object that already has state; it is ignored');

    var action = 'REPLACE';
    var location = Object(_LocationUtils__WEBPACK_IMPORTED_MODULE_2__["createLocation"])(path, state, createKey(), history.location);

    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;

      history.entries[history.index] = location;

      setState({ action: action, location: location });
    });
  };

  var go = function go(n) {
    var nextIndex = clamp(history.index + n, 0, history.entries.length - 1);

    var action = 'POP';
    var location = history.entries[nextIndex];

    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (ok) {
        setState({
          action: action,
          location: location,
          index: nextIndex
        });
      } else {
        // Mimic the behavior of DOM histories by
        // causing a render after a cancelled POP.
        setState();
      }
    });
  };

  var goBack = function goBack() {
    return go(-1);
  };

  var goForward = function goForward() {
    return go(1);
  };

  var canGo = function canGo(n) {
    var nextIndex = history.index + n;
    return nextIndex >= 0 && nextIndex < history.entries.length;
  };

  var block = function block() {
    var prompt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    return transitionManager.setPrompt(prompt);
  };

  var listen = function listen(listener) {
    return transitionManager.appendListener(listener);
  };

  var history = {
    length: entries.length,
    action: 'POP',
    location: entries[index],
    index: index,
    entries: entries,
    createHref: createHref,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    canGo: canGo,
    block: block,
    listen: listen
  };

  return history;
};

/* harmony default export */ __webpack_exports__["default"] = (createMemoryHistory);

/***/ }),

/***/ "Q/MY":
/*!******************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/history@4.7.2/node_modules/history/es/createHashHistory.js ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! warning */ "4qLk");
/* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(warning__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! invariant */ "EMEJ");
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(invariant__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _LocationUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LocationUtils */ "9OPX");
/* harmony import */ var _PathUtils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PathUtils */ "K/iH");
/* harmony import */ var _createTransitionManager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./createTransitionManager */ "6HbI");
/* harmony import */ var _DOMUtils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./DOMUtils */ "FElI");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };








var HashChangeEvent = 'hashchange';

var HashPathCoders = {
  hashbang: {
    encodePath: function encodePath(path) {
      return path.charAt(0) === '!' ? path : '!/' + Object(_PathUtils__WEBPACK_IMPORTED_MODULE_3__["stripLeadingSlash"])(path);
    },
    decodePath: function decodePath(path) {
      return path.charAt(0) === '!' ? path.substr(1) : path;
    }
  },
  noslash: {
    encodePath: _PathUtils__WEBPACK_IMPORTED_MODULE_3__["stripLeadingSlash"],
    decodePath: _PathUtils__WEBPACK_IMPORTED_MODULE_3__["addLeadingSlash"]
  },
  slash: {
    encodePath: _PathUtils__WEBPACK_IMPORTED_MODULE_3__["addLeadingSlash"],
    decodePath: _PathUtils__WEBPACK_IMPORTED_MODULE_3__["addLeadingSlash"]
  }
};

var getHashPath = function getHashPath() {
  // We can't use window.location.hash here because it's not
  // consistent across browsers - Firefox will pre-decode it!
  var href = window.location.href;
  var hashIndex = href.indexOf('#');
  return hashIndex === -1 ? '' : href.substring(hashIndex + 1);
};

var pushHashPath = function pushHashPath(path) {
  return window.location.hash = path;
};

var replaceHashPath = function replaceHashPath(path) {
  var hashIndex = window.location.href.indexOf('#');

  window.location.replace(window.location.href.slice(0, hashIndex >= 0 ? hashIndex : 0) + '#' + path);
};

var createHashHistory = function createHashHistory() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  invariant__WEBPACK_IMPORTED_MODULE_1___default()(_DOMUtils__WEBPACK_IMPORTED_MODULE_5__["canUseDOM"], 'Hash history needs a DOM');

  var globalHistory = window.history;
  var canGoWithoutReload = Object(_DOMUtils__WEBPACK_IMPORTED_MODULE_5__["supportsGoWithoutReloadUsingHash"])();

  var _props$getUserConfirm = props.getUserConfirmation,
      getUserConfirmation = _props$getUserConfirm === undefined ? _DOMUtils__WEBPACK_IMPORTED_MODULE_5__["getConfirmation"] : _props$getUserConfirm,
      _props$hashType = props.hashType,
      hashType = _props$hashType === undefined ? 'slash' : _props$hashType;

  var basename = props.basename ? Object(_PathUtils__WEBPACK_IMPORTED_MODULE_3__["stripTrailingSlash"])(Object(_PathUtils__WEBPACK_IMPORTED_MODULE_3__["addLeadingSlash"])(props.basename)) : '';

  var _HashPathCoders$hashT = HashPathCoders[hashType],
      encodePath = _HashPathCoders$hashT.encodePath,
      decodePath = _HashPathCoders$hashT.decodePath;


  var getDOMLocation = function getDOMLocation() {
    var path = decodePath(getHashPath());

    warning__WEBPACK_IMPORTED_MODULE_0___default()(!basename || Object(_PathUtils__WEBPACK_IMPORTED_MODULE_3__["hasBasename"])(path, basename), 'You are attempting to use a basename on a page whose URL path does not begin ' + 'with the basename. Expected path "' + path + '" to begin with "' + basename + '".');

    if (basename) path = Object(_PathUtils__WEBPACK_IMPORTED_MODULE_3__["stripBasename"])(path, basename);

    return Object(_LocationUtils__WEBPACK_IMPORTED_MODULE_2__["createLocation"])(path);
  };

  var transitionManager = Object(_createTransitionManager__WEBPACK_IMPORTED_MODULE_4__["default"])();

  var setState = function setState(nextState) {
    _extends(history, nextState);

    history.length = globalHistory.length;

    transitionManager.notifyListeners(history.location, history.action);
  };

  var forceNextPop = false;
  var ignorePath = null;

  var handleHashChange = function handleHashChange() {
    var path = getHashPath();
    var encodedPath = encodePath(path);

    if (path !== encodedPath) {
      // Ensure we always have a properly-encoded hash.
      replaceHashPath(encodedPath);
    } else {
      var location = getDOMLocation();
      var prevLocation = history.location;

      if (!forceNextPop && Object(_LocationUtils__WEBPACK_IMPORTED_MODULE_2__["locationsAreEqual"])(prevLocation, location)) return; // A hashchange doesn't always == location change.

      if (ignorePath === Object(_PathUtils__WEBPACK_IMPORTED_MODULE_3__["createPath"])(location)) return; // Ignore this change; we already setState in push/replace.

      ignorePath = null;

      handlePop(location);
    }
  };

  var handlePop = function handlePop(location) {
    if (forceNextPop) {
      forceNextPop = false;
      setState();
    } else {
      var action = 'POP';

      transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
        if (ok) {
          setState({ action: action, location: location });
        } else {
          revertPop(location);
        }
      });
    }
  };

  var revertPop = function revertPop(fromLocation) {
    var toLocation = history.location;

    // TODO: We could probably make this more reliable by
    // keeping a list of paths we've seen in sessionStorage.
    // Instead, we just default to 0 for paths we don't know.

    var toIndex = allPaths.lastIndexOf(Object(_PathUtils__WEBPACK_IMPORTED_MODULE_3__["createPath"])(toLocation));

    if (toIndex === -1) toIndex = 0;

    var fromIndex = allPaths.lastIndexOf(Object(_PathUtils__WEBPACK_IMPORTED_MODULE_3__["createPath"])(fromLocation));

    if (fromIndex === -1) fromIndex = 0;

    var delta = toIndex - fromIndex;

    if (delta) {
      forceNextPop = true;
      go(delta);
    }
  };

  // Ensure the hash is encoded properly before doing anything else.
  var path = getHashPath();
  var encodedPath = encodePath(path);

  if (path !== encodedPath) replaceHashPath(encodedPath);

  var initialLocation = getDOMLocation();
  var allPaths = [Object(_PathUtils__WEBPACK_IMPORTED_MODULE_3__["createPath"])(initialLocation)];

  // Public interface

  var createHref = function createHref(location) {
    return '#' + encodePath(basename + Object(_PathUtils__WEBPACK_IMPORTED_MODULE_3__["createPath"])(location));
  };

  var push = function push(path, state) {
    warning__WEBPACK_IMPORTED_MODULE_0___default()(state === undefined, 'Hash history cannot push state; it is ignored');

    var action = 'PUSH';
    var location = Object(_LocationUtils__WEBPACK_IMPORTED_MODULE_2__["createLocation"])(path, undefined, undefined, history.location);

    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;

      var path = Object(_PathUtils__WEBPACK_IMPORTED_MODULE_3__["createPath"])(location);
      var encodedPath = encodePath(basename + path);
      var hashChanged = getHashPath() !== encodedPath;

      if (hashChanged) {
        // We cannot tell if a hashchange was caused by a PUSH, so we'd
        // rather setState here and ignore the hashchange. The caveat here
        // is that other hash histories in the page will consider it a POP.
        ignorePath = path;
        pushHashPath(encodedPath);

        var prevIndex = allPaths.lastIndexOf(Object(_PathUtils__WEBPACK_IMPORTED_MODULE_3__["createPath"])(history.location));
        var nextPaths = allPaths.slice(0, prevIndex === -1 ? 0 : prevIndex + 1);

        nextPaths.push(path);
        allPaths = nextPaths;

        setState({ action: action, location: location });
      } else {
        warning__WEBPACK_IMPORTED_MODULE_0___default()(false, 'Hash history cannot PUSH the same path; a new entry will not be added to the history stack');

        setState();
      }
    });
  };

  var replace = function replace(path, state) {
    warning__WEBPACK_IMPORTED_MODULE_0___default()(state === undefined, 'Hash history cannot replace state; it is ignored');

    var action = 'REPLACE';
    var location = Object(_LocationUtils__WEBPACK_IMPORTED_MODULE_2__["createLocation"])(path, undefined, undefined, history.location);

    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;

      var path = Object(_PathUtils__WEBPACK_IMPORTED_MODULE_3__["createPath"])(location);
      var encodedPath = encodePath(basename + path);
      var hashChanged = getHashPath() !== encodedPath;

      if (hashChanged) {
        // We cannot tell if a hashchange was caused by a REPLACE, so we'd
        // rather setState here and ignore the hashchange. The caveat here
        // is that other hash histories in the page will consider it a POP.
        ignorePath = path;
        replaceHashPath(encodedPath);
      }

      var prevIndex = allPaths.indexOf(Object(_PathUtils__WEBPACK_IMPORTED_MODULE_3__["createPath"])(history.location));

      if (prevIndex !== -1) allPaths[prevIndex] = path;

      setState({ action: action, location: location });
    });
  };

  var go = function go(n) {
    warning__WEBPACK_IMPORTED_MODULE_0___default()(canGoWithoutReload, 'Hash history go(n) causes a full page reload in this browser');

    globalHistory.go(n);
  };

  var goBack = function goBack() {
    return go(-1);
  };

  var goForward = function goForward() {
    return go(1);
  };

  var listenerCount = 0;

  var checkDOMListeners = function checkDOMListeners(delta) {
    listenerCount += delta;

    if (listenerCount === 1) {
      Object(_DOMUtils__WEBPACK_IMPORTED_MODULE_5__["addEventListener"])(window, HashChangeEvent, handleHashChange);
    } else if (listenerCount === 0) {
      Object(_DOMUtils__WEBPACK_IMPORTED_MODULE_5__["removeEventListener"])(window, HashChangeEvent, handleHashChange);
    }
  };

  var isBlocked = false;

  var block = function block() {
    var prompt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    var unblock = transitionManager.setPrompt(prompt);

    if (!isBlocked) {
      checkDOMListeners(1);
      isBlocked = true;
    }

    return function () {
      if (isBlocked) {
        isBlocked = false;
        checkDOMListeners(-1);
      }

      return unblock();
    };
  };

  var listen = function listen(listener) {
    var unlisten = transitionManager.appendListener(listener);
    checkDOMListeners(1);

    return function () {
      checkDOMListeners(-1);
      unlisten();
    };
  };

  var history = {
    length: globalHistory.length,
    action: 'POP',
    location: initialLocation,
    createHref: createHref,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    block: block,
    listen: listen
  };

  return history;
};

/* harmony default export */ __webpack_exports__["default"] = (createHashHistory);

/***/ }),

/***/ "QUgr":
/*!*******************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-utilities@29.7.9_5d977624104b06c7bcaa2de974ff51f1/node_modules/@ms/odsp-utilities/lib/killswitch/Killswitch.js ***!
  \*******************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ms/odsp-core-bundle */ "K9kD");
/* harmony import */ var _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
// Loading @ms/odsp-utilities/./lib/killswitch/Killswitch.js


/***/ }),

/***/ "Qp6t":
/*!************************************************************************!*\
  !*** ./lib/core/services/suiteNav/PageSuiteNavConfigurationService.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _BasePageApplicationService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../BasePageApplicationService */ "ITs/");

/**
 * @copyright Microsoft Corporation. All rights reserved.
 */


/**
 * Represents a suite navigation configuration service which provides
 * suite nav configuration services to page-based applications
 *
 * @internal
 */
var PageSuiteNavConfigurationService = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(PageSuiteNavConfigurationService, _super);
    /**
     * Initializes a new instance of the suite nav configuration service.
     * @param serviceScope - Represents the service scope
     */
    function PageSuiteNavConfigurationService(serviceScope) {
        return _super.call(this, serviceScope, {
            serviceKey: PageSuiteNavConfigurationService.serviceKey,
            isShared: false
        }) || this;
    }
    /**
     * Creates a page suite nav configuration manager
     * @param config - Represents the suite nav config data.
     * @param configMgrFactory - Represents the configuration manager factory.
     */
    PageSuiteNavConfigurationService.prototype.createSuiteNavConfigManager = function (config, configMgrFactory) {
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["Validate"].isNotNullOrUndefined(config, 'config');
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["Validate"].isNotNullOrUndefined(configMgrFactory, 'configMgrFactory');
        _super.prototype.createServiceComponent.call(this, config, configMgrFactory);
    };
    Object.defineProperty(PageSuiteNavConfigurationService.prototype, "suiteNavConfigManager", {
        /**
         * Gets the page suite navigation configuration manager.
         */
        get: function () {
            return this.serviceComponent;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Gets the service key.
     */
    PageSuiteNavConfigurationService.serviceKey = _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["ServiceKey"].create("sp-pages-core:SuiteConfigurationService" /* SuiteConfigurationService */, PageSuiteNavConfigurationService);
    return PageSuiteNavConfigurationService;
}(_BasePageApplicationService__WEBPACK_IMPORTED_MODULE_2__["default"]));
/* harmony default export */ __webpack_exports__["default"] = (PageSuiteNavConfigurationService);


/***/ }),

/***/ "R0P3":
/*!*****************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/lodash-es@4.17.20/node_modules/lodash-es/isPlainObject.js ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _baseGetTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_baseGetTag.js */ "1p9G");
/* harmony import */ var _getPrototype_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_getPrototype.js */ "OPY8");
/* harmony import */ var _isObjectLike_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isObjectLike.js */ "mBjQ");




/** `Object#toString` result references. */
var objectTag = '[object Object]';

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to infer the `Object` constructor. */
var objectCtorString = funcToString.call(Object);

/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */
function isPlainObject(value) {
  if (!Object(_isObjectLike_js__WEBPACK_IMPORTED_MODULE_2__["default"])(value) || Object(_baseGetTag_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value) != objectTag) {
    return false;
  }
  var proto = Object(_getPrototype_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
    funcToString.call(Ctor) == objectCtorString;
}

/* harmony default export */ __webpack_exports__["default"] = (isPlainObject);


/***/ }),

/***/ "REfO":
/*!*******************************************!*\
  !*** ./lib/core/reducers/RouteReducer.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__);
/**
 * @copyright Microsoft Corporation. All rights reserved.
 */

/**
 * Represents the default route reducer
 */
var RouteReducer = /** @class */ (function () {
    function RouteReducer() {
    }
    /**
     * Provides the reducer callback
     * @param state - Represents the Router state
     * @param action - Represents the Route action
     *
     * @returns A new Router state
     *
     * @remarks
     * @todo: This is temporary and will be updated with more pertinent actions.
     */
    // tslint:disable-next-line:no-any
    RouteReducer.reducer = 
    // tslint:disable-next-line:no-any
    function (state, action) {
        state = state || {
            currentRoute: '',
            inTransition: false,
            nextRoute: '',
            isXOrigin: false,
            mode: _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["DisplayMode"].Read
        };
        switch (action.type) {
            default:
                return state;
        }
    };
    return RouteReducer;
}());
/* harmony default export */ __webpack_exports__["default"] = (RouteReducer);


/***/ }),

/***/ "RmMj":
/*!******************************************************!*\
  !*** ./lib/core/components/chrome/BasePage.Props.js ***!
  \******************************************************/
/*! exports provided: pageContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pageContext", function() { return pageContext; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/**
 * @file BasePage.Props.ts
 *
 * @Copyright (c) Microsoft Corporation.  All rights reserved.
 */

/**
 * Provides access to the React page context.
 * @internal
 */
var pageContext = react__WEBPACK_IMPORTED_MODULE_0__["createContext"]({});


/***/ }),

/***/ "T2Nm":
/*!****************************************************!*\
  !*** ./lib/core/services/router/RoutingService.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _BasePageApplicationService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../BasePageApplicationService */ "ITs/");
/**
 * @copyright Microsoft Corporation. All rights reserved.
 */



/**
 * Represents the Page routing service which provides routing capabilities
 * to the page-based application
 *
 * @internal
 */
var RoutingService = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(RoutingService, _super);
    /**
     * Initializes a new instance of the routing service.
     * @param serviceScope - Represents the service scope
     */
    function RoutingService(serviceScope) {
        return _super.call(this, serviceScope, {
            serviceKey: RoutingService.serviceKey,
            isShared: false
        }) || this;
    }
    /**
     * Creates a router based on the route configuration.
     * @param config - Represents the route config.
     * @param routerFactory - Represents the router factory.
     */
    RoutingService.prototype.createRouter = function (config, routerFactory) {
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["Validate"].isNotNullOrUndefined(config, 'config');
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["Validate"].isNotNullOrUndefined(routerFactory, 'routerFactory');
        _super.prototype.createServiceComponent.call(this, config, routerFactory);
    };
    Object.defineProperty(RoutingService.prototype, "router", {
        /**
         * Gets the router associated with the routing service
         */
        get: function () {
            return this.serviceComponent;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Gets the service key.
     */
    RoutingService.serviceKey = _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["ServiceKey"].create("sp-pages-core:RoutingService" /* RoutingService */, RoutingService);
    return RoutingService;
}(_BasePageApplicationService__WEBPACK_IMPORTED_MODULE_2__["default"]));
/* harmony default export */ __webpack_exports__["default"] = (RoutingService);


/***/ }),

/***/ "TgFA":
/*!**************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/redux@3.6.0/node_modules/redux/es/index.js ***!
  \**************************************************************************************************/
/*! exports provided: createStore, combineReducers, bindActionCreators, applyMiddleware, compose */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createStore */ "hok/");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createStore", function() { return _createStore__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _combineReducers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./combineReducers */ "NDu+");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "combineReducers", function() { return _combineReducers__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _bindActionCreators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bindActionCreators */ "skTp");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bindActionCreators", function() { return _bindActionCreators__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _applyMiddleware__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./applyMiddleware */ "+sSs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "applyMiddleware", function() { return _applyMiddleware__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _compose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./compose */ "zLLz");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "compose", function() { return _compose__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _utils_warning__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/warning */ "oAK6");







/*
* This is a dummy function to check if the function name has been altered by minification.
* If the function has been minified and NODE_ENV !== 'production', warn the user.
*/
function isCrushed() {}

if ( true && typeof isCrushed.name === 'string' && isCrushed.name !== 'isCrushed') {
  Object(_utils_warning__WEBPACK_IMPORTED_MODULE_5__["default"])('You are currently using minified code outside of NODE_ENV === \'production\'. ' + 'This means that you are running a slower development build of Redux. ' + 'You can use loose-envify (https://github.com/zertosh/loose-envify) for browserify ' + 'or DefinePlugin for webpack (http://stackoverflow.com/questions/30030031) ' + 'to ensure you have the correct code for your production build.');
}



/***/ }),

/***/ "U+mq":
/*!***************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/object-assign@4.1.1/node_modules/object-assign/index.js ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),

/***/ "UKDt":
/*!*************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-utilities@29.7.9_5d977624104b06c7bcaa2de974ff51f1/node_modules/@ms/odsp-utilities/lib/logging/rumone/RUMOneLogger.js ***!
  \*************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ms/odsp-core-bundle */ "K9kD");
/* harmony import */ var _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__["RumOneLogger"]; });

// Loading @ms/odsp-utilities/./lib/logging/rumone/RUMOneLogger.js



/***/ }),

/***/ "UWqr":
/*!*********************************************!*\
  !*** external "@microsoft/sp-core-library" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_UWqr__;

/***/ }),

/***/ "UXj/":
/*!****************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/prop-types@15.7.2/node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactIs = __webpack_require__(/*! react-is */ "taRQ");
var assign = __webpack_require__(/*! object-assign */ "U+mq");

var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "Bqrk");
var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ "+FEy");

var has = Function.call.bind(Object.prototype.hasOwnProperty);
var printWarning = function() {};

if (true) {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if ( true && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!ReactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (true) {
        if (arguments.length > 1) {
          printWarning(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : undefined;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "V/8F":
/*!************************************************************************!*\
  !*** ./lib/core/components/webViewCommunicator/WebViewCommunicator.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @microsoft/sp-diagnostics */ "ut3N");
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @microsoft/office-ui-fabric-react-bundle */ "KL1q");
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_3__);
/**
 * @copyright Microsoft Corporation. All rights reserved.
 */
// tslint:disable:no-string-literal




/**
 * @internal
 * Used as a lightweight layer to send messages to host applications (iOS, Android, Teams, etc).
 * Messages received back from the host are emitted as SPEvents.
 */
var WebViewCommunicator = /** @class */ (function () {
    function WebViewCommunicator() {
        this.isDisposed = false;
        window.addEventListener('message', this._onPostMessage);
        this._spEvent = new _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["SPEvent"](WebViewCommunicator._eventName);
    }
    Object.defineProperty(WebViewCommunicator.prototype, "spEvent", {
        /**
         * SPEvent instance used to add/remove subscribers to host messages.
         */
        get: function () {
            return this._spEvent;
        },
        enumerable: true,
        configurable: true
    });
    WebViewCommunicator.prototype.dispose = function () {
        window.removeEventListener('message', this._onPostMessage);
        this.isDisposed = true;
    };
    /**
     * Sends a message to the host application.
     * @param message the message to send to the host
     * @returns a promise that rejects if the message fails to send
     */
    WebViewCommunicator.prototype.sendMessage = function (message) {
        // Do not cache this value. The JS bridge reference will get reassigned by the native app.
        var callbackHandler = window['webkit'] && window['webkit'].messageHandlers.callbackHandler;
        if (!callbackHandler) {
            callbackHandler = window['__callbackHandler'];
            // The native Android callback allows only strings be passed
            if (typeof message !== 'string') {
                message = JSON.stringify(message);
            }
        }
        if (callbackHandler) {
            try {
                callbackHandler.postMessage(message);
                return Promise.resolve();
            }
            catch (error) {
                _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__["_TraceLogger"].logError(WebViewCommunicator._logSource, error);
                return Promise.reject(error);
            }
        }
        else {
            var error = new Error('No callbackHandler found.');
            _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__["_TraceLogger"].logError(WebViewCommunicator._logSource, error);
            return Promise.reject(error);
        }
    };
    WebViewCommunicator.prototype._onPostMessage = function (event) {
        var data = event['data'];
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["_SPEventManager"].instance.raiseEvent(WebViewCommunicator._eventName, data);
    };
    WebViewCommunicator._logSource = _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__["_LogSource"].create('CoreWebViewCommunicator');
    WebViewCommunicator._eventName = 'sp-pages-core:WebViewCommunicator';
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_3__["autobind"]
    ], WebViewCommunicator.prototype, "_onPostMessage", null);
    return WebViewCommunicator;
}());
/* harmony default export */ __webpack_exports__["default"] = (WebViewCommunicator);


/***/ }),

/***/ "V2ch":
/*!*****************************************************************!*\
  !*** ./lib/core/utilities/WebViewCommunicatorServiceFactory.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Killswitches__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Killswitches */ "XjSx");
/* harmony import */ var _ServiceUtility__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ServiceUtility */ "g4+3");
/* harmony import */ var _SPPagesCore_resx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../SPPagesCore.resx */ "hWnv");
var _SPPagesCore_resx__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../SPPagesCore.resx */ "hWnv", 1);
/* harmony import */ var _components_webViewCommunicator_webViewCommunicatorLoader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/webViewCommunicator/webViewCommunicatorLoader */ "uj7c");
/* harmony import */ var _components_webViewCommunicator_WebViewCommunicator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/webViewCommunicator/WebViewCommunicator */ "V/8F");
/* harmony import */ var _services_webViewCommunicatorService_WebViewCommunicatorService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/webViewCommunicatorService/WebViewCommunicatorService */ "ytyC");
/**
 * @copyright Microsoft Corporation. All rights reserved.
 */







/**
 * Represents a WebView communicator service factory
 *
 * @internal
 */
var WebViewCommunicatorServiceFactory = /** @class */ (function () {
    function WebViewCommunicatorServiceFactory() {
    }
    /**
     * Utility method to load the web view communication service.
     * Page-based applications need to call this in order to enable the host
     * messaging included as part of link interception.
     *
     * @returns A promise with the created WebViewCommunicatorService
     *
     * @remarks
     * Additional configuration is required as part of the routeConfig in order to make the host communication
     * as part of link interception work correctly.
     */
    WebViewCommunicatorServiceFactory.loadWebViewCommunicatorService = function (context) {
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Validate"].isNotNullOrUndefined(context, 'context');
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Validate"].isNotDisposed(context, 'context');
        var webViewCommunicatorService = context.fetchService(_services_webViewCommunicatorService_WebViewCommunicatorService__WEBPACK_IMPORTED_MODULE_6__["default"].serviceKey);
        return webViewCommunicatorService
            ? Promise.resolve(webViewCommunicatorService)
            : _ServiceUtility__WEBPACK_IMPORTED_MODULE_2__["default"].loadService({}, function () {
                return new _services_webViewCommunicatorService_WebViewCommunicatorService__WEBPACK_IMPORTED_MODULE_6__["default"](context.pageApplicationServiceScope);
            }, function (svc) {
                svc = context.registerService(svc);
                if (!_Killswitches__WEBPACK_IMPORTED_MODULE_1__["default"].isWebViewCommunicatorinAssemblyKSActive()) {
                    svc.createCommunicator(function () { return Promise.resolve(new _components_webViewCommunicator_WebViewCommunicator__WEBPACK_IMPORTED_MODULE_5__["default"]()); });
                }
                else {
                    // tslint:disable-next-line:max-line-length
                    svc.createCommunicator(function () {
                        return Object(_components_webViewCommunicator_webViewCommunicatorLoader__WEBPACK_IMPORTED_MODULE_4__["default"])().then(function (communicator) { return new communicator(); });
                    });
                }
                return svc;
            }, function (err) {
                return new Error(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Text"].format(_SPPagesCore_resx__WEBPACK_IMPORTED_MODULE_3__["failureToLoadWebViewCommunicationService"], err));
            });
    };
    return WebViewCommunicatorServiceFactory;
}());
/* harmony default export */ __webpack_exports__["default"] = (WebViewCommunicatorServiceFactory);


/***/ }),

/***/ "VIN7":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-datasources@45.13.10_e509c819ab980023b76e5746ec0fc9e2/node_modules/@ms/odsp-datasources/lib/providers/designPackage/DesignPackageProvider.js ***!
  \*************************************************************************************************************************************************************************************************************/
/*! exports provided: TEAMSITE_DESIGNPACKAGEID, REPORTSITE_DESIGNPACKAGEID, PORTFOLIOSITE_DESIGNPACKAGEID, BLANKSITE_DESIGNPACKAGEID, BLOGSITE_DESIGNPACKAGEID, COMPANY_PORTAL_DESIGNPACKAGEID, CONTENT_CENTER_DESIGNPACKAGEID, KNOWLEDGE_CENTER_DESIGNPACKAGEID, getDesignPackage, getDesignPackagesForTemplate, getAllDesignPackages, getDefaultChromeOptions, getCurrentChromeOptions, _chooseDesignPackageId */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TEAMSITE_DESIGNPACKAGEID", function() { return TEAMSITE_DESIGNPACKAGEID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REPORTSITE_DESIGNPACKAGEID", function() { return REPORTSITE_DESIGNPACKAGEID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PORTFOLIOSITE_DESIGNPACKAGEID", function() { return PORTFOLIOSITE_DESIGNPACKAGEID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BLANKSITE_DESIGNPACKAGEID", function() { return BLANKSITE_DESIGNPACKAGEID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BLOGSITE_DESIGNPACKAGEID", function() { return BLOGSITE_DESIGNPACKAGEID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COMPANY_PORTAL_DESIGNPACKAGEID", function() { return COMPANY_PORTAL_DESIGNPACKAGEID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONTENT_CENTER_DESIGNPACKAGEID", function() { return CONTENT_CENTER_DESIGNPACKAGEID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KNOWLEDGE_CENTER_DESIGNPACKAGEID", function() { return KNOWLEDGE_CENTER_DESIGNPACKAGEID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDesignPackage", function() { return getDesignPackage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDesignPackagesForTemplate", function() { return getDesignPackagesForTemplate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllDesignPackages", function() { return getAllDesignPackages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDefaultChromeOptions", function() { return getDefaultChromeOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCurrentChromeOptions", function() { return getCurrentChromeOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_chooseDesignPackageId", function() { return _chooseDesignPackageId; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ms_odsp_utilities_lib_guid_Guid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ms/odsp-utilities/lib/guid/Guid */ "vo05");
/* harmony import */ var _dataSources_web_WebTemplateType__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../dataSources/web/WebTemplateType */ "xYco");
/* harmony import */ var _interfaces_ISpPageContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../interfaces/ISpPageContext */ "GlwB");
/* harmony import */ var _models_chrome_ChromeOptions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/chrome/ChromeOptions */ "Vb17");
/* harmony import */ var _ms_odsp_utilities_lib_killswitch_Killswitch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ms/odsp-utilities/lib/killswitch/Killswitch */ "QUgr");
var _a, _b;






/** Team Site Design Package ID */
var TEAMSITE_DESIGNPACKAGEID = 'c8b3137a-ca4c-48a9-b356-a8e7987dd693';
/** Report Site Design Package ID */
var REPORTSITE_DESIGNPACKAGEID = '96c933ac-3698-44c7-9f4a-5fd17d71af9e';
/** Portfolio Site Design Package ID */
var PORTFOLIOSITE_DESIGNPACKAGEID = '6142d2a0-63a5-4ba0-aede-d9fefca2c767';
/** Blank Site Design Package ID */
var BLANKSITE_DESIGNPACKAGEID = 'f6cc5403-0d63-442e-96c0-285923709ffc';
/** Blog Site Design Package ID */
var BLOGSITE_DESIGNPACKAGEID = '400955b3-329f-4b22-ade5-002653506aee';
/** Company Portal Site Design Package ID */
var COMPANY_PORTAL_DESIGNPACKAGEID = 'fbf8ec01-846c-44c4-b17b-8fe1e4e5adae';
/** Content Center Site Design Package ID */
var CONTENT_CENTER_DESIGNPACKAGEID = 'ab120c41-0d36-490b-a048-b39f65675858';
/** Knowledge Center Site Design Package ID */
var KNOWLEDGE_CENTER_DESIGNPACKAGEID = '67f52693-99aa-428d-8670-0b1b2d291aa8';
function _getTeamSiteDesignPackage() {
    return {
        id: TEAMSITE_DESIGNPACKAGEID,
        title: undefined,
        description: undefined,
        chromeOptions: {
            header: {
                hidden: false,
                layout: _models_chrome_ChromeOptions__WEBPACK_IMPORTED_MODULE_4__["UnifiedHeaderLayout"].none
            },
            nav: {
                hidden: false,
                placement: _models_chrome_ChromeOptions__WEBPACK_IMPORTED_MODULE_4__["NavPlacementType"].LEFT
            },
            footer: { hidden: false },
            search: { hidden: false }
        },
        supportedTemplates: [_dataSources_web_WebTemplateType__WEBPACK_IMPORTED_MODULE_2__["default"].teamSite, _dataSources_web_WebTemplateType__WEBPACK_IMPORTED_MODULE_2__["default"].group]
    };
}
function _getReportSiteDesignPackage() {
    return {
        id: REPORTSITE_DESIGNPACKAGEID,
        title: undefined,
        description: undefined,
        chromeOptions: {
            header: {
                hidden: false,
                layout: _models_chrome_ChromeOptions__WEBPACK_IMPORTED_MODULE_4__["UnifiedHeaderLayout"].none
            },
            nav: {
                hidden: false,
                placement: _models_chrome_ChromeOptions__WEBPACK_IMPORTED_MODULE_4__["NavPlacementType"].HORIZONTAL,
                megaMenuEnabled: true
            },
            footer: { hidden: false },
            search: { hidden: true }
        },
        supportedTemplates: [_dataSources_web_WebTemplateType__WEBPACK_IMPORTED_MODULE_2__["default"].sitePagePublishing]
    };
}
function _getPortfolioSiteDesignPackage() {
    return {
        id: PORTFOLIOSITE_DESIGNPACKAGEID,
        title: undefined,
        description: undefined,
        chromeOptions: {
            header: {
                hidden: false,
                layout: _models_chrome_ChromeOptions__WEBPACK_IMPORTED_MODULE_4__["UnifiedHeaderLayout"].none
            },
            nav: {
                hidden: false,
                placement: _models_chrome_ChromeOptions__WEBPACK_IMPORTED_MODULE_4__["NavPlacementType"].HORIZONTAL,
                megaMenuEnabled: true
            },
            footer: { hidden: false },
            search: { hidden: true }
        },
        supportedTemplates: [_dataSources_web_WebTemplateType__WEBPACK_IMPORTED_MODULE_2__["default"].sitePagePublishing]
    };
}
function _getBlogSiteDesignPackage() {
    return {
        id: BLOGSITE_DESIGNPACKAGEID,
        title: undefined,
        description: undefined,
        chromeOptions: {
            header: {
                hidden: false,
                layout: _models_chrome_ChromeOptions__WEBPACK_IMPORTED_MODULE_4__["UnifiedHeaderLayout"].none
            },
            nav: {
                hidden: false,
                placement: _models_chrome_ChromeOptions__WEBPACK_IMPORTED_MODULE_4__["NavPlacementType"].LEFT,
                megaMenuEnabled: true
            },
            footer: { hidden: false },
            search: { hidden: false }
        },
        supportedTemplates: [_dataSources_web_WebTemplateType__WEBPACK_IMPORTED_MODULE_2__["default"].pointPublishingPersonal]
    };
}
function _getBlankSiteDesignPackage() {
    return {
        id: BLANKSITE_DESIGNPACKAGEID,
        title: undefined,
        description: undefined,
        chromeOptions: {
            header: {
                hidden: false,
                layout: _models_chrome_ChromeOptions__WEBPACK_IMPORTED_MODULE_4__["UnifiedHeaderLayout"].none
            },
            nav: {
                hidden: false,
                placement: _models_chrome_ChromeOptions__WEBPACK_IMPORTED_MODULE_4__["NavPlacementType"].HORIZONTAL,
                megaMenuEnabled: true
            },
            footer: { hidden: false },
            search: { hidden: true }
        },
        supportedTemplates: [_dataSources_web_WebTemplateType__WEBPACK_IMPORTED_MODULE_2__["default"].sitePagePublishing]
    };
}
function _getCompanyPortalSiteDesignPackage() {
    return {
        id: COMPANY_PORTAL_DESIGNPACKAGEID,
        title: undefined,
        description: undefined,
        chromeOptions: {
            header: {
                hidden: false,
                layout: _models_chrome_ChromeOptions__WEBPACK_IMPORTED_MODULE_4__["UnifiedHeaderLayout"].none
            },
            nav: {
                hidden: false,
                placement: _models_chrome_ChromeOptions__WEBPACK_IMPORTED_MODULE_4__["NavPlacementType"].HORIZONTAL,
                megaMenuEnabled: true
            },
            footer: { hidden: false },
            search: { hidden: false }
        },
        supportedTemplates: [_dataSources_web_WebTemplateType__WEBPACK_IMPORTED_MODULE_2__["default"].sitePagePublishing]
    };
}
function _getContentCenterSiteDesignPackage() {
    return {
        id: CONTENT_CENTER_DESIGNPACKAGEID,
        title: undefined,
        description: undefined,
        chromeOptions: {
            header: {
                hidden: false,
                layout: _models_chrome_ChromeOptions__WEBPACK_IMPORTED_MODULE_4__["UnifiedHeaderLayout"].none
            },
            nav: {
                hidden: false,
                placement: _models_chrome_ChromeOptions__WEBPACK_IMPORTED_MODULE_4__["NavPlacementType"].HORIZONTAL,
                megaMenuEnabled: true
            },
            footer: { hidden: false },
            search: { hidden: false }
        },
        supportedTemplates: [_dataSources_web_WebTemplateType__WEBPACK_IMPORTED_MODULE_2__["default"].contentCenter]
    };
}
function _getKnowledgeCenterSiteDesignPackage() {
    if (_ms_odsp_utilities_lib_killswitch_Killswitch__WEBPACK_IMPORTED_MODULE_5__["Killswitch"].isActivated('5ff3cf56-b6b0-4ac9-8162-f87f7a49a5cf', '04/09/2020', 'Deactivate knowledge center design package')) {
        return;
    }
    return {
        id: KNOWLEDGE_CENTER_DESIGNPACKAGEID,
        title: undefined,
        description: undefined,
        chromeOptions: {
            header: {
                hidden: false,
                layout: _models_chrome_ChromeOptions__WEBPACK_IMPORTED_MODULE_4__["UnifiedHeaderLayout"].none
            },
            nav: {
                hidden: false,
                placement: _models_chrome_ChromeOptions__WEBPACK_IMPORTED_MODULE_4__["NavPlacementType"].HORIZONTAL,
                megaMenuEnabled: true
            },
            footer: { hidden: false },
            search: { hidden: false }
        },
        supportedTemplates: [_dataSources_web_WebTemplateType__WEBPACK_IMPORTED_MODULE_2__["default"].contentCenter]
    };
}
/** Mapping from WebTemplate to default DesignPackageId for that WebTemplate. */
var _templateToDesignPackageIdMap = (_a = {},
    _a[_dataSources_web_WebTemplateType__WEBPACK_IMPORTED_MODULE_2__["default"].teamSite] = TEAMSITE_DESIGNPACKAGEID,
    _a[_dataSources_web_WebTemplateType__WEBPACK_IMPORTED_MODULE_2__["default"].group] = TEAMSITE_DESIGNPACKAGEID,
    _a[_dataSources_web_WebTemplateType__WEBPACK_IMPORTED_MODULE_2__["default"].sitePagePublishing] = REPORTSITE_DESIGNPACKAGEID,
    _a[_dataSources_web_WebTemplateType__WEBPACK_IMPORTED_MODULE_2__["default"].pointPublishingPersonal] = BLOGSITE_DESIGNPACKAGEID,
    _a[_dataSources_web_WebTemplateType__WEBPACK_IMPORTED_MODULE_2__["default"].contentCenter] = CONTENT_CENTER_DESIGNPACKAGEID,
    _a);
/** Mapping from designPackageId to Design Package JSON lambda. */
var _idToDesignPackageMap = (_b = {},
    _b[TEAMSITE_DESIGNPACKAGEID] = _getTeamSiteDesignPackage,
    _b[REPORTSITE_DESIGNPACKAGEID] = _getReportSiteDesignPackage,
    _b[PORTFOLIOSITE_DESIGNPACKAGEID] = _getPortfolioSiteDesignPackage,
    _b[BLANKSITE_DESIGNPACKAGEID] = _getBlankSiteDesignPackage,
    _b[BLOGSITE_DESIGNPACKAGEID] = _getBlogSiteDesignPackage,
    _b[COMPANY_PORTAL_DESIGNPACKAGEID] = _getCompanyPortalSiteDesignPackage,
    _b[CONTENT_CENTER_DESIGNPACKAGEID] = _getContentCenterSiteDesignPackage,
    _b[KNOWLEDGE_CENTER_DESIGNPACKAGEID] = _getKnowledgeCenterSiteDesignPackage,
    _b);
/**
 * Gets the current Design Package for this page context.
 * Note: must provide string resources due to horrendous code repository constraints.
 */
function getDesignPackage(resources, pageContext) {
    if (!pageContext) {
        throw new Error('pageContext missing');
    }
    if (!resources) {
        throw new Error('resources missing');
    }
    var designPackageId = _chooseDesignPackageId(pageContext);
    return _getDesignPackage(resources, designPackageId);
}
/**
 * Returns the set of all Design Packages that support the given web template.
 * Note: must provide string resources due to horrendous code repository constraints.
 */
function getDesignPackagesForTemplate(resources, webTemplate) {
    var supportingDesignPackages = [];
    for (var designPackageId in _idToDesignPackageMap) {
        var designPackage = _getDesignPackage(resources, designPackageId);
        if (designPackage.supportedTemplates.indexOf(webTemplate) > -1) {
            supportingDesignPackages.push(designPackage);
        }
    }
    return supportingDesignPackages;
}
/**
 * Returns the set of all Design Packages that are available.
 * Note: must provide string resources due to horrendous code repository constraints.
 */
function getAllDesignPackages(resources) {
    var result = [];
    for (var designPackageId in _idToDesignPackageMap) {
        var designPackage = _getDesignPackage(resources, designPackageId);
        result.push(designPackage);
    }
    return result;
}
/**
 * Get the default site chrome options for the current site template
 * @param pageContext
 */
function getDefaultChromeOptions(pageContext) {
    if (!pageContext) {
        throw new Error('pageContext missing');
    }
    var designPackageId = _chooseDesignPackageId(pageContext);
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, _idToDesignPackageMap[designPackageId]().chromeOptions), { footer: {
            emphasis: _models_chrome_ChromeOptions__WEBPACK_IMPORTED_MODULE_4__["FooterEmphasis"].Strong,
            hidden: true,
            layout: _models_chrome_ChromeOptions__WEBPACK_IMPORTED_MODULE_4__["FooterLayout"].SIMPLE
        } });
}
/**
 * Get the current site chrome options used
 * @param pageContext
 */
function getCurrentChromeOptions(pageContext) {
    var _a;
    var chromeOptions = getDefaultChromeOptions(pageContext);
    // get footer emphasis from web property bit flags
    /* tslint:disable-next-line:no-bitwise */
    var emphasisMSB = (pageContext.webPropertyFlags2 & _interfaces_ISpPageContext__WEBPACK_IMPORTED_MODULE_3__["SPWebPropertyFlags2"].FooterEmphasis1) >> 8;
    /* tslint:disable-next-line:no-bitwise */
    var emphasisLSB = (pageContext.webPropertyFlags2 & _interfaces_ISpPageContext__WEBPACK_IMPORTED_MODULE_3__["SPWebPropertyFlags2"].FooterEmphasis0) >> 8;
    /* tslint:disable-next-line:no-bitwise */
    chromeOptions.footer.emphasis = (emphasisMSB | emphasisLSB);
    // get footer layout from web property bit flags
    /* tslint:disable-next-line:no-bitwise */
    var layoutMSB = (pageContext.webPropertyFlags2 & _interfaces_ISpPageContext__WEBPACK_IMPORTED_MODULE_3__["SPWebPropertyFlags2"].FooterLayout1) >> 10;
    /* tslint:disable-next-line:no-bitwise */
    var layoutLSB = (pageContext.webPropertyFlags2 & _interfaces_ISpPageContext__WEBPACK_IMPORTED_MODULE_3__["SPWebPropertyFlags2"].FooterLayout0) >> 10;
    /* tslint:disable-next-line:no-bitwise */
    chromeOptions.footer.layout = (layoutMSB | layoutLSB);
    /* tslint:disable-next-line:no-bitwise */
    chromeOptions.footer.hidden = (pageContext.webPropertyFlags2 & 0x0000000000000002) === 0x0;
    if (chromeOptions.nav && !chromeOptions.nav.hidden) {
        /* tslint:disable-next-line:no-bitwise */
        chromeOptions.nav.megaMenuEnabled = (pageContext.webPropertyFlags2 & 0x0000000000000080) !== 0x0;
        chromeOptions.nav.quickLaunchEnabled = !!((_a = pageContext.navigationInfo) === null || _a === void 0 ? void 0 : _a.quickLaunch);
    }
    chromeOptions.header.layout = pageContext.headerLayout;
    chromeOptions.header.emphasis = pageContext.headerEmphasis;
    chromeOptions.header.logoAlignment = pageContext.logoAlignment;
    var hideTitleInHeader = (pageContext.webPropertyFlags2 & _interfaces_ISpPageContext__WEBPACK_IMPORTED_MODULE_3__["SPWebPropertyFlags2"].HideTitleInHeader) !== 0x0;
    chromeOptions.header.hideTitle = hideTitleInHeader;
    return chromeOptions;
}
/**
 * Decides on the design package ID based on the current page context. Specifically, it takes into account
 * the current web's design package ID and web template. It has a fallback for any web template.
 *
 * public only for testing purposes
 */
function _chooseDesignPackageId(pageContext) {
    var designPackageId = _ms_odsp_utilities_lib_guid_Guid__WEBPACK_IMPORTED_MODULE_1__["default"].Empty;
    // try getting it from _spPageContextInfo
    // if third party were enabled, we would have to wait for the design package manifest to return here
    if (pageContext.DesignPackageId && _hasFirstPartyDesignPackage(pageContext.DesignPackageId)) {
        designPackageId = pageContext.DesignPackageId;
    }
    // if _spPageContextInfo doesn't have a design package ID set, get the default for the web template
    if (designPackageId === _ms_odsp_utilities_lib_guid_Guid__WEBPACK_IMPORTED_MODULE_1__["default"].Empty &&
        _templateToDesignPackageIdMap[pageContext.webTemplate] !== undefined) {
        designPackageId = _templateToDesignPackageIdMap[pageContext.webTemplate];
    }
    // if this web template doesn't have a default design package ID, go with the Team site one
    if (designPackageId === _ms_odsp_utilities_lib_guid_Guid__WEBPACK_IMPORTED_MODULE_1__["default"].Empty) {
        designPackageId = TEAMSITE_DESIGNPACKAGEID;
    }
    return designPackageId;
}
/**
 * Returns true if the given ID corresponds to a first-party Design Package, false otherwise.
 */
function _hasFirstPartyDesignPackage(id) {
    return _idToDesignPackageMap[id] !== undefined;
}
/**
 * Retrieves the design package and gets the resources for it.
 */
function _getDesignPackage(resources, designPackageId) {
    function _assignResources(designPackage, title, description) {
        designPackage.title = title;
        designPackage.description = description;
    }
    var designPackage = _idToDesignPackageMap[designPackageId]();
    switch (_ms_odsp_utilities_lib_guid_Guid__WEBPACK_IMPORTED_MODULE_1__["default"].normalizeLower(designPackageId)) {
        case TEAMSITE_DESIGNPACKAGEID:
            _assignResources(designPackage, resources.teamSiteTitle, resources.teamSiteDescription);
            break;
        case REPORTSITE_DESIGNPACKAGEID:
            _assignResources(designPackage, resources.reportSiteTitle, resources.reportSiteDescription);
            break;
        case PORTFOLIOSITE_DESIGNPACKAGEID:
            _assignResources(designPackage, resources.portfolioSiteTitle, resources.portfolioSiteDescription);
            break;
        case BLOGSITE_DESIGNPACKAGEID:
            _assignResources(designPackage, resources.blogSiteTitle, resources.blogSiteDescription);
            break;
        case BLANKSITE_DESIGNPACKAGEID:
            _assignResources(designPackage, resources.blankSiteTitle, resources.blankSiteDescription);
            break;
        case COMPANY_PORTAL_DESIGNPACKAGEID:
            _assignResources(designPackage, resources.companyPortalSiteTitle, resources.companyPortalSiteDescription);
            break;
        case CONTENT_CENTER_DESIGNPACKAGEID:
            _assignResources(designPackage, resources.contentCenterSiteTitle, resources.contentCenterSiteDescription);
            break;
        case KNOWLEDGE_CENTER_DESIGNPACKAGEID:
            _assignResources(designPackage, resources.knowledgeCenterSiteTitle, resources.knowledgeCenterSiteDescription);
            break;
        default:
            throw new Error('Invalid DesignPackageId: ' + designPackageId);
    }
    return designPackage;
}
//# sourceMappingURL=DesignPackageProvider.js.map

/***/ }),

/***/ "Vb17":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-datasources@45.13.10_e509c819ab980023b76e5746ec0fc9e2/node_modules/@ms/odsp-datasources/lib/models/chrome/ChromeOptions.js ***!
  \*******************************************************************************************************************************************************************************************/
/*! exports provided: ChromeControlType, NavPlacementType, HeaderLayoutType, UnifiedHeaderLayout, LogoAlignment, FooterLayout, FooterEmphasis */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChromeControlType", function() { return ChromeControlType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavPlacementType", function() { return NavPlacementType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderLayoutType", function() { return HeaderLayoutType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnifiedHeaderLayout", function() { return UnifiedHeaderLayout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoAlignment", function() { return LogoAlignment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterLayout", function() { return FooterLayout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterEmphasis", function() { return FooterEmphasis; });
/**
 * Types of supported chrome controls
 */
var ChromeControlType;
(function (ChromeControlType) {
    ChromeControlType[ChromeControlType["HEADER"] = 0] = "HEADER";
    ChromeControlType[ChromeControlType["NAV"] = 1] = "NAV";
    ChromeControlType[ChromeControlType["FOOTER"] = 2] = "FOOTER";
    ChromeControlType[ChromeControlType["SEARCHBOX"] = 3] = "SEARCHBOX";
})(ChromeControlType || (ChromeControlType = {}));
var NavPlacementType;
(function (NavPlacementType) {
    NavPlacementType[NavPlacementType["LEFT"] = 0] = "LEFT";
    NavPlacementType[NavPlacementType["HORIZONTAL"] = 1] = "HORIZONTAL";
})(NavPlacementType || (NavPlacementType = {}));
/**
 * @deprecated see UnifiedHeaderLayout
 * Defines supported layout type for composite header control.
 * Currently the layout type is indicated from nav placement.
 */
var HeaderLayoutType;
(function (HeaderLayoutType) {
    /** Composite header control takes full width of the page */
    HeaderLayoutType[HeaderLayoutType["FULLBLEED"] = 0] = "FULLBLEED";
    /** Composite header control is placed on a page with left nav */
    HeaderLayoutType[HeaderLayoutType["WITHLEFTNAV"] = 1] = "WITHLEFTNAV";
})(HeaderLayoutType || (HeaderLayoutType = {}));
/** The layout to use for the new UnifiedHeader, which replaces the old headers. */
var UnifiedHeaderLayout;
(function (UnifiedHeaderLayout) {
    /** @deprecated none, don't use the UnifiedHeader and fall back to the old headers */
    UnifiedHeaderLayout[UnifiedHeaderLayout["none"] = 0] = "none";
    /** Large */
    UnifiedHeaderLayout[UnifiedHeaderLayout["standard"] = 1] = "standard";
    /** Medium */
    UnifiedHeaderLayout[UnifiedHeaderLayout["compact"] = 2] = "compact";
    /** @deprecated not currently supported */
    UnifiedHeaderLayout[UnifiedHeaderLayout["minimal"] = 3] = "minimal";
    /** Extended */
    UnifiedHeaderLayout[UnifiedHeaderLayout["extended"] = 4] = "extended";
})(UnifiedHeaderLayout || (UnifiedHeaderLayout = {}));
/** Logo alignment of extended header layout */
var LogoAlignment;
(function (LogoAlignment) {
    LogoAlignment[LogoAlignment["left"] = 0] = "left";
    LogoAlignment[LogoAlignment["middle"] = 1] = "middle";
    LogoAlignment[LogoAlignment["right"] = 2] = "right";
})(LogoAlignment || (LogoAlignment = {}));
/**
 * The layout to use for the footer
 */
var FooterLayout;
(function (FooterLayout) {
    FooterLayout[FooterLayout["SIMPLE"] = 0] = "SIMPLE";
    FooterLayout[FooterLayout["EXTENDED"] = 1] = "EXTENDED";
    FooterLayout[FooterLayout["STACKED"] = 2] = "STACKED";
})(FooterLayout || (FooterLayout = {}));
/**
 * The emphasis to use in the footer.
 * Note that this is different than the enum ordering that fabric uses, in order
 * to have strong be the default for unset variants in the property flags
 */
var FooterEmphasis;
(function (FooterEmphasis) {
    FooterEmphasis[FooterEmphasis["Strong"] = 0] = "Strong";
    FooterEmphasis[FooterEmphasis["Neutral"] = 1] = "Neutral";
    FooterEmphasis[FooterEmphasis["Soft"] = 2] = "Soft";
    FooterEmphasis[FooterEmphasis["None"] = 3] = "None";
})(FooterEmphasis || (FooterEmphasis = {}));
//# sourceMappingURL=ChromeOptions.js.map

/***/ }),

/***/ "WKvy":
/*!*************************************************************!*\
  !*** ./lib/core/components/chrome/SiteHeader/SiteHeader.js ***!
  \*************************************************************/
/*! exports provided: SiteHeader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SiteHeader", function() { return SiteHeader; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var office_ui_fabric_react_lib_utilities_decorators_withResponsiveMode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! office-ui-fabric-react/lib/utilities/decorators/withResponsiveMode */ "5qgq");
/* harmony import */ var office_ui_fabric_react_lib_utilities_decorators_withResponsiveMode__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(office_ui_fabric_react_lib_utilities_decorators_withResponsiveMode__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ms_odsp_datasources_lib_ChromeOptions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ms/odsp-datasources/lib/ChromeOptions */ "XnGw");
/* harmony import */ var _PreloadedComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../PreloadedComponent */ "CuBB");
/* harmony import */ var _Chrome_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Chrome.module.scss */ "+Uvl");
/**
 * @copyright Microsoft Corporation. All rights reserved.
 */





/**
 * @internal
 * Chrome site header, tempoary exposed to be consumed by sp-home directly
 * Will not be exposed on the API once the header is moved into the BasePage inside pages-core
 *
 * SiteHeader first renders a placeholder header using Unified header, then renders the full-fledged
 * CompositeHeader with state manager deferred.
 */
// tslint:disable-next-line:variable-name
var SiteHeader = function (props) {
    /* tslint:disable:no-string-literal */
    if (props.chromeComponents && props.chromeComponents['SiteHeader']) {
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](props.chromeComponents['SiteHeader'], props);
    }
    /* tslint:enable:no-string-literal */
    var headerPlaceHolderClass;
    if (props.responsiveMode !== undefined && props.responsiveMode < office_ui_fabric_react_lib_utilities_decorators_withResponsiveMode__WEBPACK_IMPORTED_MODULE_1__["ResponsiveMode"].large) {
        headerPlaceHolderClass = _Chrome_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].headerMobileLayout;
    }
    else if (props.pageContext && props.pageContext.headerLayout === _ms_odsp_datasources_lib_ChromeOptions__WEBPACK_IMPORTED_MODULE_2__["UnifiedHeaderLayout"].compact) {
        headerPlaceHolderClass = _Chrome_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].headerCompactLayout;
    }
    else {
        headerPlaceHolderClass = _Chrome_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].headerStandardLayout;
    }
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_PreloadedComponent__WEBPACK_IMPORTED_MODULE_3__["PreloadedComponent"], { componentName: 'SiteHeader', componentProps: props, placeHolder: react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: headerPlaceHolderClass }) }));
};


/***/ }),

/***/ "X+PM":
/*!*********************************************!*\
  !*** external "@microsoft/sp-page-context" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_X_PM__;

/***/ }),

/***/ "X36I":
/*!********************************************!*\
  !*** ./lib/core/PageApplicationContext.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _microsoft_sp_application_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @microsoft/sp-application-base */ "GPet");
/* harmony import */ var _microsoft_sp_application_base__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_application_base__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utilities_Killswitches__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utilities/Killswitches */ "XjSx");
/* harmony import */ var _SPPagesCore_resx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../SPPagesCore.resx */ "hWnv");
var _SPPagesCore_resx__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../SPPagesCore.resx */ "hWnv", 1);
/**
 * @copyright Microsoft Corporation. All rights reserved.
 */





/**
 * Represents the context object for page based applications
 *
 * @internal
 */
var PageApplicationContext = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(PageApplicationContext, _super);
    function PageApplicationContext(contextParameters) {
        var _this = _super.call(this, contextParameters) || this;
        _this._pageApplicationServiceScope = !_utilities_Killswitches__WEBPACK_IMPORTED_MODULE_3__["default"].isPageAppSvcScopeChildOfSvcScopeKSActive()
            ? _this.serviceScope.startNewChild()
            : contextParameters.parentServiceScope.startNewChild();
        _this._serviceContainer = new Map();
        return _this;
    }
    /**
     * This method is called to permanently dispose the object.
     *
     * @remarks
     * After the object has been disposed, do not call its methods or access its properties.
     */
    PageApplicationContext.prototype.dispose = function () {
        if (this._isCtxDisposed) {
            return;
        }
        // Dispose all services registered with the context but not shared.
        this.pageServices.forEach(function (svc) {
            if (!svc.serviceConfiguration.isShared) {
                svc.dispose();
            }
        });
        this._serviceContainer.clear();
        delete this._pageApplicationServiceScope;
        _super.prototype.dispose.call(this);
        this._isCtxDisposed = true;
    };
    Object.defineProperty(PageApplicationContext.prototype, "pageApplicationServiceScope", {
        /**
         * Returns the page application service scope
         *
         * @remarks
         * Use this service scope to manage all services specific to the application.
         * This service scope will be finished after the 'onAfterPageLoad' lifecycle stage.
         */
        get: function () {
            return this._pageApplicationServiceScope;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PageApplicationContext.prototype, "isDisposed", {
        /**
         * Returns true if the dispose() method has been called.
         */
        get: function () {
            return this._isCtxDisposed;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PageApplicationContext.prototype, "pageConfiguration", {
        /**
         * Gets the page configuration associated with the lifecycle
         */
        get: function () {
            return this._configuration;
        },
        /**
         * Sets the page configuration associated with the lifecycle
         */
        set: function (value) {
            _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["Validate"].isNotNullOrUndefined(value, 'value');
            this._configuration = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PageApplicationContext.prototype, "pageServices", {
        /**
         * Gets a list of all active page-based application services
         */
        get: function () {
            var services = [];
            this._serviceContainer.forEach(function (svc) {
                if (svc && !svc.isDisposed) {
                    services.push(svc);
                }
            });
            return services;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Registers the service
     * @param service - The Service to register
     * @returns - The service that is registered
     */
    PageApplicationContext.prototype.registerService = function (service) {
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["Validate"].isNotNullOrUndefined(service, 'service');
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["Validate"].isNotNullOrUndefined(service.serviceConfiguration, 'service.serviceConfiguration');
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["Validate"].isNotNullOrUndefined(service.serviceConfiguration.serviceKey, 'service.serviceConfiguration.serviceKey');
        var serviceName = service.serviceConfiguration.serviceKey.name;
        if (this._serviceContainer.get(serviceName)) {
            throw new Error(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["Text"].format(_SPPagesCore_resx__WEBPACK_IMPORTED_MODULE_4__["failureToRegisterService"], serviceName));
        }
        // Shared services are only exposed in the root scope so they can be reused across application boundaries
        var pageSvc = service.serviceConfiguration
            .isShared
            ? this.serviceScope.consume(service.serviceConfiguration.serviceKey)
            : this.pageApplicationServiceScope.provide(service.serviceConfiguration.serviceKey, service);
        this._serviceContainer.set(serviceName, pageSvc);
        return pageSvc;
    };
    /**
     * Fetches a service if registered and not disposed.
     * @param serviceKey - The service key
     * @returns - A service if found and not disposed, else undefined
     */
    PageApplicationContext.prototype.fetchService = function (serviceKey) {
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["Validate"].isNotNullOrUndefined(serviceKey, 'serviceKey');
        var service = this._serviceContainer.get(serviceKey.name);
        if (service && !service.isDisposed) {
            return service;
        }
        return undefined;
    };
    return PageApplicationContext;
}(_microsoft_sp_application_base__WEBPACK_IMPORTED_MODULE_2__["BaseApplicationContext"]));
/* harmony default export */ __webpack_exports__["default"] = (PageApplicationContext);


/***/ }),

/***/ "XF7y":
/*!********************************************!*\
  !*** ./lib/core/utilities/StoreUtility.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_store_StoreManagementService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/store/StoreManagementService */ "A/Pf");

/**
 * @public
 */
var StoreUtility = /** @class */ (function () {
    function StoreUtility() {
    }
    StoreUtility.getState = function (serviceScope) {
        return StoreUtility.getStore(serviceScope).getState();
    };
    /**
     * Add a listener to this store
     * @param serviceScope - service scope used to lookup the store
     * @param listener - the listener callback
     * @param isStoreListener - if the subscription is for the store or for actions
     */
    StoreUtility.subscribe = function (serviceScope, listener, isStoreListener) {
        if (isStoreListener === void 0) { isStoreListener = true; }
        return StoreUtility.getStore(serviceScope).subscribe(listener, isStoreListener);
    };
    StoreUtility.getStore = function (serviceScope) {
        var storeService = serviceScope.consume(_services_store_StoreManagementService__WEBPACK_IMPORTED_MODULE_0__["default"].serviceKey);
        return storeService && storeService.store;
    };
    return StoreUtility;
}());
/* harmony default export */ __webpack_exports__["default"] = (StoreUtility);


/***/ }),

/***/ "XjSx":
/*!********************************************!*\
  !*** ./lib/core/utilities/Killswitches.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__);
/**
 * @copyright (c) Microsoft Corporation.  All rights reserved.
 */

/**
 * Killswitch checks
 * @internal
 */
var Killswitches = /** @class */ (function () {
    function Killswitches() {
    }
    Killswitches.serviceWorkerAria = function () {
        return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPKillSwitch"].isActivated(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Guid"].parse('de564558-c99d-4bcc-96b8-c2d7786f3203'), '06/04/2019', 'sw-aria');
    };
    Killswitches.isPageAppSvcScopeChildOfSvcScopeKSActive = function () {
        return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPKillSwitch"].isActivated(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Guid"].parse('921a843a-4fe6-4d01-8c42-a9b586545a43'), '05/21/2020', 'PageApplicationServiceScope is a child node of ServiceScope when KS is not active');
    };
    Killswitches.addPathToNavNodeKSActivated = function () {
        return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPKillSwitch"].isActivated(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Guid"].parse('f23d59cb-9f9c-42c7-82b3-971c5c52be68'), '05/18/2020', 'Add the doc lib path to nav node.');
    };
    Killswitches.isScrollTopFixKSActive = function () {
        return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPKillSwitch"].isActivated(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Guid"].parse('307e60f0-bdbb-4289-b7ac-0f2a644be729'), '8/3/2020', 'Bring scrollTop() logic to sp-pages-core version of PageLayoutScrollRegion');
    };
    Killswitches.isFocusModeScrollRegionFixKSActive = function () {
        return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPKillSwitch"].isActivated(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Guid"].parse('a6a8dca8-dbd2-405d-9b6e-0593b488c2fb'), '8/3/2020', 'Bring Focus Mode styling to sp-pages-core version of PageLayoutScrollRegion');
    };
    Killswitches.isScrollRegionPrintFixKSActive = function () {
        return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPKillSwitch"].isActivated(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Guid"].parse('d3c5f60c-5699-42bd-b3ae-20661686fc97'), '8/3/2020', 'Bring onPrint fix to sp-pages-core version of PageLayoutScrollRegion');
    };
    Killswitches.isDocLibFullPageLoadTelemetryKSActivated = function () {
        return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPKillSwitch"].isActivated(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Guid"].parse('82b44f56-ae34-4914-8bf3-7e6de0e4b6cf'), '06/17/2020', 'Record hits on doc-lib from pages when in-place nav is disabled');
    };
    Killswitches.disableProactiveCacheCleanup = function () {
        return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPKillSwitch"].isActivated(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Guid"].parse('99c44272-d5de-4acb-a7c4-d9aef48368db'), '6/18/2020', 'Disable proactive cleanup of the indexeddb cache');
    };
    Killswitches.isSiteHeaderCoachmarkKSActivated = function () {
        return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPKillSwitch"].isActivated(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Guid"].parse('8e4365c3-497e-48c8-ba24-f6782e1f3faf'), '06/30/2020', 'Display coachmark on site header for home site integration');
    };
    Killswitches.fixAltTitleKSActivated = function () {
        return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPKillSwitch"].isActivated('48e175c4-b24e-4961-8fcc-a473627e76ec' /* '07/23/2020', 'Fix Alt Title missing in MySiteCache' */);
    };
    Killswitches.isContextMenuDataPropagateKSActive = function () {
        return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPKillSwitch"].isActivated('bbbb4605-2639-4d84-89fb-cf96bafe35a9'
        /* 7/30/2020 */
        /* propagate link clicks for elements with class 'ms-ContextualMenu-link' */
        );
    };
    Killswitches.fixFooterOnMobile = function () {
        return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPKillSwitch"].isActivated('06907fff-1590-48e7-8390-3ecdaf090cd6'
        /* 07/21/2020,
        Fix footer on mobile */
        );
    };
    Killswitches.isAddSPAppBarToPageChromKillSwitchActivated = function () {
        return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPKillSwitch"].isActivated('52ab8371-001c-418b-a66b-30228495dacf'
        /* 08/07/2020,
        Adding loading the SPAppBar to the SP Page Chrome */
        );
    };
    Killswitches.addSPAppBarMobileKillSwitchActivated = function () {
        return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPKillSwitch"].isActivated('96d757fe-50c4-40fa-8ca9-39b6fb572665'
        /* 10/26/2020,
        Should render app bar on mobile */
        );
    };
    Killswitches.useMobileBreakpointAppBarKillSwitchActivated = function () {
        return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPKillSwitch"].isActivated('f26a26a6-314a-4de1-94c5-846a65340b42'
        /* 11/17/2020,
        Use breakpoints instead of user agent for app bar mobile experience */
        );
    };
    Killswitches.isScrollRegionCSSWorkaroundKSActive = function () {
        return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPKillSwitch"].isActivated('d11dfd29-6bc5-4bb7-92f0-a8aa5b0f4aac'
        /* 08/11/2020,
        Change CSS class names */
        );
    };
    Killswitches.isWebViewCommunicatorinAssemblyKSActive = function () {
        return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPKillSwitch"].isActivated('9b61fef6-45e8-411b-a15f-91c0d6ce510e'
        /* 08/20/2020
        Make webViewCommunicator part of assembly. */
        );
    };
    Killswitches.isDisableScrollToTopWhenContainsAnchorKSActivated = function () {
        return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPKillSwitch"].isActivated('0af17ea0-4975-4f80-8b8c-54bbffb24550'
        /* '08/27/2020', 'Disable scrollToTop when contains anchor' */
        );
    };
    Killswitches.isOneUpViewKSActivated = function () {
        return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPKillSwitch"].isActivated('0af17ea0-4975-4f80-8b8c-54bbffb24550'
        /* '09/21/2020', 'Prevent in-place nav to a one-up view' */
        );
    };
    Killswitches.isRelLinkToListKSActivated = function () {
        return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPKillSwitch"].isActivated('b47311ab-f20e-4fdb-80e9-30f267ef3b8e'
        /* '09/24/2020', 'Prevent miscategorization of relative links to list/Doclib as site-pages' */
        );
    };
    Killswitches.isSafariBrowserKSActivated = function () {
        return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPKillSwitch"].isActivated('90df3369-eee5-47fc-849f-1cf48410fe24'
        /* '10/17/2020', 'Prevent back-forward caching in full-page load' */
        );
    };
    Killswitches.isEmptyLeftNavKSActive = function () {
        return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPKillSwitch"].isActivated('5b7f7362-fbd5-4d89-8ebf-1be41bff06b2'
        /* '10/22/2020',
        'Render a blank LeftNav even when there are no nav links. Also support the web setting to disable quickLaunch.' */
        );
    };
    Killswitches.usePathnameInListNodeKSActivated = function () {
        return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPKillSwitch"].isActivated('fcae2495-06ad-4362-b1ad-575e11358cd6'
        /* 10/29/2020,
        In doclibRoutes, for generic lists, use the pathname instead of the complete url to create dummy nav nodes. */
        );
    };
    Killswitches.logNavInSessionKSActivated = function () {
        return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPKillSwitch"].isActivated('ea075ea8-55bd-4915-a8da-d921dc15c01e'
        /* '11/21/2020', 'Log all navigations in a session.' */
        );
    };
    Killswitches.granularNavInSessionKSActivated = function () {
        return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPKillSwitch"].isActivated('baa31cf6-2935-421b-9653-23cc06fe16c1'
        /* '12/3/2020', 'Provide granular session end reason' */
        );
    };
    Killswitches.removeSessionEventListenerKSActivated = function () {
        return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPKillSwitch"].isActivated('1ed7cfc1-6534-4fb1-b7f0-8d56b3e6937a'
        /* '12/3/2020', 'call RemoveEventListener for nav in session' */
        );
    };
    /**
     * Upon graduation remove the following kill-switch from
     * sp-pages/src/chunks/sp-pages-stateManager/actions/KillSwitches.ts as well
     */
    Killswitches.dataPrefetchOptimizationKSActivated = function () {
        return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPKillSwitch"].isActivated('f1382a43-c63c-46f6-8b63-40c255e685d2'
        /* '12/10/2020', 'Optimize data prefetch' */
        );
    };
    Killswitches.loadAlternativeUrlsInBasePageApplicationKSActivated = function () {
        return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPKillSwitch"].isActivated('e47db31f-9a84-4820-b55a-8b70dab34be0'
        /* '12/16/2020', 'Load alternative urls in base page application' */
        );
    };
    Killswitches.shouldLoadAppBarKillSwitchActivated = function () {
        return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPKillSwitch"].isActivated('c6e33bff-1573-4cf3-ad2b-7d0652648756'
        /* 01/10/2021,
        Prevent AppBar in some scenarios */
        );
    };
    Killswitches.navToNewFormKillSwitchActivated = function () {
        return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPKillSwitch"].isActivated('1d511c56-743a-4ce7-b2c2-f66e8a026945'
        /* 01/21/2021,
        Do full page load when navigating to newform, dispform and editform */
        );
    };
    Killswitches.singletonUndoInPlaceNavKillSwitchActivated = function () {
        return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPKillSwitch"].isActivated('782e119f-35d4-4e06-b8c9-51b3bfcf1be8'
        /* 01/25/2021,
        Prevent undoInPlaceNavigate() from getting executed twice. */
        );
    };
    return Killswitches;
}());
/* harmony default export */ __webpack_exports__["default"] = (Killswitches);


/***/ }),

/***/ "XnGw":
/*!*****************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-datasources@45.13.10_e509c819ab980023b76e5746ec0fc9e2/node_modules/@ms/odsp-datasources/lib/ChromeOptions.js ***!
  \*****************************************************************************************************************************************************************************/
/*! exports provided: ChromeControlType, NavPlacementType, HeaderLayoutType, UnifiedHeaderLayout, LogoAlignment, FooterLayout, FooterEmphasis */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _models_chrome_ChromeOptions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./models/chrome/ChromeOptions */ "Vb17");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChromeControlType", function() { return _models_chrome_ChromeOptions__WEBPACK_IMPORTED_MODULE_0__["ChromeControlType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NavPlacementType", function() { return _models_chrome_ChromeOptions__WEBPACK_IMPORTED_MODULE_0__["NavPlacementType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HeaderLayoutType", function() { return _models_chrome_ChromeOptions__WEBPACK_IMPORTED_MODULE_0__["HeaderLayoutType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UnifiedHeaderLayout", function() { return _models_chrome_ChromeOptions__WEBPACK_IMPORTED_MODULE_0__["UnifiedHeaderLayout"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LogoAlignment", function() { return _models_chrome_ChromeOptions__WEBPACK_IMPORTED_MODULE_0__["LogoAlignment"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FooterLayout", function() { return _models_chrome_ChromeOptions__WEBPACK_IMPORTED_MODULE_0__["FooterLayout"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FooterEmphasis", function() { return _models_chrome_ChromeOptions__WEBPACK_IMPORTED_MODULE_0__["FooterEmphasis"]; });


//# sourceMappingURL=ChromeOptions.js.map

/***/ }),

/***/ "Z+Tx":
/*!*********************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/lodash-es@4.17.20/node_modules/lodash-es/_root.js ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _freeGlobal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_freeGlobal.js */ "PDHC");


/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = _freeGlobal_js__WEBPACK_IMPORTED_MODULE_0__["default"] || freeSelf || Function('return this')();

/* harmony default export */ __webpack_exports__["default"] = (root);


/***/ }),

/***/ "Z1sk":
/*!***********************************************************************!*\
  !*** ./lib/core/components/chrome/SiteLeftNav/LeftNav.module.scss.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* tslint:disable */
__webpack_require__(/*! ./LeftNav.module.css */ "uOC2");
var styles = {
    leftNavPlaceHolder: 't_c_beed2cf1',
    leftNavWidthKS: 'u_c_beed2cf1'
};
/* harmony default export */ __webpack_exports__["default"] = (styles);
/* tslint:enable */ 


/***/ }),

/***/ "ZIiG":
/*!**************************************************************************************!*\
  !*** ./lib/core/components/webViewCommunicator/WebViewRouterPostMessageProcessor.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/office-ui-fabric-react-bundle */ "KL1q");
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utilities_NavigationUtility__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utilities/NavigationUtility */ "c4nI");
/**
 * @copyright Microsoft Corporation. All rights reserved.
 */




var WebViewRouterPostMessageProcessor = /** @class */ (function () {
    function WebViewRouterPostMessageProcessor(webViewCommunicatorservice, onInterceptCallback) {
        var _this = this;
        this.componentId = '3ff085db-dcad-49ab-9340-a27f362d2486';
        this.instanceId = '2e8a5447-b7fe-4f78-9c93-b44cca91718a';
        this.isDisposed = false;
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__["Validate"].isNotNullOrUndefined(webViewCommunicatorservice, 'Promise<IWebViewCommunicatorService>');
        this._onIntercept = onInterceptCallback;
        webViewCommunicatorservice.then(function (service) {
            return service.communicator.then(function (communicator) {
                _this._webViewCommunicator = communicator;
                _this._webViewCommunicator.spEvent.add(_this, _this._onPostMessage);
                /* tslint:disable:no-string-literal */
                window['_supportsPostMessageRouterProtocol'] = true;
                /* tslint:enable:no-string-literal */
            });
        }, function (_) {
            /* no-op */
        });
    }
    WebViewRouterPostMessageProcessor.prototype.dispose = function () {
        this.isDisposed = true;
        if (this._webViewCommunicator) {
            this._webViewCommunicator.spEvent.remove(this, this._onPostMessage);
            /* tslint:disable:no-string-literal */
            window['_supportsPostMessageRouterProtocol'] = undefined;
            /* tslint:enable:no-string-literal */
        }
    };
    // TODO: should have global utility for this
    WebViewRouterPostMessageProcessor.prototype._absolutize = function (url, noDecode) {
        if (noDecode === void 0) { noDecode = false; }
        var a = document.createElement('a');
        a.href = url;
        return noDecode ? a.href : decodeURIComponent(a.href);
    };
    WebViewRouterPostMessageProcessor.prototype._onPostMessage = function (data) {
        var protocol = 'router://';
        if (typeof data === 'string') {
            if (data.indexOf(protocol) !== 0) {
                return;
            }
            var rawUrl = data.substring(protocol.length);
            this._handleRouterMessage(rawUrl);
        }
        else {
            if (_utilities_NavigationUtility__WEBPACK_IMPORTED_MODULE_3__["default"].canNavigateWithCachedPreloadedJson()) {
                if (typeof data === 'object' && data.command === 'routerPreload') {
                    var cacheKey = "sp-pdata-" + Date.now() + "-" + Math.floor(Math.random() * 1000);
                    try {
                        sessionStorage.setItem(cacheKey, JSON.stringify(data.preloadedData));
                    }
                    catch (_) {
                        this._handleRouterMessage(data.url);
                        return;
                    }
                    this._handleRouterMessage(data.url, cacheKey);
                }
            }
        }
    };
    WebViewRouterPostMessageProcessor.prototype._handleRouterMessage = function (rawUrl, preloadedCacheKey) {
        var canonicalHref = new URL(this._absolutize(rawUrl));
        if (canonicalHref.protocol === 'https:' || canonicalHref.protocol === 'http:') {
            var isDifferentOrigin = true;
            if (canonicalHref) {
                isDifferentOrigin = canonicalHref.origin !== window.location.origin;
            }
            if (isDifferentOrigin) {
                window.location.href = canonicalHref.href;
            }
            else {
                if (_utilities_NavigationUtility__WEBPACK_IMPORTED_MODULE_3__["default"].canNavigateWithCachedPreloadedJson() && !!preloadedCacheKey) {
                    this._onIntercept(0 /* LINK */, canonicalHref.href.replace(canonicalHref.origin, ''), {
                        preloadedCacheKey: preloadedCacheKey
                    });
                }
                else {
                    this._onIntercept(0 /* LINK */, canonicalHref.href.replace(canonicalHref.origin, ''));
                }
            }
        }
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_1__["autobind"]
    ], WebViewRouterPostMessageProcessor.prototype, "_onPostMessage", null);
    return WebViewRouterPostMessageProcessor;
}());
/* harmony default export */ __webpack_exports__["default"] = (WebViewRouterPostMessageProcessor);


/***/ }),

/***/ "ZN0e":
/*!**********************************************************************!*\
  !*** ./lib/core/components/render/PageApplicationLayoutComponent.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/**
 * @copyright Microsoft Corporation. All rights reserved.
 */


/**
 * Represents the component type for a page renderer.
 *
 * @internal
 */
var PageApplicationLayoutComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(PageApplicationLayoutComponent, _super);
    function PageApplicationLayoutComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return PageApplicationLayoutComponent;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));
/* harmony default export */ __webpack_exports__["default"] = (PageApplicationLayoutComponent);


/***/ }),

/***/ "ZOVz":
/*!*********************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/history@4.7.2/node_modules/history/es/createBrowserHistory.js ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! warning */ "4qLk");
/* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(warning__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! invariant */ "EMEJ");
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(invariant__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _LocationUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LocationUtils */ "9OPX");
/* harmony import */ var _PathUtils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PathUtils */ "K/iH");
/* harmony import */ var _createTransitionManager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./createTransitionManager */ "6HbI");
/* harmony import */ var _DOMUtils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./DOMUtils */ "FElI");
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };








var PopStateEvent = 'popstate';
var HashChangeEvent = 'hashchange';

var getHistoryState = function getHistoryState() {
  try {
    return window.history.state || {};
  } catch (e) {
    // IE 11 sometimes throws when accessing window.history.state
    // See https://github.com/ReactTraining/history/pull/289
    return {};
  }
};

/**
 * Creates a history object that uses the HTML5 history API including
 * pushState, replaceState, and the popstate event.
 */
var createBrowserHistory = function createBrowserHistory() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  invariant__WEBPACK_IMPORTED_MODULE_1___default()(_DOMUtils__WEBPACK_IMPORTED_MODULE_5__["canUseDOM"], 'Browser history needs a DOM');

  var globalHistory = window.history;
  var canUseHistory = Object(_DOMUtils__WEBPACK_IMPORTED_MODULE_5__["supportsHistory"])();
  var needsHashChangeListener = !Object(_DOMUtils__WEBPACK_IMPORTED_MODULE_5__["supportsPopStateOnHashChange"])();

  var _props$forceRefresh = props.forceRefresh,
      forceRefresh = _props$forceRefresh === undefined ? false : _props$forceRefresh,
      _props$getUserConfirm = props.getUserConfirmation,
      getUserConfirmation = _props$getUserConfirm === undefined ? _DOMUtils__WEBPACK_IMPORTED_MODULE_5__["getConfirmation"] : _props$getUserConfirm,
      _props$keyLength = props.keyLength,
      keyLength = _props$keyLength === undefined ? 6 : _props$keyLength;

  var basename = props.basename ? Object(_PathUtils__WEBPACK_IMPORTED_MODULE_3__["stripTrailingSlash"])(Object(_PathUtils__WEBPACK_IMPORTED_MODULE_3__["addLeadingSlash"])(props.basename)) : '';

  var getDOMLocation = function getDOMLocation(historyState) {
    var _ref = historyState || {},
        key = _ref.key,
        state = _ref.state;

    var _window$location = window.location,
        pathname = _window$location.pathname,
        search = _window$location.search,
        hash = _window$location.hash;


    var path = pathname + search + hash;

    warning__WEBPACK_IMPORTED_MODULE_0___default()(!basename || Object(_PathUtils__WEBPACK_IMPORTED_MODULE_3__["hasBasename"])(path, basename), 'You are attempting to use a basename on a page whose URL path does not begin ' + 'with the basename. Expected path "' + path + '" to begin with "' + basename + '".');

    if (basename) path = Object(_PathUtils__WEBPACK_IMPORTED_MODULE_3__["stripBasename"])(path, basename);

    return Object(_LocationUtils__WEBPACK_IMPORTED_MODULE_2__["createLocation"])(path, state, key);
  };

  var createKey = function createKey() {
    return Math.random().toString(36).substr(2, keyLength);
  };

  var transitionManager = Object(_createTransitionManager__WEBPACK_IMPORTED_MODULE_4__["default"])();

  var setState = function setState(nextState) {
    _extends(history, nextState);

    history.length = globalHistory.length;

    transitionManager.notifyListeners(history.location, history.action);
  };

  var handlePopState = function handlePopState(event) {
    // Ignore extraneous popstate events in WebKit.
    if (Object(_DOMUtils__WEBPACK_IMPORTED_MODULE_5__["isExtraneousPopstateEvent"])(event)) return;

    handlePop(getDOMLocation(event.state));
  };

  var handleHashChange = function handleHashChange() {
    handlePop(getDOMLocation(getHistoryState()));
  };

  var forceNextPop = false;

  var handlePop = function handlePop(location) {
    if (forceNextPop) {
      forceNextPop = false;
      setState();
    } else {
      var action = 'POP';

      transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
        if (ok) {
          setState({ action: action, location: location });
        } else {
          revertPop(location);
        }
      });
    }
  };

  var revertPop = function revertPop(fromLocation) {
    var toLocation = history.location;

    // TODO: We could probably make this more reliable by
    // keeping a list of keys we've seen in sessionStorage.
    // Instead, we just default to 0 for keys we don't know.

    var toIndex = allKeys.indexOf(toLocation.key);

    if (toIndex === -1) toIndex = 0;

    var fromIndex = allKeys.indexOf(fromLocation.key);

    if (fromIndex === -1) fromIndex = 0;

    var delta = toIndex - fromIndex;

    if (delta) {
      forceNextPop = true;
      go(delta);
    }
  };

  var initialLocation = getDOMLocation(getHistoryState());
  var allKeys = [initialLocation.key];

  // Public interface

  var createHref = function createHref(location) {
    return basename + Object(_PathUtils__WEBPACK_IMPORTED_MODULE_3__["createPath"])(location);
  };

  var push = function push(path, state) {
    warning__WEBPACK_IMPORTED_MODULE_0___default()(!((typeof path === 'undefined' ? 'undefined' : _typeof(path)) === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to push when the 1st ' + 'argument is a location-like object that already has state; it is ignored');

    var action = 'PUSH';
    var location = Object(_LocationUtils__WEBPACK_IMPORTED_MODULE_2__["createLocation"])(path, state, createKey(), history.location);

    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;

      var href = createHref(location);
      var key = location.key,
          state = location.state;


      if (canUseHistory) {
        globalHistory.pushState({ key: key, state: state }, null, href);

        if (forceRefresh) {
          window.location.href = href;
        } else {
          var prevIndex = allKeys.indexOf(history.location.key);
          var nextKeys = allKeys.slice(0, prevIndex === -1 ? 0 : prevIndex + 1);

          nextKeys.push(location.key);
          allKeys = nextKeys;

          setState({ action: action, location: location });
        }
      } else {
        warning__WEBPACK_IMPORTED_MODULE_0___default()(state === undefined, 'Browser history cannot push state in browsers that do not support HTML5 history');

        window.location.href = href;
      }
    });
  };

  var replace = function replace(path, state) {
    warning__WEBPACK_IMPORTED_MODULE_0___default()(!((typeof path === 'undefined' ? 'undefined' : _typeof(path)) === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to replace when the 1st ' + 'argument is a location-like object that already has state; it is ignored');

    var action = 'REPLACE';
    var location = Object(_LocationUtils__WEBPACK_IMPORTED_MODULE_2__["createLocation"])(path, state, createKey(), history.location);

    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;

      var href = createHref(location);
      var key = location.key,
          state = location.state;


      if (canUseHistory) {
        globalHistory.replaceState({ key: key, state: state }, null, href);

        if (forceRefresh) {
          window.location.replace(href);
        } else {
          var prevIndex = allKeys.indexOf(history.location.key);

          if (prevIndex !== -1) allKeys[prevIndex] = location.key;

          setState({ action: action, location: location });
        }
      } else {
        warning__WEBPACK_IMPORTED_MODULE_0___default()(state === undefined, 'Browser history cannot replace state in browsers that do not support HTML5 history');

        window.location.replace(href);
      }
    });
  };

  var go = function go(n) {
    globalHistory.go(n);
  };

  var goBack = function goBack() {
    return go(-1);
  };

  var goForward = function goForward() {
    return go(1);
  };

  var listenerCount = 0;

  var checkDOMListeners = function checkDOMListeners(delta) {
    listenerCount += delta;

    if (listenerCount === 1) {
      Object(_DOMUtils__WEBPACK_IMPORTED_MODULE_5__["addEventListener"])(window, PopStateEvent, handlePopState);

      if (needsHashChangeListener) Object(_DOMUtils__WEBPACK_IMPORTED_MODULE_5__["addEventListener"])(window, HashChangeEvent, handleHashChange);
    } else if (listenerCount === 0) {
      Object(_DOMUtils__WEBPACK_IMPORTED_MODULE_5__["removeEventListener"])(window, PopStateEvent, handlePopState);

      if (needsHashChangeListener) Object(_DOMUtils__WEBPACK_IMPORTED_MODULE_5__["removeEventListener"])(window, HashChangeEvent, handleHashChange);
    }
  };

  var isBlocked = false;

  var block = function block() {
    var prompt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    var unblock = transitionManager.setPrompt(prompt);

    if (!isBlocked) {
      checkDOMListeners(1);
      isBlocked = true;
    }

    return function () {
      if (isBlocked) {
        isBlocked = false;
        checkDOMListeners(-1);
      }

      return unblock();
    };
  };

  var listen = function listen(listener) {
    var unlisten = transitionManager.appendListener(listener);
    checkDOMListeners(1);

    return function () {
      checkDOMListeners(-1);
      unlisten();
    };
  };

  var history = {
    length: globalHistory.length,
    action: 'POP',
    location: initialLocation,
    createHref: createHref,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    block: block,
    listen: listen
  };

  return history;
};

/* harmony default export */ __webpack_exports__["default"] = (createBrowserHistory);

/***/ }),

/***/ "ZQe2":
/*!******************************************************!*\
  !*** ./lib/core/components/chrome/Chrome.module.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../../../../common/temp/node_modules/.pnpm/css-loader@3.2.1_webpack@4.44.2/node_modules/css-loader/dist/cjs.js!../../../../../../common/temp/node_modules/.pnpm/postcss-loader@3.0.0/node_modules/postcss-loader/src??postcss!./Chrome.module.css */ "IWZV");
var loader = __webpack_require__(/*! @microsoft/load-themed-styles */ "jOlS");

if(typeof content === "string") content = [[module.i, content]];

// add the styles to the DOM
for (var i = 0; i < content.length; i++) loader.loadStyles(content[i][1], true);

if(content.locals) module.exports = content.locals;

/***/ }),

/***/ "aScj":
/*!*******************************************************!*\
  !*** ./lib/core/components/chrome/HubNav/HubNav.resx ***!
  \*******************************************************/
/*! exports provided: EditHubNavLinksTitle, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"EditHubNavLinksTitle\":\"Ēďĩţ ĥũƀ ńàvĩĝàţĩōń\"}");

/***/ }),

/***/ "b7Ry":
/*!*****************************************************!*\
  !*** ./lib/core/components/chrome/HubNav/HubNav.js ***!
  \*****************************************************/
/*! exports provided: HubNav */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HubNav", function() { return HubNav; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var office_ui_fabric_react_lib_utilities_decorators_withResponsiveMode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! office-ui-fabric-react/lib/utilities/decorators/withResponsiveMode */ "5qgq");
/* harmony import */ var office_ui_fabric_react_lib_utilities_decorators_withResponsiveMode__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(office_ui_fabric_react_lib_utilities_decorators_withResponsiveMode__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _PreloadedComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../PreloadedComponent */ "CuBB");
/* harmony import */ var _Chrome_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Chrome.module.scss */ "+Uvl");
/**
 * @copyright Microsoft Corporation. All rights reserved.
 */




/**
 * @internal
 * Navigation control for hub site navigation data.
 */
// tslint:disable-next-line:variable-name
var HubNav = function (props) {
    /* tslint:disable:no-string-literal */
    if (props.chromeComponents && props.chromeComponents['HubNav']) {
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](props.chromeComponents['HubNav'], props);
    }
    var hubNavPlaceholder;
    // hub nav does not render at all in mobile breakpoint
    if (props.responsiveMode === undefined || props.responsiveMode >= office_ui_fabric_react_lib_utilities_decorators_withResponsiveMode__WEBPACK_IMPORTED_MODULE_1__["ResponsiveMode"].large) {
        hubNavPlaceholder = react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: _Chrome_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].hubNavPlaceholder });
    }
    /* tslint:enable:no-string-literal */
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_PreloadedComponent__WEBPACK_IMPORTED_MODULE_2__["PreloadedComponent"], { componentName: 'HubNav', componentProps: props, placeHolder: hubNavPlaceholder }));
};


/***/ }),

/***/ "bt6h":
/*!*************************************************!*\
  !*** ./lib/core/components/chrome/AppChrome.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var office_ui_fabric_react_lib_utilities_decorators_withResponsiveMode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! office-ui-fabric-react/lib/utilities/decorators/withResponsiveMode */ "5qgq");
/* harmony import */ var office_ui_fabric_react_lib_utilities_decorators_withResponsiveMode__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(office_ui_fabric_react_lib_utilities_decorators_withResponsiveMode__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @microsoft/office-ui-fabric-react-bundle */ "KL1q");
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _microsoft_sp_application_base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @microsoft/sp-application-base */ "GPet");
/* harmony import */ var _microsoft_sp_application_base__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_application_base__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @microsoft/sp-diagnostics */ "ut3N");
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @microsoft/sp-lodash-subset */ "Pk8u");
/* harmony import */ var _microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _ms_odsp_datasources_lib_models_chrome_ChromeOptions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ms/odsp-datasources/lib/models/chrome/ChromeOptions */ "Vb17");
/* harmony import */ var _ms_odsp_datasources_lib_interfaces_ISpPageContext__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ms/odsp-datasources/lib/interfaces/ISpPageContext */ "GlwB");
/* harmony import */ var _ms_odsp_datasources_lib_interfaces_theming_SPVariantThemeType__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ms/odsp-datasources/lib/interfaces/theming/SPVariantThemeType */ "2R/J");
/* harmony import */ var _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ms/sp-telemetry */ "2q6Q");
/* harmony import */ var _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _ms_sp_component_utilities_lib_teams_TeamsLibLoader__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ms/sp-component-utilities/lib/teams/TeamsLibLoader */ "iFY+");
/* harmony import */ var _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ms/odsp-utilities-bundle */ "y88i");
/* harmony import */ var _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _ms_odsp_utilities_lib_logging_rumone_RUMOneLogger__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ms/odsp-utilities/lib/logging/rumone/RUMOneLogger */ "UKDt");
/* harmony import */ var _HubNav_HubNav_resx__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./HubNav/HubNav.resx */ "aScj");
var _HubNav_HubNav_resx__WEBPACK_IMPORTED_MODULE_15___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./HubNav/HubNav.resx */ "aScj", 1);
/* harmony import */ var _microsoft_sp_page_context__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @microsoft/sp-page-context */ "X+PM");
/* harmony import */ var _microsoft_sp_page_context__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_page_context__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _ms_odsp_shared_react_lib_utilities_shyConductor_ShyConductorLoader__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ms/odsp-shared-react/lib/utilities/shyConductor/ShyConductorLoader */ "txfU");
/* harmony import */ var _SiteLeftNav_LeftNav__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./SiteLeftNav/LeftNav */ "Lk6p");
/* harmony import */ var _HubNav_HubNav__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./HubNav/HubNav */ "b7Ry");
/* harmony import */ var _actions_SiteChromeActionCreator__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../actions/SiteChromeActionCreator */ "IDCp");
/* harmony import */ var _SiteHeader_SiteHeader__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./SiteHeader/SiteHeader */ "WKvy");
/* harmony import */ var _EditNav_DeferredEditNav__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./EditNav/DeferredEditNav */ "DAKc");
/* harmony import */ var _utilities_StoreUtility__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../utilities/StoreUtility */ "XF7y");
/* harmony import */ var _utilities_TeamsUtilities__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../utilities/TeamsUtilities */ "6RRI");
/* harmony import */ var _utilities_Flights__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../utilities/Flights */ "yCLn");
/* harmony import */ var _Variants__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./Variants */ "8VYI");
/* harmony import */ var _Chrome_module_scss__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./Chrome.module.scss */ "+Uvl");
/* harmony import */ var _utilities_Killswitches__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../../utilities/Killswitches */ "XjSx");
/**
 * @file AppChrome.tsx
 *
 * @Copyright (c) Microsoft Corporation.  All rights reserved.
 */



















// chrome components












/**
 * Provides the abstract base class for all pages.
 * @internal
 */
var AppChrome = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(AppChrome, _super);
    function AppChrome(props) {
        var _this = _super.call(this, props) || this;
        _this._loadAppBar = function () {
            var spPageContextInfo = _this._renderConfig
                .spPageContext;
            if (spPageContextInfo) {
                var loadAppBar_1 = function () {
                    _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_11__["_PerformanceLogger"].mark('EUPL.SPAppBar.scriptLoading.end', true);
                    // tslint:disable-next-line:no-string-literal
                    window['spAppBar'].addAppBar(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, spPageContextInfo.appBarParams), { portalUrl: spPageContextInfo.portalUrl, router: true, logoHash: spPageContextInfo.globalNavLogoHash, engagement: _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_13__["Engagement"], rumOneLoggerType: _ms_odsp_utilities_lib_logging_rumone_RUMOneLogger__WEBPACK_IMPORTED_MODULE_14__["RUMOneLogger"], controlPerformanceDataType: _ms_odsp_utilities_lib_logging_rumone_RUMOneLogger__WEBPACK_IMPORTED_MODULE_14__["ControlPerformanceData"], pageContext: spPageContextInfo, isMobile: _this._isMobile }));
                };
                var hideAppBar_1 = function () {
                    var spAppBar = document.getElementById('sp-appBar');
                    if (spAppBar) {
                        // Hide appbar preload if script download fails
                        spAppBar.style.display = 'none';
                    }
                };
                // only download script if it is not already loaded from SW
                // tslint:disable-next-line:no-string-literal
                if (!window['spAppBar']) {
                    _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_11__["_PerformanceLogger"].mark('EUPL.SPAppBar.scriptLoading.start', true);
                    var script = document.createElement('script');
                    script.onload = function () {
                        // tslint:disable-next-line:no-string-literal
                        if (window['spAppBar']) {
                            try {
                                loadAppBar_1();
                            }
                            catch (err) {
                                // Hide appbar if script execution fails
                                _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_6__["_TraceLogger"].logVerboseData({
                                    source: AppChrome_1._logSource,
                                    message: "AppChrome - Failed to initialize SPAppBar  : " + err
                                });
                                hideAppBar_1();
                            }
                        }
                    };
                    script.onerror = function () {
                        // Hide appbar if script download fails
                        hideAppBar_1();
                    };
                    script.src = spPageContextInfo.spAppBarManifestScript;
                    document.head.appendChild(script);
                }
                else {
                    loadAppBar_1();
                }
            }
        };
        _this._hideHubNavBarAtTop = function (evt) {
            var isExtendedHeaderSelected = evt.layout === _ms_odsp_datasources_lib_models_chrome_ChromeOptions__WEBPACK_IMPORTED_MODULE_8__["UnifiedHeaderLayout"].extended;
            // Re-render when necessary
            if (isExtendedHeaderSelected !== _this.state.hideHubNavAtTop) {
                _this.setState({
                    hideHubNavAtTop: isExtendedHeaderSelected
                });
            }
        };
        _this._onChromeStateChange = function () {
            var newState = _utilities_StoreUtility__WEBPACK_IMPORTED_MODULE_23__["default"].getState(_this.props.serviceScope).chrome;
            var forceUpdate = newState.forceUpdate || false;
            newState.forceUpdate = _this.state.forceUpdate; // forceUpdate should not impact state comparison below
            if (forceUpdate || !Object(_microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_7__["isEqual"])(newState, _this.state)) {
                _this.setState(newState);
            }
        };
        _this._onNavOnTopToggled = function () {
            _actions_SiteChromeActionCreator__WEBPACK_IMPORTED_MODULE_20__["default"].toggleNavOnTop(_this.props.serviceScope);
        };
        _this._onHeaderLeftNavToggleButtonClicked = function () {
            _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_13__["Engagement"].logData({ name: 'SiteHeader.LeftNavToggleButton.Click' });
            _this._onNavOnTopToggled();
        };
        _this._showEditNavForGlobalNav = function (evt) {
            if (!evt.args) {
                return;
            }
            _this._showEditNav(evt.args.group, undefined, evt.args.updateDisplayedLinks, undefined, evt.args.title || _HubNav_HubNav_resx__WEBPACK_IMPORTED_MODULE_15__["EditHubNavLinksTitle"]);
        };
        _this._showEditNav = function (group, exitEditCallback, updateDisplayedLinks, hideSearchBox, title) {
            _actions_SiteChromeActionCreator__WEBPACK_IMPORTED_MODULE_20__["default"].showEditNav(_this.props.serviceScope, {
                pageContext: _this._renderConfig.spPageContext,
                group: group,
                exitEditMode: function () {
                    _actions_SiteChromeActionCreator__WEBPACK_IMPORTED_MODULE_20__["default"].closeEditNav(_this.props.serviceScope);
                    exitEditCallback && exitEditCallback();
                },
                updateDisplayedLinks: function (links, afterSetState) {
                    if (updateDisplayedLinks) {
                        updateDisplayedLinks(links, afterSetState);
                    }
                    // clear cached nav nodes
                    _this.props.invalidate(_this._renderConfig.spPageContext.webServerRelativeUrl).catch(function (error) {
                        _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_6__["_TraceLogger"].logError(AppChrome_1._logSource, error, 'InvalidatePageContext');
                    });
                },
                title: title
            });
        };
        _this._setHeaderEmphasis = function (theme) {
            var spPageContext = _this.props.getRenderConfig().spPageContext;
            if (spPageContext) {
                var headerEmphasis = spPageContext.headerEmphasis;
                if (headerEmphasis !== undefined &&
                    (!AppChrome_1._fixHeaderEmphasisKS() || headerEmphasis !== _ms_odsp_datasources_lib_interfaces_theming_SPVariantThemeType__WEBPACK_IMPORTED_MODULE_10__["SPVariantThemeType"].None)) {
                    Object(_Variants__WEBPACK_IMPORTED_MODULE_26__["setEmphasisHeader"])(headerEmphasis, theme);
                }
            }
        };
        if (_utilities_Flights__WEBPACK_IMPORTED_MODULE_25__["default"].isHydrationEnabled) {
            var hydratedStyle = document.querySelector('style[data-hydration-styles]');
            if (hydratedStyle) {
                hydratedStyle.remove();
            }
        }
        _this._renderConfig = _this.props.getRenderConfig();
        _this._pageContext = _this._renderConfig.spPageContext;
        var _isHomePlushHubWithExtendedHeader = false;
        if ((_this._isExtendedHeaderLayoutEnabled() || _this._isGlobalNavEnabled()) && _this._pageContext) {
            _this._isHomePlusHub = Object(_ms_odsp_datasources_lib_interfaces_ISpPageContext__WEBPACK_IMPORTED_MODULE_9__["isHomePlusHub"])(_this._pageContext);
            _this._isAbleToManageGlobalNav = _this.isAbleToManageGlobalNav(_this._pageContext);
            _isHomePlushHubWithExtendedHeader = Object(_ms_odsp_datasources_lib_interfaces_ISpPageContext__WEBPACK_IMPORTED_MODULE_9__["isHomePlusHubWithExtendedHeader"])(_this._pageContext);
            if (_this._isHomePlusHub || _this._isAbleToManageGlobalNav) {
                _this._events = new _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_3__["EventGroup"](_this);
            }
        }
        _this.state = {
            isInTeamsPortalsApp: undefined,
            hideHubNavAtTop: _isHomePlushHubWithExtendedHeader
        };
        if (!_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_5__["_SPKillSwitch"].isActivated(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_5__["Guid"].parse('898804ea-10de-45b8-9276-a307ca691b77'), '06/22/2020', 'Enable accessible modalization')) {
            _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_3__["Customizations"].applyBatchedUpdates(function () {
                _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_3__["Customizations"].applySettings({ enableAriaHiddenSiblings: true });
            }, true);
            // suppressUpdates, since it shouldn't affect anything currently rendered, and nothing is currently rendered
        }
        // SSR renderToString does not work with Customizations, also the global Customizations is already set
        // correctly by the initial render, and does not need to be set again.
        if (!props.renderToString) {
            _this._setHeaderEmphasis(_this._renderConfig.headerConfig && _this._renderConfig.headerConfig.headerTheme);
        }
        Object(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_3__["registerOnThemeChangeCallback"])(_this._setHeaderEmphasis);
        _this._pageOpenedInTeamApp();
        return _this;
    }
    AppChrome_1 = AppChrome;
    AppChrome._forceDisableRenderDeferredKSActivated = function () {
        return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_5__["_SPKillSwitch"].isActivated(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_5__["Guid"].parse('f5e92b5a-68ed-4c0a-96e7-be28fc91872b'), '07/21/2020', 'Support SPHome disable renderDeferredComponent option');
    };
    AppChrome._fixHeaderEmphasisKS = function () {
        return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_5__["_SPKillSwitch"].isActivated(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_5__["Guid"].parse('ce56bda1-e799-422f-a031-bd82e53f92ba'), '08/28/2020', 'Fix navigation into site w/o header emphasis');
    };
    AppChrome._adjustHubNavForExtendedHeaderKS = function () {
        return !_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_5__["_SPKillSwitch"].isActivated('eefd9195-382b-42ca-be68-a738203724d2'
        /* '09/14/2020', 'Adjust hub nav for extended header' */
        );
    };
    AppChrome._fixGlobalNavEditingKS = function () {
        return !_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_5__["_SPKillSwitch"].isActivated('0822fa86-e8c9-41a2-880f-da2a231c0768'
        /* '09/28/2020', 'Fix global nav editing' */
        );
    };
    AppChrome._shouldRenderLeftNavToggleButton = function () {
        return (!_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_5__["_SPKillSwitch"].isActivated('6252e995-086c-4a88-8ccc-8b127c8c15a2'
        /* '01/20/2021', 'Remove flight dependency to SPPagesSuiteSearchBox' */
        ) || _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_5__["_SPFlight"].isEnabled(1240 /* SPPagesSuiteSearchBox */));
    };
    AppChrome._shouldLoadAppBar = function (spPageContextInfo) {
        return (((_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_5__["_SPFlight"].isEnabled(1399 /* SPAppBarClient */) && _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_5__["_SPFlight"].isEnabled(1343 /* SPAppBar */)) ||
            _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_5__["_SPExperiment"].getVariantAndLogExposure(90077) === 1) &&
            (_utilities_Killswitches__WEBPACK_IMPORTED_MODULE_28__["default"].shouldLoadAppBarKillSwitchActivated() ||
                (spPageContextInfo ? Object(_ms_odsp_datasources_lib_interfaces_ISpPageContext__WEBPACK_IMPORTED_MODULE_9__["shouldLoadAppBar"])(spPageContextInfo) : false)) &&
            !_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_5__["_BrowserUtilities"].isEmbedded() &&
            (!_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_5__["_BrowserDetection"].getBrowserInformation().isMobile ||
                !_utilities_Killswitches__WEBPACK_IMPORTED_MODULE_28__["default"].addSPAppBarMobileKillSwitchActivated()));
    };
    AppChrome.prototype.componentDidMount = function () {
        this._unsubscribe = _utilities_StoreUtility__WEBPACK_IMPORTED_MODULE_23__["default"].subscribe(this.props.serviceScope, this._onChromeStateChange);
        var chromeMounted = 'chromeMounted';
        _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_11__["_PerformanceLogger"].setPerformanceProperty(chromeMounted);
        if (this._enableCustomExtensions()) {
            if (this._placeholderManager) {
                this._placeholderManager.registerPlaceholders();
            }
        }
        if (AppChrome_1._shouldLoadAppBar(this._renderConfig.spPageContext) &&
            !this._renderConfig.hideSPAppBar) {
            this._loadAppBar();
            if (!_utilities_Killswitches__WEBPACK_IMPORTED_MODULE_28__["default"].useMobileBreakpointAppBarKillSwitchActivated()) {
                this._setMobileAppBarClasses();
            }
        }
        if ((this._isHomePlusHub || this._isAbleToManageGlobalNav) && this._events) {
            this._events.on(window, 'EditLinkGroup', this._showEditNavForGlobalNav);
            this._events.on(window, 'Header_Layout_Changed', this._hideHubNavBarAtTop);
        }
        this._registerForShy();
    };
    AppChrome.prototype.componentWillUnmount = function () {
        this._unsubscribe && this._unsubscribe();
        if ((this._isHomePlusHub || this._isAbleToManageGlobalNav) && this._events) {
            this._events.off(window, 'EditLinkGroup');
            this._events.off(window, 'Header_Layout_Changed');
        }
        Object(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_3__["removeOnThemeChangeCallback"])(this._setHeaderEmphasis);
        this._unregisterForShy();
    };
    /**
     * If the loading stage has completed, renders the page wrapped
     * inside the page context.
     */
    AppChrome.prototype.render = function () {
        var _a, _b;
        this._renderConfig = this.props.getRenderConfig();
        var _c = this._renderConfig, headerConfig = _c.headerConfig, navConfig = _c.navConfig, searchConfig = _c.searchConfig, spPageContext = _c.spPageContext, chromeClassName = _c.chromeClassName, renderDeferredChromeComponents = _c.renderDeferredChromeComponents;
        var chromeOptions;
        if (!_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_5__["_SPKillSwitch"].isActivated(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_5__["Guid"].parse('296ceae1-f1e4-4ac8-a79f-ca52516b9af3'), '08/15/2019', 'Controls whether to hide the search chrome')) {
            chromeOptions = this.state.chromeOptions || this._renderConfig.chromeOptions;
        }
        else {
            chromeOptions = this._renderConfig.chromeOptions;
        }
        if (AppChrome_1._shouldLoadAppBar(this._renderConfig.spPageContext) &&
            !this._renderConfig.hideSPAppBar &&
            !_utilities_Killswitches__WEBPACK_IMPORTED_MODULE_28__["default"].useMobileBreakpointAppBarKillSwitchActivated()) {
            this._setMobileAppBarClasses();
        }
        var shouldRenderLeftNavToggleButton = AppChrome_1._shouldRenderLeftNavToggleButton();
        var shouldRenderCoachmark = !_utilities_Killswitches__WEBPACK_IMPORTED_MODULE_28__["default"].isSiteHeaderCoachmarkKSActivated();
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_3__["Fabric"], { className: Object(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_3__["css"])(_Chrome_module_scss__WEBPACK_IMPORTED_MODULE_27__["default"].pageLayoutRoot, _Chrome_module_scss__WEBPACK_IMPORTED_MODULE_27__["default"].wrapperMaxWidth, chromeOptions && chromeOptions.nav.placement === _ms_odsp_datasources_lib_models_chrome_ChromeOptions__WEBPACK_IMPORTED_MODULE_8__["NavPlacementType"].HORIZONTAL
                ? 'sp-pageLayout-horizontalNav'
                : 'sp-pageLayout-sideNav') },
            this._enableCustomExtensions() && react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { "data-sp-placeholder": _microsoft_sp_application_base__WEBPACK_IMPORTED_MODULE_4__["PlaceholderName"][_microsoft_sp_application_base__WEBPACK_IMPORTED_MODULE_4__["PlaceholderName"].Top] }),
            spPageContext &&
                this._shouldShowHubNav(spPageContext, !!(navConfig && navConfig.hideHubNav)) &&
                chromeOptions &&
                !chromeOptions.nav.hidden && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_HubNav_HubNav__WEBPACK_IMPORTED_MODULE_19__["HubNav"], { chromeComponents: this._renderConfig.chromeComponents, spPageContext: spPageContext, onEditNavClicked: this._showEditNav, hubData: navConfig && navConfig.hubSiteData })),
            this._shouldShowSiteHeader() && spPageContext && chromeOptions && !chromeOptions.header.hidden && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_SiteHeader_SiteHeader__WEBPACK_IMPORTED_MODULE_21__["SiteHeader"], { chromeComponents: this._renderConfig.chromeComponents, pageContext: spPageContext, serviceScope: this.props.serviceScope, renderDeferredComponents: (AppChrome_1._forceDisableRenderDeferredKSActivated()
                    ? this.state.renderDeferredComponents || renderDeferredChromeComponents
                    : (renderDeferredChromeComponents !== null && renderDeferredChromeComponents !== void 0 ? renderDeferredChromeComponents : this.state.renderDeferredComponents)) || false, chromeOptions: chromeOptions, searchBox: chromeOptions &&
                    chromeOptions.nav.placement === _ms_odsp_datasources_lib_models_chrome_ChromeOptions__WEBPACK_IMPORTED_MODULE_8__["NavPlacementType"].HORIZONTAL &&
                    searchConfig &&
                    !this._isInPortalsApp() &&
                    searchConfig.legacySearchBox, shareButtonOnClick: headerConfig && headerConfig.shareButtonOnClick, showLanguageSelector: headerConfig && headerConfig.showLanguageSelector, onEditNavClicked: this._showEditNav, leftNavToggleCallback: shouldRenderLeftNavToggleButton ? this._onHeaderLeftNavToggleButtonClicked : undefined, isLeftNavExpanded: shouldRenderLeftNavToggleButton ? this.state.isNavOnTop || false : undefined, theme: headerConfig && headerConfig.headerTheme, 
                // tslint:disable-next-line:no-any
                siteAcronym: spPageContext.siteAcronym, responsiveMode: this.props.responsiveMode, key: spPageContext && spPageContext.webServerRelativeUrl, teamsAppMode: this._isInPortalsApp(), showCoachmark: shouldRenderCoachmark && ((_a = this._renderConfig.headerConfig) === null || _a === void 0 ? void 0 : _a.showCoachmark), coachmarkDismissCallback: shouldRenderCoachmark ? (_b = this._renderConfig.headerConfig) === null || _b === void 0 ? void 0 : _b.coachmarkDismissCallback : undefined })),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: _Chrome_module_scss__WEBPACK_IMPORTED_MODULE_27__["default"].belowHeader },
                spPageContext &&
                    this._isNavVisible(chromeOptions) &&
                    this._renderNav(this._renderConfig, chromeOptions),
                this.state.showEditNav && this._renderEditNav(),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("section", { className: Object(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_3__["css"])('mainContent', chromeClassName) }, this.props.children)),
            this._enableCustomExtensions() && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { "data-sp-placeholder": _microsoft_sp_application_base__WEBPACK_IMPORTED_MODULE_4__["PlaceholderName"][_microsoft_sp_application_base__WEBPACK_IMPORTED_MODULE_4__["PlaceholderName"].Bottom], className: 'sp-placeholder-bottom' }))));
    };
    /**
     * If the request made from company portal app,
     * Enable the siteHeader in Teams for this page
     */
    AppChrome.prototype._pageOpenedInTeamApp = function () {
        var _this = this;
        // If the SharePoint is hosted inside Teams then only check weather its an company portal app or not.
        if (_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_5__["_BrowserUtilities"].isTeamsHosted() && _utilities_Flights__WEBPACK_IMPORTED_MODULE_25__["default"].isTeamsCompanyPortalFeatureEnabled()) {
            var queryParameters = new URL(window.location.href).searchParams;
            if (queryParameters.get('app') === 'portals') {
                // tslint:disable-next-line:no-string-literal
                window['teamsCustomAppType'] = 'portals';
                this.setState({ isInTeamsPortalsApp: true });
                _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_6__["_EngagementLogger"].logEvent('AppChrome.PageOpenedInTeamsHomeSiteApp');
            }
            _ms_sp_component_utilities_lib_teams_TeamsLibLoader__WEBPACK_IMPORTED_MODULE_12__["TeamsLibLoader"].load()
                .then(function (spTeamsWrapper) {
                spTeamsWrapper
                    .pageOpenedInTeamsApp()
                    .then(function (teamsCustomApp) {
                    if (teamsCustomApp === 'portals') {
                        _this.setState({ isInTeamsPortalsApp: true });
                    }
                    else {
                        _this.setState({ isInTeamsPortalsApp: false });
                    }
                })
                    .catch(function (error) {
                    _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_6__["_TraceLogger"].logVerboseData({
                        source: AppChrome_1._logSource,
                        message: "AppChrome - Failed to initialize MicrosoftTeams via SPTeamsWrapper  : " + error
                    });
                });
            })
                .catch(function (error) {
                _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_6__["_TraceLogger"].logVerboseData({
                    source: AppChrome_1._logSource,
                    message: "AppChrome - Failed to load Teams lib loader  : " + error
                });
            });
        }
    };
    AppChrome.prototype._isNavVisible = function (chromeOptions) {
        return (!!chromeOptions &&
            this.props.responsiveMode !== undefined &&
            (!_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_5__["_BrowserUtilities"].isWebViewHosted() || this._isInPortalsApp()) &&
            !chromeOptions.nav.hidden &&
            !(chromeOptions.nav.placement === _ms_odsp_datasources_lib_models_chrome_ChromeOptions__WEBPACK_IMPORTED_MODULE_8__["NavPlacementType"].HORIZONTAL &&
                this.props.responsiveMode > office_ui_fabric_react_lib_utilities_decorators_withResponsiveMode__WEBPACK_IMPORTED_MODULE_2__["ResponsiveMode"].large));
    };
    AppChrome.prototype._renderNav = function (renderConfig, chromeOptions) {
        var _a;
        var searchConfig = renderConfig.searchConfig, spPageContext = renderConfig.spPageContext, renderDeferredChromeComponents = renderConfig.renderDeferredChromeComponents, returnToClassicCallback = renderConfig.returnToClassicCallback, sharedWithUsVisible = renderConfig.sharedWithUsVisible;
        var navigationInfo = spPageContext && spPageContext.navigationInfo;
        // quickLaunch is null (and not undefined) if disabled. If enabled but empty, then it is [].
        var quickLaunchDisabled = !!navigationInfo && navigationInfo.quickLaunch === null;
        return (!!spPageContext &&
            (_utilities_Killswitches__WEBPACK_IMPORTED_MODULE_28__["default"].isEmptyLeftNavKSActive() || !quickLaunchDisabled) && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_SiteLeftNav_LeftNav__WEBPACK_IMPORTED_MODULE_18__["LeftNav"], { chromeComponents: this._renderConfig.chromeComponents, pageContext: spPageContext, quickLaunch: navigationInfo && navigationInfo.quickLaunch, globalNav: navigationInfo && navigationInfo.topNav, responsiveMode: this.props.responsiveMode, onEditClicked: this._showEditNav, renderDeferredComponents: AppChrome_1._forceDisableRenderDeferredKSActivated()
                ? this.state.renderDeferredComponents || renderDeferredChromeComponents
                : (renderDeferredChromeComponents !== null && renderDeferredChromeComponents !== void 0 ? renderDeferredChromeComponents : this.state.renderDeferredComponents), isCurrentPageWelcomePage: this.state.isWelcomePage, searchBox: searchConfig && searchConfig.legacySearchBox, isOnTop: this.state.isNavOnTop, toggleOnTop: this._onNavOnTopToggled, key: 'LeftNav', returnToClassicCallback: returnToClassicCallback, sharedWithUsVisible: sharedWithUsVisible, hubSiteData: this._renderConfig.hubSiteData, navOptions: (_a = chromeOptions) === null || _a === void 0 ? void 0 : _a.nav })));
    };
    AppChrome.prototype._isExtendedHeaderLayoutEnabled = function () {
        return AppChrome_1._adjustHubNavForExtendedHeaderKS() && _utilities_Flights__WEBPACK_IMPORTED_MODULE_25__["default"].isExtendedHeaderLayoutEnabled();
    };
    AppChrome.prototype._isGlobalNavEnabled = function () {
        return AppChrome_1._fixGlobalNavEditingKS() && _utilities_Flights__WEBPACK_IMPORTED_MODULE_25__["default"].isGlobalNavEnabled();
    };
    /**
     * Helper function to check if current user can manage global nav. It need to meet:
     *     1. Current web is root web
     *     2. Current site is home site
     *     3. Has manage web permission
     * @param spPageContext page context instance
     */
    AppChrome.prototype.isAbleToManageGlobalNav = function (spPageContext) {
        return !!(Object(_ms_odsp_datasources_lib_interfaces_ISpPageContext__WEBPACK_IMPORTED_MODULE_9__["isHomeSite"])(spPageContext) &&
            Object(_ms_odsp_datasources_lib_interfaces_ISpPageContext__WEBPACK_IMPORTED_MODULE_9__["isRootWebContext"])(spPageContext) &&
            new _microsoft_sp_page_context__WEBPACK_IMPORTED_MODULE_16__["SPPermission"](spPageContext.webPermMasks).hasPermission(_microsoft_sp_page_context__WEBPACK_IMPORTED_MODULE_16__["SPPermission"].manageWeb));
    };
    AppChrome.prototype._shouldShowHubNav = function (spPageContext, hide) {
        if (this.state.hideHubNavAtTop) {
            return false;
        }
        var hubNavAllowedInApp = this._isInPortalsApp() ||
            (!_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_5__["_BrowserUtilities"].isWebViewHosted() &&
                !_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_5__["_BrowserUtilities"].isTeamsHosted() &&
                !_utilities_TeamsUtilities__WEBPACK_IMPORTED_MODULE_24__["default"].isTeamsStageViewHosted());
        return (!!(spPageContext && spPageContext.hubSiteId) &&
            !hide &&
            hubNavAllowedInApp &&
            !!this.props.responsiveMode &&
            this.props.responsiveMode > office_ui_fabric_react_lib_utilities_decorators_withResponsiveMode__WEBPACK_IMPORTED_MODULE_2__["ResponsiveMode"].large);
    };
    AppChrome.prototype._shouldShowSiteHeader = function () {
        return this._isInPortalsApp() || !_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_5__["_BrowserUtilities"].isEmbedded();
    };
    AppChrome.prototype._isInPortalsApp = function () {
        if ((window['teamsCustomAppType'] === 'portals' || // tslint:disable-line:no-string-literal
            this.state.isInTeamsPortalsApp) &&
            _utilities_Flights__WEBPACK_IMPORTED_MODULE_25__["default"].isTeamsCompanyPortalFeatureEnabled()) {
            return true;
        }
        return false;
    };
    Object.defineProperty(AppChrome.prototype, "_placeholderManager", {
        get: function () {
            return this.props.serviceScope.consume(_microsoft_sp_application_base__WEBPACK_IMPORTED_MODULE_4__["_PlaceholderManager"].serviceKey);
        },
        enumerable: true,
        configurable: true
    });
    AppChrome.prototype._renderEditNav = function () {
        return (this.state.editNavProps && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_EditNav_DeferredEditNav__WEBPACK_IMPORTED_MODULE_22__["DeferredEditNav"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ chromeComponents: this._renderConfig.chromeComponents }, this.state.editNavProps))));
    };
    AppChrome.prototype._enableCustomExtensions = function () {
        return this._renderConfig && !!this._renderConfig.enableCustomExtensions;
    };
    Object.defineProperty(AppChrome.prototype, "_isMobile", {
        /**
         * True if the mobile experience should be used for the app bar, false if
         * the standard experience should be used, based on either window size / breakpoints (current
         * logic) or user agent (old logic)
         */
        get: function () {
            if (!_utilities_Killswitches__WEBPACK_IMPORTED_MODULE_28__["default"].useMobileBreakpointAppBarKillSwitchActivated()) {
                return this.props.responsiveMode !== undefined && this.props.responsiveMode <= office_ui_fabric_react_lib_utilities_decorators_withResponsiveMode__WEBPACK_IMPORTED_MODULE_2__["ResponsiveMode"].large;
            }
            return !!_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_5__["_BrowserDetection"].getBrowserInformation().isMobile;
        },
        enumerable: true,
        configurable: true
    });
    /** Adds or removes mobile app bar classes as necessary */
    AppChrome.prototype._setMobileAppBarClasses = function () {
        var _a, _b, _c, _d, _e, _f, _g;
        var appBar = document.getElementById('sp-appBar');
        // tslint:disable-next-line:no-string-literal
        var appBarCallout = (_a = window['spAppBarCallout']) === null || _a === void 0 ? void 0 : _a._root;
        var elements = document.getElementsByClassName('spAppAndPropertyPanelContainer');
        var appBarParent;
        if (elements && elements[0]) {
            appBarParent = elements[0];
        }
        var appBarMobileClass = 'sp-appBar-mobile';
        var appBarCalloutMobileClass = 'sp-appBar-callout-mobile';
        if (this._isMobile) {
            (_b = appBar) === null || _b === void 0 ? void 0 : _b.classList.add(appBarMobileClass);
            (_c = appBarCallout) === null || _c === void 0 ? void 0 : _c.classList.add(appBarCalloutMobileClass);
            (_d = appBarParent) === null || _d === void 0 ? void 0 : _d.classList.add(_Chrome_module_scss__WEBPACK_IMPORTED_MODULE_27__["default"].spAppBarParentMobile);
        }
        else {
            (_e = appBar) === null || _e === void 0 ? void 0 : _e.classList.remove(appBarMobileClass);
            (_f = appBarCallout) === null || _f === void 0 ? void 0 : _f.classList.remove(appBarCalloutMobileClass);
            (_g = appBarParent) === null || _g === void 0 ? void 0 : _g.classList.remove(_Chrome_module_scss__WEBPACK_IMPORTED_MODULE_27__["default"].spAppBarParentMobile);
        }
    };
    AppChrome.prototype._registerForShy = function () {
        var _this = this;
        var shyAppBar = !_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_5__["_SPKillSwitch"].isActivated('d64b5a39-7325-47e5-bea1-3e3e38ccb4f0'
        /* '12/7/20', 'Shy mobile app bar is hidden on scroll' */
        );
        if (shyAppBar) {
            if (this._shyRegistration) {
                return;
            }
            this._shyRegistration = {
                onShy: function () {
                    var _a, _b;
                    if (_this._isMobile) {
                        if (!_this._appBar) {
                            var appBarElements = document.getElementsByClassName('sp-appBar-mobile');
                            if (appBarElements && appBarElements[0]) {
                                _this._appBar = appBarElements[0];
                            }
                        }
                        if (!_this._appBarParent) {
                            var parentElements = document.getElementsByClassName('spAppAndPropertyPanelContainer');
                            if (parentElements && parentElements[0]) {
                                _this._appBarParent = parentElements[0];
                            }
                        }
                        (_a = _this._appBar) === null || _a === void 0 ? void 0 : _a.classList.add('hide');
                        (_b = _this._appBarParent) === null || _b === void 0 ? void 0 : _b.classList.remove(_Chrome_module_scss__WEBPACK_IMPORTED_MODULE_27__["default"].spAppBarParentMobile);
                    }
                },
                onUnshy: function () {
                    var _a, _b;
                    (_a = _this._appBar) === null || _a === void 0 ? void 0 : _a.classList.remove('hide');
                    if (_this._isMobile) {
                        (_b = _this._appBarParent) === null || _b === void 0 ? void 0 : _b.classList.add(_Chrome_module_scss__WEBPACK_IMPORTED_MODULE_27__["default"].spAppBarParentMobile);
                    }
                },
                heightDifference: 0
            };
            // tslint:disable-next-line:no-floating-promises
            Object(_ms_odsp_shared_react_lib_utilities_shyConductor_ShyConductorLoader__WEBPACK_IMPORTED_MODULE_17__["getShyConductor"])().then(function (sc) {
                _this._shyConductor = sc;
                _this._shyConductor.registerCallbacks(_this._shyRegistration);
            });
        }
    };
    AppChrome.prototype._unregisterForShy = function () {
        var _a;
        if (!this._shyRegistration) {
            return;
        }
        (_a = this._shyConductor) === null || _a === void 0 ? void 0 : _a.unregisterCallback(this._shyRegistration);
        delete this._shyConductor;
        this._shyRegistration = undefined;
    };
    var AppChrome_1;
    AppChrome._logSource = _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_6__["_LogSource"].create('AppChrome');
    AppChrome = AppChrome_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        office_ui_fabric_react_lib_utilities_decorators_withResponsiveMode__WEBPACK_IMPORTED_MODULE_2__["withResponsiveMode"]
    ], AppChrome);
    return AppChrome;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));
/* harmony default export */ __webpack_exports__["default"] = (AppChrome);


/***/ }),

/***/ "c4nI":
/*!*************************************************!*\
  !*** ./lib/core/utilities/NavigationUtility.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__);

/**
 * NavigationUtility
 * @internal
 */
var NavigationUtility = /** @class */ (function () {
    function NavigationUtility() {
    }
    NavigationUtility.canNavigateWithCachedPreloadedJson = function () {
        return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPFlight"].isEnabled(1998 /* NavigateWithPreloadedJson */) && _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_BrowserUtilities"].isMobileWebView();
    };
    NavigationUtility.generatePreloadedCacheDataPromise = function (preloadedCacheKey, navigateToPreloadedData) {
        var hostPreloadedData = undefined;
        if (NavigationUtility.canNavigateWithCachedPreloadedJson()) {
            try {
                var serializedEntry = sessionStorage.getItem(preloadedCacheKey);
                if (serializedEntry) {
                    // clear cache here, so that we avoid increasing storage due to any error ahead.
                    sessionStorage.removeItem(preloadedCacheKey);
                    hostPreloadedData = JSON.parse(serializedEntry);
                }
            }
            catch (_) {
                /* no-op */
            }
        }
        if (!!hostPreloadedData) {
            return navigateToPreloadedData(hostPreloadedData);
        }
        else {
            return Promise.reject(new Error('PreloadedCacheData navigation failed'));
        }
    };
    return NavigationUtility;
}());
/* harmony default export */ __webpack_exports__["default"] = (NavigationUtility);


/***/ }),

/***/ "c5Wh":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "cDcd":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_cDcd__;

/***/ }),

/***/ "cGzF":
/*!*****************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-datasources@45.13.10_e509c819ab980023b76e5746ec0fc9e2/node_modules/@ms/odsp-datasources/lib/DesignPackage.js ***!
  \*****************************************************************************************************************************************************************************/
/*! exports provided: TEAMSITE_DESIGNPACKAGEID, REPORTSITE_DESIGNPACKAGEID, PORTFOLIOSITE_DESIGNPACKAGEID, BLANKSITE_DESIGNPACKAGEID, BLOGSITE_DESIGNPACKAGEID, COMPANY_PORTAL_DESIGNPACKAGEID, CONTENT_CENTER_DESIGNPACKAGEID, KNOWLEDGE_CENTER_DESIGNPACKAGEID, getDesignPackage, getDesignPackagesForTemplate, getAllDesignPackages, getDefaultChromeOptions, getCurrentChromeOptions, _chooseDesignPackageId */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _providers_designPackage_DesignPackageProvider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./providers/designPackage/DesignPackageProvider */ "VIN7");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TEAMSITE_DESIGNPACKAGEID", function() { return _providers_designPackage_DesignPackageProvider__WEBPACK_IMPORTED_MODULE_0__["TEAMSITE_DESIGNPACKAGEID"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "REPORTSITE_DESIGNPACKAGEID", function() { return _providers_designPackage_DesignPackageProvider__WEBPACK_IMPORTED_MODULE_0__["REPORTSITE_DESIGNPACKAGEID"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PORTFOLIOSITE_DESIGNPACKAGEID", function() { return _providers_designPackage_DesignPackageProvider__WEBPACK_IMPORTED_MODULE_0__["PORTFOLIOSITE_DESIGNPACKAGEID"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BLANKSITE_DESIGNPACKAGEID", function() { return _providers_designPackage_DesignPackageProvider__WEBPACK_IMPORTED_MODULE_0__["BLANKSITE_DESIGNPACKAGEID"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BLOGSITE_DESIGNPACKAGEID", function() { return _providers_designPackage_DesignPackageProvider__WEBPACK_IMPORTED_MODULE_0__["BLOGSITE_DESIGNPACKAGEID"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "COMPANY_PORTAL_DESIGNPACKAGEID", function() { return _providers_designPackage_DesignPackageProvider__WEBPACK_IMPORTED_MODULE_0__["COMPANY_PORTAL_DESIGNPACKAGEID"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CONTENT_CENTER_DESIGNPACKAGEID", function() { return _providers_designPackage_DesignPackageProvider__WEBPACK_IMPORTED_MODULE_0__["CONTENT_CENTER_DESIGNPACKAGEID"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KNOWLEDGE_CENTER_DESIGNPACKAGEID", function() { return _providers_designPackage_DesignPackageProvider__WEBPACK_IMPORTED_MODULE_0__["KNOWLEDGE_CENTER_DESIGNPACKAGEID"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getDesignPackage", function() { return _providers_designPackage_DesignPackageProvider__WEBPACK_IMPORTED_MODULE_0__["getDesignPackage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getDesignPackagesForTemplate", function() { return _providers_designPackage_DesignPackageProvider__WEBPACK_IMPORTED_MODULE_0__["getDesignPackagesForTemplate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getAllDesignPackages", function() { return _providers_designPackage_DesignPackageProvider__WEBPACK_IMPORTED_MODULE_0__["getAllDesignPackages"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getDefaultChromeOptions", function() { return _providers_designPackage_DesignPackageProvider__WEBPACK_IMPORTED_MODULE_0__["getDefaultChromeOptions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getCurrentChromeOptions", function() { return _providers_designPackage_DesignPackageProvider__WEBPACK_IMPORTED_MODULE_0__["getCurrentChromeOptions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_chooseDesignPackageId", function() { return _providers_designPackage_DesignPackageProvider__WEBPACK_IMPORTED_MODULE_0__["_chooseDesignPackageId"]; });


//# sourceMappingURL=DesignPackage.js.map

/***/ }),

/***/ "cUpl":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if (!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "ceyN":
/*!******************************************************!*\
  !*** ./lib/core/components/router/LinkTargetType.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * @copyright (c) Microsoft Corporation.  All rights reserved.
 */
/**
 * Represents the supported target attribute types to open a link
 *
 * @internal
 */
// tslint:disable-next-line:typedef variable-name
var LinkTargetType = {
    /**
     * Link is loaded in a new window
     */
    blank: '_blank',
    /**
     * Link is loaded in parent frame
     */
    parent: '_parent',
    /**
     * Link replaces the curent page
     */
    self: '_self',
    /**
     * Link replaces any framesets that may be loaded
     */
    top: '_top',
    /**
     * Link is not loaded
     */
    none: 'none'
};
/* harmony default export */ __webpack_exports__["default"] = (LinkTargetType);


/***/ }),

/***/ "e1TN":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/ProgressIndicator/ProgressIndicator.js ***!
  \*****************************************************************************************************************************************************************************************************************/
/*! exports provided: ProgressIndicator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressIndicator", function() { return ProgressIndicator; });
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Utilities */ "mkpW");
/* harmony import */ var _ProgressIndicator_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProgressIndicator.base */ "6kzE");
/* harmony import */ var _ProgressIndicator_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProgressIndicator.styles */ "NOEC");



/**
 * ProgressIndicator description
 */
var ProgressIndicator = Object(_Utilities__WEBPACK_IMPORTED_MODULE_0__["styled"])(_ProgressIndicator_base__WEBPACK_IMPORTED_MODULE_1__["ProgressIndicatorBase"], _ProgressIndicator_styles__WEBPACK_IMPORTED_MODULE_2__["getStyles"], undefined, { scope: 'ProgressIndicator' });
//# sourceMappingURL=ProgressIndicator.js.map

/***/ }),

/***/ "faye":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_faye__;

/***/ }),

/***/ "flPb":
/*!**************************************************!*\
  !*** ./lib/core/executors/PostRenderExecutor.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ms/sp-telemetry */ "2q6Q");
/* harmony import */ var _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_0__);

var PostRenderExecutor = /** @class */ (function () {
    function PostRenderExecutor() {
        var _this = this;
        this._executedPostRender = false;
        /**
         * Executes on a dispatch event
         **/
        this.execute = function (action) {
            if (action.type === "POST_RENDER" /* POST_RENDER */) {
                _this._executePostRender();
            }
        };
    }
    PostRenderExecutor.prototype._executePostRender = function () {
        if (this._executedPostRender) {
            return;
        }
        this._executedPostRender = true;
        _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_0__["_Telemetry"].startRealTimeProcessing();
    };
    return PostRenderExecutor;
}());
/* harmony default export */ __webpack_exports__["default"] = (PostRenderExecutor);


/***/ }),

/***/ "g0SQ":
/*!**************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/react-router@4.2.0_react@16.9.0/node_modules/react-router/Route.js ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _warning = __webpack_require__(/*! warning */ "4qLk");

var _warning2 = _interopRequireDefault(_warning);

var _invariant = __webpack_require__(/*! invariant */ "EMEJ");

var _invariant2 = _interopRequireDefault(_invariant);

var _react = __webpack_require__(/*! react */ "cDcd");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "KObg");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _matchPath = __webpack_require__(/*! ./matchPath */ "la+X");

var _matchPath2 = _interopRequireDefault(_matchPath);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var isEmptyChildren = function isEmptyChildren(children) {
  return _react2.default.Children.count(children) === 0;
};

/**
 * The public API for matching a single path and rendering.
 */

var Route = function (_React$Component) {
  _inherits(Route, _React$Component);

  function Route() {
    var _temp, _this, _ret;

    _classCallCheck(this, Route);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
      match: _this.computeMatch(_this.props, _this.context.router)
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  Route.prototype.getChildContext = function getChildContext() {
    return {
      router: _extends({}, this.context.router, {
        route: {
          location: this.props.location || this.context.router.route.location,
          match: this.state.match
        }
      })
    };
  };

  Route.prototype.computeMatch = function computeMatch(_ref, router) {
    var computedMatch = _ref.computedMatch,
        location = _ref.location,
        path = _ref.path,
        strict = _ref.strict,
        exact = _ref.exact,
        sensitive = _ref.sensitive;

    if (computedMatch) return computedMatch; // <Switch> already computed the match for us

    (0, _invariant2.default)(router, 'You should not use <Route> or withRouter() outside a <Router>');

    var route = router.route;

    var pathname = (location || route.location).pathname;

    return path ? (0, _matchPath2.default)(pathname, { path: path, strict: strict, exact: exact, sensitive: sensitive }) : route.match;
  };

  Route.prototype.componentWillMount = function componentWillMount() {
    (0, _warning2.default)(!(this.props.component && this.props.render), 'You should not use <Route component> and <Route render> in the same route; <Route render> will be ignored');

    (0, _warning2.default)(!(this.props.component && this.props.children && !isEmptyChildren(this.props.children)), 'You should not use <Route component> and <Route children> in the same route; <Route children> will be ignored');

    (0, _warning2.default)(!(this.props.render && this.props.children && !isEmptyChildren(this.props.children)), 'You should not use <Route render> and <Route children> in the same route; <Route children> will be ignored');
  };

  Route.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps, nextContext) {
    (0, _warning2.default)(!(nextProps.location && !this.props.location), '<Route> elements should not change from uncontrolled to controlled (or vice versa). You initially used no "location" prop and then provided one on a subsequent render.');

    (0, _warning2.default)(!(!nextProps.location && this.props.location), '<Route> elements should not change from controlled to uncontrolled (or vice versa). You provided a "location" prop initially but omitted it on a subsequent render.');

    this.setState({
      match: this.computeMatch(nextProps, nextContext.router)
    });
  };

  Route.prototype.render = function render() {
    var match = this.state.match;
    var _props = this.props,
        children = _props.children,
        component = _props.component,
        render = _props.render;
    var _context$router = this.context.router,
        history = _context$router.history,
        route = _context$router.route,
        staticContext = _context$router.staticContext;

    var location = this.props.location || route.location;
    var props = { match: match, location: location, history: history, staticContext: staticContext };

    return component ? // component prop gets first priority, only called if there's a match
    match ? _react2.default.createElement(component, props) : null : render ? // render prop is next, only called if there's a match
    match ? render(props) : null : children ? // children come last, always called
    typeof children === 'function' ? children(props) : !isEmptyChildren(children) ? _react2.default.Children.only(children) : null : null;
  };

  return Route;
}(_react2.default.Component);

Route.propTypes = {
  computedMatch: _propTypes2.default.object, // private, from <Switch>
  path: _propTypes2.default.string,
  exact: _propTypes2.default.bool,
  strict: _propTypes2.default.bool,
  sensitive: _propTypes2.default.bool,
  component: _propTypes2.default.func,
  render: _propTypes2.default.func,
  children: _propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.node]),
  location: _propTypes2.default.object
};
Route.contextTypes = {
  router: _propTypes2.default.shape({
    history: _propTypes2.default.object.isRequired,
    route: _propTypes2.default.object.isRequired,
    staticContext: _propTypes2.default.object
  })
};
Route.childContextTypes = {
  router: _propTypes2.default.object.isRequired
};
exports.default = Route;

/***/ }),

/***/ "g4+3":
/*!**********************************************!*\
  !*** ./lib/core/utilities/ServiceUtility.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__);
/**
 * @copyright Microsoft Corporation. All rights reserved.
 */

/**
 * Provides service utilities.
 *
 * @internal
 */
var ServiceUtility = /** @class */ (function () {
    function ServiceUtility() {
    }
    /**
     * Utility function to load a service
     * @param config - The service configuration
     * @param serviceFactory - The service generation factory function
     * @param onSuccess - The success handler
     * @param onError - The error handler
     *
     * @returns A service promise
     */
    ServiceUtility.loadService = function (config, serviceFactory, onSuccess, onError) {
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Validate"].isNotNullOrUndefined(config, 'config');
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Validate"].isNotNullOrUndefined(serviceFactory, 'serviceFactory');
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Validate"].isNotNullOrUndefined(onSuccess, 'onSuccess');
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Validate"].isNotNullOrUndefined(onError, 'onError');
        return Promise.resolve()
            .then(function () {
            return serviceFactory(config);
        })
            .then(function (svc) {
            return onSuccess(svc);
        })
            .catch(function (e) {
            throw onError(e);
        });
    };
    return ServiceUtility;
}());
/* harmony default export */ __webpack_exports__["default"] = (ServiceUtility);


/***/ }),

/***/ "gyPE":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/ProgressIndicator/index.js ***!
  \*****************************************************************************************************************************************************************************************************/
/*! exports provided: ProgressIndicator, ProgressIndicatorBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ProgressIndicator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProgressIndicator */ "e1TN");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProgressIndicator", function() { return _ProgressIndicator__WEBPACK_IMPORTED_MODULE_0__["ProgressIndicator"]; });

/* harmony import */ var _ProgressIndicator_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProgressIndicator.base */ "6kzE");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProgressIndicatorBase", function() { return _ProgressIndicator_base__WEBPACK_IMPORTED_MODULE_1__["ProgressIndicatorBase"]; });



//# sourceMappingURL=index.js.map

/***/ }),

/***/ "hLFe":
/*!*********************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/resolve-pathname@2.2.0/node_modules/resolve-pathname/index.js ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function isAbsolute(pathname) {
  return pathname.charAt(0) === '/';
}

// About 1.5x faster than the two-arg version of Array#splice()
function spliceOne(list, index) {
  for (var i = index, k = i + 1, n = list.length; k < n; i += 1, k += 1) {
    list[i] = list[k];
  }

  list.pop();
}

// This implementation is based heavily on node's url.parse
function resolvePathname(to) {
  var from = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

  var toParts = to && to.split('/') || [];
  var fromParts = from && from.split('/') || [];

  var isToAbs = to && isAbsolute(to);
  var isFromAbs = from && isAbsolute(from);
  var mustEndAbs = isToAbs || isFromAbs;

  if (to && isAbsolute(to)) {
    // to is absolute
    fromParts = toParts;
  } else if (toParts.length) {
    // to is relative, drop the filename
    fromParts.pop();
    fromParts = fromParts.concat(toParts);
  }

  if (!fromParts.length) return '/';

  var hasTrailingSlash = void 0;
  if (fromParts.length) {
    var last = fromParts[fromParts.length - 1];
    hasTrailingSlash = last === '.' || last === '..' || last === '';
  } else {
    hasTrailingSlash = false;
  }

  var up = 0;
  for (var i = fromParts.length; i >= 0; i--) {
    var part = fromParts[i];

    if (part === '.') {
      spliceOne(fromParts, i);
    } else if (part === '..') {
      spliceOne(fromParts, i);
      up++;
    } else if (up) {
      spliceOne(fromParts, i);
      up--;
    }
  }

  if (!mustEndAbs) for (; up--; up) {
    fromParts.unshift('..');
  }if (mustEndAbs && fromParts[0] !== '' && (!fromParts[0] || !isAbsolute(fromParts[0]))) fromParts.unshift('');

  var result = fromParts.join('/');

  if (hasTrailingSlash && result.substr(-1) !== '/') result += '/';

  return result;
}

/* harmony default export */ __webpack_exports__["default"] = (resolvePathname);

/***/ }),

/***/ "hWnv":
/*!******************************!*\
  !*** ./lib/SPPagesCore.resx ***!
  \******************************/
/*! exports provided: pageFailedToPreload, pageFailedToLoadService, failureToLoadRenderingService, failureToLoadStoreManagementService, failureToLoadRoutingService, failureToloadSuiteNavManager, failureToloadA11yManager, failureToLoadWebViewCommunicationService, failureToLoadServiceWorkerProxyService, serviceWorkerNotSupported, failureToloadSocketService, failureToRegisterService, failureToGetConnection, failureToStartConnection, failureToStartConnectionPendingRequest, failureToStopConnectionNotInitialized, failureToStopConnectionNotStarted, failureToRegisterHandlersNoProxy, failureToInitiateRequestNoProxy, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"pageFailedToPreload\":\"Ēŕŕōŕ ƥŕēĺōàďĩńĝ ţĥē ƥàĝē-ƀàśēď àƥƥĺĩćàţĩōń. Ēŕŕōŕ: {0}\",\"pageFailedToLoadService\":\"Ēŕŕōŕ ĺōàďĩńĝ śēŕvĩćē ŕēǫũĩŕēď ţō śţàŕţ ţĥē ƥàĝē-ƀàśēď àƥƥĺĩćàţĩōń. Ēŕŕōŕ: {0}\",\"failureToLoadRenderingService\":\"Ēŕŕōŕ ĺōàďĩńĝ ŕēńďēŕĩńĝ śēŕvĩćē. Ēŕŕōŕ: {0}\",\"failureToLoadStoreManagementService\":\"Ēŕŕōŕ ĺōàďĩńĝ śţōŕē màńàĝēmēńţ śēŕvĩćē. Ēŕŕōŕ: {0}\",\"failureToLoadRoutingService\":\"Ēŕŕōŕ ĺōàďĩńĝ ŕōũţĩńĝ śēŕvĩćē. Ēŕŕōŕ: {0}\",\"failureToloadSuiteNavManager\":\"Ēŕŕōŕ ĺōàďĩńĝ śũĩţē ńàvĩĝàţĩōń ćōńƒĩĝũŕàţĩōń màńàĝēŕ. Ēŕŕōŕ: {0}\",\"failureToloadA11yManager\":\"Ēŕŕōŕ ĺōàďĩńĝ ćũśţōm àććēśśĩƀĩĺĩţŷ màńàĝēmēńţ śēŕvĩćē. Ēŕŕōŕ: {0}\",\"failureToLoadWebViewCommunicationService\":\"Ēŕŕōŕ ĺōàďĩńĝ ŵēƀ vĩēŵ ćōmmũńĩćàţōŕ śēŕvĩćē. Ēŕŕōŕ: {0}\",\"failureToLoadServiceWorkerProxyService\":\"Ēŕŕōŕ ĺōàďĩńĝ śēŕvĩćē ŵōŕķēŕ ƥŕōxŷ śēŕvĩćē. Ēŕŕōŕ: {0}\",\"serviceWorkerNotSupported\":\"ńàvĩĝàţōŕ.śēŕvĩćēŴōŕķēŕ ĩśń\\u0027ţ śũƥƥōŕţēď.\",\"failureToloadSocketService\":\"Ēŕŕōŕ ĺōàďĩńĝ śōćķēţ śēŕvĩćē. Ēŕŕōŕ: {0}\",\"failureToRegisterService\":\"Śēŕvĩćē: {0} ĥàś àĺŕēàďŷ ƀēēń ŕēĝĩśţēŕēď.\",\"failureToGetConnection\":\"Ƒàĩĺēď ţō ĝēţ ćōńńēćţĩōń. Ēŕŕōŕ: Ćōńńēćţĩōń ĩś ńōţ ĩńĩţĩàĺĩźēď.\",\"failureToStartConnection\":\"Ƒàĩĺēď ţō śţàŕţ ćōńńēćţĩōń. Ēŕŕōŕ: Ćōńńēćţĩōń ĩś ńōţ ĩńĩţĩàĺĩźēď.\",\"failureToStartConnectionPendingRequest\":\"Ƒàĩĺēď ţō śţàŕţ ćōńńēćţĩōń. Ēŕŕōŕ: Ƥēńďĩńĝ ŕēǫũēśţ ĩń ƥŕōĝŕēśś.\",\"failureToStopConnectionNotInitialized\":\"Ƒàĩĺēď ţō śţōƥ ćōńńēćţĩōń. Ēŕŕōŕ: Ćōńńēćţĩōń ĩś ńōţ ĩńĩţĩàĺĩźēď.\",\"failureToStopConnectionNotStarted\":\"Ƒàĩĺēď ţō śţōƥ ćōńńēćţĩōń. Ēŕŕōŕ: Ćōńńēćţĩōń ĥàś ńōţ śţàŕţēď.\",\"failureToRegisterHandlersNoProxy\":\"Ƒàĩĺēď ţō ŕēĝĩśţēŕ ĥàńďĺēŕś. Ēŕŕōŕ: Ńō ćōńńēćţĩōń ƥŕōxŷ àvàĩĺàƀĺē.\",\"failureToInitiateRequestNoProxy\":\"Ƒàĩĺēď ţō ĩńĩţĩàţē ďàţà ŕēǫũēśţ. Ēŕŕōŕ: Ńō ćōńńēćţĩōń ƥŕōxŷ àvàĩĺàƀĺē.\"}");

/***/ }),

/***/ "hok/":
/*!********************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/redux@3.6.0/node_modules/redux/es/createStore.js ***!
  \********************************************************************************************************/
/*! exports provided: ActionTypes, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionTypes", function() { return ActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createStore; });
/* harmony import */ var lodash_es_isPlainObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash-es/isPlainObject */ "R0P3");
/* harmony import */ var symbol_observable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! symbol-observable */ "87/5");



/**
 * These are private action types reserved by Redux.
 * For any unknown actions, you must return the current state.
 * If the current state is undefined, you must return the initial state.
 * Do not reference these action types directly in your code.
 */
var ActionTypes = {
  INIT: '@@redux/INIT'
};

/**
 * Creates a Redux store that holds the state tree.
 * The only way to change the data in the store is to call `dispatch()` on it.
 *
 * There should only be a single store in your app. To specify how different
 * parts of the state tree respond to actions, you may combine several reducers
 * into a single reducer function by using `combineReducers`.
 *
 * @param {Function} reducer A function that returns the next state tree, given
 * the current state tree and the action to handle.
 *
 * @param {any} [preloadedState] The initial state. You may optionally specify it
 * to hydrate the state from the server in universal apps, or to restore a
 * previously serialized user session.
 * If you use `combineReducers` to produce the root reducer function, this must be
 * an object with the same shape as `combineReducers` keys.
 *
 * @param {Function} enhancer The store enhancer. You may optionally specify it
 * to enhance the store with third-party capabilities such as middleware,
 * time travel, persistence, etc. The only store enhancer that ships with Redux
 * is `applyMiddleware()`.
 *
 * @returns {Store} A Redux store that lets you read the state, dispatch actions
 * and subscribe to changes.
 */
function createStore(reducer, preloadedState, enhancer) {
  var _ref2;

  if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
    enhancer = preloadedState;
    preloadedState = undefined;
  }

  if (typeof enhancer !== 'undefined') {
    if (typeof enhancer !== 'function') {
      throw new Error('Expected the enhancer to be a function.');
    }

    return enhancer(createStore)(reducer, preloadedState);
  }

  if (typeof reducer !== 'function') {
    throw new Error('Expected the reducer to be a function.');
  }

  var currentReducer = reducer;
  var currentState = preloadedState;
  var currentListeners = [];
  var nextListeners = currentListeners;
  var isDispatching = false;

  function ensureCanMutateNextListeners() {
    if (nextListeners === currentListeners) {
      nextListeners = currentListeners.slice();
    }
  }

  /**
   * Reads the state tree managed by the store.
   *
   * @returns {any} The current state tree of your application.
   */
  function getState() {
    return currentState;
  }

  /**
   * Adds a change listener. It will be called any time an action is dispatched,
   * and some part of the state tree may potentially have changed. You may then
   * call `getState()` to read the current state tree inside the callback.
   *
   * You may call `dispatch()` from a change listener, with the following
   * caveats:
   *
   * 1. The subscriptions are snapshotted just before every `dispatch()` call.
   * If you subscribe or unsubscribe while the listeners are being invoked, this
   * will not have any effect on the `dispatch()` that is currently in progress.
   * However, the next `dispatch()` call, whether nested or not, will use a more
   * recent snapshot of the subscription list.
   *
   * 2. The listener should not expect to see all state changes, as the state
   * might have been updated multiple times during a nested `dispatch()` before
   * the listener is called. It is, however, guaranteed that all subscribers
   * registered before the `dispatch()` started will be called with the latest
   * state by the time it exits.
   *
   * @param {Function} listener A callback to be invoked on every dispatch.
   * @returns {Function} A function to remove this change listener.
   */
  function subscribe(listener) {
    if (typeof listener !== 'function') {
      throw new Error('Expected listener to be a function.');
    }

    var isSubscribed = true;

    ensureCanMutateNextListeners();
    nextListeners.push(listener);

    return function unsubscribe() {
      if (!isSubscribed) {
        return;
      }

      isSubscribed = false;

      ensureCanMutateNextListeners();
      var index = nextListeners.indexOf(listener);
      nextListeners.splice(index, 1);
    };
  }

  /**
   * Dispatches an action. It is the only way to trigger a state change.
   *
   * The `reducer` function, used to create the store, will be called with the
   * current state tree and the given `action`. Its return value will
   * be considered the **next** state of the tree, and the change listeners
   * will be notified.
   *
   * The base implementation only supports plain object actions. If you want to
   * dispatch a Promise, an Observable, a thunk, or something else, you need to
   * wrap your store creating function into the corresponding middleware. For
   * example, see the documentation for the `redux-thunk` package. Even the
   * middleware will eventually dispatch plain object actions using this method.
   *
   * @param {Object} action A plain object representing “what changed”. It is
   * a good idea to keep actions serializable so you can record and replay user
   * sessions, or use the time travelling `redux-devtools`. An action must have
   * a `type` property which may not be `undefined`. It is a good idea to use
   * string constants for action types.
   *
   * @returns {Object} For convenience, the same action object you dispatched.
   *
   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
   * return something else (for example, a Promise you can await).
   */
  function dispatch(action) {
    if (!Object(lodash_es_isPlainObject__WEBPACK_IMPORTED_MODULE_0__["default"])(action)) {
      throw new Error('Actions must be plain objects. ' + 'Use custom middleware for async actions.');
    }

    if (typeof action.type === 'undefined') {
      throw new Error('Actions may not have an undefined "type" property. ' + 'Have you misspelled a constant?');
    }

    if (isDispatching) {
      throw new Error('Reducers may not dispatch actions.');
    }

    try {
      isDispatching = true;
      currentState = currentReducer(currentState, action);
    } finally {
      isDispatching = false;
    }

    var listeners = currentListeners = nextListeners;
    for (var i = 0; i < listeners.length; i++) {
      listeners[i]();
    }

    return action;
  }

  /**
   * Replaces the reducer currently used by the store to calculate the state.
   *
   * You might need this if your app implements code splitting and you want to
   * load some of the reducers dynamically. You might also need this if you
   * implement a hot reloading mechanism for Redux.
   *
   * @param {Function} nextReducer The reducer for the store to use instead.
   * @returns {void}
   */
  function replaceReducer(nextReducer) {
    if (typeof nextReducer !== 'function') {
      throw new Error('Expected the nextReducer to be a function.');
    }

    currentReducer = nextReducer;
    dispatch({ type: ActionTypes.INIT });
  }

  /**
   * Interoperability point for observable/reactive libraries.
   * @returns {observable} A minimal observable of state changes.
   * For more information, see the observable proposal:
   * https://github.com/zenparsing/es-observable
   */
  function observable() {
    var _ref;

    var outerSubscribe = subscribe;
    return _ref = {
      /**
       * The minimal observable subscription method.
       * @param {Object} observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns {subscription} An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe: function subscribe(observer) {
        if (typeof observer !== 'object') {
          throw new TypeError('Expected the observer to be an object.');
        }

        function observeState() {
          if (observer.next) {
            observer.next(getState());
          }
        }

        observeState();
        var unsubscribe = outerSubscribe(observeState);
        return { unsubscribe: unsubscribe };
      }
    }, _ref[symbol_observable__WEBPACK_IMPORTED_MODULE_1__["default"]] = function () {
      return this;
    }, _ref;
  }

  // When a store is created, an "INIT" action is dispatched so that every
  // reducer returns their initial state. This effectively populates
  // the initial state tree.
  dispatch({ type: ActionTypes.INIT });

  return _ref2 = {
    dispatch: dispatch,
    subscribe: subscribe,
    getState: getState,
    replaceReducer: replaceReducer
  }, _ref2[symbol_observable__WEBPACK_IMPORTED_MODULE_1__["default"]] = observable, _ref2;
}

/***/ }),

/***/ "iFY+":
/*!*************************************************************!*\
  !*** ../sp-component-utilities/lib/teams/TeamsLibLoader.js ***!
  \*************************************************************/
/*! exports provided: TeamsLibLoader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamsLibLoader", function() { return TeamsLibLoader; });
/* harmony import */ var _microsoft_sp_loader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/sp-loader */ "I6O9");
/* harmony import */ var _microsoft_sp_loader__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_loader__WEBPACK_IMPORTED_MODULE_0__);

var TeamsLibLoader = /** @class */ (function () {
    function TeamsLibLoader() {
    }
    TeamsLibLoader.load = function () {
        if (!TeamsLibLoader._spTeamsWrapperPromise) {
            TeamsLibLoader._spTeamsWrapperPromise = _microsoft_sp_loader__WEBPACK_IMPORTED_MODULE_0__["SPComponentLoader"].loadComponentById(TeamsLibLoader._spTeamsLibComponentId).then(function (module) { return module.SPTeamsWrapper; });
        }
        return TeamsLibLoader._spTeamsWrapperPromise;
    };
    TeamsLibLoader._spTeamsLibComponentId = '9ef3df07-744e-4793-9840-c67d47c41763';
    return TeamsLibLoader;
}());



/***/ }),

/***/ "jOlS":
/*!************************************************!*\
  !*** external "@microsoft/load-themed-styles" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_jOlS__;

/***/ }),

/***/ "l324":
/*!**************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/redux-devtools-extension@2.13.8_redux@3.6.0/node_modules/redux-devtools-extension/index.js ***!
  \**************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var compose = __webpack_require__(/*! redux */ "TgFA").compose;

exports.__esModule = true;
exports.composeWithDevTools = (
  typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ :
    function() {
      if (arguments.length === 0) return undefined;
      if (typeof arguments[0] === 'object') return compose;
      return compose.apply(null, arguments);
    }
);

exports.devToolsEnhancer = (
  typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__ ?
    window.__REDUX_DEVTOOLS_EXTENSION__ :
    function() { return function(noop) { return noop; } }
);


/***/ }),

/***/ "lAVr":
/*!*********************************************************************************************!*\
  !*** ./lib/core/components/chrome/PageLayoutScrollRegion/PageLayoutScrollRegion.module.css ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../../../../../common/temp/node_modules/.pnpm/css-loader@3.2.1_webpack@4.44.2/node_modules/css-loader/dist/cjs.js!../../../../../../../common/temp/node_modules/.pnpm/postcss-loader@3.0.0/node_modules/postcss-loader/src??postcss!./PageLayoutScrollRegion.module.css */ "/Ry9");
var loader = __webpack_require__(/*! @microsoft/load-themed-styles */ "jOlS");

if(typeof content === "string") content = [[module.i, content]];

// add the styles to the DOM
for (var i = 0; i < content.length; i++) loader.loadStyles(content[i][1], true);

if(content.locals) module.exports = content.locals;

/***/ }),

/***/ "la+X":
/*!******************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/react-router@4.2.0_react@16.9.0/node_modules/react-router/matchPath.js ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _pathToRegexp = __webpack_require__(/*! path-to-regexp */ "1AEj");

var _pathToRegexp2 = _interopRequireDefault(_pathToRegexp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var patternCache = {};
var cacheLimit = 10000;
var cacheCount = 0;

var compilePath = function compilePath(pattern, options) {
  var cacheKey = '' + options.end + options.strict + options.sensitive;
  var cache = patternCache[cacheKey] || (patternCache[cacheKey] = {});

  if (cache[pattern]) return cache[pattern];

  var keys = [];
  var re = (0, _pathToRegexp2.default)(pattern, keys, options);
  var compiledPattern = { re: re, keys: keys };

  if (cacheCount < cacheLimit) {
    cache[pattern] = compiledPattern;
    cacheCount++;
  }

  return compiledPattern;
};

/**
 * Public API for matching a URL pathname to a path pattern.
 */
var matchPath = function matchPath(pathname) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  if (typeof options === 'string') options = { path: options };

  var _options = options,
      _options$path = _options.path,
      path = _options$path === undefined ? '/' : _options$path,
      _options$exact = _options.exact,
      exact = _options$exact === undefined ? false : _options$exact,
      _options$strict = _options.strict,
      strict = _options$strict === undefined ? false : _options$strict,
      _options$sensitive = _options.sensitive,
      sensitive = _options$sensitive === undefined ? false : _options$sensitive;

  var _compilePath = compilePath(path, { end: exact, strict: strict, sensitive: sensitive }),
      re = _compilePath.re,
      keys = _compilePath.keys;

  var match = re.exec(pathname);

  if (!match) return null;

  var url = match[0],
      values = match.slice(1);

  var isExact = pathname === url;

  if (exact && !isExact) return null;

  return {
    path: path, // the path pattern used to match
    url: path === '/' && url === '' ? '/' : url, // the matched portion of the URL
    isExact: isExact, // whether or not we matched exactly
    params: keys.reduce(function (memo, key, index) {
      memo[key.name] = values[index];
      return memo;
    }, {})
  };
};

exports.default = matchPath;

/***/ }),

/***/ "ltct":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/css-loader@3.2.1_webpack@4.44.2/node_modules/css-loader/dist/cjs.js!/agent/_work/1/s/common/temp/node_modules/.pnpm/postcss-loader@3.0.0/node_modules/postcss-loader/src??postcss!./lib/core/components/chrome/SiteLeftNav/LeftNav.module.css ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../common/temp/node_modules/.pnpm/css-loader@3.2.1_webpack@4.44.2/node_modules/css-loader/dist/runtime/api.js */ "5ADk")(false);
// Module
exports.push([module.i, ".t_c_beed2cf1{background-color:\"[theme:white, default: #ffffff]\";border:0 solid \"[theme:neutrallight, default: #edebe9]\";width:206px;-ms-flex:none;flex:none}[dir=ltr] .t_c_beed2cf1{border-right-width:1px}[dir=rtl] .t_c_beed2cf1{border-left-width:1px}@media screen and (max-width:1023px){.t_c_beed2cf1{display:none}}.u_c_beed2cf1{width:227px}", ""]);


/***/ }),

/***/ "m6Lh":
/*!********************************************!*\
  !*** ./lib/core/utilities/docLibRoutes.js ***!
  \********************************************/
/*! exports provided: default, isListView, isOneUpView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return docLibRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isListView", function() { return isListView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isOneUpView", function() { return isOneUpView; });
/* harmony import */ var _microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/sp-lodash-subset */ "Pk8u");
/* harmony import */ var _microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ms_odsp_datasources_lib_dataSources_listCollection_ListTemplateType__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ms/odsp-datasources/lib/dataSources/listCollection/ListTemplateType */ "HyBu");
/* harmony import */ var _Killswitches__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Killswitches */ "XjSx");



/**
 * @internal
 */
function docLibRoutes(pageContext, location) {
    /**
     * PR: 404979
     * If a doc-lib link is embedded inside a site-page (deep-link), then this link is not part of the
     * INavNode[]. As a result, despite being on light-speed, we don't do an in-place nav for such a scenario.
     * We are fixing this by checking if the url's containing folder's name is "forms".
     * If so, there is a high chance that it is a doc-lib scenario (on light-speed)
     * and we should try to do in-place nav.
     *
     * At present in-place doc-lib transitions are tightly coupled with NavNodes.
     * Hence, if we encounter such a scenario, we create a dummy nav node and return it from this function.
     * As a result, downstream tools are able to do in-place nav.
     */
    var navNodes = [];
    if (location && isListView(location.pathname, location.search)) {
        var docLibNavNode = {
            Id: 0,
            Title: '',
            Url: location.pathname,
            IsDocLib: true,
            IsExternal: false,
            ParentId: 0,
            Children: []
        };
        navNodes = navNodes.concat(docLibNavNode);
    }
    if (pageContext &&
        pageContext.legacyPageContext.navigationInfo &&
        pageContext.legacyPageContext.navigationInfo.quickLaunch) {
        navNodes = navNodes.concat(pageContext.legacyPageContext.navigationInfo.quickLaunch);
    }
    if (navNodes) {
        navNodes = navNodes.concat(Object(_microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_0__["flatten"])(navNodes.map(function (node) { return node.Children; })));
        navNodes = navNodes.filter(function (node) {
            if (!node) {
                return false;
            }
            var qsp = !_Killswitches__WEBPACK_IMPORTED_MODULE_2__["default"].isOneUpViewKSActivated()
                ? node.Url.split('?')[1]
                : undefined;
            return ((node.IsDocLib && !isOneUpView(qsp)) ||
                (node.ListTemplateType &&
                    Object(_ms_odsp_datasources_lib_dataSources_listCollection_ListTemplateType__WEBPACK_IMPORTED_MODULE_1__["isGenericList"])(node.ListTemplateType) &&
                    (_Killswitches__WEBPACK_IMPORTED_MODULE_2__["default"].navToNewFormKillSwitchActivated() || !isUnsupportedListForms(node.Url))));
        });
        /**
         * For generic lists which have a query search parameter, create a dummy nav-node
         * and keep only the pathname in the Url field.
         * This will help ensure path-matching in sp-list-host router for such URLs and thus
         * ensure in-place navigation.
         */
        if (!_Killswitches__WEBPACK_IMPORTED_MODULE_2__["default"].usePathnameInListNodeKSActivated()) {
            var listNavNodesWithQSP = [];
            for (var idx = 0; idx < navNodes.length; idx++) {
                var node = navNodes[idx];
                if (nodeUrlHasQSP(node.Url) && node.ListTemplateType && Object(_ms_odsp_datasources_lib_dataSources_listCollection_ListTemplateType__WEBPACK_IMPORTED_MODULE_1__["isGenericList"])(node.ListTemplateType)) {
                    var listNode = {
                        Id: idx + 1,
                        Title: '',
                        Url: node.Url.split('?')[0],
                        IsDocLib: node.IsDocLib,
                        IsExternal: node.IsExternal,
                        ParentId: idx + 1,
                        Children: [],
                        ListTemplateType: node.ListTemplateType
                    };
                    listNavNodesWithQSP = listNavNodesWithQSP.concat(listNode);
                }
            }
            if (listNavNodesWithQSP !== []) {
                navNodes = navNodes.concat(listNavNodesWithQSP);
            }
        }
        return navNodes;
    }
    else {
        return [];
    }
}
/**
 * @internal
 * @param pathname - Url under question. We need to determine if it is a list view (aka document library)
 *
 * Check if the url's containing folder's name is "forms".
 * If so, then it can either be a "List View" OR a "List Form page"
 *
 * If the url doesn't contain "newform.aspx" and "dispform.aspx" and "editform.aspx" and
 * if the query param ID's type is not a number, then it is a list view (document library).
 */
function isListView(pathname, qsp) {
    var lowercasePathname = pathname.toLowerCase();
    var splitPathname = lowercasePathname.split('/');
    if (!_Killswitches__WEBPACK_IMPORTED_MODULE_2__["default"].addPathToNavNodeKSActivated() &&
        !isOneUpView(qsp) &&
        splitPathname.length >= 2 &&
        splitPathname.slice(-2)[0] === 'forms' &&
        !isSearchParameterTypeInteger('id') &&
        !isUnsupportedListForms(lowercasePathname)) {
        return true;
    }
    else {
        return false;
    }
}
function isUnsupportedListForms(pathname) {
    var lowercasePathname = pathname.toLowerCase();
    return !(lowercasePathname.indexOf('newform.aspx') === -1 &&
        lowercasePathname.indexOf('dispform.aspx') === -1 &&
        lowercasePathname.indexOf('editform.aspx') === -1);
}
function nodeUrlHasQSP(url) {
    return url.split('?')[1] ? true : false;
}
function isSearchParameterTypeInteger(param) {
    var searchParams = new URLSearchParams(location.search.toLowerCase());
    return searchParams.has(param) ? !isNaN(Number(searchParams.get(param))) : false;
}
/**
 * @internal
 */
function isOneUpView(qsp) {
    if (_Killswitches__WEBPACK_IMPORTED_MODULE_2__["default"].isOneUpViewKSActivated() || !qsp) {
        return false;
    }
    var searchParams = new URLSearchParams(qsp.toLowerCase());
    return searchParams.has('id') && searchParams.has('parent');
}


/***/ }),

/***/ "mBjQ":
/*!****************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/lodash-es@4.17.20/node_modules/lodash-es/isObjectLike.js ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

/* harmony default export */ __webpack_exports__["default"] = (isObjectLike);


/***/ }),

/***/ "mFqP":
/*!******************************************************!*\
  !*** ./lib/core/components/layout/BasePageLayout.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _chrome_BasePage_Props__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../chrome/BasePage.Props */ "RmMj");
/* harmony import */ var _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ms/sp-telemetry */ "2q6Q");
/* harmony import */ var _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_3__);
/**
 * @file BasePageLayout.tsx
 *
 * @Copyright (c) Microsoft Corporation.  All rights reserved.
 */




/**
 * Provides the abstract base class for all page layouts.
 * @internal
 */
var BasePageLayout = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(BasePageLayout, _super);
    function BasePageLayout() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Occurs after the BasePageLayout component has been mounted.
     */
    BasePageLayout.prototype.componentDidMount = function () {
        var pageLayoutRendered = 'pageLayoutRendered';
        _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_3__["_PerformanceLogger"].setPerformanceProperty(pageLayoutRendered);
    };
    /**
     * Renders the page layout.
     */
    BasePageLayout.prototype.render = function () {
        return this.renderPageLayout();
    };
    /**
     * The context type used by the BasePageLayout component.
     */
    BasePageLayout.contextType = _chrome_BasePage_Props__WEBPACK_IMPORTED_MODULE_2__["pageContext"];
    return BasePageLayout;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));
/* harmony default export */ __webpack_exports__["default"] = (BasePageLayout);


/***/ }),

/***/ "mhe/":
/*!*****************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/symbol-observable@1.2.0/node_modules/symbol-observable/es/ponyfill.js ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return symbolObservablePonyfill; });
function symbolObservablePonyfill(root) {
	var result;
	var Symbol = root.Symbol;

	if (typeof Symbol === 'function') {
		if (Symbol.observable) {
			result = Symbol.observable;
		} else {
			result = Symbol('observable');
			Symbol.observable = result;
		}
	} else {
		result = '@@observable';
	}

	return result;
};


/***/ }),

/***/ "mkpW":
/*!****************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/Utilities.js ***!
  \****************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/office-ui-fabric-react-bundle */ "KL1q");
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
// Loading office-ui-fabric-react/./lib/Utilities.js


/***/ }),

/***/ "mwqp":
/*!**********************!*\
  !*** ./lib/index.js ***!
  \**********************/
/*! exports provided: _PageApplicationLayoutComponent, _withManagedRoutes, _PageApplicationRouter, _asyncHistory, PageApplicationRouterContext, _docLibRoutes, _isListView, _isOneUpView, _PageRoute, _LoadingIndicator, _DataInterceptionType, _BasePage, _pageContext, _BasePageLayout, _LinkTargetType, _PageStore, _PageSuiteNavConfigurationManager, _StoreManagementService, _BasePageApplication, _PageApplicationContext, _Killswitches, _StoreUtility, _TeamsUtilities, _NavigationUtility, _WebViewCommunicatorServiceFactory, _SiteChromeActionCreator, _PostRenderActionCreator, _PostRenderPriority, DesignPackageProvider, _PageLayoutScrollRegion, createStore, combineReducers, Route, Switch, Router */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_components_render_PageApplicationLayoutComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/components/render/PageApplicationLayoutComponent */ "ZN0e");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_PageApplicationLayoutComponent", function() { return _core_components_render_PageApplicationLayoutComponent__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _core_components_render_HighOrderLayoutComponents__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/components/render/HighOrderLayoutComponents */ "4oe0");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_withManagedRoutes", function() { return _core_components_render_HighOrderLayoutComponents__WEBPACK_IMPORTED_MODULE_1__["_withManagedRoutes"]; });

/* harmony import */ var _core_components_router_PageApplicationRouter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/components/router/PageApplicationRouter */ "0iU6");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_PageApplicationRouter", function() { return _core_components_router_PageApplicationRouter__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_asyncHistory", function() { return _core_components_router_PageApplicationRouter__WEBPACK_IMPORTED_MODULE_2__["asyncHistory"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PageApplicationRouterContext", function() { return _core_components_router_PageApplicationRouter__WEBPACK_IMPORTED_MODULE_2__["PageApplicationRouterContext"]; });

/* harmony import */ var _core_utilities_docLibRoutes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/utilities/docLibRoutes */ "m6Lh");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_docLibRoutes", function() { return _core_utilities_docLibRoutes__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_isListView", function() { return _core_utilities_docLibRoutes__WEBPACK_IMPORTED_MODULE_3__["isListView"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_isOneUpView", function() { return _core_utilities_docLibRoutes__WEBPACK_IMPORTED_MODULE_3__["isOneUpView"]; });

/* harmony import */ var _core_components_router_PageRoute__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core/components/router/PageRoute */ "5H8k");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_PageRoute", function() { return _core_components_router_PageRoute__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _core_components_router_LoadingIndicator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./core/components/router/LoadingIndicator */ "NAKQ");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_LoadingIndicator", function() { return _core_components_router_LoadingIndicator__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _core_components_router_LinkInterceptor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./core/components/router/LinkInterceptor */ "+hfF");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_DataInterceptionType", function() { return _core_components_router_LinkInterceptor__WEBPACK_IMPORTED_MODULE_6__["DataInterceptionType"]; });

/* harmony import */ var _core_components_chrome_BasePage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./core/components/chrome/BasePage */ "7NNT");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_BasePage", function() { return _core_components_chrome_BasePage__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _core_components_chrome_BasePage_Props__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./core/components/chrome/BasePage.Props */ "RmMj");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_pageContext", function() { return _core_components_chrome_BasePage_Props__WEBPACK_IMPORTED_MODULE_8__["pageContext"]; });

/* harmony import */ var _core_components_layout_BasePageLayout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./core/components/layout/BasePageLayout */ "mFqP");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_BasePageLayout", function() { return _core_components_layout_BasePageLayout__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony import */ var _core_components_router_LinkTargetType__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./core/components/router/LinkTargetType */ "ceyN");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_LinkTargetType", function() { return _core_components_router_LinkTargetType__WEBPACK_IMPORTED_MODULE_10__["default"]; });

/* harmony import */ var _core_components_store_PageStore__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./core/components/store/PageStore */ "AXdo");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_PageStore", function() { return _core_components_store_PageStore__WEBPACK_IMPORTED_MODULE_11__["default"]; });

/* harmony import */ var _core_components_suiteNav_PageSuiteNavConfigurationManager__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./core/components/suiteNav/PageSuiteNavConfigurationManager */ "K5zV");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_PageSuiteNavConfigurationManager", function() { return _core_components_suiteNav_PageSuiteNavConfigurationManager__WEBPACK_IMPORTED_MODULE_12__["default"]; });

/* harmony import */ var _core_services_store_StoreManagementService__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./core/services/store/StoreManagementService */ "A/Pf");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_StoreManagementService", function() { return _core_services_store_StoreManagementService__WEBPACK_IMPORTED_MODULE_13__["default"]; });

/* harmony import */ var _core_BasePageApplication__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./core/BasePageApplication */ "FW/H");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_BasePageApplication", function() { return _core_BasePageApplication__WEBPACK_IMPORTED_MODULE_14__["default"]; });

/* harmony import */ var _core_PageApplicationContext__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./core/PageApplicationContext */ "X36I");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_PageApplicationContext", function() { return _core_PageApplicationContext__WEBPACK_IMPORTED_MODULE_15__["default"]; });

/* harmony import */ var _core_utilities_Killswitches__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./core/utilities/Killswitches */ "XjSx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_Killswitches", function() { return _core_utilities_Killswitches__WEBPACK_IMPORTED_MODULE_16__["default"]; });

/* harmony import */ var _core_utilities_StoreUtility__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./core/utilities/StoreUtility */ "XF7y");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_StoreUtility", function() { return _core_utilities_StoreUtility__WEBPACK_IMPORTED_MODULE_17__["default"]; });

/* harmony import */ var _core_utilities_TeamsUtilities__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./core/utilities/TeamsUtilities */ "6RRI");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_TeamsUtilities", function() { return _core_utilities_TeamsUtilities__WEBPACK_IMPORTED_MODULE_18__["default"]; });

/* harmony import */ var _core_utilities_NavigationUtility__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./core/utilities/NavigationUtility */ "c4nI");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_NavigationUtility", function() { return _core_utilities_NavigationUtility__WEBPACK_IMPORTED_MODULE_19__["default"]; });

/* harmony import */ var _core_utilities_WebViewCommunicatorServiceFactory__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./core/utilities/WebViewCommunicatorServiceFactory */ "V2ch");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_WebViewCommunicatorServiceFactory", function() { return _core_utilities_WebViewCommunicatorServiceFactory__WEBPACK_IMPORTED_MODULE_20__["default"]; });

/* harmony import */ var _core_actions_SiteChromeActionCreator__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./core/actions/SiteChromeActionCreator */ "IDCp");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_SiteChromeActionCreator", function() { return _core_actions_SiteChromeActionCreator__WEBPACK_IMPORTED_MODULE_21__["default"]; });

/* harmony import */ var _core_actions_PostRenderActionCreator__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./core/actions/PostRenderActionCreator */ "vuTp");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_PostRenderActionCreator", function() { return _core_actions_PostRenderActionCreator__WEBPACK_IMPORTED_MODULE_22__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_PostRenderPriority", function() { return _core_actions_PostRenderActionCreator__WEBPACK_IMPORTED_MODULE_22__["PostRenderPriority"]; });

/* harmony import */ var _ms_odsp_datasources_lib_DesignPackage__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @ms/odsp-datasources/lib/DesignPackage */ "cGzF");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "DesignPackageProvider", function() { return _ms_odsp_datasources_lib_DesignPackage__WEBPACK_IMPORTED_MODULE_23__; });
/* harmony import */ var _core_components_chrome_PageLayoutScrollRegion_PageLayoutScrollRegion__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./core/components/chrome/PageLayoutScrollRegion/PageLayoutScrollRegion */ "Iycx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_PageLayoutScrollRegion", function() { return _core_components_chrome_PageLayoutScrollRegion_PageLayoutScrollRegion__WEBPACK_IMPORTED_MODULE_24__["default"]; });

/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! redux */ "TgFA");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createStore", function() { return redux__WEBPACK_IMPORTED_MODULE_25__["createStore"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "combineReducers", function() { return redux__WEBPACK_IMPORTED_MODULE_25__["combineReducers"]; });

/* harmony import */ var react_router_Route__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! react-router/Route */ "g0SQ");
/* harmony import */ var react_router_Route__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(react_router_Route__WEBPACK_IMPORTED_MODULE_26__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "Route", function() { return react_router_Route__WEBPACK_IMPORTED_MODULE_26___default.a; });
/* harmony import */ var react_router_Switch__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! react-router/Switch */ "4UEl");
/* harmony import */ var react_router_Switch__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(react_router_Switch__WEBPACK_IMPORTED_MODULE_27__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "Switch", function() { return react_router_Switch__WEBPACK_IMPORTED_MODULE_27___default.a; });
/* harmony import */ var react_router_Router__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! react-router/Router */ "vZVg");
/* harmony import */ var react_router_Router__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(react_router_Router__WEBPACK_IMPORTED_MODULE_28__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "Router", function() { return react_router_Router__WEBPACK_IMPORTED_MODULE_28___default.a; });
/**
 * SharePoint Pages Core Framework support for building and extending client-side page applications.
 *
 * @packagedocumentation
 */
// Components













// Services



// Utilities





// action createors





// redux

// react-router





/***/ }),

/***/ "noIK":
/*!*******************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/lodash-es@4.17.20/node_modules/lodash-es/_objectToString.js ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

/* harmony default export */ __webpack_exports__["default"] = (objectToString);


/***/ }),

/***/ "o7Lc":
/*!*************************************************************************************!*\
  !*** ./lib/core/components/chrome/MobileUpsellButton/DeferredMobileUpsellButton.js ***!
  \*************************************************************************************/
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



var DeferredMobileUpsellButton = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(DeferredMobileUpsellButton, _super);
    function DeferredMobileUpsellButton(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {};
        return _this;
    }
    DeferredMobileUpsellButton.prototype.componentDidMount = function () {
        var _this = this;
        __webpack_require__.e(/*! import() | spcx-mobileupsellview */ "spcx-mobileupsellview").then(__webpack_require__.bind(null, /*! ../../../../chunks/spcx-mobileUpsellView/MobileUpsellView */ "xy68"))
            .then(function (mobileUpsellViewModule) { return mobileUpsellViewModule.default; })
            .then(function (component) {
            _this.setState({ component: component });
        })
            .catch(function (error) {
            _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__["_TraceLogger"].logError(DeferredMobileUpsellButton._logSource, error);
        });
    };
    DeferredMobileUpsellButton.prototype.render = function () {
        return !!this.state.component ? react__WEBPACK_IMPORTED_MODULE_1__["createElement"](this.state.component, {}) : null; // tslint:disable-line:no-null-keyword
    };
    DeferredMobileUpsellButton._logSource = _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__["_LogSource"].create('DeferredMobileUpsellButton');
    return DeferredMobileUpsellButton;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));
/* harmony default export */ __webpack_exports__["default"] = (DeferredMobileUpsellButton);


/***/ }),

/***/ "oAK6":
/*!**********************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/redux@3.6.0/node_modules/redux/es/utils/warning.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return warning; });
/**
 * Prints a warning in the console if it exists.
 *
 * @param {String} message The warning message.
 * @returns {void}
 */
function warning(message) {
  /* eslint-disable no-console */
  if (typeof console !== 'undefined' && typeof console.error === 'function') {
    console.error(message);
  }
  /* eslint-enable no-console */
  try {
    // This error was thrown as a convenience so that if you enable
    // "break on all exceptions" in your console,
    // it would pause the execution at this line.
    throw new Error(message);
    /* eslint-disable no-empty */
  } catch (e) {}
  /* eslint-enable no-empty */
}

/***/ }),

/***/ "oWsq":
/*!*******************************************************************************!*\
  !*** ./lib/core/components/webViewCommunicator/HostCommunicationProcessor.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/office-ui-fabric-react-bundle */ "KL1q");
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @microsoft/sp-diagnostics */ "ut3N");
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _services_webViewCommunicatorService_WebViewCommunicatorService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/webViewCommunicatorService/WebViewCommunicatorService */ "ytyC");
/**
 * @copyright Microsoft Corporation. All rights reserved.
 */





/**
 * @sealed
 * @internal
 *
 * Used by the LinkInterceptor to pass messages to the WebViewCommunicator.
 * Uses the HostMessageConverter passed in through the route config to transpose messages.
 */
var HostCommunicationProcessor = /** @class */ (function () {
    function HostCommunicationProcessor(serviceScope, converter) {
        var _this = this;
        this.componentId = 'HostCommunicationProcessor';
        this.instanceId = 'singleton';
        this.isDisposed = false;
        this._loadedWebViewCommunicator = false;
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__["Validate"].isNotNullOrUndefined(serviceScope, 'ServiceScope');
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__["Validate"].isNotNullOrUndefined(converter, 'IHostMessageConverter');
        this._converter = converter;
        this._webViewCommunicator = new Promise(function (resolve) { return (_this._resolveWebViewCommunicator = resolve); });
        serviceScope.whenFinished(function () {
            serviceScope
                .consume(_services_webViewCommunicatorService_WebViewCommunicatorService__WEBPACK_IMPORTED_MODULE_4__["default"].serviceKey)
                .communicator.then(function (communicator) {
                _this._resolveWebViewCommunicator(communicator);
                _this._loadedWebViewCommunicator = true;
                communicator.spEvent.add(_this, _this._onWebViewCommunicationEvent);
            })
                .catch(function (error) {
                _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_3__["_TraceLogger"].logError(HostCommunicationProcessor._logSource, error);
            });
        });
    }
    HostCommunicationProcessor.prototype.dispose = function () {
        var _this = this;
        this.isDisposed = true;
        if (this._loadedWebViewCommunicator) {
            this._webViewCommunicator.then(function (communicator) { return communicator.spEvent.remove(_this, _this._onWebViewCommunicationEvent); }, function (_) {
                /* no-op */
            });
        }
    };
    /**
     * Signals an action to the host application.
     * @param payload contents of the action to send
     * @returns a promise indicating if the action was intercepted
     */
    HostCommunicationProcessor.prototype.sendAction = function (payload) {
        var _this = this;
        if (!this._webViewCommunicator) {
            _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_3__["_TraceLogger"].logError(HostCommunicationProcessor._logSource, new Error('attempted to send action without communicator'));
        }
        var actionPromise = new Promise(function (resolve) { return (_this._resolveAction = resolve); });
        return this._webViewCommunicator.then(function (communicator) {
            return communicator
                .sendMessage(_this._converter.actionPayloadConverter(payload))
                .then(function () { return actionPromise; })
                .catch(function (error) {
                delete _this._resolveAction;
                return Promise.reject(error);
            });
        });
    };
    /**
     * Signals a navigation to the host application.
     * @param payload contents of the action to send
     * @returns a promise indicating if the navigation was intercepted
     */
    HostCommunicationProcessor.prototype.sendNavigate = function (url, payload) {
        var _this = this;
        if (!this._webViewCommunicator) {
            _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_3__["_TraceLogger"].logError(HostCommunicationProcessor._logSource, new Error('attempted to send navigate without communicator'));
        }
        var navigationPromise = new Promise(function (resolve) { return (_this._resolveNavigate = resolve); });
        return this._webViewCommunicator.then(function (communicator) {
            return communicator
                .sendMessage(_this._converter.navigatePayloadConverter(url, payload))
                .then(function () { return navigationPromise; })
                .catch(function (error) {
                delete _this._resolveNavigate;
                return Promise.reject(error);
            });
        });
    };
    HostCommunicationProcessor.prototype._onWebViewCommunicationEvent = function (payload) {
        if (this._converter.hostMessageIsAction(payload)) {
            if (this._resolveAction) {
                this._resolveAction(this._converter.actionIntercepted(payload));
                delete this._resolveAction;
            }
            else {
                _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_3__["_TraceLogger"].logError(HostCommunicationProcessor._logSource, new Error('Received host sitePageUserAction message but no promise is set'));
            }
        }
        else if (this._converter.hostMessageIsNavigation(payload)) {
            if (this._resolveNavigate) {
                this._resolveNavigate(this._converter.navigationIntercepted(payload));
                delete this._resolveNavigate;
            }
            else {
                _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_3__["_TraceLogger"].logError(HostCommunicationProcessor._logSource, new Error('Received host sitePageUserAction message but no promise is set'));
            }
        }
    };
    HostCommunicationProcessor._logSource = _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_3__["_LogSource"].create('HostCommunicationProcessor');
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_1__["autobind"]
    ], HostCommunicationProcessor.prototype, "_onWebViewCommunicationEvent", null);
    return HostCommunicationProcessor;
}());
/* harmony default export */ __webpack_exports__["default"] = (HostCommunicationProcessor);


/***/ }),

/***/ "olRP":
/*!****************************************************!*\
  !*** ./lib/core/components/router/AsyncHistory.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Async history provider
 */
var AsyncHistory = /** @class */ (function () {
    function AsyncHistory() {
        var _this = this;
        this._historyPromise = new Promise(function (resolve) { return (_this._resolveHistory = resolve); });
    }
    /**
     * Get a history promise.
     */
    AsyncHistory.prototype.getHistory = function () {
        return AsyncHistory.current ? Promise.resolve(AsyncHistory.current) : this._historyPromise;
    };
    /**
     * Set current history object.
     */
    AsyncHistory.prototype.setHistory = function (history) {
        if (!AsyncHistory.current) {
            this._resolveHistory(history);
        }
        AsyncHistory.current = history;
    };
    return AsyncHistory;
}());
// tslint:disable-next-line:export-name
/* harmony default export */ __webpack_exports__["default"] = (new AsyncHistory());


/***/ }),

/***/ "q3o8":
/*!****************************************!*\
  !*** ./lib/loaders/spcx-siteFooter.js ***!
  \****************************************/
/*! exports provided: compositeFooterLoader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compositeFooterLoader", function() { return compositeFooterLoader; });
// tslint:disable-next-line:export-name
function compositeFooterLoader() {
    return __webpack_require__.e(/*! import() | spcx-sitefooter */ "vendors~spcx-sitefooter").then(__webpack_require__.bind(null, /*! @ms/odsp-shared-react/lib/components/CompositeFooter/CompositeFooter */ "wIFa")).then(function (module) { return module.CompositeFooter; });
}


/***/ }),

/***/ "sQ8p":
/*!******************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/history@4.7.2/node_modules/history/es/index.js ***!
  \******************************************************************************************************/
/*! exports provided: createBrowserHistory, createHashHistory, createMemoryHistory, createLocation, locationsAreEqual, parsePath, createPath */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createBrowserHistory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createBrowserHistory */ "ZOVz");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createBrowserHistory", function() { return _createBrowserHistory__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _createHashHistory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createHashHistory */ "Q/MY");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createHashHistory", function() { return _createHashHistory__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _createMemoryHistory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createMemoryHistory */ "Plin");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createMemoryHistory", function() { return _createMemoryHistory__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _LocationUtils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./LocationUtils */ "9OPX");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createLocation", function() { return _LocationUtils__WEBPACK_IMPORTED_MODULE_3__["createLocation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "locationsAreEqual", function() { return _LocationUtils__WEBPACK_IMPORTED_MODULE_3__["locationsAreEqual"]; });

/* harmony import */ var _PathUtils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PathUtils */ "K/iH");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parsePath", function() { return _PathUtils__WEBPACK_IMPORTED_MODULE_4__["parsePath"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createPath", function() { return _PathUtils__WEBPACK_IMPORTED_MODULE_4__["createPath"]; });











/***/ }),

/***/ "sXoH":
/*!*************************************************!*\
  !*** ./lib/core/utilities/SitePageUtilities.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Killswitches__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Killswitches */ "XjSx");
/**
 * @copyright Microsoft Corporation. All rights reserved.
 */

var SitePageUtilities = /** @class */ (function () {
    function SitePageUtilities() {
    }
    SitePageUtilities.isSitePagesRoute = function (href) {
        if ((href = href.split('#', 1)[0].split('?', 1)[0].toUpperCase()) === '/' || !href) {
            return true;
        }
        if (href.indexOf('/_LAYOUTS/15/') > -1 || href.indexOf('/SITEPAGES/FORMS/') > -1) {
            return false;
        }
        // match: /SitePages/*.aspx at any level of depth, except for SitePages/Forms/
        var segments = href.split('/').filter(Boolean);
        var len = segments.length, aspxIndex = segments[len - 1].lastIndexOf('.ASPX');
        if (aspxIndex > 0 && aspxIndex === segments[len - 1].length - 5) {
            return segments.indexOf('SITEPAGES') !== -1;
        }
        // don't match paths that possibly end with a file extension
        if (segments[len - 1].indexOf('.') !== -1) {
            return false;
        }
        /**
         * For cases where we are navigating to a list/library, but our url is relative.
         * In such cases, we should check if the containing folder name is 'lists' or 'forms'.
         * If so, then return 'false' and not miscategorize the url as a site-page.
         *
         * For instance, a relative-url like https://microsoft.sharepoint-df.com/teams/sid_team1/Lists/myList/ maps
         * to a list: https://microsoft.sharepoint-df.com/teams/sid_team1/Lists/myList/AllItems.aspx
         */
        if (!_Killswitches__WEBPACK_IMPORTED_MODULE_0__["default"].isRelLinkToListKSActivated() && len >= 2 && segments[len - 2] === 'LISTS') {
            return false;
        }
        /* TODO: VSO:353891 - Support dynamic managed paths in .aspx page route matching */
        var managedPaths = ['SITES', 'TEAMS'];
        // match: a managed path, followed by a site name
        for (var i = 0; i < managedPaths.length; i++) {
            if (segments[0] === managedPaths[i]) {
                return true;
            }
        }
        return false;
    };
    return SitePageUtilities;
}());
/* harmony default export */ __webpack_exports__["default"] = (SitePageUtilities);


/***/ }),

/***/ "skTp":
/*!***************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/redux@3.6.0/node_modules/redux/es/bindActionCreators.js ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return bindActionCreators; });
function bindActionCreator(actionCreator, dispatch) {
  return function () {
    return dispatch(actionCreator.apply(undefined, arguments));
  };
}

/**
 * Turns an object whose values are action creators, into an object with the
 * same keys, but with every function wrapped into a `dispatch` call so they
 * may be invoked directly. This is just a convenience method, as you can call
 * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.
 *
 * For convenience, you can also pass a single function as the first argument,
 * and get a function in return.
 *
 * @param {Function|Object} actionCreators An object whose values are action
 * creator functions. One handy way to obtain it is to use ES6 `import * as`
 * syntax. You may also pass a single function.
 *
 * @param {Function} dispatch The `dispatch` function available on your Redux
 * store.
 *
 * @returns {Function|Object} The object mimicking the original object, but with
 * every action creator wrapped into the `dispatch` call. If you passed a
 * function as `actionCreators`, the return value will also be a single
 * function.
 */
function bindActionCreators(actionCreators, dispatch) {
  if (typeof actionCreators === 'function') {
    return bindActionCreator(actionCreators, dispatch);
  }

  if (typeof actionCreators !== 'object' || actionCreators === null) {
    throw new Error('bindActionCreators expected an object or a function, instead received ' + (actionCreators === null ? 'null' : typeof actionCreators) + '. ' + 'Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
  }

  var keys = Object.keys(actionCreators);
  var boundActionCreators = {};
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    var actionCreator = actionCreators[key];
    if (typeof actionCreator === 'function') {
      boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
    }
  }
  return boundActionCreators;
}

/***/ }),

/***/ "tDL/":
/*!******************************************************!*\
  !*** ./lib/core/services/render/RenderingService.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _BasePageApplicationService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../BasePageApplicationService */ "ITs/");
/**
 * @copyright Microsoft Corporation. All rights reserved.
 */



/**
 * Represents a service that serves rendering capabilities
 * for page-based applications.
 *
 * @internal
 */
var RenderingService = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(RenderingService, _super);
    /**
     * Initializes a new instance of the Rendering Service.
     * @param serviceScope - Represents the service scope
     */
    function RenderingService(serviceScope) {
        return _super.call(this, serviceScope, {
            serviceKey: RenderingService.serviceKey,
            isShared: false
        }) || this;
    }
    /**
     * Creates a component for rendering a page based application
     * @param config - Represents the rendering config.
     * @param renderFactory - Represents an render factory.
     */
    RenderingService.prototype.createPageRenderer = function (config, renderFactory) {
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["Validate"].isNotNullOrUndefined(config, 'config');
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["Validate"].isNotNullOrUndefined(renderFactory, 'renderFactory');
        _super.prototype.createServiceComponent.call(this, config, renderFactory);
    };
    Object.defineProperty(RenderingService.prototype, "renderer", {
        /**
         * Gets the rendering component associated with the service
         */
        get: function () {
            return this.serviceComponent;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Gets the service key.
     */
    RenderingService.serviceKey = _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["ServiceKey"].create("sp-pages-core:RenderService" /* RenderService */, RenderingService);
    return RenderingService;
}(_BasePageApplicationService__WEBPACK_IMPORTED_MODULE_2__["default"]));
/* harmony default export */ __webpack_exports__["default"] = (RenderingService);


/***/ }),

/***/ "taRQ":
/*!*******************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/react-is@16.13.1/node_modules/react-is/index.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "uHDD");
}


/***/ }),

/***/ "tj0g":
/*!*****************************************************************!*\
  !*** ./lib/core/components/router/BasePageApplicationRouter.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/**
 * @copyright Microsoft Corporation. All rights reserved.
 */


/**
 * Class for all custom router implementations to extend.
 *
 * @internal
 */
var BasePageApplicationRouter = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(BasePageApplicationRouter, _super);
    function BasePageApplicationRouter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return BasePageApplicationRouter;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));
/* harmony default export */ __webpack_exports__["default"] = (BasePageApplicationRouter);


/***/ }),

/***/ "txfU":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-shared-react@47.12.13_128c93e743f3bc9a86e8e34a0882fce7/node_modules/@ms/odsp-shared-react/lib/utilities/shyConductor/ShyConductorLoader.js ***!
  \***********************************************************************************************************************************************************************************************************/
/*! exports provided: ShyConductorGlobalName, getShyConductor, tryGetGlobalShyConductor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShyConductorGlobalName", function() { return ShyConductorGlobalName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getShyConductor", function() { return getShyConductor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tryGetGlobalShyConductor", function() { return tryGetGlobalShyConductor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);

var ShyConductorGlobalName = '__shyConductor';
/**
 * Returns the singleton ShyConductor, and loads it if it doesn't exist yet.
 * Usage:
 * `this._shyConductor = await getShyConductor();` or `getShyConductor().then()`
 */
function getShyConductor() {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!tryGetGlobalShyConductor()) return [3 /*break*/, 1];
                    return [2 /*return*/, tryGetGlobalShyConductor()];
                case 1: return [4 /*yield*/, __webpack_require__.e(/*! import() | shared-react-shyconductor */ "vendors~shared-react-shyconductor").then(__webpack_require__.bind(null, /*! ./ShyConductor */ "/kd6"))];
                case 2: return [2 /*return*/, (_a.sent()).default];
            }
        });
    });
}
/** Only attempt to get the singleton ShyConductor instance, and don't load it if it doesn't exist. */
function tryGetGlobalShyConductor() {
    return window[ShyConductorGlobalName];
}
//# sourceMappingURL=ShyConductorLoader.js.map

/***/ }),

/***/ "uHDD":
/*!**************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/react-is@16.13.1/node_modules/react-is/cjs/react-is.development.js ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}


/***/ }),

/***/ "uOC2":
/*!*******************************************************************!*\
  !*** ./lib/core/components/chrome/SiteLeftNav/LeftNav.module.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../../../../../common/temp/node_modules/.pnpm/css-loader@3.2.1_webpack@4.44.2/node_modules/css-loader/dist/cjs.js!../../../../../../../common/temp/node_modules/.pnpm/postcss-loader@3.0.0/node_modules/postcss-loader/src??postcss!./LeftNav.module.css */ "ltct");
var loader = __webpack_require__(/*! @microsoft/load-themed-styles */ "jOlS");

if(typeof content === "string") content = [[module.i, content]];

// add the styles to the DOM
for (var i = 0; i < content.length; i++) loader.loadStyles(content[i][1], true);

if(content.locals) module.exports = content.locals;

/***/ }),

/***/ "uj7c":
/*!******************************************************************************!*\
  !*** ./lib/core/components/webViewCommunicator/webViewCommunicatorLoader.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return webViewCommunicatorLoader; });
// tslint:disable-next-line:export-name
function webViewCommunicatorLoader() {
    return Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./WebViewCommunicator */ "V/8F")).then(function (module) { return module.default; });
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

/***/ "vZVg":
/*!***************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/react-router@4.2.0_react@16.9.0/node_modules/react-router/Router.js ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _warning = __webpack_require__(/*! warning */ "4qLk");

var _warning2 = _interopRequireDefault(_warning);

var _invariant = __webpack_require__(/*! invariant */ "EMEJ");

var _invariant2 = _interopRequireDefault(_invariant);

var _react = __webpack_require__(/*! react */ "cDcd");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "KObg");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * The public API for putting history on context.
 */
var Router = function (_React$Component) {
  _inherits(Router, _React$Component);

  function Router() {
    var _temp, _this, _ret;

    _classCallCheck(this, Router);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
      match: _this.computeMatch(_this.props.history.location.pathname)
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  Router.prototype.getChildContext = function getChildContext() {
    return {
      router: _extends({}, this.context.router, {
        history: this.props.history,
        route: {
          location: this.props.history.location,
          match: this.state.match
        }
      })
    };
  };

  Router.prototype.computeMatch = function computeMatch(pathname) {
    return {
      path: '/',
      url: '/',
      params: {},
      isExact: pathname === '/'
    };
  };

  Router.prototype.componentWillMount = function componentWillMount() {
    var _this2 = this;

    var _props = this.props,
        children = _props.children,
        history = _props.history;


    (0, _invariant2.default)(children == null || _react2.default.Children.count(children) === 1, 'A <Router> may have only one child element');

    // Do this here so we can setState when a <Redirect> changes the
    // location in componentWillMount. This happens e.g. when doing
    // server rendering using a <StaticRouter>.
    this.unlisten = history.listen(function () {
      _this2.setState({
        match: _this2.computeMatch(history.location.pathname)
      });
    });
  };

  Router.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    (0, _warning2.default)(this.props.history === nextProps.history, 'You cannot change <Router history>');
  };

  Router.prototype.componentWillUnmount = function componentWillUnmount() {
    this.unlisten();
  };

  Router.prototype.render = function render() {
    var children = this.props.children;

    return children ? _react2.default.Children.only(children) : null;
  };

  return Router;
}(_react2.default.Component);

Router.propTypes = {
  history: _propTypes2.default.object.isRequired,
  children: _propTypes2.default.node
};
Router.contextTypes = {
  router: _propTypes2.default.object
};
Router.childContextTypes = {
  router: _propTypes2.default.object.isRequired
};
exports.default = Router;

/***/ }),

/***/ "vo05":
/*!*******************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-utilities@29.7.9_5d977624104b06c7bcaa2de974ff51f1/node_modules/@ms/odsp-utilities/lib/guid/Guid.js ***!
  \*******************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ms/odsp-core-bundle */ "K9kD");
/* harmony import */ var _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__["Guid"]; });

// Loading @ms/odsp-utilities/./lib/guid/Guid.js



/***/ }),

/***/ "vuTp":
/*!*****************************************************!*\
  !*** ./lib/core/actions/PostRenderActionCreator.js ***!
  \*****************************************************/
/*! exports provided: PostRenderPriority, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostRenderPriority", function() { return PostRenderPriority; });
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/office-ui-fabric-react-bundle */ "KL1q");
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utilities_StoreUtility__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utilities/StoreUtility */ "XF7y");
/**
 * @copyright (c) Microsoft Corporation.  All rights reserved.
 */


/**
 * @internal
 * Post render priority levels.
 * Applications should raise them high to low meaning
 * high-priority post-render items process first.
 */
// tslint:disable-next-line:typedef variable-name
var PostRenderPriority = {
    High: 1,
    Medium: 2,
    Low: 3
};
/**
 * @internal
 * Contains all actions related to post render phases
 */
var PostRenderActionCreator = /** @class */ (function () {
    function PostRenderActionCreator() {
    }
    /**
     * Raise a post render action
     * @param serviceScope - the application ServiceScope
     * @param priority - the post render priority, defaults to High in the reducer
     */
    PostRenderActionCreator.raiseAction = function (serviceScope, priority) {
        new _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__["Async"]().setTimeout(function () {
            _utilities_StoreUtility__WEBPACK_IMPORTED_MODULE_1__["default"].getStore(serviceScope).dispatch({
                type: "POST_RENDER" /* POST_RENDER */,
                payload: priority
            });
        }, 0);
    };
    /**
     * Resets the post render between application navigations to ensure
     * post render operations are not performed to early during in-place
     * navigation.
     * @param serviceScope - the application ServiceScope
     */
    PostRenderActionCreator.reset = function (serviceScope) {
        new _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__["Async"]().setTimeout(function () {
            _utilities_StoreUtility__WEBPACK_IMPORTED_MODULE_1__["default"].getStore(serviceScope).dispatch({
                type: "RESET_POST_RENDER" /* RESET_POST_RENDER */
            });
        }, 0);
    };
    return PostRenderActionCreator;
}());
/* harmony default export */ __webpack_exports__["default"] = (PostRenderActionCreator);


/***/ }),

/***/ "wcgA":
/*!************************************************************************************!*\
  !*** ../sp-component-utilities/lib/navigationUtilities/NavigationNodeUtilities.js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ms_odsp_utilities_lib_uri_Uri__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ms/odsp-utilities/lib/uri/Uri */ "I5DX");
/* harmony import */ var _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ms/sp-telemetry */ "2q6Q");
/* harmony import */ var _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_1__);
/**
 * @copyright (c) Microsoft Corporation.  All rights reserved.
 */


var NavigationNodeUtilities = /** @class */ (function () {
    function NavigationNodeUtilities() {
    }
    NavigationNodeUtilities.transformNavNodesToLinks = function (nodes, level) {
        if (level < 0) {
            return [];
        }
        nodes = nodes.filter(function (node) { return node.Id !== Number("1033" /* quickLaunchRecent */); });
        return nodes.map(function (node) {
            return {
                name: node.Title,
                key: node.Id.toString(),
                url: node.Url,
                links: node.Children && node.Children.length
                    ? NavigationNodeUtilities.transformNavNodesToLinks(node.Children, level + 1)
                    : undefined,
                audiences: node.AudienceIds,
                onClick: window.location.href.toLowerCase().match('_layouts/15/sharepoint.aspx')
                    ? NavigationNodeUtilities.logStartPageEngagement
                    : undefined
            };
        });
    };
    NavigationNodeUtilities.shouldLinkOpenInSameWindow = function (url) {
        if (!url) {
            return false;
        }
        var target = new _ms_odsp_utilities_lib_uri_Uri__WEBPACK_IMPORTED_MODULE_0__["default"](url);
        var targetOrigin = target.getScheme() + '://' + target.getAuthority();
        var pathUrl = target.getScheme() === '' && target.getAuthority() === '';
        return ((pathUrl || targetOrigin === window.location.origin) &&
            url.indexOf('/_layouts/15/groupstatus.aspx?') === -1);
    };
    NavigationNodeUtilities.logStartPageEngagement = function (ev, item) {
        _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_1__["_EngagementLogger"].logEvent('SPStartPage.NavigationNode.Click');
    };
    return NavigationNodeUtilities;
}());
/* harmony default export */ __webpack_exports__["default"] = (NavigationNodeUtilities);


/***/ }),

/***/ "wrw2":
/*!***********************************************!*\
  !*** external "@ms/uifabric-variants-bundle" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_wrw2__;

/***/ }),

/***/ "xYco":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-datasources@45.13.10_e509c819ab980023b76e5746ec0fc9e2/node_modules/@ms/odsp-datasources/lib/dataSources/web/WebTemplateType.js ***!
  \***********************************************************************************************************************************************************************************************/
/*! exports provided: WebTemplateType, isTeamSiteLike, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _interfaces_WebTemplateType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../interfaces/WebTemplateType */ "DRdk");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WebTemplateType", function() { return _interfaces_WebTemplateType__WEBPACK_IMPORTED_MODULE_0__["WebTemplateType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isTeamSiteLike", function() { return _interfaces_WebTemplateType__WEBPACK_IMPORTED_MODULE_0__["isTeamSiteLike"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _interfaces_WebTemplateType__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/**
 * DO NOT USE - moved to interfaces for better import location
 * @deprecated as of version 12.15.0
 */


//# sourceMappingURL=WebTemplateType.js.map

/***/ }),

/***/ "y88i":
/*!********************************************!*\
  !*** external "@ms/odsp-utilities-bundle" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_y88i__;

/***/ }),

/***/ "yCLn":
/*!***************************************!*\
  !*** ./lib/core/utilities/Flights.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__);
/**
 * @copyright (c) Microsoft Corporation.  All rights reserved.
 */


/**
 * Flight checks
 * @internal
 */
var Flights = /** @class */ (function () {
    function Flights() {
    }
    Flights.isDocLibTransitionEnabled = function () {
        return (_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPFlight"].isEnabled(1484 /* SPListLightSpeed */) &&
            _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPFlight"].isEnabled(1589 /* SPListHostTransition */) &&
            _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPFlight"].isEnabled(125 /* RequireJS */) &&
            _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPFlight"].isEnabled(1240 /* SPPagesSuiteSearchBox */));
    };
    Flights.isTeamsCompanyPortalFeatureEnabled = function () {
        return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPFlight"].isEnabled(1801 /* Teams Comapny Portal Site Header */);
    };
    Object.defineProperty(Flights, "isHydrationEnabled", {
        get: function () {
            return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPFlight"].isEnabled(1569 /* SPPagesHydration */);
        },
        enumerable: true,
        configurable: true
    });
    Flights.isSuiteNavThinHeaderEnabled = function () {
        return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPFlight"].isEnabled(621 /* EnableThinSuiteNav */);
    };
    Flights.isServiceWorkerEnabled = function () {
        return (_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPFlight"].isEnabled(1965 /* ServiceWorkerSPHomeController */) ||
            _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPFlight"].isEnabled(1966 /* ServiceWorkerPagesController */));
    };
    Flights.isMegaFooterEnabled = function () {
        return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPFlight"].isEnabled(1557 /* MegaFooter */);
    };
    Flights.isExtendedHeaderLayoutEnabled = function () {
        return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPFlight"].isEnabled(672 /* EnableExtendedSiteHeader */);
    };
    Flights.isGlobalNavEnabled = function () {
        return (_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPFlight"].isEnabled(1399 /* SPAppBarClient */) || _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPExperiment"].getVariantAndLogExposure(90077) === 1);
    };
    return Flights;
}());
/* harmony default export */ __webpack_exports__["default"] = (Flights);


/***/ }),

/***/ "ytfe":
/*!******************************!*\
  !*** external "@ms/sp-a11y" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_ytfe__;

/***/ }),

/***/ "ytyC":
/*!************************************************************************************!*\
  !*** ./lib/core/services/webViewCommunicatorService/WebViewCommunicatorService.js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _BasePageApplicationService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../BasePageApplicationService */ "ITs/");
/**
 * @copyright Microsoft Corporation. All rights reserved.
 */



/**
 * Represents a service for web view communication
 * for page-based applications.
 *
 * @internal
 */
var WebViewCommunicatorService = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(WebViewCommunicatorService, _super);
    /**
     * Initializes a new instance of the Web View Communicator Service.
     * @param serviceScope - Represents the service scope
     */
    function WebViewCommunicatorService(serviceScope) {
        return _super.call(this, serviceScope, {
            serviceKey: WebViewCommunicatorService.serviceKey,
            isShared: true
        }) || this;
    }
    /**
     * Creates a new web view communicator.
     * @param factory - Factory for creating a web view communicator
     */
    WebViewCommunicatorService.prototype.createCommunicator = function (factory) {
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["Validate"].isNotNullOrUndefined(factory, 'factory');
        _super.prototype.createServiceComponent.call(this, {}, factory);
    };
    Object.defineProperty(WebViewCommunicatorService.prototype, "communicator", {
        /**
         * Gets the web view communicator associated with the service.
         */
        get: function () {
            return this.serviceComponent;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * {@inheritdoc @microsoft/sp-core-library/IDisposable.dispose}
     */
    WebViewCommunicatorService.prototype.onDispose = function () {
        if (this.communicator) {
            this.communicator.then(function (communicator) { return communicator.dispose(); }, function (_) {
                /* no-op */
            });
        }
    };
    /**
     * Gets the service key.
     */
    WebViewCommunicatorService.serviceKey = _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["ServiceKey"].create("sp-pages-core:WebViewCommunicatorService" /* WebViewCommunicatorService */, WebViewCommunicatorService);
    return WebViewCommunicatorService;
}(_BasePageApplicationService__WEBPACK_IMPORTED_MODULE_2__["default"]));
/* harmony default export */ __webpack_exports__["default"] = (WebViewCommunicatorService);


/***/ }),

/***/ "zLLz":
/*!****************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/redux@3.6.0/node_modules/redux/es/compose.js ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return compose; });
/**
 * Composes single-argument functions from right to left. The rightmost
 * function can take multiple arguments as it provides the signature for
 * the resulting composite function.
 *
 * @param {...Function} funcs The functions to compose.
 * @returns {Function} A function obtained by composing the argument functions
 * from right to left. For example, compose(f, g, h) is identical to doing
 * (...args) => f(g(h(...args))).
 */

function compose() {
  for (var _len = arguments.length, funcs = Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }

  if (funcs.length === 0) {
    return function (arg) {
      return arg;
    };
  }

  if (funcs.length === 1) {
    return funcs[0];
  }

  var last = funcs[funcs.length - 1];
  var rest = funcs.slice(0, -1);
  return function () {
    return rest.reduceRight(function (composed, f) {
      return f(composed);
    }, last.apply(undefined, arguments));
  };
}

/***/ })

/******/ })});;
//# sourceMappingURL=sp-pages-core_[locale].js.map