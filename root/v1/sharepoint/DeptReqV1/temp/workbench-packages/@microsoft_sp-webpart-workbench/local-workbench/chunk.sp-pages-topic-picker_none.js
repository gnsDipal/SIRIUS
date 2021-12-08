(window["webpackJsonp_8404d628_4817_4b3a_883e_1c5a4d07892e_1_11_0"] = window["webpackJsonp_8404d628_4817_4b3a_883e_1c5a4d07892e_1_11_0"] || []).push([["sp-pages-topic-picker"],{

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

/***/ "R95i":
/*!**********************************************!*\
  !*** ./lib/rte/ckeditor/TopicPicker.scss.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* tslint:disable */
__webpack_require__(/*! ./TopicPicker.css */ "bZJr");
var styles = {};
/* harmony default export */ __webpack_exports__["default"] = (styles);
/* tslint:enable */ 


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

/***/ "bZJr":
/*!******************************************!*\
  !*** ./lib/rte/ckeditor/TopicPicker.css ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../../../common/temp/node_modules/.pnpm/css-loader@3.2.1_webpack@4.44.2/node_modules/css-loader/dist/cjs.js!../../../../../common/temp/node_modules/.pnpm/postcss-loader@3.0.0/node_modules/postcss-loader/src??postcss!./TopicPicker.css */ "v4j7");
var loader = __webpack_require__(/*! @microsoft/load-themed-styles */ "jOlS");

if(typeof content === "string") content = [[module.i, content]];

// add the styles to the DOM
for (var i = 0; i < content.length; i++) loader.loadStyles(content[i][1], true);

if(content.locals) module.exports = content.locals;

/***/ }),

/***/ "bsoG":
/*!*****************************************!*\
  !*** ./lib/rte/ckeditor/TopicPicker.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _microsoft_sp_page_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @microsoft/sp-page-context */ "X+PM");
/* harmony import */ var _microsoft_sp_page_context__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_page_context__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @microsoft/sp-diagnostics */ "ut3N");
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ms_sp_dataproviders__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ms/sp-dataproviders */ "QZHX");
/* harmony import */ var _ms_sp_dataproviders__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ms_sp_dataproviders__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ms/sp-component-utilities */ "hiL/");
/* harmony import */ var _ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ms_sp_a11y__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ms/sp-a11y */ "ytfe");
/* harmony import */ var _ms_sp_a11y__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_ms_sp_a11y__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _ms_sp_safehtml__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ms/sp-safehtml */ "NEVa");
/* harmony import */ var _ms_sp_safehtml__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_ms_sp_safehtml__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _ms_sp_topic_shared__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ms/sp-topic-shared */ "HVbJ");
/* harmony import */ var _ms_sp_topic_shared__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_ms_sp_topic_shared__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var office_ui_fabric_react_lib_Styling__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! office-ui-fabric-react/lib/Styling */ "PL71");
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @microsoft/office-ui-fabric-react-bundle */ "KL1q");
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _microsoft_sp_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @microsoft/sp-http */ "vlQI");
/* harmony import */ var _microsoft_sp_http__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_http__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _ms_sp_dataproviders_lib_dataProviders_common_KMTieredCacheHelper__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ms/sp-dataproviders/lib/dataProviders/common/KMTieredCacheHelper */ "05y5");
/* harmony import */ var _ms_sp_component_utilities_lib_topics_TopicFlightingUtilities__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ms/sp-component-utilities/lib/topics/TopicFlightingUtilities */ "Tpx+");
/* harmony import */ var _common_KillSwitches__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../common/KillSwitches */ "+ORw");
/* harmony import */ var _common_RegexMatch__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../common/RegexMatch */ "k/1b");
/* harmony import */ var _ckeditor_CKTextEditor__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../ckeditor/CKTextEditor */ "Hw4Z");
/* harmony import */ var _baseRte_BaseRte__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../baseRte/BaseRte */ "oubO");
/* harmony import */ var _ckeditor_TopicSuggestions__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../ckeditor/TopicSuggestions */ "x7RT");
/* harmony import */ var _loc_RteStrings_resx__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../loc/RteStrings.resx */ "okC0");
var _loc_RteStrings_resx__WEBPACK_IMPORTED_MODULE_19___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../loc/RteStrings.resx */ "okC0", 1);
/* harmony import */ var _a11y_RteA11y__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../a11y/RteA11y */ "Qyis");
/* harmony import */ var _common_Constants__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../common/Constants */ "R0eD");
/* harmony import */ var _common_Flights__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../common/Flights */ "w4+A");
/**
 * @Copyright (c) Microsoft Corporation.  All rights reserved.
 */
























var TOPIC_PICKER_REGEX = /#(?!\s)((?!(#|\s)).)+$|#$/;
var TOPIC_PICKER_V2_REGEX = /#(?!\s)((?!(#)).)+$|#$/;
var QOS_TAG_PREFIX = 'CSIKM.HashTagging.Render.';
var DEFAULT_QUERY = 'a';
var TopicPicker = /** @class */ (function () {
    function TopicPicker(scope, onClickNewTopicButton) {
        var _this = this;
        this.scope = scope;
        this.onClickNewTopicButton = onClickNewTopicButton;
        this._prevTopicsSuggestions = [];
        /**
         * Used in conjunction with the topic picker regex to fine tune when to show topic picker.
         * See description over regexMatch for more details.
         */
        this._hideTopicPicker = true; // flag set to false when the '#' character has been entered in the editor
        // @todo Hardcoding this for now. Language is english.
        // VSO https://onedrive.visualstudio.com/CSI/_workitems/edit/794727/
        this._LANGUAGE_ID = '1033';
        // Max number of topics and relations to get.
        this._MAX_TOPICS_TO_FETCH = 5;
        this._MAX_RELATIONS_TO_FETCH = 4;
        /**
         * The following describes the expected behavior for when Topic Picker is shown or hidden
         *  1. '#' (zero term) opens the Topic Picker with the default query value 'a'
         *  2. '# ' (#tag immediately followed by a space) closes the picker
         *  3. '#word nextword' (#tag followed immediately by a word, then a space, then another word) will close if there is
         *     no exact match found with the retrieved suggestions. For example '#Windows 1' will remain open if suggested
         *     topics include 'Windows 10' but '#Windows 11' will close the picker if there are no suggestions that start
         *     with exactly 'Windows 11'.
         *  4. {Escape} Esc key closes the picker
         *  5. Once the picker is closed, it won’t appear again until the user inputs the character '#'
         */
        this.regexMatch = function (text, offset) {
            if (!_common_KillSwitches__WEBPACK_IMPORTED_MODULE_14__["default"].topicPickerRegExFix.isActivated()) {
                if (_this._hideTopicPicker) {
                    return undefined;
                }
                var match = _common_RegexMatch__WEBPACK_IMPORTED_MODULE_15__["RegexMatch"].match(TOPIC_PICKER_V2_REGEX, text, offset);
                if (match && !_this._isRenderQosKSActivated) {
                    _this._indexedDBQos = new _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_3__["_QosMonitor"](QOS_TAG_PREFIX + 'IndexedDBCache');
                    _this._serverResponseQos = new _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_3__["_QosMonitor"](QOS_TAG_PREFIX + 'ServerResponse');
                    _this._allUpQos = new _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_3__["_QosMonitor"](_this._qosTagAllUp);
                }
                return match;
            }
            return _common_RegexMatch__WEBPACK_IMPORTED_MODULE_15__["RegexMatch"].match(TOPIC_PICKER_REGEX, text, offset);
        };
        this.suggestionsCallback = function (rte, matchInfo, callback, shouldShowNewTopicButton) {
            var _a, _b;
            var query = !_common_KillSwitches__WEBPACK_IMPORTED_MODULE_14__["default"].topicPickerRegExFix.isActivated()
                ? matchInfo.query.substring(1).trim()
                : '';
            if (!_this._isCachedZeroTermSuggestionKSActivated &&
                query.length === 0 &&
                _this._prevTopicsSuggestions.length > 0) {
                if (!Object(_common_KillSwitches__WEBPACK_IMPORTED_MODULE_14__["isRTENewTopicEntryKSActivated"])()) {
                    if (!shouldShowNewTopicButton) {
                        // Fix new topic button shows up on non-topic-scenario first time
                        _this._prevTopicsSuggestions = _this._prevTopicsSuggestions.filter(function (item) { return item.id !== _common_Constants__WEBPACK_IMPORTED_MODULE_21__["CREATE_NEW_TOPIC_BUTTON_ID"]; });
                    }
                    else {
                        if (!_this._prevTopicsSuggestions.some(function (item) { return item.id === _common_Constants__WEBPACK_IMPORTED_MODULE_21__["CREATE_NEW_TOPIC_BUTTON_ID"]; })) {
                            _this._prevTopicsSuggestions = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(_this._prevTopicsSuggestions, [
                                _ckeditor_TopicSuggestions__WEBPACK_IMPORTED_MODULE_18__["TopicSuggestions"].getTopicSuggestion(_common_Constants__WEBPACK_IMPORTED_MODULE_21__["CREATE_NEW_TOPIC_BUTTON_ID"], _loc_RteStrings_resx__WEBPACK_IMPORTED_MODULE_19__["CreateNewTopic"])
                            ]);
                        }
                    }
                }
                callback(_this._prevTopicsSuggestions);
                if (!Object(_common_KillSwitches__WEBPACK_IMPORTED_MODULE_14__["isTopicPickerRenderQosKSActivated"])()) {
                    (_a = _this._zeroTermQos) === null || _a === void 0 ? void 0 : _a.writeSuccess();
                    (_b = _this._allUpQos) === null || _b === void 0 ? void 0 : _b.writeSuccess();
                }
                _this._updateAutoCompleteElements(query);
            }
            else {
                var queryId_1 = _this._activeQueryId;
                var pageContext = _this.scope.consume(_microsoft_sp_page_context__WEBPACK_IMPORTED_MODULE_2__["PageContext"].serviceKey);
                var topicSuggestionPromise = _ckeditor_TopicSuggestions__WEBPACK_IMPORTED_MODULE_18__["TopicSuggestions"].topicPickerCallback(rte, '', matchInfo, pageContext, callback, shouldShowNewTopicButton);
                if (topicSuggestionPromise) {
                    topicSuggestionPromise
                        .then(function (topicSuggestionResponse) {
                        _this._prevTopicsSuggestions = topicSuggestionResponse.value;
                        _this.updateVisibleState(query, queryId_1, _this._prevTopicsSuggestions, topicSuggestionResponse.isCachedResponse);
                        // this is called once the API call is successful
                        _this._updateAutoCompleteElements(query);
                    })
                        .catch(function (error) {
                        _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_3__["_TraceLogger"].logError(_baseRte_BaseRte__WEBPACK_IMPORTED_MODULE_17__["BaseRte"].logSource, error);
                    });
                }
                // this is called when promise status is pending
                _this._updateAutoCompleteElements(query);
            }
        };
        this.selectedItemHTMLToInsert = function (item) {
            var insertHtml;
            var itemName = item.name;
            // The topic name value in item.name may have additional alternate names appended to it to help with disambiguation.
            // e.g. Connected Energy Platform, CEP
            // Since we don't want to include alternate names in the insertion, use the ISuggestionTopic.Name property instead.
            var suggestionTopic = item;
            if (suggestionTopic && suggestionTopic.Name) {
                itemName = suggestionTopic.Name;
            }
            if (item.id === _common_Constants__WEBPACK_IMPORTED_MODULE_21__["EMPTY_TOPIC_SUGGESTION_ID"]) {
                // Skip insert autocomplete suggestion `no result`
                insertHtml = '';
            }
            else if (item.id === _common_Constants__WEBPACK_IMPORTED_MODULE_21__["CREATE_NEW_TOPIC_BUTTON_ID"]) {
                // Skip insert autocomplete suggestion `Create new topic`
                insertHtml = '';
            }
            else {
                insertHtml = "<a href=\"#\" data-sp-hashtagged-topic-id=\"" + item.id + "\" class=\"" + _ckeditor_CKTextEditor__WEBPACK_IMPORTED_MODULE_16__["CKTextEditor"].topicTagClass + "\">" + itemName + "</a>";
            }
            _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_3__["_EngagementLogger"].logEvent('CSIKM.Annotate.Hashtagged.SelectSuggestion');
            return _ms_sp_safehtml__WEBPACK_IMPORTED_MODULE_7__["SafeHtml"].clean(insertHtml);
        };
        this._topicSuggestionDataProvider = new _ms_sp_dataproviders__WEBPACK_IMPORTED_MODULE_4__["TopicSuggestionSearchDataProvider"](scope);
        this._substrateGetTopicSuggestionProvider = new _ms_sp_topic_shared__WEBPACK_IMPORTED_MODULE_8__["SubstrateGetTopicSuggestionProvider"](scope);
        this._isRenderQosKSActivated = Object(_common_KillSwitches__WEBPACK_IMPORTED_MODULE_14__["isTopicPickerRenderQosKSActivated"])();
        this._isCachedZeroTermSuggestionKSActivated = Object(_common_KillSwitches__WEBPACK_IMPORTED_MODULE_14__["isCachedZeroTermSuggestionKSActivated"])();
        this._qosTagAllUp =
            !Object(_common_KillSwitches__WEBPACK_IMPORTED_MODULE_14__["separateIDBExperimentQosKSActivated"])() && Object(_ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_5__["isIndexedDBEnabledForCortexAPIs"])()
                ? QOS_TAG_PREFIX + 'Picker.IDBEnabled'
                : QOS_TAG_PREFIX + 'Picker';
        this._indexedDBEnabledForSubstrateAPIs = Object(_ms_sp_component_utilities_lib_topics_TopicFlightingUtilities__WEBPACK_IMPORTED_MODULE_13__["isIndexedDBEnabledForSubstrateAPIs"])();
        this._indexedDBEnabledForOdspAPIs = Object(_ms_sp_component_utilities_lib_topics_TopicFlightingUtilities__WEBPACK_IMPORTED_MODULE_13__["isIndexedDBEnabledForOdspAPIs"])();
    }
    TopicPicker.prototype.getTopicSuggestions = function (query) {
        return Object(_ms_sp_topic_shared__WEBPACK_IMPORTED_MODULE_8__["_useSubstrateMSAIAPI"])() || _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["_SPFlight"].isEnabled(1922 /* UseSubstrateSuggestionsAPI */)
            ? this._getTopicSuggestionProviderBySubstrateMSAIAPI(query)
            : this._getTopicSuggestionProviderBySPHomeAPI(query);
    };
    TopicPicker.prototype.tryHandleKeyboardEvent = function (evt, editor) {
        var retVal = false;
        if (this._shouldHandleBackspaceForHashtaggedTopic(evt, editor)) {
            this._handleRemoveHashtaggedTopicOnBackspace(editor);
            if (!Object(_common_KillSwitches__WEBPACK_IMPORTED_MODULE_14__["isFixExtraCharDeleteOnBackspaceKSActivated"])()) {
                evt.preventDefault();
                evt.stopPropagation();
            }
            retVal = true;
        }
        else if (this._shouldHandleEscKey(evt)) {
            // Hide the topic picker when the Esc key is used.
            this._hideTopicPicker = true;
            retVal = true;
        }
        else if (this._shouldHandleHashKey(evt)) {
            if (!Object(_common_KillSwitches__WEBPACK_IMPORTED_MODULE_14__["updatedAriaAlertsKSActivated"])()) {
                Object(_a11y_RteA11y__WEBPACK_IMPORTED_MODULE_20__["ariaAlert"])(_loc_RteStrings_resx__WEBPACK_IMPORTED_MODULE_19__["InputTopicName"], 'status', 'polite');
            }
            this._handleHashKey(editor);
            retVal = true;
        }
        else if (!Object(_common_KillSwitches__WEBPACK_IMPORTED_MODULE_14__["isFixDeleteTopicOnDeleteKeyKSActivated"])() &&
            this._shouldHandleDeleteForHashtaggedTopic(evt, editor)) {
            // When delete key is used in the hashtagged topic name, it removes that entire hashtagged topic
            editor.removeSelectedElement();
            retVal = true;
        }
        return retVal;
    };
    TopicPicker.prototype.isTopicSuggestion = function (item) {
        return item.suggestionType === 'TopicSuggestion';
    };
    Object.defineProperty(TopicPicker.prototype, "prevTopics", {
        get: function () {
            return this._prevTopicsSuggestions;
        },
        enumerable: true,
        configurable: true
    });
    TopicPicker.prototype.updateVisibleState = function (query, queryId, suggestions, isCachedResponse) {
        var _a, _b, _c, _d;
        if (!this._isRenderQosKSActivated && !this._hideTopicPicker) {
            (_a = this._allUpQos) === null || _a === void 0 ? void 0 : _a.writeSuccess();
            if (query.length === 0) {
                (_b = this._zeroTermQos) === null || _b === void 0 ? void 0 : _b.writeSuccess();
            }
            else if (isCachedResponse) {
                (_c = this._indexedDBQos) === null || _c === void 0 ? void 0 : _c.writeSuccess();
            }
            else {
                (_d = this._serverResponseQos) === null || _d === void 0 ? void 0 : _d.writeSuccess();
            }
        }
        // Set a flag to hide the topic picker if the query is current and there is a relevant match in
        // the returned suggestions.
        if (!_common_KillSwitches__WEBPACK_IMPORTED_MODULE_14__["default"].topicPickerRegExFix.isActivated() &&
            !this._hideTopicPicker &&
            queryId === this._activeQueryId &&
            this._shouldHideTopicPicker(query, suggestions)) {
            this._hideTopicPicker = true;
        }
    };
    TopicPicker.prototype._shouldHandleBackspaceForHashtaggedTopic = function (evt, editor) {
        // If backspace key is used and selection is within a hashtagged topic then return true
        if (_ms_sp_a11y__WEBPACK_IMPORTED_MODULE_6__["Keyboard"].isKey(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_10__["KeyCodes"].backspace, evt)) {
            return !!editor.getSelectedLinkAttribute('data-sp-hashtagged-topic-id');
        }
        else {
            return false;
        }
    };
    TopicPicker.prototype._shouldHandleDeleteForHashtaggedTopic = function (evt, editor) {
        // If delete key is used and selection is within a hashtagged topic then return true
        if (_ms_sp_a11y__WEBPACK_IMPORTED_MODULE_6__["Keyboard"].isKey(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_10__["KeyCodes"].del, evt)) {
            return !!editor.getSelectedLinkAttribute('data-sp-hashtagged-topic-id');
        }
        else {
            return false;
        }
    };
    TopicPicker.prototype._handleRemoveHashtaggedTopicOnBackspace = function (editor) {
        var _a;
        if (!Object(_common_KillSwitches__WEBPACK_IMPORTED_MODULE_14__["isFixDeleteTopicOnBackSpaceKSActivated"])()) {
            // When the backspace key is used in the hashtagged topic name, it removes that entire hashtagged topic
            editor.removeSelectedElement();
        }
        else {
            // When the backspace key is used at the end of a hashtagged topic name, select the entire hashtagged topic
            // so it can be removed on backspace.
            var selection = editor.getSelection();
            if (((_a = selection) === null || _a === void 0 ? void 0 : _a.text) && selection.start === selection.end) {
                if (selection.start === 1 || selection.start === selection.text.length) {
                    selection.start = 0;
                    editor.setSelection(selection);
                }
            }
        }
    };
    TopicPicker.prototype._shouldHandleEscKey = function (evt) {
        return !_common_KillSwitches__WEBPACK_IMPORTED_MODULE_14__["default"].topicPickerRegExFix.isActivated() && _ms_sp_a11y__WEBPACK_IMPORTED_MODULE_6__["Keyboard"].isKey(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_10__["KeyCodes"].escape, evt);
    };
    TopicPicker.prototype._shouldHandleHashKey = function (evt) {
        var isHashKey = Object(_common_KillSwitches__WEBPACK_IMPORTED_MODULE_14__["fixTopicPickerHashKeyKSActivated"])()
            ? _ms_sp_a11y__WEBPACK_IMPORTED_MODULE_6__["Keyboard"].isKey(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_10__["KeyCodes"].three, evt, { shift: true })
            : evt.key === '#';
        return !_common_KillSwitches__WEBPACK_IMPORTED_MODULE_14__["default"].topicPickerRegExFix.isActivated() && isHashKey;
    };
    TopicPicker.prototype._handleHashKey = function (editor) {
        // When the '#' key is entered, clear the flag to allow the topic picker to be shown
        // and set a new active picker ID.
        this._hideTopicPicker = false;
        this._activeQueryId = _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["Guid"].newGuid().toString();
        if (!Object(_common_KillSwitches__WEBPACK_IMPORTED_MODULE_14__["isLogTPOpenKSActivated"])()) {
            Object(_ms_sp_topic_shared__WEBPACK_IMPORTED_MODULE_8__["logEngagement"])('Open', _ms_sp_topic_shared__WEBPACK_IMPORTED_MODULE_8__["TopicConstants"].kmTopicPickerLogPrefix);
        }
        if (!this._isRenderQosKSActivated) {
            this._zeroTermQos = new _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_3__["_QosMonitor"](QOS_TAG_PREFIX + 'ZeroTerm');
            this._allUpQos = new _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_3__["_QosMonitor"](this._qosTagAllUp);
        }
    };
    TopicPicker.prototype._shouldHideTopicPicker = function (inputText, suggestions) {
        // If the query does not contain spaces then show the suggestions in the picker
        if (inputText.lastIndexOf(' ') <= 0) {
            return false;
        }
        // If there is a space in the query then only show the picker if there is an exact
        // substring match within the suggestions.
        for (var _i = 0, suggestions_1 = suggestions; _i < suggestions_1.length; _i++) {
            var topic = suggestions_1[_i];
            if (topic.Name.toLocaleLowerCase().startsWith(inputText.toLocaleLowerCase())) {
                return false;
            }
        }
        return true;
    };
    TopicPicker.prototype._getTopicSuggestionProviderBySPHomeAPI = function (query, shadowCall) {
        var _this = this;
        if (shadowCall === void 0) { shadowCall = false; }
        // Make a shadow call to the substrate API. This is temporary code to help validate and improve
        // the quality of the substrate Suggestions API. @todo (VSO# 870904 tracks removal of this code).
        if (!Object(_common_KillSwitches__WEBPACK_IMPORTED_MODULE_14__["isMoveShadowCallKSActivated"])()) {
            if (!shadowCall) {
                window.setTimeout(function () { return _this._getTopicSuggestionProviderBySubstrateMSAIAPI(query, true); }, 500);
            }
            var cacheOptions = this._indexedDBEnabledForOdspAPIs && !shadowCall ? this._getCacheOptions() : undefined;
            return this._topicSuggestionDataProvider
                .getTopicSuggestions(query, this._LANGUAGE_ID, this._MAX_TOPICS_TO_FETCH, this._MAX_RELATIONS_TO_FETCH, cacheOptions)
                .then(function (apiResponse) {
                return apiResponse;
            });
        }
        else {
            return this._topicSuggestionDataProvider
                .getTopicSuggestions(query, this._LANGUAGE_ID, this._MAX_TOPICS_TO_FETCH, this._MAX_RELATIONS_TO_FETCH)
                .then(function (apiResponse) {
                // Make a shadow call to the substrate API. This is temporary code to help validate and improve
                // the quality of the substrate Suggestions API. @todo (VSO# 870904 tracks removal of this code).
                window.setTimeout(function () { return _this._getTopicSuggestionProviderBySubstrateMSAIAPI(query, true); }, 100);
                return apiResponse;
            });
        }
    };
    TopicPicker.prototype._getTopicSuggestionProviderBySubstrateMSAIAPI = function (query, shadowCall) {
        var _this = this;
        if (!Object(_common_KillSwitches__WEBPACK_IMPORTED_MODULE_14__["isMoveShadowCallKSActivated"])() && !shadowCall) {
            window.setTimeout(function () { return _this._getTopicSuggestionProviderBySPHomeAPI(query, true); }, 500);
        }
        if (!Object(_common_KillSwitches__WEBPACK_IMPORTED_MODULE_14__["fixDefaultSuggestionQueryKSActivated"])() && query.length === 0) {
            // VSO:1033672 - Set the default/blank query to use 'a', otherwise an empty query will result in a bad request
            query = DEFAULT_QUERY;
        }
        var cacheOptions = this._indexedDBEnabledForSubstrateAPIs && !shadowCall ? this._getCacheOptions() : undefined;
        return this._substrateGetTopicSuggestionProvider
            .getTopicSuggestion(query, cacheOptions)
            .then(function (response) {
            if (!shadowCall) {
                return Object(_ms_sp_topic_shared__WEBPACK_IMPORTED_MODULE_8__["_translateSubstrateSuggestionSearchAPIResponse"])(response);
            }
        })
            .catch(function (error) {
            // if shadowCall we can ignore the error everything we need is being log inside of the Data Provider.
            if (!shadowCall) {
                throw error;
            }
            else {
                return undefined;
            }
        });
    };
    TopicPicker.prototype._getCacheOptions = function () {
        return {
            alias: 'FirstParty_KMTopicSuggestionSearchDP',
            id: 'KMTopicSuggestionSearchDP',
            expirationDuration: _ms_sp_topic_shared__WEBPACK_IMPORTED_MODULE_8__["TopicConstants"].topicCacheDuration,
            cacheStrategy: _microsoft_sp_http__WEBPACK_IMPORTED_MODULE_11__["_CacheStrategy"].CacheAndNetwork,
            extraProps: new Map([[_ms_sp_dataproviders_lib_dataProviders_common_KMTieredCacheHelper__WEBPACK_IMPORTED_MODULE_12__["default"].onlyIndexedDB, true]])
        };
    };
    TopicPicker.prototype._updateAutoCompleteElements = function (topicCandidate) {
        this._updateAutoCompleteStyles();
        this._updateTopicPickerHeader();
        this._updateTopicFooter(topicCandidate);
    };
    // Remove this method when graduate b5874077-5c39-4763-a421-e7733fc04799
    TopicPicker.prototype._updateAutoCompleteStyles = function () {
        var _a, _b;
        var elements = document.body.getElementsByClassName('cke_autocomplete_panel suggestedTopicPanel cke_autocomplete_opened');
        if (_common_Flights__WEBPACK_IMPORTED_MODULE_22__["default"].isScrollbarEnabledForTopicPicker()) {
            (_a = elements.item(0)) === null || _a === void 0 ? void 0 : _a.classList.add('fitAutoCompletePanelBox');
        }
        else if (!Object(_common_KillSwitches__WEBPACK_IMPORTED_MODULE_14__["isRTENewTopicEntryKSActivated"])()) {
            (_b = elements.item(0)) === null || _b === void 0 ? void 0 : _b.classList.add('fixAutoCompletePanelHeight');
        }
    };
    TopicPicker.prototype._updateTopicPickerHeader = function () {
        if (!Object(_common_KillSwitches__WEBPACK_IMPORTED_MODULE_14__["headerForTopicPickerKSActivated"])()) {
            var elements = document.body.getElementsByClassName('cke_autocomplete_panel suggestedTopicPanel cke_autocomplete_opened');
            if (elements.length) {
                var headerElem = document.createElement('div');
                var theme = Object(office_ui_fabric_react_lib_Styling__WEBPACK_IMPORTED_MODULE_9__["getTheme"])();
                var footerColor = theme.palette.themePrimary;
                var headerColor = theme.palette.neutralPrimary;
                var borderBottomColor = theme.palette.neutralLight;
                var urlForTopicHelp = 'https://support.microsoft.com/en-us/office/your-knowledge-network-in-microsoft-365-53620e12-ae00-4523-87cf-e935ae77d541?ns=spostandard&version=16&syslcid=1033&uilcid=1033&appver=spo160&helpid=csi_topiccenter_getstarted_topicdiscovery&ui=en-us&rs=en-us&ad=us';
                var topicLink = "<a href=\"" + urlForTopicHelp + "\" target=\"_blank\" style=\"text-decoration: none; color: " + footerColor + "\">" + _loc_RteStrings_resx__WEBPACK_IMPORTED_MODULE_19__["topic"] + "</a>";
                headerElem.innerHTML = _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["Text"].format(_loc_RteStrings_resx__WEBPACK_IMPORTED_MODULE_19__["TopicPickerHeaderDescription"], topicLink);
                headerElem.setAttribute('id', 'headerTopicPicker');
                headerElem.setAttribute('style', "padding: 10px 12px; z-index: 9998; " + (_common_Flights__WEBPACK_IMPORTED_MODULE_22__["default"].isScrollbarEnabledForTopicPicker()
                    ? ''
                    : // Fix this header overlap with `No results found` body
                        !Object(_common_KillSwitches__WEBPACK_IMPORTED_MODULE_14__["isRTENewTopicEntryKSActivated"])()
                            ? ''
                            : 'position:absolute;') + " " + (_common_Flights__WEBPACK_IMPORTED_MODULE_22__["default"].isScrollbarEnabledForTopicPicker() ? 'width:296px;' : 'width:294px; padding-right: 14px;') + " border-bottom: 1px solid; color: " +
                    headerColor +
                    '; border-bottom-color:' +
                    borderBottomColor +
                    '; font-size:' +
                    office_ui_fabric_react_lib_Styling__WEBPACK_IMPORTED_MODULE_9__["FontSizes"].smallPlus +
                    ';');
                if (_common_Flights__WEBPACK_IMPORTED_MODULE_22__["default"].isScrollbarEnabledForTopicPicker()) {
                    headerElem.classList.add('fitHeaderOutsideList');
                }
                if (elements[0].children[0] && elements[0].children[0].getAttribute('id') !== 'headerTopicPicker') {
                    elements[0].insertBefore(headerElem, elements[0].children[0]);
                }
            }
        }
    };
    TopicPicker.prototype._updateTopicFooter = function (topicCandidate) {
        var _this = this;
        var createTopicElement = document.querySelector("[data-id=\"" + _common_Constants__WEBPACK_IMPORTED_MODULE_21__["CREATE_NEW_TOPIC_BUTTON_ID"] + "\"]");
        if (createTopicElement) {
            // `topicCandidate` used by autocomplete keydown handler: CKTextEditor.ts -> autoComplete.onKeyDown
            if (createTopicElement.dataset.topicCandidate !== topicCandidate) {
                createTopicElement.dataset.topicCandidate = topicCandidate;
            }
            if (!createTopicElement.dataset.handled) {
                createTopicElement.setAttribute('role', 'button');
                createTopicElement.setAttribute('tabindex', '0');
                createTopicElement.dataset.handled = 'true';
                // Intercept click event on 'Create new topic' button.
                createTopicElement.addEventListener('click', function (event) {
                    // Hide this panel to avoid narrator read unrelated content when dialog show up.
                    window.document.body.dispatchEvent(new KeyboardEvent('keypress', { key: 'esc' }));
                    _this.onClickNewTopicButton(topicCandidate);
                    // Avoid auto insert this item on autocomplete panel
                    event.preventDefault();
                    event.stopPropagation();
                });
            }
        }
    };
    return TopicPicker;
}());
/* harmony default export */ __webpack_exports__["default"] = (TopicPicker);


/***/ }),

/***/ "v4j7":
/*!****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/css-loader@3.2.1_webpack@4.44.2/node_modules/css-loader/dist/cjs.js!/agent/_work/1/s/common/temp/node_modules/.pnpm/postcss-loader@3.0.0/node_modules/postcss-loader/src??postcss!./lib/rte/ckeditor/TopicPicker.css ***!
  \****************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../common/temp/node_modules/.pnpm/css-loader@3.2.1_webpack@4.44.2/node_modules/css-loader/dist/runtime/api.js */ "5ADk")(false);
// Module
exports.push([module.i, "[data-id=EMPTY_TOPIC_SUGGESTION_ID]{color:\"[theme:bodyText, default: #323130]\";cursor:default!important;background:inherit!important}.cke_autocomplete_panel>[data-id=CREATE_NEW_TOPIC_FROM_RTE_BUTTON_ID]{line-height:1.3;margin:0;border-color:currentcolor \"[theme:neutralLighter, default: #f3f2f1]\" \"[theme:neutralLighter, default: #f3f2f1]\";border-top:1px solid \"[theme:neutrallighter, default: #f3f2f1]\"}.cke_autocomplete_panel>[data-id=CREATE_NEW_TOPIC_FROM_RTE_BUTTON_ID]>div{font-size:\"[theme:smallFontSize, default: 12px]\";font-weight:\"[theme:smallFontWeight, default: 400]\";color:\"[theme:themePrimary, default: #0078d4]\"}.cke_autocomplete_panel>[data-id=CREATE_NEW_TOPIC_FROM_RTE_BUTTON_ID]:hover{cursor:pointer}", ""]);


/***/ }),

/***/ "x7RT":
/*!**********************************************!*\
  !*** ./lib/rte/ckeditor/TopicSuggestions.js ***!
  \**********************************************/
/*! exports provided: TopicSuggestions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopicSuggestions", function() { return TopicSuggestions; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/sp-diagnostics */ "ut3N");
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _baseRte_BaseRte__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../baseRte/BaseRte */ "oubO");
/* harmony import */ var _common_KillSwitches__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/KillSwitches */ "+ORw");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _loc_RteStrings_resx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../loc/RteStrings.resx */ "okC0");
var _loc_RteStrings_resx__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../loc/RteStrings.resx */ "okC0", 1);
/* harmony import */ var _a11y_RteA11y__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../a11y/RteA11y */ "Qyis");
/* harmony import */ var _common_Constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/Constants */ "R0eD");
/* harmony import */ var _ms_sp_topic_shared__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ms/sp-topic-shared */ "HVbJ");
/* harmony import */ var _ms_sp_topic_shared__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_ms_sp_topic_shared__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _TopicPicker_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./TopicPicker.scss */ "R95i");

/**
 * @copyright (c) Microsoft Corporation.  All rights reserved.
 */









var HASHTAG_SYMBOL_POSITION = 1;
/**
 * This class contains a callback that manage how Topic suggestions
 * are retrieved to be used in BaseRte, using previous suggestions if needed.
 */
var TopicSuggestions = /** @class */ (function () {
    function TopicSuggestions() {
    }
    TopicSuggestions.getTopicSuggestion = function (id, name) {
        return {
            id: id,
            EntityId: id,
            name: name,
            Name: name,
            Type: 'TopicSuggestion',
            suggestionType: 'TopicSuggestion',
            Definition: '',
            definition: '',
            RelatedPeople: [],
            AlternateNames: [],
            url: ''
        };
    };
    TopicSuggestions.populateTopicDefinition = function (val) {
        // Populate topic definition, use related people when there is no definition available.
        // e.g. "People: Miguel Garcia, Annie Lindqvist, Patti Fernandez, Colin Ballinger"
        if (!val.Definition) {
            val.Definition =
                val.RelatedPeople && val.RelatedPeople.length
                    ? _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_4__["Text"].format(_loc_RteStrings_resx__WEBPACK_IMPORTED_MODULE_5__["TopicPickerDefinitionRelatedPeople"], _loc_RteStrings_resx__WEBPACK_IMPORTED_MODULE_5__["TopicPickerDefinitionSection"], val.RelatedPeople.map(function (p) { return p.Name; }).join(', '))
                    : '\u00A0' /*&nbsp;*/;
        }
        val.definition = val.Definition;
    };
    TopicSuggestions.topicPickerCallback = function (rte, tagName, matchInfo, pageContext, callback, shouldShowNewTopicButton) {
        var qosKSEnabled = _common_KillSwitches__WEBPACK_IMPORTED_MODULE_3__["default"].topicSuggestionQos.isActivated();
        var qosTag = qosKSEnabled ? 'TopicSearchFailure' : 'CSIKM.HashTagging.TopicSuggestion';
        var title = matchInfo.query.substring(HASHTAG_SYMBOL_POSITION).trim();
        if (!qosKSEnabled && !title.length) {
            qosTag += '.ZeroTerm';
        }
        var qosMonitor = new _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__["_QosMonitor"](qosTag);
        var prevTopics = rte.prevTopics || [];
        if (!Object(_common_KillSwitches__WEBPACK_IMPORTED_MODULE_3__["isRTENewTopicEntryKSActivated"])()) {
            if (!shouldShowNewTopicButton) {
                // Fix new topic button shows up on non-topic-scenario first time
                prevTopics = prevTopics.filter(function (item) { return item.id !== _common_Constants__WEBPACK_IMPORTED_MODULE_7__["CREATE_NEW_TOPIC_BUTTON_ID"]; });
            }
            else {
                if (!prevTopics.some(function (item) { return item.id === _common_Constants__WEBPACK_IMPORTED_MODULE_7__["CREATE_NEW_TOPIC_BUTTON_ID"]; })) {
                    prevTopics = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(prevTopics, [
                        TopicSuggestions.getTopicSuggestion(_common_Constants__WEBPACK_IMPORTED_MODULE_7__["CREATE_NEW_TOPIC_BUTTON_ID"], _loc_RteStrings_resx__WEBPACK_IMPORTED_MODULE_5__["CreateNewTopic"])
                    ]);
                }
            }
        }
        // picker with title as query
        callback(prevTopics);
        var previousSuggestions = rte
            .getTopicSuggestions(title)
            .then(function (topicSuggestionResult) {
            var autoSuggestions = [];
            if (!Object(_common_KillSwitches__WEBPACK_IMPORTED_MODULE_3__["fixAlternateNameInsertionKSActivated"])()) {
                autoSuggestions = TopicSuggestions.makeTopicSuggestionsForAlternateNames(TopicSuggestions.fixAlernateNameInsertion(topicSuggestionResult, title));
            }
            else {
                autoSuggestions = TopicSuggestions.makeTopicSuggestions(topicSuggestionResult);
            }
            if (!Object(_common_KillSwitches__WEBPACK_IMPORTED_MODULE_3__["isRTENewTopicEntryKSActivated"])()) {
                if (autoSuggestions.length === 0) {
                    // This is a placeholder for "No results found"
                    autoSuggestions.push(TopicSuggestions.getTopicSuggestion(_common_Constants__WEBPACK_IMPORTED_MODULE_7__["EMPTY_TOPIC_SUGGESTION_ID"], _loc_RteStrings_resx__WEBPACK_IMPORTED_MODULE_5__["EmptyTopicSuggestion"]));
                }
                // Hide the new topic entry if the user doesn't have permission
                if (shouldShowNewTopicButton && Object(_ms_sp_topic_shared__WEBPACK_IMPORTED_MODULE_8__["canCreateNewTopic"])(pageContext)) {
                    autoSuggestions.push(TopicSuggestions.getTopicSuggestion(_common_Constants__WEBPACK_IMPORTED_MODULE_7__["CREATE_NEW_TOPIC_BUTTON_ID"], _loc_RteStrings_resx__WEBPACK_IMPORTED_MODULE_5__["CreateNewTopic"]));
                }
            }
            callback(autoSuggestions);
            qosMonitor.writeSuccess();
            var suggestionsResponse = {
                value: autoSuggestions,
                isCachedResponse: !Object(_common_KillSwitches__WEBPACK_IMPORTED_MODULE_3__["isTopicPickerRenderQosKSActivated"])()
                    ? topicSuggestionResult.isCachedResponse
                    : undefined
            };
            return suggestionsResponse;
        })
            .catch(function (error) {
            var failTag = qosKSEnabled ? 'SearchTopicFail' : qosTag;
            qosMonitor.writeUnexpectedFailure(failTag, error);
            _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__["_TraceLogger"].logError(_baseRte_BaseRte__WEBPACK_IMPORTED_MODULE_2__["BaseRte"].logSource, error);
            var suggestionsResponse = {
                value: [],
                isCachedResponse: !Object(_common_KillSwitches__WEBPACK_IMPORTED_MODULE_3__["isTopicPickerRenderQosKSActivated"])() ? false : undefined
            };
            return suggestionsResponse;
        });
        return previousSuggestions;
    };
    /**
     * This is the utility function for inserting alternate names depending on the query text. Cases handled currently are:-
     * 1) If the suggestion's primary name doesn't have the query text look for alternate names if it exists.
     * 2) If the query text is present in both primary name (but not in the starting) as well as in one of the alternate names(in the start), swap them
     **/
    TopicSuggestions.fixAlernateNameInsertion = function (topicSuggestionResult, queryText) {
        var newTopicSuggestions = [];
        topicSuggestionResult.value.map(function (suggestion) {
            if (suggestion.Name.toLowerCase().indexOf(queryText.toLowerCase()) === -1) {
                newTopicSuggestions = TopicSuggestions.swapPrimaryWithAltName(newTopicSuggestions, queryText, suggestion, false);
            }
            else if (suggestion.Name.toLowerCase().indexOf(queryText.toLowerCase()) > 0) {
                newTopicSuggestions = TopicSuggestions.swapPrimaryWithAltName(newTopicSuggestions, queryText, suggestion, true);
            }
            else {
                newTopicSuggestions.push(suggestion);
            }
        });
        return newTopicSuggestions;
    };
    // Helper function for swapping primary name with alternate name for fixAlernateNameInsertion function
    TopicSuggestions.swapPrimaryWithAltName = function (newTopicSuggestions, queryText, suggestion, isPresentAtStart) {
        var checkForBreak = true;
        if (suggestion.AlternateNames && suggestion.AlternateNames.length > 0) {
            var newAlternateNames_1 = [];
            var actualPrimaryName_1;
            suggestion.AlternateNames.forEach(function (altName) {
                var shouldSwapWithStart = (isPresentAtStart && altName.Name.toLowerCase().indexOf(queryText.toLowerCase()) === 0) ||
                    altName.Name.toLowerCase().indexOf(queryText.toLowerCase()) >= 0;
                if (checkForBreak && shouldSwapWithStart) {
                    var tempName = suggestion.Name;
                    suggestion.Name = altName.Name;
                    actualPrimaryName_1 = { Name: tempName };
                    checkForBreak = false;
                }
                else {
                    newAlternateNames_1.push(altName);
                }
            });
            if (actualPrimaryName_1 !== undefined) {
                newAlternateNames_1.unshift(actualPrimaryName_1);
            }
            suggestion.AlternateNames = newAlternateNames_1;
        }
        newTopicSuggestions.push(suggestion);
        return newTopicSuggestions;
    };
    TopicSuggestions.makeTopicSuggestions = function (topics) {
        var autoSuggestions = topics.value.map(function (val) {
            // Populate ITopicSuggestion values
            val.name = val.Name;
            val.id = val.EntityId; // CKEditor needs a property called id to render.
            val.suggestionType = 'TopicSuggestion';
            val.url = ''; // Topics don't have a URL, but ISuggestion does have one, so leaving it empty.
            // Append alternate topic names if they exist
            if (val.AlternateNames && val.AlternateNames.length) {
                val.name += ', ' + val.AlternateNames.map(function (alt) { return alt.Name; }).join(', ');
            }
            // Populate topic definition which will use either the topic definition or related people
            TopicSuggestions.populateTopicDefinition(val);
            return val;
        });
        if (!Object(_common_KillSwitches__WEBPACK_IMPORTED_MODULE_3__["updatedAriaAlertsKSActivated"])() && autoSuggestions.length === 0) {
            Object(_a11y_RteA11y__WEBPACK_IMPORTED_MODULE_6__["ariaAlert"])(_loc_RteStrings_resx__WEBPACK_IMPORTED_MODULE_5__["NoTopicSuggestions"]);
        }
        return autoSuggestions;
    };
    TopicSuggestions.makeTopicSuggestionsForAlternateNames = function (topics) {
        var autoSuggestions = topics.map(function (val) {
            // Populate ITopicSuggestion values
            val.name = val.Name;
            val.id = val.EntityId; // CKEditor needs a property called id to render.
            val.suggestionType = 'TopicSuggestion';
            val.url = ''; // Topics don't have a URL, but ISuggestion does have one, so leaving it empty.
            // Append alternate topic names if they exist
            if (val.AlternateNames && val.AlternateNames.length) {
                val.name += ', ' + val.AlternateNames.map(function (alt) { return alt.Name; }).join(', ');
            }
            // Populate topic definition which will use either the topic definition or related people
            TopicSuggestions.populateTopicDefinition(val);
            return val;
        });
        if (!Object(_common_KillSwitches__WEBPACK_IMPORTED_MODULE_3__["updatedAriaAlertsKSActivated"])() && autoSuggestions.length === 0) {
            Object(_a11y_RteA11y__WEBPACK_IMPORTED_MODULE_6__["ariaAlert"])(_loc_RteStrings_resx__WEBPACK_IMPORTED_MODULE_5__["NoTopicSuggestions"]);
        }
        return autoSuggestions;
    };
    return TopicSuggestions;
}());



/***/ })

}]);
//# sourceMappingURL=chunk.sp-pages-topic-picker_none.js.map