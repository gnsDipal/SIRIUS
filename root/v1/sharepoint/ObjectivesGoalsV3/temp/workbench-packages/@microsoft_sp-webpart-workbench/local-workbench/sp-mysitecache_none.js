define("a8d4def5-9852-45c7-905e-2e50203cbb98_0.1.0", ["tslib","@ms/sp-telemetry","@microsoft/office-ui-fabric-react-bundle","@microsoft/sp-lodash-subset","@microsoft/sp-core-library","@microsoft/sp-page-context","@microsoft/sp-diagnostics","@microsoft/sp-http","@ms/odsp-utilities-bundle"], function(__WEBPACK_EXTERNAL_MODULE__17wl__, __WEBPACK_EXTERNAL_MODULE__2q6Q__, __WEBPACK_EXTERNAL_MODULE_KL1q__, __WEBPACK_EXTERNAL_MODULE_Pk8u__, __WEBPACK_EXTERNAL_MODULE_UWqr__, __WEBPACK_EXTERNAL_MODULE_X_PM__, __WEBPACK_EXTERNAL_MODULE_ut3N__, __WEBPACK_EXTERNAL_MODULE_vlQI__, __WEBPACK_EXTERNAL_MODULE_y88i__) { return /******/ (function(modules) { // webpackBootstrap
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

/***/ "6VeD":
/*!*************************************!*\
  !*** ./lib/MySiteCacheUtilities.js ***!
  \*************************************/
/*! exports provided: MySiteCacheUtilities */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MySiteCacheUtilities", function() { return MySiteCacheUtilities; });
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _microsoft_sp_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/sp-http */ "vlQI");
/* harmony import */ var _microsoft_sp_http__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_http__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Flights__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Flights */ "dVDx");
/* harmony import */ var _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ms/odsp-utilities-bundle */ "y88i");
/* harmony import */ var _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_3__);




// Api endpoints
var PERSONALCACHE_API_ENDPOINT = "/_api/SP.UserProfiles.PersonalCache";
var READCACHEORCREATE = "/ReadCacheOrCreate";
var READCACHEORCREATE2 = "/ReadCacheOrCreate2";
var WRITECACHE = "/WriteCache";
var WRITECACHE2 = "/WriteCache2";
var DELETECACHE = "/DeleteCacheItemsAsync";
var DELETECACHE2 = "/DeleteCacheItemsAsync2";
var MySiteCacheUtilities = /** @class */ (function () {
    function MySiteCacheUtilities() {
    }
    /**
     * Checks the status of a response and resolves/rejects the Promise.
     *
     * @param Response - The response to check.
     *
     * @returns - A resolved/rejected Promise object.
     */
    MySiteCacheUtilities.checkResponseStatus = function (response) {
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Validate"].isNotNullOrUndefined(response, 'response');
        if (response.status >= 200 && response.status < 300) {
            return Promise.resolve(response);
        }
        else {
            return Promise.reject(new Error(JSON.stringify(response)));
        }
    };
    /**
     * Creates a REST url for updating CacheItems.
     *
     * @param currentWebAbsoluteUrl - Absolute web url of the current context.
     *
     * @returns - REST url to update PersonalCacheItems.
     */
    MySiteCacheUtilities.getPersonalCacheItemUpdateUrl = function (currentWebAbsoluteUrl) {
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Validate"].isNonemptyString(currentWebAbsoluteUrl, 'currentWebAbsoluteUrl');
        var endPoint = Object(_Flights__WEBPACK_IMPORTED_MODULE_2__["isPersonalCacheFlightEnabled"])() ? WRITECACHE2 : WRITECACHE;
        var baseUrl = currentWebAbsoluteUrl.concat(PERSONALCACHE_API_ENDPOINT, endPoint);
        var url = new URL(baseUrl);
        return url.href;
    };
    /**
     * Creates a REST url for creating PersonalCacheItems.
     *
     * @param currentWebAbsoluteUrl - Absolute web url of the current context.
     *
     * @returns - REST url to create PersonalCacheItems.
     */
    MySiteCacheUtilities.getPersonalCacheItemCreateUrl = function (currentWebAbsoluteUrl) {
        var endPoint = Object(_Flights__WEBPACK_IMPORTED_MODULE_2__["isPersonalCacheFlightEnabled"])() ? READCACHEORCREATE2 : READCACHEORCREATE;
        var baseUrl = currentWebAbsoluteUrl.concat(PERSONALCACHE_API_ENDPOINT, endPoint);
        var url = new URL(baseUrl);
        return url.href;
    };
    /**
     * Convert date string format like 2016-08-24T23:13:18.97-07:00 to Date object.
     *
     * @param dateTime - A date string like 2016-08-24T23:13:18.97-07:00
     *
     * @returns - A Date object with the datetime of the input string.
     */
    MySiteCacheUtilities.dateTimeStringToJsDate = function (dateTime) {
        if (!dateTime) {
            return;
        }
        var timeValues = dateTime.split(/[^0-9]/);
        if (timeValues.length < 6) {
            return; // error
        }
        else {
            return new Date(Date.UTC(Number(timeValues[0]), Number(timeValues[1]) - 1, Number(timeValues[2]), Number(timeValues[3]), Number(timeValues[4]), Number(timeValues[5])));
        }
    };
    /**
     * Retrieves the last uri segment.
     *
     * @param url - The target url.
     *
     * @returns - The last segment of the given url.
     */
    MySiteCacheUtilities.getUrlLastSegment = function (url) {
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Validate"].isNonemptyString(url, 'url');
        var parts = url.split('/');
        var lastSegment = (parts.pop() || parts.pop()); // Consider trailing '/'
        return lastSegment;
    };
    /**
     * Creates a JSON body for creating PersonalCacheItems.
     *
     * @param listRelativeFolderPath - Web relative folder path for the cache item.
     * @param items - The PersonalCacheItems to be created.
     * @param mySiteUrl - The mySite url.
     *
     * @returns - JSON body for creating PersonalCacheItems.
     */
    MySiteCacheUtilities.getCreatePersonalCacheItemBody = function (listRelativeFolderPath, items, mySiteUrl) {
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Validate"].isNonemptyString(listRelativeFolderPath, 'listRelativeFolderPath');
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Validate"].isNotNullOrUndefined(items, 'items');
        var requiredItems = "";
        items.forEach(function (item) {
            if (requiredItems !== "") {
                requiredItems = requiredItems + ", ";
            }
            requiredItems = requiredItems + item.CacheKey;
        });
        var body = {
            folderPath: {
                __metadata: {
                    type: 'SP.ResourcePath'
                },
                DecodedUrl: "" + listRelativeFolderPath
            },
            requiredCacheKeys: ["" + requiredItems],
            createIfMissing: true
        };
        if (mySiteUrl && Object(_Flights__WEBPACK_IMPORTED_MODULE_2__["isPersonalCacheFlightEnabled"])()) {
            var key = 'mySiteUrl';
            body[key] = mySiteUrl;
        }
        return body;
    };
    // @todo VSO:903550 - why are there 2 copies of this?
    /**
     * Creates a JSON body for updating PersonalCacheItems.
     *
     * @param items - Value of the result to be cached.
     * @param mySiteUrl - The mysite Url.
     *
     * @returns - JSON body for updating PersonalCacheItems.
     */
    MySiteCacheUtilities.getUpdatePersonalCacheItemsBody = function (items, mySiteUrl, isDelete) {
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Validate"].isNotNullOrUndefined(items, 'items');
        // tslint:disable-next-line:no-any
        var body = { cacheItems: [] };
        items.forEach(function (item) {
            if (isDelete) {
                item.CacheValue = ''; // clear to avoid hitting CSOM size limit
            }
            body.cacheItems.push(item);
        });
        if (mySiteUrl && Object(_Flights__WEBPACK_IMPORTED_MODULE_2__["isPersonalCacheFlightEnabled"])()) {
            var key = 'mySiteUrl';
            body[key] = mySiteUrl;
        }
        return body;
    };
    /**
     * Posts to SPHTTPClient
     *
     * @param spHttpClient - The SPHttpClient object to post with.
     * @param url - The url to post to.
     * @param body - The body to post with.
     *
     * @returns - JSON body for updating a WebPart Cache Item.
     */
    MySiteCacheUtilities.post = function (spHttpClient, url, body, checkStatusFunction) {
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Validate"].isNotNullOrUndefined(spHttpClient, 'spHttpClient');
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Validate"].isNonemptyString(url, 'url');
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Validate"].isNotNullOrUndefined(body, 'body');
        return spHttpClient
            .post(url, _microsoft_sp_http__WEBPACK_IMPORTED_MODULE_1__["SPHttpClient"].configurations.v1, {
            body: JSON.stringify(body),
            headers: { 'OData-Version': '3.0' } // we will convert to 4 when there are docs with examples :)
        })
            .then(checkStatusFunction);
    };
    /**
     * Creates a JSON body for creating PersonalCacheItems.
     *
     * @param listRelativeFolderPath - Web relative folder path for the cache item.
     * @param items - The PersonalCacheItems to be created.
     *
     * @returns - JSON body for creating PersonalCacheItems.
     */
    MySiteCacheUtilities.getReadPersonalCacheItemBody = function (listRelativeFolderPath, instanceIds, mySiteUrl) {
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Validate"].isNonemptyString(listRelativeFolderPath, 'listRelativeFolderPath');
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Validate"].isNotNullOrUndefined(instanceIds, 'instanceIds');
        var body = {
            folderPath: {
                __metadata: {
                    type: 'SP.ResourcePath'
                },
                DecodedUrl: "" + listRelativeFolderPath
            },
            requiredCacheKeys: instanceIds,
            createIfMissing: false
        };
        if (mySiteUrl && Object(_Flights__WEBPACK_IMPORTED_MODULE_2__["isPersonalCacheFlightEnabled"])()) {
            var key = 'mySiteUrl';
            body[key] = mySiteUrl;
        }
        return body;
    };
    /**
     * Creates a REST url for deleting PersonalCacheItems.
     *
     * @param currentWebAbsoluteUrl - Absolute web url of the current context.
     *
     * @returns - REST url to update PersonalCacheItems.
     */
    MySiteCacheUtilities.getPersonalCacheItemDeleteUrl = function (currentWebAbsoluteUrl) {
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Validate"].isNonemptyString(currentWebAbsoluteUrl, 'currentWebAbsoluteUrl');
        var endPoint = Object(_Flights__WEBPACK_IMPORTED_MODULE_2__["isPersonalCacheFlightEnabled"])() ? DELETECACHE2 : DELETECACHE;
        var url = _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_3__["Uri"].concatenate(_ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_3__["Uri"].concatenate(currentWebAbsoluteUrl, PERSONALCACHE_API_ENDPOINT), endPoint);
        return url;
    };
    /**
     * Create an UTC Date object (time -> Now).
     *
     * @returns - A UTC Date object.
     */
    MySiteCacheUtilities.getDateNowAsUTC = function () {
        var date = new Date();
        return new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds()));
    };
    /**
     * Get a Date with seconds added.
     *
     * @param date - The Date to add seconds to.
     * @param seconds - The seconds to add to the Date.
     *
     * @returns - A Date with seconds added.
     */
    MySiteCacheUtilities.addSecondsToDate = function (date, seconds) {
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Validate"].isNotNullOrUndefined(date, 'date');
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Validate"].isNotNullOrUndefined(seconds, 'seconds');
        var datePlusSeconds = new Date(date.toString());
        datePlusSeconds.setTime(datePlusSeconds.getTime() + seconds * 1000);
        return datePlusSeconds;
    };
    /**
     * Compare a date with a date plus seconds added.
     *
     * @param referenceDate - The Date to add seconds to.
     * @param dateToCompare - The Date to compare to reference you will add seconds to.
     * @param secondsToAdd - A number of seconds to add to dateToCompare.
     *
     * @returns - True (boolean) if the referenceDate is greater than the dateToCompare plus secondsToAdd.
     */
    MySiteCacheUtilities.isExpired = function (referenceDate, dateToCompare, secondsToAdd) {
        return (!!referenceDate &&
            !!dateToCompare &&
            !!secondsToAdd &&
            secondsToAdd > 0 &&
            referenceDate > MySiteCacheUtilities.addSecondsToDate(dateToCompare, secondsToAdd));
    };
    return MySiteCacheUtilities;
}());



/***/ }),

/***/ "DWIN":
/*!****************************!*\
  !*** ./lib/MySiteCache.js ***!
  \****************************/
/*! exports provided: MySiteCache */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MySiteCache", function() { return MySiteCache; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @microsoft/sp-diagnostics */ "ut3N");
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _microsoft_sp_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @microsoft/sp-http */ "vlQI");
/* harmony import */ var _microsoft_sp_http__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_http__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _microsoft_sp_page_context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @microsoft/sp-page-context */ "X+PM");
/* harmony import */ var _microsoft_sp_page_context__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_page_context__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ms/sp-telemetry */ "2q6Q");
/* harmony import */ var _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _MySiteCacheUtilities__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./MySiteCacheUtilities */ "6VeD");
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @microsoft/office-ui-fabric-react-bundle */ "KL1q");
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @microsoft/sp-lodash-subset */ "Pk8u");
/* harmony import */ var _microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_8__);









// Window Variables
var PREFETCHED_WEBPARTDATA = '_spWebPartData';
var WEBPART_PREFETCH_COMPLETE = '_spWebPartDataLoaded';
// Page level performance marker whether LKG arrived on time or not before any web part asked.
var LKG_ON_TIME = 'lkgOnTime';
// QOS tags
var COMPONENT_ID = 'ComponentId';
var CACHE_ENTRY_EXISTED = 'CacheEntryExisted';
var CACHE_HIT = 'CacheHit';
var CACHE_MISS = 'CacheMiss';
var CACHE_MISS_AFTER_LATE_FLUSH = 'CacheMissAfterFlush';
var ID = 'Id';
var LATE_FLUSH = 'LateFlush';
var QOS_PREFIX = 'MySiteCache.';
var PERF_PREFIX = 'MySiteCache';
// Property and Field titles
var PERSONALCACHEITEM_ID = 'ListItemId';
var PERSONALCACHEITEM_MODIFIED = 'ModifiedTimeUtc';
var PERSONALCACHEITEM_UNIQUEID = 'ListItemUniqueId';
// MySite Cache Schema Version
var TIERED_CACHE_VERSION = '2.0';
var TIERED_DISABLED_CACHE_VERSION = '1.5';
var MySiteCache = /** @class */ (function () {
    function MySiteCache(serviceScope) {
        var _this = this;
        this._cacheItemsMap = new Map();
        this._cacheItemVersionMap = new Map();
        this._hasFlushCompleted = false;
        this._hasInitializedSynchronously = false;
        /**
         * This method auto executes every 10 seconds to update cache in remote server
         */
        this._remoteUpdater = function (executeOnce) {
            _this._updateRemotePersonalCacheItems();
            if (!executeOnce) {
                _this._writeCacheTimer = _this._async.setTimeout(_this._remoteUpdater, 10 * 1000);
            }
        };
        /**
         * Updates personal cache items in the remote server if any
         */
        this._updateRemotePersonalCacheItems = function () {
            if (MySiteCache._itemsToDeferUpdate.size > 0) {
                MySiteCache._itemsToDeferUpdate.forEach(function (items, absoluteUrl) {
                    _this._updateRemoteCacheItemsAPI(absoluteUrl, items).catch(function (error) {
                        return _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__["_TraceLogger"].logError(MySiteCache._logSource, error, 'UpdateRemoteCacheItems');
                    });
                });
                MySiteCache._itemsToDeferUpdate.clear();
            }
        };
        /**
         * Server API call to update remote cache item
         */
        this._updateRemoteCacheItemsAPI = function (absoluteUrl, items) {
            _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["Validate"].isNotNullOrUndefined(absoluteUrl, 'absoluteUrl');
            _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["Validate"].isNotNullOrUndefined(items, 'items');
            var qosSuffix = "_writeCache";
            var qosMonitor = new _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__["_QosMonitor"](QOS_PREFIX + qosSuffix);
            _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_5__["_PerformanceLogger"].startMarkForComponent(qosSuffix);
            // update the local map of cache items
            _this._updateLocalItems(items);
            var url = _MySiteCacheUtilities__WEBPACK_IMPORTED_MODULE_6__["MySiteCacheUtilities"].getPersonalCacheItemUpdateUrl(absoluteUrl);
            var body = _MySiteCacheUtilities__WEBPACK_IMPORTED_MODULE_6__["MySiteCacheUtilities"].getUpdatePersonalCacheItemsBody(items, _this._mySiteAbsoluteUrl);
            var extraData = {};
            if (MySiteCache._lkgSizeKS()) {
                extraData = {
                    count: items.length
                };
            }
            else {
                var dataSizeInKB = JSON.stringify(items).length / 1024;
                extraData = {
                    count: items.length,
                    dataSizeInKB: dataSizeInKB
                };
                var logEntry = new _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__["_LogEntry"]("NewMySiteCacheDataMetrics", "CacheDataSize", _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__["_LogType"].Event, {
                    dataSizeInKB: "" + dataSizeInKB,
                    numberOfItems: "" + items.length
                });
                _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__["_EngagementLogger"].logEventWithLogEntry(logEntry);
            }
            return _MySiteCacheUtilities__WEBPACK_IMPORTED_MODULE_6__["MySiteCacheUtilities"].post(_this._spHttpClient, url, body, _MySiteCacheUtilities__WEBPACK_IMPORTED_MODULE_6__["MySiteCacheUtilities"].checkResponseStatus)
                .then(function (response) {
                qosMonitor.writeSuccess(extraData);
                _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_5__["_PerformanceLogger"].endMarkForComponent(qosSuffix);
                return response;
            })
                .catch(function (error) {
                qosMonitor.writeUnexpectedFailure('WriteCacheError', error, extraData);
                _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_5__["_PerformanceLogger"].endMarkForComponent(qosSuffix);
                return Promise.reject(error);
            });
        };
        /**
         * If end user navigates away,  we should upload data collected so far
         */
        this._emergencyUpload = function () {
            // Update data
            _this._remoteUpdater(true /* executeOnce */);
            // Remove event listener
            _this._unhookUnloadEvent();
            // Clear scheduled timeout
            if (_this._writeCacheTimer) {
                _this._async.clearTimeout(_this._writeCacheTimer);
            }
        };
        this._hookUnloadEvent = function () {
            window.addEventListener('beforeunload', _this._emergencyUpload);
        };
        this._unhookUnloadEvent = function () {
            window.removeEventListener('beforeunload', _this._emergencyUpload);
        };
        _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_5__["_PerformanceLogger"].startMarkForComponent(PERF_PREFIX);
        this._async = new _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_7__["Async"](this);
        var maxWaitTime = MySiteCache._increaseLateFlushKS() ? 2 * 60 * 1000 : 4 * 60 * 1000; // 4 minutes
        var millisecondsToWait = 50;
        var waitTime = 0;
        this._initializeFromLateFlush = new Promise(function (resolve, reject) {
            var qosMonitorLF;
            var qosSuffixLF = '_initializeFromLateFlush';
            qosMonitorLF = new _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__["_QosMonitor"](QOS_PREFIX + qosSuffixLF);
            var getDataFromFlush = function () {
                var qosSuffix = '_tryInitializeFromLateFlush';
                var qosMonitor = new _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__["_QosMonitor"](QOS_PREFIX + qosSuffix);
                try {
                    _this._tryInitializeFromPage();
                    if (!_this._hasFlushCompleted) {
                        qosMonitor.writeUnexpectedFailure('NoCacheMetadata');
                    }
                    else {
                        qosMonitor.writeSuccess();
                    }
                }
                catch (error) {
                    qosMonitor.writeUnexpectedFailure('CatchAll', error);
                }
            };
            // _spWebPartDataLoaded() was defined already, this can happen when tiered caching
            // is enabled for some webparts but legacy cache is active in other webparts
            if (window[WEBPART_PREFETCH_COMPLETE]) {
                getDataFromFlush();
            }
            else {
                // if _spWebPartDataLoaded() has not been defined already, lets define it.
                // _spWebPartDataLoaded() can be defined already when tiered caching
                // is enabled for some webparts but legacy cache is active in other webparts
                if (!window[WEBPART_PREFETCH_COMPLETE]) {
                    window[WEBPART_PREFETCH_COMPLETE] = getDataFromFlush;
                }
                var asyncStart_1 = new _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_7__["Async"]();
                asyncStart_1.setInterval(function () {
                    // server flush happened before _spWebPartDataLoaded() was exposed,
                    // lets extract the contents of the _spWebPardData if any
                    if (!_this._hasFlushCompleted && window[PREFETCHED_WEBPARTDATA]) {
                        getDataFromFlush();
                    }
                    // Data has been extracted, lets stop async interval
                    if (_this._hasFlushCompleted && window[PREFETCHED_WEBPARTDATA]) {
                        asyncStart_1.dispose();
                        _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_5__["_PerformanceLogger"].markComponent(PERF_PREFIX, _this._hasInitializedSynchronously ? 'SyncFlushCompleted' : 'LateFlushCompleted');
                        qosMonitorLF.writeSuccess({ initializedAsync: !_this._hasInitializedSynchronously });
                        return resolve();
                    }
                    if (waitTime >= maxWaitTime) {
                        _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_5__["_PerformanceLogger"].endMarkForComponent(PERF_PREFIX);
                        qosMonitorLF.writeUnexpectedFailure('TimedOut');
                        asyncStart_1.dispose();
                        return reject();
                    }
                    // Increase wait time
                    waitTime += millisecondsToWait;
                }, millisecondsToWait);
            }
        });
        serviceScope.whenFinished(function () {
            _this._pageContext = serviceScope.consume(_microsoft_sp_page_context__WEBPACK_IMPORTED_MODULE_4__["PageContext"].serviceKey);
            _this._spHttpClient = serviceScope.consume(_microsoft_sp_http__WEBPACK_IMPORTED_MODULE_3__["SPHttpClient"].serviceKey);
            _this._tryInitializeSynchronously();
            // Start updating changes no sooner than 10 seconds via remoteUpdater
            _this._remoteUpdater();
            // listen for events caused by user navigating away
            _this._hookUnloadEvent();
            _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__["_EngagementLogger"].logEvent('MySiteCache.Constructor');
        });
    }
    MySiteCache._increaseLateFlushKS = function () {
        return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["_SPKillSwitch"].isActivated('376173e3-a470-4113-9173-86d02206d55c' /*'08/12/2020', 'WEX_LateFlishTimeIncrease' */);
    };
    MySiteCache._lkgSizeKS = function () {
        return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["_SPKillSwitch"].isActivated('b728e553-c653-47b7-a800-a49fb4ec11e3' /*'09/23/2020', 'WEX_LogLKGSize_TieredCaching' */);
    };
    Object.defineProperty(MySiteCache.prototype, "cacheItemMap", {
        get: function () {
            return this._cacheItemsMap;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MySiteCache.prototype, "currentListRelativeFolderPath", {
        get: function () {
            return this._getListRelativeFolderPath();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MySiteCache.prototype, "currentWebAbsoluteUrl", {
        get: function () {
            return this._currentWebAbsoluteUrl;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MySiteCache.prototype, "mySiteAbsoluteUrl", {
        get: function () {
            return this._mySiteAbsoluteUrl;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MySiteCache.prototype, "hasFlushCompleted", {
        get: function () {
            return this._hasFlushCompleted;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MySiteCache.prototype, "initializeFromLateFlush", {
        get: function () {
            return this._initializeFromLateFlush;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MySiteCache.prototype, "defaultCacheConfiguration", {
        set: function (config) {
            this._cacheConfiguration = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, config);
        },
        enumerable: true,
        configurable: true
    });
    MySiteCache.prototype.getCacheItemVersion = function (cacheKey) {
        return this._cacheItemVersionMap.get(cacheKey);
    };
    MySiteCache.prototype.getCachedItem = function (cacheKey) {
        return this._getCachedItem(cacheKey);
    };
    MySiteCache.prototype.addItemToBeUpdated = function (item) {
        return this._addItemToBeUpdated(item);
    };
    /**
     * Returns cached data for the matching Cache Key.
     * @param cacheKey - Cache Key.
     * @param cacheOptions - The cache options.
     * @internal
     */
    MySiteCache.prototype._internalAdvancedGetCachedData = function (cacheKey, cacheOptions) {
        return this._getCacheData(cacheKey, cacheOptions);
    };
    /**
     * In advanced usage scenarios, allows caller to directly update cache item
     * @param cacheKey - Cache Key.
     * @param cacheValue - The serialized data.
     * @param cacheOptions - The cache options.
     * @internal
     */
    MySiteCache.prototype._internalAdvancedSetCacheData = function (cacheKey, cacheValue, cacheOptions, cacheHash) {
        return this._updateCacheInServer(cacheKey, cacheValue, cacheOptions, cacheHash);
    };
    /**
     * Returns cached data for the matching Cache Key.
     *
     * @returns - A promise containing the Type and the Data returned from the server request or cache.
     */
    MySiteCache.prototype._getCacheData = function (cacheKey, cacheOptions) {
        var _this = this;
        var _a = cacheOptions, alias = _a.alias, id = _a.id, verbose = _a.verbose;
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["Validate"].isNonemptyString(cacheKey, 'cacheKey');
        var cachedData = this._getCachedItem(cacheKey);
        var telemetryData = this._logCacheStart(cacheKey, 'GetCacheData', alias, id);
        // Data is cached and usable (has not expired)
        if (!!cachedData) {
            this._logCacheHit(telemetryData, cacheKey);
            return Promise.resolve(verbose ? cachedData : JSON.parse(cachedData.result));
            // Data is not cached or flush from server hasn't yet completed.
        }
        else {
            this._logCacheMiss(cacheKey);
            telemetryData.extraProperties[CACHE_MISS] = true;
            // Flush from server hasn't completed
            if (!this._hasFlushCompleted) {
                this._logLateFlush(cacheKey);
                telemetryData.extraProperties[LATE_FLUSH] = true;
                // Wait for data to be flushed
                var waitOnDataFromFlush = this._initializeFromLateFlush
                    .then(function () { return _this._getCachedItem(cacheKey); })
                    .then(function (cachedItem) {
                    // Data is cached and usable (has not expired)
                    if (!!cachedItem) {
                        _this._logCacheHit(telemetryData, cacheKey);
                        return Promise.resolve(verbose ? cachedData : JSON.parse(cachedItem.result));
                    }
                    _this._logCacheMissAfterFlush(telemetryData);
                    return Promise.resolve(undefined);
                });
                return waitOnDataFromFlush;
                // Flush completed and cache was not available
            }
            else {
                this._logCacheMissAfterFlush(telemetryData);
                return Promise.resolve(undefined);
            }
        }
    };
    /**
     * Update the cache in the server.
     */
    MySiteCache.prototype._updateCacheInServer = function (cacheKey, cacheValue, cacheOptions, cacheHash) {
        var _this = this;
        var _a, _b, _c;
        var altTitleValue = cacheOptions
            ? JSON.stringify(cacheOptions.altTitle)
            : undefined;
        var qosSuffix = "_updateCache";
        var telemetryData = {
            qos: new _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__["_QosMonitor"](QOS_PREFIX + qosSuffix),
            extraProperties: {
                alias: (_a = cacheOptions) === null || _a === void 0 ? void 0 : _a.alias,
                AltTitle: (_b = cacheOptions) === null || _b === void 0 ? void 0 : _b.altTitle,
                Id: cacheKey
            }
        };
        // If the map contains a local cache entry, let's update the server cache item.
        if (this._cacheItemsMap.has(cacheKey)) {
            var cacheItem = this._cacheItemsMap.get(cacheKey);
            var cacheItemId = (cacheItem && cacheItem.id) || -1;
            var equalCacheResult = !!cacheItem && cacheItem.result === cacheValue;
            var considerHash = !!cacheHash && cacheHash === ((_c = cacheItem) === null || _c === void 0 ? void 0 : _c.hash) && equalCacheResult;
            var ignoreHash = !cacheHash && equalCacheResult;
            var cacheItemUpToDate = ignoreHash || considerHash;
            // If the cachedItem is up to date, no need to update
            if (cacheItemUpToDate) {
                this._logCacheUpdateNoOP(telemetryData);
                return Promise.resolve(true);
                // Else, we need to update the cachedItem in the server
            }
            else {
                // Update the existing item in remote
                telemetryData.extraProperties[CACHE_ENTRY_EXISTED] = true;
                return this._updateCacheItem(cacheKey, cacheValue, cacheItemId, altTitleValue)
                    .then(function () {
                    _this._logCacheUpdateSuccess(telemetryData);
                    return Promise.resolve(true);
                })
                    .catch(function (e) {
                    _this._logCacheUpdateFailure(telemetryData, e);
                    return Promise.resolve(false);
                });
            }
            // Else this must be a new entry, let's create the server cache item.
        }
        else {
            telemetryData.extraProperties[CACHE_ENTRY_EXISTED] = false;
            return this._createCacheItem(cacheKey, cacheValue, altTitleValue)
                .then(function () {
                _this._logCacheUpdateSuccess(telemetryData);
                return Promise.resolve(true);
            })
                .catch(function (e) {
                _this._logCacheUpdateFailure(telemetryData, e);
                return Promise.resolve(false);
            });
        }
    };
    /**
     * Update an item.
     */
    MySiteCache.prototype._updateCacheItem = function (cacheKey, cacheValue, cacheItemId, altTitle) {
        var item = {
            CacheValue: cacheValue || '',
            CacheValueHash: '',
            ListItemId: cacheItemId,
            ListItemUniqueId: undefined,
            CacheVersion: TIERED_CACHE_VERSION,
            AltTitle: altTitle,
            CacheKey: cacheKey,
            ModifiedTimeUtc: undefined
        };
        this._addItemToBeUpdated(item);
        return Promise.resolve();
    };
    /**
     * Create an item.
     */
    MySiteCache.prototype._createCacheItem = function (cacheKey, cacheValue, altTitle) {
        var item = {
            CacheValue: cacheValue || '',
            CacheValueHash: '',
            ListItemId: undefined,
            ListItemUniqueId: undefined,
            CacheVersion: undefined,
            AltTitle: altTitle,
            CacheKey: cacheKey,
            ModifiedTimeUtc: undefined
        };
        return this._createPersonalCacheItem(item);
    };
    /**
     * Create a PersonalCacheItem.
     */
    MySiteCache.prototype._createPersonalCacheItem = function (item) {
        var _this = this;
        var url = _MySiteCacheUtilities__WEBPACK_IMPORTED_MODULE_6__["MySiteCacheUtilities"].getPersonalCacheItemCreateUrl(this._currentWebAbsoluteUrl);
        var body = _MySiteCacheUtilities__WEBPACK_IMPORTED_MODULE_6__["MySiteCacheUtilities"].getCreatePersonalCacheItemBody(this._getListRelativeFolderPath(), [item], this._mySiteAbsoluteUrl);
        // this creates a PersonalCacheItem, which is basically a placeholder.
        return (this._spHttpClient
            .post(url, _microsoft_sp_http__WEBPACK_IMPORTED_MODULE_3__["SPHttpClient"].configurations.v1, {
            body: JSON.stringify(body),
            headers: { 'OData-Version': '3.0' }
        })
            .then(_MySiteCacheUtilities__WEBPACK_IMPORTED_MODULE_6__["MySiteCacheUtilities"].checkResponseStatus
        // update the created PersonalCacheItem (placeholders) with data.
        )
            .then(function (response) { return response.json(); })
            // tslint:disable-next-line:no-any
            .then(function (data) {
            _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["Validate"].isNotNullOrUndefined(data, 'data');
            // Synthesize a complete PersonalCacheItem locally
            // using the returned Placeholder data (data) and the data
            // we want to save to it (item).
            var personalCacheItem = {
                CacheValue: item.CacheValue,
                CacheValueHash: item.CacheValueHash,
                ListItemId: data.value[0][PERSONALCACHEITEM_ID],
                ListItemUniqueId: data.value[0][PERSONALCACHEITEM_UNIQUEID],
                CacheVersion: TIERED_CACHE_VERSION,
                AltTitle: item.AltTitle,
                CacheKey: item.CacheKey,
                ModifiedTimeUtc: data.value[0][PERSONALCACHEITEM_MODIFIED]
            };
            // update the local map of cache items
            _this._createLocalItems([personalCacheItem]);
            // next step is to update the created PersonalCacheItem (placeholders) with data.
            _this._addItemToBeUpdated(personalCacheItem);
        }));
    };
    MySiteCache.prototype._tryInitializeSynchronously = function () {
        var qosMonitor = this._logCacheInitializationStart();
        if (this._pageContext) {
            this._getPrefetchedPageContextProperties(this._pageContext.legacyPageContext);
            var initialized = this._tryInitializeFromPage();
            initialized
                ? this._logCacheInitializationSuccess(qosMonitor)
                : this._logCacheInitializationExpectedFailure(qosMonitor);
        }
        else {
            this._logCacheInitializationUnexpectedFailure(qosMonitor);
        }
    };
    /**
     * Get the flushed Page Context Properties.
     */
    // tslint:disable-next-line:no-any
    MySiteCache.prototype._getPrefetchedPageContextProperties = function (data) {
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["Validate"].isNotNullOrUndefined(data, 'data');
        this._currentWebAbsoluteUrl = data.webAbsoluteUrl || this._pageContext.site.absoluteUrl;
    };
    MySiteCache.prototype._tryInitializeFromPage = function () {
        if (this._hasFlushCompleted) {
            return true;
        }
        else if (window[PREFETCHED_WEBPARTDATA]) {
            this._getDataProperties(window[PREFETCHED_WEBPARTDATA].Properties);
            this._locallyUpdateRemoteCacheData(window[PREFETCHED_WEBPARTDATA].Items);
            this._hasFlushCompleted = true;
        }
        return this._hasFlushCompleted;
    };
    /**
     * Get the flushed Data Properties.
     */
    // tslint:disable-next-line:no-any
    MySiteCache.prototype._getDataProperties = function (data) {
        if (!data) {
            return;
        }
        this._mySiteAbsoluteUrl = data.MySiteUrl;
        this._currentPageCacheFolderKey = data.PageCacheFolderKey;
        this._cachePath = data.WebPartCachePath;
    };
    MySiteCache.prototype._getListRelativeFolderPath = function () {
        var _a;
        if ((_a = this._cacheConfiguration) === null || _a === void 0 ? void 0 : _a.folderPath) {
            return this._cacheConfiguration.folderPath;
        }
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["Validate"].isNonemptyString(this._cachePath, 'this._cachePath');
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["Validate"].isNonemptyString(this._currentPageCacheFolderKey, 'this._currentPageCacheFolderKey');
        var cacheFolderName = _MySiteCacheUtilities__WEBPACK_IMPORTED_MODULE_6__["MySiteCacheUtilities"].getUrlLastSegment(this._cachePath);
        return cacheFolderName + "/" + this._currentPageCacheFolderKey;
    };
    /**
     * Saves the data into the local cache.
     */
    // tslint:disable-next-line:no-any
    MySiteCache.prototype._locallyUpdateRemoteCacheData = function (data) {
        var _this = this;
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["Validate"].isNotNullOrUndefined(data, 'data');
        Object.keys(data).forEach(function (key) {
            var cacheItem = {
                altTitle: data[key].AltTitle,
                cacheKey: key,
                result: data[key].Value,
                hash: data[key].HashCode,
                id: Number(data[key].ID),
                uniqueId: _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["Guid"].parse(data[key].UniqueId),
                modified: _MySiteCacheUtilities__WEBPACK_IMPORTED_MODULE_6__["MySiteCacheUtilities"].dateTimeStringToJsDate(data[key].Modified),
                cacheVersion: data[key].CacheVersion
            };
            // This will allow backward and forward compatibility when flights are
            // disabled or re-enabled
            if (cacheItem.cacheVersion === TIERED_DISABLED_CACHE_VERSION ||
                cacheItem.cacheVersion === TIERED_CACHE_VERSION) {
                var altTitle = void 0;
                var componentId = '';
                try {
                    altTitle = JSON.parse(data[key].AltTitle);
                    componentId = altTitle.id;
                }
                catch (e) {
                    componentId = data[key].AltTitle;
                }
                _this._cacheItemVersionMap.set(componentId, cacheItem.cacheVersion);
            }
            _this._cacheItemVersionMap.set(key, cacheItem.cacheVersion);
            _this._cacheItemsMap.set(key, cacheItem);
        });
    };
    /**
     * Saves the data into the local cache.
     */
    MySiteCache.prototype._createLocalItems = function (items) {
        var _this = this;
        items.forEach(function (item) {
            if (!!item.CacheKey && !_this._cacheItemsMap.has(item.CacheKey)) {
                // Add a new item from an item creation response.
                var newCacheItem = {
                    altTitle: item.AltTitle,
                    cacheKey: item.CacheKey,
                    result: item.CacheValue,
                    hash: item.CacheValueHash,
                    id: item.ListItemId,
                    modified: item.ModifiedTimeUtc,
                    cacheVersion: item.CacheVersion
                };
                _this._cacheItemsMap.set(item.CacheKey, newCacheItem);
            }
        });
        this._logCacheItemSize();
    };
    MySiteCache.prototype._getCachedItem = function (cacheKey) {
        return this._cacheItemsMap.get(cacheKey);
    };
    /**
     * Adds an item to be updated remotely
     * @param item The item to be updated
     */
    MySiteCache.prototype._addItemToBeUpdated = function (item) {
        if (MySiteCache._itemsToDeferUpdate.has(this._currentWebAbsoluteUrl)) {
            var cachedItems = MySiteCache._itemsToDeferUpdate.get(this._currentWebAbsoluteUrl);
            var index = Object(_microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_8__["findIndex"])(cachedItems, function (cache) { return item.CacheKey === cache.CacheKey; });
            if (index >= 0) {
                cachedItems[index] = item;
            }
            else {
                cachedItems.push(item);
            }
        }
        else {
            MySiteCache._itemsToDeferUpdate.set(this._currentWebAbsoluteUrl, [item]);
        }
    };
    MySiteCache.prototype._updateLocalItems = function (items) {
        var _this = this;
        items.forEach(function (item) {
            if (!!item.CacheKey && _this._cacheItemsMap.has(item.CacheKey)) {
                var existingCacheItem = _this._getCachedItem(item.CacheKey);
                existingCacheItem.result = item.CacheValue;
                existingCacheItem.hash = item.CacheValueHash;
                existingCacheItem.cacheVersion = item.CacheVersion;
            }
        });
        this._logCacheItemSize();
    };
    MySiteCache.prototype._logCacheInitializationStart = function () {
        var qosSuffix = "_initialize";
        return new _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__["_QosMonitor"](QOS_PREFIX + qosSuffix);
    };
    MySiteCache.prototype._logCacheInitializationSuccess = function (qos) {
        _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_5__["_PerformanceLogger"].markComponent(PERF_PREFIX, 'SyncFlushCompleted');
        this._hasInitializedSynchronously = true;
        qos.writeSuccess();
    };
    MySiteCache.prototype._logCacheInitializationExpectedFailure = function (qos) {
        _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_5__["_PerformanceLogger"].markComponent(PERF_PREFIX, 'DelayedFlush');
        var errorMessage = "Page has not yet gotten the LKG flush.";
        _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__["_TraceLogger"].logError(MySiteCache._logSource, new Error(), errorMessage);
        qos.writeExpectedFailure('DelayedFlush', new Error(errorMessage));
    };
    MySiteCache.prototype._logCacheInitializationUnexpectedFailure = function (qos) {
        _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_5__["_PerformanceLogger"].markComponent(PERF_PREFIX, 'SyncMissingContextInfo');
        var errorMessage = "Page is missing _spPageContextInfo.";
        _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__["_TraceLogger"].logError(MySiteCache._logSource, new Error(), errorMessage);
        qos.writeUnexpectedFailure("SPPageContextInfoError", new Error(errorMessage));
    };
    MySiteCache.prototype._logCacheItemSize = function () {
        _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__["_TraceLogger"].logVerbose(MySiteCache._logSource, "_cacheItemsMap Size: " + this._cacheItemsMap.size + ".");
    };
    MySiteCache.prototype._logCacheStart = function (cacheKey, eventSuffix, alias, id) {
        var eventName = QOS_PREFIX + eventSuffix;
        _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__["_TraceLogger"].logVerbose(MySiteCache._logSource, "CacheKey: " + cacheKey + ", Page: " + this._currentPageCacheFolderKey + ", Environment: " + _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["Environment"].type + ".");
        _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__["_EngagementLogger"].logEvent(eventName);
        _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_5__["_PerformanceLogger"].markComponent(cacheKey, 'CacheStart');
        return {
            qos: new _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__["_QosMonitor"](eventName),
            extraProperties: {
                alias: alias,
                ComponentId: id || '',
                Id: cacheKey,
                CacheMiss: false,
                LateFlush: false
            }
        };
    };
    MySiteCache.prototype._logCacheUpdateNoOP = function (telemetryData) {
        var qosUpdateCacheError = 'NoOp';
        telemetryData.qos.writeExpectedFailure(qosUpdateCacheError, 
        /*ex*/ undefined, telemetryData.extraProperties);
    };
    MySiteCache.prototype._logCacheUpdateSuccess = function (telemetryData) {
        telemetryData.qos.writeSuccess(telemetryData.extraProperties);
    };
    MySiteCache.prototype._logCacheUpdateFailure = function (telemetryData, e) {
        telemetryData.qos.writeUnexpectedFailure('UpdateCacheInServer', e, telemetryData.extraProperties);
    };
    MySiteCache.prototype._logCacheHit = function (telemetryData, cacheKey) {
        this._setLKGOnTimeState(true, 'true');
        _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__["_TraceLogger"].logVerbose(MySiteCache._logSource, "CacheHit: Returning cached item for " + cacheKey + ".");
        _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_5__["_PerformanceLogger"].markComponent(cacheKey, CACHE_HIT);
        telemetryData.qos.writeSuccess(telemetryData.extraProperties);
    };
    MySiteCache.prototype._logCacheMiss = function (cacheKey) {
        this._setLKGOnTimeState(false, 'false');
        _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__["_TraceLogger"].logVerbose(MySiteCache._logSource, "Cache Miss for " + cacheKey);
        _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__["_EngagementLogger"].logEvent(QOS_PREFIX + CACHE_MISS);
        _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_5__["_PerformanceLogger"].markComponent(cacheKey, CACHE_MISS);
    };
    MySiteCache.prototype._logLateFlush = function (cacheKey) {
        this._setLKGOnTimeState(false, 'false');
        _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__["_TraceLogger"].logVerbose(MySiteCache._logSource, "Racing between late flush and data fetch for " + cacheKey);
        _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_5__["_PerformanceLogger"].markComponent(cacheKey, LATE_FLUSH);
    };
    MySiteCache.prototype._logCacheMissAfterFlush = function (telemetryData) {
        var message = "Cache not available for " + telemetryData.extraProperties[ID] + ", " + telemetryData.extraProperties[COMPONENT_ID];
        _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__["_TraceLogger"].logVerbose(MySiteCache._logSource, message);
        _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__["_EngagementLogger"].logEvent(QOS_PREFIX + CACHE_MISS_AFTER_LATE_FLUSH);
        telemetryData.qos.writeExpectedFailure(CACHE_MISS_AFTER_LATE_FLUSH, new Error(message), telemetryData.extraProperties);
    };
    MySiteCache.prototype._setLKGOnTimeState = function (onTime, state) {
        if (this._cacheOnTime === undefined) {
            this._cacheOnTime = onTime;
            _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_5__["_PerformanceLogger"].setPerformanceProperty(LKG_ON_TIME, state);
        }
    };
    MySiteCache._itemsToDeferUpdate = new Map();
    MySiteCache._logSource = _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__["_LogSource"].create('MySiteCache');
    return MySiteCache;
}());



/***/ }),

/***/ "KL1q":
/*!***********************************************************!*\
  !*** external "@microsoft/office-ui-fabric-react-bundle" ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_KL1q__;

/***/ }),

/***/ "L3gU":
/*!***********************************!*\
  !*** ./lib/MySiteCacheManager.js ***!
  \***********************************/
/*! exports provided: MySiteCacheManager, mySiteCacheManagerServiceKey */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MySiteCacheManager", function() { return MySiteCacheManager; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mySiteCacheManagerServiceKey", function() { return mySiteCacheManagerServiceKey; });
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/sp-diagnostics */ "ut3N");
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _microsoft_sp_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @microsoft/sp-http */ "vlQI");
/* harmony import */ var _microsoft_sp_http__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_http__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ms/sp-telemetry */ "2q6Q");
/* harmony import */ var _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _MySiteCache__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MySiteCache */ "DWIN");
/* harmony import */ var _MySiteCacheUtilities__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./MySiteCacheUtilities */ "6VeD");
/**
 * @file MySiteCacheManager.ts
 * @copyright Microsoft Corporation. All rights reserved.
 *
 * @remark The MySite Cache Manager.
 */






var LEGACY_CACHE_VERSION = '1.0';
var TIERED_CACHE_VERSION = '2.0';
var TIERED_DISABLED_CACHE_VERSION = '1.5';
var PAGE_DESERIALIZATION_EVENT_NAME = 'pageDeserializationFinished';
var RESET_CACHE_MANAGER_EVENT_NAME = 'resetCacheManager';
var PREFETCHED_WEBPARTDATA = "_spWebPartData";
var WEBPART_PREFETCH_COMPLETE = "_spWebPartDataLoaded";
var QOS_PREFIX = "MySiteCacheManager.";
var MySiteCacheManager = /** @class */ (function () {
    function MySiteCacheManager(serviceScope) {
        var _this = this;
        this._isDisposed = false;
        this._getFlushedServerData = function () {
            return Promise.resolve(_this._mySiteCache.cacheItemMap);
        };
        this._getCachedData = function (cacheKey, cacheOptions) {
            _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Validate"].isNotNullOrUndefined(cacheKey, 'cacheKey');
            var id = cacheOptions.id;
            var key = cacheKey;
            // This code is useful for backward compatibility with deprecated WebPart Cache model
            // as it allows to return the legacy cached data and be used as part of Tiered Cache Model
            // TODO: Remove upon graduating Tiered caching flights.
            // VSO: https://onedrive.visualstudio.com/DefaultCollection/WEX!/_workitems/edit/824832
            if (id) {
                var tieredKeyCacheVersion = _this.getCacheItemVersion(key);
                var cacheVersion = _this.getCacheItemVersion(id.toString());
                if (!tieredKeyCacheVersion && (!cacheVersion || cacheVersion === LEGACY_CACHE_VERSION)) {
                    key = id.toString();
                }
            }
            return _this._mySiteCache._internalAdvancedGetCachedData(key, cacheOptions);
        };
        this._executeWhenFlushEnsured = function (callback) {
            var args = []; // tslint:disable-line:no-any
            for (var _i = 1 // tslint:disable-line:no-any
            ; _i < arguments.length // tslint:disable-line:no-any
            ; _i++ // tslint:disable-line:no-any
            ) {
                args[_i - 1] = arguments[_i]; // tslint:disable-line:no-any
            }
            var ensure = _this._mySiteCache.hasFlushCompleted
                ? Promise.resolve()
                : _this._mySiteCache.initializeFromLateFlush;
            return ensure
                .then(function () {
                return callback.apply(_this, args);
            })
                .catch(function (error) { return error; });
        };
        /**
         * Deletes cache entries that should not be there. Either because older webparts
         * have been deleted or because data from other pages was saved into this page's cache;
         * which was caused by not reseting the cache provider when there is page to page navigation.
         *
         * This will also delete entries from legacy caching models.
         */
        this._deleteEntriesNotMatched = function (instanceIds) {
            if (!window[PREFETCHED_WEBPARTDATA]) {
                return;
            }
            var prefetchedData = new Map();
            _this._mySiteCache.cacheItemMap.forEach(function (mySiteCacheItem) {
                prefetchedData.set(mySiteCacheItem.cacheKey, _this._mapMySiteCacheItemToPersonalItem(mySiteCacheItem));
            });
            var allKeys = Array.from(prefetchedData.keys());
            if (allKeys.length === 0) {
                return;
            }
            var qosSuffix = 'deleteExtraCacheEntries';
            _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_3__["_PerformanceLogger"].startMarkForComponent(qosSuffix);
            var qos = new _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__["_QosMonitor"](QOS_PREFIX + qosSuffix);
            var legacyItemIDs = allKeys.filter(function (key) {
                return !_this._isAccurateDeleteFilterKSActivated
                    ? prefetchedData.get(key).CacheVersion !== TIERED_CACHE_VERSION &&
                        prefetchedData.get(key).CacheVersion !== TIERED_DISABLED_CACHE_VERSION
                    : !_this._getAltTitle(prefetchedData.get(key), true);
            });
            var tieredItemIDs = allKeys.filter(function (key) {
                return !_this._isAccurateDeleteFilterKSActivated
                    ? prefetchedData.get(key).CacheVersion !== LEGACY_CACHE_VERSION
                    : _this._getAltTitle(prefetchedData.get(key), true);
            });
            // Delete all legacy items that are no longer on the page
            var itemsToDelete = legacyItemIDs.filter(function (legacyId) { return instanceIds.indexOf(legacyId) < 0; });
            // Also delete Tiered cache items that are no longer on the page
            // Let's not delete Tiered cache items that do not have AltTitle
            // as those would be placeholder items waiting for an update from _writeCache
            if (!_this._isAccurateDeleteFilterKSActivated) {
                tieredItemIDs.forEach(function (tieredItem) {
                    var altTitle = _this._getAltTitle(prefetchedData.get(tieredItem), true);
                    if (!!altTitle && instanceIds.indexOf(altTitle) < 0) {
                        itemsToDelete.push(tieredItem);
                    }
                });
            }
            else {
                tieredItemIDs.forEach(function (tieredItem) {
                    if (instanceIds.indexOf(_this._getAltTitle(prefetchedData.get(tieredItem), true)) < 0) {
                        itemsToDelete.push(tieredItem);
                    }
                });
            }
            if (itemsToDelete.length === 0) {
                qos.writeSuccess(_this._getLogObject(0));
                _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__["_TraceLogger"].logVerbose(_this._logSource, "No extra cache entries to clear");
                return;
            }
            _this._deleteMySiteCacheEntries(itemsToDelete, qos, qosSuffix);
        };
        this._deleteMySiteCacheAdvanced = function (instanceIds) {
            if (!window[PREFETCHED_WEBPARTDATA]) {
                return;
            }
            var prefetchedData = new Map();
            _this._mySiteCache.cacheItemMap.forEach(function (mySiteCacheItem) {
                prefetchedData.set(mySiteCacheItem.cacheKey, _this._mapMySiteCacheItemToPersonalItem(mySiteCacheItem));
            });
            var allKeys = Array.from(prefetchedData.keys());
            if (allKeys.length === 0) {
                return;
            }
            var qosSuffix = 'deleteCacheAdvanced';
            _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_3__["_PerformanceLogger"].startMarkForComponent(qosSuffix);
            var qos = new _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__["_QosMonitor"](QOS_PREFIX + qosSuffix);
            var itemsToDelete = [];
            allKeys.forEach(function (cacheKey) {
                var cachedItem = prefetchedData.get(cacheKey);
                var altTitle = cachedItem && _this._getAltTitle(cachedItem);
                // Delete if it matches with the item cacheKey
                if (instanceIds.indexOf(cacheKey) > 0) {
                    itemsToDelete.push(cacheKey);
                }
                else {
                    // Delete if it matches with the item componentId or url
                    instanceIds.forEach(function (keyToDelete) {
                        if (altTitle && (altTitle.id === keyToDelete || altTitle.url === keyToDelete)) {
                            itemsToDelete.push(cacheKey);
                        }
                        else if (cachedItem && cachedItem.AltTitle === keyToDelete) {
                            itemsToDelete.push(cacheKey);
                        }
                    });
                }
            });
            if (itemsToDelete.length === 0) {
                qos.writeSuccess(_this._getLogObject(0));
                _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__["_TraceLogger"].logVerbose(_this._logSource, "No extra cache entries to clear");
                return;
            }
            _this._deleteMySiteCacheEntries(itemsToDelete, qos, qosSuffix);
        };
        this._mySiteCache = new _MySiteCache__WEBPACK_IMPORTED_MODULE_4__["MySiteCache"](serviceScope);
        // Un-comment below to turn on MySiteCacheWithAPIRace
        // this._mySiteCacheRace = new MySiteCacheWithAPIRace(this._mySiteCache);
        this._logSource = _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__["_LogSource"].create('MySiteCacheManager');
        this._instanceId = _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Guid"].newGuid().toString();
        this._serviceScope = serviceScope;
        serviceScope.whenFinished(function () {
            _this._spHttpClient = serviceScope.consume(_microsoft_sp_http__WEBPACK_IMPORTED_MODULE_2__["SPHttpClient"].serviceKey);
        });
        this._isAccurateDeleteFilterKSActivated = MySiteCacheManager._isAccurateDeleteFilterKSActivated();
        // Register sticky event listener for deleting extra cache entries
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPEventManager"].instance.registerEvent(PAGE_DESERIALIZATION_EVENT_NAME, this, this.deleteUnmatchedCacheEntries);
        // Register sticky event listener for reseting cache data provider
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPEventManager"].instance.registerEvent(RESET_CACHE_MANAGER_EVENT_NAME, this, this.initializeCacheProvider);
    }
    MySiteCacheManager._isAccurateDeleteFilterKSActivated = function () {
        return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPKillSwitch"].isActivated('17cc57e4-d30d-4028-b05a-72fa8329844f' /*'09/10/2020', 'WEX_isAccurateDeleteFilter' */);
    };
    Object.defineProperty(MySiteCacheManager.prototype, "instanceId", {
        get: function () {
            return this._instanceId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MySiteCacheManager.prototype, "componentId", {
        get: function () {
            return 'bbab7f95-22e9-42c9-8513-1794274b8284';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MySiteCacheManager.prototype, "isDisposed", {
        get: function () {
            return this._isDisposed;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Set extra configuration params for the data requests.
     * @param config
     */
    MySiteCacheManager.prototype.setCacheConfiguration = function (config) {
        this._mySiteCache.defaultCacheConfiguration = config;
    };
    /**
     * Deletes the entries for the privided keys.
     * @param cacheKeys
     */
    MySiteCacheManager.prototype.deleteCacheEntries = function (cacheKeys) {
        this._executeWhenFlushEnsured(this._deleteMySiteCacheAdvanced, cacheKeys).catch(function (error) {
            throw error;
        });
    };
    MySiteCacheManager.prototype.dispose = function () {
        if (!this._isDisposed) {
            this._isDisposed = true;
        }
    };
    MySiteCacheManager.prototype.initializeCacheProvider = function (pageUniqueId) {
        if (window[PREFETCHED_WEBPARTDATA] &&
            window[PREFETCHED_WEBPARTDATA].Properties &&
            window[PREFETCHED_WEBPARTDATA].Properties.PageCacheFolderKey &&
            pageUniqueId !== window[PREFETCHED_WEBPARTDATA].Properties.PageCacheFolderKey) {
            // invalidate cache for current page
            window[PREFETCHED_WEBPARTDATA] = undefined;
            window[WEBPART_PREFETCH_COMPLETE] = undefined;
        }
        // initialize cache provider
        this._mySiteCache = new _MySiteCache__WEBPACK_IMPORTED_MODULE_4__["MySiteCache"](this._serviceScope);
        // Un-comment below to turn on MySiteCacheWithAPIRace
        // this._mySiteCacheRace = new MySiteCacheWithAPIRace(this._mySiteCache);
        _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__["_EngagementLogger"].logEvent('MySiteCacheDataManager.InPageNavTriggered');
    };
    /**
     * Returns cached data for specified Cache Key or undefined.
     * @param cacheKey - The cacheKey.
     * @param cacheOptions - The cache options.
     */
    MySiteCacheManager.prototype.getCachedData = function (cacheKey, cacheOptions) {
        return this._executeWhenFlushEnsured(this._getCachedData, cacheKey, cacheOptions);
    };
    // Un-comment below to turn on MySiteCacheWithAPIRace
    /*
    public requestAPIRaceCacheData<P>(requestConfig: IGetMySiteCachedDataProps<P>): Promise<ICacheResult<P>> {
      return this._executeWhenFlushEnsured<ICacheResult<P>>(
        this._mySiteCacheRace.requestAPIRaceCacheData,
        requestConfig
      );
    }
    */
    /**
     * Caches the Cache value on the specified Cache Key.
     * @param cacheKey - The cacheKey.
     * @param cacheValue - Data to serialize and cache, or undefined if cache should be cleared.
     * @param cacheOptions - The cache options.
     */
    MySiteCacheManager.prototype.setCachedData = function (cacheKey, cacheValue, cacheOptions) {
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Validate"].isNotNullOrUndefined(cacheKey, 'cacheKey');
        return this._mySiteCache._internalAdvancedSetCacheData(cacheKey, JSON.stringify(cacheValue), cacheOptions);
    };
    MySiteCacheManager.prototype.getCachedDataByFolder = function (listRelativeFolderPath) {
        var url = _MySiteCacheUtilities__WEBPACK_IMPORTED_MODULE_5__["MySiteCacheUtilities"].getPersonalCacheItemCreateUrl(this._mySiteCache.currentWebAbsoluteUrl);
        var body = _MySiteCacheUtilities__WEBPACK_IMPORTED_MODULE_5__["MySiteCacheUtilities"].getReadPersonalCacheItemBody(listRelativeFolderPath, [], this._mySiteCache.mySiteAbsoluteUrl);
        return _MySiteCacheUtilities__WEBPACK_IMPORTED_MODULE_5__["MySiteCacheUtilities"].post(this._spHttpClient, url, body, _MySiteCacheUtilities__WEBPACK_IMPORTED_MODULE_5__["MySiteCacheUtilities"].checkResponseStatus).then(function (response) { return response.json(); });
    };
    MySiteCacheManager.prototype.getCacheItemVersion = function (cacheKey) {
        return this._mySiteCache.getCacheItemVersion(cacheKey);
    };
    /**
     * Returns a map of the flushed server data when flush is complete.
     */
    MySiteCacheManager.prototype.getFlushedServerData = function () {
        return this._executeWhenFlushEnsured(this._getFlushedServerData);
    };
    MySiteCacheManager.prototype.hasFlushCompleted = function () {
        return this._mySiteCache.hasFlushCompleted;
    };
    MySiteCacheManager.prototype.deleteUnmatchedCacheEntries = function (instanceIds) {
        this._executeWhenFlushEnsured(this._deleteEntriesNotMatched, instanceIds).catch(function (error) {
            throw error;
        });
    };
    MySiteCacheManager.prototype._deleteMySiteCacheEntries = function (itemsToDelete, qos, qosSuffix) {
        var _this = this;
        var url = _MySiteCacheUtilities__WEBPACK_IMPORTED_MODULE_5__["MySiteCacheUtilities"].getPersonalCacheItemCreateUrl(this._mySiteCache.currentWebAbsoluteUrl);
        var body = _MySiteCacheUtilities__WEBPACK_IMPORTED_MODULE_5__["MySiteCacheUtilities"].getReadPersonalCacheItemBody(this._mySiteCache.currentListRelativeFolderPath, itemsToDelete, this._mySiteCache.mySiteAbsoluteUrl);
        _MySiteCacheUtilities__WEBPACK_IMPORTED_MODULE_5__["MySiteCacheUtilities"].post(this._spHttpClient, url, body, _MySiteCacheUtilities__WEBPACK_IMPORTED_MODULE_5__["MySiteCacheUtilities"].checkResponseStatus)
            .then(function (response) { return response.json(); })
            .then(function (items) {
            var personalCacheItemsToDelete = items.value;
            // Temporarily remove all entries from the remote cache.
            // All entries will be re-generated by Update methods.
            var deleteUrl = _MySiteCacheUtilities__WEBPACK_IMPORTED_MODULE_5__["MySiteCacheUtilities"].getPersonalCacheItemDeleteUrl(_this._mySiteCache.currentWebAbsoluteUrl);
            var deleteBody = _MySiteCacheUtilities__WEBPACK_IMPORTED_MODULE_5__["MySiteCacheUtilities"].getUpdatePersonalCacheItemsBody(personalCacheItemsToDelete, _this._mySiteCache.mySiteAbsoluteUrl, 
            /* isDelete */ true);
            return _MySiteCacheUtilities__WEBPACK_IMPORTED_MODULE_5__["MySiteCacheUtilities"].post(_this._spHttpClient, deleteUrl, deleteBody, _MySiteCacheUtilities__WEBPACK_IMPORTED_MODULE_5__["MySiteCacheUtilities"].checkResponseStatus);
        })
            .then(function (response) { return response.json(); })
            .then(function (itemsDeleted) {
            qos.writeSuccess(_this._getLogObject(itemsToDelete.length));
            _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_3__["_PerformanceLogger"].endMarkForComponent(qosSuffix);
            _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__["_TraceLogger"].logVerbose(_this._logSource, "Cleared " + itemsDeleted.length + " entries");
        })
            .catch(function (error) {
            qos.writeUnexpectedFailure('DeleteExtraCacheError', error);
            _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_3__["_PerformanceLogger"].endMarkForComponent(qosSuffix);
        });
    };
    MySiteCacheManager.prototype._getAltTitle = function (cachedItem, getComponentId) {
        var altTitle;
        var altTitleField = cachedItem && cachedItem.AltTitle;
        if (altTitleField) {
            try {
                altTitle = JSON.parse(altTitleField);
                altTitleField = altTitle.id;
            }
            catch (e) {
                return getComponentId ? altTitleField : undefined;
            }
        }
        return getComponentId ? altTitleField : altTitle;
    };
    MySiteCacheManager.prototype._getLogObject = function (extraItemCount) {
        return { extraItemCount: extraItemCount };
    };
    MySiteCacheManager.prototype._mapMySiteCacheItemToPersonalItem = function (mySiteCacheItem) {
        var personalCacheItem = {
            AltTitle: mySiteCacheItem.altTitle,
            CacheKey: mySiteCacheItem.cacheKey,
            CacheValue: mySiteCacheItem.result,
            CacheValueHash: mySiteCacheItem.hash,
            CacheVersion: mySiteCacheItem.cacheVersion,
            ListItemId: mySiteCacheItem.id,
            ListItemUniqueId: mySiteCacheItem.uniqueId,
            ModifiedTimeUtc: mySiteCacheItem.modified
        };
        return personalCacheItem;
    };
    return MySiteCacheManager;
}());

/**
 * Gets the service key.
 *
 * @internal
 */
var mySiteCacheManagerServiceKey = _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["ServiceKey"].create('sp-mysitecache:MySiteCacheManager', MySiteCacheManager);


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

/***/ "X+PM":
/*!*********************************************!*\
  !*** external "@microsoft/sp-page-context" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_X_PM__;

/***/ }),

/***/ "dVDx":
/*!************************!*\
  !*** ./lib/Flights.js ***!
  \************************/
/*! exports provided: isPersonalCacheFlightEnabled */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPersonalCacheFlightEnabled", function() { return isPersonalCacheFlightEnabled; });
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__);

// tslint:disable-next-line: export-name
function isPersonalCacheFlightEnabled() {
    return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPFlight"].isEnabled(1671 /* WexSPHomePersonalCacheClient  */);
}


/***/ }),

/***/ "mwqp":
/*!**********************!*\
  !*** ./lib/index.js ***!
  \**********************/
/*! exports provided: MySiteCacheManager, mySiteCacheManagerServiceKey */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MySiteCacheManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MySiteCacheManager */ "L3gU");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MySiteCacheManager", function() { return _MySiteCacheManager__WEBPACK_IMPORTED_MODULE_0__["MySiteCacheManager"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mySiteCacheManagerServiceKey", function() { return _MySiteCacheManager__WEBPACK_IMPORTED_MODULE_0__["mySiteCacheManagerServiceKey"]; });




/***/ }),

/***/ "ut3N":
/*!********************************************!*\
  !*** external "@microsoft/sp-diagnostics" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_ut3N__;

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

/***/ })

/******/ })});;
//# sourceMappingURL=sp-mysitecache_none.js.map