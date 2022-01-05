(window["webpackJsonp_1e2cdec9_1360_4295_b73c_98d6f51866d5_0_1_0"] = window["webpackJsonp_1e2cdec9_1360_4295_b73c_98d6f51866d5_0_1_0"] || []).push([["vendors~editnavchunk~spcx-siteheaderstatemanager"],{

/***/ "VIN7":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-datasources@45.13.10_e509c819ab980023b76e5746ec0fc9e2/node_modules/@ms/odsp-datasources/lib/providers/designPackage/DesignPackageProvider.js ***!
  \*************************************************************************************************************************************************************************************************************/
/*! exports provided: TEAMSITE_DESIGNPACKAGEID, REPORTSITE_DESIGNPACKAGEID, PORTFOLIOSITE_DESIGNPACKAGEID, BLANKSITE_DESIGNPACKAGEID, BLOGSITE_DESIGNPACKAGEID, COMPANY_PORTAL_DESIGNPACKAGEID, CONTENT_CENTER_DESIGNPACKAGEID, KNOWLEDGE_CENTER_DESIGNPACKAGEID, getDesignPackage, getDesignPackagesForTemplate, getAllDesignPackages, getDefaultChromeOptions, getCurrentChromeOptions, _chooseDesignPackageId */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TEAMSITE_DESIGNPACKAGEID", function() { return TEAMSITE_DESIGNPACKAGEID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REPORTSITE_DESIGNPACKAGEID", function() { return REPORTSITE_DESIGNPACKAGEID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PORTFOLIOSITE_DESIGNPACKAGEID", function() { return PORTFOLIOSITE_DESIGNPACKAGEID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BLANKSITE_DESIGNPACKAGEID", function() { return BLANKSITE_DESIGNPACKAGEID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BLOGSITE_DESIGNPACKAGEID", function() { return BLOGSITE_DESIGNPACKAGEID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COMPANY_PORTAL_DESIGNPACKAGEID", function() { return COMPANY_PORTAL_DESIGNPACKAGEID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONTENT_CENTER_DESIGNPACKAGEID", function() { return CONTENT_CENTER_DESIGNPACKAGEID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KNOWLEDGE_CENTER_DESIGNPACKAGEID", function() { return KNOWLEDGE_CENTER_DESIGNPACKAGEID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDesignPackage", function() { return getDesignPackage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDesignPackagesForTemplate", function() { return getDesignPackagesForTemplate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllDesignPackages", function() { return getAllDesignPackages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDefaultChromeOptions", function() { return getDefaultChromeOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCurrentChromeOptions", function() { return getCurrentChromeOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_chooseDesignPackageId", function() { return _chooseDesignPackageId; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ms_odsp_utilities_lib_guid_Guid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ms/odsp-utilities/lib/guid/Guid */ "vo05");
/* harmony import */ var _dataSources_web_WebTemplateType__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../dataSources/web/WebTemplateType */ "xYco");
/* harmony import */ var _interfaces_ISpPageContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../interfaces/ISpPageContext */ "GlwB");
/* harmony import */ var _models_chrome_ChromeOptions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/chrome/ChromeOptions */ "Vb17");
/* harmony import */ var _ms_odsp_utilities_lib_killswitch_Killswitch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ms/odsp-utilities/lib/killswitch/Killswitch */ "QUgr");
var _a, _b;






/** Team Site Design Package ID */
var TEAMSITE_DESIGNPACKAGEID = 'c8b3137a-ca4c-48a9-b356-a8e7987dd693';
/** Report Site Design Package ID */
var REPORTSITE_DESIGNPACKAGEID = '96c933ac-3698-44c7-9f4a-5fd17d71af9e';
/** Portfolio Site Design Package ID */
var PORTFOLIOSITE_DESIGNPACKAGEID = '6142d2a0-63a5-4ba0-aede-d9fefca2c767';
/** Blank Site Design Package ID */
var BLANKSITE_DESIGNPACKAGEID = 'f6cc5403-0d63-442e-96c0-285923709ffc';
/** Blog Site Design Package ID */
var BLOGSITE_DESIGNPACKAGEID = '400955b3-329f-4b22-ade5-002653506aee';
/** Company Portal Site Design Package ID */
var COMPANY_PORTAL_DESIGNPACKAGEID = 'fbf8ec01-846c-44c4-b17b-8fe1e4e5adae';
/** Content Center Site Design Package ID */
var CONTENT_CENTER_DESIGNPACKAGEID = 'ab120c41-0d36-490b-a048-b39f65675858';
/** Knowledge Center Site Design Package ID */
var KNOWLEDGE_CENTER_DESIGNPACKAGEID = '67f52693-99aa-428d-8670-0b1b2d291aa8';
function _getTeamSiteDesignPackage() {
    return {
        id: TEAMSITE_DESIGNPACKAGEID,
        title: undefined,
        description: undefined,
        chromeOptions: {
            header: {
                hidden: false,
                layout: _models_chrome_ChromeOptions__WEBPACK_IMPORTED_MODULE_4__["UnifiedHeaderLayout"].none
            },
            nav: {
                hidden: false,
                placement: _models_chrome_ChromeOptions__WEBPACK_IMPORTED_MODULE_4__["NavPlacementType"].LEFT
            },
            footer: { hidden: false },
            search: { hidden: false }
        },
        supportedTemplates: [_dataSources_web_WebTemplateType__WEBPACK_IMPORTED_MODULE_2__["default"].teamSite, _dataSources_web_WebTemplateType__WEBPACK_IMPORTED_MODULE_2__["default"].group]
    };
}
function _getReportSiteDesignPackage() {
    return {
        id: REPORTSITE_DESIGNPACKAGEID,
        title: undefined,
        description: undefined,
        chromeOptions: {
            header: {
                hidden: false,
                layout: _models_chrome_ChromeOptions__WEBPACK_IMPORTED_MODULE_4__["UnifiedHeaderLayout"].none
            },
            nav: {
                hidden: false,
                placement: _models_chrome_ChromeOptions__WEBPACK_IMPORTED_MODULE_4__["NavPlacementType"].HORIZONTAL,
                megaMenuEnabled: true
            },
            footer: { hidden: false },
            search: { hidden: true }
        },
        supportedTemplates: [_dataSources_web_WebTemplateType__WEBPACK_IMPORTED_MODULE_2__["default"].sitePagePublishing]
    };
}
function _getPortfolioSiteDesignPackage() {
    return {
        id: PORTFOLIOSITE_DESIGNPACKAGEID,
        title: undefined,
        description: undefined,
        chromeOptions: {
            header: {
                hidden: false,
                layout: _models_chrome_ChromeOptions__WEBPACK_IMPORTED_MODULE_4__["UnifiedHeaderLayout"].none
            },
            nav: {
                hidden: false,
                placement: _models_chrome_ChromeOptions__WEBPACK_IMPORTED_MODULE_4__["NavPlacementType"].HORIZONTAL,
                megaMenuEnabled: true
            },
            footer: { hidden: false },
            search: { hidden: true }
        },
        supportedTemplates: [_dataSources_web_WebTemplateType__WEBPACK_IMPORTED_MODULE_2__["default"].sitePagePublishing]
    };
}
function _getBlogSiteDesignPackage() {
    return {
        id: BLOGSITE_DESIGNPACKAGEID,
        title: undefined,
        description: undefined,
        chromeOptions: {
            header: {
                hidden: false,
                layout: _models_chrome_ChromeOptions__WEBPACK_IMPORTED_MODULE_4__["UnifiedHeaderLayout"].none
            },
            nav: {
                hidden: false,
                placement: _models_chrome_ChromeOptions__WEBPACK_IMPORTED_MODULE_4__["NavPlacementType"].LEFT,
                megaMenuEnabled: true
            },
            footer: { hidden: false },
            search: { hidden: false }
        },
        supportedTemplates: [_dataSources_web_WebTemplateType__WEBPACK_IMPORTED_MODULE_2__["default"].pointPublishingPersonal]
    };
}
function _getBlankSiteDesignPackage() {
    return {
        id: BLANKSITE_DESIGNPACKAGEID,
        title: undefined,
        description: undefined,
        chromeOptions: {
            header: {
                hidden: false,
                layout: _models_chrome_ChromeOptions__WEBPACK_IMPORTED_MODULE_4__["UnifiedHeaderLayout"].none
            },
            nav: {
                hidden: false,
                placement: _models_chrome_ChromeOptions__WEBPACK_IMPORTED_MODULE_4__["NavPlacementType"].HORIZONTAL,
                megaMenuEnabled: true
            },
            footer: { hidden: false },
            search: { hidden: true }
        },
        supportedTemplates: [_dataSources_web_WebTemplateType__WEBPACK_IMPORTED_MODULE_2__["default"].sitePagePublishing]
    };
}
function _getCompanyPortalSiteDesignPackage() {
    return {
        id: COMPANY_PORTAL_DESIGNPACKAGEID,
        title: undefined,
        description: undefined,
        chromeOptions: {
            header: {
                hidden: false,
                layout: _models_chrome_ChromeOptions__WEBPACK_IMPORTED_MODULE_4__["UnifiedHeaderLayout"].none
            },
            nav: {
                hidden: false,
                placement: _models_chrome_ChromeOptions__WEBPACK_IMPORTED_MODULE_4__["NavPlacementType"].HORIZONTAL,
                megaMenuEnabled: true
            },
            footer: { hidden: false },
            search: { hidden: false }
        },
        supportedTemplates: [_dataSources_web_WebTemplateType__WEBPACK_IMPORTED_MODULE_2__["default"].sitePagePublishing]
    };
}
function _getContentCenterSiteDesignPackage() {
    return {
        id: CONTENT_CENTER_DESIGNPACKAGEID,
        title: undefined,
        description: undefined,
        chromeOptions: {
            header: {
                hidden: false,
                layout: _models_chrome_ChromeOptions__WEBPACK_IMPORTED_MODULE_4__["UnifiedHeaderLayout"].none
            },
            nav: {
                hidden: false,
                placement: _models_chrome_ChromeOptions__WEBPACK_IMPORTED_MODULE_4__["NavPlacementType"].HORIZONTAL,
                megaMenuEnabled: true
            },
            footer: { hidden: false },
            search: { hidden: false }
        },
        supportedTemplates: [_dataSources_web_WebTemplateType__WEBPACK_IMPORTED_MODULE_2__["default"].contentCenter]
    };
}
function _getKnowledgeCenterSiteDesignPackage() {
    if (_ms_odsp_utilities_lib_killswitch_Killswitch__WEBPACK_IMPORTED_MODULE_5__["Killswitch"].isActivated('5ff3cf56-b6b0-4ac9-8162-f87f7a49a5cf', '04/09/2020', 'Deactivate knowledge center design package')) {
        return;
    }
    return {
        id: KNOWLEDGE_CENTER_DESIGNPACKAGEID,
        title: undefined,
        description: undefined,
        chromeOptions: {
            header: {
                hidden: false,
                layout: _models_chrome_ChromeOptions__WEBPACK_IMPORTED_MODULE_4__["UnifiedHeaderLayout"].none
            },
            nav: {
                hidden: false,
                placement: _models_chrome_ChromeOptions__WEBPACK_IMPORTED_MODULE_4__["NavPlacementType"].HORIZONTAL,
                megaMenuEnabled: true
            },
            footer: { hidden: false },
            search: { hidden: false }
        },
        supportedTemplates: [_dataSources_web_WebTemplateType__WEBPACK_IMPORTED_MODULE_2__["default"].contentCenter]
    };
}
/** Mapping from WebTemplate to default DesignPackageId for that WebTemplate. */
var _templateToDesignPackageIdMap = (_a = {},
    _a[_dataSources_web_WebTemplateType__WEBPACK_IMPORTED_MODULE_2__["default"].teamSite] = TEAMSITE_DESIGNPACKAGEID,
    _a[_dataSources_web_WebTemplateType__WEBPACK_IMPORTED_MODULE_2__["default"].group] = TEAMSITE_DESIGNPACKAGEID,
    _a[_dataSources_web_WebTemplateType__WEBPACK_IMPORTED_MODULE_2__["default"].sitePagePublishing] = REPORTSITE_DESIGNPACKAGEID,
    _a[_dataSources_web_WebTemplateType__WEBPACK_IMPORTED_MODULE_2__["default"].pointPublishingPersonal] = BLOGSITE_DESIGNPACKAGEID,
    _a[_dataSources_web_WebTemplateType__WEBPACK_IMPORTED_MODULE_2__["default"].contentCenter] = CONTENT_CENTER_DESIGNPACKAGEID,
    _a);
/** Mapping from designPackageId to Design Package JSON lambda. */
var _idToDesignPackageMap = (_b = {},
    _b[TEAMSITE_DESIGNPACKAGEID] = _getTeamSiteDesignPackage,
    _b[REPORTSITE_DESIGNPACKAGEID] = _getReportSiteDesignPackage,
    _b[PORTFOLIOSITE_DESIGNPACKAGEID] = _getPortfolioSiteDesignPackage,
    _b[BLANKSITE_DESIGNPACKAGEID] = _getBlankSiteDesignPackage,
    _b[BLOGSITE_DESIGNPACKAGEID] = _getBlogSiteDesignPackage,
    _b[COMPANY_PORTAL_DESIGNPACKAGEID] = _getCompanyPortalSiteDesignPackage,
    _b[CONTENT_CENTER_DESIGNPACKAGEID] = _getContentCenterSiteDesignPackage,
    _b[KNOWLEDGE_CENTER_DESIGNPACKAGEID] = _getKnowledgeCenterSiteDesignPackage,
    _b);
/**
 * Gets the current Design Package for this page context.
 * Note: must provide string resources due to horrendous code repository constraints.
 */
function getDesignPackage(resources, pageContext) {
    if (!pageContext) {
        throw new Error('pageContext missing');
    }
    if (!resources) {
        throw new Error('resources missing');
    }
    var designPackageId = _chooseDesignPackageId(pageContext);
    return _getDesignPackage(resources, designPackageId);
}
/**
 * Returns the set of all Design Packages that support the given web template.
 * Note: must provide string resources due to horrendous code repository constraints.
 */
function getDesignPackagesForTemplate(resources, webTemplate) {
    var supportingDesignPackages = [];
    for (var designPackageId in _idToDesignPackageMap) {
        var designPackage = _getDesignPackage(resources, designPackageId);
        if (designPackage.supportedTemplates.indexOf(webTemplate) > -1) {
            supportingDesignPackages.push(designPackage);
        }
    }
    return supportingDesignPackages;
}
/**
 * Returns the set of all Design Packages that are available.
 * Note: must provide string resources due to horrendous code repository constraints.
 */
function getAllDesignPackages(resources) {
    var result = [];
    for (var designPackageId in _idToDesignPackageMap) {
        var designPackage = _getDesignPackage(resources, designPackageId);
        result.push(designPackage);
    }
    return result;
}
/**
 * Get the default site chrome options for the current site template
 * @param pageContext
 */
function getDefaultChromeOptions(pageContext) {
    if (!pageContext) {
        throw new Error('pageContext missing');
    }
    var designPackageId = _chooseDesignPackageId(pageContext);
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, _idToDesignPackageMap[designPackageId]().chromeOptions), { footer: {
            emphasis: _models_chrome_ChromeOptions__WEBPACK_IMPORTED_MODULE_4__["FooterEmphasis"].Strong,
            hidden: true,
            layout: _models_chrome_ChromeOptions__WEBPACK_IMPORTED_MODULE_4__["FooterLayout"].SIMPLE
        } });
}
/**
 * Get the current site chrome options used
 * @param pageContext
 */
function getCurrentChromeOptions(pageContext) {
    var _a;
    var chromeOptions = getDefaultChromeOptions(pageContext);
    // get footer emphasis from web property bit flags
    /* tslint:disable-next-line:no-bitwise */
    var emphasisMSB = (pageContext.webPropertyFlags2 & _interfaces_ISpPageContext__WEBPACK_IMPORTED_MODULE_3__["SPWebPropertyFlags2"].FooterEmphasis1) >> 8;
    /* tslint:disable-next-line:no-bitwise */
    var emphasisLSB = (pageContext.webPropertyFlags2 & _interfaces_ISpPageContext__WEBPACK_IMPORTED_MODULE_3__["SPWebPropertyFlags2"].FooterEmphasis0) >> 8;
    /* tslint:disable-next-line:no-bitwise */
    chromeOptions.footer.emphasis = (emphasisMSB | emphasisLSB);
    // get footer layout from web property bit flags
    /* tslint:disable-next-line:no-bitwise */
    var layoutMSB = (pageContext.webPropertyFlags2 & _interfaces_ISpPageContext__WEBPACK_IMPORTED_MODULE_3__["SPWebPropertyFlags2"].FooterLayout1) >> 10;
    /* tslint:disable-next-line:no-bitwise */
    var layoutLSB = (pageContext.webPropertyFlags2 & _interfaces_ISpPageContext__WEBPACK_IMPORTED_MODULE_3__["SPWebPropertyFlags2"].FooterLayout0) >> 10;
    /* tslint:disable-next-line:no-bitwise */
    chromeOptions.footer.layout = (layoutMSB | layoutLSB);
    /* tslint:disable-next-line:no-bitwise */
    chromeOptions.footer.hidden = (pageContext.webPropertyFlags2 & 0x0000000000000002) === 0x0;
    if (chromeOptions.nav && !chromeOptions.nav.hidden) {
        /* tslint:disable-next-line:no-bitwise */
        chromeOptions.nav.megaMenuEnabled = (pageContext.webPropertyFlags2 & 0x0000000000000080) !== 0x0;
        chromeOptions.nav.quickLaunchEnabled = !!((_a = pageContext.navigationInfo) === null || _a === void 0 ? void 0 : _a.quickLaunch);
    }
    chromeOptions.header.layout = pageContext.headerLayout;
    chromeOptions.header.emphasis = pageContext.headerEmphasis;
    chromeOptions.header.logoAlignment = pageContext.logoAlignment;
    var hideTitleInHeader = (pageContext.webPropertyFlags2 & _interfaces_ISpPageContext__WEBPACK_IMPORTED_MODULE_3__["SPWebPropertyFlags2"].HideTitleInHeader) !== 0x0;
    chromeOptions.header.hideTitle = hideTitleInHeader;
    return chromeOptions;
}
/**
 * Decides on the design package ID based on the current page context. Specifically, it takes into account
 * the current web's design package ID and web template. It has a fallback for any web template.
 *
 * public only for testing purposes
 */
function _chooseDesignPackageId(pageContext) {
    var designPackageId = _ms_odsp_utilities_lib_guid_Guid__WEBPACK_IMPORTED_MODULE_1__["default"].Empty;
    // try getting it from _spPageContextInfo
    // if third party were enabled, we would have to wait for the design package manifest to return here
    if (pageContext.DesignPackageId && _hasFirstPartyDesignPackage(pageContext.DesignPackageId)) {
        designPackageId = pageContext.DesignPackageId;
    }
    // if _spPageContextInfo doesn't have a design package ID set, get the default for the web template
    if (designPackageId === _ms_odsp_utilities_lib_guid_Guid__WEBPACK_IMPORTED_MODULE_1__["default"].Empty &&
        _templateToDesignPackageIdMap[pageContext.webTemplate] !== undefined) {
        designPackageId = _templateToDesignPackageIdMap[pageContext.webTemplate];
    }
    // if this web template doesn't have a default design package ID, go with the Team site one
    if (designPackageId === _ms_odsp_utilities_lib_guid_Guid__WEBPACK_IMPORTED_MODULE_1__["default"].Empty) {
        designPackageId = TEAMSITE_DESIGNPACKAGEID;
    }
    return designPackageId;
}
/**
 * Returns true if the given ID corresponds to a first-party Design Package, false otherwise.
 */
function _hasFirstPartyDesignPackage(id) {
    return _idToDesignPackageMap[id] !== undefined;
}
/**
 * Retrieves the design package and gets the resources for it.
 */
function _getDesignPackage(resources, designPackageId) {
    function _assignResources(designPackage, title, description) {
        designPackage.title = title;
        designPackage.description = description;
    }
    var designPackage = _idToDesignPackageMap[designPackageId]();
    switch (_ms_odsp_utilities_lib_guid_Guid__WEBPACK_IMPORTED_MODULE_1__["default"].normalizeLower(designPackageId)) {
        case TEAMSITE_DESIGNPACKAGEID:
            _assignResources(designPackage, resources.teamSiteTitle, resources.teamSiteDescription);
            break;
        case REPORTSITE_DESIGNPACKAGEID:
            _assignResources(designPackage, resources.reportSiteTitle, resources.reportSiteDescription);
            break;
        case PORTFOLIOSITE_DESIGNPACKAGEID:
            _assignResources(designPackage, resources.portfolioSiteTitle, resources.portfolioSiteDescription);
            break;
        case BLOGSITE_DESIGNPACKAGEID:
            _assignResources(designPackage, resources.blogSiteTitle, resources.blogSiteDescription);
            break;
        case BLANKSITE_DESIGNPACKAGEID:
            _assignResources(designPackage, resources.blankSiteTitle, resources.blankSiteDescription);
            break;
        case COMPANY_PORTAL_DESIGNPACKAGEID:
            _assignResources(designPackage, resources.companyPortalSiteTitle, resources.companyPortalSiteDescription);
            break;
        case CONTENT_CENTER_DESIGNPACKAGEID:
            _assignResources(designPackage, resources.contentCenterSiteTitle, resources.contentCenterSiteDescription);
            break;
        case KNOWLEDGE_CENTER_DESIGNPACKAGEID:
            _assignResources(designPackage, resources.knowledgeCenterSiteTitle, resources.knowledgeCenterSiteDescription);
            break;
        default:
            throw new Error('Invalid DesignPackageId: ' + designPackageId);
    }
    return designPackage;
}
//# sourceMappingURL=DesignPackageProvider.js.map

/***/ }),

/***/ "cGzF":
/*!*****************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-datasources@45.13.10_e509c819ab980023b76e5746ec0fc9e2/node_modules/@ms/odsp-datasources/lib/DesignPackage.js ***!
  \*****************************************************************************************************************************************************************************/
/*! exports provided: TEAMSITE_DESIGNPACKAGEID, REPORTSITE_DESIGNPACKAGEID, PORTFOLIOSITE_DESIGNPACKAGEID, BLANKSITE_DESIGNPACKAGEID, BLOGSITE_DESIGNPACKAGEID, COMPANY_PORTAL_DESIGNPACKAGEID, CONTENT_CENTER_DESIGNPACKAGEID, KNOWLEDGE_CENTER_DESIGNPACKAGEID, getDesignPackage, getDesignPackagesForTemplate, getAllDesignPackages, getDefaultChromeOptions, getCurrentChromeOptions, _chooseDesignPackageId */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _providers_designPackage_DesignPackageProvider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./providers/designPackage/DesignPackageProvider */ "VIN7");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TEAMSITE_DESIGNPACKAGEID", function() { return _providers_designPackage_DesignPackageProvider__WEBPACK_IMPORTED_MODULE_0__["TEAMSITE_DESIGNPACKAGEID"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "REPORTSITE_DESIGNPACKAGEID", function() { return _providers_designPackage_DesignPackageProvider__WEBPACK_IMPORTED_MODULE_0__["REPORTSITE_DESIGNPACKAGEID"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PORTFOLIOSITE_DESIGNPACKAGEID", function() { return _providers_designPackage_DesignPackageProvider__WEBPACK_IMPORTED_MODULE_0__["PORTFOLIOSITE_DESIGNPACKAGEID"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BLANKSITE_DESIGNPACKAGEID", function() { return _providers_designPackage_DesignPackageProvider__WEBPACK_IMPORTED_MODULE_0__["BLANKSITE_DESIGNPACKAGEID"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BLOGSITE_DESIGNPACKAGEID", function() { return _providers_designPackage_DesignPackageProvider__WEBPACK_IMPORTED_MODULE_0__["BLOGSITE_DESIGNPACKAGEID"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "COMPANY_PORTAL_DESIGNPACKAGEID", function() { return _providers_designPackage_DesignPackageProvider__WEBPACK_IMPORTED_MODULE_0__["COMPANY_PORTAL_DESIGNPACKAGEID"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CONTENT_CENTER_DESIGNPACKAGEID", function() { return _providers_designPackage_DesignPackageProvider__WEBPACK_IMPORTED_MODULE_0__["CONTENT_CENTER_DESIGNPACKAGEID"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KNOWLEDGE_CENTER_DESIGNPACKAGEID", function() { return _providers_designPackage_DesignPackageProvider__WEBPACK_IMPORTED_MODULE_0__["KNOWLEDGE_CENTER_DESIGNPACKAGEID"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getDesignPackage", function() { return _providers_designPackage_DesignPackageProvider__WEBPACK_IMPORTED_MODULE_0__["getDesignPackage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getDesignPackagesForTemplate", function() { return _providers_designPackage_DesignPackageProvider__WEBPACK_IMPORTED_MODULE_0__["getDesignPackagesForTemplate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getAllDesignPackages", function() { return _providers_designPackage_DesignPackageProvider__WEBPACK_IMPORTED_MODULE_0__["getAllDesignPackages"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getDefaultChromeOptions", function() { return _providers_designPackage_DesignPackageProvider__WEBPACK_IMPORTED_MODULE_0__["getDefaultChromeOptions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getCurrentChromeOptions", function() { return _providers_designPackage_DesignPackageProvider__WEBPACK_IMPORTED_MODULE_0__["getCurrentChromeOptions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_chooseDesignPackageId", function() { return _providers_designPackage_DesignPackageProvider__WEBPACK_IMPORTED_MODULE_0__["_chooseDesignPackageId"]; });


//# sourceMappingURL=DesignPackage.js.map

/***/ })

}]);
//# sourceMappingURL=chunk.vendors~editnavchunk~spcx-siteheaderstatemanager_[locale].js.map