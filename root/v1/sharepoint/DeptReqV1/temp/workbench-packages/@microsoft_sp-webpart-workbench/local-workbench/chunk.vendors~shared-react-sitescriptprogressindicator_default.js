(window["webpackJsonp_1e2cdec9_1360_4295_b73c_98d6f51866d5_0_1_0"] = window["webpackJsonp_1e2cdec9_1360_4295_b73c_98d6f51866d5_0_1_0"] || []).push([["vendors~shared-react-sitescriptprogressindicator"],{

/***/ "N3hx":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-datasources@45.13.10_e509c819ab980023b76e5746ec0fc9e2/node_modules/@ms/odsp-datasources/lib/interfaces/siteScripts/SiteScriptProgressInterfaces.js ***!
  \*******************************************************************************************************************************************************************************************************************/
/*! exports provided: SiteScriptProgressOutcomeCode, SiteScriptStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SiteScriptProgressOutcomeCode", function() { return SiteScriptProgressOutcomeCode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SiteScriptStore", function() { return SiteScriptStore; });
var SiteScriptProgressOutcomeCode;
(function (SiteScriptProgressOutcomeCode) {
    SiteScriptProgressOutcomeCode[SiteScriptProgressOutcomeCode["Success"] = 0] = "Success";
    SiteScriptProgressOutcomeCode[SiteScriptProgressOutcomeCode["Failure"] = 1] = "Failure";
    SiteScriptProgressOutcomeCode[SiteScriptProgressOutcomeCode["NoOp"] = 2] = "NoOp";
    SiteScriptProgressOutcomeCode[SiteScriptProgressOutcomeCode["SuccessWithException"] = 3] = "SuccessWithException";
    SiteScriptProgressOutcomeCode[SiteScriptProgressOutcomeCode["Started"] = 4] = "Started";
})(SiteScriptProgressOutcomeCode || (SiteScriptProgressOutcomeCode = {}));
var SiteScriptStore;
(function (SiteScriptStore) {
    SiteScriptStore[SiteScriptStore["Tenant"] = 0] = "Tenant";
    SiteScriptStore[SiteScriptStore["OutOfBox"] = 1] = "OutOfBox";
})(SiteScriptStore || (SiteScriptStore = {}));
//# sourceMappingURL=SiteScriptProgressInterfaces.js.map

/***/ }),

/***/ "O5KA":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-shared-react@47.12.13_d89e40c38ccaa8bd6af6488f37cb196d/node_modules/@ms/odsp-shared-react/lib/components/CompositeHeader/subComponents/SiteScriptProgressIndicator.resx.js ***!
  \*******************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var strings = {"SiteScriptProgressIndicatorIncompleteText5":"SiteScriptProgressIndicatorIncompleteText5","SiteScriptProgressIndicatorViewProgressLink5":"SiteScriptProgressIndicatorViewProgressLink5","SiteScriptProgressIndicatorCompleteText":"SiteScriptProgressIndicatorCompleteText","SiteScriptProgressIndicatorViewLink":"SiteScriptProgressIndicatorViewLink","SiteScriptProgressIndicatorCompleteLink":"SiteScriptProgressIndicatorCompleteLink"};
strings.default = strings;
module.exports = strings;

/***/ }),

/***/ "u08t":
/*!********************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-datasources@45.13.10_e509c819ab980023b76e5746ec0fc9e2/node_modules/@ms/odsp-datasources/lib/SiteScriptProgressDataSource.js ***!
  \********************************************************************************************************************************************************************************************/
/*! exports provided: SiteScriptProgressDataSource, SiteScriptProgressOutcomeCode, SiteScriptStore, SiteScriptProgressProvider, SiteScriptProgressCallbackType, SiteScriptRunAge, SiteScriptProgressStateManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dataSources_siteScriptProgress_SiteScriptProgressDataSource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dataSources/siteScriptProgress/SiteScriptProgressDataSource */ "Q1B5");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SiteScriptProgressDataSource", function() { return _dataSources_siteScriptProgress_SiteScriptProgressDataSource__WEBPACK_IMPORTED_MODULE_0__["SiteScriptProgressDataSource"]; });

/* harmony import */ var _interfaces_siteScripts_SiteScriptProgressInterfaces__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./interfaces/siteScripts/SiteScriptProgressInterfaces */ "N3hx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SiteScriptProgressOutcomeCode", function() { return _interfaces_siteScripts_SiteScriptProgressInterfaces__WEBPACK_IMPORTED_MODULE_1__["SiteScriptProgressOutcomeCode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SiteScriptStore", function() { return _interfaces_siteScripts_SiteScriptProgressInterfaces__WEBPACK_IMPORTED_MODULE_1__["SiteScriptStore"]; });

/* harmony import */ var _providers_siteScriptProgress_SiteScriptProgressProvider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./providers/siteScriptProgress/SiteScriptProgressProvider */ "3egX");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SiteScriptProgressProvider", function() { return _providers_siteScriptProgress_SiteScriptProgressProvider__WEBPACK_IMPORTED_MODULE_2__["SiteScriptProgressProvider"]; });

/* harmony import */ var _providers_siteScriptProgress_SiteScriptProgressStateManager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./providers/siteScriptProgress/SiteScriptProgressStateManager */ "OpcF");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SiteScriptProgressCallbackType", function() { return _providers_siteScriptProgress_SiteScriptProgressStateManager__WEBPACK_IMPORTED_MODULE_3__["SiteScriptProgressCallbackType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SiteScriptRunAge", function() { return _providers_siteScriptProgress_SiteScriptProgressStateManager__WEBPACK_IMPORTED_MODULE_3__["SiteScriptRunAge"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SiteScriptProgressStateManager", function() { return _providers_siteScriptProgress_SiteScriptProgressStateManager__WEBPACK_IMPORTED_MODULE_3__["SiteScriptProgressStateManager"]; });





//# sourceMappingURL=SiteScriptProgressDataSource.js.map

/***/ }),

/***/ "uUbc":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-shared-react@47.12.13_d89e40c38ccaa8bd6af6488f37cb196d/node_modules/@ms/odsp-shared-react/lib/components/CompositeHeader/subComponents/SiteScriptProgressIndicator.js ***!
  \**************************************************************************************************************************************************************************************************************************************/
/*! exports provided: SiteScriptProgressIndicator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SiteScriptProgressIndicator", function() { return SiteScriptProgressIndicator; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var office_ui_fabric_react_lib_MessageBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! office-ui-fabric-react/lib/MessageBar */ "oW6A");
/* harmony import */ var office_ui_fabric_react_lib_Link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! office-ui-fabric-react/lib/Link */ "F3Wv");
/* harmony import */ var _ms_odsp_utilities_lib_logging_events_Engagement_event__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ms/odsp-utilities/lib/logging/events/Engagement.event */ "cDPE");
/* harmony import */ var _ms_odsp_datasources_lib_SiteScriptProgressDataSource__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ms/odsp-datasources/lib/SiteScriptProgressDataSource */ "u08t");
/* harmony import */ var _SiteScriptProgressIndicator_resx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./SiteScriptProgressIndicator.resx */ "O5KA");
/* harmony import */ var _SiteScriptProgressIndicator_resx__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_SiteScriptProgressIndicator_resx__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _ms_utilities_react_lib_decorators_asAsync__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ms/utilities-react/lib/decorators/asAsync */ "YOlM");
/* harmony import */ var _ms_shared_react_web_templates_lib_firstRunDialog_WebTemplatesGalleryFirstRunUtil__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ms/shared-react-web-templates/lib/firstRunDialog/WebTemplatesGalleryFirstRunUtil */ "yGrp");
/* harmony import */ var _ms_shared_react_web_templates_lib_firstRunDialog_WebTemplatesGalleryFirstRunDialogLoader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ms/shared-react-web-templates/lib/firstRunDialog/WebTemplatesGalleryFirstRunDialogLoader */ "QCAU");










var AsyncSiteScriptProgressPanel = Object(_ms_utilities_react_lib_decorators_asAsync__WEBPACK_IMPORTED_MODULE_7__["asAsync"])(function () { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(void 0, void 0, void 0, function () { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
    switch (_a.label) {
        case 0: return [4 /*yield*/, Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(4), __webpack_require__.e(2), __webpack_require__.e(5), __webpack_require__.e(7), __webpack_require__.e(8), __webpack_require__.e(9)]).then(__webpack_require__.bind(null, /*! ../../SiteScriptProgressPanel/SiteScriptProgressPanel */ "43iB"))];
        case 1: return [2 /*return*/, (_a.sent()).SiteScriptProgressPanel];
    }
}); }); });
var SiteScriptProgressIndicator = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(SiteScriptProgressIndicator, _super);
    function SiteScriptProgressIndicator(props) {
        var _this = _super.call(this, props) || this;
        _this._onNewDataReceived = function (newState) {
            if (newState.isSiteDesignPending) {
                if (!_this._firstRunPanelExperience) {
                    _ms_odsp_utilities_lib_logging_events_Engagement_event__WEBPACK_IMPORTED_MODULE_4__["Engagement"].logData({ name: 'SiteScripts.BarAppeared' });
                    _this._firstRunPanelExperience = true;
                }
            }
            var renderWebTemplatesGalleryFirstRun = false;
            if (newState.canRenderWebTemplatesGalleryFirstRun &&
                Object(_ms_shared_react_web_templates_lib_firstRunDialog_WebTemplatesGalleryFirstRunUtil__WEBPACK_IMPORTED_MODULE_8__["shouldRenderWebTemplatesGalleryFirstRun"])(_this.props.pageContext)) {
                renderWebTemplatesGalleryFirstRun = true;
            }
            _this.setState({
                isComplete: _this._siteScriptProgressStateManager.isRunComplete(newState.displayedRunKey),
                isVisible: newState.isSiteDesignPending,
                renderWebTemplatesGalleryFirstRun: renderWebTemplatesGalleryFirstRun
            });
        };
        _this._onOpenPanelAction = function (newState) {
            _ms_odsp_utilities_lib_logging_events_Engagement_event__WEBPACK_IMPORTED_MODULE_4__["Engagement"].logData({ name: 'SiteScripts.OpenPanelFromGear.Click' });
            if (!_this.state.isPanelOpen) {
                _this.setState({
                    isPanelOpen: true
                });
            }
        };
        _this._onClickOpenPanel = function (ev) {
            _ms_odsp_utilities_lib_logging_events_Engagement_event__WEBPACK_IMPORTED_MODULE_4__["Engagement"].logData({ name: 'SiteScripts.OpenPanelFromBar.Click' });
            _this.setState({
                isPanelOpen: true
            });
            ev.stopPropagation();
            ev.preventDefault();
        };
        _this._onClickRefreshPage = function (ev) {
            _ms_odsp_utilities_lib_logging_events_Engagement_event__WEBPACK_IMPORTED_MODULE_4__["Engagement"].logData({ name: 'SiteScripts.RefreshFromBar.Click' });
            window.location.href = _this.props.pageContext
                ? _this.props.pageContext.webServerRelativeUrl
                : window.location.href;
        };
        _this._onPanelDismissed = function () {
            _this.setState({
                isPanelOpen: false
            });
        };
        _this.state = {
            isPanelOpen: false,
            isComplete: false,
            isVisible: false,
            renderWebTemplatesGalleryFirstRun: false
        };
        _this._siteScriptProgressStateManager = _ms_odsp_datasources_lib_SiteScriptProgressDataSource__WEBPACK_IMPORTED_MODULE_5__["SiteScriptProgressStateManager"].getInstance({
            pageContext: props.pageContext
        });
        _this._panelWasEverOpen = false;
        _this._firstRunPanelExperience = false;
        return _this;
    }
    SiteScriptProgressIndicator.prototype.componentDidMount = function () {
        this._siteScriptProgressManagerKey = 'SiteScriptProgressIndicator' + Math.random().toString();
        this._siteScriptProgressStateManager.registerCallback(this._siteScriptProgressManagerKey, _ms_odsp_datasources_lib_SiteScriptProgressDataSource__WEBPACK_IMPORTED_MODULE_5__["SiteScriptProgressCallbackType"].newProgressData, this._onNewDataReceived);
        this._siteScriptProgressStateManager.registerCallback(this._siteScriptProgressManagerKey, _ms_odsp_datasources_lib_SiteScriptProgressDataSource__WEBPACK_IMPORTED_MODULE_5__["SiteScriptProgressCallbackType"].openPanelAction, this._onOpenPanelAction);
    };
    SiteScriptProgressIndicator.prototype.componentWillUnmount = function () {
        this._siteScriptProgressStateManager.unregisterCallback(this._siteScriptProgressManagerKey, _ms_odsp_datasources_lib_SiteScriptProgressDataSource__WEBPACK_IMPORTED_MODULE_5__["SiteScriptProgressCallbackType"].newProgressData);
        this._siteScriptProgressStateManager.unregisterCallback(this._siteScriptProgressManagerKey, _ms_odsp_datasources_lib_SiteScriptProgressDataSource__WEBPACK_IMPORTED_MODULE_5__["SiteScriptProgressCallbackType"].openPanelAction);
    };
    SiteScriptProgressIndicator.prototype.render = function () {
        var _a;
        this._panelWasEverOpen = this._panelWasEverOpen || this.state.isPanelOpen;
        var messageBar;
        if (!this.state.isVisible && !this._siteScriptProgressStateManager.getState().isSiteDesignPending) {
            if (this.state.renderWebTemplatesGalleryFirstRun) {
                return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ms_shared_react_web_templates_lib_firstRunDialog_WebTemplatesGalleryFirstRunDialogLoader__WEBPACK_IMPORTED_MODULE_9__["WebTemplatesGalleryFirstRunDialogLoader"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, {
                    pageContext: this.props.pageContext,
                    imageUrls: {
                        webTemplatesFirstRunIllustration: (_a = this.props.imageUrls) === null || _a === void 0 ? void 0 : _a.webTemplatesFirstRunIllustration
                    }
                })));
            }
            if (!this._panelWasEverOpen) {
                return null;
            }
            messageBar = undefined;
        }
        else {
            if (this.state.isComplete) {
                var splitStrings = _SiteScriptProgressIndicator_resx__WEBPACK_IMPORTED_MODULE_6___default.a.SiteScriptProgressIndicatorCompleteText.split(/{[01]}/);
                if (splitStrings.length !== 3) {
                    // This is a fallback in case the localizer localized the string incorrectly.
                    splitStrings = [_SiteScriptProgressIndicator_resx__WEBPACK_IMPORTED_MODULE_6___default.a.SiteScriptProgressIndicatorCompleteText, '', ''];
                }
                var openPanelLink = (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](office_ui_fabric_react_lib_Link__WEBPACK_IMPORTED_MODULE_3__["Link"], { onClick: this._onClickOpenPanel, "data-automationid": 'SiteScriptProgressOpenPanelLink' }, _SiteScriptProgressIndicator_resx__WEBPACK_IMPORTED_MODULE_6___default.a.SiteScriptProgressIndicatorViewLink));
                var refreshLink = (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](office_ui_fabric_react_lib_Link__WEBPACK_IMPORTED_MODULE_3__["Link"], { onClick: this._onClickRefreshPage }, _SiteScriptProgressIndicator_resx__WEBPACK_IMPORTED_MODULE_6___default.a.SiteScriptProgressIndicatorCompleteLink));
                var linkDisplayOrder = void 0;
                // This is necessary because I cannot predict the order of the {0} and {1} in the localized strings.
                // If one or more of the {#} is missing, the order is moot because the string will be broken anyway.
                if (_SiteScriptProgressIndicator_resx__WEBPACK_IMPORTED_MODULE_6___default.a.SiteScriptProgressIndicatorCompleteText.indexOf('{0}') <=
                    _SiteScriptProgressIndicator_resx__WEBPACK_IMPORTED_MODULE_6___default.a.SiteScriptProgressIndicatorCompleteText.indexOf('{1}')) {
                    // This is the order in english
                    linkDisplayOrder = [openPanelLink, refreshLink];
                }
                else {
                    // This order will occur if the localizer put the {1} before the {0} in SiteScriptProgressIndicatorCompleteText
                    linkDisplayOrder = [refreshLink, openPanelLink];
                }
                messageBar = (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](office_ui_fabric_react_lib_MessageBar__WEBPACK_IMPORTED_MODULE_2__["MessageBar"], { messageBarType: office_ui_fabric_react_lib_MessageBar__WEBPACK_IMPORTED_MODULE_2__["MessageBarType"].warning },
                    splitStrings[0],
                    linkDisplayOrder[0],
                    splitStrings[1],
                    linkDisplayOrder[1],
                    splitStrings[2]));
            }
            else {
                var splitStrings = _SiteScriptProgressIndicator_resx__WEBPACK_IMPORTED_MODULE_6___default.a.SiteScriptProgressIndicatorIncompleteText5.split('{0}');
                if (splitStrings.length !== 2) {
                    // This is a fallback in case the localizer localized the string incorrectly.
                    splitStrings = [_SiteScriptProgressIndicator_resx__WEBPACK_IMPORTED_MODULE_6___default.a.SiteScriptProgressIndicatorIncompleteText5, ''];
                }
                messageBar = (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](office_ui_fabric_react_lib_MessageBar__WEBPACK_IMPORTED_MODULE_2__["MessageBar"], { messageBarType: office_ui_fabric_react_lib_MessageBar__WEBPACK_IMPORTED_MODULE_2__["MessageBarType"].warning },
                    splitStrings[0],
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](office_ui_fabric_react_lib_Link__WEBPACK_IMPORTED_MODULE_3__["Link"], { onClick: this._onClickOpenPanel, "data-automationid": 'SiteScriptProgressOpenPanelLink' }, _SiteScriptProgressIndicator_resx__WEBPACK_IMPORTED_MODULE_6___default.a.SiteScriptProgressIndicatorViewProgressLink5),
                    splitStrings[1]));
            }
        }
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null,
            messageBar,
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](AsyncSiteScriptProgressPanel, { onDismissed: this._onPanelDismissed, siteScriptProgressStateManager: this._siteScriptProgressStateManager, isOpen: this.state.isPanelOpen, firstRunPanelExperience: this._firstRunPanelExperience, responsiveMode: this.props.responsiveMode, imageUrls: this.props.imageUrls, pageContext: this.props.pageContext })));
    };
    return SiteScriptProgressIndicator;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));

//# sourceMappingURL=SiteScriptProgressIndicator.js.map

/***/ })

}]);
//# sourceMappingURL=chunk.vendors~shared-react-sitescriptprogressindicator_[locale].js.map