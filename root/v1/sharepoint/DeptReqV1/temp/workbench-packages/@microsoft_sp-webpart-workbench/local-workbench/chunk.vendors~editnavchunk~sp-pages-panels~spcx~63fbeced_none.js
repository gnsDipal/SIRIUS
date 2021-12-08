(window["webpackJsonp_1e2cdec9_1360_4295_b73c_98d6f51866d5_0_1_0"] = window["webpackJsonp_1e2cdec9_1360_4295_b73c_98d6f51866d5_0_1_0"] || []).push([["vendors~editnavchunk~sp-pages-panels~spcx~63fbeced"],{

/***/ "7lFk":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/Tooltip/Tooltip.js ***!
  \*********************************************************************************************************************************************************************************************/
/*! exports provided: Tooltip */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tooltip", function() { return Tooltip; });
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Utilities */ "mkpW");
/* harmony import */ var _Tooltip_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Tooltip.base */ "aXN2");
/* harmony import */ var _Tooltip_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Tooltip.styles */ "z8Le");



var Tooltip = Object(_Utilities__WEBPACK_IMPORTED_MODULE_0__["styled"])(_Tooltip_base__WEBPACK_IMPORTED_MODULE_1__["TooltipBase"], _Tooltip_styles__WEBPACK_IMPORTED_MODULE_2__["getStyles"], undefined, {
    scope: 'Tooltip',
});
//# sourceMappingURL=Tooltip.js.map

/***/ }),

/***/ "7vvN":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/Tooltip/TooltipHost.js ***!
  \*************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/office-ui-fabric-react-bundle */ "KL1q");
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
// Loading office-ui-fabric-react/./lib/components/Tooltip/TooltipHost.js


/***/ }),

/***/ "8vRq":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/Tooltip/TooltipHost.types.js ***!
  \*******************************************************************************************************************************************************************************************************/
/*! exports provided: TooltipOverflowMode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TooltipOverflowMode", function() { return TooltipOverflowMode; });
/**
 * {@docCategory Tooltip}
 */
var TooltipOverflowMode;
(function (TooltipOverflowMode) {
    /** Only show tooltip if parent DOM element is overflowing */
    TooltipOverflowMode[TooltipOverflowMode["Parent"] = 0] = "Parent";
    /**
     * Only show tooltip if tooltip host's content is overflowing.
     * Note that this does not check the children for overflow, only the TooltipHost root.
     */
    TooltipOverflowMode[TooltipOverflowMode["Self"] = 1] = "Self";
})(TooltipOverflowMode || (TooltipOverflowMode = {}));
//# sourceMappingURL=TooltipHost.types.js.map

/***/ }),

/***/ "NDXw":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/Tooltip/Tooltip.types.js ***!
  \***************************************************************************************************************************************************************************************************/
/*! exports provided: TooltipDelay */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TooltipDelay", function() { return TooltipDelay; });
/**
 * {@docCategory Tooltip}
 */
var TooltipDelay;
(function (TooltipDelay) {
    TooltipDelay[TooltipDelay["zero"] = 0] = "zero";
    /** 300 ms delay before showng the tooltip */
    TooltipDelay[TooltipDelay["medium"] = 1] = "medium";
    /** 500 ms delay before showing the tooltip */
    TooltipDelay[TooltipDelay["long"] = 2] = "long";
})(TooltipDelay || (TooltipDelay = {}));
//# sourceMappingURL=Tooltip.types.js.map

/***/ }),

/***/ "TcX4":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/Tooltip/index.js ***!
  \*******************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Tooltip__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Tooltip */ "7lFk");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Tooltip", function() { return _Tooltip__WEBPACK_IMPORTED_MODULE_0__["Tooltip"]; });

/* harmony import */ var _Tooltip_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Tooltip.base */ "aXN2");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TooltipBase", function() { return _Tooltip_base__WEBPACK_IMPORTED_MODULE_1__["TooltipBase"]; });

/* harmony import */ var _Tooltip_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Tooltip.types */ "NDXw");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TooltipDelay", function() { return _Tooltip_types__WEBPACK_IMPORTED_MODULE_2__["TooltipDelay"]; });

/* harmony import */ var _TooltipHost__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TooltipHost */ "7vvN");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _TooltipHost__WEBPACK_IMPORTED_MODULE_3__) if(["default","Tooltip","TooltipBase","TooltipDelay"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _TooltipHost__WEBPACK_IMPORTED_MODULE_3__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _TooltipHost_base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TooltipHost.base */ "k1RB");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TooltipHostBase", function() { return _TooltipHost_base__WEBPACK_IMPORTED_MODULE_4__["TooltipHostBase"]; });

/* harmony import */ var _TooltipHost_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./TooltipHost.types */ "8vRq");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TooltipOverflowMode", function() { return _TooltipHost_types__WEBPACK_IMPORTED_MODULE_5__["TooltipOverflowMode"]; });

/* harmony import */ var _common_DirectionalHint__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../common/DirectionalHint */ "EE7g");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _common_DirectionalHint__WEBPACK_IMPORTED_MODULE_6__) if(["default","Tooltip","TooltipBase","TooltipDelay","TooltipHostBase","TooltipOverflowMode"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _common_DirectionalHint__WEBPACK_IMPORTED_MODULE_6__[key]; }) }(__WEBPACK_IMPORT_KEY__));







//# sourceMappingURL=index.js.map

/***/ }),

/***/ "aXN2":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/Tooltip/Tooltip.base.js ***!
  \**************************************************************************************************************************************************************************************************/
/*! exports provided: TooltipBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TooltipBase", function() { return TooltipBase; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Utilities */ "mkpW");
/* harmony import */ var _Callout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Callout */ "ioxN");
/* harmony import */ var _common_DirectionalHint__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/DirectionalHint */ "EE7g");





var getClassNames = Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["classNamesFunction"])();
var TooltipBase = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(TooltipBase, _super);
    function TooltipBase() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._onRenderContent = function (props) {
            return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", { className: _this._classNames.subText }, props.content);
        };
        return _this;
    }
    TooltipBase.prototype.render = function () {
        var _a = this.props, className = _a.className, calloutProps = _a.calloutProps, directionalHint = _a.directionalHint, directionalHintForRTL = _a.directionalHintForRTL, styles = _a.styles, id = _a.id, maxWidth = _a.maxWidth, _b = _a.onRenderContent, onRenderContent = _b === void 0 ? this._onRenderContent : _b, targetElement = _a.targetElement, theme = _a.theme;
        this._classNames = getClassNames(styles, {
            theme: theme,
            className: className || (calloutProps && calloutProps.className),
            beakWidth: calloutProps && calloutProps.beakWidth,
            gapSpace: calloutProps && calloutProps.gapSpace,
            maxWidth: maxWidth,
        });
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Callout__WEBPACK_IMPORTED_MODULE_3__["Callout"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ target: targetElement, directionalHint: directionalHint, directionalHintForRTL: directionalHintForRTL }, calloutProps, Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["getNativeProps"])(this.props, _Utilities__WEBPACK_IMPORTED_MODULE_2__["divProperties"], ['id']), { className: this._classNames.root }),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: this._classNames.content, id: id, role: "tooltip", onMouseEnter: this.props.onMouseEnter, onMouseLeave: this.props.onMouseLeave }, onRenderContent(this.props, this._onRenderContent))));
    };
    // Specify default props values
    TooltipBase.defaultProps = {
        directionalHint: _common_DirectionalHint__WEBPACK_IMPORTED_MODULE_4__["DirectionalHint"].topCenter,
        maxWidth: '364px',
        calloutProps: {
            isBeakVisible: true,
            beakWidth: 16,
            gapSpace: 0,
            setInitialFocus: true,
            doNotLayer: false,
        },
    };
    return TooltipBase;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));

//# sourceMappingURL=Tooltip.base.js.map

/***/ }),

/***/ "c4qa":
/*!**************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/Tooltip.js ***!
  \**************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Tooltip_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Tooltip/index */ "TcX4");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _components_Tooltip_index__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _components_Tooltip_index__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));

//# sourceMappingURL=Tooltip.js.map

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

/***/ "k1RB":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/Tooltip/TooltipHost.base.js ***!
  \******************************************************************************************************************************************************************************************************/
/*! exports provided: TooltipHostBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TooltipHostBase", function() { return TooltipHostBase; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Styling__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Styling */ "PL71");
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Utilities */ "mkpW");
/* harmony import */ var _TooltipHost_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TooltipHost.types */ "8vRq");
/* harmony import */ var _Tooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Tooltip */ "7lFk");
/* harmony import */ var _Tooltip_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Tooltip.types */ "NDXw");







var getClassNames = Object(_Utilities__WEBPACK_IMPORTED_MODULE_3__["classNamesFunction"])();
var TooltipHostBase = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(TooltipHostBase, _super);
    // Constructor
    function TooltipHostBase(props) {
        var _this = _super.call(this, props) || this;
        // The wrapping div that gets the hover events
        _this._tooltipHost = react__WEBPACK_IMPORTED_MODULE_1__["createRef"]();
        _this._defaultTooltipId = Object(_Utilities__WEBPACK_IMPORTED_MODULE_3__["getId"])('tooltip');
        _this.show = function () {
            _this._toggleTooltip(true);
        };
        _this.dismiss = function () {
            _this._hideTooltip();
        };
        _this._getTargetElement = function () {
            if (!_this._tooltipHost.current) {
                return undefined;
            }
            var overflowMode = _this.props.overflowMode;
            // Select target element based on overflow mode. For parent mode, you want to position the tooltip relative
            // to the parent element, otherwise it might look off.
            if (overflowMode !== undefined) {
                switch (overflowMode) {
                    case _TooltipHost_types__WEBPACK_IMPORTED_MODULE_4__["TooltipOverflowMode"].Parent:
                        return _this._tooltipHost.current.parentElement;
                    case _TooltipHost_types__WEBPACK_IMPORTED_MODULE_4__["TooltipOverflowMode"].Self:
                        return _this._tooltipHost.current;
                }
            }
            return _this._tooltipHost.current;
        };
        // Show Tooltip
        _this._onTooltipMouseEnter = function (ev) {
            var _a = _this.props, overflowMode = _a.overflowMode, delay = _a.delay;
            if (TooltipHostBase._currentVisibleTooltip && TooltipHostBase._currentVisibleTooltip !== _this) {
                TooltipHostBase._currentVisibleTooltip.dismiss();
            }
            TooltipHostBase._currentVisibleTooltip = _this;
            if (overflowMode !== undefined) {
                var overflowElement = _this._getTargetElement();
                if (overflowElement && !Object(_Utilities__WEBPACK_IMPORTED_MODULE_3__["hasOverflow"])(overflowElement)) {
                    return;
                }
            }
            if (ev.target && Object(_Utilities__WEBPACK_IMPORTED_MODULE_3__["portalContainsElement"])(ev.target, _this._getTargetElement())) {
                // Do not show tooltip when target is inside a portal relative to TooltipHost.
                return;
            }
            _this._clearDismissTimer();
            _this._clearOpenTimer();
            if (delay !== _Tooltip_types__WEBPACK_IMPORTED_MODULE_6__["TooltipDelay"].zero) {
                _this.setState({ isAriaPlaceholderRendered: true });
                var delayTime = _this._getDelayTime(delay); // non-null assertion because we set it in `defaultProps`
                _this._openTimerId = _this._async.setTimeout(function () {
                    _this._toggleTooltip(true);
                }, delayTime);
            }
            else {
                _this._toggleTooltip(true);
            }
        };
        // Hide Tooltip
        _this._onTooltipMouseLeave = function (ev) {
            var closeDelay = _this.props.closeDelay;
            _this._clearDismissTimer();
            _this._clearOpenTimer();
            if (closeDelay) {
                _this._dismissTimerId = _this._async.setTimeout(function () {
                    _this._toggleTooltip(false);
                }, closeDelay);
            }
            else {
                _this._toggleTooltip(false);
            }
            if (TooltipHostBase._currentVisibleTooltip === _this) {
                TooltipHostBase._currentVisibleTooltip = undefined;
            }
        };
        _this._onTooltipKeyDown = function (ev) {
            if ((ev.which === _Utilities__WEBPACK_IMPORTED_MODULE_3__["KeyCodes"].escape || ev.ctrlKey) && _this.state.isTooltipVisible) {
                _this._hideTooltip();
                ev.stopPropagation();
            }
        };
        _this._clearDismissTimer = function () {
            _this._async.clearTimeout(_this._dismissTimerId);
        };
        _this._clearOpenTimer = function () {
            _this._async.clearTimeout(_this._openTimerId);
        };
        // Hide Tooltip
        _this._hideTooltip = function () {
            _this._clearOpenTimer();
            _this._clearDismissTimer();
            _this._toggleTooltip(false);
        };
        _this._toggleTooltip = function (isTooltipVisible) {
            if (_this.state.isTooltipVisible !== isTooltipVisible) {
                _this.setState({ isAriaPlaceholderRendered: false, isTooltipVisible: isTooltipVisible }, function () { return _this.props.onTooltipToggle && _this.props.onTooltipToggle(isTooltipVisible); });
            }
        };
        _this._getDelayTime = function (delay) {
            switch (delay) {
                case _Tooltip_types__WEBPACK_IMPORTED_MODULE_6__["TooltipDelay"].medium:
                    return 300;
                case _Tooltip_types__WEBPACK_IMPORTED_MODULE_6__["TooltipDelay"].long:
                    return 500;
                default:
                    return 0;
            }
        };
        Object(_Utilities__WEBPACK_IMPORTED_MODULE_3__["initializeComponentRef"])(_this);
        _this.state = {
            isAriaPlaceholderRendered: false,
            isTooltipVisible: false,
        };
        _this._async = new _Utilities__WEBPACK_IMPORTED_MODULE_3__["Async"](_this);
        return _this;
    }
    // Render
    TooltipHostBase.prototype.render = function () {
        var _a = this.props, calloutProps = _a.calloutProps, children = _a.children, content = _a.content, directionalHint = _a.directionalHint, directionalHintForRTL = _a.directionalHintForRTL, className = _a.hostClassName, id = _a.id, _b = _a.setAriaDescribedBy, setAriaDescribedBy = _b === void 0 ? true : _b, tooltipProps = _a.tooltipProps, styles = _a.styles, theme = _a.theme;
        this._classNames = getClassNames(styles, {
            theme: theme,
            className: className,
        });
        var _c = this.state, isAriaPlaceholderRendered = _c.isAriaPlaceholderRendered, isTooltipVisible = _c.isTooltipVisible;
        var tooltipId = id || this._defaultTooltipId;
        var isContentPresent = !!(content ||
            (tooltipProps && tooltipProps.onRenderContent && tooltipProps.onRenderContent()));
        var showTooltip = isTooltipVisible && isContentPresent;
        var ariaDescribedBy = setAriaDescribedBy && isTooltipVisible && isContentPresent ? tooltipId : undefined;
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ className: this._classNames.root, ref: this._tooltipHost }, { onFocusCapture: this._onTooltipMouseEnter }, { onBlurCapture: this._hideTooltip }, { onMouseEnter: this._onTooltipMouseEnter, onMouseLeave: this._onTooltipMouseLeave, onKeyDown: this._onTooltipKeyDown, "aria-describedby": ariaDescribedBy }),
            children,
            showTooltip && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Tooltip__WEBPACK_IMPORTED_MODULE_5__["Tooltip"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ id: tooltipId, content: content, targetElement: this._getTargetElement(), directionalHint: directionalHint, directionalHintForRTL: directionalHintForRTL, calloutProps: Object(_Utilities__WEBPACK_IMPORTED_MODULE_3__["assign"])({}, calloutProps, {
                    onDismiss: this._hideTooltip,
                    onMouseEnter: this._onTooltipMouseEnter,
                    onMouseLeave: this._onTooltipMouseLeave,
                }), onMouseEnter: this._onTooltipMouseEnter, onMouseLeave: this._onTooltipMouseLeave }, Object(_Utilities__WEBPACK_IMPORTED_MODULE_3__["getNativeProps"])(this.props, _Utilities__WEBPACK_IMPORTED_MODULE_3__["divProperties"]), tooltipProps))),
            isAriaPlaceholderRendered && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { id: tooltipId, style: _Styling__WEBPACK_IMPORTED_MODULE_2__["hiddenContentStyle"] }, content))));
    };
    TooltipHostBase.prototype.componentWillUnmount = function () {
        if (TooltipHostBase._currentVisibleTooltip && TooltipHostBase._currentVisibleTooltip === this) {
            TooltipHostBase._currentVisibleTooltip = undefined;
        }
        this._async.dispose();
    };
    TooltipHostBase.defaultProps = {
        delay: _Tooltip_types__WEBPACK_IMPORTED_MODULE_6__["TooltipDelay"].medium,
    };
    return TooltipHostBase;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));

//# sourceMappingURL=TooltipHost.base.js.map

/***/ }),

/***/ "z8Le":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/Tooltip/Tooltip.styles.js ***!
  \****************************************************************************************************************************************************************************************************/
/*! exports provided: getStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStyles", function() { return getStyles; });
/* harmony import */ var _Styling__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Styling */ "PL71");

var getStyles = function (props) {
    var className = props.className, _a = props.beakWidth, beakWidth = _a === void 0 ? 16 : _a, _b = props.gapSpace, gapSpace = _b === void 0 ? 0 : _b, maxWidth = props.maxWidth, theme = props.theme;
    var semanticColors = theme.semanticColors, fonts = theme.fonts, effects = theme.effects;
    // The math here is done to account for the 45 degree rotation of the beak
    // and sub-pixel rounding that differs across browsers, which is more noticeable when
    // the device pixel ratio is larger
    var tooltipGapSpace = -(Math.sqrt((beakWidth * beakWidth) / 2) + gapSpace) + 1 / window.devicePixelRatio;
    return {
        root: [
            'ms-Tooltip',
            theme.fonts.medium,
            _Styling__WEBPACK_IMPORTED_MODULE_0__["AnimationClassNames"].fadeIn200,
            {
                background: semanticColors.menuBackground,
                boxShadow: effects.elevation8,
                padding: '8px',
                maxWidth: maxWidth,
                selectors: {
                    ':after': {
                        content: "''",
                        position: 'absolute',
                        bottom: tooltipGapSpace,
                        left: tooltipGapSpace,
                        right: tooltipGapSpace,
                        top: tooltipGapSpace,
                        zIndex: 0,
                    },
                },
            },
            className,
        ],
        content: [
            'ms-Tooltip-content',
            fonts.small,
            {
                position: 'relative',
                zIndex: 1,
                color: semanticColors.menuItemText,
                wordWrap: 'break-word',
                overflowWrap: 'break-word',
                overflow: 'hidden',
            },
        ],
        subText: [
            'ms-Tooltip-subtext',
            {
                // Using inherit here to avoid unintentional global overrides of the <p> tag.
                fontSize: 'inherit',
                fontWeight: 'inherit',
                color: 'inherit',
                margin: 0,
            },
        ],
    };
};
//# sourceMappingURL=Tooltip.styles.js.map

/***/ })

}]);
//# sourceMappingURL=chunk.vendors~editnavchunk~sp-pages-panels~spcx~63fbeced_[locale].js.map