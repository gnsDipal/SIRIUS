(window["webpackJsonp_6da60671_741f_47c5_b35b_5078edaf312f_0_1_0"] = window["webpackJsonp_6da60671_741f_47c5_b35b_5078edaf312f_0_1_0"] || []).push([["vendors~sp-fretimer"],{

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

/***/ "+dJA":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/Dialog/DialogContent.js ***!
  \**************************************************************************************************************************************************************************************************/
/*! exports provided: DialogContent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogContent", function() { return DialogContent; });
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Utilities */ "mkpW");
/* harmony import */ var _DialogContent_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DialogContent.base */ "wjk+");
/* harmony import */ var _DialogContent_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DialogContent.styles */ "WiZN");



var DialogContent = Object(_Utilities__WEBPACK_IMPORTED_MODULE_0__["styled"])(_DialogContent_base__WEBPACK_IMPORTED_MODULE_1__["DialogContentBase"], _DialogContent_styles__WEBPACK_IMPORTED_MODULE_2__["getStyles"], undefined, { scope: 'DialogContent' });
//# sourceMappingURL=DialogContent.js.map

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

/***/ "/C2V":
/*!******************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/Dialog/index.js ***!
  \******************************************************************************************************************************************************************************************/
/*! exports provided: Dialog, DialogBase, DialogContent, DialogContentBase, DialogFooter, DialogFooterBase, ResponsiveMode, DialogType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dialog */ "23Sn");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Dialog", function() { return _Dialog__WEBPACK_IMPORTED_MODULE_0__["Dialog"]; });

/* harmony import */ var _Dialog_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Dialog.base */ "FaVw");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DialogBase", function() { return _Dialog_base__WEBPACK_IMPORTED_MODULE_1__["DialogBase"]; });

/* harmony import */ var _DialogContent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DialogContent */ "+dJA");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DialogContent", function() { return _DialogContent__WEBPACK_IMPORTED_MODULE_2__["DialogContent"]; });

/* harmony import */ var _DialogContent_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DialogContent.base */ "wjk+");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DialogContentBase", function() { return _DialogContent_base__WEBPACK_IMPORTED_MODULE_3__["DialogContentBase"]; });

/* harmony import */ var _DialogFooter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DialogFooter */ "5xuA");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DialogFooter", function() { return _DialogFooter__WEBPACK_IMPORTED_MODULE_4__["DialogFooter"]; });

/* harmony import */ var _DialogFooter_base__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./DialogFooter.base */ "428q");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DialogFooterBase", function() { return _DialogFooter_base__WEBPACK_IMPORTED_MODULE_5__["DialogFooterBase"]; });

/* harmony import */ var _DialogContent_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./DialogContent.types */ "A5R/");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ResponsiveMode", function() { return _DialogContent_types__WEBPACK_IMPORTED_MODULE_6__["ResponsiveMode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DialogType", function() { return _DialogContent_types__WEBPACK_IMPORTED_MODULE_6__["DialogType"]; });








//# sourceMappingURL=index.js.map

/***/ }),

/***/ "0zH+":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/ChoiceGroup/ChoiceGroup.js ***!
  \*****************************************************************************************************************************************************************************************************/
/*! exports provided: ChoiceGroup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChoiceGroup", function() { return ChoiceGroup; });
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Utilities */ "mkpW");
/* harmony import */ var _ChoiceGroup_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ChoiceGroup.base */ "4Qri");
/* harmony import */ var _ChoiceGroup_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ChoiceGroup.styles */ "Abs4");



var ChoiceGroup = Object(_Utilities__WEBPACK_IMPORTED_MODULE_0__["styled"])(_ChoiceGroup_base__WEBPACK_IMPORTED_MODULE_1__["ChoiceGroupBase"], _ChoiceGroup_styles__WEBPACK_IMPORTED_MODULE_2__["getStyles"], undefined, { scope: 'ChoiceGroup' });
//# sourceMappingURL=ChoiceGroup.js.map

/***/ }),

/***/ "23Sn":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/Dialog/Dialog.js ***!
  \*******************************************************************************************************************************************************************************************/
/*! exports provided: Dialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dialog", function() { return Dialog; });
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Utilities */ "mkpW");
/* harmony import */ var _Dialog_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Dialog.base */ "FaVw");
/* harmony import */ var _Dialog_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Dialog.styles */ "t04b");



var Dialog = Object(_Utilities__WEBPACK_IMPORTED_MODULE_0__["styled"])(_Dialog_base__WEBPACK_IMPORTED_MODULE_1__["DialogBase"], _Dialog_styles__WEBPACK_IMPORTED_MODULE_2__["getStyles"], undefined, { scope: 'Dialog' });
Dialog.displayName = 'Dialog';
//# sourceMappingURL=Dialog.js.map

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

/***/ "428q":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/Dialog/DialogFooter.base.js ***!
  \******************************************************************************************************************************************************************************************************/
/*! exports provided: DialogFooterBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogFooterBase", function() { return DialogFooterBase; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Utilities */ "mkpW");



var getClassNames = Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["classNamesFunction"])();
var DialogFooterBase = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(DialogFooterBase, _super);
    function DialogFooterBase(props) {
        var _this = _super.call(this, props) || this;
        Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["initializeComponentRef"])(_this);
        return _this;
    }
    DialogFooterBase.prototype.render = function () {
        var _a = this.props, className = _a.className, styles = _a.styles, theme = _a.theme;
        this._classNames = getClassNames(styles, {
            theme: theme,
            className: className,
        });
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: this._classNames.actions },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: this._classNames.actionsRight }, this._renderChildrenAsActions())));
    };
    DialogFooterBase.prototype._renderChildrenAsActions = function () {
        var _this = this;
        return react__WEBPACK_IMPORTED_MODULE_1__["Children"].map(this.props.children, function (child) {
            return child ? react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", { className: _this._classNames.action }, child) : null;
        });
    };
    return DialogFooterBase;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));

//# sourceMappingURL=DialogFooter.base.js.map

/***/ }),

/***/ "4Qri":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/ChoiceGroup/ChoiceGroup.base.js ***!
  \**********************************************************************************************************************************************************************************************************/
/*! exports provided: ChoiceGroupBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChoiceGroupBase", function() { return ChoiceGroupBase; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Label__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Label */ "wMNn");
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Utilities */ "mkpW");
/* harmony import */ var _ChoiceGroupOption_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ChoiceGroupOption/index */ "CaTI");





var getClassNames = Object(_Utilities__WEBPACK_IMPORTED_MODULE_3__["classNamesFunction"])();
/**
 * {@docCategory ChoiceGroup}
 */
var ChoiceGroupBase = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ChoiceGroupBase, _super);
    function ChoiceGroupBase(props) {
        var _this = _super.call(this, props) || this;
        _this._focusCallbacks = {};
        _this._changeCallbacks = {};
        _this._onBlur = function (ev, option) {
            _this.setState({
                keyFocused: undefined,
            });
        };
        Object(_Utilities__WEBPACK_IMPORTED_MODULE_3__["initializeComponentRef"])(_this);
        if (true) {
            Object(_Utilities__WEBPACK_IMPORTED_MODULE_3__["warnDeprecations"])('ChoiceGroup', props, { onChanged: 'onChange' });
            Object(_Utilities__WEBPACK_IMPORTED_MODULE_3__["warnMutuallyExclusive"])('ChoiceGroup', props, {
                selectedKey: 'defaultSelectedKey',
            });
        }
        var defaultSelectedKey = props.defaultSelectedKey, _a = props.options, options = _a === void 0 ? [] : _a;
        var validDefaultSelectedKey = !_isControlled(props) &&
            defaultSelectedKey !== undefined &&
            options.some(function (option) { return option.key === defaultSelectedKey; });
        _this.state = {
            keyChecked: validDefaultSelectedKey ? defaultSelectedKey : _this._getKeyChecked(props),
        };
        _this._id = Object(_Utilities__WEBPACK_IMPORTED_MODULE_3__["getId"])('ChoiceGroup');
        _this._labelId = Object(_Utilities__WEBPACK_IMPORTED_MODULE_3__["getId"])('ChoiceGroupLabel');
        return _this;
    }
    Object.defineProperty(ChoiceGroupBase.prototype, "checkedOption", {
        /**
         * Gets the current checked option.
         */
        get: function () {
            var _this = this;
            var _a = this.props.options, options = _a === void 0 ? [] : _a;
            return Object(_Utilities__WEBPACK_IMPORTED_MODULE_3__["find"])(options, function (value) { return value.key === _this.state.keyChecked; });
        },
        enumerable: true,
        configurable: true
    });
    ChoiceGroupBase.prototype.componentDidUpdate = function (prevProps, prevState) {
        // Only update if a new props object has been passed in (don't care about state updates)
        if (prevProps !== this.props) {
            var newKeyChecked = this._getKeyChecked(this.props);
            var oldKeyChecked = this._getKeyChecked(prevProps);
            if (newKeyChecked !== oldKeyChecked) {
                this.setState({
                    keyChecked: newKeyChecked,
                });
            }
        }
    };
    ChoiceGroupBase.prototype.render = function () {
        var _this = this;
        var _a = this.props, className = _a.className, theme = _a.theme, styles = _a.styles, _b = _a.options, options = _b === void 0 ? [] : _b, label = _a.label, required = _a.required, disabled = _a.disabled, name = _a.name;
        var _c = this.state, keyChecked = _c.keyChecked, keyFocused = _c.keyFocused;
        var divProps = Object(_Utilities__WEBPACK_IMPORTED_MODULE_3__["getNativeProps"])(this.props, _Utilities__WEBPACK_IMPORTED_MODULE_3__["divProperties"], [
            'onChange',
            'className',
            'required',
        ]);
        var classNames = getClassNames(styles, {
            theme: theme,
            className: className,
            optionsContainIconOrImage: options.some(function (option) { return !!(option.iconProps || option.imageSrc); }),
        });
        var labelId = this._id + '-label';
        var ariaLabelledBy = this.props.ariaLabelledBy || (label ? labelId : this.props['aria-labelledby']);
        // TODO (Fabric 8?) - if possible, move `root` class to the actual root and eliminate
        // `applicationRole` class (but the div structure will stay the same by necessity)
        return (
        // eslint-disable-next-line deprecation/deprecation
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ className: classNames.applicationRole }, divProps),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ className: classNames.root, role: "radiogroup" }, (ariaLabelledBy && { 'aria-labelledby': ariaLabelledBy })),
                label && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Label__WEBPACK_IMPORTED_MODULE_2__["Label"], { className: classNames.label, required: required, id: labelId, disabled: disabled }, label)),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: classNames.flexContainer }, options.map(function (option) {
                    var innerOptionProps = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, option), { focused: option.key === keyFocused, checked: option.key === keyChecked, disabled: option.disabled || disabled, id: _this._getOptionId(option), labelId: _this._getOptionLabelId(option), name: name || _this._id, required: required });
                    return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ChoiceGroupOption_index__WEBPACK_IMPORTED_MODULE_4__["ChoiceGroupOption"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ key: option.key, onBlur: _this._onBlur, onFocus: _this._onFocus(option.key), onChange: _this._onChange(option.key) }, innerOptionProps)));
                })))));
    };
    ChoiceGroupBase.prototype.focus = function () {
        var _a = this.props.options, options = _a === void 0 ? [] : _a;
        var optionToFocus = this.checkedOption || options.filter(function (option) { return !option.disabled; })[0];
        var elementToFocus = optionToFocus && document.getElementById(this._getOptionId(optionToFocus));
        if (elementToFocus) {
            elementToFocus.focus();
        }
    };
    ChoiceGroupBase.prototype._onFocus = function (key) {
        var _this = this;
        // This extra mess is necessary because React won't pass the `key` prop through to ChoiceGroupOption
        if (!this._focusCallbacks[key]) {
            this._focusCallbacks[key] = function (ev, option) {
                _this.setState({
                    keyFocused: key,
                });
            };
        }
        return this._focusCallbacks[key];
    };
    ChoiceGroupBase.prototype._onChange = function (key) {
        var _this = this;
        // This extra mess is necessary because React won't pass the `key` prop through to ChoiceGroupOption
        if (!this._changeCallbacks[key]) {
            this._changeCallbacks[key] = function (evt, option) {
                // eslint-disable-next-line deprecation/deprecation
                var _a = _this.props, onChanged = _a.onChanged, onChange = _a.onChange;
                // Only manage state in uncontrolled scenarios.
                if (!_isControlled(_this.props)) {
                    _this.setState({
                        keyChecked: key,
                    });
                }
                // Get the original option without the `key` prop removed
                var originalOption = Object(_Utilities__WEBPACK_IMPORTED_MODULE_3__["find"])(_this.props.options || [], function (value) { return value.key === key; });
                // TODO: onChanged deprecated, remove else if after 07/17/2017 when onChanged has been removed.
                if (onChange) {
                    onChange(evt, originalOption);
                }
                else if (onChanged) {
                    onChanged(originalOption, evt);
                }
            };
        }
        return this._changeCallbacks[key];
    };
    /**
     * Returns `selectedKey` if provided, or the key of the first option with the `checked` prop set.
     */
    ChoiceGroupBase.prototype._getKeyChecked = function (props) {
        if (props.selectedKey !== undefined) {
            return props.selectedKey;
        }
        var _a = props.options, options = _a === void 0 ? [] : _a;
        // eslint-disable-next-line deprecation/deprecation
        var optionsChecked = options.filter(function (option) { return option.checked; });
        return optionsChecked[0] && optionsChecked[0].key;
    };
    ChoiceGroupBase.prototype._getOptionId = function (option) {
        return option.id || this._id + "-" + option.key;
    };
    ChoiceGroupBase.prototype._getOptionLabelId = function (option) {
        return option.labelId || this._labelId + "-" + option.key;
    };
    return ChoiceGroupBase;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));

function _isControlled(props) {
    return Object(_Utilities__WEBPACK_IMPORTED_MODULE_3__["isControlled"])(props, 'selectedKey');
}
//# sourceMappingURL=ChoiceGroup.base.js.map

/***/ }),

/***/ "56LG":
/*!***********************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/Icon.js ***!
  \***********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Loading office-ui-fabric-react/./lib/Icon.js
var pkg = __webpack_require__(/*! @microsoft/office-ui-fabric-react-bundle */ "KL1q");
module.exports = pkg.workaround_Icon;

/***/ }),

/***/ "5qgq":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/utilities/decorators/withResponsiveMode.js ***!
  \**********************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Loading office-ui-fabric-react/./lib/utilities/decorators/withResponsiveMode.js
var pkg = __webpack_require__(/*! @microsoft/office-ui-fabric-react-bundle */ "KL1q");
module.exports = pkg.workaround_withResponsiveMode;

/***/ }),

/***/ "5xuA":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/Dialog/DialogFooter.js ***!
  \*************************************************************************************************************************************************************************************************/
/*! exports provided: DialogFooter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogFooter", function() { return DialogFooter; });
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Utilities */ "mkpW");
/* harmony import */ var _DialogFooter_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DialogFooter.base */ "428q");
/* harmony import */ var _DialogFooter_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DialogFooter.styles */ "A7zU");



var DialogFooter = Object(_Utilities__WEBPACK_IMPORTED_MODULE_0__["styled"])(_DialogFooter_base__WEBPACK_IMPORTED_MODULE_1__["DialogFooterBase"], _DialogFooter_styles__WEBPACK_IMPORTED_MODULE_2__["getStyles"], undefined, { scope: 'DialogFooter' });
//# sourceMappingURL=DialogFooter.js.map

/***/ }),

/***/ "6VY4":
/*!********************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-media@2.0.244/node_modules/@ms/odsp-media/dist/media/images/sitePages/authoringFirstRun/modal-0.png ***!
  \********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "modal-0_b4e472b98580d7aaf329f78b0dd15e6f.png";

/***/ }),

/***/ "A5R/":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/Dialog/DialogContent.types.js ***!
  \********************************************************************************************************************************************************************************************************/
/*! exports provided: ResponsiveMode, DialogType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogType", function() { return DialogType; });
/* harmony import */ var _utilities_decorators_withResponsiveMode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utilities/decorators/withResponsiveMode */ "5qgq");
/* harmony import */ var _utilities_decorators_withResponsiveMode__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_utilities_decorators_withResponsiveMode__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ResponsiveMode", function() { return _utilities_decorators_withResponsiveMode__WEBPACK_IMPORTED_MODULE_0__["ResponsiveMode"]; });


 // Exported because the type is an optional prop and not exported otherwise.
/**
 * {@docCategory Dialog}
 */
var DialogType;
(function (DialogType) {
    /** Standard dialog */
    DialogType[DialogType["normal"] = 0] = "normal";
    /** Dialog with large header banner */
    DialogType[DialogType["largeHeader"] = 1] = "largeHeader";
    /** Dialog with an 'x' close button in the upper-right corner */
    DialogType[DialogType["close"] = 2] = "close";
})(DialogType || (DialogType = {}));
//# sourceMappingURL=DialogContent.types.js.map

/***/ }),

/***/ "A7zU":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/Dialog/DialogFooter.styles.js ***!
  \********************************************************************************************************************************************************************************************************/
/*! exports provided: getStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStyles", function() { return getStyles; });
/* harmony import */ var _Styling__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Styling */ "PL71");

var GlobalClassNames = {
    actions: 'ms-Dialog-actions',
    action: 'ms-Dialog-action',
    actionsRight: 'ms-Dialog-actionsRight',
};
var getStyles = function (props) {
    var className = props.className, theme = props.theme;
    var classNames = Object(_Styling__WEBPACK_IMPORTED_MODULE_0__["getGlobalClassNames"])(GlobalClassNames, theme);
    return {
        actions: [
            classNames.actions,
            {
                position: 'relative',
                width: '100%',
                minHeight: '24px',
                lineHeight: '24px',
                margin: '16px 0 0',
                fontSize: '0',
                selectors: {
                    '.ms-Button': {
                        lineHeight: 'normal',
                    },
                },
            },
            className,
        ],
        action: [
            classNames.action,
            {
                margin: '0 4px',
            },
        ],
        actionsRight: [
            classNames.actionsRight,
            {
                textAlign: 'right',
                marginRight: '-4px',
                fontSize: '0',
            },
        ],
    };
};
//# sourceMappingURL=DialogFooter.styles.js.map

/***/ }),

/***/ "Abs4":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/ChoiceGroup/ChoiceGroup.styles.js ***!
  \************************************************************************************************************************************************************************************************************/
/*! exports provided: getStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStyles", function() { return getStyles; });
/* harmony import */ var _Styling__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Styling */ "PL71");

var GlobalClassNames = {
    root: 'ms-ChoiceFieldGroup',
    flexContainer: 'ms-ChoiceFieldGroup-flexContainer',
};
var getStyles = function (props) {
    var className = props.className, optionsContainIconOrImage = props.optionsContainIconOrImage, theme = props.theme;
    var classNames = Object(_Styling__WEBPACK_IMPORTED_MODULE_0__["getGlobalClassNames"])(GlobalClassNames, theme);
    return {
        // TODO (Fabric 8?) - merge className back into `root` and apply root style to
        // the actual root role=application element
        applicationRole: className,
        root: [
            classNames.root,
            theme.fonts.medium,
            {
                display: 'block',
            },
        ],
        flexContainer: [
            classNames.flexContainer,
            optionsContainIconOrImage && {
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
            },
        ],
    };
};
//# sourceMappingURL=ChoiceGroup.styles.js.map

/***/ }),

/***/ "B3UY":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/ChoiceGroup/ChoiceGroupOption/ChoiceGroupOption.js ***!
  \*****************************************************************************************************************************************************************************************************************************/
/*! exports provided: ChoiceGroupOption */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChoiceGroupOption", function() { return ChoiceGroupOption; });
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../Utilities */ "mkpW");
/* harmony import */ var _ChoiceGroupOption_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ChoiceGroupOption.base */ "Qtdd");
/* harmony import */ var _ChoiceGroupOption_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ChoiceGroupOption.styles */ "zJK0");



var ChoiceGroupOption = Object(_Utilities__WEBPACK_IMPORTED_MODULE_0__["styled"])(_ChoiceGroupOption_base__WEBPACK_IMPORTED_MODULE_1__["ChoiceGroupOptionBase"], _ChoiceGroupOption_styles__WEBPACK_IMPORTED_MODULE_2__["getStyles"], undefined, { scope: 'ChoiceGroupOption' });
//# sourceMappingURL=ChoiceGroupOption.js.map

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

/***/ "CaTI":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/ChoiceGroup/ChoiceGroupOption/index.js ***!
  \*****************************************************************************************************************************************************************************************************************/
/*! exports provided: ChoiceGroupOption */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ChoiceGroupOption__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ChoiceGroupOption */ "B3UY");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChoiceGroupOption", function() { return _ChoiceGroupOption__WEBPACK_IMPORTED_MODULE_0__["ChoiceGroupOption"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "FaVw":
/*!************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/Dialog/Dialog.base.js ***!
  \************************************************************************************************************************************************************************************************/
/*! exports provided: DialogBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogBase", function() { return DialogBase; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Utilities */ "mkpW");
/* harmony import */ var _DialogContent_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DialogContent.types */ "A5R/");
/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Modal */ "Vr3T");
/* harmony import */ var _utilities_decorators_withResponsiveMode__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utilities/decorators/withResponsiveMode */ "5qgq");
/* harmony import */ var _utilities_decorators_withResponsiveMode__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_utilities_decorators_withResponsiveMode__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _DialogContent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./DialogContent */ "+dJA");






var getClassNames = Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["classNamesFunction"])();

var DefaultModalProps = {
    isDarkOverlay: false,
    isBlocking: false,
    className: '',
    containerClassName: '',
    topOffsetFixed: false,
};
var DefaultDialogContentProps = {
    type: _DialogContent_types__WEBPACK_IMPORTED_MODULE_3__["DialogType"].normal,
    className: '',
    topButtonsProps: [],
};
var DialogBase = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(DialogBase, _super);
    function DialogBase(props) {
        var _this = _super.call(this, props) || this;
        _this._getSubTextId = function () {
            // eslint-disable-next-line deprecation/deprecation
            var _a = _this.props, ariaDescribedById = _a.ariaDescribedById, modalProps = _a.modalProps, dialogContentProps = _a.dialogContentProps, subText = _a.subText;
            var id = (modalProps && modalProps.subtitleAriaId) || ariaDescribedById;
            if (!id) {
                id = ((dialogContentProps && dialogContentProps.subText) || subText) && _this._defaultSubTextId;
            }
            return id;
        };
        _this._getTitleTextId = function () {
            // eslint-disable-next-line deprecation/deprecation
            var _a = _this.props, ariaLabelledById = _a.ariaLabelledById, modalProps = _a.modalProps, dialogContentProps = _a.dialogContentProps, title = _a.title;
            var id = (modalProps && modalProps.titleAriaId) || ariaLabelledById;
            if (!id) {
                id = ((dialogContentProps && dialogContentProps.title) || title) && _this._defaultTitleTextId;
            }
            return id;
        };
        _this._id = Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["getId"])('Dialog');
        _this._defaultTitleTextId = _this._id + '-title';
        _this._defaultSubTextId = _this._id + '-subText';
        if (true) {
            Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["warnDeprecations"])('Dialog', props, {
                isOpen: 'hidden',
                type: 'dialogContentProps.type',
                subText: 'dialogContentProps.subText',
                contentClassName: 'dialogContentProps.className',
                topButtonsProps: 'dialogContentProps.topButtonsProps',
                className: 'modalProps.className',
                isDarkOverlay: 'modalProps.isDarkOverlay',
                isBlocking: 'modalProps.isBlocking',
                containerClassName: 'modalProps.containerClassName',
                onDismissed: 'modalProps.onDismissed',
                onLayerDidMount: 'modalProps.layerProps.onLayerDidMount',
                ariaDescribedById: 'modalProps.subtitleAriaId',
                ariaLabelledById: 'modalProps.titleAriaId',
            });
        }
        return _this;
    }
    DialogBase.prototype.render = function () {
        var _a, _b;
        var _c = this.props, 
        /* eslint-disable deprecation/deprecation */
        className = _c.className, containerClassName = _c.containerClassName, contentClassName = _c.contentClassName, elementToFocusOnDismiss = _c.elementToFocusOnDismiss, firstFocusableSelector = _c.firstFocusableSelector, forceFocusInsideTrap = _c.forceFocusInsideTrap, styles = _c.styles, hidden = _c.hidden, ignoreExternalFocusing = _c.ignoreExternalFocusing, isBlocking = _c.isBlocking, isClickableOutsideFocusTrap = _c.isClickableOutsideFocusTrap, isDarkOverlay = _c.isDarkOverlay, isOpen = _c.isOpen, onDismiss = _c.onDismiss, onDismissed = _c.onDismissed, onLayerDidMount = _c.onLayerDidMount, responsiveMode = _c.responsiveMode, subText = _c.subText, theme = _c.theme, title = _c.title, topButtonsProps = _c.topButtonsProps, type = _c.type, 
        /* eslint-enable deprecation/deprecation */
        minWidth = _c.minWidth, maxWidth = _c.maxWidth, modalProps = _c.modalProps;
        var mergedLayerProps = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, (modalProps ? modalProps.layerProps : { onLayerDidMount: onLayerDidMount }));
        if (onLayerDidMount && !mergedLayerProps.onLayerDidMount) {
            mergedLayerProps.onLayerDidMount = onLayerDidMount;
        }
        var dialogDraggableClassName;
        var dragOptions;
        // if we are draggable, make sure we are using the correct
        // draggable classname and selectors
        if (modalProps && modalProps.dragOptions && !modalProps.dragOptions.dragHandleSelector) {
            dialogDraggableClassName = 'ms-Dialog-draggable-header';
            dragOptions = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, modalProps.dragOptions), { dragHandleSelector: "." + dialogDraggableClassName });
        }
        else {
            dragOptions = modalProps && modalProps.dragOptions;
        }
        var mergedModalProps = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, DefaultModalProps), { className: className,
            containerClassName: containerClassName,
            isBlocking: isBlocking,
            isDarkOverlay: isDarkOverlay,
            onDismissed: onDismissed }), modalProps), { layerProps: mergedLayerProps, dragOptions: dragOptions });
        var dialogContentProps = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ className: contentClassName, subText: subText,
            title: title,
            topButtonsProps: topButtonsProps,
            type: type }, DefaultDialogContentProps), this.props.dialogContentProps), { draggableHeaderClassName: dialogDraggableClassName, titleProps: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ 
                // eslint-disable-next-line deprecation/deprecation
                id: ((_a = this.props.dialogContentProps) === null || _a === void 0 ? void 0 : _a.titleId) || this._defaultTitleTextId }, (_b = this.props.dialogContentProps) === null || _b === void 0 ? void 0 : _b.titleProps) });
        var classNames = getClassNames(styles, {
            theme: theme,
            className: mergedModalProps.className,
            containerClassName: mergedModalProps.containerClassName,
            hidden: hidden,
            dialogDefaultMinWidth: minWidth,
            dialogDefaultMaxWidth: maxWidth,
        });
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Modal__WEBPACK_IMPORTED_MODULE_4__["Modal"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ elementToFocusOnDismiss: elementToFocusOnDismiss, firstFocusableSelector: firstFocusableSelector, forceFocusInsideTrap: forceFocusInsideTrap, ignoreExternalFocusing: ignoreExternalFocusing, isClickableOutsideFocusTrap: isClickableOutsideFocusTrap, onDismissed: mergedModalProps.onDismissed, responsiveMode: responsiveMode }, mergedModalProps, { isDarkOverlay: mergedModalProps.isDarkOverlay, isBlocking: mergedModalProps.isBlocking, isOpen: isOpen !== undefined ? isOpen : !hidden, className: classNames.root, containerClassName: classNames.main, onDismiss: onDismiss ? onDismiss : mergedModalProps.onDismiss, subtitleAriaId: this._getSubTextId(), titleAriaId: this._getTitleTextId() }),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_DialogContent__WEBPACK_IMPORTED_MODULE_6__["DialogContent"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ subTextId: this._defaultSubTextId, title: dialogContentProps.title, subText: dialogContentProps.subText, showCloseButton: mergedModalProps.isBlocking, topButtonsProps: dialogContentProps.topButtonsProps, type: dialogContentProps.type, onDismiss: onDismiss ? onDismiss : dialogContentProps.onDismiss, className: dialogContentProps.className }, dialogContentProps), this.props.children)));
    };
    DialogBase.defaultProps = {
        hidden: true,
    };
    DialogBase = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        _utilities_decorators_withResponsiveMode__WEBPACK_IMPORTED_MODULE_5__["withResponsiveMode"]
    ], DialogBase);
    return DialogBase;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));

//# sourceMappingURL=Dialog.base.js.map

/***/ }),

/***/ "HVOw":
/*!******************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/ChoiceGroup.js ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: ChoiceGroup, ChoiceGroupBase, ChoiceGroupOption */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_ChoiceGroup_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/ChoiceGroup/index */ "S6rZ");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChoiceGroup", function() { return _components_ChoiceGroup_index__WEBPACK_IMPORTED_MODULE_0__["ChoiceGroup"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChoiceGroupBase", function() { return _components_ChoiceGroup_index__WEBPACK_IMPORTED_MODULE_0__["ChoiceGroupBase"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChoiceGroupOption", function() { return _components_ChoiceGroup_index__WEBPACK_IMPORTED_MODULE_0__["ChoiceGroupOption"]; });


//# sourceMappingURL=ChoiceGroup.js.map

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

/***/ "KcOF":
/*!**********************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-media@2.0.244/node_modules/@ms/odsp-media/dist/media/images/firstrunexperience/Sprout.svg ***!
  \**********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "Sprout_f2ef329528a687b19cb72179be0aef1d.svg";

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

/***/ "Qtdd":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/ChoiceGroup/ChoiceGroupOption/ChoiceGroupOption.base.js ***!
  \**********************************************************************************************************************************************************************************************************************************/
/*! exports provided: ChoiceGroupOptionBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChoiceGroupOptionBase", function() { return ChoiceGroupOptionBase; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Image */ "pw9o");
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../Icon */ "56LG");
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Icon__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../Utilities */ "mkpW");
/* harmony import */ var _uifabric_utilities__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @uifabric/utilities */ "P2cQ");
/* harmony import */ var _uifabric_utilities__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_uifabric_utilities__WEBPACK_IMPORTED_MODULE_5__);






var getClassNames = Object(_Utilities__WEBPACK_IMPORTED_MODULE_4__["classNamesFunction"])();
var LARGE_IMAGE_SIZE = 71;
/**
 * {@docCategory ChoiceGroup}
 */
var ChoiceGroupOptionBase = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ChoiceGroupOptionBase, _super);
    function ChoiceGroupOptionBase(props) {
        var _this = _super.call(this, props) || this;
        _this._onChange = function (evt) {
            var onChange = _this.props.onChange;
            if (onChange) {
                onChange(evt, _this.props);
            }
        };
        _this._onBlur = function (evt) {
            var onBlur = _this.props.onBlur;
            if (onBlur) {
                onBlur(evt, _this.props);
            }
        };
        _this._onFocus = function (evt) {
            var onFocus = _this.props.onFocus;
            if (onFocus) {
                onFocus(evt, _this.props);
            }
        };
        _this._onRenderField = function (props) {
            var id = props.id, imageSrc = props.imageSrc, _a = props.imageAlt, imageAlt = _a === void 0 ? '' : _a, selectedImageSrc = props.selectedImageSrc, iconProps = props.iconProps;
            var imageSize = props.imageSize ? props.imageSize : { width: 32, height: 32 };
            var onRenderLabel = props.onRenderLabel
                ? Object(_uifabric_utilities__WEBPACK_IMPORTED_MODULE_5__["composeRenderFunction"])(props.onRenderLabel, _this._onRenderLabel)
                : _this._onRenderLabel;
            var label = onRenderLabel(props);
            return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("label", { htmlFor: id, className: _this._classNames.field },
                imageSrc && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: _this._classNames.innerField },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: _this._classNames.imageWrapper },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Image__WEBPACK_IMPORTED_MODULE_2__["Image"], { src: imageSrc, alt: imageAlt, width: imageSize.width, height: imageSize.height })),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: _this._classNames.selectedImageWrapper },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Image__WEBPACK_IMPORTED_MODULE_2__["Image"], { src: selectedImageSrc, alt: imageAlt, width: imageSize.width, height: imageSize.height })))),
                iconProps && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: _this._classNames.innerField },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: _this._classNames.iconWrapper },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Icon__WEBPACK_IMPORTED_MODULE_3__["Icon"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, iconProps))))),
                imageSrc || iconProps ? react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: _this._classNames.labelWrapper }, label) : label));
        };
        _this._onRenderLabel = function (props) {
            return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", { id: props.labelId, className: "ms-ChoiceFieldLabel" }, props.text));
        };
        Object(_Utilities__WEBPACK_IMPORTED_MODULE_4__["initializeComponentRef"])(_this);
        return _this;
    }
    ChoiceGroupOptionBase.prototype.render = function () {
        var _a = this.props, ariaLabel = _a.ariaLabel, focused = _a.focused, required = _a.required, theme = _a.theme, iconProps = _a.iconProps, imageSrc = _a.imageSrc, imageSize = _a.imageSize, disabled = _a.disabled, 
        // eslint-disable-next-line deprecation/deprecation
        checked = _a.checked, id = _a.id, styles = _a.styles, name = _a.name, _b = _a.onRenderField, onRenderField = _b === void 0 ? this._onRenderField : _b, rest = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(_a, ["ariaLabel", "focused", "required", "theme", "iconProps", "imageSrc", "imageSize", "disabled", "checked", "id", "styles", "name", "onRenderField"]);
        this._classNames = getClassNames(styles, {
            theme: theme,
            hasIcon: !!iconProps,
            hasImage: !!imageSrc,
            checked: checked,
            disabled: disabled,
            imageIsLarge: !!imageSrc && (imageSize.width > LARGE_IMAGE_SIZE || imageSize.height > LARGE_IMAGE_SIZE),
            imageSize: imageSize,
            focused: focused,
        });
        var _c = Object(_Utilities__WEBPACK_IMPORTED_MODULE_4__["getNativeProps"])(rest, _Utilities__WEBPACK_IMPORTED_MODULE_4__["inputProperties"]), className = _c.className, nativeProps = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(_c, ["className"]);
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: this._classNames.root },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: this._classNames.choiceFieldWrapper },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("input", Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ "aria-label": ariaLabel, id: id, className: Object(_Utilities__WEBPACK_IMPORTED_MODULE_4__["css"])(this._classNames.input, className), type: "radio", name: name, disabled: disabled, checked: checked, required: required }, nativeProps, { onChange: this._onChange, onFocus: this._onFocus, onBlur: this._onBlur })),
                onRenderField(this.props, this._onRenderField))));
    };
    ChoiceGroupOptionBase.defaultProps = {
        // This ensures default imageSize value doesn't mutate. Mutation can cause style re-calcuation.
        imageSize: { width: 32, height: 32 },
    };
    return ChoiceGroupOptionBase;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));

//# sourceMappingURL=ChoiceGroupOption.base.js.map

/***/ }),

/***/ "S6rZ":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/ChoiceGroup/index.js ***!
  \***********************************************************************************************************************************************************************************************/
/*! exports provided: ChoiceGroup, ChoiceGroupBase, ChoiceGroupOption */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ChoiceGroup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ChoiceGroup */ "0zH+");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChoiceGroup", function() { return _ChoiceGroup__WEBPACK_IMPORTED_MODULE_0__["ChoiceGroup"]; });

/* harmony import */ var _ChoiceGroup_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ChoiceGroup.base */ "4Qri");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChoiceGroupBase", function() { return _ChoiceGroup_base__WEBPACK_IMPORTED_MODULE_1__["ChoiceGroupBase"]; });

/* harmony import */ var _ChoiceGroupOption_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ChoiceGroupOption/index */ "CaTI");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChoiceGroupOption", function() { return _ChoiceGroupOption_index__WEBPACK_IMPORTED_MODULE_2__["ChoiceGroupOption"]; });




//# sourceMappingURL=index.js.map

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

/***/ "WiZN":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/Dialog/DialogContent.styles.js ***!
  \*********************************************************************************************************************************************************************************************************/
/*! exports provided: getStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStyles", function() { return getStyles; });
/* harmony import */ var _Styling__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Styling */ "PL71");

var GlobalClassNames = {
    contentLgHeader: 'ms-Dialog-lgHeader',
    close: 'ms-Dialog--close',
    subText: 'ms-Dialog-subText',
    header: 'ms-Dialog-header',
    headerLg: 'ms-Dialog--lgHeader',
    button: 'ms-Dialog-button ms-Dialog-button--close',
    inner: 'ms-Dialog-inner',
    content: 'ms-Dialog-content',
    title: 'ms-Dialog-title',
};
var getStyles = function (props) {
    var _a, _b, _c;
    var className = props.className, theme = props.theme, isLargeHeader = props.isLargeHeader, isClose = props.isClose, hidden = props.hidden, isMultiline = props.isMultiline, draggableHeaderClassName = props.draggableHeaderClassName;
    var palette = theme.palette, fonts = theme.fonts, effects = theme.effects, semanticColors = theme.semanticColors;
    var classNames = Object(_Styling__WEBPACK_IMPORTED_MODULE_0__["getGlobalClassNames"])(GlobalClassNames, theme);
    return {
        content: [
            isLargeHeader && [
                classNames.contentLgHeader,
                {
                    borderTop: "4px solid " + palette.themePrimary,
                },
            ],
            isClose && classNames.close,
            {
                flexGrow: 1,
                overflowY: 'hidden',
            },
            className,
        ],
        subText: [
            classNames.subText,
            fonts.medium,
            {
                margin: '0 0 24px 0',
                color: semanticColors.bodySubtext,
                lineHeight: '1.5',
                wordWrap: 'break-word',
                fontWeight: _Styling__WEBPACK_IMPORTED_MODULE_0__["FontWeights"].regular,
            },
        ],
        header: [
            classNames.header,
            {
                position: 'relative',
                width: '100%',
                boxSizing: 'border-box',
            },
            isClose && classNames.close,
            draggableHeaderClassName && [
                draggableHeaderClassName,
                {
                    cursor: 'move',
                },
            ],
        ],
        button: [
            classNames.button,
            hidden && {
                selectors: {
                    '.ms-Icon.ms-Icon--Cancel': {
                        color: semanticColors.buttonText,
                        fontSize: _Styling__WEBPACK_IMPORTED_MODULE_0__["IconFontSizes"].medium,
                    },
                },
            },
        ],
        inner: [
            classNames.inner,
            {
                padding: '0 24px 24px',
                selectors: (_a = {},
                    _a["@media (min-width: " + _Styling__WEBPACK_IMPORTED_MODULE_0__["ScreenWidthMinSmall"] + "px) and (max-width: " + _Styling__WEBPACK_IMPORTED_MODULE_0__["ScreenWidthMaxSmall"] + "px)"] = {
                        padding: '0 16px 16px',
                    },
                    _a),
            },
        ],
        innerContent: [
            classNames.content,
            {
                position: 'relative',
                width: '100%',
            },
        ],
        title: [
            classNames.title,
            fonts.xLarge,
            {
                color: semanticColors.bodyText,
                margin: '0',
                minHeight: fonts.xLarge.fontSize,
                padding: '16px 46px 20px 24px',
                lineHeight: 'normal',
                selectors: (_b = {},
                    _b["@media (min-width: " + _Styling__WEBPACK_IMPORTED_MODULE_0__["ScreenWidthMinSmall"] + "px) and (max-width: " + _Styling__WEBPACK_IMPORTED_MODULE_0__["ScreenWidthMaxSmall"] + "px)"] = {
                        padding: '16px 46px 16px 16px',
                    },
                    _b),
            },
            isLargeHeader && {
                color: semanticColors.menuHeader,
            },
            isMultiline && { fontSize: fonts.xxLarge.fontSize },
        ],
        topButton: [
            {
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'nowrap',
                position: 'absolute',
                top: '0',
                right: '0',
                padding: '15px 15px 0 0',
                selectors: (_c = {
                        '> *': {
                            flex: '0 0 auto',
                        },
                        '.ms-Dialog-button': {
                            color: semanticColors.buttonText,
                        },
                        '.ms-Dialog-button:hover': {
                            color: semanticColors.buttonTextHovered,
                            borderRadius: effects.roundedCorner2,
                        }
                    },
                    _c["@media (min-width: " + _Styling__WEBPACK_IMPORTED_MODULE_0__["ScreenWidthMinSmall"] + "px) and (max-width: " + _Styling__WEBPACK_IMPORTED_MODULE_0__["ScreenWidthMaxSmall"] + "px)"] = {
                        padding: '15px 8px 0 0',
                    },
                    _c),
            },
        ],
    };
};
//# sourceMappingURL=DialogContent.styles.js.map

/***/ }),

/***/ "XrD0":
/*!********************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-media@2.0.244/node_modules/@ms/odsp-media/dist/media/images/sitePages/authoringFirstRun/modal-2.png ***!
  \********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "modal-2_72f08e0d853040560c8ac4253a66b00e.png";

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

/***/ }),

/***/ "j0oQ":
/*!********************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-media@2.0.244/node_modules/@ms/odsp-media/dist/media/images/sitePages/authoringFirstRun/modal-3.svg ***!
  \********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "modal-3_b4a77ca7f8c95ed5171559edb41987c6.svg";

/***/ }),

/***/ "n0OV":
/*!********************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-media@2.0.244/node_modules/@ms/odsp-media/dist/media/images/sitePages/authoringFirstRun/modal-1.png ***!
  \********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "modal-1_862ce14ba3cae652ce01aa1601162916.png";

/***/ }),

/***/ "t04b":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/Dialog/Dialog.styles.js ***!
  \**************************************************************************************************************************************************************************************************/
/*! exports provided: getStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStyles", function() { return getStyles; });
/* harmony import */ var _Styling__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Styling */ "PL71");

var GlobalClassNames = {
    root: 'ms-Dialog',
};
var getStyles = function (props) {
    var _a;
    var className = props.className, containerClassName = props.containerClassName, // eslint-disable-line deprecation/deprecation
    _b = props.dialogDefaultMinWidth, // eslint-disable-line deprecation/deprecation
    dialogDefaultMinWidth = _b === void 0 ? '288px' : _b, _c = props.dialogDefaultMaxWidth, dialogDefaultMaxWidth = _c === void 0 ? '340px' : _c, hidden = props.hidden, theme = props.theme;
    var classNames = Object(_Styling__WEBPACK_IMPORTED_MODULE_0__["getGlobalClassNames"])(GlobalClassNames, theme);
    return {
        root: [classNames.root, theme.fonts.medium, className],
        main: [
            {
                width: dialogDefaultMinWidth,
                outline: '3px solid transparent',
                selectors: (_a = {},
                    _a["@media (min-width: " + _Styling__WEBPACK_IMPORTED_MODULE_0__["ScreenWidthMinMedium"] + "px)"] = {
                        width: 'auto',
                        maxWidth: dialogDefaultMaxWidth,
                        minWidth: dialogDefaultMinWidth,
                    },
                    _a),
            },
            !hidden && { display: 'flex' },
            containerClassName,
        ],
    };
};
//# sourceMappingURL=Dialog.styles.js.map

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


/***/ }),

/***/ "wjk+":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/Dialog/DialogContent.base.js ***!
  \*******************************************************************************************************************************************************************************************************/
/*! exports provided: DialogContentBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogContentBase", function() { return DialogContentBase; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Utilities */ "mkpW");
/* harmony import */ var _DialogContent_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DialogContent.types */ "A5R/");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Button */ "epn0");
/* harmony import */ var _DialogFooter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./DialogFooter */ "5xuA");
/* harmony import */ var _utilities_decorators_withResponsiveMode__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utilities/decorators/withResponsiveMode */ "5qgq");
/* harmony import */ var _utilities_decorators_withResponsiveMode__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_utilities_decorators_withResponsiveMode__WEBPACK_IMPORTED_MODULE_6__);







var getClassNames = Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["classNamesFunction"])();
var DialogFooterType = (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_DialogFooter__WEBPACK_IMPORTED_MODULE_5__["DialogFooter"], null)).type;
var COMPONENT_NAME = 'DialogContent';
var DialogContentBase = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(DialogContentBase, _super);
    function DialogContentBase(props) {
        var _this = _super.call(this, props) || this;
        Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["initializeComponentRef"])(_this);
        Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["warnDeprecations"])(COMPONENT_NAME, props, {
            titleId: 'titleProps.id',
        });
        return _this;
    }
    DialogContentBase.prototype.render = function () {
        var _a = this.props, showCloseButton = _a.showCloseButton, className = _a.className, closeButtonAriaLabel = _a.closeButtonAriaLabel, onDismiss = _a.onDismiss, subTextId = _a.subTextId, subText = _a.subText, _b = _a.titleProps, titleProps = _b === void 0 ? {} : _b, 
        // eslint-disable-next-line deprecation/deprecation
        titleId = _a.titleId, title = _a.title, type = _a.type, styles = _a.styles, theme = _a.theme, draggableHeaderClassName = _a.draggableHeaderClassName;
        var classNames = getClassNames(styles, {
            theme: theme,
            className: className,
            isLargeHeader: type === _DialogContent_types__WEBPACK_IMPORTED_MODULE_3__["DialogType"].largeHeader,
            isClose: type === _DialogContent_types__WEBPACK_IMPORTED_MODULE_3__["DialogType"].close,
            draggableHeaderClassName: draggableHeaderClassName,
        });
        var groupings = this._groupChildren();
        var subTextContent;
        if (subText) {
            subTextContent = (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", { className: classNames.subText, id: subTextId }, subText));
        }
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: classNames.content },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: classNames.header },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ id: titleId, role: "heading", "aria-level": 1 }, titleProps, { className: Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["css"])(classNames.title, titleProps.className) }), title),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: classNames.topButton },
                    this.props.topButtonsProps.map(function (props, index) { return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Button__WEBPACK_IMPORTED_MODULE_4__["IconButton"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ key: props.uniqueId || index }, props))); }),
                    (type === _DialogContent_types__WEBPACK_IMPORTED_MODULE_3__["DialogType"].close || (showCloseButton && type !== _DialogContent_types__WEBPACK_IMPORTED_MODULE_3__["DialogType"].largeHeader)) && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Button__WEBPACK_IMPORTED_MODULE_4__["IconButton"], { className: classNames.button, iconProps: { iconName: 'Cancel' }, ariaLabel: closeButtonAriaLabel, onClick: onDismiss, title: closeButtonAriaLabel })))),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: classNames.inner },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: classNames.innerContent },
                    subTextContent,
                    groupings.contents),
                groupings.footers)));
    };
    // @TODO - typing the footers as an array of DialogFooter is difficult because
    // casing "child as DialogFooter" causes a problem because
    // "Neither type 'ReactElement<any>' nor type 'DialogFooter' is assignable to the other."
    DialogContentBase.prototype._groupChildren = function () {
        var groupings = {
            footers: [],
            contents: [],
        };
        react__WEBPACK_IMPORTED_MODULE_1__["Children"].map(this.props.children, function (child) {
            if (typeof child === 'object' && child !== null && child.type === DialogFooterType) {
                groupings.footers.push(child);
            }
            else {
                groupings.contents.push(child);
            }
        });
        return groupings;
    };
    DialogContentBase.defaultProps = {
        showCloseButton: false,
        className: '',
        topButtonsProps: [],
        closeButtonAriaLabel: 'Close',
    };
    DialogContentBase = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        _utilities_decorators_withResponsiveMode__WEBPACK_IMPORTED_MODULE_6__["withResponsiveMode"]
    ], DialogContentBase);
    return DialogContentBase;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));

//# sourceMappingURL=DialogContent.base.js.map

/***/ }),

/***/ "z7PP":
/*!********************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-media@2.0.244/node_modules/@ms/odsp-media/dist/media/images/firstrunexperience/Tree.svg ***!
  \********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "Tree_ecc465a93650b411933020ebe9b0dca7.svg";

/***/ }),

/***/ "zJK0":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/ChoiceGroup/ChoiceGroupOption/ChoiceGroupOption.styles.js ***!
  \************************************************************************************************************************************************************************************************************************************/
/*! exports provided: getStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStyles", function() { return getStyles; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Styling__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../Styling */ "PL71");
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Utilities */ "mkpW");



var GlobalClassNames = {
    root: 'ms-ChoiceField',
    choiceFieldWrapper: 'ms-ChoiceField-wrapper',
    input: 'ms-ChoiceField-input',
    field: 'ms-ChoiceField-field',
    innerField: 'ms-ChoiceField-innerField',
    imageWrapper: 'ms-ChoiceField-imageWrapper',
    iconWrapper: 'ms-ChoiceField-iconWrapper',
    labelWrapper: 'ms-ChoiceField-labelWrapper',
    checked: 'is-checked',
};
var labelWrapperLineHeight = 15;
var labelWrapperHeight = labelWrapperLineHeight * 2 + 2; // adding 2px height to ensure text doesn't get cutoff
var iconSize = 32;
var choiceFieldSize = 20;
var choiceFieldTransitionDuration = '200ms';
var choiceFieldTransitionTiming = 'cubic-bezier(.4, 0, .23, 1)';
var radioButtonSpacing = 3;
var radioButtonInnerSize = 5;
function getChoiceGroupFocusStyle(focusBorderColor, hasIconOrImage) {
    var _a, _b;
    return [
        'is-inFocus',
        {
            selectors: (_a = {},
                _a["." + _Utilities__WEBPACK_IMPORTED_MODULE_2__["IsFocusVisibleClassName"] + " &"] = {
                    position: 'relative',
                    outline: 'transparent',
                    selectors: {
                        '::-moz-focus-inner': {
                            border: 0,
                        },
                        ':after': {
                            content: '""',
                            top: -2,
                            right: -2,
                            bottom: -2,
                            left: -2,
                            pointerEvents: 'none',
                            border: "1px solid " + focusBorderColor,
                            position: 'absolute',
                            selectors: (_b = {},
                                _b[_Styling__WEBPACK_IMPORTED_MODULE_1__["HighContrastSelector"]] = {
                                    borderColor: 'WindowText',
                                    borderWidth: hasIconOrImage ? 1 : 2,
                                },
                                _b),
                        },
                    },
                },
                _a),
        },
    ];
}
function getImageWrapperStyle(isSelectedImageWrapper, className, checked) {
    return [
        className,
        {
            paddingBottom: 2,
            transitionProperty: 'opacity',
            transitionDuration: choiceFieldTransitionDuration,
            transitionTimingFunction: 'ease',
            selectors: {
                '.ms-Image': {
                    display: 'inline-block',
                    borderStyle: 'none',
                },
            },
        },
        (checked ? !isSelectedImageWrapper : isSelectedImageWrapper) && [
            'is-hidden',
            {
                position: 'absolute',
                left: 0,
                top: 0,
                width: '100%',
                height: '100%',
                overflow: 'hidden',
                opacity: 0,
            },
        ],
    ];
}
var getStyles = function (props) {
    var _a, _b, _c, _d, _e;
    var theme = props.theme, hasIcon = props.hasIcon, hasImage = props.hasImage, checked = props.checked, disabled = props.disabled, imageIsLarge = props.imageIsLarge, focused = props.focused, imageSize = props.imageSize;
    var palette = theme.palette, semanticColors = theme.semanticColors, fonts = theme.fonts;
    var classNames = Object(_Styling__WEBPACK_IMPORTED_MODULE_1__["getGlobalClassNames"])(GlobalClassNames, theme);
    // Tokens
    // TODO: after updating the semanticColors slots mapping this needs to be semanticColors.smallInputBorder
    var circleBorderColor = palette.neutralPrimary;
    var circleHoveredBorderColor = semanticColors.inputBorderHovered;
    var circleCheckedBorderColor = semanticColors.inputBackgroundChecked;
    // TODO: after updating the semanticColors slots mapping this needs to be semanticColors.inputBackgroundCheckedHovered
    var circleCheckedHoveredBorderColor = palette.themeDark;
    var circleDisabledBorderColor = semanticColors.disabledBodySubtext;
    var circleBackgroundColor = semanticColors.bodyBackground;
    var dotUncheckedHoveredColor = palette.neutralSecondary;
    var dotCheckedColor = semanticColors.inputBackgroundChecked;
    // TODO: after updating the semanticColors slots mapping this needs to be semanticColors.inputBackgroundCheckedHovered
    var dotCheckedHoveredColor = palette.themeDark;
    var dotDisabledColor = semanticColors.disabledBodySubtext;
    // TODO: after updating the semanticColors slots mapping this needs to be semanticColors.bodyTextChecked
    var labelHoverFocusColor = palette.neutralDark;
    var focusBorderColor = semanticColors.focusBorder;
    var iconOrImageChoiceBorderUncheckedHoveredColor = semanticColors.inputBorderHovered;
    // TODO: after updating the semanticColors slots mapping this needs to be semanticColors.inputBackgroundCheckedHovered
    var iconOrImageChoiceBorderCheckedColor = semanticColors.inputBackgroundChecked;
    var iconOrImageChoiceBorderCheckedHoveredColor = palette.themeDark;
    var iconOrImageChoiceBackgroundColor = palette.neutralLighter;
    var fieldHoverOrFocusProperties = {
        selectors: {
            '.ms-ChoiceFieldLabel': {
                color: labelHoverFocusColor,
            },
            ':before': {
                borderColor: checked ? circleCheckedHoveredBorderColor : circleHoveredBorderColor,
            },
            ':after': [
                !hasIcon &&
                    !hasImage &&
                    !checked && {
                    content: '""',
                    transitionProperty: 'background-color',
                    left: 5,
                    top: 5,
                    width: 10,
                    height: 10,
                    backgroundColor: dotUncheckedHoveredColor,
                },
                checked && {
                    borderColor: dotCheckedHoveredColor,
                },
            ],
        },
    };
    var enabledFieldWithImageHoverOrFocusProperties = {
        borderColor: checked ? iconOrImageChoiceBorderCheckedHoveredColor : iconOrImageChoiceBorderUncheckedHoveredColor,
        selectors: {
            ':before': {
                opacity: 1,
                borderColor: checked ? circleCheckedHoveredBorderColor : circleHoveredBorderColor,
            },
        },
    };
    var circleAreaProperties = [
        {
            content: '""',
            display: 'inline-block',
            backgroundColor: circleBackgroundColor,
            borderWidth: 1,
            borderStyle: 'solid',
            borderColor: circleBorderColor,
            width: choiceFieldSize,
            height: choiceFieldSize,
            fontWeight: 'normal',
            position: 'absolute',
            top: 0,
            left: 0,
            boxSizing: 'border-box',
            transitionProperty: 'border-color',
            transitionDuration: choiceFieldTransitionDuration,
            transitionTimingFunction: choiceFieldTransitionTiming,
            borderRadius: '50%',
        },
        disabled && {
            borderColor: circleDisabledBorderColor,
            selectors: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])((_a = {}, _a[_Styling__WEBPACK_IMPORTED_MODULE_1__["HighContrastSelector"]] = {
                borderColor: 'GrayText',
                background: 'Window',
            }, _a), Object(_Styling__WEBPACK_IMPORTED_MODULE_1__["getEdgeChromiumNoHighContrastAdjustSelector"])()),
        },
        checked && {
            borderColor: disabled ? circleDisabledBorderColor : circleCheckedBorderColor,
            selectors: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])((_b = {}, _b[_Styling__WEBPACK_IMPORTED_MODULE_1__["HighContrastSelector"]] = {
                borderColor: 'Highlight',
                background: 'Window',
            }, _b), Object(_Styling__WEBPACK_IMPORTED_MODULE_1__["getEdgeChromiumNoHighContrastAdjustSelector"])()),
        },
        (hasIcon || hasImage) && {
            top: radioButtonSpacing,
            right: radioButtonSpacing,
            left: 'auto',
            opacity: checked ? 1 : 0,
        },
    ];
    var dotAreaProperties = [
        {
            content: '""',
            width: 0,
            height: 0,
            borderRadius: '50%',
            position: 'absolute',
            left: choiceFieldSize / 2,
            right: 0,
            transitionProperty: 'border-width',
            transitionDuration: choiceFieldTransitionDuration,
            transitionTimingFunction: choiceFieldTransitionTiming,
            boxSizing: 'border-box',
        },
        checked && {
            borderWidth: 5,
            borderStyle: 'solid',
            borderColor: disabled ? dotDisabledColor : dotCheckedColor,
            left: 5,
            top: 5,
            width: 10,
            height: 10,
            selectors: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])((_c = {}, _c[_Styling__WEBPACK_IMPORTED_MODULE_1__["HighContrastSelector"]] = {
                borderColor: 'Highlight',
            }, _c), Object(_Styling__WEBPACK_IMPORTED_MODULE_1__["getEdgeChromiumNoHighContrastAdjustSelector"])()),
        },
        checked &&
            (hasIcon || hasImage) && {
            top: radioButtonSpacing + radioButtonInnerSize,
            right: radioButtonSpacing + radioButtonInnerSize,
            left: 'auto',
        },
    ];
    return {
        root: [
            classNames.root,
            theme.fonts.medium,
            {
                display: 'flex',
                alignItems: 'center',
                boxSizing: 'border-box',
                color: semanticColors.bodyText,
                minHeight: 26,
                border: 'none',
                position: 'relative',
                marginTop: 8,
                selectors: {
                    '.ms-ChoiceFieldLabel': {
                        display: 'inline-block',
                    },
                },
            },
            !hasIcon &&
                !hasImage && {
                selectors: {
                    '.ms-ChoiceFieldLabel': {
                        paddingLeft: '26px',
                    },
                },
            },
            hasImage && 'ms-ChoiceField--image',
            hasIcon && 'ms-ChoiceField--icon',
            (hasIcon || hasImage) && {
                display: 'inline-flex',
                fontSize: 0,
                margin: '0 4px 4px 0',
                paddingLeft: 0,
                backgroundColor: iconOrImageChoiceBackgroundColor,
                height: '100%',
            },
        ],
        choiceFieldWrapper: [
            classNames.choiceFieldWrapper,
            focused && getChoiceGroupFocusStyle(focusBorderColor, hasIcon || hasImage),
        ],
        // The hidden input
        input: [
            classNames.input,
            {
                position: 'absolute',
                opacity: 0,
                top: 0,
                right: 0,
                width: '100%',
                height: '100%',
                margin: 0,
            },
            disabled && 'is-disabled',
        ],
        field: [
            classNames.field,
            checked && classNames.checked,
            {
                display: 'inline-block',
                cursor: 'pointer',
                marginTop: 0,
                position: 'relative',
                verticalAlign: 'top',
                userSelect: 'none',
                minHeight: 20,
                selectors: {
                    ':hover': !disabled && fieldHoverOrFocusProperties,
                    ':focus': !disabled && fieldHoverOrFocusProperties,
                    // The circle
                    ':before': circleAreaProperties,
                    // The dot
                    ':after': dotAreaProperties,
                },
            },
            hasIcon && 'ms-ChoiceField--icon',
            hasImage && 'ms-ChoiceField-field--image',
            (hasIcon || hasImage) && {
                boxSizing: 'content-box',
                cursor: 'pointer',
                paddingTop: 22,
                margin: 0,
                textAlign: 'center',
                transitionProperty: 'all',
                transitionDuration: choiceFieldTransitionDuration,
                transitionTimingFunction: 'ease',
                border: '1px solid transparent',
                justifyContent: 'center',
                alignItems: 'center',
                display: 'flex',
                flexDirection: 'column',
            },
            checked && {
                borderColor: iconOrImageChoiceBorderCheckedColor,
            },
            (hasIcon || hasImage) &&
                !disabled && {
                selectors: {
                    ':hover': enabledFieldWithImageHoverOrFocusProperties,
                    ':focus': enabledFieldWithImageHoverOrFocusProperties,
                },
            },
            disabled && {
                cursor: 'default',
                selectors: {
                    '.ms-ChoiceFieldLabel': {
                        color: semanticColors.disabledBodyText,
                        selectors: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])((_d = {}, _d[_Styling__WEBPACK_IMPORTED_MODULE_1__["HighContrastSelector"]] = {
                            color: 'GrayText',
                        }, _d), Object(_Styling__WEBPACK_IMPORTED_MODULE_1__["getEdgeChromiumNoHighContrastAdjustSelector"])()),
                    },
                },
            },
            checked &&
                disabled && {
                borderColor: iconOrImageChoiceBackgroundColor,
            },
        ],
        innerField: [
            classNames.innerField,
            hasImage && {
                // using non-null assertion because we have a default in `ChoiceGroupOptionBase` class.
                height: imageSize.height,
                width: imageSize.width,
            },
            (hasIcon || hasImage) && {
                position: 'relative',
                display: 'inline-block',
                paddingLeft: 30,
                paddingRight: 30,
            },
            (hasIcon || hasImage) &&
                imageIsLarge && {
                paddingLeft: 24,
                paddingRight: 24,
            },
            (hasIcon || hasImage) &&
                disabled && {
                opacity: 0.25,
                selectors: (_e = {},
                    _e[_Styling__WEBPACK_IMPORTED_MODULE_1__["HighContrastSelector"]] = {
                        color: 'GrayText',
                        opacity: 1,
                    },
                    _e),
            },
        ],
        imageWrapper: getImageWrapperStyle(false, classNames.imageWrapper, checked),
        selectedImageWrapper: getImageWrapperStyle(true, classNames.imageWrapper, checked),
        iconWrapper: [
            classNames.iconWrapper,
            {
                fontSize: iconSize,
                lineHeight: iconSize,
                height: iconSize,
            },
        ],
        labelWrapper: [
            classNames.labelWrapper,
            fonts.medium,
            (hasIcon || hasImage) && {
                display: 'block',
                position: 'relative',
                margin: '4px 8px 2px 8px',
                height: labelWrapperHeight,
                lineHeight: labelWrapperLineHeight,
                // using non-null assertion because we have a default in `ChoiceGroupOptionBase` class.
                maxWidth: imageSize.width * 2,
                overflow: 'hidden',
                whiteSpace: 'pre-wrap',
            },
        ],
    };
};
//# sourceMappingURL=ChoiceGroupOption.styles.js.map

/***/ })

}]);
//# sourceMappingURL=chunk.vendors~sp-fretimer_[locale].js.map