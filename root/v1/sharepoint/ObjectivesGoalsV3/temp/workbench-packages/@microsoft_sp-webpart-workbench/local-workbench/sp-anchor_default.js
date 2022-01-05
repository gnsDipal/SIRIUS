define("bdb0f5dd-3bb4-4b93-b12a-71aa9e20bb09_0.5.183", ["tslib","@microsoft/office-ui-fabric-react-bundle","@microsoft/sp-core-library","react","@microsoft/load-themed-styles","@microsoft/sp-diagnostics","@ms/odsp-utilities-bundle"], function(__WEBPACK_EXTERNAL_MODULE__17wl__, __WEBPACK_EXTERNAL_MODULE_KL1q__, __WEBPACK_EXTERNAL_MODULE_UWqr__, __WEBPACK_EXTERNAL_MODULE_cDcd__, __WEBPACK_EXTERNAL_MODULE_jOlS__, __WEBPACK_EXTERNAL_MODULE_ut3N__, __WEBPACK_EXTERNAL_MODULE_y88i__) { return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "mwqp");
/******/ })
/************************************************************************/
/******/ ({

/***/ "+7YS":
/*!**************************************************!*\
  !*** ./lib/anchorZone/AnchorZone.module.scss.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* tslint:disable */
__webpack_require__(/*! ./AnchorZone.module.css */ "T/MW");
var styles = {
    anchorLink: 'a_a_1310c973',
    focusBorderFix: 'b_a_1310c973',
    anchorIcon: 'c_a_1310c973'
};
/* harmony default export */ __webpack_exports__["default"] = (styles);
/* tslint:enable */ 


/***/ }),

/***/ "+8VW":
/*!********************************************!*\
  !*** ./lib/anchorService/AnchorService.js ***!
  \********************************************/
/*! exports provided: AnchorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnchorService", function() { return AnchorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @microsoft/sp-diagnostics */ "ut3N");
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__);
// Copyright (c) Microsoft. All rights reserved.



var AnchorService = /** @class */ (function () {
    function AnchorService() {
        var _this = this;
        this._componentIdToAnchorDataMap = new Map();
        this._anchorIdToAnchorDataMap = new Map();
        /**
         * Register anchors of a component with the anchor service.
         *
         * @param uniqueId - A unique id among the page identifying which component is requesting anchors
         * @param anchorList - The list of anchors in the component
         */
        this.register = function (uniqueId, anchorList) {
            _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["Validate"].isNonemptyString(uniqueId, 'uniqueId');
            _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["Validate"].isNotNullOrUndefined(anchorList, 'anchorList');
            _this._componentIdToAnchorDataMap.set(uniqueId, anchorList.map(function (anchorData) { return (Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, anchorData), { anchorId: undefined })); }));
            _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__["_TraceLogger"].logVerbose(AnchorService._logSource, "Component '" + uniqueId + "' registered with " + anchorList.length + " anchors");
        };
        /**
         * Delete a component's anchors from the Anchor Service.
         *
         * @param uniqueId - The same id provided during registration
         */
        this.unregister = function (uniqueId) {
            var anchorDataList = _this._componentIdToAnchorDataMap.get(uniqueId);
            if (!anchorDataList) {
                _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__["_TraceLogger"].logError(AnchorService._logSource, new Error("Trying to unregister a non-exists component '" + uniqueId + "'"));
                return;
            }
            else {
                anchorDataList.forEach(function (anchorData) {
                    if (anchorData.anchorId) {
                        if (anchorData.onDisposeAnchorId) {
                            anchorData.onDisposeAnchorId(anchorData.anchorTargetElement, anchorData.anchorId);
                        }
                        _this._anchorIdToAnchorDataMap.delete(anchorData.anchorId);
                    }
                });
                _this._componentIdToAnchorDataMap.delete(uniqueId);
                _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__["_TraceLogger"].logVerbose(AnchorService._logSource, "Successfully unregistered component '" + uniqueId + "'");
            }
        };
        /**
         * Notify the Anchor Service that all the anchors in the page have finished their registration.
         */
        this.finishRegistration = function () {
            _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__["_TraceLogger"].logVerbose(AnchorService._logSource, 'finishRegistration invoked');
            var anchorList = [];
            _this._componentIdToAnchorDataMap.forEach(function (anchorData) { return (anchorList = anchorList.concat(anchorData)); });
            anchorList.sort(AnchorService._compareAnchorLocation);
            _this._anchorIdToAnchorDataMap.clear();
            var anchorIdIndexMap = new Map();
            var publicAnchorDataList = anchorList.map(function (currAnchor) {
                var anchorId = AnchorService.sanitizeAnchorId(currAnchor.suggestedAnchorId);
                if (!anchorId) {
                    // If suggestedAnchorId only contains special characters
                    anchorId = AnchorService.DEFAULT_ANCHOR_NAME;
                }
                anchorId = _this._handleCollision(anchorId, anchorIdIndexMap);
                // The reference to all the IInternalAnchorData will be preserved during array flatten
                currAnchor.anchorId = anchorId;
                _this._anchorIdToAnchorDataMap.set(anchorId, currAnchor);
                if (currAnchor.onReceiveAnchorId) {
                    currAnchor.onReceiveAnchorId(currAnchor.anchorTargetElement, anchorId);
                }
                _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__["_TraceLogger"].logVerbose(AnchorService._logSource, "Anchor ID '" + anchorId + "' allocated");
                return {
                    anchorText: currAnchor.suggestedAnchorId,
                    anchoredElementTagName: currAnchor.anchorTargetElement.tagName,
                    anchorId: anchorId
                };
            });
            var eventArgs = {
                action: 'AnchorsUpdated',
                sortedAnchors: publicAnchorDataList
            };
            _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["_SPEventManager"].instance.raiseStickyEvent('anchorEvent', eventArgs);
        };
    }
    /**
     * Sanitize a suggested anchor id for use in the URL fragment identifier.
     *
     * @param text - The input text to clean
     */
    AnchorService.sanitizeAnchorId = function (text) {
        var sanitizedAnchorId = text
            ? text
                .trim()
                .toLowerCase()
                .replace(AnchorService._unsafeCharacters, '-')
                .replace(/-{2,}/g, '-') // Replace two or more consecutive '-' with only one '-'
                .replace(/^-+|-+$/g, '') // Trim '-' at the start and the end
                .substring(0, AnchorService.MAX_ID_LENGTH)
            : '';
        return sanitizedAnchorId;
    };
    /**
     * Compare anchors according to their order in the DOM tree.
     */
    AnchorService._compareAnchorLocation = function (a, b) {
        /* tslint:disable-next-line:no-bitwise max-line-length */
        return a.anchorTargetElement.compareDocumentPosition(b.anchorTargetElement) &
            Node.DOCUMENT_POSITION_FOLLOWING
            ? -1
            : 1;
    };
    /**
     * Get the HTMLElement that an anchor ID points to.
     */
    AnchorService.prototype.getElementByAnchorId = function (anchorId) {
        var anchor = this._anchorIdToAnchorDataMap.get(anchorId);
        return anchor && anchor.anchorTargetElement;
    };
    /**
     * Scroll target anchor into view.
     * @param anchorId the anchorId to be scrolled.
     * @returns true if succeeded to scroll, otherwise false.
     */
    AnchorService.prototype.scrollTo = function (anchorId) {
        var anchor = this._anchorIdToAnchorDataMap.get(anchorId);
        if (anchor) {
            anchor.anchorTargetElement.scrollIntoView();
            return true;
        }
        return false;
    };
    AnchorService.prototype._handleCollision = function (id, indexMap) {
        // Check whether we have encounter the same sanitized id before, if so,
        // add a numbering suffix to it according to their order in the DOM tree
        var result = id;
        var currentIndex = 0;
        while (indexMap.has(result)) {
            id = result;
            currentIndex = indexMap.get(id) || 0;
            result = id + '-' + currentIndex;
        }
        indexMap.set(id, currentIndex + 1);
        indexMap.set(result, 1);
        return result;
    };
    AnchorService._logSource = _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__["_LogSource"].create('AnchorService');
    AnchorService._unsafeCharacters = /[`"'<>#%{}|\\^~\/\[\];?:@=&\s\0]/g;
    // This length limit is decided considering the following facts:
    //  1. Most browsers support url length up to 2000 chars
    //    (https://stackoverflow.com/questions/417142/what-is-the-maximum-length-of-a-url-in-different-browsers).
    //  2. SharePoint url type list column has length limit of 256 chars.
    //  3. Web part property marked with url type metadata will be saved in database and length limit is 400 chars
    //    (V_STORE_MAX_FULLURL in Sporel).
    //  4. Google typically displays the first 50–60 characters of a title tag.
    // To avoid cutting-off user's semantic content, and control the risk of whole url exceeding length limitation,
    // the following maximum length is picked.
    AnchorService.MAX_ID_LENGTH = 128;
    AnchorService.DEFAULT_ANCHOR_NAME = 'anchor';
    return AnchorService;
}());



/***/ }),

/***/ "17wl":
/*!************************!*\
  !*** external "tslib" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__17wl__;

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

/***/ "Ausc":
/*!**********************************************************!*\
  !*** ./lib/anchorServiceManager/AnchorServiceManager.js ***!
  \**********************************************************/
/*! exports provided: AnchorServiceManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnchorServiceManager", function() { return AnchorServiceManager; });
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/sp-diagnostics */ "ut3N");
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _anchorService_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../anchorService/index */ "nE28");
// Copyright (c) Microsoft. All rights reserved.


/**
 * AnchorServiceManager should be used as a singleton from serviceKey, it is
 *  1. an observer listening to anchor events.
 *  2. a manager offering APIs to interact with anchors.
 */
var AnchorServiceManager = /** @class */ (function () {
    function AnchorServiceManager() {
        var _this = this;
        this.componentId = 'bdb0f5dd-3bb4-4b93-b12a-71aa9e20bb09';
        this.instanceId = 'e1163200-0719-4a64-9f9a-bc6592953704';
        this.isDisposed = false;
        this._anchorServiceQueue = new _anchorService_index__WEBPACK_IMPORTED_MODULE_1__["AnchorServiceQueue"]();
        this.reserve = function (uniqueId) {
            _this._anchorServiceQueue.handleAnchorEvent({
                action: 'ReserveRegistration',
                uniqueId: uniqueId
            });
        };
        this.raiseAnchorEvent = function (anchorEvent) {
            _this._anchorServiceQueue.handleAnchorEvent(anchorEvent);
        };
        this._scroll = function () {
            if (_this._anchorIdToScroll) {
                var scrollPromise = _this._anchorServiceQueue.scrollTo(_this._anchorIdToScroll);
                _this._anchorIdToScroll = undefined;
                return scrollPromise;
            }
            else {
                return Promise.reject('AnchorId is undefined, multiple scroll Task planned');
            }
        };
    }
    AnchorServiceManager.prototype.scrollToKillSwitchActivated = function (anchorId) {
        var monitor = new _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_0__["_QosMonitor"]('AnchorService');
        return this._anchorServiceQueue
            .scrollTo(anchorId)
            .then(function () { return monitor.writeSuccess(); })
            .catch(function (error) {
            monitor.writeExpectedFailure('FailToScroll', error);
            throw error;
        });
    };
    /**
     * Create a scroll Task, caller can use execute to scroll. Or the scroll will be executed when timeout.
     * @param anchorId Anchor Id.
     * @param timeout If execute is not called in before timeout, the scroll will be trigger. -1 means execute no timeout guardian.
     */
    AnchorServiceManager.prototype.scrollTo = function (anchorId, timeout) {
        var _this = this;
        if (timeout === void 0) { timeout = 5000; }
        if (!anchorId && timeout < -1) {
            return;
        }
        this._anchorIdToScroll = anchorId;
        var execute;
        var cancel;
        var guardPromise = timeout !== -1
            ? new Promise(function (resolve) {
                setTimeout(function () {
                    resolve('timeout');
                }, timeout);
            })
            : undefined;
        var executePromise = new Promise(function (resolve, reject) {
            execute = function () { return resolve('execute'); };
            cancel = function () { return reject('cancel'); };
        });
        var monitor = new _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_0__["_QosMonitor"]('AnchorService');
        return {
            execute: execute,
            cancel: cancel,
            scrollPromise: Promise.race([guardPromise, executePromise])
                .then(function (message) {
                return _this._scroll().then(function () {
                    if (message === 'timeout') {
                        monitor.writeExpectedFailure('TimeoutTriggerScroll');
                    }
                    else {
                        monitor.writeSuccess();
                    }
                }, function (error) {
                    monitor.writeUnexpectedFailure('FailedToScroll', error, { message: message });
                });
            })
                .catch(function (error) {
                monitor.writeExpectedFailure('CancelScroll', error);
            })
        };
    };
    return AnchorServiceManager;
}());



/***/ }),

/***/ "Bs35":
/*!*******************************************!*\
  !*** ./lib/anchorServiceManager/index.js ***!
  \*******************************************/
/*! exports provided: anchorServiceManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "anchorServiceManager", function() { return anchorServiceManager; });
/* harmony import */ var _AnchorServiceManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AnchorServiceManager */ "Ausc");

var anchorServiceManager = new _AnchorServiceManager__WEBPACK_IMPORTED_MODULE_0__["AnchorServiceManager"]();


/***/ }),

/***/ "GjHM":
/*!**************************************!*\
  !*** ./lib/anchorZone/AnchorZone.js ***!
  \**************************************/
/*! exports provided: AnchorZone */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnchorZone", function() { return AnchorZone; });
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
/* harmony import */ var _anchorServiceManager__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../anchorServiceManager */ "Bs35");
/* harmony import */ var _loc_Strings_resx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../loc/Strings.resx */ "mGD9");
var _loc_Strings_resx__WEBPACK_IMPORTED_MODULE_7___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../loc/Strings.resx */ "mGD9", 1);
/* harmony import */ var _AnchorZone_module_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./AnchorZone.module.scss */ "+7YS");
// Copyright (c) Microsoft. All rights reserved.









var ANCHOR_ID_ATTRIBUTE_NAME = 'data-sp-anchor-id';
function hideAnchorIconKSActivated() {
    return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_3__["_SPKillSwitch"].isActivated('1e317b4a-e7e4-4631-b2f1-c5b256df32ab'
    /* '12/17/2020', 'Add capability to hide anchor icon while rendering anchor zone' */
    );
}
/**
 * A React component for automatically adding anchor icons in cases where we have to directly deal with vanilla HTML.
 * Since we don't know about where an anchor icon is needed in advance, so users will have to provide a CSS selector
 * to match all the HTMLElements where an anchor icon is needed. Currently ONLY stateless components are supported and
 * they should be provided to this component as its children.
 */
// Anchor zone will now register anchors after annotations finish
// this is a workaround and this is the bug to track the future work:
// https://onedrive.visualstudio.com/CSI/_workitems/edit/841559
var AnchorZone = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(AnchorZone, _super);
    function AnchorZone(props) {
        var _this = _super.call(this, props) || this;
        _this.instanceId = '4e00f196-1bdc-4f2a-8581-6075c77437c6';
        _this._isCatchingAnchorZoneErrorKsActivated = _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_3__["_SPKillSwitch"].isActivated('08f04a2c-bcfa-41c5-a3ae-286494ee35f1'
        /* '12/21/2020', 'Catch anchor zone error and fallback' */
        );
        _this._addAnchorIcon = function (anchoredElement, anchorId, suggestAnchorId) {
            if (hideAnchorIconKSActivated() || !_this.props.hideAnchorIcon) {
                var anchor = _this._insertAnchorIcon(anchoredElement);
                _this._updateAnchorTargetAttributes(anchoredElement, anchor, anchorId, suggestAnchorId);
            }
        };
        _this._insertAnchorIcon = function (anchoredElement) {
            var childCount = anchoredElement.childElementCount;
            var anchor = undefined;
            for (var i = 0; i < childCount; i++) {
                var child = anchoredElement.children[i];
                // It is possible that AnchorService.finishRegistration might be invoked multiple times
                // so there might already be an existing anchor icon for the anchoredElement
                if (AnchorZone._isElementAnchorIcon(child)) {
                    anchor = child;
                    break;
                }
                // There are chances that Heading element contains <br>, insert anchor element before the <br>.
                if (child.tagName === 'BR') {
                    anchor = AnchorZone._anchorIconElement;
                    anchoredElement.insertBefore(anchor, child);
                    break;
                }
            }
            // If no BR and not processed, insert into last.
            if (!anchor) {
                anchor = AnchorZone._anchorIconElement;
                anchoredElement.appendChild(anchor);
            }
            return anchor;
        };
        _this._updateAnchorTargetAttributes = function (targetElement, anchor, anchorId, suggestAnchorId) {
            var targetUri = new _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_5__["Uri"](window.location.href);
            targetUri.setFragment(encodeURIComponent(anchorId));
            var href = targetUri.toString();
            targetElement.setAttribute('id', anchorId);
            anchor.setAttribute('role', 'link');
            anchor.setAttribute('aria-label', _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_3__["Text"].format(_loc_Strings_resx__WEBPACK_IMPORTED_MODULE_7__["PermalinkFor"], suggestAnchorId));
            anchor.setAttribute(ANCHOR_ID_ATTRIBUTE_NAME, anchorId);
            anchor.setAttribute('href', href);
            anchor.setAttribute('target', '_self');
            anchor.onclick = function () {
                _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_4__["_EngagementLogger"].logEvent('AnchorZone.ClickAnchor');
            };
        };
        _this._removeAnchorIcon = function (anchoredElement, anchorId) {
            if (anchoredElement.lastElementChild &&
                AnchorZone._isElementAnchorIcon(anchoredElement.lastElementChild)) {
                anchoredElement.removeChild(anchoredElement.lastElementChild);
            }
        };
        if (!_this._isCatchingAnchorZoneErrorKsActivated) {
            _this.state = { hasError: false };
        }
        return _this;
    }
    Object.defineProperty(AnchorZone, "_anchorIconElement", {
        get: function () {
            if (!AnchorZone._anchorIconElementCache) {
                var anchorIcon = document.createElement('i');
                anchorIcon.className = Object(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_2__["css"])(_AnchorZone_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].anchorIcon, Object(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_2__["getIconClassName"])('Link'));
                anchorIcon.setAttribute('aria-hidden', 'true');
                AnchorZone._anchorIconElementCache = document.createElement('a');
                AnchorZone._anchorIconElementCache.classList.add(_AnchorZone_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].anchorLink, _AnchorZone_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].focusBorderFix);
                AnchorZone._anchorIconElementCache.appendChild(anchorIcon);
            }
            return AnchorZone._anchorIconElementCache.cloneNode(true);
        },
        enumerable: true,
        configurable: true
    });
    AnchorZone._isElementAnchorIcon = function (element) {
        return element.hasAttribute(ANCHOR_ID_ATTRIBUTE_NAME) && element.classList.contains(_AnchorZone_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].anchorLink);
    };
    AnchorZone._isInlineImageEnabled = function () {
        return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_3__["_SPFlight"].isEnabled(60045 /* InlineImageInRTE */);
    };
    AnchorZone.prototype.componentDidMount = function () {
        this._registerAnchors();
    };
    AnchorZone.prototype.componentDidUpdate = function () {
        if (this._isCatchingAnchorZoneErrorKsActivated || !this.state.hasError) {
            this._registerAnchors(true /* refresh */);
        }
    };
    AnchorZone.prototype.componentWillUnmount = function () {
        this._unregister(this.props.componentId);
    };
    AnchorZone.prototype.componentDidCatch = function () {
        if (!this._isCatchingAnchorZoneErrorKsActivated) {
            this.setState({ hasError: true });
        }
    };
    AnchorZone.prototype.render = function () {
        if (AnchorZone._isInlineImageEnabled()) {
            if (this.props.elementForSearch) {
                this._registerAnchors(true /* refresh */);
            }
            return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null);
        }
        else {
            return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { ref: this._resolveRef('_wrapperElement') }, this.props.children);
        }
    };
    AnchorZone.prototype._registerAnchors = function (refresh) {
        var _this = this;
        if (refresh === void 0) { refresh = false; }
        var elementForSearch = (AnchorZone._isInlineImageEnabled() && this.props.elementForSearch) || this._wrapperElement;
        if (elementForSearch) {
            var anchorElements = [].slice.call(elementForSearch.querySelectorAll(this.props.anchorElementSelector));
            this._register(this.props.componentId, refresh, anchorElements.map(function (anchorElement, index) {
                var suggestedAnchorId = _this.props.suggestAnchorId
                    ? _this.props.suggestAnchorId(anchorElement, index)
                    : anchorElement.textContent || '';
                return {
                    suggestedAnchorId: suggestedAnchorId,
                    anchorTargetElement: anchorElement,
                    onReceiveAnchorId: function (targetElement, anchorId) {
                        return _this._addAnchorIcon(targetElement, anchorId, suggestedAnchorId);
                    },
                    onDisposeAnchorId: _this._removeAnchorIcon
                };
            }));
        }
    };
    AnchorZone.prototype._register = function (uniqueId, refresh, anchorList) {
        var eventArgs = {
            action: refresh ? 'Refresh' : 'Register',
            uniqueId: uniqueId,
            anchorList: anchorList
        };
        _anchorServiceManager__WEBPACK_IMPORTED_MODULE_6__["anchorServiceManager"].raiseAnchorEvent(eventArgs);
    };
    AnchorZone.prototype._unregister = function (uniqueId) {
        var eventArgs = {
            action: 'Unregister',
            uniqueId: uniqueId
        };
        _anchorServiceManager__WEBPACK_IMPORTED_MODULE_6__["anchorServiceManager"].raiseAnchorEvent(eventArgs);
    };
    return AnchorZone;
}(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_2__["BaseComponent"]));



/***/ }),

/***/ "KL1q":
/*!***********************************************************!*\
  !*** external "@microsoft/office-ui-fabric-react-bundle" ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_KL1q__;

/***/ }),

/***/ "Obl3":
/*!*************************************************!*\
  !*** ./lib/anchorService/AnchorServiceQueue.js ***!
  \*************************************************/
/*! exports provided: AnchorServiceQueue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnchorServiceQueue", function() { return AnchorServiceQueue; });
/* harmony import */ var _AnchorService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AnchorService */ "+8VW");
// Copyright (c) Microsoft. All rights reserved.

/**
 * AnchorServiceQueue handles anchor events and calls anchorService APIs correspondingly.
 * It ensures the API calls to anchor service are invoked in a correct sequence.
 */
var AnchorServiceQueue = /** @class */ (function () {
    function AnchorServiceQueue() {
        var _this = this;
        this._register = function (uniqueId, anchorList) {
            _this._anchorService.register(uniqueId, anchorList);
            _this._pendingRegistrations.delete(uniqueId);
            _this._checkFinishRegistration();
        };
        this._unregister = function (uniqueId) {
            _this._anchorService.unregister(uniqueId);
            _this._pendingRegistrations.delete(uniqueId);
            _this._checkFinishRegistration();
        };
        this._refresh = function (uniqueId, anchorList) {
            _this._anchorService.register(uniqueId, anchorList);
            _this._pendingRegistrations.delete(uniqueId);
            // We should only update anchors to the DOM when all reserved anchors are registered.
            // To make sure we are not finishing registration too early and break existing anchors.
            _this._checkFinishRegistration();
        };
        this._pendingFinishRegistration = false;
        this._pendingRegistrations = new Set();
        this._anchorService = new _AnchorService__WEBPACK_IMPORTED_MODULE_0__["AnchorService"]();
    }
    AnchorServiceQueue.prototype.initialize = function (eventsQueue) {
        var _this = this;
        eventsQueue.forEach(function (anchorEvent) {
            _this.handleAnchorEvent(anchorEvent);
        });
    };
    AnchorServiceQueue.prototype.scrollTo = function (anchorId) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var scroll = function () {
                if (_this._anchorService.scrollTo(anchorId)) {
                    resolve();
                }
                else {
                    reject(new Error('Failed to find anchor to scroll'));
                }
            };
            if (!_this._pendingFinishRegistration) {
                scroll();
            }
            else {
                _this._resolveScroll = scroll;
            }
        });
    };
    AnchorServiceQueue.prototype.handleAnchorEvent = function (anchorEvent) {
        switch (anchorEvent.action) {
            case 'ReserveRegistration':
                this._reserveRegistration(anchorEvent.uniqueId);
                break;
            case 'Register':
                this._register(anchorEvent.uniqueId, anchorEvent.anchorList);
                break;
            case 'Unregister':
                this._unregister(anchorEvent.uniqueId);
                break;
            case 'Refresh':
                this._refresh(anchorEvent.uniqueId, anchorEvent.anchorList);
                break;
        }
    };
    AnchorServiceQueue.prototype._reserveRegistration = function (uniqueId) {
        this._pendingRegistrations.add(uniqueId);
    };
    AnchorServiceQueue.prototype._checkFinishRegistration = function () {
        if (!this._pendingRegistrations.size) {
            this._anchorService.finishRegistration();
            this._pendingFinishRegistration = false;
            if (this._resolveScroll) {
                this._resolveScroll();
                this._resolveScroll = undefined;
            }
        }
    };
    return AnchorServiceQueue;
}());



/***/ }),

/***/ "Qr9v":
/*!********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/css-loader@3.2.1_webpack@4.44.2/node_modules/css-loader/dist/cjs.js!/agent/_work/1/s/common/temp/node_modules/.pnpm/postcss-loader@3.0.0/node_modules/postcss-loader/src??postcss!./lib/anchorZone/AnchorZone.module.css ***!
  \********************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../common/temp/node_modules/.pnpm/css-loader@3.2.1_webpack@4.44.2/node_modules/css-loader/dist/runtime/api.js */ "5ADk")(false);
// Module
exports.push([module.i, ".a_a_1310c973{opacity:0;text-decoration:none;outline:0;position:absolute}.a_a_1310c973:focus,:focus>.a_a_1310c973,:hover>.a_a_1310c973{transition:.1s linear;opacity:1}[dir=ltr] .a_a_1310c973.b_a_1310c973{margin-left:5px}[dir=rtl] .a_a_1310c973.b_a_1310c973{margin-right:5px}.a_a_1310c973.b_a_1310c973 .c_a_1310c973{font-style:normal;padding:3px;line-height:1}.a_a_1310c973.b_a_1310c973:focus:not(:active) .c_a_1310c973{border:1px solid #605e5c}[dir=ltr] .a_a_1310c973:not(.b_a_1310c973) .c_a_1310c973{margin-left:8px}[dir=rtl] .a_a_1310c973:not(.b_a_1310c973) .c_a_1310c973{margin-right:8px}.c_a_1310c973{font-style:normal;font-weight:400;font-size:16px}", ""]);


/***/ }),

/***/ "T/MW":
/*!**********************************************!*\
  !*** ./lib/anchorZone/AnchorZone.module.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../../common/temp/node_modules/.pnpm/css-loader@3.2.1_webpack@4.44.2/node_modules/css-loader/dist/cjs.js!../../../../common/temp/node_modules/.pnpm/postcss-loader@3.0.0/node_modules/postcss-loader/src??postcss!./AnchorZone.module.css */ "Qr9v");
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

/***/ "cDcd":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_cDcd__;

/***/ }),

/***/ "dvy9":
/*!*********************************!*\
  !*** ./lib/anchorZone/index.js ***!
  \*********************************/
/*! exports provided: AnchorZone */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AnchorZone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AnchorZone */ "GjHM");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AnchorZone", function() { return _AnchorZone__WEBPACK_IMPORTED_MODULE_0__["AnchorZone"]; });




/***/ }),

/***/ "jOlS":
/*!************************************************!*\
  !*** external "@microsoft/load-themed-styles" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_jOlS__;

/***/ }),

/***/ "mGD9":
/*!******************************!*\
  !*** ./lib/loc/Strings.resx ***!
  \******************************/
/*! exports provided: PermalinkFor, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"PermalinkFor\":\"PermalinkFor\"}");

/***/ }),

/***/ "mwqp":
/*!**********************!*\
  !*** ./lib/index.js ***!
  \**********************/
/*! exports provided: anchorServiceManager, AnchorZone */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _anchorServiceManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./anchorServiceManager */ "Bs35");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "anchorServiceManager", function() { return _anchorServiceManager__WEBPACK_IMPORTED_MODULE_0__["anchorServiceManager"]; });

/* harmony import */ var _anchorZone__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./anchorZone */ "dvy9");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AnchorZone", function() { return _anchorZone__WEBPACK_IMPORTED_MODULE_1__["AnchorZone"]; });

// Copyright (c) Microsoft. All rights reserved.




/***/ }),

/***/ "nE28":
/*!************************************!*\
  !*** ./lib/anchorService/index.js ***!
  \************************************/
/*! exports provided: AnchorServiceQueue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AnchorServiceQueue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AnchorServiceQueue */ "Obl3");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AnchorServiceQueue", function() { return _AnchorServiceQueue__WEBPACK_IMPORTED_MODULE_0__["AnchorServiceQueue"]; });




/***/ }),

/***/ "ut3N":
/*!********************************************!*\
  !*** external "@microsoft/sp-diagnostics" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_ut3N__;

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
//# sourceMappingURL=sp-anchor_[locale].js.map