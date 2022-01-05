define("49d290fb-a38e-4001-97d3-a2db486db2fa_0.1.0", ["tslib","@ms/sp-telemetry","@microsoft/sp-loader","@microsoft/office-ui-fabric-react-bundle","@microsoft/sp-lodash-subset","@microsoft/sp-core-library","@microsoft/sp-page-context","@microsoft/sp-webpart-base","react","react-dom","@ms/sp-component-utilities","@microsoft/load-themed-styles","@microsoft/sp-diagnostics","@microsoft/sp-http","@ms/odsp-utilities-bundle"], function(__WEBPACK_EXTERNAL_MODULE__17wl__, __WEBPACK_EXTERNAL_MODULE__2q6Q__, __WEBPACK_EXTERNAL_MODULE_I6O9__, __WEBPACK_EXTERNAL_MODULE_KL1q__, __WEBPACK_EXTERNAL_MODULE_Pk8u__, __WEBPACK_EXTERNAL_MODULE_UWqr__, __WEBPACK_EXTERNAL_MODULE_X_PM__, __WEBPACK_EXTERNAL_MODULE_br4S__, __WEBPACK_EXTERNAL_MODULE_cDcd__, __WEBPACK_EXTERNAL_MODULE_faye__, __WEBPACK_EXTERNAL_MODULE_hiL___, __WEBPACK_EXTERNAL_MODULE_jOlS__, __WEBPACK_EXTERNAL_MODULE_ut3N__, __WEBPACK_EXTERNAL_MODULE_vlQI__, __WEBPACK_EXTERNAL_MODULE_y88i__) { return /******/ (function(modules) { // webpackBootstrap
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
/******/ 		var component_1 = { // @ms/odsp-core-bundle
/******/ 			i: "2e09fb9b-13bb-48f2-859f-97d6fff71176",
/******/ 			v: "1.1.13",
/******/ 			m: "K9kD"
/******/ 		};
/******/ 		var component_2 = { // @ms/sp-pages-core
/******/ 			i: "764afdc3-183e-47f5-8d20-a62aff2b0881",
/******/ 			v: "0.1.0",
/******/ 			m: "mMzb"
/******/ 		};
/******/ 		var component_3 = { // @ms/i18n-utilities
/******/ 			i: "c83d5509-ccd5-4c67-919f-2440f237927a",
/******/ 			v: "0.2.231",
/******/ 			m: "Ycni"
/******/ 		};
/******/ 		var component_4 = { // @ms/sp-webpart-shared-editmode
/******/ 			i: "c79b9f88-6338-40fb-b463-3aad22a88b15",
/******/ 			v: "0.1.0",
/******/ 			m: "9poL"
/******/ 		};
/******/
/******/ 		return {"vendors~sp-topic-shared-topic-card": [component_0, component_1],"sp-topic-shared-topic-card": [component_2, component_3],"vendors~topic-shared-create-new-topic-dialog": [component_0],"topic-shared-create-new-topic-dialog": [component_4],"vendors~shared-react-splivepersonacard": [component_1],"vendors~data-sync-nucleus": [component_0, component_1]}[chunkId] || [];
/******/ 	}
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"sp-topic-shared": 0
/******/ 	};
/******/
/******/
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "chunk." + ({"topic-shared-topic-association-callout":"topic-shared-topic-association-callout","vendors~sp-topic-shared-topic-card":"vendors~sp-topic-shared-topic-card","sp-topic-shared-topic-card":"sp-topic-shared-topic-card","vendors~topic-shared-create-new-topic-dialog":"vendors~topic-shared-create-new-topic-dialog","topic-shared-create-new-topic-dialog":"topic-shared-create-new-topic-dialog","vendors~shared-react-splivepersonacard":"vendors~shared-react-splivepersonacard","vendors~data-sync-nucleus":"vendors~data-sync-nucleus"}[chunkId]||chunkId) + "_" + (["default","none"])[{"0":1,"topic-shared-topic-association-callout":0,"sp-topic-shared-topic-card":0,"topic-shared-create-new-topic-dialog":0,"vendors~sp-topic-shared-topic-card":1,"vendors~topic-shared-create-new-topic-dialog":1,"vendors~shared-react-splivepersonacard":1,"vendors~data-sync-nucleus":1}[chunkId]] + ".js"
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
/******/ 	var jsonpArray = window["webpackJsonp_49d290fb_a38e_4001_97d3_a2db486db2fa_0_1_0"] = window["webpackJsonp_49d290fb_a38e_4001_97d3_a2db486db2fa_0_1_0"] || [];
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
/******/ 	  var regex = (typeof spScriptNamePattern !== 'undefined') ? spScriptNamePattern : /sp-topic-shared_default\.js/i;
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
/*! exports provided: default, isTopicOriginKSActivated, isTopicCuratedKSActivated, isRevertDefaultYukonHeaderKSActive, useIndexDBForEntityIdKSActivated, isShowSuggestedDefinitionKSActivated, makeTopicWebpartsAsyncKSActivated, isGetTopicIdExtraDataKSActivated, useGetRequestForTopicListsKSActivated, fixQOSMonitorTotal403KSActivated, isUseMinedInMSAIAPIKSActivated, isRetrieveTopicDetailsParameterKSActived, addSPDFTestHeaderKSActivated, fixMsgPreviewKSActivated, fixPageUniqueIdUnderNewPageKSActivated, addCorrelationIDForGetTopicByIDKSActivated, removeCortexDisabledFlagforManagementAPIsKSActivated, loadSuggestedSitesKSActivated, topicDefinitionWikiSourceKSActivated, useOriginalIdsKSActivated, useAncestorIdsActivated, fixUndoRedoForSuggestedItemsKSActivated, useBaseKMContainerKSActivated, fixSuggestedContentLoadKSActivated, throwEmptyResErrSeparatelyKSActivated, dismissTopicCardWhenVisibleKSActivated, checkErrorCodeKSActivated, isLimitNewTopicPermissionOnMSITKsActivated, triggerRenderFailureLogKSActivated, exposeTopicCacheKsActivated */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isTopicOriginKSActivated", function() { return isTopicOriginKSActivated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isTopicCuratedKSActivated", function() { return isTopicCuratedKSActivated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isRevertDefaultYukonHeaderKSActive", function() { return isRevertDefaultYukonHeaderKSActive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useIndexDBForEntityIdKSActivated", function() { return useIndexDBForEntityIdKSActivated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isShowSuggestedDefinitionKSActivated", function() { return isShowSuggestedDefinitionKSActivated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeTopicWebpartsAsyncKSActivated", function() { return makeTopicWebpartsAsyncKSActivated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isGetTopicIdExtraDataKSActivated", function() { return isGetTopicIdExtraDataKSActivated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useGetRequestForTopicListsKSActivated", function() { return useGetRequestForTopicListsKSActivated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fixQOSMonitorTotal403KSActivated", function() { return fixQOSMonitorTotal403KSActivated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isUseMinedInMSAIAPIKSActivated", function() { return isUseMinedInMSAIAPIKSActivated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isRetrieveTopicDetailsParameterKSActived", function() { return isRetrieveTopicDetailsParameterKSActived; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addSPDFTestHeaderKSActivated", function() { return addSPDFTestHeaderKSActivated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fixMsgPreviewKSActivated", function() { return fixMsgPreviewKSActivated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fixPageUniqueIdUnderNewPageKSActivated", function() { return fixPageUniqueIdUnderNewPageKSActivated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addCorrelationIDForGetTopicByIDKSActivated", function() { return addCorrelationIDForGetTopicByIDKSActivated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeCortexDisabledFlagforManagementAPIsKSActivated", function() { return removeCortexDisabledFlagforManagementAPIsKSActivated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadSuggestedSitesKSActivated", function() { return loadSuggestedSitesKSActivated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "topicDefinitionWikiSourceKSActivated", function() { return topicDefinitionWikiSourceKSActivated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useOriginalIdsKSActivated", function() { return useOriginalIdsKSActivated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useAncestorIdsActivated", function() { return useAncestorIdsActivated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fixUndoRedoForSuggestedItemsKSActivated", function() { return fixUndoRedoForSuggestedItemsKSActivated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useBaseKMContainerKSActivated", function() { return useBaseKMContainerKSActivated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fixSuggestedContentLoadKSActivated", function() { return fixSuggestedContentLoadKSActivated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "throwEmptyResErrSeparatelyKSActivated", function() { return throwEmptyResErrSeparatelyKSActivated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dismissTopicCardWhenVisibleKSActivated", function() { return dismissTopicCardWhenVisibleKSActivated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkErrorCodeKSActivated", function() { return checkErrorCodeKSActivated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isLimitNewTopicPermissionOnMSITKsActivated", function() { return isLimitNewTopicPermissionOnMSITKsActivated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "triggerRenderFailureLogKSActivated", function() { return triggerRenderFailureLogKSActivated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exposeTopicCacheKsActivated", function() { return exposeTopicCacheKsActivated; });
/* harmony import */ var _ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ms/sp-component-utilities */ "hiL/");
/* harmony import */ var _ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__);
/**
 * @copyright Microsoft Corporation. All rights reserved.
 */


var KillSwitches = /** @class */ (function () {
    function KillSwitches() {
    }
    KillSwitches.mediaWikiDemo = new _ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_0__["KillSwitch"]('cb9b7f5e-38e9-4530-9cce-d94adf544027' /* '05/11/2020',
    'A demo of addding media wiki items into KM through a search connector.' */);
    KillSwitches.useV2AnnotationsEndpoint = new _ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_0__["KillSwitch"]('445356d1-5ffc-436b-8631-fdaca5a2258e' /* '05/28/2020',
      'Use V2 endpoint for Annotations' */);
    KillSwitches.logRequestId = new _ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_0__["KillSwitch"]('f5a57d72-149f-4b8d-abed-9cf22f2a3dc3' /* '06/02/2020',
      'Use extra data to log request id' */);
    KillSwitches.previewPage404Fix = new _ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_0__["KillSwitch"]('36c2c71f-dc0d-4d7c-873a-ab3f09722570' /* '05/05/2020',
      'Fixed the issue with a preview page returning a 404 error upon reload' */);
    KillSwitches.revertTopicCenterPerfChanges = new _ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_0__["KillSwitch"]('e0490783-6ac9-4d84-a95a-8a1e4c59e2df' /* '06/18/2020',
      'Reverts perf changes for Topic Center API calls' */);
    KillSwitches.removeLogTokenFetchTime = new _ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_0__["KillSwitch"]('0e4428bc-190b-4f77-9ed8-93de78c314db' /* '07/07/2020',
    'Sends custom qos tag to httpclienthelper for more granular monitoring' */);
    return KillSwitches;
}());
/* harmony default export */ __webpack_exports__["default"] = (KillSwitches);
function isTopicOriginKSActivated() {
    return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["_SPKillSwitch"].isActivated('beeb1fb1-d5d4-44f9-a3b3-0eba16748727' /* '08/24/2020',
    'Add topic origin property to events, tracking how the topic was created curated/AI.' */);
}
function isTopicCuratedKSActivated() {
    return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["_SPKillSwitch"].isActivated('beeb1fb1-d5d4-44f9-a3b3-0eba16748727' /* '08/28/2020',
    'Add topic curated property to events, tracking whether a topic is curated or just API generated.' */);
}
function isRevertDefaultYukonHeaderKSActive() {
    return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["_SPKillSwitch"].isActivated('03c915c2-fd9d-4d69-a7cd-813c63f83884' /* '07/30/2020',
    'Reverts the default request header for annotations back to useYukonAndTopicPredictor' */);
}
function useIndexDBForEntityIdKSActivated() {
    return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["_SPKillSwitch"].isActivated('040e5812-ee72-430b-93d9-42b62ff8ce13' /* '10/15/2020',
    'Reverts use indexDB caching for entityId DataProvider' */);
}
function isShowSuggestedDefinitionKSActivated() {
    return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["_SPKillSwitch"].isActivated('225addd8-1fbc-4c95-b273-c100a116e2ae' /* '08/07/2020',
    'Show suggested definition' */);
}
function makeTopicWebpartsAsyncKSActivated() {
    return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["_SPKillSwitch"].isActivated('92e61a3c-31b1-4447-acae-510ebde23970'
    /* '2020/08/014', 'Made topic webparts async' */
    );
}
function isGetTopicIdExtraDataKSActivated() {
    return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["_SPKillSwitch"].isActivated('788a8b16-7367-4039-964e-a30277bf08fc' /* '08/10/2020',
    'Extra data ' */);
}
function useGetRequestForTopicListsKSActivated() {
    return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["_SPKillSwitch"].isActivated('4204b0cc-205a-4e5a-b89b-0523a6577761' /* '08/26/2020',
    'Uses GET requests for SubstrateTopicsDataProvider' */);
}
function fixQOSMonitorTotal403KSActivated() {
    return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["_SPKillSwitch"].isActivated('f0c06645-7607-4a62-9f65-83580caad556'
    /* '2020/09/22', 'Fix substrate.*.dp Monitor to treat 403 as expected failure' */
    );
}
function isUseMinedInMSAIAPIKSActivated() {
    return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["_SPKillSwitch"].isActivated('0033fbed-12fc-41bd-913e-3ea722a4aae6'
    /* '09/30/2020', 'Adds Capability to call for only mined topics' */
    );
}
function isRetrieveTopicDetailsParameterKSActived() {
    return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["_SPKillSwitch"].isActivated('30d56fc6-8865-48dd-86b5-a4471f67ebb2'
    /* '10/03/2020', 'Add retrieve topics details to annotation request.' */
    );
}
function addSPDFTestHeaderKSActivated() {
    return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["_SPKillSwitch"].isActivated('7838eb23-a337-43f4-aa22-0c1d2537f237'
    /* '10/03/2020', 'Add test header for requests originating from the SPDF topic center' */
    );
}
function fixMsgPreviewKSActivated() {
    return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["_SPKillSwitch"].isActivated('9339dc59-4ce3-457c-beda-b1768cb77ad5' /* '10/09/2020', 'fix .msg file preview issue' */);
}
function fixPageUniqueIdUnderNewPageKSActivated() {
    return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["_SPKillSwitch"].isActivated('9ad305a5-4be4-4a26-9c28-e5642782d858'
    /* '10/16/2020', 'fix page unique id under new page' */
    );
}
function addCorrelationIDForGetTopicByIDKSActivated() {
    return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["_SPKillSwitch"].isActivated('0d7ff0fc-d4b6-469b-a44c-4c1e83b67a77'
    /* '10/22/2020', 'adds extra data to qos monitor for success and failures' */
    );
}
function removeCortexDisabledFlagforManagementAPIsKSActivated() {
    return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["_SPKillSwitch"].isActivated('9243c796-7671-4ca8-9aab-3c6252d8379b'
    /* '10/22/2020', 'Management API's should not disable cortex because they have a smaller set of authorized users.' */
    );
}
function loadSuggestedSitesKSActivated() {
    return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["_SPKillSwitch"].isActivated('523a6a99-6000-422e-82ed-134cddcf3f90'
    /* '10/30/2020', 'Load topic page suggested sites'*/
    );
}
function topicDefinitionWikiSourceKSActivated() {
    return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["_SPKillSwitch"].isActivated('ddca4f7b-d48e-4bac-8cbf-cabda40095c8'
    /*'11/02/2020', 'show topic definition wiki source' */
    );
}
function useOriginalIdsKSActivated() {
    return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["_SPKillSwitch"].isActivated('a1e54e1e-1575-4359-a89f-d0b771504f3a' /* '09/25/2020', 'Use original ids of topic and update in cache values for annotations data' */);
}
function useAncestorIdsActivated() {
    return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["_SPKillSwitch"].isActivated('dd6d1b34-5024-42e4-95f7-03ab66f62e46'
    /* '12/01/2020', 'Respect AncestorIds of substrate topic entity for historical identities' */
    );
}
function fixUndoRedoForSuggestedItemsKSActivated() {
    return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["_SPKillSwitch"].isActivated('365aa2ba-5999-4896-a0a1-d59a2277afa8'
    /* '12/10/2020', 'Fix undo redo for suggested items' */
    );
}
function useBaseKMContainerKSActivated() {
    return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["_SPKillSwitch"].isActivated('55f4a40b-b625-4cbb-947d-b83ae919e254'
    /* Use BaseKMContainer to render BaseKMWebPart */
    );
}
function fixSuggestedContentLoadKSActivated() {
    return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["_SPKillSwitch"].isActivated('f47e805d-5165-4a19-b358-ead298ab69e6'
    /* '12/21/2020', 'Fix suggested content load issue' */
    );
}
function throwEmptyResErrSeparatelyKSActivated() {
    return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["_SPKillSwitch"].isActivated('1f494f8a-f9db-4d81-b89b-a9a9bd08bada'
    /* '12/29/2020', 'Throw empty responss error separately' */
    );
}
function dismissTopicCardWhenVisibleKSActivated() {
    return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["_SPKillSwitch"].isActivated('fff00d58-21a8-459b-a4d7-c774e11bd3d0' /* '01/21/2021',
    'Perf improvement to allow calling topic card OnDismiss when it's visible.' */);
}
function checkErrorCodeKSActivated() {
    return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["_SPKillSwitch"].isActivated('b3188a26-535a-4bba-9d28-9efae76dcdad' /* '01/07/2021', 'Check error code instead of error message' */);
}
function isLimitNewTopicPermissionOnMSITKsActivated() {
    return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["_SPKillSwitch"].isActivated('e517fa26-3ff9-4d03-8787-96b5d816bd7c'
    /* '1/14/2021/, 'Limit new topic permission on MSIT' */
    );
}
function triggerRenderFailureLogKSActivated() {
    return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["_SPKillSwitch"].isActivated('b74c9e15-5c2b-431a-9fd3-abf5bb35f929'
    /* '1/15/2021', 'Trigger render failure log ks.' */
    );
}
function exposeTopicCacheKsActivated() {
    return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["_SPKillSwitch"].isActivated('15414d36-2271-47b3-8dba-7af9b4688ba8'
    /* '1/25/2021', 'Expose topic cache from sp-topic-shared.' */
    );
}


/***/ }),

/***/ "/7U8":
/*!**********************************************************************!*\
  !*** ../sp-dataproviders/lib/httpClients/sphome/SPHomeHttpClient.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/office-ui-fabric-react-bundle */ "KL1q");
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/sp-diagnostics */ "ut3N");
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ms/sp-component-utilities */ "hiL/");
/* harmony import */ var _ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _microsoft_sp_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @microsoft/sp-http */ "vlQI");
/* harmony import */ var _microsoft_sp_http__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_http__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _microsoft_sp_page_context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @microsoft/sp-page-context */ "X+PM");
/* harmony import */ var _microsoft_sp_page_context__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_page_context__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _SPHomeMicroserviceNotAvailableError__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./SPHomeMicroserviceNotAvailableError */ "EUIQ");
/* harmony import */ var _common_SPHttpMicroserviceClient__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/SPHttpMicroserviceClient */ "Tigv");
/* harmony import */ var _dataProviders_common_TieredCacheHelper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../dataProviders/common/TieredCacheHelper */ "WGsJ");
/* harmony import */ var _dataProviders_DataProvidersKillSwitches__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../dataProviders/DataProvidersKillSwitches */ "h0Ut");











// Window Variables
var TOKEN_EXP_OFFSET = 15000; // 15 seconds
var SPHOME_CLIENT_CONTEXT = '_spHomeClientContext';
var TOKEN_PREFETCH_COMPLETE = '_spHomeClientContextLoaded';
var _useSPHttpClientKS = new _ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_2__["KillSwitch"]('0306551a-b040-4e46-ae3d-98f35375764b' /*'02/18/2020', 'WEX_UseSpHttpClientInSpHomeDataProvider' */);
/**
 * SPHomeHttpClient is used to perform REST calls to the SharePoint Home microservice.
 * For API documentation see https://aka.ms/sphomeapidoc
 * It abstracts the fetching of tokens and passing the correct headers
 * when calling the microservice.
 * @internal
 */
var SPHomeHttpClient = /** @class */ (function () {
    function SPHomeHttpClient(serviceScope) {
        var _this = this;
        this._isServiceAvailable = undefined;
        this._hasPrefetchedToken = false;
        this._requestUpdater = function (props) {
            return _this._fetchTokenIfExpired().then(function () {
                return {
                    url: _this._generateUrlVersionedPath(props.url),
                    options: _this._getRequestOptions(props.options)
                };
            });
        };
        if (this._isPrefetchTokenFlightEnabled) {
            this._initializeFromPrefetchedToken = new Promise(function (resolve, reject) {
                var asyncObj = new _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__["Async"]();
                window[TOKEN_PREFETCH_COMPLETE] = function () {
                    asyncObj.dispose();
                    var qosMonitor = new _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__["_QosMonitor"]('SpHomeClientContextPrefetch');
                    try {
                        _this._initializeWithPrefetchedToken();
                        if (!_this._hasPrefetchedToken) {
                            qosMonitor.writeUnexpectedFailure('NoPrefetchedToken');
                        }
                        else {
                            qosMonitor.writeSuccess();
                        }
                    }
                    catch (error) {
                        qosMonitor.writeUnexpectedFailure('Unexpected', error);
                        reject(error);
                    }
                    resolve();
                };
                // Guarantee of promise closure in case TOKEN_PREFETCH_COMPLETE is never executed in extreme scenarios
                // like environment does not support prefetch token or unexpected error occured on server.
                // However do not build feature on timeout. If it is occuring more often you need to fix root cause.
                // See VSO#876977 for more context
                asyncObj.setTimeout(function () { return !_this._hasPrefetchedToken && reject(new Error('Timeout')); }, 10000);
            });
        }
        this._stopUsingSPHttpMSClient = Object(_dataProviders_DataProvidersKillSwitches__WEBPACK_IMPORTED_MODULE_9__["stopUsingSPHttpMSClient"])();
        serviceScope.whenFinished(function () {
            _this._spHttpClient = serviceScope.consume(_microsoft_sp_http__WEBPACK_IMPORTED_MODULE_3__["SPHttpClient"].serviceKey);
            if (!_this._stopUsingSPHttpMSClient) {
                _this._spHttpMicroserviceClient = serviceScope.consume(_common_SPHttpMicroserviceClient__WEBPACK_IMPORTED_MODULE_7__["serviceKey"]);
                _this._spHttpMicroserviceClient.requestUpdater = _this._requestUpdater;
            }
            _this._httpClient = serviceScope.consume(_microsoft_sp_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"].serviceKey);
            _this._pageContext = serviceScope.consume(_microsoft_sp_page_context__WEBPACK_IMPORTED_MODULE_5__["PageContext"].serviceKey);
            if (_this._isPrefetchTokenFlightEnabled) {
                _this._initializeWithPrefetchedToken();
            }
            _this._isUserSupportedBySubstrate = _this._isSubtrateSupportedUser(serviceScope.consume(_microsoft_sp_page_context__WEBPACK_IMPORTED_MODULE_5__["PageContext"].serviceKey).user);
        });
    }
    SPHomeHttpClient.prototype.get = function (path, version, extraHeaders, cacheConfiguration) {
        if (cacheConfiguration) {
            return this._get(path, version, extraHeaders, cacheConfiguration);
        }
        else {
            return this._get_deprecated(path, version, extraHeaders);
        }
    };
    SPHomeHttpClient.prototype.post = function (path, body, version, extraHeaders, cacheConfiguration) {
        if (cacheConfiguration) {
            return this._post(path, body, version, extraHeaders, cacheConfiguration);
        }
        else {
            return this._post_deprecated(path, body, version, extraHeaders);
        }
    };
    Object.defineProperty(SPHomeHttpClient.prototype, "isServiceAvailable", {
        get: function () {
            var _this = this;
            // Use cached value since _fetchTokenIfExpired will otherwise
            // retry even if it already determined that service isn't available.
            if (this._isServiceAvailable !== undefined) {
                return Promise.resolve(this._isServiceAvailable);
            }
            else {
                return this._fetchTokenIfExpired()
                    .then(function () {
                    _this._isServiceAvailable = true;
                    return _this._isServiceAvailable;
                })
                    .catch(function (error) {
                    _this._isServiceAvailable = false;
                    return _this._isServiceAvailable;
                });
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SPHomeHttpClient.prototype, "isUserSupportedBySubstrate", {
        get: function () {
            return this._isUserSupportedBySubstrate;
        },
        enumerable: true,
        configurable: true
    });
    SPHomeHttpClient.prototype._get = function (path, version, extraHeaders, cacheConfiguration) {
        var _this = this;
        if (!this._stopUsingSPHttpMSClient && this._spHttpMicroserviceClient) {
            var versionedPath = this._generateVersionedPath(path, version);
            return this._spHttpMicroserviceClient.get(versionedPath, new _microsoft_sp_http__WEBPACK_IMPORTED_MODULE_3__["SPHttpClientConfiguration"](_microsoft_sp_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"].configurations.v1, {}), this._getRequestOptions({}, extraHeaders), this._getCacheConfiguration(cacheConfiguration, versionedPath));
        }
        return this._fetchTokenIfExpired().then(function () {
            return _this._spHttpClient.get(_this._generateUrl(path, version), new _microsoft_sp_http__WEBPACK_IMPORTED_MODULE_3__["SPHttpClientConfiguration"](_microsoft_sp_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"].configurations.v1, {}), _this._getRequestOptions({}, extraHeaders), cacheConfiguration);
        });
    };
    SPHomeHttpClient.prototype._get_deprecated = function (path, version, extraHeaders) {
        var _this = this;
        return this._fetchTokenIfExpired().then(function () {
            if (!_useSPHttpClientKS.isActivated()) {
                return _this._spHttpClient.get(_this._generateUrl(path, version), new _microsoft_sp_http__WEBPACK_IMPORTED_MODULE_3__["SPHttpClientConfiguration"](_microsoft_sp_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"].configurations.v1, {}), _this._getRequestOptions({}, extraHeaders));
            }
            return _this._httpClient.get(_this._generateUrl(path, version), _microsoft_sp_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"].configurations.v1, _this._getRequestOptions({}, extraHeaders));
        });
    };
    SPHomeHttpClient.prototype._post = function (path, body, version, extraHeaders, cacheConfiguration) {
        var _this = this;
        if (body === void 0) { body = ''; }
        if (!this._stopUsingSPHttpMSClient && this._spHttpMicroserviceClient) {
            var versionedPath = this._generateVersionedPath(path, version);
            return this._spHttpMicroserviceClient.fetch(versionedPath, new _microsoft_sp_http__WEBPACK_IMPORTED_MODULE_3__["SPHttpClientConfiguration"](_microsoft_sp_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"].configurations.v1, {}), this._getRequestOptions({ body: body }, extraHeaders, 'POST'), this._getCacheConfiguration(cacheConfiguration, versionedPath));
        }
        return this._fetchTokenIfExpired().then(function () {
            return _this._spHttpClient.fetch(_this._generateUrl(path, version), new _microsoft_sp_http__WEBPACK_IMPORTED_MODULE_3__["SPHttpClientConfiguration"](_microsoft_sp_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"].configurations.v1, {}), _this._getRequestOptions({ body: body }, extraHeaders, 'POST'), cacheConfiguration);
        });
    };
    SPHomeHttpClient.prototype._post_deprecated = function (path, body, version, extraHeaders) {
        var _this = this;
        if (body === void 0) { body = ''; }
        return this._fetchTokenIfExpired().then(function () {
            if (!_useSPHttpClientKS.isActivated()) {
                return _this._spHttpClient.post(_this._generateUrl(path, version), new _microsoft_sp_http__WEBPACK_IMPORTED_MODULE_3__["SPHttpClientConfiguration"](_microsoft_sp_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"].configurations.v1, {}), _this._getRequestOptions({ body: body }, extraHeaders));
            }
            return _this._httpClient.post(_this._generateUrl(path, version), _microsoft_sp_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"].configurations.v1, _this._getRequestOptions({ body: body }, extraHeaders));
        });
    };
    SPHomeHttpClient.prototype._getCacheConfiguration = function (cacheConfiguration, parentKeyOverride) {
        if (cacheConfiguration) {
            if (!cacheConfiguration.extraProps) {
                cacheConfiguration.extraProps = new Map(); // tslint:disable-line:no-any
            }
            cacheConfiguration.extraProps.set(_dataProviders_common_TieredCacheHelper__WEBPACK_IMPORTED_MODULE_8__["default"].parentKeyOverride, parentKeyOverride);
        }
        return cacheConfiguration;
    };
    SPHomeHttpClient.prototype._generateUrl = function (path, version) {
        if (version === void 0) { version = 1; }
        return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_4__["Text"].format(SPHomeHttpClient.MICROSERVICE_ENDPOINT, this._url, version, path);
    };
    SPHomeHttpClient.prototype._generateUrlVersionedPath = function (versionedPath) {
        return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_4__["Text"].format(SPHomeHttpClient.MICROSERVICE_ENDPOINT_V, this._url, versionedPath);
    };
    SPHomeHttpClient.prototype._generateVersionedPath = function (path, version) {
        if (version === void 0) { version = 1; }
        return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_4__["Text"].format(SPHomeHttpClient.VERSIONED_PATH, version, path);
    };
    SPHomeHttpClient.prototype._isTokenValid = function () {
        return this._tokenExpiry && this._tokenExpiry > new Date();
    };
    /**
     * To talk with the microservice we need three pieces of information:
     * - the url of the microservice to talk to
     * - the token to pass to the microservice for authentication
     * - the payload we need to pass to the microservice so it understands how
     *   to talk to sharepoint
     * These all come from the same endpoint and can be fetched in a single request
     */
    SPHomeHttpClient.prototype._getTokenAndMicroserviceDetails = function () {
        var _this = this;
        var qosMonitor = new _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__["_QosMonitor"]('SPHomeHttpClient');
        var correlationId;
        var url = this._pageContext.web.absoluteUrl + "/_api/sphomeservice/context?$expand=Token,Payload";
        return this._spHttpClient
            .get(url, _microsoft_sp_http__WEBPACK_IMPORTED_MODULE_3__["SPHttpClient"].configurations.v1)
            .then(function (response) {
            correlationId = response.correlationId ? response.correlationId.toString() : undefined;
            if (response.ok) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                qosMonitor.writeUnexpectedFailure('FailedResponse', error, {
                    correlationId: correlationId,
                    Status: response.status
                });
                throw error;
            }
        })
            .then(function (response) {
            if (!response.Token || !response.Token.access_token) {
                _this._isServiceAvailable = false;
                throw new _SPHomeMicroserviceNotAvailableError__WEBPACK_IMPORTED_MODULE_6__["default"]();
            }
            _this._isServiceAvailable = true;
            _this._token = response.Token.access_token;
            _this._tokenExpiry = new Date(Number(response.Token.expires_on) * 1000 - TOKEN_EXP_OFFSET);
            _this._payload = response.Payload;
            _this._url = response.Urls[0];
            _this._alreadyGettingTokenPromise = undefined;
            qosMonitor.writeSuccess();
        })
            .catch(function (error) {
            if (error instanceof _SPHomeMicroserviceNotAvailableError__WEBPACK_IMPORTED_MODULE_6__["default"]) {
                qosMonitor.writeExpectedFailure('NotAvailable', error, { correlationId: correlationId });
            }
            else {
                qosMonitor.writeUnexpectedFailure('SPHomeHttpClient', error, { correlationId: correlationId });
            }
            _this._alreadyGettingTokenPromise = undefined;
            throw error;
        });
    };
    SPHomeHttpClient.prototype._getRequestOptions = function (options, extraHeaders, method) {
        if (options === void 0) { options = {}; }
        var _a;
        options.headers = options.headers || {};
        if (this._token) {
            options.headers['Authorization'] = "Bearer " + this._token; // tslint:disable-line:no-string-literal
        }
        if (this._payload) {
            options.headers['SPHome-ApiContext'] = this._payload;
        }
        options.headers['Content-Type'] = 'application/json';
        options.headers['SPHome-ClientType'] = 'PagesWeb';
        if ((_a = this._pageContext) === null || _a === void 0 ? void 0 : _a.legacyPageContext) {
            // tslint:disable-next-line:no-string-literal
            options.headers['FarmLabel'] = this._pageContext.legacyPageContext.farmLabel;
        }
        if (method) {
            options.headers['X-HTTP-Method'] = method;
            options.method = method;
        }
        if (extraHeaders) {
            extraHeaders.forEach(function (value, key) {
                options.headers[key] = value;
            });
        }
        return options;
    };
    SPHomeHttpClient.prototype._initializeWithPrefetchedToken = function () {
        var qosMonitor = new _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__["_QosMonitor"]('InitializeSpHomeClientContext');
        try {
            if (!this._hasPrefetchedToken) {
                if (window[SPHOME_CLIENT_CONTEXT] && window[SPHOME_CLIENT_CONTEXT] !== []) {
                    var spHomeClientContext = window[SPHOME_CLIENT_CONTEXT];
                    var token = spHomeClientContext.Token;
                    this._token = token && token.AccessToken;
                    this._payload = spHomeClientContext.Payload;
                    this._url = spHomeClientContext.Urls && spHomeClientContext.Urls[0];
                    this._tokenExpiry =
                        token &&
                            token.ExpiresOn &&
                            new Date(Number(spHomeClientContext.Token.ExpiresOn) * 1000 - TOKEN_EXP_OFFSET);
                    this._hasPrefetchedToken = true;
                    qosMonitor.writeSuccess();
                }
                else {
                    if (window[SPHOME_CLIENT_CONTEXT] === []) {
                        qosMonitor.writeUnexpectedFailure('SPHomeClientContextNotAvailable', new Error('EmptyTokenReturned'));
                    }
                    else {
                        qosMonitor.writeExpectedFailure('SPHomeClientContextNotAvailable', new Error('TokenNotAvailable'));
                    }
                }
            }
        }
        catch (error) {
            this._hasPrefetchedToken = false;
            qosMonitor.writeUnexpectedFailure('InitializeSPHomeClientContextFailed', error.message);
        }
        return this._hasPrefetchedToken;
    };
    SPHomeHttpClient.prototype._fetchTokenIfExpired = function () {
        if (this._isTokenValid()) {
            return Promise.resolve();
        }
        if (!this._alreadyGettingTokenPromise) {
            if (this._isPrefetchTokenFlightEnabled) {
                // Return the response that comes back faster
                var prefetchTokenPromiseId = _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_4__["Guid"].parse('928806ac-3e49-4e4e-9114-7c392215230f');
                var microserviceTokenPromiseId = _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_4__["Guid"].parse('5ff931f9-8682-4614-b4f1-9b8d1aa74942');
                var promiseRaceMap = [
                    {
                        raceablePromise: this._initializeFromPrefetchedToken,
                        raceId: prefetchTokenPromiseId
                    },
                    {
                        raceablePromise: this._getTokenAndMicroserviceDetails(),
                        raceId: microserviceTokenPromiseId
                    }
                ];
                this._alreadyGettingTokenPromise = _ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_2__["SmartRace"].race(promiseRaceMap)
                    .then(function (raceResponse) {
                    return raceResponse.raceablePromise;
                })
                    .catch(function (error) {
                    throw error;
                });
            }
            else {
                this._alreadyGettingTokenPromise = this._getTokenAndMicroserviceDetails();
            }
        }
        return this._alreadyGettingTokenPromise;
    };
    Object.defineProperty(SPHomeHttpClient.prototype, "_isPrefetchTokenFlightEnabled", {
        get: function () {
            return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_4__["_SPFlight"].isEnabled(1265 /* SPHomeServiceContextPrefetch */);
        },
        enumerable: true,
        configurable: true
    });
    SPHomeHttpClient.prototype._isSubtrateSupportedUser = function (user) {
        if (user) {
            var isAnonymousGuestUser = user.isAnonymousGuestUser, isExternalGuestUser = user.isExternalGuestUser;
            return !isAnonymousGuestUser && !isExternalGuestUser;
        }
        return true; // In the unlikely case of a race condition assume supported
    };
    SPHomeHttpClient.serviceKey = _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_4__["ServiceKey"].create('sp-component-utilities:SPHomeHttpClient', SPHomeHttpClient);
    SPHomeHttpClient.MICROSERVICE_ENDPOINT = '{0}/api/v{1}/{2}';
    SPHomeHttpClient.MICROSERVICE_ENDPOINT_V = '{0}/api/{1}';
    SPHomeHttpClient.VERSIONED_PATH = 'v{0}/{1}';
    return SPHomeHttpClient;
}());
/* harmony default export */ __webpack_exports__["default"] = (SPHomeHttpClient);


/***/ }),

/***/ "/LHP":
/*!******************************!*\
  !*** ./lib/utilities/env.js ***!
  \******************************/
/*! exports provided: isEnvMSIT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEnvMSIT", function() { return isEnvMSIT; });
/**
 * @copyright Microsoft Corporation. All rights reserved.
 */
/**
 * Is the current site MSIT
 * @internal
 */
// tslint:disable-next-line:export-name
function isEnvMSIT(pageContext) {
    var env = pageContext.legacyPageContext.env;
    var farmLabel = pageContext.legacyPageContext.farmLabel;
    return env === 'prodbubble' && farmLabel !== 'MSIT_SPDF_1_Content';
}


/***/ }),

/***/ "05y5":
/*!***************************************************************************!*\
  !*** ../sp-dataproviders/lib/dataProviders/common/KMTieredCacheHelper.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ms_sp_component_utilities_lib_topics_TopicFlightingUtilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ms/sp-component-utilities/lib/topics/TopicFlightingUtilities */ "Tpx+");
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/sp-diagnostics */ "ut3N");
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @microsoft/sp-lodash-subset */ "Pk8u");
/* harmony import */ var _microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ms/sp-component-utilities */ "hiL/");
/* harmony import */ var _ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _common_TieredCacheHelper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/TieredCacheHelper */ "WGsJ");
/**
 * @copyright Microsoft Corporation. All rights reserved.
 */






var CORTEX_INVALID_IDB_PAGES = 'CortexInvalidIDBPages';
var ERROR_API_FAILURE = 'APIFailure';
/**
 * Handles the response from API calls for KM related features (e.g. Annotations, Suggestions, etc.)
 * when IndexedDB is enabled.
 *
 * Parses the client cachable response.
 * If no cached response exists then just return server response.
 * If no server response exists then just return the cached response.
 * If both cached and server responses coexist then there is a promise race which then
 * returns whichever response (caced or server) that gets processed first. If the cached
 * response is processed before the server response then we attach a callback to ensure the
 * server request is sent to update the cache.
 * @param response the client cachable response
 * @param isRawData the callback to test if the response data needs to be processed
 * @param processRawData the callback to process the rawData
 * @param args extra args to process the raw data
 * @param qosMonitor the QOS monitor used by processHttpResponse
 * @param qosTagPrefix the QOS log prefix tag representing the calling module (e.g. CSIKM.Annotate)
 * @internal
 */
var KMTieredCacheHelper = /** @class */ (function () {
    function KMTieredCacheHelper() {
    }
    KMTieredCacheHelper.parseClientCachableResponse = function (response, isRawData, isCachedDataEmpty, processRawData, // tslint:disable-line:no-any
    qosMonitor, qosTagPrefix, uniquePageId) {
        var _this = this;
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__["Validate"].isNotNullOrUndefined(response, 'response');
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__["Validate"].isNotNullOrUndefined(isRawData, 'isRawData');
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__["Validate"].isNotNullOrUndefined(isCachedDataEmpty, 'isCachedDataEmpty');
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__["Validate"].isNotNullOrUndefined(processRawData, 'processRawData');
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__["Validate"].isNotNullOrUndefined(qosMonitor, 'qosMonitor');
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__["Validate"].isNonemptyString(qosTagPrefix, 'qosTagPrefix');
        if (!response.cachedResponse && !response.serverResponse) {
            var err = new Error('ParseClientCachableResponse_EmptyResponse');
            qosMonitor.writeUnexpectedFailure(err.message);
            throw err;
        }
        // If uniquePageId is specified check to see if it's been flagged as invalid for returning from the cache
        var isPageInvalided = uniquePageId && this._isIdInvalidForCacheUsage(uniquePageId);
        // If it's a server only response or the page cache has been invalidated, don't look in
        // the cache and wait for the processed server response.
        if ((!response.cachedResponse || isPageInvalided) && response.serverResponse) {
            return response.serverResponse.then(function (spHttpClientResponse) {
                if (isPageInvalided) {
                    // The id is now valid since the cache gets updated after the server response
                    _this._clearIdFromInvalidCacheUsage(uniquePageId);
                }
                return _this._processHttpResponse(spHttpClientResponse, qosMonitor);
            });
        }
        var cachedValue;
        var cacheOnlyQos = new _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__["_QosMonitor"](qosTagPrefix + ".IndexedDB.CacheOnly.DP");
        var cacheResponse = _common_TieredCacheHelper__WEBPACK_IMPORTED_MODULE_5__["default"].processResponseRawData(response.cachedResponse, isRawData, processRawData.bind(this)).then(function (processedResponse) {
            cachedValue = JSON.stringify(processedResponse);
            cacheOnlyQos.writeSuccess();
            if (isCachedDataEmpty(processedResponse)) {
                return Promise.reject('Indexed DB cached data is empty');
            }
            else {
                return processedResponse;
            }
        });
        // If it's a cache only response, then just return the processed cached response
        if (!response.serverResponse) {
            return cacheResponse;
        }
        /* At this point we know we have both cached and server responses that need to be processed.
          We can't guarantee which of the two promises is resolved first, so we use a promise race to chain
          the server callback in the case where cached promise is processed before the server. */
        var serverResponseResolved = false;
        var serverResponse = response.serverResponse.then(function (spHttpClientResponse) {
            serverResponseResolved = true;
            if (cachedValue) {
                try {
                    _this._logCacheRefreshedQos(cachedValue, spHttpClientResponse, processRawData.bind(_this), qosTagPrefix);
                }
                catch (e) {
                    // do nothing
                }
            }
            return _this._processHttpResponse(spHttpClientResponse, qosMonitor);
        });
        /* We use GUIDs to identify whether the processed response is from the cache or the server.
          We utilize this information when processing the SmartRace, specifically in the case where
          we have cached response but no server response yet. When that happens, we execute additional
          logic to handle the server callback. */
        var cachedDataPromiseId = _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__["Guid"].parse('fdbcc3e7-1aa1-4bc5-809c-fd4b4cf3ce56');
        var serverDataPromiseId = _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__["Guid"].parse('ae67b80b-7315-447c-94bc-8d51c712bfb8');
        var promiseRaceMap = [
            {
                raceablePromise: cacheResponse,
                raceId: cachedDataPromiseId
            },
            {
                raceablePromise: serverResponse,
                raceId: serverDataPromiseId
            }
        ];
        return _ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_4__["SmartRace"].race(promiseRaceMap).then(function (raceResponse) {
            /* If cached response returns first, and there is callback for server response,
              server call should also happen */
            if (raceResponse.raceId === cachedDataPromiseId && !serverResponseResolved) {
                serverResponse
                    .then(function (processedServerResponse) {
                    return processedServerResponse;
                })
                    .catch(function (error) {
                    throw error;
                });
            }
            if (serverResponseResolved) {
                return serverResponse;
            }
            else {
                return cacheResponse;
            }
        });
    };
    /**
     * Does some basic validation on the input parameters and returns an IUniquePageID object
     * if validation was successful otherwise undefined.
     * @param siteId Guid that is the SPO page context site ID
     * @param webId Guid that is the SPO page context web ID
     * @param uniqueId Guid that is the SPO page store page field data unique ID
     */
    KMTieredCacheHelper.getUniquePageId = function (siteId, webId, uniqueId) {
        var _a, _b, _c;
        if (((_a = siteId) === null || _a === void 0 ? void 0 : _a.toString().length) && ((_b = webId) === null || _b === void 0 ? void 0 : _b.toString().length) && ((_c = uniqueId) === null || _c === void 0 ? void 0 : _c.toString().length)) {
            return {
                siteId: siteId.toString(),
                webId: webId.toString(),
                uniqueId: uniqueId.toString()
            };
        }
        else {
            return undefined;
        }
    };
    /**
     * Adds the specified page to the list of invalidated pages for Indexed DB usage.
     */
    KMTieredCacheHelper.setInvalidForCacheUsage = function (uniquePageId) {
        var _a;
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__["Validate"].isNotNullOrUndefined(uniquePageId.uniqueId, 'uniquePageId.uniqueId');
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__["Validate"].isNotNullOrUndefined(uniquePageId.siteId, 'uniquePageId.siteId');
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__["Validate"].isNotNullOrUndefined(uniquePageId.webId, 'uniquePageId.webId');
        var invalidIds = (_a = this._getInvalidIdsFromStorage(), (_a !== null && _a !== void 0 ? _a : []));
        if (this._getIndexOf(uniquePageId, invalidIds) === this._indexNotPresent) {
            invalidIds.push(uniquePageId);
            sessionStorage.setItem(CORTEX_INVALID_IDB_PAGES, JSON.stringify(invalidIds));
        }
    };
    /**
     * Removes the specified page from the list of flagged invalid pages for Indexed DB usage.
     */
    KMTieredCacheHelper._clearIdFromInvalidCacheUsage = function (uniquePageId) {
        var invalidIds = this._getInvalidIdsFromStorage();
        if (invalidIds) {
            var index = this._getIndexOf(uniquePageId, invalidIds);
            if (index !== this._indexNotPresent) {
                if (invalidIds.length === 1) {
                    sessionStorage.removeItem(CORTEX_INVALID_IDB_PAGES);
                }
                else {
                    invalidIds.splice(index, 1);
                    sessionStorage.setItem(CORTEX_INVALID_IDB_PAGES, JSON.stringify(invalidIds));
                }
            }
        }
    };
    /**
     * Returns true if the specified page has been flagged as invalid for cache usage.
     */
    KMTieredCacheHelper._isIdInvalidForCacheUsage = function (uniquePageId) {
        var invalidIds = this._getInvalidIdsFromStorage();
        if (invalidIds) {
            return this._getIndexOf(uniquePageId, invalidIds) !== this._indexNotPresent;
        }
        else {
            return false;
        }
    };
    /**
     * Returns the position of the first occurrence of a specified unique page ID in a list of IDs.
     * @param uniquePageId The IUniquePageId to search for
     * @param listOfIds The list of IUniquePageIds to search in
     */
    KMTieredCacheHelper._getIndexOf = function (uniquePageId, listOfIds) {
        return Object(_microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_3__["findIndex"])(listOfIds, function (element) {
            return element.uniqueId === uniquePageId.uniqueId &&
                element.siteId === uniquePageId.siteId &&
                element.webId === uniquePageId.webId;
        });
    };
    /**
     * Returns the list of flagged page IDs from session storage which have been flagged as invalid from cache.
     */
    KMTieredCacheHelper._getInvalidIdsFromStorage = function () {
        var _a, _b;
        if ((_a = sessionStorage) === null || _a === void 0 ? void 0 : _a.getItem) {
            var rawInvalidPages = (_b = sessionStorage.getItem(CORTEX_INVALID_IDB_PAGES), (_b !== null && _b !== void 0 ? _b : ''));
            if (!!rawInvalidPages) {
                return JSON.parse(rawInvalidPages);
            }
        }
        else {
            return undefined;
        }
    };
    KMTieredCacheHelper._logCacheRefreshedQos = function (cachedResponse, httpClientResponse, processRawData, // tslint:disable-line:no-any
    qosTagPrefix) {
        var _this = this;
        if (!httpClientResponse.clone || httpClientResponse.status !== 200) {
            return;
        }
        var response = httpClientResponse.clone();
        response
            .json()
            .then(function (rawData) {
            // Compare updated response with cached value and send telemetry on whether the entities have changed.
            var cacheUpdateTag;
            var newResponse = processRawData(rawData);
            if (_this._compareResponseData(cachedResponse, JSON.stringify(newResponse))) {
                cacheUpdateTag = 'RefreshedNoChanges.DP';
            }
            else {
                cacheUpdateTag = 'Refreshed.DP';
            }
            var cacheUpdatedQos = new _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__["_QosMonitor"](qosTagPrefix + ".IndexedDB." + cacheUpdateTag);
            cacheUpdatedQos.writeSuccess();
        })
            .catch(function (error) {
            return Promise.reject(error);
        });
    };
    KMTieredCacheHelper._compareResponseData = function (cachedResponse, newResponse) {
        var _a;
        return !!((_a = cachedResponse) === null || _a === void 0 ? void 0 : _a.length) && cachedResponse === newResponse;
    };
    KMTieredCacheHelper._getExtraData = function (response) {
        return {
            mscv: response.headers.get('ms-cv'),
            requestId: response.headers.get('request-id'),
            status: response.status
        };
    };
    KMTieredCacheHelper._processAPIError = function (response, qosMonitor) {
        var extraData = this._getExtraData(response);
        var errorMessage = extraData.mscv === null
            ? "Substrate Cortex API server failure: $tag::" + response.status + "::" + response.statusText
            : "Microservice API server failure: $tag::" + response.status + "::" + response.statusText;
        var error = new Error(errorMessage);
        if (response.status === 403) {
            qosMonitor.writeExpectedFailure(ERROR_API_FAILURE, error, extraData);
            // We don't want to throw error for 403 this is an expected error.
            return undefined;
        }
        else {
            qosMonitor.writeUnexpectedFailure(ERROR_API_FAILURE, error, extraData);
            return error;
        }
    };
    /**
     * Handles the response from API call of KM related features.
     * @param response response from the KM feature API
     * @param qosMonitor qos monitor
     */
    KMTieredCacheHelper._processHttpResponse = function (response, qosMonitor) {
        Object(_ms_sp_component_utilities_lib_topics_TopicFlightingUtilities__WEBPACK_IMPORTED_MODULE_0__["setCortexDisabledFlag"])(response);
        if (response.ok) {
            qosMonitor.writeSuccess(this._getExtraData(response));
            return response.json();
        }
        else {
            var err = this._processAPIError(response, qosMonitor);
            if (err) {
                return Promise.reject(err);
            }
            else {
                // Resolving undefined if 403 to be treated as expected error
                return Promise.resolve(undefined);
            }
        }
    };
    KMTieredCacheHelper.onlyIndexedDB = _common_TieredCacheHelper__WEBPACK_IMPORTED_MODULE_5__["default"].onlyIndexedDB;
    KMTieredCacheHelper._indexNotPresent = -1;
    return KMTieredCacheHelper;
}());
/* harmony default export */ __webpack_exports__["default"] = (KMTieredCacheHelper);


/***/ }),

/***/ "0hgF":
/*!**********************************************************!*\
  !*** ./lib/dataProviders/SubstrateTopicsDataProvider.js ***!
  \**********************************************************/
/*! exports provided: SubstrateTopicsDataProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubstrateTopicsDataProvider", function() { return SubstrateTopicsDataProvider; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _BaseSubstrateTopicDataProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BaseSubstrateTopicDataProvider */ "53ge");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__);
/**
 * @copyright Microsoft Corporation. All rights reserved.
 */



/**
 * @internal
 */
var SubstrateTopicsDataProvider = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(SubstrateTopicsDataProvider, _super);
    function SubstrateTopicsDataProvider(serviceScope, requestType) {
        var _this = _super.call(this, serviceScope, false /* willSetCortexDisableFlag */) || this;
        _this._requestType = requestType;
        return _this;
    }
    /**
     * @internal
     */
    SubstrateTopicsDataProvider.prototype.getTopics = function (count, skipToken, name, orderBy, orderByDesc) {
        var _this = this;
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__["Validate"].isNotNullOrUndefined(count, 'count');
        var params = "&$top=" + count;
        if (name) {
            params += "&$filter=contains(tolower(Name),tolower('" + name + "'))";
        }
        if (skipToken) {
            params += "&$skip=" + skipToken;
        }
        if (orderBy) {
            params += "&$orderby=" + orderBy + (orderByDesc ? '+desc' : '');
        }
        params += '&$count=true';
        return this.getRequest(params).then(function (response) {
            var _a;
            response.correlationId = (_a = _this.correlationId, (_a !== null && _a !== void 0 ? _a : ''));
            return response;
        });
    };
    Object.defineProperty(SubstrateTopicsDataProvider.prototype, "apiName", {
        /**
         * Set API name to call Confirmed branch
         */
        get: function () {
            return "Topics/" + this._requestType;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SubstrateTopicsDataProvider.prototype, "qosTag", {
        get: function () {
            return this._requestType;
        },
        enumerable: true,
        configurable: true
    });
    SubstrateTopicsDataProvider.prototype.getCustomRequestOptions = function (options) {
        options.headers['X-ODataQuery'] = 'true';
    };
    return SubstrateTopicsDataProvider;
}(_BaseSubstrateTopicDataProvider__WEBPACK_IMPORTED_MODULE_1__["default"]));



/***/ }),

/***/ "17wl":
/*!************************!*\
  !*** external "tslib" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__17wl__;

/***/ }),

/***/ "1jTL":
/*!**********************************!*\
  !*** ./lib/common/ChooseIcon.js ***!
  \**********************************/
/*! exports provided: chooseIcon, isMediaWikiDemo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "chooseIcon", function() { return chooseIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isMediaWikiDemo", function() { return isMediaWikiDemo; });
/* harmony import */ var _ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ms/sp-component-utilities */ "hiL/");
/* harmony import */ var _ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _KillSwitches__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./KillSwitches */ "+ORw");


/**
 * Method that gets an icon for resources displayed in topic experiences.
 *
 * @public
 */
function chooseIcon(url) {
    if (isMediaWikiDemo(url)) {
        return 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/MediaWiki_logo_1.png/120px-MediaWiki_logo_1.png';
    }
    return _ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_0__["Icons"].getIconUrl(url.split('.').pop() || '');
}
/**
 * This is a jiant Build demo hack of hackery.
 *
 * It's as ugly as the request that led to it.
 * @public
 */
function isMediaWikiDemo(url) {
    var MEDIA_WIKI_DEMO_HOST = 'contososearchwiki.westus.cloudapp.azure.com';
    return !_KillSwitches__WEBPACK_IMPORTED_MODULE_1__["default"].mediaWikiDemo.isActivated() && new URL(url).host === MEDIA_WIKI_DEMO_HOST;
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

/***/ "3rh1":
/*!********************************!*\
  !*** ./lib/utilities/index.js ***!
  \********************************/
/*! exports provided: topicCurated, topicOrigin, _cleanGuid, isSiteKnowledgeCenter, getKnowledgeHubUrl, getKnowledgeHubUrlWithOverrides, _executePostAnnotationActions, _annotateInnerHtmls, _insertAnnotationPreviewLink, _HASHTAGGED_TOPIC_ID_ATTRIBUTE, _KM_PREVIEW_LINK_HTML_TAG, _KM_TOPIC_ID_ATTRIBUTE, canCreateNewTopicOnCurrentSite, canCreateNewTopic, isEnvMSIT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _topicCurated__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./topicCurated */ "Gw7F");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "topicCurated", function() { return _topicCurated__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _topicOrigin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./topicOrigin */ "XJVB");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "topicOrigin", function() { return _topicOrigin__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _cleanGuid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cleanGuid */ "aj7r");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_cleanGuid", function() { return _cleanGuid__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _isSiteKnowledgeCenter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./isSiteKnowledgeCenter */ "idTN");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isSiteKnowledgeCenter", function() { return _isSiteKnowledgeCenter__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _getKnowledgeHubUrl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./getKnowledgeHubUrl */ "7ORd");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getKnowledgeHubUrl", function() { return _getKnowledgeHubUrl__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _getKnowledgeHubUrlWithOverrides__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./getKnowledgeHubUrlWithOverrides */ "OUh5");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getKnowledgeHubUrlWithOverrides", function() { return _getKnowledgeHubUrlWithOverrides__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _topicAnnotation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./topicAnnotation */ "rEBF");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_executePostAnnotationActions", function() { return _topicAnnotation__WEBPACK_IMPORTED_MODULE_6__["_executePostAnnotationActions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_annotateInnerHtmls", function() { return _topicAnnotation__WEBPACK_IMPORTED_MODULE_6__["_annotateInnerHtmls"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_insertAnnotationPreviewLink", function() { return _topicAnnotation__WEBPACK_IMPORTED_MODULE_6__["_insertAnnotationPreviewLink"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_HASHTAGGED_TOPIC_ID_ATTRIBUTE", function() { return _topicAnnotation__WEBPACK_IMPORTED_MODULE_6__["_HASHTAGGED_TOPIC_ID_ATTRIBUTE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_KM_PREVIEW_LINK_HTML_TAG", function() { return _topicAnnotation__WEBPACK_IMPORTED_MODULE_6__["_KM_PREVIEW_LINK_HTML_TAG"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_KM_TOPIC_ID_ATTRIBUTE", function() { return _topicAnnotation__WEBPACK_IMPORTED_MODULE_6__["_KM_TOPIC_ID_ATTRIBUTE"]; });

/* harmony import */ var _TopicPermission__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./TopicPermission */ "k2H1");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "canCreateNewTopicOnCurrentSite", function() { return _TopicPermission__WEBPACK_IMPORTED_MODULE_7__["canCreateNewTopicOnCurrentSite"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "canCreateNewTopic", function() { return _TopicPermission__WEBPACK_IMPORTED_MODULE_7__["canCreateNewTopic"]; });

/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./env */ "/LHP");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isEnvMSIT", function() { return _env__WEBPACK_IMPORTED_MODULE_8__["isEnvMSIT"]; });

/**
 * @copyright Microsoft Corporation. All rights reserved.
 */











/***/ }),

/***/ "53ge":
/*!*************************************************************!*\
  !*** ./lib/dataProviders/BaseSubstrateTopicDataProvider.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/sp-diagnostics */ "ut3N");
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _microsoft_sp_page_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @microsoft/sp-page-context */ "X+PM");
/* harmony import */ var _microsoft_sp_page_context__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_page_context__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _microsoft_sp_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @microsoft/sp-http */ "vlQI");
/* harmony import */ var _microsoft_sp_http__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_http__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ms_sp_component_utilities_lib_topics_TopicFlightingUtilities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ms/sp-component-utilities/lib/topics/TopicFlightingUtilities */ "Tpx+");
/* harmony import */ var _common_KillSwitches__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/KillSwitches */ "+ORw");
/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Constants */ "oUEy");
/* harmony import */ var _TokenDataProvider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./TokenDataProvider */ "dGYT");
/* harmony import */ var _RestApiError__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./RestApiError */ "NDxI");
/**
 * @Copyright (c) Microsoft Corporation.  All rights reserved.
 *
 * Base class for all Substrate Cortex data providers.
 */










var SPDF_ORIGIN = 'microsoft.sharepoint-df.com';
var SUBSTRATE_AUTH_TOKEN_DOMAIN = 'https://outlook.office365.com/dwengine';
var SUBSTRATE_REQUEST_DOMAIN = 'https://substrate.office.com';
var SUBSTRATE_SPDF_REQUEST_DOMAIN = 'https://substrate-sdf.office.com';
var SUBSTRATE_API_PATH = 'DWEngineV2/api/v1.0/KnowledgeManagement/';
// Error codes
var ERROR_DESERIALIZATION = 'DeserializationError';
var ERROR_API_FAILURE = 'APIFailure';
var ERROR_EXCEPTION = 'Exception';
var ERROR_OFFLINE = 'Offline';
var ERROR_TOKEN_FETCH = 'TokenFetchError';
/**
 * @internal
 */
var BaseSubstrateTopicDataProvider = /** @class */ (function () {
    function BaseSubstrateTopicDataProvider(serviceScope, willSetCortexDisabledFlag) {
        var _this = this;
        if (willSetCortexDisabledFlag === void 0) { willSetCortexDisabledFlag = true; }
        this._serviceScope = serviceScope;
        this._willSetCortexDisabledFlag = willSetCortexDisabledFlag;
        this._extraData = {};
        serviceScope.whenFinished(function () {
            _this._pageContext = serviceScope.consume(_microsoft_sp_page_context__WEBPACK_IMPORTED_MODULE_2__["PageContext"].serviceKey);
            if (_this._useSTIToken) {
                _this._tokenDataProvider = new _TokenDataProvider__WEBPACK_IMPORTED_MODULE_7__["default"](_this._serviceScope, _this._pageContext);
            }
        });
        this._isIndexedDBEnabled = Object(_ms_sp_component_utilities_lib_topics_TopicFlightingUtilities__WEBPACK_IMPORTED_MODULE_4__["isIndexedDBEnabledForSubstrateAPIs"])();
    }
    Object.defineProperty(BaseSubstrateTopicDataProvider.prototype, "_substrateEndpoint", {
        get: function () {
            return location.origin.toLowerCase().indexOf(SPDF_ORIGIN) !== -1
                ? SUBSTRATE_SPDF_REQUEST_DOMAIN + "/" + this.apiEndpoint + "/" + this.apiName + this.apiParams
                : SUBSTRATE_REQUEST_DOMAIN + "/" + SUBSTRATE_API_PATH + "/" + this.apiName + this.apiParams;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseSubstrateTopicDataProvider.prototype, "pageContext", {
        get: function () {
            return this._pageContext;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseSubstrateTopicDataProvider.prototype, "apiEndpoint", {
        /**
         * Returns the API endpoint
         */
        get: function () {
            return SUBSTRATE_API_PATH;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseSubstrateTopicDataProvider.prototype, "isPost", {
        /**
         * Return true if this is a POST request.
         */
        get: function () {
            return false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseSubstrateTopicDataProvider.prototype, "apiName", {
        /**
         * Substrate Cortex API name. Defaults to the 'Topics' API.
         */
        get: function () {
            return 'Topics';
        },
        enumerable: true,
        configurable: true
    });
    BaseSubstrateTopicDataProvider.prototype.getCustomRequestOptions = function (options) {
        // NOP
    };
    Object.defineProperty(BaseSubstrateTopicDataProvider.prototype, "qosTag", {
        /**
         * Substrate Cortex API QOS Tag. Needs to be overridden in the base class.
         */
        get: function () {
            throw new Error('Needs to be overridden by the derived class');
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Create the appropriate request object for the Substrate MSAI endpoint. This code takes care of
     * AAD Token acquisition and QOS monitor logging.
     *
     * Dev design for MSAI APIS:
     *  https://microsoft.sharepoint.com/teams/Substrate_and_Query_Intelligence/
     *    Shared%20Documents/KnowledgeMining/Knowledge%20Management%20API%20Design.docx?web=1
     *
     * Todo: use a real type here.
     */
    // tslint:disable-next-line:no-any
    BaseSubstrateTopicDataProvider.prototype.getRequest = function (apiCustomParams, cacheOptions) {
        var _this = this;
        if (apiCustomParams === void 0) { apiCustomParams = ''; }
        var tagAadTokenFetch = _Constants__WEBPACK_IMPORTED_MODULE_6__["QOS_SUBSTRATE_API_PREFIX"] + ".AADTokenFetch";
        var tagAPI = _Constants__WEBPACK_IMPORTED_MODULE_6__["QOS_SUBSTRATE_API_PREFIX"] + "." + this.qosTag + ".API." + _Constants__WEBPACK_IMPORTED_MODULE_6__["QOS_DATAPROVIDER_SUFFIX"];
        var tagTotal = _Constants__WEBPACK_IMPORTED_MODULE_6__["QOS_SUBSTRATE_API_PREFIX"] + "." + this.qosTag + "." + _Constants__WEBPACK_IMPORTED_MODULE_6__["QOS_DATAPROVIDER_SUFFIX"];
        var qosMonitorAADTokenFetch = new _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_0__["_QosMonitor"](tagAadTokenFetch);
        var qosMonitorAPI;
        var qosMonitorTotal = new _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_0__["_QosMonitor"](tagTotal);
        var aadTokenFetchSucceeded;
        _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_0__["_EngagementLogger"].logEvent(tagTotal);
        var startTime = new Date().getTime();
        var apiStartTime = 0;
        // Perform post token fetch updates
        var postTokenFetchUpdates = function () {
            aadTokenFetchSucceeded = true;
            apiStartTime = new Date().getTime();
            qosMonitorAADTokenFetch.writeSuccess();
            qosMonitorAPI = new _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_0__["_QosMonitor"](tagAPI);
        };
        if (this._isIndexedDBEnabled && cacheOptions && this._useSTIToken) {
            return this._makeClientCachableRequest(apiCustomParams, postTokenFetchUpdates, cacheOptions);
        }
        else {
            return this._makeRequest(apiCustomParams, postTokenFetchUpdates)
                .then(function (response) {
                if (Object(_common_KillSwitches__WEBPACK_IMPORTED_MODULE_5__["removeCortexDisabledFlagforManagementAPIsKSActivated"])() || _this._willSetCortexDisabledFlag) {
                    Object(_ms_sp_component_utilities_lib_topics_TopicFlightingUtilities__WEBPACK_IMPORTED_MODULE_4__["setCortexDisabledFlag"])(response);
                }
                var endTime = new Date().getTime();
                if (!_common_KillSwitches__WEBPACK_IMPORTED_MODULE_5__["default"].logRequestId.isActivated() && response.headers) {
                    _this._requestId = response.headers.get('request-id');
                    if (_this._requestId) {
                        _this._extraData.requestId = _this._requestId;
                    }
                    if (!_common_KillSwitches__WEBPACK_IMPORTED_MODULE_5__["default"].revertTopicCenterPerfChanges.isActivated()) {
                        var status_1 = response.status;
                        if (status_1) {
                            _this._extraData.status = status_1;
                        }
                        _this._extraData.duration = endTime - startTime + " ms";
                        var e2eLatency = endTime - apiStartTime;
                        _this._extraData.e2eLatency = apiStartTime ? e2eLatency : '';
                        var tokenFetchRequestTime = response._tokenFetchRequestTime; // tslint:disable-line:no-any
                        if (!_common_KillSwitches__WEBPACK_IMPORTED_MODULE_5__["default"].removeLogTokenFetchTime.isActivated() && tokenFetchRequestTime) {
                            _this._extraData.tokenFetchDuration = tokenFetchRequestTime;
                            if (apiStartTime) {
                                _this._extraData.apiLatency = e2eLatency - tokenFetchRequestTime;
                            }
                        }
                        _this._extraData.clientRequestId = _this._requestId;
                    }
                }
                // Request succeeded
                if (response.ok) {
                    var json = void 0; // tslint:disable-line:no-any
                    try {
                        json = response.json();
                        qosMonitorAPI.writeSuccess(_this._extraData);
                        qosMonitorTotal.writeSuccess(_this._extraData);
                        return json;
                    }
                    catch (e) {
                        var error = new _RestApiError__WEBPACK_IMPORTED_MODULE_8__["default"]("Substrate Cortex API deserialization failure: $tag::[RequestId: " + _this._requestId + ", Name:" + e.name + ", message:" + e.message + ", stack:" + e.stack, response.status, response.statusText);
                        qosMonitorTotal.writeUnexpectedFailure(ERROR_DESERIALIZATION, error, _this._extraData);
                        qosMonitorAPI.writeUnexpectedFailure(ERROR_DESERIALIZATION, error, _this._extraData);
                        return Promise.reject(error);
                    }
                    // Request failed
                }
                else {
                    var error = new _RestApiError__WEBPACK_IMPORTED_MODULE_8__["default"]("Substrate Cortex API server failure: $tag::" + response.status + "::" + response.statusText, response.status, response.statusText);
                    if (!Object(_common_KillSwitches__WEBPACK_IMPORTED_MODULE_5__["fixQOSMonitorTotal403KSActivated"])()) {
                        if (response.status === 403) {
                            qosMonitorAPI.writeExpectedFailure(ERROR_API_FAILURE, error, _this._extraData);
                            qosMonitorTotal.writeExpectedFailure(ERROR_API_FAILURE, error, _this._extraData);
                        }
                        else {
                            qosMonitorAPI.writeUnexpectedFailure(ERROR_API_FAILURE, error, _this._extraData);
                            qosMonitorTotal.writeUnexpectedFailure(ERROR_API_FAILURE, error, _this._extraData);
                        }
                    }
                    else {
                        if (response.status === 403) {
                            qosMonitorAPI.writeExpectedFailure(ERROR_API_FAILURE, error, _this._extraData);
                        }
                        else {
                            qosMonitorAPI.writeUnexpectedFailure(ERROR_API_FAILURE, error, _this._extraData);
                        }
                        qosMonitorTotal.writeUnexpectedFailure(ERROR_API_FAILURE, error, _this._extraData);
                    }
                    return Promise.reject(error);
                }
            })
                .catch(function (e) {
                var error;
                if (!aadTokenFetchSucceeded) {
                    error = new Error("Substrate Cortex token failure: $tag::[RequestId: " + _this._requestId + ", Name:" + e.name + ", message:" + e.message + ", stack:" + e.stack);
                    if (!window.navigator.onLine) {
                        qosMonitorAADTokenFetch.writeExpectedFailure(ERROR_OFFLINE, error);
                    }
                    else {
                        qosMonitorAADTokenFetch.writeUnexpectedFailure(ERROR_EXCEPTION, error);
                    }
                    if (qosMonitorAPI) {
                        qosMonitorAPI.writeExpectedFailure(ERROR_TOKEN_FETCH, error);
                    }
                    qosMonitorTotal.writeExpectedFailure(ERROR_TOKEN_FETCH, error);
                }
                else {
                    if (!window.navigator.onLine) {
                        error = new Error("Substrate Cortex API failure Offline: $tag::[RequestId: " + _this._requestId + ", Name:" + e.name + ", message:" + e.message + ", stack:" + e.stack);
                        if (qosMonitorAPI) {
                            qosMonitorAPI.writeExpectedFailure(ERROR_OFFLINE, error);
                        }
                        qosMonitorTotal.writeExpectedFailure(ERROR_OFFLINE, error);
                    }
                    else {
                        error = e;
                        if (Object(_common_KillSwitches__WEBPACK_IMPORTED_MODULE_5__["checkErrorCodeKSActivated"])() || error.status === undefined) {
                            error = new Error("Substrate Cortex API failure: $tag::[RequestId: " + _this._requestId + ", Name:" + e.name + ", message:" + e.name + ", stack:" + e.stack);
                        }
                        if (qosMonitorAPI) {
                            qosMonitorAPI.writeUnexpectedFailure(ERROR_EXCEPTION, error);
                        }
                        if (Object(_common_KillSwitches__WEBPACK_IMPORTED_MODULE_5__["checkErrorCodeKSActivated"])() || qosMonitorTotal) {
                            qosMonitorTotal.writeUnexpectedFailure(ERROR_EXCEPTION, error);
                        }
                    }
                }
                return Promise.reject(error);
            });
        }
    };
    Object.defineProperty(BaseSubstrateTopicDataProvider.prototype, "correlationId", {
        get: function () {
            return this._requestId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseSubstrateTopicDataProvider.prototype, "apiParams", {
        get: function () {
            return "?provider=Yggdrasil";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseSubstrateTopicDataProvider.prototype, "_useSTIToken", {
        get: function () {
            return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["_SPFlight"].isEnabled(1865 /* UseSTITokenForMSAIAPIs */);
        },
        enumerable: true,
        configurable: true
    });
    BaseSubstrateTopicDataProvider.prototype._getAPI = function (client, apiCustomParams, authToken) {
        return this.isPost
            ? client.post(this._substrateEndpoint + apiCustomParams, _microsoft_sp_http__WEBPACK_IMPORTED_MODULE_3__["AadHttpClient"].configurations.v1, this._getRequestOptions(authToken))
            : client.get(this._substrateEndpoint + apiCustomParams, _microsoft_sp_http__WEBPACK_IMPORTED_MODULE_3__["AadHttpClient"].configurations.v1, this._getRequestOptions(authToken));
    };
    BaseSubstrateTopicDataProvider.prototype._getRequestOptions = function (authToken) {
        var startTime = 0;
        startTime = new Date().getTime();
        var options = {};
        options.headers = {};
        options.headers['Content-Type'] = 'application/json'; // tslint:disable-line:no-string-literal
        options.headers['X-AnchorMailbox'] = _common_KillSwitches__WEBPACK_IMPORTED_MODULE_5__["default"].revertTopicCenterPerfChanges.isActivated()
            ? this._pageContext.user.email
            : "SMTP:" + this._pageContext.user.email;
        options.headers['X-RoutingParameter-SessionKey'] = _common_KillSwitches__WEBPACK_IMPORTED_MODULE_5__["default"].revertTopicCenterPerfChanges.isActivated()
            ? this._pageContext.user.email
            : "SMTP:" + this._pageContext.user.email;
        if (!_common_KillSwitches__WEBPACK_IMPORTED_MODULE_5__["default"].revertTopicCenterPerfChanges.isActivated()) {
            this._requestId = _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["Guid"].newGuid().toString();
            options.headers['Client-Request-Id'] = this._requestId;
            options.headers['request-id'] = this._requestId;
        }
        // If the request is originating from SPDF test knowledgehub, add the test feedback header.
        if (!Object(_common_KillSwitches__WEBPACK_IMPORTED_MODULE_5__["addSPDFTestHeaderKSActivated"])() && this._isOriginatingFromSPDFKnowledgeHub()) {
            options.headers[_Constants__WEBPACK_IMPORTED_MODULE_6__["SPDF_TEST_HEADER"]] = 'true';
        }
        if (authToken) {
            options.headers['Authorization'] = "Bearer " + authToken; // tslint:disable-line:no-string-literal
        }
        this.getCustomRequestOptions(options);
        this._extraData.getRequestOptionsTime = new Date().getTime() - startTime + " ms";
        return options;
    };
    BaseSubstrateTopicDataProvider.prototype._makeRequest = function (apiCustomParams, postTokenFetchUpdates) {
        return this._useSTIToken
            ? this._makeRequestUsingSTITokens(apiCustomParams, postTokenFetchUpdates)
            : this._makeRequestDeprecated(apiCustomParams, postTokenFetchUpdates);
    };
    BaseSubstrateTopicDataProvider.prototype._makeRequestUsingSTITokens = function (apiCustomParams, postTokenFetchUpdates) {
        var _this = this;
        return this._tokenDataProvider.getOAuthToken(SUBSTRATE_AUTH_TOKEN_DOMAIN).then(function (token) {
            postTokenFetchUpdates();
            var httpClient = _this._serviceScope.consume(_microsoft_sp_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"].serviceKey);
            return _this._getAPI(httpClient, apiCustomParams, token);
        });
    };
    BaseSubstrateTopicDataProvider.prototype._makeClientCachableRequest = function (apiCustomParams, postTokenFetchUpdates, cacheOptions
    // tslint:disable-next-line: no-any
    ) {
        var _this = this;
        return this._tokenDataProvider.getOAuthToken(SUBSTRATE_AUTH_TOKEN_DOMAIN).then(function (token) {
            postTokenFetchUpdates();
            var httpClient = _this._serviceScope.consume(_microsoft_sp_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"].serviceKey);
            return _this._executeRequestWithCacheOptions(httpClient, apiCustomParams, cacheOptions, token);
        }); // tslint:disable-line:no-any
    };
    BaseSubstrateTopicDataProvider.prototype._executeRequestWithCacheOptions = function (client, apiCustomParams, cacheOptions, authToken
    // tslint:disable-next-line: no-any
    ) {
        // HttpClient post does not support cache configuration directly so we need to use fetch with POST options instead.
        if (this.isPost) {
            var httpOptions = this._getRequestOptions(authToken);
            httpOptions.method = 'POST';
            return client.fetch(this._substrateEndpoint + apiCustomParams, _microsoft_sp_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"].configurations.v1, httpOptions, cacheOptions);
        }
        else {
            return client.get(this._substrateEndpoint + apiCustomParams, _microsoft_sp_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"].configurations.v1, this._getRequestOptions(authToken), cacheOptions);
        }
    };
    BaseSubstrateTopicDataProvider.prototype._makeRequestDeprecated = function (apiCustomParams, postTokenFetchUpdates) {
        var _this = this;
        var aadHttpClientFactory = this._serviceScope.consume(_microsoft_sp_http__WEBPACK_IMPORTED_MODULE_3__["AadHttpClientFactory"].serviceKey);
        return aadHttpClientFactory._getStandardClient(SUBSTRATE_AUTH_TOKEN_DOMAIN).then(function (client) {
            postTokenFetchUpdates();
            return _this._getAPI(client, apiCustomParams, undefined);
        });
    };
    /**
     * Return true if the request originated from the SPDF Test knowledge center
     */
    BaseSubstrateTopicDataProvider.prototype._isOriginatingFromSPDFKnowledgeHub = function () {
        return window.location.href.toLowerCase().indexOf(_Constants__WEBPACK_IMPORTED_MODULE_6__["SPDF_KNOWLEDGE_HUB_URL"]) === 0;
    };
    return BaseSubstrateTopicDataProvider;
}());
/* harmony default export */ __webpack_exports__["default"] = (BaseSubstrateTopicDataProvider);


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

/***/ "6DK4":
/*!****************************************!*\
  !*** ./lib/dataProviders/Utilities.js ***!
  \****************************************/
/*! exports provided: useSubstrateMSAIAPI, useSubstrateApiWhenGettingTopicEntity, useSubstrateMSAIAPIASPrimary, getStatusMessage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useSubstrateMSAIAPI", function() { return useSubstrateMSAIAPI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useSubstrateApiWhenGettingTopicEntity", function() { return useSubstrateApiWhenGettingTopicEntity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useSubstrateMSAIAPIASPrimary", function() { return useSubstrateMSAIAPIASPrimary; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStatusMessage", function() { return getStatusMessage; });
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__);
/**
 * @Copyright (c) Microsoft Corporation.  All rights reserved.
 */

function _getUseMSAIAPIParam() {
    var queryParameters = new URL(window.location.href).searchParams;
    return queryParameters.get('useMSAIAPI');
}
/**
 * Return true if we need to use the Substrte MSAI Cortex APIs
 *
 * @internal
 */
function useSubstrateMSAIAPI() {
    // tslint:disable-line:export-name
    // Flight to help control MSAI API integration
    // https://spoflights.azurewebsites.net/Flight/Edit/useSubstrateMSAIAPI
    return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPFlight"].isEnabled(1951) || _getUseMSAIAPIParam() === 'true';
}
/**
 * Return true if we need to use the Substrte MSAI Cortex API to get topic entity
 *
 * @internal
 */
function useSubstrateApiWhenGettingTopicEntity() {
    return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPFlight"].isEnabled(1919 /* UseSubstrateGetTopicByIdAPI */) || useSubstrateMSAIAPI();
}
/**
 * Return true if we need to use the Substrte MSAI Cortex APIs as the Primary APIs
 *
 * @internal
 */
function useSubstrateMSAIAPIASPrimary() {
    // tslint:disable-line:export-name
    return _getUseMSAIAPIParam() !== 'false';
}
/**
 * Get an error message from the Response object
 * @internal
 */
function getStatusMessage(response) {
    var correlationId = response.headers.get('sprequestguid') || '';
    var spVersion = response.headers.get('microsoftsharepointteamservices') || '';
    return "[HTTP]:" + response.status + " - " + response.statusText + " [CorrelationId]:" + correlationId + " [Version]:" + spVersion;
}


/***/ }),

/***/ "6ayc":
/*!***************************************************!*\
  !*** ./lib/components/DefinitionSourceElement.js ***!
  \***************************************************/
/*! exports provided: SuggestedDefinitionSourceElement, WikiSourceElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuggestedDefinitionSourceElement", function() { return SuggestedDefinitionSourceElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WikiSourceElement", function() { return WikiSourceElement; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/office-ui-fabric-react-bundle */ "KL1q");
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ms/sp-component-utilities */ "hiL/");
/* harmony import */ var _ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _DefinitionSourceElement_resx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DefinitionSourceElement.resx */ "Kwxa");
var _DefinitionSourceElement_resx__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./DefinitionSourceElement.resx */ "Kwxa", 1);
/* harmony import */ var _DefinitionSourceElement_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DefinitionSourceElement.module.scss */ "zAl7");
/* harmony import */ var _KillSwitches__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./KillSwitches */ "NyOt");
/**
 * @copyright Microsoft Corporation. All rights reserved.
 */






/**
 * @internal
 */
function SuggestedDefinitionSourceElement(props) {
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: props.className }, props.source.url ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_2__["StringFormaterWithNodes"], { template: _DefinitionSourceElement_resx__WEBPACK_IMPORTED_MODULE_3__["FromSource"], values: [
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_1__["Link"], { href: props.source.url, target: '_blank', "data-interception": 'off', title: props.source.title }, props.source.title)
        ], className: _DefinitionSourceElement_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].sourceText })) : (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", null, props.source.title))));
}
/**
 * @internal
 */
function WikiSourceElement(props) {
    var sourceString = _DefinitionSourceElement_resx__WEBPACK_IMPORTED_MODULE_3__["FromSource"];
    var sourceStringSplit = sourceString.split('{0}');
    var hasLeadingContent = Boolean(sourceStringSplit[0]);
    var hasTailingContent = Boolean(sourceStringSplit[sourceStringSplit.length - 1]);
    var stacked = props.stacked;
    return Object(_KillSwitches__WEBPACK_IMPORTED_MODULE_5__["refactorWikiSourceElementKSActivated"])() ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: Object(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_1__["css"])(_DefinitionSourceElement_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].container, props.className) },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: Object(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_1__["css"])(hasLeadingContent && _DefinitionSourceElement_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].miniGapRight) }, sourceStringSplit[0]),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_1__["Link"], { href: props.source.url, target: '_blank', title: !Object(_KillSwitches__WEBPACK_IMPORTED_MODULE_5__["fixWikiSourceTooltipKSActivated"])() ? props.source.url : props.source.title }, _DefinitionSourceElement_resx__WEBPACK_IMPORTED_MODULE_3__["Wiki"]),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: Object(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_1__["css"])(hasTailingContent && _DefinitionSourceElement_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].miniGapLeft) }, sourceStringSplit.slice(1)),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_1__["Link"], { href: 'https://creativecommons.org/licenses/by-sa/3.0/', target: '_blank', title: !Object(_KillSwitches__WEBPACK_IMPORTED_MODULE_5__["fixWikiSourceTooltipKSActivated"])() ? undefined : _DefinitionSourceElement_resx__WEBPACK_IMPORTED_MODULE_3__["WikiLicense"], className: !Object(_KillSwitches__WEBPACK_IMPORTED_MODULE_5__["fixWikiLicenseStyleKSActivated"])() ? Object(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_1__["css"])(_DefinitionSourceElement_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].gap, _DefinitionSourceElement_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].licenseLink) : _DefinitionSourceElement_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].gap }, _DefinitionSourceElement_resx__WEBPACK_IMPORTED_MODULE_3__["WikiLicense"]))) : (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_2__["StringFormaterWithNodes"], { template: _DefinitionSourceElement_resx__WEBPACK_IMPORTED_MODULE_3__["FromSource"], className: Object(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_1__["css"])(_DefinitionSourceElement_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].container, props.className, stacked && _DefinitionSourceElement_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].stacked), values: [
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_1__["Link"], { href: props.source.url, target: '_blank', title: props.source.url, className: _DefinitionSourceElement_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].miniGapLeft }, _DefinitionSourceElement_resx__WEBPACK_IMPORTED_MODULE_3__["Wiki"]),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_1__["Link"], { href: 'https://creativecommons.org/licenses/by-sa/3.0/', target: '_blank', className: Object(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_1__["css"])(stacked ? _DefinitionSourceElement_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].licenseLinkStacked : _DefinitionSourceElement_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].gap, _DefinitionSourceElement_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].licenseLink) }, _DefinitionSourceElement_resx__WEBPACK_IMPORTED_MODULE_3__["WikiLicense"])
        ] }));
}


/***/ }),

/***/ "7ORd":
/*!*********************************************!*\
  !*** ./lib/utilities/getKnowledgeHubUrl.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getKnowledgeHubUrl; });
/**
 * Retrieve the Knowledge Hub URL from the page context.
 *
 * This function is intended to be used in scenarios where the minimal bundle size is required, such as bundled in the
 * assembly.
 *
 * For defer-loaded scenarios, where support for test sites is preferred, use getKnowledgeHubWithOverrides.
 *
 * @internal
 */
function getKnowledgeHubUrl(pageContext) {
    var _a, _b, _c;
    return (_c = (_b = (_a = pageContext) === null || _a === void 0 ? void 0 : _a.legacyPageContext) === null || _b === void 0 ? void 0 : _b.knowledgeHubSiteDetails) === null || _c === void 0 ? void 0 : _c.Url;
}


/***/ }),

/***/ "DnL5":
/*!****************************************************************!*\
  !*** ./lib/dataProviders/AggregatedTopicEntityDataProvider.js ***!
  \****************************************************************/
/*! exports provided: AggregatedTopicEntityDataProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AggregatedTopicEntityDataProvider", function() { return AggregatedTopicEntityDataProvider; });
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Utilities */ "6DK4");
/* harmony import */ var _SubstrateGetTopicByIdDataProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SubstrateGetTopicByIdDataProvider */ "HAeJ");
/* harmony import */ var _baseKMWebPart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../baseKMWebPart */ "nAUB");
/* harmony import */ var _Translators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Translators */ "h4Yq");
/*
 * @Copyright (c) Microsoft Corporation.  All rights reserved.
 */




/**
 * @internal
 */
var AggregatedTopicEntityDataProvider = /** @class */ (function () {
    function AggregatedTopicEntityDataProvider(serviceScope, qosPrefix) {
        this._substrateDataProvider = new _SubstrateGetTopicByIdDataProvider__WEBPACK_IMPORTED_MODULE_1__["SubstrateGetTopicByIdDataProvider"](serviceScope);
        this._legacyDataProvider = new _baseKMWebPart__WEBPACK_IMPORTED_MODULE_2__["TopicEntityDataProvider"](serviceScope, qosPrefix);
    }
    AggregatedTopicEntityDataProvider.prototype.fetchTopicEntity = function (topicId, useMined, relationCount) {
        var _this = this;
        if (Object(_Utilities__WEBPACK_IMPORTED_MODULE_0__["useSubstrateApiWhenGettingTopicEntity"])()) {
            // Make a shadow call to the ODSP API. This is temporary code to help validate and improve
            // the quality. @todo (VSO# 870904 tracks removal of this code).
            setTimeout(function () { return _this._legacyDataProvider.getTopicEntity(topicId, useMined, relationCount); }, 500);
            return this._substrateDataProvider.getTopic(topicId, useMined).then(_Translators__WEBPACK_IMPORTED_MODULE_3__["translateSubstrateTopicEntity"]);
        }
        else {
            // Make a shadow call to the substrate API. This is temporary code to help validate and improve
            // the quality. @todo (VSO# 870904 tracks removal of this code).
            setTimeout(function () { return _this._substrateDataProvider.getTopic(topicId, useMined); }, 500);
            return this._legacyDataProvider.getTopicEntity(topicId, useMined, relationCount);
        }
    };
    return AggregatedTopicEntityDataProvider;
}());



/***/ }),

/***/ "EUIQ":
/*!*****************************************************************************************!*\
  !*** ../sp-dataproviders/lib/httpClients/sphome/SPHomeMicroserviceNotAvailableError.js ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * @internal
 */
var SPHomeMicroserviceNotAvailableError = /** @class */ (function () {
    function SPHomeMicroserviceNotAvailableError(message) {
        this.name = 'SPHomeMicroserviceNotAvailableError';
        this.message = 'SPHome Microservice not available in this environment';
        this.message = message || this.message;
    }
    return SPHomeMicroserviceNotAvailableError;
}());
/* harmony default export */ __webpack_exports__["default"] = (SPHomeMicroserviceNotAvailableError);


/***/ }),

/***/ "FkHG":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/css-loader@3.2.1_webpack@4.44.2/node_modules/css-loader/dist/cjs.js!/agent/_work/1/s/common/temp/node_modules/.pnpm/postcss-loader@3.0.0/node_modules/postcss-loader/src??postcss!./lib/components/DefinitionSourceElement.module.css ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../common/temp/node_modules/.pnpm/css-loader@3.2.1_webpack@4.44.2/node_modules/css-loader/dist/runtime/api.js */ "5ADk")(false);
// Module
exports.push([module.i, ".n_e_04103875{display:-ms-flexbox;display:flex}.n_e_04103875.v_e_04103875{display:block}[dir=ltr] .n_e_04103875 .w_e_04103875{margin-left:12px}[dir=rtl] .n_e_04103875 .w_e_04103875{margin-right:12px}[dir=ltr] .n_e_04103875 .x_e_04103875{margin-right:4px}[dir=ltr] .n_e_04103875 .y_e_04103875,[dir=rtl] .n_e_04103875 .x_e_04103875{margin-left:4px}[dir=rtl] .n_e_04103875 .y_e_04103875{margin-right:4px}.n_e_04103875 .z_e_04103875{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.n_e_04103875 .aa_e_04103875{display:block}.ab_e_04103875{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}", ""]);


/***/ }),

/***/ "GKvq":
/*!*********************************!*\
  !*** ./lib/TopicUtilities.resx ***!
  \*********************************/
/*! exports provided: TopicFeedbackEmailSubject, TopicFeedbackEmailBody, TopicFeedbackEmailFooterNote, TopicFeedbackEmailFooterSourceLabel, TopicFeedbackEmailFooterTopicIdLabel, TopicFeedbackEmailFooterToolkitVersionsLabel, TopicFeedbackEmailFooterBrowserAgentLabel, TopicFeedbackEmailFooterUserLanguageLabel, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"TopicFeedbackEmailSubject\":\"TopicFeedbackEmailSubject\",\"TopicFeedbackEmailBody\":\"TopicFeedbackEmailBody\",\"TopicFeedbackEmailFooterNote\":\"TopicFeedbackEmailFooterNote\",\"TopicFeedbackEmailFooterSourceLabel\":\"TopicFeedbackEmailFooterSourceLabel\",\"TopicFeedbackEmailFooterTopicIdLabel\":\"TopicFeedbackEmailFooterTopicIdLabel\",\"TopicFeedbackEmailFooterToolkitVersionsLabel\":\"TopicFeedbackEmailFooterToolkitVersionsLabel\",\"TopicFeedbackEmailFooterBrowserAgentLabel\":\"TopicFeedbackEmailFooterBrowserAgentLabel\",\"TopicFeedbackEmailFooterUserLanguageLabel\":\"TopicFeedbackEmailFooterUserLanguageLabel\"}");

/***/ }),

/***/ "GYQK":
/*!************************************************************!*\
  !*** ../sp-component-utilities/lib/common/KillSwitches.js ***!
  \************************************************************/
/*! exports provided: KillSwitches, isUseMockTopicDataKSActivated, isUseCortexTopicExperiencesCapabilityKSActivated, isLogCortexDisabledFlagGetFalseOnceKSActivated, skipLogEngagementForCortexDisabledKSActivated, removeCortexDisabledFlagforManagementAPIsKSActivated, isUseMockForCortexTABTestKSActivated */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KillSwitches", function() { return KillSwitches; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isUseMockTopicDataKSActivated", function() { return isUseMockTopicDataKSActivated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isUseCortexTopicExperiencesCapabilityKSActivated", function() { return isUseCortexTopicExperiencesCapabilityKSActivated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isLogCortexDisabledFlagGetFalseOnceKSActivated", function() { return isLogCortexDisabledFlagGetFalseOnceKSActivated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "skipLogEngagementForCortexDisabledKSActivated", function() { return skipLogEngagementForCortexDisabledKSActivated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeCortexDisabledFlagforManagementAPIsKSActivated", function() { return removeCortexDisabledFlagforManagementAPIsKSActivated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isUseMockForCortexTABTestKSActivated", function() { return isUseMockForCortexTABTestKSActivated; });
/* harmony import */ var _performance_KillSwitch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../performance/KillSwitch */ "NfQ8");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__);


var KillSwitches = /** @class */ (function () {
    function KillSwitches() {
    }
    KillSwitches.newYoutubeUrlRegexKS = new _performance_KillSwitch__WEBPACK_IMPORTED_MODULE_0__["KillSwitch"]('93326c3b-13a0-4ea5-9979-87eddec6d21a');
    KillSwitches.urlUtilityRefactor = new _performance_KillSwitch__WEBPACK_IMPORTED_MODULE_0__["KillSwitch"]('77727f04-2ebb-4f7a-b916-692003f4dec7' /* '10/01/2019', 'Refactor URL utilities' */);
    return KillSwitches;
}());

function isUseMockTopicDataKSActivated() {
    return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["_SPKillSwitch"].isActivated('b27c283f-9033-4ffd-b8f3-fa2d0df94179' /* '05/12/2020',
    'Add flag for mocking Topic Data APIs' */);
}
function isUseCortexTopicExperiencesCapabilityKSActivated() {
    return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["_SPKillSwitch"].isActivated('ca79b9bc-75c7-408c-a782-3d77c04d41e9' /* '09/11/2020',
    'Cortex enabled check comming from Page Context' */);
}
function isLogCortexDisabledFlagGetFalseOnceKSActivated() {
    return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["_SPKillSwitch"].isActivated('03fe1e3a-35a4-4d30-9d7d-eba1b4537dbb' /* '10/08/2020',
    'CortexDisabledFlag.Get.False gets logged only once per session instead of once per call' */);
}
function skipLogEngagementForCortexDisabledKSActivated() {
    return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["_SPKillSwitch"].isActivated('e857fd57-8c06-424c-ab9c-ad26d18e5e3f' /* '12/02/2020',
    'Skips engagement logging for CortexDisabledFlag.Get.False' */);
}
function removeCortexDisabledFlagforManagementAPIsKSActivated() {
    return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["_SPKillSwitch"].isActivated('9243c796-7671-4ca8-9aab-3c6252d8379b'
    /* '10/22/2020', 'Management API's should not disable cortex because they have a smaller set of authorized users.' */
    );
}
function isUseMockForCortexTABTestKSActivated() {
    return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["_SPKillSwitch"].isActivated('fa29b3db-0910-4ee3-8f75-cd116fabcc43'
    /* '1/12/20221', 'Control if use mock data for TAB test' */
    );
}


/***/ }),

/***/ "Gw7F":
/*!***************************************!*\
  !*** ./lib/utilities/topicCurated.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return topicCurated; });
/* harmony import */ var _common_Constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/Constants */ "rMgv");
/**
 * @copyright Microsoft Corporation. All rights reserved.
 */

/**
 * Get Curated vs NotCurated based on the topicUrl.
 *
 * @param topicUrl - URL of the topic.
 * @internal
 */
function topicCurated(topicUrl) {
    var _a;
    return ((_a = topicUrl) === null || _a === void 0 ? void 0 : _a.length) > 0 ? _common_Constants__WEBPACK_IMPORTED_MODULE_0__["CuratedTypes"].Curated : _common_Constants__WEBPACK_IMPORTED_MODULE_0__["CuratedTypes"].NotCurated;
}


/***/ }),

/***/ "HAeJ":
/*!****************************************************************!*\
  !*** ./lib/dataProviders/SubstrateGetTopicByIdDataProvider.js ***!
  \****************************************************************/
/*! exports provided: SubstrateGetTopicByIdDataProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubstrateGetTopicByIdDataProvider", function() { return SubstrateGetTopicByIdDataProvider; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _BaseSubstrateTopicDataProvider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BaseSubstrateTopicDataProvider */ "53ge");
/* harmony import */ var _common_EmptyResponseError__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/EmptyResponseError */ "YC7o");
/* harmony import */ var _common_KillSwitches__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/KillSwitches */ "+ORw");
/* harmony import */ var _common_Constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/Constants */ "rMgv");
/**
 * @Copyright (c) Microsoft Corporation.  All rights reserved.
 *
 * Substrate Cortex Get topic by ID data provider.
 */






/**
 * @internal
 */
var SubstrateGetTopicByIdDataProvider = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(SubstrateGetTopicByIdDataProvider, _super);
    function SubstrateGetTopicByIdDataProvider(serviceScope, useMined) {
        var _this = _super.call(this, serviceScope) || this;
        _this._useMined = useMined;
        return _this;
    }
    Object.defineProperty(SubstrateGetTopicByIdDataProvider.prototype, "qosTag", {
        get: function () {
            return 'GetTopicById';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SubstrateGetTopicByIdDataProvider.prototype, "apiName", {
        /**
         * Substrate Cortex API name. Defaults to the 'Topics' API.
         */
        get: function () {
            if (!Object(_common_KillSwitches__WEBPACK_IMPORTED_MODULE_4__["isUseMinedInMSAIAPIKSActivated"])() && this._useMined) {
                return 'Topics/Mined';
            }
            else {
                return 'Topics';
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @internal
     */
    SubstrateGetTopicByIdDataProvider.prototype.getTopic = function (topicId, useMined) {
        if (useMined === void 0) { useMined = this._useMined; }
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["Validate"].isNonemptyString(topicId, 'topicId');
        this._useMined = useMined;
        return this.getRequest("&id=" + topicId).then(function (response) {
            if (!response ||
                !response.value ||
                (Object(_common_KillSwitches__WEBPACK_IMPORTED_MODULE_4__["throwEmptyResErrSeparatelyKSActivated"])() && response.value.length === 0)) {
                throw new Error('Fail to fetch response from getTopicById');
            }
            if (!Object(_common_KillSwitches__WEBPACK_IMPORTED_MODULE_4__["throwEmptyResErrSeparatelyKSActivated"])() && response.value.length === 0) {
                throw new _common_EmptyResponseError__WEBPACK_IMPORTED_MODULE_3__["EmptyResponseError"](_common_Constants__WEBPACK_IMPORTED_MODULE_5__["SUBSTRATE_GETTOPICBYID_EMPTY_RESPONSE_ERROR"]);
            }
            return response.value[0];
        });
    };
    return SubstrateGetTopicByIdDataProvider;
}(_BaseSubstrateTopicDataProvider__WEBPACK_IMPORTED_MODULE_2__["default"]));



/***/ }),

/***/ "I6O9":
/*!***************************************!*\
  !*** external "@microsoft/sp-loader" ***!
  \***************************************/
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_I6O9__;

/***/ }),

/***/ "KFQH":
/*!**************************************************************!*\
  !*** ./lib/dataProviders/SubstrateAnnotationDataProvider.js ***!
  \**************************************************************/
/*! exports provided: SubstrateAnnotationDataProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubstrateAnnotationDataProvider", function() { return SubstrateAnnotationDataProvider; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ms_sp_dataproviders_lib_dataProviders_common_KMTieredCacheHelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ms/sp-dataproviders/lib/dataProviders/common/KMTieredCacheHelper */ "05y5");
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @microsoft/sp-diagnostics */ "ut3N");
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ms_sp_component_utilities_lib_topics_TopicFlightingUtilities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ms/sp-component-utilities/lib/topics/TopicFlightingUtilities */ "Tpx+");
/* harmony import */ var _BaseSubstrateTopicDataProvider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./BaseSubstrateTopicDataProvider */ "53ge");
/* harmony import */ var _common_KillSwitches__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/KillSwitches */ "+ORw");
/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Constants */ "oUEy");
/**
 * @Copyright (c) Microsoft Corporation.  All rights reserved.
 *
 * Substrate Annotation data provider.
 */








/**
 * @internal
 */
var SubstrateAnnotationDataProvider = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(SubstrateAnnotationDataProvider, _super);
    function SubstrateAnnotationDataProvider(serviceScope, doNotRetrieveTopicDetails) {
        var _this = _super.call(this, serviceScope) || this;
        _this._processRawData = function (rawData) {
            if (!!rawData.EntityAnnotation) {
                return rawData;
            }
        };
        _this._doNotRetrieveTopicDetails = doNotRetrieveTopicDetails;
        return _this;
    }
    /**
     * @internal
     */
    SubstrateAnnotationDataProvider.prototype.getAnnotations = function (contentArr, spoId, cacheOptions) {
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["Validate"].isNotNullOrUndefined(contentArr, 'contentArr');
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["Validate"].isNotNullOrUndefined(spoId, 'spoId');
        this._contentArr = contentArr;
        this._spoId = spoId;
        if (Object(_ms_sp_component_utilities_lib_topics_TopicFlightingUtilities__WEBPACK_IMPORTED_MODULE_4__["isIndexedDBEnabledForSubstrateAPIs"])() && cacheOptions) {
            return this._getClientCachableRequest(cacheOptions, this._spoId);
        }
        else {
            return this.getRequest().then(function (response) {
                return response;
            });
        }
    };
    Object.defineProperty(SubstrateAnnotationDataProvider.prototype, "isPost", {
        /**
         * Return true if this is a POST request.
         */
        get: function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SubstrateAnnotationDataProvider.prototype, "apiEndpoint", {
        /**
         * Use a separate endpoint for Annotations API by recommendation from MSAI
         */
        get: function () {
            if (_common_KillSwitches__WEBPACK_IMPORTED_MODULE_6__["default"].useV2AnnotationsEndpoint.isActivated()) {
                return 'DWEngineV2B2/api/v1.0/KnowledgeManagement/';
            }
            else {
                return 'DWEngineV2/api/v1.0/KnowledgeManagement/';
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SubstrateAnnotationDataProvider.prototype, "apiName", {
        /**
         * Substrate Cortex API name. Defaults to the 'Topics' API.
         */
        get: function () {
            return 'Annotation';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SubstrateAnnotationDataProvider.prototype, "qosTag", {
        get: function () {
            var tag = 'Annotation';
            if (!Object(_common_KillSwitches__WEBPACK_IMPORTED_MODULE_6__["isRetrieveTopicDetailsParameterKSActived"])()) {
                return this._doNotRetrieveTopicDetails ? tag + ".DoNotRetrieveDetails" : tag;
            }
            else {
                return tag;
            }
        },
        enumerable: true,
        configurable: true
    });
    SubstrateAnnotationDataProvider.prototype.getCustomRequestOptions = function (options) {
        var _this = this;
        var _a, _b, _c, _d, _e, _f;
        var requestContents = {}; // tslint:disable-line:no-any
        requestContents.Provider = 'Yggdrasil';
        requestContents.TextSections = this._contentArr.map(function (value) {
            if (!Object(_common_KillSwitches__WEBPACK_IMPORTED_MODULE_6__["isRetrieveTopicDetailsParameterKSActived"])()) {
                return {
                    SectionId: value.id,
                    Text: value.text,
                    RetrieveTopicDetails: !_this._doNotRetrieveTopicDetails
                };
            }
            else {
                return { SectionId: value.id, Text: value.text };
            }
        });
        // Using harcoded GUID until backend can handle empty guids.
        requestContents.CurrentPageId = {
            SiteId: (_b = (_a = this._spoId.siteId) === null || _a === void 0 ? void 0 : _a.toString(), (_b !== null && _b !== void 0 ? _b : SubstrateAnnotationDataProvider._allTopicsPageGuid)),
            WebId: (_d = (_c = this._spoId.webId) === null || _c === void 0 ? void 0 : _c.toString(), (_d !== null && _d !== void 0 ? _d : SubstrateAnnotationDataProvider._allTopicsPageGuid)),
            UniqueId: (_f = (_e = this._spoId.uniqueId) === null || _e === void 0 ? void 0 : _e.toString(), (_f !== null && _f !== void 0 ? _f : SubstrateAnnotationDataProvider._allTopicsPageGuid))
        };
        options.body = JSON.stringify({ AnnotationRequest: requestContents });
        var searchParams = new URL(window.location.href).searchParams;
        if (options && options.headers && searchParams.get('threshold') === '0') {
            options.headers['X-Debug-SkipAnnotationFiltering'] = 'true'; // tslint:disable-line:no-string-literal
        }
        if (options && options.headers && searchParams.get('useYukonAndTopicPredictor') === 'true') {
            options.headers[_Constants__WEBPACK_IMPORTED_MODULE_7__["USE_YUKON_AND_TOPIC_PREDICTOR"]] = 'true'; // tslint:disable-line:no-string-literal
        }
        else if (options && options.headers && searchParams.get('useYukonHighlightApi') === 'true') {
            options.headers[_Constants__WEBPACK_IMPORTED_MODULE_7__["USE_YUKON_HIGHLIGHT_API"]] = 'true'; // tslint:disable-line:no-string-literal
        }
        else if (options && options.headers && searchParams.get('useTopicPredictor') !== 'true') {
            if (Object(_common_KillSwitches__WEBPACK_IMPORTED_MODULE_6__["isRevertDefaultYukonHeaderKSActive"])()) {
                options.headers[_Constants__WEBPACK_IMPORTED_MODULE_7__["USE_YUKON_AND_TOPIC_PREDICTOR"]] = 'true'; // tslint:disable-line:no-string-literal
            }
            else {
                options.headers[_Constants__WEBPACK_IMPORTED_MODULE_7__["USE_YUKON_HIGHLIGHT_API"]] = 'true'; // tslint:disable-line:no-string-literal
            }
        }
    };
    SubstrateAnnotationDataProvider.prototype._isRawData = function (data) {
        return data && data.EntityAnnotation;
    };
    SubstrateAnnotationDataProvider.prototype._isCachedDataEmpty = function (data) {
        return data.EntityAnnotation.EntityDetails.length === 0;
    };
    SubstrateAnnotationDataProvider.prototype._getClientCachableRequest = function (cacheOptions, spoId) {
        var _this = this;
        var qosMonitor = new _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_3__["_QosMonitor"](_Constants__WEBPACK_IMPORTED_MODULE_7__["QOS_SUBSTRATE_API_PREFIX"] + "." + this.apiName + ".API." + _Constants__WEBPACK_IMPORTED_MODULE_7__["QOS_DATAPROVIDER_SUFFIX"]);
        var uniquePageId = _ms_sp_dataproviders_lib_dataProviders_common_KMTieredCacheHelper__WEBPACK_IMPORTED_MODULE_2__["default"].getUniquePageId(spoId.siteId, spoId.webId, spoId.uniqueId);
        return this.getRequest('' /* apiCustomParams */, cacheOptions).then(function (response) {
            return _ms_sp_dataproviders_lib_dataProviders_common_KMTieredCacheHelper__WEBPACK_IMPORTED_MODULE_2__["default"].parseClientCachableResponse(response, _this._isRawData, _this._isCachedDataEmpty, _this._processRawData, qosMonitor, _Constants__WEBPACK_IMPORTED_MODULE_7__["QOS_SUBSTRATE_API_PREFIX"] + "." + _this.apiName + ".API", uniquePageId);
        });
    };
    SubstrateAnnotationDataProvider._allTopicsPageGuid = '9833225a-d24b-4b9e-b16d-bba52bae6e23';
    return SubstrateAnnotationDataProvider;
}(_BaseSubstrateTopicDataProvider__WEBPACK_IMPORTED_MODULE_5__["default"]));



/***/ }),

/***/ "KL1q":
/*!***********************************************************!*\
  !*** external "@microsoft/office-ui-fabric-react-bundle" ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_KL1q__;

/***/ }),

/***/ "Kwxa":
/*!*****************************************************!*\
  !*** ./lib/components/DefinitionSourceElement.resx ***!
  \*****************************************************/
/*! exports provided: FromSource, Wiki, WikiLicense, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"FromSource\":\"FromSource\",\"Wiki\":\"Wiki\",\"WikiLicense\":\"WikiLicense\"}");

/***/ }),

/***/ "L15a":
/*!*****************************************!*\
  !*** ./lib/dataProviders/FailureTag.js ***!
  \*****************************************/
/*! exports provided: failedResponseStatus, failedResponseStatus403 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "failedResponseStatus", function() { return failedResponseStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "failedResponseStatus403", function() { return failedResponseStatus403; });
/**
 * @Copyright (c) Microsoft Corporation.  All rights reserved.
 */
var failedResponseStatus = 'FailedResponseStatus';
var failedResponseStatus403 = 'FailedResponseForbidden';


/***/ }),

/***/ "LSGH":
/*!***************************************!*\
  !*** ./lib/topicCard/KillSwitches.js ***!
  \***************************************/
/*! exports provided: isTopicDefinitionActivated, isLinkSourceKSActivated, useOldAriaLabelForTopicDocumentKSActivated, linkStylingUpdateKSActivated, fontSizeTopicCardKSActivated, useImmediateLPCUndefinedTopicCardKSActivated, topicCardTryGetKSActivated, topicCardInTopicCenterKSActivated, announceOpenKSActivated, darkThemeFeedbackKSActivated, hideFeedbackByStateKSActivated, shouldLinksOpenInNewTabKSActivated, removeSuggestedHeaderLabelsTopicCardKSActivated, isTopicCardForMobileViewKSActivated, personaCellTextAlignmentKSActivated, revampViewDetailsLinkKSActivated, invalidatePageForIDBCacheKSActivated, showTopicCardCloseButtonKSActivated, showSuggestedSiteAIReasonKSActivated, topicCardRemoveEmptySuggestedResourcesSectionKSActivated, definitionFeedbackKSActivated, fixTopicCardMaxHeightKSActivated, topicCardUXKSActivated, shortenedFeedbackKSActivated, feedbackConfirmationResponsivenessFixKSActivated, navigatableTopicWebpartKSActivated, fixResourceCountKSActivated, addDefinitionAttributionKSActivated, fixScrollBarMissingKSActivated, isFixFeedbackButtonTooltipKSActivated, putAlternateNameInParenthesesKSActivated */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isTopicDefinitionActivated", function() { return isTopicDefinitionActivated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isLinkSourceKSActivated", function() { return isLinkSourceKSActivated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useOldAriaLabelForTopicDocumentKSActivated", function() { return useOldAriaLabelForTopicDocumentKSActivated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "linkStylingUpdateKSActivated", function() { return linkStylingUpdateKSActivated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fontSizeTopicCardKSActivated", function() { return fontSizeTopicCardKSActivated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useImmediateLPCUndefinedTopicCardKSActivated", function() { return useImmediateLPCUndefinedTopicCardKSActivated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "topicCardTryGetKSActivated", function() { return topicCardTryGetKSActivated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "topicCardInTopicCenterKSActivated", function() { return topicCardInTopicCenterKSActivated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "announceOpenKSActivated", function() { return announceOpenKSActivated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "darkThemeFeedbackKSActivated", function() { return darkThemeFeedbackKSActivated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hideFeedbackByStateKSActivated", function() { return hideFeedbackByStateKSActivated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shouldLinksOpenInNewTabKSActivated", function() { return shouldLinksOpenInNewTabKSActivated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeSuggestedHeaderLabelsTopicCardKSActivated", function() { return removeSuggestedHeaderLabelsTopicCardKSActivated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isTopicCardForMobileViewKSActivated", function() { return isTopicCardForMobileViewKSActivated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "personaCellTextAlignmentKSActivated", function() { return personaCellTextAlignmentKSActivated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "revampViewDetailsLinkKSActivated", function() { return revampViewDetailsLinkKSActivated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "invalidatePageForIDBCacheKSActivated", function() { return invalidatePageForIDBCacheKSActivated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showTopicCardCloseButtonKSActivated", function() { return showTopicCardCloseButtonKSActivated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showSuggestedSiteAIReasonKSActivated", function() { return showSuggestedSiteAIReasonKSActivated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "topicCardRemoveEmptySuggestedResourcesSectionKSActivated", function() { return topicCardRemoveEmptySuggestedResourcesSectionKSActivated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "definitionFeedbackKSActivated", function() { return definitionFeedbackKSActivated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fixTopicCardMaxHeightKSActivated", function() { return fixTopicCardMaxHeightKSActivated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "topicCardUXKSActivated", function() { return topicCardUXKSActivated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shortenedFeedbackKSActivated", function() { return shortenedFeedbackKSActivated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "feedbackConfirmationResponsivenessFixKSActivated", function() { return feedbackConfirmationResponsivenessFixKSActivated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "navigatableTopicWebpartKSActivated", function() { return navigatableTopicWebpartKSActivated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fixResourceCountKSActivated", function() { return fixResourceCountKSActivated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addDefinitionAttributionKSActivated", function() { return addDefinitionAttributionKSActivated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fixScrollBarMissingKSActivated", function() { return fixScrollBarMissingKSActivated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFixFeedbackButtonTooltipKSActivated", function() { return isFixFeedbackButtonTooltipKSActivated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "putAlternateNameInParenthesesKSActivated", function() { return putAlternateNameInParenthesesKSActivated; });
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__);

function isTopicDefinitionActivated() {
    return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPKillSwitch"].isActivated('6c4aea94-db76-4907-99a8-65a7415edb65' /* '09/22/2020',
      'Track topic definition presence.' */);
}
function isLinkSourceKSActivated() {
    return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPKillSwitch"].isActivated('bbaca5bb-0376-4c48-8dbc-3a52272c12af' /* '08/17/2020',
      'Add link source attributing topic page opens to topic card.' */);
}
function useOldAriaLabelForTopicDocumentKSActivated() {
    return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPKillSwitch"].isActivated('933db094-c270-4a41-8a34-5655797a5663' /* '08/10/2020',
      'Reverts to old aria label for topic card documents*/);
}
function linkStylingUpdateKSActivated() {
    return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPKillSwitch"].isActivated('a882150e-eb39-4ef0-8b78-9bee27cf3520' /* '09/10/2020',
      'Update view details link styling in topic card.*/);
}
function fontSizeTopicCardKSActivated() {
    return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPKillSwitch"].isActivated('1c491058-2ad1-4adc-b201-a4e7cc71825d' /* '08/28/2020',
      'Update font size for topic card contribution text.*/);
}
function useImmediateLPCUndefinedTopicCardKSActivated() {
    return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPKillSwitch"].isActivated('71da2c82-f18b-4464-aa7d-25a9d6ce4d3d' /* '08/11/2020',
      'Reverts to undefined value of immediate LPC for topic card people*/);
}
function topicCardTryGetKSActivated() {
    return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPKillSwitch"].isActivated('46b9fcf8-1cda-447a-bc45-5e8732d5707a' /* '08/20/2020',
      'If not get topic entity try fetch one in topic card' */);
}
function topicCardInTopicCenterKSActivated() {
    return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPKillSwitch"].isActivated('84d1ef0d-eae6-428a-8c5c-e860e762e64e' /* '08/28/2020',
      'Adding topic card to topic center' */);
}
function announceOpenKSActivated() {
    return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPKillSwitch"].isActivated('2c4761dd-79a0-473b-94a7-0670961a5570' /* '08/28/2020',
      'Kill announcing that topic card has been opened' */);
}
function darkThemeFeedbackKSActivated() {
    return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPKillSwitch"].isActivated('4950e98f-c3b4-4961-9839-cf100947b001' /* '10/28/2020', 'Kill dark theme fix for topic card feedback' */);
}
function hideFeedbackByStateKSActivated() {
    return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPKillSwitch"].isActivated('0c8c056d-cb2c-4f28-80e4-b1800b4fe4af' /* '09/09/2020', 'Use state to control whether to hide feedback' */);
}
function shouldLinksOpenInNewTabKSActivated() {
    return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPKillSwitch"].isActivated('e8470950-d4ae-45e2-bbe5-4b87e3e194a5' /* '09/10/2020', 'Should topic card header links open in new tab.' */);
}
function removeSuggestedHeaderLabelsTopicCardKSActivated() {
    return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPKillSwitch"].isActivated('c5d960d2-23f5-4766-a43f-a841151d414c' /* '08/12/2020',
    'Integrate suggested headers and labels for mined topics' */);
}
function isTopicCardForMobileViewKSActivated() {
    return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPKillSwitch"].isActivated('acff47fc-4dc8-4b8c-bc1b-f461c032e57a' /* '09/14/2020,
    'Polish TopicCard on mobile view' */);
}
function personaCellTextAlignmentKSActivated() {
    return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPKillSwitch"].isActivated('e703c6e8-633b-4980-b496-ec492c03ee29' /* '09/29/2020,
    'Update Persona Cell text alignment to be on the right side of the persona.' */);
}
function revampViewDetailsLinkKSActivated() {
    return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPKillSwitch"].isActivated('d58d3fec-02bf-4c38-a976-d929619c1651'
    /* 09/24/2020, 'implement view details link with Button only' */
    );
}
function invalidatePageForIDBCacheKSActivated() {
    return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPKillSwitch"].isActivated('6ae01165-d861-4b5e-a3ed-6e73a5eca4bf'
    /* '10/26/2020', 'Sets a flag in session storage invalidating the current page to use with indexed DB' */
    );
}
function showTopicCardCloseButtonKSActivated() {
    return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPKillSwitch"].isActivated('3cf35ac6-3e93-4e3c-9f69-0c38bdfe573e'
    /* '10/14/2020', 'display close button for topic card' */
    );
}
function showSuggestedSiteAIReasonKSActivated() {
    return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPKillSwitch"].isActivated('1fdcbf32-c429-4307-9788-a0135cec2c51'
    /* '11/05/2020', 'display AI reason for suggested sites' */
    );
}
function topicCardRemoveEmptySuggestedResourcesSectionKSActivated() {
    return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPKillSwitch"].isActivated('29a2731e-81c9-4cbd-b79c-9635d9f3f9b4' /* '11/10/2020',
      'Remove Suggested Resources section when there are no related resources.' */);
}
function definitionFeedbackKSActivated() {
    return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPKillSwitch"].isActivated('ed46d874-2322-4d3f-a4ae-115c57570435'
    /* '11/4/2020', 'display close button for topic card' */
    );
}
function fixTopicCardMaxHeightKSActivated() {
    return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPKillSwitch"].isActivated('1a1d8929-dae7-4ba9-8ed1-ad3a674b2292' /* '12/07/2020', 'Limit the max height of topic card to 540px (was 600px)' */);
}
function topicCardUXKSActivated() {
    return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPKillSwitch"].isActivated('b7ed387f-2b2c-4bcf-aa82-cf6395defd0a' /* '11/23/2020',
      'Remove title tooltip for placeholder text ' */);
}
function shortenedFeedbackKSActivated() {
    return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPKillSwitch"].isActivated('91027550-8b09-435e-a039-f118df62f7e3'
    /* '11/12/2020', 'displays new prompt for feedback that is less intrusive then the previous one.' */
    );
}
function feedbackConfirmationResponsivenessFixKSActivated() {
    return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPKillSwitch"].isActivated('b2d2026e-2e47-45df-9997-c8ef147d5698'
    /* '11/24/2020', 'Skips the wait for feedback to process before re-rendering message prompt.' */
    );
}
function navigatableTopicWebpartKSActivated() {
    return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPKillSwitch"].isActivated('706b4ce4-f589-4aac-9548-757f1a5c2732'
    /* '12/4/2020', 'Clicking on topic section titles goes to topic page in that location.' */
    );
}
function fixResourceCountKSActivated() {
    return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPKillSwitch"].isActivated('7b38ec69-fb3d-466e-b834-9128b880ebcf'
    /* '12/10/2020', 'Resource count on topic card should take sites into account.' */
    );
}
function addDefinitionAttributionKSActivated() {
    return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPKillSwitch"].isActivated('8294b36e-e725-4a41-bf0e-f5fdf7e1be59'
    /* '01/04/2021', 'Add attribution for definition on topic card.' */
    );
}
function fixScrollBarMissingKSActivated() {
    return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPKillSwitch"].isActivated('3c64e6b1-2dfb-42c7-879e-8f1e227b9173'
    /* '01/26/2021', 'Fix scroll bar not show in topic card.' */
    );
}
function isFixFeedbackButtonTooltipKSActivated() {
    return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPKillSwitch"].isActivated('d7ae7412-e571-40ac-96bb-b1e3a0626bd3'
    /* '01/26/2021', 'Fix feedback button tooltip on topic card.' */
    );
}
function putAlternateNameInParenthesesKSActivated() {
    return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPKillSwitch"].isActivated('cbfd2a21-002f-4c91-8c16-7a6c837eab51'
    /* '01/26/2021', 'Put alternate name in parentheses.' */
    );
}


/***/ }),

/***/ "M0jl":
/*!******************************!*\
  !*** ./lib/logEngagement.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return logEngagement; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/sp-diagnostics */ "ut3N");
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_KillSwitches__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common/KillSwitches */ "+ORw");
/* harmony import */ var _utilities_topicOrigin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utilities/topicOrigin */ "XJVB");
/**
 * @copyright Microsoft Corporation. All rights reserved.
 */




/**
 * @public - Used across topic components to streamline engagement logging
 */
function logEngagement(event, moduleName, properties, topicId, topicCurated) {
    var attribution = {};
    if (!Object(_common_KillSwitches__WEBPACK_IMPORTED_MODULE_2__["isTopicOriginKSActivated"])() && topicId) {
        attribution['topicOrigin'] = Object(_utilities_topicOrigin__WEBPACK_IMPORTED_MODULE_3__["default"])(topicId);
    }
    if (!Object(_common_KillSwitches__WEBPACK_IMPORTED_MODULE_2__["isTopicCuratedKSActivated"])() && topicCurated) {
        attribution['topicCurated'] = topicCurated;
    }
    _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__["_EngagementLogger"].logEventWithLogEntry(new _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__["_LogEntry"](moduleName, event, _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__["_LogType"].Event, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, properties), attribution), true /* isIntentional */));
}


/***/ }),

/***/ "MGnC":
/*!***********************************************************!*\
  !*** ./lib/components/DefinitionSourceElement.module.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../../common/temp/node_modules/.pnpm/css-loader@3.2.1_webpack@4.44.2/node_modules/css-loader/dist/cjs.js!../../../../common/temp/node_modules/.pnpm/postcss-loader@3.0.0/node_modules/postcss-loader/src??postcss!./DefinitionSourceElement.module.css */ "FkHG");
var loader = __webpack_require__(/*! @microsoft/load-themed-styles */ "jOlS");

if(typeof content === "string") content = [[module.i, content]];

// add the styles to the DOM
for (var i = 0; i < content.length; i++) loader.loadStyles(content[i][1], true);

if(content.locals) module.exports = content.locals;

/***/ }),

/***/ "NDxI":
/*!*******************************************!*\
  !*** ./lib/dataProviders/RestApiError.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/**
 * @Copyright (c) Microsoft Corporation.  All rights reserved.
 */

/**
 * Error structure for Restful API request
 * @public
 */
var RestApiError = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(RestApiError, _super);
    function RestApiError(message, status, code) {
        if (message === void 0) { message = 'unknown'; }
        if (status === void 0) { status = 200; }
        var _this = _super.call(this, message) || this;
        if (message === 'unknown') {
            _this.isUnknown = true;
        }
        // Manually set the prototype, as we can no longer extend built-in classes like Error, Array, Map, etc
        // tslint:disable-next-line:max-line-length
        // https://github.com/Microsoft/TypeScript-wiki/blob/master/Breaking-Changes.md#extending-built-ins-like-error-array-and-map-may-no-longer-work
        //
        // Note: the prototype must also be set on any classes which extend this one
        _this.__proto__ = RestApiError.prototype; // tslint:disable-line:no-any
        _this.status = status;
        _this.code = code;
        return _this;
    }
    return RestApiError;
}(Error));
/* harmony default export */ __webpack_exports__["default"] = (RestApiError);


/***/ }),

/***/ "NG/M":
/*!**************************************!*\
  !*** ./lib/topicCache/TopicCache.js ***!
  \**************************************/
/*! exports provided: TopicCache */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopicCache", function() { return TopicCache; });
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ms/sp-component-utilities */ "hiL/");
/* harmony import */ var _ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_Constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/Constants */ "rMgv");
/* harmony import */ var _common_KillSwitches__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/KillSwitches */ "+ORw");
/* harmony import */ var _dataProviders_AggregatedTopicEntityDataProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../dataProviders/AggregatedTopicEntityDataProvider */ "DnL5");
/**
 * @copyright (c) Microsoft Corporation. All rights reserved.
 */





var KM_TOPIC_CACHE_LOG_PREFIX = 'CSIKM.TopicCache';
/**
 * A scoped class to cache topics
 * This is a reusable verison of TopicCache in sp-page-topic-annotaion chunk
 * @internal
 */
var TopicCache = /** @class */ (function () {
    function TopicCache() {
        this._cache = new Map();
        this._currentTopic = undefined;
    }
    /**
     * Instance of the TopicCache.
     */
    TopicCache.getInstance = function (serviceScope) {
        if (!this._instance) {
            this._instance = new TopicCache();
            this._instance._serviceScope = serviceScope;
        }
        return this._instance;
    };
    /**
     * Update the Topic cache.
     */
    TopicCache.prototype.update = function (entities, originalTopicId) {
        var _this = this;
        if (entities && entities.length > 0) {
            entities.forEach(function (entity) {
                _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Validate"].isNonemptyString(entity.Id, 'entity.Id');
                _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Validate"].isNonemptyString(entity.Name, 'entity.Name');
                _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Validate"].isNonemptyString(entity.Type, 'entity.Type');
                _this._copyClientOnlyProps(entity);
                _this._copyMinedRelations(entity);
                _this._cache.set(entity.Id, entity);
                _this._indexOriginalIds(entity, originalTopicId);
            });
        }
    };
    /**
     * Synchronously get a topic from the cache.
     */
    TopicCache.prototype.get = function (topicId) {
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Validate"].isNonemptyString(topicId, 'topicId');
        return this._cache.get(topicId);
    };
    /**
     * Try get topic from cache.
     * If not cached, try call API to get topic entity and update cache.
     */
    TopicCache.prototype.tryGet = function (topicId) {
        var _this = this;
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Validate"].isNonemptyString(topicId, 'topicId');
        var cachedTopicEntity = this._cache.get(topicId);
        if (cachedTopicEntity) {
            return Promise.resolve(cachedTopicEntity);
        }
        else {
            return this.fetch(topicId).then(function (topicEntity) {
                _this.update([topicEntity]);
                return topicEntity;
            });
        }
    };
    /**
     * Get a topic from the cache and fetch it from the backend, if required.
     */
    TopicCache.prototype.fetch = function (topicId) {
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Validate"].isNonemptyString(topicId, 'topicId');
        if (this._cache.has(topicId)) {
            return Promise.resolve(this._cache.get(topicId));
        }
        return this._getAggregatedTopicEntityDataProvider().fetchTopicEntity(topicId, false);
    };
    Object.defineProperty(TopicCache.prototype, "currentTopic", {
        get: function () {
            return this._currentTopic;
        },
        set: function (topic) {
            _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Validate"].isNonemptyString(topic.Id, 'entity.Id');
            if (topic.Id !== _ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_1__["NULL_TOPIC_ENTITY"].Id) {
                _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Validate"].isNonemptyString(topic.Name, 'entity.Name');
            }
            _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Validate"].isNonemptyString(topic.Type, 'entity.Type');
            this._currentTopic = topic;
        },
        enumerable: true,
        configurable: true
    });
    TopicCache.prototype._copyMinedRelations = function (entity) {
        var documents = entity.RelatedDocuments || [];
        var people = entity.RelatedPeople || [];
        entity.HiddenMinedDocuments = [];
        entity.HiddenMinedPeople = [];
        for (var i = documents.length - 1; i >= _common_Constants__WEBPACK_IMPORTED_MODULE_2__["RELATED_DOCUMENTS_LIMIT"]; i--) {
            if (documents[i].State === _ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_1__["ENTITY_STATE"].Mined) {
                entity.HiddenMinedDocuments.push(documents[i]);
            }
        }
        for (var i = people.length - 1; i >= _common_Constants__WEBPACK_IMPORTED_MODULE_2__["RELATED_PEOPLE_LIMIT"]; i--) {
            if (people[i].State === _ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_1__["ENTITY_STATE"].Mined) {
                entity.HiddenMinedPeople.push(people[i]);
            }
        }
    };
    TopicCache.prototype._copyClientOnlyProps = function (newEntity) {
        if (this._cache.has(newEntity.Id) && !newEntity.Url) {
            newEntity.Url = this._cache.get(newEntity.Id).Url;
        }
    };
    /**
     * Used for caching entity with other old original ids
     */
    TopicCache.prototype._indexOriginalIds = function (entity, extraOriginalId) {
        var _this = this;
        var _a;
        if (!Object(_common_KillSwitches__WEBPACK_IMPORTED_MODULE_3__["useOriginalIdsKSActivated"])()) {
            if (extraOriginalId && extraOriginalId !== entity.Id) {
                this._cache.set(extraOriginalId, entity);
            }
            if ((_a = entity.OriginalIds) === null || _a === void 0 ? void 0 : _a.length) {
                entity.OriginalIds.map(function (oldId) {
                    return oldId !== extraOriginalId && oldId !== entity.Id && _this._cache.set(oldId, entity);
                });
            }
        }
    };
    TopicCache.prototype._getAggregatedTopicEntityDataProvider = function () {
        if (!this._aggregatedTopicEntityDataProvider) {
            this._aggregatedTopicEntityDataProvider = new _dataProviders_AggregatedTopicEntityDataProvider__WEBPACK_IMPORTED_MODULE_4__["AggregatedTopicEntityDataProvider"](this._serviceScope, KM_TOPIC_CACHE_LOG_PREFIX);
        }
        return this._aggregatedTopicEntityDataProvider;
    };
    return TopicCache;
}());



/***/ }),

/***/ "NfQ8":
/*!***************************************************************!*\
  !*** ../sp-component-utilities/lib/performance/KillSwitch.js ***!
  \***************************************************************/
/*! exports provided: KillSwitch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KillSwitch", function() { return KillSwitch; });
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__);

/**
 * @deprecated DO NOT USE - Use _SPKillSwitch from `@microsoft/sp-core-library`.
 * Example: _SPKillSwitch.isActivated('00000000-0000-0000-0000-000000000000' \/* 'MM/DD/YYYY', 'My Feature' *\/);
 *
 * Class representing kill switch information.
 */
var KillSwitch = /** @class */ (function () {
    /**
     * Specify date and description within comment section
     * e.g. ('efc0bbdb-5840-4f29-ae06-6415236103a5' /* '4/9/2019', 'SOX_EventDataPickerAutoFocus' *\/)
     *
     *
     * @param guid - Guid of the kill switch. It is highly recommended to use lowercase without {} for best performance
     */
    function KillSwitch(guid) {
        this._guid = _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Guid"].parse(guid);
    }
    /**
     * Returns true if kill switch has been activated.
     */
    KillSwitch.prototype.isActivated = function () {
        return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPKillSwitch"].isActivated(this._guid, '', '');
    };
    return KillSwitch;
}());



/***/ }),

/***/ "NmML":
/*!*************************************!*\
  !*** ./lib/common/addLinkSource.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return addLinkSource; });
/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Constants */ "rMgv");
/**
 * @Copyright (c) Microsoft Corporation.  All rights reserved.
 */

function addLinkSource(url, linkSource) {
    if (!url) {
        return url;
    }
    var parsedUrl = new URL(url);
    parsedUrl.searchParams.append(_Constants__WEBPACK_IMPORTED_MODULE_0__["TopicPageParams"].LinkSource, linkSource);
    return parsedUrl.href;
}


/***/ }),

/***/ "NyOt":
/*!****************************************!*\
  !*** ./lib/components/KillSwitches.js ***!
  \****************************************/
/*! exports provided: fixWikiLicenseStyleKSActivated, fixWikiSourceTooltipKSActivated, refactorWikiSourceElementKSActivated */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fixWikiLicenseStyleKSActivated", function() { return fixWikiLicenseStyleKSActivated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fixWikiSourceTooltipKSActivated", function() { return fixWikiSourceTooltipKSActivated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "refactorWikiSourceElementKSActivated", function() { return refactorWikiSourceElementKSActivated; });
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__);

// tslint:disable-next-line:export-name
function fixWikiLicenseStyleKSActivated() {
    return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPKillSwitch"].isActivated('17c19ba4-19d2-47f6-8b5a-4be89961086c' /* '11/05/2020',
      'Fix wiki license style.' */);
}
function fixWikiSourceTooltipKSActivated() {
    return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPKillSwitch"].isActivated('727ee38a-7662-46ce-9e14-ef81358d7007' /* '11/17/2020',
      'Fix wiki source link tooltip.' */);
}
function refactorWikiSourceElementKSActivated() {
    return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPKillSwitch"].isActivated('97888487-f745-4957-a3e1-f75f684aac96' /* '01/11/2021',
      'Refactor WikiSourceElement with StringFormatWithNodes.' */);
}


/***/ }),

/***/ "OUh5":
/*!**********************************************************!*\
  !*** ./lib/utilities/getKnowledgeHubUrlWithOverrides.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getKnowledgeHubUrlWithOverrides; });
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/sp-diagnostics */ "ut3N");
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_KillSwitches__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/KillSwitches */ "+ORw");
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
 * Retrieve the Knowledge Hub URL with overrides for test sites to point at the SPDF knowledge center.
 * This function is bigger than the smaller getKnowledgeHubUrl that ignores the overrides.
 *
 * This should be used in defer-loaded scenarios where bundle size is not a hard constraint, as opposed to the assembly.
 *
 * @internal
 */
function getKnowledgeHubUrlWithOverrides(pageContext) {
    var _a, _b;
    _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Validate"].isNotNullOrUndefined(pageContext, 'pageContext');
    var logSource = _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__["_LogSource"].create('TopicUtilities');
    // For test sites, always use the SPDF knowledge hub.
    if (useDFKnowledgeCenter(pageContext)) {
        return SPDF_KNOWLEDGE_HUB_URL;
    }
    // Use the configured URL and for Microsoft sites, always force the MSIT knowledge center.
    if ((_b = (_a = pageContext.legacyPageContext) === null || _a === void 0 ? void 0 : _a.knowledgeHubSiteDetails) === null || _b === void 0 ? void 0 : _b.Url) {
        // the case where knowledge hub url exists in page context
        var url = pageContext.legacyPageContext.knowledgeHubSiteDetails.Url;
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
 *
 * @internal
 */
function useDFKnowledgeCenter(pageContext) {
    _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Validate"].isNotNullOrUndefined(pageContext, 'pageContext');
    var siteUrl = (!_common_KillSwitches__WEBPACK_IMPORTED_MODULE_2__["default"].previewPage404Fix.isActivated()
        ? pageContext.site.absoluteUrl
        : location.origin).toLowerCase();
    return (siteUrl.indexOf('microsoft.sharepoint-df.com') !== -1 &&
        TEST_SITES.some(function (siteName) { return siteUrl.indexOf(siteName) !== -1; }));
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

/***/ "SIPn":
/*!**********************************************!*\
  !*** ./lib/dataProviders/MockApiResponse.js ***!
  \**********************************************/
/*! exports provided: mockApiResponse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mockApiResponse", function() { return mockApiResponse; });
/**
 * @internal
 */
var mockApiResponse = {
    PageMatches: [
        {
            ComponentId: '1212fc8d-dd6b-408a-8d5d-9f1cc787efbb',
            Matches: [
                {
                    Start: 33,
                    Length: 14,
                    Entities: [{ EntityId: 'Yukon_Un99HElc8M0PepGv-ibwNZ4Lpawi3QtGyWfzAOvPUGY', Score: 1 }]
                }
            ]
        }
    ],
    EntityDetails: [
        {
            Id: 'Yukon_Un99HElc8M0PepGv-ibwNZ4Lpawi3QtGyWfzAOvPUGY',
            State: 'Curated, Mined',
            LifecycleState: {
                State: 'Published'
            },
            Score: 0,
            Name: 'Project Cortex',
            Url: 'https://microsoft.sharepoint.com/sites/knowledgecenter/SitePages/Project-Cortex.aspx',
            // tslint:disable-next-line:max-line-length
            Definition: "Project Cortex is your knowledge network in Microsoft 365, empowering people with knowledge and expertise in the apps you use every day.\nBuilding on the leading content services of SharePoint, Project Cortex connects content in Microsoft 365 and external content and enables you to manage your information and streamline processes with advanced security, compliance and automated workflow.\nProject Cortex applies AI to automatically organize your content, and delivers innovative experiences\u2014topic cards, topic pages and knowledge centers\u2014in Office, Outlook and Microsoft Teams.\n",
            Definitions: [],
            Type: 'Project',
            AtTheMinimumRelatedResourcesCount: 11,
            AtTheMinimumRelatedPeopleCount: 11,
            RelatedPeople: [
                {
                    Upn: '',
                    Name: 'Naomi Moneypenny',
                    Email: 'Naomi.Moneypenny@microsoft.com',
                    OId: '00000000-0000-0000-0000-000000000000',
                    Description: undefined,
                    State: 'Curated',
                    AIReason: undefined
                },
                {
                    Upn: 'nkokoye@microsoft.com',
                    Name: 'Nkem Okoye',
                    Email: 'nkokoye@microsoft.com',
                    OId: '00000000-0000-0000-0000-000000000000',
                    Description: undefined,
                    State: 'Curated, Mined',
                    AIReason: undefined
                }
            ],
            RelatedDocuments: [
                {
                    GroupId: '93f37c3c-37e2-4281-828a-241c8a5d6ac8',
                    DepartmentId: '00000000-0000-0000-0000-000000000000',
                    Title: 'GA-Overview_of__Language_Understanding_Model_in_SharePoint_Using_Project_Cortex',
                    // tslint:disable-next-line:max-line-length
                    Url: "https://microsoft.sharepoint-df.com/teams/ECMandSearchinODSP/Capture/GA-Overview_of__Language_Understanding_Model_in_SharePoint_Using_Project_Cortex.docx",
                    WebviewUrl: "https://microsoft.sharepoint-df.com/teams/ECMandSearchinODSP/Capture/GA-Overview_of__Language_Understanding_Model_in_SharePoint_Using_Project_Cortex.docx",
                    LastModifiedTime: '2020-05-01T07:16:00Z',
                    ViewCount: 13,
                    State: 'Mined',
                    SiteId: '258e1f20-fb33-4141-bcbb-c0f40cf83dc6',
                    WebId: '2aeac71c-2716-4c01-b529-78b6f93ed3db',
                    UniqueId: 'b0839ea1-ad45-4698-9118-dc84a42e7f33',
                    Modifier: {
                        Upn: 'ssquires@microsoft.com',
                        Name: 'Sean Squires',
                        Email: 'ssquires@microsoft.com'
                    },
                    AIReason: undefined
                },
                {
                    GroupId: '00000000-0000-0000-0000-000000000000',
                    DepartmentId: '47060b5d-eb3a-4f7b-a1c0-421fc86cd0f6',
                    Title: 'Customer Profiling and Segmentation',
                    // tslint:disable-next-line:max-line-length
                    Url: 'https://microsoft.sharepoint-df.com/teams/ODSPWeb/SitePages/Customer-Profiling-and-Segmentation(1).aspx',
                    WebviewUrl: 'https://microsoft.sharepoint-df.com/teams/ODSPWeb/SitePages/Customer-Profiling-and-Segmentation(1).aspx',
                    LastModifiedTime: '2020-02-13T18:02:35Z',
                    ViewCount: 101,
                    State: 'Mined',
                    SiteId: '47060b5d-eb3a-4f7b-a1c0-421fc86cd0f6',
                    WebId: 'b8573d90-81d1-4c02-9754-506bfcc71f51',
                    UniqueId: '96082162-9d9f-449e-967b-25ea4877227a',
                    Modifier: {
                        Upn: 'anrani@microsoft.com',
                        Name: 'Aneema Rani',
                        Email: 'Aneema.Rani@microsoft.com'
                    },
                    AIReason: undefined
                }
            ],
            RelatedSites: [
                {
                    Title: 'Project Cortex',
                    SiteId: '4afbba34-2ba1-4d06-bcfc-6e112144012b',
                    WebId: 'e4ad031e-5dcd-4a5e-909e-4eb0a17d06b0',
                    Url: 'https://microsoft.sharepoint.com/sites/projectcortex',
                    Color: '#a4262c',
                    Acronym: 'PC',
                    LogoUrl: '',
                    State: 'Curated'
                }
            ],
            AlternateNames: [],
            HiddenMinedDocuments: [],
            HiddenMinedPeople: [],
            OriginalIds: ['AL_eLnG1wGyug7rPoGij0zZyg']
        }
    ]
};


/***/ }),

/***/ "Tigv":
/*!******************************************************************************!*\
  !*** ../sp-dataproviders/lib/httpClients/common/SPHttpMicroserviceClient.js ***!
  \******************************************************************************/
/*! exports provided: default, serviceKey */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "serviceKey", function() { return serviceKey; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _microsoft_sp_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/sp-http */ "vlQI");
/* harmony import */ var _microsoft_sp_http__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_http__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__);

// Copyright (c) Microsoft. All rights reserved.


/**
 * SPHttpMicroserviceClient is used to perform REST calls to the SharePoint Home microservice.
 * It abstracts the fetching of tokens and passing the correct headers
 * when calling the microservice.
 * @internal
 */
var SPHttpMicroserviceClient = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(SPHttpMicroserviceClient, _super);
    function SPHttpMicroserviceClient(serviceScope) {
        var _this = _super.call(this, serviceScope) || this;
        _this._requestUpdater = function (props) { return Promise.resolve(props); };
        return _this;
    }
    Object.defineProperty(SPHttpMicroserviceClient.prototype, "requestUpdater", {
        set: function (requestUpdater) {
            this._requestUpdater = requestUpdater;
        },
        enumerable: true,
        configurable: true
    });
    SPHttpMicroserviceClient.prototype._fetch = function (url, configuration, options) {
        var _this = this;
        return this._requestUpdater({ url: url, options: options }).then(function (props) {
            return _super.prototype._fetch.call(_this, props.url, configuration, props.options);
        });
    };
    return SPHttpMicroserviceClient;
}(_microsoft_sp_http__WEBPACK_IMPORTED_MODULE_1__["SPHttpClient"]));
/* harmony default export */ __webpack_exports__["default"] = (SPHttpMicroserviceClient);
/**
 * The service key for SPHttpMicroserviceClient.
 */
var serviceKey = _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__["ServiceKey"].create('sp-http:SPHttpMicroserviceClient', SPHttpMicroserviceClient);


/***/ }),

/***/ "Tpx+":
/*!***********************************************************************!*\
  !*** ../sp-component-utilities/lib/topics/TopicFlightingUtilities.js ***!
  \***********************************************************************/
/*! exports provided: isCortexEnabled, setCortexDisabledFlag, isIndexedDBEnabledForCortexAPIs, isIndexedDBEnabledForOdspAPIs, isIndexedDBEnabledForSubstrateAPIs, isRunTAB */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isCortexEnabled", function() { return isCortexEnabled; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCortexDisabledFlag", function() { return setCortexDisabledFlag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isIndexedDBEnabledForCortexAPIs", function() { return isIndexedDBEnabledForCortexAPIs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isIndexedDBEnabledForOdspAPIs", function() { return isIndexedDBEnabledForOdspAPIs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isIndexedDBEnabledForSubstrateAPIs", function() { return isIndexedDBEnabledForSubstrateAPIs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isRunTAB", function() { return isRunTAB; });
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/sp-diagnostics */ "ut3N");
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_KillSwitches__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/KillSwitches */ "GYQK");
/**
 * @Copyright (c) Microsoft Corporation.  All rights reserved.
 */



var CORTEX_DISABLE_FLAG = 'cortexDisableFlag';
var LAST_CORTEX_DISABLE_FLAG_LOGGED = 'lastCortexDisableFlagLogged';
var DISABLED_FLAG_LOG_PREFIX = 'CSIKM.CortexEnabledFlag';
var DISABLED_FLAG_ACTION_SET = '.Set';
var DISABLED_FLAG_ACTION_GET = '.Get';
var DISABLED_FLAG_STATUS_TRUE = '.True';
var DISABLED_FLAG_STATUS_FALSE = '.False';
var USE_TIERED_CACHING = 1703; /* WEXTieredCaching */
var USE_INDEXED_DB_FOR_ODSP_APIS = 1082; /* IndexedDBForKm enabled Indexed DB for ODSP APIs */
var USE_INDEXED_DB_FOR_SUBSTRATE_APIS = 60083; /* CortexIndexedDBForSubstrateAPIs enabled Indexed DB for Substrate APIs */
var USE_INDEXED_DB_FOR_ODSP_EXPERIMENT = 90041; /* CortexIndexedDBForOdspExperiment */
var USE_INDEXED_DB_FOR_SUBSTRATE_EXPERIMENT = 90059; /* CortexIndexedDBForSubstrateExperiment */
/**
 * Return true if Cortex should be enabled for this user.
 */
/* tslint:disable-next-line:export-name */
function isCortexEnabled(pageContext) {
    if (!Object(_common_KillSwitches__WEBPACK_IMPORTED_MODULE_2__["isUseCortexTopicExperiencesCapabilityKSActivated"])()) {
        return (isCortexFlightEnabled() &&
            ((!isCortexDisabledFlagActive() && isCortexLicenseEnabled(pageContext)) || isMock()));
    }
    else {
        return (isCortexFlightEnabled() &&
            ((!isCortexDisabledFlagActive() && isKnowledgeCenterUrlConfigured(pageContext)) || isMock()));
    }
}
/**
 * Add time stamp to session storage disabling Cortex for 24 hrs
 */
/* tslint:disable-next-line:no-any */
function setCortexDisabledFlag(response) {
    var _a, _b, _c;
    if (((_a = response) === null || _a === void 0 ? void 0 : _a.status) === 403) {
        // one hour in milliseconds
        var timeInMilliseconds = 3600000;
        var cortexDisabledFlag = new Date(new Date().getTime() + timeInMilliseconds);
        if ((_b = sessionStorage) === null || _b === void 0 ? void 0 : _b.setItem) {
            sessionStorage.setItem(CORTEX_DISABLE_FLAG, cortexDisabledFlag.toISOString());
            var logTagCortexDisableSetTrue = DISABLED_FLAG_LOG_PREFIX + DISABLED_FLAG_ACTION_SET + DISABLED_FLAG_STATUS_TRUE;
            if (!Object(_common_KillSwitches__WEBPACK_IMPORTED_MODULE_2__["isLogCortexDisabledFlagGetFalseOnceKSActivated"])()) {
                engamentLogOncePerAction(logTagCortexDisableSetTrue);
            }
            else {
                _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_0__["_EngagementLogger"].logEvent(logTagCortexDisableSetTrue);
            }
            if (!Object(_common_KillSwitches__WEBPACK_IMPORTED_MODULE_2__["isLogCortexDisabledFlagGetFalseOnceKSActivated"])() && ((_c = sessionStorage) === null || _c === void 0 ? void 0 : _c.removeItem)) {
                sessionStorage.removeItem(LAST_CORTEX_DISABLE_FLAG_LOGGED);
            }
        }
    }
}
/**
 * Determines if IndexedDB caching is enabled for Cortex APIs
 *
 * @returns true if dependant flight WEXTieredCaching is enabled,
 * and flights for IndexedDB with ODSP APIs is enabled OR flights for IndexedDB with Substrate APIs is enabled.
 */
function isIndexedDBEnabledForCortexAPIs() {
    return (_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["_SPFlight"].isEnabled(USE_TIERED_CACHING) &&
        (isIndexedDBFlightEnabledForOdspAPIs() || isIndexedDBFlightEnabledForSubstrateAPIs()));
}
/**
 * Determines if IndexedDB caching is enabled specifically for the Cortex ODSP APIs
 *
 * @returns true if CortexIndexedDBForOdspExperiment is on or IndexedDBForKm flight is enabled.
 */
function isIndexedDBEnabledForOdspAPIs() {
    return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["_SPFlight"].isEnabled(USE_TIERED_CACHING) && isIndexedDBFlightEnabledForOdspAPIs();
}
/**
 * Determines if IndexedDB caching is enabled specifically for the Cortex Substrate APIs
 *
 * @returns true if dependant WEXTieredCaching flight is enabled,
 * and IndexedDB flight is enabled for use with Substrate APIs.
 */
function isIndexedDBEnabledForSubstrateAPIs() {
    return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["_SPFlight"].isEnabled(USE_TIERED_CACHING) && isIndexedDBFlightEnabledForSubstrateAPIs();
}
/**
 * Helper function does flight checks for IndexedDB caching with ODSP APIs
 *
 * @returns true if CortexIndexedDBForOdspExperiment is on or IndexedDBForKm flight is enabled.
 */
function isIndexedDBFlightEnabledForOdspAPIs() {
    return (_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["_SPExperiment"].getVariantAndLogExposure(USE_INDEXED_DB_FOR_ODSP_EXPERIMENT) === 1 ||
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["_SPFlight"].isEnabled(USE_INDEXED_DB_FOR_ODSP_APIS));
}
/**
 * Helper function does flight checks for IndexedDB caching with Substrate APIs
 *
 * @returns true if CortexIndexedDBForSubstrateExperiment is on or CortexIndexedDBForSubstrateAPIs flight is enabled.
 */
function isIndexedDBFlightEnabledForSubstrateAPIs() {
    return (_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["_SPExperiment"].getVariantAndLogExposure(USE_INDEXED_DB_FOR_SUBSTRATE_EXPERIMENT) === 1 ||
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["_SPFlight"].isEnabled(USE_INDEXED_DB_FOR_SUBSTRATE_APIS));
}
/**
 * Check if is running TAB test.
 */
function isRunTAB() {
    return !Object(_common_KillSwitches__WEBPACK_IMPORTED_MODULE_2__["isUseMockForCortexTABTestKSActivated"])() && window.sessionStorage.getItem('isRunTAB') === 'true';
}
/**
 * Returns true if cache flag is active
 */
function isCortexDisabledFlagActive() {
    var _a, _b, _c;
    if (ignoreCortexDisabledFlag()) {
        return false;
    }
    if ((_a = sessionStorage) === null || _a === void 0 ? void 0 : _a.getItem) {
        var expiration = (_b = sessionStorage.getItem(CORTEX_DISABLE_FLAG), (_b !== null && _b !== void 0 ? _b : ''));
        if (expiration) {
            var expirationDate = new Date(expiration);
            if (!isNaN(expirationDate.getTime()) && expirationDate > new Date()) {
                var logTagCortexDisableGetTrue = DISABLED_FLAG_LOG_PREFIX + DISABLED_FLAG_ACTION_GET + DISABLED_FLAG_STATUS_TRUE;
                if (!Object(_common_KillSwitches__WEBPACK_IMPORTED_MODULE_2__["isLogCortexDisabledFlagGetFalseOnceKSActivated"])()) {
                    engamentLogOncePerAction(logTagCortexDisableGetTrue);
                }
                else {
                    _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_0__["_EngagementLogger"].logEvent(logTagCortexDisableGetTrue);
                }
                return true;
            }
            else {
                if ((_c = sessionStorage) === null || _c === void 0 ? void 0 : _c.removeItem) {
                    sessionStorage.removeItem(CORTEX_DISABLE_FLAG);
                    var logTagCortexDisableSetFalse = DISABLED_FLAG_LOG_PREFIX + DISABLED_FLAG_ACTION_SET + DISABLED_FLAG_STATUS_FALSE;
                    if (!Object(_common_KillSwitches__WEBPACK_IMPORTED_MODULE_2__["isLogCortexDisabledFlagGetFalseOnceKSActivated"])()) {
                        engamentLogOncePerAction(logTagCortexDisableSetFalse);
                    }
                    else {
                        _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_0__["_EngagementLogger"].logEvent(logTagCortexDisableSetFalse);
                    }
                }
            }
        }
    }
    var logTagCortexDisableGetFalse = DISABLED_FLAG_LOG_PREFIX + DISABLED_FLAG_ACTION_GET + DISABLED_FLAG_STATUS_FALSE;
    if (!Object(_common_KillSwitches__WEBPACK_IMPORTED_MODULE_2__["isLogCortexDisabledFlagGetFalseOnceKSActivated"])()) {
        engamentLogOncePerAction(logTagCortexDisableGetFalse, Object(_common_KillSwitches__WEBPACK_IMPORTED_MODULE_2__["skipLogEngagementForCortexDisabledKSActivated"])() /* logEngagement */);
    }
    else if (Object(_common_KillSwitches__WEBPACK_IMPORTED_MODULE_2__["skipLogEngagementForCortexDisabledKSActivated"])()) {
        _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_0__["_EngagementLogger"].logEvent(logTagCortexDisableGetFalse);
    }
    return false;
}
function engamentLogOncePerAction(tag, logEngagement) {
    if (logEngagement === void 0) { logEngagement = true; }
    var _a, _b, _c;
    if ((_a = sessionStorage) === null || _a === void 0 ? void 0 : _a.getItem) {
        var lastEngLogged = (_b = sessionStorage.getItem(LAST_CORTEX_DISABLE_FLAG_LOGGED), (_b !== null && _b !== void 0 ? _b : ''));
        if (lastEngLogged !== tag && ((_c = sessionStorage) === null || _c === void 0 ? void 0 : _c.setItem)) {
            if (logEngagement) {
                _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_0__["_EngagementLogger"].logEvent(tag);
            }
            sessionStorage.setItem(LAST_CORTEX_DISABLE_FLAG_LOGGED, tag);
        }
    }
}
/**
 * Return true if the Knowledge Center url is configured
 */
function isKnowledgeCenterUrlConfigured(pageContext) {
    var _a, _b, _c, _d, _e;
    return (((_b = (_a = pageContext) === null || _a === void 0 ? void 0 : _a.knowledgeHubSiteDetails) === null || _b === void 0 ? void 0 : _b.Url) || // tslint:disable-line:no-any
     ((_e = (_d = (_c = pageContext) === null || _c === void 0 ? void 0 : _c.legacyPageContext) === null || _d === void 0 ? void 0 : _d.knowledgeHubSiteDetails) === null || _e === void 0 ? void 0 : _e.Url) // tslint:disable-line:no-any
    );
}
/**
 * Return true if Cortex License is enabled for this tenant.
 */
function isCortexLicenseEnabled(pageContext) {
    var _a, _b, _c;
    return (((_a = pageContext) === null || _a === void 0 ? void 0 : _a.HasCortexTopicExperiencesCapability) || // tslint:disable-line:no-any
     ((_c = (_b = pageContext) === null || _b === void 0 ? void 0 : _b.legacyPageContext) === null || _c === void 0 ? void 0 : _c.HasCortexTopicExperiencesCapability) // tslint:disable-line:no-any
    );
}
/**
 * Return true if the uber Cortex KM experiences flight is enabled
 */
function isCortexFlightEnabled() {
    return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["_SPFlight"].isEnabled(1229); /* CortexKMExperiences = 1229 */
}
/**
 * Return true if we are running in debug with mockApi
 */
function isMock() {
    if (!Object(_common_KillSwitches__WEBPACK_IMPORTED_MODULE_2__["isUseMockTopicDataKSActivated"])() && _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["_SPFlight"].isDebugFlightEnabled) {
        var queryParams = new URL(window.location.href);
        return queryParams.searchParams.get('useMockTopicData') === 'true';
    }
    else {
        return false;
    }
}
/**
 * Return true if we want to ignore cortexDisableFlag
 */
function ignoreCortexDisabledFlag() {
    if (!Object(_common_KillSwitches__WEBPACK_IMPORTED_MODULE_2__["removeCortexDisabledFlagforManagementAPIsKSActivated"])()) {
        var queryParams = new URL(window.location.href);
        return queryParams.searchParams.get('ignoreCortexDisabledFlag') === 'true';
    }
    else {
        return false;
    }
}


/***/ }),

/***/ "TxJm":
/*!************************************************************!*\
  !*** ./lib/dataProviders/SubstrateTopicsDataProviderV2.js ***!
  \************************************************************/
/*! exports provided: SubstrateTopicsDataProviderV2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubstrateTopicsDataProviderV2", function() { return SubstrateTopicsDataProviderV2; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _BaseSubstrateTopicDataProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BaseSubstrateTopicDataProvider */ "53ge");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _common_Constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/Constants */ "rMgv");
/**
 * @copyright Microsoft Corporation. All rights reserved.
 */




/**
 * V2 Makes all table API calls in POST form instead of GET form like in V1
 *
 * @internal
 */
var SubstrateTopicsDataProviderV2 = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(SubstrateTopicsDataProviderV2, _super);
    function SubstrateTopicsDataProviderV2(serviceScope, requestType) {
        var _this = _super.call(this, serviceScope, false /* willSetCortexDisableFlag */) || this;
        _this._requestType = requestType;
        return _this;
    }
    /**
     * @internal
     */
    SubstrateTopicsDataProviderV2.prototype.getTopics = function (count, skipToken, name, orderBy, orderByDesc) {
        var _this = this;
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__["Validate"].isNotNullOrUndefined(count, 'count');
        this._count = count;
        this._skipToken = skipToken;
        this._name = name;
        this._orderBy = orderBy;
        this._orderByDesc = orderByDesc;
        var params = '';
        return this.getRequest(params).then(function (response) {
            var _a;
            response.correlationId = (_a = _this.correlationId, (_a !== null && _a !== void 0 ? _a : ''));
            return response;
        });
    };
    Object.defineProperty(SubstrateTopicsDataProviderV2.prototype, "apiName", {
        /**
         * Set API name to call Confirmed branch
         */
        get: function () {
            return 'Topics/Managed';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SubstrateTopicsDataProviderV2.prototype, "qosTag", {
        get: function () {
            return this._requestType;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SubstrateTopicsDataProviderV2.prototype, "isPost", {
        /**
         * Determines whether API call should be made a GET or POST
         */
        get: function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    SubstrateTopicsDataProviderV2.prototype.getCustomRequestOptions = function (options) {
        options.headers['X-ODataQuery'] = 'true';
        options.headers['accept'] = 'application/json'; // tslint:disable-line:no-string-literal
        var payload = {
            Size: this._count,
            ManagedTopicState: this._requestType
        };
        if (this._skipToken) {
            payload.From = this._skipToken;
        }
        if (this._name) {
            payload.TopicNameStartsWith = this._name;
        }
        if (this._orderBy) {
            payload.Sort = {
                Field: this._orderBy,
                Direction: this._orderByDesc ? _common_Constants__WEBPACK_IMPORTED_MODULE_3__["default"].descending : _common_Constants__WEBPACK_IMPORTED_MODULE_3__["default"].ascending
            };
        }
        options.body = JSON.stringify(payload);
    };
    return SubstrateTopicsDataProviderV2;
}(_BaseSubstrateTopicDataProvider__WEBPACK_IMPORTED_MODULE_1__["default"]));



/***/ }),

/***/ "UWqr":
/*!*********************************************!*\
  !*** external "@microsoft/sp-core-library" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_UWqr__;

/***/ }),

/***/ "Un9N":
/*!********************************************!*\
  !*** ./lib/baseKMWebPart/BaseKMWebPart.js ***!
  \********************************************/
/*! exports provided: BaseKMWebPart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseKMWebPart", function() { return BaseKMWebPart; });
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
/* harmony import */ var _microsoft_sp_webpart_base__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @microsoft/sp-webpart-base */ "br4S");
/* harmony import */ var _microsoft_sp_webpart_base__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_webpart_base__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ms/sp-component-utilities */ "hiL/");
/* harmony import */ var _ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _common_Constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/Constants */ "rMgv");
/* harmony import */ var _common_KillSwitches__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../common/KillSwitches */ "+ORw");
/* harmony import */ var _dataProviders_AggregatedTopicEntityDataProvider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../dataProviders/AggregatedTopicEntityDataProvider */ "DnL5");
/* harmony import */ var _BaseKMContainer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./BaseKMContainer */ "mABa");
/* harmony import */ var _dataProviders__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../dataProviders */ "jrLr");
/* harmony import */ var _TopicUtilities__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../TopicUtilities */ "mAUd");

// Copyright (c) Microsoft. All rights reserved.












// The relation count here should be not less than the maximum value of display limit item counts
// in people && resource web part.
// People web part: CARD_LIMIT = 8; CARD_LIMIT_IN_MOBILE_VIEW = 4;
// Resources web part: ROW_LIMIT = 10;
var DEFAULT_RELATION_COUNT = 10;
var MAX_RELATION_COUNT = 50;
/**
 * This abstract class implements the the base functionality for Knowledge management Cortex web parts.
 * @internal
 */
var BaseKMWebPart = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(BaseKMWebPart, _super);
    function BaseKMWebPart(props) {
        var _this = _super.call(this) || this;
        /**
         * @returns max relation count
         */
        _this.requestMaximumRelations = function () {
            if (!_this._hasGotMaximumRelations) {
                _this._hasGotMaximumRelations = true;
                return _this._updateEntity(MAX_RELATION_COUNT).then(function () { return MAX_RELATION_COUNT; });
            }
            return Promise.resolve(MAX_RELATION_COUNT);
        };
        _this._logRenderError = function (error) {
            _this._renderQosMonitor.writeUnexpectedFailure('FailedToRender', error, _this._extraQosData);
        };
        _this._logRenderSuccess = function () {
            _this._renderQosMonitor.writeSuccess(_this._extraQosData);
        };
        _this._handleTopicLoaded = function (_a) {
            var topic = _a.topic;
            if (!Object(_common_KillSwitches__WEBPACK_IMPORTED_MODULE_8__["fixSuggestedContentLoadKSActivated"])() && topic && topic.Id !== _this.topicId) {
                // skip events that not belong to current topic
                return;
            }
            try {
                _this.isSuggestedDataLoaded = true;
                BaseKMWebPart._currentTopicEntity = topic;
                if (topic || !Object(_common_KillSwitches__WEBPACK_IMPORTED_MODULE_8__["isShowSuggestedDefinitionKSActivated"])()) {
                    _this._feedSuggestedDataToWebPart(topic);
                }
            }
            catch (error) {
                if (!Object(_common_KillSwitches__WEBPACK_IMPORTED_MODULE_8__["triggerRenderFailureLogKSActivated"])()) {
                    _this._logRenderError(error);
                    _this.renderCompleted(error);
                }
            }
        };
        _this._handleRenderError = function (error) {
            _super.prototype.renderError.call(_this, error);
        };
        return _this;
    }
    BaseKMWebPart.prototype.render = function () {
        var _this = this;
        if (!this.isUseBaseKMContainer()) {
            return;
        }
        this.onUpdateAccessibleTitle();
        var container = react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_BaseKMContainer__WEBPACK_IMPORTED_MODULE_10__["BaseKMContainer"], {
            contentElement: this.contentElement,
            webPartTag: this.qosPrefix,
            isSuggestedDataLoaded: this.isSuggestedDataLoaded,
            isReadyToCompleteRender: this.isReadyToCompleteRender(),
            asyncRenderCompleted: function () { return _this.renderCompleted(); },
            onCatchError: this._handleRenderError,
            logRenderSuccess: this._logRenderSuccess,
            logRenderError: this._logRenderError
        });
        if (this.webPartContext) {
            react_dom__WEBPACK_IMPORTED_MODULE_2__["render"](react__WEBPACK_IMPORTED_MODULE_1__["createElement"](this.webPartContext.Provider, { value: this.webPartContextData }, container), this.domElement);
        }
        else {
            react_dom__WEBPACK_IMPORTED_MODULE_2__["render"](container, this.domElement);
        }
    };
    Object.defineProperty(BaseKMWebPart.prototype, "webPartContext", {
        /**
         * This API provides way for web part to pass extra React.Context to sub elements
         */
        // tslint:disable-next-line: no-any
        get: function () {
            return undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseKMWebPart.prototype, "webPartContextData", {
        /**
         * This API specifies extra data for React.Context
         */
        // tslint:disable-next-line: no-any
        get: function () {
            return undefined;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * This API returns flag that tells web part to call onRenderComplete
     */
    BaseKMWebPart.prototype.isReadyToCompleteRender = function () {
        return !this.isRenderAsync || this.isSuggestedDataLoaded;
    };
    BaseKMWebPart.prototype.onInit = function () {
        if (!Object(_common_KillSwitches__WEBPACK_IMPORTED_MODULE_8__["triggerRenderFailureLogKSActivated"])()) {
            this._renderQosMonitor = new _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_4__["_QosMonitor"](this.qosPrefix + ".ComponentRender");
        }
        this._registerTopicLoadedEventListener();
        return _super.prototype.onInit.call(this);
    };
    BaseKMWebPart.prototype.onBeforeSerialize = function () {
        this.onUpdateEntityRelations();
        _super.prototype.onBeforeSerialize.call(this);
    };
    BaseKMWebPart.prototype.onDispose = function () {
        _super.prototype.onDispose.call(this);
        BaseKMWebPart._currentTopicEntity = undefined;
        BaseKMWebPart._afterLoadSuggestedListeners.clear();
        this._unregisterTopicLoadedSPEventListeners();
    };
    /**
     * This API returns current topic entity containing suggested fields returned by knowledge management base API
     */
    BaseKMWebPart.prototype.getCurrentTopicEntity = function () {
        if (BaseKMWebPart._currentTopicEntity) {
            return Promise.resolve(BaseKMWebPart._currentTopicEntity);
        }
        return this.requestTopicEntity();
    };
    BaseKMWebPart.prototype.requestTopicEntity = function (relationCount) {
        if (relationCount === void 0) { relationCount = this.initialRelationCount; }
        if (this.topicId && this.topicId.length > 0 && this.topicId !== _ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_6__["NULL_TOPIC_ENTITY"].Id) {
            // in case data provider is called before onInit
            this._initTopicEntityDataProvider();
            return this._aggregatedTopicEntityDataProvider.fetchTopicEntity(this.topicId, true, relationCount);
        }
        else {
            return Promise.resolve(undefined);
        }
    };
    /**
     * Update the accessible title text in accessible div.
     */
    BaseKMWebPart.prototype.onUpdateAccessibleTitle = function () {
        if (this.displayMode === _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_3__["DisplayMode"].Edit) {
            var accessibleContext = this.accessibleTitle || this._getDefaultAccessibleTitle();
            if (accessibleContext) {
                var contextualLabelId = "cswpAccessibleLabelContextual_" + this.context.instanceId;
                var accessibleDiv = this.domElement.querySelector("#" + contextualLabelId);
                if (accessibleDiv && accessibleDiv.textContent !== accessibleContext) {
                    accessibleDiv.textContent = accessibleContext;
                }
            }
        }
    };
    Object.defineProperty(BaseKMWebPart.prototype, "shouldUseSubstrateMSAIAPI", {
        get: function () {
            return Object(_dataProviders__WEBPACK_IMPORTED_MODULE_11__["useSubstrateApiWhenGettingTopicEntity"])();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseKMWebPart.prototype, "isRenderAsync", {
        get: function () {
            return !Object(_common_KillSwitches__WEBPACK_IMPORTED_MODULE_8__["makeTopicWebpartsAsyncKSActivated"])();
        },
        enumerable: true,
        configurable: true
    });
    BaseKMWebPart.prototype.isTopicPreviewPage = function () {
        return Object(_TopicUtilities__WEBPACK_IMPORTED_MODULE_12__["isPreviewPage"])();
    };
    Object.defineProperty(BaseKMWebPart.prototype, "topicDataService", {
        get: function () {
            if (!this._topicDataService) {
                this._topicDataService = this.context.serviceScope.consume(_ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_6__["TopicDataService"].serviceKey);
            }
            return this._topicDataService;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseKMWebPart.prototype, "initialRelationCount", {
        get: function () {
            return !_common_Constants__WEBPACK_IMPORTED_MODULE_7__["isMobileView"] ? DEFAULT_RELATION_COUNT : MAX_RELATION_COUNT;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseKMWebPart.prototype, "topicId", {
        get: function () {
            var _a;
            return (_a = this.topicDataService.currentTopicEntity) === null || _a === void 0 ? void 0 : _a.Id;
        },
        enumerable: true,
        configurable: true
    });
    BaseKMWebPart.prototype.isUseBaseKMContainer = function () {
        return !Object(_common_KillSwitches__WEBPACK_IMPORTED_MODULE_8__["useBaseKMContainerKSActivated"])();
    };
    BaseKMWebPart.prototype._feedSuggestedDataToWebPart = function (entity) {
        if (!Object(_common_KillSwitches__WEBPACK_IMPORTED_MODULE_8__["fixUndoRedoForSuggestedItemsKSActivated"])()) {
            var suggestedItems = entity
                ? this.getSuggestedItemsFromTopicEntity(entity)
                : undefined;
            this.onAfterLoadSuggested(suggestedItems);
            this.render();
        }
        else {
            this.onAfterLoadSuggested(entity && this.getSuggestedItemsFromTopicEntity(entity));
        }
    };
    BaseKMWebPart.prototype._updateEntity = function (relationCount) {
        var _this = this;
        return this.requestTopicEntity(relationCount).then(function (entity) {
            _this.topicDataService.currentTopicEntity = entity;
            _this._feedSuggestedDataToWebPart(entity);
        });
    };
    BaseKMWebPart.prototype._initTopicEntityDataProvider = function () {
        if (this._aggregatedTopicEntityDataProvider) {
            return;
        }
        this._aggregatedTopicEntityDataProvider = new _dataProviders_AggregatedTopicEntityDataProvider__WEBPACK_IMPORTED_MODULE_9__["AggregatedTopicEntityDataProvider"](this.context.serviceScope, this.qosPrefix);
    };
    Object.defineProperty(BaseKMWebPart.prototype, "_extraQosData", {
        get: function () {
            return {
                isSuggestedDataLoaded: this.isSuggestedDataLoaded
            };
        },
        enumerable: true,
        configurable: true
    });
    BaseKMWebPart.prototype._unregisterTopicLoadedSPEventListeners = function () {
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_3__["_SPEventManager"].instance.unregisterEvent(_common_Constants__WEBPACK_IMPORTED_MODULE_7__["default"].currentTopicLoadedEvent, this, this._handleTopicLoaded);
    };
    BaseKMWebPart.prototype._registerTopicLoadedEventListener = function () {
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_3__["_SPEventManager"].instance.registerEvent(_common_Constants__WEBPACK_IMPORTED_MODULE_7__["default"].currentTopicLoadedEvent, this, this._handleTopicLoaded);
    };
    BaseKMWebPart._afterLoadSuggestedListeners = new Map();
    return BaseKMWebPart;
}(_microsoft_sp_webpart_base__WEBPACK_IMPORTED_MODULE_5__["BaseClientSideWebPart"]));



/***/ }),

/***/ "WGsJ":
/*!*************************************************************************!*\
  !*** ../sp-dataproviders/lib/dataProviders/common/TieredCacheHelper.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/**
 * @copyright Microsoft Corporation. All rights reserved.
 */

/**
 * Processes the response result to TProcessed if it is needed
 * @param response the response
 * @param isRawData the callback to test if the response data needs to be processed
 * @param processRawData the callback to process the rawData
 * @param args extra args to process the raw data
 * @internal
 */
var TieredCacheHelper = /** @class */ (function () {
    function TieredCacheHelper() {
    }
    TieredCacheHelper.processResponseRawData = function (response, isRawData, processRawData) {
        var args = []; // tslint:disable-line:no-any
        for (var _i = 3 // tslint:disable-line:no-any
        ; _i < arguments.length // tslint:disable-line:no-any
        ; _i++ // tslint:disable-line:no-any
        ) {
            args[_i - 3] = arguments[_i]; // tslint:disable-line:no-any
        }
        return response.then(function (data) {
            return isRawData(data) ? processRawData.apply(void 0, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])([data], args)) : data;
        });
    };
    TieredCacheHelper.useStalePropName = 'useStale';
    TieredCacheHelper.parentKeyOverride = 'parentKeyOverride';
    TieredCacheHelper.onlyIndexedDB = 'onlyIndexedDB';
    TieredCacheHelper.onlyMySiteCache = 'onlyMySiteCache';
    return TieredCacheHelper;
}());
/* harmony default export */ __webpack_exports__["default"] = (TieredCacheHelper);


/***/ }),

/***/ "Wl6u":
/*!***************************************!*\
  !*** ./lib/dataProviders/HttpCode.js ***!
  \***************************************/
/*! exports provided: HttpCode, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpCode", function() { return HttpCode; });
/**
 * @Copyright (c) Microsoft Corporation.  All rights reserved.
 */
var HttpCode;
(function (HttpCode) {
    HttpCode[HttpCode["BadRequest"] = 400] = "BadRequest";
    HttpCode[HttpCode["Conflict"] = 409] = "Conflict";
    HttpCode[HttpCode["Forbidden"] = 403] = "Forbidden";
    HttpCode[HttpCode["NotFound"] = 404] = "NotFound";
    HttpCode[HttpCode["NotAcceptable"] = 406] = "NotAcceptable";
    HttpCode[HttpCode["ServerError"] = 500] = "ServerError";
    HttpCode[HttpCode["RequestEntityTooLarge"] = 413] = "RequestEntityTooLarge";
    HttpCode[HttpCode["NotImplemented"] = 501] = "NotImplemented";
})(HttpCode || (HttpCode = {}));
/* harmony default export */ __webpack_exports__["default"] = (HttpCode);


/***/ }),

/***/ "X+PM":
/*!*********************************************!*\
  !*** external "@microsoft/sp-page-context" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_X_PM__;

/***/ }),

/***/ "XJVB":
/*!**************************************!*\
  !*** ./lib/utilities/topicOrigin.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return topicOrigin; });
/* harmony import */ var _common_Constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/Constants */ "rMgv");
/**
 * @copyright Microsoft Corporation. All rights reserved.
 */

/**
 * Getting the origin of the topic. In the form of `AL` for Alexandria or
 * `Yukon` for Yukon as named. It gets this by stripping it out of the topicId.
 *
 * @param topicId - Id of the topic.
 * @internal
 */
function topicOrigin(topicId) {
    var _a;
    return ((_a = topicId) === null || _a === void 0 ? void 0 : _a.split(_common_Constants__WEBPACK_IMPORTED_MODULE_0__["TOPIC_ID_ORIGIN_BREAKER"])[0]) || '';
}


/***/ }),

/***/ "YC7o":
/*!******************************************!*\
  !*** ./lib/common/EmptyResponseError.js ***!
  \******************************************/
/*! exports provided: EmptyResponseError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmptyResponseError", function() { return EmptyResponseError; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/**
 * @Copyright Microsoft Corporation. All rights reserved.
 */

/**
 * @public
 */
var EmptyResponseError = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(EmptyResponseError, _super);
    function EmptyResponseError(message) {
        var _this = _super.call(this, message) || this;
        // Manually set the prototype, as we can no longer extend built-in classes like Error, Array, Map, etc
        // tslint:disable-next-line:max-line-length
        // [https://github.com/Microsoft/TypeScript-wiki/blob/master/Breaking-Changes.md#extending-built-ins-like-error-array-and-map-may-no-longer-work](https://github.com/Microsoft/TypeScript-wiki/blob/master/Breaking-Changes.md#extending-built-ins-like-error-array-and-map-may-no-longer-work)
        //
        // Note: the prototype must also be set on any classes which extend this one
        _this.__proto__ = EmptyResponseError.prototype; // tslint:disable-line:no-any
        return _this;
    }
    return EmptyResponseError;
}(Error));



/***/ }),

/***/ "YbI0":
/*!**************************************************************!*\
  !*** ./lib/topicCard/deferredTopicCard/DeferredTopicCard.js ***!
  \**************************************************************/
/*! exports provided: DeferredTopicCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeferredTopicCard", function() { return DeferredTopicCard; });
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
/* harmony import */ var _common_Constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/Constants */ "rMgv");
/* harmony import */ var _common_KillSwitches__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../common/KillSwitches */ "+ORw");
/* harmony import */ var _TopicUtilities__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../TopicUtilities */ "mAUd");
/* harmony import */ var _KillSwitches__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../KillSwitches */ "LSGH");
/* harmony import */ var _topicCache_TopicCache__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../topicCache/TopicCache */ "NG/M");
/**
 * @copyright (c) Microsoft Corporation.  All rights reserved.
 */










/**
 * Defer loaded topic card component
 * @internal
 */
var DeferredTopicCard = /** @class */ (function () {
    function DeferredTopicCard(props) {
        var _this = this;
        this.closeTopicCard = function () {
            if (_this._topicCard) {
                _this._topicCard.setFutureTopicId('');
            }
        };
        this._getTopicCardProps = function () { return ({
            knowledgeHubUrl: _this._props.pageContext.legacyPageContext.knowledgeHubUrl,
            tryGetTopicInfo: _this._getTopicInfo,
            getCurrentTopicFromCache: _this._getCurrentTopicFromCache,
            setCurrentTopicInCache: _this._setCurrentTopicInCache,
            serviceScope: _this._props.serviceScope,
            getSPOId: _this._getSPOId,
            removeAnnotation: _this._removeAnnotation,
            shouldLinksOpenInNewTab: !Object(_KillSwitches__WEBPACK_IMPORTED_MODULE_8__["shouldLinksOpenInNewTabKSActivated"])() && _this._props.shouldLinksOpenInNewTab
        }); };
        this._getTopicInfo = function (topicId) {
            return _this._topicCache.tryGet(topicId);
        };
        this._getCurrentTopicFromCache = function () { return _this._topicCache.currentTopic; };
        this._setCurrentTopicInCache = function (topic) {
            _this._topicCache.currentTopic = topic;
        };
        this._getSPOId = function () {
            var _a, _b, _c;
            return ({
                siteId: (_a = _this._props.pageContext.site) === null || _a === void 0 ? void 0 : _a.id,
                webId: (_b = _this._props.pageContext.web) === null || _b === void 0 ? void 0 : _b.id,
                listId: (_c = _this._props.pageContext.list) === null || _c === void 0 ? void 0 : _c.id,
                uniqueId: _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_3__["Guid"].tryParse(_this._pageUniqueId)
            });
        };
        /**
         * Removes listeners and styling from the html tag associated with an annotation highlight.
         * @param targetElement - the html element representing the highlight to be removed.
         */
        this._removeAnnotation = function (targetElement) { var _a, _b; return (_b = (_a = _this._props).onRemoveAnnotation) === null || _b === void 0 ? void 0 : _b.call(_a, targetElement); };
        /**
         * Dispose the Topic card
         */
        this._dispose = function () {
            window.removeEventListener('unload', _this._dispose);
            var topicCardElement = window.document.body.querySelector(_common_Constants__WEBPACK_IMPORTED_MODULE_5__["default"].kmTopicCardAttribute);
            if (topicCardElement) {
                topicCardElement.remove
                    ? topicCardElement.remove()
                    : topicCardElement.parentElement.removeChild(topicCardElement);
            }
        };
        this._props = props;
    }
    DeferredTopicCard.getInstance = function (props) {
        if (!DeferredTopicCard._instance) {
            DeferredTopicCard._instance = new DeferredTopicCard(props);
        }
        return DeferredTopicCard._instance;
    };
    /**
     * Load the Topic card. As per the current implementation we load a singleton instance
     *  of the Topic card on the browser window object. i.e. In-app transtion of pages will
     *  not result in re-rendering of the Topic card. There is a single instance for the whole
     *  page.
     */
    DeferredTopicCard.prototype.loadTopicCard = function () {
        var _this = this;
        if (!this._rendered) {
            this._rendered = new Promise(function (resolve) {
                _this._onAfterRendered = resolve;
            });
            Promise.all([this._import(), this._setPageUniqueId()])
                .then(function () {
                setTimeout(function () {
                    _this._renderTopicCard();
                });
            })
                .catch(function (error) {
                _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_4__["_TraceLogger"].logError(DeferredTopicCard._logSource, error);
            });
        }
    };
    DeferredTopicCard.prototype.showTopicCard = function (topicId, target, linkSource, hideFeedback) {
        var _this = this;
        if (hideFeedback === void 0) { hideFeedback = false; }
        if (this._topicCard) {
            this._topicCard.setFutureTopicId(topicId);
            setTimeout(function () {
                var _a;
                (_a = _this._topicCard) === null || _a === void 0 ? void 0 : _a.setElement(target, linkSource, hideFeedback);
            }, 200);
        }
    };
    DeferredTopicCard.prototype._import = function () {
        var _this = this;
        return Promise.all(/*! import() | sp-topic-shared-topic-card */[__webpack_require__.e("vendors~sp-topic-shared-topic-card"), __webpack_require__.e("sp-topic-shared-topic-card")]).then(__webpack_require__.bind(null, /*! ./TopicCardBundle */ "pWas")).then(function (modules) {
            _this._topicCardBundle = modules;
            if (!Object(_common_KillSwitches__WEBPACK_IMPORTED_MODULE_6__["exposeTopicCacheKsActivated"])()) {
                _this._topicCache = _topicCache_TopicCache__WEBPACK_IMPORTED_MODULE_9__["TopicCache"].getInstance(_this._props.serviceScope);
            }
            else {
                _this._topicCache = modules.TopicCache.getInstance(_this._props.serviceScope);
            }
            return modules.TopicCard;
        });
    };
    DeferredTopicCard.prototype._setPageUniqueId = function () {
        var _this = this;
        return Object(_TopicUtilities__WEBPACK_IMPORTED_MODULE_7__["getPageUniqueId"])(this._props.serviceScope, 'CSIKM.DeferredTopicCard.setPageUniqueId').then(function (uniqueId) {
            _this._pageUniqueId = uniqueId;
        });
    };
    DeferredTopicCard.prototype._renderTopicCard = function () {
        var _this = this;
        var pickerElement = document.createElement('div');
        pickerElement.setAttribute(_common_Constants__WEBPACK_IMPORTED_MODULE_5__["default"].kmTopicCardAttribute, 'true');
        window.document.body.appendChild(pickerElement);
        var el = react__WEBPACK_IMPORTED_MODULE_1__["createElement"](this._topicCardBundle.TopicCard, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ ref: function (element) {
                // In some interesting race conditions, this code gets called again with a null value.
                // This is a guard to make sure that the topic card instance is not reset to null.
                if (!_this._topicCard && element) {
                    _this._topicCard = element;
                }
            } }, this._getTopicCardProps()));
        this._onAfterRendered();
        // Dispose/Detach the Topic card on window unload
        window.addEventListener('unload', this._dispose);
        react_dom__WEBPACK_IMPORTED_MODULE_2__["render"](el, pickerElement); // as DeferredTopicCardCallout;
    };
    Object.defineProperty(DeferredTopicCard.prototype, "topicCard", {
        get: function () {
            return this._topicCard;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DeferredTopicCard.prototype, "rendered", {
        get: function () {
            return this._rendered;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DeferredTopicCard.prototype, "topicCache", {
        get: function () {
            return this._topicCache;
        },
        enumerable: true,
        configurable: true
    });
    DeferredTopicCard._logSource = _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_4__["_LogSource"].create('DeferredTopicCard');
    return DeferredTopicCard;
}());



/***/ }),

/***/ "Z8sV":
/*!********************************************************!*\
  !*** ./lib/components/DeferredCreateNewTopicDialog.js ***!
  \********************************************************/
/*! exports provided: LazyCreateNewTopicDialog, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LazyCreateNewTopicDialog", function() { return LazyCreateNewTopicDialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DeferredCreateNewTopicDialog; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/**
 * @copyright Microsoft Corporation. All rights reserved.
 */


// tslint:disable-next-line: variable-name
var LazyCreateNewTopicDialog = react__WEBPACK_IMPORTED_MODULE_1__["lazy"](function () {
    return Promise.all(/*! import() | topic-shared-create-new-topic-dialog */[__webpack_require__.e("vendors~topic-shared-create-new-topic-dialog"), __webpack_require__.e("topic-shared-create-new-topic-dialog")]).then(__webpack_require__.bind(null, /*! ./CreateNewTopicDialog */ "/G8a"));
});
/**
 * @internal
 */
function DeferredCreateNewTopicDialog(props) {
    return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Suspense"], { fallback: react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null) },
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](LazyCreateNewTopicDialog, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, props))));
}


/***/ }),

/***/ "aj7r":
/*!************************************!*\
  !*** ./lib/utilities/cleanGuid.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return cleanGuid; });
/**
 * @internal
 */
function cleanGuid(guid) {
    return guid.toLowerCase().replace(/[{}]/g, '');
}


/***/ }),

/***/ "br4S":
/*!*********************************************!*\
  !*** external "@microsoft/sp-webpart-base" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_br4S__;

/***/ }),

/***/ "c2YK":
/*!************************************************************!*\
  !*** ./lib/dataProviders/SubstrateFeedbackDataProvider.js ***!
  \************************************************************/
/*! exports provided: SubstrateFeedbackDataProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubstrateFeedbackDataProvider", function() { return SubstrateFeedbackDataProvider; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _BaseSubstrateTopicDataProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BaseSubstrateTopicDataProvider */ "53ge");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__);
/**
 * @copyright Microsoft Corporation. All rights reserved.
 */



/**
 * API for confirming various topics
 *
 * @public
 */
var SubstrateFeedbackDataProvider = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(SubstrateFeedbackDataProvider, _super);
    function SubstrateFeedbackDataProvider(serviceScope, feedbackType) {
        var _this = this;
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__["Validate"].isNotNullOrUndefined(serviceScope, 'serviceScope');
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__["Validate"].isNotNullOrUndefined(feedbackType, 'feedbackType');
        _this = _super.call(this, serviceScope, false /* willSetCortexDisableFlag */) || this;
        _this._topics = [];
        _this._feedbackType = feedbackType;
        return _this;
    }
    Object.defineProperty(SubstrateFeedbackDataProvider.prototype, "apiEndpoint", {
        /**
         * Use a separate endpoint for Annotations API by recommendation from MSAI
         */
        get: function () {
            return 'DWEngineV2/api/v1.0/KnowledgeManagement';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SubstrateFeedbackDataProvider.prototype, "apiName", {
        /**
         * Set API name to call Confirm endpoint
         */
        get: function () {
            return "Topics/" + this._feedbackType;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SubstrateFeedbackDataProvider.prototype, "qosTag", {
        get: function () {
            return this._feedbackType;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SubstrateFeedbackDataProvider.prototype, "isPost", {
        /**
         * Return true - We want to use POST
         */
        get: function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @public
     */
    SubstrateFeedbackDataProvider.prototype.provideFeedback = function (topics) {
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__["Validate"].isNotNullOrUndefined(topics, 'topics');
        this._topics = topics.map(function (topic) {
            return {
                Id: topic.Id,
                Name: topic.Name
            };
        });
        return this.getRequest();
    };
    /**
     * Set up body for request
     */
    SubstrateFeedbackDataProvider.prototype.getCustomRequestOptions = function (options) {
        options.body = JSON.stringify({ Topics: this._topics });
    };
    return SubstrateFeedbackDataProvider;
}(_BaseSubstrateTopicDataProvider__WEBPACK_IMPORTED_MODULE_1__["default"]));



/***/ }),

/***/ "cDcd":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_cDcd__;

/***/ }),

/***/ "cJNI":
/*!***********************************************************!*\
  !*** ./lib/components/DeferredTopicAssociationCallout.js ***!
  \***********************************************************/
/*! exports provided: LazyTopicAssociationCallout, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LazyTopicAssociationCallout", function() { return LazyTopicAssociationCallout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DeferredTopicAssociationCallout; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/**
 * @copyright Microsoft Corporation. All rights reserved.
 */


// tslint:disable-next-line: variable-name
var LazyTopicAssociationCallout = react__WEBPACK_IMPORTED_MODULE_1__["lazy"](function () {
    return __webpack_require__.e(/*! import() | topic-shared-topic-association-callout */ "topic-shared-topic-association-callout").then(__webpack_require__.bind(null, /*! ./TopicAssociationCallout */ "SACp"));
});
/**
 * @internal
 */
function DeferredTopicAssociationCallout(props) {
    return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Suspense"], { fallback: react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null) },
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](LazyTopicAssociationCallout, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, props))));
}


/***/ }),

/***/ "dGYT":
/*!************************************************!*\
  !*** ./lib/dataProviders/TokenDataProvider.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _microsoft_sp_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/sp-http */ "vlQI");
/* harmony import */ var _microsoft_sp_http__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_http__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @microsoft/sp-diagnostics */ "ut3N");
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Constants */ "oUEy");
/**
 * @copyright Microsoft Corporation. All rights reserved.
 */




/**
 * Class to fetch STI tokens for the MSAI DWEngine endpoint.
 */
var TokenDataProvider = /** @class */ (function () {
    function TokenDataProvider(serviceScope, pageContext) {
        var _this = this;
        if (_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Environment"].type !== _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["EnvironmentType"].Local) {
            this._pageContext = pageContext;
            serviceScope.whenFinished(function () {
                _this._tokenProvider = serviceScope.consume(_microsoft_sp_http__WEBPACK_IMPORTED_MODULE_1__["OAuthTokenProvider"].serviceKey);
            });
        }
    }
    /**
     * Fetches the oauth token for a resource if the user that's currently logged in has access
     * to that resource. Fetches the oAuth STI token using Acquire SharePoint endpoint.
     *
     * @param endPoint the resource for which the token should be obtained
     */
    TokenDataProvider.prototype.getOAuthToken = function (endPoint) {
        var qosMonitor = new _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__["_QosMonitor"](_Constants__WEBPACK_IMPORTED_MODULE_3__["QOS_SUBSTRATE_API_PREFIX"] + ".STITokenFetch.getOAuthToken");
        return this._tokenProvider
            .getOAuthToken(endPoint, this._pageContext.web.serverRelativeUrl, 'STI')
            .then(function (response) {
            qosMonitor.writeSuccess();
            return response.token;
        })
            .catch(function (error) {
            qosMonitor.writeUnexpectedFailure('FailedToGetOAuthToken', error);
            return Promise.reject(error);
        });
    };
    return TokenDataProvider;
}());
/* harmony default export */ __webpack_exports__["default"] = (TokenDataProvider);


/***/ }),

/***/ "faye":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_faye__;

/***/ }),

/***/ "h0Ut":
/*!**************************************************************************!*\
  !*** ../sp-dataproviders/lib/dataProviders/DataProvidersKillSwitches.js ***!
  \**************************************************************************/
/*! exports provided: isTopicSuggestionsTieredCachingKSActivated, stopUsingSPHttpMSClient, removeLeadingANDInMultilingualKQLKSActive */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isTopicSuggestionsTieredCachingKSActivated", function() { return isTopicSuggestionsTieredCachingKSActivated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stopUsingSPHttpMSClient", function() { return stopUsingSPHttpMSClient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeLeadingANDInMultilingualKQLKSActive", function() { return removeLeadingANDInMultilingualKQLKSActive; });
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__);
// @copyright Microsoft Corporation. All rights reserved.

function isTopicSuggestionsTieredCachingKSActivated() {
    return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPKillSwitch"].isActivated('040e5812-ee72-430b-93d9-42b62ff8ce13'
    /* '10/15/2020', 'Use tiered caching feature for topic suggestions API requests' */
    );
}
function stopUsingSPHttpMSClient() {
    return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPKillSwitch"].isActivated('14b96c7e-3dcc-42e8-8a42-f56091d1f9f3' /* '10/14/2020', 'stop using SPHttpMicroserviceClient when KS is active' */);
}
function removeLeadingANDInMultilingualKQLKSActive() {
    // remove KS in KQLQueryBuilder.test.ts
    return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPKillSwitch"].isActivated('83c7fd57-b124-44b5-98c9-19fbfa5e8826' /* '12/28/2020', 'correct AND operator inside multilingual query parentheses' */);
}


/***/ }),

/***/ "h4Yq":
/*!******************************************!*\
  !*** ./lib/dataProviders/Translators.js ***!
  \******************************************/
/*! exports provided: translateResources, translateDoc, translatePeople, translatePerson, translateSite, translateSiteMetadata, translateSubstrateTopicEntity, translateSubstrateAnnotationResponse, translateSubstrateSuggestionSearchAPIResponse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "translateResources", function() { return translateResources; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "translateDoc", function() { return translateDoc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "translatePeople", function() { return translatePeople; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "translatePerson", function() { return translatePerson; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "translateSite", function() { return translateSite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "translateSiteMetadata", function() { return translateSiteMetadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "translateSubstrateTopicEntity", function() { return translateSubstrateTopicEntity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "translateSubstrateAnnotationResponse", function() { return translateSubstrateAnnotationResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "translateSubstrateSuggestionSearchAPIResponse", function() { return translateSubstrateSuggestionSearchAPIResponse; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_KillSwitches__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/KillSwitches */ "+ORw");
/* harmony import */ var _utilities_cleanGuid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utilities/cleanGuid */ "aj7r");
/**
 * @copyright (c) Microsoft Corporation. All rights reserved.
 *
 * Translators to convert responses from substrate APIs to SPDF cortex APIs
 */



/**
 * @internal
 */
function translateResources(topic) {
    var resources = topic.RelatedResourcesMap;
    var docs = [];
    resources.forEach(function (entry) {
        if (entry.Key === 'File') {
            docs = entry.Value;
        }
    });
    return docs
        ? docs.map(function (r) {
            return translateDoc(r);
        })
        : [];
}
/**
 * @internal
 */
function translateDoc(doc) {
    var _a;
    return {
        DepartmentId: doc.DepartmentId,
        GroupId: doc.GroupId,
        LastModifiedTime: doc.LastModifiedTime,
        Title: doc.Title,
        // Using FilePath because we need the file type to render the icon and full path for file picker.
        Url: doc.FilePath,
        WebviewUrl: doc.Url,
        SiteId: Object(_utilities_cleanGuid__WEBPACK_IMPORTED_MODULE_2__["default"])(doc.SiteId),
        WebId: Object(_utilities_cleanGuid__WEBPACK_IMPORTED_MODULE_2__["default"])(doc.WebId),
        UniqueId: Object(_utilities_cleanGuid__WEBPACK_IMPORTED_MODULE_2__["default"])(doc.UniqueId),
        State: doc.State,
        ViewCount: doc.ViewCount,
        Modifier: doc.LastModifier
            ? {
                Email: doc.LastModifier.EmailAddress,
                Name: doc.LastModifier.DisplayName,
                OId: doc.LastModifier.ObjectId,
                Upn: doc.LastModifier.UserPrincipalName
            }
            : undefined,
        AIReason: {
            ReasonType: doc.AIReason && doc.AIReason.ReasonType ? doc.AIReason.ReasonType : '',
            TopicMentionsCount: (_a = doc.AIReason) === null || _a === void 0 ? void 0 : _a.TopicMentionsCount
        }
    };
}
/**
 * @internal
 */
function translatePeople(topic) {
    var resources = topic.RelatedResourcesMap;
    var people = [];
    resources.forEach(function (entry) {
        if (entry.Key === 'People') {
            people = entry.Value;
        }
    });
    return people
        ? people.map(function (r) {
            return translatePerson(r);
        })
        : [];
}
/**
 * @internal
 */
function translatePerson(person) {
    var _a;
    return {
        Email: person.EmailAddress,
        Name: person.DisplayName,
        Upn: person.UserPrincipalName,
        OId: person.ObjectId,
        Description: person.Description,
        AIReason: person.AIReason
            ? {
                Count: person.AIReason.FileContributions ? person.AIReason.FileContributions.length : 0,
                DocumentContributedTo: ((_a = person.AIReason.FileContributions) === null || _a === void 0 ? void 0 : _a.length) > 0
                    ? {
                        Title: person.AIReason.FileContributions[0].Title +
                            (person.AIReason.FileContributions[0].Extension
                                ? '.' + person.AIReason.FileContributions[0].Extension
                                : ''),
                        Url: person.AIReason.FileContributions[0].Url
                    }
                    : {}
            }
            : undefined
    };
}
/**
 * @internal
 */
function translateSite(site) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, site), { SiteId: Object(_utilities_cleanGuid__WEBPACK_IMPORTED_MODULE_2__["default"])(site.SiteId), WebId: Object(_utilities_cleanGuid__WEBPACK_IMPORTED_MODULE_2__["default"])(site.WebId) });
}
/**
 * @internal
 */
function translateSiteMetadata(site) {
    return {
        Acronym: site.Acronym,
        Title: site.Title,
        BannerColor: site.Color,
        BannerImageUrl: site.LogoUrl,
        Url: site.Url,
        Type: 'Site',
        ItemReference: {
            SiteId: Object(_utilities_cleanGuid__WEBPACK_IMPORTED_MODULE_2__["default"])(site.SiteId),
            WebId: Object(_utilities_cleanGuid__WEBPACK_IMPORTED_MODULE_2__["default"])(site.WebId),
            Type: 'SiteReference'
        },
        EntityState: site.State
    };
}
/**
 * @internal
 */
function translateSubstrateTopicEntity(substrateTopicEntity) {
    var _a;
    var resources = substrateTopicEntity.RelatedResourcesMap;
    var moreThan10Count = 11;
    var relatedPeople = [];
    var relatedDocuments = [];
    var relatedSites = [];
    var peopleCountHasMore = false;
    var documentsCountHasMore = false;
    var sitesCountHasMore = false;
    if (resources && resources.length > 0) {
        resources.forEach(function (entry) {
            if (entry.Key === 'People') {
                relatedPeople = entry.Value;
                peopleCountHasMore = entry.MoreResultsAvailable;
            }
            else if (entry.Key === 'File') {
                relatedDocuments = entry.Value;
                documentsCountHasMore = entry.MoreResultsAvailable;
            }
            else if (entry.Key === 'Site') {
                relatedSites = entry.Value;
                sitesCountHasMore = entry.MoreResultsAvailable;
            }
        });
    }
    var topicDefinitions = [];
    if (!Object(_common_KillSwitches__WEBPACK_IMPORTED_MODULE_1__["topicDefinitionWikiSourceKSActivated"])() && ((_a = substrateTopicEntity.Definitions) === null || _a === void 0 ? void 0 : _a.length)) {
        substrateTopicEntity.Definitions.forEach(function (definition) {
            var _a, _b, _c, _d, _e, _f, _g;
            var sourceFile = (_b = (_a = definition.AIReason) === null || _a === void 0 ? void 0 : _a.SourceFiles) === null || _b === void 0 ? void 0 : _b[0];
            topicDefinitions.push({
                Definition: definition.Value,
                SourceType: ((_c = sourceFile) === null || _c === void 0 ? void 0 : _c.Source) === 'Wikipedia' ? 'Wikipedia' : 'Private',
                State: definition.State,
                Url: (_d = sourceFile) === null || _d === void 0 ? void 0 : _d.Url,
                WacUrl: (_e = sourceFile) === null || _e === void 0 ? void 0 : _e.Url,
                SourceDocumentTitle: (_f = sourceFile) === null || _f === void 0 ? void 0 : _f.Title,
                SourceDocumentExtension: (_g = sourceFile) === null || _g === void 0 ? void 0 : _g.Extension
            });
        });
    }
    return {
        Definitions: topicDefinitions,
        Definition: substrateTopicEntity.Definition,
        Id: substrateTopicEntity.Id,
        Name: substrateTopicEntity.DisplayName,
        State: substrateTopicEntity.State,
        Score: parseInt(substrateTopicEntity.RelevanceScore, 10),
        Type: substrateTopicEntity.TopicType,
        RelatedDocuments: relatedDocuments.map(translateDoc),
        RelatedPeople: relatedPeople.map(translatePerson),
        RelatedSites: relatedSites.map(translateSite),
        Url: substrateTopicEntity.Url,
        AlternateNames: substrateTopicEntity.AlternateNames,
        AtTheMinimumRelatedPeopleCount: peopleCountHasMore ? moreThan10Count : relatedPeople.length,
        AtTheMinimumRelatedResourcesCount: documentsCountHasMore ? moreThan10Count : relatedDocuments.length,
        AtTheMinimumRelatedTopicsCount: sitesCountHasMore ? moreThan10Count : relatedSites.length,
        HiddenMinedDocuments: [],
        HiddenMinedPeople: [],
        LifecycleState: substrateTopicEntity.LifeCycle,
        OriginalIds: !Object(_common_KillSwitches__WEBPACK_IMPORTED_MODULE_1__["useAncestorIdsActivated"])() ? substrateTopicEntity.AncestorIds : []
    };
}
/**
 * @internal
 */
function translateSubstrateAnnotationResponse(substrateAnnotation) {
    var annotation = {
        EntityDetails: [],
        PageMatches: []
    };
    if (substrateAnnotation.EntityAnnotation) {
        var sectionMatches = substrateAnnotation.EntityAnnotation.SectionMatches;
        if (sectionMatches.length) {
            var matches = sectionMatches.map(function (value) {
                return {
                    ComponentId: value.SectionId,
                    Matches: value.EntityMatches.map(function (match) {
                        return {
                            Start: match.StartPos,
                            Length: match.Length,
                            Entities: [{ EntityId: match.Entities[0].Id, Score: 0 }]
                        };
                    })
                };
            });
            annotation.PageMatches = matches;
            var entityIdetails = substrateAnnotation.EntityAnnotation.EntityDetails.map(translateSubstrateTopicEntity);
            annotation.EntityDetails = entityIdetails;
        }
    }
    return annotation;
}
/**
 * @internal
 */
function translateSubstrateSuggestionSearchAPIResponse(substrateSuggestion) {
    var suggestionSearchResponse = {
        value: []
    };
    if (substrateSuggestion) {
        var suggestions = substrateSuggestion.map(function (suggestion) {
            return {
                EntityId: suggestion.Id,
                Name: suggestion.DisplayName,
                Type: suggestion.Type,
                // substrate is not currently providing below values.
                Definition: undefined,
                AlternateNames: [],
                RelatedPeople: []
            };
        });
        suggestionSearchResponse.value = suggestions;
    }
    return suggestionSearchResponse;
}


/***/ }),

/***/ "hN9v":
/*!*************************************************!*\
  !*** ./lib/TopicPageLayoutDefaultTemplate.resx ***!
  \*************************************************/
/*! exports provided: TitleRegionTitle, TitleRegionWebpartDescription, TitlePlaceholder, TopicPageOverviewTitle, RelatedPeopleTitle, ResourcesTitle, RelatedSitesTitle, RelatedSitesTitleDeprecated, RelatedTopicsGraphTitle, ConversationsTitle, TopicTag, RelatedPeopleDescription, RelatedDocumentsDescription, RelatedSitesDescription, ConversationsDescription, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"TitleRegionTitle\":\"TitleRegionTitle\",\"TitleRegionWebpartDescription\":\"TitleRegionWebpartDescription\",\"TitlePlaceholder\":\"TitlePlaceholder\",\"TopicPageOverviewTitle\":\"TopicPageOverviewTitle\",\"RelatedPeopleTitle\":\"RelatedPeopleTitle\",\"ResourcesTitle\":\"ResourcesTitle\",\"RelatedSitesTitle\":\"RelatedSitesTitle\",\"RelatedSitesTitleDeprecated\":\"RelatedSitesTitleDeprecated\",\"RelatedTopicsGraphTitle\":\"RelatedTopicsGraphTitle\",\"ConversationsTitle\":\"ConversationsTitle\",\"TopicTag\":\"TopicTag\",\"RelatedPeopleDescription\":\"RelatedPeopleDescription\",\"RelatedDocumentsDescription\":\"RelatedDocumentsDescription\",\"RelatedSitesDescription\":\"RelatedSitesDescription\",\"ConversationsDescription\":\"ConversationsDescription\"}");

/***/ }),

/***/ "hiL/":
/*!*********************************************!*\
  !*** external "@ms/sp-component-utilities" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_hiL___;

/***/ }),

/***/ "hrbp":
/*!***********************************************!*\
  !*** ./lib/TopicPageLayoutDefaultTemplate.js ***!
  \***********************************************/
/*! exports provided: TopicPageLayoutDefaultTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopicPageLayoutDefaultTemplate", function() { return TopicPageLayoutDefaultTemplate; });
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ms/sp-component-utilities */ "hiL/");
/* harmony import */ var _ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utilities_cleanGuid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utilities/cleanGuid */ "aj7r");
/* harmony import */ var _EntityRelationsServiceUtilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./EntityRelationsServiceUtilities */ "j84u");
/* harmony import */ var _common_Constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./common/Constants */ "rMgv");
/* harmony import */ var _common_KillSwitches__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./common/KillSwitches */ "+ORw");
/* harmony import */ var _DataVersion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./DataVersion */ "jamc");
/* harmony import */ var _TopicPageLayoutDefaultTemplate_resx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./TopicPageLayoutDefaultTemplate.resx */ "hN9v");
var _TopicPageLayoutDefaultTemplate_resx__WEBPACK_IMPORTED_MODULE_7___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./TopicPageLayoutDefaultTemplate.resx */ "hN9v", 1);
/**
 * @Copyright (c) Microsoft Corporation.  All rights reserved.
 */








var TopicPagesFlightId;
(function (TopicPagesFlightId) {
    TopicPagesFlightId[TopicPagesFlightId["TopicGraph"] = 486] = "TopicGraph"; /* Topic related graph webpart */
    TopicPagesFlightId[TopicPagesFlightId["YammerTopic"] = 745] = "YammerTopic"; /* Topic related yammer webpart */
})(TopicPagesFlightId || (TopicPagesFlightId = {}));
/**
 * Default set of components on the Topic page.
 * @internal
 */
var TopicPageLayoutDefaultTemplate = /** @class */ (function () {
    function TopicPageLayoutDefaultTemplate() {
    }
    /**
     * Layout web part data is used for webparts that must NOT be deleted (locked in WebPartContainer)
     *
     * todo: Fix server processed content on all KM web parts
     * (VSO# https://dev.azure.com/onedrive/CSI/_workitems/edit/778623)
     */
    TopicPageLayoutDefaultTemplate.getLayoutWebPartData = function (topic, context) {
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Validate"].isNotNullOrUndefined(topic, 'topic');
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Validate"].isNotNullOrUndefined(topic.Id, 'topicId');
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Validate"].isNotNullOrUndefined(topic.Name, 'topicName');
        var title = topic.Name;
        var defaultNamesList = [];
        var webPartData = [
            {
                id: TopicPageLayoutDefaultTemplate.TITLE_REGION_WP_ID,
                title: _TopicPageLayoutDefaultTemplate_resx__WEBPACK_IMPORTED_MODULE_7__["TitleRegionTitle"],
                dataVersion: _DataVersion__WEBPACK_IMPORTED_MODULE_6__["DataVersion"].titleRegion,
                instanceId: TopicPageLayoutDefaultTemplate.TITLE_REGION_WP_ID,
                description: _TopicPageLayoutDefaultTemplate_resx__WEBPACK_IMPORTED_MODULE_7__["TitleRegionWebpartDescription"],
                serverProcessedContent: {
                    htmlStrings: {},
                    searchablePlainTexts: {},
                    imageSources: {},
                    links: {}
                },
                properties: {
                    imageSourceType: _ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_1__["ImageSourceType"].none,
                    title: title,
                    textAlignment: 'Left',
                    showPublishDate: false,
                    authors: undefined,
                    showTopicHeader: true,
                    authorByline: undefined,
                    layoutType: 'TopicPage',
                    topicId: topic.Id,
                    topicName: topic.Name,
                    topicHeader: _TopicPageLayoutDefaultTemplate_resx__WEBPACK_IMPORTED_MODULE_7__["TopicTag"],
                    preventTitleOverwrite: true,
                    hasTitleBeenCommitted: true,
                    focusOnInput: true
                }
            },
            {
                // Overview
                id: TopicPageLayoutDefaultTemplate.DEFINITION_WP_ID,
                instanceId: TopicPageLayoutDefaultTemplate._OVERVIEW_RTE_INSTANCE_ID,
                title: _TopicPageLayoutDefaultTemplate_resx__WEBPACK_IMPORTED_MODULE_7__["TopicPageOverviewTitle"],
                description: _TopicPageLayoutDefaultTemplate_resx__WEBPACK_IMPORTED_MODULE_7__["TopicPageOverviewTitle"],
                dataVersion: _DataVersion__WEBPACK_IMPORTED_MODULE_6__["DataVersion"].definition,
                properties: {
                    content: topic.Definition,
                    title: _TopicPageLayoutDefaultTemplate_resx__WEBPACK_IMPORTED_MODULE_7__["TopicPageOverviewTitle"],
                    topicName: topic.Name,
                    curated: defaultNamesList,
                    suggested: TopicPageLayoutDefaultTemplate._getAlternateNamesInfo(topic.AlternateNames),
                    removed: defaultNamesList
                }
            },
            {
                // Related people
                id: TopicPageLayoutDefaultTemplate.RELATED_PEOPLE_WP_ID,
                instanceId: TopicPageLayoutDefaultTemplate.RELATED_PEOPLE_WP_ID,
                title: _TopicPageLayoutDefaultTemplate_resx__WEBPACK_IMPORTED_MODULE_7__["RelatedPeopleTitle"],
                description: _TopicPageLayoutDefaultTemplate_resx__WEBPACK_IMPORTED_MODULE_7__["RelatedPeopleDescription"],
                dataVersion: _DataVersion__WEBPACK_IMPORTED_MODULE_6__["DataVersion"].people,
                properties: {
                    title: _TopicPageLayoutDefaultTemplate_resx__WEBPACK_IMPORTED_MODULE_7__["RelatedPeopleTitle"],
                    topicName: topic.Name,
                    suggested: TopicPageLayoutDefaultTemplate._getExpertInfoFromRelatedPeople(topic.RelatedPeople),
                    curated: TopicPageLayoutDefaultTemplate._defaultCurated(topic, context),
                    removed: []
                }
            },
            {
                // Related resources
                id: TopicPageLayoutDefaultTemplate.RELATED_DOCS_WP_ID,
                instanceId: TopicPageLayoutDefaultTemplate.RELATED_DOCS_WP_ID,
                title: _TopicPageLayoutDefaultTemplate_resx__WEBPACK_IMPORTED_MODULE_7__["ResourcesTitle"],
                description: _TopicPageLayoutDefaultTemplate_resx__WEBPACK_IMPORTED_MODULE_7__["RelatedDocumentsDescription"],
                dataVersion: _DataVersion__WEBPACK_IMPORTED_MODULE_6__["DataVersion"].resource,
                properties: {
                    title: _TopicPageLayoutDefaultTemplate_resx__WEBPACK_IMPORTED_MODULE_7__["ResourcesTitle"],
                    topicName: topic.Name,
                    suggested: TopicPageLayoutDefaultTemplate._getSuggestedResources(topic.RelatedDocuments),
                    curated: []
                }
            },
            {
                // Related sites
                id: TopicPageLayoutDefaultTemplate.SITES_WP_ID,
                instanceId: TopicPageLayoutDefaultTemplate.SITES_WP_ID,
                title: _TopicPageLayoutDefaultTemplate_resx__WEBPACK_IMPORTED_MODULE_7__["RelatedSitesTitle"],
                description: _TopicPageLayoutDefaultTemplate_resx__WEBPACK_IMPORTED_MODULE_7__["RelatedSitesDescription"],
                dataVersion: _DataVersion__WEBPACK_IMPORTED_MODULE_6__["DataVersion"].sites,
                properties: {
                    isOnTopicPage: true,
                    layoutId: !Object(_common_KillSwitches__WEBPACK_IMPORTED_MODULE_5__["loadSuggestedSitesKSActivated"])() ? 'CompactGrid' : 'FilmStrip',
                    title: !Object(_common_KillSwitches__WEBPACK_IMPORTED_MODULE_5__["loadSuggestedSitesKSActivated"])()
                        ? _TopicPageLayoutDefaultTemplate_resx__WEBPACK_IMPORTED_MODULE_7__["RelatedSitesTitle"]
                        : _TopicPageLayoutDefaultTemplate_resx__WEBPACK_IMPORTED_MODULE_7__["RelatedSitesTitleDeprecated"],
                    titleFontWeightBold: true,
                    hideWebPartWhenEmpty: true,
                    isTitleEditable: false
                }
            }
        ];
        if (TopicPageLayoutDefaultTemplate._isFlightEnabled(TopicPagesFlightId.TopicGraph)) {
            webPartData.push({
                // Graph WebPart
                id: TopicPageLayoutDefaultTemplate.GRAPH_WP_ID,
                instanceId: TopicPageLayoutDefaultTemplate.GRAPH_WP_ID,
                title: _TopicPageLayoutDefaultTemplate_resx__WEBPACK_IMPORTED_MODULE_7__["RelatedTopicsGraphTitle"],
                description: _TopicPageLayoutDefaultTemplate_resx__WEBPACK_IMPORTED_MODULE_7__["RelatedSitesDescription"],
                dataVersion: _DataVersion__WEBPACK_IMPORTED_MODULE_6__["DataVersion"].graph,
                properties: {
                    isOnTopicPage: true,
                    title: _TopicPageLayoutDefaultTemplate_resx__WEBPACK_IMPORTED_MODULE_7__["RelatedTopicsGraphTitle"],
                    topicName: topic.Name,
                    titleFontWeightBold: true,
                    suggested: [],
                    curated: []
                }
            });
        }
        if (TopicPageLayoutDefaultTemplate._isFlightEnabled(TopicPagesFlightId.YammerTopic)) {
            webPartData.push({
                // Yammer WebPart
                id: TopicPageLayoutDefaultTemplate.YAMMER_WP_ID,
                instanceId: TopicPageLayoutDefaultTemplate.YAMMER_WP_ID,
                title: _TopicPageLayoutDefaultTemplate_resx__WEBPACK_IMPORTED_MODULE_7__["ConversationsTitle"],
                description: _TopicPageLayoutDefaultTemplate_resx__WEBPACK_IMPORTED_MODULE_7__["ConversationsDescription"],
                dataVersion: '1.0',
                properties: {
                    isOnTopicPage: true,
                    title: _TopicPageLayoutDefaultTemplate_resx__WEBPACK_IMPORTED_MODULE_7__["ConversationsTitle"],
                    type: 'Topic',
                    id: 'eyJfdHlwZSI6IlRvcGljIiwiaWQiOiI1OTQwMjQyODQxNiJ9',
                    feedSubtype: 'QUESTIONS',
                    threadCount: 3,
                    showHighlights: true,
                    templateType: 'Cortex'
                }
            });
        }
        return webPartData;
    };
    TopicPageLayoutDefaultTemplate.getAnchorIdForWebPart = function (webpartId) {
        var _a;
        return (_a = {},
            _a[this.RELATED_DOCS_WP_ID] = _common_Constants__WEBPACK_IMPORTED_MODULE_4__["TOPIC_CARD_RELATED_RESOURCES"],
            _a[this.RELATED_PEOPLE_WP_ID] = _common_Constants__WEBPACK_IMPORTED_MODULE_4__["TOPIC_CARD_RELATED_PEOPLE"],
            _a)[webpartId];
    };
    TopicPageLayoutDefaultTemplate.getTitleRegionData = function (topic, context) {
        return TopicPageLayoutDefaultTemplate.getLayoutWebPartData(topic, context).filter(function (item) { return item.id === TopicPageLayoutDefaultTemplate.TITLE_REGION_WP_ID; })[0];
    };
    // Needed for converting people to the format accepted by people web part
    TopicPageLayoutDefaultTemplate._getExpertInfoFromRelatedPeople = function (people) {
        return people
            ? people.map(function (person) {
                return {
                    name: person.Name,
                    id: person.OId,
                    email: person.Email,
                    upn: person.Upn
                };
            })
            : [];
    };
    /**
     * For New topic scenarios, we want to pre-populate the current user on the topic page.
     */
    TopicPageLayoutDefaultTemplate._defaultCurated = function (topic, context) {
        if (topic.Id === _ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_1__["NULL_TOPIC_ENTITY"].Id) {
            var _a = context.user, displayName = _a.displayName, email = _a.email, loginName = _a.loginName;
            var expertInfo = {
                id: email,
                name: displayName,
                email: email,
                upn: loginName,
                curationDetails: Object(_EntityRelationsServiceUtilities__WEBPACK_IMPORTED_MODULE_3__["getCurationDetails"])(email, displayName, loginName)
            };
            return [expertInfo];
        }
        return [];
    };
    // convert IAlternateTopicName to the format accepted by definition web part
    // tslint:disable-next-line:no-any
    TopicPageLayoutDefaultTemplate._getAlternateNamesInfo = function (suggestedAlternateNames) {
        return suggestedAlternateNames
            ? suggestedAlternateNames.map(function (suggestedName) { return ({ name: suggestedName.Name }); })
            : [];
    };
    TopicPageLayoutDefaultTemplate._getSuggestedResources = function (suggestedResources) {
        if (suggestedResources && suggestedResources.length > 0) {
            return suggestedResources.map(function (doc) {
                var _a, _b, _c;
                return ({
                    aiReason: doc.AIReason
                        ? {
                            reasonType: doc.AIReason.ReasonType,
                            topicMentionsCount: doc.AIReason.TopicMentionsCount
                        }
                        : undefined,
                    title: doc.Title,
                    url: doc.Url,
                    modifier: {
                        email: ((_a = doc.Modifier) === null || _a === void 0 ? void 0 : _a.Email) || '',
                        name: ((_b = doc.Modifier) === null || _b === void 0 ? void 0 : _b.Name) || '',
                        id: ((_c = doc.Modifier) === null || _c === void 0 ? void 0 : _c.OId) || ''
                    },
                    viewCount: doc.ViewCount === undefined ? 0 : doc.ViewCount,
                    siteId: Object(_utilities_cleanGuid__WEBPACK_IMPORTED_MODULE_2__["default"])(doc.SiteId),
                    webId: Object(_utilities_cleanGuid__WEBPACK_IMPORTED_MODULE_2__["default"])(doc.WebId),
                    uniqueId: Object(_utilities_cleanGuid__WEBPACK_IMPORTED_MODULE_2__["default"])(doc.UniqueId),
                    lastModifiedTime: doc.LastModifiedTime
                });
            });
        }
        else {
            return [];
        }
    };
    TopicPageLayoutDefaultTemplate._isFlightEnabled = function (flightId) {
        return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPFlight"].isEnabled(flightId);
    };
    // Public for lookups from layout component
    TopicPageLayoutDefaultTemplate.TITLE_REGION_WP_ID = 'cbe7b0a9-3504-44dd-a3a3-0e5cacd07788';
    TopicPageLayoutDefaultTemplate.RELATED_DOCS_WP_ID = '9346e298-66c6-4122-853c-a1eef08b5827';
    TopicPageLayoutDefaultTemplate.RELATED_PEOPLE_WP_ID = '29991a50-6f14-42e0-9536-aef85d91b05c';
    TopicPageLayoutDefaultTemplate.LOCKED_RTE_WP_ID = '09fc0123-851e-4fd3-bdd6-6e2e31cb1ef7';
    TopicPageLayoutDefaultTemplate.DEFINITION_WP_ID = 'e9ee7242-273c-473f-bfa5-149b32873501';
    TopicPageLayoutDefaultTemplate.SITES_WP_ID = '7cba020c-5ccb-42e8-b6fc-75b3149aba7b';
    TopicPageLayoutDefaultTemplate.GRAPH_WP_ID = '81ce1eba-74ad-4f0d-a692-2133b98bc308';
    TopicPageLayoutDefaultTemplate.YAMMER_WP_ID = 'cb3bfe97-a47f-47ca-bffb-bb9a5ff83d75';
    TopicPageLayoutDefaultTemplate._OVERVIEW_RTE_INSTANCE_ID = '7aca70c6-02bc-4b46-a27e-093e34a7a4dc';
    return TopicPageLayoutDefaultTemplate;
}());



/***/ }),

/***/ "idTN":
/*!************************************************!*\
  !*** ./lib/utilities/isSiteKnowledgeCenter.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isSiteKnowledgeCenter; });
/* harmony import */ var _cleanGuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cleanGuid */ "aj7r");

/**
 * @copyright (c) Microsoft Corporation. All rights reserved.
 */
/**
 * Return if the current site is a Knowledge Center
 *
 * @internal
 */
// tslint:disable-next-line:no-any
function isSiteKnowledgeCenter(spPageContextInfo) {
    var _a, _b;
    if (!spPageContextInfo || !spPageContextInfo.knowledgeHubSiteDetails) {
        return false;
    }
    var siteId = (_a = spPageContextInfo) === null || _a === void 0 ? void 0 : _a.siteId;
    var webId = (_b = spPageContextInfo) === null || _b === void 0 ? void 0 : _b.webId;
    siteId = Object(_cleanGuid__WEBPACK_IMPORTED_MODULE_0__["default"])(siteId);
    webId = Object(_cleanGuid__WEBPACK_IMPORTED_MODULE_0__["default"])(webId);
    return (spPageContextInfo.knowledgeHubSiteDetails.SiteId === siteId &&
        spPageContextInfo.knowledgeHubSiteDetails.WebId === webId);
}


/***/ }),

/***/ "j84u":
/*!************************************************!*\
  !*** ./lib/EntityRelationsServiceUtilities.js ***!
  \************************************************/
/*! exports provided: addEntityRelations, getCurationDetails */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addEntityRelations", function() { return addEntityRelations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCurationDetails", function() { return getCurationDetails; });
/* harmony import */ var _ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ms/sp-component-utilities */ "hiL/");
/* harmony import */ var _ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__);
/**
 * @Copyright (c) Microsoft Corporation.  All rights reserved.
 */


/**
 * Add relations to the shared entity relations object.
 *
 * @internal
 */
/* tslint:disable-next-line:export-name */
function addEntityRelations(serviceScope, relationType, actionType, newRelation // tslint:disable-line:no-any
) {
    _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["Validate"].isNotNullOrUndefined(serviceScope, 'serviceScope');
    _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["Validate"].isNotNullOrUndefined(newRelation, 'newRelation');
    var service = serviceScope.consume(_ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_0__["EntityRelationsService"].serviceKey); /* tslint:disable-line:no-use-before-declare */
    // tslint:disable-next-line:no-any
    var relations = service[_ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_0__["RelationsContainerKey"]]
        .relations; /* tslint:disable-line:no-string-literal */
    if (!relations[relationType]) {
        relations[relationType] = {};
    }
    var relation = relations[relationType];
    relation[actionType] = newRelation;
}
/**
 * Utility method to build the ICurationDetails structure
 *
 * @internal
 */
function getCurationDetails(email, name, upn, isAddedFromSearch
// @todo: make it a mandatory parameter once killswitch in people web part is removed
) {
    if (isAddedFromSearch === void 0) { isAddedFromSearch = false; }
    return {
        author: {
            email: email,
            name: name,
            upn: upn
        },
        time: new Date().toISOString(),
        isAddedFromSearch: isAddedFromSearch
    };
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

/***/ "jamc":
/*!****************************!*\
  !*** ./lib/DataVersion.js ***!
  \****************************/
/*! exports provided: DataVersion */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataVersion", function() { return DataVersion; });
/**
 * @Copyright (c) Microsoft Corporation.  All rights reserved.
 */
/**
 * Data versions for topic webparts.
 * @internal
 */
var DataVersion = /** @class */ (function () {
    function DataVersion() {
    }
    DataVersion.titleRegion = '1.4';
    DataVersion.definition = '1.3.0';
    DataVersion.people = '1.1.0';
    DataVersion.resource = '1.4.0';
    DataVersion.sites = '1.0';
    DataVersion.graph = '1.3';
    return DataVersion;
}());



/***/ }),

/***/ "jrLr":
/*!************************************!*\
  !*** ./lib/dataProviders/index.js ***!
  \************************************/
/*! exports provided: useSubstrateMSAIAPI, useSubstrateApiWhenGettingTopicEntity, useSubstrateMSAIAPIASPrimary, getStatusMessage, translateResources, translateDoc, translatePeople, translatePerson, translateSite, translateSiteMetadata, translateSubstrateTopicEntity, translateSubstrateAnnotationResponse, translateSubstrateSuggestionSearchAPIResponse, MSIT_KNOWLEDGE_HUB_URL, RestApiError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Utilities */ "6DK4");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useSubstrateMSAIAPI", function() { return _Utilities__WEBPACK_IMPORTED_MODULE_0__["useSubstrateMSAIAPI"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useSubstrateApiWhenGettingTopicEntity", function() { return _Utilities__WEBPACK_IMPORTED_MODULE_0__["useSubstrateApiWhenGettingTopicEntity"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useSubstrateMSAIAPIASPrimary", function() { return _Utilities__WEBPACK_IMPORTED_MODULE_0__["useSubstrateMSAIAPIASPrimary"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getStatusMessage", function() { return _Utilities__WEBPACK_IMPORTED_MODULE_0__["getStatusMessage"]; });

/* harmony import */ var _Translators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Translators */ "h4Yq");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "translateResources", function() { return _Translators__WEBPACK_IMPORTED_MODULE_1__["translateResources"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "translateDoc", function() { return _Translators__WEBPACK_IMPORTED_MODULE_1__["translateDoc"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "translatePeople", function() { return _Translators__WEBPACK_IMPORTED_MODULE_1__["translatePeople"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "translatePerson", function() { return _Translators__WEBPACK_IMPORTED_MODULE_1__["translatePerson"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "translateSite", function() { return _Translators__WEBPACK_IMPORTED_MODULE_1__["translateSite"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "translateSiteMetadata", function() { return _Translators__WEBPACK_IMPORTED_MODULE_1__["translateSiteMetadata"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "translateSubstrateTopicEntity", function() { return _Translators__WEBPACK_IMPORTED_MODULE_1__["translateSubstrateTopicEntity"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "translateSubstrateAnnotationResponse", function() { return _Translators__WEBPACK_IMPORTED_MODULE_1__["translateSubstrateAnnotationResponse"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "translateSubstrateSuggestionSearchAPIResponse", function() { return _Translators__WEBPACK_IMPORTED_MODULE_1__["translateSubstrateSuggestionSearchAPIResponse"]; });

/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Constants */ "oUEy");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MSIT_KNOWLEDGE_HUB_URL", function() { return _Constants__WEBPACK_IMPORTED_MODULE_2__["MSIT_KNOWLEDGE_HUB_URL"]; });

/* harmony import */ var _RestApiError__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./RestApiError */ "NDxI");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RestApiError", function() { return _RestApiError__WEBPACK_IMPORTED_MODULE_3__["default"]; });







/***/ }),

/***/ "k2H1":
/*!******************************************!*\
  !*** ./lib/utilities/TopicPermission.js ***!
  \******************************************/
/*! exports provided: canCreateNewTopicOnCurrentSite, canCreateNewTopic */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "canCreateNewTopicOnCurrentSite", function() { return canCreateNewTopicOnCurrentSite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "canCreateNewTopic", function() { return canCreateNewTopic; });
/* harmony import */ var _microsoft_sp_page_context__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/sp-page-context */ "X+PM");
/* harmony import */ var _microsoft_sp_page_context__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_page_context__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ms/sp-component-utilities */ "hiL/");
/* harmony import */ var _ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./env */ "/LHP");
/* harmony import */ var _isSiteKnowledgeCenter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./isSiteKnowledgeCenter */ "idTN");
/* harmony import */ var _common_KillSwitches__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/KillSwitches */ "+ORw");
/**
 * @copyright Microsoft Corporation. All rights reserved.
 */





/**
 * Check if current user have the new topic creation permission.
 * @internal
 */
// tslint:disable-next-line:export-name
function canCreateNewTopicOnCurrentSite(pageContext) {
    if (!pageContext) {
        return false;
    }
    var legacyPageContext = pageContext.legacyPageContext;
    if (!legacyPageContext) {
        return false;
    }
    var permissions = new _microsoft_sp_page_context__WEBPACK_IMPORTED_MODULE_0__["SPPermission"](legacyPageContext.webPermMasks);
    return (Object(_ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_1__["isCortexEnabled"])(pageContext) &&
        permissions.hasAnyPermissions(_microsoft_sp_page_context__WEBPACK_IMPORTED_MODULE_0__["SPPermission"].manageLists, _microsoft_sp_page_context__WEBPACK_IMPORTED_MODULE_0__["SPPermission"].manageWeb) &&
        (Object(_common_KillSwitches__WEBPACK_IMPORTED_MODULE_4__["isLimitNewTopicPermissionOnMSITKsActivated"])() ||
            !Object(_env__WEBPACK_IMPORTED_MODULE_2__["isEnvMSIT"])(pageContext) ||
            permissions.hasPermission(_microsoft_sp_page_context__WEBPACK_IMPORTED_MODULE_0__["SPPermission"].manageWeb)));
}
/**
 * Can current user create new topic
 * @internal
 */
function canCreateNewTopic(pageContext) {
    return Object(_isSiteKnowledgeCenter__WEBPACK_IMPORTED_MODULE_3__["default"])(pageContext.legacyPageContext) && canCreateNewTopicOnCurrentSite(pageContext);
}


/***/ }),

/***/ "mABa":
/*!**********************************************!*\
  !*** ./lib/baseKMWebPart/BaseKMContainer.js ***!
  \**********************************************/
/*! exports provided: BaseKMContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseKMContainer", function() { return BaseKMContainer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _BaseKMErrorBoundary__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BaseKMErrorBoundary */ "ytBK");
// Copyright (c) Microsoft. All rights reserved.


function BaseKMContainer(props) {
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](function () {
        if (props.isReadyToCompleteRender) {
            props.asyncRenderCompleted();
        }
    }, [props.isReadyToCompleteRender, props.asyncRenderCompleted]);
    var contentElement = props.contentElement, onCatchError = props.onCatchError, isSuggestedDataLoaded = props.isSuggestedDataLoaded, isReadyToCompleteRender = props.isReadyToCompleteRender, webPartTag = props.webPartTag;
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_BaseKMErrorBoundary__WEBPACK_IMPORTED_MODULE_1__["BaseKMErrorBoundary"], { onCatchError: onCatchError, isSuggestedDataLoaded: isSuggestedDataLoaded, isReadyToCompleteRender: isReadyToCompleteRender, webPartTag: webPartTag, logRenderError: props.logRenderError, logRenderSuccess: props.logRenderSuccess }, contentElement));
}


/***/ }),

/***/ "mAUd":
/*!*******************************!*\
  !*** ./lib/TopicUtilities.js ***!
  \*******************************/
/*! exports provided: generatePreviewUrl, openInNewTab, deprecatedIsSiteKnowledgeCenter, isPreviewPage, isCreateTopicPage, isNewPage, isLayoutsPage, isShowAllTopicsPage, getCreateTopicPageUrl, WEB_VIEW_EXTENSIONS, getWebviewUrl, getPathName, countWordFromHTMLString, getPageUniqueId, getFeedbackMailLink */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generatePreviewUrl", function() { return generatePreviewUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openInNewTab", function() { return openInNewTab; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deprecatedIsSiteKnowledgeCenter", function() { return deprecatedIsSiteKnowledgeCenter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPreviewPage", function() { return isPreviewPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isCreateTopicPage", function() { return isCreateTopicPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNewPage", function() { return isNewPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isLayoutsPage", function() { return isLayoutsPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isShowAllTopicsPage", function() { return isShowAllTopicsPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCreateTopicPageUrl", function() { return getCreateTopicPageUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WEB_VIEW_EXTENSIONS", function() { return WEB_VIEW_EXTENSIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWebviewUrl", function() { return getWebviewUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPathName", function() { return getPathName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "countWordFromHTMLString", function() { return countWordFromHTMLString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPageUniqueId", function() { return getPageUniqueId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFeedbackMailLink", function() { return getFeedbackMailLink; });
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ms/sp-component-utilities */ "hiL/");
/* harmony import */ var _ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_KillSwitches__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common/KillSwitches */ "+ORw");
/* harmony import */ var _microsoft_sp_page_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @microsoft/sp-page-context */ "X+PM");
/* harmony import */ var _microsoft_sp_page_context__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_page_context__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @microsoft/sp-diagnostics */ "ut3N");
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ms/odsp-utilities-bundle */ "y88i");
/* harmony import */ var _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utilities_cleanGuid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utilities/cleanGuid */ "aj7r");
/* harmony import */ var _common_Constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./common/Constants */ "rMgv");
/* harmony import */ var _common_addLinkSource__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./common/addLinkSource */ "NmML");
/* harmony import */ var _utilities_getKnowledgeHubUrlWithOverrides__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utilities/getKnowledgeHubUrlWithOverrides */ "OUh5");
/* harmony import */ var _TopicUtilities_resx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./TopicUtilities.resx */ "GKvq");
var _TopicUtilities_resx__WEBPACK_IMPORTED_MODULE_10___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./TopicUtilities.resx */ "GKvq", 1);
/**
 * @copyright (c) Microsoft Corporation. All rights reserved.
 */











/**
 * Generates a layout URL for a given topic
 *
 * @internal
 */
/* tslint:disable-next-line:export-name */
function generatePreviewUrl(name, id, pageContext, linkSource) {
    _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Validate"].isNotNullOrUndefined(name, 'name');
    _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Validate"].isNotNullOrUndefined(id, 'id');
    _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Validate"].isNotNullOrUndefined(pageContext, 'pageContext');
    _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Validate"].isNotNullOrUndefined(linkSource, 'linkSource');
    var currentUrl = Object(_utilities_getKnowledgeHubUrlWithOverrides__WEBPACK_IMPORTED_MODULE_9__["default"])(pageContext);
    var url = currentUrl + "/_layouts/15/TopicPagePreview.aspx?topicId=" +
        (id + "&topicName=" + encodeURIComponent(name));
    return Object(_common_addLinkSource__WEBPACK_IMPORTED_MODULE_8__["default"])(url, linkSource);
}
/**
 * Opens a topic page in new tab
 *
 * @internal
 */
/* tslint:disable-next-line:export-name */
function openInNewTab(url) {
    _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Validate"].isNotNullOrUndefined(url, 'url');
    window.open(url, '_blank');
}
/**
 * Return if the current site is a Knowledge Center
 *
 * @internal
 */
// tslint:disable-next-line:export-name no-any
function deprecatedIsSiteKnowledgeCenter(spPageContextInfo) {
    var _a, _b;
    if (!spPageContextInfo || !spPageContextInfo.knowledgeHubSiteDetails) {
        return false;
    }
    var siteId = (_a = spPageContextInfo) === null || _a === void 0 ? void 0 : _a.siteId;
    var webId = (_b = spPageContextInfo) === null || _b === void 0 ? void 0 : _b.webId;
    siteId = Object(_utilities_cleanGuid__WEBPACK_IMPORTED_MODULE_6__["default"])(siteId);
    webId = Object(_utilities_cleanGuid__WEBPACK_IMPORTED_MODULE_6__["default"])(webId);
    return (spPageContextInfo.knowledgeHubSiteDetails.SiteId === siteId &&
        spPageContextInfo.knowledgeHubSiteDetails.WebId === webId);
}
/**
 * Return the page file name of the url.
 *
 * @internal
 */
function pageFileName() {
    var url = new URL(window.location.href).pathname.toLowerCase();
    return url.substring(url.lastIndexOf('/') + 1);
}
/**
 * Return true if the page url file is topicpagepreview.aspx.
 *
 * @internal
 */
function isPreviewPage() {
    return (isLayoutsPage() && pageFileName().toLowerCase() === _common_Constants__WEBPACK_IMPORTED_MODULE_7__["default"].topicPagePreviewStubFileName.toLowerCase());
}
/**
 * Return true if the page url file is '_layouts/15/createtopicpage.aspx'.
 *
 * @internal
 */
function isCreateTopicPage() {
    return (isLayoutsPage() && pageFileName().toLowerCase() === _common_Constants__WEBPACK_IMPORTED_MODULE_7__["default"].createTopicPageStubFileName.toLowerCase());
}
/**
 * Return true if the page url file is 'newpage.aspx'.
 *
 * @internal
 */
function isNewPage() {
    return pageFileName().toLowerCase() === _common_Constants__WEBPACK_IMPORTED_MODULE_7__["default"].newPageStubFileName.toLowerCase();
}
/**
 * Return true if the page url contains '_layouts/15/'.
 *
 * @internal
 */
function isLayoutsPage() {
    var url = new URL(window.location.href).pathname.toLowerCase();
    return url.indexOf(_common_Constants__WEBPACK_IMPORTED_MODULE_7__["default"].layoutsPagePrefix) !== -1;
}
/**
 * Returns true if the page is showAllTopics page.
 *
 * @internal
 */
function isShowAllTopicsPage() {
    var urlQuery = new URLSearchParams(window.location.search);
    var queryString = urlQuery.toString();
    return queryString.indexOf('showAllTopics') !== -1;
}
/**
 * returns absolute url for createTopicPage.aspx
 * @internal
 */
function getCreateTopicPageUrl(pageContext) {
    return Object(_utilities_getKnowledgeHubUrlWithOverrides__WEBPACK_IMPORTED_MODULE_9__["default"])(pageContext) + "/" + _common_Constants__WEBPACK_IMPORTED_MODULE_7__["default"].layoutsPagePrefix + _common_Constants__WEBPACK_IMPORTED_MODULE_7__["default"].createTopicPageStubFileName;
}
/**
 * Resource file types for which we support web view
 * @internal
 */
var WEB_VIEW_EXTENSIONS = new Set([
    'doc',
    'docx',
    'one',
    'ppt',
    'pptx',
    'xls',
    'xlsx'
]);
/**
 * For supported documents, the webview URLs look like
 * `https://<domainName>/teams/<siteName>/_layouts/15/Doc.aspx?sourcedoc={<uniqueId>}`.
 * Otherwise return the resource url directly.
 *
 * @internal
 */
function getWebviewUrl(sitePath, layoutsUrl, uniqueId, resourceURL) {
    var _a, _b;
    var fileType = !Object(_common_KillSwitches__WEBPACK_IMPORTED_MODULE_2__["fixMsgPreviewKSActivated"])()
        ? (((_a = resourceURL) === null || _a === void 0 ? void 0 : _a.split('.').pop()) || '').toLowerCase()
        : ((_b = resourceURL) === null || _b === void 0 ? void 0 : _b.split('.').pop()) || '';
    // generate preview url for Email copy
    if (!Object(_common_KillSwitches__WEBPACK_IMPORTED_MODULE_2__["fixMsgPreviewKSActivated"])() && resourceURL && fileType === 'msg') {
        var pathName = getPathName(resourceURL);
        var parent_1 = pathName.substring(0, pathName.lastIndexOf('/'));
        var folderUrl = resourceURL.substring(0, resourceURL.lastIndexOf('/'));
        return folderUrl + "?id=" + pathName + "&parent=" + parent_1;
    }
    // Ignore differences between substrate and sphome APIs, because we always use sphome api in curated resource
    if (WEB_VIEW_EXTENSIONS.has(fileType) && sitePath && layoutsUrl && uniqueId) {
        return sitePath + "/" + layoutsUrl + "/Doc.aspx?sourcedoc={" + encodeURIComponent(uniqueId) + "}";
    }
    return resourceURL;
}
/**
 * get url path name
 * @internal
 */
function getPathName(url) {
    return new URL(url).pathname;
}
/**
 * @internal
 */
function countWordFromHTMLString(html) {
    if (!html) {
        return 0;
    }
    var content = html.replace(/<[^>]*>/g, ' ');
    content = content.replace(/&nbsp;|&emsp;|&br;/g, ' ');
    content = content.replace(/\s+/g, ' ');
    content = content.trim();
    return content.split(' ').filter(function (word) { return !!word; }).length;
}
/**
 * Returns the unique id of current page
 * @internal
 */
function getPageUniqueId(serviceScope, qosTag) {
    var _a;
    var qosMonitor = new _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_4__["_QosMonitor"](qosTag);
    var pageService = serviceScope.consume(_ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_1__["PageService"].serviceKey);
    var pageContext = serviceScope.consume(_microsoft_sp_page_context__WEBPACK_IMPORTED_MODULE_3__["PageContext"].serviceKey);
    if (!Object(_common_KillSwitches__WEBPACK_IMPORTED_MODULE_2__["fixPageUniqueIdUnderNewPageKSActivated"])() && !((_a = pageContext) === null || _a === void 0 ? void 0 : _a.list)) {
        // if list is undefined in pageContext, pageService will not get valid currentItem
        return Promise.resolve(undefined);
    }
    return pageService
        .getCurrentItem()
        .then(function (currentItem) {
        var _a, _b, _c;
        var uniqueId = (_c = (_b = (_a = currentItem) === null || _a === void 0 ? void 0 : _a.item) === null || _b === void 0 ? void 0 : _b.properties) === null || _c === void 0 ? void 0 : _c.uniqueId;
        if (uniqueId) {
            qosMonitor.writeSuccess();
        }
        else {
            qosMonitor.writeUnexpectedFailure('getUndefinedPageUniqueId');
        }
        return uniqueId;
    })
        .catch(function (error) {
        qosMonitor.writeUnexpectedFailure('getPageUniqueIdFailed', error);
        return undefined;
    });
}
/**
 * @internal
 *
 * Get feedback mail link, including subject and body messages.
 * It will invoke your default email client usually.
 */
function getFeedbackMailLink(_a) {
    var topicName = _a.topicName, topicId = _a.topicId, source = _a.source, buildNumber = _a.buildNumber, feedbackEmail = _a.feedbackEmail, pageContext = _a.pageContext;
    var subject = encodeURIComponent(_ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_5__["StringHelper"].format(_TopicUtilities_resx__WEBPACK_IMPORTED_MODULE_10__["TopicFeedbackEmailSubject"], topicName));
    var sourceItem = "" + _TopicUtilities_resx__WEBPACK_IMPORTED_MODULE_10__["TopicFeedbackEmailFooterSourceLabel"] + source;
    var topicIdItem = "" + _TopicUtilities_resx__WEBPACK_IMPORTED_MODULE_10__["TopicFeedbackEmailFooterTopicIdLabel"] + topicId;
    var toolkitVersionsItem = _TopicUtilities_resx__WEBPACK_IMPORTED_MODULE_10__["TopicFeedbackEmailFooterToolkitVersionsLabel"] + "buildNumber=" + buildNumber;
    var browserAgentItem = "" + _TopicUtilities_resx__WEBPACK_IMPORTED_MODULE_10__["TopicFeedbackEmailFooterBrowserAgentLabel"] + window.navigator.userAgent;
    var userLanguageItem = "" + _TopicUtilities_resx__WEBPACK_IMPORTED_MODULE_10__["TopicFeedbackEmailFooterUserLanguageLabel"] + pageContext.legacyPageContext.currentLanguage;
    var note = [
        sourceItem,
        topicIdItem,
        toolkitVersionsItem,
        browserAgentItem,
        userLanguageItem
    ].join('\n');
    var body = encodeURIComponent(_TopicUtilities_resx__WEBPACK_IMPORTED_MODULE_10__["TopicFeedbackEmailBody"] + "\n\n\n" + _TopicUtilities_resx__WEBPACK_IMPORTED_MODULE_10__["TopicFeedbackEmailFooterNote"] + "\n" + note);
    return "mailto:" + feedbackEmail + "?subject=" + subject + "&body=" + body;
}


/***/ }),

/***/ "mwqp":
/*!**********************!*\
  !*** ./lib/index.js ***!
  \**********************/
/*! exports provided: mockApiResponse, _BaseSubstrateTopicDataProvider, SubstrateTopicsDataProvider, SubstrateTopicsDataProviderV2, SubstrateFeedbackDataProvider, SubstrateGetTopicSuggestionProvider, CreateTopicDataProvider, TopicPageLayoutDefaultTemplate, addEntityRelations, getCurationDetails, generatePreviewUrl, openInNewTab, deprecatedIsSiteKnowledgeCenter, isPreviewPage, isCreateTopicPage, isNewPage, isLayoutsPage, isShowAllTopicsPage, getCreateTopicPageUrl, WEB_VIEW_EXTENSIONS, getWebviewUrl, getPathName, countWordFromHTMLString, getPageUniqueId, getFeedbackMailLink, _translateResources, _translateDoc, _translatePeople, _translatePerson, _translateSubstrateSuggestionSearchAPIResponse, _SubstrateGetTopicByIdDataProvider, _SubstrateGetTopicsByIdsDataProvider, _SubstrateAnnotationDataProvider, _useSubstrateMSAIAPI, _useSubstrateMSAIAPIASPrimary, _BaseKMWebPart, _DeferredTopicCard, _TopicCache, DeferredCreateNewTopicDialog, DeferredTopicAssociationCallout, chooseIcon, isMediaWikiDemo, TopicConstants, logEngagement, useSubstrateMSAIAPI, useSubstrateApiWhenGettingTopicEntity, useSubstrateMSAIAPIASPrimary, getStatusMessage, translateResources, translateDoc, translatePeople, translatePerson, translateSite, translateSiteMetadata, translateSubstrateTopicEntity, translateSubstrateAnnotationResponse, translateSubstrateSuggestionSearchAPIResponse, MSIT_KNOWLEDGE_HUB_URL, RestApiError, TopicEntityDataProvider, AggregatedTopicEntityDataProvider, TOPIC_CARD_RELATED_PEOPLE, TOPIC_CARD_RELATED_RESOURCES, TOPIC_ID_ORIGIN_BREAKER, CuratedTypes, DefinitionTypes, TopicPageParams, LinkSourceTypes, isMobileView, RELATED_PEOPLE_LIMIT, RELATED_DOCUMENTS_LIMIT, SUBSTRATE_GETTOPICBYID_EMPTY_RESPONSE_ERROR, EmptyResponseError, isAnnotatePageTitleFlightEnabled, SubstrateManagedDashboardDataProvider, WikiSourceElement, SuggestedDefinitionSourceElement, DataVersion, topicCurated, topicOrigin, _cleanGuid, isSiteKnowledgeCenter, getKnowledgeHubUrl, getKnowledgeHubUrlWithOverrides, _executePostAnnotationActions, _annotateInnerHtmls, _insertAnnotationPreviewLink, _HASHTAGGED_TOPIC_ID_ATTRIBUTE, _KM_PREVIEW_LINK_HTML_TAG, _KM_TOPIC_ID_ATTRIBUTE, canCreateNewTopicOnCurrentSite, canCreateNewTopic, isEnvMSIT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dataProviders_MockApiResponse__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dataProviders/MockApiResponse */ "SIPn");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mockApiResponse", function() { return _dataProviders_MockApiResponse__WEBPACK_IMPORTED_MODULE_0__["mockApiResponse"]; });

/* harmony import */ var _dataProviders_BaseSubstrateTopicDataProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dataProviders/BaseSubstrateTopicDataProvider */ "53ge");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_BaseSubstrateTopicDataProvider", function() { return _dataProviders_BaseSubstrateTopicDataProvider__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _dataProviders_SubstrateTopicsDataProvider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dataProviders/SubstrateTopicsDataProvider */ "0hgF");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SubstrateTopicsDataProvider", function() { return _dataProviders_SubstrateTopicsDataProvider__WEBPACK_IMPORTED_MODULE_2__["SubstrateTopicsDataProvider"]; });

/* harmony import */ var _dataProviders_SubstrateTopicsDataProviderV2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dataProviders/SubstrateTopicsDataProviderV2 */ "TxJm");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SubstrateTopicsDataProviderV2", function() { return _dataProviders_SubstrateTopicsDataProviderV2__WEBPACK_IMPORTED_MODULE_3__["SubstrateTopicsDataProviderV2"]; });

/* harmony import */ var _dataProviders_SubstrateFeedbackDataProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dataProviders/SubstrateFeedbackDataProvider */ "c2YK");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SubstrateFeedbackDataProvider", function() { return _dataProviders_SubstrateFeedbackDataProvider__WEBPACK_IMPORTED_MODULE_4__["SubstrateFeedbackDataProvider"]; });

/* harmony import */ var _dataProviders_SubstrateGetTopicSuggestionProvider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dataProviders/SubstrateGetTopicSuggestionProvider */ "yCN/");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SubstrateGetTopicSuggestionProvider", function() { return _dataProviders_SubstrateGetTopicSuggestionProvider__WEBPACK_IMPORTED_MODULE_5__["SubstrateGetTopicSuggestionProvider"]; });

/* harmony import */ var _dataProviders_CreateTopicDataProvider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dataProviders/CreateTopicDataProvider */ "r7AW");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CreateTopicDataProvider", function() { return _dataProviders_CreateTopicDataProvider__WEBPACK_IMPORTED_MODULE_6__["CreateTopicDataProvider"]; });

/* harmony import */ var _TopicPageLayoutDefaultTemplate__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./TopicPageLayoutDefaultTemplate */ "hrbp");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TopicPageLayoutDefaultTemplate", function() { return _TopicPageLayoutDefaultTemplate__WEBPACK_IMPORTED_MODULE_7__["TopicPageLayoutDefaultTemplate"]; });

/* harmony import */ var _EntityRelationsServiceUtilities__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./EntityRelationsServiceUtilities */ "j84u");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addEntityRelations", function() { return _EntityRelationsServiceUtilities__WEBPACK_IMPORTED_MODULE_8__["addEntityRelations"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getCurationDetails", function() { return _EntityRelationsServiceUtilities__WEBPACK_IMPORTED_MODULE_8__["getCurationDetails"]; });

/* harmony import */ var _TopicUtilities__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./TopicUtilities */ "mAUd");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "generatePreviewUrl", function() { return _TopicUtilities__WEBPACK_IMPORTED_MODULE_9__["generatePreviewUrl"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "openInNewTab", function() { return _TopicUtilities__WEBPACK_IMPORTED_MODULE_9__["openInNewTab"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deprecatedIsSiteKnowledgeCenter", function() { return _TopicUtilities__WEBPACK_IMPORTED_MODULE_9__["deprecatedIsSiteKnowledgeCenter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isPreviewPage", function() { return _TopicUtilities__WEBPACK_IMPORTED_MODULE_9__["isPreviewPage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isCreateTopicPage", function() { return _TopicUtilities__WEBPACK_IMPORTED_MODULE_9__["isCreateTopicPage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isNewPage", function() { return _TopicUtilities__WEBPACK_IMPORTED_MODULE_9__["isNewPage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isLayoutsPage", function() { return _TopicUtilities__WEBPACK_IMPORTED_MODULE_9__["isLayoutsPage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isShowAllTopicsPage", function() { return _TopicUtilities__WEBPACK_IMPORTED_MODULE_9__["isShowAllTopicsPage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getCreateTopicPageUrl", function() { return _TopicUtilities__WEBPACK_IMPORTED_MODULE_9__["getCreateTopicPageUrl"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WEB_VIEW_EXTENSIONS", function() { return _TopicUtilities__WEBPACK_IMPORTED_MODULE_9__["WEB_VIEW_EXTENSIONS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getWebviewUrl", function() { return _TopicUtilities__WEBPACK_IMPORTED_MODULE_9__["getWebviewUrl"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getPathName", function() { return _TopicUtilities__WEBPACK_IMPORTED_MODULE_9__["getPathName"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "countWordFromHTMLString", function() { return _TopicUtilities__WEBPACK_IMPORTED_MODULE_9__["countWordFromHTMLString"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getPageUniqueId", function() { return _TopicUtilities__WEBPACK_IMPORTED_MODULE_9__["getPageUniqueId"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getFeedbackMailLink", function() { return _TopicUtilities__WEBPACK_IMPORTED_MODULE_9__["getFeedbackMailLink"]; });

/* harmony import */ var _dataProviders_Translators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./dataProviders/Translators */ "h4Yq");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_translateResources", function() { return _dataProviders_Translators__WEBPACK_IMPORTED_MODULE_10__["translateResources"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_translateDoc", function() { return _dataProviders_Translators__WEBPACK_IMPORTED_MODULE_10__["translateDoc"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_translatePeople", function() { return _dataProviders_Translators__WEBPACK_IMPORTED_MODULE_10__["translatePeople"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_translatePerson", function() { return _dataProviders_Translators__WEBPACK_IMPORTED_MODULE_10__["translatePerson"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_translateSubstrateSuggestionSearchAPIResponse", function() { return _dataProviders_Translators__WEBPACK_IMPORTED_MODULE_10__["translateSubstrateSuggestionSearchAPIResponse"]; });

/* harmony import */ var _dataProviders_SubstrateGetTopicByIdDataProvider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./dataProviders/SubstrateGetTopicByIdDataProvider */ "HAeJ");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_SubstrateGetTopicByIdDataProvider", function() { return _dataProviders_SubstrateGetTopicByIdDataProvider__WEBPACK_IMPORTED_MODULE_11__["SubstrateGetTopicByIdDataProvider"]; });

/* harmony import */ var _dataProviders_SubstrateGetTopicsByIdsDataProvider__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./dataProviders/SubstrateGetTopicsByIdsDataProvider */ "vFgL");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_SubstrateGetTopicsByIdsDataProvider", function() { return _dataProviders_SubstrateGetTopicsByIdsDataProvider__WEBPACK_IMPORTED_MODULE_12__["SubstrateGetTopicsByIdsDataProvider"]; });

/* harmony import */ var _dataProviders_SubstrateAnnotationDataProvider__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./dataProviders/SubstrateAnnotationDataProvider */ "KFQH");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_SubstrateAnnotationDataProvider", function() { return _dataProviders_SubstrateAnnotationDataProvider__WEBPACK_IMPORTED_MODULE_13__["SubstrateAnnotationDataProvider"]; });

/* harmony import */ var _dataProviders_Utilities__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./dataProviders/Utilities */ "6DK4");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_useSubstrateMSAIAPI", function() { return _dataProviders_Utilities__WEBPACK_IMPORTED_MODULE_14__["useSubstrateMSAIAPI"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_useSubstrateMSAIAPIASPrimary", function() { return _dataProviders_Utilities__WEBPACK_IMPORTED_MODULE_14__["useSubstrateMSAIAPIASPrimary"]; });

/* harmony import */ var _baseKMWebPart__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./baseKMWebPart */ "nAUB");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_BaseKMWebPart", function() { return _baseKMWebPart__WEBPACK_IMPORTED_MODULE_15__["BaseKMWebPart"]; });

/* harmony import */ var _topicCard_deferredTopicCard_DeferredTopicCard__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./topicCard/deferredTopicCard/DeferredTopicCard */ "YbI0");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_DeferredTopicCard", function() { return _topicCard_deferredTopicCard_DeferredTopicCard__WEBPACK_IMPORTED_MODULE_16__["DeferredTopicCard"]; });

/* harmony import */ var _topicCache_TopicCache__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./topicCache/TopicCache */ "NG/M");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_TopicCache", function() { return _topicCache_TopicCache__WEBPACK_IMPORTED_MODULE_17__["TopicCache"]; });

/* harmony import */ var _components_DeferredCreateNewTopicDialog__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/DeferredCreateNewTopicDialog */ "Z8sV");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DeferredCreateNewTopicDialog", function() { return _components_DeferredCreateNewTopicDialog__WEBPACK_IMPORTED_MODULE_18__["default"]; });

/* harmony import */ var _components_DeferredTopicAssociationCallout__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/DeferredTopicAssociationCallout */ "cJNI");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DeferredTopicAssociationCallout", function() { return _components_DeferredTopicAssociationCallout__WEBPACK_IMPORTED_MODULE_19__["default"]; });

/* harmony import */ var _common_ChooseIcon__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./common/ChooseIcon */ "1jTL");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "chooseIcon", function() { return _common_ChooseIcon__WEBPACK_IMPORTED_MODULE_20__["chooseIcon"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isMediaWikiDemo", function() { return _common_ChooseIcon__WEBPACK_IMPORTED_MODULE_20__["isMediaWikiDemo"]; });

/* harmony import */ var _common_Constants__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./common/Constants */ "rMgv");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TopicConstants", function() { return _common_Constants__WEBPACK_IMPORTED_MODULE_21__["default"]; });

/* harmony import */ var _logEngagement__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./logEngagement */ "M0jl");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "logEngagement", function() { return _logEngagement__WEBPACK_IMPORTED_MODULE_22__["default"]; });

/* harmony import */ var _dataProviders__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./dataProviders */ "jrLr");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useSubstrateMSAIAPI", function() { return _dataProviders__WEBPACK_IMPORTED_MODULE_23__["useSubstrateMSAIAPI"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useSubstrateApiWhenGettingTopicEntity", function() { return _dataProviders__WEBPACK_IMPORTED_MODULE_23__["useSubstrateApiWhenGettingTopicEntity"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useSubstrateMSAIAPIASPrimary", function() { return _dataProviders__WEBPACK_IMPORTED_MODULE_23__["useSubstrateMSAIAPIASPrimary"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getStatusMessage", function() { return _dataProviders__WEBPACK_IMPORTED_MODULE_23__["getStatusMessage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "translateResources", function() { return _dataProviders__WEBPACK_IMPORTED_MODULE_23__["translateResources"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "translateDoc", function() { return _dataProviders__WEBPACK_IMPORTED_MODULE_23__["translateDoc"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "translatePeople", function() { return _dataProviders__WEBPACK_IMPORTED_MODULE_23__["translatePeople"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "translatePerson", function() { return _dataProviders__WEBPACK_IMPORTED_MODULE_23__["translatePerson"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "translateSite", function() { return _dataProviders__WEBPACK_IMPORTED_MODULE_23__["translateSite"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "translateSiteMetadata", function() { return _dataProviders__WEBPACK_IMPORTED_MODULE_23__["translateSiteMetadata"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "translateSubstrateTopicEntity", function() { return _dataProviders__WEBPACK_IMPORTED_MODULE_23__["translateSubstrateTopicEntity"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "translateSubstrateAnnotationResponse", function() { return _dataProviders__WEBPACK_IMPORTED_MODULE_23__["translateSubstrateAnnotationResponse"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "translateSubstrateSuggestionSearchAPIResponse", function() { return _dataProviders__WEBPACK_IMPORTED_MODULE_23__["translateSubstrateSuggestionSearchAPIResponse"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MSIT_KNOWLEDGE_HUB_URL", function() { return _dataProviders__WEBPACK_IMPORTED_MODULE_23__["MSIT_KNOWLEDGE_HUB_URL"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RestApiError", function() { return _dataProviders__WEBPACK_IMPORTED_MODULE_23__["RestApiError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TopicEntityDataProvider", function() { return _baseKMWebPart__WEBPACK_IMPORTED_MODULE_15__["TopicEntityDataProvider"]; });

/* harmony import */ var _dataProviders_AggregatedTopicEntityDataProvider__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./dataProviders/AggregatedTopicEntityDataProvider */ "DnL5");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AggregatedTopicEntityDataProvider", function() { return _dataProviders_AggregatedTopicEntityDataProvider__WEBPACK_IMPORTED_MODULE_24__["AggregatedTopicEntityDataProvider"]; });

/* harmony import */ var _common_addLinkSource__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./common/addLinkSource */ "NmML");
/* empty/unused harmony star reexport *//* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TOPIC_CARD_RELATED_PEOPLE", function() { return _common_Constants__WEBPACK_IMPORTED_MODULE_21__["TOPIC_CARD_RELATED_PEOPLE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TOPIC_CARD_RELATED_RESOURCES", function() { return _common_Constants__WEBPACK_IMPORTED_MODULE_21__["TOPIC_CARD_RELATED_RESOURCES"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TOPIC_ID_ORIGIN_BREAKER", function() { return _common_Constants__WEBPACK_IMPORTED_MODULE_21__["TOPIC_ID_ORIGIN_BREAKER"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CuratedTypes", function() { return _common_Constants__WEBPACK_IMPORTED_MODULE_21__["CuratedTypes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DefinitionTypes", function() { return _common_Constants__WEBPACK_IMPORTED_MODULE_21__["DefinitionTypes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TopicPageParams", function() { return _common_Constants__WEBPACK_IMPORTED_MODULE_21__["TopicPageParams"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LinkSourceTypes", function() { return _common_Constants__WEBPACK_IMPORTED_MODULE_21__["LinkSourceTypes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isMobileView", function() { return _common_Constants__WEBPACK_IMPORTED_MODULE_21__["isMobileView"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RELATED_PEOPLE_LIMIT", function() { return _common_Constants__WEBPACK_IMPORTED_MODULE_21__["RELATED_PEOPLE_LIMIT"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RELATED_DOCUMENTS_LIMIT", function() { return _common_Constants__WEBPACK_IMPORTED_MODULE_21__["RELATED_DOCUMENTS_LIMIT"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SUBSTRATE_GETTOPICBYID_EMPTY_RESPONSE_ERROR", function() { return _common_Constants__WEBPACK_IMPORTED_MODULE_21__["SUBSTRATE_GETTOPICBYID_EMPTY_RESPONSE_ERROR"]; });

/* harmony import */ var _common_EmptyResponseError__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./common/EmptyResponseError */ "YC7o");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EmptyResponseError", function() { return _common_EmptyResponseError__WEBPACK_IMPORTED_MODULE_26__["EmptyResponseError"]; });

/* harmony import */ var _common_Flights__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./common/Flights */ "w4+A");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isAnnotatePageTitleFlightEnabled", function() { return _common_Flights__WEBPACK_IMPORTED_MODULE_27__["isAnnotatePageTitleFlightEnabled"]; });

/* harmony import */ var _dataProviders_SubstrateManagedDashboardDataProvider__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./dataProviders/SubstrateManagedDashboardDataProvider */ "qUk7");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SubstrateManagedDashboardDataProvider", function() { return _dataProviders_SubstrateManagedDashboardDataProvider__WEBPACK_IMPORTED_MODULE_28__["SubstrateManagedDashboardDataProvider"]; });

/* harmony import */ var _components_DefinitionSourceElement__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/DefinitionSourceElement */ "6ayc");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WikiSourceElement", function() { return _components_DefinitionSourceElement__WEBPACK_IMPORTED_MODULE_29__["WikiSourceElement"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SuggestedDefinitionSourceElement", function() { return _components_DefinitionSourceElement__WEBPACK_IMPORTED_MODULE_29__["SuggestedDefinitionSourceElement"]; });

/* harmony import */ var _DataVersion__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./DataVersion */ "jamc");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DataVersion", function() { return _DataVersion__WEBPACK_IMPORTED_MODULE_30__["DataVersion"]; });

/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./utilities */ "3rh1");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "topicCurated", function() { return _utilities__WEBPACK_IMPORTED_MODULE_31__["topicCurated"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "topicOrigin", function() { return _utilities__WEBPACK_IMPORTED_MODULE_31__["topicOrigin"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_cleanGuid", function() { return _utilities__WEBPACK_IMPORTED_MODULE_31__["_cleanGuid"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isSiteKnowledgeCenter", function() { return _utilities__WEBPACK_IMPORTED_MODULE_31__["isSiteKnowledgeCenter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getKnowledgeHubUrl", function() { return _utilities__WEBPACK_IMPORTED_MODULE_31__["getKnowledgeHubUrl"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getKnowledgeHubUrlWithOverrides", function() { return _utilities__WEBPACK_IMPORTED_MODULE_31__["getKnowledgeHubUrlWithOverrides"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_executePostAnnotationActions", function() { return _utilities__WEBPACK_IMPORTED_MODULE_31__["_executePostAnnotationActions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_annotateInnerHtmls", function() { return _utilities__WEBPACK_IMPORTED_MODULE_31__["_annotateInnerHtmls"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_insertAnnotationPreviewLink", function() { return _utilities__WEBPACK_IMPORTED_MODULE_31__["_insertAnnotationPreviewLink"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_HASHTAGGED_TOPIC_ID_ATTRIBUTE", function() { return _utilities__WEBPACK_IMPORTED_MODULE_31__["_HASHTAGGED_TOPIC_ID_ATTRIBUTE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_KM_PREVIEW_LINK_HTML_TAG", function() { return _utilities__WEBPACK_IMPORTED_MODULE_31__["_KM_PREVIEW_LINK_HTML_TAG"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_KM_TOPIC_ID_ATTRIBUTE", function() { return _utilities__WEBPACK_IMPORTED_MODULE_31__["_KM_TOPIC_ID_ATTRIBUTE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "canCreateNewTopicOnCurrentSite", function() { return _utilities__WEBPACK_IMPORTED_MODULE_31__["canCreateNewTopicOnCurrentSite"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "canCreateNewTopic", function() { return _utilities__WEBPACK_IMPORTED_MODULE_31__["canCreateNewTopic"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isEnvMSIT", function() { return _utilities__WEBPACK_IMPORTED_MODULE_31__["isEnvMSIT"]; });

/**
 * This package contains shared code for Knowledge Management Topic. Only shared interfaces
 * and common code should be placed in this package.
 *
 * @packagedocumentation
 *
 */




































/***/ }),

/***/ "nAUB":
/*!************************************!*\
  !*** ./lib/baseKMWebPart/index.js ***!
  \************************************/
/*! exports provided: BaseKMWebPart, TopicEntityDataProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BaseKMWebPart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseKMWebPart */ "Un9N");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaseKMWebPart", function() { return _BaseKMWebPart__WEBPACK_IMPORTED_MODULE_0__["BaseKMWebPart"]; });

/* harmony import */ var _TopicEntityDataProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TopicEntityDataProvider */ "qzjp");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TopicEntityDataProvider", function() { return _TopicEntityDataProvider__WEBPACK_IMPORTED_MODULE_1__["TopicEntityDataProvider"]; });





/***/ }),

/***/ "oUEy":
/*!****************************************!*\
  !*** ./lib/dataProviders/Constants.js ***!
  \****************************************/
/*! exports provided: QOS_SUBSTRATE_API_PREFIX, QOS_DATAPROVIDER_SUFFIX, USE_YUKON_HIGHLIGHT_API, USE_YUKON_AND_TOPIC_PREDICTOR, SPDF_TEST_HEADER, SPDF_KNOWLEDGE_HUB_URL, MSIT_KNOWLEDGE_HUB_URL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QOS_SUBSTRATE_API_PREFIX", function() { return QOS_SUBSTRATE_API_PREFIX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QOS_DATAPROVIDER_SUFFIX", function() { return QOS_DATAPROVIDER_SUFFIX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USE_YUKON_HIGHLIGHT_API", function() { return USE_YUKON_HIGHLIGHT_API; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USE_YUKON_AND_TOPIC_PREDICTOR", function() { return USE_YUKON_AND_TOPIC_PREDICTOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SPDF_TEST_HEADER", function() { return SPDF_TEST_HEADER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SPDF_KNOWLEDGE_HUB_URL", function() { return SPDF_KNOWLEDGE_HUB_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MSIT_KNOWLEDGE_HUB_URL", function() { return MSIT_KNOWLEDGE_HUB_URL; });
/**
 * @Copyright (c) Microsoft Corporation.  All rights reserved.
 *
 */
// QOS Logging
var QOS_SUBSTRATE_API_PREFIX = 'CSIKM.Substrate';
var QOS_DATAPROVIDER_SUFFIX = 'DP';
// Debug Headers
// Enables Yukon Highlight API
var USE_YUKON_HIGHLIGHT_API = 'X-Debug-UseYukonHighlightApi';
// Enables Topic Predictor
var USE_YUKON_AND_TOPIC_PREDICTOR = 'X-Debug-UseYukonAndTopicPredictor';
// Enables Topic Predictor
var SPDF_TEST_HEADER = 'X-SPDF-TestFeedback';
/**
 * Microsoft test Cortex knowledge center (a.k.a. topic center)
 *
 * @internal
 */
var SPDF_KNOWLEDGE_HUB_URL = 'https://microsoft.sharepoint-df.com/teams/knowledgehub';
/**
 * Microsoft official Cortex knowledge center (a.k.a. topic center)
 *
 * @internal
 */
var MSIT_KNOWLEDGE_HUB_URL = 'https://microsoft.sharepoint.com/sites/knowledgecenter';


/***/ }),

/***/ "pR+h":
/*!****************************************************************!*\
  !*** ./lib/utilities/topicAnnotation/AnnotationUtilities.resx ***!
  \****************************************************************/
/*! exports provided: TopicAnnotationAriaLabel, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"TopicAnnotationAriaLabel\":\"TopicAnnotationAriaLabel\"}");

/***/ }),

/***/ "qUk7":
/*!********************************************************************!*\
  !*** ./lib/dataProviders/SubstrateManagedDashboardDataProvider.js ***!
  \********************************************************************/
/*! exports provided: SubstrateManagedDashboardDataProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubstrateManagedDashboardDataProvider", function() { return SubstrateManagedDashboardDataProvider; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _BaseSubstrateTopicDataProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BaseSubstrateTopicDataProvider */ "53ge");
/**
 * @copyright Microsoft Corporation. All rights reserved.
 */


/**
 * Gets the data to populate the Topic Center's dashboard
 * @internal
 */
var SubstrateManagedDashboardDataProvider = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(SubstrateManagedDashboardDataProvider, _super);
    function SubstrateManagedDashboardDataProvider(serviceScope, managedTopicState) {
        var _this = _super.call(this, serviceScope) || this;
        _this._pastDays = 30;
        _this._managedTopicState = managedTopicState;
        return _this;
    }
    SubstrateManagedDashboardDataProvider.prototype.getDashboardData = function () {
        return this.getRequest().then(function (response) {
            return response;
        });
    };
    Object.defineProperty(SubstrateManagedDashboardDataProvider.prototype, "isPost", {
        get: function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SubstrateManagedDashboardDataProvider.prototype, "apiName", {
        get: function () {
            return 'Topics/ManagedDashboard';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SubstrateManagedDashboardDataProvider.prototype, "qosTag", {
        get: function () {
            return 'ManagedDashboard';
        },
        enumerable: true,
        configurable: true
    });
    SubstrateManagedDashboardDataProvider.prototype.getCustomRequestOptions = function (options) {
        options.headers['X-ODataQuery'] = 'true';
        var payload = {
            ManagedTopicState: this._managedTopicState,
            PastDays: this._pastDays
        };
        options.body = JSON.stringify(payload);
    };
    return SubstrateManagedDashboardDataProvider;
}(_BaseSubstrateTopicDataProvider__WEBPACK_IMPORTED_MODULE_1__["default"]));



/***/ }),

/***/ "qzjp":
/*!******************************************************!*\
  !*** ./lib/baseKMWebPart/TopicEntityDataProvider.js ***!
  \******************************************************/
/*! exports provided: TopicEntityDataProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopicEntityDataProvider", function() { return TopicEntityDataProvider; });
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/sp-diagnostics */ "ut3N");
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _microsoft_sp_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @microsoft/sp-http */ "vlQI");
/* harmony import */ var _microsoft_sp_http__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_http__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ms_sp_dataproviders_lib_httpClients_sphome_SPHomeHttpClient__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ms/sp-dataproviders/lib/httpClients/sphome/SPHomeHttpClient */ "/7U8");
/* harmony import */ var _ms_sp_component_utilities_lib_topics_TopicFlightingUtilities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ms/sp-component-utilities/lib/topics/TopicFlightingUtilities */ "Tpx+");
/* harmony import */ var _ms_sp_dataproviders_lib_dataProviders_common_KMTieredCacheHelper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ms/sp-dataproviders/lib/dataProviders/common/KMTieredCacheHelper */ "05y5");
/* harmony import */ var _common_KillSwitches__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/KillSwitches */ "+ORw");
/* harmony import */ var _common_Constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/Constants */ "rMgv");








var DEFAULT_RELATION_COUNT = 8;
/**
 * This class retrieves Topic Entity from Knowledge Base API.
 * @deprecated when we use MSAI API.
 * @internal
 */
var TopicEntityDataProvider = /** @class */ (function () {
    function TopicEntityDataProvider(serviceScope, qosPrefix) {
        this._cacheStrategy = _microsoft_sp_http__WEBPACK_IMPORTED_MODULE_2__["_CacheStrategy"].CacheAndNetwork;
        this._processRawData = function (rawData) {
            return rawData;
        };
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Validate"].isNotNullOrUndefined(serviceScope, 'serviceScope');
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Validate"].isNonemptyString(qosPrefix, 'qosPrefix');
        this._serviceScope = serviceScope;
        this._spHomeHttpClient = this._serviceScope.consume(_ms_sp_dataproviders_lib_httpClients_sphome_SPHomeHttpClient__WEBPACK_IMPORTED_MODULE_3__["default"].serviceKey);
        this._qosPrefix = qosPrefix;
        this._indexedDBEnabled = !Object(_common_KillSwitches__WEBPACK_IMPORTED_MODULE_6__["useIndexDBForEntityIdKSActivated"])() && Object(_ms_sp_component_utilities_lib_topics_TopicFlightingUtilities__WEBPACK_IMPORTED_MODULE_4__["isIndexedDBEnabledForCortexAPIs"])();
        this._useExtraQosData = !Object(_common_KillSwitches__WEBPACK_IMPORTED_MODULE_6__["isGetTopicIdExtraDataKSActivated"])();
    }
    TopicEntityDataProvider.prototype.getTopicEntity = function (topicId, useMined, relationCount) {
        var _this = this;
        if (relationCount === void 0) { relationCount = DEFAULT_RELATION_COUNT; }
        var qosMonitor = new _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__["_QosMonitor"](this._qosPrefix + ".GetTopicById.DP");
        var endPoint = !useMined
            ? "knowledgebase/entities('{0}')"
            : "knowledgebase/entities('{0}')/mined(relationCount=" + relationCount + ")";
        if (!this._indexedDBEnabled) {
            return this._spHomeHttpClient
                .get(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Text"].format(endPoint, topicId), 2)
                .then(function (response) {
                return _this._processServerResponse(response, qosMonitor);
            })
                .catch(function (error) {
                qosMonitor.writeUnexpectedFailure('FailedGetTopicEntity', error);
                throw error;
            });
        }
        else {
            var cacheOptions = {
                alias: 'FirstParty_KMTopicEntityDP',
                id: topicId,
                expirationDuration: _common_Constants__WEBPACK_IMPORTED_MODULE_7__["default"].topicCacheDuration,
                cacheStrategy: this._cacheStrategy,
                extraProps: new Map([[_ms_sp_dataproviders_lib_dataProviders_common_KMTieredCacheHelper__WEBPACK_IMPORTED_MODULE_5__["default"].onlyIndexedDB, true]])
            };
            return this._spHomeHttpClient
                .get(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Text"].format(endPoint, topicId), 2, undefined /*extra headers*/, cacheOptions)
                .then(function (response) {
                return _this._processResponse(response, qosMonitor);
            })
                .catch(function (error) {
                qosMonitor.writeUnexpectedFailure('FailedGetTopicEntity', error);
                throw error;
            });
        }
    };
    TopicEntityDataProvider.prototype._processResponse = function (response, qosMonitor) {
        return _ms_sp_dataproviders_lib_dataProviders_common_KMTieredCacheHelper__WEBPACK_IMPORTED_MODULE_5__["default"].parseClientCachableResponse(response, this._isRawData, this._isCachedDataEmpty, this._processRawData, qosMonitor, this._qosPrefix);
    };
    TopicEntityDataProvider.prototype._processServerResponse = function (response, qosMonitor) {
        if (response.ok) {
            qosMonitor.writeSuccess(!Object(_common_KillSwitches__WEBPACK_IMPORTED_MODULE_6__["addCorrelationIDForGetTopicByIDKSActivated"])() ? this._getExtraData(response) : undefined);
            return response.json();
        }
        else if (response.status === 403) {
            qosMonitor.writeExpectedFailure('TopicEntityResponseFailure', new Error(JSON.stringify(response.body)), this._getExtraData(response));
        }
        else {
            qosMonitor.writeUnexpectedFailure('TopicEntityResponseFailure', new Error(JSON.stringify(response.body)), !Object(_common_KillSwitches__WEBPACK_IMPORTED_MODULE_6__["addCorrelationIDForGetTopicByIDKSActivated"])() ? this._getExtraData(response) : undefined);
            return Promise.reject(new Error("TopicEntity API Failure: " + response.status + ": " + response.statusText));
        }
    };
    TopicEntityDataProvider.prototype._isRawData = function (data) {
        return data && data.Id;
    };
    TopicEntityDataProvider.prototype._isCachedDataEmpty = function (data) {
        return !data.Id || !data.Name;
    };
    TopicEntityDataProvider.prototype._getExtraData = function (response) {
        if (this._useExtraQosData) {
            return {
                mscv: response.headers.get('ms-cv'),
                status: response.status
            };
        }
        else {
            return undefined;
        }
    };
    return TopicEntityDataProvider;
}());



/***/ }),

/***/ "r7AW":
/*!******************************************************!*\
  !*** ./lib/dataProviders/CreateTopicDataProvider.js ***!
  \******************************************************/
/*! exports provided: CreateTopicDataProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateTopicDataProvider", function() { return CreateTopicDataProvider; });
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/sp-diagnostics */ "ut3N");
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ms/sp-telemetry */ "2q6Q");
/* harmony import */ var _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _microsoft_sp_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @microsoft/sp-http */ "vlQI");
/* harmony import */ var _microsoft_sp_http__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_http__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ms/sp-component-utilities */ "hiL/");
/* harmony import */ var _ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _TopicPageLayoutDefaultTemplate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../TopicPageLayoutDefaultTemplate */ "hrbp");
/* harmony import */ var _microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @microsoft/sp-lodash-subset */ "Pk8u");
/* harmony import */ var _microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _RestApiError__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./RestApiError */ "NDxI");
/* harmony import */ var _HttpCode__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./HttpCode */ "Wl6u");
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Utilities */ "6DK4");
/* harmony import */ var _FailureTag__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./FailureTag */ "L15a");
/**
 * @Copyright (c) Microsoft Corporation.  All rights reserved.
 */












/**
 * @internal
 */
var CreateTopicDataProvider = /** @class */ (function () {
    function CreateTopicDataProvider(pageContext, serviceScope) {
        this._logSource = _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_0__["_LogSource"].create('CSIKM.CreateTopicDataProvider');
        this._pageContext = pageContext;
        this._serviceScope = serviceScope;
        this._spHttpClient = serviceScope.consume(_microsoft_sp_http__WEBPACK_IMPORTED_MODULE_3__["SPHttpClient"].serviceKey);
    }
    /*
     * Utility function to parse out odata error message
     */
    /* tslint:disable:no-any */
    CreateTopicDataProvider._getOdataRestApiError = function (response, statusCode) {
        if (statusCode === void 0) { statusCode = _HttpCode__WEBPACK_IMPORTED_MODULE_8__["default"].ServerError; }
        var _a;
        var errorObj = response['odata.error'];
        /* tslint:enable:no-any */
        if ((_a = errorObj) === null || _a === void 0 ? void 0 : _a.message) {
            return new _RestApiError__WEBPACK_IMPORTED_MODULE_7__["default"]("Message: " + errorObj.message.value, statusCode, errorObj.code);
        }
        else {
            return undefined;
        }
    };
    /**
     * create a new topic page
     * Extract from apps/sp-pages/src/chunks/sp-pages-stateManager/dataProvider/SPPageDataProvider.ts#createTopicPageAsync
     */
    CreateTopicDataProvider.prototype.createTopicPage = function (_a) {
        var topic = _a.topic, canvasContent1 = _a.canvasContent1;
        var requestUrl = this._restTopicsEndPointUrl;
        var body = new PageRequestBody({
            Title: topic.Name,
            EntityId: topic.Id !== _ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_4__["NULL_TOPIC_ENTITY"].Id ? topic.Id : '',
            // @todo: (VSO# 823085: remove project type hardcoding)
            EntityType: 'Project',
            EntityRelations: _ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_4__["EntityRelationsService"].getRelationsAsString(this._serviceScope),
            LayoutWebpartsContent: JSON.stringify(_TopicPageLayoutDefaultTemplate__WEBPACK_IMPORTED_MODULE_5__["TopicPageLayoutDefaultTemplate"].getLayoutWebPartData(topic, this._pageContext)),
            CanvasContent1: JSON.stringify(canvasContent1),
            TopicHeader: 'Topic',
            BannerImageUrl: '/_layouts/15/images/sitepagethumbnail.png',
            PageLayoutType: 'Topic'
        });
        return this._createPage(requestUrl, new PageRequestHeaders('POST'), JSON.stringify(body), 'createTopicPage');
    };
    CreateTopicDataProvider.prototype._createPage = function (requestUrl, headers, body, typeForLog) {
        var qosMonitor = new _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_1__["_QosMonitor"](CreateTopicDataProvider.componentName);
        var options = { body: body, headers: headers };
        _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_0__["_TraceLogger"].logVerbose(this._logSource, typeForLog);
        return this._spHttpClient
            .post(requestUrl, _microsoft_sp_http__WEBPACK_IMPORTED_MODULE_3__["SPHttpClient"].configurations.v1, options)
            .then(function (resp) {
            if (!resp.ok) {
                throw new _RestApiError__WEBPACK_IMPORTED_MODULE_7__["default"](_Utilities__WEBPACK_IMPORTED_MODULE_9__["getStatusMessage"](resp), resp.status);
            }
            return resp.json().then(function (data) {
                var _a;
                var odataError = CreateTopicDataProvider._getOdataRestApiError(data, (_a = resp) === null || _a === void 0 ? void 0 : _a.status);
                if (odataError) {
                    throw odataError;
                }
                return data;
            });
        })
            .catch(function (error) {
            if (error.status === _HttpCode__WEBPACK_IMPORTED_MODULE_8__["default"].Forbidden) {
                qosMonitor.writeExpectedFailure(_FailureTag__WEBPACK_IMPORTED_MODULE_10__["failedResponseStatus403"], error);
            }
            else {
                qosMonitor.writeUnexpectedFailure(_FailureTag__WEBPACK_IMPORTED_MODULE_10__["failedResponseStatus"], error);
            }
            throw error;
        });
    };
    Object.defineProperty(CreateTopicDataProvider.prototype, "_webServerRelativeUrl", {
        /**
         * Gets the server Relative Url to the current SPWeb
         */
        get: function () {
            return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__["UrlUtilities"].removeEndSlash(this._pageContext.legacyPageContext.webServerRelativeUrl);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CreateTopicDataProvider.prototype, "_restSitePagesEndPointUrl", {
        /**
         * Gets the SitePages REST EndPoint Url for the current SPWeb
         */
        get: function () {
            return this._webServerRelativeUrl + "/_api/sitepages/pages";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CreateTopicDataProvider.prototype, "_restTopicsEndPointUrl", {
        get: function () {
            return this._restSitePagesEndPointUrl + "/topics";
        },
        enumerable: true,
        configurable: true
    });
    CreateTopicDataProvider.componentName = 'CSIKM.CreateNewTopic';
    return CreateTopicDataProvider;
}());

var PageRequestHeaders = /** @class */ (function () {
    function PageRequestHeaders(method) {
        this['OData-Version'] = '3.0';
        this['If-Match'] = '*';
        this['X-HTTP-Method'] = method;
    }
    return PageRequestHeaders;
}());
var PageRequestBody = /** @class */ (function () {
    /* tslint:disable-next-line:no-any */
    function PageRequestBody(fields) {
        var pageType = 'SP.Publishing.TopicSitePage';
        this.__metadata = {
            type: pageType
        };
        if (fields) {
            Object(_microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_6__["assign"])(this, fields);
        }
    }
    PageRequestBody.prototype.toString = function () {
        return JSON.stringify(this);
    };
    return PageRequestBody;
}());
var PromotedState;
(function (PromotedState) {
    /**
     * Regular page (can later be promoted to news)
     */
    PromotedState[PromotedState["NotPromoted"] = 0] = "NotPromoted";
    /**
     * A draft of a news post
     */
    PromotedState[PromotedState["PromoteOnPublish"] = 1] = "PromoteOnPublish";
    /**
     * News post (a page with special notifications sent out upon publishing)
     */
    PromotedState[PromotedState["Promoted"] = 2] = "Promoted";
})(PromotedState || (PromotedState = {}));


/***/ }),

/***/ "rEBF":
/*!************************************************!*\
  !*** ./lib/utilities/topicAnnotation/index.js ***!
  \************************************************/
/*! exports provided: _executePostAnnotationActions, _annotateInnerHtmls, _insertAnnotationPreviewLink, _HASHTAGGED_TOPIC_ID_ATTRIBUTE, _KM_PREVIEW_LINK_HTML_TAG, _KM_TOPIC_ID_ATTRIBUTE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AnnotationUtilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AnnotationUtilities */ "ybcv");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_executePostAnnotationActions", function() { return _AnnotationUtilities__WEBPACK_IMPORTED_MODULE_0__["executePostAnnotationActions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_annotateInnerHtmls", function() { return _AnnotationUtilities__WEBPACK_IMPORTED_MODULE_0__["annotateInnerHtmls"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_insertAnnotationPreviewLink", function() { return _AnnotationUtilities__WEBPACK_IMPORTED_MODULE_0__["insertAnnotationPreviewLink"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_HASHTAGGED_TOPIC_ID_ATTRIBUTE", function() { return _AnnotationUtilities__WEBPACK_IMPORTED_MODULE_0__["HASHTAGGED_TOPIC_ID_ATTRIBUTE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_KM_PREVIEW_LINK_HTML_TAG", function() { return _AnnotationUtilities__WEBPACK_IMPORTED_MODULE_0__["KM_PREVIEW_LINK_HTML_TAG"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_KM_TOPIC_ID_ATTRIBUTE", function() { return _AnnotationUtilities__WEBPACK_IMPORTED_MODULE_0__["KM_TOPIC_ID_ATTRIBUTE"]; });




/***/ }),

/***/ "rMgv":
/*!*********************************!*\
  !*** ./lib/common/Constants.js ***!
  \*********************************/
/*! exports provided: default, TOPIC_CARD_RELATED_PEOPLE, TOPIC_CARD_RELATED_RESOURCES, TOPIC_ID_ORIGIN_BREAKER, CuratedTypes, DefinitionTypes, TopicPageParams, LinkSourceTypes, isMobileView, RELATED_PEOPLE_LIMIT, RELATED_DOCUMENTS_LIMIT, SUBSTRATE_GETTOPICBYID_EMPTY_RESPONSE_ERROR */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOPIC_CARD_RELATED_PEOPLE", function() { return TOPIC_CARD_RELATED_PEOPLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOPIC_CARD_RELATED_RESOURCES", function() { return TOPIC_CARD_RELATED_RESOURCES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOPIC_ID_ORIGIN_BREAKER", function() { return TOPIC_ID_ORIGIN_BREAKER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CuratedTypes", function() { return CuratedTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefinitionTypes", function() { return DefinitionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopicPageParams", function() { return TopicPageParams; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkSourceTypes", function() { return LinkSourceTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isMobileView", function() { return isMobileView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RELATED_PEOPLE_LIMIT", function() { return RELATED_PEOPLE_LIMIT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RELATED_DOCUMENTS_LIMIT", function() { return RELATED_DOCUMENTS_LIMIT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SUBSTRATE_GETTOPICBYID_EMPTY_RESPONSE_ERROR", function() { return SUBSTRATE_GETTOPICBYID_EMPTY_RESPONSE_ERROR; });
/**
 * @Copyright (c) Microsoft Corporation.  All rights reserved.
 */
/**
 * Constant variables for Cortex.
 *
 * @internal
 */
var Constants = /** @class */ (function () {
    function Constants() {
    }
    Constants.topicViewerConfirmedTopicsLogPrefix = 'CSKIM.TopicViewer.ConfirmedTopics.DP';
    Constants.topicViewerUnconfirmedTopicsLogPrefix = 'CSKIM.TopicViewer.UnconfirmedTopics.DP';
    Constants.topicViewerExcludedTopicsLogPrefix = 'CSKIM.TopicViewer.ExcludedTopics.DP';
    Constants.topicPagePreviewStubFileName = 'TopicPagePreview.aspx';
    Constants.createTopicPageStubFileName = 'CreateTopicPage.aspx';
    Constants.newPageStubFileName = 'newpage.aspx';
    Constants.layoutsPagePrefix = '_layouts/15/';
    // Cache (IndexDB) duration to be used in DataProviders(Annotate/Hashtagging/GetTopicByID)
    Constants.topicCacheDuration = 24 * 60 * 60 * 1000; // 24hrs;
    // CSI Knowledge Management related constants
    Constants.kmTopicIdAttribute = 'data-sp-topic-id';
    Constants.kmHashtaggedTopicIdAttribute = 'data-sp-hashtagged-topic-id';
    Constants.kmTopicCardAttribute = 'data-sp-topic-card';
    Constants.kmAnnotateLogPrefix = 'CSIKM.Annotate';
    Constants.kmTopicPickerLogPrefix = 'CSIKM.TopicPicker';
    Constants.kmTopicCenterLogPrefix = 'CSIKM.TopicCenter';
    Constants.kmFeedbackLogPrefix = 'CSIKM.Feedback';
    Constants.kmTopicCardLogPrefix = 'CSIKM.TopicCard';
    Constants.kmTopicPageLogPrefix = 'CSIKM.TopicPage';
    Constants.kmTopicCacheLogPrefix = 'CSIKM.TopicCache';
    Constants.timeZoneStartIndexInDatetime = 19;
    Constants.pageVersionParam = 'version';
    Constants.pageVersionCompareFromParam = 'versionCompareFrom';
    Constants.pageVersionCompareToParam = 'versionCompareTo';
    Constants.currentTopicLoadedEvent = 'CurrentTopicLoadedEvent';
    // Sort Types
    Constants.ascending = 1;
    Constants.descending = 2;
    // Event piped through document to communicate annotated title value.
    Constants.onAnnotateTitleEventName = 'onAnnotateTitle_Cortex';
    return Constants;
}());
/* harmony default export */ __webpack_exports__["default"] = (Constants);
/**
 * @public
 */
var TOPIC_CARD_RELATED_PEOPLE = 'topic_related_people';
/**
 * @public
 */
var TOPIC_CARD_RELATED_RESOURCES = 'topic_related_resources';
/**
 * Breaker used in the API, this just parrots what's found in the topicIds they're passing us.
 *
 * Examples: Al_..., Yukon_..., Cur_...
 * @public
 */
var TOPIC_ID_ORIGIN_BREAKER = '_';
/**
 * Two types of curated
 * @public
 */
// tslint:disable-next-line:typedef variable-name
var CuratedTypes = {
    Curated: 'Curated',
    NotCurated: 'NotCurated'
};
/**
 * Types of a definition
 * @public
 */
// tslint:disable-next-line:typedef variable-name
var DefinitionTypes = {
    MinedDefinition: 'MinedDefinition',
    Definition: 'Definition',
    NoDefinition: 'NoDefinition'
};
/**
 * Definition of the parameters of the topic page.
 *
 * @public
 */
// tslint:disable-next-line:typedef variable-name
var TopicPageParams = {
    // Unique ID of the topic as tracked in the Knowledge center APIs.
    TopicId: 'topicId',
    // Name of the topic, is displayed so that the name in the UX is congruent for the experience.
    TopicName: 'topicName',
    // The source the link open came from.
    // Example Values: ANNOTATION, MGMT, CARD_TEAMS_CHAT
    LinkSource: 'ls',
    // Uses the page to show all available topics.
    ShowAllTopics: 'showAllTopics',
    // Pagination length when showing all topics.
    TopicsCount: 'top',
    // The number of topics we're skipping before the start of our pagination in show all topics.
    SkipCount: 'skip'
};
/**
 * The different URL param value types of properties passed into `TopicPageParams.LinkSource` (as defined above).
 * Some link sources are not listed because the code is in other repo, for example, SearchAnswerCard, SearchEngineResultPage, SiteList.
 * @public
 */
// tslint:disable-next-line:typedef variable-name
var LinkSourceTypes = {
    // Describing links coming from Annotation.
    Annotation: 'ANNOTATION',
    // Describing links coming from the topic card.
    /**
     * @Deprecated use other types instead, will be removed after ks 'bead92c3-0caa-4fc5-8a81-73bd9ad6dcc0' graduated
     */
    TopicCard: 'CARD',
    // Coming from Topic management in the home section of the topic page.
    TopicManagement: 'MGMT',
    // Graph web part in Topic page
    GraphWebPart: 'GRAPH',
    // My Topics web part
    MyTopics: 'MYTOPICS'
};
/**
 * @public
 */
var isMobileView = window.innerWidth < 640;
/**
 * @public
 */
var RELATED_PEOPLE_LIMIT = 2;
/**
 * @public
 */
var RELATED_DOCUMENTS_LIMIT = 2;
/**
 * @public
 */
var SUBSTRATE_GETTOPICBYID_EMPTY_RESPONSE_ERROR = 'Empty response from substrate getTopicById api';


/***/ }),

/***/ "ut3N":
/*!********************************************!*\
  !*** external "@microsoft/sp-diagnostics" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_ut3N__;

/***/ }),

/***/ "vFgL":
/*!******************************************************************!*\
  !*** ./lib/dataProviders/SubstrateGetTopicsByIdsDataProvider.js ***!
  \******************************************************************/
/*! exports provided: SubstrateGetTopicsByIdsDataProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubstrateGetTopicsByIdsDataProvider", function() { return SubstrateGetTopicsByIdsDataProvider; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _BaseSubstrateTopicDataProvider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BaseSubstrateTopicDataProvider */ "53ge");
/* harmony import */ var _Translators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Translators */ "h4Yq");
/*
 * @Copyright (c) Microsoft Corporation.  All rights reserved.
 */




/**
 * @internal
 */
var SubstrateGetTopicsByIdsDataProvider = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(SubstrateGetTopicsByIdsDataProvider, _super);
    function SubstrateGetTopicsByIdsDataProvider(serviceScope) {
        return _super.call(this, serviceScope) || this;
    }
    /**
     * @internal
     */
    SubstrateGetTopicsByIdsDataProvider.prototype.fetchTopics = function (topicIds) {
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["Validate"].isNotNullOrUndefined(topicIds, 'topicIds');
        if (topicIds.length === 0) {
            return Promise.resolve([]);
        }
        this._topicIds = topicIds;
        return this.getRequest().then(function (response) {
            return response.value.map(_Translators__WEBPACK_IMPORTED_MODULE_3__["translateSubstrateTopicEntity"]);
        });
    };
    Object.defineProperty(SubstrateGetTopicsByIdsDataProvider.prototype, "qosTag", {
        get: function () {
            return 'GetTopicsByIds';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SubstrateGetTopicsByIdsDataProvider.prototype, "apiName", {
        get: function () {
            return 'Topics/Ids';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SubstrateGetTopicsByIdsDataProvider.prototype, "isPost", {
        get: function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    SubstrateGetTopicsByIdsDataProvider.prototype.getCustomRequestOptions = function (options) {
        _super.prototype.getCustomRequestOptions.call(this, options);
        options.body = JSON.stringify({ TopicIds: this._topicIds });
    };
    return SubstrateGetTopicsByIdsDataProvider;
}(_BaseSubstrateTopicDataProvider__WEBPACK_IMPORTED_MODULE_2__["default"]));



/***/ }),

/***/ "vlQI":
/*!*************************************!*\
  !*** external "@microsoft/sp-http" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_vlQI__;

/***/ }),

/***/ "w4+A":
/*!*******************************!*\
  !*** ./lib/common/Flights.js ***!
  \*******************************/
/*! exports provided: default, isAnnotatePageTitleFlightEnabled */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isFlightEnabled; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isAnnotatePageTitleFlightEnabled", function() { return isAnnotatePageTitleFlightEnabled; });
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__);

/**
 * @public
 */
function isFlightEnabled(flightId) {
    return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPFlight"].isEnabled(flightId);
}
/**
 * @public
 */
function isAnnotatePageTitleFlightEnabled() {
    return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPFlight"].isEnabled(1442);
}


/***/ }),

/***/ "wKzE":
/*!**************************************!*\
  !*** ./lib/utilities/topicEntity.js ***!
  \**************************************/
/*! exports provided: isSameTopic */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSameTopic", function() { return isSameTopic; });
/**
 * Compares if two topic entities are same topic
 * @internal
 */
/* tslint:disable-next-line:export-name */
function isSameTopic(topic1, topic2) {
    var _a, _b;
    var topicIdsToCompare = new Set([topic1.Id].concat((_a = topic1.OriginalIds, (_a !== null && _a !== void 0 ? _a : []))));
    return [topic2.Id].concat((_b = topic2.OriginalIds, (_b !== null && _b !== void 0 ? _b : []))).some(function (id) { return topicIdsToCompare.has(id); });
}


/***/ }),

/***/ "y88i":
/*!********************************************!*\
  !*** external "@ms/odsp-utilities-bundle" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_y88i__;

/***/ }),

/***/ "yCN/":
/*!******************************************************************!*\
  !*** ./lib/dataProviders/SubstrateGetTopicSuggestionProvider.js ***!
  \******************************************************************/
/*! exports provided: SubstrateGetTopicSuggestionProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubstrateGetTopicSuggestionProvider", function() { return SubstrateGetTopicSuggestionProvider; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ms_sp_dataproviders_lib_dataProviders_common_KMTieredCacheHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ms/sp-dataproviders/lib/dataProviders/common/KMTieredCacheHelper */ "05y5");
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @microsoft/sp-diagnostics */ "ut3N");
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _BaseSubstrateTopicDataProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./BaseSubstrateTopicDataProvider */ "53ge");
/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Constants */ "oUEy");
/**
 * @Copyright (c) Microsoft Corporation.  All rights reserved.
 *
 * Substrate Cortex Get topic by ID data provider.
 */





/**
 * @internal
 */
var SubstrateGetTopicSuggestionProvider = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(SubstrateGetTopicSuggestionProvider, _super);
    function SubstrateGetTopicSuggestionProvider(serviceScope) {
        var _this = _super.call(this, serviceScope) || this;
        _this._processRawData = function (rawData) {
            if (!!rawData.value) {
                return rawData;
            }
        };
        return _this;
    }
    Object.defineProperty(SubstrateGetTopicSuggestionProvider.prototype, "qosTag", {
        get: function () {
            return 'GetTopicSuggestion';
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @internal
     */
    SubstrateGetTopicSuggestionProvider.prototype.getTopicSuggestion = function (prefix, cacheOptions) {
        if (this._isIndexedDBEnabled && cacheOptions) {
            return this._getClientCachableRequest(prefix, cacheOptions);
        }
        else {
            return this.getRequest("&prefix=" + prefix).then(function (response) {
                return response.value;
            });
        }
    };
    SubstrateGetTopicSuggestionProvider.prototype._getClientCachableRequest = function (prefix, cacheOptions) {
        var _this = this;
        var qosMonitor = new _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__["_QosMonitor"](_Constants__WEBPACK_IMPORTED_MODULE_4__["QOS_SUBSTRATE_API_PREFIX"] + "." + this.qosTag + ".API." + _Constants__WEBPACK_IMPORTED_MODULE_4__["QOS_DATAPROVIDER_SUFFIX"]);
        return this.getRequest("&prefix=" + prefix, cacheOptions).then(function (response) {
            return _ms_sp_dataproviders_lib_dataProviders_common_KMTieredCacheHelper__WEBPACK_IMPORTED_MODULE_1__["default"].parseClientCachableResponse(response, _this._isRawData, _this._isCachedDataEmpty, _this._processRawData, qosMonitor, _Constants__WEBPACK_IMPORTED_MODULE_4__["QOS_SUBSTRATE_API_PREFIX"] + "." + _this.qosTag + ".API")
                .then(function (entityContainer) {
                return entityContainer.value;
            })
                .catch(function (error) {
                return Promise.reject(error);
            });
        });
    };
    SubstrateGetTopicSuggestionProvider.prototype._isRawData = function (data) {
        return data && data.value;
    };
    SubstrateGetTopicSuggestionProvider.prototype._isCachedDataEmpty = function (data) {
        return data.value.length === 0;
    };
    return SubstrateGetTopicSuggestionProvider;
}(_BaseSubstrateTopicDataProvider__WEBPACK_IMPORTED_MODULE_3__["default"]));



/***/ }),

/***/ "ybcv":
/*!**************************************************************!*\
  !*** ./lib/utilities/topicAnnotation/AnnotationUtilities.js ***!
  \**************************************************************/
/*! exports provided: KM_TOPIC_ID_ATTRIBUTE, HASHTAGGED_TOPIC_ID_ATTRIBUTE, KM_PREVIEW_LINK_HTML_TAG, getAnnotationPreviewLinkStyles, getAnnotationMatches, annotateInnerHtmls, filterRepeatingMatches, insertAnnotationPreviewLink, encodeQuotes, executePostAnnotationActions, removeAnnotationEventHandlers, generateAnnotationEventHandlers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KM_TOPIC_ID_ATTRIBUTE", function() { return KM_TOPIC_ID_ATTRIBUTE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HASHTAGGED_TOPIC_ID_ATTRIBUTE", function() { return HASHTAGGED_TOPIC_ID_ATTRIBUTE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KM_PREVIEW_LINK_HTML_TAG", function() { return KM_PREVIEW_LINK_HTML_TAG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAnnotationPreviewLinkStyles", function() { return getAnnotationPreviewLinkStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAnnotationMatches", function() { return getAnnotationMatches; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "annotateInnerHtmls", function() { return annotateInnerHtmls; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterRepeatingMatches", function() { return filterRepeatingMatches; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "insertAnnotationPreviewLink", function() { return insertAnnotationPreviewLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "encodeQuotes", function() { return encodeQuotes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "executePostAnnotationActions", function() { return executePostAnnotationActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeAnnotationEventHandlers", function() { return removeAnnotationEventHandlers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateAnnotationEventHandlers", function() { return generateAnnotationEventHandlers; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/office-ui-fabric-react-bundle */ "KL1q");
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @microsoft/sp-diagnostics */ "ut3N");
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ms/sp-component-utilities */ "hiL/");
/* harmony import */ var _ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _topicEntity__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../topicEntity */ "wKzE");
/* harmony import */ var _dataProviders__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../dataProviders */ "jrLr");
/* harmony import */ var _dataProviders_SubstrateAnnotationDataProvider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../dataProviders/SubstrateAnnotationDataProvider */ "KFQH");
/* harmony import */ var _AnnotationUtilities_resx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./AnnotationUtilities.resx */ "pR+h");
var _AnnotationUtilities_resx__WEBPACK_IMPORTED_MODULE_8___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./AnnotationUtilities.resx */ "pR+h", 1);
/**
 * @Copyright (c) Microsoft Corporation.  All rights reserved.
 */









var importantCSSString = '!important';
var allTopicsPageGuid = _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__["Guid"].parse('9833225a-d24b-4b9e-b16d-bba52bae6e23');
/**
 * @internal
 */
var KM_TOPIC_ID_ATTRIBUTE = 'data-sp-topic-id';
/**
 * @internal
 */
var HASHTAGGED_TOPIC_ID_ATTRIBUTE = 'data-sp-hashtagged-topic-id';
/**
 * @internal
 */
var KM_PREVIEW_LINK_HTML_TAG = 'span';
var HASHTAGGED_ANNOTATION_QUERY_SELECTOR = "a[" + HASHTAGGED_TOPIC_ID_ATTRIBUTE + "]";
var ALL_ANNOTATION_QUERY_SELECTOR = KM_PREVIEW_LINK_HTML_TAG + "[" + KM_TOPIC_ID_ATTRIBUTE + "]," + HASHTAGGED_ANNOTATION_QUERY_SELECTOR;
/**
 * Common rendering style for annotation preview links
 * @internal
 */
function getAnnotationPreviewLinkStyles() {
    var theme = Object(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_1__["getTheme"])();
    return Object(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_1__["mergeStyleSets"])({
        highlightSpacingFix: {
            borderBottom: 'none' + importantCSSString,
            textDecoration: 'underline',
            backgroundColor: theme.palette.neutralLighter + importantCSSString,
            textDecorationColor: theme.palette.neutralPrimary,
            ':hover': {
                backgroundColor: theme.palette.themeLighter + importantCSSString,
                textDecorationColor: theme.palette.themeDark
            }
        },
        highlight: {
            cursor: 'pointer',
            backgroundColor: theme.palette.neutralLight,
            borderBottom: '1px solid',
            borderBottomColor: theme.palette.neutralPrimary,
            color: theme.palette.neutralPrimary + importantCSSString,
            ':hover': {
                backgroundColor: theme.palette.themeLighter,
                borderBottomColor: theme.palette.themeDark,
                // Adding !important to override the <a> styling in hashtagged topics.
                color: theme.palette.themeDark + importantCSSString
            }
        }
    });
}
/**
 * This function marks the annotation position of an input text
 * @param contentArray - the input text array with id to identity each text
 * @param serviceScope - ServiceScope
 * @param spoId - an object composited by siteId, webId, page uniqueId
 * @param doNotRetrieveTopicDetails - optional param to not retrieve topic entity for identified annotations
 * @internal
 */
function getAnnotationMatches(contentArray, serviceScope, spoId, doNotRetrieveTopicDetails) {
    // If this content already has annotations, do not double annotate it.
    var contentToAnnotate = contentArray.filter(function (content) { return content.text.indexOf(KM_TOPIC_ID_ATTRIBUTE) === -1; });
    if (!contentToAnnotate || contentToAnnotate.length === 0) {
        return Promise.resolve(undefined);
    }
    var substrateAnnotationDataProvider = new _dataProviders_SubstrateAnnotationDataProvider__WEBPACK_IMPORTED_MODULE_7__["SubstrateAnnotationDataProvider"](serviceScope, doNotRetrieveTopicDetails);
    if (!spoId) {
        // Using harcoded GUID until backend can handle empty guids.
        spoId = {
            siteId: allTopicsPageGuid,
            webId: allTopicsPageGuid,
            uniqueId: allTopicsPageGuid
        };
    }
    return substrateAnnotationDataProvider
        .getAnnotations(contentToAnnotate, spoId)
        .then(function (apiResponse) { return Object(_dataProviders__WEBPACK_IMPORTED_MODULE_6__["translateSubstrateAnnotationResponse"])(apiResponse); });
}
/**
 * This is specific annotation generator for RTE inner HTML.
 * @internal
 */
function annotateInnerHtmls(contentArray, serviceScope, topicCache, spoId) {
    return getAnnotationMatches(contentArray, serviceScope, spoId).then(function (response) {
        var e_1, _a, e_2, _b;
        topicCache.update(response.EntityDetails);
        var filteredSections = filterRepeatingMatches(contentArray, response.PageMatches, false);
        var sectionMatchMap = filteredSections.reduce(function (acc, section) {
            acc.set(section.ComponentId, section.Matches);
            return acc;
        }, new Map());
        try {
            for (var contentArray_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(contentArray), contentArray_1_1 = contentArray_1.next(); !contentArray_1_1.done; contentArray_1_1 = contentArray_1.next()) {
                var content = contentArray_1_1.value;
                if (!sectionMatchMap.has(content.id)) {
                    continue;
                }
                // Sorting in reverse order, because modifying tags from the end doesn't change the prefix length.
                // This way we don't have to do any offset-related calculations.
                var matches = sectionMatchMap.get(content.id).sort(function (a, b) { return b.Start - a.Start; });
                if (content.text) {
                    var currentTopicEntity = serviceScope.consume(_ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_4__["TopicDataService"].serviceKey).currentTopicEntity;
                    try {
                        for (var matches_1 = (e_2 = void 0, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(matches)), matches_1_1 = matches_1.next(); !matches_1_1.done; matches_1_1 = matches_1.next()) {
                            var match = matches_1_1.value;
                            var topicEntity = topicCache.get(match.Entities[0].EntityId);
                            if (topicEntity) {
                                if (!Object(_topicEntity__WEBPACK_IMPORTED_MODULE_5__["isSameTopic"])(topicEntity, currentTopicEntity)) {
                                    content.text = insertAnnotationPreviewLink(content.text, topicEntity, match);
                                }
                            }
                            else {
                                _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_3__["_TraceLogger"].logError(_microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_3__["_LogSource"].create('TopicAnnotator'), new Error('Topic Entity missing form response Entity id: ' + match.Entities[0].EntityId));
                            }
                        }
                    }
                    catch (e_2_1) { e_2 = { error: e_2_1 }; }
                    finally {
                        try {
                            if (matches_1_1 && !matches_1_1.done && (_b = matches_1.return)) _b.call(matches_1);
                        }
                        finally { if (e_2) throw e_2.error; }
                    }
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (contentArray_1_1 && !contentArray_1_1.done && (_a = contentArray_1.return)) _a.call(contentArray_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return contentArray;
    });
}
/**
 * @internal
 */
function filterRepeatingMatches(contentArray, sections, shouldAnnotateDuplicates) {
    var e_3, _a, e_4, _b;
    var _c;
    if (shouldAnnotateDuplicates) {
        return sections;
    }
    var result = [];
    var seenEntityIds = new Set([]);
    var contentMap = new Map(contentArray.map(function (item) { return [item.id, item.text]; }));
    try {
        for (var sections_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(sections), sections_1_1 = sections_1.next(); !sections_1_1.done; sections_1_1 = sections_1.next()) {
            var section = sections_1_1.value;
            var currentSection = { ComponentId: section.ComponentId, Matches: [] };
            try {
                for (var _d = (e_4 = void 0, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(section.Matches)), _e = _d.next(); !_e.done; _e = _d.next()) {
                    var match = _e.value;
                    var entityId = match.Entities[0].EntityId;
                    if (((_c = contentMap
                        .get(currentSection.ComponentId)) === null || _c === void 0 ? void 0 : _c.indexOf(HASHTAGGED_TOPIC_ID_ATTRIBUTE + "=\"" + entityId + "\"")) > -1) {
                        // skip annotating hashtagged topics
                        seenEntityIds.add(entityId);
                    }
                    else if (!seenEntityIds.has(entityId)) {
                        seenEntityIds.add(entityId);
                        currentSection.Matches.push(match);
                    }
                }
            }
            catch (e_4_1) { e_4 = { error: e_4_1 }; }
            finally {
                try {
                    if (_e && !_e.done && (_b = _d.return)) _b.call(_d);
                }
                finally { if (e_4) throw e_4.error; }
            }
            result.push(currentSection);
        }
    }
    catch (e_3_1) { e_3 = { error: e_3_1 }; }
    finally {
        try {
            if (sections_1_1 && !sections_1_1.done && (_a = sections_1.return)) _a.call(sections_1);
        }
        finally { if (e_3) throw e_3.error; }
    }
    return result;
}
/**
 * insert annotation link to matched topic among the input string
 * @internal
 */
function insertAnnotationPreviewLink(inputString, entity, match) {
    // Make sure we highlight the match length and not the entity name length, as they can be different. Many times Alexandria
    // performs de-duping of entities. e.g. FxCop and OACR are both the same entity as per Alexandria.
    var postfixLocation = match.Start + match.Length;
    var topicNameInContent = inputString.slice(match.Start, postfixLocation);
    var annotationAriaLabel = _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__["Text"].format(_AnnotationUtilities_resx__WEBPACK_IMPORTED_MODULE_8__["TopicAnnotationAriaLabel"], topicNameInContent);
    var _a = getAnnotationPreviewLinkStyles(), highlight = _a.highlight, highlightSpacingFix = _a.highlightSpacingFix;
    var previewLinkString = "<" + KM_PREVIEW_LINK_HTML_TAG + "\n    class='" + Object(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_1__["css"])(highlight, highlightSpacingFix) + "'\n    data-sp-topic-id='" + entity.Id + "'\n    data-sp-topic-name='" + encodeQuotes(entity.Name) + "'\n    role='button'\n    aria-haspopup='true'\n    tabindex='0'\n    aria-label='" + annotationAriaLabel + "'\n  >" + topicNameInContent + "</" + KM_PREVIEW_LINK_HTML_TAG + ">";
    return inputString.slice(0, match.Start) + previewLinkString + inputString.slice(postfixLocation);
}
/**
 * Encode apostrophe and quotation mark to HTML code
 * @internal
 */
function encodeQuotes(input) {
    if (!input) {
        return '';
    }
    return input.replace(new RegExp("'", 'g'), '&#39;').replace(new RegExp('"', 'g'), '&#34;');
}
/**
 * After annotation is rendered add annotation event handlers and add styles for hashtagged annotations
 * @internal
 */
function executePostAnnotationActions(contextElement, topicCache, openTopicCard, closeTopicCard) {
    var _a;
    addAttributesForHashTaggedElements(contextElement, topicCache);
    var eventHandlers = generateAnnotationEventHandlers(openTopicCard, closeTopicCard);
    var annotationLinks = (_a = contextElement) === null || _a === void 0 ? void 0 : _a.querySelectorAll(ALL_ANNOTATION_QUERY_SELECTOR);
    if (annotationLinks) {
        annotationLinks.forEach(function (currentNode) {
            var e_5, _a;
            try {
                for (var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(Object.keys(eventHandlers)), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var eventName = _c.value;
                    currentNode.addEventListener(eventName, eventHandlers[eventName]);
                }
            }
            catch (e_5_1) { e_5 = { error: e_5_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_5) throw e_5.error; }
            }
        });
    }
    return function () {
        removeAnnotationEventHandlers(annotationLinks, eventHandlers);
    };
}
function removeAnnotationEventHandlers(annotationLinks, eventHandlers) {
    if (annotationLinks && eventHandlers) {
        annotationLinks.forEach(function (currentNode) {
            var e_6, _a;
            try {
                for (var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(Object.keys(eventHandlers)), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var eventName = _c.value;
                    currentNode.removeEventListener(eventName, eventHandlers[eventName]);
                }
            }
            catch (e_6_1) { e_6 = { error: e_6_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_6) throw e_6.error; }
            }
        });
    }
}
function generateAnnotationEventHandlers(openTopicCard, closeTopicCard) {
    var handleKeydownEvent = function (event) {
        if (event.key === 'Enter') {
            openTopicCard(event.target);
            event.preventDefault();
        }
        if (event.key === 'Escape') {
            closeTopicCard();
        }
    };
    return {
        mouseenter: function (event) { return openTopicCard(event.target); },
        mouseleave: function () { return closeTopicCard(); },
        keydown: handleKeydownEvent,
        click: function (event) { return openTopicCard(event.target); }
    };
}
function addAttributesForHashTaggedElements(contextElement, topicCache) {
    if (!contextElement) {
        return;
    }
    var matches = contextElement.querySelectorAll(HASHTAGGED_ANNOTATION_QUERY_SELECTOR);
    var hashTaggedElements = Array.prototype.slice.call(matches);
    var _a = getAnnotationPreviewLinkStyles(), highlight = _a.highlight, highlightSpacingFix = _a.highlightSpacingFix;
    hashTaggedElements.forEach(function (element) {
        var topicId = element.getAttribute(HASHTAGGED_TOPIC_ID_ATTRIBUTE);
        if (topicCache.get(topicId)) {
            element.className = Object(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_1__["css"])(highlight, highlightSpacingFix);
            element.setAttribute(KM_TOPIC_ID_ATTRIBUTE, topicId);
            element.setAttribute('role', 'button');
            element.setAttribute('aria-haspopup', 'true');
        }
        else {
            element.tabIndex = -1;
            element.setAttribute('role', 'Text');
        }
    });
}


/***/ }),

/***/ "ytBK":
/*!**************************************************!*\
  !*** ./lib/baseKMWebPart/BaseKMErrorBoundary.js ***!
  \**************************************************/
/*! exports provided: BaseKMErrorBoundary */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseKMErrorBoundary", function() { return BaseKMErrorBoundary; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @microsoft/sp-diagnostics */ "ut3N");
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _common_KillSwitches__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/KillSwitches */ "+ORw");
// Copyright (c) Microsoft. All rights reserved.




var BaseKMErrorBoundary = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(BaseKMErrorBoundary, _super);
    function BaseKMErrorBoundary(props) {
        var _this = _super.call(this, props) || this;
        _this.state = { error: undefined };
        if (Object(_common_KillSwitches__WEBPACK_IMPORTED_MODULE_3__["triggerRenderFailureLogKSActivated"])()) {
            _this._qosMonitor = new _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__["_QosMonitor"](props.webPartTag + ".ComponentRender");
        }
        return _this;
    }
    BaseKMErrorBoundary.prototype.componentDidMount = function () {
        if (!this.state.error && this.props.isReadyToCompleteRender) {
            if (!Object(_common_KillSwitches__WEBPACK_IMPORTED_MODULE_3__["triggerRenderFailureLogKSActivated"])()) {
                this.props.logRenderSuccess();
            }
            else {
                this._qosMonitor.writeSuccess(this._extraQosData);
            }
        }
    };
    BaseKMErrorBoundary.prototype.componentDidUpdate = function (prevProps) {
        if (!this.state.error && !prevProps.isReadyToCompleteRender && this.props.isReadyToCompleteRender) {
            if (!Object(_common_KillSwitches__WEBPACK_IMPORTED_MODULE_3__["triggerRenderFailureLogKSActivated"])()) {
                this.props.logRenderSuccess();
            }
            else {
                this._qosMonitor.writeSuccess(this._extraQosData);
            }
        }
    };
    BaseKMErrorBoundary.prototype.componentDidCatch = function (error, info) {
        this.setState({ error: error });
        if (!Object(_common_KillSwitches__WEBPACK_IMPORTED_MODULE_3__["triggerRenderFailureLogKSActivated"])()) {
            this.props.logRenderError(error);
        }
        else {
            this._qosMonitor.writeUnexpectedFailure('FailedToRender', error, this._extraQosData);
        }
    };
    BaseKMErrorBoundary.prototype.render = function () {
        if (this.state.error) {
            this.props.onCatchError(this.state.error);
            throw this.state.error;
        }
        return this.props.children;
    };
    Object.defineProperty(BaseKMErrorBoundary.prototype, "_extraQosData", {
        get: function () {
            return {
                isSuggestedDataLoaded: this.props.isSuggestedDataLoaded
            };
        },
        enumerable: true,
        configurable: true
    });
    return BaseKMErrorBoundary;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));



/***/ }),

/***/ "zAl7":
/*!***************************************************************!*\
  !*** ./lib/components/DefinitionSourceElement.module.scss.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* tslint:disable */
__webpack_require__(/*! ./DefinitionSourceElement.module.css */ "MGnC");
var styles = {
    container: 'n_e_04103875',
    stacked: 'v_e_04103875',
    gap: 'w_e_04103875',
    miniGapRight: 'x_e_04103875',
    miniGapLeft: 'y_e_04103875',
    licenseLink: 'z_e_04103875',
    licenseLinkStacked: 'aa_e_04103875',
    sourceText: 'ab_e_04103875'
};
/* harmony default export */ __webpack_exports__["default"] = (styles);
/* tslint:enable */ 


/***/ })

/******/ })});;
//# sourceMappingURL=sp-topic-shared_[locale].js.map