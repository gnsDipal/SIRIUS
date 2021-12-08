(window["webpackJsonp_1e2cdec9_1360_4295_b73c_98d6f51866d5_0_1_0"] = window["webpackJsonp_1e2cdec9_1360_4295_b73c_98d6f51866d5_0_1_0"] || []).push([[1],{

/***/ "8b9x":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/Panel/Panel.base.js ***!
  \**********************************************************************************************************************************************************************************************/
/*! exports provided: PanelBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PanelBase", function() { return PanelBase; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Button */ "epn0");
/* harmony import */ var _Layer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Layer */ "YZp6");
/* harmony import */ var _Overlay__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Overlay */ "OqUb");
/* harmony import */ var _Popup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Popup */ "ZelK");
/* harmony import */ var _Popup__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_Popup__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Utilities */ "mkpW");
/* harmony import */ var _FocusTrapZone_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../FocusTrapZone/index */ "3WSi");
/* harmony import */ var _Panel_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Panel.types */ "A72S");









var getClassNames = Object(_Utilities__WEBPACK_IMPORTED_MODULE_6__["classNamesFunction"])();
var COMPONENT_NAME = 'Panel';
var PanelVisibilityState;
(function (PanelVisibilityState) {
    PanelVisibilityState[PanelVisibilityState["closed"] = 0] = "closed";
    PanelVisibilityState[PanelVisibilityState["animatingOpen"] = 1] = "animatingOpen";
    PanelVisibilityState[PanelVisibilityState["open"] = 2] = "open";
    PanelVisibilityState[PanelVisibilityState["animatingClosed"] = 3] = "animatingClosed";
})(PanelVisibilityState || (PanelVisibilityState = {}));
var PanelBase = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(PanelBase, _super);
    function PanelBase(props) {
        var _this = _super.call(this, props) || this;
        _this._panel = react__WEBPACK_IMPORTED_MODULE_1__["createRef"]();
        _this._animationCallback = null;
        _this._hasCustomNavigation = !!(_this.props.onRenderNavigation || _this.props.onRenderNavigationContent);
        _this.dismiss = function (ev) {
            if (_this.props.onDismiss) {
                _this.props.onDismiss(ev);
            }
            if (!ev || (ev && !ev.defaultPrevented)) {
                _this.close();
            }
        };
        // Allow the user to scroll within the panel but not on the body
        _this._allowScrollOnPanel = function (elt) {
            if (elt) {
                if (_this._allowTouchBodyScroll) {
                    Object(_Utilities__WEBPACK_IMPORTED_MODULE_6__["allowOverscrollOnElement"])(elt, _this._events);
                }
                else {
                    Object(_Utilities__WEBPACK_IMPORTED_MODULE_6__["allowScrollOnElement"])(elt, _this._events);
                }
            }
            else {
                _this._events.off(_this._scrollableContent);
            }
            _this._scrollableContent = elt;
        };
        _this._onRenderNavigation = function (props) {
            if (!_this.props.onRenderNavigationContent && !_this.props.onRenderNavigation && !_this.props.hasCloseButton) {
                return null;
            }
            var _a = _this.props.onRenderNavigationContent, onRenderNavigationContent = _a === void 0 ? _this._onRenderNavigationContent : _a;
            return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: _this._classNames.navigation }, onRenderNavigationContent(props, _this._onRenderNavigationContent)));
        };
        _this._onRenderNavigationContent = function (props) {
            var _a;
            var closeButtonAriaLabel = props.closeButtonAriaLabel, hasCloseButton = props.hasCloseButton, _b = props.onRenderHeader, onRenderHeader = _b === void 0 ? _this._onRenderHeader : _b;
            if (hasCloseButton) {
                var iconButtonStyles = (_a = _this._classNames.subComponentStyles) === null || _a === void 0 ? void 0 : _a.closeButton();
                return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null,
                    !_this._hasCustomNavigation && onRenderHeader(_this.props, _this._onRenderHeader, _this._headerTextId),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Button__WEBPACK_IMPORTED_MODULE_2__["IconButton"], { styles: iconButtonStyles, 
                        // eslint-disable-next-line deprecation/deprecation
                        className: _this._classNames.closeButton, onClick: _this._onPanelClick, ariaLabel: closeButtonAriaLabel, title: closeButtonAriaLabel, "data-is-visible": true, iconProps: { iconName: 'Cancel' } })));
            }
            return null;
        };
        _this._onRenderHeader = function (props, defaultRender, headerTextId) {
            var headerText = props.headerText, _a = props.headerTextProps, headerTextProps = _a === void 0 ? {} : _a;
            if (headerText) {
                return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: _this._classNames.header },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ id: headerTextId, role: "heading", "aria-level": 1 }, headerTextProps, { className: Object(_Utilities__WEBPACK_IMPORTED_MODULE_6__["css"])(_this._classNames.headerText, headerTextProps.className) }), headerText)));
            }
            return null;
        };
        _this._onRenderBody = function (props) {
            return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: _this._classNames.content }, props.children);
        };
        _this._onRenderFooter = function (props) {
            var _a = _this.props.onRenderFooterContent, onRenderFooterContent = _a === void 0 ? null : _a;
            if (onRenderFooterContent) {
                return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: _this._classNames.footer },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: _this._classNames.footerInner }, onRenderFooterContent())));
            }
            return null;
        };
        _this._animateTo = function (newVisibilityState) {
            if (newVisibilityState === PanelVisibilityState.open && _this.props.onOpen) {
                _this.props.onOpen();
            }
            _this._animationCallback = _this._async.setTimeout(function () {
                _this.setState({ visibility: newVisibilityState });
                _this._onTransitionComplete();
            }, 200);
        };
        _this._clearExistingAnimationTimer = function () {
            if (_this._animationCallback !== null) {
                _this._async.clearTimeout(_this._animationCallback);
            }
        };
        _this._onPanelClick = function (ev) {
            _this.dismiss(ev);
        };
        _this._onTransitionComplete = function () {
            _this._updateFooterPosition();
            if (_this.state.visibility === PanelVisibilityState.open && _this.props.onOpened) {
                _this.props.onOpened();
            }
            if (_this.state.visibility === PanelVisibilityState.closed && _this.props.onDismissed) {
                _this.props.onDismissed();
            }
        };
        var _a = _this.props.allowTouchBodyScroll, allowTouchBodyScroll = _a === void 0 ? false : _a;
        _this._allowTouchBodyScroll = allowTouchBodyScroll;
        _this._async = new _Utilities__WEBPACK_IMPORTED_MODULE_6__["Async"](_this);
        _this._events = new _Utilities__WEBPACK_IMPORTED_MODULE_6__["EventGroup"](_this);
        Object(_Utilities__WEBPACK_IMPORTED_MODULE_6__["initializeComponentRef"])(_this);
        Object(_Utilities__WEBPACK_IMPORTED_MODULE_6__["warnDeprecations"])(COMPONENT_NAME, props, {
            ignoreExternalFocusing: 'focusTrapZoneProps',
            forceFocusInsideTrap: 'focusTrapZoneProps',
            firstFocusableSelector: 'focusTrapZoneProps',
        });
        _this.state = {
            isFooterSticky: false,
            // intentionally ignore props so animation takes place during componentDidMount
            visibility: PanelVisibilityState.closed,
            id: Object(_Utilities__WEBPACK_IMPORTED_MODULE_6__["getId"])('Panel'),
        };
        return _this;
    }
    PanelBase.getDerivedStateFromProps = function (nextProps, prevState) {
        if (nextProps.isOpen === undefined) {
            return null; // no state update
        }
        if (nextProps.isOpen &&
            (prevState.visibility === PanelVisibilityState.closed ||
                prevState.visibility === PanelVisibilityState.animatingClosed)) {
            return { visibility: PanelVisibilityState.animatingOpen };
        }
        if (!nextProps.isOpen &&
            (prevState.visibility === PanelVisibilityState.open ||
                prevState.visibility === PanelVisibilityState.animatingOpen)) {
            return { visibility: PanelVisibilityState.animatingClosed };
        }
        return null;
    };
    PanelBase.prototype.componentDidMount = function () {
        this._events.on(window, 'resize', this._updateFooterPosition);
        if (this._shouldListenForOuterClick(this.props)) {
            this._events.on(document.body, 'mousedown', this._dismissOnOuterClick, true);
        }
        if (this.props.isOpen) {
            this.setState({ visibility: PanelVisibilityState.animatingOpen });
        }
    };
    PanelBase.prototype.componentDidUpdate = function (previousProps, previousState) {
        var shouldListenOnOuterClick = this._shouldListenForOuterClick(this.props);
        var previousShouldListenOnOuterClick = this._shouldListenForOuterClick(previousProps);
        if (this.state.visibility !== previousState.visibility) {
            this._clearExistingAnimationTimer();
            if (this.state.visibility === PanelVisibilityState.animatingOpen) {
                this._animateTo(PanelVisibilityState.open);
            }
            else if (this.state.visibility === PanelVisibilityState.animatingClosed) {
                this._animateTo(PanelVisibilityState.closed);
            }
        }
        if (shouldListenOnOuterClick && !previousShouldListenOnOuterClick) {
            this._events.on(document.body, 'mousedown', this._dismissOnOuterClick, true);
        }
        else if (!shouldListenOnOuterClick && previousShouldListenOnOuterClick) {
            this._events.off(document.body, 'mousedown', this._dismissOnOuterClick, true);
        }
    };
    PanelBase.prototype.componentWillUnmount = function () {
        this._async.dispose();
        this._events.dispose();
    };
    PanelBase.prototype.render = function () {
        var _a = this.props, _b = _a.className, className = _b === void 0 ? '' : _b, elementToFocusOnDismiss = _a.elementToFocusOnDismiss, 
        /* eslint-disable deprecation/deprecation */
        firstFocusableSelector = _a.firstFocusableSelector, focusTrapZoneProps = _a.focusTrapZoneProps, forceFocusInsideTrap = _a.forceFocusInsideTrap, hasCloseButton = _a.hasCloseButton, headerText = _a.headerText, _c = _a.headerClassName, headerClassName = _c === void 0 ? '' : _c, ignoreExternalFocusing = _a.ignoreExternalFocusing, 
        /* eslint-enable deprecation/deprecation */
        isBlocking = _a.isBlocking, isFooterAtBottom = _a.isFooterAtBottom, isLightDismiss = _a.isLightDismiss, isHiddenOnDismiss = _a.isHiddenOnDismiss, layerProps = _a.layerProps, overlayProps = _a.overlayProps, popupProps = _a.popupProps, type = _a.type, styles = _a.styles, theme = _a.theme, customWidth = _a.customWidth, _d = _a.onLightDismissClick, onLightDismissClick = _d === void 0 ? this._onPanelClick : _d, _e = _a.onRenderNavigation, onRenderNavigation = _e === void 0 ? this._onRenderNavigation : _e, _f = _a.onRenderHeader, onRenderHeader = _f === void 0 ? this._onRenderHeader : _f, _g = _a.onRenderBody, onRenderBody = _g === void 0 ? this._onRenderBody : _g, _h = _a.onRenderFooter, onRenderFooter = _h === void 0 ? this._onRenderFooter : _h;
        var _j = this.state, isFooterSticky = _j.isFooterSticky, visibility = _j.visibility, id = _j.id;
        var isLeft = type === _Panel_types__WEBPACK_IMPORTED_MODULE_8__["PanelType"].smallFixedNear || type === _Panel_types__WEBPACK_IMPORTED_MODULE_8__["PanelType"].customNear ? true : false;
        var isRTL = Object(_Utilities__WEBPACK_IMPORTED_MODULE_6__["getRTL"])(theme);
        var isOnRightSide = isRTL ? isLeft : !isLeft;
        var customWidthStyles = type === _Panel_types__WEBPACK_IMPORTED_MODULE_8__["PanelType"].custom || type === _Panel_types__WEBPACK_IMPORTED_MODULE_8__["PanelType"].customNear ? { width: customWidth } : {};
        var nativeProps = Object(_Utilities__WEBPACK_IMPORTED_MODULE_6__["getNativeProps"])(this.props, _Utilities__WEBPACK_IMPORTED_MODULE_6__["divProperties"]);
        var isOpen = this.isActive;
        var isAnimating = visibility === PanelVisibilityState.animatingClosed || visibility === PanelVisibilityState.animatingOpen;
        this._headerTextId = headerText && id + '-headerText';
        if (!isOpen && !isAnimating && !isHiddenOnDismiss) {
            return null;
        }
        this._classNames = getClassNames(styles, {
            theme: theme,
            className: className,
            focusTrapZoneClassName: focusTrapZoneProps ? focusTrapZoneProps.className : undefined,
            hasCloseButton: hasCloseButton,
            headerClassName: headerClassName,
            isAnimating: isAnimating,
            isFooterSticky: isFooterSticky,
            isFooterAtBottom: isFooterAtBottom,
            isOnRightSide: isOnRightSide,
            isOpen: isOpen,
            isHiddenOnDismiss: isHiddenOnDismiss,
            type: type,
            hasCustomNavigation: this._hasCustomNavigation,
        });
        var _k = this, _classNames = _k._classNames, _allowTouchBodyScroll = _k._allowTouchBodyScroll;
        var overlay;
        if (isBlocking && isOpen) {
            overlay = (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Overlay__WEBPACK_IMPORTED_MODULE_4__["Overlay"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ className: _classNames.overlay, isDarkThemed: false, onClick: isLightDismiss ? onLightDismissClick : undefined, allowTouchBodyScroll: _allowTouchBodyScroll }, overlayProps)));
        }
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Layer__WEBPACK_IMPORTED_MODULE_3__["Layer"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, layerProps),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Popup__WEBPACK_IMPORTED_MODULE_5__["Popup"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ role: "dialog", "aria-modal": "true", ariaLabelledBy: this._headerTextId ? this._headerTextId : undefined, onDismiss: this.dismiss, className: _classNames.hiddenPanel }, popupProps),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ "aria-hidden": !isOpen && isAnimating }, nativeProps, { ref: this._panel, className: _classNames.root }),
                    overlay,
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_FocusTrapZone_index__WEBPACK_IMPORTED_MODULE_7__["FocusTrapZone"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ ignoreExternalFocusing: ignoreExternalFocusing, forceFocusInsideTrap: !isBlocking || (isHiddenOnDismiss && !isOpen) ? false : forceFocusInsideTrap, firstFocusableSelector: firstFocusableSelector, isClickableOutsideFocusTrap: true }, focusTrapZoneProps, { className: _classNames.main, style: customWidthStyles, elementToFocusOnDismiss: elementToFocusOnDismiss }),
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: _classNames.commands, "data-is-visible": true }, onRenderNavigation(this.props, this._onRenderNavigation)),
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: _classNames.contentInner },
                            (this._hasCustomNavigation || !hasCloseButton) &&
                                onRenderHeader(this.props, this._onRenderHeader, this._headerTextId),
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { ref: this._allowScrollOnPanel, className: _classNames.scrollableContent, "data-is-scrollable": true }, onRenderBody(this.props, this._onRenderBody)),
                            onRenderFooter(this.props, this._onRenderFooter)))))));
    };
    PanelBase.prototype.open = function () {
        if (this.props.isOpen !== undefined) {
            return;
        }
        if (this.isActive) {
            return;
        }
        this.setState({ visibility: PanelVisibilityState.animatingOpen });
    };
    PanelBase.prototype.close = function () {
        if (this.props.isOpen !== undefined) {
            return;
        }
        if (!this.isActive) {
            return;
        }
        this.setState({ visibility: PanelVisibilityState.animatingClosed });
    };
    Object.defineProperty(PanelBase.prototype, "isActive", {
        /** isActive is true when panel is open or opening. */
        get: function () {
            return (this.state.visibility === PanelVisibilityState.open ||
                this.state.visibility === PanelVisibilityState.animatingOpen);
        },
        enumerable: true,
        configurable: true
    });
    PanelBase.prototype._shouldListenForOuterClick = function (props) {
        return !!props.isBlocking && !!props.isOpen;
    };
    PanelBase.prototype._updateFooterPosition = function () {
        var scrollableContent = this._scrollableContent;
        if (scrollableContent) {
            var height = scrollableContent.clientHeight;
            var innerHeight_1 = scrollableContent.scrollHeight;
            this.setState({
                isFooterSticky: height < innerHeight_1 ? true : false,
            });
        }
    };
    PanelBase.prototype._dismissOnOuterClick = function (ev) {
        var panel = this._panel.current;
        if (this.isActive && panel && !ev.defaultPrevented) {
            if (!Object(_Utilities__WEBPACK_IMPORTED_MODULE_6__["elementContains"])(panel, ev.target)) {
                if (this.props.onOuterClick) {
                    this.props.onOuterClick();
                    ev.preventDefault();
                }
                else {
                    this.dismiss(ev);
                }
            }
        }
    };
    PanelBase.defaultProps = {
        isHiddenOnDismiss: false,
        isOpen: undefined,
        isBlocking: true,
        hasCloseButton: true,
        type: _Panel_types__WEBPACK_IMPORTED_MODULE_8__["PanelType"].smallFixedFar,
    };
    return PanelBase;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));

//# sourceMappingURL=Panel.base.js.map

/***/ }),

/***/ "A72S":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/Panel/Panel.types.js ***!
  \***********************************************************************************************************************************************************************************************/
/*! exports provided: PanelType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PanelType", function() { return PanelType; });
/**
 * {@docCategory Panel}
 */
var PanelType;
(function (PanelType) {
    /**
     * Renders the Panel with a `fluid` (full screen) width.
     * Recommended for use on small screen breakpoints.
     * - Small (320-479): full screen width, 16px left/right padding
     * - Medium (480-639): full screen width, 16px left/right padding
     * - Large (640-1023): full screen width, 32px left/right padding
     * - XLarge (1024-1365): full screen width, 32px left/right padding
     * - XXLarge (1366-up): full screen width, 40px left/right padding
     */
    PanelType[PanelType["smallFluid"] = 0] = "smallFluid";
    /**
     * Renders the Panel in fixed-width `small` size, anchored to the far side (right in LTR mode).
     * - Small (320-479): adapts to `PanelType.smallFluid` at this breakpoint
     * - Medium (480-639): 340px width, 16px left/right padding
     * - Large (640-1023): 340px width, 32px left/right padding
     * - XLarge (1024-1365): 340px width, 32px left/right padding
     * - XXLarge (1366-up): 340px width, 40px left/right padding
     */
    PanelType[PanelType["smallFixedFar"] = 1] = "smallFixedFar";
    /**
     * Renders the Panel in fixed-width `small` size, anchored to the near side (left in LTR mode).
     * - Small (320-479): 272px width, 16px left/right padding
     * - Medium (480-639): 272px width, 16px left/right padding
     * - Large (640-1023): 272px width, 32px left/right padding
     * - XLarge (1024-1365): 272px width, 32px left/right padding
     * - XXLarge (1366-up): 272px width, 40px left/right padding
     */
    PanelType[PanelType["smallFixedNear"] = 2] = "smallFixedNear";
    /**
     * Renders the Panel in `medium` size, anchored to the far side (right in LTR mode).
     * - Small (320-479): adapts to `PanelType.smallFluid` at this breakpoint
     * - Medium (480-639): adapts to `PanelType.smallFixedFar` at this breakpoint
     * - Large (640-1023): 592px width, 32px left/right padding
     * - XLarge (1024-1365): 644px width, 32px left/right padding
     * - XXLarge (1366-up): 644px width, 40px left/right padding
     */
    PanelType[PanelType["medium"] = 3] = "medium";
    /**
     * Renders the Panel in `large` size, anchored to the far side (right in LTR mode).
     * - Small (320-479): adapts to `PanelType.smallFluid` at this breakpoint
     * - Medium (480-639):  adapts to `PanelType.smallFixedFar` at this breakpoint
     * - Large (640-1023): adapts to `PanelType.medium` at this breakpoint
     * - XLarge (1024-1365): 48px fixed left margin, fluid width, 32px left/right padding
     * - XXLarge (1366-up): 428px fixed left margin, fluid width, 40px left/right padding
     */
    PanelType[PanelType["large"] = 4] = "large";
    /**
     * Renders the Panel in `large` size, anchored to the far side (right in LTR mode), with a fixed width at
     * XX-Large breakpoint.
     * - Small (320-479): adapts to `PanelType.smallFluid` at this breakpoint
     * - Medium (480-639): adapts to `PanelType.smallFixedFar` at this breakpoint
     * - Large (640-1023): adapts to `PanelType.medium` at this breakpoint
     * - XLarge (1024-1365): 48px fixed left margin, fluid width, 32px left/right padding
     * - XXLarge (1366-up): 940px width, 40px left/right padding
     */
    PanelType[PanelType["largeFixed"] = 5] = "largeFixed";
    /**
     * Renders the Panel in `extra large` size, anchored to the far side (right in LTR mode).
     * - Small (320-479): adapts to `PanelType.smallFluid` at this breakpoint
     * - Medium (480-639): adapts to `PanelType.smallFixedFar` at this breakpoint
     * - Large (640-1023): adapts to `PanelType.medium` at this breakpoint
     * - XLarge (1024-1365): adapts to `PanelType.large` at this breakpoint
     * - XXLarge (1366-1919): 176px fixed left margin, fluid width, 40px left/right padding
     * - XXXLarge (1920-up): 176px fixed left margin, fluid width, 40px left/right padding
     */
    PanelType[PanelType["extraLarge"] = 6] = "extraLarge";
    /**
     * Renders the Panel in `custom` size using `customWidth`, anchored to the far side (right in LTR mode).
     * - Has a fixed width provided by the `customWidth` prop
     * - When screen width reaches the `customWidth` value it will behave like a fluid width Panel
     * taking up 100% of the viewport width
     */
    PanelType[PanelType["custom"] = 7] = "custom";
    /**
     * Renders the Panel in `custom` size using `customWidth`, anchored to the near side (left in LTR mode).
     * - Has a fixed width provided by the `customWidth` prop
     * - When screen width reaches the `customWidth` value it will behave like a fluid width Panel
     * taking up 100% of the viewport width
     */
    PanelType[PanelType["customNear"] = 8] = "customNear";
})(PanelType || (PanelType = {}));
//# sourceMappingURL=Panel.types.js.map

/***/ }),

/***/ "B2H9":
/*!************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/Panel/Panel.styles.js ***!
  \************************************************************************************************************************************************************************************************/
/*! exports provided: getStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStyles", function() { return getStyles; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Panel_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Panel.types */ "A72S");
/* harmony import */ var _Styling__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Styling */ "PL71");
var _a, _b, _c, _d, _e;



var GlobalClassNames = {
    root: 'ms-Panel',
    main: 'ms-Panel-main',
    commands: 'ms-Panel-commands',
    contentInner: 'ms-Panel-contentInner',
    scrollableContent: 'ms-Panel-scrollableContent',
    navigation: 'ms-Panel-navigation',
    closeButton: 'ms-Panel-closeButton ms-PanelAction-close',
    header: 'ms-Panel-header',
    headerText: 'ms-Panel-headerText',
    content: 'ms-Panel-content',
    footer: 'ms-Panel-footer',
    footerInner: 'ms-Panel-footerInner',
    isOpen: 'is-open',
    hasCloseButton: 'ms-Panel--hasCloseButton',
    smallFluid: 'ms-Panel--smFluid',
    smallFixedNear: 'ms-Panel--smLeft',
    smallFixedFar: 'ms-Panel--sm',
    medium: 'ms-Panel--md',
    large: 'ms-Panel--lg',
    largeFixed: 'ms-Panel--fixed',
    extraLarge: 'ms-Panel--xl',
    custom: 'ms-Panel--custom',
    customNear: 'ms-Panel--customLeft',
};
var panelWidth = {
    full: '100%',
    auto: 'auto',
    xs: 272,
    sm: 340,
    md1: 592,
    md2: 644,
    lg: 940,
};
var panelMargin = {
    auto: 'auto',
    none: 0,
    md: 48,
    lg: 428,
    xl: 176,
};
// Following consts are used below in `getPanelBreakpoints()` function to provide
// necessary fallbacks for different types of Panel in different breakpoints.
var smallPanelSelectors = (_a = {},
    _a["@media (min-width: " + _Styling__WEBPACK_IMPORTED_MODULE_2__["ScreenWidthMinMedium"] + "px)"] = {
        width: panelWidth.sm,
    },
    _a);
var mediumPanelSelectors = (_b = {},
    _b["@media (min-width: " + _Styling__WEBPACK_IMPORTED_MODULE_2__["ScreenWidthMinLarge"] + "px)"] = {
        width: panelWidth.md1,
    },
    _b["@media (min-width: " + _Styling__WEBPACK_IMPORTED_MODULE_2__["ScreenWidthMinXLarge"] + "px)"] = {
        width: panelWidth.md2,
    },
    _b);
var largePanelSelectors = (_c = {},
    _c["@media (min-width: " + _Styling__WEBPACK_IMPORTED_MODULE_2__["ScreenWidthMinUhfMobile"] + "px)"] = {
        left: panelMargin.md,
        width: panelWidth.auto,
    },
    _c["@media (min-width: " + _Styling__WEBPACK_IMPORTED_MODULE_2__["ScreenWidthMinXXLarge"] + "px)"] = {
        left: panelMargin.lg,
    },
    _c);
var largeFixedPanelSelectors = (_d = {},
    _d["@media (min-width: " + _Styling__WEBPACK_IMPORTED_MODULE_2__["ScreenWidthMinXXLarge"] + "px)"] = {
        left: panelMargin.auto,
        width: panelWidth.lg,
    },
    _d);
var extraLargePanelSelectors = (_e = {},
    _e["@media (min-width: " + _Styling__WEBPACK_IMPORTED_MODULE_2__["ScreenWidthMinXXLarge"] + "px)"] = {
        left: panelMargin.xl,
    },
    _e);
// Make sure Panels have fallbacks to different breakpoints by reusing same selectors.
// This is done in the effort to follow design redlines.
var getPanelBreakpoints = function (type) {
    var selectors;
    // Panel types `smallFluid`, `smallFixedNear`, `custom` and `customNear`
    // are not checked in here because they render the same in all the breakpoints
    // and have the checks done separately in the `getStyles` function below.
    switch (type) {
        case _Panel_types__WEBPACK_IMPORTED_MODULE_1__["PanelType"].smallFixedFar:
            selectors = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, smallPanelSelectors);
            break;
        case _Panel_types__WEBPACK_IMPORTED_MODULE_1__["PanelType"].medium:
            selectors = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, smallPanelSelectors), mediumPanelSelectors);
            break;
        case _Panel_types__WEBPACK_IMPORTED_MODULE_1__["PanelType"].large:
            selectors = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, smallPanelSelectors), mediumPanelSelectors), largePanelSelectors);
            break;
        case _Panel_types__WEBPACK_IMPORTED_MODULE_1__["PanelType"].largeFixed:
            selectors = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, smallPanelSelectors), mediumPanelSelectors), largePanelSelectors), largeFixedPanelSelectors);
            break;
        case _Panel_types__WEBPACK_IMPORTED_MODULE_1__["PanelType"].extraLarge:
            selectors = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, smallPanelSelectors), mediumPanelSelectors), largePanelSelectors), extraLargePanelSelectors);
            break;
        default:
            break;
    }
    return selectors;
};
var commandBarHeight = '44px';
var sharedPaddingStyles = {
    paddingLeft: '24px',
    paddingRight: '24px',
};
var getStyles = function (props) {
    var _a;
    var className = props.className, focusTrapZoneClassName = props.focusTrapZoneClassName, hasCloseButton = props.hasCloseButton, headerClassName = props.headerClassName, isAnimating = props.isAnimating, isFooterSticky = props.isFooterSticky, isFooterAtBottom = props.isFooterAtBottom, isOnRightSide = props.isOnRightSide, isOpen = props.isOpen, isHiddenOnDismiss = props.isHiddenOnDismiss, hasCustomNavigation = props.hasCustomNavigation, theme = props.theme, _b = props.type, type = _b === void 0 ? _Panel_types__WEBPACK_IMPORTED_MODULE_1__["PanelType"].smallFixedFar : _b;
    var effects = theme.effects, fonts = theme.fonts, semanticColors = theme.semanticColors;
    var classNames = Object(_Styling__WEBPACK_IMPORTED_MODULE_2__["getGlobalClassNames"])(GlobalClassNames, theme);
    var isCustomPanel = type === _Panel_types__WEBPACK_IMPORTED_MODULE_1__["PanelType"].custom || type === _Panel_types__WEBPACK_IMPORTED_MODULE_1__["PanelType"].customNear;
    return {
        root: [
            classNames.root,
            theme.fonts.medium,
            isOpen && classNames.isOpen,
            hasCloseButton && classNames.hasCloseButton,
            {
                pointerEvents: 'none',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
            },
            isCustomPanel && isOnRightSide && classNames.custom,
            isCustomPanel && !isOnRightSide && classNames.customNear,
            className,
        ],
        overlay: [
            {
                pointerEvents: 'auto',
                cursor: 'pointer',
            },
            isOpen && isAnimating && _Styling__WEBPACK_IMPORTED_MODULE_2__["AnimationClassNames"].fadeIn100,
            !isOpen && isAnimating && _Styling__WEBPACK_IMPORTED_MODULE_2__["AnimationClassNames"].fadeOut100,
        ],
        hiddenPanel: [
            !isOpen &&
                !isAnimating &&
                isHiddenOnDismiss && {
                visibility: 'hidden',
            },
        ],
        main: [
            classNames.main,
            {
                backgroundColor: semanticColors.bodyBackground,
                boxShadow: effects.elevation64,
                pointerEvents: 'auto',
                position: 'absolute',
                display: 'flex',
                flexDirection: 'column',
                overflowX: 'hidden',
                overflowY: 'auto',
                WebkitOverflowScrolling: 'touch',
                bottom: 0,
                top: 0,
                // left, right, width are overridden depending on the type of the Panel and the screen breakpoint.
                left: panelMargin.auto,
                right: panelMargin.none,
                width: panelWidth.full,
                selectors: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])((_a = {}, _a[_Styling__WEBPACK_IMPORTED_MODULE_2__["HighContrastSelector"]] = {
                    borderLeft: "3px solid " + semanticColors.variantBorder,
                    borderRight: "3px solid " + semanticColors.variantBorder,
                }, _a), getPanelBreakpoints(type)),
            },
            type === _Panel_types__WEBPACK_IMPORTED_MODULE_1__["PanelType"].smallFluid && {
                left: panelMargin.none,
            },
            type === _Panel_types__WEBPACK_IMPORTED_MODULE_1__["PanelType"].smallFixedNear && {
                left: panelMargin.none,
                right: panelMargin.auto,
                width: panelWidth.xs,
            },
            type === _Panel_types__WEBPACK_IMPORTED_MODULE_1__["PanelType"].customNear && {
                right: 'auto',
                left: 0,
            },
            isCustomPanel && {
                maxWidth: '100vw',
            },
            isOpen && isAnimating && !isOnRightSide && _Styling__WEBPACK_IMPORTED_MODULE_2__["AnimationClassNames"].slideRightIn40,
            isOpen && isAnimating && isOnRightSide && _Styling__WEBPACK_IMPORTED_MODULE_2__["AnimationClassNames"].slideLeftIn40,
            !isOpen && isAnimating && !isOnRightSide && _Styling__WEBPACK_IMPORTED_MODULE_2__["AnimationClassNames"].slideLeftOut40,
            !isOpen && isAnimating && isOnRightSide && _Styling__WEBPACK_IMPORTED_MODULE_2__["AnimationClassNames"].slideRightOut40,
            focusTrapZoneClassName,
        ],
        commands: [
            classNames.commands,
            {
                marginTop: 18,
            },
            hasCustomNavigation && {
                marginTop: 'inherit',
            },
        ],
        navigation: [
            classNames.navigation,
            {
                display: 'flex',
                justifyContent: 'flex-end',
            },
            hasCustomNavigation && {
                height: commandBarHeight,
            },
        ],
        contentInner: [
            classNames.contentInner,
            {
                display: 'flex',
                flexDirection: 'column',
                flexGrow: 1,
                overflowY: 'hidden',
            },
        ],
        header: [
            classNames.header,
            sharedPaddingStyles,
            {
                alignSelf: 'flex-start',
            },
            hasCloseButton &&
                !hasCustomNavigation && {
                flexGrow: 1,
            },
            hasCustomNavigation && {
                // Ensure that title doesn't shrink if screen is too small
                flexShrink: 0,
            },
        ],
        headerText: [
            classNames.headerText,
            fonts.xLarge,
            {
                color: semanticColors.bodyText,
                lineHeight: '27px',
                overflowWrap: 'break-word',
                wordWrap: 'break-word',
                wordBreak: 'break-word',
                hyphens: 'auto',
            },
            headerClassName,
        ],
        scrollableContent: [
            classNames.scrollableContent,
            {
                overflowY: 'auto',
            },
            isFooterAtBottom && {
                flexGrow: 1,
            },
        ],
        content: [
            classNames.content,
            sharedPaddingStyles,
            {
                paddingBottom: 20,
            },
        ],
        footer: [
            classNames.footer,
            {
                // Ensure that footer doesn't shrink if screen is too small
                flexShrink: 0,
                borderTop: '1px solid transparent',
                transition: "opacity " + _Styling__WEBPACK_IMPORTED_MODULE_2__["AnimationVariables"].durationValue3 + " " + _Styling__WEBPACK_IMPORTED_MODULE_2__["AnimationVariables"].easeFunction2,
            },
            isFooterSticky && {
                background: semanticColors.bodyBackground,
                borderTopColor: semanticColors.variantBorder,
            },
        ],
        footerInner: [
            classNames.footerInner,
            sharedPaddingStyles,
            {
                paddingBottom: 16,
                paddingTop: 16,
            },
        ],
        subComponentStyles: {
            closeButton: {
                root: [
                    classNames.closeButton,
                    {
                        marginRight: 14,
                        color: theme.palette.neutralSecondary,
                        fontSize: _Styling__WEBPACK_IMPORTED_MODULE_2__["IconFontSizes"].large,
                    },
                    hasCustomNavigation && {
                        marginRight: 0,
                        height: 'auto',
                        width: '44px',
                    },
                ],
                rootHovered: {
                    color: theme.palette.neutralPrimary,
                },
            },
        },
    };
};
//# sourceMappingURL=Panel.styles.js.map

/***/ }),

/***/ "Momc":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/Panel/Panel.js ***!
  \*****************************************************************************************************************************************************************************************/
/*! exports provided: Panel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Panel", function() { return Panel; });
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Utilities */ "mkpW");
/* harmony import */ var _Panel_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Panel.base */ "8b9x");
/* harmony import */ var _Panel_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Panel.styles */ "B2H9");



/**
 * Panel description
 */
var Panel = Object(_Utilities__WEBPACK_IMPORTED_MODULE_0__["styled"])(_Panel_base__WEBPACK_IMPORTED_MODULE_1__["PanelBase"], _Panel_styles__WEBPACK_IMPORTED_MODULE_2__["getStyles"], undefined, {
    scope: 'Panel',
});
//# sourceMappingURL=Panel.js.map

/***/ }),

/***/ "Wa6+":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/Panel/index.js ***!
  \*****************************************************************************************************************************************************************************************/
/*! exports provided: Panel, PanelBase, PanelType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Panel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Panel */ "Momc");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Panel", function() { return _Panel__WEBPACK_IMPORTED_MODULE_0__["Panel"]; });

/* harmony import */ var _Panel_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Panel.base */ "8b9x");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PanelBase", function() { return _Panel_base__WEBPACK_IMPORTED_MODULE_1__["PanelBase"]; });

/* harmony import */ var _Panel_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Panel.types */ "A72S");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PanelType", function() { return _Panel_types__WEBPACK_IMPORTED_MODULE_2__["PanelType"]; });




//# sourceMappingURL=index.js.map

/***/ }),

/***/ "ZelK":
/*!************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/Popup.js ***!
  \************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Loading office-ui-fabric-react/./lib/Popup.js
var pkg = __webpack_require__(/*! @microsoft/office-ui-fabric-react-bundle */ "KL1q");
module.exports = pkg.workaround_Popup;

/***/ }),

/***/ "p6C6":
/*!************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/Panel.js ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: Panel, PanelBase, PanelType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Panel_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Panel/index */ "Wa6+");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Panel", function() { return _components_Panel_index__WEBPACK_IMPORTED_MODULE_0__["Panel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PanelBase", function() { return _components_Panel_index__WEBPACK_IMPORTED_MODULE_0__["PanelBase"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PanelType", function() { return _components_Panel_index__WEBPACK_IMPORTED_MODULE_0__["PanelType"]; });


//# sourceMappingURL=Panel.js.map

/***/ })

}]);
//# sourceMappingURL=chunk.1_[locale].js.map