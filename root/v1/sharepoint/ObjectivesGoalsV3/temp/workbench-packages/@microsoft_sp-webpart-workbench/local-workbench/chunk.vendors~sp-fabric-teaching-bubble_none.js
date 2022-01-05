(window["webpackJsonp_914330ee_2df2_4f6e_a858_30c23a812408_1_15_53"] = window["webpackJsonp_914330ee_2df2_4f6e_a858_30c23a812408_1_15_53"] || []).push([["vendors~sp-fabric-teaching-bubble"],{

/***/ "EE7g":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/common/DirectionalHint.js ***!
  \*****************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/office-ui-fabric-react-bundle */ "KL1q");
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
// Loading office-ui-fabric-react/./lib/common/DirectionalHint.js


/***/ }),

/***/ "K3kX":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/TeachingBubble/TeachingBubble.base.js ***!
  \****************************************************************************************************************************************************************************************************************/
/*! exports provided: TeachingBubbleBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeachingBubbleBase", function() { return TeachingBubbleBase; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Utilities */ "mkpW");
/* harmony import */ var _TeachingBubbleContent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TeachingBubbleContent */ "LcJw");
/* harmony import */ var _Callout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Callout */ "ioxN");
/* harmony import */ var _common_DirectionalHint__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/DirectionalHint */ "EE7g");






var getClassNames = Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["classNamesFunction"])();
var TeachingBubbleBase = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(TeachingBubbleBase, _super);
    // Constructor
    function TeachingBubbleBase(props) {
        var _this = _super.call(this, props) || this;
        _this.rootElement = react__WEBPACK_IMPORTED_MODULE_1__["createRef"]();
        Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["initializeComponentRef"])(_this);
        _this.state = {};
        _this._defaultCalloutProps = {
            beakWidth: 16,
            gapSpace: 0,
            setInitialFocus: true,
            doNotLayer: false,
            directionalHint: _common_DirectionalHint__WEBPACK_IMPORTED_MODULE_5__["DirectionalHint"].rightCenter,
        };
        return _this;
    }
    TeachingBubbleBase.prototype.focus = function () {
        if (this.rootElement.current) {
            this.rootElement.current.focus();
        }
    };
    TeachingBubbleBase.prototype.render = function () {
        var _a = this.props, setCalloutProps = _a.calloutProps, 
        // eslint-disable-next-line deprecation/deprecation
        targetElement = _a.targetElement, onDismiss = _a.onDismiss, 
        // Default to deprecated value if provided.
        // eslint-disable-next-line deprecation/deprecation
        _b = _a.hasCloseButton, 
        // Default to deprecated value if provided.
        // eslint-disable-next-line deprecation/deprecation
        hasCloseButton = _b === void 0 ? this.props.hasCloseIcon : _b, isWide = _a.isWide, styles = _a.styles, theme = _a.theme, target = _a.target;
        var calloutProps = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this._defaultCalloutProps), setCalloutProps);
        var stylesProps = {
            theme: theme,
            isWide: isWide,
            calloutProps: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, calloutProps), { theme: calloutProps.theme }),
            hasCloseButton: hasCloseButton,
        };
        var classNames = getClassNames(styles, stylesProps);
        var calloutStyles = classNames.subComponentStyles
            ? classNames.subComponentStyles.callout
            : undefined;
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Callout__WEBPACK_IMPORTED_MODULE_4__["Callout"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ target: target || targetElement, onDismiss: onDismiss }, calloutProps, { className: classNames.root, styles: calloutStyles, hideOverflow: true }),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { ref: this.rootElement },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_TeachingBubbleContent__WEBPACK_IMPORTED_MODULE_3__["TeachingBubbleContent"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.props)))));
    };
    TeachingBubbleBase.defaultProps = {
        /**
         * Default calloutProps is deprecated in favor of private `_defaultCalloutProps`.
         * Remove in next release.
         * @deprecated In favor of private `_defaultCalloutProps`.
         */
        // eslint-disable-next-line deprecation/deprecation
        calloutProps: {
            beakWidth: 16,
            gapSpace: 0,
            setInitialFocus: true,
            doNotLayer: false,
            directionalHint: _common_DirectionalHint__WEBPACK_IMPORTED_MODULE_5__["DirectionalHint"].rightCenter,
        },
    };
    return TeachingBubbleBase;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));

//# sourceMappingURL=TeachingBubble.base.js.map

/***/ }),

/***/ "LcJw":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/TeachingBubble/TeachingBubbleContent.js ***!
  \******************************************************************************************************************************************************************************************************************/
/*! exports provided: TeachingBubbleContent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeachingBubbleContent", function() { return TeachingBubbleContent; });
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Utilities */ "mkpW");
/* harmony import */ var _TeachingBubbleContent_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TeachingBubbleContent.base */ "hdND");
/* harmony import */ var _TeachingBubble_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TeachingBubble.styles */ "s+9P");



var TeachingBubbleContent = Object(_Utilities__WEBPACK_IMPORTED_MODULE_0__["styled"])(_TeachingBubbleContent_base__WEBPACK_IMPORTED_MODULE_1__["TeachingBubbleContentBase"], _TeachingBubble_styles__WEBPACK_IMPORTED_MODULE_2__["getStyles"], undefined, { scope: 'TeachingBubbleContent' });
//# sourceMappingURL=TeachingBubbleContent.js.map

/***/ }),

/***/ "N28N":
/*!************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/Stack.js ***!
  \************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/office-ui-fabric-react-bundle */ "KL1q");
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
// Loading office-ui-fabric-react/./lib/Stack.js


/***/ }),

/***/ "PL71":
/*!**************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/Styling.js ***!
  \**************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/office-ui-fabric-react-bundle */ "KL1q");
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
// Loading office-ui-fabric-react/./lib/Styling.js


/***/ }),

/***/ "Qiuu":
/*!********************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/FocusTrapZone.js ***!
  \********************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/office-ui-fabric-react-bundle */ "KL1q");
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
// Loading office-ui-fabric-react/./lib/FocusTrapZone.js


/***/ }),

/***/ "T36c":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/TeachingBubble/index.js ***!
  \**************************************************************************************************************************************************************************************************/
/*! exports provided: TeachingBubble, TeachingBubbleBase, TeachingBubbleContent, TeachingBubbleContentBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TeachingBubble__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TeachingBubble */ "fsJh");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TeachingBubble", function() { return _TeachingBubble__WEBPACK_IMPORTED_MODULE_0__["TeachingBubble"]; });

/* harmony import */ var _TeachingBubble_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TeachingBubble.base */ "K3kX");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TeachingBubbleBase", function() { return _TeachingBubble_base__WEBPACK_IMPORTED_MODULE_1__["TeachingBubbleBase"]; });

/* harmony import */ var _TeachingBubbleContent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TeachingBubbleContent */ "LcJw");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TeachingBubbleContent", function() { return _TeachingBubbleContent__WEBPACK_IMPORTED_MODULE_2__["TeachingBubbleContent"]; });

/* harmony import */ var _TeachingBubbleContent_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TeachingBubbleContent.base */ "hdND");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TeachingBubbleContentBase", function() { return _TeachingBubbleContent_base__WEBPACK_IMPORTED_MODULE_3__["TeachingBubbleContentBase"]; });





//# sourceMappingURL=index.js.map

/***/ }),

/***/ "epn0":
/*!*************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/Button.js ***!
  \*************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/office-ui-fabric-react-bundle */ "KL1q");
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
// Loading office-ui-fabric-react/./lib/Button.js


/***/ }),

/***/ "fsJh":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/TeachingBubble/TeachingBubble.js ***!
  \***********************************************************************************************************************************************************************************************************/
/*! exports provided: TeachingBubble */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeachingBubble", function() { return TeachingBubble; });
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Utilities */ "mkpW");
/* harmony import */ var _TeachingBubble_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TeachingBubble.base */ "K3kX");
/* harmony import */ var _TeachingBubble_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TeachingBubble.styles */ "s+9P");



var TeachingBubble = Object(_Utilities__WEBPACK_IMPORTED_MODULE_0__["styled"])(_TeachingBubble_base__WEBPACK_IMPORTED_MODULE_1__["TeachingBubbleBase"], _TeachingBubble_styles__WEBPACK_IMPORTED_MODULE_2__["getStyles"], undefined, { scope: 'TeachingBubble' });
//# sourceMappingURL=TeachingBubble.js.map

/***/ }),

/***/ "hdND":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/TeachingBubble/TeachingBubbleContent.base.js ***!
  \***********************************************************************************************************************************************************************************************************************/
/*! exports provided: TeachingBubbleContentBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeachingBubbleContentBase", function() { return TeachingBubbleContentBase; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Utilities */ "mkpW");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Button */ "epn0");
/* harmony import */ var _Image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Image */ "pw9o");
/* harmony import */ var _Stack__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Stack */ "N28N");
/* harmony import */ var _FocusTrapZone__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../FocusTrapZone */ "Qiuu");







var getClassNames = Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["classNamesFunction"])();
var TeachingBubbleContentBase = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(TeachingBubbleContentBase, _super);
    function TeachingBubbleContentBase(props) {
        var _this = _super.call(this, props) || this;
        _this.rootElement = react__WEBPACK_IMPORTED_MODULE_1__["createRef"]();
        _this._onKeyDown = function (e) {
            if (_this.props.onDismiss) {
                if (e.which === _Utilities__WEBPACK_IMPORTED_MODULE_2__["KeyCodes"].escape) {
                    _this.props.onDismiss();
                }
            }
        };
        Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["initializeComponentRef"])(_this);
        _this.state = {};
        return _this;
    }
    TeachingBubbleContentBase.prototype.componentDidMount = function () {
        if (this.props.onDismiss) {
            document.addEventListener('keydown', this._onKeyDown, false);
        }
    };
    TeachingBubbleContentBase.prototype.componentWillUnmount = function () {
        if (this.props.onDismiss) {
            document.removeEventListener('keydown', this._onKeyDown);
        }
    };
    TeachingBubbleContentBase.prototype.focus = function () {
        if (this.rootElement.current) {
            this.rootElement.current.focus();
        }
    };
    TeachingBubbleContentBase.prototype.render = function () {
        var _a = this.props, children = _a.children, illustrationImage = _a.illustrationImage, primaryButtonProps = _a.primaryButtonProps, secondaryButtonProps = _a.secondaryButtonProps, headline = _a.headline, hasCondensedHeadline = _a.hasCondensedHeadline, 
        // eslint-disable-next-line deprecation/deprecation
        _b = _a.hasCloseButton, 
        // eslint-disable-next-line deprecation/deprecation
        hasCloseButton = _b === void 0 ? this.props.hasCloseIcon : _b, onDismiss = _a.onDismiss, closeButtonAriaLabel = _a.closeButtonAriaLabel, hasSmallHeadline = _a.hasSmallHeadline, isWide = _a.isWide, styles = _a.styles, theme = _a.theme, ariaDescribedBy = _a.ariaDescribedBy, ariaLabelledBy = _a.ariaLabelledBy, customFooterContent = _a.footerContent, focusTrapZoneProps = _a.focusTrapZoneProps;
        var imageContent;
        var headerContent;
        var bodyContent;
        var footerContent;
        var closeButton;
        var classNames = getClassNames(styles, {
            theme: theme,
            hasCondensedHeadline: hasCondensedHeadline,
            hasSmallHeadline: hasSmallHeadline,
            hasCloseButton: hasCloseButton,
            hasHeadline: !!headline,
            isWide: isWide,
            primaryButtonClassName: primaryButtonProps ? primaryButtonProps.className : undefined,
            secondaryButtonClassName: secondaryButtonProps ? secondaryButtonProps.className : undefined,
        });
        if (illustrationImage && illustrationImage.src) {
            imageContent = (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: classNames.imageContent },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Image__WEBPACK_IMPORTED_MODULE_4__["Image"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, illustrationImage))));
        }
        if (headline) {
            var HeaderWrapperAs = typeof headline === 'string' ? 'p' : 'div';
            headerContent = (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: classNames.header },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](HeaderWrapperAs, { role: "heading", className: classNames.headline, id: ariaLabelledBy }, headline)));
        }
        if (children) {
            var BodyContentWrapperAs = typeof children === 'string' ? 'p' : 'div';
            bodyContent = (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: classNames.body },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](BodyContentWrapperAs, { className: classNames.subText, id: ariaDescribedBy }, children)));
        }
        if (primaryButtonProps || secondaryButtonProps || customFooterContent) {
            footerContent = (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Stack__WEBPACK_IMPORTED_MODULE_5__["Stack"], { className: classNames.footer, horizontal: true, horizontalAlign: customFooterContent ? 'space-between' : 'end' },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Stack__WEBPACK_IMPORTED_MODULE_5__["Stack"].Item, { align: "center" }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", null, customFooterContent)),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Stack__WEBPACK_IMPORTED_MODULE_5__["Stack"].Item, null,
                    secondaryButtonProps && react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Button__WEBPACK_IMPORTED_MODULE_3__["DefaultButton"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, secondaryButtonProps, { className: classNames.secondaryButton })),
                    primaryButtonProps && react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Button__WEBPACK_IMPORTED_MODULE_3__["PrimaryButton"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, primaryButtonProps, { className: classNames.primaryButton })))));
        }
        if (hasCloseButton) {
            closeButton = (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Button__WEBPACK_IMPORTED_MODULE_3__["IconButton"], { className: classNames.closeButton, iconProps: { iconName: 'Cancel' }, title: closeButtonAriaLabel, ariaLabel: closeButtonAriaLabel, onClick: onDismiss }));
        }
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: classNames.content, ref: this.rootElement, role: 'dialog', tabIndex: -1, "aria-labelledby": ariaLabelledBy, "aria-describedby": ariaDescribedBy, "data-is-focusable": true },
            imageContent,
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_FocusTrapZone__WEBPACK_IMPORTED_MODULE_6__["FocusTrapZone"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ isClickableOutsideFocusTrap: true }, focusTrapZoneProps),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: classNames.bodyContent },
                    headerContent,
                    bodyContent,
                    footerContent,
                    closeButton))));
    };
    return TeachingBubbleContentBase;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));

//# sourceMappingURL=TeachingBubbleContent.base.js.map

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

/***/ "mkpW":
/*!****************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/Utilities.js ***!
  \****************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/office-ui-fabric-react-bundle */ "KL1q");
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
// Loading office-ui-fabric-react/./lib/Utilities.js


/***/ }),

/***/ "pw9o":
/*!************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/Image.js ***!
  \************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/office-ui-fabric-react-bundle */ "KL1q");
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
// Loading office-ui-fabric-react/./lib/Image.js


/***/ }),

/***/ "rpLR":
/*!*********************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/TeachingBubble.js ***!
  \*********************************************************************************************************************************************************************************/
/*! exports provided: TeachingBubble, TeachingBubbleBase, TeachingBubbleContent, TeachingBubbleContentBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_TeachingBubble_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/TeachingBubble/index */ "T36c");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TeachingBubble", function() { return _components_TeachingBubble_index__WEBPACK_IMPORTED_MODULE_0__["TeachingBubble"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TeachingBubbleBase", function() { return _components_TeachingBubble_index__WEBPACK_IMPORTED_MODULE_0__["TeachingBubbleBase"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TeachingBubbleContent", function() { return _components_TeachingBubble_index__WEBPACK_IMPORTED_MODULE_0__["TeachingBubbleContent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TeachingBubbleContentBase", function() { return _components_TeachingBubble_index__WEBPACK_IMPORTED_MODULE_0__["TeachingBubbleContentBase"]; });


//# sourceMappingURL=TeachingBubble.js.map

/***/ }),

/***/ "s+9P":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/TeachingBubble/TeachingBubble.styles.js ***!
  \******************************************************************************************************************************************************************************************************************/
/*! exports provided: getStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStyles", function() { return getStyles; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Styling__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Styling */ "PL71");
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Utilities */ "mkpW");



var globalClassNames = {
    root: 'ms-TeachingBubble',
    body: 'ms-TeachingBubble-body',
    bodyContent: 'ms-TeachingBubble-bodycontent',
    closeButton: 'ms-TeachingBubble-closebutton',
    content: 'ms-TeachingBubble-content',
    footer: 'ms-TeachingBubble-footer',
    header: 'ms-TeachingBubble-header',
    headerIsCondensed: 'ms-TeachingBubble-header--condensed',
    headerIsSmall: 'ms-TeachingBubble-header--small',
    headerIsLarge: 'ms-TeachingBubble-header--large',
    headline: 'ms-TeachingBubble-headline',
    image: 'ms-TeachingBubble-image',
    primaryButton: 'ms-TeachingBubble-primaryButton',
    secondaryButton: 'ms-TeachingBubble-secondaryButton',
    subText: 'ms-TeachingBubble-subText',
    // TODO: Button global class name usage should be converted to a styles function once
    //        Button supports JS styling, which means these button names can be removed.
    button: 'ms-Button',
    buttonLabel: 'ms-Button-label',
};
var opacityFadeIn = Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["memoizeFunction"])(function () {
    return Object(_Styling__WEBPACK_IMPORTED_MODULE_1__["keyframes"])({
        '0%': {
            opacity: 0,
            animationTimingFunction: _Styling__WEBPACK_IMPORTED_MODULE_1__["AnimationVariables"].easeFunction1,
            transform: 'scale3d(.90,.90,.90)',
        },
        '100%': {
            opacity: 1,
            transform: 'scale3d(1,1,1)',
        },
    });
});
var rootStyle = function (isWide, calloutProps) {
    var _a = calloutProps || {}, calloutWidth = _a.calloutWidth, calloutMaxWidth = _a.calloutMaxWidth;
    return [
        {
            display: 'block',
            maxWidth: 364,
            border: 0,
            outline: 'transparent',
            width: calloutWidth || 'calc(100% + 1px)',
            animationName: "" + opacityFadeIn(),
            animationDuration: '300ms',
            animationTimingFunction: 'linear',
            animationFillMode: 'both',
        },
        isWide && {
            maxWidth: calloutMaxWidth || 456,
        },
    ];
};
var headerStyle = function (classNames, hasCondensedHeadline, hasSmallHeadline) {
    if (hasCondensedHeadline) {
        return [
            classNames.headerIsCondensed,
            {
                marginBottom: 14,
            },
        ];
    }
    return [
        hasSmallHeadline && classNames.headerIsSmall,
        !hasSmallHeadline && classNames.headerIsLarge,
        {
            selectors: {
                ':not(:last-child)': {
                    marginBottom: 14,
                },
            },
        },
    ];
};
var getStyles = function (props) {
    var _a, _b, _c;
    var hasCondensedHeadline = props.hasCondensedHeadline, hasSmallHeadline = props.hasSmallHeadline, hasCloseButton = props.hasCloseButton, hasHeadline = props.hasHeadline, isWide = props.isWide, primaryButtonClassName = props.primaryButtonClassName, secondaryButtonClassName = props.secondaryButtonClassName, theme = props.theme, _d = props.calloutProps, calloutProps = _d === void 0 ? { className: undefined, theme: theme } : _d;
    var hasLargeHeadline = !hasCondensedHeadline && !hasSmallHeadline;
    var palette = theme.palette, semanticColors = theme.semanticColors, fonts = theme.fonts;
    var classNames = Object(_Styling__WEBPACK_IMPORTED_MODULE_1__["getGlobalClassNames"])(globalClassNames, theme);
    return {
        root: [classNames.root, fonts.medium, calloutProps.className],
        body: [
            classNames.body,
            hasCloseButton && !hasHeadline && { marginRight: 24 },
            {
                selectors: {
                    ':not(:last-child)': {
                        marginBottom: 20,
                    },
                },
            },
        ],
        bodyContent: [
            classNames.bodyContent,
            {
                padding: '20px 24px 20px 24px',
            },
        ],
        closeButton: [
            classNames.closeButton,
            {
                position: 'absolute',
                right: 0,
                top: 0,
                margin: '15px 15px 0 0',
                borderRadius: 0,
                color: palette.white,
                fontSize: fonts.small.fontSize,
                selectors: {
                    ':hover': {
                        background: palette.themeDarkAlt,
                        color: palette.white,
                    },
                    ':active': {
                        background: palette.themeDark,
                        color: palette.white,
                    },
                    ':focus': {
                        border: "1px solid " + semanticColors.variantBorder,
                    },
                },
            },
        ],
        content: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])([
            classNames.content
        ], rootStyle(isWide), [
            isWide && {
                display: 'flex',
            },
        ]),
        footer: [
            classNames.footer,
            {
                display: 'flex',
                flex: 'auto',
                alignItems: 'center',
                color: palette.white,
                selectors: (_a = {},
                    // TODO: global class name usage should be converted to a styles function once Button supports JS styling
                    _a["." + classNames.button + ":not(:first-child)"] = {
                        marginLeft: 10,
                    },
                    _a),
            },
        ],
        header: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])([
            classNames.header
        ], headerStyle(classNames, hasCondensedHeadline, hasSmallHeadline), [
            hasCloseButton && { marginRight: 24 },
            (hasCondensedHeadline || hasSmallHeadline) && [
                fonts.medium,
                {
                    fontWeight: _Styling__WEBPACK_IMPORTED_MODULE_1__["FontWeights"].semibold,
                },
            ],
        ]),
        headline: [
            classNames.headline,
            {
                margin: 0,
                color: palette.white,
                fontWeight: _Styling__WEBPACK_IMPORTED_MODULE_1__["FontWeights"].semibold,
            },
            hasLargeHeadline && [
                {
                    fontSize: fonts.xLarge.fontSize,
                },
            ],
        ],
        imageContent: [
            classNames.header,
            classNames.image,
            isWide && {
                display: 'flex',
                alignItems: 'center',
                maxWidth: 154,
            },
        ],
        primaryButton: [
            classNames.primaryButton,
            primaryButtonClassName,
            {
                backgroundColor: palette.white,
                borderColor: palette.white,
                color: palette.themePrimary,
                whiteSpace: 'nowrap',
                selectors: (_b = {},
                    // TODO: global class name usage should be converted to a styles function once Button supports JS styling
                    _b["." + classNames.buttonLabel] = fonts.medium,
                    _b[':hover'] = {
                        backgroundColor: palette.themeLighter,
                        borderColor: palette.themeLighter,
                        color: palette.themePrimary,
                    },
                    _b[':focus'] = {
                        backgroundColor: palette.themeLighter,
                        borderColor: palette.white,
                    },
                    _b[':active'] = {
                        backgroundColor: palette.white,
                        borderColor: palette.white,
                        color: palette.themePrimary,
                    },
                    _b),
            },
        ],
        secondaryButton: [
            classNames.secondaryButton,
            secondaryButtonClassName,
            {
                backgroundColor: palette.themePrimary,
                borderColor: palette.white,
                whiteSpace: 'nowrap',
                selectors: (_c = {},
                    // TODO: global class name usage should be converted to a styles function once Button supports JS styling
                    _c["." + classNames.buttonLabel] = [
                        fonts.medium,
                        {
                            color: palette.white,
                        },
                    ],
                    _c['&:hover, &:focus'] = {
                        backgroundColor: palette.themeDarkAlt,
                        borderColor: palette.white,
                    },
                    _c[':active'] = {
                        backgroundColor: palette.themePrimary,
                        borderColor: palette.white,
                    },
                    _c),
            },
        ],
        subText: [
            classNames.subText,
            {
                margin: 0,
                fontSize: fonts.medium.fontSize,
                color: palette.white,
                fontWeight: _Styling__WEBPACK_IMPORTED_MODULE_1__["FontWeights"].regular,
            },
        ],
        subComponentStyles: {
            callout: {
                root: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(rootStyle(isWide, calloutProps), [fonts.medium]),
                beak: [
                    {
                        background: palette.themePrimary,
                    },
                ],
                calloutMain: [
                    {
                        background: palette.themePrimary,
                    },
                ],
            },
        },
    };
};
//# sourceMappingURL=TeachingBubble.styles.js.map

/***/ })

}]);
//# sourceMappingURL=chunk.vendors~sp-fabric-teaching-bubble_[locale].js.map