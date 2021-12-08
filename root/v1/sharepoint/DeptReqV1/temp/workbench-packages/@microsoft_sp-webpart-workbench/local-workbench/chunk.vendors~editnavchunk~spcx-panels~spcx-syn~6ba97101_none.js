(window["webpackJsonp_1e2cdec9_1360_4295_b73c_98d6f51866d5_0_1_0"] = window["webpackJsonp_1e2cdec9_1360_4295_b73c_98d6f51866d5_0_1_0"] || []).push([["vendors~editnavchunk~spcx-panels~spcx-syn~6ba97101"],{

/***/ "+1yd":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-datasources@45.13.10_e509c819ab980023b76e5746ec0fc9e2/node_modules/@ms/odsp-datasources/lib/utilities/url/ItemUrlHelper.js ***!
  \*******************************************************************************************************************************************************************************************/
/*! exports provided: SiteRelation, GeoRelation, ItemUrlPartsBasic, removeDelimiter, appendDelimiter, startsWith, ItemUrlHelperBasic, ItemUrlParts, ItemUrlHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemUrlParts", function() { return ItemUrlParts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemUrlHelper", function() { return ItemUrlHelper; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ItemUrlHelperBasic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ItemUrlHelperBasic */ "5aJL");
/* harmony import */ var _ms_odsp_utilities_lib_navigation_AddressParser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ms/odsp-utilities/lib/navigation/AddressParser */ "+7kh");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SiteRelation", function() { return _ItemUrlHelperBasic__WEBPACK_IMPORTED_MODULE_1__["SiteRelation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GeoRelation", function() { return _ItemUrlHelperBasic__WEBPACK_IMPORTED_MODULE_1__["GeoRelation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ItemUrlPartsBasic", function() { return _ItemUrlHelperBasic__WEBPACK_IMPORTED_MODULE_1__["ItemUrlPartsBasic"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeDelimiter", function() { return _ItemUrlHelperBasic__WEBPACK_IMPORTED_MODULE_1__["removeDelimiter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "appendDelimiter", function() { return _ItemUrlHelperBasic__WEBPACK_IMPORTED_MODULE_1__["appendDelimiter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "startsWith", function() { return _ItemUrlHelperBasic__WEBPACK_IMPORTED_MODULE_1__["startsWith"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ItemUrlHelperBasic", function() { return _ItemUrlHelperBasic__WEBPACK_IMPORTED_MODULE_1__["ItemUrlHelperBasic"]; });





var idParamKey = 'id';
var listUrlKey = 'listurl';
/**
 * Backing implementation of the result from a call to ItemUrlHelper.getUrlParts.
 * This class relies heavily on lazy-initialization of values in order to improve performance.
 *
 * @class ItemUrlParts
 * @implements {IItemUrlParts}
 */
var ItemUrlParts = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ItemUrlParts, _super);
    function ItemUrlParts() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ItemUrlParts;
}(_ItemUrlHelperBasic__WEBPACK_IMPORTED_MODULE_1__["ItemUrlPartsBasic"]));

/**
 * Component which consumes known information about SharePoint item URLs and constructs
 * normalized URLs for use in item keys and API calls.
 *
 * Different SharePoint API methods return URLs to items, lists, and sites with different formats.
 * This component can be used to extract the necessary information from these URLs and construct
 * invariant versions.
 *
 * The logic in this component codifies all the assumptions made about the format of SharePoint URLs
 * by the web layer.
 *
 * Note, URLs passed in as '/' are assumed to mean the server-relative root. These are internally treated
 * as '' but any URL which evaluates back to the server-relative root will be returned as '/'.
 *
 * @export
 * @class ItemUrlHelper
 *
 * @example
 *  import ItemUrlHelper, { resourceKey as itemUrlHelperKey } from '../dataSources/url/odb/ItemUrlHelper';
 *
 *  let itemUrlHelper = this.resources.consume(itemUrlHelperKey);
 *
 *  // Given only a webUrl and a path, extract a list URL and a server-relative URL.
 *  let {
 *      serverRelativeItemUrl,
 *      normalizedListUrl
 *  } = itemUrlHelper.getUrlParts({
 *      path: 'https://contoso.sharepoint.com/teams/finance/Shared_Documents/reports/Yearly.xlsx',
 *      webUrl: '/teams/finance'
 *  });
 *
 *  let itemKey = this._urlDataSource.getKey({
 *      [UrlQueryKeys.idParamKey]: serverRelativeItemUrl,
 *      [UrlQueryKeys.listUrlKey]: normalizedListUrl
 *  });
 */
var ItemUrlHelper = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ItemUrlHelper, _super);
    function ItemUrlHelper(params, dependencies) {
        var _this = this;
        var _a = dependencies.itemUrlPartsType, itemUrlPartsType = _a === void 0 ? ItemUrlParts : _a;
        _this = _super.call(this, {
            context: dependencies.pageContext,
            itemUrlPartsType: itemUrlPartsType
        }) || this;
        return _this;
    }
    /**
     * Extracts the available URL parts for an item given available information.
     * Any or all of the inputs may be provided, though the outputs may be undefined
     * if insufficient information is provided.
     *
     * @param {IGetUrlPartsOptions} [params={}]
     * @returns {IItemUrlParts}
     */
    ItemUrlHelper.prototype.getUrlParts = function (options) {
        return _super.prototype.getUrlParts.call(this, options);
    };
    ItemUrlHelper.prototype.getItemUrlParts = function (key) {
        var keyParts = Object(_ms_odsp_utilities_lib_navigation_AddressParser__WEBPACK_IMPORTED_MODULE_2__["deserializeQuery"])(key);
        return this.getUrlParts({
            path: keyParts[idParamKey],
            listUrl: keyParts[listUrlKey]
        });
    };
    return ItemUrlHelper;
}(_ItemUrlHelperBasic__WEBPACK_IMPORTED_MODULE_1__["ItemUrlHelperBasic"]));

//# sourceMappingURL=ItemUrlHelper.js.map

/***/ }),

/***/ "+7kh":
/*!**********************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-utilities@29.7.9_5d977624104b06c7bcaa2de974ff51f1/node_modules/@ms/odsp-utilities/lib/navigation/AddressParser.js ***!
  \**********************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ms/odsp-core-bundle */ "K9kD");
/* harmony import */ var _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
// Loading @ms/odsp-utilities/./lib/navigation/AddressParser.js


/***/ }),

/***/ "5aJL":
/*!************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-datasources@45.13.10_e509c819ab980023b76e5746ec0fc9e2/node_modules/@ms/odsp-datasources/lib/utilities/url/ItemUrlHelperBasic.js ***!
  \************************************************************************************************************************************************************************************************/
/*! exports provided: SiteRelation, GeoRelation, ItemUrlPartsBasic, removeDelimiter, appendDelimiter, startsWith, ItemUrlHelperBasic */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SiteRelation", function() { return SiteRelation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeoRelation", function() { return GeoRelation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemUrlPartsBasic", function() { return ItemUrlPartsBasic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeDelimiter", function() { return removeDelimiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appendDelimiter", function() { return appendDelimiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startsWith", function() { return startsWith; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemUrlHelperBasic", function() { return ItemUrlHelperBasic; });
/* harmony import */ var _ms_odsp_utilities_lib_uri_SimpleUri__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ms/odsp-utilities/lib/uri/SimpleUri */ "mbD+");
/* harmony import */ var _ms_odsp_utilities_lib_string_StringHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ms/odsp-utilities/lib/string/StringHelper */ "BY+f");
/* harmony import */ var _ms_odsp_utilities_lib_string_StringHelper__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ms_odsp_utilities_lib_string_StringHelper__WEBPACK_IMPORTED_MODULE_1__);


/**
 * Specifies how the default site relates to the site specified in the item URL.
 */
var SiteRelation;
(function (SiteRelation) {
    /** The default site and the item exist on the same site (SPWeb) */
    SiteRelation[SiteRelation["sameSite"] = 0] = "sameSite";
    /** The default site and the item exist on a different site (SPWeb) */
    SiteRelation[SiteRelation["crossSite"] = 1] = "crossSite";
    /** Unable to determine if the default site and the item are on different sites. */
    SiteRelation[SiteRelation["unknown"] = 2] = "unknown";
})(SiteRelation || (SiteRelation = {}));
/**
 * Specifies how the default authority related to the geo specified in the item URL.
 */
var GeoRelation;
(function (GeoRelation) {
    GeoRelation[GeoRelation["sameGeo"] = 0] = "sameGeo";
    GeoRelation[GeoRelation["crossGeo"] = 1] = "crossGeo";
    GeoRelation[GeoRelation["unknown"] = 2] = "unknown";
})(GeoRelation || (GeoRelation = {}));
/**
 * Backing implementation of the result from a call to ItemUrlHelper.getUrlParts.
 * This class relies heavily on lazy-initialization of values in order to improve performance.
 *
 * @class ItemUrlParts
 * @implements {IItemUrlParts}
 */
var ItemUrlPartsBasic = /** @class */ (function () {
    function ItemUrlPartsBasic(params) {
        var defaultFullWebUrl = params.defaultFullWebUrl, defaultListUrl = params.defaultListUrl, multiGeoInfo = params.multiGeoInfo, _a = params.options, _b = _a === void 0 ? {} : _a, _c = _b.path, path = _c === void 0 ? undefined : _c, _d = _b.listUrl, listUrl = _d === void 0 ? undefined : _d, _e = _b.webUrl, webUrl = _e === void 0 ? undefined : _e, _f = _b.mayInferListUrl, mayInferListUrl = _f === void 0 ? false : _f;
        this._rawPath = path || undefined;
        this._rawListUrl = listUrl || undefined;
        this._rawWebUrl = webUrl || undefined;
        this.defaultFullWebUrl = convertFromRootUrl(defaultFullWebUrl || undefined);
        this.defaultListUrl = convertFromRootUrl(defaultListUrl || undefined);
        this.multiGeoInfo = multiGeoInfo;
        this.mayInferListUrl = mayInferListUrl;
    }
    Object.defineProperty(ItemUrlPartsBasic.prototype, "serverRelativeItemUrl", {
        get: function () {
            return convertToRootUrl(this._getServerRelativeItemUrl());
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ItemUrlPartsBasic.prototype, "serverRelativeListUrl", {
        get: function () {
            return convertToRootUrl(this._getServerRelativeListUrl());
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ItemUrlPartsBasic.prototype, "fullListUrl", {
        get: function () {
            return this._getFullListUrl();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ItemUrlPartsBasic.prototype, "normalizedListUrl", {
        get: function () {
            return convertToRootUrl(this._getNormalizedListUrl());
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ItemUrlPartsBasic.prototype, "fullItemUrl", {
        get: function () {
            return this._getFullItemUrl();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ItemUrlPartsBasic.prototype, "normalizedItemUrl", {
        get: function () {
            return convertToRootUrl(this._getNormalizedItemUrl());
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ItemUrlPartsBasic.prototype, "listRelativeItemUrl", {
        get: function () {
            return this._getListRelativeItemUrl();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ItemUrlPartsBasic.prototype, "webRelativeItemUrl", {
        get: function () {
            return this._getWebRelativeItemUrl();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ItemUrlPartsBasic.prototype, "fullWebUrl", {
        get: function () {
            return this._getFullWebUrl();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ItemUrlPartsBasic.prototype, "normalizedWebUrl", {
        get: function () {
            return convertToRootUrl(this._getNormalizedWebUrl());
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ItemUrlPartsBasic.prototype, "serverRelativeWebUrl", {
        get: function () {
            return convertToRootUrl(this._getServerRelativeWebUrl());
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ItemUrlPartsBasic.prototype, "isCrossDomain", {
        get: function () {
            return this._getIsCrossDomain();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ItemUrlPartsBasic.prototype, "isCrossList", {
        get: function () {
            return this._getIsCrossList();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ItemUrlPartsBasic.prototype, "siteRelation", {
        get: function () {
            return this._getSiteRelation();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ItemUrlPartsBasic.prototype, "geoRelation", {
        get: function () {
            return this._getGeoRelation();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ItemUrlPartsBasic.prototype, "path", {
        get: function () {
            return this._getPath();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ItemUrlPartsBasic.prototype, "listUrl", {
        get: function () {
            return this._getListUrl();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ItemUrlPartsBasic.prototype, "webUrl", {
        get: function () {
            return this._getWebUrl();
        },
        enumerable: true,
        configurable: true
    });
    ItemUrlPartsBasic.prototype._getPath = function () {
        var rawPath = this._rawPath;
        var path;
        if (rawPath) {
            if (rawPath[0] === '/' || rawPath.indexOf('://') > -1) {
                path = convertFromRootUrl(rawPath);
            }
            else {
                var listUrl = this._getListUrl() || this.defaultListUrl;
                if (listUrl) {
                    path = listUrl + "/" + rawPath;
                }
            }
        }
        this._getPath = function () { return path; };
        return path;
    };
    ItemUrlPartsBasic.prototype._getListUrl = function () {
        var rawListUrl = this._rawListUrl;
        var listUrl;
        if (rawListUrl) {
            if (rawListUrl[0] === '/' || rawListUrl.indexOf('://') > -1) {
                listUrl = convertFromRootUrl(rawListUrl);
            }
            else {
                var webUrl = this._getWebUrl() || this.defaultFullWebUrl;
                if (webUrl) {
                    listUrl = webUrl + "/" + rawListUrl;
                }
            }
        }
        this._getListUrl = function () { return listUrl; };
        return listUrl;
    };
    ItemUrlPartsBasic.prototype._getWebUrl = function () {
        var rawWebUrl = this._rawWebUrl;
        var webUrl;
        if (rawWebUrl) {
            if (rawWebUrl[0] === '/' || rawWebUrl.indexOf('://') > -1) {
                webUrl = convertFromRootUrl(rawWebUrl);
            }
            else {
                webUrl = this.defaultFullWebUrl + "/" + rawWebUrl;
            }
        }
        this._getWebUrl = function () { return webUrl; };
        return webUrl;
    };
    ItemUrlPartsBasic.prototype._getCurrentAuthority = function () {
        var currentAuthority = new _ms_odsp_utilities_lib_uri_SimpleUri__WEBPACK_IMPORTED_MODULE_0__["default"](this.defaultFullWebUrl).authority;
        this._getCurrentAuthority = function () { return currentAuthority; };
        return currentAuthority;
    };
    ItemUrlPartsBasic.prototype._getNormalizedWebUrl = function () {
        var normalizedWebUrl;
        var fullWebUrl = this._getFullWebUrl();
        var defaultWebUrl = this.defaultFullWebUrl;
        if (fullWebUrl !== void 0 && !Object(_ms_odsp_utilities_lib_string_StringHelper__WEBPACK_IMPORTED_MODULE_1__["equalsCaseInsensitive"])(fullWebUrl, defaultWebUrl)) {
            var fullWebUri = new _ms_odsp_utilities_lib_uri_SimpleUri__WEBPACK_IMPORTED_MODULE_0__["default"](fullWebUrl);
            if (Object(_ms_odsp_utilities_lib_string_StringHelper__WEBPACK_IMPORTED_MODULE_1__["equalsCaseInsensitive"])(fullWebUri.authority, this._getCurrentAuthority())) {
                normalizedWebUrl = fullWebUri.path;
            }
            else {
                normalizedWebUrl = fullWebUrl;
            }
        }
        this._getNormalizedItemUrl = function () { return normalizedWebUrl; };
        return normalizedWebUrl;
    };
    ItemUrlPartsBasic.prototype._getNormalizedItemUrl = function () {
        var normalizedItemUrl;
        var fullItemUrl = this._getFullItemUrl();
        if (fullItemUrl !== void 0) {
            var fullItemUri = new _ms_odsp_utilities_lib_uri_SimpleUri__WEBPACK_IMPORTED_MODULE_0__["default"](fullItemUrl);
            if (Object(_ms_odsp_utilities_lib_string_StringHelper__WEBPACK_IMPORTED_MODULE_1__["equalsCaseInsensitive"])(fullItemUri.authority, this._getCurrentAuthority())) {
                normalizedItemUrl = fullItemUri.path;
            }
            else {
                normalizedItemUrl = fullItemUrl;
            }
        }
        this._getNormalizedItemUrl = function () { return normalizedItemUrl; };
        return normalizedItemUrl;
    };
    ItemUrlPartsBasic.prototype._getNormalizedListUrl = function () {
        var normalizedListUrl;
        var fullListUrl = this._getFullListUrl();
        var defaultListUrl = this._getDefaultListUrl();
        if (fullListUrl !== void 0 && !Object(_ms_odsp_utilities_lib_string_StringHelper__WEBPACK_IMPORTED_MODULE_1__["equalsCaseInsensitive"])(fullListUrl, defaultListUrl)) {
            if (Object(_ms_odsp_utilities_lib_string_StringHelper__WEBPACK_IMPORTED_MODULE_1__["equalsCaseInsensitive"])(new _ms_odsp_utilities_lib_uri_SimpleUri__WEBPACK_IMPORTED_MODULE_0__["default"](fullListUrl).authority, this._getCurrentAuthority())) {
                // Remove the domain if the list is on the current domain.
                normalizedListUrl = this._getServerRelativeListUrl();
            }
            else {
                // The list on not on the current server and is not the default.
                normalizedListUrl = fullListUrl;
            }
        }
        this._getNormalizedListUrl = function () { return normalizedListUrl; };
        return normalizedListUrl;
    };
    ItemUrlPartsBasic.prototype._getServerUrl = function () {
        // One of the provided inputs should have a domain.
        // Extract the authority from that input to use as the base for all full URLs.
        var serverUrl = (this.path && new _ms_odsp_utilities_lib_uri_SimpleUri__WEBPACK_IMPORTED_MODULE_0__["default"](this.path).authority) ||
            (this.listUrl && new _ms_odsp_utilities_lib_uri_SimpleUri__WEBPACK_IMPORTED_MODULE_0__["default"](this.listUrl).authority) ||
            (this.webUrl && new _ms_odsp_utilities_lib_uri_SimpleUri__WEBPACK_IMPORTED_MODULE_0__["default"](this.webUrl).authority) ||
            (this.defaultListUrl && new _ms_odsp_utilities_lib_uri_SimpleUri__WEBPACK_IMPORTED_MODULE_0__["default"](this.defaultListUrl).authority) ||
            new _ms_odsp_utilities_lib_uri_SimpleUri__WEBPACK_IMPORTED_MODULE_0__["default"](this.defaultFullWebUrl).authority;
        this._getServerUrl = function () { return serverUrl; };
        return serverUrl;
    };
    ItemUrlPartsBasic.prototype._getServerRelativeListUrl = function () {
        var serverRelativeListUrl;
        if (this.listUrl !== void 0) {
            serverRelativeListUrl = new _ms_odsp_utilities_lib_uri_SimpleUri__WEBPACK_IMPORTED_MODULE_0__["default"](this.listUrl).path;
        }
        else {
            // Since no list URL was provided, we will check if we can use the default list URL
            var defaultListUrl = this._getDefaultListUrl();
            var mayInferListUrl = this.mayInferListUrl;
            if (defaultListUrl !== void 0 || mayInferListUrl) {
                var serverRelativePath = this._getServerRelativePath();
                var serverRelativeDefaultListUrl = new _ms_odsp_utilities_lib_uri_SimpleUri__WEBPACK_IMPORTED_MODULE_0__["default"](defaultListUrl).path;
                if ((serverRelativePath === void 0 &&
                    (this.webUrl === void 0 ||
                        (serverRelativeDefaultListUrl &&
                            startsWith(appendDelimiter(serverRelativeDefaultListUrl), appendDelimiter(this._getServerRelativeWebUrl()))))) ||
                    (serverRelativeDefaultListUrl &&
                        startsWith(appendDelimiter(serverRelativePath), appendDelimiter(serverRelativeDefaultListUrl)))) {
                    // If the default list URL contains the specified path (or there is no path), then the default list is the correct list.
                    serverRelativeListUrl = serverRelativeDefaultListUrl;
                }
                else if (serverRelativePath !== void 0 && (this.defaultListUrl === '' || mayInferListUrl)) {
                    // If defaultListUrl was actually the empty string, or inference is permitted,
                    // attempt to reconstruct the list URL as the next segment after the web URL within the item's path.
                    var serverRelativeWebUrl = this._getServerRelativeWebUrl();
                    if (startsWith(appendDelimiter(serverRelativePath), appendDelimiter(serverRelativeWebUrl))) {
                        // Assume that the list name is the next segment of the path after the webUrl.
                        // NOTE: This is a bug since a list can exist in folders on the web!
                        var listName = new _ms_odsp_utilities_lib_uri_SimpleUri__WEBPACK_IMPORTED_MODULE_0__["default"](serverRelativePath).segments[new _ms_odsp_utilities_lib_uri_SimpleUri__WEBPACK_IMPORTED_MODULE_0__["default"](serverRelativeWebUrl).segments.length];
                        serverRelativeListUrl = "" + appendDelimiter(serverRelativeWebUrl) + listName;
                    }
                }
            }
        }
        this._getServerRelativeListUrl = function () { return serverRelativeListUrl; };
        return serverRelativeListUrl;
    };
    ItemUrlPartsBasic.prototype._getFullListUrl = function () {
        var fullListUrl;
        var serverUrl = this._getServerUrl();
        var serverRelativeListUrl = this._getServerRelativeListUrl();
        if (serverRelativeListUrl !== void 0) {
            fullListUrl = "" + serverUrl + serverRelativeListUrl;
        }
        return fullListUrl;
    };
    ItemUrlPartsBasic.prototype._getFullItemUrl = function () {
        var fullItemUrl;
        var serverUrl = this._getServerUrl();
        var serverRelativeItemUrl = this._getServerRelativeItemUrl();
        if (serverRelativeItemUrl !== void 0) {
            fullItemUrl = "" + serverUrl + serverRelativeItemUrl;
        }
        this._getFullItemUrl = function () { return fullItemUrl; };
        return fullItemUrl;
    };
    ItemUrlPartsBasic.prototype._getServerRelativeWebUrl = function () {
        var serverRelativeWebUrl;
        var serverRelativeListUrl;
        if (this.webUrl !== void 0) {
            serverRelativeWebUrl = new _ms_odsp_utilities_lib_uri_SimpleUri__WEBPACK_IMPORTED_MODULE_0__["default"](this.webUrl).path;
        }
        else if ((this.defaultListUrl || this.listUrl) &&
            !this.mayInferListUrl &&
            (serverRelativeListUrl = this._getServerRelativeListUrl()) !== void 0) {
            // If there is list information, and the listUrl may not be inferred from this web URL (which would be recursive),
            // attempt to infer the web from the list.
            var serverRelativeListUri = new _ms_odsp_utilities_lib_uri_SimpleUri__WEBPACK_IMPORTED_MODULE_0__["default"](serverRelativeListUrl);
            serverRelativeWebUrl = "" + serverRelativeListUri.segments.slice(0, -1).join('/');
        }
        else if (this.defaultFullWebUrl) {
            serverRelativeWebUrl = new _ms_odsp_utilities_lib_uri_SimpleUri__WEBPACK_IMPORTED_MODULE_0__["default"](this.defaultFullWebUrl).path;
        }
        this._getServerRelativeWebUrl = function () { return serverRelativeWebUrl; };
        return serverRelativeWebUrl;
    };
    ItemUrlPartsBasic.prototype._getServerRelativePath = function () {
        var serverRelativePath;
        if (this.path !== void 0) {
            // Path is the only pointer directly to the item.
            serverRelativePath = new _ms_odsp_utilities_lib_uri_SimpleUri__WEBPACK_IMPORTED_MODULE_0__["default"](this.path).path;
        }
        this._getServerRelativePath = function () { return serverRelativePath; };
        return serverRelativePath;
    };
    ItemUrlPartsBasic.prototype._getServerRelativeItemUrl = function () {
        var serverRelativeItemUrl;
        if (this.path || this._rawPath) {
            // If a path has been computed, or if any path value was specified explicitly, use the computation for the path.
            serverRelativeItemUrl = this._getServerRelativePath();
        }
        else if (this.listUrl) {
            serverRelativeItemUrl = this._getServerRelativeListUrl();
        }
        else if (this.webUrl) {
            serverRelativeItemUrl = this._getServerRelativeWebUrl();
        }
        else if (this.defaultListUrl) {
            serverRelativeItemUrl = this._getServerRelativeListUrl();
        }
        else if (this.defaultFullWebUrl) {
            serverRelativeItemUrl = this._getServerRelativeWebUrl();
        }
        this._getServerRelativeItemUrl = function () { return serverRelativeItemUrl; };
        return serverRelativeItemUrl;
    };
    ItemUrlPartsBasic.prototype._getListRelativeItemUrl = function () {
        var listRelativeItemUrl;
        var serverRelativePath = this._getServerRelativePath();
        var serverRelativeListUrl = this._getServerRelativeListUrl();
        var serverRelativeListUrlStem;
        if (this.path !== void 0 &&
            serverRelativeListUrl !== void 0 &&
            startsWith(appendDelimiter(serverRelativePath), (serverRelativeListUrlStem = appendDelimiter(serverRelativeListUrl)))) {
            listRelativeItemUrl =
                serverRelativePath && serverRelativePath.substring(serverRelativeListUrlStem.length);
        }
        this._getListRelativeItemUrl = function () { return listRelativeItemUrl; };
        return listRelativeItemUrl;
    };
    ItemUrlPartsBasic.prototype._getWebRelativeItemUrl = function () {
        var webRelativeItemUrl;
        var serverRelativePath = this._getServerRelativePath();
        var serverRelativeWebUrl = this._getServerRelativeWebUrl();
        var serverRelativeWebUrlStem;
        if (this.path !== void 0 &&
            serverRelativeWebUrl !== void 0 &&
            startsWith(appendDelimiter(serverRelativePath), (serverRelativeWebUrlStem = appendDelimiter(serverRelativeWebUrl)))) {
            webRelativeItemUrl =
                serverRelativePath && serverRelativePath.substring(serverRelativeWebUrlStem.length);
        }
        this._getWebRelativeItemUrl = function () { return webRelativeItemUrl; };
        return webRelativeItemUrl;
    };
    ItemUrlPartsBasic.prototype._getDefaultListUrl = function () {
        var defaultListUrl;
        if (this.defaultListUrl !== void 0) {
            if (new _ms_odsp_utilities_lib_uri_SimpleUri__WEBPACK_IMPORTED_MODULE_0__["default"](this.defaultListUrl).authority) {
                // If the default list supplies its own domain, use it instead of the current server domain.
                defaultListUrl = this.defaultListUrl;
            }
            else {
                // Assume the list is on the current domain.
                defaultListUrl = "" + this._getCurrentAuthority() + this.defaultListUrl;
            }
        }
        this._getDefaultListUrl = function () { return defaultListUrl; };
        return defaultListUrl;
    };
    ItemUrlPartsBasic.prototype._getIsCrossDomain = function () {
        var currentAuthority = this._getCurrentAuthority();
        var isCrossDomain = !Object(_ms_odsp_utilities_lib_string_StringHelper__WEBPACK_IMPORTED_MODULE_1__["equalsCaseInsensitive"])(new _ms_odsp_utilities_lib_uri_SimpleUri__WEBPACK_IMPORTED_MODULE_0__["default"](this._getServerUrl()).authority, currentAuthority);
        this._getIsCrossDomain = function () { return isCrossDomain; };
        return isCrossDomain;
    };
    ItemUrlPartsBasic.prototype._getIsCrossList = function () {
        var fullListUrl = this._getFullListUrl();
        var defaultFullListUrl = this._getDefaultListUrl();
        var isCrossList = !Object(_ms_odsp_utilities_lib_string_StringHelper__WEBPACK_IMPORTED_MODULE_1__["equalsCaseInsensitive"])(fullListUrl, defaultFullListUrl);
        this._getIsCrossList = function () { return isCrossList; };
        return isCrossList;
    };
    ItemUrlPartsBasic.prototype._getSiteRelation = function () {
        var siteRelation = SiteRelation.unknown;
        if (this._getIsCrossDomain()) {
            // All cross-domain URLs are to be treated as remote sites.
            siteRelation = SiteRelation.crossSite;
        }
        else if (this.webUrl !== void 0) {
            // If webUrl is explicitly provided, then it is either the current site or it is remote.
            // No ambiguity.
            if (Object(_ms_odsp_utilities_lib_string_StringHelper__WEBPACK_IMPORTED_MODULE_1__["equalsCaseInsensitive"])(removeDelimiter(this.defaultFullWebUrl), removeDelimiter(this._getFullWebUrl()))) {
                siteRelation = SiteRelation.sameSite;
            }
            else {
                siteRelation = SiteRelation.crossSite;
            }
        }
        else {
            // If webUrl is not explicitly provided, then look at the provided child URL, either listUrl or path.
            var serverRelativeCurrentWebUrl = new _ms_odsp_utilities_lib_uri_SimpleUri__WEBPACK_IMPORTED_MODULE_0__["default"](this.defaultFullWebUrl).path;
            // Do this check with listUrl, falling back to path.
            var serverRelativeUrl = this._getServerRelativeListUrl() || this._getServerRelativePath();
            if (serverRelativeUrl !== void 0) {
                if (!startsWith(appendDelimiter(serverRelativeUrl), appendDelimiter(serverRelativeCurrentWebUrl))) {
                    // If url doesn't contain default web URL, then it definitely is cross site
                    siteRelation = SiteRelation.crossSite;
                }
                else {
                    var itemUri = new _ms_odsp_utilities_lib_uri_SimpleUri__WEBPACK_IMPORTED_MODULE_0__["default"](removeDelimiter(serverRelativeUrl));
                    var webUri = new _ms_odsp_utilities_lib_uri_SimpleUri__WEBPACK_IMPORTED_MODULE_0__["default"](removeDelimiter(serverRelativeCurrentWebUrl));
                    if (itemUri.segments.length - 1 === webUri.segments.length ||
                        (itemUri.segments.length - 2 === webUri.segments.length &&
                            itemUri.segments[itemUri.segments.length - 2] === 'Lists')) {
                        // We know that the site contains the default web Url, but we need to check if server-relative URL contains any potential web URL
                        // Example: If default web URL is http://server/engineering and list URL is http://server/engineering/workItems, then
                        // it's safe to assume that they are on the same web.
                        // Lists is a special folder that contains lists--- one can't create a subweb named Lists. So it's safe to assume they're on the same web.
                        siteRelation = SiteRelation.sameSite;
                    }
                    else {
                        // Site is on the same domain and contains default web url, but the item URL is not one-level
                        // under the default web URL so we can't say whether it's on the same site or not.
                        // Example: If default web URL is http://server/marketing/ and list URL is
                        // http://server/marketing/sales/Forecast, we don't know if "sales" is a subsite
                        // of "marketing" or just a folder.
                        siteRelation = SiteRelation.unknown;
                    }
                }
            }
        }
        this._getSiteRelation = function () { return siteRelation; };
        return siteRelation;
    };
    ItemUrlPartsBasic.prototype._getFullWebUrl = function () {
        var fullWebUrl;
        var serverUrl = this._getServerUrl();
        var serverRelativeWebUrl = this._getServerRelativeWebUrl();
        if (serverRelativeWebUrl !== void 0) {
            fullWebUrl = "" + serverUrl + serverRelativeWebUrl;
        }
        this._getFullWebUrl = function () { return fullWebUrl; };
        return fullWebUrl;
    };
    ItemUrlPartsBasic.prototype._getGeoRelation = function () {
        if (!this._getIsCrossDomain()) {
            return GeoRelation.sameGeo;
        }
        var authority = new _ms_odsp_utilities_lib_uri_SimpleUri__WEBPACK_IMPORTED_MODULE_0__["default"](this._getServerUrl()).authority;
        if (!authority) {
            return GeoRelation.unknown;
        }
        var currentGeo = this._getCurrentGeo();
        if (!currentGeo) {
            return GeoRelation.unknown;
        }
        var geo = this._getGeoByAuthority()[authority.toUpperCase()];
        if (!geo) {
            return GeoRelation.unknown;
        }
        if (Object(_ms_odsp_utilities_lib_string_StringHelper__WEBPACK_IMPORTED_MODULE_1__["equalsCaseInsensitive"])(geo, currentGeo)) {
            return GeoRelation.sameGeo;
        }
        return GeoRelation.crossGeo;
    };
    ItemUrlPartsBasic.prototype._getGeoByAuthority = function () {
        var geoByAuthority = {};
        var defaultFoundByAuthority = {};
        function addUrl(url, geo, isDefault) {
            var authority = new _ms_odsp_utilities_lib_uri_SimpleUri__WEBPACK_IMPORTED_MODULE_0__["default"](url).authority.toUpperCase();
            if (isDefault || !defaultFoundByAuthority[authority]) {
                geoByAuthority[authority] = geo;
            }
            if (isDefault) {
                defaultFoundByAuthority[authority] = true;
            }
        }
        if (this.multiGeoInfo) {
            for (var _i = 0, _a = this.multiGeoInfo; _i < _a.length; _i++) {
                var multiGeoInfo = _a[_i];
                var geo = multiGeoInfo.InstanceId;
                var isDefaultDataLocation = multiGeoInfo.IsDefaultDataLocation;
                addUrl(multiGeoInfo.MySiteHostUrl, geo, isDefaultDataLocation);
                addUrl(multiGeoInfo.PortalUrl, geo, isDefaultDataLocation);
                addUrl(multiGeoInfo.RootSiteUrl, geo, isDefaultDataLocation);
                addUrl(multiGeoInfo.TenantAdminUrl, geo, isDefaultDataLocation);
                if (multiGeoInfo.AdditionalUrls) {
                    for (var _b = 0, _c = multiGeoInfo.AdditionalUrls; _b < _c.length; _b++) {
                        var additionalUrl = _c[_b];
                        addUrl(additionalUrl, geo, isDefaultDataLocation);
                    }
                }
            }
        }
        this._getGeoByAuthority = function () { return geoByAuthority; };
        return geoByAuthority;
    };
    ItemUrlPartsBasic.prototype._getCurrentGeo = function () {
        var authority = this._getCurrentAuthority();
        if (!authority) {
            return;
        }
        var currentGeo = this._getGeoByAuthority()[authority.toUpperCase()];
        this._getCurrentGeo = function () { return currentGeo; };
        return currentGeo;
    };
    return ItemUrlPartsBasic;
}());

function convertToRootUrl(url) {
    if (url === '') {
        return '/';
    }
    return url;
}
function convertFromRootUrl(url) {
    if (url === '/') {
        return '/';
    }
    return url;
}
function removeDelimiter(segment) {
    if (segment === void 0) { segment = ''; }
    if (segment[segment.length - 1] === '/') {
        return segment.substring(0, segment.length - 1);
    }
    else {
        return segment;
    }
}
function appendDelimiter(segment) {
    if (segment === void 0) { segment = ''; }
    if (segment[segment.length - 1] === '/') {
        return segment;
    }
    else {
        return segment + "/";
    }
}
function startsWith(body, query) {
    var trimmedNormalizedBody = body.toUpperCase();
    var trimmedNormalizedQuery = query && query.toUpperCase();
    return (trimmedNormalizedBody.substring(0, (trimmedNormalizedQuery && trimmedNormalizedQuery.length) || 0) ===
        trimmedNormalizedQuery);
}
/**
 * Component which consumes known information about SharePoint item URLs and constructs
 * normalized URLs for use in item keys and API calls.
 *
 * Different SharePoint API methods return URLs to items, lists, and sites with different formats.
 * This component can be used to extract the necessary information from these URLs and construct
 * invariant versions.
 *
 * The logic in this component codifies all the assumptions made about the format of SharePoint URLs
 * by the web layer.
 *
 * Note, URLs passed in as '/' are assumed to mean the server-relative root. These are internally treated
 * as '' but any URL which evaluates back to the server-relative root will be returned as '/'.
 *
 * @export
 * @class ItemUrlHelperBasic
 */
var ItemUrlHelperBasic = /** @class */ (function () {
    function ItemUrlHelperBasic(params) {
        var context = params.context, _a = params.itemUrlPartsType, itemUrlPartsType = _a === void 0 ? ItemUrlPartsBasic : _a;
        this.itemUrlPartsType = itemUrlPartsType;
        this.itemUrlContext = context;
    }
    /**
     * Extracts the available URL parts for an item given available information.
     * Any or all of the inputs may be provided, though the outputs may be undefined
     * if insufficient information is provided.
     *
     * @param {IGetUrlPartsOptions} [params={}]
     * @returns {IItemUrlParts}
     */
    ItemUrlHelperBasic.prototype.getUrlParts = function (options) {
        var _a = this.itemUrlContext, webAbsoluteUrl = _a.webAbsoluteUrl, listUrl = _a.listUrl, multiGeoInfo = _a.multiGeoInfo;
        return new this.itemUrlPartsType({
            defaultFullWebUrl: webAbsoluteUrl,
            defaultListUrl: listUrl,
            multiGeoInfo: multiGeoInfo,
            options: options
        });
    };
    return ItemUrlHelperBasic;
}());

//# sourceMappingURL=ItemUrlHelperBasic.js.map

/***/ }),

/***/ "5qGQ":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-datasources@45.13.10_e509c819ab980023b76e5746ec0fc9e2/node_modules/@ms/odsp-datasources/lib/utilities/url/ApiUrlHelperBasic.js ***!
  \***********************************************************************************************************************************************************************************************/
/*! exports provided: ApiUrlBasic, ApiUrlHelperBasic */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiUrlBasic", function() { return ApiUrlBasic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiUrlHelperBasic", function() { return ApiUrlHelperBasic; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ms_odsp_utilities_lib_encoding_UriEncoding__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ms/odsp-utilities/lib/encoding/UriEncoding */ "+35T");


/**
 * Implementation of an extendable SharePoint API URL.
 * Method on this class mutate the underlying object and return the same object back to the caller.
 */
var ApiUrlBasic = /** @class */ (function () {
    function ApiUrlBasic(params) {
        var webAbsoluteUrl = params.webAbsoluteUrl, _a = params.encodeWebAbsoluteUrl, encodeWebAbsoluteUrl = _a === void 0 ? true : _a;
        this._webAbsoluteUrl = webAbsoluteUrl;
        this._encodeWebAbsoluteUrl = encodeWebAbsoluteUrl;
        this._segments = [];
        this._parameters = [];
        this._rawParameters = [];
        this._lastParameterId = 0;
    }
    ApiUrlBasic.prototype.toString = function () {
        var querySegments = [];
        if (this._parameters.length) {
            querySegments.push(this._parameters
                .map(function (_a) {
                var name = _a.name, serializedValue = _a.serializedValue;
                return name + "=" + serializedValue;
            })
                .join('&'));
        }
        querySegments.push.apply(querySegments, this._rawParameters);
        var query;
        if (querySegments.length) {
            query = "?" + querySegments.join('&');
        }
        else {
            query = '';
        }
        var _a = this._webUrl, webUrl = _a === void 0 ? this._webAbsoluteUrl : _a;
        var parts = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])([this._encodeWebAbsoluteUrl ? encodeURI(webUrl) : webUrl, '_api'], this._segments);
        return "" + parts.join('/') + query;
    };
    ApiUrlBasic.prototype.segment = function (name) {
        return this._extend({
            segments: [name]
        });
    };
    ApiUrlBasic.prototype.segments = function () {
        var segments = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            segments[_i] = arguments[_i];
        }
        return this._extend({
            segments: segments
        });
    };
    ApiUrlBasic.prototype.methodWithAliases = function (name, parameters) {
        var apiUrl = this;
        var methodArguments = [];
        for (var _i = 0, _a = Object.keys(parameters); _i < _a.length; _i++) {
            var parameter = _a[_i];
            var value = parameters[parameter];
            var autoParameter = apiUrl._autoParameter(value);
            apiUrl = autoParameter.apiUrl;
            methodArguments.push(parameter + "=" + autoParameter.name);
        }
        return apiUrl.segment(name + "(" + methodArguments.join(',') + ")");
    };
    ApiUrlBasic.prototype.method = function (name) {
        var parameters = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            parameters[_i - 1] = arguments[_i];
        }
        var apiUrl = this;
        var methodArguments = [];
        for (var _a = 0, parameters_1 = parameters; _a < parameters_1.length; _a++) {
            var value = parameters_1[_a];
            var autoParameter = apiUrl._autoParameter(value);
            apiUrl = autoParameter.apiUrl;
            methodArguments.push(autoParameter.name);
        }
        return apiUrl.segment(name + "(" + methodArguments.join(',') + ")");
    };
    ApiUrlBasic.prototype.parameter = function (name, value) {
        return this._parameter(name, value);
    };
    ApiUrlBasic.prototype.parameters = function (parameters) {
        var apiUrl = this;
        for (var _i = 0, _a = Object.keys(parameters); _i < _a.length; _i++) {
            var name_1 = _a[_i];
            var value = parameters[name_1];
            apiUrl = apiUrl.parameter(name_1, value);
        }
        return apiUrl;
    };
    ApiUrlBasic.prototype.oDataParameter = function (name, value) {
        return this.parameter(name, {
            raw: value
        });
    };
    ApiUrlBasic.prototype.rawParameter = function (queryString) {
        return this._extend({
            rawParameters: [queryString]
        });
    };
    ApiUrlBasic.prototype._autoParameter = function (value) {
        var lastParameterId = this._lastParameterId + 1;
        var name = "@a" + lastParameterId;
        var apiUrl = this._extend({
            lastParameterId: lastParameterId
        })._parameter(name, value);
        return {
            name: name,
            apiUrl: apiUrl
        };
    };
    ApiUrlBasic.prototype._parameter = function (name, value) {
        var serializedValue;
        if (isJson(value)) {
            serializedValue = _ms_odsp_utilities_lib_encoding_UriEncoding__WEBPACK_IMPORTED_MODULE_1__["default"].encodeRestUriStringToken(JSON.stringify(value.json));
        }
        else if (isGuid(value)) {
            serializedValue = "guid'" + value.guid + "'";
        }
        else if (isRaw(value)) {
            serializedValue = value.raw;
        }
        else if (typeof value === 'number') {
            serializedValue = "" + value;
        }
        else if (typeof value === 'boolean') {
            serializedValue = "" + value;
        }
        else {
            serializedValue = "'" + _ms_odsp_utilities_lib_encoding_UriEncoding__WEBPACK_IMPORTED_MODULE_1__["default"].encodeRestUriStringToken(value) + "'";
        }
        return this._extend({
            parameters: [
                {
                    name: name,
                    serializedValue: serializedValue
                }
            ]
        });
    };
    ApiUrlBasic.prototype.clone = function () {
        return new ApiUrlBasic({
            webAbsoluteUrl: this._webAbsoluteUrl,
            encodeWebAbsoluteUrl: this._encodeWebAbsoluteUrl
        });
    };
    ApiUrlBasic.prototype._extend = function (state) {
        var _a, _b, _c, _d, _e, _f;
        if (state === void 0) { state = {}; }
        var apiUrl = this.clone();
        apiUrl._webUrl = this._webUrl;
        apiUrl._lastParameterId = this._lastParameterId;
        (_a = apiUrl._parameters).push.apply(_a, this._parameters);
        (_b = apiUrl._segments).push.apply(_b, this._segments);
        (_c = apiUrl._rawParameters).push.apply(_c, this._rawParameters);
        if ('webUrl' in state) {
            apiUrl._webUrl = state.webUrl;
        }
        if ('lastParameterId' in state) {
            apiUrl._lastParameterId = state.lastParameterId;
        }
        if ('parameters' in state) {
            (_d = apiUrl._parameters).push.apply(_d, state.parameters);
        }
        if ('rawParameters' in state) {
            (_e = apiUrl._rawParameters).push.apply(_e, state.rawParameters);
        }
        if ('segments' in state) {
            (_f = apiUrl._segments).push.apply(_f, state.segments);
        }
        return apiUrl;
    };
    return ApiUrlBasic;
}());

/**
 * Component which assists in constructing SharePoint API URLs.
 *
 * @export
 * @class ApiUrlHelperBasic
 *
 * @example
 *  let apiUrlHelper = new ApiUrlHelperBasic({ webAbsoluteUrl: webAbsoluteUrl });
 *  let apiUrl = apiUrlHelper.build()
 *      .segment('web')
 *      .method('GetList', serverRelativeListUrl)
 *      .segment('RenderListFilterData')
 *      .parameter('FieldInternalName', fieldInternalName!);
 *
 *  this._dataRequestor.getData({
 *      url: apiUrl.toString(),
 *      method: 'post',
 *      qosName: 'GetFilterData'
 *  }).then(() => {
 *      // Something.
 *  });
 */
var ApiUrlHelperBasic = /** @class */ (function () {
    function ApiUrlHelperBasic(params) {
        this._apiUrlType = /** @class */ (function (_super) {
            Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(_apiUrlType, _super);
            function _apiUrlType() {
                return _super.call(this, {
                    webAbsoluteUrl: params.webAbsoluteUrl,
                    encodeWebAbsoluteUrl: params.encodeWebAbsoluteUrl
                }) || this;
            }
            return _apiUrlType;
        }(ApiUrlBasic));
    }
    /**
     * Starts building a new SharePoint API URL.
     *
     * @returns {IApiUrlBasic}
     */
    ApiUrlHelperBasic.prototype.build = function () {
        return new this._apiUrlType();
    };
    /**
     * Generates a GetContextWebInformation API call URL based on any input URL against
     * a SharePoint server.
     *
     * @param {string} url
     * @returns {string}
     */
    ApiUrlHelperBasic.prototype.contextInfoUrl = function (fullItemUrl) {
        var layoutsIndex = fullItemUrl.indexOf('/_layouts/');
        var contextInfoRootUrl;
        if (layoutsIndex > -1) {
            contextInfoRootUrl = fullItemUrl.substring(0, layoutsIndex);
        }
        else {
            var lastSegmentIndex = fullItemUrl.lastIndexOf('/');
            var lastExtensionIndex = fullItemUrl.lastIndexOf('.');
            if (lastExtensionIndex > lastSegmentIndex) {
                contextInfoRootUrl = fullItemUrl.substring(0, lastExtensionIndex) + "_" + fullItemUrl.substring(lastExtensionIndex + 1);
            }
            else {
                contextInfoRootUrl = fullItemUrl;
            }
        }
        return contextInfoRootUrl + "/_api/contextinfo";
    };
    return ApiUrlHelperBasic;
}());

function isGuid(value) {
    return !!value && typeof value === 'object' && 'guid' in value;
}
function isRaw(value) {
    return !!value && typeof value === 'object' && 'raw' in value;
}
function isJson(value) {
    return !!value && typeof value === 'object' && 'json' in value;
}
//# sourceMappingURL=ApiUrlHelperBasic.js.map

/***/ }),

/***/ "mbD+":
/*!***********************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-utilities@29.7.9_5d977624104b06c7bcaa2de974ff51f1/node_modules/@ms/odsp-utilities/lib/uri/SimpleUri.js ***!
  \***********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ms/odsp-utilities-bundle */ "y88i");
/* harmony import */ var _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_0__["SimpleUri"]; });

// Loading @ms/odsp-utilities/./lib/uri/SimpleUri.js



/***/ }),

/***/ "sVQZ":
/*!******************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-datasources@45.13.10_e509c819ab980023b76e5746ec0fc9e2/node_modules/@ms/odsp-datasources/lib/utilities/url/ApiUrlHelper.js ***!
  \******************************************************************************************************************************************************************************************/
/*! exports provided: ApiUrlBasic, ApiUrlHelperBasic, ApiUrl, ApiUrlHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiUrl", function() { return ApiUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiUrlHelper", function() { return ApiUrlHelper; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ItemUrlHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ItemUrlHelper */ "+1yd");
/* harmony import */ var _ApiUrlHelperBasic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ApiUrlHelperBasic */ "5qGQ");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ApiUrlBasic", function() { return _ApiUrlHelperBasic__WEBPACK_IMPORTED_MODULE_2__["ApiUrlBasic"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ApiUrlHelperBasic", function() { return _ApiUrlHelperBasic__WEBPACK_IMPORTED_MODULE_2__["ApiUrlHelperBasic"]; });





/**
 * Implementation of an extendable SharePoint API URL. Method on this class mutate the underlying object and return the same object back to the caller.
 */
var ApiUrl = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ApiUrl, _super);
    function ApiUrl(params, dependencies) {
        var _this = _super.call(this, {
            webAbsoluteUrl: dependencies.pageContext.webAbsoluteUrl,
            encodeWebAbsoluteUrl: dependencies.encodeWebAbsoluteUrl
        }) || this;
        _this._pageContext = dependencies.pageContext;
        _this._shouldEncodeWebAbsoluteUrl = dependencies.encodeWebAbsoluteUrl;
        _this._itemUrlHelper = dependencies.itemUrlHelper;
        return _this;
    }
    ApiUrl.prototype.webByUrl = function (options) {
        return this.webByItemUrl(this._itemUrlHelper.getUrlParts(options));
    };
    ApiUrl.prototype.webByItemUrl = function (urlParts) {
        var siteRelation = urlParts.siteRelation, isCrossDomain = urlParts.isCrossDomain, fullItemUrl = urlParts.fullItemUrl;
        var apiUrl = this;
        if (isCrossDomain || siteRelation === _ItemUrlHelper__WEBPACK_IMPORTED_MODULE_1__["SiteRelation"].crossSite) {
            apiUrl = apiUrl.method('SP.RemoteWeb', fullItemUrl);
        }
        return apiUrl.segment('web');
    };
    ApiUrl.prototype.listById = function (urlParts, listId) {
        return this.webByItemUrl(urlParts).segment('lists').method('GetById', listId);
    };
    ApiUrl.prototype.clone = function () {
        return new ApiUrl({
            webAbsoluteUrl: this._pageContext.webAbsoluteUrl
        }, {
            pageContext: this._pageContext,
            itemUrlHelper: this._itemUrlHelper,
            encodeWebAbsoluteUrl: this._shouldEncodeWebAbsoluteUrl
        });
    };
    return ApiUrl;
}(_ApiUrlHelperBasic__WEBPACK_IMPORTED_MODULE_2__["ApiUrlBasic"]));

/**
 * Component which assists in constructing SharePoint API URLs.
 *
 * @export
 * @class ApiUrlHelper
 *
 * @example
 *  import ApiUrlHelper, { resourceKey as apiUrlHelperKey } from './ApiUrlHelper';
 *  let apiUrlHelper = this.resources.consume(apiUrlHelperKey);
 *
 *  let apiUrl = apiUrlHelper.build()
 *      .webByItemKey(item.key)
 *      .segment('Folders')
 *      .segment('Add');
 *
 *  this._dataRequestor.getData({
 *      url: apiUrl.toString(),
 *      method: 'post',
 *      qosName: 'AddFolder'
 *  }).then(() => {
 *      // Something.
 *  });
 */
var ApiUrlHelper = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ApiUrlHelper, _super);
    function ApiUrlHelper(params, dependencies) {
        var _this = _super.call(this, {
            webAbsoluteUrl: dependencies && dependencies.pageContext ? dependencies.pageContext.webAbsoluteUrl : '',
            encodeWebAbsoluteUrl: dependencies.encodeWebAbsoluteUrl
        }) || this;
        var itemUrlHelper = dependencies.itemUrlHelper, pageContext = dependencies.pageContext, encodeWebAbsoluteUrl = dependencies.encodeWebAbsoluteUrl;
        var _a = dependencies.apiUrlType, apiUrlType = _a === void 0 ? /** @class */ (function (_super) {
            Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(apiUrlType, _super);
            function apiUrlType() {
                return _super.call(this, {}, {
                    itemUrlHelper: itemUrlHelper,
                    pageContext: pageContext,
                    encodeWebAbsoluteUrl: encodeWebAbsoluteUrl
                }) || this;
            }
            return apiUrlType;
        }(ApiUrl)) : _a;
        _this._apiUrlType = apiUrlType;
        return _this;
    }
    /**
     * Starts building a new SharePoint API URL.
     *
     * @returns {IApiUrl}
     */
    ApiUrlHelper.prototype.build = function () {
        return new this._apiUrlType();
    };
    return ApiUrlHelper;
}(_ApiUrlHelperBasic__WEBPACK_IMPORTED_MODULE_2__["ApiUrlHelperBasic"]));

//# sourceMappingURL=ApiUrlHelper.js.map

/***/ })

}]);
//# sourceMappingURL=chunk.vendors~editnavchunk~spcx-panels~spcx-syn~6ba97101_[locale].js.map