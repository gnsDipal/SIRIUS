(window["webpackJsonp_8502035a_8180_4e8d_9513_07d22f75b15c_0_1_0"] = window["webpackJsonp_8502035a_8180_4e8d_9513_07d22f75b15c_0_1_0"] || []).push([["sp-search-common-scopingcontrolmanager"],{

/***/ "Kr93":
/*!****************************!*\
  !*** ./lib/getScenario.js ***!
  \****************************/
/*! exports provided: getScenario */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getScenario", function() { return getScenario; });
var SPSYSTEMPAGES_APP_ID = '7497f5b1-726b-46d8-9798-6be6bbef75c5';
var SPPAGES_APP_ID = 'b6917cb1-93a0-4b97-a84d-7cf49975d4ec';
var SPHOME_APP_ID = '1f019ae1-2de1-4f44-b723-00a6ec1d7445';
var SPSEARCH_APP_ID = 'c1c115a8-896b-4a53-a73c-cde6b8ca00f8';
var SPLIST_APP_ID = '9f012051-e030-4487-9eb7-3365d03be182';
function getScenario(applicationId) {
    var href = window.location.href.toLowerCase();
    switch (applicationId) {
        case SPPAGES_APP_ID:
            if (href.indexOf('/_layouts/15/search.aspx') !== -1) {
                return 'SPO.Search';
            }
            return 'SPO.Page';
        case SPSYSTEMPAGES_APP_ID:
            if (href.indexOf('/_layouts/15/search.aspx') !== -1) {
                return 'SPO.Search';
            }
            else if (href.indexOf('/_layouts/15/news.aspx') !== -1) {
                return 'SPO.Page.News';
            }
            return 'SPO.Page.SystemPage';
        case SPSEARCH_APP_ID:
            return 'SPO.Search';
        case SPHOME_APP_ID:
            return 'SPO.Home';
        case SPLIST_APP_ID:
            return 'SPO.ListHost';
        default: {
            return applicationId;
        }
    }
}


/***/ }),

/***/ "Ve9D":
/*!*****************************!*\
  !*** ./lib/getHubSiteId.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getHubSiteId; });
/* harmony import */ var _parseGuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./parseGuid */ "AT/v");

function getHubSiteId(legacyPageContext) {
    return Object(_parseGuid__WEBPACK_IMPORTED_MODULE_0__["default"])(legacyPageContext.hubSiteId);
}


/***/ }),

/***/ "Xw72":
/*!******************************************!*\
  !*** ./lib/getQueryTextAndIsHubScope.js ***!
  \******************************************/
/*! exports provided: getQueryText, getIsHubScope, fetchAssociatedSitesQueryText, fetchSiteDataBySiteIdAndWebIdQueryText */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getQueryText", function() { return getQueryText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIsHubScope", function() { return getIsHubScope; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchAssociatedSitesQueryText", function() { return fetchAssociatedSitesQueryText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchSiteDataBySiteIdAndWebIdQueryText", function() { return fetchSiteDataBySiteIdAndWebIdQueryText; });
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _getSearchScope__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getSearchScope */ "lIYu");
/* harmony import */ var _getSiteId__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getSiteId */ "hZWw");
/* harmony import */ var _getWebId__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getWebId */ "W90b");
/* harmony import */ var _isScopeControlAvailable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./isScopeControlAvailable */ "A6Yf");
/* harmony import */ var _parseGuid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./parseGuid */ "AT/v");






function getQueryText(legacyPageContext, isHubScope) {
    var queryParams = new URLSearchParams(window.location.search);
    if (queryParams.has('s') && queryParams.has('sid') && !!getScopeFromQueryParam()) {
        return fetchSiteDataByIndexDocIdQueryText(queryParams.get('s'));
    }
    else {
        return !!legacyPageContext.hubSiteId && isHubScope
            ? fetchAssociatedSitesQueryText(legacyPageContext.hubSiteId, legacyPageContext.siteId)
            : fetchSiteDataBySiteIdAndWebIdQueryText(Object(_getSiteId__WEBPACK_IMPORTED_MODULE_2__["default"])(legacyPageContext), Object(_getWebId__WEBPACK_IMPORTED_MODULE_3__["default"])(legacyPageContext));
    }
}
function getIsHubScope(legacyPageContext, scopingControlManager) {
    var scopeFromQueryParam = getScopeFromQueryParam();
    var indexDocIdFromQueryParam = getIndexDocIdFromQueryParam();
    var siteIdFromQueryParam = getSiteIdFromQueryParam();
    if (!!scopeFromQueryParam) {
        if (!!indexDocIdFromQueryParam && !!siteIdFromQueryParam) {
            return scopeFromQueryParam === 'hub';
        }
        else {
            return !!legacyPageContext.isHubSite && scopeFromQueryParam === 'hub';
        }
    }
    if (_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPFlight"].isEnabled(1534 /*CSISpoScopeControl*/) &&
        scopingControlManager &&
        Object(_isScopeControlAvailable__WEBPACK_IMPORTED_MODULE_4__["isScopeControlAvailable"])(legacyPageContext)) {
        return scopingControlManager.getSearchScope(legacyPageContext) === 2 /* Hub */;
    }
    return Object(_getSearchScope__WEBPACK_IMPORTED_MODULE_1__["getSearchScope"])(legacyPageContext) === 2 /* Hub */;
}
function getScopeFromQueryParam() {
    var queryParams = new URLSearchParams(window.location.search);
    if (queryParams.has('scope')) {
        var scopeQueryParam = queryParams.get('scope');
        if (scopeQueryParam === 'hub' || scopeQueryParam === 'site') {
            return scopeQueryParam;
        }
    }
    return undefined;
}
function getIndexDocIdFromQueryParam() {
    var queryParams = new URLSearchParams(window.location.search);
    return queryParams.get('s');
}
function getSiteIdFromQueryParam() {
    var queryParams = new URLSearchParams(window.location.search);
    return queryParams.get('sid');
}
function fetchAssociatedSitesQueryText(hubSiteId, siteId) {
    // !siteId === (siteId === "" && siteId === undefined)
    if (hubSiteId === '' && !siteId) {
        return '';
    }
    var recallScope = '';
    var cleanedDepartmentId = Object(_parseGuid__WEBPACK_IMPORTED_MODULE_5__["default"])(hubSiteId);
    if (cleanedDepartmentId) {
        recallScope = "((DepartmentId:" + cleanedDepartmentId + ") OR (DepartmentId:{" + cleanedDepartmentId + "}))";
    }
    var cleanedSiteId = Object(_parseGuid__WEBPACK_IMPORTED_MODULE_5__["default"])(siteId);
    if (!cleanedSiteId) {
        return recallScope;
    }
    var xRank = '';
    var boostScope = '';
    if (cleanedSiteId) {
        xRank = "XRANK(cb=1000)";
        boostScope = "((SiteID:" + cleanedSiteId + ") OR (SiteID:{" + cleanedSiteId + "}))";
    }
    return "" + recallScope + xRank + boostScope;
}
function fetchSiteDataBySiteIdAndWebIdQueryText(siteId, webId) {
    return "((WebId:" + webId + " AND SiteId:" + siteId + ") OR " + ("(WebId:{" + webId + "} AND SiteId:{" + siteId + "}))");
}
function fetchSiteDataByIndexDocIdQueryText(indexDocId) {
    return "(IndexDocId:" + indexDocId + ")";
}


/***/ }),

/***/ "gPMN":
/*!***************************!*\
  !*** ./lib/getScopeId.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getScopeId; });
/* harmony import */ var _getSearchScope__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getSearchScope */ "lIYu");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__);


function getScopeId(legacyPageContext) {
    var searchScope = Object(_getSearchScope__WEBPACK_IMPORTED_MODULE_0__["getSearchScope"])(legacyPageContext);
    var isHubSearchScopesKSActivated = _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["_SPKillSwitch"].isActivated('31da0528-9ac5-49ed-92a9-6ab75b3b61ae'
    /* '2020/11/24', 'support site and hub search scope both for hub' */
    );
    switch (searchScope) {
        case 1 /* Tenant */:
            return 'org';
        case 2 /* Hub */:
            return !isHubSearchScopesKSActivated
                ? legacyPageContext.isHubSite
                    ? 'spHubHub'
                    : 'spSiteHub'
                : 'spSiteHub';
        case 3 /* Site */:
            return !isHubSearchScopesKSActivated
                ? legacyPageContext.isHubSite
                    ? 'spHubSite'
                    : 'spSiteSite'
                : 'spSiteSite';
        case 0 /* Default */:
        default:
            throw new Error("Invalid SearchScopeType: \"" + searchScope + "\"");
    }
}


/***/ }),

/***/ "kE7S":
/*!*************************************!*\
  !*** ./lib/ScopingControlScopes.js ***!
  \*************************************/
/*! exports provided: siteSiteScope, siteHubScope, hubSiteScope, hubHubScope, orgScope, standAloneSiteScopes, hubChildSiteScopes, rootHubScopes, siteHubScopes, siteScopes, hubScopes, getScopes, getScopesWithPageContextInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "siteSiteScope", function() { return siteSiteScope; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "siteHubScope", function() { return siteHubScope; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hubSiteScope", function() { return hubSiteScope; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hubHubScope", function() { return hubHubScope; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "orgScope", function() { return orgScope; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "standAloneSiteScopes", function() { return standAloneSiteScopes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hubChildSiteScopes", function() { return hubChildSiteScopes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rootHubScopes", function() { return rootHubScopes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "siteHubScopes", function() { return siteHubScopes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "siteScopes", function() { return siteScopes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hubScopes", function() { return hubScopes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getScopes", function() { return getScopes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getScopesWithPageContextInfo", function() { return getScopesWithPageContextInfo; });
/* harmony import */ var _ScopingControlScopesString_resx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ScopingControlScopesString.resx */ "cbxx");
var _ScopingControlScopesString_resx__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./ScopingControlScopesString.resx */ "cbxx", 1);
/* harmony import */ var _getSearchScope__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getSearchScope */ "lIYu");


// siteSiteScope is site scope for sites
var siteSiteScope = {
    id: 'spSiteSite',
    name: _ScopingControlScopesString_resx__WEBPACK_IMPORTED_MODULE_0__["CurrentSiteSearchScope"],
    externalScope: false
};
// siteHubScope is hub scope for sites
var siteHubScope = {
    id: 'spSiteHub',
    name: _ScopingControlScopesString_resx__WEBPACK_IMPORTED_MODULE_0__["AllSitesInHubSearchScope"],
    externalScope: false
};
// hubSiteScope is site scope for hubs
var hubSiteScope = {
    id: 'spHubSite',
    name: _ScopingControlScopesString_resx__WEBPACK_IMPORTED_MODULE_0__["CurrentHubSearchScope"],
    externalScope: false
};
// hubHubScope is hub scope for hubs
var hubHubScope = {
    id: 'spHubHub',
    name: _ScopingControlScopesString_resx__WEBPACK_IMPORTED_MODULE_0__["CurrentHubAndSites"],
    externalScope: false
};
var orgScope = {
    id: 'org',
    name: _ScopingControlScopesString_resx__WEBPACK_IMPORTED_MODULE_0__["WholeOrgSearchScope"],
    externalScope: false,
    searchBoxScopeId: 'global'
};
// Stand-alone site does not have parent and childeren sites
var standAloneSiteScopes = [siteSiteScope, orgScope];
var hubChildSiteScopes = [siteSiteScope, siteHubScope, orgScope];
var rootHubScopes = [hubSiteScope, hubHubScope, orgScope];
var siteHubScopes = [siteSiteScope, siteHubScope, orgScope];
var siteScopes = [siteSiteScope, orgScope];
var hubScopes = [siteHubScope, orgScope];
function getScopes(pageContextInfo) {
    var searchScope = Object(_getSearchScope__WEBPACK_IMPORTED_MODULE_1__["getSearchScope"])(pageContextInfo);
    if (searchScope === 1 /* Tenant */) {
        return [];
    }
    if (pageContextInfo.isHubSite) {
        // Site Type: hub
        return rootHubScopes;
    }
    else if (!!pageContextInfo.hubSiteId) {
        // Site Type: site with associate hub
        return hubChildSiteScopes;
    }
    else {
        // Site Type: site without associate hub
        return standAloneSiteScopes;
    }
}
function getScopesWithPageContextInfo(pageContextInfo) {
    var searchScope = Object(_getSearchScope__WEBPACK_IMPORTED_MODULE_1__["getSearchScope"])(pageContextInfo);
    if (searchScope === 1 /* Tenant */) {
        return [];
    }
    if (pageContextInfo.isHubSite) {
        // Site Type: hub
        return searchScope === 2 /* Hub */ ? hubScopes : siteScopes;
    }
    else if (!!pageContextInfo.hubSiteId) {
        // Site Type: site with associate hub
        return searchScope === 2 /* Hub */ ? hubScopes : siteHubScopes;
    }
    else {
        // Site Type: site without associate hub
        return siteScopes;
    }
}


/***/ }),

/***/ "tvPg":
/*!***************************!*\
  !*** ./lib/fetchSites.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return fetchSites; });
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/sp-diagnostics */ "ut3N");
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _microsoft_sp_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @microsoft/sp-http */ "vlQI");
/* harmony import */ var _microsoft_sp_http__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_http__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @microsoft/sp-lodash-subset */ "Pk8u");
/* harmony import */ var _microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _getHubSiteId__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./getHubSiteId */ "Ve9D");
/* harmony import */ var _getQueryTextAndIsHubScope__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./getQueryTextAndIsHubScope */ "Xw72");
/* harmony import */ var _getSearchScope__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./getSearchScope */ "lIYu");
/* harmony import */ var _getSiteId__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./getSiteId */ "hZWw");
/* harmony import */ var _getWebId__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./getWebId */ "W90b");
/* harmony import */ var _isScopeControlAvailable__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./isScopeControlAvailable */ "A6Yf");
/* harmony import */ var _parseGuid__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./parseGuid */ "AT/v");











function findValueForKey(array, key) {
    var pair = Object(_microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_3__["find"])(array, { Key: key });
    return (pair && pair.Value) || '';
}
// We need an id to identify the site in case it's not in the search index.
var fallbackSiteIndexId = 0;
var sitesCache = {};
function fetchSites(legacyPageContext, client, scopingControlManager, forceHubScope, clientId) {
    var isHubScope;
    var queryText;
    var isGoToHubSERPWithSidKSActivated = !_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPKillSwitch"].isActivated('92ac3d09-a0c6-424f-a902-4c9f68225005' /*'10/12/2020', add s and sid for hub SERP*/);
    var isScopeQueryParamEnable = !_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPKillSwitch"].isActivated('70f1ea55-e90f-4821-8b42-0575be1782fb' /*'11/18/2020', support scope queryParam*/);
    var isAddScopeQueryParamKSActivated = _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPKillSwitch"].isActivated('2316281d-ea4e-43a0-9d80-1c50eb53c084'
    /* '2020/12/03', 'add scope query param when navigating to search' */
    );
    var qosMonitor = new _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__["_QosMonitor"]('SpSearchCommon.fetchSites');
    var isScopingControlAvailable = _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPFlight"].isEnabled(1534 /*CSISpoScopeControl*/) &&
        scopingControlManager &&
        Object(_isScopeControlAvailable__WEBPACK_IMPORTED_MODULE_9__["isScopeControlAvailable"])(legacyPageContext);
    if (isScopeQueryParamEnable) {
        if (!isAddScopeQueryParamKSActivated) {
            isHubScope = forceHubScope || Object(_getQueryTextAndIsHubScope__WEBPACK_IMPORTED_MODULE_5__["getIsHubScope"])(legacyPageContext, scopingControlManager);
        }
        else {
            isHubScope = Object(_getQueryTextAndIsHubScope__WEBPACK_IMPORTED_MODULE_5__["getIsHubScope"])(legacyPageContext, scopingControlManager);
        }
        queryText = Object(_getQueryTextAndIsHubScope__WEBPACK_IMPORTED_MODULE_5__["getQueryText"])(legacyPageContext, isHubScope);
    }
    else {
        if (isScopingControlAvailable) {
            isHubScope = scopingControlManager.getSearchScope(legacyPageContext) === 2 /* Hub */;
        }
        else {
            isHubScope = Object(_getSearchScope__WEBPACK_IMPORTED_MODULE_6__["getSearchScope"])(legacyPageContext) === 2 /* Hub */;
        }
        queryText =
            !!legacyPageContext.hubSiteId && isHubScope
                ? Object(_getQueryTextAndIsHubScope__WEBPACK_IMPORTED_MODULE_5__["fetchAssociatedSitesQueryText"])(legacyPageContext.hubSiteId, legacyPageContext.siteId)
                : Object(_getQueryTextAndIsHubScope__WEBPACK_IMPORTED_MODULE_5__["fetchSiteDataBySiteIdAndWebIdQueryText"])(Object(_getSiteId__WEBPACK_IMPORTED_MODULE_7__["default"])(legacyPageContext), Object(_getWebId__WEBPACK_IMPORTED_MODULE_8__["default"])(legacyPageContext));
    }
    var isChangeClientFunctionKSEnabled = _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPKillSwitch"].isActivated(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Guid"].tryParse('44d6a344-2302-44b5-b9d2-ef2b03585c47'), '7/20/2020', 'Change clienttype and clientfunction');
    var clientTypeAndFunction = !isChangeClientFunctionKSEnabled
        ? "&ClientType='" + clientId + "'&ClientFunction='fetchSites'"
        : "&ClientType='SpClient'";
    /* tslint:disable */
    var url = legacyPageContext.webAbsoluteUrl + "/_api/search/query?QueryText='" + queryText + "'" +
        "&QueryTemplate='{searchterms} (contentclass=STS_Site OR contentclass=STS_Web)'" +
        "&SelectProperties='SiteId,WebId,Path,DepartmentId,Title,IsHubSite,RelatedHubSites'" +
        "&EnableQueryRules=false&RowLimit=100&Properties='EnableDynamicGroups:true,EnableMultiGeoSearch:true,ClientFunction:fetchSites'" +
        ("" + clientTypeAndFunction);
    /* tslint:enable */
    return (sitesCache[url] ||
        (sitesCache[url] = client
            .get(url, _microsoft_sp_http__WEBPACK_IMPORTED_MODULE_2__["SPHttpClient"].configurations.v1)
            .then(function (req) { return req.json(); })
            .then(function (searchResponse) {
            if (searchResponse &&
                searchResponse.PrimaryQueryResult &&
                searchResponse.PrimaryQueryResult.RelevantResults &&
                searchResponse.PrimaryQueryResult.RelevantResults.Table &&
                searchResponse.PrimaryQueryResult.RelevantResults.Table.Rows &&
                searchResponse.PrimaryQueryResult.RelevantResults.Table.Rows.length > 0) {
                var rows = searchResponse.PrimaryQueryResult.RelevantResults.Table.Rows;
                var sites = rows.map(function (r) {
                    var cells = r.Cells;
                    var path = findValueForKey(cells, 'Path');
                    var webId = findValueForKey(cells, 'WebId');
                    var siteId = findValueForKey(cells, 'SiteId');
                    var title = findValueForKey(cells, 'Title');
                    var docId = findValueForKey(cells, 'DocId');
                    var cleanedSearchWebId = Object(_parseGuid__WEBPACK_IMPORTED_MODULE_10__["default"])(webId);
                    var cleanedSearchSiteId = Object(_parseGuid__WEBPACK_IMPORTED_MODULE_10__["default"])(siteId);
                    var isDefaultSiteOld = Object(_getWebId__WEBPACK_IMPORTED_MODULE_8__["default"])(legacyPageContext) === cleanedSearchWebId &&
                        Object(_getSiteId__WEBPACK_IMPORTED_MODULE_7__["default"])(legacyPageContext) === cleanedSearchSiteId;
                    var isDefaultSiteNew = isScopingControlAvailable && isHubScope
                        ? Object(_getHubSiteId__WEBPACK_IMPORTED_MODULE_4__["default"])(legacyPageContext) === cleanedSearchSiteId
                        : Object(_getWebId__WEBPACK_IMPORTED_MODULE_8__["default"])(legacyPageContext) === cleanedSearchWebId &&
                            Object(_getSiteId__WEBPACK_IMPORTED_MODULE_7__["default"])(legacyPageContext) === cleanedSearchSiteId;
                    var isDefaultSite = isScopeQueryParamEnable
                        ? getIsDefaultSite(isScopingControlAvailable, isHubScope, legacyPageContext, webId, siteId, docId)
                        : isGoToHubSERPWithSidKSActivated
                            ? isDefaultSiteNew
                            : isDefaultSiteOld;
                    var isHubSite = isDefaultSite && isHubScope;
                    return {
                        siteId: siteId,
                        webId: webId,
                        id: docId,
                        sitePath: path,
                        url: path,
                        name: title,
                        title: title,
                        departmentId: findValueForKey(cells, 'DepartmentId'),
                        relatedHubSites: findValueForKey(cells, 'RelatedHubSites'),
                        isHubSite: isHubSite,
                        isDefaultSite: isDefaultSite
                    };
                });
                // If no defaultsite found, means site not in index
                if (Object(_microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_3__["find"])(sites, { isDefaultSite: true })) {
                    qosMonitor.writeSuccess();
                    return sites;
                }
                else {
                    throw new Error('Site not found.');
                }
            }
            throw new Error('Sites not found.');
        })
            .catch(function (error) {
            qosMonitor.writeUnexpectedFailure(undefined, error);
            return [
                {
                    // We keep this a negative value to make sure that we do not
                    // take it as a real site index id.
                    id: "" + --fallbackSiteIndexId,
                    siteId: Object(_getSiteId__WEBPACK_IMPORTED_MODULE_7__["default"])(legacyPageContext),
                    webId: Object(_getWebId__WEBPACK_IMPORTED_MODULE_8__["default"])(legacyPageContext),
                    sitePath: legacyPageContext.webAbsoluteUrl,
                    url: legacyPageContext.webAbsoluteUrl,
                    name: legacyPageContext.webTitle,
                    isHubSite: !!legacyPageContext.isHubSite,
                    isDefaultSite: true
                }
            ];
        })));
}
function getIsDefaultSite(isScopingControlAvailable, isHubScope, legacyPageContext, webId, siteId, docId) {
    var queryParams = new URLSearchParams(window.location.search);
    var hasScopeSandSid = queryParams.has('scope') && queryParams.has('s') && queryParams.has('sid');
    var indexDocIdFromUrl = queryParams.get('s');
    var cleanedSearchWebId = Object(_parseGuid__WEBPACK_IMPORTED_MODULE_10__["default"])(webId);
    var cleanedSearchSiteId = Object(_parseGuid__WEBPACK_IMPORTED_MODULE_10__["default"])(siteId);
    return hasScopeSandSid
        ? indexDocIdFromUrl === docId
        : isScopingControlAvailable && isHubScope
            ? Object(_getHubSiteId__WEBPACK_IMPORTED_MODULE_4__["default"])(legacyPageContext) === cleanedSearchSiteId
            : Object(_getWebId__WEBPACK_IMPORTED_MODULE_8__["default"])(legacyPageContext) === cleanedSearchWebId &&
                Object(_getSiteId__WEBPACK_IMPORTED_MODULE_7__["default"])(legacyPageContext) === cleanedSearchSiteId;
}


/***/ }),

/***/ "vixR":
/*!**************************************!*\
  !*** ./lib/ScopingControlManager.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @microsoft/sp-lodash-subset */ "Pk8u");
/* harmony import */ var _microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ms/sp-telemetry */ "2q6Q");
/* harmony import */ var _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _1js_search_plugin_scoping_control_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @1js/search-plugin-scoping-control-api */ "+klg");
/* harmony import */ var _fetchSites__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./fetchSites */ "tvPg");
/* harmony import */ var _getScenario__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./getScenario */ "Kr93");
/* harmony import */ var _getScopeId__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./getScopeId */ "gPMN");
/* harmony import */ var _getSearchScope__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./getSearchScope */ "lIYu");
/* harmony import */ var _getSiteId__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./getSiteId */ "hZWw");
/* harmony import */ var _getWebId__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./getWebId */ "W90b");
/* harmony import */ var _isScopeControlAvailable__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./isScopeControlAvailable */ "A6Yf");
/* harmony import */ var _ScopeId__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./ScopeId */ "BkCc");
/* harmony import */ var _ScopingControlScopes__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./ScopingControlScopes */ "kE7S");














var isFixInWholeOrgKillSwitchActivated = _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["_SPKillSwitch"].isActivated('e404f8c8-bda0-4435-a9b6-803f05f92a23' /*'01/07/2021', fixing is in site verticals or note*/);
var isHubSearchScopesKSActivated = _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["_SPKillSwitch"].isActivated('31da0528-9ac5-49ed-92a9-6ab75b3b61ae'
/* '2020/11/24', 'support site and hub search scope both for hub' */
);
var isAddScopeQueryParamKSActivated = _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["_SPKillSwitch"].isActivated('2316281d-ea4e-43a0-9d80-1c50eb53c084'
/* '2020/12/03', 'add scope query param when navigating to search' */
);
var isScopeStringChangeForSERPKSActivated = _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["_SPKillSwitch"].isActivated('c9843473-aa6b-4552-91c0-6944593b6cd1'
/* '2020/12/01', 'change scope string options in SERP' */
);
var ScopingControlManager = /** @class */ (function () {
    function ScopingControlManager() {
    }
    ScopingControlManager.prototype.configureScopingControl = function (spPageContextInfo, searchPageProviderPromise, instrumenter, spHttpClient, clientSideApplicationId) {
        if (Object(_isScopeControlAvailable__WEBPACK_IMPORTED_MODULE_11__["isScopeControlAvailable"])(spPageContextInfo)) {
            var scopeId = Object(_getScopeId__WEBPACK_IMPORTED_MODULE_7__["default"])(spPageContextInfo);
            Object(_1js_search_plugin_scoping_control_api__WEBPACK_IMPORTED_MODULE_4__["configureScopingControl"])(this.getScopingControlConfig(scopeId, searchPageProviderPromise, instrumenter, spPageContextInfo, spHttpClient, clientSideApplicationId), instrumenter);
        }
    };
    ScopingControlManager.prototype.deactivateScopingControl = function () {
        Object(_1js_search_plugin_scoping_control_api__WEBPACK_IMPORTED_MODULE_4__["deactivateScopingControl"])();
    };
    ScopingControlManager.prototype.getSearchScope = function (spPageContextInfo) {
        if (Object(_isScopeControlAvailable__WEBPACK_IMPORTED_MODULE_11__["isScopeControlAvailable"])(spPageContextInfo)) {
            return getSearchScopeFromScopeId(this.getActiveScopeId());
        }
        return Object(_getSearchScope__WEBPACK_IMPORTED_MODULE_8__["getSearchScope"])(spPageContextInfo);
    };
    ScopingControlManager.prototype.getActiveScopeId = function () {
        return Object(_1js_search_plugin_scoping_control_api__WEBPACK_IMPORTED_MODULE_4__["getActiveScopeId"])();
    };
    /* reconfigure scoping control in following scenarios:
     * 1. search from page to SERP 2.in SERP, interacting with breadcrumb
     */
    ScopingControlManager.prototype.reconfigureScopingControlFromSearchRoute = function (props, instrumenter) {
        var _a, _b;
        var isWholeOrgScope = !isFixInWholeOrgKillSwitchActivated
            ? !props.pathname.match('site(?!s$)')
            : props.pathname.indexOf('site') === -1;
        var scopingControlConfig = Object(_1js_search_plugin_scoping_control_api__WEBPACK_IMPORTED_MODULE_4__["getConfiguration"])();
        if (scopingControlConfig) {
            if (!isWholeOrgScope) {
                // Go through logic again for this if block once we support three scope options for hub
                // VSO 938046: Support both current site and all sites in hub scopes
                // https://onedrive.visualstudio.com/CSI/_workitems/edit/938046
                if (props.scopes && props.scopes[0].type === 'site' && props.scopes[0].data) {
                    var siteScope = props.scopes[0];
                    var siteScopeData = props.scopes[0].data;
                    var siteAssociation = (_b = (_a = siteScope) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.siteAssociation;
                    var site_1 = siteScopeData.site;
                    var otherSites = siteAssociation && siteAssociation.filter(function (s) { return s.siteId !== site_1.siteId; });
                    if (otherSites && otherSites.length > 0) {
                        if (!isScopeStringChangeForSERPKSActivated) {
                            // [current site, all sites in hub, whole org] OR [current hub, current hub and sites, whole org]
                            var isHubSearchScope = site_1.isHubSite;
                            var isHubSite = site_1.relatedHubSites.indexOf(site_1.siteId) !== -1;
                            scopingControlConfig.activeScopeId = isHubSite
                                ? isHubSearchScope
                                    ? 'spHubHub'
                                    : 'spHubSite'
                                : isHubSearchScope
                                    ? 'spSiteHub'
                                    : 'spSiteSite';
                            scopingControlConfig.scopes = isHubSite ? _ScopingControlScopes__WEBPACK_IMPORTED_MODULE_13__["rootHubScopes"] : _ScopingControlScopes__WEBPACK_IMPORTED_MODULE_13__["hubChildSiteScopes"];
                        }
                        else {
                            // [site, hub, whole org] OR [hub, whole org]
                            // site or hub has hub?
                            // not associated site: site, whole org
                            // associated site: site, hub, whole org
                            // hub which does not have hub: site, hub, whole org
                            // hub which has hub: site, hub, whole org
                            // [site, hub, whole org] OR [hub, whole org]
                            var isHubSite = site_1.isHubSite;
                            scopingControlConfig.activeScopeId = isHubSite ? 'spSiteHub' : 'spSiteSite';
                            scopingControlConfig.scopes = isHubSite ? _ScopingControlScopes__WEBPACK_IMPORTED_MODULE_13__["hubScopes"] : _ScopingControlScopes__WEBPACK_IMPORTED_MODULE_13__["siteHubScopes"];
                        }
                    }
                    else {
                        // [site, whole org]
                        scopingControlConfig.activeScopeId = 'spSiteSite';
                        scopingControlConfig.scopes = !isScopeStringChangeForSERPKSActivated
                            ? _ScopingControlScopes__WEBPACK_IMPORTED_MODULE_13__["standAloneSiteScopes"]
                            : _ScopingControlScopes__WEBPACK_IMPORTED_MODULE_13__["siteScopes"];
                    }
                    Object(_1js_search_plugin_scoping_control_api__WEBPACK_IMPORTED_MODULE_4__["configureScopingControl"])(scopingControlConfig, instrumenter);
                }
                else {
                    // no scoping control for non-site scope(eg. people-centric search)
                    instrumenter.setProps({
                        scopingControl: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, instrumenter.props.scopingControl), { activeScopeId: undefined, scopes: undefined })
                    });
                }
            }
            else {
                // no scoping control for whole org scope in SERP
                instrumenter.setProps({
                    scopingControl: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, instrumenter.props.scopingControl), { activeScopeId: undefined, scopes: undefined })
                });
            }
        }
    };
    ScopingControlManager.prototype.getScopingControlConfig = function (scopeId, searchPageProviderPromise, instrumenter, spPageContextInfo, spHttpClient, clientSideApplicationId) {
        var _this = this;
        return {
            scopes: !isHubSearchScopesKSActivated
                ? Object(_ScopingControlScopes__WEBPACK_IMPORTED_MODULE_13__["getScopes"])(spPageContextInfo)
                : Object(_ScopingControlScopes__WEBPACK_IMPORTED_MODULE_13__["getScopesWithPageContextInfo"])(spPageContextInfo),
            activeScopeId: scopeId,
            onChange: function (searchText, scope) {
                Object(_1js_search_plugin_scoping_control_api__WEBPACK_IMPORTED_MODULE_4__["setActiveScopeId"])(scope.id);
                var searchTriggered = !!searchText && window.location.href.toLowerCase().indexOf('/_layouts/15/search.aspx') !== -1;
                if (!_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["_SPKillSwitch"].isActivated('7ba71c16-a767-4646-992c-e087c90f8482' /*'07/23/2020', Add scoping control usage telemetry*/)) {
                    _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_3__["_EngagementLogger"].log({
                        name: 'SuiteNavSearchBox.ScopeChanged',
                        isIntentional: true,
                        extraData: {
                            scenario: Object(_getScenario__WEBPACK_IMPORTED_MODULE_6__["getScenario"])(clientSideApplicationId),
                            initialScope: scopeId,
                            targetScope: scope.id,
                            searchTriggered: searchTriggered
                        }
                    });
                }
                if (searchTriggered) {
                    if (!_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["_SPKillSwitch"].isActivated('7ba71c16-a767-4646-992c-e087c90f8482' /*'07/23/2020', Add scoping control usage telemetry*/)) {
                        _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_3__["_EngagementLogger"].log({
                            name: 'SuiteNavSearchBox.Click',
                            isIntentional: true,
                            extraData: {
                                scenario: Object(_getScenario__WEBPACK_IMPORTED_MODULE_6__["getScenario"])(clientSideApplicationId),
                                trigger: 'ScopeControl'
                            }
                        });
                    }
                    if (!isAddScopeQueryParamKSActivated) {
                        // tslint:disable-next-line: no-floating-promises
                        searchPageProviderPromise.then(function (searchPageProvider) {
                            var queryParams = new URLSearchParams(window.location.search);
                            if (Object(_ScopeId__WEBPACK_IMPORTED_MODULE_12__["isHubScope"])(scope.id)) {
                                if (queryParams.has('s') && queryParams.has('sid')) {
                                    searchPageProvider.navigateToSearch(searchText, scope.id, queryParams.get('s'), queryParams.get('sid'));
                                }
                                else {
                                    // tslint:disable-next-line: no-floating-promises
                                    Object(_fetchSites__WEBPACK_IMPORTED_MODULE_5__["default"])(spPageContextInfo, spHttpClient, _this, true).then(function (sites) {
                                        var hubSites = sites.filter(function (s) { return s.siteId === spPageContextInfo.hubSiteId; });
                                        if (hubSites && hubSites.length > 0) {
                                            searchPageProvider.navigateToSearch(searchText, scope.id, hubSites[0].id, hubSites[0].siteId);
                                        }
                                    });
                                }
                            }
                            else if (Object(_ScopeId__WEBPACK_IMPORTED_MODULE_12__["isSiteScope"])(scope.id)) {
                                if (queryParams.has('s') && queryParams.has('sid')) {
                                    searchPageProvider.navigateToSearch(searchText, scope.id, queryParams.get('s'), queryParams.get('sid'));
                                }
                                else {
                                    searchPageProvider.navigateToSearch(searchText, scope.id);
                                }
                            }
                            else {
                                // scope.id === 'org'
                                searchPageProvider.navigateToSearch(searchText, scope.id);
                            }
                        });
                    }
                    else {
                        if (!_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["_SPKillSwitch"].isActivated('92ac3d09-a0c6-424f-a902-4c9f68225005' /*'09/23/2020', add s and sid for hub SERP*/)) {
                            // adding s and sid for hub SERP when changing scope to hub in SERP
                            // tslint:disable-next-line: no-floating-promises
                            Promise.all([
                                Object(_fetchSites__WEBPACK_IMPORTED_MODULE_5__["default"])(spPageContextInfo, spHttpClient, _this),
                                searchPageProviderPromise
                            ]).then(function (_a) {
                                var sites = _a[0], searchPageProvider = _a[1];
                                var isHubSearchScope = !isHubSearchScopesKSActivated
                                    ? Object(_ScopeId__WEBPACK_IMPORTED_MODULE_12__["isHubScope"])(scope.id)
                                    : scope.id === 'spSiteHub';
                                if (isHubSearchScope) {
                                    var hubSites = sites.filter(function (s) { return s.siteId === spPageContextInfo.hubSiteId; });
                                    if (hubSites && hubSites.length > 0) {
                                        searchPageProvider.navigateToSearch(searchText, scope.id, hubSites[0].id, hubSites[0].siteId);
                                    }
                                }
                                else {
                                    searchPageProvider.navigateToSearch(searchText, scope.id);
                                }
                            });
                        }
                        else {
                            // tslint:disable-next-line: no-floating-promises
                            searchPageProviderPromise.then(function (provider) { return provider.navigateToSearch(searchText, scope.id); });
                        }
                    }
                }
                else {
                    // update suggestions by switching scopes through scoping control
                    var isNotOrgSearchScope = !isHubSearchScopesKSActivated
                        ? Object(_ScopeId__WEBPACK_IMPORTED_MODULE_12__["isNotOrgScope"])(scope.id)
                        : scope.id === 'spSiteSite' || scope.id === 'spSiteHub';
                    if (isNotOrgSearchScope) {
                        // tslint:disable-next-line:no-floating-promises
                        Object(_fetchSites__WEBPACK_IMPORTED_MODULE_5__["default"])(spPageContextInfo, spHttpClient, _this).then(function (sites) {
                            if (!_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["_SPKillSwitch"].isActivated('92ac3d09-a0c6-424f-a902-4c9f68225005' /*'10/12/2020', add s and sid for hub SERP*/)) {
                                var isDefaultSite = true;
                                instrumenter.setProps({
                                    scenarioContext: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, instrumenter.props.scenarioContext), { site: Object(_microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_2__["find"])(sites, { isDefaultSite: isDefaultSite }), siteAssociation: sites })
                                });
                            }
                            else {
                                var webId = Object(_getWebId__WEBPACK_IMPORTED_MODULE_10__["default"])(spPageContextInfo);
                                var siteId = Object(_getSiteId__WEBPACK_IMPORTED_MODULE_9__["default"])(spPageContextInfo);
                                instrumenter.setProps({
                                    scenarioContext: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, instrumenter.props.scenarioContext), { site: Object(_microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_2__["find"])(sites, { webId: webId, siteId: siteId }), siteAssociation: sites })
                                });
                            }
                        });
                    }
                    // tslint:disable-next-line:no-string-literal
                    setTimeout(function () { var _a; return (_a = window['O365Shell'].Search) === null || _a === void 0 ? void 0 : _a.FocusSearchBox(); }, 0);
                }
            }
        };
    };
    return ScopingControlManager;
}());
/* harmony default export */ __webpack_exports__["default"] = (ScopingControlManager);
function getSearchScopeFromScopeId(scopeId) {
    switch (scopeId) {
        case undefined:
            return undefined;
        case 'spSiteSite':
        case 'spHubSite':
            return 3 /* Site */;
        case 'spSiteHub':
        case 'spHubHub':
            return 2 /* Hub */;
        case 'org':
            return 1 /* Tenant */;
        default:
            throw new Error("Invalid\u00A0SearchScopeId:\u00A0\"" + scopeId + "\"");
    }
}


/***/ })

}]);
//# sourceMappingURL=chunk.sp-search-common-scopingcontrolmanager_none.js.map