define("85093aa7-8c12-4683-91aa-47cd5e2654db_2.5.0", ["tslib","@ms/sp-telemetry","@microsoft/sp-component-base","@microsoft/sp-loader","@microsoft/office-ui-fabric-react-bundle","@microsoft/sp-lodash-subset","@microsoft/sp-core-library","@microsoft/sp-page-context","@microsoft/sp-webpart-base","react","react-dom","@ms/sp-component-utilities","@ms/sp-dragzone","@microsoft/load-themed-styles","@ms/sp-deferred-component","@ms/sp-canvas-read","@microsoft/sp-diagnostics","@ms/odsp-utilities-bundle","@ms/sp-a11y","@ms/sp-viewport-loader"], function(__WEBPACK_EXTERNAL_MODULE__17wl__, __WEBPACK_EXTERNAL_MODULE__2q6Q__, __WEBPACK_EXTERNAL_MODULE__7Awa__, __WEBPACK_EXTERNAL_MODULE_I6O9__, __WEBPACK_EXTERNAL_MODULE_KL1q__, __WEBPACK_EXTERNAL_MODULE_Pk8u__, __WEBPACK_EXTERNAL_MODULE_UWqr__, __WEBPACK_EXTERNAL_MODULE_X_PM__, __WEBPACK_EXTERNAL_MODULE_br4S__, __WEBPACK_EXTERNAL_MODULE_cDcd__, __WEBPACK_EXTERNAL_MODULE_faye__, __WEBPACK_EXTERNAL_MODULE_hiL___, __WEBPACK_EXTERNAL_MODULE_iiHs__, __WEBPACK_EXTERNAL_MODULE_jOlS__, __WEBPACK_EXTERNAL_MODULE_qjmy__, __WEBPACK_EXTERNAL_MODULE_sSDQ__, __WEBPACK_EXTERNAL_MODULE_ut3N__, __WEBPACK_EXTERNAL_MODULE_y88i__, __WEBPACK_EXTERNAL_MODULE_ytfe__, __WEBPACK_EXTERNAL_MODULE_ywDL__) { return /******/ (function(modules) { // webpackBootstrap
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
/******/ 		var component_0 = { // @ms/content-handler
/******/ 			i: "dd6f4302-b840-4db3-919d-e8bcba06daaa",
/******/ 			v: "0.1.0",
/******/ 			m: "/qUZ"
/******/ 		};
/******/ 		var component_1 = { // @microsoft/sp-http
/******/ 			i: "c07208f0-ea3b-4c1a-9965-ac1b825211a6",
/******/ 			v: "1.12.1",
/******/ 			m: "vlQI"
/******/ 		};
/******/ 		var component_2 = { // @ms/sp-rte
/******/ 			i: "8404d628-4817-4b3a-883e-1c5a4d07892e",
/******/ 			v: "1.11.0",
/******/ 			m: "RcaI"
/******/ 		};
/******/ 		var component_3 = { // @ms/uifabric-styling-bundle
/******/ 			i: "17ce0976-e69a-4355-be84-89b69a74717d",
/******/ 			v: "0.1.0",
/******/ 			m: "fglE"
/******/ 		};
/******/
/******/ 		return {"sp-canvas-edit": [component_0, component_1, component_2],"vendors~sp-canvas-narrow-dialog": [component_3],"vendors~sp-rte-propertypane": [component_3],"sp-rte-propertypane": [component_2]}[chunkId] || [];
/******/ 	}
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"sp-canvas": 0
/******/ 	};
/******/
/******/
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "chunk." + ({"sp-canvas-dash-card":"sp-canvas-dash-card","sp-canvas-edit":"sp-canvas-edit","vendors~sp-canvas-diff":"vendors~sp-canvas-diff","sp-canvas-diff":"sp-canvas-diff","vendors~sp-canvas-narrow-dialog":"vendors~sp-canvas-narrow-dialog","sp-canvas-narrow-dialog":"sp-canvas-narrow-dialog","vendors~sp-rte-propertypane":"vendors~sp-rte-propertypane","sp-rte-propertypane":"sp-rte-propertypane"}[chunkId]||chunkId) + "_" + (["en-us","none"])[{"sp-canvas-dash-card":0,"sp-canvas-edit":0,"sp-canvas-diff":0,"sp-canvas-narrow-dialog":0,"sp-rte-propertypane":0,"vendors~sp-canvas-diff":1,"vendors~sp-canvas-narrow-dialog":1,"vendors~sp-rte-propertypane":1}[chunkId]] + ".js"
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
/******/ 	var jsonpArray = window["webpackJsonp_85093aa7_8c12_4683_91aa_47cd5e2654db_2_5_0"] = window["webpackJsonp_85093aa7_8c12_4683_91aa_47cd5e2654db_2_5_0"] || [];
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
/******/ 	  var regex = (typeof spScriptNamePattern !== 'undefined') ? spScriptNamePattern : /sp-canvas_en-us\.js/i;
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

/***/ "+zV1":
/*!*******************************************!*\
  !*** ./lib/sp-canvas/common/Constants.js ***!
  \*******************************************/
/*! exports provided: WIKI_TITLE, PageLayoutName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WIKI_TITLE", function() { return WIKI_TITLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageLayoutName", function() { return PageLayoutName; });
/**
 * Wiki Title to be appended as query string to wiki links url
 * @internal
 */
// NOTE: when updating WIKI_TITLE, update all occurences across the repo
// tslint:disable-next-line: export-name
var WIKI_TITLE = 'wikiTitle';
// tslint:disable-next-line:typedef variable-name
var PageLayoutName = {
    Dashboard: 'Dashboard'
};


/***/ }),

/***/ "0/FH":
/*!******************************************************************!*\
  !*** ./lib/sp-canvas/canvas/canvasSection/EmptyCanvasSection.js ***!
  \******************************************************************/
/*! exports provided: EmptyCanvasSection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmptyCanvasSection", function() { return EmptyCanvasSection; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @microsoft/office-ui-fabric-react-bundle */ "KL1q");
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ms/odsp-utilities-bundle */ "y88i");
/* harmony import */ var _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _editChunk__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../editChunk */ "9s5w");
/* harmony import */ var _CanvasSection_resx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./CanvasSection.resx */ "PPgh");
var _CanvasSection_resx__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./CanvasSection.resx */ "PPgh", 1);
/* harmony import */ var _CanvasSection_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./CanvasSection.scss */ "v3Ow");
/**
 * @file EmptyCanvasSection.tsx
 * @copyright (c) Microsoft Corporation. All rights reserved.
 */







var EmptyCanvasSection = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(EmptyCanvasSection, _super);
    function EmptyCanvasSection() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EmptyCanvasSection.prototype.render = function () {
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: Object(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_2__["css"])('CanvasSection', 'CanvasSection-sm12', 'CanvasSection-col', 'CanvasSection--edit'), "data-automation-id": 'CanvasSection' },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_editChunk__WEBPACK_IMPORTED_MODULE_4__["DeferredCanvasToolboxHint"], { ariaLabel: _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_3__["StringHelper"].format(_CanvasSection_resx__WEBPACK_IMPORTED_MODULE_5__["ToolboxHintTitleWithLayout"], _CanvasSection_resx__WEBPACK_IMPORTED_MODULE_5__["ToolboxHintColumnOne"]), type: 2 /* Section */, layout: this.props.hintLayout, theme: this.props.theme, store: this.props.store })));
    };
    EmptyCanvasSection = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_2__["customizable"])('EmptyCanvasSection', ['theme'])
    ], EmptyCanvasSection);
    return EmptyCanvasSection;
}(react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]));



/***/ }),

/***/ "17t3":
/*!**********************************************!*\
  !*** ./lib/sp-canvas/common/KillSwitches.js ***!
  \**********************************************/
/*! exports provided: KillSwitches, logEngagementKSActivated, onlyAllowOneImageInFullWidthKSActivated, isOverrideEscWhenTopicPickerOpenKSActivated, isFixImageDropInRTE, fixWebPartAccessibleLabelKSActivated, myTopicsInNormalSiteKSActivated, isFixFullWidthSpacingKsActivated, hideEmptyInlineWebPartContainerKSActivated, shouldDeprecateViewPortManagerInSpCanvas, isWorkaroundChoiceGroupA11yKsActivated, fixCheckKnowledgeCenterIssueKSActivated */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KillSwitches", function() { return KillSwitches; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logEngagementKSActivated", function() { return logEngagementKSActivated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onlyAllowOneImageInFullWidthKSActivated", function() { return onlyAllowOneImageInFullWidthKSActivated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isOverrideEscWhenTopicPickerOpenKSActivated", function() { return isOverrideEscWhenTopicPickerOpenKSActivated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFixImageDropInRTE", function() { return isFixImageDropInRTE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fixWebPartAccessibleLabelKSActivated", function() { return fixWebPartAccessibleLabelKSActivated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "myTopicsInNormalSiteKSActivated", function() { return myTopicsInNormalSiteKSActivated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFixFullWidthSpacingKsActivated", function() { return isFixFullWidthSpacingKsActivated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hideEmptyInlineWebPartContainerKSActivated", function() { return hideEmptyInlineWebPartContainerKSActivated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shouldDeprecateViewPortManagerInSpCanvas", function() { return shouldDeprecateViewPortManagerInSpCanvas; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isWorkaroundChoiceGroupA11yKsActivated", function() { return isWorkaroundChoiceGroupA11yKsActivated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fixCheckKnowledgeCenterIssueKSActivated", function() { return fixCheckKnowledgeCenterIssueKSActivated; });
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ms/sp-component-utilities */ "hiL/");
/* harmony import */ var _ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Flights__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Flights */ "qRiB");



var KillSwitches = /** @class */ (function () {
    function KillSwitches() {
    }
    KillSwitches.rteEveryWhereExperiment = new _ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_1__["KillSwitch"]('63c932a3-1e02-4b8d-aa6a-02c79db580e5' /* '05/14/2020', RTE everywhere experiment protection */);
    KillSwitches.topicCustomStringsActivityLog = new _ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_1__["KillSwitch"]('5131453e-271e-4f2c-ac96-d27a4ee37779' /* '07/02/2020', 'Activity log custom strings for topic webpart diffs' */);
    return KillSwitches;
}());

function logEngagementKSActivated() {
    return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPKillSwitch"].isActivated('03217f8e-6d58-4b56-99e7-7e5755c1dfaf'
    /* '07/20/2020', 'Log engagement for content handler' */
    );
}
function onlyAllowOneImageInFullWidthKSActivated() {
    return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPKillSwitch"].isActivated('9262ac4b-df34-4160-98e9-428c68e71adf'
    /* '09/08/2020', 'Only allow one image drop for full-width section' */
    );
}
function isOverrideEscWhenTopicPickerOpenKSActivated() {
    return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPKillSwitch"].isActivated('af6e0d59-2487-4d22-a6bf-ef48c077d507'
    /* '09/08/2020', 'Keep focus in Editor when topicPicker has been open' */
    );
}
function isFixImageDropInRTE() {
    return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPKillSwitch"].isActivated('1b59448e-a211-4ec3-a287-5f0012cab1aa'
    /* '09/17/2020', 'Fix image drop in RTE' */
    );
}
function fixWebPartAccessibleLabelKSActivated() {
    return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPKillSwitch"].isActivated('4b9543c0-3777-4428-9ea2-9d90a4e8a0f8'
    /* '10/15/2020', 'Remove redundant toolbox description' */
    );
}
function myTopicsInNormalSiteKSActivated() {
    return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPKillSwitch"].isActivated('6c8dd8dd-c33a-42de-97fd-0700e86d13fa'
    /* '11/03/2020', 'Show my topics in toolbox on normal sites' */
    );
}
function isFixFullWidthSpacingKsActivated() {
    return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPKillSwitch"].isActivated('a02e63a6-af30-4b9f-a8d1-f2cf4860a04a'
    /* '11/19/2020', 'Fix spacing for full-width webpart' */
    );
}
function hideEmptyInlineWebPartContainerKSActivated() {
    return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPKillSwitch"].isActivated('d8327ed5-fab1-4802-ac80-14174d692d72' /* '12/01/2020',
    'Alter RTE display HTML for inline images' */);
}
function shouldDeprecateViewPortManagerInSpCanvas() {
    return (_Flights__WEBPACK_IMPORTED_MODULE_2__["Flights"].isCanvasReadOnlyEnabled() &&
        !_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPKillSwitch"].isActivated('ad4e1a1f-40b5-4fc0-b5af-3f695f765322'
        /* '2020-12-15', 'DeprecateViewPortManagerInSpCanvas' */
        ));
}
function isWorkaroundChoiceGroupA11yKsActivated() {
    return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPKillSwitch"].isActivated('906e6df9-9b7e-4f4a-8a94-73a6b45c9bfc'
    /* '01/15/2021', 'Workaround Narrator issue skipping choice group options' */
    );
}
function fixCheckKnowledgeCenterIssueKSActivated() {
    return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPKillSwitch"].isActivated('07f472a5-b4da-4711-a130-562fa1f746bf' /* '01/14/2021', 'Fix the logic of checking knowledge center' */);
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

/***/ "2q6Q":
/*!***********************************!*\
  !*** external "@ms/sp-telemetry" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__2q6Q__;

/***/ }),

/***/ "4Mut":
/*!***********************************************************************!*\
  !*** ./lib/sp-canvas/canvas/canvasLayout/undefinedControlPosition.js ***!
  \***********************************************************************/
/*! exports provided: undefinedControlPosition */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "undefinedControlPosition", function() { return undefinedControlPosition; });
var undefinedControlPosition = {
    zoneIndex: undefined,
    sectionIndex: undefined,
    controlIndex: undefined,
    layoutIndex: undefined
};


/***/ }),

/***/ "4Tcc":
/*!***************************************************!*\
  !*** ./lib/sp-canvas/canvas/webPartZone/index.js ***!
  \***************************************************/
/*! exports provided: WebPartZone */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _WebPartZone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./WebPartZone */ "EZnn");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WebPartZone", function() { return _WebPartZone__WEBPACK_IMPORTED_MODULE_0__["WebPartZone"]; });




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

/***/ "5Nkd":
/*!*************************************************************!*\
  !*** ./lib/sp-canvas/canvas/canvasSection/CanvasSection.js ***!
  \*************************************************************/
/*! exports provided: CanvasSection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanvasSection", function() { return CanvasSection; });
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
/* harmony import */ var _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ms/odsp-utilities-bundle */ "y88i");
/* harmony import */ var _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ms_sp_canvas_read__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ms/sp-canvas-read */ "sSDQ");
/* harmony import */ var _ms_sp_canvas_read__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_ms_sp_canvas_read__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _editChunk__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../editChunk */ "9s5w");
/* harmony import */ var _canvasLayout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../canvasLayout */ "yPt8");
/* harmony import */ var _controlZone__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../controlZone */ "QfGm");
/* harmony import */ var _canvasControl_CanvasControlFactory__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../canvasControl/CanvasControlFactory */ "aYeN");
/* harmony import */ var _CanvasSection_resx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./CanvasSection.resx */ "PPgh");
var _CanvasSection_resx__WEBPACK_IMPORTED_MODULE_11___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./CanvasSection.resx */ "PPgh", 1);
/* harmony import */ var _loc_CanvasStrings_resx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../loc/CanvasStrings.resx */ "indE");
var _loc_CanvasStrings_resx__WEBPACK_IMPORTED_MODULE_12___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../loc/CanvasStrings.resx */ "indE", 1);
/* harmony import */ var _CanvasSection_scss__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./CanvasSection.scss */ "v3Ow");
/* harmony import */ var _common_CanvasExperiments__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../common/CanvasExperiments */ "CXHJ");
/* harmony import */ var _common_Flights__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../common/Flights */ "qRiB");
/**
 * @file CanvasSectionComponent.tsx
 * @copyright (c) Microsoft Corporation. All rights reserved.
 */
















var TOOLBAR_DISTANCE = 8;
/**
 * Represents a Section layout component
 */
var CanvasSection = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(CanvasSection, _super);
    function CanvasSection() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._controlComponents = [];
        return _this;
    }
    CanvasSection._createEmptyControlLayout = function (zoneIndex, sectionIndex, controlIndex, layoutIndex, sectionFactor) {
        return {
            zoneIndex: zoneIndex,
            sectionIndex: sectionIndex,
            controlIndex: controlIndex,
            layoutIndex: layoutIndex,
            sectionFactor: sectionFactor
        };
    };
    CanvasSection.prototype.render = function () {
        var _this = this;
        var store = this.props.store;
        var displayMode = store.displayMode;
        var _a = this.props, emphasisTheme = _a.emphasisTheme, section = _a.section, selectedPosition = _a.selectedPosition, theme = _a.theme, zoneIndex = _a.zoneIndex;
        var isReadMode = displayMode === _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_3__["DisplayMode"].Read;
        var isSectionSelected = selectedPosition.zoneIndex === zoneIndex && selectedPosition.sectionIndex === section.index;
        isSectionSelected = isSectionSelected && selectedPosition.layoutIndex === this.props.layoutIndex;
        // Iterate through the controls and create control zone components
        var controls = section.controls;
        var numControls = controls.length;
        this._controlComponents = [];
        controls.forEach(function (curCtrl, curIdx) {
            var _a;
            var _b;
            var control = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, curCtrl), { emphasisTheme: emphasisTheme,
                theme: theme });
            var isControlSelected = isSectionSelected && selectedPosition.controlIndex === control.position.controlIndex;
            var shouldAddControl = true;
            if (_common_CanvasExperiments__WEBPACK_IMPORTED_MODULE_14__["Experiments"].isRTEClickAnywhereExperimentEnabled() &&
                isReadMode &&
                control.controlType === _ms_sp_canvas_read__WEBPACK_IMPORTED_MODULE_6__["CanvasControlType"].RTE &&
                control.innerHTML === CanvasSection._EMPTY_RTE_HTML) {
                shouldAddControl = false;
            }
            if (_common_Flights__WEBPACK_IMPORTED_MODULE_15__["Flights"].isInlineImageEnabled() &&
                control.controlType === _ms_sp_canvas_read__WEBPACK_IMPORTED_MODULE_6__["CanvasControlType"].WebPartZone &&
                control.rteInstanceId) {
                shouldAddControl = false;
            }
            var hideEditButton;
            var hideMoveButton;
            hideEditButton = control.controlType !== _ms_sp_canvas_read__WEBPACK_IMPORTED_MODULE_6__["CanvasControlType"].WebPartZone;
            hideMoveButton = false;
            var fixedPosition;
            if (control.controlType === _ms_sp_canvas_read__WEBPACK_IMPORTED_MODULE_6__["CanvasControlType"].WebPartZone &&
                ((_b = control.position) === null || _b === void 0 ? void 0 : _b.sectionFactor) === 0 // 0 means this is a full bleed control
            ) {
                fixedPosition = (_a = {
                        top: TOOLBAR_DISTANCE
                    },
                    _a[Object(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_2__["getRTL"])() ? 'right' : 'left'] = TOOLBAR_DISTANCE,
                    _a);
            }
            if (shouldAddControl) {
                _this._controlComponents.push(react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_controlZone__WEBPACK_IMPORTED_MODULE_9__["ControlZone"], { displayMode: displayMode, emphasisTheme: emphasisTheme, isSelected: isControlSelected, controlDiff: _this._getControlDiff(control), key: control.id, theme: theme, control: control, store: store },
                    _canvasControl_CanvasControlFactory__WEBPACK_IMPORTED_MODULE_10__["CanvasControlFactory"].CreateCanvasControl(control, store),
                    displayMode === _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_3__["DisplayMode"].Edit && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_editChunk__WEBPACK_IMPORTED_MODULE_7__["DeferredToolbar"], { directionalHint: !Object(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_2__["getRTL"])() ? _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_2__["DirectionalHint"].rightCenter : _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_2__["DirectionalHint"].leftCenter, configurationButton: hideEditButton
                            ? undefined
                            : {
                                onClick: function () {
                                    store.getEditModule('actions').handleConfigureButtonClicked(control.id);
                                },
                                title: _CanvasSection_resx__WEBPACK_IMPORTED_MODULE_11__["WebpartToolbarConfigButtonTitle"],
                                fabricIconKey: ''
                            }, moveButton: hideMoveButton
                            ? undefined
                            : {
                                title: _CanvasSection_resx__WEBPACK_IMPORTED_MODULE_11__["WebpartToolbarMoveButtonTitle"],
                                dragHandleTag: _editChunk__WEBPACK_IMPORTED_MODULE_7__["CanvasDragZoneConstants"].webPartButtonDragHandleTag
                            }, duplicateButton: {
                            onClick: function () {
                                return store.getEditModule('actions').handleDuplicateControlButtonClicked(control.id);
                            },
                            title: _loc_CanvasStrings_resx__WEBPACK_IMPORTED_MODULE_12__["ToolbarDuplicateWebPartTitle"]
                        }, deleteButton: {
                            onClick: function () {
                                return store.getEditModule('actions').handleDeleteControlButtonClicked(control.position);
                            },
                            title: _CanvasSection_resx__WEBPACK_IMPORTED_MODULE_11__["WebpartToolbarDeleteButtonTitle"]
                        }, fixedPosition: fixedPosition }))));
                var nextControlIndex = curIdx + 1 === numControls
                    ? // This is the last control, create a new control by incrementing the index
                        control.position.controlIndex + 1 // Todo#661360 Fix workaround left-over
                    : // Get the next section index
                        controls[curIdx + 1].position.controlIndex;
                var nextCtrlPosition = CanvasSection._createEmptyControlLayout(control.position.zoneIndex, control.position.sectionIndex, nextControlIndex, control.position.layoutIndex, control.position.sectionFactor);
                _this._addToolBoxHint(nextCtrlPosition);
            }
        });
        this._firstControlIdx =
            controls.length > 0 ? controls[0].position.controlIndex : _canvasLayout__WEBPACK_IMPORTED_MODULE_8__["CanvasLayout"].firstLayoutIndex;
        var firstControlLayout = {
            zoneIndex: zoneIndex,
            sectionIndex: section.index,
            controlIndex: this._firstControlIdx,
            sectionFactor: section.factor,
            // This will set the layout index on the first toolbox hint which passes it to toolboxProps
            layoutIndex: this.props.layoutIndex
        };
        var layoutSectionClassName = this._getLayoutSectionClassName(isReadMode, isSectionSelected);
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: layoutSectionClassName, "data-automation-id": 'CanvasSection', "data-drag-tag": _editChunk__WEBPACK_IMPORTED_MODULE_7__["CanvasDragZoneConstants"].sectionDragTag, "data-drag-disallowed-area-tag": this._dragDisallowedAreaTag, "data-negative-space": true },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { "data-sp-fre-id": 'sp-fre-canvas-4', "data-offset-left": 'calc(50% - 12px)', "data-offset-top": '-24px' }),
            this._getContentSelectionMechanism(firstControlLayout),
            this._controlComponents));
    };
    CanvasSection.prototype._addToolBoxHint = function (nextCtrlPosition) {
        this._controlComponents.push(react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_editChunk__WEBPACK_IMPORTED_MODULE_7__["DeferredCanvasToolboxHint"], { ariaLabel: this._getToolboxHintAccessibleTitle(), layout: nextCtrlPosition, key: "hint." + nextCtrlPosition.controlIndex, type: 2 /* Section */, theme: this.props.emphasisTheme, store: this.props.store }));
    };
    CanvasSection.prototype._getLayoutSectionClassName = function (isReadMode, isSectionSelected) {
        var layoutSectionClassName = Object(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_2__["css"])('CanvasSection', 'CanvasSection-col', 'CanvasSection-sm12', "CanvasSection-xl" + (this.props.section.factor || 12), {
            'CanvasSection--edit': !isReadMode,
            'CanvasSection--read': isReadMode,
            'CanvasSection--selected': isSectionSelected,
            'CanvasSection--reflow': !!this.props.shouldResize
        });
        return layoutSectionClassName;
    };
    CanvasSection.prototype._shouldCenterAlignHint = function () {
        return false;
    };
    CanvasSection.prototype._getContentSelectionMechanism = function (firstControlLayout) {
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_editChunk__WEBPACK_IMPORTED_MODULE_7__["DeferredCanvasToolboxHint"], { ariaLabel: this._getToolboxHintAccessibleTitle(), layout: firstControlLayout, type: 2 /* Section */, theme: this.props.emphasisTheme, store: this.props.store }));
    };
    Object.defineProperty(CanvasSection.prototype, "_dragDisallowedAreaTag", {
        get: function () {
            return undefined;
        },
        enumerable: true,
        configurable: true
    });
    CanvasSection.prototype._getToolboxHintAccessibleTitle = function () {
        var section = this.props.section;
        var columnNo = '';
        try {
            switch (section.index) {
                case 1:
                    columnNo = _CanvasSection_resx__WEBPACK_IMPORTED_MODULE_11__["ToolboxHintColumnOne"];
                    break;
                case 2:
                    columnNo = _CanvasSection_resx__WEBPACK_IMPORTED_MODULE_11__["ToolboxHintColumnTwo"];
                    break;
                case 3:
                    columnNo = _CanvasSection_resx__WEBPACK_IMPORTED_MODULE_11__["ToolboxHintColumnThree"];
                    break;
                default:
                    throw 'Unexpected Error';
            }
        }
        catch (err) {
            _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_4__["_TraceLogger"].logError(CanvasSection._logSource, err, "Canvas section has undefined index");
        }
        return _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_5__["StringHelper"].format(_CanvasSection_resx__WEBPACK_IMPORTED_MODULE_11__["ToolboxHintTitleWithLayout"], columnNo);
    };
    CanvasSection.prototype._getControlDiff = function (control) {
        var _a;
        return (_a = this.props.store.canvasFields.controlDiffMap) === null || _a === void 0 ? void 0 : _a.get(control.id);
    };
    CanvasSection._logSource = _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_4__["_LogSource"].create('CanvasSection');
    CanvasSection._EMPTY_RTE_HTML = '<p><br></p>';
    return CanvasSection;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));



/***/ }),

/***/ "5WXc":
/*!***********************************************************************!*\
  !*** ./lib/sp-canvas/canvas/canvasAnimations/CanvasRevealObserver.js ***!
  \***********************************************************************/
/*! exports provided: CanvasRevealObserver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanvasRevealObserver", function() { return CanvasRevealObserver; });
/* harmony import */ var _microsoft_sp_webpart_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/sp-webpart-base */ "br4S");
/* harmony import */ var _microsoft_sp_webpart_base__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_webpart_base__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__);


/**
 * The CanvasRevealObserver observes any registered target elements and will invoke a callback when any part
 * of the target element "reveals" itself in the scrollable region of the Canvas.
 */
var CanvasRevealObserver = /** @class */ (function () {
    function CanvasRevealObserver() {
        var _this = this;
        this._observerCallback = function (entries) {
            entries.forEach(function (entry) {
                // A positive intersectionRatio indicates some portion of the target is overlapping the observer's root
                if (entry.intersectionRatio) {
                    var callback = _this._callbackMap.get(entry.target);
                    if (callback) {
                        callback(entry, _this);
                    }
                }
            });
        };
        this._observer = new IntersectionObserver(this._observerCallback, { threshold: [0, 0.01] });
        this._callbackMap = new Map();
    }
    CanvasRevealObserver.isAvailable = function () {
        if (CanvasRevealObserver._isAvailable === undefined) {
            CanvasRevealObserver._isAvailable = Boolean(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["EnvironmentType"].ClassicSharePoint !== _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["Environment"].type &&
                _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["EnvironmentType"].Local !== _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["Environment"].type &&
                !_microsoft_sp_webpart_base__WEBPACK_IMPORTED_MODULE_0__["ClientSideWebPartManager"].isMaintenanceMode &&
                window['IntersectionObserver'] // tslint:disable-line:no-string-literal
            );
        }
        return CanvasRevealObserver._isAvailable;
    };
    CanvasRevealObserver.prototype.observe = function (target, callback) {
        this._observer.observe(target);
        this._callbackMap.set(target, callback);
    };
    CanvasRevealObserver.prototype.unobserve = function (target) {
        this._observer.unobserve(target);
        this._callbackMap.delete(target);
    };
    return CanvasRevealObserver;
}());



/***/ }),

/***/ "5Y6o":
/*!***********************************************************!*\
  !*** ./lib/sp-canvas/canvas/canvas/CanvasErrorHandler.js ***!
  \***********************************************************/
/*! exports provided: CanvasErrorHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanvasErrorHandler", function() { return CanvasErrorHandler; });
/* harmony import */ var _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ms/sp-telemetry */ "2q6Q");
/* harmony import */ var _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/sp-diagnostics */ "ut3N");
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__);


var CanvasErrorHandler = /** @class */ (function () {
    function CanvasErrorHandler() {
    }
    CanvasErrorHandler.logErrorsFromCK = function (message, filename, lineno, colno, error) {
        var eventName = 'window.onerror';
        if (filename && CanvasErrorHandler._isFromFile(filename, 'CKEDITOR')) {
            var ckMonitor = new _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_0__["_QosMonitor"]('CKEditorGlobal');
            // CK editor gets special handling because we want to monitor any issues with Edge
            CanvasErrorHandler._logErrorFromFile(message, CanvasErrorHandler._ckLogSource, lineno, colno, error, eventName);
            ckMonitor.writeUnexpectedFailure('CkeditorFailed', error);
        }
    };
    CanvasErrorHandler._isFromFile = function (filename, match) {
        return filename.length > 0 && filename.toUpperCase().indexOf(match) !== -1;
    };
    CanvasErrorHandler._logErrorFromFile = function (message, logSource, lineno, colno, error, eventName) {
        var fileError = error || new Error("Error:" + message + ", line:" + lineno + ", column:" + colno);
        _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__["_TraceLogger"].logError(logSource, fileError, eventName);
    };
    CanvasErrorHandler._ckLogSource = _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__["_LogSource"].create('CKGlobalError');
    return CanvasErrorHandler;
}());



/***/ }),

/***/ "7Awa":
/*!***********************************************!*\
  !*** external "@microsoft/sp-component-base" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__7Awa__;

/***/ }),

/***/ "7JSu":
/*!*******************************************************************************!*\
  !*** ./lib/sp-canvas/canvas/editChunk/canvasToolbox/DeferredCanvasToolbox.js ***!
  \*******************************************************************************/
/*! exports provided: DeferredCanvasToolbox, DeferredToolboxComponent, DeferredToolboxFullBleedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeferredCanvasToolbox", function() { return DeferredCanvasToolbox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeferredToolboxComponent", function() { return DeferredToolboxComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeferredToolboxFullBleedComponent", function() { return DeferredToolboxFullBleedComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _microsoft_sp_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @microsoft/sp-loader */ "I6O9");
/* harmony import */ var _microsoft_sp_loader__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_loader__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ms_sp_deferred_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ms/sp-deferred-component */ "qjmy");
/* harmony import */ var _ms_sp_deferred_component__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ms_sp_deferred_component__WEBPACK_IMPORTED_MODULE_3__);




var CANVAS_TOOLBOX_COMPONENT_ID = '5388ac31-7915-4ba6-a021-0f8808dd5784';
var DeferredCanvasToolbox = /** @class */ (function () {
    function DeferredCanvasToolbox() {
    }
    DeferredCanvasToolbox.loadModule = function () {
        if (!DeferredCanvasToolbox._loadedModule) {
            DeferredCanvasToolbox._loadedModule =  false
                ? undefined
                : _microsoft_sp_loader__WEBPACK_IMPORTED_MODULE_2__["SPComponentLoader"].loadComponentById(CANVAS_TOOLBOX_COMPONENT_ID);
        }
        return DeferredCanvasToolbox._loadedModule;
    };
    return DeferredCanvasToolbox;
}());

var DeferredToolboxComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(DeferredToolboxComponent, _super);
    function DeferredToolboxComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DeferredToolboxComponent.prototype._internalLoad = function () {
        return DeferredCanvasToolbox.loadModule().then(function (chunk) {
            return chunk.Toolbox;
        });
    };
    return DeferredToolboxComponent;
}(_ms_sp_deferred_component__WEBPACK_IMPORTED_MODULE_3__["_DeferredComponent"]));

// tslint:disable-next-line:variable-name
var DeferredToolboxFullBleed = react__WEBPACK_IMPORTED_MODULE_1__["lazy"](function () {
    return DeferredCanvasToolbox.loadModule().then(function (module) { return ({ default: module.ToolboxFullBleed }); });
});
var DeferredToolboxFullBleedComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(DeferredToolboxFullBleedComponent, _super);
    function DeferredToolboxFullBleedComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DeferredToolboxFullBleedComponent.prototype.render = function () {
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Suspense"], { fallback: false },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](DeferredToolboxFullBleed, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.props))));
    };
    return DeferredToolboxFullBleedComponent;
}(react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]));



/***/ }),

/***/ "7Sy0":
/*!***********************************************!*\
  !*** ./lib/sp-canvas/canvas/canvas/Canvas.js ***!
  \***********************************************/
/*! exports provided: Canvas */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Canvas", function() { return Canvas; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "faye");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _microsoft_sp_page_context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @microsoft/sp-page-context */ "X+PM");
/* harmony import */ var _microsoft_sp_page_context__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_page_context__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ms_sp_a11y__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ms/sp-a11y */ "ytfe");
/* harmony import */ var _ms_sp_a11y__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_ms_sp_a11y__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ms_sp_canvas_read__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ms/sp-canvas-read */ "sSDQ");
/* harmony import */ var _ms_sp_canvas_read__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_ms_sp_canvas_read__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ms/sp-telemetry */ "2q6Q");
/* harmony import */ var _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _canvasComponent__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../canvasComponent */ "j0qU");
/* harmony import */ var _canvasStore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../canvasStore */ "yRr9");
/* harmony import */ var _editChunk__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../editChunk */ "9s5w");
/* harmony import */ var _LayoutCanvas_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./LayoutCanvas.scss */ "Tpr7");
/* harmony import */ var _common_Flights__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../common/Flights */ "qRiB");
/* harmony import */ var _CanvasErrorHandler__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./CanvasErrorHandler */ "5Y6o");
/**
 * @copyright (c) Microsoft Corporation. All rights reserved.
 * Root class of canvas which initializes store and renders root react component "CanvasComponent"
 */














/**
 * SharePoint Client-side Applications can use the SharePoint Canvas to enable rich content authoring
 * as part of their experience. The SharePoint canvas provides Rich Text Editing capabilities, SharePoint
 * Client-side WebPart aggregation and hosting, and a beautiful railed design experience.
 *
 * @internal
 */
var Canvas = /** @class */ (function () {
    /**
     * Private constructor. Call instantiateCanvas() to create a new canvas control
     *
     * @param container - The host DOM container for the Canvas. When render() is invoked the Canvas will
     *   render into 'container'.
     * @param canvasOptions - The optional parameters of the Canvas.
     */
    function Canvas(container, canvasOptions) {
        var _this = this;
        this._isDisposed = false;
        this._isSuppressed = false;
        /**
         * Serialize the current contents of the Canvas as Object.
         *
         * @param reserializeAll - Indicate whether canvas should go through all of the controls to serialize.
         * If it is true, it increases runtime cost but can always get latest data of canvas when there is still some
         *  operations that have not been populated.
         * If it is false, it will return the data that has been auto-populated and serialized recently.
         *
         * @returns Serialized object of the Canvas at the time the method is invoked.
         */
        this.serializeAsObject = function (reserializeAll) {
            if (reserializeAll === void 0) { reserializeAll = false; }
            return _this._store.serializeAsObject(reserializeAll);
        };
        this._render = function (callback, isUpdatingFromUpperLevel, hasTriedReload) {
            if (callback === void 0) { callback = undefined; }
            if (isUpdatingFromUpperLevel === void 0) { isUpdatingFromUpperLevel = false; }
            if (hasTriedReload === void 0) { hasTriedReload = false; }
            if (_common_Flights__WEBPACK_IMPORTED_MODULE_12__["Flights"].isCanvasReadOnlyEnabled() && _this._isSuppressed) {
                return;
            }
            var coreElementProps = {
                store: _this._store,
                hasTriedReload: hasTriedReload
            };
            coreElementProps.cultureName = _this._pageContext.cultureInfo.currentUICultureName.toLowerCase();
            _this._store.canvasFields.isUpdatingFromUpperLevel = isUpdatingFromUpperLevel;
            var coreElement = react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_canvasComponent__WEBPACK_IMPORTED_MODULE_8__["CanvasComponent"], coreElementProps);
            react_dom__WEBPACK_IMPORTED_MODULE_2__["render"](coreElement, _this._container, function () {
                _this._store.canvasFields.isUpdatingFromUpperLevel = false;
                if (callback) {
                    callback();
                }
            });
        };
        /**
         * In most cases, CanvasComponent is directly rendered into the same DOM. This is the fallback when the
         * simple React render fails.
         */
        this._disposeAndRender = function () {
            // Unmount any existing Canvas instances
            _this._internalDispose();
            // React unmount works async, this is to make sure next render happens after the component being actually unmounted.
            setTimeout(function () {
                _this._render(undefined /* callback */, false /* isUpdatingFromUpperLevel */, true /* hasTriedReload */);
            });
        };
        this._handleWindowBlur = function (e) {
            _this._store.getEditModule('actions').handleWindowBlur(e);
        };
        this._container = container;
        // Find parent A11yManager or create one
        var a11yManager;
        if (canvasOptions.a11yManagerId) {
            a11yManager = _ms_sp_a11y__WEBPACK_IMPORTED_MODULE_5__["A11yManager"].getInstanceById(canvasOptions.a11yManagerId);
        }
        if (!a11yManager) {
            a11yManager = _ms_sp_a11y__WEBPACK_IMPORTED_MODULE_5__["A11yManager"].create(container);
        }
        this._store = new _canvasStore__WEBPACK_IMPORTED_MODULE_9__["CanvasStore"]({
            serviceScope: canvasOptions.serviceScope,
            render: this._render,
            disposeAndRender: this._disposeAndRender,
            a11yManager: a11yManager,
            mode: canvasOptions.mode,
            handleCanvasChanged: function (canvasState) {
                var handleCanvasChanged = canvasOptions.handleCanvasChanged;
                if (handleCanvasChanged) {
                    var content = _this.serializeAsObject();
                    handleCanvasChanged(content, canvasState);
                }
            },
            scrollThreshold: canvasOptions.scrollThreshold,
            shouldCenterAlign: canvasOptions.shouldCenterAlign,
            mobileBrowser: canvasOptions.mobileBrowser,
            isRootScrollableElement: canvasOptions.isRootScrollableElement,
            pageLayoutType: canvasOptions.pageLayoutType,
            isViewportLoadingDisabled: undefined,
            doesUserHaveEditPermission: canvasOptions.doesUserHaveEditPermission,
            viewportManager: canvasOptions.viewportManager,
            onCanvasComponentMounted: canvasOptions.onCanvasComponentMounted
        });
        this._pageContext = canvasOptions.serviceScope.consume(_microsoft_sp_page_context__WEBPACK_IMPORTED_MODULE_4__["PageContext"].serviceKey);
    }
    /**
     * Construct a new instance of the Canvas.
     *
     * @param container - The host DOM container for the Canvas. When render() is invoked the Canvas will
     *   render into 'container'.
     * @param canvasOptions - The optional parameters of the Canvas.
     */
    Canvas.instantiateCanvas = function (container, canvasOptions) {
        var canvas = new Canvas(container, canvasOptions);
        _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_7__["_PerformanceLogger"].setPerformanceProperty('canvasInitiated');
        Canvas._globalErrorHandler = window.onerror;
        if (canvasOptions.mode === _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_3__["DisplayMode"].Read) {
            return Promise.resolve(canvas);
        }
        else {
            return canvas._store.initializeForEditMode().then(function () { return canvas; });
        }
    };
    /**
     * Render the Canvas into its container DOM element. The Canvas will use the DisplayMode it was
     * constructed with.
     * If the Canvas has already been rendered once, the Canvas will clear its contents and then, if present,
     * use 'canvasContent' to rehydrate itself.
     *
     * @param canvasContent - Optional. The object must have been created by a previous instance of
     *   the Canvas. If absent, an empty Canvas will be rendered. If present, the Canvas will rehydrate
     *   to represent the state of the Canvas when serialized.
     * @param canvasState - Optional. The object must have been created by the current instance of the Canvas.
     *  If present, the canvas will leverage to update the state of the controls.
     */
    Canvas.prototype.render = function (displayMode, canvasContent, canvasState) {
        var _this = this;
        if (_common_Flights__WEBPACK_IMPORTED_MODULE_12__["Flights"].isCanvasReadOnlyEnabled()) {
            this._isSuppressed = false;
        }
        this._throwIfDisposed();
        var loadEditChunk;
        /**
         * @see CanvasStore.handleWindowBlur
         */
        if (displayMode === _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_3__["DisplayMode"].Edit) {
            loadEditChunk = this._store.initializeForEditMode().then(function () {
                window.addEventListener('blur', _this._handleWindowBlur, true);
                _this._addOnErrorEventHandler();
            });
        }
        if (_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_3__["_SPFlight"].isEnabled(1420 /* WEXCanvasReadOnly */)) {
            this._store.canvasFields.displayMode = displayMode;
        }
        // Clear diff type when canvas switch back to normal rendering.
        this._store.canvasFields.controlDiffMap = undefined;
        this._store.canvasFields.zoneDiffMap = undefined;
        this._store.processCanvasContent(displayMode, canvasContent || []);
        if (canvasState) {
            this._store.canvasFields.canvasState = canvasState;
            this._store.canvasFields.selectedControlIdInternal = canvasState.selectedControlId;
        }
        if (loadEditChunk) {
            return loadEditChunk.then(function () {
                return _this._render(undefined /* callback */, true /* isUpdatingFromUpperLevel */);
            });
        }
        else {
            this._render(undefined /* callback */, true /* isUpdatingFromUpperLevel */);
            this._addOnErrorEventHandler();
            return Promise.resolve();
        }
    };
    /**
     * Render a diff view given two versions of canvas content.
     *
     * @param canvasContentComparedFrom - The old version of the canvas content
     * @param canvasContentComparedTo - The new version of the canvas content
     * @param shouldRenderDiffIndicator - If it's true, it will render canvas showing the UI diff of two versions.
     *  If it's false, it will simply canvasContentComparedTo.
     * @returns - A promise of diff info which can be used to describe the detailed changes for the controls.
     */
    Canvas.prototype.renderDiff = function (canvasContentComparedFrom, canvasContentComparedTo, shouldRenderDiffIndicator) {
        var _this = this;
        if (_common_Flights__WEBPACK_IMPORTED_MODULE_12__["Flights"].isCanvasReadOnlyEnabled()) {
            this._isSuppressed = false;
        }
        this._throwIfDisposed();
        canvasContentComparedFrom = canvasContentComparedFrom.filter(_ms_sp_canvas_read__WEBPACK_IMPORTED_MODULE_6__["isWebPartOrRte"]);
        // We want to only keep RTE or web part controls when calculating the diffs to render.
        // And append the empty controls before rendering because they're necessary to correctly
        // render the position of the web part or RTE.
        var emptyControlsToRender = canvasContentComparedTo.filter(function (control) { return !Object(_ms_sp_canvas_read__WEBPACK_IMPORTED_MODULE_6__["isWebPartOrRte"])(control); });
        canvasContentComparedTo = canvasContentComparedTo.filter(_ms_sp_canvas_read__WEBPACK_IMPORTED_MODULE_6__["isWebPartOrRte"]);
        // force flag in fetchWebparts will overwrite the check for edit mode. But will not fetch again if
        // manifests have been fetched.
        return Promise.all([Object(_editChunk__WEBPACK_IMPORTED_MODULE_10__["canvasDiffLoader"])(), this.fetchWebparts(true /* force */)]).then(function (_a) {
            var diffModules = _a[0];
            var controlDiffInfo = diffModules.getControlDiffInfo(canvasContentComparedFrom, canvasContentComparedTo, _canvasStore__WEBPACK_IMPORTED_MODULE_9__["CanvasStoreCommonActions"].getManifestMap(_this._store.canvasFields), _this._pageContext.cultureInfo.currentUICultureName.toLowerCase());
            var zoneDiffInfo = diffModules.getZoneDiffInfo(canvasContentComparedFrom, canvasContentComparedTo);
            if (shouldRenderDiffIndicator) {
                var canvasContentToRender = diffModules
                    .getCanvasContentToRender(canvasContentComparedFrom, canvasContentComparedTo, controlDiffInfo)
                    .concat(emptyControlsToRender);
                _this._store.canvasFields.controlDiffMap = diffModules.convertControlDiffToMap(controlDiffInfo);
                _this._store.canvasFields.zoneDiffMap = diffModules.convertZoneDiffToMap(zoneDiffInfo);
                _this._store.processCanvasContent(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_3__["DisplayMode"].Read, canvasContentToRender);
                _this._render();
            }
            else {
                // Trigger render without chaining the promises because the returned value of `renderDiff` only cares
                // about the diff info.
                void _this.render(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_3__["DisplayMode"].Read, canvasContentComparedTo.concat(emptyControlsToRender));
            }
            return diffModules.sortDiffs(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(zoneDiffInfo, controlDiffInfo));
        });
    };
    /**
     * Scroll to the canvas control given the instance id.
     * @param instanceId - The instance id of the canvas control to be scrolled to.
     * @returns - Whether the scroll is succeed
     *  true if the control exists and can be scrolled or false if the control doesn't exists or cannot be scrolled.
     */
    Canvas.prototype.scrollControlIntoView = function (instanceId, options) {
        this._throwIfDisposed();
        var canvasFields = this._store.canvasFields;
        var targetControl = canvasFields.controlComponentMap
            ? this._store.canvasFields.controlComponentMap.get(instanceId)
            : undefined;
        if (!targetControl) {
            return false;
        }
        return targetControl.scrollIntoView(options);
    };
    Object.defineProperty(Canvas.prototype, "count", {
        /**
         * @returns The number of controls in the Canvas.
         */
        get: function () {
            return this._store.controlsProps.length;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Canvas.prototype, "previewImageUrl", {
        /**
         * Get the preview image url generated from webpart manager if it is available.
         * The preview image is the first preview image provided by a webpart
         *
         * @returns the URL of the preview image
         */
        get: function () {
            return this._store.tryGeneratePreviewImageUrl();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Canvas.prototype, "displayMode", {
        /**
         * Get the Canvas  DisplayMode.
         *
         * @returns The DisplayMode of the Canvas
         */
        get: function () {
            return this._store.displayMode;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Re-render the Canvas in a new DisplayMode.
     *
     * @param newMode - The desired DisplayMode of the Canvas
     */
    Canvas.prototype.setDisplayMode = function (newMode) {
        var _this = this;
        this._throwIfDisposed();
        if (this._store.canvasFields.displayMode === newMode) {
            return Promise.resolve();
        }
        var qos = this._store.createQosScope('setDisplayMode');
        this._store.canvasFields.isUpdatingFromUpperLevel = true;
        return this._store
            .setDisplayMode(newMode)
            .then(function () {
            _this._store.canvasFields.isUpdatingFromUpperLevel = false;
            qos.writeSuccess();
        })
            .catch(function (error) {
            _this._store.canvasFields.isUpdatingFromUpperLevel = false;
            qos.writeUnexpectedFailure(undefined, error);
            return Promise.reject(error);
        });
    };
    /**
     * Unmount the Canvas from the container it was constructed with.
     */
    Canvas.prototype.dispose = function () {
        this._internalDispose();
        this._store.dispose();
        this._isDisposed = true;
    };
    /**
     * If the Canvas is in DisplayMode.Edit, asynchronously fetch web part manifests in the background. If the Canvas is
     *  not in DisplayMode.Edit, fetch can be forced.
     */
    Canvas.prototype.fetchWebparts = function (force) {
        return this._store.fetchWebParts(force);
    };
    /**
     * Prepare canvas for new page content when page transition starts.
     */
    Canvas.prototype.onPageTransition = function () {
        this._store.onPageTransition();
    };
    /**
     * Update canvas to be ready when page transition ends.
     */
    Canvas.prototype.onPageTransitioned = function () {
        this._store.onPageTransitioned();
    };
    /**
     * Suppress the canvas to render by itself until the public render API is invoked.
     * When sp-canvas-read is rendered, we're not disposing everything in sp-canvas because of historical reasons we
     * are not confident to say the dispose will clean up everything without leaving holes for memory leak.
     * Instead, we call `suppress` to avoid this old sp-canvas re-render by itself via calling `_render` internally.
     * If the public `render` method is called, it will be unsuppressed.
     *
     * This is temporary workaround before we land on sp-canvas-edit to surface the edit mode capability by reusing sp-canvas-read.
     * See VSO#921361 Re-implement sp-canvas-edit based on dependency injection on top of sp-canvas-read
     */
    Canvas.prototype.suppress = function () {
        if (_common_Flights__WEBPACK_IMPORTED_MODULE_12__["Flights"].isCanvasReadOnlyEnabled()) {
            this._isSuppressed = true;
        }
    };
    Canvas.prototype._throwIfDisposed = function () {
        if (this._isDisposed) {
            throw new Error('Canvas has been disposed');
        }
    };
    Canvas.prototype._internalDispose = function () {
        window.removeEventListener('blur', this._handleWindowBlur, true);
        react_dom__WEBPACK_IMPORTED_MODULE_2__["unmountComponentAtNode"](this._container);
    };
    Canvas.prototype._addOnErrorEventHandler = function () {
        window.onerror = this._handleWindowError;
    };
    Canvas.prototype._handleWindowError = function (message, filename, lineno, colno, error) {
        if (Canvas._globalErrorHandler) {
            Canvas._globalErrorHandler(message, filename, lineno, colno, error);
        }
        _CanvasErrorHandler__WEBPACK_IMPORTED_MODULE_13__["CanvasErrorHandler"].logErrorsFromCK(message, filename, lineno, colno, error);
    };
    return Canvas;
}());



/***/ }),

/***/ "80P6":
/*!*************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/css-loader@3.2.1_webpack@4.44.2/node_modules/css-loader/dist/cjs.js!/agent/_work/1/s/common/temp/node_modules/.pnpm/postcss-loader@3.0.0/node_modules/postcss-loader/src??postcss!../sp-rte/lib/rte/ckeditor/CKTextEditor.css ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../common/temp/node_modules/.pnpm/css-loader@3.2.1_webpack@4.44.2/node_modules/css-loader/dist/runtime/api.js */ "5ADk")(false);
// Module
exports.push([module.i, ".cke .cke_top{display:none}.cke_editable{overflow:hidden}[dir=ltr] .cke_editable{text-align:left}[dir=rtl] .cke_editable{text-align:right}.cke_editable .canvasRteResponsiveTable{overflow-x:auto;clear:both}.cke_editable .canvasRteResponsiveTable td[class*=cke_table-faked-selection]{border-color:\"[theme:themePrimary, default: #0078d4]\"!important;border-width:1px;border-style:solid}.cke_editable .canvasRteResponsiveTable .simpleTableStyleNeutral{border-color:\"[theme:neutralPrimary, default: #333333]\"!important;border-width:1px!important;border-style:solid;border-collapse:collapse;color:\"[theme:neutralPrimary, default: #333333]\"}.cke_editable .canvasRteResponsiveTable .simpleTableStyleNeutral :not(.rteEmphasis){background-color:transparent}.cke_editable .canvasRteResponsiveTable .simpleTableStyleNeutral td,.cke_editable .canvasRteResponsiveTable .simpleTableStyleNeutral th,.cke_editable .canvasRteResponsiveTable .simpleTableStyleNeutral tr{border-color:\"[theme:neutralPrimary, default: #333333]\"!important;border-width:1px!important;border-style:solid}.cke_editable .canvasRteResponsiveTable .borderHeaderTableStyleNeutral tr:first-child{border-bottom-width:3px!important;border-color:\"[theme:neutralPrimary, default: #333333]\"!important}.cke_editable .canvasRteResponsiveTable .borderHeaderTableStyleNeutral tr:first-child td,.cke_editable .canvasRteResponsiveTable .borderHeaderTableStyleNeutral tr:first-child td a,.cke_editable .canvasRteResponsiveTable .borderHeaderTableStyleNeutral tr:first-child td p,.cke_editable .canvasRteResponsiveTable .borderHeaderTableStyleNeutral tr:first-child th,.cke_editable .canvasRteResponsiveTable .borderHeaderTableStyleNeutral tr:first-child th p{font-weight:700}.cke_editable .canvasRteResponsiveTable .borderHeaderTableStyleNeutral td,.cke_editable .canvasRteResponsiveTable .borderHeaderTableStyleNeutral th,.cke_editable .canvasRteResponsiveTable .borderHeaderTableStyleNeutral tr{border-color:\"[theme:neutralPrimary, default: #333333]\"!important;border-width:1px!important;border-style:solid}.cke_editable .canvasRteResponsiveTable .filledHeaderTableStyleNeutral tr:first-child{background-color:\"[theme:neutralPrimary, default: #333333]\"}.cke_editable .canvasRteResponsiveTable .filledHeaderTableStyleNeutral tr:first-child td,.cke_editable .canvasRteResponsiveTable .filledHeaderTableStyleNeutral tr:first-child td a,.cke_editable .canvasRteResponsiveTable .filledHeaderTableStyleNeutral tr:first-child td p,.cke_editable .canvasRteResponsiveTable .filledHeaderTableStyleNeutral tr:first-child th,.cke_editable .canvasRteResponsiveTable .filledHeaderTableStyleNeutral tr:first-child th p{color:\"[theme:white, default: #ffffff]\";font-weight:700}.cke_editable .canvasRteResponsiveTable .filledHeaderTableStyleNeutral td,.cke_editable .canvasRteResponsiveTable .filledHeaderTableStyleNeutral th,.cke_editable .canvasRteResponsiveTable .filledHeaderTableStyleNeutral tr{border-color:\"[theme:neutralPrimary, default: #333333]\"!important;border-width:1px!important;border-style:solid}.cke_editable .canvasRteResponsiveTable .bandedRowTableStyleNeutral tr:first-child{background-color:\"[theme:neutralPrimary, default: #333333]\"}.cke_editable .canvasRteResponsiveTable .bandedRowTableStyleNeutral tr:first-child td,.cke_editable .canvasRteResponsiveTable .bandedRowTableStyleNeutral tr:first-child td a,.cke_editable .canvasRteResponsiveTable .bandedRowTableStyleNeutral tr:first-child td p,.cke_editable .canvasRteResponsiveTable .bandedRowTableStyleNeutral tr:first-child th,.cke_editable .canvasRteResponsiveTable .bandedRowTableStyleNeutral tr:first-child th p{color:\"[theme:white, default: #ffffff]\";font-weight:700}.cke_editable .canvasRteResponsiveTable .bandedRowTableStyleNeutral tr:nth-child(2n){background-color:\"[theme:neutralQuaternaryAlt, default: #dadada]\"}.cke_editable .canvasRteResponsiveTable .bandedRowTableStyleNeutral td,.cke_editable .canvasRteResponsiveTable .bandedRowTableStyleNeutral th,.cke_editable .canvasRteResponsiveTable .bandedRowTableStyleNeutral tr{border-color:\"[theme:neutralPrimary, default: #333333]\"!important;border-width:1px!important;border-style:solid}.cke_editable .canvasRteResponsiveTable .bandedRowColumnTableStyleNeutral tr:first-child{background-color:\"[theme:neutralPrimary, default: #333333]\"}.cke_editable .canvasRteResponsiveTable .bandedRowColumnTableStyleNeutral tr:first-child td,.cke_editable .canvasRteResponsiveTable .bandedRowColumnTableStyleNeutral tr:first-child td a,.cke_editable .canvasRteResponsiveTable .bandedRowColumnTableStyleNeutral tr:first-child td p,.cke_editable .canvasRteResponsiveTable .bandedRowColumnTableStyleNeutral tr:first-child th,.cke_editable .canvasRteResponsiveTable .bandedRowColumnTableStyleNeutral tr:first-child th p{color:\"[theme:white, default: #ffffff]\"}.cke_editable .canvasRteResponsiveTable .bandedRowColumnTableStyleNeutral tr:nth-child(2n){background-color:\"[theme:neutralQuaternaryAlt, default: #dadada]\"}.cke_editable .canvasRteResponsiveTable .bandedRowColumnTableStyleNeutral tr:first-child td,.cke_editable .canvasRteResponsiveTable .bandedRowColumnTableStyleNeutral tr:first-child td a,.cke_editable .canvasRteResponsiveTable .bandedRowColumnTableStyleNeutral tr:first-child td p,.cke_editable .canvasRteResponsiveTable .bandedRowColumnTableStyleNeutral tr:first-child th,.cke_editable .canvasRteResponsiveTable .bandedRowColumnTableStyleNeutral tr:first-child th p{font-weight:700}.cke_editable .canvasRteResponsiveTable .bandedRowColumnTableStyleNeutral tr:not(:first-child) td:first-child{background-color:\"[theme:neutralTertiaryAlt, default: #c8c8c8]\"}.cke_editable .canvasRteResponsiveTable .bandedRowColumnTableStyleNeutral td,.cke_editable .canvasRteResponsiveTable .bandedRowColumnTableStyleNeutral th,.cke_editable .canvasRteResponsiveTable .bandedRowColumnTableStyleNeutral tr{border-color:\"[theme:neutralPrimary, default: #333333]\"!important;border-width:1px!important;border-style:solid}.cke_editable .canvasRteResponsiveTable .simpleTableStyleTheme{border-color:\"[theme:themePrimary, default: #0078d4]\"!important;border-width:1px!important;border-style:solid;border-collapse:collapse;color:\"[theme:neutralPrimary, default: #333333]\"}.cke_editable .canvasRteResponsiveTable .simpleTableStyleTheme :not(.rteEmphasis){background-color:transparent}.cke_editable .canvasRteResponsiveTable .simpleTableStyleTheme td,.cke_editable .canvasRteResponsiveTable .simpleTableStyleTheme th,.cke_editable .canvasRteResponsiveTable .simpleTableStyleTheme tr{border-color:\"[theme:themePrimary, default: #0078d4]\"!important;border-width:1px!important;border-style:solid}.cke_editable .canvasRteResponsiveTable .borderHeaderTableStyleTheme tr:first-child{border-bottom-width:3px!important;border-color:\"[theme:themePrimary, default: #0078d4]\"!important}.cke_editable .canvasRteResponsiveTable .borderHeaderTableStyleTheme tr:first-child td,.cke_editable .canvasRteResponsiveTable .borderHeaderTableStyleTheme tr:first-child td a,.cke_editable .canvasRteResponsiveTable .borderHeaderTableStyleTheme tr:first-child td p,.cke_editable .canvasRteResponsiveTable .borderHeaderTableStyleTheme tr:first-child th,.cke_editable .canvasRteResponsiveTable .borderHeaderTableStyleTheme tr:first-child th p{font-weight:700}.cke_editable .canvasRteResponsiveTable .borderHeaderTableStyleTheme td,.cke_editable .canvasRteResponsiveTable .borderHeaderTableStyleTheme th,.cke_editable .canvasRteResponsiveTable .borderHeaderTableStyleTheme tr{border-color:\"[theme:themePrimary, default: #0078d4]\"!important;border-width:1px!important;border-style:solid}.cke_editable .canvasRteResponsiveTable .filledHeaderTableStyleTheme tr:first-child{background-color:\"[theme:themePrimary, default: #0078d4]\"}.cke_editable .canvasRteResponsiveTable .filledHeaderTableStyleTheme tr:first-child td,.cke_editable .canvasRteResponsiveTable .filledHeaderTableStyleTheme tr:first-child td a,.cke_editable .canvasRteResponsiveTable .filledHeaderTableStyleTheme tr:first-child td p,.cke_editable .canvasRteResponsiveTable .filledHeaderTableStyleTheme tr:first-child th,.cke_editable .canvasRteResponsiveTable .filledHeaderTableStyleTheme tr:first-child th p{color:\"[theme:white, default: #ffffff]\";font-weight:700}.cke_editable .canvasRteResponsiveTable .filledHeaderTableStyleTheme td,.cke_editable .canvasRteResponsiveTable .filledHeaderTableStyleTheme th,.cke_editable .canvasRteResponsiveTable .filledHeaderTableStyleTheme tr{border-color:\"[theme:themePrimary, default: #0078d4]\"!important;border-width:1px!important;border-style:solid}.cke_editable .canvasRteResponsiveTable .bandedRowTableStyleTheme tr:first-child{background-color:\"[theme:themePrimary, default: #0078d4]\"}.cke_editable .canvasRteResponsiveTable .bandedRowTableStyleTheme tr:first-child td,.cke_editable .canvasRteResponsiveTable .bandedRowTableStyleTheme tr:first-child td a,.cke_editable .canvasRteResponsiveTable .bandedRowTableStyleTheme tr:first-child td p,.cke_editable .canvasRteResponsiveTable .bandedRowTableStyleTheme tr:first-child th,.cke_editable .canvasRteResponsiveTable .bandedRowTableStyleTheme tr:first-child th p{color:\"[theme:white, default: #ffffff]\";font-weight:700}.cke_editable .canvasRteResponsiveTable .bandedRowTableStyleTheme tr:nth-child(2n){background-color:\"[theme:themeLighter, default: #deecf9]\"}.cke_editable .canvasRteResponsiveTable .bandedRowTableStyleTheme td,.cke_editable .canvasRteResponsiveTable .bandedRowTableStyleTheme th,.cke_editable .canvasRteResponsiveTable .bandedRowTableStyleTheme tr{border-color:\"[theme:themePrimary, default: #0078d4]\"!important;border-width:1px!important;border-style:solid}.cke_editable .canvasRteResponsiveTable .bandedRowColumnTableStyleTheme tr:first-child{background-color:\"[theme:themePrimary, default: #0078d4]\"}.cke_editable .canvasRteResponsiveTable .bandedRowColumnTableStyleTheme tr:first-child td,.cke_editable .canvasRteResponsiveTable .bandedRowColumnTableStyleTheme tr:first-child td a,.cke_editable .canvasRteResponsiveTable .bandedRowColumnTableStyleTheme tr:first-child td p,.cke_editable .canvasRteResponsiveTable .bandedRowColumnTableStyleTheme tr:first-child th,.cke_editable .canvasRteResponsiveTable .bandedRowColumnTableStyleTheme tr:first-child th p{color:\"[theme:white, default: #ffffff]\"}.cke_editable .canvasRteResponsiveTable .bandedRowColumnTableStyleTheme tr:nth-child(2n){background-color:\"[theme:themeLighter, default: #deecf9]\"}.cke_editable .canvasRteResponsiveTable .bandedRowColumnTableStyleTheme tr:first-child td,.cke_editable .canvasRteResponsiveTable .bandedRowColumnTableStyleTheme tr:first-child td a,.cke_editable .canvasRteResponsiveTable .bandedRowColumnTableStyleTheme tr:first-child td p,.cke_editable .canvasRteResponsiveTable .bandedRowColumnTableStyleTheme tr:first-child th,.cke_editable .canvasRteResponsiveTable .bandedRowColumnTableStyleTheme tr:first-child th p{font-weight:700}.cke_editable .canvasRteResponsiveTable .bandedRowColumnTableStyleTheme tr:not(:first-child) td:first-child{background-color:\"[theme:themeLight, default: #c7e0f4]\"}.cke_editable .canvasRteResponsiveTable .bandedRowColumnTableStyleTheme td,.cke_editable .canvasRteResponsiveTable .bandedRowColumnTableStyleTheme th,.cke_editable .canvasRteResponsiveTable .bandedRowColumnTableStyleTheme tr{border-color:\"[theme:themePrimary, default: #0078d4]\"!important;border-width:1px!important;border-style:solid}.cke_editable .tableWrapper{display:block;margin:0}.cke_editable .tableCenterAlign table{margin:0 auto}[dir=ltr] .cke_editable .tableLeftAlign table{margin-left:0}[dir=ltr] [dir=rtl] .cke_editable .tableLeftAlign table,[dir=rtl] .cke_editable .tableLeftAlign table{margin-right:0}[dir=rtl] [dir=rtl] .cke_editable .tableLeftAlign table{margin-left:0}[dir=ltr] [dir=rtl] .cke_editable .tableLeftAlign table{margin-left:auto}[dir=rtl] [dir=rtl] .cke_editable .tableLeftAlign table{margin-right:auto}[dir=ltr] .cke_editable .tableRightAlign table{margin-right:0}[dir=rtl] .cke_editable .tableRightAlign table{margin-left:0}[dir=ltr] .cke_editable .tableRightAlign table{margin-left:auto}[dir=rtl] .cke_editable .tableRightAlign table{margin-right:auto}[dir=ltr] [dir=rtl] .cke_editable .tableRightAlign table{margin-left:0}[dir=rtl] [dir=rtl] .cke_editable .tableRightAlign table{margin-right:0}div[data-cke-temp=\"1\"]{width:2px!important}div[data-cke-temp=\"1\"]:hover{background-color:\"[theme:themePrimary, default: #0078d4]\"!important;opacity:1!important;display:block!important}.cke_show_borders .canvasRteResponsiveTable table.cke_show_border.bandedRowColumnTableStyleTheme,.cke_show_borders .canvasRteResponsiveTable table.cke_show_border.bandedRowColumnTableStyleTheme>tbody>tr>td,.cke_show_borders .canvasRteResponsiveTable table.cke_show_border.bandedRowColumnTableStyleTheme>tbody>tr>th,.cke_show_borders .canvasRteResponsiveTable table.cke_show_border.bandedRowColumnTableStyleTheme>tfoot>tr>td,.cke_show_borders .canvasRteResponsiveTable table.cke_show_border.bandedRowColumnTableStyleTheme>tfoot>tr>th,.cke_show_borders .canvasRteResponsiveTable table.cke_show_border.bandedRowColumnTableStyleTheme>thead>tr>td,.cke_show_borders .canvasRteResponsiveTable table.cke_show_border.bandedRowColumnTableStyleTheme>thead>tr>th,.cke_show_borders .canvasRteResponsiveTable table.cke_show_border.bandedRowColumnTableStyleTheme>tr>td,.cke_show_borders .canvasRteResponsiveTable table.cke_show_border.bandedRowColumnTableStyleTheme>tr>th,.cke_show_borders .canvasRteResponsiveTable table.cke_show_border.bandedRowTableStyleTheme,.cke_show_borders .canvasRteResponsiveTable table.cke_show_border.bandedRowTableStyleTheme>tbody>tr>td,.cke_show_borders .canvasRteResponsiveTable table.cke_show_border.bandedRowTableStyleTheme>tbody>tr>th,.cke_show_borders .canvasRteResponsiveTable table.cke_show_border.bandedRowTableStyleTheme>tfoot>tr>td,.cke_show_borders .canvasRteResponsiveTable table.cke_show_border.bandedRowTableStyleTheme>tfoot>tr>th,.cke_show_borders .canvasRteResponsiveTable table.cke_show_border.bandedRowTableStyleTheme>thead>tr>td,.cke_show_borders .canvasRteResponsiveTable table.cke_show_border.bandedRowTableStyleTheme>thead>tr>th,.cke_show_borders .canvasRteResponsiveTable table.cke_show_border.bandedRowTableStyleTheme>tr>td,.cke_show_borders .canvasRteResponsiveTable table.cke_show_border.bandedRowTableStyleTheme>tr>th,.cke_show_borders .canvasRteResponsiveTable table.cke_show_border.borderHeaderTableStyleTheme,.cke_show_borders .canvasRteResponsiveTable table.cke_show_border.borderHeaderTableStyleTheme>tbody>tr>td,.cke_show_borders .canvasRteResponsiveTable table.cke_show_border.borderHeaderTableStyleTheme>tbody>tr>th,.cke_show_borders .canvasRteResponsiveTable table.cke_show_border.borderHeaderTableStyleTheme>tfoot>tr>td,.cke_show_borders .canvasRteResponsiveTable table.cke_show_border.borderHeaderTableStyleTheme>tfoot>tr>th,.cke_show_borders .canvasRteResponsiveTable table.cke_show_border.borderHeaderTableStyleTheme>thead>tr>td,.cke_show_borders .canvasRteResponsiveTable table.cke_show_border.borderHeaderTableStyleTheme>thead>tr>th,.cke_show_borders .canvasRteResponsiveTable table.cke_show_border.borderHeaderTableStyleTheme>tr>td,.cke_show_borders .canvasRteResponsiveTable table.cke_show_border.borderHeaderTableStyleTheme>tr>th,.cke_show_borders .canvasRteResponsiveTable table.cke_show_border.filledHeaderTableStyleTheme,.cke_show_borders .canvasRteResponsiveTable table.cke_show_border.filledHeaderTableStyleTheme>tbody>tr>td,.cke_show_borders .canvasRteResponsiveTable table.cke_show_border.filledHeaderTableStyleTheme>tbody>tr>th,.cke_show_borders .canvasRteResponsiveTable table.cke_show_border.filledHeaderTableStyleTheme>tfoot>tr>td,.cke_show_borders .canvasRteResponsiveTable table.cke_show_border.filledHeaderTableStyleTheme>tfoot>tr>th,.cke_show_borders .canvasRteResponsiveTable table.cke_show_border.filledHeaderTableStyleTheme>thead>tr>td,.cke_show_borders .canvasRteResponsiveTable table.cke_show_border.filledHeaderTableStyleTheme>thead>tr>th,.cke_show_borders .canvasRteResponsiveTable table.cke_show_border.filledHeaderTableStyleTheme>tr>td,.cke_show_borders .canvasRteResponsiveTable table.cke_show_border.filledHeaderTableStyleTheme>tr>th,.cke_show_borders .canvasRteResponsiveTable table.cke_show_border.simpleTableStyleTheme,.cke_show_borders .canvasRteResponsiveTable table.cke_show_border.simpleTableStyleTheme>tbody>tr>td,.cke_show_borders .canvasRteResponsiveTable table.cke_show_border.simpleTableStyleTheme>tbody>tr>th,.cke_show_borders .canvasRteResponsiveTable table.cke_show_border.simpleTableStyleTheme>tfoot>tr>td,.cke_show_borders .canvasRteResponsiveTable table.cke_show_border.simpleTableStyleTheme>tfoot>tr>th,.cke_show_borders .canvasRteResponsiveTable table.cke_show_border.simpleTableStyleTheme>thead>tr>td,.cke_show_borders .canvasRteResponsiveTable table.cke_show_border.simpleTableStyleTheme>thead>tr>th,.cke_show_borders .canvasRteResponsiveTable table.cke_show_border.simpleTableStyleTheme>tr>td,.cke_show_borders .canvasRteResponsiveTable table.cke_show_border.simpleTableStyleTheme>tr>th{border-color:\"[theme:themePrimary, default: #0078d4]\"!important;border-width:1px!important;border-style:solid}.cke_show_borders .canvasRteResponsiveTable table.cke_show_border,.cke_show_borders .canvasRteResponsiveTable table.cke_show_border.bandedRowColumnTableStyleNeutral,.cke_show_borders .canvasRteResponsiveTable table.cke_show_border.bandedRowColumnTableStyleNeutral>tbody>tr>td,.cke_show_borders .canvasRteResponsiveTable table.cke_show_border.bandedRowColumnTableStyleNeutral>tbody>tr>th,.cke_show_borders .canvasRteResponsiveTable table.cke_show_border.bandedRowColumnTableStyleNeutral>tfoot>tr>td,.cke_show_borders .canvasRteResponsiveTable table.cke_show_border.bandedRowColumnTableStyleNeutral>tfoot>tr>th,.cke_show_borders .canvasRteResponsiveTable table.cke_show_border.bandedRowColumnTableStyleNeutral>thead>tr>td,.cke_show_borders .canvasRteResponsiveTable table.cke_show_border.bandedRowColumnTableStyleNeutral>thead>tr>th,.cke_show_borders .canvasRteResponsiveTable table.cke_show_border.bandedRowColumnTableStyleNeutral>tr>td,.cke_show_borders .canvasRteResponsiveTable table.cke_show_border.bandedRowColumnTableStyleNeutral>tr>th,.cke_show_borders .canvasRteResponsiveTable table.cke_show_border.bandedRowTableStyleNeutral,.cke_show_borders .canvasRteResponsiveTable table.cke_show_border.bandedRowTableStyleNeutral>tbody>tr>td,.cke_show_borders .canvasRteResponsiveTable table.cke_show_border.bandedRowTableStyleNeutral>tbody>tr>th,.cke_show_borders .canvasRteResponsiveTable table.cke_show_border.bandedRowTableStyleNeutral>tfoot>tr>td,.cke_show_borders .canvasRteResponsiveTable table.cke_show_border.bandedRowTableStyleNeutral>tfoot>tr>th,.cke_show_borders .canvasRteResponsiveTable table.cke_show_border.bandedRowTableStyleNeutral>thead>tr>td,.cke_show_borders .canvasRteResponsiveTable table.cke_show_border.bandedRowTableStyleNeutral>thead>tr>th,.cke_show_borders .canvasRteResponsiveTable table.cke_show_border.bandedRowTableStyleNeutral>tr>td,.cke_show_borders .canvasRteResponsiveTable table.cke_show_border.bandedRowTableStyleNeutral>tr>th,.cke_show_borders .canvasRteResponsiveTable table.cke_show_border.borderHeaderTableStyleNeutral,.cke_show_borders .canvasRteResponsiveTable table.cke_show_border.borderHeaderTableStyleNeutral>tbody>tr>td,.cke_show_borders .canvasRteResponsiveTable table.cke_show_border.borderHeaderTableStyleNeutral>tbody>tr>th,.cke_show_borders .canvasRteResponsiveTable table.cke_show_border.borderHeaderTableStyleNeutral>tfoot>tr>td,.cke_show_borders .canvasRteResponsiveTable table.cke_show_border.borderHeaderTableStyleNeutral>tfoot>tr>th,.cke_show_borders .canvasRteResponsiveTable table.cke_show_border.borderHeaderTableStyleNeutral>thead>tr>td,.cke_show_borders .canvasRteResponsiveTable table.cke_show_border.borderHeaderTableStyleNeutral>thead>tr>th,.cke_show_borders .canvasRteResponsiveTable table.cke_show_border.borderHeaderTableStyleNeutral>tr>td,.cke_show_borders .canvasRteResponsiveTable table.cke_show_border.borderHeaderTableStyleNeutral>tr>th,.cke_show_borders .canvasRteResponsiveTable table.cke_show_border.filledHeaderTableStyleNeutral,.cke_show_borders .canvasRteResponsiveTable table.cke_show_border.filledHeaderTableStyleNeutral>tbody>tr>td,.cke_show_borders .canvasRteResponsiveTable table.cke_show_border.filledHeaderTableStyleNeutral>tbody>tr>th,.cke_show_borders .canvasRteResponsiveTable table.cke_show_border.filledHeaderTableStyleNeutral>tfoot>tr>td,.cke_show_borders .canvasRteResponsiveTable table.cke_show_border.filledHeaderTableStyleNeutral>tfoot>tr>th,.cke_show_borders .canvasRteResponsiveTable table.cke_show_border.filledHeaderTableStyleNeutral>thead>tr>td,.cke_show_borders .canvasRteResponsiveTable table.cke_show_border.filledHeaderTableStyleNeutral>thead>tr>th,.cke_show_borders .canvasRteResponsiveTable table.cke_show_border.filledHeaderTableStyleNeutral>tr>td,.cke_show_borders .canvasRteResponsiveTable table.cke_show_border.filledHeaderTableStyleNeutral>tr>th,.cke_show_borders .canvasRteResponsiveTable table.cke_show_border.simpleTableStyleNeutral,.cke_show_borders .canvasRteResponsiveTable table.cke_show_border.simpleTableStyleNeutral>tbody>tr>td,.cke_show_borders .canvasRteResponsiveTable table.cke_show_border.simpleTableStyleNeutral>tbody>tr>th,.cke_show_borders .canvasRteResponsiveTable table.cke_show_border.simpleTableStyleNeutral>tfoot>tr>td,.cke_show_borders .canvasRteResponsiveTable table.cke_show_border.simpleTableStyleNeutral>tfoot>tr>th,.cke_show_borders .canvasRteResponsiveTable table.cke_show_border.simpleTableStyleNeutral>thead>tr>td,.cke_show_borders .canvasRteResponsiveTable table.cke_show_border.simpleTableStyleNeutral>thead>tr>th,.cke_show_borders .canvasRteResponsiveTable table.cke_show_border.simpleTableStyleNeutral>tr>td,.cke_show_borders .canvasRteResponsiveTable table.cke_show_border.simpleTableStyleNeutral>tr>th,.cke_show_borders .canvasRteResponsiveTable table.cke_show_border>tbody>tr>td,.cke_show_borders .canvasRteResponsiveTable table.cke_show_border>tbody>tr>th,.cke_show_borders .canvasRteResponsiveTable table.cke_show_border>tfoot>tr>td,.cke_show_borders .canvasRteResponsiveTable table.cke_show_border>tfoot>tr>th,.cke_show_borders .canvasRteResponsiveTable table.cke_show_border>thead>tr>td,.cke_show_borders .canvasRteResponsiveTable table.cke_show_border>thead>tr>th,.cke_show_borders .canvasRteResponsiveTable table.cke_show_border>tr>td,.cke_show_borders .canvasRteResponsiveTable table.cke_show_border>tr>th{border-color:\"[theme:neutralPrimary, default: #333333]\"!important;border-width:1px!important;border-style:solid}[dir=ltr] .cke_editable ol,[dir=ltr] .cke_editable ul{padding-left:50px}[dir=rtl] .cke_editable ol,[dir=rtl] .cke_editable ul{padding-right:50px}[dir=ltr] .cke_editable li:before{margin-left:-19px}[dir=rtl] .cke_editable li:before{margin-right:-19px}[dir=ltr] .cke_editable li:before{margin-right:4px}[dir=rtl] .cke_editable li:before{margin-left:4px}[dir=ltr] .cke_editable li:before{text-align:right}[dir=rtl] .cke_editable li:before{text-align:left}.cke_editable ol{counter-reset:item}.cke_editable ol>li{counter-increment:item}.cke_editable ol ol>li{display:block}.cke_editable ol ol>li:before{content:counter(item,lower-alpha) \". \"}.cke_editable table,.cke_editable td,.cke_editable th,.cke_editable tr{border-color:\"[theme:neutralPrimary, default: #333333]\"!important;border-width:1px!important;border-style:solid;border-collapse:collapse}.cke_editable table{margin-bottom:10px}.cke_editable td,.cke_editable td p,.cke_editable th,.cke_editable th p{font-size:15px;color:\"[theme:neutralPrimary, default: #333333]\";white-space:normal;margin:0}.cke_editable th{font-weight:600;text-align:center}.cke_editable td[align=center],.cke_editable td[align=right],.cke_editable td p[style*=\"text-align:center\"],.cke_editable td p[style*=\"text-align: center\"],.cke_editable td p[style*=\"text-align:right\"],.cke_editable td p[style*=\"text-align: right\"]{padding:0!important}.cke_editable td,.cke_editable th{padding-top:8px;padding-bottom:8px;width:75px}[dir=ltr] .cke_editable td,[dir=ltr] .cke_editable th{padding-left:8px}[dir=rtl] .cke_editable td,[dir=rtl] .cke_editable th{padding-right:8px}[dir=ltr] .cke_editable td,[dir=ltr] .cke_editable th{padding-right:16px}[dir=ltr] [dir=rtl] .cke_editable td,[dir=ltr] [dir=rtl] .cke_editable th,[dir=rtl] .cke_editable td,[dir=rtl] .cke_editable th{padding-left:16px}[dir=rtl] [dir=rtl] .cke_editable td,[dir=rtl] [dir=rtl] .cke_editable th{padding-right:16px}[dir=ltr] [dir=rtl] .cke_editable td,[dir=ltr] [dir=rtl] .cke_editable th{padding-right:8px}[dir=rtl] [dir=rtl] .cke_editable td,[dir=rtl] [dir=rtl] .cke_editable th{padding-left:8px}.cke_editable td[valign=top]{padding-top:8px;padding-bottom:0}[dir=ltr] .cke_editable td[valign=top]{padding-left:8px}[dir=rtl] .cke_editable td[valign=top]{padding-right:8px}[dir=ltr] .cke_editable td[valign=top]{padding-right:16px}[dir=rtl] .cke_editable td[valign=top]{padding-left:16px}.cke_editable td[valign=bottom]{padding-top:0;padding-bottom:8px}[dir=ltr] .cke_editable td[valign=bottom]{padding-left:8px}[dir=rtl] .cke_editable td[valign=bottom]{padding-right:8px}[dir=ltr] .cke_editable td[valign=bottom]{padding-right:16px}[dir=rtl] .cke_editable td[valign=bottom]{padding-left:16px}.cke_editable td[align=center],.cke_editable td p[style*=\"text-align:center\"],.cke_editable td p[style*=\"text-align: center\"]{padding:8px 16px}.cke_editable td[align=left],.cke_editable td p[style*=\"text-align:left\"],.cke_editable td p[style*=\"text-align: left\"]{padding:8px 16px 8px 8px}.cke_editable td[align=right],.cke_editable td p[style*=\"text-align:right\"],.cke_editable td p[style*=\"text-align: right\"]{padding:8px 8px 8px 16px}.cke_editable tr td th:nth-last-child(n+20):first-child,.cke_editable tr td th:nth-last-child(n+20):first-child~*{padding:4px!important;font-size:10px!important}[dir=ltr] .cke_editable .ql-indent-1{padding-left:40px}[dir=rtl] .cke_editable .ql-indent-1{padding-right:40px}[dir=ltr] .cke_editable li.ql-indent-1{padding-left:59px}[dir=rtl] .cke_editable li.ql-indent-1{padding-right:59px}[dir=ltr] .cke_editable .ql-indent-2{padding-left:80px}[dir=rtl] .cke_editable .ql-indent-2{padding-right:80px}[dir=ltr] .cke_editable li.ql-indent-2{padding-left:99px}[dir=rtl] .cke_editable li.ql-indent-2{padding-right:99px}[dir=ltr] .cke_editable .ql-indent-3{padding-left:120px}[dir=rtl] .cke_editable .ql-indent-3{padding-right:120px}[dir=ltr] .cke_editable li.ql-indent-3{padding-left:139px}[dir=rtl] .cke_editable li.ql-indent-3{padding-right:139px}[dir=ltr] .cke_editable .ql-indent-4{padding-left:160px}[dir=rtl] .cke_editable .ql-indent-4{padding-right:160px}[dir=ltr] .cke_editable li.ql-indent-4{padding-left:179px}[dir=rtl] .cke_editable li.ql-indent-4{padding-right:179px}[dir=ltr] .cke_editable .ql-indent-5{padding-left:200px}[dir=rtl] .cke_editable .ql-indent-5{padding-right:200px}[dir=ltr] .cke_editable li.ql-indent-5{padding-left:219px}[dir=rtl] .cke_editable li.ql-indent-5{padding-right:219px}[dir=ltr] .cke_editable .ql-indent-6{padding-left:240px}[dir=rtl] .cke_editable .ql-indent-6{padding-right:240px}[dir=ltr] .cke_editable li.ql-indent-6{padding-left:259px}[dir=rtl] .cke_editable li.ql-indent-6{padding-right:259px}[dir=ltr] .cke_editable .ql-indent-7{padding-left:280px}[dir=rtl] .cke_editable .ql-indent-7{padding-right:280px}[dir=ltr] .cke_editable li.ql-indent-7{padding-left:299px}[dir=rtl] .cke_editable li.ql-indent-7{padding-right:299px}[dir=ltr] .cke_editable .ql-indent-8{padding-left:320px}[dir=rtl] .cke_editable .ql-indent-8{padding-right:320px}[dir=ltr] .cke_editable li.ql-indent-8{padding-left:339px}[dir=rtl] .cke_editable li.ql-indent-8{padding-right:339px}[dir=ltr] .cke_editable .ql-align-right{text-align:right}[dir=rtl] .cke_editable .ql-align-right{text-align:left}.cke_editable .ql-align-center{text-align:center}.cke_editable .fontColorRedDark{color:\"[theme:redDark, default: #a80000]\"}.cke_editable .fontColorRed{color:\"[theme:red, default: #e81123]\"}.cke_editable .fontColorYellow{color:\"[theme:yellow, default: #ffb900]\"}.cke_editable .fontColorYellowLight{color:\"[theme:yellowLight, default: #fff100]\"}.cke_editable .fontColorGreenLight{color:\"[theme:greenLight, default: #bad80a]\"}.cke_editable .fontColorGreen{color:\"[theme:green, default: #107c10]\"}.cke_editable .fontColorBlueLight{color:\"[theme:blueLight, default: #00bcf2]\"}.cke_editable .fontColorBlue{color:\"[theme:blue, default: #0078d4]\"}.cke_editable .fontColorBlueDark{color:\"[theme:blueDark, default: #002050]\"}.cke_editable .fontColorPurple{color:\"[theme:purple, default: #5c2d91]\"}.cke_editable .fontColorNeutralDark{color:\"[theme:neutralDark, default: #212121]\"}.cke_editable .fontColorNeutralPrimary{color:\"[theme:neutralPrimary, default: #333333]\"}.cke_editable .fontColorNeutralPrimaryAlt{color:\"[theme:neutralPrimaryAlt, default: #3c3c3c]\"}.cke_editable .fontColorNeutralSecondary{color:\"[theme:neutralSecondary, default: #666666]\"}.cke_editable .fontColorNeutralTertiary{color:\"[theme:neutralTertiary, default: #a6a6a6]\"}.cke_editable .fontColorThemeDarker{color:\"[theme:themeDarker, default: #004578]\"}.cke_editable .fontColorThemeDark{color:\"[theme:themeDark, default: #005a9e]\"}.cke_editable .fontColorThemeDarkAlt{color:\"[theme:themeDarkAlt, default: #106ebe]\"}.cke_editable .fontColorThemePrimary{color:\"[theme:themePrimary, default: #0078d4]\"}.cke_editable .fontColorThemeSecondary{color:\"[theme:themeSecondary, default: #2b88d8]\"}.cke_editable .fontSizeMediumPlus{font-size:15px}.cke_editable .fontSizeLarge{font-size:17px}.cke_editable .fontSizeXLarge{font-size:21px}.cke_editable .fontSizeMedium,.cke_editable .fontSizeMediumPlus,.cke_editable .fontSizeSmall,.cke_editable .fontSizeSuper,.cke_editable .fontSizeXxLargePlus,.cke_editable .fontSizeXxxLarge{line-height:1.3}.cke_editable .highlightColorYellow{background-color:#ff0}.cke_editable .highlightColorGreen{background-color:#0f0}.cke_editable .highlightColorAqua{background-color:#0ff}.cke_editable .highlightColorMagenta{background-color:#f0f}.cke_editable .highlightColorBlue{background-color:#00f}.cke_editable .highlightColorRed{background-color:red}.cke_editable .highlightColorDarkBlue{background-color:navy}.cke_editable .highlightColorTeal{background-color:teal}.cke_editable .highlightColorDarkGreen{background-color:green}.cke_editable .highlightColorPurple{background-color:purple}.cke_editable .highlightColorMaroon{background-color:maroon}.cke_editable .highlightColorGold{background-color:olive}.cke_editable .highlightColorDarkGrey{background-color:grey}.cke_editable .highlightColorGrey{background-color:silver}.cke_editable .highlightColorBlack{background-color:#000}@media only screen and (max-width:640px){.cke_editable table,.cke_editable td,.cke_editable th{padding:8px!important;white-space:normal}.cke_editable table{max-width:600px!important}.cke_editable td p,.cke_editable td p span,.cke_editable th p,.cke_editable th p span{font-size:12px!important}}.cke_editable .ms-missinglink{text-decoration:none;background-image:linear-gradient(90deg,\"[theme:themePrimary, default: #0078d4]\" 75%,transparent 0);background-position:0 1.12em;background-repeat:repeat-x;background-size:8px 1px}.cke_editable td,.cke_editable td p,.cke_editable th,.cke_editable th p{font-size:18px;font-weight:400}.cke_editable .fontSizeXSmall{font-size:10px}.cke_editable .fontSizeSmall{font-size:12px}.cke_editable .fontSizeMedium{font-size:14px}.cke_editable .fontSizeMediumPlus{font-size:16px}.cke_editable .fontSizeLarge{font-size:18px}.cke_editable .fontSizeXLarge{font-size:20px}.cke_editable .fontSizeXLargePlus{font-size:24px}.cke_editable .fontSizeXxLarge{font-size:28px}.cke_editable .fontSizeXxxLarge{font-size:32px}.cke_editable .fontSizeXxLargePlus{font-size:36px}.cke_editable .fontSizeSuper{font-size:42px}.cke_editable .fontSizeMega{font-size:68px}.cke_editable .fontSizeMedium,.cke_editable .fontSizeMediumPlus,.cke_editable .fontSizeMega,.cke_editable .fontSizeSmall,.cke_editable .fontSizeSuper,.cke_editable .fontSizeXSmall,.cke_editable .fontSizeXxLargePlus,.cke_editable .fontSizeXxxLarge{line-height:1.4}.cke_editable .webPartInRte .ToolbarButtonTooltip{margin:0}@media (max-width:1023px){.cke_editable .webPartInRteAlignLeft,.cke_editable .webPartInRteAlignRight{width:100%}}@media (min-width:1024px){.cke_editable .webPartInRteAlignLeft,.cke_editable .webPartInRteAlignRight{max-width:66%}}[dir=ltr] .cke_editable .webPartInRteAlignLeft{float:left}[dir=ltr] .cke_editable .webPartInRteAlignRight,[dir=rtl] .cke_editable .webPartInRteAlignLeft{float:right}[dir=rtl] .cke_editable .webPartInRteAlignRight{float:left}.cke_editable .webPartInRteAlignCenter{width:100%}.cke_editable .webPartInRte div[class^=resizeController]{margin:-7px auto 7px}.cke_editable .webPartInRte div[class^=resizeController] div[class^=resizeButtonBottomLeft],.cke_editable .webPartInRte div[class^=resizeController] div[class^=resizeButtonBottomRight]{margin-bottom:0}.cke_editable ol>li>.cke_widget_wrapper_webPartInRte>.webPartInRte{float:none;padding:0;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}.cke_editable ol>li>.cke_widget_wrapper_webPartInRte>.webPartInRte img{max-width:none!important}.fixEditorPadding{padding:8px}.cke_inner.cke_reset{background:inherit}.inlineImageEditToolbar{display:none}.cke_widget_selected .inlineImageEditToolbar{display:block}.rte--inline i{font-style:normal!important}.rte--inline div{margin:0!important}[dir=ltr] .rte--inline div .webPartInRteAlignLeft{padding-right:16px!important}[dir=ltr] .rte--inline div .webPartInRteAlignRight,[dir=rtl] .rte--inline div .webPartInRteAlignLeft{padding-left:16px!important}[dir=rtl] .rte--inline div .webPartInRteAlignRight{padding-right:16px!important}.rte--inline .cke_widget_inlineimage.cke_widget_wrapper_webPartInRte:first-child{margin-top:40px!important}", ""]);


/***/ }),

/***/ "85cM":
/*!*************************************************************************************!*\
  !*** ./lib/sp-canvas/canvas/editChunk/narrowModeDialog/DeferredNarrowModeDialog.js ***!
  \*************************************************************************************/
/*! exports provided: DeferredNarrowModeDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeferredNarrowModeDialog", function() { return DeferredNarrowModeDialog; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


// tslint:disable-next-line:variable-name
var DeferredComponent = react__WEBPACK_IMPORTED_MODULE_1__["lazy"](function () {
    return Promise.all(/*! import() | sp-canvas-narrow-dialog */[__webpack_require__.e("vendors~sp-canvas-narrow-dialog"), __webpack_require__.e("sp-canvas-narrow-dialog")]).then(__webpack_require__.bind(null, /*! ./NarrowModeDialog */ "HHXz")).then(function (module) { return ({
        default: module.NarrowModeDialog
    }); });
});
var DeferredNarrowModeDialog = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(DeferredNarrowModeDialog, _super);
    function DeferredNarrowModeDialog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DeferredNarrowModeDialog.prototype.render = function () {
        return this.props.isEnabled ? (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Suspense"], { fallback: false },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](DeferredComponent, null))) : (false);
    };
    return DeferredNarrowModeDialog;
}(react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]));



/***/ }),

/***/ "8HjM":
/*!************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/css-loader@3.2.1_webpack@4.44.2/node_modules/css-loader/dist/cjs.js!/agent/_work/1/s/common/temp/node_modules/.pnpm/postcss-loader@3.0.0/node_modules/postcss-loader/src??postcss!./lib/sp-canvas/canvas/canvasSection/CanvasSection.css ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../common/temp/node_modules/.pnpm/css-loader@3.2.1_webpack@4.44.2/node_modules/css-loader/dist/runtime/api.js */ "5ADk")(false);
// Module
exports.push([module.i, ".CanvasComponent.LCS .CanvasSection-col{position:relative;min-height:1px;padding-left:8px;padding-right:8px;box-sizing:border-box}[dir=ltr] .CanvasComponent.LCS .CanvasSection-col{float:left}[dir=rtl] .CanvasComponent.LCS .CanvasSection-col{float:right}.CanvasComponent.LCS .CanvasSection-col .ms-Grid{padding:0}.CanvasComponent.LCS .CanvasSection-sm12{width:100%}@media (min-width:1024px){.CanvasComponent.LCS .CanvasSection-xl12{width:100%}}@media (min-width:1024px){.CanvasComponent.LCS .CanvasSection-xl11{width:91.66666666666666%}}@media (min-width:1024px){.CanvasComponent.LCS .CanvasSection-xl10{width:83.33333333333334%}}@media (min-width:1024px){.CanvasComponent.LCS .CanvasSection-xl9{width:75%}}@media (min-width:1024px){.CanvasComponent.LCS .CanvasSection-xl8{width:66.66666666666666%}}@media (min-width:1024px){.CanvasComponent.LCS .CanvasSection-xl7{width:58.333333333333336%}}@media (min-width:1024px){.CanvasComponent.LCS .CanvasSection-xl6{width:50%}}@media (min-width:1024px){.CanvasComponent.LCS .CanvasSection-xl5{width:41.66666666666667%}}@media (min-width:1024px){.CanvasComponent.LCS .CanvasSection-xl4{width:33.33333333333333%}}@media (min-width:1024px){.CanvasComponent.LCS .CanvasSection-xl3{width:25%}}@media (min-width:1024px){.CanvasComponent.LCS .CanvasSection-xl2{width:16.666666666666664%}}@media (min-width:1024px){.CanvasComponent.LCS .CanvasSection-xl1{width:8.333333333333332%}}@media screen and (min-width:1024px){.CanvasComponent.LCS .CanvasSection--edit{min-width:312px}.CanvasComponent.LCS .CanvasSection--edit:nth-child(n+2):before{content:\"\";position:absolute;height:100%;color:\"[theme:neutralTertiary, default: #a19f9d]\"}[dir=ltr] .CanvasComponent.LCS .CanvasSection--edit:nth-child(n+2):before{border-left:1px dashed}[dir=rtl] .CanvasComponent.LCS .CanvasSection--edit:nth-child(n+2):before{border-right:1px dashed}[dir=ltr] .CanvasComponent.LCS .CanvasSection--edit:nth-child(n+2):before{left:-1px}[dir=rtl] .CanvasComponent.LCS .CanvasSection--edit:nth-child(n+2):before{right:-1px}.CanvasComponent.LCS .CanvasSection--reflow{min-width:auto;width:100%}.CanvasComponent.LCS .CanvasSection--reflow:nth-child(n+2):before{content:\"\";left:0;right:0;width:100%;height:auto;border-bottom:1px dashed;border-left:none}}@media screen and (max-width:1023.99999px){.CanvasComponent.LCS .CanvasSection--edit:nth-child(n+2):before{content:\"\";position:absolute;left:0;right:0;width:100%;color:\"[theme:neutralTertiary, default: #a19f9d]\";border-bottom:1px dashed}}@media screen and (min-width:641px){.CanvasComponent.LCS .CanvasSection--read:not(.reduceFullWidthSpacing) .ControlZone{margin-top:24px}.CanvasComponent.LCS .CanvasSection--read:not(.reduceFullWidthSpacing) .ControlZone:last-of-type{margin-bottom:24px}}", ""]);


/***/ }),

/***/ "8umJ":
/*!******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/css-loader@3.2.1_webpack@4.44.2/node_modules/css-loader/dist/cjs.js!/agent/_work/1/s/common/temp/node_modules/.pnpm/postcss-loader@3.0.0/node_modules/postcss-loader/src??postcss!./lib/sp-canvas/canvas/canvasZone/CanvasZone.css ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../common/temp/node_modules/.pnpm/css-loader@3.2.1_webpack@4.44.2/node_modules/css-loader/dist/runtime/api.js */ "5ADk")(false);
// Module
exports.push([module.i, ".CanvasComponent.LCS .CanvasZoneContainer{margin-top:1px}.CanvasComponent.LCS .CanvasZoneContainer.CanvasZoneContainer--hintUpdate{position:relative}.CanvasComponent.LCS .CanvasZoneContainer.CanvasZoneContainer--read{margin-top:0}.CanvasComponent.LCS .CanvasZoneContainer .ControlZone:not(.ControlZone--selected):not(:focus) .CanvasControlToolbar.EaseAnimation{visibility:hidden;opacity:0}.CanvasComponent.LCS .CanvasZoneContainer .ControlZone:not(.ControlZone--selected):not(:focus) .CanvasControlToolbar:not(.EaseAnimation){display:none}.CanvasComponent.LCS .CanvasZoneContainer.CanvasZoneContainer--selected:before,.CanvasComponent.LCS .CanvasZoneContainer:not(.CanvasZoneContainer--read):hover:before{border:1px solid;box-sizing:border-box;content:\"\";width:100%;position:absolute;bottom:-1px;top:-1px}.CanvasComponent.LCS .CanvasZoneContainer .CanvasZoneToolbar{display:none}.CanvasComponent.LCS .CanvasZoneContainer:hover:before{color:\"[theme:neutralTertiary, default: #a19f9d]\"}.CanvasComponent.LCS .CanvasZoneContainer.CanvasZoneContainer--selected .CanvasZoneToolbar-root{position:absolute;top:16px;bottom:16px;height:calc(100% - 32px)}.CanvasComponent.LCS .CanvasZoneContainer.CanvasZoneContainer--selected .CanvasZoneToolbar{display:block}.CanvasComponent.LCS .CanvasZoneContainer.CanvasZoneContainer--selected:before{color:\"[theme:themePrimary, default: #0078d4]\"}.CanvasComponent.LCS .CanvasZoneContainer.CanvasZoneContainer--controlselected:before{color:\"[theme:neutralTertiary, default: #a19f9d]\"}.CanvasComponent.LCS .CanvasZone{max-width:1268px;padding:0 12px;margin:0}.CanvasComponent.LCS .CanvasZone.CanvasZone--read{margin-top:0}.CanvasComponent.LCS .CanvasZone:focus{outline:0}.CanvasComponent.LCS .CanvasZone.CanvasZone--centerAlign{margin:auto}.CanvasComponent.LCS .CanvasZone.CanvasZone--selected .CanvasSection--edit{min-height:160px}.CanvasComponent.LCS .CanvasZone.CanvasZone--selected .CanvasSection--edit.CanvasSection--divided:before{color:\"[theme:themePrimary, default: #0078d4]\";border-bottom:1px solid}[dir=ltr] .CanvasComponent.LCS .CanvasZone.CanvasZone--selected .CanvasSection--edit.CanvasSection--divided:before{border-left:1px solid}[dir=rtl] .CanvasComponent.LCS .CanvasZone.CanvasZone--selected .CanvasSection--edit.CanvasSection--divided:before{border-right:1px solid}@media screen and (-ms-high-contrast:active){.CanvasComponent.LCS .CanvasZone.CanvasZone--selected{border:3px dotted #1aebff;box-sizing:border-box}}@media screen and (-ms-high-contrast:black-on-white){.CanvasComponent.LCS .CanvasZone.CanvasZone--selected{border:3px dotted #37006e;box-sizing:border-box}}.CanvasComponent.LCS .CanvasZone.CanvasZone--controlSelected .CanvasSection--edit{min-height:160px}.CanvasComponent.LCS .CanvasZone.CanvasZone--controlSelected .CanvasSection--edit:before{color:\"[theme:neutralTertiary, default: #a19f9d]\";border-bottom:1px dashed}[dir=ltr] .CanvasComponent.LCS .CanvasZone.CanvasZone--controlSelected .CanvasSection--edit:before{border-left:1px dashed}[dir=rtl] .CanvasComponent.LCS .CanvasZone.CanvasZone--controlSelected .CanvasSection--edit:before{border-right:1px dashed}.CanvasComponent.LCS .CanvasZone.CanvasZone--controlSelected+button.CanvasToolboxHint{opacity:1}.CanvasComponent.LCS .CanvasZone.CanvasZone--fullWidth{max-width:100%;padding:0}.CanvasComponent.LCS .CanvasZone.CanvasZone--fullWidth .CanvasSection{padding-left:0;padding-right:0}.CanvasComponent.LCS .CanvasZone.CanvasZone--fullWidth.CanvasZone--fullWidth--read{margin-top:0}[dir=ltr] .CanvasComponent.LCS .CanvasZone.CanvasZone--fullWidth .CanvasToolboxHint-plusButtonWrapperOriginal{padding-left:32px}[dir=rtl] .CanvasComponent.LCS .CanvasZone.CanvasZone--fullWidth .CanvasToolboxHint-plusButtonWrapperOriginal{padding-right:32px}[dir=ltr] .CanvasComponent.LCS .CanvasZone.CanvasZone--fullWidth .CanvasToolboxHint-plusButtonWrapperOriginal{padding-right:16px}[dir=rtl] .CanvasComponent.LCS .CanvasZone.CanvasZone--fullWidth .CanvasToolboxHint-plusButtonWrapperOriginal{padding-left:16px}.CanvasComponent.LCS .CanvasZone.CanvasZone--fullWidth .centerAlign{margin:auto}.CanvasComponent.LCS .CanvasZone.CanvasZone--fullWidth .CanvasControlToolbar{border:1px solid \"[theme:neutrallight, default: #edebe9]\";top:8px}[dir=ltr] .CanvasComponent.LCS .CanvasZone.CanvasZone--fullWidth .CanvasControlToolbar{left:8px}[dir=rtl] .CanvasComponent.LCS .CanvasZone.CanvasZone--fullWidth .CanvasControlToolbar{right:8px}[dir=ltr] .CanvasComponent.LCS .CanvasZone.CanvasZone--fullWidth .CanvasControlToolbar{padding-right:2px}[dir=rtl] .CanvasComponent.LCS .CanvasZone.CanvasZone--fullWidth .CanvasControlToolbar{padding-left:2px}.CanvasComponent.LCS .CanvasZone .CanvasZoneToolbar{width:32px}[dir=ltr] .CanvasComponent.LCS .CanvasZone .CanvasZoneToolbar:not(.AlignedToolbar){left:-32px}[dir=rtl] .CanvasComponent.LCS .CanvasZone .CanvasZoneToolbar:not(.AlignedToolbar){right:-32px}.CanvasComponent.LCS .CanvasZone .CanvasZoneToolbar:not(.CanvasZoneToolbar-sticky){position:absolute}.CanvasComponent.LCS .CanvasZone .CanvasZoneToolbar.FixedToolbar{margin-top:0;position:fixed;left:auto;right:auto}.CanvasComponent.LCS .CanvasZone .CanvasZoneToolbar .CanvasControlToolbar-item{background-color:transparent;color:\"[theme:bodyText, default: #323130]\";height:32px;min-width:32px;width:32px}.CanvasComponent.LCS .CanvasZone .CanvasZoneToolbar .CanvasControlToolbar-item:focus,.CanvasComponent.LCS .CanvasZone .CanvasZoneToolbar .CanvasControlToolbar-item:hover{background-color:\"[theme:themePrimary, default: #0078d4]\";color:\"[theme:white, default: #ffffff]\";cursor:pointer}.CanvasComponent.LCS .CanvasZone .CanvasZoneToolbar-sticky{position:-webkit-sticky;position:sticky;top:0;margin-top:0}[dir=ltr] .CanvasComponent.LCS .CanvasZone .CanvasZoneToolbar-sticky{left:0}[dir=rtl] .CanvasComponent.LCS .CanvasZone .CanvasZoneToolbar-sticky{right:0}.CanvasComponent.LCS .CanvasZone .CanvasZoneSelectable{position:absolute;top:0;height:100%;width:32px}[dir=ltr] .CanvasComponent.LCS .CanvasZone .CanvasZoneSelectable{left:-32px}[dir=rtl] .CanvasComponent.LCS .CanvasZone .CanvasZoneSelectable{right:-32px}.CanvasComponent.LCS .CanvasZone.CanvasZone--fullWidth--read .ControlZone{margin-top:0;margin-bottom:0}@media screen and (min-width:1024px){.CanvasComponent.LCS .CanvasZone--edit{display:-ms-flexbox;display:flex}.CanvasComponent.LCS .CanvasZone--edit.CanvasZone--empty{height:320px}.CanvasComponent.LCS .CanvasZone--edit.CanvasZone--fullWidth{max-width:100%;padding:0;min-height:320px}.CanvasComponent.LCS .CanvasZone.CanvasZone--alignment{display:-ms-flexbox;display:flex}.CanvasComponent.LCS .CanvasZone.CanvasZone--reflow{display:block}}@media screen and (min-width:641px){.CanvasComponent.LCS .CanvasZone{padding:0 16px}[dir=ltr] .CanvasComponent.LCS .CanvasZone.CanvasZone--edit{padding-left:40px}[dir=rtl] .CanvasComponent.LCS .CanvasZone.CanvasZone--edit{padding-right:40px}[dir=ltr] .CanvasComponent.LCS .CanvasZone.CanvasZone--edit{padding-right:16px}[dir=rtl] .CanvasComponent.LCS .CanvasZone.CanvasZone--edit{padding-left:16px}.CanvasComponent.LCS .CanvasZone.CanvasZone--edit.CanvasZone--fullWidth{max-width:100%;padding:0;min-height:320px}}@media print{.CanvasComponent.LCS .CanvasZone{display:-ms-flexbox;display:flex}}.CanvasComponent.LCS .row{margin:0 -8px;box-sizing:border-box;zoom:1}.CanvasComponent.LCS .row:after,.CanvasComponent.LCS .row:before{display:table;content:\"\";line-height:0}.CanvasComponent.LCS .row:after{clear:both}.CanvasComponent.LCS .CanvasZone--noMargin{margin:0}", ""]);


/***/ }),

/***/ "9S6n":
/*!**********************************************************************************!*\
  !*** ./lib/sp-canvas/canvas/editChunk/canvasDragZone/CanvasDragZoneConstants.js ***!
  \**********************************************************************************/
/*! exports provided: CanvasDragZoneConstants */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanvasDragZoneConstants", function() { return CanvasDragZoneConstants; });
/**
 * Canvas Drag zone constants
 * @internal
 */
var CanvasDragZoneConstants = /** @class */ (function () {
    function CanvasDragZoneConstants() {
    }
    // To align the drag zone horizontal line with zone line
    CanvasDragZoneConstants.LINE_OFFSET_BOTTOM = -1;
    CanvasDragZoneConstants.LINE_OFFSET_TOP = 3;
    CanvasDragZoneConstants.SECTION_DROP_HINT_OFFSET_TOP = -1;
    CanvasDragZoneConstants.WEBPART_DROP_HINT_OFFSET_TOP = 11;
    CanvasDragZoneConstants.WEBPART_DROP_HINT_OFFSET_BOTTOM = 10;
    CanvasDragZoneConstants.controlZoneDragTag = 'ControlZone';
    CanvasDragZoneConstants.dropLocationThemeEmphasisName = 'hint--withTheme';
    CanvasDragZoneConstants.fullWidthSectionTag = 'CanvasFullWidth';
    CanvasDragZoneConstants.layoutDragTag = 'CanvasLayout';
    CanvasDragZoneConstants.sectionDragTag = 'CanvasSection';
    CanvasDragZoneConstants.webPartButtonDragHandleTag = 'WebpartButtonHandle';
    CanvasDragZoneConstants.webPartBorderDragHandleTag = 'WebpartBorderHandle';
    CanvasDragZoneConstants.webPartInsideDragHandleTag = 'WebpartInsideHandle';
    CanvasDragZoneConstants.zoneDragHandleTag = 'ZoneHandle';
    CanvasDragZoneConstants.zoneDragTag = 'CanvasZone';
    // To add flight data to Qos monitor
    CanvasDragZoneConstants.FLIGHT_OFF_TEXT = 'FlightOff';
    CanvasDragZoneConstants.FLIGHT_ON_TEXT = 'FlightOn';
    return CanvasDragZoneConstants;
}());



/***/ }),

/***/ "9s5w":
/*!*************************************************!*\
  !*** ./lib/sp-canvas/canvas/editChunk/index.js ***!
  \*************************************************/
/*! exports provided: DeferredCanvasToolboxHint, DeferredCanvasDragZone, DeferredNarrowModeDialog, canvasZonePropertyPaneControlLoader, DeferredSPRte, DeferredSPRteTouchDevice, DeferredToolbar, canvasDiffLoader, DeferredDiffIndicator, DeferredDiffMessage, DeferredControlDiffIndicator, deferredGetDomDiffStrings, CanvasDragZoneConstants, DeferredCanvasToolbox, DeferredToolboxComponent, DeferredToolboxFullBleedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _canvasToolboxHint_DeferredCanvasToolboxHint__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./canvasToolboxHint/DeferredCanvasToolboxHint */ "aKqg");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DeferredCanvasToolboxHint", function() { return _canvasToolboxHint_DeferredCanvasToolboxHint__WEBPACK_IMPORTED_MODULE_0__["DeferredCanvasToolboxHint"]; });

/* harmony import */ var _canvasDragZone_DeferredCanvasDragZone__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./canvasDragZone/DeferredCanvasDragZone */ "fT2f");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DeferredCanvasDragZone", function() { return _canvasDragZone_DeferredCanvasDragZone__WEBPACK_IMPORTED_MODULE_1__["DeferredCanvasDragZone"]; });

/* harmony import */ var _narrowModeDialog_DeferredNarrowModeDialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./narrowModeDialog/DeferredNarrowModeDialog */ "85cM");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DeferredNarrowModeDialog", function() { return _narrowModeDialog_DeferredNarrowModeDialog__WEBPACK_IMPORTED_MODULE_2__["DeferredNarrowModeDialog"]; });

/* harmony import */ var _canvasZonePropertyPane_canvasZonePropertyPaneControlLoader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./canvasZonePropertyPane/canvasZonePropertyPaneControlLoader */ "OSqv");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "canvasZonePropertyPaneControlLoader", function() { return _canvasZonePropertyPane_canvasZonePropertyPaneControlLoader__WEBPACK_IMPORTED_MODULE_3__["canvasZonePropertyPaneControlLoader"]; });

/* harmony import */ var _sprte_DeferredSPRte__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sprte/DeferredSPRte */ "nrsI");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DeferredSPRte", function() { return _sprte_DeferredSPRte__WEBPACK_IMPORTED_MODULE_4__["DeferredSPRte"]; });

/* harmony import */ var _sprte_DeferredSPRteTouchDevice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sprte/DeferredSPRteTouchDevice */ "cPvr");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DeferredSPRteTouchDevice", function() { return _sprte_DeferredSPRteTouchDevice__WEBPACK_IMPORTED_MODULE_5__["DeferredSPRteTouchDevice"]; });

/* harmony import */ var _toolbar_DeferredToolbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./toolbar/DeferredToolbar */ "XaoL");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DeferredToolbar", function() { return _toolbar_DeferredToolbar__WEBPACK_IMPORTED_MODULE_6__["DeferredToolbar"]; });

/* harmony import */ var _canvasDiff_DeferredCanvasDiff__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./canvasDiff/DeferredCanvasDiff */ "o0cL");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "canvasDiffLoader", function() { return _canvasDiff_DeferredCanvasDiff__WEBPACK_IMPORTED_MODULE_7__["canvasDiffLoader"]; });

/* harmony import */ var _canvasDiff_DeferredDiffIndicator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./canvasDiff/DeferredDiffIndicator */ "kGU/");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DeferredDiffIndicator", function() { return _canvasDiff_DeferredDiffIndicator__WEBPACK_IMPORTED_MODULE_8__["DeferredDiffIndicator"]; });

/* harmony import */ var _canvasDiff_DeferredDiffMessage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./canvasDiff/DeferredDiffMessage */ "kel/");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DeferredDiffMessage", function() { return _canvasDiff_DeferredDiffMessage__WEBPACK_IMPORTED_MODULE_9__["DeferredDiffMessage"]; });

/* harmony import */ var _canvasDiff_DeferredControlDiffIndicator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./canvasDiff/DeferredControlDiffIndicator */ "VTSE");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DeferredControlDiffIndicator", function() { return _canvasDiff_DeferredControlDiffIndicator__WEBPACK_IMPORTED_MODULE_10__["DeferredControlDiffIndicator"]; });

/* harmony import */ var _canvasDiff_DeferredGetDomDiffStrings__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./canvasDiff/DeferredGetDomDiffStrings */ "G89h");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deferredGetDomDiffStrings", function() { return _canvasDiff_DeferredGetDomDiffStrings__WEBPACK_IMPORTED_MODULE_11__["deferredGetDomDiffStrings"]; });

/* harmony import */ var _canvasDragZone_CanvasDragZoneConstants__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./canvasDragZone/CanvasDragZoneConstants */ "9S6n");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CanvasDragZoneConstants", function() { return _canvasDragZone_CanvasDragZoneConstants__WEBPACK_IMPORTED_MODULE_12__["CanvasDragZoneConstants"]; });

/* harmony import */ var _canvasToolbox_DeferredCanvasToolbox__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./canvasToolbox/DeferredCanvasToolbox */ "7JSu");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DeferredCanvasToolbox", function() { return _canvasToolbox_DeferredCanvasToolbox__WEBPACK_IMPORTED_MODULE_13__["DeferredCanvasToolbox"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DeferredToolboxComponent", function() { return _canvasToolbox_DeferredCanvasToolbox__WEBPACK_IMPORTED_MODULE_13__["DeferredToolboxComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DeferredToolboxFullBleedComponent", function() { return _canvasToolbox_DeferredCanvasToolbox__WEBPACK_IMPORTED_MODULE_13__["DeferredToolboxFullBleedComponent"]; });

/**
 * All the code that should be deferred to edit mode are located in editChunk folder.
 * They will be bundled in to one sp-canvas-edit chunk which will be loaded in edit mode on demand.
 */












// Others that needs to be in main bundle such as constants and interfaces.




/***/ }),

/***/ "ADOM":
/*!******************************************************!*\
  !*** ./lib/sp-canvas/canvas/canvas/LayoutCanvas.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../../../../common/temp/node_modules/.pnpm/css-loader@3.2.1_webpack@4.44.2/node_modules/css-loader/dist/cjs.js!../../../../../../common/temp/node_modules/.pnpm/postcss-loader@3.0.0/node_modules/postcss-loader/src??postcss!./LayoutCanvas.css */ "d8u6");
var loader = __webpack_require__(/*! @microsoft/load-themed-styles */ "jOlS");

if(typeof content === "string") content = [[module.i, content]];

// add the styles to the DOM
for (var i = 0; i < content.length; i++) loader.loadStyles(content[i][1], true);

if(content.locals) module.exports = content.locals;

/***/ }),

/***/ "AS1P":
/*!*****************************************************************!*\
  !*** ./lib/sp-canvas/canvas/canvasComponent/CanvasComponent.js ***!
  \*****************************************************************/
/*! exports provided: CanvasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanvasComponent", function() { return CanvasComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @microsoft/sp-diagnostics */ "ut3N");
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @microsoft/office-ui-fabric-react-bundle */ "KL1q");
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ms/odsp-utilities-bundle */ "y88i");
/* harmony import */ var _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ms/sp-telemetry */ "2q6Q");
/* harmony import */ var _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _editChunk__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../editChunk */ "9s5w");
/* harmony import */ var _canvasLayout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../canvasLayout */ "yPt8");
/* harmony import */ var _CreateEmptyZoneLayout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./CreateEmptyZoneLayout */ "EEYx");
/* harmony import */ var _canvasZone__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../canvasZone */ "yf/r");
/* harmony import */ var _CanvasVerticalSection__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../CanvasVerticalSection */ "DlB5");
/* harmony import */ var _common_Flights__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../common/Flights */ "qRiB");
/* harmony import */ var _common_Constants__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../common/Constants */ "+zV1");
/* harmony import */ var _loc_CanvasStrings_resx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../loc/CanvasStrings.resx */ "indE");
var _loc_CanvasStrings_resx__WEBPACK_IMPORTED_MODULE_14___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../loc/CanvasStrings.resx */ "indE", 1);
/* harmony import */ var _CanvasComponent_scss__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./CanvasComponent.scss */ "ox2b");
/**
 * @copyright (c) Microsoft Corporation. All rights reserved.
 * Root React component of canvas.
 */

















// tslint:disable-next-line:variable-name
var DeferredDashCardCanvas = react__WEBPACK_IMPORTED_MODULE_1__["lazy"](function () { return __webpack_require__.e(/*! import() | sp-canvas-dash-card */ "sp-canvas-dash-card").then(__webpack_require__.bind(null, /*! ./DashCardCanvas */ "2nlv")); });
var CanvasComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(CanvasComponent, _super);
    function CanvasComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._zonesMap = new Map();
        _this._narrowMediaQuery = window.matchMedia('screen and (max-width: 640px)');
        _this._canvasMainRef = react__WEBPACK_IMPORTED_MODULE_1__["createRef"]();
        _this._canvasWrapperRef = react__WEBPACK_IMPORTED_MODULE_1__["createRef"]();
        _this._rootRef = function (instance) {
            var store = _this.props.store;
            if (instance) {
                store.canvasElement = instance;
                store.scrollableParent = _this._findScrollableParent(instance);
            }
        };
        _this._getZoneComponentRefFunction = function (curZone) {
            return function (zoneControl) {
                // old ref will be called with null arg when unmounting
                if (zoneControl) {
                    _this._zonesMap.set(curZone.elementKey, zoneControl);
                }
                else {
                    _this._zonesMap.delete(curZone.elementKey);
                }
            };
        };
        _this._handleFocus = function (event) {
            if (_this._handleTargetFocusOrDrag(event.target)) {
                _this.props.store.canvasFields.render();
            }
        };
        _this._handleMouseEnter = function (event) {
            if (event.buttons === 1) {
                _this._handleTargetFocusOrDrag(event.target);
            }
        };
        _this._handleTargetFocusOrDrag = function (targetElement) {
            var _a;
            if (_this.props.store.displayMode === _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_4__["DisplayMode"].Edit) {
                var store = _this.props.store;
                if ((_a = _this._canvasWrapper) === null || _a === void 0 ? void 0 : _a.contains(targetElement)) {
                    var layoutIndex = _this._canvasMain && _this._canvasMain.contains(targetElement)
                        ? _canvasLayout__WEBPACK_IMPORTED_MODULE_8__["CanvasLayout"].firstLayoutIndex
                        : _canvasLayout__WEBPACK_IMPORTED_MODULE_8__["CanvasLayout"].verticalLayoutIndex;
                    if (store.selectedLayoutIndex !== layoutIndex) {
                        store.selectedLayoutIndex = layoutIndex;
                        return true;
                    }
                }
            }
            return false;
        };
        _this._handleNarrowMediaQuery = function () {
            _this.props.store.isNarrowMode = _this._narrowMediaQuery.matches;
        };
        return _this;
    }
    /**
     * It usually means the DOM elements have been manipulated and React cannot update the component.
     * We will try to remount the component one time to make things right.
     */
    CanvasComponent.prototype.componentDidCatch = function (error, errorInfo) {
        if (!CanvasComponent._hasMountConsistentErrorLogged) {
            var qos = new _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__["_QosMonitor"]('CanvasComponent.Mount');
            var _a = this.props.store, canvasFields = _a.canvasFields, displayMode = _a.displayMode;
            // tslint:disable-next-line:no-any
            var extraData = {
                componentStack: errorInfo.componentStack,
                displayMode: displayMode
            };
            if (!this.props.hasTriedReload) {
                canvasFields.disposeAndRender();
                canvasFields.isDOMManipulated = true;
                qos.writeExpectedFailure('OneTimeFailure', error, extraData);
            }
            else {
                CanvasComponent._hasMountConsistentErrorLogged = true;
                qos.writeUnexpectedFailure("ConsistentFailure." + (displayMode === _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_4__["DisplayMode"].Read ? 'Read' : 'Edit'), error, extraData);
            }
        }
    };
    CanvasComponent.prototype.componentDidMount = function () {
        var qos = new _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__["_QosMonitor"]('CanvasComponent.Mount');
        _super.prototype.componentDidMount.call(this);
        var store = this.props.store;
        _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_6__["_PerformanceLogger"].setPerformanceProperty('canvasComponentMounted');
        _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__["_TraceLogger"].logVerbose(CanvasComponent._logSource, "CanvasComponent is mounted");
        store.mainCanvasElement = this._canvasMain;
        this._narrowMediaQuery.addListener(this._handleNarrowMediaQuery);
        if (store.canvasFields.onCanvasComponentMounted) {
            store.canvasFields.onCanvasComponentMounted();
        }
        qos.writeSuccess();
    };
    CanvasComponent.prototype.componentWillUnmount = function () {
        _super.prototype.componentWillUnmount.call(this);
        var store = this.props.store;
        var propertyPaneController = store.propertyPaneController;
        this._narrowMediaQuery.removeListener(this._handleNarrowMediaQuery);
        store.clearRevealObserver();
        if (!_common_Flights__WEBPACK_IMPORTED_MODULE_12__["Flights"].isCanvasReadOnlyEnabled() && propertyPaneController && propertyPaneController.isOpen()) {
            propertyPaneController.requestAction('', 'Close');
        }
    };
    CanvasComponent.prototype.componentDidUpdate = function () {
        var store = this.props.store;
        if (!store.mainCanvasElement) {
            store.mainCanvasElement = this._canvasMain;
        }
    };
    CanvasComponent.prototype.render = function () {
        var _a;
        _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__["_TraceLogger"].logVerbose(CanvasComponent._logSource, "CanvasComponent _render() is called");
        var store = this.props.store;
        var displayMode = store.displayMode;
        var isEdit = displayMode === _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_4__["DisplayMode"].Edit;
        /**
         * Only set focus on a hint during the render after control is deleted.
         */
        store.deletedControlLayout = _canvasLayout__WEBPACK_IMPORTED_MODULE_8__["undefinedControlPosition"];
        var renderCanvasDragZone = (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_editChunk__WEBPACK_IMPORTED_MODULE_7__["DeferredCanvasDragZone"], { isEdit: isEdit, store: store, cultureName: this.props.cultureName }, this._canvasContent));
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: 'CanvasComponent LCS', key: (_a = store.canvasFields.viewPortManager) === null || _a === void 0 ? void 0 : _a.iterationIndex, "data-automation-id": 'Canvas', ref: this._rootRef },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_editChunk__WEBPACK_IMPORTED_MODULE_7__["DeferredNarrowModeDialog"], { isEnabled: isEdit && store.isNarrowMode }),
            renderCanvasDragZone));
    };
    CanvasComponent.prototype._getClassName = function (className) {
        var _a;
        var shouldResize = this.props.store.shouldResize(_canvasLayout__WEBPACK_IMPORTED_MODULE_8__["CanvasLayout"].firstLayoutIndex);
        return Object(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_3__["css"])(className, (_a = {},
            _a[className + "--reflow"] = shouldResize,
            _a));
    };
    Object.defineProperty(CanvasComponent.prototype, "_isVSPresent", {
        get: function () {
            return this.props.store.canvasFields.isVerticalSectionPresent;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CanvasComponent.prototype, "_canvasWrapper", {
        get: function () {
            return this._canvasWrapperRef.current;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CanvasComponent.prototype, "_canvasMain", {
        get: function () {
            return this._canvasMainRef.current;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CanvasComponent.prototype, "_zones", {
        get: function () {
            var store = this.props.store;
            var canvasLayout = store.canvasLayouts.get(_canvasLayout__WEBPACK_IMPORTED_MODULE_8__["CanvasLayout"].firstLayoutIndex);
            return canvasLayout ? canvasLayout.zones : [];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CanvasComponent.prototype, "_zoneComponents", {
        get: function () {
            var _this = this;
            var store = this.props.store;
            var displayMode = store.displayMode;
            var deletedControlLayout = store.deletedControlLayout;
            var selectedLayout = store.canvasLayout.fetchCurrentSelection();
            var shouldCenterAlign = store.shouldCenterAlign;
            var isEdit = displayMode === _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_4__["DisplayMode"].Edit;
            // Iterate over the canvas zones and create layout zone components
            var zoneComponents = [];
            var zones = this._zones;
            var numZones = zones.length;
            var shouldResize = store.shouldResize(_canvasLayout__WEBPACK_IMPORTED_MODULE_8__["CanvasLayout"].firstLayoutIndex);
            zones.forEach(function (curZone, curIdx) {
                if (isEdit || !curZone.isEmpty()) {
                    zoneComponents.push(react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_canvasZone__WEBPACK_IMPORTED_MODULE_10__["CanvasZone"], { componentRef: _this._getZoneComponentRefFunction(curZone), fullWidth: _this._isFullWidthSectionEnabled(curZone), selectedPosition: selectedLayout, key: curZone.id, shouldCenterAlign: shouldCenterAlign, zone: curZone, layoutType: curZone.layoutType, zoneLabel: _this._getZoneAriaLabel(curIdx + 1, numZones), emphasis: curZone.emphasis, layoutIndex: _canvasLayout__WEBPACK_IMPORTED_MODULE_8__["CanvasLayout"].firstLayoutIndex, shouldResize: shouldResize, store: store, displayMode: store.displayMode }));
                }
                var nextZoneIndex = curIdx + 1 === numZones
                    ? // This is the last zone, create a new Zone by incrementing the zoneIdx
                        curZone.index + 1
                    : // Get the next zone index
                        zones[curIdx + 1].index;
                var nextZoneLayout = Object(_CreateEmptyZoneLayout__WEBPACK_IMPORTED_MODULE_9__["CreateEmptyZoneLayout"])(nextZoneIndex);
                var zoneBeforeState = _this._getZoneSelectionState(selectedLayout, zones[curIdx].index, _canvasLayout__WEBPACK_IMPORTED_MODULE_8__["CanvasLayout"].firstLayoutIndex);
                var nextZonePart = zones[curIdx + 1];
                var zoneAfterState = curIdx < zones.length - 1
                    ? _this._getZoneSelectionState(selectedLayout, nextZonePart.index, nextZonePart.layoutIndex)
                    : 1 /* None */;
                // since the hint is at the intersection of two zones we need to make sure that the zone with the
                // higher precedence state is the one that imposes its state on the hint
                var adjacentZoneState = Math.max(zoneBeforeState, zoneAfterState);
                zoneComponents.push(react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_editChunk__WEBPACK_IMPORTED_MODULE_7__["DeferredCanvasToolboxHint"], { adjacentZoneState: adjacentZoneState, ariaLabel: _loc_CanvasStrings_resx__WEBPACK_IMPORTED_MODULE_14__["ToolboxHintSectionTitleOnlyLayouts"], isVisible: true, key: "hint." + nextZoneIndex, layout: nextZoneLayout, shouldCenterAlign: shouldCenterAlign, shouldFocus: deletedControlLayout.zoneIndex === nextZoneIndex, type: 1 /* Zone */, store: store, isVSPresent: _this._isVSPresent }));
            });
            // Add an empty CanvasZone to always render a web part hint at the end of the Canvas
            if (isEdit) {
                var latestZoneIndex = numZones > 0 ? zones[numZones - 1].index + 1 : _canvasLayout__WEBPACK_IMPORTED_MODULE_8__["CanvasLayout"].firstLayoutIndex;
                // Specify Non-0 section index so it will render web part hint instead of section hint
                var emptySectionIndex = 1;
                var emptyCanvasSectionLayout = Object(_CreateEmptyZoneLayout__WEBPACK_IMPORTED_MODULE_9__["CreateEmptyZoneLayout"])(latestZoneIndex, emptySectionIndex);
                var emptyHintClassName = Object(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_3__["css"])('EmptyCanvasHint', 'withVerticalSection');
                zoneComponents.push(react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: numZones === 0 ? emptyHintClassName : undefined, key: 'LastHint' },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_canvasZone__WEBPACK_IMPORTED_MODULE_10__["EmptyCanvasZone"], { hintLayout: emptyCanvasSectionLayout, shouldCenterAlign: shouldCenterAlign, store: store })));
            }
            return zoneComponents;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CanvasComponent.prototype, "_canvasContent", {
        get: function () {
            var store = this.props.store;
            var displayMode = store.displayMode;
            var shouldRenderWithVerticalSection = store.canvasFields.isVerticalSectionPresent;
            var deletedControlLayout = store.deletedControlLayout;
            var selectedLayout = store.canvasLayout.fetchCurrentSelection();
            var shouldCenterAlign = store.shouldCenterAlign;
            var isEdit = displayMode === _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_4__["DisplayMode"].Edit;
            var zones = this._zones;
            var shouldResize = store.shouldResize(_canvasLayout__WEBPACK_IMPORTED_MODULE_8__["CanvasLayout"].firstLayoutIndex);
            var shouldUpdateCanvasTop = !store.canvasFields.isVerticalSectionPresent &&
                !!store.isRootScrollableElement &&
                store.displayMode === _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_4__["DisplayMode"].Edit;
            var className = Object(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_3__["css"])('Canvas', 'grid', 'Canvas--withLayout', {
                'Canvas--edit': isEdit,
                UpdateEditTop: shouldUpdateCanvasTop
            });
            var firstZoneIdx = zones.length > 0 ? zones[0].index : _canvasLayout__WEBPACK_IMPORTED_MODULE_8__["CanvasLayout"].firstLayoutIndex;
            var firstZoneLayout = Object(_CreateEmptyZoneLayout__WEBPACK_IMPORTED_MODULE_9__["CreateEmptyZoneLayout"])(firstZoneIdx);
            var toolBoxHintHasFocus = deletedControlLayout.zoneIndex === firstZoneLayout.zoneIndex;
            var canvasContent = _common_Flights__WEBPACK_IMPORTED_MODULE_12__["Flights"].isMEEDashboardEnabled() && store.pageLayoutType === _common_Constants__WEBPACK_IMPORTED_MODULE_13__["PageLayoutName"].Dashboard ? (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Suspense"], { fallback: false },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](DeferredDashCardCanvas, { className: className, zone: zones[0], store: store }))) : (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: className, role: isEdit ? 'application' : undefined, "data-drag-tag": _editChunk__WEBPACK_IMPORTED_MODULE_7__["CanvasDragZoneConstants"].layoutDragTag },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_editChunk__WEBPACK_IMPORTED_MODULE_7__["DeferredCanvasToolboxHint"], { adjacentZoneState: zones.length > 0
                        ? this._getZoneSelectionState(selectedLayout, zones[0].index, _canvasLayout__WEBPACK_IMPORTED_MODULE_8__["CanvasLayout"].firstLayoutIndex)
                        : 1 /* None */, ariaLabel: _loc_CanvasStrings_resx__WEBPACK_IMPORTED_MODULE_14__["ToolboxHintSectionTitleOnlyLayouts"], isVisible: true, layout: firstZoneLayout, shouldCenterAlign: shouldCenterAlign, shouldFocus: toolBoxHintHasFocus, type: 1 /* Zone */, store: store, isVSPresent: this._isVSPresent }),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { "data-sp-fre-id": 'sp-fre-canvas-1', "data-offset-left": '-28px', "data-offset-top": '-40px' }),
                this._zoneComponents));
            var withVerticalSection = shouldRenderWithVerticalSection && !store.canvasFields.isFullWidthSectionPresent;
            var wrapperClassName = Object(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_3__["css"])(this._getClassName('CanvasComponentWrapper'), {
                CenterAligned: store.shouldCenterAlign,
                hasSmallerBreakpoint: _common_Flights__WEBPACK_IMPORTED_MODULE_12__["Flights"].isSmallerVerticalSectionsBreakpoint()
            });
            var wrapperProps = withVerticalSection
                ? {
                    className: wrapperClassName,
                    onFocus: this._handleFocus,
                    onMouseEnter: this._handleMouseEnter,
                    ref: this._canvasWrapperRef
                }
                : {};
            var canvasComponentMainClassName = Object(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_3__["css"])(this._getClassName('CanvasComponentMain'), {
                isEdit: displayMode === _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_4__["DisplayMode"].Edit
            });
            var canvasLayoutDataAutomationId = 'CanvasLayout';
            var canvasMainProps = withVerticalSection
                ? {
                    className: canvasComponentMainClassName,
                    ref: this._canvasMainRef,
                    'data-automation-id': canvasLayoutDataAutomationId
                }
                : {};
            canvasContent = (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, wrapperProps),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, canvasMainProps), canvasContent),
                withVerticalSection && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: Object(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_3__["css"])('CanvasVerticalSectionContainer', {
                        isEdit: displayMode === _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_4__["DisplayMode"].Edit,
                        'CanvasVerticalSectionContainer--reflow': shouldResize
                    }), "data-drag-tag": _editChunk__WEBPACK_IMPORTED_MODULE_7__["CanvasDragZoneConstants"].layoutDragTag, "data-automation-id": canvasLayoutDataAutomationId },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_CanvasVerticalSection__WEBPACK_IMPORTED_MODULE_11__["CanvasVerticalSection"], { layoutIndex: _canvasLayout__WEBPACK_IMPORTED_MODULE_8__["CanvasLayout"].verticalLayoutIndex, store: store })))));
            return canvasContent;
        },
        enumerable: true,
        configurable: true
    });
    CanvasComponent.prototype._getZoneAriaLabel = function (zoneIndex, zonesLength) {
        return _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_5__["StringHelper"].format(_loc_CanvasStrings_resx__WEBPACK_IMPORTED_MODULE_14__["SectionPositionAriaLabel"], zoneIndex, zonesLength);
    };
    CanvasComponent.prototype._isFullWidthSectionEnabled = function (zone) {
        return zone.sections[0] && zone.sections[0].factor === 0 && this.props.store.siteSupportsFullWidth;
    };
    CanvasComponent.prototype._getZoneSelectionState = function (selectedControlPosition, zoneIndex, layoutIndex) {
        if (!selectedControlPosition) {
            return 1 /* None */;
        }
        var isZoneSelected = selectedControlPosition.zoneIndex === zoneIndex;
        if (layoutIndex) {
            isZoneSelected = isZoneSelected && selectedControlPosition.layoutIndex === layoutIndex;
        }
        var isZoneActive = Boolean(selectedControlPosition.controlIndex) && isZoneSelected;
        // active > selected > focused. Keep these in order
        if (isZoneActive) {
            return 2 /* Active */;
        }
        if (isZoneSelected) {
            return 3 /* Selected */;
        }
        return 1 /* None */;
    };
    CanvasComponent.prototype._findScrollableParent = function (canvasElement) {
        return (this._findScrollableParentOptimized(canvasElement) || this._findScrollableParentNormal(canvasElement));
    };
    /**
     * Find the optimized scrollable parent.
     * @param canvasElement - From which to find scrollable parent.
     * @returns - The optimized scrollable parent or undefined if not found.
     */
    CanvasComponent.prototype._findScrollableParentOptimized = function (canvasElement) {
        var DATA_IS_SCROLLABLE_ATTRIBUTE = 'data-is-scrollable';
        var canvasContainer = canvasElement;
        while (canvasContainer && canvasContainer.tagName !== 'BODY') {
            canvasContainer = canvasContainer.parentElement;
            if (canvasContainer && canvasContainer.getAttribute(DATA_IS_SCROLLABLE_ATTRIBUTE) === 'true') {
                return canvasContainer;
            }
        }
        return undefined;
    };
    /**
     * Find the scrollable parent by checking overflow-y attribute.
     * Return BODY element if no such elements.
     *
     * @param canvasElement - From which to find scrollable parent.
     * @returns - The scrollable parent that always exists as long as the canvasElement is attached to DOM.
     */
    CanvasComponent.prototype._findScrollableParentNormal = function (canvasElement) {
        var canvasContainer = canvasElement;
        while (canvasContainer && canvasContainer.tagName !== 'BODY') {
            if (!canvasContainer.parentElement) {
                _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__["_TraceLogger"].logError(CanvasComponent._logSource, new Error('Cannot find scrollable parent for canvasElement'));
                return canvasContainer;
            }
            else {
                canvasContainer = canvasContainer.parentElement;
                var overflowY = window.getComputedStyle(canvasContainer)['overflow-y'];
                if (overflowY === 'scroll' || overflowY === 'auto') {
                    return canvasContainer;
                }
            }
        }
        return canvasContainer;
    };
    CanvasComponent._logSource = _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__["_LogSource"].create('CanvasComponent');
    CanvasComponent._hasMountConsistentErrorLogged = false;
    return CanvasComponent;
}(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_3__["BaseComponent"]));



/***/ }),

/***/ "AqUB":
/*!***************************************************!*\
  !*** ./lib/sp-canvas/a11y/CanvasA11yConstants.js ***!
  \***************************************************/
/*! exports provided: canvasA11yClasses, getControlZoneA11yId, getCanvasZoneA11yId */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "canvasA11yClasses", function() { return canvasA11yClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getControlZoneA11yId", function() { return getControlZoneA11yId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCanvasZoneA11yId", function() { return getCanvasZoneA11yId; });
var canvasA11yClasses = {
    toolboxHint: 'ToolboxHint'
};
function getControlZoneA11yId(controlId) {
    return "ControlZone_" + controlId;
}
function getCanvasZoneA11yId(zoneIndex) {
    return "CanvasZone_" + zoneIndex;
}


/***/ }),

/***/ "BI4S":
/*!***************************************************!*\
  !*** ../sp-rte/lib/rte/ckeditor/CKTextEditor.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../../../common/temp/node_modules/.pnpm/css-loader@3.2.1_webpack@4.44.2/node_modules/css-loader/dist/cjs.js!../../../../../common/temp/node_modules/.pnpm/postcss-loader@3.0.0/node_modules/postcss-loader/src??postcss!./CKTextEditor.css */ "80P6");
var loader = __webpack_require__(/*! @microsoft/load-themed-styles */ "jOlS");

if(typeof content === "string") content = [[module.i, content]];

// add the styles to the DOM
for (var i = 0; i < content.length; i++) loader.loadStyles(content[i][1], true);

if(content.locals) module.exports = content.locals;

/***/ }),

/***/ "CI0h":
/*!****************************************************************!*\
  !*** ./lib/sp-canvas/canvas/controlZone/ControlZone.styles.js ***!
  \****************************************************************/
/*! exports provided: ControlZoneStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControlZoneStyles", function() { return ControlZoneStyles; });
/* harmony import */ var _ms_sp_canvas_read__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ms/sp-canvas-read */ "sSDQ");
/* harmony import */ var _ms_sp_canvas_read__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ms_sp_canvas_read__WEBPACK_IMPORTED_MODULE_0__);

var ControlZoneStyles = /** @class */ (function () {
    function ControlZoneStyles() {
    }
    ControlZoneStyles.getEmphasisBackgroundClass = function (props) {
        return Object(_ms_sp_canvas_read__WEBPACK_IMPORTED_MODULE_0__["getClassNames"])(ControlZoneStyles._getEmphasisBackgroundStyle, props);
    };
    ControlZoneStyles._getEmphasisBackgroundStyle = function (props) {
        var root = props.root, theme = props.theme;
        var semanticColors = theme.semanticColors, palette = theme.palette;
        return {
            root: [
                root,
                {
                    selectors: {
                        '&:after': {
                            border: '1px solid',
                            borderColor: palette.neutralTertiary
                        }
                    }
                }
            ],
            emphasisBackground: [
                'ControlZone--emphasisBackground',
                {
                    backgroundColor: semanticColors.inputBackground
                }
            ],
            selected: [
                'ControlZone--selected',
                {
                    selectors: {
                        '&:after': {
                            borderColor: palette.themePrimary
                        }
                    }
                }
            ]
        };
    };
    return ControlZoneStyles;
}());



/***/ }),

/***/ "CQTG":
/*!********************************************************!*\
  !*** ./lib/sp-canvas/canvas/canvasZone/CanvasZone.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../../../../common/temp/node_modules/.pnpm/css-loader@3.2.1_webpack@4.44.2/node_modules/css-loader/dist/cjs.js!../../../../../../common/temp/node_modules/.pnpm/postcss-loader@3.0.0/node_modules/postcss-loader/src??postcss!./CanvasZone.css */ "8umJ");
var loader = __webpack_require__(/*! @microsoft/load-themed-styles */ "jOlS");

if(typeof content === "string") content = [[module.i, content]];

// add the styles to the DOM
for (var i = 0; i < content.length; i++) loader.loadStyles(content[i][1], true);

if(content.locals) module.exports = content.locals;

/***/ }),

/***/ "CRn6":
/*!**************************************************************!*\
  !*** ./lib/sp-canvas/canvas/canvasSection/CanvasSection.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../../../../common/temp/node_modules/.pnpm/css-loader@3.2.1_webpack@4.44.2/node_modules/css-loader/dist/cjs.js!../../../../../../common/temp/node_modules/.pnpm/postcss-loader@3.0.0/node_modules/postcss-loader/src??postcss!./CanvasSection.css */ "8HjM");
var loader = __webpack_require__(/*! @microsoft/load-themed-styles */ "jOlS");

if(typeof content === "string") content = [[module.i, content]];

// add the styles to the DOM
for (var i = 0; i < content.length; i++) loader.loadStyles(content[i][1], true);

if(content.locals) module.exports = content.locals;

/***/ }),

/***/ "CXHJ":
/*!***************************************************!*\
  !*** ./lib/sp-canvas/common/CanvasExperiments.js ***!
  \***************************************************/
/*! exports provided: Experiments */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Experiments", function() { return Experiments; });
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _KillSwitches__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./KillSwitches */ "17t3");


// tslint:disable-next-line:export-name
var Experiments = /** @class */ (function () {
    function Experiments() {
    }
    Experiments.isRTEClickAnywhereExperimentEnabled = function () {
        // We need to add KS for extra protection since experiments cannot be suspended
        return (!_KillSwitches__WEBPACK_IMPORTED_MODULE_1__["KillSwitches"].rteEveryWhereExperiment.isActivated() &&
            _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPExperiment"].getVariantAndLogExposure(90040 /* RTEClickEverywhereExperiment */) === 1);
    };
    Experiments.isSectionAddEmphasisExperimentEnabled = function () {
        return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPExperiment"].getVariantAndLogExposure(90068 /* WEXSectionAddEmphasis */) === 1;
    };
    return Experiments;
}());



/***/ }),

/***/ "DlB5":
/*!*************************************************************!*\
  !*** ./lib/sp-canvas/canvas/CanvasVerticalSection/index.js ***!
  \*************************************************************/
/*! exports provided: CanvasVerticalSection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CanvasVerticalSection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CanvasVerticalSection */ "t874");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CanvasVerticalSection", function() { return _CanvasVerticalSection__WEBPACK_IMPORTED_MODULE_0__["CanvasVerticalSection"]; });




/***/ }),

/***/ "EEYx":
/*!***********************************************************************!*\
  !*** ./lib/sp-canvas/canvas/canvasComponent/CreateEmptyZoneLayout.js ***!
  \***********************************************************************/
/*! exports provided: CreateEmptyZoneLayout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateEmptyZoneLayout", function() { return CreateEmptyZoneLayout; });
function CreateEmptyZoneLayout(zoneIndex, sectionIndex, controlIndex, layoutIndex) {
    return {
        zoneIndex: zoneIndex,
        sectionIndex: sectionIndex,
        controlIndex: controlIndex,
        layoutIndex: layoutIndex
    };
}


/***/ }),

/***/ "EHIy":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/css-loader@3.2.1_webpack@4.44.2/node_modules/css-loader/dist/cjs.js!/agent/_work/1/s/common/temp/node_modules/.pnpm/postcss-loader@3.0.0/node_modules/postcss-loader/src??postcss!./lib/sp-canvas/canvas/controlZone/LayoutControlZone.css ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../common/temp/node_modules/.pnpm/css-loader@3.2.1_webpack@4.44.2/node_modules/css-loader/dist/runtime/api.js */ "5ADk")(false);
// Module
exports.push([module.i, ".CanvasComponent.LCS .CanvasZone:not(.CanvasZone--fullWidth) .ControlZone{padding:8px}@media screen and (max-width:479.99999px){.CanvasComponent.LCS .CanvasZone:not(.CanvasZone--fullWidth) .ControlZone{padding:8px 0}}.CanvasComponent.LCS .ControlZone{position:relative}.CanvasComponent.LCS .ControlZone .ControlZone-target{bottom:0;cursor:pointer;left:0;right:0;position:absolute;top:0}.CanvasComponent.LCS .ControlZone .ControlZone-target:focus{outline:0}.CanvasComponent.LCS .ControlZone .ControlZone-target.ControlZone-target--hidden{z-index:-1}.CanvasComponent.LCS .ControlZone:after{bottom:0;content:\"\";left:0;right:0;position:absolute;pointer-events:none;top:0;transition:all .3s ease}.CanvasComponent.LCS .ControlZone.ControlZone--clean.ControlZone--overlay:after{pointer-events:auto;cursor:pointer}.CanvasComponent.LCS .ControlZone .CanvasControlToolbar:not(.EaseAnimation),.CanvasComponent.LCS .ControlZone:after{opacity:0;transition:all .3s ease}.CanvasComponent.LCS .ControlZone.ControlZone--edit{outline:0;position:relative}.CanvasComponent.LCS .ControlZone.ControlZone--edit.ControlZone--selected .CanvasControlToolbar,.CanvasComponent.LCS .ControlZone.ControlZone--edit.ControlZone--selected:after,.CanvasComponent.LCS .ControlZone.ControlZone--edit:focus .CanvasControlToolbar,.CanvasComponent.LCS .ControlZone.ControlZone--edit:focus:after,.CanvasComponent.LCS .ControlZone.ControlZone--edit:hover .CanvasControlToolbar,.CanvasComponent.LCS .ControlZone.ControlZone--edit:hover:after{opacity:1}@media screen and (-ms-high-contrast:active){.CanvasComponent.LCS .ControlZone.ControlZone--selected:after{border:3px dotted #1aebff;box-sizing:border-box}}@media screen and (-ms-high-contrast:black-on-white){.CanvasComponent.LCS .ControlZone.ControlZone--selected:after{border:3px dotted #37006e;box-sizing:border-box}}.CanvasComponent.LCS .ControlZone.ControlZone--selected+button.CanvasToolboxHint{opacity:1}.CanvasComponent.LCS .ControlZone.ControlZone--dragOver:after{pointer-events:none!important}.CanvasComponent.LCS .ControlZone .ControlZone-move{z-index:1;pointer-events:auto}.CanvasComponent.LCS .ControlZone .ControlZone-drag,.CanvasComponent.LCS .ControlZone .ControlZone-move{width:calc(100% + 20px);height:calc(100% + 20px);transform:translate(-18px,-18px);position:absolute}.CanvasComponent.LCS .ControlZone .ControlZone--drag-show{pointer-events:auto}.CanvasComponent.LCS .ControlZone .ControlZone--drag-hide{pointer-events:none}.CanvasComponent.LCS .ControlZone .ControlZone--position{position:relative}.CanvasComponent.LCS .ControlZone .ControlZone--position .CanvasControlToolbar{top:-8px}[dir=ltr] .CanvasComponent.LCS .ControlZone .ControlZone--position .CanvasControlToolbar{left:-48px}[dir=rtl] .CanvasComponent.LCS .ControlZone .ControlZone--position .CanvasControlToolbar{right:-48px}.CanvasComponent.LCS .ControlZone .ControlZone-screenReaderOnly{position:absolute;text-indent:-9999px;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;border:0}", ""]);


/***/ }),

/***/ "EPam":
/*!*********************************************************!*\
  !*** ./lib/sp-canvas/canvas/controlZone/ControlZone.js ***!
  \*********************************************************/
/*! exports provided: ControlZone */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControlZone", function() { return ControlZone; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @microsoft/office-ui-fabric-react-bundle */ "KL1q");
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @microsoft/sp-diagnostics */ "ut3N");
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @microsoft/sp-lodash-subset */ "Pk8u");
/* harmony import */ var _microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ms/odsp-utilities-bundle */ "y88i");
/* harmony import */ var _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _ms_sp_canvas_read__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ms/sp-canvas-read */ "sSDQ");
/* harmony import */ var _ms_sp_canvas_read__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_ms_sp_canvas_read__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _a11y_CanvasA11yConstants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../a11y/CanvasA11yConstants */ "AqUB");
/* harmony import */ var _canvasAnimations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../canvasAnimations */ "fqJ2");
/* harmony import */ var _editChunk__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../editChunk */ "9s5w");
/* harmony import */ var _canvasSection__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../canvasSection */ "JqQl");
/* harmony import */ var _ControlZone_styles__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./ControlZone.styles */ "CI0h");
/* harmony import */ var _loc_CanvasStrings_resx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../loc/CanvasStrings.resx */ "indE");
var _loc_CanvasStrings_resx__WEBPACK_IMPORTED_MODULE_13___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../loc/CanvasStrings.resx */ "indE", 1);
/* harmony import */ var _common_KillSwitches__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../common/KillSwitches */ "17t3");















var CANVAS_ANIMATION_CLASSNAME = 'Canvas-slideUpIn';
var ControlZone = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ControlZone, _super);
    function ControlZone(props) {
        var _this = _super.call(this, props) || this;
        _this._childControlElementRef = react__WEBPACK_IMPORTED_MODULE_1__["createRef"]();
        _this._domElement = react__WEBPACK_IMPORTED_MODULE_1__["createRef"]();
        _this._toolbarElementRef = react__WEBPACK_IMPORTED_MODULE_1__["createRef"]();
        /**
         * Remove ControlZone's slide-up and fade-in animation
         * after 'animationend' to avoid the side-effect where
         * the DOM sub-tree is composited on a separate later as a
         * containing block.
         *
         * @param event the animation event fired on animation end
         */
        _this._removeAnimation = function (event) {
            // Wait for the slide-up animation to end before
            // removing the combined animation class and setting
            // the DOM sub-tree as visible.
            if (event.animationName === 'Canvas-slideUp' && event.target) {
                window.requestAnimationFrame(function () {
                    event.target.style.opacity = '1';
                    event.target.classList.remove(CANVAS_ANIMATION_CLASSNAME);
                });
                // Remove the event handler since we've received the slide-up animation
                // and queued its removal.
                event.target.removeEventListener('animationend', _this._removeAnimation);
            }
        };
        /** Edit mode only **/
        _this._handleControlFocus = function (evt) {
            var control = _this.props.control;
            _this._editEvents.handleControlFocus(control, _this._childControlElementRef);
        };
        /** Edit mode only **/
        _this._handleClickCapture = function () {
            _this._editEvents.handleClickCapture(_this.props.control, _this._domElement);
        };
        /** Edit mode only **/
        _this._handleKeydownCapture = function (e) {
            _this._editEvents.handleKeydownCapture(e, _this.props.control, _this._domElement, _this._toolbarElementRef, _this._childControlElementRef);
        };
        /** Edit mode only **/
        _this._handlePaste = function (e) {
            var _a = _this.props, control = _a.control, displayMode = _a.displayMode, isSelected = _a.isSelected;
            _this._editEvents.handlePaste(e, control, displayMode, _this._domElement, isSelected);
        };
        /** Edit mode only **/
        _this._handleToolbarKeydown = function (e) {
            _this._editEvents.handleToolbarKeydown(e, _this.props.control, _this._childControl);
        };
        _this._handleMouseOut = function () {
            _this.props.store.hoveredControlId = undefined;
        };
        _this._handleMouseOver = function () {
            _this.props.store.hoveredControlId = _this.props.control.id;
        };
        /**
         * Invoke reveal if the hosted control is the RTE.
         * WebPartZone handles its own reveal based on web part loading.
         *
         * @param controlType - Current control type of the hosted control
         */
        _this._reveal = function (controlType) {
            if (_this._domElement &&
                _this._domElement.current &&
                _ms_sp_canvas_read__WEBPACK_IMPORTED_MODULE_7__["CanvasControlType"].RTE === controlType &&
                _canvasAnimations__WEBPACK_IMPORTED_MODULE_9__["CanvasRevealObserver"].isAvailable()) {
                _this.props.store.revealObserver.observe(_this._domElement.current, function (entry, observer) {
                    _this.setState({ isVisible: true });
                    observer.unobserve(entry.target);
                });
            }
        };
        /** Edit mode only **/
        _this._addDragEventListeners = function () {
            var control = _this.props.control;
            _this._editEvents.addDragEventListeners(control, _this._domElement, _this._onDragOver, _this._onDragLeave);
        };
        /** Edit mode only **/
        _this._removeDragEventListeners = function () {
            var control = _this.props.control;
            _this._editEvents.removeDragEventListeners(control, _this._domElement, _this._onDragOver, _this._onDragLeave);
        };
        /** Edit mode only **/
        _this._onDragOver = function (e) {
            e.stopPropagation();
            if (!_this.state.isDragging) {
                _this.setState({ isDragging: true });
            }
        };
        /** Edit mode only **/
        _this._onDragLeave = function (e) {
            e.stopPropagation();
            if (_this.state.isDragging) {
                _this.setState({ isDragging: false });
            }
        };
        _this.state = {
            isVisible: false,
            isDragging: false
        };
        __webpack_require__(/*! ./LayoutControlZone.css */ "VQpE");
        return _this;
    }
    ControlZone.isWebPartOverlayNeeded = function (control) {
        if (control.controlType === _ms_sp_canvas_read__WEBPACK_IMPORTED_MODULE_7__["CanvasControlType"].RTE) {
            return false;
        }
        else if (control.webPartManifest) {
            switch (control.webPartManifest.id) {
                /**
                 * Adding overlay for all web parts by extending this list
                 * Currently enforcing it on all but RTE
                 */
                // case 'd1d91016-032f-456d-98a4-721247c305e8': // image
                // case '544dd15b-cf3c-441b-96da-004d5a8cea1d': // Youtube HTML Embed
                // case '275c0095-a77e-4f6d-a2a0-6a7626911518': // Office 365 video
                //   return true;
                default:
                    return true;
            }
        }
        return false;
    };
    ControlZone.getDerivedStateFromProps = function (props, state) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, state), { isDragging: props.isSelected && state.isDragging ? false : state.isDragging });
    };
    ControlZone._getDragDisallowedAttribute = function (control) {
        if (!_canvasSection__WEBPACK_IMPORTED_MODULE_11__["CanvasFullWidthSection"].isFullWidthControl(control)) {
            return _editChunk__WEBPACK_IMPORTED_MODULE_10__["CanvasDragZoneConstants"].fullWidthSectionTag;
        }
        else {
            return undefined;
        }
    };
    ControlZone.prototype.shouldComponentUpdate = function (nextProps, nextState) {
        var _a = this.props, displayMode = _a.displayMode, emphasisTheme = _a.emphasisTheme, isSelected = _a.isSelected, control = _a.control, store = _a.store;
        return (displayMode !== nextProps.displayMode ||
            isSelected !== nextProps.isSelected ||
            !Object(_microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_5__["isEqual"])(nextProps.control, control) ||
            !Object(_microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_5__["isEqual"])(nextProps.emphasisTheme, emphasisTheme) ||
            this.state.isVisible !== nextState.isVisible ||
            this.state.isDragging !== nextState.isDragging ||
            this.props.controlDiff !== nextProps.controlDiff ||
            store.canvasFields.isUpdatingFromUpperLevel);
    };
    ControlZone.prototype.componentDidMount = function () {
        var _a;
        var store = this.props.store;
        var _b = this.props, control = _b.control, displayMode = _b.displayMode;
        if (store.selectedControlId === control.id && this._domElement && this._domElement.current) {
            // 500ms animation duration
            store
                .getEditModule('actions')
                .scrollIntoView('partial', this._domElement.current, 500, ControlZone._VERTICAL_MARGIN * 2);
            store.a11yManager.focusTo(this._domElement.current);
        }
        // Remove the slide-up and fade-in animation on end to avoid
        // keeping WebPartZone elevated on own layer due to CSS transform.
        if (this._domElement && this._domElement.current) {
            this._domElement.current.addEventListener('animationend', this._removeAnimation);
        }
        this._childControl = store.canvasFields.getControlComponentById(control.id);
        if (_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__["DisplayMode"].Edit === displayMode) {
            (_a = this._toolbarElementRef.current) === null || _a === void 0 ? void 0 : _a.addEventListener('keydown', this._handleToolbarKeydown);
            this._addEventListenerKeyDown();
            this._addDragEventListeners();
        }
        if (_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__["DisplayMode"].Read === displayMode) {
            this._reveal(control.controlType);
        }
    };
    ControlZone.prototype.componentDidCatch = function (error, errorInfo) {
        var _a;
        var qos = new _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_4__["_QosMonitor"]('ControlZone.componentDidCatch');
        var _b = this.props, control = _b.control, displayMode = _b.displayMode;
        // tslint:disable-next-line:no-any
        var extraData = {
            componentStack: errorInfo.componentStack,
            displayMode: displayMode
        };
        if (Object(_ms_sp_canvas_read__WEBPACK_IMPORTED_MODULE_7__["isWebPart"])(control)) {
            extraData.isWebPart = true;
            extraData.webPartId = control.webPartId;
            extraData.alias = (_a = control.webPartManifest) === null || _a === void 0 ? void 0 : _a.alias;
        }
        else {
            extraData.isWebPart = false;
        }
        qos.writeUnexpectedFailure('ConsistentFailure', error, extraData);
    };
    ControlZone.prototype.componentDidUpdate = function (prevProps) {
        var _a, _b;
        var _c = this.props, control = _c.control, displayMode = _c.displayMode, isSelected = _c.isSelected;
        if (prevProps.displayMode !== displayMode) {
            if (displayMode === _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__["DisplayMode"].Edit) {
                (_a = this._toolbarElementRef.current) === null || _a === void 0 ? void 0 : _a.addEventListener('keydown', this._handleToolbarKeydown);
                this._addEventListenerKeyDown();
                this._addDragEventListeners();
            }
            else if (displayMode === _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__["DisplayMode"].Read) {
                (_b = this._toolbarElementRef.current) === null || _b === void 0 ? void 0 : _b.removeEventListener('keydown', this._handleToolbarKeydown);
                this._removeEventListenerKeyDown();
                this._reveal(control.controlType);
                this._removeDragEventListeners();
            }
        }
        if (prevProps.control.position.sectionFactor !== control.position.sectionFactor) {
            this.props.store.webPartManager.notifyWebPartContainerResize(control.id);
        }
        if (displayMode === _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__["DisplayMode"].Edit && control.controlType !== _ms_sp_canvas_read__WEBPACK_IMPORTED_MODULE_7__["CanvasControlType"].RTE) {
            if (!prevProps.isSelected && isSelected) {
                if (!this._handleDocumentBodyPaste) {
                    this._handleDocumentBodyPaste = this._editEvents.getPasteEventHandler(control, this._domElement);
                }
                this._editEvents.addPasteEventListener(control, this._handleDocumentBodyPaste);
            }
            else if (prevProps.isSelected && !isSelected) {
                this._editEvents.removePasteEventListener(control, this._handleDocumentBodyPaste);
            }
        }
    };
    ControlZone.prototype.render = function () {
        var _a, _b;
        var _c;
        var _d = this.props, children = _d.children, control = _d.control, displayMode = _d.displayMode, emphasisTheme = _d.emphasisTheme, isSelected = _d.isSelected, theme = _d.theme;
        var controlType = control.controlType, id = control.id;
        var isReadMode = displayMode === _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__["DisplayMode"].Read;
        var accessibleLabel = '';
        var ariaPrimaryLabelById = "cswpAccessibleLabel_" + id;
        // Keep ID in sync with BaseClientSideWebpart._renderWithAccessibileTitle,
        // where each webpart can provide contextual info based on its properties:
        // ie. "image of a house" instead of just "image"
        var ariaContextualLabelId = "cswpAccessibleLabelContextual_" + id;
        // Have to provide multiple IDs because IE doesn't care for aria-describedBy on DIVs
        var ariaLabelledBy;
        if (controlType === _ms_sp_canvas_read__WEBPACK_IMPORTED_MODULE_7__["CanvasControlType"].WebPartZone) {
            // Want additional listed first since it will provide most contextual info
            ariaLabelledBy = ariaContextualLabelId;
            if (!Object(_common_KillSwitches__WEBPACK_IMPORTED_MODULE_14__["fixWebPartAccessibleLabelKSActivated"])()) {
                var accessibleLabelDiv = document.getElementById(ariaContextualLabelId);
                if (!accessibleLabelDiv || (accessibleLabelDiv && accessibleLabelDiv.innerText === '')) {
                    accessibleLabel = _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_6__["StringHelper"].format(_loc_CanvasStrings_resx__WEBPACK_IMPORTED_MODULE_13__["CanvasZoneAriaWebpartName"], control.webPartData.title || ((_c = control.webPartManifest) === null || _c === void 0 ? void 0 : _c.alias) ||
                        '');
                }
            }
        }
        else if (controlType === _ms_sp_canvas_read__WEBPACK_IMPORTED_MODULE_7__["CanvasControlType"].RTE) {
            accessibleLabel =
                _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_6__["StringHelper"].format(_loc_CanvasStrings_resx__WEBPACK_IMPORTED_MODULE_13__["CanvasZoneAriaWebpartName"] || '', _loc_CanvasStrings_resx__WEBPACK_IMPORTED_MODULE_13__["TextWebPartDisplayName"] || '') ||
                    '';
            // No contextual info available for text
            ariaLabelledBy = ariaPrimaryLabelById;
        }
        if (displayMode === _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__["DisplayMode"].Edit) {
            accessibleLabel =
                _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_6__["StringHelper"].format(_loc_CanvasStrings_resx__WEBPACK_IMPORTED_MODULE_13__["AriaWebPartOrSectionEnterTemplate"] || '', accessibleLabel, _loc_CanvasStrings_resx__WEBPACK_IMPORTED_MODULE_13__["WebPartAriaLabel"]) || '';
            if (controlType === _ms_sp_canvas_read__WEBPACK_IMPORTED_MODULE_7__["CanvasControlType"].WebPartZone) {
                ariaLabelledBy += " " + ariaPrimaryLabelById;
            }
        }
        // If scroll animations are enabled we load the web parts hidden and then override the style when they are in view
        var shouldHideZone = _canvasAnimations__WEBPACK_IMPORTED_MODULE_9__["CanvasRevealObserver"].isAvailable() &&
            _ms_sp_canvas_read__WEBPACK_IMPORTED_MODULE_7__["CanvasControlType"].RTE === controlType &&
            _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__["DisplayMode"].Read === displayMode;
        var shouldShowOverLay = !isReadMode && !isSelected && ControlZone.isWebPartOverlayNeeded(control);
        var controlZoneEmphasisBackgroundClass = _ControlZone_styles__WEBPACK_IMPORTED_MODULE_12__["ControlZoneStyles"].getEmphasisBackgroundClass({
            root: 'ControlZone--emphasis',
            theme: emphasisTheme || theme || Object(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_3__["getTheme"])()
        });
        var emphasisBackgroundClassName = controlZoneEmphasisBackgroundClass.emphasisBackground;
        var emphasisSelectedClassName = controlZoneEmphasisBackgroundClass.selected;
        var isBackgroundEmphasisNeeded = Boolean(emphasisTheme &&
            !(control.controlType === _ms_sp_canvas_read__WEBPACK_IMPORTED_MODULE_7__["CanvasControlType"].RTE || Object(_ms_sp_canvas_read__WEBPACK_IMPORTED_MODULE_7__["isWebPartThemable"])(control.webPartManifest)));
        var zoneClassName = Object(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_3__["css"])('ControlZone', 'ControlZone--clean', controlZoneEmphasisBackgroundClass.root, (_a = {
                'ControlZone--edit': !isReadMode,
                'ControlZone--selected': isSelected
            },
            _a[CANVAS_ANIMATION_CLASSNAME] = isReadMode && this.state.isVisible,
            _a['ControlZone--overlay'] = shouldShowOverLay,
            _a['ControlZone--dragOver'] = this.state.isDragging,
            _a[emphasisSelectedClassName] = isSelected,
            _a));
        return (
        /* tslint:disable-next-line:react-a11y-event-has-role */
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { "aria-labelledby": isReadMode ? undefined : ariaLabelledBy, className: zoneClassName, "data-automation-id": 'CanvasControl', id: id, "data-drag-tag": _editChunk__WEBPACK_IMPORTED_MODULE_10__["CanvasDragZoneConstants"].controlZoneDragTag, "data-drag-disallowed-tag": ControlZone._getDragDisallowedAttribute(control), "data-drag-hidden-extra-elements": 'false', "data-sp-a11y-id": Object(_a11y_CanvasA11yConstants__WEBPACK_IMPORTED_MODULE_8__["getControlZoneA11yId"])(id), onClickCapture: !isReadMode ? this._handleClickCapture : undefined, onFocus: !isReadMode ? this._handleControlFocus : undefined, onMouseOut: this._handleMouseOut, onMouseOver: this._handleMouseOver, ref: this._domElement, style: shouldHideZone ? { opacity: 0 } : undefined, tabIndex: isReadMode ? undefined : 0, onPaste: this._isNotRTE(control) ? this._handlePaste : undefined },
            this._diffIndicator,
            shouldShowOverLay && !this.state.isDragging && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: 'ControlZone-move', "data-drag-handle": _editChunk__WEBPACK_IMPORTED_MODULE_10__["CanvasDragZoneConstants"].webPartInsideDragHandleTag })),
            !isReadMode && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: Object(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_3__["css"])('ControlZone-drag', {
                    'ControlZone--drag-show': isSelected,
                    'ControlZone--drag-hide': !isSelected
                }), "data-drag-handle": _editChunk__WEBPACK_IMPORTED_MODULE_10__["CanvasDragZoneConstants"].webPartBorderDragHandleTag, role: 'presentation' })),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: Object(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_3__["css"])('ControlZone--position', (_b = {},
                    // Pull KS from the map above result in web part emphasis background
                    _b[emphasisBackgroundClassName] = isBackgroundEmphasisNeeded,
                    _b)) },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: 'ControlZone-control', ref: this._childControlElementRef, "data-sp-a11y-checker-user-controllable": true }, children[0]),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { ref: this._toolbarElementRef }, children[1]),
                // The accessible label is only required in edit mode. It is also not required for mobile devices
                // which only provide view mode
                displayMode === _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__["DisplayMode"].Edit && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { id: ariaPrimaryLabelById, className: 'ControlZone-screenReaderOnly', "aria-hidden": true }, accessibleLabel)))));
    };
    ControlZone.prototype.componentWillUnmount = function () {
        if (this.props.displayMode === _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__["DisplayMode"].Edit) {
            this._removeDragEventListeners();
            if (this.props.isSelected && this.props.control.controlType !== _ms_sp_canvas_read__WEBPACK_IMPORTED_MODULE_7__["CanvasControlType"].RTE) {
                this._editEvents.removePasteEventListener(this.props.control, this._handleDocumentBodyPaste);
            }
        }
    };
    ControlZone.prototype._isNotRTE = function (control) {
        return Object(_common_KillSwitches__WEBPACK_IMPORTED_MODULE_14__["isFixImageDropInRTE"])() || control.controlType !== _ms_sp_canvas_read__WEBPACK_IMPORTED_MODULE_7__["CanvasControlType"].RTE;
    };
    Object.defineProperty(ControlZone.prototype, "_diffIndicator", {
        get: function () {
            var _a = this.props, control = _a.control, controlDiff = _a.controlDiff, emphasisTheme = _a.emphasisTheme, store = _a.store, theme = _a.theme;
            return (controlDiff && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_editChunk__WEBPACK_IMPORTED_MODULE_10__["DeferredControlDiffIndicator"], { theme: emphasisTheme || theme, controlDiff: controlDiff, control: control, store: store })));
        },
        enumerable: true,
        configurable: true
    });
    /** Edit mode only **/
    ControlZone.prototype._addEventListenerKeyDown = function () {
        var _a, _b;
        (_b = (_a = this._domElement) === null || _a === void 0 ? void 0 : _a.current) === null || _b === void 0 ? void 0 : _b.addEventListener('keydown', this._handleKeydownCapture, true);
    };
    /** Edit mode only **/
    ControlZone.prototype._removeEventListenerKeyDown = function () {
        var _a, _b;
        (_b = (_a = this._domElement) === null || _a === void 0 ? void 0 : _a.current) === null || _b === void 0 ? void 0 : _b.removeEventListener('keydown', this._handleKeydownCapture, true);
    };
    Object.defineProperty(ControlZone.prototype, "_editEvents", {
        /** Edit mode only **/
        get: function () {
            return this.props.store.getEditModule('controlZone');
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @ readOnly
     */
    ControlZone._VERTICAL_MARGIN = 22;
    return ControlZone;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));



/***/ }),

/***/ "EZnn":
/*!*********************************************************!*\
  !*** ./lib/sp-canvas/canvas/webPartZone/WebPartZone.js ***!
  \*********************************************************/
/*! exports provided: WebPartZone */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebPartZone", function() { return WebPartZone; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "faye");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @microsoft/office-ui-fabric-react-bundle */ "KL1q");
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _microsoft_sp_component_base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @microsoft/sp-component-base */ "7Awa");
/* harmony import */ var _microsoft_sp_component_base__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_component_base__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @microsoft/sp-diagnostics */ "ut3N");
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @microsoft/sp-lodash-subset */ "Pk8u");
/* harmony import */ var _microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _ms_sp_a11y__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ms/sp-a11y */ "ytfe");
/* harmony import */ var _ms_sp_a11y__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_ms_sp_a11y__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ms/sp-telemetry */ "2q6Q");
/* harmony import */ var _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _ms_sp_canvas_read__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ms/sp-canvas-read */ "sSDQ");
/* harmony import */ var _ms_sp_canvas_read__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_ms_sp_canvas_read__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _canvasAnimations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../canvasAnimations */ "fqJ2");
/* harmony import */ var _shouldFallbackSetWebPartData__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./shouldFallbackSetWebPartData */ "NhzL");
/**
 * @file WebPartZone.ts
 * @copyright (c) Microsoft Corporation. All rights reserved.
 */













var LOADWEBPARTTIME_MARKER = 'spLoadWebPartTime';
var CANVAS_ANIMATION_CLASSNAME = 'Canvas-slideUpIn';
var WebPartZone = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(WebPartZone, _super);
    function WebPartZone(props) {
        var _this = _super.call(this, props) || this;
        _this._revealDiv = react__WEBPACK_IMPORTED_MODULE_1__["createRef"]();
        _this._webPartDivRef = react__WEBPACK_IMPORTED_MODULE_1__["createRef"]();
        _this.handleConfigureButtonClicked = function (shouldToggle) {
            /**
             * Using _isLoaded flag instead of the promise because we want a click on the configure button to
             * no-op. If we had used a promise, the web part selection could have shifted by the time the
             * loading is complete and thus incorrectly change the context of the property pane. A no-op makes
             * sense because the web part would have no UI rendered yet, and the framework indicates the web part
             * is still in the process of loading.
             */
            if (_this._isLoaded && _this.props.store.webPartManager) {
                // Since it is a web part, we go through webpartmanager even though we have direct access to the
                // property pane controller, as in the case of isolated web parts, web part manager knows how to deal
                // with it.
                _this.props.store.webPartManager.requestPropertyPaneAction(_this.instanceId, shouldToggle ? 'Toggle' : 'Open');
            }
        };
        _this.scrollIntoView = function (options) {
            if (_this._webPartDivRef.current) {
                _this._webPartDivRef.current.scrollIntoView(options);
                return true;
            }
            return false;
        };
        /**
         * Remove WebPartZone's slide-up and fade-in animation
         * after 'animationend' to avoid the side-effect where
         * the DOM sub-tree is composited on a separate later as a
         * containing block.
         *
         * https://github.com/SharePoint/sp-dev-docs/issues/4923
         *
         * @param event the animation event fired on animation end
         */
        _this._removeAnimation = function (event) {
            // Wait for the slide-up animation to end before
            // removing the combined animation class and setting
            // the DOM sub-tree as visible.
            if (event.animationName === 'Canvas-slideUp' && event.target) {
                window.requestAnimationFrame(function () {
                    event.target.style.opacity = '1';
                    event.target.classList.remove(CANVAS_ANIMATION_CLASSNAME);
                });
                // Remove the event handler since we've received the slide-up animation
                // and queued its removal.
                event.target.removeEventListener('animationend', _this._removeAnimation);
            }
        };
        _this._reloadWebPart = function (shouldDispose) {
            var store = _this.props.store;
            return (_this._loadWebPartPromise = _this._loadWebPartPromise
                .then(function () {
                return new Promise(function (resolve) {
                    if (shouldDispose && _this._webPartDivRef.current) {
                        react_dom__WEBPACK_IMPORTED_MODULE_2__["unmountComponentAtNode"](_this._webPartDivRef.current);
                        // unmountComponentAtNode is supposed to be synchronous. However, it's behaved as asynchronous in React 16.
                        // see https://github.com/facebook/react/issues/13690 for more information.
                        // This is workaround to avoid console warnings caused by DOM manipulation (by loadWebPart API)
                        //  while unmounting React node.
                        setTimeout(function () { return resolve(); });
                    }
                    else {
                        resolve();
                    }
                });
            })
                .then(function () {
                return _this._webPartManager.setWebPartData(_this._webPartManagerContext, _this.instanceId, shouldDispose);
            })
                .then(function () {
                store.selectedControlId = _this.instanceId;
            }));
        };
        _this._loadWebPart = function () {
            var store = _this.props.store;
            var _a = _this.props.control, addedFromPersistedData = _a.addedFromPersistedData, id = _a.id;
            var context = _this._webPartManagerContext;
            return (_this._loadWebPartPromise = _this._webPartManager
                .loadWebPart(context)
                .then(function () {
                var propertyPaneController = store.propertyPaneController, selectedControlId = store.selectedControlId;
                if (_this.state.displayMode === _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_6__["DisplayMode"].Edit &&
                    id === selectedControlId &&
                    propertyPaneController) {
                    propertyPaneController.requestAction(id);
                }
                _this._isLoaded = true;
                if (!addedFromPersistedData) {
                    // Trigger serialization of the web part data and notify the changes when newly added web part is loaded.
                    // When web part is added to the canvas, the `addedFromPersistedData` flag is false, and the data is not
                    // serialized by the spfx framework. We want to specifically serialize and track the serialized data which
                    // contains serverProcessedData and so on. Otherwise, tracking the un-serialized data will trigger
                    // unnecessary update when this un-serialized data is used to
                    // update the web part data in undo-redo scenario.
                    store.getEditModule('actions').handleWebPartChanged(id);
                }
            })
                .catch(function (error) {
                var _a;
                var loadPartQos = store.createQosScope("WebPartZone.LoadWebPartError");
                _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_5__["_TraceLogger"].logError(WebPartZone._logSource, error, 'didMount.load');
                if ((_a = context.manifest) === null || _a === void 0 ? void 0 : _a.isInternal) {
                    loadPartQos.writeUnexpectedFailure('Unexpected Error', error);
                }
                else {
                    loadPartQos.writeExpectedFailure(context.manifest ? 'Third party' : 'No Manifest', error);
                }
            }));
        };
        /**
         * @returns stringified combination of displayMode, layoutIndex and sectionFactor
         * if either displayMode or layoutIndex are undefined return undefined
         */
        _this._getWidthCacheKey = function () {
            var _a = _this.props.control.position, _b = _a.layoutIndex, layoutIndex = _b === void 0 ? 1 : _b, sectionFactor = _a.sectionFactor;
            return sectionFactor ? layoutIndex + "-" + sectionFactor : undefined;
        };
        var _a = _this.props.store, serviceScope = _a.serviceScope, webPartManager = _a.webPartManager;
        var _b = _this.props.control, emphasisTheme = _b.emphasisTheme, theme = _b.theme, webPartData = _b.webPartData, webPartManifest = _b.webPartManifest;
        _this._webPartManager = webPartManager;
        _this._childScope = serviceScope.startNewChild();
        var providedTheme = emphasisTheme;
        if (!Object(_ms_sp_canvas_read__WEBPACK_IMPORTED_MODULE_10__["isWebPartThemable"])(webPartManifest) || !emphasisTheme) {
            providedTheme = theme;
        }
        // Theme should never be case to 'any' which means a breaking change.
        // Casting to ISPTheme here to workaround a typing mismatch issue caused by API extractor.
        _this._themeProvider = new _microsoft_sp_component_base__WEBPACK_IMPORTED_MODULE_4__["ThemeProvider"](_this._childScope, providedTheme);
        _this._childScope.provide(_microsoft_sp_component_base__WEBPACK_IMPORTED_MODULE_4__["ThemeProvider"].serviceKey, _this._themeProvider);
        _this._childScope.finish();
        _this._latestWebPartData = webPartData;
        _this.state = {
            displayMode: props.displayMode,
            isVisible: false
        };
        return _this;
    }
    // @todo This is a workaround for deserialization of a Canvas without the manifests.
    // We need to think about a longer term solution.
    WebPartZone.prototype.componentDidMount = function () {
        // Attach the observer before we load so the spinner or shimmer will reveal
        this._reveal();
        var startTime = _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_9__["_PerformanceLogger"].now();
        // Remove the slide-up and fade-in animation on end to avoid
        // keeping WebPartZone elevated on own layer due to CSS transform.
        if (this._revealDiv && this._revealDiv.current) {
            this._revealDiv.current.addEventListener('animationend', this._removeAnimation);
        }
        void this._loadWebPart();
        // Measure total sync cost occurred loading webparts in canvas
        _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_9__["_PerformanceLogger"].setPerformanceProperty(LOADWEBPARTTIME_MARKER, _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_9__["_PerformanceLogger"].now() - startTime, true);
    };
    WebPartZone.prototype.componentDidUpdate = function (prevProps) {
        if (prevProps.displayMode !== this.props.displayMode) {
            this._reveal();
        }
        var _a = this.props.control, webPartData = _a.webPartData, webPartManifest = _a.webPartManifest;
        if (!Object(_microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_7__["isEqual"])(this._latestWebPartData, webPartData)) {
            this._latestWebPartData = webPartData;
            var shouldFallback = Object(_shouldFallbackSetWebPartData__WEBPACK_IMPORTED_MODULE_12__["shouldFallbackSetWebPartData"])(webPartManifest);
            void this._reloadWebPart(shouldFallback);
        }
    };
    WebPartZone.prototype.shouldComponentUpdate = function (nextProps, nextState) {
        if (this._themeProvider) {
            var prevControl = this.props.control;
            var newControl = nextProps.control;
            if (!Object(_ms_sp_canvas_read__WEBPACK_IMPORTED_MODULE_10__["isWebPartThemable"])(prevControl.webPartManifest) || !newControl.emphasisTheme) {
                if (newControl.theme) {
                    // Theme should never be case to 'any' which means a breaking change.
                    // Casting to ISPTheme here to workaround a typing mismatch issue caused by API extractor.
                    this._themeProvider._setTheme(newControl.theme);
                }
            }
            else if (!Object(_microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_7__["isEqual"])(prevControl.emphasisTheme, newControl.emphasisTheme)) {
                // Theme should never be case to 'any' which means a breaking change.
                // Casting to ISPTheme here to workaround a typing mismatch issue caused by API extractor.
                this._themeProvider._setTheme(newControl.emphasisTheme);
            }
        }
        // With undo-redo, web part zone can update itself now by reloading the web part.
        return true;
    };
    WebPartZone.prototype.render = function () {
        var _a;
        var isReadMode = _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_6__["DisplayMode"].Read === this.props.displayMode;
        var shouldHideZone = _canvasAnimations__WEBPACK_IMPORTED_MODULE_11__["CanvasRevealObserver"].isAvailable() && isReadMode;
        var revealDivCss = Object(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_3__["css"])((_a = {},
            _a[CANVAS_ANIMATION_CLASSNAME] = isReadMode && this.state.isVisible,
            _a));
        var _b = this.props.control, webPartData = _b.webPartData, webPartManifest = _b.webPartManifest;
        var featureTag = webPartManifest && webPartData ? webPartManifest.alias + " web part (" + webPartData.title + ")" : undefined;
        var featureInstanceId = webPartData ? webPartData.instanceId : undefined;
        var webPartDiv = react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { ref: this._webPartDivRef, style: { width: '100%' } });
        if (_canvasAnimations__WEBPACK_IMPORTED_MODULE_11__["CanvasRevealObserver"].isAvailable()) {
            return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: revealDivCss, ref: this._revealDiv, style: shouldHideZone ? { opacity: 0 } : undefined, "data-sp-feature-tag": featureTag, "data-sp-feature-instance-id": featureInstanceId }, webPartDiv));
        }
        else {
            return webPartDiv;
        }
    };
    WebPartZone.prototype.componentWillUnmount = function () {
        // The web part is loaded and initialized at `componentDidMount` of WebPartZone. So it's better
        // to be disposed at `componentWillUnmount` to keep the init-dispose loop inside same one react life cycle.
        this._webPartManager.disposeWebparts(this.instanceId);
        if (!this._webPartDivRef.current) {
            return;
        }
        react_dom__WEBPACK_IMPORTED_MODULE_2__["unmountComponentAtNode"](this._webPartDivRef.current);
        if (_canvasAnimations__WEBPACK_IMPORTED_MODULE_11__["CanvasRevealObserver"].isAvailable() && this._revealDiv && this._revealDiv.current) {
            this.props.store.revealObserver.unobserve(this._revealDiv.current);
        }
    };
    Object.defineProperty(WebPartZone.prototype, "instanceId", {
        get: function () {
            return this.props.control.id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WebPartZone.prototype, "isFocusable", {
        get: function () {
            return Boolean(this._webPartDivRef.current && _ms_sp_a11y__WEBPACK_IMPORTED_MODULE_8__["Focus"].getFirstFocusableChild(this._webPartDivRef.current));
        },
        enumerable: true,
        configurable: true
    });
    WebPartZone.prototype.focus = function () {
        if (this._webPartDivRef.current &&
            !this.props.store.a11yManager.focusInside(this._webPartDivRef.current)) {
            this.props.store.a11yManager.focusOutOf(this._webPartDivRef.current);
        }
    };
    WebPartZone.prototype.serialize = function () {
        var webPartData;
        webPartData =
            this._webPartManager.serialize(this.instanceId).get(this.instanceId) || this.props.control.webPartData;
        var serialization = JSON.parse(JSON.stringify(this.props.control));
        serialization.webPartData = webPartData;
        if (this._webPartDivRef.current && !Object(_microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_7__["isEqual"])(webPartData, this._latestWebPartData)) {
            serialization.reservedHeight = this._webPartDivRef.current.clientHeight;
            serialization.reservedWidth = this._webPartDivRef.current.clientWidth;
        }
        this._latestWebPartData = serialization.webPartData;
        return serialization;
    };
    WebPartZone.prototype.setDisplayMode = function (newDisplayMode) {
        var _this = this;
        var _a = this.props.control, webPartId = _a.webPartId, webPartManifest = _a.webPartManifest;
        this.setState({
            displayMode: newDisplayMode
        });
        // There is an improvement under undo-redo flight where web parts will no longer be disposed and reloaded when
        // the display mode is switched. This is the ideal rendering model but would break the web part rendering if
        // the web part has the assumption that web part will always be reloaded when display mode is switched.
        // The code below makes sure:
        // 1. For 1st part web parts, it's always opt-in the improved model thus it will not be reloaded when display mode
        //  is switched.
        // 2. For 3rd part web parts, it will only opt-in the improved model when the web part integrates undo-redo through
        //  the manifest flag "useFallbackWhenPropertiesUpdatedExternally". Once web part developers decides to opt-in undo-
        //  redo, they will be able to uncover the rendering issue (if there is one) and upgrade to the desired behavior
        //  which will avoid reloading the web part.
        if (this.state.displayMode !== newDisplayMode) {
            var shouldFallback = webPartManifest.isInternal
                ? false
                : Object(_shouldFallbackSetWebPartData__WEBPACK_IMPORTED_MODULE_12__["shouldFallbackSetWebPartData"])(webPartManifest);
            if (shouldFallback) {
                // Return as we will dispose and reload the web part, so there is no need to call the `setDisplayMode` API.
                return this._reloadWebPart(true /* shouldDispose */);
            }
        }
        var qos = this.props.store.createQosScope("SetWebPartDisplayModeTo" + newDisplayMode);
        var qosData = {
            alias: webPartManifest && webPartManifest.alias,
            webPartId: webPartId
        };
        var errorLogger = function (error, tag) {
            if (webPartManifest && webPartManifest.isInternal) {
                qos.writeUnexpectedFailure(tag, error, qosData);
            }
            else {
                qos.writeExpectedFailure(tag + "External", error, qosData);
            }
        };
        /**
         * The Canvas zone will switch mode, and then wait for the web part to fully render before asking
         * the web part manager to switch the mode of the web part.
         */
        return this._loadWebPartPromise
            .then(function () {
            _this._webPartManager.setDisplayMode(newDisplayMode, _this.instanceId);
            qos.writeSuccess();
        }, function (error) { return errorLogger(error, 'Rejected'); })
            .catch(function (error) { return errorLogger(error, 'AfterLoadCatchAll'); });
    };
    Object.defineProperty(WebPartZone.prototype, "_webPartManagerContext", {
        get: function () {
            var store = this.props.store;
            var _a = this.props.control, addedFromPersistedData = _a.addedFromPersistedData, reservedHeight = _a.reservedHeight, webPartData = _a.webPartData, webPartManifest = _a.webPartManifest;
            var displayMode = this.props.displayMode;
            return {
                domElement: this._webPartDivRef.current,
                instanceId: this.instanceId,
                manifest: webPartManifest,
                displayMode: displayMode,
                webPartData: Object(_microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_7__["cloneDeep"])(webPartData),
                pageLayoutType: store.pageLayoutType,
                addedFromPersistedData: addedFromPersistedData,
                serviceScope: this._childScope,
                reservedHeight: reservedHeight,
                widthCacheKey: this._getWidthCacheKey()
            };
        },
        enumerable: true,
        configurable: true
    });
    WebPartZone.prototype._reveal = function () {
        var _this = this;
        if (_canvasAnimations__WEBPACK_IMPORTED_MODULE_11__["CanvasRevealObserver"].isAvailable() &&
            this.props.displayMode === _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_6__["DisplayMode"].Read &&
            this._revealDiv &&
            this._revealDiv.current) {
            this.props.store.revealObserver.observe(this._revealDiv.current, function (entry, observer) {
                _this.setState({ isVisible: true });
                observer.unobserve(entry.target);
            });
        }
    };
    WebPartZone.webPartManagerInitialized = false;
    WebPartZone._logSource = _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_5__["_LogSource"].create('WebPartZone');
    return WebPartZone;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));



/***/ }),

/***/ "G89h":
/*!********************************************************************************!*\
  !*** ./lib/sp-canvas/canvas/editChunk/canvasDiff/DeferredGetDomDiffStrings.js ***!
  \********************************************************************************/
/*! exports provided: deferredGetDomDiffStrings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deferredGetDomDiffStrings", function() { return deferredGetDomDiffStrings; });
/* harmony import */ var _DeferredCanvasDiff__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DeferredCanvasDiff */ "o0cL");

// tslint:disable:variable-name
/**
 * @internal
 */
var deferredGetDomDiffStrings = function (leftNodeString, rightNodeString) {
    // @todo https://dev.azure.com/onedrive/CSI/_workitems/edit/875993
    return Object(_DeferredCanvasDiff__WEBPACK_IMPORTED_MODULE_0__["canvasDiffLoader"])().then(function (diffModules) {
        return diffModules.getDomDiffStrings(leftNodeString, rightNodeString);
    });
};


/***/ }),

/***/ "I6O9":
/*!***************************************!*\
  !*** external "@microsoft/sp-loader" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_I6O9__;

/***/ }),

/***/ "IGxH":
/*!*************************************************************************!*\
  !*** ./lib/sp-canvas/canvas/canvasStore/CanvasWebPartClassification.js ***!
  \*************************************************************************/
/*! exports provided: EUPL_APPROVED_WEB_PARTS, EUPL_CANDIDATE_WEB_PARTS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EUPL_APPROVED_WEB_PARTS", function() { return EUPL_APPROVED_WEB_PARTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EUPL_CANDIDATE_WEB_PARTS", function() { return EUPL_CANDIDATE_WEB_PARTS; });
/**
 * This contains First tier of the first party performance approved web parts. These are most perofmrnace critical
 * baseline tracked as out of the box experience we provide to the end customer.
 */
var EUPL_APPROVED_WEB_PARTS = new Set([
    '20745d7d-8581-4a6c-bf26-68279bc123fc',
    'd1d91016-032f-456d-98a4-721247c305e8',
    'af8be689-990e-492a-81f7-ba3e4cd3ed9c',
    'c4bd7b2f-7b6e-4599-8485-16504575f590',
    '8c88f208-6c77-4bdb-86a0-0c47b4316588',
    'a5df8fdf-b508-4b66-98a6-d83bc2597f63',
    '0ef418ba-5d19-4ade-9db0-b339873291d0',
    '7f718435-ee4d-431c-bdbf-9c4ff326f46e',
    'c70391ea-0b10-4ee9-b2b4-006d3fcad0cd' // QuickLinksWebPart
]);
/**
 * These are candidates for first tier but haven't been optimized fully for performance
 * TODO: Collect Information for Perf pipeline
 */
var EUPL_CANDIDATE_WEB_PARTS = new Set([
    'eb95c819-ab8f-4689-bd03-0c2d65d47b1f',
    'daf0b71c-6de8-4ef7-b511-faae7c388708',
    '6676088b-e28e-4a90-b9cb-d0d0303cd2eb' // GroupCalendarWebPart
]);


/***/ }),

/***/ "JqQl":
/*!*****************************************************!*\
  !*** ./lib/sp-canvas/canvas/canvasSection/index.js ***!
  \*****************************************************/
/*! exports provided: EmptyCanvasSection, CanvasFullWidthSection, CanvasSection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EmptyCanvasSection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EmptyCanvasSection */ "0/FH");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EmptyCanvasSection", function() { return _EmptyCanvasSection__WEBPACK_IMPORTED_MODULE_0__["EmptyCanvasSection"]; });

/* harmony import */ var _CanvasFullWidthSection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CanvasFullWidthSection */ "K4PZ");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CanvasFullWidthSection", function() { return _CanvasFullWidthSection__WEBPACK_IMPORTED_MODULE_1__["CanvasFullWidthSection"]; });

/* harmony import */ var _CanvasSection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CanvasSection */ "5Nkd");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CanvasSection", function() { return _CanvasSection__WEBPACK_IMPORTED_MODULE_2__["CanvasSection"]; });






/***/ }),

/***/ "K4PZ":
/*!**********************************************************************!*\
  !*** ./lib/sp-canvas/canvas/canvasSection/CanvasFullWidthSection.js ***!
  \**********************************************************************/
/*! exports provided: CanvasFullWidthSection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanvasFullWidthSection", function() { return CanvasFullWidthSection; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @microsoft/office-ui-fabric-react-bundle */ "KL1q");
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ms_sp_canvas_read__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ms/sp-canvas-read */ "sSDQ");
/* harmony import */ var _ms_sp_canvas_read__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ms_sp_canvas_read__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _CanvasSection__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./CanvasSection */ "5Nkd");
/* harmony import */ var _CanvasSection_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./CanvasSection.scss */ "v3Ow");
/* harmony import */ var _editChunk__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../editChunk */ "9s5w");
/* harmony import */ var _common_KillSwitches__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../common/KillSwitches */ "17t3");
/**
 * @file CanvasFullWidthSection.ts
 * @copyright (c) Microsoft Corporation. All rights reserved.
 */










var FULL_WIDTH_ITEM_IDS = [
    'd1d91016-032f-456d-98a4-721247c305e8',
    'c4bd7b2f-7b6e-4599-8485-16504575f590' // Hero
];
/**
 * Represents a full width section layout component
 */
var CanvasFullWidthSection = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(CanvasFullWidthSection, _super);
    function CanvasFullWidthSection() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._toolboxItems = [];
        return _this;
    }
    CanvasFullWidthSection.isFullWidth = function (position) {
        return position && position.sectionFactor === 0;
    };
    CanvasFullWidthSection.isFullWidthControl = function (control) {
        if (control && control.controlType === _ms_sp_canvas_read__WEBPACK_IMPORTED_MODULE_4__["CanvasControlType"].WebPartZone) {
            // @todo [VSO:SPPPlat] #345537 Full bleed and hide in toolbox props missing from server.
            // Remove the web part id check from here when it works.
            return ((control.webPartManifest && control.webPartManifest.supportsFullBleed) ||
                FULL_WIDTH_ITEM_IDS.indexOf(control.webPartId) !== -1);
        }
        return false;
    };
    CanvasFullWidthSection.setFullWidthWebPartProperty = function (control, value) {
        // For full width, we need to set an extra property
        if (control.webPartData) {
            control.webPartData.properties.isFullWidth = value;
        }
    };
    CanvasFullWidthSection.prototype.componentDidMount = function () {
        if (this.props.store.displayMode === _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_3__["DisplayMode"].Edit) {
            this._openToolbox();
        }
    };
    CanvasFullWidthSection.prototype.componentDidUpdate = function () {
        var store = this.props.store;
        if (store.displayMode === _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_3__["DisplayMode"].Edit && !this._isToolboxOpen) {
            this._openToolbox();
        }
        else if (store.displayMode === _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_3__["DisplayMode"].Read) {
            this._isToolboxOpen = false;
        }
    };
    CanvasFullWidthSection.prototype._addToolBoxHint = function (nextCtrlPosition) {
        /**
         * Don't need to add toolbox hint
         */
    };
    CanvasFullWidthSection.prototype._getLayoutSectionClassName = function (isReadMode, isSectionSelected) {
        var layoutSectionClassName = _super.prototype._getLayoutSectionClassName.call(this, isReadMode, isSectionSelected);
        layoutSectionClassName += Object(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_2__["css"])({
            ' CanvasSectionFullWidth--read': isReadMode,
            ' CanvasSection--fullWidth': this.props.section.controls.length !== 0,
            reduceFullWidthSpacing: this.props.section.controls.length !== 0 && !Object(_common_KillSwitches__WEBPACK_IMPORTED_MODULE_8__["isFixFullWidthSpacingKsActivated"])()
        });
        return layoutSectionClassName;
    };
    CanvasFullWidthSection.prototype._shouldCenterAlignHint = function () {
        var store = this.props.store;
        return store.shouldCenterAlign;
    };
    CanvasFullWidthSection.prototype._getContentSelectionMechanism = function (firstControlLayout) {
        var store = this.props.store;
        return (this.props.section.controls.length === 0 &&
            store.displayMode === _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_3__["DisplayMode"].Edit && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_editChunk__WEBPACK_IMPORTED_MODULE_7__["DeferredToolboxFullBleedComponent"], { items: this._toolboxItems, clickItem: store.getEditModule('actions').handleToolboxItemClick })));
    };
    Object.defineProperty(CanvasFullWidthSection.prototype, "_dragDisallowedAreaTag", {
        get: function () {
            return _editChunk__WEBPACK_IMPORTED_MODULE_7__["CanvasDragZoneConstants"].fullWidthSectionTag;
        },
        enumerable: true,
        configurable: true
    });
    CanvasFullWidthSection.prototype._openToolbox = function () {
        this._isToolboxOpen = true;
        var _a = this.props, zoneIndex = _a.zoneIndex, section = _a.section, layoutIndex = _a.layoutIndex;
        var firstControlLayout = {
            zoneIndex: zoneIndex,
            sectionIndex: section.index,
            controlIndex: this._firstControlIdx,
            sectionFactor: section.factor,
            layoutIndex: layoutIndex
        };
        try {
            // Open full width toolbox on render
            this._openFullWidthToolbox(firstControlLayout);
        }
        catch (error) {
            // TODO#671414 Find a better practice of loading edit actions.
            this._isToolboxOpen = false;
        }
    };
    CanvasFullWidthSection.prototype._openFullWidthToolbox = function (position) {
        var store = this.props.store;
        this._toolboxItems = store.getEditModule('actions').getToolboxItems("FullWidth" /* FullWidth */, position);
        this.forceUpdate();
    };
    return CanvasFullWidthSection;
}(_CanvasSection__WEBPACK_IMPORTED_MODULE_5__["CanvasSection"]));



/***/ }),

/***/ "KL1q":
/*!***********************************************************!*\
  !*** external "@microsoft/office-ui-fabric-react-bundle" ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_KL1q__;

/***/ }),

/***/ "Kw1M":
/*!************************************************************!*\
  !*** ./lib/sp-canvas/canvas/canvasZone/CanvasZone.scss.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* tslint:disable */
__webpack_require__(/*! ./CanvasZone.css */ "CQTG");
var styles = {};
/* harmony default export */ __webpack_exports__["default"] = (styles);
/* tslint:enable */ 


/***/ }),

/***/ "Lyn5":
/*!****************************************************************!*\
  !*** ./lib/sp-canvas/canvas/canvasLayout/CanvasSectionPart.js ***!
  \****************************************************************/
/*! exports provided: CanvasSectionPart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanvasSectionPart", function() { return CanvasSectionPart; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/sp-lodash-subset */ "Pk8u");
/* harmony import */ var _microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ms_sp_canvas_read__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ms/sp-canvas-read */ "sSDQ");
/* harmony import */ var _ms_sp_canvas_read__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ms_sp_canvas_read__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _CanvasLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CanvasLayout */ "aNx7");
/**
 * @file CanvasSectionPart.ts
 * @copyright (c) Microsoft Corporation. All rights reserved.
 */




/**
 * Represents the Canvas Section Layout Part
 */
var CanvasSectionPart = /** @class */ (function () {
    /**
     * Creates a new instance of a CanvasSectionPart
     * @param sectionIdx represents the section index
     */
    function CanvasSectionPart(sectionIdx, emphasis, factor) {
        this._index = sectionIdx;
        this._emphasis = emphasis;
        this._factor = factor;
        this._controlsMap = new Map();
    }
    Object.defineProperty(CanvasSectionPart.prototype, "emptySectionControl", {
        get: function () {
            return {
                controlType: undefined,
                id: CanvasSectionPart.emptySectionId,
                position: {
                    zoneIndex: undefined,
                    sectionIndex: this._index,
                    controlIndex: undefined,
                    sectionFactor: this._factor
                }
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CanvasSectionPart.prototype, "factor", {
        /**
         * Gets the section factor.
         * @returns The section factor.
         */
        get: function () {
            return this._factor;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CanvasSectionPart.prototype, "index", {
        /**
         * Gets the index associated with this section
         * @returns the section index
         */
        get: function () {
            return this._index;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CanvasSectionPart.prototype, "emphasis", {
        get: function () {
            return this._emphasis;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CanvasSectionPart.prototype, "controls", {
        /**
         * Gets the controls associated with the current section
         * @returns the controls in that section
         */
        get: function () {
            var canvasControls = [];
            this._controlsMap.forEach(function (control) {
                canvasControls.push(control);
            });
            return canvasControls.sort(function (ctrl1, ctrl2) {
                return ctrl1.position.controlIndex - ctrl2.position.controlIndex; // Todo#661360 Fix workaround left-over
            });
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Adds a new control in the pertinent section
     * @param control represents the control to add
     * @returns id of control that was added
     */
    CanvasSectionPart.prototype.addControl = function (canvasControl, addedFromToolbox) {
        if (canvasControl.controlType === _ms_sp_canvas_read__WEBPACK_IMPORTED_MODULE_2__["CanvasControlType"].WebPartZone ||
            canvasControl.controlType === _ms_sp_canvas_read__WEBPACK_IMPORTED_MODULE_2__["CanvasControlType"].RTE) {
            // If the control is undefined or isn't associated with a layout, return
            if (!_CanvasLayout__WEBPACK_IMPORTED_MODULE_3__["CanvasLayout"].isPositionValid(canvasControl.position)) {
                return undefined;
            }
            var curControlIndex = canvasControl.position.controlIndex;
            if (curControlIndex === undefined) {
                // Control index isnt defined, cannot proceed
                return undefined;
            }
            if (canvasControl.emphasis === undefined || canvasControl.emphasis.sectionEmphasis !== this._emphasis) {
                // Update control's emphasis if it's not aligned with the section emphasis.
                canvasControl.emphasis = canvasControl.emphasis || {};
                canvasControl.emphasis = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, canvasControl.emphasis), { sectionEmphasis: this._emphasis });
            }
            // Get the pertinent control if available
            var sectionControl = this._controlsMap.get(curControlIndex);
            if (!sectionControl) {
                // This is a new control, add it to the sections
                this._controlsMap.set(curControlIndex, canvasControl);
            }
            else {
                // Attempting to add a new control above an existing control. Regenerate layout
                var layoutControlItems = this.controls.map(function (control) {
                    return {
                        index: control.position.controlIndex // Todo#661360 Fix workaround left-over
                    };
                });
                canvasControl.position = _CanvasLayout__WEBPACK_IMPORTED_MODULE_3__["CanvasLayout"].cloneMerge(canvasControl.position, {
                    zoneIndex: undefined,
                    sectionIndex: undefined,
                    controlIndex: _CanvasLayout__WEBPACK_IMPORTED_MODULE_3__["CanvasLayout"].generateNewLayoutIndex(layoutControlItems, curControlIndex)
                });
                if (canvasControl.position.controlIndex === undefined) {
                    // Could not generate a new index, cannot proceed
                    return undefined;
                }
                // Add the control and update the layout
                this._controlsMap.set(canvasControl.position.controlIndex, canvasControl);
            }
        }
        return canvasControl.id;
    };
    CanvasSectionPart.prototype.updateControl = function (control) {
        var controlIndex = control.position.controlIndex;
        if (controlIndex && !Object(_microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_1__["isEqual"])(this._controlsMap.get(controlIndex), control)) {
            this._controlsMap.set(controlIndex, control);
            return true;
        }
        else {
            return false;
        }
    };
    /**
     * Moves a control inside the section.
     * @param control The control to be moved
     * @param newControlPosition The position where the control will be moved to
     */
    CanvasSectionPart.prototype.moveControl = function (control, newControlPosition) {
        if (!control ||
            control.position.zoneIndex !== newControlPosition.zoneIndex ||
            control.position.sectionIndex !== newControlPosition.sectionIndex) {
            return undefined;
        }
        if (control.position.controlIndex !== undefined) {
            this._controlsMap.delete(control.position.controlIndex);
        }
        var siblingLayoutItems = this.controls.map(function (ctrl) {
            return {
                index: ctrl.position.controlIndex // Todo#661360 Fix workaround left-over
            };
        });
        control.position = _CanvasLayout__WEBPACK_IMPORTED_MODULE_3__["CanvasLayout"].cloneMerge(control.position, {
            // Todo#661360 Fix workaround left-over
            controlIndex: _CanvasLayout__WEBPACK_IMPORTED_MODULE_3__["CanvasLayout"].generateNewLayoutIndex(siblingLayoutItems, newControlPosition.controlIndex)
        });
        // Todo#661360 Fix workaround left-over
        this._controlsMap.set(control.position.controlIndex, control);
        return control.position;
    };
    /**
     * Removes a control
     * @param controlPosition represents the control to remove
     * @returns id of control that was removed
     */
    CanvasSectionPart.prototype.removeControl = function (controlPosition) {
        // If the control is undefined or isn't associated with a layout, return
        if (!controlPosition) {
            return undefined;
        }
        // Remove the control from the designated index
        var control = controlPosition.controlIndex !== undefined
            ? this._controlsMap.get(controlPosition.controlIndex)
            : undefined;
        if (!control) {
            // control not found, return
            return undefined;
        }
        // Remove the control from the layout
        if (control.position.controlIndex !== undefined) {
            this._controlsMap.delete(control.position.controlIndex);
        }
        return control.id;
    };
    /**
     * Fetches a control from the layout
     * @param controlPosition represents the position of the control
     * @returns the underlying control if available in the section
     */
    CanvasSectionPart.prototype.fetchControl = function (controlPosition) {
        // Verify its a valid layout
        if (!controlPosition || controlPosition.controlIndex === undefined) {
            return undefined;
        }
        return this._controlsMap.get(controlPosition.controlIndex);
    };
    /**
     * Fetch all controls that are available in that section
     * @returns all the controls associated with the section
     */
    CanvasSectionPart.prototype.fetchAllControls = function () {
        return this.controls;
    };
    /**
     * Determines if the underlying layout is empty
     * @returns true if the section is empty
     */
    CanvasSectionPart.prototype.isEmpty = function () {
        return this.fetchAllControls().length === 0;
    };
    /**
     * Disposes the section
     */
    CanvasSectionPart.prototype.dispose = function () {
        this._controlsMap.clear();
    };
    /**
     * Change the section factor of the section.
     *
     * @param newFactor - The new section factor.
     */
    CanvasSectionPart.prototype.changeFactor = function (newFactor) {
        this._controlsMap.forEach(function (control) {
            control.position = _CanvasLayout__WEBPACK_IMPORTED_MODULE_3__["CanvasLayout"].cloneMerge(control.position, {
                zoneIndex: undefined,
                sectionIndex: undefined,
                sectionFactor: newFactor,
                controlIndex: undefined,
                layoutIndex: undefined
            });
        });
        this._factor = newFactor;
    };
    /**
     * Change the emphasis of the section.
     *
     * @param emphasis - The new emphasis
     */
    CanvasSectionPart.prototype.changeEmphasis = function (emphasis) {
        this._controlsMap.forEach(function (control) {
            control.emphasis = _CanvasLayout__WEBPACK_IMPORTED_MODULE_3__["CanvasLayout"].cloneMerge(control.emphasis, emphasis);
        });
        this._emphasis = emphasis.sectionEmphasis;
    };
    return CanvasSectionPart;
}());



/***/ }),

/***/ "MCvD":
/*!*************************************************************************!*\
  !*** ./lib/sp-canvas/canvas/editChunk/canvasDragZone/CanvasDragZone.js ***!
  \*************************************************************************/
/*! exports provided: CanvasDragZone */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanvasDragZone", function() { return CanvasDragZone; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ms_sp_dragzone__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ms/sp-dragzone */ "iiHs");
/* harmony import */ var _ms_sp_dragzone__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ms_sp_dragzone__WEBPACK_IMPORTED_MODULE_2__);



var CanvasDragZone = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(CanvasDragZone, _super);
    function CanvasDragZone() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CanvasDragZone.prototype.render = function () {
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ms_sp_dragzone__WEBPACK_IMPORTED_MODULE_2__["DragZone"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ isEnabled: this._isEnabled }, this._sectionDragZoneProps),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ms_sp_dragzone__WEBPACK_IMPORTED_MODULE_2__["DragZone"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ isEnabled: this._isEnabled }, this._webPartDragZoneProps), this.props.children)));
    };
    Object.defineProperty(CanvasDragZone.prototype, "_sectionDragZoneProps", {
        get: function () {
            var editModule = this.props.editModule;
            return this._isEditModuleEnabled(editModule) ? editModule.sectionDragZoneUtils.getDragZoneProps() : {};
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CanvasDragZone.prototype, "_webPartDragZoneProps", {
        get: function () {
            var editModule = this.props.editModule;
            return this._isEditModuleEnabled(editModule) ? editModule.webPartDragZoneUtils.getDragZoneProps() : {};
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Type guard that always ensure the edit module exists when it's enabled.
     */
    CanvasDragZone.prototype._isEditModuleEnabled = function (editModule) {
        return editModule.isEnabled;
    };
    Object.defineProperty(CanvasDragZone.prototype, "_isEnabled", {
        get: function () {
            return this.props.editModule.isEnabled;
        },
        enumerable: true,
        configurable: true
    });
    return CanvasDragZone;
}(react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]));



/***/ }),

/***/ "NhzL":
/*!**************************************************************************!*\
  !*** ./lib/sp-canvas/canvas/webPartZone/shouldFallbackSetWebPartData.js ***!
  \**************************************************************************/
/*! exports provided: shouldFallbackSetWebPartData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shouldFallbackSetWebPartData", function() { return shouldFallbackSetWebPartData; });
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__);

/**
 * A map that records kill switch ids for individual web parts so opted-in web parts could opt-out by activating
 * the corresponding kill switch. This map takes web part manifest ids as keys and kill switch ids as values.
 */
var _undoRedoWebPartManifestKillSwitchMap = new Map([
    // News
    ['8c88f208-6c77-4bdb-86a0-0c47b4316588', '04cd47e6-da49-42d6-96b9-292d7d4a2568'],
    // Related Topics
    ['81ce1eba-74ad-4f0d-a692-2133b98bc308', '9153770a-85fe-4b68-8e06-d8ce370b26c0']
]);
function isWebPartExemptFromDynamicDataUpdate(wpManifest) {
    var killSwitchId = _undoRedoWebPartManifestKillSwitchMap.get(wpManifest.id);
    return Boolean(killSwitchId &&
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPKillSwitch"].isActivated(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Guid"].parse(killSwitchId), '07/31/2019', 'Web part is exempt from dynamic data update'));
}
/**
 * Definition of the useFallbackWhenPropertiesUpdatedExternally web part manifest flag:
 * - If true, the web part will be disposed and reloaded when the web part data is updated by an external source.
 * - If false, the web part data will be deserialized and the properties of the web part will be updated,
 *   onAfterPropertiesUpdatedExternally will be executed.
 * - If undefined, right now it defaults to true. VSO#739036 when undo redo flight (1457) is GA, it should default
 *   to false for web parts that are built with the latest SPFx version, and default to true for web parts that
 *   are built with old SPFx version.
 * @param wpManifest - The manifest of the web part.
 */
function shouldFallbackSetWebPartData(wpManifest) {
    if (isWebPartExemptFromDynamicDataUpdate(wpManifest)) {
        return true;
    }
    var useFallbackWhenPropertiesUpdatedExternally = wpManifest.useFallbackWhenPropertiesUpdatedExternally;
    if (useFallbackWhenPropertiesUpdatedExternally === undefined) {
        // Mark kill-switched code as comments instead of removing it when graduating the kill switch.
        return true;
        // VSO#739036 Enable below logic of SPFx version hard cut-off when undo-redo (Flight 1457) reaches GA
        // const version: Version | undefined = Version._tryParseSPFxVersion(wpManifest);
        // return !version || version.lessThan(Version.parse('2.0'));
    }
    else {
        return useFallbackWhenPropertiesUpdatedExternally;
    }
}


/***/ }),

/***/ "OSqv":
/*!******************************************************************************************************!*\
  !*** ./lib/sp-canvas/canvas/editChunk/canvasZonePropertyPane/canvasZonePropertyPaneControlLoader.js ***!
  \******************************************************************************************************/
/*! exports provided: canvasZonePropertyPaneControlLoader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "canvasZonePropertyPaneControlLoader", function() { return canvasZonePropertyPaneControlLoader; });
var canvasZonePropertyPaneControlLoader = function () {
    return __webpack_require__.e(/*! import() | sp-canvas-edit */ "sp-canvas-edit").then(__webpack_require__.bind(null, /*! ./CanvasZonePropertyPaneControl */ "LBkn")).then(function (module) { return module.CanvasZonePropertyPaneControl; });
};


/***/ }),

/***/ "PBv6":
/*!**************************************************************!*\
  !*** ./lib/sp-canvas/common/CanvasAlignmentStyles.styles.js ***!
  \**************************************************************/
/*! exports provided: CanvasAlignmentStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanvasAlignmentStyles", function() { return CanvasAlignmentStyles; });
/* harmony import */ var _ms_sp_canvas_read__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ms/sp-canvas-read */ "sSDQ");
/* harmony import */ var _ms_sp_canvas_read__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ms_sp_canvas_read__WEBPACK_IMPORTED_MODULE_0__);

var CanvasAlignmentStyles = /** @class */ (function () {
    function CanvasAlignmentStyles() {
    }
    CanvasAlignmentStyles.getToolbarClassNames = function (props) {
        return Object(_ms_sp_canvas_read__WEBPACK_IMPORTED_MODULE_0__["getClassNames"])(CanvasAlignmentStyles._getToolbarStyles, props);
    };
    CanvasAlignmentStyles.getHintClassNames = function (props) {
        return Object(_ms_sp_canvas_read__WEBPACK_IMPORTED_MODULE_0__["getClassNames"])(CanvasAlignmentStyles._getHintStyles, props);
    };
    CanvasAlignmentStyles._getToolbarStyles = function (props) {
        var offset = props.offset, root = props.root;
        return {
            root: [
                root,
                'AlignedToolbar',
                {
                    left: offset
                }
            ]
        };
    };
    CanvasAlignmentStyles._getHintStyles = function (props) {
        var offset = props.offset, root = props.root;
        var toolbarReservedWidth = 32;
        return {
            root: [
                root,
                'AlignedHint',
                {
                    left: offset + toolbarReservedWidth,
                    width: "calc(100% + " + -(offset + toolbarReservedWidth) + "px)"
                }
            ]
        };
    };
    return CanvasAlignmentStyles;
}());



/***/ }),

/***/ "PPgh":
/*!***************************************************************!*\
  !*** ./lib/sp-canvas/canvas/canvasSection/CanvasSection.resx ***!
  \***************************************************************/
/*! exports provided: WebpartToolbarConfigButtonTitle, WebpartToolbarMoveButtonTitle, WebpartToolbarDeleteButtonTitle, ToolboxHintTitleWithLayout, ToolboxHintColumnOne, ToolboxHintColumnTwo, ToolboxHintColumnThree, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"WebpartToolbarConfigButtonTitle\":\"Edit web part\",\"WebpartToolbarMoveButtonTitle\":\"Move web part\",\"WebpartToolbarDeleteButtonTitle\":\"Delete web part\",\"ToolboxHintTitleWithLayout\":\"Add a new web part in {0}\",\"ToolboxHintColumnOne\":\"column one\",\"ToolboxHintColumnTwo\":\"column two\",\"ToolboxHintColumnThree\":\"column three\"}");

/***/ }),

/***/ "Pk8u":
/*!**********************************************!*\
  !*** external "@microsoft/sp-lodash-subset" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_Pk8u__;

/***/ }),

/***/ "QHyI":
/*!*********************************************************!*\
  !*** ./lib/sp-canvas/canvas/canvasZone/CanvasZone.resx ***!
  \*********************************************************/
/*! exports provided: ZoneToolbarConfigButtonTitle, ZoneToolbarMoveButtonTitle, ZoneToolbarDeleteButtonTitle, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"ZoneToolbarConfigButtonTitle\":\"Edit section\",\"ZoneToolbarMoveButtonTitle\":\"Move section\",\"ZoneToolbarDeleteButtonTitle\":\"Delete section\"}");

/***/ }),

/***/ "QfGm":
/*!***************************************************!*\
  !*** ./lib/sp-canvas/canvas/controlZone/index.js ***!
  \***************************************************/
/*! exports provided: ControlZone */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ControlZone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ControlZone */ "EPam");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ControlZone", function() { return _ControlZone__WEBPACK_IMPORTED_MODULE_0__["ControlZone"]; });




/***/ }),

/***/ "S64i":
/*!******************************************************************************!*\
  !*** ./lib/sp-canvas/canvas/CanvasVerticalSection/CanvasVerticalSection.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../../../../common/temp/node_modules/.pnpm/css-loader@3.2.1_webpack@4.44.2/node_modules/css-loader/dist/cjs.js!../../../../../../common/temp/node_modules/.pnpm/postcss-loader@3.0.0/node_modules/postcss-loader/src??postcss!./CanvasVerticalSection.css */ "ZpMc");
var loader = __webpack_require__(/*! @microsoft/load-themed-styles */ "jOlS");

if(typeof content === "string") content = [[module.i, content]];

// add the styles to the DOM
for (var i = 0; i < content.length; i++) loader.loadStyles(content[i][1], true);

if(content.locals) module.exports = content.locals;

/***/ }),

/***/ "TOEr":
/*!*********************************************************!*\
  !*** ./lib/sp-canvas/canvas/canvasStore/CanvasStore.js ***!
  \*********************************************************/
/*! exports provided: CanvasStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanvasStore", function() { return CanvasStore; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/sp-lodash-subset */ "Pk8u");
/* harmony import */ var _microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @microsoft/sp-diagnostics */ "ut3N");
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _microsoft_sp_page_context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @microsoft/sp-page-context */ "X+PM");
/* harmony import */ var _microsoft_sp_page_context__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_page_context__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _microsoft_sp_webpart_base__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @microsoft/sp-webpart-base */ "br4S");
/* harmony import */ var _microsoft_sp_webpart_base__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_webpart_base__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ms/sp-telemetry */ "2q6Q");
/* harmony import */ var _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _CanvasFields__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./CanvasFields */ "dYQ3");
/* harmony import */ var _canvasAnimations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../canvasAnimations */ "fqJ2");
/* harmony import */ var _canvasLayout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../canvasLayout */ "yPt8");
/* harmony import */ var _CanvasStoreCommonActions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./CanvasStoreCommonActions */ "zjII");
/* harmony import */ var _canvasWebPartHost__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../canvasWebPartHost */ "wB5c");
/* harmony import */ var _canvasComponent__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../canvasComponent */ "j0qU");
/* harmony import */ var _ms_sp_canvas_read__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ms/sp-canvas-read */ "sSDQ");
/* harmony import */ var _ms_sp_canvas_read__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_ms_sp_canvas_read__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _CorruptSectionFactorFixer__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./CorruptSectionFactorFixer */ "kQ9N");
/* harmony import */ var _common_CanvasExperiments__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../common/CanvasExperiments */ "CXHJ");
/* harmony import */ var _common_Flights__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../common/Flights */ "qRiB");

















var USE_TIERED_CACHING = 1703; /* WEXTieredCaching */
var USE_MY_SITE_CACHE = 1705; /* WEXMySiteCacheMangementTieredCaching */
var CanvasStore = /** @class */ (function () {
    function CanvasStore(options) {
        var _this = this;
        this.handlePropertyPaneOpenOrClose = function () {
            _this.canvasFields.render();
        };
        this.addControlToCanvas = function (control, shouldRender, shouldPersistData) {
            if (shouldRender === void 0) { shouldRender = false; }
            if (shouldPersistData === void 0) { shouldPersistData = shouldRender; }
            _CanvasStoreCommonActions__WEBPACK_IMPORTED_MODULE_10__["CanvasStoreCommonActions"].addControlToCanvas(_this.canvasFields, control, shouldRender, shouldPersistData);
        };
        this._handleModuleLoadFailure = function (message) {
            var error = new Error(message);
            // Whenever any feature is calling an edit module before it's getting loaded, it indicates a bug in the code
            // triggering edit module too early. We log this in QOS to identify such errors in production.
            // Previously when this happens, we don't know which feature breaks and hard to track where it is.
            var qos = new _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__["_QosMonitor"]('CanvasStore.GetEditModuleFailed');
            qos.writeUnexpectedFailure(undefined, error, { stack: error.stack });
            return error;
        };
        this._handleResize = function () {
            _this.canvasFields.isTouchEnabled = CanvasStore._isTouchEnabled();
            _this.canvasFields.render();
        };
        var serviceScope = options.serviceScope, render = options.render, mode = options.mode, a11yManager = options.a11yManager;
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_3__["Validate"].isNotNullOrUndefined(serviceScope, 'serviceScope');
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_3__["Validate"].isNotNullOrUndefined(render, 'render');
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_3__["Validate"].isNotNullOrUndefined(mode, 'mode');
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_3__["Validate"].isNotNullOrUndefined(a11yManager, 'a11yManager');
        this._canvasFields = new _CanvasFields__WEBPACK_IMPORTED_MODULE_7__["CanvasFields"]();
        this.canvasFields.a11yManager = a11yManager;
        this.canvasFields.render = render;
        this.canvasFields.disposeAndRender = options.disposeAndRender;
        this.canvasFields.controlComponentMap = new Map();
        this.canvasFields.displayMode = mode;
        this.canvasFields.shouldCenterAlign = options.shouldCenterAlign || false;
        this.canvasFields.handleCanvasChanged = options.handleCanvasChanged;
        this.canvasFields.scrollThreshold = options.scrollThreshold || 0;
        this.canvasFields.pageLayoutType = options.pageLayoutType || '';
        this.canvasFields.doesUserHaveEditPermission = options.doesUserHaveEditPermission;
        this.canvasFields.onCanvasComponentMounted = options.onCanvasComponentMounted;
        serviceScope.whenFinished(function () {
            if (!options.isViewportLoadingDisabled) {
                _this.canvasFields.viewPortManager = options.viewportManager;
            }
            _this.canvasFields.webPartManager = _microsoft_sp_webpart_base__WEBPACK_IMPORTED_MODULE_5__["ClientSideWebPartManagerFactory"].create(new _canvasWebPartHost__WEBPACK_IMPORTED_MODULE_11__["CanvasWebPartHost"]({
                serviceScope: serviceScope,
                viewPortManager: _this._canvasFields.viewPortManager,
                handleResize: function () {
                    var _a;
                    var param = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        param[_i] = arguments[_i];
                    }
                    return (_a = _this.getEditModule('actions')).scrollIntoView.apply(_a, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(['full'], param));
                },
                isViewportLoadingDisabled: !!options.isViewportLoadingDisabled && !_microsoft_sp_webpart_base__WEBPACK_IMPORTED_MODULE_5__["ClientSideWebPartManager"].isMaintenanceMode,
                handleWebPartChanged: function (wpInstanceId) {
                    return _this.getEditModule('actions').handleWebPartChanged(wpInstanceId);
                },
                reclaimFocus: function () { return _this.getEditModule('actions').reclaimFocus(); },
                setSelectedWebPartId: function (id) {
                    _this.canvasFields.selectedControlIdInternal = id;
                }
            }));
        });
        this.canvasFields.serviceScope = serviceScope;
        this._isMobileBrowser = !!options.mobileBrowser;
        this._isRootScrollableElement = !!options.isRootScrollableElement;
        this.canvasFields.instantiateCanvasLayout(2);
        if (this.canvasFields.displayMode === _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_3__["DisplayMode"].Edit) {
            // Using 'void' to indicate that we are not interested in the returned value.
            // The current implementation of edit actions lazy-loading is highly relying on the logic to ensure that
            // before any edit API of CanvasStore is called, the edit actions is already loaded completed by calling
            // initializeForEditMode and it has to be finished before calling any edit APIs.
            // Todo#671414 Find a better way for edit actions lazy-load practice to ensure the code path is strictly safe.
            void this.initializeForEditMode();
        }
        serviceScope.whenFinished(function () {
            _this.canvasFields.pageContext = _this.canvasFields.serviceScope.consume(_microsoft_sp_page_context__WEBPACK_IMPORTED_MODULE_4__["PageContext"].serviceKey);
        });
        this.canvasFields.serializeDoc = new DOMParser().parseFromString('', 'text/html');
        this._debouncedHandleResize = _microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_1__["debounce"](this._handleResize, 100);
        window.addEventListener('resize', this._debouncedHandleResize);
    }
    CanvasStore._isValidControlType = function (controlProps) {
        return (controlProps.controlType >= 3 && controlProps.controlType <= 10) || !!controlProps.position;
    };
    CanvasStore._isTouchEnabled = function () {
        var os = _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_3__["_BrowserDetection"].getBrowserInformation().os;
        return os === _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_3__["_OS"].Android || os === _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_3__["_OS"].IOS;
    };
    CanvasStore.prototype.initializeForEditMode = function () {
        var _this = this;
        if (!this._editInitPromises) {
            this._editInitPromises = [];
            this._editInitPromises.push(this._loadPropertyPaneModule());
            // In case of unit tests, we will just load the file synchronously
            if (false) { var editEventsModule, editActionsModule; }
            else {
                this._editInitPromises.push(__webpack_require__.e(/*! import() | sp-canvas-edit */ "sp-canvas-edit").then(__webpack_require__.bind(null, /*! ../editChunk/index-deferred */ "xWOd")));
            }
        }
        if (false) {}
        else {
            return Promise.all(this._editInitPromises).then(function (value) {
                var _a = value[1], CanvasStoreEditActions = _a.CanvasStoreEditActions, ControlZoneEditEvents = _a.ControlZoneEditEvents;
                _this._editModules = {
                    actions: new CanvasStoreEditActions(_this),
                    controlZone: new ControlZoneEditEvents(_this)
                };
                _this._afterEditActionFileLoaded();
            });
        }
    };
    CanvasStore.prototype.getEditModule = function (key) {
        if (!this._editModules) {
            throw this._handleModuleLoadFailure('editModules not initialized');
        }
        else if (!this._editModules[key]) {
            throw this._handleModuleLoadFailure(key + " module failed to load.");
        }
        return this._editModules[key];
    };
    Object.defineProperty(CanvasStore.prototype, "a11yManager", {
        get: function () {
            return this.canvasFields.a11yManager;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CanvasStore.prototype, "controlsProps", {
        get: function () {
            return this.canvasFields.canvasControls;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CanvasStore.prototype, "canvasLayout", {
        get: function () {
            return this.canvasFields.canvasLayout;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CanvasStore.prototype, "canvasLayouts", {
        get: function () {
            return this.canvasFields.canvasLayouts;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CanvasStore.prototype, "deletedControlLayout", {
        get: function () {
            return this.canvasFields.deletedControlLayout;
        },
        set: function (layout) {
            this.canvasFields.deletedControlLayout = layout;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CanvasStore.prototype, "revealObserver", {
        get: function () {
            if (!this.canvasFields.revealObserver) {
                this.canvasFields.revealObserver = new _canvasAnimations__WEBPACK_IMPORTED_MODULE_8__["CanvasRevealObserver"]();
            }
            return this.canvasFields.revealObserver;
        },
        enumerable: true,
        configurable: true
    });
    CanvasStore.prototype.clearRevealObserver = function () {
        this.canvasFields.revealObserver = undefined;
    };
    Object.defineProperty(CanvasStore.prototype, "scrollableParent", {
        get: function () {
            return this.canvasFields.scrollableParent;
        },
        set: function (elem) {
            this.canvasFields.scrollableParent = elem;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CanvasStore.prototype, "displayMode", {
        get: function () {
            return this.canvasFields.displayMode;
        },
        enumerable: true,
        configurable: true
    });
    CanvasStore.prototype.setDisplayMode = function (newMode) {
        var _this = this;
        var promise = Promise.resolve();
        if (newMode === _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_3__["DisplayMode"].Edit) {
            promise = this.initializeForEditMode();
        }
        this.canvasFields.displayMode = newMode;
        return promise.then(function () {
            return _this.getEditModule('actions').setDisplayModeCore(newMode);
        });
    };
    Object.defineProperty(CanvasStore.prototype, "isNarrowMode", {
        get: function () {
            return this._isNarrowMode;
        },
        set: function (value) {
            this._isNarrowMode = value;
            this.canvasFields.render();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CanvasStore.prototype, "siteSupportsFullWidth", {
        get: function () {
            return this.canvasFields.shouldCenterAlign;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CanvasStore.prototype, "shouldCenterAlign", {
        get: function () {
            return this.canvasFields.shouldCenterAlign;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CanvasStore.prototype, "isRootScrollableElement", {
        get: function () {
            return this._isRootScrollableElement;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CanvasStore.prototype, "selectedZoneIndex", {
        // WEX! VSO:Task:312203 this should be merged with selectedControlId to create a canvasSelection object
        // when the CanvasStore.isLayoutSupported flight is removed
        get: function () {
            // Todo#661360 Fix workaround left-over
            return this.canvasLayout.controlsState.selectedZoneIndex;
        },
        set: function (zoneIndex) {
            this.canvasFields.selectedZoneIndex = zoneIndex;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CanvasStore.prototype, "canvasFields", {
        get: function () {
            return this._canvasFields;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CanvasStore.prototype, "scrollThreshold", {
        get: function () {
            return this.canvasFields.scrollThreshold;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CanvasStore.prototype, "pageContext", {
        get: function () {
            return this.canvasFields.pageContext;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CanvasStore.prototype, "pageLayoutType", {
        get: function () {
            return this.canvasFields.pageLayoutType;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CanvasStore.prototype, "serviceScope", {
        get: function () {
            return this.canvasFields.serviceScope;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CanvasStore.prototype, "canvasElement", {
        get: function () {
            return this.canvasFields.canvasElement;
        },
        set: function (elem) {
            this.canvasFields.canvasElement = elem;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CanvasStore.prototype, "mainCanvasElement", {
        get: function () {
            return this.canvasFields.mainCanvasElement;
        },
        set: function (elem) {
            this.canvasFields.mainCanvasElement = elem;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CanvasStore.prototype, "hoveredControlId", {
        get: function () {
            return this.canvasFields.hoveredControlId;
        },
        /**
         * The hoveredControlId keeps track of which control the pointer is currently over.
         * It is used as a workaround to track pointer events on web parts that have IFrames.
         */
        set: function (id) {
            this.canvasFields.hoveredControlId = id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CanvasStore.prototype, "selectedControlId", {
        get: function () {
            return this.canvasFields.selectedControlIdInternal;
        },
        set: function (id) {
            if (this.canvasFields.selectedControlIdInternal !== id) {
                this.canvasFields.selectedControlIdInternal = id;
                this.canvasFields.render();
            }
            if (id !== undefined && this.propertyPaneController && this.displayMode === _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_3__["DisplayMode"].Edit) {
                var isCurrentlyConfigured = this.propertyPaneController.currentlyConfiguredConsumerId === id;
                this.propertyPaneController.requestAction(id, isCurrentlyConfigured ? 'Refresh' : 'Default');
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CanvasStore.prototype, "webPartManager", {
        get: function () {
            return this.canvasFields.webPartManager;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CanvasStore.prototype, "propertyPaneController", {
        get: function () {
            return this._propertyPaneController;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CanvasStore.prototype, "isMobileBrowser", {
        get: function () {
            return this._isMobileBrowser;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CanvasStore.prototype, "selectedLayoutIndex", {
        get: function () {
            return this.canvasFields.selectedLayoutIndex
                ? this.canvasFields.selectedLayoutIndex
                : _canvasLayout__WEBPACK_IMPORTED_MODULE_9__["CanvasLayout"].firstLayoutIndex;
        },
        set: function (layoutIndex) {
            this.canvasFields.selectedLayoutIndex = layoutIndex;
        },
        enumerable: true,
        configurable: true
    });
    CanvasStore.prototype.shouldResize = function (layoutIndex) {
        var isPropertyPaneOpened = Boolean(this.propertyPaneController && this.propertyPaneController.isOpen());
        var canvasRect = this.canvasElement && this.canvasElement.getBoundingClientRect();
        return (this.displayMode === _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_3__["DisplayMode"].Edit &&
            layoutIndex === _canvasLayout__WEBPACK_IMPORTED_MODULE_9__["CanvasLayout"].firstLayoutIndex &&
            canvasRect &&
            canvasRect.width < CanvasStore.canvasMinWidth &&
            isPropertyPaneOpened);
    };
    CanvasStore.prototype.deserialize = function (displayMode, serializedCanvas) {
        var qos = this.createQosScope('Deserialize');
        var row;
        try {
            this.canvasFields.webPartsCount = 0;
            this.canvasFields.euplApprovedWebpartCount = 0;
            this.canvasFields.controlComponentMap = new Map();
            this._disposeCanvasLayouts();
            if (serializedCanvas) {
                var controlAttribute = 'data-sp-canvascontrol';
                var tryJson = true;
                // Check to see if the serializedCanvas value is potentially HTML
                if (serializedCanvas.indexOf(controlAttribute) !== -1) {
                    var wrapper = document.createElement('div');
                    // Replace all IMG tags with SPIMG so the browser doesn't try to pre-load them.
                    // We want to avoid pre-loading because the browser tries to download the full-size image here which leads
                    // to duplicate download of the same image in two sizes. To make this work, WebPartDataConverter detects both
                    // IMG and SPIMG tags.
                    // @todo #302709 this trick can be removed after using DomParser instead of document.createElement
                    wrapper.innerHTML = Object(_ms_sp_canvas_read__WEBPACK_IMPORTED_MODULE_13__["replaceImageTagsInHtmlString"])(serializedCanvas);
                    // We need to cleanup the html to remove any extra lines or spaces
                    wrapper.innerHTML = Object(_ms_sp_canvas_read__WEBPACK_IMPORTED_MODULE_13__["stripOutNewLinesAndSpacesFromInnerHTML"])(wrapper.innerHTML);
                    var rows = wrapper.querySelectorAll("[" + controlAttribute + "]");
                    var rowLength = rows.length;
                    // If rowLength is 0 then serializedCanvas is either an empty canvas or JSON
                    if (rowLength > 0) {
                        tryJson = false;
                        // Keeps track of the last zone/section that a WP has been added to in case any position data is missing
                        // Should stay as 1/1 for data loaded from non-layout page if there is no exception
                        var lastZoneIndex = 1, lastSectionIndex = 1, lastControlIndex = 1;
                        var hasNonLayoutData = false, hasLayoutData = false;
                        for (var i = 0; i < rowLength; ++i) {
                            row = rows[i];
                            // Note: The legacy support exists for previously persisted data that have legacy structure
                            // We use data-sp-canvasdataversion attribute because it didn't exist in the legacy format
                            var isLegacyHtml = !row.hasAttribute('data-sp-canvasdataversion');
                            var controlProps = void 0;
                            if (isLegacyHtml) {
                                controlProps = this._deserializeLegacyCanvasControlHtml(row);
                            }
                            else {
                                controlProps = this._deserializeCanvasControlHtml(row);
                            }
                            if (controlProps) {
                                if (_canvasLayout__WEBPACK_IMPORTED_MODULE_9__["CanvasLayout"].isPositionValid(controlProps.position)) {
                                    /** Make sure zoneIndex is updated in case any position data is found from a non-Layout page
                                     *  This value will be ignored in addControlToCanvas as controlProps.position is found
                                     */
                                    lastZoneIndex = controlProps.position.zoneIndex || lastZoneIndex;
                                    lastSectionIndex = controlProps.position.sectionIndex || lastSectionIndex;
                                    lastControlIndex = controlProps.position.controlIndex || lastControlIndex;
                                    hasLayoutData = true;
                                }
                                else {
                                    hasNonLayoutData = true;
                                    // The canvas control is saved without layout data.
                                    // Add the control without a specified position into the last section
                                    // zone/section loaded from a non-layout page should always be 1/1
                                    controlProps.position = Object(_canvasComponent__WEBPACK_IMPORTED_MODULE_12__["CreateEmptyZoneLayout"])(lastZoneIndex, lastSectionIndex, ++lastControlIndex);
                                }
                                if (hasLayoutData === hasNonLayoutData) {
                                    // only one of hasLayoutData and hasNonLayoutData is suppose to true
                                    _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__["_TraceLogger"].logVerbose(_CanvasFields__WEBPACK_IMPORTED_MODULE_7__["CanvasFields"].logSource, "Canvas layout data mismatch is found");
                                }
                                _CanvasStoreCommonActions__WEBPACK_IMPORTED_MODULE_10__["CanvasStoreCommonActions"].addControlToCanvas(this.canvasFields, controlProps);
                            }
                        }
                    }
                }
                /**
                 * If tryJson is still true, checking the flight will indicate either serializedCanvas
                 * is empty (false) or JSON (true)
                 */
                if (tryJson) {
                    this.processCanvasContent(displayMode, JSON.parse(serializedCanvas));
                }
                _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_6__["_PerformanceLogger"].setPerformanceProperty('CanvasEUPLApprovedWebParts', this.canvasFields.euplApprovedWebpartCount);
                _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_6__["_PerformanceLogger"].setPerformanceProperty('CanvasWebParts', this.canvasFields.webPartsCount);
            }
            qos.writeSuccess();
        }
        catch (err) {
            qos.writeExpectedFailure('Exception', err, {
                errorControl: row ? row.outerHTML : undefined
            });
        }
    };
    CanvasStore.prototype.processCanvasContent = function (displayMode, canvasContent) {
        var _this = this;
        var _a;
        this.canvasFields.webPartsCount = 0;
        this.canvasFields.euplApprovedWebpartCount = 0;
        this._disposeCanvasLayouts();
        var canvasControls;
        try {
            // We are explicitly excluding metadata here as the ControlType of metadata is 0.
            // The metadata is not supposed to be rendered and will be added back during serialization stage.
            canvasControls = canvasContent.filter(function (control) { return control && control.controlType !== _ms_sp_canvas_read__WEBPACK_IMPORTED_MODULE_13__["CanvasControlType"].Metadata; });
            var badSectionWorkaround = new _CorruptSectionFactorFixer__WEBPACK_IMPORTED_MODULE_14__["CorruptSectionFactorFixer"](canvasControls);
            if (displayMode === _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_3__["DisplayMode"].Read) {
                badSectionWorkaround.logEngagement();
            }
            else {
                canvasControls = badSectionWorkaround.getSectionFactorFixedControls();
            }
        }
        catch (error) {
            // Fall back when any error occurs.
            canvasControls = canvasContent;
        }
        if (canvasControls) {
            canvasControls.forEach(function (control, index) {
                control.addedFromPersistedData = true;
                // Fix up the deserialized position which is not reflecting our typing.
                if (!_canvasLayout__WEBPACK_IMPORTED_MODULE_9__["CanvasLayout"].isPositionValid(control.position)) {
                    control.position = Object(_canvasComponent__WEBPACK_IMPORTED_MODULE_12__["CreateEmptyZoneLayout"])(index + 1);
                }
                _this.addControlToCanvas(control);
            });
            this.canvasFields.webPartsExemptedFromViewPortLoading = Object(_ms_sp_canvas_read__WEBPACK_IMPORTED_MODULE_13__["getWebPartsExemptedFromViewPortLoading"])(canvasControls);
        }
        _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_6__["_PerformanceLogger"].setPerformanceProperty('CanvasEUPLApprovedWebParts', this.canvasFields.euplApprovedWebpartCount);
        _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_6__["_PerformanceLogger"].setPerformanceProperty('CanvasWebParts', this.canvasFields.webPartsCount);
        _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_6__["_PerformanceLogger"].setPerformanceProperty('IsRtePresent', ((_a = canvasControls) === null || _a === void 0 ? void 0 : _a.some(function (control) { return control.controlType === _ms_sp_canvas_read__WEBPACK_IMPORTED_MODULE_13__["CanvasControlType"].RTE; })) ? 'true' : 'false');
        var viewPortManager = this.canvasFields.viewPortManager;
        if (viewPortManager && this.canvasFields.displayMode === _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_3__["DisplayMode"].Read) {
            canvasControls
                .filter(_ms_sp_canvas_read__WEBPACK_IMPORTED_MODULE_13__["isWebPart"])
                .forEach(function (control) {
                return viewPortManager.reserve(Object(_ms_sp_canvas_read__WEBPACK_IMPORTED_MODULE_13__["getWebPartPerformanceTag"])(control.webPartManifest, control.id));
            });
        }
        if (!_common_Flights__WEBPACK_IMPORTED_MODULE_16__["Flights"].isCanvasReadOnlyEnabled()) {
            this._deleteUnmatchedCacheEntries();
        }
    };
    CanvasStore.prototype.dispose = function () {
        this.webPartManager.dispose();
        this.canvasLayout.dispose();
        window.removeEventListener('resize', this._debouncedHandleResize);
    };
    /**
     * Serialize the current contents of the Canvas as Object.
     *
     * @param forceReserialize - Indicate whether canvas should go through all of the controls to serialize.
     * If it is true, it increases runtime cost but can always get latest data of canvas when there is still some
     *  operations that have not been populated.
     * If it is false, it will return the data that has been auto-populated and serialized recently.
     *
     * @returns Serialized object of the Canvas at the time the method is invoked.
     */
    CanvasStore.prototype.serializeAsObject = function (forceReserialize) {
        if (forceReserialize === void 0) { forceReserialize = false; }
        var qos = _CanvasStoreCommonActions__WEBPACK_IMPORTED_MODULE_10__["CanvasStoreCommonActions"].createQosScope('Serialize');
        var controlData;
        try {
            var emtpySectionCount = 0;
            var controlDataCollection = [];
            for (var _i = 0, _a = this._canvasFields.canvasControls; _i < _a.length; _i++) {
                var control = _a[_i];
                if (control.id === _canvasLayout__WEBPACK_IMPORTED_MODULE_9__["CanvasSectionPart"].emptySectionId) {
                    control.id = "EMPTY_" + emtpySectionCount++;
                    controlData = control;
                }
                else {
                    if (!forceReserialize) {
                        controlData = _microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_1__["cloneDeep"](control);
                    }
                    else {
                        var controlComponent = this.canvasFields.getControlComponentById(control.id);
                        controlData = controlComponent ? controlComponent.serialize() : _microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_1__["cloneDeep"](control);
                    }
                    // We do not want to serialize the manifest.
                    if (controlData.controlType === _ms_sp_canvas_read__WEBPACK_IMPORTED_MODULE_13__["CanvasControlType"].WebPartZone) {
                        controlData.webPartManifest = undefined; // Todo#661360 Fix workaround left-over
                    }
                    // We do not want to serialize the isPhantomRTE prop because it is needed in edit mode only.
                    if (_common_CanvasExperiments__WEBPACK_IMPORTED_MODULE_15__["Experiments"].isRTEClickAnywhereExperimentEnabled() &&
                        controlData.controlType === _ms_sp_canvas_read__WEBPACK_IMPORTED_MODULE_13__["CanvasControlType"].RTE) {
                        controlData.isPhantomRTE = undefined;
                    }
                    // Themes are reinitialized at runtime
                    controlData.emphasisTheme = undefined;
                    controlData.theme = undefined;
                }
                controlDataCollection.push(controlData);
            }
            qos.writeSuccess();
            return controlDataCollection;
        }
        catch (err) {
            _CanvasStoreCommonActions__WEBPACK_IMPORTED_MODULE_10__["CanvasStoreCommonActions"].handleMonitoredException(qos, err, controlData && controlData.controlType === _ms_sp_canvas_read__WEBPACK_IMPORTED_MODULE_13__["CanvasControlType"].WebPartZone
                ? { id: controlData.webPartId }
                : undefined);
            throw err;
        }
    };
    CanvasStore.prototype.tryGeneratePreviewImageUrl = function () {
        var qos = _CanvasStoreCommonActions__WEBPACK_IMPORTED_MODULE_10__["CanvasStoreCommonActions"].createQosScope('GeneratePreviewImageUrl');
        try {
            var webpartIds = [];
            for (var _i = 0, _a = this._canvasFields.canvasControls; _i < _a.length; _i++) {
                var control = _a[_i];
                if (control.controlType === _ms_sp_canvas_read__WEBPACK_IMPORTED_MODULE_13__["CanvasControlType"].WebPartZone) {
                    webpartIds.push(control.id);
                }
            }
            var previewUrl = this.webPartManager.tryGeneratePreviewImageUrl(webpartIds);
            qos.writeSuccess();
            return previewUrl;
        }
        catch (err) {
            var pathLengthErrorKey = 'PathLengthError';
            if (err && err.message && err.message.indexOf(pathLengthErrorKey) > -1) {
                // Expected since we can't enforce 3rd party callers to not exceed the length
                qos.writeExpectedFailure(pathLengthErrorKey, err);
                return undefined;
            }
            else {
                _CanvasStoreCommonActions__WEBPACK_IMPORTED_MODULE_10__["CanvasStoreCommonActions"].handleMonitoredException(qos, err);
            }
        }
    };
    Object.defineProperty(CanvasStore.prototype, "webPartsCount", {
        get: function () {
            return this.canvasFields.webPartsCount;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * If the Canvas is in DisplayMode.Edit, asynchronously fetch web part manifests in the background. If the Canvas is
     *  not in DisplayMode.Edit, fetch can be forced.
     */
    CanvasStore.prototype.fetchWebParts = function (force) {
        var _this = this;
        if (!this.canvasFields.fetchedWebparts && (_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_3__["DisplayMode"].Edit === this.canvasFields.displayMode || force)) {
            /**
             * We only need to fetch the web part manifests once per site. If the SPSite changed, then a full page
             * refresh would have happened thus resetting the value.
             */
            return this.webPartManager.fetchWebPartManifests().then(function () {
                // Set sentinel so we don't attempt to fetch again
                _this.canvasFields.fetchedWebparts = true;
            });
        }
        else {
            return Promise.resolve();
        }
    };
    /**
     * Prepare canvas for new page content when page transition starts.
     */
    CanvasStore.prototype.onPageTransition = function () {
        var viewPortManager = this.canvasFields.viewPortManager;
        if (viewPortManager) {
            viewPortManager.reset();
        }
        this.canvasFields.canvasReactKey++;
    };
    /**
     * Update canvas to be ready when page transition ends.
     */
    CanvasStore.prototype.onPageTransitioned = function () {
        // Resets the state of the canvas store and webpart manager so
        // the next call to enter edit mode triggers a fresh fetch of
        // the webpart manifests.
        this.canvasFields.fetchedWebparts = false;
        this.canvasFields.webPartManager.clearManifestPromise();
    };
    CanvasStore.prototype.createQosScope = function (scope) {
        return _CanvasStoreCommonActions__WEBPACK_IMPORTED_MODULE_10__["CanvasStoreCommonActions"].createQosScope(scope);
    };
    /**
     * Call when page finished deserializing, sending event with available WebParts.
     * This event will be processed by the MySiteCacheWebPartManager.
     */
    CanvasStore.prototype._deleteUnmatchedCacheEntries = function () {
        if (this.canvasFields.displayMode === _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_3__["DisplayMode"].Read) {
            var instanceIds = this.canvasFields.canvasControls
                .filter(function (control) { return control.controlType === _ms_sp_canvas_read__WEBPACK_IMPORTED_MODULE_13__["CanvasControlType"].WebPartZone; })
                .map(function (control) { return control.webPartData.instanceId; });
            if (_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_3__["_SPFlight"].isEnabled(USE_TIERED_CACHING) &&
                (_ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_6__["_SPPerfExperiment"].getVariantAndTrackExperiment(_ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_6__["_PerformanceExperiment"].WEXMySiteCacheTieredCachingExp) === 1 ||
                    _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_3__["_SPFlight"].isEnabled(USE_MY_SITE_CACHE))) {
                _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_3__["_SPEventManager"].instance.raiseStickyEvent('pageDeserializationFinished', instanceIds);
            }
            else {
                _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_3__["_SPEventManager"].instance.raiseStickyEvent('pageDeserializationFinished_legacyMySite', instanceIds);
            }
            _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__["_TraceLogger"].logVerbose(_CanvasFields__WEBPACK_IMPORTED_MODULE_7__["CanvasFields"].logSource, "Triggered pageDeserializationFinished");
        }
    };
    /**
     * Deserializes the persisted html of canvas control in legacy format to ICanvasControl
     * In legacy format, data-sp-controldata attribute contains both canvas control data and web part data
     */
    CanvasStore.prototype._deserializeLegacyCanvasControlHtml = function (row) {
        // ControlProps will be null in case of bad input
        var controlDataValue = row.getAttribute('data-sp-controldata');
        var controlProps = controlDataValue
            ? JSON.parse(decodeURI(controlDataValue))
            : undefined;
        if (controlProps) {
            if (!CanvasStore._isValidControlType(controlProps)) {
                _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__["_TraceLogger"].logVerbose(_CanvasFields__WEBPACK_IMPORTED_MODULE_7__["CanvasFields"].logSource, "Invalid Control Type");
                return undefined;
            }
            /**
             * Deserialize using the row's HTML because SafeHTML scrubs the serialized RTE HTML persisted in the
             * row, and does not scrub the attribute.
             */
            if (controlProps.controlType === _ms_sp_canvas_read__WEBPACK_IMPORTED_MODULE_13__["CanvasControlType"].RTE) {
                controlProps.innerHTML = row.innerHTML;
            }
            var webPartData = controlProps.webPartData;
            if (webPartData) {
                // Early versions of mobile clients only set htmlProperties instead of setting the div innerHTML
                var htmlString = webPartData.htmlProperties; /* tslint:disable-line:no-any */
                // If the div exists, we use its innerHTML instead of .htmlProperties
                var htmlPropsDiv = row.querySelector('[data-sp-htmlproperties]');
                if (htmlPropsDiv) {
                    htmlString = htmlPropsDiv.innerHTML;
                }
                // Replace all IMG tags with SPIMG so the browser doesn't try to pre-load them.
                if (htmlString) {
                    htmlString = Object(_ms_sp_canvas_read__WEBPACK_IMPORTED_MODULE_13__["replaceImageTagsInHtmlString"])(htmlString);
                }
                webPartData.serverProcessedContent = _microsoft_sp_webpart_base__WEBPACK_IMPORTED_MODULE_5__["WebPartDataConverter"].convertServerProcessedHtmlToData(htmlString);
            }
        }
        return controlProps || undefined;
    };
    /**
     * Deserializes the persisted html for canvas control
     */
    CanvasStore.prototype._deserializeCanvasControlHtml = function (row) {
        // ControlProps will be null in case of bad input
        var controlDataValue = row.getAttribute('data-sp-controldata');
        var controlProps = controlDataValue
            ? JSON.parse(decodeURI(controlDataValue))
            : undefined;
        if (!controlProps || !CanvasStore._isValidControlType(controlProps)) {
            _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__["_TraceLogger"].logVerbose(_CanvasFields__WEBPACK_IMPORTED_MODULE_7__["CanvasFields"].logSource, "Invalid Control Type");
            return undefined;
        }
        controlProps.addedFromPersistedData = true;
        var webPartDiv = row.querySelector('[data-sp-webpart]');
        if (webPartDiv) {
            var webPartDivWrapper = document.createElement('div');
            webPartDivWrapper.appendChild(webPartDiv);
            controlProps.webPartData = _microsoft_sp_webpart_base__WEBPACK_IMPORTED_MODULE_5__["WebPartDataConverter"].convertHtmlToWebPartData(webPartDivWrapper.innerHTML); // Todo#661360 Fix workaround left-over
        }
        else {
            var rteDiv = row.querySelector('[data-sp-rte]');
            if (rteDiv || controlProps.controlType === _ms_sp_canvas_read__WEBPACK_IMPORTED_MODULE_13__["CanvasControlType"].RTE) {
                controlProps.innerHTML = rteDiv ? rteDiv.innerHTML : row.innerHTML;
            }
        }
        return controlProps;
    };
    CanvasStore.prototype._afterEditActionFileLoaded = function () {
        // Using 'void' to indicate that we are not interested in the returned value.
        // This is expected floating promise because we're asynchronously fetching web part manifests in the background.
        // _fetchWebParts is a no-op if not in DisplayMode.Edit
        void this.fetchWebParts();
    };
    CanvasStore.prototype._disposeCanvasLayouts = function () {
        this.canvasLayouts.forEach(function (canvasLayout) {
            canvasLayout.dispose();
        });
    };
    CanvasStore.prototype._loadPropertyPaneModule = function () {
        var _this = this;
        return this.canvasFields.propertyPaneLoader.propertyPane.then(function (propertyPaneController) {
            _this._propertyPaneController = propertyPaneController;
        });
    };
    // This is the minimum width for multicolumn canvas(Original canvas without vertical section).
    // The canvas needs to reflow if the width decreases than this.
    CanvasStore.canvasMinWidth = 1024;
    return CanvasStore;
}());



/***/ }),

/***/ "Tpr7":
/*!**********************************************************!*\
  !*** ./lib/sp-canvas/canvas/canvas/LayoutCanvas.scss.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* tslint:disable */
__webpack_require__(/*! ./LayoutCanvas.css */ "ADOM");
var styles = {};
/* harmony default export */ __webpack_exports__["default"] = (styles);
/* tslint:enable */ 


/***/ }),

/***/ "TtDe":
/*!*********************************************!*\
  !*** ./lib/sp-canvas/spRte/SPRteWrapper.js ***!
  \*********************************************/
/*! exports provided: SPRteWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SPRteWrapper", function() { return SPRteWrapper; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _canvas_editChunk_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../canvas/editChunk/index */ "9s5w");
/* harmony import */ var _SPRteRead__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SPRteRead */ "WvBr");





var SPRteWrapper = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(SPRteWrapper, _super);
    function SPRteWrapper(props) {
        var _this = _super.call(this, props) || this;
        _this._readRte = react__WEBPACK_IMPORTED_MODULE_1__["createRef"]();
        _this._editRte = react__WEBPACK_IMPORTED_MODULE_1__["createRef"]();
        _this.focus = function () {
            if (_this.state.displayMode === _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__["DisplayMode"].Edit && _this._editRte.current) {
                _this._editRte.current.focus();
            }
        };
        _this.focusFormattingBar = function () {
            if (_this.state.displayMode === _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__["DisplayMode"].Edit && _this._editRte.current) {
                _this._editRte.current.focusFormattingBar();
            }
        };
        _this.serialize = function () {
            if (_this.state.displayMode === _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__["DisplayMode"].Edit && _this._editRte.current) {
                return _this._editRte.current.serialize();
            }
            else {
                var serialization = JSON.parse(JSON.stringify(_this.props.control));
                return serialization;
            }
        };
        _this.setDisplayMode = function (newMode) {
            return new Promise(function (resolve) {
                _this.setState({
                    displayMode: newMode
                }, resolve);
            });
        };
        _this.scrollIntoView = function (options) {
            if (_this.state.displayMode === _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__["DisplayMode"].Read && _this._readRte.current) {
                _this._readRte.current.scrollIntoView(options);
                return true;
            }
            else if (_this.state.displayMode === _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__["DisplayMode"].Edit && _this._editRte.current) {
                _this._editRte.current.scrollIntoView(options);
            }
            return false;
        };
        _this.state = {
            displayMode: props.store.displayMode
        };
        return _this;
    }
    SPRteWrapper.prototype.render = function () {
        var _a = this.props, control = _a.control, store = _a.store;
        if (this.state.displayMode === _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__["DisplayMode"].Read) {
            return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_SPRteRead__WEBPACK_IMPORTED_MODULE_4__["SPRteRead"], { ref: this._readRte, control: control, isRenderingDiff: store.canvasFields.isRenderingDiff }));
        }
        else {
            var _b = store.canvasFields, isUpdatingFromUpperLevel = _b.isUpdatingFromUpperLevel, canvasState = _b.canvasState;
            // Update the selection range of RTE when rte data is overwritten.
            var selection = isUpdatingFromUpperLevel &&
                canvasState &&
                canvasState.selectedControlId === control.id &&
                canvasState.selectedRteState
                ? canvasState.selectedRteState.selection
                : undefined;
            var rteProps = {
                control: control,
                innerHTML: control.innerHTML,
                onChange: store.getEditModule('actions').handleRteChanged,
                serviceScope: store.serviceScope,
                displayMode: _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__["DisplayMode"].Edit,
                selection: selection,
                store: store,
                ref: this._editRte
            };
            if (store.canvasFields.isTouchEnabled) {
                return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_canvas_editChunk_index__WEBPACK_IMPORTED_MODULE_3__["DeferredSPRteTouchDevice"], rteProps);
            }
            else {
                return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_canvas_editChunk_index__WEBPACK_IMPORTED_MODULE_3__["DeferredSPRte"], rteProps);
            }
        }
    };
    return SPRteWrapper;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));



/***/ }),

/***/ "UWqr":
/*!*********************************************!*\
  !*** external "@microsoft/sp-core-library" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_UWqr__;

/***/ }),

/***/ "V9Um":
/*!*********************************************************************!*\
  !*** ./lib/sp-canvas/canvas/canvasWebPartHost/CanvasWebPartHost.js ***!
  \*********************************************************************/
/*! exports provided: CanvasWebPartHost */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanvasWebPartHost", function() { return CanvasWebPartHost; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ms_sp_viewport_loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ms/sp-viewport-loader */ "ywDL");
/* harmony import */ var _ms_sp_viewport_loader__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ms_sp_viewport_loader__WEBPACK_IMPORTED_MODULE_1__);
/**
 * @Copyright (c) Microsoft Corporation.  All rights reserved.
 *
 * @file Web part host for the SP Canvas.
 */


/**
 * CanvasWebPartHost is the IWebPartHost implementation used by the Canvas. Each Canvas
 * will instantiate their own CanvasWebPartHost, which means the web parts are scoped by
 * Canvas.
 */
var CanvasWebPartHost = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(CanvasWebPartHost, _super);
    /**
     * @param handleCanvasChanged - Optional. Callback invoked when web parts are interacted with.
     */
    function CanvasWebPartHost(options) {
        var _this = _super.call(this, {
            serviceScope: options.serviceScope,
            viewPortManager: options.viewPortManager,
            viewPortMechanism: {
                type: 'Auto'
            }
        }) || this;
        /**
         * @see IWebPartHost
         */
        _this.propertyPaneLifeCycleEventCallback = function (event, data) {
            if (event === 'Opened') {
                /*
                 * Scroll web part back into with a 500ms animation and
                 * 44px additional margin (2 * the _VERTICAL_MARGIN property in ControlZone)
                 */
                _this._handleResize(document.querySelector('.ControlZone--selected'), 500, 44);
            }
            else if (event === 'Closed' || event === 'LostFocus') {
                _this._reclaimFocus();
            }
            else if (event === 'ActiveWebPartChanged' && _this._setSelectedWebPartId && data && data.webPartData) {
                // Set the currently selected control Id to be the one configured in the property pane.
                // It may not be a webpart in this IWebPartHost.
                // This provides the currently selected WebPart Id for the WebPart manager to determine
                // if it should open/toggle the property pane for a WebPart.
                _this._setSelectedWebPartId(data.webPartData.instanceId);
            }
        };
        _this._handleWebPartChanged = options.handleWebPartChanged;
        _this._handleResize = options.handleResize;
        _this._reclaimFocus = options.reclaimFocus;
        _this._setSelectedWebPartId = options.setSelectedWebPartId;
        return _this;
    }
    /**
     * @see IWebPartHost
     */
    CanvasWebPartHost.prototype.setDirty = function (wpInstanceId) {
        if (this._handleWebPartChanged) {
            this._handleWebPartChanged(wpInstanceId);
        }
    };
    return CanvasWebPartHost;
}(_ms_sp_viewport_loader__WEBPACK_IMPORTED_MODULE_1__["_ViewPortAwareWebPartHost"]));



/***/ }),

/***/ "VQpE":
/*!****************************************************************!*\
  !*** ./lib/sp-canvas/canvas/controlZone/LayoutControlZone.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../../../../common/temp/node_modules/.pnpm/css-loader@3.2.1_webpack@4.44.2/node_modules/css-loader/dist/cjs.js!../../../../../../common/temp/node_modules/.pnpm/postcss-loader@3.0.0/node_modules/postcss-loader/src??postcss!./LayoutControlZone.css */ "EHIy");
var loader = __webpack_require__(/*! @microsoft/load-themed-styles */ "jOlS");

if(typeof content === "string") content = [[module.i, content]];

// add the styles to the DOM
for (var i = 0; i < content.length; i++) loader.loadStyles(content[i][1], true);

if(content.locals) module.exports = content.locals;

/***/ }),

/***/ "VTSE":
/*!***********************************************************************************!*\
  !*** ./lib/sp-canvas/canvas/editChunk/canvasDiff/DeferredControlDiffIndicator.js ***!
  \***********************************************************************************/
/*! exports provided: DeferredControlDiffIndicator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeferredControlDiffIndicator", function() { return DeferredControlDiffIndicator; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _DeferredCanvasDiff__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DeferredCanvasDiff */ "o0cL");



// tslint:disable-next-line:variable-name
var DeferredComponent = react__WEBPACK_IMPORTED_MODULE_1__["lazy"](function () { return Object(_DeferredCanvasDiff__WEBPACK_IMPORTED_MODULE_2__["canvasDiffLoader"])().then(function (module) { return ({ default: module.ControlDiffIndicator }); }); });
/**
 * @internal
 */
function DeferredControlDiffIndicator(props) {
    return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Suspense"], { fallback: false },
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](DeferredComponent, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, props))));
}


/***/ }),

/***/ "VyBU":
/*!**********************************************************************************!*\
  !*** ./lib/sp-canvas/canvas/CanvasVerticalSection/CanvasVerticalSection.scss.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* tslint:disable */
__webpack_require__(/*! ./CanvasVerticalSection.css */ "S64i");
var styles = {};
/* harmony default export */ __webpack_exports__["default"] = (styles);
/* tslint:enable */ 


/***/ }),

/***/ "WvBr":
/*!******************************************!*\
  !*** ./lib/sp-canvas/spRte/SPRteRead.js ***!
  \******************************************/
/*! exports provided: SPRteRead */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SPRteRead", function() { return SPRteRead; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @microsoft/office-ui-fabric-react-bundle */ "KL1q");
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ms_sp_canvas_read__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ms/sp-canvas-read */ "sSDQ");
/* harmony import */ var _ms_sp_canvas_read__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ms_sp_canvas_read__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ms_sp_rte_lib_rte_baseRte_BaseRte_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ms/sp-rte/lib/rte/baseRte/BaseRte.scss */ "yld5");
/* harmony import */ var _ms_sp_rte_lib_rte_ckeditor_CKTextEditor_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ms/sp-rte/lib/rte/ckeditor/CKTextEditor.scss */ "aYb9");
/* harmony import */ var _loc_CanvasStrings_resx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../loc/CanvasStrings.resx */ "indE");
var _loc_CanvasStrings_resx__WEBPACK_IMPORTED_MODULE_7___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../loc/CanvasStrings.resx */ "indE", 1);
/* harmony import */ var _common_KillSwitches__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../common/KillSwitches */ "17t3");
/* harmony import */ var _common_Flights__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../common/Flights */ "qRiB");
/**
 * @copyright Microsoft Corporation. All rights reserved.
 */










var CHECK_HEADING_REGEX = /<h\d/; // Used to scan html that possibly contains heading starting tag like `<h1`
var _CKEDITOR_CLASS = 'cke_editable';
var _PLACEHOLDER_LINK_CLASS = 'ms-missinglink';
/**
 * @class TextWebPart readonly class. This component is used as a canvas control in read mode
 */
var SPRteRead = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(SPRteRead, _super);
    function SPRteRead(props) {
        var _this = _super.call(this, props) || this;
        _this._rootRef = react__WEBPACK_IMPORTED_MODULE_1__["createRef"]();
        _this.scrollIntoView = function (options) {
            if (_this._rootRef.current) {
                _this._rootRef.current.scrollIntoView(options);
                return true;
            }
            return false;
        };
        _this._addOrRemovePlaceholderAccessibleLabels = function (add) {
            // Skip parsing DOM when removing if there were no labels added in the first place
            if (!add && !_this._hadPlaceholderLinks) {
                return;
            }
            var placeholderLinks = document.getElementsByClassName(_PLACEHOLDER_LINK_CLASS);
            _this._hadPlaceholderLinks = placeholderLinks.length > 0;
            var ariaAttribute = 'aria-label';
            for (var i = 0; i < placeholderLinks.length; i++) {
                if (add) {
                    placeholderLinks[i].setAttribute(ariaAttribute, _loc_CanvasStrings_resx__WEBPACK_IMPORTED_MODULE_7__["WikiLinkingPlaceholderInstruction"]);
                }
                else {
                    placeholderLinks[i].removeAttribute(ariaAttribute);
                }
            }
        };
        return _this;
    }
    /** @deprecated - to be removed with 55b57887-ffe4-428b-a825-672add6870cf */
    SPRteRead.prototype.serialize = function () {
        // This is needed by canvas control
        var serialization = JSON.parse(JSON.stringify(this.props.control));
        return serialization;
    };
    /** @deprecated - to be removed with 55b57887-ffe4-428b-a825-672add6870cf */
    SPRteRead.prototype.setDisplayMode = function (newMode) {
        /**
         * No-op but needed by a canvas control
         */
    };
    SPRteRead.prototype.render = function () {
        var _a;
        var control = this.props.control;
        var html = control.innerHTML;
        var className = Object(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_2__["css"])(_CKEDITOR_CLASS, 'rte--read', _common_Flights__WEBPACK_IMPORTED_MODULE_9__["Flights"].isInlineImageEnabled() && 'rte--inline');
        var browserInfo = _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_3__["_BrowserDetection"].getBrowserInformation();
        var isIE = browserInfo.browser === _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_3__["_Browser"].IE;
        var isFireFox = browserInfo.browser === _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_3__["_Browser"].Firefox;
        if (isIE || isFireFox) {
            // Font weight is 400 in IE and Firefox but it is 700 in other browsers so we
            // need to set the weight explictely.
            className = Object(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_2__["css"])(className, 'fontWeightStrongForIEFireFox');
        }
        var contentElement = (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { "data-automation-id": 'textBox', dangerouslySetInnerHTML: html ? { __html: html } : undefined, className: Object(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_2__["css"])(className, this._emphasisClassName ? this._emphasisClassName : undefined) }));
        var contentMayContainHeading = html ? CHECK_HEADING_REGEX.test(html) : false;
        var componentId = control.id;
        var anchorElementSelector = 'h1, h2, h3, h4, h5';
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { ref: this._rootRef, "data-sp-feature-tag": 'Rich Text Editor', className: Object(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_2__["css"])('rte-webpart', 'rte-margin-bottom', (_a = {},
                _a['rte-webpart-inlineImageHidden'] = !Object(_common_KillSwitches__WEBPACK_IMPORTED_MODULE_8__["hideEmptyInlineWebPartContainerKSActivated"])() && !_common_Flights__WEBPACK_IMPORTED_MODULE_9__["Flights"].isInlineImageEnabled(),
                _a)), "data-sp-feature-instance-id": control.id }, control.id && contentMayContainHeading && !this.props.isRenderingDiff ? (_common_Flights__WEBPACK_IMPORTED_MODULE_9__["Flights"].isInlineImageEnabled() ? (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null,
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ms_sp_canvas_read__WEBPACK_IMPORTED_MODULE_4__["DeferredAnchorZone"], { deferredProps: {
                    componentId: componentId,
                    anchorElementSelector: anchorElementSelector,
                    elementForSearch: this._rootRef.current || undefined
                } }),
            contentElement)) : (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ms_sp_canvas_read__WEBPACK_IMPORTED_MODULE_4__["DeferredAnchorZone"], { deferredProps: {
                componentId: componentId,
                anchorElementSelector: anchorElementSelector
            } }, contentElement))) : (contentElement)));
    };
    SPRteRead.prototype.componentDidMount = function () {
        this._addOrRemovePlaceholderAccessibleLabels(true /* add */);
        if (_common_Flights__WEBPACK_IMPORTED_MODULE_9__["Flights"].isInlineImageEnabled()) {
            this.setState({ hasElement: true });
        }
    };
    SPRteRead.prototype.componentWillUnmount = function () {
        this._addOrRemovePlaceholderAccessibleLabels(false /* remove */);
    };
    Object.defineProperty(SPRteRead.prototype, "_emphasisClassName", {
        get: function () {
            var _a = this.props.control, emphasisTheme = _a.emphasisTheme, theme = _a.theme;
            if (emphasisTheme && theme) {
                var classNames = _ms_sp_canvas_read__WEBPACK_IMPORTED_MODULE_4__["CanvasRteStyles"].getClassNames({
                    root: _CKEDITOR_CLASS,
                    emphasisTheme: emphasisTheme,
                    globalTheme: theme
                });
                return classNames && classNames.root;
            }
            return undefined;
        },
        enumerable: true,
        configurable: true
    });
    return SPRteRead;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));



/***/ }),

/***/ "X+PM":
/*!*********************************************!*\
  !*** external "@microsoft/sp-page-context" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_X_PM__;

/***/ }),

/***/ "XaoL":
/*!*******************************************************************!*\
  !*** ./lib/sp-canvas/canvas/editChunk/toolbar/DeferredToolbar.js ***!
  \*******************************************************************/
/*! exports provided: DeferredToolbar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeferredToolbar", function() { return DeferredToolbar; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


// tslint:disable-next-line:variable-name
var DeferredToolbarComponent = react__WEBPACK_IMPORTED_MODULE_1__["lazy"](function () {
    return __webpack_require__.e(/*! import() | sp-canvas-edit */ "sp-canvas-edit").then(__webpack_require__.bind(null, /*! ./Toolbar */ "+LOX")).then(function (module) { return ({ default: module.Toolbar }); });
});
var DeferredToolbar = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(DeferredToolbar, _super);
    function DeferredToolbar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DeferredToolbar.prototype.render = function () {
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Suspense"], { fallback: false },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](DeferredToolbarComponent, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.props))));
    };
    return DeferredToolbar;
}(react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]));



/***/ }),

/***/ "ZpMc":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/css-loader@3.2.1_webpack@4.44.2/node_modules/css-loader/dist/cjs.js!/agent/_work/1/s/common/temp/node_modules/.pnpm/postcss-loader@3.0.0/node_modules/postcss-loader/src??postcss!./lib/sp-canvas/canvas/CanvasVerticalSection/CanvasVerticalSection.css ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../common/temp/node_modules/.pnpm/css-loader@3.2.1_webpack@4.44.2/node_modules/css-loader/dist/runtime/api.js */ "5ADk")(false);
// Module
exports.push([module.i, ".CanvasComponent.LCS .CanvasVerticalSection{height:100%}[dir=ltr] .CanvasComponent.LCS .CanvasVerticalSection.isEdit{padding-left:32px}[dir=rtl] .CanvasComponent.LCS .CanvasVerticalSection.isEdit{padding-right:32px}.CanvasComponent.LCS .CanvasVerticalSection.isEdit .CanvasZoneContainer:not(.CanvasZoneContainer--selected):not(:hover){border:1px dashed \"[theme:neutraltertiary, default: #a19f9d]\"}.CanvasComponent.LCS .CanvasVerticalSection .CanvasZoneContainer{height:100%}.CanvasComponent.LCS .CanvasVerticalSection .CanvasZoneContainer.CanvasZoneContainer--hintUpdate{position:relative;margin-top:1px}.CanvasComponent.LCS .CanvasVerticalSection .CanvasZoneContainer.CanvasZoneContainer--read{margin-top:0}.CanvasComponent.LCS .CanvasVerticalSection .CanvasZone{position:relative;height:100%}[dir=ltr] .CanvasComponent.LCS .CanvasVerticalSection .CanvasZone{padding-left:8px}[dir=ltr] .CanvasComponent.LCS .CanvasVerticalSection .CanvasZone,[dir=rtl] .CanvasComponent.LCS .CanvasVerticalSection .CanvasZone{padding-right:8px}[dir=rtl] .CanvasComponent.LCS .CanvasVerticalSection .CanvasZone{padding-left:8px}.CanvasComponent.LCS .CanvasVerticalSection .CanvasZone .CanvasSection--edit{padding-top:32px}.CanvasComponent.LCS .CanvasVerticalSection .CanvasZone .CanvasZoneToolbar{margin-top:0;margin-left:1px;width:auto;background-color:\"[theme:neutralLighter, default: #f3f2f1]\"}[dir=ltr] .CanvasComponent.LCS .CanvasVerticalSection .CanvasZone .CanvasZoneToolbar{left:0}[dir=rtl] .CanvasComponent.LCS .CanvasVerticalSection .CanvasZone .CanvasZoneToolbar{right:0}.CanvasComponent.LCS .CanvasVerticalSection>div{height:100%}@media screen and (min-width:1280px){[dir=ltr] .CanvasComponent.LCS .CanvasVerticalSection.isEdit{padding-left:0}[dir=rtl] .CanvasComponent.LCS .CanvasVerticalSection.isEdit{padding-right:0}[dir=ltr] .CanvasComponent.LCS .CanvasVerticalSection.CanvasZone--edit,[dir=ltr] .CanvasComponent.LCS .CanvasVerticalSection .CanvasZone.CanvasZone--edit{padding-right:8px}[dir=rtl] .CanvasComponent.LCS .CanvasVerticalSection.CanvasZone--edit,[dir=rtl] .CanvasComponent.LCS .CanvasVerticalSection .CanvasZone.CanvasZone--edit{padding-left:8px}}", ""]);


/***/ }),

/***/ "aKD8":
/*!*********************************************!*\
  !*** ../sp-rte/lib/rte/baseRte/BaseRte.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../../../common/temp/node_modules/.pnpm/css-loader@3.2.1_webpack@4.44.2/node_modules/css-loader/dist/cjs.js!../../../../../common/temp/node_modules/.pnpm/postcss-loader@3.0.0/node_modules/postcss-loader/src??postcss!./BaseRte.css */ "jhmt");
var loader = __webpack_require__(/*! @microsoft/load-themed-styles */ "jOlS");

if(typeof content === "string") content = [[module.i, content]];

// add the styles to the DOM
for (var i = 0; i < content.length; i++) loader.loadStyles(content[i][1], true);

if(content.locals) module.exports = content.locals;

/***/ }),

/***/ "aKqg":
/*!***************************************************************************************!*\
  !*** ./lib/sp-canvas/canvas/editChunk/canvasToolboxHint/DeferredCanvasToolboxHint.js ***!
  \***************************************************************************************/
/*! exports provided: DeferredCanvasToolboxHint */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeferredCanvasToolboxHint", function() { return DeferredCanvasToolboxHint; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _microsoft_load_themed_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @microsoft/load-themed-styles */ "jOlS");
/* harmony import */ var _microsoft_load_themed_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_microsoft_load_themed_styles__WEBPACK_IMPORTED_MODULE_3__);




// tslint:disable-next-line:variable-name
var DeferredComponent = react__WEBPACK_IMPORTED_MODULE_1__["lazy"](function () {
    return __webpack_require__.e(/*! import() | sp-canvas-edit */ "sp-canvas-edit").then(__webpack_require__.bind(null, /*! ./CanvasToolboxHint */ "vclg")).then(function (module) {
        _microsoft_load_themed_styles__WEBPACK_IMPORTED_MODULE_3__["flush"]();
        return {
            default: module.CanvasToolboxHint
        };
    });
});
var DeferredCanvasToolboxHint = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(DeferredCanvasToolboxHint, _super);
    function DeferredCanvasToolboxHint() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DeferredCanvasToolboxHint.prototype.render = function () {
        return this.props.store.displayMode === _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__["DisplayMode"].Edit ? (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Suspense"], { fallback: false },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](DeferredComponent, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.props)))) : (false);
    };
    return DeferredCanvasToolboxHint;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));



/***/ }),

/***/ "aNx7":
/*!***********************************************************!*\
  !*** ./lib/sp-canvas/canvas/canvasLayout/CanvasLayout.js ***!
  \***********************************************************/
/*! exports provided: CanvasLayout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanvasLayout", function() { return CanvasLayout; });
/* harmony import */ var _microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/sp-lodash-subset */ "Pk8u");
/* harmony import */ var _microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/sp-diagnostics */ "ut3N");
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ms_sp_canvas_read__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ms/sp-canvas-read */ "sSDQ");
/* harmony import */ var _ms_sp_canvas_read__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ms_sp_canvas_read__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _CanvasZonePart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CanvasZonePart */ "zkMK");
/* harmony import */ var _canvasSection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../canvasSection */ "JqQl");
/* harmony import */ var _undefinedControlPosition__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./undefinedControlPosition */ "4Mut");
/**
 * @file CanvasLayout.ts
 * @copyright (c) Microsoft Corporation. All rights reserved.
 */






var ADD_CONTROL_QOS_NAME = 'AddControlError';
/**
 * Represents the Canvas Layout
 */
var CanvasLayout = /** @class */ (function () {
    /**
     * Creates a new instance of a CanvasLayout
     */
    function CanvasLayout(getControlComponentById, renderCallBack, layoutIndex) {
        this._getControlComponentById = getControlComponentById;
        this._render = renderCallBack;
        this.layoutIndex = layoutIndex;
        this._initialize();
    }
    /**
     * Utility function that creates the smallest index closest to the input index.
     * It will generate the average of the sortedChildren[currentIndex] and the one before it.
     * If currentIndex is the index of the first element in sortedChildren it will just return currentIndex/2
     * @param sortedChildren is a sorted Array
     * @param currentIdx is the current entry index
     * @returns the index closest to the current index
     */
    CanvasLayout.generateNewLayoutIndex = function (sortedChildren, currentIdx, below) {
        if (!sortedChildren) {
            return undefined; // Todo#661360 Fix workaround left-over
        }
        var sortedIndexes = sortedChildren.map(function (child) { return child.index; });
        if (below) {
            var newIndex_1;
            sortedIndexes.forEach(function (index, i) {
                if (index === currentIdx) {
                    newIndex_1 = i + 1;
                }
            });
            if (newIndex_1 && newIndex_1 < sortedIndexes.length) {
                currentIdx = sortedIndexes[newIndex_1];
            }
            else {
                currentIdx += 1;
            }
        }
        sortedIndexes = sortedIndexes.filter(function (item) { return item < currentIdx; });
        var newIdx = currentIdx;
        if (sortedIndexes.length > 0) {
            newIdx += sortedIndexes[sortedIndexes.length - 1];
        }
        return newIdx / 2;
    };
    CanvasLayout.cloneMerge = function (value1, value2) {
        return Object(_microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_0__["merge"])({}, value1, value2);
    };
    /**
     * Check if the `position` is valid. It is valid if the `position` has positive `zoneIndex` field.
     *
     * On layout toolbox hint, the `sectionIndex` and `controlIndex` fields are `undefined`,
     * we only check `zoneIndex` here.
     */
    CanvasLayout.isPositionValid = function (position) {
        return Boolean(position && position.zoneIndex);
    };
    CanvasLayout.isFullWidthSection = function (controlType) {
        return controlType === _ms_sp_canvas_read__WEBPACK_IMPORTED_MODULE_2__["CanvasControlType"].FullWidth;
    };
    Object.defineProperty(CanvasLayout.prototype, "zones", {
        /**
         * Gets the zones associated with the current layout
         * @returns the zones associated with the layout
         */
        get: function () {
            var canvasZones = [];
            this._zonePartMap.forEach(function (zone) {
                canvasZones.push(zone);
            });
            return canvasZones.sort(function (zone1, zone2) {
                return zone1.index - zone2.index;
            });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CanvasLayout.prototype, "controlsState", {
        /**
         * Gets the state information of specific layout controls
         */
        get: function () {
            return this._activeControlsState;
        },
        enumerable: true,
        configurable: true
    });
    CanvasLayout.prototype.fetchCurrentSelection = function () {
        var _this = this;
        if (this._activeControlsState.selectedControlId) {
            var selectedControl = this.fetchAllControls().filter(function (control) { return control.id === _this._activeControlsState.selectedControlId; })[0];
            if (selectedControl) {
                if (!selectedControl.position.layoutIndex) {
                    // We need to update the layout index for old serialized controls
                    // which did not have layout index
                    selectedControl.position = CanvasLayout.cloneMerge(selectedControl.position, {
                        layoutIndex: CanvasLayout.firstLayoutIndex
                    });
                }
                return selectedControl.position;
            }
            return _undefinedControlPosition__WEBPACK_IMPORTED_MODULE_5__["undefinedControlPosition"];
        }
        else {
            return {
                sectionIndex: undefined,
                zoneIndex: this._activeControlsState.selectedZoneIndex,
                controlIndex: undefined,
                layoutIndex: this.layoutIndex
            };
        }
    };
    /**
     * Fetch the CanvasZonePart, if it exists, with the provided index.
     * @param index @see IControlPosition.zoneIndex
     * @returns @see CanvasZonePart
     */
    CanvasLayout.prototype.fetchZone = function (index) {
        return this._zonePartMap.get(index); // Todo#661360 Fix workaround left-over
    };
    /**
     * Change the emphasis of the layout.
     *
     * @param emphasis - The new emphasis
     */
    CanvasLayout.prototype.changeEmphasis = function (emphasis) {
        /**
         * Not implemented
         */
        throw new Error('Not implemented');
    };
    Object.defineProperty(CanvasLayout.prototype, "isFullWidthSectionPresent", {
        get: function () {
            return this._fullWidthSectionsCount > 0;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Adds a new canvas control to the layout
     * If zone doesn't exist, then create a new zone
     * @param canvasControl represents the control to add
     * @returns Id of control that was added
     */
    CanvasLayout.prototype.addControl = function (canvasControl, addedFromToolbox) {
        // If there is no control, no position, or a zone then we cannot do anything.
        if (!canvasControl || !canvasControl.position || canvasControl.position.zoneIndex === undefined) {
            var qos = this._createQosScope(ADD_CONTROL_QOS_NAME);
            this._handleMonitoredException(qos, 'InvalidControl', new Error('Could not add control as there is no control, no position, or a zone'), canvasControl);
            return undefined;
        }
        try {
            var curZoneIndex = canvasControl.position.zoneIndex;
            var controlId = void 0;
            // Get the pertinent zone if available
            var zone = this._zonePartMap.get(curZoneIndex);
            if (!zone) {
                // Zone doesn't exist, create a new zone
                var newCanvasZone = new _CanvasZonePart__WEBPACK_IMPORTED_MODULE_3__["CanvasZonePart"](curZoneIndex, canvasControl.emphasis && canvasControl.emphasis.zoneEmphasis, this._getControlComponentById, this.layoutIndex);
                // If section index is not provided, then set to default section index
                if (canvasControl.position.sectionIndex === undefined) {
                    canvasControl.position = CanvasLayout.cloneMerge(canvasControl.position, {
                        sectionIndex: CanvasLayout.firstLayoutIndex
                    });
                }
                // Ok, now add the control and update the layout
                controlId = newCanvasZone.addControl(canvasControl, addedFromToolbox);
                if (controlId) {
                    this._zonePartMap.set(curZoneIndex, newCanvasZone);
                }
            }
            else {
                // zone already exists, verify that section information is provided
                if (canvasControl.position.sectionIndex !== undefined) {
                    // Ok this is a valid section, add the control
                    controlId = zone.addControl(canvasControl, addedFromToolbox);
                }
                else {
                    // Attempting to add a new zone above the existing zone. Generate a new zone index and add it
                    canvasControl.position = CanvasLayout.cloneMerge(canvasControl.position, {
                        zoneIndex: CanvasLayout.generateNewLayoutIndex(this.zones, curZoneIndex)
                    });
                    if (canvasControl.position.zoneIndex === undefined) {
                        // Could not generate a new control index, cannot proceed
                        var qos = this._createQosScope(ADD_CONTROL_QOS_NAME);
                        this._handleMonitoredException(qos, 'ControlIndex', new Error('Could not generate a new control index'), canvasControl);
                        return undefined;
                    }
                    var newSecondaryZone = new _CanvasZonePart__WEBPACK_IMPORTED_MODULE_3__["CanvasZonePart"](canvasControl.position.zoneIndex, canvasControl.emphasis && canvasControl.emphasis.zoneEmphasis, this._getControlComponentById, this.layoutIndex);
                    canvasControl.position = CanvasLayout.cloneMerge(canvasControl.position, {
                        sectionIndex: CanvasLayout.firstLayoutIndex
                    });
                    // Add the control, and update the layout
                    controlId = newSecondaryZone.addControl(canvasControl, addedFromToolbox);
                    if (controlId) {
                        this._zonePartMap.set(canvasControl.position.zoneIndex, newSecondaryZone);
                    }
                }
            }
            if (CanvasLayout.isFullWidthSection(canvasControl.controlType)) {
                ++this._fullWidthSectionsCount;
            }
            return controlId;
        }
        catch (err) {
            var qos = this._createQosScope(ADD_CONTROL_QOS_NAME);
            this._handleMonitoredException(qos, 'Exception', err, canvasControl);
            return undefined;
        }
    };
    CanvasLayout.prototype.updateControl = function (control) {
        var zone = this._zonePartMap.get(control.position.zoneIndex);
        if (zone) {
            return zone.updateControl(control);
        }
        else {
            return false;
        }
    };
    /**
     * Move the control to the new position. If the move is not within the same section It removes the control from the
     * old position and recreates it in the new one.
     * @param control The control to be moved
     * @param newControlPosition The position where the control will be moved to
     */
    CanvasLayout.prototype.moveControl = function (control, newControlPosition) {
        if (!control || !newControlPosition) {
            return;
        }
        var zoneIndex = control.position.zoneIndex;
        // if the move is within the same CanvasZone let the Zone handle the move
        if (zoneIndex === newControlPosition.zoneIndex) {
            var zone = this._zonePartMap.get(zoneIndex);
            if (zone) {
                zone.moveControl(control, newControlPosition);
            }
        }
        else {
            // if the move is to a different CanvasZone we need to remove the control and add it to the new location
            var isFullWidth = _canvasSection__WEBPACK_IMPORTED_MODULE_4__["CanvasFullWidthSection"].isFullWidth(newControlPosition);
            // Todo#661360 Fix workaround left-over
            var newControl = this._getControlComponentById(control.id).serialize();
            this._checkControlFullWidthProperty(newControlPosition, newControl);
            newControl.position = newControlPosition;
            newControl.addedFromPersistedData = true;
            this.removeControl(control.position);
            // The drag zone only knows about the data disallowed tag but for the web parts that do support
            // full width, we need to add this extra condition to make sure that we don't exceed more than
            // one web part on full width section. This creates a new zone when the user attempts to drag a
            // web part in full width section that is not empty.
            if (isFullWidth && !this._isZoneSectionEmpty(newControlPosition, 0)) {
                var curZoneIndex = newControl.position.zoneIndex;
                newControl.position = CanvasLayout.cloneMerge(newControl.position, {
                    zoneIndex: CanvasLayout.generateNewLayoutIndex(this.zones, curZoneIndex),
                    sectionIndex: CanvasLayout.firstLayoutIndex,
                    controlIndex: 1
                });
            }
            this.addControl(newControl);
        }
        this._render();
    };
    /**
     * Moves the zone to the new index. The newZoneIndex is calculated outside of the layout and should
     * be the index of the zone before which this zone is moved or the last zone index + 1 in case the
     * new location is the last one on the canvas
     */
    CanvasLayout.prototype.moveZone = function (zone, newZoneIndex) {
        if (!zone || !newZoneIndex) {
            return false;
        }
        this._zonePartMap.delete(zone.index);
        zone.changeZoneIndex(CanvasLayout.generateNewLayoutIndex(this.zones, newZoneIndex));
        this._zonePartMap.set(zone.index, zone);
        this._render();
        return true;
    };
    /**
     * Removes a control from the layout
     * @param controlPosition represents the control to remove
     * @returns Id of control that was removed
     */
    CanvasLayout.prototype.removeControl = function (controlPosition) {
        var qos = this._createQosScope('RemoveControl');
        if (!controlPosition) {
            this._handleMonitoredException(qos, 'InvalidPosition', new Error('Failed to remove control because control position is undefined'), controlPosition);
            return undefined;
        }
        try {
            var zone = this._zonePartMap.get(controlPosition.zoneIndex);
            if (!zone) {
                // Zone doesn't exist, cannot proceed
                this._handleMonitoredException(qos, 'InvalidZone', new Error('Failed to remove control because zone does not exist'), controlPosition);
                return undefined;
            }
            // remove the control from the zone
            var controlId = zone.removeControl(controlPosition);
            qos.writeSuccess();
            return controlId;
        }
        catch (err) {
            this._handleMonitoredException(qos, 'Exception', err, controlPosition);
            return undefined;
        }
    };
    /**
     * Removes a zone from the layout
     *
     * @param index Represents the index of the zone to remove
     */
    CanvasLayout.prototype.removeZone = function (index) {
        var zone = this._zonePartMap.get(index);
        if (zone && CanvasLayout.isFullWidthSection(zone.layoutType)) {
            --this._fullWidthSectionsCount;
        }
        if (zone) {
            zone.dispose();
        }
        // All controls have been removed by zone.dispose in disposeWebparts
        // So only removing from dataMap here
        this._zonePartMap.delete(index);
    };
    /**
     * Fetches a control from the layout
     * @param controlPosition represents the position of the control
     * @returns the underlying control if available
     */
    CanvasLayout.prototype.fetchControl = function (controlPosition) {
        var qos = this._createQosScope('FetchControl');
        // Verify it is a valid layout
        if (!controlPosition) {
            this._handleMonitoredException(qos, 'InvalidPosition', new Error('Failed to fetch control because control position is undefined'), controlPosition);
            return undefined;
        }
        try {
            var zone = this._zonePartMap.get(controlPosition.zoneIndex);
            if (!zone) {
                // Zone doesn't exist, cannot proceed
                this._handleMonitoredException(qos, 'InvalidZone', new Error('Failed to fetch control because zone does not exist'), controlPosition);
                return undefined;
            }
            qos.writeSuccess();
            return zone.fetchControl(controlPosition);
        }
        catch (err) {
            this._handleMonitoredException(qos, 'Exception', err, controlPosition);
            return undefined;
        }
    };
    /**
     * Fetch all controls that are available in the canvas
     * @returns all the controls associated with that layout
     */
    CanvasLayout.prototype.fetchAllControls = function () {
        var canvasControls = [];
        this.zones.forEach(function (zone) {
            var controls = zone.fetchAllControls();
            canvasControls = canvasControls.concat(controls);
        });
        return canvasControls;
    };
    /**
     * Determines if the underlying layout is empty
     * @returns true if the pertinent layout is empty
     */
    CanvasLayout.prototype.isEmpty = function () {
        return this.fetchAllControls().length === 0;
    };
    /**
     * Disposes the layout.
     */
    CanvasLayout.prototype.dispose = function () {
        this._zonePartMap.clear();
        this._resetActiveControlState();
    };
    CanvasLayout.prototype._isZoneSectionEmpty = function (position, index) {
        var zone = this._zonePartMap.get(position.zoneIndex);
        var sections = zone ? zone.sections : [];
        return sections && sections[index] && sections[index].isEmpty();
    };
    CanvasLayout.prototype._checkControlFullWidthProperty = function (newCanvasPosition, control) {
        if (_canvasSection__WEBPACK_IMPORTED_MODULE_4__["CanvasFullWidthSection"].isFullWidthControl(control)) {
            if (_canvasSection__WEBPACK_IMPORTED_MODULE_4__["CanvasFullWidthSection"].isFullWidth(newCanvasPosition)) {
                _canvasSection__WEBPACK_IMPORTED_MODULE_4__["CanvasFullWidthSection"].setFullWidthWebPartProperty(control, true);
            }
            else if (!_canvasSection__WEBPACK_IMPORTED_MODULE_4__["CanvasFullWidthSection"].isFullWidth(newCanvasPosition)) {
                _canvasSection__WEBPACK_IMPORTED_MODULE_4__["CanvasFullWidthSection"].setFullWidthWebPartProperty(control, false);
            }
        }
    };
    CanvasLayout.prototype._initialize = function () {
        this._zonePartMap = new Map();
        this._fullWidthSectionsCount = 0;
        this._resetActiveControlState();
    };
    CanvasLayout.prototype._createQosScope = function (scope) {
        return new _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__["_QosMonitor"]("Canvas" + scope);
    };
    CanvasLayout.prototype._resetActiveControlState = function () {
        this._activeControlsState = {
            hoveredControlId: undefined,
            selectedControlId: undefined,
            selectedZoneIndex: undefined,
            deletedControlLayout: _undefinedControlPosition__WEBPACK_IMPORTED_MODULE_5__["undefinedControlPosition"],
            deleteCandidateControlLayout: _undefinedControlPosition__WEBPACK_IMPORTED_MODULE_5__["undefinedControlPosition"]
        };
    };
    CanvasLayout.prototype._handleMonitoredException = function (qos, failureTag, err, props) {
        var extraData; /* tslint:disable-line:no-any */
        if (props && props.controlType) {
            props = props;
            if (props &&
                props.controlType !== _ms_sp_canvas_read__WEBPACK_IMPORTED_MODULE_2__["CanvasControlType"].RTE &&
                props.controlType !== _ms_sp_canvas_read__WEBPACK_IMPORTED_MODULE_2__["CanvasControlType"].WebPartZone) {
                // We can add position for zone in extra data
                extraData = { ControlPosition: props.position };
            }
            if (props && props.controlType === _ms_sp_canvas_read__WEBPACK_IMPORTED_MODULE_2__["CanvasControlType"].WebPartZone) {
                extraData = {
                    id: props.webPartId,
                    alias: props.webPartManifest.alias
                };
            }
        }
        else {
            extraData = { ControlPosition: props };
        }
        qos.writeUnexpectedFailure(failureTag, err, extraData);
    };
    CanvasLayout.firstLayoutIndex = 1;
    CanvasLayout.verticalLayoutIndex = 2;
    return CanvasLayout;
}());



/***/ }),

/***/ "aYb9":
/*!*******************************************************!*\
  !*** ../sp-rte/lib/rte/ckeditor/CKTextEditor.scss.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* tslint:disable */
__webpack_require__(/*! ./CKTextEditor.css */ "BI4S");
var styles = {};
/* harmony default export */ __webpack_exports__["default"] = (styles);
/* tslint:enable */ 


/***/ }),

/***/ "aYeN":
/*!********************************************************************!*\
  !*** ./lib/sp-canvas/canvas/canvasControl/CanvasControlFactory.js ***!
  \********************************************************************/
/*! exports provided: CanvasControlFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanvasControlFactory", function() { return CanvasControlFactory; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ms_sp_canvas_read__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ms/sp-canvas-read */ "sSDQ");
/* harmony import */ var _ms_sp_canvas_read__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ms_sp_canvas_read__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ms_sp_viewport_loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ms/sp-viewport-loader */ "ywDL");
/* harmony import */ var _ms_sp_viewport_loader__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ms_sp_viewport_loader__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _webPartZone__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../webPartZone */ "4Tcc");
/* harmony import */ var _spRte_SPRteWrapper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../spRte/SPRteWrapper */ "TtDe");
/* harmony import */ var _common_KillSwitches__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../common/KillSwitches */ "17t3");







// tslint:disable-next-line:max-line-length
var viewPortIntegratedWebPartZone = Object(_ms_sp_viewport_loader__WEBPACK_IMPORTED_MODULE_3__["withViewPortIntegrated"])(_webPartZone__WEBPACK_IMPORTED_MODULE_4__["WebPartZone"]);
var CanvasControlFactory = /** @class */ (function () {
    function CanvasControlFactory() {
    }
    /**
     * Create web part or RTE to render.
     */
    CanvasControlFactory.CreateCanvasControl = function (control, store) {
        var displayMode = store.displayMode;
        switch (control.controlType) {
            case _ms_sp_canvas_read__WEBPACK_IMPORTED_MODULE_2__["CanvasControlType"].RTE:
                return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_spRte_SPRteWrapper__WEBPACK_IMPORTED_MODULE_5__["SPRteWrapper"], {
                    control: control,
                    ref: function (instance) { return store.canvasFields.setControlComponentById(control.id, instance); },
                    store: store
                });
            case _ms_sp_canvas_read__WEBPACK_IMPORTED_MODULE_2__["CanvasControlType"].WebPartZone:
                var webPartZoneProps = {
                    ref: function (instance) { return store.canvasFields.setControlComponentById(control.id, instance); },
                    displayMode: displayMode,
                    control: control,
                    store: store
                };
                var viewPortManager = store.canvasFields.viewPortManager;
                if (!Object(_common_KillSwitches__WEBPACK_IMPORTED_MODULE_6__["shouldDeprecateViewPortManagerInSpCanvas"])() && viewPortManager) {
                    var reservedHeight = _ms_sp_canvas_read__WEBPACK_IMPORTED_MODULE_2__["WebPartReservedHeight"].getReservedHeight(control, store.isMobileBrowser);
                    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](viewPortIntegratedWebPartZone, {
                        renderCompleteReportType: 'Customized',
                        originalComponentProps: webPartZoneProps,
                        preservedHeight: reservedHeight,
                        viewPortManager: viewPortManager,
                        id: Object(_ms_sp_canvas_read__WEBPACK_IMPORTED_MODULE_2__["getWebPartPerformanceTag"])(control.webPartManifest, control.id),
                        forceInViewPort: displayMode === _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["DisplayMode"].Edit ||
                            store.canvasFields.isRenderingDiff ||
                            store.canvasFields.webPartsExemptedFromViewPortLoading.has(control.id)
                    });
                }
                else {
                    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_webPartZone__WEBPACK_IMPORTED_MODULE_4__["WebPartZone"], webPartZoneProps);
                }
            default:
                return false;
        }
    };
    return CanvasControlFactory;
}());



/***/ }),

/***/ "br4S":
/*!*********************************************!*\
  !*** external "@microsoft/sp-webpart-base" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_br4S__;

/***/ }),

/***/ "bzM1":
/*!*******************************************************************!*\
  !*** ./lib/sp-canvas/canvas/canvasLayout/getPhantomRTEControl.js ***!
  \*******************************************************************/
/*! exports provided: getPhantomRTEControl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPhantomRTEControl", function() { return getPhantomRTEControl; });
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ms_sp_canvas_read__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ms/sp-canvas-read */ "sSDQ");
/* harmony import */ var _ms_sp_canvas_read__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ms_sp_canvas_read__WEBPACK_IMPORTED_MODULE_1__);


function getPhantomRTEControl(position) {
    var rteCanvasContent = {
        controlType: _ms_sp_canvas_read__WEBPACK_IMPORTED_MODULE_1__["CanvasControlType"].RTE,
        id: _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Guid"].newGuid().toString(),
        position: position,
        innerHTML: '',
        isPhantomRTE: true
    };
    return rteCanvasContent;
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

/***/ "cPvr":
/*!**************************************************************************!*\
  !*** ./lib/sp-canvas/canvas/editChunk/sprte/DeferredSPRteTouchDevice.js ***!
  \**************************************************************************/
/*! exports provided: DeferredSPRteTouchDevice */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeferredSPRteTouchDevice", function() { return DeferredSPRteTouchDevice; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


// tslint:disable
var DeferredSPRteComponentTouchDevice = react__WEBPACK_IMPORTED_MODULE_1__["lazy"](function () {
    return __webpack_require__.e(/*! import() | sp-canvas-edit */ "sp-canvas-edit").then(__webpack_require__.bind(null, /*! ./index-deferred */ "pL8B")).then(function (module) { return ({
        default: module.withDataControlled(module.SPRteTouchDevice)
    }); });
});
var DeferredSPRteTouchDevice = react__WEBPACK_IMPORTED_MODULE_1__["forwardRef"](function (props, ref) {
    return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Suspense"], { fallback: false },
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](DeferredSPRteComponentTouchDevice, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ ref: ref }, props))));
});


/***/ }),

/***/ "d8u6":
/*!****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/css-loader@3.2.1_webpack@4.44.2/node_modules/css-loader/dist/cjs.js!/agent/_work/1/s/common/temp/node_modules/.pnpm/postcss-loader@3.0.0/node_modules/postcss-loader/src??postcss!./lib/sp-canvas/canvas/canvas/LayoutCanvas.css ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../common/temp/node_modules/.pnpm/css-loader@3.2.1_webpack@4.44.2/node_modules/css-loader/dist/runtime/api.js */ "5ADk")(false);
// Module
exports.push([module.i, ".CanvasComponent.LCS{position:relative}.CanvasComponent.LCS .Canvas{position:relative;padding:0}.CanvasComponent.LCS .Canvas>.CanvasToolboxHint .CanvasToolboxHint-plusButtonWrapperOriginal{padding:0 12px}.CanvasComponent.LCS .Canvas>.CanvasToolboxHint .CanvasToolboxHint-plusButtonWrapperOriginal.centerAlign{margin:auto}[dir=ltr] .CanvasComponent.LCS .Canvas--edit.Canvas--withLayout{margin-left:32px}[dir=rtl] .CanvasComponent.LCS .Canvas--edit.Canvas--withLayout{margin-right:32px}[dir=ltr] .CanvasComponent.LCS .Canvas--edit>.CanvasToolboxHint .CanvasToolboxHint-plusButtonWrapperOriginal{padding-left:32px}[dir=rtl] .CanvasComponent.LCS .Canvas--edit>.CanvasToolboxHint .CanvasToolboxHint-plusButtonWrapperOriginal{padding-right:32px}[dir=ltr] .CanvasComponent.LCS .Canvas--edit>.CanvasToolboxHint .CanvasToolboxHint-plusButtonWrapperOriginal{padding-right:16px}[dir=rtl] .CanvasComponent.LCS .Canvas--edit>.CanvasToolboxHint .CanvasToolboxHint-plusButtonWrapperOriginal{padding-left:16px}.CanvasComponent.LCS .Canvas-screenReaderOnly{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);border:0}", ""]);


/***/ }),

/***/ "dYQ3":
/*!**********************************************************!*\
  !*** ./lib/sp-canvas/canvas/canvasStore/CanvasFields.js ***!
  \**********************************************************/
/*! exports provided: CanvasFields */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanvasFields", function() { return CanvasFields; });
/* harmony import */ var _microsoft_sp_webpart_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/sp-webpart-base */ "br4S");
/* harmony import */ var _microsoft_sp_webpart_base__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_webpart_base__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/sp-diagnostics */ "ut3N");
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _canvasLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../canvasLayout */ "yPt8");



var CanvasFields = /** @class */ (function () {
    function CanvasFields() {
        var _this = this;
        this.isDOMManipulated = false;
        this.webpartsCount = 0;
        /**
         * Total number of web parts in the canvas store to be loaded
         */
        this.webPartsCount = 0;
        /**
         * Total number of web parts approved for EUPL in canvas
         */
        this.euplApprovedWebpartCount = 0;
        this.isUpdatingFromUpperLevel = false; // TODO#705886 Refactor isUpdatingFromUpperLevel flag.
        /**
         * An incremental value that changes only when page is navigated.
         * This value is assigned as React key to CanvasComponent to re-mount the canvas controls
         * to make sure web parts will be reloaded.
         */
        this.canvasReactKey = 0;
        this.getControlComponentById = function (id) {
            return _this.controlComponentMap.get(id);
        };
        this.setControlComponentById = function (id, component) {
            if (component) {
                _this.controlComponentMap.set(id, component);
            }
            else {
                _this.controlComponentMap.delete(id);
            }
        };
    }
    Object.defineProperty(CanvasFields.prototype, "isRenderingDiff", {
        get: function () {
            return Boolean(this.controlDiffMap);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CanvasFields.prototype, "deletedControlLayout", {
        get: function () {
            return this.canvasLayout.controlsState.deletedControlLayout;
        },
        set: function (layout) {
            this.canvasLayout.controlsState.deletedControlLayout = layout;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CanvasFields.prototype, "canvasControls", {
        get: function () {
            var canvasControls = [];
            this.canvasLayouts.forEach(function (layout) {
                canvasControls = canvasControls.concat(layout.fetchAllControls());
            });
            return canvasControls;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CanvasFields.prototype, "canAddFullWidthSection", {
        get: function () {
            return !this.isVerticalSectionPresent;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CanvasFields.prototype, "canAddVerticalSection", {
        get: function () {
            return !this.isVerticalSectionPresent && !this.isFullWidthSectionPresent;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CanvasFields.prototype, "isFullWidthSectionPresent", {
        get: function () {
            // Todo#661360 Fix workaround left-over
            return this.canvasLayouts.get(_canvasLayout__WEBPACK_IMPORTED_MODULE_2__["CanvasLayout"].firstLayoutIndex).isFullWidthSectionPresent;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CanvasFields.prototype, "siteSupportsFullWidth", {
        get: function () {
            return this.shouldCenterAlign;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CanvasFields.prototype, "selectedZoneIndex", {
        // WEX! VSO:Task:312203 this should be merged with selectedControlId to create a canvasSelection object
        // when the CanvasStore.isLayoutSupported flight is removed
        get: function () {
            return this.canvasLayout.controlsState.selectedZoneIndex; // Todo#661360 Fix workaround left-over
        },
        set: function (zoneIndex) {
            this.selectedControlIdInternal = undefined;
            this.canvasLayout.controlsState.selectedZoneIndex = zoneIndex;
            this.render();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CanvasFields.prototype, "selectedControlIdInternal", {
        get: function () {
            return this.canvasLayout.controlsState.selectedControlId;
        },
        set: function (id) {
            this.canvasLayout.controlsState.selectedControlId = id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CanvasFields.prototype, "hoveredControlId", {
        get: function () {
            return this.canvasLayout.controlsState.hoveredControlId;
        },
        set: function (id) {
            this.canvasLayout.controlsState.hoveredControlId = id;
        },
        enumerable: true,
        configurable: true
    });
    CanvasFields.prototype.getControl = function (position) {
        return this.canvasLayout.fetchControl(position);
    };
    Object.defineProperty(CanvasFields.prototype, "canvasLayout", {
        get: function () {
            return this.getLayout(this.selectedLayoutIndex);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CanvasFields.prototype, "propertyPaneLoader", {
        get: function () {
            return this.serviceScope.consume(_microsoft_sp_webpart_base__WEBPACK_IMPORTED_MODULE_0__["_PropertyPaneLoader"].serviceKey);
        },
        enumerable: true,
        configurable: true
    });
    CanvasFields.prototype.getLayout = function (layoutIndex) {
        // Todo#661360 Fix workaround left-over
        return this.canvasLayouts.get(layoutIndex || _canvasLayout__WEBPACK_IMPORTED_MODULE_2__["CanvasLayout"].firstLayoutIndex);
    };
    Object.defineProperty(CanvasFields.prototype, "isVerticalSectionPresent", {
        get: function () {
            return this.getLayout(_canvasLayout__WEBPACK_IMPORTED_MODULE_2__["CanvasLayout"].verticalLayoutIndex).zones.length !== 0;
        },
        enumerable: true,
        configurable: true
    });
    CanvasFields.prototype.instantiateCanvasLayout = function (numberOfLayouts) {
        var _this = this;
        this.canvasLayouts = new Map();
        for (var i = 1; i <= numberOfLayouts; i++) {
            this.canvasLayouts.set(i, new _canvasLayout__WEBPACK_IMPORTED_MODULE_2__["CanvasLayout"](this.getControlComponentById, function () {
                // If we have to re-render from a layout change, we should always notify something has changed
                _this.handleCanvasChanged();
                _this.render();
            }, i));
        }
    };
    CanvasFields.logSource = _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__["_LogSource"].create('CanvasStore');
    return CanvasFields;
}());



/***/ }),

/***/ "fT2f":
/*!*********************************************************************************!*\
  !*** ./lib/sp-canvas/canvas/editChunk/canvasDragZone/DeferredCanvasDragZone.js ***!
  \*********************************************************************************/
/*! exports provided: DeferredCanvasDragZone */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeferredCanvasDragZone", function() { return DeferredCanvasDragZone; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _CanvasDragZone__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CanvasDragZone */ "MCvD");



var DeferredCanvasDragZone = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(DeferredCanvasDragZone, _super);
    function DeferredCanvasDragZone(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            editModule: undefined
        };
        return _this;
    }
    DeferredCanvasDragZone.prototype.componentDidMount = function () {
        this._tryEnsureEditModule();
    };
    DeferredCanvasDragZone.prototype.componentDidUpdate = function () {
        this._tryEnsureEditModule();
    };
    DeferredCanvasDragZone.prototype.render = function () {
        var editModule = this.props.isEdit && this.state.editModule
            ? Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ isEnabled: true }, this.state.editModule) : { isEnabled: false };
        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_CanvasDragZone__WEBPACK_IMPORTED_MODULE_2__["CanvasDragZone"], { editModule: editModule }, this.props.children);
    };
    DeferredCanvasDragZone.prototype._tryEnsureEditModule = function () {
        // Only load module once when display changed to Edit.
        if (this.props.isEdit && !this._loadModulePromise) {
            this._loadModulePromise = this._loadEditModule();
        }
    };
    DeferredCanvasDragZone.prototype._loadEditModule = function () {
        var _this = this;
        return __webpack_require__.e(/*! import() | sp-canvas-edit */ "sp-canvas-edit").then(__webpack_require__.bind(null, /*! ./index-edit */ "/g48")).then(function (module) {
            _this.setState({
                editModule: {
                    webPartDragZoneUtils: new module.CanvasWebPartDragZoneUtils(function () { return _this.props.store; }, _this.props.cultureName),
                    sectionDragZoneUtils: new module.CanvasSectionDragZoneUtils(function () { return _this.props.store; })
                }
            });
        });
    };
    return DeferredCanvasDragZone;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));



/***/ }),

/***/ "faye":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_faye__;

/***/ }),

/***/ "fqJ2":
/*!********************************************************!*\
  !*** ./lib/sp-canvas/canvas/canvasAnimations/index.js ***!
  \********************************************************/
/*! exports provided: CanvasRevealObserver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CanvasRevealObserver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CanvasRevealObserver */ "5WXc");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CanvasRevealObserver", function() { return _CanvasRevealObserver__WEBPACK_IMPORTED_MODULE_0__["CanvasRevealObserver"]; });




/***/ }),

/***/ "hiL/":
/*!*********************************************!*\
  !*** external "@ms/sp-component-utilities" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_hiL___;

/***/ }),

/***/ "iiHs":
/*!**********************************!*\
  !*** external "@ms/sp-dragzone" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_iiHs__;

/***/ }),

/***/ "indE":
/*!**********************************************!*\
  !*** ./lib/sp-canvas/loc/CanvasStrings.resx ***!
  \**********************************************/
/*! exports provided: AriaWebPartOrSectionEnterTemplate, CanvasZoneAriaWebpartName, TextWebPartDisplayName, ToolbarNavigationArrowKeys, ToolboxOneColumnPart, ToolboxTwoColumnPart, ToolboxThreeColumnPart, ToolboxOneThirdRightColumnPart, ToolboxOneThirdLeftColumnPart, ToolboxFullWidthColumnPart, WebPartAriaLabel, SectionContextualAriaLabel, SectionAriaLabel, WebPartsInSectionLabel, ToolboxHintSectionTitleOnlyLayouts, EmptySectionAriaLabel, SectionPositionAriaLabel, CanvasVerticalSectionZoneLabel, ToolbarDuplicateSectionTitle, ToolbarDuplicateWebPartTitle, WikiLinkingPlaceholderInstruction, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"AriaWebPartOrSectionEnterTemplate\":\"{0}. Press Enter to navigate inside the {1}. When inside, use Alt+F10 to go to toolbar, use Alt+P to move focus to the property pane and use Escape to exit the {1}.  \",\"CanvasZoneAriaWebpartName\":\"{0} Web Part\",\"TextWebPartDisplayName\":\"Text\",\"ToolbarNavigationArrowKeys\":\"Use arrow keys to navigate inside the toolbar.\",\"ToolboxOneColumnPart\":\"One column\",\"ToolboxTwoColumnPart\":\"Two columns\",\"ToolboxThreeColumnPart\":\"Three columns\",\"ToolboxOneThirdRightColumnPart\":\"One-third right column\",\"ToolboxOneThirdLeftColumnPart\":\"One-third left column\",\"ToolboxFullWidthColumnPart\":\"Full-width section\",\"WebPartAriaLabel\":\"web part\",\"SectionContextualAriaLabel\":\"{0}, {1} section containing {2}\",\"SectionAriaLabel\":\"section\",\"WebPartsInSectionLabel\":\"{0}, {1}\",\"ToolboxHintSectionTitleOnlyLayouts\":\"Add a new section\",\"EmptySectionAriaLabel\":\"no webpart\",\"SectionPositionAriaLabel\":\"Section {0} of {1}\",\"CanvasVerticalSectionZoneLabel\":\"Section with vertical column layout\",\"ToolbarDuplicateSectionTitle\":\"Duplicate section\",\"ToolbarDuplicateWebPartTitle\":\"Duplicate web part\",\"WikiLinkingPlaceholderInstruction\":\"This page has not been created yet. When you select the link, the page will be created for you, and you\\u0027ll go to the page where you can add content.\"}");

/***/ }),

/***/ "j0qU":
/*!*******************************************************!*\
  !*** ./lib/sp-canvas/canvas/canvasComponent/index.js ***!
  \*******************************************************/
/*! exports provided: CanvasComponent, CreateEmptyZoneLayout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CanvasComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CanvasComponent */ "AS1P");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CanvasComponent", function() { return _CanvasComponent__WEBPACK_IMPORTED_MODULE_0__["CanvasComponent"]; });

/* harmony import */ var _CreateEmptyZoneLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CreateEmptyZoneLayout */ "EEYx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CreateEmptyZoneLayout", function() { return _CreateEmptyZoneLayout__WEBPACK_IMPORTED_MODULE_1__["CreateEmptyZoneLayout"]; });





/***/ }),

/***/ "jOlS":
/*!************************************************!*\
  !*** external "@microsoft/load-themed-styles" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_jOlS__;

/***/ }),

/***/ "jhmt":
/*!*******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/css-loader@3.2.1_webpack@4.44.2/node_modules/css-loader/dist/cjs.js!/agent/_work/1/s/common/temp/node_modules/.pnpm/postcss-loader@3.0.0/node_modules/postcss-loader/src??postcss!../sp-rte/lib/rte/baseRte/BaseRte.css ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../common/temp/node_modules/.pnpm/css-loader@3.2.1_webpack@4.44.2/node_modules/css-loader/dist/runtime/api.js */ "5ADk")(false);
// Module
exports.push([module.i, ".cke_editable{cursor:text;margin:0;padding:1px 2px 0;min-height:68px}.cke_editable ul{counter-reset:item}.fix-box-sizing .cke_chrome{box-sizing:border-box}.rte-webpart{overflow:hidden}.rte-webpart-inlineImageHidden .webPartInRteInlineImage{display:none}.oneLineWidth{min-height:42px}.rte-margin-bottom{margin-bottom:-16px}.rte--edit a{pointer-events:none}.rte--edit a[class*=topic-highlight]{cursor:pointer;background-color:\"[theme:neutralLighter, default: #f4f4f4]\";color:\"[theme:neutralPrimary, default: #333333]\";text-decoration:underline!important;border-bottom:none}.rte--edit.WebPartRteFocusBorder .cke_focus{border-color:\"[theme:themePrimary, default: #0078d4]\"}.rte--read{min-height:0}.rte--read .canvasRteResponsiveTableSelected{border:1px solid \"[theme:neutraltertiary, default: #a6a6a6]\"}.rte--read .cke_widget_drag_handler{display:none}.cke_editable:focus{outline:0}.cke_editable:focus td[class*=cke_table-faked-selection]{background:\"[theme:themeLight, default: #c7e0f4]\"!important;border-color:\"[theme:themePrimary, default: #0078d4]\"!important;border-width:1px;border-style:solid}.fontWeightStrongForIEFireFox strong,.fontWeightStrong strong{font-weight:700}.cke_editable blockquote,.cke_editable div,.cke_editable h2,.cke_editable h3,.cke_editable h4,.cke_editable ol,.cke_editable p,.cke_editable ul{-webkit-font-smoothing:antialiased;line-height:1.3;margin:0 0 8px;word-wrap:break-word}.cke_editable .cke_table-faked-selection{background:\"[theme:themeLight, default: #c7e0f4]\"!important;border-color:\"[theme:themePrimary, default: #0078d4]\"!important;border-width:1px;border-style:solid}.cke_editable div,.cke_editable p{font-size:15px}.cke_editable h2,.cke_editable h3,.cke_editable h4{font-weight:100!important}.cke_editable h2{font-size:24px}.cke_editable h3{font-size:21px}.cke_editable h4{font-size:17px;font-weight:300}.cke_editable ol,.cke_editable ul{font-size:15px;padding:0;margin-left:0!important}.cke_editable ol li,.cke_editable ol li p,.cke_editable ul li,.cke_editable ul li p{margin-bottom:8px}.cke_editable ol{list-style-type:decimal}.cke_editable ul{list-style-type:disc}.cke_editable ol ol,.cke_editable ul ul{margin-top:8px;margin-bottom:8px}.cke_editable ul li ul li{list-style-type:circle}.cke_editable ul li ul li ul li{list-style-type:square}.cke_editable blockquote,.cke_editable div.quote-true{border-left:none;border-right:none;font-weight:100;font-size:24px;font-style:italic;margin:28px 0;padding:32px;text-align:center;font-family:Segoe UI Light WestEuropean,Segoe UI Light,Segoe WP Light,Segoe UI,Segoe WP,Tahoma,Arial,sans-serif}.cke_editable blockquote p{font-size:24px;margin:0}.cke_editable a{text-decoration:underline}.cke_editable i{font-style:italic}.cke_editable u{text-decoration:underline}@media screen and (min-width:480px){.cke_editable h2{font-size:28px}.cke_editable h3{font-size:24px}.cke_editable h4{font-size:21px}.cke_editable blockquote,.cke_editable div.quote-true{font-size:24px}}@media screen and (min-width:1024px){.cke_editable h2{font-size:28px}.cke_editable h3{font-size:24px}.cke_editable h4{font-size:21px}.cke_editable div,.cke_editable ol,.cke_editable p,.cke_editable ul{font-size:17px;font-weight:300;line-height:1.3}.cke_editable td,.cke_editable td p,.cke_editable th,.cke_editable th p{font-size:15px;font-weight:400}}.cke_editable a[class*=topic-highlight]{cursor:text;text-decoration:none;color:\"[theme:bodyText, default: #323130]\";pointer-events:none}.cke_editable:not(:focus):before{content:attr(placeholder);font-size:17px;font-weight:300;line-height:1.3;display:block;height:0}.oneLineWidth:not(:focus):before{height:0}.cke_editable div,.cke_editable p{font-size:18px;font-weight:400;line-height:1.4}.cke_editable h2,.cke_editable h3,.cke_editable h4{font-weight:600!important}.cke_editable h2{font-size:28px}.cke_editable h3{font-size:24px}.cke_editable h4{font-size:20px;font-weight:600}.cke_editable ol,.cke_editable ul{font-size:18px;font-weight:400}.cke_editable blockquote,.cke_editable blockquote p,.cke_editable div.quote-true{font-weight:600;font-size:20px;line-height:1.4}.cke_editable td,.cke_editable td ol,.cke_editable td p,.cke_editable td ul,.cke_editable th,.cke_editable th p{font-size:16px;font-weight:400}.isFluent:not(:focus):before{content:attr(placeholder);font-size:18px;font-weight:400;line-height:1.4;display:block}", ""]);


/***/ }),

/***/ "kGU/":
/*!****************************************************************************!*\
  !*** ./lib/sp-canvas/canvas/editChunk/canvasDiff/DeferredDiffIndicator.js ***!
  \****************************************************************************/
/*! exports provided: DeferredDiffIndicator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeferredDiffIndicator", function() { return DeferredDiffIndicator; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _DeferredCanvasDiff__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DeferredCanvasDiff */ "o0cL");



// tslint:disable-next-line:variable-name
var DeferredComponent = react__WEBPACK_IMPORTED_MODULE_1__["lazy"](function () {
    return Object(_DeferredCanvasDiff__WEBPACK_IMPORTED_MODULE_2__["canvasDiffLoader"])().then(function (module) { return ({ default: module.DiffIndicator }); });
});
/**
 * @internal
 */
function DeferredDiffIndicator(props) {
    return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Suspense"], { fallback: false },
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](DeferredComponent, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, props))));
}


/***/ }),

/***/ "kQ9N":
/*!***********************************************************************!*\
  !*** ./lib/sp-canvas/canvas/canvasStore/CorruptSectionFactorFixer.js ***!
  \***********************************************************************/
/*! exports provided: CorruptSectionFactorFixer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CorruptSectionFactorFixer", function() { return CorruptSectionFactorFixer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/sp-diagnostics */ "ut3N");
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @microsoft/sp-lodash-subset */ "Pk8u");
/* harmony import */ var _microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _canvasLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../canvasLayout */ "yPt8");




/**
 * This is workaround for [VSO#689576](https://onedrive.visualstudio.com/WEX!/_workitems/edit/689576)
 *  Canvas sometimes saves/displays in an unachievable layout (not 1, 1/2, 1/3, 2/3, but other)
 * [Pull request](https://onedrive.visualstudio.com/SPPPlat/_git/sp-client/pullrequest/234497?_a=overview)
 *  fixed the issue where section factor for newly added web part can be undefined unexpectedly.
 * CanvasLayout has assumption that all controls within same section should all have same section factor.
 * This workaround is to recover the web parts whose section factors are undefined while there is control
 *  within same section has defined section factor.
 * We added telemetry at the same time in hope this workaround can be removed some day when number is very low.
 */
var CorruptSectionFactorFixer = /** @class */ (function () {
    function CorruptSectionFactorFixer(controls) {
        var _this = this;
        this._controls = controls;
        // Fill layout index for old web parts.
        this._controls.forEach(function (control) {
            if (control.position.layoutIndex === undefined) {
                control.position = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, control.position), { layoutIndex: _canvasLayout__WEBPACK_IMPORTED_MODULE_3__["CanvasLayout"].firstLayoutIndex });
            }
        });
        this._isAnyControlInBadState = this._controls.some(function (control, index) {
            return _this._isControlWithBadSectionFactor(index);
        });
    }
    CorruptSectionFactorFixer.prototype.logEngagement = function () {
        var _this = this;
        var numberOfBadControls = this._controls.filter(function (control, index) {
            return _this._isControlWithBadSectionFactor(index);
        }).length;
        if (numberOfBadControls) {
            // Keep monitoring the number of bad controls that are still remaining on production.
            // This can help us decides when we can remove the code of fixing the corrupted section factor.
            _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__["_EngagementLogger"].logEventWithLogEntry(new _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__["_LogEntry"]('CanvasControls', 'FixBadSectionFactor', _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__["_LogType"].Event, {
                numberOfBadControls: String(numberOfBadControls)
            }));
        }
    };
    CorruptSectionFactorFixer.prototype.getSectionFactorFixedControls = function () {
        if (this._isAnyControlInBadState) {
            this._fixControlsWithBadSectionFactor();
        }
        return this._controls;
    };
    CorruptSectionFactorFixer.prototype._fixControlsWithBadSectionFactor = function () {
        var _this = this;
        this._controls.forEach(function (control, index) {
            control.position = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, control.position), { sectionFactor: _this._getExpectedSectionFactorForControlAt(index) });
        });
    };
    CorruptSectionFactorFixer.prototype._isControlWithBadSectionFactor = function (index) {
        return this._getExpectedSectionFactorForControlAt(index) !== this._controls[index].position.sectionFactor;
    };
    CorruptSectionFactorFixer.prototype._getExpectedSectionFactorForControlAt = function (currentIndex) {
        var current = this._controls[currentIndex];
        if (current.position.sectionFactor === undefined) {
            // The index of another control within same section whose section factor is defined.
            var goodControlIndex = Object(_microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_2__["findIndex"])(this._controls, function (control, index) {
                return (index !== currentIndex &&
                    control.position.layoutIndex === current.position.layoutIndex &&
                    control.position.zoneIndex === current.position.zoneIndex &&
                    control.position.sectionIndex === current.position.sectionIndex &&
                    control.position.sectionFactor !== undefined);
            });
            if (goodControlIndex > -1) {
                return this._controls[goodControlIndex].position.sectionFactor;
            }
        }
        return current.position.sectionFactor;
    };
    return CorruptSectionFactorFixer;
}());



/***/ }),

/***/ "kel/":
/*!**************************************************************************!*\
  !*** ./lib/sp-canvas/canvas/editChunk/canvasDiff/DeferredDiffMessage.js ***!
  \**************************************************************************/
/*! exports provided: DeferredDiffMessage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeferredDiffMessage", function() { return DeferredDiffMessage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _microsoft_sp_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @microsoft/sp-loader */ "I6O9");
/* harmony import */ var _microsoft_sp_loader__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_loader__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _DeferredCanvasDiff__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DeferredCanvasDiff */ "o0cL");




// tslint:disable-next-line:variable-name
var DeferredComponent = react__WEBPACK_IMPORTED_MODULE_1__["lazy"](function () {
    return Promise.all([
        Object(_DeferredCanvasDiff__WEBPACK_IMPORTED_MODULE_3__["canvasDiffLoader"])(),
        _microsoft_sp_loader__WEBPACK_IMPORTED_MODULE_2__["SPComponentLoader"].loadComponentById('6d3c733c-8cb7-4871-bb22-b5b37c1d518d') // sp-safehtml
    ]).then(function (_a) {
        var diffModule = _a[0], safeHtmlModule = _a[1];
        return ({
            default: diffModule.getDiffMessageComponent(safeHtmlModule.SafeHtml)
        });
    });
});
/**
 * @internal
 */
function DeferredDiffMessage(props) {
    return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Suspense"], { fallback: false },
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](DeferredComponent, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, props))));
}


/***/ }),

/***/ "khFG":
/*!************************************************************************!*\
  !*** ./lib/sp-canvas/canvas/canvasLayout/getZonePositionUniqString.js ***!
  \************************************************************************/
/*! exports provided: getZonePositionUniqString */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getZonePositionUniqString", function() { return getZonePositionUniqString; });
function getZonePositionUniqString(zonePosition) {
    return zonePosition.layoutIndex + "_" + zonePosition.zoneIndex;
}


/***/ }),

/***/ "lCy/":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/css-loader@3.2.1_webpack@4.44.2/node_modules/css-loader/dist/cjs.js!/agent/_work/1/s/common/temp/node_modules/.pnpm/postcss-loader@3.0.0/node_modules/postcss-loader/src??postcss!./lib/sp-canvas/canvas/canvasComponent/CanvasComponent.css ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../common/temp/node_modules/.pnpm/css-loader@3.2.1_webpack@4.44.2/node_modules/css-loader/dist/runtime/api.js */ "5ADk")(false);
// Module
exports.push([module.i, ".CanvasComponent.LCS .grid{box-sizing:border-box;zoom:1;padding:0 8px}.CanvasComponent.LCS .grid:after,.CanvasComponent.LCS .grid:before{display:table;content:\"\";line-height:0}.CanvasComponent.LCS .grid:after{clear:both}.CanvasComponent.LCS .UpdateEditTop{margin-top:14px}.CanvasComponent.LCS .CanvasComponentWrapper{display:block;max-width:1648px}.CanvasComponent.LCS .CanvasComponentWrapper.CenterAligned{margin:0 auto}.CanvasComponent.LCS .CanvasComponentMain{width:100%}.CanvasComponent.LCS .CanvasVerticalSectionContainer{width:100%;min-width:312px;min-height:100%}.CanvasComponent.LCS .Canvas-slideUpIn{animation-name:Canvas-fadeIn,Canvas-slideUp;animation-duration:367ms;animation-timing-function:cubic-bezier(.1,.9,.2,1);animation-fill-mode:both;animation-delay:.1s}@keyframes Canvas-slideUp{0%{transform:translate3d(0,20px,0)}to{transform:translateZ(0)}}@keyframes Canvas-fadeIn{0%{opacity:0}to{opacity:1}}@media screen and (min-width:1280px){.CanvasComponent.LCS .CanvasComponentWrapper.hasSmallerBreakpoint{display:-ms-flexbox;display:flex}.CanvasComponent.LCS .CanvasComponentWrapper.hasSmallerBreakpoint.CanvasComponentWrapper--reflow{display:block}.CanvasComponent.LCS .CanvasComponentWrapper.hasSmallerBreakpoint .CanvasComponentMain{width:75%}.CanvasComponent.LCS .CanvasComponentWrapper.hasSmallerBreakpoint .CanvasComponentMain.isEdit{margin-top:32px}.CanvasComponent.LCS .CanvasComponentWrapper.hasSmallerBreakpoint .CanvasComponentMain.CanvasComponentMain--reflow{width:100%}.CanvasComponent.LCS .CanvasComponentWrapper.hasSmallerBreakpoint .CanvasVerticalSectionContainer{width:25%}.CanvasComponent.LCS .CanvasComponentWrapper.hasSmallerBreakpoint .CanvasVerticalSectionContainer.CanvasVerticalSectionContainer--reflow{width:100%}[dir=ltr] .CanvasComponent.LCS .CanvasComponentWrapper.hasSmallerBreakpoint .CanvasVerticalSectionContainer.CanvasVerticalSectionContainer--reflow{padding-left:32px}[dir=rtl] .CanvasComponent.LCS .CanvasComponentWrapper.hasSmallerBreakpoint .CanvasVerticalSectionContainer.CanvasVerticalSectionContainer--reflow{padding-right:32px}}@media screen and (min-width:1366px){.CanvasComponent.LCS .CanvasComponentWrapper{display:-ms-flexbox;display:flex}.CanvasComponent.LCS .CanvasComponentWrapper.CanvasComponentWrapper--reflow{display:block}.CanvasComponent.LCS .CanvasComponentMain{width:75%}.CanvasComponent.LCS .CanvasComponentMain.isEdit{margin-top:32px}.CanvasComponent.LCS .CanvasComponentMain.CanvasComponentMain--reflow{width:100%}.CanvasComponent.LCS .CanvasVerticalSectionContainer{width:25%}.CanvasComponent.LCS .CanvasVerticalSectionContainer.CanvasVerticalSectionContainer--reflow{width:100%}[dir=ltr] .CanvasComponent.LCS .CanvasVerticalSectionContainer.CanvasVerticalSectionContainer--reflow{padding-left:32px}[dir=rtl] .CanvasComponent.LCS .CanvasVerticalSectionContainer.CanvasVerticalSectionContainer--reflow{padding-right:32px}}", ""]);


/***/ }),

/***/ "lJmH":
/*!*******************************************************!*\
  !*** ./lib/sp-canvas/canvas/canvasZone/CanvasZone.js ***!
  \*******************************************************/
/*! exports provided: CanvasZone */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanvasZone", function() { return CanvasZone; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @microsoft/office-ui-fabric-react-bundle */ "KL1q");
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ms/odsp-utilities-bundle */ "y88i");
/* harmony import */ var _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ms/sp-component-utilities */ "hiL/");
/* harmony import */ var _ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ms_sp_a11y__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ms/sp-a11y */ "ytfe");
/* harmony import */ var _ms_sp_a11y__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_ms_sp_a11y__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @microsoft/sp-lodash-subset */ "Pk8u");
/* harmony import */ var _microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _ms_sp_canvas_read__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ms/sp-canvas-read */ "sSDQ");
/* harmony import */ var _ms_sp_canvas_read__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_ms_sp_canvas_read__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _canvasLayout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../canvasLayout */ "yPt8");
/* harmony import */ var _canvasSection__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../canvasSection */ "JqQl");
/* harmony import */ var _editChunk__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../editChunk */ "9s5w");
/* harmony import */ var _a11y_CanvasA11yConstants__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../a11y/CanvasA11yConstants */ "AqUB");
/* harmony import */ var _common_CanvasAlignmentStyles_styles__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../common/CanvasAlignmentStyles.styles */ "PBv6");
/* harmony import */ var _common_KillSwitches__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../common/KillSwitches */ "17t3");
/* harmony import */ var _CanvasZone_resx__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./CanvasZone.resx */ "QHyI");
var _CanvasZone_resx__WEBPACK_IMPORTED_MODULE_15___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./CanvasZone.resx */ "QHyI", 1);
/* harmony import */ var _loc_CanvasStrings_resx__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../loc/CanvasStrings.resx */ "indE");
var _loc_CanvasStrings_resx__WEBPACK_IMPORTED_MODULE_16___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../loc/CanvasStrings.resx */ "indE", 1);
/* harmony import */ var _CanvasZone_scss__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./CanvasZone.scss */ "Kw1M");
/**
 * @file CanvasZoneComponent.tsx
 * @copyright (c) Microsoft Corporation. All rights reserved.
 */


















/**
 * Represents a Zone layout component
 */
var CanvasZone = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(CanvasZone, _super);
    function CanvasZone(props) {
        var _this = _super.call(this, props) || this;
        _this._domElementRef = react__WEBPACK_IMPORTED_MODULE_1__["createRef"]();
        _this._focusableElementRef = react__WEBPACK_IMPORTED_MODULE_1__["createRef"]();
        _this._registerPropertyPanePromise = Promise.resolve();
        _this.focus = function () {
            var store = _this.props.store;
            /**
             * Focus on the focusable child if specifically defined
             * Otherwise let a11yManager handle through standard logic
             */
            if (_this._focusableElementRef && _this._focusableElementRef.current) {
                _this._focusableElementRef.current.focus();
            }
            else if (_this._domElement) {
                store.a11yManager.focusTo(_this._domElement);
            }
        };
        _this._handleSelectZone = function () {
            _this._selectZone();
        };
        _this._refreshPropertyPane = function () {
            void _this._registerPropertyPanePromise.then(function () {
                var propertyPaneController = _this.props.store.propertyPaneController;
                if (propertyPaneController &&
                    propertyPaneController.isOpen() &&
                    _this.props.displayMode === _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_3__["DisplayMode"].Edit) {
                    propertyPaneController.requestAction(_this._id, propertyPaneController.currentlyConfiguredConsumerId === _this._id ? 'Refresh' : 'Default');
                }
            });
        };
        _this._ensurePropertyPaneRegistered = function () {
            var _a = _this.props, displayMode = _a.displayMode, store = _a.store, zone = _a.zone;
            var propertyPaneController = store.propertyPaneController;
            if (displayMode === _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_3__["DisplayMode"].Edit && propertyPaneController) {
                _this._registerPropertyPanePromise = _this._registerPropertyPanePromise
                    .then(_editChunk__WEBPACK_IMPORTED_MODULE_11__["canvasZonePropertyPaneControlLoader"])
                    .then(function (control) {
                    propertyPaneController.registerConsumer(_this._id, new control(zone, function () {
                        store.canvasFields.handleCanvasChanged();
                        store.canvasFields.render();
                    }, _this.props.layoutIndex));
                });
            }
        };
        _this._handleToolbarDidMount = function (toolbar) {
            _this._toolbarComponent = toolbar;
        };
        _this._handleKeydownCapture = function (evt) {
            var store = _this.props.store;
            _this._isTabPressed = false;
            // We avoid calling stopPropagation here because controlZone keydown won't get called if we did
            // and shortcut keys on webparts won't work
            if (_this._domElement) {
                if (_ms_sp_a11y__WEBPACK_IMPORTED_MODULE_6__["Keyboard"].isEscape(evt)) {
                    /**
                     * When Esc pressed in RTE in the CKTextEditor, we will need to check if the autocomplete plugin is in open state
                     * If the topic Picker is open, we don't need to bring the focus to CanvasZone i.e., let it stay in editor
                     * else , we will continue defocussing the editor and bring focus to CanvasZone
                     * The topic Picker whether active or not could be checked via the dynamic className added to the autocomplete plugin cke_autocomplete_opened
                     * Reference source code: open and close methods in https://github.com/ckeditor/ckeditor4/blob/eb2d11644a796cd13cd047cd55541430359f9317/plugins/autocomplete/plugin.js#L315-L316
                     */
                    if (!Object(_common_KillSwitches__WEBPACK_IMPORTED_MODULE_14__["isOverrideEscWhenTopicPickerOpenKSActivated"])()) {
                        var elements = document.body.getElementsByClassName('cke_autocomplete_opened');
                        // Topic Picker is in closed state, follow the existing behavior
                        if (!elements.length) {
                            _this.shiftFocusToCanvasZone(evt);
                        }
                        else {
                            // Topic Picker is open, close it by removing the plugin opened class and stop further propogation so that focus is not lost due to A11yManager
                            evt.stopPropagation();
                            elements[0].classList.remove('cke_autocomplete_opened');
                        }
                    }
                    else {
                        _this.shiftFocusToCanvasZone(evt);
                    }
                    evt.preventDefault();
                }
                else if (_ms_sp_a11y__WEBPACK_IMPORTED_MODULE_6__["Keyboard"].isKey(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_2__["KeyCodes"].f10, evt, { alt: true }) &&
                    _this._toolbarComponent &&
                    _this._toolbarComponent.toolBarElement && // When Alt+F10 is pressed in RTE or any other else, this condition should not become true
                    // We need to revisit the event capture logic. Work item here:
                    // https://onedrive.visualstudio.com/WEX!/_workitems/edit/874756
                    _this._isCanvasZoneActive) {
                    store.a11yManager.focusTo(_this._toolbarComponent.toolBarElement);
                    store.a11yManager.alert(_loc_CanvasStrings_resx__WEBPACK_IMPORTED_MODULE_16__["ToolbarNavigationArrowKeys"]);
                    evt.preventDefault();
                }
                else if (_ms_sp_a11y__WEBPACK_IMPORTED_MODULE_6__["Keyboard"].isKey(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_2__["KeyCodes"].p, evt, { alt: true }) && _this._isCanvasZoneActive) {
                    _this._onToolbarEditClick();
                    evt.preventDefault();
                }
                else if (_ms_sp_a11y__WEBPACK_IMPORTED_MODULE_6__["Keyboard"].isTab(evt) || _ms_sp_a11y__WEBPACK_IMPORTED_MODULE_6__["Keyboard"].isShiftTab(evt)) {
                    _this._isTabPressed = true;
                }
                else if (_ms_sp_a11y__WEBPACK_IMPORTED_MODULE_6__["Keyboard"].isEnter(evt) && evt.target === _this._domElement) {
                    _this._clearAccessibleLabel();
                }
            }
        };
        _this._handleZoneFocus = function (evt) {
            var _a = _this.props, displayMode = _a.displayMode, store = _a.store;
            if (displayMode === _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_3__["DisplayMode"].Edit &&
                document.activeElement &&
                (document.activeElement === _this._domElement ||
                    document.activeElement.parentElement === _this._domElement)) {
                store.a11yManager.alert(_this._zoneLabel);
                _this._selectZone();
            }
            _this._updateHorizontalOffset();
        };
        _this._handleZoneBlur = function (evt) {
            var store = _this.props.store;
            // If the tab is pressed and user has navigated away from the zone, unselect it
            var relatedTarget = evt.relatedTarget;
            var target = evt.target;
            if (_this._isTabPressed && !_this._isChildElement(relatedTarget)) {
                store.selectedZoneIndex = -1;
            }
            _this._isTabPressed = false;
            if (_this._toolbarComponent &&
                _this._toolbarComponent.toolBarElement &&
                _this._toolbarComponent.toolBarElement.contains(relatedTarget) &&
                !_this._toolbarComponent.toolBarElement.contains(target) // Do Not alert if focusing moving within toolbar
            ) {
                store.a11yManager.alert(_loc_CanvasStrings_resx__WEBPACK_IMPORTED_MODULE_16__["ToolbarNavigationArrowKeys"]);
            }
        };
        _this._onToolbarEditClick = function () {
            var _a = _this.props, store = _a.store, zone = _a.zone;
            if (zone && zone.index !== undefined) {
                _ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_5__["SPFREUtility"].dismissFRECallout('sp-fre-canvas-2');
                store.getEditModule('actions').handleConfigureZoneButtonClicked(_this._id, _this.focus);
                _this._selectZone();
            }
        };
        /* tslint:disable-next-line:no-any */
        _this._handleClickCapture = function (e) {
            if (e.target !== _this._domElement &&
                e.target.getAttribute('data-negative-space') !== 'true') {
                return;
            }
            if (_this.props.zone && _this.props.zone.index !== undefined) {
                _this._selectZone();
            }
        };
        _this._handlePaste = function (e) {
            // e.currentTarget is the selected element when paste happens
            // 'data-negative-space' indicates the negative space in Canvas zone area
            // Make sure it is not pasted in RTE, we check contenteditable for that
            if ((e.currentTarget !== _this._domElement &&
                e.currentTarget.getAttribute('data-negative-space') !== 'true') ||
                Object(_common_KillSwitches__WEBPACK_IMPORTED_MODULE_14__["isFixImageDropInRTE"])() ||
                e.target.isContentEditable) {
                return;
            }
            _this.props.store
                .getEditModule('actions')
                .handleImagePasteInCanvas(e.clipboardData, _this._getNewPosition());
        };
        _this._clearAccessibleLabel = function () {
            // Clear the accessible text
            _this._async.setTimeout(function () {
                _this.setState({
                    accessibleLabel: ''
                });
            }, 100);
        };
        _this.state = {
            accessibleLabel: '',
            emphasisTheme: _this.props.theme,
            isToolbarFixed: false,
            horizontalOffset: _this._horizontalOffset,
            isSelected: false,
            isControlSelectedWithin: false
        };
        _this._id = props.zone.id;
        _this._isTabPressed = false;
        return _this;
    }
    CanvasZone.getDerivedStateFromProps = function (nextProps, nextState) {
        var zone = nextProps.zone, selectedPosition = nextProps.selectedPosition;
        var isToolboxOpen = !!nextProps.store.canvasFields.toolboxOpenPosition;
        var isSelected = zone &&
            zone.index === selectedPosition.zoneIndex &&
            zone.layoutIndex === selectedPosition.layoutIndex &&
            selectedPosition.controlIndex === undefined;
        var isControlSelectedWithin = zone &&
            zone.index === selectedPosition.zoneIndex &&
            zone.layoutIndex === selectedPosition.layoutIndex &&
            selectedPosition.controlIndex !== undefined;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, nextState), { isSelected: nextProps.displayMode === _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_3__["DisplayMode"].Edit && isSelected, isControlSelectedWithin: nextProps.displayMode === _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_3__["DisplayMode"].Edit &&
                (isControlSelectedWithin || (isControlSelectedWithin && isToolboxOpen)) });
    };
    CanvasZone.prototype.componentDidMount = function () {
        var emphasis = this.props.emphasis;
        this._ensurePropertyPaneRegistered();
        if (this._domElement) {
            this._domElement.addEventListener('keydown', this._handleKeydownCapture, true);
            this._domElement.addEventListener('focus', this._handleZoneFocus, true);
            this._domElement.addEventListener('blur', this._handleZoneBlur, true);
            if (this.state.isSelected && document.activeElement && !this._isChildElement(document.activeElement)) {
                this.focus();
                if (this.state.isSelected) {
                    this._refreshPropertyPane();
                }
            }
        }
        if (emphasis) {
            // Todo#661360 Fix workaround left-over
            this._updateEmphasisTheme(this.props.theme, emphasis);
        }
    };
    CanvasZone.prototype.componentDidUpdate = function (prevProps, prevState) {
        var _a = this.props, emphasis = _a.emphasis, layoutType = _a.layoutType, theme = _a.theme;
        if (prevProps.emphasis !== emphasis || !Object(_microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_7__["isEqual"])(prevProps.theme, theme)) {
            // The emphasis on zone needs to be updated if:
            // 1. The user has changed the emphasis on the zone
            // 2. If the theme passed in by @customizable is updated.
            this._updateEmphasisTheme(theme, emphasis); // Todo#661360 Fix workaround left-over
        }
        else if (!Object(_microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_7__["isEqual"])(prevProps.theme, theme)) {
            // We need to do this when there is no emphasis but theme changed from default
            // to the actual one set by user. If we don't do this, default theme gets picked up
            this.setState({
                emphasisTheme: theme
            });
        }
        this._updateHorizontalOffset();
        // It's not sufficient to only check registration in `componentDidMount`
        // Property pane is not loaded in read mode, we need to register it when property pane
        // is loaded after display mode is switched to edit.
        // CanvasZonePart can be re-constructed even it's the same CanvasZone component.
        if (prevProps.zone !== this.props.zone ||
            (prevProps.displayMode === _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_3__["DisplayMode"].Read && this.props.displayMode === _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_3__["DisplayMode"].Edit)) {
            this._ensurePropertyPaneRegistered();
        }
        var selectedStateChange = !prevState.isSelected && this.state.isSelected;
        if (prevProps.emphasis !== emphasis || prevProps.layoutType !== layoutType || selectedStateChange) {
            // Update property pane if any of the zone property pane fields is changed.
            this._refreshPropertyPane();
        }
    };
    CanvasZone.prototype.componentWillUnmount = function () {
        var _this = this;
        if (this._domElement) {
            this._domElement.removeEventListener('keydown', this._handleKeydownCapture, true);
            this._domElement.removeEventListener('focus', this._handleZoneFocus, true);
            this._domElement.removeEventListener('blur', this._handleZoneBlur, true);
        }
        var propertyPaneController = this.props.store.propertyPaneController;
        if (propertyPaneController) {
            // Clear the property pane if it's opened for the current zone.
            void this._registerPropertyPanePromise.then(function () { return propertyPaneController.onConsumerDelete(_this._id); });
        }
    };
    CanvasZone.prototype.render = function () {
        var displayMode = this.props.displayMode;
        var emphasisTheme = this.state.emphasisTheme;
        var classNames;
        classNames = _ms_sp_canvas_read__WEBPACK_IMPORTED_MODULE_8__["CanvasEmphasisStyles"].getClassNames({
            root: 'CanvasZoneContainerEmphasis',
            theme: emphasisTheme // Todo#661360 Fix workaround left-over
        });
        var isReadMode = displayMode === _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_3__["DisplayMode"].Read;
        var tempString = '';
        var containerSelected = this.state.isSelected || this.state.isControlSelectedWithin;
        var layoutZoneContainerClassName = Object(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_2__["css"])('CanvasZoneContainer', 'CanvasZoneContainer--hintUpdate', classNames ? classNames.root : undefined, {
            'CanvasZoneContainer--read': isReadMode,
            // Extra class for flighted control
            'CanvasZoneContainer--selected': containerSelected,
            'CanvasZoneContainer--controlselected': this.state.isControlSelectedWithin
        });
        tempString = layoutZoneContainerClassName;
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: tempString, onClickCapture: !isReadMode ? this._handleClickCapture : undefined, onPaste: !isReadMode ? this._handlePaste : undefined, ref: this._domElementRef, "data-negative-space": true, "data-drag-tag": _editChunk__WEBPACK_IMPORTED_MODULE_11__["CanvasDragZoneConstants"].zoneDragTag, "data-drag-hidden-extra-elements": 'false' }, this._zoneContents));
    };
    Object.defineProperty(CanvasZone.prototype, "_sectionComponents", {
        get: function () {
            var _this = this;
            // Iterate through the sections and create section layout components
            var store = this.props.store;
            var _a = this.props, fullWidth = _a.fullWidth, layoutIndex = _a.layoutIndex, selectedPosition = _a.selectedPosition, theme = _a.theme, zone = _a.zone;
            var emphasisTheme = this.state.emphasisTheme;
            // Iterate through the sections and create section layout components
            var sectionComponents = [];
            var sections = zone ? zone.sections : [];
            sections.forEach(function (curSection, curIdx) {
                var sectionComponentProps = {
                    emphasisTheme: emphasisTheme,
                    layoutIndex: layoutIndex,
                    section: curSection,
                    selectedPosition: selectedPosition,
                    theme: theme,
                    zoneIndex: zone.index,
                    store: store,
                    shouldResize: _this.props.shouldResize
                };
                if (fullWidth) {
                    sectionComponents.push(react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_canvasSection__WEBPACK_IMPORTED_MODULE_10__["CanvasFullWidthSection"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, sectionComponentProps, { key: curSection.index })));
                }
                else {
                    sectionComponents.push(react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_canvasSection__WEBPACK_IMPORTED_MODULE_10__["CanvasSection"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, sectionComponentProps, { key: curSection.index })));
                }
            });
            return sectionComponents;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CanvasZone.prototype, "_zoneContents", {
        get: function () {
            var _a = this.props, displayMode = _a.displayMode, store = _a.store;
            var _b = this.props, fullWidth = _b.fullWidth, layoutIndex = _b.layoutIndex, shouldCenterAlign = _b.shouldCenterAlign, zone = _b.zone;
            var emphasisTheme = this.state.emphasisTheme;
            var classNames;
            classNames = _ms_sp_canvas_read__WEBPACK_IMPORTED_MODULE_8__["CanvasEmphasisStyles"].getClassNames({
                root: 'CanvasZoneContainerEmphasis',
                theme: emphasisTheme // Todo#661360 Fix workaround left-over
            });
            var isReadMode = displayMode === _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_3__["DisplayMode"].Read;
            var layoutZoneClassName = Object(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_2__["css"])('CanvasZone', 'row', 'CanvasZone--alignment', 'CanvasZone--noMargin', {
                'CanvasZone--edit': !isReadMode,
                'CanvasZone--fullWidth': !!fullWidth,
                'CanvasZone--fullWidth--read': !!fullWidth && isReadMode,
                'CanvasZone--read': isReadMode,
                'CanvasZone--selected': this.state.isSelected,
                'CanvasZone--controlSelected': this.state.isControlSelectedWithin,
                'CanvasZone--empty': zone.isEmpty(),
                'CanvasZone--centerAlign': !!shouldCenterAlign,
                'CanvasZone--reflow': !!this.props.shouldResize
            });
            var shouldAlignToolbar = this.props.layoutIndex === _canvasLayout__WEBPACK_IMPORTED_MODULE_9__["CanvasLayout"].firstLayoutIndex && store.canvasFields.isVerticalSectionPresent;
            if (shouldAlignToolbar) {
                classNames = _common_CanvasAlignmentStyles_styles__WEBPACK_IMPORTED_MODULE_13__["CanvasAlignmentStyles"].getToolbarClassNames({
                    root: 'CanvasZoneToolbar',
                    offset: -this.state.horizontalOffset // Todo#661360 Fix workaround left-over
                });
            }
            var zonePosition = {
                zoneIndex: zone.index,
                sectionIndex: undefined,
                controlIndex: undefined,
                layoutIndex: layoutIndex
            };
            var zoneId = zone.index.toString();
            var isVerticalSection = zone.layoutIndex === _canvasLayout__WEBPACK_IMPORTED_MODULE_9__["CanvasLayout"].verticalLayoutIndex;
            var zoneContents = (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: layoutZoneClassName, "data-automation-id": 'CanvasZone', "data-negative-space": true, "data-element-key": zone.elementKey, tabIndex: isReadMode ? undefined : 0, "data-sp-a11y-id": Object(_a11y_CanvasA11yConstants__WEBPACK_IMPORTED_MODULE_12__["getCanvasZoneA11yId"])(zone.index.toString()), ref: this._focusableElementRef },
                this._diffIndicator,
                this._sectionComponents,
                !isReadMode && this._selectableDiv,
                !isReadMode && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_editChunk__WEBPACK_IMPORTED_MODULE_11__["DeferredToolbar"], { directionalHint: !Object(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_2__["getRTL"])() ? _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_2__["DirectionalHint"].rightCenter : _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_2__["DirectionalHint"].leftCenter, rootClassName: Object(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_2__["css"])(shouldAlignToolbar && classNames ? classNames.root : undefined, 'CanvasZoneToolbar', {
                        'CanvasZoneToolbar-root': !isVerticalSection
                    }), toolbarClassName: Object(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_2__["css"])({
                        FixedToolbar: !!this.state.isToolbarFixed,
                        'CanvasZoneToolbar-sticky': !isVerticalSection
                    }), configurationButton: {
                        onClick: this._onToolbarEditClick,
                        title: _CanvasZone_resx__WEBPACK_IMPORTED_MODULE_15__["ZoneToolbarConfigButtonTitle"],
                        fabricIconKey: this._configurationButtonFabricIconKey
                    }, deleteButton: {
                        onClick: function () { return store.getEditModule('actions').handleDeleteZoneButtonClicked(zonePosition); },
                        title: _CanvasZone_resx__WEBPACK_IMPORTED_MODULE_15__["ZoneToolbarDeleteButtonTitle"]
                    }, duplicateButton: isVerticalSection
                        ? undefined
                        : {
                            onClick: function () { return store.getEditModule('actions').handleDuplicateZoneButtonClicked(zoneId); },
                            title: _loc_CanvasStrings_resx__WEBPACK_IMPORTED_MODULE_16__["ToolbarDuplicateSectionTitle"]
                        }, moveButton: isVerticalSection
                        ? undefined
                        : {
                            title: _CanvasZone_resx__WEBPACK_IMPORTED_MODULE_15__["ZoneToolbarMoveButtonTitle"],
                            dragHandleTag: _editChunk__WEBPACK_IMPORTED_MODULE_11__["CanvasDragZoneConstants"].zoneDragHandleTag
                        }, fixedPosition: this.state.fixedPosition, toolbarDidMount: this._handleToolbarDidMount })),
                !isReadMode && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, this.state.isSelected && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { "data-sp-fre-id": 'sp-fre-canvas-2', "data-offset-left": '-28px', "data-offset-top": '-8px' }))))));
            return zoneContents;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CanvasZone.prototype, "_diffIndicator", {
        get: function () {
            var _a = this.props, fullWidth = _a.fullWidth, layoutIndex = _a.layoutIndex, store = _a.store, theme = _a.theme, zone = _a.zone;
            var _b = store.canvasFields, controlDiffMap = _b.controlDiffMap, zoneDiffMap = _b.zoneDiffMap;
            var zonePositionString = Object(_canvasLayout__WEBPACK_IMPORTED_MODULE_9__["getZonePositionUniqString"])({
                layoutIndex: layoutIndex,
                zoneIndex: zone.index
            });
            var zoneDiff = zoneDiffMap ? zoneDiffMap.get(zonePositionString) : undefined;
            if (!zoneDiff) {
                return false;
            }
            if (fullWidth) {
                var controlsInZone = zone.fetchAllControls();
                if (controlsInZone.length) {
                    var firstControlDiff = controlDiffMap
                        ? controlDiffMap.get(controlsInZone[0].id)
                        : undefined;
                    if (firstControlDiff && firstControlDiff.type !== 'Identical') {
                        // If it's full bleed web part, and there is a change on the CanvasZone as well, we should not
                        // render the diff indicator separately as the borders of web part and canvas zone are same.
                        // In this case, we will merge the changes that will be displayed and render indicator
                        // inside ControlZone (not here).
                        return false;
                    }
                }
            }
            return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_editChunk__WEBPACK_IMPORTED_MODULE_11__["DeferredDiffIndicator"], { theme: theme, primaryDiff: zoneDiff });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CanvasZone.prototype, "_selectableDiv", {
        get: function () {
            /* tslint:disable-next-line:react-a11y-event-has-role */
            return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: 'CanvasZoneSelectable', onClick: this._handleSelectZone });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CanvasZone.prototype, "_domElement", {
        get: function () {
            return this._domElementRef.current;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CanvasZone.prototype, "_horizontalOffset", {
        get: function () {
            var store = this.props.store;
            if (store) {
                var mainCanvasElement = store.mainCanvasElement;
                var parentElement = mainCanvasElement && mainCanvasElement.firstElementChild;
                if (parentElement) {
                    if (Object(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_2__["getRTL"])() && parentElement.offsetParent && parentElement.offsetParent.clientWidth) {
                        return (parentElement.offsetParent.clientWidth - parentElement.offsetWidth - parentElement.offsetLeft);
                    }
                    else {
                        return parentElement.offsetLeft;
                    }
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    CanvasZone.prototype.shiftFocusToCanvasZone = function (evt) {
        var store = this.props.store;
        store.a11yManager.focusTo(this._domElement);
    };
    CanvasZone.prototype._updateHorizontalOffset = function () {
        if (this.state.horizontalOffset !== this._horizontalOffset) {
            this.setState({
                horizontalOffset: this._horizontalOffset
            });
        }
    };
    CanvasZone.prototype._updateEmphasisTheme = function (theme, emphasis) {
        // Using 'void' to indicate that we are not interested in the returned value.
        this.setState({
            emphasisTheme: Object(_ms_sp_canvas_read__WEBPACK_IMPORTED_MODULE_8__["getVariantThemeForEmphasis"])(emphasis, theme)
        });
    };
    Object.defineProperty(CanvasZone.prototype, "_isCanvasZoneActive", {
        get: function () {
            return Boolean(document.activeElement &&
                document.activeElement.parentElement &&
                this._domElement &&
                (document.activeElement === this._domElement ||
                    document.activeElement.parentElement === this._domElement));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CanvasZone.prototype, "_zoneLabel", {
        get: function () {
            return _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_4__["StringHelper"].format(_loc_CanvasStrings_resx__WEBPACK_IMPORTED_MODULE_16__["AriaWebPartOrSectionEnterTemplate"] || '', this._getSectionContextualAriaLabel(), _loc_CanvasStrings_resx__WEBPACK_IMPORTED_MODULE_16__["SectionAriaLabel"]);
        },
        enumerable: true,
        configurable: true
    });
    CanvasZone.prototype._getSectionContextualAriaLabel = function () {
        var zone = this.props.zone;
        var sections = zone.sections;
        var contextualLabel = '';
        sections.forEach(function (curSection) {
            var controls = curSection.controls;
            controls.forEach(function (control) {
                var webPartName = '';
                if (control.controlType === _ms_sp_canvas_read__WEBPACK_IMPORTED_MODULE_8__["CanvasControlType"].RTE) {
                    webPartName = _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_4__["StringHelper"].format(_loc_CanvasStrings_resx__WEBPACK_IMPORTED_MODULE_16__["CanvasZoneAriaWebpartName"], _loc_CanvasStrings_resx__WEBPACK_IMPORTED_MODULE_16__["TextWebPartDisplayName"]);
                }
                else {
                    webPartName = _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_4__["StringHelper"].format(_loc_CanvasStrings_resx__WEBPACK_IMPORTED_MODULE_16__["CanvasZoneAriaWebpartName"], control.webPartData.title);
                }
                if (contextualLabel === '') {
                    contextualLabel = webPartName;
                }
                else {
                    contextualLabel = _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_4__["StringHelper"].format(_loc_CanvasStrings_resx__WEBPACK_IMPORTED_MODULE_16__["WebPartsInSectionLabel"], contextualLabel, webPartName);
                }
            });
        });
        if (zone.isEmpty()) {
            contextualLabel = _loc_CanvasStrings_resx__WEBPACK_IMPORTED_MODULE_16__["EmptySectionAriaLabel"];
        }
        return _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_4__["StringHelper"].format(_loc_CanvasStrings_resx__WEBPACK_IMPORTED_MODULE_16__["SectionContextualAriaLabel"], this.props.zoneLabel, this._getAccessibleSectionLabel(this.props.zone.layoutType), contextualLabel);
    };
    CanvasZone.prototype._getNewPosition = function () {
        var _a = this.props, layoutIndex = _a.layoutIndex, store = _a.store, zone = _a.zone;
        var section = zone.sections[0];
        var position = {
            controlIndex: undefined,
            sectionIndex: section.index,
            sectionFactor: section.factor,
            zoneIndex: zone.index,
            layoutIndex: layoutIndex
        };
        return store
            .getEditModule('actions')
            .getControlPositionAfterImagePaste(section.fetchAllControls(), position, true);
    };
    CanvasZone.prototype._selectZone = function () {
        var store = this.props.store;
        // We need to set the selected layout index before since the property pane
        // action is dependent on both selected layout index and selected zone index.
        store.selectedLayoutIndex = this.props.layoutIndex;
        // We need to re-render to update the selected control position
        store.canvasFields.render();
        store.selectedZoneIndex = this.props.zone.index;
    };
    CanvasZone.prototype._isChildElement = function (elem) {
        return this._domElement && this._domElement.contains(elem);
    };
    CanvasZone.prototype._getAccessibleSectionLabel = function (layoutType) {
        switch (layoutType) {
            case _ms_sp_canvas_read__WEBPACK_IMPORTED_MODULE_8__["CanvasControlType"].OneColumn:
                return _loc_CanvasStrings_resx__WEBPACK_IMPORTED_MODULE_16__["ToolboxOneColumnPart"];
            case _ms_sp_canvas_read__WEBPACK_IMPORTED_MODULE_8__["CanvasControlType"].TwoColumns:
                return _loc_CanvasStrings_resx__WEBPACK_IMPORTED_MODULE_16__["ToolboxTwoColumnPart"];
            case _ms_sp_canvas_read__WEBPACK_IMPORTED_MODULE_8__["CanvasControlType"].ThreeColumns:
                return _loc_CanvasStrings_resx__WEBPACK_IMPORTED_MODULE_16__["ToolboxThreeColumnPart"];
            case _ms_sp_canvas_read__WEBPACK_IMPORTED_MODULE_8__["CanvasControlType"].OneThirdColumnRight:
                return _loc_CanvasStrings_resx__WEBPACK_IMPORTED_MODULE_16__["ToolboxOneThirdRightColumnPart"];
            case _ms_sp_canvas_read__WEBPACK_IMPORTED_MODULE_8__["CanvasControlType"].OneThirdColumnLeft:
                return _loc_CanvasStrings_resx__WEBPACK_IMPORTED_MODULE_16__["ToolboxOneThirdLeftColumnPart"];
            case _ms_sp_canvas_read__WEBPACK_IMPORTED_MODULE_8__["CanvasControlType"].FullWidth:
                return _loc_CanvasStrings_resx__WEBPACK_IMPORTED_MODULE_16__["ToolboxFullWidthColumnPart"];
            default:
                return '';
        }
    };
    Object.defineProperty(CanvasZone.prototype, "_configurationButtonFabricIconKey", {
        get: function () {
            var _a = this.props.zone, layoutType = _a.layoutType, layoutIndex = _a.layoutIndex;
            var fabricIconKey = '';
            switch (layoutType) {
                case _ms_sp_canvas_read__WEBPACK_IMPORTED_MODULE_8__["CanvasControlType"].FullWidth:
                    fabricIconKey = 'FullWidth';
                    break;
                case _ms_sp_canvas_read__WEBPACK_IMPORTED_MODULE_8__["CanvasControlType"].OneColumn:
                    fabricIconKey = 'SingleColumn';
                    break;
                case _ms_sp_canvas_read__WEBPACK_IMPORTED_MODULE_8__["CanvasControlType"].OneThirdColumnLeft:
                    fabricIconKey = Object(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_2__["getRTL"])() ? 'ColumnLeftTwoThirds' : 'ColumnRightTwoThirds';
                    break;
                case _ms_sp_canvas_read__WEBPACK_IMPORTED_MODULE_8__["CanvasControlType"].OneThirdColumnRight:
                    fabricIconKey = Object(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_2__["getRTL"])() ? 'ColumnRightTwoThirds' : 'ColumnLeftTwoThirds';
                    break;
                case _ms_sp_canvas_read__WEBPACK_IMPORTED_MODULE_8__["CanvasControlType"].ThreeColumns:
                    fabricIconKey = 'TripleColumn';
                    break;
                case _ms_sp_canvas_read__WEBPACK_IMPORTED_MODULE_8__["CanvasControlType"].TwoColumns:
                    fabricIconKey = 'DoubleColumn';
                    break;
            }
            if (layoutIndex === _canvasLayout__WEBPACK_IMPORTED_MODULE_9__["CanvasLayout"].verticalLayoutIndex) {
                fabricIconKey = 'ColumnVerticalSection';
            }
            return fabricIconKey;
        },
        enumerable: true,
        configurable: true
    });
    CanvasZone = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_2__["customizable"])('CanvasZone', ['theme'])
    ], CanvasZone);
    return CanvasZone;
}(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_2__["BaseComponent"]));



/***/ }),

/***/ "mwqp":
/*!**********************!*\
  !*** ./lib/index.js ***!
  \**********************/
/*! exports provided: Canvas, deferredGetDomDiffStrings, DeferredDiffIndicator, DeferredDiffMessage, WIKI_TITLE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sp_canvas_canvas_canvas_Canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sp-canvas/canvas/canvas/Canvas */ "7Sy0");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Canvas", function() { return _sp_canvas_canvas_canvas_Canvas__WEBPACK_IMPORTED_MODULE_0__["Canvas"]; });

/* harmony import */ var _sp_canvas_canvas_editChunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sp-canvas/canvas/editChunk */ "9s5w");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deferredGetDomDiffStrings", function() { return _sp_canvas_canvas_editChunk__WEBPACK_IMPORTED_MODULE_1__["deferredGetDomDiffStrings"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DeferredDiffIndicator", function() { return _sp_canvas_canvas_editChunk__WEBPACK_IMPORTED_MODULE_1__["DeferredDiffIndicator"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DeferredDiffMessage", function() { return _sp_canvas_canvas_editChunk__WEBPACK_IMPORTED_MODULE_1__["DeferredDiffMessage"]; });

/* harmony import */ var _sp_canvas_common_Constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sp-canvas/common/Constants */ "+zV1");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WIKI_TITLE", function() { return _sp_canvas_common_Constants__WEBPACK_IMPORTED_MODULE_2__["WIKI_TITLE"]; });






/***/ }),

/***/ "n6/h":
/*!************************************************************!*\
  !*** ./lib/sp-canvas/canvas/canvasZone/EmptyCanvasZone.js ***!
  \************************************************************/
/*! exports provided: EmptyCanvasZone */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmptyCanvasZone", function() { return EmptyCanvasZone; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @microsoft/office-ui-fabric-react-bundle */ "KL1q");
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _canvasSection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../canvasSection */ "JqQl");
/* harmony import */ var _CanvasZone_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CanvasZone.scss */ "Kw1M");
/**
 * @file EmptyCanvasZone.tsx
 * @copyright (c) Microsoft Corporation. All rights reserved.
 *
 * A CanvasZone that only renders empty section to show web part ToolboxHint at bottom of the page in edit mode.
 */





var EmptyCanvasZone = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(EmptyCanvasZone, _super);
    function EmptyCanvasZone() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EmptyCanvasZone.prototype.render = function () {
        var layoutZoneClassName = Object(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_2__["css"])('CanvasZone', 'row', 'CanvasZone--noMargin', 'CanvasZone--edit', {
            'CanvasZone--centerAlign': this.props.shouldCenterAlign
        });
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: layoutZoneClassName, "data-automation-id": 'CanvasZone' },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_canvasSection__WEBPACK_IMPORTED_MODULE_3__["EmptyCanvasSection"], { hintLayout: this.props.hintLayout, store: this.props.store })));
    };
    return EmptyCanvasZone;
}(react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]));



/***/ }),

/***/ "nrsI":
/*!***************************************************************!*\
  !*** ./lib/sp-canvas/canvas/editChunk/sprte/DeferredSPRte.js ***!
  \***************************************************************/
/*! exports provided: DeferredSPRte */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeferredSPRte", function() { return DeferredSPRte; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


// tslint:disable
var DeferredSPRteComponent = react__WEBPACK_IMPORTED_MODULE_1__["lazy"](function () {
    return __webpack_require__.e(/*! import() | sp-canvas-edit */ "sp-canvas-edit").then(__webpack_require__.bind(null, /*! ./index-deferred */ "pL8B")).then(function (module) { return ({
        default: module.withDataControlled(module.SPRte)
    }); });
});
var DeferredSPRte = react__WEBPACK_IMPORTED_MODULE_1__["forwardRef"](function (props, ref) {
    return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Suspense"], { fallback: false },
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](DeferredSPRteComponent, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ ref: ref }, props))));
});


/***/ }),

/***/ "o0cL":
/*!*************************************************************************!*\
  !*** ./lib/sp-canvas/canvas/editChunk/canvasDiff/DeferredCanvasDiff.js ***!
  \*************************************************************************/
/*! exports provided: canvasDiffLoader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "canvasDiffLoader", function() { return canvasDiffLoader; });
function canvasDiffLoader() {
    return Promise.all(/*! import() | sp-canvas-diff */[__webpack_require__.e("vendors~sp-canvas-diff"), __webpack_require__.e("sp-canvas-diff")]).then(__webpack_require__.bind(null, /*! ./index-deferred */ "sO6Y"));
}


/***/ }),

/***/ "ox2b":
/*!**********************************************************************!*\
  !*** ./lib/sp-canvas/canvas/canvasComponent/CanvasComponent.scss.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* tslint:disable */
__webpack_require__(/*! ./CanvasComponent.css */ "rl1+");
var styles = {};
/* harmony default export */ __webpack_exports__["default"] = (styles);
/* tslint:enable */ 


/***/ }),

/***/ "qRiB":
/*!*****************************************!*\
  !*** ./lib/sp-canvas/common/Flights.js ***!
  \*****************************************/
/*! exports provided: Flights */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Flights", function() { return Flights; });
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__);

var Flights = /** @class */ (function () {
    function Flights() {
    }
    Flights.isCanvasReadOnlyEnabled = function () {
        return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPFlight"].isEnabled(1420 /* WEXCanvasReadOnly */);
    };
    Flights.isFRESequenceEnabled = function () {
        return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPFlight"].isEnabled(1787 /* FRESequence */);
    };
    Flights.isMEEDashboardEnabled = function () {
        return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPFlight"].isEnabled(638 /* MEEDashboard */);
    };
    Flights.isInlineImageEnabled = function () {
        return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPFlight"].isEnabled(60045 /* InlineImageInRTE */);
    };
    Flights.isSmallerVerticalSectionsBreakpoint = function () {
        return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPFlight"].isEnabled(1371 /* WEXVerticalSectionsSmallerBreakpoint */);
    };
    return Flights;
}());



/***/ }),

/***/ "qjmy":
/*!********************************************!*\
  !*** external "@ms/sp-deferred-component" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_qjmy__;

/***/ }),

/***/ "rl1+":
/*!******************************************************************!*\
  !*** ./lib/sp-canvas/canvas/canvasComponent/CanvasComponent.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../../../../common/temp/node_modules/.pnpm/css-loader@3.2.1_webpack@4.44.2/node_modules/css-loader/dist/cjs.js!../../../../../../common/temp/node_modules/.pnpm/postcss-loader@3.0.0/node_modules/postcss-loader/src??postcss!./CanvasComponent.css */ "lCy/");
var loader = __webpack_require__(/*! @microsoft/load-themed-styles */ "jOlS");

if(typeof content === "string") content = [[module.i, content]];

// add the styles to the DOM
for (var i = 0; i < content.length; i++) loader.loadStyles(content[i][1], true);

if(content.locals) module.exports = content.locals;

/***/ }),

/***/ "s+EI":
/*!*************************************************************!*\
  !*** ./lib/sp-canvas/canvas/canvasZone/CanvasZone.types.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "sSDQ":
/*!*************************************!*\
  !*** external "@ms/sp-canvas-read" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_sSDQ__;

/***/ }),

/***/ "t874":
/*!*****************************************************************************!*\
  !*** ./lib/sp-canvas/canvas/CanvasVerticalSection/CanvasVerticalSection.js ***!
  \*****************************************************************************/
/*! exports provided: CanvasVerticalSection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanvasVerticalSection", function() { return CanvasVerticalSection; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/office-ui-fabric-react-bundle */ "KL1q");
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _canvasZone__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../canvasZone */ "yf/r");
/* harmony import */ var _loc_CanvasStrings_resx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../loc/CanvasStrings.resx */ "indE");
var _loc_CanvasStrings_resx__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../loc/CanvasStrings.resx */ "indE", 1);
/* harmony import */ var _CanvasVerticalSection_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./CanvasVerticalSection.scss */ "VyBU");






function CanvasVerticalSection(props) {
    var layoutIndex = props.layoutIndex, store = props.store;
    var canvasLayout = store.canvasLayouts.get(props.layoutIndex);
    var canvasVerticalSectionZones = canvasLayout ? canvasLayout.zones : [];
    var zone = canvasVerticalSectionZones
        ? canvasVerticalSectionZones[0]
        : undefined;
    var verticalSectionClassName = Object(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_1__["css"])('CanvasVerticalSection', {
        isEdit: store.displayMode === _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__["DisplayMode"].Edit
    });
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: verticalSectionClassName }, zone && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_canvasZone__WEBPACK_IMPORTED_MODULE_3__["CanvasZone"], { fullWidth: false, selectedPosition: store.canvasLayout.fetchCurrentSelection(), key: zone.id, layoutType: zone.layoutType, zone: zone, shouldCenterAlign: store.shouldCenterAlign, zoneLabel: _loc_CanvasStrings_resx__WEBPACK_IMPORTED_MODULE_4__["CanvasVerticalSectionZoneLabel"], layoutIndex: layoutIndex, emphasis: canvasVerticalSectionZones[0].emphasis, store: store, displayMode: store.displayMode }))));
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

/***/ "v3Ow":
/*!******************************************************************!*\
  !*** ./lib/sp-canvas/canvas/canvasSection/CanvasSection.scss.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* tslint:disable */
__webpack_require__(/*! ./CanvasSection.css */ "CRn6");
var styles = {};
/* harmony default export */ __webpack_exports__["default"] = (styles);
/* tslint:enable */ 


/***/ }),

/***/ "wB5c":
/*!*********************************************************!*\
  !*** ./lib/sp-canvas/canvas/canvasWebPartHost/index.js ***!
  \*********************************************************/
/*! exports provided: CanvasWebPartHost */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CanvasWebPartHost__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CanvasWebPartHost */ "V9Um");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CanvasWebPartHost", function() { return _CanvasWebPartHost__WEBPACK_IMPORTED_MODULE_0__["CanvasWebPartHost"]; });




/***/ }),

/***/ "y88i":
/*!********************************************!*\
  !*** external "@ms/odsp-utilities-bundle" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_y88i__;

/***/ }),

/***/ "yPt8":
/*!****************************************************!*\
  !*** ./lib/sp-canvas/canvas/canvasLayout/index.js ***!
  \****************************************************/
/*! exports provided: CanvasLayout, CanvasZonePart, CanvasSectionPart, getZonePositionUniqString, undefinedControlPosition */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CanvasLayout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CanvasLayout */ "aNx7");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CanvasLayout", function() { return _CanvasLayout__WEBPACK_IMPORTED_MODULE_0__["CanvasLayout"]; });

/* harmony import */ var _CanvasZonePart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CanvasZonePart */ "zkMK");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CanvasZonePart", function() { return _CanvasZonePart__WEBPACK_IMPORTED_MODULE_1__["CanvasZonePart"]; });

/* harmony import */ var _CanvasSectionPart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CanvasSectionPart */ "Lyn5");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CanvasSectionPart", function() { return _CanvasSectionPart__WEBPACK_IMPORTED_MODULE_2__["CanvasSectionPart"]; });

/* harmony import */ var _getZonePositionUniqString__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getZonePositionUniqString */ "khFG");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getZonePositionUniqString", function() { return _getZonePositionUniqString__WEBPACK_IMPORTED_MODULE_3__["getZonePositionUniqString"]; });

/* harmony import */ var _undefinedControlPosition__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./undefinedControlPosition */ "4Mut");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "undefinedControlPosition", function() { return _undefinedControlPosition__WEBPACK_IMPORTED_MODULE_4__["undefinedControlPosition"]; });








/***/ }),

/***/ "yRr9":
/*!***************************************************!*\
  !*** ./lib/sp-canvas/canvas/canvasStore/index.js ***!
  \***************************************************/
/*! exports provided: CanvasFields, CanvasStore, CanvasStoreCommonActions, EUPL_APPROVED_WEB_PARTS, EUPL_CANDIDATE_WEB_PARTS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CanvasFields__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CanvasFields */ "dYQ3");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CanvasFields", function() { return _CanvasFields__WEBPACK_IMPORTED_MODULE_0__["CanvasFields"]; });

/* harmony import */ var _CanvasStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CanvasStore */ "TOEr");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CanvasStore", function() { return _CanvasStore__WEBPACK_IMPORTED_MODULE_1__["CanvasStore"]; });

/* harmony import */ var _CanvasStoreCommonActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CanvasStoreCommonActions */ "zjII");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CanvasStoreCommonActions", function() { return _CanvasStoreCommonActions__WEBPACK_IMPORTED_MODULE_2__["CanvasStoreCommonActions"]; });

/* harmony import */ var _CanvasWebPartClassification__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CanvasWebPartClassification */ "IGxH");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EUPL_APPROVED_WEB_PARTS", function() { return _CanvasWebPartClassification__WEBPACK_IMPORTED_MODULE_3__["EUPL_APPROVED_WEB_PARTS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EUPL_CANDIDATE_WEB_PARTS", function() { return _CanvasWebPartClassification__WEBPACK_IMPORTED_MODULE_3__["EUPL_CANDIDATE_WEB_PARTS"]; });







/***/ }),

/***/ "yf/r":
/*!**************************************************!*\
  !*** ./lib/sp-canvas/canvas/canvasZone/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CanvasZone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CanvasZone */ "lJmH");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CanvasZone", function() { return _CanvasZone__WEBPACK_IMPORTED_MODULE_0__["CanvasZone"]; });

/* harmony import */ var _CanvasZone_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CanvasZone.types */ "s+EI");
/* harmony import */ var _CanvasZone_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_CanvasZone_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _CanvasZone_types__WEBPACK_IMPORTED_MODULE_1__) if(["default","CanvasZone"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _CanvasZone_types__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _EmptyCanvasZone__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EmptyCanvasZone */ "n6/h");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EmptyCanvasZone", function() { return _EmptyCanvasZone__WEBPACK_IMPORTED_MODULE_2__["EmptyCanvasZone"]; });






/***/ }),

/***/ "yld5":
/*!*************************************************!*\
  !*** ../sp-rte/lib/rte/baseRte/BaseRte.scss.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* tslint:disable */
__webpack_require__(/*! ./BaseRte.css */ "aKD8");
var styles = {};
/* harmony default export */ __webpack_exports__["default"] = (styles);
/* tslint:enable */ 


/***/ }),

/***/ "ytfe":
/*!******************************!*\
  !*** external "@ms/sp-a11y" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_ytfe__;

/***/ }),

/***/ "ywDL":
/*!*****************************************!*\
  !*** external "@ms/sp-viewport-loader" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_ywDL__;

/***/ }),

/***/ "zjII":
/*!**********************************************************************!*\
  !*** ./lib/sp-canvas/canvas/canvasStore/CanvasStoreCommonActions.js ***!
  \**********************************************************************/
/*! exports provided: CanvasStoreCommonActions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanvasStoreCommonActions", function() { return CanvasStoreCommonActions; });
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/sp-diagnostics */ "ut3N");
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ms_sp_canvas_read__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ms/sp-canvas-read */ "sSDQ");
/* harmony import */ var _ms_sp_canvas_read__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ms_sp_canvas_read__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _canvasLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../canvasLayout */ "yPt8");
/* harmony import */ var _CanvasWebPartClassification__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CanvasWebPartClassification */ "IGxH");
/* harmony import */ var _canvasSection__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../canvasSection */ "JqQl");






var CanvasStoreCommonActions = /** @class */ (function () {
    function CanvasStoreCommonActions() {
    }
    CanvasStoreCommonActions.isFullWidth = function (position) {
        return _canvasSection__WEBPACK_IMPORTED_MODULE_5__["CanvasFullWidthSection"].isFullWidth(position);
    };
    CanvasStoreCommonActions.addControlToCanvas = function (canvasFields, control, shouldRender, shouldPersistData, addedFromToolbox) {
        if (shouldRender === void 0) { shouldRender = false; }
        if (shouldPersistData === void 0) { shouldPersistData = shouldRender; }
        if (!control.id) {
            var instanceId = void 0;
            if (control.controlType === _ms_sp_canvas_read__WEBPACK_IMPORTED_MODULE_2__["CanvasControlType"].WebPartZone &&
                control.webPartData &&
                (instanceId = control.webPartData.instanceId)) {
                control.id = instanceId;
            }
            else {
                control.id = _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Guid"].newGuid().toString();
            }
        }
        if (control.controlType === _ms_sp_canvas_read__WEBPACK_IMPORTED_MODULE_2__["CanvasControlType"].WebPartZone) {
            canvasFields.webPartsCount++;
            var webPartData = control.webPartData;
            if (webPartData && _CanvasWebPartClassification__WEBPACK_IMPORTED_MODULE_4__["EUPL_APPROVED_WEB_PARTS"].has(webPartData.id)) {
                canvasFields.euplApprovedWebpartCount++;
            }
        }
        /**
         * Always use the manifest from the loader when initializing web parts from persisted data.
         * Web parts added from the Toolbox will always be initialized with the loader's manifest.
         */
        if (control.controlType === _ms_sp_canvas_read__WEBPACK_IMPORTED_MODULE_2__["CanvasControlType"].WebPartZone && control.addedFromPersistedData) {
            // tslint:disable-next-line:no-any
            var manifest = CanvasStoreCommonActions.getManifestMap(canvasFields).get(control.webPartId);
            if (manifest) {
                control.webPartManifest = manifest;
            }
            else {
                var missingManifest = new _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__["_QosMonitor"]("WebPartManifestMissing");
                missingManifest.writeUnexpectedFailure(control.webPartId);
            }
        }
        if (CanvasStoreCommonActions.isFullWidth(control.position) &&
            _canvasSection__WEBPACK_IMPORTED_MODULE_5__["CanvasFullWidthSection"].isFullWidthControl(control)) {
            if (canvasFields.siteSupportsFullWidth) {
                _canvasSection__WEBPACK_IMPORTED_MODULE_5__["CanvasFullWidthSection"].setFullWidthWebPartProperty(control, true);
            }
            else {
                // Change the full width column to one column if the site doesn't support it
                // Todo#661360 Fix workaround left-over
                var sectionFactor = _canvasLayout__WEBPACK_IMPORTED_MODULE_3__["CanvasZonePart"].columnDefinitionMap.get(_ms_sp_canvas_read__WEBPACK_IMPORTED_MODULE_2__["CanvasControlType"].OneColumn)
                    .factor[0];
                var newPosition = _canvasLayout__WEBPACK_IMPORTED_MODULE_3__["CanvasLayout"].cloneMerge(control.position, {
                    sectionFactor: sectionFactor
                });
                control.position = newPosition;
                _canvasSection__WEBPACK_IMPORTED_MODULE_5__["CanvasFullWidthSection"].setFullWidthWebPartProperty(control, false);
            }
        }
        var layoutIndex = control.position.layoutIndex;
        canvasFields.getLayout(layoutIndex).addControl(control, addedFromToolbox);
        if (shouldRender) {
            canvasFields.render();
        }
        if (shouldPersistData) {
            canvasFields.handleCanvasChanged();
        }
    };
    CanvasStoreCommonActions.createQosScope = function (scope) {
        return new _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__["_QosMonitor"]("Canvas" + scope);
    };
    CanvasStoreCommonActions.handleMonitoredException = function (qos, err, extraData // tslint:disable-line:no-any
    ) {
        qos.writeUnexpectedFailure('Exception', err, extraData);
    };
    /* tslint:disable:no-any */
    CanvasStoreCommonActions.getManifestMap = function (canvasFields) {
        var tempMap = new Map();
        var manifests = canvasFields.webPartManager.getWebPartManifests();
        /* tslint:enable:no-any */
        for (var _i = 0, manifests_1 = manifests; _i < manifests_1.length; _i++) {
            var manifest = manifests_1[_i];
            tempMap.set(manifest.id, manifest);
        }
        return tempMap;
    };
    return CanvasStoreCommonActions;
}());



/***/ }),

/***/ "zkMK":
/*!*************************************************************!*\
  !*** ./lib/sp-canvas/canvas/canvasLayout/CanvasZonePart.js ***!
  \*************************************************************/
/*! exports provided: CanvasZonePart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanvasZonePart", function() { return CanvasZonePart; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/sp-diagnostics */ "ut3N");
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ms_sp_canvas_read__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ms/sp-canvas-read */ "sSDQ");
/* harmony import */ var _ms_sp_canvas_read__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ms_sp_canvas_read__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _CanvasLayout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CanvasLayout */ "aNx7");
/* harmony import */ var _CanvasSectionPart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./CanvasSectionPart */ "Lyn5");
/* harmony import */ var _getPhantomRTEControl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./getPhantomRTEControl */ "bzM1");
/* harmony import */ var _common_CanvasExperiments__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../common/CanvasExperiments */ "CXHJ");
/* harmony import */ var _common_Flights__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../common/Flights */ "qRiB");
/**
 * @file CanvasZonePart.ts
 * @copyright (c) Microsoft Corporation. All rights reserved.
 */









/**
 * Represents a Canvas Zone Layout Part
 */
var CanvasZonePart = /** @class */ (function () {
    /**
     * Creates a new instance of a CanvasZonePart
     * @param zoneIdx represents the zone index
     */
    function CanvasZonePart(zoneIdx, emphasis, getControlComponentById, layoutIndex) {
        this._index = zoneIdx;
        this._emphasis = emphasis;
        this._sectionsMap = new Map();
        this._getControlComponentById = getControlComponentById;
        this._elementKey = _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__["Guid"].newGuid().toString();
        this._layoutIndex = layoutIndex;
    }
    Object.defineProperty(CanvasZonePart.prototype, "index", {
        /**
         * Gets the index associated with this zone
         */
        get: function () {
            return this._index;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CanvasZonePart.prototype, "layoutIndex", {
        get: function () {
            return this._layoutIndex;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CanvasZonePart.prototype, "id", {
        /**
         * Gets the unique id associated with this zone
         */
        get: function () {
            return this._layoutIndex + "_" + this._index;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CanvasZonePart.prototype, "elementKey", {
        /**
         * Key used by react to identify the DOM element that this zone part will be props to.
         * Each CanvasZone needs a unique key that is persisted between serialization operations so react
         * can keep track of reordering operations
         */
        get: function () {
            return this._elementKey;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CanvasZonePart.prototype, "sections", {
        /**
         * Gets the sections associated with the current zone
         * @returns all the sections in that zone
         */
        get: function () {
            var sections = [];
            this._sectionsMap.forEach(function (section) {
                sections.push(section);
            });
            return sections.sort(function (section1, section2) {
                return section1.index - section2.index;
            });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CanvasZonePart.prototype, "layoutType", {
        get: function () {
            if (!this._layoutType) {
                this._layoutType = this._getCurrentColumnSize();
            }
            return this._layoutType;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CanvasZonePart.prototype, "emphasis", {
        get: function () {
            return this._emphasis;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Adds a new control in the pertinent zone.
     * If section doesnt exist then create a new section
     * @param canvasControl represents the control to add
     * @returns id of the control that was added
     */
    CanvasZonePart.prototype.addControl = function (canvasControl, addedFromToolbox) {
        // If the control is undefined or isn't associated with a layout, return
        if (!_CanvasLayout__WEBPACK_IMPORTED_MODULE_4__["CanvasLayout"].isPositionValid(canvasControl.position)) {
            return undefined;
        }
        var curSectionIndex = canvasControl.position.sectionIndex;
        if (curSectionIndex === undefined) {
            // section isn't defined, cannot proceed
            return undefined;
        }
        var controlId;
        var sectionsToAdd = 1;
        var colDef = CanvasZonePart.columnDefinitionMap.get(canvasControl.controlType);
        if (colDef) {
            sectionsToAdd = colDef.sections;
        }
        if (canvasControl.emphasis === undefined || canvasControl.emphasis.zoneEmphasis !== this._emphasis) {
            // Update control's emphasis if it's not aligned with the zone emphasis.
            canvasControl.emphasis = canvasControl.emphasis || {};
            canvasControl.emphasis = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, canvasControl.emphasis), { zoneEmphasis: this._emphasis });
        }
        for (var i = 0; i < sectionsToAdd; ++i, ++curSectionIndex) {
            // Get the pertinent section if available
            var section = this._sectionsMap.get(curSectionIndex);
            if (!section) {
                var factor = colDef && colDef.factor[i];
                if (factor === undefined || isNaN(factor)) {
                    factor = canvasControl.position.sectionFactor;
                }
                // Section doesn't exist, create a new section
                var newSection = new _CanvasSectionPart__WEBPACK_IMPORTED_MODULE_5__["CanvasSectionPart"](curSectionIndex, canvasControl.emphasis && canvasControl.emphasis.sectionEmphasis, factor);
                // If control index is not provided, then set to default index
                if (canvasControl.position.controlIndex === undefined) {
                    canvasControl.position = _CanvasLayout__WEBPACK_IMPORTED_MODULE_4__["CanvasLayout"].cloneMerge(canvasControl.position, {
                        zoneIndex: undefined,
                        sectionIndex: undefined,
                        controlIndex: _CanvasLayout__WEBPACK_IMPORTED_MODULE_4__["CanvasLayout"].firstLayoutIndex
                    });
                }
                // Ok, now add the control and update the layout
                controlId = newSection.addControl(canvasControl, addedFromToolbox);
                if (controlId) {
                    this._sectionsMap.set(curSectionIndex, newSection);
                }
                if (_common_CanvasExperiments__WEBPACK_IMPORTED_MODULE_7__["Experiments"].isRTEClickAnywhereExperimentEnabled() &&
                    !canvasControl.addedFromPersistedData &&
                    canvasControl.controlType !== _ms_sp_canvas_read__WEBPACK_IMPORTED_MODULE_3__["CanvasControlType"].FullWidth &&
                    canvasControl.controlType !== _ms_sp_canvas_read__WEBPACK_IMPORTED_MODULE_3__["CanvasControlType"].WebPartZone &&
                    (!_common_Flights__WEBPACK_IMPORTED_MODULE_8__["Flights"].isMEEDashboardEnabled() || canvasControl.controlType !== _ms_sp_canvas_read__WEBPACK_IMPORTED_MODULE_3__["CanvasControlType"].DashCard) &&
                    canvasControl.controlType !== _ms_sp_canvas_read__WEBPACK_IMPORTED_MODULE_3__["CanvasControlType"].RTE) {
                    newSection.addControl(Object(_getPhantomRTEControl__WEBPACK_IMPORTED_MODULE_6__["getPhantomRTEControl"])(_CanvasLayout__WEBPACK_IMPORTED_MODULE_4__["CanvasLayout"].cloneMerge(canvasControl.position, {
                        controlIndex: canvasControl.position.controlIndex + 1,
                        sectionIndex: curSectionIndex,
                        sectionFactor: newSection.factor
                    })), addedFromToolbox);
                }
            }
            else {
                // section already exists, verify that the control information is provided
                if (canvasControl.position.controlIndex !== undefined) {
                    // Ok this is a valid control, add it
                    controlId = section.addControl(canvasControl, addedFromToolbox);
                }
                else {
                    // Attempting to add a new section above a section that already exists.
                    // Generate a new section index and add it.
                    canvasControl.position = _CanvasLayout__WEBPACK_IMPORTED_MODULE_4__["CanvasLayout"].cloneMerge(canvasControl.position, {
                        zoneIndex: undefined,
                        sectionIndex: _CanvasLayout__WEBPACK_IMPORTED_MODULE_4__["CanvasLayout"].generateNewLayoutIndex(this.sections, curSectionIndex),
                        controlIndex: undefined
                    });
                    if (canvasControl.position.sectionIndex === undefined) {
                        // Could not generate a new index, cannot proceed
                        return undefined;
                    }
                    var newSecondarySection = new _CanvasSectionPart__WEBPACK_IMPORTED_MODULE_5__["CanvasSectionPart"](canvasControl.position.sectionIndex, canvasControl.emphasis && canvasControl.emphasis.sectionEmphasis);
                    canvasControl.position = _CanvasLayout__WEBPACK_IMPORTED_MODULE_4__["CanvasLayout"].cloneMerge(canvasControl.position, {
                        zoneIndex: undefined,
                        sectionIndex: undefined,
                        controlIndex: _CanvasLayout__WEBPACK_IMPORTED_MODULE_4__["CanvasLayout"].firstLayoutIndex
                    });
                    // Add the control and update the layout
                    controlId = newSecondarySection.addControl(canvasControl, addedFromToolbox);
                    if (controlId && canvasControl.position.sectionIndex !== undefined) {
                        this._sectionsMap.set(canvasControl.position.sectionIndex, newSecondarySection);
                    }
                }
            }
        }
        return controlId;
    };
    CanvasZonePart.prototype.updateControl = function (control) {
        var section = this._sectionsMap.get(control.position.sectionIndex);
        if (section) {
            return section.updateControl(control);
        }
        else {
            return false;
        }
    };
    /**
     * Moves a control inside the zone.
     * @param control The control to be moved
     * @param newControlPosition The position where the control will be moved to
     */
    CanvasZonePart.prototype.moveControl = function (control, newControlPosition) {
        if (!control || control.position.zoneIndex !== newControlPosition.zoneIndex) {
            return undefined;
        }
        // if the move is within the same section let the section handle the move
        if (control.position.sectionIndex === newControlPosition.sectionIndex) {
            return this._moveControlInSection(control, newControlPosition);
        }
        else {
            // if the move is to a different section we need to remove the control and add it to the new location
            // Todo#661360 Fix workaround left-over
            var newControl = this._getControlComponentById(control.id).serialize();
            newControl.position = newControlPosition;
            newControl.addedFromPersistedData = true;
            this.removeControl(control.position);
            this.addControl(newControl);
            return this._moveControlInSection(newControl, newControlPosition);
        }
        return undefined;
    };
    /**
     * Removes a control
     * @param controlPosition represents the control to remove
     * @returns id of control that was removed
     */
    CanvasZonePart.prototype.removeControl = function (controlPosition) {
        // If the control is undefined or isn't associated with a layout, return
        if (!controlPosition) {
            return undefined;
        }
        // Todo#661360 Fix workaround left-over
        var section = this._sectionsMap.get(controlPosition.sectionIndex);
        if (!section) {
            // Section doesn't exist, cannot proceed
            return undefined;
        }
        // remove the control from the section
        var controlId = section.removeControl(controlPosition);
        return controlId;
    };
    /**
     * Fetches a control from the zone if available
     * @param controlPosition represents the position of the control
     * @returns the underlying control in the zone if available
     */
    CanvasZonePart.prototype.fetchControl = function (controlPosition) {
        // Verify its a valid layout
        if (!controlPosition) {
            return undefined;
        }
        // Todo#661360 Fix workaround left-over
        var section = this._sectionsMap.get(controlPosition.sectionIndex);
        if (!section) {
            // Section doesn't exist, cannot proceed
            return undefined;
        }
        return section.fetchControl(controlPosition);
    };
    /**
     * Fetch all controls that are available in that zone
     * @returns all the controls in that zone
     */
    CanvasZonePart.prototype.fetchAllControls = function (includeEmptySections) {
        var _this = this;
        if (includeEmptySections === void 0) { includeEmptySections = true; }
        var canvasControls = [];
        var sections = this.sections;
        sections.forEach(function (section) {
            var controls = section.fetchAllControls();
            if (includeEmptySections && controls.length === 0) {
                var emptySection = section.emptySectionControl;
                emptySection.position = _CanvasLayout__WEBPACK_IMPORTED_MODULE_4__["CanvasLayout"].cloneMerge(emptySection.position, {
                    zoneIndex: _this._index,
                    sectionIndex: undefined,
                    controlIndex: undefined,
                    layoutIndex: _this._layoutIndex
                });
                emptySection.emphasis = _CanvasLayout__WEBPACK_IMPORTED_MODULE_4__["CanvasLayout"].cloneMerge(emptySection.emphasis, {
                    zoneEmphasis: _this._emphasis,
                    sectionEmphasis: undefined,
                    controlEmphasis: undefined
                });
                controls.push(emptySection);
            }
            canvasControls = canvasControls.concat(controls);
        });
        return canvasControls;
    };
    /**
     * Change the emphasis of the zone.
     *
     * @param emphasis - The new emphasis
     */
    CanvasZonePart.prototype.changeEmphasis = function (emphasis) {
        _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__["_EngagementLogger"].logEvent('Canvas.ChangeEmphasis.Click');
        this._emphasis = emphasis.zoneEmphasis;
        this._sectionsMap.forEach(function (section) {
            section.changeEmphasis(emphasis);
        });
    };
    /**
     * Modify the current state of the zone to reflect new sections and/or section factors.
     *
     * @param zoneType - The key into the CanvasZonePart.columnDefinitionMap for the new section count
     *   and respective section factors.
     */
    CanvasZonePart.prototype.changeZone = function (zoneType) {
        _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__["_EngagementLogger"].logEvent('Canvas.ChangeZone.Click');
        // Todo#661360 Fix workaround left-over
        var colDef = CanvasZonePart.columnDefinitionMap.get(zoneType);
        var sections = this.sections;
        var sectionsLength = sections.length;
        if (colDef.sections > sectionsLength) {
            this._increaseSections(sections, colDef, zoneType);
        }
        else if (colDef.sections < sectionsLength) {
            this._reduceSections(sections, colDef);
        }
        else if (colDef.factor[0] !== sections[0].factor) {
            /**
             * Since the first factor of any IColumnDefinition with the same sections value is different
             * we can short circuit the logic to compare only the first factor.
             */
            sections.forEach(function (sectionPart, index) {
                sectionPart.changeFactor(colDef.factor[index]);
            });
        }
        this._layoutType = zoneType;
    };
    /**
     * Determines if the underlying layout is empty
     * @returns true if the zone is empty
     */
    CanvasZonePart.prototype.isEmpty = function () {
        return this.fetchAllControls(false).length === 0;
    };
    /**
     * Disposes the zone
     */
    CanvasZonePart.prototype.dispose = function () {
        this._sectionsMap.clear();
    };
    /**
     * Changes the zone index when the zone is moved
     */
    CanvasZonePart.prototype.changeZoneIndex = function (newZoneIndex) {
        this.fetchAllControls(false).forEach(function (control) {
            control.position = _CanvasLayout__WEBPACK_IMPORTED_MODULE_4__["CanvasLayout"].cloneMerge(control.position, {
                zoneIndex: newZoneIndex
            });
        });
        this._index = newZoneIndex;
    };
    CanvasZonePart.prototype._createQosScope = function (scope) {
        return new _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__["_QosMonitor"]("Canvas" + scope);
    };
    CanvasZonePart.prototype._increaseSections = function (currentSections, columnDefinition, zoneType) {
        var qos = this._createQosScope('IncreaseSections');
        try {
            var currentSectionsLength = currentSections.length;
            // Change the section factor for the current sections.
            currentSections.forEach(function (sectionPart, index) {
                sectionPart.changeFactor(columnDefinition.factor[index]);
            });
            // Add new sections after the last one.
            var newSectionsLength = columnDefinition.sections;
            if (currentSections[currentSectionsLength - 1]) {
                var currentSectionIndex = currentSections[currentSectionsLength - 1].index + 1;
                for (var i = currentSectionsLength; i < newSectionsLength; ++i) {
                    var newSection = new _CanvasSectionPart__WEBPACK_IMPORTED_MODULE_5__["CanvasSectionPart"](currentSectionIndex, undefined, columnDefinition.factor[i]);
                    this._sectionsMap.set(currentSectionIndex++, newSection);
                }
            }
            else {
                var extraData = {
                    zoneType: zoneType,
                    layoutIndex: this.layoutIndex,
                    zoneIndex: this._index
                };
                var error = new Error('Last section does not exists' + currentSections);
                qos.writeUnexpectedFailure('Exception', error, extraData);
            }
            qos.writeSuccess();
        }
        catch (err) {
            qos.writeUnexpectedFailure('Exception', err);
        }
    };
    CanvasZonePart.prototype._reduceSections = function (currentSections, columnDefinition) {
        var _this = this;
        var qos = this._createQosScope('ReduceSections');
        try {
            var currentSectionsLength = currentSections.length;
            var lastSection_1 = currentSections[columnDefinition.sections - 1];
            var lastSectionLastControl = lastSection_1.controls[lastSection_1.controls.length - 1];
            var newSectionsLength = columnDefinition.sections;
            // Find the index of the last control in the section where we will move controls to.
            var controlIndex_1 = 1;
            if (lastSectionLastControl) {
                controlIndex_1 = lastSectionLastControl.position.controlIndex;
            }
            // Change the section factor for the sections left after the reduction.
            for (var i = 0; i < newSectionsLength; ++i) {
                currentSections[i].changeFactor(columnDefinition.factor[i]);
            }
            // Move the controls into the last remaining section after the reduction and dispose of the old sections.
            for (var i = currentSectionsLength - 1; i >= newSectionsLength; --i) {
                currentSections[i].controls.forEach(function (control) {
                    /**
                     * Moving the control currently will re-instantiate the web part due to the section being removed.
                     * Although the key on the WebPartZone will be the same as it was before, it is now a part of a new
                     * sub-tree so React can not reconcile the DOM by just moving the elements.
                     */
                    var controlComponent = _this._getControlComponentById(control.id);
                    // The control component could be undefined when the web part is not mounted after creation or being moved.
                    // Which also means the control has not been updated by user.
                    // We can then use the canvas control directly without serialization.
                    var newControl = controlComponent ? controlComponent.serialize() : control;
                    newControl.position = _CanvasLayout__WEBPACK_IMPORTED_MODULE_4__["CanvasLayout"].cloneMerge(newControl.position, {
                        zoneIndex: undefined,
                        sectionIndex: lastSection_1.index,
                        sectionFactor: lastSection_1.factor,
                        controlIndex: ++controlIndex_1,
                        layoutIndex: undefined
                    });
                    newControl.addedFromPersistedData = true;
                    lastSection_1.addControl(newControl);
                });
                currentSections[i].dispose();
                this._sectionsMap.delete(currentSections[i].index);
            }
            qos.writeSuccess();
        }
        catch (err) {
            qos.writeUnexpectedFailure('Exception', err);
        }
    };
    CanvasZonePart.prototype._getCurrentColumnSize = function () {
        var sections = this.sections;
        var sectionsLength = sections.length;
        var firstSectionFactor = sections[0].factor;
        if (_common_Flights__WEBPACK_IMPORTED_MODULE_8__["Flights"].isMEEDashboardEnabled() && sectionsLength === 1 && firstSectionFactor === -1) {
            // We use factor=-1 to identify the canvas control type is dash card.
            return _ms_sp_canvas_read__WEBPACK_IMPORTED_MODULE_3__["CanvasControlType"].DashCard;
        }
        /**
         * Since the first factor of any IColumnDefinition with the same sections value is different
         * we can use firstSectionFactor to compare to the first factor of the column definition.
         */
        var columnSize;
        if (sectionsLength === 1) {
            columnSize = firstSectionFactor === 0 ? _ms_sp_canvas_read__WEBPACK_IMPORTED_MODULE_3__["CanvasControlType"].FullWidth : _ms_sp_canvas_read__WEBPACK_IMPORTED_MODULE_3__["CanvasControlType"].OneColumn;
        }
        else if (sectionsLength === 2) {
            if (firstSectionFactor === 4) {
                columnSize = _ms_sp_canvas_read__WEBPACK_IMPORTED_MODULE_3__["CanvasControlType"].OneThirdColumnLeft;
            }
            else if (firstSectionFactor === 6) {
                columnSize = _ms_sp_canvas_read__WEBPACK_IMPORTED_MODULE_3__["CanvasControlType"].TwoColumns;
            }
            else if (firstSectionFactor === 8) {
                columnSize = _ms_sp_canvas_read__WEBPACK_IMPORTED_MODULE_3__["CanvasControlType"].OneThirdColumnRight;
            }
        }
        else if (sectionsLength === 3) {
            columnSize = _ms_sp_canvas_read__WEBPACK_IMPORTED_MODULE_3__["CanvasControlType"].ThreeColumns;
        }
        return columnSize; // Todo#661360 Fix workaround left-over
    };
    CanvasZonePart.prototype._moveControlInSection = function (control, newControlPosition) {
        var actualNewPosition = newControlPosition;
        var section = this._sectionsMap.get(newControlPosition.sectionIndex);
        if (section) {
            actualNewPosition = section.moveControl(control, newControlPosition);
        }
        return actualNewPosition;
    };
    CanvasZonePart.columnDefinitionMap = new Map([
        [_ms_sp_canvas_read__WEBPACK_IMPORTED_MODULE_3__["CanvasControlType"].OneColumn, { sections: 1, factor: [12] }],
        [_ms_sp_canvas_read__WEBPACK_IMPORTED_MODULE_3__["CanvasControlType"].FullWidth, { sections: 1, factor: [0] }],
        [_ms_sp_canvas_read__WEBPACK_IMPORTED_MODULE_3__["CanvasControlType"].TwoColumns, { sections: 2, factor: [6, 6] }],
        [_ms_sp_canvas_read__WEBPACK_IMPORTED_MODULE_3__["CanvasControlType"].ThreeColumns, { sections: 3, factor: [4, 4, 4] }],
        [_ms_sp_canvas_read__WEBPACK_IMPORTED_MODULE_3__["CanvasControlType"].OneThirdColumnRight, { sections: 2, factor: [8, 4] }],
        [_ms_sp_canvas_read__WEBPACK_IMPORTED_MODULE_3__["CanvasControlType"].OneThirdColumnLeft, { sections: 2, factor: [4, 8] }],
        [_ms_sp_canvas_read__WEBPACK_IMPORTED_MODULE_3__["CanvasControlType"].DashCard, { sections: 1, factor: [-1] }]
    ]);
    return CanvasZonePart;
}());



/***/ })

/******/ })});;
//# sourceMappingURL=sp-canvas_[locale].js.map