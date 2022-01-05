(window["webpackJsonp_1e2cdec9_1360_4295_b73c_98d6f51866d5_0_1_0"] = window["webpackJsonp_1e2cdec9_1360_4295_b73c_98d6f51866d5_0_1_0"] || []).push([["spcx-editnav"],{

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

/***/ "En+1":
/*!********************************************!*\
  !*** ./lib/chunks/spcx-editNav/EditNav.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @microsoft/office-ui-fabric-react-bundle */ "KL1q");
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ms_odsp_datasources_lib_interfaces_WebTemplateType__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ms/odsp-datasources/lib/interfaces/WebTemplateType */ "DRdk");
/* harmony import */ var _loaders_spcx_groupsProvider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../loaders/spcx-groupsProvider */ "+IOR");
/* harmony import */ var _common_KillSwitches__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../common/KillSwitches */ "+ORw");
/* harmony import */ var _components_SiteHeader_SiteHeader_resx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/SiteHeader/SiteHeader.resx */ "2pVO");
var _components_SiteHeader_SiteHeader_resx__WEBPACK_IMPORTED_MODULE_7___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../components/SiteHeader/SiteHeader.resx */ "2pVO", 1);
/* harmony import */ var _components_SiteLeftNav_LeftNav_module_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/SiteLeftNav/LeftNav.module.scss */ "D3jz");
/* harmony import */ var _common_TopicUtilities__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../common/TopicUtilities */ "x74c");
/* harmony import */ var _common_Constants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../common/Constants */ "rMgv");











var EditNav = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(EditNav, _super);
    function EditNav(props) {
        var _this = _super.call(this, props) || this;
        _this._getGroupsProvider = function () {
            return _loaders_spcx_groupsProvider__WEBPACK_IMPORTED_MODULE_5__["GroupsProviderFactory"].GetGroupsProvider(_this.props.pageContext);
        };
        _this.state = {};
        return _this;
    }
    EditNav.prototype.componentDidMount = function () {
        var _this = this;
        var props = this.props;
        var group = props.group;
        var isKnowledgeCenter = Object(_common_TopicUtilities__WEBPACK_IMPORTED_MODULE_9__["_isSiteKnowledgeCenter"])(this.props.pageContext);
        /* filtering out harcoded nav for Knowledge Center.
        ids comming from ..\spcx-knowledgeHubHardCodedLink\KnowledgeHubHardCodedLink.ts */
        if (!_common_KillSwitches__WEBPACK_IMPORTED_MODULE_6__["KillSwitches"].knowledgeCenterHardcodedNavLinks.isActivated() && isKnowledgeCenter) {
            var gettingStartedId_1 = _common_KillSwitches__WEBPACK_IMPORTED_MODULE_6__["KillSwitches"].revertEditNavLogic.isActivated()
                ? _common_Constants__WEBPACK_IMPORTED_MODULE_10__["GETTINGSTARTEDID"] + ''
                : _common_Constants__WEBPACK_IMPORTED_MODULE_10__["GETTINGSTARTEDID"].toString();
            var manageTopicsId_1 = _common_KillSwitches__WEBPACK_IMPORTED_MODULE_6__["KillSwitches"].revertEditNavLogic.isActivated()
                ? _common_Constants__WEBPACK_IMPORTED_MODULE_10__["MANAGETOPICSID"] + ''
                : _common_Constants__WEBPACK_IMPORTED_MODULE_10__["MANAGETOPICSID"].toString();
            group.links = group.links.filter(function (x) { return x.key !== gettingStartedId_1 && x.key !== manageTopicsId_1; });
        }
        if (!group) {
            return;
        }
        Promise.all(/*! import() | editnavchunk */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(4), __webpack_require__.e(2), __webpack_require__.e("vendors~editnavchunk~spcx-panels~spcx-syn~6ba97101"), __webpack_require__.e(5), __webpack_require__.e("vendors~editnavchunk~sp-pages-panels~spcx~63fbeced"), __webpack_require__.e(7), __webpack_require__.e("vendors~editnavchunk~sp-pages-panels~spcx-panels"), __webpack_require__.e("vendors~editnavchunk~spcx-panels"), __webpack_require__.e("vendors~editnavchunk~spcx-siteheaderstatemanager"), __webpack_require__.e("vendors~editnavchunk")]).then(__webpack_require__.bind(null, /*! @ms/odsp-shared-react/lib/containers/EditNav/index */ "v64A")).then(function (editNavContainerModule) {
            _this._editProps = {
                pageContext: _this.props.pageContext,
                group: group,
                exitEditMode: props.exitEditMode,
                updateDisplayedLinks: props.updateDisplayedLinks,
                getGroupsProvider: _this._getGroupsProvider,
                resourceLinkInfo: [
                    { keyName: 'inboxUrl', title: _components_SiteHeader_SiteHeader_resx__WEBPACK_IMPORTED_MODULE_7__["mail"] },
                    { keyName: 'calendarUrl', title: _components_SiteHeader_SiteHeader_resx__WEBPACK_IMPORTED_MODULE_7__["calendar"] },
                    { keyName: 'notebookUrl', title: _components_SiteHeader_SiteHeader_resx__WEBPACK_IMPORTED_MODULE_7__["notebook"] },
                    { keyName: 'plannerUrl', title: _components_SiteHeader_SiteHeader_resx__WEBPACK_IMPORTED_MODULE_7__["planner"] },
                    { keyName: 'teamsUrl', title: _components_SiteHeader_SiteHeader_resx__WEBPACK_IMPORTED_MODULE_7__["teams"] }
                ],
                maxLevelCount: 3
            };
            if (_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__["_SPFlight"].isEnabled(1557 /* MegaFooter */)) {
                _this._editProps.title = _this.props.title;
            }
            _this.setState({ editNavContainer: editNavContainerModule.EditNavContainer });
        });
    };
    EditNav.prototype.render = function () {
        var _a;
        if (!this.props.group || !this.state.editNavContainer) {
            return null; // tslint:disable-line:no-null-keyword
        }
        var webTemplate = Number(this.props.pageContext.webTemplate);
        var isPane = !_common_KillSwitches__WEBPACK_IMPORTED_MODULE_6__["KillSwitches"].editNavPaneAccessbilityFix.isActivated() && webTemplate === _ms_odsp_datasources_lib_interfaces_WebTemplateType__WEBPACK_IMPORTED_MODULE_4__["WebTemplateType"].group;
        var editNavClass = Object(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_3__["css"])(this.props.className, _components_SiteLeftNav_LeftNav_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].spNavEdit, (_a = {},
            _a[_components_SiteLeftNav_LeftNav_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].leftNavWidthKS] = !_common_KillSwitches__WEBPACK_IMPORTED_MODULE_6__["KillSwitches"].increaseNavWidthKS.isActivated(),
            _a));
        if (isPane) {
            return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: editNavClass }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](this.state.editNavContainer, this._editProps)));
        }
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_3__["FocusTrapZone"], { className: editNavClass }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](this.state.editNavContainer, this._editProps)));
    };
    return EditNav;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));
/* harmony default export */ __webpack_exports__["default"] = (EditNav);


/***/ })

}]);
//# sourceMappingURL=chunk.spcx-editnav_none.js.map