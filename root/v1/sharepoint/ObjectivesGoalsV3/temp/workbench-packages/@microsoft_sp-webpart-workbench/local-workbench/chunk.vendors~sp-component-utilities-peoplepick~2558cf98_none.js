(window["webpackJsonp_8494e7d7_6b99_47b2_a741_59873e42f16f_11_10_1"] = window["webpackJsonp_8494e7d7_6b99_47b2_a741_59873e42f16f_11_10_1"] || []).push([["vendors~sp-component-utilities-peoplepick~2558cf98"],{

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

/***/ "+35T":
/*!******************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-utilities@29.7.9_5d977624104b06c7bcaa2de974ff51f1/node_modules/@ms/odsp-utilities/lib/encoding/UriEncoding.js ***!
  \******************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ms/odsp-utilities-bundle */ "y88i");
/* harmony import */ var _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_0__["UriEncoding"]; });

// Loading @ms/odsp-utilities/./lib/encoding/UriEncoding.js



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

/***/ "0sdQ":
/*!************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-utilities@29.7.9_5d977624104b06c7bcaa2de974ff51f1/node_modules/@ms/odsp-utilities/lib/xhr/XHRPromise.js ***!
  \************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ms/odsp-utilities-bundle */ "y88i");
/* harmony import */ var _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_0__["XHRPromise"]; });

// Loading @ms/odsp-utilities/./lib/xhr/XHRPromise.js



/***/ }),

/***/ "18dJ":
/*!************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-utilities@29.7.9_5d977624104b06c7bcaa2de974ff51f1/node_modules/@ms/odsp-utilities/lib/models/store/BaseDataStore.js ***!
  \************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ms/odsp-core-bundle */ "K9kD");
/* harmony import */ var _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__["DataStore"]; });

// Loading @ms/odsp-utilities/./lib/models/store/BaseDataStore.js



/***/ }),

/***/ "2+UY":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-datasources@45.13.10_e509c819ab980023b76e5746ec0fc9e2/node_modules/@ms/odsp-datasources/lib/dataSources/roleAssignments/PrincipalType.js ***!
  \*********************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Specifies the type of a principal.
 */
var PrincipalType;
(function (PrincipalType) {
    /**
     * Enumeration whose value specifies no principal type. Value = 0.
     */
    PrincipalType[PrincipalType["none"] = 0] = "none";
    /**
     * Enumeration whose value specifies a user as the principal type. Value = 1.
     */
    PrincipalType[PrincipalType["user"] = 1] = "user";
    /**
     * Enumeration whose value specifies a distribution list as the principal type. Value = 2.
     */
    PrincipalType[PrincipalType["distributionList"] = 2] = "distributionList";
    /**
     * Enumeration whose value specifies a security group as the principal type. Value = 4.
     */
    PrincipalType[PrincipalType["securityGroup"] = 4] = "securityGroup";
    /**
     * Enumeration whose value specifies a group (2) as the principal type. Value = 8.
     */
    PrincipalType[PrincipalType["sharePointGroup"] = 8] = "sharePointGroup";
    /**
     * Enumeration whose value specifies all principal types. Value = 15.
     */
    PrincipalType[PrincipalType["all"] = 15] = "all";
})(PrincipalType || (PrincipalType = {}));
/* harmony default export */ __webpack_exports__["default"] = (PrincipalType);
//# sourceMappingURL=PrincipalType.js.map

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

/***/ "6e34":
/*!**********************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/utilities-error@1.0.0/node_modules/@ms/utilities-error/lib/ApiError.js ***!
  \**********************************************************************************************************************************/
/*! exports provided: ApiError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiError", function() { return ApiError; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _CustomError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CustomError */ "unYt");


/**
 * Custom error base class for the common scenario of generic errors that should be reported in
 * Quality of Service metrics.
 * @public
 */
var ApiError = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ApiError, _super);
    function ApiError(props) {
        var _this = _super.call(this, props) || this;
        _this.name = 'ApiError';
        var innerError = props.innerError;
        var innerErrorAsApiError = innerError ? innerError : undefined;
        var errorData = innerErrorAsApiError
            ? Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, (typeof innerErrorAsApiError.correlationId === 'string'
                ? { correlationId: innerErrorAsApiError.correlationId }
                : {})), (typeof innerErrorAsApiError.isExpected === 'boolean'
                ? { isExpected: innerErrorAsApiError.isExpected }
                : {})), (typeof innerErrorAsApiError.name === 'string' ? { code: innerErrorAsApiError.name } : {})), (typeof innerErrorAsApiError.code === 'string' ? { code: innerErrorAsApiError.code } : {})), (typeof innerErrorAsApiError.extraData === 'object'
                ? { extraData: innerErrorAsApiError.extraData }
                : {})) : {};
        var _a = props.correlationId, correlationId = _a === void 0 ? errorData.correlationId : _a, _b = props.isExpected, isExpected = _b === void 0 ? errorData.isExpected : _b, extraData = props.extraData;
        _this.correlationId = correlationId;
        _this.isExpected = !!isExpected;
        _this.code = props.code || errorData.code || '';
        _this.extraData = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, (errorData.extraData || {})), (extraData || {}));
        return _this;
    }
    return ApiError;
}(_CustomError__WEBPACK_IMPORTED_MODULE_1__["CustomError"]));

//# sourceMappingURL=ApiError.js.map

/***/ }),

/***/ "6r7H":
/*!*********************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-graph@8.4.9_19c80a772e784933045edf88c0aed6c1/node_modules/@ms/odsp-graph/lib/base/dataRequestor/DataRequestor.js ***!
  \*********************************************************************************************************************************************************************************/
/*! exports provided: DataRequestor, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataRequestor", function() { return DataRequestor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ms_odsp_utilities_lib_async_Promise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ms/odsp-utilities/lib/async/Promise */ "7Ihg");
/* harmony import */ var _ms_odsp_utilities_lib_xhr_XHRPromise__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ms/odsp-utilities/lib/xhr/XHRPromise */ "0sdQ");
/* harmony import */ var _ms_odsp_utilities_lib_logging_events_Api_event__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ms/odsp-utilities/lib/logging/events/Api.event */ "Joik");
/* harmony import */ var _ms_odsp_utilities_lib_uri_Uri__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ms/odsp-utilities/lib/uri/Uri */ "I5DX");
/* harmony import */ var _ms_odsp_utilities_lib_logging_RequestDurationLoggingHelper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ms/odsp-utilities/lib/logging/RequestDurationLoggingHelper */ "nXow");
/* harmony import */ var _models_error_Error__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../models/error/Error */ "swgI");
/* harmony import */ var _ms_odsp_utilities_lib_guid_Guid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ms/odsp-utilities/lib/guid/Guid */ "vo05");
/* harmony import */ var _ms_telemetry_manager_lib_ErrorHelper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ms/telemetry-manager/lib/ErrorHelper */ "qJrk");
/* harmony import */ var _ms_odsp_utilities_lib_uri_SimpleUri__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ms/odsp-utilities/lib/uri/SimpleUri */ "mbD+");
/* harmony import */ var _ms_odsp_utilities_lib_encoding_Base64Encoding__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ms/odsp-utilities/lib/encoding/Base64Encoding */ "892h");
/* harmony import */ var _ms_odsp_utilities_lib_features_Features__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ms/odsp-utilities/lib/features/Features */ "8G1T");
/* harmony import */ var _ms_odsp_utilities_lib_killswitch_Killswitch__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ms/odsp-utilities/lib/killswitch/Killswitch */ "QUgr");
// OneDrive:IgnoreCodeCoverage













var performance = window && window.performance;
var DEFAULT_EXPECTED_ERROR_CODES = {
    // ErrorCode
    activityLimitReached: true,
    malwareDetected: true,
    nameAlreadyExists: true,
    resourceModified: true,
    resyncRequired: true,
    quotaLimitReached: true,
    // InnerErrorCode
    accessRestricted: true,
    childItemCountExceeded: true,
    entityTagDoesNotMatch: true,
    fragmentOutOfOrder: true,
    fragmentOverlap: true,
    hipCheckRequired: true,
    insufficientVaultQuota: true,
    lockMismatch: true,
    lockNotFoundOrAlreadyExpired: true,
    lockOwnerMismatch: true,
    maxDocumentCountExceeded: true,
    maxFileSizeExceeded: true,
    maxFolderCountExceeded: true,
    maxItemCountExceeded: true,
    nameContainsInvalidCharacters: true,
    pathIsTooLong: true,
    pathTooDeep: true,
    pathIsTooDeep: true,
    propertyNotUpdateable: true,
    resyncApplyDifferences: true,
    resyncUploadDifferences: true,
    serviceReadOnly: true,
    throttledRequest: true,
    unlockRequired: true,
    versionNumberDoesNotMatch: true,
    virusSuspicious: true,
    // ClientErrorCode
    authFailure: false
};
var BEARER_AUTH_TYPE = 'Bearer';
var DataRequestor = /** @class */ (function () {
    function DataRequestor(params, dependencies) {
        var _a = params.alwaysSendContentType, alwaysSendContentType = _a === void 0 ? false : _a;
        var sessionManagementProvider = dependencies.sessionManagementProvider, urlDataSource = dependencies.urlDataSource, _b = dependencies.apiEvent, apiEvent = _b === void 0 ? _ms_odsp_utilities_lib_logging_events_Api_event__WEBPACK_IMPORTED_MODULE_3__["Api"] : _b, cookieOrigin = dependencies.cookieOrigin, isOffline = dependencies.isOffline;
        this._sessionManagementProvider = sessionManagementProvider;
        this._alwaysSendContentType = alwaysSendContentType;
        this._apiEvent = apiEvent;
        this._apiName =
            urlDataSource && typeof urlDataSource.getApiName === 'function' ? urlDataSource.getApiName() : 'Vroom';
        this._apiBaseUrl = urlDataSource
            ? typeof urlDataSource.getApiBaseUrl === 'function'
                ? urlDataSource.getApiBaseUrl()
                : urlDataSource.getVroomApiBaseUrl()
            : undefined;
        this._cookieOrigin = cookieOrigin;
        this._isOffline = isOffline;
        this._encodingFixEnabled =
            !_ms_odsp_utilities_lib_killswitch_Killswitch__WEBPACK_IMPORTED_MODULE_12__["Killswitch"].isActivated('179f8622-1596-43df-a186-a4b42e1d7917', '08/04/2020', 'Decode unicode characters in graph errors') && !_ms_odsp_utilities_lib_features_Features__WEBPACK_IMPORTED_MODULE_11__["default"].isFeatureEnabled({ ODC: 'GraphEncodingFixKillswitch' });
    }
    DataRequestor.prototype.send = function (options) {
        var _this = this;
        var _a = options.headers, headers = _a === void 0 ? {} : _a, path = options.path, _b = options.endpoint, endpoint = _b === void 0 ? this._apiBaseUrl : _b, driveUrl = options.driveUrl, apiName = options.apiName, _c = options.disableLogging, disableLogging = _c === void 0 ? false : _c, timeout = options.timeout, onProgress = options.onProgress, onUploadProgress = options.onUploadProgress, qosExtraData = options.qosExtraData, _d = options.apiVersion, apiVersion = _d === void 0 ? 'v2.0' : _d, _e = options.needsAuthorization, needsAuthorization = _e === void 0 ? true : _e, _f = options.useAuthorizationHeaders, useAuthorizationHeaders = _f === void 0 ? false : _f, accessToken = options.accessToken, postProcessQos = options.postProcessQos, breakCache = options.breakCache, allowCookies = options.allowCookies, _g = options.hasContentType, hasContentType = _g === void 0 ? true : _g, _h = options.useMultiPart, useMultiPart = _h === void 0 ? false : _h, _j = options.getErrorAsMessage, getErrorAsMessage = _j === void 0 ? false : _j, expectedErrors = options.expectedErrors;
        var expectedErrorCodes = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, DEFAULT_EXPECTED_ERROR_CODES), (options.expectedErrorCodes || {}));
        var _k = options.requestType, requestType = _k === void 0 ? 'GET' : _k;
        var cookieOrigin = this._cookieOrigin;
        var pathUri = new _ms_odsp_utilities_lib_uri_SimpleUri__WEBPACK_IMPORTED_MODULE_9__["default"](path);
        var url = pathUri.authority ? path : "" + endpoint + path;
        var getData = function (auth) {
            var multiPartId = '';
            var requestHeaders = {};
            if (useMultiPart) {
                // Send only one header in the main request to avoid CORS. Remaining headers are sent as part
                // of the multi-part content disposition data.
                multiPartId = _ms_odsp_utilities_lib_guid_Guid__WEBPACK_IMPORTED_MODULE_7__["default"].generate();
                requestHeaders = {
                    'Content-Type': "multipart/form-data;boundary=" + multiPartId
                };
            }
            else {
                // Don't pass a content-type header if no postData. Otherwise we are stuck with CORS pre-flight on all requests.
                requestHeaders = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ Accept: 'application/json' }, ((options.postData || _this._alwaysSendContentType) && hasContentType
                    ? {
                        'Content-Type': 'application/json'
                    }
                    : {})), (auth.useCookies && auth.digestValue
                    ? {
                        'x-requestdigest': auth.digestValue
                    }
                    : {})), (getErrorAsMessage
                    ? {
                        prefer: 'rich-error-as-message'
                    }
                    : {})), headers);
            }
            var apiUri;
            if (auth.sessionToken && auth.sessionToken.tokenUrl && path.indexOf('/drive/') === 0) {
                // replace the generic "/drive/" with our specific token url
                apiUri = new _ms_odsp_utilities_lib_uri_Uri__WEBPACK_IMPORTED_MODULE_4__["default"](auth.sessionToken.tokenUrl + "/" + path.substring(7));
            }
            else {
                apiUri = new _ms_odsp_utilities_lib_uri_Uri__WEBPACK_IMPORTED_MODULE_4__["default"](path);
                if (endpoint && !apiUri.getScheme()) {
                    apiUri = new _ms_odsp_utilities_lib_uri_Uri__WEBPACK_IMPORTED_MODULE_4__["default"](endpoint + path);
                }
            }
            if (useMultiPart) {
                apiUri.setQueryParameter('ump', '1');
                if (requestType !== 'POST') {
                    headers['X-HTTP-Method-Override'] = requestType;
                }
                // in order to avoid CORS, the type of the actual request needs to be POST
                requestType = 'POST';
            }
            // save the url to log before we add sensitive tokens
            var apiUrlToLog = apiUri.toString();
            if (!useMultiPart) {
                if (auth.sessionToken) {
                    var _a = auth.sessionToken, sessionAccessToken = _a.accessToken, proofToken = _a.proofToken, wlidToken = _a.wlidToken, isBadger = _a.isBadger;
                    if (wlidToken) {
                        requestHeaders = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, requestHeaders), { Authorization: "wlid1.1 " + wlidToken });
                    }
                    else if (useAuthorizationHeaders) {
                        if (sessionAccessToken) {
                            if (isBadger) {
                                requestHeaders = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, requestHeaders), { Authorization: "badger " + sessionAccessToken });
                            }
                            else {
                                requestHeaders = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, requestHeaders), { Authorization: "bearer " + sessionAccessToken });
                            }
                        }
                        if (proofToken) {
                            requestHeaders = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, requestHeaders), { 'X-PROOF_TOKEN': proofToken });
                        }
                    }
                    else {
                        if (sessionAccessToken) {
                            // We attach the access token as a query parameter to every request.
                            // We could also pass it in through the 'Authorization: bearer' header,
                            // but that would result in an extra CORS preflight request for every
                            // unique path.
                            apiUri.setQueryParameter('access_token', sessionAccessToken);
                        }
                        if (proofToken) {
                            // ODB scenarios use proof tokens
                            apiUri.setQueryParameter('prooftoken', proofToken);
                        }
                    }
                }
            }
            if (useMultiPart) {
                var body = '';
                body += "--" + multiPartId + "\r\n";
                body += 'Content-Disposition: form-data;name=data\r\n';
                if (headers) {
                    for (var _i = 0, _b = Object.keys(headers); _i < _b.length; _i++) {
                        var header = _b[_i];
                        body += header + ": " + headers[header] + "\r\n";
                    }
                }
                body += 'Content-Type: application/json\r\n';
                body += "Authorization: bearer " + auth.sessionToken.accessToken + "\r\n";
                if (getErrorAsMessage) {
                    body += 'prefer: rich-error-as-message\r\n';
                }
                body += '\r\n';
                body += (options.postData !== undefined ? options.postData : '') + "\r\n";
                body += "--" + multiPartId + "--";
            }
            if (breakCache) {
                apiUri.setQueryParameter('r', Math.random().toFixed(8));
            }
            var apiEvent;
            if (!disableLogging) {
                var telemetryUri = new _ms_odsp_utilities_lib_uri_SimpleUri__WEBPACK_IMPORTED_MODULE_9__["default"](apiUrlToLog);
                var eventDetails = {
                    url: telemetryUri.authority + "/{ length: " + telemetryUri.path.length + ", segments: " + telemetryUri.segments.length + " }",
                    name: _this._apiName + "DataRequest." + apiName,
                    extraData: qosExtraData
                };
                apiEvent = new _this._apiEvent(eventDetails);
            }
            var apiUrlString = apiUri.toString();
            var requestPerformanceStartTime = performance && performance.now();
            return _ms_odsp_utilities_lib_xhr_XHRPromise__WEBPACK_IMPORTED_MODULE_2__["default"].start({
                url: apiUrlString,
                headers: requestHeaders,
                method: requestType,
                json: body || options.postData || '',
                requestTimeoutInMS: timeout,
                withCredentials: auth.useCookies,
                onProgress: onProgress,
                onUploadProgress: onUploadProgress
            }).then(function (request) {
                var performanceMetrics = Object(_ms_odsp_utilities_lib_logging_RequestDurationLoggingHelper__WEBPACK_IMPORTED_MODULE_5__["getRequestEntryDurationMetrics"])(apiUrlString, requestPerformanceStartTime);
                if (apiEvent) {
                    var qosData = {
                        resultType: _ms_odsp_utilities_lib_logging_events_Api_event__WEBPACK_IMPORTED_MODULE_3__["ResultTypeEnum"].Success,
                        extraData: {
                            rawRequestDuration: performanceMetrics.duration,
                            performanceEntry: JSON.stringify(performanceMetrics),
                            requestId: request.getResponseHeader('request-id') || request.getResponseHeader('sprequestguid'),
                            MSCorrelationVector: request.getResponseHeader('MS-CV')
                        }
                    };
                    apiEvent.end(qosData);
                }
                if (options.parseResponse) {
                    return options.parseResponse(request);
                }
                if (request.responseText.length === 0) {
                    return null;
                }
                return JSON.parse(request.responseText);
            }, function (request) {
                var complete = function (apiEndSchema, error) {
                    if (postProcessQos) {
                        apiEndSchema = postProcessQos(apiEndSchema, error);
                    }
                    if (apiEvent) {
                        apiEvent.end(apiEndSchema);
                    }
                    return _ms_odsp_utilities_lib_async_Promise__WEBPACK_IMPORTED_MODULE_1__["default"].reject(error);
                };
                var performanceMetrics = Object(_ms_odsp_utilities_lib_logging_RequestDurationLoggingHelper__WEBPACK_IMPORTED_MODULE_5__["getRequestEntryDurationMetrics"])(apiUrlString, requestPerformanceStartTime);
                if (request instanceof Error) {
                    var isCanceled = _ms_odsp_utilities_lib_async_Promise__WEBPACK_IMPORTED_MODULE_1__["default"].isCanceled(request);
                    var resultType = isCanceled ? _ms_odsp_utilities_lib_logging_events_Api_event__WEBPACK_IMPORTED_MODULE_3__["ResultTypeEnum"].ExpectedFailure : _ms_odsp_utilities_lib_logging_events_Api_event__WEBPACK_IMPORTED_MODULE_3__["ResultTypeEnum"].Failure;
                    var apiEndSchema = {
                        error: request.message,
                        resultCode: isCanceled ? 'Canceled' : '',
                        resultType: resultType,
                        extraData: {
                            rawRequestDuration: performanceMetrics.duration,
                            performanceEntry: JSON.stringify(performanceMetrics)
                        }
                    };
                    return complete(apiEndSchema, request);
                }
                else {
                    var response_1;
                    if (request.responseText) {
                        try {
                            response_1 = JSON.parse(request.responseText);
                        }
                        catch (error) {
                            // no-op
                        }
                    }
                    if (getErrorAsMessage) {
                        try {
                            // If we requested the error to be encoded in the message field, decode it
                            var decodedError = _this._encodingFixEnabled
                                ? JSON.parse(Object(_ms_odsp_utilities_lib_encoding_Base64Encoding__WEBPACK_IMPORTED_MODULE_10__["base64ToString"])(response_1.error.message))
                                : JSON.parse(atob(response_1.error.message));
                            response_1 = { error: decodedError };
                        }
                        catch (e) {
                            // If we fail to decode, just try to continue with the original response
                        }
                    }
                    var status_1 = request.status, statusText_1 = request.statusText;
                    var _a = (response_1 || {}).error, _b = _a === void 0 ? {} : _a, _c = _b.message, message_1 = _c === void 0 ? '' : _c, _d = _b.innerError, _e = _d === void 0 ? {} : _d, _f = _e.stackTrace, stackTrace_1 = _f === void 0 ? '' : _f, _g = _e.debugMessage, debugMessage_1 = _g === void 0 ? '' : _g;
                    var offlinePromise = status_1 || !_this._isOffline ? _ms_odsp_utilities_lib_async_Promise__WEBPACK_IMPORTED_MODULE_1__["default"].resolve(false) : _this._isOffline();
                    return offlinePromise.then(function (isOffline) {
                        var offlineMessage = isOffline ? 'Offline' : '';
                        var correlationId = request.getResponseHeader('request-id') || request.getResponseHeader('sprequestguid');
                        var isExpected = isOffline ||
                            !!Object(_models_error_Error__WEBPACK_IMPORTED_MODULE_6__["getErrorResolutionFromResponse"])(response_1, status_1, function (code) {
                                return expectedErrorCodes[code];
                            });
                        var error = new _models_error_Error__WEBPACK_IMPORTED_MODULE_6__["GraphError"](new Error(message_1 || offlineMessage), {
                            response: response_1,
                            status: status_1,
                            request: request,
                            correlationId: correlationId,
                            isExpected: isExpected
                        });
                        if (expectedErrors && Object(_ms_telemetry_manager_lib_ErrorHelper__WEBPACK_IMPORTED_MODULE_8__["isExpectedError"])({ code: error.code, message: message_1 }, expectedErrors)) {
                            isExpected = true;
                        }
                        var apiEndSchema = {
                            resultType: isExpected ? _ms_odsp_utilities_lib_logging_events_Api_event__WEBPACK_IMPORTED_MODULE_3__["ResultTypeEnum"].ExpectedFailure : _ms_odsp_utilities_lib_logging_events_Api_event__WEBPACK_IMPORTED_MODULE_3__["ResultTypeEnum"].Failure,
                            error: message_1,
                            resultCode: error.code,
                            extraData: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, (qosExtraData || {})), Object(_models_error_Error__WEBPACK_IMPORTED_MODULE_6__["getQosExtraDataFromError"])(error)), { stack: stackTrace_1, httpStatus: status_1, httpStatusText: statusText_1, requestId: correlationId, MSCorrelationVector: request.getResponseHeader('MS-CV'), debugMessage: debugMessage_1, accessTokenLength: auth.sessionToken && auth.sessionToken.accessToken
                                    ? auth.sessionToken.accessToken.length
                                    : -1, urlLength: apiUri.toString().length, useCookies: !!auth.useCookies, 
                                // This check may give false negatives, as being on a LAN with no internet still qualifies as "onLine"
                                isOffline: isOffline, rawRequestDuration: performanceMetrics.duration, performanceEntry: JSON.stringify(performanceMetrics) })
                        };
                        return complete(apiEndSchema, error);
                    });
                }
            });
        };
        var sessionManagementProvider = this._sessionManagementProvider;
        if (needsAuthorization) {
            if (accessToken) {
                return getData({
                    sessionToken: accessToken
                });
            }
            var origin_1 = new _ms_odsp_utilities_lib_uri_SimpleUri__WEBPACK_IMPORTED_MODULE_9__["default"](url).authority;
            if (allowCookies && origin_1 && cookieOrigin && origin_1 === cookieOrigin) {
                // This is a same-origin call. In this case, cookies may be used for this API call.
                if (sessionManagementProvider && sessionManagementProvider.getFormDigest && requestType !== 'GET') {
                    // If the API call is not made using 'GET', a cross-site anti-forgery token needs to be obtained from the current app.
                    return sessionManagementProvider.getFormDigest().then(function (digestValue) {
                        return getData({
                            digestValue: digestValue,
                            useCookies: true
                        });
                    });
                }
                return getData({
                    useCookies: true
                });
            }
            if (sessionManagementProvider && sessionManagementProvider.getSessionToken) {
                var getSessionTokenOptions_1 = {
                    apiVersion: apiVersion,
                    endpoint: endpoint,
                    driveUrl: driveUrl,
                    path: url
                };
                return _ms_odsp_utilities_lib_async_Promise__WEBPACK_IMPORTED_MODULE_1__["default"].resolve(sessionManagementProvider.getSessionToken(getSessionTokenOptions_1)).then(function (sessionToken) {
                    return getData({
                        sessionToken: sessionToken
                    }).catch(function (error) {
                        if (sessionToken && isInvalidTokenError(error)) {
                            // If the token is invalid, do a one-time renewal attempt.
                            return sessionManagementProvider
                                .getSessionToken(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, getSessionTokenOptions_1), { claimsChallenge: {
                                    sessionToken: sessionToken,
                                    claims: getAuthenticateClaims(error),
                                    error: error
                                } }))
                                .then(function (newSessionToken) {
                                if (newSessionToken.accessToken !== sessionToken.accessToken) {
                                    return getData({
                                        sessionToken: newSessionToken
                                    });
                                }
                                else {
                                    return _ms_odsp_utilities_lib_async_Promise__WEBPACK_IMPORTED_MODULE_1__["default"].reject(error);
                                }
                            });
                        }
                        return _ms_odsp_utilities_lib_async_Promise__WEBPACK_IMPORTED_MODULE_1__["default"].reject(error);
                    });
                });
            }
            if (sessionManagementProvider && sessionManagementProvider.getToken) {
                return sessionManagementProvider
                    .getToken(apiVersion, url)
                    .then(function (sessionToken) {
                    return getData({
                        sessionToken: sessionToken
                    });
                });
            }
        }
        return getData({});
    };
    return DataRequestor;
}());

/* harmony default export */ __webpack_exports__["default"] = (DataRequestor);
function isInvalidTokenError(error) {
    if (error instanceof _models_error_Error__WEBPACK_IMPORTED_MODULE_6__["GraphError"]) {
        var request = error.request;
        var authenticate = request && request.getResponseHeader('WWW-Authenticate');
        if (authenticate &&
            authenticate.slice(0, BEARER_AUTH_TYPE.length) === BEARER_AUTH_TYPE &&
            authenticate.indexOf('error="insufficient_claims"') > -1) {
            return true;
        }
    }
    return false;
}
function getAuthenticateClaims(error) {
    var authenticate = error.request && error.request.getResponseHeader('WWW-Authenticate');
    var claimsToken = "claims=\"";
    if (authenticate) {
        var indexOfClaims = authenticate.indexOf(claimsToken);
        if (indexOfClaims > -1) {
            var endOfClaims = authenticate.indexOf("\"", indexOfClaims + claimsToken.length);
            if (endOfClaims > -1) {
                return authenticate.slice(indexOfClaims + claimsToken.length, endOfClaims);
            }
        }
    }
    return undefined;
}
//# sourceMappingURL=DataRequestor.js.map

/***/ }),

/***/ "7Ihg":
/*!***********************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-utilities@29.7.9_5d977624104b06c7bcaa2de974ff51f1/node_modules/@ms/odsp-utilities/lib/async/Promise.js ***!
  \***********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ms/odsp-core-bundle */ "K9kD");
/* harmony import */ var _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__["Promise"]; });

// Loading @ms/odsp-utilities/./lib/async/Promise.js



/***/ }),

/***/ "892h":
/*!*********************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-utilities@29.7.9_5d977624104b06c7bcaa2de974ff51f1/node_modules/@ms/odsp-utilities/lib/encoding/Base64Encoding.js ***!
  \*********************************************************************************************************************************************************************************/
/*! exports provided: base64ToString */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "base64ToString", function() { return base64ToString; });
/**
 * Decodes a base-64 string. It is assumed that the original encoded byte array is UTF-8 or ASCII.
 */
function base64ToString(encoded) {
    return decodeURIComponent(escape(atob(encoded)));
}
//# sourceMappingURL=Base64Encoding.js.map

/***/ }),

/***/ "8G1T":
/*!***************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-utilities@29.7.9_5d977624104b06c7bcaa2de974ff51f1/node_modules/@ms/odsp-utilities/lib/features/Features.js ***!
  \***************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ms/odsp-core-bundle */ "K9kD");
/* harmony import */ var _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__["Features"]; });

// Loading @ms/odsp-utilities/./lib/features/Features.js



/***/ }),

/***/ "8VvQ":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-datasources@45.13.10_e509c819ab980023b76e5746ec0fc9e2/node_modules/@ms/odsp-datasources/lib/utilities/peoplePicker/SubstratePeoplePickerHelper.js ***!
  \******************************************************************************************************************************************************************************************************************/
/*! exports provided: SUBSTRATE_SEARCH_URL, PeoplePickerSubstrate, SubstratePeoplePickerHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SUBSTRATE_SEARCH_URL", function() { return SUBSTRATE_SEARCH_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PeoplePickerSubstrate", function() { return PeoplePickerSubstrate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubstratePeoplePickerHelper", function() { return SubstratePeoplePickerHelper; });
/* harmony import */ var _ms_odsp_utilities_lib_async_Promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ms/odsp-utilities/lib/async/Promise */ "7Ihg");
/* harmony import */ var _ms_odsp_utilities_lib_logging_events_Qos_event__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ms/odsp-utilities/lib/logging/events/Qos.event */ "c09w");
/* harmony import */ var _ms_odsp_graph_lib_base_dataRequestor_DataRequestor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ms/odsp-graph/lib/base/dataRequestor/DataRequestor */ "6r7H");
/* harmony import */ var _ms_odsp_utilities_lib_models_store_BaseDataStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ms/odsp-utilities/lib/models/store/BaseDataStore */ "18dJ");
/* harmony import */ var _ms_odsp_utilities_lib_models_store_DataStoreCachingType__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ms/odsp-utilities/lib/models/store/DataStoreCachingType */ "EjJ3");
/* harmony import */ var _ms_odsp_utilities_lib_features_FeatureOverrides__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ms/odsp-utilities/lib/features/FeatureOverrides */ "iVgB");
/* harmony import */ var _ms_odsp_utilities_lib_killswitch_Killswitch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ms/odsp-utilities/lib/killswitch/Killswitch */ "QUgr");







var STORE_KEY = 'PeoplePicker';
var DISABLE_SUBSTRATE_KEY = 'DisableSubstrateSearch';
var SUBSTRATE_SEARCH_URL = 'https://outlook.office.com/search';
var PeoplePickerSubstrate = { ODB: 1286 };
var SubstratePeoplePickerHelper = /** @class */ (function () {
    function SubstratePeoplePickerHelper(params, dependencies) {
        this._dataRequestor = new _ms_odsp_graph_lib_base_dataRequestor_DataRequestor__WEBPACK_IMPORTED_MODULE_2__["DataRequestor"]({}, {});
        this._pageContext = dependencies.pageContext;
        this._oAuthTokenProvider = dependencies.oAuthTokenProvider;
        if (this._sharingContextInformation && this._sharingContextInformation.additionalTokens) {
            this._substrateToken = this._sharingContextInformation.additionalTokens.substrateToken;
        }
        this.initializeDataStore();
    }
    /**
     * Returns whether or not we are able to use 3S for people search. 3S calls can be disabled if the OAuth call
     * previously failed, if we are token authenticated (Acquire only supports cookie auth), or if the user isn't in the
     * A/B experiment to use 3S.
     */
    SubstratePeoplePickerHelper.prototype.canUseSubstrate = function () {
        if (this._substrateToken) {
            return true;
        }
        var canUseSubstrate = false;
        // We can't call 3S On-Prem
        if (this._pageContext && !this._pageContext.isSPO) {
            return canUseSubstrate;
        }
        // Disable 3S if we're authenticated with an access token. Currently, 3S calls are only supported with cookie auth.
        if (this._pageContext && !!this._pageContext.authToken) {
            return canUseSubstrate;
        }
        if (this._pageContext &&
            this._oAuthTokenProvider &&
            _ms_odsp_utilities_lib_features_FeatureOverrides__WEBPACK_IMPORTED_MODULE_5__["default"].isFeatureEnabled(PeoplePickerSubstrate)) {
            canUseSubstrate = true;
        }
        if (this._dataStore) {
            canUseSubstrate =
                canUseSubstrate &&
                    !this._dataStore.getValue(DISABLE_SUBSTRATE_KEY, _ms_odsp_utilities_lib_models_store_DataStoreCachingType__WEBPACK_IMPORTED_MODULE_4__["default"].session);
        }
        return canUseSubstrate;
    };
    /**
     * Store flag to disable 3S calls in session storage so we don't keep making OAuth token calls that will error.
     * The calls are expensive and if the user is unable to call 3S we shouldn't keep trying. Since some errors are
     * recoverable outside the session, don't scope to something as long-lived as local storage.
     */
    SubstratePeoplePickerHelper.prototype.disableSubstrateCallsForPicker = function () {
        this.initializeDataStore();
        this._dataStore.setValue(DISABLE_SUBSTRATE_KEY, true, _ms_odsp_utilities_lib_models_store_DataStoreCachingType__WEBPACK_IMPORTED_MODULE_4__["default"].session);
    };
    /**
     * Retrieves an access token for calling 3S.
     */
    SubstratePeoplePickerHelper.prototype.getSubstrateToken = function () {
        var _this = this;
        if (this._substrateToken) {
            return _ms_odsp_utilities_lib_async_Promise__WEBPACK_IMPORTED_MODULE_0__["default"].resolve(this._substrateToken);
        }
        if (this._oAuthTokenProvider) {
            /**
             * OAuthTokenProvider already logs QOS events for its calls but we want to measure retrieving 3S tokens from within the people picker
             * separately. This allows us to track how often users are forced into the fallback logic scenario.
             */
            var qos_1 = new _ms_odsp_utilities_lib_logging_events_Qos_event__WEBPACK_IMPORTED_MODULE_1__["Qos"]({ name: 'PeoplePicker.GetSubstrateToken' });
            return this._oAuthTokenProvider.getToken(SUBSTRATE_SEARCH_URL).then(function (oAuthToken) {
                qos_1.end({
                    resultType: _ms_odsp_utilities_lib_logging_events_Qos_event__WEBPACK_IMPORTED_MODULE_1__["ResultTypeEnum"].Success
                });
                return oAuthToken;
            }, function (error) {
                if (_ms_odsp_utilities_lib_async_Promise__WEBPACK_IMPORTED_MODULE_0__["default"].isCanceled(error)) {
                    qos_1.end({
                        resultType: _ms_odsp_utilities_lib_logging_events_Qos_event__WEBPACK_IMPORTED_MODULE_1__["ResultTypeEnum"].ExpectedFailure,
                        resultCode: 'Canceled'
                    });
                    return _ms_odsp_utilities_lib_async_Promise__WEBPACK_IMPORTED_MODULE_0__["default"].reject(error);
                }
                else {
                    qos_1.end({
                        resultCode: 'PeoplePicker.GetSubstrateTokenError',
                        resultType: _ms_odsp_utilities_lib_logging_events_Qos_event__WEBPACK_IMPORTED_MODULE_1__["ResultTypeEnum"].Failure,
                        extraData: {
                            serverErrorCode: error['_serverErrorCode'],
                            message: error.message
                        }
                    });
                    // If the Acquire call fails, disable future attempts to retrieve the 3S token for the current session.
                    _this.disableSubstrateCallsForPicker();
                }
                return null;
            });
        }
        return null;
    };
    SubstratePeoplePickerHelper.prototype.init = function (oAuthToken) {
        var scenario = 'documentshare';
        var initUrl = SUBSTRATE_SEARCH_URL + "/api/v1/init?scenario=" + scenario;
        if (!_ms_odsp_utilities_lib_killswitch_Killswitch__WEBPACK_IMPORTED_MODULE_6__["Killswitch"].isActivated('20373606-dfd1-4220-9a96-50f93570a877', '07/03/2020', 'Removing litoken while calling Substrate.')) {
            this._dataRequestor.send({
                apiName: 'Substrate.PeopleSearch.Init',
                path: initUrl,
                headers: {
                    Authorization: 'Bearer ' + oAuthToken
                },
                needsAuthorization: false
            });
        }
        else {
            this._dataRequestor.send({
                apiName: 'Substrate.PeopleSearch.Init',
                path: initUrl,
                headers: {
                    Authorization: 'Bearer ' + oAuthToken,
                    'X-User-Context': 'litoken=' + oAuthToken
                },
                needsAuthorization: false
            });
        }
    };
    SubstratePeoplePickerHelper.prototype.initializeDataStore = function () {
        if (!this._dataStore) {
            this._dataStore = new _ms_odsp_utilities_lib_models_store_BaseDataStore__WEBPACK_IMPORTED_MODULE_3__["default"](STORE_KEY, _ms_odsp_utilities_lib_models_store_DataStoreCachingType__WEBPACK_IMPORTED_MODULE_4__["default"].session);
        }
    };
    return SubstratePeoplePickerHelper;
}());

//# sourceMappingURL=SubstratePeoplePickerHelper.js.map

/***/ }),

/***/ "AfY0":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-datasources@45.13.10_e509c819ab980023b76e5746ec0fc9e2/node_modules/@ms/odsp-datasources/lib/dataSources/base/DataSource.js ***!
  \*******************************************************************************************************************************************************************************************/
/*! exports provided: DataSource, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataSource", function() { return DataSource; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ms_odsp_utilities_lib_async_Promise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ms/odsp-utilities/lib/async/Promise */ "7Ihg");
/* harmony import */ var _DataRequestor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DataRequestor */ "PayJ");
/* harmony import */ var _GetDataWithSyncClient__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./GetDataWithSyncClient */ "BPn7");
/* harmony import */ var _ms_data_sync_nucleus_lib_DataSyncFlights__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ms/data-sync-nucleus/lib/DataSyncFlights */ "FdyI");
/* harmony import */ var _ms_odsp_utilities_lib_features_FeatureOverrides__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ms/odsp-utilities/lib/features/FeatureOverrides */ "iVgB");
/* harmony import */ var _ms_odsp_utilities_lib_killswitch_Killswitch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ms/odsp-utilities/lib/killswitch/Killswitch */ "QUgr");







var NUCLEUS_PLUGIN_KILLSWITCH = '68FFDA86-24A1-4A87-A304-0B53C0058679';
// Async load for nucleus sync, if the flight is available.
var getDataSyncClientImport = (function () {
    var check = function (f) { return _ms_odsp_utilities_lib_features_FeatureOverrides__WEBPACK_IMPORTED_MODULE_5__["default"].isFeatureEnabled(f); };
    if (Object(_ms_data_sync_nucleus_lib_DataSyncFlights__WEBPACK_IMPORTED_MODULE_4__["isDataSyncEnabled"])(check)) {
        return __webpack_require__.e(/*! import() | data-sync-nucleus */ "vendors~data-sync-nucleus").then(__webpack_require__.bind(null, /*! @ms/data-sync-nucleus/lib/DataSync */ "O/Ab")).then(function (lib) { return function (aadUserId) { return lib.getDataSyncClient(aadUserId, check); }; });
    }
    else {
        return _ms_odsp_utilities_lib_async_Promise__WEBPACK_IMPORTED_MODULE_1__["default"].resolve(function (aadUserId) { return undefined; });
    }
})();
/* Use this as a base class for any generic data source */
/* For a data source that provides a list of items use the ItemDataSource */
var DataSource = /** @class */ (function () {
    function DataSource(params, dependencies) {
        var pageContext = (this._pageContext = dependencies.pageContext);
        var tokenProvider = dependencies.tokenProvider;
        var _a = dependencies.dataRequestorType, dataRequestorType = _a === void 0 ? /** @class */ (function (_super) {
            Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(class_1, _super);
            function class_1(params) {
                return _super.call(this, params, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ pageContext: pageContext, tokenProvider: tokenProvider }, (!Object(_ms_odsp_utilities_lib_killswitch_Killswitch__WEBPACK_IMPORTED_MODULE_6__["getKillSwitch"])(pageContext).isActivated(NUCLEUS_PLUGIN_KILLSWITCH, '11/5/2020', 'Factor Nucleus support into DataRequestor plugin')
                    ? {
                        dataSyncClient: _ms_odsp_utilities_lib_async_Promise__WEBPACK_IMPORTED_MODULE_1__["default"].resolve(dataSyncClient),
                        getDataWithSyncClient: _GetDataWithSyncClient__WEBPACK_IMPORTED_MODULE_3__["getDataWithSyncClient"]
                    }
                    : {}))) || this;
            }
            return class_1;
        }(_DataRequestor__WEBPACK_IMPORTED_MODULE_2__["default"])) : _a, dataSyncClient = dependencies.dataSyncClient;
        var _b = params.dataSourceName, dataSourceName = _b === void 0 ? 'DataSource' : _b;
        this.dataSyncClient = dataSyncClient;
        this.dataRequestor = new dataRequestorType({
            qosName: dataSourceName
        });
    }
    /**
     * @deprecated Override `dataSourceName` when passing `params` in the constructor.
     */
    DataSource.prototype.getDataSourceName = function () {
        return this.dataSourceName;
    };
    /**
     * @deprecated Pass `needsRequestDigest` to `this.dataRequestor.getData()` when making API calls.
     */
    DataSource.prototype.needsRequestDigest = function (url) {
        return true;
    };
    /**
     *
     *
     * @protected
     * @template T The type of the data returned by the parseResponse callback param.
     * @param {() => string} getUrl Lambda that returns the URL to which the datasource should make
     *                              the request.
     * @param {(responseText: string, serverData: ServerData) => T} parseResponse Function that takes in the response.
     *
     * @param {string} qosName Named used to Qos Logging.
     * @param {() => string} getAdditionalPostData Lambda that returns the additional POST string blob.
     * @param {string} method Method used to make the request.
     * @param {{ [key: string]: string }} additionalHeaders Additional headers to send as part of the request.
     * @param {string} contentType defaults to application/json;odata=verbose.
     * @param {number} maxRetries Maximum number of times to retry the request, defaults to 0.
     * @param {boolean} noRedirect Optional, defaults to false. If true and user hits 403, will redirect to auth.
     * @param {boolean} crossSiteCollectionCall
     * @param {(errorData: IErrorData) => string} Optional override for qos error handler
     * @returns {Promise<T>}
     *
     * @deprecated Use `this.dataRequestor.getData()` instead to make API calls, as it supports better configurability of optional parameters.
     */
    DataSource.prototype.getData = function (getUrl, parseResponse, qosName, getAdditionalPostData, method, additionalHeaders, contentType, // defaults to application/json;odata=verbose
    maxRetries, noRedirect, crossSiteCollectionCall, telemetryHandler, qosExtraData, authToken) {
        // This method is purely to facilitate a call to `this.dataRequestor.getData()` using the deprecated call style.
        // Do not amend this function except to work toward removing usage of it.
        var _this = this;
        if (method === void 0) { method = 'POST'; }
        var url = getUrl();
        var additionalPostData = getAdditionalPostData && getAdditionalPostData();
        var needsRequestDigest = this.needsRequestDigest(url);
        if (!Object(_ms_odsp_utilities_lib_killswitch_Killswitch__WEBPACK_IMPORTED_MODULE_6__["getKillSwitch"])(this._pageContext).isActivated(NUCLEUS_PLUGIN_KILLSWITCH, '11/5/2020', 'Factor Nucleus support into DataRequestor plugin')) {
            return this.dataRequestor.getData({
                url: url,
                parseResponse: parseResponse,
                qosName: qosName,
                additionalPostData: additionalPostData,
                method: method,
                additionalHeaders: additionalHeaders,
                contentType: contentType,
                maxRetries: maxRetries,
                noRedirect: noRedirect,
                crossSiteCollectionCall: crossSiteCollectionCall,
                telemetryHandler: telemetryHandler,
                qosExtraData: qosExtraData,
                needsRequestDigest: needsRequestDigest,
                authToken: authToken
            });
        }
        var serviceRequest = function () {
            return _this.dataRequestor.getData({
                url: url,
                parseResponse: parseResponse,
                qosName: qosName,
                additionalPostData: additionalPostData,
                method: method,
                additionalHeaders: additionalHeaders,
                contentType: contentType,
                maxRetries: maxRetries,
                noRedirect: noRedirect,
                crossSiteCollectionCall: crossSiteCollectionCall,
                telemetryHandler: telemetryHandler,
                qosExtraData: qosExtraData,
                needsRequestDigest: _this.needsRequestDigest(url),
                authToken: authToken
            });
        };
        if (!this._pageContext.aadUserId) {
            return serviceRequest();
        }
        var localRequest = function (dataSyncClient) {
            // We're using data sync. Construct a local version of the request,
            // then hand both the service and local request to the data sync
            // layer for execution.
            var syncTelemetryHandler = Object(_DataRequestor__WEBPACK_IMPORTED_MODULE_2__["getSyncTelemetryHandler"])(dataSyncClient, telemetryHandler);
            var syncRequest = function (endpoint) {
                return _this.dataRequestor.getData({
                    url: endpoint.url,
                    authToken: endpoint.authToken,
                    parseResponse: parseResponse,
                    qosName: qosName,
                    additionalPostData: additionalPostData,
                    method: method,
                    additionalHeaders: additionalHeaders,
                    contentType: contentType,
                    maxRetries: maxRetries,
                    noRedirect: noRedirect,
                    crossSiteCollectionCall: crossSiteCollectionCall,
                    telemetryHandler: function (input) { return syncTelemetryHandler(input, endpoint); },
                    qosExtraData: qosExtraData,
                    needsRequestDigest: _this.needsRequestDigest(endpoint.url),
                    useExactAuthToken: true
                });
            };
            return dataSyncClient.getData({ url: url }, syncRequest, serviceRequest);
        };
        if (this.dataSyncClient) {
            return _ms_odsp_utilities_lib_async_Promise__WEBPACK_IMPORTED_MODULE_1__["default"].wrap(localRequest(this.dataSyncClient));
        }
        else {
            return _ms_odsp_utilities_lib_async_Promise__WEBPACK_IMPORTED_MODULE_1__["default"].wrap(getDataSyncClientImport).then(function (getter) {
                var client = getter(_this._pageContext.aadUserId);
                return client ? localRequest(client) : serviceRequest();
            });
        }
    };
    return DataSource;
}());

/* harmony default export */ __webpack_exports__["default"] = (DataSource);
//# sourceMappingURL=DataSource.js.map

/***/ }),

/***/ "BPn7":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-datasources@45.13.10_e509c819ab980023b76e5746ec0fc9e2/node_modules/@ms/odsp-datasources/lib/dataSources/base/GetDataWithSyncClient.js ***!
  \******************************************************************************************************************************************************************************************************/
/*! exports provided: getDataWithSyncClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDataWithSyncClient", function() { return getDataWithSyncClient; });
/* harmony import */ var _ms_odsp_utilities_lib_async_Promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ms/odsp-utilities/lib/async/Promise */ "7Ihg");
/* harmony import */ var _SyncTelemetryHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SyncTelemetryHandler */ "lxGK");
/* harmony import */ var _ms_odsp_utilities_lib_features_FeatureOverrides__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ms/odsp-utilities/lib/features/FeatureOverrides */ "iVgB");
/* harmony import */ var _ms_data_sync_nucleus_lib_DataSyncFlights__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ms/data-sync-nucleus/lib/DataSyncFlights */ "FdyI");




// Async load for nucleus sync, if the flight is available.
var getDataSyncClientImport = (function () {
    var check = function (f) { return _ms_odsp_utilities_lib_features_FeatureOverrides__WEBPACK_IMPORTED_MODULE_2__["default"].isFeatureEnabled(f); };
    if (Object(_ms_data_sync_nucleus_lib_DataSyncFlights__WEBPACK_IMPORTED_MODULE_3__["isDataSyncEnabled"])(check)) {
        return __webpack_require__.e(/*! import() | data-sync-nucleus */ "vendors~data-sync-nucleus").then(__webpack_require__.bind(null, /*! @ms/data-sync-nucleus/lib/DataSync */ "O/Ab")).then(function (lib) { return function (aadUserId) {
            return lib.getDataSyncClient(aadUserId, check);
        }; });
    }
    else {
        return Promise.resolve(function (aadUserId) { return undefined; });
    }
})();
function getDataWithSyncClient(params) {
    var _a = params.options, url = _a.url, authToken = _a.authToken, telemetryHandler = _a.telemetryHandler, useExactAuthToken = _a.useExactAuthToken, dataSyncClientOverride = params.dataSyncClient, aadUserId = params.aadUserId, getData = params.getData;
    var serviceRequest = function () {
        return getData({
            url: url,
            telemetryHandler: telemetryHandler,
            authToken: authToken,
            useExactAuthToken: useExactAuthToken
        });
    };
    if (!aadUserId) {
        return serviceRequest();
    }
    var localRequest = function (dataSyncClient) {
        // We're using data sync. Construct a local version of the request,
        // then hand both the service and local request to the data sync
        // layer for execution.
        var syncTelemetryHandler = Object(_SyncTelemetryHandler__WEBPACK_IMPORTED_MODULE_1__["getSyncTelemetryHandler"])(dataSyncClient, telemetryHandler);
        var syncRequest = function (endpoint) {
            return getData({
                url: endpoint.url,
                authToken: endpoint.authToken,
                telemetryHandler: function (input) { return syncTelemetryHandler(input, endpoint); },
                useExactAuthToken: true
            });
        };
        return dataSyncClient.getData({ url: url }, syncRequest, serviceRequest);
    };
    return _ms_odsp_utilities_lib_async_Promise__WEBPACK_IMPORTED_MODULE_0__["default"].resolve(dataSyncClientOverride)
        .then(function (dataSyncClient) {
        // If there is a specified override, use it. Otherwise fall back to requesting one for the given user
        // from page context, if provided.
        return (dataSyncClient ||
            getDataSyncClientImport.then(function (getter) {
                return getter(aadUserId);
            }));
    })
        .then(function (dataSyncClient) {
        return dataSyncClient ? localRequest(dataSyncClient) : serviceRequest();
    });
}
//# sourceMappingURL=GetDataWithSyncClient.js.map

/***/ }),

/***/ "BY+f":
/*!*****************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-utilities@29.7.9_5d977624104b06c7bcaa2de974ff51f1/node_modules/@ms/odsp-utilities/lib/string/StringHelper.js ***!
  \*****************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Loading @ms/odsp-utilities/./lib/string/StringHelper.js
var pkg = __webpack_require__(/*! @ms/odsp-core-bundle */ "K9kD");
module.exports = pkg.StringHelper;

/***/ }),

/***/ "EjJ3":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-utilities@29.7.9_5d977624104b06c7bcaa2de974ff51f1/node_modules/@ms/odsp-utilities/lib/models/store/DataStoreCachingType.js ***!
  \*******************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ms/odsp-core-bundle */ "K9kD");
/* harmony import */ var _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__["DataStoreCachingType"]; });

// Loading @ms/odsp-utilities/./lib/models/store/DataStoreCachingType.js



/***/ }),

/***/ "FdyI":
/*!******************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/data-sync-nucleus@1.6.1_5d977624104b06c7bcaa2de974ff51f1/node_modules/@ms/data-sync-nucleus/lib/DataSyncFlights.js ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: DataSyncEntityType, NucleusPreviewEnabled, EnableNucleusListConflictsUX, isDataSyncEnabled, isSyncConflictsUxEnabled */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataSyncEntityType", function() { return DataSyncEntityType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NucleusPreviewEnabled", function() { return NucleusPreviewEnabled; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnableNucleusListConflictsUX", function() { return EnableNucleusListConflictsUX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDataSyncEnabled", function() { return isDataSyncEnabled; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSyncConflictsUxEnabled", function() { return isSyncConflictsUxEnabled; });
var DataSyncEntityType;
(function (DataSyncEntityType) {
    DataSyncEntityType["SharePointList"] = "SharePointList";
})(DataSyncEntityType || (DataSyncEntityType = {}));
var NucleusPreviewEnabled = {
    ODB: 1620
};
var EnableNucleusListConflictsUX = {
    ODB: 60063
};
/**
 * Checks whether data sync for the given entity type is enabled.
 * @param featureCheck A callback which allows async loaded data sync to
 * check feature overrides.
 */
function isDataSyncEnabled(featureCheck, entityType) {
    return (featureCheck(NucleusPreviewEnabled) &&
        // tslint:disable-next-line:no-string-literal
        ((window.localStorage && window.localStorage['NucleusPreviewEnabled'] === 'true') ||
            /[?&]enableNucleusPreview=true/.test(location.search)));
}
function isSyncConflictsUxEnabled(featureCheck) {
    return (isDataSyncEnabled(featureCheck, DataSyncEntityType.SharePointList) &&
        featureCheck(EnableNucleusListConflictsUX));
}
//# sourceMappingURL=DataSyncFlights.js.map

/***/ }),

/***/ "GbJQ":
/*!***********************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-utilities@29.7.9_5d977624104b06c7bcaa2de974ff51f1/node_modules/@ms/odsp-utilities/lib/string/EmailAddressParser.js ***!
  \***********************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ms/odsp-utilities-bundle */ "y88i");
/* harmony import */ var _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_0__["EmailAddressParser"]; });

// Loading @ms/odsp-utilities/./lib/string/EmailAddressParser.js



/***/ }),

/***/ "GlwB":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-datasources@45.13.10_e509c819ab980023b76e5746ec0fc9e2/node_modules/@ms/odsp-datasources/lib/interfaces/ISpPageContext.js ***!
  \*****************************************************************************************************************************************************************************************/
/*! exports provided: SiteResourceQuotaState, SearchBoxInNavBarType, TeamsChannelType, SearchScopeType, SPWebPropertyFlags2, DEFAULT_LOGO_URL, getServerUrl, getSafeWebServerRelativeUrl, isGroupWebContext, isRootWebContext, isTeamsRootWebContext, isModernTemplate, isHomePlusHubWithExtendedHeader, isHomePlusHub, isHomeSite, isAnonymousOrGuest, shouldLoadAppBar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SiteResourceQuotaState", function() { return SiteResourceQuotaState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchBoxInNavBarType", function() { return SearchBoxInNavBarType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamsChannelType", function() { return TeamsChannelType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchScopeType", function() { return SearchScopeType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SPWebPropertyFlags2", function() { return SPWebPropertyFlags2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_LOGO_URL", function() { return DEFAULT_LOGO_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getServerUrl", function() { return getServerUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSafeWebServerRelativeUrl", function() { return getSafeWebServerRelativeUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isGroupWebContext", function() { return isGroupWebContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isRootWebContext", function() { return isRootWebContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isTeamsRootWebContext", function() { return isTeamsRootWebContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isModernTemplate", function() { return isModernTemplate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isHomePlusHubWithExtendedHeader", function() { return isHomePlusHubWithExtendedHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isHomePlusHub", function() { return isHomePlusHub; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isHomeSite", function() { return isHomeSite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isAnonymousOrGuest", function() { return isAnonymousOrGuest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shouldLoadAppBar", function() { return shouldLoadAppBar; });
/* harmony import */ var _models_chrome_ChromeOptions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/chrome/ChromeOptions */ "Vb17");

/**
 *   A value indicating the state of the reqource quota for a site.
 */
var SiteResourceQuotaState;
(function (SiteResourceQuotaState) {
    /** No quota issues */
    SiteResourceQuotaState[SiteResourceQuotaState["NoWarning"] = 0] = "NoWarning";
    /** Close to reaching disk quota warning */
    SiteResourceQuotaState[SiteResourceQuotaState["Warning"] = 1] = "Warning";
    /** Over quota */
    SiteResourceQuotaState[SiteResourceQuotaState["OverQuota"] = 2] = "OverQuota";
})(SiteResourceQuotaState || (SiteResourceQuotaState = {}));
/**
 * Search box in nav bar
 */
var SearchBoxInNavBarType;
(function (SearchBoxInNavBarType) {
    /** Default behavior will be AllPages */
    SearchBoxInNavBarType[SearchBoxInNavBarType["Default"] = 0] = "Default";
    /** Display search box in nav bar for all pages */
    SearchBoxInNavBarType[SearchBoxInNavBarType["AllPages"] = 1] = "AllPages";
    /** Display search box in nav bar for modern pages only */
    SearchBoxInNavBarType[SearchBoxInNavBarType["ModernOnly"] = 2] = "ModernOnly";
    /** Do not display search box in nav bar */
    SearchBoxInNavBarType[SearchBoxInNavBarType["Hidden"] = 3] = "Hidden";
})(SearchBoxInNavBarType || (SearchBoxInNavBarType = {}));
/** The possible types of a Teams Channel. */
var TeamsChannelType;
(function (TeamsChannelType) {
    /** This is not a site backing a teams channel */
    TeamsChannelType[TeamsChannelType["None"] = 0] = "None";
    /** Site is backing a Private Channel */
    TeamsChannelType[TeamsChannelType["PrivateChannel"] = 1] = "PrivateChannel";
    /** Site is backing a Shared Channel */
    TeamsChannelType[TeamsChannelType["SharedChannel"] = 2] = "SharedChannel";
    /** Site is backing a Standard Channel */
    TeamsChannelType[TeamsChannelType["StandardChannel"] = 3] = "StandardChannel";
})(TeamsChannelType || (TeamsChannelType = {}));
/**
 * Search box search scope
 * When the value is Default, it follows the existing search scope rule.
 * For example, hub site has hub scope, non-hub site has site scope.
 */
var SearchScopeType;
(function (SearchScopeType) {
    SearchScopeType[SearchScopeType["Default"] = 0] = "Default";
    SearchScopeType[SearchScopeType["Tenant"] = 1] = "Tenant";
    SearchScopeType[SearchScopeType["Hub"] = 2] = "Hub";
    SearchScopeType[SearchScopeType["Site"] = 3] = "Site";
})(SearchScopeType || (SearchScopeType = {}));
/**
 * Web property flags enum
 * property name matchs SPWebPropertyFlags2 definition in sts/stsom/SPWeb.cs
 */
var SPWebPropertyFlags2;
(function (SPWebPropertyFlags2) {
    /** Indicates whether site footer is enabled in this web */
    SPWebPropertyFlags2[SPWebPropertyFlags2["FooterEnabled"] = 2] = "FooterEnabled";
    /** Indicates whether mega menu is enabled on this web */
    SPWebPropertyFlags2[SPWebPropertyFlags2["MegaMenuEnabled"] = 128] = "MegaMenuEnabled";
    /** Indicates which emphasis is assigned to the footer when combined */
    SPWebPropertyFlags2[SPWebPropertyFlags2["FooterEmphasis0"] = 256] = "FooterEmphasis0";
    SPWebPropertyFlags2[SPWebPropertyFlags2["FooterEmphasis1"] = 512] = "FooterEmphasis1";
    /** Indicates which footer layout type is selected when combined */
    SPWebPropertyFlags2[SPWebPropertyFlags2["FooterLayout0"] = 1024] = "FooterLayout0";
    SPWebPropertyFlags2[SPWebPropertyFlags2["FooterLayout1"] = 2048] = "FooterLayout1";
    SPWebPropertyFlags2[SPWebPropertyFlags2["HideTitleInHeader"] = 33554432] = "HideTitleInHeader";
})(SPWebPropertyFlags2 || (SPWebPropertyFlags2 = {}));
/** Default site logo URL */
var DEFAULT_LOGO_URL = '_layouts/15/images/siteicon.png';
/**
 * Gets the absolute URL of the server (like https://microsoft.sharepoint.com).
 * Input can be an ISpPageContext or other object containing absolute and server-relative web URLs.
 *
 * @example
 *  Returns "https://microsoft.sharepoint.com"
 *      getServerUrl({
 *          webAbsoluteUrl: "https://microsoft.sharepoint.com/sites/odsp",
 *          webServerRelativeUrl: "/sites/odsp"
 *      })
 *
 * Returns "http://server"
 *     getServerUrl({
 *          webAbsoluteUrl: "http://server",
 *          webServerRelativeUrl: "/"
 *     })
 */
function getServerUrl(pageContext) {
    'use strict';
    var webAbsoluteUrl = pageContext.webAbsoluteUrl, webServerRelativeUrl = pageContext.webServerRelativeUrl;
    // Handle cases like http://server site collection, where webServerRelativeUrl will be '/'
    return webServerRelativeUrl === '/' || webServerRelativeUrl === ''
        ? webAbsoluteUrl
        : webAbsoluteUrl.substring(0, webAbsoluteUrl.lastIndexOf(webServerRelativeUrl));
}
/**
 * In most cases, returns the webServerRelativeUrl as-is.
 * For the root web (http://server), returns ''.
 *
 * This function is needed because the root web's webServerRelativeUrl will be '/',
 * which is usually not desirable when combining with other paths. For example:
 *    Good:  '/myweb' + '/_api/contextinfo' => '/myweb/_api/contextinfo'
 *    Bad:   '/'      + '/_api/contextinfo' => '//_api/contextinfo'
 *    Fixed: ''       + '/_api/contextinfo' => '/_api/contextinfo'
 *
 * @param pageContext - An ISpPageContext or other object containing the server-relative URL of a web
 */
function getSafeWebServerRelativeUrl(pageContext) {
    'use strict';
    return pageContext.webServerRelativeUrl === '/' ? '' : pageContext.webServerRelativeUrl;
}
/**
 * Returns true if the current web is the root of a site collection associated with a group.
 * Otherwise it returns false.
 */
function isGroupWebContext(pageContext) {
    'use strict';
    return pageContext && !!pageContext.groupId && pageContext.webAbsoluteUrl === pageContext.siteAbsoluteUrl;
}
/**
 * Returns true if the current web is the root web.
 * Otherwise it returns false.
 */
function isRootWebContext(pageContext) {
    'use strict';
    return pageContext && pageContext.webAbsoluteUrl === pageContext.siteAbsoluteUrl;
}
/**
 * Returns true if the current Web is the Root Web of a Teams-connected SPSite.
 * Otherwise it returns false.
 */
function isTeamsRootWebContext(pageContext) {
    'use strict';
    return (pageContext &&
        isRootWebContext(pageContext) &&
        pageContext.groupId &&
        pageContext.isTeamsConnectedSite &&
        !pageContext.isTeamsChannelSite);
}
/**
 * Returns true if the current web templates is one of the modern templates:
 * STS#3, GROUP#0, SITEPAGEPUBLISHING#0, TEAMSCHANNEL#0/1.
 */
function isModernTemplate(pageContext) {
    var modernTemplates = [
        'STS#3',
        'GROUP#0',
        'SITEPAGEPUBLISHING#0',
        'TEAMSCHANNEL#0',
        'TEAMSCHANNEL#1'
    ];
    return modernTemplates.indexOf(pageContext.webTemplateConfiguration) !== -1;
}
/**
 * Helper function to check if current site meet these conditions:
 *     1. home site
 *     2. hub site
 *     3. with extended header layout
 * @param spPageContext page context instance
 */
function isHomePlusHubWithExtendedHeader(spPageContext) {
    return !!(spPageContext.headerLayout === _models_chrome_ChromeOptions__WEBPACK_IMPORTED_MODULE_0__["UnifiedHeaderLayout"].extended && isHomePlusHub(spPageContext));
}
/**
 * Helper function to check if current site meet these conditions:
 *     1. home site
 *     2. hub site
 */
function isHomePlusHub(spPageContext) {
    return !!(isHomeSite(spPageContext) && spPageContext.isHubSite);
}
/**
 * Helper function to check if current site is configured as a home site
 * @param spPageContext page context instance
 */
function isHomeSite(spPageContext) {
    return !!(spPageContext.companyPortalReference &&
        spPageContext.companyPortalReference.SiteId &&
        spPageContext.siteId &&
        spPageContext.siteId.indexOf(spPageContext.companyPortalReference.SiteId) >= 0);
}
/**
 * Helper function to check if the current user is anonymous or a guest of any kind.
 */
function isAnonymousOrGuest(spPageContext) {
    return !!(spPageContext.isAnonymousGuestUser ||
        spPageContext.isExternalGuestUser ||
        spPageContext.isEmailAuthenticationGuestUser ||
        spPageContext.isNativeFederatedUser);
}
/**
 * Helper function to check if the app bar should load or not in the current context.
 */
function shouldLoadAppBar(spPageContext) {
    return (!isAnonymousOrGuest(spPageContext) && spPageContext.appBarParams && !spPageContext.appBarParams.isDisabled);
}
//# sourceMappingURL=ISpPageContext.js.map

/***/ }),

/***/ "I5DX":
/*!*****************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-utilities@29.7.9_5d977624104b06c7bcaa2de974ff51f1/node_modules/@ms/odsp-utilities/lib/uri/Uri.js ***!
  \*****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ms/odsp-core-bundle */ "K9kD");
/* harmony import */ var _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__["Uri"]; });

// Loading @ms/odsp-utilities/./lib/uri/Uri.js



/***/ }),

/***/ "Joik":
/*!**********************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-utilities@29.7.9_5d977624104b06c7bcaa2de974ff51f1/node_modules/@ms/odsp-utilities/lib/logging/events/Api.event.js ***!
  \**********************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ms/odsp-utilities-bundle */ "y88i");
/* harmony import */ var _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_0__["Api"]; });

// Loading @ms/odsp-utilities/./lib/logging/events/Api.event.js



/***/ }),

/***/ "PayJ":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-datasources@45.13.10_e509c819ab980023b76e5746ec0fc9e2/node_modules/@ms/odsp-datasources/lib/dataSources/base/DataRequestor.js ***!
  \**********************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ms/odsp-core-bundle */ "K9kD");
/* harmony import */ var _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__["DataRequestor"]; });

// Loading @ms/odsp-datasources/./lib/dataSources/base/DataRequestor.js



/***/ }),

/***/ "QUgr":
/*!*******************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-utilities@29.7.9_5d977624104b06c7bcaa2de974ff51f1/node_modules/@ms/odsp-utilities/lib/killswitch/Killswitch.js ***!
  \*******************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ms/odsp-core-bundle */ "K9kD");
/* harmony import */ var _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
// Loading @ms/odsp-utilities/./lib/killswitch/Killswitch.js


/***/ }),

/***/ "UeHE":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-datasources@45.13.10_e509c819ab980023b76e5746ec0fc9e2/node_modules/@ms/odsp-datasources/lib/utilities/peoplePicker/GraphPeoplePickerHelper.js ***!
  \**************************************************************************************************************************************************************************************************************/
/*! exports provided: PeoplePickerGraph, GraphPeoplePickerHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PeoplePickerGraph", function() { return PeoplePickerGraph; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GraphPeoplePickerHelper", function() { return GraphPeoplePickerHelper; });
/* harmony import */ var _ms_odsp_utilities_lib_async_Promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ms/odsp-utilities/lib/async/Promise */ "7Ihg");
/* harmony import */ var _ms_odsp_utilities_lib_features_FeatureOverrides__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ms/odsp-utilities/lib/features/FeatureOverrides */ "iVgB");
/* harmony import */ var _ms_odsp_utilities_lib_logging_events_Qos_event__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ms/odsp-utilities/lib/logging/events/Qos.event */ "c09w");
/* harmony import */ var _ms_odsp_utilities_lib_models_store_BaseDataStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ms/odsp-utilities/lib/models/store/BaseDataStore */ "18dJ");
/* harmony import */ var _ms_odsp_utilities_lib_models_store_DataStoreCachingType__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ms/odsp-utilities/lib/models/store/DataStoreCachingType */ "EjJ3");





var PeoplePickerGraph = { ODB: 387 };
var STORE_KEY = 'PeoplePicker';
var DISABLE_GRAPH_KEY = 'DisableGraph';
var GraphPeoplePickerHelper = /** @class */ (function () {
    function GraphPeoplePickerHelper(params, dependencies) {
        this._pageContext = dependencies.pageContext;
        this._sharingContextInformation = dependencies.sharingContextInformation;
        this._oAuthTokenProvider = dependencies.oAuthTokenProvider;
        if (this._sharingContextInformation && this._sharingContextInformation.additionalTokens) {
            this._graphToken = this._sharingContextInformation.additionalTokens.graphToken;
        }
        this.initializeDataStore();
    }
    /**
     * Returns whether or not we are able to use Graph for people search. Graph calls can be disabled if the OAuth call
     * previously failed, if we are token authenticated (Acquire only supports cookie auth), or if the user isn't in the
     * A/B experiment to use Graph.
     */
    GraphPeoplePickerHelper.prototype.canUseGraph = function () {
        if (this._graphToken) {
            return true;
        }
        // We can't call Graph On-Prem
        if (this._pageContext && !this._pageContext.isSPO) {
            return false;
        }
        // Disable Graph if we're authenticated with an access token. Currently, Graph calls are only supported with cookie auth.
        if (this._pageContext && !!this._pageContext.authToken) {
            return false;
        }
        var canUseGraph = this._pageContext && this._oAuthTokenProvider && _ms_odsp_utilities_lib_features_FeatureOverrides__WEBPACK_IMPORTED_MODULE_1__["default"].isFeatureEnabled(PeoplePickerGraph);
        if (this._dataStore) {
            canUseGraph =
                canUseGraph && !this._dataStore.getValue(DISABLE_GRAPH_KEY, _ms_odsp_utilities_lib_models_store_DataStoreCachingType__WEBPACK_IMPORTED_MODULE_4__["default"].session);
        }
        return canUseGraph;
    };
    /**
     * Store flag to disable Graph calls in session storage so we don't keep making OAuth token calls that will error.
     * The calls are expensive and if the user is unable to call Graph we shouldn't keep trying. Since some errors are
     * recoverable outside the session, don't scope to something as long-lived as local storage.
     */
    GraphPeoplePickerHelper.prototype.disableGraphCallsForPicker = function () {
        this.initializeDataStore();
        this._dataStore.setValue(DISABLE_GRAPH_KEY, true, _ms_odsp_utilities_lib_models_store_DataStoreCachingType__WEBPACK_IMPORTED_MODULE_4__["default"].session);
    };
    /**
     * Retrieves an access token for calling MS Graph.
     */
    GraphPeoplePickerHelper.prototype.getGraphToken = function () {
        var _this = this;
        if (this._graphToken) {
            return _ms_odsp_utilities_lib_async_Promise__WEBPACK_IMPORTED_MODULE_0__["default"].resolve(this._graphToken);
        }
        if (this._oAuthTokenProvider) {
            /**
             * OAuthTokenProvider already logs QOS events for its calls but we want to measure retrieving Graph tokens from within the people picker
             * separately. This allows us to track how often users are forced into the fallback logic scenario.
             */
            var qos_1 = new _ms_odsp_utilities_lib_logging_events_Qos_event__WEBPACK_IMPORTED_MODULE_2__["Qos"]({ name: 'PeoplePicker.GetGraphToken' });
            return this._oAuthTokenProvider.getToken('https://graph.microsoft.com').then(function (oAuthToken) {
                qos_1.end({
                    resultType: _ms_odsp_utilities_lib_logging_events_Qos_event__WEBPACK_IMPORTED_MODULE_2__["ResultTypeEnum"].Success
                });
                return oAuthToken;
            }, function (error) {
                if (_ms_odsp_utilities_lib_async_Promise__WEBPACK_IMPORTED_MODULE_0__["default"].isCanceled(error)) {
                    qos_1.end({
                        resultType: _ms_odsp_utilities_lib_logging_events_Qos_event__WEBPACK_IMPORTED_MODULE_2__["ResultTypeEnum"].ExpectedFailure,
                        resultCode: 'Canceled'
                    });
                    return _ms_odsp_utilities_lib_async_Promise__WEBPACK_IMPORTED_MODULE_0__["default"].reject(error);
                }
                else {
                    qos_1.end({
                        resultCode: 'PeoplePicker.GetGraphTokenError',
                        resultType: _ms_odsp_utilities_lib_logging_events_Qos_event__WEBPACK_IMPORTED_MODULE_2__["ResultTypeEnum"].Failure,
                        extraData: {
                            serverErrorCode: error['_serverErrorCode'],
                            message: error.message
                        }
                    });
                    // If the Acquire call fails, disable future attempts to retrieve the Graph token for the current session.
                    _this.disableGraphCallsForPicker();
                }
                return null;
            });
        }
        return null;
    };
    GraphPeoplePickerHelper.prototype.initializeDataStore = function () {
        if (!this._dataStore) {
            this._dataStore = new _ms_odsp_utilities_lib_models_store_BaseDataStore__WEBPACK_IMPORTED_MODULE_3__["default"](STORE_KEY, _ms_odsp_utilities_lib_models_store_DataStoreCachingType__WEBPACK_IMPORTED_MODULE_4__["default"].session);
        }
    };
    return GraphPeoplePickerHelper;
}());

//# sourceMappingURL=GraphPeoplePickerHelper.js.map

/***/ }),

/***/ "Vb17":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-datasources@45.13.10_e509c819ab980023b76e5746ec0fc9e2/node_modules/@ms/odsp-datasources/lib/models/chrome/ChromeOptions.js ***!
  \*******************************************************************************************************************************************************************************************/
/*! exports provided: ChromeControlType, NavPlacementType, HeaderLayoutType, UnifiedHeaderLayout, LogoAlignment, FooterLayout, FooterEmphasis */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChromeControlType", function() { return ChromeControlType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavPlacementType", function() { return NavPlacementType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderLayoutType", function() { return HeaderLayoutType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnifiedHeaderLayout", function() { return UnifiedHeaderLayout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoAlignment", function() { return LogoAlignment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterLayout", function() { return FooterLayout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterEmphasis", function() { return FooterEmphasis; });
/**
 * Types of supported chrome controls
 */
var ChromeControlType;
(function (ChromeControlType) {
    ChromeControlType[ChromeControlType["HEADER"] = 0] = "HEADER";
    ChromeControlType[ChromeControlType["NAV"] = 1] = "NAV";
    ChromeControlType[ChromeControlType["FOOTER"] = 2] = "FOOTER";
    ChromeControlType[ChromeControlType["SEARCHBOX"] = 3] = "SEARCHBOX";
})(ChromeControlType || (ChromeControlType = {}));
var NavPlacementType;
(function (NavPlacementType) {
    NavPlacementType[NavPlacementType["LEFT"] = 0] = "LEFT";
    NavPlacementType[NavPlacementType["HORIZONTAL"] = 1] = "HORIZONTAL";
})(NavPlacementType || (NavPlacementType = {}));
/**
 * @deprecated see UnifiedHeaderLayout
 * Defines supported layout type for composite header control.
 * Currently the layout type is indicated from nav placement.
 */
var HeaderLayoutType;
(function (HeaderLayoutType) {
    /** Composite header control takes full width of the page */
    HeaderLayoutType[HeaderLayoutType["FULLBLEED"] = 0] = "FULLBLEED";
    /** Composite header control is placed on a page with left nav */
    HeaderLayoutType[HeaderLayoutType["WITHLEFTNAV"] = 1] = "WITHLEFTNAV";
})(HeaderLayoutType || (HeaderLayoutType = {}));
/** The layout to use for the new UnifiedHeader, which replaces the old headers. */
var UnifiedHeaderLayout;
(function (UnifiedHeaderLayout) {
    /** @deprecated none, don't use the UnifiedHeader and fall back to the old headers */
    UnifiedHeaderLayout[UnifiedHeaderLayout["none"] = 0] = "none";
    /** Large */
    UnifiedHeaderLayout[UnifiedHeaderLayout["standard"] = 1] = "standard";
    /** Medium */
    UnifiedHeaderLayout[UnifiedHeaderLayout["compact"] = 2] = "compact";
    /** @deprecated not currently supported */
    UnifiedHeaderLayout[UnifiedHeaderLayout["minimal"] = 3] = "minimal";
    /** Extended */
    UnifiedHeaderLayout[UnifiedHeaderLayout["extended"] = 4] = "extended";
})(UnifiedHeaderLayout || (UnifiedHeaderLayout = {}));
/** Logo alignment of extended header layout */
var LogoAlignment;
(function (LogoAlignment) {
    LogoAlignment[LogoAlignment["left"] = 0] = "left";
    LogoAlignment[LogoAlignment["middle"] = 1] = "middle";
    LogoAlignment[LogoAlignment["right"] = 2] = "right";
})(LogoAlignment || (LogoAlignment = {}));
/**
 * The layout to use for the footer
 */
var FooterLayout;
(function (FooterLayout) {
    FooterLayout[FooterLayout["SIMPLE"] = 0] = "SIMPLE";
    FooterLayout[FooterLayout["EXTENDED"] = 1] = "EXTENDED";
    FooterLayout[FooterLayout["STACKED"] = 2] = "STACKED";
})(FooterLayout || (FooterLayout = {}));
/**
 * The emphasis to use in the footer.
 * Note that this is different than the enum ordering that fabric uses, in order
 * to have strong be the default for unset variants in the property flags
 */
var FooterEmphasis;
(function (FooterEmphasis) {
    FooterEmphasis[FooterEmphasis["Strong"] = 0] = "Strong";
    FooterEmphasis[FooterEmphasis["Neutral"] = 1] = "Neutral";
    FooterEmphasis[FooterEmphasis["Soft"] = 2] = "Soft";
    FooterEmphasis[FooterEmphasis["None"] = 3] = "None";
})(FooterEmphasis || (FooterEmphasis = {}));
//# sourceMappingURL=ChromeOptions.js.map

/***/ }),

/***/ "c09w":
/*!**********************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-utilities@29.7.9_5d977624104b06c7bcaa2de974ff51f1/node_modules/@ms/odsp-utilities/lib/logging/events/Qos.event.js ***!
  \**********************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ms/odsp-core-bundle */ "K9kD");
/* harmony import */ var _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__["Qos"]; });

// Loading @ms/odsp-utilities/./lib/logging/events/Qos.event.js



/***/ }),

/***/ "eT67":
/*!**********************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/telemetry-manager@1.1.3/node_modules/@ms/telemetry-manager/lib/events/Qos.event.js ***!
  \**********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ms/odsp-core-bundle */ "K9kD");
/* harmony import */ var _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__["Qos"]; });

// Loading @ms/telemetry-manager/./lib/events/Qos.event.js



/***/ }),

/***/ "iVgB":
/*!***********************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-utilities@29.7.9_5d977624104b06c7bcaa2de974ff51f1/node_modules/@ms/odsp-utilities/lib/features/FeatureOverrides.js ***!
  \***********************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ms/odsp-core-bundle */ "K9kD");
/* harmony import */ var _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__["FeatureOverrides"]; });

// Loading @ms/odsp-utilities/./lib/features/FeatureOverrides.js



/***/ }),

/***/ "lxGK":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-datasources@45.13.10_e509c819ab980023b76e5746ec0fc9e2/node_modules/@ms/odsp-datasources/lib/dataSources/base/SyncTelemetryHandler.js ***!
  \*****************************************************************************************************************************************************************************************************/
/*! exports provided: getSyncTelemetryHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSyncTelemetryHandler", function() { return getSyncTelemetryHandler; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ms_telemetry_manager_lib_events_Qos_event__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ms/telemetry-manager/lib/events/Qos.event */ "eT67");


function getSyncTelemetryHandler(dataSyncClient, telemetryHandler) {
    return function (input, endpoint) {
        var eventData = input.eventData;
        var extraData = eventData.extraData;
        var syncQos = {
            performanceEntry: extraData && extraData['performanceEntry'],
            httpStatus: extraData && extraData['HttpStatus'],
            correlationId: extraData && extraData['CorrelationId'],
            succeeded: (eventData && eventData.resultType === _ms_telemetry_manager_lib_events_Qos_event__WEBPACK_IMPORTED_MODULE_1__["ResultTypeEnum"].Success) || false,
            resultCode: eventData && eventData.resultCode,
            endpoint: endpoint
        };
        var handlerOutput = telemetryHandler && telemetryHandler(input);
        var canRetrySync = dataSyncClient.onRequestComplete(syncQos);
        extraData['dataSyncQos'] = dataSyncClient.getQosInfo();
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, (handlerOutput || {})), { eventData: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, (handlerOutput ? handlerOutput.eventData : eventData)), { extraData: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, (handlerOutput ? handlerOutput.eventData.extraData : eventData.extraData)), dataSyncClient.getQosInfo()) }), canRetry: canRetrySync && (!handlerOutput || handlerOutput.canRetry) });
    };
}
//# sourceMappingURL=SyncTelemetryHandler.js.map

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

/***/ "nXow":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-utilities@29.7.9_5d977624104b06c7bcaa2de974ff51f1/node_modules/@ms/odsp-utilities/lib/logging/RequestDurationLoggingHelper.js ***!
  \**********************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ms/odsp-utilities-bundle */ "y88i");
/* harmony import */ var _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
// Loading @ms/odsp-utilities/./lib/logging/RequestDurationLoggingHelper.js


/***/ }),

/***/ "qJrk":
/*!*****************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/telemetry-manager@1.1.3/node_modules/@ms/telemetry-manager/lib/ErrorHelper.js ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ms/odsp-core-bundle */ "K9kD");
/* harmony import */ var _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__["OdspErrorHelper"]; });

// Loading @ms/telemetry-manager/./lib/ErrorHelper.js



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

/***/ }),

/***/ "swgI":
/*!*******************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-graph@8.4.9_19c80a772e784933045edf88c0aed6c1/node_modules/@ms/odsp-graph/lib/models/error/Error.js ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: GraphError, getQosExtraDataFromError, isGraphError, getErrorResolution, getResultCodeFromError, getErrorResolutionFromResponse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GraphError", function() { return GraphError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getQosExtraDataFromError", function() { return getQosExtraDataFromError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isGraphError", function() { return isGraphError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getErrorResolution", function() { return getErrorResolution; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getResultCodeFromError", function() { return getResultCodeFromError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getErrorResolutionFromResponse", function() { return getErrorResolutionFromResponse; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ms_utilities_error_lib_ApiError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ms/utilities-error/lib/ApiError */ "6e34");


var GraphError = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(GraphError, _super);
    function GraphError(error, params) {
        var _this = this;
        var _a = params.response, _b = (_a === void 0 ? {} : _a).error, _c = (_b === void 0 ? {} : _b).innerError, _d = (_c === void 0 ? {} : _c).stackTrace, stackTrace = _d === void 0 ? '' : _d, response = params.response, request = params.request, status = params.status, _e = params.code, code = _e === void 0 ? getErrorResolutionFromResponse(response, status, function (code) { return "" + code; }) ||
            'unhandled' : _e;
        var props = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ innerError: error, code: code }, params);
        _this = _super.call(this, props) || this;
        _this.name = 'GraphError';
        _this.response = response;
        _this.status = status;
        _this.serverStack = stackTrace;
        _this.request = request;
        _this.error = error;
        return _this;
    }
    return GraphError;
}(_ms_utilities_error_lib_ApiError__WEBPACK_IMPORTED_MODULE_1__["ApiError"]));

var errorMessage = 'errorMessage';
var vroomStatus = 'vroomStatus';
var vroomErrorCode = 'vroomErrorCode';
var vroomErrorMessage = 'vroomErrorMessage';
var vroomErrorInnerCode = 'vroomErrorInnerCode';
var vroomErrorInnerMessage = 'vroomErrorInnerMessage';
var vroomErrorInnerDebugMessage = 'vroomErrorInnerDebugMessage';
var vroomErrorInnerStack = 'vroomErrorInnerStack';
function getQosExtraDataFromError(error) {
    var extraData = {};
    extraData[errorMessage] = error.message;
    if (isGraphError(error)) {
        extraData[vroomStatus] = error.status;
        var response = error.response;
        if (response && response.error) {
            var responseError = response.error;
            extraData[vroomErrorCode] = responseError.code;
            extraData[vroomErrorMessage] = responseError.message;
            var innerError = responseError.innerError || responseError.innererror;
            if (innerError) {
                extraData[vroomErrorInnerCode] = innerError.code;
                extraData[vroomErrorInnerMessage] = innerError.message;
                extraData[vroomErrorInnerDebugMessage] = innerError.debugMessage;
                extraData[vroomErrorInnerStack] = innerError.stackTrace;
            }
        }
    }
    return extraData;
}
function isGraphError(error) {
    return error instanceof GraphError;
}
function getErrorResolution(error, resolveError) {
    if (isGraphError(error)) {
        var response = error.response, status_1 = error.status;
        return getErrorResolutionFromResponse(response, status_1, function (code) {
            return resolveError(code, error);
        });
    }
}
function getResultCodeFromError(error) {
    return getErrorResolution(error, function (code) { return "" + code; }) || 'unhandled';
}
function getErrorResolutionFromResponse(response, status, resolveError) {
    if (response) {
        var innerErrors = [];
        var innerError = response.error;
        while (innerError) {
            innerErrors.push(innerError);
            innerError = innerError.innerError || innerError.innererror;
        }
        while ((innerError = innerErrors.pop())) {
            if (typeof innerError.code !== 'undefined') {
                var resolution = resolveError(innerError.code);
                if (resolution !== undefined) {
                    return resolution;
                }
            }
        }
    }
    return resolveError(status);
}
//# sourceMappingURL=Error.js.map

/***/ }),

/***/ "unYt":
/*!*************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/utilities-error@1.0.0/node_modules/@ms/utilities-error/lib/CustomError.js ***!
  \*************************************************************************************************************************************/
/*! exports provided: CustomError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomError", function() { return CustomError; });
/**
 * Base class for custom errors.
 * Derive sub-classes from this class to implement errors which support
 * strongly-typed constructors and visible fields.
 * @public
 *
 * @remarks
 * The pattern to extend Error properly is documented here:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error
 */
var CustomError = /** @class */ (function () {
    function CustomError(props) {
        if (props === void 0) { props = {}; }
        // The real error will be returned.
        var error = new Error(props.message || (props.innerError && props.innerError.message));
        this.message = error.message;
        this.innerError = props.innerError;
        this.stack = error.stack;
        this.name = error.name;
        // Avoid using assign since some platforms (native) do not enumerate prototyped objects.
        for (var key in this) {
            if (Object.prototype.hasOwnProperty.call(this, key)) {
                // @ts-ignore TOO BAD
                error[key] = this[key];
            }
        }
        var customErrorType = Object.getPrototypeOf(this);
        // @ts-ignore
        if (Error.captureStackTrace) {
            // @ts-ignore
            Error.captureStackTrace(error, customErrorType);
        }
        if (Object.setPrototypeOf) {
            // Force the error instance to use the custom prototype.
            // This works on all supported browsers, except PhantomJS.
            Object.setPrototypeOf(error, customErrorType);
            return error;
        }
    }
    return CustomError;
}());

// For Error, need to manually extend the built-in type since TypeScript does not emit the necessary output.
if (Object.setPrototypeOf) {
    // This works on all supported browsers, except PhantomJS.
    CustomError.prototype = Object.create(Error.prototype, {
        constructor: {
            value: Error,
            enumerable: false,
            writable: true,
            configurable: true
        }
    });
    Object.setPrototypeOf(CustomError, Error);
}
//# sourceMappingURL=CustomError.js.map

/***/ }),

/***/ "vmDi":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-utilities@29.7.9_5d977624104b06c7bcaa2de974ff51f1/node_modules/@ms/odsp-utilities/lib/alternativeUrls/SPAlternativeUrls.js ***!
  \*******************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Loading @ms/odsp-utilities/./lib/alternativeUrls/SPAlternativeUrls.js
var pkg = __webpack_require__(/*! @ms/odsp-core-bundle */ "K9kD");
module.exports = pkg.SPAlternativeUrls;

/***/ }),

/***/ "vo05":
/*!*******************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-utilities@29.7.9_5d977624104b06c7bcaa2de974ff51f1/node_modules/@ms/odsp-utilities/lib/guid/Guid.js ***!
  \*******************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ms/odsp-core-bundle */ "K9kD");
/* harmony import */ var _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__["Guid"]; });

// Loading @ms/odsp-utilities/./lib/guid/Guid.js



/***/ }),

/***/ "yImb":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-datasources@45.13.10_e509c819ab980023b76e5746ec0fc9e2/node_modules/@ms/odsp-datasources/lib/dataSources/peoplePicker/spo/PeoplePickerDataSource.js ***!
  \*******************************************************************************************************************************************************************************************************************/
/*! exports provided: PeoplePickerDataSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PeoplePickerDataSource", function() { return PeoplePickerDataSource; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _interfaces_ISpPageContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../interfaces/ISpPageContext */ "GlwB");
/* harmony import */ var _base_DataSource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../base/DataSource */ "AfY0");
/* harmony import */ var _roleAssignments_PrincipalType__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../roleAssignments/PrincipalType */ "2+UY");
/* harmony import */ var _ms_odsp_utilities_lib_async_Promise__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ms/odsp-utilities/lib/async/Promise */ "7Ihg");
/* harmony import */ var _utilities_peoplePicker_SubstratePeoplePickerHelper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../utilities/peoplePicker/SubstratePeoplePickerHelper */ "8VvQ");
/* harmony import */ var _utilities_url_ApiUrlHelper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../utilities/url/ApiUrlHelper */ "sVQZ");
/* harmony import */ var _utilities_url_ItemUrlHelper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../utilities/url/ItemUrlHelper */ "+1yd");
/* harmony import */ var _ms_odsp_utilities_lib_alternativeUrls_SPAlternativeUrls__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ms/odsp-utilities/lib/alternativeUrls/SPAlternativeUrls */ "vmDi");
/* harmony import */ var _ms_odsp_utilities_lib_alternativeUrls_SPAlternativeUrls__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_ms_odsp_utilities_lib_alternativeUrls_SPAlternativeUrls__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _ms_odsp_graph_lib_base_dataRequestor_DataRequestor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ms/odsp-graph/lib/base/dataRequestor/DataRequestor */ "6r7H");
/* harmony import */ var _ms_odsp_graph_lib_models_error_Error__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ms/odsp-graph/lib/models/error/Error */ "swgI");
/* harmony import */ var _ms_odsp_utilities_lib_killswitch_Killswitch__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ms/odsp-utilities/lib/killswitch/Killswitch */ "QUgr");
/* harmony import */ var _ms_odsp_utilities_lib_string_EmailAddressParser__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ms/odsp-utilities/lib/string/EmailAddressParser */ "GbJQ");
/* harmony import */ var _ms_odsp_utilities_lib_uri_Uri__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ms/odsp-utilities/lib/uri/Uri */ "I5DX");
// OneDrive:CoverageThreshold(50)














var PeoplePickerDataSource = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(PeoplePickerDataSource, _super);
    function PeoplePickerDataSource(paramsOrOriginalParams, dependencies) {
        var _this = this;
        var pageContext = isOriginalParams(paramsOrOriginalParams)
            ? paramsOrOriginalParams
            : dependencies.pageContext;
        _this = _super.call(this, {}, {
            pageContext: pageContext
        }) || this;
        var apiUrlHelper = isOriginalParams(paramsOrOriginalParams)
            ? paramsOrOriginalParams.apiUrlHelper
            : dependencies.apiUrlHelper;
        _this._apiUrlHelper = apiUrlHelper
            ? apiUrlHelper
            : new _utilities_url_ApiUrlHelper__WEBPACK_IMPORTED_MODULE_6__["ApiUrlHelper"]({}, {
                itemUrlHelper: new _utilities_url_ItemUrlHelper__WEBPACK_IMPORTED_MODULE_7__["ItemUrlHelper"]({}, { pageContext: pageContext }),
                pageContext: pageContext
            });
        _this._capabilities = {
            supportsMruCaching: true
        };
        if (dependencies) {
            _this._dataRequestor = dependencies.dataRequestor;
            _this._graphPeoplePickerHelper = dependencies.graphPeoplePickerHelper;
            _this._substratePeoplePickerHelper = dependencies.substratePeoplePickerHelper;
            _this._livePeoplePickerHelper = dependencies.livePeoplePickerHelper;
            _this._getAuthToken = dependencies.getAuthToken;
        }
        _this._invalidPeopleSubTypesKSActivated = _ms_odsp_utilities_lib_killswitch_Killswitch__WEBPACK_IMPORTED_MODULE_11__["Killswitch"].isActivated('daa1be46-12ff-45a4-8c9f-9b3c0f174853', '01/19/2021', 'Ignore invalid PeopleSubtypes.');
        return _this;
    }
    PeoplePickerDataSource.prototype.getCapabilities = function () {
        return this._capabilities;
    };
    PeoplePickerDataSource.prototype.getPersonaDetails = function (accountID) {
        var _this = this;
        var getDataPromise = function (authToken) {
            return _this.dataRequestor.getData({
                url: _this._apiUrlHelper
                    .build()
                    .segment('sp.publishing.personmagazine.GetPersonMagazineUserProfileDataForUser')
                    .parameter('accountName', accountID)
                    .toString(),
                qosName: 'GetPersonaDetails',
                authToken: authToken,
                parseResponse: function (responseText) {
                    var transformPerson = function (rawPerson) { return ({
                        name: rawPerson.DisplayName,
                        email: rawPerson.Email,
                        userId: rawPerson.AccountName,
                        office: rawPerson.Office,
                        image: rawPerson.PictureUrl,
                        job: rawPerson.Title,
                        department: rawPerson.DepartmentName,
                        phone: rawPerson.Phone,
                        sip: rawPerson.Lync
                    }); };
                    var response = JSON.parse(responseText);
                    var rawProfile = response.d.GetPersonMagazineUserProfileDataForUser;
                    var ret = {
                        personDetails: transformPerson(rawProfile.Primary),
                        managerChain: rawProfile.ManagerChain.results.map(transformPerson),
                        directReports: rawProfile.DirectReports.results.map(transformPerson)
                    };
                    ret.personDetails.profilePage =
                        Object(_interfaces_ISpPageContext__WEBPACK_IMPORTED_MODULE_1__["getServerUrl"])(_this._pageContext) +
                            '/_layouts/15/me.aspx?p=' +
                            encodeURIComponent(ret.personDetails.sip) +
                            '&origin=ProfileODBCard';
                    return ret;
                }
            });
        };
        return _ms_odsp_utilities_lib_async_Promise__WEBPACK_IMPORTED_MODULE_4__["default"].resolve(this._getAuthToken && this._getAuthToken(this._pageContext.webAbsoluteUrl)).then(getDataPromise);
    };
    PeoplePickerDataSource.prototype.getPickerEntityInformation = function (person) {
        var _this = this;
        var groupId = 0;
        if (person.principalType === _roleAssignments_PrincipalType__WEBPACK_IMPORTED_MODULE_3__["default"].sharePointGroup) {
            groupId = Number(person.rawPersonData.EntityData.SPGroupID);
        }
        var additionalPostData = JSON.stringify({
            entityInformationRequest: {
                PrincipalType: person.principalType,
                EmailAddress: person.email,
                GroupId: groupId
            }
        });
        var getDataPromise = function (authToken) {
            return _this.dataRequestor.getData({
                url: _this._apiUrlHelper
                    .build()
                    .segment('SP.UI.ApplicationPages.ClientPeoplePickerWebServiceInterface.GetPickerEntityInformation')
                    .toString(),
                additionalPostData: additionalPostData,
                qosName: 'getPickerEntityInformation',
                authToken: authToken,
                noRedirect: true,
                parseResponse: function (responseText) {
                    var response = JSON.parse(responseText);
                    var entityInformation = {
                        totalMemberCount: response.d.TotalMemberCount,
                        person: person
                    };
                    return entityInformation;
                }
            });
        };
        return _ms_odsp_utilities_lib_async_Promise__WEBPACK_IMPORTED_MODULE_4__["default"].resolve(this._getAuthToken && this._getAuthToken(this._pageContext.webAbsoluteUrl)).then(getDataPromise);
    };
    PeoplePickerDataSource.prototype.resolve = function (query, context) {
        var _this = this;
        var getDataPromise = function (authToken) {
            return _this.dataRequestor.getData({
                url: _this._apiUrlHelper
                    .build()
                    .segment('SP.UI.ApplicationPages.ClientPeoplePickerWebServiceInterface.ClientPeoplePickerResolveUser')
                    .toString(),
                additionalPostData: _this._constructPostBody(query, context),
                qosName: 'Resolve',
                authToken: authToken,
                parseResponse: function (responseText) {
                    var response = JSON.parse(responseText);
                    var responseData = JSON.parse(response.d.ClientPeoplePickerResolveUser);
                    var personArray = [];
                    personArray[0] = responseData;
                    if (_ms_odsp_utilities_lib_killswitch_Killswitch__WEBPACK_IMPORTED_MODULE_11__["Killswitch"].isActivated('067ca2b4-2244-4153-8dfa-d11e6b4487bb', '03/19/2018', 'Only overwrite display text if it is null or empty')) {
                        if (!responseData.IsResolved) {
                            personArray[0].DisplayText = responseData.Key;
                        }
                    }
                    else {
                        if (!responseData.IsResolved) {
                            if (!!responseData.EntityData.IsBlockedOnODB &&
                                responseData.EntityData.IsBlockedOnODB.toLowerCase() === 'true') {
                                //do nothing for ODB policy.
                            }
                            else {
                                personArray[0].DisplayText = responseData.Key;
                            }
                        }
                    }
                    personArray = _this._transformData(personArray, context.filterExternalUsers);
                    var person = personArray[0];
                    if (context.filterExternalUsers && person && person.entityType === 1 /* externalUser */) {
                        // If filterExternalUsers is passed then mark any existing external user in directory as unresolved
                        // and change its entity type to default.
                        person.isResolved = false;
                        person.entityType = 0 /* regularUser */;
                    }
                    else if (context.blockViaPolicy &&
                        !context.filterExternalUsers &&
                        person &&
                        !person.isResolved &&
                        person.multipleMatches.length === 0) {
                        person.isResolved = true;
                        person.isExternal = true;
                        person.entityType = 1 /* externalUser */;
                    }
                    if (context.isGraphDistributionList && context.useGraph && person.isExternal) {
                        person.entityType = 2 /* group */;
                        person.principalType = _roleAssignments_PrincipalType__WEBPACK_IMPORTED_MODULE_3__["default"].distributionList;
                    }
                    return person;
                }
            });
        };
        return _ms_odsp_utilities_lib_async_Promise__WEBPACK_IMPORTED_MODULE_4__["default"].resolve(this._getAuthToken && this._getAuthToken(this._pageContext.webAbsoluteUrl)).then(getDataPromise);
    };
    PeoplePickerDataSource.prototype.canUseGraph = function (context) {
        var canUseGraph = context &&
            context.useGraph &&
            this._graphPeoplePickerHelper &&
            this._graphPeoplePickerHelper.canUseGraph();
        if (canUseGraph && !this._dataRequestor) {
            this._dataRequestor = new _ms_odsp_graph_lib_base_dataRequestor_DataRequestor__WEBPACK_IMPORTED_MODULE_9__["default"]({}, {});
        }
        return canUseGraph;
    };
    PeoplePickerDataSource.prototype.canUseSubstrate = function (context) {
        var canUseSubstrate = context.useSubstrate &&
            this._substratePeoplePickerHelper &&
            this._substratePeoplePickerHelper.canUseSubstrate();
        if (canUseSubstrate && !this._dataRequestor) {
            this._dataRequestor = new _ms_odsp_graph_lib_base_dataRequestor_DataRequestor__WEBPACK_IMPORTED_MODULE_9__["default"]({}, {});
        }
        return canUseSubstrate;
    };
    PeoplePickerDataSource.prototype.getLivePersonaPickerHelper = function () {
        return this._livePeoplePickerHelper;
    };
    PeoplePickerDataSource.prototype.search = function (query, context) {
        if (this.canUseSubstrate(context)) {
            return this._substrateSearch(query, context);
        }
        else if (this.canUseGraph(context)) {
            return this._graphSearch(query, context);
        }
        else {
            return this.sharePointSearch(query, context);
        }
    };
    PeoplePickerDataSource.prototype.sharePointSearch = function (query, context) {
        var _this = this;
        // Make sure to hide the search directory button when we're already searching via SP
        if (context.onToggleGetMoreResults) {
            context.onToggleGetMoreResults(false);
        }
        var getDataPromise = function (authToken) {
            return _this.dataRequestor.getData({
                url: _this._apiUrlHelper
                    .build()
                    .segment('SP.UI.ApplicationPages.ClientPeoplePickerWebServiceInterface.ClientPeoplePickerSearchUser')
                    .toString(),
                additionalPostData: _this._constructPostBody(query, context),
                qosName: 'Search',
                authToken: authToken,
                parseResponse: function (responseText) {
                    var _a = context.allowSharePointGroups, allowSharePointGroups = _a === void 0 ? true : _a, filterExternalUsers = context.filterExternalUsers, forceResolve = context.forceResolve;
                    var response = JSON.parse(responseText);
                    var peopleArray = JSON.parse(response.d.ClientPeoplePickerSearchUser);
                    var entities = _this._transformData(peopleArray, filterExternalUsers);
                    if (filterExternalUsers) {
                        entities = entities.filter(function (person) { return person.entityType !== 1 /* externalUser */; });
                    }
                    var noResults = !entities.length;
                    entities = entities.filter(function (person) {
                        if (person.principalType === _roleAssignments_PrincipalType__WEBPACK_IMPORTED_MODULE_3__["default"].sharePointGroup) {
                            return allowSharePointGroups;
                        }
                        else if (person.principalType === _roleAssignments_PrincipalType__WEBPACK_IMPORTED_MODULE_3__["default"].securityGroup) {
                            /**
                             * If SharePoint groups are allowed, that means ALL security groups are allowed as well.
                             * If SharePoint groups aren't allowed, that means only email-enabled security groups are allowed.
                             */
                            return allowSharePointGroups || _this._isValidEmail(person.email, true /* isSecurityGroup */);
                        }
                        else {
                            return _this._isValidEmail(person.email, false /* isSecurityGroup */);
                        }
                    });
                    if (_ms_odsp_utilities_lib_killswitch_Killswitch__WEBPACK_IMPORTED_MODULE_11__["Killswitch"].isActivated('cc7520a8-6922-4e12-81c1-179764750212', '3/29/2018', 'Disable limiting no results behavior to e-mail addresses.')) {
                        if (forceResolve && noResults) {
                            entities.push({
                                name: query,
                                userId: query,
                                email: query
                            });
                        }
                    }
                    else {
                        /**
                         * If the query returned no results and the query is an email, add
                         * that email as a suggestion.
                         */
                        if (context.resolveEmailIfNoResults !== false &&
                            entities.length === 0 &&
                            _this._isValidEmail(query, false /* isSecurityGroup */)) {
                            var rawData = {
                                Key: query,
                                IsResolved: false
                            };
                            entities.push({
                                email: query,
                                entityType: 1 /* externalUser */,
                                isResolved: false,
                                job: context.fallbackToEmailIfNoJob === false ? undefined : query,
                                name: query,
                                userId: query,
                                rawData: rawData,
                                rawPersonData: rawData,
                                isExternal: true
                            });
                        }
                    }
                    return entities;
                }
            });
        };
        return _ms_odsp_utilities_lib_async_Promise__WEBPACK_IMPORTED_MODULE_4__["default"].resolve(this._getAuthToken && this._getAuthToken(this._pageContext.webAbsoluteUrl)).then(getDataPromise);
    };
    PeoplePickerDataSource.prototype.subscribePresence = function (accountID, fnCallback) {
        var _this = this;
        try {
            this._ensureSkypePresence();
            if (!O365Shell_Shim.SkypeIntegration.isAvailable()) {
                return null; //If skypeIntegration is not available for this user, return null so that we can handle not showing presence gracefully.
            }
            var fnPresenceCallback_1 = function (type) {
                try {
                    switch (type) {
                        case 0: // Microsoft.O365.SuiteApi.SkypeIntegration.SkypePresenceState.Unknown:
                            fnCallback(0 /* Unknown */);
                            break;
                        case 1: // Microsoft.O365.SuiteApi.SkypeIntegration.SkypePresenceState.Online:
                            fnCallback(1 /* Online */);
                            break;
                        case 2: // Microsoft.O365.SuiteApi.SkypeIntegration.SkypePresenceState.Busy:
                            fnCallback(2 /* Busy */);
                            break;
                        case 3: // Microsoft.O365.SuiteApi.SkypeIntegration.SkypePresenceState.DoNotDisturb:
                            fnCallback(3 /* DoNotDisturb */);
                            break;
                        case 4: // Microsoft.O365.SuiteApi.SkypeIntegration.SkypePresenceState.BeRightBack:
                            fnCallback(4 /* BeRightBack */);
                            break;
                        case 5: // Microsoft.O365.SuiteApi.SkypeIntegration.SkypePresenceState.Away:
                            fnCallback(5 /* Away */);
                            break;
                        case 6: // Microsoft.O365.SuiteApi.SkypeIntegration.SkypePresenceState.Offline:
                            fnCallback(6 /* Offline */);
                            break;
                        case 8: // Microsoft.O365.SuiteApi.SkypeIntegration.SkypePresenceState.Hidden:
                            fnCallback(7 /* Hidden */);
                            break;
                        default:
                            fnCallback(0 /* Unknown */);
                            break;
                    }
                }
                catch (e) {
                    // do nothing
                }
            };
            this._skypeIntegration.TrackPresence(accountID, fnPresenceCallback_1);
            var disposable = {
                dispose: function () {
                    try {
                        _this._skypeIntegration.UntrackPresence(accountID, fnPresenceCallback_1);
                    }
                    catch (e) {
                        // do nothing
                    }
                }
            };
            return disposable;
        }
        catch (e) {
            // do nothing
        }
        return null;
    };
    PeoplePickerDataSource.prototype.sendSourceName = function () {
        return 'PeoplePickerDataSource';
    };
    PeoplePickerDataSource.prototype._constructPostBody = function (query, context) {
        var strBody = {
            queryParams: {
                QueryString: query,
                MaximumEntitySuggestions: context.maximumEntitySuggestions,
                AllowEmailAddresses: context.allowEmailAddresses,
                AllowOnlyEmailAddresses: context.allowOnlyEmailAddresses,
                PrincipalType: context.principalType,
                PrincipalSource: context.principalSource,
                UseSubstrateSearch: context.useSubstrateSearch,
                SharePointGroupID: context.groupID,
                QuerySettings: context.querySettings
            }
        };
        return JSON.stringify(strBody);
    };
    PeoplePickerDataSource.prototype._ensureSkypePresence = function () {
        var _this = this;
        try {
            if (!Boolean(this._skypeIntegration)) {
                var skypeIntegration_1 = new O365Shell_Shim.SkypeIntegration();
                skypeIntegration_1.OnApiReady(function () {
                    _this._skypeIntegration = skypeIntegration_1;
                });
            }
        }
        catch (e) {
            //do nothing. Basically skype presence didn't work so degrade gracefully
        }
    };
    PeoplePickerDataSource.prototype._graphSearch = function (query, context) {
        var _this = this;
        return this._graphPeoplePickerHelper.getGraphToken().then(function (oAuthToken) {
            /**
             * If we don't have a valid auth token, the auth call failed and we should fallback to SP search.
             */
            if (!oAuthToken) {
                return _this.sharePointSearch(query, context);
            }
            /**
             * Currently, mail-enabled security groups and legacy DLs are returned the same way from Graph. The former is an allowed share target while
             * the latter is not. Our two options for dealing with this are to:
             *   1. Call resolve when a user selects a PublicDistributionList returned by Graph. If it's a legacy DL, show an error message to the user.
             *   2. Filter out all PublicDistributionList objects returned by Graph and have the user click through to search the directory for more result
             * Putting this experiment behind a killswitch, not a flight, as calling Graph via the people picker is already behind a flight.
             */
            var graphRequestUrl = new _ms_odsp_utilities_lib_uri_Uri__WEBPACK_IMPORTED_MODULE_13__["default"]("https://graph.microsoft.com/v1.0/me/people");
            if (query) {
                graphRequestUrl.setQueryFromObject({
                    $search: "\"" + query + "\"",
                    $top: '30',
                    $select: 'displayName,scoredEmailAddresses,personType,department,jobTitle,userPrincipalName'
                });
                if (!_ms_odsp_utilities_lib_killswitch_Killswitch__WEBPACK_IMPORTED_MODULE_11__["Killswitch"].isActivated('08c31a2f-5109-4dd9-b6ab-d6ea8fec0d9f', '09/29/2020', 'Fix bug: Should correctly handle PrincipalType in Graph query filter.')) {
                    var personTypeFilter = PeoplePickerDataSource._getPersonTypeFilter(context);
                    if (personTypeFilter) {
                        graphRequestUrl.setQueryParameter('$filter', personTypeFilter);
                    }
                }
                else if (context.filterPublicDistributionList !== false) {
                    graphRequestUrl.setQueryParameter('$filter', "personType/subclass ne 'PublicDistributionList'");
                }
            }
            return _this._dataRequestor
                .send({
                apiName: 'Graph.PeopleSearch',
                path: graphRequestUrl.toString(),
                headers: {
                    Authorization: 'Bearer ' + oAuthToken,
                    'X-PeopleQuery-QuerySources': 'Mailbox,Directory'
                },
                needsAuthorization: false
            })
                .then(function (data) {
                // Enable the "Search Directory" button for Graph search
                if (context.onToggleGetMoreResults) {
                    context.onToggleGetMoreResults(true);
                }
                if (!data || !data.value || data.value.length === 0) {
                    // fall back to SharePoint Search
                    return _this.sharePointSearch(query, context);
                }
                var rawPeople = data.value;
                var people = [];
                rawPeople.forEach(function (rawPerson) {
                    if (!_this._invalidPeopleSubTypesKSActivated &&
                        rawPerson.personType.subclass &&
                        _this._isIgnorablePeopleSubType(rawPerson.personType.subclass)) {
                        return;
                    }
                    var email = rawPerson.scoredEmailAddresses[0]
                        ? rawPerson.scoredEmailAddresses[0].address
                        : '';
                    var key = rawPerson.userPrincipalName &&
                        _this._isValidEmail(rawPerson.userPrincipalName, false /*isSecurityGroup*/)
                        ? rawPerson.userPrincipalName
                        : email;
                    var rawData = { Key: key, IsResolved: false };
                    var isImplicit = rawPerson.personType.subclass === 'ImplicitContact';
                    var isOrganizationUser = rawPerson.personType.subclass === 'OrganizationUser';
                    var isUnifiedGroup = rawPerson.personType.class === 'Group' && rawPerson.personType.subclass === 'UnifiedGroup';
                    var isPublicDistributionList = rawPerson.personType.subclass === 'PublicDistributionList';
                    var imageUrl = Object(_ms_odsp_utilities_lib_alternativeUrls_SPAlternativeUrls__WEBPACK_IMPORTED_MODULE_8__["getUserPhotoUrl"])(email);
                    var person = {
                        department: rawPerson.department,
                        email: email,
                        image: isImplicit ? undefined : imageUrl,
                        job: context.fallbackToEmailIfNoJob === false ? rawPerson.jobTitle : rawPerson.jobTitle || email,
                        name: rawPerson.displayName,
                        providerName: !isOrganizationUser ? undefined : 'Provider',
                        userId: key,
                        rawData: rawData,
                        rawPersonData: rawData,
                        isExternal: !isOrganizationUser,
                        aadObjectId: rawPerson.id
                    };
                    if (isOrganizationUser) {
                        person.entityType = 0 /* regularUser */;
                        person.principalType = _roleAssignments_PrincipalType__WEBPACK_IMPORTED_MODULE_3__["default"].user;
                        person.isResolved = true;
                    }
                    else if (isUnifiedGroup) {
                        person.entityType = 2 /* group */;
                        person.principalType = _roleAssignments_PrincipalType__WEBPACK_IMPORTED_MODULE_3__["default"].securityGroup;
                        person.isResolved = false; // We still want to call resolve on unified groups so that we can get member count for UI
                        person.userId = rawPerson.id; // Unified groups return a guid in rawPerson.userPrincipalName that won't resolve.
                    }
                    else {
                        person.principalType = isPublicDistributionList
                            ? _roleAssignments_PrincipalType__WEBPACK_IMPORTED_MODULE_3__["default"].distributionList
                            : _roleAssignments_PrincipalType__WEBPACK_IMPORTED_MODULE_3__["default"].none;
                        person.entityType =
                            rawPerson.personType.class === 'Group' ? 2 /* group */ : 1 /* externalUser */;
                        person.isResolved = false;
                        person.providerName = undefined;
                    }
                    if (!!person.userId) {
                        people.push(person);
                    }
                });
                /**
                 * If the query returned no results and the query is an email, add
                 * that email as a suggestion.
                 */
                if (context.resolveEmailIfNoResults !== false &&
                    people.length === 0 &&
                    _this._isValidEmail(query, false /* isSecurityGroup */)) {
                    var rawData = {
                        Key: query,
                        IsResolved: false // Set as false to sharing APIs verify user.
                    };
                    people.push({
                        email: query,
                        entityType: 1 /* externalUser */,
                        isResolved: false,
                        job: context.fallbackToEmailIfNoJob === false ? undefined : query,
                        name: query,
                        userId: query,
                        rawData: rawData,
                        rawPersonData: rawData,
                        isExternal: true
                    });
                }
                return people;
            }, function (error) {
                /**
                 * Graph returning a 404 in search means that the resource to search doesn't exist. 401 means
                 * the user did not authenticate correctly. 403 means the user doesn't have permission to call Graph.
                 * Disable calls for the user and fallback to SP search in these cases.
                 */
                if (Object(_ms_odsp_graph_lib_models_error_Error__WEBPACK_IMPORTED_MODULE_10__["isGraphError"])(error)) {
                    switch (error.status) {
                        case 400:
                        case 401:
                        case 403:
                        case 404:
                            _this._graphPeoplePickerHelper.disableGraphCallsForPicker();
                            return _this.sharePointSearch(query, context);
                        default:
                            return _this.sharePointSearch(query, context); // Handle error, probably
                    }
                }
                else if (error.name !== 'Canceled') {
                    _this._graphPeoplePickerHelper.disableGraphCallsForPicker();
                }
                if (error.name === 'Canceled') {
                    return null;
                }
                else {
                    return _this.sharePointSearch(query, context); // Handle error, probably
                }
            });
        });
    };
    PeoplePickerDataSource.prototype._substrateSearch = function (query, context) {
        var _this = this;
        return this._substratePeoplePickerHelper.getSubstrateToken().then(function (oAuthToken) {
            /**
             * If we don't have a valid auth token, the auth call failed and we should fallback to SP search.
             */
            if (!oAuthToken) {
                return _this.sharePointSearch(query, context);
            }
            var segmentIDs = null;
            //do not set array if length is 0
            if (context.siteIBSegmentIDs && context.siteIBSegmentIDs.length > 0) {
                segmentIDs = context.siteIBSegmentIDs;
            }
            var provenances = ['Directory'];
            if (!_ms_odsp_utilities_lib_killswitch_Killswitch__WEBPACK_IMPORTED_MODULE_11__["Killswitch"].isActivated('9403ac4d-b51a-48b3-a4c0-9007477f73ea', '02/18/2020', 'Mailbox Searching in Substrate People Suggestions.')) {
                provenances.splice(0, 0, 'Mailbox');
            }
            var headersDict = {};
            if (!_ms_odsp_utilities_lib_killswitch_Killswitch__WEBPACK_IMPORTED_MODULE_11__["Killswitch"].isActivated('04f09a5b-1c0f-42ef-9b9f-ba8c1e321810', '07/03/2020', 'Removing litoken in Substrate call.')) {
                headersDict = {
                    Authorization: 'Bearer ' + oAuthToken
                };
            }
            else {
                headersDict = {
                    Authorization: 'Bearer ' + oAuthToken,
                    'X-User-Context': 'litoken=' + oAuthToken
                };
            }
            return _this._dataRequestor
                .send({
                apiName: 'Substrate.PeopleSearch',
                path: _utilities_peoplePicker_SubstratePeoplePickerHelper__WEBPACK_IMPORTED_MODULE_5__["SUBSTRATE_SEARCH_URL"] + "/api/v1/suggestions",
                headers: headersDict,
                needsAuthorization: false,
                requestType: 'POST',
                postData: JSON.stringify({
                    EntityRequests: [
                        {
                            EntityType: 'People',
                            ProvenanceMergeMode: 'Default',
                            Provenances: provenances,
                            Query: {
                                QueryString: query
                            },
                            From: 0,
                            Size: 25,
                            Fields: [
                                // "Id",
                                'DisplayName',
                                'EmailAddresses',
                                'CompanyName',
                                'JobTitle',
                                'OfficeLocation',
                                'Department',
                                // "ImAddress",
                                // "PhoneNumber",
                                // "ADObjectId",
                                'UserPrincipalName',
                                // "PersonaId",
                                // "FeatureData",
                                // "PDLItemId",
                                'PeopleType',
                                'PeopleSubtype'
                                // "Confidence"
                            ],
                            Filter: !segmentIDs
                                ? null
                                : {
                                    Or: segmentIDs.map(function (ID) {
                                        return { Term: { InformationBarrierSegment: ID } };
                                    })
                                }
                        }
                    ],
                    TimeZone: 'UTC',
                    Cvid: context.conversationId,
                    Scenario: { Name: 'documentshare' }
                })
            })
                .then(function (data) {
                // Enable the "Search Directory" button for Graph search
                if (context.onToggleGetMoreResults) {
                    context.onToggleGetMoreResults(true);
                }
                var suggestions = data.Groups[0] ? data.Groups[0].Suggestions : [];
                var people = [];
                suggestions.forEach(function (suggestion) {
                    if (!_this._invalidPeopleSubTypesKSActivated &&
                        suggestion.PeopleSubtype &&
                        _this._isIgnorablePeopleSubType(suggestion.PeopleSubtype)) {
                        return;
                    }
                    var email = suggestion.EmailAddresses[0] || suggestion.QueryText || '';
                    var key = suggestion.UserPrincipalName &&
                        _this._isValidEmail(suggestion.UserPrincipalName, false /*isSecurityGroup*/)
                        ? suggestion.UserPrincipalName
                        : email;
                    var rawData = { Key: key, IsResolved: false };
                    var isImplicit = suggestion.PeopleSubtype === 'ImplicitContact';
                    var isOrganizationUser = suggestion.PeopleSubtype === 'OrganizationUser';
                    var isLinkedInContact = suggestion.PeopleSubtype === 'LinkedIn';
                    var isUnifiedGroup = suggestion.PeopleType === 'Group' && suggestion.PeopleSubtype === 'UnifiedGroup';
                    var isPublicDistributionList = suggestion.PeopleSubtype === 'PublicDistributionList';
                    var imageUrl = Object(_ms_odsp_utilities_lib_alternativeUrls_SPAlternativeUrls__WEBPACK_IMPORTED_MODULE_8__["getUserPhotoUrl"])(email);
                    var person = {
                        department: suggestion.Department,
                        office: suggestion.OfficeLocation,
                        email: email,
                        image: isImplicit ? undefined : imageUrl,
                        job: context.fallbackToEmailIfNoJob === false
                            ? suggestion.JobTitle
                            : suggestion.JobTitle || email,
                        name: suggestion.DisplayName,
                        providerName: 'Provider',
                        userId: key,
                        rawData: rawData,
                        rawPersonData: rawData,
                        isExternal: !isOrganizationUser
                    };
                    if (isOrganizationUser) {
                        person.entityType = 0 /* regularUser */;
                        person.principalType = _roleAssignments_PrincipalType__WEBPACK_IMPORTED_MODULE_3__["default"].user;
                        person.isResolved = true;
                    }
                    else if (isUnifiedGroup) {
                        person.entityType = 2 /* group */;
                        person.principalType = _roleAssignments_PrincipalType__WEBPACK_IMPORTED_MODULE_3__["default"].securityGroup;
                        person.isResolved = false; // We still want to call resolve on unified groups so that we can get member count for UI
                        person.providerName = undefined; // In this case we need to set the providerName to be undefined so that the later code will resolve this entity
                    }
                    else if (isLinkedInContact) {
                        person.entityType = 4 /* linkedinUser */;
                    }
                    else {
                        person.principalType = isPublicDistributionList
                            ? _roleAssignments_PrincipalType__WEBPACK_IMPORTED_MODULE_3__["default"].distributionList
                            : _roleAssignments_PrincipalType__WEBPACK_IMPORTED_MODULE_3__["default"].none;
                        person.entityType =
                            suggestion.PeopleType === 'Group' ? 2 /* group */ : 1 /* externalUser */;
                        person.isResolved = false;
                        person.providerName = undefined;
                    }
                    if (!!person.userId) {
                        people.push(person);
                    }
                });
                /**
                 * If the query returned no results and the query is an email, add
                 * that email as a suggestion.
                 */
                if (context.resolveEmailIfNoResults !== false &&
                    people.length === 0 &&
                    _this._isValidEmail(query, false /* isSecurityGroup */)) {
                    var rawData = {
                        Key: query,
                        IsResolved: false // Set as false to sharing APIs verify user.
                    };
                    people.push({
                        email: query,
                        entityType: 1 /* externalUser */,
                        isResolved: false,
                        job: context.fallbackToEmailIfNoJob === false ? undefined : query,
                        name: query,
                        userId: query,
                        rawData: rawData,
                        rawPersonData: rawData,
                        isExternal: true
                    });
                }
                return people;
            }, function (error) {
                if (error.name !== 'Canceled') {
                    _this._substratePeoplePickerHelper.disableSubstrateCallsForPicker();
                    _this.sharePointSearch(query, context);
                }
                return null;
            });
        });
    };
    PeoplePickerDataSource.prototype._isValidEmail = function (email, isSecurityGroup) {
        /**
         * Users without an email address assigned are valid in ShareLink scenarios.
         * Security groups without an email address are not valid in ShareLink scenarios.
         */
        if (!email) {
            return !isSecurityGroup;
        }
        // Known input that causes issues (and cannot exist in a valid email address).
        if (email.indexOf(' ') > -1 || email.indexOf(';') > -1) {
            return false;
        }
        // If result has an associated email, ensure that it is valid
        return _ms_odsp_utilities_lib_string_EmailAddressParser__WEBPACK_IMPORTED_MODULE_12__["default"].isValidEmailSyntax(email, false);
    };
    PeoplePickerDataSource._getPersonTypeFilter = function (context) {
        // If the principalType only contains User, just directly return "personType ne Group"
        if (context.principalType === _roleAssignments_PrincipalType__WEBPACK_IMPORTED_MODULE_3__["default"].user) {
            return "personType/class ne 'Group'";
        }
        var filterString = '';
        if (!(context.principalType & _roleAssignments_PrincipalType__WEBPACK_IMPORTED_MODULE_3__["default"].distributionList)) {
            filterString = filterString + "personType/subclass ne 'PublicDistributionList'";
        }
        // Note: if the PrincipalType that sent to Graph doesn't contain SecurityGroup, it means
        // from people picker side it doesn't want O365 Group returned from Graph.
        if (!(context.principalType & _roleAssignments_PrincipalType__WEBPACK_IMPORTED_MODULE_3__["default"].securityGroup)) {
            if (filterString) {
                filterString = filterString + ' and ';
            }
            filterString = filterString + "personType/subclass ne 'UnifiedGroup'";
        }
        if (filterString) {
            return filterString;
        }
        if (context.filterPublicDistributionList !== false) {
            return "personType/subclass ne 'PublicDistributionList'";
        }
        return '';
    };
    PeoplePickerDataSource.prototype._isIgnorablePeopleSubType = function (peopleSubType) {
        if (!peopleSubType) {
            return false;
        }
        // Here lists some legacy or invalid PeopleSubtype in suggestions might be returned from 3S, they should be filtered out
        var ignorableSubTypes = ['PersonalDistributionList', 'ImplicitGroup', 'Unknown'];
        return ignorableSubTypes.includes(peopleSubType);
    };
    PeoplePickerDataSource.prototype._transformData = function (data, filterExternalUsers) {
        var _this = this;
        return data.map(function (rawPerson) {
            var rawEntityData = rawPerson.EntityData;
            var person = {
                name: rawPerson.DisplayText,
                email: rawEntityData.Email,
                userId: rawPerson.Key,
                job: rawEntityData.Title,
                department: rawEntityData.Department,
                phone: rawEntityData.MobilePhone,
                providerName: rawPerson.ProviderDisplayName,
                entityType: rawPerson.EntityType,
                isResolved: rawPerson.IsResolved,
                multipleMatches: rawPerson.MultipleMatches,
                rawPersonData: rawPerson,
                //set "rawData" to be the value exactly returned by the server. For list metadata, we need this exact value
                //when we write back to the list.
                rawData: rawPerson
            };
            if (person.multipleMatches.length > 0) {
                person.multipleMatches = _this._transformData(person.multipleMatches, filterExternalUsers);
                if (filterExternalUsers) {
                    person.multipleMatches = person.multipleMatches.filter(function (person) { return person.entityType !== 1 /* externalUser */; });
                }
            }
            var email = person.email;
            if (person.isResolved) {
                if (email) {
                    person.image = Object(_ms_odsp_utilities_lib_alternativeUrls_SPAlternativeUrls__WEBPACK_IMPORTED_MODULE_8__["getUserPhotoUrl"])(email);
                }
                else {
                    person.image = null;
                }
            }
            // calculate entity type
            var serverType = rawEntityData.PrincipalType || rawPerson.EntityType;
            switch (serverType) {
                case 'UNVALIDATED_EMAIL_ADDRESS':
                case 'GUEST_USER':
                    person.entityType = 1 /* externalUser */;
                    person.principalType = _roleAssignments_PrincipalType__WEBPACK_IMPORTED_MODULE_3__["default"].user;
                    person.isExternal = true;
                    break;
                case 'SecGroup':
                case 'SharePointGroup':
                case 'FormsRole':
                    person.entityType = 2 /* group */;
                    if (serverType === 'SharePointGroup') {
                        person.principalType = _roleAssignments_PrincipalType__WEBPACK_IMPORTED_MODULE_3__["default"].sharePointGroup;
                    }
                    else {
                        person.principalType = _roleAssignments_PrincipalType__WEBPACK_IMPORTED_MODULE_3__["default"].securityGroup;
                    }
                    break;
                default:
                    person.entityType = 0 /* regularUser */;
                    person.principalType = _roleAssignments_PrincipalType__WEBPACK_IMPORTED_MODULE_3__["default"].user;
            }
            return person;
        });
    };
    return PeoplePickerDataSource;
}(_base_DataSource__WEBPACK_IMPORTED_MODULE_2__["default"]));

function isOriginalParams(params) {
    var originalParams = params;
    return !!originalParams.webAbsoluteUrl;
}
//# sourceMappingURL=PeoplePickerDataSource.js.map

/***/ })

}]);
//# sourceMappingURL=chunk.vendors~sp-component-utilities-peoplepick~2558cf98_[locale].js.map