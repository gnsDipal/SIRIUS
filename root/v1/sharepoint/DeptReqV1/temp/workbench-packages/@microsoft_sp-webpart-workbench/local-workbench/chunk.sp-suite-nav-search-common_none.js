(window["webpackJsonpf8a8ad94_4cf3_4a19_a76b_1cec9da00219_0_1_0"] = window["webpackJsonpf8a8ad94_4cf3_4a19_a76b_1cec9da00219_0_1_0"] || []).push([["sp-suite-nav-search-common"],{

/***/ "/BPI":
/*!**************************************************************!*\
  !*** ../sp-search-common/lib/createBingTokenProviderOnce.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/sp-lodash-subset */ "Pk8u");
/* harmony import */ var _microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _createTokenProviderFactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createTokenProviderFactory */ "x8F/");


// tslint:disable-next-line:export-name
/* harmony default export */ __webpack_exports__["default"] = (Object(_microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_0__["once"])(Object(_createTokenProviderFactory__WEBPACK_IMPORTED_MODULE_1__["default"])('bingSerpTokenProvider', 'https://www.bing.com')));


/***/ }),

/***/ "1e+G":
/*!********************************************************!*\
  !*** ../sp-search-common/lib/initSearchExperiments.js ***!
  \********************************************************/
/*! exports provided: initSearchExperiments, getLegacyPageContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initSearchExperiments", function() { return initSearchExperiments; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLegacyPageContext", function() { return getLegacyPageContext; });
var initializedWithLegacyPageContext;
var initSearchExperiments = function (legacyPageContext) {
    // All we do here is store the pageContext for later,
    // to avoid bundling in more code than we need right away.
    initializedWithLegacyPageContext = legacyPageContext;
};
var getLegacyPageContext = function () { return initializedWithLegacyPageContext; };


/***/ }),

/***/ "3kp/":
/*!***************************************************!*\
  !*** ../sp-search-common/lib/withPromiseCache.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return withPromiseCache; });
function withPromiseCache(tokenProvider) {
    var promise = undefined;
    // tslint:disable-next-line:no-function-expression
    return function cachedTokenProvider(spec) {
        return !spec.attempt && promise ? promise : (promise = tokenProvider(spec));
    };
}


/***/ }),

/***/ "A4m1":
/*!****************************************************!*\
  !*** ../sp-search-common/lib/SearchExperiments.js ***!
  \****************************************************/
/*! exports provided: shouldAadTokenForSubstrateExperimentBeEnabled, shouldDigestV2ExperimentBeEnabled, shouldEnableQueryRulesExperimentBeEnabled, shouldShowAnswerBlockExperimentBeEnabled, shouldSubstrateSearchExperimentBeEnabled, shouldUse3SAnswersExperimentBeEnabled, should3SFileSuggestionsExperimentBeEnabled, should3SPeopleSuggestionsExperimentBeEnabled, should3SSiteSuggestionsExperimentBeEnabled, should3SEarlyWarmupExperimentBeEnabled, shouldUnifiedPrefetchExperimentBeEnabled, shouldPersonalizedSpellerExperimentBeEnabled */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shouldAadTokenForSubstrateExperimentBeEnabled", function() { return shouldAadTokenForSubstrateExperimentBeEnabled; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shouldDigestV2ExperimentBeEnabled", function() { return shouldDigestV2ExperimentBeEnabled; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shouldEnableQueryRulesExperimentBeEnabled", function() { return shouldEnableQueryRulesExperimentBeEnabled; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shouldShowAnswerBlockExperimentBeEnabled", function() { return shouldShowAnswerBlockExperimentBeEnabled; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shouldSubstrateSearchExperimentBeEnabled", function() { return shouldSubstrateSearchExperimentBeEnabled; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shouldUse3SAnswersExperimentBeEnabled", function() { return shouldUse3SAnswersExperimentBeEnabled; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "should3SFileSuggestionsExperimentBeEnabled", function() { return should3SFileSuggestionsExperimentBeEnabled; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "should3SPeopleSuggestionsExperimentBeEnabled", function() { return should3SPeopleSuggestionsExperimentBeEnabled; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "should3SSiteSuggestionsExperimentBeEnabled", function() { return should3SSiteSuggestionsExperimentBeEnabled; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "should3SEarlyWarmupExperimentBeEnabled", function() { return should3SEarlyWarmupExperimentBeEnabled; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shouldUnifiedPrefetchExperimentBeEnabled", function() { return shouldUnifiedPrefetchExperimentBeEnabled; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shouldPersonalizedSpellerExperimentBeEnabled", function() { return shouldPersonalizedSpellerExperimentBeEnabled; });
/* harmony import */ var _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ms/odsp-core-bundle */ "K9kD");
/* harmony import */ var _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _flights__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./flights */ "s2S6");
/* harmony import */ var _initSearchExperiments__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./initSearchExperiments */ "1e+G");
/* harmony import */ var _isGuestUser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./isGuestUser */ "rHDF");
/* harmony import */ var _getInitializedDispatcher__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./getInitializedDispatcher */ "U2mE");





var initialized = false;
function makeExperimentCheck(setting, flightCheck, expFlightCheck, name, startDate, segmentPopulation, allowGuestUsers, shouldLog) {
    if (segmentPopulation === void 0) { segmentPopulation = 0.5; }
    if (allowGuestUsers === void 0) { allowGuestUsers = true; }
    if (shouldLog === void 0) { shouldLog = false; }
    return function (conf) {
        var legacyPageContext = Object(_initSearchExperiments__WEBPACK_IMPORTED_MODULE_2__["getLegacyPageContext"])();
        if (!legacyPageContext) {
            throw new Error("checking experiment " + setting + " before calling initSearchExperiments");
        }
        if (!initialized) {
            _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__["ABExperiment"].Init(legacyPageContext);
            initialized = true;
        }
        if (!allowGuestUsers && Object(_isGuestUser__WEBPACK_IMPORTED_MODULE_3__["default"])(legacyPageContext)) {
            return false;
        }
        else if (flightCheck()) {
            // The feature is flighted always on
            return true;
        }
        else if (expFlightCheck()) {
            // The experiment is active; check if it is on or off for us
            var experiment = new _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__["ABExperiment"]({
                name: name,
                startDate: startDate,
                segmentPopulation: segmentPopulation
            });
            var result = experiment.IsExperimentOn();
            if (shouldLog) {
                Object(_getInitializedDispatcher__WEBPACK_IMPORTED_MODULE_4__["default"])().dispatch({
                    eventType: 'USAGE',
                    nameDetail: "searchux." + name,
                    name: 'experiments',
                    properties: {
                        inTreatment: result
                    }
                });
            }
            // Set a separate setting in the SearchUX conf to indicate that the
            // experiment is active and that it is either on or off for us. On the
            // SearchUX side there is a subscriber that will log this setting.
            if (conf && conf.sets) {
                conf.sets("searchux." + setting + "Experiment", result);
            }
            return result;
        }
        else {
            return false;
        }
    };
}
var shouldAadTokenForSubstrateExperimentBeEnabled = makeExperimentCheck('aadTokenForSubstrate', _flights__WEBPACK_IMPORTED_MODULE_1__["aadTokenForSubstrateFlighted"], _flights__WEBPACK_IMPORTED_MODULE_1__["aadTokenForSubstrateExperimentFlighted"], 'AadTokenForSubstrateExperiment', '06/01/2019');
var shouldDigestV2ExperimentBeEnabled = makeExperimentCheck('digestV2', _flights__WEBPACK_IMPORTED_MODULE_1__["isDigestV2Flighted"], _flights__WEBPACK_IMPORTED_MODULE_1__["isDigestV2ExperimentFlighted"], 'DigestV2Experiment', '06/25/2019');
var shouldEnableQueryRulesExperimentBeEnabled = makeExperimentCheck('enableQueryRules', _flights__WEBPACK_IMPORTED_MODULE_1__["enableQueryRules"], _flights__WEBPACK_IMPORTED_MODULE_1__["enableQueryRulesExperiment"], 'EnableQueryRulesExperiment', '08/05/2019');
var shouldShowAnswerBlockExperimentBeEnabled = makeExperimentCheck('answerBlock', _flights__WEBPACK_IMPORTED_MODULE_1__["showAnswerBlockFlighted"], _flights__WEBPACK_IMPORTED_MODULE_1__["showAnswerBlockExperimentFlighted"], 'showAnswerBlock', '03/26/2019');
var shouldSubstrateSearchExperimentBeEnabled = makeExperimentCheck('useSubstrateSearch', _flights__WEBPACK_IMPORTED_MODULE_1__["isSubstrateSearchFlighted"], _flights__WEBPACK_IMPORTED_MODULE_1__["isSubstrateSearchExperimentFlighted"], 'SubstrateSearchExperiment', '15/05/2019', 0.5, false);
var shouldUse3SAnswersExperimentBeEnabled = makeExperimentCheck('use3SAnswers', _flights__WEBPACK_IMPORTED_MODULE_1__["isUse3SAnswersFlighted"], _flights__WEBPACK_IMPORTED_MODULE_1__["isUse3SAnswersExperimentFlighted"], 'Use3SAnswersExperiment', '05/01/2019');
var should3SFileSuggestionsExperimentBeEnabled = makeExperimentCheck('use3SFileSuggestions', _flights__WEBPACK_IMPORTED_MODULE_1__["is3SFileSuggestionsFlighted"], _flights__WEBPACK_IMPORTED_MODULE_1__["is3SFileSuggestionsExperimentFlighted"], '3SFileSuggestionsExperiment', '10/01/2019');
var should3SPeopleSuggestionsExperimentBeEnabled = makeExperimentCheck('use3SPeopleSuggestions', _flights__WEBPACK_IMPORTED_MODULE_1__["is3SPeopleSuggestionsFlighted"], _flights__WEBPACK_IMPORTED_MODULE_1__["is3SPeopleSuggestionsExperimentFlighted"], '3SPeopleSuggestionsExperiment', '16/01/2019');
var should3SSiteSuggestionsExperimentBeEnabled = makeExperimentCheck('use3SSiteSuggestions', _flights__WEBPACK_IMPORTED_MODULE_1__["is3SSiteSuggestionsFlighted"], _flights__WEBPACK_IMPORTED_MODULE_1__["is3SSiteSuggestionsExperimentFlighted"], '3SSiteSuggestionsExperiment', '10/01/2019');
var should3SEarlyWarmupExperimentBeEnabled = makeExperimentCheck('use3SEarlyWarmup', _flights__WEBPACK_IMPORTED_MODULE_1__["isUse3SEarlyWarmupFlighted"], _flights__WEBPACK_IMPORTED_MODULE_1__["isUse3SEarlyWarmupExperimentFlighted"], '3SEarlyWarmupExperiment', '11/10/2019');
var shouldUnifiedPrefetchExperimentBeEnabled = makeExperimentCheck('useUnifiedPrefetch', _flights__WEBPACK_IMPORTED_MODULE_1__["isUnifiedPrefetchFlighted"], _flights__WEBPACK_IMPORTED_MODULE_1__["isUnifiedPrefetchExperimentFlighted"], 'unifiedPrefetchExperiment', '09/12/2019');
var shouldPersonalizedSpellerExperimentBeEnabled = makeExperimentCheck('personalizedSpeller', _flights__WEBPACK_IMPORTED_MODULE_1__["isPersonalizedSpellerFlighted"], _flights__WEBPACK_IMPORTED_MODULE_1__["isPersonalizedSpellerExperimentFlighted"], 'personalizedSpellerExperiment', '01/03/2020', 0.5, true, true);


/***/ }),

/***/ "D9LF":
/*!*******************************************************************!*\
  !*** ../sp-search-common/lib/createSubstrateTokenProviderOnce.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/sp-lodash-subset */ "Pk8u");
/* harmony import */ var _microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _createTokenProviderFactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createTokenProviderFactory */ "x8F/");


var stiSubstrateTokenProvider = Object(_microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_0__["once"])(Object(_createTokenProviderFactory__WEBPACK_IMPORTED_MODULE_1__["default"])('stiSubstrateTokenProvider', 'https://substrate.office.com', true));
var aadSubstrateTokenProvider = Object(_microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_0__["once"])(Object(_createTokenProviderFactory__WEBPACK_IMPORTED_MODULE_1__["default"])('aadSubstrateTokenProvider', 'https://outlook.office365.com/search', false));
/* harmony default export */ __webpack_exports__["default"] = (function (prefetchModule, useAad, portalUrl, shouldUseDigestV2, overrideDigest, fetchNewDigestOnTokenHttp403) {
    if (shouldUseDigestV2 === void 0) { shouldUseDigestV2 = false; }
    return useAad
        ? aadSubstrateTokenProvider(prefetchModule, portalUrl, shouldUseDigestV2, overrideDigest, fetchNewDigestOnTokenHttp403)
        : stiSubstrateTokenProvider(prefetchModule, portalUrl, shouldUseDigestV2, overrideDigest, fetchNewDigestOnTokenHttp403);
});


/***/ }),

/***/ "U2mE":
/*!***********************************************************!*\
  !*** ../sp-search-common/lib/getInitializedDispatcher.js ***!
  \***********************************************************/
/*! exports provided: initializeDispatcherOnce, stopLogEventBuffering, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initializeDispatcherOnce", function() { return initializeDispatcherOnce; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stopLogEventBuffering", function() { return stopLogEventBuffering; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getInitializedDispatcher; });
/* harmony import */ var _microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/sp-lodash-subset */ "Pk8u");
/* harmony import */ var _microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _1js_search_dispatcher_lib_dispatcher__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @1js/search-dispatcher/lib/dispatcher */ "9coA");
/* harmony import */ var flux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flux */ "kfK7");
/* harmony import */ var flux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flux__WEBPACK_IMPORTED_MODULE_2__);
/**
 * @copyright (c) Microsoft Corporation.  All rights reserved.
 */



var dispatcher;
var unregisterToken;
var logEventBuffer;
var initializeDispatcherOnce = Object(_microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_0__["once"])(function () {
    dispatcher = new flux__WEBPACK_IMPORTED_MODULE_2__["Dispatcher"]();
    logEventBuffer = [];
    unregisterToken = dispatcher.register(function (e) { return logEventBuffer.push(e); });
    Object(_1js_search_dispatcher_lib_dispatcher__WEBPACK_IMPORTED_MODULE_1__["setDispatcher"])(dispatcher);
});
var logEventBufferingStopped = false;
/**
 * Stops log event buffering and returns the list of buffered log events.
 */
function stopLogEventBuffering() {
    if (logEventBufferingStopped) {
        throw new Error('Log event buffering has been stopped.');
    }
    logEventBufferingStopped = true;
    dispatcher.unregister(unregisterToken);
    var events = logEventBuffer.slice(0);
    logEventBuffer.length = 0;
    return events;
}
function getInitializedDispatcher() {
    initializeDispatcherOnce();
    return Object(_1js_search_dispatcher_lib_dispatcher__WEBPACK_IMPORTED_MODULE_1__["getDispatcher"])();
}


/***/ }),

/***/ "gbBp":
/*!************************************************************!*\
  !*** ./lib/search/createConfiguredCommonSearchFeatures.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createConfiguredCommonSearchFeatures; });
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ms_sp_search_common_lib_createBingTokenProviderOnce__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ms/sp-search-common/lib/createBingTokenProviderOnce */ "/BPI");
/* harmony import */ var _ms_sp_search_common_lib_createLokiAadAuthTokenProviderOnce__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ms/sp-search-common/lib/createLokiAadAuthTokenProviderOnce */ "iuZ1");
/* harmony import */ var _ms_sp_search_common_lib_createSubstrateTokenProviderOnce__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ms/sp-search-common/lib/createSubstrateTokenProviderOnce */ "D9LF");
/* harmony import */ var _ms_sp_search_common_lib_initSearchExperiments__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ms/sp-search-common/lib/initSearchExperiments */ "1e+G");
/* harmony import */ var _ms_sp_search_common_lib_SearchExperiments__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ms/sp-search-common/lib/SearchExperiments */ "A4m1");
/* harmony import */ var _1js_search_prefetch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @1js/search-prefetch */ "z9oY");







// tslint:disable-next-line:export-name
function createConfiguredCommonSearchFeatures(shell, pageContext, instrumenter, state) {
    _1js_search_prefetch__WEBPACK_IMPORTED_MODULE_6__["init"](state);
    Object(_ms_sp_search_common_lib_initSearchExperiments__WEBPACK_IMPORTED_MODULE_4__["initSearchExperiments"])(pageContext.legacyPageContext);
    var tokenProviders = createTokenProvidersOnce(shell, pageContext.web.absoluteUrl);
    instrumenter.markHeaderBoot();
    if (_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPKillSwitch"].isActivated('154ead93-7b42-4a1c-a0f3-efa6e339ded4'
    /* '09/29/2020', '[stvikenv] Remove deprecated call to O365Shell.Search.SetTokenProviders. Activate the kill switch to bring it back.' */
    )) {
        // Deprecated call. When graduating the kill switch, remove this code.
        setTokenProviders(shell, tokenProviders);
    }
    return { tokenProviders: tokenProviders };
}
function setTokenProviders(shell, tokenProviders) {
    // Use the shell's SetTokenProviders method to pass the "real" token providers
    // to the search box. This should not be necessary, since we already passed
    // a set of token providers that will proxy these ones. The SetTokenProviders
    // method is deprecated and we should remove this code in the future.
    if (!shell || !shell.Search || !shell.Search.SetTokenProviders) {
        return;
    }
    shell.Search.SetTokenProviders(tokenProviders);
}
var providers;
var sitesToken;
function createTokenProvidersOnce(shell, portalLocation) {
    return (providers ||
        (providers = {
            BingForBusiness: Object(_ms_sp_search_common_lib_createBingTokenProviderOnce__WEBPACK_IMPORTED_MODULE_1__["default"])(_1js_search_prefetch__WEBPACK_IMPORTED_MODULE_6__, portalLocation),
            Loki: Object(_ms_sp_search_common_lib_createLokiAadAuthTokenProviderOnce__WEBPACK_IMPORTED_MODULE_2__["default"])(_1js_search_prefetch__WEBPACK_IMPORTED_MODULE_6__, portalLocation),
            Substrate: Object(_ms_sp_search_common_lib_createSubstrateTokenProviderOnce__WEBPACK_IMPORTED_MODULE_3__["default"])(_1js_search_prefetch__WEBPACK_IMPORTED_MODULE_6__, Object(_ms_sp_search_common_lib_SearchExperiments__WEBPACK_IMPORTED_MODULE_5__["shouldAadTokenForSubstrateExperimentBeEnabled"])(), portalLocation),
            SharePointSites: function (_a) {
                var attempt = _a.attempt;
                return (!attempt && sitesToken) ||
                    (sitesToken = fetchSpHomeContext(portalLocation).then(function (_a) {
                        var Payload = _a.Payload, _b = _a.Token, access_token = _b.access_token, resource = _b.resource;
                        if (!shell || !shell.Search) {
                            throw new Error('No search shim available.');
                        }
                        shell.Search.SetSharePointHomeApiRequestInfo({
                            url: resource + "/api/v1",
                            context: JSON.parse(Payload)
                        });
                        return access_token;
                    }));
            }
        }));
}
// tslint:disable-next-line:no-any
function fetchSpHomeContext(portalLocation) {
    return _1js_search_prefetch__WEBPACK_IMPORTED_MODULE_6__["fetch"]({
        url: portalLocation + "/_api/sphomeservice/context?$expand=Token,Payload",
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'SPHome-ClientType': 'Web'
        }
    })
        .then(function (_a) {
        var responseText = _a.responseText;
        return JSON.parse(responseText);
    });
}


/***/ }),

/***/ "iuZ1":
/*!*********************************************************************!*\
  !*** ../sp-search-common/lib/createLokiAadAuthTokenProviderOnce.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/sp-lodash-subset */ "Pk8u");
/* harmony import */ var _microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _createTokenProviderFactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createTokenProviderFactory */ "x8F/");


// tslint:disable-next-line:export-name
/* harmony default export */ __webpack_exports__["default"] = (Object(_microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_0__["once"])(Object(_createTokenProviderFactory__WEBPACK_IMPORTED_MODULE_1__["default"])('lokiAadSearchBoxTokenProvider', 'https://loki.delve.office.com')));


/***/ }),

/***/ "s2S6":
/*!******************************************!*\
  !*** ../sp-search-common/lib/flights.js ***!
  \******************************************/
/*! exports provided: showAnswerBlockFlighted, showAnswerBlockExperimentFlighted, isDisableFolderGroupingFlighted, isSubstrateSearchFlighted, isSubstrateSearchExperimentFlighted, isNewPeopleSearchModelFlighted, use3SEcho, isUse3SAnswersFlighted, isUse3SAnswersExperimentFlighted, isStrictSearchCenterUrlValidationFlighted, isCheckSharePointAndSearchCenterUrlsInDifferentDomainFlighted, isSharePointHomeMicroserviceTokenFlighted, overrideSettingsFromLokiSearchConfiguration, use3SEchoAnswers, enableQueryRules, enableQueryRulesExperiment, isSearchBoxInHeaderFlighted, isOverrideSearchBoxInHeaderFlighted, allOfProdExcludedSelectedFarms, fetchLokiConfigEnabled, noSourceIdForFiles, aadTokenForSubstrateFlighted, aadTokenForSubstrateExperimentFlighted, enableFileProtocolLinkCopyInteraction, isDigestV2Flighted, isDigestV2ExperimentFlighted, is3SFileSuggestionsFlighted, is3SFileSuggestionsExperimentFlighted, is3SPeopleSuggestionsFlighted, is3SPeopleSuggestionsExperimentFlighted, is3SSiteSuggestionsFlighted, is3SSiteSuggestionsExperimentFlighted, isSpDigestForceRefreshFlighted, isSearchApplicationFlighted, use3SEchoSuggestionsInSpHome, use3SEchoSuggestionsInSpPages, use3SEchoSuggestions, fetchStiTokensWhenUsingAad, isUse3SEarlyWarmupFlighted, isUse3SEarlyWarmupExperimentFlighted, isCustomVerticalEnabled, isUnifiedPrefetchFlighted, isUnifiedPrefetchExperimentFlighted, isPersonalizedSpellerFlighted, isPersonalizedSpellerExperimentFlighted, allowMidgardVersionOverrides */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showAnswerBlockFlighted", function() { return showAnswerBlockFlighted; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showAnswerBlockExperimentFlighted", function() { return showAnswerBlockExperimentFlighted; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDisableFolderGroupingFlighted", function() { return isDisableFolderGroupingFlighted; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSubstrateSearchFlighted", function() { return isSubstrateSearchFlighted; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSubstrateSearchExperimentFlighted", function() { return isSubstrateSearchExperimentFlighted; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNewPeopleSearchModelFlighted", function() { return isNewPeopleSearchModelFlighted; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "use3SEcho", function() { return use3SEcho; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isUse3SAnswersFlighted", function() { return isUse3SAnswersFlighted; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isUse3SAnswersExperimentFlighted", function() { return isUse3SAnswersExperimentFlighted; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isStrictSearchCenterUrlValidationFlighted", function() { return isStrictSearchCenterUrlValidationFlighted; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isCheckSharePointAndSearchCenterUrlsInDifferentDomainFlighted", function() { return isCheckSharePointAndSearchCenterUrlsInDifferentDomainFlighted; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSharePointHomeMicroserviceTokenFlighted", function() { return isSharePointHomeMicroserviceTokenFlighted; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "overrideSettingsFromLokiSearchConfiguration", function() { return overrideSettingsFromLokiSearchConfiguration; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "use3SEchoAnswers", function() { return use3SEchoAnswers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "enableQueryRules", function() { return enableQueryRules; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "enableQueryRulesExperiment", function() { return enableQueryRulesExperiment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSearchBoxInHeaderFlighted", function() { return isSearchBoxInHeaderFlighted; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isOverrideSearchBoxInHeaderFlighted", function() { return isOverrideSearchBoxInHeaderFlighted; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "allOfProdExcludedSelectedFarms", function() { return allOfProdExcludedSelectedFarms; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchLokiConfigEnabled", function() { return fetchLokiConfigEnabled; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "noSourceIdForFiles", function() { return noSourceIdForFiles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "aadTokenForSubstrateFlighted", function() { return aadTokenForSubstrateFlighted; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "aadTokenForSubstrateExperimentFlighted", function() { return aadTokenForSubstrateExperimentFlighted; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "enableFileProtocolLinkCopyInteraction", function() { return enableFileProtocolLinkCopyInteraction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDigestV2Flighted", function() { return isDigestV2Flighted; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDigestV2ExperimentFlighted", function() { return isDigestV2ExperimentFlighted; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "is3SFileSuggestionsFlighted", function() { return is3SFileSuggestionsFlighted; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "is3SFileSuggestionsExperimentFlighted", function() { return is3SFileSuggestionsExperimentFlighted; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "is3SPeopleSuggestionsFlighted", function() { return is3SPeopleSuggestionsFlighted; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "is3SPeopleSuggestionsExperimentFlighted", function() { return is3SPeopleSuggestionsExperimentFlighted; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "is3SSiteSuggestionsFlighted", function() { return is3SSiteSuggestionsFlighted; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "is3SSiteSuggestionsExperimentFlighted", function() { return is3SSiteSuggestionsExperimentFlighted; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSpDigestForceRefreshFlighted", function() { return isSpDigestForceRefreshFlighted; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSearchApplicationFlighted", function() { return isSearchApplicationFlighted; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "use3SEchoSuggestionsInSpHome", function() { return use3SEchoSuggestionsInSpHome; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "use3SEchoSuggestionsInSpPages", function() { return use3SEchoSuggestionsInSpPages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "use3SEchoSuggestions", function() { return use3SEchoSuggestions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchStiTokensWhenUsingAad", function() { return fetchStiTokensWhenUsingAad; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isUse3SEarlyWarmupFlighted", function() { return isUse3SEarlyWarmupFlighted; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isUse3SEarlyWarmupExperimentFlighted", function() { return isUse3SEarlyWarmupExperimentFlighted; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isCustomVerticalEnabled", function() { return isCustomVerticalEnabled; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isUnifiedPrefetchFlighted", function() { return isUnifiedPrefetchFlighted; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isUnifiedPrefetchExperimentFlighted", function() { return isUnifiedPrefetchExperimentFlighted; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPersonalizedSpellerFlighted", function() { return isPersonalizedSpellerFlighted; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPersonalizedSpellerExperimentFlighted", function() { return isPersonalizedSpellerExperimentFlighted; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "allowMidgardVersionOverrides", function() { return allowMidgardVersionOverrides; });
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__);

function makeFlightCheck(flight) {
    return function () { return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPFlight"].isEnabled(flight); };
}
var showAnswerBlockFlighted = makeFlightCheck(1407);
var showAnswerBlockExperimentFlighted = makeFlightCheck(1369);
var isDisableFolderGroupingFlighted = makeFlightCheck(1295);
var isSubstrateSearchFlighted = makeFlightCheck(1323);
var isSubstrateSearchExperimentFlighted = makeFlightCheck(1324);
var isNewPeopleSearchModelFlighted = makeFlightCheck(1074);
var use3SEcho = makeFlightCheck(1356);
var isUse3SAnswersFlighted = makeFlightCheck(1574);
var isUse3SAnswersExperimentFlighted = makeFlightCheck(1575);
var isStrictSearchCenterUrlValidationFlighted = makeFlightCheck(1102);
var isCheckSharePointAndSearchCenterUrlsInDifferentDomainFlighted = makeFlightCheck(1260);
var isSharePointHomeMicroserviceTokenFlighted = makeFlightCheck(218);
var overrideSettingsFromLokiSearchConfiguration = makeFlightCheck(1433);
var use3SEchoAnswers = makeFlightCheck(1411);
var enableQueryRules = makeFlightCheck(1571);
var enableQueryRulesExperiment = makeFlightCheck(1572);
var isSearchBoxInHeaderFlighted = makeFlightCheck(1240 /* SPPagesSuiteSearchBox */);
/**
 * This flight can be used in MSIT to turn the search box in the header OFF
 * for certain site collections, where the legacy page context specifies that
 * the search box should be hidden, using legacyPageContext.searchBoxInNavBar === 3.
 */
var isOverrideSearchBoxInHeaderFlighted = makeFlightCheck(1810 /* OverrideSuiteNavSearch */);
var allOfProdExcludedSelectedFarms = makeFlightCheck(1291);
var fetchLokiConfigFlighted = makeFlightCheck(1565);
var fetchLokiConfigEnabled = function () {
    return allOfProdExcludedSelectedFarms() || fetchLokiConfigFlighted();
};
var noSourceIdForFiles = makeFlightCheck(1563);
var aadTokenForSubstrateFlighted = makeFlightCheck(1579);
var aadTokenForSubstrateExperimentFlighted = makeFlightCheck(1580);
var enableFileProtocolLinkCopyInteraction = makeFlightCheck(1598);
var isDigestV2Flighted = makeFlightCheck(1313);
var isDigestV2ExperimentFlighted = makeFlightCheck(1321);
var is3SFileSuggestionsFlighted = function () { return false; };
var is3SFileSuggestionsExperimentFlighted = function () { return false; };
var is3SPeopleSuggestionsFlighted = function () { return false; };
var is3SPeopleSuggestionsExperimentFlighted = function () { return false; };
var is3SSiteSuggestionsFlighted = function () { return false; };
var is3SSiteSuggestionsExperimentFlighted = function () { return false; };
var isSpDigestForceRefreshFlighted = makeFlightCheck(1055);
var isSearchApplicationFlighted = makeFlightCheck(1228);
var use3SEchoSuggestionsInSpHome = makeFlightCheck(1421);
var use3SEchoSuggestionsInSpPages = makeFlightCheck(1422);
var use3SEchoSuggestions = function (hostAppId) {
    if (hostAppId === 'SPHomeWeb') {
        return use3SEchoSuggestionsInSpHome();
    }
    else {
        return use3SEchoSuggestionsInSpPages();
    }
};
var fetchStiTokensWhenUsingAad = makeFlightCheck(1166);
var isUse3SEarlyWarmupFlighted = makeFlightCheck(1682);
var isUse3SEarlyWarmupExperimentFlighted = makeFlightCheck(1720);
var isCustomVerticalEnabled = makeFlightCheck(1721);
var isUnifiedPrefetchFlighted = makeFlightCheck(1062);
var isUnifiedPrefetchExperimentFlighted = makeFlightCheck(1103);
var isPersonalizedSpellerFlighted = makeFlightCheck(1853);
var isPersonalizedSpellerExperimentFlighted = makeFlightCheck(1888);
var allowMidgardVersionOverrides = makeFlightCheck(1823 /* AllowMidgardVersionOverrides */);


/***/ }),

/***/ "x8F/":
/*!*************************************************************!*\
  !*** ../sp-search-common/lib/createTokenProviderFactory.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createTokenProviderFactory; });
/* harmony import */ var _withPromiseCache__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./withPromiseCache */ "3kp/");

var maxDigestRetries = 2;
function createTokenProviderFactory(name, resourceUrl, useSTI) {
    if (useSTI === void 0) { useSTI = false; }
    // tslint:disable-next-line:no-function-expression
    return function tokenProviderFactory(prefetchModule, portalUrl, shouldUseDigestV2, overrideDigest, fetchNewDigestOnTokenHttp403) {
        if (shouldUseDigestV2 === void 0) { shouldUseDigestV2 = false; }
        if (overrideDigest === void 0) { overrideDigest = ''; }
        if (fetchNewDigestOnTokenHttp403 === void 0) { fetchNewDigestOnTokenHttp403 = false; }
        var digestRetryAttempts = 0;
        var shouldRefreshDigest = function () {
            return fetchNewDigestOnTokenHttp403 && digestRetryAttempts > 0 && digestRetryAttempts <= maxDigestRetries;
        };
        return prefetchModule.withPeriodicRefresh(name, Object(_withPromiseCache__WEBPACK_IMPORTED_MODULE_0__["default"])(function () {
            return (shouldUseDigestV2
                ? prefetchModule.fetchSharePointDigestV2({
                    endpoint: portalUrl,
                    overrideDigest: overrideDigest,
                    tokenProvider: function () { return Promise.resolve(''); }
                })
                : prefetchModule.fetchSharePointDigest({
                    endpoint: portalUrl,
                    forceDigestRefresh: shouldRefreshDigest
                }))
                .then(function (res) { return JSON.parse(res.xhr.responseText).d.GetContextWebInformation.FormDigestValue; })
                .then(function (digest) {
                return prefetchModule.fetchAcquireToken({
                    portalUrl: portalUrl,
                    resourceUrl: resourceUrl,
                    digest: digest,
                    useSTI: useSTI
                });
            })
                .then(function (tokenResponse) {
                // tslint:disable-next-line:no-any
                var accessToken = JSON.parse(tokenResponse.xhr.responseText).access_token;
                // Reset on success
                digestRetryAttempts = 0;
                return accessToken;
            })
                .catch(function (res) {
                // If AcquireToken fails and the request returns HTTP 403, we force fetch a new digest on retry
                if (res && res.status && res.status === 403 && fetchNewDigestOnTokenHttp403) {
                    digestRetryAttempts++;
                }
                // Throw a new error since we've swalled the promise rejection
                throw new Error('Failed to retrieve a valid token');
            });
        }));
    };
}


/***/ })

}]);
//# sourceMappingURL=chunk.sp-suite-nav-search-common_none.js.map