(window["webpackJsonp_1e2cdec9_1360_4295_b73c_98d6f51866d5_0_1_0"] = window["webpackJsonp_1e2cdec9_1360_4295_b73c_98d6f51866d5_0_1_0"] || []).push([["vendors~shared-react-webtemplatesgalleryf~36956f54"],{

/***/ "6oWu":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-datasources@45.13.10_e509c819ab980023b76e5746ec0fc9e2/node_modules/@ms/odsp-datasources/lib/dataSources/web/WebDataSource.js ***!
  \*********************************************************************************************************************************************************************************************/
/*! exports provided: WebDataSource, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebDataSource", function() { return WebDataSource; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _base_CachedDataSource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../base/CachedDataSource */ "zpEg");
/* harmony import */ var _interfaces_ISpPageContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../interfaces/ISpPageContext */ "GlwB");
/* harmony import */ var _ms_odsp_utilities_lib_encoding_UriEncoding__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ms/odsp-utilities/lib/encoding/UriEncoding */ "+35T");




/**
 * This maps to server side model SiteLogoType
 */
var SiteLogoType;
(function (SiteLogoType) {
    /// <summary>
    /// Web logo in header
    /// </summary>
    SiteLogoType[SiteLogoType["WebLogo"] = 0] = "WebLogo";
    /// <summary>
    /// Hub site logo
    /// </summary>
    SiteLogoType[SiteLogoType["HubLogo"] = 1] = "HubLogo";
    /// <summary>
    /// Background image in extended header layout
    /// </summary>
    SiteLogoType[SiteLogoType["HeaderBackground"] = 2] = "HeaderBackground";
})(SiteLogoType || (SiteLogoType = {}));
/**
 * This maps to server side model SiteLogoAspect
 */
var SiteLogoAspect;
(function (SiteLogoAspect) {
    SiteLogoAspect[SiteLogoAspect["Square"] = 0] = "Square";
    SiteLogoAspect[SiteLogoAspect["Rectangular"] = 1] = "Rectangular";
})(SiteLogoAspect || (SiteLogoAspect = {}));
var WEB_DATA_SOURCE_NAME = 'WebDataSource';
var CLASSIC_WELCOME_PAGE = 'ClassicWelcomePage';
/**
 * This data source is for calls under "/_api/Web" (the context SPWeb).
 */
var WebDataSource = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(WebDataSource, _super);
    function WebDataSource(pageContext) {
        return _super.call(this, {
            dataSourceName: WEB_DATA_SOURCE_NAME,
            id: WEB_DATA_SOURCE_NAME + "(" + (pageContext ? pageContext.webId : '') + ")"
        }, {
            pageContext: pageContext
        }) || this;
    }
    /**
     * Uploads (and optionally overwrites) a File in a List under this Web
     * @param listId GUID of the List under the Web
     * @param fileData Binary data for the file to add to the list
     * @param overwrite Flag to overwrite an existing file with the same name
     */
    WebDataSource.prototype.addFileToWebList = function (listId, fileName, fileData, overwrite) {
        var overwriteValue = overwrite ? 'true' : 'false';
        var encodedFileName = _ms_odsp_utilities_lib_encoding_UriEncoding__WEBPACK_IMPORTED_MODULE_3__["default"].encodeRestUriStringToken(fileName);
        var restUrl = Object(_interfaces_ISpPageContext__WEBPACK_IMPORTED_MODULE_2__["getSafeWebServerRelativeUrl"])(this._pageContext) + "/_api/Web/Lists('" + listId + "')/RootFolder/Files/Add(Overwrite=" + overwriteValue + ",Url='" + encodedFileName + "')";
        return this.dataRequestor.getData({
            url: restUrl,
            qosName: 'AddFileToWebList',
            method: 'POST',
            noRedirect: true,
            additionalPostData: fileData,
            contentType: fileData.type,
            parseResponse: function (responseText) {
                var response = JSON.parse(responseText);
                if (!response || !response.d) {
                    return {
                        name: undefined,
                        serverRelativeUrl: undefined
                    };
                }
                return {
                    name: response.d.Name,
                    serverRelativeUrl: response.d.ServerRelativeUrl
                };
            }
        });
    };
    /**
     * Deletes the website.
     */
    WebDataSource.prototype.delete = function () {
        var _this = this;
        var restUrl = function () { return Object(_interfaces_ISpPageContext__WEBPACK_IMPORTED_MODULE_2__["getSafeWebServerRelativeUrl"])(_this._pageContext) + "/_api/Web"; };
        return this.getData(restUrl, undefined /*parseResponse*/, 'DeleteWeb' /*qosName*/, undefined /*getAdditionalPostData*/, 'DELETE' /*method*/);
    };
    /**
     * Retrieve all properties from web
     */
    WebDataSource.prototype.getWebProperties = function () {
        var _this = this;
        return this.getDataUtilizingLegacyCache({
            getUrl: function () { return Object(_interfaces_ISpPageContext__WEBPACK_IMPORTED_MODULE_2__["getSafeWebServerRelativeUrl"])(_this._pageContext) + "/_api/Web/AllProperties"; },
            parseResponse: function (responseText) {
                var response = JSON.parse(responseText);
                if (!response || !response.d) {
                    return {
                        GlobalNavLogoUrl: undefined,
                        GlobalNavSource: undefined,
                        GlobalNavTitle: undefined
                    };
                }
                return {
                    GlobalNavLogoUrl: response.d.GlobalNavLogoUrl,
                    GlobalNavSource: response.d.GlobalNavSource,
                    GlobalNavTitle: response.d.GlobalNavTitle
                };
            },
            qosName: 'getWebProperties',
            method: 'GET',
            noRedirect: true,
            bypassCache: true /** right now only used by global nav settings panel, by pass the cache */
        });
    };
    /**
     * Gets the basic properties (Title and Description) of the SPWeb associated with the current page context.
     */
    WebDataSource.prototype.getBasicWebProperties = function (bypassCache) {
        var _this = this;
        return this.getDataUtilizingLegacyCache({
            getUrl: function () {
                return Object(_interfaces_ISpPageContext__WEBPACK_IMPORTED_MODULE_2__["getSafeWebServerRelativeUrl"])(_this._pageContext) + "/_api/Web?$select=Title,Description,SiteLogoUrl";
            },
            parseResponse: function (responseText) {
                var response = JSON.parse(responseText);
                if (!response || !response.d) {
                    return {
                        description: undefined,
                        siteLogoUrl: undefined,
                        title: undefined
                    };
                }
                return {
                    description: response.d.Description,
                    siteLogoUrl: response.d.SiteLogoUrl,
                    title: response.d.Title
                };
            },
            qosName: 'GetBasicWebProperties',
            method: 'GET',
            noRedirect: true,
            bypassCache: !!bypassCache
        });
    };
    /**
     * Sets the basic properties (Title, Description, SiteLogoUrl) of the SPWeb associated with the current page context.
     */
    WebDataSource.prototype.setBasicWebProperties = function (web) {
        var _this = this;
        var restUrl = function () { return Object(_interfaces_ISpPageContext__WEBPACK_IMPORTED_MODULE_2__["getSafeWebServerRelativeUrl"])(_this._pageContext) + "/_api/Web"; };
        var postData = function () {
            var data = {
                __metadata: {
                    type: 'SP.Web'
                },
                Description: web.description,
                SiteLogoUrl: web.siteLogoUrl,
                Title: web.title,
                QuickLaunchEnabled: web.quickLaunchEnabled,
                TitleTranslations: web.titleTranslations ? { results: web.titleTranslations } : undefined,
                DescriptionTranslations: web.descriptionTranslations
                    ? { results: web.descriptionTranslations }
                    : undefined
            };
            return JSON.stringify(data);
        };
        return this.getData(restUrl, undefined /*parseResponse*/, 'SetBasicWebProperties' /*qosName*/, postData, 'PATCH' /*method*/);
    };
    /**
     * Update settings for global navigation
     * @param title global navigation title
     * @param source global navigation data source
     */
    WebDataSource.prototype.setGlobalNavSettings = function (title, source) {
        var postData = JSON.stringify({
            title: title,
            source: source
        });
        return this.dataRequestor.getData({
            url: this._pageContext.webAbsoluteUrl + "/_api/Web/SetGlobalNavSettings",
            qosName: 'SetGlobalNavSettings',
            method: 'POST',
            additionalPostData: postData,
            noRedirect: true
        });
    };
    /**
     * Gets server relative URL of the default document library of the SPWeb associated with the current page context.
     * Example: '/teams/TestSite/Shared Documents'
     */
    WebDataSource.prototype.getDefaultDocumentLibraryUrl = function (bypassCache) {
        var _this = this;
        return this.getDataUtilizingLegacyCache({
            getUrl: function () {
                return Object(_interfaces_ISpPageContext__WEBPACK_IMPORTED_MODULE_2__["getSafeWebServerRelativeUrl"])(_this._pageContext) + "/_api/Web/DefaultDocumentLibrary/rootfolder/ServerRelativeUrl";
            },
            parseResponse: function (responseText) {
                var response = JSON.parse(responseText);
                if (!response || !response.d) {
                    return undefined;
                }
                return response.d.ServerRelativeUrl;
            },
            qosName: 'GetDefaultDocumentLibraryUrl',
            method: 'GET',
            noRedirect: true,
            bypassCache: !!bypassCache
        });
    };
    /**
     * Gets classic homepage of site that had its homepage upgraded to modern.
     * Example: /teams/TestSite/SitePages/Home - old.aspx
     */
    WebDataSource.prototype.getClassicWelcomePage = function (bypassCache) {
        var _this = this;
        return this.getDataUtilizingLegacyCache({
            getUrl: function () {
                return Object(_interfaces_ISpPageContext__WEBPACK_IMPORTED_MODULE_2__["getSafeWebServerRelativeUrl"])(_this._pageContext) + "/_api/Web?$select=" + CLASSIC_WELCOME_PAGE + ",IsRevertHomepageLinkHidden";
            },
            parseResponse: function (responseText) {
                var response = JSON.parse(responseText);
                if (!response || !response.d || response.d.IsRevertHomepageLinkHidden) {
                    return undefined;
                }
                return response.d.ClassicWelcomePage;
            },
            qosName: 'GetClassicWelcomePage',
            method: 'GET',
            noRedirect: true,
            bypassCache: !!bypassCache,
            cacheRequestKey: "" + (this._pageContext.webServerRelativeUrl + CLASSIC_WELCOME_PAGE)
        });
    };
    WebDataSource.prototype.removeClassicWelcomePage = function () {
        var _this = this;
        var restUrl = function () { return Object(_interfaces_ISpPageContext__WEBPACK_IMPORTED_MODULE_2__["getSafeWebServerRelativeUrl"])(_this._pageContext) + "/_api/Web"; };
        var postData = function () {
            var data = {
                __metadata: {
                    type: 'SP.Web'
                },
                IsRevertHomepageLinkHidden: true
            };
            return JSON.stringify(data);
        };
        return this.getData(restUrl, undefined, 'RemoveClassicWelcomePage', postData, 'PATCH').then(function () {
            _this.flushCache("" + (_this._pageContext.webServerRelativeUrl + CLASSIC_WELCOME_PAGE));
        });
    };
    /**
     * Gets the count of items in a site's default document library
     */
    WebDataSource.prototype.getDefaultDocumentLibraryCount = function (bypassCache) {
        var _this = this;
        return this.getDataUtilizingLegacyCache({
            getUrl: function () {
                return Object(_interfaces_ISpPageContext__WEBPACK_IMPORTED_MODULE_2__["getSafeWebServerRelativeUrl"])(_this._pageContext) + "/_api/Web/DefaultDocumentLibrary/ItemCount";
            },
            parseResponse: function (responseText) {
                var response = JSON.parse(responseText);
                if (!response || !response.d) {
                    return undefined;
                }
                return response.d.ItemCount;
            },
            qosName: 'GetDefaultDocumentLibraryCount',
            method: 'GET',
            noRedirect: true,
            bypassCache: !!bypassCache
        });
    };
    WebDataSource.prototype.sendAuditLog = function (auditEvent) {
        var webServerRelativeUrl = "" + Object(_interfaces_ISpPageContext__WEBPACK_IMPORTED_MODULE_2__["getSafeWebServerRelativeUrl"])(this._pageContext);
        var webAbsoluteUrl = this._pageContext.webAbsoluteUrl;
        var restUrl = webServerRelativeUrl + "/_api/web/ActivityLogger/LogActivity";
        var postData = JSON.stringify({
            Operation: auditEvent,
            AffectedResourceUrl: webAbsoluteUrl,
            ItemType: 'Site'
        });
        return this.dataRequestor.getData({
            url: restUrl,
            qosName: 'sendAuditLog',
            additionalPostData: postData,
            // The SPO Client Guid. This is used for categorizing the Audit entries as generated by the SPO client
            additionalHeaders: { ClientGUID: '00000003-0000-0ff1-ce00-000000000000' }
        });
    };
    WebDataSource.prototype.setSiteLogo = function (relativeLogoUrl, logoType, aspect, focalx, focaly, isFocalPatch) {
        if (logoType === void 0) { logoType = SiteLogoType.WebLogo; }
        if (aspect === void 0) { aspect = SiteLogoAspect.Square; }
        var postData = JSON.stringify({
            relativeLogoUrl: relativeLogoUrl,
            type: logoType,
            aspect: aspect,
            focalx: focalx,
            focaly: focaly,
            isFocalPatch: isFocalPatch
        });
        return this.dataRequestor.getData({
            url: this._pageContext.webAbsoluteUrl + "/_api/siteiconmanager/setsitelogo",
            qosName: 'SetSiteLogo',
            method: 'POST',
            additionalPostData: postData,
            noRedirect: true
        });
    };
    /**
     * Sets the state of the NextStepsFirstRunEnabled property of the SPWeb associated with the current page context.
     */
    WebDataSource.prototype.setNextStepsFirstRunEnabled = function (nextStepsFirstRunEnabled) {
        var postData = JSON.stringify({
            __metadata: { type: 'SP.Web' },
            NextStepsFirstRunEnabled: nextStepsFirstRunEnabled
        });
        return this.dataRequestor.getData({
            url: Object(_interfaces_ISpPageContext__WEBPACK_IMPORTED_MODULE_2__["getSafeWebServerRelativeUrl"])(this._pageContext) + "/_api/Web",
            parseResponse: undefined,
            qosName: 'SetNextStepsFirstRunEnabled',
            additionalPostData: postData,
            method: 'PATCH'
        });
    };
    /**
     * Gets the state of the WebTemplatesGalleryFirstRunEnabled property of the SPWeb associated with the current page context.
     */
    WebDataSource.prototype.getWebTemplatesGalleryFirstRunEnabled = function (bypassCache) {
        var _this = this;
        return this.getDataUtilizingLegacyCache({
            getUrl: function () {
                return Object(_interfaces_ISpPageContext__WEBPACK_IMPORTED_MODULE_2__["getSafeWebServerRelativeUrl"])(_this._pageContext) + "/_api/Web/WebTemplatesGalleryFirstRunEnabled";
            },
            parseResponse: function (responseText) {
                var response = JSON.parse(responseText);
                if (!response || !response.d) {
                    return false;
                }
                return response.d.WebTemplatesGalleryFirstRunEnabled;
            },
            qosName: 'getWebTemplatesGalleryFirstRunEnabled',
            method: 'GET',
            noRedirect: true,
            bypassCache: !!bypassCache
        });
    };
    /**
     * Sets the state of the WebTemplatesGalleryFirstRunEnabled property of the SPWeb associated with the current page context.
     */
    WebDataSource.prototype.setWebTemplatesGalleryFirstRunEnabled = function (webTemplatesGalleryFirstRunEnabled) {
        var postData = JSON.stringify({
            __metadata: { type: 'SP.Web' },
            WebTemplatesGalleryFirstRunEnabled: webTemplatesGalleryFirstRunEnabled
        });
        return this.dataRequestor.getData({
            url: Object(_interfaces_ISpPageContext__WEBPACK_IMPORTED_MODULE_2__["getSafeWebServerRelativeUrl"])(this._pageContext) + "/_api/Web",
            parseResponse: undefined,
            qosName: 'setWebTemplatesGalleryFirstRunEnabled',
            additionalPostData: postData,
            method: 'PATCH'
        });
    };
    return WebDataSource;
}(_base_CachedDataSource__WEBPACK_IMPORTED_MODULE_1__["default"]));

/* harmony default export */ __webpack_exports__["default"] = (WebDataSource);
//# sourceMappingURL=WebDataSource.js.map

/***/ }),

/***/ "s50i":
/*!*******************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-datasources@45.13.10_e509c819ab980023b76e5746ec0fc9e2/node_modules/@ms/odsp-datasources/lib/Web.js ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: WebDataSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dataSources_web_WebDataSource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dataSources/web/WebDataSource */ "6oWu");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WebDataSource", function() { return _dataSources_web_WebDataSource__WEBPACK_IMPORTED_MODULE_0__["WebDataSource"]; });

// Everything related to the SPWeb Data Source

//# sourceMappingURL=Web.js.map

/***/ })

}]);
//# sourceMappingURL=chunk.vendors~shared-react-webtemplatesgalleryf~36956f54_[locale].js.map