(window["webpackJsonp_1e2cdec9_1360_4295_b73c_98d6f51866d5_0_1_0"] = window["webpackJsonp_1e2cdec9_1360_4295_b73c_98d6f51866d5_0_1_0"] || []).push([["vendors~shared-react-webtemplatesgalleryf~b5cc52d2"],{

/***/ "4lbg":
/*!******************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-utilities@29.7.9_5d977624104b06c7bcaa2de974ff51f1/node_modules/@ms/odsp-utilities/lib/browser/ResponsiveUI.js ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: ResponsiveUIEvents, ResponsiveUI, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResponsiveUIEvents", function() { return ResponsiveUIEvents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResponsiveUI", function() { return ResponsiveUI; });
/* harmony import */ var _events_EventGroup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../events/EventGroup */ "Oa+Z");
/* harmony import */ var _scope_Scope__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scope/Scope */ "ZjtH");


/**
 * Event names fired when ResponsiveUI properties change
 */
var ResponsiveUIEvents = {
    // TODO make this a const enum
    formFactorChange: 'formFactorChange',
    hamburgerVisibilityChange: 'hamburgerVisibilityChange',
    showLabelsChange: 'showCommandLabelsChange'
};
// These values are matched up with Fabric's LESS definitions
var cssClassFromWindowSize = {
    Small: 'sm',
    Medium: 'md',
    Large: 'lg',
    XLarge: 'xlg',
    XXLarge: 'xxlg',
    XXXLarge: 'xxxlg',
    XXXXLarge: 'xxxxlg'
};
var defaultBreakpoints = {
    Small: 480,
    Medium: 640,
    Large: 1024,
    XLarge: 1366,
    XXLarge: 1920,
    XXXLarge: 2560,
    XXXXLarge: Infinity
};
var ResponsiveUI = /** @class */ (function () {
    function ResponsiveUI(params, dependencies) {
        this._scope = new _scope_Scope__WEBPACK_IMPORTED_MODULE_1__["default"]();
        this._events = new (this._scope.attached(_events_EventGroup__WEBPACK_IMPORTED_MODULE_0__["default"]))(this);
        this._events.on(window, 'resize, orientationchange', this._onContainerResize.bind(this));
        var breakpoints = dependencies.breakpoints;
        this._breakpoints = typeof breakpoints === 'function' ? breakpoints : function () { return breakpoints; };
        this._windowWidth = 0;
        this._windowHeight = 0;
        this._onContainerResize();
    }
    ResponsiveUI.reduceBreakpoints = function (breakpoints, newSmall) {
        return {
            Small: newSmall,
            Medium: breakpoints.Small,
            Large: breakpoints.Medium,
            XLarge: breakpoints.Large,
            XXLarge: breakpoints.XLarge,
            XXXLarge: breakpoints.XXLarge,
            XXXXLarge: Infinity
        };
    };
    ResponsiveUI.determineWindowSize = function (elementWidth, breakpoints) {
        if (breakpoints === void 0) { breakpoints = defaultBreakpoints; }
        if (elementWidth === 0) {
            return 'Medium';
        }
        // Using defaultBreakpoints as the key space to enforce ordering.
        for (var key in defaultBreakpoints) {
            if (elementWidth < breakpoints[key]) {
                return key;
            }
        }
    };
    ResponsiveUI.determineCssClass = function (formFactor) {
        return cssClassFromWindowSize[formFactor];
    };
    /** Calculates the width of the scroll bar of the given browser/OS */
    ResponsiveUI.getScrollbarWidth = function () {
        var outer = document.createElement('div');
        var inner = document.createElement('div');
        var outerStyle = outer.style;
        outerStyle.visibility = 'hidden';
        outerStyle.width = '100px';
        outerStyle.msOverflowStyle = 'scrollbar';
        outerStyle.overflow = 'scroll';
        inner.style.width = '100%';
        document.body.appendChild(outer);
        outer.appendChild(inner);
        var widthNoScroll = outer.offsetWidth;
        var widthWithScroll = inner.offsetWidth;
        outer.parentNode.removeChild(outer);
        var scrollbarWidth = widthNoScroll - widthWithScroll;
        this.getScrollbarWidth = function () { return scrollbarWidth; };
        return scrollbarWidth;
    };
    Object.defineProperty(ResponsiveUI.prototype, "windowWidth", {
        /** Current width of the window */
        get: function () {
            return this._windowWidth;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ResponsiveUI.prototype, "windowHeight", {
        /** Current height of the window */
        get: function () {
            return this._windowHeight;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ResponsiveUI.prototype, "formFactorSize", {
        /** Current window size */
        get: function () {
            return this._formFactorSize;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ResponsiveUI.prototype, "isHamburgerVisible", {
        /** Indicates whether a hamburger should be visible or not */
        get: function () {
            return this._isHamburgerVisible;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ResponsiveUI.prototype, "showLabels", {
        /** Whether or not to show command labels at the current form factor when using LabelVisibility.responsive */
        get: function () {
            return this._showLabels;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ResponsiveUI.prototype, "cssClass", {
        /** A css class that can be used anywhere for responsive css classes */
        get: function () {
            return this._cssClass;
        },
        enumerable: true,
        configurable: true
    });
    ResponsiveUI.prototype.dispose = function () {
        this._scope.dispose();
    };
    /**
     * Compares two {WindowSize} values.
     * @returns positive if a > b, negative if a < b, 0 if a === b.
     */
    ResponsiveUI.prototype.compareSize = function (a, b) {
        var breakpoints = this._breakpoints();
        return breakpoints[a] - breakpoints[b];
    };
    /**
     * Method child classes can use for custom post-resize logic (such as observable updates).
     */
    ResponsiveUI.prototype._afterContainerResize = function () {
        // For child classes only
    };
    /**
     * Method called when the container resizes.
     * For custom logic, prefer overriding _afterContainerResize rather than this method.
     */
    ResponsiveUI.prototype._onContainerResize = function () {
        var body = document.body, documentElement = document.documentElement;
        var windowWidth = (this._windowHeight = documentElement.clientWidth || body.clientWidth);
        this._windowWidth = documentElement.clientHeight || body.clientHeight;
        var oldFormFactorSize = this._formFactorSize;
        var formFactorSize = (this._formFactorSize = ResponsiveUI.determineWindowSize(windowWidth, this._breakpoints()));
        this._cssClass = ResponsiveUI.determineCssClass(formFactorSize);
        // This is determined by the suite nav, so it always uses default breakpoints.
        var oldIsHamburgerVisible = this._isHamburgerVisible;
        this._isHamburgerVisible = windowWidth < defaultBreakpoints.Large;
        var oldShowLabels = this._showLabels;
        this._showLabels = this.compareSize(formFactorSize, 'Medium') > 0;
        // After updating state, raise events if the values have changed.
        if (oldFormFactorSize && formFactorSize !== oldFormFactorSize) {
            this._events.raise(ResponsiveUIEvents.formFactorChange);
        }
        if (typeof oldIsHamburgerVisible === 'boolean' && oldIsHamburgerVisible !== this._isHamburgerVisible) {
            this._events.raise(ResponsiveUIEvents.hamburgerVisibilityChange);
        }
        if (typeof oldShowLabels === 'boolean' && oldShowLabels !== this._showLabels) {
            this._events.raise(ResponsiveUIEvents.showLabelsChange);
        }
        this._afterContainerResize();
    };
    ResponsiveUI.DEFAULT_BREAKPOINTS = defaultBreakpoints;
    /** The width of the hidden scrollbars in Mac */
    ResponsiveUI.MAC_SCROLL_BAR_WIDTH = 8;
    return ResponsiveUI;
}());

/* harmony default export */ __webpack_exports__["default"] = (ResponsiveUI);
//# sourceMappingURL=ResponsiveUI.js.map

/***/ }),

/***/ "Dbt/":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/shared-react-web-templates@0.1.240_078bb01e0c4e433dbeb6410f4127eb9f/node_modules/@ms/shared-react-web-templates/lib/firstRunDialog/WebTemplatesGalleryFirstRunDialog.scss.js ***!
  \****************************************************************************************************************************************************************************************************************************************/
/*! exports provided: webTemplatesGalleryFirstRunDialogModal, webTemplatesGalleryFirstRunDialogRoot, webTemplatesGalleryFirstRunDialogContent, webTemplatesGalleryFirstRunDialogImageContainer, webTemplatesGalleryFirstRunDialogTitle, webTemplatesGalleryFirstRunDialogTitleLabel, webTemplatesGalleryFirstRunDialogDescription1, webTemplatesGalleryFirstRunDialogDescription2, webTemplatesGalleryFirstRunDialogCloseBtnContainer, webTemplatesGalleryFirstRunDialogCloseBtn, webTemplatesGalleryFirstRunDialogButtons, webTemplatesGalleryFirstRunDialogContinueButton, webTemplatesGalleryFirstRunDialogSettingIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "webTemplatesGalleryFirstRunDialogModal", function() { return webTemplatesGalleryFirstRunDialogModal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "webTemplatesGalleryFirstRunDialogRoot", function() { return webTemplatesGalleryFirstRunDialogRoot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "webTemplatesGalleryFirstRunDialogContent", function() { return webTemplatesGalleryFirstRunDialogContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "webTemplatesGalleryFirstRunDialogImageContainer", function() { return webTemplatesGalleryFirstRunDialogImageContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "webTemplatesGalleryFirstRunDialogTitle", function() { return webTemplatesGalleryFirstRunDialogTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "webTemplatesGalleryFirstRunDialogTitleLabel", function() { return webTemplatesGalleryFirstRunDialogTitleLabel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "webTemplatesGalleryFirstRunDialogDescription1", function() { return webTemplatesGalleryFirstRunDialogDescription1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "webTemplatesGalleryFirstRunDialogDescription2", function() { return webTemplatesGalleryFirstRunDialogDescription2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "webTemplatesGalleryFirstRunDialogCloseBtnContainer", function() { return webTemplatesGalleryFirstRunDialogCloseBtnContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "webTemplatesGalleryFirstRunDialogCloseBtn", function() { return webTemplatesGalleryFirstRunDialogCloseBtn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "webTemplatesGalleryFirstRunDialogButtons", function() { return webTemplatesGalleryFirstRunDialogButtons; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "webTemplatesGalleryFirstRunDialogContinueButton", function() { return webTemplatesGalleryFirstRunDialogContinueButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "webTemplatesGalleryFirstRunDialogSettingIcon", function() { return webTemplatesGalleryFirstRunDialogSettingIcon; });
/* harmony import */ var _microsoft_load_themed_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/load-themed-styles */ "jOlS");
/* harmony import */ var _microsoft_load_themed_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_load_themed_styles__WEBPACK_IMPORTED_MODULE_0__);
/* tslint:disable */

Object(_microsoft_load_themed_styles__WEBPACK_IMPORTED_MODULE_0__["loadStyles"])([{ "rawString": ".webTemplatesGalleryFirstRunDialogModal_5546e905{border-radius:6px}.webTemplatesGalleryFirstRunDialogRoot_5546e905{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.webTemplatesGalleryFirstRunDialogContent_5546e905{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-ms-flex-wrap:nowrap;flex-wrap:nowrap;overflow:hidden;padding:16px 24px}@media (min-width: 320px){.webTemplatesGalleryFirstRunDialogImageContainer_5546e905{width:239px;height:145px}}@media (min-width: 480px){.webTemplatesGalleryFirstRunDialogImageContainer_5546e905{width:328px;height:199px}}@media (min-width: 640px){.webTemplatesGalleryFirstRunDialogImageContainer_5546e905{width:457px;height:276px}}@media (min-width: 1024px){.webTemplatesGalleryFirstRunDialogImageContainer_5546e905{width:491px;height:297px}}.webTemplatesGalleryFirstRunDialogTitle_5546e905{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;margin-bottom:16px}.webTemplatesGalleryFirstRunDialogTitle_5546e905 .webTemplatesGalleryFirstRunDialogTitleLabel_5546e905{font-size:" }, { "theme": "xLargeFontSize", "defaultValue": "20px" }, { "rawString": ";font-weight:" }, { "theme": "xLargeFontWeight", "defaultValue": "600" }, { "rawString": "}.webTemplatesGalleryFirstRunDialogImageContainer_5546e905{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-ms-flex-item-align:center;align-self:center;margin-bottom:24px}.webTemplatesGalleryFirstRunDialogDescription1_5546e905{font-size:" }, { "theme": "mediumFontSize", "defaultValue": "14px" }, { "rawString": ";font-weight:" }, { "theme": "mediumFontWeight", "defaultValue": "400" }, { "rawString": ";display:-webkit-box;display:-ms-flexbox;display:flex;color:" }, { "theme": "neutralSecondary", "defaultValue": "#605e5c" }, { "rawString": ";text-align:center}.webTemplatesGalleryFirstRunDialogDescription2_5546e905{font-size:" }, { "theme": "mediumFontSize", "defaultValue": "14px" }, { "rawString": ";font-weight:" }, { "theme": "mediumFontWeight", "defaultValue": "400" }, { "rawString": ";font-weight:600;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;text-align:center;color:" }, { "theme": "neutralSecondary", "defaultValue": "#605e5c" }, { "rawString": ";margin-bottom:24px}.webTemplatesGalleryFirstRunDialogCloseBtnContainer_5546e905{-webkit-box-ordinal-group:0;-ms-flex-order:-1;order:-1;height:0;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end}.webTemplatesGalleryFirstRunDialogCloseBtnContainer_5546e905 i{color:" }, { "theme": "neutralPrimary", "defaultValue": "#323130" }, { "rawString": "}.webTemplatesGalleryFirstRunDialogCloseBtnContainer_5546e905 .webTemplatesGalleryFirstRunDialogCloseBtn_5546e905{margin-top:16px}[dir='ltr'] .webTemplatesGalleryFirstRunDialogCloseBtnContainer_5546e905 .webTemplatesGalleryFirstRunDialogCloseBtn_5546e905{margin-right:16px}[dir='rtl'] .webTemplatesGalleryFirstRunDialogCloseBtnContainer_5546e905 .webTemplatesGalleryFirstRunDialogCloseBtn_5546e905{margin-left:16px}.webTemplatesGalleryFirstRunDialogButtons_5546e905{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.webTemplatesGalleryFirstRunDialogContinueButton_5546e905{margin-left:12px}.webTemplatesGalleryFirstRunDialogSettingIcon_5546e905{font-size:12;padding-top:4px}[dir='ltr'] .webTemplatesGalleryFirstRunDialogSettingIcon_5546e905{margin-left:4px}[dir='rtl'] .webTemplatesGalleryFirstRunDialogSettingIcon_5546e905{margin-right:4px}\n" }]);
var webTemplatesGalleryFirstRunDialogModal = "webTemplatesGalleryFirstRunDialogModal_5546e905";
var webTemplatesGalleryFirstRunDialogRoot = "webTemplatesGalleryFirstRunDialogRoot_5546e905";
var webTemplatesGalleryFirstRunDialogContent = "webTemplatesGalleryFirstRunDialogContent_5546e905";
var webTemplatesGalleryFirstRunDialogImageContainer = "webTemplatesGalleryFirstRunDialogImageContainer_5546e905";
var webTemplatesGalleryFirstRunDialogTitle = "webTemplatesGalleryFirstRunDialogTitle_5546e905";
var webTemplatesGalleryFirstRunDialogTitleLabel = "webTemplatesGalleryFirstRunDialogTitleLabel_5546e905";
var webTemplatesGalleryFirstRunDialogDescription1 = "webTemplatesGalleryFirstRunDialogDescription1_5546e905";
var webTemplatesGalleryFirstRunDialogDescription2 = "webTemplatesGalleryFirstRunDialogDescription2_5546e905";
var webTemplatesGalleryFirstRunDialogCloseBtnContainer = "webTemplatesGalleryFirstRunDialogCloseBtnContainer_5546e905";
var webTemplatesGalleryFirstRunDialogCloseBtn = "webTemplatesGalleryFirstRunDialogCloseBtn_5546e905";
var webTemplatesGalleryFirstRunDialogButtons = "webTemplatesGalleryFirstRunDialogButtons_5546e905";
var webTemplatesGalleryFirstRunDialogContinueButton = "webTemplatesGalleryFirstRunDialogContinueButton_5546e905";
var webTemplatesGalleryFirstRunDialogSettingIcon = "webTemplatesGalleryFirstRunDialogSettingIcon_5546e905";
//# sourceMappingURL=WebTemplatesGalleryFirstRunDialog.scss.js.map

/***/ }),

/***/ "Hh3u":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/shared-react-web-templates@0.1.240_078bb01e0c4e433dbeb6410f4127eb9f/node_modules/@ms/shared-react-web-templates/lib/webTemplatesGalleryDialog/WebTemplatesGalleryDialogLoader.js ***!
  \********************************************************************************************************************************************************************************************************************************************/
/*! exports provided: WebTemplatesGalleryDialogLoader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebTemplatesGalleryDialogLoader", function() { return WebTemplatesGalleryDialogLoader; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ms_items_view_lib_private_utilities_components_Async__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ms/items-view/lib/private/utilities/components/Async */ "uEI4");



var WebTemplatesGalleryDialog = Object(_ms_items_view_lib_private_utilities_components_Async__WEBPACK_IMPORTED_MODULE_2__["asAsync"])(function () { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(void 0, void 0, void 0, function () {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, __webpack_require__.e(/*! import() | shared-react-webtemplatesgallerydialog */ "shared-react-webtemplatesgallerydialog").then(__webpack_require__.bind(null, /*! ./WebTemplatesGalleryDialog */ "/BN8"))];
            case 1: return [2 /*return*/, _a.sent()];
        }
    });
}); });
var WebTemplatesGalleryDialogLoader = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(WebTemplatesGalleryDialogLoader, _super);
    function WebTemplatesGalleryDialogLoader(props) {
        return _super.call(this, props) || this;
    }
    WebTemplatesGalleryDialogLoader.prototype.render = function () {
        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](WebTemplatesGalleryDialog, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.props));
    };
    return WebTemplatesGalleryDialogLoader;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));

//# sourceMappingURL=WebTemplatesGalleryDialogLoader.js.map

/***/ }),

/***/ "UdI1":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/shared-react-web-templates@0.1.240_078bb01e0c4e433dbeb6410f4127eb9f/node_modules/@ms/shared-react-web-templates/lib/interfaces/IWebTemplatesGallery.js ***!
  \******************************************************************************************************************************************************************************************************************/
/*! exports provided: WebTemplatesGalleryMode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebTemplatesGalleryMode", function() { return WebTemplatesGalleryMode; });
var WebTemplatesGalleryMode;
(function (WebTemplatesGalleryMode) {
    WebTemplatesGalleryMode[WebTemplatesGalleryMode["default"] = 0] = "default";
})(WebTemplatesGalleryMode || (WebTemplatesGalleryMode = {}));
//# sourceMappingURL=IWebTemplatesGallery.js.map

/***/ }),

/***/ "ZjtH":
/*!*********************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-utilities@29.7.9_5d977624104b06c7bcaa2de974ff51f1/node_modules/@ms/odsp-utilities/lib/scope/Scope.js ***!
  \*********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ms/odsp-utilities-bundle */ "y88i");
/* harmony import */ var _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_0__["Scope"]; });

// Loading @ms/odsp-utilities/./lib/scope/Scope.js



/***/ }),

/***/ "awAE":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/shared-react-web-templates@0.1.240_078bb01e0c4e433dbeb6410f4127eb9f/node_modules/@ms/shared-react-web-templates/lib/firstRunDialog/WebTemplatesGalleryFirstRunDialog.js ***!
  \***********************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var office_ui_fabric_react_lib_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! office-ui-fabric-react/lib/Button */ "epn0");
/* harmony import */ var office_ui_fabric_react_lib_Icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! office-ui-fabric-react/lib/Icon */ "56LG");
/* harmony import */ var office_ui_fabric_react_lib_Icon__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(office_ui_fabric_react_lib_Icon__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var office_ui_fabric_react_lib_Label__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! office-ui-fabric-react/lib/Label */ "wMNn");
/* harmony import */ var office_ui_fabric_react_lib_Modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! office-ui-fabric-react/lib/Modal */ "Vr3T");
/* harmony import */ var _ms_odsp_datasources_lib_Web__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ms/odsp-datasources/lib/Web */ "s50i");
/* harmony import */ var _webTemplatesGalleryDialog_WebTemplatesGalleryDialogLoader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../webTemplatesGalleryDialog/WebTemplatesGalleryDialogLoader */ "Hh3u");
/* harmony import */ var _interfaces_IWebTemplatesGallery__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../interfaces/IWebTemplatesGallery */ "UdI1");
/* harmony import */ var _WebTemplatesGalleryFirstRunUtil__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./WebTemplatesGalleryFirstRunUtil */ "yGrp");
/* harmony import */ var _ms_odsp_utilities_lib_logging_events_Engagement_event__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ms/odsp-utilities/lib/logging/events/Engagement.event */ "cDPE");
/* harmony import */ var _ms_odsp_utilities_lib_browser_ResponsiveUI__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ms/odsp-utilities/lib/browser/ResponsiveUI */ "4lbg");
/* harmony import */ var _ms_sp_experiments_lib_flightsonrails_SPExperiment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ms/sp-experiments/lib/flightsonrails/SPExperiment */ "D8Gs");
/* harmony import */ var _WebTemplatesGalleryFirstRunDialog_scss__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./WebTemplatesGalleryFirstRunDialog.scss */ "Dbt/");
/* harmony import */ var _WebTemplatesGalleryFirstRunDialog_resx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./WebTemplatesGalleryFirstRunDialog.resx */ "upBV");
/* harmony import */ var _WebTemplatesGalleryFirstRunDialog_resx__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_WebTemplatesGalleryFirstRunDialog_resx__WEBPACK_IMPORTED_MODULE_14__);















var SiteTemplatesExperiment = 90020;
var SPDF_FARM_LABEL = 'MSIT_SPDF_1_Content';
var IS_RUNNING_TAB = '_isRunningTABTest';
var WebTemplatesGalleryFirstRunDialog = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(WebTemplatesGalleryFirstRunDialog, _super);
    /**
     * FirstRunDialog constructor: State and private variable are initialized
     */
    function WebTemplatesGalleryFirstRunDialog(props) {
        var _this = _super.call(this, props) || this;
        _this._allowRender = function () {
            return (!window.sessionStorage.getItem(IS_RUNNING_TAB) &&
                _this._pageContext &&
                (_this._pageContext.farmLabel === SPDF_FARM_LABEL ||
                    Object(_ms_sp_experiments_lib_flightsonrails_SPExperiment__WEBPACK_IMPORTED_MODULE_12__["getVariantAndLogExposure"])(SiteTemplatesExperiment, _this._pageContext) === 1) &&
                Object(_WebTemplatesGalleryFirstRunUtil__WEBPACK_IMPORTED_MODULE_9__["shouldRenderWebTemplatesGalleryFirstRun"])(_this._pageContext));
        };
        _this._closeModal = function () {
            _ms_odsp_utilities_lib_logging_events_Engagement_event__WEBPACK_IMPORTED_MODULE_10__["Engagement"].logData({
                name: 'SiteTemplates.Picker.FREDecline​​'
            });
            _this.setState({ isModalOpen: false });
            _this.props.onDismiss && _this.props.onDismiss();
        };
        _this._launchWebTemplatesGallery = function () {
            _ms_odsp_utilities_lib_logging_events_Engagement_event__WEBPACK_IMPORTED_MODULE_10__["Engagement"].logData({
                name: 'SiteTemplates.Picker.FREContinue'
            });
            _this.setState({ isModalOpen: false, shouldRenderWebTemplatesGallery: true });
        };
        _this._pageContext = props.pageContext;
        _this._webDataSource = new _ms_odsp_datasources_lib_Web__WEBPACK_IMPORTED_MODULE_6__["WebDataSource"](_this._pageContext);
        _this.state = {
            isModalOpen: false,
            shouldRenderWebTemplatesGallery: false
        };
        return _this;
    }
    WebTemplatesGalleryFirstRunDialog.prototype.componentDidMount = function () {
        var _this = this;
        if (this._allowRender()) {
            _ms_odsp_utilities_lib_logging_events_Engagement_event__WEBPACK_IMPORTED_MODULE_10__["Engagement"].logData({
                name: 'SiteTemplates.Picker.FRERender​'
            });
            this.setState({ isModalOpen: true });
        }
        else {
            this.setState({ isModalOpen: false });
        }
        // Should set WebTemplatesGalleryFirstRunEnabled to false, if it's rendered or not allow to render.
        if (this._webDataSource) {
            this._webDataSource.setWebTemplatesGalleryFirstRunEnabled(false);
            // Because some async feature activation might revert the web flag after web.update(), will try to re-set the flag in 15 seconds.
            setTimeout(function () {
                _this._webDataSource
                    .getWebTemplatesGalleryFirstRunEnabled(true /* bypassCache */)
                    .then(function (isWebTemplatesGalleryFirstRunEnabled) {
                    if (isWebTemplatesGalleryFirstRunEnabled) {
                        _this._webDataSource.setWebTemplatesGalleryFirstRunEnabled(false);
                    }
                });
            }, 15000);
        }
    };
    WebTemplatesGalleryFirstRunDialog.prototype.render = function () {
        var _a = this.state, isModalOpen = _a.isModalOpen, shouldRenderWebTemplatesGallery = _a.shouldRenderWebTemplatesGallery;
        var modalSize = this._getInitialSize();
        var imageUrl = this.props.imageUrls.webTemplatesFirstRunIllustration;
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null,
            isModalOpen && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](office_ui_fabric_react_lib_Modal__WEBPACK_IMPORTED_MODULE_5__["Modal"], { styles: { main: [_WebTemplatesGalleryFirstRunDialog_scss__WEBPACK_IMPORTED_MODULE_13__["webTemplatesGalleryFirstRunDialogModal"]] }, isBlocking: true, isDarkOverlay: true, isOpen: isModalOpen },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: _WebTemplatesGalleryFirstRunDialog_scss__WEBPACK_IMPORTED_MODULE_13__["webTemplatesGalleryFirstRunDialogRoot"], style: modalSize },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: _WebTemplatesGalleryFirstRunDialog_scss__WEBPACK_IMPORTED_MODULE_13__["webTemplatesGalleryFirstRunDialogContent"] },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: _WebTemplatesGalleryFirstRunDialog_scss__WEBPACK_IMPORTED_MODULE_13__["webTemplatesGalleryFirstRunDialogTitle"] },
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](office_ui_fabric_react_lib_Label__WEBPACK_IMPORTED_MODULE_4__["Label"], { role: 'heading', "aria-level": 1, className: _WebTemplatesGalleryFirstRunDialog_scss__WEBPACK_IMPORTED_MODULE_13__["webTemplatesGalleryFirstRunDialogTitleLabel"] }, _WebTemplatesGalleryFirstRunDialog_resx__WEBPACK_IMPORTED_MODULE_14___default.a.firstRunTitleText)),
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: _WebTemplatesGalleryFirstRunDialog_scss__WEBPACK_IMPORTED_MODULE_13__["webTemplatesGalleryFirstRunDialogImageContainer"], style: {
                                backgroundImage: "url(" + imageUrl + ")",
                                backgroundSize: 'contain',
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat'
                            } }),
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: _WebTemplatesGalleryFirstRunDialog_scss__WEBPACK_IMPORTED_MODULE_13__["webTemplatesGalleryFirstRunDialogDescription1"] }, _WebTemplatesGalleryFirstRunDialog_resx__WEBPACK_IMPORTED_MODULE_14___default.a.firstRunDescriptionText1),
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: _WebTemplatesGalleryFirstRunDialog_scss__WEBPACK_IMPORTED_MODULE_13__["webTemplatesGalleryFirstRunDialogDescription2"] },
                            _WebTemplatesGalleryFirstRunDialog_resx__WEBPACK_IMPORTED_MODULE_14___default.a.firstRunDescriptionText2,
                            Number(modalSize.width) < 448 ? undefined : (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](office_ui_fabric_react_lib_Icon__WEBPACK_IMPORTED_MODULE_3__["FontIcon"], { iconName: 'Settings', className: _WebTemplatesGalleryFirstRunDialog_scss__WEBPACK_IMPORTED_MODULE_13__["webTemplatesGalleryFirstRunDialogSettingIcon"] }))),
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: _WebTemplatesGalleryFirstRunDialog_scss__WEBPACK_IMPORTED_MODULE_13__["webTemplatesGalleryFirstRunDialogButtons"] },
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](office_ui_fabric_react_lib_Button__WEBPACK_IMPORTED_MODULE_2__["DefaultButton"], { className: 'webTemplatesGalleryFirstRunDialogCancelButton', key: 'WebTemplatesGalleryFirstRunDialogCancel', "data-automationid": 'WebTemplatesGalleryFirstRunDialogCancelButton', onClick: this._closeModal }, _WebTemplatesGalleryFirstRunDialog_resx__WEBPACK_IMPORTED_MODULE_14___default.a.cancelButtonText),
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](office_ui_fabric_react_lib_Button__WEBPACK_IMPORTED_MODULE_2__["PrimaryButton"], { className: _WebTemplatesGalleryFirstRunDialog_scss__WEBPACK_IMPORTED_MODULE_13__["webTemplatesGalleryFirstRunDialogContinueButton"], "data-automationid": 'WebTemplatesGalleryFirstRunDialogContinueButton', key: 'WebTemplatesGalleryFirstRunDialogContinue', onClick: this._launchWebTemplatesGallery }, _WebTemplatesGalleryFirstRunDialog_resx__WEBPACK_IMPORTED_MODULE_14___default.a.continueButtonText))),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: _WebTemplatesGalleryFirstRunDialog_scss__WEBPACK_IMPORTED_MODULE_13__["webTemplatesGalleryFirstRunDialogCloseBtnContainer"] },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](office_ui_fabric_react_lib_Button__WEBPACK_IMPORTED_MODULE_2__["IconButton"], { className: _WebTemplatesGalleryFirstRunDialog_scss__WEBPACK_IMPORTED_MODULE_13__["webTemplatesGalleryFirstRunDialogCloseBtn"], "data-automationid": 'WebTemplatesGalleryFirstRunDialogCloseButton', ariaLabel: _WebTemplatesGalleryFirstRunDialog_resx__WEBPACK_IMPORTED_MODULE_14___default.a.closeButtonAriaLabel, iconProps: { iconName: 'Cancel' }, onClick: this._closeModal }))))),
            shouldRenderWebTemplatesGallery && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_webTemplatesGalleryDialog_WebTemplatesGalleryDialogLoader__WEBPACK_IMPORTED_MODULE_7__["WebTemplatesGalleryDialogLoader"], { pageContext: this._pageContext, mode: _interfaces_IWebTemplatesGallery__WEBPACK_IMPORTED_MODULE_8__["WebTemplatesGalleryMode"].default }))));
    };
    // Attempt to prevent "jank" by calculating initial size.
    WebTemplatesGalleryFirstRunDialog.prototype._getInitialSize = function () {
        var width = 644;
        var height = 520;
        var windowWidth = window.innerWidth;
        var windowSize = _ms_odsp_utilities_lib_browser_ResponsiveUI__WEBPACK_IMPORTED_MODULE_11__["ResponsiveUI"].determineWindowSize(windowWidth);
        switch (windowSize) {
            case 'XXXXLarge':
            case 'XXXLarge':
            case 'XXLarge':
            case 'XLarge':
                break;
            case 'Large':
                width = 560;
                height = 510;
                break;
            case 'Medium':
                width = 448;
                height = 448;
                break;
            case 'Small':
                width = 288;
                height = 368;
                break;
            default:
        }
        return {
            width: width + 'px',
            height: height + 'px'
        };
    };
    return WebTemplatesGalleryFirstRunDialog;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));
/* harmony default export */ __webpack_exports__["default"] = (WebTemplatesGalleryFirstRunDialog);
//# sourceMappingURL=WebTemplatesGalleryFirstRunDialog.js.map

/***/ }),

/***/ "upBV":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/shared-react-web-templates@0.1.240_078bb01e0c4e433dbeb6410f4127eb9f/node_modules/@ms/shared-react-web-templates/lib/firstRunDialog/WebTemplatesGalleryFirstRunDialog.resx.js ***!
  \****************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var strings = {"firstRunTitleText":"Śţàŕţ ďēśĩĝńĩńĝ ŷōũŕ śĩţē","firstRunDescriptionText1":"ßŕōŵśē àńď ƥŕēvĩēŵ ŕēàďŷ-màďē śĩţē ţēmƥĺàţēś ţĥàţ ēńàƀĺē ŷōũ ţō ćōĺĺàƀōŕàţē ŵĩţĥ ŷōũŕ ţēàm àńď ćōmmũńĩćàţē ŵĩţĥ ōţĥēŕś. Ōŕ, ďēśĩĝń ŷōũŕ ōŵń śĩţē.","firstRunDescriptionText2":"Àďď ōŕ ćĥàńĝē ŷōũŕ ţēmƥĺàţē ũńďēŕ Śēţţĩńĝś","cancelButtonText":"Śţàŕţ ŵĩţĥ à ƀĺàńķ śĩţē","continueButtonText":"Śēĺēćţ à ţēmƥĺàţē","closeButtonAriaLabel":"Ćĺōśē"};
strings.default = strings;
module.exports = strings;

/***/ }),

/***/ "wMNn":
/*!************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/Label.js ***!
  \************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/office-ui-fabric-react-bundle */ "KL1q");
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
// Loading office-ui-fabric-react/./lib/Label.js


/***/ })

}]);
//# sourceMappingURL=chunk.vendors~shared-react-webtemplatesgalleryf~b5cc52d2_[locale].js.map