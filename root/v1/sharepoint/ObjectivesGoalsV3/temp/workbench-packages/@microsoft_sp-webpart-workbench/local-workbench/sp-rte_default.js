define("8404d628-4817-4b3a-883e-1c5a4d07892e_1.11.0", ["tslib","@ms/sp-topic-shared","@microsoft/sp-loader","@microsoft/office-ui-fabric-react-bundle","@ms/sp-safehtml","@microsoft/sp-lodash-subset","@microsoft/sp-core-library","@microsoft/sp-page-context","@ms/sp-coachmark-utility","react","react-dom","@ms/sp-component-utilities","@microsoft/load-themed-styles","@microsoft/sp-diagnostics","@ms/sp-a11y"], function(__WEBPACK_EXTERNAL_MODULE__17wl__, __WEBPACK_EXTERNAL_MODULE_HVbJ__, __WEBPACK_EXTERNAL_MODULE_I6O9__, __WEBPACK_EXTERNAL_MODULE_KL1q__, __WEBPACK_EXTERNAL_MODULE_NEVa__, __WEBPACK_EXTERNAL_MODULE_Pk8u__, __WEBPACK_EXTERNAL_MODULE_UWqr__, __WEBPACK_EXTERNAL_MODULE_X_PM__, __WEBPACK_EXTERNAL_MODULE_bXd7__, __WEBPACK_EXTERNAL_MODULE_cDcd__, __WEBPACK_EXTERNAL_MODULE_faye__, __WEBPACK_EXTERNAL_MODULE_hiL___, __WEBPACK_EXTERNAL_MODULE_jOlS__, __WEBPACK_EXTERNAL_MODULE_ut3N__, __WEBPACK_EXTERNAL_MODULE_ytfe__) { return /******/ (function(modules) { // webpackBootstrap
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
/******/ 		var component_0 = { // @ms/sp-dataproviders
/******/ 			i: "1cea229f-b208-4202-8014-22503d92a019",
/******/ 			v: "0.1.0",
/******/ 			m: "QZHX"
/******/ 		};
/******/ 		var component_1 = { // @microsoft/sp-http
/******/ 			i: "c07208f0-ea3b-4c1a-9965-ac1b825211a6",
/******/ 			v: "1.12.1",
/******/ 			m: "vlQI"
/******/ 		};
/******/
/******/ 		return {"sp-pages-topic-picker": [component_0, component_1]}[chunkId] || [];
/******/ 	}
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"sp-rte": 0
/******/ 	};
/******/
/******/
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "chunk." + ({"sp-pages-topic-picker":"sp-pages-topic-picker","sp-rte-wikipagesuggestions":"sp-rte-wikipagesuggestions","vendors~sp-canvas-sp-ckeditor":"vendors~sp-canvas-sp-ckeditor","vendors~sp-canvas-sp-ckeditor-flight":"vendors~sp-canvas-sp-ckeditor-flight"}[chunkId]||chunkId) + "_" + "none" + ".js"
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
/******/ 	var jsonpArray = window["webpackJsonp_8404d628_4817_4b3a_883e_1c5a4d07892e_1_11_0"] = window["webpackJsonp_8404d628_4817_4b3a_883e_1c5a4d07892e_1_11_0"] || [];
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
/******/ 	  var regex = (typeof spScriptNamePattern !== 'undefined') ? spScriptNamePattern : /sp-rte_default\.js/i;
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

/***/ "+ORw":
/*!************************************!*\
  !*** ./lib/common/KillSwitches.js ***!
  \************************************/
/*! exports provided: default, isTopicPickerRenderQosKSActivated, isCachedZeroTermSuggestionKSActivated, isFixDeleteTopicOnBackSpaceKSActivated, isFixOnChangeNotInvokedKSActivated, isMoveShadowCallKSActivated, headerForTopicPickerKSActivated, updatedAriaAttributesKSActivated, updatedAriaAlertsKSActivated, updateTopicPickerTooltipKSActivated, onHoverTopicPickerUpdatedStylesKSActivated, isLogTPOpenKSActivated, fixTopicPickerHashKeyKSActivated, fixWebPartEditModeBorderKSActivated, fixTableHeadersAccessibilityKSActivated, separateIDBExperimentQosKSActivated, fixMissingSpaceInAutoCompleteKSActivated, fixAlternateNameInsertionKSActivated, fixCancelInsertLinkFocusLostKSActivated, fixDefaultSuggestionQueryKSActivated, isRTENewTopicEntryKSActivated, fixDefinitionAutoAnnotationKSActivated, isFixDeleteTopicOnDeleteKeyKSActivated, allowSummaryAttributeKSActivated, isFixExtraCharDeleteOnBackspaceKSActivated */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isTopicPickerRenderQosKSActivated", function() { return isTopicPickerRenderQosKSActivated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isCachedZeroTermSuggestionKSActivated", function() { return isCachedZeroTermSuggestionKSActivated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFixDeleteTopicOnBackSpaceKSActivated", function() { return isFixDeleteTopicOnBackSpaceKSActivated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFixOnChangeNotInvokedKSActivated", function() { return isFixOnChangeNotInvokedKSActivated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isMoveShadowCallKSActivated", function() { return isMoveShadowCallKSActivated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "headerForTopicPickerKSActivated", function() { return headerForTopicPickerKSActivated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updatedAriaAttributesKSActivated", function() { return updatedAriaAttributesKSActivated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updatedAriaAlertsKSActivated", function() { return updatedAriaAlertsKSActivated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateTopicPickerTooltipKSActivated", function() { return updateTopicPickerTooltipKSActivated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onHoverTopicPickerUpdatedStylesKSActivated", function() { return onHoverTopicPickerUpdatedStylesKSActivated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isLogTPOpenKSActivated", function() { return isLogTPOpenKSActivated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fixTopicPickerHashKeyKSActivated", function() { return fixTopicPickerHashKeyKSActivated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fixWebPartEditModeBorderKSActivated", function() { return fixWebPartEditModeBorderKSActivated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fixTableHeadersAccessibilityKSActivated", function() { return fixTableHeadersAccessibilityKSActivated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "separateIDBExperimentQosKSActivated", function() { return separateIDBExperimentQosKSActivated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fixMissingSpaceInAutoCompleteKSActivated", function() { return fixMissingSpaceInAutoCompleteKSActivated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fixAlternateNameInsertionKSActivated", function() { return fixAlternateNameInsertionKSActivated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fixCancelInsertLinkFocusLostKSActivated", function() { return fixCancelInsertLinkFocusLostKSActivated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fixDefaultSuggestionQueryKSActivated", function() { return fixDefaultSuggestionQueryKSActivated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isRTENewTopicEntryKSActivated", function() { return isRTENewTopicEntryKSActivated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fixDefinitionAutoAnnotationKSActivated", function() { return fixDefinitionAutoAnnotationKSActivated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFixDeleteTopicOnDeleteKeyKSActivated", function() { return isFixDeleteTopicOnDeleteKeyKSActivated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "allowSummaryAttributeKSActivated", function() { return allowSummaryAttributeKSActivated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFixExtraCharDeleteOnBackspaceKSActivated", function() { return isFixExtraCharDeleteOnBackspaceKSActivated; });
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ms/sp-component-utilities */ "hiL/");
/* harmony import */ var _ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_1__);


var KillSwitches = /** @class */ (function () {
    function KillSwitches() {
    }
    KillSwitches.topicHashtaggingEnabled = new _ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_1__["KillSwitch"]('edb07b76-5316-409e-a35a-96341da23e99' /* '04/19/2020', 'Cortex topic hashtagging enabled?' */);
    KillSwitches.topicSuggestionQos = new _ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_1__["KillSwitch"]('36cec6e2-c310-4699-8636-e0378c33f07d' /* '06/12/2020',
    'Use QOS tag CSIKM.HashTagging.TopicSuggestion to measure topic suggestion performance'*/);
    KillSwitches.topicPickerRegExFix = new _ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_1__["KillSwitch"]('6c07242d-3059-4665-9144-3ed7dc3a3d2c' /* '06/17/2020',
    'Improvements to topic picker dismissal behavior.'*/);
    KillSwitches.fixWebPartRteEditorPadding = new _ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_1__["KillSwitch"]('2dc7fe7e-2bbf-473a-a4b6-4188647655b4' /* '05/07/2020',
    'Give padding to the text editor' */);
    KillSwitches.topicSuggestionsLoaderQos = new _ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_1__["KillSwitch"]('1e24f686-e488-4add-bd0b-c680f300195c' /* '06/29/2020',
    'Disable sending QOS events for TopicSuggestions loader.'*/);
    return KillSwitches;
}());
/* harmony default export */ __webpack_exports__["default"] = (KillSwitches);
function isTopicPickerRenderQosKSActivated() {
    return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPKillSwitch"].isActivated('cc6daf8f-3d72-4c85-adea-cbb098663992'
    /* '08/13/2020', 'Sends QOS events for Topic Picker render.' */
    );
}
function isCachedZeroTermSuggestionKSActivated() {
    return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPKillSwitch"].isActivated('2300657f-d17f-4eac-a36e-729fc373535a'
    /* '7/17/2020', 'Use last previous topic suggestion for zero term queries.' */
    );
}
function isFixDeleteTopicOnBackSpaceKSActivated() {
    return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPKillSwitch"].isActivated('2d97ef8b-5149-4248-a20c-eaa912d24419'
    /* '07/27/2020',
    'Fix backspace key issue in hashtagged topic' */
    );
}
function isFixOnChangeNotInvokedKSActivated() {
    return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPKillSwitch"].isActivated('21e43ec8-c010-4479-8484-0fd5acae266d' /* '08/03/2020',
    'Fix onChange not invoked when text is empty' */);
}
function isMoveShadowCallKSActivated() {
    return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPKillSwitch"].isActivated('2f286ded-3876-4aa3-a858-eebe31c97194' /* '08/06/2020', 'Move Shadow Call outside of ODSP calls' */);
}
// Graduate this ks with b5874077-5c39-4763-a421-e7733fc04799
function headerForTopicPickerKSActivated() {
    return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPKillSwitch"].isActivated('a4a993ac-e76f-4eed-945a-c12794f3b880'
    /* '08/20/2020',
    'Enable header in topic picker advanced for fixes in position' */
    );
}
function updatedAriaAttributesKSActivated() {
    return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPKillSwitch"].isActivated('a5fc462e-8b43-419f-87df-47883fdc86d7'
    /* '09/02/2020',
    'Updated aria properties' */
    );
}
function updatedAriaAlertsKSActivated() {
    return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPKillSwitch"].isActivated('4bdf20e5-17f2-41e1-a46e-b7b759bcf840'
    /* '08/11/2020',
    'Updated aria alerts' */
    );
}
function updateTopicPickerTooltipKSActivated() {
    return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPKillSwitch"].isActivated('46924dfc-80e5-4358-bfeb-b406386c364b' /* '08/26/2020',
    'Update tooltip for topic picker items' */);
}
function onHoverTopicPickerUpdatedStylesKSActivated() {
    return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPKillSwitch"].isActivated('b79b441b-5dd3-4eee-a8e8-3c436dee585b' /* '09/02/2020',
    'Update on hover styling for topic picker suggestions' */);
}
function isLogTPOpenKSActivated() {
    return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPKillSwitch"].isActivated('c047ae1d-a454-4db7-9bfc-ad825ad06374' /* '10/13/2020',
    'Log Topic Picker Open for Project Cortex.' */);
}
function fixTopicPickerHashKeyKSActivated() {
    return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPKillSwitch"].isActivated('67e4a49f-25ba-4b74-a711-02f4c2e60107' /* '10/08/2020',
    'Fix topic picker hash key detection' */);
}
function fixWebPartEditModeBorderKSActivated() {
    return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPKillSwitch"].isActivated('e352a943-d1f7-4ee8-a186-cfec47dcf981' /* '12/03/2020',
    'Fix webpart right border for ckeditor.' */);
}
function fixTableHeadersAccessibilityKSActivated() {
    return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPKillSwitch"].isActivated('58efab3e-9622-4d00-a92e-19c42b6b3b12' /* '10/12/2020',
    'Fix table headers accessibility' */);
}
function separateIDBExperimentQosKSActivated() {
    return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPKillSwitch"].isActivated('feabb590-c94d-4bc4-a43c-6a3ee94016e8' /* '12/01/2020',
    'Allows for separating QoS events to use a different tag when indexed DB is enabled' */);
}
function fixMissingSpaceInAutoCompleteKSActivated() {
    return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPKillSwitch"].isActivated('5f5c9bf4-8ec5-4135-bd8a-6da214561cd9' /* '01/06/2020',
    'Fix missing space in the autocomplete item template class names seen in topic picker' */);
}
function fixAlternateNameInsertionKSActivated() {
    return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPKillSwitch"].isActivated('ac420331-bf74-441b-aac1-dbf99431e3ed' /* '11/11/2020',
    'Fix alternate name insertion feature for topic picker' */);
}
function fixCancelInsertLinkFocusLostKSActivated() {
    return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPKillSwitch"].isActivated('796db795-9777-42e3-a88d-b76fbcff9c65' /* '12/02/2020',
    'Fix focus lost if cancel Insert link dialog' */);
}
function fixDefaultSuggestionQueryKSActivated() {
    return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPKillSwitch"].isActivated('275e6592-8be5-46e4-980a-6b4ecaa878b4' /* '01/11/2020',
    'Fix default empty suggestions query for Substrate APIs' */);
}
function isRTENewTopicEntryKSActivated() {
    return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPKillSwitch"].isActivated('b5874077-5c39-4763-a421-e7733fc04799' /* '01/07/2021',
    'Enable new topic entry in definition' */);
}
function fixDefinitionAutoAnnotationKSActivated() {
    return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPKillSwitch"].isActivated('a2ce7e79-a27b-4c4a-926c-d00a019ebccd'
    /* '1/28/2021', 'Fix definition auto annotation issue' */
    );
}
function isFixDeleteTopicOnDeleteKeyKSActivated() {
    return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPKillSwitch"].isActivated('c1690c88-8644-441f-9b01-c3504fe4b043'
    /* '01/08/2021',
    'Fix delete key issue in hashtagged topic' */
    );
}
function allowSummaryAttributeKSActivated() {
    return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPKillSwitch"].isActivated('8bc85e4a-3f8a-4f7b-b17a-fbc576d72897'
    /* '01/27/2021',
    'Allow summary attribute in a pasted table' */
    );
}
function isFixExtraCharDeleteOnBackspaceKSActivated() {
    return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPKillSwitch"].isActivated('53277ed4-05d2-4c70-8787-82777bd44324'
    /* '01/28/2021',
    'Fix one extra character delete on hitting backspace for hashtagged topic */
    );
}


/***/ }),

/***/ "0YzQ":
/*!***********************************************!*\
  !*** ./lib/rte/common/DeferredTopicPicker.js ***!
  \***********************************************/
/*! exports provided: DeferredTopicPicker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeferredTopicPicker", function() { return DeferredTopicPicker; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__);



var DeferredTopicPicker = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(DeferredTopicPicker, _super);
    function DeferredTopicPicker() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DeferredTopicPicker.getInstance = function () {
        return this._getInstance();
    };
    DeferredTopicPicker.prototype.create = function (scope, editor, onClickNewTopicButton) {
        this._topicPicker = new this._classType(scope, onClickNewTopicButton);
        return this._topicPicker;
    };
    DeferredTopicPicker.prototype.getTopicSuggestions = function (query) {
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["Validate"].isNotNullOrUndefined(this._topicPicker, '_topicPicker');
        return this._topicPicker.getTopicSuggestions(query);
    };
    DeferredTopicPicker.prototype.regexMatch = function (text, offset) {
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["Validate"].isNotNullOrUndefined(this._topicPicker, '_topicPicker');
        return this._topicPicker.regexMatch(text, offset);
    };
    DeferredTopicPicker.prototype.tryHandleKeyboardEvent = function (evt, editor) {
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["Validate"].isNotNullOrUndefined(this._topicPicker, '_topicPicker');
        return this._topicPicker.tryHandleKeyboardEvent(evt, editor);
    };
    DeferredTopicPicker.prototype.isTopicSuggestion = function (item) {
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["Validate"].isNotNullOrUndefined(this._topicPicker, '_topicPicker');
        return this._topicPicker.isTopicSuggestion(item);
    };
    DeferredTopicPicker.prototype.selectedItemHTMLToInsert = function (item) {
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["Validate"].isNotNullOrUndefined(this._topicPicker, '_topicPicker');
        return this._topicPicker.selectedItemHTMLToInsert(item);
    };
    DeferredTopicPicker.prototype.suggestionsCallback = function (rte, matchInfo, callback, shouldShowNewTopicButton) {
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["Validate"].isNotNullOrUndefined(this._topicPicker, '_topicPicker');
        this._topicPicker.suggestionsCallback(rte, matchInfo, callback, shouldShowNewTopicButton);
    };
    Object.defineProperty(DeferredTopicPicker.prototype, "prevTopics", {
        get: function () {
            _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["Validate"].isNotNullOrUndefined(this._topicPicker, '_topicPicker');
            return this._topicPicker.prevTopics;
        },
        enumerable: true,
        configurable: true
    });
    DeferredTopicPicker.prototype._internalLoad = function () {
        return __webpack_require__.e(/*! import() | sp-pages-topic-picker */ "sp-pages-topic-picker").then(__webpack_require__.bind(null, /*! ../ckeditor/TopicPicker */ "bsoG"))
            .then(function (module) { return module.default; })
            .catch(function (error) {
            return Promise.reject(error);
        });
    };
    return DeferredTopicPicker;
}(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["_DeferredClass"]));



/***/ }),

/***/ "0szf":
/*!*************************************!*\
  !*** ./lib/rte/baseRte/BaseRte.css ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../../../common/temp/node_modules/.pnpm/css-loader@3.2.1_webpack@4.44.2/node_modules/css-loader/dist/cjs.js!../../../../../common/temp/node_modules/.pnpm/postcss-loader@3.0.0/node_modules/postcss-loader/src??postcss!./BaseRte.css */ "GFEk");
var loader = __webpack_require__(/*! @microsoft/load-themed-styles */ "jOlS");

if(typeof content === "string") content = [[module.i, content]];

// add the styles to the DOM
for (var i = 0; i < content.length; i++) loader.loadStyles(content[i][1], true);

if(content.locals) module.exports = content.locals;

/***/ }),

/***/ "17wl":
/*!************************!*\
  !*** external "tslib" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__17wl__;

/***/ }),

/***/ "4x8+":
/*!******************************************************************!*\
  !*** ./lib/toolbar/DeferredComponents/DeferredToolbarSubmenu.js ***!
  \******************************************************************/
/*! exports provided: DeferredToolbarSubmenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeferredToolbarSubmenu", function() { return DeferredToolbarSubmenu; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


// tslint:disable-next-line:variable-name
var DeferredToolbarSubmenuComponent = react__WEBPACK_IMPORTED_MODULE_1__["lazy"](function () {
    return Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ../toolbarSubMenu/ToolbarSubmenu */ "fHAL")).then(function (module) { return ({
        default: module.ToolbarSubmenu
    }); });
});
var DeferredToolbarSubmenu = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(DeferredToolbarSubmenu, _super);
    function DeferredToolbarSubmenu() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DeferredToolbarSubmenu.prototype.render = function () {
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Suspense"], { fallback: false },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](DeferredToolbarSubmenuComponent, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.props))));
    };
    return DeferredToolbarSubmenu;
}(react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]));



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

/***/ "7w0S":
/*!**************************************!*\
  !*** ./lib/rte/common/TextParser.js ***!
  \**************************************/
/*! exports provided: TextParser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextParser", function() { return TextParser; });
/**
 * @Copyright (c) Microsoft Corporation.  All rights reserved.
 *
 * A collection of helper methods related to text parsing.
 */
var ZERO_WIDTH_SPACE = /\u200B/g;
var TextParser = /** @class */ (function () {
    function TextParser() {
    }
    TextParser.removeZeroWidthSpaces = function (text) {
        return text.replace(ZERO_WIDTH_SPACE, '');
    };
    return TextParser;
}());



/***/ }),

/***/ "Ayuq":
/*!**********************************************************!*\
  !*** ./lib/rte/formattingbar/SPRteFormattingBar.scss.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* tslint:disable */
__webpack_require__(/*! ./SPRteFormattingBar.css */ "HuUu");
var styles = {};
/* harmony default export */ __webpack_exports__["default"] = (styles);
/* tslint:enable */ 


/***/ }),

/***/ "Bd75":
/*!*********************************!*\
  !*** ./lib/common/Utilities.js ***!
  \*********************************/
/*! exports provided: Utilities */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Utilities", function() { return Utilities; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/office-ui-fabric-react-bundle */ "KL1q");
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _rte_loc_RteStrings_resx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../rte/loc/RteStrings.resx */ "okC0");
var _rte_loc_RteStrings_resx__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../rte/loc/RteStrings.resx */ "okC0", 1);

// Copyright (c) Microsoft. All rights reserved.



var MAC_PLATFORM_IDENTIFIER = 'MacIntel';
var Utilities = /** @class */ (function () {
    function Utilities() {
    }
    Utilities.isTouchEnabled = function () {
        var browserInfo = _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__["_BrowserDetection"].getBrowserInformation();
        return browserInfo.os === _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__["_OS"].Android || browserInfo.os === _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__["_OS"].IOS;
    };
    Utilities.ShortcutText = function () {
        var isMac = navigator.platform === MAC_PLATFORM_IDENTIFIER;
        return isMac ? _rte_loc_RteStrings_resx__WEBPACK_IMPORTED_MODULE_3__["CommandShortcutOnMac"] : _rte_loc_RteStrings_resx__WEBPACK_IMPORTED_MODULE_3__["ControlShortcutOnWin"];
    };
    Utilities.getLinkClassName = function (variantTheme, noHoverStyles) {
        if (noHoverStyles === void 0) { noHoverStyles = false; }
        var semanticColors = variantTheme.semanticColors;
        return Object(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_1__["classNamesFunction"])()({
            link: {
                selectors: {
                    '& a': Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ color: semanticColors.link }, (!noHoverStyles && {
                        selectors: {
                            ':hover': {
                                color: semanticColors.linkHovered
                            }
                        }
                    }))
                }
            }
        }).link;
    };
    return Utilities;
}());



/***/ }),

/***/ "GFEk":
/*!***********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/css-loader@3.2.1_webpack@4.44.2/node_modules/css-loader/dist/cjs.js!/agent/_work/1/s/common/temp/node_modules/.pnpm/postcss-loader@3.0.0/node_modules/postcss-loader/src??postcss!./lib/rte/baseRte/BaseRte.css ***!
  \***********************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../common/temp/node_modules/.pnpm/css-loader@3.2.1_webpack@4.44.2/node_modules/css-loader/dist/runtime/api.js */ "5ADk")(false);
// Module
exports.push([module.i, ".cke_editable{cursor:text;margin:0;padding:1px 2px 0;min-height:68px}.cke_editable ul{counter-reset:item}.fix-box-sizing .cke_chrome{box-sizing:border-box}.rte-webpart{overflow:hidden}.rte-webpart-inlineImageHidden .webPartInRteInlineImage{display:none}.oneLineWidth{min-height:42px}.rte-margin-bottom{margin-bottom:-16px}.rte--edit a{pointer-events:none}.rte--edit a[class*=topic-highlight]{cursor:pointer;background-color:\"[theme:neutralLighter, default: #f4f4f4]\";color:\"[theme:neutralPrimary, default: #333333]\";text-decoration:underline!important;border-bottom:none}.rte--edit.WebPartRteFocusBorder .cke_focus{border-color:\"[theme:themePrimary, default: #0078d4]\"}.rte--read{min-height:0}.rte--read .canvasRteResponsiveTableSelected{border:1px solid \"[theme:neutraltertiary, default: #a6a6a6]\"}.rte--read .cke_widget_drag_handler{display:none}.cke_editable:focus{outline:0}.cke_editable:focus td[class*=cke_table-faked-selection]{background:\"[theme:themeLight, default: #c7e0f4]\"!important;border-color:\"[theme:themePrimary, default: #0078d4]\"!important;border-width:1px;border-style:solid}.fontWeightStrongForIEFireFox strong,.fontWeightStrong strong{font-weight:700}.cke_editable blockquote,.cke_editable div,.cke_editable h2,.cke_editable h3,.cke_editable h4,.cke_editable ol,.cke_editable p,.cke_editable ul{-webkit-font-smoothing:antialiased;line-height:1.3;margin:0 0 8px;word-wrap:break-word}.cke_editable .cke_table-faked-selection{background:\"[theme:themeLight, default: #c7e0f4]\"!important;border-color:\"[theme:themePrimary, default: #0078d4]\"!important;border-width:1px;border-style:solid}.cke_editable div,.cke_editable p{font-size:15px}.cke_editable h2,.cke_editable h3,.cke_editable h4{font-weight:100!important}.cke_editable h2{font-size:24px}.cke_editable h3{font-size:21px}.cke_editable h4{font-size:17px;font-weight:300}.cke_editable ol,.cke_editable ul{font-size:15px;padding:0;margin-left:0!important}.cke_editable ol li,.cke_editable ol li p,.cke_editable ul li,.cke_editable ul li p{margin-bottom:8px}.cke_editable ol{list-style-type:decimal}.cke_editable ul{list-style-type:disc}.cke_editable ol ol,.cke_editable ul ul{margin-top:8px;margin-bottom:8px}.cke_editable ul li ul li{list-style-type:circle}.cke_editable ul li ul li ul li{list-style-type:square}.cke_editable blockquote,.cke_editable div.quote-true{border-left:none;border-right:none;font-weight:100;font-size:24px;font-style:italic;margin:28px 0;padding:32px;text-align:center;font-family:Segoe UI Light WestEuropean,Segoe UI Light,Segoe WP Light,Segoe UI,Segoe WP,Tahoma,Arial,sans-serif}.cke_editable blockquote p{font-size:24px;margin:0}.cke_editable a{text-decoration:underline}.cke_editable i{font-style:italic}.cke_editable u{text-decoration:underline}@media screen and (min-width:480px){.cke_editable h2{font-size:28px}.cke_editable h3{font-size:24px}.cke_editable h4{font-size:21px}.cke_editable blockquote,.cke_editable div.quote-true{font-size:24px}}@media screen and (min-width:1024px){.cke_editable h2{font-size:28px}.cke_editable h3{font-size:24px}.cke_editable h4{font-size:21px}.cke_editable div,.cke_editable ol,.cke_editable p,.cke_editable ul{font-size:17px;font-weight:300;line-height:1.3}.cke_editable td,.cke_editable td p,.cke_editable th,.cke_editable th p{font-size:15px;font-weight:400}}.cke_editable a[class*=topic-highlight]{cursor:text;text-decoration:none;color:\"[theme:bodyText, default: #323130]\";pointer-events:none}.cke_editable:not(:focus):before{content:attr(placeholder);font-size:17px;font-weight:300;line-height:1.3;display:block;height:0}.oneLineWidth:not(:focus):before{height:0}.cke_editable div,.cke_editable p{font-size:18px;font-weight:400;line-height:1.4}.cke_editable h2,.cke_editable h3,.cke_editable h4{font-weight:600!important}.cke_editable h2{font-size:28px}.cke_editable h3{font-size:24px}.cke_editable h4{font-size:20px;font-weight:600}.cke_editable ol,.cke_editable ul{font-size:18px;font-weight:400}.cke_editable blockquote,.cke_editable blockquote p,.cke_editable div.quote-true{font-weight:600;font-size:20px;line-height:1.4}.cke_editable td,.cke_editable td ol,.cke_editable td p,.cke_editable td ul,.cke_editable th,.cke_editable th p{font-size:16px;font-weight:400}.isFluent:not(:focus):before{content:attr(placeholder);font-size:18px;font-weight:400;line-height:1.4;display:block}", ""]);


/***/ }),

/***/ "HVbJ":
/*!**************************************!*\
  !*** external "@ms/sp-topic-shared" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_HVbJ__;

/***/ }),

/***/ "HuUu":
/*!******************************************************!*\
  !*** ./lib/rte/formattingbar/SPRteFormattingBar.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../../../common/temp/node_modules/.pnpm/css-loader@3.2.1_webpack@4.44.2/node_modules/css-loader/dist/cjs.js!../../../../../common/temp/node_modules/.pnpm/postcss-loader@3.0.0/node_modules/postcss-loader/src??postcss!./SPRteFormattingBar.css */ "kpJu");
var loader = __webpack_require__(/*! @microsoft/load-themed-styles */ "jOlS");

if(typeof content === "string") content = [[module.i, content]];

// add the styles to the DOM
for (var i = 0; i < content.length; i++) loader.loadStyles(content[i][1], true);

if(content.locals) module.exports = content.locals;

/***/ }),

/***/ "Hw4Z":
/*!******************************************!*\
  !*** ./lib/rte/ckeditor/CKTextEditor.js ***!
  \******************************************/
/*! exports provided: CKTextEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CKTextEditor", function() { return CKTextEditor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/office-ui-fabric-react-bundle */ "KL1q");
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @microsoft/sp-diagnostics */ "ut3N");
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ms_sp_safehtml__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ms/sp-safehtml */ "NEVa");
/* harmony import */ var _ms_sp_safehtml__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ms_sp_safehtml__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _CKLoader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./CKLoader */ "fdBK");
/* harmony import */ var _CKTextEditor_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./CKTextEditor.scss */ "jQov");
/* harmony import */ var _CKTextEditor_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./CKTextEditor.types */ "bGc9");
/* harmony import */ var _common_ImageUtilities__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../common/ImageUtilities */ "x5Sg");
/* harmony import */ var _common_Flights__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../common/Flights */ "w4+A");
/* harmony import */ var _common_FormatTypes__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../common/FormatTypes */ "wSgF");
/* harmony import */ var _CKTableHelpers__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./CKTableHelpers */ "zvHu");
/* harmony import */ var _common_AllowedClassNames__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../common/AllowedClassNames */ "PhK/");
/* harmony import */ var _a11y_RteA11y__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../a11y/RteA11y */ "Qyis");
/* harmony import */ var _loc_RteStrings_resx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../loc/RteStrings.resx */ "okC0");
var _loc_RteStrings_resx__WEBPACK_IMPORTED_MODULE_14___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../loc/RteStrings.resx */ "okC0", 1);
/* harmony import */ var _ElementPath__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./ElementPath */ "wpGb");
/* harmony import */ var _common_TextParser__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../common/TextParser */ "7w0S");
/* harmony import */ var _common_KillSwitches__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../common/KillSwitches */ "+ORw");
/* harmony import */ var _common_Constants__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../common/Constants */ "R0eD");
/**
 * @copyright Microsoft Corporation. All rights reserved.
 */




















/**
 * Implementation of IRichTextEditor for CKEditor @4.5.11
 */
var CKTextEditor = /** @class */ (function () {
    function CKTextEditor(options, onReadyCallback) {
        var _this = this;
        this.tryMatchText = function (delegate, range) {
            if (!range) {
                var selection = _this._editor.getSelection();
                if (selection) {
                    var ranges = selection.getRanges();
                    if (ranges && ranges.length) {
                        range = ranges[0];
                    }
                }
            }
            if (range) {
                if (!range.collapsed) {
                    return undefined;
                }
                return CKEDITOR.plugins.textMatch.match(range, delegate);
            }
            return undefined;
        };
        this._handlePaste = function (evt) {
            var evtData = evt && evt.data;
            var pastedData = evtData && evt.data.dataValue;
            try {
                if (pastedData) {
                    // Sanitize the pasted html
                    pastedData = _ms_sp_safehtml__WEBPACK_IMPORTED_MODULE_4__["SafeHtml"].clean(pastedData);
                    pastedData = _this._handleHeadingsPaste(pastedData);
                    evt.data.dataValue = pastedData;
                }
                // On Table paste
                if (pastedData) {
                    if (_common_Flights__WEBPACK_IMPORTED_MODULE_9__["default"].isInlineImageEnabled() && pastedData.indexOf('data-cke-widget-wrapper') !== -1) {
                        evt.data.dataValue = pastedData;
                    }
                    else {
                        var tables = pastedData.match(CKTextEditor._TABLE_REGEX);
                        if (tables && tables.length > 0) {
                            // Log the table paste event
                            _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__["_EngagementLogger"].logEvent('Table.Paste');
                            var extraParagraph = '<p></p>';
                            // This makes sure we show a scroll bar on narrow devices
                            for (var _i = 0, tables_1 = tables; _i < tables_1.length; _i++) {
                                var table = tables_1[_i];
                                var outerDiv = new CKEDITOR.dom.element('div');
                                outerDiv.addClass(_CKTableHelpers__WEBPACK_IMPORTED_MODULE_11__["default"].canvasRteResponsiveTableClassName);
                                outerDiv.setHtml(table);
                                var getTables = outerDiv.getElementsByTag('table');
                                var tableElement = getTables && getTables.getItem(0);
                                if (tableElement) {
                                    if (tableElement.hasAttribute('style')) {
                                        tableElement.removeAttribute('style');
                                    }
                                    outerDiv = _CKTableHelpers__WEBPACK_IMPORTED_MODULE_11__["default"].wrapTableInDiv(tableElement, outerDiv);
                                    var selection = _this._editor.getSelection();
                                    if (selection) {
                                        var startElement = selection.getStartElement();
                                        var parent_1 = _CKTableHelpers__WEBPACK_IMPORTED_MODULE_11__["default"].findParent(startElement, _CKTableHelpers__WEBPACK_IMPORTED_MODULE_11__["default"].tableWrapperDivClass);
                                        if (parent_1 ||
                                            (startElement && startElement.hasClass(_CKTableHelpers__WEBPACK_IMPORTED_MODULE_11__["default"].tableWrapperDivClass))) {
                                            // Stop the event to prevent default table paste, inserting instead
                                            evt.stop();
                                            _CKTableHelpers__WEBPACK_IMPORTED_MODULE_11__["default"].insertTableAfterWrapper(startElement, outerDiv, parent_1, _this._editor);
                                        }
                                    }
                                }
                                pastedData = pastedData.replace(table, outerDiv.getOuterHtml());
                            }
                            // Cursor positioning around tables is difficult. We add extra paragraphs before and after to reduce friction.
                            pastedData = extraParagraph + pastedData + extraParagraph;
                            evt.data.dataValue = pastedData;
                            if (!_common_Flights__WEBPACK_IMPORTED_MODULE_9__["default"].isInlineImageEnabled()) {
                                _this._onImagePasteInsideTable(pastedData);
                            }
                        }
                        if (!_common_Flights__WEBPACK_IMPORTED_MODULE_9__["default"].isInlineImageEnabled()) {
                            var imageRegexWithSrc = CKTextEditor._IMAGE_REGEX_WITH_SRC;
                            var imagesWithSrc = pastedData.match(imageRegexWithSrc);
                            pastedData = _this._removeExtraSpaceFromImageTag(pastedData);
                            if (imagesWithSrc && imagesWithSrc.length > 0) {
                                _this._onImagePasteInDataValue(evt, imagesWithSrc, pastedData);
                            }
                            else if (_this._onImagePasteCallBack) {
                                // Check if image is pasted without src
                                var imagesWithoutSrc = pastedData.match(CKTextEditor._IMAGE_REGEX_WITHOUT_CLOSING_TAG);
                                if (imagesWithoutSrc) {
                                    _this._onImagePasteCallBack({
                                        isImageValid: false,
                                        errorCode: 2 /* InvalidImageSource */
                                    });
                                }
                            }
                        }
                        // evt.data.dataValue is not used because copied hyperlinks include <a> tag
                        var pastedUrl = '';
                        if (evtData && evt.data.dataTransfer && evt.data.dataTransfer.getData('Text')) {
                            pastedUrl = _ms_sp_safehtml__WEBPACK_IMPORTED_MODULE_4__["SafeHtml"].clean(evt.data.dataTransfer.getData('Text'));
                        }
                        _this._linkContentHandler(evt, pastedUrl);
                    }
                }
                else if (!_common_Flights__WEBPACK_IMPORTED_MODULE_9__["default"].isInlineImageEnabled() &&
                    evt.data.dataTransfer &&
                    // if drag & drop kill switch is not activated and method is drop
                    // then we don't want to enter this loop because that will create 2 images
                    evt.data.method !== 'drop') {
                    // We don't want to support both files and pasted data because pasting tables from powerpoint and
                    // excel In Edge pastes table as image file that in not desirable behavior
                    for (var i = 0; i < evt.data.dataTransfer.getFilesCount(); i++) {
                        _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__["_EngagementLogger"].logEvent(CKTextEditor._IMAGE_PASTE);
                        _this._onImagePasteInChrome(evt.data.dataTransfer.getFile(i));
                    }
                }
                // After paste is buggy and does not get called every time. Adding this to make sure
                // the spinner goes away
                _this._handleAfterPaste();
            }
            catch (error) {
                if (_this._pasteQosMonitor) {
                    _this._pasteQosMonitor.writeUnexpectedFailure('PasteInRTEFailed', error);
                    _this._pasteQosMonitor = undefined;
                }
            }
        };
        this._initAutocomplete = function (itemsLimit) {
            if (itemsLimit === void 0) { itemsLimit = 20; }
            if (_this._autocompletePageSuggestions && _this._autocompleteHTMLToInsert) {
                var topicDefinition = !Object(_common_KillSwitches__WEBPACK_IMPORTED_MODULE_17__["updateTopicPickerTooltipKSActivated"])()
                    ? '<div class="pageLabel suggestedTopicDefinition" title={definition}>{definition}</div>'
                    : '<div class="pageLabel suggestedTopicDefinition">{definition}</div>';
                var suggestedTopicClass = Object(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_1__["css"])(!Object(_common_KillSwitches__WEBPACK_IMPORTED_MODULE_17__["headerForTopicPickerKSActivated"])() && Object(_common_KillSwitches__WEBPACK_IMPORTED_MODULE_17__["isRTENewTopicEntryKSActivated"])()
                    ? ' marginForSuggestionWithHeader-{suggestionType}'
                    : '', !Object(_common_KillSwitches__WEBPACK_IMPORTED_MODULE_17__["fixMissingSpaceInAutoCompleteKSActivated"])() ? ' suggestedTopicContainer' : 'suggestedTopicContainer');
                var configs = {
                    textTestCallback: function (range) {
                        if (_this._autocompleteRegexMatches) {
                            for (var _i = 0, _a = _this._autocompleteRegexMatches; _i < _a.length; _i++) {
                                var match = _a[_i];
                                if (match) {
                                    // If tryMatchText doesn't have a match the object will be undefined.
                                    // this will return the first successful match.
                                    var regexMatch = _this.tryMatchText(match, range);
                                    if (regexMatch) {
                                        return regexMatch;
                                    }
                                }
                            }
                        }
                        else {
                            // Don't do anything if _autocompleteRegexMatches is null.
                            return undefined;
                        }
                    },
                    dataCallback: _this._autocompletePageSuggestions,
                    itemsLimit: itemsLimit,
                    itemTemplate: _ms_sp_safehtml__WEBPACK_IMPORTED_MODULE_4__["SafeHtml"].clean(!Object(_common_KillSwitches__WEBPACK_IMPORTED_MODULE_17__["updatedAriaAttributesKSActivated"])()
                        ? '<li data-id="{id}" data-is-new-created-topic={isNewCreatedTopic} class="suggestionItemContainer' +
                            suggestedTopicClass +
                            '" title="{name}" aria-label="{name}" role="option"><div class="pageLabel">{name}' +
                            topicDefinition +
                            '</div></li>'
                        : '<li data-id="{id}" data-is-new-created-topic={isNewCreatedTopic} class="suggestionItemContainer' +
                            suggestedTopicClass +
                            '" title="{name}"><div class="pageLabel">{name}' +
                            topicDefinition +
                            '</div></li>')
                };
                _this._pagePickerAutocomplete = new CKEDITOR.plugins.autocomplete(_this._editor, configs);
                _this._pagePickerAutocomplete.getHtmlToInsert = _this._autocompleteHTMLToInsert;
                _this._pagePickerAutocomplete.view.element.setAttribute('data-automation-id', 'inLinePagePicker');
                if (!Object(_common_KillSwitches__WEBPACK_IMPORTED_MODULE_17__["updatedAriaAttributesKSActivated"])()) {
                    _this._pagePickerAutocomplete.view.element.setAttribute('ariaLabel', _loc_RteStrings_resx__WEBPACK_IMPORTED_MODULE_14__["Topics"]);
                    _this._pagePickerAutocomplete.view.element.setAttribute('role', 'listbox');
                }
                var topicStyle = _this._pagePickerAutocomplete.view.element.getAttribute('class') + ' suggestedTopicPanel';
                _this._pagePickerAutocomplete.view.element.setAttribute('class', topicStyle);
                // https://ckeditor.com/docs/ckeditor4/latest/api/CKEDITOR_plugins_autocomplete_view.html
                _this._pagePickerAutocomplete.view.on('change-selectedItemId', function (evt) {
                    return _this._handleSelectPagePicker(evt, _this);
                });
                // https://ckeditor.com/docs/ckeditor4/latest/api/CKEDITOR_plugins_autocomplete_model.html
                _this._pagePickerAutocomplete.model.on('change-selectedItemId', function (evt) {
                    return _this._handleSelectPagePicker(evt, _this);
                });
                var self_1 = _this;
                if (!Object(_common_KillSwitches__WEBPACK_IMPORTED_MODULE_17__["isRTENewTopicEntryKSActivated"])() && _this._onAutoCompleteKeydown) {
                    var autoComplete = _this._pagePickerAutocomplete;
                    var originalOnKeyDown_1 = autoComplete.onKeyDown.bind(autoComplete);
                    autoComplete.onKeyDown = function onKeyDown(evt) {
                        var _a, _b;
                        var skipOriginalHandler = (_b = (_a = self_1)._onAutoCompleteKeydown) === null || _b === void 0 ? void 0 : _b.call(_a, evt, this);
                        if (!skipOriginalHandler) {
                            originalOnKeyDown_1(evt);
                        }
                    };
                }
            }
        };
        this._handleTextChange = function () {
            if (_this._onTextChange) {
                _this._onTextChange();
            }
        };
        this._triggerChangeEvent = function () {
            try {
                var newData = _this._editor.getSnapshot();
                //  Checking if content changes can be skipped as change event does not guarantee
                //  this (see docs https://ckeditor.com/docs/ckeditor4/latest/api/CKEDITOR_editor.html#event-change).
                if (newData !== _this._currentComposedHTML) {
                    _this._currentComposedHTML = newData;
                    _this._editor.fire('change');
                    if (_this._changeEventQosMonitor && !_this._changeEventQosMonitor.hasEnded) {
                        _this._changeEventQosMonitor.writeSuccess();
                    }
                }
                else if (_this._changeEventQosMonitor && !_this._changeEventQosMonitor.hasEnded) {
                    _this._changeEventQosMonitor.writeExpectedFailure('DataNotChanged');
                }
            }
            catch (error) {
                if (_this._changeEventQosMonitor && !_this._changeEventQosMonitor.hasEnded) {
                    _this._changeEventQosMonitor.writeUnexpectedFailure('TriggerChangeEventFailed', error);
                }
            }
        };
        this._config = options.config;
        this._editorElement = options.editorElement;
        this._handleSelectionChange = options.selectionChangeCallback;
        this._onTextChange = options.textChangeCallback;
        this._onAutoCompleteKeydown = options.onAutoCompleteKeydown;
        this._onReadyCallback = onReadyCallback;
        this._startupFocus = options.startUpFocus || false;
        this._onImagePasteCallBack = options.onImagePasteCallBack;
        this._onImageMoveCallBack = options.onImageMoveCallBack;
        this._onPasteCallback = options.onPasteCallback;
        this._onEmbedPasteCallback = options.onEmbedPasteCallback;
        this._onContextMenuCallBack = options.onContextMenuCallBack;
        this._onHeadingPasteCallback = options.onHeadingPasteCallback;
        this._extraPlugins = 'justify,tableresize,indentblock,textmatch,autocomplete,textwatcher';
        if (_common_Flights__WEBPACK_IMPORTED_MODULE_9__["default"].isInlineImageEnabled()) {
            this._extraPlugins += ',inlineimage,widget';
        }
        this._async = new _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_1__["Async"](this);
        this._pageContext = options.pageContext;
        this._autocompleteRegexMatches = options.autocompleteRegexesMatch;
        this._autocompletePageSuggestions = options.autocompletePageSuggestions;
        this._autocompleteHTMLToInsert = options.autocompleteHTMLToInsert;
        this._insertLinkCallback = options.rteInsertLinkOnKeyDown;
        // CK editor 4.8.0 is calling state change event too many times which is
        // hanging IE. So we need to debounce the event handler.
        if (_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_3__["_BrowserDetection"].getBrowserInformation().browser === _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_3__["_Browser"].IE) {
            this._handleSelectionChange = this._async.debounce(this._handleSelectionChange, 100);
        }
        // Clicking inside the editor has become slow since this method gets called a lot.
        this._handleSelectionChangeConvert = this._async.debounce(this._handleSelectionChangeConvert, 100);
        this._initialize(options.currentHTML);
        this._blockStyles = this._config.supportedFormatsArray.filter(function (format) {
            return format.isBlockStyle;
        });
    }
    /**
     * Preload ck editor
     */
    CKTextEditor.preloadEditor = function () {
        try {
            // Using 'void' to indicate we are not interested in the returned value.
            // This is an expected floating promise because we're trying to pre-load the CKEditor module without using it.
            // When next time the loadModule is called, the CKEditor module will be ready to use.
            void CKTextEditor.moduleLoader.loadModule();
        }
        catch (error) {
            _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__["_TraceLogger"].logError(CKTextEditor.logSource, error);
        }
    };
    /**
     * @return Promise of the instance that resolves once the editor is loaded on the element
     *
     * Static wrapper for constructing an instance
     */
    CKTextEditor.createNewEditor = function (options) {
        return new Promise(function (resolve) {
            CKTextEditor.moduleLoader
                .loadModule()
                .then(function () {
                var editor = new CKTextEditor(options, function () { return resolve(editor); });
            })
                .catch(function (error) {
                _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__["_TraceLogger"].logError(CKTextEditor.logSource, error);
            });
        });
    };
    CKTextEditor._isExternalImage = function (src) {
        return Boolean(src && src.indexOf('file://') === -1);
    };
    CKTextEditor._isOnlineImage = function (src) {
        var _a, _b;
        // We only want to allow paste from a secure connection. Logging http
        // to estimate how many times user attempts to paste from http
        if ((_a = src) === null || _a === void 0 ? void 0 : _a.indexOf('http://')) {
            _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__["_EngagementLogger"].logEvent('Image.HttpPaste');
        }
        return Boolean(((_b = src) === null || _b === void 0 ? void 0 : _b.indexOf('https://')) !== -1);
    };
    CKTextEditor._getSelectedLink = function (editor) {
        var selection = editor.getSelection();
        var selectedElement = selection.getSelectedElement();
        if (!selectedElement || !selectedElement.is('a')) {
            var ranges = selection.getRanges();
            if (ranges && ranges.length) {
                ranges[0].shrink(CKEDITOR.SHRINK_TEXT);
                selectedElement = editor.elementPath(ranges[0].getCommonAncestor()).contains('a', true);
            }
        }
        return selectedElement;
    };
    CKTextEditor._getSelectedText = function (editor) {
        var sel = editor.getSelection();
        if (sel) {
            var startElement = sel.getStartElement();
            // Return the start element inner text if it is already a link
            if (startElement) {
                var startElementValue = startElement.$;
                if (startElement && startElement.getName() === 'a') {
                    return startElementValue.innerText;
                }
            }
            // Otherwise, just return the selected text
            return sel.getSelectedText();
        }
        else {
            return undefined;
        }
    };
    CKTextEditor._isImagePastedInsideTagWithMultiplePasteEnabled = function (firstString, secondString, openingTagRegex, closingTagRegex) {
        return !!((firstString.match(closingTagRegex) && !firstString.match(openingTagRegex)) ||
            (!secondString.match(closingTagRegex) && secondString.match(openingTagRegex)));
    };
    CKTextEditor._stripOutImageSource = function (content, imageSrc) {
        return content.replace(imageSrc, '');
    };
    CKTextEditor._headingsRegex = function (dynamicValue) {
        return new RegExp("<s*h" + dynamicValue + "[^>]*>(.*?)<s*/s*h" + dynamicValue + ">", 'gi');
    };
    Object.defineProperty(CKTextEditor, "_imageRegex", {
        get: function () {
            return CKTextEditor._IMAGE_REGEX;
        },
        enumerable: true,
        configurable: true
    });
    CKTextEditor.prototype.clearFormatting = function (start, end) {
        // Remove format command in ck editor only removes inline formats
        this.format(start, end, { removeFormat: true });
        // To remove block formats as well, we need to clear formats manually
        var sel = this._editor.getSelection();
        if (sel) {
            var ckRange = sel.getRanges();
            if (ckRange && ckRange.length > 0) {
                var formatsToClear = {};
                for (var _i = 0, _a = this._blockStyles; _i < _a.length; _i++) {
                    var format = _a[_i];
                    formatsToClear[format.editorKey] = false;
                }
                this.format(start, end, formatsToClear, true);
            }
        }
    };
    CKTextEditor.prototype.destroy = function () {
        var data = this._editor.getData();
        this._editor.destroy();
        return data;
    };
    CKTextEditor.prototype.focus = function () {
        this._editor.focus();
    };
    CKTextEditor.prototype.removeSelectedElement = function () {
        var selectedElement = this._editor.getSelection().getStartElement().$;
        if (selectedElement.parentElement !== null &&
            selectedElement.nextSibling === null &&
            selectedElement.previousSibling === null) {
            selectedElement.parentElement.remove();
        }
        else {
            selectedElement.remove();
        }
    };
    CKTextEditor.prototype.getSelectedLink = function () {
        var selectedLink = CKTextEditor._getSelectedLink(this._editor);
        var link;
        if (selectedLink && selectedLink.$) {
            link = selectedLink.$.getAttribute('href');
        }
        return link || '';
    };
    CKTextEditor.prototype.getSelectedLinkAttribute = function (attribute) {
        var selectedLink = CKTextEditor._getSelectedLink(this._editor);
        if (selectedLink && selectedLink.$) {
            return selectedLink.$.getAttribute(attribute);
        }
        else {
            // Return null to keep consistent with Element.getAttribute.
            return null; // tslint:disable-line:no-null-keyword
        }
    };
    Object.defineProperty(CKTextEditor.prototype, "isTableSelected", {
        get: function () {
            var sel = this._editor.getSelection();
            var startElement = sel && sel.getStartElement();
            return Boolean(startElement && startElement.getName() === 'table');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CKTextEditor.prototype, "isTableContentsSelected", {
        get: function () {
            var sel = this._editor.getSelection();
            var startElement = sel && sel.getStartElement();
            return Boolean(startElement && startElement.getAscendant('table'));
        },
        enumerable: true,
        configurable: true
    });
    CKTextEditor.prototype.isTableStyleApplied = function (className) {
        var sel = this._editor.getSelection();
        var startElement = sel && sel.getStartElement();
        var table = startElement && startElement.getAscendant('table');
        return Boolean(table && table.hasClass(className));
    };
    /**
     * @param start - Start position of selection
     * @param end - End position of selection
     * @param formats - Map of key:value pairs for formats to apply
     * @param applyAllFormatsToLine - Forces all formats to be applied to the whole line(s). If not provided,
     * formats are divided into two buckets (line vs non-line) based on their isLine field
     *
     * A unified method for applying formats to any selection
     */
    CKTextEditor.prototype.format = function (start, end, formats, applyAllFormatsToLine) {
        /* tslint:disable-next-line:forin */
        for (var formatKey in formats) {
            var command = this._editor.getCommand(formatKey);
            if (command) {
                if (formats[formatKey] !== (command.state === CKEDITOR.TRISTATE_ON)) {
                    if (formatKey === 'link') {
                        if (formats[formatKey] === false) {
                            // Unlink
                            this._editor.execCommand(formatKey, formats[formatKey]);
                        }
                        else {
                            var linkProps = {
                                linkValue: formats[formatKey],
                                linkText: formats[CKTextEditor._TEXT_FORMAT_KEY],
                                shouldOpenInNewTab: formats[CKTextEditor._TAB_FORMAT_KEY]
                            };
                            linkProps.linkClass = formats[CKTextEditor._CLASS_FORMAT_KEY];
                            linkProps.linkId = formats[CKTextEditor._LINK_ID_FORMAT_KEY];
                            linkProps.placeHolderLinkTitle = formats[CKTextEditor._LINK_PLACEHOLDER_KEY];
                            this._editor.execCommand(formatKey, linkProps);
                        }
                    }
                    else {
                        this._editor.execCommand(formatKey, formats[formatKey]);
                    }
                }
            }
        }
    };
    CKTextEditor.prototype.getBounds = function (position) {
        var left = 0, top = 0;
        // We are using window's selection object rather than CK editor because
        // the one coming from editor is not accurate
        var selection = window.getSelection();
        if (selection && selection.rangeCount > 0) {
            var range = selection.getRangeAt(0);
            var selectionRect = range && range.getBoundingClientRect();
            if (selectionRect) {
                var editorRect = this._editorElement.getBoundingClientRect();
                left = selectionRect.left - editorRect.left;
                top = selectionRect.top - editorRect.top;
            }
        }
        return { left: left, top: top };
    };
    CKTextEditor.prototype.getFormatValue = function (start, end, format) {
        if (format.key === 'link') {
            var selectedLink = CKTextEditor._getSelectedLink(this._editor);
            return selectedLink ? selectedLink.getAttribute('href') : false;
        }
        return false;
    };
    CKTextEditor.prototype.getSelection = function () {
        var sel = this._editor.getSelection();
        if (sel) {
            var ranges = sel ? sel.getRanges() : undefined;
            if (ranges && ranges.length) {
                if (this._editor.element.contains(ranges[0].getCommonAncestor())) {
                    this._lastSelectedRanges = ranges;
                }
                return {
                    start: ranges[0].startOffset,
                    startContainerPath: Object(_ElementPath__WEBPACK_IMPORTED_MODULE_15__["generateElementPath"])(ranges[0].root, ranges[0].startContainer),
                    end: ranges[0].endOffset,
                    endContainerPath: Object(_ElementPath__WEBPACK_IMPORTED_MODULE_15__["generateElementPath"])(ranges[0].root, ranges[0].endContainer),
                    text: CKTextEditor._getSelectedText(this._editor)
                };
            }
        }
        return undefined;
    };
    CKTextEditor.prototype.getText = function (range) {
        return this._editor.getData();
    };
    CKTextEditor.prototype.setData = function (innerHTML, callback) {
        var options = {
            noSnapshot: true,
            callback: callback
        };
        this._editor.setData(innerHTML, options);
    };
    CKTextEditor.prototype.getHTML = function () {
        return this._editor.getData();
    };
    /**
     * @param format - Name of the format to apply from SPRTE_FORMATS
     * @param start - Start value of range
     * @param end - End value of range
     *
     * @return A dictionary of string=>boolean indicating if the format is applied to the given range
     */
    CKTextEditor.prototype.isFormatAppliedToRange = function (start, end, format) {
        // CKEditor is not refreshing the align table command correctly so we have to do this manually
        this._updateTableAlignCommandState();
        var command = this._editor.getCommand(format.editorKey);
        return command && command.state === CKEDITOR.TRISTATE_ON;
    };
    CKTextEditor.prototype.onReady = function (callback) {
        this._onReadyCallback = callback;
    };
    CKTextEditor.prototype.setSelection = function (range) {
        this._editorElement.focus({ preventScroll: true });
        var sel = this._editor.getSelection();
        if (sel) {
            // This is setting the offset of selectedElement if it exists
            var ckRange = sel.getRanges();
            if (ckRange && ckRange.length > 0 && range.start !== -1) {
                try {
                    var startContainerPath = range.startContainerPath, endContainerPath = range.endContainerPath, start = range.start, end = range.end;
                    if (startContainerPath &&
                        startContainerPath.length &&
                        endContainerPath &&
                        endContainerPath.length) {
                        var startContainer = Object(_ElementPath__WEBPACK_IMPORTED_MODULE_15__["getElementFromPath"])(ckRange[0].root, startContainerPath);
                        var endContainer = Object(_ElementPath__WEBPACK_IMPORTED_MODULE_15__["getElementFromPath"])(ckRange[0].root, endContainerPath);
                        if (startContainer && endContainer) {
                            ckRange[0].setStart(startContainer, start);
                            ckRange[0].setEnd(endContainer, end);
                            ckRange[0].select();
                            sel.selectRanges(ckRange);
                        }
                    }
                }
                catch (error) {
                    _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__["_TraceLogger"].logError(CKTextEditor.logSource, error);
                }
            }
        }
    };
    Object.defineProperty(CKTextEditor.prototype, "appliedFontSize", {
        get: function () {
            var fontSizeStr = this._getCssPropertyValue('font-size');
            if (fontSizeStr) {
                var fontArr = fontSizeStr ? fontSizeStr.split('px') : undefined;
                if (fontArr) {
                    return fontArr[0];
                }
            }
            return undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CKTextEditor.prototype, "appliedFontColor", {
        get: function () {
            return this._appliedPropertyValue('color');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CKTextEditor.prototype, "noColor", {
        get: function () {
            return 'noColor';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CKTextEditor.prototype, "appliedHighlightColor", {
        get: function () {
            return this._appliedPropertyValue('background-color');
        },
        enumerable: true,
        configurable: true
    });
    CKTextEditor.prototype.isContainerInList = function () {
        var selection = this._editor.getSelection();
        if (selection) {
            var ranges = selection.getRanges();
            if (ranges && ranges.length) {
                var parentNode = ranges[0].startContainer.$.parentNode;
                return parentNode ? parentNode.nodeName === 'LI' : false;
            }
        }
        return false;
    };
    CKTextEditor.prototype.deleteContentsInContainer = function (regex, startContainer) {
        if (!startContainer) {
            var selection = this._editor.getSelection();
            if (selection) {
                var ranges = selection.getRanges();
                if (ranges && ranges.length) {
                    startContainer = ranges[0].startContainer;
                }
            }
        }
        if (startContainer) {
            var oldText = startContainer.$.textContent || '';
            var newText = _common_TextParser__WEBPACK_IMPORTED_MODULE_16__["TextParser"].removeZeroWidthSpaces(oldText).replace(regex, '');
            startContainer.setText(newText);
        }
    };
    /**
     * Insert custom suggestion into RTE content
     */
    CKTextEditor.prototype.handleCustomAutoCompleteSuggestion = function (data) {
        if (this._pagePickerAutocomplete) {
            this._pagePickerAutocomplete.model.data = [data];
            try {
                this._pagePickerAutocomplete.model.fire('change-data', this._pagePickerAutocomplete.model.data);
                this._pagePickerAutocomplete.commit(data.id);
            }
            catch (error) {
                _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__["_TraceLogger"].logError(CKTextEditor.logSource, error, 'handleCustomAutoCompleteSuggestionFailed');
            }
        }
    };
    CKTextEditor.prototype._initialize = function (currentHTML) {
        this._editorElement.contentEditable = 'true';
        var pluginsToBeRemoved = 'menubutton,scayt,liststyle,magicline,link';
        // data-interception is used to override fast routing and force open page in new tab.
        var config = {
            allowedContent: 'strong b em i u h2 h3 h4 blockquote ul ol li a[href, target, data-interception, data-sprte-link];\
        p li(ql-align-*,ql-indent-*,quote-true); *{text-align}; pre',
            on: {
                change: this._handleTextChange,
                selectionChange: this._handleSelectionChangeConvert
            },
            // CK editor 4.7.0 requires toolbar as necessary plugin.
            removePlugins: pluginsToBeRemoved,
            extraPlugins: 'justify,textmatch',
            removeButtons: '',
            stylesSet: false,
            toolbar: [],
            startupFocus: this._startupFocus
        };
        if (config.on) {
            config.on.key = this._handleKeyDown.bind(this);
        }
        // An exclamation mark (!) used before !href in the property list means that it is required
        // If an element does not have it, this rule should not be applied, the <a> tag will be removed.
        config.allowedContent = {
            'strong b em i u s sub sup': true,
            'p h2 h3 h4 blockquote ul ol li pre': {
                styles: 'text-align, margin-left, margin-right'
            },
            a: {
                attributes: 'title, !href, target, data-interception, data-sprte-link',
                classes: [CKTextEditor.placeHolderLinkClass, CKTextEditor.wikiLinkClass]
            },
            span: {
                classes: _common_AllowedClassNames__WEBPACK_IMPORTED_MODULE_12__["spanClassNamesArray"].join(',')
            }
        };
        config.allowedContent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, config.allowedContent), { img: {
                attributes: 'src'
            } });
        /* If the flight is enabled for table paste, then add tables to allowed content
           Links, Lists and other formats are supported inside the table and tabbing allows you
           to create new rows */
        var allowedStyles = [
            'width',
            'border',
            'line-height',
            'margin-bottom',
            'margin-top',
            'margin-left',
            'margin-right',
            'font-size',
            'border-bottom',
            'border-left',
            'border-top',
            'border-right',
            'text-align',
            'vertical-align',
            'white-space'
        ].join(',');
        var divClasses = [
            _CKTableHelpers__WEBPACK_IMPORTED_MODULE_11__["default"].canvasRteResponsiveTableClassName,
            _CKTableHelpers__WEBPACK_IMPORTED_MODULE_11__["default"].tableWrapperDivClass,
            _CKTableHelpers__WEBPACK_IMPORTED_MODULE_11__["default"].tableLeftAlign,
            _CKTableHelpers__WEBPACK_IMPORTED_MODULE_11__["default"].tableCenterAlign,
            _CKTableHelpers__WEBPACK_IMPORTED_MODULE_11__["default"].tableRightAlign
        ];
        // When cleaning up the kill switch just add ',summary' to the table attributes line.
        var summaryAttribute = Object(_common_KillSwitches__WEBPACK_IMPORTED_MODULE_17__["allowSummaryAttributeKSActivated"])() ? '' : ',summary';
        config.extraAllowedContent = {
            'tbody thead tfoot tr th td caption col colgroup footer': true,
            table: {
                attributes: 'width,border,cellpadding,cellspacing,align' + summaryAttribute,
                styles: '*',
                classes: [
                    _CKTableHelpers__WEBPACK_IMPORTED_MODULE_11__["default"].canvasRteTableClassName,
                    'simpleTableStyleTheme,borderHeaderTableStyleTheme,filledHeaderTableStyleTheme,bandedRowTableStyleTheme,\
            bandedRowColumnTableStyleTheme,simpleTableStyleNeutral,borderHeaderTableStyleNeutral,\
            filledHeaderTableStyleNeutral,bandedRowTableStyleNeutral,bandedRowColumnTableStyleNeutral'
                ].join(',')
            },
            tr: {
                attributes: 'height,rowspan,colspan,align',
                styles: allowedStyles
            },
            td: {
                attributes: 'width,colspan,rowspan,align,valign',
                styles: allowedStyles
            },
            th: {
                attributes: 'align,valign',
                styles: allowedStyles
            },
            'td p': {
                attributes: 'align',
                styles: 'text-align'
            },
            'th p': {
                attributes: 'align',
                styles: 'text-align'
            },
            div: {
                attributes: _common_Flights__WEBPACK_IMPORTED_MODULE_9__["default"].isInlineImageEnabled()
                    ? 'data-instance-id,data-webpart-id,contenteditable'
                    : undefined,
                classes: _common_Flights__WEBPACK_IMPORTED_MODULE_9__["default"].isInlineImageEnabled()
                    ? Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(divClasses, [
                        'webPartInRte',
                        'webPartInRteInlineImage',
                        'webPartInRteAlignLeft',
                        'webPartInRteAlignRight',
                        'webPartInRteAlignCenter'
                    ]).join(',')
                    : divClasses.join(','),
                styles: 'display'
            }
        };
        // If the isTopicHashFlightEnabled append the hashtagged attribute to the <a>
        // also push the class for highlighting.
        if (_common_Flights__WEBPACK_IMPORTED_MODULE_9__["default"].isTopicHashtaggingEnabled(this._pageContext)) {
            config.allowedContent.a.attributes += ', data-sp-hashtagged-topic-id';
            config.allowedContent.a.classes.push(CKTextEditor.topicTagClass);
        }
        // These attributes are required for accessibility. This will allow the pasted table to retain
        // accessibility
        config.extraAllowedContent.th.attributes += ',scope,id';
        config.extraAllowedContent.td.attributes += ',headers';
        if (!Object(_common_KillSwitches__WEBPACK_IMPORTED_MODULE_17__["fixTableHeadersAccessibilityKSActivated"])()) {
            config.extraAllowedContent.th.attributes += "," + CKTextEditor.role;
            config.extraAllowedContent.td.attributes += "," + CKTextEditor.role;
        }
        /* Add key strokes for table manipulation operations. VSO#305254: Workaround we are doing to enable these
        operations is by disabling context menu in ckeditor.js file in temporary-patches. We will use that file until
        ck editor adds a config option to disable context menu in the next version */
        config.keystrokes = [
            [CKEDITOR.CTRL + CKEDITOR.SHIFT + 68, 'rowDelete'],
            [CKEDITOR.CTRL + CKEDITOR.SHIFT + 65, 'rowInsertBefore'],
            [CKEDITOR.CTRL + CKEDITOR.SHIFT + 90, 'rowInsertAfter'] // Ctrl+Shift+Z
        ];
        // VSO#372510: CK Editor4.7.0 does provide this option but it doesnt work well. I have
        // kept this for reference but I still have to do hack of removing context menu
        // from ckeditor.js
        config.enableContextMenu = false;
        config.disallowedContent = 'script; *[on*]';
        config.extraPlugins = this._extraPlugins;
        config.disableNativeSpellChecker = false;
        this._editor = CKEDITOR.inline(this._editorElement, config);
        this._editor.setData(currentHTML);
        this._addCustomToolbarCommands(currentHTML);
    };
    CKTextEditor.prototype._addCustomToolbarCommands = function (html) {
        var _this = this;
        // Add our own link and unlink command
        this._editor.addCommand('unlink', {
            exec: function (editor) {
                var linkStyle = new CKEDITOR.style({
                    element: 'a',
                    type: CKEDITOR.STYLE_INLINE,
                    alwaysRemoveElement: 1
                });
                editor.removeStyle(linkStyle);
                return true;
            }
        });
        this._editor.addCommand('link', {
            contextSensitive: true,
            exec: function (editor, data) {
                if (!data || (!data.linkText && !data.linkValue)) {
                    editor.execCommand('unlink');
                }
                else {
                    var linkValue = data.linkValue, placeHolderLinkTitle = data.placeHolderLinkTitle;
                    var elem = CKTextEditor._getSelectedLink(editor);
                    if (elem) {
                        elem.setAttribute('href', linkValue);
                        elem.setAttribute('data-cke-saved-href', linkValue);
                        elem.setText(data.linkText);
                        elem.setAttribute('target', '_blank');
                        elem.setAttribute(_CKTextEditor_types__WEBPACK_IMPORTED_MODULE_7__["HTMLAttribute"].Title, linkValue);
                        if (placeHolderLinkTitle) {
                            elem.setAttribute(_CKTextEditor_types__WEBPACK_IMPORTED_MODULE_7__["HTMLAttribute"].Class, CKTextEditor.placeHolderLinkClass);
                        }
                        // data-interception is used to override fast routing and force open page in new tab.
                        elem.setAttribute('data-interception', data.shouldOpenInNewTab ? 'off' : 'on');
                        elem.setAttribute('target', data.shouldOpenInNewTab ? '_blank' : '_self');
                    }
                    else {
                        var shouldOpenInNewTabProps = {};
                        shouldOpenInNewTabProps = {
                            target: data.shouldOpenInNewTab ? '_blank' : '_self',
                            'data-interception': data.shouldOpenInNewTab ? 'off' : 'on'
                        };
                        // tslint:disable-next-line:no-any
                        var attributes = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ href: linkValue, 'data-cke-saved-href': linkValue, target: '_blank' }, shouldOpenInNewTabProps);
                        attributes[_CKTextEditor_types__WEBPACK_IMPORTED_MODULE_7__["HTMLAttribute"].Title] = data.linkValue;
                        if (data.linkId) {
                            attributes[_CKTextEditor_types__WEBPACK_IMPORTED_MODULE_7__["HTMLAttribute"].DataLink] = data.linkId;
                            if (placeHolderLinkTitle) {
                                attributes[_CKTextEditor_types__WEBPACK_IMPORTED_MODULE_7__["HTMLAttribute"].Class] = CKTextEditor.placeHolderLinkClass;
                            }
                        }
                        var linkStyle = new CKEDITOR.style({
                            name: 'link',
                            element: 'a',
                            type: CKEDITOR.STYLE_INLINE,
                            attributes: attributes
                        });
                        // If the linkText is not the selected text, create a new dom element and insert it in the editor
                        if (CKTextEditor._getSelectedText(editor) !== data.linkText || data.linkText === '') {
                            var element = new CKEDITOR.dom.element('a');
                            if (data.linkText && data.linkText !== '') {
                                element.setText(data.linkText);
                            }
                            else {
                                // Insert the new element with text same as url
                                element.setText(linkValue);
                            }
                            element.setAttributes(attributes);
                            editor.insertElement(element);
                        }
                        else {
                            editor.applyStyle(linkStyle);
                        }
                    }
                }
                return true;
            },
            refresh: function (editor, path) {
                var element = path.lastElement && path.lastElement.getAscendant('a', true);
                if (element && element.getName() === 'a' && element.getAttribute('href') && element.getChildCount()) {
                    this.setState(CKEDITOR.TRISTATE_ON);
                }
                else {
                    this.setState(CKEDITOR.TRISTATE_OFF);
                }
            }
        });
        this._editor.addCommand('fontSize', {
            contextSensitive: true,
            exec: function (editor, size) {
                // Remove the typecast when fluent flight is graduated
                var mappedValue = CKTextEditor._fluentFontSizeMap.get(size);
                var sizeStyle = new CKEDITOR.style({
                    element: 'span',
                    attributes: { class: "fontSize" + mappedValue },
                    overrides: [{ element: 'span', attributes: { class: /^fontSize/ } }]
                });
                editor.applyStyle(sizeStyle);
                return true;
            }
        });
        if (_common_Flights__WEBPACK_IMPORTED_MODULE_9__["default"].isInlineImageEnabled()) {
            this._editor.addCommand('imagePasteInline', {
                contextSensitive: true,
                exec: function (editor, data) {
                    // Remove the typecast when fluent flight is graduated
                    if (_this._onImagePasteCallBack) {
                        _this._onImagePasteCallBack({
                            isImageValid: true,
                            imageBlob: data.imageSrc,
                            container: data.imageDiv
                        });
                    }
                    return true;
                }
            });
            this._editor.addCommand('imageMove', {
                contextSensitive: true,
                exec: function (editor, data) {
                    _this._isImageMoved = true;
                    _this._currentlyMovingWebPartInstanceId = data.instanceId;
                    return true;
                }
            });
        }
        this._editor.addCommand('customTable', {
            exec: function (editor, tableData) {
                var table = new CKEDITOR.dom.element('table');
                var tbody = new CKEDITOR.dom.element('tbody');
                var tr = new CKEDITOR.dom.element('tr');
                var outerDiv = new CKEDITOR.dom.element('div');
                outerDiv.addClass(_CKTableHelpers__WEBPACK_IMPORTED_MODULE_11__["default"].canvasRteResponsiveTableClassName);
                for (var j = 0; j < tableData.columns; ++j) {
                    var td = new CKEDITOR.dom.element('td');
                    // Appending a br makes the tr in Edge start out at the appropriate height.
                    var br = new CKEDITOR.dom.element('br');
                    br.appendTo(td);
                    td.appendTo(tr);
                }
                tr.appendTo(tbody);
                for (var i = 1; i < tableData.rows; ++i) {
                    var trCopy = tr.clone(true, true);
                    trCopy.appendTo(tbody);
                }
                tbody.appendTo(table);
                table.setAttribute('title', _loc_RteStrings_resx__WEBPACK_IMPORTED_MODULE_14__["TableTitle"]);
                outerDiv = _CKTableHelpers__WEBPACK_IMPORTED_MODULE_11__["default"].wrapTableInDiv(table, outerDiv);
                // We don't want to insert a table inside the same wrapper div as another table
                // because alignment will not function properly.
                // So we check if the cursor is in a table wrapping div and insert it after if so.
                var selection = editor.getSelection();
                if (selection) {
                    var startElement = selection.getStartElement();
                    var parent_2 = _CKTableHelpers__WEBPACK_IMPORTED_MODULE_11__["default"].findParent(startElement, _CKTableHelpers__WEBPACK_IMPORTED_MODULE_11__["default"].tableWrapperDivClass);
                    _CKTableHelpers__WEBPACK_IMPORTED_MODULE_11__["default"].insertTableAfterWrapper(startElement, outerDiv, parent_2, editor);
                }
                else {
                    _CKTableHelpers__WEBPACK_IMPORTED_MODULE_11__["default"].insertExtraParagraph(outerDiv);
                    editor.insertElement(outerDiv);
                }
                return true;
            }
        });
        this._editor.addCommand('tableCustomDelete', {
            exec: function (editor) {
                var editorElementPath = editor && editor.elementPath();
                var table = editorElementPath && editorElementPath.contains('table', true);
                if (table) {
                    var parent_3 = _CKTableHelpers__WEBPACK_IMPORTED_MODULE_11__["default"].findParent(table, _CKTableHelpers__WEBPACK_IMPORTED_MODULE_11__["default"].tableWrapperDivClass);
                    if (parent_3) {
                        parent_3.$.outerHTML = '';
                    }
                }
                return true;
            }
        });
        this._editor.addCommand('tableStyle', {
            contextSensitive: true,
            exec: function (editor, styleData) {
                var editorElementPath = editor && editor.elementPath();
                var table = editorElementPath && editorElementPath.contains('table', true);
                _CKTableHelpers__WEBPACK_IMPORTED_MODULE_11__["default"].setTableStyleAndSetAccessibleRoles(table, styleData.tableStyle, styleData.styleColor, editor);
                return true;
            }
        });
        // We need to add same three commands here because of different refresh status.
        // The buttons in the editor needs to know exactly which class is applied to indicate
        // which format is active.
        this._editor.addCommand('alignCenterTable', {
            contextSensitive: true,
            exec: function (editor, alignType) {
                _CKTableHelpers__WEBPACK_IMPORTED_MODULE_11__["default"].setTableAlignment(editor, alignType);
                return true;
            }
        });
        this._editor.addCommand('alignRightTable', {
            contextSensitive: true,
            exec: function (editor, alignType) {
                _CKTableHelpers__WEBPACK_IMPORTED_MODULE_11__["default"].setTableAlignment(editor, alignType);
                return true;
            }
        });
        this._editor.addCommand('alignLeftTable', {
            contextSensitive: true,
            exec: function (editor, alignType) {
                _CKTableHelpers__WEBPACK_IMPORTED_MODULE_11__["default"].setTableAlignment(editor, alignType);
                return true;
            }
        });
        this._editor.addCommand('fontColor', {
            contextSensitive: true,
            exec: function (editor, fontColor) {
                if (fontColor === _this.noColor) {
                    editor.execCommand('removeFontColor');
                }
                else {
                    var colorStyle = new CKEDITOR.style({
                        element: 'span',
                        attributes: { class: "fontColor" + fontColor },
                        overrides: [{ element: 'span', attributes: { class: /^fontColor/ } }],
                        childRule: function (element) {
                            // This makes sure that <a> tag wraps <span> so that font color gets applied
                            return !element.is('a');
                        }
                    });
                    editor.applyStyle(colorStyle);
                }
                return true;
            },
            refresh: function (editor, path) {
                var element = path.lastElement;
                if (element.getComputedStyle('color')) {
                    editor.getCommand('fontColor').setState(CKEDITOR.TRISTATE_ON);
                }
                else {
                    editor.getCommand('fontColor').setState(CKEDITOR.TRISTATE_OFF);
                }
            }
        });
        this._editor.addCommand('removeFontColor', {
            exec: function (editor) {
                var colorStyle = new CKEDITOR.style({
                    element: 'span',
                    attributes: { class: /^fontColor/ },
                    overrides: [{ element: 'span', attributes: { class: /^fontColor/ } }]
                });
                editor.removeStyle(colorStyle);
                return true;
            }
        });
        this._editor.addCommand('highlightColor', {
            contextSensitive: true,
            exec: function (editor, color) {
                if (color === _this.noColor) {
                    return editor.execCommand('removeHighlightColor');
                }
                else {
                    var colorStyle = new CKEDITOR.style({
                        element: 'span',
                        attributes: { class: "highlightColor" + color },
                        overrides: [{ element: 'span', attributes: { class: /^highlightColor/ } }]
                    });
                    editor.applyStyle(colorStyle);
                    return true;
                }
            }
        });
        this._editor.addCommand('removeHighlightColor', {
            contextSensitive: true,
            exec: function (editor) {
                var colorStyle = new CKEDITOR.style({
                    element: 'span',
                    attributes: { class: /^highlightColor/ },
                    overrides: [{ element: 'span', attributes: { class: /^highlightColor/ } }]
                });
                editor.removeStyle(colorStyle);
                return true;
            }
        });
        this._editor.addCommand('pre', {
            contextSensitive: true,
            exec: function (editor, applyFormat) {
                var preFormatStyle = new CKEDITOR.style({
                    element: 'pre'
                });
                // CK editor returns an object when false is passed to the command so we need
                // to explicitely check for 'true' rather than checking if applyFormat is set
                if (applyFormat === true) {
                    editor.applyStyle(preFormatStyle);
                }
                else {
                    editor.removeStyle(preFormatStyle);
                }
                return true;
            },
            refresh: function (editor, path) {
                var preCommand = 'pre';
                var element = path.lastElement && path.lastElement.getAscendant(preCommand, true);
                if (element && element.getName() === preCommand) {
                    editor.getCommand(preCommand).setState(CKEDITOR.TRISTATE_ON);
                }
                else {
                    editor.getCommand(preCommand).setState(CKEDITOR.TRISTATE_OFF);
                }
            }
        });
        this._editor.addCommand('heading2', this._getHeadingCommandDefinition('h2'));
        this._editor.addCommand('heading3', this._getHeadingCommandDefinition('h3'));
        this._editor.addCommand('heading4', this._getHeadingCommandDefinition('h4'));
        this._editor.on('blur', this._handleSelectionChangeConvert);
        this._editor.on('loaded', this._handlePluginsLoaded);
        this._editor.on('instanceReady', this._handleInstanceReady.bind(this, html));
        this._editor.on('paste', this._handlePaste);
        this._editor.on('beforePaste', this._onBeforePaste);
        this._editor.on('afterPaste', this._handleAfterPaste);
        var self = this;
        // For some reason, the handlers don't work here properly with ckeditor so we need to use
        // inline methods
        this._editor.on('contentDom', function () {
            this.editable().attachListener(this.editable(), 'contextmenu', function (evt) {
                var target = evt.data.getTarget() && evt.data.getTarget().$;
                if (target) {
                    var tagName = target.tagName;
                    var parentTagName = target.parentElement && target.parentElement.tagName;
                    if (tagName === 'TD' || parentTagName === 'TD') {
                        evt.stop();
                        evt.data.preventDefault();
                        if (self._onContextMenuCallBack) {
                            self._onContextMenuCallBack(true, target);
                        }
                    }
                }
            }, undefined, undefined, 0);
            var editableList = this.document.find('div.cke_editable');
            for (var editableIndex = 0; editableIndex < editableList.count(); editableIndex++) {
                var editable = editableList.getItem(editableIndex);
                var tableList = editable && editable.find('table');
                _CKTableHelpers__WEBPACK_IMPORTED_MODULE_11__["default"].constructTableComponentOnLoad(tableList, this);
            }
        });
    };
    CKTextEditor.prototype._handleSelectionChangeConvert = function (evt) {
        var sel = this._editor.getSelection();
        var newRange = undefined;
        var forceUpdate = false;
        if (evt) {
            switch (evt.name) {
                case 'selectionChange':
                    sel = evt.data.selection;
                    break;
                case 'blur':
                    sel = undefined;
                    break;
            }
            var ranges = sel ? sel.getRanges() : undefined;
            newRange =
                ranges && ranges.length
                    ? {
                        start: ranges[0].startOffset,
                        startContainerPath: Object(_ElementPath__WEBPACK_IMPORTED_MODULE_15__["generateElementPath"])(ranges[0].root, ranges[0].startContainer),
                        end: ranges[0].endOffset,
                        endContainerPath: Object(_ElementPath__WEBPACK_IMPORTED_MODULE_15__["generateElementPath"])(ranges[0].root, ranges[0].endContainer),
                        text: CKTextEditor._getSelectedText(this._editor)
                    }
                    : undefined;
            // Changes in selected element are invisible to SPRte, so we signal it through forceUpdate
            forceUpdate = Boolean(ranges &&
                ranges.length &&
                this._lastSelectedRanges &&
                this._lastSelectedRanges.length &&
                ranges[0].startContainer !== this._lastSelectedRanges[0].startContainer);
        }
        if (newRange || forceUpdate) {
            // This is getting called even while rendering RTE. We need to call this only when range changes
            // or we want to force update
            this._handleSelectionChange(newRange, forceUpdate);
        }
    };
    CKTextEditor.prototype._handleKeyDown = function (evt) {
        if (this._insertLinkCallback) {
            var url = this._insertLinkCallback(evt.data.keyCode);
            if (url && url.length) {
                this._linkContentHandler(evt, url);
            }
        }
    };
    CKTextEditor.prototype._isHeadingActive = function (tagName, path) {
        path = path || this._editor.elementPath();
        var element = path.lastElement && path.lastElement.getAscendant(tagName, true);
        return element && element.getName() === tagName;
    };
    CKTextEditor.prototype._getHeadingCommandDefinition = function (tagName) {
        var isHeadingActive = this
            ._isHeadingActive;
        return {
            contextSensitive: true,
            exec: function (editor) {
                var styleDef;
                switch (tagName) {
                    case 'h2':
                        styleDef = editor.config.format_h2;
                        break;
                    case 'h3':
                        styleDef = editor.config.format_h3;
                        break;
                    case 'h4':
                        styleDef = editor.config.format_h4;
                        break;
                }
                if (!styleDef) {
                    return false;
                }
                var style = new CKEDITOR.style(styleDef);
                if (isHeadingActive(tagName)) {
                    editor.removeStyle(style);
                }
                else {
                    editor.applyStyle(style);
                }
                return true;
            },
            refresh: function (editor, path) {
                this.setState(isHeadingActive(tagName, path) ? CKEDITOR.TRISTATE_ON : CKEDITOR.TRISTATE_OFF);
            }
        };
    };
    CKTextEditor.prototype._handlePluginsLoaded = function (evt) {
        var _loop_1 = function (command) {
            if (this_1._config.supportedFormatsArray.filter(function (format) {
                return format.editorKey === command;
            }).length) {
                this_1._editor.commands[command].on('state', this_1._handleSelectionChangeConvert);
            }
        };
        var this_1 = this;
        // If the command is used by us, fire selectionChange handler if command state changes to update button states
        for (var command in this._editor.commands) {
            _loop_1(command);
        }
    };
    CKTextEditor.prototype._appliedPropertyValue = function (propertyValue) {
        var color = this._getCssPropertyValue(propertyValue);
        if (color) {
            return CKEDITOR.tools.convertRgbToHex(color);
        }
        return undefined;
    };
    CKTextEditor.prototype._handleInstanceReady = function (html) {
        if (this._onReadyCallback) {
            this._onReadyCallback();
        }
        if (html && this._editor.getData() !== html) {
            this._editor.setData(html);
        }
        this._initAutocomplete();
        // CK editor does not call change event with MS IME for Japanese and other languages in IE and edge
        // Related issue: https://github.com/ckeditor/ckeditor4/issues/676
        if (!(CKEDITOR.env.ie || CKEDITOR.env.edge)) {
            return;
        }
        var editable = this._editor.editable();
        this._currentComposedHTML = this._editor.getSnapshot();
        if (!this._changeEventQosMonitor) {
            this._changeEventQosMonitor = new _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__["_QosMonitor"]('TriggerChangeEventInIEOrEdgeForNonEnglishLanguages');
        }
        editable.on('compositionstart', this._triggerChangeEvent);
        editable.on('compositionupdate', this._triggerChangeEvent);
        editable.on('compositionend', this._triggerChangeEvent);
    };
    CKTextEditor.prototype._handleAfterPaste = function () {
        var _this = this;
        this._async.setTimeout(function () {
            try {
                if (_this._onPasteCallback && !_this._isAfterPasteCalled) {
                    _this._onPasteCallback(false);
                    _this._isAfterPasteCalled = true;
                    if (_common_Flights__WEBPACK_IMPORTED_MODULE_9__["default"].isInlineImageEnabled() && _this._isImageMoved && _this._onImageMoveCallBack) {
                        _this._onImageMoveCallBack(_this._currentlyMovingWebPartInstanceId);
                    }
                }
                if (_this._pasteQosMonitor) {
                    _this._pasteQosMonitor.writeSuccess();
                    _this._pasteQosMonitor = undefined;
                }
            }
            catch (error) {
                if (_this._pasteQosMonitor) {
                    _this._pasteQosMonitor.writeUnexpectedFailure('FailedAfterPaste', error);
                    _this._pasteQosMonitor = undefined;
                }
            }
        }, CKTextEditor._PASTETIMEOUT);
    };
    CKTextEditor.prototype._handleHeadingsPaste = function (pastedData) {
        var headingLevel = 4;
        var regex = CKTextEditor._headingsRegex("1");
        // This will convert headings H(n-1) -> H(n)
        var headings = pastedData.match(regex);
        if (headings && headings.length > 0) {
            if (this._onHeadingPasteCallback) {
                this._onHeadingPasteCallback();
            }
            for (var tag = headingLevel; tag > 1; tag--) {
                var level = tag - 1;
                // For each heading level, replace H(n-1) -> H(n)
                headings = pastedData.match(CKTextEditor._headingsRegex(level));
                if (headings) {
                    _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__["_EngagementLogger"].logEvent(CKTextEditor._HEADING_PASTE);
                    for (var i = 0; i < headings.length; i++) {
                        var heading = headings[i].replace("h" + (tag - 1), "h" + tag);
                        pastedData = pastedData.replace(headings[i], heading);
                    }
                }
            }
        }
        return pastedData;
    };
    CKTextEditor.prototype._onBeforePaste = function () {
        var _this = this;
        if (!this._pasteQosMonitor) {
            this._pasteQosMonitor = new _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__["_QosMonitor"]('PasteInRTE');
        }
        if (_common_Flights__WEBPACK_IMPORTED_MODULE_9__["default"].isInlineImageEnabled()) {
            this._isImageMoved = false;
        }
        // We need to add timeout to avoid spinner from showing up while pasting
        // small amount of text
        this._async.setTimeout(function () {
            if (_this._onPasteCallback) {
                _this._onPasteCallback(true);
                _this._isAfterPasteCalled = false;
            }
        }, CKTextEditor._PASTETIMEOUT);
    };
    CKTextEditor.prototype._handleGenericUrl = function (pastedData) {
        if (this._onEmbedPasteCallback) {
            this._onEmbedPasteCallback(true /* isPasteInProgress */, pastedData);
        }
    };
    CKTextEditor.prototype._onImagePasteInDataValue = function (evt, images, pastedData) {
        /*
         * The logic for pasting one image is different since it breaks the RTE on selection.
         * we need to call _handleImageWithMixedContentPaste if:
         * - multiple images are pasted
         * - any image is pasted inside a table
         * - single image with text
         */
        var rteDataWithoutImages;
        var rteDataWithoutImagesLength;
        rteDataWithoutImages = this._removeImagesFromPasteData(pastedData);
        rteDataWithoutImagesLength = rteDataWithoutImages.length;
        if (images &&
            (images.length > 1 || rteDataWithoutImagesLength || this._isImagePastedInsideTable(pastedData))) {
            this._handleImageWithMixedContentPaste(evt, images, pastedData);
        }
        else {
            if (rteDataWithoutImagesLength === 0) {
                this._handleImageOnlyPaste(evt, images);
            }
            else {
                _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__["_EngagementLogger"].logEvent('ImageWrappedWithText.Paste');
                if (this._onImagePasteCallBack) {
                    this._onImagePasteCallBack({
                        isImageValid: false,
                        errorCode: 2 /* InvalidImageSource */
                    });
                }
            }
        }
    };
    CKTextEditor.prototype._handleImageOnlyPaste = function (evt, images) {
        var splitedRTEData = this._extractHTMLAfterSelection();
        if (splitedRTEData) {
            for (var _i = 0, images_1 = images; _i < images_1.length; _i++) {
                var img = images_1[_i];
                var imageRegexWithSrc = CKTextEditor._IMAGE_REGEX_SRC;
                var matchedSources = img.match(imageRegexWithSrc);
                var src = matchedSources && matchedSources[1] ? matchedSources[1] : undefined;
                if (src && (CKTextEditor._isExternalImage(src) || CKTextEditor._isOnlineImage(src))) {
                    evt.cancel();
                    evt.stop();
                    _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__["_EngagementLogger"].logEvent(CKTextEditor._IMAGE_PASTE);
                    var rteData = splitedRTEData || '';
                    var imageSrc = void 0;
                    if (CKTextEditor._isOnlineImage(src) && evt.data.dataTransfer.getFilesCount() === 1) {
                        imageSrc = evt.data.dataTransfer.getFile(0);
                    }
                    else {
                        imageSrc = this._handleBase64Image(src);
                    }
                    if (this._onImagePasteCallBack) {
                        this._onImagePasteCallBack({
                            isImageValid: true,
                            imageBlob: imageSrc,
                            innerHTML: rteData
                        });
                    }
                }
                else {
                    _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__["_EngagementLogger"].logEvent('InvalidImageFile.Paste');
                    if (this._onImagePasteCallBack) {
                        this._onImagePasteCallBack({
                            isImageValid: false,
                            errorCode: 2 /* InvalidImageSource */
                        });
                    }
                }
            }
        }
        else {
            // no-op. When `_extractHTMLAfterSelection` returns undefined, it has already invoked _onImagePasteCallBack
            // and reported error.
        }
    };
    CKTextEditor.prototype._handleImageWithMixedContentPaste = function (evt, images, pastedData) {
        var imagesWithSrc = pastedData.match(CKTextEditor._imageRegex) ||
            pastedData.match(CKTextEditor._IMAGE_REGEX_WITHOUT_CLOSING_TAG);
        var editorData = {
            preImageData: '',
            postImageData: ''
        };
        var remainderContent = pastedData;
        // We need to traverse the content backwards because CanvasStore.AddControlToCanvas() adds the
        // last control first. For example, if we have text1, Image web part, text2 so the controls will be
        // added in the canvas as text2 first, Image web part and then RTE1. This will mantain the order
        // of the content.
        for (var i = images.length - 1; i >= 0; i--) {
            var imageWithSrc = imagesWithSrc ? imagesWithSrc[i] : undefined;
            var imageRegexWithSrc = CKTextEditor._IMAGE_REGEX_SRC;
            var matchedSource = images[i].match(imageRegexWithSrc);
            var src = matchedSource ? matchedSource[1] : undefined;
            if (src && CKTextEditor._isExternalImage(src) && imageWithSrc !== undefined) {
                evt.cancel();
                evt.stop();
                _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__["_EngagementLogger"].logEvent(CKTextEditor._IMAGE_PASTE);
                // We should always use last index to handle repeated images.
                var lastIndex = remainderContent.lastIndexOf(imageWithSrc);
                editorData.preImageData = remainderContent.substr(0, lastIndex);
                var postImageData = remainderContent.substr(lastIndex + imageWithSrc.length);
                var captionHTML = postImageData.match(CKTextEditor._CAPTION_REGEX);
                var captionText = void 0;
                if (captionHTML) {
                    postImageData = postImageData.replace(captionHTML[0], '');
                    var tempElement = document.createElement('div');
                    tempElement.innerHTML = captionHTML[0];
                    captionText = tempElement.innerText;
                }
                editorData.postImageData = postImageData;
                var isImagePastedInTable = CKTextEditor._isImagePastedInsideTagWithMultiplePasteEnabled(editorData.preImageData, editorData.postImageData, CKTextEditor._TABLE_REGEX_WITHOUT_OPENING_TAG, CKTextEditor._TABLE_REGEX_WITHOUT_CLOSING_TAG);
                var isImagePastedInLink = CKTextEditor._isImagePastedInsideTagWithMultiplePasteEnabled(editorData.preImageData, editorData.postImageData, CKTextEditor._LINK_REGEX_WITHOUT_OPENING_TAG, CKTextEditor._LINK_REGEX_WITHOUT_CLOSING_TAG);
                if (!isImagePastedInTable &&
                    !isImagePastedInLink &&
                    this._onImagePasteCallBack &&
                    CKTextEditor._IMAGE_REGEX_BASE64.test(src)) {
                    this._onImagePasteCallBack({
                        isImageValid: true,
                        imageBlob: this._handleBase64Image(src),
                        innerHTML: editorData.postImageData,
                        captionText: captionHTML ? captionText : undefined
                    });
                    remainderContent = editorData.preImageData;
                }
                else {
                    remainderContent = CKTextEditor._stripOutImageSource(remainderContent, imageWithSrc);
                    if (this._onImagePasteCallBack) {
                        if (isImagePastedInTable) {
                            this._onImagePasteCallBack({
                                isImageValid: false,
                                errorCode: 1 /* PastedInTable */
                            });
                        }
                        else if (isImagePastedInLink) {
                            // Do not show the error in this case.
                        }
                        else {
                            this._onImagePasteCallBack({
                                isImageValid: false,
                                errorCode: 2 /* InvalidImageSource */
                            });
                        }
                    }
                }
            }
            else {
                _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__["_EngagementLogger"].logEvent('InvalidImageFile.Paste');
                if (imageWithSrc !== undefined) {
                    remainderContent = CKTextEditor._stripOutImageSource(remainderContent, imageWithSrc);
                }
                if (this._onImagePasteCallBack) {
                    this._onImagePasteCallBack({
                        isImageValid: false,
                        errorCode: 2 /* InvalidImageSource */
                    });
                }
            }
        }
        var innerHTML = this._editor.getData();
        innerHTML += remainderContent;
        this._editor.setData(innerHTML);
    };
    CKTextEditor.prototype._handleBase64Image = function (src) {
        var contentType = Object(_common_ImageUtilities__WEBPACK_IMPORTED_MODULE_8__["Base64MimeType"])(src);
        var b64Data = src.split(',').pop();
        return b64Data !== undefined ? Object(_common_ImageUtilities__WEBPACK_IMPORTED_MODULE_8__["Base64toBlob"])(b64Data, contentType) : undefined;
    };
    CKTextEditor.prototype._onImagePasteInsideTable = function (pastedData) {
        if (this._isImagePastedInsideTable(pastedData)) {
            _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__["_EngagementLogger"].logEvent('ImageInsideTable.Paste');
            if (this._onImagePasteCallBack) {
                this._onImagePasteCallBack({ isImageValid: false, errorCode: 1 /* PastedInTable */ });
            }
        }
    };
    // To help a11y announce picker opening and item selection
    CKTextEditor.prototype._handleSelectPagePicker = function (evt, editor) {
        if (editor._pagePickerAutocomplete) {
            var itemId = evt.data.toString();
            var suggestions = editor._pagePickerAutocomplete.view.element.$.children;
            for (var i = 0; i < suggestions.length; i++) {
                var id = suggestions[i].getAttribute('data-id');
                var isNewCreatedTopic = suggestions[i].getAttribute('data-is-new-created-topic');
                var isSelected = id === itemId;
                if (isSelected) {
                    // To fix narrator read unrelated string when created topic.
                    if (!Object(_common_KillSwitches__WEBPACK_IMPORTED_MODULE_17__["isRTENewTopicEntryKSActivated"])() && isNewCreatedTopic === 'true') {
                        break;
                    }
                    var message = _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_3__["Text"].format(_loc_RteStrings_resx__WEBPACK_IMPORTED_MODULE_14__["WikiLinkingSelectedLabel"], suggestions[i].getAttribute('title'));
                    if (!Object(_common_KillSwitches__WEBPACK_IMPORTED_MODULE_17__["isRTENewTopicEntryKSActivated"])() && id === _common_Constants__WEBPACK_IMPORTED_MODULE_18__["CREATE_NEW_TOPIC_BUTTON_ID"]) {
                        message = _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_3__["Text"].format(_loc_RteStrings_resx__WEBPACK_IMPORTED_MODULE_14__["CreateTopicButtonLabel"], suggestions[i].getAttribute('title'));
                    }
                    else if (i === 0) {
                        message = _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_3__["Text"].format(_loc_RteStrings_resx__WEBPACK_IMPORTED_MODULE_14__["SuggestedPageLabelTemplate"], suggestions.length, message);
                    }
                    // Work-around since role=application on RTE block messes with regular keys
                    Object(_a11y_RteA11y__WEBPACK_IMPORTED_MODULE_13__["ariaAlert"])(message);
                    break;
                }
            }
            var addValueAttribute = !Object(_common_KillSwitches__WEBPACK_IMPORTED_MODULE_17__["updatedAriaAttributesKSActivated"])();
            var overrideSelectedClassToLegacy = !Object(_common_KillSwitches__WEBPACK_IMPORTED_MODULE_17__["onHoverTopicPickerUpdatedStylesKSActivated"])();
            // run the loop only when the killSwitch conditions satisfy
            if (addValueAttribute || overrideSelectedClassToLegacy) {
                for (var i = 0; i < suggestions.length; i++) {
                    var isSuggestionSelected = suggestions[i].classList.contains('cke_autocomplete_selected');
                    if (addValueAttribute) {
                        isSuggestionSelected
                            ? suggestions[i].setAttribute('value', 'selected')
                            : suggestions[i].setAttribute('value', 'unselected');
                    }
                    if (overrideSelectedClassToLegacy) {
                        isSuggestionSelected
                            ? suggestions[i].classList.add('cke_autocomplete_selected_updated')
                            : suggestions[i].classList.remove('cke_autocomplete_selected_updated');
                    }
                    else {
                        isSuggestionSelected
                            ? suggestions[i].classList.add('cke_autocomplete_selected_legacy')
                            : suggestions[i].classList.remove('cke_autocomplete_selected_legacy');
                    }
                }
            }
        }
    };
    /**
     * Returns true if the image is pasted inside the table
     */
    CKTextEditor.prototype._isImagePastedInsideTable = function (data) {
        var tables = data.match(CKTextEditor._TABLE_REGEX);
        if (tables) {
            for (var _i = 0, tables_2 = tables; _i < tables_2.length; _i++) {
                var table = tables_2[_i];
                if (table.match(CKTextEditor._imageRegex) ||
                    table.match(CKTextEditor._IMAGE_REGEX_WITHOUT_CLOSING_TAG)) {
                    return true;
                }
            }
        }
        return false;
    };
    CKTextEditor.prototype._removeExtraSpaceFromImageTag = function (pastedData) {
        var imagesWithSrc = pastedData.match(CKTextEditor._IMAGE_REGEX_WITH_SRC);
        if (imagesWithSrc) {
            for (var _i = 0, imagesWithSrc_1 = imagesWithSrc; _i < imagesWithSrc_1.length; _i++) {
                var img = imagesWithSrc_1[_i];
                var imageWithoutSpace = img.replace(/(\r\n|\n|\r)/gm, '');
                pastedData = pastedData.replace(img, imageWithoutSpace);
            }
        }
        return pastedData;
    };
    /**
     * Splits the pasted content into array. The method would be useful when we support
     * images wrapped with text
     */
    CKTextEditor.prototype._removeImagesFromPasteData = function (pastedData) {
        var images = pastedData.match(CKTextEditor._IMAGE_REGEX) ||
            pastedData.match(CKTextEditor._IMAGE_REGEX_WITHOUT_CLOSING_TAG);
        if (!images) {
            return [];
        }
        var data = [];
        var temp = [];
        for (var _i = 0, images_2 = images; _i < images_2.length; _i++) {
            var img = images_2[_i];
            temp = pastedData.split(img);
            if (temp.length > 1) {
                // This can be an empty string which happens when image is at the beginning of the string being split
                if (temp[0]) {
                    data.push(temp[0]);
                }
                pastedData = temp[1];
            }
        }
        if (temp[1]) {
            data.push(temp[1]);
        }
        return data;
    };
    /**
     * Extract the data after current selection as HTML string.
     * The extracted part will be removed from the current editor.
     *
     * @returns - The extracted text. It returns undefined if image is HTML or the selection is not valid.
     */
    CKTextEditor.prototype._extractHTMLAfterSelection = function () {
        var innerHTML = this._editor.getData();
        // Block the image paste if the html or parent element is not valid
        if (this._validHTML(innerHTML) && this._isCurrentSelectionTagValid()) {
            var sel = this._editor.getSelection();
            var range = sel.getRanges()[0];
            if (range) {
                range.setEndAfter(this._editor.element);
                var rangeContentElement = range.extractContents();
                return rangeContentElement.getHtml() || '';
            }
        }
        this._handleAfterPaste();
        if (this._onImagePasteCallBack) {
            this._onImagePasteCallBack({ isImageValid: false, errorCode: 3 /* InvalidHTML */ });
        }
        return undefined;
    };
    CKTextEditor.prototype._isCurrentSelectionTagValid = function () {
        // Check the current selection tag name
        var tagName = this._editor.getSelection().getStartElement().$ &&
            this._editor.getSelection().getStartElement().$.tagName;
        if (tagName === 'A') {
            return false;
        }
        // Check if the parent is also valid
        var parentElement = this._editor.getSelection().getStartElement().$.parentElement;
        tagName = parentElement ? parentElement.tagName : undefined;
        return Boolean(tagName && CKTextEditor._INVALID_TAGS.indexOf(tagName) === -1);
    };
    CKTextEditor.prototype._validHTML = function (html) {
        html = html.replace(/<[^>]*\/\s?>/g, ''); // Remove all self closing tags
        html = html.replace(/<(br|hr|img).*?>/g, ''); // Remove all <br>, <hr>, and <img> tags
        var openingTags = html.match(/<[^\/].*?>/g) || []; // Get remaining opening tags
        var closingTags = html.match(/<\/.+?>/g) || []; // Get remaining closing tags
        return openingTags.length === closingTags.length ? true : false;
    };
    CKTextEditor.prototype._linkContentHandler = function (evt, linkUrl) {
        var shouldHandleLinkPreview = CKTextEditor._GENERIC_URL_REGEX.test(linkUrl);
        var shouldHandleYoutubeEmbed = CKTextEditor._YOUTUBE_HTTPS_REGEX.test(linkUrl);
        if (shouldHandleLinkPreview || shouldHandleYoutubeEmbed) {
            evt.data.dataValue = '<a href="' + linkUrl + '">' + linkUrl + '</a>';
            this._handleGenericUrl(linkUrl);
        }
    };
    CKTextEditor.prototype._onImagePasteInChrome = function (src) {
        var data = this._extractHTMLAfterSelection();
        if (data) {
            if (this._onImagePasteCallBack) {
                this._onImagePasteCallBack({ isImageValid: true, imageBlob: src, innerHTML: data });
            }
        }
    };
    CKTextEditor.prototype._getActualBackgroundColor = function (elem, value) {
        // Background color is not inherited so we need to traverse the parent element
        // in case the color is applied to parent
        while (elem &&
            (value === 'transparent' || value === 'rgba(0, 0, 0, 0)') &&
            elem !== this._editorElement) {
            elem = elem.parentElement;
        }
        return elem ? window.getComputedStyle(elem).backgroundColor : 'transparent';
    };
    CKTextEditor.prototype._getCssPropertyValue = function (propertyValue) {
        var selection = this._editor.getSelection();
        if (selection) {
            var startElement = selection.getStartElement();
            var selectedText = selection.getSelectedText();
            if (startElement) {
                var value = window.getComputedStyle(startElement.$).getPropertyValue(propertyValue);
                if (propertyValue === 'background-color') {
                    return this._getActualBackgroundColor(startElement.$, value) || undefined;
                }
                else if (
                // For font-size, we need to check if the style overlaps in children divs
                propertyValue === 'font-size' &&
                    selectedText !== '' &&
                    this._isOverlappingStyles(startElement.$, value, 'fontSize', propertyValue)) {
                    return undefined;
                }
                return value;
            }
        }
        return undefined;
    };
    CKTextEditor.prototype._isOverlappingStyles = function (element, styleValue, className, propertyValue) {
        // We need to check if the style overlaps in children divs or not
        var children = element.querySelectorAll("span[class*=" + className + "]");
        for (var i = 0; i < children.length; i++) {
            var childValue = window.getComputedStyle(children[i]).getPropertyValue(propertyValue);
            if (childValue !== styleValue) {
                return true;
            }
        }
        return false;
    };
    CKTextEditor.prototype._updateTableAlignCommandState = function () {
        var sel = this._editor && this._editor.getSelection();
        if (sel) {
            var startElement = sel.getStartElement();
            _CKTableHelpers__WEBPACK_IMPORTED_MODULE_11__["default"].setAlignTableCommandState(startElement, _CKTableHelpers__WEBPACK_IMPORTED_MODULE_11__["default"].tableCenterAlign, this._editor.getCommand('alignCenterTable'));
            _CKTableHelpers__WEBPACK_IMPORTED_MODULE_11__["default"].setAlignTableCommandState(startElement, _CKTableHelpers__WEBPACK_IMPORTED_MODULE_11__["default"].tableLeftAlign, this._editor.getCommand('alignLeftTable'));
            _CKTableHelpers__WEBPACK_IMPORTED_MODULE_11__["default"].setAlignTableCommandState(startElement, _CKTableHelpers__WEBPACK_IMPORTED_MODULE_11__["default"].tableRightAlign, this._editor.getCommand('alignRightTable'));
        }
    };
    CKTextEditor.moduleLoader = new _CKLoader__WEBPACK_IMPORTED_MODULE_5__["default"]();
    CKTextEditor.placeHolderLinkClass = 'ms-missinglink'; // keep in sync with CSS and server
    CKTextEditor.wikiLinkClass = 'ms-wikilink'; // This is applied on server
    CKTextEditor.topicTagClass = 'topic-highlight';
    CKTextEditor.role = 'role';
    CKTextEditor.logSource = _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__["_LogSource"].create('SPRteCKTextEditor');
    CKTextEditor._IMAGE_REGEX = new RegExp('<img[^>]*(.*?)>', 'gi');
    CKTextEditor._IMAGE_REGEX_WITHOUT_CLOSING_TAG = new RegExp('<img.+?>', 'gi');
    CKTextEditor._TABLE_REGEX = new RegExp('<table([\\w\\W]+?)/table>', 'gi');
    CKTextEditor._CAPTION_REGEX = new RegExp('<p.*?class="MsoCaption".+?>[^<]*</p>', 'gi');
    CKTextEditor._TABLE_REGEX_WITHOUT_CLOSING_TAG = new RegExp('<table.+?>', 'gi');
    CKTextEditor._TABLE_REGEX_WITHOUT_OPENING_TAG = new RegExp('</table>', 'gi');
    CKTextEditor._LINK_REGEX_WITHOUT_CLOSING_TAG = new RegExp('<a.+?>', 'gi');
    CKTextEditor._LINK_REGEX_WITHOUT_OPENING_TAG = new RegExp('</a>', 'gi');
    // _IMAGE_REGEX_WITH_SRC returns all <img> tags in the content along with their source
    CKTextEditor._IMAGE_REGEX_WITH_SRC = new RegExp('<img[^>]* src="(.*?)"', 'gi');
    // _IMAGE_REGEX_WITH_SRC returns the source from <img> tag
    CKTextEditor._IMAGE_REGEX_SRC = new RegExp('<img[^>]* src="(.*?)"', 'i');
    CKTextEditor._IMAGE_REGEX_BASE64 = new RegExp('^data:', 'i');
    CKTextEditor._GENERIC_URL_REGEX = new RegExp('^https://.*|^http://.*', 'i');
    CKTextEditor._YOUTUBE_HTTPS_REGEX = new RegExp('^https://(www.youtube.com/.*|youtu.be/.*)', 'i');
    CKTextEditor._IMAGE_PASTE = 'Image.Paste';
    CKTextEditor._HEADING_PASTE = 'DemoteHeading.Paste';
    CKTextEditor._PASTETIMEOUT = 5;
    CKTextEditor._INVALID_TAGS = ['TD', 'TR', 'OL', 'LI'];
    CKTextEditor._TEXT_FORMAT_KEY = 'linkText';
    CKTextEditor._CLASS_FORMAT_KEY = 'linkClass';
    CKTextEditor._TAB_FORMAT_KEY = 'shouldOpenInNewTab';
    CKTextEditor._LINK_ID_FORMAT_KEY = 'linkId';
    CKTextEditor._LINK_PLACEHOLDER_KEY = 'linkPlaceHolder';
    CKTextEditor._fluentFontSizeMap = new Map([
        [_common_FormatTypes__WEBPACK_IMPORTED_MODULE_10__["FluentFontSizeInPixels"].XSmall, 'XSmall'],
        [_common_FormatTypes__WEBPACK_IMPORTED_MODULE_10__["FluentFontSizeInPixels"].Small, 'Small'],
        [_common_FormatTypes__WEBPACK_IMPORTED_MODULE_10__["FluentFontSizeInPixels"].Small, 'Small'],
        [_common_FormatTypes__WEBPACK_IMPORTED_MODULE_10__["FluentFontSizeInPixels"].Medium, 'Medium'],
        [_common_FormatTypes__WEBPACK_IMPORTED_MODULE_10__["FluentFontSizeInPixels"].MediumPlus, 'MediumPlus'],
        [_common_FormatTypes__WEBPACK_IMPORTED_MODULE_10__["FluentFontSizeInPixels"].Large, 'Large'],
        [_common_FormatTypes__WEBPACK_IMPORTED_MODULE_10__["FluentFontSizeInPixels"].XLarge, 'XLarge'],
        [_common_FormatTypes__WEBPACK_IMPORTED_MODULE_10__["FluentFontSizeInPixels"].XLargePlus, 'XLargePlus'],
        [_common_FormatTypes__WEBPACK_IMPORTED_MODULE_10__["FluentFontSizeInPixels"].XxLarge, 'XxLarge'],
        [_common_FormatTypes__WEBPACK_IMPORTED_MODULE_10__["FluentFontSizeInPixels"].XxLargePlus, 'XxLargePlus'],
        [_common_FormatTypes__WEBPACK_IMPORTED_MODULE_10__["FluentFontSizeInPixels"].XxxLarge, 'XxxLarge'],
        [_common_FormatTypes__WEBPACK_IMPORTED_MODULE_10__["FluentFontSizeInPixels"].Super, 'Super'],
        [_common_FormatTypes__WEBPACK_IMPORTED_MODULE_10__["FluentFontSizeInPixels"].Mega, 'Mega']
    ]);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_1__["autobind"]
    ], CKTextEditor.prototype, "_initialize", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_1__["autobind"]
    ], CKTextEditor.prototype, "_handleSelectionChangeConvert", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_1__["autobind"]
    ], CKTextEditor.prototype, "_isHeadingActive", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_1__["autobind"]
    ], CKTextEditor.prototype, "_getHeadingCommandDefinition", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_1__["autobind"]
    ], CKTextEditor.prototype, "_handlePluginsLoaded", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_1__["autobind"]
    ], CKTextEditor.prototype, "_handleInstanceReady", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_1__["autobind"]
    ], CKTextEditor.prototype, "_handleAfterPaste", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_1__["autobind"]
    ], CKTextEditor.prototype, "_onBeforePaste", null);
    return CKTextEditor;
}());



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

/***/ "Kx4S":
/*!*******************************************************!*\
  !*** ./lib/rte/common/DeferredWikiPageSuggestions.js ***!
  \*******************************************************/
/*! exports provided: WikiPageSuggestionsLoader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WikiPageSuggestionsLoader", function() { return WikiPageSuggestionsLoader; });
function WikiPageSuggestionsLoader() {
    return __webpack_require__.e(/*! import() | sp-rte-wikipagesuggestions */ "sp-rte-wikipagesuggestions").then(__webpack_require__.bind(null, /*! ../ckeditor/WikiPageSuggestions */ "n2+o")).then(function (module) { return module.WikiPageSuggestions; });
}


/***/ }),

/***/ "MxJZ":
/*!*****************************************!*\
  !*** ./lib/rte/baseRte/BaseRte.scss.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* tslint:disable */
__webpack_require__(/*! ./BaseRte.css */ "0szf");
var styles = {};
/* harmony default export */ __webpack_exports__["default"] = (styles);
/* tslint:enable */ 


/***/ }),

/***/ "NEVa":
/*!**********************************!*\
  !*** external "@ms/sp-safehtml" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_NEVa__;

/***/ }),

/***/ "PhK/":
/*!*********************************************!*\
  !*** ./lib/rte/common/AllowedClassNames.js ***!
  \*********************************************/
/*! exports provided: spanClassNamesArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "spanClassNamesArray", function() { return spanClassNamesArray; });
// tslint:disable-next-line:export-name
var spanClassNamesArray = [
    'fontSizeSmall',
    'fontSizeMedium',
    'fontSizeMediumPlus',
    'fontSizeLarge',
    'fontSizeMega',
    'fontSizeXLarge',
    'fontSizeXLargePlus',
    'fontSizeXSmall',
    'fontSizeXxLarge',
    'fontSizeXxxLarge',
    'fontSizeXxLargePlus',
    'fontSizeSuper',
    'fontColorRedDark',
    'fontColorRed',
    'fontColorYellow',
    'fontColorYellowLight',
    'fontColorGreenLight',
    'fontColorGreen',
    'fontColorBlueLight',
    'fontColorBlue',
    'fontColorBlueDark',
    'fontColorPurple',
    'fontColorNeutralDark',
    'fontColorNeutralPrimary',
    'fontColorNeutralPrimaryAlt',
    'fontColorNeutralSecondary',
    'fontColorNeutralTertiary',
    'fontColorThemeDarker',
    'fontColorThemeDark',
    'fontColorThemeDarkAlt',
    'fontColorThemePrimary',
    'fontColorThemeSecondary',
    'highlightColorYellow',
    'highlightColorGreen',
    'highlightColorAqua',
    'highlightColorMagenta',
    'highlightColorBlue',
    'highlightColorRed',
    'highlightColorDarkBlue',
    'highlightColorTeal',
    'highlightColorDarkGreen',
    'highlightColorPurple',
    'highlightColorMaroon',
    'highlightColorGold',
    'highlightColorDarkGrey',
    'highlightColorGrey',
    'highlightColorBlack'
];


/***/ }),

/***/ "Pk8u":
/*!**********************************************!*\
  !*** external "@microsoft/sp-lodash-subset" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_Pk8u__;

/***/ }),

/***/ "Qyis":
/*!*********************************!*\
  !*** ./lib/rte/a11y/RteA11y.js ***!
  \*********************************/
/*! exports provided: getFocusableChildren, isElementFocusable, getFocusableParent, getFirstFocusableChild, getFocusableDescendants, getFocusableSiblings, getNextFocusableElement, getPrevFocusableElement, isElementFocusableChildOf, navigateInside, navigateTo, navigateOutOf, ariaAlert */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFocusableChildren", function() { return getFocusableChildren; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isElementFocusable", function() { return isElementFocusable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFocusableParent", function() { return getFocusableParent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFirstFocusableChild", function() { return getFirstFocusableChild; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFocusableDescendants", function() { return getFocusableDescendants; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFocusableSiblings", function() { return getFocusableSiblings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNextFocusableElement", function() { return getNextFocusableElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPrevFocusableElement", function() { return getPrevFocusableElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isElementFocusableChildOf", function() { return isElementFocusableChildOf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "navigateInside", function() { return navigateInside; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "navigateTo", function() { return navigateTo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "navigateOutOf", function() { return navigateOutOf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ariaAlert", function() { return ariaAlert; });
/* harmony import */ var _RteA11y_module_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RteA11y.module.scss */ "iGqh");
/* harmony import */ var _common_KillSwitches__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/KillSwitches */ "+ORw");


function getFocusableChildren(elem, ignoreTabIndex) {
    if (ignoreTabIndex === void 0) { ignoreTabIndex = false; }
    var children = [];
    for (var _i = 0, _a = getFocusableDescendants(elem, ignoreTabIndex); _i < _a.length; _i++) {
        var descendant = _a[_i];
        if (isElementFocusableChildOf(descendant, elem)) {
            children.push(descendant);
        }
    }
    return children;
}
function isElementFocusable(elem, ignoreTabIndex) {
    if (ignoreTabIndex === void 0) { ignoreTabIndex = false; }
    var tagName = elem.tagName.toLowerCase();
    if (elem &&
        !elem.hidden &&
        elem.offsetParent &&
        window.getComputedStyle(elem).display !== 'none' &&
        window.getComputedStyle(elem).visibility !== 'hidden') {
        var tabIndexValue = elem.getAttribute('tabindex');
        var tabIndex = tabIndexValue === null ? undefined : parseInt(tabIndexValue, 10);
        if (!ignoreTabIndex && tabIndex !== undefined && tabIndex < 0) {
            return false;
        }
        if ((tagName === 'a' && !!elem.href) || elem.isContentEditable) {
            return true;
        }
        if ((tagName === 'button' || tagName === 'input' || tagName === 'select' || tagName === 'textarea') &&
            !elem.disabled) {
            return true;
        }
        /**
         * There are few cases like office-ui-fabric-react's dropdown control, which do not
         * use the conventional HTML elements to create dropdown. Instead they are using a
         * data attribute 'is-focusable' and making it focusable. Hence to respect those elements
         * added this check. Check this only when the 'ignoreTabIndex' is true, this is because when
         * user doesn't want to ignore tabindexes then tabindex will get preference over this attribute.
         */
        if (ignoreTabIndex && elem.getAttribute('data-is-focusable') === 'true') {
            return true;
        }
        if (!ignoreTabIndex && tabIndex !== undefined && tabIndex > -1) {
            return true;
        }
    }
    return false;
}
function getFocusableParent(elem, topElement) {
    if (topElement === void 0) { topElement = document.body; }
    var parent = elem.parentElement;
    while (parent && !isElementFocusable(parent) && parent !== topElement) {
        parent = parent.parentElement;
    }
    return parent;
}
function queryFocusableSelector(elem) {
    /* tslint:disable:quotemark */
    var selector = "button,input,textarea,select,a[href]:not([href='']),\
      [tabindex],[contenteditable='true'], [data-is-focusable='true']";
    /* tslint:enable:quotemark */
    return elem.querySelectorAll(selector);
}
function getFirstFocusableChild(elem, ignoreTabIndex) {
    if (ignoreTabIndex === void 0) { ignoreTabIndex = false; }
    var nodes = queryFocusableSelector(elem);
    for (var i = 0; i < nodes.length; i++) {
        var node = nodes[i];
        if (isElementFocusable(node, ignoreTabIndex)) {
            return node;
        }
    }
    return undefined;
}
function getFocusableDescendants(elem, ignoreTabIndex) {
    if (ignoreTabIndex === void 0) { ignoreTabIndex = false; }
    var descendants = [];
    var nodes = queryFocusableSelector(elem);
    for (var i = 0; i < nodes.length; i++) {
        var node = nodes[i];
        if (isElementFocusable(node, ignoreTabIndex)) {
            descendants.push(node);
        }
    }
    return descendants;
}
function getFocusableSiblings(elem, topElement) {
    if (topElement === void 0) { topElement = document.body; }
    var focusableParent = getFocusableParent(elem, topElement);
    var children = focusableParent ? getFocusableChildren(focusableParent) : [];
    // Remove input element and start the list from its next sibling
    var siblings = [];
    var insertPointer = 0;
    for (var _i = 0, children_1 = children; _i < children_1.length; _i++) {
        var child = children_1[_i];
        if (child !== elem) {
            siblings.splice(insertPointer++, 0, child);
        }
        else {
            insertPointer = 0;
        }
    }
    return siblings;
}
function getNextFocusableElement(elem, topElement) {
    if (topElement === void 0) { topElement = document.body; }
    var siblings = getFocusableSiblings(elem, topElement);
    return siblings[0];
}
function getPrevFocusableElement(elem, topElement) {
    if (topElement === void 0) { topElement = document.body; }
    var siblings = getFocusableSiblings(elem, topElement);
    return siblings[siblings.length - 1];
}
function isElementFocusableChildOf(elem, ancestor) {
    var parent = elem.parentElement;
    while (parent && parent.tagName !== 'BODY') {
        if (parent !== ancestor) {
            return true;
        }
        if (isElementFocusable(parent)) {
            break;
        }
        parent = parent.parentElement;
    }
    return false;
}
function navigateInside(elem) {
    var children = getFocusableChildren(elem);
    if (children.length) {
        children[0].focus();
        return true;
    }
    else {
        return false;
    }
}
function navigateTo(elem) {
    if (isElementFocusable(elem)) {
        elem.focus();
        return true;
    }
    else {
        return navigateInside(elem);
    }
}
function navigateOutOf(elem, topElement) {
    if (topElement === void 0) { topElement = document.body; }
    topElement = topElement || document.body;
    var focusableParent = getFocusableParent(elem, topElement);
    if (focusableParent) {
        focusableParent.focus();
    }
}
var ariaAlertElementId = 'aria_alert_' + Math.random().toString().substr(2);
function ariaAlert(message, role, ariaLive) {
    var oldAlert = document.querySelector('#' + ariaAlertElementId);
    if (oldAlert) {
        document.body.removeChild(oldAlert);
    }
    var alertNode = document.createElement('p');
    alertNode.classList.add(_RteA11y_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].screenReaderOnly);
    alertNode.setAttribute('role', role || 'alert');
    alertNode.setAttribute('id', ariaAlertElementId);
    if (!Object(_common_KillSwitches__WEBPACK_IMPORTED_MODULE_1__["updatedAriaAlertsKSActivated"])() && ariaLive) {
        alertNode.setAttribute('aria-live', ariaLive);
    }
    var alertText = document.createTextNode(message);
    alertNode.appendChild(alertText);
    document.body.appendChild(alertNode);
}


/***/ }),

/***/ "R0eD":
/*!*************************************!*\
  !*** ./lib/rte/common/Constants.js ***!
  \*************************************/
/*! exports provided: EMPTY_TOPIC_SUGGESTION_ID, CREATE_NEW_TOPIC_BUTTON_ID */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EMPTY_TOPIC_SUGGESTION_ID", function() { return EMPTY_TOPIC_SUGGESTION_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CREATE_NEW_TOPIC_BUTTON_ID", function() { return CREATE_NEW_TOPIC_BUTTON_ID; });
/**
 * @copyright (c) Microsoft Corporation.  All rights reserved.
 */
// tslint:disable-next-line: export-name
var EMPTY_TOPIC_SUGGESTION_ID = 'EMPTY_TOPIC_SUGGESTION_ID';
var CREATE_NEW_TOPIC_BUTTON_ID = 'CREATE_NEW_TOPIC_FROM_RTE_BUTTON_ID';


/***/ }),

/***/ "SiiP":
/*!**********************************************!*\
  !*** ./lib/rte/common/DeferredPagePicker.js ***!
  \**********************************************/
/*! exports provided: default, DeferredLinkDataProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeferredLinkDataProvider", function() { return DeferredLinkDataProvider; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _microsoft_sp_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @microsoft/sp-loader */ "I6O9");
/* harmony import */ var _microsoft_sp_loader__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_loader__WEBPACK_IMPORTED_MODULE_2__);



var _pagePickerComponentId = 'e795d530-8fb6-425c-b864-b86735dbae1d';
var DeferredPagePicker = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(DeferredPagePicker, _super);
    function DeferredPagePicker() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DeferredPagePicker.getInstance = function () {
        return this._getInstance();
    };
    DeferredPagePicker.prototype.create = function (config) {
        return new this._classType(config);
    };
    DeferredPagePicker.prototype._internalLoad = function () {
        return _microsoft_sp_loader__WEBPACK_IMPORTED_MODULE_2__["SPComponentLoader"].loadComponentById(_pagePickerComponentId).then(function (module) {
            return module.PagePicker;
        });
    };
    return DeferredPagePicker;
}(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["_DeferredClass"]));
/* harmony default export */ __webpack_exports__["default"] = (DeferredPagePicker);
var DeferredLinkDataProvider = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(DeferredLinkDataProvider, _super);
    function DeferredLinkDataProvider() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DeferredLinkDataProvider.getInstance = function () {
        return this._getInstance();
    };
    DeferredLinkDataProvider.prototype.create = function (serviceScope) {
        return new this._classType(serviceScope);
    };
    DeferredLinkDataProvider.prototype._internalLoad = function () {
        return _microsoft_sp_loader__WEBPACK_IMPORTED_MODULE_2__["SPComponentLoader"].loadComponentById(_pagePickerComponentId).then(function (module) {
            return module.LinkDataProvider;
        });
    };
    return DeferredLinkDataProvider;
}(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["_DeferredClass"]));



/***/ }),

/***/ "TPTg":
/*!***************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/css-loader@3.2.1_webpack@4.44.2/node_modules/css-loader/dist/cjs.js!/agent/_work/1/s/common/temp/node_modules/.pnpm/postcss-loader@3.0.0/node_modules/postcss-loader/src??postcss!./lib/rte/a11y/RteA11y.module.css ***!
  \***************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../common/temp/node_modules/.pnpm/css-loader@3.2.1_webpack@4.44.2/node_modules/css-loader/dist/runtime/api.js */ "5ADk")(false);
// Module
exports.push([module.i, ".a_a_e078741a{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);border:0}", ""]);


/***/ }),

/***/ "TTLS":
/*!*****************************************!*\
  !*** ./lib/rte/a11y/RteA11y.module.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../../../common/temp/node_modules/.pnpm/css-loader@3.2.1_webpack@4.44.2/node_modules/css-loader/dist/cjs.js!../../../../../common/temp/node_modules/.pnpm/postcss-loader@3.0.0/node_modules/postcss-loader/src??postcss!./RteA11y.module.css */ "TPTg");
var loader = __webpack_require__(/*! @microsoft/load-themed-styles */ "jOlS");

if(typeof content === "string") content = [[module.i, content]];

// add the styles to the DOM
for (var i = 0; i < content.length; i++) loader.loadStyles(content[i][1], true);

if(content.locals) module.exports = content.locals;

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

/***/ "X1Xl":
/*!*****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/css-loader@3.2.1_webpack@4.44.2/node_modules/css-loader/dist/cjs.js!/agent/_work/1/s/common/temp/node_modules/.pnpm/postcss-loader@3.0.0/node_modules/postcss-loader/src??postcss!./lib/rte/ckeditor/CKTextEditor.css ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../common/temp/node_modules/.pnpm/css-loader@3.2.1_webpack@4.44.2/node_modules/css-loader/dist/runtime/api.js */ "5ADk")(false);
// Module
exports.push([module.i, ".cke .cke_top{display:none}.cke_editable{overflow:hidden}[dir=ltr] .cke_editable{text-align:left}[dir=rtl] .cke_editable{text-align:right}.cke_editable .canvasRteResponsiveTable{overflow-x:auto;clear:both}.cke_editable .canvasRteResponsiveTable td[class*=cke_table-faked-selection]{border-color:\"[theme:themePrimary, default: #0078d4]\"!important;border-width:1px;border-style:solid}.cke_editable .canvasRteResponsiveTable .simpleTableStyleNeutral{border-color:\"[theme:neutralPrimary, default: #333333]\"!important;border-width:1px!important;border-style:solid;border-collapse:collapse;color:\"[theme:neutralPrimary, default: #333333]\"}.cke_editable .canvasRteResponsiveTable .simpleTableStyleNeutral :not(.rteEmphasis){background-color:transparent}.cke_editable .canvasRteResponsiveTable .simpleTableStyleNeutral td,.cke_editable .canvasRteResponsiveTable .simpleTableStyleNeutral th,.cke_editable .canvasRteResponsiveTable .simpleTableStyleNeutral tr{border-color:\"[theme:neutralPrimary, default: #333333]\"!important;border-width:1px!important;border-style:solid}.cke_editable .canvasRteResponsiveTable .borderHeaderTableStyleNeutral tr:first-child{border-bottom-width:3px!important;border-color:\"[theme:neutralPrimary, default: #333333]\"!important}.cke_editable .canvasRteResponsiveTable .borderHeaderTableStyleNeutral tr:first-child td,.cke_editable .canvasRteResponsiveTable .borderHeaderTableStyleNeutral tr:first-child td a,.cke_editable .canvasRteResponsiveTable .borderHeaderTableStyleNeutral tr:first-child td p,.cke_editable .canvasRteResponsiveTable .borderHeaderTableStyleNeutral tr:first-child th,.cke_editable .canvasRteResponsiveTable .borderHeaderTableStyleNeutral tr:first-child th p{font-weight:700}.cke_editable .canvasRteResponsiveTable .borderHeaderTableStyleNeutral td,.cke_editable .canvasRteResponsiveTable .borderHeaderTableStyleNeutral th,.cke_editable .canvasRteResponsiveTable .borderHeaderTableStyleNeutral tr{border-color:\"[theme:neutralPrimary, default: #333333]\"!important;border-width:1px!important;border-style:solid}.cke_editable .canvasRteResponsiveTable .filledHeaderTableStyleNeutral tr:first-child{background-color:\"[theme:neutralPrimary, default: #333333]\"}.cke_editable .canvasRteResponsiveTable .filledHeaderTableStyleNeutral tr:first-child td,.cke_editable .canvasRteResponsiveTable .filledHeaderTableStyleNeutral tr:first-child td a,.cke_editable .canvasRteResponsiveTable .filledHeaderTableStyleNeutral tr:first-child td p,.cke_editable .canvasRteResponsiveTable .filledHeaderTableStyleNeutral tr:first-child th,.cke_editable .canvasRteResponsiveTable .filledHeaderTableStyleNeutral tr:first-child th p{color:\"[theme:white, default: #ffffff]\";font-weight:700}.cke_editable .canvasRteResponsiveTable .filledHeaderTableStyleNeutral td,.cke_editable .canvasRteResponsiveTable .filledHeaderTableStyleNeutral th,.cke_editable .canvasRteResponsiveTable .filledHeaderTableStyleNeutral tr{border-color:\"[theme:neutralPrimary, default: #333333]\"!important;border-width:1px!important;border-style:solid}.cke_editable .canvasRteResponsiveTable .bandedRowTableStyleNeutral tr:first-child{background-color:\"[theme:neutralPrimary, default: #333333]\"}.cke_editable .canvasRteResponsiveTable .bandedRowTableStyleNeutral tr:first-child td,.cke_editable .canvasRteResponsiveTable .bandedRowTableStyleNeutral tr:first-child td a,.cke_editable .canvasRteResponsiveTable .bandedRowTableStyleNeutral tr:first-child td p,.cke_editable .canvasRteResponsiveTable .bandedRowTableStyleNeutral tr:first-child th,.cke_editable .canvasRteResponsiveTable .bandedRowTableStyleNeutral tr:first-child th p{color:\"[theme:white, default: #ffffff]\";font-weight:700}.cke_editable .canvasRteResponsiveTable .bandedRowTableStyleNeutral tr:nth-child(2n){background-color:\"[theme:neutralQuaternaryAlt, default: #dadada]\"}.cke_editable .canvasRteResponsiveTable .bandedRowTableStyleNeutral td,.cke_editable .canvasRteResponsiveTable .bandedRowTableStyleNeutral th,.cke_editable .canvasRteResponsiveTable .bandedRowTableStyleNeutral tr{border-color:\"[theme:neutralPrimary, default: #333333]\"!important;border-width:1px!important;border-style:solid}.cke_editable .canvasRteResponsiveTable .bandedRowColumnTableStyleNeutral tr:first-child{background-color:\"[theme:neutralPrimary, default: #333333]\"}.cke_editable .canvasRteResponsiveTable .bandedRowColumnTableStyleNeutral tr:first-child td,.cke_editable .canvasRteResponsiveTable .bandedRowColumnTableStyleNeutral tr:first-child td a,.cke_editable .canvasRteResponsiveTable .bandedRowColumnTableStyleNeutral tr:first-child td p,.cke_editable .canvasRteResponsiveTable .bandedRowColumnTableStyleNeutral tr:first-child th,.cke_editable .canvasRteResponsiveTable .bandedRowColumnTableStyleNeutral tr:first-child th p{color:\"[theme:white, default: #ffffff]\"}.cke_editable .canvasRteResponsiveTable .bandedRowColumnTableStyleNeutral tr:nth-child(2n){background-color:\"[theme:neutralQuaternaryAlt, default: #dadada]\"}.cke_editable .canvasRteResponsiveTable .bandedRowColumnTableStyleNeutral tr:first-child td,.cke_editable .canvasRteResponsiveTable .bandedRowColumnTableStyleNeutral tr:first-child td a,.cke_editable .canvasRteResponsiveTable .bandedRowColumnTableStyleNeutral tr:first-child td p,.cke_editable .canvasRteResponsiveTable .bandedRowColumnTableStyleNeutral tr:first-child th,.cke_editable .canvasRteResponsiveTable .bandedRowColumnTableStyleNeutral tr:first-child th p{font-weight:700}.cke_editable .canvasRteResponsiveTable .bandedRowColumnTableStyleNeutral tr:not(:first-child) td:first-child{background-color:\"[theme:neutralTertiaryAlt, default: #c8c8c8]\"}.cke_editable .canvasRteResponsiveTable .bandedRowColumnTableStyleNeutral td,.cke_editable .canvasRteResponsiveTable .bandedRowColumnTableStyleNeutral th,.cke_editable .canvasRteResponsiveTable .bandedRowColumnTableStyleNeutral tr{border-color:\"[theme:neutralPrimary, default: #333333]\"!important;border-width:1px!important;border-style:solid}.cke_editable .canvasRteResponsiveTable .simpleTableStyleTheme{border-color:\"[theme:themePrimary, default: #0078d4]\"!important;border-width:1px!important;border-style:solid;border-collapse:collapse;color:\"[theme:neutralPrimary, default: #333333]\"}.cke_editable .canvasRteResponsiveTable .simpleTableStyleTheme :not(.rteEmphasis){background-color:transparent}.cke_editable .canvasRteResponsiveTable .simpleTableStyleTheme td,.cke_editable .canvasRteResponsiveTable .simpleTableStyleTheme th,.cke_editable .canvasRteResponsiveTable .simpleTableStyleTheme tr{border-color:\"[theme:themePrimary, default: #0078d4]\"!important;border-width:1px!important;border-style:solid}.cke_editable .canvasRteResponsiveTable .borderHeaderTableStyleTheme tr:first-child{border-bottom-width:3px!important;border-color:\"[theme:themePrimary, default: #0078d4]\"!important}.cke_editable .canvasRteResponsiveTable .borderHeaderTableStyleTheme tr:first-child td,.cke_editable .canvasRteResponsiveTable .borderHeaderTableStyleTheme tr:first-child td a,.cke_editable .canvasRteResponsiveTable .borderHeaderTableStyleTheme tr:first-child td p,.cke_editable .canvasRteResponsiveTable .borderHeaderTableStyleTheme tr:first-child th,.cke_editable .canvasRteResponsiveTable .borderHeaderTableStyleTheme tr:first-child th p{font-weight:700}.cke_editable .canvasRteResponsiveTable .borderHeaderTableStyleTheme td,.cke_editable .canvasRteResponsiveTable .borderHeaderTableStyleTheme th,.cke_editable .canvasRteResponsiveTable .borderHeaderTableStyleTheme tr{border-color:\"[theme:themePrimary, default: #0078d4]\"!important;border-width:1px!important;border-style:solid}.cke_editable .canvasRteResponsiveTable .filledHeaderTableStyleTheme tr:first-child{background-color:\"[theme:themePrimary, default: #0078d4]\"}.cke_editable .canvasRteResponsiveTable .filledHeaderTableStyleTheme tr:first-child td,.cke_editable .canvasRteResponsiveTable .filledHeaderTableStyleTheme tr:first-child td a,.cke_editable .canvasRteResponsiveTable .filledHeaderTableStyleTheme tr:first-child td p,.cke_editable .canvasRteResponsiveTable .filledHeaderTableStyleTheme tr:first-child th,.cke_editable .canvasRteResponsiveTable .filledHeaderTableStyleTheme tr:first-child th p{color:\"[theme:white, default: #ffffff]\";font-weight:700}.cke_editable .canvasRteResponsiveTable .filledHeaderTableStyleTheme td,.cke_editable .canvasRteResponsiveTable .filledHeaderTableStyleTheme th,.cke_editable .canvasRteResponsiveTable .filledHeaderTableStyleTheme tr{border-color:\"[theme:themePrimary, default: #0078d4]\"!important;border-width:1px!important;border-style:solid}.cke_editable .canvasRteResponsiveTable .bandedRowTableStyleTheme tr:first-child{background-color:\"[theme:themePrimary, default: #0078d4]\"}.cke_editable .canvasRteResponsiveTable .bandedRowTableStyleTheme tr:first-child td,.cke_editable .canvasRteResponsiveTable .bandedRowTableStyleTheme tr:first-child td a,.cke_editable .canvasRteResponsiveTable .bandedRowTableStyleTheme tr:first-child td p,.cke_editable .canvasRteResponsiveTable .bandedRowTableStyleTheme tr:first-child th,.cke_editable .canvasRteResponsiveTable .bandedRowTableStyleTheme tr:first-child th p{color:\"[theme:white, default: #ffffff]\";font-weight:700}.cke_editable .canvasRteResponsiveTable .bandedRowTableStyleTheme tr:nth-child(2n){background-color:\"[theme:themeLighter, default: #deecf9]\"}.cke_editable .canvasRteResponsiveTable .bandedRowTableStyleTheme td,.cke_editable .canvasRteResponsiveTable .bandedRowTableStyleTheme th,.cke_editable .canvasRteResponsiveTable .bandedRowTableStyleTheme tr{border-color:\"[theme:themePrimary, default: #0078d4]\"!important;border-width:1px!important;border-style:solid}.cke_editable .canvasRteResponsiveTable .bandedRowColumnTableStyleTheme tr:first-child{background-color:\"[theme:themePrimary, default: #0078d4]\"}.cke_editable .canvasRteResponsiveTable .bandedRowColumnTableStyleTheme tr:first-child td,.cke_editable .canvasRteResponsiveTable .bandedRowColumnTableStyleTheme tr:first-child td a,.cke_editable .canvasRteResponsiveTable .bandedRowColumnTableStyleTheme tr:first-child td p,.cke_editable .canvasRteResponsiveTable .bandedRowColumnTableStyleTheme tr:first-child th,.cke_editable .canvasRteResponsiveTable .bandedRowColumnTableStyleTheme tr:first-child th p{color:\"[theme:white, default: #ffffff]\"}.cke_editable .canvasRteResponsiveTable .bandedRowColumnTableStyleTheme tr:nth-child(2n){background-color:\"[theme:themeLighter, default: #deecf9]\"}.cke_editable .canvasRteResponsiveTable .bandedRowColumnTableStyleTheme tr:first-child td,.cke_editable .canvasRteResponsiveTable .bandedRowColumnTableStyleTheme tr:first-child td a,.cke_editable .canvasRteResponsiveTable .bandedRowColumnTableStyleTheme tr:first-child td p,.cke_editable .canvasRteResponsiveTable .bandedRowColumnTableStyleTheme tr:first-child th,.cke_editable .canvasRteResponsiveTable .bandedRowColumnTableStyleTheme tr:first-child th p{font-weight:700}.cke_editable .canvasRteResponsiveTable .bandedRowColumnTableStyleTheme tr:not(:first-child) td:first-child{background-color:\"[theme:themeLight, default: #c7e0f4]\"}.cke_editable .canvasRteResponsiveTable .bandedRowColumnTableStyleTheme td,.cke_editable .canvasRteResponsiveTable .bandedRowColumnTableStyleTheme th,.cke_editable .canvasRteResponsiveTable .bandedRowColumnTableStyleTheme tr{border-color:\"[theme:themePrimary, default: #0078d4]\"!important;border-width:1px!important;border-style:solid}.cke_editable .tableWrapper{display:block;margin:0}.cke_editable .tableCenterAlign table{margin:0 auto}[dir=ltr] .cke_editable .tableLeftAlign table{margin-left:0}[dir=ltr] [dir=rtl] .cke_editable .tableLeftAlign table,[dir=rtl] .cke_editable .tableLeftAlign table{margin-right:0}[dir=rtl] [dir=rtl] .cke_editable .tableLeftAlign table{margin-left:0}[dir=ltr] [dir=rtl] .cke_editable .tableLeftAlign table{margin-left:auto}[dir=rtl] [dir=rtl] .cke_editable .tableLeftAlign table{margin-right:auto}[dir=ltr] .cke_editable .tableRightAlign table{margin-right:0}[dir=rtl] .cke_editable .tableRightAlign table{margin-left:0}[dir=ltr] .cke_editable .tableRightAlign table{margin-left:auto}[dir=rtl] .cke_editable .tableRightAlign table{margin-right:auto}[dir=ltr] [dir=rtl] .cke_editable .tableRightAlign table{margin-left:0}[dir=rtl] [dir=rtl] .cke_editable .tableRightAlign table{margin-right:0}div[data-cke-temp=\"1\"]{width:2px!important}div[data-cke-temp=\"1\"]:hover{background-color:\"[theme:themePrimary, default: #0078d4]\"!important;opacity:1!important;display:block!important}.cke_show_borders .canvasRteResponsiveTable table.cke_show_border.bandedRowColumnTableStyleTheme,.cke_show_borders .canvasRteResponsiveTable table.cke_show_border.bandedRowColumnTableStyleTheme>tbody>tr>td,.cke_show_borders .canvasRteResponsiveTable table.cke_show_border.bandedRowColumnTableStyleTheme>tbody>tr>th,.cke_show_borders .canvasRteResponsiveTable table.cke_show_border.bandedRowColumnTableStyleTheme>tfoot>tr>td,.cke_show_borders .canvasRteResponsiveTable table.cke_show_border.bandedRowColumnTableStyleTheme>tfoot>tr>th,.cke_show_borders .canvasRteResponsiveTable table.cke_show_border.bandedRowColumnTableStyleTheme>thead>tr>td,.cke_show_borders .canvasRteResponsiveTable table.cke_show_border.bandedRowColumnTableStyleTheme>thead>tr>th,.cke_show_borders .canvasRteResponsiveTable table.cke_show_border.bandedRowColumnTableStyleTheme>tr>td,.cke_show_borders .canvasRteResponsiveTable table.cke_show_border.bandedRowColumnTableStyleTheme>tr>th,.cke_show_borders .canvasRteResponsiveTable table.cke_show_border.bandedRowTableStyleTheme,.cke_show_borders .canvasRteResponsiveTable table.cke_show_border.bandedRowTableStyleTheme>tbody>tr>td,.cke_show_borders .canvasRteResponsiveTable table.cke_show_border.bandedRowTableStyleTheme>tbody>tr>th,.cke_show_borders .canvasRteResponsiveTable table.cke_show_border.bandedRowTableStyleTheme>tfoot>tr>td,.cke_show_borders .canvasRteResponsiveTable table.cke_show_border.bandedRowTableStyleTheme>tfoot>tr>th,.cke_show_borders .canvasRteResponsiveTable table.cke_show_border.bandedRowTableStyleTheme>thead>tr>td,.cke_show_borders .canvasRteResponsiveTable table.cke_show_border.bandedRowTableStyleTheme>thead>tr>th,.cke_show_borders .canvasRteResponsiveTable table.cke_show_border.bandedRowTableStyleTheme>tr>td,.cke_show_borders .canvasRteResponsiveTable table.cke_show_border.bandedRowTableStyleTheme>tr>th,.cke_show_borders .canvasRteResponsiveTable table.cke_show_border.borderHeaderTableStyleTheme,.cke_show_borders .canvasRteResponsiveTable table.cke_show_border.borderHeaderTableStyleTheme>tbody>tr>td,.cke_show_borders .canvasRteResponsiveTable table.cke_show_border.borderHeaderTableStyleTheme>tbody>tr>th,.cke_show_borders .canvasRteResponsiveTable table.cke_show_border.borderHeaderTableStyleTheme>tfoot>tr>td,.cke_show_borders .canvasRteResponsiveTable table.cke_show_border.borderHeaderTableStyleTheme>tfoot>tr>th,.cke_show_borders .canvasRteResponsiveTable table.cke_show_border.borderHeaderTableStyleTheme>thead>tr>td,.cke_show_borders .canvasRteResponsiveTable table.cke_show_border.borderHeaderTableStyleTheme>thead>tr>th,.cke_show_borders .canvasRteResponsiveTable table.cke_show_border.borderHeaderTableStyleTheme>tr>td,.cke_show_borders .canvasRteResponsiveTable table.cke_show_border.borderHeaderTableStyleTheme>tr>th,.cke_show_borders .canvasRteResponsiveTable table.cke_show_border.filledHeaderTableStyleTheme,.cke_show_borders .canvasRteResponsiveTable table.cke_show_border.filledHeaderTableStyleTheme>tbody>tr>td,.cke_show_borders .canvasRteResponsiveTable table.cke_show_border.filledHeaderTableStyleTheme>tbody>tr>th,.cke_show_borders .canvasRteResponsiveTable table.cke_show_border.filledHeaderTableStyleTheme>tfoot>tr>td,.cke_show_borders .canvasRteResponsiveTable table.cke_show_border.filledHeaderTableStyleTheme>tfoot>tr>th,.cke_show_borders .canvasRteResponsiveTable table.cke_show_border.filledHeaderTableStyleTheme>thead>tr>td,.cke_show_borders .canvasRteResponsiveTable table.cke_show_border.filledHeaderTableStyleTheme>thead>tr>th,.cke_show_borders .canvasRteResponsiveTable table.cke_show_border.filledHeaderTableStyleTheme>tr>td,.cke_show_borders .canvasRteResponsiveTable table.cke_show_border.filledHeaderTableStyleTheme>tr>th,.cke_show_borders .canvasRteResponsiveTable table.cke_show_border.simpleTableStyleTheme,.cke_show_borders .canvasRteResponsiveTable table.cke_show_border.simpleTableStyleTheme>tbody>tr>td,.cke_show_borders .canvasRteResponsiveTable table.cke_show_border.simpleTableStyleTheme>tbody>tr>th,.cke_show_borders .canvasRteResponsiveTable table.cke_show_border.simpleTableStyleTheme>tfoot>tr>td,.cke_show_borders .canvasRteResponsiveTable table.cke_show_border.simpleTableStyleTheme>tfoot>tr>th,.cke_show_borders .canvasRteResponsiveTable table.cke_show_border.simpleTableStyleTheme>thead>tr>td,.cke_show_borders .canvasRteResponsiveTable table.cke_show_border.simpleTableStyleTheme>thead>tr>th,.cke_show_borders .canvasRteResponsiveTable table.cke_show_border.simpleTableStyleTheme>tr>td,.cke_show_borders .canvasRteResponsiveTable table.cke_show_border.simpleTableStyleTheme>tr>th{border-color:\"[theme:themePrimary, default: #0078d4]\"!important;border-width:1px!important;border-style:solid}.cke_show_borders .canvasRteResponsiveTable table.cke_show_border,.cke_show_borders .canvasRteResponsiveTable table.cke_show_border.bandedRowColumnTableStyleNeutral,.cke_show_borders .canvasRteResponsiveTable table.cke_show_border.bandedRowColumnTableStyleNeutral>tbody>tr>td,.cke_show_borders .canvasRteResponsiveTable table.cke_show_border.bandedRowColumnTableStyleNeutral>tbody>tr>th,.cke_show_borders .canvasRteResponsiveTable table.cke_show_border.bandedRowColumnTableStyleNeutral>tfoot>tr>td,.cke_show_borders .canvasRteResponsiveTable table.cke_show_border.bandedRowColumnTableStyleNeutral>tfoot>tr>th,.cke_show_borders .canvasRteResponsiveTable table.cke_show_border.bandedRowColumnTableStyleNeutral>thead>tr>td,.cke_show_borders .canvasRteResponsiveTable table.cke_show_border.bandedRowColumnTableStyleNeutral>thead>tr>th,.cke_show_borders .canvasRteResponsiveTable table.cke_show_border.bandedRowColumnTableStyleNeutral>tr>td,.cke_show_borders .canvasRteResponsiveTable table.cke_show_border.bandedRowColumnTableStyleNeutral>tr>th,.cke_show_borders .canvasRteResponsiveTable table.cke_show_border.bandedRowTableStyleNeutral,.cke_show_borders .canvasRteResponsiveTable table.cke_show_border.bandedRowTableStyleNeutral>tbody>tr>td,.cke_show_borders .canvasRteResponsiveTable table.cke_show_border.bandedRowTableStyleNeutral>tbody>tr>th,.cke_show_borders .canvasRteResponsiveTable table.cke_show_border.bandedRowTableStyleNeutral>tfoot>tr>td,.cke_show_borders .canvasRteResponsiveTable table.cke_show_border.bandedRowTableStyleNeutral>tfoot>tr>th,.cke_show_borders .canvasRteResponsiveTable table.cke_show_border.bandedRowTableStyleNeutral>thead>tr>td,.cke_show_borders .canvasRteResponsiveTable table.cke_show_border.bandedRowTableStyleNeutral>thead>tr>th,.cke_show_borders .canvasRteResponsiveTable table.cke_show_border.bandedRowTableStyleNeutral>tr>td,.cke_show_borders .canvasRteResponsiveTable table.cke_show_border.bandedRowTableStyleNeutral>tr>th,.cke_show_borders .canvasRteResponsiveTable table.cke_show_border.borderHeaderTableStyleNeutral,.cke_show_borders .canvasRteResponsiveTable table.cke_show_border.borderHeaderTableStyleNeutral>tbody>tr>td,.cke_show_borders .canvasRteResponsiveTable table.cke_show_border.borderHeaderTableStyleNeutral>tbody>tr>th,.cke_show_borders .canvasRteResponsiveTable table.cke_show_border.borderHeaderTableStyleNeutral>tfoot>tr>td,.cke_show_borders .canvasRteResponsiveTable table.cke_show_border.borderHeaderTableStyleNeutral>tfoot>tr>th,.cke_show_borders .canvasRteResponsiveTable table.cke_show_border.borderHeaderTableStyleNeutral>thead>tr>td,.cke_show_borders .canvasRteResponsiveTable table.cke_show_border.borderHeaderTableStyleNeutral>thead>tr>th,.cke_show_borders .canvasRteResponsiveTable table.cke_show_border.borderHeaderTableStyleNeutral>tr>td,.cke_show_borders .canvasRteResponsiveTable table.cke_show_border.borderHeaderTableStyleNeutral>tr>th,.cke_show_borders .canvasRteResponsiveTable table.cke_show_border.filledHeaderTableStyleNeutral,.cke_show_borders .canvasRteResponsiveTable table.cke_show_border.filledHeaderTableStyleNeutral>tbody>tr>td,.cke_show_borders .canvasRteResponsiveTable table.cke_show_border.filledHeaderTableStyleNeutral>tbody>tr>th,.cke_show_borders .canvasRteResponsiveTable table.cke_show_border.filledHeaderTableStyleNeutral>tfoot>tr>td,.cke_show_borders .canvasRteResponsiveTable table.cke_show_border.filledHeaderTableStyleNeutral>tfoot>tr>th,.cke_show_borders .canvasRteResponsiveTable table.cke_show_border.filledHeaderTableStyleNeutral>thead>tr>td,.cke_show_borders .canvasRteResponsiveTable table.cke_show_border.filledHeaderTableStyleNeutral>thead>tr>th,.cke_show_borders .canvasRteResponsiveTable table.cke_show_border.filledHeaderTableStyleNeutral>tr>td,.cke_show_borders .canvasRteResponsiveTable table.cke_show_border.filledHeaderTableStyleNeutral>tr>th,.cke_show_borders .canvasRteResponsiveTable table.cke_show_border.simpleTableStyleNeutral,.cke_show_borders .canvasRteResponsiveTable table.cke_show_border.simpleTableStyleNeutral>tbody>tr>td,.cke_show_borders .canvasRteResponsiveTable table.cke_show_border.simpleTableStyleNeutral>tbody>tr>th,.cke_show_borders .canvasRteResponsiveTable table.cke_show_border.simpleTableStyleNeutral>tfoot>tr>td,.cke_show_borders .canvasRteResponsiveTable table.cke_show_border.simpleTableStyleNeutral>tfoot>tr>th,.cke_show_borders .canvasRteResponsiveTable table.cke_show_border.simpleTableStyleNeutral>thead>tr>td,.cke_show_borders .canvasRteResponsiveTable table.cke_show_border.simpleTableStyleNeutral>thead>tr>th,.cke_show_borders .canvasRteResponsiveTable table.cke_show_border.simpleTableStyleNeutral>tr>td,.cke_show_borders .canvasRteResponsiveTable table.cke_show_border.simpleTableStyleNeutral>tr>th,.cke_show_borders .canvasRteResponsiveTable table.cke_show_border>tbody>tr>td,.cke_show_borders .canvasRteResponsiveTable table.cke_show_border>tbody>tr>th,.cke_show_borders .canvasRteResponsiveTable table.cke_show_border>tfoot>tr>td,.cke_show_borders .canvasRteResponsiveTable table.cke_show_border>tfoot>tr>th,.cke_show_borders .canvasRteResponsiveTable table.cke_show_border>thead>tr>td,.cke_show_borders .canvasRteResponsiveTable table.cke_show_border>thead>tr>th,.cke_show_borders .canvasRteResponsiveTable table.cke_show_border>tr>td,.cke_show_borders .canvasRteResponsiveTable table.cke_show_border>tr>th{border-color:\"[theme:neutralPrimary, default: #333333]\"!important;border-width:1px!important;border-style:solid}[dir=ltr] .cke_editable ol,[dir=ltr] .cke_editable ul{padding-left:50px}[dir=rtl] .cke_editable ol,[dir=rtl] .cke_editable ul{padding-right:50px}[dir=ltr] .cke_editable li:before{margin-left:-19px}[dir=rtl] .cke_editable li:before{margin-right:-19px}[dir=ltr] .cke_editable li:before{margin-right:4px}[dir=rtl] .cke_editable li:before{margin-left:4px}[dir=ltr] .cke_editable li:before{text-align:right}[dir=rtl] .cke_editable li:before{text-align:left}.cke_editable ol{counter-reset:item}.cke_editable ol>li{counter-increment:item}.cke_editable ol ol>li{display:block}.cke_editable ol ol>li:before{content:counter(item,lower-alpha) \". \"}.cke_editable table,.cke_editable td,.cke_editable th,.cke_editable tr{border-color:\"[theme:neutralPrimary, default: #333333]\"!important;border-width:1px!important;border-style:solid;border-collapse:collapse}.cke_editable table{margin-bottom:10px}.cke_editable td,.cke_editable td p,.cke_editable th,.cke_editable th p{font-size:15px;color:\"[theme:neutralPrimary, default: #333333]\";white-space:normal;margin:0}.cke_editable th{font-weight:600;text-align:center}.cke_editable td[align=center],.cke_editable td[align=right],.cke_editable td p[style*=\"text-align:center\"],.cke_editable td p[style*=\"text-align: center\"],.cke_editable td p[style*=\"text-align:right\"],.cke_editable td p[style*=\"text-align: right\"]{padding:0!important}.cke_editable td,.cke_editable th{padding-top:8px;padding-bottom:8px;width:75px}[dir=ltr] .cke_editable td,[dir=ltr] .cke_editable th{padding-left:8px}[dir=rtl] .cke_editable td,[dir=rtl] .cke_editable th{padding-right:8px}[dir=ltr] .cke_editable td,[dir=ltr] .cke_editable th{padding-right:16px}[dir=ltr] [dir=rtl] .cke_editable td,[dir=ltr] [dir=rtl] .cke_editable th,[dir=rtl] .cke_editable td,[dir=rtl] .cke_editable th{padding-left:16px}[dir=rtl] [dir=rtl] .cke_editable td,[dir=rtl] [dir=rtl] .cke_editable th{padding-right:16px}[dir=ltr] [dir=rtl] .cke_editable td,[dir=ltr] [dir=rtl] .cke_editable th{padding-right:8px}[dir=rtl] [dir=rtl] .cke_editable td,[dir=rtl] [dir=rtl] .cke_editable th{padding-left:8px}.cke_editable td[valign=top]{padding-top:8px;padding-bottom:0}[dir=ltr] .cke_editable td[valign=top]{padding-left:8px}[dir=rtl] .cke_editable td[valign=top]{padding-right:8px}[dir=ltr] .cke_editable td[valign=top]{padding-right:16px}[dir=rtl] .cke_editable td[valign=top]{padding-left:16px}.cke_editable td[valign=bottom]{padding-top:0;padding-bottom:8px}[dir=ltr] .cke_editable td[valign=bottom]{padding-left:8px}[dir=rtl] .cke_editable td[valign=bottom]{padding-right:8px}[dir=ltr] .cke_editable td[valign=bottom]{padding-right:16px}[dir=rtl] .cke_editable td[valign=bottom]{padding-left:16px}.cke_editable td[align=center],.cke_editable td p[style*=\"text-align:center\"],.cke_editable td p[style*=\"text-align: center\"]{padding:8px 16px}.cke_editable td[align=left],.cke_editable td p[style*=\"text-align:left\"],.cke_editable td p[style*=\"text-align: left\"]{padding:8px 16px 8px 8px}.cke_editable td[align=right],.cke_editable td p[style*=\"text-align:right\"],.cke_editable td p[style*=\"text-align: right\"]{padding:8px 8px 8px 16px}.cke_editable tr td th:nth-last-child(n+20):first-child,.cke_editable tr td th:nth-last-child(n+20):first-child~*{padding:4px!important;font-size:10px!important}[dir=ltr] .cke_editable .ql-indent-1{padding-left:40px}[dir=rtl] .cke_editable .ql-indent-1{padding-right:40px}[dir=ltr] .cke_editable li.ql-indent-1{padding-left:59px}[dir=rtl] .cke_editable li.ql-indent-1{padding-right:59px}[dir=ltr] .cke_editable .ql-indent-2{padding-left:80px}[dir=rtl] .cke_editable .ql-indent-2{padding-right:80px}[dir=ltr] .cke_editable li.ql-indent-2{padding-left:99px}[dir=rtl] .cke_editable li.ql-indent-2{padding-right:99px}[dir=ltr] .cke_editable .ql-indent-3{padding-left:120px}[dir=rtl] .cke_editable .ql-indent-3{padding-right:120px}[dir=ltr] .cke_editable li.ql-indent-3{padding-left:139px}[dir=rtl] .cke_editable li.ql-indent-3{padding-right:139px}[dir=ltr] .cke_editable .ql-indent-4{padding-left:160px}[dir=rtl] .cke_editable .ql-indent-4{padding-right:160px}[dir=ltr] .cke_editable li.ql-indent-4{padding-left:179px}[dir=rtl] .cke_editable li.ql-indent-4{padding-right:179px}[dir=ltr] .cke_editable .ql-indent-5{padding-left:200px}[dir=rtl] .cke_editable .ql-indent-5{padding-right:200px}[dir=ltr] .cke_editable li.ql-indent-5{padding-left:219px}[dir=rtl] .cke_editable li.ql-indent-5{padding-right:219px}[dir=ltr] .cke_editable .ql-indent-6{padding-left:240px}[dir=rtl] .cke_editable .ql-indent-6{padding-right:240px}[dir=ltr] .cke_editable li.ql-indent-6{padding-left:259px}[dir=rtl] .cke_editable li.ql-indent-6{padding-right:259px}[dir=ltr] .cke_editable .ql-indent-7{padding-left:280px}[dir=rtl] .cke_editable .ql-indent-7{padding-right:280px}[dir=ltr] .cke_editable li.ql-indent-7{padding-left:299px}[dir=rtl] .cke_editable li.ql-indent-7{padding-right:299px}[dir=ltr] .cke_editable .ql-indent-8{padding-left:320px}[dir=rtl] .cke_editable .ql-indent-8{padding-right:320px}[dir=ltr] .cke_editable li.ql-indent-8{padding-left:339px}[dir=rtl] .cke_editable li.ql-indent-8{padding-right:339px}[dir=ltr] .cke_editable .ql-align-right{text-align:right}[dir=rtl] .cke_editable .ql-align-right{text-align:left}.cke_editable .ql-align-center{text-align:center}.cke_editable .fontColorRedDark{color:\"[theme:redDark, default: #a80000]\"}.cke_editable .fontColorRed{color:\"[theme:red, default: #e81123]\"}.cke_editable .fontColorYellow{color:\"[theme:yellow, default: #ffb900]\"}.cke_editable .fontColorYellowLight{color:\"[theme:yellowLight, default: #fff100]\"}.cke_editable .fontColorGreenLight{color:\"[theme:greenLight, default: #bad80a]\"}.cke_editable .fontColorGreen{color:\"[theme:green, default: #107c10]\"}.cke_editable .fontColorBlueLight{color:\"[theme:blueLight, default: #00bcf2]\"}.cke_editable .fontColorBlue{color:\"[theme:blue, default: #0078d4]\"}.cke_editable .fontColorBlueDark{color:\"[theme:blueDark, default: #002050]\"}.cke_editable .fontColorPurple{color:\"[theme:purple, default: #5c2d91]\"}.cke_editable .fontColorNeutralDark{color:\"[theme:neutralDark, default: #212121]\"}.cke_editable .fontColorNeutralPrimary{color:\"[theme:neutralPrimary, default: #333333]\"}.cke_editable .fontColorNeutralPrimaryAlt{color:\"[theme:neutralPrimaryAlt, default: #3c3c3c]\"}.cke_editable .fontColorNeutralSecondary{color:\"[theme:neutralSecondary, default: #666666]\"}.cke_editable .fontColorNeutralTertiary{color:\"[theme:neutralTertiary, default: #a6a6a6]\"}.cke_editable .fontColorThemeDarker{color:\"[theme:themeDarker, default: #004578]\"}.cke_editable .fontColorThemeDark{color:\"[theme:themeDark, default: #005a9e]\"}.cke_editable .fontColorThemeDarkAlt{color:\"[theme:themeDarkAlt, default: #106ebe]\"}.cke_editable .fontColorThemePrimary{color:\"[theme:themePrimary, default: #0078d4]\"}.cke_editable .fontColorThemeSecondary{color:\"[theme:themeSecondary, default: #2b88d8]\"}.cke_editable .fontSizeMediumPlus{font-size:15px}.cke_editable .fontSizeLarge{font-size:17px}.cke_editable .fontSizeXLarge{font-size:21px}.cke_editable .fontSizeMedium,.cke_editable .fontSizeMediumPlus,.cke_editable .fontSizeSmall,.cke_editable .fontSizeSuper,.cke_editable .fontSizeXxLargePlus,.cke_editable .fontSizeXxxLarge{line-height:1.3}.cke_editable .highlightColorYellow{background-color:#ff0}.cke_editable .highlightColorGreen{background-color:#0f0}.cke_editable .highlightColorAqua{background-color:#0ff}.cke_editable .highlightColorMagenta{background-color:#f0f}.cke_editable .highlightColorBlue{background-color:#00f}.cke_editable .highlightColorRed{background-color:red}.cke_editable .highlightColorDarkBlue{background-color:navy}.cke_editable .highlightColorTeal{background-color:teal}.cke_editable .highlightColorDarkGreen{background-color:green}.cke_editable .highlightColorPurple{background-color:purple}.cke_editable .highlightColorMaroon{background-color:maroon}.cke_editable .highlightColorGold{background-color:olive}.cke_editable .highlightColorDarkGrey{background-color:grey}.cke_editable .highlightColorGrey{background-color:silver}.cke_editable .highlightColorBlack{background-color:#000}@media only screen and (max-width:640px){.cke_editable table,.cke_editable td,.cke_editable th{padding:8px!important;white-space:normal}.cke_editable table{max-width:600px!important}.cke_editable td p,.cke_editable td p span,.cke_editable th p,.cke_editable th p span{font-size:12px!important}}.cke_editable .ms-missinglink{text-decoration:none;background-image:linear-gradient(90deg,\"[theme:themePrimary, default: #0078d4]\" 75%,transparent 0);background-position:0 1.12em;background-repeat:repeat-x;background-size:8px 1px}.cke_editable td,.cke_editable td p,.cke_editable th,.cke_editable th p{font-size:18px;font-weight:400}.cke_editable .fontSizeXSmall{font-size:10px}.cke_editable .fontSizeSmall{font-size:12px}.cke_editable .fontSizeMedium{font-size:14px}.cke_editable .fontSizeMediumPlus{font-size:16px}.cke_editable .fontSizeLarge{font-size:18px}.cke_editable .fontSizeXLarge{font-size:20px}.cke_editable .fontSizeXLargePlus{font-size:24px}.cke_editable .fontSizeXxLarge{font-size:28px}.cke_editable .fontSizeXxxLarge{font-size:32px}.cke_editable .fontSizeXxLargePlus{font-size:36px}.cke_editable .fontSizeSuper{font-size:42px}.cke_editable .fontSizeMega{font-size:68px}.cke_editable .fontSizeMedium,.cke_editable .fontSizeMediumPlus,.cke_editable .fontSizeMega,.cke_editable .fontSizeSmall,.cke_editable .fontSizeSuper,.cke_editable .fontSizeXSmall,.cke_editable .fontSizeXxLargePlus,.cke_editable .fontSizeXxxLarge{line-height:1.4}.cke_editable .webPartInRte .ToolbarButtonTooltip{margin:0}@media (max-width:1023px){.cke_editable .webPartInRteAlignLeft,.cke_editable .webPartInRteAlignRight{width:100%}}@media (min-width:1024px){.cke_editable .webPartInRteAlignLeft,.cke_editable .webPartInRteAlignRight{max-width:66%}}[dir=ltr] .cke_editable .webPartInRteAlignLeft{float:left}[dir=ltr] .cke_editable .webPartInRteAlignRight,[dir=rtl] .cke_editable .webPartInRteAlignLeft{float:right}[dir=rtl] .cke_editable .webPartInRteAlignRight{float:left}.cke_editable .webPartInRteAlignCenter{width:100%}.cke_editable .webPartInRte div[class^=resizeController]{margin:-7px auto 7px}.cke_editable .webPartInRte div[class^=resizeController] div[class^=resizeButtonBottomLeft],.cke_editable .webPartInRte div[class^=resizeController] div[class^=resizeButtonBottomRight]{margin-bottom:0}.cke_editable ol>li>.cke_widget_wrapper_webPartInRte>.webPartInRte{float:none;padding:0;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}.cke_editable ol>li>.cke_widget_wrapper_webPartInRte>.webPartInRte img{max-width:none!important}.fixEditorPadding{padding:8px}.cke_inner.cke_reset{background:inherit}.inlineImageEditToolbar{display:none}.cke_widget_selected .inlineImageEditToolbar{display:block}.rte--inline i{font-style:normal!important}.rte--inline div{margin:0!important}[dir=ltr] .rte--inline div .webPartInRteAlignLeft{padding-right:16px!important}[dir=ltr] .rte--inline div .webPartInRteAlignRight,[dir=rtl] .rte--inline div .webPartInRteAlignLeft{padding-left:16px!important}[dir=rtl] .rte--inline div .webPartInRteAlignRight{padding-right:16px!important}.rte--inline .cke_widget_inlineimage.cke_widget_wrapper_webPartInRte:first-child{margin-top:40px!important}", ""]);


/***/ }),

/***/ "bGc9":
/*!************************************************!*\
  !*** ./lib/rte/ckeditor/CKTextEditor.types.js ***!
  \************************************************/
/*! exports provided: HTMLAttribute */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTMLAttribute", function() { return HTMLAttribute; });
// tslint:disable-next-line:typedef variable-name
var HTMLAttribute = { Title: 'title', DataLink: 'data-sprte-link', Class: 'class' };


/***/ }),

/***/ "bXd7":
/*!*******************************************!*\
  !*** external "@ms/sp-coachmark-utility" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_bXd7__;

/***/ }),

/***/ "cDcd":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_cDcd__;

/***/ }),

/***/ "dFtb":
/*!*******************************************!*\
  !*** ./lib/rte/ckeditor/CKTextEditor.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../../../common/temp/node_modules/.pnpm/css-loader@3.2.1_webpack@4.44.2/node_modules/css-loader/dist/cjs.js!../../../../../common/temp/node_modules/.pnpm/postcss-loader@3.0.0/node_modules/postcss-loader/src??postcss!./CKTextEditor.css */ "X1Xl");
var loader = __webpack_require__(/*! @microsoft/load-themed-styles */ "jOlS");

if(typeof content === "string") content = [[module.i, content]];

// add the styles to the DOM
for (var i = 0; i < content.length; i++) loader.loadStyles(content[i][1], true);

if(content.locals) module.exports = content.locals;

/***/ }),

/***/ "fHAL":
/*!******************************************************!*\
  !*** ./lib/toolbar/toolbarSubMenu/ToolbarSubmenu.js ***!
  \******************************************************/
/*! exports provided: ToolbarSubmenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolbarSubmenu", function() { return ToolbarSubmenu; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @microsoft/office-ui-fabric-react-bundle */ "KL1q");
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ms_sp_a11y__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ms/sp-a11y */ "ytfe");
/* harmony import */ var _ms_sp_a11y__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ms_sp_a11y__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ms/sp-component-utilities */ "hiL/");
/* harmony import */ var _ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ToolbarSubmenu_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ToolbarSubmenu.scss */ "sjA7");
/**
 * @copyright Microsoft Corporation. All rights reserved.
 *
 * @file Contains ToolbarSubmenu class which is used to group related buttons in toolbar
 */






var DISPLAYBUTTON = 'displayButton';
/**
 * @class Submenu can be used in as toolbar item just like a button, to group a number of related buttons
 * that do different variations of an action (like text alignment). Only one of the buttons in a submenu
 * can be active at a time. The icon shown in the closed state is the icon of the active button
 */
var ToolbarSubmenu = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ToolbarSubmenu, _super);
    function ToolbarSubmenu(props) {
        var _this = _super.call(this, props) || this;
        _this._menuElementRef = react__WEBPACK_IMPORTED_MODULE_1__["createRef"]();
        _this._menuId = "ToolbarSubMenu_" + ++ToolbarSubmenu._INSTANCE_COUNT;
        _this._bindButtonClickHandlers = function () {
            // Bind submenu button click handler to the exisiting one for each button
            // This makes sure the submenu closes after the action is done
            for (var _i = 0, _a = _this.props.buttons; _i < _a.length; _i++) {
                var buttonProps = _a[_i];
                buttonProps.onClick = _this._handleOnButtonClick.bind(_this, buttonProps.onClick);
            }
        };
        _this._handleSubmenuKeyDown = function (e) {
            if (_this.state.isOpen && (e.key === 'ArrowRight' || e.key === 'ArrowLeft' || e.key === 'Tab')) {
                _this._isKeyboardNav = true;
                _this._handleCloseSubmenu();
            }
        };
        /* tslint:disable-next-line:no-any */
        _this._handleSubmenuItemsKeyDown = function (e) {
            var isEnterKey = e.key === 'Enter';
            if (e.key === 'ArrowDown' || isEnterKey) {
                if (isEnterKey) {
                    e.preventDefault();
                }
                _this._isKeyboardNav = true;
                _this._handleOpenSubmenu();
            }
        };
        _this._handleClickOnDisplayButton = function () {
            if (_this.state.isOpen) {
                _this._handleCloseSubmenu();
            }
            else {
                _this._handleOpenSubmenu();
            }
        };
        _this._handleOpenSubmenu = function () {
            _this._focusElement = document.activeElement;
            if (_this.props.onOpen) {
                _this.props.onOpen();
            }
            _this.setState({ isOpen: true });
        };
        _this._handleCloseSubmenu = function (isDocumentClick) {
            _this.setState({ isOpen: false });
            if (_this.props.onClose) {
                _this.props.onClose(isDocumentClick);
            }
        };
        /**
         * @param onClickAction - The original onClick callback passed for the button
         *
         * Closes the submenu after calling the action of the button
         * All the button props must be updated to use this function as their onClick handler
         */
        _this._handleOnButtonClick = function (onClickCallback) {
            onClickCallback();
            // Close the submenu to the OnClick behavior of each button
            _this._handleCloseSubmenu();
        };
        _this._handleDocumentClick = function (evt) {
            var currentTarget = evt.target;
            if (_this.state.isOpen &&
                currentTarget.getAttribute('data-automation-id') !== DISPLAYBUTTON &&
                currentTarget.parentElement &&
                currentTarget.parentElement.getAttribute('data-automation-id') !== DISPLAYBUTTON) {
                _this._handleCloseSubmenu(true);
            }
        };
        if (props.a11yManagerId) {
            _this._a11yManager = _ms_sp_a11y__WEBPACK_IMPORTED_MODULE_3__["A11yManager"].getInstanceById(props.a11yManagerId);
        }
        // Submenu closed by default
        _this.state = {
            isOpen: props.isOpen
        };
        return _this;
    }
    ToolbarSubmenu.prototype.componentDidMount = function () {
        document.addEventListener('click', this._handleDocumentClick);
        this._menuElement.setAttribute('data-sp-a11y-skipkeys', String(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_2__["KeyCodes"].tab));
    };
    ToolbarSubmenu.prototype.componentDidUpdate = function (prevProps, prevState) {
        /**
         * If the user has navigated via keyboard,
         * Ensure focus isn't lost when navigating out of a submenu via the left/right arrow keys.
         * Set the focus back to the submenu active button.
         */
        if (this._isKeyboardNav && !this.state.isOpen && this._focusElement) {
            // Fall back to static focus method if a11yManager does not exist
            if (this._a11yManager) {
                this._a11yManager.focusTo(this._focusElement);
            }
            else {
                _ms_sp_a11y__WEBPACK_IMPORTED_MODULE_3__["Focus"].focusTo(this._focusElement);
            }
            this._focusElement = undefined;
            this._isKeyboardNav = false;
        }
        if (this._isKeyboardNav && this.state.isOpen && this._menuElement) {
            // Fall back to static focus method if a11yManager does not exist
            if (this._a11yManager) {
                this._a11yManager.focusInside(this._menuElement);
            }
            else {
                _ms_sp_a11y__WEBPACK_IMPORTED_MODULE_3__["Focus"].focusInside(this._menuElement);
            }
            // We need to reset this to false every time a user is navigating inside the submenu
            // It will be set to true when user uses down arrow key to open the submenu
            this._isKeyboardNav = false;
        }
    };
    ToolbarSubmenu.prototype.UNSAFE_componentWillReceiveProps = function (nextProps) {
        if (this.props.isOpen !== nextProps.isOpen) {
            this.setState({ isOpen: nextProps.isOpen });
        }
    };
    ToolbarSubmenu.prototype.componentWillUnmount = function () {
        document.removeEventListener('click', this._handleDocumentClick);
    };
    /**
     *  Render the submenu, depending on its open state
     */
    ToolbarSubmenu.prototype.render = function () {
        var _this = this;
        var openedCssClass = this.state.isOpen ? 'is-open' : '';
        var wideCssClass = this.props.isWide ? 'ToolbarSubmenu--wide' : '';
        var activeButton = this._getActiveButton();
        this._bindButtonClickHandlers();
        var buttonElements = [];
        this.props.buttons.forEach(function (buttonProps, index) {
            buttonElements.push(react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_4__["ToolbarButton"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, buttonProps, { className: buttonProps.className, key: buttonProps.automationId || index, tabIndex: _this.state.isOpen ? 0 : -1, isActive: buttonProps === activeButton ? true : buttonProps.isActive, buttonProps: {
                    role: 'menuitem',
                    'aria-posinset': index + 1,
                    'aria-setsize': _this.props.buttons.length
                } })));
        });
        var isDarkTheme = Object(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_2__["getTheme"])().isInverted;
        var iconClassName = Object(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_2__["css"])('ToolbarSubmenu-caret', {
            LightTheme: !isDarkTheme,
            DarkTheme: isDarkTheme
        });
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "ToolbarSubmenu " + openedCssClass + " " + wideCssClass },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_4__["ToolbarButton"], { className: 'ToolbarSubmenu-displayButton', fabricIconKey: activeButton.fabricIconKey, iconClassName: activeButton.iconClassName, key: 'displayButton', onClick: this._handleClickOnDisplayButton, label: activeButton.label, tabIndex: this.state.isOpen ? -1 : 0, title: activeButton.title, onKeyDown: this._handleSubmenuItemsKeyDown, automationId: DISPLAYBUTTON, onBlur: this.props.onBlur, onFocus: this.props.onFocus, buttonProps: {
                    'aria-haspopup': true,
                    'aria-expanded': this.state.isOpen,
                    'aria-controls': this._menuId
                } }),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_2__["Icon"], { className: iconClassName, iconName: 'CaretDownSolid8' }),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_2__["FocusZone"], { isCircularNavigation: true },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { id: this._menuId, role: 'menu', className: 'ToolbarSubmenu-menuItems', ref: this._menuElementRef, onKeyDown: this._handleSubmenuKeyDown, "data-automation-id": 'subMenuContainer' }, buttonElements))));
    };
    Object.defineProperty(ToolbarSubmenu.prototype, "_menuElement", {
        get: function () {
            return this._menuElementRef.current;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Return the props of the currently active button
     */
    ToolbarSubmenu.prototype._getActiveButton = function () {
        for (var _i = 0, _a = this.props.buttons; _i < _a.length; _i++) {
            var button = _a[_i];
            if (button.isActive) {
                return button;
            }
        }
        // No active button found, return the first one
        return this.props.buttons[0];
    };
    ToolbarSubmenu._INSTANCE_COUNT = 0;
    return ToolbarSubmenu;
}(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_2__["BaseComponent"]));



/***/ }),

/***/ "faye":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_faye__;

/***/ }),

/***/ "fdBK":
/*!**************************************!*\
  !*** ./lib/rte/ckeditor/CKLoader.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/sp-diagnostics */ "ut3N");
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _microsoft_sp_loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/sp-loader */ "I6O9");
/* harmony import */ var _microsoft_sp_loader__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_loader__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_Flights__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/Flights */ "w4+A");
/**
 * @copyright Microsoft Corporation. All rights reserved.
 */



var CKEDITOR_PATH_KEY = 'CKEDITOR_BASEPATH';
var SP_CKEDITOR_BASE_URL = /* requireFolder */ __webpack_require__.p + "sp-ckeditor_1840b97dce3cf2accaa88002a29cddc7/";
var SP_CKEDITOR_FLIGHT_BASE_URL = /* requireFolder */ __webpack_require__.p + "sp-ckeditor-flight_6057ec8164743d85f627c77819c4705e/";
var SP_CKEDITOR_STABLE_BASE_URL = /* requireFolder */ __webpack_require__.p + "sp-ckeditor-stable_1840b97dce3cf2accaa88002a29cddc7/";
var CKLoader = /** @class */ (function () {
    function CKLoader() {
    }
    CKLoader._setup = function () {
        CKEDITOR.disableAutoInline = true;
    };
    CKLoader.prototype.loadModule = function () {
        var _this = this;
        if (!CKLoader._editorPromise) {
            var externalCKEditorFlightEnabled = _common_Flights__WEBPACK_IMPORTED_MODULE_2__["default"].isExternalCKEditorFlightEnabled();
            var ckLoaderMonitor_1 = new _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_0__["_QosMonitor"]('CKeditorLoadComponentById');
            var editorPath = externalCKEditorFlightEnabled
                ? SP_CKEDITOR_FLIGHT_BASE_URL
                : SP_CKEDITOR_STABLE_BASE_URL;
            window[CKEDITOR_PATH_KEY] = editorPath;
            var ckeditorKey = externalCKEditorFlightEnabled
                ? CKLoader._ckeditorFlightComponentId
                : CKLoader._ckeditorStableComponentId;
            CKLoader._editorPromise = _microsoft_sp_loader__WEBPACK_IMPORTED_MODULE_1__["SPComponentLoader"].loadComponentById(ckeditorKey)
                .then(function (init) {
                // tslint:disable-next-line: no-any
                var result = init.CKEditorLoader.load();
                CKLoader._setup();
                ckLoaderMonitor_1.writeSuccess();
                return result;
            })
                // Try to fallback to chunk loading
                .catch(function (error) {
                ckLoaderMonitor_1.writeUnexpectedFailure('CKeditorLoadComponentByIdFailed', error);
                _this._loadEditorAsChunk();
            });
        }
        return CKLoader._editorPromise;
    };
    CKLoader.prototype._loadEditorAsChunk = function () {
        var externalCKEditorFlightEnabled = _common_Flights__WEBPACK_IMPORTED_MODULE_2__["default"].isExternalCKEditorFlightEnabled();
        var editorPath = externalCKEditorFlightEnabled
            ? SP_CKEDITOR_FLIGHT_BASE_URL
            : SP_CKEDITOR_BASE_URL;
        window[CKEDITOR_PATH_KEY] = editorPath;
        if (externalCKEditorFlightEnabled) {
            // prettier-ignore
            CKLoader._editorPromise = __webpack_require__.e(/*! import() | sp-canvas-sp-ckeditor-flight */ "vendors~sp-canvas-sp-ckeditor-flight").then(__webpack_require__.t.bind(null, /*! @ms/sp-ckeditor-flight/node_modules/@ms/sp-ckeditor */ "5FiQ", 7));
        }
        else {
            // prettier-ignore
            CKLoader._editorPromise = __webpack_require__.e(/*! import() | sp-canvas-sp-ckeditor */ "vendors~sp-canvas-sp-ckeditor").then(__webpack_require__.t.bind(null, /*! @ms/sp-ckeditor */ "e4WK", 7));
        }
        CKLoader._editorPromise = CKLoader._editorPromise
            .then(function (editor) {
            CKLoader._setup();
            return editor;
        })
            .catch(function (error) {
            _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_0__["_TraceLogger"].logError(CKLoader.logSource, error);
            throw error;
        });
    };
    CKLoader.logSource = _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_0__["_LogSource"].create('SPRteCKLoader');
    CKLoader._ckeditorFlightComponentId = 'b00dc31b-0f09-4cdc-977e-7810d7f9d087';
    CKLoader._ckeditorStableComponentId = 'ad843ba1-a2ac-4506-815e-f02bd9f3e77b';
    return CKLoader;
}());
/* harmony default export */ __webpack_exports__["default"] = (CKLoader);


/***/ }),

/***/ "hiL/":
/*!*********************************************!*\
  !*** external "@ms/sp-component-utilities" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_hiL___;

/***/ }),

/***/ "iGqh":
/*!*********************************************!*\
  !*** ./lib/rte/a11y/RteA11y.module.scss.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* tslint:disable */
__webpack_require__(/*! ./RteA11y.module.css */ "TTLS");
var styles = {
    screenReaderOnly: 'a_a_e078741a'
};
/* harmony default export */ __webpack_exports__["default"] = (styles);
/* tslint:enable */ 


/***/ }),

/***/ "jOlS":
/*!************************************************!*\
  !*** external "@microsoft/load-themed-styles" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_jOlS__;

/***/ }),

/***/ "jQov":
/*!***********************************************!*\
  !*** ./lib/rte/ckeditor/CKTextEditor.scss.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* tslint:disable */
__webpack_require__(/*! ./CKTextEditor.css */ "dFtb");
var styles = {};
/* harmony default export */ __webpack_exports__["default"] = (styles);
/* tslint:enable */ 


/***/ }),

/***/ "k/1b":
/*!**************************************!*\
  !*** ./lib/rte/common/RegexMatch.js ***!
  \**************************************/
/*! exports provided: RegexMatch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegexMatch", function() { return RegexMatch; });
/* harmony import */ var _TextParser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TextParser */ "7w0S");

/**
 * @Copyright (c) Microsoft Corporation.  All rights reserved.
 *
 * A collection of helper methods related to text parsing.
 */
var RegexMatch = /** @class */ (function () {
    function RegexMatch() {
    }
    RegexMatch.match = function (regex, text, offset) {
        var slice = _TextParser__WEBPACK_IMPORTED_MODULE_0__["TextParser"].removeZeroWidthSpaces(text.slice(0, offset));
        var match = slice.match(regex);
        return match ? { start: match.index, end: offset } : undefined;
    };
    return RegexMatch;
}());



/***/ }),

/***/ "kpJu":
/*!****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/css-loader@3.2.1_webpack@4.44.2/node_modules/css-loader/dist/cjs.js!/agent/_work/1/s/common/temp/node_modules/.pnpm/postcss-loader@3.0.0/node_modules/postcss-loader/src??postcss!./lib/rte/formattingbar/SPRteFormattingBar.css ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../common/temp/node_modules/.pnpm/css-loader@3.2.1_webpack@4.44.2/node_modules/css-loader/dist/runtime/api.js */ "5ADk")(false);
// Module
exports.push([module.i, ".rteFlyout-visible{position:absolute;z-index:2;box-shadow:0 0 5px 0 #c8c8c8;top:-45px;font-weight:400}@media (max-width:720px){.rteFlyout-visible .rteFlyout-button{padding:10px;font-size:11px}}.rteFlyout-visible .rteFlyout-button:hover{background:#0078d4}.rteFlyout-visible .rteFlyout-button .ms-Icon{padding:13px;color:#767676;font-size:14px!important}.rteFlyout-visible .rteFlyout-button:hover .ms-Icon{color:#fff}.rteFlyout-visible .rteFlyout-button img{vertical-align:middle;display:inline-block}.rteFlyout-visible .stack-panel-class{background:\"[theme:neutralPrimary, default: #333333]\"}.rteFlyout-button{background-color:transparent;border-width:0;padding:0;cursor:pointer!important}.stack-panel-class{white-space:nowrap}.SPRteFormattingBar{animation-name:ms-fadeIn,ms-slideUpIn10;animation-duration:167ms;animation-timing-function:cubic-bezier(.1,.25,.75,.9);animation-fill-mode:both;display:-ms-inline-flexbox;display:inline-flex;transition:all 367ms cubic-bezier(.1,.9,.2,1);min-width:418px;max-width:none}@media (prefers-reduced-motion:reduce){.SPRteFormattingBar{animation:none}}.SPRteFormattingBar.isFluent{box-shadow:0 3.2px 7.2px 0 rgba(0,0,0,.132),0 .6px 1.8px 0 rgba(0,0,0,.108)}.SPRteFormattingBar .ToolbarButton,.SPRteFormattingBar .ToolbarSubmenu{display:block}.SPRteFormattingBar.faded{display:none}.SPRteFormattingBar-divider{height:16px;margin-top:8px;width:0;border-right:1px solid}[dir=ltr] .SPRteFormattingBar-divider{float:left}[dir=rtl] .SPRteFormattingBar-divider{float:right}.msIcon_h2_temp:after{content:\"H2\";font-size:16px;font-style:normal;font-weight:600}.button_quote_temp .ms-Icon{font-size:28px!important;font-weight:100;line-height:1.7!important}.formattingBarFocusZone{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-align:stretch;align-items:stretch;width:100%}.button_linkRemove_temp .ms-Icon:after{content:\"x\";font-family:Arial}[dir=ltr] .button_linkRemove_temp .ms-Icon:after{margin-left:-5px}[dir=rtl] .button_linkRemove_temp .ms-Icon:after{margin-right:-5px}[dir=ltr] .button_linkRemove_temp .ms-Icon:after{margin-right:5px}[dir=rtl] .button_linkRemove_temp .ms-Icon:after{margin-left:5px}", ""]);


/***/ }),

/***/ "mwqp":
/*!**********************!*\
  !*** ./lib/index.js ***!
  \**********************/
/*! exports provided: BaseRte, BaseRteConfiguration, CKTextEditor, WebPartRte, FontSizeInPixels, FluentFontSizeInPixels, StyleColor, TableStyleType, Utilities, DeferredToolbarSubmenu, Base64MimeType, Base64toBlob */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _rte_baseRte_BaseRte__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rte/baseRte/BaseRte */ "oubO");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaseRte", function() { return _rte_baseRte_BaseRte__WEBPACK_IMPORTED_MODULE_0__["BaseRte"]; });

/* harmony import */ var _rte_baseRte_BaseRteConfiguration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rte/baseRte/BaseRteConfiguration */ "wG+9");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaseRteConfiguration", function() { return _rte_baseRte_BaseRteConfiguration__WEBPACK_IMPORTED_MODULE_1__["BaseRteConfiguration"]; });

/* harmony import */ var _rte_ckeditor_CKTextEditor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rte/ckeditor/CKTextEditor */ "Hw4Z");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CKTextEditor", function() { return _rte_ckeditor_CKTextEditor__WEBPACK_IMPORTED_MODULE_2__["CKTextEditor"]; });

/* harmony import */ var _rte_webPartRte_WebPartRte__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./rte/webPartRte/WebPartRte */ "yH57");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WebPartRte", function() { return _rte_webPartRte_WebPartRte__WEBPACK_IMPORTED_MODULE_3__["WebPartRte"]; });

/* harmony import */ var _rte_common_FormatTypes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./rte/common/FormatTypes */ "wSgF");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FontSizeInPixels", function() { return _rte_common_FormatTypes__WEBPACK_IMPORTED_MODULE_4__["FontSizeInPixels"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FluentFontSizeInPixels", function() { return _rte_common_FormatTypes__WEBPACK_IMPORTED_MODULE_4__["FluentFontSizeInPixels"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StyleColor", function() { return _rte_common_FormatTypes__WEBPACK_IMPORTED_MODULE_4__["StyleColor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TableStyleType", function() { return _rte_common_FormatTypes__WEBPACK_IMPORTED_MODULE_4__["TableStyleType"]; });

/* harmony import */ var _common_Utilities__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./common/Utilities */ "Bd75");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Utilities", function() { return _common_Utilities__WEBPACK_IMPORTED_MODULE_5__["Utilities"]; });

/* harmony import */ var _toolbar_DeferredComponents_DeferredToolbarSubmenu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./toolbar/DeferredComponents/DeferredToolbarSubmenu */ "4x8+");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DeferredToolbarSubmenu", function() { return _toolbar_DeferredComponents_DeferredToolbarSubmenu__WEBPACK_IMPORTED_MODULE_6__["DeferredToolbarSubmenu"]; });

/* harmony import */ var _rte_common_ImageUtilities__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./rte/common/ImageUtilities */ "x5Sg");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Base64MimeType", function() { return _rte_common_ImageUtilities__WEBPACK_IMPORTED_MODULE_7__["Base64MimeType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Base64toBlob", function() { return _rte_common_ImageUtilities__WEBPACK_IMPORTED_MODULE_7__["Base64toBlob"]; });

/// <reference path="../custom-typings/ckeditor/index.d.ts" />










/***/ }),

/***/ "nwhz":
/*!*************************************!*\
  !*** ./lib/rte/common/MatchLink.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TextParser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TextParser */ "7w0S");
/* harmony import */ var _RegexMatch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RegexMatch */ "k/1b");
/**
 * @copyright (c) Microsoft Corporation. All rights reserved.
 * Detects valid urls in the RTE
 * https://github.com/microsoft/roosterjs/blob/master/packages/roosterjs-editor-dom/lib/utils/matchLink.ts
 */


var MatchLink = /** @class */ (function () {
    function MatchLink() {
    }
    Object.defineProperty(MatchLink, "testHttpRegex", {
        get: function () {
            return MatchLink._testHttpRegex;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatchLink, "httpExcludeRegex", {
        get: function () {
            return MatchLink._httpExcludeRegEx;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatchLink, "linkMatchRules", {
        get: function () {
            return MatchLink._linkMatchRules;
        },
        enumerable: true,
        configurable: true
    });
    MatchLink._testHttpRegex = /^https:\/\/.*|^http:\/\/.*/i;
    MatchLink._label = '[a-z0-9](?:[a-z0-9-]*[a-z0-9])?';
    MatchLink._domainName = "(?:" + MatchLink._label + "\\.)*" + MatchLink._label;
    MatchLink._domainPort = MatchLink._domainName + "(?:\\:[0-9]+)?";
    MatchLink._domainPortWithUrl = MatchLink._domainPort + "(?:[\\/\\?]\\S*)?";
    MatchLink._matchUrlRegex = new RegExp("(http:\\/\\/|www\\.|https:\\/\\/)" + MatchLink._domainPortWithUrl + "$", 'i');
    MatchLink._httpExcludeRegEx = new RegExp("^[^?]+%[^0-9a-f]+|^[^?]+%[0-9a-f][^0-9a-f]*|^[^?]+%00|^[^?]+%$|^https?:\\/\\/[^?\\/]+@|^www\\.[^?\\/]+@|,", 'i');
    MatchLink._mailToRegex = /mailto:\S+@\S+\.\S+$/i;
    // Commented out protocols will be include them in the future if needed
    // private static readonly _notesRegex: RegExp = /notes:\/\/\S+$/i;
    // private static readonly _fileRegex: RegExp = /file:\/\/\/?\S+$/i;
    // private static readonly _telRegex: RegExp = /tel:\+?[0-9]+(\-?[0-9]*)*(p[0-9]+)*/i;
    MatchLink._linkMatchRules = {
        url: {
            match: MatchLink._matchUrlRegex,
            testRegexMatch: function (text, offset) { return MatchLink._externalLinkRegexMatch(text, offset); },
            isURL: true
        },
        mailto: {
            match: MatchLink._mailToRegex,
            testRegexMatch: function (text, offset) { return _RegexMatch__WEBPACK_IMPORTED_MODULE_1__["RegexMatch"].match(MatchLink._mailToRegex, text, offset); },
            isURL: false
        }
    };
    MatchLink.normalizeUrl = function (url) {
        if (url && url.length) {
            return MatchLink._testHttpRegex.test(url) ? url : 'https://' + url;
        }
    };
    MatchLink._externalLinkRegexMatch = function (text, offset) {
        var slice = _TextParser__WEBPACK_IMPORTED_MODULE_0__["TextParser"].removeZeroWidthSpaces(text.slice(0, offset));
        var match = MatchLink._matchURL(slice);
        return match ? { start: match.index, end: offset } : undefined;
    };
    MatchLink._matchURL = function (url) {
        var matches = url.match(MatchLink._matchUrlRegex);
        if (matches && !MatchLink._httpExcludeRegEx.test(matches[0])) {
            return matches;
        }
    };
    return MatchLink;
}());
/* harmony default export */ __webpack_exports__["default"] = (MatchLink);


/***/ }),

/***/ "o7Cv":
/*!*******************************************************!*\
  !*** ./lib/toolbar/toolbarSubMenu/ToolbarSubmenu.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../../../common/temp/node_modules/.pnpm/css-loader@3.2.1_webpack@4.44.2/node_modules/css-loader/dist/cjs.js!../../../../../common/temp/node_modules/.pnpm/postcss-loader@3.0.0/node_modules/postcss-loader/src??postcss!./ToolbarSubmenu.css */ "prby");
var loader = __webpack_require__(/*! @microsoft/load-themed-styles */ "jOlS");

if(typeof content === "string") content = [[module.i, content]];

// add the styles to the DOM
for (var i = 0; i < content.length; i++) loader.loadStyles(content[i][1], true);

if(content.locals) module.exports = content.locals;

/***/ }),

/***/ "okC0":
/*!*************************************!*\
  !*** ./lib/rte/loc/RteStrings.resx ***!
  \*************************************/
/*! exports provided: FormattingBarAlignCenterButtonTitle, FormattingBarAlignLeftButtonTitle, FormattingBarAlignRightButtonTitle, FormattingBarBoldButtonTitle, FormattingBarBulletListButtonTitle, FormattingBarClearFormattingButtonTitle, FormattingBarConfirmAction, FormattingBarConfirmActionOnSelection, FormattingBarNormalTextButtonTitle, FormattingBarHeading2ButtonTitle, FormattingBarHeading3ButtonTitle, FormattingBarHeading4ButtonTitle, FormattingBarQuoteButtonTitle, FormattingBarItalicButtonTitle, FormattingBarLinkButtonTitle, FormattingBarNumberedListButtonTitle, FormattingBarUnderlineButtonTitle, FormattingBarUnlinkButtonTitle, UndoButtonTitle, RedoButtonTitle, FormattingBarAccessibleLabel, LinkDialogErrorNotSupportedLink, LinkDialogTextFieldAriaLabel, LinkDialogTextFieldLabel, LinkDialogDisplayTextFieldLabel, LinkDialogTitle, RichTextEditorAriaLabel, RichTextEditorTitle, RichTextEditorIframeTitle, RichTextLinkDialogCancelButtonLabel, RichTextLinkDialogSaveButtonLabel, RichTextNavigationAltF10Keys, ToolbarNavigationArrowKeys, ToolbarNavigationTabKeys, ToolbarNavigationShiftTabKey, ImagesInTableNotSupported, MultiImagePasteInIENotSupported, InvalidImageSource, CloseWarningText, LoadingText, AddRowAboveText, AddRowBelowText, DeleteRowText, AddColumnLeftText, AddColumnRightText, AddRowAboveShortcutText, AddRowBelowShortcutText, DeleteRowShortcutText, StrikeThroughButtonLabel, SuperscriptButtonLabel, SubscriptButtonLabel, JustifyButtonLabel, IncreaseIndentButtonLabel, DecreaseIndentButtonLabel, FontSizeDropDownLabel, TableTitle, TableButtonLabel, InsertRowBeforeButtonLabel, InsertRowAfterButtonLabel, InsertColumnLeftButtonLabel, InsertColumnRightButtonLabel, DeleteRowButtonLabel, DeleteColumnButtonLabel, DeleteTableButtonLabel, FontColorLabel, HightlightLabel, SimpleTableButtonLabel, TableWithHeaderBorderLabel, TableWithFilledHeaderLabel, TableWithBandedRowsLabel, TableWithBandedRowsAndColumnsLabel, SimpleTableButtonThemeLabel, TableWithHeaderBorderThemeLabel, TableWithFilledHeaderThemeLabel, TableWithBandedRowsThemeLabel, TableWithBandedRowsAndColumnsThemeLabel, AlignTableLeftLabel, AlignTableCenterLabel, AlignTableRightLabel, RTEPagePickerSaveAction, RTEPagePickerUnlinkAction, FormattingBarPreButtonTitle, CommandShortcutOnMac, ControlShortcutOnWin, SuggestedPageLabelTemplate, WikiLinkingCoachMarkTitle, WikiLinkingCoachMarkContent, WikiLinkingCoachMarkButton, WikiLinkingInsertedAccessibleConfirmation, WikiLinkingSelectedLabel, CreateTopicButtonLabel, TopicPickerDefinitionSection, TopicPickerDefinitionRelatedPeople, TopicPickerHeaderDescription, topic, NoTopicSuggestions, InputTopicName, Topics, EmptyTopicSuggestion, CreateNewTopic, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"FormattingBarAlignCenterButtonTitle\":\"FormattingBarAlignCenterButtonTitle\",\"FormattingBarAlignLeftButtonTitle\":\"FormattingBarAlignLeftButtonTitle\",\"FormattingBarAlignRightButtonTitle\":\"FormattingBarAlignRightButtonTitle\",\"FormattingBarBoldButtonTitle\":\"FormattingBarBoldButtonTitle\",\"FormattingBarBulletListButtonTitle\":\"FormattingBarBulletListButtonTitle\",\"FormattingBarClearFormattingButtonTitle\":\"FormattingBarClearFormattingButtonTitle\",\"FormattingBarConfirmAction\":\"FormattingBarConfirmAction\",\"FormattingBarConfirmActionOnSelection\":\"FormattingBarConfirmActionOnSelection\",\"FormattingBarNormalTextButtonTitle\":\"FormattingBarNormalTextButtonTitle\",\"FormattingBarHeading2ButtonTitle\":\"FormattingBarHeading2ButtonTitle\",\"FormattingBarHeading3ButtonTitle\":\"FormattingBarHeading3ButtonTitle\",\"FormattingBarHeading4ButtonTitle\":\"FormattingBarHeading4ButtonTitle\",\"FormattingBarQuoteButtonTitle\":\"FormattingBarQuoteButtonTitle\",\"FormattingBarItalicButtonTitle\":\"FormattingBarItalicButtonTitle\",\"FormattingBarLinkButtonTitle\":\"FormattingBarLinkButtonTitle\",\"FormattingBarNumberedListButtonTitle\":\"FormattingBarNumberedListButtonTitle\",\"FormattingBarUnderlineButtonTitle\":\"FormattingBarUnderlineButtonTitle\",\"FormattingBarUnlinkButtonTitle\":\"FormattingBarUnlinkButtonTitle\",\"UndoButtonTitle\":\"UndoButtonTitle\",\"RedoButtonTitle\":\"RedoButtonTitle\",\"FormattingBarAccessibleLabel\":\"FormattingBarAccessibleLabel\",\"LinkDialogErrorNotSupportedLink\":\"LinkDialogErrorNotSupportedLink\",\"LinkDialogTextFieldAriaLabel\":\"LinkDialogTextFieldAriaLabel\",\"LinkDialogTextFieldLabel\":\"LinkDialogTextFieldLabel\",\"LinkDialogDisplayTextFieldLabel\":\"LinkDialogDisplayTextFieldLabel\",\"LinkDialogTitle\":\"LinkDialogTitle\",\"RichTextEditorAriaLabel\":\"RichTextEditorAriaLabel\",\"RichTextEditorTitle\":\"RichTextEditorTitle\",\"RichTextEditorIframeTitle\":\"RichTextEditorIframeTitle\",\"RichTextLinkDialogCancelButtonLabel\":\"RichTextLinkDialogCancelButtonLabel\",\"RichTextLinkDialogSaveButtonLabel\":\"RichTextLinkDialogSaveButtonLabel\",\"RichTextNavigationAltF10Keys\":\"RichTextNavigationAltF10Keys\",\"ToolbarNavigationArrowKeys\":\"ToolbarNavigationArrowKeys\",\"ToolbarNavigationTabKeys\":\"ToolbarNavigationTabKeys\",\"ToolbarNavigationShiftTabKey\":\"ToolbarNavigationShiftTabKey\",\"ImagesInTableNotSupported\":\"ImagesInTableNotSupported\",\"MultiImagePasteInIENotSupported\":\"MultiImagePasteInIENotSupported\",\"InvalidImageSource\":\"InvalidImageSource\",\"CloseWarningText\":\"CloseWarningText\",\"LoadingText\":\"LoadingText\",\"AddRowAboveText\":\"AddRowAboveText\",\"AddRowBelowText\":\"AddRowBelowText\",\"DeleteRowText\":\"DeleteRowText\",\"AddColumnLeftText\":\"AddColumnLeftText\",\"AddColumnRightText\":\"AddColumnRightText\",\"AddRowAboveShortcutText\":\"AddRowAboveShortcutText\",\"AddRowBelowShortcutText\":\"AddRowBelowShortcutText\",\"DeleteRowShortcutText\":\"DeleteRowShortcutText\",\"StrikeThroughButtonLabel\":\"StrikeThroughButtonLabel\",\"SuperscriptButtonLabel\":\"SuperscriptButtonLabel\",\"SubscriptButtonLabel\":\"SubscriptButtonLabel\",\"JustifyButtonLabel\":\"JustifyButtonLabel\",\"IncreaseIndentButtonLabel\":\"IncreaseIndentButtonLabel\",\"DecreaseIndentButtonLabel\":\"DecreaseIndentButtonLabel\",\"FontSizeDropDownLabel\":\"FontSizeDropDownLabel\",\"TableTitle\":\"TableTitle\",\"TableButtonLabel\":\"TableButtonLabel\",\"InsertRowBeforeButtonLabel\":\"InsertRowBeforeButtonLabel\",\"InsertRowAfterButtonLabel\":\"InsertRowAfterButtonLabel\",\"InsertColumnLeftButtonLabel\":\"InsertColumnLeftButtonLabel\",\"InsertColumnRightButtonLabel\":\"InsertColumnRightButtonLabel\",\"DeleteRowButtonLabel\":\"DeleteRowButtonLabel\",\"DeleteColumnButtonLabel\":\"DeleteColumnButtonLabel\",\"DeleteTableButtonLabel\":\"DeleteTableButtonLabel\",\"FontColorLabel\":\"FontColorLabel\",\"HightlightLabel\":\"HightlightLabel\",\"SimpleTableButtonLabel\":\"SimpleTableButtonLabel\",\"TableWithHeaderBorderLabel\":\"TableWithHeaderBorderLabel\",\"TableWithFilledHeaderLabel\":\"TableWithFilledHeaderLabel\",\"TableWithBandedRowsLabel\":\"TableWithBandedRowsLabel\",\"TableWithBandedRowsAndColumnsLabel\":\"TableWithBandedRowsAndColumnsLabel\",\"SimpleTableButtonThemeLabel\":\"SimpleTableButtonThemeLabel\",\"TableWithHeaderBorderThemeLabel\":\"TableWithHeaderBorderThemeLabel\",\"TableWithFilledHeaderThemeLabel\":\"TableWithFilledHeaderThemeLabel\",\"TableWithBandedRowsThemeLabel\":\"TableWithBandedRowsThemeLabel\",\"TableWithBandedRowsAndColumnsThemeLabel\":\"TableWithBandedRowsAndColumnsThemeLabel\",\"AlignTableLeftLabel\":\"AlignTableLeftLabel\",\"AlignTableCenterLabel\":\"AlignTableCenterLabel\",\"AlignTableRightLabel\":\"AlignTableRightLabel\",\"RTEPagePickerSaveAction\":\"RTEPagePickerSaveAction\",\"RTEPagePickerUnlinkAction\":\"RTEPagePickerUnlinkAction\",\"FormattingBarPreButtonTitle\":\"FormattingBarPreButtonTitle\",\"CommandShortcutOnMac\":\"CommandShortcutOnMac\",\"ControlShortcutOnWin\":\"ControlShortcutOnWin\",\"SuggestedPageLabelTemplate\":\"SuggestedPageLabelTemplate\",\"WikiLinkingCoachMarkTitle\":\"WikiLinkingCoachMarkTitle\",\"WikiLinkingCoachMarkContent\":\"WikiLinkingCoachMarkContent\",\"WikiLinkingCoachMarkButton\":\"WikiLinkingCoachMarkButton\",\"WikiLinkingInsertedAccessibleConfirmation\":\"WikiLinkingInsertedAccessibleConfirmation\",\"WikiLinkingSelectedLabel\":\"WikiLinkingSelectedLabel\",\"CreateTopicButtonLabel\":\"CreateTopicButtonLabel\",\"TopicPickerDefinitionSection\":\"TopicPickerDefinitionSection\",\"TopicPickerDefinitionRelatedPeople\":\"TopicPickerDefinitionRelatedPeople\",\"TopicPickerHeaderDescription\":\"TopicPickerHeaderDescription\",\"topic\":\"topic\",\"NoTopicSuggestions\":\"NoTopicSuggestions\",\"InputTopicName\":\"InputTopicName\",\"Topics\":\"Topics\",\"EmptyTopicSuggestion\":\"EmptyTopicSuggestion\",\"CreateNewTopic\":\"CreateNewTopic\"}");

/***/ }),

/***/ "oubO":
/*!************************************!*\
  !*** ./lib/rte/baseRte/BaseRte.js ***!
  \************************************/
/*! exports provided: CREATE_EDITOR_MONITOR, CREATE_EDITOR_MONITOR_FAILURE, BaseRte */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CREATE_EDITOR_MONITOR", function() { return CREATE_EDITOR_MONITOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CREATE_EDITOR_MONITOR_FAILURE", function() { return CREATE_EDITOR_MONITOR_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseRte", function() { return BaseRte; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "faye");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @microsoft/office-ui-fabric-react-bundle */ "KL1q");
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @microsoft/sp-diagnostics */ "ut3N");
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ms_sp_a11y__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ms/sp-a11y */ "ytfe");
/* harmony import */ var _ms_sp_a11y__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_ms_sp_a11y__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _ms_sp_safehtml__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ms/sp-safehtml */ "NEVa");
/* harmony import */ var _ms_sp_safehtml__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_ms_sp_safehtml__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _common_DeferredPagePicker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../common/DeferredPagePicker */ "SiiP");
/* harmony import */ var _formattingbar_SPRteFormattingBar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../formattingbar/SPRteFormattingBar */ "vNVH");
/* harmony import */ var _ckeditor_CKTextEditor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../ckeditor/CKTextEditor */ "Hw4Z");
/* harmony import */ var _ms_sp_coachmark_utility__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ms/sp-coachmark-utility */ "bXd7");
/* harmony import */ var _ms_sp_coachmark_utility__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_ms_sp_coachmark_utility__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ms/sp-component-utilities */ "hiL/");
/* harmony import */ var _ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _toolbar_toolbarSubMenu_ToolbarSubmenu__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../toolbar/toolbarSubMenu/ToolbarSubmenu */ "fHAL");
/* harmony import */ var _common_Flights__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../common/Flights */ "w4+A");
/* harmony import */ var _common_FormatTypes__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../common/FormatTypes */ "wSgF");
/* harmony import */ var _a11y_RteA11y__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../a11y/RteA11y */ "Qyis");
/* harmony import */ var _common_KillSwitches__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../common/KillSwitches */ "+ORw");
/* harmony import */ var _common_Utilities__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../common/Utilities */ "Bd75");
/* harmony import */ var _common_MatchLink__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../common/MatchLink */ "nwhz");
/* harmony import */ var _loc_RteStrings_resx__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../loc/RteStrings.resx */ "okC0");
var _loc_RteStrings_resx__WEBPACK_IMPORTED_MODULE_20___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../loc/RteStrings.resx */ "okC0", 1);
/* harmony import */ var _BaseRte_scss__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./BaseRte.scss */ "MxJZ");
/* harmony import */ var _common_DeferredWikiPageSuggestions__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../common/DeferredWikiPageSuggestions */ "Kx4S");
/* harmony import */ var _common_RegexMatch__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../common/RegexMatch */ "k/1b");
/* harmony import */ var _microsoft_sp_page_context__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @microsoft/sp-page-context */ "X+PM");
/* harmony import */ var _microsoft_sp_page_context__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_page_context__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var _common_DeferredTopicPicker__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../common/DeferredTopicPicker */ "0YzQ");
/**
 * @copyright Microsoft Corporation. All rights reserved.
 */


























var CLICK_ACTION = '.Click';
var BUTTON_NAME = 'Button';
var CREATE_EDITOR_MONITOR = 'CreateNewEditor';
var CREATE_EDITOR_MONITOR_FAILURE = 'EditorFailedToLoad';
var CREATE_EDITOR_MONITOR_EXPECTED = 'CanvasUnmounted';
var autoCompleteTriggers;
(function (autoCompleteTriggers) {
    autoCompleteTriggers["pageLink"] = "[[";
    autoCompleteTriggers["topic"] = "#";
})(autoCompleteTriggers || (autoCompleteTriggers = {}));
/**
 * @class Rich Text Editor class. This component wraps around all the RTE logic including the formatting bar.
 */
/* tslint:disable:max-line-length */
var BaseRte = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(BaseRte, _super);
    function BaseRte(props, rteOptions) {
        var _this = _super.call(this, props) || this;
        _this._editorElementRef = react__WEBPACK_IMPORTED_MODULE_1__["createRef"]();
        _this._formattingBarRef = react__WEBPACK_IMPORTED_MODULE_1__["createRef"]();
        _this._linkDataProvider = undefined;
        _this._linkProviderPromise = undefined;
        _this._wikiPageSuggestions = undefined;
        _this._inLinePickerPromise = undefined;
        _this._editorWrapperRef = react__WEBPACK_IMPORTED_MODULE_1__["createRef"]();
        _this._tabOnAutocomplete = false;
        _this._typedCharactersCount = 0;
        _this._topicPicker = undefined;
        _this._RTE_KEY_UP = 'RTEKeyUp';
        _this._RTE_KEY_DOWN = 'RTEKeyDown';
        _this._RTE_TYPING_DIFF = 'RTETypingDiff';
        _this._TOTAL_CHARACTERS = 10;
        _this._initPageAndLinkSuggestions = function () {
            // Sprte link dialog was removed in this PR https://onedrive.visualstudio.com/SPPPlat/_git/sp-client/pullrequest/273467?_a=overview
            // in case we need to add it back
            _this._initPagePicker();
            if (!_this._linkProviderPromise) {
                _this._initLinkDataProvider();
            }
            if (!_this._inLinePickerPromise) {
                _this._initWikiPageSuggestions();
            }
        };
        _this._initWikiPageSuggestions = function () {
            _this._inLinePickerPromise = Object(_common_DeferredWikiPageSuggestions__WEBPACK_IMPORTED_MODULE_22__["WikiPageSuggestionsLoader"])()
                .then(function (chunk) {
                _this._wikiPageSuggestions = chunk;
            })
                .catch(function (error) {
                _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_5__["_TraceLogger"].logError(BaseRte.logSource, error);
            });
        };
        _this._initLinkDataProvider = function () {
            var qosMonitor = new _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_5__["_QosMonitor"]('RecentPagesSuggestions');
            _this._linkProviderPromise = _common_DeferredPagePicker__WEBPACK_IMPORTED_MODULE_8__["DeferredLinkDataProvider"].getInstance()
                .load()
                .then(function () {
                _this._linkDataProvider = _common_DeferredPagePicker__WEBPACK_IMPORTED_MODULE_8__["DeferredLinkDataProvider"].getInstance().create(_this.props.serviceScope);
                return _this._getRecentPageSuggestions();
            })
                .then(function (links) {
                var recentPages = BaseRte.makePageSuggestions(links, false);
                _this._recentPages = recentPages;
                _this._prevSuggestions = recentPages;
                qosMonitor.writeSuccess();
            })
                .catch(function (error) {
                qosMonitor.writeUnexpectedFailure('LoadRecentPagesFail', error);
                _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_5__["_TraceLogger"].logError(BaseRte.logSource, error);
            });
        };
        _this._initDeferredTopicPicker = function () {
            var qosMonitor = new _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_5__["_QosMonitor"]('CSIKM.HashTagging.Load.DeferredTopicPicker');
            _this._topicPickerPromise = _common_DeferredTopicPicker__WEBPACK_IMPORTED_MODULE_25__["DeferredTopicPicker"].getInstance()
                .load()
                .then(function () {
                if (_this._editor) {
                    _this._topicPicker = _common_DeferredTopicPicker__WEBPACK_IMPORTED_MODULE_25__["DeferredTopicPicker"].getInstance().create(_this.props.serviceScope, _this._editor, _this._handleClickNewTopicButton);
                    qosMonitor.writeSuccess();
                }
                else {
                    qosMonitor.writeUnexpectedFailure('EditorUndefined');
                }
            })
                .catch(function (error) {
                qosMonitor.writeUnexpectedFailure('LoadFailure', error);
            });
        };
        _this._wikiPagePickerRegexMatch = function (text, offset) {
            return _common_RegexMatch__WEBPACK_IMPORTED_MODULE_23__["RegexMatch"].match(BaseRte._PAGE_PICKER_REGEX, text, offset);
        };
        _this._topicPickerRegexMatch = function (text, offset) {
            if (_this._topicPickerPromise) {
                return _common_DeferredTopicPicker__WEBPACK_IMPORTED_MODULE_25__["DeferredTopicPicker"].getInstance().regexMatch(text, offset);
            }
            else {
                return undefined;
            }
        };
        _this._suggestionsCallback = function (matchInfo, callback) {
            var _a, _b;
            if (_this._editor) {
                if (_this._topicPickerPromise && matchInfo.query.charAt(0) === autoCompleteTriggers.topic) {
                    if (!Object(_common_KillSwitches__WEBPACK_IMPORTED_MODULE_17__["isRTENewTopicEntryKSActivated"])()) {
                        (_a = _this._topicPicker) === null || _a === void 0 ? void 0 : _a.suggestionsCallback(_this, matchInfo, callback, !!_this.props.shouldShowNewTopicButton);
                    }
                    else {
                        _common_DeferredTopicPicker__WEBPACK_IMPORTED_MODULE_25__["DeferredTopicPicker"].getInstance().suggestionsCallback(_this, matchInfo, callback, !!_this.props.shouldShowNewTopicButton);
                    }
                }
                else {
                    var suggestionsPromise = (_b = _this._wikiPageSuggestions) === null || _b === void 0 ? void 0 : _b.pagePickerCallback(_this, _this.TAG_NAME, matchInfo, callback);
                    if (suggestionsPromise) {
                        suggestionsPromise
                            .then(function (suggestions) {
                            _this._prevSuggestions = suggestions;
                        })
                            .catch(function (error) {
                            _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_5__["_TraceLogger"].logError(BaseRte.logSource, error);
                        });
                    }
                }
            }
        };
        _this._selectedItemHTMLToInsert = function (item) {
            if (_this._editor) {
                _this._tabOnAutocomplete = true;
            }
            if (_this._topicPickerPromise && _common_DeferredTopicPicker__WEBPACK_IMPORTED_MODULE_25__["DeferredTopicPicker"].getInstance().isTopicSuggestion(item)) {
                return _common_DeferredTopicPicker__WEBPACK_IMPORTED_MODULE_25__["DeferredTopicPicker"].getInstance().selectedItemHTMLToInsert(item);
            }
            _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_5__["_EngagementLogger"].logEvent(_this.TAG_NAME + 'CreateSharePointPageLinkByKeyboardShortcut.SelectSuggestion');
            var insertHtml = "<a href=\"" + item.url + "\" target=\"_self\" title=\"" + item.url + "\" data-sprte-link=\"" + item.id + "\">" + item.name + "</a>";
            Object(_a11y_RteA11y__WEBPACK_IMPORTED_MODULE_16__["ariaAlert"])(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_4__["Text"].format(_loc_RteStrings_resx__WEBPACK_IMPORTED_MODULE_20__["WikiLinkingInsertedAccessibleConfirmation"], item.name));
            return _ms_sp_safehtml__WEBPACK_IMPORTED_MODULE_7__["SafeHtml"].clean(insertHtml);
        };
        _this._handleFormattingBarKeyDown = function (evt) {
            if (_ms_sp_a11y__WEBPACK_IMPORTED_MODULE_6__["Keyboard"].isEscape(evt)) {
                if (_this._editorElement && !_this._editorElement.isEqualNode(document.activeElement)) {
                    _this.focus();
                    BaseRte._preventEventDefaultBehaviour(evt);
                }
            }
        };
        _this._handleFormattingBarBlur = function (evt) {
            _this._hideFormattingBarOnBlur(evt.relatedTarget);
        };
        _this._handleFormattingBarFocus = function (evt) {
            /* EMPTY BLOCK */
        };
        _this._handleCloseSubmenu = function (isDocumentClick) {
            _this.setState({ currentSubmenuOpen: undefined });
            // We want to close the formatting bar if the user clicked outside the editor
            if (isDocumentClick) {
                _this._updateFormattingBar(true);
            }
        };
        _this._handleOpenSubmenu = function () {
            _this._isSelectionChangeFromToolbar = true;
            _this.setState({ currentSubmenuOpen: 'format' });
        };
        _this._handleClearFormatting = function () {
            _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_5__["_EngagementLogger"].logEvent(_this._engagementLoggerClickTagName('ClearFormatting'), CLICK_ACTION);
            _this.focus();
            var range = _this._currentSelection;
            if (range) {
                var _a = [range.start, range.end], start = _a[0], end = _a[1];
                if (_this._editor) {
                    _this._editor.clearFormatting(start, end);
                }
                _this._finalizeAction(_loc_RteStrings_resx__WEBPACK_IMPORTED_MODULE_20__["FormattingBarClearFormattingButtonTitle"]);
            }
        };
        _this._onMessageBarDismiss = function () {
            _this.setState({ isImageWrappedWithText: false });
        };
        _this._onContextualMenuDismiss = function () {
            _this.setState({ isContextMenuVisible: false });
        };
        _this._handleKeyUp = function (evt) {
            if (_this._typedCharactersCount >= _this._TOTAL_CHARACTERS) {
                if (_this._isWindowsPerformanceMarkAvailable()) {
                    window.performance.mark(_this._RTE_KEY_UP);
                }
                _this._async.setTimeout(function () {
                    if (window.performance) {
                        // We need safety checks here if any of these methods are not available in any browser
                        if (typeof window.performance.measure === 'function') {
                            window.performance.measure(_this._RTE_TYPING_DIFF, _this._RTE_KEY_DOWN, _this._RTE_KEY_UP);
                        }
                        if (typeof window.performance.clearMarks === 'function') {
                            window.performance.clearMarks();
                        }
                        if (typeof window.performance.clearMeasures === 'function') {
                            window.performance.clearMeasures();
                        }
                    }
                    _this._typedCharactersCount = 0;
                }, 0);
            }
            _this._checkSelectionChange();
            _this._updateActiveButtons();
        };
        _this._formatList = function (evt, delRegex, formatFunction) {
            if (_this._editor) {
                _this._editor.deleteContentsInContainer(delRegex);
                formatFunction();
                BaseRte._preventEventDefaultBehaviour(evt);
            }
        };
        _this._unorderedListRegexMatch = function (text, offset) {
            return _common_RegexMatch__WEBPACK_IMPORTED_MODULE_23__["RegexMatch"].match(BaseRte._UNORDERED_LIST_REGEX, text, offset);
        };
        _this._orderedListRegexMatch = function (text, offset) {
            return _common_RegexMatch__WEBPACK_IMPORTED_MODULE_23__["RegexMatch"].match(BaseRte._ORDERED_LIST_REGEX, text, offset);
        };
        _this._wikiInsertLinkRegexMatch = function (text, offset) {
            return _common_RegexMatch__WEBPACK_IMPORTED_MODULE_23__["RegexMatch"].match(BaseRte._PAGE_LINKING_REGEX, text, offset);
        };
        _this._closeCoachMark = function () {
            _this.props.serviceScope.consume(_ms_sp_coachmark_utility__WEBPACK_IMPORTED_MODULE_11__["CoachmarkUtility"].serviceKey).dismiss(BaseRte._wikiLinkingLocalStorage);
        };
        _this._acknowledgeCoachmarkAndLog = function () {
            _this._closeCoachMark();
            _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_5__["_EngagementLogger"].logEvent(_this.TAG_NAME + 'WikiLinkingCoachMark.Acknowledge');
        };
        _this._addWikiLinkingCoachMark = function () {
            var serviceScope = _this.props.serviceScope;
            if (serviceScope && _this._editor) {
                _this.props.serviceScope
                    .consume(_ms_sp_coachmark_utility__WEBPACK_IMPORTED_MODULE_11__["CoachmarkUtility"].serviceKey)
                    .attachCoachmark({
                    positioningContainerProps: {
                        directionalHint: _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_3__["DirectionalHint"].topLeftEdge,
                        directionalHintForRTL: _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_3__["DirectionalHint"].topRightEdge
                    },
                    content: _loc_RteStrings_resx__WEBPACK_IMPORTED_MODULE_20__["WikiLinkingCoachMarkContent"],
                    localStorageKey: BaseRte._wikiLinkingLocalStorage,
                    target: _this._editorElement,
                    teachingBubbleProps: {
                        headline: _loc_RteStrings_resx__WEBPACK_IMPORTED_MODULE_20__["WikiLinkingCoachMarkTitle"],
                        hasCondensedHeadline: true,
                        primaryButtonProps: {
                            text: _loc_RteStrings_resx__WEBPACK_IMPORTED_MODULE_20__["WikiLinkingCoachMarkButton"],
                            onClick: _this._acknowledgeCoachmarkAndLog
                        }
                    }
                })
                    .catch(function (error) { return _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_5__["_TraceLogger"].logError(BaseRte.logSource, error, 'AttachCoachmark'); });
            }
        };
        _this._initState();
        _this._instanceId = ++BaseRte._instanceCount;
        _this._options = props.options || rteOptions;
        _this._config = _this._options.config;
        _this._restoreSelectionOnNextFocus = false;
        _this._buttonStates = new Map();
        _this._selectionInitiated = false;
        _this._selectionShouldEnd = false;
        _this._isRtl = Object(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_3__["getRTL"])();
        _this._pageContext = _this.props.serviceScope.consume(_microsoft_sp_page_context__WEBPACK_IMPORTED_MODULE_24__["PageContext"].serviceKey);
        if (_this.state.displayMode === _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_4__["DisplayMode"].Edit && !_this._editor) {
            // Using 'void' to indicate we are not interested in the returned value.
            // This is an expected floating promise because we're trying to pre-load the CKEditor module without using it.
            // When next time the loadModule is called, the CKEditor module will be ready to use.
            void _this._options.loader.loadModule();
        }
        _this._formatMap = new Map([
            ['undo', _this._handleUndo],
            ['redo', _this._handleRedo],
            ['clearFormatting', _this._handleClearFormatting],
            ['bold', _this._handleBold],
            ['italic', _this._handleItalic],
            ['underline', _this._handleUnderline],
            ['bullet', _this._handleListBullets],
            ['list', _this._handleListNumbered],
            ['alignLeft', _this._handleAlignLeft],
            ['alignRight', _this._handleAlignRight],
            ['alignCenter', _this._handleAlignCenter],
            ['link', _this._handleLink],
            ['normalText', _this._handlePlainText],
            ['h2', _this._handleHeading2],
            ['h3', _this._handleHeading3],
            ['h4', _this._handleHeading4],
            ['blockquote', _this._handleQuote],
            ['strike', _this._handleStrikeThrough],
            ['subscript', _this._handleSubscript],
            ['superscript', _this._handleSuperscript],
            ['justify', _this._handleJustify],
            ['indent', _this._handleIndent],
            ['outdent', _this._handleOutdent],
            ['fontSize', _this._handleFontSize],
            ['customTable', _this._handleTable],
            ['rowInsertBefore', _this._handleTableCommands],
            ['rowInsertAfter', _this._handleTableCommands],
            ['columnInsertBefore', _this._handleTableCommands],
            ['columnInsertAfter', _this._handleTableCommands],
            ['rowDelete', _this._handleTableCommands],
            ['columnDelete', _this._handleTableCommands],
            ['tableDelete', _this._handleTableCommands],
            ['tableCustomDelete', _this._handleTableCommands],
            ['fontColor', _this._handleFontColor],
            ['highlightColor', _this._handleHighlightColor],
            ['unlink', _this._handleUnlinkCommand],
            ['simpleTableStyleTheme', _this._handleTableStyles],
            ['borderHeaderTableStyleTheme', _this._handleTableStyles],
            ['filledHeaderTableStyleTheme', _this._handleTableStyles],
            ['bandedRowTableStyleTheme', _this._handleTableStyles],
            ['bandedRowColumnTableStyleTheme', _this._handleTableStyles],
            ['simpleTableStyleNeutral', _this._handleTableStyles],
            ['borderHeaderTableStyleNeutral', _this._handleTableStyles],
            ['filledHeaderTableStyleNeutral', _this._handleTableStyles],
            ['bandedRowTableStyleNeutral', _this._handleTableStyles],
            ['bandedRowColumnTableStyleNeutral', _this._handleTableStyles],
            ['alignCenterTable', _this._handleAlignTableCenter],
            ['alignRightTable', _this._handleAlignTableRight],
            ['alignLeftTable', _this._handleAlignTableLeft],
            ['pre', _this._handlePreformatted]
        ] /* fix this typecast, VSO:397687 */);
        // Keyup handler is getting called multiple times, which is affecting RTE performance while typing.
        _this._handleKeyUp = _this._async.debounce(_this._handleKeyUp, 200);
        return _this;
    }
    BaseRte._preventEventDefaultBehaviour = function (evt) {
        evt.stopPropagation();
        evt.preventDefault();
    };
    BaseRte.prototype.getFormatHandler = function (format) {
        return this._formatMap.get(format);
    };
    BaseRte.prototype.render = function () {
        var formattingBar;
        var html;
        var className = Object(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_3__["css"])('oneLineWidth', 'isFluentRTE');
        var rteInlineClass = _common_Flights__WEBPACK_IMPORTED_MODULE_14__["default"].isInlineImageEnabled && 'rte--inline';
        if (this.state.displayMode === _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_4__["DisplayMode"].Read) {
            className = Object(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_3__["css"])(this._config.editorElementClassName, 'rte--read', rteInlineClass);
            html = this.props.innerHTML;
        }
        else if (this.state.displayMode === _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_4__["DisplayMode"].Edit) {
            className = Object(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_3__["css"])('rte--edit', 'disable-link', rteInlineClass);
        }
        var browserInfo = _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_4__["_BrowserDetection"].getBrowserInformation();
        var isIE = browserInfo.browser === _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_4__["_Browser"].IE;
        var isFireFox = browserInfo.browser === _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_4__["_Browser"].Firefox;
        if (isIE || isFireFox) {
            // Font weight is 400 in IE and Firefox but it is 700 in other browsers so we
            // need to set the weight explictely.
            className = Object(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_3__["css"])(className, 'fontWeightStrongForIEFireFox');
        }
        else if (isIE) {
            // Font weight is not getting set in IE so we have to apply class to set it
            className = Object(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_3__["css"])(className, 'fontWeightStrong');
        }
        // Do not render a formatting bar if the control is not in edit mode and the
        // formatting bar is hidden
        var isEditMode = this.state.displayMode === _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_4__["DisplayMode"].Edit;
        if (isEditMode && !this.state.isFormattingBarHidden) {
            formattingBar = (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_formattingbar_SPRteFormattingBar__WEBPACK_IMPORTED_MODULE_9__["SPRteFormattingBar"], { buttons: this._formattingBarButtons(), position: this.state.formattingBarPosition, onKeyDown: this._handleFormattingBarKeyDown, componentRef: this._formattingBarRef }));
        }
        var errorMessage;
        if (isIE) {
            errorMessage = _loc_RteStrings_resx__WEBPACK_IMPORTED_MODULE_20__["MultiImagePasteInIENotSupported"];
        }
        else if (this._imagePasteErrorCode) {
            switch (this._imagePasteErrorCode) {
                case 2 /* InvalidImageSource */:
                    errorMessage = _loc_RteStrings_resx__WEBPACK_IMPORTED_MODULE_20__["InvalidImageSource"];
                    break;
                case 1 /* PastedInTable */:
                    errorMessage = _loc_RteStrings_resx__WEBPACK_IMPORTED_MODULE_20__["ImagesInTableNotSupported"];
                    break;
            }
        }
        var contentElement = (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { "data-automation-id": 'textBox', role: isEditMode && !this._disableTextBoxRoleInContainer ? 'textbox' : undefined, "aria-multiline": !this._disableTextBoxRoleInContainer ? isEditMode : undefined, dangerouslySetInnerHTML: html ? { __html: html } : undefined, className: Object(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_3__["css"])(className, this._emphasisClassName, this._additionalRteElementClassName), onKeyUp: this._handleKeyUp, ref: this._editorElementRef, "data-sp-a11y-checker-user-fixable": isEditMode, placeholder: this._placeholder }));
        var variantTheme = this.props.variantTheme;
        // only add the -16px bottom margin in read mode and not edit mode to expose the draggable border
        var richTextClassName = Object(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_3__["css"])('rte-webpart', variantTheme && _common_Utilities__WEBPACK_IMPORTED_MODULE_18__["Utilities"].getLinkClassName(variantTheme, true), {
            'rte-margin-bottom': this.state.displayMode === _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_4__["DisplayMode"].Read
        });
        var rteClassName = Object(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_3__["css"])(richTextClassName, 'fix-box-sizing');
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { "data-sp-feature-tag": 'Rich Text Editor', "data-sp-feature-instance-id": this._spFeatureInstanceId, className: rteClassName, ref: this._editorWrapperRef },
            this.state.isContextMenuVisible && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_3__["ContextualMenu"], { shouldFocusOnMount: true, target: this.state.contextMenuTarget, onDismiss: this._onContextualMenuDismiss, directionalHint: this._isRtl ? _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_3__["DirectionalHint"].bottomRightEdge : _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_3__["DirectionalHint"].bottomLeftEdge, items: this._contextMenuItems })),
            this.state.isImageWrappedWithText && this.state.displayMode === _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_4__["DisplayMode"].Edit && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_3__["MessageBar"], { messageBarType: _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_3__["MessageBarType"].warning, ariaLabel: errorMessage, dismissButtonAriaLabel: _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_4__["Text"].format(_loc_RteStrings_resx__WEBPACK_IMPORTED_MODULE_20__["CloseWarningText"], errorMessage), onDismiss: this._onMessageBarDismiss }, errorMessage)),
            this.state.isPasteInProgress && react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_3__["Spinner"], { type: _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_3__["SpinnerType"].large, label: _loc_RteStrings_resx__WEBPACK_IMPORTED_MODULE_20__["LoadingText"] }),
            contentElement,
            formattingBar,
            this.renderBottom()));
    };
    BaseRte.prototype.getPredictedUrl = function (title) {
        return Promise.resolve('');
    };
    BaseRte.prototype.componentDidMount = function () {
        if (this.state.displayMode === _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_4__["DisplayMode"].Edit) {
            var innerHTML = this.props.innerHTML;
            var focusEditorOnMount = this.props.focusEditorOnMount;
            this._initializeEditor(innerHTML || '', focusEditorOnMount || false /* startupFocus */, this._postEditorCreatedHandlerComplete /* onAfterInitialize */);
        }
    };
    BaseRte.prototype.componentDidUpdate = function (prevProps, prevState) {
        if (this.state.displayMode !== prevState.displayMode) {
            this._createEditor();
        }
        if (this.state.displayMode === _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_4__["DisplayMode"].Edit) {
            if (this._formattingBar) {
                this._formattingbarElement = react_dom__WEBPACK_IMPORTED_MODULE_2__["findDOMNode"](this._formattingBar);
                this._formattingbarWidth = this._formattingbarElement.offsetWidth || this._formattingbarWidth;
            }
            else {
                this._formattingbarElement = undefined;
            }
        }
    };
    BaseRte.prototype.componentWillUnmount = function () {
        if (this._editor) {
            this._editor.destroy();
            this._editor = undefined;
            if (this._editorElement) {
                this._editorElement.removeEventListener('paste', this._onBeforePaste, true);
                this._editorElement.removeEventListener('keydown', this._handleKeyDown);
            }
            document.removeEventListener('mouseup', this._checkSelectionChange);
            if (this._editorElement) {
                this._editorElement.removeAttribute('contenteditable');
                this._editorElement.removeEventListener('focus', this._handleEditorFocus);
            }
            if (this._createNewEditorMonitor && !this._createNewEditorMonitor.hasEnded) {
                this._createNewEditorMonitor.writeExpectedFailure(CREATE_EDITOR_MONITOR_EXPECTED);
            }
        }
        if (this._imagePasteErrorCode) {
            this._imagePasteErrorCode = undefined;
        }
        this._wasHeadingPasted = false;
    };
    BaseRte.prototype.UNSAFE_componentWillUpdate = function (nextProps, nextState) {
        if (this.state.displayMode !== nextState.displayMode) {
            if (nextState.displayMode === _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_4__["DisplayMode"].Read) {
                // Switching from Edit mode to Read mode. Remove the editor instance
                this.componentWillUnmount();
            }
        }
        else if (nextState.displayMode === _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_4__["DisplayMode"].Edit && this._editor) {
            /* Re-evaluate button activeness map before every render
            We assume that we only need to change activeness if the focus is inside the editor
            IMPORTANT: this._editor.focus() should not be called during state-transition, because it will trigger
            selection-change and cause another state-transition which is forbidden by React */
            this._setButtonStates();
        }
    };
    BaseRte.prototype.focusFormattingBar = function () {
        if (this._formattingbarElement) {
            Object(_a11y_RteA11y__WEBPACK_IMPORTED_MODULE_16__["navigateInside"])(this._formattingbarElement);
        }
    };
    BaseRte.prototype.setDisplayMode = function (newMode) {
        if (this.state.displayMode !== newMode) {
            this.setState({
                displayMode: newMode,
                formattingBarPosition: undefined,
                isFormattingBarHidden: true
            });
        }
    };
    BaseRte.prototype.getPageSuggestions = function (query) {
        var _a;
        return (_a = this._linkDataProvider) === null || _a === void 0 ? void 0 : _a.getPageTitleMatchLinks(query);
    };
    BaseRte.prototype.getTopicSuggestions = function (query) {
        if (!this._topicPickerPromise) {
            return Promise.reject(new Error('DeferredTopicPicker not loaded.'));
        }
        else {
            return _common_DeferredTopicPicker__WEBPACK_IMPORTED_MODULE_25__["DeferredTopicPicker"].getInstance().getTopicSuggestions(query);
        }
    };
    Object.defineProperty(BaseRte.prototype, "innerHTML", {
        get: function () {
            return this._text;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseRte.prototype, "config", {
        get: function () {
            return this._config;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseRte.prototype, "recentPages", {
        get: function () {
            return this._recentPages;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseRte.prototype, "prevSuggestions", {
        get: function () {
            return this._prevSuggestions;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseRte.prototype, "prevTopics", {
        get: function () {
            if (this._topicPickerPromise) {
                return _common_DeferredTopicPicker__WEBPACK_IMPORTED_MODULE_25__["DeferredTopicPicker"].getInstance().prevTopics;
            }
            else {
                return [];
            }
        },
        enumerable: true,
        configurable: true
    });
    BaseRte.prototype.isFormatActive = function (format) {
        if (format) {
            return this._isFormatActiveLocal(format.toString());
        }
        return false;
    };
    Object.defineProperty(BaseRte.prototype, "fontSizeStyle", {
        get: function () {
            if (this._editor) {
                return this._editor.appliedFontSize;
            }
            return undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseRte.prototype, "fontColor", {
        get: function () {
            if (this._editor) {
                return this._editor.appliedFontColor;
            }
            return undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseRte.prototype, "highlightColor", {
        get: function () {
            if (this._editor) {
                return this._editor.appliedHighlightColor;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseRte.prototype, "isTableContentsSelected", {
        get: function () {
            if (this._editor) {
                return this._editor.isTableContentsSelected;
            }
            return undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseRte.prototype, "isLinkSelected", {
        get: function () {
            return !!(this._editor && this._editor.getSelectedLink());
        },
        enumerable: true,
        configurable: true
    });
    BaseRte.prototype.removeFontColorFormat = function () {
        if (this._editor) {
            this._applyFormat('fontColor', { fontColor: this._editor.noColor });
        }
    };
    BaseRte.prototype.removeHighlightColor = function () {
        if (this._editor) {
            this._applyFormat('highlightColor', { highlightColor: this._editor.noColor });
        }
    };
    BaseRte.prototype.disableFormatButton = function (button) {
        switch (button) {
            case 'link':
            case 'unlink':
                return ((this._editor && !!this._editor.getSelectedLinkAttribute('data-sp-hashtagged-topic-id')) || false);
            default:
                return false;
        }
    };
    BaseRte.prototype.renderBottom = function () {
        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null);
    };
    Object.defineProperty(BaseRte.prototype, "_emphasisClassName", {
        get: function () {
            return undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseRte.prototype, "_spFeatureInstanceId", {
        get: function () {
            return this._instanceId + "_RTE";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseRte.prototype, "_additionalRteElementClassName", {
        get: function () {
            return undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseRte.prototype, "_disableTextBoxRoleInContainer", {
        get: function () {
            return false;
        },
        enumerable: true,
        configurable: true
    });
    BaseRte.prototype._initState = function () {
        this.state = {
            displayMode: this.props.displayMode,
            formattingBarPosition: undefined,
            isFormattingBarHidden: true,
            selectedText: '',
            isImageWrappedWithText: false,
            isPasteInProgress: false,
            isContextMenuVisible: false
        };
    };
    BaseRte.prototype.focus = function () {
        this._focusCore();
    };
    BaseRte.prototype._focusCore = function () {
        if (this._editor) {
            this._editor.focus();
        }
    };
    BaseRte.prototype._postEditorCreatedHandlerComplete = function () {
        // to be overridden in sub-classes
    };
    BaseRte.prototype._createNewEditor = function (innerHTML, startUpFocus) {
        return this._options.editor.createNewEditor({
            config: this._config,
            currentHTML: innerHTML,
            editorElement: this._editorElement,
            selectionChangeCallback: this._handleSelectionChange,
            textChangeCallback: this._handleTextChange.bind(this),
            startUpFocus: startUpFocus,
            onImagePasteCallBack: this._onImagePaste.bind(this),
            onImageMoveCallBack: _common_Flights__WEBPACK_IMPORTED_MODULE_14__["default"].isInlineImageEnabled() && this._onImageMove.bind(this),
            onPasteCallback: this._onPaste.bind(this),
            onHeadingPasteCallback: this._onHeadingPaste.bind(this),
            onContextMenuCallBack: this._onContextualMenu.bind(this),
            autocompleteRegexesMatch: [
                this._wikiPagePickerRegexMatch.bind(this),
                this._topicPickerRegexMatch.bind(this)
            ],
            autocompletePageSuggestions: this._suggestionsCallback.bind(this),
            autocompleteHTMLToInsert: this._selectedItemHTMLToInsert.bind(this),
            rteInsertLinkOnKeyDown: this._wikiInsertLinkOnKeyDown.bind(this),
            pageContext: this._pageContext
        });
    };
    BaseRte.prototype._afterEditorCreated = function (editor) {
        this._editor = editor;
        this._updateCurrentSelection();
        if (this._editorElement) {
            this._editorElement.addEventListener('paste', this._onBeforePaste, true);
            this._editorElement.addEventListener('keydown', this._handleKeyDown);
        }
        document.addEventListener('mouseup', this._checkSelectionChange);
        if (this._editorElement) {
            this._editorElement.setAttribute('title', _loc_RteStrings_resx__WEBPACK_IMPORTED_MODULE_20__["RichTextEditorTitle"]);
            this._editorElement.addEventListener('focus', this._handleEditorFocus);
            this._editorElement.addEventListener('blur', this._handleEditorBlur);
        }
        this._initPageAndLinkSuggestions();
    };
    BaseRte.prototype._hideFormattingBarOnBlur = function (target) {
        /*
         Hide the formatting bar if the user clicked/focused somewhere else
         on the page
        */
        var elem = target;
        /*
         this._handleEditorBlur calls this method and this might be a case where the editor is
         present but formatting bar is undefined, so adding a null check for this
        */
        if ((this._editorElement && this._editorElement.contains(elem)) ||
            (this._formattingbarElement && this._formattingbarElement.contains(elem)) ||
            this._isPropertyPaneOpen ||
            /*
             Event target in safari is the Canvas Zone not the editor or the formatting bar. So we need to check
             for the selected classname
            */
            (elem && this._checkClassNameForSafari(elem))) {
            return;
        }
        else {
            this._updateFormattingBar(true);
        }
    };
    /**
     * @param formatKey - Name of the format to apply
     */
    BaseRte.prototype._formatOrPrepare = function (formatKey) {
        var _this = this;
        this.focus();
        _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_5__["_EngagementLogger"].logEvent(this._engagementLoggerClickTagName(formatKey), CLICK_ACTION);
        var format = this._config.formats.get(formatKey);
        // Check if the format is masked and skip action
        if (format && format.maskedBy) {
            for (var _i = 0, _a = format.maskedBy; _i < _a.length; _i++) {
                var maskingFormat = _a[_i];
                if (this._buttonStates.get(maskingFormat) === 'Active') {
                    return;
                }
            }
        }
        var range = this._editor ? this._editor.getSelection() : undefined;
        if (this._editor && range && format) {
            var _b = [range.start, range.end], start_1 = _b[0], end_1 = _b[1];
            var isApplied = this._editor.isFormatAppliedToRange(start_1, end_1, format);
            // If the format was applied and clean-up method cleaned it, then we're done
            if (!(this._cleanupBeforeFormatting(start_1, end_1, format) && isApplied)) {
                var formats_1 = {};
                formats_1[format.editorKey] = isApplied
                    ? false
                    : format.editorValue !== undefined
                        ? format.editorValue
                        : true;
                if (_common_Flights__WEBPACK_IMPORTED_MODULE_14__["default"].isExternalCKEditorFlightEnabled() && this._editor.isTableContentsSelected) {
                    this._async.setTimeout(function () {
                        // There seems to be an issue with Table selection plugin running into undefined error
                        // if formatting is done quickly
                        if (_this._editor) {
                            _this._editor.format(start_1, end_1, formats_1);
                        }
                    }, 0);
                }
                else {
                    this._editor.format(start_1, end_1, formats_1);
                }
                this._finalizeAction(formatKey);
            }
        }
    };
    BaseRte.prototype._openLinkDialog = function (defaultAddress) {
        var _this = this;
        if (defaultAddress === void 0) { defaultAddress = ''; }
        // Using 'void' to indicate that we are not interested in the returned value.
        void this._pagePickerPromise.then(function () {
            _this._restoreSelectionOnNextFocus = true;
            _this._pagePicker.open({
                title: _this._currentSelection && _this._currentSelection.text ? _this._currentSelection.text : '',
                url: defaultAddress,
                shouldOpenInNewTab: _this._editor
                    ? _this._editor.getSelectedLinkAttribute('target') === '_blank'
                    : false
            });
        });
    };
    BaseRte.prototype._onSPRteLoad = function (e) {
        if (this._config.editorElementClassName === BaseRte._CKEDITOR_CLASS) {
            // Preload ck editor on load event to improve performance
            _ckeditor_CKTextEditor__WEBPACK_IMPORTED_MODULE_10__["CKTextEditor"].preloadEditor();
        }
    };
    BaseRte.prototype._initPagePicker = function () {
        var _this = this;
        // We need to init the Page Picker after editor is created since we need `this._editableDiv` to
        // set the focus back to RTE when closing the Page Picker dialog.
        this._pagePickerPromise = _common_DeferredPagePicker__WEBPACK_IMPORTED_MODULE_8__["default"].getInstance()
            .load()
            .then(function () {
            return (_this._pagePicker = _common_DeferredPagePicker__WEBPACK_IMPORTED_MODULE_8__["default"].getInstance().create({
                onSelect: _this._handlePagePickerSave,
                onUnlink: _this._handlePagePickerUnlink,
                onCancel: _this._handlePagePickerCancel,
                serviceScope: _this.props.serviceScope,
                elementToFocusOnDismiss: _this._editorElement,
                ignoreExternalFocusing: true
            }));
        });
    };
    /**
     * Click new topic button handler, overwrited in WebPartRte
     * @param topicCandidate
     */
    BaseRte.prototype._handleClickNewTopicButton = function (topicCandidate) {
        return;
    };
    BaseRte.prototype._wikiInsertLinkOnKeyDown = function (keyCode) {
        var _a;
        if (this._editor && (keyCode === _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_3__["KeyCodes"].space || keyCode === _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_3__["KeyCodes"].enter)) {
            var wikiExternalLinkMatch = this._editor.tryMatchText(this._wikiInsertLinkRegexMatch);
            if (wikiExternalLinkMatch) {
                return (_a = this._wikiPageSuggestions) === null || _a === void 0 ? void 0 : _a.insertLinkCallback(this, this._editor, this.TAG_NAME, wikiExternalLinkMatch);
            }
            for (var _i = 0, _b = Object.keys(_common_MatchLink__WEBPACK_IMPORTED_MODULE_19__["default"].linkMatchRules); _i < _b.length; _i++) {
                var schema = _b[_i];
                var rule = _common_MatchLink__WEBPACK_IMPORTED_MODULE_19__["default"].linkMatchRules[schema];
                var linkMatch = this._editor.tryMatchText(rule.testRegexMatch);
                if (linkMatch) {
                    var isApplied = linkMatch.range.startContainer.getParent().$.tagName === 'A';
                    if (!isApplied) {
                        this._formatLinkShortcut(linkMatch, rule);
                        if (rule.isURL) {
                            return linkMatch.text;
                        }
                    }
                    return undefined;
                }
            }
        }
    };
    BaseRte.prototype._updateCurrentSelection = function () {
        if (this.state.displayMode === _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_4__["DisplayMode"].Edit) {
            if (this._editor) {
                this._currentSelection = this._editor.getSelection() || this._currentSelection;
            }
        }
    };
    BaseRte.prototype._handleTextChange = function () {
        this._updateCurrentSelection();
    };
    BaseRte.prototype._finalizeAction = function (ariaActionName) {
        if (ariaActionName) {
            this._ariaConfirmAction(ariaActionName);
        }
        this._updateActiveButtons();
    };
    BaseRte.prototype._onImageMove = function (instanceId) {
        /**
         * Override in derived class
         */
    };
    BaseRte.prototype._onImagePaste = function (imageResult) {
        if (!imageResult.isImageValid) {
            this._imagePasteErrorCode = imageResult.errorCode;
            this.setState({ isImageWrappedWithText: true });
        }
        else {
            this.setState({ isImageWrappedWithText: false });
        }
    };
    BaseRte.prototype._onContextualMenu = function (isRightClicked, target) {
        this.setState({
            isContextMenuVisible: isRightClicked,
            contextMenuTarget: target
        });
    };
    BaseRte.prototype._onPaste = function (isPasteInProgress) {
        this.setState({ isPasteInProgress: isPasteInProgress });
    };
    BaseRte.prototype._onHeadingPaste = function () {
        this._wasHeadingPasted = true;
    };
    Object.defineProperty(BaseRte.prototype, "_placeholder", {
        /**
         * Define a placeholder to be shown in RTE when it is empty and not focused.
         * The implementation lies in .scss file using content: attr(placeholder).
         */
        get: function () {
            return undefined;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Checks if a selection change should initiate, then:
     * - If the selection was marked for completion, completes it
     * - Otherwise, markes the selection as initiated to be completed later
     */
    BaseRte.prototype._handleSelectionChange = function (range, forceUpdate) {
        if (range) {
            this.setState({ currentSubmenuOpen: undefined });
            if (this._restoreOnFocus()) {
                this._updateFormattingBar(false);
                return;
            }
        }
        if (!range && this._isRTESelected) {
            // We do not want to hide the toolbar when RTE is selected
        }
        else if (!range) {
            this._updateFormattingBar(true);
        }
        else {
            this._updateSelection(range, forceUpdate);
        }
    };
    Object.defineProperty(BaseRte.prototype, "_isRTESelected", {
        get: function () {
            return false;
        },
        enumerable: true,
        configurable: true
    });
    BaseRte.prototype._updateSelection = function (range, forceUpdate) {
        if (!this._currentSelection || this.state.isFormattingBarHidden) {
            this._currentSelection = range;
            this._updateFormattingBar(false);
        }
        else if (forceUpdate ||
            this._currentSelection.start !== range.start ||
            this._currentSelection.end !== range.end) {
            // Initiate a selection and complete it if it was marked for completion
            this._selectionInitiated = true;
            if (this._selectionShouldEnd) {
                this._currentSelection = range;
                this._updateFormattingBar(false);
                // Reset initiation flag because selection change is already handled
                this._selectionInitiated = false;
            }
            // Clear completion flag for future events
            this._selectionShouldEnd = false;
        }
    };
    BaseRte.prototype._restoreOnFocus = function () {
        var restore = false;
        if (this._restoreSelectionOnNextFocus && this._currentSelection) {
            this._restoreSelectionOnNextFocus = false;
            if (this._editor) {
                this._editor.setSelection(this._currentSelection);
            }
            restore = true;
        }
        return restore;
    };
    BaseRte.prototype._onBeforePaste = function () {
        /* EMPTY BLOCK */
    };
    BaseRte.prototype._handleKeyDown = function (evt) {
        this._typedCharactersCount++;
        if (this._isWindowsPerformanceMarkAvailable() && this._typedCharactersCount === this._TOTAL_CHARACTERS) {
            window.performance.mark(this._RTE_KEY_DOWN);
        }
        if (_ms_sp_a11y__WEBPACK_IMPORTED_MODULE_6__["Keyboard"].isTab(evt) || _ms_sp_a11y__WEBPACK_IMPORTED_MODULE_6__["Keyboard"].isShiftTab(evt)) {
            if (this._tabOnAutocomplete) {
                this._tabOnAutocomplete = false;
            }
            else if (this._shouldIndentOnTab) {
                BaseRte._preventEventDefaultBehaviour(evt);
                if (_ms_sp_a11y__WEBPACK_IMPORTED_MODULE_6__["Keyboard"].isTab(evt)) {
                    this._handleIndent();
                }
                else if (_ms_sp_a11y__WEBPACK_IMPORTED_MODULE_6__["Keyboard"].isShiftTab(evt)) {
                    this._handleOutdent();
                }
            }
        }
        else if (_ms_sp_a11y__WEBPACK_IMPORTED_MODULE_6__["Keyboard"].isKey(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_3__["KeyCodes"].f10, evt, { alt: true }) && this._formattingbarElement) {
            _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_5__["_EngagementLogger"].logEvent(this.TAG_NAME + 'ToolbarByKeyboardShortcut.Focus', evt.type);
            Object(_a11y_RteA11y__WEBPACK_IMPORTED_MODULE_16__["navigateInside"])(this._formattingbarElement);
            var screenReaderInstruction = _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_4__["Text"].format(_loc_RteStrings_resx__WEBPACK_IMPORTED_MODULE_20__["RichTextNavigationAltF10Keys"], _loc_RteStrings_resx__WEBPACK_IMPORTED_MODULE_20__["ToolbarNavigationArrowKeys"], _loc_RteStrings_resx__WEBPACK_IMPORTED_MODULE_20__["ToolbarNavigationTabKeys"]);
            Object(_a11y_RteA11y__WEBPACK_IMPORTED_MODULE_16__["ariaAlert"])(screenReaderInstruction);
            BaseRte._preventEventDefaultBehaviour(evt);
        }
        else if (_ms_sp_a11y__WEBPACK_IMPORTED_MODULE_6__["Keyboard"].isKey('K'.charCodeAt(0), evt, { ctrl: true })) {
            this._handleLink();
            BaseRte._preventEventDefaultBehaviour(evt);
        }
        else if (_ms_sp_a11y__WEBPACK_IMPORTED_MODULE_6__["Keyboard"].isKey(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_3__["KeyCodes"].space, evt) && this._editor) {
            if (!this._editor.isContainerInList()) {
                if (this._editor.tryMatchText(this._unorderedListRegexMatch)) {
                    _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_5__["_EngagementLogger"].logEvent(this.TAG_NAME + 'UnorderedListByKeyboardShortcut', evt.type);
                    this._formatList(evt, BaseRte._DEL_UNORDERED_LIST_REGEX, this._handleListBullets);
                }
                else if (this._editor.tryMatchText(this._orderedListRegexMatch)) {
                    _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_5__["_EngagementLogger"].logEvent(this.TAG_NAME + 'OrderedListByKeyboardShortcut', evt.type);
                    this._formatList(evt, BaseRte._DEL_ORDERED_LIST_REGEX, this._handleListNumbered);
                }
            }
        }
        else {
            this._tryHandleTopicPickerKeyboardEvent(evt);
        }
    };
    BaseRte.prototype._handleLink = function () {
        _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_5__["_EngagementLogger"].logEvent(this._engagementLoggerClickTagName('link'), CLICK_ACTION);
        this._isSelectionChangeFromToolbar = true;
        if (this._editor) {
            this._addWikiLinkingCoachMark();
            this._currentSelection = this._editor.getSelection();
            this._openLinkDialog(this._editor.getSelectedLinkAttribute('href')); // Todo#661360 Fix workaround left-over
        }
    };
    BaseRte.prototype._tryHandleTopicPickerKeyboardEvent = function (evt) {
        return (!!this._topicPickerPromise &&
            !!this._editor &&
            _common_DeferredTopicPicker__WEBPACK_IMPORTED_MODULE_25__["DeferredTopicPicker"].getInstance().tryHandleKeyboardEvent(evt, this._editor));
    };
    /**
     * Hide/Show the formatting bar and update the formatting bar position if needed.
     */
    BaseRte.prototype._updateFormattingBar = function (isHidden) {
        /* EMPTY BLOCK */
    };
    BaseRte.prototype._engagementLoggerClickTagName = function (key) {
        return this.TAG_NAME + key + BUTTON_NAME + CLICK_ACTION;
    };
    BaseRte.prototype._formattingBarButtons = function () {
        var buttons = [
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_toolbar_toolbarSubMenu_ToolbarSubmenu__WEBPACK_IMPORTED_MODULE_13__["ToolbarSubmenu"], { a11yManagerId: this.props.a11yManagerId, key: 'format', buttons: this._formatSubmenuButtons, isOpen: this.state.currentSubmenuOpen === 'format', isWide: true, onOpen: this._handleOpenSubmenu, onClose: this._handleCloseSubmenu, onBlur: this._handleFormattingBarBlur, onFocus: this._handleFormattingBarFocus }),
            this._renderFormatButton('bold', this._handleBold),
            this._renderFormatButton('italic', this._handleItalic),
            this._renderFormatButton('underline', this._handleUnderline),
            this._renderFormatButton('bullet', this._handleListBullets),
            this._renderFormatButton('list', this._handleListNumbered),
            this._renderFormatButton('alignLeft', this._handleAlignLeft),
            this._renderFormatButton('alignCenter', this._handleAlignCenter),
            this._renderFormatButton('alignRight', this._handleAlignRight),
            this._renderFormatButton('link', this._handleLink, this.disableFormatButton('link')),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_12__["ToolbarButton"], { key: 'clearFormatting', canBeActive: false, fabricIconKey: 'ClearFormatting', onClick: this._handleClearFormatting, title: _loc_RteStrings_resx__WEBPACK_IMPORTED_MODULE_20__["FormattingBarClearFormattingButtonTitle"], automationId: 'clearFormatting-button', onBlur: this._handleFormattingBarBlur, onFocus: this._handleFormattingBarFocus })
        ];
        return buttons;
    };
    Object.defineProperty(BaseRte.prototype, "_formatSubmenuButtons", {
        get: function () {
            var formatSubmenuButtons = [
                {
                    canBeActive: true,
                    title: _loc_RteStrings_resx__WEBPACK_IMPORTED_MODULE_20__["FormattingBarNormalTextButtonTitle"],
                    label: _loc_RteStrings_resx__WEBPACK_IMPORTED_MODULE_20__["FormattingBarNormalTextButtonTitle"],
                    onClick: this._handlePlainText,
                    automationId: 'normalText-button'
                },
                this._getFormatButtonProps('h2', this._handleHeading2),
                this._getFormatButtonProps('h3', this._handleHeading3),
                this._getFormatButtonProps('h4', this._handleHeading4),
                this._getFormatButtonProps('blockquote', this._handleQuote),
                this._getFormatButtonProps('pre', this._handlePreformatted)
            ];
            return formatSubmenuButtons;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseRte.prototype, "_isPropertyPaneOpen", {
        get: function () {
            return false;
        },
        enumerable: true,
        configurable: true
    });
    BaseRte.prototype._renderFormatButton = function (formatKey, onClick, disabled) {
        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_12__["ToolbarButton"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ key: formatKey }, this._getFormatButtonProps(formatKey, onClick, disabled)));
    };
    BaseRte.prototype._getFormatButtonProps = function (formatKey, onClick, disabled) {
        // todo#661360 Canvas: Fix workaround left-over when we enable strict null checks
        var format = this._config.formats.get(formatKey);
        var button = format.button;
        return {
            fabricIconKey: button.fabricIconKey,
            iconClassName: button.iconClassName,
            onClick: disabled ? undefined : onClick,
            canBeActive: button.canBeActive,
            isActive: this._isFormatActiveLocal(format.key),
            disabled: disabled || this._buttonStates.get(format.key) === 'Disabled',
            title: button.title,
            label: button.label,
            className: button.className,
            automationId: formatKey + '-button',
            onBlur: this._handleFormattingBarBlur,
            onFocus: this._handleFormattingBarFocus
        };
    };
    BaseRte.prototype._isFormatActiveLocal = function (format) {
        // We do not have 1:1 mapping of CK command and RTE commands for table styles
        // since there is only table style command, so button states won't get updated
        // We have to explicitely check if the class associated with the format is applied or not
        if (this._editor &&
            this.isTableContentsSelected &&
            this._editor.isTableStyleApplied(format) &&
            format.indexOf('TableStyle') !== -1) {
            return true;
        }
        return this._buttonStates.get(format) === 'Active';
    };
    BaseRte.prototype._getRecentPageSuggestions = function () {
        var _a;
        return (_a = this._linkDataProvider) === null || _a === void 0 ? void 0 : _a.getSortedRecentPageLinks();
    };
    Object.defineProperty(BaseRte.prototype, "_editorElement", {
        get: function () {
            return this._editorElementRef.current;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseRte.prototype, "_editorWrapper", {
        get: function () {
            return this._editorWrapperRef.current;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseRte.prototype, "_formattingBar", {
        get: function () {
            return this._formattingBarRef.current;
        },
        enumerable: true,
        configurable: true
    });
    BaseRte.prototype._handlePagePickerSave = function (link) {
        if (this._editor && this._currentSelection) {
            if (this._editorElement) {
                this._editorElement.focus({ preventScroll: true });
            }
            this._editor.format(this._currentSelection.start, this._currentSelection.end, {
                link: link.url,
                linkText: link.title,
                shouldOpenInNewTab: link.shouldOpenInNewTab
            });
        }
        Object(_a11y_RteA11y__WEBPACK_IMPORTED_MODULE_16__["ariaAlert"])(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_4__["Text"].format(_loc_RteStrings_resx__WEBPACK_IMPORTED_MODULE_20__["RTEPagePickerSaveAction"], link.title));
        this._restoreSelectionOnNextFocus = true;
    };
    BaseRte.prototype._handlePagePickerUnlink = function () {
        if (this._editor && this._currentSelection) {
            var linkText = this._currentSelection.text || '';
            if (this._editorElement) {
                this._editorElement.focus({ preventScroll: true });
            }
            this._editor.format(this._currentSelection.start, this._currentSelection.end, { link: false });
            Object(_a11y_RteA11y__WEBPACK_IMPORTED_MODULE_16__["ariaAlert"])(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_4__["Text"].format(_loc_RteStrings_resx__WEBPACK_IMPORTED_MODULE_20__["RTEPagePickerUnlinkAction"], linkText));
        }
        this._restoreSelectionOnNextFocus = true;
    };
    BaseRte.prototype._handlePagePickerCancel = function () {
        if (!Object(_common_KillSwitches__WEBPACK_IMPORTED_MODULE_17__["fixCancelInsertLinkFocusLostKSActivated"])() && this._editor && this._currentSelection) {
            this.focus();
        }
    };
    Object.defineProperty(BaseRte.prototype, "_text", {
        get: function () {
            return this._editor ? this._editor.getHTML() : this.props.innerHTML;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseRte.prototype, "_contextMenuItems", {
        get: function () {
            var shortcutText = _common_Utilities__WEBPACK_IMPORTED_MODULE_18__["Utilities"].ShortcutText();
            // VSO#477199: Get icons for right click menu for table
            var items = [
                this._getContextMenuItem(_loc_RteStrings_resx__WEBPACK_IMPORTED_MODULE_20__["AddRowAboveText"], 'InsertRowsAbove', 'rowInsertBefore', _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_4__["Text"].format(_loc_RteStrings_resx__WEBPACK_IMPORTED_MODULE_20__["AddRowAboveShortcutText"], _loc_RteStrings_resx__WEBPACK_IMPORTED_MODULE_20__["AddRowAboveText"], shortcutText)),
                this._getContextMenuItem(_loc_RteStrings_resx__WEBPACK_IMPORTED_MODULE_20__["AddRowBelowText"], 'InsertRowsBelow', 'rowInsertAfter', _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_4__["Text"].format(_loc_RteStrings_resx__WEBPACK_IMPORTED_MODULE_20__["AddRowBelowShortcutText"], _loc_RteStrings_resx__WEBPACK_IMPORTED_MODULE_20__["AddRowBelowText"], shortcutText)),
                this._getContextMenuItem(_loc_RteStrings_resx__WEBPACK_IMPORTED_MODULE_20__["DeleteRowText"], 'DeleteRows', 'rowDelete', _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_4__["Text"].format(_loc_RteStrings_resx__WEBPACK_IMPORTED_MODULE_20__["DeleteRowShortcutText"], _loc_RteStrings_resx__WEBPACK_IMPORTED_MODULE_20__["DeleteRowText"], shortcutText))
            ];
            items.push(this._getContextMenuItem(_loc_RteStrings_resx__WEBPACK_IMPORTED_MODULE_20__["AddColumnLeftText"], 'InsertColumnsLeft', 'columnInsertBefore'));
            items.push(this._getContextMenuItem(_loc_RteStrings_resx__WEBPACK_IMPORTED_MODULE_20__["AddColumnRightText"], 'InsertColumnsRight', 'columnInsertAfter'));
            items.push(this._getContextMenuItem(_loc_RteStrings_resx__WEBPACK_IMPORTED_MODULE_20__["DeleteColumnButtonLabel"], 'DeleteColumns', 'columnDelete'));
            items.push(this._getContextMenuItem(_loc_RteStrings_resx__WEBPACK_IMPORTED_MODULE_20__["DeleteTableButtonLabel"], 'DeleteTable', 'tableCustomDelete'));
            return items;
        },
        enumerable: true,
        configurable: true
    });
    BaseRte.prototype._createEditor = function () {
        if (this.state.displayMode === _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_4__["DisplayMode"].Edit) {
            var innerHTML = this.props.innerHTML;
            /**
             * Switching from Read mode to Edit mode. Create a new editor
             * If SPRte has previously been in edit mode during the same session we want to use the saved HTML.
             */
            var html = innerHTML || '';
            if (!this._editor) {
                this._initializeEditor(html /* innerHTML */, false /* startupFocus */, this._setButtonStates /* onAfterInitialize */);
            }
        }
    };
    BaseRte.prototype._getContextMenuItem = function (key, iconName, operation, title) {
        var _this = this;
        return {
            key: key,
            name: key,
            title: title ? title : key,
            iconProps: {
                iconName: iconName
            },
            onClick: function () {
                if (_this._editor) {
                    _this._formatOrPrepare(operation);
                }
            }
        };
    };
    Object.defineProperty(BaseRte.prototype, "_shouldIndentOnTab", {
        get: function () {
            return Boolean(this._editor && !this._editor.isTableContentsSelected);
        },
        enumerable: true,
        configurable: true
    });
    BaseRte.prototype._initializeEditor = function (innerHTML, startupFocus, onAfterInitialize) {
        var _this = this;
        if (!this._createNewEditorMonitor) {
            this._createNewEditorMonitor = new _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_5__["_QosMonitor"](CREATE_EDITOR_MONITOR);
        }
        // CK editor won't load correctly in Karma, so we avoid creating it in that case
        if (true) {
            this._createNewEditor(innerHTML, startupFocus)
                .then(function (editor) {
                if (_this.state.displayMode === _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_4__["DisplayMode"].Edit) {
                    _this._afterEditorCreated(editor);
                    onAfterInitialize();
                    if (_common_Flights__WEBPACK_IMPORTED_MODULE_14__["default"].isTopicHashtaggingEnabled(_this._pageContext) && !_this._topicPickerPromise) {
                        _this._initDeferredTopicPicker();
                    }
                    _this._createNewEditorMonitor.writeSuccess();
                }
                else {
                    // Switching the display mode is now async in canvas, so we need to make sure
                    // if the mode has been switched here, then destroy the editor
                    editor.destroy();
                    if (_this._editorElement) {
                        // Destroying the editor causes ckeditable to get removed so
                        // adding it back
                        _this._editorElement.classList.add(BaseRte._CKEDITOR_CLASS);
                        _this._editorElement.classList.add('cke_editableBulletCounterReset');
                        _this._editorElement.classList.add('highlightFocusFix');
                        _this._editorElement.removeAttribute('contenteditable');
                        _this._createNewEditorMonitor.writeExpectedFailure('DisplayMode Switched');
                    }
                }
            })
                .catch(function (error) {
                _this._createNewEditorMonitor.writeUnexpectedFailure(CREATE_EDITOR_MONITOR_FAILURE, error, {
                    innerHTML: _this.props.innerHTML
                });
            });
        }
    };
    BaseRte.prototype._ariaConfirmAction = function (formatKeyOrName) {
        var format = this._config.formats.get(formatKeyOrName);
        var name = format && format.button.title ? format.button.title : formatKeyOrName;
        var message = _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_4__["Text"].format(_loc_RteStrings_resx__WEBPACK_IMPORTED_MODULE_20__["FormattingBarConfirmAction"], name);
        if (this._currentSelection &&
            this._currentSelection.start !== this._currentSelection.end &&
            !(format && format.isLine)) {
            var text = this._editor ? this._editor.getText(this._currentSelection) : '';
            message = _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_4__["Text"].format(_loc_RteStrings_resx__WEBPACK_IMPORTED_MODULE_20__["FormattingBarConfirmActionOnSelection"], name, text);
        }
        Object(_a11y_RteA11y__WEBPACK_IMPORTED_MODULE_16__["ariaAlert"])(message);
    };
    /**
     * Note: keyup and mouseup can happen before or after selection-change depending on the user input
     * That's why we need to mark these events in separate flags (_selectionInitiated and _selectionShouldEnd)
     * Whenever one of them happens, we check if the other one has happened so we could complete the action
     *
     * Checks if a selection change should complete, then:
     * - If the selection was already initiated, completes it
     * - Otherwise, markes the selection to be completed after initiation
     */
    BaseRte.prototype._checkSelectionChange = function () {
        if (this._editor) {
            this._selectionShouldEnd = true;
            if (this._selectionInitiated) {
                var range = this._editor.getSelection();
                this._currentSelection = range;
                this._updateFormattingBar(false);
                // Reset completion flag because selection change is already handled
                this._selectionShouldEnd = false;
            }
            // Reset initiation flag for future events
            this._selectionInitiated = false;
        }
    };
    BaseRte.prototype._handleUndo = function () {
        this._formatOrPrepare('undo');
    };
    BaseRte.prototype._handleRedo = function () {
        this._formatOrPrepare('redo');
    };
    BaseRte.prototype._applyFormat = function (formatType, value, label) {
        if (this._editor && this._currentSelection) {
            var logEntry = new _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_5__["_LogEntry"]('RTE', formatType, _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_5__["_LogType"].Event, {
                value: value[formatType]
            });
            _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_5__["_EngagementLogger"].logEventWithLogEntry(logEntry);
            this.focus();
            this._editor.format(this._currentSelection.start, this._currentSelection.end, value);
            this._finalizeAction(label);
        }
    };
    BaseRte.prototype._handleFontSize = function (config) {
        // VSO#400452: Selecting a font size and start typing does not work
        this._applyFormat(config.format, config.value, _loc_RteStrings_resx__WEBPACK_IMPORTED_MODULE_20__["FontSizeDropDownLabel"]);
    };
    BaseRte.prototype._handleFontColor = function (config) {
        this._applyFormat(config.format, config.value, _loc_RteStrings_resx__WEBPACK_IMPORTED_MODULE_20__["FontColorLabel"]);
    };
    BaseRte.prototype._handleHighlightColor = function (config) {
        this._applyFormat(config.format, config.value, _loc_RteStrings_resx__WEBPACK_IMPORTED_MODULE_20__["HightlightLabel"]);
    };
    BaseRte.prototype._handleAlignCenter = function () {
        this._formatOrPrepare('alignCenter');
    };
    BaseRte.prototype._handleAlignLeft = function () {
        this._formatOrPrepare(this._isRtl ? 'alignRight' : 'alignLeft');
    };
    BaseRte.prototype._handleAlignRight = function () {
        this._formatOrPrepare(this._isRtl ? 'alignLeft' : 'alignRight');
    };
    BaseRte.prototype._handleAlignTableCenter = function () {
        this._applyFormat('alignCenterTable', { alignCenterTable: _common_FormatTypes__WEBPACK_IMPORTED_MODULE_15__["AlignType"].AlignCenter });
    };
    BaseRte.prototype._handleAlignTableLeft = function () {
        this._applyFormat('alignLeftTable', { alignLeftTable: _common_FormatTypes__WEBPACK_IMPORTED_MODULE_15__["AlignType"].AlignLeft });
    };
    BaseRte.prototype._handleAlignTableRight = function () {
        this._applyFormat('alignRightTable', { alignRightTable: _common_FormatTypes__WEBPACK_IMPORTED_MODULE_15__["AlignType"].AlignRight });
    };
    BaseRte.prototype._handleBold = function () {
        this._formatOrPrepare('bold');
    };
    BaseRte.prototype._handleHeading2 = function () {
        this._clearFormatting();
        this._formatOrPrepare('h2');
    };
    BaseRte.prototype._handleHeading3 = function () {
        this._clearFormatting();
        this._formatOrPrepare('h3');
    };
    BaseRte.prototype._handleHeading4 = function () {
        this._clearFormatting();
        this._formatOrPrepare('h4');
    };
    BaseRte.prototype._clearFormatting = function () {
        this._handleClearFormatting();
    };
    BaseRte.prototype._handleItalic = function () {
        this._formatOrPrepare('italic');
    };
    BaseRte.prototype._handleListBullets = function () {
        this._formatOrPrepare('bullet');
    };
    BaseRte.prototype._handleListNumbered = function () {
        this._formatOrPrepare('list');
    };
    BaseRte.prototype._handleStrikeThrough = function () {
        this._formatOrPrepare('strike');
    };
    BaseRte.prototype._handleSuperscript = function () {
        this._formatOrPrepare('superscript');
    };
    BaseRte.prototype._handleSubscript = function () {
        this._formatOrPrepare('subscript');
    };
    BaseRte.prototype._handleJustify = function () {
        this._formatOrPrepare('justify');
    };
    BaseRte.prototype._handleIndent = function () {
        this._formatOrPrepare('indent');
    };
    BaseRte.prototype._handleOutdent = function () {
        this._formatOrPrepare('outdent');
    };
    BaseRte.prototype._handleTable = function (config) {
        _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_5__["_EngagementLogger"].logEvent(this._engagementLoggerClickTagName(config.format), CLICK_ACTION);
        if (this._editor && this._currentSelection) {
            this._editor.format(this._currentSelection.start, this._currentSelection.end, config.value);
        }
    };
    BaseRte.prototype._handleTableCommands = function (config) {
        this._formatOrPrepare(config.format);
    };
    BaseRte.prototype._handleTableStyles = function (config) {
        this._applyFormat(config.format, config.value);
    };
    BaseRte.prototype._handleUnlinkCommand = function () {
        this._handlePagePickerUnlink();
    };
    BaseRte.prototype._handlePlainText = function () {
        this.focus();
        this._clearFormatting();
        if (this._currentSelection) {
            // Use the clean method for any styling format
            var blockStyles = this._config.supportedFormatsArray.filter(function (format) {
                return format.isBlockStyle;
            });
            this._cleanupBeforeFormatting(this._currentSelection.start, this._currentSelection.end, blockStyles[0]);
            this._finalizeAction();
        }
        _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_5__["_EngagementLogger"].logEvent(this._engagementLoggerClickTagName('PlainText'), CLICK_ACTION);
    };
    BaseRte.prototype._handleQuote = function () {
        this._clearFormatting();
        this._formatOrPrepare('blockquote');
    };
    BaseRte.prototype._handlePreformatted = function () {
        this._clearFormatting();
        this._formatOrPrepare('pre');
    };
    BaseRte.prototype._handleUnderline = function () {
        this._formatOrPrepare('underline');
    };
    /**
     * Clean up the existing formatting of given range before applying the new format, by doing:
     *  - Clear all styling formats if new format is also a styling format
     *  - Clear all the formats masked by the new format
     *
     * @param start - Start of the range getting formatted
     * @param end - End of the range getting formatted
     * @param newFormat - Name of new format being applied
     *
     * @return if the newFormat was cleared as a result of clean-up
     */
    BaseRte.prototype._cleanupBeforeFormatting = function (start, end, newFormat) {
        var formatsToClear = {};
        // If this is a styling format, clear all styling formats
        if (newFormat.isBlockStyle) {
            var blockStyles = this._config.supportedFormatsArray.filter(function (format) {
                return format.isBlockStyle;
            });
            for (var _i = 0, blockStyles_1 = blockStyles; _i < blockStyles_1.length; _i++) {
                var format = blockStyles_1[_i];
                formatsToClear[format.editorKey] = false;
            }
        }
        // Clear all formats masked by this format
        if (newFormat.masks) {
            for (var _a = 0, _b = newFormat.masks; _a < _b.length; _a++) {
                var maskedFormatKey = _b[_a];
                var format = this._config.formats.get(maskedFormatKey);
                if (format) {
                    formatsToClear[format.editorKey] = false;
                }
            }
        }
        if (this._editor) {
            this._editor.format(start, end, formatsToClear, true);
        }
        return formatsToClear.hasOwnProperty(newFormat.editorKey);
    };
    BaseRte.prototype._handleEditorFocus = function (evt) {
        this._restoreOnFocus();
    };
    BaseRte.prototype._handleEditorBlur = function (evt) {
        var _this = this;
        this._async.setTimeout(function () {
            // We need to set timeout here because there is a race condition with the way ckeditor
            // is calling onblur which causes formatting to not go away
            // CKEditor Bug # https://dev.ckeditor.com/ticket/17013#comment:1
            return _this._hideFormattingBarOnBlur(evt.relatedTarget);
        }, 100);
    };
    BaseRte.prototype._checkClassNameForSafari = function (elem) {
        return elem.classList.contains('ControlZone');
    };
    BaseRte.prototype._isWindowsPerformanceMarkAvailable = function () {
        return window.performance && typeof window.performance.mark === 'function';
    };
    BaseRte.prototype._setButtonStates = function () {
        var range = this._editor ? this._editor.getSelection() : undefined;
        if (this._editor && range) {
            /* Make a map to keep track of updated buttons. Its goal is to minimize the number
            of calls to isFormatAppliedToRange (equal to the number of currently non-masked formats) */
            var updatedFormats = new Map();
            for (var _i = 0, _a = this._config.supportedFormatsArray; _i < _a.length; _i++) {
                var format = _a[_i];
                updatedFormats.set(format.key, false);
            }
            // First figure out the state of masking formats and their masked formats
            var maskingFormats = this._config.supportedFormatsArray.filter(function (format) {
                return !!format.masks;
            });
            for (var _b = 0, maskingFormats_1 = maskingFormats; _b < maskingFormats_1.length; _b++) {
                var maskingFormat = maskingFormats_1[_b];
                if (!updatedFormats.get(maskingFormat.key)) {
                    var isActive = this._editor.isFormatAppliedToRange(range.start, range.end, maskingFormat);
                    this._buttonStates.set(maskingFormat.key, isActive ? 'Active' : 'Normal');
                    updatedFormats.set(maskingFormat.key, true);
                    if (isActive && maskingFormat.masks) {
                        for (var _c = 0, _d = maskingFormat.masks; _c < _d.length; _c++) {
                            var maskedFormat = _d[_c];
                            this._buttonStates.set(maskedFormat, 'Disabled');
                            updatedFormats.set(maskedFormat, true);
                        }
                    }
                }
            }
            // Figure out activeness for the rest of the formats
            for (var _e = 0, _f = this._config.supportedFormatsArray; _e < _f.length; _e++) {
                var format = _f[_e];
                if (!updatedFormats.get(format.key)) {
                    var isActive = this._editor.isFormatAppliedToRange(range.start, range.end, format);
                    this._buttonStates.set(format.key, isActive ? 'Active' : 'Normal');
                }
            }
        }
        if (this._isRtl) {
            var left = this._buttonStates.get('alignLeft');
            var right = this._buttonStates.get('alignRight');
            this._buttonStates.set('alignLeft', right);
            this._buttonStates.set('alignRight', left);
        }
    };
    BaseRte.prototype._formatLinkShortcut = function (match, rule) {
        if (this._editor) {
            _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_5__["_EngagementLogger"].logEvent(this.TAG_NAME + 'ExternalLinkByEntityRecognition');
            this._editor.format(match.range.endOffset, match.range.endOffset, {
                link: rule.isURL ? _common_MatchLink__WEBPACK_IMPORTED_MODULE_19__["default"].normalizeUrl(match.text) : match.text,
                linkText: match.text,
                shouldOpenInNewTab: false
            });
            match.range.extractContents(true /** mergeThen */);
            if (rule.isURL) {
                match.text = _common_MatchLink__WEBPACK_IMPORTED_MODULE_19__["default"].normalizeUrl(match.text);
            }
        }
    };
    /**
     * This should be called whenever the activeness of buttons could have changed
     * It rerenders the component to make sure the change is rendered
     */
    BaseRte.prototype._updateActiveButtons = function () {
        this.forceUpdate();
    };
    BaseRte.logSource = _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_5__["_LogSource"].create('BaseRte');
    BaseRte._PAGE_PICKER_REGEX = /\[{2}(?!\s|\|)((?!(\||\]{2}|\[{2})).)+$|\[{2}$/;
    BaseRte._PAGE_LINKING_REGEX = /\[{2}(?!\s|\|)((?!(\||\]{2}|\[{2})).)+(\|\s*((?!(\s|\]{2}|\[{2})).)+)?\]{2}$|\[{2}$/;
    BaseRte._ORDERED_LIST_REGEX = /^1\.$/;
    BaseRte._DEL_ORDERED_LIST_REGEX = /^1\./;
    BaseRte._UNORDERED_LIST_REGEX = /(^-$)|(^\*$)/;
    BaseRte._DEL_UNORDERED_LIST_REGEX = /(^\*)|(^-)/;
    BaseRte._URL_VALIDATION_REGEX = new RegExp('((^https?://)|(^ftp://)|(^file://)|(^mailto:)|(^news:)|(^pnm://)|(^mms://)|(^/)|(^#)|(^\\\\)).+', 'i');
    BaseRte._SERVICESCOPE_PROP_KEY = 'serviceScope';
    BaseRte._COMPONENTREF_PROP_KEY = 'componentRef';
    BaseRte._SELECTION_PROP_KEY = 'selection';
    BaseRte._CKEDITOR_CLASS = 'cke_editable';
    BaseRte._instanceCount = 0;
    BaseRte._wikiLinkingLocalStorage = 'DismissedWikiLinkingCoachmark';
    BaseRte.makePageSuggestions = function (links, isNewPage) {
        var autoSuggestions = links.map(function (val) {
            val.name = val.title;
            val.isNewPage = isNewPage;
            val.suggestionType = 'PageSuggestion';
            val.definition = ''; // Page suggestions don't have a definition, leaving empty.
            return val;
        });
        return autoSuggestions;
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_3__["autobind"]
    ], BaseRte.prototype, "removeFontColorFormat", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_3__["autobind"]
    ], BaseRte.prototype, "removeHighlightColor", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_3__["autobind"]
    ], BaseRte.prototype, "_postEditorCreatedHandlerComplete", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_3__["autobind"]
    ], BaseRte.prototype, "_onSPRteLoad", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_3__["autobind"]
    ], BaseRte.prototype, "_initPagePicker", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_3__["autobind"]
    ], BaseRte.prototype, "_onContextualMenu", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_3__["autobind"]
    ], BaseRte.prototype, "_handleSelectionChange", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_3__["autobind"]
    ], BaseRte.prototype, "_updateSelection", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_3__["autobind"]
    ], BaseRte.prototype, "_onBeforePaste", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_3__["autobind"]
    ], BaseRte.prototype, "_handleKeyDown", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_3__["autobind"]
    ], BaseRte.prototype, "_handleLink", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_3__["autobind"]
    ], BaseRte.prototype, "_getFormatButtonProps", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_3__["autobind"]
    ], BaseRte.prototype, "_handlePagePickerSave", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_3__["autobind"]
    ], BaseRte.prototype, "_handlePagePickerUnlink", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_3__["autobind"]
    ], BaseRte.prototype, "_handlePagePickerCancel", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_3__["autobind"]
    ], BaseRte.prototype, "_getContextMenuItem", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_3__["autobind"]
    ], BaseRte.prototype, "_checkSelectionChange", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_3__["autobind"]
    ], BaseRte.prototype, "_handleUndo", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_3__["autobind"]
    ], BaseRte.prototype, "_handleRedo", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_3__["autobind"]
    ], BaseRte.prototype, "_handleFontSize", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_3__["autobind"]
    ], BaseRte.prototype, "_handleFontColor", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_3__["autobind"]
    ], BaseRte.prototype, "_handleHighlightColor", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_3__["autobind"]
    ], BaseRte.prototype, "_handleAlignCenter", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_3__["autobind"]
    ], BaseRte.prototype, "_handleAlignLeft", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_3__["autobind"]
    ], BaseRte.prototype, "_handleAlignRight", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_3__["autobind"]
    ], BaseRte.prototype, "_handleAlignTableCenter", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_3__["autobind"]
    ], BaseRte.prototype, "_handleAlignTableLeft", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_3__["autobind"]
    ], BaseRte.prototype, "_handleAlignTableRight", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_3__["autobind"]
    ], BaseRte.prototype, "_handleBold", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_3__["autobind"]
    ], BaseRte.prototype, "_handleHeading2", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_3__["autobind"]
    ], BaseRte.prototype, "_handleHeading3", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_3__["autobind"]
    ], BaseRte.prototype, "_handleHeading4", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_3__["autobind"]
    ], BaseRte.prototype, "_handleItalic", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_3__["autobind"]
    ], BaseRte.prototype, "_handleListBullets", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_3__["autobind"]
    ], BaseRte.prototype, "_handleListNumbered", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_3__["autobind"]
    ], BaseRte.prototype, "_handleStrikeThrough", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_3__["autobind"]
    ], BaseRte.prototype, "_handleSuperscript", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_3__["autobind"]
    ], BaseRte.prototype, "_handleSubscript", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_3__["autobind"]
    ], BaseRte.prototype, "_handleJustify", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_3__["autobind"]
    ], BaseRte.prototype, "_handleIndent", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_3__["autobind"]
    ], BaseRte.prototype, "_handleOutdent", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_3__["autobind"]
    ], BaseRte.prototype, "_handleTable", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_3__["autobind"]
    ], BaseRte.prototype, "_handleTableCommands", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_3__["autobind"]
    ], BaseRte.prototype, "_handleTableStyles", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_3__["autobind"]
    ], BaseRte.prototype, "_handleUnlinkCommand", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_3__["autobind"]
    ], BaseRte.prototype, "_handlePlainText", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_3__["autobind"]
    ], BaseRte.prototype, "_handleQuote", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_3__["autobind"]
    ], BaseRte.prototype, "_handlePreformatted", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_3__["autobind"]
    ], BaseRte.prototype, "_handleUnderline", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_3__["autobind"]
    ], BaseRte.prototype, "_handleEditorFocus", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_3__["autobind"]
    ], BaseRte.prototype, "_handleEditorBlur", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_3__["autobind"]
    ], BaseRte.prototype, "_setButtonStates", null);
    return BaseRte;
}(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_3__["BaseComponent"]));



/***/ }),

/***/ "prby":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/css-loader@3.2.1_webpack@4.44.2/node_modules/css-loader/dist/cjs.js!/agent/_work/1/s/common/temp/node_modules/.pnpm/postcss-loader@3.0.0/node_modules/postcss-loader/src??postcss!./lib/toolbar/toolbarSubMenu/ToolbarSubmenu.css ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../common/temp/node_modules/.pnpm/css-loader@3.2.1_webpack@4.44.2/node_modules/css-loader/dist/runtime/api.js */ "5ADk")(false);
// Module
exports.push([module.i, ".ToolbarSubmenu{width:44px;position:relative}.ToolbarSubmenu .ToolbarButton{width:44px;font-weight:400}[dir=ltr] .ToolbarSubmenu-displayButton{padding-right:20px}[dir=rtl] .ToolbarSubmenu-displayButton{padding-left:20px}.ToolbarSubmenu-caret{color:\"[theme:neutralLighterAlt, default: #f8f8f8]\";font-size:8px;pointer-events:none;position:absolute;top:50%;transform:translateY(-50%);z-index:1}[dir=ltr] .ToolbarSubmenu-caret{right:4px}[dir=rtl] .ToolbarSubmenu-caret{left:4px}.ToolbarSubmenu-caret.LightTheme{color:\"[theme:neutralPrimary, default: #333333]\"}.ToolbarSubmenu-caret.DarkTheme{color:\"[theme:neutralDark, default: #212121]\"}.ToolbarSubmenu-menuItems{display:none;position:absolute;top:34px}[dir=ltr] .ToolbarSubmenu-menuItems .ToolbarButton{padding-right:20px}[dir=rtl] .ToolbarSubmenu-menuItems .ToolbarButton{padding-left:20px}.ToolbarSubmenu--wide{width:160px!important}.ToolbarSubmenu--wide .ToolbarButton{width:100%}[dir=ltr] .ToolbarSubmenu--wide .ToolbarButton{text-align:left}[dir=rtl] .ToolbarSubmenu--wide .ToolbarButton{text-align:right}.ToolbarSubmenu.is-open .ToolbarSubmenu-menuItems{display:block}", ""]);


/***/ }),

/***/ "rYEu":
/*!*****************************************************!*\
  !*** ./lib/rte/webPartRte/CKEditorForWebPartRte.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/office-ui-fabric-react-bundle */ "KL1q");
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @microsoft/sp-diagnostics */ "ut3N");
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ckeditor_CKTextEditor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ckeditor/CKTextEditor */ "Hw4Z");
/* harmony import */ var _common_Flights__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/Flights */ "w4+A");
/* harmony import */ var _common_KillSwitches__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/KillSwitches */ "+ORw");
/**
 * @copyright Microsoft Corporation. All rights reserved.
 */






var CKEditorForWebPartRte = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(CKEditorForWebPartRte, _super);
    function CKEditorForWebPartRte(options, onReadyCallback) {
        var _a;
        var _b;
        var _this = _super.call(this, options, onReadyCallback) || this;
        _this._autoGrowHeightOptions = options.autoGrowHeightOptions || { enable: false };
        _this._themeBackgroundColor = (_b = options.theme) === null || _b === void 0 ? void 0 : _b.semanticColors.bodyBackground;
        /* tslint:disable:max-line-length */
        var pluginsToBeRemoved = 'contextmenu,menubutton,scayt,liststyle,tableselection,tabletools,magicline,link,resize,autogrow,elementspath,divarea';
        /* tslint:enable:max-line-length */
        _this._ckEditorConfig = {
            disableNativeSpellChecker: false,
            on: {
                change: _this._onTextChange,
                selectionChange: _this._handleSelectionChangeConvert
            },
            removePlugins: "tableselection," + pluginsToBeRemoved,
            extraPlugins: Boolean(options.consistentFontStylesForEditMode)
                ? 'justify,placeholdertext,defaultstyles'
                : 'justify,placeholdertext',
            placeholder: options.placeholder,
            removeButtons: '',
            stylesSet: false,
            toolbar: [],
            startupFocus: _this._startupFocus,
            fullPage: false,
            resize_enabled: false,
            width: '100%',
            height: _this._autoGrowHeightOptions.enable ? 'auto' : 200,
            title: false,
            bodyClass: Object(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_1__["css"])('defaultFontFamily', 'isFluentRTE', (_a = {},
                _a['fixEditorPadding'] = !_common_KillSwitches__WEBPACK_IMPORTED_MODULE_5__["default"].fixWebPartRteEditorPadding.isActivated(),
                _a))
        };
        // Add `divarea` plugin to replace RTE iframe with div
        _this._ckEditorConfig.removePlugins = _this._ckEditorConfig.removePlugins.replace(',divarea', '');
        _this._ckEditorConfig.extraPlugins += ',divarea';
        _this._onKeyDownCallBack = options.onKeyDownCallBack;
        // Disable the editor content filer to allow all contents.
        // See http://docs.ckeditor.com/#!/guide/dev_advanced_content_filter for document.
        _this._ckEditorConfig.allowedContent = true;
        _this._ckEditorConfig.extraPlugins += ',autocomplete,textwatcher,textmatch';
        _this._initialize(options.currentHTML);
        return _this;
    }
    CKEditorForWebPartRte.createNewEditor = function (options) {
        return new Promise(function (resolve) {
            CKEditorForWebPartRte.moduleLoader
                .loadModule()
                .then(function () {
                var editor = new CKEditorForWebPartRte(options, function () { return resolve(editor); });
            })
                .catch(function (error) {
                _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__["_TraceLogger"].logError(CKEditorForWebPartRte.logSource, error);
            });
        });
    };
    CKEditorForWebPartRte.prototype._initialize = function (currentHTML) {
        var _this = this;
        if (!this._ckEditorConfig) {
            return;
        }
        var textPart = document.createElement('textarea');
        this._editorElement.appendChild(textPart);
        this._editor = CKEDITOR.replace(textPart, this._ckEditorConfig);
        this._editor.setData(currentHTML);
        if (this._autoGrowHeightOptions.enable) {
            this._editorElement.classList.add('autoGrowHeight');
            if (Object(_common_KillSwitches__WEBPACK_IMPORTED_MODULE_5__["fixWebPartEditModeBorderKSActivated"])()) {
                this._editorElement.classList.add('highlightFocusFix');
            }
            this._editor.on('instanceReady', function () {
                var innerElement = document.querySelector('.autoGrowHeight .cke_editable');
                if (innerElement) {
                    innerElement.style.minHeight = _this._autoGrowHeightOptions.minHeight + "px";
                    innerElement.style.maxHeight = _this._autoGrowHeightOptions.maxHeight + "px";
                }
            });
        }
        this._editor.on('instanceReady', function () {
            var innerElement = document.querySelector('.cke_editable');
            if (innerElement && _this._themeBackgroundColor) {
                innerElement.style.backgroundColor = "" + _this._themeBackgroundColor;
            }
        });
        // CKeditor in iframe mode will stop alt+F10 keyboard event propagation.
        // We need to listen to this event with ckeditor instance.
        if (_common_Flights__WEBPACK_IMPORTED_MODULE_4__["default"].isTopicHashtaggingEnabled(this._pageContext)) {
            this._editor.on('key', this._handleKeyDown.bind(this));
        }
        this._addCustomToolbarCommands();
    };
    CKEditorForWebPartRte.prototype._handleKeyDown = function (ev) {
        var keyboardEvent = ev.data && ev.data.domEvent && ev.data.domEvent.$;
        if (keyboardEvent && this._onKeyDownCallBack) {
            this._onKeyDownCallBack(keyboardEvent);
            if (keyboardEvent.defaultPrevented) {
                // In case of prevent default, the default handle logic inside ckeditor should also be prevented.
                ev.cancel();
            }
        }
    };
    CKEditorForWebPartRte.logSource = _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__["_LogSource"].create('CKEditorForWebPartRte');
    return CKEditorForWebPartRte;
}(_ckeditor_CKTextEditor__WEBPACK_IMPORTED_MODULE_3__["CKTextEditor"]));
/* harmony default export */ __webpack_exports__["default"] = (CKEditorForWebPartRte);


/***/ }),

/***/ "sjA7":
/*!***********************************************************!*\
  !*** ./lib/toolbar/toolbarSubMenu/ToolbarSubmenu.scss.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* tslint:disable */
__webpack_require__(/*! ./ToolbarSubmenu.css */ "o7Cv");
var styles = {};
/* harmony default export */ __webpack_exports__["default"] = (styles);
/* tslint:enable */ 


/***/ }),

/***/ "ut3N":
/*!********************************************!*\
  !*** external "@microsoft/sp-diagnostics" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_ut3N__;

/***/ }),

/***/ "vNVH":
/*!*****************************************************!*\
  !*** ./lib/rte/formattingbar/SPRteFormattingBar.js ***!
  \*****************************************************/
/*! exports provided: SPRteFormattingBar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SPRteFormattingBar", function() { return SPRteFormattingBar; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/office-ui-fabric-react-bundle */ "KL1q");
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _SPRteFormattingBar_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SPRteFormattingBar.scss */ "Ayuq");
/* harmony import */ var _loc_RteStrings_resx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../loc/RteStrings.resx */ "okC0");
var _loc_RteStrings_resx__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../loc/RteStrings.resx */ "okC0", 1);

/**
 * @copyright Microsoft Corporation. All rights reserved. *
 */




/**
 * @class The formatting bar for the SPRte exposes text editing actions.
 */
var SPRteFormattingBar = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(SPRteFormattingBar, _super);
    function SPRteFormattingBar(props) {
        var _this = _super.call(this, props) || this;
        _this._domNodeRef = react__WEBPACK_IMPORTED_MODULE_2__["createRef"]();
        _this.state = {
            isFaded: false
        };
        return _this;
    }
    SPRteFormattingBar.prototype.componentDidMount = function () {
        if (this.props.onKeyDown) {
            this.domNode.addEventListener('keydown', this.props.onKeyDown);
        }
    };
    SPRteFormattingBar.prototype.UNSAFE_componentWillReceiveProps = function (nextProps) {
        var oldPosition = this.props.position;
        var newPosition = nextProps.position;
        if (oldPosition && newPosition && oldPosition.top !== newPosition.top) {
            this.setState({
                isFaded: true
            });
        }
    };
    SPRteFormattingBar.prototype.componentDidUpdate = function () {
        var _this = this;
        if (this.state.isFaded) {
            this._clearTimeOut();
            this._fadeFormatBarTimeOut = this._async.setTimeout(function () {
                _this.setState({
                    isFaded: false
                });
            }, 300);
        }
    };
    SPRteFormattingBar.prototype.componentWillUnmount = function () {
        this._clearTimeOut();
    };
    /**
     * Renders the formatting bar in the position given in props
     * Formatting bar renders on top left side of the control by default
     * If there is a text selection the bar renders above the selection
     */
    SPRteFormattingBar.prototype.render = function () {
        var style = this.props.position;
        var className = Object(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_1__["css"])('SPRteFormattingBar', 'rteFlyout-visible', 'stack-panel-class', 'isFluent', {
            faded: this.state.isFaded
        });
        return (react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", { role: 'toolbar', "aria-label": _loc_RteStrings_resx__WEBPACK_IMPORTED_MODULE_4__["FormattingBarAccessibleLabel"], className: className, ref: this._domNodeRef, style: style, "data-automation-id": 'toolbar', "data-canvas-control": 'toolbar' },
            react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_1__["FocusZone"], { isCircularNavigation: true, className: 'formattingBarFocusZone' }, this.props.buttons)));
    };
    Object.defineProperty(SPRteFormattingBar.prototype, "domNode", {
        get: function () {
            return this._domNodeRef.current;
        },
        enumerable: true,
        configurable: true
    });
    SPRteFormattingBar.prototype._clearTimeOut = function () {
        if (this._fadeFormatBarTimeOut) {
            clearTimeout(this._fadeFormatBarTimeOut);
            this._fadeFormatBarTimeOut = undefined;
        }
    };
    return SPRteFormattingBar;
}(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_1__["BaseComponent"]));



/***/ }),

/***/ "w4+A":
/*!*******************************!*\
  !*** ./lib/common/Flights.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _KillSwitches__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./KillSwitches */ "+ORw");
/* harmony import */ var _ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ms/sp-component-utilities */ "hiL/");
/* harmony import */ var _ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_2__);



var Flights = /** @class */ (function () {
    function Flights() {
    }
    /**
     * Bumps CKEditor to 4.13.0
     * If this flight is pulled, it will revert to 4.11.4
     */
    Flights.isExternalCKEditorFlightEnabled = function () {
        return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPFlight"].isEnabled(939 /* WexRichTextEditorCkNewVersion */);
    };
    Flights.isTopicHashtaggingEnabled = function (pageContext) {
        return Object(_ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_2__["isCortexEnabled"])(pageContext) && !_KillSwitches__WEBPACK_IMPORTED_MODULE_1__["default"].topicHashtaggingEnabled.isActivated();
    };
    Flights.isInlineImageEnabled = function () {
        return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPFlight"].isEnabled(60045 /* InlineImageInRTE */);
    };
    Flights.isScrollbarEnabledForTopicPicker = function () {
        return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPFlight"].isEnabled(663 /* EnableScrollbarInTopicPicker */);
    };
    return Flights;
}());
/* harmony default export */ __webpack_exports__["default"] = (Flights);


/***/ }),

/***/ "wG+9":
/*!*************************************************!*\
  !*** ./lib/rte/baseRte/BaseRteConfiguration.js ***!
  \*************************************************/
/*! exports provided: BaseRteConfiguration */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseRteConfiguration", function() { return BaseRteConfiguration; });
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_Utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/Utilities */ "Bd75");
/* harmony import */ var _loc_RteStrings_resx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../loc/RteStrings.resx */ "okC0");
var _loc_RteStrings_resx__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../loc/RteStrings.resx */ "okC0", 1);
/**
 * @copyright Microsoft Corporation. All rights reserved.
 */



/**
 * Static class for SPRte configuratoion
 * Note: We assume all RTE instances share the same configuration by design
 * Should this change in the future, we'll need to change this to non-static design
 */
var BaseRteConfiguration = /** @class */ (function () {
    function BaseRteConfiguration() {
        var shortcutText = _common_Utilities__WEBPACK_IMPORTED_MODULE_1__["Utilities"].ShortcutText();
        this._supportedFormatsArray = [
            {
                key: 'bold',
                editorKey: 'bold',
                browserKey: 'bold',
                isBlockStyle: false,
                isLine: false,
                isEditorNative: true,
                button: {
                    canBeActive: true,
                    fabricIconKey: 'Bold',
                    shortcut: 'Ctrl+B',
                    title: _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Text"].format(_loc_RteStrings_resx__WEBPACK_IMPORTED_MODULE_2__["FormattingBarBoldButtonTitle"], shortcutText)
                }
            },
            {
                key: 'italic',
                editorKey: 'italic',
                browserKey: 'italic',
                isBlockStyle: false,
                isLine: false,
                isEditorNative: true,
                button: {
                    canBeActive: true,
                    fabricIconKey: 'Italic',
                    shortcut: 'Ctrl+I',
                    title: _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Text"].format(_loc_RteStrings_resx__WEBPACK_IMPORTED_MODULE_2__["FormattingBarItalicButtonTitle"], shortcutText)
                }
            },
            {
                key: 'underline',
                editorKey: 'underline',
                browserKey: 'underline',
                isBlockStyle: false,
                isLine: false,
                isEditorNative: true,
                button: {
                    canBeActive: true,
                    fabricIconKey: 'Underline',
                    shortcut: 'Ctrl+U',
                    title: _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Text"].format(_loc_RteStrings_resx__WEBPACK_IMPORTED_MODULE_2__["FormattingBarUnderlineButtonTitle"], shortcutText)
                }
            },
            {
                key: 'link',
                editorKey: 'link',
                isBlockStyle: false,
                isLine: false,
                isEditorNative: true,
                masks: ['underline'],
                button: {
                    canBeActive: true,
                    fabricIconKey: 'Link',
                    shortcut: 'Ctrl+K',
                    title: _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Text"].format(_loc_RteStrings_resx__WEBPACK_IMPORTED_MODULE_2__["FormattingBarLinkButtonTitle"], shortcutText)
                }
            },
            {
                key: 'alignLeft',
                editorKey: 'justifyleft',
                browserKey: 'justifyLeft',
                isBlockStyle: false,
                isLine: true,
                isEditorNative: true,
                button: {
                    canBeActive: true,
                    fabricIconKey: 'AlignLeft',
                    title: _loc_RteStrings_resx__WEBPACK_IMPORTED_MODULE_2__["FormattingBarAlignLeftButtonTitle"]
                }
            },
            {
                key: 'alignCenter',
                editorKey: 'justifycenter',
                browserKey: 'justifyCenter',
                isBlockStyle: false,
                isLine: true,
                isEditorNative: true,
                button: {
                    canBeActive: true,
                    fabricIconKey: 'AlignCenter',
                    title: _loc_RteStrings_resx__WEBPACK_IMPORTED_MODULE_2__["FormattingBarAlignCenterButtonTitle"]
                }
            },
            {
                key: 'alignRight',
                editorKey: 'justifyright',
                browserKey: 'justifyRight',
                isBlockStyle: false,
                isLine: true,
                isEditorNative: true,
                button: {
                    canBeActive: true,
                    fabricIconKey: 'AlignRight',
                    title: _loc_RteStrings_resx__WEBPACK_IMPORTED_MODULE_2__["FormattingBarAlignRightButtonTitle"]
                }
            },
            {
                key: 'bullet',
                editorKey: 'bulletedlist',
                browserKey: 'insertUnorderedList',
                isBlockStyle: true,
                isLine: true,
                isEditorNative: true,
                button: {
                    canBeActive: true,
                    fabricIconKey: 'BulletedList',
                    title: _loc_RteStrings_resx__WEBPACK_IMPORTED_MODULE_2__["FormattingBarBulletListButtonTitle"]
                }
            },
            {
                key: 'list',
                editorKey: 'numberedlist',
                browserKey: 'insertOrderedList',
                isBlockStyle: true,
                isLine: true,
                isEditorNative: true,
                button: {
                    canBeActive: true,
                    fabricIconKey: 'NumberedList',
                    title: _loc_RteStrings_resx__WEBPACK_IMPORTED_MODULE_2__["FormattingBarNumberedListButtonTitle"]
                }
            },
            {
                key: 'h2',
                editorKey: 'heading2',
                isBlockStyle: true,
                isLine: true,
                isEditorNative: true,
                button: {
                    canBeActive: true,
                    title: _loc_RteStrings_resx__WEBPACK_IMPORTED_MODULE_2__["FormattingBarHeading2ButtonTitle"],
                    label: _loc_RteStrings_resx__WEBPACK_IMPORTED_MODULE_2__["FormattingBarHeading2ButtonTitle"],
                    className: 'ToolbarButton--h2'
                }
            },
            {
                key: 'h3',
                editorKey: 'heading3',
                isBlockStyle: true,
                isLine: true,
                isEditorNative: false,
                button: {
                    canBeActive: true,
                    title: _loc_RteStrings_resx__WEBPACK_IMPORTED_MODULE_2__["FormattingBarHeading3ButtonTitle"],
                    label: _loc_RteStrings_resx__WEBPACK_IMPORTED_MODULE_2__["FormattingBarHeading3ButtonTitle"],
                    className: 'ToolbarButton--h3'
                }
            },
            {
                key: 'h4',
                editorKey: 'heading4',
                isBlockStyle: true,
                isLine: true,
                isEditorNative: false,
                button: {
                    canBeActive: true,
                    title: _loc_RteStrings_resx__WEBPACK_IMPORTED_MODULE_2__["FormattingBarHeading4ButtonTitle"],
                    label: _loc_RteStrings_resx__WEBPACK_IMPORTED_MODULE_2__["FormattingBarHeading4ButtonTitle"],
                    className: 'ToolbarButton--h4'
                }
            },
            {
                key: 'blockquote',
                editorKey: 'blockquote',
                isBlockStyle: true,
                isLine: true,
                isEditorNative: true,
                button: {
                    canBeActive: true,
                    title: _loc_RteStrings_resx__WEBPACK_IMPORTED_MODULE_2__["FormattingBarQuoteButtonTitle"],
                    label: _loc_RteStrings_resx__WEBPACK_IMPORTED_MODULE_2__["FormattingBarQuoteButtonTitle"],
                    className: 'ToolbarButton--blockquote'
                }
            },
            {
                key: 'undo',
                editorKey: 'undo',
                isEditorNative: true,
                button: {
                    canBeActive: true,
                    title: _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Text"].format(_loc_RteStrings_resx__WEBPACK_IMPORTED_MODULE_2__["UndoButtonTitle"], shortcutText),
                    label: _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Text"].format(_loc_RteStrings_resx__WEBPACK_IMPORTED_MODULE_2__["UndoButtonTitle"], shortcutText),
                    fabricIconKey: 'Undo'
                }
            },
            {
                key: 'redo',
                editorKey: 'redo',
                isEditorNative: true,
                button: {
                    title: _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Text"].format(_loc_RteStrings_resx__WEBPACK_IMPORTED_MODULE_2__["RedoButtonTitle"], shortcutText),
                    label: _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Text"].format(_loc_RteStrings_resx__WEBPACK_IMPORTED_MODULE_2__["RedoButtonTitle"], shortcutText),
                    fabricIconKey: 'Redo'
                }
            },
            {
                key: 'strike',
                editorKey: 'strike',
                isBlockStyle: false,
                isLine: false,
                isEditorNative: true,
                button: {
                    canBeActive: true,
                    title: _loc_RteStrings_resx__WEBPACK_IMPORTED_MODULE_2__["StrikeThroughButtonLabel"],
                    label: _loc_RteStrings_resx__WEBPACK_IMPORTED_MODULE_2__["StrikeThroughButtonLabel"],
                    fabricIconKey: 'Strikethrough'
                }
            },
            {
                key: 'subscript',
                editorKey: 'subscript',
                isBlockStyle: false,
                isLine: false,
                isEditorNative: true,
                button: {
                    canBeActive: true,
                    title: _loc_RteStrings_resx__WEBPACK_IMPORTED_MODULE_2__["SubscriptButtonLabel"],
                    label: _loc_RteStrings_resx__WEBPACK_IMPORTED_MODULE_2__["SubscriptButtonLabel"],
                    fabricIconKey: 'Subscript'
                }
            },
            {
                key: 'superscript',
                editorKey: 'superscript',
                isBlockStyle: false,
                isLine: false,
                isEditorNative: true,
                button: {
                    canBeActive: true,
                    title: _loc_RteStrings_resx__WEBPACK_IMPORTED_MODULE_2__["SuperscriptButtonLabel"],
                    label: _loc_RteStrings_resx__WEBPACK_IMPORTED_MODULE_2__["SuperscriptButtonLabel"],
                    fabricIconKey: 'Superscript'
                }
            },
            {
                key: 'justify',
                editorKey: 'justifyblock',
                isBlockStyle: false,
                isLine: true,
                isEditorNative: true,
                button: {
                    canBeActive: true,
                    title: _loc_RteStrings_resx__WEBPACK_IMPORTED_MODULE_2__["JustifyButtonLabel"],
                    label: _loc_RteStrings_resx__WEBPACK_IMPORTED_MODULE_2__["JustifyButtonLabel"],
                    fabricIconKey: 'CollapseMenu'
                    // @todo: VSO#395060: Get the right icon from fabric for justify
                }
            },
            {
                key: 'indent',
                editorKey: 'indent',
                isBlockStyle: false,
                isLine: true,
                isEditorNative: true,
                button: {
                    canBeActive: true,
                    title: _loc_RteStrings_resx__WEBPACK_IMPORTED_MODULE_2__["IncreaseIndentButtonLabel"],
                    label: _loc_RteStrings_resx__WEBPACK_IMPORTED_MODULE_2__["IncreaseIndentButtonLabel"],
                    fabricIconKey: 'IncreaseIndentLegacy'
                }
            },
            {
                key: 'outdent',
                editorKey: 'outdent',
                isBlockStyle: false,
                isLine: true,
                isEditorNative: true,
                button: {
                    canBeActive: true,
                    title: _loc_RteStrings_resx__WEBPACK_IMPORTED_MODULE_2__["DecreaseIndentButtonLabel"],
                    label: _loc_RteStrings_resx__WEBPACK_IMPORTED_MODULE_2__["DecreaseIndentButtonLabel"],
                    fabricIconKey: 'DecreaseIndentLegacy'
                }
            },
            {
                key: 'customTable',
                editorKey: 'customTable',
                isEditorNative: true,
                button: {
                    title: _loc_RteStrings_resx__WEBPACK_IMPORTED_MODULE_2__["TableButtonLabel"],
                    label: _loc_RteStrings_resx__WEBPACK_IMPORTED_MODULE_2__["TableButtonLabel"]
                }
            },
            {
                key: 'rowInsertBefore',
                editorKey: 'rowInsertBefore',
                isEditorNative: true,
                button: {
                    title: _loc_RteStrings_resx__WEBPACK_IMPORTED_MODULE_2__["InsertRowBeforeButtonLabel"],
                    label: _loc_RteStrings_resx__WEBPACK_IMPORTED_MODULE_2__["InsertRowBeforeButtonLabel"],
                    fabricIconKey: 'InsertRowsAbove'
                }
            },
            {
                key: 'rowInsertAfter',
                editorKey: 'rowInsertAfter',
                isEditorNative: true,
                button: {
                    title: _loc_RteStrings_resx__WEBPACK_IMPORTED_MODULE_2__["InsertRowAfterButtonLabel"],
                    label: _loc_RteStrings_resx__WEBPACK_IMPORTED_MODULE_2__["InsertRowAfterButtonLabel"],
                    fabricIconKey: 'InsertRowsBelow'
                }
            },
            {
                key: 'columnInsertBefore',
                editorKey: 'columnInsertBefore',
                isEditorNative: true,
                button: {
                    title: _loc_RteStrings_resx__WEBPACK_IMPORTED_MODULE_2__["InsertColumnLeftButtonLabel"],
                    label: _loc_RteStrings_resx__WEBPACK_IMPORTED_MODULE_2__["InsertColumnLeftButtonLabel"],
                    fabricIconKey: 'InsertColumnsLeft'
                }
            },
            {
                key: 'columnInsertAfter',
                editorKey: 'columnInsertAfter',
                isEditorNative: true,
                button: {
                    title: _loc_RteStrings_resx__WEBPACK_IMPORTED_MODULE_2__["InsertColumnRightButtonLabel"],
                    label: _loc_RteStrings_resx__WEBPACK_IMPORTED_MODULE_2__["InsertColumnRightButtonLabel"],
                    fabricIconKey: 'InsertColumnsRight'
                }
            },
            {
                key: 'rowDelete',
                editorKey: 'rowDelete',
                isEditorNative: true,
                button: {
                    title: _loc_RteStrings_resx__WEBPACK_IMPORTED_MODULE_2__["DeleteRowButtonLabel"],
                    label: _loc_RteStrings_resx__WEBPACK_IMPORTED_MODULE_2__["DeleteRowButtonLabel"],
                    fabricIconKey: 'DeleteRows'
                }
            },
            {
                key: 'columnDelete',
                editorKey: 'columnDelete',
                isEditorNative: true,
                button: {
                    title: _loc_RteStrings_resx__WEBPACK_IMPORTED_MODULE_2__["DeleteColumnButtonLabel"],
                    label: _loc_RteStrings_resx__WEBPACK_IMPORTED_MODULE_2__["DeleteColumnButtonLabel"],
                    fabricIconKey: 'DeleteColumns'
                }
            },
            {
                key: 'tableCustomDelete',
                editorKey: 'tableCustomDelete',
                isEditorNative: true,
                button: {
                    title: _loc_RteStrings_resx__WEBPACK_IMPORTED_MODULE_2__["DeleteTableButtonLabel"],
                    label: _loc_RteStrings_resx__WEBPACK_IMPORTED_MODULE_2__["DeleteTableButtonLabel"],
                    fabricIconKey: 'DeleteTable'
                }
            },
            {
                key: 'tableDelete',
                editorKey: 'tableDelete',
                isEditorNative: true,
                button: {
                    title: _loc_RteStrings_resx__WEBPACK_IMPORTED_MODULE_2__["DeleteTableButtonLabel"],
                    label: _loc_RteStrings_resx__WEBPACK_IMPORTED_MODULE_2__["DeleteTableButtonLabel"],
                    fabricIconKey: 'DeleteTable'
                }
            },
            {
                key: 'unlink',
                editorKey: 'unlink',
                isEditorNative: false,
                button: {
                    title: _loc_RteStrings_resx__WEBPACK_IMPORTED_MODULE_2__["FormattingBarUnlinkButtonTitle"],
                    label: _loc_RteStrings_resx__WEBPACK_IMPORTED_MODULE_2__["FormattingBarUnlinkButtonTitle"],
                    fabricIconKey: 'RemoveLink'
                }
            },
            {
                key: 'simpleTableStyleTheme',
                editorKey: 'tableStyle',
                isEditorNative: false,
                button: {
                    title: _loc_RteStrings_resx__WEBPACK_IMPORTED_MODULE_2__["SimpleTableButtonThemeLabel"],
                    label: _loc_RteStrings_resx__WEBPACK_IMPORTED_MODULE_2__["SimpleTableButtonThemeLabel"]
                }
            },
            {
                key: 'borderHeaderTableStyleTheme',
                editorKey: 'tableStyle',
                isEditorNative: false,
                button: {
                    title: _loc_RteStrings_resx__WEBPACK_IMPORTED_MODULE_2__["TableWithHeaderBorderThemeLabel"],
                    label: _loc_RteStrings_resx__WEBPACK_IMPORTED_MODULE_2__["TableWithHeaderBorderThemeLabel"]
                }
            },
            {
                key: 'filledHeaderTableStyleTheme',
                editorKey: 'tableStyle',
                isEditorNative: false,
                button: {
                    title: _loc_RteStrings_resx__WEBPACK_IMPORTED_MODULE_2__["TableWithFilledHeaderThemeLabel"],
                    label: _loc_RteStrings_resx__WEBPACK_IMPORTED_MODULE_2__["TableWithFilledHeaderThemeLabel"]
                }
            },
            {
                key: 'bandedRowTableStyleTheme',
                editorKey: 'tableStyle',
                isEditorNative: false,
                button: {
                    title: _loc_RteStrings_resx__WEBPACK_IMPORTED_MODULE_2__["TableWithBandedRowsThemeLabel"],
                    label: _loc_RteStrings_resx__WEBPACK_IMPORTED_MODULE_2__["TableWithBandedRowsThemeLabel"]
                }
            },
            {
                key: 'bandedRowColumnTableStyleTheme',
                editorKey: 'tableStyle',
                isEditorNative: false,
                button: {
                    title: _loc_RteStrings_resx__WEBPACK_IMPORTED_MODULE_2__["TableWithBandedRowsAndColumnsThemeLabel"],
                    label: _loc_RteStrings_resx__WEBPACK_IMPORTED_MODULE_2__["TableWithBandedRowsAndColumnsThemeLabel"]
                }
            },
            {
                key: 'simpleTableStyleNeutral',
                editorKey: 'tableStyle',
                isEditorNative: false,
                button: {
                    title: _loc_RteStrings_resx__WEBPACK_IMPORTED_MODULE_2__["SimpleTableButtonLabel"],
                    label: _loc_RteStrings_resx__WEBPACK_IMPORTED_MODULE_2__["SimpleTableButtonLabel"]
                }
            },
            {
                key: 'borderHeaderTableStyleNeutral',
                editorKey: 'tableStyle',
                isEditorNative: false,
                button: {
                    title: _loc_RteStrings_resx__WEBPACK_IMPORTED_MODULE_2__["TableWithHeaderBorderLabel"],
                    label: _loc_RteStrings_resx__WEBPACK_IMPORTED_MODULE_2__["TableWithHeaderBorderLabel"]
                }
            },
            {
                key: 'filledHeaderTableStyleNeutral',
                editorKey: 'tableStyle',
                isEditorNative: false,
                button: {
                    title: _loc_RteStrings_resx__WEBPACK_IMPORTED_MODULE_2__["TableWithFilledHeaderLabel"],
                    label: _loc_RteStrings_resx__WEBPACK_IMPORTED_MODULE_2__["TableWithFilledHeaderLabel"]
                }
            },
            {
                key: 'bandedRowTableStyleNeutral',
                editorKey: 'tableStyle',
                isEditorNative: false,
                button: {
                    title: _loc_RteStrings_resx__WEBPACK_IMPORTED_MODULE_2__["TableWithBandedRowsLabel"],
                    label: _loc_RteStrings_resx__WEBPACK_IMPORTED_MODULE_2__["TableWithBandedRowsLabel"]
                }
            },
            {
                key: 'bandedRowColumnTableStyleNeutral',
                editorKey: 'tableStyle',
                isEditorNative: false,
                button: {
                    title: _loc_RteStrings_resx__WEBPACK_IMPORTED_MODULE_2__["TableWithBandedRowsAndColumnsLabel"],
                    label: _loc_RteStrings_resx__WEBPACK_IMPORTED_MODULE_2__["TableWithBandedRowsAndColumnsLabel"]
                }
            },
            {
                key: 'alignLeftTable',
                editorKey: 'alignLeftTable',
                browserKey: 'alignLeftTable',
                isBlockStyle: false,
                isLine: true,
                isEditorNative: true,
                button: {
                    canBeActive: true,
                    fabricIconKey: 'AlignHorizontalLeft',
                    title: _loc_RteStrings_resx__WEBPACK_IMPORTED_MODULE_2__["AlignTableLeftLabel"]
                }
            },
            {
                key: 'alignCenterTable',
                editorKey: 'alignCenterTable',
                browserKey: 'alignCenterTable',
                isBlockStyle: false,
                isLine: true,
                isEditorNative: true,
                button: {
                    canBeActive: true,
                    fabricIconKey: 'AlignHorizontalCenter',
                    title: _loc_RteStrings_resx__WEBPACK_IMPORTED_MODULE_2__["AlignTableCenterLabel"]
                }
            },
            {
                key: 'alignRightTable',
                editorKey: 'alignRightTable',
                browserKey: 'alignRightTable',
                isBlockStyle: false,
                isLine: true,
                isEditorNative: true,
                button: {
                    canBeActive: true,
                    fabricIconKey: 'AlignHorizontalRight',
                    title: _loc_RteStrings_resx__WEBPACK_IMPORTED_MODULE_2__["AlignTableRightLabel"]
                }
            },
            {
                key: 'pre',
                editorKey: 'pre',
                isBlockStyle: true,
                isLine: true,
                isEditorNative: true,
                button: {
                    canBeActive: true,
                    title: _loc_RteStrings_resx__WEBPACK_IMPORTED_MODULE_2__["FormattingBarPreButtonTitle"],
                    label: _loc_RteStrings_resx__WEBPACK_IMPORTED_MODULE_2__["FormattingBarPreButtonTitle"],
                    className: 'ToolbarButton--pre'
                }
            }
        ];
        // Build a map to look up formats by their key quickly
        this._formats = new Map();
        for (var _i = 0, _a = this._supportedFormatsArray; _i < _a.length; _i++) {
            var format = _a[_i];
            this._formats.set(format.key, format);
        }
        // Populate 'maskedBy' field of all formats based on 'masks' fields
        var maskingFormats = this._supportedFormatsArray.filter(function (format) {
            return !!format.masks;
        });
        for (var _b = 0, maskingFormats_1 = maskingFormats; _b < maskingFormats_1.length; _b++) {
            var maskingFormat = maskingFormats_1[_b];
            if (maskingFormat.masks) {
                for (var _c = 0, _d = maskingFormat.masks; _c < _d.length; _c++) {
                    var maskedFormatKey = _d[_c];
                    var maskedFormat = this._formats.get(maskedFormatKey);
                    if (maskedFormat) {
                        if (!maskedFormat.maskedBy) {
                            maskedFormat.maskedBy = [maskingFormat.key];
                        }
                        else {
                            maskedFormat.maskedBy.push(maskingFormat.key);
                        }
                    }
                }
            }
        }
    }
    Object.defineProperty(BaseRteConfiguration.prototype, "editorElementClassName", {
        get: function () {
            return 'cke_editable';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseRteConfiguration.prototype, "formats", {
        get: function () {
            return this._formats;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseRteConfiguration.prototype, "supportedFormatsArray", {
        get: function () {
            return this._supportedFormatsArray;
        },
        enumerable: true,
        configurable: true
    });
    return BaseRteConfiguration;
}());



/***/ }),

/***/ "wSgF":
/*!***************************************!*\
  !*** ./lib/rte/common/FormatTypes.js ***!
  \***************************************/
/*! exports provided: FontSizeInPixels, FluentFontSizeInPixels, TableStyleType, AlignType, StyleColor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FontSizeInPixels", function() { return FontSizeInPixels; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FluentFontSizeInPixels", function() { return FluentFontSizeInPixels; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableStyleType", function() { return TableStyleType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlignType", function() { return AlignType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyleColor", function() { return StyleColor; });
// @todo: VSO# 408205 Remove font size numbers when we introduce font ramps
// tslint:disable-next-line:typedef variable-name
var FontSizeInPixels = {
    Small: '12',
    Medium: '14',
    MediumPlus: '15',
    Large: '17',
    XLarge: '21',
    XLargePlus: '24',
    XxLarge: '28',
    XxxLarge: '32',
    XxLargePlus: '36',
    Super: '42'
};
// tslint:disable-next-line:typedef variable-name
var FluentFontSizeInPixels = {
    XSmall: '10',
    Small: '12',
    Medium: '14',
    MediumPlus: '16',
    Large: '18',
    XLarge: '20',
    XLargePlus: '24',
    XxLarge: '28',
    XxxLarge: '32',
    XxLargePlus: '36',
    Super: '42',
    Mega: '68'
};
/**
 * Type for table styles
 */
// tslint:disable-next-line:typedef variable-name
var TableStyleType = {
    SimpleTableStyle: 'simpleTableStyle',
    BorderHeaderTableStyle: 'borderHeaderTableStyle',
    FilledHeaderTableStyle: 'filledHeaderTableStyle',
    BandedRowTableStyle: 'bandedRowTableStyle',
    BandedRowColumnTableStyle: 'bandedRowColumnTableStyle'
};
/**
 * Type for alignment
 */
// tslint:disable-next-line:typedef variable-name
var AlignType = {
    AlignLeft: 'alignLeft',
    AlignCenter: 'alignCenter',
    AlignRight: 'alignRight'
};
/**
 * Style color for table styles
 */
// tslint:disable-next-line:typedef variable-name
var StyleColor = {
    Theme: 'Theme',
    Neutral: 'Neutral'
};


/***/ }),

/***/ "wpGb":
/*!*****************************************!*\
  !*** ./lib/rte/ckeditor/ElementPath.js ***!
  \*****************************************/
/*! exports provided: generateElementPath, getElementFromPath */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateElementPath", function() { return generateElementPath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getElementFromPath", function() { return getElementFromPath; });
/**
 * Generate an index path from root element to the target element.
 *
 * @example. In following CKEditor element structure, the path of `target` element will be [1, 2, 1]
 * <root>
 *   <p>example</p>
 *   <div>
 *     <target>some text</target>
 *   </div>
 * </root>
 */
function generateElementPath(root, target) {
    var path = [];
    if (!root.contains(target)) {
        return undefined;
    }
    while (target !== undefined && !target.equals(root)) {
        var parent_1 = target.getParent();
        if (parent_1) {
            var children = parent_1.getChildren();
            var index = -1;
            for (var i = 0; i < parent_1.getChildCount(); i++) {
                if (children.getItem(i).equals(target)) {
                    index = i;
                    break;
                }
            }
            path.push(index);
            target = parent_1;
        }
        else {
            break;
        }
    }
    return path;
}
/**
 * Find the target element by applying the index path to a given root element.
 */
function getElementFromPath(root, path) {
    var target = root;
    while (path && path.length && target) {
        var index = path.pop(); // It's not undefined because path.length > 0.
        target = target.getChildren().getItem(index);
    }
    return target || undefined;
}


/***/ }),

/***/ "x5Sg":
/*!******************************************!*\
  !*** ./lib/rte/common/ImageUtilities.js ***!
  \******************************************/
/*! exports provided: Base64MimeType, Base64toBlob */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Base64MimeType", function() { return Base64MimeType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Base64toBlob", function() { return Base64toBlob; });
/**
 * @Copyright (c) Microsoft Corporation.  All rights reserved.
 *
 * A collection of helper methods related to image.
 */
/**
 * Gets the mime type from the string.
 */
function Base64MimeType(encoded) {
    var result = undefined;
    var mime = encoded.match(/data:([a-zA-Z0-9]+\/[a-zA-Z0-9-.+]+).*,.*/);
    if (mime && mime.length) {
        result = mime[1];
    }
    return result;
}
/**
 * Converts base 64 image to blob.
 */
function Base64toBlob(b64Data, contentType) {
    if (contentType === void 0) { contentType = ''; }
    var sliceSize = 512;
    var byteCharacters = atob(b64Data);
    var byteArrays = [];
    var length = byteCharacters.length;
    var byteNumbers;
    for (var offset = 0; offset < length; offset += sliceSize) {
        var slice = byteCharacters.slice(offset, offset + sliceSize);
        byteNumbers = [];
        for (var i = 0; i < slice.length; i++) {
            byteNumbers[i] = slice.charCodeAt(i);
        }
        var byteArray = new Uint8Array(byteNumbers);
        byteArrays.push(byteArray);
        byteNumbers.length = 0;
    }
    var blob = new Blob(byteArrays, { type: contentType });
    return blob;
}


/***/ }),

/***/ "yH57":
/*!******************************************!*\
  !*** ./lib/rte/webPartRte/WebPartRte.js ***!
  \******************************************/
/*! exports provided: WebPartRte */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebPartRte", function() { return WebPartRte; });
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
/* harmony import */ var _microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @microsoft/sp-lodash-subset */ "Pk8u");
/* harmony import */ var _microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _ms_sp_a11y__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ms/sp-a11y */ "ytfe");
/* harmony import */ var _ms_sp_a11y__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_ms_sp_a11y__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _ms_sp_topic_shared__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ms/sp-topic-shared */ "HVbJ");
/* harmony import */ var _ms_sp_topic_shared__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_ms_sp_topic_shared__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _baseRte_BaseRte__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../baseRte/BaseRte */ "oubO");
/* harmony import */ var _baseRte_BaseRteConfiguration__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../baseRte/BaseRteConfiguration */ "wG+9");
/* harmony import */ var _common_Flights__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../common/Flights */ "w4+A");
/* harmony import */ var _common_KillSwitches__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../common/KillSwitches */ "+ORw");
/* harmony import */ var _CKEditorForWebPartRte__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./CKEditorForWebPartRte */ "rYEu");
/* harmony import */ var _a11y_RteA11y__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../a11y/RteA11y */ "Qyis");
/* harmony import */ var _loc_RteStrings_resx__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../loc/RteStrings.resx */ "okC0");
var _loc_RteStrings_resx__WEBPACK_IMPORTED_MODULE_15___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../loc/RteStrings.resx */ "okC0", 1);
/* harmony import */ var _microsoft_sp_page_context__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @microsoft/sp-page-context */ "X+PM");
/* harmony import */ var _microsoft_sp_page_context__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_page_context__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _common_Constants__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../common/Constants */ "R0eD");
/**
 * @copyright Microsoft Corporation. All rights reserved.
 */


















var TOPIC_CALLOUT_DELAY_TIME = 150;
/**
 * WebPartRte component. This component is used inside webparts.
 *
 * @internal
 */
var WebPartRte = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(WebPartRte, _super);
    function WebPartRte(props) {
        var _this = _super.call(this, props, WebPartRte.defaultOptions) || this;
        _this.TAG_NAME = 'WebPartRte.';
        // Override the behavior when formatting bar blurs.
        /* tslint:disable:no-any */
        _this._handleFormattingBarBlur = function (evt) {
            var _a;
            if (!_this._autoHideToolbarOnFocusOut) {
                _this._hideFormattingBarOnBlur(evt.relatedTarget);
            }
            // make sure we hide the formatting bar only when the blur event happens outside of it
            if (!((_a = _this._formattingBar) === null || _a === void 0 ? void 0 : _a.domNode.contains(evt.currentTarget))) {
                _this._isFocusInFormattingBar = false;
            }
        };
        /* tslint:disable-next-line:no-any */
        _this._handleFormattingBarFocus = function (evt) {
            _this._isFocusInFormattingBar = true;
        };
        _this._handleLink = function () {
            _super.prototype._handleLink.call(_this);
            _this._isFocusLostFromToolbar = true;
        };
        _this._handleNewTopicButtonKeyDown = function (evt, autoComplete) {
            var _a;
            var selectedElement = document.querySelector('.cke_autocomplete_opened > [value="selected"]');
            var keyCode = evt.data.getKey();
            // When user press "enter" key on "Create new topic" button
            if (((_a = selectedElement) === null || _a === void 0 ? void 0 : _a.dataset.id) === _common_Constants__WEBPACK_IMPORTED_MODULE_17__["CREATE_NEW_TOPIC_BUTTON_ID"] && keyCode === _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_5__["KeyCodes"].enter) {
                // Close autocomplete panel
                autoComplete.close();
                evt.cancel();
                evt.data.preventDefault();
                _this._handleClickNewTopicButton(selectedElement.dataset.topicCandidate || '');
                return true;
            }
            return false;
        };
        _this._handleCreateTopicOK = function (newTopic) {
            var data = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, newTopic), { suggestionType: 'TopicSuggestion' });
            _this.setState({
                shouldShowCreateTopicDialog: false,
                topicCandidate: ''
            }, function () {
                var _a;
                // Focus on editor to avoid focus lost after dismiss of CreateTopicDialog.
                (_a = _this._editor) === null || _a === void 0 ? void 0 : _a.focus();
                // Delay callout to avoid callout come out first before dialog disappear.
                setTimeout(function () {
                    var _a;
                    (_a = _this._editor) === null || _a === void 0 ? void 0 : _a.handleCustomAutoCompleteSuggestion(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, data), { isNewCreatedTopic: true }));
                    // Get the inserted topic link element.
                    var calloutTarget = document.querySelector("[data-sp-hashtagged-topic-id=\"" + newTopic.id + "\"]");
                    if (calloutTarget) {
                        _this.setState({
                            shouldShowTopicAssociationCallout: true,
                            calloutTarget: calloutTarget,
                            newTopicName: newTopic.name,
                            newTopicURL: newTopic.url
                        });
                    }
                }, TOPIC_CALLOUT_DELAY_TIME);
            });
        };
        _this._handleCloseCreateNewTopicDialog = function () {
            _this.setState({
                shouldShowCreateTopicDialog: false,
                topicCandidate: ''
            });
        };
        _this._handleDismissTopicAssociationCallout = function () {
            _this.setState({
                shouldShowTopicAssociationCallout: false,
                calloutTarget: undefined,
                topicCandidate: '',
                newTopicName: '',
                newTopicURL: ''
            });
        };
        _this._handleIframeFocusOut = function () {
            // Set timeout here to debounce when focus is set on toolbar.
            _this._iframeFocusOutTimer = window.setTimeout(function () {
                _this._updateFormattingBar(true);
            }, 100);
        };
        _this._handleRTEFocusOut = function () {
            _this._rteFoucusOutTimer = window.setTimeout(function () {
                _this._updateFormattingBar(true);
            }, 100);
        };
        _this._handleFocusIn = function () {
            _this._updateFormattingBar(false);
            if (!_this._isFocusInFormattingBar) {
                _this.focus();
            }
        };
        _this._isFocusInFormattingBar = false;
        _this._autoGrowHeightOptions = props.autoGrowHeightOptions || { enable: false };
        _this._handleClickNewTopicButton = _this._handleClickNewTopicButton.bind(_this);
        return _this;
    }
    WebPartRte._getFormattingBarDefaultPosition = function (isRtl) {
        if (isRtl === void 0) { isRtl = false; }
        var left = isRtl ? undefined : 0;
        // The default height of RTE textarea plus border is 202. We have to do this because the order of textarea and
        // formattingbar in the BaseRte is inverted. And we should change the BaseRte as less as possible.
        var top = -202;
        var position = 'relative';
        var right = isRtl ? 0 : undefined;
        return { left: left, top: top, position: position, right: right };
    };
    WebPartRte.prototype.componentDidMount = function () {
        _super.prototype.componentDidMount.call(this);
    };
    WebPartRte.prototype.componentDidUpdate = function (prevProps, prevState) {
        _super.prototype.componentDidUpdate.call(this, prevProps, prevState);
        if (this.state.shouldShowTopicAssociationCallout && this.state.displayMode === _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_3__["DisplayMode"].Read) {
            this.setState({
                shouldShowTopicAssociationCallout: false
            });
        }
    };
    WebPartRte.prototype.componentWillUnmount = function () {
        if (this._autoHideToolbarOnFocusOut) {
            var iframe = this._editorElement && this._editorElement.querySelector('iframe');
            if (iframe && iframe.contentDocument) {
                iframe.contentDocument.removeEventListener('focusin', this._handleFocusIn);
                iframe.contentDocument.removeEventListener('focusout', this._handleIframeFocusOut);
            }
            if (this._editorWrapper) {
                this._editorWrapper.removeEventListener('focusin', this._handleFocusIn);
                this._editorWrapper.removeEventListener('focusout', this._handleRTEFocusOut);
            }
        }
        _super.prototype.componentWillUnmount.call(this);
    };
    WebPartRte.prototype.focus = function () {
        _super.prototype.focus.call(this);
    };
    WebPartRte.prototype.tryUpdate = function (innerHTML, selection) {
        var _this = this;
        if (this._editor) {
            var currentHTML = this.innerHTML;
            // Trim the text before comparison because CKEditor will always append a blank line after the returned HTML.
            if (innerHTML === undefined || currentHTML === undefined || currentHTML.trim() !== innerHTML.trim()) {
                this._editor.setData(innerHTML || '', function () {
                    if (_this._editor && selection && !Object(_microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_6__["isEqual"])(selection, _this._currentSelection)) {
                        _this._editor.setSelection(selection);
                    }
                });
            }
        }
    };
    Object.defineProperty(WebPartRte.prototype, "currentSelection", {
        get: function () {
            var _a;
            return ((_a = this._editor) === null || _a === void 0 ? void 0 : _a.getSelection()) || this._currentSelection;
        },
        enumerable: true,
        configurable: true
    });
    WebPartRte.prototype._initState = function () {
        this.state = {
            displayMode: this.props.displayMode,
            formattingBarPosition: WebPartRte._getFormattingBarDefaultPosition(this._isRtl),
            isFormattingBarHidden: this._autoHideToolbarOnFocusOut,
            shouldShowCreateTopicDialog: false,
            shouldShowTopicAssociationCallout: false,
            calloutTarget: undefined,
            newTopicName: '',
            newTopicURL: '',
            topicCandidate: ''
        };
    };
    WebPartRte.prototype._updateFormattingBar = function (isHidden) {
        var _a, _b, _c, _d;
        if (!this._autoHideToolbarOnFocusOut) {
            _super.prototype._updateFormattingBar.call(this, isHidden);
            return;
        }
        if (!this._editorElement) {
            return;
        }
        if (isHidden) {
            if (!this._isFocusLostFromToolbar) {
                // Remove current selection in editor if toolbar will be hidden.
                var iframe = this._editorElement && this._editorElement.querySelector('iframe');
                (_c = (_b = (_a = iframe) === null || _a === void 0 ? void 0 : _a.contentDocument) === null || _b === void 0 ? void 0 : _b.getSelection()) === null || _c === void 0 ? void 0 : _c.removeAllRanges();
            }
            else {
                this._isFocusLostFromToolbar = false;
                return;
            }
        }
        else {
            clearTimeout(this._rteFoucusOutTimer);
            clearTimeout(this._iframeFocusOutTimer);
        }
        if (isHidden !== this.state.isFormattingBarHidden) {
            var browser = _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_3__["_BrowserDetection"].getBrowserInformation().browser;
            this.setState({
                formattingBarPosition: isHidden
                    ? this.state.formattingBarPosition
                    : {
                        left: 0,
                        // The height of web part title textarea is 26px in firefox,
                        // 29px in IE/Edge and 30px in EdgeChromium/Chrome browser.
                        // This is a workaround to keep spacing is 2px between editor and toolbar in Topic Page.
                        // According to: spacing = web part title + margin bottom - toolbar height - top value
                        // top value equals 8px in firefox, 11px in IE/Edge, 12px in EdgeChromium/Chrome.
                        top: browser === _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_3__["_Browser"].Firefox
                            ? 8
                            : browser === _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_3__["_Browser"].Edge || browser === _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_3__["_Browser"].IE
                                ? 11
                                : 12,
                        right: (_d = this.state.formattingBarPosition) === null || _d === void 0 ? void 0 : _d.right
                    },
                isFormattingBarHidden: isHidden
            });
        }
    };
    WebPartRte.prototype._createNewEditor = function (innerHTML, startUpFocus) {
        var pageContext = this.props.serviceScope.consume(_microsoft_sp_page_context__WEBPACK_IMPORTED_MODULE_16__["PageContext"].serviceKey);
        return this._options.editor.createNewEditor({
            config: this._config,
            currentHTML: innerHTML,
            editorElement: this._editorElement,
            pageContext: pageContext,
            selectionChangeCallback: this._handleSelectionChange,
            textChangeCallback: this._handleTextChange.bind(this),
            autoGrowHeightOptions: this._autoGrowHeightOptions,
            theme: Object(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_5__["getTheme"])(),
            startUpFocus: startUpFocus,
            onImagePasteCallBack: function () {
                /* no-op */
            },
            onPasteCallback: function () {
                /* no-op */
            },
            onContextMenuCallBack: function () {
                /* no-op */
            },
            onAutoCompleteKeydown: this._handleNewTopicButtonKeyDown,
            onKeyDownCallBack: this._handleEditorKeyDown,
            autocompleteRegexesMatch: _common_Flights__WEBPACK_IMPORTED_MODULE_11__["default"].isTopicHashtaggingEnabled(pageContext)
                ? [this._wikiPagePickerRegexMatch.bind(this), this._topicPickerRegexMatch.bind(this)]
                : [this._wikiPagePickerRegexMatch.bind(this)],
            autocompletePageSuggestions: this._suggestionsCallback.bind(this),
            autocompleteHTMLToInsert: this._selectedItemHTMLToInsert.bind(this),
            rteInsertLinkOnKeyDown: this._wikiInsertLinkOnKeyDown.bind(this),
            placeholder: this.props.placeholder,
            consistentFontStylesForEditMode: this.props.consistentFontStylesForEditMode
        });
    };
    WebPartRte.prototype._afterEditorCreated = function (editor) {
        var _a, _b;
        this._editor = editor;
        this._handleTextChange();
        var formattingbarElement = react_dom__WEBPACK_IMPORTED_MODULE_2__["findDOMNode"](this._formattingBar);
        // Prevent a11y manager to handle "tab" and "shift+tab" event from formatting bar.
        // When pressing shift+tab in Edge, a11y manager fails to correctly set focus into the editor input.
        if (!this._autoHideToolbarOnFocusOut && formattingbarElement) {
            formattingbarElement.setAttribute('data-sp-a11y-skipkeys', String(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_5__["KeyCodes"].tab));
        }
        if (this._editorElement) {
            var toolbarHeight = void 0;
            if (!this._autoHideToolbarOnFocusOut || formattingbarElement) {
                toolbarHeight = formattingbarElement.offsetHeight;
                formattingbarElement.style.position = 'absolute';
                formattingbarElement.style.top = "0";
            }
            else {
                toolbarHeight = 0;
            }
            if (!this._autoHideToolbarOnFocusOut) {
                this._editorWrapper.style.position = 'relative';
            }
            if (!this._autoGrowHeightOptions.enable) {
                this._editorWrapper.style.height = toolbarHeight + this._editorElement.offsetHeight + "px";
            }
            this._editorWrapper.style.marginBottom = '0';
            this._editorElement.style.position = this._autoHideToolbarOnFocusOut ? '' : 'absolute';
            this._editorElement.style.top = toolbarHeight + "px";
            this._editorElement.style.width = '100%';
        }
        if (this._autoHideToolbarOnFocusOut && this._editorWrapper) {
            this._editorWrapper.addEventListener('focusin', this._handleFocusIn);
            this._editorWrapper.addEventListener('focusout', this._handleRTEFocusOut);
        }
        if (this._editorElement) {
            this._editorElement.setAttribute('title', _loc_RteStrings_resx__WEBPACK_IMPORTED_MODULE_15__["RichTextEditorTitle"]);
        }
        // Keyboard event dispatched from iframe will not be captured by element outside the iframe.
        // At the same time, we want to capture the keystroke ALT + F10 which is used to navigate inside formattingbar
        // before canvas captures it. So it handles the keydown event in iframe and then re-dispatch the event on iframe.
        var iframe = this._editorElement && this._editorElement.querySelector('iframe');
        if (iframe && iframe.contentDocument) {
            iframe.contentDocument.addEventListener('paste', this._onBeforePaste, true);
            if (this._autoHideToolbarOnFocusOut) {
                iframe.contentDocument.addEventListener('focusin', this._handleFocusIn);
                iframe.contentDocument.addEventListener('focusout', this._handleIframeFocusOut);
            }
            var ariaLabel = _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_3__["Text"].format(_loc_RteStrings_resx__WEBPACK_IMPORTED_MODULE_15__["RichTextEditorIframeTitle"], this.props.ariaLabel || '', _loc_RteStrings_resx__WEBPACK_IMPORTED_MODULE_15__["RichTextEditorAriaLabel"]);
            // Make iframe provide contextual information by set title attribute http://webaim.org/techniques/frames/
            iframe.setAttribute('title', ariaLabel);
            if (iframe.contentDocument && iframe.contentDocument.body) {
                iframe.contentDocument.body.setAttribute('aria-label', ariaLabel);
            }
        }
        this._initPageAndLinkSuggestions();
        (_b = (_a = this._editorElement) === null || _a === void 0 ? void 0 : _a.querySelector("[role='textbox']")) === null || _b === void 0 ? void 0 : _b.setAttribute('aria-label', this.props.ariaLabel || '');
    };
    WebPartRte.prototype._finalizeAction = function (ariaActionName) {
        _super.prototype._finalizeAction.call(this, ariaActionName);
        this._signalHtmlChange();
    };
    // Override to handle plain text change on top of formatting bar from _finalizeAction
    WebPartRte.prototype._handleTextChange = function () {
        _super.prototype._handleTextChange.call(this);
        if (this.props.shouldSignalEveryChange) {
            this._signalHtmlChange();
        }
    };
    /**
     * Here is the a11y design of webPartRte:
     *
     * Keyboard:
     *   1. Focus on textbox, pressing TAB or shift-TAB will move focus outside the textbox.
     *      a. TAB goes to formattingBar.
     *      b. Shift + TAB goes to previous control.
     *      c. Press TAB on formattingBar goes to next control.
     *   2. Focus on textbox, pressing Alt + F10 will move focus to formattingBar. (Same as TextWebpart)
     *   3. Focus on formattingBar, pressing Escape will exit the webpart. (It’s captured by framework)
     *   4. Focus on formattingBar, pressing Shift + TAB will move focus back to textbox
     *   5. Focus in textbox (iframe) will not be lost. The keystroke for canvas still works.
     *      E.g. Escape to exit webpart, Alt + P to go to property pane).
     *
     * Screen reader:
     *   1. Focus on textbox, pressing Alt + F10, screen reader will tell user to:
     *      a. Use arrow keys to navigate inside formattingBar. (same as TextWebpart)
     *      b. Use Shift + TAB to move focus back to textbox. (different with TextWebpart)
     *   2. Focus on textbox, screen reader read instruction of pressing Alt + F10 to go to the formattingBar.
     */
    /**
     * WebpartRte doesn't need to handle the keydown event captured in BaseRte,
     * so we override this handle function as empty.
     * Instead, WebpartRte directly listens to ckeditor instance, and handles keydown event with private handler.
     */
    WebPartRte.prototype._handleKeyDown = function (evt) {
        /* no-op */
    };
    Object.defineProperty(WebPartRte.prototype, "_additionalRteElementClassName", {
        get: function () {
            return 'WebPartRteFocusBorder';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WebPartRte.prototype, "_disableTextBoxRoleInContainer", {
        /**
         * The CKEditor will render element with textbox role inside editor container.
         * Thus disable the editor container textbox role.
         */
        get: function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    WebPartRte.prototype.renderBottom = function () {
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, !Object(_common_KillSwitches__WEBPACK_IMPORTED_MODULE_12__["isRTENewTopicEntryKSActivated"])() && Object(_ms_sp_topic_shared__WEBPACK_IMPORTED_MODULE_8__["canCreateNewTopic"])(this._pageContext) && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null,
            this.state.shouldShowCreateTopicDialog && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ms_sp_topic_shared__WEBPACK_IMPORTED_MODULE_8__["DeferredCreateNewTopicDialog"], { shouldShowDialog: !!this.state.shouldShowCreateTopicDialog, onCloseDialog: this._handleCloseCreateNewTopicDialog, pageContext: this._pageContext, serviceScope: this.props.serviceScope, onCreateTopicOK: this._handleCreateTopicOK, topicCandidate: this.state.topicCandidate })),
            this.state.shouldShowTopicAssociationCallout && this.state.calloutTarget && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ms_sp_topic_shared__WEBPACK_IMPORTED_MODULE_8__["DeferredTopicAssociationCallout"], { topicName: this.state.newTopicName, topicURL: this.state.newTopicURL, target: this.state.calloutTarget, onDismiss: this._handleDismissTopicAssociationCallout }))))));
    };
    WebPartRte.prototype._handleClickNewTopicButton = function (topicCandidate) {
        this.setState({
            shouldShowCreateTopicDialog: true,
            topicCandidate: topicCandidate
        });
    };
    /**
     * The callback to handle keydown event inside ckeditor.
     * @param evt - the keyboard event.
     */
    WebPartRte.prototype._handleEditorKeyDown = function (evt) {
        if (_ms_sp_a11y__WEBPACK_IMPORTED_MODULE_7__["Keyboard"].isKey(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_5__["KeyCodes"].f10, evt, { alt: true }) && this._formattingbarElement) {
            _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_4__["_EngagementLogger"].logEvent(this.TAG_NAME + 'ToolbarByKeyboardShortcut.Focus', evt.type);
            Object(_a11y_RteA11y__WEBPACK_IMPORTED_MODULE_14__["navigateInside"])(this._formattingbarElement);
            var screenReaderInstruction = _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_3__["Text"].format(_loc_RteStrings_resx__WEBPACK_IMPORTED_MODULE_15__["RichTextNavigationAltF10Keys"], _loc_RteStrings_resx__WEBPACK_IMPORTED_MODULE_15__["ToolbarNavigationArrowKeys"], _loc_RteStrings_resx__WEBPACK_IMPORTED_MODULE_15__["ToolbarNavigationShiftTabKey"]);
            Object(_a11y_RteA11y__WEBPACK_IMPORTED_MODULE_14__["ariaAlert"])(screenReaderInstruction);
            evt.stopPropagation();
            evt.preventDefault();
        }
        else if (_ms_sp_a11y__WEBPACK_IMPORTED_MODULE_7__["Keyboard"].isKey('K'.charCodeAt(0), evt, { ctrl: true })) {
            this._handleLink();
            evt.stopPropagation();
            evt.preventDefault();
        }
        else if (!_ms_sp_a11y__WEBPACK_IMPORTED_MODULE_7__["Keyboard"].isKey(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_5__["KeyCodes"].tab, evt) && !_ms_sp_a11y__WEBPACK_IMPORTED_MODULE_7__["Keyboard"].isKey(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_5__["KeyCodes"].tab, evt, { shift: true })) {
            if (this._disableTopicPickerKeyboardEvent() || !this._tryHandleTopicPickerKeyboardEvent(evt)) {
                this._redispatchKeyboardEvent(evt);
            }
        }
    };
    WebPartRte.prototype._disableTopicPickerKeyboardEvent = function () {
        return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_3__["_SPKillSwitch"].isActivated('8c5497c8-609c-4a40-ab78-f109594690b6'
        /* '07/14/2020', 'Disable additional Topic Picker key stroke event handling.' */
        );
    };
    /**
     * Re-dispatch the event inside iframe so that framework can capture the keyboard event in RTE.
     * It is to make sure keystroke for canvas used to exit webpart or jump to property pane can work as expected.
     * There is an issue of chrome http://stackoverflow.com/questions/8942678/keyboardevent-in-chrome-keycode-is-0
     * As workaround it initializes an Event instead of KeyboardEvent and it is merged with the necessary values
     * from the event being re-dispatched.
     */
    WebPartRte.prototype._redispatchKeyboardEvent = function (evt) {
        var emptyEvent = document.createEvent('Event');
        emptyEvent.initEvent(evt.type, true, true);
        var clonedEvent = Object(_microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_6__["merge"])(emptyEvent, {
            keyCode: evt.keyCode,
            code: evt.code,
            which: evt.which,
            altKey: evt.altKey,
            ctrlKey: evt.ctrlKey
        });
        if (this._editorElement) {
            this._editorElement.dispatchEvent(clonedEvent);
        }
    };
    WebPartRte.prototype._signalHtmlChange = function () {
        // We need to pass the current RTE content back to the webPart which uses WebPartRte.
        if (this.props.onChanged) {
            var newValue = this._editor ? this._editor.getHTML() : this.props.innerHTML;
            if (newValue || (!Object(_common_KillSwitches__WEBPACK_IMPORTED_MODULE_12__["isFixOnChangeNotInvokedKSActivated"])() && newValue !== undefined)) {
                this.props.onChanged(newValue);
            }
        }
    };
    Object.defineProperty(WebPartRte.prototype, "_autoHideToolbarOnFocusOut", {
        get: function () {
            return !!this.props.hideToolbarOnFocusOut;
        },
        enumerable: true,
        configurable: true
    });
    WebPartRte.defaultOptions = {
        editor: _CKEditorForWebPartRte__WEBPACK_IMPORTED_MODULE_13__["default"],
        config: new _baseRte_BaseRteConfiguration__WEBPACK_IMPORTED_MODULE_10__["BaseRteConfiguration"](),
        loader: _CKEditorForWebPartRte__WEBPACK_IMPORTED_MODULE_13__["default"].moduleLoader
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_5__["autobind"]
    ], WebPartRte.prototype, "_handleEditorKeyDown", null);
    return WebPartRte;
}(_baseRte_BaseRte__WEBPACK_IMPORTED_MODULE_9__["BaseRte"]));



/***/ }),

/***/ "ytfe":
/*!******************************!*\
  !*** external "@ms/sp-a11y" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_ytfe__;

/***/ }),

/***/ "zvHu":
/*!********************************************!*\
  !*** ./lib/rte/ckeditor/CKTableHelpers.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_FormatTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/FormatTypes */ "wSgF");
/* harmony import */ var _loc_RteStrings_resx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../loc/RteStrings.resx */ "okC0");
var _loc_RteStrings_resx__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../loc/RteStrings.resx */ "okC0", 1);
/* harmony import */ var _microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @microsoft/sp-lodash-subset */ "Pk8u");
/* harmony import */ var _microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _common_KillSwitches__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/KillSwitches */ "+ORw");





var CKTableHelpers = /** @class */ (function () {
    function CKTableHelpers() {
    }
    CKTableHelpers.selectTable = function (editor, table) {
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Validate"].isNotNullOrUndefined(table, 'table');
        var selection = editor && editor.getSelection();
        if (selection) {
            selection.selectElement(table);
        }
    };
    CKTableHelpers.insertTableAfterWrapper = function (startElement, outerDiv, parent, editor) {
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Validate"].isNotNullOrUndefined(startElement, 'startElement');
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Validate"].isNotNullOrUndefined(outerDiv, 'outerDiv');
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Validate"].isNotNullOrUndefined(editor, 'editor');
        if (parent) {
            outerDiv.insertAfter(parent);
            CKTableHelpers.insertExtraParagraph(outerDiv);
        }
        else if (startElement && startElement.hasClass(CKTableHelpers.tableWrapperDivClass)) {
            outerDiv.insertAfter(startElement);
            CKTableHelpers.insertExtraParagraph(outerDiv);
        }
        else {
            editor.insertElement(outerDiv);
            CKTableHelpers.insertExtraParagraph(outerDiv);
        }
    };
    CKTableHelpers.insertExtraParagraph = function (outerDiv) {
        // Cursor positioning around tables is difficult. We add extra paragraphs before to reduce friction.
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Validate"].isNotNullOrUndefined(outerDiv, 'outerDiv');
        var extraParagraph = new CKEDITOR.dom.element('p');
        var paragraphContent = new CKEDITOR.dom.element('br');
        paragraphContent.appendTo(extraParagraph);
        extraParagraph.insertBefore(outerDiv);
    };
    CKTableHelpers.constructTableComponentOnLoad = function (tableList, editor) {
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Validate"].isNotNullOrUndefined(tableList, 'tableList');
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Validate"].isNotNullOrUndefined(editor, 'editor');
        for (var tableListIndex = 0; tableListIndex < tableList.count(); tableListIndex++) {
            var table = tableList.getItem(tableListIndex);
            var outerDiv = CKTableHelpers.findParent(table, CKTableHelpers.canvasRteResponsiveTableClassName);
            if (!outerDiv) {
                outerDiv = new CKEDITOR.dom.element('div');
                outerDiv.addClass(CKTableHelpers.canvasRteResponsiveTableClassName);
                table.appendTo(outerDiv);
            }
            if (!table) {
                return;
            }
            table.setAttribute('title', _loc_RteStrings_resx__WEBPACK_IMPORTED_MODULE_2__["TableTitle"]);
            var tableWrapper = table.getParent();
            if ((tableWrapper && !tableWrapper.hasClass(CKTableHelpers.tableWrapperDivClass)) || !tableWrapper) {
                outerDiv = CKTableHelpers.wrapTableInDiv(table, outerDiv);
            }
        }
    };
    CKTableHelpers.wrapTableInDiv = function (table, outerDiv) {
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Validate"].isNotNullOrUndefined(table, 'table');
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Validate"].isNotNullOrUndefined(outerDiv, 'outerDiv');
        // The table wrapper div helps align the table
        var tableWrapperDiv = CKTableHelpers.generateWrappers(CKTableHelpers.tableWrapperDivClass);
        table.appendTo(tableWrapperDiv);
        tableWrapperDiv.appendTo(outerDiv);
        return outerDiv;
    };
    CKTableHelpers.generateWrappers = function (className) {
        var wrapper = new CKEDITOR.dom.element('div');
        if (className) {
            wrapper.addClass(className);
        }
        wrapper.setHtml('');
        return wrapper;
    };
    CKTableHelpers.setTableStyleAndSetAccessibleRoles = function (table, styleType, colorSuffix, editor) {
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Validate"].isNotNullOrUndefined(table, 'table');
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Validate"].isNotNullOrUndefined(styleType, 'styleType');
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Validate"].isNotNullOrUndefined(colorSuffix, 'color');
        CKTableHelpers._removeTableStyles(table, _common_FormatTypes__WEBPACK_IMPORTED_MODULE_1__["StyleColor"].Theme);
        CKTableHelpers._removeTableStyles(table, _common_FormatTypes__WEBPACK_IMPORTED_MODULE_1__["StyleColor"].Neutral);
        var tableStyleClassName;
        var boldHeader = true;
        switch (styleType) {
            case _common_FormatTypes__WEBPACK_IMPORTED_MODULE_1__["TableStyleType"].BorderHeaderTableStyle:
                tableStyleClassName = CKTableHelpers.borderHeaderTableStyle;
                break;
            case _common_FormatTypes__WEBPACK_IMPORTED_MODULE_1__["TableStyleType"].FilledHeaderTableStyle:
                tableStyleClassName = CKTableHelpers.filledHeaderTableStyle;
                break;
            case _common_FormatTypes__WEBPACK_IMPORTED_MODULE_1__["TableStyleType"].BandedRowTableStyle:
                tableStyleClassName = CKTableHelpers.bandedRowTableStyle;
                break;
            case _common_FormatTypes__WEBPACK_IMPORTED_MODULE_1__["TableStyleType"].BandedRowColumnTableStyle:
                tableStyleClassName = CKTableHelpers.bandedRowColumnTableStyle;
                break;
            default:
                tableStyleClassName = CKTableHelpers.simpleTableStyle;
                boldHeader = false;
                break;
        }
        // This sets up the classname for table style based on color theme or neutral
        tableStyleClassName += colorSuffix;
        table.addClass(tableStyleClassName);
        CKTableHelpers._setTableRowTextStyle(editor, table, boldHeader);
        if (!Object(_common_KillSwitches__WEBPACK_IMPORTED_MODULE_4__["fixTableHeadersAccessibilityKSActivated"])()) {
            var thTags = table.getElementsByTag('th');
            // If there are no headers on the table, then apply header roles
            if (thTags.count() === 0) {
                CKTableHelpers._applyAccessibleHeaderRoles(table, styleType);
            }
        }
    };
    CKTableHelpers.setTableAlignment = function (editor, alignType) {
        var table = editor && editor.elementPath() && editor.elementPath().contains('table', true);
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Validate"].isNotNullOrUndefined(table, 'table');
        var ascendant = CKTableHelpers.findParent(table, CKTableHelpers.tableWrapperDivClass);
        if (ascendant) {
            // Remove the old class before applying the new one
            var tableAlignClasses = [
                CKTableHelpers.tableCenterAlign,
                CKTableHelpers.tableLeftAlign,
                CKTableHelpers.tableRightAlign
            ];
            CKTableHelpers._removeAllClassesFromList(tableAlignClasses, ascendant);
            var alignClass = void 0;
            switch (alignType) {
                case _common_FormatTypes__WEBPACK_IMPORTED_MODULE_1__["AlignType"].AlignCenter:
                    alignClass = CKTableHelpers.tableCenterAlign;
                    break;
                case _common_FormatTypes__WEBPACK_IMPORTED_MODULE_1__["AlignType"].AlignLeft:
                    alignClass = CKTableHelpers.tableLeftAlign;
                    break;
                case _common_FormatTypes__WEBPACK_IMPORTED_MODULE_1__["AlignType"].AlignRight:
                    alignClass = CKTableHelpers.tableRightAlign;
                    break;
            }
            if (alignClass) {
                ascendant.addClass(alignClass);
            }
        }
    };
    CKTableHelpers.setAlignTableCommandState = function (element, className, command) {
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Validate"].isNotNullOrUndefined(command, 'command');
        if (element) {
            var ascendant = CKTableHelpers.findParent(element, CKTableHelpers.tableWrapperDivClass);
            if (ascendant && ascendant.hasClass(className)) {
                command.setState(CKEDITOR.TRISTATE_ON);
            }
            else {
                command.setState(CKEDITOR.TRISTATE_OFF);
            }
        }
        else {
            command.setState(CKEDITOR.TRISTATE_OFF);
        }
    };
    CKTableHelpers.findParent = function (element, className) {
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Validate"].isNotNullOrUndefined(element, 'element');
        var parent = element.getParent();
        while (parent) {
            if (parent.hasClass(className)) {
                return parent;
            }
            parent = parent.getParent();
        }
        return parent;
    };
    CKTableHelpers._removeTableStyles = function (table, color) {
        var tableStyleClasses = [
            CKTableHelpers.simpleTableStyle + color,
            CKTableHelpers.borderHeaderTableStyle + color,
            CKTableHelpers.filledHeaderTableStyle + color,
            CKTableHelpers.bandedRowTableStyle + color,
            CKTableHelpers.bandedRowColumnTableStyle + color
        ];
        CKTableHelpers._removeAllClassesFromList(tableStyleClasses, table);
    };
    CKTableHelpers._removeAllClassesFromList = function (classList, element) {
        classList.forEach(function (className) {
            // Multi arg remove does not work in IE
            element.$.classList.remove(className);
        });
    };
    CKTableHelpers._setTableRowTextStyle = function (editor, table, boldHeader) {
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Validate"].isNotNullOrUndefined(editor, 'editor');
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Validate"].isNotNullOrUndefined(table, 'table');
        var selection = editor.getSelection();
        if (selection) {
            var preStylingSelectedRange = Object(_microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_3__["cloneDeep"])(selection.getRanges());
            var tableBody = table.getFirst();
            var tableRow = tableBody && tableBody.getFirst();
            if (!tableRow) {
                return;
            }
            selection.selectElement(tableRow);
            if (document.queryCommandState('bold') && !boldHeader) {
                // We need to call document's execCommand because the editor one does not
                // work here for some reason.
                document.execCommand('bold', false);
            }
            else if (!document.queryCommandState('bold') && boldHeader) {
                // Bold the first table row text
                editor.execCommand('bold');
            }
            if (preStylingSelectedRange) {
                selection.selectRanges(preStylingSelectedRange);
            }
        }
    };
    CKTableHelpers._applyAccessibleHeaderRoles = function (table, styleType) {
        // We are using 'rowHeader' or 'columnHeader' roles instead of replacing tr with th.
        // This approach was safer because adding or removing html elements from the editor is tricky and could
        // potentially introduce unknown bugs.
        var rows = table.getElementsByTag('tr');
        if (rows.count() > 0) {
            var firstRowTds = rows.getItem(0).$.getElementsByTagName('td');
            switch (styleType) {
                case _common_FormatTypes__WEBPACK_IMPORTED_MODULE_1__["TableStyleType"].BorderHeaderTableStyle:
                case _common_FormatTypes__WEBPACK_IMPORTED_MODULE_1__["TableStyleType"].FilledHeaderTableStyle:
                case _common_FormatTypes__WEBPACK_IMPORTED_MODULE_1__["TableStyleType"].BandedRowTableStyle:
                    CKTableHelpers._setColumnHeaderAttribute(firstRowTds);
                    // Remove rowheader role if it was previously set.
                    CKTableHelpers._setOrRemoveRowHeaderAttribute(rows, /*shouldRemove*/ true);
                    break;
                case _common_FormatTypes__WEBPACK_IMPORTED_MODULE_1__["TableStyleType"].BandedRowColumnTableStyle:
                    CKTableHelpers._setColumnHeaderAttribute(firstRowTds);
                    CKTableHelpers._setOrRemoveRowHeaderAttribute(rows);
                    break;
                default:
                    // Remove role attribute completely
                    CKTableHelpers._removeRoleAttributeFromTable(rows);
                    break;
            }
        }
    };
    CKTableHelpers._removeRoleAttributeFromTable = function (rows) {
        for (var i = 0; i < rows.count(); i++) {
            var rowTds = rows.getItem(i).$.getElementsByTagName('td');
            for (var j = 0; j < rowTds.length; ++j) {
                if (rowTds[j].getAttribute(CKTableHelpers.role)) {
                    rowTds[j].removeAttribute(CKTableHelpers.role);
                }
            }
        }
    };
    CKTableHelpers._setColumnHeaderAttribute = function (firstRowTds) {
        if (firstRowTds.length > 0) {
            for (var j = 0; j < firstRowTds.length; ++j) {
                firstRowTds[j].setAttribute(CKTableHelpers.role, 'columnheader');
            }
        }
    };
    CKTableHelpers._setOrRemoveRowHeaderAttribute = function (rows, shouldRemove) {
        if (rows.count() > 1) {
            // We skip the first row because it will have column header role
            for (var i = 1; i < rows.count(); i++) {
                var rowTds = rows.getItem(i).$.getElementsByTagName('td');
                if (shouldRemove) {
                    if (rowTds[0].getAttribute(CKTableHelpers.role)) {
                        rowTds[0].removeAttribute(CKTableHelpers.role);
                    }
                }
                else {
                    rowTds[0].setAttribute(CKTableHelpers.role, 'rowheader');
                }
            }
        }
    };
    CKTableHelpers.canvasRteTableClassName = 'canvasRteTable';
    CKTableHelpers.canvasRteResponsiveTableClassName = 'canvasRteResponsiveTable';
    CKTableHelpers.tableWrapperDivClass = 'tableWrapper';
    CKTableHelpers.tableCenterAlign = 'tableCenterAlign';
    CKTableHelpers.tableLeftAlign = 'tableLeftAlign';
    CKTableHelpers.tableRightAlign = 'tableRightAlign';
    CKTableHelpers.simpleTableStyle = 'simpleTableStyle';
    CKTableHelpers.borderHeaderTableStyle = 'borderHeaderTableStyle';
    CKTableHelpers.filledHeaderTableStyle = 'filledHeaderTableStyle';
    CKTableHelpers.bandedRowTableStyle = 'bandedRowTableStyle';
    CKTableHelpers.bandedRowColumnTableStyle = 'bandedRowColumnTableStyle';
    CKTableHelpers.role = 'role';
    return CKTableHelpers;
}());
/* harmony default export */ __webpack_exports__["default"] = (CKTableHelpers);


/***/ })

/******/ })});;
//# sourceMappingURL=sp-rte_[locale].js.map