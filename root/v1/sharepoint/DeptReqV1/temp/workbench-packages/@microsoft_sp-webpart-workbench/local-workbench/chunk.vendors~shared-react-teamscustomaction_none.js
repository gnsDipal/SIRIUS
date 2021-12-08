(window["webpackJsonp_1e2cdec9_1360_4295_b73c_98d6f51866d5_0_1_0"] = window["webpackJsonp_1e2cdec9_1360_4295_b73c_98d6f51866d5_0_1_0"] || []).push([["vendors~shared-react-teamscustomaction"],{

/***/ "9mcA":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-shared-react@47.12.13_d89e40c38ccaa8bd6af6488f37cb196d/node_modules/@ms/odsp-shared-react/lib/components/CompositeHeader/subComponents/CopyLinkButton.js ***!
  \*************************************************************************************************************************************************************************************************************************/
/*! exports provided: CopyLinkButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CopyLinkButton", function() { return CopyLinkButton; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var office_ui_fabric_react_lib_utilities_decorators_withResponsiveMode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! office-ui-fabric-react/lib/utilities/decorators/withResponsiveMode */ "5qgq");
/* harmony import */ var office_ui_fabric_react_lib_utilities_decorators_withResponsiveMode__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(office_ui_fabric_react_lib_utilities_decorators_withResponsiveMode__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var office_ui_fabric_react_lib_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! office-ui-fabric-react/lib/Button */ "epn0");
/* harmony import */ var office_ui_fabric_react_lib_Icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! office-ui-fabric-react/lib/Icon */ "56LG");
/* harmony import */ var office_ui_fabric_react_lib_Icon__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(office_ui_fabric_react_lib_Icon__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var office_ui_fabric_react_lib_Styling__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! office-ui-fabric-react/lib/Styling */ "PL71");
/* harmony import */ var _CompositeHeader_resx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../CompositeHeader.resx */ "tDcW");
/* harmony import */ var _CompositeHeader_resx__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_CompositeHeader_resx__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var office_ui_fabric_react_lib_Callout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! office-ui-fabric-react/lib/Callout */ "ioxN");
/* harmony import */ var _ms_odsp_utilities_lib_logging_events_Engagement_event__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ms/odsp-utilities/lib/logging/events/Engagement.event */ "cDPE");
/* harmony import */ var _TeamsCustomActionsUtil__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./TeamsCustomActionsUtil */ "DgFN");









/**
 * This button only appears on hub sites. It launches the create group panel in order to create and join the site to a hub in one go.
 */
var CopyLinkButton = function (props) {
    _ms_odsp_utilities_lib_logging_events_Engagement_event__WEBPACK_IMPORTED_MODULE_7__["Engagement"].logData({ name: 'CopyLinkButton.Rendered' });
    var _a = react__WEBPACK_IMPORTED_MODULE_0__["useState"](false), isCalloutVisible = _a[0], toggleIsCalloutVisible = _a[1];
    var anchorRef = react__WEBPACK_IMPORTED_MODULE_0__["useRef"](null);
    var copyLinkButtonStyle = { marginRight: '12px !important' };
    var styles = Object(office_ui_fabric_react_lib_Styling__WEBPACK_IMPORTED_MODULE_4__["mergeStyleSets"])({
        calloutContainer: { padding: '8px 12px', display: 'flex' },
        calloutIcon: { fontSize: '16px', paddingRight: '8px' },
        calloutText: { fontSize: '12px', color: 'white' }
    });
    var toggleCalloutState = function (isCalloutVisible) {
        toggleIsCalloutVisible(!isCalloutVisible);
    };
    var copyLinkButtonClickAction = function () {
        Object(_TeamsCustomActionsUtil__WEBPACK_IMPORTED_MODULE_8__["onCopyLinkButtonClick"])();
        toggleIsCalloutVisible(!isCalloutVisible);
        window.setTimeout(function () {
            toggleCalloutState(!isCalloutVisible);
        }, 2000);
    };
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { style: copyLinkButtonStyle, ref: anchorRef },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](office_ui_fabric_react_lib_Button__WEBPACK_IMPORTED_MODULE_2__["ActionButton"], { iconProps: { iconName: 'Link' }, title: _CompositeHeader_resx__WEBPACK_IMPORTED_MODULE_5___default.a.copyLinkLabel, ariaLabel: _CompositeHeader_resx__WEBPACK_IMPORTED_MODULE_5___default.a.copyLinkAriaLabel, "data-automationid": 'CopyLinkButton', className: 'ms-CompositeHeader-collapsible', onClick: copyLinkButtonClickAction, disabled: props.responsiveMode < office_ui_fabric_react_lib_utilities_decorators_withResponsiveMode__WEBPACK_IMPORTED_MODULE_1__["ResponsiveMode"].small, style: { fontSize: 'inherit' } }),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](office_ui_fabric_react_lib_Callout__WEBPACK_IMPORTED_MODULE_6__["Callout"], { onDismiss: function () { return toggleIsCalloutVisible(!isCalloutVisible); }, directionalHint: office_ui_fabric_react_lib_Callout__WEBPACK_IMPORTED_MODULE_6__["DirectionalHint"].topCenter, hidden: !isCalloutVisible, target: anchorRef, gapSpace: 0, setInitialFocus: true, backgroundColor: '#6264A7', isBeakVisible: true },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: styles.calloutContainer },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](office_ui_fabric_react_lib_Icon__WEBPACK_IMPORTED_MODULE_3__["FontIcon"], { className: styles.calloutIcon, iconName: 'Link' }),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: styles.calloutText }, _CompositeHeader_resx__WEBPACK_IMPORTED_MODULE_5___default.a.copiedToClipboardLabel)))));
};
//# sourceMappingURL=CopyLinkButton.js.map

/***/ }),

/***/ "DgFN":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-shared-react@47.12.13_d89e40c38ccaa8bd6af6488f37cb196d/node_modules/@ms/odsp-shared-react/lib/components/CompositeHeader/subComponents/TeamsCustomActionsUtil.js ***!
  \*********************************************************************************************************************************************************************************************************************************/
/*! exports provided: onCopyLinkButtonClick, onRefreshButtonClick, onGoToBrowserButtonClick, teamsContextualMenuItems */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onCopyLinkButtonClick", function() { return onCopyLinkButtonClick; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onRefreshButtonClick", function() { return onRefreshButtonClick; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onGoToBrowserButtonClick", function() { return onGoToBrowserButtonClick; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "teamsContextualMenuItems", function() { return teamsContextualMenuItems; });
/* harmony import */ var _ms_odsp_utilities_lib_logging_events_Engagement_event__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ms/odsp-utilities/lib/logging/events/Engagement.event */ "cDPE");
/* harmony import */ var _CompositeHeader_resx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../CompositeHeader.resx */ "tDcW");
/* harmony import */ var _CompositeHeader_resx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_CompositeHeader_resx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ms_odsp_utilities_lib_uri_SimpleUri__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ms/odsp-utilities/lib/uri/SimpleUri */ "mbD+");



function onCopyLinkButtonClick(ev) {
    var element = document.createElement('input');
    document.body.appendChild(element);
    element.value = _convertUrlOriginalFormat();
    element.select();
    try {
        var successful = document.execCommand('copy');
        document.body.removeChild(element);
        var msg = successful ? 'successful' : 'unsuccessful';
        _ms_odsp_utilities_lib_logging_events_Engagement_event__WEBPACK_IMPORTED_MODULE_0__["Engagement"].logData({ name: 'TeamsSiteHeader.CopyLinkButtonClicked.' + msg });
    }
    catch (err) {
        _ms_odsp_utilities_lib_logging_events_Engagement_event__WEBPACK_IMPORTED_MODULE_0__["Engagement"].logData({ name: 'TeamsSiteHeader.CopyLinkFailed:' + err.toString() });
    }
}
function onRefreshButtonClick(ev) {
    _ms_odsp_utilities_lib_logging_events_Engagement_event__WEBPACK_IMPORTED_MODULE_0__["Engagement"].logData({ name: 'TeamsSiteHeader.RefreshButtonClicked' });
    window.location.reload();
}
function onGoToBrowserButtonClick(ev) {
    _ms_odsp_utilities_lib_logging_events_Engagement_event__WEBPACK_IMPORTED_MODULE_0__["Engagement"].logData({ name: 'TeamsSiteHeader.GoToBrowserButtonClicked' });
    window.open(_convertUrlOriginalFormat(), '_BLANK');
}
function _convertUrlOriginalFormat() {
    var currentUrl = window.location.href;
    currentUrl = _removeURLParameter(currentUrl, 'app');
    if (typeof URLSearchParams !== 'undefined') {
        // If its a doclib link, converting it to original doc lib link
        currentUrl = _convertDoclibUrlToWebUrl(currentUrl);
    }
    else {
        _ms_odsp_utilities_lib_logging_events_Engagement_event__WEBPACK_IMPORTED_MODULE_0__["Engagement"].logData({ name: 'TeamsSiteHeader.convertUrlOriginalFormat Doesnt support URLSearchParam' });
    }
    return currentUrl;
}
// To convert doclib url from listAllItems to allItems
function _convertDoclibUrlToWebUrl(currentUrl) {
    if (currentUrl.toLocaleLowerCase().includes('/listallitems.aspx')) {
        var url = new _ms_odsp_utilities_lib_uri_SimpleUri__WEBPACK_IMPORTED_MODULE_2__["default"](currentUrl);
        var urlparts = currentUrl.split('?');
        if (urlparts.length >= 2) {
            var params = new URLSearchParams(urlparts[1]);
            var listUrl = params.get('listUrl');
            params.delete('listUrl'); // Removing the listUrl query parm
            currentUrl = decodeURIComponent(url.authority +
                listUrl +
                (params.toString() ? (listUrl.indexOf('?') !== -1 ? '&' : '?') + params.toString() : ""));
            currentUrl = _AddingQSPToOpenAsModernPage(currentUrl);
        }
    }
    return currentUrl;
}
// For few Urls we have seen QSP for displaying as modern page is not proper
function _AddingQSPToOpenAsModernPage(url) {
    var urlparts = url.split('?');
    if (urlparts.length >= 2) {
        var params = new URLSearchParams(urlparts[1]);
        params.has('p') ? params.set('p', '1') : params.append('p', '1');
        return decodeURIComponent(urlparts[0] + '?' + params.toString());
    }
    return url + '?p=1';
}
function _removeURLParameter(url, parameter) {
    var urlparts = url.split('?');
    if (urlparts.length >= 2) {
        var params = new URLSearchParams(urlparts[1]);
        params.delete(parameter);
        return decodeURIComponent(urlparts[0] + (params.toString() ? '?' + params.toString() : ""));
    }
    return url;
}
function teamsContextualMenuItems() {
    var actionItems = [];
    var CopyLinkMenuItem = {
        name: _CompositeHeader_resx__WEBPACK_IMPORTED_MODULE_1___default.a.copyLinkLabel,
        key: 'CopyLink',
        iconProps: { iconName: 'Link' },
        onClick: onCopyLinkButtonClick
    };
    actionItems.push(CopyLinkMenuItem);
    var RefreshMenuItem = {
        name: _CompositeHeader_resx__WEBPACK_IMPORTED_MODULE_1___default.a.refreshLabel,
        key: 'Refresh',
        iconProps: { iconName: 'Refresh' },
        onClick: onRefreshButtonClick
    };
    actionItems.push(RefreshMenuItem);
    var GotoBrowserMenuItem = {
        name: _CompositeHeader_resx__WEBPACK_IMPORTED_MODULE_1___default.a.openInBrowserLabel,
        key: 'GotoBrowser',
        iconProps: { iconName: 'Globe' },
        onClick: onGoToBrowserButtonClick
    };
    actionItems.push(GotoBrowserMenuItem);
    return actionItems;
}
//# sourceMappingURL=TeamsCustomActionsUtil.js.map

/***/ }),

/***/ "IjTg":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-shared-react@47.12.13_d89e40c38ccaa8bd6af6488f37cb196d/node_modules/@ms/odsp-shared-react/lib/components/CompositeHeader/subComponents/RefreshButton.js ***!
  \************************************************************************************************************************************************************************************************************************/
/*! exports provided: RefreshButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RefreshButton", function() { return RefreshButton; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var office_ui_fabric_react_lib_utilities_decorators_withResponsiveMode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! office-ui-fabric-react/lib/utilities/decorators/withResponsiveMode */ "5qgq");
/* harmony import */ var office_ui_fabric_react_lib_utilities_decorators_withResponsiveMode__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(office_ui_fabric_react_lib_utilities_decorators_withResponsiveMode__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var office_ui_fabric_react_lib_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! office-ui-fabric-react/lib/Button */ "epn0");
/* harmony import */ var _CompositeHeader_resx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../CompositeHeader.resx */ "tDcW");
/* harmony import */ var _CompositeHeader_resx__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_CompositeHeader_resx__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ms_odsp_utilities_lib_logging_events_Engagement_event__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ms/odsp-utilities/lib/logging/events/Engagement.event */ "cDPE");
/* harmony import */ var _TeamsCustomActionsUtil__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./TeamsCustomActionsUtil */ "DgFN");






/**
 * This button only appears on hub sites. It launches the create group panel in order to create and join the site to a hub in one go.
 */
var RefreshButton = function (props) {
    _ms_odsp_utilities_lib_logging_events_Engagement_event__WEBPACK_IMPORTED_MODULE_4__["Engagement"].logData({ name: 'RefreshButton.Rendered' });
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](office_ui_fabric_react_lib_Button__WEBPACK_IMPORTED_MODULE_2__["ActionButton"], { iconProps: { iconName: 'Refresh' }, title: _CompositeHeader_resx__WEBPACK_IMPORTED_MODULE_3___default.a.refreshLabel, ariaLabel: _CompositeHeader_resx__WEBPACK_IMPORTED_MODULE_3___default.a.refreshAriaLabel, "data-automationid": 'RefreshButton', className: 'ms-CompositeHeader-collapsible', onClick: _TeamsCustomActionsUtil__WEBPACK_IMPORTED_MODULE_5__["onRefreshButtonClick"], disabled: props.responsiveMode < office_ui_fabric_react_lib_utilities_decorators_withResponsiveMode__WEBPACK_IMPORTED_MODULE_1__["ResponsiveMode"].small, style: { marginRight: '16px', fontSize: 'inherit' } }));
};
//# sourceMappingURL=RefreshButton.js.map

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

/***/ "uQmm":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-shared-react@47.12.13_d89e40c38ccaa8bd6af6488f37cb196d/node_modules/@ms/odsp-shared-react/lib/components/CompositeHeader/subComponents/TeamsCustomActionButtons.js ***!
  \***********************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _CopyLinkButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CopyLinkButton */ "9mcA");
/* harmony import */ var _RefreshButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./RefreshButton */ "IjTg");
/* harmony import */ var _GoToBrowserButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./GoToBrowserButton */ "y6P5");
/* harmony import */ var _TeamsCustomActionsUtil__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./TeamsCustomActionsUtil */ "DgFN");

/**
 * @file TeamsCustomActionButton.tsx
 * @Copyright (c) Microsoft Corporation.  All rights reserved.
 *
 */





/**
 * TeamsCustomActionButtons class component
 * @public
 */
var TeamsCustomActionButton = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(TeamsCustomActionButton, _super);
    function TeamsCustomActionButton(props) {
        var _this = _super.call(this, props) || this;
        _this.render = function () {
            return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null,
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_CopyLinkButton__WEBPACK_IMPORTED_MODULE_2__["CopyLinkButton"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, { copyLinkAction: _TeamsCustomActionsUtil__WEBPACK_IMPORTED_MODULE_5__["onCopyLinkButtonClick"], responsiveMode: _this.props.responsiveMode })),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_RefreshButton__WEBPACK_IMPORTED_MODULE_3__["RefreshButton"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, { refreshAction: _TeamsCustomActionsUtil__WEBPACK_IMPORTED_MODULE_5__["onRefreshButtonClick"], responsiveMode: _this.props.responsiveMode })),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_GoToBrowserButton__WEBPACK_IMPORTED_MODULE_4__["GoToBrowserButton"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, { goToBrowserAction: _TeamsCustomActionsUtil__WEBPACK_IMPORTED_MODULE_5__["onGoToBrowserButtonClick"], responsiveMode: _this.props.responsiveMode }))));
        };
        return _this;
    }
    return TeamsCustomActionButton;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));
/* harmony default export */ __webpack_exports__["default"] = (TeamsCustomActionButton);
//# sourceMappingURL=TeamsCustomActionButtons.js.map

/***/ }),

/***/ "y6P5":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-shared-react@47.12.13_d89e40c38ccaa8bd6af6488f37cb196d/node_modules/@ms/odsp-shared-react/lib/components/CompositeHeader/subComponents/GoToBrowserButton.js ***!
  \****************************************************************************************************************************************************************************************************************************/
/*! exports provided: GoToBrowserButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoToBrowserButton", function() { return GoToBrowserButton; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var office_ui_fabric_react_lib_utilities_decorators_withResponsiveMode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! office-ui-fabric-react/lib/utilities/decorators/withResponsiveMode */ "5qgq");
/* harmony import */ var office_ui_fabric_react_lib_utilities_decorators_withResponsiveMode__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(office_ui_fabric_react_lib_utilities_decorators_withResponsiveMode__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var office_ui_fabric_react_lib_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! office-ui-fabric-react/lib/Button */ "epn0");
/* harmony import */ var _CompositeHeader_resx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../CompositeHeader.resx */ "tDcW");
/* harmony import */ var _CompositeHeader_resx__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_CompositeHeader_resx__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ms_odsp_utilities_lib_logging_events_Engagement_event__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ms/odsp-utilities/lib/logging/events/Engagement.event */ "cDPE");
/* harmony import */ var _TeamsCustomActionsUtil__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./TeamsCustomActionsUtil */ "DgFN");






/**
 * This button only appears on hub sites. It launches the create group panel in order to create and join the site to a hub in one go.
 */
var GoToBrowserButton = function (props) {
    _ms_odsp_utilities_lib_logging_events_Engagement_event__WEBPACK_IMPORTED_MODULE_4__["Engagement"].logData({ name: 'GoToBrowserButton.Rendered' });
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](office_ui_fabric_react_lib_Button__WEBPACK_IMPORTED_MODULE_2__["ActionButton"], { iconProps: { iconName: 'Globe' }, title: _CompositeHeader_resx__WEBPACK_IMPORTED_MODULE_3___default.a.openInBrowserLabel, ariaLabel: _CompositeHeader_resx__WEBPACK_IMPORTED_MODULE_3___default.a.openInBrowserAriaLabel, "data-automationid": 'GoToBrowserButton', className: 'ms-CompositeHeader-collapsible', onClick: _TeamsCustomActionsUtil__WEBPACK_IMPORTED_MODULE_5__["onGoToBrowserButtonClick"], disabled: props.responsiveMode < office_ui_fabric_react_lib_utilities_decorators_withResponsiveMode__WEBPACK_IMPORTED_MODULE_1__["ResponsiveMode"].small, style: { marginRight: '16px', fontSize: 'inherit' } }));
};
//# sourceMappingURL=GoToBrowserButton.js.map

/***/ })

}]);
//# sourceMappingURL=chunk.vendors~shared-react-teamscustomaction_[locale].js.map