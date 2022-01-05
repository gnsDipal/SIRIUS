define("1e2cdec9-1360-4295-b73c-98d6f51866d5_0.1.0", ["tslib","@ms/sp-telemetry","@microsoft/sp-loader","@ms/odsp-core-bundle","@microsoft/office-ui-fabric-react-bundle","@microsoft/sp-lodash-subset","@microsoft/sp-core-library","@microsoft/sp-page-context","react","@ms/uifabric-styling-bundle","@ms/sp-component-utilities","@microsoft/load-themed-styles","@microsoft/sp-diagnostics","@ms/odsp-utilities-bundle"], function(__WEBPACK_EXTERNAL_MODULE__17wl__, __WEBPACK_EXTERNAL_MODULE__2q6Q__, __WEBPACK_EXTERNAL_MODULE_I6O9__, __WEBPACK_EXTERNAL_MODULE_K9kD__, __WEBPACK_EXTERNAL_MODULE_KL1q__, __WEBPACK_EXTERNAL_MODULE_Pk8u__, __WEBPACK_EXTERNAL_MODULE_UWqr__, __WEBPACK_EXTERNAL_MODULE_X_PM__, __WEBPACK_EXTERNAL_MODULE_cDcd__, __WEBPACK_EXTERNAL_MODULE_fglE__, __WEBPACK_EXTERNAL_MODULE_hiL___, __WEBPACK_EXTERNAL_MODULE_jOlS__, __WEBPACK_EXTERNAL_MODULE_ut3N__, __WEBPACK_EXTERNAL_MODULE_y88i__) { return /******/ (function(modules) { // webpackBootstrap
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
/******/ 		var component_1 = { // @microsoft/sp-http
/******/ 			i: "c07208f0-ea3b-4c1a-9965-ac1b825211a6",
/******/ 			v: "1.12.1",
/******/ 			m: "vlQI"
/******/ 		};
/******/
/******/ 		return {0: [component_0],"sp-pages-panels": [component_0],"spcx-panels": [component_0, component_1]}[chunkId] || [];
/******/ 	}
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"sp-pages-preloads": 0
/******/ 	};
/******/
/******/
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "chunk." + ({"vendors~audience-picker-chunk~sp-pages-pa~f202f0ab":"vendors~audience-picker-chunk~sp-pages-pa~f202f0ab","vendors~editnavchunk~sp-pages-panels~spcx~63fbeced":"vendors~editnavchunk~sp-pages-panels~spcx~63fbeced","vendors~odsp-datasources~sp-pages-panels~~65b5f32e":"vendors~odsp-datasources~sp-pages-panels~~65b5f32e","vendors~editnavchunk~sp-pages-panels~spcx-panels":"vendors~editnavchunk~sp-pages-panels~spcx-panels","vendors~sp-pages-panels~spcx-panels":"vendors~sp-pages-panels~spcx-panels","sp-pages-panels":"sp-pages-panels","vendors~editnavchunk~spcx-panels~spcx-syn~6ba97101":"vendors~editnavchunk~spcx-panels~spcx-syn~6ba97101","vendors~odsp-datasources~spcx-panels~spcx-teamify":"vendors~odsp-datasources~spcx-panels~spcx-teamify","vendors~audience-picker-chunk~spcx-panels":"vendors~audience-picker-chunk~spcx-panels","vendors~editnavchunk~spcx-panels":"vendors~editnavchunk~spcx-panels","vendors~odsp-datasources-groupsiteprovide~94eb3289":"vendors~odsp-datasources-groupsiteprovide~94eb3289","vendors~spcx-panels~teamifywizard.deferred":"vendors~spcx-panels~teamifywizard.deferred","vendors~spcx-panels":"vendors~spcx-panels","spcx-panels":"spcx-panels","spcx-create-group":"spcx-create-group","vendors~shared-react-splivepersonacard~sp~896e3b47":"vendors~shared-react-splivepersonacard~sp~896e3b47","vendors~shared-react-site-header-title-co~f08d326e":"vendors~shared-react-site-header-title-co~f08d326e","vendors~spcx-teamify":"vendors~spcx-teamify","vendors~shared-react-webtemplatesgalleryf~36956f54":"vendors~shared-react-webtemplatesgalleryf~36956f54","vendors~shared-react-webtemplatesgalleryf~b5cc52d2":"vendors~shared-react-webtemplatesgalleryf~b5cc52d2","shared-react-site-header-title-coachmark":"shared-react-site-header-title-coachmark","fabric-shimmer":"fabric-shimmer","spcx-classichomepagelink":"spcx-classichomepagelink","spcx-editnav":"spcx-editnav","spcx-knowledgeHubHardCodedLink":"spcx-knowledgeHubHardCodedLink","teamscustomutil":"teamscustomutil","vendors~data-sync-nucleus":"vendors~data-sync-nucleus","spcx-syntexdatasource":"spcx-syntexdatasource","vendors~editnavchunk~spcx-siteheaderstatemanager":"vendors~editnavchunk~spcx-siteheaderstatemanager","vendors~spcx-siteheaderstatemanager":"vendors~spcx-siteheaderstatemanager","odsp-datasources":"odsp-datasources","vendors~shared-react-mega-menu":"vendors~shared-react-mega-menu","vendors~shared-react-shyconductor":"vendors~shared-react-shyconductor","vendors~shared-react-sitescriptprogressin~92a2151d":"vendors~shared-react-sitescriptprogressin~92a2151d","vendors~shared-react-sitescriptprogressindicator":"vendors~shared-react-sitescriptprogressindicator","vendors~shared-react-splivepersonacard~sp~95564be9":"vendors~shared-react-splivepersonacard~sp~95564be9","vendors~spcx-siteheaderlpc":"vendors~spcx-siteheaderlpc","vendors~shared-react-teamscustomaction":"vendors~shared-react-teamscustomaction","vendors~teamifywizard.deferred":"vendors~teamifywizard.deferred","shared-react-webtemplatesgallerydialog":"shared-react-webtemplatesgallerydialog","vendors~editnavchunk":"vendors~editnavchunk","audience-picker-chunk":"audience-picker-chunk"}[chunkId]||chunkId) + "_" + (["qps-ploca","none"])[{"0":1,"1":1,"2":1,"3":1,"4":1,"5":1,"6":1,"7":1,"8":1,"9":0,"10":0,"11":1,"12":1,"vendors~sp-pages-panels~spcx-panels":0,"sp-pages-panels":0,"vendors~audience-picker-chunk~spcx-panels":0,"vendors~spcx-panels":0,"spcx-panels":0,"vendors~spcx-teamify":0,"vendors~shared-react-webtemplatesgalleryf~b5cc52d2":0,"shared-react-site-header-title-coachmark":0,"spcx-classichomepagelink":0,"spcx-knowledgeHubHardCodedLink":0,"vendors~shared-react-sitescriptprogressindicator":0,"vendors~editnavchunk":0,"audience-picker-chunk":0,"vendors~audience-picker-chunk~sp-pages-pa~f202f0ab":1,"vendors~editnavchunk~sp-pages-panels~spcx~63fbeced":1,"vendors~odsp-datasources~sp-pages-panels~~65b5f32e":1,"vendors~editnavchunk~sp-pages-panels~spcx-panels":1,"vendors~editnavchunk~spcx-panels~spcx-syn~6ba97101":1,"vendors~odsp-datasources~spcx-panels~spcx-teamify":1,"vendors~editnavchunk~spcx-panels":1,"vendors~odsp-datasources-groupsiteprovide~94eb3289":1,"vendors~spcx-panels~teamifywizard.deferred":1,"spcx-create-group":1,"vendors~shared-react-splivepersonacard~sp~896e3b47":1,"vendors~shared-react-site-header-title-co~f08d326e":1,"vendors~shared-react-webtemplatesgalleryf~36956f54":1,"fabric-shimmer":1,"spcx-editnav":1,"teamscustomutil":1,"vendors~data-sync-nucleus":1,"spcx-syntexdatasource":1,"vendors~editnavchunk~spcx-siteheaderstatemanager":1,"vendors~spcx-siteheaderstatemanager":1,"odsp-datasources":1,"vendors~shared-react-mega-menu":1,"vendors~shared-react-shyconductor":1,"vendors~shared-react-sitescriptprogressin~92a2151d":1,"vendors~shared-react-splivepersonacard~sp~95564be9":1,"vendors~spcx-siteheaderlpc":1,"vendors~shared-react-teamscustomaction":1,"vendors~teamifywizard.deferred":1,"shared-react-webtemplatesgallerydialog":1}[chunkId]] + ".js"
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
/******/ 	var jsonpArray = window["webpackJsonp_1e2cdec9_1360_4295_b73c_98d6f51866d5_0_1_0"] = window["webpackJsonp_1e2cdec9_1360_4295_b73c_98d6f51866d5_0_1_0"] || [];
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
/******/ 	  var regex = (typeof spScriptNamePattern !== 'undefined') ? spScriptNamePattern : /sp-pages-preloads_qps-ploca\.js/i;
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

/***/ "+35T":
/*!******************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-utilities@29.7.9_5d977624104b06c7bcaa2de974ff51f1/node_modules/@ms/odsp-utilities/lib/encoding/UriEncoding.js ***!
  \******************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ms/odsp-utilities-bundle */ "y88i");
/* harmony import */ var _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_0__["UriEncoding"]; });

// Loading @ms/odsp-utilities/./lib/encoding/UriEncoding.js



/***/ }),

/***/ "+3tZ":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-shared-react@47.12.13_d89e40c38ccaa8bd6af6488f37cb196d/node_modules/@ms/odsp-shared-react/lib/components/ReactDeferredComponent/ReactDeferredComponent.js ***!
  \**************************************************************************************************************************************************************************************************************************/
/*! exports provided: ReactDeferredComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactDeferredComponent", function() { return ReactDeferredComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _uifabric_utilities_lib_hoist__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @uifabric/utilities/lib/hoist */ "ybkr");
/* harmony import */ var _uifabric_utilities_lib_hoist__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_uifabric_utilities_lib_hoist__WEBPACK_IMPORTED_MODULE_2__);
// OneDrive:IgnoreCodeCoverage



/**
 * People can use this component as a wrapper to wrap their components that need to be delay loaded.
 * Then they put this component into their before glass code. It contains logic to delay load the real target
 * components and will render them accordingly.
 * This ReactDeferredComponent works for both AMD and common js/web pack code base.
 * Please check how do we defer loading EditNav in odsp-next/controls/leftNav/react/ReactLeftNav
 * and defer loading ContextualManu and GroupCard in SiteHeaderHost of sp-client/sp-pages
 *
 * @public
 *
 * @example
 * render() {
 *   let deferredComponentProps: IReactDeferredComponentProps = {
 *    modulePath: target_module_path,
 *    moduleLoader: implementation of IReactDeferredComponentModuleLoader,
 *    customWaiter: Promise<void>, // start defer loading component until this custom waiter promise is resolved.
 *    props: properties of the defer loaded component.
 *  };
 *  let deferredComponent = <ReactDeferredComponent { ...deferredComponentProps } />;
 *  return (
 *      <div>
 *          <before glass components>
 *          {deferredComponent}
 *      </div>
 *  );
 * }
 */
var ReactDeferredComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ReactDeferredComponent, _super);
    function ReactDeferredComponent(props) {
        var _this = _super.call(this, props) || this;
        _this._deferLoadComponent = function () {
            var ComponentModule = _this.state.ComponentModule;
            if (!ComponentModule && _this.props.moduleLoader && _this.props.modulePath) {
                _this.props.moduleLoader.load(_this.props.modulePath, _this.props.getModule).then(function (reactComp) {
                    if (_this.props.moduleLoader.parse) {
                        reactComp = _this.props.moduleLoader.parse(reactComp);
                    }
                    if (!reactComp) {
                        var error = "ReactDeferredComponent: component not found when loading " + _this.props.modulePath + " " +
                            '- check your load and parse functions';
                        console.error(error);
                    }
                    if (_this._mounted) {
                        _this.setState({ ComponentModule: reactComp });
                    }
                    else {
                        _this.state = {
                            ComponentModule: reactComp
                        };
                    }
                });
            }
        };
        _this._mounted = false;
        _this.state = {
            ComponentModule: undefined
        };
        _this._setupDeferLoadCallback(props);
        return _this;
    }
    ReactDeferredComponent.prototype.render = function () {
        var _this = this;
        var ComponentModule = this.state.ComponentModule;
        if (ComponentModule) {
            return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](ComponentModule, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ ref: function (deferredComponentInstance) {
                    if (deferredComponentInstance) {
                        Object(_uifabric_utilities_lib_hoist__WEBPACK_IMPORTED_MODULE_2__["hoistMethods"])(_this, deferredComponentInstance);
                    }
                } }, this.props.props), this.props.children));
        }
        else {
            return this.props.placeHolder || null;
        }
    };
    ReactDeferredComponent.prototype.componentDidMount = function () {
        if (!this._mounted) {
            this._mounted = true;
        }
    };
    ReactDeferredComponent.prototype.UNSAFE_componentWillReceiveProps = function (newProps) {
        this._setupDeferLoadCallback(newProps);
    };
    ReactDeferredComponent.prototype._setupDeferLoadCallback = function (props) {
        var customWaiter = props.customWaiter;
        if (customWaiter) {
            customWaiter.then(this._deferLoadComponent);
        }
        else {
            this._deferLoadComponent();
        }
    };
    return ReactDeferredComponent;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));

//# sourceMappingURL=ReactDeferredComponent.js.map

/***/ }),

/***/ "+IOR":
/*!********************************************!*\
  !*** ./lib/loaders/spcx-groupsProvider.js ***!
  \********************************************/
/*! exports provided: GroupsProviderFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupsProviderFactory", function() { return GroupsProviderFactory; });
/* harmony import */ var _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ms/odsp-utilities-bundle */ "y88i");
/* harmony import */ var _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_0__);

/**
 * @internal
 */
// tslint:disable-next-line:export-name
var GroupsProviderFactory = /** @class */ (function () {
    function GroupsProviderFactory() {
    }
    /**
     * Creates a new instance of the GroupsProvider or returns the already existing instance.
     * This method does check if the existing instance was created witht the same group id
     * but it does not check if the it was created with the same exact set of parameters.
     */
    GroupsProviderFactory.GetGroupsProvider = function (params) {
        if (GroupsProviderFactory._groupId && params.groupId === GroupsProviderFactory._groupId) {
            if (GroupsProviderFactory._groupsProvider) {
                return _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_0__["Promise"].wrap(GroupsProviderFactory._groupsProvider);
            }
            else if (GroupsProviderFactory._groupsProviderPromise) {
                return GroupsProviderFactory._groupsProviderPromise;
            }
        }
        if (params.groupId) {
            GroupsProviderFactory._groupId = params.groupId;
        }
        delete GroupsProviderFactory._groupsProvider;
        GroupsProviderFactory._groupsProviderPromise = new _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_0__["Promise"](function (resolve) {
            Promise.all(/*! import() | odsp-datasources */[__webpack_require__.e("vendors~odsp-datasources~sp-pages-panels~~65b5f32e"), __webpack_require__.e("vendors~odsp-datasources~spcx-panels~spcx-teamify"), __webpack_require__.e("odsp-datasources")]).then(__webpack_require__.bind(null, /*! @ms/odsp-datasources/lib/Groups */ "b0jF")).then(function (module) {
                GroupsProviderFactory._groupsProvider = new module.GroupsProvider({ pageContext: params });
                resolve(GroupsProviderFactory._groupsProvider);
            });
        });
        return GroupsProviderFactory._groupsProviderPromise;
    };
    return GroupsProviderFactory;
}());



/***/ }),

/***/ "+JAU":
/*!*********************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-shared-react@47.12.13_d89e40c38ccaa8bd6af6488f37cb196d/node_modules/@ms/odsp-shared-react/lib/Nav.js ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: EDIT_EVENT_NAME, UPDATE_LINKS_EVENT_NAME, HEADER_LINK_URL, LinkGroupKey, getEditLink, getToggleLeftNavLink, NavResx */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utilities_nav_NavCommon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utilities/nav/NavCommon */ "qBs0");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EDIT_EVENT_NAME", function() { return _utilities_nav_NavCommon__WEBPACK_IMPORTED_MODULE_0__["EDIT_EVENT_NAME"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UPDATE_LINKS_EVENT_NAME", function() { return _utilities_nav_NavCommon__WEBPACK_IMPORTED_MODULE_0__["UPDATE_LINKS_EVENT_NAME"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HEADER_LINK_URL", function() { return _utilities_nav_NavCommon__WEBPACK_IMPORTED_MODULE_0__["HEADER_LINK_URL"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LinkGroupKey", function() { return _utilities_nav_NavCommon__WEBPACK_IMPORTED_MODULE_0__["LinkGroupKey"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getEditLink", function() { return _utilities_nav_NavCommon__WEBPACK_IMPORTED_MODULE_0__["getEditLink"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getToggleLeftNavLink", function() { return _utilities_nav_NavCommon__WEBPACK_IMPORTED_MODULE_0__["getToggleLeftNavLink"]; });

/* harmony import */ var _utilities_nav_Nav_resx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utilities/nav/Nav.resx */ "mw8S");
/* harmony import */ var _utilities_nav_Nav_resx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_utilities_nav_Nav_resx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "NavResx", function() { return _utilities_nav_Nav_resx__WEBPACK_IMPORTED_MODULE_1___default.a; });


//# sourceMappingURL=Nav.js.map

/***/ }),

/***/ "+ORw":
/*!************************************!*\
  !*** ./lib/common/KillSwitches.js ***!
  \************************************/
/*! exports provided: KillSwitches, isPreviewPage404FixActivated, isLeftNavEditUpdateKSActive, isFixKnowledgeCenterNavLinkPermssionFixActivated, fixLoadKnowledgeHubHardCodedLinkChunkKSActivated, isEmptyLeftNavKSActive, isLeftNavTrapFocusKSActive, recomputeLeftNavKSActivated */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KillSwitches", function() { return KillSwitches; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPreviewPage404FixActivated", function() { return isPreviewPage404FixActivated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isLeftNavEditUpdateKSActive", function() { return isLeftNavEditUpdateKSActive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFixKnowledgeCenterNavLinkPermssionFixActivated", function() { return isFixKnowledgeCenterNavLinkPermssionFixActivated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fixLoadKnowledgeHubHardCodedLinkChunkKSActivated", function() { return fixLoadKnowledgeHubHardCodedLinkChunkKSActivated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEmptyLeftNavKSActive", function() { return isEmptyLeftNavKSActive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isLeftNavTrapFocusKSActive", function() { return isLeftNavTrapFocusKSActive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recomputeLeftNavKSActivated", function() { return recomputeLeftNavKSActivated; });
/* harmony import */ var _ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ms/sp-component-utilities */ "hiL/");
/* harmony import */ var _ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__);


var KillSwitches = /** @class */ (function () {
    function KillSwitches() {
    }
    KillSwitches.editNavPaneAccessbilityFix = new _ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_0__["KillSwitch"]('e6fbc9c4-830c-46fe-98e7-376080c0d846'
    /* '07/01/2020', 'only trap focus when in pane for edit nav' */
    );
    KillSwitches.increaseNavWidthKS = new _ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_0__["KillSwitch"]('2fe4edff-416f-426b-a7bb-a54c2e7834fa' /* '06/05/2020', 'increase LeftNav width' */);
    KillSwitches.leftNavAccordionClickKS = new _ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_0__["KillSwitch"]('cfe934df-e3be-4589-b5ad-e05fa854752f' /* '08/14/2020', 'fix accordion label click' */);
    KillSwitches.knowledgeCenterHardcodedNavLinks = new _ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_0__["KillSwitch"]('ebfaa093-e428-4a3a-bf89-240df537cea3'
    /* '6/21/2020', 'Add Getting Started and Manage Topics Nav ' */
    );
    KillSwitches.siteHeaderCoachmarkKS = new _ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_0__["KillSwitch"]('8e4365c3-497e-48c8-ba24-f6782e1f3faf'
    /* '06/30/2020',
    'Display coachmark on site header for home site integration' */
    );
    KillSwitches.revertTopicCenterNavFix = new _ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_0__["KillSwitch"]('16bf8498-f08d-4e82-809f-31d1bc5e56bb' /* '07/08/2020',
    'Reverts for duplicate site nav tab selection in Topic Center'*/);
    KillSwitches.revertEditNavLogic = new _ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_0__["KillSwitch"]('49d2f5c7-01dc-49d2-9eb5-1f8d66bd2862' /* '07/08/2020',
    'Reverts Edit Nav Logic Change'*/);
    /**
     * At the time of graduation, remove the corresponding KS (same guid) from
     * HorizontalNav.base.tsx in odsp-common
     */
    KillSwitches.subLinkInPlaceNav = new _ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_0__["KillSwitch"]('fcf17a35-9f5b-41a0-a61c-012617651178' /* '8/19/2020',
    'Fire post-message for sub-links for in-place nav' */);
    return KillSwitches;
}());

function isPreviewPage404FixActivated() {
    return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["_SPKillSwitch"].isActivated('36c2c71f-dc0d-4d7c-873a-ab3f09722570' /* '05/05/2020',
    'Fixed the issue with a preview page returning a 404 error upon reload' */);
}
function isLeftNavEditUpdateKSActive() {
    return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["_SPKillSwitch"].isActivated('e6a444ef-8519-43b1-b3c3-74e16babe5d6'
    /* '9/22/2020', 'Update LeftNav state after saving in EditNav' */
    );
}
function isFixKnowledgeCenterNavLinkPermssionFixActivated() {
    return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["_SPKillSwitch"].isActivated('e2b3f7ff-c684-4465-9c3e-add62accbb3e' /* '09/18/2020',
    'Fix knowledge center nav link permission' */);
}
function fixLoadKnowledgeHubHardCodedLinkChunkKSActivated() {
    return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["_SPKillSwitch"].isActivated('e7c72a81-6f8e-4b10-91af-25c32a109a20' /* '01/05/2021',
    'Fix perf issue where the KnowledgeHubHardCodedLink chunk is loaded for non knowledgeHub pages.' */);
}
function isEmptyLeftNavKSActive() {
    return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["_SPKillSwitch"].isActivated('5b7f7362-fbd5-4d89-8ebf-1be41bff06b2'
    /* '10/22/2020',
    'Render a blank LeftNav even when there are no nav links. Also support the web setting to disable quickLaunch.' */
    );
}
function isLeftNavTrapFocusKSActive() {
    return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["_SPKillSwitch"].isActivated('6e5ce4ac-24fb-4b8e-9bb3-55044be47a60'
    /* '01/12/2021',
    'Trap focus in the popup responsive Nav' */
    );
}
function recomputeLeftNavKSActivated() {
    return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["_SPKillSwitch"].isActivated('21a3f45b-7a16-48f5-9aba-0cec35fbba1c'
    /* '1/14/2021',
    'Render a blank LeftNav even when there are no nav links. Also support the web setting to disable quickLaunch.' */
    );
}


/***/ }),

/***/ "+tXJ":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-shared-react@47.12.13_d89e40c38ccaa8bd6af6488f37cb196d/node_modules/@ms/odsp-shared-react/lib/components/CompositeHeader/layouts/UnifiedHeader.styles.js ***!
  \*************************************************************************************************************************************************************************************************************************/
/*! exports provided: getFullHeight, shyHeight, getStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFullHeight", function() { return getFullHeight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shyHeight", function() { return shyHeight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStyles", function() { return getStyles; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _CompositeHeader_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../CompositeHeader.styles */ "Dxbs");
/* harmony import */ var office_ui_fabric_react_lib_Styling__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! office-ui-fabric-react/lib/Styling */ "PL71");
/* harmony import */ var _ms_odsp_datasources_lib_ChromeOptions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ms/odsp-datasources/lib/ChromeOptions */ "XnGw");
/* harmony import */ var _ms_odsp_utilities_lib_killswitch_Killswitch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ms/odsp-utilities/lib/killswitch/Killswitch */ "QUgr");





// do terrible things to the button so it will baseline-align with the rest of the text
// also remove left/right paddings so we can align elements more easily
var _horribleButtonOverrides = {
    '.ms-Button': {
        height: 'auto',
        paddingTop: 3,
        paddingBottom: 3,
        paddingLeft: 0,
        paddingRight: 0
    },
    '.ms-Button-flexContainer': {
        alignItems: 'baseline'
    },
    '.ms-Button-icon': {
        lineHeight: 'initial',
        alignSelf: 'center',
        fontSize: 'inherit',
        marginLeft: 0
    },
    '.ms-Button-label': {
        marginRight: 0
    }
};
var getFullHeight = function (state) {
    if (state.isResponsiveMode) {
        return 64;
    }
    switch (state.layout) {
        case _ms_odsp_datasources_lib_ChromeOptions__WEBPACK_IMPORTED_MODULE_3__["UnifiedHeaderLayout"].standard:
            return 108;
        case _ms_odsp_datasources_lib_ChromeOptions__WEBPACK_IMPORTED_MODULE_3__["UnifiedHeaderLayout"].compact:
            return 80;
        case _ms_odsp_datasources_lib_ChromeOptions__WEBPACK_IMPORTED_MODULE_3__["UnifiedHeaderLayout"].extended:
            return 98;
    }
    return 0;
};
var shyHeight = 44;
var animationDelay = office_ui_fabric_react_lib_Styling__WEBPACK_IMPORTED_MODULE_2__["AnimationVariables"].durationValue1;
var animationDuration = '.15s';
var getStyles = function (props) {
    var theme = props.theme, layout = props.layout, isResponsiveMode = props.isResponsiveMode, hasLogo = props.hasLogo, logoLoaded = props.logoLoaded, textBelowTitle = props.textBelowTitle, groupInfoByTitle = props.groupInfoByTitle, navIsInline = props.navIsInline, hasActions = props.hasActions, showFacepile = props.showFacepile, showSearch = props.showSearch, showTitle = props.showTitle, isShyMode = props.isShyMode, readyForShyHeader = props.readyForShyHeader, showLeftNavToggleButton = props.showLeftNavToggleButton, logoAlignment = props.logoAlignment, backgroundImageUrl = props.backgroundImageUrl, backgroundFocalPoint = props.backgroundFocalPoint, isHomePlusHub = props.isHomePlusHub;
    var semanticColors = theme.semanticColors;
    // used for acronym logo
    var originalTheme = Object(office_ui_fabric_react_lib_Styling__WEBPACK_IMPORTED_MODULE_2__["getTheme"])();
    var isMinimal = layout === _ms_odsp_datasources_lib_ChromeOptions__WEBPACK_IMPORTED_MODULE_3__["UnifiedHeaderLayout"].minimal;
    var isExtended = layout === _ms_odsp_datasources_lib_ChromeOptions__WEBPACK_IMPORTED_MODULE_3__["UnifiedHeaderLayout"].extended;
    var gutterWidth = 32, gutterLeft = showLeftNavToggleButton ? 0 : gutterWidth, // adjust for left nav toggle button's padding when shown
    fullHeight = getFullHeight(props), // height of the entire control
    logoHeight, logoWidth, logoJustifyContent, leftNavToggleButtonWidth = 48, leftNavToggleButtonHeight = isShyMode || isMinimal ? 38 : 48;
    switch (layout) {
        case _ms_odsp_datasources_lib_ChromeOptions__WEBPACK_IMPORTED_MODULE_3__["UnifiedHeaderLayout"].compact:
            logoHeight = 48;
            break;
        case _ms_odsp_datasources_lib_ChromeOptions__WEBPACK_IMPORTED_MODULE_3__["UnifiedHeaderLayout"].standard:
        default:
            logoHeight = 64;
        /* deprecated for now
      case (UnifiedHeaderLayout.minimal):
        fullHeight = 60;
        logoHeight = 40;
        break;*/
    }
    switch (logoAlignment) {
        case _ms_odsp_datasources_lib_ChromeOptions__WEBPACK_IMPORTED_MODULE_3__["LogoAlignment"].middle:
            logoJustifyContent = 'center';
            break;
        case _ms_odsp_datasources_lib_ChromeOptions__WEBPACK_IMPORTED_MODULE_3__["LogoAlignment"].right:
            logoJustifyContent = 'flex-end';
            break;
        default:
            logoJustifyContent = 'left';
    }
    logoWidth = logoHeight * 3;
    if (isResponsiveMode) {
        logoHeight = 40;
        logoWidth = logoHeight * 2;
    }
    var shyLogoHeight = 26;
    var shyLogoWidth = shyLogoHeight * 3;
    // When it is extended header and in shy mode, we would like to use square logo
    if (!_ms_odsp_utilities_lib_killswitch_Killswitch__WEBPACK_IMPORTED_MODULE_4__["Killswitch"].isActivated('77c2a1a7-dd39-434e-8ed1-5305320c44db', '09/01/2020', 'Use Square logo when shy') &&
        isExtended) {
        shyLogoWidth = shyLogoHeight;
    }
    /** Here we have the styles that are shared between the normal header and shy header. */
    var logoWrapper = [
        {
            // center image vertically
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            selectors: {
                'a&:focus': {
                    outline: '1px solid ' + semanticColors.focusBorder
                }
            }
        },
        !hasLogo && {
            // is an acronym
            boxSizing: 'border-box',
            border: '1px solid ' + semanticColors.bodyDivider,
            textDecoration: 'none',
            backgroundColor: originalTheme.palette.themePrimary,
            color: originalTheme.palette.white,
            height: logoHeight,
            width: logoHeight,
            selectors: {
                'a&, a&:hover, a&:focus': {
                    // overwrite default anchor styles on page
                    color: originalTheme.palette.white,
                    textDecoration: 'none'
                }
            }
        },
        // logo font sizes
        layout === _ms_odsp_datasources_lib_ChromeOptions__WEBPACK_IMPORTED_MODULE_3__["UnifiedHeaderLayout"].standard && Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, theme.fonts.xxLarge),
        layout === _ms_odsp_datasources_lib_ChromeOptions__WEBPACK_IMPORTED_MODULE_3__["UnifiedHeaderLayout"].compact && Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, theme.fonts.xLarge),
        isResponsiveMode && Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, theme.fonts.large)
    ];
    var shyLogoWrapper = logoWrapper.slice();
    shyLogoWrapper.push(!hasLogo && {
        height: shyLogoHeight,
        width: shyLogoHeight // square the acronym
    });
    shyLogoWrapper.push(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, theme.fonts.small), { marginRight: 8 // space between logo and title text
     }));
    var logoImg = [
        {
            maxHeight: logoHeight,
            maxWidth: layout === _ms_odsp_datasources_lib_ChromeOptions__WEBPACK_IMPORTED_MODULE_3__["UnifiedHeaderLayout"].extended ? 'none' : logoWidth,
            border: 'none'
        },
        !logoLoaded && {
            minHeight: logoHeight,
            minWidth: logoHeight
        }
    ];
    var shyLogoImg = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, logoImg), { maxHeight: shyLogoHeight, maxWidth: shyLogoWidth });
    var titleSubcell = [
        {
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            paddingLeft: 2,
            paddingRight: 2,
            flexShrink: 1,
            flexGrow: 0
        },
        layout === _ms_odsp_datasources_lib_ChromeOptions__WEBPACK_IMPORTED_MODULE_3__["UnifiedHeaderLayout"].standard && {
            // Vertical and horizontal padding needed to prevent the focus indicator from being clipped.
            padding: 2
        },
        !textBelowTitle && {
            lineHeight: '' + fullHeight + 'px'
        }
    ];
    var title = [
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ color: semanticColors.bodyText }, theme.fonts.xLargePlus), { selectors: {
                'a&, a&:hover': {
                    // overwrite default link styles
                    color: semanticColors.bodyText,
                    textDecoration: 'none'
                }
            } }),
        isResponsiveMode && Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, theme.fonts.large)
    ];
    var shyTitle = title.slice().concat(titleSubcell);
    shyTitle.push(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, theme.fonts.large), { lineHeight: shyHeight, marginRight: 18, flexBasis: '100px' }));
    return Object(office_ui_fabric_react_lib_Styling__WEBPACK_IMPORTED_MODULE_2__["mergeStyleSets"])(Object(_CompositeHeader_styles__WEBPACK_IMPORTED_MODULE_1__["getStyles"])(props), {
        root: {
            padding: 0 // override root styles
        },
        topPlaceholderRow: {
            backgroundColor: originalTheme.semanticColors.bodyBackground
        },
        leftNavToggleButton: [
            {
                display: showLeftNavToggleButton ? 'block' : 'none',
                width: leftNavToggleButtonWidth,
                height: leftNavToggleButtonHeight,
                marginRight: '8px',
                selectors: {
                    '&& i': {
                        fontSize: '20px'
                    }
                }
            },
            // To fix an alignement issue for extended header
            isExtended &&
                showLeftNavToggleButton && {
                position: 'absolute',
                left: 0,
                top: 24
            }
        ],
        headerRow: [
            {
                position: 'relative',
                display: 'flex'
            },
            isExtended &&
                !isShyMode &&
                backgroundImageUrl && {
                backgroundImage: "url(" + backgroundImageUrl + ")",
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: backgroundFocalPoint.x + "% " + backgroundFocalPoint.y + "%"
            }
        ],
        bottomNavRow: [
            {
                borderTop: '1px solid ' + semanticColors.bodyDivider,
                height: 40,
                display: 'flex',
                alignItems: 'center',
                paddingRight: 20
            },
            isExtended &&
                isHomePlusHub && {
                backgroundColor: theme.semanticColors.bodyFrameBackground
            }
        ],
        mainHeader: [
            {
                width: '100%',
                boxSizing: 'border-box',
                flexGrow: 1,
                paddingLeft: gutterLeft,
                paddingRight: gutterWidth,
                display: 'flex',
                height: fullHeight,
                alignItems: layout === _ms_odsp_datasources_lib_ChromeOptions__WEBPACK_IMPORTED_MODULE_3__["UnifiedHeaderLayout"].standard || !showTitle ? 'center' : 'baseline',
                position: 'relative',
                // hack, since animation changes only opacity, which means this will still be invisibly clickable
                transition: 'visibility ' + animationDuration + ' ' + animationDelay,
                justifyContent: logoJustifyContent
            },
            !isShyMode &&
                readyForShyHeader && Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, office_ui_fabric_react_lib_Styling__WEBPACK_IMPORTED_MODULE_2__["AnimationStyles"].slideDownIn10), { animationDelay: animationDelay, animationFillMode: 'backwards' }),
            isShyMode && Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, office_ui_fabric_react_lib_Styling__WEBPACK_IMPORTED_MODULE_2__["AnimationStyles"].slideUpOut10), { position: 'absolute', top: 0, left: 0, right: 0, animationFillMode: 'forwards' }),
            {
                // keep these at the end to overwrite default animation styles
                animationTimingFunction: 'linear',
                animationDuration: animationDuration
            }
        ],
        logoCell: [
            {
                flexShrink: 0,
                marginRight: isShyMode || isMinimal ? 0 : !isResponsiveMode ? 20 : 14,
                // vertically center the logo within this
                display: 'flex',
                alignItems: 'center',
                alignSelf: 'center' // ignore parent's potential baseline alignment
            },
            // To fix an alignement issue for extended header
            isExtended &&
                showLeftNavToggleButton &&
                logoAlignment === _ms_odsp_datasources_lib_ChromeOptions__WEBPACK_IMPORTED_MODULE_3__["LogoAlignment"].left && {
                marginLeft: 50
            },
            (isShyMode || isMinimal) &&
                !showTitle && {
                marginRight: 25
            }
        ],
        logoWrapper: logoWrapper,
        logoImg: logoImg,
        titleAndNavWrapper: {
            marginRight: 24,
            minWidth: 0,
            flexGrow: 1,
            flexShrink: 1,
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
        },
        titleSubcell: titleSubcell,
        title: title,
        adjacentTitleSubcell: [
            {
                minWidth: 0,
                flexGrow: 1,
                flexShrink: 1
            },
            // if there is text here and it is beside the title, add margin
            !textBelowTitle && {
                paddingLeft: 36 // space between nav and title
            },
            // if this cell is below the title, have a top margin
            textBelowTitle && {
                marginTop: 4
            }
        ],
        spacer: [
            {
                marginLeft: 'auto'
            }
        ],
        groupInfo: [
            Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, theme.fonts.medium), { whiteSpace: 'nowrap', flexShrink: 0, color: semanticColors.bodySubtext, selectors: {
                    '& a, & a:hover': {
                        // override default link styles
                        color: semanticColors.bodySubtext
                    },
                    '& button.ms-UnifiedHeader-IBSegments': {
                        color: semanticColors.bodySubtext
                    }
                } }),
            isExtended && {
                height: 22
            },
            groupInfoByTitle &&
                navIsInline && {
                // group info is to the right of the title
                marginLeft: 20
            },
            // if group info is right next to facepile/search/actions, have a margin
            !groupInfoByTitle &&
                (hasActions || showFacepile || showSearch) && {
                marginRight: 15
            },
            isResponsiveMode && Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, theme.fonts.small)
        ],
        sideActionsWrapper: {
            flexShrink: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end'
        },
        actionsWrapper: [
            {
                flexShrink: 0,
                display: 'flex',
                alignItems: showTitle ? 'baseline' : 'center'
            },
            // The title has line-height 44px, and that changes the vertical alignment of the horizontal nav links.
            // This change shifts the actions up so they stay in alignment with the nav links, if the title is hidden.
            // The 6px shift corresponds to the 4px padding plus 2px border under the nav link which is active (as an underline effect).
            !showTitle && {
                marginBottom: 6
            }
        ],
        actionsSubcell: [
            {
                flexShrink: 0,
                display: 'flex',
                selectors: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, _horribleButtonOverrides), { '&& > *': {
                        // increase specificity to override button's root styles
                        marginRight: 20
                    }, '&& > :last-child': {
                        marginRight: layout === _ms_odsp_datasources_lib_ChromeOptions__WEBPACK_IMPORTED_MODULE_3__["UnifiedHeaderLayout"].standard && 0
                    } })
            },
            layout === _ms_odsp_datasources_lib_ChromeOptions__WEBPACK_IMPORTED_MODULE_3__["UnifiedHeaderLayout"].standard &&
                showTitle && {
                marginBottom: 12
            }
        ],
        moreActionsButton: {
            cursor: 'pointer'
        },
        facepileCell: {
            display: 'flex',
            alignItems: 'center',
            selectors: _horribleButtonOverrides
        },
        searchCell: {
            flexShrink: 0,
            marginLeft: 20,
            alignSelf: 'center',
            selectors: {
                '&& > div': {
                    // increase specificity to override the additional .active class
                    margin: 0 // child components should not determine their own layout, override it
                }
            }
        },
        topNavBox: {
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            lineHeight: String((fullHeight - logoHeight) / 2) + 'px',
            paddingLeft: gutterLeft,
            paddingRight: gutterWidth
        },
        siteNavRoot: [
            {
                flexGrow: 1,
                minWidth: 0 // cuz default is size of content
            },
            isExtended && {
                marginLeft: gutterWidth
            }
        ],
        siteNavLink: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ color: semanticColors.bodyText }, theme.fonts.medium), { selectors: {
                '.ms-Fabric--isFocusVisible &&:focus::after': {
                    borderColor: semanticColors.focusBorder
                }
            } }),
        shyHeader: [
            {
                width: '100%',
                boxSizing: 'border-box',
                height: shyHeight,
                paddingLeft: gutterLeft,
                paddingRight: gutterWidth,
                display: 'flex',
                alignItems: !showTitle ? 'center' : 'baseline',
                // hack, since animation changes only opacity, which means this will still be invisibly clickable
                transition: 'visibility ' + animationDuration + ' ' + animationDelay
            },
            isShyMode &&
                !isMinimal && Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, office_ui_fabric_react_lib_Styling__WEBPACK_IMPORTED_MODULE_2__["AnimationStyles"].slideUpIn10), { animationDelay: animationDelay, animationFillMode: 'backwards' }),
            !isShyMode &&
                !isMinimal && Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, office_ui_fabric_react_lib_Styling__WEBPACK_IMPORTED_MODULE_2__["AnimationStyles"].slideDownOut10), { position: 'absolute', top: 0, left: 0, right: 0, animationFillMode: 'forwards' }),
            !isMinimal && {
                // keep these at the end to overwrite default animation styles
                animationTimingFunction: 'linear',
                animationDuration: animationDuration
            }
        ],
        shyLogoWrapper: shyLogoWrapper,
        shyLogoImg: shyLogoImg,
        shyTitle: shyTitle,
        externalBadge: {
            display: 'inline-block',
            fontWeight: 400,
            padding: '4px 8px',
            borderRadius: 4,
            marginRight: 10,
            backgroundColor: theme.palette.themeDarker,
            color: theme.palette.white
        }
    });
};
//# sourceMappingURL=UnifiedHeader.styles.js.map

/***/ }),

/***/ "/gk5":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-shared-react@47.12.13_d89e40c38ccaa8bd6af6488f37cb196d/node_modules/@ms/odsp-shared-react/lib/components/HubNav/HubNav.styles.js ***!
  \*************************************************************************************************************************************************************************************************/
/*! exports provided: HUB_NAV_HEIGHT, getStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HUB_NAV_HEIGHT", function() { return HUB_NAV_HEIGHT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStyles", function() { return getStyles; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var office_ui_fabric_react_lib_Styling__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! office-ui-fabric-react/lib/Styling */ "PL71");


var HUB_NAV_HEIGHT = 40;
var animationDelay = office_ui_fabric_react_lib_Styling__WEBPACK_IMPORTED_MODULE_1__["AnimationVariables"].durationValue1;
var linkTextStyles = function (theme) { return (Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ color: theme.semanticColors.bodySubtext }, theme.fonts.medium)); };
var getStyles = function (props) {
    var theme = props.theme, isShyMode = props.isShyMode;
    var semanticColors = theme.semanticColors;
    return {
        root: [
            {
                display: isShyMode ? 'none' : 'block',
                backgroundColor: semanticColors.bodyFrameBackground
            }
        ],
        hubNavRow: [
            'ms-HubNav',
            {
                display: 'flex',
                height: HUB_NAV_HEIGHT,
                borderBottom: '1px solid ' + semanticColors.bodyFrameDivider
            },
            'ms-HubNav-enhancedMegaMenu',
            !isShyMode && Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, office_ui_fabric_react_lib_Styling__WEBPACK_IMPORTED_MODULE_1__["AnimationStyles"].slideDownIn10), { animationDelay: animationDelay, animationFillMode: 'backwards' })
        ],
        link: ['ms-HubNav-link', Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, linkTextStyles(theme))],
        navLink: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, linkTextStyles(theme))
    };
};
//# sourceMappingURL=HubNav.styles.js.map

/***/ }),

/***/ "/la2":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-shared-react@47.12.13_d89e40c38ccaa8bd6af6488f37cb196d/node_modules/@ms/odsp-shared-react/lib/components/HorizontalNav/HorizontalNav.base.js ***!
  \*************************************************************************************************************************************************************************************************************/
/*! exports provided: HorizontalNavBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HorizontalNavBase", function() { return HorizontalNavBase; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _HorizontalNav_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./HorizontalNav.scss */ "hZiR");
/* harmony import */ var _ms_odsp_utilities_lib_killswitch_Killswitch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ms/odsp-utilities/lib/killswitch/Killswitch */ "QUgr");
/* harmony import */ var office_ui_fabric_react_lib_FocusZone__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! office-ui-fabric-react/lib/FocusZone */ "NMYH");
/* harmony import */ var office_ui_fabric_react_lib_Utilities__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! office-ui-fabric-react/lib/Utilities */ "mkpW");
/* harmony import */ var _ReactDeferredComponent_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../ReactDeferredComponent/index */ "afe6");
/* harmony import */ var office_ui_fabric_react_lib_common_DirectionalHint__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! office-ui-fabric-react/lib/common/DirectionalHint */ "EE7g");
/* harmony import */ var _ms_odsp_datasources_lib_ViewNav__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ms/odsp-datasources/lib/ViewNav */ "Qjmx");
/* harmony import */ var office_ui_fabric_react_lib_Icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! office-ui-fabric-react/lib/Icon */ "56LG");
/* harmony import */ var office_ui_fabric_react_lib_Icon__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(office_ui_fabric_react_lib_Icon__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _microsoft_load_themed_styles__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @microsoft/load-themed-styles */ "jOlS");
/* harmony import */ var _microsoft_load_themed_styles__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_microsoft_load_themed_styles__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var office_ui_fabric_react_lib_Styling__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! office-ui-fabric-react/lib/Styling */ "PL71");
/* harmony import */ var _ms_odsp_utilities_lib_string_StringHelper__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ms/odsp-utilities/lib/string/StringHelper */ "BY+f");
/* harmony import */ var _ms_odsp_utilities_lib_string_StringHelper__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_ms_odsp_utilities_lib_string_StringHelper__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _utilities_nav_NavCommon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../utilities/nav/NavCommon */ "qBs0");
/* harmony import */ var _ms_telemetry_manager_lib_events_Qos_event__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ms/telemetry-manager/lib/events/Qos.event */ "eT67");
/* harmony import */ var _ms_odsp_utilities_lib_logging_events_Engagement_event__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ms/odsp-utilities/lib/logging/events/Engagement.event */ "cDPE");
/* harmony import */ var _common_telemetry_NavigationSource__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../common/telemetry/NavigationSource */ "MFpg");
/* harmony import */ var _HorizontalNav_resx__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./HorizontalNav.resx */ "cwNP");
/* harmony import */ var _HorizontalNav_resx__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_HorizontalNav_resx__WEBPACK_IMPORTED_MODULE_17__);



















var getClassNames = Object(office_ui_fabric_react_lib_Utilities__WEBPACK_IMPORTED_MODULE_5__["classNamesFunction"])();
/** Type of action that triggers opening sub menu */
var MenuTriggeringAction;
(function (MenuTriggeringAction) {
    MenuTriggeringAction[MenuTriggeringAction["KeyPress"] = 0] = "KeyPress";
    MenuTriggeringAction[MenuTriggeringAction["Hover"] = 1] = "Hover";
    MenuTriggeringAction[MenuTriggeringAction["Click"] = 2] = "Click";
})(MenuTriggeringAction || (MenuTriggeringAction = {}));
var OVERFLOW_KEY = 'overflow';
var OVERFLOW_WIDTH = 32.67;
var EDITLINK_KEY = 'EditLink';
var MEGAMENU_MAX_COLUMN = 4;
var MEGAMENU_EDGE_SPACING = 8; // 8px - comes from the spacing that fabric's Callout component uses
// global var used in horizontalNav _isLinkSelected.  TODO: we may want to use ONE copy of this copy from Nav of office fabirc in the future.
var _urlResolverForHNav;
/**
 * Generates a key for a link. Keys in React should be unique and consistent (unless the underlying
 * object changes), so using a key like this is better than an array index.
 * https://stackoverflow.com/a/43892905
 */
function _getKey(link) {
    return link.key + link.name + link.url;
}
/**
 * Horizontal Nav control, meant to contain top navigation nodes.
 */
var HorizontalNavBase = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(HorizontalNavBase, _super);
    function HorizontalNavBase(props, context) {
        var _this = _super.call(this, props, context) || this;
        _this._horizontalNavItemsRef = {};
        _this._boundItemClick = {};
        _this._boundMainItemHover = {};
        /** render shimmer submenu */
        _this._renderShimmer = function (item, dismissMenu) {
            var parentKey = item && item.data;
            // on this custom render callback we start async fetch while render shimmer submenu
            _this._asyncFetch(parentKey);
            var deferredShimmer = _this._getDeferredShimmer({
                customElementsGroup: _this._getOneLeveOndemandElements(),
                width: HorizontalNavBase.MENU_WIDTH
            });
            return deferredShimmer;
        };
        /// To eleminate ShimmerElementType enum reference drag in extra bit to blow up the assembly size. we use hard code enum
        /// please key those value in sync with OUFR, ShimmerElementType.line: 1, ShimmerElementType.circle: 2,  ShimmerElementType.gap: 3
        _this._getOneLeveOndemandElements = function () {
            var gap = {
                type: 3,
                width: HorizontalNavBase.MENU_ITEM_SIDE_MARGIN,
                height: HorizontalNavBase.MENU_ITEM_HEIGHT
            };
            var deferredShimmerElementsGroup = _this._getDeferredShimmerElementsGroup({
                flexWrap: true,
                shimmerElements: [
                    gap,
                    {
                        type: 1,
                        width: HorizontalNavBase.MENU_WIDTH - HorizontalNavBase.MENU_ITEM_SIDE_MARGIN * 2,
                        height: 10
                    },
                    gap,
                    gap,
                    {
                        type: 1,
                        width: HorizontalNavBase.MENU_WIDTH - HorizontalNavBase.MENU_ITEM_SIDE_MARGIN * 2,
                        height: 10
                    },
                    gap
                ]
            });
            return deferredShimmerElementsGroup;
        };
        _this._onOverflowClick = function (ev) {
            if (_this.state.contextMenuItems || _this.state.lastTriggeringItem === OVERFLOW_KEY) {
                _this._onNavMenuDismiss();
                _this.setState({ lastTriggeringItem: null });
            }
            else {
                _this.setState({
                    contextMenuItems: _this.state.overflowItems,
                    contextMenuRef: ev.currentTarget,
                    lastTriggeringItem: OVERFLOW_KEY
                });
            }
        };
        _this._onEditClick = function (ev) {
            _this.props.editLink.onClick(ev);
            if (_this._fixNavEditExperienceKSActivated()) {
                _this.setState({ isEditMode: false });
            }
            else {
                _this.setState({ isEditMode: true });
            }
        };
        _this._onMouseLeave = function () {
            _this._async.clearTimeout(_this._navItemHoverTimerId);
        };
        _this._closeMegaMenu = function (ev) {
            if ((_this._isMegaMenuWindowHoverKSActive() || _this._useMegaMenu) &&
                _this.state.lastTriggeringAction !== 0 /* KeyPress */) {
                _this._onNavMenuDismiss();
            }
        };
        _this._onNavMenuDismiss = function (ev) {
            if (!ev || !ev.relatedTarget || !_this._horizontalNavRegion.contains(ev.relatedTarget)) {
                _this.setState({
                    contextMenuItems: null
                });
            }
            else {
                ev.stopPropagation();
                ev.preventDefault();
            }
        };
        _this._instanceIdPrefix = Object(office_ui_fabric_react_lib_Utilities__WEBPACK_IMPORTED_MODULE_5__["getId"])('HorizontalNav');
        if (!subLinkInPlaceNavKillSwitchActivated()) {
            _this._inPlaceNavEnabled = _this.props.inplaceNavigationEnabled;
        }
        _this._getItemHoverMegaMenuCallback = Object(office_ui_fabric_react_lib_Utilities__WEBPACK_IMPORTED_MODULE_5__["memoizeFunction"])(function (item) {
            return function (ev) {
                _this._onMainItemHoverMegaMenu(item, ev);
            };
        });
        _this._getItemHoverCallback = Object(office_ui_fabric_react_lib_Utilities__WEBPACK_IMPORTED_MODULE_5__["memoizeFunction"])(function (item) {
            return function (ev) {
                _this._onMainItemHover(item, ev);
            };
        });
        _this._getItemClickCallback = Object(office_ui_fabric_react_lib_Utilities__WEBPACK_IMPORTED_MODULE_5__["memoizeFunction"])(function (item) {
            return function (ev) {
                _this._onItemClick(item, ev);
            };
        });
        _this._getKeyPressCallback = Object(office_ui_fabric_react_lib_Utilities__WEBPACK_IMPORTED_MODULE_5__["memoizeFunction"])(function (item) {
            return function (ev) {
                _this._handleKeyPress(item, ev);
            };
        });
        _this._getAnchorClickCallback = Object(office_ui_fabric_react_lib_Utilities__WEBPACK_IMPORTED_MODULE_5__["memoizeFunction"])(function (item) {
            return function (ev) {
                _this._onAnchorClick(item, ev);
            };
        });
        if (!_this._isAudienceTargeted()) {
            _this.state = _this._getStateFromProps(_this.props);
        }
        else {
            // do not render anything initially if nav is audience targeted
            _this.state = _this._getStateFromProps(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, _this.props), { items: [] }));
            _this._applyInitialAudienceTargeting();
        }
        _this._editLinkWidth = -1;
        _this._resolvedElement = function (key) { return function (el) { return (_this._horizontalNavItemsRef[key] = el); }; };
        // this is to support loadStyles async mode, which can dramatically reduce the number of style elements created,
        // hence improve perf
        Object(_microsoft_load_themed_styles__WEBPACK_IMPORTED_MODULE_10__["flush"])();
        // Each nav bar at a time only has 1 link in selected state.
        // Therefore if found that selectedLink, no need to continue trying on the rest of links for perf gain.
        // This is the flag used to ensure stop checking on nodes after the selected link matching is found.
        _this._foundSelectedLink = false;
        _this._qosEvent = new _ms_telemetry_manager_lib_events_Qos_event__WEBPACK_IMPORTED_MODULE_14__["Qos"]({ name: 'HorizontalNav' });
        return _this;
    }
    HorizontalNavBase._isHeader = function (url) {
        return !url || url === _utilities_nav_NavCommon__WEBPACK_IMPORTED_MODULE_13__["HEADER_LINK_URL"];
    };
    HorizontalNavBase.prototype.componentDidMount = function () {
        if (!this._isAudienceTargeted() || (this.state.items || []).length > 0) {
            this._updateItemMeasurements();
            this._updateRenderedItems();
        }
        this._events.on(window, 'resize', this._updateRenderedItems);
        this.props.onRendered && this.props.onRendered(true);
        this._isMounted = true;
        this._qosEvent.end({ resultType: _ms_telemetry_manager_lib_events_Qos_event__WEBPACK_IMPORTED_MODULE_14__["ResultTypeEnum"].Success });
        this._events.on(window, HorizontalNavBase.SUBMENU_OPEN_EVENT, this._onNavMenuDismiss);
        if (!this._isMegaMenuWindowHoverKSActive()) {
            this._events.on(document, 'mouseleave', this._closeMegaMenu);
            var suiteNavEl = document.getElementById('SuiteNavWrapper');
            // the following is needed because for some reason, the mouseoff event doesn't fire for MegaMenu when moving
            // mouse to suite nav
            if (suiteNavEl) {
                this._events.on(suiteNavEl, 'mouseenter', this._closeMegaMenu);
            }
        }
    };
    HorizontalNavBase.prototype.componentWillUnmount = function () {
        this._isMounted = false;
    };
    HorizontalNavBase.prototype.UNSAFE_componentWillReceiveProps = function (nextProps) {
        var itemsChanged = this._hasItemWidthChanged(this.props.items || [], nextProps.items || []);
        var overflowItemsChanged = this._hasItemWidthChanged(this.props.overflowItems || [], nextProps.overflowItems || []);
        if (itemsChanged) {
            this._navItemWidths = undefined;
            this._navItemMargin = undefined;
        }
        if (itemsChanged ||
            overflowItemsChanged ||
            (!this._fixNavEditExperienceKSActivated() &&
                this.state.isEditMode &&
                this.state.isEditMode !== nextProps.isEditMode) ||
            this.props.isEditMode !== nextProps.isEditMode) {
            this.setState(this._getStateFromProps(nextProps));
        }
    };
    HorizontalNavBase.prototype.componentDidUpdate = function (prevProps, prevStates) {
        var overflowItems = this.state.overflowItems;
        var prevOverflowItems = prevStates.overflowItems;
        if ((!this._navItemWidths && !this.state.isEditMode) ||
            (!this._overflowStateChangedKSActive() &&
                overflowItems &&
                (!prevOverflowItems || prevOverflowItems.length !== overflowItems.length)) ||
            (!this._fixNavEditExperienceKSActivated() &&
                prevStates.isEditMode &&
                prevStates.isEditMode !== this.state.isEditMode)) {
            this._updateItemMeasurements();
            this._updateRenderedItems();
        }
        this.props.onRendered && this.props.onRendered(false);
    };
    HorizontalNavBase.prototype.render = function () {
        var _a = this.props, _b = _a.styles, styles = _b === void 0 ? this.props.getStyles : _b, theme = _a.theme;
        this._classNames = getClassNames(styles, { theme: theme });
        var _c = this.state, contextMenuItems = _c.contextMenuItems, isEditMode = _c.isEditMode;
        var useMegaMenu = this._useMegaMenu && this.state.lastTriggeringItem !== OVERFLOW_KEY;
        // each time render the bar, selected state should be re-caliberated
        this._foundSelectedLink = false;
        if (this._fixNavEditExperienceKSActivated() && isEditMode) {
            // in editMode,
            return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null);
        }
        var deferredNavMenu = undefined;
        if (contextMenuItems) {
            if (useMegaMenu) {
                deferredNavMenu = this._getDeferredMegaMenu(this._getMegaMenuProps(contextMenuItems));
            }
            else {
                deferredNavMenu = (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](office_ui_fabric_react_lib_Utilities__WEBPACK_IMPORTED_MODULE_5__["Customizer"], { settings: { theme: Object(office_ui_fabric_react_lib_Styling__WEBPACK_IMPORTED_MODULE_11__["getTheme"])() } }, this._getDeferredContextualMenu(this._getContextualMenuProps(contextMenuItems))));
            }
        }
        var role = this.props.skipRole ? undefined : 'navigation';
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: this._classNames.root, onMouseLeave: !_ms_odsp_utilities_lib_killswitch_Killswitch__WEBPACK_IMPORTED_MODULE_3__["Killswitch"].isActivated('14829911-0e8d-4963-864d-e5f8d0f35149', '11/12/2019', 'Mega menu hover off close') &&
                this.state.lastTriggeringItem !== OVERFLOW_KEY &&
                this._useMegaMenu
                ? this._closeMegaMenu
                : undefined, ref: this._resolveRef('_horizontalNavRegion'), role: role, "aria-label": this.props.ariaLabel },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](office_ui_fabric_react_lib_FocusZone__WEBPACK_IMPORTED_MODULE_4__["FocusZone"], { direction: office_ui_fabric_react_lib_FocusZone__WEBPACK_IMPORTED_MODULE_4__["FocusZoneDirection"].horizontal },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: 'ms-HorizontalNavItems', role: 'menubar' },
                    this._renderHorizontalNavItems(useMegaMenu && deferredNavMenu),
                    this._renderOverflow(),
                    this._renderEditLink())),
            !useMegaMenu && contextMenuItems && deferredNavMenu));
    };
    HorizontalNavBase.prototype._asyncFetch = function (parentKey) {
        var _this = this;
        if (!parent) {
            return Promise.resolve();
        }
        var navDataSource = new _ms_odsp_datasources_lib_ViewNav__WEBPACK_IMPORTED_MODULE_8__["ViewNavDataSource"](this.props.pageContext, "GlobalNavigationSwitchableProvider" /* publishingGlobalNav */);
        navDataSource.getMenuState({ useCache: true, depth: 1, menuNodeKey: parentKey }).then(
        /*complete*/ function (topNavLinkGroup) {
            // update the renderedItems in state
            if ((!isRefineAudienceTargetKillSwitchActivated() || topNavLinkGroup) && topNavLinkGroup.links) {
                _this._UpdateRenderedItemsWithSubmenuItems(parentKey, topNavLinkGroup.links);
            }
        }, 
        /*error*/ function () {
            _this._qosEvent.verbose('HorizontalNav: FetchGlobalNavFailed');
        });
    };
    Object.defineProperty(HorizontalNavBase.prototype, "_useMegaMenu", {
        /**
         * Returns true if mega menu is enabled and the current nav node has 3 levels
         */
        get: function () {
            var useMegaMenu = false;
            if (this.props.ignoreChromeOptions || this.props.chromeOptions === undefined) {
                useMegaMenu = this.props.useMegaMenu;
            }
            else if (this.props.chromeOptions) {
                useMegaMenu = this.props.chromeOptions.nav.megaMenuEnabled;
            }
            return useMegaMenu;
        },
        enumerable: true,
        configurable: true
    });
    HorizontalNavBase.prototype._getDeferredContextualMenu = function (menuProps) {
        var deferredMenuProps = {
            modulePath: 'office-ui-fabric-react/lib/ContextualMenu',
            moduleLoader: {
                load: function () {
                    return Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! office-ui-fabric-react/lib/ContextualMenu */ "u4xd")).then(function (module) {
                        return module.ContextualMenu;
                    });
                }
            },
            props: menuProps
        };
        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ReactDeferredComponent_index__WEBPACK_IMPORTED_MODULE_6__["ReactDeferredComponent"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, deferredMenuProps));
    };
    HorizontalNavBase.prototype._getDeferredMegaMenu = function (menuProps) {
        var deferredMenuProps = {
            modulePath: '../MegaMenu/MegaMenuCallout',
            moduleLoader: {
                load: function () {
                    return __webpack_require__.e(/*! import() | shared-react-mega-menu */ "vendors~shared-react-mega-menu").then(__webpack_require__.bind(null, /*! ../MegaMenu/MegaMenuCallout */ "q8JF")).then(function (module) {
                        return module.MegaMenuCallout;
                    });
                }
            },
            props: menuProps
        };
        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ReactDeferredComponent_index__WEBPACK_IMPORTED_MODULE_6__["ReactDeferredComponent"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, deferredMenuProps));
    };
    HorizontalNavBase.prototype._getDeferredShimmer = function (shimmerProps) {
        var deferredShimmerProps = {
            modulePath: 'office-ui-fabric-react/lib/Shimmer',
            moduleLoader: {
                load: function () {
                    return __webpack_require__.e(/*! import() | fabric-shimmer */ "fabric-shimmer").then(__webpack_require__.bind(null, /*! office-ui-fabric-react/lib/Shimmer */ "dgKW")).then(function (module) { return module.Shimmer; });
                }
            },
            props: shimmerProps
        };
        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ReactDeferredComponent_index__WEBPACK_IMPORTED_MODULE_6__["ReactDeferredComponent"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, deferredShimmerProps));
    };
    HorizontalNavBase.prototype._getDeferredShimmerElementsGroup = function (shimmerGroupProps) {
        var deferredShimmerGroupProps = {
            modulePath: 'office-ui-fabric-react/lib/Shimmer',
            moduleLoader: {
                load: function () {
                    return __webpack_require__.e(/*! import() | fabric-shimmer */ "fabric-shimmer").then(__webpack_require__.bind(null, /*! office-ui-fabric-react/lib/Shimmer */ "dgKW")).then(function (module) {
                        return module.ShimmerElementsGroup;
                    });
                }
            },
            props: shimmerGroupProps
        };
        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ReactDeferredComponent_index__WEBPACK_IMPORTED_MODULE_6__["ReactDeferredComponent"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, deferredShimmerGroupProps));
    };
    HorizontalNavBase.prototype._getContextualMenuProps = function (menuItems) {
        return {
            className: 'ms-HorizontalNav',
            labelElementId: this._instanceIdPrefix + OVERFLOW_KEY,
            items: this._getContextualItemProps(menuItems),
            target: this.state.contextMenuRef,
            onDismiss: this._onNavMenuDismiss,
            gapSpace: 10,
            isBeakVisible: false,
            directionalHint: office_ui_fabric_react_lib_common_DirectionalHint__WEBPACK_IMPORTED_MODULE_7__["DirectionalHint"].bottomLeftEdge,
            shouldFocusOnMount: true
        };
    };
    HorizontalNavBase.prototype._getMegaMenuProps = function (menuItems) {
        var _this = this;
        return {
            layoutProps: {
                maxColumnCount: MEGAMENU_MAX_COLUMN,
                showDivider: true,
                gridSpacingFromEdge: MEGAMENU_EDGE_SPACING,
                enforceGridWidth: true
            },
            onDismiss: this._onNavMenuDismiss,
            onItemClick: this._onNavMenuDismiss,
            target: this.state.contextMenuRef,
            shouldFocusOnMount: this.state.lastTriggeringAction === 0 /* KeyPress */,
            pageContext: this.props.pageContext,
            theme: Object(office_ui_fabric_react_lib_Styling__WEBPACK_IMPORTED_MODULE_11__["getTheme"])(),
            sections: menuItems.map(function (menuItem) {
                return {
                    heading: {
                        name: menuItem.name,
                        url: menuItem.url,
                        target: menuItem.target,
                        onClick: menuItem.onClick
                    },
                    items: menuItem.links && _this._getContextualItemProps(menuItem.links),
                    theme: Object(office_ui_fabric_react_lib_Styling__WEBPACK_IMPORTED_MODULE_11__["getTheme"])()
                };
            }),
            navigationSource: this.props.navigationSource
        };
    };
    /**
     * @inheritDoc
     * @see IHorizontalNav.measureLayout()
     */
    HorizontalNavBase.prototype.measureLayout = function () {
        this._updateItemMeasurements();
        this._updateRenderedItems();
    };
    HorizontalNavBase.prototype._getContextualItemProps = function (links, level) {
        var _this = this;
        if (level === void 0) { level = 0; }
        return links
            .filter(function (link) { return !!link && link.key !== "1033" /* quickLaunchRecent */; })
            .map(function (link) {
            var hasSublinks = _hasSublinks(link);
            var hasOnDemandSublinks = _hasOndemandSublinks(link);
            var shimmerSubMenuItems = [];
            if (hasOnDemandSublinks) {
                // need to add its parent node key.
                shimmerSubMenuItems.push({
                    key: 'shimmerItem',
                    text: 'shimmer',
                    data: link.key,
                    onRender: _this._renderShimmer
                });
            }
            var menuItem;
            var target = _ms_odsp_datasources_lib_ViewNav__WEBPACK_IMPORTED_MODULE_8__["ViewNavDataSource"].shouldLinkOpenInSameWindow(link.url) ? '_self' : '_blank';
            var itemOnClick = link.onClick
                ? function (ev) {
                    link.onClick(ev, link);
                    if (!_this._isLinkPropagateKSActive()) {
                        return true;
                    }
                }
                : function (ev) {
                    if (!_this._isLinkPropagateKSActive()) {
                        return true;
                    }
                };
            menuItem = {
                key: _getKey(link),
                name: link.name,
                split: hasSublinks || hasOnDemandSublinks,
                target: target,
                href: hasSublinks || hasOnDemandSublinks || HorizontalNavBase._isHeader(link.url)
                    ? undefined
                    : link.url,
                onClick: itemOnClick,
                subMenuProps: hasSublinks
                    ? {
                        items: _this._getContextualItemProps(link.links, level + 1)
                    }
                    : hasOnDemandSublinks
                        ? {
                            items: shimmerSubMenuItems
                        }
                        : undefined
            };
            if ((hasSublinks || hasOnDemandSublinks) && !HorizontalNavBase._isHeader(link.url)) {
                menuItem.onClick = function () {
                    if (_this._inPlaceNavEnabled) {
                        window.postMessage("router://" + link.url, window.location.origin);
                    }
                    else {
                        window.open(link.url, target);
                        link.forceAnchor && link.onClick && link.onClick();
                    }
                };
            }
            return menuItem;
        });
    };
    HorizontalNavBase.prototype._renderHorizontalNavItems = function (subItemMenu) {
        var _this = this;
        var renderedItems = this.state.renderedItems;
        if (!renderedItems || renderedItems.length === 0) {
            return;
        }
        return renderedItems.map(function (item) {
            var key = _getKey(item);
            var popupHover = _this._useMegaMenu
                ? _this._getItemHoverMegaMenuCallback(item)
                : _this._boundMainItemHover[key] || _this._getItemHoverCallback(item);
            var popupClose = _this._useMegaMenu ? _this._onNavMenuDismiss : _this._onMouseLeave;
            var submenuAriaLabel = _ms_odsp_utilities_lib_string_StringHelper__WEBPACK_IMPORTED_MODULE_12__["format"](_this.props.splitButtonAriaLabel, item.name);
            var isLinkSelected;
            // there should be one selected Link at given time, once locate selected link, no need to continue waste time to try every other node.
            if (!_ms_odsp_utilities_lib_killswitch_Killswitch__WEBPACK_IMPORTED_MODULE_3__["Killswitch"].isActivated('70ce4e23-8db2-4c57-840b-639317332050', '7/23/20', 'compute Selected link includes its children')) {
                isLinkSelected = _this.props.hasSelectedState
                    ? _this._foundSelectedLink
                        ? false
                        : _this._isLinkSelected(item)
                    : false;
                if (isLinkSelected) {
                    _this._foundSelectedLink = true;
                }
            }
            else {
                isLinkSelected = _this.props.hasSelectedState ? _this._isLinkSelected(item) : false;
            }
            return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", { className: 'ms-HorizontalNavItem', "data-automationid": 'HorizontalNav-link', key: key, ref: _this._resolvedElement(key) },
                _this._shouldRenderAsAnchor(item)
                    ? _this._renderAnchorLink(item, key, popupHover, popupClose, isLinkSelected)
                    : _this._renderButtonLink(item, key, popupHover, popupClose, isLinkSelected),
                _hasSublinks(item) ? (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("button", { className: Object(office_ui_fabric_react_lib_Utilities__WEBPACK_IMPORTED_MODULE_5__["css"])('ms-HorizontalNavItem-splitbutton', _this._classNames.splitButton, {
                        'ms-HorizontalNavItem-splitbutton-width': !_this._chevronSpacingHardcodedKSActive()
                    }), onClick: _this._getItemClickCallback(item), onMouseEnter: popupHover, onMouseLeave: _this._onMouseLeave, "aria-label": submenuAriaLabel, "aria-expanded": !!_this.state.contextMenuItems, onKeyDown: _this._getKeyPressCallback(item), role: 'menuitem' },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](office_ui_fabric_react_lib_Icon__WEBPACK_IMPORTED_MODULE_9__["Icon"], { iconName: 'ChevronDown', className: Object(office_ui_fabric_react_lib_Utilities__WEBPACK_IMPORTED_MODULE_5__["css"])('ms-HorizontalNav-chevronDown', _this._classNames.chevron) }))) : null,
                _this.state.contextMenuItems === item.links && subItemMenu));
        });
    };
    HorizontalNavBase.prototype._renderAnchorLink = function (item, key, popupHover, popupClose, isLinkSelected) {
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("a", { className: Object(office_ui_fabric_react_lib_Utilities__WEBPACK_IMPORTED_MODULE_5__["css"])('ms-HorizontalNavItem-link', { 'is-selected': isLinkSelected }, { 'is-not-selected': !isLinkSelected }, this._classNames.link, isLinkSelected ? this._classNames.linkSelected : this._classNames.linkUnselected), href: item.url, "aria-label": item.ariaLabel, onMouseEnter: popupHover, onMouseLeave: popupClose, onKeyDown: this._getKeyPressCallback(item), onClick: item.onClick ? this._boundItemClick[key] : undefined, role: 'menuitem', target: _ms_odsp_datasources_lib_ViewNav__WEBPACK_IMPORTED_MODULE_8__["ViewNavDataSource"].shouldLinkOpenInSameWindow(item.url) ? '_self' : '_blank', rel: 'noopener', "aria-current": isLinkSelected ? 'page' : undefined, "data-navigationcomponent": Object(_common_telemetry_NavigationSource__WEBPACK_IMPORTED_MODULE_16__["getNavComponentLabel"])(this.props.navigationSource) }, item.name));
    };
    HorizontalNavBase.prototype._shouldRenderAsAnchor = function (item) {
        return (item.forceAnchor || item.forceAnchor === undefined) && !HorizontalNavBase._isHeader(item.url);
    };
    HorizontalNavBase.prototype._renderButtonLink = function (item, key, popupHover, popupClose, isLinkSelected) {
        var isHeader = HorizontalNavBase._isHeader(item.url);
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("button", { className: Object(office_ui_fabric_react_lib_Utilities__WEBPACK_IMPORTED_MODULE_5__["css"])('ms-HorizontalNavItem-link', { 'is-selected': isLinkSelected }, { 'is-header': isHeader }, this._classNames.link, isLinkSelected ? this._classNames.linkSelected : this._classNames.linkUnselected), "aria-label": item.ariaLabel, onClick: this._boundItemClick[key] || this._getItemClickCallback(item), onMouseEnter: popupHover, onMouseLeave: popupClose, onKeyDown: this._getKeyPressCallback(item), "aria-haspopup": _hasSublinks(item), disabled: isHeader, "aria-current": 'page', role: 'menuitem', "data-navigationcomponent": Object(_common_telemetry_NavigationSource__WEBPACK_IMPORTED_MODULE_16__["getNavComponentLabel"])(this.props.navigationSource) }, item.name));
    };
    HorizontalNavBase.prototype._renderOverflow = function () {
        var _a = this.state, overflowItems = _a.overflowItems, lastTriggeringItem = _a.lastTriggeringItem;
        var ariaLabel = this.props.moreOptionsAriaLabel || _HorizontalNav_resx__WEBPACK_IMPORTED_MODULE_17___default.a.moreOptionsAriaLabel;
        return overflowItems && overflowItems.length ? (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: 'ms-HorizontalNavItem', key: OVERFLOW_KEY, ref: this._resolveRef('_overflowElementRef'), "data-automationid": 'HorizontalNav-overflow' },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("button", { id: this._instanceIdPrefix + OVERFLOW_KEY, "aria-label": ariaLabel, className: Object(office_ui_fabric_react_lib_Utilities__WEBPACK_IMPORTED_MODULE_5__["css"])('ms-HorizontalNavItem-link', this._classNames.link, this._classNames.overflowButton), onClick: this._onOverflowClick, "aria-haspopup": true, "aria-expanded": lastTriggeringItem === OVERFLOW_KEY, onKeyDown: this._getKeyPressCallback(OVERFLOW_KEY), role: 'menuitem' },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](office_ui_fabric_react_lib_Icon__WEBPACK_IMPORTED_MODULE_9__["Icon"], { iconName: 'More', className: 'ms-HorizontalNavItem-overflow' })))) : null;
    };
    HorizontalNavBase.prototype._renderEditLink = function () {
        var _a = this.props, editLink = _a.editLink, isEditMode = _a.isEditMode;
        var isInTeamsMode = window['teamsCustomAppType'] === 'portals' ? true : false;
        return editLink && !isEditMode && !isInTeamsMode ? (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: 'ms-HorizontalNavItem', ref: this._resolveRef('_editLinkElementRef'), "data-automationid": 'HorizontalNav-edit' },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("button", { id: this._instanceIdPrefix + EDITLINK_KEY, className: Object(office_ui_fabric_react_lib_Utilities__WEBPACK_IMPORTED_MODULE_5__["css"])('ms-HorizontalNavItem-link', this._classNames.link, this._classNames.editButton), onClick: this._onEditClick, "aria-label": editLink.ariaLabel ? editLink.ariaLabel : editLink.name }, editLink.name))) : null;
    };
    HorizontalNavBase.prototype._updateItemMeasurements = function () {
        this._currentOverflowWidth =
            this._overflowElementRef || (this.props.overflowItems && this.props.overflowItems.length)
                ? OVERFLOW_WIDTH
                : 0;
        if (this._editLinkWidth === -1 && this.props.editLink && this._editLinkElementRef) {
            this._editLinkWidth = this._getElementWidth(this._editLinkElementRef, this._getElementMargin(this._editLinkElementRef));
        }
        if (!this._navItemWidths) {
            this._navItemWidths = {};
        }
        for (var _i = 0, _a = this.state.items; _i < _a.length; _i++) {
            var item = _a[_i];
            var key = _getKey(item);
            var element = this._horizontalNavItemsRef[key];
            if (this._navItemMargin === undefined) {
                this._navItemMargin = this._getElementMargin(element);
            }
            if (!this._navItemWidths[key]) {
                this._navItemWidths[key] = this._getElementWidth(element, this._navItemMargin);
            }
        }
    };
    HorizontalNavBase.prototype._getElementWidth = function (element, margin) {
        return element ? element.getBoundingClientRect().width + margin : 0;
    };
    HorizontalNavBase.prototype._getElementMargin = function (element) {
        return parseInt(Object(office_ui_fabric_react_lib_Utilities__WEBPACK_IMPORTED_MODULE_5__["getRTL"])() ? window.getComputedStyle(element).marginLeft : window.getComputedStyle(element).marginRight, 10);
    };
    HorizontalNavBase.prototype._updateRenderedItems = function () {
        if (!this._horizontalNavRegion) {
            // component hasn't mounted yet... it will automatically call here in componentDidMount
            return;
        }
        this._UpdateRenderedItemsCore(this.state.items);
    };
    HorizontalNavBase.prototype._UpdateRenderedItemsCore = function (items) {
        var renderedItems = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(items);
        var availableWidth = this._horizontalNavRegion.clientWidth - this._currentOverflowWidth - this._editLinkWidth;
        var overflowItemsToRender = this.props.overflowItems || [];
        var consumedWidth = 0;
        var reRenderNeeded = false;
        for (var i = 0; i < renderedItems.length; i++) {
            var key = _getKey(renderedItems[i]);
            var itemWidth = this._navItemWidths[key];
            if (consumedWidth + itemWidth >= availableWidth) {
                // Not enough room to render this item
                if (i > 0 && overflowItemsToRender.length === 0 && availableWidth - consumedWidth < OVERFLOW_WIDTH) {
                    // If we render the previous item, there won't be enough room for the ...
                    // so also put the previous item in the overflow
                    i--;
                }
                overflowItemsToRender = renderedItems.splice(i).concat(overflowItemsToRender);
                reRenderNeeded = true;
                break;
            }
            else {
                consumedWidth += itemWidth;
            }
        }
        if (reRenderNeeded) {
            this.setState({
                renderedItems: renderedItems,
                overflowItems: overflowItemsToRender
            });
        }
    };
    HorizontalNavBase.prototype._UpdateRenderedItemsWithSubmenuItems = function (parentKey, subItems) {
        var items = this.state.items;
        this._InsertItemsWithSubmenuItems(items, parentKey, subItems);
        this._UpdateRenderedItemsCore(items);
    };
    HorizontalNavBase.prototype._InsertItemsWithSubmenuItems = function (items, parentKey, subItems) {
        if (!items || !parent || !subItems) {
            return false;
        }
        var found = false;
        // all the top 2 levels nodes already here, we only try to insert the
        // level 3 or above sublinks into renderedItems so per-DOM update, it only get load once.
        // if node does not have level 3 above node, contine.
        for (var i = 0; i < items.length; i++) {
            if (items[i].key === parentKey) {
                items[i].links = subItems;
                found = true;
                break;
            }
            if (items[i].links && items[i].links.length > 0) {
                // recursive search child links
                if (this._InsertItemsWithSubmenuItems(items[i].links, parentKey, subItems)) {
                    found = true;
                    break;
                }
            }
        }
        return found;
    };
    HorizontalNavBase.prototype._onAnchorClick = function (item, ev) {
        // whever nav link is clicked, need to re-caliberate selected state.
        this._foundSelectedLink = false;
        // Let the anchor link navigate as usual, but also run onClick if provided
        // (for example, it might be provided for logging)
        if (item.onClick) {
            item.onClick(ev, item);
        }
    };
    HorizontalNavBase.prototype._onItemClick = function (item, ev) {
        // whever nav link is clicked, need to re-caliberate selected state.
        this._foundSelectedLink = false;
        if (this._navItemHoverTimerId) {
            this._async.clearTimeout(this._navItemHoverTimerId);
        }
        ev.stopPropagation();
        ev.preventDefault();
        if (this.state.contextMenuItems || this.state.lastTriggeringItem === item) {
            this.setState({ lastTriggeringItem: null });
            this._onNavMenuDismiss();
            return;
        }
        else if (ev.target.tagName === 'I') {
            this._openSubMenu(item.links, ev.currentTarget, item, 2 /* Click */);
            return;
        }
        if (item.onClick) {
            item.onClick(ev, item);
        }
        else if (!HorizontalNavBase._isHeader(item.url)) {
            window.open(item.url, _ms_odsp_datasources_lib_ViewNav__WEBPACK_IMPORTED_MODULE_8__["ViewNavDataSource"].shouldLinkOpenInSameWindow(item.url) ? '_self' : '_blank');
        }
    };
    HorizontalNavBase.prototype._onMainItemHover = function (item, ev) {
        var _this = this;
        if (!HorizontalNavBase._isHeader(item.url)) {
            window.status = item.url;
        }
        ev.stopPropagation();
        ev.preventDefault();
        var target = ev.currentTarget;
        if (_hasSublinks(item)) {
            this._navItemHoverTimerId = this._async.setTimeout(function () {
                if (_this.state.contextMenuItems !== item.links) {
                    if (_this.state.contextMenuItems) {
                        _this._onNavMenuDismiss();
                    }
                    _this._openSubMenu(item.links, target, item, 1 /* Hover */);
                }
            }, 500);
        }
    };
    HorizontalNavBase.prototype._onMainItemHoverMegaMenu = function (item, ev) {
        if (!HorizontalNavBase._isHeader(item.url)) {
            window.status = item.url;
        }
        ev.stopPropagation();
        ev.preventDefault();
        if (_hasSublinks(item) && this.state.contextMenuItems !== item.links) {
            if (this.state.contextMenuItems) {
                this._onNavMenuDismiss();
            }
            this._openSubMenu(item.links, ev.currentTarget, item, 1 /* Hover */);
        }
        else if (!_hasSublinks(item)) {
            this._onNavMenuDismiss();
        }
    };
    HorizontalNavBase.prototype._handleKeyPress = function (item, ev) {
        if (ev.which === 32 /* space */ ||
            ev.which === 40 /* down */ ||
            (ev.which === 13 /* enter */ &&
                ev.target &&
                ev.target.className.indexOf('ms-HorizontalNavItem-splitbutton') !== -1)) {
            ev.stopPropagation();
            ev.preventDefault();
            if (item === OVERFLOW_KEY) {
                this._openSubMenu(this.state.overflowItems, ev.target, item, 0 /* KeyPress */);
            }
            else {
                this._openSubMenu(item.links, ev.target, item, 0 /* KeyPress */);
            }
        }
    };
    HorizontalNavBase.prototype._openSubMenu = function (items, target, triggerItem, triggerAction) {
        office_ui_fabric_react_lib_Utilities__WEBPACK_IMPORTED_MODULE_5__["EventGroup"].raise(window, HorizontalNavBase.SUBMENU_OPEN_EVENT);
        if (target.className.indexOf('ms-HorizontalNavItem-splitbutton') !== -1 ||
            (target.tagName === 'i' && triggerItem !== OVERFLOW_KEY)) {
            var t = target;
            while (t && t.tagName.toLowerCase() !== 'span') {
                t = t.parentElement;
            }
            if (t && t.children && t.children.length > 0) {
                target = t.children[0];
            }
        }
        this.setState({
            lastTriggeringItem: triggerItem,
            contextMenuItems: items,
            contextMenuRef: target,
            lastTriggeringAction: triggerAction
        });
    };
    HorizontalNavBase.prototype._isAudienceTargeted = function () {
        if (!this.props || !this.props.pageContext) {
            return false;
        }
        var audiencesDataSource = _ms_odsp_datasources_lib_ViewNav__WEBPACK_IMPORTED_MODULE_8__["AudiencesDataSource"].getInstance(this.props.pageContext);
        var navDataSource = new _ms_odsp_datasources_lib_ViewNav__WEBPACK_IMPORTED_MODULE_8__["ViewNavDataSource"](this.props.pageContext, "GlobalNavigationSwitchableProvider" /* publishingGlobalNav */);
        return (this.props.pageContext &&
            this.props.isAudienceTargeted &&
            (isCheckNavAudienceTargetInViewNavKillSwitchActivated()
                ? audiencesDataSource.isAudienceTargetedNavEnabledBasedOnWebProperty()
                : navDataSource.isNavAudienceTargetedEnabled()));
    };
    HorizontalNavBase.prototype._applyInitialAudienceTargeting = function () {
        var _this = this;
        var audiencesDataSource = _ms_odsp_datasources_lib_ViewNav__WEBPACK_IMPORTED_MODULE_8__["AudiencesDataSource"].getInstance(this.props.pageContext);
        audiencesDataSource
            .getCurrentUserMemberships('SiteNav')
            .then(function (memberships) {
            _this._audienceMemberships = memberships;
            if (isRefineSiteNavLoggingKillSwitchActivated()) {
                _this._isMounted
                    ? _this.setState(_this._getStateFromProps(_this.props))
                    : (_this.state = _this._getStateFromProps(_this.props));
            }
            else {
                var newState = _this._getStateFromProps(_this.props);
                if (_this._isMounted) {
                    _this.setState(newState);
                }
                else {
                    _this.state = newState;
                }
                _ms_odsp_utilities_lib_logging_events_Engagement_event__WEBPACK_IMPORTED_MODULE_15__["Engagement"].logData({
                    name: 'SiteNav.Render',
                    extraData: {
                        audienceTargetingEnabled: true,
                        audienceTargetingProvided: _ms_odsp_datasources_lib_ViewNav__WEBPACK_IMPORTED_MODULE_8__["AudiencesDataSource"].containsAudienceTargetedNode(_this.props.items),
                        audienceTargetingAffected: _ms_odsp_datasources_lib_ViewNav__WEBPACK_IMPORTED_MODULE_8__["ViewNavDataSource"].checkIfLinksAffected(_this.props.items, newState.items)
                    }
                });
            }
        })
            .catch(function () {
            // filter out any nodes with audience set
            _this.setState(_this._getStateFromProps(_this.props));
        });
    };
    HorizontalNavBase.prototype._getStateFromProps = function (props) {
        var overflowItems = props.overflowItems, isEditMode = props.isEditMode;
        var items = this._isAudienceTargeted()
            ? _ms_odsp_datasources_lib_ViewNav__WEBPACK_IMPORTED_MODULE_8__["AudiencesDataSource"].filterLinksWithMemberships(props.items, this._audienceMemberships)
            : props.items;
        this._boundItemClick = {};
        this._boundMainItemHover = {};
        items = items || [];
        for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
            var item = items_1[_i];
            var key = _getKey(item);
            this._boundItemClick[key] = this._shouldRenderAsAnchor(item)
                ? this._getAnchorClickCallback(item)
                : this._getItemClickCallback(item);
            this._boundMainItemHover[key] = this._getItemHoverCallback(item);
        }
        return {
            renderedItems: items,
            overflowItems: overflowItems || [],
            contextMenuItems: null,
            isEditMode: isEditMode,
            selectedKey: undefined,
            items: items
        };
    };
    HorizontalNavBase.prototype._isLinkSelected = function (link) {
        // This function should return TRUE if link or link's children matches current SelectedKey!
        // If props defines selectedKey, use it as first choice for comparsion; or
        // If current state.selectedKey is defined and it is matching to the link.
        // Otherwise create <a> with link.url and comparing it with current addressbar value.
        //
        if (!_ms_odsp_utilities_lib_killswitch_Killswitch__WEBPACK_IMPORTED_MODULE_3__["Killswitch"].isActivated('70ce4e23-8db2-4c57-840b-639317332050', '7/23/20', 'compute Selected link includes its children')) {
            selectedKey = this.props.selectedKey || this.state.selectedKey;
            return _isLinkOrChildSelected(link);
        }
        else {
            if (this.props.selectedKey !== undefined) {
                return link.key === this.props.selectedKey;
            }
            else if (this.state.selectedKey !== undefined && link.key === this.state.selectedKey) {
                return true;
            }
            // resolve is not supported for ssr
            if (typeof window === 'undefined') {
                return false;
            }
            if (HorizontalNavBase._isHeader(link.url)) {
                return false;
            }
            _urlResolverForHNav = _urlResolverForHNav || document.createElement('a');
            _urlResolverForHNav.href = link.url || '';
            var target = _isLinkComparisonKSActive()
                ? _urlResolverForHNav.href
                : _urlResolverForHNav.href.toLowerCase();
            var target2 = _isLinkComparisonKSActive()
                ? target + '/SitePages/Home.aspx'
                : (target + '/SitePages/Home.aspx').toLowerCase();
            var locationHref = _isLinkComparisonKSActive() ? location.href : location.href.toLowerCase();
            if (locationHref === target || locationHref === target2) {
                return true;
            }
            var locationString = _isLinkComparisonKSActive()
                ? location.protocol + "//" + location.host + location.pathname
                : (location.protocol + "//" + location.host + location.pathname).toLowerCase();
            if (locationString === target || locationString === target2) {
                return true;
            }
            if (location.hash) {
                // Match the hash to the url.
                if (location.hash === link.url) {
                    return true;
                }
                // Match a rebased url. (e.g. #foo becomes http://hostname/foo)
                _urlResolverForHNav.href = location.hash.substring(1);
                return _urlResolverForHNav.href === target;
            }
            return false;
        }
    };
    HorizontalNavBase.prototype._isCompareNestedLinksKSActivated = function () {
        return _ms_odsp_utilities_lib_killswitch_Killswitch__WEBPACK_IMPORTED_MODULE_3__["Killswitch"].isActivated('1df78d95-7807-4ad1-8af8-9bb521fe1d3d', '11/23/2020', 'Compare nested horizontal nav links');
    };
    HorizontalNavBase.prototype._hasItemWidthChanged = function (prevItems, nextItems) {
        var _this = this;
        return (prevItems.length !== nextItems.length ||
            prevItems
                .map(function (link, index) {
                var nextLink = nextItems[index];
                if (_this._isCompareNestedLinksKSActivated()) {
                    // title changed or one has children the other not
                    return (link.name !== nextLink.name || ((link.links || []).length ^ (nextLink.links || []).length) === 1);
                }
                else {
                    if (link.name !== nextLink.name) {
                        return true;
                    }
                    else if (!link.links && !nextLink.links) {
                        // neither has links
                        return false;
                    }
                    else if ((link.links || []).length !== (nextLink.links || []).length) {
                        // only one has links, or both has links but in different numbers
                        return true;
                    }
                    else {
                        // have same number of links - check if they match 1 to 1
                        for (var i = 0; i < link.links.length; i++) {
                            if (link.links[i].name !== nextLink.links[i].name) {
                                return true;
                            }
                        }
                        return false;
                    }
                }
            })
                .reduce(function (acc, value) { return acc || value; }, false));
    };
    HorizontalNavBase.prototype._fixNavEditExperienceKSActivated = function () {
        return _ms_odsp_utilities_lib_killswitch_Killswitch__WEBPACK_IMPORTED_MODULE_3__["Killswitch"].isActivated('30b9a746-134f-4465-8f2c-f38c2440159a', '03/02/2020', 'fix nav edit experience');
    };
    HorizontalNavBase.prototype._chevronSpacingHardcodedKSActive = function () {
        return _ms_odsp_utilities_lib_killswitch_Killswitch__WEBPACK_IMPORTED_MODULE_3__["Killswitch"].isActivated('9ab54c9f-d74c-4739-82ad-0cc1696009e5', '4/10/2020', 'hardcode the widths of horizontalNav chevron icons');
    };
    HorizontalNavBase.prototype._overflowStateChangedKSActive = function () {
        return _ms_odsp_utilities_lib_killswitch_Killswitch__WEBPACK_IMPORTED_MODULE_3__["Killswitch"].isActivated('34034F80-F8DD-4FB2-99B2-A2931D4FC65F', '4/22/2020', 'update item measurements when horizontal nav overflow changes');
    };
    HorizontalNavBase.prototype._isLinkPropagateKSActive = function () {
        return _ms_odsp_utilities_lib_killswitch_Killswitch__WEBPACK_IMPORTED_MODULE_3__["Killswitch"].isActivated('ce44885f-f77b-48b2-8391-af0256fb0a0f', '8/12/2020', 'allow link propagation for ContextualMenu links');
    };
    HorizontalNavBase.prototype._isMegaMenuWindowHoverKSActive = function () {
        return _ms_odsp_utilities_lib_killswitch_Killswitch__WEBPACK_IMPORTED_MODULE_3__["Killswitch"].isActivated('d99fe3c5-d732-47ef-a423-62ee2e86a2fc', '9/15/2020', 'close MegaMenu when moving mouse over suite nav or out of window');
    };
    HorizontalNavBase.SUBMENU_OPEN_EVENT = 'submenu_open';
    HorizontalNavBase.MENU_WIDTH = 200; // random width you wanna have for when rendering the Shimmer lines.
    HorizontalNavBase.MENU_ITEM_SIDE_MARGIN = 8; // to match the margin on contextualMenuItems
    HorizontalNavBase.MENU_ITEM_HEIGHT = 32; // to match fabric menuItem height
    return HorizontalNavBase;
}(office_ui_fabric_react_lib_Utilities__WEBPACK_IMPORTED_MODULE_5__["BaseComponent"]));

function _hasSublinks(link) {
    return !!(link && link.links && link.links.length);
}
function _hasOndemandSublinks(link) {
    return !!link && link.hasChildLinks;
}
function _isLinkComparisonKSActive() {
    return _ms_odsp_utilities_lib_killswitch_Killswitch__WEBPACK_IMPORTED_MODULE_3__["Killswitch"].isActivated('8a8d92e8-6c30-46d8-aa0b-7c6e761cc1ee', '5/1/2020', 'make the selected url logic case insensitive');
}
var selectedKey;
function _isMatchingSelectedKey(link) {
    if (link.key === selectedKey) {
        return true;
    }
    else if (_hasSublinks(link)) {
        return link.links.some(_isMatchingSelectedKey);
    }
    return false;
}
function _isLinkOrChildSelected(link) {
    if (selectedKey !== undefined) {
        return _isMatchingSelectedKey(link);
    }
    // resolve is not supported for ssr
    if (typeof window === 'undefined') {
        return false;
    }
    if (HorizontalNavBase._isHeader(link.url)) {
        if (_hasSublinks(link)) {
            return link.links.some(_isLinkOrChildSelected);
        }
        return false;
    }
    _urlResolverForHNav = _urlResolverForHNav || document.createElement('a');
    _urlResolverForHNav.href = link.url || '';
    var target = _isLinkComparisonKSActive()
        ? _urlResolverForHNav.href
        : _urlResolverForHNav.href.toLowerCase();
    var target2 = _isLinkComparisonKSActive()
        ? target + '/SitePages/Home.aspx'
        : (target + '/SitePages/Home.aspx').toLowerCase();
    var locationHref = _isLinkComparisonKSActive() ? location.href : location.href.toLowerCase();
    if (locationHref === target || locationHref === target2) {
        return true;
    }
    var locationString = _isLinkComparisonKSActive()
        ? location.protocol + "//" + location.host + location.pathname
        : (location.protocol + "//" + location.host + location.pathname).toLowerCase();
    if (locationString === target || locationString === target2) {
        return true;
    }
    if (location.hash) {
        // Match the hash to the url.
        if (location.hash === link.url) {
            return true;
        }
        // Match a rebased url. (e.g. #foo becomes http://hostname/foo)
        _urlResolverForHNav.href = location.hash.substring(1);
        if (_urlResolverForHNav.href === target) {
            return true;
        }
    }
    if (_hasSublinks(link)) {
        return link.links.some(_isLinkOrChildSelected);
    }
    return false;
}
function isRefineSiteNavLoggingKillSwitchActivated() {
    return _ms_odsp_utilities_lib_killswitch_Killswitch__WEBPACK_IMPORTED_MODULE_3__["Killswitch"].isActivated('0123f94e-245a-4fca-a866-b5ebd969abe9', '2020-08-06', 'Refine audience targeting logging for header nav');
}
function subLinkInPlaceNavKillSwitchActivated() {
    return _ms_odsp_utilities_lib_killswitch_Killswitch__WEBPACK_IMPORTED_MODULE_3__["Killswitch"].isActivated('fcf17a35-9f5b-41a0-a61c-012617651178', '2020-08-17', 'Fire post-message for sub-links for in-place nav');
}
function isRefineAudienceTargetKillSwitchActivated() {
    return _ms_odsp_utilities_lib_killswitch_Killswitch__WEBPACK_IMPORTED_MODULE_3__["Killswitch"].isActivated('1cd2d1c9-fdc8-4110-a71e-e8125063dd90', '2020-09-01', 'Refine the audience targeting logging');
}
function isCheckNavAudienceTargetInViewNavKillSwitchActivated() {
    return _ms_odsp_utilities_lib_killswitch_Killswitch__WEBPACK_IMPORTED_MODULE_3__["Killswitch"].isActivated('71980d68-1e8b-44e4-84a5-19370f97ec10'
    /* '2020-12-15', 'Leverage the check nav audience target method from ViewNavDataSource' */
    );
}
//# sourceMappingURL=HorizontalNav.base.js.map

/***/ }),

/***/ "0+mA":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-shared-react@47.12.13_d89e40c38ccaa8bd6af6488f37cb196d/node_modules/@ms/odsp-shared-react/lib/containers/compositeHeader/StateManager.Props.js ***!
  \***************************************************************************************************************************************************************************************************************/
/*! exports provided: GroupCardLinkTypes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupCardLinkTypes", function() { return GroupCardLinkTypes; });
/**
 * Enum to specify what kind of link this is.
 * @public
 */
var GroupCardLinkTypes;
(function (GroupCardLinkTypes) {
    // do not change the order of these enums. It's used as an index into the
    // the map array GROUP_CARD_LINK_TYPES_MAP in StateManager.ts
    GroupCardLinkTypes[GroupCardLinkTypes["mail"] = 0] = "mail";
    GroupCardLinkTypes[GroupCardLinkTypes["calendar"] = 1] = "calendar";
    GroupCardLinkTypes[GroupCardLinkTypes["docs"] = 2] = "docs";
    GroupCardLinkTypes[GroupCardLinkTypes["notebook"] = 3] = "notebook";
    GroupCardLinkTypes[GroupCardLinkTypes["site"] = 4] = "site";
    GroupCardLinkTypes[GroupCardLinkTypes["peopleUrl"] = 5] = "peopleUrl";
    GroupCardLinkTypes[GroupCardLinkTypes["planner"] = 6] = "planner";
})(GroupCardLinkTypes || (GroupCardLinkTypes = {}));
//# sourceMappingURL=StateManager.Props.js.map

/***/ }),

/***/ "0oKP":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-shared-react@47.12.13_d89e40c38ccaa8bd6af6488f37cb196d/node_modules/@ms/odsp-shared-react/lib/components/HubNav/HubNav.scss.js ***!
  \***********************************************************************************************************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _microsoft_load_themed_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/load-themed-styles */ "jOlS");
/* harmony import */ var _microsoft_load_themed_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_load_themed_styles__WEBPACK_IMPORTED_MODULE_0__);
/* tslint:disable */

Object(_microsoft_load_themed_styles__WEBPACK_IMPORTED_MODULE_0__["loadStyles"])([{ "rawString": ".ms-HubNav{-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-sizing:border-box;box-sizing:border-box;padding:8px 32px;line-height:24px}.ms-HubNav .ms-HorizontalNav{-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;min-width:0;display:-webkit-box;display:-ms-flexbox;display:flex}.ms-HubNav .ms-HorizontalNav .ms-ContextualMenu-itemText{font-size:" }, { "theme": "mediumFontSize", "defaultValue": "14px" }, { "rawString": ";font-weight:" }, { "theme": "mediumFontWeight", "defaultValue": "400" }, { "rawString": "}.ms-HubNav .ms-HorizontalNav .ms-HorizontalNavItem-link.is-not-selected,.ms-HubNav .ms-HorizontalNav .ms-HorizontalNavItem-link.is-header{padding:0px}.ms-HubNav-enhancedMegaMenu{line-height:20px}.ms-HubNav-enhancedMegaMenu button{line-height:20px}.ms-HubNav-link{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;min-width:0;text-decoration:none;white-space:nowrap}[dir='ltr'] .ms-HubNav-link{margin-right:20px}[dir='rtl'] .ms-HubNav-link{margin-left:20px}html[dir='ltr'] .ms-HubNav-link :nth-child(2){margin-left:8px}html[dir='rtl'] .ms-HubNav-link :nth-child(2){margin-right:8px}.ms-HubNav-logo{height:24px}.sp-App-hubNav.sp-App-hubNav{height:auto}\n" }]);
//# sourceMappingURL=HubNav.scss.js.map

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

/***/ "1Dzy":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-shared-react@47.12.13_d89e40c38ccaa8bd6af6488f37cb196d/node_modules/@ms/odsp-shared-react/lib/components/CompositeHeader/subComponents/FollowButton.resx.js ***!
  \****************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var strings = {"followedAriaLabel":"Ƒōĺĺōŵĩńĝ","notFollowedAriaLabel":"Ńōţ ƒōĺĺōŵĩńĝ","followedHoverText":"Ćũŕŕēńţĺŷ ƒōĺĺōŵĩńĝ ţĥē śĩţē, ćĺĩćķ ţō śţōƥ ƒōĺĺōŵĩńĝ","notFollowedHoverText":"Ćũŕŕēńţĺŷ ńōţ ƒōĺĺōŵĩńĝ ţĥē śĩţē, ćĺĩćķ ţō ƒōĺĺōŵ"};
strings.default = strings;
module.exports = strings;

/***/ }),

/***/ "1z+/":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-shared-react@47.12.13_d89e40c38ccaa8bd6af6488f37cb196d/node_modules/@ms/odsp-shared-react/lib/components/HubNav/HubNav.base.js ***!
  \***********************************************************************************************************************************************************************************************/
/*! exports provided: HubNavBase, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HubNavBase", function() { return HubNavBase; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _HubNav_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./HubNav.scss */ "0oKP");
/* harmony import */ var _HubNavHelpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./HubNavHelpers */ "Vmng");
/* harmony import */ var _Nav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Nav */ "+JAU");
/* harmony import */ var _HorizontalNav_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../HorizontalNav/index */ "GWkq");
/* harmony import */ var _HorizontalNav_HorizontalNav_resx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../HorizontalNav/HorizontalNav.resx */ "cwNP");
/* harmony import */ var _HorizontalNav_HorizontalNav_resx__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_HorizontalNav_HorizontalNav_resx__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _ms_odsp_datasources_lib_dataSources_hub_HubDataSource__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ms/odsp-datasources/lib/dataSources/hub/HubDataSource */ "Zean");
/* harmony import */ var _ms_odsp_utilities_lib_events_EventGroup__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ms/odsp-utilities/lib/events/EventGroup */ "Oa+Z");
/* harmony import */ var _ms_odsp_utilities_lib_string_StringHelper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ms/odsp-utilities/lib/string/StringHelper */ "BY+f");
/* harmony import */ var _ms_odsp_utilities_lib_string_StringHelper__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_ms_odsp_utilities_lib_string_StringHelper__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var office_ui_fabric_react_lib_Utilities__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! office-ui-fabric-react/lib/Utilities */ "mkpW");
/* harmony import */ var _HubNav_resx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./HubNav.resx */ "5GjD");
/* harmony import */ var _HubNav_resx__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_HubNav_resx__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _HubNav_styles__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./HubNav.styles */ "/gk5");
/* harmony import */ var _ms_odsp_utilities_lib_killswitch_Killswitch__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ms/odsp-utilities/lib/killswitch/Killswitch */ "QUgr");
/* harmony import */ var _ms_odsp_utilities_lib_logging_events_Engagement_event__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ms/odsp-utilities/lib/logging/events/Engagement.event */ "cDPE");
/* harmony import */ var _common_telemetry_NavigationSource__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../common/telemetry/NavigationSource */ "MFpg");
/* harmony import */ var _utilities_shyConductor_ShyConductorLoader__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../utilities/shyConductor/ShyConductorLoader */ "EXnH");
/* harmony import */ var _ms_odsp_utilities_lib_uri_Uri__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ms/odsp-utilities/lib/uri/Uri */ "I5DX");



















var getClassNames = Object(office_ui_fabric_react_lib_Utilities__WEBPACK_IMPORTED_MODULE_10__["classNamesFunction"])();
var _emptyState = {
    hubData: undefined,
    navLinkGroup: undefined,
    logoLoadError: undefined,
    editLink: undefined,
    isShyMode: undefined
};
/**
 * Retrieves data for and renders the hub nav: a horizontal navigation control containing
 * the logo, name, and links from a parent site.
 */
var HubNavBase = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(HubNavBase, _super);
    function HubNavBase(props) {
        var _this = _super.call(this, props) || this;
        _this._onEditClicked = function (ev) {
            // Fire an event which will launch the edit nav panel.
            var state = _this.state;
            var args = {
                group: state.navLinkGroup,
                updateDisplayedLinks: function (links, afterSetState) {
                    // Update the displayed links based on the results of editing
                    var navLinkGroup = _this._getHubGroup(state.hubData, links);
                    var editLink = _this._getEditLink(navLinkGroup);
                    _this.setState({ navLinkGroup: navLinkGroup, editLink: editLink }, afterSetState);
                }
            };
            _ms_odsp_utilities_lib_events_EventGroup__WEBPACK_IMPORTED_MODULE_8__["default"].raise(window, _Nav__WEBPACK_IMPORTED_MODULE_4__["EDIT_EVENT_NAME"], args);
        };
        _this._onNameClick = function () {
            var pageContext = _this._pageContext;
            Object(_HubNavHelpers__WEBPACK_IMPORTED_MODULE_3__["logHubEvent"])('Name.Click', pageContext);
            Object(_HubNavHelpers__WEBPACK_IMPORTED_MODULE_3__["logHubEvent"])('Click', pageContext);
        };
        _this._onLogoClick = function () {
            var pageContext = _this._pageContext;
            Object(_HubNavHelpers__WEBPACK_IMPORTED_MODULE_3__["logHubEvent"])('Logo.Click', pageContext);
            Object(_HubNavHelpers__WEBPACK_IMPORTED_MODULE_3__["logHubEvent"])('Click', pageContext);
        };
        _this._onLogoError = function () {
            // Setting this flag will hide the logo
            _this.setState({ logoLoadError: true });
        };
        /** registers or re-registers for shy behavior as necessary */
        _this._ensureRegisterForShy = function () { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                if (!this._shyRegistration) {
                    this._registerForShy();
                }
                return [2 /*return*/];
            });
        }); };
        /** registers for shy behavior, must delete this._shyRegistration to regenerate */
        _this._registerForShy = function () { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this._shyRegistration) {
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this.loadShyConductor()];
                    case 1:
                        _a.sent();
                        // check again, just in case, cuz of async code
                        if (this._shyRegistration) {
                            return [2 /*return*/];
                        }
                        this._shyRegistration = {
                            onShy: function () {
                                _this.setState({ isShyMode: true });
                            },
                            onUnshy: function () {
                                _this.setState({ isShyMode: false });
                            },
                            heightDifference: _HubNav_styles__WEBPACK_IMPORTED_MODULE_12__["HUB_NAV_HEIGHT"]
                        };
                        this._shyConductor.registerCallbacks(this._shyRegistration);
                        return [2 /*return*/];
                }
            });
        }); };
        /** unregisters from shy behavior */
        _this._unregisterForShy = function () {
            if (!_this._shyRegistration) {
                return;
            }
            _this._shyConductor.unregisterCallback(_this._shyRegistration);
            _this._shyRegistration = undefined;
        };
        /** async loads the ShyConductor */
        _this.loadShyConductor = function () { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
            var _a;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!!this._shyConductor) return [3 /*break*/, 2];
                        _a = this;
                        return [4 /*yield*/, Object(_utilities_shyConductor_ShyConductorLoader__WEBPACK_IMPORTED_MODULE_16__["getShyConductor"])()];
                    case 1:
                        _a._shyConductor = _b.sent();
                        _b.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        }); };
        _this.state = {};
        _this._initialProps = props;
        return _this;
    }
    HubNavBase.prototype.UNSAFE_componentWillMount = function () {
        var initialProps = this._initialProps;
        if (initialProps) {
            this._initMembers(initialProps);
            // This initialization is done in componentWillMount since it calls setState
            this._init(initialProps);
            this._initialProps = undefined;
        }
    };
    HubNavBase.prototype.UNSAFE_componentWillReceiveProps = function (nextProps) {
        var oldPageContext = this._pageContext;
        var newPageContext = nextProps.pageContext;
        var isDifferentSite = oldPageContext.siteId !== newPageContext.siteId;
        var isDifferentWeb = isDifferentSite || oldPageContext.webId !== newPageContext.webId;
        if (!isDifferentWeb && !isDifferentSite) {
            // On the same web/site, so nothing to do
            // (web IDs are not guaranteed to be unique, so must check site ID too)
            return;
        }
        this._initMembers(nextProps);
        var isDifferentHub = oldPageContext.hubSiteId !== newPageContext.hubSiteId;
        var isToFromParent = oldPageContext.isHubSite !== newPageContext.isHubSite;
        var isToFromSubsite = !isDifferentSite && isToFromParent;
        var navLinkGroup = this.state.navLinkGroup;
        var shouldUpdateEditable = false;
        if (isDifferentHub || this._dataPromise || !this.state.hubData) {
            // We have to fetch new data when switching hubs.
            // It's also simplest to fetch new data if it hasn't finished loading yet.
            if (this._dataPromise) {
                this._dataPromise.cancel();
            }
            this._init(nextProps);
        }
        else if (isToFromSubsite) {
            // We're within the hub parent site but have just switched to or from a subsite.
            // Add or remove the edit link as appropriate.
            // NOTE: If we ever log anything web-specific, this block will need to be combined
            // into the next one.
            shouldUpdateEditable = true;
        }
        else if (isDifferentSite) {
            // We're within the same hub but on a different site. In theory, we shouldn't need to
            // update anything but whether there's an edit link, but because the click handlers keep
            // a reference to the previously passed in pageContext for logging, we need to make
            // a new nav link group with updated click handlers (but the same hub data).
            navLinkGroup = this._getHubGroup(this.state.hubData);
            this.setState({ navLinkGroup: navLinkGroup });
            shouldUpdateEditable = true;
        }
        if (shouldUpdateEditable) {
            // Update whether an edit link is displayed, as well as the link group's record of
            // whether it's editable.
            var hasEditLink = Object(_HubNavHelpers__WEBPACK_IMPORTED_MODULE_3__["canEditHubNav"])(newPageContext);
            navLinkGroup.hasEditLink = hasEditLink;
            this.setState({ editLink: hasEditLink ? this._getEditLink(navLinkGroup) : undefined });
        }
        if (isDifferentWeb) {
            // Ensure the theme is in sync with the hub site.
            // TODO: Enhance the server API to return a flag idicating if the theme has changed
            // and request the ThemingManager to reload the theme when so.
            Object(_HubNavHelpers__WEBPACK_IMPORTED_MODULE_3__["trySyncTheme"])(this.state.hubData, this._dataSource, newPageContext);
        }
    };
    HubNavBase.prototype.componentDidMount = function () {
        this._ensureRegisterForShy();
    };
    HubNavBase.prototype.componentWillUnmount = function () {
        this._unregisterForShy();
    };
    HubNavBase.prototype.render = function () {
        var _a = this, _b = _a.state, hubData = _b.hubData, logoLoadError = _b.logoLoadError, navLinkGroup = _b.navLinkGroup, editLink = _b.editLink, props = _a.props;
        var _c = props.styles, styles = _c === void 0 ? props.getStyles : _c, theme = props.theme, headerEmphasisTheme = props.headerEmphasisTheme;
        var themeToUse = headerEmphasisTheme || theme; // if there's a header emphasis theme, use that instead of the normal theme
        var classNames = getClassNames(styles, {
            theme: themeToUse,
            isShyMode: this.state.isShyMode
        });
        // This will only log anything once per full page load or cross-site nav
        Object(_HubNavHelpers__WEBPACK_IMPORTED_MODULE_3__["logHubRender"])(props.pageContext);
        var hubLink;
        var horizontalNav;
        if (hubData) {
            var submenuAriaLabel = '';
            if (!_ms_odsp_utilities_lib_killswitch_Killswitch__WEBPACK_IMPORTED_MODULE_13__["Killswitch"].isActivated('b2a09a0a-8ad5-4f56-a11b-9cb33e8619cf', '11/19/2020', 'Let nav format')) {
                // change to const when cleaning up this KS
                submenuAriaLabel = _HorizontalNav_HorizontalNav_resx__WEBPACK_IMPORTED_MODULE_6___default.a.splitButtonAriaLabelWithName;
            }
            else {
                submenuAriaLabel = _ms_odsp_utilities_lib_string_StringHelper__WEBPACK_IMPORTED_MODULE_9__["format"](_HorizontalNav_HorizontalNav_resx__WEBPACK_IMPORTED_MODULE_6___default.a.splitButtonAriaLabelWithName, hubData.name);
            }
            hubLink = this._renderHubLink(hubData, logoLoadError, classNames.link);
            horizontalNav = (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_HorizontalNav_index__WEBPACK_IMPORTED_MODULE_5__["HorizontalNav"], { items: navLinkGroup.links, editLink: editLink, skipRole: true, useMegaMenu: hubData.megaMenuEnabled, ignoreChromeOptions: !this._pageContext.isHubSite, pageContext: props.pageContext, moduleLoader: props.moduleLoader, splitButtonAriaLabel: submenuAriaLabel, moreOptionsAriaLabel: _HorizontalNav_HorizontalNav_resx__WEBPACK_IMPORTED_MODULE_6___default.a.moreOptionsAriaLabel, theme: themeToUse, chromeOptions: props.chromeOptions, styles: function () { return ({ link: [classNames.navLink] }); }, navigationSource: _common_telemetry_NavigationSource__WEBPACK_IMPORTED_MODULE_15__["NavigationSource"].HubNav }));
        }
        var customizerSettings = headerEmphasisTheme ? { theme: headerEmphasisTheme } : undefined;
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](office_ui_fabric_react_lib_Utilities__WEBPACK_IMPORTED_MODULE_10__["Customizer"], { settings: customizerSettings },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: classNames.root },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: classNames.hubNavRow, role: 'navigation', "aria-label": _ms_odsp_utilities_lib_string_StringHelper__WEBPACK_IMPORTED_MODULE_9__["format"](_HubNav_resx__WEBPACK_IMPORTED_MODULE_11___default.a.ariaLabel, hubData ? hubData.name : '') },
                    hubLink,
                    horizontalNav))));
    };
    HubNavBase.prototype._renderHubLink = function (hubData, logoLoadError, linkClass) {
        var name = hubData.name, logoUrl = hubData.logoUrl, url = hubData.url, hideNameInNavigation = hubData.hideNameInNavigation, logoFileHash = hubData.logoFileHash;
        var useLogo = logoUrl && !logoLoadError;
        var useName = name && !hideNameInNavigation;
        var imageSrc = !_ms_odsp_utilities_lib_killswitch_Killswitch__WEBPACK_IMPORTED_MODULE_13__["Killswitch"].isActivated('d38b5fa1-789a-420a-a7b1-bfbab7f57599', '12/15/2019', 'Use unified site logo API')
            ? this.props.pageContext.webAbsoluteUrl + "/_api/siteiconmanager/getsitelogo?siteurl='" + url + "'&target=1" +
                (logoFileHash ? "&hash='" + logoFileHash + "'" : '')
            : logoUrl;
        if (useLogo || useName) {
            return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("a", { className: Object(office_ui_fabric_react_lib_Utilities__WEBPACK_IMPORTED_MODULE_10__["css"])('ms-HubNav-nameLink', linkClass), href: url },
                useLogo ? (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("img", { className: 'ms-HubNav-logo', src: imageSrc, onClick: this._onLogoClick, onError: this._onLogoError, alt: _HubNav_resx__WEBPACK_IMPORTED_MODULE_11___default.a.logoAriaLabel /*required by accessibility checkers despite role=presentation*/, role: 'presentation' })) : undefined,
                useName ? react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", { onClick: this._onNameClick }, name || '') : undefined));
        }
        else {
            return undefined;
        }
    };
    HubNavBase.prototype._initMembers = function (props) {
        this._dataSource =
            (props.getDataSource && props.getDataSource()) ||
                props.dataSource ||
                new _ms_odsp_datasources_lib_dataSources_hub_HubDataSource__WEBPACK_IMPORTED_MODULE_7__["HubDataSource"](props.pageContext);
        this._pageContext = props.pageContext;
    };
    HubNavBase.prototype._init = function (props) {
        var _this = this;
        this._dataPromise = this._dataSource.getHubData(true /*loadMetadataNavigation*/);
        this._dataPromise.then(function (hubData) {
            _this._dataPromise = null; // mark that promise is done
            try {
                if (hubData) {
                    Object(_HubNavHelpers__WEBPACK_IMPORTED_MODULE_3__["trySyncTheme"])(hubData, _this._dataSource, _this._pageContext);
                    Object(_HubNavHelpers__WEBPACK_IMPORTED_MODULE_3__["addClickHandlers"])(hubData, _this._pageContext);
                    var navLinkGroup = _this._getHubGroup(hubData);
                    _this._sanitizeHubSiteUrl(hubData);
                    _this.setState({
                        hubData: hubData,
                        navLinkGroup: navLinkGroup,
                        editLink: _this._getEditLink(navLinkGroup),
                        logoLoadError: false
                    });
                    if (Object(_ms_odsp_datasources_lib_dataSources_hub_HubDataSource__WEBPACK_IMPORTED_MODULE_7__["isRefineHubNavAudienceLoggingKillSwitchActivated"])()) {
                        if (hubData.isNavAudienceEnabled) {
                            _ms_odsp_utilities_lib_logging_events_Engagement_event__WEBPACK_IMPORTED_MODULE_14__["Engagement"].logData({
                                name: 'HubNav.AudienceTargeting'
                            });
                        }
                    }
                    else {
                        _ms_odsp_utilities_lib_logging_events_Engagement_event__WEBPACK_IMPORTED_MODULE_14__["Engagement"].logData({
                            name: 'HubNav.Init',
                            extraData: {
                                audienceTargetingEnabled: Boolean(hubData.isNavAudienceEnabled).toString(),
                                audienceTargetingProvided: Boolean(hubData.isNavAudienceProvided).toString(),
                                audienceTargetingAffected: Boolean(hubData.isNavAudienceAffected).toString()
                            }
                        });
                    }
                }
            }
            catch (ex) {
                // no hub data, or some other issue--clear the hub nav
                _this.setState(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, _emptyState));
            }
        }, 
        // Error getting data, so clear the hub nav
        /*onError*/ function () { return _this.setState(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, _emptyState)); });
    };
    HubNavBase.prototype._sanitizeHubSiteUrl = function (hubData) {
        if (_ms_odsp_utilities_lib_killswitch_Killswitch__WEBPACK_IMPORTED_MODULE_13__["Killswitch"].isActivated('39E1A126-2D03-4FD9-B970-D35F43008273', '05/21/2019', 'Sanitize Hub Site Url')) {
            return;
        }
        var url = new _ms_odsp_utilities_lib_uri_Uri__WEBPACK_IMPORTED_MODULE_17__["default"](hubData.url);
        var scheme = url.getScheme();
        // hub site url needs to piont to https, otherwise we clear it up.
        if (!!scheme && scheme.toLowerCase() !== 'https') {
            hubData.url = undefined;
        }
    };
    HubNavBase.prototype._getHubGroup = function (hubData, links) {
        links = links || hubData.navigation;
        return Object(_HubNavHelpers__WEBPACK_IMPORTED_MODULE_3__["getHubGroup"])(hubData, this._dataSource, this._pageContext, links);
    };
    HubNavBase.prototype._getEditLink = function (navLinkGroup) {
        if (navLinkGroup.hasEditLink) {
            // If there currently no links in the nav, use the string "Add link".
            // Otherwise use the default of "Edit".
            var editLabel = navLinkGroup.links && navLinkGroup.links.length ? undefined : _HubNav_resx__WEBPACK_IMPORTED_MODULE_11___default.a.addLinkLabel;
            return Object(_Nav__WEBPACK_IMPORTED_MODULE_4__["getEditLink"])(this._pageContext, false /*hasIcon*/, this._onEditClicked, editLabel);
        }
        return undefined;
    };
    HubNavBase = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(office_ui_fabric_react_lib_Utilities__WEBPACK_IMPORTED_MODULE_10__["customizable"])('HubNav', ['theme', 'headerEmphasisTheme', 'chromeOptions'])
    ], HubNavBase);
    return HubNavBase;
}(office_ui_fabric_react_lib_Utilities__WEBPACK_IMPORTED_MODULE_10__["BaseComponent"]));

/* harmony default export */ __webpack_exports__["default"] = (HubNavBase);
//# sourceMappingURL=HubNav.base.js.map

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

/***/ "2eGb":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-shared-react@47.12.13_d89e40c38ccaa8bd6af6488f37cb196d/node_modules/@ms/odsp-shared-react/lib/components/CompositeHeader/subComponents/HeaderMessageBar.js ***!
  \***************************************************************************************************************************************************************************************************************************/
/*! exports provided: HeaderMessageBar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderMessageBar", function() { return HeaderMessageBar; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var office_ui_fabric_react_lib_MessageBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! office-ui-fabric-react/lib/MessageBar */ "oW6A");
/* harmony import */ var office_ui_fabric_react_lib_Link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! office-ui-fabric-react/lib/Link */ "F3Wv");



var HeaderMessageBar = function (props) {
    var link = _renderMessageBarLink(props.messageBarProps);
    function _renderMessageBarLink(messageBarProps) {
        var target = messageBarProps.linkTarget;
        var text = messageBarProps.linkText || messageBarProps.linkTarget;
        if (text && target) {
            return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](office_ui_fabric_react_lib_Link__WEBPACK_IMPORTED_MODULE_2__["Link"], { href: target, className: 'ms-MessageBar-link' }, text));
        }
        else {
            return undefined;
        }
    }
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](office_ui_fabric_react_lib_MessageBar__WEBPACK_IMPORTED_MODULE_1__["MessageBar"], { messageBarType: office_ui_fabric_react_lib_MessageBar__WEBPACK_IMPORTED_MODULE_1__["MessageBarType"].warning, ariaLabel: props.messageBarProps.ariaLabel },
        props.messageBarProps.message,
        link));
};
//# sourceMappingURL=HeaderMessageBar.js.map

/***/ }),

/***/ "2hGr":
/*!***************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/utilities-async@1.1.1/node_modules/@ms/utilities-async/lib/signal/Signal.js ***!
  \***************************************************************************************************************************************/
/*! exports provided: Signal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Signal", function() { return Signal; });
/**
 * @public
 */
var Signal = /** @class */ (function () {
    function Signal() {
        var resolveSignal;
        var rejectSignal;
        this.promise = new Promise(function (resolve, reject) {
            resolveSignal = resolve;
            rejectSignal = reject;
        });
        // tslint:disable-next-line:no-non-null-assertion
        this.resolve = resolveSignal;
        // tslint:disable-next-line:no-non-null-assertion
        this.reject = rejectSignal;
    }
    return Signal;
}());

//# sourceMappingURL=Signal.js.map

/***/ }),

/***/ "2pVO":
/*!***************************************************!*\
  !*** ./lib/components/SiteHeader/SiteHeader.resx ***!
  \***************************************************/
/*! exports provided: TeamSite, privateGroup, publicGroup, privateChannel, standardChannel, sharedChannel, groupInfoWithClassificationFormatString, groupInfoWithClassificationAndGuestsFormatString, groupInfoWithGuestsFormatString, groupInfoWithGuestsForTeamsites, groupInfoWithClassificationAndGuestsForTeamsites, membersCount, membersCountIntervals, goToOutlook, follow, followButtonAriaLabel, shareLabel, shareSite, mail, calendar, files, home, notebook, planner, teams, members, loadingLabel, siteIsArchived, siteIsReadOnly, siteIsMoving, siteMoveComplete, siteIsOverQuota, siteIsCloseToQuota, notFollowed, followedHover, notFollowedHover, joinGroup, joinedGroup, leaveGroup, joiningGroup, leavingGroup, lastOwnerError, authenticationPolicyActive, messageBarMoreInfo, horizontalNavAriaLabel, horizontalNavAriaLabelSite, horizontalNavSplitButtonAriaLabel, EditNavPanelTitle, noSharePointSyntexLicense, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"TeamSite\":\"Ţēàm śĩţē\",\"privateGroup\":\"Ƥŕĩvàţē ĝŕōũƥ\",\"publicGroup\":\"Ƥũƀĺĩć ĝŕōũƥ\",\"privateChannel\":\"Ƥŕĩvàţē ćĥàńńēĺ\",\"standardChannel\":\"Śţàńďàŕď ćĥàńńēĺ\",\"sharedChannel\":\"Śĥàŕēď ćĥàńńēĺ\",\"groupInfoWithClassificationFormatString\":\"{0}  |  {1}\",\"groupInfoWithClassificationAndGuestsFormatString\":\"{0}  |  Śĥàŕĩńĝ ŵĩţĥ ĝũēśţś ƥēŕmĩţţēď  |  {1}\",\"groupInfoWithGuestsFormatString\":\"{0}  |  Śĥàŕĩńĝ ŵĩţĥ ĝũēśţś ƥēŕmĩţţēď\",\"groupInfoWithGuestsForTeamsites\":\"Śĥàŕĩńĝ ŵĩţĥ ĝũēśţś ƥēŕmĩţţēď\",\"groupInfoWithClassificationAndGuestsForTeamsites\":\"Śĥàŕĩńĝ ŵĩţĥ ĝũēśţś ƥēŕmĩţţēď  |  {0}\",\"membersCount\":\"{0} mēmƀēŕś||{0} mēmƀēŕ||{0} mēmƀēŕś\",\"membersCountIntervals\":\"0||1||2-\",\"goToOutlook\":\"Ĝŕōũƥ ćōńvēŕśàţĩōńś\",\"follow\":\"Ƒōĺĺōŵĩńĝ\",\"followButtonAriaLabel\":\"Ƒōĺĺōŵ ţĥĩś śĩţē\",\"shareLabel\":\"Śĥàŕē\",\"shareSite\":\"Śĥàŕē śĩţē\",\"mail\":\"Ćōńvēŕśàţĩōńś\",\"calendar\":\"Ćàĺēńďàŕ\",\"files\":\"Ƒĩĺēś\",\"home\":\"Ĥōmē\",\"notebook\":\"Ńōţēƀōōķ\",\"planner\":\"Ƥĺàńńēŕ\",\"teams\":\"Ţēàmś\",\"members\":\"Mēmƀēŕś\",\"loadingLabel\":\"Ĺōàďĩńĝ\",\"siteIsArchived\":\"Ţĥĩś ćĥàńńēĺ ĩś ŕēàď-ōńĺŷ ƀēćàũśē ţĥē ŕēĺàţēď Mĩćŕōśōƒţ Ţēàmś ĩś àŕćĥĩvēď.\",\"siteIsReadOnly\":\"ŚĥàŕēƤōĩńţ śĩţēś àŕē ŕēàď-ōńĺŷ ŕĩĝĥţ ńōŵ ŵĥĩĺē ŵē ďō śōmē màĩńţēńàńćē. Ŵē àƥōĺōĝĩźē ƒōŕ ţĥē ĩńćōńvēńĩēńćē.\",\"siteIsMoving\":\"Ŷōũŕ śĩţē ĩś ƀēĩńĝ mōvēď ţō à ńēŵ ďàţà ĺōćàţĩōń àś śēţ ƀŷ ŷōũŕ àďmĩńĩśţŕàţōŕ. Ţĥĩś śĩţē ŵĩĺĺ ƀē ŕēàď-ōńĺŷ ũńţĩĺ ţĥē mōvē ĩś ćōmƥĺēţēď.\",\"siteMoveComplete\":\"Ŵē ĥàvē ƒĩńĩśĥēď mōvĩńĝ ŷōũŕ ōńĺĩńē ƒĩĺēś ţō ţĥē ńēŵ ďàţà ĺōćàţĩōń śēţ ƀŷ ŷōũŕ àďmĩńĩśţŕàţōŕ. Ţĥĩś śĩţē ŵĩĺĺ ƀē ŕēƥĺàćēď ŵĩţĥ à ŕēďĩŕēćţĩōń śĩţē ƥōĩńţĩńĝ ţō ţĥē ńēŵ ĺōćàţĩōń ōƒ ŷōũŕ ƒĩĺēś.\",\"siteIsOverQuota\":\"Ţĥĩś śĩţē ĩś ōũţ ōƒ śţōŕàĝē śƥàćē.\",\"siteIsCloseToQuota\":\"Ţĥĩś śĩţē ĩś àĺmōśţ ōũţ ōƒ śţōŕàĝē śƥàćē.\",\"notFollowed\":\"Ńōţ ƒōĺĺōŵĩńĝ\",\"followedHover\":\"Śţōƥ ƒōĺĺōŵĩńĝ\",\"notFollowedHover\":\"Ƒōĺĺōŵ\",\"joinGroup\":\"ĵōĩń\",\"joinedGroup\":\"ĵōĩńēď\",\"leaveGroup\":\"Ĺēàvē ĝŕōũƥ\",\"joiningGroup\":\"ĵōĩńĩńĝ...\",\"leavingGroup\":\"Ĺēàvĩńĝ...\",\"lastOwnerError\":\"Ŷōũ ćàń\\u0027ţ ĺēàvē ţĥē ĝŕōũƥ ƀēćàũśē ŷōũ\\u0027ŕē ćũŕŕēńţĺŷ ţĥē ĝŕōũƥ\\u0027ś ōńĺŷ ōŵńēŕ. ßēƒōŕē ŷōũ ćàń ĺēàvē ţĥē ĝŕōũƥ, ŷōũ ńēēď ţō ƥŕōmōţē àńōţĥēŕ mēmƀēŕ ţō ōŵńēŕ.\",\"authenticationPolicyActive\":\"Ŷōũŕ ōŕĝàńĩźàţĩōń ďōēśń\\u0027ţ àĺĺōŵ ŷōũ ţō ďōŵńĺōàď, ƥŕĩńţ, ōŕ śŷńć ũśĩńĝ ţĥĩś ďēvĩćē. Ţō ũśē ţĥēśē àćţĩōńś, ũśē à ďēvĩćē ţĥàţ\\u0027ś Ĵōĩńēď ţō à ďōmàĩń ōŕ màŕķēď ćōmƥĺĩàńţ ƀŷ Ĩńţũńē. Ƒōŕ ĥēĺƥ, ćōńţàćţ ŷōũŕ ĨŢ ďēƥàŕţmēńţ.\",\"messageBarMoreInfo\":\"Mōŕē ĩńƒō.\",\"horizontalNavAriaLabel\":\"Ēńţēŕĩńĝ ńàvĩĝàţĩōń ćōńţŕōĺ. Ũśē àŕŕōŵ ķēŷś ţō ńàvĩĝàţē\",\"horizontalNavAriaLabelSite\":\"Śĩţē\",\"horizontalNavSplitButtonAriaLabel\":\"ţĥĩś mēńũ ĩţēm ŵĩţĥ śũƀmēńũ. Ũśē àŕŕōŵ ķēŷś àńď ēńţēŕ ţō ńàvĩĝàţē\",\"EditNavPanelTitle\":\"Ēďĩţ ńàvĩĝàţĩōń\",\"noSharePointSyntexLicense\":\"Ŷōũŕ ōŕĝàńĩźàţĩōń ďōēś ńōţ ĥàvē à ŚĥàŕēƤōĩńţ Śŷńţēx ĺĩćēńśē.\"}");

/***/ }),

/***/ "2q6Q":
/*!***********************************!*\
  !*** external "@ms/sp-telemetry" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__2q6Q__;

/***/ }),

/***/ "3Q3O":
/*!****************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/persistent-cache@1.0.9_@uifabric+utilities@7.33.2/node_modules/@ms/persistent-cache/lib/utilities/performance/performance.js ***!
  \****************************************************************************************************************************************************************************************/
/*! exports provided: now, mark */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "now", function() { return now; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mark", function() { return mark; });
/* harmony import */ var _Global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Global */ "i/zE");
// Utility functions for measuring page performance

function now() {
    return _Global__WEBPACK_IMPORTED_MODULE_0__["global"].performance && performance.now ? Math.round(performance.now()) : Date.now();
}
function mark(name) {
    if (_Global__WEBPACK_IMPORTED_MODULE_0__["global"].performance && performance.mark) {
        performance.mark(name);
    }
}
//# sourceMappingURL=performance.js.map

/***/ }),

/***/ "4L3d":
/*!********************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/shared-react-left-nav@1.0.39_6ba2c2a8b7c666ede09cb247e7351fab/node_modules/@ms/shared-react-left-nav/lib/LeftNavOverride.scss.js ***!
  \********************************************************************************************************************************************************************************************/
/*! exports provided: sm, spReactLeftNav, md, lg, isOnTop, spReactLeftNavResponsive */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sm", function() { return sm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "spReactLeftNav", function() { return spReactLeftNav; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "md", function() { return md; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lg", function() { return lg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isOnTop", function() { return isOnTop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "spReactLeftNavResponsive", function() { return spReactLeftNavResponsive; });
/* harmony import */ var _microsoft_load_themed_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/load-themed-styles */ "jOlS");
/* harmony import */ var _microsoft_load_themed_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_load_themed_styles__WEBPACK_IMPORTED_MODULE_0__);
/* tslint:disable */

Object(_microsoft_load_themed_styles__WEBPACK_IMPORTED_MODULE_0__["loadStyles"])([{ "rawString": ".sm_e9ab7f50 .spReactLeftNav_e9ab7f50,.md_e9ab7f50 .spReactLeftNav_e9ab7f50,.lg_e9ab7f50 .spReactLeftNav_e9ab7f50{width:275px}.spReactLeftNav_e9ab7f50 .ms-Nav-group{border-top:1px solid " }, { "theme": "neutralLight", "defaultValue": "#edebe9" }, { "rawString": "}.spReactLeftNav_e9ab7f50 .ms-Nav-group .ms-Nav-chevronButton{border-bottom:0px;font-size:" }, { "theme": "mediumFontSize", "defaultValue": "14px" }, { "rawString": ";font-weight:600}.spReactLeftNav_e9ab7f50.isOnTop_e9ab7f50{display:block}.spReactLeftNavResponsive_e9ab7f50 .ms-Nav-chevronButton{top:0px !important}.spReactLeftNavResponsive_e9ab7f50 .ms-Nav-navItem a,.spReactLeftNavResponsive_e9ab7f50 .ms-Nav-compositeLink .ms-Nav-chevronButton,.spReactLeftNavResponsive_e9ab7f50 .ms-Nav-group .ms-Nav-chevronButton{height:40px;line-height:40px}\n" }]);
var sm = "sm_e9ab7f50";
var spReactLeftNav = "spReactLeftNav_e9ab7f50";
var md = "md_e9ab7f50";
var lg = "lg_e9ab7f50";
var isOnTop = "isOnTop_e9ab7f50";
var spReactLeftNavResponsive = "spReactLeftNavResponsive_e9ab7f50";
//# sourceMappingURL=LeftNavOverride.scss.js.map

/***/ }),

/***/ "4nKP":
/*!**********************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/persistent-cache@1.0.9_@uifabric+utilities@7.33.2/node_modules/@ms/persistent-cache/lib/PersistentCache.js ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: PersistentCache */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersistentCache", function() { return PersistentCache; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _storage_PersistentCacheIndexedDB__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage/PersistentCacheIndexedDB */ "SjTB");
/* harmony import */ var _storage_PersistentCacheLocalStorage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./storage/PersistentCacheLocalStorage */ "SHpA");
/* harmony import */ var _ms_utilities_crypto_lib_CryptoErrors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ms/utilities-crypto/lib/CryptoErrors */ "K5yv");
/* harmony import */ var _CacheUpdateManager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CacheUpdateManager */ "pcnK");
/* harmony import */ var _utilities_performance_performance__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utilities/performance/performance */ "3Q3O");
/* harmony import */ var _ms_telemetry_manager_lib_events_ResultTypeEnum__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ms/telemetry-manager/lib/events/ResultTypeEnum */ "Z+U/");







var CACHEKEY_PREFIX = '_odspcache_';
var logStatsTimeout = 30 * 1000;
var cacheKeyUserDelimiter = '_____';
var DEFAULT_CONFIG = {
    cacheType: 1 /* indexedDB */
};
var PersistentCache = /** @class */ (function () {
    function PersistentCache(configuration) {
        var _a = configuration.cacheType, cacheType = _a === void 0 ? DEFAULT_CONFIG.cacheType : _a, restOfConfiguration = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(configuration, ["cacheType"]);
        this._config = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, restOfConfiguration), { cacheType: cacheType });
        this._cacheSecret = this._config.secret;
        this._dataIsEncrypted = !!this._cacheSecret;
        this._crypto = this._config.crypto;
        if (this._dataIsEncrypted && !this._crypto) {
            throw new Error("When data needs encryption, crypto implementing ICrypto has to be provided when initiating PersistentCache.");
        }
        this._cacheType = this._config.cacheType;
        this._app = configuration.app;
        this._cacheUpdateTaskManager = new _CacheUpdateManager__WEBPACK_IMPORTED_MODULE_4__["CacheUpdateTaskManager"]();
        this._qos = this._config.telemetry && this._config.telemetry.qos;
        this._initLocalStorage(this._cacheType);
    }
    Object.defineProperty(PersistentCache.prototype, "configuration", {
        get: function () {
            return this._config;
        },
        enumerable: true,
        configurable: true
    });
    PersistentCache.prototype.read = function (key) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var logEndData, result, cryptoCost, ioCost, start, startDateTime, readResult, cacheKey, secretChanged, stats, clearTextData, ioStart, data, encryptedData, _a, currentSecret, previousSecret, cryptoStart, ex_1, ex_2;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        logEndData = this._logQos({ name: 'PersistentCache.read' });
                        start = Object(_utilities_performance_performance__WEBPACK_IMPORTED_MODULE_5__["now"])();
                        startDateTime = Date.now();
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 12, , 13]);
                        cacheKey = this._getCacheKey(key);
                        secretChanged = false;
                        stats = {
                            lastModified: NaN,
                            lastRead: startDateTime,
                            reads: 1
                        };
                        clearTextData = void 0;
                        if (!cacheKey) return [3 /*break*/, 11];
                        ioStart = Object(_utilities_performance_performance__WEBPACK_IMPORTED_MODULE_5__["now"])();
                        return [4 /*yield*/, this._storage.read(cacheKey)];
                    case 2:
                        readResult = _b.sent();
                        ioCost = Math.round(Object(_utilities_performance_performance__WEBPACK_IMPORTED_MODULE_5__["now"])() - ioStart);
                        if (!readResult) return [3 /*break*/, 11];
                        data = readResult.data;
                        stats = {
                            lastModified: readResult.lastModified,
                            lastRead: startDateTime,
                            reads: readResult.reads + 1
                        };
                        result = PersistentCache._buffer[cacheKey];
                        if (!(result && result.cacheStats.lastModified === readResult.lastModified)) return [3 /*break*/, 3];
                        result.app = readResult.app || this._app;
                        result.key = {
                            original: key,
                            encoded: readResult.key || cacheKey
                        };
                        // use in-memory cached data to save the cost of decryption
                        result.cacheStats.lastRead = startDateTime;
                        result.cacheStats.reads++;
                        result.performance = {
                            total: Math.round(Object(_utilities_performance_performance__WEBPACK_IMPORTED_MODULE_5__["now"])() - start)
                        };
                        return [3 /*break*/, 11];
                    case 3:
                        result = undefined; // do not use buffered data if lastModified does not match
                        if (!(data !== undefined)) return [3 /*break*/, 11];
                        if (!this._dataIsEncrypted) return [3 /*break*/, 10];
                        encryptedData = data;
                        _a = this._cacheSecret, currentSecret = _a.CurrentKey.Key, previousSecret = _a.PreviousKey.Key;
                        cryptoStart = Object(_utilities_performance_performance__WEBPACK_IMPORTED_MODULE_5__["now"])();
                        _b.label = 4;
                    case 4:
                        _b.trys.push([4, 6, , 9]);
                        return [4 /*yield*/, this._crypto.decrypt({
                                encryptedData: encryptedData,
                                encryptionSecret: currentSecret
                            })];
                    case 5:
                        clearTextData = (_b.sent());
                        return [3 /*break*/, 9];
                    case 6:
                        ex_1 = _b.sent();
                        if (!(ex_1 && ex_1.message && ex_1.message.indexOf(_ms_utilities_crypto_lib_CryptoErrors__WEBPACK_IMPORTED_MODULE_3__["CryptoErrors"].secretError) >= 0)) return [3 /*break*/, 8];
                        return [4 /*yield*/, this._crypto.decrypt({
                                encryptedData: encryptedData,
                                encryptionSecret: previousSecret
                            })];
                    case 7:
                        clearTextData = (_b.sent());
                        secretChanged = typeof clearTextData !== 'undefined';
                        logEndData({
                            resultType: _ms_telemetry_manager_lib_events_ResultTypeEnum__WEBPACK_IMPORTED_MODULE_6__["ResultTypeEnum"].ExpectedFailure,
                            error: ex_1.message,
                            extraData: {
                                cacheResult: 'hit'
                            }
                        });
                        _b.label = 8;
                    case 8: return [3 /*break*/, 9];
                    case 9:
                        cryptoCost = Math.round(Object(_utilities_performance_performance__WEBPACK_IMPORTED_MODULE_5__["now"])() - cryptoStart);
                        return [3 /*break*/, 11];
                    case 10:
                        clearTextData = data;
                        _b.label = 11;
                    case 11:
                        result = result || {
                            key: {
                                original: key,
                                encoded: (readResult && readResult.key) || cacheKey
                            },
                            app: (readResult && readResult.app) || this._app,
                            data: clearTextData,
                            cacheStats: stats,
                            cacheType: this._cacheType,
                            performance: {
                                crypto: cryptoCost,
                                io: ioCost,
                                total: Math.round(Object(_utilities_performance_performance__WEBPACK_IMPORTED_MODULE_5__["now"])() - start)
                            }
                        };
                        PersistentCache._buffer[cacheKey] = result;
                        if (secretChanged) {
                            this.update(key, clearTextData); // do not block on update
                        }
                        return [3 /*break*/, 13];
                    case 12:
                        ex_2 = _b.sent();
                        logEndData({
                            resultType: _ms_telemetry_manager_lib_events_ResultTypeEnum__WEBPACK_IMPORTED_MODULE_6__["ResultTypeEnum"].Failure,
                            error: ex_2.message ? ex_2.message : ex_2.toString(),
                            extraData: {
                                cacheResult: 'miss'
                            }
                        });
                        throw ex_2;
                    case 13:
                        logEndData({
                            resultType: _ms_telemetry_manager_lib_events_ResultTypeEnum__WEBPACK_IMPORTED_MODULE_6__["ResultTypeEnum"].Success,
                            extraData: {
                                cacheResult: "" + (typeof result.data !== 'undefined' ? 'hit' : 'miss')
                            }
                        });
                        return [2 /*return*/, Promise.resolve(result)];
                }
            });
        });
    };
    PersistentCache.prototype.rangeQuery = function (rangeQuery) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var logEndData, ioCost, start, startDateTime, resultPromises, stats, ioStart_1;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                if (this._cacheType !== 1 /* indexedDB */) {
                    throw new Error("Only indexedDB supports range query, your storage does not support!");
                }
                logEndData = this._logQos({ name: 'PersistentCache.rangeQuery' });
                ioCost = 0;
                start = Object(_utilities_performance_performance__WEBPACK_IMPORTED_MODULE_5__["now"])();
                startDateTime = Date.now();
                stats = {
                    lastModified: NaN,
                    lastRead: startDateTime,
                    reads: 1
                };
                try {
                    ioStart_1 = Object(_utilities_performance_performance__WEBPACK_IMPORTED_MODULE_5__["now"])();
                    resultPromises = this._storage.rangeQuery(rangeQuery).then(function (resultPrimaryKeys) {
                        ioCost = Math.round(Object(_utilities_performance_performance__WEBPACK_IMPORTED_MODULE_5__["now"])() - ioStart_1);
                        var cacheKeysInResult = resultPrimaryKeys.map(function (primaryKey) {
                            return {
                                original: _this._getOriginalKeyFromCacheKey(primaryKey),
                                encoded: primaryKey
                            };
                        });
                        return {
                            key: undefined,
                            app: undefined,
                            data: cacheKeysInResult,
                            cacheStats: stats,
                            cacheType: _this._cacheType,
                            performance: {
                                io: ioCost,
                                total: Math.round(Object(_utilities_performance_performance__WEBPACK_IMPORTED_MODULE_5__["now"])() - start)
                            }
                        };
                    });
                }
                catch (ex) {
                    logEndData({
                        resultType: _ms_telemetry_manager_lib_events_ResultTypeEnum__WEBPACK_IMPORTED_MODULE_6__["ResultTypeEnum"].Failure,
                        error: ex.message ? ex.message : ex.toString()
                    });
                    throw ex;
                }
                logEndData({
                    resultType: _ms_telemetry_manager_lib_events_ResultTypeEnum__WEBPACK_IMPORTED_MODULE_6__["ResultTypeEnum"].Success
                });
                return [2 /*return*/, (resultPromises ||
                        Promise.resolve({
                            key: undefined,
                            app: undefined,
                            data: [],
                            cacheStats: stats,
                            cacheType: this._cacheType,
                            performance: {
                                io: ioCost,
                                total: Math.round(Object(_utilities_performance_performance__WEBPACK_IMPORTED_MODULE_5__["now"])() - start)
                            }
                        }))];
            });
        });
    };
    PersistentCache.prototype.update = function (key, data) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var cacheKey, updateTask;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        cacheKey = this._getCacheKey(key);
                        updateTask = this._cacheUpdateTaskManager.enqueue(cacheKey, function () {
                            return _this._doCacheUpdate(key, data);
                        });
                        return [4 /*yield*/, updateTask.signal.promise];
                    case 1:
                        _a.sent();
                        this._logCacheStats();
                        return [2 /*return*/];
                }
            });
        });
    };
    PersistentCache.prototype.remove = function (key) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                return [2 /*return*/, this.update(key, undefined)];
            });
        });
    };
    /**
     * Deleting data rows of an application to free up space
     * @param app the application rows of which are deleted
     * @param size the number of bytes that is freed
     */
    PersistentCache.prototype.freeSpace = function (app, size) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                return [2 /*return*/, this._storage.freeSpace(app, size)];
            });
        });
    };
    PersistentCache.prototype.readAndUpdate = function (key, getFreshData) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var start, startDateTime, logEndData, freshDataPromise, result, ex_3, ex_4;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        start = Object(_utilities_performance_performance__WEBPACK_IMPORTED_MODULE_5__["now"])();
                        startDateTime = Date.now();
                        logEndData = this._logQos({ name: 'PersistentCache.readAndUpdate' });
                        freshDataPromise = getFreshData().then(function (freshData) {
                            var freshResult = {
                                app: _this._app,
                                key: {
                                    original: key,
                                    encoded: _this._getCacheKey(key)
                                },
                                data: freshData,
                                cacheType: 2 /* none */,
                                cacheStats: {
                                    lastModified: undefined,
                                    lastRead: startDateTime,
                                    reads: 1
                                },
                                performance: {
                                    total: Math.round(Object(_utilities_performance_performance__WEBPACK_IMPORTED_MODULE_5__["now"])() - start)
                                }
                            };
                            _this.update(key, freshData);
                            return freshResult;
                        });
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 8, , 9]);
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 4, , 5]);
                        return [4 /*yield*/, Promise.race([this.read(key), freshDataPromise])];
                    case 3:
                        result = _a.sent();
                        return [3 /*break*/, 5];
                    case 4:
                        ex_3 = _a.sent();
                        return [3 /*break*/, 5];
                    case 5:
                        if (!(!result || (result.cacheType !== 2 /* none */ && typeof result.data === 'undefined'))) return [3 /*break*/, 7];
                        return [4 /*yield*/, freshDataPromise];
                    case 6:
                        // for cache misses, we need to return fresh data
                        result = _a.sent();
                        _a.label = 7;
                    case 7: return [3 /*break*/, 9];
                    case 8:
                        ex_4 = _a.sent();
                        logEndData({
                            resultType: _ms_telemetry_manager_lib_events_ResultTypeEnum__WEBPACK_IMPORTED_MODULE_6__["ResultTypeEnum"].Failure,
                            error: ex_4.message ? ex_4.message : ex_4.toString()
                        });
                        throw ex_4;
                    case 9:
                        logEndData({
                            resultType: _ms_telemetry_manager_lib_events_ResultTypeEnum__WEBPACK_IMPORTED_MODULE_6__["ResultTypeEnum"].Success
                        });
                        return [2 /*return*/, result];
                }
            });
        });
    };
    PersistentCache.prototype._initLocalStorage = function (cacheType) {
        switch (cacheType) {
            case 0 /* localStorage */:
                this._storage = new _storage_PersistentCacheLocalStorage__WEBPACK_IMPORTED_MODULE_2__["PersistentCacheLocalStorage"]();
                break;
            case 1 /* indexedDB */:
            default:
                try {
                    this._storage = new _storage_PersistentCacheIndexedDB__WEBPACK_IMPORTED_MODULE_1__["PersistentCacheIndexedDB"](this._logQos.bind(this));
                }
                catch (ex) {
                    if (ex.message === _storage_PersistentCacheIndexedDB__WEBPACK_IMPORTED_MODULE_1__["indexedDBErrors"].notSupported) {
                        // if indexedDB not supported, fallback to localStorage
                        this._storage = new _storage_PersistentCacheLocalStorage__WEBPACK_IMPORTED_MODULE_2__["PersistentCacheLocalStorage"]();
                        this._cacheType = 0 /* localStorage */;
                    }
                }
                break;
        }
    };
    PersistentCache.prototype._getCacheKey = function (key) {
        var encodedCacheKey = encodeURIComponent("" + key.key + (key.user ? cacheKeyUserDelimiter + key.user : ''));
        return "" + CACHEKEY_PREFIX + (this._dataIsEncrypted ? btoa(encodedCacheKey) : encodedCacheKey);
    };
    PersistentCache.prototype._getOriginalKeyFromCacheKey = function (cacheKey) {
        var keyNoPrefix = cacheKey.replace(CACHEKEY_PREFIX, '');
        var trasfermedKey = this._dataIsEncrypted ? atob(keyNoPrefix) : keyNoPrefix;
        var decodedKey = decodeURIComponent(trasfermedKey);
        // key format: `${ key.key }${ key.user ? cacheKeyUserDelimiter + key.user : '' }`
        if (decodedKey.indexOf(cacheKeyUserDelimiter) >= 0) {
            var _a = decodedKey.split(cacheKeyUserDelimiter), keyPart = _a[0], userPart = _a[1];
            return {
                key: keyPart,
                user: userPart
            };
        }
        return {
            key: decodedKey
        };
    };
    PersistentCache.prototype._doCacheUpdate = function (key, data) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var logEndData, cacheKey, buffered, dataToBeWriten, size, currentSecret, ex_5;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        logEndData = this._logQos({ name: 'PersistentCache.update' });
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 9, , 10]);
                        cacheKey = this._getCacheKey(key);
                        if (!(typeof data !== 'undefined')) return [3 /*break*/, 6];
                        buffered = (PersistentCache._buffer[cacheKey] = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, PersistentCache._buffer[cacheKey]), {
                            data: data,
                            cacheType: this._cacheType
                        }));
                        if (!buffered.cacheStats) {
                            buffered.cacheStats = {
                                lastModified: NaN,
                                lastRead: Object(_utilities_performance_performance__WEBPACK_IMPORTED_MODULE_5__["now"])(),
                                reads: 1
                            };
                        }
                        dataToBeWriten = data;
                        size = NaN;
                        if (!this._dataIsEncrypted) return [3 /*break*/, 3];
                        currentSecret = this._cacheSecret.CurrentKey.Key;
                        return [4 /*yield*/, this._crypto.encrypt({
                                encryptionSecret: currentSecret,
                                data: data,
                                doSerialize: this._cacheType === 0 /* localStorage */
                            })];
                    case 2:
                        dataToBeWriten = _a.sent();
                        size = dataToBeWriten.cipherText ? dataToBeWriten.cipherText.byteLength : 0;
                        return [3 /*break*/, 4];
                    case 3:
                        try {
                            size = typeof data === 'string' ? data.length : JSON.stringify(data).length;
                        }
                        catch (ex) {
                            /* no-op */
                        }
                        _a.label = 4;
                    case 4: return [4 /*yield*/, this._storage.write({
                            app: this._app,
                            key: cacheKey,
                            data: dataToBeWriten,
                            lastRead: buffered.cacheStats.lastRead,
                            parentKey: key.parentKey,
                            reads: buffered.cacheStats.reads,
                            size: size
                        })];
                    case 5:
                        _a.sent();
                        return [3 /*break*/, 8];
                    case 6:
                        // delete existing cache entry in storage
                        delete PersistentCache._buffer[cacheKey];
                        return [4 /*yield*/, this._storage.write({
                                key: cacheKey,
                                app: undefined,
                                data: undefined,
                                lastRead: undefined,
                                parentKey: key.parentKey,
                                reads: undefined,
                                size: undefined
                            })];
                    case 7:
                        _a.sent();
                        _a.label = 8;
                    case 8: return [3 /*break*/, 10];
                    case 9:
                        ex_5 = _a.sent();
                        logEndData({
                            resultType: _ms_telemetry_manager_lib_events_ResultTypeEnum__WEBPACK_IMPORTED_MODULE_6__["ResultTypeEnum"].Failure,
                            error: ex_5.message ? ex_5.message : ex_5.toString()
                        });
                        throw ex_5;
                    case 10:
                        logEndData({
                            resultType: _ms_telemetry_manager_lib_events_ResultTypeEnum__WEBPACK_IMPORTED_MODULE_6__["ResultTypeEnum"].Success
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    PersistentCache.prototype._logCacheStats = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                // debounce logging
                if (!this._logStatsTimer) {
                    this._logStatsTimer = setTimeout(function () { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
                        var stats;
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, this._storage.statistics()];
                                case 1:
                                    stats = _a.sent();
                                    return [2 /*return*/];
                            }
                        });
                    }); }, logStatsTimeout);
                }
                return [2 /*return*/];
            });
        });
    };
    PersistentCache.prototype._logQos = function (startData) {
        if (this._qos) {
            var app_1 = this._app;
            if (!startData.extraData) {
                startData.extraData = {};
            }
            startData.extraData.alias = startData.extraData.alias || app_1;
            var qos_1 = new this._qos(startData);
            return function (endData) {
                if (!endData.extraData) {
                    endData.extraData = {};
                }
                endData.extraData.alias = endData.extraData.alias || app_1;
                qos_1.end(endData);
            };
        }
        return function (endData) {
            // if qos is not provided in config, do no-op
            // this is to decouple telemetry code from persistent cache,
            // to make Persistent cache log telemtry itself, you have to
            // pass in Qos and Engagement as configuration when constructing Persistent cache
            return;
        };
    };
    // have a shared in-memory buffer for PersistentCache instances
    PersistentCache._buffer = {};
    return PersistentCache;
}());

//# sourceMappingURL=PersistentCache.js.map

/***/ }),

/***/ "56LG":
/*!***********************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/Icon.js ***!
  \***********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Loading office-ui-fabric-react/./lib/Icon.js
var pkg = __webpack_require__(/*! @microsoft/office-ui-fabric-react-bundle */ "KL1q");
module.exports = pkg.workaround_Icon;

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

/***/ "5GjD":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-shared-react@47.12.13_d89e40c38ccaa8bd6af6488f37cb196d/node_modules/@ms/odsp-shared-react/lib/components/HubNav/HubNav.resx.js ***!
  \***********************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var strings = {"editLabel":"Ēďĩţ","addLinkLabel":"Àďď ĺĩńķ","ariaLabel":"{0} ĥũƀ śĩţē ńàvĩĝàţĩōń","logoAriaLabel":"Ĥũƀ śĩţē ĺōĝō"};
strings.default = strings;
module.exports = strings;

/***/ }),

/***/ "5Txe":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-shared-react@47.12.13_d89e40c38ccaa8bd6af6488f37cb196d/node_modules/@ms/odsp-shared-react/lib/components/LivePersonaCardAdapter/DeferredSpLivePersonaCard.js ***!
  \*****************************************************************************************************************************************************************************************************************************/
/*! exports provided: DeferredSpLivePersonaCard, wrapWithDeferredSpLivePersonaCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeferredSpLivePersonaCard", function() { return DeferredSpLivePersonaCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wrapWithDeferredSpLivePersonaCard", function() { return wrapWithDeferredSpLivePersonaCard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _DeferredSpLivePersonaCard_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DeferredSpLivePersonaCard.scss */ "jgiY");
/* harmony import */ var office_ui_fabric_react_lib_Utilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! office-ui-fabric-react/lib/Utilities */ "mkpW");
/* harmony import */ var _ReactDeferredComponent_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ReactDeferredComponent/index */ "afe6");
/* harmony import */ var _ms_odsp_utilities_lib_features_FeatureOverrides__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ms/odsp-utilities/lib/features/FeatureOverrides */ "iVgB");






var DelayLoadLPC = { ODB: 1596 };
/**
 * Defer-loads SpLivePersonaCard, that's it.
 * @public
 */
var DeferredSpLivePersonaCard = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(DeferredSpLivePersonaCard, _super);
    function DeferredSpLivePersonaCard(props, context) {
        var _this = _super.call(this, props, context) || this;
        _this._onActivate = function () {
            var hovered = _this.state.hovered;
            if (!hovered) {
                _this.setState({
                    hovered: true
                });
            }
        };
        _this.modulePath = './SpLivePersonaCard';
        _this.moduleLoader = {
            load: function () {
                return Promise.all(/*! import() | shared-react-splivepersonacard */[__webpack_require__.e("vendors~shared-react-splivepersonacard~sp~896e3b47"), __webpack_require__.e("vendors~shared-react-splivepersonacard~sp~95564be9")]).then(__webpack_require__.bind(null, /*! ./SpLivePersonaCard */ "+o+5")).then(function (module) {
                    return module.SpLivePersonaCard;
                });
            }
        };
        _this.state = {
            hovered: !_ms_odsp_utilities_lib_features_FeatureOverrides__WEBPACK_IMPORTED_MODULE_5__["default"].isFeatureEnabled(DelayLoadLPC) || props.forceLoad
        };
        return _this;
    }
    DeferredSpLivePersonaCard.prototype.render = function () {
        var hovered = this.state.hovered;
        // Need to ensure _deferredComponentProps get the current this.props before render.
        this._deferredComponentProps = {
            modulePath: this.modulePath,
            moduleLoader: this.moduleLoader,
            props: this.props,
            customWaiter: this.props.customWaiter,
            placeHolder: this.props.placeHolder
        };
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { onMouseOver: this._onActivate, onClick: this._onActivate, onFocus: this._onActivate, onMouseDown: this._onActivate, onKeyDown: this._onActivate, className: 'sp-deferredLivePersonaCard-root', tabIndex: -1 }, hovered ? (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ReactDeferredComponent_index__WEBPACK_IMPORTED_MODULE_4__["ReactDeferredComponent"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this._deferredComponentProps), this.props.children)) : (this.props.children)));
    };
    return DeferredSpLivePersonaCard;
}(office_ui_fabric_react_lib_Utilities__WEBPACK_IMPORTED_MODULE_3__["BaseComponent"]));

/**
 * @public
 */
function wrapWithDeferredSpLivePersonaCard(cardProps, childElement) {
    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](DeferredSpLivePersonaCard, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, cardProps), childElement);
}
//# sourceMappingURL=DeferredSpLivePersonaCard.js.map

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

/***/ "6GcD":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-datasources@45.13.10_e509c819ab980023b76e5746ec0fc9e2/node_modules/@ms/odsp-datasources/lib/dataSources/site/SiteDataSource.js ***!
  \***********************************************************************************************************************************************************************************************/
/*! exports provided: SiteReadOnlyState, SiteDataSource, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SiteDataSource", function() { return SiteDataSource; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _base_CachedDataSource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../base/CachedDataSource */ "zpEg");
/* harmony import */ var _interfaces_ISpPageContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../interfaces/ISpPageContext */ "GlwB");
/* harmony import */ var _ms_odsp_utilities_lib_async_Promise__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ms/odsp-utilities/lib/async/Promise */ "7Ihg");
/* harmony import */ var _ms_odsp_utilities_lib_uri_Uri__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ms/odsp-utilities/lib/uri/Uri */ "I5DX");
/* harmony import */ var _SiteReadOnlyState__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SiteReadOnlyState */ "E4PQ");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SiteReadOnlyState", function() { return _SiteReadOnlyState__WEBPACK_IMPORTED_MODULE_5__["SiteReadOnlyState"]; });







var SITE_DATA_SOURCE_NAME = 'SiteDataSource';
/**
 * This data source is for calls under "/_api/Site" (the context SPSite).
 */
var SiteDataSource = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(SiteDataSource, _super);
    function SiteDataSource(pageContext, getOAuthToken) {
        var _this = _super.call(this, {
            dataSourceName: SITE_DATA_SOURCE_NAME,
            id: SITE_DATA_SOURCE_NAME + "(" + (pageContext ? pageContext.siteId : '') + ")"
        }, {
            pageContext: pageContext
        }) || this;
        _this.getOAuthToken = getOAuthToken;
        return _this;
    }
    /**
     * Returns whether the context SPSite is currently ReadOnly.
     */
    SiteDataSource.prototype.getReadOnlyState = function () {
        var _this = this;
        var fullState = this.getFullSiteReadOnlyState();
        // if the context info doesn't have readOnlyState at all, call the site API
        if (fullState === -2 /* unknown */) {
            return this.getDataUtilizingPersistentCache({
                getUrl: function () { return Object(_interfaces_ISpPageContext__WEBPACK_IMPORTED_MODULE_2__["getSafeWebServerRelativeUrl"])(_this._pageContext) + "/_api/Site/ReadOnly"; },
                parseResponse: function (responseText) {
                    var response = JSON.parse(responseText);
                    return response && response.d && response.d.ReadOnly;
                },
                qosName: 'SiteReadOnly',
                method: 'GET',
                noRedirect: true /* noRedirect */
            });
        }
        else {
            // Besides NotReadOnly, all the other states are read-only
            return _ms_odsp_utilities_lib_async_Promise__WEBPACK_IMPORTED_MODULE_3__["default"].resolve(fullState !== -1 /* notReadOnly */);
        }
    };
    /**
     * Returns the read-only state for the site.
     */
    SiteDataSource.prototype.getFullSiteReadOnlyState = function () {
        if (this._pageContext.readOnlyState === undefined) {
            return -2 /* unknown */;
        }
        else if (this._pageContext.readOnlyState === null) {
            return -1 /* notReadOnly */;
        }
        else {
            return this._pageContext.readOnlyState;
        }
    };
    /**
     * Returns a StatusBarInfo object representing what should be displayed in the site status bar.
     */
    SiteDataSource.prototype.getStatusBarInfo = function () {
        var _this = this;
        return this.getDataUtilizingPersistentCache({
            getUrl: function () {
                return Object(_interfaces_ISpPageContext__WEBPACK_IMPORTED_MODULE_2__["getSafeWebServerRelativeUrl"])(_this._pageContext) + "/_api/Site?$select=StatusBarLink,StatusBarText";
            },
            parseResponse: function (responseText) {
                var response = JSON.parse(responseText);
                if (!response || !response.d) {
                    return {
                        StatusBarText: undefined,
                        StatusBarLinkText: undefined,
                        StatusBarLinkTarget: undefined
                    };
                }
                var statusBarLink = response.d.StatusBarLink;
                var linkText = undefined;
                var encodedLinkTarget = undefined;
                if (statusBarLink) {
                    var parts = statusBarLink.split('|');
                    linkText = parts[0];
                    var linkTarget = parts.length === 1 ? parts[0] : parts[1];
                    // make sure the link target starts with http
                    if (linkTarget.lastIndexOf('http', 0) === 0) {
                        var linkUri = new _ms_odsp_utilities_lib_uri_Uri__WEBPACK_IMPORTED_MODULE_4__["default"](linkTarget);
                        encodedLinkTarget = encodeURI(linkUri.toString());
                    }
                }
                // React handles making sure that the text doesn't do anything horrible
                return {
                    StatusBarText: response.d.StatusBarText,
                    StatusBarLinkText: linkText,
                    StatusBarLinkTarget: encodedLinkTarget
                };
            },
            qosName: 'SiteStatusBar',
            method: 'GET',
            noRedirect: true
        });
    };
    /**
     * Sets the classification properties of the SPWeb Site.
     */
    SiteDataSource.prototype.setClassificationProperty = function (classification) {
        var restUrl = Object(_interfaces_ISpPageContext__WEBPACK_IMPORTED_MODULE_2__["getSafeWebServerRelativeUrl"])(this._pageContext) + "/_api/Site";
        var postData = JSON.stringify({
            __metadata: {
                type: 'SP.Site'
            },
            Classification: classification
        });
        return this.dataRequestor.getData({
            url: restUrl,
            qosName: 'SetClassificationProperty',
            additionalPostData: postData,
            method: 'PATCH' /*method*/
        });
    };
    /**
     * Sets the classification properties of the SPWeb Site, with sensitivityLabel as id.
     * sensitivityLabel represents the unique id of the O365 Classifications
     */
    SiteDataSource.prototype.setClassificationPropertyAndId = function (classification, sensitivityLabel) {
        var restUrl = Object(_interfaces_ISpPageContext__WEBPACK_IMPORTED_MODULE_2__["getSafeWebServerRelativeUrl"])(this._pageContext) + "/_api/Site";
        var postData = JSON.stringify({
            __metadata: {
                type: 'SP.Site'
            },
            Classification: classification,
            SensitivityLabelId: sensitivityLabel
        });
        return this.dataRequestor.getData({
            url: restUrl,
            qosName: 'SetClassificationProperty',
            additionalPostData: postData,
            method: 'PATCH'
        });
    };
    /**
     * Gets the CanSyncHubSitePermissions property of the SPSite.
     */
    SiteDataSource.prototype.getCanSyncHubSitePermissionsProperty = function (forceRefresh) {
        var _this = this;
        return this.getDataUtilizingPersistentCache({
            getUrl: function () { return Object(_interfaces_ISpPageContext__WEBPACK_IMPORTED_MODULE_2__["getSafeWebServerRelativeUrl"])(_this._pageContext) + "/_api/Site/CanSyncHubSitePermissions"; },
            parseResponse: function (responseText) {
                var response = JSON.parse(responseText);
                return response && response.d && response.d.CanSyncHubSitePermissions;
            },
            qosName: 'GetCanSyncHubSitePermissionsProperty',
            method: 'GET',
            cachingStrategy: forceRefresh
                ? 3 /* bypassCache */
                : 0 /* useCacheAndUpdateInTheBackground */,
            noRedirect: true
        });
    };
    /**
     * Sets the CanSyncHubSitePermissions property of the SPSite.
     */
    SiteDataSource.prototype.setCanSyncHubSitePermissionsProperty = function (enabled) {
        var restUrl = Object(_interfaces_ISpPageContext__WEBPACK_IMPORTED_MODULE_2__["getSafeWebServerRelativeUrl"])(this._pageContext) + "/_api/Site";
        var postData = JSON.stringify({
            __metadata: {
                type: 'SP.Site'
            },
            CanSyncHubSitePermissions: enabled
        });
        return this.dataRequestor.getData({
            url: restUrl,
            qosName: 'SetCanSyncHubSitePermissionsProperty',
            additionalPostData: postData,
            method: 'PATCH' /*method*/,
            noRedirect: true
        });
    };
    SiteDataSource.prototype.isSiteFeatureEnabled = function (siteFeatureGuid, webServerRelativeUrl) {
        var _this = this;
        var hostname = webServerRelativeUrl
            ? webServerRelativeUrl
            : Object(_interfaces_ISpPageContext__WEBPACK_IMPORTED_MODULE_2__["getSafeWebServerRelativeUrl"])(this._pageContext);
        var restUrl = hostname + "/_api/site/Features/GetById('" + siteFeatureGuid.toString() + "')";
        return this.getOAuthToken(hostname).then(function (token) {
            return _this.dataRequestor.getData({
                url: restUrl,
                qosName: 'GetSPSiteFeatureEnabled',
                method: 'GET',
                authToken: (token !== null && token !== void 0 ? token : undefined),
                parseResponse: function (response) {
                    try {
                        var jsonResponse = JSON.parse(response);
                        if (jsonResponse && jsonResponse.d && jsonResponse.d.DefinitionId) {
                            return true;
                        }
                    }
                    catch (error) {
                        return false;
                    }
                    return false;
                }
            });
        });
    };
    return SiteDataSource;
}(_base_CachedDataSource__WEBPACK_IMPORTED_MODULE_1__["default"]));

/* harmony default export */ __webpack_exports__["default"] = (SiteDataSource);
//# sourceMappingURL=SiteDataSource.js.map

/***/ }),

/***/ "6R0g":
/*!*************************************************************!*\
  !*** ./lib/components/SiteLeftNav/ReturnToClassicButton.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/office-ui-fabric-react-bundle */ "KL1q");
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _LeftNav_resx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LeftNav.resx */ "q/ZR");
var _LeftNav_resx__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./LeftNav.resx */ "q/ZR", 1);
/* harmony import */ var _LeftNav_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./LeftNav.module.scss */ "D3jz");
/**
 * @copyright (c) Microsoft Corporation.  All rights reserved.
 */




// tslint:disable-next-line:variable-name
var ReturnToClassicButton = function (props) {
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: _LeftNav_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].returnToClassicWrapper },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_1__["Link"], { "data-automation-id": 'returnToClassicButton', onClick: props.onClick, ariaLabel: _LeftNav_resx__WEBPACK_IMPORTED_MODULE_2__["returnToClassicAriaLabel"] }, _LeftNav_resx__WEBPACK_IMPORTED_MODULE_2__["returnToClassic"])));
};
/* harmony default export */ __webpack_exports__["default"] = (ReturnToClassicButton);


/***/ }),

/***/ "6e34":
/*!**********************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/utilities-error@1.0.0/node_modules/@ms/utilities-error/lib/ApiError.js ***!
  \**********************************************************************************************************************************/
/*! exports provided: ApiError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiError", function() { return ApiError; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _CustomError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CustomError */ "unYt");


/**
 * Custom error base class for the common scenario of generic errors that should be reported in
 * Quality of Service metrics.
 * @public
 */
var ApiError = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ApiError, _super);
    function ApiError(props) {
        var _this = _super.call(this, props) || this;
        _this.name = 'ApiError';
        var innerError = props.innerError;
        var innerErrorAsApiError = innerError ? innerError : undefined;
        var errorData = innerErrorAsApiError
            ? Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, (typeof innerErrorAsApiError.correlationId === 'string'
                ? { correlationId: innerErrorAsApiError.correlationId }
                : {})), (typeof innerErrorAsApiError.isExpected === 'boolean'
                ? { isExpected: innerErrorAsApiError.isExpected }
                : {})), (typeof innerErrorAsApiError.name === 'string' ? { code: innerErrorAsApiError.name } : {})), (typeof innerErrorAsApiError.code === 'string' ? { code: innerErrorAsApiError.code } : {})), (typeof innerErrorAsApiError.extraData === 'object'
                ? { extraData: innerErrorAsApiError.extraData }
                : {})) : {};
        var _a = props.correlationId, correlationId = _a === void 0 ? errorData.correlationId : _a, _b = props.isExpected, isExpected = _b === void 0 ? errorData.isExpected : _b, extraData = props.extraData;
        _this.correlationId = correlationId;
        _this.isExpected = !!isExpected;
        _this.code = props.code || errorData.code || '';
        _this.extraData = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, (errorData.extraData || {})), (extraData || {}));
        return _this;
    }
    return ApiError;
}(_CustomError__WEBPACK_IMPORTED_MODULE_1__["CustomError"]));

//# sourceMappingURL=ApiError.js.map

/***/ }),

/***/ "7//7":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/css-loader@3.2.1_webpack@4.44.2/node_modules/css-loader/dist/cjs.js!/agent/_work/1/s/common/temp/node_modules/.pnpm/postcss-loader@3.0.0/node_modules/postcss-loader/src??postcss!./lib/components/SiteLeftNav/LeftNav.module.css ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../common/temp/node_modules/.pnpm/css-loader@3.2.1_webpack@4.44.2/node_modules/css-loader/dist/runtime/api.js */ "5ADk")(false);
// Module
exports.push([module.i, ".f_c_6b55bba6{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;overflow-x:hidden;overflow-y:auto;width:206px;z-index:8}.f_c_6b55bba6 nav{width:206px}.f_c_6b55bba6.g_c_6b55bba6,.f_c_6b55bba6.g_c_6b55bba6 nav{width:227px}.h_c_6b55bba6{z-index:1}.i_c_6b55bba6 ul{margin-top:0}.i_c_6b55bba6 .j_c_6b55bba6{float:right;height:40px;color:\"[theme:neutralPrimary, default: #323130]\"}.i_c_6b55bba6 .j_c_6b55bba6:hover{color:\"[theme:themePrimary, default: #0078d4]\"}.i_c_6b55bba6.g_c_6b55bba6:not(.k_c_6b55bba6){height:100%}@media screen and (max-width:1024px){.l_c_6b55bba6{display:none}}.l_c_6b55bba6+.i_c_6b55bba6{display:none}.i_c_6b55bba6,.l_c_6b55bba6{background-color:\"[theme:white, default: #ffffff]\";border-color:\"[theme:bodyDivider, default: #edebe9]\";width:206px;-ms-flex-negative:0;flex-shrink:0;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}[dir=ltr] .i_c_6b55bba6,[dir=ltr] .l_c_6b55bba6{border-right-width:1px}[dir=rtl] .i_c_6b55bba6,[dir=rtl] .l_c_6b55bba6{border-left-width:1px}[dir=ltr] .i_c_6b55bba6,[dir=ltr] .l_c_6b55bba6{border-right-style:solid}[dir=rtl] .i_c_6b55bba6,[dir=rtl] .l_c_6b55bba6{border-left-style:solid}.i_c_6b55bba6>.ms-FocusZone,.l_c_6b55bba6>.ms-FocusZone{-ms-flex-positive:1;flex-grow:1;min-height:0;overflow-x:hidden;overflow-y:auto}.i_c_6b55bba6.g_c_6b55bba6,.l_c_6b55bba6.g_c_6b55bba6{width:227px}.i_c_6b55bba6.g_c_6b55bba6 .k_c_6b55bba6,.l_c_6b55bba6.g_c_6b55bba6 .k_c_6b55bba6{width:272px}@media screen and (max-width:1023px){.k_c_6b55bba6.i_c_6b55bba6>.ms-FocusZone{overflow:visible}}.sp-pageLayout-horizontalNav .l_c_6b55bba6{position:absolute;top:0;bottom:0;z-index:8}.k_c_6b55bba6 .f_c_6b55bba6,.k_c_6b55bba6.f_c_6b55bba6{position:absolute;top:0;bottom:0;background-color:\"[theme:white, default: #ffffff]\";z-index:10}.k_c_6b55bba6 .f_c_6b55bba6.g_c_6b55bba6,.k_c_6b55bba6 .f_c_6b55bba6.g_c_6b55bba6 nav,.k_c_6b55bba6.f_c_6b55bba6.g_c_6b55bba6,.k_c_6b55bba6.f_c_6b55bba6.g_c_6b55bba6 nav{width:272px}[dir=ltr] .k_c_6b55bba6 .f_c_6b55bba6.g_c_6b55bba6,[dir=ltr] .k_c_6b55bba6.f_c_6b55bba6.g_c_6b55bba6{box-shadow:30px 0 30px -30px rgba(0,0,0,.4)}[dir=rtl] .k_c_6b55bba6 .f_c_6b55bba6.g_c_6b55bba6,[dir=rtl] .k_c_6b55bba6.f_c_6b55bba6.g_c_6b55bba6{box-shadow:-30px 0 30px -30px rgba(0,0,0,.4)}.i_c_6b55bba6 .ms-Nav-linkText{vertical-align:top}.i_c_6b55bba6 .ms-Nav-group{width:100%}.i_c_6b55bba6 .ms-Nav-group .ms-Nav-chevronButton{border-bottom:0;font-size:14px;font-weight:600}.i_c_6b55bba6 .ms-Nav-groupContent{margin-bottom:0}@media print{.i_c_6b55bba6{display:none}}@media screen and (max-width:1023px){[dir=ltr] .i_c_6b55bba6{border-right-width:0}[dir=rtl] .i_c_6b55bba6{border-left-width:0}}.m_c_6b55bba6{-ms-flex:0 0 auto;flex:0 0 auto;width:206px;box-sizing:border-box;padding:29px}.m_c_6b55bba6.g_c_6b55bba6{width:227px}.n_c_6b55bba6,div[class*=teamifyBanner]{border-color:currentcolor \"[theme:neutralLight, default: #edebe9]\" \"[theme:neutralLight, default: #edebe9]\";border-top:1px solid \"[theme:neutrallight, default: #edebe9]\"}.n_c_6b55bba6{padding:8px 20px 8px 32px;font-size:14px}", ""]);


/***/ }),

/***/ "7AwM":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-datasources@45.13.10_e509c819ab980023b76e5746ec0fc9e2/node_modules/@ms/odsp-datasources/lib/utilities/permissions/Identity.js ***!
  \**********************************************************************************************************************************************************************************************/
/*! exports provided: IdentityType, Identity, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IdentityType", function() { return IdentityType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Identity", function() { return Identity; });
var IdentityType;
(function (IdentityType) {
    IdentityType[IdentityType["anonymous"] = 1] = "anonymous";
    IdentityType[IdentityType["msa"] = 2] = "msa";
    IdentityType[IdentityType["aad"] = 3] = "aad";
})(IdentityType || (IdentityType = {}));
var Identity = /** @class */ (function () {
    function Identity() {
    }
    return Identity;
}());

/* harmony default export */ __webpack_exports__["default"] = (Identity);
//# sourceMappingURL=Identity.js.map

/***/ }),

/***/ "7Ihg":
/*!***********************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-utilities@29.7.9_5d977624104b06c7bcaa2de974ff51f1/node_modules/@ms/odsp-utilities/lib/async/Promise.js ***!
  \***********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ms/odsp-core-bundle */ "K9kD");
/* harmony import */ var _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__["Promise"]; });

// Loading @ms/odsp-utilities/./lib/async/Promise.js



/***/ }),

/***/ "7n8n":
/*!***************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-media@2.0.244/node_modules/@ms/odsp-media/dist/media/images/sitescripts/working_sitedesign.png ***!
  \***************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "working_sitedesign_6a7bb3de8d9cdee7b3dcb26a72fb31ec.png";

/***/ }),

/***/ "7qpm":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-shared-react@47.12.13_d89e40c38ccaa8bd6af6488f37cb196d/node_modules/@ms/odsp-shared-react/lib/components/CompositeHeader/subComponents/SiteScriptProgressIndicatorLoader.js ***!
  \********************************************************************************************************************************************************************************************************************************************/
/*! exports provided: SiteScriptProgressIndicatorLoader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SiteScriptProgressIndicatorLoader", function() { return SiteScriptProgressIndicatorLoader; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ReactDeferredComponent_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ReactDeferredComponent/index */ "afe6");



var SiteScriptProgressIndicatorLoader = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(SiteScriptProgressIndicatorLoader, _super);
    function SiteScriptProgressIndicatorLoader(props) {
        var _this = _super.call(this, props) || this;
        var moduleLoader = props.moduleLoader
            ? props.moduleLoader
            : {
                load: function (modulePath) {
                    return Promise.all(/*! import() | shared-react-sitescriptprogressindicator */[__webpack_require__.e("vendors~shared-react-sitescriptprogressin~92a2151d"), __webpack_require__.e("vendors~shared-react-sitescriptprogressindicator")]).then(__webpack_require__.bind(null, /*! ./SiteScriptProgressIndicator */ "uUbc")).then(function (siteScriptProgressIndicator) {
                        return {
                            './SiteScriptProgressIndicator': siteScriptProgressIndicator
                        };
                    });
                },
                parse: function (module) {
                    return module['./SiteScriptProgressIndicator'] &&
                        module['./SiteScriptProgressIndicator'].SiteScriptProgressIndicator;
                }
            };
        _this._deferredComponentProps = {
            modulePath: './SiteScriptProgressIndicator',
            moduleLoader: moduleLoader,
            customWaiter: _this.props.moduleLoaderWaiter,
            props: {
                pageContext: _this.props.pageContext,
                responsiveMode: _this.props.responsiveMode,
                imageUrls: _this.props.imageUrls
            }
        };
        return _this;
    }
    SiteScriptProgressIndicatorLoader.prototype.render = function () {
        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ReactDeferredComponent_index__WEBPACK_IMPORTED_MODULE_2__["ReactDeferredComponent"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this._deferredComponentProps));
    };
    return SiteScriptProgressIndicatorLoader;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));

//# sourceMappingURL=SiteScriptProgressIndicatorLoader.js.map

/***/ }),

/***/ "8G1T":
/*!***************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-utilities@29.7.9_5d977624104b06c7bcaa2de974ff51f1/node_modules/@ms/odsp-utilities/lib/features/Features.js ***!
  \***************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ms/odsp-core-bundle */ "K9kD");
/* harmony import */ var _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__["Features"]; });

// Loading @ms/odsp-utilities/./lib/features/Features.js



/***/ }),

/***/ "8MrD":
/*!****************************************************!*\
  !*** ./lib/loaders/spcx-siteHeaderStateManager.js ***!
  \****************************************************/
/*! exports provided: stateManagerLoader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stateManagerLoader", function() { return stateManagerLoader; });
// tslint:disable-next-line:export-name
function stateManagerLoader(params) {
    return Promise.all(/*! import() | spcx-siteheaderstatemanager */[__webpack_require__.e("vendors~editnavchunk~spcx-siteheaderstatemanager"), __webpack_require__.e("vendors~spcx-siteheaderstatemanager")]).then(__webpack_require__.bind(null, /*! @ms/odsp-shared-react/lib/containers/compositeHeader/StateManager */ "yz9z")).then(function (module) { return new module.default(params); }); // tslint:disable-line:no-any
}


/***/ }),

/***/ "8XOe":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-shared-react@47.12.13_d89e40c38ccaa8bd6af6488f37cb196d/node_modules/@ms/odsp-shared-react/lib/components/HorizontalNav/HorizontalNav.styles.js ***!
  \***************************************************************************************************************************************************************************************************************/
/*! exports provided: getStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStyles", function() { return getStyles; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ms_shared_react_fluent_theme_lib_Fluent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ms/shared-react-fluent-theme/lib/Fluent */ "rFal");


var getStyles = function (props) {
    var theme = props.theme;
    var palette = theme.palette, semanticColors = theme.semanticColors;
    return {
        root: 'ms-HorizontalNav',
        link: [
            Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ color: semanticColors.bodySubtext }, theme.fonts.small), { selectors: {
                    ':hover': {
                        color: palette.themePrimary // todo: figure out
                    },
                    '&.is-header': {
                        cursor: 'auto',
                        color: semanticColors.bodySubtext
                    }
                } })
        ],
        linkUnselected: {
            border: 'none' // since this is sometimes a button
        },
        linkSelected: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ color: semanticColors.bodyText, borderBottom: '2px solid ' + palette.themePrimary }, Object(_ms_shared_react_fluent_theme_lib_Fluent__WEBPACK_IMPORTED_MODULE_1__["fluentFontWeights"])(theme).semibold),
        splitButton: {
            selectors: {
                ':hover': {
                    color: palette.themePrimary
                }
            }
        },
        chevron: {
            color: semanticColors.bodySubtext
        },
        editButton: [
            'ms-HorizontalNavItem-Edit',
            {
                border: 'none',
                color: palette.themePrimary,
                selectors: {
                    ':hover': {
                        color: palette.themeDarker,
                        textDecoration: 'underline'
                    }
                }
            }
        ],
        overflowButton: {
            border: 'none'
        }
    };
};
//# sourceMappingURL=HorizontalNav.styles.js.map

/***/ }),

/***/ "8s8S":
/*!*****************************************!*\
  !*** ./lib/components/HubNav/HubNav.js ***!
  \*****************************************/
/*! exports provided: HubNav */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HubNav", function() { return HubNav; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @microsoft/office-ui-fabric-react-bundle */ "KL1q");
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @microsoft/sp-diagnostics */ "ut3N");
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ms_odsp_shared_react_lib_HubNav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ms/odsp-shared-react/lib/HubNav */ "mXoJ");
/* harmony import */ var _ms_odsp_shared_react_lib_utilities_nav_NavCommon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ms/odsp-shared-react/lib/utilities/nav/NavCommon */ "qBs0");
/* harmony import */ var _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ms/sp-telemetry */ "2q6Q");
/* harmony import */ var _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _dataProviders_SPHomeHubNavDataSource__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../dataProviders/SPHomeHubNavDataSource */ "GPAM");
/* harmony import */ var _HubNav_resx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./HubNav.resx */ "fV/o");
var _HubNav_resx__WEBPACK_IMPORTED_MODULE_9___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./HubNav.resx */ "fV/o", 1);










/**
 * Wrapper for the React HubNav control.
 * This class should ONLY contain the SP-CLIENT specific details of the hub nav host.
 *
 * @public
 */
var HubNav = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(HubNav, _super);
    function HubNav(props) {
        var _this = _super.call(this, props) || this;
        _this._onEditLinkGroup = function (evt) {
            // Eventually, this should be moved somewhere else so it can handle edit clicks when the hub nav
            // is displayed in the left nav on mobile (and keep the left nav/hub nav in sync), but editing
            // on mobile in sp-client isn't supported yet.
            var monitor = new _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_6__["_QosMonitor"]('HubNav._onEditClicked');
            var group = evt.args.group;
            if (group.onEditClicked) {
                group.onEditClicked();
            }
            // Editing the publishing nav directly in modern isn't supported
            // (but we still want to log the click and call the group's click handler, above)
            if (!_this.props.spPageContext.PublishingFeatureOn && _this.props.onEditNavClicked) {
                _this.props.onEditNavClicked(group, _this._exitEditMode, evt.args.updateDisplayedLinks, true /* hide search box */, _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_7__["_SPFlight"].isEnabled(1557 /* MegaFooter */) ? _HubNav_resx__WEBPACK_IMPORTED_MODULE_9__["EditHubNavLinksTitle"] : '');
            }
            evt.stopPropagation();
            evt.preventDefault();
            monitor.writeSuccess();
        };
        _this._exitEditMode = function () {
            _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_3__["_TraceLogger"].logVerbose(HubNav._logSource, 'HubNav.tsx: exitEditMode');
        };
        _this._getDataSource = function () {
            return new _dataProviders_SPHomeHubNavDataSource__WEBPACK_IMPORTED_MODULE_8__["default"](_this.props.spPageContext, _this.props.hubData);
        };
        _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_6__["_PerformanceLogger"].startMarkForComponent(HubNav._componentName);
        return _this;
    }
    HubNav.prototype.componentDidMount = function () {
        _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_3__["_TraceLogger"].logVerbose(HubNav._logSource, 'HubNavHost.tsx: componentIsMounted');
        _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_6__["_PerformanceLogger"].setPerformanceProperty('hubNavHostMounted');
        // Fired by the hub nav when the Edit link is clicked
        this._events.on(window, _ms_odsp_shared_react_lib_utilities_nav_NavCommon__WEBPACK_IMPORTED_MODULE_5__["EDIT_EVENT_NAME"], this._onEditLinkGroup);
        _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_6__["_PerformanceLogger"].endMarkForComponent(HubNav._componentName, true /*waitForPaint*/);
    };
    HubNav.prototype.componentWillUnmount = function () {
        this._events.off(window, _ms_odsp_shared_react_lib_utilities_nav_NavCommon__WEBPACK_IMPORTED_MODULE_5__["EDIT_EVENT_NAME"]);
    };
    HubNav.prototype.shouldComponentUpdate = function (nextProps) {
        return (this.props.spPageContext.siteId !== nextProps.spPageContext.siteId ||
            this.props.spPageContext.webId !== nextProps.spPageContext.webId ||
            this.props.hubData !== nextProps.hubData);
    };
    HubNav.prototype.render = function () {
        var reactComponentModuleLoader = {
            load: function (modulePath) {
                return Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! office-ui-fabric-react/lib/ContextualMenu */ "u4xd")).then(function (contextualMenuModule) {
                    return {
                        'office-ui-fabric-react/lib/ContextualMenu': contextualMenuModule
                    };
                }); // tslint:disable-line:no-any
            },
            parse: undefined
        };
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ms_odsp_shared_react_lib_HubNav__WEBPACK_IMPORTED_MODULE_4__["HubNav"], { pageContext: this.props.spPageContext, moduleLoader: reactComponentModuleLoader, getDataSource: this.props.hubData && this._getDataSource }));
    };
    HubNav._logSource = _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_3__["_LogSource"].create('HubNavHost');
    HubNav._componentName = 'HubNav';
    return HubNav;
}(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_2__["BaseComponent"]));



/***/ }),

/***/ "9n2P":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-datasources@45.13.10_e509c819ab980023b76e5746ec0fc9e2/node_modules/@ms/odsp-datasources/lib/dataSources/base/IRequestCache.js ***!
  \**********************************************************************************************************************************************************************************************/
/*! exports provided: DEFAULT_CACHE_TIMEOUT_TIME, DEFAULT_PERSISTENT_CACHE_TIMEOUT_TIME, DEFAULT_CACHE_ID_PREFIX, CachingStrategy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_CACHE_TIMEOUT_TIME", function() { return DEFAULT_CACHE_TIMEOUT_TIME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_PERSISTENT_CACHE_TIMEOUT_TIME", function() { return DEFAULT_PERSISTENT_CACHE_TIMEOUT_TIME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_CACHE_ID_PREFIX", function() { return DEFAULT_CACHE_ID_PREFIX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CachingStrategy", function() { return CachingStrategy; });
var DEFAULT_CACHE_TIMEOUT_TIME = 300000;
var DEFAULT_PERSISTENT_CACHE_TIMEOUT_TIME = 1000 * 60 * 60 * 24;
// sp-home oil uses "ms-oil-datasource-" as prefix.
var DEFAULT_CACHE_ID_PREFIX = 'odsp-ds-';
var CachingStrategy;
(function (CachingStrategy) {
    CachingStrategy[CachingStrategy["useCacheAndUpdateInTheBackground"] = 0] = "useCacheAndUpdateInTheBackground";
    CachingStrategy[CachingStrategy["useCacheIfNotExpired"] = 1] = "useCacheIfNotExpired";
    CachingStrategy[CachingStrategy["onlyCache"] = 2] = "onlyCache";
    CachingStrategy[CachingStrategy["bypassCache"] = 3] = "bypassCache"; // If true, will bypass the cache and issue a server call but still cache server response
})(CachingStrategy || (CachingStrategy = {}));
//# sourceMappingURL=IRequestCache.js.map

/***/ }),

/***/ "AfY0":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-datasources@45.13.10_e509c819ab980023b76e5746ec0fc9e2/node_modules/@ms/odsp-datasources/lib/dataSources/base/DataSource.js ***!
  \*******************************************************************************************************************************************************************************************/
/*! exports provided: DataSource, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataSource", function() { return DataSource; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ms_odsp_utilities_lib_async_Promise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ms/odsp-utilities/lib/async/Promise */ "7Ihg");
/* harmony import */ var _DataRequestor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DataRequestor */ "PayJ");
/* harmony import */ var _GetDataWithSyncClient__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./GetDataWithSyncClient */ "BPn7");
/* harmony import */ var _ms_data_sync_nucleus_lib_DataSyncFlights__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ms/data-sync-nucleus/lib/DataSyncFlights */ "FdyI");
/* harmony import */ var _ms_odsp_utilities_lib_features_FeatureOverrides__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ms/odsp-utilities/lib/features/FeatureOverrides */ "iVgB");
/* harmony import */ var _ms_odsp_utilities_lib_killswitch_Killswitch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ms/odsp-utilities/lib/killswitch/Killswitch */ "QUgr");







var NUCLEUS_PLUGIN_KILLSWITCH = '68FFDA86-24A1-4A87-A304-0B53C0058679';
// Async load for nucleus sync, if the flight is available.
var getDataSyncClientImport = (function () {
    var check = function (f) { return _ms_odsp_utilities_lib_features_FeatureOverrides__WEBPACK_IMPORTED_MODULE_5__["default"].isFeatureEnabled(f); };
    if (Object(_ms_data_sync_nucleus_lib_DataSyncFlights__WEBPACK_IMPORTED_MODULE_4__["isDataSyncEnabled"])(check)) {
        return __webpack_require__.e(/*! import() | data-sync-nucleus */ "vendors~data-sync-nucleus").then(__webpack_require__.bind(null, /*! @ms/data-sync-nucleus/lib/DataSync */ "O/Ab")).then(function (lib) { return function (aadUserId) { return lib.getDataSyncClient(aadUserId, check); }; });
    }
    else {
        return _ms_odsp_utilities_lib_async_Promise__WEBPACK_IMPORTED_MODULE_1__["default"].resolve(function (aadUserId) { return undefined; });
    }
})();
/* Use this as a base class for any generic data source */
/* For a data source that provides a list of items use the ItemDataSource */
var DataSource = /** @class */ (function () {
    function DataSource(params, dependencies) {
        var pageContext = (this._pageContext = dependencies.pageContext);
        var tokenProvider = dependencies.tokenProvider;
        var _a = dependencies.dataRequestorType, dataRequestorType = _a === void 0 ? /** @class */ (function (_super) {
            Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(class_1, _super);
            function class_1(params) {
                return _super.call(this, params, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ pageContext: pageContext, tokenProvider: tokenProvider }, (!Object(_ms_odsp_utilities_lib_killswitch_Killswitch__WEBPACK_IMPORTED_MODULE_6__["getKillSwitch"])(pageContext).isActivated(NUCLEUS_PLUGIN_KILLSWITCH, '11/5/2020', 'Factor Nucleus support into DataRequestor plugin')
                    ? {
                        dataSyncClient: _ms_odsp_utilities_lib_async_Promise__WEBPACK_IMPORTED_MODULE_1__["default"].resolve(dataSyncClient),
                        getDataWithSyncClient: _GetDataWithSyncClient__WEBPACK_IMPORTED_MODULE_3__["getDataWithSyncClient"]
                    }
                    : {}))) || this;
            }
            return class_1;
        }(_DataRequestor__WEBPACK_IMPORTED_MODULE_2__["default"])) : _a, dataSyncClient = dependencies.dataSyncClient;
        var _b = params.dataSourceName, dataSourceName = _b === void 0 ? 'DataSource' : _b;
        this.dataSyncClient = dataSyncClient;
        this.dataRequestor = new dataRequestorType({
            qosName: dataSourceName
        });
    }
    /**
     * @deprecated Override `dataSourceName` when passing `params` in the constructor.
     */
    DataSource.prototype.getDataSourceName = function () {
        return this.dataSourceName;
    };
    /**
     * @deprecated Pass `needsRequestDigest` to `this.dataRequestor.getData()` when making API calls.
     */
    DataSource.prototype.needsRequestDigest = function (url) {
        return true;
    };
    /**
     *
     *
     * @protected
     * @template T The type of the data returned by the parseResponse callback param.
     * @param {() => string} getUrl Lambda that returns the URL to which the datasource should make
     *                              the request.
     * @param {(responseText: string, serverData: ServerData) => T} parseResponse Function that takes in the response.
     *
     * @param {string} qosName Named used to Qos Logging.
     * @param {() => string} getAdditionalPostData Lambda that returns the additional POST string blob.
     * @param {string} method Method used to make the request.
     * @param {{ [key: string]: string }} additionalHeaders Additional headers to send as part of the request.
     * @param {string} contentType defaults to application/json;odata=verbose.
     * @param {number} maxRetries Maximum number of times to retry the request, defaults to 0.
     * @param {boolean} noRedirect Optional, defaults to false. If true and user hits 403, will redirect to auth.
     * @param {boolean} crossSiteCollectionCall
     * @param {(errorData: IErrorData) => string} Optional override for qos error handler
     * @returns {Promise<T>}
     *
     * @deprecated Use `this.dataRequestor.getData()` instead to make API calls, as it supports better configurability of optional parameters.
     */
    DataSource.prototype.getData = function (getUrl, parseResponse, qosName, getAdditionalPostData, method, additionalHeaders, contentType, // defaults to application/json;odata=verbose
    maxRetries, noRedirect, crossSiteCollectionCall, telemetryHandler, qosExtraData, authToken) {
        // This method is purely to facilitate a call to `this.dataRequestor.getData()` using the deprecated call style.
        // Do not amend this function except to work toward removing usage of it.
        var _this = this;
        if (method === void 0) { method = 'POST'; }
        var url = getUrl();
        var additionalPostData = getAdditionalPostData && getAdditionalPostData();
        var needsRequestDigest = this.needsRequestDigest(url);
        if (!Object(_ms_odsp_utilities_lib_killswitch_Killswitch__WEBPACK_IMPORTED_MODULE_6__["getKillSwitch"])(this._pageContext).isActivated(NUCLEUS_PLUGIN_KILLSWITCH, '11/5/2020', 'Factor Nucleus support into DataRequestor plugin')) {
            return this.dataRequestor.getData({
                url: url,
                parseResponse: parseResponse,
                qosName: qosName,
                additionalPostData: additionalPostData,
                method: method,
                additionalHeaders: additionalHeaders,
                contentType: contentType,
                maxRetries: maxRetries,
                noRedirect: noRedirect,
                crossSiteCollectionCall: crossSiteCollectionCall,
                telemetryHandler: telemetryHandler,
                qosExtraData: qosExtraData,
                needsRequestDigest: needsRequestDigest,
                authToken: authToken
            });
        }
        var serviceRequest = function () {
            return _this.dataRequestor.getData({
                url: url,
                parseResponse: parseResponse,
                qosName: qosName,
                additionalPostData: additionalPostData,
                method: method,
                additionalHeaders: additionalHeaders,
                contentType: contentType,
                maxRetries: maxRetries,
                noRedirect: noRedirect,
                crossSiteCollectionCall: crossSiteCollectionCall,
                telemetryHandler: telemetryHandler,
                qosExtraData: qosExtraData,
                needsRequestDigest: _this.needsRequestDigest(url),
                authToken: authToken
            });
        };
        if (!this._pageContext.aadUserId) {
            return serviceRequest();
        }
        var localRequest = function (dataSyncClient) {
            // We're using data sync. Construct a local version of the request,
            // then hand both the service and local request to the data sync
            // layer for execution.
            var syncTelemetryHandler = Object(_DataRequestor__WEBPACK_IMPORTED_MODULE_2__["getSyncTelemetryHandler"])(dataSyncClient, telemetryHandler);
            var syncRequest = function (endpoint) {
                return _this.dataRequestor.getData({
                    url: endpoint.url,
                    authToken: endpoint.authToken,
                    parseResponse: parseResponse,
                    qosName: qosName,
                    additionalPostData: additionalPostData,
                    method: method,
                    additionalHeaders: additionalHeaders,
                    contentType: contentType,
                    maxRetries: maxRetries,
                    noRedirect: noRedirect,
                    crossSiteCollectionCall: crossSiteCollectionCall,
                    telemetryHandler: function (input) { return syncTelemetryHandler(input, endpoint); },
                    qosExtraData: qosExtraData,
                    needsRequestDigest: _this.needsRequestDigest(endpoint.url),
                    useExactAuthToken: true
                });
            };
            return dataSyncClient.getData({ url: url }, syncRequest, serviceRequest);
        };
        if (this.dataSyncClient) {
            return _ms_odsp_utilities_lib_async_Promise__WEBPACK_IMPORTED_MODULE_1__["default"].wrap(localRequest(this.dataSyncClient));
        }
        else {
            return _ms_odsp_utilities_lib_async_Promise__WEBPACK_IMPORTED_MODULE_1__["default"].wrap(getDataSyncClientImport).then(function (getter) {
                var client = getter(_this._pageContext.aadUserId);
                return client ? localRequest(client) : serviceRequest();
            });
        }
    };
    return DataSource;
}());

/* harmony default export */ __webpack_exports__["default"] = (DataSource);
//# sourceMappingURL=DataSource.js.map

/***/ }),

/***/ "BGmg":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-shared-react@47.12.13_d89e40c38ccaa8bd6af6488f37cb196d/node_modules/@ms/odsp-shared-react/lib/components/CompositeHeader/CompositeHeader.scss.js ***!
  \*****************************************************************************************************************************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _microsoft_load_themed_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/load-themed-styles */ "jOlS");
/* harmony import */ var _microsoft_load_themed_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_load_themed_styles__WEBPACK_IMPORTED_MODULE_0__);
/* tslint:disable */

Object(_microsoft_load_themed_styles__WEBPACK_IMPORTED_MODULE_0__["loadStyles"])([{ "rawString": ".ms-compositeHeader{position:relative;-webkit-box-sizing:border-box;box-sizing:border-box}@media (max-width: 1023.99999px){.ms-compositeHeader{padding:20px 24px}}@media (max-width: 639.99999px){.ms-compositeHeader .ms-siteHeaderFacepile,.ms-compositeHeader .ms-siteHeaderMembersInfo{display:none}}@media (max-width: 479.99999px){.ms-compositeHeader{padding:12px 16px}.ms-compositeHeader .ms-CompositeHeader-collapsible i{-webkit-transform:rotate(360deg);transform:rotate(360deg)}html[dir='rtl'] .ms-compositeHeader .ms-CompositeHeader-collapsible i{-webkit-transform:rotate(-360deg);transform:rotate(-360deg)}.ms-compositeHeader .ms-CompositeHeader-collapsible .ms-Button-label{opacity:0;max-width:0px}}.ms-compositeHeader .follow-animation-card i{-webkit-animation-name:pulseIcon;animation-name:pulseIcon;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-duration:0.75s;animation-duration:0.75s;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-delay:.267s;animation-delay:.267s}.ms-compositeHeader .ms-CompositeHeader-collapsible{padding:2px 4px}@-webkit-keyframes pulseIcon{0%{color:#c4c4c3}50%{color:#eeeeee}100%{color:#c4c4c3}}@keyframes pulseIcon{0%{color:#c4c4c3}50%{color:#eeeeee}100%{color:#c4c4c3}}.ms-compositeHeader-addnCommands{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;max-width:100%;white-space:nowrap;text-align:right}.ms-compositeHeader-addnCommands .ms-Button{height:auto;overflow:hidden;padding:0}html[dir='ltr'] .ms-compositeHeader-addnCommands .ms-Button{margin-left:10px}html[dir='rtl'] .ms-compositeHeader-addnCommands .ms-Button{margin-right:10px}.ms-compositeHeader-addnCommands .ms-Button.ms-Button--command span{font-size:" }, { "theme": "smallPlusFontSize", "defaultValue": "12px" }, { "rawString": ";font-weight:400}.ms-compositeHeader-addnCommands i{-webkit-transition:-webkit-transform 0.5s ease;transition:-webkit-transform 0.5s ease;transition:transform 0.5s ease;transition:transform 0.5s ease, -webkit-transform 0.5s ease}.ms-compositeHeader-addnCommands .ms-Button-textContainer{overflow:hidden}.ms-compositeHeader-addnCommands .ms-Button-label{-webkit-transition:opacity 0.35s ease-in-out;transition:opacity 0.35s ease-in-out;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;line-height:normal}[dir='ltr'] .ms-compositeHeader-goToOutlook{margin-left:14px}[dir='rtl'] .ms-compositeHeader-goToOutlook{margin-right:14px}.ms-compositeHeader-goToOutlook button{-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-box-shadow:none;box-shadow:none;margin:0;padding:0;font-size:" }, { "theme": "smallPlusFontSize", "defaultValue": "12px" }, { "rawString": ";font-weight:400;color:" }, { "theme": "neutralPrimary", "defaultValue": "#323130" }, { "rawString": ";background:none;border:none;cursor:pointer}.ms-compositeHeader-goToOutlook .ms-compositeHeader-goToOutlookIcon{font-size:10px}[dir='ltr'] .ms-compositeHeader-goToOutlook .ms-compositeHeader-goToOutlookText{margin-right:4px}[dir='rtl'] .ms-compositeHeader-goToOutlook .ms-compositeHeader-goToOutlookText{margin-left:4px}\n" }]);
//# sourceMappingURL=CompositeHeader.scss.js.map

/***/ }),

/***/ "BPn7":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-datasources@45.13.10_e509c819ab980023b76e5746ec0fc9e2/node_modules/@ms/odsp-datasources/lib/dataSources/base/GetDataWithSyncClient.js ***!
  \******************************************************************************************************************************************************************************************************/
/*! exports provided: getDataWithSyncClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDataWithSyncClient", function() { return getDataWithSyncClient; });
/* harmony import */ var _ms_odsp_utilities_lib_async_Promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ms/odsp-utilities/lib/async/Promise */ "7Ihg");
/* harmony import */ var _SyncTelemetryHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SyncTelemetryHandler */ "lxGK");
/* harmony import */ var _ms_odsp_utilities_lib_features_FeatureOverrides__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ms/odsp-utilities/lib/features/FeatureOverrides */ "iVgB");
/* harmony import */ var _ms_data_sync_nucleus_lib_DataSyncFlights__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ms/data-sync-nucleus/lib/DataSyncFlights */ "FdyI");




// Async load for nucleus sync, if the flight is available.
var getDataSyncClientImport = (function () {
    var check = function (f) { return _ms_odsp_utilities_lib_features_FeatureOverrides__WEBPACK_IMPORTED_MODULE_2__["default"].isFeatureEnabled(f); };
    if (Object(_ms_data_sync_nucleus_lib_DataSyncFlights__WEBPACK_IMPORTED_MODULE_3__["isDataSyncEnabled"])(check)) {
        return __webpack_require__.e(/*! import() | data-sync-nucleus */ "vendors~data-sync-nucleus").then(__webpack_require__.bind(null, /*! @ms/data-sync-nucleus/lib/DataSync */ "O/Ab")).then(function (lib) { return function (aadUserId) {
            return lib.getDataSyncClient(aadUserId, check);
        }; });
    }
    else {
        return Promise.resolve(function (aadUserId) { return undefined; });
    }
})();
function getDataWithSyncClient(params) {
    var _a = params.options, url = _a.url, authToken = _a.authToken, telemetryHandler = _a.telemetryHandler, useExactAuthToken = _a.useExactAuthToken, dataSyncClientOverride = params.dataSyncClient, aadUserId = params.aadUserId, getData = params.getData;
    var serviceRequest = function () {
        return getData({
            url: url,
            telemetryHandler: telemetryHandler,
            authToken: authToken,
            useExactAuthToken: useExactAuthToken
        });
    };
    if (!aadUserId) {
        return serviceRequest();
    }
    var localRequest = function (dataSyncClient) {
        // We're using data sync. Construct a local version of the request,
        // then hand both the service and local request to the data sync
        // layer for execution.
        var syncTelemetryHandler = Object(_SyncTelemetryHandler__WEBPACK_IMPORTED_MODULE_1__["getSyncTelemetryHandler"])(dataSyncClient, telemetryHandler);
        var syncRequest = function (endpoint) {
            return getData({
                url: endpoint.url,
                authToken: endpoint.authToken,
                telemetryHandler: function (input) { return syncTelemetryHandler(input, endpoint); },
                useExactAuthToken: true
            });
        };
        return dataSyncClient.getData({ url: url }, syncRequest, serviceRequest);
    };
    return _ms_odsp_utilities_lib_async_Promise__WEBPACK_IMPORTED_MODULE_0__["default"].resolve(dataSyncClientOverride)
        .then(function (dataSyncClient) {
        // If there is a specified override, use it. Otherwise fall back to requesting one for the given user
        // from page context, if provided.
        return (dataSyncClient ||
            getDataSyncClientImport.then(function (getter) {
                return getter(aadUserId);
            }));
    })
        .then(function (dataSyncClient) {
        return dataSyncClient ? localRequest(dataSyncClient) : serviceRequest();
    });
}
//# sourceMappingURL=GetDataWithSyncClient.js.map

/***/ }),

/***/ "BY+f":
/*!*****************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-utilities@29.7.9_5d977624104b06c7bcaa2de974ff51f1/node_modules/@ms/odsp-utilities/lib/string/StringHelper.js ***!
  \*****************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Loading @ms/odsp-utilities/./lib/string/StringHelper.js
var pkg = __webpack_require__(/*! @ms/odsp-core-bundle */ "K9kD");
module.exports = pkg.StringHelper;

/***/ }),

/***/ "D3jz":
/*!***********************************************************!*\
  !*** ./lib/components/SiteLeftNav/LeftNav.module.scss.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* tslint:disable */
__webpack_require__(/*! ./LeftNav.module.css */ "btbd");
var styles = {
    navCustom: 'f_c_6b55bba6',
    leftNavWidthKS: 'g_c_6b55bba6',
    navOverlay: 'h_c_6b55bba6',
    spNav: 'i_c_6b55bba6',
    closeButton: 'j_c_6b55bba6',
    isOnTop: 'k_c_6b55bba6',
    spNavEdit: 'l_c_6b55bba6',
    spNavFooter: 'm_c_6b55bba6',
    returnToClassicWrapper: 'n_c_6b55bba6'
};
/* harmony default export */ __webpack_exports__["default"] = (styles);
/* tslint:enable */ 


/***/ }),

/***/ "D8Gs":
/*!**************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/sp-experiments@2.0.213_e509c819ab980023b76e5746ec0fc9e2/node_modules/@ms/sp-experiments/lib/flightsonrails/SPExperiment.js ***!
  \**************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ms/odsp-core-bundle */ "K9kD");
/* harmony import */ var _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
// Loading @ms/sp-experiments/./lib/flightsonrails/SPExperiment.js


/***/ }),

/***/ "Dxbs":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-shared-react@47.12.13_d89e40c38ccaa8bd6af6488f37cb196d/node_modules/@ms/odsp-shared-react/lib/components/CompositeHeader/CompositeHeader.styles.js ***!
  \*******************************************************************************************************************************************************************************************************************/
/*! exports provided: getStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStyles", function() { return getStyles; });
// CompositeHeader is a bit special, it never uses its own getStyles().
// Instead, it outsources rendering work to the components in the "layouts" subfolder,
// which inherit the styles here.
var getStyles = function (props) {
    var theme = props.theme, hasEmphasis = props.hasEmphasis;
    var semanticColors = theme.semanticColors;
    return {
        root: [
            {
                backgroundColor: hasEmphasis ? semanticColors.bodyBackground : 'transparent',
                color: semanticColors.bodyText,
                padding: '0px 32px 24px' // top space is taken up by the topnav
            }
        ]
    };
};
//# sourceMappingURL=CompositeHeader.styles.js.map

/***/ }),

/***/ "E1Yr":
/*!******************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-shared-react@47.12.13_d89e40c38ccaa8bd6af6488f37cb196d/node_modules/@ms/odsp-shared-react/lib/components/HubNav/HubNav.js ***!
  \******************************************************************************************************************************************************************************************/
/*! exports provided: HubNav */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HubNav", function() { return HubNav; });
/* harmony import */ var office_ui_fabric_react_lib_Utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! office-ui-fabric-react/lib/Utilities */ "mkpW");
/* harmony import */ var _HubNav_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HubNav.base */ "1z+/");
/* harmony import */ var _HubNav_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./HubNav.styles */ "/gk5");



/**
 * @public
 */
var HubNav = Object(office_ui_fabric_react_lib_Utilities__WEBPACK_IMPORTED_MODULE_0__["styled"])(_HubNav_base__WEBPACK_IMPORTED_MODULE_1__["HubNavBase"], _HubNav_styles__WEBPACK_IMPORTED_MODULE_2__["getStyles"]);
//# sourceMappingURL=HubNav.js.map

/***/ }),

/***/ "E4PQ":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-datasources@45.13.10_e509c819ab980023b76e5746ec0fc9e2/node_modules/@ms/odsp-datasources/lib/dataSources/site/SiteReadOnlyState.js ***!
  \**************************************************************************************************************************************************************************************************/
/*! exports provided: SiteReadOnlyState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SiteReadOnlyState", function() { return SiteReadOnlyState; });
/**
 * SiteMoveInProgress and SiteMoveComplete are from the SPMoveState enum on the server side.
 * ReadOnly is returned when the site is read-only and the move state is NotStarted.
 * When the context info readOnlyState is null, that means the site is NotReadOnly.
 * When the context info readOnlyState is not defined, we use Unknown.
 *     This should only happen while that change is still deploying on the server side.
 */
var SiteReadOnlyState;
(function (SiteReadOnlyState) {
    SiteReadOnlyState[SiteReadOnlyState["unknown"] = -2] = "unknown";
    SiteReadOnlyState[SiteReadOnlyState["notReadOnly"] = -1] = "notReadOnly";
    SiteReadOnlyState[SiteReadOnlyState["readOnly"] = 0] = "readOnly";
    SiteReadOnlyState[SiteReadOnlyState["siteMoveInProgress"] = 1] = "siteMoveInProgress";
    SiteReadOnlyState[SiteReadOnlyState["siteMoveComplete"] = 2] = "siteMoveComplete";
})(SiteReadOnlyState || (SiteReadOnlyState = {}));
//# sourceMappingURL=SiteReadOnlyState.js.map

/***/ }),

/***/ "EE7g":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/common/DirectionalHint.js ***!
  \*****************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/office-ui-fabric-react-bundle */ "KL1q");
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
// Loading office-ui-fabric-react/./lib/common/DirectionalHint.js


/***/ }),

/***/ "EXnH":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-shared-react@47.12.13_d89e40c38ccaa8bd6af6488f37cb196d/node_modules/@ms/odsp-shared-react/lib/utilities/shyConductor/ShyConductorLoader.js ***!
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
                case 1: return [4 /*yield*/, __webpack_require__.e(/*! import() | shared-react-shyconductor */ "vendors~shared-react-shyconductor").then(__webpack_require__.bind(null, /*! ./ShyConductor */ "zoKb"))];
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

/***/ "F3Wv":
/*!***********************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/Link.js ***!
  \***********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/office-ui-fabric-react-bundle */ "KL1q");
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
// Loading office-ui-fabric-react/./lib/Link.js


/***/ }),

/***/ "FM0M":
/*!************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/shared-react-left-nav@1.0.39_6ba2c2a8b7c666ede09cb247e7351fab/node_modules/@ms/shared-react-left-nav/lib/LeftNav.scss.js ***!
  \************************************************************************************************************************************************************************************/
/*! exports provided: root, rootIsOnTop, navItems, navItem, groupContent, group, groupIsExpanded, chevronButton, chevronButtonIsGroup, chevronIcon, chevronIsExpanded, compositeLink, chevronButtonLink, compositeLinkIsExpanded, compositeLinkIsSelected, link, linkText, buttonLink, icon, iconLink, groupHeaderFontSize, isDisabled */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "root", function() { return root; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rootIsOnTop", function() { return rootIsOnTop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "navItems", function() { return navItems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "navItem", function() { return navItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "groupContent", function() { return groupContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "group", function() { return group; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "groupIsExpanded", function() { return groupIsExpanded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "chevronButton", function() { return chevronButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "chevronButtonIsGroup", function() { return chevronButtonIsGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "chevronIcon", function() { return chevronIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "chevronIsExpanded", function() { return chevronIsExpanded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compositeLink", function() { return compositeLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "chevronButtonLink", function() { return chevronButtonLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compositeLinkIsExpanded", function() { return compositeLinkIsExpanded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compositeLinkIsSelected", function() { return compositeLinkIsSelected; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "link", function() { return link; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "linkText", function() { return linkText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buttonLink", function() { return buttonLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "icon", function() { return icon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "iconLink", function() { return iconLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "groupHeaderFontSize", function() { return groupHeaderFontSize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDisabled", function() { return isDisabled; });
/* harmony import */ var _microsoft_load_themed_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/load-themed-styles */ "jOlS");
/* harmony import */ var _microsoft_load_themed_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_load_themed_styles__WEBPACK_IMPORTED_MODULE_0__);
/* tslint:disable */

Object(_microsoft_load_themed_styles__WEBPACK_IMPORTED_MODULE_0__["loadStyles"])([{ "rawString": ".root_360e81fe{overflow-y:auto;-webkit-overflow-scrolling:touch;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.rootIsOnTop_360e81fe{position:absolute}.navItems_360e81fe{list-style-type:none;margin:0}.navItems_360e81fe,.navItems_360e81fe>.navItem_360e81fe{padding:0}.navItems_360e81fe :focus,.navItems_360e81fe>.navItem_360e81fe :focus{border:1px solid " }, { "theme": "neutralDark", "defaultValue": "#201f1e" }, { "rawString": "}.groupContent_360e81fe{display:none;margin-bottom:40px}.group_360e81fe.groupIsExpanded_360e81fe .groupContent_360e81fe{display:block}.chevronButton_360e81fe{display:block;font-weight:400;font-size:" }, { "theme": "smallFontSize", "defaultValue": "12px" }, { "rawString": ";line-height:44px;padding:0px 20px 0px 30px;background:none;border:none;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;cursor:pointer;color:" }, { "theme": "neutralPrimary", "defaultValue": "#323130" }, { "rawString": ";background:" }, { "theme": "white", "defaultValue": "#ffffff" }, { "rawString": "}html[dir='ltr'] .chevronButton_360e81fe{text-align:left}html[dir='rtl'] .chevronButton_360e81fe{text-align:right}html[dir='rtl'] .chevronButton_360e81fe{padding:0px 30px 0px 20px}.chevronButton_360e81fe:visited{color:inherit}.chevronButton_360e81fe:hover{color:" }, { "theme": "neutralPrimary", "defaultValue": "#323130" }, { "rawString": ";background:" }, { "theme": "neutralLighterAlt", "defaultValue": "#faf9f8" }, { "rawString": "}.chevronButton_360e81fe.chevronButtonIsGroup_360e81fe{width:100%;height:44px;border-bottom:1px solid " }, { "theme": "neutralLight", "defaultValue": "#edebe9" }, { "rawString": ";border-radius:1px}.chevronIcon_360e81fe{position:absolute;-webkit-transition:-webkit-transform 0.1s linear;transition:-webkit-transform 0.1s linear;transition:transform 0.1s linear;transition:transform 0.1s linear, -webkit-transform 0.1s linear}[dir='ltr'] .chevronIcon_360e81fe{left:8px}[dir='rtl'] .chevronIcon_360e81fe{right:8px}.chevronIsExpanded_360e81fe{-webkit-transform:rotate(-180deg);transform:rotate(-180deg)}.compositeLink_360e81fe{display:block;position:relative;color:" }, { "theme": "bodyText", "defaultValue": "#323130" }, { "rawString": ";background:" }, { "theme": "white", "defaultValue": "#ffffff" }, { "rawString": "}.compositeLink_360e81fe .chevronButton_360e81fe.chevronButtonLink_360e81fe{display:block;width:28px;height:42px;position:absolute;top:1px;z-index:1;padding:0}[dir='ltr'] .compositeLink_360e81fe .chevronButton_360e81fe.chevronButtonLink_360e81fe{left:1px}[dir='rtl'] .compositeLink_360e81fe .chevronButton_360e81fe.chevronButtonLink_360e81fe{right:1px}.compositeLink_360e81fe .chevronButton_360e81fe.chevronButtonLink_360e81fe .chevronIcon_360e81fe{top:0}.compositeLink_360e81fe a{color:" }, { "theme": "neutralPrimary", "defaultValue": "#323130" }, { "rawString": "}.compositeLink_360e81fe:hover a{background:" }, { "theme": "neutralLighterAlt", "defaultValue": "#faf9f8" }, { "rawString": ";color:" }, { "theme": "themePrimary", "defaultValue": "#0078d4" }, { "rawString": "}.compositeLink_360e81fe:hover .chevronButton_360e81fe{background:" }, { "theme": "neutralLighterAlt", "defaultValue": "#faf9f8" }, { "rawString": ";color:" }, { "theme": "neutralPrimary", "defaultValue": "#323130" }, { "rawString": "}.compositeLink_360e81fe.compositeLinkIsExpanded_360e81fe .chevronIcon_360e81fe{-webkit-transform:rotate(-180deg);transform:rotate(-180deg)}.compositeLink_360e81fe.compositeLinkIsSelected_360e81fe{font-weight:600}.compositeLink_360e81fe.compositeLinkIsSelected_360e81fe a,.compositeLink_360e81fe.compositeLinkIsSelected_360e81fe .chevronButton_360e81fe{background:" }, { "theme": "neutralLighter", "defaultValue": "#f3f2f1" }, { "rawString": "}.compositeLink_360e81fe.compositeLinkIsSelected_360e81fe a:after,.compositeLink_360e81fe.compositeLinkIsSelected_360e81fe .chevronButton_360e81fe:after{content:'';position:absolute;top:0;bottom:0}html[dir='ltr'] .compositeLink_360e81fe.compositeLinkIsSelected_360e81fe a:after,html[dir='ltr'] .compositeLink_360e81fe.compositeLinkIsSelected_360e81fe .chevronButton_360e81fe:after{border-left:2px solid " }, { "theme": "themePrimary", "defaultValue": "#0078d4" }, { "rawString": "}html[dir='rtl'] .compositeLink_360e81fe.compositeLinkIsSelected_360e81fe a:after,html[dir='rtl'] .compositeLink_360e81fe.compositeLinkIsSelected_360e81fe .chevronButton_360e81fe:after{border-right:2px solid " }, { "theme": "themePrimary", "defaultValue": "#0078d4" }, { "rawString": "}[dir='ltr'] .compositeLink_360e81fe.compositeLinkIsSelected_360e81fe a:after,[dir='ltr'] .compositeLink_360e81fe.compositeLinkIsSelected_360e81fe .chevronButton_360e81fe:after{right:0}[dir='rtl'] .compositeLink_360e81fe.compositeLinkIsSelected_360e81fe a:after,[dir='rtl'] .compositeLink_360e81fe.compositeLinkIsSelected_360e81fe .chevronButton_360e81fe:after{left:0}[dir='ltr'] .compositeLink_360e81fe.compositeLinkIsSelected_360e81fe a:after,[dir='ltr'] .compositeLink_360e81fe.compositeLinkIsSelected_360e81fe .chevronButton_360e81fe:after{left:0}[dir='rtl'] .compositeLink_360e81fe.compositeLinkIsSelected_360e81fe a:after,[dir='rtl'] .compositeLink_360e81fe.compositeLinkIsSelected_360e81fe .chevronButton_360e81fe:after{right:0}.link_360e81fe{display:-webkit-box;display:-ms-flexbox;display:flex;position:relative;height:44px;line-height:44px;text-decoration:none;padding:0px 20px 0px 30px;cursor:pointer;text-overflow:ellipsis;text-decoration:none;white-space:nowrap;overflow:hidden}html[dir='rtl'] .link_360e81fe{padding:0px 30px 0px 20px}.linkText_360e81fe{margin:0px 4px;overflow:hidden;text-align:left;text-overflow:ellipsis}.buttonLink_360e81fe{margin:0px 4px;position:relative;border:none;background-color:transparent;color:" }, { "theme": "themePrimary", "defaultValue": "#0078d4" }, { "rawString": "}.buttonLink_360e81fe:hover button{color:" }, { "theme": "neutralPrimary", "defaultValue": "#323130" }, { "rawString": ";background:" }, { "theme": "neutralLighterAlt", "defaultValue": "#faf9f8" }, { "rawString": "}.icon_360e81fe{padding:0px;color:" }, { "theme": "themePrimary", "defaultValue": "#0078d4" }, { "rawString": ";-webkit-transition:-webkit-transform 0.1s linear;transition:-webkit-transform 0.1s linear;transition:transform 0.1s linear;transition:transform 0.1s linear, -webkit-transform 0.1s linear}.iconLink_360e81fe{font-size:" }, { "theme": "largeFontSize", "defaultValue": "18px" }, { "rawString": ";margin:'0 4px';height:'16px';line-height:'16px';text-align:'center';vertical-align:'middle';-ms-flex-negative:0;flex-shrink:0}[dir='ltr'] .iconLink_360e81fe{margin-right:4px}[dir='rtl'] .iconLink_360e81fe{margin-left:4px}[dir='ltr'] .iconLink_360e81fe{margin-left:4px}[dir='rtl'] .iconLink_360e81fe{margin-right:4px}.groupHeaderFontSize_360e81fe{font-size:" }, { "theme": "largeFontSize", "defaultValue": "18px" }, { "rawString": ";font-weight:300}.root_360e81fe .link_360e81fe .ms-Button-label{font-size:" }, { "theme": "mediumFontSize", "defaultValue": "14px" }, { "rawString": ";font-weight:400;color:" }, { "theme": "themePrimary", "defaultValue": "#0078d4" }, { "rawString": "}.root_360e81fe .link_360e81fe.isDisabled_360e81fe{color:" }, { "theme": "disabledText", "defaultValue": "#a19f9d" }, { "rawString": "}\n" }]);
var root = "root_360e81fe";
var rootIsOnTop = "rootIsOnTop_360e81fe";
var navItems = "navItems_360e81fe";
var navItem = "navItem_360e81fe";
var groupContent = "groupContent_360e81fe";
var group = "group_360e81fe";
var groupIsExpanded = "groupIsExpanded_360e81fe";
var chevronButton = "chevronButton_360e81fe";
var chevronButtonIsGroup = "chevronButtonIsGroup_360e81fe";
var chevronIcon = "chevronIcon_360e81fe";
var chevronIsExpanded = "chevronIsExpanded_360e81fe";
var compositeLink = "compositeLink_360e81fe";
var chevronButtonLink = "chevronButtonLink_360e81fe";
var compositeLinkIsExpanded = "compositeLinkIsExpanded_360e81fe";
var compositeLinkIsSelected = "compositeLinkIsSelected_360e81fe";
var link = "link_360e81fe";
var linkText = "linkText_360e81fe";
var buttonLink = "buttonLink_360e81fe";
var icon = "icon_360e81fe";
var iconLink = "iconLink_360e81fe";
var groupHeaderFontSize = "groupHeaderFontSize_360e81fe";
var isDisabled = "isDisabled_360e81fe";
//# sourceMappingURL=LeftNav.scss.js.map

/***/ }),

/***/ "FdyI":
/*!******************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/data-sync-nucleus@1.6.1_5d977624104b06c7bcaa2de974ff51f1/node_modules/@ms/data-sync-nucleus/lib/DataSyncFlights.js ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: DataSyncEntityType, NucleusPreviewEnabled, EnableNucleusListConflictsUX, isDataSyncEnabled, isSyncConflictsUxEnabled */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataSyncEntityType", function() { return DataSyncEntityType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NucleusPreviewEnabled", function() { return NucleusPreviewEnabled; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnableNucleusListConflictsUX", function() { return EnableNucleusListConflictsUX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDataSyncEnabled", function() { return isDataSyncEnabled; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSyncConflictsUxEnabled", function() { return isSyncConflictsUxEnabled; });
var DataSyncEntityType;
(function (DataSyncEntityType) {
    DataSyncEntityType["SharePointList"] = "SharePointList";
})(DataSyncEntityType || (DataSyncEntityType = {}));
var NucleusPreviewEnabled = {
    ODB: 1620
};
var EnableNucleusListConflictsUX = {
    ODB: 60063
};
/**
 * Checks whether data sync for the given entity type is enabled.
 * @param featureCheck A callback which allows async loaded data sync to
 * check feature overrides.
 */
function isDataSyncEnabled(featureCheck, entityType) {
    return (featureCheck(NucleusPreviewEnabled) &&
        // tslint:disable-next-line:no-string-literal
        ((window.localStorage && window.localStorage['NucleusPreviewEnabled'] === 'true') ||
            /[?&]enableNucleusPreview=true/.test(location.search)));
}
function isSyncConflictsUxEnabled(featureCheck) {
    return (isDataSyncEnabled(featureCheck, DataSyncEntityType.SharePointList) &&
        featureCheck(EnableNucleusListConflictsUX));
}
//# sourceMappingURL=DataSyncFlights.js.map

/***/ }),

/***/ "GPAM":
/*!*****************************************************!*\
  !*** ./lib/dataProviders/SPHomeHubNavDataSource.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ms_odsp_datasources_lib_dataSources_hub_HubDataSource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ms/odsp-datasources/lib/dataSources/hub/HubDataSource */ "Zean");
/* harmony import */ var _ms_odsp_datasources_lib_dataSources_audienceTargeting_AudiencesDataSource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ms/odsp-datasources/lib/dataSources/audienceTargeting/AudiencesDataSource */ "Q+fs");
/* harmony import */ var _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ms/odsp-utilities-bundle */ "y88i");
/* harmony import */ var _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @microsoft/sp-diagnostics */ "ut3N");
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_4__);





var SPHomeHubNavDataSource = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(SPHomeHubNavDataSource, _super);
    function SPHomeHubNavDataSource(pageContext, hubData) {
        var _this = _super.call(this, pageContext) || this;
        _this._hubData = hubData;
        return _this;
    }
    SPHomeHubNavDataSource.prototype.getHubData = function () {
        var _this = this;
        var audiencesDataSource = _ms_odsp_datasources_lib_dataSources_audienceTargeting_AudiencesDataSource__WEBPACK_IMPORTED_MODULE_2__["AudiencesDataSource"].getInstance(this._pageContext);
        if (this._pageContext &&
            this._hubData &&
            !this._hubData.usesMetadataNavigation &&
            this._hubData.isNavAudienceEnabled) {
            _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_4__["_EngagementLogger"].logEvent('HubNav.AudienceTargeting.SPStartPage');
            return audiencesDataSource.filter('HubNav', this._hubData.navigation, 'links').then(function (links) {
                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, _this._hubData), { navigation: links || [] });
            });
        }
        else {
            return _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_3__["Promise"].resolve(this._hubData);
        }
    };
    return SPHomeHubNavDataSource;
}(_ms_odsp_datasources_lib_dataSources_hub_HubDataSource__WEBPACK_IMPORTED_MODULE_1__["HubDataSource"]));
/* harmony default export */ __webpack_exports__["default"] = (SPHomeHubNavDataSource);


/***/ }),

/***/ "GWkq":
/*!************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-shared-react@47.12.13_d89e40c38ccaa8bd6af6488f37cb196d/node_modules/@ms/odsp-shared-react/lib/components/HorizontalNav/index.js ***!
  \************************************************************************************************************************************************************************************************/
/*! exports provided: HorizontalNav */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HorizontalNav__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HorizontalNav */ "tehv");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HorizontalNav", function() { return _HorizontalNav__WEBPACK_IMPORTED_MODULE_0__["HorizontalNav"]; });


//# sourceMappingURL=index.js.map

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

/***/ "H3sc":
/*!*************************************************!*\
  !*** ./lib/components/SiteHeader/SiteHeader.js ***!
  \*************************************************/
/*! exports provided: SiteHeader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SiteHeader", function() { return SiteHeader; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @microsoft/sp-lodash-subset */ "Pk8u");
/* harmony import */ var _microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ms/sp-component-utilities */ "hiL/");
/* harmony import */ var _ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ms_sp_component_utilities_lib_navigationUtilities_NavigationNodeUtilities__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ms/sp-component-utilities/lib/navigationUtilities/NavigationNodeUtilities */ "Ikqg");
/* harmony import */ var _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ms/odsp-utilities-bundle */ "y88i");
/* harmony import */ var _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ms/sp-telemetry */ "2q6Q");
/* harmony import */ var _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _ms_odsp_datasources_lib_interfaces_ISpPageContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ms/odsp-datasources/lib/interfaces/ISpPageContext */ "GlwB");
/* harmony import */ var _ms_odsp_shared_react_lib_containers_compositeHeader_StateManager_Props__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ms/odsp-shared-react/lib/containers/compositeHeader/StateManager.Props */ "0+mA");
/* harmony import */ var _ms_odsp_shared_react_lib_HorizontalNav__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ms/odsp-shared-react/lib/HorizontalNav */ "J0LD");
/* harmony import */ var _ms_odsp_shared_react_lib_utilities_nav_NavCommon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ms/odsp-shared-react/lib/utilities/nav/NavCommon */ "qBs0");
/* harmony import */ var _ms_odsp_datasources_lib_models_chrome_ChromeOptions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ms/odsp-datasources/lib/models/chrome/ChromeOptions */ "Vb17");
/* harmony import */ var _ms_odsp_datasources_lib_dataSources_site_SiteDataSource__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ms/odsp-datasources/lib/dataSources/site/SiteDataSource */ "6GcD");
/* harmony import */ var _ms_odsp_shared_react_lib_CompositeHeader__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ms/odsp-shared-react/lib/CompositeHeader */ "jfPA");
/* harmony import */ var _loaders_spcx_panels__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../loaders/spcx-panels */ "mK7h");
/* harmony import */ var _loaders_spcx_siteHeaderLPC__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../loaders/spcx-siteHeaderLPC */ "oGdD");
/* harmony import */ var _loaders_spcx_groupsProvider__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../loaders/spcx-groupsProvider */ "+IOR");
/* harmony import */ var _loaders_spcx_siteHeaderStateManager__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../loaders/spcx-siteHeaderStateManager */ "8MrD");
/* harmony import */ var _loaders_DeferredLanguageSelector__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../loaders/DeferredLanguageSelector */ "xoZH");
/* harmony import */ var _ms_odsp_datasources_lib_dataSources_audienceTargeting_AudiencesDataSource__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ms/odsp-datasources/lib/dataSources/audienceTargeting/AudiencesDataSource */ "Q+fs");
/* harmony import */ var _common_KillSwitches__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../common/KillSwitches */ "+ORw");
/* harmony import */ var _SiteHeader_resx__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./SiteHeader.resx */ "2pVO");
var _SiteHeader_resx__WEBPACK_IMPORTED_MODULE_22___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./SiteHeader.resx */ "2pVO", 1);
/* harmony import */ var _loaders_spcx_groupsSiteProvider__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../loaders/spcx-groupsSiteProvider */ "h0ZA");
/* harmony import */ var _common_Constants__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../common/Constants */ "rMgv");
/* harmony import */ var _common_TopicUtilities__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../common/TopicUtilities */ "x74c");
/* harmony import */ var _loaders_spcx_syntexDataSource__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../loaders/spcx-syntexDataSource */ "S7vf");






























/** default site icon. */
var DEFAULT_LOGO_STRING = '_layouts/15/images/siteicon.png';
/**
 * Host for composite header and strongly tied to SiteHeaderContainerStateManager
 *
 * @public
 */
var SiteHeader = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(SiteHeader, _super);
    // tslint:enable:max-line-length
    function SiteHeader(props) {
        var _this = _super.call(this, props) || this;
        _this._headerComponent = react__WEBPACK_IMPORTED_MODULE_1__["createRef"]();
        _this._onEditClicked = function (evt) {
            _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_6__["Engagement"].logData({ name: 'HorizontalNav.Edit.Click' });
            if (_this.props.onEditNavClicked) {
                _this.props.onEditNavClicked({ links: _this.state.horizontalNavItems }, // tslint:disable-line:no-any
                _this._onExitEditMode, function (links, afterSetState) {
                    _this.setState({ horizontalNavItems: links }, afterSetState);
                    _this._isAudienceTargeted = _ms_odsp_datasources_lib_dataSources_audienceTargeting_AudiencesDataSource__WEBPACK_IMPORTED_MODULE_20__["AudiencesDataSource"].getInstance(_this.props.pageContext).containsAudiences(links, 'links');
                }, false, _SiteHeader_resx__WEBPACK_IMPORTED_MODULE_22__["EditNavPanelTitle"]);
            }
        };
        _this._onExitEditMode = function () {
            _this.setState({ isEditMode: false });
        };
        _this._createHeaderStateManagerIfNeeded = function () {
            if (!_this._state) {
                _this._getStateManagerParams();
            }
        };
        _this._onUserExpirationClick = function (ev) {
            Object(_loaders_spcx_panels__WEBPACK_IMPORTED_MODULE_15__["userExpirationPanelRendererLoader"])().then(function (panel) {
                panel.render({
                    serviceScope: _this.props.serviceScope,
                    pageContext: _this.props.pageContext,
                    onDismiss: function () {
                        /*no op*/
                    }
                });
            });
        };
        _this._getUserExpirationProvider = function () {
            return _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_6__["Promise"].wrap(Object(_loaders_spcx_panels__WEBPACK_IMPORTED_MODULE_15__["userExpirationPanelRendererLoader"])().then(function (panel) {
                return panel.createUserExpirationDataSource(_this.props.pageContext);
            }));
        };
        _this._onRenderHorizontalNav = function (props) {
            var knowledgeHubUrl = Object(_common_TopicUtilities__WEBPACK_IMPORTED_MODULE_25__["_getKnowledgeHubUrl"])(_this.props.pageContext);
            var currentUrl = window.location.href;
            if (!props.items) {
                props = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, props), { items: [] });
            }
            if (!_common_KillSwitches__WEBPACK_IMPORTED_MODULE_21__["KillSwitches"].revertTopicCenterNavFix.isActivated() && !props.selectedKey) {
                if (knowledgeHubUrl && currentUrl.toLowerCase().indexOf(knowledgeHubUrl.toLowerCase()) !== -1) {
                    var selectedKey = Object(_common_TopicUtilities__WEBPACK_IMPORTED_MODULE_25__["_isGettingStartedQuerySelected"])()
                        ? _common_Constants__WEBPACK_IMPORTED_MODULE_24__["GETTINGSTARTEDID"].toString()
                        : Object(_common_TopicUtilities__WEBPACK_IMPORTED_MODULE_25__["_isManageTopicsQuerySelected"])()
                            ? _common_Constants__WEBPACK_IMPORTED_MODULE_24__["MANAGETOPICSID"].toString()
                            : undefined;
                    if (selectedKey) {
                        props = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, props), { selectedKey: selectedKey });
                    }
                }
            }
            return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ms_odsp_shared_react_lib_HorizontalNav__WEBPACK_IMPORTED_MODULE_10__["HorizontalNav"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, props));
        };
        // tslint:disable-next-line:no-any
        _this._onNavRendered = function (initialMount) {
            if (!_this.props.renderDeferredComponents) {
                _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_7__["_PerformanceLogger"].setPerformanceProperty(SiteHeader._componentName + "_" + SiteHeader._navComponentName + "_EUPL_renderCount", 1, true /* addToExisting */);
                _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_7__["_PerformanceLogger"].devMark(SiteHeader._componentName + "_" + SiteHeader._navComponentName + "_EUPL_renderCount");
            }
            _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_7__["_PerformanceLogger"].setPerformanceProperty(SiteHeader._componentName + "_" + SiteHeader._navComponentName + "_renderCount", 1, true /* addToExisting */);
            _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_7__["_PerformanceLogger"].devMark(SiteHeader._componentName + "_" + SiteHeader._navComponentName + "_renderCount");
        };
        _this._topNavNodeOnClick = function (ev, item) {
            // if event is propagated from link interception, nativeEvent will be undefined
            // if link inteception handles the link, it calls preventDefault, and defaultPrevented is true
            if ((ev.nativeEvent || !ev.defaultPrevented) && item && item.url && item.url !== _ms_odsp_shared_react_lib_utilities_nav_NavCommon__WEBPACK_IMPORTED_MODULE_11__["HEADER_LINK_URL"]) {
                _this._navigate({
                    url: item.url,
                    target: SiteHeader._isRelativeUrl(item.url) ? '_self' : '_blank'
                }, ev);
            }
        };
        _this._getGroupSiteProvider = function () {
            var pageContext = _this.props.pageContext;
            return _loaders_spcx_groupsSiteProvider__WEBPACK_IMPORTED_MODULE_23__["GroupSiteProviderFactory"].GetGroupSiteProvider(pageContext);
        };
        _this._getSiteDataSource = function () {
            return _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_6__["Promise"].wrap(new _ms_odsp_datasources_lib_dataSources_site_SiteDataSource__WEBPACK_IMPORTED_MODULE_13__["SiteDataSource"](_this.props.pageContext));
        };
        _this._getSyntexDataSource = function () {
            return Object(_loaders_spcx_syntexDataSource__WEBPACK_IMPORTED_MODULE_26__["loadSyntexDataSource"])(_this.props.pageContext);
        };
        _this._openPersonaCard = function (persona, evt) {
            // Do nothing until React persona card is available.
        };
        _this._goToMembersOnClick = function (ev) {
            Object(_loaders_spcx_panels__WEBPACK_IMPORTED_MODULE_15__["groupMembershipPanelRendererLoader"])().then(function (panel) {
                panel.render({
                    serviceScope: _this.props.serviceScope,
                    pageContext: _this.props.pageContext,
                    onDismiss: function () {
                        /* no-op */
                    }
                });
            });
        };
        _this._shareButtonOnClick = function (ev) {
            Object(_loaders_spcx_panels__WEBPACK_IMPORTED_MODULE_15__["sitePermissionsPanelRendererLoader"])().then(function (renderer) {
                renderer.render({
                    serviceScope: _this.props.serviceScope,
                    pageContext: _this.props.pageContext,
                    onDismiss: function () {
                        /* no-op */
                    },
                    isGroup: !!_this.props.pageContext.groupId,
                    showShareSiteOnly: true,
                    shouldLoadSharePanelOnly: true
                });
            });
            ev.stopPropagation();
            ev.preventDefault();
        };
        _this._createSiteOnClick = function (ev) {
            if (_this.state && !_this.state.isCreateSitePanelOpen) {
                _this.setState({ isCreateSitePanelOpen: true });
            }
        };
        _this._getGroupsProvider = function () {
            /* tslint:disable-next-line:no-any */
            return _loaders_spcx_groupsProvider__WEBPACK_IMPORTED_MODULE_17__["GroupsProviderFactory"].GetGroupsProvider(_this.props.pageContext);
        };
        _this._onDismissCreateGroupPanel = function () {
            if (_this.state && _this.state.isCreateSitePanelOpen) {
                _this.setState({ isCreateSitePanelOpen: false });
            }
        };
        _this._resizeSiteHeader = _this._resizeSiteHeader.bind(_this);
        _this._horizontalNavLinks = _this._getHorizontalNavLinks(props);
        _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_7__["_PerformanceLogger"].startMarkForComponent(SiteHeader._componentName);
        return _this;
    }
    SiteHeader._isRelativeUrl = function (url) {
        if (!url) {
            return false;
        }
        var lowerUrl = url.toLowerCase();
        var hasProtocol = /^ftp:\/\//.test(lowerUrl) ||
            /^http:\/\//.test(lowerUrl) ||
            /^https:\/\//.test(lowerUrl) ||
            /^file:\/\//.test(lowerUrl);
        return !hasProtocol;
    };
    // tslint:disable:max-line-length
    SiteHeader._getSiteHeaderContainerStateManagerImageUrls = function () {
        return {
            commSiteCustomizedLogo: __webpack_require__(/*! @ms/odsp-media/dist/media/images/designPackage/communicationSiteCustomized.png */ "nK0/"),
            teamSiteCustomizedLogo: __webpack_require__(/*! @ms/odsp-media/dist/media/images/designPackage/teamSiteCustomized.png */ "XQ+C"),
            workingSiteDesign: __webpack_require__(/*! @ms/odsp-media/dist/media/images/sitescripts/working_sitedesign.png */ "7n8n"),
            workingSiteDesign2x: __webpack_require__(/*! @ms/odsp-media/dist/media/images/sitescripts/working_sitedesign_2x.png */ "g/CF"),
            webTemplatesFirstRunIllustration: __webpack_require__(/*! @ms/odsp-media/dist/media/images/webTemplatesGallery/firstRunExperienceIllustration.png */ "yClT")
        };
    };
    SiteHeader.prototype.shouldComponentUpdate = function (nextProps, nextState) {
        var currPageContext = this.props.pageContext;
        var nextPageContext = nextProps.pageContext;
        if (this._hasStateChanged ||
            this.props.shareButtonOnClick !== nextProps.shareButtonOnClick ||
            this.props.showLanguageSelector !== nextProps.showLanguageSelector ||
            this.props.chromeOptions.header.layout !== nextProps.chromeOptions.header.layout ||
            // not the same page
            (!SiteHeader._updatePageContextKS.isActivated() &&
                (currPageContext.siteId !== nextPageContext.siteId ||
                    currPageContext.webId !== nextPageContext.webId ||
                    currPageContext.pageItemId !== nextPageContext.pageItemId ||
                    currPageContext.navigationInfo !== nextPageContext.navigationInfo ||
                    (nextPageContext.navigationInfo &&
                        this._isNavLinksChanged(nextPageContext.navigationInfo.quickLaunch, nextPageContext.navigationInfo.isAudienceTargeted))))) {
            this._hasStateChanged = false;
            return true;
        }
        else if (this.props.renderDeferredComponents !== nextProps.renderDeferredComponents) {
            // create state manager w/o triggering re-render
            this._createHeaderStateManagerIfNeeded();
        }
        return false;
    };
    Object.defineProperty(SiteHeader.prototype, "state", {
        get: function () {
            return this._internalState;
        },
        set: function (newState) {
            if (this._internalState && newState === null) {
                return;
            }
            this._internalState = newState;
        },
        enumerable: true,
        configurable: true
    });
    SiteHeader.prototype.setState = function (newState, callback) {
        if (this._isMounted) {
            var mergedState = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.state), newState);
            for (var p in newState) {
                if (newState.hasOwnProperty(p) &&
                    newState[p] !== this.state[p] &&
                    // ignore non-visual impacting states
                    p !== 'outlookUrl' &&
                    p !== 'membersUrl' &&
                    p !== 'groupLinks' &&
                    p !== 'groupEmail') {
                    this._hasStateChanged = true;
                    break;
                }
            }
            _super.prototype.setState.call(this, mergedState, callback);
        }
    };
    SiteHeader.prototype.componentDidMount = function () {
        this._isMounted = true;
        _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_7__["_PerformanceLogger"].setPerformanceProperty('siteHeaderHostMounted');
        window.addEventListener('message', this._resizeSiteHeader);
        _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_7__["_PerformanceLogger"].endMarkForComponent(SiteHeader._componentName, true /*waitForPaint*/);
        if (_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__["_SPFlight"].isEnabled(1559 /* UserExpirationPanel */) &&
            this.props.pageContext.isSiteAdmin &&
            window.location.href.search(/UserExpiration=1/i) > 0) {
            this._onUserExpirationClick(undefined);
        }
        if (this.props.renderDeferredComponents) {
            this._createHeaderStateManagerIfNeeded();
        }
    };
    SiteHeader.prototype.componentWillUnmount = function () {
        this._isMounted = false;
        if (this._state) {
            this._state.componentWillUnmount();
        }
        window.removeEventListener('message', this._resizeSiteHeader);
    };
    SiteHeader.prototype.render = function () {
        var _a, _b;
        var compositeHeaderProps;
        var _c = this.props, chromeOptions = _c.chromeOptions, pageContext = _c.pageContext, serviceScope = _c.serviceScope;
        if (this._state) {
            compositeHeaderProps = this._state.getRenderProps(undefined, Object(_loaders_spcx_siteHeaderLPC__WEBPACK_IMPORTED_MODULE_16__["getLivePersonaCardAdapterComponentModuleLoader"])());
            if (!SiteHeader._updatePageContextKS.isActivated()) {
                compositeHeaderProps.siteHeaderProps.pageContext = this.props.pageContext;
            }
        }
        else {
            // initial quick launch items
            var quickLaunchHorizontalNavProps = undefined;
            if (chromeOptions && chromeOptions.nav.placement === _ms_odsp_datasources_lib_models_chrome_ChromeOptions__WEBPACK_IMPORTED_MODULE_12__["NavPlacementType"].HORIZONTAL) {
                quickLaunchHorizontalNavProps = {
                    useMegaMenu: chromeOptions.nav.megaMenuEnabled,
                    items: this._horizontalNavLinks,
                    hasSelectedState: true,
                    ariaLabel: _SiteHeader_resx__WEBPACK_IMPORTED_MODULE_22__["horizontalNavAriaLabelSite"],
                    moreOptionsAriaLabel: '',
                    splitButtonAriaLabel: '',
                    inplaceNavigationEnabled: !_common_KillSwitches__WEBPACK_IMPORTED_MODULE_21__["KillSwitches"].subLinkInPlaceNav.isActivated()
                };
            }
            var shouldRenderCoachmark = !_common_KillSwitches__WEBPACK_IMPORTED_MODULE_21__["KillSwitches"].siteHeaderCoachmarkKS.isActivated();
            compositeHeaderProps = {
                siteHeaderProps: {
                    siteTitle: pageContext.webTitle,
                    siteLogo: {
                        // ensure that the acronym is used on modern pages instead of the old site logo URL
                        siteLogoUrl: _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__["_SPFlight"].isEnabled(1067 /** EnableRectSiteLogo */)
                            ? pageContext.webAbsoluteUrl + "/_api/siteiconmanager/getsitelogo?type='1'"
                            : pageContext.webLogoUrl === DEFAULT_LOGO_STRING
                                ? undefined
                                : pageContext.webLogoUrl,
                        siteAcronym: this.props.siteAcronym
                    },
                    logoHref: !pageContext.isAnonymousGuestUser ? pageContext.webAbsoluteUrl : undefined,
                    siteClassification: pageContext.siteClassification,
                    groupInfoString: Object(_ms_odsp_datasources_lib_interfaces_ISpPageContext__WEBPACK_IMPORTED_MODULE_8__["isGroupWebContext"])(pageContext)
                        ? pageContext.groupType === "Public" /* public */
                            ? _SiteHeader_resx__WEBPACK_IMPORTED_MODULE_22__["publicGroup"]
                            : _SiteHeader_resx__WEBPACK_IMPORTED_MODULE_22__["privateGroup"]
                        : undefined,
                    pageContext: pageContext,
                    showCoachmark: shouldRenderCoachmark && this.props.showCoachmark,
                    coachmarkDismissCallback: shouldRenderCoachmark ? this.props.coachmarkDismissCallback : undefined,
                    headerOptions: {
                        hideTitle: _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__["_SPFlight"].isEnabled(1067 /** EnableRectSiteLogo */) && ((_b = (_a = chromeOptions) === null || _a === void 0 ? void 0 : _a.header) === null || _b === void 0 ? void 0 : _b.hideTitle)
                    }
                },
                horizontalNavProps: quickLaunchHorizontalNavProps,
                onRenderHorizontalNav: this._onRenderHorizontalNav,
                unifiedLayout: pageContext.headerLayout
            };
        }
        if (compositeHeaderProps && compositeHeaderProps.horizontalNavProps) {
            var linksFromProps = this._getHorizontalNavLinks(this.props);
            // if links in pageContext is updated
            if (!Object(_microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_3__["isEqual"])(this._horizontalNavLinks, linksFromProps)) {
                compositeHeaderProps.horizontalNavProps.items = linksFromProps;
                this._horizontalNavLinks = linksFromProps;
            }
            if ((pageContext.navigationInfo && pageContext.navigationInfo.isAudienceTargeted) ||
                this._isAudienceTargeted) {
                compositeHeaderProps.horizontalNavProps.pageContext = pageContext;
                compositeHeaderProps.horizontalNavProps.isAudienceTargeted = true;
            }
            compositeHeaderProps.horizontalNavProps.onRendered = this._onNavRendered;
        }
        if (this.props.searchBox) {
            compositeHeaderProps.searchBox = this.props.searchBox;
        }
        compositeHeaderProps.teamsAppMode = this.props.teamsAppMode;
        if (this.props.teamsAppMode) {
            if (compositeHeaderProps.horizontalNavProps) {
                compositeHeaderProps.horizontalNavProps.editLink = undefined;
            }
            compositeHeaderProps.createSiteButton = undefined;
            compositeHeaderProps.shareButton = undefined;
        }
        if (this.props.leftNavToggleCallback) {
            compositeHeaderProps.leftNavToggleCallback = this.props.leftNavToggleCallback;
            compositeHeaderProps.isLeftNavExpanded = this.props.isLeftNavExpanded;
        }
        if (_ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_4__["Multilingual"].isEnabled(serviceScope) && this.props.showLanguageSelector && pageContext.listId) {
            compositeHeaderProps.languageSelector = (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_loaders_DeferredLanguageSelector__WEBPACK_IMPORTED_MODULE_19__["DeferredLanguageSelectorComponent"], { loader: _loaders_DeferredLanguageSelector__WEBPACK_IMPORTED_MODULE_19__["DeferredLanguageSelector"].LanguageSelectorComponentLoader, deferredProps: {
                    serviceScope: serviceScope
                } }));
            compositeHeaderProps.getLanguageSelections = function () {
                return _loaders_DeferredLanguageSelector__WEBPACK_IMPORTED_MODULE_19__["DeferredLanguageSelector"].LanguageSelectionsComponentLoader().then(function (module) {
                    return new module({ serviceScope: serviceScope }).getLanguageSelections();
                });
            };
        }
        var createGroupPanelProps = {
            spPageContext: this.props.pageContext,
            joinHubSite: true,
            isOpen: this.state && this.state.isCreateSitePanelOpen,
            onDismiss: this._onDismissCreateGroupPanel
        };
        if (!this.props.renderDeferredComponents) {
            _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_7__["_PerformanceLogger"].setPerformanceProperty(SiteHeader._componentName + "_EUPL_renderCount", 1, true /* addToExisting */);
            _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_7__["_PerformanceLogger"].devMark(SiteHeader._componentName + "_EUPL_renderCount");
        }
        _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_7__["_PerformanceLogger"].setPerformanceProperty(SiteHeader._componentName + "_renderCount", 1, true /* addToExisting */);
        _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_7__["_PerformanceLogger"].devMark(SiteHeader._componentName + "_renderCount");
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { "data-sp-feature-tag": 'Site header host', "data-sp-feature-instance-id": '_Site header host', id: 'spSiteHeader' },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ms_odsp_shared_react_lib_CompositeHeader__WEBPACK_IMPORTED_MODULE_14__["CompositeHeader"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, compositeHeaderProps, { componentRef: this._headerComponent })),
            this.props.renderDeferredComponents &&
                this.props.pageContext &&
                this.state &&
                this.state.isCreateSitePanelOpen && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_loaders_spcx_panels__WEBPACK_IMPORTED_MODULE_15__["DeferredCreateGroupPanel"], { loader: _loaders_spcx_panels__WEBPACK_IMPORTED_MODULE_15__["createGroupPanelLoader"], deferredProps: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, createGroupPanelProps), duration: 200 }))));
    };
    /**
     * {@inheritDoc ICompositeHeader.measureNavLayout}
     */
    SiteHeader.prototype.measureNavLayout = function () {
        if (this._headerComponent.current) {
            this._headerComponent.current.measureNavLayout();
        }
    };
    SiteHeader.prototype._getStateManagerParams = function () {
        var _this = this;
        var navDirection = this.props.chromeOptions.nav.placement;
        var horizontalQuickLaunchEnabled = navDirection === _ms_odsp_datasources_lib_models_chrome_ChromeOptions__WEBPACK_IMPORTED_MODULE_12__["NavPlacementType"].HORIZONTAL;
        Object(_loaders_spcx_siteHeaderStateManager__WEBPACK_IMPORTED_MODULE_18__["stateManagerLoader"])({
            pageContext: this.props.pageContext,
            siteHeader: this,
            topNavNodeOnClick: this._topNavNodeOnClick,
            openPersonaCard: this._openPersonaCard,
            goToMembersOnClick: this._goToMembersOnClick,
            createSiteOnClick: this._createSiteOnClick,
            getGroupsProvider: this._getGroupsProvider,
            getSiteDataSource: this._getSiteDataSource,
            getSyntexDataSource: this._getSyntexDataSource,
            onRenderHorizontalNav: this._onRenderHorizontalNav,
            getGroupSiteProvider: this._getGroupSiteProvider,
            waitForPLT: _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_6__["Promise"].resolve(),
            horizontalQuickLaunchEnabled: horizontalQuickLaunchEnabled,
            onEditClicked: horizontalQuickLaunchEnabled ? this._onEditClicked : undefined,
            strings: _SiteHeader_resx__WEBPACK_IMPORTED_MODULE_22___namespace,
            userExpirationOnClick: _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__["_SPFlight"].isEnabled(1559 /* UserExpirationPanel*/) && this.props.pageContext.isSiteAdmin
                ? this._onUserExpirationClick
                : undefined,
            getUserExpirationProvider: _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__["_SPFlight"].isEnabled(1559 /* UserExpirationPanel*/) && this.props.pageContext.isSiteAdmin
                ? this._getUserExpirationProvider
                : undefined,
            groupCardInfo: [
                { linkType: _ms_odsp_shared_react_lib_containers_compositeHeader_StateManager_Props__WEBPACK_IMPORTED_MODULE_9__["GroupCardLinkTypes"].site, title: _SiteHeader_resx__WEBPACK_IMPORTED_MODULE_22__["home"] },
                { linkType: _ms_odsp_shared_react_lib_containers_compositeHeader_StateManager_Props__WEBPACK_IMPORTED_MODULE_9__["GroupCardLinkTypes"].mail, title: _SiteHeader_resx__WEBPACK_IMPORTED_MODULE_22__["mail"] },
                { linkType: _ms_odsp_shared_react_lib_containers_compositeHeader_StateManager_Props__WEBPACK_IMPORTED_MODULE_9__["GroupCardLinkTypes"].calendar, title: _SiteHeader_resx__WEBPACK_IMPORTED_MODULE_22__["calendar"] },
                { linkType: _ms_odsp_shared_react_lib_containers_compositeHeader_StateManager_Props__WEBPACK_IMPORTED_MODULE_9__["GroupCardLinkTypes"].docs, title: _SiteHeader_resx__WEBPACK_IMPORTED_MODULE_22__["files"] },
                { linkType: _ms_odsp_shared_react_lib_containers_compositeHeader_StateManager_Props__WEBPACK_IMPORTED_MODULE_9__["GroupCardLinkTypes"].notebook, title: _SiteHeader_resx__WEBPACK_IMPORTED_MODULE_22__["notebook"] },
                { linkType: _ms_odsp_shared_react_lib_containers_compositeHeader_StateManager_Props__WEBPACK_IMPORTED_MODULE_9__["GroupCardLinkTypes"].peopleUrl, title: _SiteHeader_resx__WEBPACK_IMPORTED_MODULE_22__["members"] },
                { linkType: _ms_odsp_shared_react_lib_containers_compositeHeader_StateManager_Props__WEBPACK_IMPORTED_MODULE_9__["GroupCardLinkTypes"].planner, title: _SiteHeader_resx__WEBPACK_IMPORTED_MODULE_22__["planner"] }
            ],
            imageUrls: SiteHeader._getSiteHeaderContainerStateManagerImageUrls(),
            shareButtonOnClick: this._shareButtonOnClick
        }).then(function (stateManager) {
            _this._state = stateManager;
            _this._state.componentDidMount();
        });
    };
    /**
     * Resize site header when property panel open or close
     */
    SiteHeader.prototype._resizeSiteHeader = function (event) {
        if (event &&
            event.origin === window.location.origin &&
            event.data === 'Property pane toggled' &&
            this._headerComponent.current) {
            this._headerComponent.current.measureNavLayout();
        }
    };
    SiteHeader.prototype._navigate = function (params, ev) {
        if (params.target) {
            window.open(params.url, params.target);
        }
        else {
            window.open(params.url);
        }
    };
    SiteHeader.prototype._getHorizontalNavLinks = function (props) {
        var _a;
        var chromeOptions = props.chromeOptions, pageContext = props.pageContext;
        if (chromeOptions && chromeOptions.nav.placement === _ms_odsp_datasources_lib_models_chrome_ChromeOptions__WEBPACK_IMPORTED_MODULE_12__["NavPlacementType"].HORIZONTAL) {
            var quickLaunch_1 = ((_a = pageContext.navigationInfo) === null || _a === void 0 ? void 0 : _a.quickLaunch) ? pageContext.navigationInfo.quickLaunch
                : [];
            var checkForKnowledgeHubPageBeforeLoadChunk = Object(_common_KillSwitches__WEBPACK_IMPORTED_MODULE_21__["fixLoadKnowledgeHubHardCodedLinkChunkKSActivated"])() || Object(_common_TopicUtilities__WEBPACK_IMPORTED_MODULE_25__["_isSiteKnowledgeCenter"])(pageContext);
            if (!_common_KillSwitches__WEBPACK_IMPORTED_MODULE_21__["KillSwitches"].knowledgeCenterHardcodedNavLinks.isActivated() &&
                checkForKnowledgeHubPageBeforeLoadChunk &&
                Object(_ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_4__["isCortexEnabled"])(pageContext) // tslint:disable-line:no-any
            ) {
                __webpack_require__.e(/*! import() | spcx-knowledgeHubHardCodedLink */ "spcx-knowledgeHubHardCodedLink").then(__webpack_require__.bind(null, /*! ../../chunks/spcx-knowledgeHubHardCodedLink/KnowledgeHubHardCodedLink */ "BdQi")).then(function (knowledgeHubHardCodedLink) {
                    quickLaunch_1 = knowledgeHubHardCodedLink.KnowledgeHubHardCodedLink(quickLaunch_1, pageContext);
                });
            }
            return _ms_sp_component_utilities_lib_navigationUtilities_NavigationNodeUtilities__WEBPACK_IMPORTED_MODULE_5__["default"].transformNavNodesToLinks(quickLaunch_1, 0);
        }
        return [];
    };
    SiteHeader.prototype._isNavLinksChanged = function (quickLaunch, isAudienceTargeted) {
        if (!SiteHeader._updatePageContextKS.isActivated() &&
            this.props.pageContext &&
            this.props.pageContext.navigationInfo &&
            this.props.pageContext.navigationInfo.isAudienceTargeted !== isAudienceTargeted) {
            return true;
        }
        return !this.state
            ? false
            : !Object(_microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_3__["isEqual"])(this.state.horizontalNavItems, _ms_sp_component_utilities_lib_navigationUtilities_NavigationNodeUtilities__WEBPACK_IMPORTED_MODULE_5__["default"].transformNavNodesToLinks(quickLaunch || [], 0));
    };
    SiteHeader._componentName = 'SiteHeader';
    SiteHeader._navComponentName = 'HorizontalNav';
    SiteHeader._updatePageContextKS = new _ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_4__["KillSwitch"]('1535dc63-0a0b-49c6-ba5e-9aec0f4a4fd8' /* update page context */); // tianbli
    return SiteHeader;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));



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

/***/ "IHrg":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-shared-react@47.12.13_d89e40c38ccaa8bd6af6488f37cb196d/node_modules/@ms/odsp-shared-react/lib/components/CompositeHeader/layouts/UnifiedHeader.base.js ***!
  \***********************************************************************************************************************************************************************************************************************/
/*! exports provided: UnifiedHeaderBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnifiedHeaderBase", function() { return UnifiedHeaderBase; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ms_odsp_utilities_lib_killswitch_Killswitch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ms/odsp-utilities/lib/killswitch/Killswitch */ "QUgr");
/* harmony import */ var _ms_odsp_utilities_lib_features_FeatureOverrides__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ms/odsp-utilities/lib/features/FeatureOverrides */ "iVgB");
/* harmony import */ var _ms_odsp_datasources_lib_providers_theming_FluentFeatures__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ms/odsp-datasources/lib/providers/theming/FluentFeatures */ "KosM");
/* harmony import */ var _subComponents_ShareButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../subComponents/ShareButton */ "fDmH");
/* harmony import */ var _subComponents_FollowButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../subComponents/FollowButton */ "lRed");
/* harmony import */ var _CompositeHeader_Props__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../CompositeHeader.Props */ "Wrjt");
/* harmony import */ var _LivePersonaCardAdapter_DeferredSpLivePersonaCard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../LivePersonaCardAdapter/DeferredSpLivePersonaCard */ "5Txe");
/* harmony import */ var _UnifiedHeader_styles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./UnifiedHeader.styles */ "+tXJ");
/* harmony import */ var _ms_odsp_datasources_lib_ChromeOptions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ms/odsp-datasources/lib/ChromeOptions */ "XnGw");
/* harmony import */ var _utilities_TestUtilities__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../utilities/TestUtilities */ "QtoV");
/* harmony import */ var _ReactDeferredComponent_ReactDeferredComponent__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../ReactDeferredComponent/ReactDeferredComponent */ "+3tZ");
/* harmony import */ var _utilities_shyConductor_ShyConductorLoader__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../utilities/shyConductor/ShyConductorLoader */ "EXnH");
/* harmony import */ var _common_telemetry_NavigationSource__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../common/telemetry/NavigationSource */ "MFpg");
/* harmony import */ var office_ui_fabric_react_lib_utilities_decorators_withResponsiveMode__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! office-ui-fabric-react/lib/utilities/decorators/withResponsiveMode */ "5qgq");
/* harmony import */ var office_ui_fabric_react_lib_utilities_decorators_withResponsiveMode__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(office_ui_fabric_react_lib_utilities_decorators_withResponsiveMode__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var office_ui_fabric_react_lib_FocusZone__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! office-ui-fabric-react/lib/FocusZone */ "NMYH");
/* harmony import */ var office_ui_fabric_react_lib_ContextualMenu__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! office-ui-fabric-react/lib/ContextualMenu */ "u4xd");
/* harmony import */ var office_ui_fabric_react_lib_Utilities__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! office-ui-fabric-react/lib/Utilities */ "mkpW");
/* harmony import */ var office_ui_fabric_react_lib_Link__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! office-ui-fabric-react/lib/Link */ "F3Wv");
/* harmony import */ var office_ui_fabric_react_lib_Styling__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! office-ui-fabric-react/lib/Styling */ "PL71");
/* harmony import */ var office_ui_fabric_react_lib_Button__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! office-ui-fabric-react/lib/Button */ "epn0");
/* harmony import */ var _subComponents_ActionsOverflowButton__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../subComponents/ActionsOverflowButton */ "qZ39");
/* harmony import */ var _ms_odsp_utilities_lib_async_Promise__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @ms/odsp-utilities/lib/async/Promise */ "7Ihg");
/**
 * The UnifiedHeader component. Due to the way webpack is configured in sp-client, this component and all components
 * that it depends on should not have dependencies on resx files. If this component has a dependency on a resx file,
 * consumers in sp-client have to take on a >40KB dependency on the entire odsp-shared-react strings file. Therefore,
 * introducing a dependency for UnifiedHeader on a resx file will prevent sp-client from being able to use any new
 * versions of the odsp-shared-react package.
 */















// OUFR dependencies









var getClassNames = Object(office_ui_fabric_react_lib_Utilities__WEBPACK_IMPORTED_MODULE_18__["classNamesFunction"])();
var DefaultBackgroundFocalPoint = { x: 50, y: 50 };
// long term todo: clean up props on CompositeHeader to not use ISiteHeaderProps, ISiteLogoProps
// [TODO] Put those customizations into a model class
var UnifiedHeaderBase = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(UnifiedHeaderBase, _super);
    function UnifiedHeaderBase(props) {
        var _this = _super.call(this, props) || this;
        _this._shouldUpdateNavLayout = false;
        _this._responsiveLanguageSelectorKSActivated = false;
        _this._shouldUseOverflowComponent = false;
        _this._didGetLanguageSelections = false;
        _this.measureNavsLayouts = function () {
            _this._topNavRef && _this._topNavRef.measureLayout();
            _this._siteNavRef && _this._siteNavRef.measureLayout();
        };
        /** registers or re-registers for shy behavior as necessary */
        _this._ensureRegisterForShy = function () { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                if (this.state.layout === _ms_odsp_datasources_lib_ChromeOptions__WEBPACK_IMPORTED_MODULE_10__["UnifiedHeaderLayout"].minimal) {
                    return [2 /*return*/];
                }
                if (!this._shyRegistration) {
                    this._registerForShy();
                }
                else if (this._shyRegistration.heightDifference !== this._getHeightDifference()) {
                    this._unregisterForShy();
                    this._registerForShy();
                }
                return [2 /*return*/];
            });
        }); };
        /** registers for shy behavior, must delete this._shyRegistration to regenerate */
        _this._registerForShy = function () { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this._shyRegistration) {
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this.loadShyConductor()];
                    case 1:
                        _a.sent();
                        // check again, just in case, cuz of async code
                        if (this._shyRegistration) {
                            return [2 /*return*/];
                        }
                        this._shyRegistration = {
                            onShy: function () {
                                _this.setState({ isShyMode: true, readyForShyHeader: true });
                            },
                            onUnshy: function () {
                                _this.setState({ isShyMode: false });
                            },
                            heightDifference: this._getHeightDifference()
                        };
                        this._shyConductor.registerCallbacks(this._shyRegistration);
                        return [2 /*return*/];
                }
            });
        }); };
        /** unregisters from shy behavior */
        _this._unregisterForShy = function () {
            if (!_this._shyRegistration) {
                return;
            }
            _this._shyConductor.unregisterCallback(_this._shyRegistration);
            _this._shyRegistration = undefined;
        };
        /** async loads the ShyConductor */
        _this.loadShyConductor = function () { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
            var _a;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (_ms_odsp_datasources_lib_providers_theming_FluentFeatures__WEBPACK_IMPORTED_MODULE_4__["isOneDrive"]) {
                            return [2 /*return*/];
                        }
                        if (!!this._shyConductor) return [3 /*break*/, 4];
                        if (!(this.props.siteHeaderProps && this.props.siteHeaderProps.lpcModuleLoaderWaiter)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.props.siteHeaderProps.lpcModuleLoaderWaiter];
                    case 1:
                        _b.sent();
                        _b.label = 2;
                    case 2:
                        _a = this;
                        return [4 /*yield*/, Object(_utilities_shyConductor_ShyConductorLoader__WEBPACK_IMPORTED_MODULE_13__["getShyConductor"])()];
                    case 3:
                        _a._shyConductor = _b.sent();
                        _b.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        }); };
        _this._getHeightDifference = function () {
            return Object(_UnifiedHeader_styles__WEBPACK_IMPORTED_MODULE_9__["getFullHeight"])(_this.state) - _UnifiedHeader_styles__WEBPACK_IMPORTED_MODULE_9__["shyHeight"];
        };
        _this._renderTitleSubcell = function (classNames) {
            var _a = _this.state, showTitle = _a.showTitle, groupInfoByTitle = _a.groupInfoByTitle, navIsInline = _a.navIsInline;
            if (!showTitle) {
                return null;
            }
            return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: classNames.titleSubcell },
                _this._renderSiteTitle(classNames),
                // if the nav is below the title, show group info beside title (instead of below)
                groupInfoByTitle && navIsInline && _this._renderGroupInfo(classNames)));
        };
        _this._renderAdjacentTitleSubcell = function (classNames) {
            var _a = _this.state, navIsInline = _a.navIsInline, groupInfoByTitle = _a.groupInfoByTitle;
            return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: classNames.adjacentTitleSubcell },
                navIsInline && _this._renderSiteNav(classNames),
                // if there is no nav here, put the group info here instead
                groupInfoByTitle && !navIsInline && _this._renderGroupInfo(classNames)));
        };
        _this._renderSiteLogo = function (classNames, shy) {
            var siteHeaderProps = _this.props.siteHeaderProps;
            var logoUrl = _this.state.logoUrl;
            // When it is extended header and in shy mode, we would like to use square logo
            if (!_ms_odsp_utilities_lib_killswitch_Killswitch__WEBPACK_IMPORTED_MODULE_2__["Killswitch"].isActivated('77c2a1a7-dd39-434e-8ed1-5305320c44db', '09/01/2020', 'Use Square logo when shy') &&
                _this.state.layout === _ms_odsp_datasources_lib_ChromeOptions__WEBPACK_IMPORTED_MODULE_10__["UnifiedHeaderLayout"].extended &&
                shy) {
                logoUrl = _this.props.siteHeaderProps.pageContext.webAbsoluteUrl + "/_api/siteiconmanager/getsitelogo?target=0";
            }
            /* Two elements here:
             * 1) an outer wrapper that could be an anchor or div, depending on if it's clickable.
             * 2) the inside element, a span with the acronym, or an img that is the logo */
            // the inside element
            var logoInnercontent = _this.state.hasLogo ? (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("img", { className: !shy ? classNames.logoImg : classNames.shyLogoImg, ref: _this._logoImg, alt: '', "aria-hidden": true, src: logoUrl, onError: _this._logoImgErrorHandler.bind(_this), onLoad: _this._logoImgLoadedHandler.bind(_this) })) : (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", null, siteHeaderProps.siteLogo.siteAcronym));
            // the outer wrapper, this will handle centering the logo itself
            var logoWrapperProps = {
                className: !shy ? classNames.logoWrapper : classNames.shyLogoWrapper
            };
            var logoRoot = siteHeaderProps.logoHref || siteHeaderProps.logoOnClick ? (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("a", Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, logoWrapperProps, { href: siteHeaderProps.logoHref || 'javascript:', onClick: siteHeaderProps.logoOnClick, "aria-label": siteHeaderProps.siteTitle, "data-navigationcomponent": Object(_common_telemetry_NavigationSource__WEBPACK_IMPORTED_MODULE_14__["getNavComponentLabel"])(_common_telemetry_NavigationSource__WEBPACK_IMPORTED_MODULE_14__["NavigationSource"].CompositeHeader) }), logoInnercontent)) : (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, logoWrapperProps), logoInnercontent));
            return logoRoot;
        };
        _this._logoImgErrorHandler = function () {
            // logo failed to load, re-render pretending we never got a logo
            this.setState({ hasLogo: false });
        };
        _this._logoImgLoadedHandler = function () {
            // clear initial width and height
            if (!_ms_odsp_utilities_lib_killswitch_Killswitch__WEBPACK_IMPORTED_MODULE_2__["Killswitch"].isActivated('5d60446c-c554-4148-aabb-4e27ed766bba'
            /* '4/23/2020', 'Reduce components re-render count' */
            )) {
                if (this._logoImg.current) {
                    this._logoImg.current.style.minHeight = '0';
                    this._logoImg.current.style.minWidth = '0';
                }
            }
            else {
                this.setState({ logoLoaded: true });
            }
        };
        /** render the string that is the site classification/group info (e.g. "Public Group | Confidential") */
        _this._renderGroupInfo = function (classNames) {
            var _a, _b;
            var _c = _this.props.siteHeaderProps, groupInfoString = _c.groupInfoString, siteClassification = _c.siteClassification, usageGuidelineUrl = _c.usageGuidelineUrl, updateUsageGuidelineUrl = _c.updateUsageGuidelineUrl, pageContext = _c.pageContext;
            if (!_this.state.hasGroupInfo) {
                return null;
            }
            var ibSegments = pageContext ? pageContext.IBSegments : null;
            var siteClassificationRootProps = {
                'aria-label': siteClassification,
                'data-automationid': 'SiteHeaderSiteClassification'
            };
            var ibSegmentHeaderFlightEnabled = _ms_odsp_utilities_lib_features_FeatureOverrides__WEBPACK_IMPORTED_MODULE_3__["default"].isFeatureEnabled({
                ODB: 680 /* IBSegmentsSiteHeader */
            });
            var updateUsageGuidelineCallback = undefined;
            if (!usageGuidelineUrl && updateUsageGuidelineUrl) {
                updateUsageGuidelineCallback = updateUsageGuidelineUrl;
            }
            return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", { className: classNames.groupInfo, "data-automationid": 'SiteHeaderGroupInfo', onMouseOver: updateUsageGuidelineCallback, onFocus: updateUsageGuidelineCallback },
                pageContext.isNativeFederatedUser && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", { className: classNames.externalBadge }, _this.props.headerStrings.externalIdentityBadge)),
                groupInfoString && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", { "aria-label": groupInfoString, "data-automationid": 'SiteHeaderGroupType' },
                    ' ',
                    groupInfoString,
                    ' ')),
                groupInfoString && siteClassification && react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", null, ' | '),
                siteClassification && (
                // updateUsageGuidelineCallback will update usageGuidelineUrl
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](office_ui_fabric_react_lib_Link__WEBPACK_IMPORTED_MODULE_19__["Link"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, siteClassificationRootProps, { href: usageGuidelineUrl || 'javascript:', "aria-busy": !usageGuidelineUrl }), siteClassification)),
                ibSegmentHeaderFlightEnabled &&
                    ((_a = ibSegments) === null || _a === void 0 ? void 0 : _a.length) > 0 &&
                    (groupInfoString || siteClassification) && react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", null, ' | '),
                ibSegmentHeaderFlightEnabled && ((_b = ibSegments) === null || _b === void 0 ? void 0 : _b.length) > 0 && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](office_ui_fabric_react_lib_Link__WEBPACK_IMPORTED_MODULE_19__["Link"], { className: 'ms-UnifiedHeader-IBSegments', onClick: function () { return _this.setState({ showIBSegmentCallout: !_this.state.showIBSegmentCallout }); } }, "" + _this.props.headerStrings.ibSegmentLabelPlural))));
        };
        _this._renderIBSegmentCallout = function () {
            var ibCalloutProps = {
                showIBSegmentCallout: _this.state.showIBSegmentCallout,
                dismissIBSegmentCallout: function () {
                    _this.setState({ showIBSegmentCallout: false });
                },
                target: ".ms-UnifiedHeader-IBSegments",
                pageContext: _this.props.siteHeaderProps.pageContext
            };
            var deferredProps = {
                modulePath: '../../',
                moduleLoader: {
                    load: function (modulePath) {
                        // string path must NOT be a variable here
                        return __webpack_require__.e(/*! import() */ 10).then(__webpack_require__.bind(null, /*! ../../IBSegments/IBSegmentsCalloutStateManager */ "79mC")).then(function (ibSegmentsCalloutStateManager) {
                            return { '../../IBSegments/IBSegmentsCalloutStateManager': ibSegmentsCalloutStateManager };
                        });
                    },
                    parse: function (module) {
                        return module['../../IBSegments/IBSegmentsCalloutStateManager'] &&
                            module['../../IBSegments/IBSegmentsCalloutStateManager'].IBSegmentsCalloutStateManager;
                    }
                },
                customWaiter: _this.props.siteHeaderProps.lpcModuleLoaderWaiter,
                props: ibCalloutProps
            };
            return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ReactDeferredComponent_ReactDeferredComponent__WEBPACK_IMPORTED_MODULE_12__["ReactDeferredComponent"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, deferredProps));
        };
        /** renders just the text that is the site title... for groups also attach an LPC card */
        _this._renderSiteTitle = function (classNames, shy) {
            if (!_this.state.showTitle) {
                return null;
            }
            var siteHeaderProps = _this.props.siteHeaderProps;
            var useLpc = siteHeaderProps.groupEmail && siteHeaderProps.pageContext && siteHeaderProps.lpcModuleLoader;
            var useLinkForTitle = !useLpc && siteHeaderProps.logoHref;
            var titleClassName = !shy ? classNames.title : classNames.shyTitle;
            var siteHeaderRef = !shy ? _this._siteHeaderRef : undefined;
            // When using a link for the Title element, className needs to apply to that link, not the surrounding span.
            // When using the live persona card (useLpc), className needs to go on an element inside the persona card.
            var titleProps = {
                className: !useLinkForTitle && !useLpc ? titleClassName : undefined,
                'data-automationid': 'SiteHeaderTitle',
                role: 'heading',
                'aria-level': 1,
                ref: siteHeaderRef
            };
            var siteTitleSpanProps = useLpc
                ? {
                    className: !useLinkForTitle ? titleClassName : undefined
                }
                : titleProps;
            var simpleSiteTitle = (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, siteTitleSpanProps), useLinkForTitle ? (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("a", { href: siteHeaderProps.logoHref, className: titleClassName, "data-navigationcomponent": Object(_common_telemetry_NavigationSource__WEBPACK_IMPORTED_MODULE_14__["getNavComponentLabel"])(_common_telemetry_NavigationSource__WEBPACK_IMPORTED_MODULE_14__["NavigationSource"].CompositeHeader) }, siteHeaderProps.siteTitle)) : (siteHeaderProps.siteTitle)));
            var siteHeaderCoachmark = _this.props.isCoachmarkVisible && _this.props.getDeferredCoachmark
                ? _this.props.getDeferredCoachmark(shy, _this.state.isShyMode, siteHeaderRef)
                : null;
            if (useLpc) {
                return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, titleProps),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_LivePersonaCardAdapter_DeferredSpLivePersonaCard__WEBPACK_IMPORTED_MODULE_8__["DeferredSpLivePersonaCard"], { personaType: 'Group', identifier: siteHeaderProps.groupEmail, pageContext: siteHeaderProps.pageContext, loggingData: { name: 'SiteHeader.Title.Click' }, "data-automationId": 'SiteHeaderGroupCardLink', moduleLoader: siteHeaderProps.lpcModuleLoader, customWaiter: siteHeaderProps.lpcModuleLoaderWaiter, placeHolder: simpleSiteTitle }, simpleSiteTitle)));
            }
            else {
                return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null,
                    simpleSiteTitle,
                    siteHeaderCoachmark));
            }
        };
        _this._renderDeferredNav = function (classNames, navProps) {
            if (_this.props.onRenderHorizontalNav) {
                return _this.props.onRenderHorizontalNav(navProps);
            }
            else {
                var deferredProps = {
                    modulePath: '../../HorizontalNav/HorizontalNav',
                    moduleLoader: {
                        load: function (modulePath) {
                            // string path must NOT be a variable here
                            return Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ../../HorizontalNav/HorizontalNav */ "tehv")).then(function (horizontalNav) {
                                return { '../../HorizontalNav/HorizontalNav': horizontalNav };
                            });
                        },
                        parse: function (module) {
                            return module['../../HorizontalNav/HorizontalNav'] &&
                                module['../../HorizontalNav/HorizontalNav'].HorizontalNav;
                        }
                    },
                    customWaiter: _this.props.siteHeaderProps.lpcModuleLoaderWaiter,
                    props: navProps
                };
                return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ReactDeferredComponent_ReactDeferredComponent__WEBPACK_IMPORTED_MODULE_12__["ReactDeferredComponent"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, deferredProps));
            }
        };
        _this._renderLeftNavToggleButton = function (classNames) {
            if (_this.state.showLeftNavToggleButton) {
                return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](office_ui_fabric_react_lib_Button__WEBPACK_IMPORTED_MODULE_21__["IconButton"], { onClick: _this.props.leftNavToggleCallback, iconProps: { iconName: 'GlobalNavButton' }, className: classNames.leftNavToggleButton, title: _this.props.headerStrings.leftNavToggleButtonTitle, "aria-label": _this.props.headerStrings.leftNavToggleButtonLabel, "aria-haspopup": true, "aria-expanded": _this.props.isLeftNavExpanded, "data-automationid": 'SiteHeaderLeftNavToggleButton' }));
            }
            else {
                return null;
            }
        };
        _this._renderHubNav = function (classNames) {
            var _a, _b;
            var pageContext = (_a = _this.props.siteHeaderProps) === null || _a === void 0 ? void 0 : _a.pageContext;
            if (!pageContext) {
                return null;
            }
            var deferredHubNavProps = {
                modulePath: '../../HubNav/index',
                moduleLoader: {
                    load: function () {
                        return _ms_odsp_utilities_lib_async_Promise__WEBPACK_IMPORTED_MODULE_23__["CancelablePromise"].resolve(Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ../../HubNav/index */ "njPS")).then(function (module) { return module.HubNav; }));
                    },
                    parse: undefined
                },
                customWaiter: (_b = _this.props.siteHeaderProps) === null || _b === void 0 ? void 0 : _b.waitForPLT,
                props: {
                    pageContext: pageContext
                }
            };
            return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ReactDeferredComponent_ReactDeferredComponent__WEBPACK_IMPORTED_MODULE_12__["ReactDeferredComponent"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, deferredHubNavProps));
        };
        /** renders JUST the deferred HorizontalNav for the site nav */
        _this._renderSiteNav = function (classNames) {
            if (!_this.state.showNav) {
                return null;
            }
            var siteNavProps = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ styles: function () { return ({
                    root: [classNames.siteNavRoot],
                    link: [classNames.siteNavLink]
                }); }, componentRef: _this._assignSiteNavComponentRef, chromeOptions: _this.props.chromeOptions, theme: _this.props.headerEmphasisTheme || _this.props.theme }, _this.props.siteNavProps);
            return _this._renderDeferredNav(classNames, siteNavProps);
        };
        /** renders the top nav's cell */
        _this._renderTopNavCell = function (classNames) {
            if (!_this.state.showTopNav) {
                return null;
            }
            var topNavHorizontalNavProps = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ componentRef: _this._assignTopNavComponentRef, theme: _this.props.headerEmphasisTheme || _this.props.theme }, _this.props.topNavProps);
            return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: classNames.topNavBox }, _this._renderDeferredNav(classNames, topNavHorizontalNavProps)));
        };
        _this._assignSiteNavComponentRef = function (component) {
            _this._siteNavRef = component;
        };
        _this._assignTopNavComponentRef = function (component) {
            _this._topNavRef = component;
        };
        // when adding new actions, be sure to update hasActions
        _this._renderActions = function (classNames) {
            if (!_this.state.hasActions) {
                return null;
            }
            if (!_this.state.isResponsiveMode) {
                var shareButton = _this.props.share && !_this.props.siteHeaderProps.pageContext.isGroupRelatedSite && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_subComponents_ShareButton__WEBPACK_IMPORTED_MODULE_5__["ShareButton"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, _this.props.share), { responsiveMode: _this.props.responsiveMode }))));
                var followButton = _this.props.follow && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_subComponents_FollowButton__WEBPACK_IMPORTED_MODULE_6__["FollowButton"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, _this.props.follow), { responsiveMode: _this.props.responsiveMode }))));
                return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: classNames.actionsSubcell },
                    _this.props.createSiteButton,
                    followButton,
                    shareButton,
                    _this.props.customActionElements,
                    _this.props.languageSelector,
                    _this.props.goToOutlookButton));
            }
            else {
                return _this._renderActionsOverflowButton(classNames);
            }
        };
        /** renders the ... button that opens the menu that holds the actions when the screen is narrow */
        _this._renderActionsOverflowButton = function (classNames) {
            if (_this._shouldUseOverflowComponent) {
                return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_subComponents_ActionsOverflowButton__WEBPACK_IMPORTED_MODULE_22__["ActionsOverflowButton"], { classNames: classNames, isResponsiveMode: _this.state.isResponsiveMode, hasActions: _this.state.hasActions, createSiteAction: _this.props.createSiteAction, headerStrings: _this.props.headerStrings, follow: _this.props.follow, share: _this.props.share, customActionContextualMenuItems: _this.props.customActionContextualMenuItems, getLanguageSelections: _this.props.getLanguageSelections, pageContext: _this.props.siteHeaderProps && _this.props.siteHeaderProps.pageContext }));
            }
            var actionItems = [];
            if (!_this.state.hasActions) {
                return null;
            }
            if (_this.props.createSiteAction) {
                var createSiteItem = {
                    name: _this.props.headerStrings.createSiteLabel,
                    key: 'createSite',
                    iconProps: { iconName: 'Add' },
                    onClick: _this.props.createSiteAction
                };
                actionItems.push(createSiteItem);
            }
            var followProps = _this.props.follow;
            if (followProps) {
                var followMenuItem = {
                    name: followProps.notFollowedLabel && followProps.followState !== _CompositeHeader_Props__WEBPACK_IMPORTED_MODULE_7__["FollowState"].followed
                        ? followProps.notFollowedLabel
                        : followProps.followLabel,
                    key: 'follow',
                    iconProps: {
                        iconName: followProps.followState === _CompositeHeader_Props__WEBPACK_IMPORTED_MODULE_7__["FollowState"].notFollowing ? 'FavoriteStar' : 'FavoriteStarFill'
                    },
                    onClick: followProps.followState !== _CompositeHeader_Props__WEBPACK_IMPORTED_MODULE_7__["FollowState"].transitioning ? followProps.followAction : undefined
                };
                actionItems.push(followMenuItem);
            }
            if (_this.props.share) {
                var shareMenuItem = {
                    name: _this.props.share.shareLabel,
                    key: 'share',
                    iconProps: { iconName: 'Share' },
                    onClick: _this.props.share.onShare
                };
                actionItems.push(shareMenuItem);
            }
            if (_this.props.customActionContextualMenuItems) {
                actionItems = actionItems.concat(_this.props.customActionContextualMenuItems);
            }
            var sectionItems = [];
            var shouldShowLanguageSelections = !_this._responsiveLanguageSelectorKSActivated &&
                _this.state.languageSelections &&
                _this.state.languageSelections.length > 0;
            if (shouldShowLanguageSelections) {
                if (actionItems.length > 0) {
                    var siteActionsSection = {
                        key: 'siteActions',
                        itemType: office_ui_fabric_react_lib_ContextualMenu__WEBPACK_IMPORTED_MODULE_17__["ContextualMenuItemType"].Section,
                        sectionProps: {
                            topDivider: true,
                            bottomDivider: true,
                            title: _this.props.headerStrings.siteActionsLabel,
                            items: actionItems
                        }
                    };
                    sectionItems.push(siteActionsSection);
                }
                var languageSelectorSection = {
                    key: 'languageSelector',
                    itemType: office_ui_fabric_react_lib_ContextualMenu__WEBPACK_IMPORTED_MODULE_17__["ContextualMenuItemType"].Section,
                    sectionProps: {
                        topDivider: true,
                        bottomDivider: true,
                        title: _this.props.headerStrings.languagesLabel,
                        items: _this.state.languageSelections
                    }
                };
                sectionItems.push(languageSelectorSection);
            }
            return ((shouldShowLanguageSelections || actionItems.length > 0) && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { ref: function (d) {
                    _this._actionMenuElement = d;
                }, className: classNames.moreActionsButton },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](office_ui_fabric_react_lib_Button__WEBPACK_IMPORTED_MODULE_21__["IconButton"], { iconProps: { iconName: 'More' }, role: 'button', onClick: _this._actionMenuOnClick.bind(_this), "aria-label": _this.props.headerStrings.overflowActionsButtonLabel, "aria-haspopup": true, "aria-expanded": _this.state.showActionMenu }),
                _this.state.showActionMenu && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](office_ui_fabric_react_lib_FocusZone__WEBPACK_IMPORTED_MODULE_16__["FocusZone"], { direction: office_ui_fabric_react_lib_FocusZone__WEBPACK_IMPORTED_MODULE_16__["FocusZoneDirection"].vertical },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](office_ui_fabric_react_lib_ContextualMenu__WEBPACK_IMPORTED_MODULE_17__["ContextualMenu"], { target: _this._actionMenuElement, directionalHint: office_ui_fabric_react_lib_ContextualMenu__WEBPACK_IMPORTED_MODULE_17__["DirectionalHint"].bottomLeftEdge, items: shouldShowLanguageSelections ? sectionItems : actionItems, isBeakVisible: false, gapSpace: 0, onDismiss: _this._actionMenuOnDismiss.bind(_this) }))))));
        };
        _this._actionMenuOnClick = function () {
            this.setState({ showActionMenu: true });
        };
        _this._actionMenuOnDismiss = function () {
            this.setState({ showActionMenu: false });
        };
        _this._renderSearchbox = function (classNames) {
            return _this.state.showSearch && react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: classNames.searchCell }, _this.props.searchBox);
        };
        _this.state = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ showActionMenu: false }, UnifiedHeaderBase_1._getLayoutOptions(props)), { readyForShyHeader: false, logoLoaded: false, languageSelections: undefined, showIBSegmentCallout: false });
        _this._logoImg = react__WEBPACK_IMPORTED_MODULE_1__["createRef"]();
        _this._siteHeaderRef = react__WEBPACK_IMPORTED_MODULE_1__["createRef"]();
        return _this;
    }
    UnifiedHeaderBase_1 = UnifiedHeaderBase;
    UnifiedHeaderBase.prototype.componentDidMount = function () {
        this._ensureRegisterForShy();
        this._responsiveLanguageSelectorKSActivated = _ms_odsp_utilities_lib_killswitch_Killswitch__WEBPACK_IMPORTED_MODULE_2__["Killswitch"].isActivated('2c1fb48e-db5a-49e3-8e24-0502e4b6598a'
        /* '1/31/2020', 'Implement responsive language selector' */
        );
        this._shouldUseOverflowComponent = !_ms_odsp_utilities_lib_killswitch_Killswitch__WEBPACK_IMPORTED_MODULE_2__["Killswitch"].isActivated('72f63831-1a38-4662-9658-0e3aebdb5fcd', '5/18/2020', 'replace actions overflow button with its own component to avoid language selector re-render entire header');
    };
    UnifiedHeaderBase.prototype.componentDidUpdate = function () {
        var _this = this;
        this._ensureRegisterForShy();
        if (this._shouldUpdateNavLayout) {
            this._shouldUpdateNavLayout = false;
            this.measureNavsLayouts();
        }
        if (!this._responsiveLanguageSelectorKSActivated &&
            !this._shouldUseOverflowComponent &&
            !this._didGetLanguageSelections &&
            this.props.getLanguageSelections &&
            this.state.isResponsiveMode &&
            this.state.languageSelections === undefined) {
            this._didGetLanguageSelections = true;
            this.props.getLanguageSelections().then(function (items) {
                _this.setState({ languageSelections: items });
            });
        }
    };
    UnifiedHeaderBase.prototype.componentWillUnmount = function () {
        this._unregisterForShy();
    };
    UnifiedHeaderBase.prototype.render = function () {
        var _a, _b, _c;
        var _d = this.props, _e = _d.styles, styles = _e === void 0 ? this.props.getStyles : _e, headerEmphasisTheme = _d.headerEmphasisTheme, theme = _d.theme, backgroundFocalPoint = _d.backgroundFocalPoint, siteHeaderProps = _d.siteHeaderProps;
        var getStylesProps = this.props.getStylesProps || {
            theme: headerEmphasisTheme || theme,
            hasEmphasis: !!headerEmphasisTheme
        };
        var _f = this.state, layout = _f.layout, showLogo = _f.showLogo, showIBSegmentCallout = _f.showIBSegmentCallout;
        var isMinimalLayout = layout === _ms_odsp_datasources_lib_ChromeOptions__WEBPACK_IMPORTED_MODULE_10__["UnifiedHeaderLayout"].minimal;
        var isExtendedLayout = layout === _ms_odsp_datasources_lib_ChromeOptions__WEBPACK_IMPORTED_MODULE_10__["UnifiedHeaderLayout"].extended;
        var classNames = getClassNames(styles, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, getStylesProps), this.state), { responsiveMode: this.props.responsiveMode }));
        var focalPointPreviewFix;
        var focalPointStyleOverride = '0% 0%'; /** background-position default */
        if (!_ms_odsp_utilities_lib_killswitch_Killswitch__WEBPACK_IMPORTED_MODULE_2__["Killswitch"].isActivated('7bfa01da-8be3-4431-9da6-730179c92340', '07/09/2020', 'Fix focal point preview issue') &&
            isExtendedLayout) {
            focalPointPreviewFix = backgroundFocalPoint ||
                ((_b = (_a = siteHeaderProps) === null || _a === void 0 ? void 0 : _a.pageContext) === null || _b === void 0 ? void 0 : _b.focalPoint) || {
                x: 50,
                y: 50
            } /** default position */;
            focalPointStyleOverride = focalPointPreviewFix.x + "% " + focalPointPreviewFix.y + "%";
        }
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: classNames.root },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](office_ui_fabric_react_lib_Utilities__WEBPACK_IMPORTED_MODULE_18__["Customizer"], { settings: { theme: Object(office_ui_fabric_react_lib_Styling__WEBPACK_IMPORTED_MODULE_20__["getTheme"])() } },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: classNames.topPlaceholderRow },
                    this.props.noSharePointSyntexLicenseBar,
                    this.props.readOnlyBar,
                    this.props.messageBar,
                    this.props.policyBar,
                    this.props.unauthorizedTenantBar,
                    this.props.siteScriptProgressIndicator,
                    this.props.shareDialog,
                    this.props.userExpirationBar,
                    this.props.webTemplatesGalleryFirstRunDialog)),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](office_ui_fabric_react_lib_Utilities__WEBPACK_IMPORTED_MODULE_18__["Customizer"], { settings: { theme: headerEmphasisTheme || theme } },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: classNames.headerRow, style: { backgroundPosition: focalPointStyleOverride } },
                    !isMinimalLayout && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: classNames.mainHeader, "data-automationid": 'SiteHeader' },
                        this._renderTopNavCell(classNames),
                        this._renderLeftNavToggleButton(classNames),
                        showLogo && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: classNames.logoCell // todo : move this and logoCell into _renderSiteLogo (also fix shy)
                         }, this._renderSiteLogo(classNames))),
                        // In Standard or narrow mode, render with a wrapper for vertical stacking
                        layout === _ms_odsp_datasources_lib_ChromeOptions__WEBPACK_IMPORTED_MODULE_10__["UnifiedHeaderLayout"].standard && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: classNames.titleAndNavWrapper },
                            this._renderTitleSubcell(classNames),
                            this._renderAdjacentTitleSubcell(classNames))),
                        layout !== _ms_odsp_datasources_lib_ChromeOptions__WEBPACK_IMPORTED_MODULE_10__["UnifiedHeaderLayout"].standard && !isExtendedLayout && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null,
                            this._renderTitleSubcell(classNames),
                            this._renderAdjacentTitleSubcell(classNames))),
                        isExtendedLayout && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { style: { display: 'flex' } },
                            this._renderTitleSubcell(classNames),
                            this._renderAdjacentTitleSubcell(classNames))),
                        showIBSegmentCallout && this._renderIBSegmentCallout(),
                        layout === _ms_odsp_datasources_lib_ChromeOptions__WEBPACK_IMPORTED_MODULE_10__["UnifiedHeaderLayout"].standard && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null,
                            !this.state.groupInfoByTitle && this._renderGroupInfo(classNames),
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: classNames.sideActionsWrapper },
                                this._renderActions(classNames),
                                this._renderFacepile(classNames),
                                this._renderSearchbox(classNames)))),
                        layout !== _ms_odsp_datasources_lib_ChromeOptions__WEBPACK_IMPORTED_MODULE_10__["UnifiedHeaderLayout"].standard && !isExtendedLayout && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: classNames.actionsWrapper },
                            !this.state.groupInfoByTitle && this._renderGroupInfo(classNames),
                            this._renderActions(classNames),
                            this._renderFacepile(classNames),
                            this._renderSearchbox(classNames))))),
                    (this.state.readyForShyHeader || isMinimalLayout) && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: classNames.shyHeader, "data-automationid": isMinimalLayout ? 'MinimalHeader' : 'ShyHeader' },
                        this._renderLeftNavToggleButton(classNames),
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: classNames.logoCell }, this._renderSiteLogo(classNames, true)),
                        this._renderSiteTitle(classNames, true),
                        this._renderSiteNav(classNames),
                        isMinimalLayout && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: classNames.actionsWrapper },
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: classNames.spacer }, " "),
                            this._renderGroupInfo(classNames),
                            this._renderFacepile(classNames),
                            this._renderActionsOverflowButton(classNames))),
                        !isMinimalLayout && this.props.customActionContextualMenuItems && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null,
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: classNames.spacer }, " "),
                            this._renderActionsOverflowButton(classNames)))))),
                isExtendedLayout && !this.state.isShyMode && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: classNames.bottomNavRow },
                    UnifiedHeaderBase_1._isHomePlusHubScenario((_c = siteHeaderProps) === null || _c === void 0 ? void 0 : _c.pageContext)
                        ? this._renderHubNav(classNames)
                        : this._renderSiteNav(classNames),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { style: { marginLeft: 'auto' } }) /** Using auto margins for main axis alignment */,
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: classNames.actionsWrapper },
                        !this.state.groupInfoByTitle && this._renderGroupInfo(classNames),
                        this._renderActions(classNames),
                        this._renderFacepile(classNames)))))));
    };
    UnifiedHeaderBase.prototype.UNSAFE_componentWillReceiveProps = function (newProps) {
        this.setState(UnifiedHeaderBase_1._getLayoutOptions(newProps));
        if (this.props.follow !== newProps.follow) {
            this._shouldUpdateNavLayout = true;
        }
    };
    UnifiedHeaderBase._isMinimalHeaderAllowed = function () {
        return _ms_odsp_utilities_lib_features_FeatureOverrides__WEBPACK_IMPORTED_MODULE_3__["default"].isFeatureEnabled({ ODB: 628 /** MinimalSiteHeader */ });
    };
    UnifiedHeaderBase.prototype._renderFacepile = function (classNames) {
        return (this.state.showFacepile && react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: classNames.facepileCell }, this.props.membersInfoLink));
    };
    var UnifiedHeaderBase_1;
    UnifiedHeaderBase._getLayoutOptions = function (props) {
        var _a, _b, _c;
        var isResponsiveMode = props.responsiveMode <= office_ui_fabric_react_lib_utilities_decorators_withResponsiveMode__WEBPACK_IMPORTED_MODULE_15__["ResponsiveMode"].medium;
        var showLeftNavToggleButton = props.responsiveMode <= office_ui_fabric_react_lib_utilities_decorators_withResponsiveMode__WEBPACK_IMPORTED_MODULE_15__["ResponsiveMode"].large &&
            !_ms_odsp_utilities_lib_killswitch_Killswitch__WEBPACK_IMPORTED_MODULE_2__["Killswitch"].isActivated('f2c2f4aa-1212-4c68-ac57-bd91823bb3bc', '01/29/2020', 'left nav toggle') &&
            props.leftNavToggleCallback != undefined;
        var unifiedLayout = (props.chromeOptions ? props.chromeOptions.header.layout : props.unifiedLayout) ||
            _ms_odsp_datasources_lib_ChromeOptions__WEBPACK_IMPORTED_MODULE_10__["UnifiedHeaderLayout"].standard;
        // responsiveMode has similar layout to Standard, so use that as a starting point
        if (isResponsiveMode) {
            unifiedLayout = _ms_odsp_datasources_lib_ChromeOptions__WEBPACK_IMPORTED_MODULE_10__["UnifiedHeaderLayout"].standard;
        }
        if (unifiedLayout === _ms_odsp_datasources_lib_ChromeOptions__WEBPACK_IMPORTED_MODULE_10__["UnifiedHeaderLayout"].minimal && !UnifiedHeaderBase_1._isMinimalHeaderAllowed()) {
            unifiedLayout = _ms_odsp_datasources_lib_ChromeOptions__WEBPACK_IMPORTED_MODULE_10__["UnifiedHeaderLayout"].compact;
        }
        var siteLogoProps = props.siteHeaderProps.siteLogo;
        var pageContext = props.siteHeaderProps.pageContext;
        var showNav = !!(props.siteNavProps &&
            props.siteNavProps.items &&
            (props.siteNavProps.items.length || props.siteNavProps.editLink)) && props.responsiveMode > office_ui_fabric_react_lib_utilities_decorators_withResponsiveMode__WEBPACK_IMPORTED_MODULE_15__["ResponsiveMode"].large;
        if (!_ms_odsp_utilities_lib_killswitch_Killswitch__WEBPACK_IMPORTED_MODULE_2__["Killswitch"].isActivated('e04142b5-2f68-499c-b44f-60e54d1c82a1' /** 09/18/2020 Support hide quick launch */) &&
            Object(_utilities_TestUtilities__WEBPACK_IMPORTED_MODULE_11__["spAppBarClientWithExp"])(pageContext)) {
            // Whatever check it has done before, it will always respect the spweb.QuickLaunchEnabled
            var quickLaunchEnabled = props.chromeOptions
                ? props.chromeOptions.nav.quickLaunchEnabled
                : !!((_a = pageContext.navigationInfo) === null || _a === void 0 ? void 0 : _a.quickLaunch);
            showNav = quickLaunchEnabled;
        }
        var backgroundImageUrl = pageContext.webAbsoluteUrl + "/_api/siteiconmanager/getsitelogo?target=2";
        if (!_ms_odsp_utilities_lib_killswitch_Killswitch__WEBPACK_IMPORTED_MODULE_2__["Killswitch"].isActivated('63f54a8e-e5a6-465c-802d-99858d6ee392' /** 10/26/2020 Browser caching support */)) {
            if ((_b = pageContext.focalPoint) === null || _b === void 0 ? void 0 : _b.hash) {
                backgroundImageUrl = pageContext.webAbsoluteUrl + "/_api/siteiconmanager/getsitelogo?target=2&hash=" + ((_c = pageContext.focalPoint) === null || _c === void 0 ? void 0 : _c.hash);
            }
        }
        var showTopNav = !!(props.topNavProps &&
            props.topNavProps.items &&
            (props.topNavProps.items.length || props.topNavProps.editLink)) && props.responsiveMode > office_ui_fabric_react_lib_utilities_decorators_withResponsiveMode__WEBPACK_IMPORTED_MODULE_15__["ResponsiveMode"].large;
        // parse props into a series of flags to simplify styling and layout logic
        var toReturn = {
            layout: unifiedLayout,
            hasLogo: props.hasLogoPreview ? !!props.logoPreview : !!siteLogoProps.siteLogoUrl,
            hasAcronym: !!siteLogoProps.siteAcronym,
            showLogo: true,
            logoUrl: props.hasLogoPreview ? props.logoPreview : siteLogoProps.siteLogoUrl,
            showTitle: !_ms_odsp_utilities_lib_features_FeatureOverrides__WEBPACK_IMPORTED_MODULE_3__["default"].isFeatureEnabled({ ODB: 1067 /** EnableRectSiteLogo */ }) ||
                (props.chromeOptions
                    ? !props.chromeOptions.header.hideTitle
                    : !(props.siteHeaderProps.headerOptions && props.siteHeaderProps.headerOptions.hideTitle)),
            hasGroupInfo: !!props.siteHeaderProps.groupInfoString ||
                !!props.siteHeaderProps.siteClassification ||
                (pageContext.IBSegments && pageContext.IBSegments.length > 0) ||
                false,
            groupInfoByTitle: unifiedLayout === _ms_odsp_datasources_lib_ChromeOptions__WEBPACK_IMPORTED_MODULE_10__["UnifiedHeaderLayout"].standard,
            showFacepile: !!props.siteHeaderProps.facepile,
            showSearch: !!props.searchBox,
            hasActions: !!props.createSiteButton ||
                !!props.follow ||
                !!props.share ||
                !!props.languageSelector ||
                !!props.getLanguageSelections ||
                !!props.goToOutlookButton ||
                !!props.customActionElements,
            showNav: showNav,
            navIsInline: unifiedLayout !== _ms_odsp_datasources_lib_ChromeOptions__WEBPACK_IMPORTED_MODULE_10__["UnifiedHeaderLayout"].extended,
            // in compact+minimal, everything is on a single line
            textBelowTitle: unifiedLayout === _ms_odsp_datasources_lib_ChromeOptions__WEBPACK_IMPORTED_MODULE_10__["UnifiedHeaderLayout"].standard,
            isResponsiveMode: isResponsiveMode,
            showLeftNavToggleButton: showLeftNavToggleButton,
            showTopNav: showTopNav,
            logoAlignment: props.chromeOptions
                ? props.chromeOptions.header.logoAlignment
                : pageContext.logoAlignment,
            backgroundImageUrl: props.hasBackgroundPreview ? props.backgroundPreview : backgroundImageUrl,
            backgroundFocalPoint: props.backgroundFocalPoint ||
                pageContext.focalPoint ||
                DefaultBackgroundFocalPoint /** default position */,
            isHomePlusHub: UnifiedHeaderBase_1._isHomePlusHubScenario(pageContext)
        };
        /** Fix-up logic for self-dependencies */
        toReturn.hasLogo = toReturn.hasLogo && toReturn.showLogo;
        toReturn.hasAcronym = toReturn.hasAcronym && toReturn.showLogo;
        toReturn.navIsInline = toReturn.navIsInline && toReturn.showNav;
        // Generally group info is by the title in Standard (either below or adjacent), and not by the title in Compact or Minimal
        // (off to the right side instead). Exception is: Standard with nav with title hidden, then it goes on the right side.
        toReturn.groupInfoByTitle =
            toReturn.hasGroupInfo &&
                unifiedLayout === _ms_odsp_datasources_lib_ChromeOptions__WEBPACK_IMPORTED_MODULE_10__["UnifiedHeaderLayout"].standard &&
                !(toReturn.navIsInline && !toReturn.showTitle);
        toReturn.textBelowTitle = toReturn.textBelowTitle && (toReturn.showNav || toReturn.hasGroupInfo);
        // modify props for narrow rendering mode
        if (toReturn.isResponsiveMode) {
            toReturn.showFacepile = false;
            // nav stuff is handled above by showNav, also nav uses a different breakpoint
        }
        return toReturn;
    };
    /**
     * Check if current site is a home site and hub or not
     */
    UnifiedHeaderBase._isHomePlusHubScenario = function (pageContext) {
        return (pageContext &&
            pageContext.companyPortalReference &&
            pageContext.companyPortalReference.SiteId &&
            pageContext.siteId.indexOf(pageContext.companyPortalReference.SiteId) >= 0 &&
            pageContext.isHubSite);
    };
    UnifiedHeaderBase = UnifiedHeaderBase_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        office_ui_fabric_react_lib_utilities_decorators_withResponsiveMode__WEBPACK_IMPORTED_MODULE_15__["withResponsiveMode"],
        Object(office_ui_fabric_react_lib_Utilities__WEBPACK_IMPORTED_MODULE_18__["customizable"])('UnifiedHeader', [
            'theme',
            'headerEmphasisTheme',
            'chromeOptions',
            'logoPreview',
            'hasLogoPreview',
            'backgroundPreview',
            'hasBackgroundPreview',
            'backgroundFocalPoint'
        ])
    ], UnifiedHeaderBase);
    return UnifiedHeaderBase;
}(react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]));

//# sourceMappingURL=UnifiedHeader.base.js.map

/***/ }),

/***/ "Igag":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-shared-react@47.12.13_d89e40c38ccaa8bd6af6488f37cb196d/node_modules/@ms/odsp-shared-react/lib/components/MembersInfo/MembersInfo.scss.js ***!
  \*********************************************************************************************************************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _microsoft_load_themed_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/load-themed-styles */ "jOlS");
/* harmony import */ var _microsoft_load_themed_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_load_themed_styles__WEBPACK_IMPORTED_MODULE_0__);
/* tslint:disable */

Object(_microsoft_load_themed_styles__WEBPACK_IMPORTED_MODULE_0__["loadStyles"])([{ "rawString": ".ms-membersInfo-infoArea{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.ms-membersInfo-membersNumber{white-space:nowrap}[dir='ltr'] .ms-membersInfo-membersNumber{padding-left:5px}[dir='rtl'] .ms-membersInfo-membersNumber{padding-right:5px}.ms-membersInfo-membersNumber--buttonEmulate{padding:0px 8px}\n" }]);
//# sourceMappingURL=MembersInfo.scss.js.map

/***/ }),

/***/ "Ikqg":
/*!************************************************************************************************************!*\
  !*** /agent/_work/1/s/libraries/sp-component-utilities/lib/navigationUtilities/NavigationNodeUtilities.js ***!
  \************************************************************************************************************/
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

/***/ "Iqpv":
/*!*************************************!*\
  !*** ./lib/loaders/spcx-teamify.js ***!
  \*************************************/
/*! exports provided: DeferredTeamifyBanner, teamifyBannerLoader, DeferredNavLinkCoachmark, navLinkCoachmarkLoader, loadTeamsProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeferredTeamifyBanner", function() { return DeferredTeamifyBanner; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "teamifyBannerLoader", function() { return teamifyBannerLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeferredNavLinkCoachmark", function() { return DeferredNavLinkCoachmark; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "navLinkCoachmarkLoader", function() { return navLinkCoachmarkLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadTeamsProvider", function() { return loadTeamsProvider; });
/* harmony import */ var _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ms/odsp-utilities-bundle */ "y88i");
/* harmony import */ var _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_Deferred__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/Deferred */ "Z/CY");
/* harmony import */ var _loaders_spcx_groupsProvider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../loaders/spcx-groupsProvider */ "+IOR");



// tslint:disable-next-line:variable-name
var DeferredTeamifyBanner = _common_Deferred__WEBPACK_IMPORTED_MODULE_1__["default"];
// tslint:disable-next-line:export-name
function teamifyBannerLoader() {
    return Promise.all(/*! import() | spcx-teamify */[__webpack_require__.e(0), __webpack_require__.e(3), __webpack_require__.e(4), __webpack_require__.e("vendors~editnavchunk~spcx-panels~spcx-syn~6ba97101"), __webpack_require__.e(6), __webpack_require__.e("vendors~editnavchunk~sp-pages-panels~spcx~63fbeced"), __webpack_require__.e("vendors~odsp-datasources~sp-pages-panels~~65b5f32e"), __webpack_require__.e("vendors~odsp-datasources~spcx-panels~spcx-teamify"), __webpack_require__.e("vendors~shared-react-splivepersonacard~sp~896e3b47"), __webpack_require__.e("vendors~shared-react-site-header-title-co~f08d326e"), __webpack_require__.e("vendors~spcx-teamify")]).then(__webpack_require__.bind(null, /*! @ms/odsp-shared-react/lib/TeamifyBanner */ "TYvE")).then(function (teamifyBannerModule) { return teamifyBannerModule.TeamifyBanner; });
}
// tslint:disable-next-line:variable-name
var DeferredNavLinkCoachmark = _common_Deferred__WEBPACK_IMPORTED_MODULE_1__["default"];
// tslint:disable-next-line:export-name
function navLinkCoachmarkLoader() {
    return Promise.all(/*! import() | spcx-teamify */[__webpack_require__.e(0), __webpack_require__.e(3), __webpack_require__.e(4), __webpack_require__.e("vendors~editnavchunk~spcx-panels~spcx-syn~6ba97101"), __webpack_require__.e(6), __webpack_require__.e("vendors~editnavchunk~sp-pages-panels~spcx~63fbeced"), __webpack_require__.e("vendors~odsp-datasources~sp-pages-panels~~65b5f32e"), __webpack_require__.e("vendors~odsp-datasources~spcx-panels~spcx-teamify"), __webpack_require__.e("vendors~shared-react-splivepersonacard~sp~896e3b47"), __webpack_require__.e("vendors~shared-react-site-header-title-co~f08d326e"), __webpack_require__.e("vendors~spcx-teamify")]).then(__webpack_require__.bind(null, /*! @ms/odsp-shared-react/lib/utilities/nav/NavLinkCoachmark */ "qieP")).then(function (navLinkCoachmarkModule) { return navLinkCoachmarkModule.NavLinkCoachmark; });
}
/**
 * Loads TeamsProvider and its dependencies.
 */
function loadTeamsProvider(pageContext) {
    return _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_0__["Promise"].all({
        teamsProviderModule: Promise.all(/*! import() | spcx-teamify */[__webpack_require__.e(0), __webpack_require__.e(3), __webpack_require__.e(4), __webpack_require__.e("vendors~editnavchunk~spcx-panels~spcx-syn~6ba97101"), __webpack_require__.e(6), __webpack_require__.e("vendors~editnavchunk~sp-pages-panels~spcx~63fbeced"), __webpack_require__.e("vendors~odsp-datasources~sp-pages-panels~~65b5f32e"), __webpack_require__.e("vendors~odsp-datasources~spcx-panels~spcx-teamify"), __webpack_require__.e("vendors~shared-react-splivepersonacard~sp~896e3b47"), __webpack_require__.e("vendors~shared-react-site-header-title-co~f08d326e"), __webpack_require__.e("vendors~spcx-teamify")]).then(__webpack_require__.bind(null, /*! @ms/odsp-datasources/lib/providers/teams/TeamsProvider */ "cbdt")),
        groupsProvider: _loaders_spcx_groupsProvider__WEBPACK_IMPORTED_MODULE_2__["GroupsProviderFactory"].GetGroupsProvider(pageContext),
        graphUserInfoDS: getGraphUserInfoDSInstance(pageContext),
        userInfoDSModule: Promise.all(/*! import() | spcx-teamify */[__webpack_require__.e(0), __webpack_require__.e(3), __webpack_require__.e(4), __webpack_require__.e("vendors~editnavchunk~spcx-panels~spcx-syn~6ba97101"), __webpack_require__.e(6), __webpack_require__.e("vendors~editnavchunk~sp-pages-panels~spcx~63fbeced"), __webpack_require__.e("vendors~odsp-datasources~sp-pages-panels~~65b5f32e"), __webpack_require__.e("vendors~odsp-datasources~spcx-panels~spcx-teamify"), __webpack_require__.e("vendors~shared-react-splivepersonacard~sp~896e3b47"), __webpack_require__.e("vendors~shared-react-site-header-title-co~f08d326e"), __webpack_require__.e("vendors~spcx-teamify")]).then(__webpack_require__.bind(null, /*! @ms/odsp-datasources/lib/UserInfo */ "OH2p"))
    }).then(function (_a) {
        var teamsProviderModule = _a.teamsProviderModule, groupsProvider = _a.groupsProvider, graphUserInfoDS = _a.graphUserInfoDS, userInfoDSModule = _a.userInfoDSModule;
        return new teamsProviderModule.TeamsProvider({}, {
            pageContext: pageContext,
            groupsProvider: groupsProvider,
            graphUserInfoDataSource: graphUserInfoDS,
            userInfoDataSource: new userInfoDSModule.UserInfoDataSource({}, { pageContext: pageContext })
        });
    });
}
var graphUserInfoPromise;
var graphUserInfoForWeb;
function getGraphUserInfoDSInstance(pageContext) {
    // Cache the instance only for the current web+site to be safe
    var newGraphUserInfoForWeb = (pageContext.webId ? pageContext.webId : '') + (pageContext.siteId ? pageContext.siteId : '');
    if (graphUserInfoForWeb !== newGraphUserInfoForWeb) {
        graphUserInfoForWeb = newGraphUserInfoForWeb;
        graphUserInfoPromise = _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_0__["Promise"].all({
            graphUserInfoDSModule: Promise.all(/*! import() | spcx-teamify */[__webpack_require__.e(0), __webpack_require__.e(3), __webpack_require__.e(4), __webpack_require__.e("vendors~editnavchunk~spcx-panels~spcx-syn~6ba97101"), __webpack_require__.e(6), __webpack_require__.e("vendors~editnavchunk~sp-pages-panels~spcx~63fbeced"), __webpack_require__.e("vendors~odsp-datasources~sp-pages-panels~~65b5f32e"), __webpack_require__.e("vendors~odsp-datasources~spcx-panels~spcx-teamify"), __webpack_require__.e("vendors~shared-react-splivepersonacard~sp~896e3b47"), __webpack_require__.e("vendors~shared-react-site-header-title-co~f08d326e"), __webpack_require__.e("vendors~spcx-teamify")]).then(__webpack_require__.bind(null, /*! @ms/odsp-datasources/lib/GraphUserInfo */ "v2H1")),
            oAuthTokenDSModule: Promise.all(/*! import() | spcx-teamify */[__webpack_require__.e(0), __webpack_require__.e(3), __webpack_require__.e(4), __webpack_require__.e("vendors~editnavchunk~spcx-panels~spcx-syn~6ba97101"), __webpack_require__.e(6), __webpack_require__.e("vendors~editnavchunk~sp-pages-panels~spcx~63fbeced"), __webpack_require__.e("vendors~odsp-datasources~sp-pages-panels~~65b5f32e"), __webpack_require__.e("vendors~odsp-datasources~spcx-panels~spcx-teamify"), __webpack_require__.e("vendors~shared-react-splivepersonacard~sp~896e3b47"), __webpack_require__.e("vendors~shared-react-site-header-title-co~f08d326e"), __webpack_require__.e("vendors~spcx-teamify")]).then(__webpack_require__.bind(null, /*! @ms/odsp-datasources/lib/dataSources/oAuthToken/OAuthTokenDataSource */ "OyVb")),
            oAuthTokenProviderModule: Promise.all(/*! import() | spcx-teamify */[__webpack_require__.e(0), __webpack_require__.e(3), __webpack_require__.e(4), __webpack_require__.e("vendors~editnavchunk~spcx-panels~spcx-syn~6ba97101"), __webpack_require__.e(6), __webpack_require__.e("vendors~editnavchunk~sp-pages-panels~spcx~63fbeced"), __webpack_require__.e("vendors~odsp-datasources~sp-pages-panels~~65b5f32e"), __webpack_require__.e("vendors~odsp-datasources~spcx-panels~spcx-teamify"), __webpack_require__.e("vendors~shared-react-splivepersonacard~sp~896e3b47"), __webpack_require__.e("vendors~shared-react-site-header-title-co~f08d326e"), __webpack_require__.e("vendors~spcx-teamify")]).then(__webpack_require__.bind(null, /*! @ms/odsp-datasources/lib/providers/oAuthToken/OAuthTokenProvider */ "7OYH"))
        }).then(function (_a) {
            var graphUserInfoDSModule = _a.graphUserInfoDSModule, oAuthTokenDSModule = _a.oAuthTokenDSModule, oAuthTokenProviderModule = _a.oAuthTokenProviderModule;
            return new graphUserInfoDSModule.GraphUserInfoDataSource({}, {
                pageContext: pageContext,
                oAuthTokenProvider: new oAuthTokenProviderModule.default({}, {
                    oAuthTokenDataSource: new oAuthTokenDSModule.default(pageContext)
                })
            });
        });
    }
    return graphUserInfoPromise;
}


/***/ }),

/***/ "J0LD":
/*!*******************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-shared-react@47.12.13_d89e40c38ccaa8bd6af6488f37cb196d/node_modules/@ms/odsp-shared-react/lib/HorizontalNav.js ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: HorizontalNav, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_HorizontalNav_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/HorizontalNav/index */ "GWkq");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HorizontalNav", function() { return _components_HorizontalNav_index__WEBPACK_IMPORTED_MODULE_0__["HorizontalNav"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _components_HorizontalNav_index__WEBPACK_IMPORTED_MODULE_0__["HorizontalNav"]; });



//# sourceMappingURL=HorizontalNav.js.map

/***/ }),

/***/ "K5yv":
/*!****************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/utilities-crypto@1.0.0/node_modules/@ms/utilities-crypto/lib/CryptoErrors.js ***!
  \****************************************************************************************************************************************/
/*! exports provided: CryptoErrors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CryptoErrors", function() { return CryptoErrors; });
var CryptoErrors = {
    secretError: 'wrong secret or signature.',
    unsupportedError: 'Crypto operations not supported.',
    deserializationError: 'Data serialization/deserialization error.'
};
//# sourceMappingURL=CryptoErrors.js.map

/***/ }),

/***/ "K9kD":
/*!***************************************!*\
  !*** external "@ms/odsp-core-bundle" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_K9kD__;

/***/ }),

/***/ "KGa+":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-shared-react@47.12.13_d89e40c38ccaa8bd6af6488f37cb196d/node_modules/@ms/odsp-shared-react/lib/components/MembersInfo/MembersInfo.js ***!
  \****************************************************************************************************************************************************************************************************/
/*! exports provided: MembersInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MembersInfo", function() { return MembersInfo; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _MembersInfo_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MembersInfo.scss */ "Igag");
/* harmony import */ var office_ui_fabric_react_lib_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! office-ui-fabric-react/lib/Button */ "epn0");
/* harmony import */ var office_ui_fabric_react_lib_Utilities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! office-ui-fabric-react/lib/Utilities */ "mkpW");
/* harmony import */ var office_ui_fabric_react_lib_Icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! office-ui-fabric-react/lib/Icon */ "56LG");
/* harmony import */ var office_ui_fabric_react_lib_Icon__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(office_ui_fabric_react_lib_Icon__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ms_odsp_utilities_lib_string_StringHelper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ms/odsp-utilities/lib/string/StringHelper */ "BY+f");
/* harmony import */ var _ms_odsp_utilities_lib_string_StringHelper__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_ms_odsp_utilities_lib_string_StringHelper__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _MembersInfo_resx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./MembersInfo.resx */ "qx+S");
/* harmony import */ var _MembersInfo_resx__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_MembersInfo_resx__WEBPACK_IMPORTED_MODULE_7__);








/**
 * Member Info control
 * @public
 */
var MembersInfo = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(MembersInfo, _super);
    function MembersInfo(props) {
        var _this = _super.call(this, props) || this;
        _this._onGoToMembersClick = function (ev) {
            if (_this.props.goToMembersAction) {
                _this.props.goToMembersAction(ev);
                ev.stopPropagation();
                ev.preventDefault();
            }
        };
        return _this;
    }
    MembersInfo.prototype.shouldComponentUpdate = function (nextProps, nextState) {
        return this.props.membersText !== nextProps.membersText;
    };
    MembersInfo.prototype.render = function () {
        var _a = this.props, membersText = _a.membersText, goToMembersAction = _a.goToMembersAction, lpcMembershipManagementCard = _a.lpcMembershipManagementCard;
        var personIcon = react__WEBPACK_IMPORTED_MODULE_1__["createElement"](office_ui_fabric_react_lib_Icon__WEBPACK_IMPORTED_MODULE_5__["Icon"], { iconName: 'Contact' });
        var membersCount = (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", { className: 'ms-membersInfo-membersNumber ms-font-m', "data-automationid": 'NumberOfMembersText' }, membersText));
        var membersCountButtonAriaLabel = _ms_odsp_utilities_lib_string_StringHelper__WEBPACK_IMPORTED_MODULE_6__["format"](_MembersInfo_resx__WEBPACK_IMPORTED_MODULE_7___default.a.membersCountButtonAriaLabelFormat, membersText);
        var membersCountButton;
        if (goToMembersAction) {
            membersCountButton = (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](office_ui_fabric_react_lib_Button__WEBPACK_IMPORTED_MODULE_3__["ActionButton"], { onClick: this._onGoToMembersClick, "data-automationid": 'MemberCountButton', "aria-label": membersCountButtonAriaLabel },
                personIcon,
                membersCount));
        }
        else {
            membersCountButton = (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", { className: 'ms-membersInfo-membersNumber--buttonEmulate' },
                personIcon,
                membersCount));
        }
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: 'ms-membersInfo-infoArea' }, lpcMembershipManagementCard ? lpcMembershipManagementCard : membersCountButton));
    };
    return MembersInfo;
}(office_ui_fabric_react_lib_Utilities__WEBPACK_IMPORTED_MODULE_4__["BaseComponent"]));

//# sourceMappingURL=MembersInfo.js.map

/***/ }),

/***/ "KL1q":
/*!***********************************************************!*\
  !*** external "@microsoft/office-ui-fabric-react-bundle" ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_KL1q__;

/***/ }),

/***/ "KosM":
/*!************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-datasources@45.13.10_e509c819ab980023b76e5746ec0fc9e2/node_modules/@ms/odsp-datasources/lib/providers/theming/FluentFeatures.js ***!
  \************************************************************************************************************************************************************************************************/
/*! exports provided: isOdb, isOdc, isOneDrive, EnableFluentStylingODC, EnableFluentStyling, isFluentActiveOD */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isOdb", function() { return isOdb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isOdc", function() { return isOdc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isOneDrive", function() { return isOneDrive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnableFluentStylingODC", function() { return EnableFluentStylingODC; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnableFluentStyling", function() { return EnableFluentStyling; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFluentActiveOD", function() { return isFluentActiveOD; });
/* harmony import */ var _ms_odsp_utilities_lib_features_Features__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ms/odsp-utilities/lib/features/Features */ "8G1T");
/* harmony import */ var _dataSources_listCollection_ListTemplateType__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../dataSources/listCollection/ListTemplateType */ "HyBu");


var isOdb = window['_spPageContextInfo'] &&
    window['_spPageContextInfo'].listBaseTemplate ===
        _dataSources_listCollection_ListTemplateType__WEBPACK_IMPORTED_MODULE_1__["default"].mySiteDocumentLibrary;
var isOdc = !!window['FilesConfig'];
var isOneDrive = isOdb || isOdc;
// ODC Features
var EnableFluentStylingODC = { ODC: 'EnableFluentStylingODC' }; // For ODC
// ODB Features
var EnableFluentStyling = { ODB: isOneDrive ? true : -1118 }; // For ODB
var isFluentActiveOD = _ms_odsp_utilities_lib_features_Features__WEBPACK_IMPORTED_MODULE_0__["default"].isFeatureEnabled(EnableFluentStyling) || _ms_odsp_utilities_lib_features_Features__WEBPACK_IMPORTED_MODULE_0__["default"].isFeatureEnabled(EnableFluentStylingODC);
//# sourceMappingURL=FluentFeatures.js.map

/***/ }),

/***/ "M66I":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-datasources@45.13.10_e509c819ab980023b76e5746ec0fc9e2/node_modules/@ms/odsp-datasources/lib/dataSources/base/RequestCache.js ***!
  \*********************************************************************************************************************************************************************************************/
/*! exports provided: RequestCache, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestCache", function() { return RequestCache; });
/* harmony import */ var _ms_odsp_utilities_lib_async_Promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ms/odsp-utilities/lib/async/Promise */ "7Ihg");
/* harmony import */ var _ms_odsp_utilities_lib_models_store_BaseDataStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ms/odsp-utilities/lib/models/store/BaseDataStore */ "18dJ");
/* harmony import */ var _ms_odsp_utilities_lib_models_store_DataStoreCachingType__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ms/odsp-utilities/lib/models/store/DataStoreCachingType */ "EjJ3");
/* harmony import */ var _IRequestCache__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./IRequestCache */ "9n2P");




/**
 * This is @deprecated, you should use PersistentRequestCache
 *
 * A special version of the base DataSource that comes with a built-in cache.
 *
 * Cache operates in a similar fashion to  sp-home 'oil.ds' and should be compatible if given
 * the same prefix.
 */
var RequestCache = /** @class */ (function () {
    /**
     * @param params The configuration params specific to the given cache.
     * @param dependencies Dependencies expected to be shared across all cache instances.
     */
    function RequestCache(params, dependencies) {
        var id = params.id, _a = params.cacheType, cacheType = _a === void 0 ? _ms_odsp_utilities_lib_models_store_DataStoreCachingType__WEBPACK_IMPORTED_MODULE_2__["default"].session : _a;
        var _b = dependencies.cacheIdPrefix, cacheIdPrefix = _b === void 0 ? _IRequestCache__WEBPACK_IMPORTED_MODULE_3__["DEFAULT_CACHE_ID_PREFIX"] : _b, pageContext = dependencies.pageContext;
        this._id = id;
        this._version = pageContext ? pageContext.siteClientTag + '_' + pageContext.userDisplayName : '';
        this._store = new _ms_odsp_utilities_lib_models_store_BaseDataStore__WEBPACK_IMPORTED_MODULE_1__["default"](cacheIdPrefix, cacheType);
        this._storeDefaultCacheType = cacheType;
        this._initCache();
    }
    /**
     * A special version of getData that will utilize the cache. This takes in mostly the same
     * parameters as DataSource.getData, with extra caching-related parameters from
     * ICachedRequestOptions (see RequestCache.ts).
     *
     * @see DataSource.getData
     * @see ICachedRequestOptions
     */
    RequestCache.prototype.getDataUtilizingCache = function (_a) {
        var _this = this;
        var cacheRequestKey = _a.cacheRequestKey, _b = _a.useStale, useStale = _b === void 0 ? false : _b, _c = _a.bypassCache, bypassCache = _c === void 0 ? false : _c, _d = _a.onlyCache, onlyCache = _d === void 0 ? false : _d, checkForInvalidation = _a.checkForInvalidation, setInvalidated = _a.setInvalidated, getData = _a.getData, _e = _a.cacheTimeoutTime, cacheTimeoutTime = _e === void 0 ? _IRequestCache__WEBPACK_IMPORTED_MODULE_3__["DEFAULT_CACHE_TIMEOUT_TIME"] : _e, _f = _a.returnStatistics, returnStatistics = _f === void 0 ? false : _f;
        var cache = this._cache;
        var cacheItem = cache[cacheRequestKey];
        var getResult = function () {
            return returnStatistics
                ? {
                    data: cacheItem._value,
                    cacheStats: {
                        lastModified: NaN,
                        lastRead: cacheItem._fetched,
                        reads: NaN
                    }
                }
                : cacheItem._value;
        };
        if (onlyCache) {
            if (cacheItem) {
                return _ms_odsp_utilities_lib_async_Promise__WEBPACK_IMPORTED_MODULE_0__["default"].resolve(getResult());
            }
            else {
                return _ms_odsp_utilities_lib_async_Promise__WEBPACK_IMPORTED_MODULE_0__["default"].resolve(undefined);
            }
        }
        // Cache invalidation via localStorage isn't relevant if we're bypassing the cache, or if
        // we're already using localStorage as the default cache storage. (Also, with the current
        // implementation, the invalidation timestamp is stored under the same key as the fetched
        // data, so putting both in localStorage wouldn't work.)
        checkForInvalidation =
            checkForInvalidation && !bypassCache && this._storeDefaultCacheType !== _ms_odsp_utilities_lib_models_store_DataStoreCachingType__WEBPACK_IMPORTED_MODULE_2__["default"].local;
        var stale = cacheItem && this._isCacheExpired(cacheItem, cacheRequestKey, checkForInvalidation, cacheTimeoutTime);
        var shouldFetch = bypassCache || !cacheItem || (stale && !useStale);
        if (shouldFetch) {
            return getData().then(function (value) {
                var fetched = new Date().valueOf();
                cache[cacheRequestKey] = {
                    _fetched: fetched,
                    _value: value
                };
                if (setInvalidated) {
                    // Mark that other tabs' sessionStorage copies of this data are invalidated.
                    // (Subtract 1 from the timestamp to protect the data we just cached above
                    // from accidentally being considered expired by future code.)
                    _this._store.setValue(cacheRequestKey, fetched - 1, _ms_odsp_utilities_lib_models_store_DataStoreCachingType__WEBPACK_IMPORTED_MODULE_2__["default"].local);
                }
                _this._updateCache();
                return returnStatistics
                    ? {
                        data: value,
                        cacheStats: {
                            lastModified: NaN,
                            lastRead: fetched,
                            reads: NaN
                        }
                    }
                    : value;
            });
        }
        else {
            return _ms_odsp_utilities_lib_async_Promise__WEBPACK_IMPORTED_MODULE_0__["default"].resolve(getResult());
        }
    };
    /**
     * Serializes a key for the request. Override this method to use your own serialization
     * or naming scheme.
     */
    RequestCache.prototype.getRequestKey = function (url, method, additionalPostData) {
        var keyParts = [];
        keyParts.push(url);
        keyParts.push(method);
        if (additionalPostData) {
            keyParts.push(additionalPostData.toString());
        }
        return keyParts.join(',');
    };
    /**
     * Returns true if all of the following are satisfied:
     * - Cache entry for this key exists
     * - localStorage entry with an invalidation timestamp for this key exists
     * - the invalidation timestamp is newer than the cache entry time
     *
     * @param cacheRequestKey Key to check
     */
    RequestCache.prototype.isCachedDataInvalidated = function (cacheRequestKey) {
        var cacheItem = this._cache[cacheRequestKey];
        return this._isCachedDataInvalidated(cacheItem, cacheRequestKey);
    };
    Object.defineProperty(RequestCache.prototype, "cacheId", {
        /**
         * Name for session/local storage entry storing the data for this cache.
         */
        get: function () {
            return this._id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RequestCache.prototype, "cacheVersionId", {
        /**
         * Name for session/local storage entry storing the version number/partition for this cache.
         */
        get: function () {
            return this._id + '-version';
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Flushes the cache entry with the specified cache request key.
     * If no key is specified, flushes the whole cache.
     */
    RequestCache.prototype.flushCache = function (cacheRequestKey) {
        if (cacheRequestKey) {
            delete this._cache[cacheRequestKey];
            this._updateCache();
        }
        else {
            this._clearCache();
        }
    };
    /**
     * Initializes and loads the cache. If the cache is no longer valid, flush the cache first.
     */
    RequestCache.prototype._initCache = function () {
        if (this._version !== this._store.getValue(this.cacheVersionId, undefined, false)) {
            this._clearCache();
            // update the version
            this._store.setValue(this.cacheVersionId, this._version, undefined, false);
        }
        else {
            this._cache = this._store.getValue(this.cacheId, undefined, false) || {};
        }
    };
    /**
     * Save to session/local storage the state of the in-memory cache.
     */
    RequestCache.prototype._updateCache = function () {
        this._store.setValue(this.cacheId, this._cache, undefined, false);
    };
    /**
     * Clear/flush the cache.
     */
    RequestCache.prototype._clearCache = function () {
        this._cache = {};
        this._updateCache();
    };
    /**
     * Given a cache item, indicates whether the cache is expired.
     */
    RequestCache.prototype._isCacheExpired = function (cacheItem, cacheRequestKey, checkForInvalidation, cacheTimeoutTime) {
        if (checkForInvalidation && this._isCachedDataInvalidated(cacheItem, cacheRequestKey)) {
            return true;
        }
        var refreshThreshold = new Date().valueOf() - cacheTimeoutTime;
        return cacheItem._fetched <= refreshThreshold;
    };
    RequestCache.prototype._isCachedDataInvalidated = function (cacheItem, cacheRequestKey) {
        // The value of cacheRequestKey in local storage tells the last time that the data
        // for this key was invalidated. If our data isn't generally expired, but it's older
        // than the last invalidation time, we should consider it expired.
        var lastInvalidated = Number(this._store.getValue(cacheRequestKey, _ms_odsp_utilities_lib_models_store_DataStoreCachingType__WEBPACK_IMPORTED_MODULE_2__["default"].local));
        return !!(cacheItem && lastInvalidated && cacheItem._fetched < lastInvalidated);
    };
    return RequestCache;
}());

/* harmony default export */ __webpack_exports__["default"] = (RequestCache);
//# sourceMappingURL=RequestCache.js.map

/***/ }),

/***/ "MFpg":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-shared-react@47.12.13_d89e40c38ccaa8bd6af6488f37cb196d/node_modules/@ms/odsp-shared-react/lib/common/telemetry/NavigationSource.js ***!
  \***************************************************************************************************************************************************************************************************/
/*! exports provided: NavigationSource, getNavComponentLabel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationSource", function() { return NavigationSource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNavComponentLabel", function() { return getNavComponentLabel; });
/**
 * An enum for types of components that can host navigation links. Intended for telemetry.
 */
var NavigationSource;
(function (NavigationSource) {
    NavigationSource[NavigationSource["Unknown"] = 0] = "Unknown";
    NavigationSource[NavigationSource["CompositeHeader"] = 1] = "CompositeHeader";
    NavigationSource[NavigationSource["HubNav"] = 2] = "HubNav";
    NavigationSource[NavigationSource["Footer"] = 3] = "Footer";
})(NavigationSource || (NavigationSource = {}));
/**
 * Create a label for a specified navigation source to be used when logging telemetry.
 * @param source The navigation component
 */
function getNavComponentLabel(source) {
    switch (source) {
        case NavigationSource.CompositeHeader:
            return 'SiteHeader';
        case NavigationSource.HubNav:
            return 'HubNav';
        case NavigationSource.Footer:
            return 'SiteFooter';
        default:
            return 'UnknownSource';
    }
}
//# sourceMappingURL=NavigationSource.js.map

/***/ }),

/***/ "MLtZ":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-datasources@45.13.10_e509c819ab980023b76e5746ec0fc9e2/node_modules/@ms/odsp-datasources/lib/dataSources/base/PersistentRequestCache.js ***!
  \*******************************************************************************************************************************************************************************************************/
/*! exports provided: PersistentRequestCache */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersistentRequestCache", function() { return PersistentRequestCache; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ms_odsp_utilities_lib_async_Promise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ms/odsp-utilities/lib/async/Promise */ "7Ihg");
/* harmony import */ var _ms_odsp_utilities_lib_killswitch_Killswitch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ms/odsp-utilities/lib/killswitch/Killswitch */ "QUgr");
/* harmony import */ var _ms_persistent_cache_lib_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ms/persistent-cache/lib/index */ "uFJw");
/* harmony import */ var _ms_odsp_utilities_lib_logging_events_Qos_event__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ms/odsp-utilities/lib/logging/events/Qos.event */ "c09w");
/* harmony import */ var _IRequestCache__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./IRequestCache */ "9n2P");






/**
 * A special version of the base DataSource that comes with a built-in cache.
 *
 * Cache operates in a similar fashion to  sp-home 'oil.ds' and should be compatible if given
 * the same prefix.
 */
var PersistentRequestCache = /** @class */ (function () {
    /**
     * @param params The configuration params specific to the given cache.
     * @param dependencies Dependencies expected to be shared across all cache instances.
     */
    function PersistentRequestCache(params, dependencies) {
        /** The get data request promise caches. */
        this._getDataPromises = {};
        var id = params.id, dataSourceName = params.dataSourceName, _a = params.cacheType, cacheType = _a === void 0 ? 1 /* indexedDB */ : _a;
        var pageContext = dependencies.pageContext;
        var aadUserId = (pageContext || {}).aadUserId;
        this._id = id;
        this._userId = aadUserId;
        var qosName = dataSourceName || id;
        var loggingOverride = function (data) {
            if (data.name && qosName && !data.name.startsWith(qosName)) {
                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, data), { name: qosName + "." + data.name });
            }
            return data;
        };
        var cacheQos = _ms_odsp_utilities_lib_logging_events_Qos_event__WEBPACK_IMPORTED_MODULE_4__["Qos"].withData(loggingOverride);
        this._cache = new _ms_persistent_cache_lib_index__WEBPACK_IMPORTED_MODULE_3__["PersistentCache"]({
            cacheType: cacheType,
            telemetry: {
                qos: cacheQos
            }
        });
    }
    /**
     * A special version of getData that will utilize the cache. This takes in mostly the same
     * parameters as DataSource.getData, with extra caching-related parameters from
     * ICachedRequestOptions (see RequestCache.ts).
     *
     * @see DataSource.getData
     * @see ICachedRequestOptions
     */
    PersistentRequestCache.prototype.getDataUtilizingCache = function (options) {
        var _this = this;
        var cacheRequestKey = options.cacheRequestKey, _a = options.cachingStrategy, cachingStrategy = _a === void 0 ? 0 /* useCacheAndUpdateInTheBackground */ : _a, _b = options.cacheTimeoutTime, cacheTimeoutTime = _b === void 0 ? _IRequestCache__WEBPACK_IMPORTED_MODULE_5__["DEFAULT_PERSISTENT_CACHE_TIMEOUT_TIME"] : _b, // when the cache entry is older than this value, it needs refresh
        getData = options.getData, _c = options.returnStatistics, returnStatistics = _c === void 0 ? false : _c;
        var persistentCacheKey = {
            key: cacheRequestKey,
            user: this._userId
        };
        var getDataAndUpdateCache = function () {
            if (!isCacheRequestAtInstanceLevelKillSwitchActivated() && !_this._getDataPromises[cacheRequestKey]) {
                // Cache the ongoing get data request promise at instance level because the indexedDB level is not available yet.
                // So if the method is called again, return the same promise to avoid double requests.
                // After the request completes, remove ongoing promise from instance level cache.
                // The indexedDB level cache is established, the following call will leverage that.
                _this._getDataPromises[cacheRequestKey] = getData().then(function (value) {
                    delete _this._getDataPromises[cacheRequestKey];
                    return value;
                });
            }
            return (isCacheRequestAtInstanceLevelKillSwitchActivated()
                ? getData()
                : _this._getDataPromises[cacheRequestKey]).then(function (value) {
                _this._cache.update(persistentCacheKey, value);
                return returnStatistics
                    ? {
                        data: value,
                        cacheStats: {
                            lastModified: NaN,
                            lastRead: Date.now(),
                            reads: 1
                        }
                    }
                    : value;
            });
        };
        // Treating onlyCache uniquely to ensure a network call is never made
        // If there is an exception reading the cache, or it is empty, return null
        // on KS removal, remove CachingStrategy,onlyCache in switch below
        if (!isOnlyCacheChangesKillSwitchActivated() && cachingStrategy === 2 /* onlyCache */) {
            return _ms_odsp_utilities_lib_async_Promise__WEBPACK_IMPORTED_MODULE_1__["default"].resolve(this._cache.read(persistentCacheKey))
                .then(function (result) {
                var data = result.data, cacheStats = result.cacheStats;
                if (data === null || data === undefined) {
                    return null;
                }
                return returnStatistics
                    ? {
                        data: data,
                        cacheStats: cacheStats
                    }
                    : data;
            })
                .catch(function () {
                return null;
            });
        }
        return _ms_odsp_utilities_lib_async_Promise__WEBPACK_IMPORTED_MODULE_1__["default"].resolve(this._cache.read(persistentCacheKey))
            .then(function (result) {
            var data = result.data, cacheStats = result.cacheStats;
            if (data === null || data === undefined) {
                return getDataAndUpdateCache();
            }
            var ret = returnStatistics
                ? {
                    data: data,
                    cacheStats: cacheStats
                }
                : data;
            var stale = _this._isCacheExpired(cacheStats.lastModified, cacheTimeoutTime);
            switch (cachingStrategy) {
                case 2 /* onlyCache */:
                    return ret;
                case 0 /* useCacheAndUpdateInTheBackground */:
                    if (stale) {
                        getDataAndUpdateCache();
                    }
                    return ret;
                case 1 /* useCacheIfNotExpired */:
                    if (stale) {
                        return getDataAndUpdateCache();
                    }
                    return ret;
                case 3 /* bypassCache */:
                default:
                    return getDataAndUpdateCache();
            }
        })
            .catch(function () {
            // If catch exception while reading PersistentCache, just try to fetch fresh data.
            return getDataAndUpdateCache();
        });
    };
    /**
     * Serializes a key for the request. Override this method to use your own serialization
     * or naming scheme.
     */
    PersistentRequestCache.prototype.getRequestKey = function (url, method, additionalPostData) {
        var keyParts = [];
        keyParts.push(url);
        keyParts.push(method);
        if (additionalPostData) {
            keyParts.push(additionalPostData.toString());
        }
        return keyParts.join(',');
    };
    Object.defineProperty(PersistentRequestCache.prototype, "cacheId", {
        /**
         * Name for session/local storage entry storing the data for this cache.
         */
        get: function () {
            return this._id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PersistentRequestCache.prototype, "cacheVersionId", {
        /**
         * Name for session/local storage entry storing the version number/partition for this cache.
         */
        get: function () {
            return this._id + '-version';
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Flushes the cache entry with the specified cache request key.
     */
    PersistentRequestCache.prototype.flushCache = function (cacheRequestKey) {
        var persistentCacheKey = {
            key: cacheRequestKey,
            user: this._userId
        };
        delete this._cache[cacheRequestKey];
        this._cache.remove(persistentCacheKey);
    };
    /**
     * Given a cache item, indicates whether the cache is expired.
     */
    PersistentRequestCache.prototype._isCacheExpired = function (lastModified, cacheTimeoutTime) {
        var refreshThreshold = new Date().valueOf() - cacheTimeoutTime;
        return lastModified <= refreshThreshold;
    };
    return PersistentRequestCache;
}());

function isCacheRequestAtInstanceLevelKillSwitchActivated() {
    return _ms_odsp_utilities_lib_killswitch_Killswitch__WEBPACK_IMPORTED_MODULE_2__["Killswitch"].isActivated('0b1fbce0-bb51-41da-a09b-8d1686398bb7'
    /* '2020-09-18', 'Cache ongoing getData request at instance level' */
    );
}
function isOnlyCacheChangesKillSwitchActivated() {
    return _ms_odsp_utilities_lib_killswitch_Killswitch__WEBPACK_IMPORTED_MODULE_2__["Killswitch"].isActivated('19cec8a5-4f79-4d4c-ae7e-f272ba265abb'
    /* '2020-09-28', 'No network calls for onlyCache' */
    );
}
//# sourceMappingURL=PersistentRequestCache.js.map

/***/ }),

/***/ "NMYH":
/*!****************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/FocusZone.js ***!
  \****************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/office-ui-fabric-react-bundle */ "KL1q");
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
// Loading office-ui-fabric-react/./lib/FocusZone.js


/***/ }),

/***/ "Ng1F":
/*!****************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/utilities-guid@1.0.0/node_modules/@ms/utilities-guid/lib/Guid.js ***!
  \****************************************************************************************************************************/
/*! exports provided: Empty, generate, normalizeLower, normalizeUpper, normalizeDashes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Empty", function() { return Empty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generate", function() { return generate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalizeLower", function() { return normalizeLower; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalizeUpper", function() { return normalizeUpper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalizeDashes", function() { return normalizeDashes; });
// tslint:disable:no-bitwise
function generateUuidPart(length) {
    var str = '';
    while (str.length < length) {
        var num = Math.random() * 16;
        num = num | 0; // clear decimal
        str += num.toString(16);
    }
    return str;
}
/**
 * @public
 */
var Empty = '00000000-0000-0000-0000-000000000000';
/**
 * Return a v4 UUID as specified by RFC 4122 http://tools.ietf.org/html/rfc4122
 *
 * @public
 */
function generate() {
    var parts = [];
    parts.push(generateUuidPart(8));
    parts.push(generateUuidPart(4));
    // first digit must be 4 since we are using pseudorandom numbers
    var timeHighAndVersion = '4' + generateUuidPart(3);
    parts.push(timeHighAndVersion);
    // first digit must have first two bits set to 10
    var clockSeqHiAndReserved = generateUuidPart(4);
    // ClockSeqHiAndReserved is a base-16 string.
    var intVal = parseInt(clockSeqHiAndReserved[0], 16);
    intVal = intVal & 3; // clear out first two bits
    intVal = intVal | 8; // set first bit to 1
    clockSeqHiAndReserved = intVal.toString(16) + clockSeqHiAndReserved.substr(1);
    parts.push(clockSeqHiAndReserved);
    parts.push(generateUuidPart(12));
    return parts.join('-');
}
/**
 * Normalizes a GUID to lowercase. Returns '' if guid is not given.
 * @param includeBrackets - if true, add or keep brackets; if false, strip brackets
 *
 * @public
 */
function normalizeLower(guid, includeBrackets) {
    if (includeBrackets === void 0) { includeBrackets = false; }
    return guid ? _normalizeBrackets(guid.toLowerCase(), includeBrackets) : '';
}
/**
 * Normalizes a GUID to uppercase. Returns '' if guid is not given.
 * @param includeBrackets - if true, add or keep brackets; if false, strip brackets
 *
 * @public
 */
function normalizeUpper(guid, includeBrackets) {
    if (includeBrackets === void 0) { includeBrackets = false; }
    return guid ? _normalizeBrackets(guid.toUpperCase(), includeBrackets) : '';
}
/**
 * Normalizes the dashes in a GUID. Returns '' if the input is null, undefined, or does not contain
 * 32 hexadecimal characters.
 * @param guid - The GUID
 * @param includeBrackets - if true, output will contain brackets; if false, output will not
 *
 * @public
 */
function normalizeDashes(guid, includeBrackets) {
    if (includeBrackets === void 0) { includeBrackets = false; }
    if (guid) {
        var parsed = guid.replace(/[^A-Fa-f0-9]/g, '');
        if (parsed.length === 32) {
            return _normalizeBrackets(parsed.slice(0, 8) + "-" + parsed.slice(8, 12) + "-" + parsed.slice(12, 16) + "-" + parsed.slice(16, 20) + "-" + parsed.slice(20), includeBrackets);
        }
    }
    return '';
}
function _normalizeBrackets(guid, includeBrackets) {
    var match = guid.match(/^\{(.*)\}$/);
    if (match) {
        return includeBrackets ? match[0] : match[1];
    }
    return includeBrackets ? '{' + guid + '}' : guid;
}
//# sourceMappingURL=Guid.js.map

/***/ }),

/***/ "NtRd":
/*!**************************************************!*\
  !*** ./lib/components/Teamify/TeamifyStrings.js ***!
  \**************************************************/
/*! exports provided: teamifyStrings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "teamifyStrings", function() { return teamifyStrings; });
/* harmony import */ var _TeamifyWizard_resx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TeamifyWizard.resx */ "milD");
var _TeamifyWizard_resx__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./TeamifyWizard.resx */ "milD", 1);

/**
 * @public
 */
var teamifyStrings = _TeamifyWizard_resx__WEBPACK_IMPORTED_MODULE_0___namespace;


/***/ }),

/***/ "NuUw":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-datasources@45.13.10_e509c819ab980023b76e5746ec0fc9e2/node_modules/@ms/odsp-datasources/lib/dataSources/editNav/ViewNavDataSource.js ***!
  \*****************************************************************************************************************************************************************************************************/
/*! exports provided: ViewNavDataSource, isRefineAudienceTargetKillSwitchActivated, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewNavDataSource", function() { return ViewNavDataSource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isRefineAudienceTargetKillSwitchActivated", function() { return isRefineAudienceTargetKillSwitchActivated; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ms_odsp_utilities_lib_killswitch_Killswitch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ms/odsp-utilities/lib/killswitch/Killswitch */ "QUgr");
/* harmony import */ var _base_CachedDataSource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base/CachedDataSource */ "zpEg");
/* harmony import */ var _ms_odsp_utilities_lib_features_Features__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ms/odsp-utilities/lib/features/Features */ "8G1T");
/* harmony import */ var _ms_odsp_utilities_lib_uri_Uri__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ms/odsp-utilities/lib/uri/Uri */ "I5DX");
/* harmony import */ var _audienceTargeting_AudiencesDataSource__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../audienceTargeting/AudiencesDataSource */ "Q+fs");
/* harmony import */ var _ms_odsp_utilities_lib_logging_events_Engagement_event__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ms/odsp-utilities/lib/logging/events/Engagement.event */ "cDPE");
/* harmony import */ var _ms_telemetry_manager_lib_events_Qos_event__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ms/telemetry-manager/lib/events/Qos.event */ "eT67");








var structureNavDepthUseDefault = { ODB: 1447 };
var emptyNavLinkGroup = {
    // @todo The default value of `links` is explicitly set to `undefined`.
    // Some callers have special logic to handle links is `undefined` or `[]`.
    // To keep the backward compatibility, we defines `links` default to be `undefined`.
    // However, some are directly skipping the re-render if the `links` is `undefined`.
    // That is not incorrect way to handle `undefined` case - it should render empty array.
    // We need to review all callers, then switch defaulting to `[]` in the future.
    links: undefined,
    name: '',
    startingNodeKey: '',
    isAudienceEnabled: false,
    isAudienceTargeted: false,
    isAudienceAffected: false
};
/**
 * This datasource calls SP NavigationService REST API to do update.
 */
var ViewNavDataSource = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ViewNavDataSource, _super);
    /**
     * @param pageContext the page context
     * @param mapProviderName navigation provider name used. If not provided, retrieve default navigation data.
     */
    function ViewNavDataSource(pageContext, mapProviderName) {
        var _this = _super.call(this, {
            id: 'ViewNavDataSource'
        }, {
            pageContext: pageContext
        }) || this;
        _this._mapProviderName = mapProviderName;
        _this._audiencesDataSource = _audienceTargeting_AudiencesDataSource__WEBPACK_IMPORTED_MODULE_5__["AudiencesDataSource"].getInstance(pageContext);
        return _this;
    }
    /**
     *  Tests if the url is a relative url
     */
    ViewNavDataSource.isRelativeUrl = function (url) {
        if (!url) {
            return false;
        }
        var hasProtocol = /^[a-z0-9+-.]+:\/\//i.test(url);
        return !hasProtocol && url.indexOf('/_layouts/15/groupstatus.aspx?') === -1;
    };
    /**
     * Tests if a URL should be opened in the same window
     * @param url the url target
     */
    ViewNavDataSource.shouldLinkOpenInSameWindow = function (url) {
        if (!url) {
            return false;
        }
        var target = new _ms_odsp_utilities_lib_uri_Uri__WEBPACK_IMPORTED_MODULE_4__["default"](url);
        var targetOrigin = target.getScheme() + '://' + target.getAuthority();
        var pathUrl = target.getScheme() === '' && target.getAuthority() === '';
        return ((pathUrl || targetOrigin === window.location.origin) &&
            url.indexOf('/_layouts/15/groupstatus.aspx?') === -1);
    };
    /**
     * Transform INavNodes to IDSNavLinks (compatible with fabric INavLink).
     *
     * @param nodes Nav nodes from the server
     * @param onClick Optional click handler to add to each link
     * @param filter Optional filter for nodes (level param starts at 0)
     */
    ViewNavDataSource.transformNodesToLinks = function (nodes, onClick, filter) {
        nodes = nodes || [];
        var transformNodes = function (nodes, level) {
            if (filter) {
                nodes = nodes.filter(function (node) { return filter(node, level); });
            }
            return nodes.map(function (node) {
                return {
                    name: node.Title,
                    key: node.Id.toString(),
                    url: node.Url,
                    onClick: onClick,
                    isDocLib: node.IsDocLib,
                    links: node.Children && node.Children.length ? transformNodes(node.Children, level + 1) : undefined,
                    audiences: node.AudienceIds || undefined,
                    currentLCID: node.CurrentLCID
                };
            });
        };
        return transformNodes(nodes, 0);
    };
    /**
     * Gets the publishing navigation settings URL.
     */
    ViewNavDataSource.getAreaNavigationSettingsUrl = function (pageContext) {
        return pageContext.webAbsoluteUrl + "/_layouts/15/AreaNavigationSettings.aspx";
    };
    /**
     * Set global nav enable/disable flag
     * @param isEnabled is global nav enabled or not
     */
    ViewNavDataSource.prototype.setGlobalNavEnabled = function (isEnabled) {
        var url = this._pageContext.webAbsoluteUrl + "/_api/navigation/SetGlobalNavEnabled?isEnabled=" + isEnabled;
        return this.dataRequestor.getData({
            url: url,
            qosName: 'SetGlobalNavEnabled',
            method: 'POST',
            noRedirect: true
        });
    };
    /**
     * Get global nav enable/disable setting
     */
    ViewNavDataSource.prototype.getGlobalNavEnabled = function () {
        var _this = this;
        return this.getDataUtilizingPersistentCache({
            getUrl: function () { return _this._pageContext.webAbsoluteUrl + "/_api/navigation/GlobalNavEnabled"; },
            parseResponse: function (responseText) {
                var response = JSON.parse(responseText);
                if (!response || !response.d) {
                    return false;
                }
                return response.d.GlobalNavEnabled;
            },
            qosName: 'getGlobalNavEnabled',
            method: 'GET',
            noRedirect: true
        });
    };
    /**
     * Get global navigation data for SP App bar.
     * @param forceRefresh leverage cache or not
     * @param source navigation source, it can be either TopOrHub or QuickLaunch
     * @param skipAudienceTargeting skip audience targeting filter or not
     */
    ViewNavDataSource.prototype.getGlobalNav = function (forceRefresh, source, skipAudienceTargeting) {
        var _this = this;
        var qosEvent = new _ms_telemetry_manager_lib_events_Qos_event__WEBPACK_IMPORTED_MODULE_7__["Qos"]({ name: 'GlobalNavigation' });
        var url = this._pageContext.webAbsoluteUrl + "/_api/navigation/GlobalNav";
        if (source) {
            url += "?source='" + source + "'";
        }
        var paramsForGetData = {
            url: url,
            qosName: 'GetGlobalNavigation',
            parseResponse: function (responseText) {
                var response = JSON.parse(responseText);
                return _this._transformToNavLinkGroup(response, false, qosEvent, true);
            },
            method: 'GET',
            additionalHeaders: { 'ODATA-VERSION': '4.0', Accept: '*/*, application/json; odata.metadata=minimal' },
            contentType: 'application/json; odata.metadata=minimal',
            maxRetries: 1,
            crossSiteCollectionCall: true,
            cachingStrategy: forceRefresh
                ? 3 /* bypassCache */
                : 0 /* useCacheAndUpdateInTheBackground */,
            noRedirect: true
        };
        var getNavGroupPromise = this.getDataUtilizingPersistentCache(paramsForGetData);
        return getNavGroupPromise.then(function (linkGroup) {
            if (!skipAudienceTargeting &&
                (!isRefineAudienceTargetKillSwitchActivated() || linkGroup) &&
                linkGroup.isAudienceEnabled &&
                linkGroup.isAudienceTargeted) {
                return _this._audiencesDataSource.filter('GlobalNav', linkGroup.links, 'links').then(function (links) {
                    var isAudienceAffected = ViewNavDataSource.checkIfLinksAffected(linkGroup.links, links);
                    linkGroup.links = links || [];
                    linkGroup.isAudienceAffected = isAudienceAffected;
                    return linkGroup;
                });
            }
            else {
                return linkGroup;
            }
        });
    };
    /**
     * Check if nav audience targeting is enabled.
     */
    ViewNavDataSource.prototype.isNavAudienceTargetedEnabled = function () {
        var _a;
        // The webPropertyFlags2 is not available on SP Start page, we fallback to isAudienceTargeted field.
        // Can't just check "truthiness" of webPropertyFlags2 because it could be set to 0, and that is a valid value
        // For which we cannot fall back to navigationInfo.isAudienceTargeted
        return Boolean(this._pageContext.webPropertyFlags2 === 0 || this._pageContext.webPropertyFlags2
            ? this._pageContext.webPropertyFlags2 & ViewNavDataSource.NAV_AUDIENCE_TARGET_FLAG
            : (_a = this._pageContext.navigationInfo) === null || _a === void 0 ? void 0 : _a.isAudienceTargeted);
    };
    /**
     * Get SharePoint navigation "menu state" data.
     */
    ViewNavDataSource.prototype.getMenuState = function (options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        var qosEvent = new _ms_telemetry_manager_lib_events_Qos_event__WEBPACK_IMPORTED_MODULE_7__["Qos"]({ name: 'NavigationGetMenuState' });
        var _a = options.providerName, providerName = _a === void 0 ? this._mapProviderName : _a, isGlobalNav = options.isGlobalNav, useCache = options.useCache, forceRefresh = options.forceRefresh, menuNodeKey = options.menuNodeKey, _b = options.maxRetries, maxRetries = _b === void 0 ? 1 : _b, _c = options.depth, depth = _c === void 0 ? 3 : _c, skipAudienceFiltering = options.skipAudienceFiltering, audienceFilterNodeKey = options.audienceFilterNodeKey;
        var qosName = useCache ? 'getMenuStateUsingCache' : 'getMenuState';
        var queryString = '';
        providerName = providerName || this._mapProviderName;
        if (menuNodeKey) {
            queryString += "?menuNodeKey='" + menuNodeKey + "'";
            if (providerName) {
                queryString += "&mapProviderName='" + providerName + "'";
            }
        }
        else if (isGlobalNav || providerName) {
            queryString += "?menuNodeKey=" + (isGlobalNav ? "1002" /* globalNavParent */ : '');
            if (providerName) {
                queryString += "&mapProviderName='" + providerName + "'";
            }
        }
        if (_ms_odsp_utilities_lib_features_Features__WEBPACK_IMPORTED_MODULE_3__["default"].isFeatureEnabled(structureNavDepthUseDefault)) {
            // if StructureNavDepthUseDefault flight is enabled (sorry name is opposit meaning),
            // pass depth level value 3 to override server default 10 levels
            if (queryString && queryString.length > 0) {
                queryString += "&depth='" + depth + "'";
            }
        }
        var url = this._pageContext.webAbsoluteUrl + "/_api/navigation/MenuState" + queryString;
        var paramsForGetData = {
            url: url,
            qosName: qosName,
            parseResponse: function (responseText) {
                var response = JSON.parse(responseText);
                return _this._transformToNavLinkGroup(response, Boolean(skipAudienceFiltering), qosEvent);
            },
            method: 'GET',
            additionalHeaders: { 'ODATA-VERSION': '4.0', Accept: '*/*, application/json; odata.metadata=minimal' },
            contentType: 'application/json; odata.metadata=minimal',
            maxRetries: maxRetries,
            crossSiteCollectionCall: true,
            cachingStrategy: forceRefresh
                ? 3 /* bypassCache */
                : 0 /* useCacheAndUpdateInTheBackground */,
            noRedirect: true
        };
        var getNavGroupPromise;
        if (useCache) {
            getNavGroupPromise = this.getDataUtilizingPersistentCache(paramsForGetData).then(function (group) {
                return isRefineAudienceTargetKillSwitchActivated() ? group : group || emptyNavLinkGroup;
            });
        }
        else {
            getNavGroupPromise = this.dataRequestor.getData(paramsForGetData);
        }
        if (isRefineAudienceTargetKillSwitchActivated()) {
            if (!skipAudienceFiltering &&
                (isCheckNavAudienceTargetInViewNavKillSwitchActivated()
                    ? this._audiencesDataSource.isAudienceTargetedNavEnabledBasedOnWebProperty()
                    : this.isNavAudienceTargetedEnabled())) {
                return getNavGroupPromise.then(function (linkGroup) {
                    if (linkGroup && _this._isGroupAudienceTargeted(linkGroup)) {
                        if (linkGroup.name === "13b7c916-4fea-4bb2-8994-5cf274aeb530" /* footerNavParent */ &&
                            linkGroup.links &&
                            audienceFilterNodeKey &&
                            // only validate on given node
                            _this._audiencesDataSource.containsAudiences(linkGroup.links.filter(function (link) { return link.name === audienceFilterNodeKey; }), 'links')) {
                            _ms_odsp_utilities_lib_logging_events_Engagement_event__WEBPACK_IMPORTED_MODULE_6__["Engagement"].logData({
                                name: 'FooterNav.AudienceTargeting'
                            });
                        }
                        return _this._audiencesDataSource.filter('SiteNav', linkGroup.links, 'links').then(function (links) {
                            linkGroup.links = links || [];
                            return linkGroup;
                        });
                    }
                    else {
                        return linkGroup;
                    }
                });
            }
            else {
                return getNavGroupPromise;
            }
        }
        else {
            return getNavGroupPromise.then(function (linkGroup) {
                if (linkGroup.isAudienceEnabled && linkGroup.isAudienceTargeted) {
                    return _this._audiencesDataSource.filter('SiteNav', linkGroup.links, 'links').then(function (links) {
                        var isAudienceAffected = ViewNavDataSource.checkIfLinksAffected(linkGroup.links, links);
                        linkGroup.links = links || [];
                        linkGroup.isAudienceAffected = isAudienceAffected;
                        return linkGroup;
                    });
                }
                else {
                    return linkGroup;
                }
            });
        }
    };
    /**
     * Check if the links is affected by the audience filtering.
     */
    ViewNavDataSource.checkIfLinksAffected = function (links1, links2) {
        var count1 = countTotalLinks(links1);
        var count2 = countTotalLinks(links2);
        return count1 !== count2;
    };
    /** Clears all cached data. */
    ViewNavDataSource.prototype.clearCache = function () {
        this.flushCache();
    };
    ViewNavDataSource.prototype._transformToNavLinkGroup = function (menuState, skipAudienceFiltering, qosEvent, isGlobalNav /** whether it is requesting global nav or not */) {
        if (!menuState || !menuState.Nodes || menuState.Nodes.length === 0) {
            qosEvent.end({ resultType: _ms_telemetry_manager_lib_events_Qos_event__WEBPACK_IMPORTED_MODULE_7__["ResultTypeEnum"].ExpectedFailure, error: 'getMenuState empty MenuState' });
            return isRefineAudienceTargetKillSwitchActivated() ? undefined : emptyNavLinkGroup;
        }
        try {
            var links = this._getLinksFromNodes(menuState.Nodes, menuState.FriendlyUrlPrefix);
            var group = {
                isAudienceEnabled: !isRefineAudienceTargetKillSwitchActivated() &&
                    !skipAudienceFiltering &&
                    // If this is specific for global nav, use IsAudienceTargetEnabledForGlobalNav; otherwise use the flag in current context.
                    (isGlobalNav
                        ? menuState.IsAudienceTargetEnabledForGlobalNav
                        : isCheckNavAudienceTargetInViewNavKillSwitchActivated()
                            ? this._audiencesDataSource.isAudienceTargetedNavEnabledBasedOnWebProperty()
                            : this.isNavAudienceTargetedEnabled()),
                isAudienceTargeted: (isRefineAudienceTargetKillSwitchActivated() || !skipAudienceFiltering) &&
                    this._audiencesDataSource.containsAudiences(links, 'links'),
                isAudienceAffected: false,
                name: menuState.StartingNodeTitle || '',
                links: links,
                startingNodeKey: menuState.StartingNodeKey
            };
            qosEvent.end({ resultType: _ms_telemetry_manager_lib_events_Qos_event__WEBPACK_IMPORTED_MODULE_7__["ResultTypeEnum"].Success });
            return group;
        }
        catch (e) {
            qosEvent.end({ resultType: _ms_telemetry_manager_lib_events_Qos_event__WEBPACK_IMPORTED_MODULE_7__["ResultTypeEnum"].Failure, error: e ? e.toString() : 'getMenuState failed' });
            return isRefineAudienceTargetKillSwitchActivated() ? undefined : emptyNavLinkGroup;
        }
    };
    ViewNavDataSource.prototype._getLinksFromNodes = function (nodes, friendlyUrlPrefix) {
        var _this = this;
        var transformNodes = function (nodes, parent, prevUrlSegment) {
            nodes = nodes.filter(function (node) {
                if (node.Key === "1033" /* quickLaunchRecent */ ||
                    node.Key.indexOf("SPNavigationNodeId=" + "1033" /* quickLaunchRecent */) !== -1) {
                    return false;
                }
                return !node.IsDeleted && !node.IsHidden;
            });
            var urlSegment = prevUrlSegment ? prevUrlSegment + '/' : '';
            return nodes.map(function (node) {
                var parentUrlSegment = parent && urlSegment + parent.FriendlyUrlSegment;
                var url = _this._getUrl(node, !!parent, friendlyUrlPrefix, parentUrlSegment);
                return {
                    name: node.Title,
                    url: url,
                    key: node.Key,
                    ariaLabel: node.Title,
                    isExpanded: false,
                    hasChildLinks: node.CustomProperties
                        ? _this._getCustomPropertyValue(node.CustomProperties, 'HasChildNodes') === 'True'
                        : undefined,
                    target: ViewNavDataSource.shouldLinkOpenInSameWindow(url) ? '' : '_blank',
                    links: node.Nodes && node.Nodes.length ? transformNodes(node.Nodes, node, parentUrlSegment) : undefined,
                    audiences: node.AudienceIds && node.AudienceIds.length > 0 ? node.AudienceIds : undefined,
                    currentLCID: node.CurrentLCID
                };
            });
        };
        return transformNodes(nodes || []);
    };
    ViewNavDataSource.prototype._getCustomPropertyValue = function (properties, key) {
        // newly added supposed at the last so we start from end of arrary
        var maxIdx = properties.length - 1;
        for (var i = maxIdx; i > 0; i--) {
            if (properties[i].Key === key) {
                // found the customer property
                return properties[i].Value;
            }
        }
        return '';
    };
    ViewNavDataSource.prototype._getUrl = function (node, isSublink, friendlyUrlPrefix, parentFriendlySegment) {
        if (node.SimpleUrl) {
            return node.SimpleUrl;
        }
        var url;
        if (node.NodeType === 1 /* FriendlyUrl */ && node.FriendlyUrlSegment) {
            if (!isSublink) {
                // parent node
                url = friendlyUrlPrefix + node.FriendlyUrlSegment;
            }
            else {
                // child node
                url =
                    friendlyUrlPrefix +
                        ((parentFriendlySegment ? "/" + parentFriendlySegment : '') + ("/" + node.FriendlyUrlSegment));
            }
            url = url.replace('//', '/');
        }
        return url;
    };
    ViewNavDataSource.prototype._isGroupAudienceTargeted = function (group) {
        if (group.isAudienceTargeted) {
            return true;
        }
        else if (group.name === "13b7c916-4fea-4bb2-8994-5cf274aeb530" /* footerNavParent */ && group.links) {
            return this._audiencesDataSource.containsAudiences(group.links, 'links');
        }
        else {
            return false;
        }
    };
    ViewNavDataSource.NAV_AUDIENCE_TARGET_FLAG = 0x00000000000800000;
    return ViewNavDataSource;
}(_base_CachedDataSource__WEBPACK_IMPORTED_MODULE_2__["CachedDataSource"]));

function countTotalLinks(links) {
    if (!links) {
        return 0;
    }
    var count = links.length;
    for (var _i = 0, links_1 = links; _i < links_1.length; _i++) {
        var link = links_1[_i];
        count += countTotalLinks(link.links);
    }
    return count;
}
function isRefineAudienceTargetKillSwitchActivated() {
    return _ms_odsp_utilities_lib_killswitch_Killswitch__WEBPACK_IMPORTED_MODULE_1__["Killswitch"].isActivated('1cd2d1c9-fdc8-4110-a71e-e8125063dd90', '2020-09-01', 'Refine the audience targeting logging');
}
function isCheckNavAudienceTargetInViewNavKillSwitchActivated() {
    return _ms_odsp_utilities_lib_killswitch_Killswitch__WEBPACK_IMPORTED_MODULE_1__["Killswitch"].isActivated('71980d68-1e8b-44e4-84a5-19370f97ec10'
    /* '2020-12-15', 'Leverage the check nav audience target method from ViewNavDataSource' */
    );
}
/* harmony default export */ __webpack_exports__["default"] = (ViewNavDataSource);
//# sourceMappingURL=ViewNavDataSource.js.map

/***/ }),

/***/ "Oa+Z":
/*!***************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-utilities@29.7.9_5d977624104b06c7bcaa2de974ff51f1/node_modules/@ms/odsp-utilities/lib/events/EventGroup.js ***!
  \***************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ms/odsp-utilities-bundle */ "y88i");
/* harmony import */ var _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_0__["EventGroup"]; });

// Loading @ms/odsp-utilities/./lib/events/EventGroup.js



/***/ }),

/***/ "OkMq":
/*!***********************************************!*\
  !*** ./lib/components/SiteLeftNav/LeftNav.js ***!
  \***********************************************/
/*! exports provided: LeftNav */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeftNav", function() { return LeftNav; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @microsoft/sp-lodash-subset */ "Pk8u");
/* harmony import */ var _microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @microsoft/office-ui-fabric-react-bundle */ "KL1q");
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var office_ui_fabric_react_lib_FocusTrapZone__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! office-ui-fabric-react/lib/FocusTrapZone */ "Qiuu");
/* harmony import */ var office_ui_fabric_react_lib_utilities_decorators_withResponsiveMode__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! office-ui-fabric-react/lib/utilities/decorators/withResponsiveMode */ "5qgq");
/* harmony import */ var office_ui_fabric_react_lib_utilities_decorators_withResponsiveMode__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(office_ui_fabric_react_lib_utilities_decorators_withResponsiveMode__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @microsoft/sp-diagnostics */ "ut3N");
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _microsoft_sp_page_context__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @microsoft/sp-page-context */ "X+PM");
/* harmony import */ var _microsoft_sp_page_context__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_page_context__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ms/odsp-utilities-bundle */ "y88i");
/* harmony import */ var _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _ms_odsp_datasources_lib_dataSources_site_SiteDataSource__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ms/odsp-datasources/lib/dataSources/site/SiteDataSource */ "6GcD");
/* harmony import */ var _ms_odsp_shared_react_lib_Nav__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ms/odsp-shared-react/lib/Nav */ "+JAU");
/* harmony import */ var _ms_shared_react_left_nav_lib_LeftNav__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ms/shared-react-left-nav/lib/LeftNav */ "b97J");
/* harmony import */ var _ms_odsp_datasources_lib_Hub__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ms/odsp-datasources/lib/Hub */ "rdJO");
/* harmony import */ var _ms_odsp_datasources_lib_ViewNav__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ms/odsp-datasources/lib/ViewNav */ "Qjmx");
/* harmony import */ var _ms_odsp_shared_react_lib_components_HubNav_HubNavHelpers__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ms/odsp-shared-react/lib/components/HubNav/HubNavHelpers */ "Vmng");
/* harmony import */ var _ms_odsp_datasources_lib_interfaces_ISpPageContext__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ms/odsp-datasources/lib/interfaces/ISpPageContext */ "GlwB");
/* harmony import */ var _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ms/sp-telemetry */ "2q6Q");
/* harmony import */ var _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _loaders_spcx_teamify__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../loaders/spcx-teamify */ "Iqpv");
/* harmony import */ var _loaders_spcx_classicHomepageLink__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../loaders/spcx-classicHomepageLink */ "dWz9");
/* harmony import */ var _loaders_spcx_webDataSource__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../loaders/spcx-webDataSource */ "X7yh");
/* harmony import */ var _LeftNav_module_scss__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./LeftNav.module.scss */ "D3jz");
/* harmony import */ var _LeftNav_resx__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./LeftNav.resx */ "q/ZR");
var _LeftNav_resx__WEBPACK_IMPORTED_MODULE_22___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./LeftNav.resx */ "q/ZR", 1);
/* harmony import */ var _ReturnToClassicButton__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./ReturnToClassicButton */ "6R0g");
/* harmony import */ var _common_KillSwitches__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../common/KillSwitches */ "+ORw");
/* harmony import */ var _Teamify_TeamifyStrings__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../Teamify/TeamifyStrings */ "NtRd");
/* harmony import */ var _ms_odsp_datasources_lib_models_chrome_ChromeOptions__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @ms/odsp-datasources/lib/models/chrome/ChromeOptions */ "Vb17");




























var HEADER_LINK_URL = 'http://linkless.header/';
var NAV_STYLES = { groupContent: { animationName: 'none' }, link: { height: '40px' } };
var LEFT_NAV = 'leftNav';
var LEFT_NAV_MOUNTED = 'leftNavMounted';
var RECYCLE_BIN_URL = '/_layouts/15/RecycleBin.aspx';

var MOBILE_WEB_MODE_MAX_SIZE = office_ui_fabric_react_lib_utilities_decorators_withResponsiveMode__WEBPACK_IMPORTED_MODULE_5__["ResponsiveMode"].large;
/**
 * Default SharePoint left nav component
 *
 * @public
 */
var LeftNav = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(LeftNav, _super);
    function LeftNav(props, duration) {
        if (duration === void 0) { duration = 0; }
        var _this = _super.call(this, props) || this;
        _this._navComponent = react__WEBPACK_IMPORTED_MODULE_1__["createRef"]();
        _this._audienceMemberships = [];
        _this._enableMobileTouchMove = function (event) {
            if (event && !event.target.classList.contains('ms-Overlay') && _this.props.isOnTop) {
                // Enable touch scroll behavior for component on top of overlay
                event.stopPropagation();
            }
        };
        _this._handleEscKey = function (event) {
            // tslint:disable-next-line:no-any
            var ev = event;
            if (_this.props.isOnTop && ev && ev.which === _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_3__["KeyCodes"].escape && _this.props.toggleOnTop) {
                _this.props.toggleOnTop();
            }
        };
        _this._onOverlayClick = function (ev, item) {
            var isLabel = !!item && !item.url;
            if (_this.props.isOnTop &&
                _this.props.toggleOnTop &&
                (_common_KillSwitches__WEBPACK_IMPORTED_MODULE_24__["KillSwitches"].leftNavAccordionClickKS.isActivated() || !isLabel)) {
                _this.props.toggleOnTop();
            }
            return true;
        };
        _this._getClassicHomepageUrl = function () {
            Object(_loaders_spcx_webDataSource__WEBPACK_IMPORTED_MODULE_20__["loadWebDataSource"])(_this.props.pageContext)
                .then(function (webDataSource) {
                return webDataSource.getClassicWelcomePage();
            })
                .then(function (classicHomepageUrl) {
                if (classicHomepageUrl) {
                    _this.setState({ classicHomepageUrl: classicHomepageUrl });
                }
            });
        };
        _this._onRemoveClassicHomepageUrl = function () {
            _this.setState({ classicHomepageUrl: undefined });
        };
        _this._onEditClicked = function (evt) {
            _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_9__["Engagement"].logData({ name: 'ReactLeftNav.Edit.Click' });
            if (_this.props.onEditClicked && _this.state.groups) {
                _this.setState({ editMode: true });
                // TODO: VSO:426253 allow varying group for editing on mobile web
                var quickLaunchGroup_1 = {
                    key: "QuickLaunch" /* quickLaunch */,
                    links: _this._createQuickLaunchGroup(_this.props, _this.props.quickLaunch, true).links
                };
                if (!Object(_common_KillSwitches__WEBPACK_IMPORTED_MODULE_24__["isLeftNavEditUpdateKSActive"])() && !_this._quickLaunchEditCache) {
                    _this._quickLaunchEditCache = _this._createQuickLaunchGroup(_this.props, _this.props.quickLaunch, true);
                }
                _this.props.onEditClicked(Object(_common_KillSwitches__WEBPACK_IMPORTED_MODULE_24__["isLeftNavEditUpdateKSActive"])() ? quickLaunchGroup_1 : _this._quickLaunchEditCache, _this._onExitEditMode, function (links) {
                    if (Object(_common_KillSwitches__WEBPACK_IMPORTED_MODULE_24__["isLeftNavEditUpdateKSActive"])()) {
                        // Keep the original group object but update its links
                        quickLaunchGroup_1.links = links;
                        _this.forceUpdate();
                    }
                    else {
                        _this._quickLaunchEditCache.links = links;
                        // bypass AudienceDataSource cache in case user toggled whether the audience targeting feature is enabled
                        var audienceFilteredLinks = LeftNav._isAudienceTargeted(_this.props)
                            ? new _ms_odsp_datasources_lib_ViewNav__WEBPACK_IMPORTED_MODULE_14__["AudiencesDataSource"](_this.props.pageContext).filterWithMembership(_this._audienceMemberships, links, 'links') || []
                            : links;
                        LeftNav._augmentHeaderLink(audienceFilteredLinks);
                        var quickLaunchGroupRef = _this._findLinkGroup(_this.state.groups, "QuickLaunch" /* quickLaunch */);
                        quickLaunchGroupRef.links = audienceFilteredLinks;
                        _this.setState({
                            groups: _this.state.groups
                        });
                    }
                }, undefined, _LeftNav_resx__WEBPACK_IMPORTED_MODULE_22__["EditNavPanelTitle"]);
            }
            evt.stopPropagation();
            evt.preventDefault();
        };
        _this._onExitEditMode = function () {
            _this.setState({ editMode: false });
        };
        _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_17__["_PerformanceLogger"].startMarkForComponent(LEFT_NAV);
        _this.state = {
            isSiteReadOnly: true,
            // Go ahead and initialize the quick launch group. In the normal case, we have all the info
            // we need except for home page link highlighting (which will be set up later). In the
            // publishing nav case, we'll display a Loading... link for now and fetch data later.
            groups: [
                _this._createQuickLaunchGroup(props, LeftNav._isAudienceTargeted(props) ? [] : _this.props.quickLaunch)
            ],
            isSmallScreen: props.responsiveMode <= MOBILE_WEB_MODE_MAX_SIZE
        };
        _this._currQuickLaunch = Object(_microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_2__["cloneDeep"])(props.quickLaunch);
        if (props.pageContext.PublishingFeatureOn) {
            _this._viewNavDataSource = new _ms_odsp_datasources_lib_ViewNav__WEBPACK_IMPORTED_MODULE_14__["ViewNavDataSource"](props.pageContext);
        }
        if (LeftNav._isAudienceTargeted(_this.props)) {
            _this._applyInitialAudienceTargeting();
        }
        return _this;
    }
    LeftNav._shouldShowCloseButton = function () {
        return ((!_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_6__["_SPKillSwitch"].isActivated('6252e995-086c-4a88-8ccc-8b127c8c15a2'
        /* '01/20/2021', 'Remove flight dependency to SPPagesSuiteSearchBox' */
        ) ||
            _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_6__["_SPFlight"].isEnabled(1240 /* SPPagesSuiteSearchBox */)) &&
            !LeftNav._closeButtonKSActivated());
    };
    LeftNav._closeButtonKSActivated = function () {
        return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_6__["_SPKillSwitch"].isActivated(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_6__["Guid"].parse('0ca63b4e-5d87-416c-86e4-3f85908a6332'), '3/10/2020', 'Render close button in hamburger menu');
    };
    LeftNav._addRecycleBinLinkKSActivated = function () {
        return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_6__["_SPKillSwitch"].isActivated(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_6__["Guid"].parse('700a8ba3-46e8-48d3-8e69-c13dce98c1f6'), '1/11/2021', 'Do not add recycle bin to comm sites');
    };
    LeftNav._augmentHeaderLink = function (links) {
        if (links) {
            links.forEach(function (link) {
                if (link) {
                    if (link.url === HEADER_LINK_URL || link.url === '') {
                        link.url = '';
                        link.disabled = true;
                    }
                    LeftNav._augmentHeaderLink(link.links);
                }
            });
        }
    };
    LeftNav._getRecycleBinUrl = function (props) {
        var webUrl = _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_6__["UrlUtilities"].removeEndSlash(props.pageContext.webServerRelativeUrl);
        return webUrl + RECYCLE_BIN_URL;
    };
    LeftNav._isAudienceTargeted = function (props) {
        if (!props || !props.pageContext) {
            return false;
        }
        return (!props.pageContext.PublishingFeatureOn &&
            !!props.pageContext.navigationInfo &&
            !!props.pageContext.navigationInfo.isAudienceTargeted &&
            new _ms_odsp_datasources_lib_ViewNav__WEBPACK_IMPORTED_MODULE_14__["ViewNavDataSource"](props.pageContext).isNavAudienceTargetedEnabled());
    };
    LeftNav.prototype.UNSAFE_componentWillReceiveProps = function (nextProps) {
        var publishingFeatureOn = !nextProps.pageContext.PublishingFeatureOn;
        if (publishingFeatureOn && this.state.groups && !Object(_microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_2__["isEqual"])(this._currQuickLaunch, nextProps.quickLaunch)) {
            var quickLaunchGroup = this._findLinkGroup(this.state.groups, "QuickLaunch" /* quickLaunch */);
            quickLaunchGroup.links = this._createQuickLaunchGroup(nextProps, nextProps.quickLaunch).links;
            this._currQuickLaunch = Object(_microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_2__["cloneDeep"])(nextProps.quickLaunch);
            this._hasQuickLaunchUpdated = true;
        }
        var isSmallScreen = nextProps.responsiveMode <= MOBILE_WEB_MODE_MAX_SIZE;
        if (isSmallScreen !== this.state.isSmallScreen) {
            if (isSmallScreen && !this._hasLoadedExtraLinkGroups) {
                // Just switched to a small screen, so set up the top nav and possibly the hub nav
                // (if they're not already set up)
                this._loadExtraLinkGroups(nextProps);
            }
            this.setState({
                isSmallScreen: isSmallScreen
            });
        }
    };
    LeftNav.prototype.componentDidMount = function () {
        var _this = this;
        _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_17__["_PerformanceLogger"].setPerformanceProperty(LEFT_NAV_MOUNTED);
        if (this.state.isSmallScreen) {
            // We're on a small screen, so set up the top nav and possibly the hub nav
            this._loadExtraLinkGroups(this.props);
            if (_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_6__["_BrowserUtilities"].isMobileBrowser()) {
                document.body.addEventListener('touchmove', this._enableMobileTouchMove, {
                    passive: false,
                    capture: true
                });
            }
        }
        var pageContext = this.props.pageContext;
        if (Object(_ms_odsp_datasources_lib_interfaces_ISpPageContext__WEBPACK_IMPORTED_MODULE_16__["isGroupWebContext"])(pageContext)) {
            // Check if this is a group eligible for teamify (delay to reduce impact)
            this._async.setTimeout(function () { return _this._doTeamsPromoSetup(); }, 4000);
        }
        if (pageContext && pageContext.isWebWelcomePage && pageContext.isSiteAdmin) {
            this._async.setTimeout(function () { return _this._getClassicHomepageUrl(); }, 4000);
        }
        // Start async fetch of publishing navigation data
        // (don't need the home page URL in this case because we leave publishing nav data as-is)
        if (this.props.pageContext.PublishingFeatureOn) {
            this._fetchPublishingQuickLaunch();
        }
        _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_17__["_PerformanceLogger"].endMarkForComponent(LEFT_NAV, true /*waitForPaint*/);
        if (this.props.renderDeferredComponents) {
            this._getSiteReadOnly();
        }
        document.body.addEventListener('keydown', this._handleEscKey);
        if (this.props.isOnTop) {
            this._ensureNavHasFocus();
        }
    };
    LeftNav.prototype.componentWillUnmount = function () {
        document.body.removeEventListener('touchmove', this._enableMobileTouchMove, true);
        document.body.removeEventListener('keydown', this._handleEscKey);
    };
    LeftNav.prototype.componentDidUpdate = function (prevProps) {
        if (this.props.renderDeferredComponents) {
            // update the site readonly status async
            this._getSiteReadOnly();
        }
        if (this.props.isOnTop) {
            this._ensureNavHasFocus();
        }
        if (this.props.pageContext.webId !== prevProps.pageContext.webId ||
            this.props.pageContext.siteId !== prevProps.pageContext.siteId) {
            if (this.props.pageContext.PublishingFeatureOn) {
                this._viewNavDataSource = new _ms_odsp_datasources_lib_ViewNav__WEBPACK_IMPORTED_MODULE_14__["ViewNavDataSource"](this.props.pageContext);
                this._fetchPublishingQuickLaunch();
            }
        }
    };
    LeftNav.prototype.shouldComponentUpdate = function (nextProps, nextState) {
        if (
        // tslint:disable-next-line:no-string-literal
        (window['teamsCustomAppType'] === 'portals' || !_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_6__["_BrowserUtilities"].isEmbedded()) &&
            (this._hasQuickLaunchUpdated ||
                this.props.renderDeferredComponents !== nextProps.renderDeferredComponents ||
                this.props.pageContext !== nextProps.pageContext ||
                this.props.pageContext.isWebWelcomePage !== this.props.pageContext.isWebWelcomePage ||
                this.props.responsiveMode !== nextProps.responsiveMode ||
                this.props.isOnTop !== nextProps.isOnTop ||
                !Object(_microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_2__["isEqual"])(this.state, nextState))) {
            this._hasQuickLaunchUpdated = false;
            return true;
        }
        else {
            return false;
        }
    };
    LeftNav.prototype.render = function () {
        var _a, _b, _c, _d;
        var groups = this.state.groups;
        if (
        // tslint:disable-next-line:no-string-literal
        (!(window['teamsCustomAppType'] === 'portals') && _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_6__["_BrowserUtilities"].isEmbedded()) ||
            !groups ||
            !groups.length ||
            (!this.props.isOnTop && this.state.isSmallScreen)) {
            return null; // tslint:disable-line:no-null-keyword
        }
        var _e = this.state, isSmallScreen = _e.isSmallScreen, canTeamify = _e.canTeamify, classicHomepageUrl = _e.classicHomepageUrl;
        var pageContext = this.props.pageContext;
        var showClassicHomepageLink = pageContext && pageContext.isWebWelcomePage && pageContext.isSiteAdmin && !!classicHomepageUrl;
        var isOnTop = (this.props.isOnTop && this.state.isSmallScreen) || false;
        // Only show proper groups for the current responsive mode
        groups = groups.filter(function (group) { return !group.mobileWebOnly || isSmallScreen; });
        if (Object(_common_KillSwitches__WEBPACK_IMPORTED_MODULE_24__["isEmptyLeftNavKSActive"])()) {
            // If > large and first group has no links, do not render left nav
            if (!isSmallScreen && !groups[0].links.length) {
                return null; // tslint:disable-line:no-null-keyword
            }
        }
        if (!this.props.renderDeferredComponents) {
            _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_17__["_PerformanceLogger"].setPerformanceProperty(LEFT_NAV + "_EUPL_renderCount", 1, true /* addToExisting */);
            _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_17__["_PerformanceLogger"].devMark(LEFT_NAV + "_EUPL_renderCount");
        }
        _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_17__["_PerformanceLogger"].setPerformanceProperty(LEFT_NAV + "_renderCount", 1, true /* addToExisting */);
        _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_17__["_PerformanceLogger"].devMark(LEFT_NAV + "_renderCount");
        // Right before rendering, update whether edit links should be displayed based on
        // the current state.
        this._updateEditLink(groups);
        if (this.props.sharedWithUsVisible && Object(_ms_odsp_datasources_lib_interfaces_ISpPageContext__WEBPACK_IMPORTED_MODULE_16__["isGroupWebContext"])(pageContext)) {
            this._addSharedWithUsLink(groups);
        }
        var shouldShowTeamify = (canTeamify && !isSmallScreen && !this.state.editMode) || false;
        var classNames = Object(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_3__["css"])((_a = {}, _a[_LeftNav_module_scss__WEBPACK_IMPORTED_MODULE_21__["default"].navCustom] = LeftNav._shouldShowCloseButton(), _a), this.props.className, _LeftNav_module_scss__WEBPACK_IMPORTED_MODULE_21__["default"].spNav, (_b = {},
            _b[_LeftNav_module_scss__WEBPACK_IMPORTED_MODULE_21__["default"].isOnTop] = isOnTop,
            _b[_LeftNav_module_scss__WEBPACK_IMPORTED_MODULE_21__["default"].leftNavWidthKS] = !_common_KillSwitches__WEBPACK_IMPORTED_MODULE_24__["KillSwitches"].increaseNavWidthKS.isActivated(),
            _b));
        var doTrapFocus = isOnTop && !Object(_common_KillSwitches__WEBPACK_IMPORTED_MODULE_24__["isLeftNavTrapFocusKSActive"])();
        return !this.state.editMode
            ? [
                isOnTop && react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_3__["Overlay"], { className: _LeftNav_module_scss__WEBPACK_IMPORTED_MODULE_21__["default"].navOverlay, onClick: this._onOverlayClick, key: 'overlay' }),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: classNames, key: 'navPanel', id: 'spLeftNav' },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](office_ui_fabric_react_lib_FocusTrapZone__WEBPACK_IMPORTED_MODULE_4__["FocusTrapZone"], { disabled: !doTrapFocus, isClickableOutsideFocusTrap: true, forceFocusInsideTrap: doTrapFocus },
                        isOnTop && LeftNav._shouldShowCloseButton() && this._renderCloseButton(),
                        this.props.renderDeferredComponents && this.props.searchBox,
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ms_shared_react_left_nav_lib_LeftNav__WEBPACK_IMPORTED_MODULE_12__["LeftNav"], { ariaLabel: _LeftNav_resx__WEBPACK_IMPORTED_MODULE_22__["LeftNavAriaLabel"], groups: groups, isOnTop: isOnTop, onLinkClick: this._onOverlayClick, className: !LeftNav._shouldShowCloseButton()
                                ? Object(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_3__["css"])(_LeftNav_module_scss__WEBPACK_IMPORTED_MODULE_21__["default"].navCustom, (_c = {},
                                    _c[_LeftNav_module_scss__WEBPACK_IMPORTED_MODULE_21__["default"].leftNavWidthKS] = !_common_KillSwitches__WEBPACK_IMPORTED_MODULE_24__["KillSwitches"].increaseNavWidthKS.isActivated(),
                                    _c))
                                : undefined, recomputeSelected: !Object(_common_KillSwitches__WEBPACK_IMPORTED_MODULE_24__["recomputeLeftNavKSActivated"])(), componentRef: this._navComponent, styles: NAV_STYLES }),
                        shouldShowTeamify && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_loaders_spcx_teamify__WEBPACK_IMPORTED_MODULE_18__["DeferredTeamifyBanner"], { duration: 4000, loader: _loaders_spcx_teamify__WEBPACK_IMPORTED_MODULE_18__["teamifyBannerLoader"], deferredProps: {
                                className: Object(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_3__["css"])(_LeftNav_module_scss__WEBPACK_IMPORTED_MODULE_21__["default"].spNavFooter, (_d = {},
                                    _d[_LeftNav_module_scss__WEBPACK_IMPORTED_MODULE_21__["default"].leftNavWidthKS] = !_common_KillSwitches__WEBPACK_IMPORTED_MODULE_24__["KillSwitches"].increaseNavWidthKS.isActivated(),
                                    _d)),
                                pageContext: this.props.pageContext,
                                teamifyStrings: _Teamify_TeamifyStrings__WEBPACK_IMPORTED_MODULE_25__["teamifyStrings"]
                            } })),
                        this.props.returnToClassicCallback && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ReturnToClassicButton__WEBPACK_IMPORTED_MODULE_23__["default"], { onClick: this.props.returnToClassicCallback })),
                        showClassicHomepageLink && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_loaders_spcx_classicHomepageLink__WEBPACK_IMPORTED_MODULE_19__["DeferredClassicHomepageLink"], { duration: 4000, loader: _loaders_spcx_classicHomepageLink__WEBPACK_IMPORTED_MODULE_19__["classicHomepageLinkLoader"], deferredProps: {
                                classicHomepageUrl: classicHomepageUrl,
                                onRemoveClassicHomepageUrl: this._onRemoveClassicHomepageUrl,
                                pageContext: this.props.pageContext
                            } }))))
            ]
            : null; // tslint:disable-line:no-null-keyword
    };
    LeftNav.prototype._renderCloseButton = function () {
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null,
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_3__["IconButton"], { className: _LeftNav_module_scss__WEBPACK_IMPORTED_MODULE_21__["default"].closeButton, onClick: this._onOverlayClick, ariaLabel: _LeftNav_resx__WEBPACK_IMPORTED_MODULE_22__["CloseButtonArialLabel"], title: _LeftNav_resx__WEBPACK_IMPORTED_MODULE_22__["CloseButton"], "data-automationid": 'LeftNavCloseButton', iconProps: { iconName: 'Cancel' } })));
    };
    // Most of this method will be moving to odsp-common. The moved version will be used as the
    // `augmentLinks` property of the quick launch ISPNavLinkGroup. That will allow the
    // EditNavStateManager to restore any client-side modifications after editing, rather than each
    // nav component needing to handle that with duplicated code. (The hub nav link group in odsp-next
    // already uses the new approach.)
    LeftNav.prototype._augmentQuickLaunch = function (props, links) {
        if (!links || !links.length) {
            return;
        }
        var homePageUrl = window.location.href.split('?', 1)[0];
        var webAbsoluteUrl = props.pageContext.webAbsoluteUrl;
        for (var i = 0; i < links.length; i++) {
            var link = links[i];
            // home page link highlighting logic:
            // if the home page URL of the web matches the current URL, and the current URL
            // ends with the home page URL (e.g. /sites/wex/SitePages/Home.aspx) or the web URL (e.g. /sites/wex),
            // then this link points to the home page.
            // Change the link to the full home page URL so that the URL of it matches the current URL.
            var url = link.url;
            if (url &&
                (homePageUrl.indexOf(url, homePageUrl.length - url.length) !== -1 ||
                    webAbsoluteUrl.indexOf(url, webAbsoluteUrl.length - url.length) !== -1)) {
                link.url = homePageUrl;
                break;
            }
        }
    };
    LeftNav.prototype._getSiteReadOnly = function () {
        var _this = this;
        if (!this._isSiteReadOnlyFlagFetched) {
            var siteDataSource = new _ms_odsp_datasources_lib_dataSources_site_SiteDataSource__WEBPACK_IMPORTED_MODULE_10__["SiteDataSource"](this.props.pageContext);
            siteDataSource.getReadOnlyState().then(function (value) {
                _this.setState({
                    isSiteReadOnly: value
                });
            }, 
            // tslint:disable-next-line:no-any
            function (error) {
                _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_7__["_TraceLogger"].logError(LeftNav.logSource, error, 'Nav.GetReadOnlyState');
            });
            this._isSiteReadOnlyFlagFetched = true;
        }
    };
    LeftNav.prototype._createQuickLaunchGroup = function (props, nodes, bypassAudienceFiltering) {
        var _a;
        var links;
        if (props.pageContext.PublishingFeatureOn) {
            // create Loading ... node
            links = [
                {
                    name: _ms_odsp_shared_react_lib_Nav__WEBPACK_IMPORTED_MODULE_11__["NavResx"].LoadingPlaceholder,
                    url: ''
                }
            ];
        }
        else {
            // default quickLaunch Navigation
            links = _ms_odsp_datasources_lib_ViewNav__WEBPACK_IMPORTED_MODULE_14__["ViewNavDataSource"].transformNodesToLinks(nodes, undefined /*onClick*/, 
            // Filter out the Recent node
            function (node) { return node.Id !== Number("1033" /* quickLaunchRecent */); });
            if (!bypassAudienceFiltering && LeftNav._isAudienceTargeted(props)) {
                links =
                    _ms_odsp_datasources_lib_ViewNav__WEBPACK_IMPORTED_MODULE_14__["AudiencesDataSource"].getInstance(props.pageContext).filterWithMembership(this._audienceMemberships, links, 'links') || [];
            }
            LeftNav._augmentHeaderLink(links);
            if (!LeftNav._addRecycleBinLinkKSActivated()) {
                var canSeeRecycleBin = ((_a = props.navOptions) === null || _a === void 0 ? void 0 : _a.placement) === _ms_odsp_datasources_lib_models_chrome_ChromeOptions__WEBPACK_IMPORTED_MODULE_26__["NavPlacementType"].LEFT;
                if (canSeeRecycleBin && (!Object(_common_KillSwitches__WEBPACK_IMPORTED_MODULE_24__["isEmptyLeftNavKSActive"])() || links.length)) {
                    // Add recycle bin node
                    links.push({
                        key: "-1000" /* clientRecycleBin */,
                        name: _LeftNav_resx__WEBPACK_IMPORTED_MODULE_22__["RecycleBin"],
                        url: LeftNav._getRecycleBinUrl(props)
                    });
                }
            }
            else {
                if (!Object(_common_KillSwitches__WEBPACK_IMPORTED_MODULE_24__["isEmptyLeftNavKSActive"])() || links.length) {
                    // Add recycle bin node
                    links.push({
                        key: "-1000" /* clientRecycleBin */,
                        name: _LeftNav_resx__WEBPACK_IMPORTED_MODULE_22__["RecycleBin"],
                        url: LeftNav._getRecycleBinUrl(props)
                    });
                }
            }
            if (!!props.isCurrentPageWelcomePage) {
                this._augmentQuickLaunch(props, links);
            }
        }
        return {
            key: "QuickLaunch" /* quickLaunch */,
            hasEditLink: this._hasEditNavPermission(),
            links: links
        };
    };
    /** Load extra link groups which are only used on smaller screens. */
    LeftNav.prototype._loadExtraLinkGroups = function (props) {
        var _this = this;
        // go ahead and mark that we have the groups, so we don't load them twice by accident
        this._hasLoadedExtraLinkGroups = true;
        var groups = this.state.groups;
        var pageContext = props.pageContext;
        // First get the hub nav, if applicable
        var hubNavPromise = _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_9__["Promise"].resolve();
        if (pageContext.hubSiteId) {
            var hubDataSource_1 = new _ms_odsp_datasources_lib_Hub__WEBPACK_IMPORTED_MODULE_13__["HubDataSource"](pageContext);
            if (props.hubSiteData) {
                // avoid the API call if data is already available
                hubNavPromise = new _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_9__["Promise"](function () {
                    _this._processHubData(props.hubSiteData, hubDataSource_1, pageContext, groups);
                });
            }
            else {
                // Get hub data, including the second call for publishing nav data if relevant
                hubNavPromise = hubDataSource_1.getHubData(true).then(function (hubData) {
                    _this._processHubData(hubData, hubDataSource_1, pageContext, groups);
                });
            }
        }
        hubNavPromise
            .then(function () {
            // Then get the top/global nav if relevant
            if (pageContext.isHubSite) {
                return undefined; // hub parent site never shows a top/global nav
            }
            if (pageContext.PublishingFeatureOn) {
                return _this._viewNavDataSource
                    .getMenuState({ providerName: "GlobalNavigationSwitchableProvider" /* publishingGlobalNav */ })
                    .then(function (globalNav) { return globalNav && globalNav.links; });
            }
            else {
                return _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_9__["Promise"].resolve(_ms_odsp_datasources_lib_ViewNav__WEBPACK_IMPORTED_MODULE_14__["ViewNavDataSource"].transformNodesToLinks(_this.props.globalNav));
            }
        })
            .then(function (links) {
            if (links && links.length && groups) {
                groups.push({
                    links: links,
                    key: "GlobalNav" /* globalNav */,
                    mobileWebOnly: true
                });
                _this.forceUpdate();
            }
        });
    };
    LeftNav.prototype._processHubData = function (hubData, hubDataSource, pageContext, groups) {
        var navigation = hubData && hubData.navigation;
        if (!navigation || !navigation.length) {
            return;
        }
        var hubGroup = Object(_ms_odsp_shared_react_lib_components_HubNav_HubNavHelpers__WEBPACK_IMPORTED_MODULE_15__["getHubGroup"])(hubData, hubDataSource, pageContext, undefined /*overrideLinks*/, true /*mobileWeb*/);
        // Editing hub nav on small screens isn't implemented in sp-client currently
        // (but getHubGroup sets it based on user permissions)
        // !!! IF EDITING IS EVER ENABLED, there should also be a flag that allows it to be disabled in some cases
        // such as SP Home to avoid x-geo bugs
        hubGroup.hasEditLink = false;
        hubGroup.onEditClicked = undefined;
        hubGroup.mobileWebOnly = true;
        LeftNav._augmentHeaderLink(hubGroup.links);
        if (groups) {
            groups.unshift(hubGroup);
        }
        Object(_ms_odsp_shared_react_lib_components_HubNav_HubNavHelpers__WEBPACK_IMPORTED_MODULE_15__["logHubRender"])(pageContext, true /*mobileWeb*/);
        this.forceUpdate();
    };
    /**
     * Add or remove the edit link from the quick launch group as appropriate based on
     * the current state. (This could easily be extended to handle all groups with edit links
     * and will probably move to odsp-common.)
     */
    LeftNav.prototype._updateEditLink = function (targetGroups) {
        var quickLaunchGroup = this._findLinkGroup(targetGroups, "QuickLaunch" /* quickLaunch */);
        if (!quickLaunchGroup || !quickLaunchGroup.hasEditLink) {
            return;
        }
        var state = this.state;
        var lastLink = quickLaunchGroup.links.slice(-1)[0];
        var canEdit = lastLink &&
            lastLink.name !== _ms_odsp_shared_react_lib_Nav__WEBPACK_IMPORTED_MODULE_11__["NavResx"].LoadingPlaceholder &&
            // tslint:disable-next-line:no-string-literal
            !(window['teamsCustomAppType'] === 'portals') &&
            !state.isSiteReadOnly;
        var hasEditLink = lastLink && lastLink.key === "-999" /* clientEdit */;
        if (canEdit && !hasEditLink) {
            // add Edit link if not already added
            quickLaunchGroup.links.push(
            // tslint:disable-next-line:no-any
            Object(_ms_odsp_shared_react_lib_Nav__WEBPACK_IMPORTED_MODULE_11__["getEditLink"])(this.props.pageContext, false /*hasIcon*/, this._onEditClicked));
        }
        else if (!canEdit && hasEditLink) {
            // Can't edit right now. Remove the link.
            quickLaunchGroup.links.pop();
        }
    };
    LeftNav.prototype._addSharedWithUsLink = function (groups) {
        if (groups &&
            groups[0].links &&
            groups[0].links.length > 3 &&
            groups[0].links[3].key !== "-998" /* clientSharedWithUs */) {
            groups[0].links.splice(3, 0, {
                name: _LeftNav_resx__WEBPACK_IMPORTED_MODULE_22__["SharedWithUs"],
                key: "-998" /* clientSharedWithUs */,
                url: "#view=3",
                engagementName: 'SharedWithUs',
                altText: _LeftNav_resx__WEBPACK_IMPORTED_MODULE_22__["sharedWithUsAlt"]
            });
        }
    };
    LeftNav.prototype._hasEditNavPermission = function () {
        return (this.props.pageContext.webPermMasks !== undefined &&
            new _microsoft_sp_page_context__WEBPACK_IMPORTED_MODULE_8__["SPPermission"](this.props.pageContext.webPermMasks).hasPermission(_microsoft_sp_page_context__WEBPACK_IMPORTED_MODULE_8__["SPPermission"].manageLists));
    };
    LeftNav.prototype._fetchPublishingQuickLaunch = function () {
        var _this = this;
        this._viewNavDataSource
            .getMenuState({
            providerName: "CurrentNavigationSwitchableProvider" /* publishingQuickLaunch */
        })
            .then(function (srvgroup) {
            // Get the "Loading..." group and fill in its links
            var groups = _this.state.groups;
            if (groups) {
                var quickLaunchGroup = _this._findLinkGroup(groups, "QuickLaunch" /* quickLaunch */);
                // Check if nav group exists and has elements
                if (srvgroup) {
                    quickLaunchGroup.links = srvgroup.links || [];
                }
                else {
                    quickLaunchGroup.links = [];
                }
                _this.forceUpdate();
            }
        });
    };
    // will move to odsp-common
    LeftNav.prototype._findLinkGroup = function (groups, key) {
        return groups && groups.filter(function (group) { return group.key === key; })[0];
    };
    LeftNav.prototype._doTeamsPromoSetup = function () {
        var _this = this;
        var teamsProvider;
        Object(_loaders_spcx_teamify__WEBPACK_IMPORTED_MODULE_18__["loadTeamsProvider"])(this.props.pageContext)
            .then(function (provider) {
            teamsProvider = provider;
            return teamsProvider.getTeamsUrl();
        })
            .then(function (teamsUrl) {
            if (!teamsUrl) {
                // Doesn't have a team. See if we should show the teamify banner.
                teamsProvider.canTeamify().then(function (canTeamify) {
                    if (canTeamify) {
                        _this.setState({ canTeamify: true });
                    }
                });
            }
        });
    };
    /**
     * Ensure nav has focus when rendered on top
     */
    LeftNav.prototype._ensureNavHasFocus = function () {
        if (this._navComponent && this._navComponent.current && this._navComponent.current.focus) {
            this._navComponent.current.focus();
        }
    };
    LeftNav.prototype._applyInitialAudienceTargeting = function () {
        var _this = this;
        var audiencesDataSource = _ms_odsp_datasources_lib_ViewNav__WEBPACK_IMPORTED_MODULE_14__["AudiencesDataSource"].getInstance(this.props.pageContext);
        var quickLaunchGroup = this._findLinkGroup(this.state.groups, "QuickLaunch" /* quickLaunch */);
        audiencesDataSource
            .getCurrentUserMemberships('SiteNav')
            .then(function (memberships) {
            _this._audienceMemberships = memberships;
        })
            .catch(function () {
            // filter out any nodes with audience set
        })
            .then(function () {
            // finally
            quickLaunchGroup.links = _this._createQuickLaunchGroup(_this.props, _this.props.quickLaunch).links;
            if (!_this.props.pageContext.isHubSite ||
                audiencesDataSource.containsAudiences(quickLaunchGroup.links, 'links')) {
                // if it's hubsite, parse through all nav nodes, otherwise log.
                _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_9__["Engagement"].logData({ name: 'SiteNav.AudienceTargeting' });
            }
            _this.forceUpdate();
        });
    };
    LeftNav.logSource = _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_7__["_LogSource"].create('SP-Pages:LeftNav');
    return LeftNav;
}(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_3__["BaseComponent"]));



/***/ }),

/***/ "P2UA":
/*!*******************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/utilities-react@1.0.4_130dab4e7689328dbfb807b0c92c859a/node_modules/@ms/utilities-react/lib/hooks/useShallowMemo.js ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: useShallowMemo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useShallowMemo", function() { return useShallowMemo; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ms_utilities_objects_lib_areShallowEqual__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ms/utilities-objects/lib/areShallowEqual */ "VMIJ");


/**
 * Hook which evaluates the given expression only if the given deps object is shallow-different than
 * for the previous invocation of the hook.
 * This is essentially `React.useMemo`, except it shallow-compares a single deps object
 * rather than an array of deps values.
 * @public
 */
function useShallowMemo(getValue, deps) {
    var ref = react__WEBPACK_IMPORTED_MODULE_0__["useRef"]();
    if (Object(_ms_utilities_objects_lib_areShallowEqual__WEBPACK_IMPORTED_MODULE_1__["areShallowDifferent"])(ref.current, deps, { debug: true })) {
        ref.current = deps;
    }
    return react__WEBPACK_IMPORTED_MODULE_0__["useMemo"](getValue, [ref.current]);
}
//# sourceMappingURL=useShallowMemo.js.map

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

/***/ "PRDY":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-shared-react@47.12.13_d89e40c38ccaa8bd6af6488f37cb196d/node_modules/@ms/odsp-shared-react/lib/components/CompositeHeader/subComponents/ShareDialog.js ***!
  \**********************************************************************************************************************************************************************************************************************/
/*! exports provided: ShareDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShareDialog", function() { return ShareDialog; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ReactDeferredComponent_ReactDeferredComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ReactDeferredComponent/ReactDeferredComponent */ "+3tZ");



var ShareDialog = function (props) {
    var shareIFrameProps = {
        url: props.shareButton.url,
        title: props.title,
        shareLabel: props.shareButton.shareLabel,
        shareVisible: true,
        onClose: props.onCloseCallback,
        frameClass: 'ShareFrame'
    };
    var deferredProps = {
        modulePath: '../ShareIFrame',
        moduleLoader: {
            load: function (modulePath) {
                // string path must NOT be a variable here
                return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(3), __webpack_require__.e(6), __webpack_require__.e(12)]).then(__webpack_require__.bind(null, /*! ../ShareIFrame */ "YjIr")).then(function (shareIFrame) {
                    return { '../ShareIFrame': shareIFrame };
                });
            },
            parse: function (module) { return module['../ShareIFrame'] && module['../ShareIFrame'].ShareIFrame; }
        },
        customWaiter: props.deferredWaiter,
        props: shareIFrameProps
    };
    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ReactDeferredComponent_ReactDeferredComponent__WEBPACK_IMPORTED_MODULE_2__["ReactDeferredComponent"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, deferredProps));
};
//# sourceMappingURL=ShareDialog.js.map

/***/ }),

/***/ "PayJ":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-datasources@45.13.10_e509c819ab980023b76e5746ec0fc9e2/node_modules/@ms/odsp-datasources/lib/dataSources/base/DataRequestor.js ***!
  \**********************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ms/odsp-core-bundle */ "K9kD");
/* harmony import */ var _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__["DataRequestor"]; });

// Loading @ms/odsp-datasources/./lib/dataSources/base/DataRequestor.js



/***/ }),

/***/ "Pk8u":
/*!**********************************************!*\
  !*** external "@microsoft/sp-lodash-subset" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_Pk8u__;

/***/ }),

/***/ "Q+fs":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-datasources@45.13.10_e509c819ab980023b76e5746ec0fc9e2/node_modules/@ms/odsp-datasources/lib/dataSources/audienceTargeting/AudiencesDataSource.js ***!
  \*****************************************************************************************************************************************************************************************************************/
/*! exports provided: AudiencesDataSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AudiencesDataSource", function() { return AudiencesDataSource; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ms_audience_targeting_lib_AudienceTargeting__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ms/audience-targeting/lib/AudienceTargeting */ "W9wO");
/* harmony import */ var _ms_odsp_utilities_lib_async_Promise__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ms/odsp-utilities/lib/async/Promise */ "7Ihg");
/* harmony import */ var _ms_odsp_utilities_lib_guid_Guid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ms/odsp-utilities/lib/guid/Guid */ "vo05");
/* harmony import */ var _ms_odsp_utilities_lib_killswitch_Killswitch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ms/odsp-utilities/lib/killswitch/Killswitch */ "QUgr");
/* harmony import */ var _base_PersistentRequestCache__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../base/PersistentRequestCache */ "MLtZ");
/* harmony import */ var _base_DataRequestor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../base/DataRequestor */ "PayJ");







var GetMembershipEndPoint = '/_api/SP.Publishing.SitePageService.GetCurrentUserMemberships';
var GUID_STRING_LEN = 36;
var TWO_HOURS_CACHE_TIME = 1000 * 60 * 60 * 2; // 2 hours
var AudiencesDataSource = /** @class */ (function () {
    /**
     * @deprecated Use `AudiencesDataSource.getInstance` to retrieve data source instance.
     * Change constructor to private after all consumers are updated.
     */
    function AudiencesDataSource(pageContext) {
        var _this = this;
        this._getDataFromAPI = function (apiUrl, scenario) {
            var paramsForGetData = {
                url: apiUrl,
                qosName: scenario
                    ? "getUserMembershipsForAudienceTargeting." + scenario
                    : 'getUserMembershipsForAudienceTargeting',
                cacheRequestKey: _this._cacheRequestKey,
                parseResponse: function (responseText) {
                    return (responseText && JSON.parse(responseText).value) || [];
                },
                method: 'GET',
                additionalHeaders: { 'ODATA-VERSION': '4.0', Accept: '*/*, application/json; odata.metadata=minimal' },
                contentType: 'application/json; odata.metadata=minimal',
                maxRetries: 1
            };
            return _this._dataRequestor.getData(paramsForGetData);
        };
        this._pageContext = pageContext;
        this._dataRequestor = new _base_DataRequestor__WEBPACK_IMPORTED_MODULE_6__["DataRequestor"]({ qosName: 'AudiencesDataSource' }, { pageContext: pageContext });
        this._cache = new _base_PersistentRequestCache__WEBPACK_IMPORTED_MODULE_5__["PersistentRequestCache"]({
            id: 'AudiencesDataSource',
            cacheType: 0 /* localStorage */
        }, {
            pageContext: pageContext
        });
        // cache by user instead of web
        this._cacheRequestKey = pageContext.aadUserId || pageContext.userLoginName;
    }
    AudiencesDataSource.getInstance = function (pageContext) {
        if (isCacheAudiencesDataSourceInstanceKillSwitchActivated()) {
            return new AudiencesDataSource(pageContext);
        }
        var userId = pageContext.aadUserId || pageContext.userLoginName;
        if (!AudiencesDataSource._instances[userId]) {
            AudiencesDataSource._instances[userId] = new AudiencesDataSource(pageContext);
        }
        return AudiencesDataSource._instances[userId];
    };
    /**
     * Check if any item in the array contains valid audiences value.
     * If the `recursiveKey` is provided, it will check recursively on that item field.
     */
    AudiencesDataSource.prototype.containsAudiences = function (items, recursiveKey) {
        if (!items) {
            return false;
        }
        var filteredLinks = items.filter(doesItemContainAudiences);
        if (filteredLinks.length > 0) {
            return true;
        }
        if (recursiveKey) {
            for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
                var item = items_1[_i];
                // @ts-ignore TypeScript does not recognize the type of `item[recursiveKey]` is `T[]`
                if (this.containsAudiences(item[recursiveKey], recursiveKey)) {
                    return true;
                }
            }
        }
        return false;
    };
    /**
     * Check whether links contains audience targeted node recursively.
     * @deprecated Use the `containsAudiences` from instance.
     */
    AudiencesDataSource.containsAudienceTargetedNode = function (links) {
        var _this = this;
        if (!links) {
            return false;
        }
        var filteredLinks = links.filter(doesItemContainAudiences);
        if (filteredLinks.length > 0) {
            return true;
        }
        return links.filter(function (link) { return _this.containsAudienceTargetedNode(link.links); }).length > 0;
    };
    /**
     * Save audience targeting toggle boolean.
     * @deprecated Use the same method from EditNavDataSource. Remove it when graduate c9bcad44-81c8-4486-8030-32482a73a942 kill switch.
     */
    AudiencesDataSource.prototype.saveAudienceTargetSetting = function (checked) {
        var _this = this;
        var apiUrl = this._pageContext.webAbsoluteUrl + '/_api/web';
        var paramsForGetData = {
            bypassCache: true,
            url: apiUrl,
            qosName: 'saveNavAudienceTargetingEnabled',
            method: 'POST',
            additionalHeaders: {
                'X-HTTP-Method': 'MERGE'
            },
            additionalPostData: JSON.stringify({
                NavAudienceTargetingEnabled: checked,
                __metadata: { type: 'SP.Web' }
            })
        };
        return this._cache.getDataUtilizingCache({
            cacheRequestKey: this._cacheRequestKey,
            cachingStrategy: 0 /* useCacheAndUpdateInTheBackground */,
            cacheTimeoutTime: isCacheAudienceForTwoHoursKillSwitchActivated() ? undefined : TWO_HOURS_CACHE_TIME,
            getData: function () { return _this._dataRequestor.getData(paramsForGetData); }
        });
    };
    /**
     * Check web property from page context to determine whether nav audience targeting is enabled.
     * @deprecated Use `isNavAudienceTargetedEnabled` method from `ViewNavDataSource` instance.
     */
    AudiencesDataSource.prototype.isAudienceTargetedNavEnabledBasedOnWebProperty = function () {
        if (this._pageContext && this._pageContext.webPropertyFlags2 === undefined) {
            // The webPropertyFlags2 is not available on SP Start page, we fallback to isAudienceTargeted field.
            return Boolean(this._pageContext &&
                this._pageContext.navigationInfo &&
                this._pageContext.navigationInfo.isAudienceTargeted);
        }
        return Boolean(this._pageContext &&
            this._pageContext.webPropertyFlags2 &&
            (this._pageContext.webPropertyFlags2 & AudiencesDataSource.NAV_AUDIENCE_TARGETING_ENABLED) !== 0x00);
    };
    /**
     * Filter items based on current user's group memberships.
     * If the `recursiveKey` is provided, it will filter recursively on that item field.
     */
    AudiencesDataSource.prototype.filter = function (scenario, items, recursiveKey) {
        var _this = this;
        if (!isUseAudienceComponentActivated()) {
            return _ms_audience_targeting_lib_AudienceTargeting__WEBPACK_IMPORTED_MODULE_1__["AudienceTargeting"].getInstance(this._getDataFromAPI).filter(this._cacheRequestKey, this._pageContext.webAbsoluteUrl, scenario, items, recursiveKey);
        }
        else {
            if (!items) {
                return _ms_odsp_utilities_lib_async_Promise__WEBPACK_IMPORTED_MODULE_2__["default"].resolve(undefined);
            }
            return this.getCurrentUserMemberships(scenario)
                .then(function (memberships) { return _this.filterWithMembership(memberships, items, recursiveKey); })
                .catch(function () { return _this.filterWithMembership([], items, recursiveKey); });
        }
    };
    /**
     * Filter items based on given memberships
     * @deprecated Use the `filterWithMembership` from instance.
     */
    AudiencesDataSource.filterItemsWithMemberships = function (items, memberships) {
        return AudiencesDataSource._filterRecursively(new Set(memberships), items);
    };
    /**
     * Filter items based on the given memberships.
     * If the `recursiveKey` is provided, it will filter recursively on that item field.
     */
    AudiencesDataSource.prototype.filterWithMembership = function (memberships, items, recursiveKey) {
        var _this = this;
        if (!isUseAudienceComponentActivated()) {
            return _ms_audience_targeting_lib_AudienceTargeting__WEBPACK_IMPORTED_MODULE_1__["AudienceTargeting"].getInstance(this._getDataFromAPI).filterWithMembership(memberships, items, recursiveKey);
        }
        else {
            if (!items) {
                return items;
            }
            // One item is targeted if any of the following two conditions are met:
            // 1. The item does not contain any audiences value.
            // 2. The item audiences match any value in the memberships.
            var targetedItems = items.filter(function (item) { return !doesItemContainAudiences(item) || doesItemMatchAudiences(item, memberships); });
            if (recursiveKey) {
                targetedItems = targetedItems.map(function (item) {
                    var _a;
                    return (Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, item), (_a = {}, _a[recursiveKey] = _this.filterWithMembership(memberships, item[recursiveKey], recursiveKey), _a)));
                });
            }
            return targetedItems;
        }
    };
    /**
     * Filter navigation links based on given memberships
     * @deprecated Use the `filterWithMembership` from instance.
     */
    AudiencesDataSource.filterLinksWithMemberships = function (links, memberships) {
        return AudiencesDataSource._filterRecursively(new Set(memberships), links, function (link) { return link.links; }, function (link, links) { return (Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, link), { links: links })); });
    };
    /**
     * Get person group id from people picker result
     * @param person person returned from the people picker control
     * @returns person group id
     */
    AudiencesDataSource.getGroupObjectId = function (person) {
        if (person.userId && person.userId.length >= GUID_STRING_LEN) {
            return person.userId.substr(person.userId.length - GUID_STRING_LEN);
        }
        else {
            return undefined;
        }
    };
    /**
     * Get the current user's group membership used by audience filtering.
     */
    AudiencesDataSource.prototype.getCurrentUserMemberships = function (scenario) {
        var _this = this;
        var baseUrl = this._pageContext.webAbsoluteUrl;
        // Use the current domain as the base URL to fix the home site membership call.
        // We need to make sure the domain match current's site URL to avoid cross-domain violation.
        if (window &&
            window.location &&
            window.location.origin &&
            baseUrl.indexOf(window.location.origin) === -1) {
            baseUrl = window.location.origin;
        }
        if (!isUseAudienceComponentActivated()) {
            return _ms_audience_targeting_lib_AudienceTargeting__WEBPACK_IMPORTED_MODULE_1__["AudienceTargeting"].getInstance(this._getDataFromAPI).getCurrentUserMemberships(this._cacheRequestKey, baseUrl, scenario);
        }
        else {
            var queryString = scenario ? "?scenario='" + scenario + "'" : '';
            var apiUrl = baseUrl + GetMembershipEndPoint + queryString;
            var paramsForGetData_1 = {
                url: apiUrl,
                qosName: scenario
                    ? "getUserMembershipsForAudienceTargeting." + scenario
                    : 'getUserMembershipsForAudienceTargeting',
                cacheRequestKey: this._cacheRequestKey,
                parseResponse: function (responseText) {
                    return (responseText && JSON.parse(responseText).value) || [];
                },
                method: 'GET',
                additionalHeaders: {
                    'ODATA-VERSION': '4.0',
                    Accept: '*/*, application/json; odata.metadata=minimal'
                },
                contentType: 'application/json; odata.metadata=minimal',
                maxRetries: 1
            };
            return this._cache.getDataUtilizingCache({
                cacheRequestKey: this._cacheRequestKey,
                cachingStrategy: 0 /* useCacheAndUpdateInTheBackground */,
                cacheTimeoutTime: isCacheAudienceForTwoHoursKillSwitchActivated() ? undefined : TWO_HOURS_CACHE_TIME,
                getData: function () { return _this._dataRequestor.getData(paramsForGetData_1); }
            });
        }
    };
    /**
     * Helper function to recursively filter out audiences targeted values with given user group memberships.
     * @deprecated We don't need this helper function after removing other deprecated methods.
     */
    AudiencesDataSource._filterRecursively = function (memberships, values, recursiveGetter, recursiveSetter) {
        if (!values) {
            return values;
        }
        // The value is targeted if any of the following two conditions are met:
        // 1. The value does not specify the audiences.
        // 2. The value does specify the audiences and the given user group memberships match any of the specified audiences.
        var targetedValues = values.filter(function (v) { var _a; return !doesItemContainAudiences(v) || ((_a = v.audiences) === null || _a === void 0 ? void 0 : _a.some(function (a) { return memberships.has(a); })); });
        // If the recursive getter and setter are provided, recursively checks the values in the array.
        if (recursiveGetter && recursiveSetter) {
            targetedValues = targetedValues.map(function (value) {
                var originalArray = recursiveGetter(value);
                var targetedArray = AudiencesDataSource._filterRecursively(memberships, originalArray, recursiveGetter, recursiveSetter);
                return recursiveSetter(value, targetedArray);
            });
        }
        return targetedValues;
    };
    /** @deprecated Remove it when graduate the CheckNavAudienceTargetInViewNav kill switch (71980d68-1e8b-44e4-84a5-19370f97ec10) */
    AudiencesDataSource.NAV_AUDIENCE_TARGETING_ENABLED = 0x00000000000800000;
    AudiencesDataSource._instances = {};
    return AudiencesDataSource;
}());

function doesItemContainAudiences(item) {
    return Boolean(item.audiences && item.audiences.length > 0 && item.audiences[0] !== _ms_odsp_utilities_lib_guid_Guid__WEBPACK_IMPORTED_MODULE_3__["default"].Empty);
}
function doesItemMatchAudiences(item, memberships) {
    var audiences = item.audiences;
    if (!audiences) {
        return false;
    }
    for (var index = 0; index < audiences.length; index++) {
        if (memberships.indexOf(audiences[index]) !== -1) {
            return true;
        }
    }
    return false;
}
function isCacheAudiencesDataSourceInstanceKillSwitchActivated() {
    return _ms_odsp_utilities_lib_killswitch_Killswitch__WEBPACK_IMPORTED_MODULE_4__["Killswitch"].isActivated('f7fd618b-1552-46ab-a5ed-482958f81075'
    /* '2020-09-17', 'Make audiences data source as singleton on user ID' */
    );
}
function isCacheAudienceForTwoHoursKillSwitchActivated() {
    return _ms_odsp_utilities_lib_killswitch_Killswitch__WEBPACK_IMPORTED_MODULE_4__["Killswitch"].isActivated('463ac4ec-c850-4547-aaf4-9b4c8992d79e'
    /* '2020-10-23', 'Cache the audience membership only for 2 hours' */
    );
}
function isUseAudienceComponentActivated() {
    return _ms_odsp_utilities_lib_killswitch_Killswitch__WEBPACK_IMPORTED_MODULE_4__["Killswitch"].isActivated('45b0162c-3bdb-469a-888b-cf1a1961187f'
    /* '2020-12-07', 'Use shared audience-targeting component' */
    );
}
//# sourceMappingURL=AudiencesDataSource.js.map

/***/ }),

/***/ "QCAU":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/shared-react-web-templates@0.1.240_078bb01e0c4e433dbeb6410f4127eb9f/node_modules/@ms/shared-react-web-templates/lib/firstRunDialog/WebTemplatesGalleryFirstRunDialogLoader.js ***!
  \*****************************************************************************************************************************************************************************************************************************************/
/*! exports provided: WebTemplatesGalleryFirstRunDialogLoader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebTemplatesGalleryFirstRunDialogLoader", function() { return WebTemplatesGalleryFirstRunDialogLoader; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ms_items_view_lib_private_utilities_components_Async__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ms/items-view/lib/private/utilities/components/Async */ "uEI4");



var WebTemplatesGalleryFirstRunDialog = Object(_ms_items_view_lib_private_utilities_components_Async__WEBPACK_IMPORTED_MODULE_2__["asAsync"])(function () { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(void 0, void 0, void 0, function () {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, Promise.all(/*! import() | shared-react-webtemplatesgalleryfirstrundialogLoader */[__webpack_require__.e(0), __webpack_require__.e(3), __webpack_require__.e("vendors~shared-react-webtemplatesgalleryf~36956f54"), __webpack_require__.e("vendors~shared-react-webtemplatesgalleryf~b5cc52d2")]).then(__webpack_require__.bind(null, /*! ./WebTemplatesGalleryFirstRunDialog */ "awAE"))];
            case 1: return [2 /*return*/, _a.sent()];
        }
    });
}); });
var WebTemplatesGalleryFirstRunDialogLoader = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(WebTemplatesGalleryFirstRunDialogLoader, _super);
    function WebTemplatesGalleryFirstRunDialogLoader(props) {
        return _super.call(this, props) || this;
    }
    WebTemplatesGalleryFirstRunDialogLoader.prototype.render = function () {
        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](WebTemplatesGalleryFirstRunDialog, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.props));
    };
    return WebTemplatesGalleryFirstRunDialogLoader;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));

//# sourceMappingURL=WebTemplatesGalleryFirstRunDialogLoader.js.map

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

/***/ "Qiuu":
/*!********************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/FocusTrapZone.js ***!
  \********************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/office-ui-fabric-react-bundle */ "KL1q");
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
// Loading office-ui-fabric-react/./lib/FocusTrapZone.js


/***/ }),

/***/ "Qjmx":
/*!***********************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-datasources@45.13.10_e509c819ab980023b76e5746ec0fc9e2/node_modules/@ms/odsp-datasources/lib/ViewNav.js ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: ViewNavDataSource, isRefineAudienceTargetKillSwitchActivated, NavNodeKeys, NavigationProvider, AudiencesDataSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dataSources_editNav_ViewNavDataSource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dataSources/editNav/ViewNavDataSource */ "NuUw");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ViewNavDataSource", function() { return _dataSources_editNav_ViewNavDataSource__WEBPACK_IMPORTED_MODULE_0__["ViewNavDataSource"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isRefineAudienceTargetKillSwitchActivated", function() { return _dataSources_editNav_ViewNavDataSource__WEBPACK_IMPORTED_MODULE_0__["isRefineAudienceTargetKillSwitchActivated"]; });

/* harmony import */ var _dataSources_editNav_IEditNavDataSource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dataSources/editNav/IEditNavDataSource */ "ZH1b");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NavNodeKeys", function() { return _dataSources_editNav_IEditNavDataSource__WEBPACK_IMPORTED_MODULE_1__["NavNodeKeys"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NavigationProvider", function() { return _dataSources_editNav_IEditNavDataSource__WEBPACK_IMPORTED_MODULE_1__["NavigationProvider"]; });

/* harmony import */ var _dataSources_audienceTargeting_AudiencesDataSource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dataSources/audienceTargeting/AudiencesDataSource */ "Q+fs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AudiencesDataSource", function() { return _dataSources_audienceTargeting_AudiencesDataSource__WEBPACK_IMPORTED_MODULE_2__["AudiencesDataSource"]; });

// Everything related to the ViewNav datasource



//# sourceMappingURL=ViewNav.js.map

/***/ }),

/***/ "QtoV":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-shared-react@47.12.13_d89e40c38ccaa8bd6af6488f37cb196d/node_modules/@ms/odsp-shared-react/lib/utilities/TestUtilities.js ***!
  \*****************************************************************************************************************************************************************************************/
/*! exports provided: WaitForElementToExist, WaitFor, spAppBarClientWithExp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WaitForElementToExist", function() { return WaitForElementToExist; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WaitFor", function() { return WaitFor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "spAppBarClientWithExp", function() { return spAppBarClientWithExp; });
/* harmony import */ var _ms_odsp_utilities_lib_async_Promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ms/odsp-utilities/lib/async/Promise */ "7Ihg");
/* harmony import */ var _ms_odsp_utilities_lib_features_FeatureOverrides__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ms/odsp-utilities/lib/features/FeatureOverrides */ "iVgB");
/* harmony import */ var _ms_sp_experiments_lib_flightsonrails_SPExperiment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ms/sp-experiments/lib/flightsonrails/SPExperiment */ "D8Gs");



/**
 * Helper function that returns a promise that resolves once the specified element exists.
 * @param {any} searchObj DOM element to scope the search to.
 * @param {string} querySelector query selector to find the element. Examples: '.classname' or '#id' or 'div'.
 * @param {string} elementIndex optional parameter specifying which element on the page that matches the selector to find. Example:    elementIndex 1 with querySelector 'div' finds the second div on the page
 * @returns {Promise<void>} Promise that will resolve when the element has been found. If
 * the element is not found within the time limit of 500 ms an error is thrown.
 */
function WaitForElementToExist(searchObj, querySelector, elementIndex) {
    var count = 0;
    var frequency = 10; // check for element every 10 ms
    var maxTime = 500; // wait for a maximum of 500 ms
    var waitForElement = function (complete, error) {
        var waiter = setInterval(function () {
            if (count * frequency <= maxTime) {
                count++;
                var index = elementIndex ? elementIndex : 0;
                var element = searchObj.querySelectorAll(querySelector)[index];
                if (element) {
                    clearInterval(waiter);
                    complete();
                }
            }
            else {
                clearInterval(waiter);
                throw 'Timed out waiting for element with query selector ' + querySelector;
            }
        }, frequency);
    };
    return new _ms_odsp_utilities_lib_async_Promise__WEBPACK_IMPORTED_MODULE_0__["default"](waitForElement);
}
/**
 * Helper function that returns a promise that resolves once the specified condition happens.
 */
function WaitFor(checker) {
    var count = 0;
    var frequency = 10; // check for element every 10 ms
    var maxTime = 500; // wait for a maximum of 500 ms
    var waitFor = function (complete, error) {
        var waiter = setInterval(function () {
            if (count * frequency <= maxTime) {
                count++;
                if (checker()) {
                    clearInterval(waiter);
                    complete();
                }
            }
            else {
                clearInterval(waiter);
                throw 'Timed out waiting for checker ' + checker;
            }
        }, frequency);
    };
    return new _ms_odsp_utilities_lib_async_Promise__WEBPACK_IMPORTED_MODULE_0__["default"](waitFor);
}
/**
 * [TODO] Temporarily put it here, after experiment, remove all these
 * Helper function to check SPAppBarClient flight (https://spoflights.azurewebsites.net/Flight/Search?term=SPAppBarClient) + experimentation flight.
 * This will be shared by sp-client and odsp-next.
 * @param pageContext page context instance
 */
var SPAppBarClient = { ODB: 1399 };
function spAppBarClientWithExp(pageContext) {
    return (_ms_odsp_utilities_lib_features_FeatureOverrides__WEBPACK_IMPORTED_MODULE_1__["default"].isFeatureEnabled(SPAppBarClient) || Object(_ms_sp_experiments_lib_flightsonrails_SPExperiment__WEBPACK_IMPORTED_MODULE_2__["getVariantAndLogExposure"])(90077, pageContext) === 1);
}
//# sourceMappingURL=TestUtilities.js.map

/***/ }),

/***/ "S7vf":
/*!**********************************************!*\
  !*** ./lib/loaders/spcx-syntexDataSource.js ***!
  \**********************************************/
/*! exports provided: loadSyntexDataSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadSyntexDataSource", function() { return loadSyntexDataSource; });
/* harmony import */ var _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ms/odsp-utilities-bundle */ "y88i");
/* harmony import */ var _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_0__);

var syntexDataSourcePromise;
function loadSyntexDataSource(pageContext) {
    if (!syntexDataSourcePromise) {
        syntexDataSourcePromise = _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_0__["Promise"].all({
            syntexDataSource: Promise.all(/*! import() | spcx-syntexdatasource */[__webpack_require__.e("vendors~editnavchunk~spcx-panels~spcx-syn~6ba97101"), __webpack_require__.e("spcx-syntexdatasource")]).then(__webpack_require__.bind(null, /*! @ms/odsp-datasources/lib/dataSources/contentCenter/SyntexDataSource */ "z56S"))
        }).then(function (_a) {
            var syntexDataSource = _a.syntexDataSource;
            return new syntexDataSource.default(pageContext);
        });
    }
    return syntexDataSourcePromise;
}


/***/ }),

/***/ "SHpA":
/*!******************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/persistent-cache@1.0.9_@uifabric+utilities@7.33.2/node_modules/@ms/persistent-cache/lib/storage/PersistentCacheLocalStorage.js ***!
  \******************************************************************************************************************************************************************************************/
/*! exports provided: localStorageErrors, PersistentCacheLocalStorage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "localStorageErrors", function() { return localStorageErrors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersistentCacheLocalStorage", function() { return PersistentCacheLocalStorage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ms_utilities_guid_lib_Guid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ms/utilities-guid/lib/Guid */ "Ng1F");
/* harmony import */ var _utilities_Global__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utilities/Global */ "i/zE");



var PREFIX = 'PersistentCache';
var METADATAKEY = 'PersistentCache_metadata';
var localStorageErrors = {
    notSupported: 'localStorage is not supported'
};
var PersistentCacheLocalStorage = /** @class */ (function () {
    function PersistentCacheLocalStorage() {
        try {
            if ('localStorage' in _utilities_Global__WEBPACK_IMPORTED_MODULE_2__["global"] && _utilities_Global__WEBPACK_IMPORTED_MODULE_2__["global"].localStorage) {
                this._localStorage = _utilities_Global__WEBPACK_IMPORTED_MODULE_2__["global"].localStorage;
                if (!this._localStorage.getItem(METADATAKEY)) {
                    var metaData = {
                        id: _ms_utilities_guid_lib_Guid__WEBPACK_IMPORTED_MODULE_1__["generate"](),
                        created: Date.now(),
                        cacheType: 0 /* localStorage */
                    };
                    this._localStorage.setItem(METADATAKEY, JSON.stringify(metaData));
                }
            }
        }
        catch (ex) {
            // do nothing
        }
        if (!this._localStorage) {
            throw new Error(localStorageErrors.notSupported);
        }
    }
    PersistentCacheLocalStorage.prototype.freeSpace = function (app, size) {
        throw new Error('Method not implemented.');
    };
    /**
     * read data from local storage
     * @param key cache key
     */
    PersistentCacheLocalStorage.prototype.read = function (key) {
        return JSON.parse(this._localStorage.getItem(this._cacheKey(key)));
    };
    /**
     * write data ointo local storage
     */
    PersistentCacheLocalStorage.prototype.write = function (payload) {
        var key = payload.key, data = payload.data;
        if (typeof data !== 'undefined') {
            var dataToCache = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, payload), { lastModified: Date.now() });
            this._localStorage.setItem(this._cacheKey(key), JSON.stringify(dataToCache));
        }
        else {
            this._localStorage.removeItem(key);
        }
    };
    PersistentCacheLocalStorage.prototype.statistics = function () {
        var sizes = [];
        for (var key in this._localStorage) {
            if (key.indexOf(PREFIX) === 0) {
                var item = this._localStorage.getItem(key);
                sizes.push(item ? item.length : 0);
            }
        }
        var metaData = JSON.parse(this._localStorage.getItem(METADATAKEY));
        return {
            metaData: metaData,
            count: sizes.length,
            totalBytes: sizes.reduce(function (a, b) { return a + b; }, 0)
        };
    };
    PersistentCacheLocalStorage.prototype.rangeQuery = function (rangeQuery) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                return [2 /*return*/, undefined];
            });
        });
    };
    PersistentCacheLocalStorage.prototype._cacheKey = function (key) {
        return PREFIX + "_" + key;
    };
    return PersistentCacheLocalStorage;
}());

//# sourceMappingURL=PersistentCacheLocalStorage.js.map

/***/ }),

/***/ "SjTB":
/*!***************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/persistent-cache@1.0.9_@uifabric+utilities@7.33.2/node_modules/@ms/persistent-cache/lib/storage/PersistentCacheIndexedDB.js ***!
  \***************************************************************************************************************************************************************************************/
/*! exports provided: indexedDBErrors, PersistentCacheIndexedDB */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "indexedDBErrors", function() { return indexedDBErrors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersistentCacheIndexedDB", function() { return PersistentCacheIndexedDB; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ms_utilities_browser_lib_PlatformDetection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ms/utilities-browser/lib/PlatformDetection */ "u0q+");
/* harmony import */ var _ms_utilities_guid_lib_Guid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ms/utilities-guid/lib/Guid */ "Ng1F");
/* harmony import */ var _utilities_Global__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utilities/Global */ "i/zE");
/* harmony import */ var _ms_telemetry_manager_lib_events_Qos_event__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ms/telemetry-manager/lib/events/Qos.event */ "eT67");





var ResultType;
(function (ResultType) {
    ResultType["success"] = "success";
    ResultType["error"] = "error";
})(ResultType || (ResultType = {}));
// when you add a new index, do not forget to update IPersistentCacheRangeQueryOptions
var APP_INDEX_NAME = 'app';
var APP_LASTMODIFIED_INDEX_NAME = 'app_lastModified';
var APP_LASTREAD_INDEX_NAME = 'app_lastRead';
var APP_READS_INDEX_NAME = 'app_reads';
var DBNAME = 'ODSP_DB';
var DATATABLENAME = 'ODSP_DB_TABLE';
var KEY_INDEX_NAME = 'key';
var LASTMODIFIED_INDEX_NAME = 'lastModified';
var LASTREAD_INDEX_NAME = 'lastRead';
var METADATATABLENAME = 'ODSP_DB_METADATA_TABLE';
var METADATAKEY = 'database_metadata';
var PARENTKEY_INDEX_NAME = 'parentKey';
var PARENTKEY_APP_INDEX_NAME = 'parentKey_app';
var PARENTKEY_APP_LASTMODIFIED_INDEX_NAME = 'parentKey_app_lastModified';
var PARENTKEY_APP_LASTREAD_INDEX_NAME = 'parentKey_app_lastRead';
var PARENTKEY_APP_READS_INDEX_NAME = 'parentKey_app_reads';
var READS_INDEX_NAME = 'reads';
var VERSION = 4;
var platformDetection = new _ms_utilities_browser_lib_PlatformDetection__WEBPACK_IMPORTED_MODULE_1__["PlatformDetection"]();
var isGecko = platformDetection.isFirefox;
var indexedDBErrors = {
    notSupported: 'indexedDB is not supported'
};
var PersistentCacheIndexedDB = /** @class */ (function () {
    function PersistentCacheIndexedDB(logger) {
        if ('indexedDB' in _utilities_Global__WEBPACK_IMPORTED_MODULE_3__["global"] && _utilities_Global__WEBPACK_IMPORTED_MODULE_3__["global"].indexedDB) {
            this._logger = logger;
            if (!PersistentCacheIndexedDB._openDBPromise) {
                PersistentCacheIndexedDB._openDBPromise = this._openIndexedDB().then(function (db) {
                    PersistentCacheIndexedDB._db = db;
                    return db;
                });
            }
        }
        else {
            throw new Error(indexedDBErrors.notSupported);
        }
    }
    PersistentCacheIndexedDB.prototype.freeSpace = function (app, size) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var db, _a, _b;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _a = PersistentCacheIndexedDB;
                        _b = PersistentCacheIndexedDB._db;
                        if (_b) return [3 /*break*/, 2];
                        return [4 /*yield*/, PersistentCacheIndexedDB._openDBPromise];
                    case 1:
                        _b = (_c.sent());
                        _c.label = 2;
                    case 2:
                        db = (_a._db = _b);
                        return [2 /*return*/, new Promise(function (resolve, reject) {
                                var transaction = db.transaction([DATATABLENAME], 'readwrite');
                                var table = transaction.objectStore(DATATABLENAME);
                                var req = table.index(APP_LASTREAD_INDEX_NAME).openCursor();
                                req.onsuccess = function (ev) {
                                    var cursor = req.result;
                                    if (cursor) {
                                        if (cursor.value.app === app && size > 0) {
                                            size -= cursor.value.size;
                                            cursor.delete();
                                        }
                                        // Only continue if the required space size is not freed yet
                                        if (size > 0) {
                                            cursor.continue();
                                        }
                                        else {
                                            resolve();
                                        }
                                    }
                                    else {
                                        resolve();
                                    }
                                };
                                req.onerror = function (ev) {
                                    _this._errorHandling(ev, reject);
                                };
                            })];
                }
            });
        });
    };
    PersistentCacheIndexedDB.prototype.read = function (key) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                return [2 /*return*/, this._readInternal(DATATABLENAME, function (table) {
                        return table.get(key);
                    })];
            });
        });
    };
    PersistentCacheIndexedDB.prototype.rangeQuery = function (rangeQuery) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var async, db, _a, _b, transaction, table, resultKeys, index, range, direction, count, indexedTable, cursorRequest;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        async = {};
                        _a = PersistentCacheIndexedDB;
                        _b = PersistentCacheIndexedDB._db;
                        if (_b) return [3 /*break*/, 2];
                        return [4 /*yield*/, PersistentCacheIndexedDB._openDBPromise];
                    case 1:
                        _b = (_c.sent());
                        _c.label = 2;
                    case 2:
                        db = (_a._db = _b);
                        transaction = db.transaction([DATATABLENAME], 'readonly');
                        table = transaction.objectStore(DATATABLENAME);
                        resultKeys = [];
                        index = rangeQuery.index, range = rangeQuery.range, direction = rangeQuery.direction, count = rangeQuery.count;
                        indexedTable = table.index(index);
                        cursorRequest = indexedTable.openKeyCursor(range, direction);
                        cursorRequest.onerror = function (ev) {
                            _this._errorHandling(ev, async.reject);
                        };
                        cursorRequest.onsuccess = function (event) {
                            var cursor = event.target.result;
                            if (cursor) {
                                resultKeys.push(cursor.primaryKey);
                                if (resultKeys.length >= count) {
                                    async.resolve(resultKeys);
                                }
                                else {
                                    cursor.continue();
                                }
                            }
                            else {
                                async.resolve(resultKeys);
                            }
                        };
                        return [2 /*return*/, new Promise(function (resolve, reject) {
                                async.resolve = resolve;
                                async.reject = reject;
                            })];
                }
            });
        });
    };
    /**
     * when there is no existing item in the DB with the same key, we add a new entry,
     * otherwise, we override existing entry with the same key
     */
    PersistentCacheIndexedDB.prototype.write = function (payload) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var key, data;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                key = payload.key, data = payload.data;
                if (typeof data !== 'undefined') {
                    return [2 /*return*/, this._writeInternal({
                            tableName: DATATABLENAME,
                            key: key,
                            row: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, payload), { lastModified: Date.now() })
                        })];
                }
                else {
                    // if parent key is provided delete existing cache entries using the parentkey
                    if (payload.parentKey !== undefined) {
                        return [2 /*return*/, this._deleteDataRows(payload.parentKey)];
                    }
                    // delete existing cache entry using key
                    return [2 /*return*/, this._writeInternal({
                            tableName: DATATABLENAME,
                            key: key,
                            row: undefined
                        })];
                }
                return [2 /*return*/];
            });
        });
    };
    PersistentCacheIndexedDB.prototype.statistics = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var metaData, sizes;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!this._dbMetaData) return [3 /*break*/, 2];
                        return [4 /*yield*/, this._readAndSetMetadataDB()];
                    case 1:
                        metaData = _a.sent();
                        this._dbMetaData = metaData;
                        _a.label = 2;
                    case 2: return [4 /*yield*/, this._iterate(DATATABLENAME, function (data) { return data.size; })];
                    case 3:
                        sizes = _a.sent();
                        return [2 /*return*/, {
                                metaData: this._dbMetaData,
                                count: sizes.length,
                                totalBytes: sizes.reduce(function (a, b) { return a + b; }, 0)
                            }];
                }
            });
        });
    };
    PersistentCacheIndexedDB.prototype._openIndexedDB = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (PersistentCacheIndexedDB._db) {
                resolve(PersistentCacheIndexedDB._db);
            }
            else {
                // Gecko-only IndexedDB temp storage option:
                // var request = window.indexedDB.open("toDoList", {version: 4, storage: "temporary"});
                var openDBRequest_1 = isGecko
                    ? // indexedDB typing bug, firefox expects this signiture
                        indexedDB.open(DBNAME, { version: VERSION, storage: 'temporary' }) // tslint:disable-line:no-any
                    : indexedDB.open(DBNAME, VERSION);
                // these two event handlers act on the database being opened successfully, or not
                openDBRequest_1.onerror = function (ev) {
                    _this._errorHandling(ev, reject);
                };
                openDBRequest_1.onsuccess = function (event) {
                    var db = (PersistentCacheIndexedDB._db = openDBRequest_1.result);
                    resolve(db);
                };
                // This event handles the event whereby a new version of the database needs to be created
                // Either one has not been created before, or a new version number has been submitted via the
                // indexedDB.open call
                openDBRequest_1.onupgradeneeded = function (event) {
                    var database = event.target.result;
                    database.onerror = function (ev) {
                        _this._errorHandling(ev, reject);
                    };
                    var oldVersion = event.oldVersion;
                    _this._handleDBUpgrade(openDBRequest_1, database, oldVersion);
                };
            }
        });
    };
    PersistentCacheIndexedDB.prototype._handleDBUpgrade = function (openDBRequest, database, oldVersion) {
        var objectStore;
        // initial version, need to create new data store and
        if (oldVersion < 1) {
            // Create an objectStore for this database, data key is the key path
            objectStore = database.createObjectStore(DATATABLENAME, {
                keyPath: KEY_INDEX_NAME
            });
            // create an index of created time column
            objectStore.createIndex(LASTMODIFIED_INDEX_NAME, LASTMODIFIED_INDEX_NAME, {
                unique: false
            });
            objectStore.createIndex(READS_INDEX_NAME, READS_INDEX_NAME, {
                unique: false
            });
            // Create an metatdata table for this database
            database.createObjectStore(METADATATABLENAME, {
                keyPath: KEY_INDEX_NAME
            });
        }
        if (oldVersion < 2) {
            // Upgrading existing object store
            objectStore = objectStore || openDBRequest.transaction.objectStore(DATATABLENAME);
            objectStore.createIndex(APP_INDEX_NAME, APP_INDEX_NAME, {
                unique: false
            });
            objectStore.createIndex(LASTREAD_INDEX_NAME, LASTREAD_INDEX_NAME, {
                unique: false
            });
            objectStore.createIndex(APP_LASTREAD_INDEX_NAME, [APP_INDEX_NAME, LASTREAD_INDEX_NAME], {
                unique: false
            });
        }
        if (oldVersion < 3) {
            // Upgrading existing object store
            objectStore = objectStore || openDBRequest.transaction.objectStore(DATATABLENAME);
            // for version 3 and lower create the following indices
            objectStore.createIndex(APP_LASTMODIFIED_INDEX_NAME, [APP_INDEX_NAME, LASTMODIFIED_INDEX_NAME], {
                unique: false
            });
            objectStore.createIndex(APP_READS_INDEX_NAME, [APP_INDEX_NAME, READS_INDEX_NAME], {
                unique: false
            });
        }
        if (oldVersion < 4) {
            // Upgrading existing object store
            objectStore = objectStore || openDBRequest.transaction.objectStore(DATATABLENAME);
            // for latest versions create the following indices
            objectStore.createIndex(PARENTKEY_INDEX_NAME, PARENTKEY_INDEX_NAME, {
                unique: false
            });
            objectStore.createIndex(PARENTKEY_APP_INDEX_NAME, [PARENTKEY_INDEX_NAME, APP_INDEX_NAME], {
                unique: false
            });
            objectStore.createIndex(PARENTKEY_APP_LASTMODIFIED_INDEX_NAME, [PARENTKEY_INDEX_NAME, APP_INDEX_NAME, LASTMODIFIED_INDEX_NAME], {
                unique: false
            });
            objectStore.createIndex(PARENTKEY_APP_LASTREAD_INDEX_NAME, [PARENTKEY_INDEX_NAME, APP_INDEX_NAME, LASTREAD_INDEX_NAME], {
                unique: false
            });
            objectStore.createIndex(PARENTKEY_APP_READS_INDEX_NAME, [PARENTKEY_INDEX_NAME, APP_INDEX_NAME, READS_INDEX_NAME], {
                unique: false
            });
        }
    };
    PersistentCacheIndexedDB.prototype._readAndSetMetadataDB = function () {
        var _this = this;
        // for latest versions create the following indices
        var promise = this._readInternal(METADATATABLENAME, function (table) { return table.get(METADATAKEY); }).then(function (metadatafromcache) {
            if (!metadatafromcache) {
                var newMetaData_1 = {
                    id: _ms_utilities_guid_lib_Guid__WEBPACK_IMPORTED_MODULE_2__["generate"](),
                    created: Date.now(),
                    cacheType: 1 /* indexedDB */
                };
                return _this._writeInternal({
                    tableName: METADATATABLENAME,
                    key: METADATAKEY,
                    row: {
                        key: METADATAKEY,
                        data: newMetaData_1
                    }
                }).then(function () { return newMetaData_1; });
            }
            else {
                return metadatafromcache.data;
            }
        });
        return promise;
    };
    PersistentCacheIndexedDB.prototype._readInternal = function (tableName, readOp) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var db, _a, _b;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _a = PersistentCacheIndexedDB;
                        _b = PersistentCacheIndexedDB._db;
                        if (_b) return [3 /*break*/, 2];
                        return [4 /*yield*/, PersistentCacheIndexedDB._openDBPromise];
                    case 1:
                        _b = (_c.sent());
                        _c.label = 2;
                    case 2:
                        db = (_a._db = _b);
                        return [2 /*return*/, new Promise(function (resolve, reject) {
                                var logEndData = _this._logger({ name: 'PersistentCacheIDB.readInternal' });
                                var ioStart = Date.now();
                                var transaction = db.transaction([tableName], 'readonly');
                                var table = transaction.objectStore(tableName);
                                var req = readOp(table);
                                req.onsuccess = function (ev) {
                                    logEndData({
                                        resultType: _ms_telemetry_manager_lib_events_Qos_event__WEBPACK_IMPORTED_MODULE_4__["ResultTypeEnum"].Success,
                                        extraData: {
                                            io: Math.round(Date.now() - ioStart)
                                        }
                                    });
                                    resolve(req.result);
                                };
                                req.onerror = function (ev) {
                                    logEndData({
                                        resultType: _ms_telemetry_manager_lib_events_Qos_event__WEBPACK_IMPORTED_MODULE_4__["ResultTypeEnum"].Failure,
                                        extraData: {
                                            io: Math.round(Date.now() - ioStart)
                                        }
                                    });
                                    _this._errorHandling(ev, reject);
                                };
                            })];
                }
            });
        });
    };
    PersistentCacheIndexedDB.prototype._iterate = function (tableName, mapping) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var db, _a, _b, results;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _a = PersistentCacheIndexedDB;
                        _b = PersistentCacheIndexedDB._db;
                        if (_b) return [3 /*break*/, 2];
                        return [4 /*yield*/, PersistentCacheIndexedDB._openDBPromise];
                    case 1:
                        _b = (_c.sent());
                        _c.label = 2;
                    case 2:
                        db = (_a._db = _b);
                        results = [];
                        return [2 /*return*/, new Promise(function (resolve, reject) {
                                var transaction = db.transaction([tableName], 'readonly');
                                var table = transaction.objectStore(tableName);
                                var req = table.openCursor();
                                req.onsuccess = function (ev) {
                                    var cursor = req.result;
                                    if (cursor) {
                                        results.push(mapping(cursor.value));
                                        cursor.continue();
                                    }
                                    else {
                                        resolve(results);
                                    }
                                };
                                req.onerror = function (ev) {
                                    _this._errorHandling(ev, reject);
                                };
                            })];
                }
            });
        });
    };
    PersistentCacheIndexedDB.prototype._writeInternal = function (writeOptions) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var tableName, key, row, db, _a, _b;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        tableName = writeOptions.tableName, key = writeOptions.key, row = writeOptions.row;
                        _a = PersistentCacheIndexedDB;
                        _b = PersistentCacheIndexedDB._db;
                        if (_b) return [3 /*break*/, 2];
                        return [4 /*yield*/, PersistentCacheIndexedDB._openDBPromise];
                    case 1:
                        _b = (_c.sent());
                        _c.label = 2;
                    case 2:
                        db = (_a._db = _b);
                        // report on the success of the transaction completing, when everything is done
                        return [2 /*return*/, new Promise(function (resolve, reject) {
                                try {
                                    var transaction = db.transaction([tableName], 'readwrite');
                                    var table = transaction.objectStore(tableName);
                                    transaction.oncomplete = function () {
                                        // todo: add qos logging
                                    };
                                    transaction.onerror = function (ev) {
                                        _this._errorHandling(ev, reject);
                                    };
                                    var req = row ? table.put(row) : table.delete(key);
                                    req.onsuccess = function (ev) {
                                        resolve();
                                    };
                                    req.onerror = function (ev) {
                                        _this._errorHandling(ev, reject);
                                    };
                                }
                                catch (e) {
                                    throw e;
                                }
                            })];
                }
            });
        });
    };
    /**
     * Delete from data table all the entries of which parentKey starts with parentKeyPrefix
     * @param parentKeyPrefix the prefix for the parentKey
     */
    PersistentCacheIndexedDB.prototype._deleteDataRows = function (parentKeyPrefix) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var upperBound;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                upperBound = parentKeyPrefix.slice(0, parentKeyPrefix.length - 1) +
                    String.fromCharCode(parentKeyPrefix.charCodeAt(parentKeyPrefix.length - 1) + 1);
                return [2 /*return*/, this.rangeQuery({
                        index: PARENTKEY_INDEX_NAME,
                        range: IDBKeyRange.bound(parentKeyPrefix, upperBound, false, true),
                        direction: 'next'
                    })
                        .then(function (resultKeys) {
                        return Promise.all(resultKeys.map(function (key) {
                            return _this._writeInternal({
                                tableName: DATATABLENAME,
                                key: key,
                                row: undefined
                            });
                        }));
                    })
                        .then(function () {
                        return;
                    })];
            });
        });
    };
    PersistentCacheIndexedDB.prototype._errorHandling = function (ev, reject) {
        if (ev.type === ResultType.error) {
            var _a = ev.target.error, name_1 = _a.name, message = _a.message, code = _a.code;
            reject({
                name: name_1,
                message: message,
                code: code
            });
        }
    };
    return PersistentCacheIndexedDB;
}());

//# sourceMappingURL=PersistentCacheIndexedDB.js.map

/***/ }),

/***/ "TMge":
/*!********************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/utilities-objects@1.0.0/node_modules/@ms/utilities-objects/lib/is.js ***!
  \********************************************************************************************************************************/
/*! exports provided: is */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "is", function() { return is; });
function is(left, right) {
    // See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
    if (left === right) {
        // If `left === right`, then differentiate `-0` and `0` via division.
        return left !== 0 || 1 / left === 1 / right;
    }
    else {
        // If `left !== right`, then return false unless both `left` and `right` are `NaN`.
        // `NaN` can be detected via `self !== self`.
        return left !== left && right !== right;
    }
}
//# sourceMappingURL=is.js.map

/***/ }),

/***/ "UWqr":
/*!*********************************************!*\
  !*** external "@microsoft/sp-core-library" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_UWqr__;

/***/ }),

/***/ "VMIJ":
/*!*********************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/utilities-objects@1.0.0/node_modules/@ms/utilities-objects/lib/areShallowEqual.js ***!
  \*********************************************************************************************************************************************/
/*! exports provided: areShallowEqual, areShallowDifferent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "areShallowEqual", function() { return areShallowEqual; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "areShallowDifferent", function() { return areShallowDifferent; });
/* harmony import */ var _is__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./is */ "TMge");

/**
 * Determines whether or not two object are shallow-equal; that is, they have
 * all the same keys and each value matches using `===` or a provided comparer.
 *
 * The two objects being compared are expected to have the same prototype, or
 * else the results will not be consistent.
 *
 * This logic is inspired by the implementation by Facebook used in React:
 * https://github.com/facebook/fbjs/blob/master/packages/fbjs/src/core/shallowEqual.js
 *
 * @public
 */
function areShallowEqual(previous, next, comparer) {
    if (comparer === void 0) { comparer = _is__WEBPACK_IMPORTED_MODULE_0__["is"]; }
    return !areShallowDifferent(previous, next, { comparer: comparer });
}
/**
 * Determines whether or not two objects are shallow-different; that is, they
 * have any key which is unique or which does not satisfy a `===` or provided comparison.
 *
 * If `debug` is set to `true`, then this function outputs the difference determined by
 * the comparison.
 */
function areShallowDifferent(previous, next, options) {
    var _a;
    if (options === void 0) { options = {}; }
    var _b = options.comparer, comparer = _b === void 0 ? _is__WEBPACK_IMPORTED_MODULE_0__["is"] : _b, _c = options.debug, debug = _c === void 0 ? false : _c;
    if (Object(_is__WEBPACK_IMPORTED_MODULE_0__["is"])(previous, next)) {
        return false;
    }
    if (typeof previous !== 'object' || previous === null || typeof next !== 'object' || next === null) {
        return debug
            ? {
                previous: previous,
                next: next
            }
            : true;
    }
    var previousKeys = Object.keys(previous);
    var nextKeys = Object.keys(next);
    if (previousKeys.length !== nextKeys.length) {
        return debug
            ? {
                __keys: {
                    previous: previousKeys,
                    next: nextKeys
                }
            }
            : true;
    }
    for (var _i = 0, previousKeys_1 = previousKeys; _i < previousKeys_1.length; _i++) {
        var key = previousKeys_1[_i];
        if (!(key in next) || !comparer(previous[key], next[key], key)) {
            return debug
                ? (_a = {},
                    _a[key] = {
                        previous: previous[key],
                        next: next[key]
                    },
                    _a)
                : true;
        }
    }
    return false;
}
//# sourceMappingURL=areShallowEqual.js.map

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

/***/ "Vmng":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-shared-react@47.12.13_d89e40c38ccaa8bd6af6488f37cb196d/node_modules/@ms/odsp-shared-react/lib/components/HubNav/HubNavHelpers.js ***!
  \*************************************************************************************************************************************************************************************************/
/*! exports provided: logPrefix, logHubEvent, logHubRender, addClickHandlers, getHubGroup, canEditHubNav, trySyncTheme */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logPrefix", function() { return logPrefix; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logHubEvent", function() { return logHubEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logHubRender", function() { return logHubRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addClickHandlers", function() { return addClickHandlers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHubGroup", function() { return getHubGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "canEditHubNav", function() { return canEditHubNav; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "trySyncTheme", function() { return trySyncTheme; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ms_odsp_datasources_lib_interfaces_theming_SPVariantThemeType__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ms/odsp-datasources/lib/interfaces/theming/SPVariantThemeType */ "2R/J");
/* harmony import */ var _ms_odsp_datasources_lib_Permissions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ms/odsp-datasources/lib/Permissions */ "jH+c");
/* harmony import */ var _ms_odsp_utilities_lib_logging_events_Engagement_event__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ms/odsp-utilities/lib/logging/events/Engagement.event */ "cDPE");
/* harmony import */ var _Nav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Nav */ "+JAU");
/* harmony import */ var _ms_odsp_utilities_lib_killswitch_Killswitch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ms/odsp-utilities/lib/killswitch/Killswitch */ "QUgr");






// This file contains logging-related helpers for the hub nav.
/**
 * Log prefix for hub nav-related events.
 * @public
 */
var logPrefix = 'HubNav';
/**
 * Log a hub nav-related event with the appropriate prefix and extraData.
 *
 * @param tagName Tag name for the event (don't include the HubNav prefix)
 * @param pageContext Page context containing hub metadata
 * @param responsiveMode True if hub nav is displayed in the left nav (small screens),
 * false if it's displayed normally on the page
 * @param isIntentional True if the event is from a user interaction
 * @param extraData Additional extraData properties (hubSiteId is automatically included)
 *
 * @public
 */
function logHubEvent(tagName, pageContext, responsiveMode, isIntentional) {
    if (isIntentional === void 0) { isIntentional = true; }
    _ms_odsp_utilities_lib_logging_events_Engagement_event__WEBPACK_IMPORTED_MODULE_3__["Engagement"].logData({
        name: logPrefix + "." + tagName,
        isIntentional: isIntentional,
        extraData: {
            hubSiteId: pageContext && pageContext.hubSiteId,
            isHubSite: pageContext && pageContext.isHubSite,
            siteId: pageContext && pageContext.siteId,
            responsiveMode: !!responsiveMode
        }
    });
}
var _renderLastLoggedForSiteId;
/**
 * Log hub nav rendering. Will only be done on full page load or on nav to a different site.
 *
 * @param pageContext Page context containing hub metadata
 * @param responsiveMode True if hub nav is displayed in the left nav (small screens),
 * false if it's displayed normally on the page
 * @public
 */
function logHubRender(pageContext, responsiveMode) {
    if (pageContext.siteId !== _renderLastLoggedForSiteId) {
        // Only log rendering once per page load (per site)
        logHubEvent('Rendered', pageContext, responsiveMode, false /*isIntentional*/);
        _renderLastLoggedForSiteId = pageContext.siteId;
    }
}
/**
 * Add logging click handlers to links from the hub data.
 *
 * @param data Hub data to augment
 * @param pageContext Page context containing hub metadata
 * @param responsiveMode True if hub nav is displayed in the left nav (small screens),
 * false if it's displayed normally on the page
 * @public
 */
function addClickHandlers(data, pageContext, responsiveMode) {
    if (data && data.navigation) {
        // Add a click handler to each link for logging. (Make copies in case a different
        // control gets the same link objects and wants to add its own click handlers.)
        var processLinks_1 = function (links, level) {
            return links.map(function (link) {
                var logMessage = (data.megaMenuEnabled ? 'MegaMenu' : 'Cascade') + ".Click";
                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, link), { forceAnchor: true, onClick: function () {
                        logHubEvent("LinkLevel" + level + ".Click", pageContext, responsiveMode);
                        logHubEvent('Link.Click', pageContext, responsiveMode);
                        logHubEvent(logMessage, pageContext, responsiveMode);
                    }, links: link.links && processLinks_1(link.links, level + 1) });
            });
        };
        data.navigation = processLinks_1(data.navigation, 1);
    }
}
/**
 * Get a nav link group for use in the left nav or for launching edit nav.
 * It comes with click handlers that will invalidate hub data if the group is edited.
 * (This is only relevant on the parent site. The handlers won't directly save data, because the
 * edit nav handles that via saving to the top nav, which will then sync to the hub store.)
 * @public
 */
function getHubGroup(hubData, hubDataSource, pageContext, overrideLinks, responsiveMode) {
    // navigating to the hub site is not possible via the hub nav ISPNavLinkGroup node when in responsive mode
    var navigation;
    if (!pageContext.isHubSite && responsiveMode && !overrideLinks && hubData.navigation) {
        navigation = [
            {
                name: hubData.name,
                url: hubData.url
            }
        ].concat(hubData.navigation);
    }
    else {
        navigation = overrideLinks || hubData.navigation || [];
    }
    addClickHandlers(hubData, pageContext, responsiveMode);
    // Not all these properties are relevant if only getting a group to display in the edit nav
    // (not the standard left nav), but having them doesn't hurt anything.
    return {
        name: hubData.name,
        collapseByDefault: true,
        links: navigation,
        key: "HubNav" /* hubNav */,
        // Log group expand/collapse clicks (left nav only)
        onHeaderClick: function (ev, isCollapsing) {
            logHubEvent((isCollapsing ? 'Collapse' : 'Expand') + "Group.Click", pageContext, true /*isIntentional*/, responsiveMode);
        },
        getNewLinks: function (skipAudienceFiltering) {
            // Invalidate hub data and get updated links
            return hubDataSource
                .getHubData(hubData.usesMetadataNavigation, true /*forceUpdate*/, skipAudienceFiltering)
                .then(function (result) { return result.navigation; });
        },
        hasEditLink: canEditHubNav(pageContext),
        onEditClicked: function () {
            // Publishing nav is edited via a legacy settings page.
            // Invalidate hub data in case any edits are made.
            if (hubData.usesMetadataNavigation) {
                hubDataSource.getHubData(true /*loadMetadataNavigation*/, true /*forceUpdate*/).then(function () {
                    // TODO: since the edit link is displayed as a button, giving it a href does not
                    // cause navigation... That's actually convenient since we want to navigate after
                    // the XHRs to invalidate hub data return, but it should probably be fixed the
                    // right way (whatever that is) at some point...
                    // hack to get the appropriate URL
                    var editLink = Object(_Nav__WEBPACK_IMPORTED_MODULE_4__["getEditLink"])(pageContext, false, undefined);
                    window.location.href = editLink.url;
                });
            }
        },
        augmentLinks: function (links) {
            addClickHandlers(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, hubData), { navigation: links }), pageContext, responsiveMode);
        }
    };
}
/**
 * @public
 */
function canEditHubNav(pageContext) {
    // Only editable on the hub parent site, if the user has adequate permissions
    return (pageContext.isHubSite &&
        _ms_odsp_datasources_lib_Permissions__WEBPACK_IMPORTED_MODULE_2__["PermissionMask"].hasPermission(pageContext.webPermMasks, _ms_odsp_datasources_lib_Permissions__WEBPACK_IMPORTED_MODULE_2__["PermissionMask"].manageLists));
}
/**
 * @public
 */
function trySyncTheme(hubData, hubDataSource, pageContext) {
    var themeKey;
    var themedCssFolderUrl = pageContext.themedCssFolderUrl;
    var headerEmphasis = pageContext.headerEmphasis;
    if (themedCssFolderUrl) {
        var parts = themedCssFolderUrl.split('/');
        themeKey = parts[parts.length - 1];
    }
    //If the themeKey from hubData is null, don't sync
    if (hubData.themeKey) {
        var doesThemeMatch = hubData.themeKey === themeKey;
        var headerEmphasisKillSwitchActive = _ms_odsp_utilities_lib_killswitch_Killswitch__WEBPACK_IMPORTED_MODULE_5__["Killswitch"].isActivated('F08C0C24-8640-4814-8825-BC0EC630BAAC', '11/20/2019', 'HeaderEmphasisMatch');
        var doesHeaderEmphasisMatch = headerEmphasisKillSwitchActive
            ? hubData.headerEmphasis === headerEmphasis
            : _ms_odsp_datasources_lib_interfaces_theming_SPVariantThemeType__WEBPACK_IMPORTED_MODULE_1__["SPVariantThemeType"][headerEmphasis] === hubData.headerEmphasis;
        if (!doesThemeMatch || !doesHeaderEmphasisMatch) {
            hubDataSource.syncHubSiteTheme();
            logHubEvent('SyncHubSiteTheme', pageContext, false /*isIntentional*/);
        }
    }
}
//# sourceMappingURL=HubNavHelpers.js.map

/***/ }),

/***/ "W9wO":
/*!***********************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/audience-targeting@1.0.14_5d977624104b06c7bcaa2de974ff51f1/node_modules/@ms/audience-targeting/lib/AudienceTargeting.js ***!
  \***********************************************************************************************************************************************************************************/
/*! exports provided: AudienceTargeting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AudienceTargeting", function() { return AudienceTargeting; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ms_odsp_utilities_lib_async_Promise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ms/odsp-utilities/lib/async/Promise */ "7Ihg");
/* harmony import */ var _MembershipsCache__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MembershipsCache */ "y/6u");



var GetMembershipEndPoint = '/_api/SP.Publishing.SitePageService.GetCurrentUserMemberships';
/**
 * Audience targeting client handles fetching and caching memberships, and filtering items
 * base on memberships.
 *
 * Note: Please keep this component small, it is referenced by webparts, page components and
 * mobile MEE app.
 */
var AudienceTargeting = /** @class */ (function () {
    function AudienceTargeting(getData) {
        this._getData = getData;
    }
    AudienceTargeting.getInstance = function (getData) {
        if (!AudienceTargeting._instance) {
            AudienceTargeting._instance = new AudienceTargeting(getData);
        }
        return AudienceTargeting._instance;
    };
    /**
     * Filter items based on current user's group memberships.
     * If the `recursiveKey` is provided, it will filter recursively on that item field.
     */
    AudienceTargeting.prototype.filter = function (userId, webAbsoluteUrl, scenario, items, recursiveKey) {
        var _this = this;
        if (!items) {
            return _ms_odsp_utilities_lib_async_Promise__WEBPACK_IMPORTED_MODULE_1__["default"].resolve(undefined);
        }
        return this.getCurrentUserMemberships(userId, webAbsoluteUrl, scenario)
            .then(function (memberships) { return _this.filterWithMembership(memberships, items, recursiveKey); })
            .catch(function () { return _this.filterWithMembership([], items, recursiveKey); });
    };
    /**
     * Filter items based on the given memberships.
     * If the `recursiveKey` is provided, it will filter recursively on that item field.
     */
    AudienceTargeting.prototype.filterWithMembership = function (memberships, items, recursiveKey) {
        var _this = this;
        if (!items) {
            return items;
        }
        // One item is targeted if any of the following two conditions are met:
        // 1. The item does not contain any audiences value.
        // 2. The item audiences match any value in the memberships.
        var targetedItems = items.filter(function (item) { return !doesItemContainAudiences(item) || doesItemMatchAudiences(item, memberships); });
        if (recursiveKey) {
            targetedItems = targetedItems.map(function (item) {
                var _a;
                return (Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, item), (_a = {}, _a[recursiveKey] = _this.filterWithMembership(memberships, item[recursiveKey], recursiveKey), _a)));
            });
        }
        return targetedItems;
    };
    /**
     * Get the current user's group membership used by audience filtering.
     */
    AudienceTargeting.prototype.getCurrentUserMemberships = function (userId, webAbsoluteUrl, scenario) {
        var _this = this;
        var memberships = Object(_MembershipsCache__WEBPACK_IMPORTED_MODULE_2__["readMembershipsCache"])(userId);
        if (memberships) {
            return _ms_odsp_utilities_lib_async_Promise__WEBPACK_IMPORTED_MODULE_1__["default"].resolve(memberships);
        }
        else if (!this._getMembershipsPromise) {
            var queryString = scenario ? "?scenario='" + scenario + "'" : '';
            var apiUrl = webAbsoluteUrl + GetMembershipEndPoint + queryString;
            this._getMembershipsPromise = this._getData(apiUrl, scenario).then(function (data) {
                _this._getMembershipsPromise = undefined;
                if (data) {
                    Object(_MembershipsCache__WEBPACK_IMPORTED_MODULE_2__["writeMembershipsCache"])(userId, data);
                }
                return data;
            });
        }
        return this._getMembershipsPromise;
    };
    return AudienceTargeting;
}());

function doesItemContainAudiences(item) {
    return Boolean(item.audiences &&
        item.audiences.length > 0 &&
        // not using Guid.Empty to avoid reference to Guid
        item.audiences[0] !== '00000000-0000-0000-0000-000000000000');
}
function doesItemMatchAudiences(item, memberships) {
    var audiences = item.audiences;
    if (!audiences) {
        return false;
    }
    for (var index = 0; index < audiences.length; index++) {
        if (memberships.indexOf(audiences[index]) !== -1) {
            return true;
        }
    }
    return false;
}
//# sourceMappingURL=AudienceTargeting.js.map

/***/ }),

/***/ "Wrjt":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-shared-react@47.12.13_d89e40c38ccaa8bd6af6488f37cb196d/node_modules/@ms/odsp-shared-react/lib/components/CompositeHeader/CompositeHeader.Props.js ***!
  \******************************************************************************************************************************************************************************************************************/
/*! exports provided: FollowState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FollowState", function() { return FollowState; });
/**
 * An enumeration indicating follow state and in turn how the follow icon should be rendered.
 * @public
 */
var FollowState;
(function (FollowState) {
    /**
     * Renders an empty star indicating that the user is not following the site.
     */
    FollowState[FollowState["notFollowing"] = 0] = "notFollowing";
    /**
     * Renders an animation indicating that a state transition is taking place.
     */
    FollowState[FollowState["transitioning"] = 1] = "transitioning";
    /**
     * Renders a filled star indicated that the user is currently following the site.
     */
    FollowState[FollowState["followed"] = 2] = "followed";
})(FollowState || (FollowState = {}));
//# sourceMappingURL=CompositeHeader.Props.js.map

/***/ }),

/***/ "X+PM":
/*!*********************************************!*\
  !*** external "@microsoft/sp-page-context" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_X_PM__;

/***/ }),

/***/ "X7yh":
/*!*******************************************!*\
  !*** ./lib/loaders/spcx-webDataSource.js ***!
  \*******************************************/
/*! exports provided: loadWebDataSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadWebDataSource", function() { return loadWebDataSource; });
/* harmony import */ var _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ms/odsp-utilities-bundle */ "y88i");
/* harmony import */ var _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_0__);

var webDataSourcePromise;
var webInfo;
function loadWebDataSource(pageContext) {
    // Cache the instance only for the current web+site to be safe
    var newWebInfo = (pageContext.webId ? pageContext.webId : '') + (pageContext.siteId ? pageContext.siteId : '');
    if (webInfo !== newWebInfo) {
        webInfo = newWebInfo;
        webDataSourcePromise = _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_0__["Promise"].all({
            webDataSource: __webpack_require__.e(/*! import() | spcx-webdatasource */ "vendors~shared-react-webtemplatesgalleryf~36956f54").then(__webpack_require__.bind(null, /*! @ms/odsp-datasources/lib/Web */ "s50i"))
        }).then(function (_a) {
            var webDataSource = _a.webDataSource;
            return new webDataSource.WebDataSource(pageContext);
        });
    }
    return webDataSourcePromise;
}


/***/ }),

/***/ "XQ+C":
/*!*****************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-media@2.0.244/node_modules/@ms/odsp-media/dist/media/images/designPackage/teamSiteCustomized.png ***!
  \*****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "teamSiteCustomized_f5bcfc67ad38423cddcdf19f75fe92a3.png";

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

/***/ "YOlM":
/*!*****************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/utilities-react@1.0.4_130dab4e7689328dbfb807b0c92c859a/node_modules/@ms/utilities-react/lib/decorators/asAsync.js ***!
  \*****************************************************************************************************************************************************************************/
/*! exports provided: asAsync, isAsAsyncComponentType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "asAsync", function() { return asAsync; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isAsAsyncComponentType", function() { return isAsAsyncComponentType; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ms_utilities_async_lib_modules_getModuleDefaultOrModule__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ms/utilities-async/lib/modules/getModuleDefaultOrModule */ "qhAy");
/* harmony import */ var _hooks_useShallowMemo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hooks/useShallowMemo */ "P2UA");
/* harmony import */ var _ms_utilities_async_lib_wait_wait__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ms/utilities-async/lib/wait/wait */ "nGUS");





/**
 * If possible, use a WeakMap to maintain a cache of loaded components.
 * This can be used to synchronously render components that have already been loaded,
 * rather than having to wait for at least one async tick.
 */
var syncModuleCache = new WeakMap();
var pendingUpdates = new Map();
var loaderCache = new WeakMap(); // tslint:disable-line:no-any
function loadWithCache(loader) {
    var fromCache = loaderCache.get(loader);
    if (!fromCache) {
        loaderCache.set(loader, (fromCache = loader()
            .then(function (rawResult) {
            var component = Object(_ms_utilities_async_lib_modules_getModuleDefaultOrModule__WEBPACK_IMPORTED_MODULE_2__["getModuleDefaultOrModule"])(rawResult);
            syncModuleCache.set(loader, component);
            return component;
        })
            .catch(function (error) {
            // In case of error, evict the result from the cache so it can be retried.
            loaderCache.delete(loader);
            return Promise.reject(error);
        })));
    }
    return fromCache;
}
/**
 * Implementation of asAsync.
 * @public
 */
function asAsync(loader, options) {
    if (options === void 0) { options = {}; }
    var _a = options.useChildrenAsPlaceholder, useChildrenAsPlaceholder = _a === void 0 ? false : _a;
    var load = function () { return loadWithCache(loader); };
    var getComponent = function () {
        if (syncModuleCache.has(loader)) {
            return syncModuleCache.get(loader);
        }
    };
    function AsAsync(props) {
        var _this = this;
        var key = react__WEBPACK_IMPORTED_MODULE_1__["useState"](function () { return ({}); });
        var placeholder = props.placeholder, children = props.children, barrier = props.barrier, componentProps = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(props, ["placeholder", "children", "barrier"]);
        var finalComponentProps = Object(_hooks_useShallowMemo__WEBPACK_IMPORTED_MODULE_3__["useShallowMemo"])(function () { return componentProps; }, componentProps);
        var _a = react__WEBPACK_IMPORTED_MODULE_1__["useState"](function () { return getComponent(); }), Component = _a[0], setComponent = _a[1];
        var setComponentRef = react__WEBPACK_IMPORTED_MODULE_1__["useRef"](setComponent);
        var _b = react__WEBPACK_IMPORTED_MODULE_1__["useState"](), error = _b[0], setError = _b[1];
        var setErrorRef = react__WEBPACK_IMPORTED_MODULE_1__["useRef"](setError);
        react__WEBPACK_IMPORTED_MODULE_1__["useLayoutEffect"](function () {
            return function () {
                setComponentRef.current = undefined;
                setErrorRef.current = undefined;
                pendingUpdates.delete(key);
            };
        }, []);
        react__WEBPACK_IMPORTED_MODULE_1__["useLayoutEffect"](function () {
            // Whenever possible, process this effect during a React mounting cycle.
            // Any updated queued by other components will cause cascading updates, but
            // this is still preferable to flushing the DOM and performing a complete re-render
            // of the whole tree.
            if (pendingUpdates.size > 0) {
                var updates_2 = [];
                pendingUpdates.forEach(function (update) {
                    updates_2.push(update);
                });
                pendingUpdates.clear();
                for (var _i = 0, updates_1 = updates_2; _i < updates_1.length; _i++) {
                    var update = updates_1[_i];
                    update();
                }
            }
        });
        react__WEBPACK_IMPORTED_MODULE_1__["useLayoutEffect"](function () {
            if (!Component && !error) {
                (function () { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
                    var resultComponent, resultError, e_1, pendingUpdate;
                    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                _a.trys.push([0, 4, , 5]);
                                if (!barrier) return [3 /*break*/, 2];
                                return [4 /*yield*/, barrier];
                            case 1:
                                _a.sent();
                                _a.label = 2;
                            case 2: return [4 /*yield*/, load()];
                            case 3:
                                resultComponent = _a.sent();
                                return [3 /*break*/, 5];
                            case 4:
                                e_1 = _a.sent();
                                resultError = e_1;
                                return [3 /*break*/, 5];
                            case 5:
                                // Put the work to be done to update the component into a 'queue'
                                // so that other AsAsync components on the page could take on this work first.
                                pendingUpdates.set(key, function () {
                                    if (resultComponent) {
                                        if (setComponentRef.current) {
                                            setComponentRef.current(function () { return resultComponent; });
                                        }
                                    }
                                    else if (resultError) {
                                        if (setErrorRef.current) {
                                            setErrorRef.current(resultError);
                                        }
                                    }
                                });
                                // Yield to micro-tasks so that other promise callbacks have a chance to 'steal'
                                // the added work.
                                return [4 /*yield*/, Object(_ms_utilities_async_lib_wait_wait__WEBPACK_IMPORTED_MODULE_4__["wait"])(0)];
                            case 6:
                                // Yield to micro-tasks so that other promise callbacks have a chance to 'steal'
                                // the added work.
                                _a.sent();
                                pendingUpdate = pendingUpdates.get(key);
                                if (pendingUpdate) {
                                    // If the work is still pending for this component, process it.
                                    // Every component should minimally ensure that itself has updated.
                                    pendingUpdates.delete(key);
                                    pendingUpdate();
                                }
                                return [2 /*return*/];
                        }
                    });
                }); })();
            }
        }, []);
        return react__WEBPACK_IMPORTED_MODULE_1__["useMemo"](function () {
            if (error) {
                throw error;
            }
            if (Component) {
                return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](Component, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, finalComponentProps, { children: children }));
            }
            if (useChildrenAsPlaceholder) {
                return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, children);
            }
            if (placeholder) {
                return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, placeholder);
            }
            return null;
        }, [finalComponentProps, placeholder, children, Component, error]);
    }
    AsAsync.asAsync = {
        load: load,
        getComponent: getComponent,
        options: options
    };
    return AsAsync;
}
/**
 * Determines if a component type was created using the `asAsync` decorator.
 * @public
 */
function isAsAsyncComponentType(componentType) {
    return !!componentType.asAsync;
}
//# sourceMappingURL=asAsync.js.map

/***/ }),

/***/ "Z+U/":
/*!***************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/telemetry-manager@1.1.3/node_modules/@ms/telemetry-manager/lib/events/ResultTypeEnum.js ***!
  \***************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ms/odsp-core-bundle */ "K9kD");
/* harmony import */ var _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
// Loading @ms/telemetry-manager/./lib/events/ResultTypeEnum.js


/***/ }),

/***/ "Z/CY":
/*!********************************!*\
  !*** ./lib/common/Deferred.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


/**
 * Deferred wrapper for component
 *
 * @public
 */
var Deferred = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(Deferred, _super);
    function Deferred(props) {
        var _this = _super.call(this, props) || this;
        _this._unmounted = false;
        _this.state = {};
        return _this;
    }
    Deferred.prototype.componentWillUnmount = function () {
        this._unmounted = true;
    };
    Deferred.prototype.componentDidMount = function () {
        var _this = this;
        setTimeout(function () {
            var promise = _this.props.loader && _this.props.loader();
            if (promise && typeof promise.then === 'function') {
                promise.then(function (component) {
                    if (!_this._unmounted) {
                        _this.setState({ component: component });
                    }
                });
            }
        }, this.props.duration);
    };
    Deferred.prototype.render = function () {
        // If component doesn't exist then this will return false,
        // which will result in this component not rendering (the same as null)
        return !!this.state.component && react__WEBPACK_IMPORTED_MODULE_1__["createElement"](this.state.component, this.props.deferredProps);
    };
    return Deferred;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));
/* harmony default export */ __webpack_exports__["default"] = (Deferred);


/***/ }),

/***/ "ZH1b":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-datasources@45.13.10_e509c819ab980023b76e5746ec0fc9e2/node_modules/@ms/odsp-datasources/lib/dataSources/editNav/IEditNavDataSource.js ***!
  \******************************************************************************************************************************************************************************************************/
/*! exports provided: NavNodeKeys, NavigationProvider, EditNavLinkType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavNodeKeys", function() { return NavNodeKeys; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationProvider", function() { return NavigationProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditNavLinkType", function() { return EditNavLinkType; });
/** Special INavLink.key values */
var NavNodeKeys;
(function (NavNodeKeys) {
    /** Parent for the global/top nav nodes */
    NavNodeKeys["globalNavParent"] = "1002";
    /** Parent for the quick launch/left nav nodes */
    NavNodeKeys["quickLaunchParent"] = "1025";
    NavNodeKeys["globalNavHome"] = "2003";
    NavNodeKeys["subsites"] = "1026";
    NavNodeKeys["quickLaunchHome"] = "1031";
    NavNodeKeys["quickLaunchRecent"] = "1033";
    NavNodeKeys["siteContents"] = "1034";
    /** Parent node for the rest of the footer nav tree */
    NavNodeKeys["footerNavParent"] = "13b7c916-4fea-4bb2-8994-5cf274aeb530";
    /** Child node containing logo url */
    NavNodeKeys["footerNavLogo"] = "2e456c2e-3ded-4a6c-a9ea-f7ac4c1b5100";
    /** Child node containing footer name */
    NavNodeKeys["footerNavName"] = "7376cd83-67ac-4753-b156-6a7b3fa0fc1f";
    /** Child node containing footer navigation links */
    NavNodeKeys["footerNavLinks"] = "3a94b35f-030b-468e-80e3-b75ee84ae0ad";
    /** Child node containing fat footer nav sections */
    NavNodeKeys["footerNavSections"] = "47a59018-dcc3-4e98-a14e-146bc4001628";
    /** Key for recycle bin node added client-side */
    NavNodeKeys["clientRecycleBin"] = "-1000";
    /** Key for Edit node added client-side */
    NavNodeKeys["clientEdit"] = "-999";
    /** Key for shared with us node added client-side */
    NavNodeKeys["clientSharedWithUs"] = "-998";
    /** Key for clientToggleLeftNav button added client-side */
    NavNodeKeys["clientToggleLeftNav"] = "-997";
})(NavNodeKeys || (NavNodeKeys = {}));
/**
 * Standard names for server SiteMapProvider classes used to get nav data (only needed in modern
 * for publishing sites). This is a subset of StandardNavigationProviderNames from
 * sporel\cms\Publishing\OM\navigation\StandardNavigationSettings.cs.
 */
var NavigationProvider;
(function (NavigationProvider) {
    /** Publishing global/top navigation provider name */
    NavigationProvider["publishingGlobalNav"] = "GlobalNavigationSwitchableProvider";
    /** Publishing current/left navigation provider name */
    NavigationProvider["publishingQuickLaunch"] = "CurrentNavigationSwitchableProvider";
})(NavigationProvider || (NavigationProvider = {}));
var EditNavLinkType;
(function (EditNavLinkType) {
    /**
     * This is a traditional nav menu node.  If the URL is blank, then the node
     * acts as a menu caption with no hyperlink.
     */
    EditNavLinkType[EditNavLinkType["SimpleLink"] = 0] = "SimpleLink";
    /**
     * This is a special Taxonomy Nav menu node that defines a Friendly URL.
     */
    EditNavLinkType[EditNavLinkType["FriendlyUrl"] = 1] = "FriendlyUrl";
})(EditNavLinkType || (EditNavLinkType = {}));
//# sourceMappingURL=IEditNavDataSource.js.map

/***/ }),

/***/ "Zean":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-datasources@45.13.10_e509c819ab980023b76e5746ec0fc9e2/node_modules/@ms/odsp-datasources/lib/dataSources/hub/HubDataSource.js ***!
  \*********************************************************************************************************************************************************************************************/
/*! exports provided: HubSiteQueryOption, HubSiteJoinApprovalErrorCode, HubDataSource, default, isRefineHubNavAudienceLoggingKillSwitchActivated */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HubSiteQueryOption", function() { return HubSiteQueryOption; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HubSiteJoinApprovalErrorCode", function() { return HubSiteJoinApprovalErrorCode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HubDataSource", function() { return HubDataSource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isRefineHubNavAudienceLoggingKillSwitchActivated", function() { return isRefineHubNavAudienceLoggingKillSwitchActivated; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _editNav_ViewNavDataSource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../editNav/ViewNavDataSource */ "NuUw");
/* harmony import */ var _base_CachedDataSource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base/CachedDataSource */ "zpEg");
/* harmony import */ var _audienceTargeting_AudiencesDataSource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../audienceTargeting/AudiencesDataSource */ "Q+fs");
/* harmony import */ var _ms_odsp_utilities_lib_features_FeatureOverrides__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ms/odsp-utilities/lib/features/FeatureOverrides */ "iVgB");
/* harmony import */ var _ms_odsp_utilities_lib_async_Promise__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ms/odsp-utilities/lib/async/Promise */ "7Ihg");
/* harmony import */ var _ms_odsp_utilities_lib_encoding_UriEncoding__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ms/odsp-utilities/lib/encoding/UriEncoding */ "+35T");
/* harmony import */ var _ms_odsp_utilities_lib_guid_Guid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ms/odsp-utilities/lib/guid/Guid */ "vo05");
/* harmony import */ var _ms_odsp_utilities_lib_models_store_DataStoreCachingType__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ms/odsp-utilities/lib/models/store/DataStoreCachingType */ "EjJ3");
/* harmony import */ var _ms_odsp_utilities_lib_killswitch_Killswitch__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ms/odsp-utilities/lib/killswitch/Killswitch */ "QUgr");










var HubSiteJoinApprovalFeature = { ODB: 1076 };
var EnableHubToHubConnection = { ODB: 1631 };
var HubSitePermissionSyncExperience = { ODB: 1145 };
var HubSiteQueryOption;
(function (HubSiteQueryOption) {
    HubSiteQueryOption[HubSiteQueryOption["Parent"] = 0] = "Parent";
    HubSiteQueryOption[HubSiteQueryOption["Children"] = 1] = "Children";
    HubSiteQueryOption[HubSiteQueryOption["Siblings"] = 2] = "Siblings";
})(HubSiteQueryOption || (HubSiteQueryOption = {}));
/** Error code describing why a hub join failed (when approvals are enabled). Matches the server enum SPHubSiteJoinApproval.HubSiteJoinApprovalErrorCode */
var HubSiteJoinApprovalErrorCode;
(function (HubSiteJoinApprovalErrorCode) {
    /** approvalToken was not passed in and the hub site requires approval to join. Client should try again after acquiring an approvalToken. */
    HubSiteJoinApprovalErrorCode[HubSiteJoinApprovalErrorCode["NeedsApproval"] = 1] = "NeedsApproval";
    /** approvalToken was passed in, but this site was not expecting to be waiting on an approval. */
    HubSiteJoinApprovalErrorCode[HubSiteJoinApprovalErrorCode["SiteNotPendingApproval"] = 2] = "SiteNotPendingApproval";
    /** The site was expecting to be waiting on a different approval (passed in approvalCorrelationId does not match the one that the site expects)  */
    HubSiteJoinApprovalErrorCode[HubSiteJoinApprovalErrorCode["UnexpectedApprovalCorrelationId"] = 3] = "UnexpectedApprovalCorrelationId";
    /** The hub site rejected the passed in approvalToken. */
    HubSiteJoinApprovalErrorCode[HubSiteJoinApprovalErrorCode["ApprovalTokenRejected"] = 4] = "ApprovalTokenRejected";
    /** The passed in approvalToken is in an invalid format or otherwise failed to parse. */
    HubSiteJoinApprovalErrorCode[HubSiteJoinApprovalErrorCode["InvalidApprovalToken"] = 5] = "InvalidApprovalToken";
    /** Failure on the server in an unexpected way. */
    HubSiteJoinApprovalErrorCode[HubSiteJoinApprovalErrorCode["Unknown"] = -1] = "Unknown";
})(HubSiteJoinApprovalErrorCode || (HubSiteJoinApprovalErrorCode = {}));
var HubDataSource = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(HubDataSource, _super);
    function HubDataSource(pageContext) {
        var _this = _super.call(this, {
            dataSourceName: 'HubDataSource',
            id: 'HubDataSource',
            cacheType: !_ms_odsp_utilities_lib_killswitch_Killswitch__WEBPACK_IMPORTED_MODULE_9__["Killswitch"].isActivated('8f9b8975-e745-4add-8517-2acbbaa982f3', '06/11/2020', 'Use local cache to store hub data')
                ? _ms_odsp_utilities_lib_models_store_DataStoreCachingType__WEBPACK_IMPORTED_MODULE_8__["default"].local
                : _ms_odsp_utilities_lib_models_store_DataStoreCachingType__WEBPACK_IMPORTED_MODULE_8__["default"].session
        }, {
            pageContext: pageContext
        }) || this;
        _this._parseRawHubSite = function (data) {
            return data
                ? {
                    etag: data.Version || (data.__metadata ? data.__metadata.etag : undefined),
                    id: data.ID,
                    siteId: data.SiteId,
                    siteUrl: data.SiteUrl,
                    logoUrl: data.LogoUrl,
                    name: data.Title,
                    description: data.Description,
                    // Parse the targets property to extract unique users into @type IPerson
                    targets: _this._parseReturnedHubSiteTargetString(data.Targets),
                    siteDesignId: data.SiteDesignId,
                    requiresJoinApproval: data.RequiresJoinApproval,
                    hideNameInNavigation: data.HideNameInNavigation,
                    parentHubSiteId: data.ParentHubSiteId,
                    enablePermissionsSync: data.EnablePermissionsSync
                }
                : undefined;
        };
        _this._parseReturnedHubSites = function (result) {
            var d = JSON.parse(result).d;
            // accomodate a change in the JSON returned by this REST end-point
            // will return d.Items.results instead of d.results
            return d.Items ? d.Items.results : d.results;
        };
        return _this;
    }
    HubDataSource.prototype.getHubData = function (loadMetadataNavigation, forceRefresh, skipAudienceFiltering) {
        var _this = this;
        var cacheRequestKey = this._pageContext.hubSiteId; // cache data per hub site rather than per web
        var originalForceRefresh = forceRefresh;
        if (!forceRefresh && this.isCachedDataInvalidated(cacheRequestKey)) {
            // Some other tab has updated hub data, so we also need to invalidate both our server
            // and client caches and get new data.
            forceRefresh = true;
        }
        return this.getDataUtilizingLegacyCache({
            getUrl: function () {
                return _this._pageContext.webAbsoluteUrl + "/_api/web/HubSiteDataAsStream" + (forceRefresh ? '(true)' : '');
            },
            qosName: 'GetHubData',
            cacheRequestKey: cacheRequestKey,
            bypassCache: forceRefresh,
            setInvalidated: originalForceRefresh,
            parseResponse: function (response) { return JSON.parse(response); },
            noRedirect: true
        })
            .then(function (data) {
            var hubData = data
                ? Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, data), { isNavAudienceEnabled: Boolean(data.isNavAudienceTargeted), isNavAudienceProvided: false, isNavAudienceAffected: false, navigation: _editNav_ViewNavDataSource__WEBPACK_IMPORTED_MODULE_1__["default"].transformNodesToLinks(data.navigation || []) }) : undefined;
            if (loadMetadataNavigation) {
                return _this._ensureHubNavData(hubData, forceRefresh);
            }
            else {
                return hubData;
            }
        })
            .then(function (hubData) {
            var audiencesDataSource = _audienceTargeting_AudiencesDataSource__WEBPACK_IMPORTED_MODULE_3__["AudiencesDataSource"].getInstance(_this._pageContext);
            if (_this._pageContext &&
                hubData &&
                !hubData.usesMetadataNavigation &&
                !skipAudienceFiltering &&
                hubData.isNavAudienceEnabled) {
                return audiencesDataSource.filter('HubNav', hubData.navigation, 'links').then(function (links) {
                    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, hubData), { navigation: links }), (isRefineHubNavAudienceLoggingKillSwitchActivated()
                        ? {}
                        : {
                            isNavAudienceProvided: audiencesDataSource.containsAudiences(hubData.navigation, 'links'),
                            isNavAudienceAffected: _editNav_ViewNavDataSource__WEBPACK_IMPORTED_MODULE_1__["default"].checkIfLinksAffected(hubData.navigation, links)
                        }));
                });
            }
            else {
                return hubData;
            }
        });
    };
    HubDataSource.prototype.joinHubSite = function (hubSiteId, approvalToken, approvalCorrelationId) {
        if (!hubSiteId) {
            hubSiteId = _ms_odsp_utilities_lib_guid_Guid__WEBPACK_IMPORTED_MODULE_7__["default"].Empty;
        }
        var postData = approvalToken
            ? {
                approvalToken: approvalToken,
                approvalCorrelationId: approvalCorrelationId
            }
            : undefined;
        return this.dataRequestor
            .getData({
            url: this._pageContext.webAbsoluteUrl + "/_api/site/JoinHubSite(@v1)" +
                ("?@v1='" + _ms_odsp_utilities_lib_encoding_UriEncoding__WEBPACK_IMPORTED_MODULE_6__["default"].encodeRestUriStringToken(hubSiteId) + "'"),
            qosName: 'JoinHubSite',
            additionalPostData: JSON.stringify(postData),
            parseResponse: function () { return undefined; },
            noRedirect: true
        })
            .catch(function (error) {
            // For some known failure scenarios related to hub join approval, we can extend the error object with more info to describe what the failure was.
            // These known failure scenarios have an error.code like "1, Microsoft.SharePoint.SPHubSiteJoinApproval+HubSiteJoinApprovalException"
            if (error.code && error.code.indexOf('HubSiteJoinApprovalException') >= 0) {
                // Parse the hub site join approval error code so that it is easily accessible and attach it to the error
                var hubSiteJoinApprovalErrorCode = Number(error.code.substring(0, error.code.indexOf(',')));
                var hubSiteJoinApprovalError = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ hubSiteJoinApprovalErrorCode: hubSiteJoinApprovalErrorCode }, error);
                throw hubSiteJoinApprovalError;
            }
            else {
                // This isn't a known hub site join approval failure. Just throw the error like normal.
                throw error;
            }
        });
    };
    // [TODO-vinji]: We may want to add error handling experience
    HubDataSource.prototype.getConnectedHubs = function (hubSiteId, option) {
        var _this = this;
        return this.dataRequestor
            .getData({
            url: this._pageContext.webAbsoluteUrl + "/_api/hubsites/getconnectedhubs(hubSiteId='" + hubSiteId + "',option='" + option + "')",
            qosName: 'HubSite.GetConnectedHubs',
            parseResponse: this._parseReturnedHubSites,
            method: 'GET'
        })
            .then(function (data) {
            return data ? data.map(_this._parseRawHubSite) : undefined;
        });
    };
    HubDataSource.prototype.makeHubSite = function () {
        return this.dataRequestor
            .getData({
            url: this._pageContext.webAbsoluteUrl + "/_api/site/RegisterHubSite",
            qosName: 'MakeHubSite',
            parseResponse: function (response) { return JSON.parse(response).d; }
        })
            .then(this._parseRawHubSite);
    };
    HubDataSource.prototype.registerHubSite = function (creationInfo) {
        return this.dataRequestor
            .getData({
            url: this._pageContext.webAbsoluteUrl + "/_api/SPO.Tenant/RegisterHubSiteWithCreationInformation",
            qosName: 'RegisterHubSite',
            parseResponse: function (response) { return JSON.parse(response).d; },
            additionalPostData: JSON.stringify({
                siteUrl: creationInfo.SiteUrl,
                creationInformation: creationInfo
            }),
            method: 'POST'
        })
            .then(this._parseRawHubSite);
    };
    HubDataSource.prototype.removeHubSite = function () {
        return this.dataRequestor.getData({
            url: this._pageContext.webAbsoluteUrl + "/_api/site/UnregisterHubSite",
            qosName: 'RemoveHubSite',
            parseResponse: function () { return undefined; }
        });
    };
    HubDataSource.prototype.getHubSites = function () {
        var _this = this;
        return this.dataRequestor
            .getData({
            url: this._pageContext.webAbsoluteUrl + "/_api/HubSites",
            qosName: 'GetHubSites',
            method: 'GET',
            parseResponse: this._parseReturnedHubSites,
            noRedirect: true
        })
            .then(function (data) {
            return data ? data.map(_this._parseRawHubSite) : undefined;
        });
    };
    HubDataSource.prototype.getHubSite = function (hubSiteId) {
        return this.dataRequestor
            .getData({
            url: this._pageContext.webAbsoluteUrl + "/_api/HubSites/GetById('" + hubSiteId + "')",
            qosName: 'GetHubSite',
            parseResponse: function (result) { return JSON.parse(result).d; },
            noRedirect: true
        })
            .then(this._parseRawHubSite);
    };
    HubDataSource.prototype.updateHubSite = function (hubSite) {
        var postData = {
            __metadata: {
                etag: hubSite.etag,
                type: 'SP.HubSite'
            },
            LogoUrl: hubSite.logoUrl,
            Title: hubSite.name,
            Description: hubSite.description
        };
        postData.Targets = this._constructHubSiteTargetString(hubSite.targets);
        postData.SiteDesignId = hubSite.siteDesignId;
        postData.HideNameInNavigation = hubSite.hideNameInNavigation;
        if (_ms_odsp_utilities_lib_features_FeatureOverrides__WEBPACK_IMPORTED_MODULE_4__["default"].isFeatureEnabled(HubSiteJoinApprovalFeature)) {
            postData.RequiresJoinApproval = hubSite.requiresJoinApproval;
        }
        if (_ms_odsp_utilities_lib_features_FeatureOverrides__WEBPACK_IMPORTED_MODULE_4__["default"].isFeatureEnabled(EnableHubToHubConnection)) {
            postData.ParentHubSiteId = hubSite.parentHubSiteId;
        }
        if (_ms_odsp_utilities_lib_features_FeatureOverrides__WEBPACK_IMPORTED_MODULE_4__["default"].isFeatureEnabled(HubSitePermissionSyncExperience)) {
            postData.EnablePermissionsSync = hubSite.enablePermissionsSync;
        }
        return this.dataRequestor.getData({
            url: this._pageContext.webAbsoluteUrl + "/_api/HubSites/GetById('" + hubSite.id + "')",
            qosName: 'UpdateHubSite',
            method: 'POST',
            additionalPostData: JSON.stringify(postData),
            additionalHeaders: {
                'X-HTTP-Method': 'MERGE',
                'If-Match': '*'
            },
            noRedirect: true
        });
    };
    HubDataSource.prototype.canCreateHubJoinedSite = function (hubSiteId) {
        var _this = this;
        var cacheRequestKey = hubSiteId + this._pageContext.userId; // cache data per hub and user
        return this.getDataUtilizingLegacyCache({
            getUrl: function () {
                return _this._pageContext.webAbsoluteUrl + "/_api/SPSiteManager/CanCreateHubJoinedSite('" + hubSiteId + "')";
            },
            qosName: 'CanCreateHubJoinedSite',
            cacheRequestKey: "" + cacheRequestKey,
            parseResponse: function (response) { return JSON.parse(JSON.parse(response).d.CanCreateHubJoinedSite); },
            noRedirect: true
        }).then(function (canCreate) { return canCreate; });
    };
    HubDataSource.prototype.syncHubSiteTheme = function () {
        return this.dataRequestor.getData({
            url: this._pageContext.webAbsoluteUrl + "/_api/web/SyncHubSiteTheme",
            qosName: 'SyncHubSiteTheme',
            parseResponse: function () { return undefined; },
            noRedirect: true
        });
    };
    /** Should be called after a Hub Site Join Approval has started so that the site knows that an approval is "pending" */
    HubDataSource.prototype.onHubSiteJoinRequestStarted = function (approvalCorrelationId) {
        var postData = approvalCorrelationId
            ? {
                approvalCorrelationId: approvalCorrelationId
            }
            : undefined;
        return this.dataRequestor.getData({
            url: this._pageContext.webAbsoluteUrl + "/_api/site/OnHubSiteJoinRequestStarted",
            method: 'POST',
            qosName: 'OnHubSiteJoinRequestStarted',
            additionalPostData: JSON.stringify(postData),
            parseResponse: function () { return undefined; }
        });
    };
    /** Should be called after a Hub Site Join Approval is canceled so that it has an opportunity to clean up */
    HubDataSource.prototype.onHubSiteJoinRequestCanceled = function (approvalCorrelationId) {
        var postData = approvalCorrelationId
            ? {
                approvalCorrelationId: approvalCorrelationId
            }
            : undefined;
        return this.dataRequestor.getData({
            url: this._pageContext.webAbsoluteUrl + "/_api/site/OnHubSiteJoinRequestCanceled",
            method: 'POST',
            qosName: 'OnHubSiteJoinRequestCanceled',
            additionalPostData: JSON.stringify(postData),
            parseResponse: function () { return undefined; }
        });
    };
    /** Gets the Approval Correlation Id of the currently pending Hub Site join approval. If no approval is pending, null is returned */
    HubDataSource.prototype.getHubSiteJoinApprovalCorrelationId = function () {
        return this.dataRequestor.getData({
            url: this._pageContext.webAbsoluteUrl + "/_api/site/GetHubSiteJoinApprovalCorrelationId",
            method: 'GET',
            qosName: 'GetHubSiteJoinApprovalCorrelationId',
            parseResponse: function (responseText) { return JSON.parse(responseText).d.GetHubSiteJoinApprovalCorrelationId; }
        });
    };
    /** Should be called by a Hub Site Admin after approving a join request.
     *  This function will return an Approval Token that the joining site's admin can use to join the hub
     */
    HubDataSource.prototype.onHubSiteJoinRequestApproved = function (joiningSiteId) {
        return this.dataRequestor.getData({
            url: this._pageContext.webAbsoluteUrl + "/_api/site/OnHubSiteJoinRequestApproved",
            method: 'POST',
            qosName: 'OnHubSiteJoinRequestApproved',
            additionalPostData: JSON.stringify({
                joiningSiteId: joiningSiteId
            }),
            parseResponse: function (responseText) { return JSON.parse(responseText).d.OnHubSiteJoinRequestApproved; }
        });
    };
    /** Makes the users passed in able to associate with the hubsite */
    HubDataSource.prototype.grantHubSiteRights = function (hubSiteId, userIds) {
        if (userIds.length === 0) {
            return _ms_odsp_utilities_lib_async_Promise__WEBPACK_IMPORTED_MODULE_5__["default"].resolve();
        }
        return this.dataRequestor.getData({
            url: this._pageContext.webAbsoluteUrl + "/_api/SPO.Tenant/GrantHubSiteRightsById",
            method: 'POST',
            qosName: 'GrantHubSiteRights',
            additionalPostData: JSON.stringify({
                hubSiteId: hubSiteId,
                principals: userIds,
                grantedRights: 0x01
            }),
            additionalHeaders: { 'ODATA-VERSION': '4.0', Accept: 'application/json; odata.metadata=minimal' }
        });
    };
    /** Removes the users passed from being able to associate with the hubsite */
    HubDataSource.prototype.revokeHubSiteRights = function (hubSiteId, userIds) {
        if (userIds.length === 0) {
            return _ms_odsp_utilities_lib_async_Promise__WEBPACK_IMPORTED_MODULE_5__["default"].resolve();
        }
        return this.dataRequestor.getData({
            url: this._pageContext.webAbsoluteUrl + "/_api/SPO.Tenant/RevokeHubSiteRightsById",
            method: 'POST',
            qosName: 'RevokeHubSiteRights',
            additionalPostData: JSON.stringify({
                hubSiteId: hubSiteId,
                principals: userIds
            })
        });
    };
    HubDataSource.prototype._ensureHubNavData = function (hubData, forceRefresh) {
        if (hubData && hubData.usesMetadataNavigation) {
            var pageContext = this._pageContext;
            var contextForHubSite = {
                env: pageContext.env,
                killSwitches: pageContext.killSwitches,
                layoutsUrl: pageContext.layoutsUrl,
                siteAbsoluteUrl: hubData.url,
                siteClientTag: '',
                webAbsoluteUrl: hubData.url,
                webServerRelativeUrl: null,
                webTemplate: null,
                hasManageWebPermissions: false,
                systemUserKey: pageContext.systemUserKey,
                userDisplayName: pageContext.userDisplayName,
                userId: pageContext.userId,
                userLoginName: pageContext.userLoginName,
                userEmail: pageContext.userEmail
            };
            var viewNavDataSource = new _editNav_ViewNavDataSource__WEBPACK_IMPORTED_MODULE_1__["default"](contextForHubSite, "GlobalNavigationSwitchableProvider" /* publishingGlobalNav */);
            return viewNavDataSource
                .getMenuState({
                useCache: true,
                forceRefresh: forceRefresh
            })
                .then(function (navLinkGroup) {
                var navigation = Object(_editNav_ViewNavDataSource__WEBPACK_IMPORTED_MODULE_1__["isRefineAudienceTargetKillSwitchActivated"])()
                    ? (navLinkGroup && navLinkGroup.links) || []
                    : navLinkGroup.links || [];
                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, hubData), { navigation: navigation });
            });
        }
        else {
            return _ms_odsp_utilities_lib_async_Promise__WEBPACK_IMPORTED_MODULE_5__["default"].resolve(hubData);
        }
    };
    /**
     * From a raw HubSite response, this method parses the targets property to extract unique users into @type IPerson
     * This is the opposite of @method _constructHubSiteTargetString
     * @param hubSiteString A string containing persons to be extracted
     * @returns An array of IPerson, or [] if none are present
     */
    HubDataSource.prototype._parseReturnedHubSiteTargetString = function (hubSiteString) {
        var targets = [];
        if (hubSiteString) {
            var parser = new DOMParser();
            var doc = parser.parseFromString(hubSiteString, 'text/xml');
            var aces = doc.getElementsByTagName('ace');
            for (var i = 0; i < aces.length; i++) {
                var userId = aces[i].getAttribute('identityName');
                var displayName = aces[i].getAttribute('displayName');
                var email = '';
                if (userId) {
                    var userIdParts = userId.split('|');
                    var emailPart = userIdParts[userIdParts.length - 1];
                    if (emailPart.indexOf('@') > 0) {
                        email = emailPart;
                    }
                }
                targets.push({
                    userId: userId,
                    email: email,
                    name: displayName
                });
            }
        }
        return targets;
    };
    /**
     * From a array of @type IPerson, this method encodes each target into the raw form that is needed for a backend update.
     * This is the opposite of @method _parseReturnedHubSiteTargetString
     * @param targets An array of IPerson, or [] if none are present
     * @returnsA string containing persons to be set as the targets of the HubSite
     */
    HubDataSource.prototype._constructHubSiteTargetString = function (targets) {
        if (targets && targets.length > 0) {
            var constructedString_1 = '<acl>';
            targets.forEach(function (target) {
                constructedString_1 += "<ace identityName=\"" + target.userId + "\" displayName=\"" + target.name + "\" allowRights=\"1\" />";
            });
            return constructedString_1 + '</acl>';
        }
        return '';
    };
    return HubDataSource;
}(_base_CachedDataSource__WEBPACK_IMPORTED_MODULE_2__["default"]));

/* harmony default export */ __webpack_exports__["default"] = (HubDataSource);
function isRefineHubNavAudienceLoggingKillSwitchActivated() {
    return _ms_odsp_utilities_lib_killswitch_Killswitch__WEBPACK_IMPORTED_MODULE_9__["Killswitch"].isActivated('d833a180-020d-4e24-8878-e47d4e5dd147', '2020-08-06', 'Refine the audience targeting engagement logging in hub nav');
}
//# sourceMappingURL=HubDataSource.js.map

/***/ }),

/***/ "afe6":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-shared-react@47.12.13_d89e40c38ccaa8bd6af6488f37cb196d/node_modules/@ms/odsp-shared-react/lib/components/ReactDeferredComponent/index.js ***!
  \*********************************************************************************************************************************************************************************************************/
/*! exports provided: ReactDeferredComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ReactDeferredComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ReactDeferredComponent */ "+3tZ");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ReactDeferredComponent", function() { return _ReactDeferredComponent__WEBPACK_IMPORTED_MODULE_0__["ReactDeferredComponent"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "b97J":
/*!*******************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/shared-react-left-nav@1.0.39_6ba2c2a8b7c666ede09cb247e7351fab/node_modules/@ms/shared-react-left-nav/lib/LeftNav.js ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: isRelativeUrl, LeftNav */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isRelativeUrl", function() { return isRelativeUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeftNav", function() { return LeftNav; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var office_ui_fabric_react_lib_FocusZone__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! office-ui-fabric-react/lib/FocusZone */ "NMYH");
/* harmony import */ var office_ui_fabric_react_lib_Icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! office-ui-fabric-react/lib/Icon */ "56LG");
/* harmony import */ var office_ui_fabric_react_lib_Icon__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(office_ui_fabric_react_lib_Icon__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var office_ui_fabric_react_lib_Utilities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! office-ui-fabric-react/lib/Utilities */ "mkpW");
/* harmony import */ var office_ui_fabric_react_lib_Styling__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! office-ui-fabric-react/lib/Styling */ "PL71");
/* harmony import */ var _ms_odsp_utilities_lib_killswitch_Killswitch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ms/odsp-utilities/lib/killswitch/Killswitch */ "QUgr");
/* harmony import */ var _LeftNav_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./LeftNav.scss */ "FM0M");
/* harmony import */ var _LeftNavOverride_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./LeftNavOverride.scss */ "4L3d");
/* harmony import */ var office_ui_fabric_react_lib_utilities_decorators_withResponsiveMode__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! office-ui-fabric-react/lib/utilities/decorators/withResponsiveMode */ "5qgq");
/* harmony import */ var office_ui_fabric_react_lib_utilities_decorators_withResponsiveMode__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(office_ui_fabric_react_lib_utilities_decorators_withResponsiveMode__WEBPACK_IMPORTED_MODULE_9__);










// tslint:disable-next-line: no-any
var styles = _LeftNav_scss__WEBPACK_IMPORTED_MODULE_7__;
// tslint:disable-next-line: no-any
var stylesCustomization = _LeftNavOverride_scss__WEBPACK_IMPORTED_MODULE_8__;
// The number pixels per indentation level for Nav links.
var _indentationSize = 15;
// The number of pixels of left margin
var _baseIndent = 3;
// global var used in _isLinkSelectedKey
var _urlResolver;
function isRelativeUrl(url) {
    // A URL is relative if it has no protocol.
    return !!url && !/^[a-z0-9+-.]:\/\//i.test(url);
}
var LeftNav = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(LeftNav, _super);
    function LeftNav(props) {
        var _this = _super.call(this, props) || this;
        _this._focusZone = react__WEBPACK_IMPORTED_MODULE_1__["createRef"]();
        _this._renderGroup = function (group, groupIndex) {
            var _a;
            var expandButtonAriaLabel = _this.props.expandButtonAriaLabel;
            var isExpanded = _this._isGroupExpanded(group);
            var label = (isExpanded ? group.collapseAriaLabel : group.expandAriaLabel) || expandButtonAriaLabel;
            return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { "data-automationid": 'LeftNavGroups', key: groupIndex, className: Object(office_ui_fabric_react_lib_Utilities__WEBPACK_IMPORTED_MODULE_4__["css"])('ms-Nav-group', styles.group, (_a = {
                        'is-expanded': isExpanded
                    },
                    _a[styles.groupIsExpanded] = isExpanded,
                    _a)) },
                group.name ? (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("button", { className: Object(office_ui_fabric_react_lib_Utilities__WEBPACK_IMPORTED_MODULE_4__["css"])('ms-Nav-chevronButton', styles.chevronButton, styles.chevronButtonIsGroup, styles.groupHeaderFontSize), onClick: _this._getGroupHeaderClickCallback(group), "aria-label": label, "aria-expanded": isExpanded },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](office_ui_fabric_react_lib_Icon__WEBPACK_IMPORTED_MODULE_3__["Icon"], { className: Object(office_ui_fabric_react_lib_Utilities__WEBPACK_IMPORTED_MODULE_4__["css"])('ms-Nav-chevron', styles.chevronIcon), iconName: 'ChevronDown' }),
                    group.name)) : null,
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: styles.groupContent }, _this._renderLinks(group.links, 0 /* nestingLevel */))));
        };
        _this.state = {
            isGroupCollapsed: {},
            isLinkExpandState: {},
            selectedKey: props.initialSelectedKey || props.selectedKey
        };
        _this._foundSelectedLink = false;
        _this._getGroupHeaderClickCallback = Object(office_ui_fabric_react_lib_Utilities__WEBPACK_IMPORTED_MODULE_4__["memoizeFunction"])(function (item) {
            return function (ev) {
                _this._onGroupHeaderClicked(item, ev);
            };
        });
        _this._getLinkExpandClickCallback = Object(office_ui_fabric_react_lib_Utilities__WEBPACK_IMPORTED_MODULE_4__["memoizeFunction"])(function (item) {
            return function (ev) {
                _this._onLinkExpandClicked(item, ev);
            };
        });
        _this._getNavButtonLinkClickCallback = Object(office_ui_fabric_react_lib_Utilities__WEBPACK_IMPORTED_MODULE_4__["memoizeFunction"])(function (item) {
            return function (ev) {
                _this._onNavButtonLinkClicked(item, ev);
            };
        });
        _this._getNavAnchorLinkClickCallback = Object(office_ui_fabric_react_lib_Utilities__WEBPACK_IMPORTED_MODULE_4__["memoizeFunction"])(function (item) {
            return function (ev) {
                _this._onNavAnchorLinkClicked(item, ev);
            };
        });
        return _this;
    }
    LeftNav.prototype.render = function () {
        var _this = this;
        var _a = this.props, responsiveMode = _a.responsiveMode, groups = _a.groups, className = _a.className, isOnTop = _a.isOnTop;
        if (!groups) {
            return null;
        }
        // each time re-render _foundSelectedLink has to be reset
        this._foundSelectedLink = false;
        // check if any override classes
        var overrideClassName = this._getOverrideClassName(responsiveMode);
        var groupElements = groups.map(function (group, groupIndex) {
            return _this._renderGroup(group, groupIndex);
        });
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](office_ui_fabric_react_lib_FocusZone__WEBPACK_IMPORTED_MODULE_2__["FocusZone"], { direction: office_ui_fabric_react_lib_FocusZone__WEBPACK_IMPORTED_MODULE_2__["FocusZoneDirection"].vertical, componentRef: this._focusZone },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("nav", { role: 'navigation', className: Object(office_ui_fabric_react_lib_Utilities__WEBPACK_IMPORTED_MODULE_4__["css"])('ms-Nav', styles.root, className, overrideClassName, isOnTop && Object(office_ui_fabric_react_lib_Utilities__WEBPACK_IMPORTED_MODULE_4__["css"])('is-onTop', 'isOnTop', styles.rootIsOnTop, office_ui_fabric_react_lib_Styling__WEBPACK_IMPORTED_MODULE_5__["AnimationClassNames"].slideRightIn40)), "aria-label": this.props.ariaLabel }, groupElements)));
    };
    Object.defineProperty(LeftNav.prototype, "selectedKey", {
        get: function () {
            return this.state.selectedKey;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Sets focus to the first tabbable item in the zone.
     * @param forceIntoFirstElement - If true, focus will be forced into the first element, even
     * if focus is already in the focus zone.
     * @returns True if focus could be set to an active element, false if no operation was taken.
     */
    LeftNav.prototype.focus = function (forceIntoFirstElement) {
        if (forceIntoFirstElement === void 0) { forceIntoFirstElement = false; }
        if (this._focusZone && this._focusZone.current) {
            return this._focusZone.current.focus(forceIntoFirstElement);
        }
        return false;
    };
    LeftNav.prototype._getOverrideClassName = function (responsiveMode) {
        // Try to consolidate both odsp-next and sp-client customizations into one place,
        // use this function to provide the consolidated override classes
        if (!_ms_odsp_utilities_lib_killswitch_Killswitch__WEBPACK_IMPORTED_MODULE_6__["Killswitch"].isActivated('a0032a05-64dd-4dea-87d7-083a0c3790a0', '7/8/2020', 'Return app override css classnames')) {
            return stylesCustomization.spReactLeftNav + " " + (this._isToggleLeftNavMode(responsiveMode) ? stylesCustomization.spReactLeftNavResponsive : '');
        }
        else {
            return '';
        }
    };
    LeftNav.prototype._isToggleLeftNavMode = function (responsiveMode) {
        return !!responsiveMode && responsiveMode <= office_ui_fabric_react_lib_utilities_decorators_withResponsiveMode__WEBPACK_IMPORTED_MODULE_9__["ResponsiveMode"].large;
    };
    LeftNav.prototype._renderLinks = function (links, nestingLevel) {
        var _this = this;
        if (!links || !links.length) {
            return null;
        }
        var linkElements = links.map(function (link, linkIndex) {
            return _this._renderLink(link, linkIndex, nestingLevel);
        });
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("ul", { role: 'list', className: Object(office_ui_fabric_react_lib_Utilities__WEBPACK_IMPORTED_MODULE_4__["css"])('ms-Nav-navItems', styles.navItems), "aria-label": this.props.ariaLabel }, linkElements));
    };
    LeftNav.prototype._renderLink = function (link, linkIndex, nestingLevel) {
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("li", { key: link.key || linkIndex, role: 'listitem', className: Object(office_ui_fabric_react_lib_Utilities__WEBPACK_IMPORTED_MODULE_4__["css"])('ms-Nav-navItem', styles.navItem) },
            this._renderCompositeLink(link, linkIndex, nestingLevel),
            link.isExpanded ? this._renderLinks(link.links, ++nestingLevel) : null));
    };
    LeftNav.prototype._renderCompositeLink = function (link, linkIndex, nestingLevel) {
        var _a, _b;
        var divProps = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, Object(office_ui_fabric_react_lib_Utilities__WEBPACK_IMPORTED_MODULE_4__["getNativeProps"])(link, office_ui_fabric_react_lib_Utilities__WEBPACK_IMPORTED_MODULE_4__["divProperties"], ['onClick']));
        var expandButtonAriaLabel = this.props.expandButtonAriaLabel;
        var finalExpandBtnAriaLabel = '';
        if (link.links && link.links.length > 0) {
            if (link.collapseAriaLabel || link.expandAriaLabel) {
                finalExpandBtnAriaLabel = (link.isExpanded ? link.collapseAriaLabel : link.expandAriaLabel) || '';
            }
            else {
                // TODO remove when `expandButtonAriaLabel` is removed. This is not an ideal concatenation for localization.
                finalExpandBtnAriaLabel = expandButtonAriaLabel ? link.name + " " + expandButtonAriaLabel : link.name;
            }
        }
        // there should be one selected Link at given time, once locate selected link, no need to continue waste time to try every other node.
        var isLinkSelected = this._foundSelectedLink && (this._isLinkComparisonOrderKSActive() || !this.props.recomputeSelected)
            ? false
            : this._isLinkSelected(link);
        if (isLinkSelected) {
            this._foundSelectedLink = true;
        }
        var isRtl = Object(office_ui_fabric_react_lib_Utilities__WEBPACK_IMPORTED_MODULE_4__["getRTL"])();
        var paddingBefore = _indentationSize * nestingLevel;
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, divProps, { key: link.key || linkIndex, className: Object(office_ui_fabric_react_lib_Utilities__WEBPACK_IMPORTED_MODULE_4__["css"])('ms-Nav-compositeLink', styles.compositeLink, (_a = {},
                _a[styles.compositeLinkIsExpanded] = link.isExpanded,
                _a[styles.compositeLinkIsSelected] = isLinkSelected,
                _a[styles.compositeLinkHasIcon] = link.icon,
                _a)) }),
            link.links && link.links.length > 0 ? (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("button", { className: Object(office_ui_fabric_react_lib_Utilities__WEBPACK_IMPORTED_MODULE_4__["css"])('ms-Nav-chevronButton', styles.chevronButton, styles.chevronButtonLink), style: (_b = {}, _b[isRtl ? 'right' : 'left'] = paddingBefore, _b), onClick: this._getLinkExpandClickCallback(link), "aria-label": finalExpandBtnAriaLabel, "aria-expanded": link.isExpanded ? 'true' : 'false' },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](office_ui_fabric_react_lib_Icon__WEBPACK_IMPORTED_MODULE_3__["Icon"], { className: Object(office_ui_fabric_react_lib_Utilities__WEBPACK_IMPORTED_MODULE_4__["css"])('ms-Nav-chevron', styles.chevronIcon, link.isExpanded), iconName: 'ChevronDown' }))) : null,
            !!link.onClick
                ? this._renderButtonLink(link, nestingLevel)
                : this._renderAnchorLink(link, nestingLevel, isLinkSelected)));
    };
    LeftNav.prototype._renderAnchorLink = function (link, nestingLevel, isLinkSelected) {
        var _a, _b;
        if (isLinkSelected === void 0) { isLinkSelected = false; }
        // Determine the appropriate padding to add before this link.
        // In RTL, the "before" padding will go on the right instead of the left.
        var isRtl = Object(office_ui_fabric_react_lib_Utilities__WEBPACK_IMPORTED_MODULE_4__["getRTL"])();
        var paddingBefore = this._computePadding(link, nestingLevel);
        // Prevent hijacking of the parent window if link.target is defined
        var rel = link.url && link.target && !isRelativeUrl(link.url) ? 'noopener noreferrer' : undefined;
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("a", { className: Object(office_ui_fabric_react_lib_Utilities__WEBPACK_IMPORTED_MODULE_4__["css"])('ms-Nav-link', styles.link, (_a = {}, _a[styles.isDisabled] = link.disabled, _a)), style: (_b = {}, _b[isRtl ? 'paddingRight' : 'paddingLeft'] = paddingBefore, _b), href: link.url || (link.forceAnchor ? '#' : undefined), onClick: link.onClick ? this._getNavButtonLinkClickCallback(link) : this._getNavAnchorLinkClickCallback(link), "aria-label": link.ariaLabel, title: link.title || link.name, target: link.target, "aria-current": isLinkSelected ? 'page' : 'false', rel: rel },
            link.icon ? (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](office_ui_fabric_react_lib_Icon__WEBPACK_IMPORTED_MODULE_3__["Icon"], { className: Object(office_ui_fabric_react_lib_Utilities__WEBPACK_IMPORTED_MODULE_4__["css"])('ms-Icon', 'ms-Nav-IconLink', styles.icon, styles.iconLink), iconName: link.icon })) : null,
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", { className: Object(office_ui_fabric_react_lib_Utilities__WEBPACK_IMPORTED_MODULE_4__["css"])('ms-Nav-linkText', styles.linkText) }, link.name)));
    };
    LeftNav.prototype._renderButtonLink = function (link, nestingLevel) {
        var _a;
        var isRtl = Object(office_ui_fabric_react_lib_Utilities__WEBPACK_IMPORTED_MODULE_4__["getRTL"])();
        var paddingBefore = this._computePadding(link, nestingLevel);
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("button", { className: Object(office_ui_fabric_react_lib_Utilities__WEBPACK_IMPORTED_MODULE_4__["css"])('ms-Nav-link', styles.link, styles.buttonLink), style: (_a = {}, _a[isRtl ? 'paddingRight' : 'paddingLeft'] = paddingBefore, _a), onClick: this._getNavButtonLinkClickCallback(link), disabled: link.disabled, "aria-label": link.ariaLabel, "data-automationid": link.automationId },
            link.icon && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](office_ui_fabric_react_lib_Icon__WEBPACK_IMPORTED_MODULE_3__["Icon"], { className: Object(office_ui_fabric_react_lib_Utilities__WEBPACK_IMPORTED_MODULE_4__["css"])('ms-Icon', 'ms-Nav-IconLink', styles.icon, styles.iconLink), iconName: link.icon })),
            link.name));
    };
    LeftNav.prototype._computePadding = function (link, nestingLevel) {
        // Determine the appropriate padding to add before this link.
        // In RTL, the "before" padding will go on the right instead of the left.
        var paddingBefore;
        if (!_ms_odsp_utilities_lib_killswitch_Killswitch__WEBPACK_IMPORTED_MODULE_6__["Killswitch"].isActivated('72640357-e0ca-4f73-afe5-59172264ce8c', '7/31/20', 'indentation compute based on nestingLevel')) {
            var isLinkWithIcon = link.icon || link.iconProps;
            paddingBefore =
                (_indentationSize * nestingLevel + _baseIndent + (isLinkWithIcon ? 0 : 27)).toString(10) + 'px';
        }
        else {
            paddingBefore = (_indentationSize * nestingLevel + 30).toString(10) + 'px';
            // when anchor link has icon, different indent
            if (link.icon) {
                paddingBefore = (_indentationSize * nestingLevel + _baseIndent).toString(10) + 'px';
            }
        }
        return paddingBefore;
    };
    LeftNav.prototype._onGroupHeaderClicked = function (group, ev) {
        if (group.onHeaderClick) {
            group.onHeaderClick(ev, this._isGroupExpanded(group));
        }
        this._toggleCollapsed(group);
        ev.preventDefault();
        ev.stopPropagation();
    };
    LeftNav.prototype._onLinkExpandClicked = function (link, ev) {
        var _a;
        var onLinkExpandClick = this.props.onLinkExpandClick;
        if (onLinkExpandClick) {
            onLinkExpandClick(ev, link);
        }
        if (!ev.defaultPrevented) {
            link.isExpanded = !link.isExpanded;
            var newLinkExpanded = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.state.isLinkExpandState), (_a = {}, _a[link.name] = link.isExpanded // sic - presently open will be collapsed after setState
            , _a));
            this.setState({ isLinkExpandState: newLinkExpanded });
        }
        ev.preventDefault();
        ev.stopPropagation();
    };
    LeftNav.prototype._preventBounce = function (link, ev) {
        if (!link.url && link.forceAnchor) {
            ev.preventDefault();
        }
    };
    LeftNav.prototype._onNavAnchorLinkClicked = function (link, ev) {
        this._foundSelectedLink = false;
        // If the href is "#" we should call preventDefault to prevent scrolling to the top of the page
        this._preventBounce(link, ev);
        if (this.props.onLinkClick) {
            this.props.onLinkClick(ev, link);
        }
        if (!link.url && link.links && link.links.length > 0) {
            this._onLinkExpandClicked(link, ev);
        }
        this.setState({ selectedKey: link.key });
    };
    LeftNav.prototype._onNavButtonLinkClicked = function (link, ev) {
        this._foundSelectedLink = false;
        // If the href is "#" we should call preventDefault to prevent scrolling to the top of the page
        this._preventBounce(link, ev);
        if (link.onClick) {
            link.onClick(ev, link);
        }
        if (!link.url && link.links && link.links.length > 0) {
            this._onLinkExpandClicked(link, ev);
        }
        this.setState({ selectedKey: link.key });
    };
    LeftNav.prototype._isLinkInUrl = function (link) {
        _urlResolver = _urlResolver || document.createElement('a');
        _urlResolver.href = link.url || '';
        var target = this._isLinkComparisonKSActive()
            ? _urlResolver.href
            : _urlResolver.href.toLowerCase();
        var locationHref = this._isLinkComparisonKSActive()
            ? location.href
            : location.href.toLowerCase();
        if (locationHref === target) {
            return true;
        }
        // If selectedKey is not defined in state, then check URL to determine link selected status
        var locationUrl = this._isLinkComparisonKSActive()
            ? location.protocol + "//" + location.host + location.pathname
            : (location.protocol + "//" + location.host + location.pathname).toLowerCase();
        if (locationUrl === target) {
            return true;
        }
        if (location.hash) {
            // Match the hash to the url.
            if (location.hash === link.url) {
                return true;
            }
            // Match a rebased url. (e.g. #foo becomes http://hostname/foo)
            _urlResolver.href = location.hash.substring(1);
            return _urlResolver.href === target;
        }
        return false;
    };
    LeftNav.prototype._isLinkSelected = function (link) {
        // if URL is matching location.href (if link.url exists) and killswitch inactive or
        // if caller passes in selectedKey, use it as first choice or
        // if current state.selectedKey (from addressbar) is match to the link or
        // if URL is matching location.href (if link.url exists)
        if (!this._isLinkComparisonOrderKSActive() && typeof Object(office_ui_fabric_react_lib_Utilities__WEBPACK_IMPORTED_MODULE_4__["getWindow"])() !== 'undefined' && link.url) {
            // If selectedKey is undefined in props and state, then check URL
            return this._isLinkInUrl(link);
        }
        else if (this.props.selectedKey !== undefined) {
            return link.key === this.props.selectedKey;
        }
        else if (this.state.selectedKey !== undefined) {
            return link.key === this.state.selectedKey;
        }
        else if (typeof Object(office_ui_fabric_react_lib_Utilities__WEBPACK_IMPORTED_MODULE_4__["getWindow"])() !== 'undefined' && link.url) {
            // Remove with killswitch
            return this._isLinkInUrl(link);
        }
        return false;
    };
    LeftNav.prototype._isGroupExpanded = function (group) {
        if (group.name && this.state.isGroupCollapsed.hasOwnProperty(group.name)) {
            return !this.state.isGroupCollapsed[group.name];
        }
        if (group.collapseByDefault !== undefined) {
            return !group.collapseByDefault;
        }
        return true;
    };
    LeftNav.prototype._toggleCollapsed = function (group) {
        var _a;
        if (group.name) {
            var newGroupCollapsed = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.state.isGroupCollapsed), (_a = {}, _a[group.name] = this._isGroupExpanded(group) // sic - presently open will be collapsed after setState
            , _a));
            this.setState({ isGroupCollapsed: newGroupCollapsed });
        }
    };
    LeftNav.prototype._isLinkComparisonKSActive = function () {
        return _ms_odsp_utilities_lib_killswitch_Killswitch__WEBPACK_IMPORTED_MODULE_6__["Killswitch"].isActivated('8a8d92e8-6c30-46d8-aa0b-7c6e761cc1ee', '5/1/2020', 'make the selected url logic case insensitive');
    };
    LeftNav.prototype._isLinkComparisonOrderKSActive = function () {
        return _ms_odsp_utilities_lib_killswitch_Killswitch__WEBPACK_IMPORTED_MODULE_6__["Killswitch"].isActivated('af709a1d-0662-49bf-ad9f-a8b7a06e2292', '10/8/2020', 'make the selected url logic check the url first');
    };
    LeftNav.defaultProps = {
        groups: null
    };
    LeftNav = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        office_ui_fabric_react_lib_utilities_decorators_withResponsiveMode__WEBPACK_IMPORTED_MODULE_9__["withResponsiveMode"]
    ], LeftNav);
    return LeftNav;
}(react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]));

//# sourceMappingURL=LeftNav.js.map

/***/ }),

/***/ "bldy":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-shared-react@47.12.13_d89e40c38ccaa8bd6af6488f37cb196d/node_modules/@ms/odsp-shared-react/lib/components/CompositeHeader/subComponents/CreateSiteButton.js ***!
  \***************************************************************************************************************************************************************************************************************************/
/*! exports provided: CreateSiteButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateSiteButton", function() { return CreateSiteButton; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var office_ui_fabric_react_lib_utilities_decorators_withResponsiveMode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! office-ui-fabric-react/lib/utilities/decorators/withResponsiveMode */ "5qgq");
/* harmony import */ var office_ui_fabric_react_lib_utilities_decorators_withResponsiveMode__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(office_ui_fabric_react_lib_utilities_decorators_withResponsiveMode__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var office_ui_fabric_react_lib_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! office-ui-fabric-react/lib/Button */ "epn0");
/* harmony import */ var _CompositeHeader_resx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../CompositeHeader.resx */ "tDcW");
/* harmony import */ var _CompositeHeader_resx__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_CompositeHeader_resx__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ms_odsp_utilities_lib_logging_events_Engagement_event__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ms/odsp-utilities/lib/logging/events/Engagement.event */ "cDPE");





/**
 * This button only appears on hub sites. It launches the create group panel in order to create and join the site to a hub in one go.
 */
var CreateSiteButton = function (props) {
    _ms_odsp_utilities_lib_logging_events_Engagement_event__WEBPACK_IMPORTED_MODULE_4__["Engagement"].logData({ name: 'CreateSiteFromHub.CreateSiteButton.Render' });
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](office_ui_fabric_react_lib_Button__WEBPACK_IMPORTED_MODULE_2__["CommandButton"], { iconProps: { iconName: 'Add' }, className: 'ms-CompositeHeader-collapsible', onClick: props.createSiteAction, text: props.responsiveMode >= office_ui_fabric_react_lib_utilities_decorators_withResponsiveMode__WEBPACK_IMPORTED_MODULE_1__["ResponsiveMode"].small && _CompositeHeader_resx__WEBPACK_IMPORTED_MODULE_3___default.a.createSiteLabel, ariaLabel: _CompositeHeader_resx__WEBPACK_IMPORTED_MODULE_3___default.a.createSiteAriaLabel, "data-automationid": 'CreateSiteSiteButton' }));
};
//# sourceMappingURL=CreateSiteButton.js.map

/***/ }),

/***/ "btbd":
/*!*******************************************************!*\
  !*** ./lib/components/SiteLeftNav/LeftNav.module.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../../../common/temp/node_modules/.pnpm/css-loader@3.2.1_webpack@4.44.2/node_modules/css-loader/dist/cjs.js!../../../../../common/temp/node_modules/.pnpm/postcss-loader@3.0.0/node_modules/postcss-loader/src??postcss!./LeftNav.module.css */ "7//7");
var loader = __webpack_require__(/*! @microsoft/load-themed-styles */ "jOlS");

if(typeof content === "string") content = [[module.i, content]];

// add the styles to the DOM
for (var i = 0; i < content.length; i++) loader.loadStyles(content[i][1], true);

if(content.locals) module.exports = content.locals;

/***/ }),

/***/ "c09w":
/*!**********************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-utilities@29.7.9_5d977624104b06c7bcaa2de974ff51f1/node_modules/@ms/odsp-utilities/lib/logging/events/Qos.event.js ***!
  \**********************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ms/odsp-core-bundle */ "K9kD");
/* harmony import */ var _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__["Qos"]; });

// Loading @ms/odsp-utilities/./lib/logging/events/Qos.event.js



/***/ }),

/***/ "c4TA":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-shared-react@47.12.13_d89e40c38ccaa8bd6af6488f37cb196d/node_modules/@ms/odsp-shared-react/lib/components/CompositeHeader/subComponents/UserExpirationBar.resx.js ***!
  \*********************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var strings = {"userExpirationBarMessage":"Ţĥēŕē ĩś {0} ĝũēśţ ŵĥō ŵĩĺĺ ĺōśē àććēśś ĩń ţĥē ńēxţ 21 ďàŷś.||Ţĥēŕē àŕē {0} ĝũēśţś ŵĥō ŵĩĺĺ ĺōśē àććēśś ĩń ţĥē ńēxţ 21 ďàŷś.","userExpirationBarMessageInterval":"1||2-","userExpirationBarManage":"Màńàĝē"};
strings.default = strings;
module.exports = strings;

/***/ }),

/***/ "cDPE":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-utilities@29.7.9_5d977624104b06c7bcaa2de974ff51f1/node_modules/@ms/odsp-utilities/lib/logging/events/Engagement.event.js ***!
  \*****************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ms/odsp-core-bundle */ "K9kD");
/* harmony import */ var _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__["Engagement"]; });

// Loading @ms/odsp-utilities/./lib/logging/events/Engagement.event.js



/***/ }),

/***/ "cDcd":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_cDcd__;

/***/ }),

/***/ "cwNP":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-shared-react@47.12.13_d89e40c38ccaa8bd6af6488f37cb196d/node_modules/@ms/odsp-shared-react/lib/components/HorizontalNav/HorizontalNav.resx.js ***!
  \*************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var strings = {"ariaLabel":"Ēńţēŕĩńĝ ńàvĩĝàţĩōń ćōńţŕōĺ.","splitButtonAriaLabel":"Ţĥĩś mēńũ ĩţēm ŵĩţĥ śũƀmēńũ. Ũśē àŕŕōŵ ķēŷś àńď ēńţēŕ ţō ńàvĩĝàţē","splitButtonAriaLabelWithName":"{0} śũƀmēńũ ƀũţţōń.","moreOptionsAriaLabel":"Mōŕē ōƥţĩōńś","editButtonAriaLabel":"Ēďĩţ śĩţē ńàvĩĝàţĩōń"};
strings.default = strings;
module.exports = strings;

/***/ }),

/***/ "dWz9":
/*!*************************************************!*\
  !*** ./lib/loaders/spcx-classicHomepageLink.js ***!
  \*************************************************/
/*! exports provided: DeferredClassicHomepageLink, classicHomepageLinkLoader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeferredClassicHomepageLink", function() { return DeferredClassicHomepageLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "classicHomepageLinkLoader", function() { return classicHomepageLinkLoader; });
/* harmony import */ var _common_Deferred__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/Deferred */ "Z/CY");

// tslint:disable-next-line:variable-name
var DeferredClassicHomepageLink = _common_Deferred__WEBPACK_IMPORTED_MODULE_0__["default"];
// tslint:disable-next-line:export-name
function classicHomepageLinkLoader() {
    return __webpack_require__.e(/*! import() | spcx-classichomepagelink */ "spcx-classichomepagelink").then(__webpack_require__.bind(null, /*! ../chunks/spcx-classicHomepageLink/ClassicHomepageLink */ "IXKO")).then(function (module) { return module.default; });
}


/***/ }),

/***/ "eOjM":
/*!*************************************!*\
  !*** ./lib/loaders/spcx-editNav.js ***!
  \*************************************/
/*! exports provided: editNavLoader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "editNavLoader", function() { return editNavLoader; });
// tslint:disable-next-line:export-name
function editNavLoader() {
    return __webpack_require__.e(/*! import() | spcx-editnav */ "spcx-editnav").then(__webpack_require__.bind(null, /*! ../chunks/spcx-editNav/EditNav */ "En+1")).then(function (module) { return module.default; });
}


/***/ }),

/***/ "eT67":
/*!**********************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/telemetry-manager@1.1.3/node_modules/@ms/telemetry-manager/lib/events/Qos.event.js ***!
  \**********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ms/odsp-core-bundle */ "K9kD");
/* harmony import */ var _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__["Qos"]; });

// Loading @ms/telemetry-manager/./lib/events/Qos.event.js



/***/ }),

/***/ "epn0":
/*!*************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/Button.js ***!
  \*************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/office-ui-fabric-react-bundle */ "KL1q");
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
// Loading office-ui-fabric-react/./lib/Button.js


/***/ }),

/***/ "fDmH":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-shared-react@47.12.13_d89e40c38ccaa8bd6af6488f37cb196d/node_modules/@ms/odsp-shared-react/lib/components/CompositeHeader/subComponents/ShareButton.js ***!
  \**********************************************************************************************************************************************************************************************************************/
/*! exports provided: ShareButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShareButton", function() { return ShareButton; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var office_ui_fabric_react_lib_utilities_decorators_withResponsiveMode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! office-ui-fabric-react/lib/utilities/decorators/withResponsiveMode */ "5qgq");
/* harmony import */ var office_ui_fabric_react_lib_utilities_decorators_withResponsiveMode__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(office_ui_fabric_react_lib_utilities_decorators_withResponsiveMode__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var office_ui_fabric_react_lib_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! office-ui-fabric-react/lib/Button */ "epn0");



var ShareButton = function (props) {
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](office_ui_fabric_react_lib_Button__WEBPACK_IMPORTED_MODULE_2__["CommandButton"], { iconProps: { iconName: 'Share' }, className: 'ms-CompositeHeader-collapsible', onClick: props.onShare, text: props.responsiveMode >= office_ui_fabric_react_lib_utilities_decorators_withResponsiveMode__WEBPACK_IMPORTED_MODULE_1__["ResponsiveMode"].small && props.shareLabel, "data-automationid": 'ShareSiteButton' }));
};
//# sourceMappingURL=ShareButton.js.map

/***/ }),

/***/ "fEoZ":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-shared-react@47.12.13_d89e40c38ccaa8bd6af6488f37cb196d/node_modules/@ms/odsp-shared-react/lib/components/CompositeHeader/CompositeHeader.js ***!
  \************************************************************************************************************************************************************************************************************/
/*! exports provided: CompositeHeader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompositeHeader", function() { return CompositeHeader; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _CompositeHeader_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CompositeHeader.scss */ "BGmg");
/* harmony import */ var office_ui_fabric_react_lib_utilities_decorators_withResponsiveMode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! office-ui-fabric-react/lib/utilities/decorators/withResponsiveMode */ "5qgq");
/* harmony import */ var office_ui_fabric_react_lib_utilities_decorators_withResponsiveMode__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(office_ui_fabric_react_lib_utilities_decorators_withResponsiveMode__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var office_ui_fabric_react_lib_Utilities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! office-ui-fabric-react/lib/Utilities */ "mkpW");
/* harmony import */ var office_ui_fabric_react_lib_Icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! office-ui-fabric-react/lib/Icon */ "56LG");
/* harmony import */ var office_ui_fabric_react_lib_Icon__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(office_ui_fabric_react_lib_Icon__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _subComponents_CreateSiteButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./subComponents/CreateSiteButton */ "bldy");
/* harmony import */ var _subComponents_UserExpirationBar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./subComponents/UserExpirationBar */ "ySJ3");
/* harmony import */ var _subComponents_ReadOnlyBar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./subComponents/ReadOnlyBar */ "iywR");
/* harmony import */ var _subComponents_SiteResourceQuotaBar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./subComponents/SiteResourceQuotaBar */ "hu0g");
/* harmony import */ var _subComponents_HeaderMessageBar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./subComponents/HeaderMessageBar */ "2eGb");
/* harmony import */ var _subComponents_OutlookButton__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./subComponents/OutlookButton */ "z1mu");
/* harmony import */ var _subComponents_ShareDialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./subComponents/ShareDialog */ "PRDY");
/* harmony import */ var _subComponents_SiteScriptProgressIndicatorLoader__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./subComponents/SiteScriptProgressIndicatorLoader */ "7qpm");
/* harmony import */ var _layouts_UnifiedHeader__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./layouts/UnifiedHeader */ "wJGB");
/* harmony import */ var _MembersInfo_MembersInfo__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../MembersInfo/MembersInfo */ "KGa+");
/* harmony import */ var _LivePersonaCardAdapter_DeferredSpLivePersonaCard__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../LivePersonaCardAdapter/DeferredSpLivePersonaCard */ "5Txe");
/* harmony import */ var _ms_odsp_utilities_lib_features_FeatureOverrides__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ms/odsp-utilities/lib/features/FeatureOverrides */ "iVgB");
/* harmony import */ var _CompositeHeader_resx__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./CompositeHeader.resx */ "tDcW");
/* harmony import */ var _CompositeHeader_resx__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_CompositeHeader_resx__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _ms_odsp_utilities_lib_logging_events_Engagement_event__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ms/odsp-utilities/lib/logging/events/Engagement.event */ "cDPE");
/* harmony import */ var _ms_odsp_utilities_lib_killswitch_Killswitch__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ms/odsp-utilities/lib/killswitch/Killswitch */ "QUgr");
/* harmony import */ var _ms_odsp_datasources_lib_ViewNav__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @ms/odsp-datasources/lib/ViewNav */ "Qjmx");
/* harmony import */ var _common_telemetry_NavigationSource__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../common/telemetry/NavigationSource */ "MFpg");
/* harmony import */ var _subComponents_TeamsCustomActionButtonsLoader__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./subComponents/TeamsCustomActionButtonsLoader */ "tz9r");
/* harmony import */ var _ReactDeferredComponent_ReactDeferredComponent__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../ReactDeferredComponent/ReactDeferredComponent */ "+3tZ");
/* harmony import */ var _ms_shared_react_web_templates_lib_firstRunDialog_WebTemplatesGalleryFirstRunUtil__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @ms/shared-react-web-templates/lib/firstRunDialog/WebTemplatesGalleryFirstRunUtil */ "yGrp");
/* harmony import */ var _ms_shared_react_web_templates_lib_firstRunDialog_WebTemplatesGalleryFirstRunDialogLoader__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @ms/shared-react-web-templates/lib/firstRunDialog/WebTemplatesGalleryFirstRunDialogLoader */ "QCAU");



























var LPCMembershipManagementExperience = { ODB: 1526 };
var UserExpirationPanelExperience = { ODB: 1559 };
var teamsCustomUtil = undefined;
function getTeamsUtilJs() {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, __webpack_require__.e(/*! import() | teamscustomutil */ "teamscustomutil").then(__webpack_require__.bind(null, /*! ./subComponents/TeamsCustomActionsUtil */ "DgFN"))];
                case 1:
                    teamsCustomUtil = _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
/**
 * Composite Header control that composites a set of sub components such as Header and Horizontal Nav
 * @public
 */
var CompositeHeader = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(CompositeHeader, _super);
    function CompositeHeader(props) {
        var _this = _super.call(this, props) || this;
        /**
         * @inheritDoc
         * @see ICompositeHeader.measureNavLayout()
         */
        _this.measureNavLayout = function () {
            if (_this._unifiedHeaderInstance) {
                _this._unifiedHeaderInstance.measureNavsLayouts();
            }
        };
        _this._updateUnifiedHeaderReference = function (component) {
            _this._unifiedHeaderInstance = component;
        };
        _this._onShareDialogClose = function () {
            _this.setState({ shareVisible: false });
        };
        _this._showShare = function (ev) {
            _this.setState({ shareVisible: true });
            ev.stopPropagation();
            ev.preventDefault();
        };
        _this._getDeferredCoachmark = function (shy, isShyMode, targetRef) {
            if (_ms_odsp_utilities_lib_killswitch_Killswitch__WEBPACK_IMPORTED_MODULE_20__["Killswitch"].isActivated('8e4365c3-497e-48c8-ba24-f6782e1f3faf', '07/10/2020', 'Site header coachmark') ||
                isShyMode ||
                shy) {
                return null;
            }
            var deferredProps = {
                modulePath: './subComponents/SiteHeaderCoachmark',
                moduleLoader: {
                    load: function (modulePath) {
                        // string path must NOT be a variable here
                        return Promise.all(/*! import() | shared-react-site-header-title-coachmark */[__webpack_require__.e(0), __webpack_require__.e(4), __webpack_require__.e("vendors~shared-react-site-header-title-co~f08d326e"), __webpack_require__.e("shared-react-site-header-title-coachmark")]).then(__webpack_require__.bind(null, /*! ./subComponents/SiteHeaderCoachmark */ "nsn6")).then(function (siteHeaderCoachmark) {
                            return { './subComponents/SiteHeaderCoachmark': siteHeaderCoachmark };
                        });
                    },
                    parse: function (module) {
                        return module['./subComponents/SiteHeaderCoachmark'] &&
                            module['./subComponents/SiteHeaderCoachmark'].SiteHeaderCoachmark;
                    }
                },
                props: {
                    dismissCallback: _this._onDismissCoachmark,
                    target: targetRef
                }
            };
            return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ReactDeferredComponent_ReactDeferredComponent__WEBPACK_IMPORTED_MODULE_24__["ReactDeferredComponent"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, deferredProps));
        };
        _this._onDismissCoachmark = function () {
            _this.setState({ isCoachmarkVisible: false });
            _this.props.siteHeaderProps.coachmarkDismissCallback();
        };
        _this.state = {
            shareVisible: false,
            isCoachmarkVisible: _this.props.siteHeaderProps.showCoachmark
        };
        return _this;
    }
    CompositeHeader.prototype.componentDidMount = function () {
        if (isRefineSiteNavLoggingKillSwitchActivated() &&
            this.props.horizontalNavProps &&
            this.props.horizontalNavProps.items &&
            this.props.siteHeaderProps.pageContext &&
            this.props.siteHeaderProps.pageContext.navigationInfo &&
            this.props.siteHeaderProps.pageContext.navigationInfo.isAudienceTargeted) {
            if (this.props.siteHeaderProps.pageContext.isHubSite) {
                // if it's hubsite, parse site nav nodes due to isAudienceTargeted flag contains topNav
                var horizontalNavAudienceTargeted = _ms_odsp_datasources_lib_ViewNav__WEBPACK_IMPORTED_MODULE_21__["AudiencesDataSource"].containsAudienceTargetedNode(this.props.horizontalNavProps.items);
                if (horizontalNavAudienceTargeted) {
                    _ms_odsp_utilities_lib_logging_events_Engagement_event__WEBPACK_IMPORTED_MODULE_19__["Engagement"].logData({
                        name: 'SiteNav.AudienceTargeting'
                    });
                }
            }
            else {
                _ms_odsp_utilities_lib_logging_events_Engagement_event__WEBPACK_IMPORTED_MODULE_19__["Engagement"].logData({
                    name: 'SiteNav.AudienceTargeting'
                });
            }
        }
        this.props.onRendered && this.props.onRendered(true);
        // Importing the teams Util only if we are in teams app context
        if (this.props.teamsAppMode) {
            getTeamsUtilJs();
        }
    };
    CompositeHeader.prototype.componentDidUpdate = function () {
        this.props.onRendered && this.props.onRendered(false);
    };
    CompositeHeader.prototype.render = function () {
        var _a, _b;
        var _c = this.props, onRenderHorizontalNav = _c.onRenderHorizontalNav, horizontalNavProps = _c.horizontalNavProps, unifiedLayout = _c.unifiedLayout, topNavProps = _c.topNavProps, follow = _c.follow, siteHeaderProps = _c.siteHeaderProps, goToOutlook = _c.goToOutlook;
        var readOnlyBar = this.props.siteReadOnlyProps && this.props.siteReadOnlyProps.isSiteReadOnly && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_subComponents_ReadOnlyBar__WEBPACK_IMPORTED_MODULE_8__["ReadOnlyBar"], { siteReadOnlyProps: this.props.siteReadOnlyProps }));
        var siteResourceQuotaBar = this.props.siteResourceQuotaProps &&
            this.props.siteResourceQuotaProps.siteResourceQuotaState !== 0 /* NoWarning */ && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_subComponents_SiteResourceQuotaBar__WEBPACK_IMPORTED_MODULE_9__["SiteResourceQuotaBar"], { siteResourceQuotaProps: this.props.siteResourceQuotaProps }));
        var userExpirationBar = this.props.userExpirationBarProps &&
            _ms_odsp_utilities_lib_features_FeatureOverrides__WEBPACK_IMPORTED_MODULE_17__["default"].isFeatureEnabled(UserExpirationPanelExperience) && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_subComponents_UserExpirationBar__WEBPACK_IMPORTED_MODULE_7__["UserExpirationBar"], { userExpirationOnClick: this.props.userExpirationBarProps.userExpirationOnClick, onDismiss: this.props.userExpirationBarProps.onDismiss, expiringUserCount: this.props.userExpirationBarProps.expiringUserCount }));
        var messageBar = this.props.messageBarProps && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_subComponents_HeaderMessageBar__WEBPACK_IMPORTED_MODULE_10__["HeaderMessageBar"], { messageBarProps: this.props.messageBarProps }));
        var policyBar = this.props.policyBarProps && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_subComponents_HeaderMessageBar__WEBPACK_IMPORTED_MODULE_10__["HeaderMessageBar"], { messageBarProps: this.props.policyBarProps }));
        var unauthorizedTenantBar = this.props.unauthorizedTenantBarProps && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_subComponents_HeaderMessageBar__WEBPACK_IMPORTED_MODULE_10__["HeaderMessageBar"], { messageBarProps: this.props.unauthorizedTenantBarProps }));
        var noSharePointSyntexLicenseBar = this.props.noSharePointSyntexLicenseBarProps && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_subComponents_HeaderMessageBar__WEBPACK_IMPORTED_MODULE_10__["HeaderMessageBar"], { messageBarProps: this.props.noSharePointSyntexLicenseBarProps }));
        var goToOutlookButton;
        if (goToOutlook) {
            var GoToOutlookButtonAs = goToOutlook.goToOutlookButtonAs, goToOutlookButtonProps = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(goToOutlook, ["goToOutlookButtonAs"]);
            goToOutlookButton = GoToOutlookButtonAs ? (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](GoToOutlookButtonAs, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, goToOutlookButtonProps, { defaultRender: _subComponents_OutlookButton__WEBPACK_IMPORTED_MODULE_11__["OutlookButton"] }))) : (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_subComponents_OutlookButton__WEBPACK_IMPORTED_MODULE_11__["OutlookButton"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, goToOutlookButtonProps)));
        }
        var membersInfoLink;
        var membersText = siteHeaderProps.membersInfoProps && siteHeaderProps.membersInfoProps.membersText;
        if (membersText) {
            if (_ms_odsp_utilities_lib_features_FeatureOverrides__WEBPACK_IMPORTED_MODULE_17__["default"].isFeatureEnabled(LPCMembershipManagementExperience)) {
                var lpcMembershipManagementCard = void 0;
                var useLpc = siteHeaderProps.groupEmail && siteHeaderProps.pageContext && siteHeaderProps.lpcModuleLoader;
                var membersCount = (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", null,
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](office_ui_fabric_react_lib_Icon__WEBPACK_IMPORTED_MODULE_5__["Icon"], { iconName: 'Contact' }),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", { className: 'ms-membersInfo-membersNumber ms-font-m', "data-automationid": 'NumberOfMembersText' }, membersText)));
                if (useLpc) {
                    var lpcCardBehavior = {
                        onCardOpen: null,
                        onCardClose: null,
                        disableHover: true,
                        locationToOpen: 'ExpandedViewGroupMembersSection'
                    };
                    lpcMembershipManagementCard = (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_LivePersonaCardAdapter_DeferredSpLivePersonaCard__WEBPACK_IMPORTED_MODULE_16__["DeferredSpLivePersonaCard"], { personaType: 'Group', identifier: siteHeaderProps.groupEmail, pageContext: siteHeaderProps.pageContext, loggingData: { name: 'SiteHeader.MembersInfo.Click' }, "data-automationId": 'SiteHeaderMembersInfoLink', moduleLoader: siteHeaderProps.lpcModuleLoader, customWaiter: siteHeaderProps.lpcModuleLoaderWaiter, placeHolder: membersCount, lpcCardBehavior: lpcCardBehavior, ariaLabel: membersText }, membersCount));
                }
                else {
                    lpcMembershipManagementCard = membersCount;
                }
                var membersInfoProps = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.props.siteHeaderProps.membersInfoProps), { lpcMembershipManagementCard: lpcMembershipManagementCard });
                membersInfoLink = react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_MembersInfo_MembersInfo__WEBPACK_IMPORTED_MODULE_15__["MembersInfo"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, membersInfoProps));
            }
            else {
                membersInfoLink = react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_MembersInfo_MembersInfo__WEBPACK_IMPORTED_MODULE_15__["MembersInfo"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, siteHeaderProps.membersInfoProps));
            }
        }
        var siteScriptProgressIndicator = this.props.siteScriptProgressIndicator && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_subComponents_SiteScriptProgressIndicatorLoader__WEBPACK_IMPORTED_MODULE_13__["SiteScriptProgressIndicatorLoader"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.props.siteScriptProgressIndicator), { responsiveMode: this.props.responsiveMode }))));
        var teamsCustomActionButtons = this.props.teamsAppMode && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_subComponents_TeamsCustomActionButtonsLoader__WEBPACK_IMPORTED_MODULE_23__["TeamsCustomActionButtonsLoader"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, { responsiveMode: this.props.responsiveMode })));
        var webTemplatesGalleryFirstRunDialog = siteHeaderProps.pageContext &&
            !siteHeaderProps.pageContext.hasPendingWebTemplateExtension &&
            Object(_ms_shared_react_web_templates_lib_firstRunDialog_WebTemplatesGalleryFirstRunUtil__WEBPACK_IMPORTED_MODULE_25__["shouldRenderWebTemplatesGalleryFirstRun"])(siteHeaderProps.pageContext) && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ms_shared_react_web_templates_lib_firstRunDialog_WebTemplatesGalleryFirstRunDialogLoader__WEBPACK_IMPORTED_MODULE_26__["WebTemplatesGalleryFirstRunDialogLoader"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, {
            pageContext: siteHeaderProps.pageContext,
            imageUrls: {
                webTemplatesFirstRunIllustration: (_b = (_a = this.props.siteScriptProgressIndicator) === null || _a === void 0 ? void 0 : _a.imageUrls) === null || _b === void 0 ? void 0 : _b.webTemplatesFirstRunIllustration
            }
        })));
        var shareDialog = this.props.shareButton && this.state.shareVisible && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_subComponents_ShareDialog__WEBPACK_IMPORTED_MODULE_12__["ShareDialog"], { title: this.props.siteHeaderProps.siteTitle, shareButton: this.props.shareButton, onCloseCallback: this._onShareDialogClose, deferredWaiter: this.props.siteHeaderProps.lpcModuleLoaderWaiter }));
        if (this.props.shareButton && !this.props.shareButton.onShare) {
            this.props.shareButton.onShare = this._showShare;
        }
        if (this.props.follow) {
            this.props.follow.hideLabel = this.props.teamsAppMode;
        }
        var share = this.props.shareButton;
        var createSiteButton = this.props.createSiteButton && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_subComponents_CreateSiteButton__WEBPACK_IMPORTED_MODULE_6__["CreateSiteButton"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.props.createSiteButton), { responsiveMode: this.props.responsiveMode }))));
        var headerLayoutProps = {
            siteHeaderProps: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.props.siteHeaderProps), { responsiveMode: this.props.responsiveMode })),
            headerStrings: {
                siteLogoLabel: _CompositeHeader_resx__WEBPACK_IMPORTED_MODULE_18___default.a.siteLogoLabel,
                createSiteLabel: _CompositeHeader_resx__WEBPACK_IMPORTED_MODULE_18___default.a.createSiteLabel,
                siteActionsLabel: _CompositeHeader_resx__WEBPACK_IMPORTED_MODULE_18___default.a.siteActionsLabel,
                languagesLabel: _CompositeHeader_resx__WEBPACK_IMPORTED_MODULE_18___default.a.languagesLabel,
                leftNavToggleButtonTitle: _CompositeHeader_resx__WEBPACK_IMPORTED_MODULE_18___default.a.leftNavToggleButtonTitle,
                leftNavToggleButtonLabel: _CompositeHeader_resx__WEBPACK_IMPORTED_MODULE_18___default.a.leftNavToggleButtonLabel,
                overflowActionsButtonLabel: _CompositeHeader_resx__WEBPACK_IMPORTED_MODULE_18___default.a.overflowActionsButtonLabel,
                ibSegmentLabel: _CompositeHeader_resx__WEBPACK_IMPORTED_MODULE_18___default.a.ibSegmentLabel,
                ibSegmentLabelPlural: _CompositeHeader_resx__WEBPACK_IMPORTED_MODULE_18___default.a.ibSegmentLabelPlural,
                externalIdentityBadge: _CompositeHeader_resx__WEBPACK_IMPORTED_MODULE_18___default.a.externalIdentityBadge
            },
            onRenderHorizontalNav: onRenderHorizontalNav,
            siteNavProps: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, horizontalNavProps), { navigationSource: _common_telemetry_NavigationSource__WEBPACK_IMPORTED_MODULE_22__["NavigationSource"].CompositeHeader }),
            topNavProps: topNavProps,
            readOnlyBar: readOnlyBar,
            siteResourceQuotaBar: siteResourceQuotaBar,
            userExpirationBar: userExpirationBar,
            messageBar: messageBar,
            policyBar: policyBar,
            unauthorizedTenantBar: unauthorizedTenantBar,
            noSharePointSyntexLicenseBar: noSharePointSyntexLicenseBar,
            follow: follow,
            siteScriptProgressIndicator: siteScriptProgressIndicator,
            webTemplatesGalleryFirstRunDialog: webTemplatesGalleryFirstRunDialog,
            share: share,
            createSiteButton: createSiteButton,
            createSiteAction: this.props.createSiteButton
                ? this.props.createSiteButton.createSiteAction
                : undefined,
            leftNavToggleCallback: this.props.leftNavToggleCallback,
            isLeftNavExpanded: this.props.isLeftNavExpanded,
            goToOutlookButton: goToOutlookButton,
            shareDialog: shareDialog,
            membersInfoLink: membersInfoLink,
            searchBox: this.props.searchBox,
            responsiveMode: this.props.responsiveMode,
            unifiedLayout: unifiedLayout,
            languageSelector: this.props.languageSelector,
            getLanguageSelections: this.props.getLanguageSelections,
            customActionElements: this.props.teamsAppMode ? teamsCustomActionButtons : undefined,
            customActionContextualMenuItems: this.props.teamsAppMode && teamsCustomUtil ? teamsCustomUtil.teamsContextualMenuItems() : undefined,
            getDeferredCoachmark: this._getDeferredCoachmark,
            isCoachmarkVisible: this.state.isCoachmarkVisible
        };
        // Part 2: finished setting up props above, now we need to make the header components
        // if layoutAs, use the custom layout, otherwise use the UnifiedHeader
        var headerLayoutToUse;
        if (this.props.layoutAs) {
            headerLayoutToUse = react__WEBPACK_IMPORTED_MODULE_1__["createElement"](this.props.layoutAs, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, headerLayoutProps));
        }
        else {
            headerLayoutToUse = (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_layouts_UnifiedHeader__WEBPACK_IMPORTED_MODULE_14__["UnifiedHeader"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, headerLayoutProps, { componentRef: this._updateUnifiedHeaderReference })));
        }
        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, headerLayoutToUse);
    };
    CompositeHeader = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        office_ui_fabric_react_lib_utilities_decorators_withResponsiveMode__WEBPACK_IMPORTED_MODULE_3__["withResponsiveMode"]
    ], CompositeHeader);
    return CompositeHeader;
}(office_ui_fabric_react_lib_Utilities__WEBPACK_IMPORTED_MODULE_4__["BaseComponent"]));

function isRefineSiteNavLoggingKillSwitchActivated() {
    return _ms_odsp_utilities_lib_killswitch_Killswitch__WEBPACK_IMPORTED_MODULE_20__["Killswitch"].isActivated('0123f94e-245a-4fca-a866-b5ebd969abe9', '2020-08-06', 'Refine audience targeting logging for header nav');
}
//# sourceMappingURL=CompositeHeader.js.map

/***/ }),

/***/ "fV/o":
/*!*******************************************!*\
  !*** ./lib/components/HubNav/HubNav.resx ***!
  \*******************************************/
/*! exports provided: EditHubNavLinksTitle, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"EditHubNavLinksTitle\":\"Ēďĩţ ĥũƀ ńàvĩĝàţĩōń\"}");

/***/ }),

/***/ "fglE":
/*!**********************************************!*\
  !*** external "@ms/uifabric-styling-bundle" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_fglE__;

/***/ }),

/***/ "g/CF":
/*!******************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-media@2.0.244/node_modules/@ms/odsp-media/dist/media/images/sitescripts/working_sitedesign_2x.png ***!
  \******************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "working_sitedesign_2x_63376fd1df94de65dced80086709a7ab.png";

/***/ }),

/***/ "h0ZA":
/*!************************************************!*\
  !*** ./lib/loaders/spcx-groupsSiteProvider.js ***!
  \************************************************/
/*! exports provided: GroupSiteProviderFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupSiteProviderFactory", function() { return GroupSiteProviderFactory; });
/* harmony import */ var _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ms/odsp-utilities-bundle */ "y88i");
/* harmony import */ var _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_0__);

// tslint:disable-next-line:export-name
var GroupSiteProviderFactory = /** @class */ (function () {
    function GroupSiteProviderFactory() {
    }
    GroupSiteProviderFactory.GetGroupSiteProvider = function (pageContext) {
        if (GroupSiteProviderFactory._groupSiteProvider) {
            return _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_0__["Promise"].wrap(GroupSiteProviderFactory._groupSiteProvider);
        }
        else if (GroupSiteProviderFactory._groupSiteProviderPromise) {
            return GroupSiteProviderFactory._groupSiteProviderPromise;
        }
        GroupSiteProviderFactory._groupSiteProviderPromise = new _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_0__["Promise"](function (resolve) {
            __webpack_require__.e(/*! import() | odsp-datasources-groupsiteprovider */ "vendors~odsp-datasources-groupsiteprovide~94eb3289").then(__webpack_require__.bind(null, /*! @ms/odsp-datasources/lib/providers/groups/GroupSiteProvider */ "ZaX7")).then(function (module) {
                GroupSiteProviderFactory._groupSiteProvider = new module.GroupSiteProvider({ pageContext: pageContext });
                resolve(GroupSiteProviderFactory._groupSiteProvider);
            });
        });
        return GroupSiteProviderFactory._groupSiteProviderPromise;
    };
    return GroupSiteProviderFactory;
}());



/***/ }),

/***/ "hZiR":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-shared-react@47.12.13_d89e40c38ccaa8bd6af6488f37cb196d/node_modules/@ms/odsp-shared-react/lib/components/HorizontalNav/HorizontalNav.scss.js ***!
  \*************************************************************************************************************************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _microsoft_load_themed_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/load-themed-styles */ "jOlS");
/* harmony import */ var _microsoft_load_themed_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_load_themed_styles__WEBPACK_IMPORTED_MODULE_0__);
/* tslint:disable */

Object(_microsoft_load_themed_styles__WEBPACK_IMPORTED_MODULE_0__["loadStyles"])([{ "rawString": ".ms-HorizontalNav{white-space:nowrap}.ms-HorizontalNavItems{padding:0px 2px}.ms-HorizontalNavItem{display:inline-block}[dir='ltr'] .ms-HorizontalNavItem:not(:last-child){margin-right:28px}[dir='rtl'] .ms-HorizontalNavItem:not(:last-child){margin-left:28px}.ms-HorizontalNavItem-link{background:none;cursor:pointer;min-width:20px;text-align:center;margin:0;padding:0;display:inline-block;height:100%;-webkit-box-sizing:border-box;box-sizing:border-box;text-decoration:none;outline:transparent;position:relative}.ms-HorizontalNavItem-link::-moz-focus-inner{border:0}.ms-Fabric--isFocusVisible .ms-HorizontalNavItem-link:focus:after{content:'';position:absolute;top:0;right:0;bottom:0;left:0;pointer-events:none;border:1px solid " }, { "theme": "neutralSecondary", "defaultValue": "#605e5c" }, { "rawString": "}@media screen and (-ms-high-contrast: active){.ms-Fabric--isFocusVisible .ms-HorizontalNavItem-link:focus:after{border-color:ActiveBorder}}.ms-HorizontalNavItem-link.is-selected{padding-bottom:4px;border-radius:unset;border-top:none;border-left:none;border-right:none}.ms-HorizontalNavItem-link.is-not-selected,.ms-HorizontalNavItem-link.is-header{padding:0 0 6px 0}.ms-HorizontalNavItem-splitbutton{padding:0px;background:transparent;border-style:none;outline:transparent;position:relative}[dir='ltr'] .ms-HorizontalNavItem-splitbutton{margin-left:6px}[dir='rtl'] .ms-HorizontalNavItem-splitbutton{margin-right:6px}.ms-HorizontalNavItem-splitbutton::-moz-focus-inner{border:0}.ms-Fabric--isFocusVisible .ms-HorizontalNavItem-splitbutton:focus:after{content:'';position:absolute;top:0;right:0;bottom:0;left:0;pointer-events:none;border:1px solid " }, { "theme": "neutralSecondary", "defaultValue": "#605e5c" }, { "rawString": "}@media screen and (-ms-high-contrast: active){.ms-Fabric--isFocusVisible .ms-HorizontalNavItem-splitbutton:focus:after{border-color:ActiveBorder}}.ms-HorizontalNavItem-splitbutton-width{width:21.5px}.ms-HorizontalNav-chevronDown{display:inline;vertical-align:middle;line-height:" }, { "theme": "xSmallFontSize", "defaultValue": "10px" }, { "rawString": "}.ms-HorizontalNavItem-overflow{line-height:" }, { "theme": "largeFontSize", "defaultValue": "18px" }, { "rawString": ";vertical-align:middle}\n" }]);
//# sourceMappingURL=HorizontalNav.scss.js.map

/***/ }),

/***/ "hiL/":
/*!*********************************************!*\
  !*** external "@ms/sp-component-utilities" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_hiL___;

/***/ }),

/***/ "hu0g":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-shared-react@47.12.13_d89e40c38ccaa8bd6af6488f37cb196d/node_modules/@ms/odsp-shared-react/lib/components/CompositeHeader/subComponents/SiteResourceQuotaBar.js ***!
  \*******************************************************************************************************************************************************************************************************************************/
/*! exports provided: SiteResourceQuotaBar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SiteResourceQuotaBar", function() { return SiteResourceQuotaBar; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var office_ui_fabric_react_lib_MessageBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! office-ui-fabric-react/lib/MessageBar */ "oW6A");


var SiteResourceQuotaBar = function (resourceQuotaProps) {
    var props = resourceQuotaProps.siteResourceQuotaProps;
    // default to the generic read only string
    var resourceQuotaString = undefined;
    if (props.siteResourceQuotaState === 2 /* OverQuota */) {
        resourceQuotaString = props.siteResourceOverQuota;
    }
    else {
        resourceQuotaString = props.siteResourceQuotaWarning;
    }
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](office_ui_fabric_react_lib_MessageBar__WEBPACK_IMPORTED_MODULE_1__["MessageBar"], { messageBarType: office_ui_fabric_react_lib_MessageBar__WEBPACK_IMPORTED_MODULE_1__["MessageBarType"].warning }, resourceQuotaString);
};
//# sourceMappingURL=SiteResourceQuotaBar.js.map

/***/ }),

/***/ "i/zE":
/*!***********************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/persistent-cache@1.0.9_@uifabric+utilities@7.33.2/node_modules/@ms/persistent-cache/lib/utilities/Global.js ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: global */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "global", function() { return global; });
// to support PersistentCache in worker namespace, we need to support both window and self
var global = typeof window === 'undefined' ? self : window;
//# sourceMappingURL=Global.js.map

/***/ }),

/***/ "iCFh":
/*!***********************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/persistent-cache@1.0.9_@uifabric+utilities@7.33.2/node_modules/@ms/persistent-cache/lib/IPersistentCache.js ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: PersistentCacheType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersistentCacheType", function() { return PersistentCacheType; });
var PersistentCacheType;
(function (PersistentCacheType) {
    PersistentCacheType[PersistentCacheType["localStorage"] = 0] = "localStorage";
    PersistentCacheType[PersistentCacheType["indexedDB"] = 1] = "indexedDB";
    PersistentCacheType[PersistentCacheType["none"] = 2] = "none"; // this is actually fresh data
})(PersistentCacheType || (PersistentCacheType = {}));
//# sourceMappingURL=IPersistentCache.js.map

/***/ }),

/***/ "iVgB":
/*!***********************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-utilities@29.7.9_5d977624104b06c7bcaa2de974ff51f1/node_modules/@ms/odsp-utilities/lib/features/FeatureOverrides.js ***!
  \***********************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ms/odsp-core-bundle */ "K9kD");
/* harmony import */ var _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__["FeatureOverrides"]; });

// Loading @ms/odsp-utilities/./lib/features/FeatureOverrides.js



/***/ }),

/***/ "iywR":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-shared-react@47.12.13_d89e40c38ccaa8bd6af6488f37cb196d/node_modules/@ms/odsp-shared-react/lib/components/CompositeHeader/subComponents/ReadOnlyBar.js ***!
  \**********************************************************************************************************************************************************************************************************************/
/*! exports provided: ReadOnlyBar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReadOnlyBar", function() { return ReadOnlyBar; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var office_ui_fabric_react_lib_MessageBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! office-ui-fabric-react/lib/MessageBar */ "oW6A");


var ReadOnlyBar = function (readOnlyBarProps) {
    var props = readOnlyBarProps.siteReadOnlyProps;
    // default to the generic read only string
    var readOnlyString = props.siteReadOnlyString;
    var readOnlyState = props.siteReadOnlyState;
    if (readOnlyState !== undefined && readOnlyState !== null && readOnlyState !== -2 /* unknown */) {
        // the siteIsMovingString and siteMoveCompletedString are optional and may not be set
        if (readOnlyState === 1 /* siteMoveInProgress */ && props.siteIsMovingString) {
            readOnlyString = props.siteIsMovingString;
        }
        else if (readOnlyState === 2 /* siteMoveComplete */ && props.siteMoveCompletedString) {
            readOnlyString = props.siteMoveCompletedString;
        }
    }
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](office_ui_fabric_react_lib_MessageBar__WEBPACK_IMPORTED_MODULE_1__["MessageBar"], { messageBarType: office_ui_fabric_react_lib_MessageBar__WEBPACK_IMPORTED_MODULE_1__["MessageBarType"].warning }, readOnlyString);
};
//# sourceMappingURL=ReadOnlyBar.js.map

/***/ }),

/***/ "jH+c":
/*!***************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-datasources@45.13.10_e509c819ab980023b76e5746ec0fc9e2/node_modules/@ms/odsp-datasources/lib/Permissions.js ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: Identity, IdentityType, PermissionMask */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utilities_permissions_Identity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utilities/permissions/Identity */ "7AwM");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Identity", function() { return _utilities_permissions_Identity__WEBPACK_IMPORTED_MODULE_0__["Identity"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IdentityType", function() { return _utilities_permissions_Identity__WEBPACK_IMPORTED_MODULE_0__["IdentityType"]; });

/* harmony import */ var _utilities_permissions_PermissionMask__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utilities/permissions/PermissionMask */ "z7Uc");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PermissionMask", function() { return _utilities_permissions_PermissionMask__WEBPACK_IMPORTED_MODULE_1__["PermissionMask"]; });



//# sourceMappingURL=Permissions.js.map

/***/ }),

/***/ "jOlS":
/*!************************************************!*\
  !*** external "@microsoft/load-themed-styles" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_jOlS__;

/***/ }),

/***/ "jUFO":
/*!*******************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/utilities-async@1.1.1/node_modules/@ms/utilities-async/lib/wait/TimeoutError.js ***!
  \*******************************************************************************************************************************************/
/*! exports provided: TimeoutError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeoutError", function() { return TimeoutError; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ms_utilities_error_lib_ApiError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ms/utilities-error/lib/ApiError */ "6e34");


/**
 * Error to be thrown when an operation times out.
 * @public
 */
var TimeoutError = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(TimeoutError, _super);
    function TimeoutError(_a) {
        var timeout = _a.timeout, props = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(_a, ["timeout"]);
        var _this = _super.call(this, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ message: 'Timeout' }, props), { extraData: {
                timeout: timeout
            } })) || this;
        _this.timeout = timeout;
        _this.name = 'TimeoutError';
        return _this;
    }
    return TimeoutError;
}(_ms_utilities_error_lib_ApiError__WEBPACK_IMPORTED_MODULE_1__["ApiError"]));

//# sourceMappingURL=TimeoutError.js.map

/***/ }),

/***/ "jfPA":
/*!*********************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-shared-react@47.12.13_d89e40c38ccaa8bd6af6488f37cb196d/node_modules/@ms/odsp-shared-react/lib/CompositeHeader.js ***!
  \*********************************************************************************************************************************************************************************/
/*! exports provided: CompositeHeader, FollowState, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_CompositeHeader_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/CompositeHeader/index */ "y33C");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CompositeHeader", function() { return _components_CompositeHeader_index__WEBPACK_IMPORTED_MODULE_0__["CompositeHeader"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FollowState", function() { return _components_CompositeHeader_index__WEBPACK_IMPORTED_MODULE_0__["FollowState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _components_CompositeHeader_index__WEBPACK_IMPORTED_MODULE_0__["CompositeHeader"]; });



//# sourceMappingURL=CompositeHeader.js.map

/***/ }),

/***/ "jgiY":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-shared-react@47.12.13_d89e40c38ccaa8bd6af6488f37cb196d/node_modules/@ms/odsp-shared-react/lib/components/LivePersonaCardAdapter/DeferredSpLivePersonaCard.scss.js ***!
  \**********************************************************************************************************************************************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _microsoft_load_themed_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/load-themed-styles */ "jOlS");
/* harmony import */ var _microsoft_load_themed_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_load_themed_styles__WEBPACK_IMPORTED_MODULE_0__);
/* tslint:disable */

Object(_microsoft_load_themed_styles__WEBPACK_IMPORTED_MODULE_0__["loadStyles"])([{ "rawString": ".sp-deferredLivePersonaCard-root{display:inline-block}\n" }]);
//# sourceMappingURL=DeferredSpLivePersonaCard.scss.js.map

/***/ }),

/***/ "lRed":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-shared-react@47.12.13_d89e40c38ccaa8bd6af6488f37cb196d/node_modules/@ms/odsp-shared-react/lib/components/CompositeHeader/subComponents/FollowButton.js ***!
  \***********************************************************************************************************************************************************************************************************************/
/*! exports provided: FollowButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FollowButton", function() { return FollowButton; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var office_ui_fabric_react_lib_utilities_decorators_withResponsiveMode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! office-ui-fabric-react/lib/utilities/decorators/withResponsiveMode */ "5qgq");
/* harmony import */ var office_ui_fabric_react_lib_utilities_decorators_withResponsiveMode__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(office_ui_fabric_react_lib_utilities_decorators_withResponsiveMode__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var office_ui_fabric_react_lib_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! office-ui-fabric-react/lib/Button */ "epn0");
/* harmony import */ var office_ui_fabric_react_lib_Utilities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! office-ui-fabric-react/lib/Utilities */ "mkpW");
/* harmony import */ var _CompositeHeader_Props__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../CompositeHeader.Props */ "Wrjt");
/* harmony import */ var _FollowButton_resx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./FollowButton.resx */ "1Dzy");
/* harmony import */ var _FollowButton_resx__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_FollowButton_resx__WEBPACK_IMPORTED_MODULE_6__);







var FollowButton = function (props) {
    var followProps = props;
    function _onFollowClick(ev) {
        var followAction = props.followAction, followState = props.followState;
        if (followAction && followState !== _CompositeHeader_Props__WEBPACK_IMPORTED_MODULE_5__["FollowState"].transitioning) {
            followAction(ev);
            ev.stopPropagation();
            ev.preventDefault();
        }
    }
    // Short term: Since both sp-client and odsp-next are now on fabric 6 we can use this property.
    // Once we remove 5.0 from common this should be moved into a normal react prop
    var extraprops = { allowDisabledFocus: true };
    return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](office_ui_fabric_react_lib_Button__WEBPACK_IMPORTED_MODULE_3__["CommandButton"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ text: props.responsiveMode >= office_ui_fabric_react_lib_utilities_decorators_withResponsiveMode__WEBPACK_IMPORTED_MODULE_2__["ResponsiveMode"].small &&
            !followProps.hideLabel &&
            (followProps.notFollowedLabel && followProps.followState !== _CompositeHeader_Props__WEBPACK_IMPORTED_MODULE_5__["FollowState"].followed
                ? followProps.notFollowedLabel
                : followProps.followLabel), iconProps: {
            iconName: followProps.followState === _CompositeHeader_Props__WEBPACK_IMPORTED_MODULE_5__["FollowState"].notFollowing ? 'FavoriteStar' : 'FavoriteStarFill'
        }, className: Object(office_ui_fabric_react_lib_Utilities__WEBPACK_IMPORTED_MODULE_4__["css"])('ms-CompositeHeader-collapsible', {
            'follow-animation-card': followProps.followState === _CompositeHeader_Props__WEBPACK_IMPORTED_MODULE_5__["FollowState"].transitioning
        }), disabled: followProps.followState === _CompositeHeader_Props__WEBPACK_IMPORTED_MODULE_5__["FollowState"].transitioning, ariaLabel: followProps.followState === _CompositeHeader_Props__WEBPACK_IMPORTED_MODULE_5__["FollowState"].followed
            ? _FollowButton_resx__WEBPACK_IMPORTED_MODULE_6___default.a.followedAriaLabel
            : _FollowButton_resx__WEBPACK_IMPORTED_MODULE_6___default.a.notFollowedAriaLabel, onClick: _onFollowClick, "aria-hidden": followProps.followState === _CompositeHeader_Props__WEBPACK_IMPORTED_MODULE_5__["FollowState"].transitioning, title: followProps.followState === _CompositeHeader_Props__WEBPACK_IMPORTED_MODULE_5__["FollowState"].followed
            ? _FollowButton_resx__WEBPACK_IMPORTED_MODULE_6___default.a.followedHoverText
            : _FollowButton_resx__WEBPACK_IMPORTED_MODULE_6___default.a.notFollowedHoverText, "data-automationid": 'SiteHeaderFollowButton', style: followProps.hideLabel ? { marginRight: '12px', marginLeft: '5px' } : undefined, styles: followProps.hideLabel
            ? {
                root: {
                    selectors: {
                        '.ms-Button-flexContainer': { alignItems: 'flex-start !important' }
                    }
                }
            }
            : undefined }, extraprops)));
};
//# sourceMappingURL=FollowButton.js.map

/***/ }),

/***/ "lxGK":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-datasources@45.13.10_e509c819ab980023b76e5746ec0fc9e2/node_modules/@ms/odsp-datasources/lib/dataSources/base/SyncTelemetryHandler.js ***!
  \*****************************************************************************************************************************************************************************************************/
/*! exports provided: getSyncTelemetryHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSyncTelemetryHandler", function() { return getSyncTelemetryHandler; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ms_telemetry_manager_lib_events_Qos_event__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ms/telemetry-manager/lib/events/Qos.event */ "eT67");


function getSyncTelemetryHandler(dataSyncClient, telemetryHandler) {
    return function (input, endpoint) {
        var eventData = input.eventData;
        var extraData = eventData.extraData;
        var syncQos = {
            performanceEntry: extraData && extraData['performanceEntry'],
            httpStatus: extraData && extraData['HttpStatus'],
            correlationId: extraData && extraData['CorrelationId'],
            succeeded: (eventData && eventData.resultType === _ms_telemetry_manager_lib_events_Qos_event__WEBPACK_IMPORTED_MODULE_1__["ResultTypeEnum"].Success) || false,
            resultCode: eventData && eventData.resultCode,
            endpoint: endpoint
        };
        var handlerOutput = telemetryHandler && telemetryHandler(input);
        var canRetrySync = dataSyncClient.onRequestComplete(syncQos);
        extraData['dataSyncQos'] = dataSyncClient.getQosInfo();
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, (handlerOutput || {})), { eventData: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, (handlerOutput ? handlerOutput.eventData : eventData)), { extraData: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, (handlerOutput ? handlerOutput.eventData.extraData : eventData.extraData)), dataSyncClient.getQosInfo()) }), canRetry: canRetrySync && (!handlerOutput || handlerOutput.canRetry) });
    };
}
//# sourceMappingURL=SyncTelemetryHandler.js.map

/***/ }),

/***/ "mDMY":
/*!********************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/utilities-async@1.1.1/node_modules/@ms/utilities-async/lib/cancel/CancelError.js ***!
  \********************************************************************************************************************************************/
/*! exports provided: CancelError, isCancel, CancelToken, CancelSource, raceWithCancel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CancelError", function() { return CancelError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isCancel", function() { return isCancel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CancelToken", function() { return CancelToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CancelSource", function() { return CancelSource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "raceWithCancel", function() { return raceWithCancel; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ms_utilities_error_lib_ApiError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ms/utilities-error/lib/ApiError */ "6e34");
/* harmony import */ var _signal_Signal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../signal/Signal */ "2hGr");



/**
 * Error type used to represent cancellation of a task or promise.
 * Throw an instance of this Error to indicate that a function or async operation
 * has terminated because it was asked to be canceled, and did so gracefully.
 * @public
 */
var CancelError = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(CancelError, _super);
    function CancelError(props) {
        if (props === void 0) { props = {
            message: 'Canceled'
        }; }
        var _this = _super.call(this, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ code: 'Canceled', isExpected: true }, props)) || this;
        _this.name = 'Canceled';
        return _this;
    }
    return CancelError;
}(_ms_utilities_error_lib_ApiError__WEBPACK_IMPORTED_MODULE_1__["ApiError"]));

/**
 * Determines whether or not an error represents cancellation.
 * @deprecated Use CancelError.matches instead.
 * @public
 */
function isCancel(error) {
    return error instanceof CancelError;
}
/**
 * Implementation of a cancellation token, which may be tested within a synchronous or
 * asynchronous task to determine if that task should be canceled.
 * @public
 */
var CancelToken = /** @class */ (function () {
    /**
     * Constructs a new CancelToken.
     * @param canceledOnReject - A Promise which, when resolved, disposes the token without invoking
     * any cancellation callbacks, or which, when rejected, puts the token into a canceled state
     * and invoked any cancellation callbacks.
     *
     * In general, use CancelSource to get an instance of a CancelToken.
     */
    function CancelToken(canceledOnReject) {
        var cancelError;
        var afterReject = canceledOnReject.catch(function (error) {
            cancelError = error;
            return Promise.reject(error);
        });
        this.subscribe = function (onCanceled) {
            var callback = onCanceled;
            afterReject.then(function () {
                callback = undefined;
            }, function (error) {
                if (callback) {
                    var finalCallback = callback;
                    callback = undefined;
                    finalCallback(error);
                }
            });
            return function () {
                callback = undefined;
            };
        };
        this.isCanceled = function () { return !!cancelError; };
        this.throwIfCanceled = function () {
            if (cancelError) {
                throw new CancelError(cancelError);
            }
        };
    }
    return CancelToken;
}());

/**
 * Component which acts as the source for a CancelToken, controlling
 * when it is canceled.
 * @public
 */
var CancelSource = /** @class */ (function () {
    function CancelSource() {
        var _a = new _signal_Signal__WEBPACK_IMPORTED_MODULE_2__["Signal"](), reject = _a.reject, resolve = _a.resolve, promise = _a.promise;
        this.cancel = function (error) { return reject(error || new CancelError()); };
        this.dispose = function () { return resolve(); };
        this.token = new CancelToken(promise);
    }
    return CancelSource;
}());

/**
 * Races between a pending promise and cancellation.
 * @beta
 */
function raceWithCancel(promise, cancelToken) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
        var signal, unsubscribe;
        var _this = this;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!!cancelToken) return [3 /*break*/, 2];
                    return [4 /*yield*/, promise];
                case 1: return [2 /*return*/, _a.sent()];
                case 2:
                    signal = new _signal_Signal__WEBPACK_IMPORTED_MODULE_2__["Signal"]();
                    unsubscribe = cancelToken.subscribe(function (error) {
                        signal.reject(error);
                    });
                    (function () { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
                        var _a, _b, e_1;
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_c) {
                            switch (_c.label) {
                                case 0:
                                    _c.trys.push([0, 2, 3, 4]);
                                    _b = (_a = signal).resolve;
                                    return [4 /*yield*/, promise];
                                case 1:
                                    _b.apply(_a, [_c.sent()]);
                                    return [3 /*break*/, 4];
                                case 2:
                                    e_1 = _c.sent();
                                    signal.reject(e_1);
                                    return [3 /*break*/, 4];
                                case 3:
                                    unsubscribe();
                                    return [7 /*endfinally*/];
                                case 4: return [2 /*return*/];
                            }
                        });
                    }); })();
                    return [4 /*yield*/, signal.promise];
                case 3: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
//# sourceMappingURL=CancelError.js.map

/***/ }),

/***/ "mK7h":
/*!************************************!*\
  !*** ./lib/loaders/spcx-panels.js ***!
  \************************************/
/*! exports provided: groupMembershipPanelRendererLoader, sitePermissionsPanelRendererLoader, DeferredCreateGroupPanel, createGroupPanelLoader, userExpirationPanelRendererLoader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "groupMembershipPanelRendererLoader", function() { return groupMembershipPanelRendererLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sitePermissionsPanelRendererLoader", function() { return sitePermissionsPanelRendererLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeferredCreateGroupPanel", function() { return DeferredCreateGroupPanel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createGroupPanelLoader", function() { return createGroupPanelLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userExpirationPanelRendererLoader", function() { return userExpirationPanelRendererLoader; });
/* harmony import */ var _common_Deferred__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/Deferred */ "Z/CY");

/**
 * @public
 */
// tslint:disable-next-line:export-name
function groupMembershipPanelRendererLoader() {
    return Promise.all(/*! import() | spcx-panels */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(3), __webpack_require__.e(4), __webpack_require__.e(2), __webpack_require__.e("vendors~editnavchunk~spcx-panels~spcx-syn~6ba97101"), __webpack_require__.e(5), __webpack_require__.e("vendors~audience-picker-chunk~sp-pages-pa~f202f0ab"), __webpack_require__.e(6), __webpack_require__.e("vendors~editnavchunk~sp-pages-panels~spcx~63fbeced"), __webpack_require__.e("vendors~odsp-datasources~sp-pages-panels~~65b5f32e"), __webpack_require__.e("vendors~odsp-datasources~spcx-panels~spcx-teamify"), __webpack_require__.e(7), __webpack_require__.e("vendors~editnavchunk~sp-pages-panels~spcx-panels"), __webpack_require__.e("vendors~sp-pages-panels~spcx-panels"), __webpack_require__.e("vendors~audience-picker-chunk~spcx-panels"), __webpack_require__.e("vendors~editnavchunk~spcx-panels"), __webpack_require__.e("vendors~odsp-datasources-groupsiteprovide~94eb3289"), __webpack_require__.e(8), __webpack_require__.e("vendors~spcx-panels~teamifywizard.deferred"), __webpack_require__.e("vendors~spcx-panels"), __webpack_require__.e("spcx-panels")]).then(__webpack_require__.bind(null, /*! ../chunks/spcx-panels/GroupMembershipPanel/GroupMembershipPanelRenderer */ "h9jo")).then(function (groupMembershipPanelRendererModule) { return new groupMembershipPanelRendererModule.default(); });
}
/**
 * @public
 */
// tslint:disable-next-line:export-name
function sitePermissionsPanelRendererLoader() {
    return Promise.all(/*! import() | spcx-panels */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(3), __webpack_require__.e(4), __webpack_require__.e(2), __webpack_require__.e("vendors~editnavchunk~spcx-panels~spcx-syn~6ba97101"), __webpack_require__.e(5), __webpack_require__.e("vendors~audience-picker-chunk~sp-pages-pa~f202f0ab"), __webpack_require__.e(6), __webpack_require__.e("vendors~editnavchunk~sp-pages-panels~spcx~63fbeced"), __webpack_require__.e("vendors~odsp-datasources~sp-pages-panels~~65b5f32e"), __webpack_require__.e("vendors~odsp-datasources~spcx-panels~spcx-teamify"), __webpack_require__.e(7), __webpack_require__.e("vendors~editnavchunk~sp-pages-panels~spcx-panels"), __webpack_require__.e("vendors~sp-pages-panels~spcx-panels"), __webpack_require__.e("vendors~audience-picker-chunk~spcx-panels"), __webpack_require__.e("vendors~editnavchunk~spcx-panels"), __webpack_require__.e("vendors~odsp-datasources-groupsiteprovide~94eb3289"), __webpack_require__.e(8), __webpack_require__.e("vendors~spcx-panels~teamifywizard.deferred"), __webpack_require__.e("vendors~spcx-panels"), __webpack_require__.e("spcx-panels")]).then(__webpack_require__.bind(null, /*! ../chunks/spcx-panels/SitePermissionsPanel/SitePermissionsPanelRenderer */ "WR5I")).then(function (sitePermissionPanelRendererModule) { return new sitePermissionPanelRendererModule.default(); });
}
// tslint:disable-next-line:variable-name
var DeferredCreateGroupPanel = _common_Deferred__WEBPACK_IMPORTED_MODULE_0__["default"];
// tslint:disable-next-line:export-name
function createGroupPanelLoader() {
    return Promise.all(/*! import() | spcx-create-group */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e("spcx-create-group")]).then(__webpack_require__.bind(null, /*! ../chunks/spcx-panels/CreateGroupPanel/CreateGroupPanel */ "SLaJ")).then(function (createGroupPanelModule) { return createGroupPanelModule.default; });
}
function userExpirationPanelRendererLoader() {
    return Promise.all(/*! import() | sp-pages-panels */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(3), __webpack_require__.e(2), __webpack_require__.e("vendors~audience-picker-chunk~sp-pages-pa~f202f0ab"), __webpack_require__.e(6), __webpack_require__.e("vendors~editnavchunk~sp-pages-panels~spcx~63fbeced"), __webpack_require__.e("vendors~odsp-datasources~sp-pages-panels~~65b5f32e"), __webpack_require__.e("vendors~editnavchunk~sp-pages-panels~spcx-panels"), __webpack_require__.e("vendors~sp-pages-panels~spcx-panels"), __webpack_require__.e("sp-pages-panels")]).then(__webpack_require__.bind(null, /*! ../chunks/spcx-panels/UserExpirationPanel/UserExpirationPanelRenderer */ "ibSY")).then(function (chunk) { return new chunk.default(); });
}


/***/ }),

/***/ "mXoJ":
/*!************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-shared-react@47.12.13_d89e40c38ccaa8bd6af6488f37cb196d/node_modules/@ms/odsp-shared-react/lib/HubNav.js ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: HubNav, logPrefix, logHubEvent, logHubRender, addClickHandlers, getHubGroup, canEditHubNav, trySyncTheme, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_HubNav_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/HubNav/index */ "njPS");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HubNav", function() { return _components_HubNav_index__WEBPACK_IMPORTED_MODULE_0__["HubNav"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "logPrefix", function() { return _components_HubNav_index__WEBPACK_IMPORTED_MODULE_0__["logPrefix"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "logHubEvent", function() { return _components_HubNav_index__WEBPACK_IMPORTED_MODULE_0__["logHubEvent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "logHubRender", function() { return _components_HubNav_index__WEBPACK_IMPORTED_MODULE_0__["logHubRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addClickHandlers", function() { return _components_HubNav_index__WEBPACK_IMPORTED_MODULE_0__["addClickHandlers"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getHubGroup", function() { return _components_HubNav_index__WEBPACK_IMPORTED_MODULE_0__["getHubGroup"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "canEditHubNav", function() { return _components_HubNav_index__WEBPACK_IMPORTED_MODULE_0__["canEditHubNav"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "trySyncTheme", function() { return _components_HubNav_index__WEBPACK_IMPORTED_MODULE_0__["trySyncTheme"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _components_HubNav_index__WEBPACK_IMPORTED_MODULE_0__["HubNav"]; });



//# sourceMappingURL=HubNav.js.map

/***/ }),

/***/ "milD":
/*!***************************************************!*\
  !*** ./lib/components/Teamify/TeamifyWizard.resx ***!
  \***************************************************/
/*! exports provided: introPageHeaderText, selectPageHeaderText, introPageDescription1, introPageSecondHeader, introPagePoint1, introPagePoint2, introPagePoint3, selectPageDescription, continueButtonText, addTeamButtonText, cancelButtonText, recommended, pages, lists, doclibs, creatingTeam, addResources, goToTeams, retry, pinningError, failure, documentToolTip, homeToolTip, errorToolTip, learnMore, selectionStepAriaLabel, teamsChatAriaLabel, teamsMeetingAriaLabel, teamsCollaborateAriaLabel, introStepImageAriaLabel, backButtonAriaLabel, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"introPageHeaderText\":\"Àďď Mĩćŕōśōƒţ Ţēàmś\",\"selectPageHeaderText\":\"Ƥĩń ŕēśōũŕćēś àś ţàƀś ĩń Ţēàmś\",\"introPageDescription1\":\"ßŕĩńĝ ŕēśōũŕćēś ƒŕōm ţĥĩś śĩţē ĩńţō Ţēàmś ƒōŕ ŕēàĺ-ţĩmē ćōĺĺàƀōŕàţĩōń àĺĺ ĩń ōńē ƥĺàćē. \",\"introPageSecondHeader\":\"Ţēàmś màķēś ĩţ ēàśĩēŕ ţō:\",\"introPagePoint1\":\"Ćĥàţ ŵĩţĥ ŷōũŕ ćōĺĺēàĝũēś\",\"introPagePoint2\":\"Ćōōŕďĩńàţē ōńĺĩńē mēēţĩńĝś ŵĩţĥ ƥàŕţńēŕś\",\"introPagePoint3\":\"Ŵōŕķ ţōĝēţĥēŕ ōń śĥàŕēď ćōńţēńţ\",\"selectPageDescription\":\"Àďď ƥàĝēś, ĺĩśţś, àńď ďōćũmēńţ ĺĩƀŕàŕĩēś àś ţàƀś ĩń Ţēàmś ţō màķē śĥàŕēď ŕēśōũŕćēś ŕēàďĩĺŷ àvàĩĺàƀĺē ƒōŕ ćōĺĺàƀōŕàţōŕś. Ōńćē ĩń Ţēàmś, ŕēśōũŕćēś ĩń ţàƀś ćàń ƀē àďďēď, ŕēmōvēď, ōŕ ŕēōŕďēŕēď.\",\"continueButtonText\":\"Ćōńţĩńũē\",\"addTeamButtonText\":\"Àďď Ţēàmś\",\"cancelButtonText\":\"Ćàńćēĺ\",\"recommended\":\"Ŕēćōmmēńďēď\",\"pages\":\"Ƥàĝēś\",\"lists\":\"Ĺĩśţś\",\"doclibs\":\"Ďōćũmēńţ Ĺĩƀŕàŕĩēś\",\"creatingTeam\":\"Ćŕēàţĩńĝ ŷōũŕ Ţēàm\",\"addResources\":\"Ƥĩńńĩńĝ ŕēśōũŕćēś àś ţàƀś\",\"goToTeams\":\"Ĝō ţō Ţēàmś\",\"retry\":\"Ŕēţŕŷ\",\"pinningError\":\"Ŵē ćŕēàţēď ŷōũŕ ţēàm, ƀũţ ćōũĺďń\\u0027ţ ƥĩń śōmē ŕēśōũŕćēś. Ĝō ţō ŷōũŕ ţēàm ţō màńũàĺĺŷ ƥĩń ŕēśōũŕćēś.\",\"failure\":\"Ŵē ŵēŕē ũńàƀĺē ţō ćŕēàţē ŷōũŕ ţēàm. Ƥĺēàśē ţŕŷ àĝàĩń.\",\"documentToolTip\":\"Ţĥĩś śĥàŕēď ĺĩƀŕàŕŷ ćàń ƀē àććēśśēď ƒŕōm ţĥē Ƒĩĺēś ţàƀ ĩń Ţēàmś\",\"homeToolTip\":\"Ţĥē śĩţē ĥōmē ƥàĝē ćàń ƀē àććēśśēď ĩń ţĥē Śĩţē ţàƀ ĩń Ţēàmś\",\"errorToolTip\":\"Ŵē ŵēŕē ũńàƀĺē ţō ƥĩń ţĥĩś ŕēśōũŕćē, ƀũţ ŷōũ ćàń màńũàĺĺŷ ƥĩń ŕēśōũŕćēś ĩń Ţēàmś.\",\"learnMore\":\"Ĺēàŕń mōŕē.\",\"selectionStepAriaLabel\":\"Śēĺēćţ ŕēśōũŕćēś ţō ƀē àďďēď àś ţàƀś ĩń Ţēàmś\",\"teamsChatAriaLabel\":\"Ţēàmś ćĥàţ\",\"teamsMeetingAriaLabel\":\"Ţēàmś ōńĺĩńē mēēţĩńĝ\",\"teamsCollaborateAriaLabel\":\"Ţēàmś ćōĺĺƀōŕàţĩōń\",\"introStepImageAriaLabel\":\"Śēàmĺēśś ćōĺĺàƀōŕàţĩōń ĩń ŚĥàŕēƤōĩńţ àńď Ţēàmś\",\"backButtonAriaLabel\":\"Ŕēţũŕń ţō śţēƥ 1 ōƒ 2\"}");

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

/***/ "mw8S":
/*!****************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-shared-react@47.12.13_d89e40c38ccaa8bd6af6488f37cb196d/node_modules/@ms/odsp-shared-react/lib/utilities/nav/Nav.resx.js ***!
  \****************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var strings = {"EditButtonLabel":"Ēďĩţ","NavAriaLabel":"Ēńţēŕĩńĝ ńàvĩĝàţĩōń ćōńţŕōĺ. Ũśē àŕŕōŵ ķēŷś ţō ńàvĩĝàţē","LoadingPlaceholder":"Ĺōàďĩńĝ...","bubbleDoneButton":"Ĝōţ ĩţ","bubbleCloseButton":"Ćĺōśē ńōţĩƒĩćàţĩōń","ExpandButtonAriaLabel":"Śũƀmēńũ","ToggleLeftNavAriaLabel":"ńàvĩĝàţĩōń ƥàńē","ToggleLeftNavTitle":"Ţōĝĝĺē ńàvĩĝàţĩōń ƥàńē"};
strings.default = strings;
module.exports = strings;

/***/ }),

/***/ "mwqp":
/*!**********************!*\
  !*** ./lib/index.js ***!
  \**********************/
/*! exports provided: SiteHeader, LeftNav, HubNav, DeferredEditNav, gettingStartedParameter, manageTopicsParameter, Deferred, _getKnowledgeHubUrl, _isManageTopicsQuerySelected, _isGettingStartedQuerySelected, _getKnowledgeCenterTabUri, _isSiteKnowledgeCenter, siteScriptProgressStateManagerLoader, getLivePersonaCardAdapterComponentModuleLoader, GroupsProviderFactory, sitePermissionsPanelRendererLoader, groupMembershipPanelRendererLoader, teamifyStrings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_SiteHeader_SiteHeader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/SiteHeader/SiteHeader */ "H3sc");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SiteHeader", function() { return _components_SiteHeader_SiteHeader__WEBPACK_IMPORTED_MODULE_0__["SiteHeader"]; });

/* harmony import */ var _components_SiteLeftNav_LeftNav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/SiteLeftNav/LeftNav */ "OkMq");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LeftNav", function() { return _components_SiteLeftNav_LeftNav__WEBPACK_IMPORTED_MODULE_1__["LeftNav"]; });

/* harmony import */ var _components_HubNav_HubNav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/HubNav/HubNav */ "8s8S");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HubNav", function() { return _components_HubNav_HubNav__WEBPACK_IMPORTED_MODULE_2__["HubNav"]; });

/* harmony import */ var _components_EditNav_DeferredEditNav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/EditNav/DeferredEditNav */ "uPhs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DeferredEditNav", function() { return _components_EditNav_DeferredEditNav__WEBPACK_IMPORTED_MODULE_3__["DeferredEditNav"]; });

/* harmony import */ var _common_Constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./common/Constants */ "rMgv");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "gettingStartedParameter", function() { return _common_Constants__WEBPACK_IMPORTED_MODULE_4__["gettingStartedParameter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "manageTopicsParameter", function() { return _common_Constants__WEBPACK_IMPORTED_MODULE_4__["manageTopicsParameter"]; });

/* harmony import */ var _common_Deferred__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./common/Deferred */ "Z/CY");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Deferred", function() { return _common_Deferred__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _common_TopicUtilities__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./common/TopicUtilities */ "x74c");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_getKnowledgeHubUrl", function() { return _common_TopicUtilities__WEBPACK_IMPORTED_MODULE_6__["_getKnowledgeHubUrl"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_isManageTopicsQuerySelected", function() { return _common_TopicUtilities__WEBPACK_IMPORTED_MODULE_6__["_isManageTopicsQuerySelected"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_isGettingStartedQuerySelected", function() { return _common_TopicUtilities__WEBPACK_IMPORTED_MODULE_6__["_isGettingStartedQuerySelected"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_getKnowledgeCenterTabUri", function() { return _common_TopicUtilities__WEBPACK_IMPORTED_MODULE_6__["_getKnowledgeCenterTabUri"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_isSiteKnowledgeCenter", function() { return _common_TopicUtilities__WEBPACK_IMPORTED_MODULE_6__["_isSiteKnowledgeCenter"]; });

/* harmony import */ var _loaders_spcx_siteHeaderLPC__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./loaders/spcx-siteHeaderLPC */ "oGdD");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "siteScriptProgressStateManagerLoader", function() { return _loaders_spcx_siteHeaderLPC__WEBPACK_IMPORTED_MODULE_7__["siteScriptProgressStateManagerLoader"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getLivePersonaCardAdapterComponentModuleLoader", function() { return _loaders_spcx_siteHeaderLPC__WEBPACK_IMPORTED_MODULE_7__["getLivePersonaCardAdapterComponentModuleLoader"]; });

/* harmony import */ var _loaders_spcx_groupsProvider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./loaders/spcx-groupsProvider */ "+IOR");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GroupsProviderFactory", function() { return _loaders_spcx_groupsProvider__WEBPACK_IMPORTED_MODULE_8__["GroupsProviderFactory"]; });

/* harmony import */ var _loaders_spcx_panels__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./loaders/spcx-panels */ "mK7h");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sitePermissionsPanelRendererLoader", function() { return _loaders_spcx_panels__WEBPACK_IMPORTED_MODULE_9__["sitePermissionsPanelRendererLoader"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "groupMembershipPanelRendererLoader", function() { return _loaders_spcx_panels__WEBPACK_IMPORTED_MODULE_9__["groupMembershipPanelRendererLoader"]; });

/* harmony import */ var _components_Teamify_TeamifyStrings__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/Teamify/TeamifyStrings */ "NtRd");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "teamifyStrings", function() { return _components_Teamify_TeamifyStrings__WEBPACK_IMPORTED_MODULE_10__["teamifyStrings"]; });

/**
 * Preloaded components for SharePoint Pages Core Framework.
 * These components will be preloaded before SPBasePageAppliation.OnLoad.
 * Please only includes critical components needed for the framework here.
 *
 * @packagedocumentation
 */







// loaders



// strings



/***/ }),

/***/ "nGUS":
/*!***********************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/utilities-async@1.1.1/node_modules/@ms/utilities-async/lib/wait/wait.js ***!
  \***********************************************************************************************************************************/
/*! exports provided: wait, createTimeoutCancelSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wait", function() { return wait; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTimeoutCancelSource", function() { return createTimeoutCancelSource; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _signal_Signal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../signal/Signal */ "2hGr");
/* harmony import */ var _cancel_CancelError__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../cancel/CancelError */ "mDMY");
/* harmony import */ var _TimeoutError__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TimeoutError */ "jUFO");




/**
 * Creates a promise which waits for the given timeout to elapse.
 * @public
 */
function wait(time, cancelToken) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
        var _a, resolve, reject, promise, timeoutId, subscription;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = new _signal_Signal__WEBPACK_IMPORTED_MODULE_1__["Signal"](), resolve = _a.resolve, reject = _a.reject, promise = _a.promise;
                    if (cancelToken) {
                        cancelToken.throwIfCanceled();
                    }
                    timeoutId = time !== Infinity ? window.setTimeout(function () { return resolve(); }, time) : undefined;
                    subscription = cancelToken &&
                        cancelToken.subscribe(function () {
                            if (timeoutId) {
                                window.clearTimeout(timeoutId);
                            }
                            reject(new _cancel_CancelError__WEBPACK_IMPORTED_MODULE_2__["CancelError"]());
                        });
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, , 3, 4]);
                    return [4 /*yield*/, promise];
                case 2:
                    _b.sent();
                    return [3 /*break*/, 4];
                case 3:
                    if (subscription) {
                        subscription();
                    }
                    return [7 /*endfinally*/];
                case 4: return [2 /*return*/];
            }
        });
    });
}
/**
 * Creates a cancel token source which will be automatically canceled on a timeout, unless first disposed.
 * Alternatively, if a parent cancel token is provided, the source and timeout will be canceled if the parent
 * is canceled.
 * @public
 */
function createTimeoutCancelSource(timeoutOrOptions, cancelToken) {
    var options = typeof timeoutOrOptions === 'number'
        ? {
            timeout: timeoutOrOptions
        }
        : timeoutOrOptions;
    var timeout = options.timeout, _a = options.errorProps, errorProps = _a === void 0 ? {} : _a;
    var cancelSource = new _cancel_CancelError__WEBPACK_IMPORTED_MODULE_2__["CancelSource"]();
    var subscription = cancelToken && cancelToken.subscribe(cancelSource.cancel);
    var timeoutId = timeout !== Infinity
        ? window.setTimeout(function () {
            cancelSource.cancel(new _TimeoutError__WEBPACK_IMPORTED_MODULE_3__["TimeoutError"](Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ timeout: timeout }, errorProps)));
        }, timeout)
        : undefined;
    if (timeoutId) {
        cancelSource.token.subscribe(function () {
            window.clearTimeout(timeoutId);
        });
    }
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, cancelSource), { dispose: function () {
            if (timeoutId) {
                clearTimeout(timeoutId);
            }
            if (subscription) {
                subscription();
            }
            cancelSource.dispose();
        } });
}
//# sourceMappingURL=wait.js.map

/***/ }),

/***/ "nK0/":
/*!**************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-media@2.0.244/node_modules/@ms/odsp-media/dist/media/images/designPackage/communicationSiteCustomized.png ***!
  \**************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "communicationSiteCustomized_283caca280da807d61c671a0e2b2908d.png";

/***/ }),

/***/ "njPS":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-shared-react@47.12.13_d89e40c38ccaa8bd6af6488f37cb196d/node_modules/@ms/odsp-shared-react/lib/components/HubNav/index.js ***!
  \*****************************************************************************************************************************************************************************************/
/*! exports provided: HubNav, logPrefix, logHubEvent, logHubRender, addClickHandlers, getHubGroup, canEditHubNav, trySyncTheme */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HubNav__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HubNav */ "E1Yr");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HubNav", function() { return _HubNav__WEBPACK_IMPORTED_MODULE_0__["HubNav"]; });

/* harmony import */ var _HubNavHelpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HubNavHelpers */ "Vmng");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "logPrefix", function() { return _HubNavHelpers__WEBPACK_IMPORTED_MODULE_1__["logPrefix"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "logHubEvent", function() { return _HubNavHelpers__WEBPACK_IMPORTED_MODULE_1__["logHubEvent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "logHubRender", function() { return _HubNavHelpers__WEBPACK_IMPORTED_MODULE_1__["logHubRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addClickHandlers", function() { return _HubNavHelpers__WEBPACK_IMPORTED_MODULE_1__["addClickHandlers"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getHubGroup", function() { return _HubNavHelpers__WEBPACK_IMPORTED_MODULE_1__["getHubGroup"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "canEditHubNav", function() { return _HubNavHelpers__WEBPACK_IMPORTED_MODULE_1__["canEditHubNav"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "trySyncTheme", function() { return _HubNavHelpers__WEBPACK_IMPORTED_MODULE_1__["trySyncTheme"]; });



//# sourceMappingURL=index.js.map

/***/ }),

/***/ "oGdD":
/*!*******************************************!*\
  !*** ./lib/loaders/spcx-siteHeaderLPC.js ***!
  \*******************************************/
/*! exports provided: getLivePersonaCardAdapterComponentModuleLoader, siteScriptProgressStateManagerLoader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLivePersonaCardAdapterComponentModuleLoader", function() { return getLivePersonaCardAdapterComponentModuleLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "siteScriptProgressStateManagerLoader", function() { return siteScriptProgressStateManagerLoader; });
/**
 * Live Persona Card module loader
 * @public
 */
// tslint:disable-next-line:export-name
function getLivePersonaCardAdapterComponentModuleLoader() {
    return {
        load: (function (modulePath) {
            return new Promise(function (onComplete, onError) {
                window.setTimeout(function () {
                    Promise.all([
                        Promise.all(/*! import() | spcx-siteheaderlpc */[__webpack_require__.e("vendors~shared-react-splivepersonacard~sp~896e3b47"), __webpack_require__.e("vendors~shared-react-splivepersonacard~sp~95564be9"), __webpack_require__.e("vendors~spcx-siteheaderlpc")]).then(__webpack_require__.bind(null, /*! @ms/odsp-shared-react/lib/components/LivePersonaCardAdapter/SpLivePersonaCard */ "+o+5")),
                        Promise.all(/*! import() | spcx-siteheaderlpc */[__webpack_require__.e("vendors~shared-react-splivepersonacard~sp~896e3b47"), __webpack_require__.e("vendors~shared-react-splivepersonacard~sp~95564be9"), __webpack_require__.e("vendors~spcx-siteheaderlpc")]).then(__webpack_require__.bind(null, /*! @ms/odsp-shared-react/lib/components/LivePersonaCardAdapter/LivePersonaCardAdapter */ "1kJI")),
                        Promise.all(/*! import() | spcx-siteheaderlpc */[__webpack_require__.e("vendors~shared-react-splivepersonacard~sp~896e3b47"), __webpack_require__.e("vendors~shared-react-splivepersonacard~sp~95564be9"), __webpack_require__.e("vendors~spcx-siteheaderlpc")]).then(__webpack_require__.t.bind(null, /*! @msfast/midgard-bootstrapper */ "pG7b", 7)),
                        Promise.all(/*! import() | spcx-siteheaderlpc */[__webpack_require__.e("vendors~shared-react-splivepersonacard~sp~896e3b47"), __webpack_require__.e("vendors~shared-react-splivepersonacard~sp~95564be9"), __webpack_require__.e("vendors~spcx-siteheaderlpc")]).then(__webpack_require__.bind(null, /*! @ms/odsp-datasources/lib/Loki */ "UkJ3"))
                    ]).then(function (siteHeaderLPCModules) {
                        onComplete({
                            '@ms/odsp-shared-react/lib/components/LivePersonaCardAdapter/SpLivePersonaCard': siteHeaderLPCModules[0],
                            '@ms/odsp-shared-react/lib/components/LivePersonaCardAdapter/LivePersonaCardAdapter': siteHeaderLPCModules[1],
                            '@msfast/midgard-bootstrapper': siteHeaderLPCModules[2],
                            '@ms/odsp-datasources/lib/Loki': siteHeaderLPCModules[3]
                        });
                    });
                }, 4500);
            });
            /* tslint:disable-next-line:no-any */
        }),
        parse: undefined
    };
}
/**
 * Deferred SiteScriptProgressStateManager loader
 *
 * @public
 */
/* tslint:disable-next-line:no-any */
function siteScriptProgressStateManagerLoader() {
    return __webpack_require__.e(/*! import() | spcx-sitescriptstatemanager */ "vendors~shared-react-sitescriptprogressin~92a2151d").then(__webpack_require__.bind(null, /*! @ms/odsp-datasources/lib/providers/siteScriptProgress/SiteScriptProgressStateManager */ "OpcF")).then(function (siteScriptProgressStateManagerModule) {
        return siteScriptProgressStateManagerModule.SiteScriptProgressStateManager;
    });
}


/***/ }),

/***/ "oW6A":
/*!*****************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/MessageBar.js ***!
  \*****************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/office-ui-fabric-react-bundle */ "KL1q");
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
// Loading office-ui-fabric-react/./lib/MessageBar.js


/***/ }),

/***/ "pcnK":
/*!*************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/persistent-cache@1.0.9_@uifabric+utilities@7.33.2/node_modules/@ms/persistent-cache/lib/CacheUpdateManager.js ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: CacheUpdateTaskManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CacheUpdateTaskManager", function() { return CacheUpdateTaskManager; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utilities_Global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utilities/Global */ "i/zE");


var globalId = 0;
var TASK_SCHEDULE_INTERVAL = 5; // schdule next task to be run after 5 milliseconds
var CacheUpdateTaskManager = /** @class */ (function () {
    function CacheUpdateTaskManager() {
        this._queue = {};
    }
    CacheUpdateTaskManager.prototype.enqueue = function (key, update) {
        var existingTasks = (this._queue[key] = this._queue[key] || []);
        var needSchedule = true;
        var replacedTasks = [];
        if (existingTasks.length > 0) {
            if (!existingTasks[0].schedule) {
                // the current task (first in the queue) is not scheduled yet
                // a new update task should replace it
                replacedTasks = this._queue[key];
                this._queue[key] = [];
            }
            else {
                // a new update task should replace all queued but not scheduled task
                replacedTasks = existingTasks.slice(1);
                this._queue[key] = [existingTasks[0]];
                needSchedule = false;
            }
        }
        var task = this._createUpateTask(key, update);
        if (replacedTasks.length > 0) {
            // point the complete promise of all replaced tasks to the new
            task.signal = replacedTasks[0].signal;
        }
        this._queue[key].push(task);
        if (needSchedule) {
            this._scheduleTask(key);
        }
        return task;
    };
    CacheUpdateTaskManager.prototype._createUpateTask = function (key, update) {
        var _this = this;
        var signal = {};
        signal.promise = new Promise(function (resolve, reject) {
            signal.resolve = resolve;
            signal.reject = reject;
        });
        var task = {
            execute: function () { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
                var ex_1;
                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, 3, 4]);
                            return [4 /*yield*/, update()];
                        case 1:
                            _a.sent();
                            return [3 /*break*/, 4];
                        case 2:
                            ex_1 = _a.sent();
                            // update qos is handled in _doCacheUpdate
                            task.error = ex_1;
                            return [3 /*break*/, 4];
                        case 3:
                            // schedule the next update when the current task complete
                            this._completeTask(task);
                            return [7 /*endfinally*/];
                        case 4: return [2 /*return*/];
                    }
                });
            }); },
            schedule: 0,
            id: globalId++,
            key: key,
            signal: signal
        };
        return task;
    };
    CacheUpdateTaskManager.prototype._scheduleTask = function (key) {
        var tasks = this._queue[key];
        if (tasks && tasks.length > 0) {
            var task = tasks[0];
            task.schedule = _utilities_Global__WEBPACK_IMPORTED_MODULE_1__["global"].setTimeout(task.execute, TASK_SCHEDULE_INTERVAL);
        }
    };
    CacheUpdateTaskManager.prototype._completeTask = function (task) {
        var id = task.id, key = task.key;
        var queue = this._queue[key];
        var headTask = queue[0], remainingTasks = queue.slice(1);
        if (headTask.id !== id) {
            throw new Error('this should not happen, currently running task must be the top of the queue');
        }
        this._queue[key] = remainingTasks;
        this._scheduleTask(key);
        if (task.error) {
            task.signal.reject(task.error);
        }
        else {
            task.signal.resolve();
        }
    };
    return CacheUpdateTaskManager;
}());

//# sourceMappingURL=CacheUpdateManager.js.map

/***/ }),

/***/ "q/ZR":
/*!*************************************************!*\
  !*** ./lib/components/SiteLeftNav/LeftNav.resx ***!
  \*************************************************/
/*! exports provided: RecycleBin, teamsBubbleTitle, teamsBubbleText, returnToClassic, returnToClassicAriaLabel, SharedWithUs, sharedWithUsAlt, EditNavPanelTitle, CloseButtonArialLabel, CloseButton, LeftNavAriaLabel, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RecycleBin\":\"Ŕēćŷćĺē ƀĩń\",\"teamsBubbleTitle\":\"Mĩćŕōśōƒţ Ţēàmś\",\"teamsBubbleText\":\"Ćĺĩćķ ţĥĩś ĺĩńķ ţō ćōmmũńĩćàţē àńď ćōĺĺàƀōŕàţē ŵĩţĥ ŷōũŕ ćōĺĺēàĝũēś ĩń ŕēàĺ ţĩmē. Ŷōũ ćàń ŕēmōvē ţĥē ĺĩńķ ƒŕōm ţĥē ńàvĩĝàţĩōń àţ àńŷ ţĩmē.\",\"returnToClassic\":\"Ŕēţũŕń ţō ćĺàśśĩć ŚĥàŕēƤōĩńţ\",\"returnToClassicAriaLabel\":\"Ćĺĩćķ ōŕ ēńţēŕ ţō ŕēţũŕń ţō ćĺàśśĩć ŚĥàŕēƤōĩńţ\",\"SharedWithUs\":\"Śĥàŕēď ŵĩţĥ ũś\",\"sharedWithUsAlt\":\"Śĥàŕēď ŵĩţĥ ũś. Ōƥēńś ţĥē Śĥàŕēď ŵĩţĥ ũś vĩēŵ ţō śēē à ĺĩśţ ōƒ ƒĩĺēś àńď ƒōĺďēŕś ţĥàţ ĥàvē ƀēēń śĥàŕēď ŵĩţĥ ţĥē ĝŕōũƥ.\",\"EditNavPanelTitle\":\"Ēďĩţ ńàvĩĝàţĩōń\",\"CloseButtonArialLabel\":\"Ćĺōśē ńàvĩĝàţĩōń ƥàńē\",\"CloseButton\":\"Ćĺōśē ƀũţţōń\",\"LeftNavAriaLabel\":\"Śĩţē\"}");

/***/ }),

/***/ "qBs0":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-shared-react@47.12.13_d89e40c38ccaa8bd6af6488f37cb196d/node_modules/@ms/odsp-shared-react/lib/utilities/nav/NavCommon.js ***!
  \*****************************************************************************************************************************************************************************************/
/*! exports provided: EDIT_EVENT_NAME, UPDATE_LINKS_EVENT_NAME, HEADER_LINK_URL, LinkGroupKey, getEditLink, getToggleLeftNavLink */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EDIT_EVENT_NAME", function() { return EDIT_EVENT_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_LINKS_EVENT_NAME", function() { return UPDATE_LINKS_EVENT_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HEADER_LINK_URL", function() { return HEADER_LINK_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkGroupKey", function() { return LinkGroupKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEditLink", function() { return getEditLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getToggleLeftNavLink", function() { return getToggleLeftNavLink; });
/* harmony import */ var _ms_odsp_datasources_lib_ViewNav__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ms/odsp-datasources/lib/ViewNav */ "Qjmx");
/* harmony import */ var _Nav_resx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Nav.resx */ "mw8S");
/* harmony import */ var _Nav_resx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Nav_resx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ms_odsp_utilities_lib_killswitch_Killswitch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ms/odsp-utilities/lib/killswitch/Killswitch */ "QUgr");
/**
 * Interfaces, constants, and utilities shared between various navigation controls
 */



var EDIT_EVENT_NAME = 'EditLinkGroup';
var UPDATE_LINKS_EVENT_NAME = 'UpdateDisplayedLinks';
var HEADER_LINK_URL = 'http://linkless.header/';
/** Known common identifiers for link groups */
var LinkGroupKey;
(function (LinkGroupKey) {
    LinkGroupKey["quickLaunch"] = "QuickLaunch";
    LinkGroupKey["globalNav"] = "GlobalNav";
    LinkGroupKey["hubNav"] = "HubNav";
    LinkGroupKey["footer"] = "Footer";
})(LinkGroupKey || (LinkGroupKey = {}));
/**
 * Get an edit link for a nav control.
 *
 * @param pageContext Page context
 * @param hasIcon Whether the link should have an icon
 * @param onEditClicked Click handler. If the caller would like to know which group was clicked,
 * they should pre-bind the group object as the first parameter to onEditClicked.
 * @param overrideEditLabel Label for the edit button, if it should say something besides "Edit"
 */
function getEditLink(pageContext, hasIcon, onEditClicked, overrideEditLabel, overrideEditAriaLabel) {
    // For publishing-backed groups, we should go to a legacy settings page to edit.
    var editUrl = undefined;
    if (pageContext.PublishingFeatureOn) {
        editUrl = _ms_odsp_datasources_lib_ViewNav__WEBPACK_IMPORTED_MODULE_0__["ViewNavDataSource"].getAreaNavigationSettingsUrl(pageContext);
        if (!_ms_odsp_utilities_lib_killswitch_Killswitch__WEBPACK_IMPORTED_MODULE_2__["Killswitch"].isActivated('5411393c-b795-44c1-9601-bdce17479b11', '7/22/2020', 'publishing edit nav should navigate')) {
            onEditClicked = function (evt) {
                window.open(editUrl, '_blank');
            };
        }
    }
    return {
        name: overrideEditLabel || _Nav_resx__WEBPACK_IMPORTED_MODULE_1___default.a.EditButtonLabel,
        url: editUrl,
        onClick: onEditClicked,
        icon: hasIcon ? 'Edit' : undefined,
        key: "-999" /* clientEdit */,
        ariaLabel: overrideEditAriaLabel
    };
}
/**
 * Get a ToggleLeftNav link in T-narrow mode.
 * @param onClicked Click handler. If the caller would like to know which group was clicked,
 */
function getToggleLeftNavLink(onClicked, overrideName, overrideTitle, overrideIcon, overrideAriaLabel, automationId) {
    return {
        name: overrideName || '',
        title: overrideTitle || _Nav_resx__WEBPACK_IMPORTED_MODULE_1___default.a.ToggleLeftNavTitle,
        url: '###',
        onClick: onClicked,
        icon: overrideIcon || 'GlobalNavButton',
        key: "-997" /* clientToggleLeftNav */,
        ariaLabel: overrideAriaLabel || _Nav_resx__WEBPACK_IMPORTED_MODULE_1___default.a.ToggleLeftNavAriaLabel,
        automationId: automationId || 'leftPaneLeftNavToggleButton'
    };
}
//# sourceMappingURL=NavCommon.js.map

/***/ }),

/***/ "qZ39":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-shared-react@47.12.13_d89e40c38ccaa8bd6af6488f37cb196d/node_modules/@ms/odsp-shared-react/lib/components/CompositeHeader/subComponents/ActionsOverflowButton.js ***!
  \********************************************************************************************************************************************************************************************************************************/
/*! exports provided: ActionsOverflowButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionsOverflowButton", function() { return ActionsOverflowButton; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var office_ui_fabric_react_lib_ContextualMenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! office-ui-fabric-react/lib/ContextualMenu */ "u4xd");
/* harmony import */ var _CompositeHeader_Props__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../CompositeHeader.Props */ "Wrjt");
/* harmony import */ var office_ui_fabric_react_lib_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! office-ui-fabric-react/lib/Button */ "epn0");
/* harmony import */ var office_ui_fabric_react_lib_FocusZone__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! office-ui-fabric-react/lib/FocusZone */ "NMYH");
/* harmony import */ var _ms_odsp_utilities_lib_killswitch_Killswitch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ms/odsp-utilities/lib/killswitch/Killswitch */ "QUgr");







var ActionsOverflowButton = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ActionsOverflowButton, _super);
    function ActionsOverflowButton(props) {
        var _this = _super.call(this, props) || this;
        _this._actionMenuOnClick = function () {
            _this.setState({ showActionMenu: true });
        };
        _this._actionMenuOnDismiss = function () {
            _this.setState({ showActionMenu: false });
        };
        _this._isPageNavigated = function (pageContext, prevPageContext) {
            return (pageContext &&
                prevPageContext &&
                (pageContext.webId !== prevPageContext.webId ||
                    pageContext.siteId !== prevPageContext.siteId ||
                    pageContext.pageItemId !== prevPageContext.pageItemId));
        };
        _this.state = {
            languageSelections: undefined,
            showActionMenu: false
        };
        return _this;
    }
    ActionsOverflowButton.prototype.componentDidMount = function () {
        this._shouldReloadLanguageSelector = !_ms_odsp_utilities_lib_killswitch_Killswitch__WEBPACK_IMPORTED_MODULE_6__["Killswitch"].isActivated('9936809a-2d0b-43f8-9960-5504a487db34', '5/18/2020', 'reload language selector during in-app transition');
        this._shouldLoadLanguagesWhenNotResponsive = !_ms_odsp_utilities_lib_killswitch_Killswitch__WEBPACK_IMPORTED_MODULE_6__["Killswitch"].isActivated('6013F49A-5D76-46C9-BDBF-281CCC9B4B0C', '1/8/2021', 'load language selector independently of isResponsiveMode');
    };
    ActionsOverflowButton.prototype.componentDidUpdate = function (prevProps) {
        var _this = this;
        if ((this._shouldLoadLanguagesWhenNotResponsive || this.props.isResponsiveMode) &&
            ((this.props.getLanguageSelections && this.state.languageSelections === undefined) ||
                (this._shouldReloadLanguageSelector &&
                    this._isPageNavigated(this.props.pageContext, prevProps.pageContext)))) {
            if (this.props.getLanguageSelections === undefined) {
                this.setState({ languageSelections: undefined });
                return;
            }
            this.props.getLanguageSelections().then(function (items) {
                _this.setState({
                    languageSelections: items
                });
            });
        }
    };
    ActionsOverflowButton.prototype.render = function () {
        var _this = this;
        var actionItems = [];
        if (!this.props.hasActions) {
            return null;
        }
        if (this.props.createSiteAction) {
            var createSiteItem = {
                name: this.props.headerStrings.createSiteLabel,
                key: 'createSite',
                iconProps: { iconName: 'Add' },
                onClick: this.props.createSiteAction
            };
            actionItems.push(createSiteItem);
        }
        var followProps = this.props.follow;
        if (followProps) {
            var followMenuItem = {
                name: followProps.notFollowedLabel && followProps.followState !== _CompositeHeader_Props__WEBPACK_IMPORTED_MODULE_3__["FollowState"].followed
                    ? followProps.notFollowedLabel
                    : followProps.followLabel,
                key: 'follow',
                iconProps: {
                    iconName: followProps.followState === _CompositeHeader_Props__WEBPACK_IMPORTED_MODULE_3__["FollowState"].notFollowing ? 'FavoriteStar' : 'FavoriteStarFill'
                },
                onClick: followProps.followState !== _CompositeHeader_Props__WEBPACK_IMPORTED_MODULE_3__["FollowState"].transitioning ? followProps.followAction : undefined
            };
            actionItems.push(followMenuItem);
        }
        if (this.props.share) {
            var shareMenuItem = {
                name: this.props.share.shareLabel,
                key: 'share',
                iconProps: { iconName: 'Share' },
                onClick: this.props.share.onShare
            };
            actionItems.push(shareMenuItem);
        }
        if (this.props.customActionContextualMenuItems) {
            actionItems = actionItems.concat(this.props.customActionContextualMenuItems);
        }
        var sectionItems = [];
        var shouldShowLanguageSelections = this.state.languageSelections && this.state.languageSelections.length > 0;
        if (shouldShowLanguageSelections) {
            if (actionItems.length > 0) {
                var siteActionsSection = {
                    key: 'siteActions',
                    itemType: office_ui_fabric_react_lib_ContextualMenu__WEBPACK_IMPORTED_MODULE_2__["ContextualMenuItemType"].Section,
                    sectionProps: {
                        topDivider: true,
                        bottomDivider: true,
                        title: this.props.headerStrings.siteActionsLabel,
                        items: actionItems
                    }
                };
                sectionItems.push(siteActionsSection);
            }
            var languageSelectorSection = {
                key: 'languageSelector',
                itemType: office_ui_fabric_react_lib_ContextualMenu__WEBPACK_IMPORTED_MODULE_2__["ContextualMenuItemType"].Section,
                sectionProps: {
                    topDivider: true,
                    bottomDivider: true,
                    title: this.props.headerStrings.languagesLabel,
                    items: this.state.languageSelections
                }
            };
            sectionItems.push(languageSelectorSection);
        }
        return ((shouldShowLanguageSelections || actionItems.length > 0) && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { ref: function (d) {
                _this._actionMenuElement = d;
            }, className: this.props.classNames.moreActionsButton },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](office_ui_fabric_react_lib_Button__WEBPACK_IMPORTED_MODULE_4__["IconButton"], { iconProps: { iconName: 'More' }, role: 'button', onClick: this._actionMenuOnClick, "aria-label": this.props.headerStrings.overflowActionsButtonLabel, "aria-haspopup": true, "aria-expanded": this.state.showActionMenu }),
            this.state.showActionMenu && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](office_ui_fabric_react_lib_FocusZone__WEBPACK_IMPORTED_MODULE_5__["FocusZone"], { direction: office_ui_fabric_react_lib_FocusZone__WEBPACK_IMPORTED_MODULE_5__["FocusZoneDirection"].vertical },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](office_ui_fabric_react_lib_ContextualMenu__WEBPACK_IMPORTED_MODULE_2__["ContextualMenu"], { target: this._actionMenuElement, directionalHint: office_ui_fabric_react_lib_ContextualMenu__WEBPACK_IMPORTED_MODULE_2__["DirectionalHint"].bottomLeftEdge, items: shouldShowLanguageSelections ? sectionItems : actionItems, isBeakVisible: false, gapSpace: 0, onDismiss: this._actionMenuOnDismiss }))))));
    };
    return ActionsOverflowButton;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));

//# sourceMappingURL=ActionsOverflowButton.js.map

/***/ }),

/***/ "qhAy":
/*!**********************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/utilities-async@1.1.1/node_modules/@ms/utilities-async/lib/modules/getModuleDefaultOrModule.js ***!
  \**********************************************************************************************************************************************************/
/*! exports provided: getModuleDefaultOrModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getModuleDefaultOrModule", function() { return getModuleDefaultOrModule; });
/**
 * For a given type, gets the default export from a module, or gets the whole module if there is no
 * default export.
 * @public
 */
function getModuleDefaultOrModule(valueOrModuleWithDefault) {
    return valueOrModuleWithDefault.default || valueOrModuleWithDefault;
}
//# sourceMappingURL=getModuleDefaultOrModule.js.map

/***/ }),

/***/ "qx+S":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-shared-react@47.12.13_d89e40c38ccaa8bd6af6488f37cb196d/node_modules/@ms/odsp-shared-react/lib/components/MembersInfo/MembersInfo.resx.js ***!
  \*********************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var strings = {"membersCountButtonAriaLabelFormat":"{0}. Ōƥēń Ĝŕōũƥ Mēmƀēŕśĥĩƥ ƥàńē"};
strings.default = strings;
module.exports = strings;

/***/ }),

/***/ "rFal":
/*!**************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/shared-react-fluent-theme@1.0.36_0481e6a21b0e774e9f1ae529761f89ec/node_modules/@ms/shared-react-fluent-theme/lib/Fluent.js ***!
  \**************************************************************************************************************************************************************************************/
/*! exports provided: fluentFontWeights */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fluentFontWeights", function() { return fluentFontWeights; });
/** This is necessary because the theme currently doesn't provide font weights. */
function fluentFontWeights(theme) {
    return {
        regular: {
            fontWeight: 400
        },
        semibold: {
            fontWeight: 600
        },
        bold: {
            fontWeight: 700
        }
    };
}
//# sourceMappingURL=Fluent.js.map

/***/ }),

/***/ "rMgv":
/*!*********************************!*\
  !*** ./lib/common/Constants.js ***!
  \*********************************/
/*! exports provided: gettingStartedParameter, manageTopicsParameter, queryKey, GETTINGSTARTEDID, MANAGETOPICSID */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gettingStartedParameter", function() { return gettingStartedParameter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "manageTopicsParameter", function() { return manageTopicsParameter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "queryKey", function() { return queryKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GETTINGSTARTEDID", function() { return GETTINGSTARTEDID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MANAGETOPICSID", function() { return MANAGETOPICSID; });
/**
 * Copyright(c) Microsoft Corporation.All rights reserved.
 */
/**
 * @public
 */
var gettingStartedParameter = 'GettingStarted';
/**
 * @public
 */
var manageTopicsParameter = 'ManageTopics';
var queryKey = 'tab';
var GETTINGSTARTEDID = 9999;
var MANAGETOPICSID = 9998;


/***/ }),

/***/ "rdJO":
/*!*******************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-datasources@45.13.10_e509c819ab980023b76e5746ec0fc9e2/node_modules/@ms/odsp-datasources/lib/Hub.js ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: HubSiteQueryOption, HubSiteJoinApprovalErrorCode, HubDataSource, isRefineHubNavAudienceLoggingKillSwitchActivated */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dataSources_hub_HubDataSource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dataSources/hub/HubDataSource */ "Zean");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HubSiteQueryOption", function() { return _dataSources_hub_HubDataSource__WEBPACK_IMPORTED_MODULE_0__["HubSiteQueryOption"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HubSiteJoinApprovalErrorCode", function() { return _dataSources_hub_HubDataSource__WEBPACK_IMPORTED_MODULE_0__["HubSiteJoinApprovalErrorCode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HubDataSource", function() { return _dataSources_hub_HubDataSource__WEBPACK_IMPORTED_MODULE_0__["HubDataSource"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isRefineHubNavAudienceLoggingKillSwitchActivated", function() { return _dataSources_hub_HubDataSource__WEBPACK_IMPORTED_MODULE_0__["isRefineHubNavAudienceLoggingKillSwitchActivated"]; });

// Everything related to the hub data source

//# sourceMappingURL=Hub.js.map

/***/ }),

/***/ "tDcW":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-shared-react@47.12.13_d89e40c38ccaa8bd6af6488f37cb196d/node_modules/@ms/odsp-shared-react/lib/components/CompositeHeader/CompositeHeader.resx.js ***!
  \*****************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var strings = {"createSiteLabel":"Ćŕēàţē śĩţē","createSiteAriaLabel":"Ćŕēàţē à śĩţē Ĵōĩńēď ţō ţĥĩś ĥũƀ","siteLogoLabel":"Śĩţē ĺōĝō","siteActionsLabel":"Śĩţē Àćţĩōńś","languagesLabel":"Ĺàńĝũàĝēś","leftNavToggleButtonTitle":"Ţōĝĝĺē ńàvĩĝàţĩōń ƥàńē","leftNavToggleButtonLabel":"ńàvĩĝàţĩōń ƥàńē","overflowActionsButtonLabel":"Mōŕē","ibSegmentLabel":"Śēĝmēńţ","ibSegmentLabelPlural":"Śēĝmēńţś","copyLinkLabel":"Ćōƥŷ ĺĩńķ","copyLinkAriaLabel":"Ćōƥŷ Ĺĩńķ Ţō Ćĺĩƥƀōàŕď","refreshLabel":"Ŕēƒŕēśĥ","refreshAriaLabel":"Ŕēƒŕēśĥ Ƥàĝē ćōńţēńţ","openInBrowserLabel":"Ōƥēń ĩń ƀŕōŵśēŕ","openInBrowserAriaLabel":"Ōƥēńś ţĥē ƥàĝē ĩń ƀŕōŵśēŕ","copiedToClipboardLabel":"Ćōƥĩēď ţō ćĺĩƥƀōàŕď","externalIdentityBadge":"Ēxţēŕńàĺ"};
strings.default = strings;
module.exports = strings;

/***/ }),

/***/ "tehv":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-shared-react@47.12.13_d89e40c38ccaa8bd6af6488f37cb196d/node_modules/@ms/odsp-shared-react/lib/components/HorizontalNav/HorizontalNav.js ***!
  \********************************************************************************************************************************************************************************************************/
/*! exports provided: HorizontalNav */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HorizontalNav", function() { return HorizontalNav; });
/* harmony import */ var office_ui_fabric_react_lib_Utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! office-ui-fabric-react/lib/Utilities */ "mkpW");
/* harmony import */ var _HorizontalNav_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HorizontalNav.styles */ "8XOe");
/* harmony import */ var _HorizontalNav_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./HorizontalNav.base */ "/la2");



/**
 * @public
 */
var HorizontalNav = Object(office_ui_fabric_react_lib_Utilities__WEBPACK_IMPORTED_MODULE_0__["styled"])(_HorizontalNav_base__WEBPACK_IMPORTED_MODULE_2__["HorizontalNavBase"], _HorizontalNav_styles__WEBPACK_IMPORTED_MODULE_1__["getStyles"]);
//# sourceMappingURL=HorizontalNav.js.map

/***/ }),

/***/ "tz9r":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-shared-react@47.12.13_d89e40c38ccaa8bd6af6488f37cb196d/node_modules/@ms/odsp-shared-react/lib/components/CompositeHeader/subComponents/TeamsCustomActionButtonsLoader.js ***!
  \*****************************************************************************************************************************************************************************************************************************************/
/*! exports provided: TeamsCustomActionButtonsLoader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamsCustomActionButtonsLoader", function() { return TeamsCustomActionButtonsLoader; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ms_items_view_lib_private_utilities_components_Async__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ms/items-view/lib/private/utilities/components/Async */ "uEI4");



var TeamsCustomActionButtons = Object(_ms_items_view_lib_private_utilities_components_Async__WEBPACK_IMPORTED_MODULE_2__["asAsync"])(function () { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(void 0, void 0, void 0, function () { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
    switch (_a.label) {
        case 0: return [4 /*yield*/, __webpack_require__.e(/*! import() | shared-react-teamscustomaction */ "vendors~shared-react-teamscustomaction").then(__webpack_require__.bind(null, /*! ./TeamsCustomActionButtons */ "uQmm"))];
        case 1: return [2 /*return*/, _a.sent()];
    }
}); }); });
var TeamsCustomActionButtonsLoader = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(TeamsCustomActionButtonsLoader, _super);
    function TeamsCustomActionButtonsLoader(props) {
        return _super.call(this, props) || this;
    }
    TeamsCustomActionButtonsLoader.prototype.render = function () {
        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](TeamsCustomActionButtons, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.props));
    };
    return TeamsCustomActionButtonsLoader;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));

//# sourceMappingURL=TeamsCustomActionButtonsLoader.js.map

/***/ }),

/***/ "u0q+":
/*!**************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/utilities-browser@1.0.2_@uifabric+utilities@7.33.2/node_modules/@ms/utilities-browser/lib/PlatformDetection.js ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: getBrowser, getBrowserVersion, getOS, PlatformDetection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBrowser", function() { return getBrowser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBrowserVersion", function() { return getBrowserVersion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOS", function() { return getOS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlatformDetection", function() { return PlatformDetection; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
// OneDrive:IgnoreCodeCoverage

function getBrowser(userAgent) {
    userAgent = userAgent.toLowerCase();
    // We want to figure out which ONE browser the user is most likely on.
    // The order of the checks is important so we're not deceived by (for example)
    // Chrome saying that it's Safari.
    // (Each regular expression captures the version number so we can parse it later.)
    var matchedBrowser;
    function testBrowserVersion(pattern) {
        return (matchedBrowser = RegExp(pattern + "(\\d+)([\\d.]*)").exec(userAgent));
    }
    // IE <= 10 has something like 'MSIE 9' in the user agent.
    // This is also what newer versions do in compatibility mode.
    // IE 11 sample user agent contains:
    // Trident/7.0; other stuff... rv:11.0
    var isIE = testBrowserVersion('msie ') || testBrowserVersion('trident.*rv:');
    var isIE9 = matchedBrowser && matchedBrowser[1] === '9';
    // This is Edge (it pretends to be Chrome and Safari).
    var isEdge = !matchedBrowser && testBrowserVersion('edge/');
    // This is Edge Chromium.
    var isEdgeChromium = !matchedBrowser && testBrowserVersion('edg/');
    var isFirefox = !matchedBrowser && testBrowserVersion('fxios|firefox/');
    // Note: lots of random browsers say they're Chrome and will end up in this bucket
    var isChrome = !matchedBrowser && testBrowserVersion('(?:chrome|crios)/');
    var isSafari = !matchedBrowser && /safari\/(\d+)/.test(userAgent);
    if (isSafari) {
        testBrowserVersion('version/');
    }
    // At this point, matchedBrowser should contain the version information
    // Some other browser categories:
    //   IE Mobile: /iemobile\/(\d+)/
    //   IE Mobile in desktop mode: contains WPDesktop; get version from Trident version
    //   Opera (currently goes into Chrome bucket): /opr\/(\d+)/
    var browserName = isIE
        ? 'IE'
        : isEdge
            ? 'Edge'
            : isEdgeChromium
                ? 'EdgeChromium'
                : isFirefox
                    ? 'Firefox'
                    : isChrome
                        ? 'Chrome'
                        : isSafari
                            ? 'Safari'
                            : 'NA';
    return {
        browserName: browserName,
        isChrome: !!isChrome,
        isEdge: !!isEdge,
        isEdgeChromium: !!isEdgeChromium,
        isFirefox: !!isFirefox,
        isIE: !!isIE,
        isIE9: !!isIE9,
        isSafari: !!isSafari,
        matchedBrowser: matchedBrowser
    };
}
function getBrowserVersion(info) {
    var matchedBrowser = info.matchedBrowser;
    // Parse the captured version number for user's browser.
    var browserMajor = (matchedBrowser && parseInt(matchedBrowser[1], 10)) || 0;
    var browserMinor = (matchedBrowser && matchedBrowser[2] && matchedBrowser[2].slice(1)) || '0';
    return {
        browserMajor: browserMajor,
        browserMinor: browserMinor
    };
}
function getOS(userAgent) {
    userAgent = userAgent.toLowerCase();
    // Parse device which gives hints about os / mobile state.
    // Windows Phone IE sometimes pretends to be Android, so explicitly check for Windows Phone first.
    // (wpdesktop is used by Windows Phone in desktop mode.)
    var isWinPhone = /windows phone|wpdesktop/.test(userAgent);
    var matchedOS = isWinPhone || /ipad|iphone|ipod|android/.exec(userAgent);
    // true[0] is undefined, which is falsy
    var device = matchedOS && matchedOS[0];
    var isAndroid = device === 'android';
    var isIPad = device === 'ipad';
    var isIOS = !!device && !isAndroid;
    var isMac = !matchedOS && userAgent.indexOf('macintosh') > -1;
    var isWindows = !matchedOS && userAgent.indexOf('windows nt') > -1;
    var osName = isWindows
        ? 'Windows'
        : isWinPhone
            ? 'Windows Phone'
            : isMac
                ? 'OSX'
                : isIOS
                    ? 'IOS'
                    : isAndroid
                        ? 'Android'
                        : 'NA';
    return {
        isAndroid: isAndroid,
        isIOS: isIOS,
        isIPad: isIPad,
        isMac: isMac,
        isWindows: isWindows,
        isWinPhone: !!isWinPhone,
        isMobile: !!matchedOS,
        osName: osName
    };
}

/**
 * Use PlatformDetection to evaluate which user experience makes sense for the user's
 * platform. NOTE: This class is NOT COMPLETE! Meaning not all values are parsed out of
 * the user agent. If something is missing that you need, add it and add unit tests.
 * WARNING: Avoid using browser checks when you can use detection techniques for caps checking.
 */
var PlatformDetection = /** @class */ (function () {
    function PlatformDetection(inputAgent) {
        var root = typeof window !== 'undefined' ? window : typeof self !== 'undefined' ? self : undefined;
        if (!inputAgent) {
            inputAgent = (root && root.navigator && navigator.userAgent) || '';
        }
        var userAgent = inputAgent;
        var agent = inputAgent.toLowerCase();
        var browserInfo = getBrowser(agent);
        var browserVersion = getBrowserVersion(browserInfo);
        var osInfo = getOS(agent);
        var isMobile = osInfo.isMobile;
        var isElectron = /electron\/\\d+[\\d.]*/.test(agent);
        var isWinAppWipEnabled = agent.indexOf('winappwipenabled') > -1;
        var isPWA = typeof window !== 'undefined' && window.matchMedia
            ? window.matchMedia('(display-mode: standalone)').matches ||
                window.matchMedia('(display-mode: minimal-ui)').matches
            : false;
        // Other operating systems:
        //   Chrome OS: /cros/
        //   Linux: /linux/ (Android can also say it's Linux, so check for Android first)
        // WARNING: Avoid using browser checks when you can use detection techniques for caps checking.
        var osVersionMatch = /[\s\(](os|os x|windows (?:phone|nt)|android) ([\d._]+)/.exec(agent);
        var isUnlimitedStyleSheetsSupported = false;
        var isWebDavSupported = false;
        var isFolderUploadSupported = false;
        var isHtml5FileUploadSupported = false;
        if (root && root.document) {
            /**
             * Checks to see if styleSheet exists as a property off of a style element.
             * This will determine if style registration should be done via cssText (<= IE9) or not
             */
            var emptyStyle = document.createElement('style');
            emptyStyle.type = 'text/css';
            isUnlimitedStyleSheetsSupported = !emptyStyle.styleSheet;
            isWebDavSupported = 'addBehavior' in HTMLDivElement.prototype;
            var input = document.createElement('input');
            input.type = 'file';
            var file = root.File;
            var fileProto = file && file.prototype;
            isHtml5FileUploadSupported = !!(fileProto &&
                (fileProto.slice || fileProto.mozSlice || fileProto.webkitSlice));
            isFolderUploadSupported = 'webkitdirectory' in input && !isElectron;
        }
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, browserInfo), browserVersion), osInfo), { isElectron: isElectron, 
            // OS Identification
            osVersion: osVersionMatch ? osVersionMatch[2] : 'NA', isWindows81: !isMobile && /windows (?:8\.1|nt 6\.3)/.test(agent), isWindows10: !isMobile && agent.indexOf('windows nt 10') > -1, isWindows7: !isMobile && agent.indexOf('windows nt 6.1') > -1, 
            // Device identification
            isWinAppWipEnabled: isWinAppWipEnabled,
            isPWA: isPWA, 
            // Capabilities
            areCSS3TransitionsSupported: !browserInfo.isIE || browserVersion.browserMajor > 9, areTouchEventsSupported: !!root && 'ontouchstart' in root, isFolderUploadSupported: isFolderUploadSupported,
            isHtml5FileUploadSupported: isHtml5FileUploadSupported, isRetinaSupported: !!root && root.devicePixelRatio > 1, isUnlimitedStyleSheetsSupported: isUnlimitedStyleSheetsSupported,
            isWebDavSupported: isWebDavSupported,
            // Raw user agent
            userAgent: userAgent });
    }
    return PlatformDetection;
}());

//# sourceMappingURL=PlatformDetection.js.map

/***/ }),

/***/ "u4xd":
/*!*********************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/ContextualMenu.js ***!
  \*********************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/office-ui-fabric-react-bundle */ "KL1q");
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
// Loading office-ui-fabric-react/./lib/ContextualMenu.js


/***/ }),

/***/ "uEI4":
/*!************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/items-view@3.13.0_d720416b38ac285e08ef4d50021a1c12/node_modules/@ms/items-view/lib/private/utilities/components/Async.js ***!
  \************************************************************************************************************************************************************************************/
/*! exports provided: getModuleDefaultOrModule, asAsync, isAsAsyncComponentType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ms_utilities_async_lib_modules_getModuleDefaultOrModule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ms/utilities-async/lib/modules/getModuleDefaultOrModule */ "qhAy");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getModuleDefaultOrModule", function() { return _ms_utilities_async_lib_modules_getModuleDefaultOrModule__WEBPACK_IMPORTED_MODULE_0__["getModuleDefaultOrModule"]; });

/* harmony import */ var _ms_utilities_react_lib_decorators_asAsync__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ms/utilities-react/lib/decorators/asAsync */ "YOlM");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "asAsync", function() { return _ms_utilities_react_lib_decorators_asAsync__WEBPACK_IMPORTED_MODULE_1__["asAsync"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isAsAsyncComponentType", function() { return _ms_utilities_react_lib_decorators_asAsync__WEBPACK_IMPORTED_MODULE_1__["isAsAsyncComponentType"]; });



//# sourceMappingURL=Async.js.map

/***/ }),

/***/ "uFJw":
/*!************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/persistent-cache@1.0.9_@uifabric+utilities@7.33.2/node_modules/@ms/persistent-cache/lib/index.js ***!
  \************************************************************************************************************************************************************/
/*! exports provided: CacheUpdateTaskManager, PersistentCache, PersistentCacheType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CacheUpdateManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CacheUpdateManager */ "pcnK");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CacheUpdateTaskManager", function() { return _CacheUpdateManager__WEBPACK_IMPORTED_MODULE_0__["CacheUpdateTaskManager"]; });

/* harmony import */ var _PersistentCache__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PersistentCache */ "4nKP");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PersistentCache", function() { return _PersistentCache__WEBPACK_IMPORTED_MODULE_1__["PersistentCache"]; });

/* harmony import */ var _IPersistentCache__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./IPersistentCache */ "iCFh");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PersistentCacheType", function() { return _IPersistentCache__WEBPACK_IMPORTED_MODULE_2__["PersistentCacheType"]; });




//# sourceMappingURL=index.js.map

/***/ }),

/***/ "uPhs":
/*!***************************************************!*\
  !*** ./lib/components/EditNav/DeferredEditNav.js ***!
  \***************************************************/
/*! exports provided: DeferredEditNav */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeferredEditNav", function() { return DeferredEditNav; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _loaders_spcx_editNav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../loaders/spcx-editNav */ "eOjM");



/**
 * Deferred left nav component for apps built on sp-pages-core
 *
 * @public
 */
var DeferredEditNav = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(DeferredEditNav, _super);
    function DeferredEditNav(props) {
        var _this = _super.call(this, props) || this;
        _this.state = { editNavComponent: undefined };
        return _this;
    }
    DeferredEditNav.prototype.componentDidMount = function () {
        var _this = this;
        Object(_loaders_spcx_editNav__WEBPACK_IMPORTED_MODULE_2__["editNavLoader"])().then(function (leftNav) {
            _this.setState({ editNavComponent: leftNav });
        });
    };
    DeferredEditNav.prototype.render = function () {
        return this.state.editNavComponent ? react__WEBPACK_IMPORTED_MODULE_1__["createElement"](this.state.editNavComponent, this.props) : null; // tslint:disable-line:no-null-keyword
    };
    return DeferredEditNav;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));



/***/ }),

/***/ "unYt":
/*!*************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/utilities-error@1.0.0/node_modules/@ms/utilities-error/lib/CustomError.js ***!
  \*************************************************************************************************************************************/
/*! exports provided: CustomError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomError", function() { return CustomError; });
/**
 * Base class for custom errors.
 * Derive sub-classes from this class to implement errors which support
 * strongly-typed constructors and visible fields.
 * @public
 *
 * @remarks
 * The pattern to extend Error properly is documented here:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error
 */
var CustomError = /** @class */ (function () {
    function CustomError(props) {
        if (props === void 0) { props = {}; }
        // The real error will be returned.
        var error = new Error(props.message || (props.innerError && props.innerError.message));
        this.message = error.message;
        this.innerError = props.innerError;
        this.stack = error.stack;
        this.name = error.name;
        // Avoid using assign since some platforms (native) do not enumerate prototyped objects.
        for (var key in this) {
            if (Object.prototype.hasOwnProperty.call(this, key)) {
                // @ts-ignore TOO BAD
                error[key] = this[key];
            }
        }
        var customErrorType = Object.getPrototypeOf(this);
        // @ts-ignore
        if (Error.captureStackTrace) {
            // @ts-ignore
            Error.captureStackTrace(error, customErrorType);
        }
        if (Object.setPrototypeOf) {
            // Force the error instance to use the custom prototype.
            // This works on all supported browsers, except PhantomJS.
            Object.setPrototypeOf(error, customErrorType);
            return error;
        }
    }
    return CustomError;
}());

// For Error, need to manually extend the built-in type since TypeScript does not emit the necessary output.
if (Object.setPrototypeOf) {
    // This works on all supported browsers, except PhantomJS.
    CustomError.prototype = Object.create(Error.prototype, {
        constructor: {
            value: Error,
            enumerable: false,
            writable: true,
            configurable: true
        }
    });
    Object.setPrototypeOf(CustomError, Error);
}
//# sourceMappingURL=CustomError.js.map

/***/ }),

/***/ "ut3N":
/*!********************************************!*\
  !*** external "@microsoft/sp-diagnostics" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_ut3N__;

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

/***/ "wJGB":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-shared-react@47.12.13_d89e40c38ccaa8bd6af6488f37cb196d/node_modules/@ms/odsp-shared-react/lib/components/CompositeHeader/layouts/UnifiedHeader.js ***!
  \******************************************************************************************************************************************************************************************************************/
/*! exports provided: UnifiedHeader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnifiedHeader", function() { return UnifiedHeader; });
/* harmony import */ var office_ui_fabric_react_lib_Utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! office-ui-fabric-react/lib/Utilities */ "mkpW");
/* harmony import */ var _UnifiedHeader_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UnifiedHeader.base */ "IHrg");
/* harmony import */ var _UnifiedHeader_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UnifiedHeader.styles */ "+tXJ");



var UnifiedHeader = Object(office_ui_fabric_react_lib_Utilities__WEBPACK_IMPORTED_MODULE_0__["styled"])(_UnifiedHeader_base__WEBPACK_IMPORTED_MODULE_1__["UnifiedHeaderBase"], _UnifiedHeader_styles__WEBPACK_IMPORTED_MODULE_2__["getStyles"]);
//# sourceMappingURL=UnifiedHeader.js.map

/***/ }),

/***/ "x74c":
/*!**************************************!*\
  !*** ./lib/common/TopicUtilities.js ***!
  \**************************************/
/*! exports provided: _getKnowledgeHubUrl, _isManageTopicsQuerySelected, _isGettingStartedQuerySelected, _getKnowledgeCenterTabUri, _isSiteKnowledgeCenter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_getKnowledgeHubUrl", function() { return _getKnowledgeHubUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_isManageTopicsQuerySelected", function() { return _isManageTopicsQuerySelected; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_isGettingStartedQuerySelected", function() { return _isGettingStartedQuerySelected; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_getKnowledgeCenterTabUri", function() { return _getKnowledgeCenterTabUri; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_isSiteKnowledgeCenter", function() { return _isSiteKnowledgeCenter; });
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/sp-diagnostics */ "ut3N");
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ms/odsp-utilities-bundle */ "y88i");
/* harmony import */ var _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Constants */ "rMgv");
/* harmony import */ var _KillSwitches__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./KillSwitches */ "+ORw");
/**
 * @copyright (c) Microsoft Corporation. All rights reserved.
 */





// @todo: knowledge hub url is hard-coded for now. In the future, it needs to be obtained from the page context
// https://onedrive.visualstudio.com/CSI/_workitems/edit/774063
var SPDF_KNOWLEDGE_HUB_URL = 'https://microsoft.sharepoint-df.com/teams/knowledgehub';
var MSIT_KNOWLEDGE_HUB_URL = 'https://microsoft.sharepoint.com/sites/knowledgecenter';
// Set of test sites on which we want to use the SPDF knowledge center
var TEST_SITES = ['odspcsitest', 'olfilato-test-site', 'EdensTestSPDF', 'knowledgehub'];
/**
 * Retrieve the Knowledge Hub URL
 * This function is copied from libraries/sp-topic-shared/src/TopicUtilities.ts
 * to avoid circle dependencies but parameters are changed.
 *
 * @internal
 */
function _getKnowledgeHubUrl(pageContext) {
    var _a, _b;
    _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Validate"].isNotNullOrUndefined(pageContext, 'pageContext');
    var logSource = _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__["_LogSource"].create('TopicUtilities');
    // For test sites, always use the SPDF knowledge hub.
    if (useDFKnowledgeCenter(pageContext)) {
        return SPDF_KNOWLEDGE_HUB_URL;
    }
    // Use the configured URL and for Microsoft sites, always force the MSIT knowledge center.
    if ((_b = (_a = pageContext) === null || _a === void 0 ? void 0 : _a.knowledgeHubSiteDetails) === null || _b === void 0 ? void 0 : _b.Url) {
        // the case where knowledge hub url exists in page context
        var url = pageContext.knowledgeHubSiteDetails.Url;
        return url === SPDF_KNOWLEDGE_HUB_URL ? MSIT_KNOWLEDGE_HUB_URL : url;
    }
    else {
        // If not configured, force the MSIT knowledge center for Microsoft pages, else log an error.
        if (location.origin.toLowerCase().indexOf('microsoft') !== -1) {
            return MSIT_KNOWLEDGE_HUB_URL;
        }
        else {
            // @todo: VSO# 844586, make sure we display a better error when the KnowledgeCenter is not provisioned
            _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__["_TraceLogger"].logError(logSource, new Error('Error: Configure the KnowledgeCenter URL for Knowledge Mining scenarios to work correctly.'));
            return undefined;
        }
    }
}
/**
 * Returns true if we should use the hardcoded SPDF knowledgecenter URL.
 */
function useDFKnowledgeCenter(pageContext) {
    _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Validate"].isNotNullOrUndefined(pageContext, 'pageContext');
    var siteUrl = (!Object(_KillSwitches__WEBPACK_IMPORTED_MODULE_4__["isPreviewPage404FixActivated"])()
        ? pageContext.siteAbsoluteUrl
        : location.origin).toLowerCase();
    return (siteUrl.indexOf('microsoft.sharepoint-df.com') !== -1 &&
        TEST_SITES.some(function (siteName) { return siteUrl.indexOf(siteName) !== -1; }));
}
/**
 * Return whether the query of url is 'tab=ManageTopics'.
 *
 * @internal
 */
function _isManageTopicsQuerySelected() {
    return getSelectedTabName() === _Constants__WEBPACK_IMPORTED_MODULE_3__["manageTopicsParameter"];
}
/**
 * Return whether the query of url is 'tab=GettingStarted'.
 *
 * @internal
 */
function _isGettingStartedQuerySelected() {
    return getSelectedTabName() === _Constants__WEBPACK_IMPORTED_MODULE_3__["gettingStartedParameter"];
}
function getSelectedTabName() {
    var queryParams = new URL(window.location.href).searchParams;
    return queryParams.get(_Constants__WEBPACK_IMPORTED_MODULE_3__["queryKey"]);
}
/**
 * Return the uri of current tab in knowledge center.
 *
 * @internal
 */
function _getKnowledgeCenterTabUri(knowledgeHubSiteUrl, parameter) {
    if (!knowledgeHubSiteUrl) {
        return new _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_2__["Uri"]('');
    }
    var uri = new _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_2__["Uri"](knowledgeHubSiteUrl);
    uri.setQueryParameter(_Constants__WEBPACK_IMPORTED_MODULE_3__["queryKey"], parameter);
    return uri;
}
/**
 * Return if the current site is a Knowledge Center
 *
 * @internal
 */
// tslint:disable-next-line:export-name no-any
function _isSiteKnowledgeCenter(spPageContextInfo) {
    var _a, _b;
    if (!spPageContextInfo || !spPageContextInfo.knowledgeHubSiteDetails) {
        return false;
    }
    var siteId = (_a = spPageContextInfo) === null || _a === void 0 ? void 0 : _a.siteId;
    var webId = (_b = spPageContextInfo) === null || _b === void 0 ? void 0 : _b.webId;
    siteId = cleanGuid(siteId);
    webId = cleanGuid(webId);
    return (spPageContextInfo.knowledgeHubSiteDetails.SiteId === siteId &&
        spPageContextInfo.knowledgeHubSiteDetails.WebId === webId);
}
function cleanGuid(guid) {
    return guid.toLowerCase().replace(/[{}]/g, '');
}


/***/ }),

/***/ "xoZH":
/*!*************************************************!*\
  !*** ./lib/loaders/DeferredLanguageSelector.js ***!
  \*************************************************/
/*! exports provided: DeferredLanguageSelector, DeferredLanguageSelectorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeferredLanguageSelector", function() { return DeferredLanguageSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeferredLanguageSelectorComponent", function() { return DeferredLanguageSelectorComponent; });
/* harmony import */ var _common_Deferred__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/Deferred */ "Z/CY");
/* harmony import */ var _microsoft_sp_loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/sp-loader */ "I6O9");
/* harmony import */ var _microsoft_sp_loader__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_loader__WEBPACK_IMPORTED_MODULE_1__);


var MULTILINGUAL_COMPONENT_ID = 'f1006a38-983e-4851-ba4a-70a12aaf94b8';
var DeferredLanguageSelector = /** @class */ (function () {
    function DeferredLanguageSelector() {
    }
    DeferredLanguageSelector.LanguageSelectorComponentLoader = function () {
        if (DeferredLanguageSelector._loadedModule) {
            return Promise.resolve(DeferredLanguageSelector._loadedModule.LanguageSelector);
        }
        else {
            return _microsoft_sp_loader__WEBPACK_IMPORTED_MODULE_1__["SPComponentLoader"].loadComponentById(MULTILINGUAL_COMPONENT_ID).then(function (module) {
                DeferredLanguageSelector._loadedModule = module;
                return module.LanguageSelector;
            });
        }
    };
    DeferredLanguageSelector.LanguageSelectionsComponentLoader = function () {
        if (DeferredLanguageSelector._loadedModule) {
            return Promise.resolve(DeferredLanguageSelector._loadedModule.LanguageSelections);
        }
        else {
            return _microsoft_sp_loader__WEBPACK_IMPORTED_MODULE_1__["SPComponentLoader"].loadComponentById(MULTILINGUAL_COMPONENT_ID).then(function (module) {
                DeferredLanguageSelector._loadedModule = module;
                return module.LanguageSelections;
            });
        }
    };
    return DeferredLanguageSelector;
}());

// tslint:disable-next-line:variable-name
var DeferredLanguageSelectorComponent = _common_Deferred__WEBPACK_IMPORTED_MODULE_0__["default"];


/***/ }),

/***/ "y/6u":
/*!**********************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/audience-targeting@1.0.14_5d977624104b06c7bcaa2de974ff51f1/node_modules/@ms/audience-targeting/lib/MembershipsCache.js ***!
  \**********************************************************************************************************************************************************************************/
/*! exports provided: readMembershipsCache, writeMembershipsCache */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "readMembershipsCache", function() { return readMembershipsCache; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "writeMembershipsCache", function() { return writeMembershipsCache; });
var PREFIX = 'MembershipsCache';
var CACHE_EXPIREATION_TIME = 2 * 60 * 60 * 1000; // 2 hours
/**
 * read memberships from local storage
 * @param key cache key
 */
function readMembershipsCache(key) {
    validate();
    var item = window.localStorage.getItem(_cacheKey(key));
    if (item) {
        var cachedData = JSON.parse(item);
        if (cachedData &&
            cachedData.lastModified &&
            Date.now() - cachedData.lastModified <= CACHE_EXPIREATION_TIME) {
            return cachedData.data;
        }
    }
    return undefined;
}
/**
 * write memberships into local storage
 */
function writeMembershipsCache(key, memberships) {
    validate();
    if (memberships) {
        var dataToCache = {
            data: memberships,
            lastModified: Date.now()
        };
        window.localStorage.setItem(_cacheKey(key), JSON.stringify(dataToCache));
    }
    else {
        window.localStorage.removeItem(key);
    }
}
function validate() {
    if (!window || !window.localStorage) {
        throw new Error('localStorage is not supported');
    }
}
function _cacheKey(key) {
    return PREFIX + "_" + key;
}
//# sourceMappingURL=MembershipsCache.js.map

/***/ }),

/***/ "y33C":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-shared-react@47.12.13_d89e40c38ccaa8bd6af6488f37cb196d/node_modules/@ms/odsp-shared-react/lib/components/CompositeHeader/index.js ***!
  \**************************************************************************************************************************************************************************************************/
/*! exports provided: CompositeHeader, FollowState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CompositeHeader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CompositeHeader */ "fEoZ");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CompositeHeader", function() { return _CompositeHeader__WEBPACK_IMPORTED_MODULE_0__["CompositeHeader"]; });

/* harmony import */ var _CompositeHeader_Props__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CompositeHeader.Props */ "Wrjt");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FollowState", function() { return _CompositeHeader_Props__WEBPACK_IMPORTED_MODULE_1__["FollowState"]; });



//# sourceMappingURL=index.js.map

/***/ }),

/***/ "y88i":
/*!********************************************!*\
  !*** external "@ms/odsp-utilities-bundle" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_y88i__;

/***/ }),

/***/ "yClT":
/*!***********************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-media@2.0.244/node_modules/@ms/odsp-media/dist/media/images/webTemplatesGallery/firstRunExperienceIllustration.png ***!
  \***********************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "firstRunExperienceIllustration_dfd7165962c455b0b38828de4836051e.png";

/***/ }),

/***/ "yGrp":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/shared-react-web-templates@0.1.240_078bb01e0c4e433dbeb6410f4127eb9f/node_modules/@ms/shared-react-web-templates/lib/firstRunDialog/WebTemplatesGalleryFirstRunUtil.js ***!
  \*********************************************************************************************************************************************************************************************************************************/
/*! exports provided: shouldRenderWebTemplatesGalleryFirstRun */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shouldRenderWebTemplatesGalleryFirstRun", function() { return shouldRenderWebTemplatesGalleryFirstRun; });
/* harmony import */ var _ms_odsp_utilities_lib_features_FeatureOverrides__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ms/odsp-utilities/lib/features/FeatureOverrides */ "iVgB");
/* harmony import */ var _ms_odsp_datasources_lib_Permissions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ms/odsp-datasources/lib/Permissions */ "jH+c");


function shouldRenderWebTemplatesGalleryFirstRun(pageContext) {
    var EnableWebTemplatesGallery = { ODB: 1047 };
    var EnableWebTemplatesGalleryFirstRunExperience = { ODB: 1586 };
    return (_ms_odsp_utilities_lib_features_FeatureOverrides__WEBPACK_IMPORTED_MODULE_0__["default"].isFeatureEnabled(EnableWebTemplatesGallery) &&
        _ms_odsp_utilities_lib_features_FeatureOverrides__WEBPACK_IMPORTED_MODULE_0__["default"].isFeatureEnabled(EnableWebTemplatesGalleryFirstRunExperience) &&
        pageContext.WebTemplatesGalleryFirstRunEnabled &&
        // @ts-ignore
        _ms_odsp_datasources_lib_Permissions__WEBPACK_IMPORTED_MODULE_1__["PermissionMask"].hasPermission(pageContext.webPermMasks, _ms_odsp_datasources_lib_Permissions__WEBPACK_IMPORTED_MODULE_1__["PermissionMask"].manageWeb));
}
//# sourceMappingURL=WebTemplatesGalleryFirstRunUtil.js.map

/***/ }),

/***/ "ySJ3":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-shared-react@47.12.13_d89e40c38ccaa8bd6af6488f37cb196d/node_modules/@ms/odsp-shared-react/lib/components/CompositeHeader/subComponents/UserExpirationBar.js ***!
  \****************************************************************************************************************************************************************************************************************************/
/*! exports provided: UserExpirationBar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserExpirationBar", function() { return UserExpirationBar; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var office_ui_fabric_react_lib_MessageBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! office-ui-fabric-react/lib/MessageBar */ "oW6A");
/* harmony import */ var office_ui_fabric_react_lib_Link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! office-ui-fabric-react/lib/Link */ "F3Wv");
/* harmony import */ var _ms_odsp_utilities_lib_string_StringHelper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ms/odsp-utilities/lib/string/StringHelper */ "BY+f");
/* harmony import */ var _ms_odsp_utilities_lib_string_StringHelper__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ms_odsp_utilities_lib_string_StringHelper__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _UserExpirationBar_resx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./UserExpirationBar.resx */ "c4TA");
/* harmony import */ var _UserExpirationBar_resx__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_UserExpirationBar_resx__WEBPACK_IMPORTED_MODULE_4__);





var UserExpirationBar = function (userExpirationBarProps) {
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](office_ui_fabric_react_lib_MessageBar__WEBPACK_IMPORTED_MODULE_1__["MessageBar"], { messageBarType: office_ui_fabric_react_lib_MessageBar__WEBPACK_IMPORTED_MODULE_1__["MessageBarType"].warning, onDismiss: userExpirationBarProps.onDismiss },
        _ms_odsp_utilities_lib_string_StringHelper__WEBPACK_IMPORTED_MODULE_3__["formatWithLocalizedCountValue"](_UserExpirationBar_resx__WEBPACK_IMPORTED_MODULE_4___default.a.userExpirationBarMessage, _UserExpirationBar_resx__WEBPACK_IMPORTED_MODULE_4___default.a.userExpirationBarMessageInterval, userExpirationBarProps.expiringUserCount),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](office_ui_fabric_react_lib_Link__WEBPACK_IMPORTED_MODULE_2__["Link"], { onClick: userExpirationBarProps.userExpirationOnClick, style: { padding: '0px 5px' } }, _UserExpirationBar_resx__WEBPACK_IMPORTED_MODULE_4___default.a.userExpirationBarManage)));
};
//# sourceMappingURL=UserExpirationBar.js.map

/***/ }),

/***/ "ybkr":
/*!*****************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@uifabric/utilities@7.33.2_baa7aab8a1d5d20fe3858de8537800ba/node_modules/@uifabric/utilities/lib/hoist.js ***!
  \*****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Loading @uifabric/utilities/./lib/hoist.js
var pkg = __webpack_require__(/*! @ms/uifabric-styling-bundle */ "fglE");
module.exports = pkg._Utilities;

/***/ }),

/***/ "z1mu":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-shared-react@47.12.13_d89e40c38ccaa8bd6af6488f37cb196d/node_modules/@ms/odsp-shared-react/lib/components/CompositeHeader/subComponents/OutlookButton.js ***!
  \************************************************************************************************************************************************************************************************************************/
/*! exports provided: OutlookButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OutlookButton", function() { return OutlookButton; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var office_ui_fabric_react_lib_Icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! office-ui-fabric-react/lib/Icon */ "56LG");
/* harmony import */ var office_ui_fabric_react_lib_Icon__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(office_ui_fabric_react_lib_Icon__WEBPACK_IMPORTED_MODULE_1__);


var OutlookButton = function (props) {
    function _onGoToOutlookClick(ev) {
        if (props.goToOutlookAction) {
            props.goToOutlookAction(ev);
            ev.stopPropagation();
            ev.preventDefault();
        }
    }
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: 'ms-compositeHeader-goToOutlook' },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("button", { role: 'link', className: 'ms-compositeHeaderButton', onClick: _onGoToOutlookClick },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: 'ms-compositeHeader-goToOutlookText' }, props.goToOutlookString),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](office_ui_fabric_react_lib_Icon__WEBPACK_IMPORTED_MODULE_1__["Icon"], { iconName: 'ArrowUpRight8', className: 'ms-compositeHeader-goToOutlookIcon' }))));
};
//# sourceMappingURL=OutlookButton.js.map

/***/ }),

/***/ "z7Uc":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-datasources@45.13.10_e509c819ab980023b76e5746ec0fc9e2/node_modules/@ms/odsp-datasources/lib/utilities/permissions/PermissionMask.js ***!
  \****************************************************************************************************************************************************************************************************/
/*! exports provided: PermissionMask, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PermissionMask", function() { return PermissionMask; });
var PermissionMask = /** @class */ (function () {
    function PermissionMask() {
    }
    PermissionMask.hasItemPermission = function (item, permission) {
        return item && item.permissions && PermissionMask.hasPermission(item.permissions, permission);
    };
    PermissionMask.hasPermission = function (actualPerms, requestedPerm) {
        // When a bitwise operation like '&' is performed on an integer in Javascipt, the result
        // is automatically converted into a 32-bit signed integer. This usually doesn't matter,
        // but there is a error case when the most significant bit is set. For example,
        // if hasPermission(fullMask, fullMask) was called,
        // 0xFFFFFFFF & 0xFFFFFFFF results in a value of -1. Since 0xFFFFFFFF is still an unsigned
        // 64-bit integer and -1 is a signed 32-bit integer, they do not equal each other.
        // tslint:disable:no-bitwise
        return (!!requestedPerm &&
            !!actualPerms &&
            (requestedPerm.Low & actualPerms.Low) >>> 0 === requestedPerm.Low &&
            (requestedPerm.High & actualPerms.High) >>> 0 === requestedPerm.High);
        // tslint:enable:no-bitwise
    };
    PermissionMask.hasAny = function (actualPerms, requestedPerms) {
        return (requestedPerms || []).some(function (permission) {
            return PermissionMask.hasPermission(actualPerms, permission);
        });
    };
    PermissionMask.hasIdentityPermission = function (identity, permission) {
        return (permission && identity.webPermMasks && PermissionMask.hasPermission(identity.webPermMasks, permission));
    };
    PermissionMask.insertListItems = { High: 0x0, Low: 0x2 };
    PermissionMask.editListItems = { High: 0x0, Low: 0x4 };
    PermissionMask.deleteListItems = { High: 0x0, Low: 0x8 };
    PermissionMask.approveItems = { High: 0x0, Low: 0x10 };
    PermissionMask.openItems = { High: 0x0, Low: 0x20 };
    PermissionMask.viewVersions = { High: 0x0, Low: 0x40 };
    PermissionMask.deleteVersions = { High: 0x0, Low: 0x80 };
    PermissionMask.cancelCheckout = { High: 0x0, Low: 0x100 };
    PermissionMask.manageLists = { High: 0x0, Low: 0x800 };
    PermissionMask.viewFormPages = { High: 0x0, Low: 0x1000 };
    PermissionMask.reviewListItems = { High: 0x0, Low: 0x4000 };
    PermissionMask.viewPages = { High: 0x0, Low: 0x20000 };
    PermissionMask.layoutsPage = { High: 0x0, Low: 0x21000 };
    PermissionMask.addAndCustomizePages = { High: 0x0, Low: 0x40000 };
    PermissionMask.applyThemeAndBorder = { High: 0x0, Low: 0x80000 };
    PermissionMask.viewUsageData = { High: 0x0, Low: 0x200000 };
    PermissionMask.manageSubwebs = { High: 0x0, Low: 0x800000 };
    PermissionMask.managePermissions = { High: 0x0, Low: 0x2000000 };
    PermissionMask.browseDirectories = { High: 0x0, Low: 0x4000000 };
    PermissionMask.manageWeb = { High: 0x0, Low: 0x40000000 };
    PermissionMask.useClientIntegration = { High: 0x10, Low: 0x0 };
    PermissionMask.manageAlerts = { High: 0x40, Low: 0x0 };
    PermissionMask.createAlerts = { High: 0x80, Low: 0x0 };
    PermissionMask.enumeratePermissions = { High: 0x40000000, Low: 0x0 };
    PermissionMask.useRemoteAPIs = { High: 0x00000020, Low: 0x0 };
    // fullMask has all permissions, should be the last option in this list.
    PermissionMask.fullMask = { High: 0x7fffffff, Low: 0xffffffff };
    return PermissionMask;
}());

/* harmony default export */ __webpack_exports__["default"] = (PermissionMask);
//# sourceMappingURL=PermissionMask.js.map

/***/ }),

/***/ "zpEg":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-datasources@45.13.10_e509c819ab980023b76e5746ec0fc9e2/node_modules/@ms/odsp-datasources/lib/dataSources/base/CachedDataSource.js ***!
  \*************************************************************************************************************************************************************************************************/
/*! exports provided: CachedDataSource, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CachedDataSource", function() { return CachedDataSource; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _DataSource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DataSource */ "AfY0");
/* harmony import */ var _PersistentRequestCache__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PersistentRequestCache */ "MLtZ");
/* harmony import */ var _RequestCache__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./RequestCache */ "M66I");




/**
 * A special version of the base DataSource that comes with a built-in cache.
 *
 * Cache operates in a similar fashion to  sp-home 'oil.ds' and should be compatible if given
 * the same prefix.
 */
var CachedDataSource = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(CachedDataSource, _super);
    /**
     * @param pageContext - ISpPageContext needed by BaseDataSource.
     * @param id - The id of the current datasource instance, used as the id of the cache as well.
     * @param cacheOptions - Provides options to overwrite default settings of the cache.
     */
    function CachedDataSource(params, dependencies) {
        var _this = _super.call(this, params, dependencies) || this;
        var pageContext = dependencies.pageContext;
        _this._legacyRequestCache = new _RequestCache__WEBPACK_IMPORTED_MODULE_3__["RequestCache"](params, { pageContext: pageContext });
        // Exclude the `cacheType` for persistent request cache cache.
        var cacheType = params.cacheType, persistentRequestCacheParams = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(params, ["cacheType"]);
        _this._persistentRequestCache = new _PersistentRequestCache__WEBPACK_IMPORTED_MODULE_2__["PersistentRequestCache"](persistentRequestCacheParams, {
            pageContext: pageContext
        });
        return _this;
    }
    /**
     * @deprecated, please use getDataUtilizingPersistentCache which support indexedDB storage
     *
     * TODO: remove old version of params
     */
    CachedDataSource.prototype.getDataUtilizingLegacyCache = function (options) {
        var _this = this;
        var _a = options, getUrl = _a.getUrl, getAdditionalPostData = _a.getAdditionalPostData, cacheRequestKey = _a.cacheRequestKey, cacheTimeoutTime = _a.cacheTimeoutTime, getDataParams = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(_a, ["getUrl", "getAdditionalPostData", "cacheRequestKey", "cacheTimeoutTime"]);
        getDataParams = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ url: getUrl && getUrl(), additionalPostData: getAdditionalPostData && getAdditionalPostData(), 
            // these defaults previously provided by DataSource.getData
            method: 'POST' }, getDataParams);
        // handle deprecated function forms of url/postdata
        getDataParams.url = getDataParams.url || (getUrl && getUrl());
        if (!('needsRequestDigest' in getDataParams)) {
            getDataParams.needsRequestDigest = this.needsRequestDigest(getDataParams.url);
        }
        getDataParams.additionalPostData =
            getDataParams.additionalPostData || (getAdditionalPostData && getAdditionalPostData());
        cacheRequestKey =
            cacheRequestKey ||
                this.getRequestKey(getDataParams.url, getDataParams.method, getDataParams.additionalPostData);
        var _b = options.useStale, useStale = _b === void 0 ? false : _b, _c = options.bypassCache, bypassCache = _c === void 0 ? false : _c, _d = options.onlyCache, onlyCache = _d === void 0 ? false : _d, _e = options.checkForInvalidation, checkForInvalidation = _e === void 0 ? false : _e, _f = options.setInvalidated, setInvalidated = _f === void 0 ? false : _f;
        return this._legacyRequestCache.getDataUtilizingCache({
            cacheRequestKey: cacheRequestKey,
            useStale: useStale,
            bypassCache: bypassCache,
            onlyCache: onlyCache,
            checkForInvalidation: checkForInvalidation,
            setInvalidated: setInvalidated,
            cacheTimeoutTime: cacheTimeoutTime,
            getData: function () { return _this.dataRequestor.getData(getDataParams); }
        });
    };
    /**
     * A special version of getData that will utilize the cache.
     *
     * TODO: remove old version of params
     */
    CachedDataSource.prototype.getDataUtilizingPersistentCache = function (options) {
        var _this = this;
        var _a = options, getUrl = _a.getUrl, getAdditionalPostData = _a.getAdditionalPostData, cacheRequestKey = _a.cacheRequestKey, cacheTimeoutTime = _a.cacheTimeoutTime, returnStatistics = _a.returnStatistics, getDataParams = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(_a, ["getUrl", "getAdditionalPostData", "cacheRequestKey", "cacheTimeoutTime", "returnStatistics"]);
        getDataParams = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ url: getUrl && getUrl(), additionalPostData: getAdditionalPostData && getAdditionalPostData(), 
            // these defaults previously provided by DataSource.getData
            method: 'POST' }, getDataParams);
        // handle deprecated function forms of url/postdata
        getDataParams.url = getDataParams.url || (getUrl && getUrl());
        if (!('needsRequestDigest' in getDataParams)) {
            getDataParams.needsRequestDigest = this.needsRequestDigest(getDataParams.url);
        }
        getDataParams.additionalPostData =
            getDataParams.additionalPostData || (getAdditionalPostData && getAdditionalPostData());
        cacheRequestKey =
            cacheRequestKey ||
                this.getRequestKey(getDataParams.url, getDataParams.method, getDataParams.additionalPostData);
        var cachingStrategy = options.cachingStrategy;
        return this._persistentRequestCache.getDataUtilizingCache({
            cachingStrategy: cachingStrategy,
            cacheRequestKey: cacheRequestKey,
            cacheTimeoutTime: cacheTimeoutTime,
            getData: function () {
                return _this.dataRequestor.getData(getDataParams);
            },
            returnStatistics: returnStatistics
        });
    };
    /**
     * Returns true if all of the following are satisfied:
     * - Cache entry for this key exists
     * - localStorage entry with an invalidation timestamp for this key exists
     * - the invalidation timestamp is newer than the cache entry time
     *
     * @param cacheRequestKey Key to check
     */
    CachedDataSource.prototype.isCachedDataInvalidated = function (cacheRequestKey) {
        return (this._legacyRequestCache.isCachedDataInvalidated &&
            this._legacyRequestCache.isCachedDataInvalidated(cacheRequestKey));
    };
    /**
     * Serializes a key for the request. Override this method to use your own serialization
     * or naming scheme.
     */
    CachedDataSource.prototype.getRequestKey = function (url, method, additionalPostData) {
        return this._legacyRequestCache.getRequestKey(url, method, additionalPostData);
    };
    Object.defineProperty(CachedDataSource.prototype, "cacheId", {
        /**
         * Name for session storage entry storing the data for this cache.
         */
        get: function () {
            return this._legacyRequestCache.cacheId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CachedDataSource.prototype, "cacheVersionId", {
        /**
         * Name for session storage entry storing the version number/partition for this cache.
         */
        get: function () {
            return this._legacyRequestCache.cacheVersionId;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Flushes the cache entry with the specified cache request key.
     * If no key is specified, flushes the whole cache.
     */
    CachedDataSource.prototype.flushCache = function (cacheRequestKey) {
        this._legacyRequestCache.flushCache(cacheRequestKey);
        this._persistentRequestCache.flushCache(cacheRequestKey);
    };
    return CachedDataSource;
}(_DataSource__WEBPACK_IMPORTED_MODULE_1__["default"]));

/* harmony default export */ __webpack_exports__["default"] = (CachedDataSource);
//# sourceMappingURL=CachedDataSource.js.map

/***/ })

/******/ })});;
//# sourceMappingURL=sp-pages-preloads_[locale].js.map