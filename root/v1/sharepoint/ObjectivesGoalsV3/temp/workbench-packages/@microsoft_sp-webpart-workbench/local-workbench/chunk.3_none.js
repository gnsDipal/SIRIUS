(window["webpackJsonp_1e2cdec9_1360_4295_b73c_98d6f51866d5_0_1_0"] = window["webpackJsonp_1e2cdec9_1360_4295_b73c_98d6f51866d5_0_1_0"] || []).push([[3],{

/***/ "+MEO":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/Modal/Modal.base.js ***!
  \**********************************************************************************************************************************************************************************************/
/*! exports provided: ModalBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalBase", function() { return ModalBase; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Utilities */ "mkpW");
/* harmony import */ var _FocusTrapZone_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../FocusTrapZone/index */ "3WSi");
/* harmony import */ var _Modal_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Modal.styles */ "+msp");
/* harmony import */ var _Overlay__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Overlay */ "OqUb");
/* harmony import */ var _Layer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Layer */ "YZp6");
/* harmony import */ var _Popup_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Popup/index */ "Q21x");
/* harmony import */ var _Popup_index__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_Popup_index__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _utilities_decorators_withResponsiveMode__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../utilities/decorators/withResponsiveMode */ "5qgq");
/* harmony import */ var _utilities_decorators_withResponsiveMode__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_utilities_decorators_withResponsiveMode__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _Callout_index__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Callout/index */ "B5pZ");
/* harmony import */ var _Icon_index__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Icon/index */ "IsAY");
/* harmony import */ var _Icon_index__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_Icon_index__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _utilities_DraggableZone_index__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../utilities/DraggableZone/index */ "+YI6");
/* harmony import */ var _uifabric_utilities__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @uifabric/utilities */ "P2cQ");
/* harmony import */ var _uifabric_utilities__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_uifabric_utilities__WEBPACK_IMPORTED_MODULE_12__);













// @TODO - need to change this to a panel whenever the breakpoint is under medium (verify the spec)
var DefaultLayerProps = {
    eventBubblingEnabled: false,
};
var getClassNames = Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["classNamesFunction"])();
var COMPONENT_NAME = 'Modal';
var ModalBase = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ModalBase, _super);
    function ModalBase(props) {
        var _this = _super.call(this, props) || this;
        _this._focusTrapZone = react__WEBPACK_IMPORTED_MODULE_1__["createRef"]();
        _this._registerInitialModalPosition = function () {
            var _a;
            if (((_a = _this.props.dragOptions) === null || _a === void 0 ? void 0 : _a.keepInBounds) && !_this._minClampedPosition && !_this._maxClampedPosition) {
                var dialogMain = document.querySelector("[data-id=" + _this.state.id + "]");
                if (dialogMain) {
                    var modalRectangle = dialogMain.getBoundingClientRect();
                    _this._minClampedPosition = { x: -modalRectangle.x, y: -modalRectangle.y };
                    _this._maxClampedPosition = { x: modalRectangle.x, y: modalRectangle.y };
                }
            }
        };
        // Allow the user to scroll within the modal but not on the body
        _this._allowScrollOnModal = function (elt) {
            if (elt) {
                if (_this._allowTouchBodyScroll) {
                    Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["allowOverscrollOnElement"])(elt, _this._events);
                }
                else {
                    Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["allowScrollOnElement"])(elt, _this._events);
                }
            }
            else {
                _this._events.off(_this._scrollableContent);
            }
            _this._scrollableContent = elt;
        };
        _this._onModalContextMenuClose = function () {
            _this.setState({ isModalMenuOpen: false });
        };
        _this._onModalClose = function () {
            _this._lastSetX = 0;
            _this._lastSetY = 0;
            _this.setState({
                isModalMenuOpen: false,
                isInKeyboardMoveMode: false,
                isOpen: false,
                x: 0,
                y: 0,
            });
            if (_this.props.dragOptions && _this._hasRegisteredKeyUp) {
                _this._events.off(window, 'keyup', _this._onKeyUp, true /* useCapture */);
            }
            // Call the onDismiss callback
            if (_this.props.onDismissed) {
                _this.props.onDismissed();
            }
        };
        _this._onDragStart = function () {
            _this.setState({ isModalMenuOpen: false, isInKeyboardMoveMode: false });
        };
        _this._onDrag = function (_, ui) {
            var _a = _this.state, x = _a.x, y = _a.y;
            _this.setState(_this._getClampedPosition({ x: x + ui.delta.x, y: y + ui.delta.y }));
        };
        _this._onDragStop = function () {
            _this.focus();
        };
        _this._onKeyUp = function (event) {
            // Need to handle the CTRL + ALT + SPACE key during keyup due to FireFox bug:
            // https://bugzilla.mozilla.org/show_bug.cgi?id=1220143
            // Otherwise it would continue to fire a click even if the event was cancelled
            // during mouseDown.
            if (event.altKey && event.ctrlKey && event.keyCode === _Utilities__WEBPACK_IMPORTED_MODULE_2__["KeyCodes"].space) {
                // Since this is a global handler, we should make sure the target is within the dialog
                // before opening the dropdown
                if (Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["elementContains"])(_this._scrollableContent, event.target)) {
                    _this.setState({ isModalMenuOpen: !_this.state.isModalMenuOpen });
                    event.preventDefault();
                    event.stopPropagation();
                }
            }
        };
        // We need a global onKeyDown event when we are in the move mode so that we can
        // handle the key presses and the components inside the modal do not get the events
        _this._onKeyDown = function (event) {
            if (event.altKey && event.ctrlKey && event.keyCode === _Utilities__WEBPACK_IMPORTED_MODULE_2__["KeyCodes"].space) {
                // CTRL + ALT + SPACE is handled during keyUp
                event.preventDefault();
                event.stopPropagation();
                return;
            }
            if (_this.state.isModalMenuOpen && (event.altKey || event.keyCode === _Utilities__WEBPACK_IMPORTED_MODULE_2__["KeyCodes"].escape)) {
                _this.setState({ isModalMenuOpen: false });
            }
            if (_this.state.isInKeyboardMoveMode && (event.keyCode === _Utilities__WEBPACK_IMPORTED_MODULE_2__["KeyCodes"].escape || event.keyCode === _Utilities__WEBPACK_IMPORTED_MODULE_2__["KeyCodes"].enter)) {
                _this.setState({ isInKeyboardMoveMode: false });
                event.preventDefault();
                event.stopPropagation();
            }
            if (_this.state.isInKeyboardMoveMode) {
                var handledEvent = true;
                var delta = _this._getMoveDelta(event);
                switch (event.keyCode) {
                    /* eslint-disable no-fallthrough */
                    case _Utilities__WEBPACK_IMPORTED_MODULE_2__["KeyCodes"].escape:
                        _this.setState({ x: _this._lastSetX, y: _this._lastSetY });
                    case _Utilities__WEBPACK_IMPORTED_MODULE_2__["KeyCodes"].enter: {
                        // TODO: determine if fallthrough was intentional
                        /* eslint-enable no-fallthrough */
                        _this._lastSetX = 0;
                        _this._lastSetY = 0;
                        _this.setState({ isInKeyboardMoveMode: false });
                        break;
                    }
                    case _Utilities__WEBPACK_IMPORTED_MODULE_2__["KeyCodes"].up: {
                        _this.setState({
                            y: _this._getClampedPositionY(_this.state.y - delta),
                        });
                        break;
                    }
                    case _Utilities__WEBPACK_IMPORTED_MODULE_2__["KeyCodes"].down: {
                        _this.setState({
                            y: _this._getClampedPositionY(_this.state.y + delta),
                        });
                        break;
                    }
                    case _Utilities__WEBPACK_IMPORTED_MODULE_2__["KeyCodes"].left: {
                        _this.setState({
                            x: _this._getClampedPositionX(_this.state.x - delta),
                        });
                        break;
                    }
                    case _Utilities__WEBPACK_IMPORTED_MODULE_2__["KeyCodes"].right: {
                        _this.setState({
                            x: _this._getClampedPositionX(_this.state.x + delta),
                        });
                        break;
                    }
                    default: {
                        handledEvent = false;
                    }
                }
                if (handledEvent) {
                    event.preventDefault();
                    event.stopPropagation();
                }
            }
        };
        _this._onEnterKeyboardMoveMode = function () {
            _this._lastSetX = _this.state.x;
            _this._lastSetY = _this.state.y;
            _this.setState({ isInKeyboardMoveMode: true, isModalMenuOpen: false });
            _this._events.on(window, 'keydown', _this._onKeyDown, true /* useCapture */);
        };
        _this._onExitKeyboardMoveMode = function () {
            _this._lastSetX = 0;
            _this._lastSetY = 0;
            _this.setState({ isInKeyboardMoveMode: false });
            _this._events.off(window, 'keydown', _this._onKeyDown, true /* useCapture */);
        };
        _this._registerForKeyUp = function () {
            if (!_this._hasRegisteredKeyUp) {
                _this._events.on(window, 'keyup', _this._onKeyUp, true /* useCapture */);
                _this._hasRegisteredKeyUp = true;
            }
        };
        _this._async = new _Utilities__WEBPACK_IMPORTED_MODULE_2__["Async"](_this);
        _this._events = new _Utilities__WEBPACK_IMPORTED_MODULE_2__["EventGroup"](_this);
        Object(_uifabric_utilities__WEBPACK_IMPORTED_MODULE_12__["initializeComponentRef"])(_this);
        Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["warnDeprecations"])(COMPONENT_NAME, props, {
            onLayerDidMount: 'layerProps.onLayerDidMount',
        });
        _this.state = {
            id: Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["getId"])('Modal'),
            isOpen: props.isOpen,
            isVisible: props.isOpen,
            hasBeenOpened: props.isOpen,
            x: 0,
            y: 0,
        };
        _this._lastSetX = 0;
        _this._lastSetY = 0;
        var _a = _this.props.allowTouchBodyScroll, allowTouchBodyScroll = _a === void 0 ? false : _a;
        _this._allowTouchBodyScroll = allowTouchBodyScroll;
        return _this;
    }
    ModalBase.prototype.UNSAFE_componentWillReceiveProps = function (newProps) {
        clearTimeout(this._onModalCloseTimer);
        // Opening the dialog
        if (newProps.isOpen) {
            if (!this.state.isOpen) {
                // First Open
                this.setState({
                    isOpen: true,
                });
                // Add a keyUp handler for all key up events when the dialog is open
                if (newProps.dragOptions) {
                    this._registerForKeyUp();
                }
            }
            else {
                // Modal has been opened
                // Reopen during closing
                this.setState({
                    hasBeenOpened: true,
                    isVisible: true,
                });
                if (newProps.topOffsetFixed) {
                    var dialogMain = document.getElementsByClassName('ms-Dialog-main');
                    var modalRectangle = void 0;
                    if (dialogMain.length > 0) {
                        modalRectangle = dialogMain[0].getBoundingClientRect();
                        this.setState({
                            modalRectangleTop: modalRectangle.top,
                        });
                    }
                }
            }
        }
        // Closing the dialog
        if (!newProps.isOpen && this.state.isOpen) {
            this._onModalCloseTimer = this._async.setTimeout(this._onModalClose, parseFloat(_Modal_styles__WEBPACK_IMPORTED_MODULE_4__["animationDuration"]) * 1000);
            this.setState({
                isVisible: false,
            });
        }
    };
    ModalBase.prototype.componentDidMount = function () {
        // Not all modals show just by updating their props. Some only render when they are mounted and pass in
        // isOpen as true. We need to add the keyUp handler in componentDidMount if we are in that case.
        if (this.state.isOpen && this.state.isVisible) {
            this._registerForKeyUp();
            this._registerInitialModalPosition();
        }
    };
    ModalBase.prototype.componentDidUpdate = function (prevProps, prevState) {
        var _this = this;
        if (!prevProps.isOpen && !prevState.isVisible) {
            this.setState({
                isVisible: true,
            });
        }
        if (!prevProps.isOpen && this.props.isOpen) {
            requestAnimationFrame(function () { return setTimeout(_this._registerInitialModalPosition, 0); });
        }
    };
    ModalBase.prototype.componentWillUnmount = function () {
        this._async.dispose();
        this._events.dispose();
    };
    ModalBase.prototype.render = function () {
        var _a = this.props, className = _a.className, containerClassName = _a.containerClassName, scrollableContentClassName = _a.scrollableContentClassName, elementToFocusOnDismiss = _a.elementToFocusOnDismiss, firstFocusableSelector = _a.firstFocusableSelector, forceFocusInsideTrap = _a.forceFocusInsideTrap, ignoreExternalFocusing = _a.ignoreExternalFocusing, isBlocking = _a.isBlocking, isClickableOutsideFocusTrap = _a.isClickableOutsideFocusTrap, isDarkOverlay = _a.isDarkOverlay, onDismiss = _a.onDismiss, layerProps = _a.layerProps, overlay = _a.overlay, responsiveMode = _a.responsiveMode, titleAriaId = _a.titleAriaId, styles = _a.styles, subtitleAriaId = _a.subtitleAriaId, theme = _a.theme, topOffsetFixed = _a.topOffsetFixed, 
        // eslint-disable-next-line deprecation/deprecation
        onLayerDidMount = _a.onLayerDidMount, isModeless = _a.isModeless, dragOptions = _a.dragOptions, enableAriaHiddenSiblings = _a.enableAriaHiddenSiblings;
        var _b = this.state, isOpen = _b.isOpen, isVisible = _b.isVisible, hasBeenOpened = _b.hasBeenOpened, modalRectangleTop = _b.modalRectangleTop, x = _b.x, y = _b.y, isInKeyboardMoveMode = _b.isInKeyboardMoveMode;
        if (!isOpen) {
            return null;
        }
        var layerClassName = layerProps === undefined ? '' : layerProps.className;
        var classNames = getClassNames(styles, {
            theme: theme,
            className: className,
            containerClassName: containerClassName,
            scrollableContentClassName: scrollableContentClassName,
            isOpen: isOpen,
            isVisible: isVisible,
            hasBeenOpened: hasBeenOpened,
            modalRectangleTop: modalRectangleTop,
            topOffsetFixed: topOffsetFixed,
            isModeless: isModeless,
            layerClassName: layerClassName,
            isDefaultDragHandle: dragOptions && !dragOptions.dragHandleSelector,
        });
        var mergedLayerProps = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, DefaultLayerProps), this.props.layerProps), { onLayerDidMount: layerProps && layerProps.onLayerDidMount ? layerProps.onLayerDidMount : onLayerDidMount, insertFirst: isModeless, className: classNames.layer });
        var modalContent = (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_FocusTrapZone_index__WEBPACK_IMPORTED_MODULE_3__["FocusTrapZone"], { "data-id": this.state.id, componentRef: this._focusTrapZone, className: classNames.main, elementToFocusOnDismiss: elementToFocusOnDismiss, isClickableOutsideFocusTrap: isModeless || isClickableOutsideFocusTrap || !isBlocking, ignoreExternalFocusing: ignoreExternalFocusing, forceFocusInsideTrap: isModeless ? !isModeless : forceFocusInsideTrap, firstFocusableSelector: firstFocusableSelector, focusPreviouslyFocusedInnerElement: true, onBlur: isInKeyboardMoveMode ? this._onExitKeyboardMoveMode : undefined, enableAriaHiddenSiblings: enableAriaHiddenSiblings },
            dragOptions && isInKeyboardMoveMode && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: classNames.keyboardMoveIconContainer }, dragOptions.keyboardMoveIconProps ? (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Icon_index__WEBPACK_IMPORTED_MODULE_10__["Icon"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, dragOptions.keyboardMoveIconProps))) : (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Icon_index__WEBPACK_IMPORTED_MODULE_10__["Icon"], { iconName: "move", className: classNames.keyboardMoveIcon })))),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { ref: this._allowScrollOnModal, className: classNames.scrollableContent, "data-is-scrollable": true },
                dragOptions && this.state.isModalMenuOpen && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](dragOptions.menu, { items: [
                        { key: 'move', text: dragOptions.moveMenuItemText, onClick: this._onEnterKeyboardMoveMode },
                        { key: 'close', text: dragOptions.closeMenuItemText, onClick: this._onModalClose },
                    ], onDismiss: this._onModalContextMenuClose, alignTargetEdge: true, coverTarget: true, directionalHint: _Callout_index__WEBPACK_IMPORTED_MODULE_9__["DirectionalHint"].topLeftEdge, directionalHintFixed: true, shouldFocusOnMount: true, target: this._scrollableContent })),
                this.props.children)));
        // @temp tuatology - Will adjust this to be a panel at certain breakpoints
        if (responsiveMode >= _utilities_decorators_withResponsiveMode__WEBPACK_IMPORTED_MODULE_8__["ResponsiveMode"].small) {
            return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Layer__WEBPACK_IMPORTED_MODULE_6__["Layer"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, mergedLayerProps),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Popup_index__WEBPACK_IMPORTED_MODULE_7__["Popup"], { role: isModeless || !isBlocking ? 'dialog' : 'alertdialog', "aria-modal": !isModeless, ariaLabelledBy: titleAriaId, ariaDescribedBy: subtitleAriaId, onDismiss: onDismiss, shouldRestoreFocus: !ignoreExternalFocusing },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: classNames.root, role: !isModeless ? 'document' : undefined },
                        !isModeless && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Overlay__WEBPACK_IMPORTED_MODULE_5__["Overlay"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ isDarkThemed: isDarkOverlay, onClick: isBlocking ? undefined : onDismiss, allowTouchBodyScroll: this._allowTouchBodyScroll }, overlay))),
                        dragOptions ? (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utilities_DraggableZone_index__WEBPACK_IMPORTED_MODULE_11__["DraggableZone"], { handleSelector: dragOptions.dragHandleSelector || "." + classNames.main.split(' ')[0], preventDragSelector: "button", onStart: this._onDragStart, onDragChange: this._onDrag, onStop: this._onDragStop, position: { x: x, y: y } }, modalContent)) : (modalContent)))));
        }
        return null;
    };
    ModalBase.prototype.focus = function () {
        if (this._focusTrapZone.current) {
            this._focusTrapZone.current.focus();
        }
    };
    /**
     * Clamps the position coordinates to the maximum/minimum value specified in props
     */
    ModalBase.prototype._getClampedPosition = function (position) {
        if (!this.props.dragOptions || !this.props.dragOptions.keepInBounds) {
            return position;
        }
        return { x: this._getClampedPositionX(position.x), y: this._getClampedPositionY(position.y) };
    };
    ModalBase.prototype._getClampedPositionY = function (y) {
        var minPosition = this._minClampedPosition;
        var maxPosition = this._maxClampedPosition;
        if (minPosition) {
            y = Math.max(minPosition.y, y);
        }
        if (maxPosition) {
            y = Math.min(maxPosition.y, y);
        }
        return y;
    };
    ModalBase.prototype._getClampedPositionX = function (x) {
        var minPosition = this._minClampedPosition;
        var maxPosition = this._maxClampedPosition;
        if (minPosition) {
            x = Math.max(minPosition.x, x);
        }
        if (maxPosition) {
            x = Math.min(maxPosition.x, x);
        }
        return x;
    };
    ModalBase.prototype._getMoveDelta = function (event) {
        var delta = 10;
        if (event.shiftKey) {
            if (!event.ctrlKey) {
                delta = 50;
            }
        }
        else if (event.ctrlKey) {
            delta = 1;
        }
        return delta;
    };
    ModalBase.defaultProps = {
        isOpen: false,
        isDarkOverlay: true,
        isBlocking: false,
        className: '',
        containerClassName: '',
    };
    ModalBase = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        _utilities_decorators_withResponsiveMode__WEBPACK_IMPORTED_MODULE_8__["withResponsiveMode"]
    ], ModalBase);
    return ModalBase;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));

//# sourceMappingURL=Modal.base.js.map

/***/ }),

/***/ "+YI6":
/*!************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/utilities/DraggableZone/index.js ***!
  \************************************************************************************************************************************************************************************************/
/*! exports provided: DraggableZone, getClassNames */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DraggableZone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DraggableZone */ "dEgj");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DraggableZone", function() { return _DraggableZone__WEBPACK_IMPORTED_MODULE_0__["DraggableZone"]; });

/* harmony import */ var _DraggableZone_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DraggableZone.styles */ "ev4G");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getClassNames", function() { return _DraggableZone_styles__WEBPACK_IMPORTED_MODULE_1__["getClassNames"]; });



//# sourceMappingURL=index.js.map

/***/ }),

/***/ "+msp":
/*!************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/Modal/Modal.styles.js ***!
  \************************************************************************************************************************************************************************************************/
/*! exports provided: animationDuration, getStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "animationDuration", function() { return animationDuration; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStyles", function() { return getStyles; });
/* harmony import */ var _Styling__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Styling */ "PL71");

var animationDuration = _Styling__WEBPACK_IMPORTED_MODULE_0__["AnimationVariables"].durationValue2;
var globalClassNames = {
    root: 'ms-Modal',
    main: 'ms-Dialog-main',
    scrollableContent: 'ms-Modal-scrollableContent',
    isOpen: 'is-open',
    layer: 'ms-Modal-Layer',
};
var getStyles = function (props) {
    var _a;
    var className = props.className, containerClassName = props.containerClassName, scrollableContentClassName = props.scrollableContentClassName, isOpen = props.isOpen, isVisible = props.isVisible, hasBeenOpened = props.hasBeenOpened, modalRectangleTop = props.modalRectangleTop, theme = props.theme, topOffsetFixed = props.topOffsetFixed, isModeless = props.isModeless, layerClassName = props.layerClassName, isDefaultDragHandle = props.isDefaultDragHandle;
    var palette = theme.palette, effects = theme.effects, fonts = theme.fonts;
    var classNames = Object(_Styling__WEBPACK_IMPORTED_MODULE_0__["getGlobalClassNames"])(globalClassNames, theme);
    return {
        root: [
            classNames.root,
            fonts.medium,
            {
                backgroundColor: 'transparent',
                position: isModeless ? 'absolute' : 'fixed',
                height: '100%',
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                opacity: 0,
                pointerEvents: 'none',
                transition: "opacity " + animationDuration,
            },
            topOffsetFixed &&
                hasBeenOpened && {
                alignItems: 'flex-start',
            },
            isOpen && classNames.isOpen,
            isVisible && {
                opacity: 1,
                pointerEvents: 'auto',
            },
            className,
        ],
        main: [
            classNames.main,
            {
                boxShadow: effects.elevation64,
                borderRadius: effects.roundedCorner2,
                backgroundColor: palette.white,
                boxSizing: 'border-box',
                position: 'relative',
                textAlign: 'left',
                outline: '3px solid transparent',
                maxHeight: 'calc(100% - 32px)',
                maxWidth: 'calc(100% - 32px)',
                minHeight: '176px',
                minWidth: '288px',
                overflowY: 'auto',
                zIndex: isModeless ? _Styling__WEBPACK_IMPORTED_MODULE_0__["ZIndexes"].Layer : undefined,
            },
            topOffsetFixed &&
                hasBeenOpened && {
                top: modalRectangleTop,
            },
            isDefaultDragHandle && {
                cursor: 'move',
            },
            containerClassName,
        ],
        scrollableContent: [
            classNames.scrollableContent,
            {
                overflowY: 'auto',
                flexGrow: 1,
                maxHeight: '100vh',
                selectors: (_a = {},
                    _a['@supports (-webkit-overflow-scrolling: touch)'] = {
                        maxHeight: window.innerHeight,
                    },
                    _a),
            },
            scrollableContentClassName,
        ],
        layer: isModeless && [
            layerClassName,
            classNames.layer,
            {
                position: 'static',
                width: 'unset',
                height: 'unset',
            },
        ],
        keyboardMoveIconContainer: {
            position: 'absolute',
            display: 'flex',
            justifyContent: 'center',
            width: '100%',
            padding: '3px 0px',
        },
        keyboardMoveIcon: {
            // eslint-disable-next-line deprecation/deprecation
            fontSize: fonts.xLargePlus.fontSize,
            width: '24px',
        },
    };
};
//# sourceMappingURL=Modal.styles.js.map

/***/ }),

/***/ "2uJf":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/Modal/index.js ***!
  \*****************************************************************************************************************************************************************************************/
/*! exports provided: Modal, ModalBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Modal */ "PXOV");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Modal", function() { return _Modal__WEBPACK_IMPORTED_MODULE_0__["Modal"]; });

/* harmony import */ var _Modal_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Modal.base */ "+MEO");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ModalBase", function() { return _Modal_base__WEBPACK_IMPORTED_MODULE_1__["ModalBase"]; });



//# sourceMappingURL=index.js.map

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

/***/ "B5pZ":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/Callout/index.js ***!
  \*******************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/office-ui-fabric-react-bundle */ "KL1q");
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
// Loading office-ui-fabric-react/./lib/components/Callout/index.js


/***/ }),

/***/ "IsAY":
/*!****************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/Icon/index.js ***!
  \****************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Loading office-ui-fabric-react/./lib/components/Icon/index.js
var pkg = __webpack_require__(/*! @microsoft/office-ui-fabric-react-bundle */ "KL1q");
module.exports = pkg.workaround_IconIndex;

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

/***/ "PXOV":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/Modal/Modal.js ***!
  \*****************************************************************************************************************************************************************************************/
/*! exports provided: Modal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Modal", function() { return Modal; });
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Utilities */ "mkpW");
/* harmony import */ var _Modal_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Modal.base */ "+MEO");
/* harmony import */ var _Modal_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Modal.styles */ "+msp");



var Modal = Object(_Utilities__WEBPACK_IMPORTED_MODULE_0__["styled"])(_Modal_base__WEBPACK_IMPORTED_MODULE_1__["ModalBase"], _Modal_styles__WEBPACK_IMPORTED_MODULE_2__["getStyles"], undefined, {
    scope: 'Modal',
    fields: ['theme', 'styles', 'enableAriaHiddenSiblings'],
});
//# sourceMappingURL=Modal.js.map

/***/ }),

/***/ "Q21x":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/Popup/index.js ***!
  \*****************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Loading office-ui-fabric-react/./lib/components/Popup/index.js
var pkg = __webpack_require__(/*! @microsoft/office-ui-fabric-react-bundle */ "KL1q");
module.exports = pkg.workaround_PopupIndex;

/***/ }),

/***/ "Vr3T":
/*!************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/Modal.js ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: Modal, ModalBase, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Modal_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Modal/index */ "2uJf");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Modal", function() { return _components_Modal_index__WEBPACK_IMPORTED_MODULE_0__["Modal"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ModalBase", function() { return _components_Modal_index__WEBPACK_IMPORTED_MODULE_0__["ModalBase"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _components_Modal_index__WEBPACK_IMPORTED_MODULE_0__["Modal"]; });



//# sourceMappingURL=Modal.js.map

/***/ }),

/***/ "dEgj":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/utilities/DraggableZone/DraggableZone.js ***!
  \********************************************************************************************************************************************************************************************************/
/*! exports provided: DraggableZone */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DraggableZone", function() { return DraggableZone; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _DraggableZone_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DraggableZone.styles */ "ev4G");
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Utilities */ "mkpW");




var eventMapping = {
    touch: {
        start: 'touchstart',
        move: 'touchmove',
        stop: 'touchend',
    },
    mouse: {
        start: 'mousedown',
        move: 'mousemove',
        stop: 'mouseup',
    },
};
var DraggableZone = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(DraggableZone, _super);
    function DraggableZone(props) {
        var _this = _super.call(this, props) || this;
        _this._currentEventType = eventMapping.mouse;
        _this._events = [];
        _this._onMouseDown = function (event) {
            var onMouseDown = react__WEBPACK_IMPORTED_MODULE_1__["Children"].only(_this.props.children).props.onMouseDown;
            if (onMouseDown) {
                onMouseDown(event);
            }
            _this._currentEventType = eventMapping.mouse;
            return _this._onDragStart(event);
        };
        _this._onMouseUp = function (event) {
            var onMouseUp = react__WEBPACK_IMPORTED_MODULE_1__["Children"].only(_this.props.children).props.onMouseUp;
            if (onMouseUp) {
                onMouseUp(event);
            }
            _this._currentEventType = eventMapping.mouse;
            return _this._onDragStop(event);
        };
        _this._onTouchStart = function (event) {
            var onTouchStart = react__WEBPACK_IMPORTED_MODULE_1__["Children"].only(_this.props.children).props.onTouchStart;
            if (onTouchStart) {
                onTouchStart(event);
            }
            _this._currentEventType = eventMapping.touch;
            return _this._onDragStart(event);
        };
        _this._onTouchEnd = function (event) {
            var onTouchEnd = react__WEBPACK_IMPORTED_MODULE_1__["Children"].only(_this.props.children).props.onTouchEnd;
            if (onTouchEnd) {
                onTouchEnd(event);
            }
            _this._currentEventType = eventMapping.touch;
            _this._onDragStop(event);
        };
        _this._onDragStart = function (event) {
            // Only handle left click for dragging
            if (typeof event.button === 'number' && event.button !== 0) {
                return false;
            }
            // If the target doesn't match the handleSelector OR
            // if the target does match the preventDragSelector, bail out
            if ((_this.props.handleSelector && !_this._matchesSelector(event.target, _this.props.handleSelector)) ||
                (_this.props.preventDragSelector &&
                    _this._matchesSelector(event.target, _this.props.preventDragSelector))) {
                return;
            }
            // Remember the touch identifier if this is a touch event so we can
            // distinguish between individual touches in multitouch scenarios
            // by remembering which touch point we were given
            _this._touchId = _this._getTouchId(event);
            var position = _this._getControlPosition(event);
            if (position === undefined) {
                return;
            }
            var dragData = _this._createDragDataFromPosition(position);
            _this.props.onStart && _this.props.onStart(event, dragData);
            _this.setState({
                isDragging: true,
                lastPosition: position,
            });
            // hook up the appropriate mouse/touch events to the body to ensure
            // smooth dragging
            _this._events = [
                Object(_Utilities__WEBPACK_IMPORTED_MODULE_3__["on"])(document.body, _this._currentEventType.move, _this._onDrag, true /* use capture phase */),
                Object(_Utilities__WEBPACK_IMPORTED_MODULE_3__["on"])(document.body, _this._currentEventType.stop, _this._onDragStop, true /* use capture phase */),
            ];
        };
        _this._onDrag = function (event) {
            // Prevent scrolling on mobile devices
            if (event.type === 'touchmove') {
                event.preventDefault();
            }
            var position = _this._getControlPosition(event);
            if (!position) {
                return;
            }
            // create the updated drag data from the position data
            var updatedData = _this._createUpdatedDragData(_this._createDragDataFromPosition(position));
            var updatedPosition = updatedData.position;
            _this.props.onDragChange && _this.props.onDragChange(event, updatedData);
            _this.setState({
                position: updatedPosition,
                lastPosition: position,
            });
        };
        _this._onDragStop = function (event) {
            if (!_this.state.isDragging) {
                return;
            }
            var position = _this._getControlPosition(event);
            if (!position) {
                return;
            }
            var baseDragData = _this._createDragDataFromPosition(position);
            // Set dragging to false and reset the lastPosition
            _this.setState({
                isDragging: false,
                lastPosition: undefined,
            });
            _this.props.onStop && _this.props.onStop(event, baseDragData);
            if (_this.props.position) {
                _this.setState({
                    position: _this.props.position,
                });
            }
            // Remove event handlers
            _this._events.forEach(function (dispose) { return dispose(); });
        };
        _this.state = {
            isDragging: false,
            position: _this.props.position || { x: 0, y: 0 },
            lastPosition: undefined,
        };
        return _this;
    }
    DraggableZone.prototype.componentDidUpdate = function (prevProps) {
        if (this.props.position && (!prevProps.position || this.props.position !== prevProps.position)) {
            this.setState({ position: this.props.position });
        }
    };
    DraggableZone.prototype.componentWillUnmount = function () {
        this._events.forEach(function (dispose) { return dispose(); });
    };
    DraggableZone.prototype.render = function () {
        var child = react__WEBPACK_IMPORTED_MODULE_1__["Children"].only(this.props.children);
        var props = child.props;
        var position = this.props.position;
        var _a = this.state, statePosition = _a.position, isDragging = _a.isDragging;
        var x = statePosition.x;
        var y = statePosition.y;
        if (position && !isDragging) {
            x = position.x;
            y = position.y;
        }
        return react__WEBPACK_IMPORTED_MODULE_1__["cloneElement"](child, {
            style: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, props.style), { transform: "translate(" + x + "px, " + y + "px)" }),
            className: Object(_DraggableZone_styles__WEBPACK_IMPORTED_MODULE_2__["getClassNames"])(props.className, this.state.isDragging).root,
            onMouseDown: this._onMouseDown,
            onMouseUp: this._onMouseUp,
            onTouchStart: this._onTouchStart,
            onTouchEnd: this._onTouchEnd,
        });
    };
    /**
     * Get the control position based off the event that fired
     * @param event - The event to get offsets from
     */
    DraggableZone.prototype._getControlPosition = function (event) {
        var touchObj = this._getActiveTouch(event);
        // did we get the right touch?
        if (this._touchId !== undefined && !touchObj) {
            return undefined;
        }
        var eventToGetOffset = touchObj || event;
        return {
            x: eventToGetOffset.clientX,
            y: eventToGetOffset.clientY,
        };
    };
    /**
     * Get the active touch point that we have saved from the event's TouchList
     * @param event - The event used to get the TouchList for the active touch point
     */
    DraggableZone.prototype._getActiveTouch = function (event) {
        return ((event.targetTouches && this._findTouchInTouchList(event.targetTouches)) ||
            (event.changedTouches && this._findTouchInTouchList(event.changedTouches)));
    };
    /**
     * Get the initial touch identifier associated with the given event
     * @param event - The event that contains the TouchList
     */
    DraggableZone.prototype._getTouchId = function (event) {
        var touch = (event.targetTouches && event.targetTouches[0]) || (event.changedTouches && event.changedTouches[0]);
        if (touch) {
            return touch.identifier;
        }
    };
    /**
     * Returns if an element (or any of the element's parents) match the given selector
     */
    DraggableZone.prototype._matchesSelector = function (element, selector) {
        if (!element || element === document.body) {
            return false;
        }
        var matchesSelectorFn = element.matches || element.webkitMatchesSelector || element.msMatchesSelector /* for IE */;
        if (!matchesSelectorFn) {
            return false;
        }
        return matchesSelectorFn.call(element, selector) || this._matchesSelector(element.parentElement, selector);
    };
    /**
     * Attempts to find the Touch that matches the identifier  we stored in dragStart
     * @param touchList The TouchList to look for the stored identifier from dragStart
     */
    DraggableZone.prototype._findTouchInTouchList = function (touchList) {
        if (this._touchId === undefined) {
            return;
        }
        for (var i = 0; i < touchList.length; i++) {
            if (touchList[i].identifier === this._touchId) {
                return touchList[i];
            }
        }
        return undefined;
    };
    /**
     * Create DragData based off of the last known position and the new position passed in
     * @param position The new position as part of the drag
     */
    DraggableZone.prototype._createDragDataFromPosition = function (position) {
        var lastPosition = this.state.lastPosition;
        // If we have no lastPosition, use the given position
        // for last position
        if (lastPosition === undefined) {
            return {
                delta: { x: 0, y: 0 },
                lastPosition: position,
                position: position,
            };
        }
        return {
            delta: {
                x: position.x - lastPosition.x,
                y: position.y - lastPosition.y,
            },
            lastPosition: lastPosition,
            position: position,
        };
    };
    /**
     * Creates an updated DragData based off the current position and given baseDragData
     * @param baseDragData The base DragData (from _createDragDataFromPosition) used to calculate the updated positions
     */
    DraggableZone.prototype._createUpdatedDragData = function (baseDragData) {
        var position = this.state.position;
        return {
            position: {
                x: position.x + baseDragData.delta.x,
                y: position.y + baseDragData.delta.y,
            },
            delta: baseDragData.delta,
            lastPosition: position,
        };
    };
    return DraggableZone;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));

//# sourceMappingURL=DraggableZone.js.map

/***/ }),

/***/ "ev4G":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/utilities/DraggableZone/DraggableZone.styles.js ***!
  \***************************************************************************************************************************************************************************************************************/
/*! exports provided: getClassNames */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getClassNames", function() { return getClassNames; });
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Utilities */ "mkpW");
/* harmony import */ var _Styling__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Styling */ "PL71");


var getClassNames = Object(_Utilities__WEBPACK_IMPORTED_MODULE_0__["memoizeFunction"])(function (className, isDragging) {
    return {
        root: Object(_Styling__WEBPACK_IMPORTED_MODULE_1__["mergeStyles"])(className, isDragging && {
            touchAction: 'none',
            selectors: {
                '& *': {
                    userSelect: 'none',
                },
            },
        }),
    };
});
//# sourceMappingURL=DraggableZone.styles.js.map

/***/ })

}]);
//# sourceMappingURL=chunk.3_[locale].js.map