(window["webpackJsonp_9ef3df07_744e_4793_9840_c67d47c41763_0_1_0"] = window["webpackJsonp_9ef3df07_744e_4793_9840_c67d47c41763_0_1_0"] || []).push([["sp-teams-lib-dep"],{

/***/ "4YQA":
/*!*****************************************!*\
  !*** ./lib/SPTeamsHostedApplication.js ***!
  \*****************************************/
/*! exports provided: SPTeamsHostedApplication, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SPTeamsHostedApplication", function() { return SPTeamsHostedApplication; });
/* harmony import */ var _TeamsLinkNavigationHandler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TeamsLinkNavigationHandler */ "InEo");

/**
 * Exposes all operations supported by the library
 * when SharePoint is hosted in Teams.
 */
var SPTeamsHostedApplication = /** @class */ (function () {
    function SPTeamsHostedApplication() {
        this.handleLinkNavigation = function (url, serviceScope, history, state) {
            _TeamsLinkNavigationHandler__WEBPACK_IMPORTED_MODULE_0__["TeamsLinkNavigationHandler"].handleLinkNavigation(url, serviceScope, history, state);
        };
    }
    return SPTeamsHostedApplication;
}());

/* harmony default export */ __webpack_exports__["default"] = (SPTeamsHostedApplication);


/***/ }),

/***/ "7GbI":
/*!*********************************!*\
  !*** ./lib/NavigatorFactory.js ***!
  \*********************************/
/*! exports provided: NavigatorType, NavigatorFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigatorType", function() { return NavigatorType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigatorFactory", function() { return NavigatorFactory; });
/* harmony import */ var _Navigators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Navigators */ "wdwf");

var NavigatorType;
(function (NavigatorType) {
    NavigatorType[NavigatorType["Doclib"] = 0] = "Doclib";
    NavigatorType[NavigatorType["Lists"] = 1] = "Lists";
})(NavigatorType || (NavigatorType = {}));
var NavigatorFactory = /** @class */ (function () {
    function NavigatorFactory() {
    }
    // TODO move all to BasePageNavigator
    NavigatorFactory.getNavigator = function (type, crossDomain) {
        switch (type) {
            case NavigatorType.Doclib:
                return new _Navigators__WEBPACK_IMPORTED_MODULE_0__["DoclibNavigator"](crossDomain);
            case NavigatorType.Lists:
                return new _Navigators__WEBPACK_IMPORTED_MODULE_0__["ListsNavigator"](crossDomain);
            default:
                /* no-op */
                break;
        }
    };
    return NavigatorFactory;
}());



/***/ }),

/***/ "InEo":
/*!*******************************************!*\
  !*** ./lib/TeamsLinkNavigationHandler.js ***!
  \*******************************************/
/*! exports provided: TeamsLinkNavigationHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamsLinkNavigationHandler", function() { return TeamsLinkNavigationHandler; });
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ms/sp-telemetry */ "2q6Q");
/* harmony import */ var _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ms_odsp_teams_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ms/odsp-teams-shared */ "I0DE");
/* harmony import */ var _filePreview_FilePreviewManager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./filePreview/FilePreviewManager */ "bnh+");
/* harmony import */ var _PageTypeIdentifier__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PageTypeIdentifier */ "kmXs");
/* harmony import */ var _Navigators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Navigators */ "wdwf");
/* harmony import */ var _utilities_EngagementLogger__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utilities/EngagementLogger */ "kNMr");
/* harmony import */ var _NavigatorFactory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./NavigatorFactory */ "7GbI");
/* harmony import */ var _utilities_CommonUtils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utilities/CommonUtils */ "Se0m");
/* harmony import */ var _utilities_TeamsUtils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utilities/TeamsUtils */ "Y74H");
/* harmony import */ var _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ms/odsp-utilities-bundle */ "y88i");
/* harmony import */ var _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_10__);











var TeamsLinkNavigationHandler = /** @class */ (function () {
    function TeamsLinkNavigationHandler() {
    }
    /**
     * Handle link navigation when in Teams. First check if it is document link and open it in Teams file previewer.
     * If url is from same domain, check if history is passed. If yes, push to history for in place navigation.
     * If this method is called without history, that means we want perform direct navigation.
     * If link is from different, check if it is valid cross-geo link. If it is valid cross-geo link and it is Teams
     * client, then redirect it via teamslogon to set the cookie for the domain.
     * If it is external link or not valid cross-geo link, open it in browser.
     * @param url - url to navigate to
     * @param serviceScope - the application ServiceScope
     * @param history - history instance of the application
     * @param state - history state
     */
    TeamsLinkNavigationHandler.handleLinkNavigation = function (url, serviceScope, history, state) {
        _utilities_EngagementLogger__WEBPACK_IMPORTED_MODULE_6__["EngagementLogger"].getInstance().logEvent('TeamsNavigation.Navigation');
        _utilities_TeamsUtils__WEBPACK_IMPORTED_MODULE_9__["TeamsUtils"].setTeamsStageViewIfApplicable(_ms_odsp_teams_shared__WEBPACK_IMPORTED_MODULE_2__["TeamsSDKInitializer"].getInstance().getTeamsSDK());
        if (_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPFlight"].isEnabled(1485 /* Teams Stage-View Experience */) &&
            window['TeamsStageViewHosted'] === 'stageView' // tslint:disable-line:no-string-literal
        ) {
            _utilities_EngagementLogger__WEBPACK_IMPORTED_MODULE_6__["EngagementLogger"].getInstance().logEvent('TeamsNavigation.StageViewNavigation');
            _utilities_CommonUtils__WEBPACK_IMPORTED_MODULE_8__["CommonUtils"].openInNewWindow(url);
        }
        else {
            var navigator_1 = new _Navigators__WEBPACK_IMPORTED_MODULE_5__["ModernPageNavigator"](history, state);
            if (TeamsLinkNavigationHandler._isDifferentOrigin(url)) {
                TeamsLinkNavigationHandler._handleDifferentOriginLinkInTeams(url, serviceScope, navigator_1);
            }
            else {
                TeamsLinkNavigationHandler._navigateWithFileCheck(url, serviceScope, navigator_1, false);
            }
        }
    };
    TeamsLinkNavigationHandler._navigateWithFileCheck = function (url, serviceScope, navigator, crossDomain) {
        // Changing the URL protocol from Http to Https, as Sharepoint URLs are of https protocol only
        if (url.protocol === 'http:' &&
            !_ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_10__["Killswitch"].isActivated(_utilities_CommonUtils__WEBPACK_IMPORTED_MODULE_8__["CommonUtils"].httpProtocolChangeKS /* http Protocol Change */)) {
            url.href = url.href.replace('http:', 'https:');
        }
        // Check if its a file and FilePreview supported, then open in File previewer
        if (_filePreview_FilePreviewManager__WEBPACK_IMPORTED_MODULE_3__["FilePreviewManager"].isFilePreviewSupported(url, serviceScope)) {
            _filePreview_FilePreviewManager__WEBPACK_IMPORTED_MODULE_3__["FilePreviewManager"].openFilePreview(url, serviceScope, crossDomain, navigator);
        }
        else {
            var navigationMonitor = new _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_1__["_QosMonitor"]('TeamsNavigation.LinkNavigationTime');
            TeamsLinkNavigationHandler._navigateWithPageTypeCheck(url, serviceScope, navigator, navigationMonitor, crossDomain);
        }
    };
    TeamsLinkNavigationHandler._navigateWithPageTypeCheck = function (url, serviceScope, navigator, navigationMonitor, crossDomain) {
        _PageTypeIdentifier__WEBPACK_IMPORTED_MODULE_4__["PageTypeIdentifier"].getPageTypeByCallback(url, serviceScope, function (callbackUrl, pageType, repostCrossDomain) {
            return TeamsLinkNavigationHandler._navigateByPageType(pageType, serviceScope, callbackUrl, navigator, navigationMonitor, crossDomain || repostCrossDomain);
        });
    };
    TeamsLinkNavigationHandler._isDifferentOrigin = function (newURL) {
        return newURL.host !== window.location.host;
    };
    TeamsLinkNavigationHandler._handleDifferentOriginLinkInTeams = function (url, serviceScope, navigator) {
        var isWithinSameTenant = _utilities_CommonUtils__WEBPACK_IMPORTED_MODULE_8__["CommonUtils"].isInternalResource(url.href, serviceScope);
        if (window['teamsCustomAppType'] === 'portals' // tslint:disable-line:no-string-literal
        ) {
            _utilities_CommonUtils__WEBPACK_IMPORTED_MODULE_8__["CommonUtils"].openInNewWindow(url);
        }
        else if (isWithinSameTenant) {
            TeamsLinkNavigationHandler._navigateWithFileCheck(url, serviceScope, navigator, true);
        }
        else {
            if (TeamsLinkNavigationHandler._isTeamsDomain(url)) {
                _utilities_EngagementLogger__WEBPACK_IMPORTED_MODULE_6__["EngagementLogger"].getInstance().logEvent('TeamsNavigation.Navigation.External.Teams');
                _ms_odsp_teams_shared__WEBPACK_IMPORTED_MODULE_2__["TeamsSDKInitializer"].getInstance().getTeamsSDK().executeDeepLink(url.href);
            }
            else {
                _utilities_EngagementLogger__WEBPACK_IMPORTED_MODULE_6__["EngagementLogger"].getInstance().logEvent('TeamsNavigation.WindowOpen.PageExternal');
                _utilities_CommonUtils__WEBPACK_IMPORTED_MODULE_8__["CommonUtils"].openInNewWindow(url);
            }
        }
    };
    TeamsLinkNavigationHandler._navigateByPageType = function (pageType, serviceScope, url, modernPageNavigator, navigationMonitor, crossDomain) {
        _utilities_EngagementLogger__WEBPACK_IMPORTED_MODULE_6__["EngagementLogger"].getInstance().logEvent('TeamsNavigation.PageType.' + _PageTypeIdentifier__WEBPACK_IMPORTED_MODULE_4__["PageType"][pageType]);
        navigationMonitor.writeSuccess({ pageType: _PageTypeIdentifier__WEBPACK_IMPORTED_MODULE_4__["PageType"][pageType], crossDomain: crossDomain });
        switch (pageType) {
            case _PageTypeIdentifier__WEBPACK_IMPORTED_MODULE_4__["PageType"].DocLibSubsite:
                _filePreview_FilePreviewManager__WEBPACK_IMPORTED_MODULE_3__["FilePreviewManager"].openFilePreview(url, serviceScope, crossDomain, undefined);
                break;
            case _PageTypeIdentifier__WEBPACK_IMPORTED_MODULE_4__["PageType"].List:
                _NavigatorFactory__WEBPACK_IMPORTED_MODULE_7__["NavigatorFactory"].getNavigator(_NavigatorFactory__WEBPACK_IMPORTED_MODULE_7__["NavigatorType"].Lists, crossDomain).navigate(url);
                break;
            case _PageTypeIdentifier__WEBPACK_IMPORTED_MODULE_4__["PageType"].DocLib:
                _NavigatorFactory__WEBPACK_IMPORTED_MODULE_7__["NavigatorFactory"].getNavigator(_NavigatorFactory__WEBPACK_IMPORTED_MODULE_7__["NavigatorType"].Doclib, crossDomain).navigate(url);
                break;
            case _PageTypeIdentifier__WEBPACK_IMPORTED_MODULE_4__["PageType"].ModernLayout:
            // fall through
            case _PageTypeIdentifier__WEBPACK_IMPORTED_MODULE_4__["PageType"].Modern:
                modernPageNavigator.navigate(url, serviceScope, crossDomain);
                break;
            case _PageTypeIdentifier__WEBPACK_IMPORTED_MODULE_4__["PageType"].ListForm:
            // fall through (open in new window)
            case _PageTypeIdentifier__WEBPACK_IMPORTED_MODULE_4__["PageType"].DocumentCenter:
                _utilities_CommonUtils__WEBPACK_IMPORTED_MODULE_8__["CommonUtils"].openInNewWindow(url);
                break;
            case _PageTypeIdentifier__WEBPACK_IMPORTED_MODULE_4__["PageType"].Classic:
            // fall through
            case _PageTypeIdentifier__WEBPACK_IMPORTED_MODULE_4__["PageType"].ClassicLayout:
            // fall through
            case _PageTypeIdentifier__WEBPACK_IMPORTED_MODULE_4__["PageType"].Unknown:
            // fall through
            case _PageTypeIdentifier__WEBPACK_IMPORTED_MODULE_4__["PageType"].External:
            // fall through
            default:
                _utilities_EngagementLogger__WEBPACK_IMPORTED_MODULE_6__["EngagementLogger"].getInstance().logEvent('TeamsNavigation.WindowOpen.PageClassicUnknown');
                _utilities_CommonUtils__WEBPACK_IMPORTED_MODULE_8__["CommonUtils"].openInNewWindow(url);
        }
    };
    TeamsLinkNavigationHandler._isTeamsDomain = function (url) {
        return ((url.hostname && url.hostname.indexOf('teams.microsoft.com') !== -1) ||
            url.hostname.indexOf('teams.microsoft.us') !== -1 ||
            url.hostname.indexOf('local.teams.office.com') !== -1);
    };
    return TeamsLinkNavigationHandler;
}());



/***/ }),

/***/ "JTzz":
/*!**********************************************!*\
  !*** ./lib/filePreview/FilePreviewHelper.js ***!
  \**********************************************/
/*! exports provided: FilePreviewHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilePreviewHelper", function() { return FilePreviewHelper; });
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _microsoft_sp_page_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/sp-page-context */ "X+PM");
/* harmony import */ var _microsoft_sp_page_context__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_page_context__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utilities_CommonUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utilities/CommonUtils */ "Se0m");



var FilePreviewHelper = /** @class */ (function () {
    function FilePreviewHelper() {
    }
    /**
     * Checks whether the url points to a W/X/P link or not. Currently we're handling 3 categories of document links:
     * 1. Office Online links containing: doc.aspx?sourcedoc=...
     * 2. Sharing links for W/X/P.
     * 3. Direct document links ending with *.docx(?web=1)
     *
     * @param {string} url
     */
    FilePreviewHelper.isDocumentUrl = function (url, serviceScope) {
        var _a;
        var urlString = url.href.split(/[?#]/)[0];
        var lowerCaseUrl = urlString.toLowerCase();
        if (lowerCaseUrl.indexOf(FilePreviewHelper.DOC_STRING) !== -1 ||
            lowerCaseUrl.indexOf(FilePreviewHelper.WOPI_STRING) !== -1 ||
            lowerCaseUrl.indexOf(FilePreviewHelper.WOPI_STRING2) !== -1 ||
            lowerCaseUrl.indexOf(FilePreviewHelper.EMBED_STRING) !== -1 ||
            lowerCaseUrl.indexOf(FilePreviewHelper.CLASSIC_DOC_STRING) !== -1 ||
            lowerCaseUrl.indexOf(FilePreviewHelper.DOCLIB) !== -1 ||
            lowerCaseUrl.indexOf(FilePreviewHelper.DOC_SHORTCUT_LINK) !== -1) {
            return true;
        }
        var queryParams = new URLSearchParams(url.search);
        // onedrive top folder listallitem.aspx not working, if we find what param to pass,
        // we can move this up. This handles individual files in ODC
        if (lowerCaseUrl.indexOf(FilePreviewHelper.ONEDRIVE) !== -1) {
            if (queryParams.get('id')) {
                if (queryParams.get('parent') || queryParams.get('parentview')) {
                    return true;
                }
            }
            // Page is opened with suite nav, return true if want to open in new window
            return false;
        }
        // eg. /sites/bar/ZDocLib?viewid=6d075fee-9a97-4c73-9e5d-e33453a3949c
        // When we click seeAll from docLib webpart path could be in above form.
        // we are including it here, so that we query driveItem, because viewid might be invalid
        // or associated with page as well
        if (queryParams.get(FilePreviewHelper.DOCLIB_VIEWID_STRING)) {
            return true;
        }
        // These are for top folders e.g. https://microsoft.sharepoint-df.com/sites/bar/Shared%20Documents
        // or SeeAll in doclib webparts
        // since we need weburl to construct listallitems url. Other doclibs links are handled in PageTypeIdentifier
        var pathnameDecoded = decodeURI(url.pathname);
        if (pathnameDecoded &&
            (pathnameDecoded.match(FilePreviewHelper.SHARED_DOCUMENTS) ||
                pathnameDecoded.match(FilePreviewHelper.SITE_ASSETS))) {
            return true;
        }
        var docRegexPattern = new RegExp('/:[a-z]:/');
        if (docRegexPattern.test(lowerCaseUrl)) {
            return true;
        }
        var fileExtension = FilePreviewHelper.getUrlExtension(urlString);
        if (fileExtension && fileExtension.toLowerCase() !== 'aspx') {
            return true;
        }
        // e.g. /sites/bar/Shared%20Documents
        // When we click seeAll from docLib webpart, path could be in above form
        // Since these path from seeAll are for current site, we compare path with relative url
        // We then do driveItem call, since similar url pattern exists for subsite
        if (FilePreviewHelper._isOriginalDoclibLinkHandlingKSActivated() && !fileExtension) {
            // *Note* This logic is now covered in welcome page check
            var relativeUrl = pathnameDecoded.substr(0, pathnameDecoded.lastIndexOf('/'));
            var webServerRelativeUrl = serviceScope.consume(_microsoft_sp_page_context__WEBPACK_IMPORTED_MODULE_1__["PageContext"].serviceKey).web.serverRelativeUrl;
            if (((_a = webServerRelativeUrl) === null || _a === void 0 ? void 0 : _a.toLowerCase()) === relativeUrl) {
                return true;
            }
        }
        return false;
    };
    // Bug Fix: https://portal.microsofticm.com/imp/v3/incidents/details/199281085/home and
    // Bug Fix: https://portal.microsofticm.com/imp/v3/incidents/details/207937334/home
    // e.g. /:b:/r/sites/bar/Shared%20Documents/DocLib/Usage-Scenarios-for-OneDrive.pdf
    // Open the pdf files in above format using drive item api
    FilePreviewHelper.isPDFWebLink = function (url) {
        var _a;
        var urlString = url.href.split(/[?#]/)[0];
        var fileExtension = FilePreviewHelper.getUrlExtension(urlString);
        if (((_a = fileExtension) === null || _a === void 0 ? void 0 : _a.toLowerCase()) === 'pdf') {
            return true;
        }
        return false;
    };
    /**
     * Removes the troublesome query parameters before we use the DriveItem API.
     * This is applicable only for the WAC online links like Doc.aspx and Wopiframe.aspx.
     * It deletes all the query params except 'sourcedoc'.
     *
     * @param {string} uri
     */
    FilePreviewHelper.removeQueryParametersFromUrl = function (uri) {
        var lowerCaseUrl = uri.toLowerCase();
        if (lowerCaseUrl.indexOf(FilePreviewHelper.DOC_STRING) !== -1 ||
            lowerCaseUrl.indexOf(FilePreviewHelper.WOPI_STRING) !== -1) {
            var url = new URL(uri);
            var resultUrl = new URL(url.origin + url.pathname);
            resultUrl.searchParams.append('sourcedoc', url.searchParams.get('sourcedoc'));
            return resultUrl.href;
        }
        return uri;
    };
    FilePreviewHelper.getFilePreviewParamsFromUrl = function (url) {
        var urlString = url.href;
        var lowerCaseUrl = urlString.toLowerCase();
        var filePreviewParams = undefined;
        var fileName = undefined;
        // extract from url of following format
        // _layouts/15/Doc.aspx?sourcedoc=%7BAB045784-352D-47D5-80D2-49285BADFE03%7D&file=Sample.pptx&action=edit
        if (lowerCaseUrl.indexOf(FilePreviewHelper.DOC_STRING) !== -1) {
            var queryParams = new URLSearchParams(url.search);
            fileName = queryParams.get('file');
        }
        else {
            fileName = decodeURI(FilePreviewHelper.getFileNameFromUrl(urlString));
        }
        var extension = _utilities_CommonUtils__WEBPACK_IMPORTED_MODULE_2__["CommonUtils"].getFileNameExtension(fileName);
        if (extension && extension !== 'aspx' && extension !== 'url') {
            filePreviewParams = {
                entityId: '',
                title: fileName,
                type: extension,
                objectUrl: urlString
            };
        }
        return filePreviewParams;
    };
    /**
     * Returns the Name of the file if the url is pointing to a file.
     * getUrlExtension('https://abc.sharepoint.com/teams/xyz/FileName.docx?web=1#parm=true') => 'FileName.docx'
     *
     * @param {string} url
     */
    FilePreviewHelper.getFileNameFromUrl = function (url) {
        url = url.split('?')[0];
        // Remove everything to the last slash in URL
        url = url.split('/').pop();
        return url;
    };
    /**
     * Returns the extension of the file if the url is pointing to a file.
     * getUrlExtension('https://abc.sharepoint.com/teams/xyz/FileName.docx?web=1#parm=true') => 'docx'
     *
     * @param {string} url
     */
    FilePreviewHelper.getUrlExtension = function (url) {
        var fileName = FilePreviewHelper.getFileNameFromUrl(url);
        return _utilities_CommonUtils__WEBPACK_IMPORTED_MODULE_2__["CommonUtils"].getFileNameExtension(fileName);
    };
    FilePreviewHelper._isOriginalDoclibLinkHandlingKSActivated = function () {
        return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPKillSwitch"].isActivated(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Guid"].parse('247662e4-5793-4871-ba03-e0750dffca63'), '05/29/2020', 'Fallback to original doclib and subsite link handling.');
    };
    FilePreviewHelper.ONENOTE_EXTENSION = /one/i;
    FilePreviewHelper.DOC_STRING = '_layouts/15/doc.aspx';
    FilePreviewHelper.CLASSIC_DOC_STRING = 'layouts/kcdoc.aspx';
    FilePreviewHelper.WOPI_STRING = '_layouts/15/wopiframe.aspx';
    FilePreviewHelper.WOPI_STRING2 = '_layouts/15/wopiframe2.aspx';
    FilePreviewHelper.EMBED_STRING = '_layouts/15/embed.aspx';
    FilePreviewHelper.DOC_SHORTCUT_LINK = '_layouts/15/shortcutlink.aspx';
    FilePreviewHelper.ONEDRIVE = '_layouts/15/onedrive.aspx';
    FilePreviewHelper.DOCLIB = 'forms/allitems.aspx';
    /**
     * Some Doclib urls are redirected to actual long urls.
     * e.g. ../sites/bar/Shared%20Documents/ to ../sites/bar/Shared%20Documents/Forms/AllItems.aspx
     * So we need to use driveItem API to fetch weburl before using listallitems.aspx
     */
    FilePreviewHelper.SHARED_DOCUMENTS = /\/Shared Documents[\/]?$/i;
    FilePreviewHelper.SITE_ASSETS = /\/SiteAssets[\/]?$/i;
    FilePreviewHelper.DOCLIB_VIEWID_STRING = 'viewid';
    return FilePreviewHelper;
}());



/***/ }),

/***/ "VYoE":
/*!*****************************!*\
  !*** ./lib/CacheHandler.js ***!
  \*****************************/
/*! exports provided: CacheHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CacheHandler", function() { return CacheHandler; });
/* harmony import */ var _utilities_EngagementLogger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utilities/EngagementLogger */ "kNMr");

var CacheHandler = /** @class */ (function () {
    function CacheHandler() {
    }
    CacheHandler.getPageTypeFromCache = function (url) {
        return CacheHandler._getOrSetPageTypeFromCache(url);
    };
    CacheHandler.setPageTypeInCache = function (url, pageTypeToSet) {
        return CacheHandler._getOrSetPageTypeFromCache(url, pageTypeToSet);
    };
    CacheHandler._getOrSetPageTypeFromCache = function (url, newPageType) {
        var pageType = undefined;
        if (typeof window.localStorage !== 'undefined') {
            var pageTypeMapString = window.localStorage.getItem(CacheHandler.PAGE_TYPE_KEY);
            var mainUrl = url.href.split(/[?#]/)[0];
            var pageTypeMap = pageTypeMapString
                ? new Map(JSON.parse(pageTypeMapString))
                : new Map();
            pageType = pageTypeMap.get(mainUrl);
            var pageTypeToSet = newPageType ? newPageType : pageType;
            // if it is get call and no entry exists we don't want to update map :)
            if (pageTypeToSet) {
                if (!newPageType) {
                    // get call
                    _utilities_EngagementLogger__WEBPACK_IMPORTED_MODULE_0__["EngagementLogger"].getInstance().logEvent('TeamsNavigation.CacheHandler.Hit');
                    pageTypeMap.delete(mainUrl);
                }
                else {
                    // set call
                    if (!pageType && pageTypeMap.size === CacheHandler.MAX_CACHE_SIZE) {
                        _utilities_EngagementLogger__WEBPACK_IMPORTED_MODULE_0__["EngagementLogger"].getInstance().logEvent('TeamsNavigation.CacheHandler.Eviction');
                        pageTypeMap.delete(pageTypeMap.keys().next().value);
                    }
                }
                pageTypeMap.set(mainUrl, pageTypeToSet);
                window.localStorage.setItem(CacheHandler.PAGE_TYPE_KEY, JSON.stringify(Array.from(pageTypeMap.entries())));
            }
            else if (!newPageType) {
                _utilities_EngagementLogger__WEBPACK_IMPORTED_MODULE_0__["EngagementLogger"].getInstance().logEvent('TeamsNavigation.CacheHandler.Miss');
            }
        }
        else {
            _utilities_EngagementLogger__WEBPACK_IMPORTED_MODULE_0__["EngagementLogger"].getInstance().logEvent('TeamsNavigation.CacheHandler.NoLocalStorage');
        }
        return pageType;
    };
    CacheHandler.PAGE_TYPE_KEY = 'PageTypeInfo';
    CacheHandler.MAX_CACHE_SIZE = 100;
    return CacheHandler;
}());



/***/ }),

/***/ "bnh+":
/*!***********************************************!*\
  !*** ./lib/filePreview/FilePreviewManager.js ***!
  \***********************************************/
/*! exports provided: FilePreviewManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilePreviewManager", function() { return FilePreviewManager; });
/* harmony import */ var _microsoft_sp_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/sp-http */ "vlQI");
/* harmony import */ var _microsoft_sp_http__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_http__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @microsoft/sp-diagnostics */ "ut3N");
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ms/sp-telemetry */ "2q6Q");
/* harmony import */ var _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _FilePreviewHelper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./FilePreviewHelper */ "JTzz");
/* harmony import */ var _ms_odsp_teams_shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ms/odsp-teams-shared */ "I0DE");
/* harmony import */ var _utilities_EngagementLogger__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utilities/EngagementLogger */ "kNMr");
/* harmony import */ var _utilities_CommonUtils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utilities/CommonUtils */ "Se0m");
/* harmony import */ var _NavigatorFactory__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../NavigatorFactory */ "7GbI");
/* harmony import */ var _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ms/odsp-utilities-bundle */ "y88i");
/* harmony import */ var _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_9__);










var FilePreviewManager = /** @class */ (function () {
    function FilePreviewManager() {
    }
    /**
     * Checks whether the URL is supported by Teams' file previewer or not.
     * There are 2 different categories of URLs we'll support:
     * 1. Document URLs: All Urls which point to a w/x/p document.
     * 2. All Urls which are supported by the Teams' file previewer (excluding the documents) e.g: pdf, jpg, txt, etc.
     * @param url
     */
    FilePreviewManager.isFilePreviewSupported = function (url, serviceScope) {
        var filePreviewSupported = false;
        if (url) {
            var queryParams = new URLSearchParams(url.search);
            if (!queryParams.get('debug')) {
                // if (FilePreviewHelper.isDocumentUrl(urlString) || FilePreviewHelper.isPreviewableUrl(urlString)) {
                if (_FilePreviewHelper__WEBPACK_IMPORTED_MODULE_4__["FilePreviewHelper"].isDocumentUrl(url, serviceScope)) {
                    filePreviewSupported = true;
                }
            }
        }
        return filePreviewSupported;
    };
    FilePreviewManager.openFilePreview = function (url, serviceScope, crossDomain, navigator) {
        var filePreviewMonitor = new _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_3__["_QosMonitor"]('FilePreviewManager.open');
        // check and open file from URL itself else get details from driveItem api
        if (FilePreviewManager._openFileFromUrl(url, filePreviewMonitor, crossDomain, serviceScope)) {
            return;
        }
        var tokenMonitor = new _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_3__["_QosMonitor"]('FilePreviewManager.TeamsTokenTime');
        // Fetch access token for SharePoint domain from TeamsSDK
        var authTokenRequest = {
            successCallback: function (token) {
                return FilePreviewManager.onTokenRequestSuccess(url, token, serviceScope, filePreviewMonitor, tokenMonitor, crossDomain, navigator);
            },
            failureCallback: function (error) {
                return FilePreviewManager.onTokenRequestFailure(url, error, filePreviewMonitor);
            },
            resources: [url.origin]
        };
        _ms_odsp_teams_shared__WEBPACK_IMPORTED_MODULE_5__["TeamsSDKInitializer"].getInstance().getTeamsSDK().authentication.getAuthToken(authTokenRequest);
    };
    FilePreviewManager._encodeUrlForPreview = function (url) {
        var encodedUrl = window.btoa(url);
        return encodedUrl.replace(/\+/g, '-').replace(/\//g, '_').replace(/\=+$/, '');
    };
    // Returns true in case we need to remove /forms/CustomView.aspx before constructing drive item API URL.
    // This is because:
    // Drive item call doesn't work for URLs of type ../forms/someview.aspx?optionalQueryParam=foo
    // However, it does work for forms/allitems.aspx.
    FilePreviewManager._shouldModifyDoclibCustomView = function (url) {
        if (url.pathname.match(_utilities_CommonUtils__WEBPACK_IMPORTED_MODULE_7__["CommonUtils"].doclibFormsRegex)) {
            if (url.pathname.toLowerCase().indexOf('/forms/allitems.aspx') !== -1) {
                return false;
            }
            return true;
        }
    };
    FilePreviewManager.onTokenRequestSuccess = function (url, token, serviceScope, filePreviewMonitor, tokenMonitor, crossDomain, navigator) {
        tokenMonitor.writeSuccess();
        // Storing old pathname here, since we are modifying it for constructing apiUrl.
        var oldPathName = url.pathname;
        if (!_ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_9__["Killswitch"].isActivated(_utilities_CommonUtils__WEBPACK_IMPORTED_MODULE_7__["CommonUtils"].doclibCustomViewKS)) {
            // For doclib links, Drive item API is only called if the url has 'forms/allitems.aspx' OR has ?viewid=<> query param.
            // The goal here is to allow /forms/CustomView.aspx to be opened correctly inside of teams.
            if (FilePreviewManager._shouldModifyDoclibCustomView(url)) {
                url.pathname = url.pathname.split(_utilities_CommonUtils__WEBPACK_IMPORTED_MODULE_7__["CommonUtils"].doclibFormsRegex)[0];
            }
        }
        var urlString = _FilePreviewHelper__WEBPACK_IMPORTED_MODULE_4__["FilePreviewHelper"].removeQueryParametersFromUrl(url.href);
        var encodedUrl = FilePreviewManager._encodeUrlForPreview(urlString);
        var serviceUrl = "_api/v2.0/shares/u!" + encodedUrl + "/driveItem?select=webUrl,name,folder,sharepointIds,webDavUrl";
        var apiUrl = url.origin + '/' + serviceUrl;
        // Get the old pathname back
        // (For non-doclib links this is equivalent to a no-op, since url.pathname and oldPathName are the same strings.)
        // Note that webUrl in drive item response may not
        url.pathname = oldPathName;
        var httpClient = serviceScope.consume(_microsoft_sp_http__WEBPACK_IMPORTED_MODULE_0__["SPHttpClient"].serviceKey);
        var headers = new Headers();
        headers.append('Authorization', 'Bearer ' + token);
        headers.append('Prefer', 'redeemSharingLink');
        // get driveItem info
        httpClient
            .get(apiUrl, _microsoft_sp_http__WEBPACK_IMPORTED_MODULE_0__["SPHttpClient"].configurations.v1, { headers: headers })
            .then(function (response) {
            return FilePreviewManager._handleDriveItemResponse(response, url, filePreviewMonitor, crossDomain, navigator);
        })
            .catch(function (error) {
            _utilities_EngagementLogger__WEBPACK_IMPORTED_MODULE_6__["EngagementLogger"].getInstance().logEvent('TeamsNavigation.WindowOpen.FileApiIssue');
            _utilities_CommonUtils__WEBPACK_IMPORTED_MODULE_7__["CommonUtils"].openInNewWindow(url);
        });
    };
    FilePreviewManager._handleDriveItemResponse = function (response, url, filePreviewMonitor, crossDomain, navigator) {
        var _a;
        (_a = response) === null || _a === void 0 ? void 0 : _a.json().then(function (jsonResponse) {
            var _a, _b, _c, _d, _e, _f;
            if (response.ok) {
                var folder = jsonResponse.folder;
                var driveItemResponse = undefined;
                var params = undefined;
                if (!_ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_9__["Killswitch"].isActivated(_utilities_CommonUtils__WEBPACK_IMPORTED_MODULE_7__["CommonUtils"].filePreviewKS /* file preview gcc */)) {
                    try {
                        driveItemResponse = jsonResponse;
                    }
                    catch (error) {
                        /* no-op */
                    }
                    params = {
                        entityId: ((_b = (_a = driveItemResponse) === null || _a === void 0 ? void 0 : _a.sharepointIds) === null || _b === void 0 ? void 0 : _b.listItemUniqueId) || '',
                        title: jsonResponse.name,
                        baseUrl: (_d = (_c = driveItemResponse) === null || _c === void 0 ? void 0 : _c.sharepointIds) === null || _d === void 0 ? void 0 : _d.siteUrl,
                        type: _utilities_CommonUtils__WEBPACK_IMPORTED_MODULE_7__["CommonUtils"].getFileNameExtension(jsonResponse.name),
                        objectUrl: jsonResponse.webDavUrl ? jsonResponse.webDavUrl : url.href
                    };
                }
                else {
                    params = {
                        entityId: '',
                        title: jsonResponse.name,
                        type: _utilities_CommonUtils__WEBPACK_IMPORTED_MODULE_7__["CommonUtils"].getFileNameExtension(jsonResponse.name),
                        objectUrl: jsonResponse.webUrl ? jsonResponse.webUrl : url.href
                    };
                    try {
                        driveItemResponse = jsonResponse;
                    }
                    catch (error) {
                        /* no-op */
                    }
                }
                filePreviewMonitor.writeSuccess({ crossDomain: crossDomain });
                if (folder) {
                    var webUrl = new URL(jsonResponse.webUrl);
                    // Doclibs ?viewid=<guid> query param needs to be attached to the webUrl.
                    if (!_ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_9__["Killswitch"].isActivated(_utilities_CommonUtils__WEBPACK_IMPORTED_MODULE_7__["CommonUtils"].doclibCustomViewKS)) {
                        if (url.searchParams.has('viewid')) {
                            webUrl.searchParams.append('viewid', url.searchParams.get('viewid'));
                        }
                        // Drive item call strips off /forms/allitems.aspx from the end of the url in the weburl field.
                        // This leads to the wrong view opened in case some other view is set as the default view.
                        // Only doing this specific fix when there is no query param to the end of the URL.
                        // Query params like id=<> may link to different folders, for which we do need the response returned
                        // from drive item's weburl field
                        if (url.search.length === 0 && url.pathname.toLowerCase().indexOf('allitems.aspx') !== -1) {
                            webUrl.pathname = url.pathname;
                            driveItemResponse.webUrl = webUrl.toString();
                        }
                    }
                    _NavigatorFactory__WEBPACK_IMPORTED_MODULE_8__["NavigatorFactory"].getNavigator(_NavigatorFactory__WEBPACK_IMPORTED_MODULE_8__["NavigatorType"].Doclib, crossDomain).navigate(webUrl, driveItemResponse);
                }
                else {
                    FilePreviewManager._openFile(params, url);
                }
            }
            else {
                if (navigator && ((_f = (_e = jsonResponse) === null || _e === void 0 ? void 0 : _e.error) === null || _f === void 0 ? void 0 : _f.message) === 'Site Pages cannot be accessed as a drive item') {
                    _utilities_EngagementLogger__WEBPACK_IMPORTED_MODULE_6__["EngagementLogger"].getInstance().logEvent('TeamsNavigation.FileOpen.SitePage');
                    navigator.navigate(url);
                }
                else {
                    FilePreviewManager._handleFileApiError(response, filePreviewMonitor, url);
                }
            }
        }).catch(function (error) {
            _utilities_EngagementLogger__WEBPACK_IMPORTED_MODULE_6__["EngagementLogger"].getInstance().logEvent('TeamsNavigation.WindowOpen.FileApiIssue');
            _utilities_CommonUtils__WEBPACK_IMPORTED_MODULE_7__["CommonUtils"].openInNewWindow(url);
        });
    };
    FilePreviewManager._handleFileApiError = function (response, filePreviewMonitor, url) {
        _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__["_TraceLogger"].logVerboseData({
            source: FilePreviewManager._logSource,
            message: "error in driveItem API " + response.statusMessage
        });
        _utilities_CommonUtils__WEBPACK_IMPORTED_MODULE_7__["CommonUtils"].logQosErrors(response, filePreviewMonitor);
        _utilities_EngagementLogger__WEBPACK_IMPORTED_MODULE_6__["EngagementLogger"].getInstance().logEvent('TeamsNavigation.WindowOpen.FileApiIssue');
        _utilities_CommonUtils__WEBPACK_IMPORTED_MODULE_7__["CommonUtils"].openInNewWindow(url);
    };
    FilePreviewManager._openFile = function (params, url) {
        if (!params.type) {
            _utilities_EngagementLogger__WEBPACK_IMPORTED_MODULE_6__["EngagementLogger"].getInstance().logEvent('TeamsNavigation.WindowOpen.NoFileType');
            _utilities_CommonUtils__WEBPACK_IMPORTED_MODULE_7__["CommonUtils"].openInNewWindow(url);
        }
        else if (
        // tslint:disable-next-line:no-string-literal
        window['teamsCustomAppType'] &&
            // tslint:disable-next-line:no-string-literal
            !(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["_SPFlight"].isEnabled(941) && window['teamsCustomAppType'] === 'portals')) {
            _utilities_EngagementLogger__WEBPACK_IMPORTED_MODULE_6__["EngagementLogger"].getInstance().logEvent('TeamsNavigation.WindowOpen.CustomAppFileOpen');
            _utilities_CommonUtils__WEBPACK_IMPORTED_MODULE_7__["CommonUtils"].openInNewWindow(url);
            return;
        }
        else {
            if (params.type.match(_FilePreviewHelper__WEBPACK_IMPORTED_MODULE_4__["FilePreviewHelper"].ONENOTE_EXTENSION)) {
                _utilities_EngagementLogger__WEBPACK_IMPORTED_MODULE_6__["EngagementLogger"].getInstance().logEvent('TeamsNavigation.Navigation.OneNote');
            }
            else {
                _utilities_EngagementLogger__WEBPACK_IMPORTED_MODULE_6__["EngagementLogger"].getInstance().logEvent('TeamsNavigation.Navigation.FileOpen');
            }
            _ms_odsp_teams_shared__WEBPACK_IMPORTED_MODULE_5__["TeamsSDKInitializer"].getInstance().getTeamsSDK().openFilePreview(params);
        }
    };
    /**
     * Check and open file if it can be opened from URL i.e. if file name and extension is present in URL
     * return false otherwise
     * @param url
     */
    FilePreviewManager._openFileFromUrl = function (url, filePreviewMonitor, crossDomain, serviceScope) {
        if (!_ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_9__["Killswitch"].isActivated(_utilities_CommonUtils__WEBPACK_IMPORTED_MODULE_7__["CommonUtils"].filePreviewKS /* file preview gcc */) &&
            _utilities_CommonUtils__WEBPACK_IMPORTED_MODULE_7__["CommonUtils"].isGccEnvironment(serviceScope)) {
            return false;
        }
        if (!_ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_9__["Killswitch"].isActivated(_utilities_CommonUtils__WEBPACK_IMPORTED_MODULE_7__["CommonUtils"].pdfPreviewKS /* pdf web or webdavurl preview */) &&
            _FilePreviewHelper__WEBPACK_IMPORTED_MODULE_4__["FilePreviewHelper"].isPDFWebLink(url)) {
            return false;
        }
        var filePreviewParams = _FilePreviewHelper__WEBPACK_IMPORTED_MODULE_4__["FilePreviewHelper"].getFilePreviewParamsFromUrl(url);
        if (filePreviewParams) {
            filePreviewMonitor.writeSuccess({ crossDomain: crossDomain });
            FilePreviewManager._openFile(filePreviewParams, url);
            return true;
        }
        return false;
    };
    FilePreviewManager.onTokenRequestFailure = function (url, error, filePreviewMonitor) {
        _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__["_TraceLogger"].logErrorData({
            source: FilePreviewManager._logSource,
            error: new Error('getAuthToken failure ' + error)
        });
        filePreviewMonitor.writeExpectedFailure('FailedToFetchAccessToken', new Error(error));
        _utilities_EngagementLogger__WEBPACK_IMPORTED_MODULE_6__["EngagementLogger"].getInstance().logEvent('TeamsNavigation.WindowOpen.FileTokenIssue');
        _utilities_CommonUtils__WEBPACK_IMPORTED_MODULE_7__["CommonUtils"].openInNewWindow(url);
    };
    FilePreviewManager._logSource = _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__["_LogSource"].create('FilePreviewManager');
    return FilePreviewManager;
}());



/***/ }),

/***/ "kmXs":
/*!***********************************!*\
  !*** ./lib/PageTypeIdentifier.js ***!
  \***********************************/
/*! exports provided: PageType, PageTypeIdentifier */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageType", function() { return PageType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageTypeIdentifier", function() { return PageTypeIdentifier; });
/* harmony import */ var _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ms/sp-telemetry */ "2q6Q");
/* harmony import */ var _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _microsoft_sp_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @microsoft/sp-http */ "vlQI");
/* harmony import */ var _microsoft_sp_http__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_http__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @microsoft/sp-diagnostics */ "ut3N");
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ms_odsp_teams_shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ms/odsp-teams-shared */ "I0DE");
/* harmony import */ var _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ms/odsp-utilities-bundle */ "y88i");
/* harmony import */ var _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _CacheHandler__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./CacheHandler */ "VYoE");
/* harmony import */ var _utilities_EngagementLogger__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utilities/EngagementLogger */ "kNMr");
/* harmony import */ var _utilities_CommonUtils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utilities/CommonUtils */ "Se0m");









/**
 * If there is a need to add more types here, add them after the last item.
 * This is because these numbers are stored as ints in session storage;
 * modifying the order might break functionality.
 */
var PageType;
(function (PageType) {
    PageType[PageType["List"] = 0] = "List";
    PageType[PageType["DocLib"] = 1] = "DocLib";
    PageType[PageType["ModernLayout"] = 2] = "ModernLayout";
    PageType[PageType["Modern"] = 3] = "Modern";
    PageType[PageType["ClassicLayout"] = 4] = "ClassicLayout";
    PageType[PageType["Classic"] = 5] = "Classic";
    PageType[PageType["Unknown"] = 6] = "Unknown";
    PageType[PageType["External"] = 7] = "External";
    PageType[PageType["DocLibSubsite"] = 8] = "DocLibSubsite";
    PageType[PageType["DocumentCenter"] = 9] = "DocumentCenter";
    PageType[PageType["ListForm"] = 10] = "ListForm"; /* Pages of type /lists/ListName/NewForm.aspx, EditForm.aspx */
    PageType[PageType["ModernCrossDomain"] = 11] = "ModernCrossDomain";
})(PageType || (PageType = {}));
var PageTypeIdentifier = /** @class */ (function () {
    function PageTypeIdentifier() {
    }
    PageTypeIdentifier.getPageTypeByCallback = function (url, serviceScope, callback) {
        var mainUrlString = url.href.split(/[?#]/)[0];
        var pageType = PageTypeIdentifier._isListOrDocLib(mainUrlString);
        // If not list or doclib check if layout page
        if (pageType === undefined) {
            // Checking if its a siteContent page
            if (PageTypeIdentifier._isSiteContentPage(mainUrlString)) {
                pageType = PageType.ClassicLayout;
            }
            else if (PageTypeIdentifier._isRecycleBinPage(mainUrlString)) {
                pageType = PageType.ClassicLayout;
            }
            else if (PageTypeIdentifier._isLayoutPage(mainUrlString)) {
                if (PageTypeIdentifier._isModernLayoutPage(mainUrlString)) {
                    pageType = PageType.ModernLayout;
                }
                else {
                    pageType = PageType.ClassicLayout;
                }
            }
        }
        // if either list, doclib or layout page return value
        if (pageType !== undefined) {
            callback(url, pageType);
            return;
        }
        var pageTypeCallback = undefined;
        var pageTypeFromCache = _CacheHandler__WEBPACK_IMPORTED_MODULE_6__["CacheHandler"].getPageTypeFromCache(url);
        if (pageTypeFromCache) {
            var repost = false;
            if (pageTypeFromCache === PageType.ModernCrossDomain) {
                pageTypeFromCache = PageType.Modern;
                repost = true;
            }
            // return cached value
            callback(url, pageTypeFromCache, repost);
            // If it is classic, fetch new value and update it
            // if it is modern, no need to update
            if (pageTypeFromCache === PageType.Classic ||
                pageTypeFromCache === PageType.ClassicLayout ||
                pageTypeFromCache === PageType.Unknown) {
                pageTypeCallback = function (callbackUrl, newPageType) {
                    if (pageTypeFromCache !== newPageType) {
                        _utilities_EngagementLogger__WEBPACK_IMPORTED_MODULE_7__["EngagementLogger"].getInstance().logEvent('TeamsNavigation.PageTypeIdentifier.pageTypeChanged');
                        setTimeout(function () { return _CacheHandler__WEBPACK_IMPORTED_MODULE_6__["CacheHandler"].setPageTypeInCache(callbackUrl, newPageType); });
                    }
                };
            }
            else {
                // if non-classic, don't refresh the value
                return;
            }
        }
        else {
            pageTypeCallback = function (callbackUrl, newPageType, repostCrossDomain) {
                // If value is not cached, fetch new value and callback
                callback(callbackUrl, newPageType, repostCrossDomain);
                // and then cache the value
                newPageType =
                    repostCrossDomain && newPageType === PageType.Modern ? PageType.ModernCrossDomain : newPageType;
                setTimeout(function () { return _CacheHandler__WEBPACK_IMPORTED_MODULE_6__["CacheHandler"].setPageTypeInCache(callbackUrl, newPageType); });
            };
        }
        var pageTypeMonitor = new _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_0__["_QosMonitor"]('PageTypeIdentifier.check');
        var tokenMonitor = new _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_0__["_QosMonitor"]('PageTypeIdentifier.TeamsTokenTime');
        // if pageType is not cached or is classic, use API
        var authTokenRequest = {
            successCallback: function (token) {
                return PageTypeIdentifier._onTokenRequestSuccess(url, token, serviceScope, pageTypeCallback, pageTypeMonitor, tokenMonitor);
            },
            failureCallback: function (error) {
                return PageTypeIdentifier._onTokenRequestFailure(url, error, pageTypeCallback, pageTypeMonitor);
            },
            resources: [url.origin]
        };
        _ms_odsp_teams_shared__WEBPACK_IMPORTED_MODULE_4__["TeamsSDKInitializer"].getInstance().getTeamsSDK().authentication.getAuthToken(authTokenRequest);
    };
    PageTypeIdentifier._isListOrDocLib = function (urlString) {
        if (urlString.match(PageTypeIdentifier.LIST_REGEXP)) {
            if (urlString.match(PageTypeIdentifier.LIST_FORM_REGEXP)) {
                return PageType.ListForm;
            }
            return PageType.List;
        }
        var urlStringDecoded = decodeURIComponent(urlString);
        if (urlString.match(PageTypeIdentifier.DOCLIB_REGEXP) ||
            urlStringDecoded.match(PageTypeIdentifier.SHARED_DOCUMENTS)) {
            return PageType.DocLib;
        }
        return undefined;
    };
    PageTypeIdentifier._isLayoutPage = function (urlString) {
        if (urlString.match(PageTypeIdentifier.LAYOUT_REGEXP)) {
            return true;
        }
        return false;
    };
    PageTypeIdentifier._isSiteContentPage = function (url) {
        if (url.match(PageTypeIdentifier.SITE_CONTENT_REGEXP)) {
            _utilities_EngagementLogger__WEBPACK_IMPORTED_MODULE_7__["EngagementLogger"].getInstance().logEvent('TeamsNavigation.WindowOpen.siteContent');
            return true;
        }
        return false;
    };
    PageTypeIdentifier._isRecycleBinPage = function (url) {
        if (url.match(PageTypeIdentifier.RECYCLE_REGEXP)) {
            _utilities_EngagementLogger__WEBPACK_IMPORTED_MODULE_7__["EngagementLogger"].getInstance().logEvent('TeamsNavigation.WindowOpen.recycleBin');
            return true;
        }
        return false;
    };
    PageTypeIdentifier._isModernLayoutPage = function (urlString) {
        if (urlString.match(PageTypeIdentifier.LAYOUT_REGEXP)) {
            var urlArray = urlString.split(PageTypeIdentifier.LAYOUT_REGEXP);
            var page = urlArray[1].split('.')[0];
            if (page && PageTypeIdentifier.MODERN_LAYOUT_PAGES.indexOf(page.toLowerCase()) !== -1) {
                return true;
            }
        }
        return false;
    };
    PageTypeIdentifier._onTokenRequestSuccess = function (url, token, serviceScope, callback, pageTypeMonitor, tokenMonitor) {
        tokenMonitor.writeSuccess();
        try {
            var urlString_1 = url.href.split(/[?#]/)[0];
            // If url is referring to a home site, construct the complete home site url.
            // TODO parallel request for perf improvement
            if (!urlString_1.match(".aspx")) {
                PageTypeIdentifier._getWelcomePageUrl(urlString_1, token, serviceScope)
                    .then(function (returnValue) {
                    var welcomePage = returnValue.value, status = returnValue.status;
                    if (welcomePage) {
                        urlString_1 = urlString_1 + '/' + welcomePage;
                        return PageTypeIdentifier._processUrl(url, urlString_1, token, serviceScope, callback, pageTypeMonitor);
                    }
                    else if (_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["_SPFlight"].isEnabled(1025 /* SPTeamsPagesDoclibSubsite */) && welcomePage === '') {
                        // Document center is one case
                        // https://microsoft.sharepoint-df.com/sites/bar/galaxysite/galaxysitedoclib2/default.aspx
                        _utilities_EngagementLogger__WEBPACK_IMPORTED_MODULE_7__["EngagementLogger"].getInstance().logEvent('TeamsNavigation.WindowOpen.EmptyWelcomePage');
                        callback(url, PageType.DocumentCenter);
                        return;
                    }
                    else {
                        // remove trailing slash, if any
                        urlString_1 = urlString_1.replace(/\/$/, '');
                        // if url is of the subsite form, send to driveitem check, treat like doclib
                        // Incur driveitem api cost only if url contains at least 5 slashes : https://a.b.c/foo/bar/baz
                        if (_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["_SPFlight"].isEnabled(1025 /* SPTeamsPagesDoclibSubsite */) &&
                            status >= 400 &&
                            status < 500 &&
                            urlString_1.match(PageTypeIdentifier.SUBSITE_REGEXP)) {
                            callback(url, PageType.DocLibSubsite);
                        }
                        else {
                            // must be doclib
                            callback(url, PageType.DocLib);
                        }
                        return;
                    }
                })
                    .catch(function (error) {
                    PageTypeIdentifier._onProcessUrlError(error, pageTypeMonitor);
                    // cross-domain api request to classic pages fail due to same-origin policy
                    callback(url, PageType.Classic);
                });
                return;
            }
            PageTypeIdentifier._processUrl(url, urlString_1, token, serviceScope, callback, pageTypeMonitor).catch(function (error) {
                PageTypeIdentifier._onProcessUrlError(error, pageTypeMonitor);
                // cross-domain api request to classic pages fail due to same-origin policy
                callback(url, PageType.Classic);
            });
        }
        catch (error) {
            PageTypeIdentifier._onProcessUrlError(error, pageTypeMonitor);
            // cross-domain api request to classic pages fail due to same-origin policy
            callback(url, PageType.Classic);
        }
        return;
    };
    PageTypeIdentifier._processUrl = function (url, urlString, token, serviceScope, callback, pageTypeMonitor) {
        var pageType = PageType.Unknown;
        try {
            var urlAnchorElement = PageTypeIdentifier._getUrlAnchorElement(urlString);
            var teamSite = urlString.split(PageTypeIdentifier.PAGES_REGEXP)[0];
            var encodedPathname = encodeURI(urlAnchorElement.pathname.replace(/'/g, '%27'));
            var apiUrl = teamSite + _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_5__["StringHelper"].format(PageTypeIdentifier.GET_FILE_BY_URL, encodedPathname);
            PageTypeIdentifier._makeGetRequest(apiUrl, token, serviceScope)
                .then(function (response) {
                if (response.ok) {
                    pageTypeMonitor.writeSuccess();
                    response
                        .json()
                        .then(function (jsonResponse) {
                        var _a;
                        if (jsonResponse &&
                            // tslint:disable-next-line:no-string-literal
                            ((_a = jsonResponse['ContentTypeId']) === null || _a === void 0 ? void 0 : _a.indexOf(PageTypeIdentifier.MODERN_CONTENT_TYPE_ID)) === 0) {
                            // tslint:disable-next-line:no-string-literal
                            var originalUrl = jsonResponse['OData__OriginalSourceUrl'];
                            var repostCrossDomain = !!originalUrl && new URL(originalUrl).host !== window.location.host;
                            if (originalUrl) {
                                var isWithinSameTenant = _utilities_CommonUtils__WEBPACK_IMPORTED_MODULE_8__["CommonUtils"].isInternalResource(originalUrl, serviceScope);
                                if (isWithinSameTenant) {
                                    _utilities_EngagementLogger__WEBPACK_IMPORTED_MODULE_7__["EngagementLogger"].getInstance().logEvent('TeamsNavigation.PageTypeIdentifier.Repost.SharePoint');
                                    pageType = PageType.Modern;
                                }
                                else {
                                    _utilities_EngagementLogger__WEBPACK_IMPORTED_MODULE_7__["EngagementLogger"].getInstance().logEvent('TeamsNavigation.PageTypeIdentifier.Repost.External');
                                    pageType = PageType.External;
                                }
                            }
                            else {
                                pageType = PageType.Modern;
                            }
                            callback(url, pageType, repostCrossDomain);
                        }
                        else {
                            pageType = PageType.Classic;
                            callback(url, pageType);
                        }
                    })
                        .catch(function (error) {
                        PageTypeIdentifier._onProcessUrlError(error, pageTypeMonitor);
                        // cross-domain api request to classic pages fail due to same-origin policy
                        callback(url, PageType.Classic);
                    });
                }
                else {
                    _utilities_CommonUtils__WEBPACK_IMPORTED_MODULE_8__["CommonUtils"].logQosErrors(response, pageTypeMonitor);
                    callback(url, pageType);
                }
            })
                .catch(function (error) {
                PageTypeIdentifier._onProcessUrlError(error, pageTypeMonitor);
                // cross-domain api request to classic pages fail due to same-origin policy
                callback(url, PageType.Classic);
            });
        }
        catch (error) {
            PageTypeIdentifier._onProcessUrlError(error, pageTypeMonitor);
            // cross-domain api request to classic pages fail due to same-origin policy
            callback(url, PageType.Classic);
        }
        return Promise.resolve();
    };
    PageTypeIdentifier._onProcessUrlError = function (error /* tslint:disable-line:no-any */, pageTypeMonitor) {
        _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_3__["_TraceLogger"].logVerboseData({
            source: PageTypeIdentifier._logSource,
            message: 'Error in fetching page type ' + error
        });
        pageTypeMonitor.writeExpectedFailure('Error in API', error);
    };
    PageTypeIdentifier._onTokenRequestFailure = function (url, error, callback, pageTypeMonitor) {
        _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_3__["_TraceLogger"].logErrorData({
            source: PageTypeIdentifier._logSource,
            error: new Error('getAuthToken failure ' + error)
        });
        pageTypeMonitor.writeExpectedFailure('FailedToFetchAccessToken', new Error(error));
        callback(url, PageType.Unknown);
    };
    /**
     * Makes GET request to the api endpoint and returns the response
     */
    PageTypeIdentifier._makeGetRequest = function (apiUrl, token, serviceScope) {
        var httpClient = serviceScope.consume(_microsoft_sp_http__WEBPACK_IMPORTED_MODULE_2__["SPHttpClient"].serviceKey);
        var headers = new Headers();
        headers.append('Authorization', 'Bearer ' + token);
        headers.append('Accept', 'application/json');
        return httpClient.get(apiUrl, _microsoft_sp_http__WEBPACK_IMPORTED_MODULE_2__["SPHttpClient"].configurations.v1, { headers: headers });
    };
    PageTypeIdentifier._getUrlAnchorElement = function (str) {
        var anchorElement = document.createElement('a');
        anchorElement.href = str;
        return anchorElement;
    };
    /**
     * Fetches the complete homepage url for home site url
     * Eg. For https://microsoft.sharepoint-df.com/teams/odsp
     * API gets the homepage of the url .i.e https://microsoft.sharepoint-df.com/teams/odsp/SitePages/Home.aspx
     */
    PageTypeIdentifier._getWelcomePageUrl = function (url, token, serviceScope) {
        return PageTypeIdentifier._makeGetRequest(url + "/_api/web/welcomepage", token, serviceScope)
            .then(function (response) {
            if (response.ok) {
                return response
                    .json()
                    .then(function (jsonResponse) {
                    if (jsonResponse && (jsonResponse.value || jsonResponse.value === '')) {
                        return Promise.resolve({ value: jsonResponse.value, status: response.status });
                    }
                    return Promise.resolve({ value: undefined, status: 0 });
                })
                    .catch(function (error) {
                    return Promise.resolve({ value: undefined, status: 0 });
                });
            }
            return Promise.resolve({ value: undefined, status: response.status });
        })
            .catch(function (error) {
            return Promise.resolve({ value: undefined, status: 0 });
        });
    };
    PageTypeIdentifier._logSource = _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_3__["_LogSource"].create('PageTypeIdentifier');
    PageTypeIdentifier.LIST_REGEXP = /\/lists\//i;
    PageTypeIdentifier.LIST_FORM_REGEXP = /\/newform\.aspx|\/editform\.aspx|\/dispform\.aspx/i;
    PageTypeIdentifier.SITE_CONTENT_REGEXP = /\/_layouts\/15\/viewlsts.aspx/i;
    PageTypeIdentifier.RECYCLE_REGEXP = /\/_layouts\/15\/RecycleBin.aspx/i;
    PageTypeIdentifier.DOCLIB_REGEXP = /\/forms\//i;
    // private static readonly ONEDRIVE_REGEXP1: RegExp = /\/_layouts\/15\/mysite.aspx/i;
    // private static readonly ONEDRIVE_REGEXP2: RegExp = /\/_layouts\/15\/onedrive.aspx/i;
    PageTypeIdentifier.SHARED_DOCUMENTS = /\/Shared Documents\//i;
    PageTypeIdentifier.PAGES_REGEXP = /(\/pages\/|\/sitepages\/)/i;
    PageTypeIdentifier.LAYOUT_REGEXP = /\/_layouts\/15\//i;
    // Match subsites of the following form :
    // https://a.b.c/foo/bar/baz
    // https://microsoft.sharepoint-df.com/sites/bar/galaxysite/GalaxySiteDocLibCustom1/Sun
    // https://microsoft.sharepoint-df.com/sites/bar/galaxysite/galaxysitedoclib2/galaxynest1
    // https://microsoft.sharepoint-df.com/sites/bar/galaxysite
    // /galaxysitedoclib2/galaxynest1/Nest1Doclib1/NestFolder1/NestFolder2
    // Reference Page: https://microsoft.sharepoint-df.com/sites/bar/SitePages/SubsiteTest1.aspx
    PageTypeIdentifier.SUBSITE_REGEXP = /(\/).*(\/).*(\/).*(\/)/i;
    PageTypeIdentifier.MODERN_CONTENT_TYPE_ID = '0x0101009D1CB255DA76424F860D91F20E6C4118';
    PageTypeIdentifier.GET_FILE_BY_URL = "/_api/web/getfilebyserverrelativeurl('{0}')/ListItemAllFields?$select=ContentTypeId,OData__OriginalSourceUrl";
    PageTypeIdentifier.MODERN_LAYOUT_PAGES = [
        'accessdenied',
        'addstoreapp',
        'adminrecyclebin',
        'apppagehost',
        'authenticate',
        'creategroup',
        'createlist',
        'createsitepage',
        'embed',
        'error',
        'event',
        'events',
        'muisetng',
        'news',
        // 'onedrive',
        'planner',
        'preload',
        'topicpagepreview',
        'training',
        'score',
        'search',
        'searchsettings',
        'seeall',
        'sharepoint',
        'siteadmin',
        'siteanalytics',
        'sitepagepreview',
        'sites',
        'teamshostedapp',
        'teamslogon',
        'teamstabconfiguration',
        'teamstabconfigurationcombined',
        'teamspagestabconfiguration',
        'teamsliststabconfiguration',
        'topicpagepreview',
        'webpart',
        'workbench',
        // Error loading these pages
        'listhost',
        'adminhome'
    ];
    return PageTypeIdentifier;
}());



/***/ }),

/***/ "wdwf":
/*!***************************!*\
  !*** ./lib/Navigators.js ***!
  \***************************/
/*! exports provided: BaseNavigator, ModernPageNavigator, DoclibNavigator, ListsNavigator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseNavigator", function() { return BaseNavigator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModernPageNavigator", function() { return ModernPageNavigator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DoclibNavigator", function() { return DoclibNavigator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListsNavigator", function() { return ListsNavigator; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utilities_EngagementLogger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utilities/EngagementLogger */ "kNMr");
/* harmony import */ var _utilities_CommonUtils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utilities/CommonUtils */ "Se0m");




var BaseNavigator = /** @class */ (function () {
    function BaseNavigator() {
        var _this = this;
        // Base class for common navigator code
        this.addQueryParamToUrl = function (url, key, value) {
            var finalUrl = url;
            var queryParams = new URLSearchParams(url.search);
            queryParams.set(key, value);
            finalUrl = new URL("" + url.origin + url.pathname + "?" + queryParams.toString());
            return finalUrl;
        };
        this.addTeamsPortalsQueryParam = function (url) {
            // tslint:disable-next-line:no-string-literal
            if (window['teamsCustomAppType'] === 'portals') {
                url = _this.addQueryParamToUrl(url, 'app', 'portals');
            }
            return url;
        };
    }
    return BaseNavigator;
}());

var ModernPageNavigator = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ModernPageNavigator, _super);
    function ModernPageNavigator(history, state) {
        var _this = _super.call(this) || this;
        _this.history = history;
        _this.state = state;
        return _this;
    }
    ModernPageNavigator.prototype.navigate = function (url, params, crossDomain) {
        crossDomain ? this.navigateCrossDomain(url) : this.navigateWithinSameDomain(url);
    };
    ModernPageNavigator.prototype.navigateWithinSameDomain = function (url) {
        url = this.addTeamsPortalsQueryParam(url);
        if (this.history) {
            var relativeUrl = url.href;
            if (url.origin) {
                relativeUrl = url.href.replace(url.origin, '');
            }
            _utilities_EngagementLogger__WEBPACK_IMPORTED_MODULE_2__["EngagementLogger"].getInstance().logEvent('TeamsNavigation.Navigation.SPA');
            this.history.push(relativeUrl, this.state);
        }
        else {
            _utilities_EngagementLogger__WEBPACK_IMPORTED_MODULE_2__["EngagementLogger"].getInstance().logEvent('TeamsNavigation.Navigation.nonSPA');
            window.location.href = url.href;
        }
    };
    ModernPageNavigator.prototype.navigateCrossDomain = function (url) {
        url = this.addTeamsPortalsQueryParam(url);
        if (_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["_BrowserUtilities"].isTeamsWebViewHosted()) {
            _utilities_EngagementLogger__WEBPACK_IMPORTED_MODULE_2__["EngagementLogger"].getInstance().logEvent('TeamsNavigation.Navigation.CrossDomain.Client');
            if (window['teamsCustomAppType'] === 'portals' // tslint:disable-line:no-string-literal
            ) {
                _utilities_CommonUtils__WEBPACK_IMPORTED_MODULE_3__["CommonUtils"].openInNewWindow(url);
            }
            else {
                // We need to redirect cross-origin links only for Teams client,
                // for Teams browser login.microsoftonline.com cookie is already set
                window.location.href =
                    url.origin +
                        '/_layouts/15/teamslogon.aspx?spfx=true&dest=' +
                        encodeURIComponent(decodeURIComponent(url.href));
            }
        }
        else {
            _utilities_EngagementLogger__WEBPACK_IMPORTED_MODULE_2__["EngagementLogger"].getInstance().logEvent('TeamsNavigation.Navigation.CrossDomain.Browser');
            window.location.href = url.href;
        }
    };
    return ModernPageNavigator;
}(BaseNavigator));

var DoclibNavigator = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(DoclibNavigator, _super);
    function DoclibNavigator(crossDomain) {
        var _this = _super.call(this) || this;
        _this.navigate = function (url, params) {
            var transformedUrl = _utilities_CommonUtils__WEBPACK_IMPORTED_MODULE_3__["CommonUtils"].transformDoclibLink(url, true, _this.crossDomain, params);
            window.location.href = transformedUrl;
        };
        _this.crossDomain = crossDomain;
        return _this;
    }
    return DoclibNavigator;
}(BaseNavigator));

var ListsNavigator = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ListsNavigator, _super);
    function ListsNavigator(crossDomain) {
        var _this = _super.call(this) || this;
        _this.navigate = function (url) {
            var transformedUrl = _utilities_CommonUtils__WEBPACK_IMPORTED_MODULE_3__["CommonUtils"].transformListLink(url, false, _this.crossDomain);
            window.location.href = transformedUrl;
        };
        _this.crossDomain = crossDomain;
        return _this;
    }
    return ListsNavigator;
}(BaseNavigator));



/***/ })

}]);
//# sourceMappingURL=chunk.sp-teams-lib-dep_none.js.map