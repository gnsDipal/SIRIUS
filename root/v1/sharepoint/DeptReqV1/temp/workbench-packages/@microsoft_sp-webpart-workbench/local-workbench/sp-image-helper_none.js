define("2c46c8f0-e214-4f49-951e-fd5b9d7b4ae1_1.12.1", ["tslib","@ms/sp-telemetry","@ms/odsp-core-bundle","@microsoft/sp-lodash-subset","@microsoft/sp-core-library","@microsoft/sp-page-context","@microsoft/sp-diagnostics"], function(__WEBPACK_EXTERNAL_MODULE__17wl__, __WEBPACK_EXTERNAL_MODULE__2q6Q__, __WEBPACK_EXTERNAL_MODULE_K9kD__, __WEBPACK_EXTERNAL_MODULE_Pk8u__, __WEBPACK_EXTERNAL_MODULE_UWqr__, __WEBPACK_EXTERNAL_MODULE_X_PM__, __WEBPACK_EXTERNAL_MODULE_ut3N__) { return /******/ (function(modules) { // webpackBootstrap
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

/***/ "+TnQ":
/*!**************************************!*\
  !*** ./lib/ThumbnailUrlGenerator.js ***!
  \**************************************/
/*! exports provided: _ThumbnailUrlGenerator, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_ThumbnailUrlGenerator", function() { return _ThumbnailUrlGenerator; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @microsoft/sp-diagnostics */ "ut3N");
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _microsoft_sp_page_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @microsoft/sp-page-context */ "X+PM");
/* harmony import */ var _microsoft_sp_page_context__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_page_context__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ms_odsp_utilities_lib_alternativeUrls_SPAlternativeUrls__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ms/odsp-utilities/lib/alternativeUrls/SPAlternativeUrls */ "vmDi");
/* harmony import */ var _ms_odsp_utilities_lib_alternativeUrls_SPAlternativeUrls__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ms_odsp_utilities_lib_alternativeUrls_SPAlternativeUrls__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ms/sp-telemetry */ "2q6Q");
/* harmony import */ var _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _PreviewHelper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./PreviewHelper */ "tIik");
/* harmony import */ var _PreviewUtility__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./PreviewUtility */ "v7I1");
/* harmony import */ var _IThumbnailRequest__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./IThumbnailRequest */ "FC4P");
/* harmony import */ var _SPResourcePath__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./SPResourcePath */ "OLPK");
/* harmony import */ var _ThumbnailProviderType__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ThumbnailProviderType */ "4gON");
/* harmony import */ var _ThumbnailHealingKillSwitches__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ThumbnailHealingKillSwitches */ "Ll3B");
/* harmony import */ var _GenericKillSwitches__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./GenericKillSwitches */ "BiRd");
/* harmony import */ var _Experiments__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Experiments */ "1AKv");
/**
 * @copyright Microsoft Corporation. All rights reserved.
 */















var PRELOAD_IMAGES_KEY = '_preloadImages';
// VROOM thumbnail URL regex, return thumbnail from alt stream cache if available before redirecting to MeTA
var VROOM_META_CACHE_REGEX = /(\/thumbnails\/\d\/(.*?)\/content\/?(|(\?(.*?)))$)/i;
// Media Thumbnail URL regex. Core service responsible for generating the thumbnail.
var META_REGEX = /(.svc.ms\/transform\/thumbnail\/?(|(\?(.*?)))$)/i;
// Private CDN Url regex.
var PRIVATE_CDN_V1_V2_REGEX = /(privatecdn(.*?).sharepointonline.com\/(.*?)\?(.*?)(_oat_=(.*?)|AuthVer=2)(.*?)$)/i;
// Public CDN MeTA Default Image Url regex.
var PUBLIC_CDN_META_REGEX = /(publiccdn(.*?).sharepointonline.com\/)(.*?)(.svc.ms\/transform\/thumbnail)/i;
// Public CDN Url regex.
var PUBLIC_CDN_REGEX = /(publiccdn(.*?).sharepointonline.com\/(.*?)$)/i;
// Azure Front Door Private CDN (Azure-based) Url regex.
var AFD_PRIVATE_CDN_REGEX = /(\/_vti_bin\/afdcache.ashx\/?(|(\/(.*?)))$)/i;
// getPreview.ashx end point to DocViz service. This service is under deprecation process.
var DOCVIZ_REGEX = /(\/_layouts\/15\/getpreview.ashx\/?(|(\?(.*?)))$)/i;
var AFDCDN_IMAGE_PATH = '/_vti_bin/afdcache.ashx/authitem';
/**
 * Server flight determines environments where MeTA service can be used.
 */
var MEDIATAFORTHUMBNAIL = 'MediaTAForThumbnail';
/**
 * Key to read Public CDN base URL from the page context
 */
var PUBLIC_CDN_CONTEXT_KEY = 'publicCdnBaseUrl';
/**
 * A contract to represent that Image URL is full width
 */
var FULLWIDTH = 0;
/**
 * Default Images (aka client side stock images) are resolved at runtine using a key
 * which is prefixed by '/_LAYOUTS/IMAGES/
 */
var DEFAULT_IMAGES_PATH_PREFIX = '/_LAYOUTS/IMAGES/';
var HUBBLE_STOCK_HOSTNAME = 'cdn.hubblecontent.osi.office.net';
var DOCID_PARAM = 'docid';
/**
 * This class is the entry point for requesting thumbnail URL for given sharepoint resource
 * It's behavior depends on the timing of oauth token availability
 *  -It needs oauth token to generate Media Service based thumbnail URL
 *  -At SPPageApp load time, token is requested
 *  -When request arrives for thumbnail, if token is resolved, Media Service url is returned
 *  -If token is not available then getPreview.ashx based url is constructed
 *
 * NOTE: Caller of this API should not log thumbnail url in console or trace logger.
 *
 * @internal
 */
// tslint:disable-next-line:class-name export-name
var _ThumbnailUrlGenerator = /** @class */ (function () {
    function _ThumbnailUrlGenerator() {
        this._logSource = _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__["_LogSource"].create('ThumbnailUrlGenerator');
    }
    /**
     * Returns true if the file type is supported by media service for thumbnail
     * @param fileType - type (extension) of file to be tested
     * @param includeProofTokenSupport - If true will also include extensions supported with proof token only.
     */
    _ThumbnailUrlGenerator._isFileTypeSupportedByMediaService = function (fileType) {
        return !!fileType && _PreviewUtility__WEBPACK_IMPORTED_MODULE_7__["_PreviewUtility"].mediaServiceSupportedMap.has(fileType.toLowerCase());
    };
    _ThumbnailUrlGenerator._isViewportNumberValid = function (viewportNumber) {
        if (viewportNumber !== undefined) {
            return !isNaN(viewportNumber);
        }
        return false;
    };
    /**
     * Returns true if given uri's hostname match my site pattern.
     * Note: Any site in the world can have my site pattern. Don't take
     * hard decision based on this method.
     * @param uri - uri under test.
     * @param currentUri - uri of the current host to compare against.
     */
    _ThumbnailUrlGenerator._isMySiteHost = function (uri, currentUri) {
        var MY = '-my.';
        var replaceValue = '.';
        var domain = uri.domain.toLowerCase();
        return domain.indexOf(MY) > -1 && domain.replace(MY, replaceValue) === currentUri.domain.toLowerCase();
    };
    _ThumbnailUrlGenerator._replaceQueryValue = function (url, name, newValue) {
        if (newValue !== undefined) {
            url.setSearchParam(name, newValue.toString());
        }
        else {
            url.searchParams.delete(name);
        }
        return url.toString();
    };
    _ThumbnailUrlGenerator._getSPResourceAuthority = function (request) {
        var webAbsoluteUri = new _SPResourcePath__WEBPACK_IMPORTED_MODULE_9__["_SPResourcePath"](request.absoluteUrl || '');
        if (request.spResource) {
            var resourcePath = new _SPResourcePath__WEBPACK_IMPORTED_MODULE_9__["_SPResourcePath"](request.spResource);
            // Is Relative.
            if (resourcePath.format === _SPResourcePath__WEBPACK_IMPORTED_MODULE_9__["_SPResourcePathFormat"].relative ||
                resourcePath.format === _SPResourcePath__WEBPACK_IMPORTED_MODULE_9__["_SPResourcePathFormat"].serverRelative) {
                return webAbsoluteUri;
            }
            else {
                return new _SPResourcePath__WEBPACK_IMPORTED_MODULE_9__["_SPResourcePath"](resourcePath.authority);
            }
        }
        else {
            // If spResource is null for some cases, fallback to web absolute URL.
            return webAbsoluteUri;
        }
    };
    Object.defineProperty(_ThumbnailUrlGenerator, "instance", {
        /** ------------------- PUBLIC ------------------- **/
        get: function () {
            if (this._instance === undefined) {
                this._instance = new _ThumbnailUrlGenerator();
            }
            return this._instance;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Initialize thumbnail url generator service scope.
     */
    _ThumbnailUrlGenerator.prototype.initialize = function (serviceScope, preloadedData) {
        if (!this._serviceScope) {
            this._serviceScope = serviceScope;
            this._pageContext = this._serviceScope.consume(_microsoft_sp_page_context__WEBPACK_IMPORTED_MODULE_3__["PageContext"].serviceKey);
        }
        if (preloadedData && preloadedData[MEDIATAFORTHUMBNAIL] !== undefined) {
            this._mediaTAForThumbnailEnabled = !!preloadedData[MEDIATAFORTHUMBNAIL];
        }
    };
    /**
     * Returns true if the file extension is supported for thumbnail
     */
    _ThumbnailUrlGenerator.prototype.isFileTypeSupported = function (fileType) {
        if (!fileType) {
            return false;
        }
        var normalizedType = fileType.toLowerCase();
        // SVG is not rendered correctly when served through preview service or thumbnail service.
        // The SVG images are usually small so we can always display SVG images directly.
        // When this kill switch is graduated, this block should be removed and 'svg' be removed from
        // the file type lists in `_PreviewUtility`.
        if (normalizedType === 'svg') {
            return false;
        }
        return (_PreviewUtility__WEBPACK_IMPORTED_MODULE_7__["_PreviewUtility"].getPreviewSupportedMap.has(normalizedType) ||
            (this.isVROOMThumbnailEnabled() &&
                (_ThumbnailUrlGenerator._isFileTypeSupportedByMediaService(normalizedType) ||
                    normalizedType === 'aspx')));
    };
    /**
     * Generate user photo URL for specific size.
     * When private CDN is enabled, generated URL is mapped to CDN.
     * @param accountName - User's account name aka email address. e.g. foo\@contoso.com
     * @param size - Parameter may have value Small, Medium or Large, default to Small.
     */
    _ThumbnailUrlGenerator.prototype.getUserPhotoUrl = function (accountName, size) {
        if (size === void 0) { size = 1 /* Small */; }
        return _ms_odsp_utilities_lib_alternativeUrls_SPAlternativeUrls__WEBPACK_IMPORTED_MODULE_4__["getUserPhotoUrl"](accountName, size);
    };
    /**
     * Get thumbnail Url for the given sharepoint resource.
     *
     * Ensure you first check file type is supported via
     * isFileTypeSupported or the code will attempt to fallback to spResource.
     */
    _ThumbnailUrlGenerator.prototype.getThumbnailUrl = function (request, defaultImage) {
        if (!request) {
            throw new Error("Input parameter request is " + request);
        }
        if (request.unknownThumbnailUrl) {
            return this._fromUnknownThumbnailUrl(request, defaultImage);
        }
        if (request.spResource) {
            request.spResource = this._pruneShareUrl(request.spResource);
        }
        var isViewportRequest = this._isViewportParametersSpecified(request);
        /**
         * Skip image preloading for SPImageFlight until
         * preloading considers viewport parameters
         *
         * VSO: 378286
         */
        if (!isViewportRequest) {
            var preloadedImage = this._getPreLoadedImage(request);
            if (preloadedImage) {
                return preloadedImage;
            }
        }
        var provider;
        if (request.spResource) {
            provider = this.getThumbnailProvider(request.spResource, !!defaultImage);
            if (provider === _ThumbnailProviderType__WEBPACK_IMPORTED_MODULE_10__["_ThumbnailProviderType"].DocViz) {
                return this.fromGetPreview(request.spResource, request.callerId, request.width);
            }
            else if (provider === _ThumbnailProviderType__WEBPACK_IMPORTED_MODULE_10__["_ThumbnailProviderType"].PrivateCDN ||
                provider === _ThumbnailProviderType__WEBPACK_IMPORTED_MODULE_10__["_ThumbnailProviderType"].AFDPrivateCDN) {
                if (_ms_odsp_utilities_lib_alternativeUrls_SPAlternativeUrls__WEBPACK_IMPORTED_MODULE_4__["isAlterantiveUrlFresh"](request.spResource)) {
                    return request.spResource;
                }
                // For stale URL, convert it into spResource
                var cdnPath = new _SPResourcePath__WEBPACK_IMPORTED_MODULE_9__["_SPResourcePath"](request.spResource);
                if (provider === _ThumbnailProviderType__WEBPACK_IMPORTED_MODULE_10__["_ThumbnailProviderType"].PrivateCDN) {
                    request.spResource = "https:/" + cdnPath.path;
                }
                else {
                    request.spResource = "" + cdnPath.authority + cdnPath.path.substr(AFDCDN_IMAGE_PATH.length);
                }
                request.spResource = request.spResource.split('?')[0]; // Get rid of query param if any
                provider = !_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["_SPKillSwitch"].isActivated('b46fd9cb-7468-45e5-b4ae-c1d886355932'
                /* '01/21/2021', 'PRCHANDO - Set URL type to SharePointHost instead of Original' */
                )
                    ? _ThumbnailProviderType__WEBPACK_IMPORTED_MODULE_10__["_ThumbnailProviderType"].SharePointHost
                    : _ThumbnailProviderType__WEBPACK_IMPORTED_MODULE_10__["_ThumbnailProviderType"].Original;
            }
            else if (provider === _ThumbnailProviderType__WEBPACK_IMPORTED_MODULE_10__["_ThumbnailProviderType"].MeTA ||
                provider === _ThumbnailProviderType__WEBPACK_IMPORTED_MODULE_10__["_ThumbnailProviderType"].VROOMMeTACache ||
                provider === _ThumbnailProviderType__WEBPACK_IMPORTED_MODULE_10__["_ThumbnailProviderType"].PublicCDN ||
                provider === _ThumbnailProviderType__WEBPACK_IMPORTED_MODULE_10__["_ThumbnailProviderType"].External) {
                return request.spResource;
            }
            else if (provider === _ThumbnailProviderType__WEBPACK_IMPORTED_MODULE_10__["_ThumbnailProviderType"].HubbleStock &&
                _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["_SPFlight"].isEnabled(684 /*HubbleStockContentOnPublicCDN */)) {
                return this._getPublicCDNMeTAUrl(request.spResource, request);
            }
        }
        if (defaultImage) {
            return this._getPublicCDNMeTAUrl(defaultImage, request);
        }
        if (this._isLayoutsImage(request.spResource)) {
            return request.spResource;
        }
        var isAspx = false;
        if (request.fileType) {
            isAspx = request.fileType.toLowerCase() === 'aspx';
        }
        // Site page thumbnail needs to go through getPreview.
        if (request.thumbnail && !isAspx) {
            return request.thumbnail;
        }
        var cdnUrl = this.getCDNUrl(request);
        if (cdnUrl) {
            return cdnUrl;
        }
        var vroomThumbnailUrl = this.getVROOMThumbnailUrl(request, provider);
        if (vroomThumbnailUrl) {
            return vroomThumbnailUrl;
        }
        var docVizUrl = this.getDocVizUrl(request);
        if (docVizUrl) {
            return docVizUrl;
        }
        return request.spResource;
    };
    Object.defineProperty(_ThumbnailUrlGenerator.prototype, "publicCDNBaseUrl", {
        /**
         * Get base public CDN Url
         */
        get: function () {
            var _a, _b;
            return (_b = (_a = this._pageContext) === null || _a === void 0 ? void 0 : _a.legacyPageContext) === null || _b === void 0 ? void 0 : _b[PUBLIC_CDN_CONTEXT_KEY];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ThumbnailUrlGenerator.prototype, "mediaCDNBaseUrl", {
        get: function () {
            // TODO: Once media.akamai.odsp.cdn.office.net configuration is completed
            // This KS will be activated to enable new end point and update Unit test
            if (_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["_SPKillSwitch"].isActivated('0f6c0f9d-ad64-4b85-802f-b7a0aa3492c1'
            /* '01/26/2021', 'prchando - Activate KS when media CDN host is available' */
            )) {
                return 'https://media.akamai.odsp.cdn.office.net';
            }
            return this.publicCDNBaseUrl;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Always use getThumbnailUrl API except in advanced scenarios
     *
     * Generates VROOM thumbnail URL if applicable or undefined otherwise.
     * @param request - Requested info about thumbnail
     */
    _ThumbnailUrlGenerator.prototype.getVROOMThumbnailUrl = function (request, provider) {
        if (!request) {
            throw new Error("Input parameter request is " + request);
        }
        var isAspx = request.fileType && request.fileType.toLowerCase() === 'aspx';
        var resourceAuthority;
        var path = request.spResource;
        if (path) {
            provider = provider || (request.spResource && this.getThumbnailProvider(request.spResource));
            if (provider === _ThumbnailProviderType__WEBPACK_IMPORTED_MODULE_10__["_ThumbnailProviderType"].VROOMMeTACache) {
                return _PreviewUtility__WEBPACK_IMPORTED_MODULE_7__["_PreviewUtility"].updateVROOMCustomThumbnailSize(request.spResource, request.width);
            }
            // Lets ensure that resourcePath is indeed SPO resource path
            switch (provider) {
                case _ThumbnailProviderType__WEBPACK_IMPORTED_MODULE_10__["_ThumbnailProviderType"].MeTA:
                    path = undefined;
                    break;
                case _ThumbnailProviderType__WEBPACK_IMPORTED_MODULE_10__["_ThumbnailProviderType"].PrivateCDN:
                case _ThumbnailProviderType__WEBPACK_IMPORTED_MODULE_10__["_ThumbnailProviderType"].PublicCDN:
                    var cdnPath = new _SPResourcePath__WEBPACK_IMPORTED_MODULE_9__["_SPResourcePath"](request.spResource);
                    path = "https:/" + cdnPath.path;
                    path = path.split('?')[0]; // Get rid of query param
                    break;
                case _ThumbnailProviderType__WEBPACK_IMPORTED_MODULE_10__["_ThumbnailProviderType"].AFDPrivateCDN:
                    var afdPath = new _SPResourcePath__WEBPACK_IMPORTED_MODULE_9__["_SPResourcePath"](request.spResource);
                    path = "" + afdPath.authority + cdnPath.path.substr('/_vti_bin/afdcache.ashx/authitem'.length);
                    path = path.split('?')[0]; // Get rid of query param
                    break;
                case _ThumbnailProviderType__WEBPACK_IMPORTED_MODULE_10__["_ThumbnailProviderType"].SharePointHost:
                case _ThumbnailProviderType__WEBPACK_IMPORTED_MODULE_10__["_ThumbnailProviderType"].MySite:
                    path = request.spResource;
                    break;
                case _ThumbnailProviderType__WEBPACK_IMPORTED_MODULE_10__["_ThumbnailProviderType"].External:
                case _ThumbnailProviderType__WEBPACK_IMPORTED_MODULE_10__["_ThumbnailProviderType"].Stock:
                case _ThumbnailProviderType__WEBPACK_IMPORTED_MODULE_10__["_ThumbnailProviderType"].PublicCDNDefault:
                case _ThumbnailProviderType__WEBPACK_IMPORTED_MODULE_10__["_ThumbnailProviderType"].PublicCDNHubble:
                default:
                    path = undefined;
                    break;
            }
            var resourcePath = new _SPResourcePath__WEBPACK_IMPORTED_MODULE_9__["_SPResourcePath"](path);
            if (resourcePath.format === _SPResourcePath__WEBPACK_IMPORTED_MODULE_9__["_SPResourcePathFormat"].absolute) {
                resourceAuthority = new _SPResourcePath__WEBPACK_IMPORTED_MODULE_9__["_SPResourcePath"](path);
            }
        }
        // If file type is not supported by MeTA, it is most likely to fail with getPreview except excel
        // For scenarios where fileType is missing, we are going in favor of MeTa support to reduce getPreview URL.
        // Also for missing fileType there is no guarantee that getPreview will have 100% support.
        var ignoreFileType = !request.fileType;
        var isCroppingRequest = this._isViewportParametersSpecified(request);
        if ((_PreviewHelper__WEBPACK_IMPORTED_MODULE_6__["_PreviewHelper"].useVroomCropping() || !isCroppingRequest) &&
            (isAspx ||
                _ThumbnailUrlGenerator._isFileTypeSupportedByMediaService(request.fileType) ||
                ignoreFileType) &&
            this.isVROOMThumbnailEnabled() &&
            !Object(_ThumbnailHealingKillSwitches__WEBPACK_IMPORTED_MODULE_11__["isVROOMThumbnailRewriteKSActivated"])()) {
            resourceAuthority = resourceAuthority || _ThumbnailUrlGenerator._getSPResourceAuthority(request);
            var vroomUrl = _PreviewUtility__WEBPACK_IMPORTED_MODULE_7__["_PreviewUtility"].getVROOMItemUrl(request.siteId, request.webId, request.listId, request.uniqueId, resourceAuthority.authority, resourceAuthority.domain, path);
            // TODO: isCropModeSpecified should be encapsulated within isCroppingRequest. Scoped change now.
            var isCropModeSpecified = request.cropMode && request.cropMode !== _IThumbnailRequest__WEBPACK_IMPORTED_MODULE_8__["_CropMode"].Default;
            if (_PreviewHelper__WEBPACK_IMPORTED_MODULE_6__["_PreviewHelper"].useVroomCropping() && (isCroppingRequest || isCropModeSpecified)) {
                return _PreviewUtility__WEBPACK_IMPORTED_MODULE_7__["_PreviewUtility"].getVROOMThumbnailUrl(vroomUrl, request.width, request.height, undefined, request.originalWidth, request.originalHeight, request.cropMode, request.viewportTop, request.viewportLeft, request.viewportWidth, request.viewportHeight);
            }
            else {
                return _PreviewUtility__WEBPACK_IMPORTED_MODULE_7__["_PreviewUtility"].getVROOMThumbnailUrl(vroomUrl, request.width, request.height);
            }
        }
        return undefined;
    };
    /**
     * Always use getThumbnailUrl API except in advanced scenarios.
     *
     * Generates public or private CDN URl if applicable or undefined otherwise.
     * @param request - Requested info about thumbnail
     */
    _ThumbnailUrlGenerator.prototype.getCDNUrl = function (request) {
        if (!request) {
            throw new Error("Input parameter request is " + request);
        }
        if (request.spResource &&
            (_PreviewHelper__WEBPACK_IMPORTED_MODULE_6__["_PreviewHelper"].useVroomCropping() || !this._isViewportParametersSpecified(request))) {
            if (_PreviewHelper__WEBPACK_IMPORTED_MODULE_6__["_PreviewHelper"].useVroomCropping()) {
                return _PreviewUtility__WEBPACK_IMPORTED_MODULE_7__["_PreviewUtility"].getAlternateUrl(new _SPResourcePath__WEBPACK_IMPORTED_MODULE_9__["_SPResourcePath"](request.spResource), request.width, request.height, request.originalWidth, request.originalHeight, request.cropMode, request.viewportTop, request.viewportLeft, request.viewportWidth, request.viewportHeight);
            }
            else {
                return _PreviewUtility__WEBPACK_IMPORTED_MODULE_7__["_PreviewUtility"].getAlternateUrl(new _SPResourcePath__WEBPACK_IMPORTED_MODULE_9__["_SPResourcePath"](request.spResource), request.width, request.height);
            }
        }
        return undefined;
    };
    /**
     * Always use getThumbnailUrl API except in advanced scenarios.
     *
     * Generates DocViz getPreivew.ashx URL if applicable or undefined otherwise.
     * @param request - Requested info about thumbnail
     */
    _ThumbnailUrlGenerator.prototype.getDocVizUrl = function (request) {
        if (!request) {
            throw new Error("Input parameter request is " + request);
        }
        if (!Object(_ThumbnailHealingKillSwitches__WEBPACK_IMPORTED_MODULE_11__["isDocVizUrlRewriteKSActivated"])() && this.isFileTypeSupported(request.fileType)) {
            return this._fallbackToGetPreview(request);
        }
        return undefined;
    };
    /**
     * Update width of the thumbnail URL
     * @param thumbnailUrl - Thumbnail URL to be updated
     * @param newWidth  - new width to be applied. Width will be mapped to closest cache breakpoint
     */
    _ThumbnailUrlGenerator.prototype.updateThumbnailWidth = function (thumbnailUrl, newWidth) {
        if (!thumbnailUrl || newWidth === undefined || isNaN(newWidth) || newWidth <= 0) {
            return thumbnailUrl;
        }
        var normalizedWidth = _PreviewUtility__WEBPACK_IMPORTED_MODULE_7__["_PreviewUtility"].normalizeWidth(newWidth);
        var thumbnailUri = new _SPResourcePath__WEBPACK_IMPORTED_MODULE_9__["_SPResourcePath"](thumbnailUrl);
        if (thumbnailUri.searchParams.has(_PreviewHelper__WEBPACK_IMPORTED_MODULE_6__["_PreviewHelper"].WIDTH_SHORT)) {
            return _ThumbnailUrlGenerator._replaceQueryValue(thumbnailUri, _PreviewHelper__WEBPACK_IMPORTED_MODULE_6__["_PreviewHelper"].WIDTH_SHORT, normalizedWidth);
        }
        else if (thumbnailUri.searchParams.has(_PreviewHelper__WEBPACK_IMPORTED_MODULE_6__["_PreviewHelper"].WIDTH)) {
            return _ThumbnailUrlGenerator._replaceQueryValue(thumbnailUri, _PreviewHelper__WEBPACK_IMPORTED_MODULE_6__["_PreviewHelper"].WIDTH, normalizedWidth);
        }
        else if (thumbnailUri.searchParams.has(_PreviewHelper__WEBPACK_IMPORTED_MODULE_6__["_PreviewHelper"].RESOLUTION)) {
            return _ThumbnailUrlGenerator._replaceQueryValue(thumbnailUri, _PreviewHelper__WEBPACK_IMPORTED_MODULE_6__["_PreviewHelper"].RESOLUTION, _PreviewUtility__WEBPACK_IMPORTED_MODULE_7__["_PreviewUtility"].normalizeWidthToResolution(newWidth));
        }
        else {
            // Width does not exist already, add it
            var provider = this.getThumbnailProvider(thumbnailUrl);
            switch (provider) {
                case _ThumbnailProviderType__WEBPACK_IMPORTED_MODULE_10__["_ThumbnailProviderType"].External:
                    return thumbnailUrl;
                case _ThumbnailProviderType__WEBPACK_IMPORTED_MODULE_10__["_ThumbnailProviderType"].VROOMMeTACache:
                    return _PreviewUtility__WEBPACK_IMPORTED_MODULE_7__["_PreviewUtility"].updateVROOMCustomThumbnailSize(thumbnailUrl, newWidth);
                case _ThumbnailProviderType__WEBPACK_IMPORTED_MODULE_10__["_ThumbnailProviderType"].PrivateCDN:
                case _ThumbnailProviderType__WEBPACK_IMPORTED_MODULE_10__["_ThumbnailProviderType"].PublicCDN:
                case _ThumbnailProviderType__WEBPACK_IMPORTED_MODULE_10__["_ThumbnailProviderType"].AFDPrivateCDN:
                case _ThumbnailProviderType__WEBPACK_IMPORTED_MODULE_10__["_ThumbnailProviderType"].MeTA:
                    // tslint:disable-next-line: max-line-length
                    return "" + thumbnailUrl + (thumbnailUrl.indexOf('?') === -1 ? '?' : '&') + _PreviewHelper__WEBPACK_IMPORTED_MODULE_6__["_PreviewHelper"].WIDTH + "=" + normalizedWidth;
                case _ThumbnailProviderType__WEBPACK_IMPORTED_MODULE_10__["_ThumbnailProviderType"].DocViz:
                    return thumbnailUrl + "&" + _PreviewHelper__WEBPACK_IMPORTED_MODULE_6__["_PreviewHelper"].RESOLUTION + "=" + _PreviewUtility__WEBPACK_IMPORTED_MODULE_7__["_PreviewUtility"].normalizeWidthToResolution(newWidth);
                case _ThumbnailProviderType__WEBPACK_IMPORTED_MODULE_10__["_ThumbnailProviderType"].SharePointHost:
                case _ThumbnailProviderType__WEBPACK_IMPORTED_MODULE_10__["_ThumbnailProviderType"].MySite:
                    if (this.isFileTypeSupported(_PreviewUtility__WEBPACK_IMPORTED_MODULE_7__["_PreviewUtility"].getFileExtension(new _SPResourcePath__WEBPACK_IMPORTED_MODULE_9__["_SPResourcePath"](thumbnailUrl)))) {
                        return "" + thumbnailUrl + (thumbnailUrl.indexOf('?') === -1 ? '?' : '&') + _PreviewHelper__WEBPACK_IMPORTED_MODULE_6__["_PreviewHelper"].WIDTH + "=" + normalizedWidth;
                    }
            }
        }
        _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__["_TraceLogger"].logError(this._logSource, new Error('Could not add width to the URL'), 'updateThumbnailWidth');
        return thumbnailUrl;
    };
    /**
     * Provide requested width of the thumbnail URL
     * Returns 0 if full image URL with confidence or undefined if not sure.
     * @param thumbnailUrl - Thumbnail URL to inspect for width
     */
    _ThumbnailUrlGenerator.prototype.getThumbnailWidth = function (thumbnailUrl, provider) {
        if (thumbnailUrl === '') {
            return undefined;
        }
        try {
            var thumbnailUri = new _SPResourcePath__WEBPACK_IMPORTED_MODULE_9__["_SPResourcePath"](thumbnailUrl);
            if (thumbnailUri.searchParams.has(_PreviewHelper__WEBPACK_IMPORTED_MODULE_6__["_PreviewHelper"].WIDTH_SHORT)) {
                return Number(thumbnailUri.searchParams.get(_PreviewHelper__WEBPACK_IMPORTED_MODULE_6__["_PreviewHelper"].WIDTH_SHORT));
            }
            else if (thumbnailUri.searchParams.has(_PreviewHelper__WEBPACK_IMPORTED_MODULE_6__["_PreviewHelper"].WIDTH)) {
                return Number(thumbnailUri.searchParams.get(_PreviewHelper__WEBPACK_IMPORTED_MODULE_6__["_PreviewHelper"].WIDTH));
            }
            else if (thumbnailUri.searchParams.has(_PreviewHelper__WEBPACK_IMPORTED_MODULE_6__["_PreviewHelper"].RESOLUTION)) {
                return _PreviewUtility__WEBPACK_IMPORTED_MODULE_7__["_PreviewUtility"].getWidthByResolution(Number(thumbnailUri.searchParams.get(_PreviewHelper__WEBPACK_IMPORTED_MODULE_6__["_PreviewHelper"].RESOLUTION)));
            }
            else {
                // Width does not exist already, add it
                provider = provider || this.getThumbnailProvider(thumbnailUrl);
                switch (provider) {
                    case _ThumbnailProviderType__WEBPACK_IMPORTED_MODULE_10__["_ThumbnailProviderType"].External:
                        return undefined;
                    case _ThumbnailProviderType__WEBPACK_IMPORTED_MODULE_10__["_ThumbnailProviderType"].VROOMMeTACache:
                        return _PreviewUtility__WEBPACK_IMPORTED_MODULE_7__["_PreviewUtility"].getVROOMThumbnailWidth(thumbnailUrl);
                    case _ThumbnailProviderType__WEBPACK_IMPORTED_MODULE_10__["_ThumbnailProviderType"].PrivateCDN:
                    case _ThumbnailProviderType__WEBPACK_IMPORTED_MODULE_10__["_ThumbnailProviderType"].PublicCDN:
                    case _ThumbnailProviderType__WEBPACK_IMPORTED_MODULE_10__["_ThumbnailProviderType"].AFDPrivateCDN:
                    case _ThumbnailProviderType__WEBPACK_IMPORTED_MODULE_10__["_ThumbnailProviderType"].MeTA:
                        return FULLWIDTH;
                    case _ThumbnailProviderType__WEBPACK_IMPORTED_MODULE_10__["_ThumbnailProviderType"].DocViz:
                        return 300; // Min width if not specified
                    case _ThumbnailProviderType__WEBPACK_IMPORTED_MODULE_10__["_ThumbnailProviderType"].SharePointHost:
                    case _ThumbnailProviderType__WEBPACK_IMPORTED_MODULE_10__["_ThumbnailProviderType"].MySite:
                        return FULLWIDTH;
                }
            }
            _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__["_TraceLogger"].logError(this._logSource, new Error('Could not find for given URL'), 'getThumbnailWidth');
        }
        catch (error) {
            /* Fail safe */
        }
        return undefined;
    };
    /**
     * Get name of the thumbnail provider service for given thumbnail URL.
     * @param thumbnailUrl - Thumbnail URL
     * @param isStockImage - True if caller knows it was generated from DEFAULT_IMAGES_PATH_PREFIX path.
     */
    _ThumbnailUrlGenerator.prototype.getThumbnailProvider = function (thumbnailUrl, isStockImage) {
        var _a;
        if (!thumbnailUrl) {
            return _ThumbnailProviderType__WEBPACK_IMPORTED_MODULE_10__["_ThumbnailProviderType"].Unknown;
        }
        if (isStockImage || thumbnailUrl.indexOf(DEFAULT_IMAGES_PATH_PREFIX) === 0) {
            return PUBLIC_CDN_META_REGEX.test(thumbnailUrl)
                ? _ThumbnailProviderType__WEBPACK_IMPORTED_MODULE_10__["_ThumbnailProviderType"].PublicCDNDefault
                : _ThumbnailProviderType__WEBPACK_IMPORTED_MODULE_10__["_ThumbnailProviderType"].Stock;
        }
        var thumbnailUri = new _SPResourcePath__WEBPACK_IMPORTED_MODULE_9__["_SPResourcePath"](thumbnailUrl);
        if (thumbnailUri.domain === HUBBLE_STOCK_HOSTNAME) {
            return _ThumbnailProviderType__WEBPACK_IMPORTED_MODULE_10__["_ThumbnailProviderType"].HubbleStock;
        }
        if (VROOM_META_CACHE_REGEX.test(thumbnailUrl)) {
            return _ThumbnailProviderType__WEBPACK_IMPORTED_MODULE_10__["_ThumbnailProviderType"].VROOMMeTACache;
        }
        else if (PUBLIC_CDN_META_REGEX.test(thumbnailUrl)) {
            var docId = thumbnailUri.getQueryParameter(DOCID_PARAM);
            return ((_a = docId) === null || _a === void 0 ? void 0 : _a.indexOf(HUBBLE_STOCK_HOSTNAME)) > -1
                ? _ThumbnailProviderType__WEBPACK_IMPORTED_MODULE_10__["_ThumbnailProviderType"].PublicCDNHubble
                : _ThumbnailProviderType__WEBPACK_IMPORTED_MODULE_10__["_ThumbnailProviderType"].PublicCDNDefault;
        }
        else if (META_REGEX.test(thumbnailUrl)) {
            return _ThumbnailProviderType__WEBPACK_IMPORTED_MODULE_10__["_ThumbnailProviderType"].MeTA;
        }
        else if (PRIVATE_CDN_V1_V2_REGEX.test(thumbnailUrl)) {
            return _ThumbnailProviderType__WEBPACK_IMPORTED_MODULE_10__["_ThumbnailProviderType"].PrivateCDN;
        }
        else if (PUBLIC_CDN_REGEX.test(thumbnailUrl)) {
            return _ThumbnailProviderType__WEBPACK_IMPORTED_MODULE_10__["_ThumbnailProviderType"].PublicCDN;
        }
        else if (!_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["_SPKillSwitch"].isActivated('f68e6e84-b818-4c95-91ce-1c566495f799' /* '09/29/2020', 'Check if ThumbnailUrl is from AFDPrivateCDN' */) &&
            AFD_PRIVATE_CDN_REGEX.test(thumbnailUrl)) {
            return _ThumbnailProviderType__WEBPACK_IMPORTED_MODULE_10__["_ThumbnailProviderType"].AFDPrivateCDN;
        }
        else if (DOCVIZ_REGEX.test(thumbnailUrl)) {
            return _ThumbnailProviderType__WEBPACK_IMPORTED_MODULE_10__["_ThumbnailProviderType"].DocViz;
        }
        else if (this._isLayoutsImage(thumbnailUrl)) {
            return _ThumbnailProviderType__WEBPACK_IMPORTED_MODULE_10__["_ThumbnailProviderType"].Stock;
        }
        var currentUri = new _SPResourcePath__WEBPACK_IMPORTED_MODULE_9__["_SPResourcePath"](window.location.href);
        if (_ThumbnailUrlGenerator._isMySiteHost(thumbnailUri, currentUri)) {
            return _ThumbnailProviderType__WEBPACK_IMPORTED_MODULE_10__["_ThumbnailProviderType"].MySite;
        }
        var thumbnailDomain = thumbnailUri.domain || '';
        var currentDomain = currentUri.domain.toLowerCase();
        if (thumbnailDomain.toLowerCase() === currentDomain) {
            return _ThumbnailProviderType__WEBPACK_IMPORTED_MODULE_10__["_ThumbnailProviderType"].SharePointHost;
        }
        // Every relative path is hosted on SharePoint.
        if (thumbnailUri.format !== _SPResourcePath__WEBPACK_IMPORTED_MODULE_9__["_SPResourcePathFormat"].absolute) {
            return _ThumbnailProviderType__WEBPACK_IMPORTED_MODULE_10__["_ThumbnailProviderType"].SharePointHost;
        }
        if (thumbnailUri.format === _SPResourcePath__WEBPACK_IMPORTED_MODULE_9__["_SPResourcePathFormat"].absolute) {
            return this._pageContext && !thumbnailUri.isInternalResource(this._pageContext)
                ? _ThumbnailProviderType__WEBPACK_IMPORTED_MODULE_10__["_ThumbnailProviderType"].External
                : _ThumbnailProviderType__WEBPACK_IMPORTED_MODULE_10__["_ThumbnailProviderType"].SharePointHost;
        }
        // Either external, vanity domain or other sub domain of Sharepoint we could not recognize.
        return _ThumbnailProviderType__WEBPACK_IMPORTED_MODULE_10__["_ThumbnailProviderType"].Unknown;
    };
    /**
     * Returns true if given URL is public or private CDN
     * @param thumbnailUrl - Thumbnail URL under test
     */
    _ThumbnailUrlGenerator.prototype.isCdnUrl = function (thumbnailUrl) {
        var provider = this.getThumbnailProvider(thumbnailUrl);
        return (provider === _ThumbnailProviderType__WEBPACK_IMPORTED_MODULE_10__["_ThumbnailProviderType"].PrivateCDN ||
            provider === _ThumbnailProviderType__WEBPACK_IMPORTED_MODULE_10__["_ThumbnailProviderType"].PublicCDN ||
            provider === _ThumbnailProviderType__WEBPACK_IMPORTED_MODULE_10__["_ThumbnailProviderType"].AFDPrivateCDN);
    };
    /**
     * Converts given getPreviewUrl to optimal thumbnail service possible
     * @param getPreviewUrl - getPreview.aspx thumbnail Url
     * @param calledId - Identification of the caller
     * @param width - Requested width of the thumbnail
     */
    _ThumbnailUrlGenerator.prototype.fromGetPreview = function (getPreviewUrl, callerId, width) {
        if (width === void 0) { width = 400; }
        if (!getPreviewUrl) {
            return undefined;
        }
        if (!DOCVIZ_REGEX.test(getPreviewUrl)) {
            return undefined;
        }
        var getPreviewUri = new _SPResourcePath__WEBPACK_IMPORTED_MODULE_9__["_SPResourcePath"](getPreviewUrl);
        var baseUrl = getPreviewUri.authority;
        if (!baseUrl || baseUrl.length < 5) {
            // Relative URL can rely on current host
            var currentUri = new _SPResourcePath__WEBPACK_IMPORTED_MODULE_9__["_SPResourcePath"](window.location.href);
            baseUrl = currentUri.authority;
        }
        var request = {
            fileType: getPreviewUri.searchParams.get(_PreviewHelper__WEBPACK_IMPORTED_MODULE_6__["_PreviewHelper"].EXT) || undefined,
            absoluteUrl: baseUrl,
            spResource: getPreviewUri.searchParams.get(_PreviewHelper__WEBPACK_IMPORTED_MODULE_6__["_PreviewHelper"].PATH) || undefined,
            siteId: getPreviewUri.searchParams.get(_PreviewHelper__WEBPACK_IMPORTED_MODULE_6__["_PreviewHelper"].GUID_SITE) || undefined,
            webId: getPreviewUri.searchParams.get(_PreviewHelper__WEBPACK_IMPORTED_MODULE_6__["_PreviewHelper"].GUID_WEB) || undefined,
            uniqueId: getPreviewUri.searchParams.get(_PreviewHelper__WEBPACK_IMPORTED_MODULE_6__["_PreviewHelper"].GUID_FILE) || undefined,
            width: width,
            callerId: callerId
        };
        if (!request.fileType && request.spResource) {
            var resource = new _SPResourcePath__WEBPACK_IMPORTED_MODULE_9__["_SPResourcePath"](request.spResource);
            request.fileType = _PreviewUtility__WEBPACK_IMPORTED_MODULE_7__["_PreviewUtility"].getFileExtension(resource);
        }
        return this.getThumbnailUrl(request) || getPreviewUrl;
    };
    _ThumbnailUrlGenerator.prototype.isVROOMThumbnailEnabled = function () {
        return !!this._mediaTAForThumbnailEnabled;
    };
    _ThumbnailUrlGenerator.prototype._pruneShareUrl = function (url) {
        // E.g. The share URL like https://microsoft.sharepoint-df.com/_api/v2.1/:i:/r/sites/xxx
        // will be updated to https://microsoft.sharepoint-df.com/_api/v2.1/sites/xxx
        return url.replace(/\/:\w:\/\w/, '');
    };
    /** ------------------- PRIVATE ------------------- **/
    /**
     * Converts unknown url to best possible thumbnail service
     * @param request - Requested info about thumbnail
     */
    _ThumbnailUrlGenerator.prototype._fromUnknownThumbnailUrl = function (request, defaultImage) {
        var provider = this.getThumbnailProvider(request.unknownThumbnailUrl, !!defaultImage /* isStockImage */);
        switch (provider) {
            case _ThumbnailProviderType__WEBPACK_IMPORTED_MODULE_10__["_ThumbnailProviderType"].DocViz:
                return this.fromGetPreview(request.unknownThumbnailUrl, request.callerId, request.width);
            case _ThumbnailProviderType__WEBPACK_IMPORTED_MODULE_10__["_ThumbnailProviderType"].MeTA:
            case _ThumbnailProviderType__WEBPACK_IMPORTED_MODULE_10__["_ThumbnailProviderType"].VROOMMeTACache:
            case _ThumbnailProviderType__WEBPACK_IMPORTED_MODULE_10__["_ThumbnailProviderType"].PrivateCDN:
            case _ThumbnailProviderType__WEBPACK_IMPORTED_MODULE_10__["_ThumbnailProviderType"].PublicCDN:
            case _ThumbnailProviderType__WEBPACK_IMPORTED_MODULE_10__["_ThumbnailProviderType"].AFDPrivateCDN:
                return this.updateThumbnailWidth(request.unknownThumbnailUrl, request.width);
            case _ThumbnailProviderType__WEBPACK_IMPORTED_MODULE_10__["_ThumbnailProviderType"].SharePointHost:
            case _ThumbnailProviderType__WEBPACK_IMPORTED_MODULE_10__["_ThumbnailProviderType"].MySite:
                // We identified that resource is pointing to something in Sharepoint
                // Let API convert it into appropriate thumbnail URL
                if (!request.spResource) {
                    request.spResource = request.unknownThumbnailUrl;
                }
                // Important to set undefined to avoid recursive call here.
                request.unknownThumbnailUrl = undefined;
                return this.getThumbnailUrl(request, defaultImage);
            case _ThumbnailProviderType__WEBPACK_IMPORTED_MODULE_10__["_ThumbnailProviderType"].Stock:
            case _ThumbnailProviderType__WEBPACK_IMPORTED_MODULE_10__["_ThumbnailProviderType"].PublicCDNDefault:
            case _ThumbnailProviderType__WEBPACK_IMPORTED_MODULE_10__["_ThumbnailProviderType"].PublicCDNHubble:
            case _ThumbnailProviderType__WEBPACK_IMPORTED_MODULE_10__["_ThumbnailProviderType"].Unknown:
                return request.unknownThumbnailUrl;
            default:
                return request.unknownThumbnailUrl;
        }
    };
    _ThumbnailUrlGenerator.prototype._isViewportParametersSpecified = function (request) {
        return (_ThumbnailUrlGenerator._isViewportNumberValid(request.viewportHeight) &&
            _ThumbnailUrlGenerator._isViewportNumberValid(request.viewportWidth) &&
            _ThumbnailUrlGenerator._isViewportNumberValid(request.viewportTop) &&
            _ThumbnailUrlGenerator._isViewportNumberValid(request.viewportLeft));
    };
    /**
     * This method redirects request to GetPreview service as fallback in the event of any failure or delay
     */
    _ThumbnailUrlGenerator.prototype._fallbackToGetPreview = function (request) {
        return _PreviewHelper__WEBPACK_IMPORTED_MODULE_6__["_PreviewHelper"].getPreviewImageUrl(request.fileType, request.thumbnail, request.absoluteUrl, request.spResource, request.siteId, request.webId, request.uniqueId, request.width, false, // isBannerImageUrl
        request.callerId);
    };
    /**
     * Get preloaded preview Url of the image if already loaded
     */
    _ThumbnailUrlGenerator.prototype._getPreLoadedImage = function (request) {
        var preloadedUrl = undefined;
        if (request && request.spResource) {
            var preloadImageDictionary = this._getPreloadedDictionary();
            if (preloadImageDictionary) {
                preloadedUrl = this._readUrlFromDictionary(preloadImageDictionary, request.spResource);
                if (!preloadedUrl) {
                    var path = new _SPResourcePath__WEBPACK_IMPORTED_MODULE_9__["_SPResourcePath"](request.spResource).path;
                    if (path) {
                        preloadedUrl = this._readUrlFromDictionary(preloadImageDictionary, path);
                    }
                }
            }
        }
        if (_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["_SPFlight"].isEnabled(1994 /* WEXAkamaiV2PrivateCDNUpdate */) && preloadedUrl) {
            var queryParam = preloadedUrl.split('?');
            if (queryParam[1] && queryParam[1].indexOf('AuthVer=') > -1) {
                var leveragePreloadedImage = !_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["_SPKillSwitch"].isActivated('9d7598e2-9295-49f1-9c52-cf2c32488bce' /* '12/02/2020', 'WEX Leverage preloaded Image' */);
                if (leveragePreloadedImage) {
                    request.width = Math.max(this.getThumbnailWidth(preloadedUrl, _ThumbnailProviderType__WEBPACK_IMPORTED_MODULE_10__["_ThumbnailProviderType"].PrivateCDN), request.width);
                    // Keep same width, by reversing effect of MAX_PIXEL_RATIO if any
                    request.width =
                        !Object(_Experiments__WEBPACK_IMPORTED_MODULE_13__["isBreakpointStraddleOn"])() && window.devicePixelRatio >= _PreviewUtility__WEBPACK_IMPORTED_MODULE_7__["MAX_PIXEL_RATIO"]
                            ? request.width / _PreviewUtility__WEBPACK_IMPORTED_MODULE_7__["MAX_PIXEL_RATIO"]
                            : request.width;
                    return this.getCDNUrl(request); // Regenerate URL with eat and oat
                }
                return undefined;
            }
        }
        return this._validateResolution(preloadedUrl, request) ? preloadedUrl : undefined;
    };
    _ThumbnailUrlGenerator.prototype._getPreloadedDictionary = function () {
        var preloadImageDictionary = window[PRELOAD_IMAGES_KEY];
        if (preloadImageDictionary && !this._isDecodedKeyAdded) {
            this._isDecodedKeyAdded = true;
            // e.g. Add key /teams/News/SitePages/Welcome to WEX.aspx for /teams/News/SitePages/Welcome%20to%20WEX.aspx
            for (var urlKey in preloadImageDictionary) {
                if (urlKey) {
                    var decodedUrlKey = void 0;
                    try {
                        decodedUrlKey = decodeURIComponent(urlKey);
                    }
                    catch (_a) {
                        decodedUrlKey = urlKey;
                    }
                    if (decodedUrlKey !== urlKey) {
                        preloadImageDictionary[decodedUrlKey] = preloadImageDictionary[urlKey];
                    }
                }
            }
        }
        return preloadImageDictionary;
    };
    /**
     * Return downscaled URL for default Image. By default Default Images are downloaded as it is on all devices except
     * it is mapped correctly with different image for different device.
     * Now with integration with public CDN and downscale backed by MeTA, we should be able to download required size
     * default image for different screen sizes.
     * If MeTA/Public CND service is not available, it fallbacks to legacy behavior.
     * Note that MeTA response is cached on Akamai that CDN never going to MeTA again except once a year per file per meta Host.
     * Also if File is changed, it's URL is changes thus causing automatic refresh.
     *
     * @param publicImage - URL of public Image where host is onboarded with MeTa. See UrlProvider.cs for include list of hosts
     * https://onedrive.visualstudio.com/OneDrive%20Service/_git/MediaTransformAndAnalysis?path=%2FDataSourceProviders.Implementation%2FUrlProvider.cs&_a=contents&version=GBmaster
     * @param request  - Incodming thumbnail request
     */
    _ThumbnailUrlGenerator.prototype._getPublicCDNMeTAUrl = function (publicImage, request) {
        var downscaleDefaultImage = !_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["_SPKillSwitch"].isActivated('5a50bc60-ea79-436e-abc7-a250c57d3a2a' /* '12/08/2020', 'WEX downscale approved Default Images' */);
        if (downscaleDefaultImage && this.mediaCDNBaseUrl) {
            var defaultImagePath = new _SPResourcePath__WEBPACK_IMPORTED_MODULE_9__["_SPResourcePath"](publicImage);
            switch (defaultImagePath.domain) {
                // Rewrite only MeTA approved hosts
                case 'modern.akamai.odsp.cdn.office.net':
                case 'az741266.vo.msecnd.net':
                    if (_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["_SPKillSwitch"].isActivated('32010756-bb06-4a49-bbaf-cbbf26469742' /* '01/06/2021', 'WEX Onboard new host for default stock images' */)) {
                        return publicImage;
                    }
                    else {
                        break;
                    }
                case 'spoprod-a.akamaihd.net':
                case 'spoppe-a.akamaihd.net':
                case HUBBLE_STOCK_HOSTNAME:
                    break;
                default:
                    return publicImage;
            }
            var meTAHostUrl = _ms_odsp_utilities_lib_alternativeUrls_SPAlternativeUrls__WEBPACK_IMPORTED_MODULE_4__["tryGetAlternativeUrl"]('MediaTAThumbnailHostUrl');
            if (meTAHostUrl) {
                var width = request.width
                    ? _PreviewUtility__WEBPACK_IMPORTED_MODULE_7__["_PreviewUtility"].normalizeWidth(request.width)
                    : _PreviewUtility__WEBPACK_IMPORTED_MODULE_7__["CACHE_BREAKPOINT_S"];
                var fileType = request.fileType || _PreviewUtility__WEBPACK_IMPORTED_MODULE_7__["_PreviewUtility"].getFileExtension(defaultImagePath);
                // Downscale Image using MeTA
                var metaAuthority = new _SPResourcePath__WEBPACK_IMPORTED_MODULE_9__["_SPResourcePath"](_ms_odsp_utilities_lib_alternativeUrls_SPAlternativeUrls__WEBPACK_IMPORTED_MODULE_4__["tryGetAlternativeUrl"]('MediaTAThumbnailHostUrl'));
                // tslint:disable-next-line: max-line-length
                // e.g. https://publiccdn-staging.sharepointonline.com/centralus1-mediap.svc.ms/transform/thumbnail?provider=url&inputFormat=jpg&width=400&docid=https://spoprod-a.akamaihd.net/files/sp-client/reportDefaultImage1_9c5a39f9e081c6e44e752f1a2791affc.png
                var publicCdnUrl = this.mediaCDNBaseUrl + "/" + metaAuthority.domain + "/transform/thumbnail?provider=url&inputFormat=" + fileType + "&docid=" + encodeURIComponent(publicImage) + "&w=" + width;
                var isCropModeSpecified = request.height && request.cropMode && request.cropMode !== _IThumbnailRequest__WEBPACK_IMPORTED_MODULE_8__["_CropMode"].Default;
                var isViewportSpecified = this._isViewportParametersSpecified(request);
                if (isCropModeSpecified) {
                    publicCdnUrl = publicCdnUrl + "&h=" + request.height + "&cm=" + request.cropMode;
                }
                if (isViewportSpecified) {
                    publicCdnUrl = publicCdnUrl + "&vl=" + request.viewportLeft + "&vt=" + request.viewportTop + "&vw=" + request.viewportWidth + "&vh=" + request.viewportHeight;
                }
                return publicCdnUrl;
            }
        }
        return publicImage;
    };
    /**
     * Ensure the preloaded image is close enough to the resolution requirement
     * @param preloadedUrl - Preloaded image Url
     * @param request - Thumbnail request containing resolution requirements
     */
    _ThumbnailUrlGenerator.prototype._validateResolution = function (preloadedUrl, request) {
        if (!preloadedUrl) {
            return false;
        }
        if (!request.width) {
            return true;
        }
        var uri = new _SPResourcePath__WEBPACK_IMPORTED_MODULE_9__["_SPResourcePath"](preloadedUrl);
        var resolution = uri.searchParams.get('resolution') || undefined;
        if (resolution) {
            var reqResolution = _PreviewUtility__WEBPACK_IMPORTED_MODULE_7__["_PreviewUtility"].normalizeWidthToResolution(request.width);
            var actualResolution = Number(resolution);
            return this._validateImageProperty(reqResolution, actualResolution, 'Resolution', request.callerId);
        }
        var preloadedlWidth = this.getThumbnailWidth(preloadedUrl);
        if (preloadedlWidth) {
            var requestedWidth = _PreviewUtility__WEBPACK_IMPORTED_MODULE_7__["_PreviewUtility"].normalizeWidth(request.width);
            if (!isNaN(requestedWidth) && !isNaN(preloadedlWidth)) {
                _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_5__["_PerformanceLogger"].updatePreloadImageUsage(preloadedUrl, {
                    requestedWith: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, (requestedWidth > preloadedlWidth
                        ? { isLarger: true }
                        : requestedWidth === preloadedlWidth
                            ? { isSame: true }
                            : { isSmaller: true }))
                });
            }
            return this._validateImageProperty(requestedWidth, preloadedlWidth, 'Width', request.callerId);
        }
        return true;
    };
    _ThumbnailUrlGenerator.prototype._validateImageProperty = function (requestedValue, preloadedlWidth, failureTagProperty, callerId) {
        var failureTagPrefix = 'ImagePreload';
        var failureTag = undefined;
        if (requestedValue === undefined) {
            failureTag = "" + failureTagPrefix + failureTagProperty + "Missing";
        }
        else if (!isNaN(preloadedlWidth) && requestedValue > preloadedlWidth) {
            failureTag = "" + failureTagPrefix + failureTagProperty + "Mismatch";
        }
        if (failureTag) {
            var qosMonitor = new _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__["_QosMonitor"]('ImagePreloadMismatch');
            // Track whether mismatches are affected by straddling using existing pre-agg
            var extraData = !Object(_GenericKillSwitches__WEBPACK_IMPORTED_MODULE_12__["isStraddleKSActivated"])()
                ? {
                    alias: Object(_Experiments__WEBPACK_IMPORTED_MODULE_13__["isBreakpointStraddleOn"])() ? 'Straddle_On' : 'Straddle_Off',
                    service: callerId
                }
                : undefined;
            qosMonitor.writeUnexpectedFailure(failureTag, /* ex */ undefined, extraData);
        }
        return !failureTag;
    };
    _ThumbnailUrlGenerator.prototype._readUrlFromDictionary = function (dictionary, key) {
        try {
            return dictionary[key] || dictionary[decodeURIComponent(key)];
        }
        catch (error) {
            return undefined;
        }
    };
    /**
     * Returns true if given path represents SPO layouts file
     * e.g. /_layouts/15/images/sitepagethumbnail.png
     * @param resourcePath - Absolute or relative path of the resource
     */
    _ThumbnailUrlGenerator.prototype._isLayoutsImage = function (resourcePath) {
        return resourcePath && resourcePath.toLowerCase().indexOf('/_layouts/15/') > -1;
    };
    return _ThumbnailUrlGenerator;
}());

/* tslint:disable:export-name */
/* harmony default export */ __webpack_exports__["default"] = (_ThumbnailUrlGenerator.instance);
/* tslint:enable:export-name */


/***/ }),

/***/ "17wl":
/*!************************!*\
  !*** external "tslib" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__17wl__;

/***/ }),

/***/ "1AKv":
/*!****************************!*\
  !*** ./lib/Experiments.js ***!
  \****************************/
/*! exports provided: isBreakpointStraddleOn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isBreakpointStraddleOn", function() { return isBreakpointStraddleOn; });
/* harmony import */ var _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ms/sp-telemetry */ "2q6Q");
/* harmony import */ var _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _GenericKillSwitches__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GenericKillSwitches */ "BiRd");


/**
 * Server-side window variable name to align when graduating the straddling experiment.
 * See more below on details.
 */
var SERVER_STRADDLE_KEY = '_shouldStraddleImageBreakpoint';
/**
 * Whether experiment is enabled to request lower breakpoint when resolution doesn't exceed it by a certain margin.
 */
// tslint:disable-next-line:export-name
function isBreakpointStraddleOn() {
    return (_ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_0__["_SPPerfExperiment"].getVariantAndTrackExperiment(_ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_0__["_PerformanceExperiment"].WEXImageBreakpointStraddlePerfExperiment, true /* usedInServer */) !== 0 ||
        (!Object(_GenericKillSwitches__WEBPACK_IMPORTED_MODULE_1__["isStraddleKSActivated"])() && window[SERVER_STRADDLE_KEY] === true));
}


/***/ }),

/***/ "2q6Q":
/*!***********************************!*\
  !*** external "@ms/sp-telemetry" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__2q6Q__;

/***/ }),

/***/ "4gON":
/*!**************************************!*\
  !*** ./lib/ThumbnailProviderType.js ***!
  \**************************************/
/*! exports provided: _ThumbnailProviderType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_ThumbnailProviderType", function() { return _ThumbnailProviderType; });
/**
 * @file ThumbnailProviderType.ts
 * @copyright Microsoft Corporation. All rights reserved.
 */
/**
 * Type of the thumbnail URL service.
 *
 * @preapproved @internal
 */
var _ThumbnailProviderType;
(function (_ThumbnailProviderType) {
    /**
     * Unknwon URL type, possibly full path
     */
    _ThumbnailProviderType[_ThumbnailProviderType["Unknown"] = 0] = "Unknown";
    /**
     * URL served via private Content delivery network (CDN)
     */
    _ThumbnailProviderType[_ThumbnailProviderType["PrivateCDN"] = 1] = "PrivateCDN";
    /**
     * URL served via AFD private Content delivery network (CDN)
     */
    _ThumbnailProviderType[_ThumbnailProviderType["AFDPrivateCDN"] = 2] = "AFDPrivateCDN";
    /**
     * URL's pointing getPreview.aspx end point served by DocViz service.
     * This service is under deprecation process.
     */
    _ThumbnailProviderType[_ThumbnailProviderType["DocViz"] = 3] = "DocViz";
    /**
     * Media thumbnail micro service. This is core service for generating thumbnail.
     */
    _ThumbnailProviderType[_ThumbnailProviderType["MeTA"] = 4] = "MeTA";
    /**
     * Thumbnail Url is hosted on my site.
     */
    _ThumbnailProviderType[_ThumbnailProviderType["MySite"] = 5] = "MySite";
    /**
     * Thumbnail URL is same as original full Image path.
     */
    _ThumbnailProviderType[_ThumbnailProviderType["Original"] = 6] = "Original";
    /***
     * Actual type of the thumbnail provider is not known but it is hosted on same SharePoint host.
     */
    _ThumbnailProviderType[_ThumbnailProviderType["SharePointHost"] = 7] = "SharePointHost";
    /**
     * Thumbnail URL is representing stock image, hosted as static asset.
     */
    _ThumbnailProviderType[_ThumbnailProviderType["Stock"] = 8] = "Stock";
    /**
     * VROOM thumbnail URL return response from alt stream cache if available before redirecting to MeTA.
     * This is similar to VROOMMeTA except it first leverage the cache before redirect.
     */
    _ThumbnailProviderType[_ThumbnailProviderType["VROOMMeTACache"] = 9] = "VROOMMeTACache";
    /**
     * URL served via public content delivery network (CDN)
     */
    _ThumbnailProviderType[_ThumbnailProviderType["PublicCDN"] = 10] = "PublicCDN";
    /**
     * URL external to the SharePoint including multi geo or any other hosted service managed by Sharepoint
     * like CDN, Microservices. External URLs are treated as it is as they are not handled by thumbnail services
     */
    _ThumbnailProviderType[_ThumbnailProviderType["External"] = 11] = "External";
    /**
     * Default Image served through public CDN with dowwnscaling feature.
     */
    _ThumbnailProviderType[_ThumbnailProviderType["PublicCDNDefault"] = 12] = "PublicCDNDefault";
    /**
     * HubbleStock Image Url served through public CDN with dowwnscaling feature.
     */
    _ThumbnailProviderType[_ThumbnailProviderType["PublicCDNHubble"] = 13] = "PublicCDNHubble";
    /**
     * Stock images hosted by cdn.hubblecontent.osi.office.net
     * e.g. https://cdn.hubblecontent.osi.office.net/m365content/publish/041428cd-95d3-4cee-a3d0-bf21455c9b3f/503586914.jpg
     */
    _ThumbnailProviderType[_ThumbnailProviderType["HubbleStock"] = 14] = "HubbleStock";
})(_ThumbnailProviderType || (_ThumbnailProviderType = {}));


/***/ }),

/***/ "BiRd":
/*!************************************!*\
  !*** ./lib/GenericKillSwitches.js ***!
  \************************************/
/*! exports provided: isStraddleKSActivated */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isStraddleKSActivated", function() { return isStraddleKSActivated; });
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__);

/**
 * Breakpoint straddling experiment protection for extra telemetry
 */
// tslint:disable-next-line:export-name
function isStraddleKSActivated() {
    return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPKillSwitch"].isActivated('379e8b8d-c257-420b-afac-94a5bec61e82'
    /* '11/25/2020', 'WEX image breakpoint straddling experiment' */
    );
}


/***/ }),

/***/ "FC4P":
/*!**********************************!*\
  !*** ./lib/IThumbnailRequest.js ***!
  \**********************************/
/*! exports provided: _CropMode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_CropMode", function() { return _CropMode; });
/**
 * @file IThumbnailRequest.ts
 * @copyright Microsoft Corporation. All rights reserved.
 */
/***
 * Crop modes. Based on the modes supported by MeTA
 * @internal
 */
var _CropMode;
(function (_CropMode) {
    _CropMode["Default"] = "fit";
    _CropMode["Fit"] = "fit";
    _CropMode["Fill"] = "fill";
    _CropMode["Top"] = "top";
    _CropMode["Bottom"] = "bottom";
    _CropMode["DocHead"] = "dochead";
})(_CropMode || (_CropMode = {}));


/***/ }),

/***/ "K9kD":
/*!***************************************!*\
  !*** external "@ms/odsp-core-bundle" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_K9kD__;

/***/ }),

/***/ "Ll3B":
/*!*********************************************!*\
  !*** ./lib/ThumbnailHealingKillSwitches.js ***!
  \*********************************************/
/*! exports provided: isCDNRewriteKSActivated, isVROOMThumbnailRewriteKSActivated, isPreferNoRedirectQueryKSActivated, isDocVizUrlRewriteKSActivated */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isCDNRewriteKSActivated", function() { return isCDNRewriteKSActivated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isVROOMThumbnailRewriteKSActivated", function() { return isVROOMThumbnailRewriteKSActivated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPreferNoRedirectQueryKSActivated", function() { return isPreferNoRedirectQueryKSActivated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDocVizUrlRewriteKSActivated", function() { return isDocVizUrlRewriteKSActivated; });
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__);

/**
 * Contains predefined kill switches across server and client to disable rewrite to specific
 * service during emergency. These kill switches should not be activated in general but only during
 * emergency situation to mitigate live site for a farm or environment as required.
 * In case a kill switch is activated globally to update guid, ensure to also update the server side guid for same.
 *
 * @internal
 */
// tslint:disable-next-line:class-name export-name
/**
 * Do not rewrite URL to CND when true
 */
function isCDNRewriteKSActivated() {
    return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPKillSwitch"].isActivated('c2151f9e-ff03-4fa5-8852-10f75e817d4e'
    /* '03/01/2020', 'WEX Disable CDN Rewrite' */
    );
}
/**
 * Do not rewrite URL to VROOM Thumbnail when true
 */
function isVROOMThumbnailRewriteKSActivated() {
    return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPKillSwitch"].isActivated('318c1916-4594-4509-8ab7-cdb100182007'
    /* '03/01/2020', 'WEX Disable VROOM Thumbnail rewrite' */
    );
}
/**
 * Do not rewrite VROOM Thumbnail using preferNoRedirect=true. Force 302 to MeTA
 */
function isPreferNoRedirectQueryKSActivated() {
    return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPKillSwitch"].isActivated('9e04d5fb-066d-4e02-b0b6-7fe53bf2af65'
    /* '03/01/2020', 'WEX Disable VROOM Thumbnail preferNoRedirect=true query' */
    );
}
/**
 * Do not rewrite URL to getPreview.ashx when true.
 * @Warning Certain environments like Gallatin supports only DocViz
 */
function isDocVizUrlRewriteKSActivated() {
    return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPKillSwitch"].isActivated('67d7e188-b33c-4fc2-8862-a072c6d8afb4'
    /* '03/01/2020', 'WEX Disable DocViz URL Rewrite' */
    );
}


/***/ }),

/***/ "OLPK":
/*!*******************************!*\
  !*** ./lib/SPResourcePath.js ***!
  \*******************************/
/*! exports provided: _SPResourcePathFormat, _SPResourcePath */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_SPResourcePathFormat", function() { return _SPResourcePathFormat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_SPResourcePath", function() { return _SPResourcePath; });
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__);

var UPPER_CASE_ENCODING_REGEXP = new RegExp(/(\%[0-9][A-F])|(\%[A-F][0-9])|(\%[A-F][A-F])/g);
var LOWER_CASE_ENCODING_REGEXP = new RegExp(/(\%[0-9][a-f])|(\%[a-f][0-9])|(\%[a-f][a-f])/g);
/**
 * @internal
 */
var _SPResourcePathFormat;
(function (_SPResourcePathFormat) {
    _SPResourcePathFormat[_SPResourcePathFormat["absolute"] = 0] = "absolute";
    _SPResourcePathFormat[_SPResourcePathFormat["relative"] = 1] = "relative";
    _SPResourcePathFormat[_SPResourcePathFormat["serverRelative"] = 2] = "serverRelative";
})(_SPResourcePathFormat || (_SPResourcePathFormat = {}));
/**
 * Simplified implementation of a URI parser which does not attempt decoding of segments,
 * handling of query strings, or separation of the fragment. Intended for use on SharePoint
 * Resource Paths or other URL-like entities which may not actually conform to the URL
 * specification, but may be used for simple transformations of URLs.
 *
 * This class makes several assumptions about the format of input URLs:
 * - Absolute URLs begin with '<scheme>://<host>'
 * - Relative URLs being with '/'
 * - URLs never have a trailing '/'
 *
 * @internal
 */
// tslint:disable-next-line:class-name export-name
var _SPResourcePath = /** @class */ (function () {
    /**
     * Creates an instance of SPResourcePath.
     *
     * @param value - A string representing a well-formed, decoded SharePoint resource path.
     * @param relativePath - An optional, decoded path to be appended to the first parameter.
     */
    function _SPResourcePath(value, relativePath) {
        if (value === void 0) { value = ''; }
        var rootDelimeter = '//';
        var searchDelimiter = '?';
        if (relativePath) {
            if (value[value.length - 1] === '/' && relativePath[0] === '/') {
                value = value + relativePath.slice(1);
            }
            else if (value[value.length - 1] !== '/' && relativePath[0] !== '/') {
                value = value + '/' + relativePath;
            }
            else {
                value = value + relativePath;
            }
        }
        var indexOfRootDelimeter = value.indexOf(rootDelimeter);
        var indexOfPathDelimeter = value.indexOf('/');
        var indexOfSearchDelimeter = value.indexOf(searchDelimiter);
        // The root delimeter is the first instance of '//', unless preceded by a lone '/'
        var endIndexOfRootDelimeter = indexOfRootDelimeter > -1 && indexOfRootDelimeter <= indexOfPathDelimeter
            ? indexOfRootDelimeter + rootDelimeter.length
            : -1;
        var authority = getAuthority(value, endIndexOfRootDelimeter);
        var domain = authority && authority.slice(endIndexOfRootDelimeter);
        // By definition, everything after the authority is the path
        var path = indexOfSearchDelimeter > 0
            ? value.slice(authority.length, indexOfSearchDelimeter)
            : value.slice(authority.length);
        var format = authority
            ? _SPResourcePathFormat.absolute
            : path[0] === '/'
                ? _SPResourcePathFormat.serverRelative
                : _SPResourcePathFormat.relative;
        var segments = path.split('/');
        if (!_SPResourcePath._isMatchEncodingCaseKSActivated()) {
            this.originalSearchString = indexOfSearchDelimeter > 0 ? value.slice(indexOfSearchDelimeter) : '';
            this.searchParams = new URLSearchParams(this.originalSearchString);
        }
        else {
            var search = indexOfSearchDelimeter > 0 ? value.slice(indexOfSearchDelimeter) : '';
            this.searchParams = new URLSearchParams(search);
        }
        this.authority = authority;
        this.domain = domain;
        this.format = format;
        this.path = path;
        this.segments = segments;
        this.value = value;
    }
    _SPResourcePath._getTenantInfoFromPageContext = function (pageContext) {
        return {
            isMultiGeo: pageContext.legacyPageContext.isMultiGeoTenant,
            multiGeoInfo: pageContext.legacyPageContext.multiGeoInfo,
            singleTenant: pageContext.legacyPageContext.vanityUrls
        };
    };
    _SPResourcePath._getHostFromUrl = function (url) {
        return url ? new _SPResourcePath(url).domain : url;
    };
    _SPResourcePath._getMySiteAndPortalDomain = function () {
        var mySiteSuffix = '-my';
        var currentDomain = window.location.protocol + "//" + window.location.hostname;
        var tenantName = window.location.hostname.substr(0, window.location.hostname.indexOf('.'));
        if (tenantName.indexOf(mySiteSuffix, tenantName.length - mySiteSuffix.length) === -1) {
            var mySiteHostDomain = currentDomain
                .toString()
                .replace(tenantName, tenantName + mySiteSuffix);
            return [mySiteHostDomain, currentDomain];
        }
        else {
            var portalDomain = currentDomain
                .toString()
                .replace(tenantName, tenantName.substring(0, tenantName.length - mySiteSuffix.length));
            return [currentDomain, portalDomain];
        }
    };
    _SPResourcePath._isMatchEncodingCaseKSActivated = function () {
        return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPKillSwitch"].isActivated('49e11652-479f-49f0-8212-c08f19d812f2'
        /* 11/09/2020, 'force the case of encodings to match the input case (i.e. input of %3d -> output %3d and not %3D)' */
        );
    };
    /**
     * Create a single string that includes the query/search parameters
     */
    _SPResourcePath.prototype.toString = function () {
        var _a;
        if (!_SPResourcePath._isMatchEncodingCaseKSActivated()) {
            return this.authority + this.path + this.searchParamString;
        }
        return this.authority + this.path + '?' + ((_a = this.searchParams.toString()) === null || _a === void 0 ? void 0 : _a.replace(/\+/g, '%20'));
    };
    /**
     * Compare against another SPResourcePath. The comparison will assume
     * query/search parameters are in the same order
     */
    _SPResourcePath.prototype.equals = function (value) {
        return value && this.toString() === value.toString();
    };
    /**
     * True if url is internal resource.
     */
    _SPResourcePath.prototype.isInternalResource = function (pageContext) {
        var _this = this;
        var tenantInfo = _SPResourcePath._getTenantInfoFromPageContext(pageContext);
        // Vanity urls are saved in different places with different format in page context
        // according to whether the tenant is multi-geo or not.
        // In multi-geo tenant, vanity urls is saved in AdditionalUrls in multiGeoInfo.
        // In non multi-geo tenant, vanity urls are saved in VanityUrls.
        try {
            if (tenantInfo.isMultiGeo && tenantInfo.multiGeoInfo) {
                return tenantInfo.multiGeoInfo.some(function (geoInfo) {
                    return (_this._isSameHost(geoInfo.PortalUrl) ||
                        _this._isSameHost(geoInfo.MySiteHostUrl) ||
                        _this._isSameHosts(geoInfo.AdditionalUrls));
                });
            }
            else {
                // Use vanity urls combined with current Geo info in non multiGeo tenant.
                var currentGeoDomains = _SPResourcePath._getMySiteAndPortalDomain();
                if (this._isSameHosts(currentGeoDomains)) {
                    return true;
                }
                if (tenantInfo.singleTenant && tenantInfo.singleTenant.SingleTenant_AdditionalVanityUrls) {
                    var vanityHosts = tenantInfo.singleTenant.SingleTenant_AdditionalVanityUrls.split(';');
                    if (vanityHosts.indexOf(this.domain) !== -1) {
                        return true;
                    }
                }
                if (tenantInfo.singleTenant && this._isInternalResourceOfSingleTenant(tenantInfo.singleTenant)) {
                    return true;
                }
            }
        }
        catch (error) {
            return false;
        }
        return false;
    };
    /**
     * Use this method to handle proper decoding of value before setting it.
     *
     * @param key - query param to set
     * @param value - value to set
     */
    _SPResourcePath.prototype.setSearchParam = function (key, value) {
        if (!value) {
            this.searchParams.set(key, value);
        }
        else {
            // For query strings only, "+" is a valid substitute for a space, but decodeURIComponent
            // doesn't take this into account. (Note that replace("+", " ") only replaces one +.)
            this.searchParams.set(key, decodeURIComponent(value.replace(/\+/g, ' ')));
        }
    };
    Object.defineProperty(_SPResourcePath.prototype, "searchParamString", {
        /**
         * Retrieve the search parameters back as a single string. If there are any search parameters,
         * this string will be preceeded with a '?'
         */
        get: function () {
            var _a;
            var toReturn = (_a = this.searchParams.toString()) === null || _a === void 0 ? void 0 : _a.replace(/\+/g, '%20');
            // If the original search string had lower case encoding, make sure the output
            // also has lower case encoding. The default encoding is upper case.
            if (!_SPResourcePath._isMatchEncodingCaseKSActivated() &&
                toReturn &&
                !!this.originalSearchString.match(LOWER_CASE_ENCODING_REGEXP)) {
                toReturn = toReturn.replace(UPPER_CASE_ENCODING_REGEXP, function (encoded) {
                    var _a;
                    return (_a = encoded) === null || _a === void 0 ? void 0 : _a.toLowerCase();
                });
            }
            // Make sure to add the query question mark if there is a query param string
            return toReturn ? '?' + toReturn : toReturn;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Helper method to retrieve a query parameter's value
     *
     * @param param - Parameter to return value
     *
     */
    _SPResourcePath.prototype.getQueryParameter = function (param) {
        var _a;
        return (_a = this.searchParams) === null || _a === void 0 ? void 0 : _a.get(param);
    };
    /**
     * Helper method to remove a query parameter
     *
     * @param param - Parameter to remove
     *
     */
    _SPResourcePath.prototype.removeQueryParameter = function (param) {
        var _a;
        (_a = this.searchParams) === null || _a === void 0 ? void 0 : _a.delete(param);
    };
    _SPResourcePath.prototype._isInternalResourceOfSingleTenant = function (singleTenant) {
        return ((singleTenant.SingleTenant_OneDriveUrl && singleTenant.SingleTenant_OneDriveUrl === this.domain) ||
            (singleTenant.SingleTenant_PortalUrl && singleTenant.SingleTenant_PortalUrl === this.domain) ||
            (singleTenant.SingleTenant_TeamSitesUrl && singleTenant.SingleTenant_TeamSitesUrl === this.domain));
    };
    _SPResourcePath.prototype._isSameHost = function (targetUrl) {
        return this.domain.toLowerCase() === _SPResourcePath._getHostFromUrl(targetUrl).toLowerCase();
    };
    _SPResourcePath.prototype._isSameHosts = function (targetUrls) {
        var _this = this;
        return targetUrls && targetUrls.some(function (targetUrl) { return _this._isSameHost(targetUrl); });
    };
    return _SPResourcePath;
}());

function getAuthority(value, endIndexOfRootDelimeter) {
    if (endIndexOfRootDelimeter > -1) {
        var indexOfNextSegment = value.indexOf('/', endIndexOfRootDelimeter);
        if (indexOfNextSegment > -1) {
            return value.slice(0, indexOfNextSegment);
        }
        else {
            return value;
        }
    }
    else {
        return '';
    }
}


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

/***/ "a61T":
/*!****************************!*\
  !*** ./lib/ImageHelper.js ***!
  \****************************/
/*! exports provided: ImageHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageHelper", function() { return ImageHelper; });
/**
 * Example exported class
 * @alpha
 */
var ImageHelper = /** @class */ (function () {
    function ImageHelper() {
    }
    return ImageHelper;
}());



/***/ }),

/***/ "mwqp":
/*!**********************!*\
  !*** ./lib/index.js ***!
  \**********************/
/*! exports provided: ImageHelper, _PreviewUtility, _PreviewHelper, _SPResourcePath, _SPResourcePathFormat, _ThumbnailProviderType, _ThumbnailUrlGenerator, _CropMode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ImageHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ImageHelper */ "a61T");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ImageHelper", function() { return _ImageHelper__WEBPACK_IMPORTED_MODULE_0__["ImageHelper"]; });

/* harmony import */ var _PreviewUtility__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PreviewUtility */ "v7I1");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_PreviewUtility", function() { return _PreviewUtility__WEBPACK_IMPORTED_MODULE_1__["_PreviewUtility"]; });

/* harmony import */ var _PreviewHelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PreviewHelper */ "tIik");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_PreviewHelper", function() { return _PreviewHelper__WEBPACK_IMPORTED_MODULE_2__["_PreviewHelper"]; });

/* harmony import */ var _SPResourcePath__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SPResourcePath */ "OLPK");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_SPResourcePath", function() { return _SPResourcePath__WEBPACK_IMPORTED_MODULE_3__["_SPResourcePath"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_SPResourcePathFormat", function() { return _SPResourcePath__WEBPACK_IMPORTED_MODULE_3__["_SPResourcePathFormat"]; });

/* harmony import */ var _ThumbnailProviderType__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ThumbnailProviderType */ "4gON");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_ThumbnailProviderType", function() { return _ThumbnailProviderType__WEBPACK_IMPORTED_MODULE_4__["_ThumbnailProviderType"]; });

/* harmony import */ var _ThumbnailUrlGenerator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ThumbnailUrlGenerator */ "+TnQ");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_ThumbnailUrlGenerator", function() { return _ThumbnailUrlGenerator__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _IThumbnailRequest__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./IThumbnailRequest */ "FC4P");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_CropMode", function() { return _IThumbnailRequest__WEBPACK_IMPORTED_MODULE_6__["_CropMode"]; });

 // tslint:disable-line:export-name








/***/ }),

/***/ "tIik":
/*!******************************!*\
  !*** ./lib/PreviewHelper.js ***!
  \******************************/
/*! exports provided: _PreviewHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_PreviewHelper", function() { return _PreviewHelper; });
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/sp-diagnostics */ "ut3N");
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _PreviewUtility__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PreviewUtility */ "v7I1");
/* harmony import */ var _SPResourcePath__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SPResourcePath */ "OLPK");
/* harmony import */ var _ThumbnailUrlGenerator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ThumbnailUrlGenerator */ "+TnQ");
/**
 * @copyright Microsoft Corporation. All rights reserved.
 *
 * @file utility functions to determine whether file type supports preview.
 * and return the preview image url based on the file url
 */





var MAX_BANNERURL_LEN = 255;
/**
 * @internal
 */
// tslint:disable-next-line:class-name export-name
var _PreviewHelper = /** @class */ (function () {
    function _PreviewHelper() {
    }
    _PreviewHelper.useVroomCropping = function () {
        return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPFlight"].isEnabled(630 /*VROOMThumbnailCrop*/);
    };
    /**
     * Returns true if the filetype is supported for preview.
     */
    _PreviewHelper.hasThumbnailOrFileTypeSupportsPreview = function (fileType, thumbnail) {
        return !!thumbnail || (!!fileType && _PreviewUtility__WEBPACK_IMPORTED_MODULE_2__["_PreviewUtility"].getPreviewSupportedMap.has(fileType.toLowerCase()));
    };
    /**
     * Returns preview image URL for supported file extentions using getPreview.aspx service
     * Note: width parameter is scaled window.devicePixelRatio times to handle high DPI for example
     */
    _PreviewHelper.getPreviewImageUrl = function (fileType, thumbnail, baseUrl, path, siteId, webId, uniqueId, width, isBannerImageUrl, callerId, originalWidth, originalHeight) {
        if (!isBannerImageUrl && _ThumbnailUrlGenerator__WEBPACK_IMPORTED_MODULE_4__["_ThumbnailUrlGenerator"].instance.isVROOMThumbnailEnabled()) {
            var qosMonitor = new _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__["_QosMonitor"]("DocVizCaller");
            qosMonitor.writeSuccess({ service: callerId || 'unknown' });
        }
        var resolution = _PreviewUtility__WEBPACK_IMPORTED_MODULE_2__["_PreviewUtility"].normalizeWidthToResolution(width);
        return _PreviewHelper._generateGetPreviewImageUrl(fileType, baseUrl, path, siteId, webId, uniqueId, resolution, isBannerImageUrl, originalWidth, originalHeight);
    };
    _PreviewHelper._generateGetPreviewImageUrl = function (fileType, baseUrl, path, siteId, webId, uniqueId, resolution, isBannerImageUrl, originalWidth, originalHeight) {
        var url = baseUrl && !!baseUrl.length
            ? new _SPResourcePath__WEBPACK_IMPORTED_MODULE_3__["_SPResourcePath"](baseUrl, _PreviewHelper.PREVIEW_HANDLER_PATH)
            : new _SPResourcePath__WEBPACK_IMPORTED_MODULE_3__["_SPResourcePath"](_PreviewHelper.PREVIEW_HANDLER_PATH);
        if (resolution !== undefined && !isNaN(resolution)) {
            url.searchParams.set(_PreviewHelper.RESOLUTION, resolution.toString());
        }
        // Convert to guids for brevity as final URL should be minimal to fit in 255 SP URL limit
        var siteGuid = _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Guid"].tryParse(siteId);
        var webGuid = _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Guid"].tryParse(webId);
        var fileGuid = _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Guid"].tryParse(uniqueId);
        // Giving preference to path over Guid to improve CDN Rewrite coverage
        var pathOverGuid = _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPFlight"].isEnabled(60134 /* WEXUsePathOverGuidForBannerImageUrl */) &&
            isBannerImageUrl &&
            !!path &&
            url.toString().length + path.length <= MAX_BANNERURL_LEN;
        if (siteGuid && webGuid && fileGuid && !pathOverGuid) {
            url.searchParams.set(_PreviewHelper.GUID_SITE, siteGuid.toString().replace(/-/g, ''));
            url.searchParams.set(_PreviewHelper.GUID_WEB, webGuid.toString().replace(/-/g, ''));
            url.searchParams.set(_PreviewHelper.GUID_FILE, fileGuid.toString().replace(/-/g, ''));
        }
        else if (path) {
            url.setSearchParam(_PreviewHelper.PATH, path);
        }
        if (!isBannerImageUrl) {
            url.searchParams.set(_PreviewUtility__WEBPACK_IMPORTED_MODULE_2__["_PreviewUtility"].CLIENT_TYPE, _PreviewUtility__WEBPACK_IMPORTED_MODULE_2__["_PreviewUtility"].MODERN_WEB_PART);
        }
        if (isBannerImageUrl && fileType) {
            url.searchParams.set(_PreviewHelper.EXT, fileType);
            if (url.toString().length >= MAX_BANNERURL_LEN) {
                url.searchParams.delete(_PreviewHelper.EXT);
            }
        }
        if (isBannerImageUrl && originalWidth && originalHeight) {
            url.searchParams.set(_PreviewHelper.ORIGINAL_WIDTH, originalWidth.toString());
            url.searchParams.set(_PreviewHelper.ORIGINAL_HEIGHT, originalHeight.toString());
            if (url.toString().length >= MAX_BANNERURL_LEN) {
                url.searchParams.delete(_PreviewHelper.ORIGINAL_WIDTH);
                url.searchParams.delete(_PreviewHelper.ORIGINAL_HEIGHT);
            }
        }
        return url.toString();
    };
    _PreviewHelper.RESOLUTION = 'resolution';
    _PreviewHelper.GUID_SITE = 'guidSite';
    _PreviewHelper.GUID_WEB = 'guidWeb';
    _PreviewHelper.GUID_FILE = 'guidFile';
    _PreviewHelper.PATH = 'path';
    _PreviewHelper.EXT = 'ext';
    _PreviewHelper.ORIGINAL_WIDTH = 'ow';
    _PreviewHelper.ORIGINAL_HEIGHT = 'oh';
    _PreviewHelper.WIDTH = 'width';
    _PreviewHelper.WIDTH_SHORT = 'w';
    _PreviewHelper.HEIGHT_SHORT = 'h';
    _PreviewHelper.VIEWPORT_LEFT = 'vl';
    _PreviewHelper.VIEWPORT_TOP = 'vt';
    _PreviewHelper.VIEWPORT_WIDTH = 'vw';
    _PreviewHelper.VIEWPORT_HEIGHT = 'vh';
    _PreviewHelper.CALLER_STACK = 'cs';
    _PreviewHelper.INPUT_FORMAT = 'inputFormat';
    _PreviewHelper.DOCID = 'docid';
    _PreviewHelper.PREVIEW_HANDLER_PATH = '/_layouts/15/getpreview.ashx';
    // video file extensions within the support preview file types
    _PreviewHelper.VIDEO_EXTENSIONS = [
        '3gp',
        'asf',
        'avi',
        'mod',
        'mov',
        'mp4',
        'mpeg',
        'mpg',
        'mts',
        'ts',
        'vob',
        'wmv'
    ];
    _PreviewHelper.IMAGE_EXTENSIONS = [
        'gif',
        'jpg',
        'jpeg',
        'bmp',
        'dib',
        'tif',
        'tiff',
        'ico',
        'png',
        'jxr',
        'svg'
    ];
    return _PreviewHelper;
}());



/***/ }),

/***/ "ut3N":
/*!********************************************!*\
  !*** external "@microsoft/sp-diagnostics" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_ut3N__;

/***/ }),

/***/ "v7I1":
/*!*******************************!*\
  !*** ./lib/PreviewUtility.js ***!
  \*******************************/
/*! exports provided: MAX_PIXEL_RATIO, CACHE_BREAKPOINT_S, _PreviewUtility */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAX_PIXEL_RATIO", function() { return MAX_PIXEL_RATIO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CACHE_BREAKPOINT_S", function() { return CACHE_BREAKPOINT_S; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_PreviewUtility", function() { return _PreviewUtility; });
/* harmony import */ var _microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/sp-lodash-subset */ "Pk8u");
/* harmony import */ var _microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ms_odsp_utilities_lib_alternativeUrls_SPAlternativeUrls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ms/odsp-utilities/lib/alternativeUrls/SPAlternativeUrls */ "vmDi");
/* harmony import */ var _ms_odsp_utilities_lib_alternativeUrls_SPAlternativeUrls__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ms_odsp_utilities_lib_alternativeUrls_SPAlternativeUrls__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @microsoft/sp-diagnostics */ "ut3N");
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _IThumbnailRequest__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./IThumbnailRequest */ "FC4P");
/* harmony import */ var _ThumbnailUrlGenerator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ThumbnailUrlGenerator */ "+TnQ");
/* harmony import */ var _PreviewHelper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./PreviewHelper */ "tIik");
/* harmony import */ var _SPResourcePath__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./SPResourcePath */ "OLPK");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _ThumbnailHealingKillSwitches__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ThumbnailHealingKillSwitches */ "Ll3B");
/* harmony import */ var _Experiments__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Experiments */ "1AKv");
/**
 * @copyright Microsoft Corporation. All rights reserved.
 */










/**
 * SP item ids (web, site, list and file) based vroom API template
 */
/* tslint:disable-next-line:max-line-length */
var VROOM_API_IDS_TEMPLATE = '{.spHost}/_api/v2.1/sites/{DomainName},{SPSite.Id},{SPWeb.Id}/lists/{SPList.Id}/items/{SPListItem.UniqueId}/driveItem';
/**
 * SP item ids (web, site and file) based vroom API template
 */
/* tslint:disable-next-line:max-line-length */
var VROOM_API_3_IDS_TEMPLATE = '{.spHost}/_api/v2.1/sites/{DomainName},{SPSite.Id},{SPWeb.Id}/items/{SPListItem.UniqueId}/driveItem';
/**
 * SP resource relative url based vroom API template
 * DO NOT use v2.1. sharePoint: URL is deprecated in v2.1.
 * Until !share{base64Url} API is ported in v2.1 as supported for Site pages, we continue on this template.
 */
var VROOM_API_URL_TEMPLATE = '{.spHost}/_api/v2.0/sharePoint:{.resourceUrl}:/driveItem';
var MAX_PIXEL_RATIO = 2;
var CACHE_BREAKPOINT_S = 400;
var CACHE_BREAKPOINT_M = 960;
var CACHE_BREAKPOINT_L = 1600;
var CACHE_BREAKPOINT_XL = 2560;
/**
 * Max pixel count when to still request lower breakpoint width resolution
 */
var STRADDLE_PX = 100;
/**
 * Internal Utility for PreviewHelper and ThumbnailUrlGenerator class
 * @internal
 */
// tslint:disable-next-line:class-name export-name
var _PreviewUtility = /** @class */ (function () {
    function _PreviewUtility() {
    }
    Object.defineProperty(_PreviewUtility, "smallestBreakPointWidth", {
        get: function () {
            return CACHE_BREAKPOINT_S;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_PreviewUtility, "getPreviewSupportedMap", {
        get: function () {
            return _PreviewUtility._getPreviewSupportedMap;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Returns alternate URL for the given URL. It takes care of encoded/decoded URL.
     * Note: width and height parameters are scaled window.devicePixelRatio times
     *
     * @param resourcePath - Relative path of the SharePoint resource. It works for
     * absolute URL but recommended to use relative Url as authority is always subject
     * to change upon tenant migration.
     * @param width - Optional width if provided will be appended as width query parameter
     * @param height - Optional height if provided will be appended as width query parameter
     * @param originalWidth - Width of the source image
     * @param originalHeight - Height of the source image
     * @param cropMode - Style of cropping requested
     * @param viewportTop - Top position for the sub-image to start
     * @param viewportLeft - Left position for the sub-image to start
     * @param viewportWidth - Width of the sub-image
     * @param viewportHeight - Height of the sub-image
     */
    _PreviewUtility.getAlternateUrl = function (resourcePath, width, height, originalWidth, originalHeight, cropMode, viewportTop, viewportLeft, viewportWidth, viewportHeight) {
        if (Object(_ThumbnailHealingKillSwitches__WEBPACK_IMPORTED_MODULE_8__["isCDNRewriteKSActivated"])()) {
            return undefined;
        }
        // contract of getPriverImageUrl is not well defined. It is possible that the method is called
        // with either encoded or decoded URI. The key in the map is produced on the server,
        // hence, if the original URI was decoded on the client, we need to check whether the original
        // encoded URI was used as a key.
        // this is mostly redundant call, but it is a cheap enough workaround to avoid changing the logic
        // in every place the helper is being invoked from.
        var alternativeUrl = _ms_odsp_utilities_lib_alternativeUrls_SPAlternativeUrls__WEBPACK_IMPORTED_MODULE_1__["tryGetAlternativeUrl"](resourcePath.value) ||
            _ms_odsp_utilities_lib_alternativeUrls_SPAlternativeUrls__WEBPACK_IMPORTED_MODULE_1__["tryGetAlternativeUrl"](encodeURI(resourcePath.value));
        if (!alternativeUrl) {
            try {
                alternativeUrl = _ms_odsp_utilities_lib_alternativeUrls_SPAlternativeUrls__WEBPACK_IMPORTED_MODULE_1__["tryGetAlternativeUrl"](decodeURI(resourcePath.value));
            }
            catch (error) {
                /* no op */
            }
        }
        if (!alternativeUrl) {
            if (resourcePath.authority) {
                var relativePath = resourcePath.path;
                alternativeUrl =
                    _ms_odsp_utilities_lib_alternativeUrls_SPAlternativeUrls__WEBPACK_IMPORTED_MODULE_1__["tryGetAlternativeUrl"](relativePath) ||
                        _ms_odsp_utilities_lib_alternativeUrls_SPAlternativeUrls__WEBPACK_IMPORTED_MODULE_1__["tryGetAlternativeUrl"](encodeURI(relativePath));
                if (!alternativeUrl) {
                    try {
                        alternativeUrl = _ms_odsp_utilities_lib_alternativeUrls_SPAlternativeUrls__WEBPACK_IMPORTED_MODULE_1__["tryGetAlternativeUrl"](decodeURI(relativePath));
                    }
                    catch (error) {
                        /* no op */
                    }
                }
            }
        }
        if (alternativeUrl &&
            width !== undefined &&
            !isNaN(width) &&
            _ThumbnailUrlGenerator__WEBPACK_IMPORTED_MODULE_4__["default"].isFileTypeSupported(_PreviewUtility.getFileExtension(resourcePath))) {
            var url = new _SPResourcePath__WEBPACK_IMPORTED_MODULE_6__["_SPResourcePath"](alternativeUrl);
            // Map width to the nearest resolution breakpoint, if no height requested
            if (height === undefined || isNaN(height)) {
                width = _PreviewUtility.normalizeWidth(width);
            }
            if (width !== undefined) {
                url.searchParams.set('width', Math.round(width).toString());
            }
            if (height !== undefined && !isNaN(height)) {
                var normalizedHeight = _PreviewUtility.normalizeHeight(height);
                if (normalizedHeight !== undefined) {
                    url.searchParams.set('height', normalizedHeight.toString());
                }
            }
            if (_PreviewHelper__WEBPACK_IMPORTED_MODULE_5__["_PreviewHelper"].useVroomCropping()) {
                if (viewportTop !== undefined &&
                    viewportLeft !== undefined &&
                    viewportWidth !== undefined &&
                    viewportHeight !== undefined) {
                    url.searchParams.set(_PreviewUtility.VIEWPORT_PARAMETER_CDN_LEFT, viewportLeft.toString());
                    url.searchParams.set(_PreviewUtility.VIEWPORT_PARAMETER_CDN_TOP, viewportTop.toString());
                    url.searchParams.set(_PreviewUtility.VIEWPORT_PARAMETER_CDN_WIDTH, viewportWidth.toString());
                    url.searchParams.set(_PreviewUtility.VIEWPORT_PARAMETER_CDN_HEIGHT, viewportHeight.toString());
                }
                if (cropMode !== undefined) {
                    url.searchParams.set(_PreviewUtility.CROPMODE_CDN_PARAMETER, cropMode);
                }
                if (originalWidth !== undefined && originalHeight !== undefined) {
                    url.searchParams.set(_PreviewUtility.ORIGINAL_WIDTH_CDN_PARAMETER, originalWidth.toString());
                    url.searchParams.set(_PreviewUtility.ORIGINAL_HEIGHT_CDN_PARAMETER, originalHeight.toString());
                }
            }
            alternativeUrl = url.toString();
        }
        return alternativeUrl;
    };
    /**
     * Normalizes width based on device pixel ration and supported width breakpoints
     */
    _PreviewUtility.normalizeWidth = function (width) {
        return _PreviewUtility._getWidthByMeTACache(_PreviewUtility.scaleByPixelRatio(width));
    };
    /**
     * Normalizes width based on device pixel ration and supported width breakpoints
     */
    _PreviewUtility.normalizeHeight = function (height) {
        return _PreviewUtility.scaleByPixelRatio(height);
    };
    _PreviewUtility.normalizeWidthToResolution = function (width) {
        return _PreviewUtility._widthToResolution(_PreviewUtility.scaleByPixelRatio(width));
    };
    _PreviewUtility.isImage = function (ext) {
        // make quick lookup table to check if a file type is an image
        if (!_PreviewUtility._imageExtensions) {
            _PreviewUtility._imageExtensions = {};
            _PreviewUtility._createLookupEntries(_PreviewHelper__WEBPACK_IMPORTED_MODULE_5__["_PreviewHelper"].IMAGE_EXTENSIONS, _PreviewUtility._imageExtensions);
        }
        return !!ext && !!_PreviewUtility._imageExtensions[ext.toLowerCase()];
    };
    _PreviewUtility.isVideo = function (ext) {
        // make quick lookup table to check if a file type is a video
        if (!_PreviewUtility._videoExtensions) {
            _PreviewUtility._videoExtensions = {};
            _PreviewUtility._createLookupEntries(_PreviewHelper__WEBPACK_IMPORTED_MODULE_5__["_PreviewHelper"].VIDEO_EXTENSIONS, _PreviewUtility._videoExtensions);
        }
        return !!ext && !!_PreviewUtility._videoExtensions[ext.toLowerCase()];
    };
    _PreviewUtility.scaleByPixelRatio = function (width) {
        if (width && window.devicePixelRatio && !isNaN(window.devicePixelRatio)) {
            var deviceFactor = !Object(_Experiments__WEBPACK_IMPORTED_MODULE_9__["isBreakpointStraddleOn"])() && window.devicePixelRatio >= MAX_PIXEL_RATIO ? MAX_PIXEL_RATIO : 1;
            return Math.round(width * deviceFactor);
        }
        else {
            return width;
        }
    };
    /**
     * Generate VROOM based thumbnail URL
     * @param vroomItemUrl - VROOM URL representing drive item
     * @param width - Width of the thumbnail
     * @param height - Height of the thumbnail
     * @param resolution - Alternative to width/height
     * @param originalWidth - Width of the source image
     * @param originalHeight - Height of the source image
     * @param cropmode - Style of cropping requested
     * @param viewportTop - Top position for the subimage to start
     * @param viewportLeft - Left position for the subimage to start
     * @param viewportWidth - Width of the subimage
     * @param viewportHeight - Height of the subimage
     */
    _PreviewUtility.getVROOMThumbnailUrl = function (vroomItemUrl, width, height, resolution, originalWidth, originalHeight, cropMode, viewportTop, viewportLeft, viewportWidth, viewportHeight) {
        // TODO: VSO#683066 Allow specifying only width or height when generating a scaled thumbnail
        var largeDummyDimention = 99999;
        var normalizedDimension = this.normalizeDimension(width, height, resolution);
        var finalWidth;
        var finalHeight;
        if (vroomItemUrl) {
            if (normalizedDimension.width || normalizedDimension.height) {
                finalWidth = normalizedDimension.width || largeDummyDimention;
                finalHeight = normalizedDimension.height || largeDummyDimention;
            }
            else {
                finalWidth = _PreviewUtility.smallestBreakPointWidth;
                finalHeight = largeDummyDimention;
            }
            var viewportParams = '';
            var cropModeParams = '';
            var originalWidthHeightParams = '';
            if (_PreviewHelper__WEBPACK_IMPORTED_MODULE_5__["_PreviewHelper"].useVroomCropping()) {
                viewportParams =
                    viewportLeft !== undefined &&
                        viewportTop !== undefined &&
                        viewportWidth !== undefined &&
                        viewportHeight !== undefined
                        ? // tslint:disable-next-line: max-line-length
                            "&" + _PreviewUtility.VIEWPORT_PARAMETER_LEFT + "=" + viewportLeft + "&" + _PreviewUtility.VIEWPORT_PARAMETER_TOP + "=" + viewportTop + "&" + _PreviewUtility.VIEWPORT_PARAMETER_WIDTH + "=" + viewportWidth + "&" + _PreviewUtility.VIEWPORT_PARAMETER_HEIGHT + "=" + viewportHeight
                        : '';
                cropModeParams = cropMode !== undefined ? "&" + _PreviewUtility.CROPMODE_PARAMETER + "=" + cropMode : '';
                originalWidthHeightParams =
                    originalWidth !== undefined && originalHeight !== undefined
                        ? // tslint:disable-next-line: max-line-length
                            "&" + _PreviewUtility.ORIGINAL_WIDTH_PARAMETER + "=" + originalWidth + "&" + _PreviewUtility.ORIGINAL_HEIGHT_PARAMETER + "=" + originalHeight
                        : '';
            }
            var dropPrefer = Object(_ThumbnailHealingKillSwitches__WEBPACK_IMPORTED_MODULE_8__["isPreferNoRedirectQueryKSActivated"])() ||
                !!viewportParams ||
                (!!cropModeParams && cropModeParams !== _IThumbnailRequest__WEBPACK_IMPORTED_MODULE_3__["_CropMode"].Fit && cropModeParams !== _IThumbnailRequest__WEBPACK_IMPORTED_MODULE_3__["_CropMode"].Default);
            if (_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_7__["_SPFlight"].isEnabled(1737 /* WEXCacheThumbnails */)) {
                // tslint:disable-next-line: max-line-length
                return vroomItemUrl + "/thumbnails/0/c" + finalWidth + "x" + finalHeight + "/content?" + (!dropPrefer ? 'preferNoRedirect=true&' : '') + _PreviewUtility.PREFER + "=" + _PreviewUtility.EXTEND_CACHE_MAXAGE + "&" + _PreviewUtility.CLIENT_TYPE + "=" + _PreviewUtility.MODERN_WEB_PART + viewportParams + cropModeParams + originalWidthHeightParams;
            }
            // tslint:disable-next-line: max-line-length
            return vroomItemUrl + "/thumbnails/0/c" + finalWidth + "x" + finalHeight + "/content?" + (!dropPrefer ? 'preferNoRedirect=true&' : '') + _PreviewUtility.CLIENT_TYPE + "=" + _PreviewUtility.MODERN_WEB_PART + viewportParams + cropModeParams + originalWidthHeightParams;
        }
        return undefined;
    };
    /**
     * Generates VROOM Item URL for given resource.
     * @param siteId - SiteId of the resource, required if spResourcePath is not provided
     * @param webId - WebId of the resource, required if spResourcePath is not provided
     * @param listId - listId of the resource, required if spResourcePath is not provided
     * @param uniqueId - uniqueId of the resource, required if spResourcePath is not provided
     * @param spHostBaseUrl - Base URL to the SP Host
     * @param domainName - Domain name of the SP Host, required if spResourcePath is not provided
     * @param spResourcePath - Path to the resource. used when Guids are not available.
     * @param callerId - Identification of the caller. This will be used for telemetry purpose only.
     */
    _PreviewUtility.getVROOMItemUrl = function (siteId, webId, listId, uniqueId, spHostBaseUrl, domainName, spResourcePath, callerId) {
        var vroomItemUrl;
        if (spHostBaseUrl && domainName && siteId && webId && listId && uniqueId) {
            vroomItemUrl = VROOM_API_IDS_TEMPLATE.replace('{.spHost}', spHostBaseUrl);
            vroomItemUrl = vroomItemUrl.replace('{DomainName}', domainName);
            vroomItemUrl = vroomItemUrl.replace('{SPSite.Id}', siteId);
            vroomItemUrl = vroomItemUrl.replace('{SPWeb.Id}', webId);
            listId = _microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_0__["trimEnd"](_microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_0__["trimStart"](listId, '{'), '}');
            vroomItemUrl = vroomItemUrl.replace('{SPList.Id}', listId);
            uniqueId = _microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_0__["trimEnd"](_microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_0__["trimStart"](uniqueId, '{'), '}');
            vroomItemUrl = vroomItemUrl.replace('{SPListItem.UniqueId}', uniqueId);
        }
        else if (spHostBaseUrl && domainName && siteId && webId && uniqueId) {
            vroomItemUrl = VROOM_API_3_IDS_TEMPLATE.replace('{.spHost}', spHostBaseUrl);
            vroomItemUrl = vroomItemUrl.replace('{DomainName}', domainName);
            vroomItemUrl = vroomItemUrl.replace('{SPSite.Id}', siteId);
            vroomItemUrl = vroomItemUrl.replace('{SPWeb.Id}', webId);
            uniqueId = _microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_0__["trimEnd"](_microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_0__["trimStart"](uniqueId, '{'), '}');
            vroomItemUrl = vroomItemUrl.replace('{SPListItem.UniqueId}', uniqueId);
        }
        else if (spHostBaseUrl && spResourcePath) {
            // TODO: Replace with shares: template but caution is not supported for .aspx Site Page
            if (spResourcePath.indexOf('?') > -1) {
                // Collect data for analysis
                var qosMonitor = new _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__["_QosMonitor"]('ThumbnailRequestWithQuery');
                qosMonitor.writeSuccess({
                    service: callerId || 'Unknown',
                    source: spResourcePath
                });
                spResourcePath = spResourcePath.split('?')[0];
            }
            if (spResourcePath.indexOf('#') > -1) {
                // Collect data for analysis
                var qosMonitor = new _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__["_QosMonitor"]('ThumbnailRequestWithHash');
                qosMonitor.writeSuccess({
                    service: callerId || 'Unknown',
                    source: spResourcePath
                });
            }
            vroomItemUrl = VROOM_API_URL_TEMPLATE.replace('{.spHost}', spHostBaseUrl);
            vroomItemUrl = vroomItemUrl.replace('{.resourceUrl}', new _SPResourcePath__WEBPACK_IMPORTED_MODULE_6__["_SPResourcePath"](spResourcePath).path);
        }
        return vroomItemUrl;
    };
    /**
     * Update VROOM custom thumbnail width after normalizing given width by devicePixelRatio and MeTA cache size
     * @param thumbnailUrl - Original VROOM thumbnail url
     * @param newWidth - new raw width to be updated
     */
    _PreviewUtility.updateVROOMCustomThumbnailSize = function (thumbnailUrl, newWidth) {
        if (!thumbnailUrl || isNaN(newWidth) || newWidth <= 0) {
            return thumbnailUrl;
        }
        var lowercaseUrl = thumbnailUrl.toLowerCase();
        var index = lowercaseUrl.indexOf(_PreviewUtility.THUMBNAIL_SIZE_PREFIX);
        if (index < 0) {
            return thumbnailUrl;
        }
        var endIndex = thumbnailUrl.indexOf('x', index + _PreviewUtility.THUMBNAIL_SIZE_PREFIX.length);
        if (endIndex <= index) {
            return thumbnailUrl;
        }
        var original = thumbnailUrl.substr(index, endIndex - index);
        return thumbnailUrl.replace(original, "" + _PreviewUtility.THUMBNAIL_SIZE_PREFIX + this.normalizeWidth(newWidth));
    };
    /**
     * Get VROOM thumbnail custom width if specified undefined otherwise
     * @param thumbnailUrl - Original VROOM thumbnail url
     */
    _PreviewUtility.getVROOMThumbnailWidth = function (thumbnailUrl) {
        if (thumbnailUrl === '') {
            return undefined;
        }
        var lowercaseUrl = thumbnailUrl.toLowerCase();
        var index = lowercaseUrl.indexOf(_PreviewUtility.THUMBNAIL_SIZE_PREFIX);
        if (index < 0) {
            return undefined;
        }
        var endIndex = thumbnailUrl.indexOf('x', index + _PreviewUtility.THUMBNAIL_SIZE_PREFIX.length);
        if (endIndex <= index) {
            return undefined;
        }
        index = index + _PreviewUtility.THUMBNAIL_SIZE_PREFIX.length;
        return Number(thumbnailUrl.substr(index, endIndex - index));
    };
    /**
     * Normalize requested width and height to closest breakpoint respecting device pixel ratio
     * When width and height both dimension are specified, it is not mapped to break point
     * Such scenarios URL performance might be slow compared to request by width or height
     * @param width - Requested width of the thumbnail
     * @param height  - Requested height of the thumbnail
     * @param resolution - Alternative legacy docviz dimension
     */
    _PreviewUtility.normalizeDimension = function (width, height, resolution) {
        if (!height && width) {
            width = _PreviewUtility.normalizeWidth(width);
        }
        else if (height && !width) {
            height = _PreviewUtility.normalizeWidth(height);
        }
        else if (width && height) {
            // Since client has requested specific aspect ratio, we will not map to the breakpoint width
            width = _PreviewUtility.scaleByPixelRatio(width);
            height = _PreviewUtility.scaleByPixelRatio(height);
        }
        else if (resolution !== undefined) {
            width = this.getWidthByResolution(resolution);
        }
        else {
            // Caller did not specifiy any dimension, will default to smallest breakpoint
            width = _PreviewUtility.smallestBreakPointWidth;
        }
        return { width: width, height: height };
    };
    /**
     * Extracts the filename extension based on file path (supports url).
     * @param path - _SPResourcePath of the object.
     */
    _PreviewUtility.getFileExtension = function (path) {
        if (!path) {
            return undefined;
        }
        var extensionStart = path.path.lastIndexOf('.');
        if (extensionStart > -1) {
            return path.path.substr(extensionStart + 1).toLowerCase();
        }
        return undefined;
    };
    /**
     * Maps given resolution to the max width
     */
    _PreviewUtility.getWidthByResolution = function (resolution) {
        if (isNaN(resolution)) {
            return 300;
        }
        var width = 300;
        switch (resolution) {
            case 0:
                width = 300;
                break;
            case 1:
                width = 480;
                break;
            case 2:
                width = 750;
                break;
            case 3:
                width = 1024;
                break;
            case 4:
                width = 1600;
                break;
            case 5:
            case 6:
                width = 2560;
                break;
        }
        return width;
    };
    _PreviewUtility._widthToResolution = function (width) {
        if (width === undefined || isNaN(width)) {
            // No resolution will be the same as 300px
            return undefined;
        }
        var resolution = 0;
        if (width <= 300) {
            resolution = 0;
        }
        else if (width <= 480) {
            resolution = 1;
        }
        else if (width <= 750) {
            resolution = 2;
        }
        else if (width <= 1024) {
            resolution = 3;
        }
        else if (width <= 1600) {
            resolution = 4;
        }
        else {
            resolution = 5;
        }
        return resolution;
    };
    _PreviewUtility._createLookupEntries = function (extensions, lookup) {
        for (var i = 0; i < extensions.length; i++) {
            lookup[extensions[i]] = true;
        }
    };
    /**
     * Convert requested width to nearest breakpoint supported by MeTA cache.
     * @param width - Requested width
     */
    _PreviewUtility._getWidthByMeTACache = function (width) {
        var smallestBreakPointWidth = _PreviewUtility.smallestBreakPointWidth;
        if (width === undefined || isNaN(width)) {
            return smallestBreakPointWidth;
        }
        if (Object(_Experiments__WEBPACK_IMPORTED_MODULE_9__["isBreakpointStraddleOn"])()) {
            if (width <= smallestBreakPointWidth + STRADDLE_PX /* 500 */) {
                return smallestBreakPointWidth /* 400 */;
            }
            else if (width <= CACHE_BREAKPOINT_M + STRADDLE_PX /* 1060 */) {
                return CACHE_BREAKPOINT_M;
            }
            else if (width <= (CACHE_BREAKPOINT_L + CACHE_BREAKPOINT_XL) / 2 /* 2080 */) {
                // Half a breakpoint found to be close enough quality wise
                return CACHE_BREAKPOINT_L;
            }
            else {
                return CACHE_BREAKPOINT_XL;
            }
        }
        else {
            if (width <= smallestBreakPointWidth) {
                return smallestBreakPointWidth;
            }
            else if (width <= CACHE_BREAKPOINT_M) {
                return CACHE_BREAKPOINT_M;
            }
            else if (width <= CACHE_BREAKPOINT_L) {
                return CACHE_BREAKPOINT_L;
            }
            else {
                return CACHE_BREAKPOINT_XL;
            }
        }
    };
    _PreviewUtility.CLIENT_TYPE = 'clientType';
    _PreviewUtility.MODERN_WEB_PART = 'modernWebPart';
    _PreviewUtility.PREFER = 'prefer';
    _PreviewUtility.EXTEND_CACHE_MAXAGE = 'extendCacheMaxAge';
    _PreviewUtility.THUMBNAIL_SIZE_PREFIX = '/thumbnails/0/c';
    /**
     * List of file types supported by Media TA service for thumbnail
     */
    _PreviewUtility.mediaServiceSupportedMap = new Set([
        'doc',
        'docx',
        'xlsb',
        'xlsx',
        'xlsm',
        'xltx',
        'xls',
        'ppt',
        'pptx',
        'pptm',
        'potx',
        'potm',
        'pot',
        'ppsx',
        'ppsxm',
        'pps',
        'odt',
        'ods',
        'odp',
        'rtf',
        'csv',
        // openxmlrasterizer
        'pano',
        'fppx',
        'hcp',
        // email
        'eml',
        'msg',
        // imagemagickrasterizer
        'ai',
        'cur',
        'epdf',
        'epi',
        'eps',
        'epsf',
        'epsi',
        'ico',
        'icon',
        'log',
        'mat',
        'pdf',
        'pdfa',
        'pict',
        'ps',
        'psb',
        'psd',
        'svg',
        'svgz',
        'txt',
        'xbm',
        'xcf',
        'xpm',
        // video rasterizer
        'mts',
        'm2ts',
        'mpg',
        'mpeg',
        'mp4',
        'mov',
        'wmv',
        'avi',
        'asf',
        'm4v',
        '3gp',
        '3g2',
        '3gp2',
        '3gpp',
        'm1v',
        'm2v',
        'ts',
        'mp4v',
        'ogg',
        'webm',
        'movie',
        // thumbnailinterop
        'bmp',
        'png',
        // ico exists under imagemagickrasterizer above
        'jpeg',
        'jpg',
        'jfif',
        'tiff',
        'tif',
        // 'gif', // excluded to support animated gifs
        'wmp',
        'arw',
        'cr2',
        'erf',
        'mef',
        'mrw',
        'nef',
        'orf',
        'nrw',
        'pef',
        'raw',
        'rw2',
        'rw1',
        'sr2',
        // 3d files
        'cool',
        'fbx',
        'obj',
        'ply',
        'stl',
        '3mf',
        'glb',
        // dicom rasterizer
        'dcm',
        'dcm30',
        'dic',
        'dicm',
        'dicom'
    ]);
    // https://en.wikipedia.org/wiki/Comparison_of_web_browsers#Image_format_support
    _PreviewUtility._browserViewableImageExtensions = [
        'bmp',
        'jpeg',
        'jpg',
        'png',
        'svg',
        'tif',
        'tiff'
    ];
    _PreviewUtility._getPreviewSupportedMap = new Set([
        '3gp',
        '3g2',
        '3gp2',
        'asf',
        'ai',
        'aspx',
        'avi',
        'docm',
        'docx',
        'dotx',
        'dotm',
        'dv',
        'emf',
        'eps',
        // 'gif', // excluded to support animated gifs
        'ismv',
        'm2v',
        'm2ts',
        'mov',
        'mod',
        'mp4',
        'mpeg',
        'mpg',
        'mts',
        'pdf',
        'pptm',
        'pptx',
        'potm',
        'potx',
        'ppsm',
        'ppsx',
        'psd',
        'ts',
        'vob',
        'wmf',
        'wmv',
        'xesc',
        'xlsm',
        'xlsx'
    ].concat(_PreviewUtility._browserViewableImageExtensions));
    _PreviewUtility.VIEWPORT_PARAMETER_TOP = 'vt';
    _PreviewUtility.VIEWPORT_PARAMETER_LEFT = 'vl';
    _PreviewUtility.VIEWPORT_PARAMETER_WIDTH = 'vw';
    _PreviewUtility.VIEWPORT_PARAMETER_HEIGHT = 'vh';
    _PreviewUtility.CROPMODE_PARAMETER = 'cm';
    _PreviewUtility.ORIGINAL_HEIGHT_PARAMETER = 'oh';
    _PreviewUtility.ORIGINAL_WIDTH_PARAMETER = 'ow';
    _PreviewUtility.VIEWPORT_PARAMETER_CDN_TOP = 'viewportTop';
    _PreviewUtility.VIEWPORT_PARAMETER_CDN_LEFT = 'viewportLeft';
    _PreviewUtility.VIEWPORT_PARAMETER_CDN_WIDTH = 'viewportWidth';
    _PreviewUtility.VIEWPORT_PARAMETER_CDN_HEIGHT = 'viewportHeight';
    _PreviewUtility.CROPMODE_CDN_PARAMETER = 'cropMode';
    _PreviewUtility.ORIGINAL_HEIGHT_CDN_PARAMETER = 'originalHeight';
    _PreviewUtility.ORIGINAL_WIDTH_CDN_PARAMETER = 'originalWidth';
    return _PreviewUtility;
}());



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

/***/ })

/******/ })});;
//# sourceMappingURL=sp-image-helper_none.js.map