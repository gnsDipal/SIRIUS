define("5388ac31-7915-4ba6-a021-0f8808dd5784_0.0.1", ["tslib","@ms/sp-telemetry","@microsoft/sp-loader","@microsoft/office-ui-fabric-react-bundle","@microsoft/sp-lodash-subset","@microsoft/sp-core-library","@ms/sp-mysitecache","react","@ms/uifabric-styling-bundle","@microsoft/load-themed-styles","@microsoft/sp-diagnostics","@ms/odsp-utilities-bundle"], function(__WEBPACK_EXTERNAL_MODULE__17wl__, __WEBPACK_EXTERNAL_MODULE__2q6Q__, __WEBPACK_EXTERNAL_MODULE_I6O9__, __WEBPACK_EXTERNAL_MODULE_KL1q__, __WEBPACK_EXTERNAL_MODULE_Pk8u__, __WEBPACK_EXTERNAL_MODULE_UWqr__, __WEBPACK_EXTERNAL_MODULE_ZVdo__, __WEBPACK_EXTERNAL_MODULE_cDcd__, __WEBPACK_EXTERNAL_MODULE_fglE__, __WEBPACK_EXTERNAL_MODULE_jOlS__, __WEBPACK_EXTERNAL_MODULE_ut3N__, __WEBPACK_EXTERNAL_MODULE_y88i__) { return /******/ (function(modules) { // webpackBootstrap
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
/******/
/******/ 		return {"vendors~toolbox": [component_0],"toolbox": [component_0]}[chunkId] || [];
/******/ 	}
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"sp-toolbox": 0
/******/ 	};
/******/
/******/
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "chunk." + ({"vendors~toolbox":"vendors~toolbox","toolbox":"toolbox"}[chunkId]||chunkId) + "_" + (["default","none"])[{"toolbox":0,"vendors~toolbox":1}[chunkId]] + ".js"
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
/******/ 	var jsonpArray = window["webpackJsonp_5388ac31_7915_4ba6_a021_0f8808dd5784_0_0_1"] = window["webpackJsonp_5388ac31_7915_4ba6_a021_0f8808dd5784_0_0_1"] || [];
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
/******/ 	  var regex = (typeof spScriptNamePattern !== 'undefined') ? spScriptNamePattern : /sp-toolbox_default\.js/i;
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

/***/ "+FXA":
/*!********************************************!*\
  !*** ./lib/toolboxItem/ToolboxItemBase.js ***!
  \********************************************/
/*! exports provided: ToolboxItemBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolboxItemBase", function() { return ToolboxItemBase; });
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/office-ui-fabric-react-bundle */ "KL1q");
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ms/sp-telemetry */ "2q6Q");
/* harmony import */ var _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _customFonts_graph_symbol_fabric_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../customFonts/graph-symbol-fabric-icons */ "Ay89");
/* harmony import */ var _legacy_lessText__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../legacy/lessText */ "7fMg");
/* harmony import */ var _ToolboxFlightsAndKillSwitches__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ToolboxFlightsAndKillSwitches */ "kxuc");
/* harmony import */ var _ToolboxItemBase_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ToolboxItemBase.module.scss */ "p2YA");







// tslint:disable:no-var-requires
var GRAPH_SYMBOL_ICON = __webpack_require__(/*! !file-loader?name=image_[name]_[hash:8].[ext]!@ms/odsp-media/dist/media/fonts/graph-symbol-fabric-icons-380aa405.woff */ "fzlK");
function ToolboxItemBase(props) {
    Object(_customFonts_graph_symbol_fabric_icons__WEBPACK_IMPORTED_MODULE_3__["initializeCustomIcons"])(GRAPH_SYMBOL_ICON);
    var handleCommandButtonClick = react__WEBPACK_IMPORTED_MODULE_2__["useCallback"](function () {
        props.onClick(props.item.id);
        if (Object(_ToolboxFlightsAndKillSwitches__WEBPACK_IMPORTED_MODULE_5__["isToolboxUIUpdateEnabled"])()) {
            if (props.item.isFrequentlyUsed) {
                _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_1__["_EngagementLogger"].logEvent('Toolbox.ToolboxItem.FrequentlyUsed.Click');
            }
            else {
                _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_1__["_EngagementLogger"].logEvent('Toolbox.ToolboxItem.Click');
            }
        }
    }, [props.onClick, props.item.id]);
    var _styles = react__WEBPACK_IMPORTED_MODULE_2__["useMemo"](function () { return ({ root: props.itemStyles }); }, [props.itemStyles]);
    return (react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__["CommandButton"], { styles: _styles, className: Object(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__["css"])(_ToolboxItemBase_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].item, props.itemClassName), ariaLabel: props.item.displayName, ariaDescription: props.item.description, title: props.item.description, onClick: handleCommandButtonClick, "data-automation-id": props.item.id, "data-item-size": props['data-item-size'], disabled: props.item.disabled }, onRenderItemContent(props)));
}
function onRenderItemContent(props) {
    var _a;
    if (props.onRenderItemContent) {
        return props.onRenderItemContent(props);
    }
    var memoProps = react__WEBPACK_IMPORTED_MODULE_2__["useMemo"](function () { return ({
        src: props.item.imageSrc,
        alt: props.item.displayName,
        imageFit: _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__["ImageFit"].contain
    }); }, [props.item.imageSrc, props.item.displayName, _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__["ImageFit"].contain]);
    var imageProps = props.item.imageSrc ? memoProps : undefined;
    return (react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", { className: Object(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__["css"])(_ToolboxItemBase_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].flexBox, props.flexBoxClassName) },
        react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__["Icon"], { className: Object(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__["css"])(_ToolboxItemBase_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].icon, props.iconClassName, (_a = {}, _a[_ToolboxItemBase_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].disabled] = props.item.disabled, _a)), iconName: props.item.msIconName, iconType: props.item.imageSrc ? _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__["IconType"].Image : _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__["IconType"].Default, imageProps: imageProps }),
        react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_legacy_lessText__WEBPACK_IMPORTED_MODULE_4__["LessText"], { text: props.item.displayName, className: Object(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__["css"])(_ToolboxItemBase_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].title, props.titleClassName), showTitle: true, lines: props.titleLineCount, omission: '…' })));
}


/***/ }),

/***/ "+bKi":
/*!******************************!*\
  !*** ./lib/toolbox/index.js ***!
  \******************************/
/*! exports provided: Toolbox, TOOLBOX_TYPES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ToolboxOpenLayer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ToolboxOpenLayer */ "YTr9");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Toolbox", function() { return _ToolboxOpenLayer__WEBPACK_IMPORTED_MODULE_0__["ToolboxOpenLayer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TOOLBOX_TYPES", function() { return _ToolboxOpenLayer__WEBPACK_IMPORTED_MODULE_0__["TOOLBOX_TYPES"]; });




/***/ }),

/***/ "/s7D":
/*!***************************************************!*\
  !*** ./lib/toolboxAnimation/animation.module.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../../common/temp/node_modules/.pnpm/css-loader@3.2.1_webpack@4.44.2/node_modules/css-loader/dist/cjs.js!../../../../common/temp/node_modules/.pnpm/postcss-loader@3.0.0/node_modules/postcss-loader/src??postcss!./animation.module.css */ "tluz");
var loader = __webpack_require__(/*! @microsoft/load-themed-styles */ "jOlS");

if(typeof content === "string") content = [[module.i, content]];

// add the styles to the DOM
for (var i = 0; i < content.length; i++) loader.loadStyles(content[i][1], true);

if(content.locals) module.exports = content.locals;

/***/ }),

/***/ "0D4h":
/*!***************************************!*\
  !*** ./lib/toolboxSearch/Search.resx ***!
  \***************************************/
/*! exports provided: SearchResultAlert, SearchResultAlertIntervals, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"SearchResultAlert\":\"SearchResultAlert\",\"SearchResultAlertIntervals\":\"SearchResultAlertIntervals\"}");

/***/ }),

/***/ "0OXC":
/*!********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/css-loader@3.2.1_webpack@4.44.2/node_modules/css-loader/dist/cjs.js!/agent/_work/1/s/common/temp/node_modules/.pnpm/postcss-loader@3.0.0/node_modules/postcss-loader/src??postcss!./lib/toolboxFullBleed/ToolboxFullBleed.module.css ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../common/temp/node_modules/.pnpm/css-loader@3.2.1_webpack@4.44.2/node_modules/css-loader/dist/runtime/api.js */ "5ADk")(false);
// Module
exports.push([module.i, ".al_k_08a7513e{text-align:center;margin:100px auto;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}.ae_k_08a7513e{color:\"[theme:neutralSecondary, default: #605e5c]\";font-weight:600;letter-spacing:1px;line-height:32px;padding:0 12px}", ""]);


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

/***/ "3KoW":
/*!*******************************************!*\
  !*** ./lib/toolboxAnimation/animation.js ***!
  \*******************************************/
/*! exports provided: animation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "animation", function() { return animation; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/office-ui-fabric-react-bundle */ "KL1q");
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ToolboxFlightsAndKillSwitches__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ToolboxFlightsAndKillSwitches */ "kxuc");
/* harmony import */ var _animation_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./animation.module.scss */ "hbbw");





var currentMode = new WeakMap();
function animation(ToolboxComponent, // tslint:disable-line:variable-name
mode) {
    return /** @class */ (function (_super) {
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(AnimationWrapper, _super);
        function AnimationWrapper() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        AnimationWrapper.prototype.componentDidMount = function () {
            currentMode.set(this.props.controller, mode);
        };
        AnimationWrapper.prototype.render = function () {
            return (react__WEBPACK_IMPORTED_MODULE_2__["createElement"](ToolboxComponent, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.props, { className: Object(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_1__["css"])(this.props.className, this._animationClassName) })));
        };
        Object.defineProperty(AnimationWrapper.prototype, "_animationClassName", {
            get: function () {
                var previousMode = currentMode.get(this.props.controller) || 0 /* None */;
                var nextMode = mode;
                if (previousMode === 0 /* None */ && nextMode === 1 /* Loading */) {
                    return _animation_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].fromNoneToSmall;
                }
                else if (previousMode === 0 /* None */ && nextMode === 3 /* Small */) {
                    return _animation_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].fromNoneToSmall;
                }
                else if (previousMode === 3 /* Small */ && nextMode === 4 /* Large */) {
                    return _animation_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].fromSmallToLarge;
                }
                else if (previousMode === 4 /* Large */ && nextMode === 3 /* Small */) {
                    return Object(_ToolboxFlightsAndKillSwitches__WEBPACK_IMPORTED_MODULE_3__["isToolboxUIUpdateEnabled"])() ? _animation_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].fromLargeToSmallUpdate : _animation_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].fromLargeToSmall;
                }
                else {
                    return '';
                }
            },
            enumerable: true,
            configurable: true
        });
        return AnimationWrapper;
    }(react__WEBPACK_IMPORTED_MODULE_2__["PureComponent"]));
}


/***/ }),

/***/ "4HRK":
/*!*****************************************!*\
  !*** ./lib/legacy/lessText/LessText.js ***!
  \*****************************************/
/*! exports provided: LessText */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LessText", function() { return LessText; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/office-ui-fabric-react-bundle */ "KL1q");
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _LessText_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./LessText.module.scss */ "Zl2I");
/**
 * @copyright Microsoft Corporation. All rights reserved.
 *
 * @file LessText.tsx
 */




var DELAY_IN_MILLISECOND = 50;
// Note: Any changes in this file should be in sync with LessText in sp-canvas-toolbox project.
var LessText = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(LessText, _super);
    function LessText(props) {
        var _this = _super.call(this, props) || this;
        _this._textArray = [];
        _this._textContainerElement = null; // tslint:disable-line:no-null-keyword
        /**
         * Call update at runtime to truncate the text whenever on needs.
         */
        _this.update = function () {
            if (_this._textContainerElement) {
                _this._async.requestAnimationFrame(_this._truncateLines);
            }
        };
        _this._setRef = function (ref) {
            _this._textContainerElement = ref;
        };
        _this._truncateLines = function () {
            if (!_this._textContainerElement) {
                return;
            }
            var text = _this.props.text || '';
            _this._textContainerElement.textContent = text;
            var lines = Math.round(_this.props.lines);
            var lineHeight = window
                .getComputedStyle(_this._textContainerElement, undefined)
                .getPropertyValue('line-height');
            var maxHeight = lines * parseFloat(lineHeight);
            var currHeight = _this._contentHeight;
            _this._textArray = text.split('');
            var shouldTrim = currHeight > maxHeight && lines > 0;
            if (shouldTrim) {
                var trimmedLength = _this._trimAndCalculateLength(currHeight, maxHeight);
                _this._applyTextNumber(trimmedLength);
            }
        };
        _this._async = new _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_1__["Async"](_this);
        _this._eventGroup = new _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_1__["EventGroup"](_this);
        _this._handleWindowResize = _this._async.debounce(_this._handleWindowResizeCore, DELAY_IN_MILLISECOND);
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
        return (react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", { "data-automation-id": 'less-text', ref: this._setRef, title: this.props.showTitle ? this.props.text : undefined, className: Object(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_1__["css"])(_LessText_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].lessText, this.props.className) }, this.props.text));
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
            if (this._textContainerElement) {
                var contentStyles = window.getComputedStyle(this._textContainerElement);
                var padding = 0;
                if (contentStyles && contentStyles.paddingTop && contentStyles.paddingBottom) {
                    padding = parseFloat(contentStyles.paddingTop) + parseFloat(contentStyles.paddingBottom);
                }
                return this._textContainerElement.offsetHeight - padding;
            }
            return 0;
        },
        enumerable: true,
        configurable: true
    });
    LessText.prototype._trimAndCalculateLength = function (currentValue, maxValue) {
        var allowedTextNumber = this._textArray.length;
        if (!this._textContainerElement) {
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
        if (this._textContainerElement) {
            this._textContainerElement.textContent =
                this._textContainerElement.textContent === newTextJoined
                    ? newTextJoined
                    : newTextJoined + this._omission;
        }
    };
    return LessText;
}(react__WEBPACK_IMPORTED_MODULE_2__["PureComponent"]));



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

/***/ "7fMg":
/*!**************************************!*\
  !*** ./lib/legacy/lessText/index.js ***!
  \**************************************/
/*! exports provided: LessText */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DelayLessText__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DelayLessText */ "fvWV");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LessText", function() { return _DelayLessText__WEBPACK_IMPORTED_MODULE_0__["DelayLessText"]; });

/**
 * @copyright Microsoft Corporation. All rights reserved.
 */



/***/ }),

/***/ "9Mhb":
/*!**********************************************!*\
  !*** ./lib/toolboxLoading/ToolboxLoading.js ***!
  \**********************************************/
/*! exports provided: ToolboxLoading */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolboxLoading", function() { return ToolboxLoading; });
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/office-ui-fabric-react-bundle */ "KL1q");
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _toolboxCallout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toolboxCallout */ "GNkg");
/* harmony import */ var _ToolboxLoading_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ToolboxLoading.module.scss */ "Aecz");
/**
 * @copyright Microsoft Corporation. All rights reserved.
 *
 * @file ToolboxLoading.tsx
 */




function ToolboxLoading(props) {
    return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_toolboxCallout__WEBPACK_IMPORTED_MODULE_2__["ToolboxCallout"], { className: props.className, onDismiss: props.onDismiss, target: props.calloutTarget, directionalHint: props.calloutDirectionalHint, toolboxType: props.toolboxType },
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__["Spinner"], { size: _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__["SpinnerSize"].large, className: _ToolboxLoading_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].spinner })));
}


/***/ }),

/***/ "9qq0":
/*!****************************************!*\
  !*** ./lib/toolboxNone/ToolboxNone.js ***!
  \****************************************/
/*! exports provided: ToolboxNone */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolboxNone", function() { return ToolboxNone; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _toolboxSearch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toolboxSearch */ "ZFqg");


function renderToolboxNone(props, searchContext) {
    if (searchContext.query) {
        // Clear the search query when we close the toolbox.
        searchContext.onFilterItems('', /* shouldDebounce */ false);
    }
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: props.className });
}
function ToolboxNone(props) {
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_toolboxSearch__WEBPACK_IMPORTED_MODULE_1__["SearchConsumer"], null, function (searchContext) { return renderToolboxNone(props, searchContext); });
}


/***/ }),

/***/ "A690":
/*!*************************************************************!*\
  !*** ./lib/toolboxItem/ToolboxItemFullBleed.module.scss.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* tslint:disable */
__webpack_require__(/*! ./ToolboxItemFullBleed.module.css */ "L96p");
var styles = {
    item: 'ag_j_08a7513e',
    icon: 'ai_j_08a7513e',
    title: 'ak_j_08a7513e'
};
/* harmony default export */ __webpack_exports__["default"] = (styles);
/* tslint:enable */ 


/***/ }),

/***/ "Aecz":
/*!**********************************************************!*\
  !*** ./lib/toolboxLoading/ToolboxLoading.module.scss.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* tslint:disable */
__webpack_require__(/*! ./ToolboxLoading.module.css */ "G8yu");
var styles = {
    spinner: 'v_v_08a7513e'
};
/* harmony default export */ __webpack_exports__["default"] = (styles);
/* tslint:enable */ 


/***/ }),

/***/ "Ay89":
/*!******************************************************!*\
  !*** ./lib/customFonts/graph-symbol-fabric-icons.js ***!
  \******************************************************/
/*! exports provided: initializeCustomIcons */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initializeCustomIcons", function() { return initializeCustomIcons; });
/* harmony import */ var _uifabric_styling__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @uifabric/styling */ "dqzI");
// Your use of the content in the files referenced here is subject to the terms of the license at https://aka.ms/fabric-assets-license
// tslint:disable:max-line-length export-name

function initializeCustomIcons(baseUrl, options) {
    if (baseUrl === void 0) { baseUrl = ''; }
    var subset = {
        style: {
            MozOsxFontSmoothing: 'grayscale',
            WebkitFontSmoothing: 'antialiased',
            fontStyle: 'normal',
            fontWeight: 'normal',
            speak: 'none'
        },
        fontFace: {
            fontFamily: "\"GraphSymbolFabricMDL2Icons\"",
            src: "url('" + baseUrl + "') format('woff')"
        },
        icons: {
            GraphSymbol: '\uE35D'
        }
    };
    Object(_uifabric_styling__WEBPACK_IMPORTED_MODULE_0__["registerIcons"])(subset, options);
}


/***/ }),

/***/ "BwK8":
/*!**************************************************************!*\
  !*** ./lib/toolboxFullBleed/ToolboxFullBleed.module.scss.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* tslint:disable */
__webpack_require__(/*! ./ToolboxFullBleed.module.css */ "hgyZ");
var styles = {
    toolboxFullBleed: 'al_k_08a7513e',
    header: 'ae_k_08a7513e'
};
/* harmony default export */ __webpack_exports__["default"] = (styles);
/* tslint:enable */ 


/***/ }),

/***/ "FWaJ":
/*!**************************************************************!*\
  !*** ./lib/toolboxWebPartsManager/ToolboxWebPartsManager.js ***!
  \**************************************************************/
/*! exports provided: ToolboxWebPartsManager, toolboxWebPartsManagerServiceKey */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolboxWebPartsManager", function() { return ToolboxWebPartsManager; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toolboxWebPartsManagerServiceKey", function() { return toolboxWebPartsManagerServiceKey; });
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/sp-diagnostics */ "ut3N");
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ms_sp_mysitecache__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ms/sp-mysitecache */ "ZVdo");
/* harmony import */ var _ms_sp_mysitecache__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ms_sp_mysitecache__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ms/sp-telemetry */ "2q6Q");
/* harmony import */ var _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ToolboxWebPartsUtilities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ToolboxWebPartsUtilities */ "eKHk");





var CURRENT_CACHE_VERSION = 1;
var ToolboxWebPartsManager = /** @class */ (function () {
    function ToolboxWebPartsManager(servicescope) {
        this._serviceScope = servicescope;
    }
    Object.defineProperty(ToolboxWebPartsManager.prototype, "mySiteCacheManager", {
        get: function () {
            if (this._mySiteCacheManager === undefined) {
                this._mySiteCacheManager = new _ms_sp_mysitecache__WEBPACK_IMPORTED_MODULE_2__["MySiteCacheManager"](this._serviceScope);
                this._mySiteCacheManager.setCacheConfiguration({
                    folderPath: ToolboxWebPartsManager.MYSITE_CACHE_PATH
                });
            }
            return this._mySiteCacheManager;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Getting the ids of the most frequently used web parts.
     */
    ToolboxWebPartsManager.prototype.getMfuWebParts = function () {
        return this._getWebPartsUsage().then(function (usageData) {
            return Object(_ToolboxWebPartsUtilities__WEBPACK_IMPORTED_MODULE_4__["getMfuWebPartIdsFromUsage"])(usageData);
        });
    };
    /**
     * Increasing the web part with specfic web part id usage and save it to server side.
     * @param webPartId is the web part id.
     */
    ToolboxWebPartsManager.prototype.recordWebPartUsage = function (webPartId) {
        var saveUsageQosMonitor = new _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__["_QosMonitor"]('WebPartsUsageManager.addWebPartUsage');
        this._updateParsedCachedValue(webPartId);
        return this.mySiteCacheManager
            .setCachedData(webPartId, this._parsedCachedValue[webPartId], undefined)
            .then(function () {
            var _a;
            (_a = saveUsageQosMonitor) === null || _a === void 0 ? void 0 : _a.writeSuccess();
        })
            .catch(function (error) {
            var _a;
            (_a = saveUsageQosMonitor) === null || _a === void 0 ? void 0 : _a.writeUnexpectedFailure('Failed to save web part usage data.', error);
        });
    };
    ToolboxWebPartsManager.prototype._getWebPartsUsage = function () {
        var _this = this;
        if (this._parsedCachedValue) {
            return Promise.resolve(this._parsedCachedValue);
        }
        else {
            var readUsageQosMonitor_1 = new _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__["_QosMonitor"]('WebPartsUsageManager.getWebPartsUsage');
            var startTime_1 = _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_3__["_PerformanceLogger"].now();
            return this.mySiteCacheManager
                .getCachedDataByFolder(ToolboxWebPartsManager.MYSITE_CACHE_PATH)
                .then(function (data) {
                var _a;
                (_a = readUsageQosMonitor_1) === null || _a === void 0 ? void 0 : _a.writeSuccess({ loadTime: _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_3__["_PerformanceLogger"].now() - startTime_1 });
                _this._parsedCachedValue = Object(_ToolboxWebPartsUtilities__WEBPACK_IMPORTED_MODULE_4__["convertCacheListDataToWebPartUsage"])(data);
                return _this._parsedCachedValue;
            })
                .catch(function (error) {
                readUsageQosMonitor_1.writeUnexpectedFailure('Failed to call get web part usage data.', error);
                return Promise.resolve({});
            });
        }
    };
    ToolboxWebPartsManager.prototype._updateParsedCachedValue = function (webPartId) {
        var _a;
        if (!this._parsedCachedValue) {
            this._parsedCachedValue = (_a = {},
                _a[webPartId] = {
                    totalCount: 1,
                    lastUseTimeStamp: new Date().toISOString(),
                    dataVersion: CURRENT_CACHE_VERSION
                },
                _a);
        }
        else if (!this._parsedCachedValue[webPartId]) {
            this._parsedCachedValue[webPartId] = {
                totalCount: 1,
                lastUseTimeStamp: new Date().toISOString(),
                dataVersion: CURRENT_CACHE_VERSION
            };
        }
        else {
            this._parsedCachedValue[webPartId] = {
                totalCount: this._parsedCachedValue[webPartId].totalCount + 1,
                lastUseTimeStamp: new Date().toISOString(),
                dataVersion: CURRENT_CACHE_VERSION
            };
        }
    };
    ToolboxWebPartsManager.MYSITE_CACHE_PATH = 'WebPart_Usage_Data';
    return ToolboxWebPartsManager;
}());

var toolboxWebPartsManagerServiceKey = _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["ServiceKey"].create('sp-canvas-toolbox:ToolboxWebPartsManager', ToolboxWebPartsManager);


/***/ }),

/***/ "G8yu":
/*!******************************************************!*\
  !*** ./lib/toolboxLoading/ToolboxLoading.module.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../../common/temp/node_modules/.pnpm/css-loader@3.2.1_webpack@4.44.2/node_modules/css-loader/dist/cjs.js!../../../../common/temp/node_modules/.pnpm/postcss-loader@3.0.0/node_modules/postcss-loader/src??postcss!./ToolboxLoading.module.css */ "Xleq");
var loader = __webpack_require__(/*! @microsoft/load-themed-styles */ "jOlS");

if(typeof content === "string") content = [[module.i, content]];

// add the styles to the DOM
for (var i = 0; i < content.length; i++) loader.loadStyles(content[i][1], true);

if(content.locals) module.exports = content.locals;

/***/ }),

/***/ "GNkg":
/*!*************************************!*\
  !*** ./lib/toolboxCallout/index.js ***!
  \*************************************/
/*! exports provided: ToolboxCallout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ToolboxCallout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ToolboxCallout */ "Va9i");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ToolboxCallout", function() { return _ToolboxCallout__WEBPACK_IMPORTED_MODULE_0__["ToolboxCallout"]; });




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

/***/ "Kdsx":
/*!**************************************************!*\
  !*** ./lib/toolboxFullBleed/ToolboxFullBleed.js ***!
  \**************************************************/
/*! exports provided: ToolboxFullBleed */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolboxFullBleed", function() { return ToolboxFullBleed; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/office-ui-fabric-react-bundle */ "KL1q");
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _toolboxItem_ToolboxItemFullBleed__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../toolboxItem/ToolboxItemFullBleed */ "bDLt");
/* harmony import */ var _ToolboxFullBleed_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ToolboxFullBleed.module.scss */ "BwK8");
/* harmony import */ var _ToolboxFullBleedStrings_resx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ToolboxFullBleedStrings.resx */ "MHtv");
var _ToolboxFullBleedStrings_resx__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./ToolboxFullBleedStrings.resx */ "MHtv", 1);



// Path import to avoid bundle the whole toolbox item folder.



var ToolboxFullBleed = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ToolboxFullBleed, _super);
    function ToolboxFullBleed(props) {
        var _this = _super.call(this, props) || this;
        _this._handleClickItem = function (toolboxItemId) {
            var itemData = _this.state.mapToolboxItemIdToCanvasControl.get(toolboxItemId);
            if (!itemData) {
                // It is clicking on an non-existing toolbox item. How does it happen?
                return;
            }
            _this.props.clickItem(itemData, {
                size: 'FullBleed'
            });
        };
        _this.state = _this._getState(props.items);
        return _this;
    }
    ToolboxFullBleed.prototype.UNSAFE_componentWillReceiveProps = function (nextProps) {
        if (nextProps.items !== this.props.items) {
            this.setState(this._getState(nextProps.items));
        }
    };
    ToolboxFullBleed.prototype.render = function () {
        var _this = this;
        var fullBleedToolboxItems = this.props.items.map(function (item) { return (react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_toolboxItem_ToolboxItemFullBleed__WEBPACK_IMPORTED_MODULE_3__["ToolboxItemFullBleed"], { key: item.id, item: item, onClick: _this._handleClickItem })); });
        return (react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("section", { className: _ToolboxFullBleed_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].toolboxFullBleed, "aria-label": _ToolboxFullBleedStrings_resx__WEBPACK_IMPORTED_MODULE_5__["ToolboxGroupNameFullWidth"], role: 'group' },
            react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("header", { className: _ToolboxFullBleed_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].header }, _ToolboxFullBleedStrings_resx__WEBPACK_IMPORTED_MODULE_5__["ToolboxGroupNameFullWidth"]),
            react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_1__["FocusZone"], { direction: _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_1__["FocusZoneDirection"].horizontal, isCircularNavigation: true }, fullBleedToolboxItems)));
    };
    ToolboxFullBleed.prototype._getState = function (items) {
        return {
            mapToolboxItemIdToCanvasControl: new Map(items.map(function (map) { return [map.id, map.itemData]; }))
        };
    };
    return ToolboxFullBleed;
}(react__WEBPACK_IMPORTED_MODULE_2__["PureComponent"]));



/***/ }),

/***/ "Kjlv":
/*!************************************************************!*\
  !*** ./lib/toolboxLoading/ToolboxLoadingAnimationLayer.js ***!
  \************************************************************/
/*! exports provided: ToolboxLoadingAnimationLayer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolboxLoadingAnimationLayer", function() { return ToolboxLoadingAnimationLayer; });
/* harmony import */ var _toolboxAnimation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../toolboxAnimation */ "Xs01");
/* harmony import */ var _ToolboxLoading__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ToolboxLoading */ "9Mhb");


// tslint:disable-next-line:variable-name
var ToolboxLoadingAnimationLayer = Object(_toolboxAnimation__WEBPACK_IMPORTED_MODULE_0__["animation"])(_ToolboxLoading__WEBPACK_IMPORTED_MODULE_1__["ToolboxLoading"], 1 /* Loading */);


/***/ }),

/***/ "L96p":
/*!*********************************************************!*\
  !*** ./lib/toolboxItem/ToolboxItemFullBleed.module.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../../common/temp/node_modules/.pnpm/css-loader@3.2.1_webpack@4.44.2/node_modules/css-loader/dist/cjs.js!../../../../common/temp/node_modules/.pnpm/postcss-loader@3.0.0/node_modules/postcss-loader/src??postcss!./ToolboxItemFullBleed.module.css */ "qd0H");
var loader = __webpack_require__(/*! @microsoft/load-themed-styles */ "jOlS");

if(typeof content === "string") content = [[module.i, content]];

// add the styles to the DOM
for (var i = 0; i < content.length; i++) loader.loadStyles(content[i][1], true);

if(content.locals) module.exports = content.locals;

/***/ }),

/***/ "M/ds":
/*!**************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/css-loader@3.2.1_webpack@4.44.2/node_modules/css-loader/dist/cjs.js!/agent/_work/1/s/common/temp/node_modules/.pnpm/postcss-loader@3.0.0/node_modules/postcss-loader/src??postcss!./lib/toolboxItem/ToolboxItemBase.module.css ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../common/temp/node_modules/.pnpm/css-loader@3.2.1_webpack@4.44.2/node_modules/css-loader/dist/runtime/api.js */ "5ADk")(false);
// Module
exports.push([module.i, ".ag_i_08a7513e{margin:0;padding:0;border:1px solid transparent;background-clip:padding-box}.ag_i_08a7513e:focus,.ag_i_08a7513e:hover{background-color:\"[theme:themeLighter, default: #deecf9]\"}.ag_i_08a7513e:focus *,.ag_i_08a7513e:hover *{color:\"[theme:themeDarkAlt, default: #106ebe]\"}@media screen and (-ms-high-contrast:active){.ag_i_08a7513e:focus,.ag_i_08a7513e:hover{color:#1aebff}}@media screen and (-ms-high-contrast:black-on-white){.ag_i_08a7513e:focus,.ag_i_08a7513e:hover{color:#37006e}}.ah_i_08a7513e{width:100%;height:100%;box-sizing:border-box;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:start;justify-content:flex-start;-ms-flex-align:center;align-items:center}.ai_i_08a7513e{color:\"[theme:neutralPrimary, default: #323130]\"}.ai_i_08a7513e .ms-Image{width:100%;height:100%}.ai_i_08a7513e.aj_i_08a7513e{color:\"[theme:neutralTertiary, default: #a19f9d]\"}.ak_i_08a7513e{max-width:100%;color:\"[theme:neutralSecondary, default: #605e5c]\";font-weight:400;line-height:17px}", ""]);


/***/ }),

/***/ "MHtv":
/*!***********************************************************!*\
  !*** ./lib/toolboxFullBleed/ToolboxFullBleedStrings.resx ***!
  \***********************************************************/
/*! exports provided: ToolboxGroupNameFullWidth, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"ToolboxGroupNameFullWidth\":\"ToolboxGroupNameFullWidth\"}");

/***/ }),

/***/ "NlNq":
/*!******************************************************!*\
  !*** ./lib/toolboxNone/ToolboxNoneAnimationLayer.js ***!
  \******************************************************/
/*! exports provided: ToolboxNoneAnimationLayer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolboxNoneAnimationLayer", function() { return ToolboxNoneAnimationLayer; });
/* harmony import */ var _toolboxAnimation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../toolboxAnimation */ "Xs01");
/* harmony import */ var _ToolboxNone__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ToolboxNone */ "9qq0");


// tslint:disable-next-line:variable-name
var ToolboxNoneAnimationLayer = Object(_toolboxAnimation__WEBPACK_IMPORTED_MODULE_0__["animation"])(_ToolboxNone__WEBPACK_IMPORTED_MODULE_1__["ToolboxNone"], 0 /* None */);


/***/ }),

/***/ "NpD7":
/*!*************************************!*\
  !*** ./lib/toolboxLoading/index.js ***!
  \*************************************/
/*! exports provided: ToolboxLoading */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ToolboxLoadingAnimationLayer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ToolboxLoadingAnimationLayer */ "Kjlv");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ToolboxLoading", function() { return _ToolboxLoadingAnimationLayer__WEBPACK_IMPORTED_MODULE_0__["ToolboxLoadingAnimationLayer"]; });




/***/ }),

/***/ "Pk8u":
/*!**********************************************!*\
  !*** external "@microsoft/sp-lodash-subset" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_Pk8u__;

/***/ }),

/***/ "UWqr":
/*!*********************************************!*\
  !*** external "@microsoft/sp-core-library" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_UWqr__;

/***/ }),

/***/ "Va9i":
/*!**********************************************!*\
  !*** ./lib/toolboxCallout/ToolboxCallout.js ***!
  \**********************************************/
/*! exports provided: ToolboxCallout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolboxCallout", function() { return ToolboxCallout; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/office-ui-fabric-react-bundle */ "KL1q");
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _toolbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toolbox */ "+bKi");
/* harmony import */ var _ToolboxFlightsAndKillSwitches__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ToolboxFlightsAndKillSwitches */ "kxuc");




/**
 * Currently we're rendering the same width for all types of toolboxes, so it's hard coded here.
 * But if later we want to have different width per instances, we can refactor this out.
 */
var TOOLBOX_CALLOUT_WIDTH = 292;
var TOOLBOX_CALLOUT_WIDTH_UPDATE = 485;
/**
 * The min-height of callout.
 */
var TOOLBOX_CALLOUT_MIN_HEIGHT = 40;
function ToolboxCallout(props) {
    var _a;
    var focusTrapZoneProps = {
        isClickableOutsideFocusTrap: true,
        ignoreExternalFocusing: false,
        'data-sp-a11y-skipkeys': 'all',
        'data-automation-id': 'toolbox-callout'
    };
    var isFirstRunInProgress = Boolean((_a = window.sessionStorage) === null || _a === void 0 ? void 0 : _a.getItem('FirstRunInProgress'));
    var width = Object(_ToolboxFlightsAndKillSwitches__WEBPACK_IMPORTED_MODULE_3__["isToolboxUIUpdateEnabled"])() && props.toolboxType !== _toolbox__WEBPACK_IMPORTED_MODULE_2__["TOOLBOX_TYPES"].sectionToolbox
        ? TOOLBOX_CALLOUT_WIDTH_UPDATE
        : TOOLBOX_CALLOUT_WIDTH;
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_1__["FocusTrapCallout"], { onDismiss: props.onDismiss, target: props.target, directionalHint: props.directionalHint, calloutWidth: width, 
        // tslint:disable-next-line: react-tsx-curly-spacing
        styles: {
            calloutMain: {
                minHeight: TOOLBOX_CALLOUT_MIN_HEIGHT,
                overflow: isFirstRunInProgress ? 'visible' : undefined
            }
        }, setInitialFocus: false, focusTrapProps: focusTrapZoneProps },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { "data-sp-fre-id": 'sp-fre-canvas-5', "data-offset-left": '100%', "data-offset-top": '0' }),
        props.children));
}


/***/ }),

/***/ "Xleq":
/*!****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/css-loader@3.2.1_webpack@4.44.2/node_modules/css-loader/dist/cjs.js!/agent/_work/1/s/common/temp/node_modules/.pnpm/postcss-loader@3.0.0/node_modules/postcss-loader/src??postcss!./lib/toolboxLoading/ToolboxLoading.module.css ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../common/temp/node_modules/.pnpm/css-loader@3.2.1_webpack@4.44.2/node_modules/css-loader/dist/runtime/api.js */ "5ADk")(false);
// Module
exports.push([module.i, ".v_v_08a7513e{margin:0;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}", ""]);


/***/ }),

/***/ "Xs01":
/*!***************************************!*\
  !*** ./lib/toolboxAnimation/index.js ***!
  \***************************************/
/*! exports provided: animation, animationStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _animation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./animation */ "3KoW");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "animation", function() { return _animation__WEBPACK_IMPORTED_MODULE_0__["animation"]; });

/* harmony import */ var _animation_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./animation.module.scss */ "hbbw");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "animationStyles", function() { return _animation_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"]; });





/***/ }),

/***/ "YTr9":
/*!*****************************************!*\
  !*** ./lib/toolbox/ToolboxOpenLayer.js ***!
  \*****************************************/
/*! exports provided: TOOLBOX_TYPES, ToolboxOpenLayer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOOLBOX_TYPES", function() { return TOOLBOX_TYPES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolboxOpenLayer", function() { return ToolboxOpenLayer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/sp-diagnostics */ "ut3N");
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ms/sp-telemetry */ "2q6Q");
/* harmony import */ var _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _toolboxLoading__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../toolboxLoading */ "NpD7");
/* harmony import */ var _toolboxNone__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../toolboxNone */ "hTTM");
/* harmony import */ var _toolboxWebPartsManager_ToolboxWebPartsManager__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../toolboxWebPartsManager/ToolboxWebPartsManager */ "FWaJ");
/* harmony import */ var _ToolboxFlightsAndKillSwitches__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../ToolboxFlightsAndKillSwitches */ "kxuc");








var TOOLBOX_FOCUS_IDENTIFIER = 'ToolboxFocus';
var TOOLBOX_TYPES = {
    webPartToolbox: 0,
    sectionToolbox: 1
};
var ToolboxOpenLayer = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ToolboxOpenLayer, _super);
    function ToolboxOpenLayer(props) {
        var _a;
        var _this = _super.call(this, props) || this;
        /**
         * The controller `object` to store context in the toolbox React render tree.
         * We currently use this `object` as the key to store the animation state during switching toolbox.
         * It is pending to refactor and leverage React context to share the state instead of using this `object`.
         */
        _this._controller = {};
        _this._asyncCount = 1;
        _this._openWebPartToolbox = function (calloutTarget, calloutDirectionalHint) {
            _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_2__["_EngagementLogger"].logEvent('Toolbox.Open');
            _this.setState({ toolboxType: TOOLBOX_TYPES.webPartToolbox });
            if (Object(_ToolboxFlightsAndKillSwitches__WEBPACK_IMPORTED_MODULE_7__["isToolboxUIUpdateEnabled"])()) {
                _this._getMostFrequentlyWebPartIds();
            }
            _this._openToolbox(calloutTarget, calloutDirectionalHint, _this._loadWebpartToolbox);
        };
        _this._openSectionToolbox = function (calloutTarget, calloutDirectionalHint) {
            _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_2__["_EngagementLogger"].logEvent('ToolboxSection.Open');
            _this.setState({ toolboxType: TOOLBOX_TYPES.sectionToolbox });
            _this._openToolbox(calloutTarget, calloutDirectionalHint, _this._loadSectionToolbox);
        };
        _this._openToolbox = function (calloutTarget, calloutDirectionalHint, loadToolbox) {
            _this.props.a11yManager.saveActiveElementAs(TOOLBOX_FOCUS_IDENTIFIER);
            _this.setState({
                calloutTarget: calloutTarget,
                calloutDirectionalHint: calloutDirectionalHint,
                toolbox: undefined // Avoid rendering on old toolbox instance before toolbox loads.
            });
            _this._loadToolbox(loadToolbox);
        };
        _this._closeToolbox = function () {
            _this.setState(function (state) {
                if (state.calloutTarget) {
                    if (_this.props.onCloseToolbox) {
                        _this.props.onCloseToolbox();
                    }
                    else {
                        // No-op if the toolbox has closed. When switch the display mode from Edit to Read, the canvas is calling
                        // `closeToolbox` to ensure the toolbox is closed in Read mode.
                    }
                }
                return {
                    calloutTarget: undefined,
                    calloutDirectionalHint: undefined,
                    isMostFrequenltyGroupLoading: true
                };
            });
        };
        if (Object(_ToolboxFlightsAndKillSwitches__WEBPACK_IMPORTED_MODULE_7__["isToolboxUIUpdateEnabled"])()) {
            _this._toolboxWebPartsManager = (_a = props.serviceScope) === null || _a === void 0 ? void 0 : _a.consume(_toolboxWebPartsManager_ToolboxWebPartsManager__WEBPACK_IMPORTED_MODULE_6__["toolboxWebPartsManagerServiceKey"]);
        }
        _this.state = {
            verticalPosition: undefined,
            horizontalPosition: undefined,
            toolbox: undefined,
            calloutTarget: undefined,
            calloutDirectionalHint: undefined,
            toolboxType: TOOLBOX_TYPES.webPartToolbox,
            isMostFrequenltyGroupLoading: true,
            mostFrequentlyIds: []
        };
        return _this;
    }
    ToolboxOpenLayer.prototype.componentDidMount = function () {
        this._updateInstanceRef();
    };
    ToolboxOpenLayer.prototype.componentWillUnmount = function () {
        this.props.instanceRef(undefined);
    };
    ToolboxOpenLayer.prototype.render = function () {
        if (this._shouldRenderToolboxNone) {
            return react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_toolboxNone__WEBPACK_IMPORTED_MODULE_5__["ToolboxNone"], { className: '', controller: this._controller });
        }
        else if (!this.state.toolbox) {
            return (react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_toolboxLoading__WEBPACK_IMPORTED_MODULE_4__["ToolboxLoading"], { className: '', controller: this._controller, calloutTarget: this.state.calloutTarget, calloutDirectionalHint: this.state.calloutDirectionalHint, onDismiss: this._closeToolbox, toolboxType: this.state.toolboxType }));
        }
        else {
            return (react__WEBPACK_IMPORTED_MODULE_3__["createElement"](this.state.toolbox, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.props, { controller: this._controller, onCloseToolbox: this._closeToolbox, calloutTarget: this.state.calloutTarget, calloutDirectionalHint: this.state.calloutDirectionalHint, onDismiss: this._closeToolbox, mostFrequentlyIds: this.state.mostFrequentlyIds, isMostFrequentlyGroupLoading: this.state.isMostFrequenltyGroupLoading, toolboxWebPartsManager: this._toolboxWebPartsManager })));
        }
    };
    ToolboxOpenLayer.prototype._updateInstanceRef = function () {
        // Not expose the component instance or controller, only expose an object with necessary APIs.
        this.props.instanceRef({
            openWebPartToolbox: this._openWebPartToolbox,
            openSectionToolbox: this._openSectionToolbox,
            closeToolbox: this._closeToolbox
        });
    };
    Object.defineProperty(ToolboxOpenLayer.prototype, "_shouldRenderToolboxNone", {
        get: function () {
            return !this.state.calloutTarget;
        },
        enumerable: true,
        configurable: true
    });
    ToolboxOpenLayer.prototype._getMostFrequentlyWebPartIds = function () {
        var _this = this;
        if (!this._toolboxWebPartsManager) {
            this.setState({
                mostFrequentlyIds: [],
                isMostFrequenltyGroupLoading: false
            });
        }
        else {
            this._toolboxWebPartsManager
                .getMfuWebParts()
                .then(function (ids) {
                _this.setState({
                    mostFrequentlyIds: ids,
                    isMostFrequenltyGroupLoading: false
                });
            })
                .catch(function (error) {
                _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__["_TraceLogger"].logError(ToolboxOpenLayer._logSource, error, 'ToolboxOpenLayer._getMostFrequentlyWebPartIds');
                _this.setState({
                    mostFrequentlyIds: [],
                    isMostFrequenltyGroupLoading: false
                });
            });
        }
    };
    ToolboxOpenLayer.prototype._loadToolbox = function (loadToolbox) {
        var _this = this;
        var asyncCount = ++this._asyncCount;
        loadToolbox()
            .then(function (toolbox) {
            _this._markToolboxItemLayer();
            if (asyncCount === _this._asyncCount) {
                // To avoid style flashing, toolbox component is resolved after the style is really loaded.
                setTimeout(function () { return _this.setState({ toolbox: toolbox }); });
            }
        })
            .catch(function () {
            _this._markToolboxItemLayer();
        });
    };
    ToolboxOpenLayer.prototype._loadWebpartToolbox = function () {
        var monitor = new _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_2__["_QosMonitor"]('ToolboxLoad');
        return Promise.all(/*! import() | toolbox */[__webpack_require__.e("vendors~toolbox"), __webpack_require__.e("toolbox")]).then(__webpack_require__.bind(null, /*! ./ToolboxItemsLayer */ "GqUw"))
            .then(function (_a) {
            var ToolboxItemsLayer = _a.ToolboxItemsLayer;
            monitor.writeSuccess();
            return ToolboxItemsLayer;
        })
            .catch(function (error) {
            monitor.writeUnexpectedFailure('Failure', error);
            throw error;
        });
    };
    ToolboxOpenLayer.prototype._loadSectionToolbox = function () {
        var monitor = new _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_2__["_QosMonitor"]('ToolboxSection.Load');
        return Promise.all(/*! import() | toolbox */[__webpack_require__.e("vendors~toolbox"), __webpack_require__.e("toolbox")]).then(__webpack_require__.bind(null, /*! ../toolboxSection */ "wPTN"))
            .then(function (_a) {
            var ToolboxSection = _a.ToolboxSection;
            monitor.writeSuccess();
            return ToolboxSection;
        })
            .catch(function (error) {
            monitor.writeUnexpectedFailure('Failure', error);
            throw error;
        });
    };
    ToolboxOpenLayer.prototype._markToolboxItemLayer = function () {
        if (this.props.componentPerfLogger) {
            this.props.componentPerfLogger.markStage('ToolboxRender', 'ToolboxItemsLayerRender');
        }
    };
    ToolboxOpenLayer._logSource = _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__["_LogSource"].create('ToolboxOpenLayer');
    return ToolboxOpenLayer;
}(react__WEBPACK_IMPORTED_MODULE_3__["PureComponent"]));



/***/ }),

/***/ "ZFqg":
/*!************************************!*\
  !*** ./lib/toolboxSearch/index.js ***!
  \************************************/
/*! exports provided: SearchProvider, SearchConsumer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Search__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Search */ "b5IY");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SearchProvider", function() { return _Search__WEBPACK_IMPORTED_MODULE_0__["SearchProvider"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SearchConsumer", function() { return _Search__WEBPACK_IMPORTED_MODULE_0__["SearchConsumer"]; });




/***/ }),

/***/ "ZVdo":
/*!*************************************!*\
  !*** external "@ms/sp-mysitecache" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_ZVdo__;

/***/ }),

/***/ "Zl2I":
/*!*****************************************************!*\
  !*** ./lib/legacy/lessText/LessText.module.scss.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* tslint:disable */
__webpack_require__(/*! ./LessText.module.css */ "yHX3");
var styles = {
    lessText: 'a_a_08a7513e'
};
/* harmony default export */ __webpack_exports__["default"] = (styles);
/* tslint:enable */ 


/***/ }),

/***/ "b5IY":
/*!*************************************!*\
  !*** ./lib/toolboxSearch/Search.js ***!
  \*************************************/
/*! exports provided: SearchConsumer, SearchProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchConsumer", function() { return SearchConsumer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchProvider", function() { return SearchProvider; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/office-ui-fabric-react-bundle */ "KL1q");
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @microsoft/sp-diagnostics */ "ut3N");
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @microsoft/sp-lodash-subset */ "Pk8u");
/* harmony import */ var _microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ms/odsp-utilities-bundle */ "y88i");
/* harmony import */ var _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ms/sp-telemetry */ "2q6Q");
/* harmony import */ var _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Search_resx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Search.resx */ "0D4h");
var _Search_resx__WEBPACK_IMPORTED_MODULE_7___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./Search.resx */ "0D4h", 1);








var FILTER_DELAY_MS = 400;
var context = react__WEBPACK_IMPORTED_MODULE_6__["createContext"]({
    query: '',
    items: [],
    onFilterItems: _microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_3__["noop"]
});
// tslint:disable-next-line:variable-name
var SearchConsumer = context.Consumer;
var SearchProvider = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(SearchProvider, _super);
    function SearchProvider(props) {
        var _this = _super.call(this, props) || this;
        _this._handleFilterItems = function (query, shouldDebounce, source) {
            // The search input box is React managed, it uses the `queryToDisplay` state to update its value.
            // So, it is by design to always update the `queryToDisplay` state without debounce.
            _this.setState({
                queryToDisplay: query
            });
            if (shouldDebounce) {
                _this._updateQueryToFilterDebounce(query, source);
            }
            else {
                _this._updateQueryToFilter(query, source);
            }
        };
        _this.state = {
            queryToDisplay: '',
            queryToFilter: ''
        };
        _this._updateQueryToFilterDebounce = Object(_microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_3__["debounce"])(_this._updateQueryToFilter, FILTER_DELAY_MS);
        return _this;
    }
    SearchProvider._filterItems = function (queryToFilter, allItems) {
        var filteredItems = allItems.filter(function (item) {
            return item.displayName.toLowerCase().indexOf(queryToFilter) > -1 ||
                (item.description && item.description.toLowerCase().indexOf(queryToFilter) > -1);
        });
        return filteredItems;
    };
    SearchProvider.prototype.componentDidMount = function () {
        // It is always all items when the `SearchProvider` is mount.
        this._alertItemCount(this.props.items);
    };
    SearchProvider.prototype.componentWillUnmount = function () {
        this._updateQueryToFilterDebounce.cancel();
    };
    SearchProvider.prototype.render = function () {
        // This is not a memorized object, so it will trigger consumer re-render on each render call.
        // The consumers are responsive to compare the search context value to determine if render is necessary.
        // Read more: https://reactjs.org/docs/context.html#contextprovider
        var searchContext = {
            query: this.state.queryToDisplay,
            items: SearchProvider._filterItems(this.state.queryToFilter, this.props.items),
            onFilterItems: this._handleFilterItems
        };
        return react__WEBPACK_IMPORTED_MODULE_6__["createElement"](context.Provider, { value: searchContext }, this.props.children);
    };
    SearchProvider.prototype._updateQueryToFilter = function (query, source) {
        var queryToFilter = query.toLowerCase();
        this.setState({ queryToFilter: queryToFilter });
        var filteredItems = SearchProvider._filterItems(queryToFilter, this.props.items);
        this._alertItemCount(filteredItems);
        if (source) {
            _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_5__["_EngagementLogger"].logEventWithLogEntry(new _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__["_LogEntry"](SearchProvider._logSource.id, 'SearchResult', _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__["_LogType"].Event, {
                source: source,
                queryLength: queryToFilter.length.toString(),
                itemCount: filteredItems.length.toString()
            }));
        }
    };
    SearchProvider.prototype._alertItemCount = function (items) {
        this.props.a11yManager.alert(_ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_4__["StringHelper"].formatWithLocalizedCountValue(_Search_resx__WEBPACK_IMPORTED_MODULE_7__["SearchResultAlert"], _Search_resx__WEBPACK_IMPORTED_MODULE_7__["SearchResultAlertIntervals"], items.length));
    };
    SearchProvider._logSource = _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__["_LogSource"].create('Toolbox');
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_1__["memoize"]
    ], SearchProvider, "_filterItems", null);
    return SearchProvider;
}(react__WEBPACK_IMPORTED_MODULE_6__["PureComponent"]));



/***/ }),

/***/ "bDLt":
/*!*************************************************!*\
  !*** ./lib/toolboxItem/ToolboxItemFullBleed.js ***!
  \*************************************************/
/*! exports provided: ToolboxItemFullBleed */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolboxItemFullBleed", function() { return ToolboxItemFullBleed; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ToolboxItemBase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ToolboxItemBase */ "+FXA");
/* harmony import */ var _ToolboxItemFullBleed_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ToolboxItemFullBleed.module.scss */ "A690");




function ToolboxItemFullBleed(props) {
    return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ToolboxItemBase__WEBPACK_IMPORTED_MODULE_2__["ToolboxItemBase"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, props, { titleLineCount: 2, itemClassName: _ToolboxItemFullBleed_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].item, iconClassName: _ToolboxItemFullBleed_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].icon, titleClassName: _ToolboxItemFullBleed_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].title })));
}


/***/ }),

/***/ "cDcd":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_cDcd__;

/***/ }),

/***/ "dqzI":
/*!**************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@uifabric/styling@7.16.19_baa7aab8a1d5d20fe3858de8537800ba/node_modules/@uifabric/styling/lib/index.js ***!
  \**************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ms_uifabric_styling_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ms/uifabric-styling-bundle */ "fglE");
/* harmony import */ var _ms_uifabric_styling_bundle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ms_uifabric_styling_bundle__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _ms_uifabric_styling_bundle__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _ms_uifabric_styling_bundle__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
// Loading @uifabric/styling/./lib/index.js


/***/ }),

/***/ "eKHk":
/*!****************************************************************!*\
  !*** ./lib/toolboxWebPartsManager/ToolboxWebPartsUtilities.js ***!
  \****************************************************************/
/*! exports provided: getMfuWebPartIdsFromUsage, convertCacheListDataToWebPartUsage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMfuWebPartIdsFromUsage", function() { return getMfuWebPartIdsFromUsage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertCacheListDataToWebPartUsage", function() { return convertCacheListDataToWebPartUsage; });
var MOST_FREQUENTLY_USED_WEB_PART_COUNT = 5;
// Default returned web parts manifest id which is pre-defined according to the usage dashboard.
var DEFAULT_MOST_FREQUENTLY_USED_WEB_PART = [
    'RTE',
    'd1d91016-032f-456d-98a4-721247c305e8_0',
    'c70391ea-0b10-4ee9-b2b4-006d3fcad0cd_0',
    '8c88f208-6c77-4bdb-86a0-0c47b4316588_0',
    '7f718435-ee4d-431c-bdbf-9c4ff326f46e_0' // People Web Part
];
/**
 * Getting the most frequently used web part ids from data that returned by API.
 * This function will calculate the most frequently used web parts by ordering the total used count.
 * @param usage is the web part usages that returned by API.
 */
function getMfuWebPartIdsFromUsage(usages) {
    var usageArray = [];
    for (var _i = 0, _a = Object.keys(usages); _i < _a.length; _i++) {
        var key = _a[_i];
        usageArray.push({ key: key, usage: usages[key] });
    }
    if (usageArray.length === 0) {
        return DEFAULT_MOST_FREQUENTLY_USED_WEB_PART;
    }
    usageArray.sort(function (x, y) { return y.usage.totalCount - x.usage.totalCount; });
    return usageArray.map(function (item) { return item.key; }).slice(0, MOST_FREQUENTLY_USED_WEB_PART_COUNT);
}
/**
 * Convert cache list data returned by API to Web Part Usage object that we used to handle in client side.
 * @param cacheResult is the API data returned MySiteCacheList.
 */
function convertCacheListDataToWebPartUsage(cacheResult) {
    var _a;
    var usage = {};
    if ((_a = cacheResult) === null || _a === void 0 ? void 0 : _a.value) {
        for (var _i = 0, _b = cacheResult.value; _i < _b.length; _i++) {
            var item = _b[_i];
            usage[item.CacheKey] = JSON.parse(item.CacheValue);
        }
    }
    return usage;
}


/***/ }),

/***/ "fX/U":
/*!***************************************!*\
  !*** ./lib/toolboxFullBleed/index.js ***!
  \***************************************/
/*! exports provided: ToolboxFullBleed */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ToolboxFullBleed__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ToolboxFullBleed */ "Kdsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ToolboxFullBleed", function() { return _ToolboxFullBleed__WEBPACK_IMPORTED_MODULE_0__["ToolboxFullBleed"]; });




/***/ }),

/***/ "fglE":
/*!**********************************************!*\
  !*** external "@ms/uifabric-styling-bundle" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_fglE__;

/***/ }),

/***/ "fvWV":
/*!**********************************************!*\
  !*** ./lib/legacy/lessText/DelayLessText.js ***!
  \**********************************************/
/*! exports provided: DelayLessText */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DelayLessText", function() { return DelayLessText; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/office-ui-fabric-react-bundle */ "KL1q");
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _LessText__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./LessText */ "4HRK");
/* harmony import */ var _LessText_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./LessText.module.scss */ "Zl2I");





var DelayLessText = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(DelayLessText, _super);
    function DelayLessText(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            render: false
        };
        _this._timeout = _this._deferRender();
        return _this;
    }
    DelayLessText.prototype.componentWillUnmount = function () {
        clearTimeout(this._timeout);
    };
    DelayLessText.prototype.render = function () {
        if (this.state.render) {
            return react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_LessText__WEBPACK_IMPORTED_MODULE_3__["LessText"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.props));
        }
        else {
            return (react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("span", { "data-automation-id": 'less-text', className: Object(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_1__["css"])(_LessText_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].lessText, this.props.className) }, this.props.text));
        }
    };
    DelayLessText.prototype._deferRender = function () {
        var _this = this;
        // We need to wait 300ms to let the size change animation completes.
        return window.setTimeout(function () {
            _this.setState({
                render: true
            });
        }, 300);
    };
    return DelayLessText;
}(react__WEBPACK_IMPORTED_MODULE_2__["PureComponent"]));



/***/ }),

/***/ "fzlK":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/file-loader@1.1.11_webpack@4.44.2/node_modules/file-loader/dist/cjs.js?name=image_[name]_[hash:8].[ext]!/agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-media@2.0.244/node_modules/@ms/odsp-media/dist/media/fonts/graph-symbol-fabric-icons-380aa405.woff ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "image_graph-symbol-fabric-icons-380aa405_83abe66a.woff";

/***/ }),

/***/ "hTTM":
/*!**********************************!*\
  !*** ./lib/toolboxNone/index.js ***!
  \**********************************/
/*! exports provided: ToolboxNone */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ToolboxNoneAnimationLayer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ToolboxNoneAnimationLayer */ "NlNq");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ToolboxNone", function() { return _ToolboxNoneAnimationLayer__WEBPACK_IMPORTED_MODULE_0__["ToolboxNoneAnimationLayer"]; });




/***/ }),

/***/ "hbbw":
/*!*******************************************************!*\
  !*** ./lib/toolboxAnimation/animation.module.scss.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* tslint:disable */
__webpack_require__(/*! ./animation.module.css */ "/s7D");
var styles = {
    fromNoneToSmall: 'k_e_08a7513e',
    upIn: 'l_e_08a7513e',
    fromNoneToSmallUpIn: 'm_e_08a7513e',
    downIn: 'n_e_08a7513e',
    fromNoneToSmallDownInLTR: 'o_e_08a7513e',
    fromNoneToSmallDownInRTL: 'p_e_08a7513e',
    fromSmallToLarge: 'q_e_08a7513e',
    fromLargeToSmall: 'r_e_08a7513e',
    fromLargeToSmallUpdate: 's_e_08a7513e'
};
/* harmony default export */ __webpack_exports__["default"] = (styles);
/* tslint:enable */ 


/***/ }),

/***/ "hgyZ":
/*!**********************************************************!*\
  !*** ./lib/toolboxFullBleed/ToolboxFullBleed.module.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../../common/temp/node_modules/.pnpm/css-loader@3.2.1_webpack@4.44.2/node_modules/css-loader/dist/cjs.js!../../../../common/temp/node_modules/.pnpm/postcss-loader@3.0.0/node_modules/postcss-loader/src??postcss!./ToolboxFullBleed.module.css */ "0OXC");
var loader = __webpack_require__(/*! @microsoft/load-themed-styles */ "jOlS");

if(typeof content === "string") content = [[module.i, content]];

// add the styles to the DOM
for (var i = 0; i < content.length; i++) loader.loadStyles(content[i][1], true);

if(content.locals) module.exports = content.locals;

/***/ }),

/***/ "jOlS":
/*!************************************************!*\
  !*** external "@microsoft/load-themed-styles" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_jOlS__;

/***/ }),

/***/ "kxuc":
/*!**********************************************!*\
  !*** ./lib/ToolboxFlightsAndKillSwitches.js ***!
  \**********************************************/
/*! exports provided: isFluentEnabled, isFixButtonFocusStyleKillSwitchActivated, isToolboxUIUpdateEnabled */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFluentEnabled", function() { return isFluentEnabled; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFixButtonFocusStyleKillSwitchActivated", function() { return isFixButtonFocusStyleKillSwitchActivated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isToolboxUIUpdateEnabled", function() { return isToolboxUIUpdateEnabled; });
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__);
// Copyright (c) Microsoft Corporation. All rights reserved.


function isToolboxFluentKillSwitchActivated() {
    return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPKillSwitch"].isActivated(
    // Use the same kill switch id with the kill switch id of Toolbox in FluentScope
    _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Guid"].parse('b7369ea0-90b4-4183-8f1a-d7e1361154eb'), '8/19/2019', 'SOX_FluentForToolbox');
}
function isFluentEnabled() {
    return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPFlight"].isEnabled(1248) && !isToolboxFluentKillSwitchActivated();
}
function isFixButtonFocusStyleKillSwitchActivated() {
    return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPKillSwitch"].isActivated(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Guid"].parse('29a1f017-08cb-4877-b4a1-ecce7465838a'), '05/21/2020', 'Fix toolbox far button focus style.');
}
function isToolboxUIUpdateEnabled() {
    return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPFlight"].isEnabled(1251 /* UpdateCurrentToolboxUX */);
}


/***/ }),

/***/ "mwqp":
/*!**********************!*\
  !*** ./lib/index.js ***!
  \**********************/
/*! exports provided: Toolbox, ToolboxFullBleed, LessText */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _toolbox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toolbox */ "+bKi");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Toolbox", function() { return _toolbox__WEBPACK_IMPORTED_MODULE_0__["Toolbox"]; });

/* harmony import */ var _toolboxFullBleed__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toolboxFullBleed */ "fX/U");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ToolboxFullBleed", function() { return _toolboxFullBleed__WEBPACK_IMPORTED_MODULE_1__["ToolboxFullBleed"]; });

/* harmony import */ var _legacy_lessText__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./legacy/lessText */ "7fMg");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LessText", function() { return _legacy_lessText__WEBPACK_IMPORTED_MODULE_2__["LessText"]; });

/**
 * @copyright Microsoft Corporation. All rights reserved.
 *
 * Canvas Toolbox modules index
 */





/***/ }),

/***/ "p2YA":
/*!********************************************************!*\
  !*** ./lib/toolboxItem/ToolboxItemBase.module.scss.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* tslint:disable */
__webpack_require__(/*! ./ToolboxItemBase.module.css */ "t5nO");
var styles = {
    item: 'ag_i_08a7513e',
    flexBox: 'ah_i_08a7513e',
    icon: 'ai_i_08a7513e',
    disabled: 'aj_i_08a7513e',
    title: 'ak_i_08a7513e'
};
/* harmony default export */ __webpack_exports__["default"] = (styles);
/* tslint:enable */ 


/***/ }),

/***/ "qd0H":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/css-loader@3.2.1_webpack@4.44.2/node_modules/css-loader/dist/cjs.js!/agent/_work/1/s/common/temp/node_modules/.pnpm/postcss-loader@3.0.0/node_modules/postcss-loader/src??postcss!./lib/toolboxItem/ToolboxItemFullBleed.module.css ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../common/temp/node_modules/.pnpm/css-loader@3.2.1_webpack@4.44.2/node_modules/css-loader/dist/runtime/api.js */ "5ADk")(false);
// Module
exports.push([module.i, ".ag_j_08a7513e{width:120px;height:88px}.ai_j_08a7513e{font-size:28px;line-height:48px}.ak_j_08a7513e{font-size:13px}", ""]);


/***/ }),

/***/ "t5nO":
/*!****************************************************!*\
  !*** ./lib/toolboxItem/ToolboxItemBase.module.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../../common/temp/node_modules/.pnpm/css-loader@3.2.1_webpack@4.44.2/node_modules/css-loader/dist/cjs.js!../../../../common/temp/node_modules/.pnpm/postcss-loader@3.0.0/node_modules/postcss-loader/src??postcss!./ToolboxItemBase.module.css */ "M/ds");
var loader = __webpack_require__(/*! @microsoft/load-themed-styles */ "jOlS");

if(typeof content === "string") content = [[module.i, content]];

// add the styles to the DOM
for (var i = 0; i < content.length; i++) loader.loadStyles(content[i][1], true);

if(content.locals) module.exports = content.locals;

/***/ }),

/***/ "tluz":
/*!*************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/css-loader@3.2.1_webpack@4.44.2/node_modules/css-loader/dist/cjs.js!/agent/_work/1/s/common/temp/node_modules/.pnpm/postcss-loader@3.0.0/node_modules/postcss-loader/src??postcss!./lib/toolboxAnimation/animation.module.css ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../common/temp/node_modules/.pnpm/css-loader@3.2.1_webpack@4.44.2/node_modules/css-loader/dist/runtime/api.js */ "5ADk")(false);
// Module
exports.push([module.i, "@keyframes m_e_08a7513e{0%{height:30px}to{height:380px}}@keyframes o_e_08a7513e{0%{height:30px;transform:translate(-50%,300px)}to{height:380px;transform:translate(-50%)}}@keyframes p_e_08a7513e{0%{height:30px;transform:translate(50%,300px)}to{height:380px;transform:translate(50%)}}@keyframes q_e_08a7513e{0%{transform:scale(.2)}to{transform:scale(1)}}@keyframes r_e_08a7513e{0%{width:1024px;height:712px}to{width:292px;height:380px}}@keyframes s_e_08a7513e{0%{width:1024px;height:712px}to{width:485px;height:380px}}.k_e_08a7513e.l_e_08a7513e{animation:m_e_08a7513e .3s}[dir=ltr] .k_e_08a7513e.n_e_08a7513e{animation:o_e_08a7513e .3s}[dir=rtl] .k_e_08a7513e.n_e_08a7513e{animation:p_e_08a7513e .3s}.q_e_08a7513e{animation:q_e_08a7513e .3s;overflow:hidden}.r_e_08a7513e{animation:r_e_08a7513e .3s}.s_e_08a7513e{animation:s_e_08a7513e .3s}", ""]);


/***/ }),

/***/ "ut3N":
/*!********************************************!*\
  !*** external "@microsoft/sp-diagnostics" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_ut3N__;

/***/ }),

/***/ "w9Y/":
/*!***********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/css-loader@3.2.1_webpack@4.44.2/node_modules/css-loader/dist/cjs.js!/agent/_work/1/s/common/temp/node_modules/.pnpm/postcss-loader@3.0.0/node_modules/postcss-loader/src??postcss!./lib/legacy/lessText/LessText.module.css ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../common/temp/node_modules/.pnpm/css-loader@3.2.1_webpack@4.44.2/node_modules/css-loader/dist/runtime/api.js */ "5ADk")(false);
// Module
exports.push([module.i, ".a_a_08a7513e{word-wrap:break-word!important}", ""]);


/***/ }),

/***/ "y88i":
/*!********************************************!*\
  !*** external "@ms/odsp-utilities-bundle" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_y88i__;

/***/ }),

/***/ "yHX3":
/*!*************************************************!*\
  !*** ./lib/legacy/lessText/LessText.module.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../../../common/temp/node_modules/.pnpm/css-loader@3.2.1_webpack@4.44.2/node_modules/css-loader/dist/cjs.js!../../../../../common/temp/node_modules/.pnpm/postcss-loader@3.0.0/node_modules/postcss-loader/src??postcss!./LessText.module.css */ "w9Y/");
var loader = __webpack_require__(/*! @microsoft/load-themed-styles */ "jOlS");

if(typeof content === "string") content = [[module.i, content]];

// add the styles to the DOM
for (var i = 0; i < content.length; i++) loader.loadStyles(content[i][1], true);

if(content.locals) module.exports = content.locals;

/***/ })

/******/ })});;
//# sourceMappingURL=sp-toolbox_[locale].js.map