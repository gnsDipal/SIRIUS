define("9ef3df07-744e-4793-9840-c67d47c41763_0.1.0", ["tslib","@ms/sp-telemetry","@microsoft/sp-loader","@ms/odsp-core-bundle","@microsoft/sp-core-library","@microsoft/sp-page-context","@ms/odsp-utilities-bundle"], function(__WEBPACK_EXTERNAL_MODULE__17wl__, __WEBPACK_EXTERNAL_MODULE__2q6Q__, __WEBPACK_EXTERNAL_MODULE_I6O9__, __WEBPACK_EXTERNAL_MODULE_K9kD__, __WEBPACK_EXTERNAL_MODULE_UWqr__, __WEBPACK_EXTERNAL_MODULE_X_PM__, __WEBPACK_EXTERNAL_MODULE_y88i__) { return /******/ (function(modules) { // webpackBootstrap
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
/******/ 		var component_0 = { // @microsoft/sp-http
/******/ 			i: "c07208f0-ea3b-4c1a-9965-ac1b825211a6",
/******/ 			v: "1.12.1",
/******/ 			m: "vlQI"
/******/ 		};
/******/ 		var component_1 = { // @microsoft/sp-diagnostics
/******/ 			i: "78359e4b-07c2-43c6-8d0b-d060b4d577e8",
/******/ 			v: "1.12.1",
/******/ 			m: "ut3N"
/******/ 		};
/******/
/******/ 		return {"sp-teams-lib-dep": [component_0, component_1]}[chunkId] || [];
/******/ 	}
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"sp-teams-lib": 0
/******/ 	};
/******/
/******/
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "chunk." + ({"sp-teams-lib-dep":"sp-teams-lib-dep"}[chunkId]||chunkId) + "_" + "none" + ".js"
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
/******/ 	var jsonpArray = window["webpackJsonp_9ef3df07_744e_4793_9840_c67d47c41763_0_1_0"] = window["webpackJsonp_9ef3df07_744e_4793_9840_c67d47c41763_0_1_0"] || [];
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
/******/ 	  var regex = (typeof spScriptNamePattern !== 'undefined') ? spScriptNamePattern : /sp-teams-lib_none\.js/i;
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

/***/ "3vE6":
/*!*********************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@microsoft/teams-js@1.9.0/node_modules/@microsoft/teams-js/dist/MicrosoftTeams.min.js ***!
  \*********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(e,n){ true?module.exports=n():undefined}(window,function(){return function(e){var n={};function t(a){if(n[a])return n[a].exports;var r=n[a]={i:a,l:!1,exports:{}};return e[a].call(r.exports,r,r.exports,t),r.l=!0,r.exports}return t.m=e,t.c=n,t.d=function(e,n,a){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:a})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(t.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)t.d(a,r,function(n){return e[n]}.bind(null,r));return a},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=13)}([function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=function(){function e(){}return e.initializeCalled=!1,e.initializeCompleted=!1,e.additionalValidOrigins=[],e.additionalValidOriginsRegexp=null,e.initializeCallbacks=[],e.isFramelessWindow=!1,e.parentMessageQueue=[],e.childMessageQueue=[],e.nextMessageId=0,e.handlers={},e.callbacks={},e.printCapabilityEnabled=!1,e}();n.GlobalVars=a},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=t(6),r=t(4),o=t(0),i=t(3);function s(e,n){return(!o.GlobalVars.currentWindow||e!==o.GlobalVars.currentWindow)&&(!!(o.GlobalVars.currentWindow&&o.GlobalVars.currentWindow.location&&n&&n===o.GlobalVars.currentWindow.location.origin)||!!(r.validOriginRegExp.test(n.toLowerCase())||o.GlobalVars.additionalValidOriginsRegexp&&o.GlobalVars.additionalValidOriginsRegexp.test(n.toLowerCase())))}function l(e,n){o.GlobalVars.isFramelessWindow||o.GlobalVars.parentWindow&&!o.GlobalVars.parentWindow.closed&&e!==o.GlobalVars.parentWindow?o.GlobalVars.childWindow&&!o.GlobalVars.childWindow.closed&&e!==o.GlobalVars.childWindow||(o.GlobalVars.childWindow=e,o.GlobalVars.childOrigin=n):(o.GlobalVars.parentWindow=e,o.GlobalVars.parentOrigin=n),o.GlobalVars.parentWindow&&o.GlobalVars.parentWindow.closed&&(o.GlobalVars.parentWindow=null,o.GlobalVars.parentOrigin=null),o.GlobalVars.childWindow&&o.GlobalVars.childWindow.closed&&(o.GlobalVars.childWindow=null,o.GlobalVars.childOrigin=null),p(o.GlobalVars.parentWindow),p(o.GlobalVars.childWindow)}function u(e){if("id"in e.data&&"number"==typeof e.data.id){var n=e.data,t=o.GlobalVars.callbacks[n.id];t&&(t.apply(null,n.args.concat([n.isPartialResponse])),d(e)||delete o.GlobalVars.callbacks[n.id])}else if("func"in e.data&&"string"==typeof e.data.func){n=e.data;var a=o.GlobalVars.handlers[n.func];a&&a.apply(this,n.args)}}function d(e){return!0===e.data.isPartialResponse}function c(e){if("id"in e.data&&"func"in e.data){var n=e.data,t=n.func?o.GlobalVars.handlers[n.func]:null;if(t){var a=t.apply(this,n.args);void 0!==a&&m(n.id,Array.isArray(a)?a:[a])}else{var r=b(n.func,n.args);o.GlobalVars.callbacks[r]=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];if(o.GlobalVars.childWindow){var a=e.pop();m(n.id,e,a)}}}}}function f(e){return e===o.GlobalVars.parentWindow?o.GlobalVars.parentMessageQueue:e===o.GlobalVars.childWindow?o.GlobalVars.childMessageQueue:[]}function g(e){return e===o.GlobalVars.parentWindow?o.GlobalVars.parentOrigin:e===o.GlobalVars.childWindow?o.GlobalVars.childOrigin:null}function p(e){for(var n=g(e),t=f(e);e&&n&&t.length>0;)e.postMessage(t.shift(),n)}function b(e,n){var t=o.GlobalVars.parentWindow,a=v(e,n);if(o.GlobalVars.isFramelessWindow)o.GlobalVars.currentWindow&&o.GlobalVars.currentWindow.nativeInterface&&o.GlobalVars.currentWindow.nativeInterface.framelessPostMessage(JSON.stringify(a));else{var r=g(t);t&&r?t.postMessage(a,r):f(t).push(a)}return a.id}function m(e,n,t){var a=o.GlobalVars.childWindow,r=C(e,n,t),i=g(a);a&&i&&a.postMessage(r,i)}function h(e,n){var t=o.GlobalVars.childWindow,a=V(e,n),r=g(t);t&&r?t.postMessage(a,r):f(t).push(a)}function v(e,n){return{id:o.GlobalVars.nextMessageId++,func:e,args:n||[]}}function C(e,n,t){return{id:e,args:n||[],isPartialResponse:t}}function V(e,n){return{func:e,args:n||[]}}o.GlobalVars.handlers.themeChange=function(e){o.GlobalVars.themeChangeHandler&&o.GlobalVars.themeChangeHandler(e);o.GlobalVars.childWindow&&h("themeChange",[e])},o.GlobalVars.handlers.fullScreenChange=function(e){o.GlobalVars.fullScreenChangeHandler&&o.GlobalVars.fullScreenChangeHandler(e)},o.GlobalVars.handlers.backButtonPress=function(){o.GlobalVars.backButtonPressHandler&&o.GlobalVars.backButtonPressHandler()||a.navigateBack()},o.GlobalVars.handlers.load=function(e){o.GlobalVars.loadHandler&&o.GlobalVars.loadHandler(e);o.GlobalVars.childWindow&&h("load",[e])},o.GlobalVars.handlers.beforeUnload=function(){var e=function(){b("readyToUnload",[])};o.GlobalVars.beforeUnloadHandler&&o.GlobalVars.beforeUnloadHandler(e)||e()},o.GlobalVars.handlers.changeSettings=function(){o.GlobalVars.changeSettingsHandler&&o.GlobalVars.changeSettingsHandler()},o.GlobalVars.handlers.startConversation=function(e,n,t,a){o.GlobalVars.onStartConversationHandler&&o.GlobalVars.onStartConversationHandler({subEntityId:e,conversationId:n,channelId:t,entityId:a})},o.GlobalVars.handlers.closeConversation=function(e,n,t,a){o.GlobalVars.onCloseConversationHandler&&o.GlobalVars.onCloseConversationHandler({subEntityId:e,conversationId:n,channelId:t,entityId:a})},o.GlobalVars.handlers.appButtonClick=function(){o.GlobalVars.appButtonClickHandler&&o.GlobalVars.appButtonClickHandler()},o.GlobalVars.handlers.appButtonHoverEnter=function(){o.GlobalVars.appButtonHoverEnterHandler&&o.GlobalVars.appButtonHoverEnterHandler()},o.GlobalVars.handlers.appButtonHoverLeave=function(){o.GlobalVars.appButtonHoverLeaveHandler&&o.GlobalVars.appButtonHoverLeaveHandler()},n.ensureInitialized=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];if(!o.GlobalVars.initializeCalled)throw new Error("The library has not yet been initialized");if(o.GlobalVars.frameContext&&e&&e.length>0){for(var t=!1,a=0;a<e.length;a++)if(e[a]===o.GlobalVars.frameContext){t=!0;break}if(!t)throw new Error("This call is not allowed in the '"+o.GlobalVars.frameContext+"' context")}},n.isAPISupportedByPlatform=function(e){void 0===e&&(e=r.defaultSDKVersionForCompatCheck);var n=i.compareSDKVersions(o.GlobalVars.clientSupportedSDKVersion,e);return!isNaN(n)&&n>=0},n.processMessage=function(e){if(e&&e.data&&"object"==typeof e.data){var n=e.source||e.originalEvent&&e.originalEvent.source,t=e.origin||e.originalEvent&&e.originalEvent.origin;s(n,t)&&(l(n,t),n===o.GlobalVars.parentWindow?u(e):n===o.GlobalVars.childWindow&&c(e))}},n.handleParentMessage=u,n.processAdditionalValidOrigins=function(e){var n=o.GlobalVars.additionalValidOrigins.concat(e.filter(function(e){return"string"==typeof e&&r.userOriginUrlValidationRegExp.test(e)})),t={};n=n.filter(function(e){return!t[e]&&(t[e]=!0,!0)}),o.GlobalVars.additionalValidOrigins=n,o.GlobalVars.additionalValidOrigins.length>0?o.GlobalVars.additionalValidOriginsRegexp=i.generateRegExpFromUrls(o.GlobalVars.additionalValidOrigins):o.GlobalVars.additionalValidOriginsRegexp=null},n.waitForMessageQueue=function(e,n){var t=o.GlobalVars.currentWindow.setInterval(function(){0===f(e).length&&(clearInterval(t),n())},100)},n.sendMessageRequestToParent=b,n.sendMessageEventToChild=h},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),function(e){e.desktop="desktop",e.web="web",e.android="android",e.ios="ios",e.rigel="rigel"}(n.HostClientType||(n.HostClientType={})),function(e){e.settings="settings",e.content="content",e.authentication="authentication",e.remove="remove",e.task="task",e.sidePanel="sidePanel",e.stage="stage"}(n.FrameContexts||(n.FrameContexts={})),function(e){e[e.Standard=0]="Standard",e[e.Edu=1]="Edu",e[e.Class=2]="Class",e[e.Plc=3]="Plc",e[e.Staff=4]="Staff"}(n.TeamType||(n.TeamType={})),function(e){e[e.Admin=0]="Admin",e[e.User=1]="User",e[e.Guest=2]="Guest"}(n.UserTeamRole||(n.UserTeamRole={})),function(e){e.Large="large",e.Medium="medium",e.Small="small"}(n.TaskModuleDimension||(n.TaskModuleDimension={})),function(e){e.Regular="Regular",e.Private="Private"}(n.ChannelType||(n.ChannelType={}))},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=t(16);function r(e){for(var n="^",t=e.split("."),a=0;a<t.length;a++)n+=(a>0?"[.]":"")+t[a].replace("*","[^/^.]+");return n+="$"}n.generateRegExpFromUrls=function(e){for(var n="",t=0;t<e.length;t++)n+=(0===t?"":"|")+r(e[t]);return new RegExp(n)},n.getGenericOnCompleteHandler=function(e){return function(n,t){if(!n)throw new Error(e||t)}},n.compareSDKVersions=function(e,n){if("string"!=typeof e||"string"!=typeof n)return NaN;var t=e.split("."),a=n.split(".");function r(e){return/^\d+$/.test(e)}if(!t.every(r)||!a.every(r))return NaN;for(;t.length<a.length;)t.push("0");for(;a.length<t.length;)a.push("0");for(var o=0;o<t.length;++o)if(t[o]!=a[o])return t[o]>a[o]?1:-1;return 0},n.generateGUID=function(){return a.v4()}},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=t(3);n.version="1.9.0",n.defaultSDKVersionForCompatCheck="1.6.0",n.validOrigins=["https://teams.microsoft.com","https://teams.microsoft.us","https://gov.teams.microsoft.us","https://dod.teams.microsoft.us","https://int.teams.microsoft.com","https://teams.live.com","https://devspaces.skype.com","https://ssauth.skype.com","https://local.teams.office.com","https://local.teams.office.com:8080","https://msft.spoppe.com","https://*.sharepoint.com","https://*.sharepoint-df.com","https://*.sharepointonline.com","https://outlook.office.com","https://outlook-sdf.office.com","https://*.teams.microsoft.com","https://www.office.com","https://word.office.com","https://excel.office.com","https://powerpoint.office.com","https://www.officeppe.com","https://*.www.office.com","http://127.0.0.1:5000"],n.validOriginRegExp=a.generateRegExpFromUrls(n.validOrigins),n.userOriginUrlValidationRegExp=/^https\:\/\//},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),function(e){e[e.NOT_SUPPORTED_ON_PLATFORM=100]="NOT_SUPPORTED_ON_PLATFORM",e[e.INTERNAL_ERROR=500]="INTERNAL_ERROR",e[e.PERMISSION_DENIED=1e3]="PERMISSION_DENIED",e[e.NETWORK_ERROR=2e3]="NETWORK_ERROR",e[e.NO_HW_SUPPORT=3e3]="NO_HW_SUPPORT",e[e.INVALID_ARGUMENTS=4e3]="INVALID_ARGUMENTS",e[e.UNAUTHORIZED_USER_OPERATION=5e3]="UNAUTHORIZED_USER_OPERATION",e[e.INSUFFICIENT_RESOURCES=6e3]="INSUFFICIENT_RESOURCES",e[e.THROTTLE=7e3]="THROTTLE",e[e.USER_ABORT=8e3]="USER_ABORT",e[e.OPERATION_TIMED_OUT=8001]="OPERATION_TIMED_OUT",e[e.OLD_PLATFORM=9e3]="OLD_PLATFORM",e[e.FILE_NOT_FOUND=404]="FILE_NOT_FOUND",e[e.SIZE_EXCEEDED=1e4]="SIZE_EXCEEDED"}(n.ErrorCode||(n.ErrorCode={}))},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=t(1),r=t(0),o=t(3),i=t(2);n.returnFocus=function(e){a.ensureInitialized(i.FrameContexts.content),a.sendMessageRequestToParent("returnFocus",[e])},n.navigateToTab=function(e,n){a.ensureInitialized();var t=a.sendMessageRequestToParent("navigateToTab",[e]);r.GlobalVars.callbacks[t]=n||o.getGenericOnCompleteHandler("Invalid internalTabInstanceId and/or channelId were/was provided")},n.navigateCrossDomain=function(e,n){a.ensureInitialized(i.FrameContexts.content,i.FrameContexts.sidePanel,i.FrameContexts.settings,i.FrameContexts.remove,i.FrameContexts.task,i.FrameContexts.stage);var t=a.sendMessageRequestToParent("navigateCrossDomain",[e]);r.GlobalVars.callbacks[t]=n||o.getGenericOnCompleteHandler("Cross-origin navigation is only supported for URLs matching the pattern registered in the manifest.")},n.navigateBack=function(e){a.ensureInitialized();var n=a.sendMessageRequestToParent("navigateBack",[]);r.GlobalVars.callbacks[n]=e||o.getGenericOnCompleteHandler("Back navigation is not supported in the current client or context.")}},function(e,n){var t="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof window.msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto);if(t){var a=new Uint8Array(16);e.exports=function(){return t(a),a}}else{var r=new Array(16);e.exports=function(){for(var e,n=0;n<16;n++)0==(3&n)&&(e=4294967296*Math.random()),r[n]=e>>>((3&n)<<3)&255;return r}}},function(e,n){for(var t=[],a=0;a<256;++a)t[a]=(a+256).toString(16).substr(1);e.exports=function(e,n){var a=n||0,r=t;return[r[e[a++]],r[e[a++]],r[e[a++]],r[e[a++]],"-",r[e[a++]],r[e[a++]],"-",r[e[a++]],r[e[a++]],"-",r[e[a++]],r[e[a++]],"-",r[e[a++]],r[e[a++]],r[e[a++]],r[e[a++]],r[e[a++]],r[e[a++]]].join("")}},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=t(1),r=t(0);!function(e){r.GlobalVars.handlers["log.request"]=function(){if(r.GlobalVars.getLogHandler){var e=r.GlobalVars.getLogHandler();a.sendMessageRequestToParent("log.receive",[e])}},e.registerGetLogHandler=function(e){a.ensureInitialized(),r.GlobalVars.getLogHandler=e,e&&a.sendMessageRequestToParent("registerHandler",["log.request"])}}(n.logs||(n.logs={}))},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=t(1),r=t(0),o=t(2),i=t(3);!function(e){var n,t;r.GlobalVars.handlers["settings.save"]=function(e){var t=new s(e);n?n(t):t.notifySuccess()},r.GlobalVars.handlers["settings.remove"]=function(){var e=new l;t?t(e):e.notifySuccess()},e.setValidityState=function(e){a.ensureInitialized(o.FrameContexts.settings,o.FrameContexts.remove),a.sendMessageRequestToParent("settings.setValidityState",[e])},e.getSettings=function(e){a.ensureInitialized(o.FrameContexts.content,o.FrameContexts.settings,o.FrameContexts.remove);var n=a.sendMessageRequestToParent("settings.getSettings");r.GlobalVars.callbacks[n]=e},e.setSettings=function(e,n){a.ensureInitialized(o.FrameContexts.content,o.FrameContexts.settings);var t=a.sendMessageRequestToParent("settings.setSettings",[e]);r.GlobalVars.callbacks[t]=n||i.getGenericOnCompleteHandler()},e.registerOnSaveHandler=function(e){a.ensureInitialized(o.FrameContexts.settings),n=e,e&&a.sendMessageRequestToParent("registerHandler",["save"])},e.registerOnRemoveHandler=function(e){a.ensureInitialized(o.FrameContexts.remove,o.FrameContexts.settings),t=e,e&&a.sendMessageRequestToParent("registerHandler",["remove"])};var s=function(){function e(e){this.notified=!1,this.result=e||{}}return e.prototype.notifySuccess=function(){this.ensureNotNotified(),a.sendMessageRequestToParent("settings.save.success"),this.notified=!0},e.prototype.notifyFailure=function(e){this.ensureNotNotified(),a.sendMessageRequestToParent("settings.save.failure",[e]),this.notified=!0},e.prototype.ensureNotNotified=function(){if(this.notified)throw new Error("The SaveEvent may only notify success or failure once.")},e}();var l=function(){function e(){this.notified=!1}return e.prototype.notifySuccess=function(){this.ensureNotNotified(),a.sendMessageRequestToParent("settings.remove.success"),this.notified=!0},e.prototype.notifyFailure=function(e){this.ensureNotNotified(),a.sendMessageRequestToParent("settings.remove.failure",[e]),this.notified=!0},e.prototype.ensureNotNotified=function(){if(this.notified)throw new Error("The removeEvent may only notify success or failure once.")},e}()}(n.settings||(n.settings={}))},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=t(1),r=t(0),o=t(2),i=t(3),s=function(){function e(){}return e.prototype.postMessage=function(e,n){a.ensureInitialized();var t=a.sendMessageRequestToParent("messageForChild",[e]);r.GlobalVars.callbacks[t]=n||i.getGenericOnCompleteHandler()},e.prototype.addEventListener=function(e,n){"message"===e&&(r.GlobalVars.handlers.messageForParent=n)},e}();n.ChildAppWindow=s;var l=function(){function e(){}return Object.defineProperty(e,"Instance",{get:function(){return this._instance||(this._instance=new this)},enumerable:!0,configurable:!0}),e.prototype.postMessage=function(e,n){a.ensureInitialized(o.FrameContexts.task);var t=a.sendMessageRequestToParent("messageForParent",[e]);r.GlobalVars.callbacks[t]=n||i.getGenericOnCompleteHandler()},e.prototype.addEventListener=function(e,n){"message"===e&&(r.GlobalVars.handlers.messageForChild=n)},e}();n.ParentAppWindow=l},function(e,n,t){"use strict";var a=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var t in n)n.hasOwnProperty(t)&&(e[t]=n[t])};return function(n,t){function a(){this.constructor=n}e(n,t),n.prototype=null===t?Object.create(t):(a.prototype=t.prototype,new a)}}();Object.defineProperty(n,"__esModule",{value:!0});var r=t(0),o=t(5),i=t(1),s=t(2),l=t(3),u=t(29);!function(e){var n="1.7.0",t="1.8.0",d="1.9.0";!function(e){e.Base64="base64",e.ID="id"}(e.FileFormat||(e.FileFormat={}));var c=function(){return function(){}}();e.File=c,e.captureImage=function(e){if(!e)throw new Error("[captureImage] Callback cannot be null");if(i.ensureInitialized(s.FrameContexts.content,s.FrameContexts.task),r.GlobalVars.isFramelessWindow)if(i.isAPISupportedByPlatform(n)){var t=i.sendMessageRequestToParent("captureImage");r.GlobalVars.callbacks[t]=e}else e({errorCode:o.ErrorCode.OLD_PLATFORM},void 0);else e({errorCode:o.ErrorCode.NOT_SUPPORTED_ON_PLATFORM},void 0)};var f=function(e){function n(n){void 0===n&&(n=null);var t=e.call(this)||this;return n&&(t.content=n.content,t.format=n.format,t.mimeType=n.mimeType,t.name=n.name,t.preview=n.preview,t.size=n.size),t}return a(n,e),n.prototype.getMedia=function(e){if(!e)throw new Error("[get Media] Callback cannot be null");(i.ensureInitialized(s.FrameContexts.content,s.FrameContexts.task),i.isAPISupportedByPlatform(t))?u.validateGetMediaInputs(this.mimeType,this.format,this.content)?i.isAPISupportedByPlatform("2.0.0")?this.getMediaViaCallback(e):this.getMediaViaHandler(e):e({errorCode:o.ErrorCode.INVALID_ARGUMENTS},null):e({errorCode:o.ErrorCode.OLD_PLATFORM},null)},n.prototype.getMediaViaCallback=function(e){var n={mediaMimeType:this.mimeType,assembleAttachment:[]},t=[this.content],a=i.sendMessageRequestToParent("getMedia",t);r.GlobalVars.callbacks[a]=function(t){if(e)if(t&&t.error)e(t.error,null);else if(t&&t.mediaChunk)if(t.mediaChunk.chunkSequence<=0){var a=u.createFile(n.assembleAttachment,n.mediaMimeType);e(t.error,a)}else{var r=u.decodeAttachment(t.mediaChunk,n.mediaMimeType);n.assembleAttachment.push(r)}else e({errorCode:o.ErrorCode.INTERNAL_ERROR,message:"data receieved is null"},null)}},n.prototype.getMediaViaHandler=function(e){var n=l.generateGUID(),t={mediaMimeType:this.mimeType,assembleAttachment:[]},a=[n,this.content];this.content&&e&&i.sendMessageRequestToParent("getMedia",a),r.GlobalVars.handlers["getMedia"+n]=function(a){if(e){var i=JSON.parse(a);if(i.error)e(i.error,null),delete r.GlobalVars.handlers["getMedia"+n];else if(i.mediaChunk)if(i.mediaChunk.chunkSequence<=0){var s=u.createFile(t.assembleAttachment,t.mediaMimeType);e(i.error,s),delete r.GlobalVars.handlers["getMedia"+n]}else{var l=u.decodeAttachment(i.mediaChunk,t.mediaMimeType);t.assembleAttachment.push(l)}else e({errorCode:o.ErrorCode.INTERNAL_ERROR,message:"data receieved is null"},null),delete r.GlobalVars.handlers["getMedia"+n]}}},n}(c);e.Media=f,function(e){e[e.Photo=1]="Photo",e[e.Document=2]="Document",e[e.Whiteboard=3]="Whiteboard",e[e.BusinessCard=4]="BusinessCard"}(e.CameraStartMode||(e.CameraStartMode={})),function(e){e[e.Camera=1]="Camera",e[e.Gallery=2]="Gallery"}(e.Source||(e.Source={})),function(e){e[e.Image=1]="Image",e[e.Audio=4]="Audio"}(e.MediaType||(e.MediaType={})),function(e){e[e.ID=1]="ID",e[e.URL=2]="URL"}(e.ImageUriType||(e.ImageUriType={})),e.selectMedia=function(e,n){if(!n)throw new Error("[select Media] Callback cannot be null");if(i.ensureInitialized(s.FrameContexts.content,s.FrameContexts.task),i.isAPISupportedByPlatform(t))if(u.validateSelectMediaInputs(e)){var a=[e],l=i.sendMessageRequestToParent("selectMedia",a);r.GlobalVars.callbacks[l]=function(e,t){if(t){for(var a=[],r=0,o=t;r<o.length;r++){var i=o[r];a.push(new f(i))}n(e,a)}else n(e,null)}}else{var d={errorCode:o.ErrorCode.INVALID_ARGUMENTS};n(d,null)}else{var c={errorCode:o.ErrorCode.OLD_PLATFORM};n(c,null)}},e.viewImages=function(e,n){if(!n)throw new Error("[view images] Callback cannot be null");if(i.ensureInitialized(s.FrameContexts.content,s.FrameContexts.task),i.isAPISupportedByPlatform(t))if(u.validateViewImagesInput(e)){var a=[e],l=i.sendMessageRequestToParent("viewImages",a);r.GlobalVars.callbacks[l]=n}else n({errorCode:o.ErrorCode.INVALID_ARGUMENTS});else n({errorCode:o.ErrorCode.OLD_PLATFORM})},e.scanBarCode=function(e,n){if(!e)throw new Error("[media.scanBarCode] Callback cannot be null");if(i.ensureInitialized(s.FrameContexts.content,s.FrameContexts.task),r.GlobalVars.hostClientType!==s.HostClientType.desktop&&r.GlobalVars.hostClientType!==s.HostClientType.web&&r.GlobalVars.hostClientType!==s.HostClientType.rigel)if(i.isAPISupportedByPlatform(d))if(u.validateScanBarCodeInput(n)){var t=i.sendMessageRequestToParent("media.scanBarCode",[n]);r.GlobalVars.callbacks[t]=e}else e({errorCode:o.ErrorCode.INVALID_ARGUMENTS},null);else e({errorCode:o.ErrorCode.OLD_PLATFORM},null);else e({errorCode:o.ErrorCode.NOT_SUPPORTED_ON_PLATFORM},null)}}(n.media||(n.media={}))},function(e,n,t){"use strict";function a(e){for(var t in e)n.hasOwnProperty(t)||(n[t]=e[t])}Object.defineProperty(n,"__esModule",{value:!0}),a(t(14)),a(t(24))},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=t(15);n.bot=a.bot;var r=t(19);n.menus=r.menus;var o=t(9);n.logs=o.logs;var i=t(20);n.NotificationTypes=i.NotificationTypes,n.ViewerActionTypes=i.ViewerActionTypes;var s=t(21);n.enterFullscreen=s.enterFullscreen,n.exitFullscreen=s.exitFullscreen,n.getChatMembers=s.getChatMembers,n.getConfigSetting=s.getConfigSetting,n.getUserJoinedTeams=s.getUserJoinedTeams,n.openFilePreview=s.openFilePreview,n.sendCustomMessage=s.sendCustomMessage,n.showNotification=s.showNotification,n.sendCustomEvent=s.sendCustomEvent,n.registerCustomHandler=s.registerCustomHandler,n.uploadCustomApp=s.uploadCustomApp;var l=t(22);n.conversations=l.conversations;var u=t(23);n.meetingRoom=u.meetingRoom},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=t(0),r=t(1);!function(e){e.sendQuery=function(e,n,t){r.ensureInitialized();var o=r.sendMessageRequestToParent("bot.executeQuery",[e]);a.GlobalVars.callbacks[o]=function(e,a){e?n(a):t(a)}},e.getSupportedCommands=function(e,n){r.ensureInitialized();var t=r.sendMessageRequestToParent("bot.getSupportedCommands");a.GlobalVars.callbacks[t]=function(t,a){t?e(a):n(a)}},e.authenticate=function(e,n,t){r.ensureInitialized();var o=r.sendMessageRequestToParent("bot.authenticate",[e]);a.GlobalVars.callbacks[o]=function(e,a){e?n(a):t(a)}},function(e){e.Results="Results",e.Auth="Auth"}(e.ResponseType||(e.ResponseType={}))}(n.bot||(n.bot={}))},function(e,n,t){var a=t(17),r=t(18),o=r;o.v1=a,o.v4=r,e.exports=o},function(e,n,t){var a,r,o=t(7),i=t(8),s=0,l=0;e.exports=function(e,n,t){var u=n&&t||0,d=n||[],c=(e=e||{}).node||a,f=void 0!==e.clockseq?e.clockseq:r;if(null==c||null==f){var g=o();null==c&&(c=a=[1|g[0],g[1],g[2],g[3],g[4],g[5]]),null==f&&(f=r=16383&(g[6]<<8|g[7]))}var p=void 0!==e.msecs?e.msecs:(new Date).getTime(),b=void 0!==e.nsecs?e.nsecs:l+1,m=p-s+(b-l)/1e4;if(m<0&&void 0===e.clockseq&&(f=f+1&16383),(m<0||p>s)&&void 0===e.nsecs&&(b=0),b>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");s=p,l=b,r=f;var h=(1e4*(268435455&(p+=122192928e5))+b)%4294967296;d[u++]=h>>>24&255,d[u++]=h>>>16&255,d[u++]=h>>>8&255,d[u++]=255&h;var v=p/4294967296*1e4&268435455;d[u++]=v>>>8&255,d[u++]=255&v,d[u++]=v>>>24&15|16,d[u++]=v>>>16&255,d[u++]=f>>>8|128,d[u++]=255&f;for(var C=0;C<6;++C)d[u+C]=c[C];return n||i(d)}},function(e,n,t){var a=t(7),r=t(8);e.exports=function(e,n,t){var o=n&&t||0;"string"==typeof e&&(n="binary"===e?new Array(16):null,e=null);var i=(e=e||{}).random||(e.rng||a)();if(i[6]=15&i[6]|64,i[8]=63&i[8]|128,n)for(var s=0;s<16;++s)n[o+s]=i[s];return n||r(i)}},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=t(1),r=t(0);!function(e){var n,t,o,i=function(){return function(){this.enabled=!0,this.selected=!1}}();e.MenuItem=i,function(e){e.dropDown="dropDown",e.popOver="popOver"}(e.MenuListType||(e.MenuListType={})),r.GlobalVars.handlers.navBarMenuItemPress=function(e){n&&n(e)||(a.ensureInitialized(),a.sendMessageRequestToParent("handleNavBarMenuItemPress",[e]))},r.GlobalVars.handlers.actionMenuItemPress=function(e){t&&t(e)||(a.ensureInitialized(),a.sendMessageRequestToParent("handleActionMenuItemPress",[e]))},r.GlobalVars.handlers.setModuleView=function(e){o&&o(e)||(a.ensureInitialized(),a.sendMessageRequestToParent("viewConfigItemPress",[e]))},e.setUpViews=function(e,n){a.ensureInitialized(),o=n,a.sendMessageRequestToParent("setUpViews",[e])},e.setNavBarMenu=function(e,t){a.ensureInitialized(),n=t,a.sendMessageRequestToParent("setNavBarMenu",[e])},e.showActionMenu=function(e,n){a.ensureInitialized(),t=n,a.sendMessageRequestToParent("showActionMenu",[e])}}(n.menus||(n.menus={}))},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),function(e){e.fileDownloadStart="fileDownloadStart",e.fileDownloadComplete="fileDownloadComplete"}(n.NotificationTypes||(n.NotificationTypes={})),function(e){e.view="view",e.edit="edit",e.editNew="editNew"}(n.ViewerActionTypes||(n.ViewerActionTypes={}))},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=t(1),r=t(0),o=t(2),i=t(3);n.getUserJoinedTeams=function(e,n){a.ensureInitialized();var t=a.sendMessageRequestToParent("getUserJoinedTeams",[n]);r.GlobalVars.callbacks[t]=e},n.enterFullscreen=function(){a.ensureInitialized(o.FrameContexts.content),a.sendMessageRequestToParent("enterFullscreen",[])},n.exitFullscreen=function(){a.ensureInitialized(o.FrameContexts.content),a.sendMessageRequestToParent("exitFullscreen",[])},n.openFilePreview=function(e){a.ensureInitialized(o.FrameContexts.content);var n=[e.entityId,e.title,e.description,e.type,e.objectUrl,e.downloadUrl,e.webPreviewUrl,e.webEditUrl,e.baseUrl,e.editFile,e.subEntityId,e.viewerAction];a.sendMessageRequestToParent("openFilePreview",n)},n.showNotification=function(e){a.ensureInitialized(o.FrameContexts.content);var n=[e.message,e.notificationType];a.sendMessageRequestToParent("showNotification",n)},n.uploadCustomApp=function(e,n){a.ensureInitialized();var t=a.sendMessageRequestToParent("uploadCustomApp",[e]);r.GlobalVars.callbacks[t]=n||i.getGenericOnCompleteHandler()},n.sendCustomMessage=function(e,n,t){a.ensureInitialized();var o=a.sendMessageRequestToParent(e,n);return"function"==typeof t&&(r.GlobalVars.callbacks[o]=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];t.apply(null,e)}),o},n.sendCustomEvent=function(e,n){if(a.ensureInitialized(),!r.GlobalVars.childWindow)throw new Error("The child window has not yet been initialized or is not present");a.sendMessageEventToChild(e,n)},n.registerCustomHandler=function(e,n){var t=this;a.ensureInitialized(),r.GlobalVars.handlers[e]=function(){for(var e=[],a=0;a<arguments.length;a++)e[a]=arguments[a];return n.apply(t,e)}},n.getChatMembers=function(e){a.ensureInitialized();var n=a.sendMessageRequestToParent("getChatMembers");r.GlobalVars.callbacks[n]=e},n.getConfigSetting=function(e,n){a.ensureInitialized();var t=a.sendMessageRequestToParent("getConfigSetting",[n]);r.GlobalVars.callbacks[t]=e}},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=t(1),r=t(0),o=t(2);!function(e){e.openConversation=function(e){a.ensureInitialized(o.FrameContexts.content);var n=a.sendMessageRequestToParent("conversations.openConversation",[{title:e.title,subEntityId:e.subEntityId,conversationId:e.conversationId,channelId:e.channelId,entityId:e.entityId}]);r.GlobalVars.onCloseConversationHandler=e.onCloseConversation,r.GlobalVars.onStartConversationHandler=e.onStartConversation,r.GlobalVars.callbacks[n]=function(e,n){if(!e)throw new Error(n)}},e.closeConversation=function(){a.ensureInitialized(o.FrameContexts.content),a.sendMessageRequestToParent("conversations.closeConversation"),r.GlobalVars.onCloseConversationHandler=null,r.GlobalVars.onStartConversationHandler=null}}(n.conversations||(n.conversations={}))},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=t(1),r=t(0);!function(e){!function(e){e.toggleMute="toggleMute",e.toggleCamera="toggleCamera",e.toggleCaptions="toggleCaptions",e.volume="volume",e.showVideoGallery="showVideoGallery",e.showContent="showContent",e.showVideoGalleryAndContent="showVideoGalleryAndContent",e.showLargeGallery="showLargeGallery",e.showTogether="showTogether",e.leaveMeeting="leaveMeeting"}(e.Capability||(e.Capability={})),r.GlobalVars.handlers["meetingRoom.meetingRoomCapabilitiesUpdate"]=function(e){null!=r.GlobalVars.meetingRoomCapabilitiesUpdateHandler&&(a.ensureInitialized(),r.GlobalVars.meetingRoomCapabilitiesUpdateHandler(e))},r.GlobalVars.handlers["meetingRoom.meetingRoomStatesUpdate"]=function(e){null!=r.GlobalVars.meetingRoomStatesUpdateHandler&&(a.ensureInitialized(),r.GlobalVars.meetingRoomStatesUpdateHandler(e))},e.getPairedMeetingRoomInfo=function(e){a.ensureInitialized();var n=a.sendMessageRequestToParent("meetingRoom.getPairedMeetingRoomInfo");r.GlobalVars.callbacks[n]=e},e.sendCommandToPairedMeetingRoom=function(e,n){if(!e||0==e.length)throw new Error("[meetingRoom.sendCommandToPairedMeetingRoom] Command name cannot be null or empty");if(!n)throw new Error("[meetingRoom.sendCommandToPairedMeetingRoom] Callback cannot be null");a.ensureInitialized();var t=a.sendMessageRequestToParent("meetingRoom.sendCommandToPairedMeetingRoom",[e]);r.GlobalVars.callbacks[t]=n},e.registerMeetingRoomCapabilitiesUpdateHandler=function(e){if(!e)throw new Error("[meetingRoom.registerMeetingRoomCapabilitiesUpdateHandler] Handler cannot be null");a.ensureInitialized(),r.GlobalVars.meetingRoomCapabilitiesUpdateHandler=e,e&&a.sendMessageRequestToParent("registerHandler",["meetingRoom.meetingRoomCapabilitiesUpdate"])},e.registerMeetingRoomStatesUpdateHandler=function(e){if(!e)throw new Error("[meetingRoom.registerMeetingRoomStatesUpdateHandler] Handler cannot be null");a.ensureInitialized(),r.GlobalVars.meetingRoomStatesUpdateHandler=e,e&&a.sendMessageRequestToParent("registerHandler",["meetingRoom.meetingRoomStatesUpdate"])}}(n.meetingRoom||(n.meetingRoom={}))},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=t(25);n.appInitialization=a.appInitialization;var r=t(26);n.authentication=r.authentication;var o=t(2);n.FrameContexts=o.FrameContexts,n.HostClientType=o.HostClientType,n.TaskModuleDimension=o.TaskModuleDimension,n.TeamType=o.TeamType,n.UserTeamRole=o.UserTeamRole,n.ChannelType=o.ChannelType;var i=t(5);n.ErrorCode=i.ErrorCode;var s=t(27);n.enablePrintCapability=s.enablePrintCapability,n.executeDeepLink=s.executeDeepLink,n.getContext=s.getContext,n.getMruTabInstances=s.getMruTabInstances,n.getTabInstances=s.getTabInstances,n.initialize=s.initialize,n.initializeWithFrameContext=s.initializeWithFrameContext,n.print=s.print,n.registerBackButtonHandler=s.registerBackButtonHandler,n.registerBeforeUnloadHandler=s.registerBeforeUnloadHandler,n.registerChangeSettingsHandler=s.registerChangeSettingsHandler,n.registerFullScreenHandler=s.registerFullScreenHandler,n.registerOnLoadHandler=s.registerOnLoadHandler,n.registerOnThemeChangeHandler=s.registerOnThemeChangeHandler,n.registerAppButtonClickHandler=s.registerAppButtonClickHandler,n.registerAppButtonHoverEnterHandler=s.registerAppButtonHoverEnterHandler,n.registerAppButtonHoverLeaveHandler=s.registerAppButtonHoverLeaveHandler,n.setFrameContext=s.setFrameContext,n.shareDeepLink=s.shareDeepLink;var l=t(6);n.returnFocus=l.returnFocus,n.navigateBack=l.navigateBack,n.navigateCrossDomain=l.navigateCrossDomain,n.navigateToTab=l.navigateToTab;var u=t(10);n.settings=u.settings;var d=t(28);n.tasks=d.tasks;var c=t(11);n.ChildAppWindow=c.ChildAppWindow,n.ParentAppWindow=c.ParentAppWindow;var f=t(12);n.media=f.media;var g=t(30);n.location=g.location;var p=t(31);n.meeting=p.meeting},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=t(1),r=t(4);!function(e){e.notifyAppLoaded=function(){a.ensureInitialized(),a.sendMessageRequestToParent("appInitialization.appLoaded",[r.version])},e.notifySuccess=function(){a.ensureInitialized(),a.sendMessageRequestToParent("appInitialization.success",[r.version])},e.notifyFailure=function(e){a.ensureInitialized(),a.sendMessageRequestToParent("appInitialization.failure",[e.reason,e.message])},function(e){e.AuthFailed="AuthFailed",e.Timeout="Timeout",e.Other="Other"}(e.FailedReason||(e.FailedReason={}))}(n.appInitialization||(n.appInitialization={}))},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=t(1),r=t(0),o=t(2);!function(e){var n,t;function i(){l();try{r.GlobalVars.childWindow&&r.GlobalVars.childWindow.close()}finally{r.GlobalVars.childWindow=null,r.GlobalVars.childOrigin=null}}function s(e){n=e,i();var t=n.width||600,a=n.height||400;t=Math.min(t,r.GlobalVars.currentWindow.outerWidth-400),a=Math.min(a,r.GlobalVars.currentWindow.outerHeight-200);var o=document.createElement("a");o.href=n.url;var s=void 0!==r.GlobalVars.currentWindow.screenLeft?r.GlobalVars.currentWindow.screenLeft:r.GlobalVars.currentWindow.screenX,l=void 0!==r.GlobalVars.currentWindow.screenTop?r.GlobalVars.currentWindow.screenTop:r.GlobalVars.currentWindow.screenY;s+=r.GlobalVars.currentWindow.outerWidth/2-t/2,l+=r.GlobalVars.currentWindow.outerHeight/2-a/2,r.GlobalVars.childWindow=r.GlobalVars.currentWindow.open(o.href,"_blank","toolbar=no, location=yes, status=no, menubar=no, scrollbars=yes, top="+l+", left="+s+", width="+t+", height="+a),r.GlobalVars.childWindow?u():d("FailedToOpenWindow")}function l(){t&&(clearInterval(t),t=0),delete r.GlobalVars.handlers.initialize,delete r.GlobalVars.handlers.navigateCrossDomain}function u(){l(),t=r.GlobalVars.currentWindow.setInterval(function(){if(!r.GlobalVars.childWindow||r.GlobalVars.childWindow.closed)d("CancelledByUser");else{var e=r.GlobalVars.childOrigin;try{r.GlobalVars.childOrigin="*",a.sendMessageEventToChild("ping")}finally{r.GlobalVars.childOrigin=e}}},100),r.GlobalVars.handlers.initialize=function(){return[o.FrameContexts.authentication,r.GlobalVars.hostClientType]},r.GlobalVars.handlers.navigateCrossDomain=function(){return!1}}function d(e){try{n&&n.failureCallback&&n.failureCallback(e)}finally{n=null,i()}}function c(e,n,t){if(e){var a=document.createElement("a");a.href=decodeURIComponent(e),a.host&&a.host!==window.location.host&&"outlook.office.com"===a.host&&a.search.indexOf("client_type=Win32_Outlook")>-1&&(n&&"result"===n&&(t&&(a.href=f(a.href,"result",t)),r.GlobalVars.currentWindow.location.assign(f(a.href,"authSuccess",""))),n&&"reason"===n&&(t&&(a.href=f(a.href,"reason",t)),r.GlobalVars.currentWindow.location.assign(f(a.href,"authFailure",""))))}}function f(e,n,t){var a=e.indexOf("#"),r=-1===a?"#":e.substr(a);return r=r+"&"+n+(""!==t?"="+t:""),(e=-1===a?e:e.substr(0,a))+r}r.GlobalVars.handlers["authentication.authenticate.success"]=function(e){try{n&&n.successCallback&&n.successCallback(e)}finally{n=null,i()}},r.GlobalVars.handlers["authentication.authenticate.failure"]=d,e.registerAuthenticationHandlers=function(e){n=e},e.authenticate=function(e){var t=void 0!==e?e:n;if(a.ensureInitialized(o.FrameContexts.content,o.FrameContexts.sidePanel,o.FrameContexts.settings,o.FrameContexts.remove,o.FrameContexts.task,o.FrameContexts.stage),r.GlobalVars.hostClientType===o.HostClientType.desktop||r.GlobalVars.hostClientType===o.HostClientType.android||r.GlobalVars.hostClientType===o.HostClientType.ios||r.GlobalVars.hostClientType===o.HostClientType.rigel){var i=document.createElement("a");i.href=t.url;var l=a.sendMessageRequestToParent("authentication.authenticate",[i.href,t.width,t.height]);r.GlobalVars.callbacks[l]=function(e,n){e?t.successCallback(n):t.failureCallback(n)}}else s(t)},e.getAuthToken=function(e){a.ensureInitialized();var n=a.sendMessageRequestToParent("authentication.getAuthToken",[e.resources,e.claims,e.silent]);r.GlobalVars.callbacks[n]=function(n,t){n?e.successCallback(t):e.failureCallback(t)}},e.getUser=function(e){a.ensureInitialized();var n=a.sendMessageRequestToParent("authentication.getUser");r.GlobalVars.callbacks[n]=function(n,t){n?e.successCallback(t):e.failureCallback(t)}},e.notifySuccess=function(e,n){c(n,"result",e),a.ensureInitialized(o.FrameContexts.authentication),a.sendMessageRequestToParent("authentication.authenticate.success",[e]),a.waitForMessageQueue(r.GlobalVars.parentWindow,function(){return setTimeout(function(){return r.GlobalVars.currentWindow.close()},200)})},e.notifyFailure=function(e,n){c(n,"reason",e),a.ensureInitialized(o.FrameContexts.authentication),a.sendMessageRequestToParent("authentication.authenticate.failure",[e]),a.waitForMessageQueue(r.GlobalVars.parentWindow,function(){return setTimeout(function(){return r.GlobalVars.currentWindow.close()},200)})}}(n.authentication||(n.authentication={}))},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=t(1),r=t(0),o=t(4),i=t(10),s=t(3),l=t(9),u=t(2);function d(e,n){if(!r.GlobalVars.initializeCalled){r.GlobalVars.initializeCalled=!0;var t=function(e){return a.processMessage(e)};r.GlobalVars.currentWindow=r.GlobalVars.currentWindow||window,r.GlobalVars.parentWindow=r.GlobalVars.currentWindow.parent!==r.GlobalVars.currentWindow.self?r.GlobalVars.currentWindow.parent:r.GlobalVars.currentWindow.opener,(r.GlobalVars.parentWindow||n)&&r.GlobalVars.currentWindow.addEventListener("message",t,!1),r.GlobalVars.parentWindow||(r.GlobalVars.isFramelessWindow=!0,window.onNativeMessage=a.handleParentMessage);try{r.GlobalVars.parentOrigin="*";var s=a.sendMessageRequestToParent("initialize",[o.version]);r.GlobalVars.callbacks[s]=function(e,n,t){void 0===t&&(t=o.defaultSDKVersionForCompatCheck),r.GlobalVars.frameContext=e,r.GlobalVars.hostClientType=n,r.GlobalVars.clientSupportedSDKVersion=t,r.GlobalVars.initializeCallbacks.forEach(function(e){return e()}),r.GlobalVars.initializeCallbacks=[],r.GlobalVars.initializeCompleted=!0}}finally{r.GlobalVars.parentOrigin=null}this._uninitialize=function(){r.GlobalVars.frameContext&&(f(null),g(null),p(null),m(null),b(null),l.logs.registerGetLogHandler(null)),r.GlobalVars.frameContext===u.FrameContexts.settings&&i.settings.registerOnSaveHandler(null),r.GlobalVars.frameContext===u.FrameContexts.remove&&i.settings.registerOnRemoveHandler(null),r.GlobalVars.currentWindow.removeEventListener("message",t,!1),r.GlobalVars.initializeCalled=!1,r.GlobalVars.initializeCompleted=!1,r.GlobalVars.initializeCallbacks=[],r.GlobalVars.additionalValidOrigins=[],r.GlobalVars.parentWindow=null,r.GlobalVars.parentOrigin=null,r.GlobalVars.parentMessageQueue=[],r.GlobalVars.childWindow=null,r.GlobalVars.childOrigin=null,r.GlobalVars.childMessageQueue=[],r.GlobalVars.nextMessageId=0,r.GlobalVars.callbacks={},r.GlobalVars.frameContext=null,r.GlobalVars.hostClientType=null,r.GlobalVars.isFramelessWindow=!1}}Array.isArray(n)&&a.processAdditionalValidOrigins(n),e&&(r.GlobalVars.initializeCompleted?e():r.GlobalVars.initializeCallbacks.push(e))}function c(){window.print()}function f(e){a.ensureInitialized(),r.GlobalVars.themeChangeHandler=e,e&&a.sendMessageRequestToParent("registerHandler",["themeChange"])}function g(e){a.ensureInitialized(),r.GlobalVars.fullScreenChangeHandler=e,e&&a.sendMessageRequestToParent("registerHandler",["fullScreen"])}function p(e){a.ensureInitialized(),r.GlobalVars.backButtonPressHandler=e,e&&a.sendMessageRequestToParent("registerHandler",["backButton"])}function b(e){a.ensureInitialized(),r.GlobalVars.loadHandler=e,e&&a.sendMessageRequestToParent("registerHandler",["load"])}function m(e){a.ensureInitialized(),r.GlobalVars.beforeUnloadHandler=e,e&&a.sendMessageRequestToParent("registerHandler",["beforeUnload"])}function h(e){a.ensureInitialized(u.FrameContexts.content),a.sendMessageRequestToParent("setFrameContext",[e])}n.initialize=d,n._initialize=function(e){r.GlobalVars.currentWindow=e},n._uninitialize=function(){},n.enablePrintCapability=function(){r.GlobalVars.printCapabilityEnabled||(r.GlobalVars.printCapabilityEnabled=!0,a.ensureInitialized(),document.addEventListener("keydown",function(e){(e.ctrlKey||e.metaKey)&&80===e.keyCode&&(c(),e.cancelBubble=!0,e.preventDefault(),e.stopImmediatePropagation())}))},n.print=c,n.getContext=function(e){a.ensureInitialized();var n=a.sendMessageRequestToParent("getContext");r.GlobalVars.callbacks[n]=function(n){n.frameContext||(n.frameContext=r.GlobalVars.frameContext),e(n)}},n.registerOnThemeChangeHandler=f,n.registerFullScreenHandler=g,n.registerAppButtonClickHandler=function(e){a.ensureInitialized(u.FrameContexts.content),r.GlobalVars.appButtonClickHandler=e,e&&a.sendMessageRequestToParent("registerHandler",["appButtonClick"])},n.registerAppButtonHoverEnterHandler=function(e){a.ensureInitialized(u.FrameContexts.content),r.GlobalVars.appButtonHoverEnterHandler=e,e&&a.sendMessageRequestToParent("registerHandler",["appButtonHoverEnter"])},n.registerAppButtonHoverLeaveHandler=function(e){a.ensureInitialized(u.FrameContexts.content),r.GlobalVars.appButtonHoverLeaveHandler=e,e&&a.sendMessageRequestToParent("registerHandler",["appButtonHoverLeave"])},n.registerBackButtonHandler=p,n.registerOnLoadHandler=b,n.registerBeforeUnloadHandler=m,n.registerChangeSettingsHandler=function(e){a.ensureInitialized(u.FrameContexts.content),r.GlobalVars.changeSettingsHandler=e,e&&a.sendMessageRequestToParent("registerHandler",["changeSettings"])},n.getTabInstances=function(e,n){a.ensureInitialized();var t=a.sendMessageRequestToParent("getTabInstances",[n]);r.GlobalVars.callbacks[t]=e},n.getMruTabInstances=function(e,n){a.ensureInitialized();var t=a.sendMessageRequestToParent("getMruTabInstances",[n]);r.GlobalVars.callbacks[t]=e},n.shareDeepLink=function(e){a.ensureInitialized(u.FrameContexts.content,u.FrameContexts.sidePanel),a.sendMessageRequestToParent("shareDeepLink",[e.subEntityId,e.subEntityLabel,e.subEntityWebUrl])},n.executeDeepLink=function(e,n){a.ensureInitialized(u.FrameContexts.content,u.FrameContexts.sidePanel,u.FrameContexts.settings,u.FrameContexts.task,u.FrameContexts.stage);var t=a.sendMessageRequestToParent("executeDeepLink",[e]);r.GlobalVars.callbacks[t]=n||s.getGenericOnCompleteHandler()},n.setFrameContext=h,n.initializeWithFrameContext=function(e,n,t){d(n,t),h(e)}},function(e,n,t){"use strict";var a=this&&this.__rest||function(e,n){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&n.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)n.indexOf(a[r])<0&&(t[a[r]]=e[a[r]])}return t};Object.defineProperty(n,"__esModule",{value:!0});var r=t(1),o=t(0),i=t(2),s=t(11);!function(e){e.startTask=function(e,n){r.ensureInitialized(i.FrameContexts.content,i.FrameContexts.sidePanel);var t=r.sendMessageRequestToParent("tasks.startTask",[e]);return o.GlobalVars.callbacks[t]=n,new s.ChildAppWindow},e.updateTask=function(e){r.ensureInitialized(i.FrameContexts.content,i.FrameContexts.sidePanel,i.FrameContexts.task),e.width,e.height;var n=a(e,["width","height"]);if(Object.keys(n).length)throw new Error("updateTask requires a taskInfo argument containing only width and height");r.sendMessageRequestToParent("tasks.updateTask",[e])},e.submitTask=function(e,n){r.ensureInitialized(i.FrameContexts.content,i.FrameContexts.sidePanel,i.FrameContexts.task),r.sendMessageRequestToParent("tasks.completeTask",[e,Array.isArray(n)?n:[n]])}}(n.tasks||(n.tasks={}))},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=t(12);n.createFile=function(e,n){if(null==e||null==n||e.length<=0)return null;var t,a=1;return e.sort(function(e,n){return e.sequence>n.sequence?1:-1}),e.forEach(function(e){e.sequence==a&&(t=t?new Blob([t,e.file],{type:n}):new Blob([e.file],{type:n}),a++)}),t},n.decodeAttachment=function(e,n){if(null==e||null==n)return null;for(var t=atob(e.chunk),a=new Array(t.length),r=0;r<t.length;r++)a[r]=t.charCodeAt(r);var o=new Uint8Array(a),i=new Blob([o],{type:n});return{sequence:e.chunkSequence,file:i}},n.validateSelectMediaInputs=function(e){return!(null==e||e.maxMediaCount>10)},n.validateGetMediaInputs=function(e,n,t){return null!=e&&null!=n&&n==a.media.FileFormat.ID&&null!=t},n.validateViewImagesInput=function(e){return!(null==e||e.length<=0||e.length>10)},n.validateScanBarCodeInput=function(e){return!e||!(null===e.timeOutIntervalInSec||e.timeOutIntervalInSec<=0||e.timeOutIntervalInSec>60)}},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=t(0),r=t(5),o=t(1),i=t(2);!function(e){e.locationAPIsRequiredVersion="1.9.0",e.getLocation=function(n,t){if(!t)throw new Error("[location.getLocation] Callback cannot be null");if(o.ensureInitialized(i.FrameContexts.content,i.FrameContexts.task),o.isAPISupportedByPlatform(e.locationAPIsRequiredVersion))if(n){var s=o.sendMessageRequestToParent("location.getLocation",[n]);a.GlobalVars.callbacks[s]=t}else t({errorCode:r.ErrorCode.INVALID_ARGUMENTS},void 0);else t({errorCode:r.ErrorCode.OLD_PLATFORM},void 0)},e.showLocation=function(n,t){if(!t)throw new Error("[location.showLocation] Callback cannot be null");if(o.ensureInitialized(i.FrameContexts.content,i.FrameContexts.task),o.isAPISupportedByPlatform(e.locationAPIsRequiredVersion))if(n){var s=o.sendMessageRequestToParent("location.showLocation",[n]);a.GlobalVars.callbacks[s]=t}else t({errorCode:r.ErrorCode.INVALID_ARGUMENTS},void 0);else t({errorCode:r.ErrorCode.OLD_PLATFORM},void 0)}}(n.location||(n.location={}))},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=t(1),r=t(0);!function(e){!function(e){e.Unknown="Unknown",e.Adhoc="Adhoc",e.Scheduled="Scheduled",e.Recurring="Recurring",e.Broadcast="Broadcast",e.MeetNow="MeetNow"}(e.MeetingType||(e.MeetingType={})),e.getIncomingClientAudioState=function(e){if(!e)throw new Error("[get incoming client audio state] Callback cannot be null");a.ensureInitialized();var n=a.sendMessageRequestToParent("getIncomingClientAudioState");r.GlobalVars.callbacks[n]=e},e.toggleIncomingClientAudio=function(e){if(!e)throw new Error("[toggle incoming client audio] Callback cannot be null");a.ensureInitialized();var n=a.sendMessageRequestToParent("toggleIncomingClientAudio");r.GlobalVars.callbacks[n]=e},e.getMeetingDetails=function(e){if(!e)throw new Error("[get meeting details] Callback cannot be null");a.ensureInitialized();var n=a.sendMessageRequestToParent("meeting.getMeetingDetails");r.GlobalVars.callbacks[n]=e},e.getAuthenticationTokenForAnonymousUser=function(e){if(!e)throw new Error("[get Authentication Token For AnonymousUser] Callback cannot be null");a.ensureInitialized();var n=a.sendMessageRequestToParent("meeting.getAuthenticationTokenForAnonymousUser");r.GlobalVars.callbacks[n]=e}}(n.meeting||(n.meeting={}))}])});

/***/ }),

/***/ "5w3Y":
/*!******************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-teams-shared@1.2.9_73edbda55c5e419b40ebf62a69b39c66/node_modules/@ms/odsp-teams-shared/lib/utilities/index.js ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: TeamsUtilities */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TeamsUtilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TeamsUtilities */ "foyl");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TeamsUtilities", function() { return _TeamsUtilities__WEBPACK_IMPORTED_MODULE_0__["TeamsUtilities"]; });

// tslint:disable:export-name

//# sourceMappingURL=index.js.map

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

/***/ "EONX":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-teams-shared@1.2.9_73edbda55c5e419b40ebf62a69b39c66/node_modules/@ms/odsp-teams-shared/lib/teams/SharedSPTeamsHostedApplication.js ***!
  \***************************************************************************************************************************************************************************************************/
/*! exports provided: SharedSPTeamsHostedApplication, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedSPTeamsHostedApplication", function() { return SharedSPTeamsHostedApplication; });
/* harmony import */ var _ms_odsp_utilities_lib_killswitch_Killswitch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ms/odsp-utilities/lib/killswitch/Killswitch */ "QUgr");
/* harmony import */ var _ms_odsp_utilities_lib_logging_ErrorHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ms/odsp-utilities/lib/logging/ErrorHelper */ "lmjA");
/* harmony import */ var _ms_odsp_utilities_lib_features_Features__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ms/odsp-utilities/lib/features/Features */ "8G1T");
/* harmony import */ var _TeamsClientSPNavigationHistoryManager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TeamsClientSPNavigationHistoryManager */ "PwpH");
/* harmony import */ var _utilities_TeamsUtilities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utilities/TeamsUtilities */ "foyl");
/* harmony import */ var _TeamsSDKInitializer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./TeamsSDKInitializer */ "KIhc");
/* harmony import */ var _telemetry_TeamsLogonTelemetry__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./telemetry/TeamsLogonTelemetry */ "j2rM");
/* harmony import */ var _filePreview_FilePreviewManager__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../filePreview/FilePreviewManager */ "OwEM");
/* harmony import */ var _ms_odsp_utilities_lib_logging_events_Engagement_event__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ms/odsp-utilities/lib/logging/events/Engagement.event */ "cDPE");









var TeamsUserAgentFlight = { ODB: 1924 }; /* SPTeamsPagesTabUserAgent */
var TeamsBackButtonFlight = { ODB: 1771 }; /* SPTeamsBackButtonHandler */
var TeamsLinkHoverFlight = { ODB: 60015 }; /* SPTeamsLinkHover */
var TeamsSaveTabCtxPerSession = { ODB: 1566 }; /* SaveTabContextPerSession */
var SPAppBarFlight = { ODB: 1399 }; /* SPAppBar */
var WexTeamsPortalsFRE = { ODB: 1301 }; /* WexTeamsPortalsFRE */
/**
 * Exposes all operations supported by the library
 * when SharePoint is hosted in Teams.
 */
var SharedSPTeamsHostedApplication = /** @class */ (function () {
    function SharedSPTeamsHostedApplication(appType) {
        var _this = this;
        this._teamsClientSPNavigationHistoryManager = undefined;
        this._appType = 'default'; // tslint:disable-line:typedef
        this._classIdName = 'sp-appBar-callout'; // tslint:disable-line:typedef
        // tslint:disable-next-line:no-any
        this.onBeforePageLoad = function (serviceScope, appType) {
            try {
                if (_utilities_TeamsUtilities__WEBPACK_IMPORTED_MODULE_4__["TeamsUtilities"].isTeamsWebViewHosted()) {
                    _this._teamsClientSPNavigationHistoryManager.registerBackButtonHandler(appType);
                }
            }
            catch (error) {
                _ms_odsp_utilities_lib_logging_ErrorHelper__WEBPACK_IMPORTED_MODULE_1__["default"].logError(error, {
                    eventName: 'SharedSPTeamsHostedApplication.onBeforePageLoad',
                    action: 'OnBeforePageLoad',
                    feature: 'SharedSPTeamsHostedApplication'
                });
            }
        };
        this.onPageLoaded = function (appType, url) {
            try {
                if (_utilities_TeamsUtilities__WEBPACK_IMPORTED_MODULE_4__["TeamsUtilities"].isTeamsWebViewHosted()) {
                    _this._teamsClientSPNavigationHistoryManager.onPageLoad(appType, url);
                }
            }
            catch (error) {
                _ms_odsp_utilities_lib_logging_ErrorHelper__WEBPACK_IMPORTED_MODULE_1__["default"].logError(error, {
                    eventName: 'SharedSPTeamsHostedApplication.onPageLoaded',
                    action: 'onPageLoaded',
                    feature: 'SharedSPTeamsHostedApplication'
                });
            }
        };
        this.onBeforePageDispose = function (appType) {
            _this._teamsClientSPNavigationHistoryManager.onBeforePageDispose(appType);
        };
        /**
         * If the request made from company portal app,
         * Enable the siteHeader in Teams for this page for Teams Custom app mode
         */
        this.pageOpenedInTeamsApp = function () {
            // If the SharePoint is hosted inside Teams then only check weather its an company portal app or not.
            var resolve;
            /* tslint:disable-next-line:no-any */
            var promise = new Promise(function (res) {
                resolve = res;
            });
            var teamsInitializer = _TeamsSDKInitializer__WEBPACK_IMPORTED_MODULE_5__["TeamsSDKInitializer"].getInstance();
            if (teamsInitializer) {
                var microsoftTeams_1 = teamsInitializer.getTeamsSDK();
                /* tslint:disable-next-line:no-any */
                microsoftTeams_1.getContext(function (context) {
                    var teamsCustomAppType = undefined;
                    var portalsTabEntityId = 'sharepointportal_';
                    var inTeam = !!(context.teamId && context.channelId);
                    var inChat = !!context.chatId;
                    var isInTeamsCustomAppMode = !inTeam && !inChat;
                    var isInTeamsPortalsAppMode = context.entityId.includes(portalsTabEntityId);
                    if (isInTeamsCustomAppMode) {
                        _ms_odsp_utilities_lib_logging_events_Engagement_event__WEBPACK_IMPORTED_MODULE_8__["default"].logData({ name: 'AppChrome.PageOpenedInTeamsCustomAppContext' });
                        teamsCustomAppType = 'custom';
                        // Check if we are in Protal app context
                        var queryParameters = new URL(window.location.href).searchParams;
                        if (queryParameters.get('app') === 'portals' ||
                            window['teamsCustomAppType'] === 'portals' || // tslint:disable-line:no-string-literal
                            isInTeamsPortalsAppMode) {
                            _ms_odsp_utilities_lib_logging_events_Engagement_event__WEBPACK_IMPORTED_MODULE_8__["default"].logData({ name: 'AppChrome.PageOpenedInTeamsPortalsAppContext' });
                            teamsCustomAppType = 'portals';
                            microsoftTeams_1.registerBeforeUnloadHandler(function () {
                                _ms_odsp_utilities_lib_logging_events_Engagement_event__WEBPACK_IMPORTED_MODULE_8__["default"].logData({ name: 'AppChrome.HomeSiteAppOpened' });
                                /* Storing the current URL in Session Storage */
                                if (_ms_odsp_utilities_lib_features_Features__WEBPACK_IMPORTED_MODULE_2__["default"].isFeatureEnabled(TeamsSaveTabCtxPerSession)) {
                                    sessionStorage.setItem('TeamsHomeSiteLastUrl_' + context.entityId, location.href);
                                }
                                return true;
                            });
                            if (_utilities_TeamsUtilities__WEBPACK_IMPORTED_MODULE_4__["TeamsUtilities"].isTeamsWebViewHosted() &&
                                _ms_odsp_utilities_lib_features_Features__WEBPACK_IMPORTED_MODULE_2__["default"].isFeatureEnabled(TeamsLinkHoverFlight)) {
                                _this._showURLLinkOnHover();
                            }
                        }
                    }
                    else {
                        _ms_odsp_utilities_lib_logging_events_Engagement_event__WEBPACK_IMPORTED_MODULE_8__["default"].logData({ name: 'AppChrome.PageOpenedInTeamsChannelContext' });
                    }
                    window['teamsCustomAppType'] = teamsCustomAppType; // tslint:disable-line:no-string-literal
                    resolve(teamsCustomAppType);
                });
                // tslint:disable-next-line:no-string-literal no-any
                if (_ms_odsp_utilities_lib_features_Features__WEBPACK_IMPORTED_MODULE_2__["default"].isFeatureEnabled(SPAppBarFlight) && !window.toggleAppBarPanel) {
                    _this._setupEventListener({
                        elm: document.body,
                        eventType: 'click',
                        fn: function (e) {
                            _this._onClick(e);
                        }
                    });
                    /**
                     * Make sure Escape can close the callout
                     */
                    _this._setupEventListener({
                        elm: document.body,
                        eventType: 'keydown',
                        fn: function (e) {
                            if (e.key === 'Escape') {
                                _this._dismissAppBarCallout();
                            }
                        }
                    });
                    // tslint:disable-next-line:no-string-literal no-any
                    window['toggleAppBarPanel'] = function () {
                        var spAppBarCallout = document.getElementById('sp-appBar-callout');
                        if (spAppBarCallout) {
                            spAppBarCallout.style.display = spAppBarCallout.style.display === 'none' ? 'block' : 'none';
                        }
                        else {
                            _this._createAppBarPanelDiv();
                        }
                        if (_ms_odsp_utilities_lib_features_Features__WEBPACK_IMPORTED_MODULE_2__["default"].isFeatureEnabled(WexTeamsPortalsFRE) &&
                            !window.localStorage.getItem('PortalsTeachingBubbleDismissed')) {
                            window.localStorage.setItem('PortalsTeachingBubbleDismissed', 'true');
                            var teamsPortalsTeachingBubbleContainer = document.getElementById('teams-portals-teachingBubble');
                            if (teamsPortalsTeachingBubbleContainer) {
                                teamsPortalsTeachingBubbleContainer.style.display = 'none';
                            }
                        }
                    };
                }
                microsoftTeams_1.registerAppButtonClickHandler(function () {
                    window['toggleAppBarPanel'](); // tslint:disable-line:no-any no-string-literal
                });
            }
            return promise;
        };
        this.getTeamsSDKInitializer = function () {
            return _TeamsSDKInitializer__WEBPACK_IMPORTED_MODULE_5__["TeamsSDKInitializer"].getInstance();
        };
        if (appType) {
            this._appType = appType;
        }
        if (!_ms_odsp_utilities_lib_killswitch_Killswitch__WEBPACK_IMPORTED_MODULE_0__["Killswitch"].isActivated('78320a7e-d28d-4403-8139-e62164a3ff73', '04/20/2020', 'TeamsLogon telemetry addition')) {
            _telemetry_TeamsLogonTelemetry__WEBPACK_IMPORTED_MODULE_6__["TeamsLogonTelemetry"].updateTeamsLogonTelemetry();
        }
        if (_ms_odsp_utilities_lib_features_Features__WEBPACK_IMPORTED_MODULE_2__["default"].isFeatureEnabled(TeamsUserAgentFlight)) {
            _utilities_TeamsUtilities__WEBPACK_IMPORTED_MODULE_4__["TeamsUtilities"].setSPTeamsUserAgent();
        }
        if (_utilities_TeamsUtilities__WEBPACK_IMPORTED_MODULE_4__["TeamsUtilities"].isTeamsWebViewHosted() && _ms_odsp_utilities_lib_features_Features__WEBPACK_IMPORTED_MODULE_2__["default"].isFeatureEnabled(TeamsBackButtonFlight)) {
            this._teamsClientSPNavigationHistoryManager = new _TeamsClientSPNavigationHistoryManager__WEBPACK_IMPORTED_MODULE_3__["TeamsClientSPNavigationHistoryManager"](this._appType);
        }
    }
    SharedSPTeamsHostedApplication.prototype.openOneDriveItemInFilePreview = function (previewItem) {
        _filePreview_FilePreviewManager__WEBPACK_IMPORTED_MODULE_7__["FilePreviewManager"].openOneDriveItemInFilePreview(previewItem);
    };
    SharedSPTeamsHostedApplication.prototype._setupEventListener = function (eventListenerObj) {
        /* tslint:disable:ban-native-functions */
        eventListenerObj.elm.addEventListener(eventListenerObj.eventType, eventListenerObj.fn, false);
    };
    // Checking the element is nested inside Anchor element
    SharedSPTeamsHostedApplication.prototype._delegate = function (e) {
        var _a, _b;
        var target = e.target; // tslint:disable-line:no-any
        var related = e.relatedTarget; // tslint:disable-line:no-any
        var match = undefined;
        // search for a parent node matching the delegation selector
        while (target &&
            target !== document &&
            !(match = target instanceof HTMLAnchorElement ? target : undefined) &&
            !(((_b = (_a = target) === null || _a === void 0 ? void 0 : _a.dataset) === null || _b === void 0 ? void 0 : _b.automationId) && target.dataset.automationId === 'CanvasSection')) {
            target = target.parentNode;
        }
        // exit if no matching node has been found
        if (!match) {
            return undefined;
        }
        // loop through the parent of the related target to make sure that it's not a child of the target
        while (related && related !== target && related !== document) {
            related = related.parentNode;
        }
        // exit if this is the case
        if (related === target) {
            return undefined;
        }
        return target;
    };
    /**
     * Traverses up ancestors to see if element is or is a child of element with desired type / class
     */
    SharedSPTeamsHostedApplication.prototype._getAncestorElm = function (elm, elmTypeOfParent, classOfParent) {
        if (!elm) {
            return null;
        }
        var elmToEvaluate = elm;
        while (elmToEvaluate) {
            if (elmToEvaluate.tagName === elmTypeOfParent.toUpperCase() &&
                elmToEvaluate.classList.contains(classOfParent)) {
                return elmToEvaluate;
            }
            elmToEvaluate = elmToEvaluate.parentElement;
        }
        return null;
    };
    /**
     * The function registered with the click handler covering the entire body of the page when the callout is active
     * Determines whether click is outside both the callout and appbar - hides the object
     * If click in appbar link, determines if new workload or same workload - navigates to new URL for new workload
     * hides if same workload
     */
    SharedSPTeamsHostedApplication.prototype._onClick = function (e) {
        var calloutElm = this._getAncestorElm(e.target, 'div', this._classIdName);
        if (!calloutElm) {
            this._dismissAppBarCallout();
        }
        else {
            var potentialButton = e.target;
            if (potentialButton.className === 'callout-close-button') {
                this._dismissAppBarCallout();
            }
        }
    };
    SharedSPTeamsHostedApplication.prototype._dismissAppBarCallout = function () {
        var spAppBarCallout = document.getElementById('sp-appBar-callout');
        if (spAppBarCallout && spAppBarCallout.style.display !== 'none') {
            spAppBarCallout.style.display = 'none';
        }
    };
    SharedSPTeamsHostedApplication.prototype._createAppBarPanelDiv = function () {
        var appAndPropertyPaneDiv = document.getElementById('spPageChromeAppDiv')
            .parentElement;
        if (appAndPropertyPaneDiv) {
            var appBarPanelDiv = document.createElement('div');
            appBarPanelDiv.setAttribute('id', 'sp-appBar-callout');
            appBarPanelDiv.setAttribute('class', 'sp-appBar-callout');
            var closeDiv = appBarPanelDiv.appendChild(document.createElement('div'));
            closeDiv.setAttribute('class', 'callout-close');
            var closeButton = closeDiv.appendChild(document.createElement('button'));
            closeButton.textContent = 'X';
            closeButton.setAttribute('onClick', 'window.toggleAppBarPanel()'); // tslint:disable-line:no-string-literal no-any
            closeButton.setAttribute('class', 'callout-close-button');
            var shimmerDiv = appBarPanelDiv.appendChild(document.createElement('div'));
            shimmerDiv.setAttribute('class', 'callout-shimmer no-shimmer');
            shimmerDiv
                .appendChild(document.createElement('div'))
                .setAttribute('class', 'callout-shimmer-comment w70');
            shimmerDiv
                .appendChild(document.createElement('div'))
                .setAttribute('class', 'callout-shimmer-comment w90');
            shimmerDiv
                .appendChild(document.createElement('div'))
                .setAttribute('class', 'callout-shimmer-comment w70');
            shimmerDiv
                .appendChild(document.createElement('div'))
                .setAttribute('class', 'callout-shimmer-comment w90');
            shimmerDiv
                .appendChild(document.createElement('div'))
                .setAttribute('class', 'callout-shimmer-comment w80');
            shimmerDiv
                .appendChild(document.createElement('div'))
                .setAttribute('class', 'callout-shimmer-comment w80');
            shimmerDiv
                .appendChild(document.createElement('div'))
                .setAttribute('class', 'callout-shimmer-comment w70');
            shimmerDiv
                .appendChild(document.createElement('div'))
                .setAttribute('class', 'callout-shimmer-comment w60');
            shimmerDiv
                .appendChild(document.createElement('div'))
                .setAttribute('class', 'callout-shimmer-comment w70');
            shimmerDiv
                .appendChild(document.createElement('div'))
                .setAttribute('class', 'callout-shimmer-comment w50');
            var appBarPanelIframe = appBarPanelDiv.appendChild(document.createElement('iframe'));
            appBarPanelIframe.src = '/_layouts/15/spappbar.aspx?workload=teams';
            appBarPanelIframe.setAttribute('class', 'callout-iframe');
            appAndPropertyPaneDiv.appendChild(appBarPanelDiv);
        }
    };
    // Showing Url on link hover
    SharedSPTeamsHostedApplication.prototype._showURLLinkOnHover = function () {
        var _this = this;
        var appAndPropertyPaneDiv = document.getElementById('spPageChromeAppDiv')
            .parentElement;
        if (appAndPropertyPaneDiv) {
            // Creating a div element to show the hover URL
            var hoverElementDiv = document.createElement('div');
            hoverElementDiv.setAttribute('id', 'sp-hoverElement');
            hoverElementDiv.setAttribute('class', 'sp-hoverElement');
            hoverElementDiv.style.cssText =
                'bottom: 0px; left: 0px; padding: 2px 4px 2px 4px; position: absolute;' +
                    'background-color: #EAEAEA; color: #292929; font-family: "Segoe UI", "Segoe UI Web";' +
                    'white-space: nowrap; font-size: 12px; z-index: 11;';
            appAndPropertyPaneDiv.appendChild(hoverElementDiv);
            // Adding mouse event listener, Showing the Url if its a anchor element
            document.addEventListener('mouseover', function (e) {
                var _a;
                var target = _this._delegate(e); // tslint:disable-line:no-any
                var hoverUrl = ((_a = target) === null || _a === void 0 ? void 0 : _a.href) ? target.href : undefined;
                var hoverElement = document.getElementById('sp-hoverElement');
                if (hoverElement) {
                    hoverElement.style.display = hoverUrl ? 'block' : 'none';
                    hoverElement.innerHTML = hoverUrl ? hoverUrl : '';
                }
            });
        }
    };
    return SharedSPTeamsHostedApplication;
}());

/* harmony default export */ __webpack_exports__["default"] = (SharedSPTeamsHostedApplication);
//# sourceMappingURL=SharedSPTeamsHostedApplication.js.map

/***/ }),

/***/ "FAc7":
/*!************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-utilities@29.7.9_5d977624104b06c7bcaa2de974ff51f1/node_modules/@ms/odsp-utilities/lib/icons/ItemType.js ***!
  \************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ms/odsp-core-bundle */ "K9kD");
/* harmony import */ var _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__["ItemType"]; });

// Loading @ms/odsp-utilities/./lib/icons/ItemType.js



/***/ }),

/***/ "I0DE":
/*!********************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-teams-shared@1.2.9_73edbda55c5e419b40ebf62a69b39c66/node_modules/@ms/odsp-teams-shared/lib/index.js ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: SharedSPTeamsHostedApplication, HostedApplicationFactory, TeamsClientSPNavigationHistoryManager, TeamsSDKInitializer, TeamsLogonTelemetry, TeamsUtilities */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _teams_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./teams/index */ "l9+N");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SharedSPTeamsHostedApplication", function() { return _teams_index__WEBPACK_IMPORTED_MODULE_0__["SharedSPTeamsHostedApplication"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HostedApplicationFactory", function() { return _teams_index__WEBPACK_IMPORTED_MODULE_0__["HostedApplicationFactory"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TeamsClientSPNavigationHistoryManager", function() { return _teams_index__WEBPACK_IMPORTED_MODULE_0__["TeamsClientSPNavigationHistoryManager"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TeamsSDKInitializer", function() { return _teams_index__WEBPACK_IMPORTED_MODULE_0__["TeamsSDKInitializer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TeamsLogonTelemetry", function() { return _teams_index__WEBPACK_IMPORTED_MODULE_0__["TeamsLogonTelemetry"]; });

/* harmony import */ var _utilities_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utilities/index */ "5w3Y");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TeamsUtilities", function() { return _utilities_index__WEBPACK_IMPORTED_MODULE_1__["TeamsUtilities"]; });



//# sourceMappingURL=index.js.map

/***/ }),

/***/ "I6O9":
/*!***************************************!*\
  !*** external "@microsoft/sp-loader" ***!
  \***************************************/
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_I6O9__;

/***/ }),

/***/ "K9kD":
/*!***************************************!*\
  !*** external "@ms/odsp-core-bundle" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_K9kD__;

/***/ }),

/***/ "KIhc":
/*!****************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-teams-shared@1.2.9_73edbda55c5e419b40ebf62a69b39c66/node_modules/@ms/odsp-teams-shared/lib/teams/TeamsSDKInitializer.js ***!
  \****************************************************************************************************************************************************************************************/
/*! exports provided: TeamsSDKInitializer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamsSDKInitializer", function() { return TeamsSDKInitializer; });
/* harmony import */ var _microsoft_teams_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/teams-js */ "3vE6");
/* harmony import */ var _microsoft_teams_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_teams_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ms_odsp_utilities_lib_logging_ErrorHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ms/odsp-utilities/lib/logging/ErrorHelper */ "lmjA");


var TeamsSDKInitializer = /** @class */ (function () {
    function TeamsSDKInitializer() {
        var _this = this;
        this._isInitialized = false; // tslint:disable-line:typedef
        this.getTeamsSDK = function () {
            if (!_this._isInitialized) {
                return _this._initialize();
            }
            return _microsoft_teams_js__WEBPACK_IMPORTED_MODULE_0__;
        };
        this._initialize = function () {
            try {
                if (_microsoft_teams_js__WEBPACK_IMPORTED_MODULE_0__) {
                    _microsoft_teams_js__WEBPACK_IMPORTED_MODULE_0__["initialize"]();
                    _this._isInitialized = true;
                    return _microsoft_teams_js__WEBPACK_IMPORTED_MODULE_0__;
                }
            }
            catch (error) {
                _ms_odsp_utilities_lib_logging_ErrorHelper__WEBPACK_IMPORTED_MODULE_1__["default"].logError(error, {
                    eventName: 'TeamsSDKInitializer.initialize',
                    action: 'initialize.failed',
                    feature: 'TeamsSDKInitializer'
                });
            }
            return undefined;
        };
        this._initialize();
    }
    /**
     * Get Teams SDK instance
     */
    TeamsSDKInitializer.getInstance = function () {
        if (!this._instance) {
            this._instance = new TeamsSDKInitializer();
        }
        return this._instance;
    };
    TeamsSDKInitializer._instance = undefined;
    return TeamsSDKInitializer;
}());

//# sourceMappingURL=TeamsSDKInitializer.js.map

/***/ }),

/***/ "OwEM":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-teams-shared@1.2.9_73edbda55c5e419b40ebf62a69b39c66/node_modules/@ms/odsp-teams-shared/lib/filePreview/FilePreviewManager.js ***!
  \*********************************************************************************************************************************************************************************************/
/*! exports provided: FilePreviewManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilePreviewManager", function() { return FilePreviewManager; });
/* harmony import */ var _ms_odsp_utilities_lib_icons_ItemType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ms/odsp-utilities/lib/icons/ItemType */ "FAc7");
/* harmony import */ var _ms_odsp_utilities_lib_logging_events_Engagement_event__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ms/odsp-utilities/lib/logging/events/Engagement.event */ "cDPE");
/* harmony import */ var _teams_TeamsSDKInitializer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../teams/TeamsSDKInitializer */ "KIhc");
/* harmony import */ var _utilities_TeamsUtilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utilities/TeamsUtilities */ "foyl");




var FilePreviewManager = /** @class */ (function () {
    function FilePreviewManager() {
    }
    FilePreviewManager.openOneDriveItemInFilePreview = function (previewItem) {
        var _a, _b, _c;
        if (!previewItem.extension ||
            ((_a = previewItem) === null || _a === void 0 ? void 0 : _a.type) === _ms_odsp_utilities_lib_icons_ItemType__WEBPACK_IMPORTED_MODULE_0__["default"].Error ||
            ((_b = previewItem) === null || _b === void 0 ? void 0 : _b.type) === _ms_odsp_utilities_lib_icons_ItemType__WEBPACK_IMPORTED_MODULE_0__["default"].OneNote) {
            _ms_odsp_utilities_lib_logging_events_Engagement_event__WEBPACK_IMPORTED_MODULE_1__["Engagement"].logData({ name: 'TeamsNavigation.WindowOpen.Doclib' });
            window.open(previewItem.openUrl);
            return;
        }
        if (_utilities_TeamsUtilities__WEBPACK_IMPORTED_MODULE_3__["TeamsUtilities"].isFileOpenInTeamsCustomApp()) {
            _ms_odsp_utilities_lib_logging_events_Engagement_event__WEBPACK_IMPORTED_MODULE_1__["Engagement"].logData({ name: 'TeamsNavigation.WindowOpen.CustomAppFileOpen.Doclib' });
            window.open(previewItem.openUrl);
            return;
        }
        var fileType = undefined;
        if (previewItem.extension[0] === '.') {
            fileType = previewItem.extension.slice(1);
        }
        else {
            fileType = previewItem.extension;
        }
        var params = {
            entityId: previewItem.id || '',
            title: (_c = previewItem.name) === null || _c === void 0 ? void 0 : _c.split('.')[0],
            type: fileType,
            objectUrl: previewItem.openUrl,
            baseUrl: previewItem.baseUrl
        };
        _ms_odsp_utilities_lib_logging_events_Engagement_event__WEBPACK_IMPORTED_MODULE_1__["Engagement"].logData({ name: 'TeamsNavigation.Navigation.FileOpen.Doclib' });
        _teams_TeamsSDKInitializer__WEBPACK_IMPORTED_MODULE_2__["TeamsSDKInitializer"].getInstance().getTeamsSDK().openFilePreview(params);
    };
    return FilePreviewManager;
}());

//# sourceMappingURL=FilePreviewManager.js.map

/***/ }),

/***/ "PwpH":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-teams-shared@1.2.9_73edbda55c5e419b40ebf62a69b39c66/node_modules/@ms/odsp-teams-shared/lib/teams/TeamsClientSPNavigationHistoryManager.js ***!
  \**********************************************************************************************************************************************************************************************************/
/*! exports provided: TeamsClientSPNavigationHistoryManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamsClientSPNavigationHistoryManager", function() { return TeamsClientSPNavigationHistoryManager; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _TeamsSDKInitializer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TeamsSDKInitializer */ "KIhc");
/* harmony import */ var _utilities_TeamsUtilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utilities/TeamsUtilities */ "foyl");
/* harmony import */ var _ms_odsp_utilities_lib_logging_events_Engagement_event__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ms/odsp-utilities/lib/logging/events/Engagement.event */ "cDPE");




var TeamsClientSPNavigationHistoryManager = /** @class */ (function () {
    function TeamsClientSPNavigationHistoryManager(appType) {
        var _this = this;
        this._teamsSDKInitializer = undefined;
        /**
         * onPageLoad : Invoked when any modern page gets loaded, sphome gets loaded
         */
        this.onPageLoad = function (appType, url) {
            _this._appType = appType;
            if (!!!url) {
                url = location.href;
            }
            // Get saved data from sessionStorage
            var historyPositionSessionObject = _this._getHistoryPositionSessionObject();
            var backButtonClickedString = 'BackButtonClick';
            // First url hit for the domain
            if (historyPositionSessionObject.startPosition === 0) {
                historyPositionSessionObject.startPosition = history.length;
            }
            // First navigation or forward navigation
            if (historyPositionSessionObject.urlList.length < 1 ||
                url !== historyPositionSessionObject.urlList[historyPositionSessionObject.urlList.length - 1]) {
                backButtonClickedString = 'NonBackButtonClick';
                historyPositionSessionObject.urlList.push(url);
            }
            // save data to sessionStorage
            historyPositionSessionObject.isNavigationInProgress = false;
            if (historyPositionSessionObject.currentAppType !== appType) {
                var prevApp = historyPositionSessionObject.currentAppType;
                historyPositionSessionObject.currentAppType = appType;
                _this._initializationTime = Date.now();
                historyPositionSessionObject.appInitializationMap[appType] = _this._initializationTime;
                _ms_odsp_utilities_lib_logging_events_Engagement_event__WEBPACK_IMPORTED_MODULE_3__["Engagement"].logData({
                    name: "TeamsClientSPNavigationHistoryManager." + backButtonClickedString +
                        (".onPageLoad.crossApp." + appType + "." + prevApp)
                });
            }
            else {
                _ms_odsp_utilities_lib_logging_events_Engagement_event__WEBPACK_IMPORTED_MODULE_3__["Engagement"].logData({
                    name: "TeamsClientSPNavigationHistoryManager." + backButtonClickedString + ".onPageLoad.sameApp." + appType
                });
            }
            _this._setHistoryPositionSessionObject(historyPositionSessionObject);
        };
        /**
         * Get Teams SDK and register back button handler
         */
        this.registerBackButtonHandler = function (appType) {
            _this._appType = appType;
            window[TeamsClientSPNavigationHistoryManager._windowSPTeamsBackButtonHandlerString] = _this._backButtonClickHandler;
            _this._setBackButtonHandler(window[TeamsClientSPNavigationHistoryManager._windowSPTeamsBackButtonHandlerString]);
            _this._updateHistoryPositionSessionObjectOnRegistration(appType);
            _ms_odsp_utilities_lib_logging_events_Engagement_event__WEBPACK_IMPORTED_MODULE_3__["Engagement"].logData({
                name: "TeamsClientSPNavigationHistoryManager.RegisterBackButtonHandler." + appType
            });
        };
        this.onBeforePageDispose = function (appType) {
            var historyPositionSessionObject = _this._getHistoryPositionSessionObject();
            if (historyPositionSessionObject.currentAppType === appType) {
                window[TeamsClientSPNavigationHistoryManager._windowSPTeamsBackButtonHandlerString] = undefined;
                _this._setBackButtonHandler(undefined);
                _ms_odsp_utilities_lib_logging_events_Engagement_event__WEBPACK_IMPORTED_MODULE_3__["Engagement"].logData({
                    name: "TeamsClientSPNavigationHistoryManager.DisposeHandler." + appType
                });
            }
            _this._updateHistoryPositionSessionObjectOnUnRegister(appType, historyPositionSessionObject);
        };
        this._setBackButtonHandler = function (handler) {
            // Register Back Button Handler with Teams SDK
            if (_utilities_TeamsUtilities__WEBPACK_IMPORTED_MODULE_2__["TeamsUtilities"].isTeamsWebViewHosted()) {
                // Get Teams SDK
                var microsoftTeams_1 = _this._teamsSDKInitializer.getTeamsSDK();
                if (microsoftTeams_1 && microsoftTeams_1.registerBackButtonHandler) {
                    // Register Back Button Handler
                    microsoftTeams_1.registerBackButtonHandler(handler);
                    _ms_odsp_utilities_lib_logging_events_Engagement_event__WEBPACK_IMPORTED_MODULE_3__["Engagement"].logData({
                        name: "TeamsClientSPNavigationHistoryManager.SetBackButtonHandler." + String(handler)
                    });
                }
            }
        };
        /**
         * When we are in Teams Desktop Client,
         * we need to register Back Button Handler which will be invoked when user clicks on Teams Client's back button,
         * When back button click :
         *      is handled -> perform back and return true
         *      is not handled -> return false
         */
        this._backButtonClickHandler = function () {
            var isHandled = true;
            /** check whether we should handle back
             * False case includes, when we have reached beginning of history
             */
            // Get saved data from sessionStorage
            var historyPositionSessionObject = _this._getHistoryPositionSessionObject();
            if (_this._appType === historyPositionSessionObject.currentAppType &&
                _this._initializationTime !== -1 &&
                _this._initializationTime === historyPositionSessionObject.appInitializationMap[_this._appType]) {
                // Beginning of history, dont handle
                if (historyPositionSessionObject.startPosition < 2 &&
                    historyPositionSessionObject.urlList.length === 1) {
                    historyPositionSessionObject.startPosition = 0; // reset
                    historyPositionSessionObject.urlList.pop();
                    // Save data to sessionStorage
                    _this._setHistoryPositionSessionObject(historyPositionSessionObject);
                    isHandled = false;
                    _ms_odsp_utilities_lib_logging_events_Engagement_event__WEBPACK_IMPORTED_MODULE_3__["Engagement"].logData({
                        name: 'TeamsClientSPNavigationHistoryManager.ClientBackButtonClicked' +
                            (".HandledByTeams." + historyPositionSessionObject.currentAppType)
                    });
                }
                else if (!historyPositionSessionObject.isNavigationInProgress) {
                    // Wait, if previous navigation of back button click has not completed
                    // We're in middle/latest in history, handle this case and go back
                    // history.back will load the previous page in history.
                    historyPositionSessionObject.isNavigationInProgress = true;
                    if (historyPositionSessionObject.urlList.length > 0) {
                        // If for this domain this was the first page visited, we reset the start position
                        // We'll set start position with history.length value when we revisit a page in this domain
                        // Consider page visits :
                        // d1p1->d1p2->d2p1(startpos=3)->Back
                        // d1p1->d1p2->d1p3->d1p4->d2p1(startpos=4)
                        if (historyPositionSessionObject.urlList.length === 1) {
                            historyPositionSessionObject.startPosition = 0;
                        }
                        historyPositionSessionObject.urlList.pop();
                    }
                    // Save data to sessionStorage
                    _this._setHistoryPositionSessionObject(historyPositionSessionObject);
                    _ms_odsp_utilities_lib_logging_events_Engagement_event__WEBPACK_IMPORTED_MODULE_3__["Engagement"].logData({
                        name: 'TeamsClientSPNavigationHistoryManager.ClientBackButtonClicked' +
                            (".HandledBySharePoint." + historyPositionSessionObject.currentAppType)
                    });
                    // Trigger history back
                    history.back();
                }
            }
            return isHandled;
        };
        this._appType = appType;
        this._teamsSDKInitializer = _TeamsSDKInitializer__WEBPACK_IMPORTED_MODULE_1__["TeamsSDKInitializer"].getInstance();
        this._initializeHistoryPositionSessionObject(appType);
    }
    TeamsClientSPNavigationHistoryManager.prototype._getHistoryPositionSessionObject = function () {
        return JSON.parse(sessionStorage.getItem('SPTeamsHistoryPosition'));
    };
    TeamsClientSPNavigationHistoryManager.prototype._setHistoryPositionSessionObject = function (newHistoryPositionSessionObject) {
        sessionStorage.setItem('SPTeamsHistoryPosition', JSON.stringify(newHistoryPositionSessionObject));
    };
    TeamsClientSPNavigationHistoryManager.prototype._initializeHistoryPositionSessionObject = function (appType) {
        // Initialize history position in session storage
        var defaultHistoryPositionSessionObject = {
            isInitialized: true,
            startPosition: 0,
            isNavigationInProgress: false,
            appInitializationMap: {},
            currentAppType: appType,
            urlList: []
        };
        var historyPositionSessionObject = this._getHistoryPositionSessionObject();
        historyPositionSessionObject = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, defaultHistoryPositionSessionObject), historyPositionSessionObject);
        historyPositionSessionObject.currentAppType = appType;
        this._setHistoryPositionSessionObject(historyPositionSessionObject);
    };
    TeamsClientSPNavigationHistoryManager.prototype._updateHistoryPositionSessionObjectOnRegistration = function (appType) {
        var historyPositionSessionObject = this._getHistoryPositionSessionObject();
        this._initializationTime = Date.now();
        historyPositionSessionObject.appInitializationMap[appType] = this._initializationTime;
        historyPositionSessionObject.currentAppType = appType;
        historyPositionSessionObject.isInitialized = true;
        this._setHistoryPositionSessionObject(historyPositionSessionObject);
    };
    TeamsClientSPNavigationHistoryManager.prototype._updateHistoryPositionSessionObjectOnUnRegister = function (appType, historyPositionSessionObject) {
        historyPositionSessionObject.appInitializationMap[appType] = -1;
        if (historyPositionSessionObject.currentAppType === appType) {
            historyPositionSessionObject.currentAppType = '';
            historyPositionSessionObject.isInitialized = false;
            this._initializationTime = -1;
        }
        this._setHistoryPositionSessionObject(historyPositionSessionObject);
    };
    TeamsClientSPNavigationHistoryManager._windowSPTeamsBackButtonHandlerString = '_spTeamsBackButtonHandler';
    return TeamsClientSPNavigationHistoryManager;
}());

//# sourceMappingURL=TeamsClientSPNavigationHistoryManager.js.map

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

/***/ "Se0m":
/*!**************************************!*\
  !*** ./lib/utilities/CommonUtils.js ***!
  \**************************************/
/*! exports provided: CommonUtils */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonUtils", function() { return CommonUtils; });
/* harmony import */ var _microsoft_sp_page_context__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/sp-page-context */ "X+PM");
/* harmony import */ var _microsoft_sp_page_context__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_page_context__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ms/odsp-utilities-bundle */ "y88i");
/* harmony import */ var _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _EngagementLogger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./EngagementLogger */ "kNMr");




var CommonUtils = /** @class */ (function () {
    function CommonUtils() {
    }
    CommonUtils.logQosErrors = function (response, monitor) {
        response
            .text()
            .then(function (respText) {
            CommonUtils._logQosData(response, monitor, respText);
        })
            .catch(function () {
            CommonUtils._logQosData(response, monitor);
        });
    };
    CommonUtils.getFileNameExtension = function (filename) {
        var _a;
        var regexp = /(?:\.([^.]+))?$/;
        var extension = regexp.exec(filename)[1];
        return (_a = extension) === null || _a === void 0 ? void 0 : _a.toLowerCase();
    };
    CommonUtils.isGccEnvironment = function (serviceScope) {
        var _a, _b, _c;
        var pageContext = serviceScope.consume(_microsoft_sp_page_context__WEBPACK_IMPORTED_MODULE_0__["PageContext"].serviceKey);
        var farmLabel = (_c = (_b = (_a = pageContext) === null || _a === void 0 ? void 0 : _a.legacyPageContext) === null || _b === void 0 ? void 0 : _b.farmLabel) === null || _c === void 0 ? void 0 : _c.toLowerCase();
        if (farmLabel &&
            (farmLabel.indexOf('us_2_') === 0 ||
                farmLabel.indexOf('us_86_') === 0 ||
                farmLabel.indexOf('us_96_') === 0 ||
                farmLabel.indexOf('us_105_') === 0)) {
            return true;
        }
        return false;
    };
    /**
     * True if url is internal resource.
     */
    CommonUtils.isInternalResource = function (url, serviceScope) {
        var pageContext = serviceScope.consume(_microsoft_sp_page_context__WEBPACK_IMPORTED_MODULE_0__["PageContext"].serviceKey);
        var tenantInfo = CommonUtils._getTenantInfoFromPageContext(pageContext);
        // Vanity urls are saved in different places with different format in page context
        // according to whether the tenant is multi-geo or not.
        // In multi-geo tenant, vanity urls is saved in AdditionalUrls in multiGeoInfo.
        // In non multi-geo tenant, vanity urls are saved in VanityUrls.
        try {
            if (tenantInfo.isMultiGeo && tenantInfo.multiGeoInfo) {
                return tenantInfo.multiGeoInfo.some(function (geoInfo) {
                    return (CommonUtils._isSameHost(url, geoInfo.PortalUrl) ||
                        CommonUtils._isSameHost(url, geoInfo.MySiteHostUrl) ||
                        CommonUtils._isSameHosts(url, geoInfo.AdditionalUrls));
                });
            }
            else {
                // Use vanity urls combined with current Geo info in non multiGeo tenant.
                var currentGeoDomains = CommonUtils._getMySiteAndPortalDomain();
                if (CommonUtils._isSameHosts(url, currentGeoDomains)) {
                    return true;
                }
                var urlHost = CommonUtils._getHostFromUrl(url);
                if (tenantInfo.singleTenant && tenantInfo.singleTenant.SingleTenant_AdditionalVanityUrls) {
                    var vanityHosts = tenantInfo.singleTenant.SingleTenant_AdditionalVanityUrls.split(';');
                    if (vanityHosts.indexOf(urlHost) !== -1) {
                        return true;
                    }
                }
                if (tenantInfo.singleTenant &&
                    CommonUtils._isInternalResourceOfSingleTenant(tenantInfo.singleTenant, urlHost)) {
                    return true;
                }
            }
        }
        catch (error) {
            return false;
        }
        return false;
    };
    /**
     * Convert list url to listallitems.aspx if flight is enabled
     * else convert link to modern only view
     * @param url
     * @param folder
     */
    CommonUtils.transformListLink = function (url, folder, crossDomain) {
        // tslint:disable-next-line:no-string-literal
        var appType = window['teamsCustomAppType'] === 'portals' ? 'portals' : 'teamsPage';
        var transformedUrl = undefined;
        if (_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["_SPFlight"].isEnabled(1961 /* ListAllItemsInSPTeams */)) {
            var matches = url.pathname.match(/^(.*)(\/Lists\/)/);
            if (matches.length > 1) {
                var pathName = url.pathname.charAt(url.pathname.length - 1) === '/' ? url.pathname.slice(0, -1) : url.pathname;
                transformedUrl =
                    "" + url.origin + matches[1] + "/_layouts/15/listallitems.aspx?" +
                        "app=" +
                        appType +
                        ("&listUrl=" + pathName + url.search) +
                        (folder ? "&RootFolder=" + pathName : "");
            }
        }
        return CommonUtils.handleDocListLink(url, transformedUrl, crossDomain);
    };
    /**
     * Convert Doclib/list url to listallitems.aspx if flight is enabled
     * else convert link to modern only view
     * @param url
     * @param folder
     */
    CommonUtils.transformDoclibLink = function (url, folder, crossDomain, params) {
        // tslint:disable-next-line:no-string-literal
        var appType = window['teamsCustomAppType'] === 'portals' ? 'portals' : 'teamsPage';
        var transformedUrl = undefined;
        if (_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["_SPFlight"].isEnabled(1961 /* ListAllItemsInSPTeams */)) {
            var driveItemResponse = params;
            if (driveItemResponse && driveItemResponse.sharepointIds && driveItemResponse.sharepointIds.siteUrl) {
                var urlString = driveItemResponse.webUrl;
                var parsedURL = /^(\w+)\:\/\/([^\/]+)(.*)$/.exec(urlString);
                if (parsedURL) {
                    var viewid = url.searchParams.get('viewid');
                    var pathname = parsedURL[3];
                    var rootFolder = pathname;
                    if (!_ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_2__["Killswitch"].isActivated(CommonUtils.doclibCustomViewKS)) {
                        if (rootFolder.match(CommonUtils.doclibFormsRegex)) {
                            rootFolder = rootFolder.split(CommonUtils.doclibFormsRegex)[0];
                        }
                    }
                    transformedUrl =
                        driveItemResponse.sharepointIds.siteUrl + "/_layouts/15/listallitems.aspx?" +
                            "app=" +
                            appType +
                            ("&listUrl=" + pathname) +
                            (folder ? "&RootFolder=" + rootFolder : "");
                    if (!_ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_2__["Killswitch"].isActivated(CommonUtils.doclibCustomViewKS) && viewid) {
                        transformedUrl += "&viewid=" + viewid;
                    }
                }
            }
            else {
                /**
                 * This logic handles the doclibs at both site level and root level
                 * Eg. https://microsoft.sharepoint-df.com/sites/bar/Shared%20Documents/Forms/AllItems.aspx
                 * SiteLevel: https://microsoft.sharepoint-df.com/sites/bar/Shared%20Documents
                 * RootLevel: https://microsoft.sharepoint-df.com/Shared%20Documents
                 * Subsite doclibs should be handled by driveItemResponse above
                 *
                 * Custom links of type /forms/allitems.aspx?viewid=<> are assumed to be handled by
                 * the previous logic, since we do drive item api call in FilePreviewManager
                 */
                var pathName = url.pathname;
                pathName = pathName.charAt(pathName.length - 1) === '/' ? pathName.slice(0, -1) : pathName;
                var updatedPathName = undefined;
                if (pathName.match(/(\/shared%20documents)/gi)) {
                    var urlPathName = pathName.split(/shared%20documents/gi);
                    updatedPathName = urlPathName[0];
                }
                else {
                    var matches = url.pathname.match(/^(\/[^\/]+\/[^\/]+\/)/);
                    if (matches.length > 1) {
                        updatedPathName = matches[1];
                    }
                }
                var rootFolder = pathName;
                if (!_ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_2__["Killswitch"].isActivated(CommonUtils.doclibCustomViewKS)) {
                    if (rootFolder.match(CommonUtils.doclibFormsRegex)) {
                        rootFolder = rootFolder.split(CommonUtils.doclibFormsRegex)[0];
                        // In case '/forms/allitems.aspx' link is found, we expect the rootFolder to be equal to:
                        // (/sites/sitename/<optionalSubsiteName>/)DoclibName
                        // We need the part enclosed inside ().
                        // Adding because this code would also handle ../Subsite/Doclib/forms/CustomView.aspx type of links.
                        updatedPathName = rootFolder.split(/[^\/]+$/i)[0];
                    }
                }
                if (updatedPathName) {
                    transformedUrl =
                        "" + url.origin + updatedPathName + "_layouts/15/listallitems.aspx?" +
                            "app=" +
                            appType +
                            ("&listUrl=" + pathName + url.search) +
                            (folder ? "&RootFolder=" + rootFolder : "");
                }
            }
        }
        return CommonUtils.handleDocListLink(url, transformedUrl, crossDomain);
    };
    CommonUtils.handleDocListLink = function (url, transformedUrl, crossDomain) {
        if (!transformedUrl) {
            // param p=1 converts link to modern only
            transformedUrl = url.searchParams.has('p')
                ? url.href
                : url.href + (url.href.indexOf('?') === -1 ? '?' : '&') + 'p=1';
        }
        if (crossDomain) {
            if (_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["_BrowserUtilities"].isTeamsWebViewHosted()) {
                _EngagementLogger__WEBPACK_IMPORTED_MODULE_3__["EngagementLogger"].getInstance().logEvent('TeamsNavigation.Navigation.CrossDomain.Client');
                // We need to redirect cross-origin links only for Teams client,
                // for Teams browser login.microsoftonline.com cookie is already set
                transformedUrl =
                    url.origin +
                        '/_layouts/15/teamslogon.aspx?spfx=true&dest=' +
                        encodeURIComponent(decodeURIComponent(transformedUrl));
            }
            else {
                _EngagementLogger__WEBPACK_IMPORTED_MODULE_3__["EngagementLogger"].getInstance().logEvent('TeamsNavigation.Navigation.CrossDomain.Browser');
                window.location.href = url.href;
            }
        }
        return transformedUrl;
    };
    /**
     * Convenience method to open urls in new window
     * @param url
     */
    CommonUtils.openInNewWindow = function (url) {
        try {
            _EngagementLogger__WEBPACK_IMPORTED_MODULE_3__["EngagementLogger"].getInstance().logEvent('TeamsNavigation.WindowOpen');
            window.open(url.href);
        }
        catch (error) {
            _EngagementLogger__WEBPACK_IMPORTED_MODULE_3__["EngagementLogger"].getInstance().logEvent('TeamsNavigation.WindowOpen.exception.' + error.message);
        }
    };
    CommonUtils._logQosData = function (response, monitor, respText) {
        if (respText === void 0) { respText = ''; }
        var extraData = {};
        extraData.statusCode = response.status.toString();
        extraData.statusMessage = response.statusMessage;
        extraData.errorBody = respText;
        if ((response.status >= 200 && response.status < 299) || // Successful responses (200–299)
            (response.status >= 400 && response.status < 499)) {
            // Client errors (400–499)
            monitor.writeExpectedFailure('API Failed', new Error(response.statusText), extraData);
        }
        else {
            monitor.writeUnexpectedFailure('API Failed', new Error(response.statusText), extraData);
        }
    };
    CommonUtils._getTenantInfoFromPageContext = function (pageContext) {
        return {
            isMultiGeo: pageContext.legacyPageContext.isMultiGeoTenant,
            multiGeoInfo: pageContext.legacyPageContext.multiGeoInfo,
            singleTenant: pageContext.legacyPageContext.vanityUrls
        };
    };
    CommonUtils._isSameHost = function (url, targetUrl) {
        return CommonUtils._getHostFromUrl(url) === CommonUtils._getHostFromUrl(targetUrl);
    };
    CommonUtils._isSameHosts = function (url, targetUrls) {
        return targetUrls && targetUrls.some(function (targetUrl) { return CommonUtils._isSameHost(url, targetUrl); });
    };
    CommonUtils._getHostFromUrl = function (url) {
        return new _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_2__["Uri"]((url || '').trim()).getHost().toLowerCase();
    };
    CommonUtils._getMySiteAndPortalDomain = function () {
        var mySiteSuffix = '-my';
        var currentDomain = window.location.protocol + "//" + window.location.hostname;
        var tenantName = window.location.hostname.substr(0, window.location.hostname.indexOf('.'));
        if (tenantName.indexOf(mySiteSuffix, tenantName.length - mySiteSuffix.length) === -1) {
            var mySiteHostDomain = currentDomain
                .toString()
                .replace(tenantName, tenantName + mySiteSuffix);
            return [mySiteHostDomain, currentDomain];
        }
        else {
            var portalDomain = currentDomain
                .toString()
                .replace(tenantName, tenantName.substring(0, tenantName.length - mySiteSuffix.length));
            return [currentDomain, portalDomain];
        }
    };
    CommonUtils._isInternalResourceOfSingleTenant = function (singleTenant, urlHost) {
        return ((singleTenant.SingleTenant_OneDriveUrl && singleTenant.SingleTenant_OneDriveUrl === urlHost) ||
            (singleTenant.SingleTenant_PortalUrl && singleTenant.SingleTenant_PortalUrl === urlHost) ||
            (singleTenant.SingleTenant_TeamSitesUrl && singleTenant.SingleTenant_TeamSitesUrl === urlHost));
    };
    CommonUtils.filePreviewKS = 'ab410c99-1197-49a8-8061-736bffa1be94' /* file preview gcc */;
    CommonUtils.pdfPreviewKS = '6358cf91-067c-4e55-9bdd-51e29e3a725c' /* pdf web or webdavurl preview */;
    /* Supporting custom doclib views via viewid */
    CommonUtils.doclibCustomViewKS = '42d01b58-cefd-41a8-b540-3b4f1f253cf5';
    CommonUtils.httpProtocolChangeKS = 'c62ed05c-6d46-448f-9317-db84f9f6537a' /* http Protocol Change */;
    CommonUtils.doclibFormsRegex = /\/forms\/[^\/]*\.aspx$/i;
    return CommonUtils;
}());



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

/***/ "X+PM":
/*!*********************************************!*\
  !*** external "@microsoft/sp-page-context" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_X_PM__;

/***/ }),

/***/ "Y74H":
/*!*************************************!*\
  !*** ./lib/utilities/TeamsUtils.js ***!
  \*************************************/
/*! exports provided: TeamsUtils */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamsUtils", function() { return TeamsUtils; });
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__);

var TeamsUtils = /** @class */ (function () {
    function TeamsUtils() {
    }
    /* tslint:disable-next-line:no-any */
    TeamsUtils.setTeamsStageViewIfApplicable = function (teamsSDK) {
        if (_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPFlight"].isEnabled(1485 /* Teams Stage-View Experience */)) {
            /** Hooking up a QSP to test stageView experience locally. */
            if (/[?&]env=stageView/.test(location.search)) {
                // tslint:disable-next-line:no-string-literal
                window['TeamsStageViewHosted'] = 'stageView';
                return;
            }
            // tslint:disable-next-line:no-string-literal
            if (teamsSDK && window['TeamsStageViewHosted'] === undefined) {
                /* tslint:disable-next-line:no-any */
                teamsSDK.getContext(function (context) {
                    if (context.frameContext === 'stage') {
                        // tslint:disable-next-line:no-string-literal
                        window['TeamsStageViewHosted'] = 'stageView';
                    }
                });
            }
        }
    };
    return TeamsUtils;
}());



/***/ }),

/***/ "bmBl":
/*!*******************************!*\
  !*** ./lib/SPTeamsWrapper.js ***!
  \*******************************/
/*! exports provided: SPTeamsWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SPTeamsWrapper", function() { return SPTeamsWrapper; });
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ms_odsp_teams_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ms/odsp-teams-shared */ "I0DE");
/* harmony import */ var _DeferredSPTeamsHostedApplication__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DeferredSPTeamsHostedApplication */ "uru5");
/* harmony import */ var _utilities_EngagementLogger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utilities/EngagementLogger */ "kNMr");
/* harmony import */ var _utilities_TeamsUtils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utilities/TeamsUtils */ "Y74H");
/* harmony import */ var _utilities_CommonUtils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utilities/CommonUtils */ "Se0m");






/**
 * The class which gets added to sp-component-utilities bundle.
 * Contains only wrapper methods with common functionalities
 * which are invoked from various other apps/libraries.
 * Note: Please keep minimum/necessary code here
 */
var SPTeamsWrapper = /** @class */ (function () {
    function SPTeamsWrapper() {
    }
    SPTeamsWrapper.onBeforePageLoad = function (serviceScope, appType) {
        var hostedApplicationInstance = _ms_odsp_teams_shared__WEBPACK_IMPORTED_MODULE_1__["HostedApplicationFactory"].getHostedApplicationInstance(appType);
        hostedApplicationInstance.onBeforePageLoad(serviceScope, appType);
        var teamsInitializer = _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPFlight"].isEnabled(1485 /* Teams Stage-View Experience */)
            ? this.getTeamsSDKInitializer()
            : undefined;
        if (teamsInitializer) {
            _utilities_TeamsUtils__WEBPACK_IMPORTED_MODULE_4__["TeamsUtils"].setTeamsStageViewIfApplicable(teamsInitializer.getTeamsSDK());
        }
    };
    SPTeamsWrapper.onPageLoaded = function (appType, url) {
        var hostedApplicationInstance = _ms_odsp_teams_shared__WEBPACK_IMPORTED_MODULE_1__["HostedApplicationFactory"].getHostedApplicationInstance(appType);
        hostedApplicationInstance.onPageLoaded(appType, url);
    };
    SPTeamsWrapper.onBeforePageDispose = function (appType) {
        if (_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_BrowserUtilities"].isTeamsWebViewHosted()) {
            var hostedApplicationInstance = _ms_odsp_teams_shared__WEBPACK_IMPORTED_MODULE_1__["HostedApplicationFactory"].getHostedApplicationInstance(appType);
            hostedApplicationInstance.onBeforePageDispose(appType);
        }
    };
    SPTeamsWrapper.pageOpenedInTeamsApp = function () {
        if (_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_BrowserUtilities"].isTeamsHosted()) {
            var hostedApplicationInstance = _ms_odsp_teams_shared__WEBPACK_IMPORTED_MODULE_1__["HostedApplicationFactory"].getHostedApplicationInstance();
            return hostedApplicationInstance.pageOpenedInTeamsApp();
        }
    };
    SPTeamsWrapper.getTeamsSDKInitializer = function () {
        var hostedApplicationInstance = _ms_odsp_teams_shared__WEBPACK_IMPORTED_MODULE_1__["HostedApplicationFactory"].getHostedApplicationInstance();
        return hostedApplicationInstance.getTeamsSDKInitializer();
    };
    SPTeamsWrapper.getEngagementLoggerInstance = function () {
        return _utilities_EngagementLogger__WEBPACK_IMPORTED_MODULE_3__["EngagementLogger"].getInstance();
    };
    SPTeamsWrapper.handleLinkNavigation = function (url, serviceScope, history, state) {
        _DeferredSPTeamsHostedApplication__WEBPACK_IMPORTED_MODULE_2__["DeferredSPTeamsHostedApplication"].getSPTeamsHostedApplicationInstance()
            .then(function (spTeamsHostedApplicationInstance) {
            spTeamsHostedApplicationInstance.handleLinkNavigation(url, serviceScope, history, state);
        })
            .catch(function (error) {
            // Error occurred, open link in browser.
            _utilities_CommonUtils__WEBPACK_IMPORTED_MODULE_5__["CommonUtils"].openInNewWindow(url);
        });
    };
    SPTeamsWrapper.openOneDriveItemInFilePreview = function (previewItem) {
        var hostedApplicationInstance = _ms_odsp_teams_shared__WEBPACK_IMPORTED_MODULE_1__["HostedApplicationFactory"].getHostedApplicationInstance();
        hostedApplicationInstance.openOneDriveItemInFilePreview(previewItem);
    };
    return SPTeamsWrapper;
}());



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

/***/ "foyl":
/*!***************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-teams-shared@1.2.9_73edbda55c5e419b40ebf62a69b39c66/node_modules/@ms/odsp-teams-shared/lib/utilities/TeamsUtilities.js ***!
  \***************************************************************************************************************************************************************************************/
/*! exports provided: TeamsUtilities */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamsUtilities", function() { return TeamsUtilities; });
/* harmony import */ var _ms_odsp_utilities_lib_killswitch_Killswitch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ms/odsp-utilities/lib/killswitch/Killswitch */ "QUgr");
/* harmony import */ var _ms_odsp_utilities_lib_features_Features__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ms/odsp-utilities/lib/features/Features */ "8G1T");


/**
 * @copyright Microsoft Corporation. All rights reserved.
 *
 * @file TeamsUtilities contains common utilities for browser related operations.
 */
/**
 * TeamsUtilities contains common utilities for browser related operations.
 * @internal
 */
var TeamsUtilities = /** @class */ (function () {
    function TeamsUtilities() {
    }
    TeamsUtilities.isTeamsWebViewHosted = function () {
        if (typeof TeamsUtilities._isTeamsWebView === 'undefined') {
            var ua = navigator.userAgent;
            TeamsUtilities._isTeamsWebView =
                /* Electron WebView (scoped to Microsoft Teams for now) */
                // tslint:disable-next-line:max-line-length
                /Teams\/((?:(\d+)\.)?(?:(\d+)\.)?(?:(\d+)\.\d+)).* Electron\/((?:(\d+)\.)?(?:(\d+)\.)?(?:(\d+)\.\d+))/.test(ua) || /[?&]env=TeamsWebView/.test(location.search);
        }
        return TeamsUtilities._isTeamsWebView;
    };
    /**
     * When SharePoint is hosted in Teams, it can either be in :
     *    1. Teams Desktop Client: Electron Webview
     *    2. Teams in Browser: Iframe
     *
     * Desktop Client is identifiable via the user-agent.
     * However, for Teams in Browser, since we cannot leverage user-agent,
     * we'll be using window.name property to get the host iframe's name,
     * which when equal to "embedded-page-container" lets us know that
     * SharePoint is currently running in Teams in Browser.
     */
    TeamsUtilities.isTeamsBrowserHosted = function () {
        if (typeof TeamsUtilities._isTeamsBrowser === 'undefined') {
            TeamsUtilities._isTeamsBrowser = false;
            try {
                TeamsUtilities._isTeamsBrowser = window.name === TeamsUtilities._teamsBrowserWindowName;
            }
            catch (e) {
                /* no-op */
            }
        }
        return TeamsUtilities._isTeamsBrowser;
    };
    /**
     * Return true, if SharePoint is hosted in Teams, either Webview or Browser
     */
    TeamsUtilities.isTeamsHosted = function () {
        if (_ms_odsp_utilities_lib_killswitch_Killswitch__WEBPACK_IMPORTED_MODULE_0__["Killswitch"].isActivated('0100eb79-e269-4683-b118-81ca4eaaa794', '10/16/2019', 'Check SharePoint hosted in Teams in Browser')) {
            return TeamsUtilities.isTeamsWebViewHosted();
        }
        return TeamsUtilities.isTeamsWebViewHosted() || TeamsUtilities.isTeamsBrowserHosted();
    };
    /**
     * Retuen true, if the file is opened from Teams custom apps
     */
    TeamsUtilities.isFileOpenInTeamsCustomApp = function () {
        if (
        // tslint:disable-next-line:no-string-literal
        window['teamsCustomAppType'] &&
            !(_ms_odsp_utilities_lib_features_Features__WEBPACK_IMPORTED_MODULE_1__["default"].isFeatureEnabled(this.TeamsFileOpenInBrowser) &&
                // tslint:disable-next-line:no-string-literal
                window['teamsCustomAppType'] === 'portals')) {
            return true;
        }
        return false;
    };
    /**
     * Returns true if SharePoint site is embedded within SharePoint which is hosted in Teams client.
     * This check is not required for Teams browser because, this api needs to be used along with isTeamsHosted,
     * which will return false for browser anyway
     */
    TeamsUtilities.isEmbeddedInTeamsClient = function () {
        if (typeof TeamsUtilities._isEmbeddedInTeamsClient === 'undefined') {
            TeamsUtilities._isEmbeddedInTeamsClient = false;
            if (TeamsUtilities.isTeamsWebViewHosted()) {
                try {
                    TeamsUtilities._isEmbeddedInTeamsClient = window.name !== TeamsUtilities._teamsClientWindowName;
                }
                catch (e) {
                    /* no-op */
                }
            }
        }
        return TeamsUtilities._isEmbeddedInTeamsClient;
    };
    TeamsUtilities._teamsBrowserWindowName = 'embedded-page-container';
    TeamsUtilities._teamsClientWindowName = 'extension-tab-frame';
    TeamsUtilities.TeamsFileOpenInBrowser = { ODB: 941 };
    /**
     * When SharePoint is hosted in Teams Browser,
     * add SPTeamsWeb user agent string
     */
    TeamsUtilities.setSPTeamsUserAgent = function () {
        if (TeamsUtilities.isTeamsBrowserHosted()) {
            var oldUserAgent_1 = navigator.userAgent;
            if (oldUserAgent_1.lastIndexOf('SPTeamsWeb') === -1) {
                Object.defineProperty(navigator, 'userAgent', {
                    get: function () {
                        if (oldUserAgent_1.lastIndexOf('SPTeamsWeb') === -1) {
                            var newUserAgent = oldUserAgent_1 + ' SPTeamsWeb';
                            return newUserAgent;
                        }
                        else {
                            return oldUserAgent_1;
                        }
                    }
                });
            }
        }
    };
    return TeamsUtilities;
}());

//# sourceMappingURL=TeamsUtilities.js.map

/***/ }),

/***/ "j2rM":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-teams-shared@1.2.9_73edbda55c5e419b40ebf62a69b39c66/node_modules/@ms/odsp-teams-shared/lib/teams/telemetry/TeamsLogonTelemetry.js ***!
  \**************************************************************************************************************************************************************************************************/
/*! exports provided: TeamsLogonTelemetry */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamsLogonTelemetry", function() { return TeamsLogonTelemetry; });
/* harmony import */ var _ms_odsp_utilities_lib_logging_rumone_RUMOneLogger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ms/odsp-utilities/lib/logging/rumone/RUMOneLogger */ "UKDt");
/* harmony import */ var _ms_odsp_utilities_lib_logging_events_Engagement_event__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ms/odsp-utilities/lib/logging/events/Engagement.event */ "cDPE");


var TeamsLogonTelemetryKeys;
(function (TeamsLogonTelemetryKeys) {
    TeamsLogonTelemetryKeys["TeamsLogonStart"] = "TeamsLogonStart";
    TeamsLogonTelemetryKeys["TeamsLogonSuccess"] = "TeamsLogonSuccess";
    TeamsLogonTelemetryKeys["TeamsLogonEnd"] = "TeamsLogonEnd";
    TeamsLogonTelemetryKeys["TeamsLogonPostRedirectTime"] = "TeamsLogonPostRedirectTime";
    TeamsLogonTelemetryKeys["TeamsLogonPreviouslyAuthenticated"] = "TeamsLogonPreviouslyAuthenticated";
    TeamsLogonTelemetryKeys["TeamsLogonFailure"] = "TeamsLogonFailure";
})(TeamsLogonTelemetryKeys || (TeamsLogonTelemetryKeys = {}));
var TeamsLogonTelemetry = /** @class */ (function () {
    function TeamsLogonTelemetry() {
    }
    TeamsLogonTelemetry.updateTeamsLogonTelemetry = function () {
        var teamsLogonStartTime = +sessionStorage.getItem(TeamsLogonTelemetryKeys.TeamsLogonStart);
        var teamsLogonSuccessTime = +sessionStorage.getItem(TeamsLogonTelemetryKeys.TeamsLogonSuccess);
        var teamsLogonFailure = localStorage.getItem(TeamsLogonTelemetryKeys.TeamsLogonFailure);
        // cleanup
        TeamsLogonTelemetry._cleanup();
        // If all three values are 0, previously authenticated (server redirect, full page load)
        if (!teamsLogonStartTime && !teamsLogonSuccessTime && !teamsLogonFailure) {
            TeamsLogonTelemetry._logPreviouslyAuthenticatedScenario();
            return;
        }
        try {
            var teamsLogonEndTime = teamsLogonSuccessTime - teamsLogonStartTime;
            var teamsLogonPostRedirectTime = TeamsLogonTelemetry._getRedirectTime();
            var rumOne = _ms_odsp_utilities_lib_logging_rumone_RUMOneLogger__WEBPACK_IMPORTED_MODULE_0__["RUMOneLogger"].getRUMOneLogger();
            if (rumOne) {
                rumOne.setPerformanceDataPropertyValue(TeamsLogonTelemetryKeys.TeamsLogonEnd, teamsLogonEndTime);
                if (teamsLogonPostRedirectTime) {
                    rumOne.setPerformanceDataPropertyValue(TeamsLogonTelemetryKeys.TeamsLogonPostRedirectTime, teamsLogonPostRedirectTime);
                }
                rumOne.setPerformanceDataPropertyValue(TeamsLogonTelemetryKeys.TeamsLogonPreviouslyAuthenticated, false);
                if (teamsLogonFailure) {
                    var teamsLogOnData = 'TeamsLogonTelemetry.TeamsLogonFailure_' + teamsLogonFailure;
                    _ms_odsp_utilities_lib_logging_events_Engagement_event__WEBPACK_IMPORTED_MODULE_1__["default"].logData({ name: teamsLogOnData });
                    rumOne.setPerformanceDataPropertyValue(TeamsLogonTelemetryKeys.TeamsLogonFailure, teamsLogonFailure);
                }
            }
        }
        catch (err) {
            /* no-op */
        }
    };
    TeamsLogonTelemetry._logPreviouslyAuthenticatedScenario = function () {
        var rumOne = _ms_odsp_utilities_lib_logging_rumone_RUMOneLogger__WEBPACK_IMPORTED_MODULE_0__["RUMOneLogger"].getRUMOneLogger();
        if (rumOne) {
            var teamsLogonPostRedirectTime = TeamsLogonTelemetry._getRedirectTime();
            if (teamsLogonPostRedirectTime) {
                rumOne.setPerformanceDataPropertyValue(TeamsLogonTelemetryKeys.TeamsLogonPostRedirectTime, teamsLogonPostRedirectTime);
            }
            rumOne.setPerformanceDataPropertyValue(TeamsLogonTelemetryKeys.TeamsLogonPreviouslyAuthenticated, true);
        }
    };
    TeamsLogonTelemetry._getRedirectTime = function () {
        var redirectTime = 0;
        if (window.performance && window.performance.getEntriesByType) {
            // Collecting data to get redirect time
            var perfNavigationTiming = performance.getEntriesByType('navigation');
            if (perfNavigationTiming.length) {
                redirectTime = perfNavigationTiming[0].redirectEnd - perfNavigationTiming[0].redirectStart;
            }
            return redirectTime;
        }
    };
    TeamsLogonTelemetry._cleanup = function () {
        // Remove entries from sessionStorage/localStorage
        sessionStorage.removeItem(TeamsLogonTelemetryKeys.TeamsLogonStart);
        sessionStorage.removeItem(TeamsLogonTelemetryKeys.TeamsLogonSuccess);
        localStorage.removeItem(TeamsLogonTelemetryKeys.TeamsLogonFailure);
    };
    return TeamsLogonTelemetry;
}());

//# sourceMappingURL=TeamsLogonTelemetry.js.map

/***/ }),

/***/ "jOy4":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-teams-shared@1.2.9_73edbda55c5e419b40ebf62a69b39c66/node_modules/@ms/odsp-teams-shared/lib/teams/HostedApplicationFactory.js ***!
  \*********************************************************************************************************************************************************************************************/
/*! exports provided: HostedApplicationFactory, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HostedApplicationFactory", function() { return HostedApplicationFactory; });
/* harmony import */ var _SharedSPTeamsHostedApplication__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SharedSPTeamsHostedApplication */ "EONX");

var HostedApplicationFactory = /** @class */ (function () {
    function HostedApplicationFactory() {
    }
    HostedApplicationFactory.getHostedApplicationInstance = function (appType) {
        if (!this._hostedApplicationInstance) {
            this._hostedApplicationInstance = new _SharedSPTeamsHostedApplication__WEBPACK_IMPORTED_MODULE_0__["SharedSPTeamsHostedApplication"](appType);
        }
        return this._hostedApplicationInstance;
    };
    HostedApplicationFactory._hostedApplicationInstance = undefined;
    return HostedApplicationFactory;
}());

/* harmony default export */ __webpack_exports__["default"] = (HostedApplicationFactory);
//# sourceMappingURL=HostedApplicationFactory.js.map

/***/ }),

/***/ "kNMr":
/*!*******************************************!*\
  !*** ./lib/utilities/EngagementLogger.js ***!
  \*******************************************/
/*! exports provided: EngagementLogger */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EngagementLogger", function() { return EngagementLogger; });
/* harmony import */ var _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ms/sp-telemetry */ "2q6Q");
/* harmony import */ var _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ms_odsp_teams_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ms/odsp-teams-shared */ "I0DE");


var EngagementLogger = /** @class */ (function () {
    function EngagementLogger() {
        this._teamsContextPromise = undefined;
    }
    EngagementLogger.getInstance = function () {
        return EngagementLogger._INSTANCE;
    };
    EngagementLogger.prototype.logEvent = function (tagName) {
        this._getTeamsContext()
            .then(function (teamsContext) {
            var _a, _b;
            var engagementData = {
                name: tagName,
                extraData: {
                    // Format of TeamId and ChannelId is guid@thread.skype eg. 19:09e02515e4bf42b6888999689185fc52@thread.skype
                    // this format is quarantined by Cosmos.
                    // Hence logging only the guid for these parameters
                    TeamId: (_a = teamsContext.teamId) === null || _a === void 0 ? void 0 : _a.split('@')[0],
                    ChannelId: (_b = teamsContext.channelId) === null || _b === void 0 ? void 0 : _b.split('@')[0],
                    UserId: teamsContext.userObjectId
                },
                usageType: 'Click',
                isIntentional: true
            };
            _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_0__["_EngagementLogger"].log(engagementData);
        })
            .catch();
    };
    EngagementLogger.prototype._getTeamsContext = function () {
        if (!this._teamsContextPromise) {
            this._teamsContextPromise = new Promise(function (resolve, reject) {
                _ms_odsp_teams_shared__WEBPACK_IMPORTED_MODULE_1__["TeamsSDKInitializer"].getInstance()
                    .getTeamsSDK()
                    .getContext(function (context) {
                    resolve(context);
                });
            });
        }
        return this._teamsContextPromise;
    };
    EngagementLogger._INSTANCE = new EngagementLogger();
    return EngagementLogger;
}());



/***/ }),

/***/ "l9+N":
/*!**************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-teams-shared@1.2.9_73edbda55c5e419b40ebf62a69b39c66/node_modules/@ms/odsp-teams-shared/lib/teams/index.js ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: SharedSPTeamsHostedApplication, HostedApplicationFactory, TeamsClientSPNavigationHistoryManager, TeamsSDKInitializer, TeamsLogonTelemetry */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SharedSPTeamsHostedApplication__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SharedSPTeamsHostedApplication */ "EONX");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SharedSPTeamsHostedApplication", function() { return _SharedSPTeamsHostedApplication__WEBPACK_IMPORTED_MODULE_0__["SharedSPTeamsHostedApplication"]; });

/* harmony import */ var _HostedApplicationFactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HostedApplicationFactory */ "jOy4");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HostedApplicationFactory", function() { return _HostedApplicationFactory__WEBPACK_IMPORTED_MODULE_1__["HostedApplicationFactory"]; });

/* harmony import */ var _TeamsClientSPNavigationHistoryManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TeamsClientSPNavigationHistoryManager */ "PwpH");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TeamsClientSPNavigationHistoryManager", function() { return _TeamsClientSPNavigationHistoryManager__WEBPACK_IMPORTED_MODULE_2__["TeamsClientSPNavigationHistoryManager"]; });

/* harmony import */ var _TeamsSDKInitializer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TeamsSDKInitializer */ "KIhc");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TeamsSDKInitializer", function() { return _TeamsSDKInitializer__WEBPACK_IMPORTED_MODULE_3__["TeamsSDKInitializer"]; });

/* harmony import */ var _telemetry_TeamsLogonTelemetry__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./telemetry/TeamsLogonTelemetry */ "j2rM");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TeamsLogonTelemetry", function() { return _telemetry_TeamsLogonTelemetry__WEBPACK_IMPORTED_MODULE_4__["TeamsLogonTelemetry"]; });






//# sourceMappingURL=index.js.map

/***/ }),

/***/ "lmjA":
/*!*****************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-utilities@29.7.9_5d977624104b06c7bcaa2de974ff51f1/node_modules/@ms/odsp-utilities/lib/logging/ErrorHelper.js ***!
  \*****************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ms/odsp-core-bundle */ "K9kD");
/* harmony import */ var _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__["OdspErrorHelper"]; });

// Loading @ms/odsp-utilities/./lib/logging/ErrorHelper.js



/***/ }),

/***/ "mwqp":
/*!**********************!*\
  !*** ./lib/index.js ***!
  \**********************/
/*! exports provided: SPTeamsWrapper, TeamsUtils, CommonUtils */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SPTeamsWrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SPTeamsWrapper */ "bmBl");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SPTeamsWrapper", function() { return _SPTeamsWrapper__WEBPACK_IMPORTED_MODULE_0__["SPTeamsWrapper"]; });

/* harmony import */ var _utilities_TeamsUtils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utilities/TeamsUtils */ "Y74H");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TeamsUtils", function() { return _utilities_TeamsUtils__WEBPACK_IMPORTED_MODULE_1__["TeamsUtils"]; });

/* harmony import */ var _utilities_CommonUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utilities/CommonUtils */ "Se0m");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CommonUtils", function() { return _utilities_CommonUtils__WEBPACK_IMPORTED_MODULE_2__["CommonUtils"]; });

/**
 * SharePoint experiences in Teams
 *
 * @packagedocumentation
 */
/**
 * Gets initialized when SharePoint is hosted in Teams
 */
 // tslint:disable-line:export-name

 // tslint:disable-line:export-name


/***/ }),

/***/ "uru5":
/*!*************************************************!*\
  !*** ./lib/DeferredSPTeamsHostedApplication.js ***!
  \*************************************************/
/*! exports provided: DeferredSPTeamsHostedApplication */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeferredSPTeamsHostedApplication", function() { return DeferredSPTeamsHostedApplication; });
/**
 * Defer load SPTeamsHostedApplication
 */
var DeferredSPTeamsHostedApplication = /** @class */ (function () {
    function DeferredSPTeamsHostedApplication() {
    }
    DeferredSPTeamsHostedApplication.getSPTeamsHostedApplicationInstance = function () {
        if (!DeferredSPTeamsHostedApplication._spTeamsHostedApplicationInstance) {
            return __webpack_require__.e(/*! import() | sp-teams-lib-dep */ "sp-teams-lib-dep").then(__webpack_require__.bind(null, /*! ./SPTeamsHostedApplication */ "4YQA")).then(function (module) {
                DeferredSPTeamsHostedApplication._spTeamsHostedApplicationInstance = new module.default();
                return DeferredSPTeamsHostedApplication._spTeamsHostedApplicationInstance;
            });
        }
        else {
            return Promise.resolve(DeferredSPTeamsHostedApplication._spTeamsHostedApplicationInstance);
        }
    };
    DeferredSPTeamsHostedApplication._spTeamsHostedApplicationInstance = undefined;
    return DeferredSPTeamsHostedApplication;
}());



/***/ }),

/***/ "y88i":
/*!********************************************!*\
  !*** external "@ms/odsp-utilities-bundle" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_y88i__;

/***/ })

/******/ })});;
//# sourceMappingURL=sp-teams-lib_none.js.map