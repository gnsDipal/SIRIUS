(window["webpackJsonp_8502035a_8180_4e8d_9513_07d22f75b15c_0_1_0"] = window["webpackJsonp_8502035a_8180_4e8d_9513_07d22f75b15c_0_1_0"] || []).push([["sp-search-common-searchpageprovider"],{

/***/ "RMNh":
/*!******************************************************!*\
  !*** ./lib/searchPageProvider/SearchPageProvider.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/sp-diagnostics */ "ut3N");
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _microsoft_sp_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @microsoft/sp-http */ "vlQI");
/* harmony import */ var _microsoft_sp_http__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_http__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ScopeId__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ScopeId */ "BkCc");




var LOG_SOURCE = _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__["_LogSource"].create('SearchPageProvider');
/**
 * Provides navigation to search result pages.
 */
var SearchPageProvider = /** @class */ (function () {
    function SearchPageProvider(spHttpClient, defaultSubmitSearch, getPageContext, pushUrl) {
        this._spHttpClient = spHttpClient;
        this._defaultSubmitSearch = defaultSubmitSearch;
        this._getPageContext = getPageContext;
        this._pushUrl = pushUrl;
        this._searchUrlByWebMap = new Map();
        this._hubSiteUrlByIdMap = new Map();
    }
    SearchPageProvider.prototype.navigateToSearch = function (searchText, activeScope, s, sid) {
        var _this = this;
        var qosMonitor = new _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__["_QosMonitor"]('SearchPageProvider.navigateToSearch');
        var webUrl = this._getPageContext().web.absoluteUrl;
        if (_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPFlight"].isEnabled(1534 /*CSISpoScopeControl*/)) {
            var isHubSearchScopesKSActivated = _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPKillSwitch"].isActivated('31da0528-9ac5-49ed-92a9-6ab75b3b61ae'
            /* '2020/11/24', 'support site and hub search scope both for hub' */
            );
            var isHubSearchScope = !isHubSearchScopesKSActivated
                ? Object(_ScopeId__WEBPACK_IMPORTED_MODULE_3__["isHubScope"])(activeScope)
                : activeScope === 'spSiteHub';
            var absoluteUrlPromise = isHubSearchScope
                ? this._getHubWebUrl(webUrl, this._getPageContext().legacyPageContext.hubSiteId)
                : Promise.resolve(webUrl);
            absoluteUrlPromise.then(function (absoluteUrl) {
                if (activeScope && activeScope === 'org') {
                    _this._syncNavigateToSearch(searchText, undefined, qosMonitor, absoluteUrl);
                }
                else {
                    // tslint:disable-next-line: no-floating-promises
                    _this._executeWithSearchUrl(absoluteUrl, function (searchUrl) {
                        if (!_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPKillSwitch"].isActivated('92ac3d09-a0c6-424f-a902-4c9f68225005' /*'10/12/2020', add s and sid for hub SERP*/)) {
                            _this._syncNavigateToSearch(searchText, searchUrl, qosMonitor, webUrl, s, sid);
                        }
                        else {
                            _this._syncNavigateToSearch(searchText, searchUrl, qosMonitor, absoluteUrl);
                        }
                    });
                }
            });
        }
        else {
            // tslint:disable-next-line: no-floating-promises
            this._executeWithSearchUrl(webUrl, function (searchUrl) {
                return _this._syncNavigateToSearch(searchText, searchUrl, qosMonitor, webUrl);
            });
        }
    };
    SearchPageProvider.prototype.getSearchResultsPage = function (siteUrl) {
        if (!siteUrl) {
            siteUrl = this._getPageContext().site.absoluteUrl;
        }
        return this._executeWithSearchUrl(siteUrl, function (searchUrl) { return searchUrl; });
    };
    /**
     * Executes a function with the search URL for a specific site.
     * @param webUrl - Web URL to get the search URL from.
     * @param func - Function to execute with the search URL.
     */
    SearchPageProvider.prototype._executeWithSearchUrl = function (webUrl, func) {
        var _this = this;
        if (!this._searchUrlByWebMap.has(webUrl)) {
            return this._requestWebSearchUrl(webUrl).then(function () { return func(_this._searchUrlByWebMap.get(webUrl)); });
        }
        else {
            return Promise.resolve(func(this._searchUrlByWebMap.get(webUrl)));
        }
    };
    /**
     * Synchronously navigate to the search page. Expects the search URL for the site to be fetched already.
     * To be used only within navigateToSearch, which ensures the search URL is present.
     */
    SearchPageProvider.prototype._syncNavigateToSearch = function (searchText, url, qosMonitor, absoluteUrl, s, sid) {
        if (url) {
            var searchUrl = this._buildSearchUrl(url, searchText);
            this._logNavigation(true, qosMonitor);
            this._pushUrl(searchUrl, {}, false /* replace */, true /* raisePopState */);
        }
        else {
            this._logNavigation(false, qosMonitor);
            if (!_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPKillSwitch"].isActivated('92ac3d09-a0c6-424f-a902-4c9f68225005' /*'10/12/2020', add s and sid for hub SERP*/)) {
                this._defaultSubmitSearch(searchText, absoluteUrl, s, sid);
            }
            else {
                this._defaultSubmitSearch(searchText, absoluteUrl);
            }
        }
    };
    /**
     * Log a navigation in both QOS monitor and engagement log.
     */
    SearchPageProvider.prototype._logNavigation = function (isCustomUrl, qosMonitor) {
        qosMonitor.writeSuccess({ isCustomUrl: isCustomUrl });
        _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__["_EngagementLogger"].logEvent('SearchBox.NavigateToSearch', isCustomUrl ? 'CustomPage' : 'DefaultPage');
    };
    /**
     * We need both ?k and ?q for support of classic and modern search results pages
     */
    SearchPageProvider.prototype._buildSearchUrl = function (url, searchText) {
        if (url.indexOf('?') !== -1) {
            // Check if URL already has query params
            return url + "&q=" + searchText + "&k=" + searchText;
        }
        else {
            return url + "?q=" + searchText + "&k=" + searchText;
        }
    };
    /**
     * Request the search URL for the current web.
     * It always writes in the web -> search URL map, regardless of success or failure.
     * In case of failure, or no custom search URL, it writes undefined in the map.
     */
    SearchPageProvider.prototype._requestWebSearchUrl = function (webUrl) {
        var _this = this;
        _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__["_TraceLogger"].logVerbose(LOG_SOURCE, "Requesting search page URL for web: \"" + webUrl + "\"");
        return this._getSearchUrlFromApi(webUrl)
            .then(function (searchUrl) {
            _this._searchUrlByWebMap.set(webUrl, _this._urlIsValidSearchResultsPage(searchUrl)
                ? _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["UrlUtilities"].resolve(searchUrl, window.location.origin)
                : undefined);
        })
            .catch(function (error) {
            _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__["_TraceLogger"].logError(LOG_SOURCE, error);
            _this._searchUrlByWebMap.set(webUrl, undefined);
        });
    };
    SearchPageProvider.prototype._requestHubUrlById = function (webUrl, hubSiteId) {
        var _this = this;
        return this._getHubSiteUrlFromApi(webUrl, hubSiteId).then(function (hubSiteUrl) {
            _this._hubSiteUrlByIdMap.set(hubSiteId, hubSiteUrl);
        });
    };
    SearchPageProvider.prototype._getHubWebUrl = function (siteUrl, hubSiteId) {
        var _this = this;
        if (hubSiteId) {
            if (!this._hubSiteUrlByIdMap.has(hubSiteId)) {
                // TODO Remove bang operator. Make sure hubSiteUrlByIdMap actually has the item.
                return this._requestHubUrlById(siteUrl, hubSiteId).then(function () { return _this._hubSiteUrlByIdMap.get(hubSiteId); });
            }
            else {
                // TODO Remove bang operator. Make sure hubSiteUrlByIdMap actually has the item.
                return Promise.resolve(this._hubSiteUrlByIdMap.get(hubSiteId));
            }
        }
        return Promise.reject(new Error('hubSiteId is empty'));
    };
    SearchPageProvider.prototype._getSearchUrlFromApi = function (webUrl) {
        return this._spHttpClient
            .get(webUrl + "/_api/search/resultspageaddress", _microsoft_sp_http__WEBPACK_IMPORTED_MODULE_2__["SPHttpClient"].configurations.v1)
            .then(function (response) { return response.json(); })
            .then(function (jsonResponse) {
            return jsonResponse && jsonResponse.value;
        });
    };
    SearchPageProvider.prototype._getHubSiteUrlFromApi = function (webUrl, hubSiteId) {
        if (!_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPKillSwitch"].isActivated('75a5cd18-3fa0-4750-af78-5fb68206b318' /* '09/24/2020', 'Sometimes API returns with odata verbose' */)) {
            var qosMonitor_1 = new _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__["_QosMonitor"]('SearchPageProvider.GetHubSiteUrlFromApi');
            return this._spHttpClient
                .get(webUrl + "/_api/HubSites/GetById?hubSiteId='" + hubSiteId + "'", _microsoft_sp_http__WEBPACK_IMPORTED_MODULE_2__["SPHttpClient"].configurations.v1)
                .then(function (response) { return response.json(); })
                .then(function (jsonResponse) {
                var _a, _b, _c;
                if ((_a = jsonResponse) === null || _a === void 0 ? void 0 : _a.SiteUrl) {
                    qosMonitor_1.writeSuccess();
                    return jsonResponse.SiteUrl;
                }
                else if ((_c = (_b = jsonResponse) === null || _b === void 0 ? void 0 : _b.d) === null || _c === void 0 ? void 0 : _c.SiteUrl) {
                    qosMonitor_1.writeExpectedFailure('OdataVerbose');
                    return jsonResponse.d.SiteUrl;
                }
                else {
                    qosMonitor_1.writeUnexpectedFailure('WrongResponse');
                    throw new Error('Response schema is not correct');
                }
            })
                .catch(function (error) {
                qosMonitor_1.writeUnexpectedFailure('ApiError', error);
                throw error;
            });
        }
        else {
            return this._spHttpClient
                .get(webUrl + "/_api/HubSites/GetById?hubSiteId='" + hubSiteId + "'", _microsoft_sp_http__WEBPACK_IMPORTED_MODULE_2__["SPHttpClient"].configurations.v1)
                .then(function (response) { return response.json(); })
                .then(function (jsonResponse) {
                return jsonResponse && jsonResponse.SiteUrl;
            });
        }
    };
    /**
     * Validates that a URL is in the same domain as the current SharePoint site.
     * This allows both relative URLs, and absolute URLs with the same domain.
     * @param url - Url to validate.
     */
    SearchPageProvider.prototype._urlIsValidSearchResultsPage = function (url) {
        if (_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["UrlUtilities"].isRelativeUrl(url)) {
            return true;
        }
        var siteHostname = new URL(this._getPageContext().site.absoluteUrl).hostname;
        try {
            var hostname = new URL(url).hostname;
            return hostname === siteHostname;
        }
        catch (error) {
            // This means the url passed as a parameter is not a valid URL
            return false;
        }
    };
    return SearchPageProvider;
}());
/* harmony default export */ __webpack_exports__["default"] = (SearchPageProvider);


/***/ })

}]);
//# sourceMappingURL=chunk.sp-search-common-searchpageprovider_none.js.map