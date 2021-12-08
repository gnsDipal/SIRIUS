(window["webpackJsonp_8494e7d7_6b99_47b2_a741_59873e42f16f_11_10_1"] = window["webpackJsonp_8494e7d7_6b99_47b2_a741_59873e42f16f_11_10_1"] || []).push([["sp-remote-web-file-getter"],{

/***/ "LLGX":
/*!**********************************************!*\
  !*** ./lib/tenantUtilities/TenantUtility.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var TenantUtility = /** @class */ (function () {
    function TenantUtility() {
    }
    /**
     * True if the tenant is multi geo tenant.
     */
    TenantUtility.isMultiGeo = function (pageContext) {
        return pageContext.legacyPageContext.isMultiGeoTenant;
    };
    return TenantUtility;
}());
/* harmony default export */ __webpack_exports__["default"] = (TenantUtility);


/***/ }),

/***/ "USDd":
/*!***************************************************************************!*\
  !*** ./lib/remoteWebFileGetter/RemoteWebFileGetterAsyncImplementation.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ms/odsp-utilities-bundle */ "y88i");
/* harmony import */ var _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SPResourcePath__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../SPResourcePath */ "OLPK");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @microsoft/sp-diagnostics */ "ut3N");
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _microsoft_sp_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @microsoft/sp-http */ "vlQI");
/* harmony import */ var _microsoft_sp_http__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_http__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _microsoft_sp_page_context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @microsoft/sp-page-context */ "X+PM");
/* harmony import */ var _microsoft_sp_page_context__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_page_context__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _extensionHelper_ExtensionHelper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../extensionHelper/ExtensionHelper */ "ByVl");
/* harmony import */ var _UrlUtility__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../UrlUtility */ "z7It");
/* harmony import */ var _tenantUtilities_TenantUtility__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../tenantUtilities/TenantUtility */ "LLGX");
/**
 * @file RemoteWebFileGetterAsyncImplementation.ts
 * @Copyright (c) Microsoft Corporation.  All rights reserved.
 *
 * @remark For looking up the SharePoint file metadata such as Site and Web IDs
 */









var CONTEXT_WEB_PATH = '/_api/web/';
var DEFAULT_SELECT_FIELDS = '&$select=ListId,Name,ServerRelativeUrl,SiteId,UniqueId,WebId';
var GENERIC_FILE_ENDPOINT_PATH = "GetFileByUrl(@url)";
var IMAGE_ENDPOINT_PATH = "GetListByServerRelativeUrl(@listUrl)/RenderListDataAsStream";
var LIST_BASIC_RENDER_OPTION = 7;
var LIST_MEDIA_SERVICE_RENDER_OPTION = 4096;
var REMOTE_WEB_PATH = '/_api/SP.RemoteWeb(@remoteWeb)/';
var VROOM_API_PATH = '/_api/v2.0';
var VROOM_DEFAULT_EXPAND = 'sharepointIds';
var VROOM_DEFAULT_SELECT = 'createdBy,lastModifiedDateTime,name,sharepointIds,webDavUrl,webUrl';
var RemoteWebFileGetterAsyncImplementation = /** @class */ (function () {
    function RemoteWebFileGetterAsyncImplementation(serviceScope) {
        this._serviceScope = serviceScope;
        this._ensureServiceScope();
    }
    RemoteWebFileGetterAsyncImplementation._getVroomEndpoint = function (absoluteFileUrl, webUrl, graphIds, sharepointIds, extraFields) {
        var itemPath;
        if (graphIds) {
            // If the caller had actual graph drive and item ids, use /drives/ API
            itemPath = "/drives/" + graphIds.driveId + "/items/" + graphIds.itemId;
        }
        else if (sharepointIds) {
            var trimBrackets = function (guid) {
                // This will handle the common case of including brackets. Will not address URL-encoded brackets.
                var parsed = _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__["Guid"].tryParse(guid);
                return parsed && parsed.toString();
            };
            // If not, and we have the sharepoint GUIDs, use /sites/ API
            itemPath = "/sites/" + new _SPResourcePath__WEBPACK_IMPORTED_MODULE_1__["SPResourcePath"](absoluteFileUrl).domain + "," + trimBrackets(sharepointIds.siteId) + "," + trimBrackets(sharepointIds.webId) + "/items/" + trimBrackets(sharepointIds.uniqueId) + "/driveItem";
        }
        else {
            // If we only have a path, use /shares/ API
            // Compute the token by URL-safe base64 encoding the UTF-8 representation
            var sharesToken = btoa(unescape(encodeURIComponent(absoluteFileUrl)))
                .replace(/=+$/g, '')
                .replace(/[+]/g, '-')
                .replace(/\//g, '_');
            itemPath = "/shares/u!" + sharesToken + "/driveItem";
        }
        var baseUrl = "" + _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_0__["Uri"].concatenate(webUrl, VROOM_API_PATH) + itemPath;
        return baseUrl + "?expand=" + VROOM_DEFAULT_EXPAND + "&select=" + VROOM_DEFAULT_SELECT;
    };
    /**
     * Uses the Vroom /shares/ or /sites/ API to look up information about a file.
     * This has the following advantages over getFileByUrl:
     * - All returned URLs will have any unsafe characters escaped and be properly spec-compliant
     * - Returns the URL of the target SPWeb without requiring special processing
     * - webUrl handles more WAC scenarios than ServerRedirectedEmbedUrl, e.g. XLS files
     * - Can obtain MediaTA service properties, e.g. thumbnail URL
     */
    RemoteWebFileGetterAsyncImplementation.prototype.getFileViaVroom = function (absoluteResourcePath, sharepointIds, graphIds, extraFields) {
        var webDomain = this._absoluteWebUri.getLeftPart(1 /* UriPartial.authority */);
        if (this._shouldUseSpHttpClient(absoluteResourcePath)) {
            return this._spHttpClient
                .get(RemoteWebFileGetterAsyncImplementation._getVroomEndpoint(absoluteResourcePath, webDomain, graphIds, sharepointIds, extraFields), _microsoft_sp_http__WEBPACK_IMPORTED_MODULE_4__["SPHttpClient"].configurations.v1, {
            /* plain */
            })
                .then(function (response) { return response.json(); });
        }
        else {
            // If we are requesting the file in a different geo location of the current tenant, we will use
            // AAD data provider to call the GetFileByUrl API in that geo location.
            var geoLocationDomainUrl = this._getAadEndPoint(absoluteResourcePath);
            var aadHttpClient = new _microsoft_sp_http__WEBPACK_IMPORTED_MODULE_4__["AadHttpClient"](this._serviceScope, geoLocationDomainUrl, {
                configuration: _microsoft_sp_http__WEBPACK_IMPORTED_MODULE_4__["_AadTokenProviders"].preAuthorizedConfiguration
            });
            var headers = new Headers();
            headers.append('Accept', 'application/json');
            return aadHttpClient
                .get(RemoteWebFileGetterAsyncImplementation._getVroomEndpoint(absoluteResourcePath, geoLocationDomainUrl, graphIds, sharepointIds, extraFields), _microsoft_sp_http__WEBPACK_IMPORTED_MODULE_4__["AadHttpClient"].configurations.v1, {
                headers: headers
            })
                .then(function (response) { return response.json(); });
        }
    };
    RemoteWebFileGetterAsyncImplementation.prototype.getFileByUrl = function (absolutefileUrl, extraFields) {
        return this._getFileByUrl(absolutefileUrl, extraFields);
    };
    RemoteWebFileGetterAsyncImplementation.prototype.getImageFileDataByUrl = function (absolutefileUrl, fetchCaption) {
        return this._getImageFileDataCore(absolutefileUrl, fetchCaption);
    };
    RemoteWebFileGetterAsyncImplementation.prototype._ensureServiceScope = function () {
        var _this = this;
        this._serviceScope.whenFinished(function () {
            _this._pageContext = _this._serviceScope.consume(_microsoft_sp_page_context__WEBPACK_IMPORTED_MODULE_5__["PageContext"].serviceKey);
            _this._absoluteWebUri = new _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_0__["Uri"](_this._pageContext.web.absoluteUrl);
            _this._httpClient = _this._serviceScope.consume(_microsoft_sp_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"].serviceKey);
            _this._spHttpClient = _this._serviceScope.consume(_microsoft_sp_http__WEBPACK_IMPORTED_MODULE_4__["SPHttpClient"].serviceKey);
        });
    };
    Object.defineProperty(RemoteWebFileGetterAsyncImplementation.prototype, "_genericFilePathSegment", {
        get: function () {
            return this._webPathSegment + GENERIC_FILE_ENDPOINT_PATH;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RemoteWebFileGetterAsyncImplementation.prototype, "_imagePathSegment", {
        get: function () {
            return this._webPathSegment + IMAGE_ENDPOINT_PATH;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RemoteWebFileGetterAsyncImplementation.prototype, "_webPathSegment", {
        get: function () {
            return !this._pageContext.site.isNoScriptEnabled ? CONTEXT_WEB_PATH : REMOTE_WEB_PATH;
        },
        enumerable: true,
        configurable: true
    });
    RemoteWebFileGetterAsyncImplementation.prototype._getFileByUrl = function (absolutefileUrl, extraFields) {
        if (this._shouldUseSpHttpClient(absolutefileUrl)) {
            return this._spHttpClient
                .post(this._getFileEndpoint(absolutefileUrl, extraFields, this._absoluteWebUri.toString()), _microsoft_sp_http__WEBPACK_IMPORTED_MODULE_4__["SPHttpClient"].configurations.v1, {
            /* plain */
            })
                .then(function (response) { return response.json(); });
        }
        else {
            // If we are requesting the file in a different geo location of the current tenant, we will use
            // AAD data provider to call the GetFileByUrl API in that geo location.
            // If we are requesting the vanity file resource in a different geo location of the tenant, we need to use
            // the portal url of the geo to generate AAD data provider.
            var geoLocationDomainUrl = this._getAadEndPoint(absolutefileUrl);
            var aadHttpClient = new _microsoft_sp_http__WEBPACK_IMPORTED_MODULE_4__["AadHttpClient"](this._serviceScope, geoLocationDomainUrl, {
                configuration: _microsoft_sp_http__WEBPACK_IMPORTED_MODULE_4__["_AadTokenProviders"].preAuthorizedConfiguration
            });
            var headers = new Headers();
            headers.append('Accept', 'application/json;odata=nometadata');
            headers.append('OData-Version', '3.0');
            return aadHttpClient
                .post(this._getFileEndpoint(absolutefileUrl, extraFields, geoLocationDomainUrl), _microsoft_sp_http__WEBPACK_IMPORTED_MODULE_4__["AadHttpClient"].configurations.v1, {
                headers: headers
            })
                .then(function (response) { return response.json(); });
        }
    };
    RemoteWebFileGetterAsyncImplementation.prototype._shouldUseSpHttpClient = function (absolutefileUrl) {
        var fileUri = new _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_0__["Uri"](absolutefileUrl);
        var isMultiGeo = _tenantUtilities_TenantUtility__WEBPACK_IMPORTED_MODULE_8__["default"].isMultiGeo(this._pageContext);
        var isVanityResource = _UrlUtility__WEBPACK_IMPORTED_MODULE_7__["UrlUtility"].isVanityUrl(absolutefileUrl, this._pageContext);
        var portalUrlOfVanityResource = isVanityResource && _UrlUtility__WEBPACK_IMPORTED_MODULE_7__["UrlUtility"].getPortalUrlOfVanityResource(absolutefileUrl, this._pageContext);
        var portalUriOfVanityResource = portalUrlOfVanityResource && new _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_0__["Uri"](portalUrlOfVanityResource);
        return (fileUri.getHost() === this._absoluteWebUri.getHost() ||
            isMultiGeo === false ||
            (portalUriOfVanityResource && portalUriOfVanityResource.getHost() === this._absoluteWebUri.getHost()));
    };
    RemoteWebFileGetterAsyncImplementation.prototype._getAadEndPoint = function (absolutefileUrl) {
        var fileUri = new _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_0__["Uri"](absolutefileUrl);
        var isVanityResource = _UrlUtility__WEBPACK_IMPORTED_MODULE_7__["UrlUtility"].isVanityUrl(absolutefileUrl, this._pageContext);
        var portalUrlOfVanityResource = isVanityResource && _UrlUtility__WEBPACK_IMPORTED_MODULE_7__["UrlUtility"].getPortalUrlOfVanityResource(absolutefileUrl, this._pageContext);
        var portalUriOfVanityResource = portalUrlOfVanityResource && new _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_0__["Uri"](portalUrlOfVanityResource);
        // If we request vanity file resource in a different geo location of the tenant,
        // we need to use the portal url of the geo to generate AAD data provider.
        return portalUriOfVanityResource
            ? portalUriOfVanityResource.getLeftPart(1 /* UriPartial.authority */)
            : fileUri.getLeftPart(1 /* UriPartial.authority */);
    };
    RemoteWebFileGetterAsyncImplementation.prototype._getFileEndpoint = function (absolutefileUrl, extraFields, webUrl) {
        var encodedFileUrl = _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_0__["UriEncoding"].encodeRestUriStringToken(absolutefileUrl);
        var preSelectUrl = _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_0__["Uri"].concatenate(webUrl ? webUrl : this._absoluteWebUri.toString(), this._genericFilePathSegment) +
            ("?@remoteWeb='" + encodedFileUrl + "'&@url='" + encodedFileUrl + "'");
        var extraFieldsAsString = extraFields && extraFields.join(',');
        if (extraFieldsAsString) {
            return "" + preSelectUrl + DEFAULT_SELECT_FIELDS + "," + extraFieldsAsString + "&$expand=" + extraFieldsAsString;
        }
        else {
            return "" + preSelectUrl + DEFAULT_SELECT_FIELDS;
        }
    };
    RemoteWebFileGetterAsyncImplementation.prototype._getImageFileDataCore = function (absolutefileUrl, processIfNoCaption) {
        var _this = this;
        var monitor = new _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_3__["_QosMonitor"]('RemoteWebFileGetterAsyncImplementation.getImageFileDataByUrl');
        try {
            return this._constructPostRequest(absolutefileUrl, processIfNoCaption)
                .then(function (response) { return response.json(); })
                .then(function (listResponse) {
                var row;
                if (!listResponse.ListData || !listResponse.ListData.Row || !(row = listResponse.ListData.Row[0])) {
                    monitor.writeExpectedFailure('ItemNotFound');
                    return Promise.resolve(undefined);
                }
                var metadataJson = row.MediaServiceMetadata || row.MediaServiceFastMetadata;
                if (metadataJson) {
                    var metadata = JSON.parse(metadataJson);
                    if (metadata.imageCaption && metadata.imageCaption.caption) {
                        monitor.writeSuccess({
                            confidence: metadata.imageCaption.confidence,
                            processIfNoCaption: processIfNoCaption
                        });
                        return Promise.resolve(metadata);
                    }
                    else if (!processIfNoCaption &&
                        metadata.photo &&
                        metadata.photo.height &&
                        metadata.photo.width) {
                        monitor.writeSuccess();
                        return Promise.resolve(metadata);
                    }
                }
                if (processIfNoCaption) {
                    return _this._processMedia(absolutefileUrl, listResponse)
                        .then(function (analysisResult) {
                        monitor.writeSuccess();
                        return Promise.resolve(analysisResult);
                    })
                        .catch(function (error) {
                        monitor.writeUnexpectedFailure('ReprocessError', error);
                        return Promise.resolve(undefined);
                    });
                }
                else {
                    monitor.writeExpectedFailure('NoMetadataDespiteReprocess');
                    return Promise.resolve(undefined);
                }
            });
        }
        catch (error) {
            monitor.writeUnexpectedFailure('CatchAll', error);
            return undefined;
        }
    };
    RemoteWebFileGetterAsyncImplementation.prototype._constructPostRequest = function (absolutefileUrl, processIfNoCaption) {
        var serverRelativeUrl = new _SPResourcePath__WEBPACK_IMPORTED_MODULE_1__["SPResourcePath"](absolutefileUrl).path;
        var encodedServerRelativeUrl = _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_0__["UriEncoding"].encodeRestUriStringToken(serverRelativeUrl);
        var encodedFileUrl = _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_0__["UriEncoding"].encodeRestUriStringToken(absolutefileUrl);
        var finalUrl = _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_0__["Uri"].concatenate(this._absoluteWebUri.toString(), this._imagePathSegment) +
            ("?View=&@remoteWeb='" + encodedFileUrl + "'&@listUrl='" + encodedServerRelativeUrl + "'");
        var headers = new Headers();
        headers.append('Content-Type', 'application/json;odata=verbose');
        headers.append('Accept', 'application/json;odata=nometadata');
        headers.append('OData-Version', '3.0');
        var renderOptions = LIST_BASIC_RENDER_OPTION;
        if (processIfNoCaption) {
            renderOptions += LIST_MEDIA_SERVICE_RENDER_OPTION;
        }
        return this._spHttpClient.post(finalUrl, _microsoft_sp_http__WEBPACK_IMPORTED_MODULE_4__["SPHttpClient"].configurations.v1, {
            body: JSON.stringify({
                parameters: {
                    __metadata: { type: 'SP.RenderListDataParameters' },
                    AllowMultipleValueFilterForTaxonomyFields: true,
                    RenderOptions: renderOptions,
                    ViewXml: "<View Scope=\"RecursiveAll\">\n                <Query>\n                  <Where>\n                    <And>\n                      <Eq>\n                        <FieldRef Name=\"FileRef\"/>\n                        <Value Type=\"Url\">" + serverRelativeUrl + "</Value>\n                      </Eq>\n                      <Eq>\n                        <FieldRef Name=\"FSObjType\" />\n                        <Value Type=\"Integer\">0</Value>\n                    </Eq>\n                    </And>\n                  </Where>\n                </Query>\n                <ViewFields>\n                  <FieldRef Name=\"MediaServiceFastMetadata\"/>\n                  <FieldRef Name=\"MediaServiceMetadata\"/>\n                  <FieldRef Name=\"Editor\" />\n                  <FieldRef Name=\"FileLeafRef\" />\n                  <FieldRef Name=\"File_x0020_Type\" />\n                  <FieldRef Name=\"ID\" />\n                  <FieldRef Name=\"UniqueID\" />\n                </ViewFields>\n                <RowLimit Paged=\"FALSE\">1</RowLimit>\n              </View>"
                }
            }),
            headers: headers
        });
    };
    RemoteWebFileGetterAsyncImplementation.prototype._processMedia = function (absolutefileUrl, listResponse) {
        var _this = this;
        var monitor = new _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_3__["_QosMonitor"]('RemoteWebFileGetterAsyncImplementation._processMedia');
        try {
            var serviceUri = new _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_0__["Uri"](listResponse.ListSchema['.mediaBaseUrl']);
            serviceUri.setPath('analyze');
            serviceUri.setQueryParameter('provider', 'spo');
            serviceUri.setQueryParameter('profile', 'imagecaption');
            var row = listResponse.ListData.Row[0];
            serviceUri.setQueryParameter('extension', _extensionHelper_ExtensionHelper__WEBPACK_IMPORTED_MODULE_6__["default"].getExtension(new _SPResourcePath__WEBPACK_IMPORTED_MODULE_1__["SPResourcePath"](row.FileRef)));
            serviceUri.setQueryParameter('docid', row['.spItemUrl']);
            return this._httpClient
                .post(serviceUri.toString().concat("&" + listResponse.ListSchema['.driveAccessToken']), // token already encoded
            _microsoft_sp_http__WEBPACK_IMPORTED_MODULE_4__["SPHttpClient"].configurations.v1, {
            /* plain */
            })
                .then(function (response) {
                if (response.ok) {
                    return response.json().then(function () {
                        monitor.writeSuccess();
                        return _this._getImageFileDataCore(absolutefileUrl, /*processIfNoCaption*/ false);
                    });
                }
                else {
                    response
                        .json()
                        .then(function (data) {
                        monitor.writeUnexpectedFailure('AnalyzeFailed', new Error(JSON.stringify(data.error || data['odata.error'])), {
                            'x-correlationid': response.headers && response.headers.get('x-correlationid'),
                            statusCode: response.status
                        });
                    })
                        .catch(function (error) { return monitor.writeUnexpectedFailure('AnalyzeResponseJsonFailed', error); });
                    return Promise.resolve(undefined);
                }
            })
                .catch(function (error) {
                monitor.writeUnexpectedFailure('PostPromiseCatch', error);
                return Promise.resolve(undefined);
            });
        }
        catch (error) {
            monitor.writeUnexpectedFailure('MainCatch', error);
            return Promise.resolve(undefined);
        }
    };
    return RemoteWebFileGetterAsyncImplementation;
}());
/* harmony default export */ __webpack_exports__["default"] = (RemoteWebFileGetterAsyncImplementation);


/***/ })

}]);
//# sourceMappingURL=chunk.sp-remote-web-file-getter_none.js.map