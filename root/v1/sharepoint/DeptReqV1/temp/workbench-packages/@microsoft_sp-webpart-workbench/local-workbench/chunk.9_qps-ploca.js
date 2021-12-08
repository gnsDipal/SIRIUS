(window["webpackJsonp_1e2cdec9_1360_4295_b73c_98d6f51866d5_0_1_0"] = window["webpackJsonp_1e2cdec9_1360_4295_b73c_98d6f51866d5_0_1_0"] || []).push([[9],{

/***/ "2aVj":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-shared-react@47.12.13_d89e40c38ccaa8bd6af6488f37cb196d/node_modules/@ms/odsp-shared-react/lib/components/SiteScriptProgressPanel/SiteDesignRunChooser.js ***!
  \*************************************************************************************************************************************************************************************************************************/
/*! exports provided: SiteDesignRunChooser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SiteDesignRunChooser", function() { return SiteDesignRunChooser; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ms_odsp_utilities_lib_string_StringHelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ms/odsp-utilities/lib/string/StringHelper */ "BY+f");
/* harmony import */ var _ms_odsp_utilities_lib_string_StringHelper__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ms_odsp_utilities_lib_string_StringHelper__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var office_ui_fabric_react_lib_Utilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! office-ui-fabric-react/lib/Utilities */ "mkpW");
/* harmony import */ var _SiteScriptProgressPanelStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SiteScriptProgressPanelStyles */ "uyU2");
/* harmony import */ var office_ui_fabric_react_lib_Icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! office-ui-fabric-react/lib/Icon */ "56LG");
/* harmony import */ var office_ui_fabric_react_lib_Icon__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(office_ui_fabric_react_lib_Icon__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _SiteScriptProgressPanel_resx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./SiteScriptProgressPanel.resx */ "GZOZ");
/* harmony import */ var _SiteScriptProgressPanel_resx__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_SiteScriptProgressPanel_resx__WEBPACK_IMPORTED_MODULE_6__);
/**
 * @Copyright (c) Microsoft Corporation.  All rights reserved.
 *
 * @file SiteDesignRunChooser.tsx
 */







var SiteDesignRunChooser = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(SiteDesignRunChooser, _super);
    function SiteDesignRunChooser() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._onRenderLabel = function (labelProps) {
            return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { id: labelProps.labelId, className: _SiteScriptProgressPanelStyles__WEBPACK_IMPORTED_MODULE_4__["styles"].accessible }, _ms_odsp_utilities_lib_string_StringHelper__WEBPACK_IMPORTED_MODULE_2__["format"](_SiteScriptProgressPanel_resx__WEBPACK_IMPORTED_MODULE_6___default.a.siteDesignRunChooserAriaLabel, _this.props.run.siteDesignTitle, _this.props.run.runDate)));
        };
        _this._onSelected = function () {
            _this.props.onSelected(_this.props.run);
        };
        return _this;
    }
    SiteDesignRunChooser.prototype.render = function () {
        var rootStyles = {};
        rootStyles[_SiteScriptProgressPanelStyles__WEBPACK_IMPORTED_MODULE_4__["styles"].runChoiceChecked] = this.props.radioButtonProps.checked;
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: Object(office_ui_fabric_react_lib_Utilities__WEBPACK_IMPORTED_MODULE_3__["css"])(_SiteScriptProgressPanelStyles__WEBPACK_IMPORTED_MODULE_4__["styles"].runChoiceRoot, rootStyles), onClick: this._onSelected },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: _SiteScriptProgressPanelStyles__WEBPACK_IMPORTED_MODULE_4__["styles"].runChoiceRadio }, this.props.renderRadioButton(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.props.radioButtonProps), { 'aria-describedby': this.props.describedById, onRenderLabel: this._onRenderLabel }))),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: _SiteScriptProgressPanelStyles__WEBPACK_IMPORTED_MODULE_4__["styles"].runChoiceText },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: _SiteScriptProgressPanelStyles__WEBPACK_IMPORTED_MODULE_4__["styles"].runChoicePrimaryText }, this.props.run.siteDesignTitle),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: _SiteScriptProgressPanelStyles__WEBPACK_IMPORTED_MODULE_4__["styles"].runChoiceSecondaryText }, _ms_odsp_utilities_lib_string_StringHelper__WEBPACK_IMPORTED_MODULE_2__["format"](_SiteScriptProgressPanel_resx__WEBPACK_IMPORTED_MODULE_6___default.a.progressPanelDateRanText, this.props.run.runDate))),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: _SiteScriptProgressPanelStyles__WEBPACK_IMPORTED_MODULE_4__["styles"].runChoiceArrow },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](office_ui_fabric_react_lib_Icon__WEBPACK_IMPORTED_MODULE_5__["Icon"], { iconName: 'ChevronRight', className: 'ms-Icon--m' }))));
    };
    return SiteDesignRunChooser;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));

//# sourceMappingURL=SiteDesignRunChooser.js.map

/***/ }),

/***/ "3WSi":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/FocusTrapZone/index.js ***!
  \*************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/office-ui-fabric-react-bundle */ "KL1q");
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
// Loading office-ui-fabric-react/./lib/components/FocusTrapZone/index.js


/***/ }),

/***/ "43iB":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-shared-react@47.12.13_d89e40c38ccaa8bd6af6488f37cb196d/node_modules/@ms/odsp-shared-react/lib/components/SiteScriptProgressPanel/SiteScriptProgressPanel.js ***!
  \****************************************************************************************************************************************************************************************************************************/
/*! exports provided: SiteScriptProgressPanel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SiteScriptProgressPanel", function() { return SiteScriptProgressPanel; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ms_odsp_utilities_lib_string_StringHelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ms/odsp-utilities/lib/string/StringHelper */ "BY+f");
/* harmony import */ var _ms_odsp_utilities_lib_string_StringHelper__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ms_odsp_utilities_lib_string_StringHelper__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ms_odsp_utilities_lib_logging_events_Engagement_event__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ms/odsp-utilities/lib/logging/events/Engagement.event */ "cDPE");
/* harmony import */ var office_ui_fabric_react_lib_Utilities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! office-ui-fabric-react/lib/Utilities */ "mkpW");
/* harmony import */ var office_ui_fabric_react_lib_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! office-ui-fabric-react/lib/Button */ "epn0");
/* harmony import */ var office_ui_fabric_react_lib_ChoiceGroup__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! office-ui-fabric-react/lib/ChoiceGroup */ "HVOw");
/* harmony import */ var office_ui_fabric_react_lib_Dropdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! office-ui-fabric-react/lib/Dropdown */ "6yAV");
/* harmony import */ var office_ui_fabric_react_lib_Image__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! office-ui-fabric-react/lib/Image */ "pw9o");
/* harmony import */ var office_ui_fabric_react_lib_Link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! office-ui-fabric-react/lib/Link */ "F3Wv");
/* harmony import */ var office_ui_fabric_react_lib_Panel__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! office-ui-fabric-react/lib/Panel */ "p6C6");
/* harmony import */ var office_ui_fabric_react_lib_ProgressIndicator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! office-ui-fabric-react/lib/ProgressIndicator */ "HmPZ");
/* harmony import */ var office_ui_fabric_react_lib_Spinner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! office-ui-fabric-react/lib/Spinner */ "fyAn");
/* harmony import */ var _ms_odsp_utilities_lib_killswitch_Killswitch__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ms/odsp-utilities/lib/killswitch/Killswitch */ "QUgr");
/* harmony import */ var _ms_odsp_datasources_lib_SiteScriptProgressDataSource__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ms/odsp-datasources/lib/SiteScriptProgressDataSource */ "u08t");
/* harmony import */ var _SiteScriptActionLabel__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./SiteScriptActionLabel */ "xdNC");
/* harmony import */ var _SiteDesignRunChooser__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./SiteDesignRunChooser */ "2aVj");
/* harmony import */ var _SiteScriptProgressPanel_resx__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./SiteScriptProgressPanel.resx */ "GZOZ");
/* harmony import */ var _SiteScriptProgressPanel_resx__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_SiteScriptProgressPanel_resx__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _SiteScriptProgressPanelStyles__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./SiteScriptProgressPanelStyles */ "uyU2");
/* harmony import */ var _SiteScriptProgressPanel_scss__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./SiteScriptProgressPanel.scss */ "L75w");
/**
 * @Copyright (c) Microsoft Corporation.  All rights reserved.
 *
 * @file SiteScriptProgressPanel.tsx
 */




















var WIDE_PANEL_WIDTH = '900px';
var SITE_DESIGN_OVERVIEW_URL = 'http://aka.ms/spsitedesigns/';
var SITE_DESIGN_OVERVIEW_URL_LOCALIZABLE = 'https://docs.microsoft.com/{0}/sharepoint/dev/declarative-customization/site-design-overview?branch=sitedesign';
/**
 * @public
 */
var SiteScriptProgressPanel = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(SiteScriptProgressPanel, _super);
    function SiteScriptProgressPanel(props) {
        var _this = _super.call(this, props) || this;
        _this._showTenantSiteDesigns = function () {
            _ms_odsp_utilities_lib_logging_events_Engagement_event__WEBPACK_IMPORTED_MODULE_3__["Engagement"].logData({ name: 'SiteScripts.ShowTenantSiteDesigns.Click' });
            _this._siteScriptProgressStateManager.showTenantSiteDesigns();
        };
        _this._hideTenantSiteDesigns = function () {
            _ms_odsp_utilities_lib_logging_events_Engagement_event__WEBPACK_IMPORTED_MODULE_3__["Engagement"].logData({ name: 'SiteScripts.HideTenantSiteDesigns.Click' });
            _this._siteScriptProgressStateManager.hideTenantSiteDesigns();
        };
        _this._renderChoiceGroupOption = function (run) {
            return {
                key: run.runId,
                text: '',
                onRenderField: function (props, render) {
                    return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_SiteDesignRunChooser__WEBPACK_IMPORTED_MODULE_16__["SiteDesignRunChooser"], { describedById: _this._runChooserDescribedById, onSelected: _this._onSiteDesignRunSelected, radioButtonProps: props, renderRadioButton: render, run: run }));
                }
            };
        };
        _this._onRadioChanged = function (ev, option) {
            _this._siteScriptProgressStateManager.showSiteDesignRun(option.key);
        };
        _this._onSiteDesignRunSelected = function (run) {
            if (run && run.runId) {
                _this._siteScriptProgressStateManager.showSiteDesignRun(run.runId);
            }
        };
        _this._applySelectedTenantSiteDesign = function () {
            _ms_odsp_utilities_lib_logging_events_Engagement_event__WEBPACK_IMPORTED_MODULE_3__["Engagement"].logData({ name: 'SiteScripts.ApplyTenantSiteDesign.Click' });
            if (_this.state.selectedTenantSiteDesign) {
                _this._siteScriptProgressStateManager.applySiteDesign(_this.state.selectedTenantSiteDesign);
            }
        };
        _this._onTenantSiteDesignSelected = function (option, index) {
            _this._siteScriptProgressStateManager.showTenantSiteDesign(option.key);
        };
        _this._convertTenantSiteDesignToDropdownOption = function (value, index) {
            return {
                key: value.id,
                text: value.title
            };
        };
        _this._dismissAndRefresh = function () {
            _ms_odsp_utilities_lib_logging_events_Engagement_event__WEBPACK_IMPORTED_MODULE_3__["Engagement"].logData({ name: 'SiteScripts.DismissAndRefreshButton.Click' });
            _this._onPanelDismissedInternal();
            window.location.reload(true /*forceReload*/);
            // In future, it would be nice if it were possible to tell if the current page is the homepage.
            // If it is, it would be better to use window.location.href = this._webServerRelativeUrl;
            // The reason is that a site script might change the homepage and this would bring the user to
            // the new homepage. However, if the user is not at the homepage when they opened
            // the panel, it would be weird to just take them there arbitrarily.
        };
        _this._onClickNavigationCloseButton = function () {
            _ms_odsp_utilities_lib_logging_events_Engagement_event__WEBPACK_IMPORTED_MODULE_3__["Engagement"].logData({ name: 'SiteScripts.ClosePanelNavigation.Click' });
            _this._onPanelDismissedInternal();
        };
        _this._onPanelDismissed = function () {
            _ms_odsp_utilities_lib_logging_events_Engagement_event__WEBPACK_IMPORTED_MODULE_3__["Engagement"].logData({ name: 'SiteScripts.ClosePanel' });
            _this._onPanelDismissedInternal();
        };
        _this._onNewDataReceived = function (newState) {
            _this.setState(newState);
        };
        _this.state = {
            stagesRetrieved: false,
            stageOutcomesKnown: 0,
            stageOutcomesKnownButIncomplete: 0
        };
        _this._siteScriptProgressStateManager = _this.props.siteScriptProgressStateManager;
        _this.state = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, _this._siteScriptProgressStateManager.getState());
        _this._runChooserDescribedById = 'SiteDesignRunChooserDescription' + Math.random().toString();
        _this._designChooserDescribedById = 'SiteDesignChooserDescription' + Math.random().toString();
        return _this;
    }
    SiteScriptProgressPanel.prototype.componentDidMount = function () {
        this._siteScriptProgressManagerKey = 'SiteScriptProgressPanel' + Math.random().toString();
        this._siteScriptProgressStateManager.registerCallback(this._siteScriptProgressManagerKey, _ms_odsp_datasources_lib_SiteScriptProgressDataSource__WEBPACK_IMPORTED_MODULE_14__["SiteScriptProgressCallbackType"].newProgressData, this._onNewDataReceived);
        this._siteScriptProgressStateManager.registerCallback(this._siteScriptProgressManagerKey, _ms_odsp_datasources_lib_SiteScriptProgressDataSource__WEBPACK_IMPORTED_MODULE_14__["SiteScriptProgressCallbackType"].newNonProgressData, this._onNewDataReceived);
        if (!this.props.firstRunPanelExperience) {
            this._siteScriptProgressStateManager.retrieveTenantSiteDesignsAndSiteDesignRuns();
        }
    };
    SiteScriptProgressPanel.prototype.componentWillUnmount = function () {
        this._siteScriptProgressStateManager.unregisterCallback(this._siteScriptProgressManagerKey, _ms_odsp_datasources_lib_SiteScriptProgressDataSource__WEBPACK_IMPORTED_MODULE_14__["SiteScriptProgressCallbackType"].newProgressData);
        this._siteScriptProgressStateManager.unregisterCallback(this._siteScriptProgressManagerKey, _ms_odsp_datasources_lib_SiteScriptProgressDataSource__WEBPACK_IMPORTED_MODULE_14__["SiteScriptProgressCallbackType"].newNonProgressData);
    };
    SiteScriptProgressPanel.prototype.render = function () {
        var panelWidth = WIDE_PANEL_WIDTH;
        var contents = undefined;
        if (this.props.isOpen) {
            contents = (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: _SiteScriptProgressPanelStyles__WEBPACK_IMPORTED_MODULE_18__["styles"].siteScriptProgressPanelRoot },
                this._renderLeftColumn(),
                this._renderRightColumn()));
        }
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](office_ui_fabric_react_lib_Panel__WEBPACK_IMPORTED_MODULE_10__["Panel"], { isOpen: this.props.isOpen, className: _SiteScriptProgressPanelStyles__WEBPACK_IMPORTED_MODULE_18__["styles"].siteScriptProgressPanel, hasCloseButton: false, isLightDismiss: true, onDismiss: this._onPanelDismissed, type: office_ui_fabric_react_lib_Panel__WEBPACK_IMPORTED_MODULE_10__["PanelType"].custom, customWidth: panelWidth }, contents));
    };
    SiteScriptProgressPanel.prototype._renderNavigation = function () {
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: _SiteScriptProgressPanelStyles__WEBPACK_IMPORTED_MODULE_18__["styles"].navigation },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](office_ui_fabric_react_lib_Button__WEBPACK_IMPORTED_MODULE_5__["IconButton"], { className: _SiteScriptProgressPanelStyles__WEBPACK_IMPORTED_MODULE_18__["styles"].xButton, onClick: this._onClickNavigationCloseButton, "data-is-visible": true, "data-is-focusable": true, iconProps: { iconName: 'Cancel' }, ariaLabel: _SiteScriptProgressPanel_resx__WEBPACK_IMPORTED_MODULE_17___default.a.progressPanelDismissButtonText })));
    };
    SiteScriptProgressPanel.prototype._renderLeftColumn = function () {
        var bodyContents;
        if (this.props.firstRunPanelExperience) {
            bodyContents = this._renderSiteDesignWorkingImage();
        }
        else if (this._shouldShowTenantSiteDesigns()) {
            bodyContents = this._renderTenantSiteDesignMetadata();
        }
        else {
            bodyContents = this._renderSiteDesignRuns();
        }
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: Object(office_ui_fabric_react_lib_Utilities__WEBPACK_IMPORTED_MODULE_4__["css"])(_SiteScriptProgressPanelStyles__WEBPACK_IMPORTED_MODULE_18__["styles"].darker, _SiteScriptProgressPanelStyles__WEBPACK_IMPORTED_MODULE_18__["styles"].column, _SiteScriptProgressPanelStyles__WEBPACK_IMPORTED_MODULE_18__["styles"].leftColumn) },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: _SiteScriptProgressPanelStyles__WEBPACK_IMPORTED_MODULE_18__["styles"].columnHeader },
                this._renderPanelTitle(),
                this._renderPanelSubtitle()),
            bodyContents,
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: Object(office_ui_fabric_react_lib_Utilities__WEBPACK_IMPORTED_MODULE_4__["css"])(_SiteScriptProgressPanelStyles__WEBPACK_IMPORTED_MODULE_18__["styles"].columnFooter) }, this.props.firstRunPanelExperience
                ? this._renderGearMenuHint()
                : this._renderTenantSiteDesignsLink())));
    };
    SiteScriptProgressPanel.prototype._renderSiteDesignWorkingImage = function () {
        if (this.props.imageUrls) {
            var imageSrc = window.devicePixelRatio < 2
                ? this.props.imageUrls.workingSiteDesign
                : this.props.imageUrls.workingSiteDesign2x;
            if (imageSrc) {
                return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](office_ui_fabric_react_lib_Image__WEBPACK_IMPORTED_MODULE_8__["Image"], { className: _SiteScriptProgressPanelStyles__WEBPACK_IMPORTED_MODULE_18__["styles"].workingImage, imageFit: office_ui_fabric_react_lib_Image__WEBPACK_IMPORTED_MODULE_8__["ImageFit"].contain, alt: '', role: 'presentation', src: imageSrc }));
            }
        }
        return undefined;
    };
    SiteScriptProgressPanel.prototype._renderTenantSiteDesignMetadata = function () {
        var tenantSiteDesign;
        if (this.state.selectedTenantSiteDesign) {
            tenantSiteDesign = this._siteScriptProgressStateManager.getTenantSiteDesign(this.state.selectedTenantSiteDesign);
            var imgSrc = void 0;
            var imgAlt = '';
            if (tenantSiteDesign.imageUrl) {
                imgSrc = tenantSiteDesign.imageUrl;
                imgAlt = tenantSiteDesign.imageAltText ? tenantSiteDesign.imageAltText : '';
            }
            else if (this.props.imageUrls) {
                if (this._siteScriptProgressStateManager.getWebTemplate() === '68') {
                    imgSrc = this.props.imageUrls.commSiteCustomizedLogo;
                }
                else {
                    imgSrc = this.props.imageUrls.teamSiteCustomizedLogo;
                }
            }
            else {
                imgSrc = '';
            }
            if (tenantSiteDesign) {
                return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: _SiteScriptProgressPanelStyles__WEBPACK_IMPORTED_MODULE_18__["styles"].columnBody },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: _SiteScriptProgressPanelStyles__WEBPACK_IMPORTED_MODULE_18__["styles"].siteDesignDescription }, tenantSiteDesign.description),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null,
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](office_ui_fabric_react_lib_Image__WEBPACK_IMPORTED_MODULE_8__["Image"], { src: imgSrc, alt: imgAlt, className: _SiteScriptProgressPanelStyles__WEBPACK_IMPORTED_MODULE_18__["styles"].siteDesignLogoImage }))));
            }
        }
        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: _SiteScriptProgressPanelStyles__WEBPACK_IMPORTED_MODULE_18__["styles"].columnBody });
    };
    SiteScriptProgressPanel.prototype._renderPanelSubtitle = function () {
        if (!this.props.firstRunPanelExperience && this._shouldShowTenantSiteDesigns()) {
            return this._renderTenantSiteDesignChooser();
        }
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: _SiteScriptProgressPanelStyles__WEBPACK_IMPORTED_MODULE_18__["styles"].progressPanelSubtitle }, this.props.firstRunPanelExperience
            ? _SiteScriptProgressPanel_resx__WEBPACK_IMPORTED_MODULE_17___default.a.progressPanelSubtitle
            : _SiteScriptProgressPanel_resx__WEBPACK_IMPORTED_MODULE_17___default.a.progressPanelReopenedSubtitle));
    };
    SiteScriptProgressPanel.prototype._renderPanelTitle = function () {
        var backIcon = undefined;
        var titleString = _SiteScriptProgressPanel_resx__WEBPACK_IMPORTED_MODULE_17___default.a.progressPanelTitle;
        if (!this.props.firstRunPanelExperience) {
            if (this.state.showingTenantSiteDesigns) {
                backIcon = (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](office_ui_fabric_react_lib_Button__WEBPACK_IMPORTED_MODULE_5__["IconButton"], { iconProps: { iconName: 'Back' }, onClick: this._hideTenantSiteDesigns, ariaLabel: _SiteScriptProgressPanel_resx__WEBPACK_IMPORTED_MODULE_17___default.a.backButtonAriaLabel }));
            }
            if (this._shouldShowTenantSiteDesigns()) {
                // This is actually a distinct case from the one above.
                // If no runs have occurred, we want to show the different title
                // but we don't want a back button.
                titleString = _SiteScriptProgressPanel_resx__WEBPACK_IMPORTED_MODULE_17___default.a.progressPanelOtherSiteDesignsTitle;
            }
            else {
                titleString = _SiteScriptProgressPanel_resx__WEBPACK_IMPORTED_MODULE_17___default.a.progressPanelReopenedTitle;
            }
        }
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: Object(office_ui_fabric_react_lib_Utilities__WEBPACK_IMPORTED_MODULE_4__["css"])(_SiteScriptProgressPanelStyles__WEBPACK_IMPORTED_MODULE_18__["styles"].progressPanelTitle, this.props.firstRunPanelExperience ? _SiteScriptProgressPanelStyles__WEBPACK_IMPORTED_MODULE_18__["styles"].bigTitle : '') },
            backIcon,
            titleString));
    };
    SiteScriptProgressPanel.prototype._shouldShowTenantSiteDesigns = function () {
        return (this.state.showingTenantSiteDesigns ||
            (this.state.siteDesignRuns && this.state.siteDesignRuns.length === 0));
    };
    SiteScriptProgressPanel.prototype._renderTenantSiteDesignsLink = function () {
        if (this._shouldShowTenantSiteDesigns()) {
            return undefined;
        }
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](office_ui_fabric_react_lib_Link__WEBPACK_IMPORTED_MODULE_9__["Link"], { className: _SiteScriptProgressPanelStyles__WEBPACK_IMPORTED_MODULE_18__["styles"].tenantSiteDesigns, onClick: this._showTenantSiteDesigns }, _SiteScriptProgressPanel_resx__WEBPACK_IMPORTED_MODULE_17___default.a.progressPanelSeeOtherDesignsLink));
    };
    SiteScriptProgressPanel.prototype._renderGearMenuHint = function () {
        return undefined;
        // Design is currently iterating on this. I was told to keep it, but not use it.
        /*let bottomText: string[] = strings.progressPanelBottomText.split("{0}");
        let boldText: string[] = strings.progressPanelBottomTextBold.split("{0}");
    
        if (bottomText.length !== 2 || boldText.length !== 2) {
          return undefined;
        }
    
        return (
          <div>
            {
              bottomText[0]
            }
            <span className={ styles.panelBottomTextBold } >
              {
                boldText[0]
              }
              <span className={ styles.gear } >
                <Icon iconName={ 'Settings' } />
              </span>
              {
                boldText[1]
              }
            </span>
            {
              bottomText[1]
            }
          </div>
        );*/
    };
    SiteScriptProgressPanel.prototype._renderSiteDesignRuns = function () {
        var siteDesignRuns = this.state.siteDesignRuns;
        if (siteDesignRuns && siteDesignRuns.length) {
            return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: Object(office_ui_fabric_react_lib_Utilities__WEBPACK_IMPORTED_MODULE_4__["css"])(_SiteScriptProgressPanelStyles__WEBPACK_IMPORTED_MODULE_18__["styles"].columnBody, _SiteScriptProgressPanelStyles__WEBPACK_IMPORTED_MODULE_18__["styles"].scrollable) },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](office_ui_fabric_react_lib_ChoiceGroup__WEBPACK_IMPORTED_MODULE_6__["ChoiceGroup"], { selectedKey: this.state.displayedRunKey, onChange: this._onRadioChanged, options: siteDesignRuns.map(this._renderChoiceGroupOption) }),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { id: this._runChooserDescribedById, className: _SiteScriptProgressPanelStyles__WEBPACK_IMPORTED_MODULE_18__["styles"].accessible }, _SiteScriptProgressPanel_resx__WEBPACK_IMPORTED_MODULE_17___default.a.runChooserDescription)));
        }
        else {
            return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: Object(office_ui_fabric_react_lib_Utilities__WEBPACK_IMPORTED_MODULE_4__["css"])(_SiteScriptProgressPanelStyles__WEBPACK_IMPORTED_MODULE_18__["styles"].columnBody, _SiteScriptProgressPanelStyles__WEBPACK_IMPORTED_MODULE_18__["styles"].scrollable) });
        }
    };
    SiteScriptProgressPanel.prototype._renderTenantSiteDesignChooser = function () {
        var tenantSiteDesigns = this.state.tenantSiteDesigns;
        if (tenantSiteDesigns) {
            var dropdownOptions = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])([
                {
                    key: '',
                    text: _SiteScriptProgressPanel_resx__WEBPACK_IMPORTED_MODULE_17___default.a.siteDesignChooserNone
                }
            ], tenantSiteDesigns.map(this._convertTenantSiteDesignToDropdownOption));
            return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null,
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: _SiteScriptProgressPanelStyles__WEBPACK_IMPORTED_MODULE_18__["styles"].siteDesignChooserTitle }, _SiteScriptProgressPanel_resx__WEBPACK_IMPORTED_MODULE_17___default.a.siteDesignChooserTitle),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](office_ui_fabric_react_lib_Dropdown__WEBPACK_IMPORTED_MODULE_7__["Dropdown"], { placeHolder: _SiteScriptProgressPanel_resx__WEBPACK_IMPORTED_MODULE_17___default.a.siteDesignChooserNone, onChanged: this._onTenantSiteDesignSelected, options: dropdownOptions, selectedKey: this.state.selectedTenantSiteDesign }),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: _SiteScriptProgressPanelStyles__WEBPACK_IMPORTED_MODULE_18__["styles"].accessible, id: this._designChooserDescribedById }, _SiteScriptProgressPanel_resx__WEBPACK_IMPORTED_MODULE_17___default.a.tenantSiteDesignChooserDescription)));
        }
        else {
            return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null,
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](office_ui_fabric_react_lib_Spinner__WEBPACK_IMPORTED_MODULE_12__["Spinner"], null)));
        }
    };
    SiteScriptProgressPanel.prototype._renderRightColumn = function () {
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: Object(office_ui_fabric_react_lib_Utilities__WEBPACK_IMPORTED_MODULE_4__["css"])(_SiteScriptProgressPanelStyles__WEBPACK_IMPORTED_MODULE_18__["styles"].column, _SiteScriptProgressPanelStyles__WEBPACK_IMPORTED_MODULE_18__["styles"].rightColumn) },
            this._renderNavigation(),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: _SiteScriptProgressPanelStyles__WEBPACK_IMPORTED_MODULE_18__["styles"].columnInternal },
                this._renderRightColumnHeader(),
                this._renderRightColumnBody(),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: _SiteScriptProgressPanelStyles__WEBPACK_IMPORTED_MODULE_18__["styles"].columnFooter }, this._renderDismissButtonIfNecessary()))));
    };
    SiteScriptProgressPanel.prototype._renderRightColumnHeader = function () {
        if (this._shouldShowTenantSiteDesigns()) {
            if (this.state.selectedTenantSiteDesign) {
                if (this.state.selectedTenantSiteDesignSchema) {
                    return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: _SiteScriptProgressPanelStyles__WEBPACK_IMPORTED_MODULE_18__["styles"].columnHeader }, this._renderTenantSiteDesignTitle(this.state.selectedTenantSiteDesignSchema.siteDesignTitle)));
                } // else, fall through and render nothing
            } // else, fall through and render nothing
        }
        else {
            var data = this._siteScriptProgressStateManager.getData(this.state.displayedRunKey);
            if (data && this.state.stagesRetrieved && this.state.age !== _ms_odsp_datasources_lib_SiteScriptProgressDataSource__WEBPACK_IMPORTED_MODULE_14__["SiteScriptRunAge"].unknown) {
                return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: _SiteScriptProgressPanelStyles__WEBPACK_IMPORTED_MODULE_18__["styles"].columnHeader }, this._renderProgressIndicator(data));
            }
        }
        return undefined;
    };
    SiteScriptProgressPanel.prototype._renderRightColumnBody = function () {
        if (this._shouldShowTenantSiteDesigns()) {
            if (this.state.selectedTenantSiteDesign) {
                if (this.state.selectedTenantSiteDesignSchema) {
                    return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: Object(office_ui_fabric_react_lib_Utilities__WEBPACK_IMPORTED_MODULE_4__["css"])(_SiteScriptProgressPanelStyles__WEBPACK_IMPORTED_MODULE_18__["styles"].columnBody, _SiteScriptProgressPanelStyles__WEBPACK_IMPORTED_MODULE_18__["styles"].scrollable, _SiteScriptProgressPanelStyles__WEBPACK_IMPORTED_MODULE_18__["styles"].schemaArea) }, this._renderPanelContents(this.state.selectedTenantSiteDesignSchema, undefined /*stageResultData*/, true /*demoMode*/)));
                } // else, fall through and render the empty state
            }
            else {
                var siteDesignOverviewLink = void 0;
                if (!_ms_odsp_utilities_lib_killswitch_Killswitch__WEBPACK_IMPORTED_MODULE_13__["Killswitch"].isActivated('c699dc3e-812b-49c7-9845-ba97f7d064e8', '06/27/2019', 'SITE_DESIGN_OVERVIEW_URL_Localizable')) {
                    siteDesignOverviewLink = _ms_odsp_utilities_lib_string_StringHelper__WEBPACK_IMPORTED_MODULE_2__["format"](SITE_DESIGN_OVERVIEW_URL_LOCALIZABLE, this.props.pageContext.currentUICultureName);
                }
                else {
                    siteDesignOverviewLink = SITE_DESIGN_OVERVIEW_URL;
                }
                return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: Object(office_ui_fabric_react_lib_Utilities__WEBPACK_IMPORTED_MODULE_4__["css"])(_SiteScriptProgressPanelStyles__WEBPACK_IMPORTED_MODULE_18__["styles"].columnBody) },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: _SiteScriptProgressPanelStyles__WEBPACK_IMPORTED_MODULE_18__["styles"].explainerTitle }, _SiteScriptProgressPanel_resx__WEBPACK_IMPORTED_MODULE_17___default.a.progressPanelExplainerTitle),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null, _SiteScriptProgressPanel_resx__WEBPACK_IMPORTED_MODULE_17___default.a.progressPanelExplainerText),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: _SiteScriptProgressPanelStyles__WEBPACK_IMPORTED_MODULE_18__["styles"].explainerLink },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](office_ui_fabric_react_lib_Link__WEBPACK_IMPORTED_MODULE_9__["Link"], { href: siteDesignOverviewLink, target: '_blank' }, _SiteScriptProgressPanel_resx__WEBPACK_IMPORTED_MODULE_17___default.a.progressPanelExplainerLink))));
            }
        }
        else {
            var data = this._siteScriptProgressStateManager.getData(this.state.displayedRunKey);
            if (data && this.state.stagesRetrieved && this.state.age !== _ms_odsp_datasources_lib_SiteScriptProgressDataSource__WEBPACK_IMPORTED_MODULE_14__["SiteScriptRunAge"].unknown) {
                return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: Object(office_ui_fabric_react_lib_Utilities__WEBPACK_IMPORTED_MODULE_4__["css"])(_SiteScriptProgressPanelStyles__WEBPACK_IMPORTED_MODULE_18__["styles"].columnBody, _SiteScriptProgressPanelStyles__WEBPACK_IMPORTED_MODULE_18__["styles"].scrollable, _SiteScriptProgressPanelStyles__WEBPACK_IMPORTED_MODULE_18__["styles"].schemaArea) }, this._renderPanelContents(data.siteScriptData, data.stageResultData, false /*demoMode*/)));
            }
        }
        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: _SiteScriptProgressPanelStyles__WEBPACK_IMPORTED_MODULE_18__["styles"].columnBody }, this._renderEmptyState());
    };
    SiteScriptProgressPanel.prototype._renderEmptyState = function () {
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null,
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](office_ui_fabric_react_lib_Spinner__WEBPACK_IMPORTED_MODULE_12__["Spinner"], { label: _SiteScriptProgressPanel_resx__WEBPACK_IMPORTED_MODULE_17___default.a.emptyStateText })));
    };
    SiteScriptProgressPanel.prototype._renderProgressIndicator = function (data) {
        if (this.state.age === _ms_odsp_datasources_lib_SiteScriptProgressDataSource__WEBPACK_IMPORTED_MODULE_14__["SiteScriptRunAge"].old) {
            var runData = this.props.siteScriptProgressStateManager.getSiteDesignRun(this.state.displayedRunKey);
            if (runData) {
                return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: _SiteScriptProgressPanelStyles__WEBPACK_IMPORTED_MODULE_18__["styles"].progressIndicatorContainer },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: _SiteScriptProgressPanelStyles__WEBPACK_IMPORTED_MODULE_18__["styles"].noProgressIndicator }, data.siteScriptData.siteDesignTitle),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: _SiteScriptProgressPanelStyles__WEBPACK_IMPORTED_MODULE_18__["styles"].siteScriptProgressSubtext }, _ms_odsp_utilities_lib_string_StringHelper__WEBPACK_IMPORTED_MODULE_2__["format"](_SiteScriptProgressPanel_resx__WEBPACK_IMPORTED_MODULE_17___default.a.progressPanelVersionAndDateRanText, runData.version, runData.runDate))));
            }
        }
        var longRunningWarningArea = undefined;
        if (!this._siteScriptProgressStateManager.isRunComplete(this.state.displayedRunKey) &&
            !this.props.firstRunPanelExperience) {
            longRunningWarningArea = (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: _SiteScriptProgressPanelStyles__WEBPACK_IMPORTED_MODULE_18__["styles"].siteScriptLongRunningText }, _SiteScriptProgressPanel_resx__WEBPACK_IMPORTED_MODULE_17___default.a.longRunningSiteDesignText));
        }
        var completionRatio = this._siteScriptProgressStateManager.getCompletionRatio(this.state.displayedRunKey);
        var completionPercentage = this._getCompletionPercentage(completionRatio);
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: _SiteScriptProgressPanelStyles__WEBPACK_IMPORTED_MODULE_18__["styles"].progressIndicatorContainer },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](office_ui_fabric_react_lib_ProgressIndicator__WEBPACK_IMPORTED_MODULE_11__["ProgressIndicator"], { label: data.siteScriptData.siteDesignTitle, percentComplete: completionRatio }),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", { className: _SiteScriptProgressPanelStyles__WEBPACK_IMPORTED_MODULE_18__["styles"].siteScriptProgressSubtext, role: 'alert' }, completionPercentage),
            longRunningWarningArea));
    };
    SiteScriptProgressPanel.prototype._renderTenantSiteDesignTitle = function (title) {
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: _SiteScriptProgressPanelStyles__WEBPACK_IMPORTED_MODULE_18__["styles"].progressIndicatorContainer },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: _SiteScriptProgressPanelStyles__WEBPACK_IMPORTED_MODULE_18__["styles"].tenantSiteDesignTitle }, title),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](office_ui_fabric_react_lib_Button__WEBPACK_IMPORTED_MODULE_5__["PrimaryButton"], { ariaLabel: _SiteScriptProgressPanel_resx__WEBPACK_IMPORTED_MODULE_17___default.a.applySiteDesignButtonText, disabled: false, onClick: this._applySelectedTenantSiteDesign, text: _SiteScriptProgressPanel_resx__WEBPACK_IMPORTED_MODULE_17___default.a.applySiteDesignButtonText })));
    };
    SiteScriptProgressPanel.prototype._renderPanelContents = function (siteScriptData, stageResultData, demoMode) {
        var contents = [];
        var stageIndex = 0;
        if (siteScriptData && siteScriptData.siteScripts) {
            for (var scriptIndex = 0; scriptIndex < siteScriptData.siteScripts.length; scriptIndex++) {
                for (var actionIndex = 0; actionIndex < siteScriptData.siteScripts[scriptIndex].actions.length; actionIndex++) {
                    contents.push(react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_SiteScriptActionLabel__WEBPACK_IMPORTED_MODULE_15__["SiteScriptActionLabel"], { key: 'scriptAction_' + scriptIndex.toString() + '_' + actionIndex.toString(), stageNames: siteScriptData.siteScripts[scriptIndex].actions[actionIndex].stages, stageResultData: stageResultData, stageOutcomesKnown: this.state.stageOutcomesKnown, stageStartIndex: stageIndex, demoMode: demoMode }));
                    stageIndex += siteScriptData.siteScripts[scriptIndex].actions[actionIndex].stages.length;
                }
            }
        }
        return contents;
    };
    SiteScriptProgressPanel.prototype._renderDismissButtonIfNecessary = function () {
        if (this.state.hasARunCompleted ||
            (this.props.firstRunPanelExperience &&
                this._siteScriptProgressStateManager.isRunComplete(this.state.displayedRunKey))) {
            return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](office_ui_fabric_react_lib_Button__WEBPACK_IMPORTED_MODULE_5__["PrimaryButton"], { ariaLabel: _SiteScriptProgressPanel_resx__WEBPACK_IMPORTED_MODULE_17___default.a.progressPanelDismissAndRefreshButtonText, "data-automationid": 'SiteScriptProgressCloseButton', disabled: false, onClick: this._dismissAndRefresh, text: _SiteScriptProgressPanel_resx__WEBPACK_IMPORTED_MODULE_17___default.a.progressPanelDismissAndRefreshButtonText }));
        }
        else {
            return undefined;
        }
    };
    SiteScriptProgressPanel.prototype._onPanelDismissedInternal = function () {
        if (this.props.onDismissed) {
            this.props.onDismissed();
        }
        this._siteScriptProgressStateManager.hideTenantSiteDesigns();
    };
    SiteScriptProgressPanel.prototype._getCompletionPercentage = function (completionRatio) {
        if (completionRatio >= 1) {
            return _SiteScriptProgressPanel_resx__WEBPACK_IMPORTED_MODULE_17___default.a.progressPanelCompleteStatus;
        }
        else if (completionRatio <= 0) {
            completionRatio = 0;
        }
        else {
            completionRatio *= 100;
            completionRatio = Math.floor(completionRatio);
        }
        return _ms_odsp_utilities_lib_string_StringHelper__WEBPACK_IMPORTED_MODULE_2__["format"](_SiteScriptProgressPanel_resx__WEBPACK_IMPORTED_MODULE_17___default.a.progressPanelPercentComplete, completionRatio);
    };
    return SiteScriptProgressPanel;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));

//# sourceMappingURL=SiteScriptProgressPanel.js.map

/***/ }),

/***/ "6kzE":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/ProgressIndicator/ProgressIndicator.base.js ***!
  \**********************************************************************************************************************************************************************************************************************/
/*! exports provided: ProgressIndicatorBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressIndicatorBase", function() { return ProgressIndicatorBase; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Utilities */ "mkpW");



var getClassNames = Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["classNamesFunction"])();
// if the percentComplete is near 0, don't animate it.
// This prevents animations on reset to 0 scenarios
var ZERO_THRESHOLD = 0.01;
/**
 * ProgressIndicator with no default styles.
 * [Use the `styles` API to add your own styles.](https://github.com/microsoft/fluentui/wiki/Styling)
 */
var ProgressIndicatorBase = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ProgressIndicatorBase, _super);
    function ProgressIndicatorBase() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._onRenderProgress = function (props) {
            var _a = _this.props, ariaValueText = _a.ariaValueText, barHeight = _a.barHeight, className = _a.className, styles = _a.styles, theme = _a.theme;
            var percentComplete = typeof _this.props.percentComplete === 'number'
                ? Math.min(100, Math.max(0, _this.props.percentComplete * 100))
                : undefined;
            var classNames = getClassNames(styles, {
                theme: theme,
                className: className,
                barHeight: barHeight,
                indeterminate: percentComplete === undefined ? true : false,
            });
            var progressBarStyles = {
                width: percentComplete !== undefined ? percentComplete + '%' : undefined,
                transition: percentComplete !== undefined && percentComplete < ZERO_THRESHOLD ? 'none' : undefined,
            };
            var ariaValueMin = percentComplete !== undefined ? 0 : undefined;
            var ariaValueMax = percentComplete !== undefined ? 100 : undefined;
            var ariaValueNow = percentComplete !== undefined ? Math.floor(percentComplete) : undefined;
            return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: classNames.itemProgress },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: classNames.progressTrack }),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: classNames.progressBar, style: progressBarStyles, role: "progressbar", "aria-valuemin": ariaValueMin, "aria-valuemax": ariaValueMax, "aria-valuenow": ariaValueNow, "aria-valuetext": ariaValueText })));
        };
        return _this;
    }
    ProgressIndicatorBase.prototype.render = function () {
        var _a = this.props, barHeight = _a.barHeight, className = _a.className, 
        // eslint-disable-next-line deprecation/deprecation
        _b = _a.label, 
        // eslint-disable-next-line deprecation/deprecation
        label = _b === void 0 ? this.props.title : _b, // Fall back to deprecated value.
        description = _a.description, styles = _a.styles, theme = _a.theme, progressHidden = _a.progressHidden, _c = _a.onRenderProgress, onRenderProgress = _c === void 0 ? this._onRenderProgress : _c;
        var percentComplete = typeof this.props.percentComplete === 'number'
            ? Math.min(100, Math.max(0, this.props.percentComplete * 100))
            : undefined;
        var classNames = getClassNames(styles, {
            theme: theme,
            className: className,
            barHeight: barHeight,
            indeterminate: percentComplete === undefined ? true : false,
        });
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: classNames.root },
            label ? react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: classNames.itemName }, label) : null,
            !progressHidden
                ? onRenderProgress(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.props), { percentComplete: percentComplete }), this._onRenderProgress)
                : null,
            description ? react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: classNames.itemDescription }, description) : null));
    };
    ProgressIndicatorBase.defaultProps = {
        label: '',
        description: '',
        width: 180,
    };
    return ProgressIndicatorBase;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));

//# sourceMappingURL=ProgressIndicator.base.js.map

/***/ }),

/***/ "GZOZ":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-shared-react@47.12.13_d89e40c38ccaa8bd6af6488f37cb196d/node_modules/@ms/odsp-shared-react/lib/components/SiteScriptProgressPanel/SiteScriptProgressPanel.resx.js ***!
  \*********************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var strings = {"progressPanelTitle":"Ĝēţţĩńĝ à ƒēŵ ţĥĩńĝś ŕēàďŷ","progressPanelReopenedTitle":"Śĩţē ďēśĩĝńś","progressPanelOtherSiteDesignsTitle":"Àvàĩĺàƀĺē śĩţē ďēśĩĝńś","progressPanelReopenedSubtitle":"Ţĥē ƒōĺĺōŵĩńĝ śĩţē ďēśĩĝńś ĥàvē ƀēēń àƥƥĺĩēď ţō ŷōũŕ śĩţē.","progressPanelSubtitle":"Ŵē\u0027ŕē ũƥďàţĩńĝ ŷōũŕ śĩţē ƀàśēď ōń ţĥē ďēśĩĝń ŷōũ ćĥōśē.","progressPanelBottomText":"Ƒōŕ mōŕē ĩńƒōŕmàţĩōń àƀōũţ ţĥĩś śĩţē ďēśĩĝń, ćĺĩćķ {0}","progressPanelBottomTextBold":"Śĩţē śēţţĩńĝś {0} > Śĩţē ďēśĩĝń.","progressPanelExplainerTitle":"Ŵĥàţ ĩś à śĩţē ďēśĩĝń?","progressPanelExplainerText":"Śĩţē ďēśĩĝńś àŕē ĺĩķē à ţēmƥĺàţē. Ţĥēŷ ćàń ƀē àƥƥĺĩēď ŵĥēń à śĩţē ĩś ćŕēàţēď ōŕ àƒţēŕŵàŕďś ţō àƥƥĺŷ à ćōńśĩśţēńţ śēţ ōƒ àćţĩōńś ōŕ ćōńƒĩĝũŕàţĩōńś – śũćĥ àś śēţţĩńĝ à ţĥēmē, àďďĩńĝ ĺĩńķś ţō ţĥē śĩţē ńàvĩĝàţĩōń, ōŕ ćŕēàţĩńĝ à ĺĩśţ ŵĩţĥ à śƥēćĩƒĩć śēţ ōƒ ćōĺũmńś àńď śēţţĩńĝś. Śĩţē ďēśĩĝńś àŕē ţŷƥĩćàĺĺŷ màďē àvàĩĺàƀĺē ƀŷ ŷōũŕ ŚĥàŕēƤōĩńţ àďmĩńĩśţŕàţōŕ. Ţō ĺēàŕń mōŕē àƀōũţ ŵĥàţ ţĥēŷ ćàń ďō àńď ĥōŵ ţō ćŕēàţē àńď ƥũƀĺĩśĥ ţĥēm, ćĥēćķ ōũţ ţĥē ĺĩńķ ƀēĺōŵ.","progressPanelExplainerLink":"Ĺēàŕń mōŕē àƀōũţ śĩţē ďēśĩĝńś","progressPanelSeeOtherDesignsLink":"Àvàĩĺàƀĺē śĩţē ďēśĩĝńś","progressPanelRefreshButtonText":"Ŕēƒŕēśĥ","progressPanelDoneButtonText":"Ďōńē","progressPanelDateRanText":"Àƥƥĺĩēď ōń {0}","progressPanelVersionAndDateRanText":"Vēŕśĩōń {0} ŵàś àƥƥĺĩēď ōń {1}","progressPanelNewSiteDesignVersionAvailable":"Ńēŵ vēŕśĩōń ĩś àvàĩĺàƀĺē!","emptyStateText":"Ĩńĩţĩàĺĩźĩńĝ...","siteDesignChooserTitle":"Ćĥōōśē à śĩţē ďēśĩĝń","siteDesignChooserNone":"Ńōńē","applySiteDesignButtonText":"Àƥƥĺŷ ţō śĩţē","noSiteDesignsRunText":"Ńō śĩţē ďēśĩĝńś ĥàvē ƀēēń ŕũń.","defaultFailureOutcomeText":"Àćţĩōń ƒàĩĺēď","progressPanelCompleteStatus":"Ćōmƥĺēţē","progressPanelPercentComplete":"{0}%","progressPanelDismissButtonText":"Ćĺōśē","progressPanelDismissAndRefreshButtonText":"Vĩēŵ ũƥďàţēď śĩţē","actionCompleteAriaLabel":"Ćōmƥĺēţēď àćţĩōń: {0}","actionErrorAriaLabel":"Àćţĩōń ƒàĩĺēď: {0}","actionIncompleteAriaLabel":"Àćţĩōń ĩńćōmƥĺēţē: {0}","backButtonAriaLabel":"ßàćķ","longRunningSiteDesignText":"Ŵē\u0027ŕē ũƥďàţĩńĝ ŷōũŕ śĩţē ƀàśēď ōń ţĥē ďēśĩĝń ŷōũ ćĥōśē. Ţĥĩś màŷ ţàķē à ƒēŵ mōmēńţś.","siteDesignRunChooserAriaLabel":"{0}. Àƥƥĺĩēď ōń {1}.","runChooserDescription":"Ţĥē śēĺēćţēď ŕũń ĩś ďĩśƥĺàŷēď àƒţēŕ ţĥĩś ćōńţŕōĺ.","tenantSiteDesignChooserDescription":"Ţĥē śēĺēćţēď ďēśĩĝń ĩś ďĩśƥĺàŷēď àƒţēŕ ţĥĩś ćōńţŕōĺ."};
strings.default = strings;
module.exports = strings;

/***/ }),

/***/ "HmPZ":
/*!************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/ProgressIndicator.js ***!
  \************************************************************************************************************************************************************************************/
/*! exports provided: ProgressIndicator, ProgressIndicatorBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_ProgressIndicator_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/ProgressIndicator/index */ "gyPE");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProgressIndicator", function() { return _components_ProgressIndicator_index__WEBPACK_IMPORTED_MODULE_0__["ProgressIndicator"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProgressIndicatorBase", function() { return _components_ProgressIndicator_index__WEBPACK_IMPORTED_MODULE_0__["ProgressIndicatorBase"]; });


//# sourceMappingURL=ProgressIndicator.js.map

/***/ }),

/***/ "L75w":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-shared-react@47.12.13_d89e40c38ccaa8bd6af6488f37cb196d/node_modules/@ms/odsp-shared-react/lib/components/SiteScriptProgressPanel/SiteScriptProgressPanel.scss.js ***!
  \*********************************************************************************************************************************************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _microsoft_load_themed_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/load-themed-styles */ "jOlS");
/* harmony import */ var _microsoft_load_themed_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_load_themed_styles__WEBPACK_IMPORTED_MODULE_0__);
/* tslint:disable */

Object(_microsoft_load_themed_styles__WEBPACK_IMPORTED_MODULE_0__["loadStyles"])([{ "rawString": ".ms-siteScriptProgress-accessible{position:absolute;top:-9001px;left:-9001px;height:1px;width:1px}.ms-siteScriptProgress-panel .ms-Panel-navigation{display:none}.ms-siteScriptProgress-panel .ms-Panel-scrollableContent{height:100%}html[dir='ltr'] .ms-siteScriptProgress-schemaArea{padding-right:20px}html[dir='rtl'] .ms-siteScriptProgress-schemaArea{padding-left:20px}.ms-siteScriptProgress-siteDesignLogoImage img{max-width:370px}.ms-siteScriptProgress-workingImage{margin-top:64px;max-height:227px;-webkit-box-flex:1;-ms-flex:1 1;flex:1 1}.ms-siteScriptProgress-darker{background-color:" }, { "theme": "neutralLighter", "defaultValue": "#f3f2f1" }, { "rawString": "}.ms-siteScriptProgress-xButton{width:40px;height:40px}html[dir='ltr'] .ms-siteScriptProgress-xButton{float:right}html[dir='rtl'] .ms-siteScriptProgress-xButton{float:left}.ms-siteScriptProgress-navigation{-webkit-box-flex:0;-ms-flex:0 0 40px;flex:0 0 40px;height:40px;padding-bottom:32px}.ms-siteScriptProgress-siteDesignDescription{padding:10px 0 20px}.ms-siteScriptProgress-explainerTitle{font-weight:600;padding:0 0 10px}.ms-siteScriptProgress-explainerLink{padding:10px 0 0}.ms-siteScriptProgress-runChoiceChecked{background:" }, { "theme": "neutralQuaternaryAlt", "defaultValue": "#e1dfdd" }, { "rawString": "}.ms-siteScriptProgress-runChoiceChecked .ms-siteScriptProgress-runChoiceArrow{visibility:visible}.ms-ChoiceField:hover .ms-siteScriptProgress-runChoiceRoot{background:" }, { "theme": "neutralLight", "defaultValue": "#edebe9" }, { "rawString": "}.ms-ChoiceField:hover .ms-siteScriptProgress-runChoiceRoot.ms-siteScriptProgress-runChoiceChecked{background:" }, { "theme": "neutralQuaternaryAlt", "defaultValue": "#e1dfdd" }, { "rawString": "}.ms-ChoiceField:hover .ms-siteScriptProgress-runChoiceRoot .ms-siteScriptProgress-runChoiceArrow{visibility:visible}.ms-siteScriptProgress-runChoiceRoot{display:-webkit-box;display:-ms-flexbox;display:flex;width:100%;border-bottom:1px solid " }, { "theme": "neutralQuaternaryAlt", "defaultValue": "#e1dfdd" }, { "rawString": ";padding:16px 0;cursor:pointer}.ms-siteScriptProgress-runChoiceRadio{-webkit-box-flex:0;-ms-flex:0 0 auto;flex:0 0 auto;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;visibility:hidden}html[dir='ltr'] .ms-siteScriptProgress-runChoiceRadio{padding-right:5px}html[dir='rtl'] .ms-siteScriptProgress-runChoiceRadio{padding-left:5px}html[dir='ltr'] .ms-siteScriptProgress-runChoiceRadio{padding-left:25px}html[dir='rtl'] .ms-siteScriptProgress-runChoiceRadio{padding-right:25px}.ms-siteScriptProgress-runChoiceText{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-flex:1;-ms-flex:1 0 auto;flex:1 0 auto}.ms-siteScriptProgress-runChoicePrimaryText{-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;font-weight:600;padding:0 0 2px 0}.ms-siteScriptProgress-runChoiceSecondaryText{-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto}.ms-siteScriptProgress-runChoiceArrow{-webkit-box-flex:0;-ms-flex:0 0 auto;flex:0 0 auto;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;visibility:hidden}html[dir='ltr'] .ms-siteScriptProgress-runChoiceArrow{padding-right:20px}html[dir='rtl'] .ms-siteScriptProgress-runChoiceArrow{padding-left:20px}.ms-siteScriptProgress-columnHeader{-webkit-box-flex:0;-ms-flex:0 0 auto;flex:0 0 auto}.ms-siteScriptProgress-columnBody{-webkit-box-flex:1;-ms-flex:1 1 0px;flex:1 1 0;margin:0 0 32px}.ms-siteScriptProgress-scrollable{overflow-y:auto}.ms-siteScriptProgress-columnFooter{-webkit-box-flex:0;-ms-flex:0 0 auto;flex:0 0 auto}.ms-siteScriptProgress-leftColumn .ms-siteScriptProgress-columnFooter{padding:0 0 60px}.ms-siteScriptProgress-leftColumn .ms-ChoiceField-wrapper{width:100%}.ms-siteScriptProgress-leftColumn .ms-ChoiceField{margin:0}.ms-siteScriptProgress-columnInternal{width:370px;-webkit-box-flex:1;-ms-flex:1 1;flex:1 1;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}[dir='ltr'] .ms-siteScriptProgress-columnInternal{padding-right:40px}[dir='rtl'] .ms-siteScriptProgress-columnInternal{padding-left:40px}.ms-siteScriptProgress-rightColumn .ms-siteScriptProgress-columnFooter{padding:20px 0;border-top:1px solid " }, { "theme": "neutralLight", "defaultValue": "#edebe9" }, { "rawString": "}.ms-siteScriptProgress-tenantSiteDesignsLink{color:" }, { "theme": "themePrimary", "defaultValue": "#0078d4" }, { "rawString": ";font-size:" }, { "theme": "mediumFontSize", "defaultValue": "14px" }, { "rawString": ";font-weight:400}.ms-siteScriptProgress-panelBottomTextBold{font-weight:800}.ms-siteScriptProgress-panelRoot{display:-webkit-box;display:-ms-flexbox;display:flex;height:100%}.ms-siteScriptProgress-column{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;padding:72px 40px 0;-webkit-box-flex:1;-ms-flex:1 1;flex:1 1}.ms-siteScriptProgress-column.ms-siteScriptProgress-rightColumn{padding-top:0px}[dir='ltr'] .ms-siteScriptProgress-column.ms-siteScriptProgress-rightColumn{padding-right:0px}[dir='rtl'] .ms-siteScriptProgress-column.ms-siteScriptProgress-rightColumn{padding-left:0px}.ms-siteScriptProgress-noProgressIndicator{margin:0 0 21px;font-weight:600}.ms-siteScriptProgress-tenantSiteDesignTitle{margin:0 0 10px;font-weight:600}.ms-siteScriptProgress-panel .ms-Panel-contentInner{height:100%}.ms-siteScriptProgress-panel.ms-siteScriptProgress-panel{margin-top:50px}[dir='ltr'] .ms-siteScriptProgress-panel.ms-siteScriptProgress-panel .ms-Panel-main{left:auto}[dir='rtl'] .ms-siteScriptProgress-panel.ms-siteScriptProgress-panel .ms-Panel-main{right:auto}.ms-siteScriptProgress-panel.ms-siteScriptProgress-panel .ms-Panel-content{height:100%;padding:0}.ms-siteScriptProgress-emptyStageContainer{margin:auto}.ms-siteScriptProgress-errorIcon,.ms-siteScriptProgress-errorText{color:" }, { "theme": "errorText", "defaultValue": "#a4262c" }, { "rawString": "}.ms-siteScriptProgress-inProgressSpinner{vertical-align:middle;display:inline-block}[dir='ltr'] .ms-siteScriptProgress-inProgressSpinner{margin-right:8px}[dir='rtl'] .ms-siteScriptProgress-inProgressSpinner{margin-left:8px}.ms-siteScriptProgress-actionIcon{-ms-flex-negative:0;flex-shrink:0}[dir='ltr'] .ms-siteScriptProgress-actionIcon{margin-right:8px}[dir='rtl'] .ms-siteScriptProgress-actionIcon{margin-left:8px}.ms-siteScriptProgress-successIcon{color:" }, { "theme": "themePrimary", "defaultValue": "#0078d4" }, { "rawString": "}.ms-siteScriptProgress-gear{position:relative;top:3px}.ms-siteScriptProgress-activeActionTitle{color:" }, { "theme": "bodyText", "defaultValue": "#323130" }, { "rawString": "}.ms-siteScriptProgress-actionIcon,.ms-siteScriptProgress-errorIcon{font-size:16px;line-height:16px}.ms-siteScriptProgress-errorText{font-size:" }, { "theme": "smallFontSize", "defaultValue": "12px" }, { "rawString": ";font-weight:400;margin-top:4px}[dir='ltr'] .ms-siteScriptProgress-errorText{margin-left:24px}[dir='rtl'] .ms-siteScriptProgress-errorText{margin-right:24px}.ms-siteScriptProgress-actionTitle{font-size:" }, { "theme": "mediumFontSize", "defaultValue": "14px" }, { "rawString": ";font-weight:400;-ms-flex-negative:1;flex-shrink:1;-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;-ms-flex-preferred-size:0;flex-basis:0;min-width:0px;overflow-wrap:break-word;word-wrap:break-word;line-height:16px}[dir='ltr'] .ms-siteScriptProgress-actionTitleNoIcon{margin-left:24px}[dir='rtl'] .ms-siteScriptProgress-actionTitleNoIcon{margin-right:24px}.ms-siteScriptProgress-incompleteIcon{color:" }, { "theme": "neutralQuaternary", "defaultValue": "#d2d0ce" }, { "rawString": "}.ms-siteScriptProgress-inactiveActionTitle{color:" }, { "theme": "disabledText", "defaultValue": "#a19f9d" }, { "rawString": "}.ms-siteScriptProgress-stageTitle{font-size:" }, { "theme": "xSmallFontSize", "defaultValue": "10px" }, { "rawString": ";font-weight:400}[dir='ltr'] .ms-siteScriptProgress-stageTitle{margin-left:24px}[dir='rtl'] .ms-siteScriptProgress-stageTitle{margin-right:24px}.ms-siteScriptProgress-stageTitle{color:" }, { "theme": "neutralSecondary", "defaultValue": "#605e5c" }, { "rawString": "}.ms-siteScriptProgress-siteScriptProgressSubtext,.ms-siteScriptProgress-siteScriptLongRunningText{font-size:" }, { "theme": "smallFontSize", "defaultValue": "12px" }, { "rawString": ";font-weight:400;color:" }, { "theme": "neutralSecondary", "defaultValue": "#605e5c" }, { "rawString": "}.ms-siteScriptProgress-siteScriptLongRunningText{margin:12px 0 0}.ms-siteScriptProgress-progressIndicatorContainer{margin:12px 0 20px}.ms-siteScriptProgress-progressIndicatorContainer .ms-ProgressIndicator-itemName{font-weight:600;padding:0}.ms-siteScriptProgress-siteDesignChooserTitle{font-weight:600;margin:0 0 8px}.ms-siteScriptProgress-panelTitle{font-size:" }, { "theme": "xLargeFontSize", "defaultValue": "20px" }, { "rawString": ";font-weight:100;font-weight:400;margin-bottom:20px}.ms-siteScriptProgress-panelBigTitle.ms-siteScriptProgress-panelTitle{font-size:" }, { "theme": "xxLargeFontSize", "defaultValue": "28px" }, { "rawString": ";font-weight:100}.ms-siteScriptProgress-panelSubtitle{font-size:" }, { "theme": "mediumFontSize", "defaultValue": "14px" }, { "rawString": ";font-weight:400;margin-bottom:20px}.ms-siteScriptProgress-titleContainer{margin:32px 0 28px}.ms-siteScriptProgress-actionContainer{margin-bottom:20px}.ms-siteScriptProgress-emptyStageProgressIndicator{margin-bottom:22px}.ms-siteScriptProgress-stageContainer{margin-top:8px}.ms-siteScriptProgress-actionHeader{display:-webkit-box;display:-ms-flexbox;display:flex}\n" }]);
//# sourceMappingURL=SiteScriptProgressPanel.scss.js.map

/***/ }),

/***/ "NOEC":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/ProgressIndicator/ProgressIndicator.styles.js ***!
  \************************************************************************************************************************************************************************************************************************/
/*! exports provided: getStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStyles", function() { return getStyles; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Styling__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Styling */ "PL71");
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Utilities */ "mkpW");



var GlobalClassNames = {
    root: 'ms-ProgressIndicator',
    itemName: 'ms-ProgressIndicator-itemName',
    itemDescription: 'ms-ProgressIndicator-itemDescription',
    itemProgress: 'ms-ProgressIndicator-itemProgress',
    progressTrack: 'ms-ProgressIndicator-progressTrack',
    progressBar: 'ms-ProgressIndicator-progressBar',
};
var IndeterminateProgress = Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["memoizeFunction"])(function () {
    return Object(_Styling__WEBPACK_IMPORTED_MODULE_1__["keyframes"])({
        '0%': {
            left: '-30%',
        },
        '100%': {
            left: '100%',
        },
    });
});
var IndeterminateProgressRTL = Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["memoizeFunction"])(function () {
    return Object(_Styling__WEBPACK_IMPORTED_MODULE_1__["keyframes"])({
        '100%': {
            right: '-30%',
        },
        '0%': {
            right: '100%',
        },
    });
});
var getStyles = function (props) {
    var _a, _b, _c;
    var isRTL = Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["getRTL"])(props.theme);
    var className = props.className, indeterminate = props.indeterminate, theme = props.theme, _d = props.barHeight, barHeight = _d === void 0 ? 2 : _d;
    var palette = theme.palette, semanticColors = theme.semanticColors, fonts = theme.fonts;
    var classNames = Object(_Styling__WEBPACK_IMPORTED_MODULE_1__["getGlobalClassNames"])(GlobalClassNames, theme);
    var marginBetweenText = 8;
    var textHeight = 18;
    var progressTrackColor = palette.neutralLight;
    return {
        root: [classNames.root, fonts.medium, className],
        itemName: [
            classNames.itemName,
            _Styling__WEBPACK_IMPORTED_MODULE_1__["noWrap"],
            {
                color: semanticColors.bodyText,
                paddingTop: marginBetweenText / 2,
                lineHeight: textHeight + 2,
            },
        ],
        itemDescription: [
            classNames.itemDescription,
            {
                color: semanticColors.bodySubtext,
                fontSize: fonts.small.fontSize,
                lineHeight: textHeight,
            },
        ],
        itemProgress: [
            classNames.itemProgress,
            {
                position: 'relative',
                overflow: 'hidden',
                height: barHeight,
                padding: marginBetweenText + "px 0",
            },
        ],
        progressTrack: [
            classNames.progressTrack,
            {
                position: 'absolute',
                width: '100%',
                height: barHeight,
                backgroundColor: progressTrackColor,
                selectors: (_a = {},
                    _a[_Styling__WEBPACK_IMPORTED_MODULE_1__["HighContrastSelector"]] = {
                        borderBottom: '1px solid WindowText',
                    },
                    _a),
            },
        ],
        progressBar: [
            {
                backgroundColor: palette.themePrimary,
                height: barHeight,
                position: 'absolute',
                transition: 'width .3s ease',
                width: 0,
                selectors: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])((_b = {}, _b[_Styling__WEBPACK_IMPORTED_MODULE_1__["HighContrastSelector"]] = {
                    backgroundColor: 'highlight',
                }, _b), Object(_Styling__WEBPACK_IMPORTED_MODULE_1__["getEdgeChromiumNoHighContrastAdjustSelector"])()),
            },
            indeterminate
                ? {
                    position: 'absolute',
                    minWidth: '33%',
                    background: "linear-gradient(to right, " + progressTrackColor + " 0%, " +
                        (palette.themePrimary + " 50%, " + progressTrackColor + " 100%)"),
                    animation: (isRTL ? IndeterminateProgressRTL() : IndeterminateProgress()) + " 3s infinite",
                    selectors: (_c = {},
                        _c[_Styling__WEBPACK_IMPORTED_MODULE_1__["HighContrastSelector"]] = {
                            background: "highlight",
                        },
                        _c),
                }
                : {
                    transition: 'width .15s linear',
                },
            classNames.progressBar,
        ],
    };
};
//# sourceMappingURL=ProgressIndicator.styles.js.map

/***/ }),

/***/ "OqUb":
/*!**************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/Overlay.js ***!
  \**************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/office-ui-fabric-react-bundle */ "KL1q");
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
// Loading office-ui-fabric-react/./lib/Overlay.js


/***/ }),

/***/ "P2cQ":
/*!*****************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@uifabric/utilities@7.33.2_baa7aab8a1d5d20fe3858de8537800ba/node_modules/@uifabric/utilities/lib/index.js ***!
  \*****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Loading @uifabric/utilities/./lib/index.js
var pkg = __webpack_require__(/*! @ms/uifabric-styling-bundle */ "fglE");
module.exports = pkg._Utilities;

/***/ }),

/***/ "e1TN":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/ProgressIndicator/ProgressIndicator.js ***!
  \*****************************************************************************************************************************************************************************************************************/
/*! exports provided: ProgressIndicator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressIndicator", function() { return ProgressIndicator; });
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Utilities */ "mkpW");
/* harmony import */ var _ProgressIndicator_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProgressIndicator.base */ "6kzE");
/* harmony import */ var _ProgressIndicator_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProgressIndicator.styles */ "NOEC");



/**
 * ProgressIndicator description
 */
var ProgressIndicator = Object(_Utilities__WEBPACK_IMPORTED_MODULE_0__["styled"])(_ProgressIndicator_base__WEBPACK_IMPORTED_MODULE_1__["ProgressIndicatorBase"], _ProgressIndicator_styles__WEBPACK_IMPORTED_MODULE_2__["getStyles"], undefined, { scope: 'ProgressIndicator' });
//# sourceMappingURL=ProgressIndicator.js.map

/***/ }),

/***/ "fyAn":
/*!**************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/Spinner.js ***!
  \**************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/office-ui-fabric-react-bundle */ "KL1q");
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
// Loading office-ui-fabric-react/./lib/Spinner.js


/***/ }),

/***/ "gyPE":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/ProgressIndicator/index.js ***!
  \*****************************************************************************************************************************************************************************************************/
/*! exports provided: ProgressIndicator, ProgressIndicatorBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ProgressIndicator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProgressIndicator */ "e1TN");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProgressIndicator", function() { return _ProgressIndicator__WEBPACK_IMPORTED_MODULE_0__["ProgressIndicator"]; });

/* harmony import */ var _ProgressIndicator_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProgressIndicator.base */ "6kzE");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProgressIndicatorBase", function() { return _ProgressIndicator_base__WEBPACK_IMPORTED_MODULE_1__["ProgressIndicatorBase"]; });



//# sourceMappingURL=index.js.map

/***/ }),

/***/ "ioxN":
/*!**************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/Callout.js ***!
  \**************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/office-ui-fabric-react-bundle */ "KL1q");
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
// Loading office-ui-fabric-react/./lib/Callout.js


/***/ }),

/***/ "uyU2":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-shared-react@47.12.13_d89e40c38ccaa8bd6af6488f37cb196d/node_modules/@ms/odsp-shared-react/lib/components/SiteScriptProgressPanel/SiteScriptProgressPanelStyles.js ***!
  \**********************************************************************************************************************************************************************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
var styles = {
    accessible: 'ms-siteScriptProgress-accessible',
    siteScriptLongRunningText: 'ms-siteScriptProgress-siteScriptLongRunningText',
    schemaArea: 'ms-siteScriptProgress-schemaArea',
    workingImage: 'ms-siteScriptProgress-workingImage',
    columnInternal: 'ms-siteScriptProgress-columnInternal',
    siteDesignLogoImage: 'ms-siteScriptProgress-siteDesignLogoImage',
    darker: 'ms-siteScriptProgress-darker',
    xButton: 'ms-siteScriptProgress-xButton',
    navigation: 'ms-siteScriptProgress-navigation',
    siteDesignDescription: 'ms-siteScriptProgress-siteDesignDescription',
    explainerLink: 'ms-siteScriptProgress-explainerLink',
    explainerTitle: 'ms-siteScriptProgress-explainerTitle',
    scrollable: 'ms-siteScriptProgress-scrollable',
    siteDesignChooserTitle: 'ms-siteScriptProgress-siteDesignChooserTitle',
    tenantSiteDesignTitle: 'ms-siteScriptProgress-tenantSiteDesignTitle',
    gear: 'ms-siteScriptProgress-gear',
    noProgressIndicator: 'ms-siteScriptProgress-noProgressIndicator',
    bigTitle: 'ms-siteScriptProgress-panelBigTitle',
    runChoiceChecked: 'ms-siteScriptProgress-runChoiceChecked',
    runChoiceRoot: 'ms-siteScriptProgress-runChoiceRoot',
    runChoiceRadio: 'ms-siteScriptProgress-runChoiceRadio',
    runChoiceText: 'ms-siteScriptProgress-runChoiceText',
    runChoicePrimaryText: 'ms-siteScriptProgress-runChoicePrimaryText',
    runChoiceSecondaryText: 'ms-siteScriptProgress-runChoiceSecondayText',
    runChoiceArrow: 'ms-siteScriptProgress-runChoiceArrow',
    tenantSiteDesigns: 'ms-siteScriptProgress-tenantSiteDesignsLink',
    column: 'ms-siteScriptProgress-column',
    leftColumn: 'ms-siteScriptProgress-leftColumn',
    rightColumn: 'ms-siteScriptProgress-rightColumn',
    columnFooter: 'ms-siteScriptProgress-columnFooter',
    columnBody: 'ms-siteScriptProgress-columnBody',
    columnHeader: 'ms-siteScriptProgress-columnHeader',
    panelBottomTextBold: 'ms-siteScriptProgress-panelBottomTextBold',
    siteScriptProgressPanelRoot: 'ms-siteScriptProgress-panelRoot',
    siteScriptProgressPanel: 'ms-siteScriptProgress-panel',
    emptyStageContainer: 'ms-siteScriptProgress-emptyStageContainer',
    errorIcon: 'ms-siteScriptProgress-errorIcon',
    errorText: 'ms-siteScriptProgress-errorText',
    inProgressSpinner: 'ms-siteScriptProgress-inProgressSpinner',
    actionIcon: 'ms-siteScriptProgress-actionIcon',
    successIcon: 'ms-siteScriptProgress-successIcon',
    activeActionTitle: 'ms-siteScriptProgress-activeActionTitle',
    actionTitle: 'ms-siteScriptProgress-actionTitle',
    actionTitleNoIcon: 'ms-siteScriptProgress-actionTitleNoIcon',
    incompleteIcon: 'ms-siteScriptProgress-incompleteIcon',
    inactiveActionTitle: 'ms-siteScriptProgress-inactiveActionTitle',
    stageTitle: 'ms-siteScriptProgress-stageTitle',
    siteScriptProgressSubtext: 'ms-siteScriptProgress-siteScriptProgressSubtext',
    progressIndicatorContainer: 'ms-siteScriptProgress-progressIndicatorContainer',
    progressPanelTitle: 'ms-siteScriptProgress-panelTitle',
    progressPanelSubtitle: 'ms-siteScriptProgress-panelSubtitle',
    titleContainer: 'ms-siteScriptProgress-titleContainer',
    actionContainer: 'ms-siteScriptProgress-actionContainer',
    emptyStageProgressIndicator: 'ms-siteScriptProgress-emptyStageProgressIndicator',
    stageContainer: 'ms-siteScriptProgress-stageContainer',
    actionHeader: 'ms-siteScriptProgress-actionHeader'
};
//# sourceMappingURL=SiteScriptProgressPanelStyles.js.map

/***/ }),

/***/ "xdNC":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-shared-react@47.12.13_d89e40c38ccaa8bd6af6488f37cb196d/node_modules/@ms/odsp-shared-react/lib/components/SiteScriptProgressPanel/SiteScriptActionLabel.js ***!
  \**************************************************************************************************************************************************************************************************************************/
/*! exports provided: SiteScriptActionLabel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SiteScriptActionLabel", function() { return SiteScriptActionLabel; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ms_odsp_utilities_lib_string_StringHelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ms/odsp-utilities/lib/string/StringHelper */ "BY+f");
/* harmony import */ var _ms_odsp_utilities_lib_string_StringHelper__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ms_odsp_utilities_lib_string_StringHelper__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ms_odsp_utilities_lib_killswitch_Killswitch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ms/odsp-utilities/lib/killswitch/Killswitch */ "QUgr");
/* harmony import */ var office_ui_fabric_react_lib_Icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! office-ui-fabric-react/lib/Icon */ "56LG");
/* harmony import */ var office_ui_fabric_react_lib_Icon__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(office_ui_fabric_react_lib_Icon__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var office_ui_fabric_react_lib_Spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! office-ui-fabric-react/lib/Spinner */ "fyAn");
/* harmony import */ var office_ui_fabric_react_lib_Utilities__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! office-ui-fabric-react/lib/Utilities */ "mkpW");
/* harmony import */ var _SiteScriptProgressPanel_resx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./SiteScriptProgressPanel.resx */ "GZOZ");
/* harmony import */ var _SiteScriptProgressPanel_resx__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_SiteScriptProgressPanel_resx__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _SiteScriptProgressPanelStyles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./SiteScriptProgressPanelStyles */ "uyU2");
/**
 * @Copyright (c) Microsoft Corporation.  All rights reserved.
 *
 * @file SiteScriptProgressPanel.tsx
 */









var SiteScriptActionLabel = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(SiteScriptActionLabel, _super);
    function SiteScriptActionLabel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._renderStage = function (stageName, index) {
            if (index === 0) {
                // skip rendering the first stage. It is rendered as the action title.
                return null; // tslint:disable-line:no-null-keyword
            }
            return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { key: _this._getStageKey(index), className: _SiteScriptProgressPanelStyles__WEBPACK_IMPORTED_MODULE_8__["styles"].stageTitle, "data-automationid": 'SiteScriptProgressStageTitle' }, stageName));
        };
        return _this;
    }
    SiteScriptActionLabel.prototype.render = function () {
        var errorContainer = undefined;
        var actionIcon = undefined;
        var actionTitleClass = _SiteScriptProgressPanelStyles__WEBPACK_IMPORTED_MODULE_8__["styles"].activeActionTitle;
        var actionAriaLabel = undefined;
        var actionTitle = this.props.stageNames[0];
        var hasData;
        if (!_ms_odsp_utilities_lib_killswitch_Killswitch__WEBPACK_IMPORTED_MODULE_3__["Killswitch"].isActivated('402D171D-93E7-49F4-8E32-4231EFA41B9D', '5/10/2019', 'Show stages for long site designs')) {
            hasData = !!this.props.stageNames;
        }
        else {
            hasData = !!this.props.stageResultData;
        }
        if (!this.props.demoMode && hasData) {
            var stagesComplete = Math.min(this.props.stageNames.length, Math.max(0, this.props.stageOutcomesKnown - this.props.stageStartIndex));
            var failed = false;
            var forceIncomplete = false;
            for (var i = 0; i < stagesComplete; i++) {
                var stageResult = this.props.stageResultData[i + this.props.stageStartIndex];
                if (stageResult.outcomeCode === 1 /* Failure */) {
                    failed = true;
                    errorContainer = (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: _SiteScriptProgressPanelStyles__WEBPACK_IMPORTED_MODULE_8__["styles"].errorText }, stageResult.outcomeText || _SiteScriptProgressPanel_resx__WEBPACK_IMPORTED_MODULE_7___default.a.defaultFailureOutcomeText));
                    break;
                }
                else if (stageResult.outcomeCode === 4 /* Started */) {
                    forceIncomplete = true;
                }
            }
            if (!failed) {
                if (forceIncomplete) {
                    actionAriaLabel = _ms_odsp_utilities_lib_string_StringHelper__WEBPACK_IMPORTED_MODULE_2__["format"](_SiteScriptProgressPanel_resx__WEBPACK_IMPORTED_MODULE_7___default.a.actionIncompleteAriaLabel, actionTitle);
                    actionIcon = (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](office_ui_fabric_react_lib_Spinner__WEBPACK_IMPORTED_MODULE_5__["Spinner"], { ariaLabel: actionAriaLabel, className: _SiteScriptProgressPanelStyles__WEBPACK_IMPORTED_MODULE_8__["styles"].inProgressSpinner, role: 'img', size: office_ui_fabric_react_lib_Spinner__WEBPACK_IMPORTED_MODULE_5__["SpinnerSize"].small }));
                }
                else if (stagesComplete >= this.props.stageNames.length) {
                    actionAriaLabel = _ms_odsp_utilities_lib_string_StringHelper__WEBPACK_IMPORTED_MODULE_2__["format"](_SiteScriptProgressPanel_resx__WEBPACK_IMPORTED_MODULE_7___default.a.actionCompleteAriaLabel, actionTitle);
                    actionIcon = (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](office_ui_fabric_react_lib_Icon__WEBPACK_IMPORTED_MODULE_4__["Icon"], { ariaLabel: actionAriaLabel, className: Object(office_ui_fabric_react_lib_Utilities__WEBPACK_IMPORTED_MODULE_6__["css"])(_SiteScriptProgressPanelStyles__WEBPACK_IMPORTED_MODULE_8__["styles"].actionIcon, _SiteScriptProgressPanelStyles__WEBPACK_IMPORTED_MODULE_8__["styles"].successIcon), "data-automationid": 'SiteScriptProgressSuccessIcon', iconName: 'CheckMark', role: 'img' }));
                }
                else if (this.props.stageOutcomesKnown >= this.props.stageStartIndex) {
                    actionAriaLabel = _ms_odsp_utilities_lib_string_StringHelper__WEBPACK_IMPORTED_MODULE_2__["format"](_SiteScriptProgressPanel_resx__WEBPACK_IMPORTED_MODULE_7___default.a.actionIncompleteAriaLabel, actionTitle);
                    actionIcon = (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](office_ui_fabric_react_lib_Spinner__WEBPACK_IMPORTED_MODULE_5__["Spinner"], { ariaLabel: actionAriaLabel, className: _SiteScriptProgressPanelStyles__WEBPACK_IMPORTED_MODULE_8__["styles"].inProgressSpinner, role: 'img', size: office_ui_fabric_react_lib_Spinner__WEBPACK_IMPORTED_MODULE_5__["SpinnerSize"].small }));
                }
                else {
                    actionAriaLabel = _ms_odsp_utilities_lib_string_StringHelper__WEBPACK_IMPORTED_MODULE_2__["format"](_SiteScriptProgressPanel_resx__WEBPACK_IMPORTED_MODULE_7___default.a.actionIncompleteAriaLabel, actionTitle);
                    actionIcon = (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](office_ui_fabric_react_lib_Icon__WEBPACK_IMPORTED_MODULE_4__["Icon"], { ariaLabel: actionAriaLabel, className: Object(office_ui_fabric_react_lib_Utilities__WEBPACK_IMPORTED_MODULE_6__["css"])(_SiteScriptProgressPanelStyles__WEBPACK_IMPORTED_MODULE_8__["styles"].actionIcon, _SiteScriptProgressPanelStyles__WEBPACK_IMPORTED_MODULE_8__["styles"].incompleteIcon), iconName: 'CheckMark', role: 'img' }));
                    actionTitleClass = _SiteScriptProgressPanelStyles__WEBPACK_IMPORTED_MODULE_8__["styles"].inactiveActionTitle;
                }
            }
            else {
                actionAriaLabel = _ms_odsp_utilities_lib_string_StringHelper__WEBPACK_IMPORTED_MODULE_2__["format"](_SiteScriptProgressPanel_resx__WEBPACK_IMPORTED_MODULE_7___default.a.actionErrorAriaLabel, actionTitle);
                actionIcon = (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](office_ui_fabric_react_lib_Icon__WEBPACK_IMPORTED_MODULE_4__["Icon"], { ariaLabel: actionAriaLabel, className: Object(office_ui_fabric_react_lib_Utilities__WEBPACK_IMPORTED_MODULE_6__["css"])(_SiteScriptProgressPanelStyles__WEBPACK_IMPORTED_MODULE_8__["styles"].actionIcon, _SiteScriptProgressPanelStyles__WEBPACK_IMPORTED_MODULE_8__["styles"].errorIcon), iconName: 'Error', role: 'img' }));
            }
        }
        else {
            actionIcon = (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](office_ui_fabric_react_lib_Icon__WEBPACK_IMPORTED_MODULE_4__["Icon"], { "aria-hidden": 'true', iconName: 'CheckMark', className: Object(office_ui_fabric_react_lib_Utilities__WEBPACK_IMPORTED_MODULE_6__["css"])(_SiteScriptProgressPanelStyles__WEBPACK_IMPORTED_MODULE_8__["styles"].actionIcon, _SiteScriptProgressPanelStyles__WEBPACK_IMPORTED_MODULE_8__["styles"].incompleteIcon) }));
        }
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { role: 'heading', className: _SiteScriptProgressPanelStyles__WEBPACK_IMPORTED_MODULE_8__["styles"].actionContainer, "data-automationid": 'SiteScriptProgressActionContainer', "aria-label": actionAriaLabel },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: _SiteScriptProgressPanelStyles__WEBPACK_IMPORTED_MODULE_8__["styles"].actionHeader },
                actionIcon,
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: Object(office_ui_fabric_react_lib_Utilities__WEBPACK_IMPORTED_MODULE_6__["css"])(_SiteScriptProgressPanelStyles__WEBPACK_IMPORTED_MODULE_8__["styles"].actionTitle, actionTitleClass, actionIcon ? '' : _SiteScriptProgressPanelStyles__WEBPACK_IMPORTED_MODULE_8__["styles"].actionTitleNoIcon), "data-automationid": 'SiteScriptProgressActionTitle' }, this.props.stageNames[0] || '')),
            errorContainer,
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: _SiteScriptProgressPanelStyles__WEBPACK_IMPORTED_MODULE_8__["styles"].stageContainer }, this.props.stageNames.map(this._renderStage))));
    };
    SiteScriptActionLabel.prototype._getStageKey = function (stageIndex) {
        return 'scriptProgress_' + this.props.stageStartIndex.toString + '_' + stageIndex.toString();
    };
    return SiteScriptActionLabel;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));

//# sourceMappingURL=SiteScriptActionLabel.js.map

/***/ })

}]);
//# sourceMappingURL=chunk.9_[locale].js.map