(window["webpackJsonp_1e2cdec9_1360_4295_b73c_98d6f51866d5_0_1_0"] = window["webpackJsonp_1e2cdec9_1360_4295_b73c_98d6f51866d5_0_1_0"] || []).push([["vendors~spcx-siteheaderstatemanager"],{

/***/ "A6v3":
/*!********************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-datasources@45.13.10_e509c819ab980023b76e5746ec0fc9e2/node_modules/@ms/odsp-datasources/lib/interfaces/groups/SourceType.js ***!
  \********************************************************************************************************************************************************************************************/
/*! exports provided: SourceType, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SourceType", function() { return SourceType; });
/**
 * Represents the source of the group data.
 */
var SourceType;
(function (SourceType) {
    /** Group data comes from cache. */
    SourceType[SourceType["Cache"] = 0] = "Cache";
    /** Group data comes from the server. */
    SourceType[SourceType["Server"] = 1] = "Server";
    /** Group data is missing. */
    SourceType[SourceType["None"] = 2] = "None";
    /** Group data fetching error. */
    SourceType[SourceType["Error"] = 3] = "Error";
})(SourceType || (SourceType = {}));
/* harmony default export */ __webpack_exports__["default"] = (SourceType);
//# sourceMappingURL=SourceType.js.map

/***/ }),

/***/ "DRdk":
/*!******************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-datasources@45.13.10_e509c819ab980023b76e5746ec0fc9e2/node_modules/@ms/odsp-datasources/lib/interfaces/WebTemplateType.js ***!
  \******************************************************************************************************************************************************************************************/
/*! exports provided: WebTemplateType, isTeamSiteLike, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebTemplateType", function() { return WebTemplateType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isTeamSiteLike", function() { return isTeamSiteLike; });
// OneDrive:IgnoreCodeCoverage
/**
 * SharePoint SPWeb (subsite) template values, from WebTemplate in sts\stsom\Core\spwebtemplate.cs
 */
var WebTemplateType;
(function (WebTemplateType) {
    WebTemplateType[WebTemplateType["invalid"] = -1] = "invalid";
    /** Team collaboration site */
    WebTemplateType[WebTemplateType["teamSite"] = 1] = "teamSite";
    /** Meeting workspace site */
    WebTemplateType[WebTemplateType["meetings"] = 2] = "meetings";
    WebTemplateType[WebTemplateType["centralAdmin"] = 3] = "centralAdmin";
    WebTemplateType[WebTemplateType["wiki"] = 4] = "wiki";
    WebTemplateType[WebTemplateType["documentCenter"] = 7] = "documentCenter";
    WebTemplateType[WebTemplateType["blog"] = 9] = "blog";
    WebTemplateType[WebTemplateType["tenantAdmin"] = 16] = "tenantAdmin";
    WebTemplateType[WebTemplateType["app"] = 17] = "app";
    WebTemplateType[WebTemplateType["appCatalog"] = 18] = "appCatalog";
    /** Mysite personal web */
    WebTemplateType[WebTemplateType["mySite"] = 21] = "mySite";
    WebTemplateType[WebTemplateType["subgroup"] = 39] = "subgroup";
    WebTemplateType[WebTemplateType["publishingPortal"] = 52] = "publishingPortal";
    WebTemplateType[WebTemplateType["mySiteHost"] = 54] = "mySiteHost";
    WebTemplateType[WebTemplateType["enterpriseWiki"] = 56] = "enterpriseWiki";
    WebTemplateType[WebTemplateType["group"] = 64] = "group";
    /** POINTPUBLISHINGPERSONAL#1 aka Blog site */
    WebTemplateType[WebTemplateType["pointPublishingPersonal"] = 66] = "pointPublishingPersonal";
    /** SITEPAGEPUBLISHING#0 aka Communications site */
    WebTemplateType[WebTemplateType["sitePagePublishing"] = 68] = "sitePagePublishing";
    WebTemplateType[WebTemplateType["teamChannel"] = 69] = "teamChannel";
    WebTemplateType[WebTemplateType["projectWebAppSite"] = 6221] = "projectWebAppSite";
    WebTemplateType[WebTemplateType["contentCenter"] = 6001] = "contentCenter";
})(WebTemplateType || (WebTemplateType = {}));
/**
 * Returns true if the SPWeb Site is not ODB or Group site.
 */
function isTeamSiteLike(template) {
    'use strict';
    var templateEnum = Number(template);
    return templateEnum !== WebTemplateType.mySite && templateEnum !== WebTemplateType.group;
}
/* harmony default export */ __webpack_exports__["default"] = (WebTemplateType);
//# sourceMappingURL=WebTemplateType.js.map

/***/ }),

/***/ "JmqK":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-shared-react@47.12.13_d89e40c38ccaa8bd6af6488f37cb196d/node_modules/@ms/odsp-shared-react/lib/components/CompositeHeader/subComponents/CreateSiteHelper.js ***!
  \***************************************************************************************************************************************************************************************************************************/
/*! exports provided: createSiteFromHubFeature, isCreateSiteFromHubAvailable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSiteFromHubFeature", function() { return createSiteFromHubFeature; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isCreateSiteFromHubAvailable", function() { return isCreateSiteFromHubAvailable; });
/* harmony import */ var _ms_odsp_utilities_lib_async_Promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ms/odsp-utilities/lib/async/Promise */ "7Ihg");
/* harmony import */ var _ms_odsp_utilities_lib_features_FeatureOverrides__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ms/odsp-utilities/lib/features/FeatureOverrides */ "iVgB");


var createSiteFromHubFeature = { ODB: 1075 };
/**
 * Determines whether the user can create a site from a hub
 */
function isCreateSiteFromHubAvailable(pageContext, hubDataSource) {
    if (_ms_odsp_utilities_lib_features_FeatureOverrides__WEBPACK_IMPORTED_MODULE_1__["default"].isFeatureEnabled(createSiteFromHubFeature) &&
        hubDataSource &&
        pageContext &&
        pageContext.isHubSite) {
        return hubDataSource.canCreateHubJoinedSite(pageContext.hubSiteId);
    }
    return _ms_odsp_utilities_lib_async_Promise__WEBPACK_IMPORTED_MODULE_0__["default"].resolve(false);
}
//# sourceMappingURL=CreateSiteHelper.js.map

/***/ }),

/***/ "KZtG":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-shared-react@47.12.13_d89e40c38ccaa8bd6af6488f37cb196d/node_modules/@ms/odsp-shared-react/lib/components/CompositeHeader/subComponents/index.js ***!
  \****************************************************************************************************************************************************************************************************************/
/*! exports provided: FollowButton, HeaderMessageBar, OutlookButton, ReadOnlyBar, ShareButton, ShareDialog, CreateSiteButton, createSiteFromHubFeature, isCreateSiteFromHubAvailable, SiteScriptProgressIndicatorLoader, UserExpirationBar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FollowButton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FollowButton */ "lRed");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FollowButton", function() { return _FollowButton__WEBPACK_IMPORTED_MODULE_0__["FollowButton"]; });

/* harmony import */ var _HeaderMessageBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HeaderMessageBar */ "2eGb");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HeaderMessageBar", function() { return _HeaderMessageBar__WEBPACK_IMPORTED_MODULE_1__["HeaderMessageBar"]; });

/* harmony import */ var _OutlookButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./OutlookButton */ "z1mu");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OutlookButton", function() { return _OutlookButton__WEBPACK_IMPORTED_MODULE_2__["OutlookButton"]; });

/* harmony import */ var _ReadOnlyBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ReadOnlyBar */ "iywR");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ReadOnlyBar", function() { return _ReadOnlyBar__WEBPACK_IMPORTED_MODULE_3__["ReadOnlyBar"]; });

/* harmony import */ var _ShareButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ShareButton */ "fDmH");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ShareButton", function() { return _ShareButton__WEBPACK_IMPORTED_MODULE_4__["ShareButton"]; });

/* harmony import */ var _ShareDialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ShareDialog */ "PRDY");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ShareDialog", function() { return _ShareDialog__WEBPACK_IMPORTED_MODULE_5__["ShareDialog"]; });

/* harmony import */ var _CreateSiteButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./CreateSiteButton */ "bldy");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CreateSiteButton", function() { return _CreateSiteButton__WEBPACK_IMPORTED_MODULE_6__["CreateSiteButton"]; });

/* harmony import */ var _CreateSiteHelper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./CreateSiteHelper */ "JmqK");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createSiteFromHubFeature", function() { return _CreateSiteHelper__WEBPACK_IMPORTED_MODULE_7__["createSiteFromHubFeature"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isCreateSiteFromHubAvailable", function() { return _CreateSiteHelper__WEBPACK_IMPORTED_MODULE_7__["isCreateSiteFromHubAvailable"]; });

/* harmony import */ var _SiteScriptProgressIndicatorLoader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./SiteScriptProgressIndicatorLoader */ "7qpm");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SiteScriptProgressIndicatorLoader", function() { return _SiteScriptProgressIndicatorLoader__WEBPACK_IMPORTED_MODULE_8__["SiteScriptProgressIndicatorLoader"]; });

/* harmony import */ var _UserExpirationBar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./UserExpirationBar */ "ySJ3");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserExpirationBar", function() { return _UserExpirationBar__WEBPACK_IMPORTED_MODULE_9__["UserExpirationBar"]; });











//# sourceMappingURL=index.js.map

/***/ }),

/***/ "dx0Y":
/*!*******************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-datasources@45.13.10_e509c819ab980023b76e5746ec0fc9e2/node_modules/@ms/odsp-datasources/lib/AcronymAndColor.js ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: PersonaInitialsColor, COLOR_SERVICE_POSSIBLE_COLORS, AcronymAndColorDataSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dataSources_siteHeader_AcronymAndColorDataSource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dataSources/siteHeader/AcronymAndColorDataSource */ "l+sn");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PersonaInitialsColor", function() { return _dataSources_siteHeader_AcronymAndColorDataSource__WEBPACK_IMPORTED_MODULE_0__["PersonaInitialsColor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "COLOR_SERVICE_POSSIBLE_COLORS", function() { return _dataSources_siteHeader_AcronymAndColorDataSource__WEBPACK_IMPORTED_MODULE_0__["COLOR_SERVICE_POSSIBLE_COLORS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AcronymAndColorDataSource", function() { return _dataSources_siteHeader_AcronymAndColorDataSource__WEBPACK_IMPORTED_MODULE_0__["AcronymAndColorDataSource"]; });


//# sourceMappingURL=AcronymAndColor.js.map

/***/ }),

/***/ "eiYH":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-datasources@45.13.10_e509c819ab980023b76e5746ec0fc9e2/node_modules/@ms/odsp-datasources/lib/dataSources/siteHeader/FollowDataSource.js ***!
  \*******************************************************************************************************************************************************************************************************/
/*! exports provided: FollowDataSource, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FollowDataSource", function() { return FollowDataSource; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ms_odsp_utilities_lib_encoding_UriEncoding__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ms/odsp-utilities/lib/encoding/UriEncoding */ "+35T");
/* harmony import */ var _ms_odsp_utilities_lib_killswitch_Killswitch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ms/odsp-utilities/lib/killswitch/Killswitch */ "QUgr");
/* harmony import */ var _base_CachedDataSource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../base/CachedDataSource */ "zpEg");
/* harmony import */ var _interfaces_ISpPageContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../interfaces/ISpPageContext */ "GlwB");
/* harmony import */ var _ms_telemetry_manager_lib_events_Qos_event__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ms/telemetry-manager/lib/events/Qos.event */ "eT67");






/**
 * Key to use as cache request key for followSite
 */
var IS_SITE_FOLLOWED_CACHE_REQ_KEY = 'isSiteFollowed';
var ADDITIONAL_HEADERS = { 'SPHome-ClientType': 'PagesWeb' };
/**
 * Expected failure for isSiteFollowed
 */
var SharePointStartedMySiteCreation = 500007;
var SharePointCannotCreatePersonalSite = 500019;
var SharePointFeatureDisabled = 500020;
var SharePointItemNotFound = 500021;
/**
 * This datasource calls the SPSocial Follow APIs.
 */
var FollowDataSource = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(FollowDataSource, _super);
    function FollowDataSource(pageContext) {
        var _this = _super.call(this, {
            dataSourceName: 'FollowDataSource',
            id: 'FavoriteFeed'
        }, {
            pageContext: pageContext
        }) || this;
        _this._isSiteFollowedCacheKey =
            IS_SITE_FOLLOWED_CACHE_REQ_KEY + ("_" + (pageContext.siteId + pageContext.webId));
        _this._doubleQuoteKillSwitchIsActivated = _ms_odsp_utilities_lib_killswitch_Killswitch__WEBPACK_IMPORTED_MODULE_2__["Killswitch"].isActivated('83386358-6d38-48f2-94b4-b91c9c9b1d84', '06/29/2020', 'Double quote for Follow post data');
        return _this;
    }
    /**
     * Given a web url, will add the web to the list of sites the user is following. No data is returned but the promise will complete.
     */
    FollowDataSource.prototype.followSite = function (webUrl) {
        var _this = this;
        return this.dataRequestor
            .getData({
            url: Object(_interfaces_ISpPageContext__WEBPACK_IMPORTED_MODULE_4__["getSafeWebServerRelativeUrl"])(this._pageContext) + "/_vti_bin/homeapi.ashx/sites/followed/add",
            qosName: 'FollowSite',
            additionalPostData: !this._doubleQuoteKillSwitchIsActivated ? "\"" + webUrl + "\"" : "'" + webUrl + "'",
            additionalHeaders: ADDITIONAL_HEADERS,
            noRedirect: true
        })
            .then(function () {
            _this.flushCache(_this._isSiteFollowedCacheKey);
        });
    };
    /**
     * Given a web url, will remove the web from the list of sites the user is following. No data is returned but the promise will complete.
     */
    FollowDataSource.prototype.unfollowSite = function (webUrl) {
        var _this = this;
        return this.dataRequestor
            .getData({
            url: Object(_interfaces_ISpPageContext__WEBPACK_IMPORTED_MODULE_4__["getSafeWebServerRelativeUrl"])(this._pageContext) + "/_vti_bin/homeapi.ashx/sites/followed/remove",
            qosName: 'UnfollowSite',
            additionalPostData: !this._doubleQuoteKillSwitchIsActivated ? "\"" + webUrl + "\"" : "'" + webUrl + "'",
            additionalHeaders: ADDITIONAL_HEADERS,
            noRedirect: true
        })
            .then(function () {
            _this.flushCache(_this._isSiteFollowedCacheKey);
        });
    };
    /**
     * Returns a promise containing a boolean indicating whether a particular Site or Web is being followed.
     *
     * @param webUrl e.g. https://microsoft.sharepoint.com/sites/OCWGroup
     * @param onlyCache Optional boolean defaulting to false indicating whether to only use cached value. Takes precedence.
     * @param bypassCache Optional boolean defaulting to false indicating whether to bypass the cache.
     * @param siteId e.g. E306E185-6159-49E4-8ACB-3CDFAAC00328
     * @param webId e.g. E306E185-6159-49E4-8ACB-3CDFAAC00328
     */
    FollowDataSource.prototype.isSiteFollowed = function (webUrl, onlyCache, bypassCache, siteId, webId) {
        if (onlyCache === void 0) { onlyCache = false; }
        if (bypassCache === void 0) { bypassCache = false; }
        var cachingStrategy = 0 /* useCacheAndUpdateInTheBackground */;
        if (bypassCache) {
            cachingStrategy = 3 /* bypassCache */;
        }
        else if (onlyCache) {
            cachingStrategy = 2 /* onlyCache */;
        }
        if (siteId && webId) {
            return this.getDataUtilizingPersistentCache({
                url: Object(_interfaces_ISpPageContext__WEBPACK_IMPORTED_MODULE_4__["getSafeWebServerRelativeUrl"])(this._pageContext) +
                    "/_vti_bin/homeapi.ashx/sites/followed/isFollowed?" +
                    ("siteId=" + siteId + "&webId=" + webId + "&url=" + _ms_odsp_utilities_lib_encoding_UriEncoding__WEBPACK_IMPORTED_MODULE_1__["default"].encodeURIComponent(webUrl)),
                parseResponse: function (responseText) {
                    return responseText === 'true';
                },
                qosName: 'isSiteFollowed',
                telemetryHandler: function (input) {
                    var errorData = input.errorData, eventData = input.eventData;
                    if (errorData) {
                        var isExpected = false;
                        if (errorData.responseData && errorData.responseData.ErrorCode) {
                            var errorCode = errorData.responseData.ErrorCode;
                            if (errorCode === SharePointStartedMySiteCreation ||
                                errorCode === SharePointCannotCreatePersonalSite ||
                                errorCode === SharePointFeatureDisabled ||
                                errorCode === SharePointItemNotFound) {
                                isExpected = true;
                            }
                        }
                        var resultType = isExpected ? _ms_telemetry_manager_lib_events_Qos_event__WEBPACK_IMPORTED_MODULE_5__["ResultTypeEnum"].ExpectedFailure : _ms_telemetry_manager_lib_events_Qos_event__WEBPACK_IMPORTED_MODULE_5__["ResultTypeEnum"].Failure;
                        return {
                            eventData: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, eventData), { resultType: resultType })
                        };
                    }
                    return { eventData: eventData };
                },
                additionalHeaders: ADDITIONAL_HEADERS,
                noRedirect: true,
                method: 'GET',
                cachingStrategy: cachingStrategy,
                cacheRequestKey: this._isSiteFollowedCacheKey
            }).catch(function (error) {
                if (error && error.responseData && error.responseData.ErrorCode) {
                    var errorCode = error.responseData.ErrorCode;
                    if (errorCode === SharePointStartedMySiteCreation ||
                        errorCode === SharePointCannotCreatePersonalSite ||
                        errorCode === SharePointFeatureDisabled ||
                        errorCode === SharePointItemNotFound) {
                        // error is expected
                        return false;
                    }
                }
                throw error;
            });
        }
        else {
            return this.getDataUtilizingPersistentCache({
                url: Object(_interfaces_ISpPageContext__WEBPACK_IMPORTED_MODULE_4__["getSafeWebServerRelativeUrl"])(this._pageContext) + "/_api/social.following/IsFollowed",
                parseResponse: function (responseText) {
                    var response = JSON.parse(responseText);
                    return response.d.IsFollowed;
                },
                qosName: 'isSiteFollowed',
                noRedirect: true,
                method: 'POST',
                additionalPostData: JSON.stringify({
                    actor: {
                        __metadata: { type: 'SP.Social.SocialActorInfo' },
                        ActorType: 1,
                        ContentUri: webUrl,
                        Id: null
                    }
                }),
                cachingStrategy: cachingStrategy,
                cacheRequestKey: this._isSiteFollowedCacheKey
            });
        }
    };
    /**
     * Returns a promise containing a boolean indicating whether following feature is enabled.
     */
    FollowDataSource.prototype.isFollowFeatureEnabled = function () {
        return this.getDataUtilizingPersistentCache({
            url: this._pageContext.webAbsoluteUrl + "/_api/SP.Utilities.SPSocialSwitch.IsFollowingFeatureEnabled",
            cacheRequestKey: "followEnabled_" + (this._pageContext.webId + this._pageContext.siteId),
            method: 'POST',
            noRedirect: true,
            qosName: 'isFollowFeatureEnabled',
            parseResponse: function (responseText) {
                var response = JSON.parse(responseText);
                return response.d.IsFollowingFeatureEnabled;
            }
        });
    };
    return FollowDataSource;
}(_base_CachedDataSource__WEBPACK_IMPORTED_MODULE_3__["CachedDataSource"]));

/* harmony default export */ __webpack_exports__["default"] = (FollowDataSource);
//# sourceMappingURL=FollowDataSource.js.map

/***/ }),

/***/ "l+sn":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-datasources@45.13.10_e509c819ab980023b76e5746ec0fc9e2/node_modules/@ms/odsp-datasources/lib/dataSources/siteHeader/AcronymAndColorDataSource.js ***!
  \****************************************************************************************************************************************************************************************************************/
/*! exports provided: PersonaInitialsColor, COLOR_SERVICE_POSSIBLE_COLORS, AcronymAndColorDataSource, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonaInitialsColor", function() { return PersonaInitialsColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COLOR_SERVICE_POSSIBLE_COLORS", function() { return COLOR_SERVICE_POSSIBLE_COLORS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AcronymAndColorDataSource", function() { return AcronymAndColorDataSource; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _interfaces_ISpPageContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../interfaces/ISpPageContext */ "GlwB");
/* harmony import */ var _base_CachedDataSource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base/CachedDataSource */ "zpEg");
/* harmony import */ var _ms_odsp_utilities_lib_async_Promise__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ms/odsp-utilities/lib/async/Promise */ "7Ihg");
/* harmony import */ var _ms_odsp_utilities_lib_encoding_UriEncoding__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ms/odsp-utilities/lib/encoding/UriEncoding */ "+35T");





var PersonaInitialsColor;
(function (PersonaInitialsColor) {
    PersonaInitialsColor[PersonaInitialsColor["lightBlue"] = 0] = "lightBlue";
    PersonaInitialsColor[PersonaInitialsColor["blue"] = 1] = "blue";
    PersonaInitialsColor[PersonaInitialsColor["darkBlue"] = 2] = "darkBlue";
    PersonaInitialsColor[PersonaInitialsColor["teal"] = 3] = "teal";
    PersonaInitialsColor[PersonaInitialsColor["lightGreen"] = 4] = "lightGreen";
    PersonaInitialsColor[PersonaInitialsColor["green"] = 5] = "green";
    PersonaInitialsColor[PersonaInitialsColor["darkGreen"] = 6] = "darkGreen";
    PersonaInitialsColor[PersonaInitialsColor["lightPink"] = 7] = "lightPink";
    PersonaInitialsColor[PersonaInitialsColor["pink"] = 8] = "pink";
    PersonaInitialsColor[PersonaInitialsColor["magenta"] = 9] = "magenta";
    PersonaInitialsColor[PersonaInitialsColor["purple"] = 10] = "purple";
    PersonaInitialsColor[PersonaInitialsColor["black"] = 11] = "black";
    PersonaInitialsColor[PersonaInitialsColor["orange"] = 12] = "orange";
    PersonaInitialsColor[PersonaInitialsColor["red"] = 13] = "red";
    PersonaInitialsColor[PersonaInitialsColor["darkRed"] = 14] = "darkRed";
})(PersonaInitialsColor || (PersonaInitialsColor = {}));
/** This is an array of possible colors that the service returns as of 11 Oct 2016.
 * However, the list of colors the service returns may change.
 * This is a weak contract provided for convenience,
 * so do not take a strong dependency on this array.
 * Look at /sporel/otools/inc/sts/stsom/utilities/SPWebLogoUtility.cs for the master copy */
var COLOR_SERVICE_POSSIBLE_COLORS = [
    '#0078d7',
    '#088272',
    '#107c10',
    '#881798',
    '#b4009e',
    '#e81123',
    '#da3b01',
    '#006f94',
    '#005e50',
    '#004e8c',
    '#a80000',
    '#4e257f'
];
/**
 * This datasource makes a call to the Acronyms and Colors service and returns an IAcronymColor object.
 */
var AcronymAndColorDataSource = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(AcronymAndColorDataSource, _super);
    function AcronymAndColorDataSource(pageContext) {
        return _super.call(this, {
            dataSourceName: 'SiteHeaderLogoAcronym',
            id: 'acronymAndColors'
        }, {
            pageContext: pageContext
        }) || this;
    }
    AcronymAndColorDataSource.decodeAcronymColor = function (color) {
        return COLOR_SERVICE_POSSIBLE_COLORS.indexOf(color) + 1;
    };
    /**
     * Given a site name, return a site logo acronym and color information through the GetAcronymsAndColors API.
     * Note: API takes in additional optional arguments like lcid, which as of this writing this method doesn't support.
     *       Please extend as appropriate.
     *
     * @param {string} siteName Name of the site.
     * @returns {Promise<IAcronymColor>} Site acronym and Color.
     */
    AcronymAndColorDataSource.prototype.getAcronymData = function (siteName) {
        return this.getAcronyms([siteName]).then(function (val) {
            return val[0];
        }, function () {
            return {
                acronym: undefined,
                color: undefined,
                text: undefined
            };
        });
    };
    /**
     * Given an array of strings, return acronym and color information through the GetAcronymsAndColors API.
     * Note: API takes in additional optional arguments like lcid, which as of this writing this method doesn't support.
     *       Please extend as appropriate.
     *
     * @param {string[]} strings An array of strings to pass to the service.
     * @param {IAcronymOptions} options An optional interface that allows customization of the QoS Name.
     * @returns {Promise<IAcronymColor[]>} An array of IAcronymColor objects containing site acronym and color information.
     */
    AcronymAndColorDataSource.prototype.getAcronyms = function (strings, options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        if (this._pageContext.webServerRelativeUrl) {
            var _a = options.qosName, qosName = _a === void 0 ? 'GetSiteHeaderLogoAcronym' : _a;
            return this.getDataUtilizingPersistentCache({
                getUrl: function () {
                    // URL
                    var requestStr = strings
                        .map(function (str) { return "{Text: " + _ms_odsp_utilities_lib_encoding_UriEncoding__WEBPACK_IMPORTED_MODULE_4__["default"].encodeURIComponent('"' + str + '"') + "}"; })
                        .join(',');
                    return (Object(_interfaces_ISpPageContext__WEBPACK_IMPORTED_MODULE_1__["getSafeWebServerRelativeUrl"])(_this._pageContext) +
                        ("/_api/sphome/GetAcronymsAndColors?labels=[" + requestStr + "]"));
                },
                parseResponse: function (responseText) {
                    // parse the responseText
                    var response = JSON.parse(responseText);
                    var responseResult = response.d.GetAcronymsAndColors.results;
                    return responseResult.map(function (val) {
                        return { acronym: val.Acronym, color: val.Color, text: val.Text };
                    });
                },
                method: 'GET',
                qosName: qosName
            });
        }
        else {
            return _ms_odsp_utilities_lib_async_Promise__WEBPACK_IMPORTED_MODULE_3__["default"].reject(new Error('No web URL specified for request.'));
        }
    };
    return AcronymAndColorDataSource;
}(_base_CachedDataSource__WEBPACK_IMPORTED_MODULE_2__["CachedDataSource"]));

/* harmony default export */ __webpack_exports__["default"] = (AcronymAndColorDataSource);
//# sourceMappingURL=AcronymAndColorDataSource.js.map

/***/ }),

/***/ "wTrt":
/*!**********************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-datasources@45.13.10_e509c819ab980023b76e5746ec0fc9e2/node_modules/@ms/odsp-datasources/lib/Follow.js ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: FollowDataSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dataSources_siteHeader_FollowDataSource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dataSources/siteHeader/FollowDataSource */ "eiYH");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FollowDataSource", function() { return _dataSources_siteHeader_FollowDataSource__WEBPACK_IMPORTED_MODULE_0__["FollowDataSource"]; });


//# sourceMappingURL=Follow.js.map

/***/ }),

/***/ "wzyn":
/*!*********************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-utilities@29.7.9_5d977624104b06c7bcaa2de974ff51f1/node_modules/@ms/odsp-utilities/lib/async/Async.js ***!
  \*********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ms/odsp-core-bundle */ "K9kD");
/* harmony import */ var _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__["Async"]; });

// Loading @ms/odsp-utilities/./lib/async/Async.js



/***/ }),

/***/ "xYco":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-datasources@45.13.10_e509c819ab980023b76e5746ec0fc9e2/node_modules/@ms/odsp-datasources/lib/dataSources/web/WebTemplateType.js ***!
  \***********************************************************************************************************************************************************************************************/
/*! exports provided: WebTemplateType, isTeamSiteLike, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _interfaces_WebTemplateType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../interfaces/WebTemplateType */ "DRdk");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WebTemplateType", function() { return _interfaces_WebTemplateType__WEBPACK_IMPORTED_MODULE_0__["WebTemplateType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isTeamSiteLike", function() { return _interfaces_WebTemplateType__WEBPACK_IMPORTED_MODULE_0__["isTeamSiteLike"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _interfaces_WebTemplateType__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/**
 * DO NOT USE - moved to interfaces for better import location
 * @deprecated as of version 12.15.0
 */


//# sourceMappingURL=WebTemplateType.js.map

/***/ }),

/***/ "yz9z":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-shared-react@47.12.13_d89e40c38ccaa8bd6af6488f37cb196d/node_modules/@ms/odsp-shared-react/lib/containers/compositeHeader/StateManager.js ***!
  \*********************************************************************************************************************************************************************************************************/
/*! exports provided: FOLLOWED_SITES_IN_STORE_KEY, SiteHeaderContainerStateManager, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOLLOWED_SITES_IN_STORE_KEY", function() { return FOLLOWED_SITES_IN_STORE_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SiteHeaderContainerStateManager", function() { return SiteHeaderContainerStateManager; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _StateManager_Props__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StateManager.Props */ "0+mA");
/* harmony import */ var _CompositeHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../CompositeHeader */ "jfPA");
/* harmony import */ var _utilities_nav_NavCommon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utilities/nav/NavCommon */ "qBs0");
/* harmony import */ var _ms_odsp_datasources_lib_DesignPackage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ms/odsp-datasources/lib/DesignPackage */ "cGzF");
/* harmony import */ var _components_LivePersonaCardAdapter_DeferredSpLivePersonaCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/LivePersonaCardAdapter/DeferredSpLivePersonaCard */ "5Txe");
/* harmony import */ var _components_CompositeHeader_subComponents_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/CompositeHeader/subComponents/index */ "KZtG");
/* harmony import */ var _components_HorizontalNav_HorizontalNav_resx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/HorizontalNav/HorizontalNav.resx */ "cwNP");
/* harmony import */ var _components_HorizontalNav_HorizontalNav_resx__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_components_HorizontalNav_HorizontalNav_resx__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _ms_odsp_datasources_lib_interfaces_ISpPageContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ms/odsp-datasources/lib/interfaces/ISpPageContext */ "GlwB");
/* harmony import */ var _ms_odsp_datasources_lib_AcronymAndColor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ms/odsp-datasources/lib/AcronymAndColor */ "dx0Y");
/* harmony import */ var _ms_odsp_datasources_lib_ChromeOptions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ms/odsp-datasources/lib/ChromeOptions */ "XnGw");
/* harmony import */ var _ms_odsp_datasources_lib_interfaces_groups_SourceType__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ms/odsp-datasources/lib/interfaces/groups/SourceType */ "A6v3");
/* harmony import */ var _ms_odsp_datasources_lib_interfaces_WebTemplateType__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ms/odsp-datasources/lib/interfaces/WebTemplateType */ "DRdk");
/* harmony import */ var _ms_odsp_datasources_lib_Follow__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ms/odsp-datasources/lib/Follow */ "wTrt");
/* harmony import */ var _ms_odsp_datasources_lib_Permissions__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ms/odsp-datasources/lib/Permissions */ "jH+c");
/* harmony import */ var _ms_odsp_datasources_lib_ViewNav__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ms/odsp-datasources/lib/ViewNav */ "Qjmx");
/* harmony import */ var _ms_odsp_utilities_lib_string_StringHelper__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ms/odsp-utilities/lib/string/StringHelper */ "BY+f");
/* harmony import */ var _ms_odsp_utilities_lib_string_StringHelper__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_ms_odsp_utilities_lib_string_StringHelper__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _ms_odsp_utilities_lib_async_Async__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ms/odsp-utilities/lib/async/Async */ "wzyn");
/* harmony import */ var _ms_odsp_utilities_lib_events_EventGroup__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ms/odsp-utilities/lib/events/EventGroup */ "Oa+Z");
/* harmony import */ var _ms_odsp_utilities_lib_features_Features__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ms/odsp-utilities/lib/features/Features */ "8G1T");
/* harmony import */ var _ms_odsp_utilities_lib_logging_events_Engagement_event__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ms/odsp-utilities/lib/logging/events/Engagement.event */ "cDPE");
/* harmony import */ var _ms_odsp_utilities_lib_async_Promise__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @ms/odsp-utilities/lib/async/Promise */ "7Ihg");
/* harmony import */ var _ms_odsp_utilities_lib_killswitch_Killswitch__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @ms/odsp-utilities/lib/killswitch/Killswitch */ "QUgr");
/* harmony import */ var _ms_odsp_utilities_lib_features_FeatureOverrides__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @ms/odsp-utilities/lib/features/FeatureOverrides */ "iVgB");

/* odsp-shared-react */







/* odsp-datasources */









/* odsp-utilities */








var createSiteFromHubFeature = { ODB: 1075 };
var SiteScriptProgressIndicatorFeature = { ODB: 1120 };
var UserExpirationPanelExperience = { ODB: 1559 };
var EnableRectSiteLogo = { ODB: 1067 };
/** The fwd link that leads the user to more information about unauthorized tenants*/
var UNAUTHORIZED_TENANT_FWDLINK = 'http://go.microsoft.com/fwlink/p/?LinkId=2092321';
/** The fwd link that leads the user to more information about authentyication policies. */
var AUTH_POLICY_FWDLINK = 'http://go.microsoft.com/fwlink/p/?LinkId=823640';
var GROUP_EID_PREFIX = 'GroupCard.';
var CLICK = '.Click';
/** map to associate the GroupCardLinkTypes enum with specific properties */
var GROUP_CARD_LINK_TYPES_MAP = [
    { name: 'inboxUrl', eid: 'Mail', trimIfAnonymous: true },
    { name: 'calendarUrl', eid: 'Calendar', trimIfAnonymous: true },
    { name: 'filesUrl', eid: 'Files', trimIfAnonymous: false },
    { name: 'notebookUrl', eid: 'Notebook', trimIfAnonymous: false },
    { name: 'siteUrl', eid: 'Home', trimIfAnonymous: false },
    { name: 'membersUrl', eid: 'Members', trimIfAnonymous: true },
    { name: 'plannerUrl', eid: 'Planner', trimIfAnonymous: true } // GroupCardLinks.plannerUrl
];
/**
 * Identifier for string in store that contains the user's followed sites.
 * @public
 */
var FOLLOWED_SITES_IN_STORE_KEY = 'FollowedSites';
/** Ensure that this constant stays in sync with the one in GroupsProvider.ts */
var GET_GROUP_IMAGE_ENDPOINT = '/_api/GroupService/GetGroupImage';
/**
 * Enum to specify what kind of horizontal nav should be displayed.
 */
var HorizontalNavTypes;
(function (HorizontalNavTypes) {
    /** Per-web quick launch links (traditionally displayed in left nav) */
    HorizontalNavTypes[HorizontalNavTypes["quickLaunch"] = 0] = "quickLaunch";
    /** Per-site links (displayed in top nav) */
    HorizontalNavTypes[HorizontalNavTypes["globalNav"] = 1] = "globalNav";
    /** Don't display a horizontal nav */
    HorizontalNavTypes[HorizontalNavTypes["none"] = 2] = "none";
})(HorizontalNavTypes || (HorizontalNavTypes = {}));
/**
 * This class manages the state of the SiteHeaderHost.
 * @public
 */
var SiteHeaderContainerStateManager = /** @class */ (function () {
    function SiteHeaderContainerStateManager(params) {
        var _this = this;
        this._onGoToMembersClick = function (ev) {
            _ms_odsp_utilities_lib_logging_events_Engagement_event__WEBPACK_IMPORTED_MODULE_20__["Engagement"].logData({ name: 'SiteHeader.GoToMembers.Click' });
            _this._params.goToMembersOnClick(ev);
            if (ev) {
                ev.stopPropagation();
                ev.preventDefault();
            }
        };
        this._onCreateSiteClick = function (ev) {
            _ms_odsp_utilities_lib_logging_events_Engagement_event__WEBPACK_IMPORTED_MODULE_20__["Engagement"].logData({ name: 'SiteHeader.CreateSite.Click' });
            //TODO tecambri make createSiteOnClick required
            if (_this._params.createSiteOnClick) {
                _this._params.createSiteOnClick(ev);
            }
            if (ev) {
                ev.stopPropagation();
                ev.preventDefault();
            }
        };
        this._onUserExpirationDismissClick = function (ev) {
            _ms_odsp_utilities_lib_logging_events_Engagement_event__WEBPACK_IMPORTED_MODULE_20__["Engagement"].logData({ name: 'SiteHeader.UserExpirationMessageBarDismiss.Click' });
            _this.setState({
                hideUserExpirationBar: true
            });
        };
        this._onFollowClick = function (ev) {
            _ms_odsp_utilities_lib_logging_events_Engagement_event__WEBPACK_IMPORTED_MODULE_20__["Engagement"].logData({ name: 'SiteHeader.Follow.Click' });
            var followState = _this._params.siteHeader.state.followState;
            _this.setState({ followState: _CompositeHeader__WEBPACK_IMPORTED_MODULE_2__["FollowState"].transitioning });
            if (followState === _CompositeHeader__WEBPACK_IMPORTED_MODULE_2__["FollowState"].followed) {
                _this._followDataSource.unfollowSite(_this._pageContext.webAbsoluteUrl).done(function () {
                    _this.setState({ followState: _CompositeHeader__WEBPACK_IMPORTED_MODULE_2__["FollowState"].notFollowing });
                }, function (error) {
                    // on error, revert to followed (could also just set to notfollowing instead
                    // and allow user to attempt to unfollow)
                    _this.setState({ followState: _CompositeHeader__WEBPACK_IMPORTED_MODULE_2__["FollowState"].followed });
                });
            }
            else {
                _this._followDataSource.followSite(_this._pageContext.webAbsoluteUrl).done(function () {
                    _this.setState({ followState: _CompositeHeader__WEBPACK_IMPORTED_MODULE_2__["FollowState"].followed });
                }, function (error) {
                    // on error, revert to notfollowing (could also just set to following instead
                    // and allow user to attempt to follow)
                    _this.setState({ followState: _CompositeHeader__WEBPACK_IMPORTED_MODULE_2__["FollowState"].notFollowing });
                });
            }
        };
        /* tslint:disable:member-ordering */
        /**
         * This function uses the linkType parameter to map to the appropriate property.
         */
        this._getUrlFromEnum = (function () {
            return function (linkType, group) {
                var url = group[GROUP_CARD_LINK_TYPES_MAP[linkType].name];
                if (!url && linkType === _StateManager_Props__WEBPACK_IMPORTED_MODULE_1__["GroupCardLinkTypes"].site) {
                    // If no site URL is provided on the group, use the host settings URL.
                    url = _this._params.pageContext.webAbsoluteUrl;
                }
                return url;
            };
        })();
        this._updateUsageGuidelineCallback = function () {
            _this._noThrowPromise(_this._updateUsageGuidelineUrl()).then(function (headerContainerState) {
                if (headerContainerState && headerContainerState.usageGuidelineUrl) {
                    _this.setState({ usageGuidelineUrl: headerContainerState.usageGuidelineUrl });
                }
            });
        };
        this._params = params;
        var pageContext = params.pageContext;
        this._pageContext = pageContext;
        this._isGroup = Object(_ms_odsp_datasources_lib_interfaces_ISpPageContext__WEBPACK_IMPORTED_MODULE_8__["isGroupWebContext"])(pageContext);
        this._async = new _ms_odsp_utilities_lib_async_Async__WEBPACK_IMPORTED_MODULE_17__["default"]();
        this._asyncFetchTopNav = false;
        if (!_ms_odsp_utilities_lib_killswitch_Killswitch__WEBPACK_IMPORTED_MODULE_22__["Killswitch"].isActivated('76048f30-8c23-4145-97e4-f0aadb3b29aa', '7/13/2020', 'FixGuestExperience')) {
            this._isAnonymousGuest =
                pageContext.isAnonymousGuestUser || pageContext.isEmailAuthenticationGuestUser /* TOA */;
            this._isGuest = this._isAnonymousGuest || pageContext.isExternalGuestUser;
        }
        else {
            this._isAnonymousGuest = pageContext.isAnonymousGuestUser || pageContext.isExternalGuestUser;
            this._isGuest = this._isAnonymousGuest;
        }
        this._hasManageLists = _ms_odsp_datasources_lib_Permissions__WEBPACK_IMPORTED_MODULE_14__["PermissionMask"].hasPermission(pageContext.webPermMasks, _ms_odsp_datasources_lib_Permissions__WEBPACK_IMPORTED_MODULE_14__["PermissionMask"].manageLists);
        this._chrome = Object(_ms_odsp_datasources_lib_DesignPackage__WEBPACK_IMPORTED_MODULE_4__["getCurrentChromeOptions"])(this._pageContext);
        // setup site logo
        var siteLogoUrl = '';
        if (_ms_odsp_utilities_lib_features_FeatureOverrides__WEBPACK_IMPORTED_MODULE_23__["default"].isFeatureEnabled(EnableRectSiteLogo) && this.shouldUseSiteIconManager(pageContext)) {
            if (!_ms_odsp_utilities_lib_killswitch_Killswitch__WEBPACK_IMPORTED_MODULE_22__["Killswitch"].isActivated('535d360b-694f-4f0c-8024-51b6ffa98bdd', '10/21/2020', 'UpdateSiteLogoFormat')) {
                siteLogoUrl = pageContext.webAbsoluteUrl + "/_api/siteiconmanager/getsitelogo?type='1'";
            }
            else {
                siteLogoUrl = "/_api/siteiconmanager/getsitelogo?siteurl='" + pageContext.webAbsoluteUrl + "'&type=1";
            }
        }
        else {
            siteLogoUrl = params.pageContext.webLogoUrl;
        }
        if (!_ms_odsp_utilities_lib_features_FeatureOverrides__WEBPACK_IMPORTED_MODULE_23__["default"].isFeatureEnabled(EnableRectSiteLogo)) {
            if (siteLogoUrl) {
                var utilizingTeamsiteCustomLogo = siteLogoUrl.indexOf(_ms_odsp_datasources_lib_interfaces_ISpPageContext__WEBPACK_IMPORTED_MODULE_8__["DEFAULT_LOGO_URL"]) === -1;
                if (!utilizingTeamsiteCustomLogo) {
                    // switch to acronym
                    siteLogoUrl = undefined;
                }
            }
            // Ensure that group connected sites use the GET_GROUP_IMAGE_ENDPOINT to retrieve the site icon
            if (this._isGroup &&
                (!siteLogoUrl || siteLogoUrl.toLowerCase().indexOf(GET_GROUP_IMAGE_ENDPOINT.toLowerCase()) === -1)) {
                siteLogoUrl = "" + pageContext.webAbsoluteUrl + GET_GROUP_IMAGE_ENDPOINT;
            }
        }
        var logoOnClick;
        var webAbsoluteUrl = params.pageContext.webAbsoluteUrl;
        if (webAbsoluteUrl) {
            logoOnClick = function (ev) {
                _ms_odsp_utilities_lib_logging_events_Engagement_event__WEBPACK_IMPORTED_MODULE_20__["Engagement"].logData({ name: 'SiteHeader.Logo.Click' });
                if (params.logoOnClick) {
                    params.logoOnClick(webAbsoluteUrl, ev);
                    ev.stopPropagation();
                    ev.preventDefault();
                }
            };
        }
        var horizontalNavItems = this._setupHorizontalNav();
        // outlookUrl will be rewritten to real mailboxUrl after groups provider loads and returns the group.
        var outlookUrl = this._isGroup
            ? pageContext.webAbsoluteUrl + "/_layouts/15/groupstatus.aspx?id=" + pageContext.groupId + "&target=conversations"
            : undefined;
        this._params.siteHeader.state = {
            membersText: undefined,
            siteClassification: (this._isDisplayAssignedLabelsInsteadOfClassificationFeatureEnabled &&
                this._getSiteClassification()) ||
                pageContext.siteClassification,
            usageGuidelineUrl: undefined,
            siteLogoUrl: siteLogoUrl,
            horizontalNavItems: horizontalNavItems,
            logoOnClick: logoOnClick,
            webAbsoluteUrl: webAbsoluteUrl,
            outlookUrl: outlookUrl,
            showCreateSiteButton: false
        };
        if (skipAcronymCallwSiteLogo() && !siteLogoUrl) {
            this._acronymDatasource = this._params.acronymDatasource || new _ms_odsp_datasources_lib_AcronymAndColor__WEBPACK_IMPORTED_MODULE_9__["AcronymAndColorDataSource"](pageContext);
        }
    }
    SiteHeaderContainerStateManager.prototype.componentDidMount = function () {
        var _this = this;
        var statePromises = [
            this._isGroup || (skipAcronymCallwSiteLogo() && !this._acronymDatasource)
                ? _ms_odsp_utilities_lib_async_Promise__WEBPACK_IMPORTED_MODULE_21__["default"].resolve(undefined)
                : this._noThrowPromise(this._loadSiteAcronym()),
            this._noThrowPromise(this._setupSiteReadOnlyBar()),
            this._noThrowPromise(this._setupSiteResourceQuotaBar()),
            this._noThrowPromise(this._setupFollowButton()),
            this._noThrowPromise(this._setupUserExpirationBar()),
            this._noThrowPromise(this._processGroups()),
            this._noThrowPromise(this._setupCreateSiteButton()),
            this._noThrowPromise(this._setupSiteStatusBar()),
            this._noThrowPromise(this._setupSitePolicyBar()),
            this._noThrowPromise(this._setupUnauthorizedTenantBar()),
            this._noThrowPromise(this._fetchTopNavigation()),
            this._noThrowPromise(this._setupNoSharePointSyntexLicenseBar())
        ];
        _ms_odsp_utilities_lib_async_Promise__WEBPACK_IMPORTED_MODULE_21__["default"].all(statePromises).then(function (stateUpdates) {
            var merged = {};
            stateUpdates.forEach(function (update) {
                if (update) {
                    merged = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, merged), update);
                }
            });
            _this.setState(merged);
        });
    };
    SiteHeaderContainerStateManager.prototype.componentWillUnmount = function () {
        this._async.dispose();
        if (this._eventGroup) {
            this._eventGroup.dispose();
            this._eventGroup = null;
        }
    };
    SiteHeaderContainerStateManager.prototype.getRenderProps = function (moduleLoader, lpcModuleLoader, lpcModuleLoaderWaiter, siteScriptProgressModuleLoader) {
        var params = this._params;
        var state = params.siteHeader.state;
        var strings = params.strings;
        var pageContext = params.pageContext;
        var webTemplateType = Number(pageContext.webTemplate);
        var siteLogo = {
            siteLogoUrl: state.siteLogoUrl,
            siteAcronym: state.siteAcronym
        };
        var goToMembersAction = this._computeGoToMembersAction(state.membersUrl);
        var makeDeferredLPCProps = function (person) {
            return {
                personaType: person && person.entityType === 2 /* group */ ? 'Group' : 'User',
                identifier: person && person.email,
                pageContext: pageContext,
                moduleLoader: lpcModuleLoader,
                customWaiter: lpcModuleLoaderWaiter,
                addGroupMembersCallback: function (groupEmail) {
                    goToMembersAction(undefined);
                },
                lpcHoverTargetProps: {
                    upn: person && person.email,
                    hostAppPersonaInfo: {
                        PersonaDisplayName: person && person.name
                    }
                }
            };
        };
        var facepileProps = state.facepilePersonas &&
            !_ms_odsp_utilities_lib_killswitch_Killswitch__WEBPACK_IMPORTED_MODULE_22__["Killswitch"].isActivated('96EC0112-DF6B-41BE-A704-47ABF4B7D922', '05/03/2018', 'Facepile Persona coins with LPC control')
            ? {
                personas: state.facepilePersonas,
                getPersonaProps: function (persona) {
                    return {
                        onRenderCoin: function (coinProps, defaultCoinRenderer) {
                            var person = persona && persona.data && persona.data.groupPerson;
                            var cardProps = makeDeferredLPCProps(person);
                            return Object(_components_LivePersonaCardAdapter_DeferredSpLivePersonaCard__WEBPACK_IMPORTED_MODULE_5__["wrapWithDeferredSpLivePersonaCard"])(cardProps, defaultCoinRenderer(coinProps));
                        }
                    };
                }
            }
            : {
                personas: state.facepilePersonas
            };
        var membersInfoProps = {
            membersText: state.membersText,
            goToMembersAction: goToMembersAction
        };
        var _logoHref = state.webAbsoluteUrl;
        var siteHeaderProps = {
            siteTitle: pageContext.webTitle,
            headerOptions: this._chrome && this._chrome.header,
            groupInfoString: this._getGroupInfoString(pageContext, strings),
            siteClassification: (this._isDisplayAssignedLabelsInsteadOfClassificationFeatureEnabled &&
                this._getSiteClassification()) ||
                pageContext.siteClassification,
            siteLogo: siteLogo,
            logoHref: _logoHref,
            logoOnClick: state.logoOnClick,
            disableSiteLogoFallback: true,
            facepile: facepileProps,
            showGroupCard: !!state.groupLinks,
            groupLinks: state.groupLinks,
            membersInfoProps: membersInfoProps,
            moduleLoader: moduleLoader,
            lpcModuleLoader: lpcModuleLoader,
            lpcModuleLoaderWaiter: lpcModuleLoaderWaiter,
            usageGuidelineUrl: state.usageGuidelineUrl,
            updateUsageGuidelineUrl: this._updateUsageGuidelineCallback,
            pageContext: pageContext,
            groupEmail: state.groupEmail,
            waitForPLT: this._params.waitForPLT
        };
        // Only users with manage lists permissions can edit the horizontal nav
        // (and only if an editing handler function is provided)
        var hasEditLink = !!params.onEditClicked && !state.isSiteReadOnly && !this._isAnonymousGuest && this._hasManageLists;
        var useMegaMenu = this._chrome.nav.megaMenuEnabled;
        var horizontalNavProps, topNavProps;
        var commonNavProps = {
            items: state.horizontalNavItems,
            editLink: hasEditLink
                ? Object(_utilities_nav_NavCommon__WEBPACK_IMPORTED_MODULE_3__["getEditLink"])(pageContext, false /*hasIcon*/, params.onEditClicked, undefined /*overrideEditLabel */, _components_HorizontalNav_HorizontalNav_resx__WEBPACK_IMPORTED_MODULE_7___default.a.editButtonAriaLabel /* overrideEditAriaLabel */)
                : undefined,
            moduleLoader: moduleLoader,
            isEditMode: state.isEditMode,
            ariaLabel: strings.horizontalNavAriaLabel || _components_HorizontalNav_HorizontalNav_resx__WEBPACK_IMPORTED_MODULE_7___default.a.ariaLabel,
            splitButtonAriaLabel: _components_HorizontalNav_HorizontalNav_resx__WEBPACK_IMPORTED_MODULE_7___default.a.splitButtonAriaLabelWithName,
            moreOptionsAriaLabel: strings.horizontalNavMoreOptionsAriaLabel || _components_HorizontalNav_HorizontalNav_resx__WEBPACK_IMPORTED_MODULE_7___default.a.moreOptionsAriaLabel,
            hasSelectedState: this._horizontalNavType === HorizontalNavTypes.quickLaunch,
            pageContext: this._pageContext,
            useMegaMenu: useMegaMenu
        };
        if (pageContext && pageContext.navigationInfo && pageContext.navigationInfo.isAudienceTargeted) {
            commonNavProps.isAudienceTargeted = true;
        }
        if (this._horizontalNavType === HorizontalNavTypes.quickLaunch) {
            horizontalNavProps = commonNavProps;
        }
        else if (this._horizontalNavType === HorizontalNavTypes.globalNav) {
            // aka top nav
            topNavProps = commonNavProps;
        }
        var followProps = state.followState !== undefined
            ? {
                followLabel: strings.follow,
                followAction: this._onFollowClick,
                followState: state.followState,
                followedAriaLabel: strings.followButtonAriaLabel,
                notFollowedAriaLabel: strings.followButtonAriaLabel,
                followedHoverText: strings.followedHover,
                notFollowedHoverText: strings.notFollowedHover,
                notFollowedLabel: strings.notFollowed
            }
            : undefined;
        var siteScriptProgressIndicatorProps = undefined;
        if (_ms_odsp_utilities_lib_features_Features__WEBPACK_IMPORTED_MODULE_19__["default"].isFeatureEnabled(SiteScriptProgressIndicatorFeature)) {
            siteScriptProgressIndicatorProps = {
                pageContext: pageContext,
                moduleLoader: siteScriptProgressModuleLoader,
                moduleLoaderWaiter: lpcModuleLoaderWaiter,
                imageUrls: this._params.imageUrls
            };
        }
        var sharePage = '/_layouts/15/share.aspx?isDlg=1&OpenInTopFrame=1';
        var hideShareButton = this._isAnonymousGuest ||
            !_ms_odsp_datasources_lib_Permissions__WEBPACK_IMPORTED_MODULE_14__["PermissionMask"].hasPermission(this._pageContext.webPermMasks, _ms_odsp_datasources_lib_Permissions__WEBPACK_IMPORTED_MODULE_14__["PermissionMask"].editListItems) ||
            (pageContext.groupId && pageContext.groupId !== '00000000-0000-0000-0000-000000000000');
        var shareButton = undefined;
        if (!hideShareButton) {
            shareButton = {
                url: pageContext.webAbsoluteUrl + sharePage,
                shareLabel: strings.shareLabel,
                loadingLabel: strings.loadingLabel
            };
            // Only override the default share button when the callback is provided.
            if (params.shareButtonOnClick) {
                shareButton.url = '';
                shareButton.onShare = params.shareButtonOnClick;
            }
        }
        var createSiteButtonProps = state.showCreateSiteButton
            ? {
                createSiteAction: this._onCreateSiteClick
            }
            : undefined;
        var siteReadOnlyProps;
        if (state.isSiteReadOnly) {
            siteReadOnlyProps = {
                isSiteReadOnly: true,
                siteReadOnlyString: strings.siteIsReadOnly,
                siteReadOnlyState: state.siteReadOnlyState,
                siteIsMovingString: strings.siteIsMoving,
                siteMoveCompletedString: strings.siteMoveComplete
            };
            if (pageContext.isArchived && webTemplateType === _ms_odsp_datasources_lib_interfaces_WebTemplateType__WEBPACK_IMPORTED_MODULE_12__["WebTemplateType"].teamChannel) {
                siteReadOnlyProps.siteReadOnlyString = strings.siteIsArchived;
            }
        }
        else {
            siteReadOnlyProps = undefined;
        }
        var siteResourceQuotaProps = undefined;
        if (state.siteResourceQuotaState !== 0 /* NoWarning */) {
            siteResourceQuotaProps = {
                siteResourceQuotaState: state.siteResourceQuotaState,
                siteResourceOverQuota: strings.siteIsOverQuota,
                siteResourceQuotaWarning: strings.siteIsCloseToQuota
            };
        }
        var layout = this._horizontalNavType === HorizontalNavTypes.quickLaunch ? _ms_odsp_datasources_lib_ChromeOptions__WEBPACK_IMPORTED_MODULE_10__["HeaderLayoutType"].FULLBLEED : undefined;
        var unifiedLayout = _ms_odsp_utilities_lib_features_FeatureOverrides__WEBPACK_IMPORTED_MODULE_23__["default"].isFeatureEnabled({ ODB: 1179 })
            ? this._pageContext.headerLayout
            : undefined;
        var userExpirationBarProps = !state.hideUserExpirationBar &&
            state.expiringUsers > 0 && {
            userExpirationOnClick: this._params.userExpirationOnClick,
            onDismiss: this._onUserExpirationDismissClick,
            expiringUserCount: state.expiringUsers
        };
        return {
            siteHeaderProps: siteHeaderProps,
            horizontalNavProps: horizontalNavProps,
            topNavProps: topNavProps,
            onRenderHorizontalNav: params.onRenderHorizontalNav,
            createSiteButton: createSiteButtonProps,
            shareButton: shareButton,
            follow: followProps,
            siteScriptProgressIndicator: siteScriptProgressIndicatorProps,
            messageBarProps: state.messageBarState,
            siteReadOnlyProps: siteReadOnlyProps,
            siteResourceQuotaProps: siteResourceQuotaProps,
            policyBarProps: state.policyBarState,
            unauthorizedTenantBarProps: state.unauthorizedTenantBarState,
            noSharePointSyntexLicenseBarProps: state.noSharePointSyntexLicenseBarState,
            layout: layout,
            unifiedLayout: unifiedLayout,
            userExpirationBarProps: userExpirationBarProps,
            getAccessToken: params.getAccessToken,
            groupsProvider: this._groupsProvider
        };
    };
    SiteHeaderContainerStateManager.prototype.updateHorizontalNav = function (horizontalLinks, afterSetState) {
        this.setState({ horizontalNavItems: horizontalLinks, editModeHorizontalNav: false }, afterSetState);
    };
    SiteHeaderContainerStateManager.prototype._getGroupInfoString = function (pageContext, strings) {
        var result;
        if (this._isGroup) {
            result = pageContext.groupType === "Public" /* public */ ? strings.publicGroup : strings.privateGroup;
        }
        else if (pageContext.isTeamsChannelSite ||
            Number(pageContext.webTemplate) === _ms_odsp_datasources_lib_interfaces_WebTemplateType__WEBPACK_IMPORTED_MODULE_12__["WebTemplateType"].teamChannel) {
            var channelType = pageContext.teamsChannelType;
            if (channelType === 3 /* StandardChannel */) {
                result = strings.standardChannel;
            }
            else if (channelType === 2 /* SharedChannel */) {
                result = strings.sharedChannel;
            }
            else {
                result = strings.privateChannel;
            }
        }
        return result;
    };
    /**
     * Determines the correct action to take when a user clicks on the member count.
     * For guest users, nothing should happen.
     * For other users, call the goToMembersOnClick callback, which launches the group
     * membership panel.
     */
    SiteHeaderContainerStateManager.prototype._computeGoToMembersAction = function (membersUrl) {
        var callback = undefined;
        if (!this._isGuest) {
            callback = this._onGoToMembersClick;
        }
        return callback;
    };
    SiteHeaderContainerStateManager.prototype.setState = function (state, afterSetState) {
        this._params.siteHeader.setState(state, afterSetState);
    };
    SiteHeaderContainerStateManager.prototype._noThrowPromise = function (promise) {
        return promise.catch(function () {
            return undefined;
        });
    };
    SiteHeaderContainerStateManager.prototype.shouldUseSiteIconManager = function (pageContext) {
        return (pageContext.webLogoUrl /* webLogoUrl is falsy */ ||
            pageContext.webLogoUrl.indexOf(_ms_odsp_datasources_lib_interfaces_ISpPageContext__WEBPACK_IMPORTED_MODULE_8__["DEFAULT_LOGO_URL"]) >=
                0 /* webLogoUrl is default _layouts/15/images/siteicon.png */ ||
            this.containsSiteAssetsRelativePath(pageContext) ||
            this._isGroup);
    };
    SiteHeaderContainerStateManager.prototype.containsSiteAssetsRelativePath = function (pageContext) {
        return (pageContext.webLogoUrl &&
            pageContext.webAbsoluteUrl &&
            pageContext.webLogoUrl
                .toLowerCase()
                .indexOf(pageContext.webAbsoluteUrl.toLowerCase() + '/siteassets') >= 0);
    };
    /**
     * Makes a call to acronym service.
     */
    SiteHeaderContainerStateManager.prototype._loadSiteAcronym = function () {
        return this._acronymDatasource.getAcronymData(this._pageContext.webTitle).then(function (value) {
            return {
                siteAcronym: value.acronym,
                siteLogoColor: value.color
            };
        });
    };
    /**
     * Sets up the horizontal nav with top nav nodes.
     */
    SiteHeaderContainerStateManager.prototype._setupHorizontalNav = function () {
        var pageContext = this._pageContext;
        var navigation = pageContext.navigationInfo;
        var quickLaunch = navigation && navigation.quickLaunch;
        var globalNav = navigation && navigation.topNav;
        var siteWantsHorizontalNav = this._chrome.nav.placement === _ms_odsp_datasources_lib_ChromeOptions__WEBPACK_IMPORTED_MODULE_10__["NavPlacementType"].HORIZONTAL;
        // Calculate the appropriate horizontal nav type and nav nodes
        // (The order of these conditions matters!)
        var horizontalNavNodes;
        var horizontalNavType = HorizontalNavTypes.none;
        if (siteWantsHorizontalNav &&
            this._params.horizontalQuickLaunchEnabled &&
            quickLaunch &&
            quickLaunch.length) {
            // This is a comm site and horizontal quick launch is supported
            horizontalNavNodes = quickLaunch;
            horizontalNavType = HorizontalNavTypes.quickLaunch;
        }
        else if (pageContext.isHubSite) {
            // Hub sites (other than comm sites) don't have a horizontal nav
            horizontalNavType = HorizontalNavTypes.none;
        }
        else if (pageContext.PublishingFeatureOn) {
            // Publishing is on, so fetch global nav links async
            this._asyncFetchTopNav = true;
            horizontalNavType = HorizontalNavTypes.globalNav;
        }
        else if (globalNav && globalNav.length) {
            // Has global nav (legacy top nav) nodes
            horizontalNavType = HorizontalNavTypes.globalNav;
            horizontalNavNodes = globalNav;
        }
        this._horizontalNavType = horizontalNavType;
        return this._transformToNavItems(horizontalNavNodes);
    };
    SiteHeaderContainerStateManager.prototype._fetchTopNavigation = function () {
        if (this._asyncFetchTopNav) {
            // need to fetch global navigation data (publishing/managed navigation top nodes)
            var navDataSource = new _ms_odsp_datasources_lib_ViewNav__WEBPACK_IMPORTED_MODULE_15__["ViewNavDataSource"](this._pageContext, "GlobalNavigationSwitchableProvider" /* publishingGlobalNav */);
            var levelsToFetch = this._chrome.nav.megaMenuEnabled ? 3 : 2;
            return navDataSource
                .getMenuState({ useCache: true, depth: levelsToFetch })
                .then(function (topNavLinkGroup) {
                if ((!isRefineAudienceTargetKillSwitchActivated || topNavLinkGroup) && topNavLinkGroup.links) {
                    return { horizontalNavItems: topNavLinkGroup.links };
                }
                return undefined;
            });
        }
        return _ms_odsp_utilities_lib_async_Promise__WEBPACK_IMPORTED_MODULE_21__["default"].resolve(undefined);
    };
    SiteHeaderContainerStateManager.prototype._transformToNavItems = function (nodes) {
        var _this = this;
        var horizontalNavItems = [];
        if (nodes && nodes.length > 0) {
            var navClick = function (ev, item) {
                if (!item || (item.url !== '' && item.url !== _utilities_nav_NavCommon__WEBPACK_IMPORTED_MODULE_3__["HEADER_LINK_URL"])) {
                    _this._params.topNavNodeOnClick(ev, item);
                }
                ev.stopPropagation();
                ev.preventDefault();
            };
            // For the first level of links, remove the Recent node if displaying quick launch links
            var isQuickLaunch_1 = this._horizontalNavType === HorizontalNavTypes.quickLaunch;
            var filter = function (node, level) {
                return level > 0 || !(isQuickLaunch_1 && node.Id === Number("1033" /* quickLaunchRecent */));
            };
            horizontalNavItems = _ms_odsp_datasources_lib_ViewNav__WEBPACK_IMPORTED_MODULE_15__["ViewNavDataSource"].transformNodesToLinks(nodes, navClick, filter);
        }
        return horizontalNavItems;
    };
    SiteHeaderContainerStateManager.prototype._processGroups = function () {
        var _this = this;
        if (this._isGroup) {
            return this._params.getGroupsProvider().then(function (groupsProvider) {
                if (groupsProvider) {
                    _this._groupsProvider = groupsProvider;
                    if (_this._groupsProvider.group) {
                        _this._groupsProvider.group.membership.load();
                        return _this._updateGroupsInfo();
                    }
                }
                return _ms_odsp_utilities_lib_async_Promise__WEBPACK_IMPORTED_MODULE_21__["default"].resolve(undefined);
            });
        }
        return _ms_odsp_utilities_lib_async_Promise__WEBPACK_IMPORTED_MODULE_21__["default"].resolve(undefined);
    };
    SiteHeaderContainerStateManager.prototype._updateGroupsInfo = function () {
        var _this = this;
        var outlookUrl;
        var membersUrl;
        var siteClassification;
        var state = {};
        if (this._isGroup) {
            var group_1 = this._groupsProvider.group;
            var updateGroupMember_1 = function (newValue) {
                var ret = {};
                if (newValue !== _ms_odsp_datasources_lib_interfaces_groups_SourceType__WEBPACK_IMPORTED_MODULE_11__["SourceType"].None &&
                    group_1.membership &&
                    _this._totalNumberOfMembers !== group_1.membership.totalNumberOfMembers) {
                    // *********** Facepile ***********
                    var facepilePersonas = _this._updateFacepilePersonas(group_1.membership);
                    // *********** Number of Members ***********
                    var membersText = _this._getMembersText(group_1.membership);
                    _this._totalNumberOfMembers = group_1.membership.totalNumberOfMembers;
                    ret = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, ret), {
                        membersText: membersText,
                        facepilePersonas: facepilePersonas
                    });
                }
                return _ms_odsp_utilities_lib_async_Promise__WEBPACK_IMPORTED_MODULE_21__["default"].resolve(ret);
            };
            var updateGroupBasicProperties_1 = function (newValue) {
                var ret = {};
                if (newValue !== _ms_odsp_datasources_lib_interfaces_groups_SourceType__WEBPACK_IMPORTED_MODULE_11__["SourceType"].None && !_this._hasParsedMembers) {
                    _this._hasParsedMembers = true;
                    // if we don't have a group classification, try falling back to site classification.
                    siteClassification =
                        (_this._isDisplayAssignedLabelsInsteadOfClassificationFeatureEnabled &&
                            _this._getSiteClassification()) ||
                            group_1.classification ||
                            _this._pageContext.siteClassification;
                    outlookUrl = _this._isGuest ? undefined : group_1.inboxUrl;
                    membersUrl = _this._isGuest ? undefined : group_1.membersUrl;
                    var groupCardLinks = _this._groupCardLinksFromGroupCardLinkParams(_this._params.groupCardInfo, group_1);
                    ret = {
                        siteClassification: siteClassification,
                        outlookUrl: outlookUrl,
                        membersUrl: membersUrl,
                        groupLinks: groupCardLinks,
                        groupEmail: group_1.mail
                    };
                    // For groups, the acronym service has never been initialized so start initializing now.
                    if (!skipAcronymCallwSiteLogo() || _this._acronymDatasource) {
                        return _this._noThrowPromise(_this._loadSiteAcronym()).then(function (state) {
                            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, state), ret);
                        });
                    }
                }
                return _ms_odsp_utilities_lib_async_Promise__WEBPACK_IMPORTED_MODULE_21__["default"].resolve(ret);
            };
            this._ensureEventGroup();
            this._eventGroup.on(group_1, 'source', function (newValue) {
                updateGroupBasicProperties_1(newValue).then(function (state) {
                    _this.setState(state);
                });
            });
            this._eventGroup.on(group_1.membership, 'source', function (newValue) {
                updateGroupMember_1(newValue).then(function (state) {
                    _this.setState(state);
                });
            });
            return _ms_odsp_utilities_lib_async_Promise__WEBPACK_IMPORTED_MODULE_21__["default"].all([
                updateGroupBasicProperties_1(group_1.source),
                updateGroupMember_1(group_1.membership.source)
            ]).then(function (states) {
                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, states[0]), states[1]), state);
            });
        }
        return _ms_odsp_utilities_lib_async_Promise__WEBPACK_IMPORTED_MODULE_21__["default"].resolve(state);
    };
    SiteHeaderContainerStateManager.prototype._ensureEventGroup = function () {
        if (!this._eventGroup) {
            this._eventGroup = new _ms_odsp_utilities_lib_events_EventGroup__WEBPACK_IMPORTED_MODULE_18__["default"](this);
        }
    };
    /* tslint:enable:member-ordering */
    /**
     * This function creates an array of IGroupCardLinks to feed to the GroupCard control.
     *
     * @param groupLinks: list of links we want to display in the group card
     * @param group: the Group model  that is the object for the Group.
     */
    SiteHeaderContainerStateManager.prototype._groupCardLinksFromGroupCardLinkParams = function (groupLinks, group) {
        var ret = [];
        // Create a map from GroupCardLink enum to the JSON property returned by our API to get group info
        if (this._isGroup && group && groupLinks && groupLinks.length) {
            for (var i = 0; i < groupLinks.length; i++) {
                var linkType = groupLinks[i].linkType;
                var url = this._getUrlFromEnum(linkType, group);
                if (url) {
                    if (!this._isAnonymousGuest || !GROUP_CARD_LINK_TYPES_MAP[linkType].trimIfAnonymous) {
                        // only display the link if the current user is not anonymous or, we've marked the link to display
                        // even if the user is anonymous.
                        var engagementID = GROUP_EID_PREFIX + GROUP_CARD_LINK_TYPES_MAP[linkType].eid + CLICK;
                        ret.push({
                            title: groupLinks[i].title,
                            icon: groupLinks[i].icon,
                            href: url,
                            engagementId: engagementID
                        });
                    }
                }
            }
            return ret;
        }
        return null;
    };
    /**
     * Get usageGuidelinesUrl from GroupSiteProvider.
     */
    SiteHeaderContainerStateManager.prototype._updateUsageGuidelineUrl = function () {
        var _this = this;
        if (((this._isDisplayAssignedLabelsInsteadOfClassificationFeatureEnabled &&
            this._pageContext.sensitivityLabel) ||
            (this._pageContext.siteClassification &&
                !this._pageContext.isAnonymousGuestUser &&
                !this._pageContext.isExternalGuestUser)) &&
            this._params.getGroupSiteProvider) {
            return this._params
                .getGroupSiteProvider()
                .then(function (groupSiteProvider) {
                _this._groupSiteProvider = groupSiteProvider;
            })
                .then(function () {
                var groupCreationContextPromise;
                if (_this._groupSiteProvider) {
                    groupCreationContextPromise = _this._groupSiteProvider.getGroupCreationContext();
                }
                return groupCreationContextPromise;
            })
                .then(function (groupCreationContext) {
                return {
                    usageGuidelineUrl: groupCreationContext.usageGuidelineUrl
                };
            });
        }
        else {
            return _ms_odsp_utilities_lib_async_Promise__WEBPACK_IMPORTED_MODULE_21__["default"].resolve(undefined);
        }
    };
    SiteHeaderContainerStateManager.prototype._getHubDataSource = function () {
        var _this = this;
        if (this._hubDataSource) {
            return _ms_odsp_utilities_lib_async_Promise__WEBPACK_IMPORTED_MODULE_21__["default"].as(this._hubDataSource);
        }
        else {
            return Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! @ms/odsp-datasources/lib/dataSources/hub/HubDataSource */ "Zean")).then(function (HubDataSourceType) {
                _this._hubDataSource = new HubDataSourceType.default(_this._pageContext);
                return _this._hubDataSource;
            });
        }
    };
    SiteHeaderContainerStateManager.prototype._setupCreateSiteButton = function () {
        var _this = this;
        if (_ms_odsp_utilities_lib_features_FeatureOverrides__WEBPACK_IMPORTED_MODULE_23__["default"].isFeatureEnabled(createSiteFromHubFeature)) {
            var waitForPLT = this._params.waitForPLT;
            if (waitForPLT) {
                return waitForPLT
                    .then(function () {
                    return _this._getHubDataSource();
                })
                    .then(function (hubDataSource) {
                    return Object(_components_CompositeHeader_subComponents_index__WEBPACK_IMPORTED_MODULE_6__["isCreateSiteFromHubAvailable"])(_this._pageContext, hubDataSource);
                })
                    .then(function (isAvailable) {
                    return { showCreateSiteButton: !!isAvailable };
                });
            }
        }
        return _ms_odsp_utilities_lib_async_Promise__WEBPACK_IMPORTED_MODULE_21__["default"].resolve(undefined);
    };
    SiteHeaderContainerStateManager.prototype._setupFollowButton = function () {
        var _this = this;
        if (this._isGuest) {
            return _ms_odsp_utilities_lib_async_Promise__WEBPACK_IMPORTED_MODULE_21__["default"].resolve(undefined);
        }
        this._followDataSource = this._params.followDataSource || new _ms_odsp_datasources_lib_Follow__WEBPACK_IMPORTED_MODULE_13__["FollowDataSource"](this._pageContext);
        return this._followDataSource.isFollowFeatureEnabled().then(function (result) {
            // update captured flag with result.
            if (!result) {
                return {
                    followState: undefined
                };
            }
            else {
                var state_1;
                return _this._followDataSource
                    .isSiteFollowed(_this._pageContext.webAbsoluteUrl, false /*onlyCache*/, false /*bypassCache*/, _this._pageContext.siteId, _this._pageContext.webId)
                    .then(function (isSiteFollowed) {
                    if (isSiteFollowed !== undefined) {
                        state_1 = {
                            followState: isSiteFollowed ? _CompositeHeader__WEBPACK_IMPORTED_MODULE_2__["FollowState"].followed : _CompositeHeader__WEBPACK_IMPORTED_MODULE_2__["FollowState"].notFollowing
                        };
                    }
                    return state_1;
                });
            }
        });
    };
    SiteHeaderContainerStateManager.prototype._setupSiteStatusBar = function () {
        if (this._params.getSiteDataSource) {
            return this._params
                .getSiteDataSource()
                .then(function (siteDataSource) {
                return siteDataSource.getStatusBarInfo();
            })
                .then(function (statusBarInfo) {
                if (statusBarInfo.StatusBarText) {
                    var messageProps = {
                        message: statusBarInfo.StatusBarText,
                        linkText: statusBarInfo.StatusBarLinkText,
                        linkTarget: statusBarInfo.StatusBarLinkTarget
                    };
                    return { messageBarState: messageProps };
                }
                return _ms_odsp_utilities_lib_async_Promise__WEBPACK_IMPORTED_MODULE_21__["default"].resolve(undefined);
            });
        }
        return _ms_odsp_utilities_lib_async_Promise__WEBPACK_IMPORTED_MODULE_21__["default"].resolve(undefined);
    };
    SiteHeaderContainerStateManager.prototype._setupSitePolicyBar = function () {
        // SitePolicyBar flight
        var sitePolicyBarFeature = { ODB: 749, ODC: null, Fallback: false };
        if (_ms_odsp_utilities_lib_features_Features__WEBPACK_IMPORTED_MODULE_19__["default"].isFeatureEnabled(sitePolicyBarFeature)) {
            if (this._pageContext.blockDownloadsExperienceEnabled || this._pageContext.viewOnlyExperienceEnabled) {
                var messageProps = undefined;
                if (!this._params.strings.authenticationPolicyActive || !this._params.strings.messageBarMoreInfo) {
                    messageProps = {
                        message: undefined,
                        linkText: undefined,
                        linkTarget: undefined
                    };
                }
                else {
                    messageProps = {
                        message: this._params.strings.authenticationPolicyActive,
                        linkText: this._params.strings.messageBarMoreInfo,
                        linkTarget: AUTH_POLICY_FWDLINK
                    };
                }
                return _ms_odsp_utilities_lib_async_Promise__WEBPACK_IMPORTED_MODULE_21__["default"].resolve({ policyBarState: messageProps });
            }
        }
        return _ms_odsp_utilities_lib_async_Promise__WEBPACK_IMPORTED_MODULE_21__["default"].resolve(undefined);
    };
    SiteHeaderContainerStateManager.prototype._setupUnauthorizedTenantBar = function () {
        // UnauthorizedTenantBanner flight
        var UnauthorizedTenantBannerFeature = { ODB: 1577, ODC: null, Fallback: false };
        if (_ms_odsp_utilities_lib_features_Features__WEBPACK_IMPORTED_MODULE_19__["default"].isFeatureEnabled(UnauthorizedTenantBannerFeature)) {
            if (this._pageContext.isUnauthorizedTenant) {
                var messageProps = undefined;
                if (!this._params.strings.unauthorizedTenantActive || !this._params.strings.messageBarMoreInfo) {
                    messageProps = {
                        message: undefined,
                        linkText: undefined,
                        linkTarget: undefined
                    };
                }
                else {
                    messageProps = {
                        message: this._params.strings.unauthorizedTenantActive,
                        linkText: this._params.strings.messageBarMoreInfo,
                        linkTarget: UNAUTHORIZED_TENANT_FWDLINK
                    };
                }
                return _ms_odsp_utilities_lib_async_Promise__WEBPACK_IMPORTED_MODULE_21__["default"].resolve({ unauthorizedTenantBarState: messageProps });
            }
        }
        return _ms_odsp_utilities_lib_async_Promise__WEBPACK_IMPORTED_MODULE_21__["default"].resolve(undefined);
    };
    SiteHeaderContainerStateManager.prototype._setupNoSharePointSyntexLicenseBar = function () {
        var _this = this;
        // CheckSharePointSyntexLicense flight
        var checkSharePointSyntexLicense = { ODB: 60031, ODC: null, Fallback: false };
        if (_ms_odsp_utilities_lib_features_Features__WEBPACK_IMPORTED_MODULE_19__["default"].isFeatureEnabled(checkSharePointSyntexLicense)) {
            if (Number(this._pageContext.webTemplate) === _ms_odsp_datasources_lib_interfaces_WebTemplateType__WEBPACK_IMPORTED_MODULE_12__["WebTemplateType"].contentCenter) {
                var state_2 = {
                    noSharePointSyntexLicenseBarState: undefined
                };
                if (this._params.getSyntexDataSource) {
                    return this._params.getSyntexDataSource().then(function (syntexDataSource) {
                        return syntexDataSource
                            .getMachineLearningCaptureEnabled()
                            .then(function (isMachineLearningCaptureEnabled) {
                            var _a, _b;
                            if (!isMachineLearningCaptureEnabled) {
                                // ExpStateManagerStrings: for debugging purpose only
                                var expStateManagerStringsEnabled = _ms_odsp_utilities_lib_features_Features__WEBPACK_IMPORTED_MODULE_19__["default"].isFeatureEnabled({
                                    ODB: 60049,
                                    ODC: null,
                                    Fallback: false
                                });
                                var expStateManagerStrings = (_a = _this._params.strings) === null || _a === void 0 ? void 0 : _a.default;
                                state_2.noSharePointSyntexLicenseBarState = {
                                    message: expStateManagerStringsEnabled && !!((_b = expStateManagerStrings) === null || _b === void 0 ? void 0 : _b.noSharePointSyntexLicense)
                                        ? expStateManagerStrings.noSharePointSyntexLicense
                                        : _this._params.strings.noSharePointSyntexLicense,
                                    linkText: undefined,
                                    linkTarget: undefined
                                };
                            }
                            return state_2;
                        });
                    });
                }
            }
        }
        return _ms_odsp_utilities_lib_async_Promise__WEBPACK_IMPORTED_MODULE_21__["default"].resolve(undefined);
    };
    SiteHeaderContainerStateManager.prototype._setupSiteReadOnlyBar = function () {
        if (_ms_odsp_utilities_lib_killswitch_Killswitch__WEBPACK_IMPORTED_MODULE_22__["Killswitch"].isActivated('40EBE94D-11BC-4926-A75E-6827E8FB6CD8', '8/11/2020', 'Remove Readonly XHR')) {
            // when removing this KillSwitch and the _setupSiteReadOnlyBarOld please also remove the
            // getReadOnlyState and getFullSiteReadOnlyState from the siteDatasource as all this info
            // is part of the page context.
            return this._setupSiteReadOnlyBarOld();
        }
        var state = {};
        if (this._pageContext.readOnlyState === undefined) {
            state.siteReadOnlyState = -2 /* unknown */;
        }
        else if (this._pageContext.readOnlyState === null) {
            state.siteReadOnlyState = -1 /* notReadOnly */;
        }
        else {
            state.siteReadOnlyState = this._pageContext.readOnlyState;
            state.isSiteReadOnly = this._pageContext.readOnlyState >= 0;
        }
        if (this._pageContext.isArchived) {
            state.isSiteReadOnly = true;
        }
        return _ms_odsp_utilities_lib_async_Promise__WEBPACK_IMPORTED_MODULE_21__["default"].resolve(state);
    };
    SiteHeaderContainerStateManager.prototype._setupSiteReadOnlyBarOld = function () {
        var _this = this;
        if (this._params.getSiteDataSource) {
            return this._params.getSiteDataSource().then(function (siteDataSource) {
                return siteDataSource.getReadOnlyState().then(function (readOnly) {
                    var state = {
                        siteReadOnlyState: siteDataSource.getFullSiteReadOnlyState()
                    };
                    if (readOnly || _this._pageContext.isArchived) {
                        state.isSiteReadOnly = true;
                    }
                    return state;
                });
            });
        }
        else {
            return _ms_odsp_utilities_lib_async_Promise__WEBPACK_IMPORTED_MODULE_21__["default"].resolve(undefined);
        }
    };
    SiteHeaderContainerStateManager.prototype._setupSiteResourceQuotaBar = function () {
        var state = {
            siteResourceQuotaState: this._pageContext.resourceQuotaExceeded
        };
        return _ms_odsp_utilities_lib_async_Promise__WEBPACK_IMPORTED_MODULE_21__["default"].resolve(state);
    };
    SiteHeaderContainerStateManager.prototype._setupUserExpirationBar = function () {
        var _this = this;
        var hasPermisisons = this._pageContext.isSiteAdmin && _ms_odsp_utilities_lib_features_Features__WEBPACK_IMPORTED_MODULE_19__["default"].isFeatureEnabled(UserExpirationPanelExperience);
        if (this._params.userExpirationOnClick && this._params.getUserExpirationProvider && hasPermisisons) {
            if (!this._userExpirationProvider) {
                return this._params
                    .getUserExpirationProvider()
                    .then(function (provider) {
                    _this._userExpirationProvider = provider;
                })
                    .then(function () {
                    return _this._userExpirationProvider
                        .getUsersWithExpirations('UserExpiration', true /*Ascending*/, 50 /*top*/, 0 /*skip*/, undefined /*Filter text*/)
                        .then(function (result) {
                        return _this._countExpiringUsers(result);
                    })
                        .then(function (count) {
                        if (count > 0) {
                            var state = { expiringUsers: count };
                            return state;
                        }
                    });
                });
            }
            return this._userExpirationProvider
                .getUsersWithExpirations('UserExpiration', true /*Ascending*/, 50 /*top*/, 0 /*skip*/, undefined /*Filter text*/)
                .then(function (result) {
                return _this._countExpiringUsers(result);
            })
                .then(function (count) {
                if (count > 0) {
                    var state = { expiringUsers: count };
                    return state;
                }
            });
        }
        else {
            return _ms_odsp_utilities_lib_async_Promise__WEBPACK_IMPORTED_MODULE_21__["default"].resolve(undefined);
        }
    };
    SiteHeaderContainerStateManager.prototype._countExpiringUsers = function (users) {
        var count = 0;
        var now = new Date();
        var then = new Date(now.getTime() + 1000 * 60 * 60 * 24 * 21);
        users.forEach(function (user) {
            if (user.expiration < then && !(user.isSiteAdmin && user.expiration < now)) {
                count++;
            }
        });
        return count;
    };
    /**
     * Get localized members count text.
     *
     * @param membership - a membership object.
     */
    SiteHeaderContainerStateManager.prototype._getMembersText = function (membership) {
        var totalMembers = membership.totalNumberOfMembers;
        if (totalMembers) {
            var strings = this._params.strings;
            var localizedCountFormat = _ms_odsp_utilities_lib_string_StringHelper__WEBPACK_IMPORTED_MODULE_16__["getLocalizedCountValue"](strings.membersCount, strings.membersCountIntervals, totalMembers);
            return _ms_odsp_utilities_lib_string_StringHelper__WEBPACK_IMPORTED_MODULE_16__["format"](localizedCountFormat, totalMembers);
        }
        else {
            return undefined;
        }
    };
    /**
     * Update the facepilePersonas with top three members.
     *
     * @param membership - a membership object.
     * @return Array of facepile personas.
     */
    SiteHeaderContainerStateManager.prototype._updateFacepilePersonas = function (membership) {
        // Use only top three members even if more members were previously cached
        var facepilePersonas = membership.membersList.members.slice(0, 3).map(function (member, index) {
            return {
                personaName: member.name,
                imageUrl: member.image,
                data: {
                    groupPerson: member,
                    personaType: member.entityType
                },
                'data-automationid': 'SiteHeaderFacepilePersona_' + index.toString()
            };
        });
        return facepilePersonas;
    };
    Object.defineProperty(SiteHeaderContainerStateManager.prototype, "_isDisplayAssignedLabelsInsteadOfClassificationFeatureEnabled", {
        get: function () {
            return _ms_odsp_utilities_lib_features_FeatureOverrides__WEBPACK_IMPORTED_MODULE_23__["default"].isFeatureEnabled({ ODB: 1688 /**AuthZenAssignedLableSupportForGroupRestAPI  */ });
        },
        enumerable: true,
        configurable: true
    });
    SiteHeaderContainerStateManager.prototype._getSiteClassification = function () {
        var assignedLabelsDisplayName, groupClassification;
        if (this._groupsProvider && this._groupsProvider.group) {
            if (this._pageContext) {
                assignedLabelsDisplayName = this._pageContext.sensitivityLabelName;
            }
            if (!assignedLabelsDisplayName) {
                groupClassification = this._groupsProvider.group.classification;
            }
        }
        return (assignedLabelsDisplayName ||
            groupClassification ||
            (this._pageContext && this._pageContext.siteClassification));
    };
    return SiteHeaderContainerStateManager;
}());

/* harmony default export */ __webpack_exports__["default"] = (SiteHeaderContainerStateManager);
function isRefineAudienceTargetKillSwitchActivated() {
    return _ms_odsp_utilities_lib_killswitch_Killswitch__WEBPACK_IMPORTED_MODULE_22__["Killswitch"].isActivated('1cd2d1c9-fdc8-4110-a71e-e8125063dd90', '2020-09-01', 'Refine the audience targeting logging');
}
function skipAcronymCallwSiteLogo() {
    return !_ms_odsp_utilities_lib_killswitch_Killswitch__WEBPACK_IMPORTED_MODULE_22__["Killswitch"].isActivated('4f8452f7-e57d-4fcd-978c-fb72127955a9', '09/08/2020', 'Skip call to get acronym if cusotm site logo exists');
}
//# sourceMappingURL=StateManager.js.map

/***/ })

}]);
//# sourceMappingURL=chunk.vendors~spcx-siteheaderstatemanager_[locale].js.map