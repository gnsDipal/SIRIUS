(window["webpackJsonp_1e2cdec9_1360_4295_b73c_98d6f51866d5_0_1_0"] = window["webpackJsonp_1e2cdec9_1360_4295_b73c_98d6f51866d5_0_1_0"] || []).push([["vendors~shared-react-site-header-title-co~f08d326e"],{

/***/ "59YV":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/Coachmark/Coachmark.js ***!
  \*************************************************************************************************************************************************************************************************/
/*! exports provided: Coachmark */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Coachmark", function() { return Coachmark; });
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Utilities */ "mkpW");
/* harmony import */ var _Coachmark_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Coachmark.styles */ "6w+m");
/* harmony import */ var _Coachmark_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Coachmark.base */ "7luo");



var Coachmark = Object(_Utilities__WEBPACK_IMPORTED_MODULE_0__["styled"])(_Coachmark_base__WEBPACK_IMPORTED_MODULE_2__["CoachmarkBase"], _Coachmark_styles__WEBPACK_IMPORTED_MODULE_1__["getStyles"], undefined, {
    scope: 'Coachmark',
});
//# sourceMappingURL=Coachmark.js.map

/***/ }),

/***/ "6w+m":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/Coachmark/Coachmark.styles.js ***!
  \********************************************************************************************************************************************************************************************************/
/*! exports provided: COACHMARK_WIDTH, COACHMARK_HEIGHT, translateOne, scaleOne, rotateOne, getStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COACHMARK_WIDTH", function() { return COACHMARK_WIDTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COACHMARK_HEIGHT", function() { return COACHMARK_HEIGHT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "translateOne", function() { return translateOne; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scaleOne", function() { return scaleOne; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotateOne", function() { return rotateOne; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStyles", function() { return getStyles; });
/* harmony import */ var _Styling__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Styling */ "PL71");
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Utilities */ "mkpW");


var COACHMARK_WIDTH = 32;
var COACHMARK_HEIGHT = 32;
var translateOne = Object(_Utilities__WEBPACK_IMPORTED_MODULE_1__["memoizeFunction"])(function () {
    return Object(_Styling__WEBPACK_IMPORTED_MODULE_0__["keyframes"])({
        '0%': {
            transform: 'translate(0, 0)',
            animationTimingFunction: 'linear',
        },
        '78.57%': {
            transform: 'translate(0, 0)',
            animationTimingFunction: 'cubic-bezier(0.62, 0, 0.56, 1)',
        },
        '82.14%': {
            transform: 'translate(0, -5px)',
            animationTimingFunction: 'cubic-bezier(0.58, 0, 0, 1)',
        },
        '84.88%': {
            transform: 'translate(0, 9px)',
            animationTimingFunction: 'cubic-bezier(1, 0, 0.56, 1)',
        },
        '88.1%': {
            transform: 'translate(0, -2px)',
            animationTimingFunction: 'cubic-bezier(0.58, 0, 0.67, 1)',
        },
        '90.12%': {
            transform: 'translate(0, 0)',
            animationTimingFunction: 'linear',
        },
        '100%': {
            transform: 'translate(0, 0)',
        },
    });
});
var scaleOne = Object(_Utilities__WEBPACK_IMPORTED_MODULE_1__["memoizeFunction"])(function () {
    return Object(_Styling__WEBPACK_IMPORTED_MODULE_0__["keyframes"])({
        '0%': {
            transform: ' scale(0)',
            animationTimingFunction: 'linear',
        },
        '14.29%': {
            transform: 'scale(0)',
            animationTimingFunction: 'cubic-bezier(0.84, 0, 0.52, 0.99)',
        },
        '16.67%': {
            transform: 'scale(1.15)',
            animationTimingFunction: 'cubic-bezier(0.48, -0.01, 0.52, 1.01)',
        },
        '19.05%': {
            transform: 'scale(0.95)',
            animationTimingFunction: 'cubic-bezier(0.48, 0.02, 0.52, 0.98)',
        },
        '21.43%': {
            transform: 'scale(1)',
            animationTimingFunction: 'linear',
        },
        '42.86%': {
            transform: 'scale(1)',
            animationTimingFunction: 'cubic-bezier(0.48, -0.02, 0.52, 1.02)',
        },
        '45.71%': {
            transform: 'scale(0.8)',
            animationTimingFunction: 'cubic-bezier(0.48, 0.01, 0.52, 0.99)',
        },
        '50%': {
            transform: 'scale(1)',
            animationTimingFunction: 'linear',
        },
        '90.12%': {
            transform: 'scale(1)',
            animationTimingFunction: 'cubic-bezier(0.48, -0.02, 0.52, 1.02)',
        },
        '92.98%': {
            transform: 'scale(0.8)',
            animationTimingFunction: 'cubic-bezier(0.48, 0.01, 0.52, 0.99)',
        },
        '97.26%': {
            transform: 'scale(1)',
            animationTimingFunction: 'linear',
        },
        '100%': {
            transform: 'scale(1)',
        },
    });
});
var rotateOne = Object(_Utilities__WEBPACK_IMPORTED_MODULE_1__["memoizeFunction"])(function () {
    return Object(_Styling__WEBPACK_IMPORTED_MODULE_0__["keyframes"])({
        '0%': {
            transform: 'rotate(0deg)',
            animationTimingFunction: 'linear',
        },
        '83.33%': {
            transform: ' rotate(0deg)',
            animationTimingFunction: 'cubic-bezier(0.33, 0, 0.67, 1)',
        },
        '83.93%': {
            transform: 'rotate(15deg)',
            animationTimingFunction: 'cubic-bezier(0.33, 0, 0.67, 1)',
        },
        '84.52%': {
            transform: 'rotate(-15deg)',
            animationTimingFunction: 'cubic-bezier(0.33, 0, 0.67, 1)',
        },
        '85.12%': {
            transform: 'rotate(15deg)',
            animationTimingFunction: 'cubic-bezier(0.33, 0, 0.67, 1)',
        },
        '85.71%': {
            transform: 'rotate(-15deg)',
            animationTimingFunction: 'cubic-bezier(0.33, 0, 0.67, 1)',
        },
        '86.31%': {
            transform: 'rotate(0deg)',
            animationTimingFunction: 'linear',
        },
        '100%': {
            transform: 'rotate(0deg)',
        },
    });
});
function getStyles(props) {
    var _a;
    var theme = props.theme, className = props.className, color = props.color, beaconColorOne = props.beaconColorOne, beaconColorTwo = props.beaconColorTwo, delayBeforeCoachmarkAnimation = props.delayBeforeCoachmarkAnimation, isCollapsed = props.isCollapsed, 
    // eslint-disable-next-line deprecation/deprecation
    isBeaconAnimating = props.isBeaconAnimating, isMeasuring = props.isMeasuring, 
    // eslint-disable-next-line deprecation/deprecation
    isMeasured = props.isMeasured, entityHostHeight = props.entityHostHeight, entityHostWidth = props.entityHostWidth, transformOrigin = props.transformOrigin;
    if (!theme) {
        throw new Error('theme is undefined or null in base Dropdown getStyles function.');
    }
    var animationInnerDimension = '35px';
    var animationOuterDimension = '150px';
    var animationBorderWidth = '10px';
    var ContinuousPulse = _Styling__WEBPACK_IMPORTED_MODULE_0__["PulsingBeaconAnimationStyles"].continuousPulseAnimationDouble(beaconColorOne ? beaconColorOne : theme.palette.themePrimary, beaconColorTwo ? beaconColorTwo : theme.palette.themeTertiary, animationInnerDimension, animationOuterDimension, animationBorderWidth);
    var ContinuousPulseAnimation = _Styling__WEBPACK_IMPORTED_MODULE_0__["PulsingBeaconAnimationStyles"].createDefaultAnimation(ContinuousPulse, delayBeforeCoachmarkAnimation);
    return {
        root: [
            theme.fonts.medium,
            {
                position: 'relative',
            },
            className,
        ],
        pulsingBeacon: [
            {
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: Object(_Utilities__WEBPACK_IMPORTED_MODULE_1__["getRTL"])(theme) ? 'translate(50%, -50%)' : 'translate(-50%, -50%)',
                width: '0px',
                height: '0px',
                borderRadius: '225px',
                borderStyle: 'solid',
                opacity: '0',
            },
            isCollapsed && isBeaconAnimating && ContinuousPulseAnimation,
        ],
        // Translate Animation Layer
        translateAnimationContainer: [
            {
                width: '100%',
                height: '100%',
            },
            isCollapsed && {
                animationDuration: '14s',
                animationTimingFunction: 'linear',
                animationDirection: 'normal',
                animationIterationCount: '1',
                animationDelay: '0s',
                animationFillMode: 'forwards',
                animationName: translateOne(),
                transition: 'opacity 0.5s ease-in-out',
            },
            !isCollapsed && {
                opacity: '1',
            },
        ],
        // Scale Animation Layer
        scaleAnimationLayer: [
            {
                width: '100%',
                height: '100%',
            },
            isCollapsed && {
                animationDuration: '14s',
                animationTimingFunction: 'linear',
                animationDirection: 'normal',
                animationIterationCount: '1',
                animationDelay: '0s',
                animationFillMode: 'forwards',
                animationName: scaleOne(),
            },
        ],
        // Rotate Animation Layer
        rotateAnimationLayer: [
            {
                width: '100%',
                height: '100%',
            },
            isCollapsed && {
                animationDuration: '14s',
                animationTimingFunction: 'linear',
                animationDirection: 'normal',
                animationIterationCount: '1',
                animationDelay: '0s',
                animationFillMode: 'forwards',
                animationName: rotateOne(),
            },
            !isCollapsed && {
                opacity: '1',
            },
        ],
        // Layer Host, defaults to collapsed
        entityHost: [
            {
                position: 'relative',
                outline: 'none',
                overflow: 'hidden',
                backgroundColor: color,
                borderRadius: COACHMARK_WIDTH,
                transition: 'border-radius 250ms, width 500ms, height 500ms cubic-bezier(0.5, 0, 0, 1)',
                visibility: 'hidden',
                selectors: (_a = {},
                    _a[_Styling__WEBPACK_IMPORTED_MODULE_0__["HighContrastSelector"]] = {
                        backgroundColor: 'Window',
                        border: '2px solid WindowText',
                    },
                    _a["." + _Utilities__WEBPACK_IMPORTED_MODULE_1__["IsFocusVisibleClassName"] + " &:focus"] = {
                        outline: "1px solid " + theme.palette.themeTertiary,
                    },
                    _a),
            },
            !isMeasuring && {
                width: COACHMARK_WIDTH,
                height: COACHMARK_HEIGHT,
                visibility: 'visible',
            },
            !isCollapsed && {
                borderRadius: '1px',
                opacity: '1',
                width: entityHostWidth,
                height: entityHostHeight,
            },
        ],
        entityInnerHost: [
            {
                transition: 'transform 500ms cubic-bezier(0.5, 0, 0, 1)',
                transformOrigin: transformOrigin,
                transform: 'scale(0)',
            },
            !isCollapsed && {
                width: entityHostWidth,
                height: entityHostHeight,
                transform: 'scale(1)',
            },
            !isMeasuring && {
                visibility: 'visible',
            },
        ],
        childrenContainer: [
            {
                display: isMeasured && isCollapsed ? 'none' : 'block',
            },
        ],
        ariaContainer: {
            position: 'fixed',
            opacity: 0,
            height: 0,
            width: 0,
            pointerEvents: 'none',
        },
    };
}
//# sourceMappingURL=Coachmark.styles.js.map

/***/ }),

/***/ "7luo":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/Coachmark/Coachmark.base.js ***!
  \******************************************************************************************************************************************************************************************************/
/*! exports provided: COACHMARK_ATTRIBUTE_NAME, CoachmarkBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COACHMARK_ATTRIBUTE_NAME", function() { return COACHMARK_ATTRIBUTE_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoachmarkBase", function() { return CoachmarkBase; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Utilities */ "mkpW");
/* harmony import */ var _utilities_positioning__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utilities/positioning */ "gdZc");
/* harmony import */ var _PositioningContainer_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PositioningContainer/index */ "K5ui");
/* harmony import */ var _Beak_Beak__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Beak/Beak */ "yB96");
/* harmony import */ var _common_DirectionalHint__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../common/DirectionalHint */ "EE7g");
/* harmony import */ var _Coachmark_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Coachmark.styles */ "6w+m");
/* harmony import */ var _FocusTrapZone__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../FocusTrapZone */ "Qiuu");

// Utilities



// Component Dependencies





var getClassNames = Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["classNamesFunction"])();
var COACHMARK_ATTRIBUTE_NAME = 'data-coachmarkid';
var COMPONENT_NAME = 'Coachmark';
var CoachmarkBase = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(CoachmarkBase, _super);
    function CoachmarkBase(props) {
        var _this = _super.call(this, props) || this;
        /**
         * The cached HTMLElement reference to the Entity Inner Host
         * element.
         */
        _this._entityHost = react__WEBPACK_IMPORTED_MODULE_1__["createRef"]();
        _this._entityInnerHostElement = react__WEBPACK_IMPORTED_MODULE_1__["createRef"]();
        _this._translateAnimationContainer = react__WEBPACK_IMPORTED_MODULE_1__["createRef"]();
        _this._ariaAlertContainer = react__WEBPACK_IMPORTED_MODULE_1__["createRef"]();
        _this._childrenContainer = react__WEBPACK_IMPORTED_MODULE_1__["createRef"]();
        _this._positioningContainer = react__WEBPACK_IMPORTED_MODULE_1__["createRef"]();
        _this.dismiss = function (ev) {
            var onDismiss = _this.props.onDismiss;
            if (onDismiss) {
                onDismiss(ev);
            }
        };
        _this._onKeyDown = function (e) {
            // Open coachmark if user presses ALT + C (arbitrary keypress for now)
            if ((e.altKey && e.which === _Utilities__WEBPACK_IMPORTED_MODULE_2__["KeyCodes"].c) ||
                (e.which === _Utilities__WEBPACK_IMPORTED_MODULE_2__["KeyCodes"].enter &&
                    _this._translateAnimationContainer.current &&
                    _this._translateAnimationContainer.current.contains(e.target))) {
                _this._onFocusHandler();
            }
        };
        _this._onFocusHandler = function () {
            if (_this.state.isCollapsed) {
                _this._openCoachmark();
            }
        };
        _this._onPositioned = function (positionData) {
            _this._async.requestAnimationFrame(function () {
                _this.setState({
                    targetAlignment: positionData.alignmentEdge,
                    targetPosition: positionData.targetEdge,
                });
            });
        };
        _this._setBeakPosition = function () {
            var beakLeft;
            var beakTop;
            var beakRight;
            var beakBottom;
            var transformOriginX;
            var transformOriginY;
            var targetAlignment = _this.state.targetAlignment;
            var distanceAdjustment = '3px'; // Adjustment distance for Beak to shift towards Coachmark bubble.
            switch (_this._beakDirection) {
                // If Beak is pointing Up or Down
                case _utilities_positioning__WEBPACK_IMPORTED_MODULE_3__["RectangleEdge"].top:
                case _utilities_positioning__WEBPACK_IMPORTED_MODULE_3__["RectangleEdge"].bottom:
                    // If there is no target alignment, then beak is X-axis centered in callout
                    if (!targetAlignment) {
                        beakLeft = "calc(50% - " + _Beak_Beak__WEBPACK_IMPORTED_MODULE_5__["BEAK_WIDTH"] / 2 + "px)";
                        transformOriginX = 'center';
                    }
                    else {
                        // Beak is aligned to the left of target
                        if (targetAlignment === _utilities_positioning__WEBPACK_IMPORTED_MODULE_3__["RectangleEdge"].left) {
                            beakLeft = _Coachmark_styles__WEBPACK_IMPORTED_MODULE_7__["COACHMARK_WIDTH"] / 2 - _Beak_Beak__WEBPACK_IMPORTED_MODULE_5__["BEAK_WIDTH"] / 2 + "px";
                            transformOriginX = 'left';
                        }
                        else {
                            // Beak is aligned to the right of target
                            beakRight = _Coachmark_styles__WEBPACK_IMPORTED_MODULE_7__["COACHMARK_WIDTH"] / 2 - _Beak_Beak__WEBPACK_IMPORTED_MODULE_5__["BEAK_WIDTH"] / 2 + "px";
                            transformOriginX = 'right';
                        }
                    }
                    if (_this._beakDirection === _utilities_positioning__WEBPACK_IMPORTED_MODULE_3__["RectangleEdge"].top) {
                        beakTop = distanceAdjustment;
                        transformOriginY = 'top';
                    }
                    else {
                        beakBottom = distanceAdjustment;
                        transformOriginY = 'bottom';
                    }
                    break;
                // If Beak is pointing Left or Right
                case _utilities_positioning__WEBPACK_IMPORTED_MODULE_3__["RectangleEdge"].left:
                case _utilities_positioning__WEBPACK_IMPORTED_MODULE_3__["RectangleEdge"].right:
                    // If there is no target alignment, then beak is Y-axis centered in callout
                    if (!targetAlignment) {
                        beakTop = "calc(50% - " + _Beak_Beak__WEBPACK_IMPORTED_MODULE_5__["BEAK_WIDTH"] / 2 + "px)";
                        transformOriginY = "center";
                    }
                    else {
                        // Beak is aligned to the top of target
                        if (targetAlignment === _utilities_positioning__WEBPACK_IMPORTED_MODULE_3__["RectangleEdge"].top) {
                            beakTop = _Coachmark_styles__WEBPACK_IMPORTED_MODULE_7__["COACHMARK_WIDTH"] / 2 - _Beak_Beak__WEBPACK_IMPORTED_MODULE_5__["BEAK_WIDTH"] / 2 + "px";
                            transformOriginY = "top";
                        }
                        else {
                            // Beak is aligned to the bottom of target
                            beakBottom = _Coachmark_styles__WEBPACK_IMPORTED_MODULE_7__["COACHMARK_WIDTH"] / 2 - _Beak_Beak__WEBPACK_IMPORTED_MODULE_5__["BEAK_WIDTH"] / 2 + "px";
                            transformOriginY = "bottom";
                        }
                    }
                    if (_this._beakDirection === _utilities_positioning__WEBPACK_IMPORTED_MODULE_3__["RectangleEdge"].left) {
                        if (Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["getRTL"])(_this.props.theme)) {
                            beakRight = distanceAdjustment;
                        }
                        else {
                            beakLeft = distanceAdjustment;
                        }
                        transformOriginX = 'left';
                    }
                    else {
                        if (Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["getRTL"])(_this.props.theme)) {
                            beakLeft = distanceAdjustment;
                        }
                        else {
                            beakRight = distanceAdjustment;
                        }
                        transformOriginX = 'right';
                    }
                    break;
            }
            _this.setState({
                beakLeft: beakLeft,
                beakRight: beakRight,
                beakBottom: beakBottom,
                beakTop: beakTop,
                transformOrigin: transformOriginX + " " + transformOriginY,
            });
        };
        _this._openCoachmark = function () {
            _this.setState({
                isCollapsed: false,
            });
            if (_this.props.onAnimationOpenStart) {
                _this.props.onAnimationOpenStart();
            }
            _this._entityInnerHostElement.current &&
                _this._entityInnerHostElement.current.addEventListener('transitionend', function () {
                    // Need setTimeout to trigger narrator
                    _this._async.setTimeout(function () {
                        if (_this._entityInnerHostElement.current) {
                            Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["focusFirstChild"])(_this._entityInnerHostElement.current);
                        }
                    }, 1000);
                    if (_this.props.onAnimationOpenEnd) {
                        _this.props.onAnimationOpenEnd();
                    }
                });
        };
        _this._async = new _Utilities__WEBPACK_IMPORTED_MODULE_2__["Async"](_this);
        _this._events = new _Utilities__WEBPACK_IMPORTED_MODULE_2__["EventGroup"](_this);
        Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["initializeComponentRef"])(_this);
        Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["warnDeprecations"])(COMPONENT_NAME, props, {
            teachingBubbleRef: undefined,
            collapsed: 'isCollapsed',
            beakWidth: undefined,
            beakHeight: undefined,
            width: undefined,
            height: undefined,
        });
        // Set defaults for state
        _this.state = {
            isCollapsed: props.isCollapsed,
            isBeaconAnimating: true,
            isMeasuring: true,
            entityInnerHostRect: {
                width: 0,
                height: 0,
            },
            isMouseInProximity: false,
            isMeasured: false,
        };
        return _this;
    }
    Object.defineProperty(CoachmarkBase.prototype, "_beakDirection", {
        get: function () {
            var targetPosition = this.state.targetPosition;
            if (targetPosition === undefined) {
                return _utilities_positioning__WEBPACK_IMPORTED_MODULE_3__["RectangleEdge"].bottom;
            }
            return Object(_utilities_positioning__WEBPACK_IMPORTED_MODULE_3__["getOppositeEdge"])(targetPosition);
        },
        enumerable: true,
        configurable: true
    });
    CoachmarkBase.prototype.render = function () {
        var _a = this.props, beaconColorOne = _a.beaconColorOne, beaconColorTwo = _a.beaconColorTwo, children = _a.children, target = _a.target, color = _a.color, positioningContainerProps = _a.positioningContainerProps, ariaDescribedBy = _a.ariaDescribedBy, ariaDescribedByText = _a.ariaDescribedByText, ariaLabelledBy = _a.ariaLabelledBy, ariaLabelledByText = _a.ariaLabelledByText, ariaAlertText = _a.ariaAlertText, delayBeforeCoachmarkAnimation = _a.delayBeforeCoachmarkAnimation, styles = _a.styles, theme = _a.theme, className = _a.className, persistentBeak = _a.persistentBeak;
        var _b = this.state, beakLeft = _b.beakLeft, beakTop = _b.beakTop, beakRight = _b.beakRight, beakBottom = _b.beakBottom, isCollapsed = _b.isCollapsed, isBeaconAnimating = _b.isBeaconAnimating, isMeasuring = _b.isMeasuring, entityInnerHostRect = _b.entityInnerHostRect, transformOrigin = _b.transformOrigin, alertText = _b.alertText, isMeasured = _b.isMeasured;
        // Defaulting the main background before passing it to the styles because it is used for `Beak` too.
        var defaultColor = color;
        if (!defaultColor && theme) {
            defaultColor = theme.semanticColors.primaryButtonBackground;
        }
        var classNames = getClassNames(styles, {
            theme: theme,
            beaconColorOne: beaconColorOne,
            beaconColorTwo: beaconColorTwo,
            className: className,
            isCollapsed: isCollapsed,
            isBeaconAnimating: isBeaconAnimating,
            isMeasuring: isMeasuring,
            color: defaultColor,
            transformOrigin: transformOrigin,
            isMeasured: isMeasured,
            entityHostHeight: entityInnerHostRect.height + "px",
            entityHostWidth: entityInnerHostRect.width + "px",
            width: _Coachmark_styles__WEBPACK_IMPORTED_MODULE_7__["COACHMARK_WIDTH"] + "px",
            height: _Coachmark_styles__WEBPACK_IMPORTED_MODULE_7__["COACHMARK_HEIGHT"] + "px",
            delayBeforeCoachmarkAnimation: delayBeforeCoachmarkAnimation + "ms",
        });
        var finalHeight = isCollapsed ? _Coachmark_styles__WEBPACK_IMPORTED_MODULE_7__["COACHMARK_HEIGHT"] : entityInnerHostRect.height;
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_PositioningContainer_index__WEBPACK_IMPORTED_MODULE_4__["PositioningContainer"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ target: target, offsetFromTarget: _Beak_Beak__WEBPACK_IMPORTED_MODULE_5__["BEAK_HEIGHT"], componentRef: this._positioningContainer, finalHeight: finalHeight, onPositioned: this._onPositioned, bounds: this._getBounds() }, positioningContainerProps),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: classNames.root },
                ariaAlertText && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: classNames.ariaContainer, role: "alert", ref: this._ariaAlertContainer, "aria-hidden": !isCollapsed }, alertText)),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: classNames.pulsingBeacon }),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: classNames.translateAnimationContainer, ref: this._translateAnimationContainer },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: classNames.scaleAnimationLayer },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: classNames.rotateAnimationLayer },
                            this._positioningContainer.current && (isCollapsed || persistentBeak) && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Beak_Beak__WEBPACK_IMPORTED_MODULE_5__["Beak"], { left: beakLeft, top: beakTop, right: beakRight, bottom: beakBottom, direction: this._beakDirection, color: defaultColor })),
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: classNames.entityHost, ref: this._entityHost, tabIndex: -1, "data-is-focusable": true, role: "dialog", "aria-labelledby": ariaLabelledBy, "aria-describedby": ariaDescribedBy },
                                isCollapsed && [
                                    ariaLabelledBy && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", { id: ariaLabelledBy, key: 0, className: classNames.ariaContainer }, ariaLabelledByText)),
                                    ariaDescribedBy && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", { id: ariaDescribedBy, key: 1, className: classNames.ariaContainer }, ariaDescribedByText)),
                                ],
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_FocusTrapZone__WEBPACK_IMPORTED_MODULE_8__["FocusTrapZone"], { isClickableOutsideFocusTrap: true, forceFocusInsideTrap: false },
                                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: classNames.entityInnerHost, ref: this._entityInnerHostElement },
                                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: classNames.childrenContainer, ref: this._childrenContainer, "aria-hidden": isCollapsed }, children))))))))));
    };
    CoachmarkBase.prototype.UNSAFE_componentWillReceiveProps = function (newProps) {
        if (this.props.isCollapsed && !newProps.isCollapsed) {
            // The coachmark is about to open
            this._openCoachmark();
        }
    };
    CoachmarkBase.prototype.shouldComponentUpdate = function (newProps, newState) {
        return !Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["shallowCompare"])(newProps, this.props) || !Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["shallowCompare"])(newState, this.state);
    };
    CoachmarkBase.prototype.componentDidUpdate = function (prevProps, prevState) {
        if (prevState.targetAlignment !== this.state.targetAlignment ||
            prevState.targetPosition !== this.state.targetPosition) {
            this._setBeakPosition();
        }
        if (prevProps.preventDismissOnLostFocus !== this.props.preventDismissOnLostFocus) {
            this._addListeners();
        }
    };
    CoachmarkBase.prototype.componentDidMount = function () {
        var _this = this;
        this._async.requestAnimationFrame(function () {
            if (_this._entityInnerHostElement.current &&
                _this.state.entityInnerHostRect.width + _this.state.entityInnerHostRect.width === 0) {
                _this.setState({
                    isMeasuring: false,
                    entityInnerHostRect: {
                        width: _this._entityInnerHostElement.current.offsetWidth,
                        height: _this._entityInnerHostElement.current.offsetHeight,
                    },
                    isMeasured: true,
                });
                _this._setBeakPosition();
                _this.forceUpdate();
            }
            _this._addListeners();
            // We don't want to the user to immediately trigger the Coachmark when it's opened
            _this._async.setTimeout(function () {
                _this._addProximityHandler(_this.props.mouseProximityOffset);
            }, _this.props.delayBeforeMouseOpen);
            // Need to add setTimeout to have narrator read change in alert container
            if (_this.props.ariaAlertText) {
                _this._async.setTimeout(function () {
                    if (_this.props.ariaAlertText && _this._ariaAlertContainer.current) {
                        _this.setState({
                            alertText: _this.props.ariaAlertText,
                        });
                    }
                }, 0);
            }
            if (!_this.props.preventFocusOnMount) {
                _this._async.setTimeout(function () {
                    if (_this._entityHost.current) {
                        _this._entityHost.current.focus();
                    }
                }, 1000);
            }
        });
    };
    CoachmarkBase.prototype.componentWillUnmount = function () {
        this._async.dispose();
        this._events.dispose();
    };
    CoachmarkBase.prototype._addListeners = function () {
        var preventDismissOnLostFocus = this.props.preventDismissOnLostFocus;
        var currentDoc = Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["getDocument"])();
        this._events.off();
        if (currentDoc) {
            this._events.on(currentDoc, 'keydown', this._onKeyDown, true);
            if (!preventDismissOnLostFocus) {
                this._events.on(currentDoc, 'click', this._dismissOnLostFocus, true);
                this._events.on(currentDoc, 'focus', this._dismissOnLostFocus, true);
            }
        }
    };
    CoachmarkBase.prototype._dismissOnLostFocus = function (ev) {
        var clickTarget = ev.target;
        var clickedOutsideCallout = this._translateAnimationContainer.current &&
            !Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["elementContains"])(this._translateAnimationContainer.current, clickTarget);
        var target = this.props.target;
        if (clickedOutsideCallout && clickTarget !== target && !Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["elementContains"])(target, clickTarget)) {
            this.dismiss(ev);
        }
    };
    CoachmarkBase.prototype._getBounds = function () {
        var _a = this.props, isPositionForced = _a.isPositionForced, positioningContainerProps = _a.positioningContainerProps;
        if (isPositionForced) {
            // If directionalHint direction is the top or bottom auto edge, then we want to set the left/right bounds
            // to the window x-axis to have auto positioning work correctly.
            if (positioningContainerProps &&
                (positioningContainerProps.directionalHint === _common_DirectionalHint__WEBPACK_IMPORTED_MODULE_6__["DirectionalHint"].topAutoEdge ||
                    positioningContainerProps.directionalHint === _common_DirectionalHint__WEBPACK_IMPORTED_MODULE_6__["DirectionalHint"].bottomAutoEdge)) {
                return {
                    left: 0,
                    top: -Infinity,
                    bottom: Infinity,
                    right: window.innerWidth,
                    width: window.innerWidth,
                    height: Infinity,
                };
            }
            else {
                return {
                    left: -Infinity,
                    top: -Infinity,
                    bottom: Infinity,
                    right: Infinity,
                    width: Infinity,
                    height: Infinity,
                };
            }
        }
        else {
            return undefined;
        }
    };
    CoachmarkBase.prototype._addProximityHandler = function (mouseProximityOffset) {
        var _this = this;
        if (mouseProximityOffset === void 0) { mouseProximityOffset = 0; }
        /**
         * An array of cached ids returned when setTimeout runs during
         * the window resize event trigger.
         */
        var timeoutIds = [];
        // Take the initial measure out of the initial render to prevent
        // an unnecessary render.
        this._async.setTimeout(function () {
            _this._setTargetElementRect();
            // When the window resizes we want to async
            // get the bounding client rectangle.
            // Every time the event is triggered we want to
            // setTimeout and then clear any previous instances
            // of setTimeout.
            _this._events.on(window, 'resize', function () {
                timeoutIds.forEach(function (value) {
                    clearInterval(value);
                });
                timeoutIds.push(_this._async.setTimeout(function () {
                    _this._setTargetElementRect();
                }, 100));
            });
        }, 10);
        // Every time the document's mouse move is triggered
        // we want to check if inside of an element and
        // set the state with the result.
        this._events.on(document, 'mousemove', function (e) {
            if (_this.state.isCollapsed) {
                var mouseY = e.clientY;
                var mouseX = e.clientX;
                _this._setTargetElementRect();
                var isMouseInProximity = _this._isInsideElement(mouseX, mouseY, mouseProximityOffset);
                if (isMouseInProximity !== _this.state.isMouseInProximity) {
                    _this._openCoachmark();
                }
            }
            if (_this.props.onMouseMove) {
                _this.props.onMouseMove(e);
            }
        });
    };
    CoachmarkBase.prototype._setTargetElementRect = function () {
        if (this._translateAnimationContainer && this._translateAnimationContainer.current) {
            this._targetElementRect = this._translateAnimationContainer.current.getBoundingClientRect();
        }
    };
    CoachmarkBase.prototype._isInsideElement = function (mouseX, mouseY, mouseProximityOffset) {
        if (mouseProximityOffset === void 0) { mouseProximityOffset = 0; }
        return (mouseX > this._targetElementRect.left - mouseProximityOffset &&
            mouseX < this._targetElementRect.left + this._targetElementRect.width + mouseProximityOffset &&
            mouseY > this._targetElementRect.top - mouseProximityOffset &&
            mouseY < this._targetElementRect.top + this._targetElementRect.height + mouseProximityOffset);
    };
    CoachmarkBase.defaultProps = {
        isCollapsed: true,
        mouseProximityOffset: 10,
        delayBeforeMouseOpen: 3600,
        delayBeforeCoachmarkAnimation: 0,
        isPositionForced: true,
        positioningContainerProps: {
            directionalHint: _common_DirectionalHint__WEBPACK_IMPORTED_MODULE_6__["DirectionalHint"].bottomAutoEdge,
        },
    };
    return CoachmarkBase;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));

//# sourceMappingURL=Coachmark.base.js.map

/***/ }),

/***/ "K5ui":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/Coachmark/PositioningContainer/index.js ***!
  \******************************************************************************************************************************************************************************************************************/
/*! exports provided: PositioningContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PositioningContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PositioningContainer */ "SDNy");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PositioningContainer", function() { return _PositioningContainer__WEBPACK_IMPORTED_MODULE_0__["PositioningContainer"]; });


//# sourceMappingURL=index.js.map

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

/***/ "SDNy":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/Coachmark/PositioningContainer/PositioningContainer.js ***!
  \*********************************************************************************************************************************************************************************************************************************/
/*! exports provided: PositioningContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PositioningContainer", function() { return PositioningContainer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _PositioningContainer_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PositioningContainer.styles */ "W/Qh");
/* harmony import */ var _Layer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../Layer */ "YZp6");
/* harmony import */ var _common_DirectionalHint__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../common/DirectionalHint */ "EE7g");
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../Utilities */ "mkpW");
/* harmony import */ var _utilities_positioning__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../utilities/positioning */ "gdZc");
/* harmony import */ var _Styling__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../Styling */ "PL71");
var _a;




// Utilites/Helpers




var OFF_SCREEN_STYLE = { opacity: 0 };
// In order for some of the max height logic to work
// properly we need to set the border.
// The value is abitrary.
var BORDER_WIDTH = 1;
var SLIDE_ANIMATIONS = (_a = {},
    _a[_utilities_positioning__WEBPACK_IMPORTED_MODULE_6__["RectangleEdge"].top] = 'slideUpIn20',
    _a[_utilities_positioning__WEBPACK_IMPORTED_MODULE_6__["RectangleEdge"].bottom] = 'slideDownIn20',
    _a[_utilities_positioning__WEBPACK_IMPORTED_MODULE_6__["RectangleEdge"].left] = 'slideLeftIn20',
    _a[_utilities_positioning__WEBPACK_IMPORTED_MODULE_6__["RectangleEdge"].right] = 'slideRightIn20',
    _a);
var PositioningContainer = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(PositioningContainer, _super);
    function PositioningContainer(props) {
        var _this = _super.call(this, props) || this;
        /**
         * The primary positioned div.
         */
        _this._positionedHost = react__WEBPACK_IMPORTED_MODULE_1__["createRef"]();
        // @TODO rename to reflect the name of this class
        _this._contentHost = react__WEBPACK_IMPORTED_MODULE_1__["createRef"]();
        /**
         * Deprecated, use `onResize` instead.
         * @deprecated Use `onResize` instead.
         */
        _this.dismiss = function (ev) {
            _this.onResize(ev);
        };
        _this.onResize = function (ev) {
            var onDismiss = _this.props.onDismiss;
            if (onDismiss) {
                onDismiss(ev);
            }
            else {
                _this._updateAsyncPosition();
            }
        };
        _this._setInitialFocus = function () {
            if (_this._contentHost.current && _this.props.setInitialFocus && !_this._didSetInitialFocus && _this.state.positions) {
                _this._didSetInitialFocus = true;
                Object(_Utilities__WEBPACK_IMPORTED_MODULE_5__["focusFirstChild"])(_this._contentHost.current);
            }
        };
        _this._onComponentDidMount = function () {
            // This is added so the positioningContainer will dismiss when the window is scrolled
            // but not when something inside the positioningContainer is scrolled. The delay seems
            // to be required to avoid React firing an async focus event in IE from
            // the target changing focus quickly prior to rendering the positioningContainer.
            _this._async.setTimeout(function () {
                _this._events.on(_this._targetWindow, 'scroll', _this._async.throttle(_this._dismissOnScroll, 10), true);
                _this._events.on(_this._targetWindow, 'resize', _this._async.throttle(_this.onResize, 10), true);
                _this._events.on(_this._targetWindow.document.body, 'focus', _this._dismissOnLostFocus, true);
                _this._events.on(_this._targetWindow.document.body, 'click', _this._dismissOnLostFocus, true);
            }, 0);
            if (_this.props.onLayerMounted) {
                _this.props.onLayerMounted();
            }
            _this._updateAsyncPosition();
            _this._setHeightOffsetEveryFrame();
        };
        Object(_Utilities__WEBPACK_IMPORTED_MODULE_5__["initializeComponentRef"])(_this);
        _this._async = new _Utilities__WEBPACK_IMPORTED_MODULE_5__["Async"](_this);
        _this._events = new _Utilities__WEBPACK_IMPORTED_MODULE_5__["EventGroup"](_this);
        _this._didSetInitialFocus = false;
        _this.state = {
            positions: undefined,
            heightOffset: 0,
        };
        _this._positionAttempts = 0;
        return _this;
    }
    PositioningContainer.prototype.UNSAFE_componentWillMount = function () {
        this._setTargetWindowAndElement(this._getTarget());
    };
    PositioningContainer.prototype.componentDidMount = function () {
        this._onComponentDidMount();
    };
    PositioningContainer.prototype.componentDidUpdate = function () {
        this._setInitialFocus();
        this._updateAsyncPosition();
    };
    PositioningContainer.prototype.UNSAFE_componentWillUpdate = function (newProps) {
        // If the target element changed, find the new one. If we are tracking
        // target with class name, always find element because we do not know if
        // fabric has rendered a new element and disposed the old element.
        var newTarget = this._getTarget(newProps);
        var oldTarget = this._getTarget();
        if (newTarget !== oldTarget || typeof newTarget === 'string' || newTarget instanceof String) {
            this._maxHeight = undefined;
            this._setTargetWindowAndElement(newTarget);
        }
        if (newProps.offsetFromTarget !== this.props.offsetFromTarget) {
            this._maxHeight = undefined;
        }
        if (newProps.finalHeight !== this.props.finalHeight) {
            this._setHeightOffsetEveryFrame();
        }
    };
    PositioningContainer.prototype.componentWillUnmount = function () {
        this._async.dispose();
        this._events.dispose();
    };
    PositioningContainer.prototype.render = function () {
        // If there is no target window then we are likely in server side rendering and we should not render anything.
        if (!this._targetWindow) {
            return null;
        }
        var _a = this.props, className = _a.className, positioningContainerWidth = _a.positioningContainerWidth, positioningContainerMaxHeight = _a.positioningContainerMaxHeight, children = _a.children;
        var positions = this.state.positions;
        var styles = Object(_PositioningContainer_styles__WEBPACK_IMPORTED_MODULE_2__["getClassNames"])();
        var directionalClassName = positions && positions.targetEdge ? _Styling__WEBPACK_IMPORTED_MODULE_7__["AnimationClassNames"][SLIDE_ANIMATIONS[positions.targetEdge]] : '';
        var getContentMaxHeight = this._getMaxHeight() + this.state.heightOffset;
        var contentMaxHeight = positioningContainerMaxHeight && positioningContainerMaxHeight > getContentMaxHeight
            ? getContentMaxHeight
            : positioningContainerMaxHeight;
        var content = (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { ref: this._positionedHost, className: Object(_Utilities__WEBPACK_IMPORTED_MODULE_5__["css"])('ms-PositioningContainer', styles.container) },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: Object(_Styling__WEBPACK_IMPORTED_MODULE_7__["mergeStyles"])('ms-PositioningContainer-layerHost', styles.root, className, directionalClassName, !!positioningContainerWidth && { width: positioningContainerWidth }), style: positions ? positions.elementPosition : OFF_SCREEN_STYLE, 
                // Safari and Firefox on Mac OS requires this to back-stop click events so focus remains in the Callout.
                // See https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#Clicking_and_focus
                tabIndex: -1, ref: this._contentHost },
                children,
                // @TODO apply to the content container
                contentMaxHeight)));
        return this.props.doNotLayer ? content : react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Layer__WEBPACK_IMPORTED_MODULE_3__["Layer"], null, content);
    };
    PositioningContainer.prototype._dismissOnScroll = function (ev) {
        var preventDismissOnScroll = this.props.preventDismissOnScroll;
        if (this.state.positions && !preventDismissOnScroll) {
            this._dismissOnLostFocus(ev);
        }
    };
    PositioningContainer.prototype._dismissOnLostFocus = function (ev) {
        var target = ev.target;
        var clickedOutsideCallout = this._positionedHost.current && !Object(_Utilities__WEBPACK_IMPORTED_MODULE_5__["elementContains"])(this._positionedHost.current, target);
        if ((!this._target && clickedOutsideCallout) ||
            (ev.target !== this._targetWindow &&
                clickedOutsideCallout &&
                (this._target.stopPropagation ||
                    !this._target ||
                    (target !== this._target && !Object(_Utilities__WEBPACK_IMPORTED_MODULE_5__["elementContains"])(this._target, target))))) {
            this.onResize(ev);
        }
    };
    PositioningContainer.prototype._updateAsyncPosition = function () {
        var _this = this;
        this._async.requestAnimationFrame(function () { return _this._updatePosition(); });
    };
    PositioningContainer.prototype._updatePosition = function () {
        var positions = this.state.positions;
        var _a = this.props, offsetFromTarget = _a.offsetFromTarget, onPositioned = _a.onPositioned;
        var hostElement = this._positionedHost.current;
        var positioningContainerElement = this._contentHost.current;
        if (hostElement && positioningContainerElement) {
            var currentProps = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.props);
            currentProps.bounds = this._getBounds();
            currentProps.target = this._target;
            if (document.body.contains(currentProps.target)) {
                currentProps.gapSpace = offsetFromTarget;
                var newPositions_1 = Object(_utilities_positioning__WEBPACK_IMPORTED_MODULE_6__["positionElement"])(currentProps, hostElement, positioningContainerElement);
                // Set the new position only when the positions are not exists or one of the new positioningContainer positions
                // are different. The position should not change if the position is within 2 decimal places.
                if ((!positions && newPositions_1) ||
                    (positions && newPositions_1 && !this._arePositionsEqual(positions, newPositions_1) && this._positionAttempts < 5)) {
                    // We should not reposition the positioningContainer more than a few times, if it is then the content is
                    // likely resizing and we should stop trying to reposition to prevent a stack overflow.
                    this._positionAttempts++;
                    this.setState({
                        positions: newPositions_1,
                    }, function () {
                        if (onPositioned) {
                            onPositioned(newPositions_1);
                        }
                    });
                }
                else {
                    this._positionAttempts = 0;
                    if (onPositioned) {
                        onPositioned(newPositions_1);
                    }
                }
            }
            else if (positions !== undefined) {
                this.setState({
                    positions: undefined,
                });
            }
        }
    };
    PositioningContainer.prototype._getBounds = function () {
        if (!this._positioningBounds) {
            var currentBounds = this.props.bounds;
            if (!currentBounds) {
                currentBounds = {
                    top: 0 + this.props.minPagePadding,
                    left: 0 + this.props.minPagePadding,
                    right: this._targetWindow.innerWidth - this.props.minPagePadding,
                    bottom: this._targetWindow.innerHeight - this.props.minPagePadding,
                    width: this._targetWindow.innerWidth - this.props.minPagePadding * 2,
                    height: this._targetWindow.innerHeight - this.props.minPagePadding * 2,
                };
            }
            this._positioningBounds = currentBounds;
        }
        return this._positioningBounds;
    };
    /**
     * Return the maximum height the container can grow to
     * without going out of the specified bounds
     */
    PositioningContainer.prototype._getMaxHeight = function () {
        var _a = this.props, directionalHintFixed = _a.directionalHintFixed, offsetFromTarget = _a.offsetFromTarget, directionalHint = _a.directionalHint;
        if (!this._maxHeight) {
            if (directionalHintFixed && this._target) {
                var gapSpace = offsetFromTarget ? offsetFromTarget : 0;
                this._maxHeight = Object(_utilities_positioning__WEBPACK_IMPORTED_MODULE_6__["getMaxHeight"])(this._target, directionalHint, gapSpace, this._getBounds());
            }
            else {
                this._maxHeight = this._getBounds().height - BORDER_WIDTH * 2;
            }
        }
        return this._maxHeight;
    };
    PositioningContainer.prototype._arePositionsEqual = function (positions, newPosition) {
        return this._comparePositions(positions.elementPosition, newPosition.elementPosition);
    };
    PositioningContainer.prototype._comparePositions = function (oldPositions, newPositions) {
        for (var key in newPositions) {
            if (newPositions.hasOwnProperty(key)) {
                var oldPositionEdge = oldPositions[key];
                var newPositionEdge = newPositions[key];
                if (oldPositionEdge && newPositionEdge) {
                    if (oldPositionEdge.toFixed(2) !== newPositionEdge.toFixed(2)) {
                        return false;
                    }
                }
            }
        }
        return true;
    };
    PositioningContainer.prototype._setTargetWindowAndElement = function (target) {
        var currentElement = this._positionedHost.current;
        if (target) {
            if (typeof target === 'string') {
                var currentDoc = Object(_Utilities__WEBPACK_IMPORTED_MODULE_5__["getDocument"])();
                this._target = currentDoc ? currentDoc.querySelector(target) : null;
                this._targetWindow = Object(_Utilities__WEBPACK_IMPORTED_MODULE_5__["getWindow"])(currentElement);
                // Cast to any prevents error about stopPropagation always existing
            }
            else if (target.stopPropagation) {
                this._targetWindow = Object(_Utilities__WEBPACK_IMPORTED_MODULE_5__["getWindow"])(target.target);
                this._target = target;
            }
            else if (
            // eslint-disable-next-line deprecation/deprecation
            (target.left !== undefined || target.x !== undefined) &&
                // eslint-disable-next-line deprecation/deprecation
                (target.top !== undefined || target.y !== undefined)) {
                this._targetWindow = Object(_Utilities__WEBPACK_IMPORTED_MODULE_5__["getWindow"])(currentElement);
                this._target = target;
            }
            else {
                var targetElement = target;
                this._targetWindow = Object(_Utilities__WEBPACK_IMPORTED_MODULE_5__["getWindow"])(targetElement);
                this._target = target;
            }
        }
        else {
            this._targetWindow = Object(_Utilities__WEBPACK_IMPORTED_MODULE_5__["getWindow"])(currentElement);
        }
    };
    /**
     * Animates the height if finalHeight was given.
     */
    PositioningContainer.prototype._setHeightOffsetEveryFrame = function () {
        var _this = this;
        if (this._contentHost && this.props.finalHeight) {
            this._setHeightOffsetTimer = this._async.requestAnimationFrame(function () {
                if (!_this._contentHost.current) {
                    return;
                }
                var positioningContainerMainElem = _this._contentHost.current.lastChild;
                var cardScrollHeight = positioningContainerMainElem.scrollHeight;
                var cardCurrHeight = positioningContainerMainElem.offsetHeight;
                var scrollDiff = cardScrollHeight - cardCurrHeight;
                _this.setState({
                    heightOffset: _this.state.heightOffset + scrollDiff,
                });
                if (positioningContainerMainElem.offsetHeight < _this.props.finalHeight) {
                    _this._setHeightOffsetEveryFrame();
                }
                else {
                    _this._async.cancelAnimationFrame(_this._setHeightOffsetTimer);
                }
            });
        }
    };
    PositioningContainer.prototype._getTarget = function (props) {
        if (props === void 0) { props = this.props; }
        var target = props.target;
        return target;
    };
    PositioningContainer.defaultProps = {
        preventDismissOnScroll: false,
        offsetFromTarget: 0,
        minPagePadding: 8,
        directionalHint: _common_DirectionalHint__WEBPACK_IMPORTED_MODULE_4__["DirectionalHint"].bottomAutoEdge,
    };
    return PositioningContainer;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));

//# sourceMappingURL=PositioningContainer.js.map

/***/ }),

/***/ "W/Qh":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/Coachmark/PositioningContainer/PositioningContainer.styles.js ***!
  \****************************************************************************************************************************************************************************************************************************************/
/*! exports provided: getClassNames */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getClassNames", function() { return getClassNames; });
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../Utilities */ "mkpW");
/* harmony import */ var _Styling__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../Styling */ "PL71");


var getClassNames = Object(_Utilities__WEBPACK_IMPORTED_MODULE_0__["memoizeFunction"])(function () {
    var _a;
    return Object(_Styling__WEBPACK_IMPORTED_MODULE_1__["mergeStyleSets"])({
        root: [
            {
                position: 'absolute',
                boxSizing: 'border-box',
                border: '1px solid ${}',
                selectors: (_a = {},
                    _a[_Styling__WEBPACK_IMPORTED_MODULE_1__["HighContrastSelector"]] = {
                        border: '1px solid WindowText',
                    },
                    _a),
            },
            Object(_Styling__WEBPACK_IMPORTED_MODULE_1__["focusClear"])(),
        ],
        container: {
            position: 'relative',
        },
        main: {
            backgroundColor: '#ffffff',
            overflowX: 'hidden',
            overflowY: 'hidden',
            position: 'relative',
        },
        overFlowYHidden: {
            overflowY: 'hidden',
        },
    });
});
//# sourceMappingURL=PositioningContainer.styles.js.map

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

/***/ "iDYK":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/Coachmark/Beak/Beak.styles.js ***!
  \********************************************************************************************************************************************************************************************************/
/*! exports provided: getStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStyles", function() { return getStyles; });
function getStyles(props) {
    return {
        root: [
            {
                position: 'absolute',
                boxShadow: 'inherit',
                border: 'none',
                boxSizing: 'border-box',
                transform: props.transform,
                width: props.width,
                height: props.height,
                left: props.left,
                top: props.top,
                right: props.right,
                bottom: props.bottom,
            },
        ],
        beak: {
            fill: props.color,
            display: 'block',
        },
    };
}
//# sourceMappingURL=Beak.styles.js.map

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

/***/ }),

/***/ "yB96":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/Coachmark/Beak/Beak.js ***!
  \*************************************************************************************************************************************************************************************************/
/*! exports provided: BEAK_HEIGHT, BEAK_WIDTH, Beak */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BEAK_HEIGHT", function() { return BEAK_HEIGHT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BEAK_WIDTH", function() { return BEAK_WIDTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Beak", function() { return Beak; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Utilities */ "mkpW");
/* harmony import */ var _Beak_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Beak.styles */ "iDYK");
/* harmony import */ var _utilities_positioning__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../utilities/positioning */ "gdZc");





var BEAK_HEIGHT = 10;
var BEAK_WIDTH = 18;
var Beak = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(Beak, _super);
    function Beak(props) {
        var _this = _super.call(this, props) || this;
        Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["initializeComponentRef"])(_this);
        return _this;
    }
    Beak.prototype.render = function () {
        var _a = this.props, left = _a.left, top = _a.top, bottom = _a.bottom, right = _a.right, color = _a.color, _b = _a.direction, direction = _b === void 0 ? _utilities_positioning__WEBPACK_IMPORTED_MODULE_4__["RectangleEdge"].top : _b;
        var svgHeight;
        var svgWidth;
        if (direction === _utilities_positioning__WEBPACK_IMPORTED_MODULE_4__["RectangleEdge"].top || direction === _utilities_positioning__WEBPACK_IMPORTED_MODULE_4__["RectangleEdge"].bottom) {
            svgHeight = BEAK_HEIGHT;
            svgWidth = BEAK_WIDTH;
        }
        else {
            svgHeight = BEAK_WIDTH;
            svgWidth = BEAK_HEIGHT;
        }
        var pointOne;
        var pointTwo;
        var pointThree;
        var transform;
        switch (direction) {
            case _utilities_positioning__WEBPACK_IMPORTED_MODULE_4__["RectangleEdge"].top:
            default:
                pointOne = BEAK_WIDTH / 2 + ", 0";
                pointTwo = BEAK_WIDTH + ", " + BEAK_HEIGHT;
                pointThree = "0, " + BEAK_HEIGHT;
                transform = 'translateY(-100%)';
                break;
            case _utilities_positioning__WEBPACK_IMPORTED_MODULE_4__["RectangleEdge"].right:
                pointOne = "0, 0";
                pointTwo = BEAK_HEIGHT + ", " + BEAK_HEIGHT;
                pointThree = "0, " + BEAK_WIDTH;
                transform = 'translateX(100%)';
                break;
            case _utilities_positioning__WEBPACK_IMPORTED_MODULE_4__["RectangleEdge"].bottom:
                pointOne = "0, 0";
                pointTwo = BEAK_WIDTH + ", 0";
                pointThree = BEAK_WIDTH / 2 + ", " + BEAK_HEIGHT;
                transform = 'translateY(100%)';
                break;
            case _utilities_positioning__WEBPACK_IMPORTED_MODULE_4__["RectangleEdge"].left:
                pointOne = BEAK_HEIGHT + ", 0";
                pointTwo = "0, " + BEAK_HEIGHT;
                pointThree = BEAK_HEIGHT + ", " + BEAK_WIDTH;
                transform = 'translateX(-100%)';
                break;
        }
        var getClassNames = Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["classNamesFunction"])();
        var classNames = getClassNames(_Beak_styles__WEBPACK_IMPORTED_MODULE_3__["getStyles"], {
            left: left,
            top: top,
            bottom: bottom,
            right: right,
            height: svgHeight + "px",
            width: svgWidth + "px",
            transform: transform,
            color: color,
        });
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: classNames.root, role: "presentation" },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("svg", { height: svgHeight, width: svgWidth, className: classNames.beak },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("polygon", { points: pointOne + ' ' + pointTwo + ' ' + pointThree }))));
    };
    return Beak;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));

//# sourceMappingURL=Beak.js.map

/***/ })

}]);
//# sourceMappingURL=chunk.vendors~shared-react-site-header-title-co~f08d326e_[locale].js.map