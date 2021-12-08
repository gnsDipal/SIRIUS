(window["webpackJsonpf9e737b7_f0df_4597_ba8c_3060f82380db_1_12_1"] = window["webpackJsonpf9e737b7_f0df_4597_ba8c_3060f82380db_1_12_1"] || []).push([["vendors~property-pane-component"],{

/***/ "+eNG":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/KeytipData/useKeytipRef.js ***!
  \*****************************************************************************************************************************************************************************************************/
/*! exports provided: useKeytipRef, setAttribute */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useKeytipRef", function() { return useKeytipRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setAttribute", function() { return setAttribute; });
/* harmony import */ var _utilities_keytips_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utilities/keytips/index */ "GKG/");
/* harmony import */ var _useKeytipData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useKeytipData */ "j6qd");


/**
 * Hook that creates a ref which is used for passing to Keytip target element.
 * The ref will handle setting the attributes needed for Keytip to work.
 */
function useKeytipRef(options) {
    var _a = Object(_useKeytipData__WEBPACK_IMPORTED_MODULE_1__["useKeytipData"])(options), keytipId = _a.keytipId, ariaDescribedBy = _a.ariaDescribedBy;
    var contentRef = function (contentElement) {
        if (!contentElement) {
            return;
        }
        var targetElement = findFirstElement(contentElement, _utilities_keytips_index__WEBPACK_IMPORTED_MODULE_0__["DATAKTP_TARGET"]) || contentElement;
        var executeElement = findFirstElement(contentElement, _utilities_keytips_index__WEBPACK_IMPORTED_MODULE_0__["DATAKTP_EXECUTE_TARGET"]) || targetElement;
        var ariaElement = findFirstElement(contentElement, _utilities_keytips_index__WEBPACK_IMPORTED_MODULE_0__["DATAKTP_ARIA_TARGET"]) || executeElement;
        setAttribute(targetElement, _utilities_keytips_index__WEBPACK_IMPORTED_MODULE_0__["DATAKTP_TARGET"], keytipId);
        setAttribute(executeElement, _utilities_keytips_index__WEBPACK_IMPORTED_MODULE_0__["DATAKTP_EXECUTE_TARGET"], keytipId);
        setAttribute(ariaElement, 'aria-describedby', ariaDescribedBy, true);
    };
    return contentRef;
}
function setAttribute(element, attributeName, attributeValue, append) {
    if (append === void 0) { append = false; }
    if (element && attributeValue) {
        var value = attributeValue;
        if (append) {
            var currentValue = element.getAttribute(attributeName);
            if (currentValue && currentValue.indexOf(attributeValue) === -1) {
                value = currentValue + " " + attributeValue;
            }
        }
        element.setAttribute(attributeName, value);
    }
}
function findFirstElement(rootElement, dataAttribute) {
    return rootElement.querySelector("[" + dataAttribute + "]");
}
//# sourceMappingURL=useKeytipRef.js.map

/***/ }),

/***/ "/0Xw":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/Slider/Slider.styles.js ***!
  \**************************************************************************************************************************************************************************************************/
/*! exports provided: getStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStyles", function() { return getStyles; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Styling__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Styling */ "PL71");
/* harmony import */ var _uifabric_utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @uifabric/utilities */ "P2cQ");
/* harmony import */ var _uifabric_utilities__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_uifabric_utilities__WEBPACK_IMPORTED_MODULE_2__);



var GlobalClassNames = {
    root: 'ms-Slider',
    enabled: 'ms-Slider-enabled',
    disabled: 'ms-Slider-disabled',
    row: 'ms-Slider-row',
    column: 'ms-Slider-column',
    container: 'ms-Slider-container',
    slideBox: 'ms-Slider-slideBox',
    line: 'ms-Slider-line',
    thumb: 'ms-Slider-thumb',
    activeSection: 'ms-Slider-active',
    inactiveSection: 'ms-Slider-inactive',
    valueLabel: 'ms-Slider-value',
    showValue: 'ms-Slider-showValue',
    showTransitions: 'ms-Slider-showTransitions',
    zeroTick: 'ms-Slider-zeroTick',
};
var getStyles = function (props) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
    var className = props.className, titleLabelClassName = props.titleLabelClassName, theme = props.theme, vertical = props.vertical, disabled = props.disabled, showTransitions = props.showTransitions, showValue = props.showValue;
    var semanticColors = theme.semanticColors;
    var classNames = Object(_Styling__WEBPACK_IMPORTED_MODULE_1__["getGlobalClassNames"])(GlobalClassNames, theme);
    /** Tokens:
     *   The word "active" in the token refers to the selected section of the slider
     *   The word "inactive" in the token refers to the unselected section of the slider */
    var pressedActiveSectionColor = semanticColors.inputBackgroundCheckedHovered;
    var hoveredActiveSectionColor = semanticColors.inputBackgroundChecked;
    var hoveredPressedinactiveSectionColor = semanticColors.inputPlaceholderBackgroundChecked;
    var restActiveSectionColor = semanticColors.smallInputBorder;
    var restInactiveSectionColor = semanticColors.disabledBorder;
    var disabledActiveSectionColor = semanticColors.disabledText;
    var disabledInactiveSectionColor = semanticColors.disabledBackground;
    var thumbBackgroundColor = semanticColors.inputBackground;
    var thumbBorderColor = semanticColors.smallInputBorder;
    var thumbDisabledBorderColor = semanticColors.disabledBorder;
    var slideBoxActiveSectionStyles = !disabled && {
        backgroundColor: pressedActiveSectionColor,
        selectors: (_a = {},
            _a[_Styling__WEBPACK_IMPORTED_MODULE_1__["HighContrastSelector"]] = {
                backgroundColor: 'Highlight',
            },
            _a),
    };
    var slideBoxInactiveSectionStyles = !disabled && {
        backgroundColor: hoveredPressedinactiveSectionColor,
        selectors: (_b = {},
            _b[_Styling__WEBPACK_IMPORTED_MODULE_1__["HighContrastSelector"]] = {
                borderColor: 'Highlight',
            },
            _b),
    };
    var slideHoverSectionStyles = !disabled && {
        backgroundColor: hoveredActiveSectionColor,
        selectors: (_c = {},
            _c[_Styling__WEBPACK_IMPORTED_MODULE_1__["HighContrastSelector"]] = {
                backgroundColor: 'Highlight',
            },
            _c),
    };
    var slideBoxActiveThumbStyles = !disabled && {
        border: "2px solid " + pressedActiveSectionColor,
        selectors: (_d = {},
            _d[_Styling__WEBPACK_IMPORTED_MODULE_1__["HighContrastSelector"]] = {
                borderColor: 'Highlight',
            },
            _d),
    };
    var slideBoxActiveZeroTickStyles = !props.disabled && {
        backgroundColor: semanticColors.inputPlaceholderBackgroundChecked,
        selectors: (_e = {},
            _e[_Styling__WEBPACK_IMPORTED_MODULE_1__["HighContrastSelector"]] = {
                backgroundColor: 'Highlight',
            },
            _e),
    };
    return {
        root: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])([
            classNames.root,
            theme.fonts.medium,
            {
                userSelect: 'none',
            },
            vertical && {
                marginRight: 8,
            }
        ], [!disabled ? classNames.enabled : undefined], [disabled ? classNames.disabled : undefined], [!vertical ? classNames.row : undefined], [vertical ? classNames.column : undefined], [
            className,
        ]),
        titleLabel: [
            {
                padding: 0,
            },
            titleLabelClassName,
        ],
        container: [
            classNames.container,
            {
                display: 'flex',
                flexWrap: 'nowrap',
                alignItems: 'center',
            },
            vertical && {
                flexDirection: 'column',
                height: '100%',
                textAlign: 'center',
                margin: '8px 0',
            },
        ],
        slideBox: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])([
            classNames.slideBox,
            Object(_Styling__WEBPACK_IMPORTED_MODULE_1__["getFocusStyle"])(theme),
            {
                background: 'transparent',
                border: 'none',
                flexGrow: 1,
                lineHeight: 28,
                display: 'flex',
                alignItems: 'center',
                selectors: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])((_f = {}, _f[":active ." + classNames.activeSection] = slideBoxActiveSectionStyles, _f[":hover ." + classNames.activeSection] = slideHoverSectionStyles, _f[":active ." + classNames.inactiveSection] = slideBoxInactiveSectionStyles, _f[":hover ." + classNames.inactiveSection] = slideBoxInactiveSectionStyles, _f[":active ." + classNames.thumb] = slideBoxActiveThumbStyles, _f[":hover ." + classNames.thumb] = slideBoxActiveThumbStyles, _f[":active ." + classNames.zeroTick] = slideBoxActiveZeroTickStyles, _f[":hover ." + classNames.zeroTick] = slideBoxActiveZeroTickStyles, _f), Object(_Styling__WEBPACK_IMPORTED_MODULE_1__["getEdgeChromiumNoHighContrastAdjustSelector"])()),
            },
            vertical
                ? {
                    height: '100%',
                    width: 28,
                    padding: '8px 0',
                }
                : {
                    height: 28,
                    width: 'auto',
                    padding: '0 8px',
                }
        ], [showValue ? classNames.showValue : undefined], [showTransitions ? classNames.showTransitions : undefined]),
        thumb: [
            classNames.thumb,
            {
                borderWidth: 2,
                borderStyle: 'solid',
                borderColor: thumbBorderColor,
                borderRadius: 10,
                boxSizing: 'border-box',
                background: thumbBackgroundColor,
                display: 'block',
                width: 16,
                height: 16,
                position: 'absolute',
            },
            vertical
                ? {
                    left: -6,
                    margin: '0 auto',
                    transform: 'translateY(8px)',
                }
                : {
                    top: -6,
                    transform: Object(_uifabric_utilities__WEBPACK_IMPORTED_MODULE_2__["getRTL"])(theme) ? 'translateX(50%)' : 'translateX(-50%)',
                },
            showTransitions && {
                transition: "left " + _Styling__WEBPACK_IMPORTED_MODULE_1__["AnimationVariables"].durationValue3 + " " + _Styling__WEBPACK_IMPORTED_MODULE_1__["AnimationVariables"].easeFunction1,
            },
            disabled && {
                borderColor: thumbDisabledBorderColor,
                selectors: (_g = {},
                    _g[_Styling__WEBPACK_IMPORTED_MODULE_1__["HighContrastSelector"]] = {
                        borderColor: 'GrayText',
                    },
                    _g),
            },
        ],
        line: [
            classNames.line,
            {
                display: 'flex',
                position: 'relative',
            },
            vertical
                ? {
                    height: '100%',
                    width: 4,
                    margin: '0 auto',
                    flexDirection: 'column-reverse',
                }
                : {
                    width: '100%',
                },
        ],
        lineContainer: [
            {
                borderRadius: 4,
                boxSizing: 'border-box',
            },
            vertical
                ? {
                    width: 4,
                    height: '100%',
                }
                : {
                    height: 4,
                    width: '100%',
                },
        ],
        activeSection: [
            classNames.activeSection,
            {
                background: restActiveSectionColor,
                selectors: (_h = {},
                    _h[_Styling__WEBPACK_IMPORTED_MODULE_1__["HighContrastSelector"]] = {
                        backgroundColor: 'WindowText',
                    },
                    _h),
            },
            showTransitions && {
                transition: "width " + _Styling__WEBPACK_IMPORTED_MODULE_1__["AnimationVariables"].durationValue3 + " " + _Styling__WEBPACK_IMPORTED_MODULE_1__["AnimationVariables"].easeFunction1,
            },
            disabled && {
                background: disabledActiveSectionColor,
                selectors: (_j = {},
                    _j[_Styling__WEBPACK_IMPORTED_MODULE_1__["HighContrastSelector"]] = {
                        backgroundColor: 'GrayText',
                        borderColor: 'GrayText',
                    },
                    _j),
            },
        ],
        inactiveSection: [
            classNames.inactiveSection,
            {
                background: restInactiveSectionColor,
                selectors: (_k = {},
                    _k[_Styling__WEBPACK_IMPORTED_MODULE_1__["HighContrastSelector"]] = {
                        border: '1px solid WindowText',
                    },
                    _k),
            },
            showTransitions && {
                transition: "width " + _Styling__WEBPACK_IMPORTED_MODULE_1__["AnimationVariables"].durationValue3 + " " + _Styling__WEBPACK_IMPORTED_MODULE_1__["AnimationVariables"].easeFunction1,
            },
            disabled && {
                background: disabledInactiveSectionColor,
                selectors: (_l = {},
                    _l[_Styling__WEBPACK_IMPORTED_MODULE_1__["HighContrastSelector"]] = {
                        borderColor: 'GrayText',
                    },
                    _l),
            },
        ],
        zeroTick: [
            classNames.zeroTick,
            {
                position: 'absolute',
                background: semanticColors.disabledBorder,
                selectors: (_m = {},
                    _m[_Styling__WEBPACK_IMPORTED_MODULE_1__["HighContrastSelector"]] = {
                        backgroundColor: 'WindowText',
                    },
                    _m),
            },
            props.disabled && {
                background: semanticColors.disabledBackground,
                selectors: (_o = {},
                    _o[_Styling__WEBPACK_IMPORTED_MODULE_1__["HighContrastSelector"]] = {
                        backgroundColor: 'GrayText',
                    },
                    _o),
            },
            props.vertical
                ? {
                    width: '16px',
                    height: '1px',
                    transform: Object(_uifabric_utilities__WEBPACK_IMPORTED_MODULE_2__["getRTL"])(theme) ? 'translateX(6px)' : 'translateX(-6px)',
                }
                : {
                    width: '1px',
                    height: '16px',
                    transform: 'translateY(-6px)',
                },
        ],
        valueLabel: [
            classNames.valueLabel,
            {
                flexShrink: 1,
                width: 30,
                lineHeight: '1',
            },
            vertical
                ? {
                    margin: '0 auto',
                    whiteSpace: 'nowrap',
                    width: 40,
                }
                : {
                    margin: '0 8px',
                    whiteSpace: 'nowrap',
                    width: 40,
                },
        ],
    };
};
//# sourceMappingURL=Slider.styles.js.map

/***/ }),

/***/ "/Djz":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/utilities/selectableOption/index.js ***!
  \***************************************************************************************************************************************************************************************************/
/*! exports provided: getAllSelectedOptions, SelectableOptionMenuItemType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SelectableOption__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SelectableOption */ "Z+WF");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getAllSelectedOptions", function() { return _SelectableOption__WEBPACK_IMPORTED_MODULE_0__["getAllSelectedOptions"]; });

/* harmony import */ var _SelectableOption_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SelectableOption.types */ "T0Qu");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SelectableOptionMenuItemType", function() { return _SelectableOption_types__WEBPACK_IMPORTED_MODULE_1__["SelectableOptionMenuItemType"]; });



//# sourceMappingURL=index.js.map

/***/ }),

/***/ "0ve4":
/*!************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@uifabric/react-hooks@7.13.9_c129be21209ec549b9ba61bf76d54bcc/node_modules/@uifabric/react-hooks/lib/useAsync.js ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: useAsync */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useAsync", function() { return useAsync; });
/* harmony import */ var _uifabric_utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @uifabric/utilities */ "P2cQ");
/* harmony import */ var _uifabric_utilities__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_uifabric_utilities__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _useConst__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useConst */ "SKm6");



/**
 * Hook to provide an Async instance that is automatically cleaned up on dismount.
 */
function useAsync() {
    var async = Object(_useConst__WEBPACK_IMPORTED_MODULE_2__["useConst"])(function () { return new _uifabric_utilities__WEBPACK_IMPORTED_MODULE_0__["Async"](); });
    // Function that returns a function in order to dispose the async instance on unmount
    react__WEBPACK_IMPORTED_MODULE_1__["useEffect"](function () { return function () { return async.dispose(); }; }, [async]);
    return async;
}
//# sourceMappingURL=useAsync.js.map

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

/***/ "14YZ":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/Toggle/Toggle.styles.js ***!
  \**************************************************************************************************************************************************************************************************/
/*! exports provided: getStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStyles", function() { return getStyles; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Styling__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Styling */ "PL71");


var DEFAULT_PILL_WIDTH = 40;
var DEFAULT_PILL_HEIGHT = 20;
var DEFAULT_THUMB_SIZE = 12;
var getStyles = function (props) {
    var _a, _b, _c, _d, _e, _f, _g;
    var theme = props.theme, className = props.className, disabled = props.disabled, checked = props.checked, inlineLabel = props.inlineLabel, onOffMissing = props.onOffMissing;
    var semanticColors = theme.semanticColors, palette = theme.palette;
    // Tokens
    var pillUncheckedBackground = semanticColors.bodyBackground;
    var pillCheckedBackground = semanticColors.inputBackgroundChecked;
    var pillCheckedHoveredBackground = semanticColors.inputBackgroundCheckedHovered;
    var thumbUncheckedHoveredBackground = palette.neutralDark;
    var pillCheckedDisabledBackground = semanticColors.disabledBodySubtext;
    var thumbBackground = semanticColors.smallInputBorder;
    var thumbCheckedBackground = semanticColors.inputForegroundChecked;
    var thumbDisabledBackground = semanticColors.disabledBodySubtext;
    var thumbCheckedDisabledBackground = semanticColors.disabledBackground;
    var pillBorderColor = semanticColors.smallInputBorder;
    var pillBorderHoveredColor = semanticColors.inputBorderHovered;
    var pillBorderDisabledColor = semanticColors.disabledBodySubtext;
    var textDisabledColor = semanticColors.disabledText;
    return {
        root: [
            'ms-Toggle',
            checked && 'is-checked',
            !disabled && 'is-enabled',
            disabled && 'is-disabled',
            theme.fonts.medium,
            {
                marginBottom: '8px',
            },
            inlineLabel && {
                display: 'flex',
                alignItems: 'center',
            },
            className,
        ],
        label: [
            'ms-Toggle-label',
            { display: 'inline-block' },
            disabled && {
                color: textDisabledColor,
                selectors: (_a = {},
                    _a[_Styling__WEBPACK_IMPORTED_MODULE_1__["HighContrastSelector"]] = {
                        color: 'GrayText',
                    },
                    _a),
            },
            inlineLabel &&
                !onOffMissing && {
                marginRight: 16,
            },
            onOffMissing &&
                inlineLabel && {
                order: 1,
                marginLeft: 16,
            },
            inlineLabel && { wordBreak: 'break-all' },
        ],
        container: [
            'ms-Toggle-innerContainer',
            {
                display: 'flex',
                position: 'relative',
            },
        ],
        pill: [
            'ms-Toggle-background',
            Object(_Styling__WEBPACK_IMPORTED_MODULE_1__["getFocusStyle"])(theme, { inset: -3 }),
            {
                fontSize: '20px',
                boxSizing: 'border-box',
                width: DEFAULT_PILL_WIDTH,
                height: DEFAULT_PILL_HEIGHT,
                borderRadius: DEFAULT_PILL_HEIGHT / 2,
                transition: 'all 0.1s ease',
                border: "1px solid " + pillBorderColor,
                background: pillUncheckedBackground,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                padding: '0 3px',
            },
            !disabled && [
                !checked && {
                    selectors: {
                        ':hover': [
                            {
                                borderColor: pillBorderHoveredColor,
                            },
                        ],
                        ':hover .ms-Toggle-thumb': [
                            {
                                backgroundColor: thumbUncheckedHoveredBackground,
                                selectors: (_b = {},
                                    _b[_Styling__WEBPACK_IMPORTED_MODULE_1__["HighContrastSelector"]] = {
                                        borderColor: 'Highlight',
                                    },
                                    _b),
                            },
                        ],
                    },
                },
                checked && [
                    {
                        background: pillCheckedBackground,
                        borderColor: 'transparent',
                        justifyContent: 'flex-end',
                    },
                    {
                        selectors: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])((_c = { ':hover': [
                                    {
                                        backgroundColor: pillCheckedHoveredBackground,
                                        borderColor: 'transparent',
                                        selectors: (_d = {},
                                            _d[_Styling__WEBPACK_IMPORTED_MODULE_1__["HighContrastSelector"]] = {
                                                backgroundColor: 'Highlight',
                                            },
                                            _d),
                                    },
                                ] }, _c[_Styling__WEBPACK_IMPORTED_MODULE_1__["HighContrastSelector"]] = {
                            backgroundColor: 'Highlight',
                        }, _c), Object(_Styling__WEBPACK_IMPORTED_MODULE_1__["getEdgeChromiumNoHighContrastAdjustSelector"])()),
                    },
                ],
            ],
            disabled && [
                {
                    cursor: 'default',
                },
                !checked && [
                    {
                        borderColor: pillBorderDisabledColor,
                    },
                ],
                checked && [
                    {
                        backgroundColor: pillCheckedDisabledBackground,
                        borderColor: 'transparent',
                        justifyContent: 'flex-end',
                    },
                ],
            ],
            !disabled && {
                selectors: {
                    '&:hover': {
                        selectors: (_e = {},
                            _e[_Styling__WEBPACK_IMPORTED_MODULE_1__["HighContrastSelector"]] = {
                                borderColor: 'Highlight',
                            },
                            _e),
                    },
                },
            },
        ],
        thumb: [
            'ms-Toggle-thumb',
            {
                display: 'block',
                width: DEFAULT_THUMB_SIZE,
                height: DEFAULT_THUMB_SIZE,
                borderRadius: '50%',
                transition: 'all 0.1s ease',
                backgroundColor: thumbBackground,
                /* Border is added to handle high contrast mode for Firefox */
                borderColor: 'transparent',
                borderWidth: DEFAULT_THUMB_SIZE / 2,
                borderStyle: 'solid',
                boxSizing: 'border-box',
            },
            !disabled &&
                checked && [
                {
                    backgroundColor: thumbCheckedBackground,
                    selectors: (_f = {},
                        _f[_Styling__WEBPACK_IMPORTED_MODULE_1__["HighContrastSelector"]] = {
                            backgroundColor: 'Window',
                            borderColor: 'Window',
                        },
                        _f),
                },
            ],
            disabled && [
                !checked && [
                    {
                        backgroundColor: thumbDisabledBackground,
                    },
                ],
                checked && [
                    {
                        backgroundColor: thumbCheckedDisabledBackground,
                    },
                ],
            ],
        ],
        text: [
            'ms-Toggle-stateText',
            {
                selectors: {
                    // Workaround: make rules more specific than Label rules.
                    '&&': {
                        padding: '0',
                        margin: '0 8px',
                        userSelect: 'none',
                        fontWeight: _Styling__WEBPACK_IMPORTED_MODULE_1__["FontWeights"].regular,
                    },
                },
            },
            disabled && {
                selectors: {
                    '&&': {
                        color: textDisabledColor,
                        selectors: (_g = {},
                            _g[_Styling__WEBPACK_IMPORTED_MODULE_1__["HighContrastSelector"]] = {
                                color: 'GrayText',
                            },
                            _g),
                    },
                },
            },
        ],
    };
};
//# sourceMappingURL=Toggle.styles.js.map

/***/ }),

/***/ "33JT":
/*!***********************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@uifabric/react-hooks@7.13.9_c129be21209ec549b9ba61bf76d54bcc/node_modules/@uifabric/react-hooks/lib/version.js ***!
  \***********************************************************************************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _uifabric_set_version__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @uifabric/set-version */ "Eyzw");
// Do not modify this file; it is generated as part of publish.
// The checked in version is a placeholder only and will not be updated.

Object(_uifabric_set_version__WEBPACK_IMPORTED_MODULE_0__["setVersion"])('@uifabric/react-hooks', '7.13.8');
//# sourceMappingURL=version.js.map

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

/***/ "4tyD":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/Dropdown/utilities/DropdownSizePosCache.js ***!
  \*********************************************************************************************************************************************************************************************************************/
/*! exports provided: DropdownSizePosCache */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropdownSizePosCache", function() { return DropdownSizePosCache; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Dropdown_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Dropdown.types */ "51rc");


/**
 * A utility class to cache size and position in cache.
 *
 * Dropdown options has non-selectable display types. It is therefore not cheap to determine
 * the total number of actual selectable options as well as the position an option is in the
 * list of options - O(n) cost for each lookup.
 *
 * Given that we potentially have to make this determination on every single render pass, this
 * cache should provide a little bit of relief.
 */
var DropdownSizePosCache = /** @class */ (function () {
    function DropdownSizePosCache() {
        this._size = 0;
    }
    /**
     * Invalidates the cache and recalculate the size of selectable options.
     */
    DropdownSizePosCache.prototype.updateOptions = function (options) {
        var displayOnlyOptionsCache = [];
        var size = 0;
        for (var i = 0; i < options.length; i++) {
            if (options[i].itemType === _Dropdown_types__WEBPACK_IMPORTED_MODULE_1__["DropdownMenuItemType"].Divider || options[i].itemType === _Dropdown_types__WEBPACK_IMPORTED_MODULE_1__["DropdownMenuItemType"].Header) {
                displayOnlyOptionsCache.push(i);
            }
            else if (!options[i].hidden) {
                size++;
            }
        }
        this._size = size;
        this._displayOnlyOptionsCache = displayOnlyOptionsCache;
        this._cachedOptions = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(options);
    };
    Object.defineProperty(DropdownSizePosCache.prototype, "optionSetSize", {
        /**
         * The size of all the selectable options.
         */
        get: function () {
            return this._size;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DropdownSizePosCache.prototype, "cachedOptions", {
        /**
         * The chached options array.
         */
        get: function () {
            return this._cachedOptions;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Returns the position of this option element relative to the full set of selectable option elements.
     * Note: the first selectable element is position 1 in the set.
     * @param index The raw index of the option element.
     */
    DropdownSizePosCache.prototype.positionInSet = function (index) {
        if (index === undefined) {
            return undefined;
        }
        // we could possibly memoize this too but this should be good enough, most of the time (the expectation is that
        // when you have a lot of options, the selectable options will heavily dominate over the non-selectable options.
        var offset = 0;
        while (index > this._displayOnlyOptionsCache[offset]) {
            offset++;
        }
        if (this._displayOnlyOptionsCache[offset] === index) {
            throw new Error("Unexpected: Option at index " + index + " is not a selectable element.");
        }
        return index - offset + 1;
    };
    return DropdownSizePosCache;
}());

//# sourceMappingURL=DropdownSizePosCache.js.map

/***/ }),

/***/ "4zVO":
/*!******************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/Slider/index.js ***!
  \******************************************************************************************************************************************************************************************/
/*! exports provided: Slider, ONKEYDOWN_TIMEOUT_DURATION, SliderBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Slider */ "ec2d");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Slider", function() { return _Slider__WEBPACK_IMPORTED_MODULE_0__["Slider"]; });

/* harmony import */ var _Slider_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Slider.base */ "XefD");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ONKEYDOWN_TIMEOUT_DURATION", function() { return _Slider_base__WEBPACK_IMPORTED_MODULE_1__["ONKEYDOWN_TIMEOUT_DURATION"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SliderBase", function() { return _Slider_base__WEBPACK_IMPORTED_MODULE_1__["SliderBase"]; });



//# sourceMappingURL=index.js.map

/***/ }),

/***/ "51rc":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/Dropdown/Dropdown.types.js ***!
  \*****************************************************************************************************************************************************************************************************/
/*! exports provided: DropdownMenuItemType, ResponsiveMode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utilities_decorators_withResponsiveMode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utilities/decorators/withResponsiveMode */ "5qgq");
/* harmony import */ var _utilities_decorators_withResponsiveMode__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_utilities_decorators_withResponsiveMode__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ResponsiveMode", function() { return _utilities_decorators_withResponsiveMode__WEBPACK_IMPORTED_MODULE_0__["ResponsiveMode"]; });

/* harmony import */ var _utilities_selectableOption_SelectableOption_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utilities/selectableOption/SelectableOption.types */ "T0Qu");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DropdownMenuItemType", function() { return _utilities_selectableOption_SelectableOption_types__WEBPACK_IMPORTED_MODULE_1__["SelectableOptionMenuItemType"]; });



 // Exported because the type is an optional prop and not exported otherwise.
//# sourceMappingURL=Dropdown.types.js.map

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

/***/ "5GBt":
/*!*************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@uifabric/react-hooks@7.13.9_c129be21209ec549b9ba61bf76d54bcc/node_modules/@uifabric/react-hooks/lib/useTarget.js ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: useTarget */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useTarget", function() { return useTarget; });
/* harmony import */ var _uifabric_utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @uifabric/utilities */ "P2cQ");
/* harmony import */ var _uifabric_utilities__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_uifabric_utilities__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fluentui_react_window_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fluentui/react-window-provider */ "uuEG");



/**
 * Hook to calculate and cache the target element specified by the given target attribute,
 * as well as the target element's (or host element's) parent window
 * @param target- Target selector passed to the component as a property, describing the element that
 * the callout should target
 * @param hostElement- The callout's host element, used for determining the parent window.
 */
function useTarget(target, hostElement) {
    var _a;
    var previousTargetProp = react__WEBPACK_IMPORTED_MODULE_1__["useRef"]();
    var targetRef = react__WEBPACK_IMPORTED_MODULE_1__["useRef"](null);
    /**
     * Stores an instance of Window, used to check
     * for server side rendering and if focus was lost.
     */
    var targetWindow = Object(_fluentui_react_window_provider__WEBPACK_IMPORTED_MODULE_2__["useWindow"])();
    // If the target element changed, find the new one. If we are tracking
    // target with class name, always find element because we do not know if
    // fabric has rendered a new element and disposed the old element.
    if (!target || target !== previousTargetProp.current || typeof target === 'string') {
        var currentElement = (_a = hostElement) === null || _a === void 0 ? void 0 : _a.current;
        if (target) {
            if (typeof target === 'string') {
                var currentDoc = Object(_uifabric_utilities__WEBPACK_IMPORTED_MODULE_0__["getDocument"])(currentElement);
                targetRef.current = currentDoc ? currentDoc.querySelector(target) : null;
            }
            else if ('stopPropagation' in target) {
                targetRef.current = target;
            }
            else if ('getBoundingClientRect' in target) {
                targetRef.current = target;
            }
            else if ('current' in target) {
                targetRef.current = target.current;
            }
            else {
                targetRef.current = target;
            }
        }
        previousTargetProp.current = target;
    }
    return [targetRef, targetWindow];
}
//# sourceMappingURL=useTarget.js.map

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

/***/ "5v4J":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/utilities/positioning/index.js ***!
  \**********************************************************************************************************************************************************************************************/
/*! exports provided: getBoundsFromTargetWindow, getMaxHeight, getOppositeEdge, positionCallout, positionCard, positionElement, RectangleEdge, Position */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _positioning__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./positioning */ "idPz");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getBoundsFromTargetWindow", function() { return _positioning__WEBPACK_IMPORTED_MODULE_0__["getBoundsFromTargetWindow"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getMaxHeight", function() { return _positioning__WEBPACK_IMPORTED_MODULE_0__["getMaxHeight"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getOppositeEdge", function() { return _positioning__WEBPACK_IMPORTED_MODULE_0__["getOppositeEdge"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "positionCallout", function() { return _positioning__WEBPACK_IMPORTED_MODULE_0__["positionCallout"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "positionCard", function() { return _positioning__WEBPACK_IMPORTED_MODULE_0__["positionCard"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "positionElement", function() { return _positioning__WEBPACK_IMPORTED_MODULE_0__["positionElement"]; });

/* harmony import */ var _positioning_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./positioning.types */ "ceOo");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RectangleEdge", function() { return _positioning_types__WEBPACK_IMPORTED_MODULE_1__["RectangleEdge"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Position", function() { return _positioning_types__WEBPACK_IMPORTED_MODULE_1__["Position"]; });



//# sourceMappingURL=index.js.map

/***/ }),

/***/ "6bbY":
/*!********************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/Checkbox/index.js ***!
  \********************************************************************************************************************************************************************************************/
/*! exports provided: Checkbox, CheckboxBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Checkbox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Checkbox */ "u2nG");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Checkbox", function() { return _Checkbox__WEBPACK_IMPORTED_MODULE_0__["Checkbox"]; });

/* harmony import */ var _Checkbox_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Checkbox.base */ "ElRa");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CheckboxBase", function() { return _Checkbox_base__WEBPACK_IMPORTED_MODULE_1__["CheckboxBase"]; });



//# sourceMappingURL=index.js.map

/***/ }),

/***/ "7OcI":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/utilities/keytips/IKeytipTransitionKey.js ***!
  \*********************************************************************************************************************************************************************************************************/
/*! exports provided: transitionKeysAreEqual, transitionKeysContain */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transitionKeysAreEqual", function() { return transitionKeysAreEqual; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transitionKeysContain", function() { return transitionKeysContain; });
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Utilities */ "mkpW");

/**
 * Tests for equality between two IKeytipTransitionKeys.
 *
 * @param key1 - First IKeytipTransitionKey.
 * @param key2 - Second IKeytipTransitionKey.
 * @returns T/F if the transition keys are equal.
 */
function transitionKeysAreEqual(key1, key2) {
    if (key1.key !== key2.key) {
        return false;
    }
    var mod1 = key1.modifierKeys;
    var mod2 = key2.modifierKeys;
    if ((!mod1 && mod2) || (mod1 && !mod2)) {
        // Not equal if one modifier is defined and the other isn't
        return false;
    }
    if (mod1 && mod2) {
        if (mod1.length !== mod2.length) {
            return false;
        }
        // Sort both arrays
        mod1 = mod1.sort();
        mod2 = mod2.sort();
        for (var i = 0; i < mod1.length; i++) {
            if (mod1[i] !== mod2[i]) {
                return false;
            }
        }
    }
    return true;
}
/**
 * Tests if 'key' is present in 'keys'.
 *
 * @param keys - Array of IKeytipTransitionKey.
 * @param key - IKeytipTransitionKey to find in 'keys'.
 * @returns T/F if 'keys' contains 'key'.
 */
function transitionKeysContain(keys, key) {
    return !!Object(_Utilities__WEBPACK_IMPORTED_MODULE_0__["find"])(keys, function (transitionKey) {
        return transitionKeysAreEqual(transitionKey, key);
    });
}
//# sourceMappingURL=IKeytipTransitionKey.js.map

/***/ }),

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

/***/ "Ao4p":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/Layer/Layer.base.js ***!
  \**********************************************************************************************************************************************************************************************/
/*! exports provided: LayerBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayerBase", function() { return LayerBase; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "faye");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Fabric__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Fabric */ "OBNh");
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Utilities */ "mkpW");
/* harmony import */ var _Layer_notification__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Layer.notification */ "V7Tt");






var getClassNames = Object(_Utilities__WEBPACK_IMPORTED_MODULE_4__["classNamesFunction"])();
var LayerBase = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(LayerBase, _super);
    function LayerBase(props) {
        var _this = _super.call(this, props) || this;
        _this._rootRef = react__WEBPACK_IMPORTED_MODULE_1__["createRef"]();
        _this._createLayerElement = function () {
            var hostId = _this.props.hostId;
            var doc = Object(_Utilities__WEBPACK_IMPORTED_MODULE_4__["getDocument"])(_this._rootRef.current);
            var host = _this._getHost();
            if (!doc || !host) {
                return;
            }
            // If one was already existing, remove.
            _this._removeLayerElement();
            var layerElement = doc.createElement('div');
            var classNames = _this._getClassNames();
            layerElement.className = classNames.root;
            Object(_Utilities__WEBPACK_IMPORTED_MODULE_4__["setPortalAttribute"])(layerElement);
            Object(_Utilities__WEBPACK_IMPORTED_MODULE_4__["setVirtualParent"])(layerElement, _this._rootRef.current);
            _this.props.insertFirst ? host.insertBefore(layerElement, host.firstChild) : host.appendChild(layerElement);
            _this.setState({
                hostId: hostId,
                layerElement: layerElement,
            }, function () {
                // eslint-disable-next-line deprecation/deprecation
                var _a = _this.props, onLayerDidMount = _a.onLayerDidMount, onLayerMounted = _a.onLayerMounted;
                if (onLayerMounted) {
                    onLayerMounted();
                }
                if (onLayerDidMount) {
                    onLayerDidMount();
                }
            });
        };
        _this.state = {};
        if (true) {
            Object(_Utilities__WEBPACK_IMPORTED_MODULE_4__["warnDeprecations"])('Layer', props, {
                onLayerMounted: 'onLayerDidMount',
            });
        }
        return _this;
    }
    LayerBase.prototype.componentDidMount = function () {
        var hostId = this.props.hostId;
        this._createLayerElement();
        if (hostId) {
            Object(_Layer_notification__WEBPACK_IMPORTED_MODULE_5__["registerLayer"])(hostId, this._createLayerElement);
        }
    };
    LayerBase.prototype.render = function () {
        var layerElement = this.state.layerElement;
        var classNames = this._getClassNames();
        var eventBubblingEnabled = this.props.eventBubblingEnabled;
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", { className: "ms-layer", ref: this._rootRef }, layerElement &&
            react_dom__WEBPACK_IMPORTED_MODULE_2__["createPortal"](react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Fabric__WEBPACK_IMPORTED_MODULE_3__["Fabric"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, (!eventBubblingEnabled && _getFilteredEvents()), { className: classNames.content }), this.props.children), layerElement)));
    };
    LayerBase.prototype.componentDidUpdate = function () {
        if (this.props.hostId !== this.state.hostId) {
            this._createLayerElement();
        }
    };
    LayerBase.prototype.componentWillUnmount = function () {
        var hostId = this.props.hostId;
        this._removeLayerElement();
        if (hostId) {
            Object(_Layer_notification__WEBPACK_IMPORTED_MODULE_5__["unregisterLayer"])(hostId, this._createLayerElement);
        }
    };
    LayerBase.prototype._removeLayerElement = function () {
        var onLayerWillUnmount = this.props.onLayerWillUnmount;
        var layerElement = this.state.layerElement;
        if (layerElement) {
            Object(_Utilities__WEBPACK_IMPORTED_MODULE_4__["setVirtualParent"])(layerElement, null);
        }
        if (onLayerWillUnmount) {
            onLayerWillUnmount();
        }
        if (layerElement && layerElement.parentNode) {
            var parentNode = layerElement.parentNode;
            if (parentNode) {
                parentNode.removeChild(layerElement);
            }
        }
    };
    LayerBase.prototype._getClassNames = function () {
        var _a = this.props, className = _a.className, styles = _a.styles, theme = _a.theme;
        var classNames = getClassNames(styles, {
            theme: theme,
            className: className,
            isNotHost: !this.props.hostId,
        });
        return classNames;
    };
    LayerBase.prototype._getHost = function () {
        var hostId = this.props.hostId;
        var doc = Object(_Utilities__WEBPACK_IMPORTED_MODULE_4__["getDocument"])(this._rootRef.current);
        if (!doc) {
            return undefined;
        }
        if (hostId) {
            return doc.getElementById(hostId);
        }
        else {
            var defaultHostSelector = Object(_Layer_notification__WEBPACK_IMPORTED_MODULE_5__["getDefaultTarget"])();
            return defaultHostSelector ? doc.querySelector(defaultHostSelector) : doc.body;
        }
    };
    LayerBase.defaultProps = {
        onLayerDidMount: function () { return undefined; },
        onLayerWillUnmount: function () { return undefined; },
    };
    LayerBase = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_Utilities__WEBPACK_IMPORTED_MODULE_4__["customizable"])('Layer', ['theme', 'hostId'])
    ], LayerBase);
    return LayerBase;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));

var _onFilterEvent = function (ev) {
    // We should just be able to check ev.bubble here and only stop events that are bubbling up. However, even though
    // mouseenter and mouseleave do NOT bubble up, they are showing up as bubbling. Therefore we stop events based on
    // event name rather than ev.bubble.
    if (ev.eventPhase === Event.BUBBLING_PHASE &&
        ev.type !== 'mouseenter' &&
        ev.type !== 'mouseleave' &&
        ev.type !== 'touchstart' &&
        ev.type !== 'touchend') {
        ev.stopPropagation();
    }
};
var _filteredEventProps;
function _getFilteredEvents() {
    if (!_filteredEventProps) {
        _filteredEventProps = {};
        [
            'onClick',
            'onContextMenu',
            'onDoubleClick',
            'onDrag',
            'onDragEnd',
            'onDragEnter',
            'onDragExit',
            'onDragLeave',
            'onDragOver',
            'onDragStart',
            'onDrop',
            'onMouseDown',
            'onMouseEnter',
            'onMouseLeave',
            'onMouseMove',
            'onMouseOver',
            'onMouseOut',
            'onMouseUp',
            'onTouchMove',
            'onTouchStart',
            'onTouchCancel',
            'onTouchEnd',
            'onKeyDown',
            'onKeyPress',
            'onKeyUp',
            'onFocus',
            'onBlur',
            'onChange',
            'onInput',
            'onInvalid',
            'onSubmit',
        ].forEach(function (name) { return (_filteredEventProps[name] = _onFilterEvent); });
    }
    return _filteredEventProps;
}
//# sourceMappingURL=Layer.base.js.map

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

/***/ "D86n":
/*!*************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/Slider.js ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: Slider, ONKEYDOWN_TIMEOUT_DURATION, SliderBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Slider_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Slider/index */ "4zVO");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Slider", function() { return _components_Slider_index__WEBPACK_IMPORTED_MODULE_0__["Slider"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ONKEYDOWN_TIMEOUT_DURATION", function() { return _components_Slider_index__WEBPACK_IMPORTED_MODULE_0__["ONKEYDOWN_TIMEOUT_DURATION"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SliderBase", function() { return _components_Slider_index__WEBPACK_IMPORTED_MODULE_0__["SliderBase"]; });


//# sourceMappingURL=Slider.js.map

/***/ }),

/***/ "DA5T":
/*!***************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@uifabric/react-hooks@7.13.9_c129be21209ec549b9ba61bf76d54bcc/node_modules/@uifabric/react-hooks/lib/useWarnings.js ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: useWarnings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useWarnings", function() { return useWarnings; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _uifabric_utilities_lib_warn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @uifabric/utilities/lib/warn */ "k11K");
/* harmony import */ var _uifabric_utilities_lib_warn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_uifabric_utilities_lib_warn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _usePrevious__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./usePrevious */ "aBU9");
/* harmony import */ var _useConst__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./useConst */ "SKm6");





var warningId = 0;
/**
 * Only in development mode, display console warnings when certain conditions are met.
 * Note that all warnings except `controlledUsage` will only be shown on first render
 * (new `controlledUsage` warnings may be shown later due to prop changes).
 */
function useWarnings(options) {
    if (true) {
        var name_1 = options.name, props = options.props, _a = options.other, other = _a === void 0 ? [] : _a, conditionallyRequired = options.conditionallyRequired, deprecations = options.deprecations, mutuallyExclusive = options.mutuallyExclusive, controlledUsage = options.controlledUsage;
        /* eslint-disable react-hooks/rules-of-hooks -- build-time conditional */
        var hasWarnedRef = react__WEBPACK_IMPORTED_MODULE_1__["useRef"](false);
        var componentId = Object(_useConst__WEBPACK_IMPORTED_MODULE_4__["useConst"])(function () { return "useWarnings_" + warningId++; });
        var oldProps = Object(_usePrevious__WEBPACK_IMPORTED_MODULE_3__["usePrevious"])(props);
        /* eslint-enable react-hooks/rules-of-hooks */
        // Warn synchronously (not in useEffect) on first render to make debugging easier.
        if (!hasWarnedRef.current) {
            hasWarnedRef.current = true;
            for (var _i = 0, other_1 = other; _i < other_1.length; _i++) {
                var warning = other_1[_i];
                Object(_uifabric_utilities_lib_warn__WEBPACK_IMPORTED_MODULE_2__["warn"])(warning);
            }
            if (conditionallyRequired) {
                for (var _b = 0, conditionallyRequired_1 = conditionallyRequired; _b < conditionallyRequired_1.length; _b++) {
                    var req = conditionallyRequired_1[_b];
                    Object(_uifabric_utilities_lib_warn__WEBPACK_IMPORTED_MODULE_2__["warnConditionallyRequiredProps"])(name_1, props, req.requiredProps, req.conditionalPropName, req.condition);
                }
            }
            deprecations && Object(_uifabric_utilities_lib_warn__WEBPACK_IMPORTED_MODULE_2__["warnDeprecations"])(name_1, props, deprecations);
            mutuallyExclusive && Object(_uifabric_utilities_lib_warn__WEBPACK_IMPORTED_MODULE_2__["warnMutuallyExclusive"])(name_1, props, mutuallyExclusive);
        }
        // Controlled usage warnings may be displayed on either first or subsequent renders due to
        // prop changes. Note that it's safe to run this synchronously (not in useEffect) even in
        // concurrent mode because `warnControlledUsage` internally tracks which warnings have been
        // displayed for each component instance (so nothing will be displayed twice).
        controlledUsage && Object(_uifabric_utilities_lib_warn__WEBPACK_IMPORTED_MODULE_2__["warnControlledUsage"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, controlledUsage), { componentId: componentId, props: props, componentName: name_1, oldProps: oldProps }));
    }
}
//# sourceMappingURL=useWarnings.js.map

/***/ }),

/***/ "ED3/":
/*!******************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@uifabric/react-hooks@7.13.9_c129be21209ec549b9ba61bf76d54bcc/node_modules/@uifabric/react-hooks/lib/useSetInterval.js ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: useSetInterval */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useSetInterval", function() { return useSetInterval; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useConst__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useConst */ "SKm6");


/**
 *  Returns a wrapper function for `setInterval` which automatically handles disposal.
 */
var useSetInterval = function () {
    var intervalIds = Object(_useConst__WEBPACK_IMPORTED_MODULE_1__["useConst"])({});
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](function () { return function () {
        for (var _i = 0, _a = Object.keys(intervalIds); _i < _a.length; _i++) {
            var id = _a[_i];
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            clearInterval(id);
        }
    }; }, 
    // useConst ensures this will never change, but react-hooks/exhaustive-deps doesn't know that
    [intervalIds]);
    return Object(_useConst__WEBPACK_IMPORTED_MODULE_1__["useConst"])({
        setInterval: function (func, duration) {
            var id = setInterval(func, duration);
            intervalIds[id] = 1;
            return id;
        },
        clearInterval: function (id) {
            delete intervalIds[id];
            clearInterval(id);
        },
    });
};
//# sourceMappingURL=useSetInterval.js.map

/***/ }),

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

/***/ "Ea+4":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/Layer/LayerHost.js ***!
  \*********************************************************************************************************************************************************************************************/
/*! exports provided: LayerHost */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayerHost", function() { return LayerHost; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Utilities */ "mkpW");
/* harmony import */ var _Layer_notification__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Layer.notification */ "V7Tt");




var LayerHost = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(LayerHost, _super);
    function LayerHost() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LayerHost.prototype.shouldComponentUpdate = function () {
        return false;
    };
    LayerHost.prototype.componentDidMount = function () {
        Object(_Layer_notification__WEBPACK_IMPORTED_MODULE_3__["notifyHostChanged"])(this.props.id);
    };
    LayerHost.prototype.componentWillUnmount = function () {
        Object(_Layer_notification__WEBPACK_IMPORTED_MODULE_3__["notifyHostChanged"])(this.props.id);
    };
    LayerHost.prototype.render = function () {
        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.props, { className: Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["css"])('ms-LayerHost', this.props.className) }));
    };
    return LayerHost;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));

//# sourceMappingURL=LayerHost.js.map

/***/ }),

/***/ "ElRa":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/Checkbox/Checkbox.base.js ***!
  \****************************************************************************************************************************************************************************************************/
/*! exports provided: CheckboxBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckboxBase", function() { return CheckboxBase; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Utilities */ "mkpW");
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Icon */ "56LG");
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Icon__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _KeytipData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../KeytipData */ "iaSa");





var getClassNames = Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["classNamesFunction"])();
var CheckboxBase = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(CheckboxBase, _super);
    /**
     * Initialize a new instance of the Checkbox
     * @param props - Props for the component
     * @param context - Context or initial state for the base component.
     */
    function CheckboxBase(props, context) {
        var _this = _super.call(this, props, context) || this;
        _this._checkBox = react__WEBPACK_IMPORTED_MODULE_1__["createRef"]();
        _this._renderContent = function (checked, indeterminate, keytipAttributes) {
            if (keytipAttributes === void 0) { keytipAttributes = {}; }
            var _a = _this.props, disabled = _a.disabled, inputProps = _a.inputProps, name = _a.name, ariaLabel = _a.ariaLabel, ariaLabelledBy = _a.ariaLabelledBy, ariaDescribedBy = _a.ariaDescribedBy, _b = _a.onRenderLabel, onRenderLabel = _b === void 0 ? _this._onRenderLabel : _b, checkmarkIconProps = _a.checkmarkIconProps, ariaPositionInSet = _a.ariaPositionInSet, ariaSetSize = _a.ariaSetSize, title = _a.title, label = _a.label;
            return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: _this._classNames.root, title: title },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Utilities__WEBPACK_IMPORTED_MODULE_2__["FocusRects"], null),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("input", Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ type: "checkbox" }, inputProps, { "data-ktp-execute-target": keytipAttributes['data-ktp-execute-target'], checked: checked, disabled: disabled, className: _this._classNames.input, ref: _this._checkBox, name: name, id: _this._id, title: title, onChange: _this._onChange, onFocus: _this._onFocus, onBlur: _this._onBlur, "aria-disabled": disabled, "aria-label": ariaLabel || label, "aria-labelledby": ariaLabelledBy, "aria-describedby": Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["mergeAriaAttributeValues"])(ariaDescribedBy, keytipAttributes['aria-describedby']), "aria-posinset": ariaPositionInSet, "aria-setsize": ariaSetSize, "aria-checked": indeterminate ? 'mixed' : checked ? 'true' : 'false' })),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("label", { className: _this._classNames.label, htmlFor: _this._id },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: _this._classNames.checkbox, "data-ktp-target": keytipAttributes['data-ktp-target'] },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Icon__WEBPACK_IMPORTED_MODULE_3__["Icon"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ iconName: "CheckMark" }, checkmarkIconProps, { className: _this._classNames.checkmark }))),
                    onRenderLabel(_this.props, _this._onRenderLabel))));
        };
        _this._onFocus = function (ev) {
            var inputProps = _this.props.inputProps;
            if (inputProps && inputProps.onFocus) {
                inputProps.onFocus(ev);
            }
        };
        _this._onBlur = function (ev) {
            var inputProps = _this.props.inputProps;
            if (inputProps && inputProps.onBlur) {
                inputProps.onBlur(ev);
            }
        };
        _this._onChange = function (ev) {
            var onChange = _this.props.onChange;
            var _a = _this.state, isChecked = _a.isChecked, isIndeterminate = _a.isIndeterminate;
            if (!isIndeterminate) {
                if (onChange) {
                    onChange(ev, !isChecked);
                }
                if (_this.props.checked === undefined) {
                    _this.setState({ isChecked: !isChecked });
                }
            }
            else {
                // If indeterminate, clicking the checkbox *only* removes the indeterminate state (or if
                // controlled, lets the consumer know to change it by calling onChange). It doesn't
                // change the checked state.
                if (onChange) {
                    onChange(ev, isChecked);
                }
                if (_this.props.indeterminate === undefined) {
                    _this.setState({ isIndeterminate: false });
                }
            }
        };
        _this._onRenderLabel = function (props) {
            var label = props.label, title = props.title;
            return label ? (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", { "aria-hidden": "true", className: _this._classNames.text, title: title }, label)) : null;
        };
        Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["initializeComponentRef"])(_this);
        if (true) {
            Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["warnMutuallyExclusive"])('Checkbox', props, {
                checked: 'defaultChecked',
                indeterminate: 'defaultIndeterminate',
            });
        }
        _this._id = _this.props.id || Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["getId"])('checkbox-');
        _this.state = {
            isChecked: !!(props.checked !== undefined ? props.checked : props.defaultChecked),
            isIndeterminate: !!(props.indeterminate !== undefined ? props.indeterminate : props.defaultIndeterminate),
        };
        return _this;
    }
    CheckboxBase.getDerivedStateFromProps = function (nextProps, prevState) {
        var stateUpdate = {};
        if (nextProps.indeterminate !== undefined) {
            stateUpdate.isIndeterminate = !!nextProps.indeterminate;
        }
        if (nextProps.checked !== undefined) {
            stateUpdate.isChecked = !!nextProps.checked;
        }
        return Object.keys(stateUpdate).length ? stateUpdate : null;
    };
    /**
     * Render the Checkbox based on passed props
     */
    CheckboxBase.prototype.render = function () {
        var _this = this;
        var _a = this.props, className = _a.className, disabled = _a.disabled, boxSide = _a.boxSide, theme = _a.theme, styles = _a.styles, _b = _a.onRenderLabel, onRenderLabel = _b === void 0 ? this._onRenderLabel : _b, keytipProps = _a.keytipProps;
        var _c = this.state, isChecked = _c.isChecked, isIndeterminate = _c.isIndeterminate;
        this._classNames = getClassNames(styles, {
            theme: theme,
            className: className,
            disabled: disabled,
            indeterminate: isIndeterminate,
            checked: isChecked,
            reversed: boxSide !== 'start',
            isUsingCustomLabelRender: onRenderLabel !== this._onRenderLabel,
        });
        if (keytipProps) {
            return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_KeytipData__WEBPACK_IMPORTED_MODULE_4__["KeytipData"], { keytipProps: keytipProps, disabled: disabled }, function (keytipAttributes) { return _this._renderContent(isChecked, isIndeterminate, keytipAttributes); }));
        }
        return this._renderContent(isChecked, isIndeterminate);
    };
    Object.defineProperty(CheckboxBase.prototype, "indeterminate", {
        get: function () {
            return !!this.state.isIndeterminate;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CheckboxBase.prototype, "checked", {
        get: function () {
            return !!this.state.isChecked;
        },
        enumerable: true,
        configurable: true
    });
    CheckboxBase.prototype.focus = function () {
        if (this._checkBox.current) {
            this._checkBox.current.focus();
        }
    };
    CheckboxBase.defaultProps = {
        boxSide: 'start',
    };
    return CheckboxBase;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));

//# sourceMappingURL=Checkbox.base.js.map

/***/ }),

/***/ "Ev1G":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/utilities/keytips/KeytipConfig.js ***!
  \*************************************************************************************************************************************************************************************************/
/*! exports provided: buildKeytipConfigMap, constructKeytip */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildKeytipConfigMap", function() { return buildKeytipConfigMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "constructKeytip", function() { return constructKeytip; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);

/**
 * Builds a map of ID to IKeytipProps
 *
 * @param config - IKeytipConfig object
 * @returns Config map
 */
function buildKeytipConfigMap(config) {
    var configMap = {};
    for (var _i = 0, _a = config.keytips; _i < _a.length; _i++) {
        var keytip = _a[_i];
        constructKeytip(configMap, [], keytip);
    }
    return configMap;
}
/**
 * Constructs a keytip from an IKeytipConfigItem and puts it in the configMap
 *
 * @param configMap - IKeytipConfigMap to store the keytip in
 * @param parentSequence - string of the parent keytip
 * @param keytip - IKeytipConfigItem data
 */
function constructKeytip(configMap, parentSequence, keytip) {
    // Compute full key sequence
    var sequence = keytip.sequence ? keytip.sequence : keytip.content.toLocaleLowerCase();
    var keytipSequence = parentSequence.concat(sequence);
    // Save props in configMap
    var keytipProps = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, keytip.optionalProps), { keySequences: keytipSequence, content: keytip.content });
    configMap[keytip.id] = keytipProps;
    if (keytip.children) {
        for (var _i = 0, _a = keytip.children; _i < _a.length; _i++) {
            var child = _a[_i];
            // Create keytips for all children
            constructKeytip(configMap, keytipSequence, child);
        }
    }
}
//# sourceMappingURL=KeytipConfig.js.map

/***/ }),

/***/ "Eyzw":
/*!************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@uifabric/set-version@7.0.23/node_modules/@uifabric/set-version/lib/index.js ***!
  \************************************************************************************************************************************/
/*! exports provided: setVersion */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _setVersion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setVersion */ "guqf");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setVersion", function() { return _setVersion__WEBPACK_IMPORTED_MODULE_0__["setVersion"]; });



Object(_setVersion__WEBPACK_IMPORTED_MODULE_0__["setVersion"])('@uifabric/set-version', '6.0.0');
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "GKG/":
/*!******************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/utilities/keytips/index.js ***!
  \******************************************************************************************************************************************************************************************/
/*! exports provided: transitionKeysAreEqual, transitionKeysContain, buildKeytipConfigMap, constructKeytip, KTP_PREFIX, KTP_SEPARATOR, KTP_FULL_PREFIX, DATAKTP_TARGET, DATAKTP_EXECUTE_TARGET, DATAKTP_ARIA_TARGET, KTP_LAYER_ID, KTP_ARIA_SEPARATOR, KeytipEvents, KeytipManager, sequencesToID, mergeOverflows, ktpTargetFromSequences, ktpTargetFromId, getAriaDescribedBy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _IKeytipTransitionKey__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./IKeytipTransitionKey */ "7OcI");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "transitionKeysAreEqual", function() { return _IKeytipTransitionKey__WEBPACK_IMPORTED_MODULE_0__["transitionKeysAreEqual"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "transitionKeysContain", function() { return _IKeytipTransitionKey__WEBPACK_IMPORTED_MODULE_0__["transitionKeysContain"]; });

/* harmony import */ var _KeytipConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./KeytipConfig */ "Ev1G");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "buildKeytipConfigMap", function() { return _KeytipConfig__WEBPACK_IMPORTED_MODULE_1__["buildKeytipConfigMap"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "constructKeytip", function() { return _KeytipConfig__WEBPACK_IMPORTED_MODULE_1__["constructKeytip"]; });

/* harmony import */ var _KeytipConstants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./KeytipConstants */ "gLqG");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KTP_PREFIX", function() { return _KeytipConstants__WEBPACK_IMPORTED_MODULE_2__["KTP_PREFIX"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KTP_SEPARATOR", function() { return _KeytipConstants__WEBPACK_IMPORTED_MODULE_2__["KTP_SEPARATOR"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KTP_FULL_PREFIX", function() { return _KeytipConstants__WEBPACK_IMPORTED_MODULE_2__["KTP_FULL_PREFIX"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DATAKTP_TARGET", function() { return _KeytipConstants__WEBPACK_IMPORTED_MODULE_2__["DATAKTP_TARGET"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DATAKTP_EXECUTE_TARGET", function() { return _KeytipConstants__WEBPACK_IMPORTED_MODULE_2__["DATAKTP_EXECUTE_TARGET"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DATAKTP_ARIA_TARGET", function() { return _KeytipConstants__WEBPACK_IMPORTED_MODULE_2__["DATAKTP_ARIA_TARGET"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KTP_LAYER_ID", function() { return _KeytipConstants__WEBPACK_IMPORTED_MODULE_2__["KTP_LAYER_ID"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KTP_ARIA_SEPARATOR", function() { return _KeytipConstants__WEBPACK_IMPORTED_MODULE_2__["KTP_ARIA_SEPARATOR"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KeytipEvents", function() { return _KeytipConstants__WEBPACK_IMPORTED_MODULE_2__["KeytipEvents"]; });

/* harmony import */ var _KeytipManager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./KeytipManager */ "PfLA");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KeytipManager", function() { return _KeytipManager__WEBPACK_IMPORTED_MODULE_3__["KeytipManager"]; });

/* harmony import */ var _KeytipUtils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./KeytipUtils */ "OzR5");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sequencesToID", function() { return _KeytipUtils__WEBPACK_IMPORTED_MODULE_4__["sequencesToID"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mergeOverflows", function() { return _KeytipUtils__WEBPACK_IMPORTED_MODULE_4__["mergeOverflows"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ktpTargetFromSequences", function() { return _KeytipUtils__WEBPACK_IMPORTED_MODULE_4__["ktpTargetFromSequences"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ktpTargetFromId", function() { return _KeytipUtils__WEBPACK_IMPORTED_MODULE_4__["ktpTargetFromId"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getAriaDescribedBy", function() { return _KeytipUtils__WEBPACK_IMPORTED_MODULE_4__["getAriaDescribedBy"]; });






//# sourceMappingURL=index.js.map

/***/ }),

/***/ "KQ3P":
/*!************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/Layer/Layer.styles.js ***!
  \************************************************************************************************************************************************************************************************/
/*! exports provided: getStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStyles", function() { return getStyles; });
/* harmony import */ var _Styling__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Styling */ "PL71");

var GlobalClassNames = {
    root: 'ms-Layer',
    rootNoHost: 'ms-Layer--fixed',
    content: 'ms-Layer-content',
};
var getStyles = function (props) {
    var className = props.className, isNotHost = props.isNotHost, theme = props.theme;
    var classNames = Object(_Styling__WEBPACK_IMPORTED_MODULE_0__["getGlobalClassNames"])(GlobalClassNames, theme);
    return {
        root: [
            classNames.root,
            theme.fonts.medium,
            isNotHost && [
                classNames.rootNoHost,
                {
                    position: 'fixed',
                    zIndex: _Styling__WEBPACK_IMPORTED_MODULE_0__["ZIndexes"].Layer,
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                    visibility: 'hidden',
                },
            ],
            className,
        ],
        content: [
            classNames.content,
            {
                visibility: 'visible',
            },
        ],
    };
};
//# sourceMappingURL=Layer.styles.js.map

/***/ }),

/***/ "KjqC":
/*!*****************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@uifabric/react-hooks@7.13.9_c129be21209ec549b9ba61bf76d54bcc/node_modules/@uifabric/react-hooks/lib/useSetTimeout.js ***!
  \*****************************************************************************************************************************************************************************/
/*! exports provided: useSetTimeout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useSetTimeout", function() { return useSetTimeout; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useConst__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useConst */ "SKm6");


/**
 *  Returns a wrapper function for `setTimeout` which automatically handles disposal.
 */
var useSetTimeout = function () {
    var timeoutIds = Object(_useConst__WEBPACK_IMPORTED_MODULE_1__["useConst"])({});
    // Cleanup function.
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](function () { return function () {
        for (var _i = 0, _a = Object.keys(timeoutIds); _i < _a.length; _i++) {
            var id = _a[_i];
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            clearTimeout(id);
        }
    }; }, 
    // useConst ensures this will never change, but react-hooks/exhaustive-deps doesn't know that
    [timeoutIds]);
    // Return wrapper which will auto cleanup.
    return Object(_useConst__WEBPACK_IMPORTED_MODULE_1__["useConst"])({
        setTimeout: function (func, duration) {
            var id = setTimeout(func, duration);
            timeoutIds[id] = 1;
            return id;
        },
        clearTimeout: function (id) {
            delete timeoutIds[id];
            clearTimeout(id);
        },
    });
};
//# sourceMappingURL=useSetTimeout.js.map

/***/ }),

/***/ "LGYR":
/*!************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/Toggle/Toggle.base.js ***!
  \************************************************************************************************************************************************************************************************/
/*! exports provided: ToggleBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToggleBase", function() { return ToggleBase; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Utilities */ "mkpW");
/* harmony import */ var _Label__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Label */ "wMNn");
/* harmony import */ var _KeytipData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../KeytipData */ "iaSa");





var getClassNames = Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["classNamesFunction"])();
var COMPONENT_NAME = 'Toggle';
var ToggleBase = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ToggleBase, _super);
    function ToggleBase(props) {
        var _this = _super.call(this, props) || this;
        _this._toggleButton = react__WEBPACK_IMPORTED_MODULE_1__["createRef"]();
        _this._onClick = function (ev) {
            // eslint-disable-next-line deprecation/deprecation
            var _a = _this.props, disabled = _a.disabled, checkedProp = _a.checked, onChange = _a.onChange, onChanged = _a.onChanged, onClick = _a.onClick;
            var checked = _this.state.checked;
            if (!disabled) {
                // Only update the state if the user hasn't provided it.
                if (checkedProp === undefined) {
                    _this.setState({
                        checked: !checked,
                    });
                }
                if (onChange) {
                    onChange(ev, !checked);
                }
                if (onChanged) {
                    onChanged(!checked);
                }
                if (onClick) {
                    onClick(ev);
                }
            }
        };
        Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["initializeComponentRef"])(_this);
        Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["warnMutuallyExclusive"])(COMPONENT_NAME, props, {
            checked: 'defaultChecked',
        });
        Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["warnDeprecations"])(COMPONENT_NAME, props, {
            onAriaLabel: 'ariaLabel',
            offAriaLabel: undefined,
            onChanged: 'onChange',
        });
        _this.state = {
            checked: !!(props.checked || props.defaultChecked),
        };
        _this._id = props.id || Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["getId"])('Toggle');
        return _this;
    }
    ToggleBase.getDerivedStateFromProps = function (nextProps, prevState) {
        if (nextProps.checked === undefined) {
            return null;
        }
        return {
            checked: !!nextProps.checked,
        };
    };
    Object.defineProperty(ToggleBase.prototype, "checked", {
        /**
         * Gets the current checked state of the toggle.
         */
        get: function () {
            return this.state.checked;
        },
        enumerable: true,
        configurable: true
    });
    ToggleBase.prototype.render = function () {
        var _this = this;
        var _a = this.props, _b = _a.as, RootType = _b === void 0 ? 'div' : _b, className = _a.className, theme = _a.theme, disabled = _a.disabled, keytipProps = _a.keytipProps, label = _a.label, ariaLabel = _a.ariaLabel, 
        /* eslint-disable deprecation/deprecation */
        onAriaLabel = _a.onAriaLabel, offAriaLabel = _a.offAriaLabel, 
        /* eslint-enable deprecation/deprecation */
        offText = _a.offText, onText = _a.onText, styles = _a.styles, inlineLabel = _a.inlineLabel;
        var checked = this.state.checked;
        var stateText = checked ? onText : offText;
        var badAriaLabel = checked ? onAriaLabel : offAriaLabel;
        var toggleNativeProps = Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["getNativeProps"])(this.props, _Utilities__WEBPACK_IMPORTED_MODULE_2__["inputProperties"], ['defaultChecked']);
        var classNames = getClassNames(styles, {
            theme: theme,
            className: className,
            disabled: disabled,
            checked: checked,
            inlineLabel: inlineLabel,
            onOffMissing: !onText && !offText,
        });
        var labelId = this._id + "-label";
        var stateTextId = this._id + "-stateText";
        // The following properties take priority for what Narrator should read:
        // 1. ariaLabel
        // 2. onAriaLabel (if checked) or offAriaLabel (if not checked)
        // 3. label AND stateText, if existent
        var labelledById = undefined;
        if (!ariaLabel && !badAriaLabel) {
            if (label) {
                labelledById = labelId;
            }
            if (stateText) {
                labelledById = labelledById ? labelledById + " " + stateTextId : stateTextId;
            }
        }
        var ariaRole = this.props.role ? this.props.role : 'switch';
        var renderPill = function (keytipAttributes) {
            if (keytipAttributes === void 0) { keytipAttributes = {}; }
            return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("button", Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, toggleNativeProps, keytipAttributes, { className: classNames.pill, disabled: disabled, id: _this._id, type: "button", role: ariaRole, ref: _this._toggleButton, "aria-disabled": disabled, "aria-checked": checked, "aria-label": ariaLabel ? ariaLabel : badAriaLabel, "data-is-focusable": true, onChange: _this._noop, onClick: _this._onClick, "aria-labelledby": labelledById }),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", { className: classNames.thumb })));
        };
        var pillContent = keytipProps ? (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_KeytipData__WEBPACK_IMPORTED_MODULE_4__["KeytipData"], { keytipProps: keytipProps, ariaDescribedBy: toggleNativeProps['aria-describedby'], disabled: disabled }, function (keytipAttributes) { return renderPill(keytipAttributes); })) : (renderPill());
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](RootType, { className: classNames.root, hidden: toggleNativeProps.hidden },
            label && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Label__WEBPACK_IMPORTED_MODULE_3__["Label"], { htmlFor: this._id, className: classNames.label, id: labelId }, label)),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: classNames.container },
                pillContent,
                stateText && (
                // This second "htmlFor" property is needed to allow the
                // toggle's stateText to also trigger a state change when clicked.
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Label__WEBPACK_IMPORTED_MODULE_3__["Label"], { htmlFor: this._id, className: classNames.text, id: stateTextId }, stateText))),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Utilities__WEBPACK_IMPORTED_MODULE_2__["FocusRects"], null)));
    };
    ToggleBase.prototype.focus = function () {
        if (this._toggleButton.current) {
            this._toggleButton.current.focus();
        }
    };
    ToggleBase.prototype._noop = function () {
        /* no-op */
    };
    return ToggleBase;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));

//# sourceMappingURL=Toggle.base.js.map

/***/ }),

/***/ "Lbeb":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@fluentui/react-window-provider@1.0.1_c129be21209ec549b9ba61bf76d54bcc/node_modules/@fluentui/react-window-provider/lib/WindowProvider.js ***!
  \*************************************************************************************************************************************************************************************************/
/*! exports provided: WindowContext, useWindow, useDocument, WindowProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WindowContext", function() { return WindowContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useWindow", function() { return useWindow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useDocument", function() { return useDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WindowProvider", function() { return WindowProvider; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/**
 * Context for providing the window.
 */
var WindowContext = react__WEBPACK_IMPORTED_MODULE_0__["createContext"]({
    window: typeof window === 'object' ? window : undefined,
});
/**
 * Hook to access the window object. This can be overridden contextually using the `WindowProvider`.
 */
var useWindow = function () { return react__WEBPACK_IMPORTED_MODULE_0__["useContext"](WindowContext).window; };
/**
 * Hook to access the document object. This can be overridden contextually using the `WindowProvider`.
 */
var useDocument = function () { var _a; return (_a = react__WEBPACK_IMPORTED_MODULE_0__["useContext"](WindowContext).window) === null || _a === void 0 ? void 0 : _a.document; };
/**
 * Component to provide the window object contextually. This is useful when rendering content to an element
 * contained within a child window or iframe element, where event handlers and styling must be projected
 * to an alternative window or document.
 */
var WindowProvider = function (props) {
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](WindowContext.Provider, { value: props }, props.children);
};
//# sourceMappingURL=WindowProvider.js.map

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

/***/ "NIwH":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/Dropdown/Dropdown.styles.js ***!
  \******************************************************************************************************************************************************************************************************/
/*! exports provided: getStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStyles", function() { return getStyles; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Utilities */ "mkpW");
/* harmony import */ var _utilities_positioning__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utilities/positioning */ "gdZc");
/* harmony import */ var _Styling__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Styling */ "PL71");
var _a, _b, _c;




var GlobalClassNames = {
    root: 'ms-Dropdown-container',
    label: 'ms-Dropdown-label',
    dropdown: 'ms-Dropdown',
    title: 'ms-Dropdown-title',
    caretDownWrapper: 'ms-Dropdown-caretDownWrapper',
    caretDown: 'ms-Dropdown-caretDown',
    callout: 'ms-Dropdown-callout',
    panel: 'ms-Dropdown-panel',
    dropdownItems: 'ms-Dropdown-items',
    dropdownItem: 'ms-Dropdown-item',
    dropdownDivider: 'ms-Dropdown-divider',
    dropdownOptionText: 'ms-Dropdown-optionText',
    dropdownItemHeader: 'ms-Dropdown-header',
    titleIsPlaceHolder: 'ms-Dropdown-titleIsPlaceHolder',
    titleHasError: 'ms-Dropdown-title--hasError',
};
var DROPDOWN_HEIGHT = 32;
var DROPDOWN_ITEM_HEIGHT = 36;
var highContrastAdjustMixin = (_a = {},
    _a[_Styling__WEBPACK_IMPORTED_MODULE_3__["HighContrastSelector"] + ", " + _Styling__WEBPACK_IMPORTED_MODULE_3__["HighContrastSelectorWhite"].replace('@media ', '')] = {
        MsHighContrastAdjust: 'none',
    },
    _a);
var highContrastItemAndTitleStateMixin = {
    selectors: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])((_b = {}, _b[_Styling__WEBPACK_IMPORTED_MODULE_3__["HighContrastSelector"]] = {
        backgroundColor: 'Highlight',
        borderColor: 'Highlight',
        color: 'HighlightText',
    }, _b), highContrastAdjustMixin),
};
var highContrastBorderState = {
    selectors: (_c = {},
        _c[_Styling__WEBPACK_IMPORTED_MODULE_3__["HighContrastSelector"]] = {
            borderColor: 'Highlight',
        },
        _c),
};
var MinimumScreenSelector = Object(_Styling__WEBPACK_IMPORTED_MODULE_3__["getScreenSelector"])(0, _Styling__WEBPACK_IMPORTED_MODULE_3__["ScreenWidthMinMedium"]);
var getStyles = function (props) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
    var theme = props.theme, hasError = props.hasError, hasLabel = props.hasLabel, className = props.className, isOpen = props.isOpen, disabled = props.disabled, required = props.required, isRenderingPlaceholder = props.isRenderingPlaceholder, panelClassName = props.panelClassName, calloutClassName = props.calloutClassName, calloutRenderEdge = props.calloutRenderEdge;
    if (!theme) {
        throw new Error('theme is undefined or null in base Dropdown getStyles function.');
    }
    var globalClassnames = Object(_Styling__WEBPACK_IMPORTED_MODULE_3__["getGlobalClassNames"])(GlobalClassNames, theme);
    var palette = theme.palette, semanticColors = theme.semanticColors, effects = theme.effects, fonts = theme.fonts;
    var rootHoverFocusActiveSelectorNeutralDarkMixin = {
        color: semanticColors.menuItemTextHovered,
    };
    var rootHoverFocusActiveSelectorNeutralPrimaryMixin = {
        color: semanticColors.menuItemText,
    };
    var borderColorError = {
        borderColor: semanticColors.errorText,
    };
    var dropdownItemStyle = [
        globalClassnames.dropdownItem,
        {
            backgroundColor: 'transparent',
            boxSizing: 'border-box',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            padding: '0 8px',
            width: '100%',
            minHeight: DROPDOWN_ITEM_HEIGHT,
            lineHeight: 20,
            height: 0,
            position: 'relative',
            border: '1px solid transparent',
            borderRadius: 0,
            wordWrap: 'break-word',
            overflowWrap: 'break-word',
            textAlign: 'left',
            '.ms-Button-flexContainer': {
                width: '100%',
            },
        },
    ];
    var selectedItemBackgroundColor = semanticColors.menuItemBackgroundPressed;
    var itemSelectors = function (isSelected) {
        var _a;
        if (isSelected === void 0) { isSelected = false; }
        return {
            selectors: (_a = {
                    '&:hover:focus': [
                        {
                            color: semanticColors.menuItemTextHovered,
                            backgroundColor: !isSelected ? semanticColors.menuItemBackgroundHovered : selectedItemBackgroundColor,
                        },
                        highContrastItemAndTitleStateMixin,
                    ],
                    '&:focus': [
                        {
                            backgroundColor: !isSelected ? 'transparent' : selectedItemBackgroundColor,
                        },
                        highContrastItemAndTitleStateMixin,
                    ],
                    '&:active': [
                        {
                            color: semanticColors.menuItemTextHovered,
                            backgroundColor: !isSelected ? semanticColors.menuBackground : semanticColors.menuItemBackgroundHovered,
                        },
                        highContrastItemAndTitleStateMixin,
                    ]
                },
                _a["." + _Utilities__WEBPACK_IMPORTED_MODULE_1__["IsFocusVisibleClassName"] + " &:focus:after"] = {
                    left: 0,
                    top: 0,
                    bottom: 0,
                    right: 0,
                },
                _a[_Styling__WEBPACK_IMPORTED_MODULE_3__["HighContrastSelector"]] = {
                    border: 'none',
                },
                _a),
        };
    };
    var dropdownItemSelected = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(dropdownItemStyle, [
        {
            backgroundColor: selectedItemBackgroundColor,
            color: semanticColors.menuItemTextHovered,
        },
        itemSelectors(true),
        highContrastItemAndTitleStateMixin,
    ]);
    var dropdownItemDisabled = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(dropdownItemStyle, [
        {
            color: semanticColors.disabledText,
            cursor: 'default',
            selectors: (_a = {},
                _a[_Styling__WEBPACK_IMPORTED_MODULE_3__["HighContrastSelector"]] = {
                    color: 'GrayText',
                    border: 'none',
                },
                _a),
        },
    ]);
    var titleOpenBorderRadius = calloutRenderEdge === _utilities_positioning__WEBPACK_IMPORTED_MODULE_2__["RectangleEdge"].bottom
        ? effects.roundedCorner2 + " " + effects.roundedCorner2 + " 0 0"
        : "0 0 " + effects.roundedCorner2 + " " + effects.roundedCorner2;
    var calloutOpenBorderRadius = calloutRenderEdge === _utilities_positioning__WEBPACK_IMPORTED_MODULE_2__["RectangleEdge"].bottom
        ? "0 0 " + effects.roundedCorner2 + " " + effects.roundedCorner2
        : effects.roundedCorner2 + " " + effects.roundedCorner2 + " 0 0";
    return {
        root: [globalClassnames.root, className],
        label: globalClassnames.label,
        dropdown: [
            globalClassnames.dropdown,
            _Styling__WEBPACK_IMPORTED_MODULE_3__["normalize"],
            fonts.medium,
            {
                color: semanticColors.menuItemText,
                borderColor: semanticColors.focusBorder,
                position: 'relative',
                outline: 0,
                userSelect: 'none',
                selectors: (_b = {},
                    _b['&:hover .' + globalClassnames.title] = [
                        !disabled && rootHoverFocusActiveSelectorNeutralDarkMixin,
                        { borderColor: isOpen ? palette.neutralSecondary : palette.neutralPrimary },
                        highContrastBorderState,
                    ],
                    _b['&:focus .' + globalClassnames.title] = [
                        !disabled && rootHoverFocusActiveSelectorNeutralDarkMixin,
                        { selectors: (_c = {}, _c[_Styling__WEBPACK_IMPORTED_MODULE_3__["HighContrastSelector"]] = { color: 'Highlight' }, _c) },
                    ],
                    _b['&:focus:after'] = [
                        {
                            pointerEvents: 'none',
                            content: "''",
                            position: 'absolute',
                            boxSizing: 'border-box',
                            top: '0px',
                            left: '0px',
                            width: '100%',
                            height: '100%',
                            // see https://github.com/microsoft/fluentui/pull/9182 for semantic color disc
                            border: !disabled ? "2px solid " + palette.themePrimary : 'none',
                            borderRadius: '2px',
                            selectors: (_d = {},
                                _d[_Styling__WEBPACK_IMPORTED_MODULE_3__["HighContrastSelector"]] = {
                                    color: 'Highlight',
                                },
                                _d),
                        },
                    ],
                    _b['&:active .' + globalClassnames.title] = [
                        !disabled && rootHoverFocusActiveSelectorNeutralDarkMixin,
                        { borderColor: palette.themePrimary },
                        highContrastBorderState,
                    ],
                    _b['&:hover .' + globalClassnames.caretDown] = !disabled && rootHoverFocusActiveSelectorNeutralPrimaryMixin,
                    _b['&:focus .' + globalClassnames.caretDown] = [
                        !disabled && rootHoverFocusActiveSelectorNeutralPrimaryMixin,
                        { selectors: (_e = {}, _e[_Styling__WEBPACK_IMPORTED_MODULE_3__["HighContrastSelector"]] = { color: 'Highlight' }, _e) },
                    ],
                    _b['&:active .' + globalClassnames.caretDown] = !disabled && rootHoverFocusActiveSelectorNeutralPrimaryMixin,
                    _b['&:hover .' + globalClassnames.titleIsPlaceHolder] = !disabled && rootHoverFocusActiveSelectorNeutralPrimaryMixin,
                    _b['&:focus .' + globalClassnames.titleIsPlaceHolder] = !disabled && rootHoverFocusActiveSelectorNeutralPrimaryMixin,
                    _b['&:active .' + globalClassnames.titleIsPlaceHolder] = !disabled && rootHoverFocusActiveSelectorNeutralPrimaryMixin,
                    _b['&:hover .' + globalClassnames.titleHasError] = borderColorError,
                    _b['&:active .' + globalClassnames.titleHasError] = borderColorError,
                    _b),
            },
            isOpen && 'is-open',
            disabled && 'is-disabled',
            required && 'is-required',
            required &&
                !hasLabel && {
                selectors: (_f = {
                        ':before': {
                            content: "'*'",
                            color: semanticColors.errorText,
                            position: 'absolute',
                            top: -5,
                            right: -10,
                        }
                    },
                    _f[_Styling__WEBPACK_IMPORTED_MODULE_3__["HighContrastSelector"]] = {
                        selectors: {
                            ':after': {
                                right: -14,
                            },
                        },
                    },
                    _f),
            },
        ],
        title: [
            globalClassnames.title,
            _Styling__WEBPACK_IMPORTED_MODULE_3__["normalize"],
            {
                backgroundColor: semanticColors.inputBackground,
                borderWidth: 1,
                borderStyle: 'solid',
                borderColor: semanticColors.inputBorder,
                borderRadius: isOpen ? titleOpenBorderRadius : effects.roundedCorner2,
                cursor: 'pointer',
                display: 'block',
                height: DROPDOWN_HEIGHT,
                lineHeight: DROPDOWN_HEIGHT - 2,
                padding: "0 28px 0 8px",
                position: 'relative',
                overflow: 'hidden',
                whiteSpace: 'nowrap',
                textOverflow: 'ellipsis',
            },
            isRenderingPlaceholder && [globalClassnames.titleIsPlaceHolder, { color: semanticColors.inputPlaceholderText }],
            hasError && [globalClassnames.titleHasError, borderColorError],
            disabled && {
                backgroundColor: semanticColors.disabledBackground,
                border: 'none',
                color: semanticColors.disabledText,
                cursor: 'default',
                selectors: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])((_g = {}, _g[_Styling__WEBPACK_IMPORTED_MODULE_3__["HighContrastSelector"]] = {
                    border: '1px solid GrayText',
                    color: 'GrayText',
                    backgroundColor: 'Window',
                }, _g), Object(_Styling__WEBPACK_IMPORTED_MODULE_3__["getEdgeChromiumNoHighContrastAdjustSelector"])()),
            },
        ],
        caretDownWrapper: [
            globalClassnames.caretDownWrapper,
            {
                position: 'absolute',
                top: 1,
                right: 8,
                height: DROPDOWN_HEIGHT,
                lineHeight: DROPDOWN_HEIGHT - 2,
            },
            !disabled && {
                cursor: 'pointer',
            },
        ],
        caretDown: [
            globalClassnames.caretDown,
            { color: palette.neutralSecondary, fontSize: fonts.small.fontSize, pointerEvents: 'none' },
            disabled && {
                color: semanticColors.disabledText,
                selectors: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])((_h = {}, _h[_Styling__WEBPACK_IMPORTED_MODULE_3__["HighContrastSelector"]] = { color: 'GrayText' }, _h), Object(_Styling__WEBPACK_IMPORTED_MODULE_3__["getEdgeChromiumNoHighContrastAdjustSelector"])()),
            },
        ],
        errorMessage: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ color: semanticColors.errorText }, theme.fonts.small), { paddingTop: 5 }),
        callout: [
            globalClassnames.callout,
            {
                boxShadow: effects.elevation8,
                borderRadius: calloutOpenBorderRadius,
                selectors: (_j = {},
                    _j['.ms-Callout-main'] = { borderRadius: calloutOpenBorderRadius },
                    _j),
            },
            calloutClassName,
        ],
        dropdownItemsWrapper: { selectors: { '&:focus': { outline: 0 } } },
        dropdownItems: [globalClassnames.dropdownItems, { display: 'block' }],
        dropdownItem: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(dropdownItemStyle, [itemSelectors()]),
        dropdownItemSelected: dropdownItemSelected,
        dropdownItemDisabled: dropdownItemDisabled,
        dropdownItemSelectedAndDisabled: [dropdownItemSelected, dropdownItemDisabled, { backgroundColor: 'transparent' }],
        dropdownItemHidden: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(dropdownItemStyle, [{ display: 'none' }]),
        dropdownDivider: [globalClassnames.dropdownDivider, { height: 1, backgroundColor: semanticColors.bodyDivider }],
        dropdownOptionText: [
            globalClassnames.dropdownOptionText,
            {
                overflow: 'hidden',
                whiteSpace: 'nowrap',
                textOverflow: 'ellipsis',
                minWidth: 0,
                maxWidth: '100%',
                wordWrap: 'break-word',
                overflowWrap: 'break-word',
                margin: '1px',
            },
        ],
        dropdownItemHeader: [
            globalClassnames.dropdownItemHeader,
            Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, fonts.medium), { fontWeight: _Styling__WEBPACK_IMPORTED_MODULE_3__["FontWeights"].semibold, color: semanticColors.menuHeader, background: 'none', backgroundColor: 'transparent', border: 'none', height: DROPDOWN_ITEM_HEIGHT, lineHeight: DROPDOWN_ITEM_HEIGHT, cursor: 'default', padding: '0 8px', userSelect: 'none', textAlign: 'left', selectors: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])((_k = {}, _k[_Styling__WEBPACK_IMPORTED_MODULE_3__["HighContrastSelector"]] = {
                    color: 'GrayText',
                }, _k), Object(_Styling__WEBPACK_IMPORTED_MODULE_3__["getEdgeChromiumNoHighContrastAdjustSelector"])()) }),
        ],
        subComponentStyles: {
            label: { root: { display: 'inline-block' } },
            multiSelectItem: {
                root: {
                    padding: 0,
                },
                label: {
                    alignSelf: 'stretch',
                    padding: '0 8px',
                    width: '100%',
                },
            },
            panel: {
                root: [panelClassName],
                main: {
                    selectors: (_l = {},
                        // In case of extra small screen sizes
                        _l[MinimumScreenSelector] = {
                            // panelWidth xs
                            width: 272,
                        },
                        _l),
                },
                contentInner: { padding: '0 0 20px' },
            },
        },
    };
};
//# sourceMappingURL=Dropdown.styles.js.map

/***/ }),

/***/ "NMYH":
/*!****************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/FocusZone.js ***!
  \****************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/office-ui-fabric-react-bundle */ "KL1q");
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
// Loading office-ui-fabric-react/./lib/FocusZone.js


/***/ }),

/***/ "OBNh":
/*!*************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/Fabric.js ***!
  \*************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/office-ui-fabric-react-bundle */ "KL1q");
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
// Loading office-ui-fabric-react/./lib/Fabric.js


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

/***/ "OzR5":
/*!************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/utilities/keytips/KeytipUtils.js ***!
  \************************************************************************************************************************************************************************************************/
/*! exports provided: sequencesToID, mergeOverflows, ktpTargetFromSequences, ktpTargetFromId, getAriaDescribedBy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sequencesToID", function() { return sequencesToID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeOverflows", function() { return mergeOverflows; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ktpTargetFromSequences", function() { return ktpTargetFromSequences; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ktpTargetFromId", function() { return ktpTargetFromId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAriaDescribedBy", function() { return getAriaDescribedBy; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _KeytipConstants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./KeytipConstants */ "gLqG");
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Utilities */ "mkpW");



/**
 * Converts a whole set of KeySequences into one keytip ID, which will be the ID for the last keytip sequence specified
 * keySequences should not include the initial keytip 'start' sequence.
 *
 * @param keySequences - Full path of IKeySequences for one keytip.
 * @returns String to use for the keytip ID.
 */
function sequencesToID(keySequences) {
    return keySequences.reduce(function (prevValue, keySequence) {
        return prevValue + _KeytipConstants__WEBPACK_IMPORTED_MODULE_1__["KTP_SEPARATOR"] + keySequence.split('').join(_KeytipConstants__WEBPACK_IMPORTED_MODULE_1__["KTP_SEPARATOR"]);
    }, _KeytipConstants__WEBPACK_IMPORTED_MODULE_1__["KTP_PREFIX"]);
}
/**
 * Merges an overflow sequence with a key sequence.
 *
 * @param keySequences - Full sequence for one keytip.
 * @param overflowKeySequences - Full overflow keytip sequence.
 * @returns Sequence that will be used by the keytip when in the overflow.
 */
function mergeOverflows(keySequences, overflowKeySequences) {
    var overflowSequenceLen = overflowKeySequences.length;
    var overflowSequence = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(overflowKeySequences).pop();
    var newKeySequences = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(keySequences);
    return Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["addElementAtIndex"])(newKeySequences, overflowSequenceLen - 1, overflowSequence);
}
/**
 * Constructs the data-ktp-target attribute selector from a full key sequence.
 *
 * @param keySequences - Full string[] for a Keytip.
 * @returns String selector to use to query for the keytip target.
 */
function ktpTargetFromSequences(keySequences) {
    return '[' + _KeytipConstants__WEBPACK_IMPORTED_MODULE_1__["DATAKTP_TARGET"] + '="' + sequencesToID(keySequences) + '"]';
}
/**
 * Constructs the data-ktp-execute-target attribute selector from a keytip ID.
 *
 * @param keytipId - ID of the Keytip.
 * @returns String selector to use to query for the keytip execute target.
 */
function ktpTargetFromId(keytipId) {
    return '[' + _KeytipConstants__WEBPACK_IMPORTED_MODULE_1__["DATAKTP_EXECUTE_TARGET"] + '="' + keytipId + '"]';
}
/**
 * Gets the aria-describedby value to put on the component with this keytip.
 *
 * @param keySequences - KeySequences of the keytip.
 * @returns The aria-describedby value to set on the component with this keytip.
 */
function getAriaDescribedBy(keySequences) {
    var describedby = ' ' + _KeytipConstants__WEBPACK_IMPORTED_MODULE_1__["KTP_LAYER_ID"];
    if (!keySequences.length) {
        // Return just the layer ID
        return describedby;
    }
    return describedby + ' ' + sequencesToID(keySequences);
}
//# sourceMappingURL=KeytipUtils.js.map

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

/***/ "PfLA":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/utilities/keytips/KeytipManager.js ***!
  \**************************************************************************************************************************************************************************************************/
/*! exports provided: KeytipManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeytipManager", function() { return KeytipManager; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Utilities */ "mkpW");
/* harmony import */ var _utilities_keytips_KeytipConstants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utilities/keytips/KeytipConstants */ "gLqG");



/**
 * This class is responsible for handling registering, updating, and unregistering of keytips
 */
var KeytipManager = /** @class */ (function () {
    function KeytipManager() {
        this.keytips = {};
        this.persistedKeytips = {};
        this.sequenceMapping = {};
        // This is (and should be) updated and kept in sync
        // with the inKeytipMode in KeytipLayer.
        this.inKeytipMode = false;
        // Boolean that gets checked before entering keytip mode by the KeytipLayer
        // Used for an override in special cases (e.g. Disable entering keytip mode when a modal is shown)
        this.shouldEnterKeytipMode = true;
        // Boolean to indicate whether to delay firing an event to update subscribers of
        // keytip data changed.
        this.delayUpdatingKeytipChange = false;
    }
    /**
     * Static function to get singleton KeytipManager instance
     *
     * @returns Singleton KeytipManager instance
     */
    KeytipManager.getInstance = function () {
        return this._instance;
    };
    /**
     * Initialization code to set set parameters to define
     * how the KeytipManager handles keytip data.
     *
     * @param delayUpdatingKeytipChange - T/F if we should delay notifiying keytip subscribers
     * of keytip changes
     */
    KeytipManager.prototype.init = function (delayUpdatingKeytipChange) {
        this.delayUpdatingKeytipChange = delayUpdatingKeytipChange;
    };
    /**
     * Registers a keytip
     *
     * @param keytipProps - Keytip to register
     * @param persisted - T/F if this keytip should be persisted, default is false
     * @returns Unique ID for this keytip
     */
    KeytipManager.prototype.register = function (keytipProps, persisted) {
        if (persisted === void 0) { persisted = false; }
        var props = keytipProps;
        if (!persisted) {
            // Add the overflowSetSequence if necessary
            props = this.addParentOverflow(keytipProps);
            this.sequenceMapping[props.keySequences.toString()] = props;
        }
        // Create a unique keytip
        var uniqueKeytip = this._getUniqueKtp(props);
        // Add to dictionary
        persisted
            ? (this.persistedKeytips[uniqueKeytip.uniqueID] = uniqueKeytip)
            : (this.keytips[uniqueKeytip.uniqueID] = uniqueKeytip);
        // We only want to add something new if we are currently showing keytip mode
        if (this.inKeytipMode || !this.delayUpdatingKeytipChange) {
            var event_1 = persisted ? _utilities_keytips_KeytipConstants__WEBPACK_IMPORTED_MODULE_2__["KeytipEvents"].PERSISTED_KEYTIP_ADDED : _utilities_keytips_KeytipConstants__WEBPACK_IMPORTED_MODULE_2__["KeytipEvents"].KEYTIP_ADDED;
            _Utilities__WEBPACK_IMPORTED_MODULE_1__["EventGroup"].raise(this, event_1, {
                keytip: props,
                uniqueID: uniqueKeytip.uniqueID,
            });
        }
        return uniqueKeytip.uniqueID;
    };
    /**
     * Update a keytip
     *
     * @param keytipProps - Keytip to update
     * @param uniqueID - Unique ID of this keytip
     */
    KeytipManager.prototype.update = function (keytipProps, uniqueID) {
        var newKeytipProps = this.addParentOverflow(keytipProps);
        var uniqueKeytip = this._getUniqueKtp(newKeytipProps, uniqueID);
        var oldKeyTip = this.keytips[uniqueID];
        if (oldKeyTip) {
            // Update everything except 'visible'
            uniqueKeytip.keytip.visible = oldKeyTip.keytip.visible;
            // Update keytip in this.keytips
            this.keytips[uniqueID] = uniqueKeytip;
            // Update the sequence to be up to date
            delete this.sequenceMapping[oldKeyTip.keytip.keySequences.toString()];
            this.sequenceMapping[uniqueKeytip.keytip.keySequences.toString()] = uniqueKeytip.keytip;
            // Raise event only if we are currently in keytip mode
            if (this.inKeytipMode || !this.delayUpdatingKeytipChange) {
                _Utilities__WEBPACK_IMPORTED_MODULE_1__["EventGroup"].raise(this, _utilities_keytips_KeytipConstants__WEBPACK_IMPORTED_MODULE_2__["KeytipEvents"].KEYTIP_UPDATED, {
                    keytip: uniqueKeytip.keytip,
                    uniqueID: uniqueKeytip.uniqueID,
                });
            }
        }
    };
    /**
     * Unregisters a keytip
     *
     * @param keytipToRemove - IKeytipProps of the keytip to remove
     * @param uniqueID - Unique ID of this keytip
     * @param persisted - T/F if this keytip should be persisted, default is false
     */
    KeytipManager.prototype.unregister = function (keytipToRemove, uniqueID, persisted) {
        if (persisted === void 0) { persisted = false; }
        persisted ? delete this.persistedKeytips[uniqueID] : delete this.keytips[uniqueID];
        !persisted && delete this.sequenceMapping[keytipToRemove.keySequences.toString()];
        var event = persisted ? _utilities_keytips_KeytipConstants__WEBPACK_IMPORTED_MODULE_2__["KeytipEvents"].PERSISTED_KEYTIP_REMOVED : _utilities_keytips_KeytipConstants__WEBPACK_IMPORTED_MODULE_2__["KeytipEvents"].KEYTIP_REMOVED;
        // Update keytips only if we're in keytip mode
        if (this.inKeytipMode || !this.delayUpdatingKeytipChange) {
            _Utilities__WEBPACK_IMPORTED_MODULE_1__["EventGroup"].raise(this, event, {
                keytip: keytipToRemove,
                uniqueID: uniqueID,
            });
        }
    };
    /**
     * Manual call to enter keytip mode
     */
    KeytipManager.prototype.enterKeytipMode = function () {
        _Utilities__WEBPACK_IMPORTED_MODULE_1__["EventGroup"].raise(this, _utilities_keytips_KeytipConstants__WEBPACK_IMPORTED_MODULE_2__["KeytipEvents"].ENTER_KEYTIP_MODE);
    };
    /**
     * Manual call to exit keytip mode
     */
    KeytipManager.prototype.exitKeytipMode = function () {
        _Utilities__WEBPACK_IMPORTED_MODULE_1__["EventGroup"].raise(this, _utilities_keytips_KeytipConstants__WEBPACK_IMPORTED_MODULE_2__["KeytipEvents"].EXIT_KEYTIP_MODE);
    };
    /**
     * Gets all IKeytipProps from this.keytips
     *
     * @returns All keytips stored in the manager
     */
    KeytipManager.prototype.getKeytips = function () {
        var _this = this;
        return Object.keys(this.keytips).map(function (key) { return _this.keytips[key].keytip; });
    };
    /**
     * Adds the overflowSetSequence to the keytipProps if its parent keytip also has it
     *
     * @param keytipProps - Keytip props to add overflowSetSequence to if necessary
     * @returns - Modified keytip props, if needed to be modified
     */
    KeytipManager.prototype.addParentOverflow = function (keytipProps) {
        var fullSequence = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(keytipProps.keySequences);
        fullSequence.pop();
        if (fullSequence.length !== 0) {
            var parentKeytip = this.sequenceMapping[fullSequence.toString()];
            if (parentKeytip && parentKeytip.overflowSetSequence) {
                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, keytipProps), { overflowSetSequence: parentKeytip.overflowSetSequence });
            }
        }
        return keytipProps;
    };
    /**
     * Public function to bind for overflow items that have a submenu
     */
    KeytipManager.prototype.menuExecute = function (overflowButtonSequences, keytipSequences) {
        _Utilities__WEBPACK_IMPORTED_MODULE_1__["EventGroup"].raise(this, _utilities_keytips_KeytipConstants__WEBPACK_IMPORTED_MODULE_2__["KeytipEvents"].PERSISTED_KEYTIP_EXECUTE, {
            overflowButtonSequences: overflowButtonSequences,
            keytipSequences: keytipSequences,
        });
    };
    /**
     * Creates an IUniqueKeytip object
     *
     * @param keytipProps - IKeytipProps
     * @param uniqueID - Unique ID, will default to the next unique ID if not passed
     * @returns IUniqueKeytip object
     */
    KeytipManager.prototype._getUniqueKtp = function (keytipProps, uniqueID) {
        if (uniqueID === void 0) { uniqueID = Object(_Utilities__WEBPACK_IMPORTED_MODULE_1__["getId"])(); }
        return { keytip: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, keytipProps), uniqueID: uniqueID };
    };
    KeytipManager._instance = new KeytipManager();
    return KeytipManager;
}());

//# sourceMappingURL=KeytipManager.js.map

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

/***/ "S37p":
/*!**************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@uifabric/react-hooks@7.13.9_c129be21209ec549b9ba61bf76d54bcc/node_modules/@uifabric/react-hooks/lib/useOnEvent.js ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: useOnEvent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useOnEvent", function() { return useOnEvent; });
/* harmony import */ var _uifabric_utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @uifabric/utilities */ "P2cQ");
/* harmony import */ var _uifabric_utilities__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_uifabric_utilities__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


/**
 * Hook to attach an event handler on mount and handle cleanup.
 * @param element - Element (or ref to an element) to attach the event handler to
 * @param eventName - The event to attach a handler for
 * @param callback - The handler for the event
 * @param useCapture - Whether or not to attach the handler for the capture phase
 */
function useOnEvent(element, eventName, callback, useCapture) {
    // Use a ref for the callback to prevent repeatedly attaching/unattaching callbacks that are unstable across renders
    var callbackRef = react__WEBPACK_IMPORTED_MODULE_1__["useRef"](callback);
    callbackRef.current = callback;
    react__WEBPACK_IMPORTED_MODULE_1__["useEffect"](function () {
        var actualElement = element && 'current' in element ? element.current : element;
        if (!actualElement) {
            return;
        }
        var dispose = Object(_uifabric_utilities__WEBPACK_IMPORTED_MODULE_0__["on"])(actualElement, eventName, function (ev) { return callbackRef.current(ev); }, useCapture);
        return dispose;
    }, [element, eventName, useCapture]);
}
//# sourceMappingURL=useOnEvent.js.map

/***/ }),

/***/ "SKm6":
/*!************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@uifabric/react-hooks@7.13.9_c129be21209ec549b9ba61bf76d54bcc/node_modules/@uifabric/react-hooks/lib/useConst.js ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: useConst */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useConst", function() { return useConst; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/**
 * Hook to initialize and return a constant value. Unlike `React.useMemo`, this is guaranteed to
 * always return the same value (and if the initializer is a function, only call it once).
 * This is similar to setting a private member in a class constructor.
 *
 * If the value should ever change based on dependencies, use `React.useMemo` instead.
 *
 * @param initialValue - Initial value, or function to get the initial value. Similar to `useState`,
 * only the value/function passed in the first time this is called is respected.
 * @returns The value. The identity of this value will always be the same.
 */
function useConst(initialValue) {
    // Use useRef to store the value because it's the least expensive built-in hook that works here
    // (we could also use `const [value] = React.useState(initialValue)` but that's more expensive
    // internally due to reducer handling which we don't need)
    var ref = react__WEBPACK_IMPORTED_MODULE_0__["useRef"]();
    if (ref.current === undefined) {
        // Box the value in an object so we can tell if it's initialized even if the initializer
        // returns/is undefined
        ref.current = {
            value: typeof initialValue === 'function' ? initialValue() : initialValue,
        };
    }
    return ref.current.value;
}
//# sourceMappingURL=useConst.js.map

/***/ }),

/***/ "T0Qu":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/utilities/selectableOption/SelectableOption.types.js ***!
  \********************************************************************************************************************************************************************************************************************/
/*! exports provided: SelectableOptionMenuItemType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectableOptionMenuItemType", function() { return SelectableOptionMenuItemType; });
var SelectableOptionMenuItemType;
(function (SelectableOptionMenuItemType) {
    SelectableOptionMenuItemType[SelectableOptionMenuItemType["Normal"] = 0] = "Normal";
    SelectableOptionMenuItemType[SelectableOptionMenuItemType["Divider"] = 1] = "Divider";
    SelectableOptionMenuItemType[SelectableOptionMenuItemType["Header"] = 2] = "Header";
})(SelectableOptionMenuItemType || (SelectableOptionMenuItemType = {}));
//# sourceMappingURL=SelectableOption.types.js.map

/***/ }),

/***/ "TbFi":
/*!*****************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@uifabric/utilities@7.33.2_baa7aab8a1d5d20fe3858de8537800ba/node_modules/@uifabric/utilities/lib/getId.js ***!
  \*****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Loading @uifabric/utilities/./lib/getId.js
var pkg = __webpack_require__(/*! @ms/uifabric-styling-bundle */ "fglE");
module.exports = pkg._Utilities;

/***/ }),

/***/ "Ubdd":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/Layer/Layer.js ***!
  \*****************************************************************************************************************************************************************************************/
/*! exports provided: Layer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Layer", function() { return Layer; });
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Utilities */ "mkpW");
/* harmony import */ var _Layer_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Layer.base */ "Ao4p");
/* harmony import */ var _Layer_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Layer.styles */ "KQ3P");



var Layer = Object(_Utilities__WEBPACK_IMPORTED_MODULE_0__["styled"])(_Layer_base__WEBPACK_IMPORTED_MODULE_1__["LayerBase"], _Layer_styles__WEBPACK_IMPORTED_MODULE_2__["getStyles"], undefined, {
    scope: 'Layer',
    fields: ['hostId', 'theme', 'styles'],
});
//# sourceMappingURL=Layer.js.map

/***/ }),

/***/ "V7Tt":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/Layer/Layer.notification.js ***!
  \******************************************************************************************************************************************************************************************************/
/*! exports provided: registerLayer, unregisterLayer, notifyHostChanged, setDefaultTarget, getDefaultTarget */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerLayer", function() { return registerLayer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unregisterLayer", function() { return unregisterLayer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "notifyHostChanged", function() { return notifyHostChanged; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setDefaultTarget", function() { return setDefaultTarget; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDefaultTarget", function() { return getDefaultTarget; });
var _layersByHostId = {};
var _defaultHostSelector;
/**
 * Register a layer for a given host id
 * @param hostId Id of the layer host
 * @param layer Layer instance
 */
function registerLayer(hostId, callback) {
    if (!_layersByHostId[hostId]) {
        _layersByHostId[hostId] = [];
    }
    _layersByHostId[hostId].push(callback);
}
/**
 * Unregister a layer for a given host id
 * @param hostId Id of the layer host
 * @param layer Layer instance
 */
function unregisterLayer(hostId, callback) {
    if (_layersByHostId[hostId]) {
        var idx = _layersByHostId[hostId].indexOf(callback);
        if (idx >= 0) {
            _layersByHostId[hostId].splice(idx, 1);
            if (_layersByHostId[hostId].length === 0) {
                delete _layersByHostId[hostId];
            }
        }
    }
}
/**
 * Used for notifying applicable Layers that a host is available/unavailable and to re-evaluate Layers that
 * care about the specific host.
 */
function notifyHostChanged(id) {
    if (_layersByHostId[id]) {
        _layersByHostId[id].forEach(function (callback) { return callback(); });
    }
}
/**
 * Sets the default target selector to use when determining the host in which
 * Layered content will be injected into. If not provided, an element will be
 * created at the end of the document body.
 *
 * Passing in a falsey value will clear the default target and reset back to
 * using a created element at the end of document body.
 */
function setDefaultTarget(selector) {
    _defaultHostSelector = selector;
}
/**
 * Get the default target selector when determining a host
 */
function getDefaultTarget() {
    return _defaultHostSelector;
}
//# sourceMappingURL=Layer.notification.js.map

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

/***/ "XefD":
/*!************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/Slider/Slider.base.js ***!
  \************************************************************************************************************************************************************************************************/
/*! exports provided: ONKEYDOWN_TIMEOUT_DURATION, SliderBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ONKEYDOWN_TIMEOUT_DURATION", function() { return ONKEYDOWN_TIMEOUT_DURATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SliderBase", function() { return SliderBase; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Utilities */ "mkpW");
/* harmony import */ var _Label__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Label */ "wMNn");





var getClassNames = Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["classNamesFunction"])();
var COMPONENT_NAME = 'SliderBase';
var ONKEYDOWN_TIMEOUT_DURATION = 1000;
var SliderBase = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(SliderBase, _super);
    function SliderBase(props) {
        var _this = _super.call(this, props) || this;
        _this._disposables = [];
        _this._sliderLine = react__WEBPACK_IMPORTED_MODULE_1__["createRef"]();
        _this._thumb = react__WEBPACK_IMPORTED_MODULE_1__["createRef"]();
        _this._onKeyDownTimer = -1;
        _this._getAriaValueText = function (value) {
            var ariaValueText = _this.props.ariaValueText;
            if (value !== undefined) {
                return ariaValueText ? ariaValueText(value) : value.toString();
            }
            return undefined;
        };
        _this._onMouseDownOrTouchStart = function (event) {
            if (event.type === 'mousedown') {
                _this._disposables.push(Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["on"])(window, 'mousemove', _this._onMouseMoveOrTouchMove, true), Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["on"])(window, 'mouseup', _this._onMouseUpOrTouchEnd, true));
            }
            else if (event.type === 'touchstart') {
                _this._disposables.push(Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["on"])(window, 'touchmove', _this._onMouseMoveOrTouchMove, true), Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["on"])(window, 'touchend', _this._onMouseUpOrTouchEnd, true));
            }
            _this._onMouseMoveOrTouchMove(event, true);
        };
        _this._onMouseMoveOrTouchMove = function (event, suppressEventCancelation) {
            if (!_this._sliderLine.current) {
                return;
            }
            var _a = _this.props, max = _a.max, min = _a.min, step = _a.step;
            var steps = (max - min) / step;
            var sliderPositionRect = _this._sliderLine.current.getBoundingClientRect();
            var sliderLength = !_this.props.vertical ? sliderPositionRect.width : sliderPositionRect.height;
            var stepLength = sliderLength / steps;
            var currentSteps;
            var distance;
            if (!_this.props.vertical) {
                var left = _this._getPosition(event, _this.props.vertical);
                distance = Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["getRTL"])(_this.props.theme) ? sliderPositionRect.right - left : left - sliderPositionRect.left;
                currentSteps = distance / stepLength;
            }
            else {
                var bottom = _this._getPosition(event, _this.props.vertical);
                distance = sliderPositionRect.bottom - bottom;
                currentSteps = distance / stepLength;
            }
            var currentValue;
            var renderedValue;
            // The value shouldn't be bigger than max or be smaller than min.
            if (currentSteps > Math.floor(steps)) {
                renderedValue = currentValue = max;
            }
            else if (currentSteps < 0) {
                renderedValue = currentValue = min;
            }
            else {
                renderedValue = min + step * currentSteps;
                currentValue = min + step * Math.round(currentSteps);
            }
            _this._updateValue(currentValue, renderedValue);
            if (!suppressEventCancelation) {
                event.preventDefault();
                event.stopPropagation();
            }
        };
        _this._onMouseUpOrTouchEnd = function (event) {
            // Disable renderedValue override.
            _this.setState({
                renderedValue: undefined,
            });
            if (_this.props.onChanged) {
                _this.props.onChanged(event, _this.state.value);
            }
            _this._disposeListeners();
        };
        _this._disposeListeners = function () {
            _this._disposables.forEach(function (dispose) { return dispose(); });
            _this._disposables = [];
        };
        _this._onKeyDown = function (event) {
            var value = _this.state.value;
            var _a = _this.props, max = _a.max, min = _a.min, step = _a.step;
            var diff = 0;
            // eslint-disable-next-line deprecation/deprecation
            switch (event.which) {
                case Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["getRTLSafeKeyCode"])(_Utilities__WEBPACK_IMPORTED_MODULE_2__["KeyCodes"].left, _this.props.theme):
                case _Utilities__WEBPACK_IMPORTED_MODULE_2__["KeyCodes"].down:
                    diff = -step;
                    _this._clearOnKeyDownTimer();
                    _this._setOnKeyDownTimer(event);
                    break;
                case Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["getRTLSafeKeyCode"])(_Utilities__WEBPACK_IMPORTED_MODULE_2__["KeyCodes"].right, _this.props.theme):
                case _Utilities__WEBPACK_IMPORTED_MODULE_2__["KeyCodes"].up:
                    diff = step;
                    _this._clearOnKeyDownTimer();
                    _this._setOnKeyDownTimer(event);
                    break;
                case _Utilities__WEBPACK_IMPORTED_MODULE_2__["KeyCodes"].home:
                    value = min;
                    break;
                case _Utilities__WEBPACK_IMPORTED_MODULE_2__["KeyCodes"].end:
                    value = max;
                    break;
                default:
                    return;
            }
            var newValue = Math.min(max, Math.max(min, value + diff));
            _this._updateValue(newValue, newValue);
            event.preventDefault();
            event.stopPropagation();
        };
        _this._clearOnKeyDownTimer = function () {
            _this._async.clearTimeout(_this._onKeyDownTimer);
        };
        _this._setOnKeyDownTimer = function (event) {
            _this._onKeyDownTimer = _this._async.setTimeout(function () {
                if (_this.props.onChanged) {
                    _this.props.onChanged(event, _this.state.value);
                }
            }, ONKEYDOWN_TIMEOUT_DURATION);
        };
        _this._async = new _Utilities__WEBPACK_IMPORTED_MODULE_2__["Async"](_this);
        Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["initializeComponentRef"])(_this);
        Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["warnMutuallyExclusive"])(COMPONENT_NAME, _this.props, {
            value: 'defaultValue',
        });
        _this._id = Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["getId"])('Slider');
        var value = props.value !== undefined ? props.value : props.defaultValue !== undefined ? props.defaultValue : props.min;
        _this.state = {
            value: value,
            renderedValue: undefined,
        };
        return _this;
    }
    SliderBase.prototype.componentWillUnmount = function () {
        this._async.dispose();
        this._disposeListeners();
    };
    SliderBase.prototype.render = function () {
        var _a, _b, _c, _d, _e;
        var _f = this.props, ariaLabel = _f.ariaLabel, className = _f.className, disabled = _f.disabled, label = _f.label, max = _f.max, min = _f.min, showValue = _f.showValue, buttonProps = _f.buttonProps, vertical = _f.vertical, valueFormat = _f.valueFormat, styles = _f.styles, theme = _f.theme, originFromZero = _f.originFromZero;
        var value = this.value;
        var renderedValue = this.renderedValue;
        var thumbOffsetPercent = min === max ? 0 : ((renderedValue - min) / (max - min)) * 100;
        var zeroOffsetPercent = min >= 0 ? 0 : (-min / (max - min)) * 100;
        var lengthString = vertical ? 'height' : 'width';
        var onMouseDownProp = disabled ? {} : { onMouseDown: this._onMouseDownOrTouchStart };
        var onTouchStartProp = disabled ? {} : { onTouchStart: this._onMouseDownOrTouchStart };
        var onKeyDownProp = disabled ? {} : { onKeyDown: this._onKeyDown };
        var classNames = getClassNames(styles, {
            className: className,
            disabled: disabled,
            vertical: vertical,
            showTransitions: renderedValue === value,
            showValue: showValue,
            theme: theme,
        });
        var divButtonProps = buttonProps
            ? Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["getNativeProps"])(buttonProps, _Utilities__WEBPACK_IMPORTED_MODULE_2__["divProperties"])
            : undefined;
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: classNames.root },
            label && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Label__WEBPACK_IMPORTED_MODULE_3__["Label"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ className: classNames.titleLabel }, (ariaLabel ? {} : { htmlFor: this._id }), { disabled: disabled }), label)),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: classNames.container },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ id: this._id, "aria-valuenow": value, "aria-valuemin": min, "aria-valuemax": max, "aria-valuetext": this._getAriaValueText(value), "aria-label": ariaLabel || label, "aria-disabled": disabled }, onMouseDownProp, onTouchStartProp, onKeyDownProp, divButtonProps, { className: Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["css"])(classNames.slideBox, buttonProps.className), role: "slider", tabIndex: disabled ? undefined : 0, "data-is-focusable": !disabled }),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { ref: this._sliderLine, className: classNames.line },
                        originFromZero && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", { className: Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["css"])(classNames.zeroTick), style: this._getStyleUsingOffsetPercent(vertical, zeroOffsetPercent) })),
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", { ref: this._thumb, className: classNames.thumb, style: this._getStyleUsingOffsetPercent(vertical, thumbOffsetPercent) }),
                        originFromZero ? (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null,
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", { className: Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["css"])(classNames.lineContainer, classNames.inactiveSection), style: (_a = {}, _a[lengthString] = Math.min(thumbOffsetPercent, zeroOffsetPercent) + '%', _a) }),
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", { className: Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["css"])(classNames.lineContainer, classNames.activeSection), style: (_b = {}, _b[lengthString] = Math.abs(zeroOffsetPercent - thumbOffsetPercent) + '%', _b) }),
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", { className: Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["css"])(classNames.lineContainer, classNames.inactiveSection), style: (_c = {}, _c[lengthString] = Math.min(100 - thumbOffsetPercent, 100 - zeroOffsetPercent) + '%', _c) }))) : (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null,
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", { className: Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["css"])(classNames.lineContainer, classNames.activeSection), style: (_d = {}, _d[lengthString] = thumbOffsetPercent + '%', _d) }),
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", { className: Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["css"])(classNames.lineContainer, classNames.inactiveSection), style: (_e = {}, _e[lengthString] = 100 - thumbOffsetPercent + '%', _e) }))))),
                showValue && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Label__WEBPACK_IMPORTED_MODULE_3__["Label"], { className: classNames.valueLabel, disabled: disabled }, valueFormat ? valueFormat(value) : value))),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Utilities__WEBPACK_IMPORTED_MODULE_2__["FocusRects"], null)));
    };
    SliderBase.prototype.focus = function () {
        if (this._thumb.current) {
            this._thumb.current.focus();
        }
    };
    Object.defineProperty(SliderBase.prototype, "value", {
        get: function () {
            var _a = this.props.value, value = _a === void 0 ? this.state.value : _a;
            if (this.props.min === undefined || this.props.max === undefined || value === undefined) {
                return undefined;
            }
            else {
                return Math.max(this.props.min, Math.min(this.props.max, value));
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SliderBase.prototype, "renderedValue", {
        get: function () {
            // renderedValue is expected to be defined while user is interacting with control, otherwise `undefined`.
            // Fall back to `value`.
            var _a = this.state.renderedValue, renderedValue = _a === void 0 ? this.value : _a;
            return renderedValue;
        },
        enumerable: true,
        configurable: true
    });
    SliderBase.prototype._getStyleUsingOffsetPercent = function (vertical, thumbOffsetPercent) {
        var _a;
        var direction = vertical ? 'bottom' : Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["getRTL"])(this.props.theme) ? 'right' : 'left';
        return _a = {},
            _a[direction] = thumbOffsetPercent + '%',
            _a;
    };
    SliderBase.prototype._getPosition = function (event, vertical) {
        var currentPosition;
        switch (event.type) {
            case 'mousedown':
            case 'mousemove':
                currentPosition = !vertical ? event.clientX : event.clientY;
                break;
            case 'touchstart':
            case 'touchmove':
                currentPosition = !vertical
                    ? event.touches[0].clientX
                    : event.touches[0].clientY;
                break;
        }
        return currentPosition;
    };
    SliderBase.prototype._updateValue = function (value, renderedValue) {
        var _this = this;
        var _a = this.props, step = _a.step, snapToStep = _a.snapToStep;
        var numDec = 0;
        if (isFinite(step)) {
            while (Math.round(step * Math.pow(10, numDec)) / Math.pow(10, numDec) !== step) {
                numDec++;
            }
        }
        // Make sure value has correct number of decimal places based on number of decimals in step
        var roundedValue = parseFloat(value.toFixed(numDec));
        var valueChanged = roundedValue !== this.state.value;
        if (snapToStep) {
            renderedValue = roundedValue;
        }
        this.setState({
            value: roundedValue,
            renderedValue: renderedValue,
        }, function () {
            if (valueChanged && _this.props.onChange) {
                _this.props.onChange(_this.state.value);
            }
        });
    };
    SliderBase.defaultProps = {
        step: 1,
        min: 0,
        max: 10,
        showValue: true,
        disabled: false,
        vertical: false,
        buttonProps: {},
        originFromZero: false,
    };
    return SliderBase;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));

//# sourceMappingURL=Slider.base.js.map

/***/ }),

/***/ "YHiq":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/Toggle/Toggle.js ***!
  \*******************************************************************************************************************************************************************************************/
/*! exports provided: Toggle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Toggle", function() { return Toggle; });
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Utilities */ "mkpW");
/* harmony import */ var _Toggle_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Toggle.base */ "LGYR");
/* harmony import */ var _Toggle_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Toggle.styles */ "14YZ");



var Toggle = Object(_Utilities__WEBPACK_IMPORTED_MODULE_0__["styled"])(_Toggle_base__WEBPACK_IMPORTED_MODULE_1__["ToggleBase"], _Toggle_styles__WEBPACK_IMPORTED_MODULE_2__["getStyles"], undefined, { scope: 'Toggle' });
//# sourceMappingURL=Toggle.js.map

/***/ }),

/***/ "YZp6":
/*!************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/Layer.js ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: Layer, LayerBase, LayerHost */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _version__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./version */ "hwCN");
/* harmony import */ var _components_Layer_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Layer/index */ "ehuN");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Layer", function() { return _components_Layer_index__WEBPACK_IMPORTED_MODULE_1__["Layer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LayerBase", function() { return _components_Layer_index__WEBPACK_IMPORTED_MODULE_1__["LayerBase"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LayerHost", function() { return _components_Layer_index__WEBPACK_IMPORTED_MODULE_1__["LayerHost"]; });



//# sourceMappingURL=Layer.js.map

/***/ }),

/***/ "Z+WF":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/utilities/selectableOption/SelectableOption.js ***!
  \**************************************************************************************************************************************************************************************************************/
/*! exports provided: getAllSelectedOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllSelectedOptions", function() { return getAllSelectedOptions; });
function getAllSelectedOptions(options, selectedIndices) {
    var selectedOptions = [];
    for (var _i = 0, selectedIndices_1 = selectedIndices; _i < selectedIndices_1.length; _i++) {
        var index = selectedIndices_1[_i];
        var option = options[index];
        if (option) {
            selectedOptions.push(option);
        }
    }
    return selectedOptions;
}
//# sourceMappingURL=SelectableOption.js.map

/***/ }),

/***/ "Z1Bs":
/*!******************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@uifabric/react-hooks@7.13.9_c129be21209ec549b9ba61bf76d54bcc/node_modules/@uifabric/react-hooks/lib/useForceUpdate.js ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: useForceUpdate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useForceUpdate", function() { return useForceUpdate; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useConst__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useConst */ "SKm6");


/**
 * Hook to force update a function component by updating a dummy state.
 */
function useForceUpdate() {
    var _a = react__WEBPACK_IMPORTED_MODULE_0__["useState"](0), setValue = _a[1];
    var forceUpdate = Object(_useConst__WEBPACK_IMPORTED_MODULE_1__["useConst"])(function () { return function () { return setValue(function (value) { return ++value; }); }; });
    return forceUpdate;
}
//# sourceMappingURL=useForceUpdate.js.map

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

/***/ "aBU9":
/*!***************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@uifabric/react-hooks@7.13.9_c129be21209ec549b9ba61bf76d54bcc/node_modules/@uifabric/react-hooks/lib/usePrevious.js ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: usePrevious */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "usePrevious", function() { return usePrevious; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/**
 * Hook keeping track of a given value from a previous execution of the component the Hook is used in.
 *
 * See [React Hooks FAQ](https://reactjs.org/docs/hooks-faq.html#how-to-get-the-previous-props-or-state)
 */
function usePrevious(value) {
    var ref = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        ref.current = value;
    });
    return ref.current;
}
//# sourceMappingURL=usePrevious.js.map

/***/ }),

/***/ "cB7q":
/*!****************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@uifabric/react-hooks@7.13.9_c129be21209ec549b9ba61bf76d54bcc/node_modules/@uifabric/react-hooks/lib/useRefEffect.js ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: useRefEffect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useRefEffect", function() { return useRefEffect; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/**
 * Creates a ref, and calls a callback whenever the ref changes to a non-null value. The callback can optionally return
 * a cleanup function that'll be called before the value changes, and when the ref is unmounted.
 *
 * This can be used to work around a limitation that useEffect cannot depend on `ref.current` (see
 * https://github.com/facebook/react/issues/14387#issuecomment-503616820).
 *
 * Usage example:
 * ```ts
 * const myRef = useRefEffect<HTMLElement>(element => {
 *  ...
 *  return () => { ... cleanup ... };
 * });
 * ```
 * ```jsx
 * <div ref={myRef} />
 * ```
 *
 * @param callback - Called whenever the ref's value changes to non-null. Can optionally return a cleanup function.
 * @param initial - (Optional) The initial value for the ref.
 *
 * @returns A function that should be called to set the ref's value. The object also has a `.current` member that can be
 * used to access the ref's value (like a normal RefObject). It can be hooked up to an element's `ref` property.
 */
function useRefEffect(callback, initial) {
    if (initial === void 0) { initial = null; }
    var data = react__WEBPACK_IMPORTED_MODULE_0__["useRef"]({
        ref: Object.assign(function (value) {
            if (data.ref.current !== value) {
                if (data.cleanup) {
                    data.cleanup();
                    data.cleanup = undefined;
                }
                data.ref.current = value;
                if (value !== null) {
                    data.cleanup = data.callback(value);
                }
            }
        }, {
            current: initial,
        }),
        callback: callback,
    }).current;
    data.callback = callback;
    return data.ref;
}
//# sourceMappingURL=useRefEffect.js.map

/***/ }),

/***/ "ceOo":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/utilities/positioning/positioning.types.js ***!
  \**********************************************************************************************************************************************************************************************************/
/*! exports provided: RectangleEdge, Position */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RectangleEdge", function() { return RectangleEdge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Position", function() { return Position; });
var RectangleEdge;
(function (RectangleEdge) {
    RectangleEdge[RectangleEdge["top"] = 1] = "top";
    RectangleEdge[RectangleEdge["bottom"] = -1] = "bottom";
    RectangleEdge[RectangleEdge["left"] = 2] = "left";
    RectangleEdge[RectangleEdge["right"] = -2] = "right";
})(RectangleEdge || (RectangleEdge = {}));
var Position;
(function (Position) {
    Position[Position["top"] = 0] = "top";
    Position[Position["bottom"] = 1] = "bottom";
    Position[Position["start"] = 2] = "start";
    Position[Position["end"] = 3] = "end";
})(Position || (Position = {}));
//# sourceMappingURL=positioning.types.js.map

/***/ }),

/***/ "cuTR":
/*!*********************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@uifabric/react-hooks@7.13.9_c129be21209ec549b9ba61bf76d54bcc/node_modules/@uifabric/react-hooks/lib/useId.js ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: useId */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useId", function() { return useId; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _uifabric_utilities_lib_getId__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @uifabric/utilities/lib/getId */ "TbFi");
/* harmony import */ var _uifabric_utilities_lib_getId__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_uifabric_utilities_lib_getId__WEBPACK_IMPORTED_MODULE_1__);


/**
 * Hook to generate a unique ID in the global scope (spanning across duplicate copies of the same library).
 *
 * @param prefix - Optional prefix for the ID
 * @param providedId - Optional id provided by a parent component. Defaults to the provided value if present,
 *  without conditioning the hook call
 * @returns The ID
 */
function useId(prefix, providedId) {
    // getId should only be called once since it updates the global constant for the next ID value.
    // (While an extra update isn't likely to cause problems in practice, it's better to avoid it.)
    var ref = react__WEBPACK_IMPORTED_MODULE_0__["useRef"](providedId);
    if (!ref.current) {
        ref.current = Object(_uifabric_utilities_lib_getId__WEBPACK_IMPORTED_MODULE_1__["getId"])(prefix);
    }
    return ref.current;
}
//# sourceMappingURL=useId.js.map

/***/ }),

/***/ "da6v":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/Dropdown/Dropdown.js ***!
  \***********************************************************************************************************************************************************************************************/
/*! exports provided: Dropdown */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dropdown", function() { return Dropdown; });
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Utilities */ "mkpW");
/* harmony import */ var _Dropdown_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Dropdown.base */ "izLr");
/* harmony import */ var _Dropdown_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Dropdown.styles */ "NIwH");



var Dropdown = Object(_Utilities__WEBPACK_IMPORTED_MODULE_0__["styled"])(_Dropdown_base__WEBPACK_IMPORTED_MODULE_1__["DropdownBase"], _Dropdown_styles__WEBPACK_IMPORTED_MODULE_2__["getStyles"], undefined, {
    scope: 'Dropdown',
});
//# sourceMappingURL=Dropdown.js.map

/***/ }),

/***/ "ec2d":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/Slider/Slider.js ***!
  \*******************************************************************************************************************************************************************************************/
/*! exports provided: Slider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Slider", function() { return Slider; });
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Utilities */ "mkpW");
/* harmony import */ var _Slider_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Slider.base */ "XefD");
/* harmony import */ var _Slider_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Slider.styles */ "/0Xw");



var Slider = Object(_Utilities__WEBPACK_IMPORTED_MODULE_0__["styled"])(_Slider_base__WEBPACK_IMPORTED_MODULE_1__["SliderBase"], _Slider_styles__WEBPACK_IMPORTED_MODULE_2__["getStyles"], undefined, {
    scope: 'Slider',
});
//# sourceMappingURL=Slider.js.map

/***/ }),

/***/ "ehuN":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/Layer/index.js ***!
  \*****************************************************************************************************************************************************************************************/
/*! exports provided: Layer, LayerBase, LayerHost */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Layer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Layer */ "Ubdd");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Layer", function() { return _Layer__WEBPACK_IMPORTED_MODULE_0__["Layer"]; });

/* harmony import */ var _Layer_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Layer.base */ "Ao4p");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LayerBase", function() { return _Layer_base__WEBPACK_IMPORTED_MODULE_1__["LayerBase"]; });

/* harmony import */ var _LayerHost__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LayerHost */ "Ea+4");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LayerHost", function() { return _LayerHost__WEBPACK_IMPORTED_MODULE_2__["LayerHost"]; });




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

/***/ "gLqG":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/utilities/keytips/KeytipConstants.js ***!
  \****************************************************************************************************************************************************************************************************/
/*! exports provided: KTP_PREFIX, KTP_SEPARATOR, KTP_FULL_PREFIX, DATAKTP_TARGET, DATAKTP_EXECUTE_TARGET, DATAKTP_ARIA_TARGET, KTP_LAYER_ID, KTP_ARIA_SEPARATOR, KeytipEvents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KTP_PREFIX", function() { return KTP_PREFIX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KTP_SEPARATOR", function() { return KTP_SEPARATOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KTP_FULL_PREFIX", function() { return KTP_FULL_PREFIX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DATAKTP_TARGET", function() { return DATAKTP_TARGET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DATAKTP_EXECUTE_TARGET", function() { return DATAKTP_EXECUTE_TARGET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DATAKTP_ARIA_TARGET", function() { return DATAKTP_ARIA_TARGET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KTP_LAYER_ID", function() { return KTP_LAYER_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KTP_ARIA_SEPARATOR", function() { return KTP_ARIA_SEPARATOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeytipEvents", function() { return KeytipEvents; });
var KTP_PREFIX = 'ktp';
var KTP_SEPARATOR = '-';
var KTP_FULL_PREFIX = KTP_PREFIX + KTP_SEPARATOR;
var DATAKTP_TARGET = 'data-ktp-target';
var DATAKTP_EXECUTE_TARGET = 'data-ktp-execute-target';
var DATAKTP_ARIA_TARGET = 'data-ktp-aria-target';
var KTP_LAYER_ID = 'ktp-layer-id';
var KTP_ARIA_SEPARATOR = ', ';
// Events
var KeytipEvents;
(function (KeytipEvents) {
    KeytipEvents.KEYTIP_ADDED = 'keytipAdded';
    KeytipEvents.KEYTIP_REMOVED = 'keytipRemoved';
    KeytipEvents.KEYTIP_UPDATED = 'keytipUpdated';
    KeytipEvents.PERSISTED_KEYTIP_ADDED = 'persistedKeytipAdded';
    KeytipEvents.PERSISTED_KEYTIP_REMOVED = 'persistedKeytipRemoved';
    KeytipEvents.PERSISTED_KEYTIP_EXECUTE = 'persistedKeytipExecute';
    KeytipEvents.ENTER_KEYTIP_MODE = 'enterKeytipMode';
    KeytipEvents.EXIT_KEYTIP_MODE = 'exitKeytipMode';
})(KeytipEvents || (KeytipEvents = {}));
//# sourceMappingURL=KeytipConstants.js.map

/***/ }),

/***/ "gdZc":
/*!****************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/utilities/positioning.js ***!
  \****************************************************************************************************************************************************************************************/
/*! exports provided: getBoundsFromTargetWindow, getMaxHeight, getOppositeEdge, positionCallout, positionCard, positionElement, RectangleEdge, Position */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _positioning_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./positioning/index */ "5v4J");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getBoundsFromTargetWindow", function() { return _positioning_index__WEBPACK_IMPORTED_MODULE_0__["getBoundsFromTargetWindow"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getMaxHeight", function() { return _positioning_index__WEBPACK_IMPORTED_MODULE_0__["getMaxHeight"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getOppositeEdge", function() { return _positioning_index__WEBPACK_IMPORTED_MODULE_0__["getOppositeEdge"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "positionCallout", function() { return _positioning_index__WEBPACK_IMPORTED_MODULE_0__["positionCallout"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "positionCard", function() { return _positioning_index__WEBPACK_IMPORTED_MODULE_0__["positionCard"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "positionElement", function() { return _positioning_index__WEBPACK_IMPORTED_MODULE_0__["positionElement"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RectangleEdge", function() { return _positioning_index__WEBPACK_IMPORTED_MODULE_0__["RectangleEdge"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Position", function() { return _positioning_index__WEBPACK_IMPORTED_MODULE_0__["Position"]; });


//# sourceMappingURL=positioning.js.map

/***/ }),

/***/ "guqf":
/*!*****************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@uifabric/set-version@7.0.23/node_modules/@uifabric/set-version/lib/setVersion.js ***!
  \*****************************************************************************************************************************************/
/*! exports provided: setVersion */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setVersion", function() { return setVersion; });
// A packages cache that makes sure that we don't inject the same packageName twice in the same bundle -
// this cache is local to the module closure inside this bundle
var packagesCache = {};
// Cache access to window to avoid IE11 memory leak.
var _win = undefined;
try {
    _win = window;
}
catch (e) {
    /* no-op */
}
function setVersion(packageName, packageVersion) {
    if (typeof _win !== 'undefined') {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        var packages = (_win.__packages__ = _win.__packages__ || {});
        // We allow either the global packages or local packages caches to invalidate so testing can
        // just clear the global to set this state
        if (!packages[packageName] || !packagesCache[packageName]) {
            packagesCache[packageName] = packageVersion;
            var versions = (packages[packageName] = packages[packageName] || []);
            versions.push(packageVersion);
        }
    }
}
//# sourceMappingURL=setVersion.js.map

/***/ }),

/***/ "gw9X":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/Checkbox/Checkbox.styles.js ***!
  \******************************************************************************************************************************************************************************************************/
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
    root: 'ms-Checkbox',
    label: 'ms-Checkbox-label',
    checkbox: 'ms-Checkbox-checkbox',
    checkmark: 'ms-Checkbox-checkmark',
    text: 'ms-Checkbox-text',
};
var MS_CHECKBOX_LABEL_SIZE = '20px';
var MS_CHECKBOX_TRANSITION_DURATION = '200ms';
var MS_CHECKBOX_TRANSITION_TIMING = 'cubic-bezier(.4, 0, .23, 1)';
var getStyles = function (props) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t;
    var className = props.className, theme = props.theme, reversed = props.reversed, checked = props.checked, disabled = props.disabled, isUsingCustomLabelRender = props.isUsingCustomLabelRender, indeterminate = props.indeterminate;
    var semanticColors = theme.semanticColors, effects = theme.effects, palette = theme.palette, fonts = theme.fonts;
    var classNames = Object(_Styling__WEBPACK_IMPORTED_MODULE_1__["getGlobalClassNames"])(GlobalClassNames, theme);
    var checkmarkFontColor = semanticColors.inputForegroundChecked;
    // TODO: after updating the semanticColors slots mapping this needs to be semanticColors.inputBorder
    var checkmarkFontColorHovered = palette.neutralSecondary;
    // TODO: after updating the semanticColors slots mapping this needs to be semanticColors.smallInputBorder
    var checkboxBorderColor = palette.neutralPrimary;
    var checkboxBorderIndeterminateColor = semanticColors.inputBackgroundChecked;
    var checkboxBorderColorChecked = semanticColors.inputBackgroundChecked;
    var checkboxBorderColorDisabled = semanticColors.disabledBodySubtext;
    var checkboxBorderHoveredColor = semanticColors.inputBorderHovered;
    var checkboxBorderIndeterminateHoveredColor = semanticColors.inputBackgroundCheckedHovered;
    var checkboxBackgroundChecked = semanticColors.inputBackgroundChecked;
    // TODO: after updating the semanticColors slots mapping the following 2 tokens need to be
    // semanticColors.inputBackgroundCheckedHovered
    var checkboxBackgroundCheckedHovered = semanticColors.inputBackgroundCheckedHovered;
    var checkboxBorderColorCheckedHovered = semanticColors.inputBackgroundCheckedHovered;
    var checkboxHoveredTextColor = semanticColors.inputTextHovered;
    var checkboxBackgroundDisabledChecked = semanticColors.disabledBodySubtext;
    var checkboxTextColor = semanticColors.bodyText;
    var checkboxTextColorDisabled = semanticColors.disabledText;
    var indeterminateDotStyles = [
        (_a = {
                content: '""',
                borderRadius: effects.roundedCorner2,
                position: 'absolute',
                width: 10,
                height: 10,
                top: 4,
                left: 4,
                boxSizing: 'border-box',
                borderWidth: 5,
                borderStyle: 'solid',
                borderColor: disabled ? checkboxBorderColorDisabled : checkboxBorderIndeterminateColor,
                transitionProperty: 'border-width, border, border-color',
                transitionDuration: MS_CHECKBOX_TRANSITION_DURATION,
                transitionTimingFunction: MS_CHECKBOX_TRANSITION_TIMING
            },
            _a[_Styling__WEBPACK_IMPORTED_MODULE_1__["HighContrastSelector"]] = {
                borderColor: 'WindowText',
            },
            _a),
    ];
    return {
        root: [
            classNames.root,
            {
                position: 'relative',
                display: 'flex',
            },
            reversed && 'reversed',
            checked && 'is-checked',
            !disabled && 'is-enabled',
            disabled && 'is-disabled',
            !disabled && [
                !checked && (_b = {},
                    _b[":hover ." + classNames.checkbox] = (_c = {
                            borderColor: checkboxBorderHoveredColor
                        },
                        _c[_Styling__WEBPACK_IMPORTED_MODULE_1__["HighContrastSelector"]] = {
                            borderColor: 'Highlight',
                        },
                        _c),
                    _b[":focus ." + classNames.checkbox] = { borderColor: checkboxBorderHoveredColor },
                    _b[":hover ." + classNames.checkmark] = (_d = {
                            color: checkmarkFontColorHovered,
                            opacity: '1'
                        },
                        _d[_Styling__WEBPACK_IMPORTED_MODULE_1__["HighContrastSelector"]] = {
                            color: 'Highlight',
                        },
                        _d),
                    _b),
                checked &&
                    !indeterminate && (_e = {},
                    _e[":hover ." + classNames.checkbox] = {
                        background: checkboxBackgroundCheckedHovered,
                        borderColor: checkboxBorderColorCheckedHovered,
                    },
                    _e[":focus ." + classNames.checkbox] = {
                        background: checkboxBackgroundCheckedHovered,
                        borderColor: checkboxBorderColorCheckedHovered,
                    },
                    _e[_Styling__WEBPACK_IMPORTED_MODULE_1__["HighContrastSelector"]] = (_f = {},
                        _f[":hover ." + classNames.checkbox] = {
                            background: 'Highlight',
                            borderColor: 'Highlight',
                        },
                        _f[":focus ." + classNames.checkbox] = {
                            background: 'Highlight',
                        },
                        _f[":focus:hover ." + classNames.checkbox] = {
                            background: 'Highlight',
                        },
                        _f[":focus:hover ." + classNames.checkmark] = {
                            color: 'Window',
                        },
                        _f[":hover ." + classNames.checkmark] = {
                            color: 'Window',
                        },
                        _f),
                    _e),
                indeterminate && (_g = {},
                    _g[":hover ." + classNames.checkbox + ", :hover ." + classNames.checkbox + ":after"] = (_h = {
                            borderColor: checkboxBorderIndeterminateHoveredColor
                        },
                        _h[_Styling__WEBPACK_IMPORTED_MODULE_1__["HighContrastSelector"]] = {
                            borderColor: 'WindowText',
                        },
                        _h),
                    _g[":focus ." + classNames.checkbox] = {
                        borderColor: checkboxBorderIndeterminateHoveredColor,
                    },
                    _g[":hover ." + classNames.checkmark] = {
                        opacity: '0',
                    },
                    _g),
                (_j = {},
                    _j[":hover ." + classNames.text + ", :focus ." + classNames.text] = (_k = {
                            color: checkboxHoveredTextColor
                        },
                        _k[_Styling__WEBPACK_IMPORTED_MODULE_1__["HighContrastSelector"]] = {
                            color: disabled ? 'GrayText' : 'WindowText',
                        },
                        _k),
                    _j),
            ],
            className,
        ],
        input: (_l = {
                position: 'absolute',
                background: 'none',
                opacity: 0
            },
            _l["." + _Utilities__WEBPACK_IMPORTED_MODULE_2__["IsFocusVisibleClassName"] + " &:focus + label::before"] = (_m = {
                    outline: '1px solid ' + theme.palette.neutralSecondary,
                    outlineOffset: '2px'
                },
                _m[_Styling__WEBPACK_IMPORTED_MODULE_1__["HighContrastSelector"]] = {
                    outline: '1px solid ActiveBorder',
                },
                _m),
            _l),
        label: [
            classNames.label,
            theme.fonts.medium,
            {
                display: 'flex',
                alignItems: isUsingCustomLabelRender ? 'center' : 'flex-start',
                cursor: disabled ? 'default' : 'pointer',
                position: 'relative',
                userSelect: 'none',
            },
            reversed && {
                flexDirection: 'row-reverse',
                justifyContent: 'flex-end',
            },
            {
                '&::before': {
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 0,
                    content: '""',
                    pointerEvents: 'none',
                },
            },
        ],
        checkbox: [
            classNames.checkbox,
            Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])((_o = { position: 'relative', display: 'flex', flexShrink: 0, alignItems: 'center', justifyContent: 'center', height: MS_CHECKBOX_LABEL_SIZE, width: MS_CHECKBOX_LABEL_SIZE, border: "1px solid " + checkboxBorderColor, borderRadius: effects.roundedCorner2, boxSizing: 'border-box', transitionProperty: 'background, border, border-color', transitionDuration: MS_CHECKBOX_TRANSITION_DURATION, transitionTimingFunction: MS_CHECKBOX_TRANSITION_TIMING, 
                    /* in case the icon is bigger than the box */
                    overflow: 'hidden', ':after': indeterminate ? indeterminateDotStyles : null }, _o[_Styling__WEBPACK_IMPORTED_MODULE_1__["HighContrastSelector"]] = {
                borderColor: 'WindowText',
            }, _o), Object(_Styling__WEBPACK_IMPORTED_MODULE_1__["getEdgeChromiumNoHighContrastAdjustSelector"])()),
            indeterminate && {
                borderColor: checkboxBorderIndeterminateColor,
            },
            !reversed
                ? // This margin on the checkbox is for backwards compat. Notably it has the effect where a customRender
                    // is used, there will be only a 4px margin from checkbox to label. The label by default would have
                    // another 4px margin for a total of 8px margin between checkbox and label. We don't combine the two
                    // (and move it into the text) to not incur a breaking change for everyone using custom render atm.
                    {
                        marginRight: 4,
                    }
                : {
                    marginLeft: 4,
                },
            !disabled &&
                !indeterminate &&
                checked && (_p = {
                    background: checkboxBackgroundChecked,
                    borderColor: checkboxBorderColorChecked
                },
                _p[_Styling__WEBPACK_IMPORTED_MODULE_1__["HighContrastSelector"]] = {
                    background: 'Highlight',
                    borderColor: 'Highlight',
                },
                _p),
            disabled && (_q = {
                    borderColor: checkboxBorderColorDisabled
                },
                _q[_Styling__WEBPACK_IMPORTED_MODULE_1__["HighContrastSelector"]] = {
                    borderColor: 'GrayText',
                },
                _q),
            checked &&
                disabled && (_r = {
                    background: checkboxBackgroundDisabledChecked,
                    borderColor: checkboxBorderColorDisabled
                },
                _r[_Styling__WEBPACK_IMPORTED_MODULE_1__["HighContrastSelector"]] = {
                    background: 'Window',
                },
                _r),
        ],
        checkmark: [
            classNames.checkmark,
            (_s = {
                    opacity: checked ? '1' : '0',
                    color: checkmarkFontColor
                },
                _s[_Styling__WEBPACK_IMPORTED_MODULE_1__["HighContrastSelector"]] = {
                    color: disabled ? 'GrayText' : 'Window',
                    MsHighContrastAdjust: 'none',
                },
                _s),
        ],
        text: [
            classNames.text,
            Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])((_t = { color: disabled ? checkboxTextColorDisabled : checkboxTextColor, fontSize: fonts.medium.fontSize, lineHeight: '20px' }, _t[_Styling__WEBPACK_IMPORTED_MODULE_1__["HighContrastSelector"]] = {
                color: disabled ? 'GrayText' : 'WindowText',
            }, _t), Object(_Styling__WEBPACK_IMPORTED_MODULE_1__["getEdgeChromiumNoHighContrastAdjustSelector"])()),
            !reversed
                ? {
                    marginLeft: 4,
                }
                : {
                    marginRight: 4,
                },
        ],
    };
};
//# sourceMappingURL=Checkbox.styles.js.map

/***/ }),

/***/ "hYye":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/SpinButton/SpinButton.js ***!
  \***************************************************************************************************************************************************************************************************/
/*! exports provided: KeyboardSpinDirection, SpinButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeyboardSpinDirection", function() { return KeyboardSpinDirection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpinButton", function() { return SpinButton; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Button */ "epn0");
/* harmony import */ var _Label__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Label */ "wMNn");
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Icon */ "56LG");
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Icon__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Utilities */ "mkpW");
/* harmony import */ var _utilities_positioning__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utilities/positioning */ "gdZc");
/* harmony import */ var _SpinButton_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./SpinButton.styles */ "vVt9");
/* harmony import */ var _SpinButton_classNames__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./SpinButton.classNames */ "jBk9");
/* harmony import */ var _KeytipData__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../KeytipData */ "iaSa");










var KeyboardSpinDirection;
(function (KeyboardSpinDirection) {
    KeyboardSpinDirection[KeyboardSpinDirection["down"] = -1] = "down";
    KeyboardSpinDirection[KeyboardSpinDirection["notSpinning"] = 0] = "notSpinning";
    KeyboardSpinDirection[KeyboardSpinDirection["up"] = 1] = "up";
})(KeyboardSpinDirection || (KeyboardSpinDirection = {}));
var SpinButton = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(SpinButton, _super);
    function SpinButton(props) {
        var _this = _super.call(this, props) || this;
        _this._input = react__WEBPACK_IMPORTED_MODULE_1__["createRef"]();
        _this._initialStepDelay = 400;
        _this._stepDelay = 75;
        _this._onFocus = function (ev) {
            // We can't set focus on a non-existing element
            if (!_this._input.current) {
                return;
            }
            if (_this._spinningByMouse || _this.state.keyboardSpinDirection !== KeyboardSpinDirection.notSpinning) {
                _this._stop();
            }
            _this._input.current.select();
            _this.setState({ isFocused: true });
            if (_this.props.onFocus) {
                _this.props.onFocus(ev);
            }
        };
        _this._onBlur = function (ev) {
            _this._validate(ev);
            _this.setState({ isFocused: false });
            if (_this.props.onBlur) {
                _this.props.onBlur(ev);
            }
        };
        _this._onValidate = function (value, event) {
            if (_this.props.onValidate) {
                return _this.props.onValidate(value, event);
            }
            else {
                return _this._defaultOnValidate(value);
            }
        };
        _this._calculatePrecision = function (props) {
            var _a = props.precision, precision = _a === void 0 ? Math.max(Object(_Utilities__WEBPACK_IMPORTED_MODULE_5__["calculatePrecision"])(props.step), 0) : _a;
            return precision;
        };
        /**
         * Validate function to use if one is not passed in
         */
        _this._defaultOnValidate = function (value) {
            if (value === null || value.trim().length === 0 || isNaN(Number(value))) {
                return _this._lastValidValue;
            }
            var newValue = Math.min(_this.props.max, Math.max(_this.props.min, Number(value)));
            return String(newValue);
        };
        _this._onIncrement = function (value, event) {
            if (_this.props.onIncrement) {
                return _this.props.onIncrement(value, event);
            }
            else {
                return _this._defaultOnIncrement(value);
            }
        };
        /**
         * Increment function to use if one is not passed in
         */
        _this._defaultOnIncrement = function (value) {
            var _a = _this.props, max = _a.max, step = _a.step;
            var newValue = Math.min(Number(value) + Number(step), max);
            newValue = Object(_Utilities__WEBPACK_IMPORTED_MODULE_5__["precisionRound"])(newValue, _this._precision);
            return String(newValue);
        };
        _this._onDecrement = function (value, event) {
            if (_this.props.onDecrement) {
                return _this.props.onDecrement(value, event);
            }
            else {
                return _this._defaultOnDecrement(value);
            }
        };
        /**
         * Increment function to use if one is not passed in
         */
        _this._defaultOnDecrement = function (value) {
            var _a = _this.props, min = _a.min, step = _a.step;
            var newValue = Math.max(Number(value) - Number(step), min);
            newValue = Object(_Utilities__WEBPACK_IMPORTED_MODULE_5__["precisionRound"])(newValue, _this._precision);
            return String(newValue);
        };
        /**
         * This is used when validating text entry in the input on blur or when enter key is pressed
         * (not when changed via the buttons).
         * @param event - the event that fired
         */
        _this._validate = function (event) {
            if (_this.value !== undefined &&
                _this._valueToValidate !== undefined &&
                _this._valueToValidate !== _this._lastValidValue) {
                var newValue = _this._onValidate(_this._valueToValidate, event);
                // Done validating this value, so clear it
                _this._valueToValidate = undefined;
                if (newValue !== undefined) {
                    _this._lastValidValue = newValue;
                    _this.setState({ value: newValue });
                }
                else {
                    // Value was invalid. Reset state to last valid value.
                    _this.setState({ value: _this._lastValidValue });
                }
            }
        };
        /**
         * The method is needed to ensure we are updating the actual input value.
         * without this our value will never change (and validation will not have the correct number)
         * @param event - the event that was fired
         */
        _this._onInputChange = function (event) {
            var element = event.target;
            var value = element.value;
            _this._valueToValidate = value;
            _this.setState({
                value: value,
            });
        };
        /**
         * Update the value with the given stepFunction
         * @param shouldSpin - should we fire off another updateValue when we are done here? This should be true
         * when spinning in response to a mouseDown
         * @param stepFunction - function to use to step by
         * @param event - The event that triggered the updateValue
         */
        _this._updateValue = function (shouldSpin, stepDelay, stepFunction, event) {
            var newValue = stepFunction(_this.value || '', event);
            if (newValue !== undefined) {
                _this._lastValidValue = newValue;
                _this.setState({ value: newValue });
            }
            if (_this._spinningByMouse !== shouldSpin) {
                _this._spinningByMouse = shouldSpin;
            }
            if (shouldSpin) {
                _this._currentStepFunctionHandle = _this._async.setTimeout(function () {
                    _this._updateValue(shouldSpin, _this._stepDelay, stepFunction, event);
                }, stepDelay);
            }
        };
        /**
         * Stop spinning (clear any currently pending update and set spinning to false)
         */
        _this._stop = function () {
            if (_this._currentStepFunctionHandle >= 0) {
                _this._async.clearTimeout(_this._currentStepFunctionHandle);
                _this._currentStepFunctionHandle = -1;
            }
            if (_this._spinningByMouse || _this.state.keyboardSpinDirection !== KeyboardSpinDirection.notSpinning) {
                _this._spinningByMouse = false;
                _this.setState({ keyboardSpinDirection: KeyboardSpinDirection.notSpinning });
            }
        };
        /**
         * Handle keydown on the text field. We need to update
         * the value when up or down arrow are depressed
         * @param event - the keyboardEvent that was fired
         */
        _this._handleKeyDown = function (event) {
            // eat the up and down arrow keys to keep focus in the spinButton
            // (especially when a spinButton is inside of a FocusZone)
            if (event.which === _Utilities__WEBPACK_IMPORTED_MODULE_5__["KeyCodes"].up || event.which === _Utilities__WEBPACK_IMPORTED_MODULE_5__["KeyCodes"].down || event.which === _Utilities__WEBPACK_IMPORTED_MODULE_5__["KeyCodes"].enter) {
                event.preventDefault();
                event.stopPropagation();
            }
            if (_this.props.disabled) {
                _this._stop();
                return;
            }
            var spinDirection = KeyboardSpinDirection.notSpinning;
            switch (event.which) {
                case _Utilities__WEBPACK_IMPORTED_MODULE_5__["KeyCodes"].up:
                    spinDirection = KeyboardSpinDirection.up;
                    _this._updateValue(false /* shouldSpin */, _this._initialStepDelay, _this._onIncrement, event);
                    break;
                case _Utilities__WEBPACK_IMPORTED_MODULE_5__["KeyCodes"].down:
                    spinDirection = KeyboardSpinDirection.down;
                    _this._updateValue(false /* shouldSpin */, _this._initialStepDelay, _this._onDecrement, event);
                    break;
                case _Utilities__WEBPACK_IMPORTED_MODULE_5__["KeyCodes"].enter:
                    _this._validate(event);
                    break;
                case _Utilities__WEBPACK_IMPORTED_MODULE_5__["KeyCodes"].escape:
                    if (_this.value !== _this._lastValidValue) {
                        _this.setState({ value: _this._lastValidValue });
                    }
                    break;
                default:
                    break;
            }
            // style the increment/decrement button to look active
            // when the corresponding up/down arrow keys trigger a step
            if (_this.state.keyboardSpinDirection !== spinDirection) {
                _this.setState({ keyboardSpinDirection: spinDirection });
            }
        };
        /**
         * Make sure that we have stopped spinning on keyUp
         * if the up or down arrow fired this event
         * @param event - keyboard event
         */
        _this._handleKeyUp = function (event) {
            if (_this.props.disabled || event.which === _Utilities__WEBPACK_IMPORTED_MODULE_5__["KeyCodes"].up || event.which === _Utilities__WEBPACK_IMPORTED_MODULE_5__["KeyCodes"].down) {
                _this._stop();
                return;
            }
        };
        _this._onIncrementMouseDown = function (event) {
            _this._updateValue(true /* shouldSpin */, _this._initialStepDelay, _this._onIncrement, event);
        };
        _this._onDecrementMouseDown = function (event) {
            _this._updateValue(true /* shouldSpin */, _this._initialStepDelay, _this._onDecrement, event);
        };
        Object(_Utilities__WEBPACK_IMPORTED_MODULE_5__["initializeComponentRef"])(_this);
        Object(_Utilities__WEBPACK_IMPORTED_MODULE_5__["warnMutuallyExclusive"])('SpinButton', props, {
            value: 'defaultValue',
        });
        // Don't use || here because it won't handle empty strings properly
        var _a = props.value, value = _a === void 0 ? props.defaultValue : _a;
        if (value === undefined) {
            value = typeof props.min === 'number' ? String(props.min) : '0';
        }
        _this._lastValidValue = value;
        // Ensure that the autocalculated precision is not negative.
        _this._precision = _this._calculatePrecision(props);
        _this.state = {
            isFocused: false,
            value: value,
            keyboardSpinDirection: KeyboardSpinDirection.notSpinning,
        };
        _this._async = new _Utilities__WEBPACK_IMPORTED_MODULE_5__["Async"](_this);
        _this._currentStepFunctionHandle = -1;
        _this._labelId = Object(_Utilities__WEBPACK_IMPORTED_MODULE_5__["getId"])('Label');
        _this._inputId = Object(_Utilities__WEBPACK_IMPORTED_MODULE_5__["getId"])('input');
        _this._spinningByMouse = false;
        _this._valueToValidate = undefined;
        return _this;
    }
    SpinButton.prototype.componentWillUnmount = function () {
        this._async.dispose();
    };
    /**
     * Invoked when a component is receiving new props. This method is not called for the initial render.
     */
    SpinButton.prototype.UNSAFE_componentWillReceiveProps = function (newProps) {
        if (newProps.value !== undefined) {
            // Value from props is considered pre-validated
            this._lastValidValue = newProps.value;
            this.setState({ value: newProps.value });
        }
        this._precision = this._calculatePrecision(newProps);
    };
    SpinButton.prototype.render = function () {
        var _this = this;
        var _a = this.props, disabled = _a.disabled, label = _a.label, min = _a.min, max = _a.max, labelPosition = _a.labelPosition, iconProps = _a.iconProps, incrementButtonIcon = _a.incrementButtonIcon, incrementButtonAriaLabel = _a.incrementButtonAriaLabel, decrementButtonIcon = _a.decrementButtonIcon, decrementButtonAriaLabel = _a.decrementButtonAriaLabel, ariaLabel = _a.ariaLabel, ariaDescribedBy = _a.ariaDescribedBy, customStyles = _a.styles, customUpArrowButtonStyles = _a.upArrowButtonStyles, customDownArrowButtonStyles = _a.downArrowButtonStyles, theme = _a.theme, ariaPositionInSet = _a.ariaPositionInSet, ariaSetSize = _a.ariaSetSize, ariaValueNow = _a.ariaValueNow, ariaValueText = _a.ariaValueText, keytipProps = _a.keytipProps, className = _a.className, inputProps = _a.inputProps, iconButtonProps = _a.iconButtonProps;
        var _b = this.state, isFocused = _b.isFocused, keyboardSpinDirection = _b.keyboardSpinDirection;
        var value = this.value;
        var classNames = this.props.getClassNames
            ? this.props.getClassNames(theme, disabled, isFocused, keyboardSpinDirection, labelPosition, className)
            : Object(_SpinButton_classNames__WEBPACK_IMPORTED_MODULE_8__["getClassNames"])(Object(_SpinButton_styles__WEBPACK_IMPORTED_MODULE_7__["getStyles"])(theme, customStyles), disabled, isFocused, keyboardSpinDirection, labelPosition, className);
        var nativeProps = Object(_Utilities__WEBPACK_IMPORTED_MODULE_5__["getNativeProps"])(this.props, _Utilities__WEBPACK_IMPORTED_MODULE_5__["divProperties"], [
            'onBlur',
            'onFocus',
            'className',
        ]);
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: classNames.root },
            labelPosition !== _utilities_positioning__WEBPACK_IMPORTED_MODULE_6__["Position"].bottom && (iconProps || label) && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: classNames.labelWrapper },
                iconProps && react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Icon__WEBPACK_IMPORTED_MODULE_4__["Icon"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, iconProps, { className: classNames.icon, "aria-hidden": "true" })),
                label && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Label__WEBPACK_IMPORTED_MODULE_3__["Label"], { id: this._labelId, htmlFor: this._inputId, className: classNames.label, disabled: disabled }, label)))),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_KeytipData__WEBPACK_IMPORTED_MODULE_9__["KeytipData"], { keytipProps: keytipProps, disabled: disabled }, function (keytipAttributes) { return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, nativeProps, { className: classNames.spinButtonWrapper, "aria-label": ariaLabel && ariaLabel, "aria-posinset": ariaPositionInSet, "aria-setsize": ariaSetSize, "data-ktp-target": keytipAttributes['data-ktp-target'] }),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("input", Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ value: value, id: _this._inputId, onChange: _this._onChange, onInput: _this._onInputChange, className: classNames.input, type: "text", autoComplete: "off", role: "spinbutton", "aria-labelledby": label && _this._labelId, "aria-valuenow": typeof ariaValueNow === 'number'
                        ? ariaValueNow
                        : value && !isNaN(Number(value)) // Number('') is 0 which may not be desirable
                            ? Number(value)
                            : undefined, "aria-valuetext": typeof ariaValueText === 'string'
                        ? ariaValueText
                        : !value || isNaN(Number(value)) // Number('') is 0 which may not be desirable
                            ? value
                            : undefined, "aria-valuemin": min, "aria-valuemax": max, "aria-describedby": Object(_Utilities__WEBPACK_IMPORTED_MODULE_5__["mergeAriaAttributeValues"])(ariaDescribedBy, keytipAttributes['aria-describedby']), onBlur: _this._onBlur, ref: _this._input, onFocus: _this._onFocus, onKeyDown: _this._handleKeyDown, onKeyUp: _this._handleKeyUp, disabled: disabled, "aria-disabled": disabled, "data-lpignore": true, "data-ktp-execute-target": keytipAttributes['data-ktp-execute-target'] }, inputProps)),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", { className: classNames.arrowBox },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Button__WEBPACK_IMPORTED_MODULE_2__["IconButton"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ styles: Object(_SpinButton_styles__WEBPACK_IMPORTED_MODULE_7__["getArrowButtonStyles"])(theme, true, customUpArrowButtonStyles), className: 'ms-UpButton', checked: keyboardSpinDirection === KeyboardSpinDirection.up, disabled: disabled, iconProps: incrementButtonIcon, onMouseDown: _this._onIncrementMouseDown, onMouseLeave: _this._stop, onMouseUp: _this._stop, tabIndex: -1, ariaLabel: incrementButtonAriaLabel, "data-is-focusable": false }, iconButtonProps)),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Button__WEBPACK_IMPORTED_MODULE_2__["IconButton"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ styles: Object(_SpinButton_styles__WEBPACK_IMPORTED_MODULE_7__["getArrowButtonStyles"])(theme, false, customDownArrowButtonStyles), className: 'ms-DownButton', checked: keyboardSpinDirection === KeyboardSpinDirection.down, disabled: disabled, iconProps: decrementButtonIcon, onMouseDown: _this._onDecrementMouseDown, onMouseLeave: _this._stop, onMouseUp: _this._stop, tabIndex: -1, ariaLabel: decrementButtonAriaLabel, "data-is-focusable": false }, iconButtonProps))))); }),
            labelPosition === _utilities_positioning__WEBPACK_IMPORTED_MODULE_6__["Position"].bottom && (iconProps || label) && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: classNames.labelWrapper },
                iconProps && react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Icon__WEBPACK_IMPORTED_MODULE_4__["Icon"], { iconName: iconProps.iconName, className: classNames.icon, "aria-hidden": "true" }),
                label && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Label__WEBPACK_IMPORTED_MODULE_3__["Label"], { id: this._labelId, htmlFor: this._inputId, className: classNames.label, disabled: disabled }, label))))));
    };
    SpinButton.prototype.focus = function () {
        if (this._input.current) {
            this._input.current.focus();
        }
    };
    Object.defineProperty(SpinButton.prototype, "value", {
        /**
         * Gets the value of the spin button.
         */
        get: function () {
            // TODO (version 8): value from props should ALWAYS override value from state.
            // In a class component the code should be:
            // const { value = this.state.value } = this.props;
            // return value;
            return this.state.value;
        },
        enumerable: true,
        configurable: true
    });
    SpinButton.prototype._onChange = function () {
        /**
         * A noop input change handler. Using onInput instead of onChange was meant to address an issue
         * which apparently has been resolved in React 16 (https://github.com/facebook/react/issues/7027).
         * The no-op onChange handler was still needed because React gives console errors if an input
         * doesn't have onChange.
         *
         * TODO (Fabric 8?) - switch to just calling onChange (this is a breaking change for any tests,
         * ours or 3rd-party, which simulate entering text in a SpinButton)
         */
    };
    SpinButton.defaultProps = {
        step: 1,
        min: 0,
        max: 100,
        disabled: false,
        labelPosition: _utilities_positioning__WEBPACK_IMPORTED_MODULE_6__["Position"].start,
        label: '',
        incrementButtonIcon: { iconName: 'ChevronUpSmall' },
        decrementButtonIcon: { iconName: 'ChevronDownSmall' },
    };
    SpinButton = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_Utilities__WEBPACK_IMPORTED_MODULE_5__["customizable"])('SpinButton', ['theme', 'styles'], true)
    ], SpinButton);
    return SpinButton;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));

//# sourceMappingURL=SpinButton.js.map

/***/ }),

/***/ "hwCN":
/*!**************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/version.js ***!
  \**************************************************************************************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _uifabric_set_version__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @uifabric/set-version */ "Eyzw");
// Do not modify this file; it is generated as part of publish.
// The checked in version is a placeholder only and will not be updated.

Object(_uifabric_set_version__WEBPACK_IMPORTED_MODULE_0__["setVersion"])('office-ui-fabric-react', '7.155.4');
//# sourceMappingURL=version.js.map

/***/ }),

/***/ "iaSa":
/*!*****************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/KeytipData.js ***!
  \*****************************************************************************************************************************************************************************/
/*! exports provided: KeytipData, useKeytipRef */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_KeytipData_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/KeytipData/index */ "tpD7");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KeytipData", function() { return _components_KeytipData_index__WEBPACK_IMPORTED_MODULE_0__["KeytipData"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useKeytipRef", function() { return _components_KeytipData_index__WEBPACK_IMPORTED_MODULE_0__["useKeytipRef"]; });


//# sourceMappingURL=KeytipData.js.map

/***/ }),

/***/ "idPz":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/utilities/positioning/positioning.js ***!
  \****************************************************************************************************************************************************************************************************/
/*! exports provided: __positioningTestPackage, positionElement, positionCallout, positionCard, getMaxHeight, getOppositeEdge, getBoundsFromTargetWindow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__positioningTestPackage", function() { return __positioningTestPackage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "positionElement", function() { return positionElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "positionCallout", function() { return positionCallout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "positionCard", function() { return positionCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMaxHeight", function() { return getMaxHeight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOppositeEdge", function() { return getOppositeEdge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBoundsFromTargetWindow", function() { return getBoundsFromTargetWindow; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_DirectionalHint__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/DirectionalHint */ "EE7g");
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Utilities */ "mkpW");
/* harmony import */ var _positioning_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./positioning.types */ "ceOo");
var _a;





function _createPositionData(targetEdge, alignmentEdge, isAuto) {
    return {
        targetEdge: targetEdge,
        alignmentEdge: alignmentEdge,
        isAuto: isAuto,
    };
}
// Currently the beakPercent is set to 50 for all positions meaning that it should tend to the center of the target
var DirectionalDictionary = (_a = {},
    _a[_common_DirectionalHint__WEBPACK_IMPORTED_MODULE_1__["DirectionalHint"].topLeftEdge] = _createPositionData(_positioning_types__WEBPACK_IMPORTED_MODULE_3__["RectangleEdge"].top, _positioning_types__WEBPACK_IMPORTED_MODULE_3__["RectangleEdge"].left),
    _a[_common_DirectionalHint__WEBPACK_IMPORTED_MODULE_1__["DirectionalHint"].topCenter] = _createPositionData(_positioning_types__WEBPACK_IMPORTED_MODULE_3__["RectangleEdge"].top),
    _a[_common_DirectionalHint__WEBPACK_IMPORTED_MODULE_1__["DirectionalHint"].topRightEdge] = _createPositionData(_positioning_types__WEBPACK_IMPORTED_MODULE_3__["RectangleEdge"].top, _positioning_types__WEBPACK_IMPORTED_MODULE_3__["RectangleEdge"].right),
    _a[_common_DirectionalHint__WEBPACK_IMPORTED_MODULE_1__["DirectionalHint"].topAutoEdge] = _createPositionData(_positioning_types__WEBPACK_IMPORTED_MODULE_3__["RectangleEdge"].top, undefined, true),
    _a[_common_DirectionalHint__WEBPACK_IMPORTED_MODULE_1__["DirectionalHint"].bottomLeftEdge] = _createPositionData(_positioning_types__WEBPACK_IMPORTED_MODULE_3__["RectangleEdge"].bottom, _positioning_types__WEBPACK_IMPORTED_MODULE_3__["RectangleEdge"].left),
    _a[_common_DirectionalHint__WEBPACK_IMPORTED_MODULE_1__["DirectionalHint"].bottomCenter] = _createPositionData(_positioning_types__WEBPACK_IMPORTED_MODULE_3__["RectangleEdge"].bottom),
    _a[_common_DirectionalHint__WEBPACK_IMPORTED_MODULE_1__["DirectionalHint"].bottomRightEdge] = _createPositionData(_positioning_types__WEBPACK_IMPORTED_MODULE_3__["RectangleEdge"].bottom, _positioning_types__WEBPACK_IMPORTED_MODULE_3__["RectangleEdge"].right),
    _a[_common_DirectionalHint__WEBPACK_IMPORTED_MODULE_1__["DirectionalHint"].bottomAutoEdge] = _createPositionData(_positioning_types__WEBPACK_IMPORTED_MODULE_3__["RectangleEdge"].bottom, undefined, true),
    _a[_common_DirectionalHint__WEBPACK_IMPORTED_MODULE_1__["DirectionalHint"].leftTopEdge] = _createPositionData(_positioning_types__WEBPACK_IMPORTED_MODULE_3__["RectangleEdge"].left, _positioning_types__WEBPACK_IMPORTED_MODULE_3__["RectangleEdge"].top),
    _a[_common_DirectionalHint__WEBPACK_IMPORTED_MODULE_1__["DirectionalHint"].leftCenter] = _createPositionData(_positioning_types__WEBPACK_IMPORTED_MODULE_3__["RectangleEdge"].left),
    _a[_common_DirectionalHint__WEBPACK_IMPORTED_MODULE_1__["DirectionalHint"].leftBottomEdge] = _createPositionData(_positioning_types__WEBPACK_IMPORTED_MODULE_3__["RectangleEdge"].left, _positioning_types__WEBPACK_IMPORTED_MODULE_3__["RectangleEdge"].bottom),
    _a[_common_DirectionalHint__WEBPACK_IMPORTED_MODULE_1__["DirectionalHint"].rightTopEdge] = _createPositionData(_positioning_types__WEBPACK_IMPORTED_MODULE_3__["RectangleEdge"].right, _positioning_types__WEBPACK_IMPORTED_MODULE_3__["RectangleEdge"].top),
    _a[_common_DirectionalHint__WEBPACK_IMPORTED_MODULE_1__["DirectionalHint"].rightCenter] = _createPositionData(_positioning_types__WEBPACK_IMPORTED_MODULE_3__["RectangleEdge"].right),
    _a[_common_DirectionalHint__WEBPACK_IMPORTED_MODULE_1__["DirectionalHint"].rightBottomEdge] = _createPositionData(_positioning_types__WEBPACK_IMPORTED_MODULE_3__["RectangleEdge"].right, _positioning_types__WEBPACK_IMPORTED_MODULE_3__["RectangleEdge"].bottom),
    _a);
function _isRectangleWithinBounds(rect, boundingRect) {
    if (rect.top < boundingRect.top) {
        return false;
    }
    if (rect.bottom > boundingRect.bottom) {
        return false;
    }
    if (rect.left < boundingRect.left) {
        return false;
    }
    if (rect.right > boundingRect.right) {
        return false;
    }
    return true;
}
/**
 * Gets all of the edges of a rectangle that are outside of the given bounds.
 * If there are no out of bounds edges it returns an empty array.
 */
function _getOutOfBoundsEdges(rect, boundingRect) {
    var outOfBounds = [];
    if (rect.top < boundingRect.top) {
        outOfBounds.push(_positioning_types__WEBPACK_IMPORTED_MODULE_3__["RectangleEdge"].top);
    }
    if (rect.bottom > boundingRect.bottom) {
        outOfBounds.push(_positioning_types__WEBPACK_IMPORTED_MODULE_3__["RectangleEdge"].bottom);
    }
    if (rect.left < boundingRect.left) {
        outOfBounds.push(_positioning_types__WEBPACK_IMPORTED_MODULE_3__["RectangleEdge"].left);
    }
    if (rect.right > boundingRect.right) {
        outOfBounds.push(_positioning_types__WEBPACK_IMPORTED_MODULE_3__["RectangleEdge"].right);
    }
    return outOfBounds;
}
function _getEdgeValue(rect, edge) {
    return rect[_positioning_types__WEBPACK_IMPORTED_MODULE_3__["RectangleEdge"][edge]];
}
function _setEdgeValue(rect, edge, value) {
    rect[_positioning_types__WEBPACK_IMPORTED_MODULE_3__["RectangleEdge"][edge]] = value;
    return rect;
}
/**
 * Returns the middle value of an edge. Only returns 1 value rather than xy coordinates as
 * the itself already contains the other coordinate.
 * For instance, a bottom edge's current value is it's y coordinate, so the number returned is the x.
 */
function _getCenterValue(rect, edge) {
    var edges = _getFlankingEdges(edge);
    return (_getEdgeValue(rect, edges.positiveEdge) + _getEdgeValue(rect, edges.negativeEdge)) / 2;
}
/**
 * Flips the value depending on the edge.
 * If the edge is a "positive" edge, Top or Left, then the value should stay as it is.
 * If the edge is a "negative" edge, Bottom or Right, then the value should be flipped.
 * This is to account for the fact that the coordinates are effectively reveserved in certain cases for the
 * "negative" edges.
 *
 * For example, when testing to see if a bottom edge 1 is within the bounds of another bottom edge 2:
 * If edge 1 is greater than edge 2 then it is out of bounds. This is reversed for top edge 1 and top edge 2.
 * If top edge 1 is less than edge 2 then it is out of bounds.
 */
function _getRelativeEdgeValue(edge, value) {
    if (edge > 0) {
        return value;
    }
    else {
        return value * -1;
    }
}
function _getRelativeRectEdgeValue(edge, rect) {
    return _getRelativeEdgeValue(edge, _getEdgeValue(rect, edge));
}
function _getRelativeEdgeDifference(rect, hostRect, edge) {
    var edgeDifference = _getEdgeValue(rect, edge) - _getEdgeValue(hostRect, edge);
    return _getRelativeEdgeValue(edge, edgeDifference);
}
/**
 * Moves the edge of a rectangle to the value given. It only moves the edge in a linear direction based on that edge.
 * For example, if it's a bottom edge it will only change y coordinates.
 */
function _moveEdge(rect, edge, newValue) {
    var difference = _getEdgeValue(rect, edge) - newValue;
    rect = _setEdgeValue(rect, edge, newValue);
    rect = _setEdgeValue(rect, edge * -1, _getEdgeValue(rect, edge * -1) - difference);
    return rect;
}
/**
 * Aligns the edge on the passed in rect to the target. If there is a gap then it will have that space between the two.
 */
function _alignEdges(rect, target, edge, gap) {
    if (gap === void 0) { gap = 0; }
    return _moveEdge(rect, edge, _getEdgeValue(target, edge) + _getRelativeEdgeValue(edge, gap));
}
/**
 * Aligns the targetEdge on the passed in target to the rects corresponding opposite edge.
 * For instance if targetEdge is bottom, then the rects top will be moved to match it.
 */
function _alignOppositeEdges(rect, target, targetEdge, gap) {
    if (gap === void 0) { gap = 0; }
    var oppositeEdge = targetEdge * -1;
    var adjustedGap = _getRelativeEdgeValue(oppositeEdge, gap);
    return _moveEdge(rect, targetEdge * -1, _getEdgeValue(target, targetEdge) + adjustedGap);
}
/**
 * Tests to see if the given edge is within the bounds of the given rectangle.
 */
function _isEdgeInBounds(rect, bounds, edge) {
    var adjustedRectValue = _getRelativeRectEdgeValue(edge, rect);
    return adjustedRectValue > _getRelativeRectEdgeValue(edge, bounds);
}
/**
 * Attempts to move the rectangle through various sides of the target to find a place to fit.
 * If no fit is found, the original position should be returned.
 */
function _flipToFit(rect, target, bounding, positionData, gap) {
    if (gap === void 0) { gap = 0; }
    var directions = [
        _positioning_types__WEBPACK_IMPORTED_MODULE_3__["RectangleEdge"].left,
        _positioning_types__WEBPACK_IMPORTED_MODULE_3__["RectangleEdge"].right,
        _positioning_types__WEBPACK_IMPORTED_MODULE_3__["RectangleEdge"].bottom,
        _positioning_types__WEBPACK_IMPORTED_MODULE_3__["RectangleEdge"].top,
    ];
    // In RTL page, RectangleEdge.right has a higher priority than RectangleEdge.left, so the order should be updated.
    if (Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["getRTL"])()) {
        directions[0] *= -1;
        directions[1] *= -1;
    }
    var currentEstimate = rect;
    var currentEdge = positionData.targetEdge;
    var currentAlignment = positionData.alignmentEdge;
    // Keep switching sides until one is found with enough space.
    // If all sides don't fit then return the unmodified element.
    for (var i = 0; i < 4; i++) {
        if (!_isEdgeInBounds(currentEstimate, bounding, currentEdge)) {
            directions.splice(directions.indexOf(currentEdge), 1);
            if (directions.length > 0) {
                if (directions.indexOf(currentEdge * -1) > -1) {
                    currentEdge = currentEdge * -1;
                }
                else {
                    currentAlignment = currentEdge;
                    currentEdge = directions.slice(-1)[0];
                }
                currentEstimate = _estimatePosition(rect, target, { targetEdge: currentEdge, alignmentEdge: currentAlignment }, gap);
            }
        }
        else {
            return {
                elementRectangle: currentEstimate,
                targetEdge: currentEdge,
                alignmentEdge: currentAlignment,
            };
        }
    }
    return {
        elementRectangle: rect,
        targetEdge: positionData.targetEdge,
        alignmentEdge: positionData.alignmentEdge,
    };
}
/**
 * Flips only the alignment edge of an element rectangle. This is used instead of nudging the alignment edges
 * into position, when alignTargetEdge is specified.
 */
function _flipAlignmentEdge(elementEstimate, target, gap, coverTarget) {
    var alignmentEdge = elementEstimate.alignmentEdge, targetEdge = elementEstimate.targetEdge, elementRectangle = elementEstimate.elementRectangle;
    var oppositeEdge = alignmentEdge * -1;
    var newEstimate = _estimatePosition(elementRectangle, target, { targetEdge: targetEdge, alignmentEdge: oppositeEdge }, gap, coverTarget);
    return {
        elementRectangle: newEstimate,
        targetEdge: targetEdge,
        alignmentEdge: oppositeEdge,
    };
}
/**
 * Adjusts a element rectangle to fit within the bounds given. If directionalHintFixed or covertarget is passed in
 * then the element will not flip sides on the target. They will, however, be nudged to fit within the bounds given.
 */
function _adjustFitWithinBounds(element, target, bounding, positionData, gap, directionalHintFixed, coverTarget) {
    if (gap === void 0) { gap = 0; }
    var alignmentEdge = positionData.alignmentEdge, alignTargetEdge = positionData.alignTargetEdge;
    var elementEstimate = {
        elementRectangle: element,
        targetEdge: positionData.targetEdge,
        alignmentEdge: alignmentEdge,
    };
    if (!directionalHintFixed && !coverTarget) {
        elementEstimate = _flipToFit(element, target, bounding, positionData, gap);
    }
    var outOfBounds = _getOutOfBoundsEdges(element, bounding);
    if (alignTargetEdge) {
        // The edge opposite to the alignment edge might be out of bounds.
        // Flip alignment to see if we can get it within bounds.
        if (elementEstimate.alignmentEdge && outOfBounds.indexOf(elementEstimate.alignmentEdge * -1) > -1) {
            var flippedElementEstimate = _flipAlignmentEdge(elementEstimate, target, gap, coverTarget);
            if (_isRectangleWithinBounds(flippedElementEstimate.elementRectangle, bounding)) {
                return flippedElementEstimate;
            }
            else {
                // If the flipped elements edges are still out of bounds, try nudging it.
                elementEstimate = _alignOutOfBoundsEdges(_getOutOfBoundsEdges(flippedElementEstimate.elementRectangle, bounding), elementEstimate, bounding);
            }
        }
    }
    else {
        elementEstimate = _alignOutOfBoundsEdges(outOfBounds, elementEstimate, bounding);
    }
    return elementEstimate;
}
/**
 * Iterates through a list of out of bounds edges and tries to nudge and align them.
 * @param outOfBoundsEdges - Array of edges that are out of bounds
 * @param elementEstimate - The current element positioning estimate
 * @param bounding - The current bounds
 */
function _alignOutOfBoundsEdges(outOfBoundsEdges, elementEstimate, bounding) {
    for (var _i = 0, outOfBoundsEdges_1 = outOfBoundsEdges; _i < outOfBoundsEdges_1.length; _i++) {
        var direction = outOfBoundsEdges_1[_i];
        elementEstimate.elementRectangle = _alignEdges(elementEstimate.elementRectangle, bounding, direction);
    }
    return elementEstimate;
}
/**
 * Moves the middle point on an edge to the point given.
 * Only moves in one direction. For instance if a bottom edge is passed in, then
 * the bottom edge will be moved in the x axis to match the point.
 */
function _centerEdgeToPoint(rect, edge, point) {
    var positiveEdge = _getFlankingEdges(edge).positiveEdge;
    var elementMiddle = _getCenterValue(rect, edge);
    var distanceToMiddle = elementMiddle - _getEdgeValue(rect, positiveEdge);
    return _moveEdge(rect, positiveEdge, point - distanceToMiddle);
}
/**
 * Moves the element rectangle to be appropriately positioned relative to a given target.
 * Does not flip or adjust the element.
 */
function _estimatePosition(elementToPosition, target, positionData, gap, coverTarget) {
    if (gap === void 0) { gap = 0; }
    var estimatedElementPosition;
    var alignmentEdge = positionData.alignmentEdge, targetEdge = positionData.targetEdge;
    var elementEdge = coverTarget ? targetEdge : targetEdge * -1;
    estimatedElementPosition = coverTarget
        ? _alignEdges(elementToPosition, target, targetEdge, gap)
        : _alignOppositeEdges(elementToPosition, target, targetEdge, gap);
    // if no alignment edge is provided it's supposed to be centered.
    if (!alignmentEdge) {
        var targetMiddlePoint = _getCenterValue(target, targetEdge);
        estimatedElementPosition = _centerEdgeToPoint(estimatedElementPosition, elementEdge, targetMiddlePoint);
    }
    else {
        estimatedElementPosition = _alignEdges(estimatedElementPosition, target, alignmentEdge);
    }
    return estimatedElementPosition;
}
/**
 * Returns the non-opposite edges of the target edge.
 * For instance if bottom is passed in then left and right will be returned.
 */
function _getFlankingEdges(edge) {
    if (edge === _positioning_types__WEBPACK_IMPORTED_MODULE_3__["RectangleEdge"].top || edge === _positioning_types__WEBPACK_IMPORTED_MODULE_3__["RectangleEdge"].bottom) {
        return {
            positiveEdge: _positioning_types__WEBPACK_IMPORTED_MODULE_3__["RectangleEdge"].left,
            negativeEdge: _positioning_types__WEBPACK_IMPORTED_MODULE_3__["RectangleEdge"].right,
        };
    }
    else {
        return {
            positiveEdge: _positioning_types__WEBPACK_IMPORTED_MODULE_3__["RectangleEdge"].top,
            negativeEdge: _positioning_types__WEBPACK_IMPORTED_MODULE_3__["RectangleEdge"].bottom,
        };
    }
}
/**
 * Retrieve the final value for the return edge of elementRectangle. If the elementRectangle is closer to one side
 * of the bounds versus the other, the return edge is flipped to grow inward.
 */
function _finalizeReturnEdge(elementRectangle, returnEdge, bounds) {
    if (bounds &&
        Math.abs(_getRelativeEdgeDifference(elementRectangle, bounds, returnEdge)) >
            Math.abs(_getRelativeEdgeDifference(elementRectangle, bounds, returnEdge * -1))) {
        return returnEdge * -1;
    }
    return returnEdge;
}
/**
 * Finalizes the element positon based on the hostElement. Only returns the
 * rectangle values to position such that they are anchored to the target.
 * This helps prevent resizing from looking very strange.
 * For instance, if the target edge is top and aligned with the left side then
 * the bottom and left values are returned so as the callou shrinks it shrinks towards that corner.
 */
function _finalizeElementPosition(elementRectangle, hostElement, targetEdge, bounds, alignmentEdge, coverTarget, doNotFinalizeReturnEdge) {
    var returnValue = {};
    var hostRect = _getRectangleFromElement(hostElement);
    var elementEdge = coverTarget ? targetEdge : targetEdge * -1;
    var elementEdgeString = _positioning_types__WEBPACK_IMPORTED_MODULE_3__["RectangleEdge"][elementEdge];
    var returnEdge = alignmentEdge ? alignmentEdge : _getFlankingEdges(targetEdge).positiveEdge;
    if (!doNotFinalizeReturnEdge) {
        returnEdge = _finalizeReturnEdge(elementRectangle, returnEdge, bounds);
    }
    returnValue[elementEdgeString] = _getRelativeEdgeDifference(elementRectangle, hostRect, elementEdge);
    returnValue[_positioning_types__WEBPACK_IMPORTED_MODULE_3__["RectangleEdge"][returnEdge]] = _getRelativeEdgeDifference(elementRectangle, hostRect, returnEdge);
    return returnValue;
}
// Since the beak is rotated 45 degrees the actual height/width is the length of the diagonal.
// We still want to position the beak based on it's midpoint which does not change. It will
// be at (beakwidth / 2, beakwidth / 2)
function _calculateActualBeakWidthInPixels(beakWidth) {
    return Math.sqrt(beakWidth * beakWidth * 2);
}
/**
 * Returns the appropriate IPositionData based on the props altered for RTL.
 * If directionalHintForRTL is passed in that is used if the page is RTL.
 * If directionalHint is specified, no directionalHintForRTL is available, and the page is RTL, the hint will be
 * flipped (e.g. bottomLeftEdge would become bottomRightEdge).
 *
 * If there is no directionalHint passed in, bottomAutoEdge is chosen automatically.
 */
function _getPositionData(directionalHint, directionalHintForRTL, previousPositions) {
    if (directionalHint === void 0) { directionalHint = _common_DirectionalHint__WEBPACK_IMPORTED_MODULE_1__["DirectionalHint"].bottomAutoEdge; }
    if (previousPositions) {
        return {
            alignmentEdge: previousPositions.alignmentEdge,
            isAuto: previousPositions.isAuto,
            targetEdge: previousPositions.targetEdge,
        };
    }
    var positionInformation = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, DirectionalDictionary[directionalHint]);
    if (Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["getRTL"])()) {
        // If alignment edge exists and that alignment edge is -2 or 2, right or left, then flip it.
        if (positionInformation.alignmentEdge && positionInformation.alignmentEdge % 2 === 0) {
            positionInformation.alignmentEdge = positionInformation.alignmentEdge * -1;
        }
        return directionalHintForRTL !== undefined ? DirectionalDictionary[directionalHintForRTL] : positionInformation;
    }
    return positionInformation;
}
/**
 * Get's the alignment data for the given information. This only really matters if the positioning is Auto.
 * If it is auto then the alignmentEdge should be chosen based on the target edge's position relative to
 * the center of the page.
 */
function _getAlignmentData(positionData, target, boundingRect, coverTarget, alignTargetEdge) {
    if (positionData.isAuto) {
        positionData.alignmentEdge = getClosestEdge(positionData.targetEdge, target, boundingRect);
    }
    positionData.alignTargetEdge = alignTargetEdge;
    return positionData;
}
function getClosestEdge(targetEdge, target, boundingRect) {
    var targetCenter = _getCenterValue(target, targetEdge);
    var boundingCenter = _getCenterValue(boundingRect, targetEdge);
    var _a = _getFlankingEdges(targetEdge), positiveEdge = _a.positiveEdge, negativeEdge = _a.negativeEdge;
    if (targetCenter <= boundingCenter) {
        return positiveEdge;
    }
    else {
        return negativeEdge;
    }
}
function _positionElementWithinBounds(elementToPosition, target, bounding, positionData, gap, directionalHintFixed, coverTarget) {
    var estimatedElementPosition = _estimatePosition(elementToPosition, target, positionData, gap, coverTarget);
    if (_isRectangleWithinBounds(estimatedElementPosition, bounding)) {
        return {
            elementRectangle: estimatedElementPosition,
            targetEdge: positionData.targetEdge,
            alignmentEdge: positionData.alignmentEdge,
        };
    }
    else {
        return _adjustFitWithinBounds(elementToPosition, target, bounding, positionData, gap, directionalHintFixed, coverTarget);
    }
}
function _finalizeBeakPosition(elementPosition, positionedBeak, bounds) {
    var targetEdge = elementPosition.targetEdge * -1;
    // The "host" element that we will use to help position the beak.
    var actualElement = new _Utilities__WEBPACK_IMPORTED_MODULE_2__["Rectangle"](0, elementPosition.elementRectangle.width, 0, elementPosition.elementRectangle.height);
    var returnValue = {};
    var returnEdge = _finalizeReturnEdge(elementPosition.elementRectangle, elementPosition.alignmentEdge ? elementPosition.alignmentEdge : _getFlankingEdges(targetEdge).positiveEdge, bounds);
    returnValue[_positioning_types__WEBPACK_IMPORTED_MODULE_3__["RectangleEdge"][targetEdge]] = _getEdgeValue(positionedBeak, targetEdge);
    returnValue[_positioning_types__WEBPACK_IMPORTED_MODULE_3__["RectangleEdge"][returnEdge]] = _getRelativeEdgeDifference(positionedBeak, actualElement, returnEdge);
    return {
        elementPosition: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, returnValue),
        closestEdge: getClosestEdge(elementPosition.targetEdge, positionedBeak, actualElement),
        targetEdge: targetEdge,
    };
}
function _positionBeak(beakWidth, elementPosition) {
    var target = elementPosition.targetRectangle;
    /**
     * Note about beak positioning: The actual beak width only matters for getting the gap between the callout and
     * target, it does not impact the beak placement within the callout. For example example, if the beakWidth is 8,
     * then the actual beakWidth is sqrroot(8^2 + 8^2) = 11.31x11.31. So the callout will need to be an extra 3 pixels
     * away from its target. While the beak is being positioned in the callout it still acts as though it were 8x8.
     */
    var _a = _getFlankingEdges(elementPosition.targetEdge), positiveEdge = _a.positiveEdge, negativeEdge = _a.negativeEdge;
    var beakTargetPoint = _getCenterValue(target, elementPosition.targetEdge);
    var elementBounds = new _Utilities__WEBPACK_IMPORTED_MODULE_2__["Rectangle"](beakWidth / 2, elementPosition.elementRectangle.width - beakWidth / 2, beakWidth / 2, elementPosition.elementRectangle.height - beakWidth / 2);
    var beakPosition = new _Utilities__WEBPACK_IMPORTED_MODULE_2__["Rectangle"](0, beakWidth, 0, beakWidth);
    beakPosition = _moveEdge(beakPosition, elementPosition.targetEdge * -1, -beakWidth / 2);
    beakPosition = _centerEdgeToPoint(beakPosition, elementPosition.targetEdge * -1, beakTargetPoint - _getRelativeRectEdgeValue(positiveEdge, elementPosition.elementRectangle));
    if (!_isEdgeInBounds(beakPosition, elementBounds, positiveEdge)) {
        beakPosition = _alignEdges(beakPosition, elementBounds, positiveEdge);
    }
    else if (!_isEdgeInBounds(beakPosition, elementBounds, negativeEdge)) {
        beakPosition = _alignEdges(beakPosition, elementBounds, negativeEdge);
    }
    return beakPosition;
}
function _getRectangleFromElement(element) {
    var clientRect = element.getBoundingClientRect();
    return new _Utilities__WEBPACK_IMPORTED_MODULE_2__["Rectangle"](clientRect.left, clientRect.right, clientRect.top, clientRect.bottom);
}
function _getRectangleFromIRect(rect) {
    return new _Utilities__WEBPACK_IMPORTED_MODULE_2__["Rectangle"](rect.left, rect.right, rect.top, rect.bottom);
}
function _getTargetRect(bounds, target) {
    var targetRectangle;
    if (target) {
        // eslint-disable-next-line no-extra-boolean-cast
        if (!!target.preventDefault) {
            var ev = target;
            targetRectangle = new _Utilities__WEBPACK_IMPORTED_MODULE_2__["Rectangle"](ev.clientX, ev.clientX, ev.clientY, ev.clientY);
            // eslint-disable-next-line no-extra-boolean-cast
        }
        else if (!!target.getBoundingClientRect) {
            targetRectangle = _getRectangleFromElement(target);
            // HTMLImgElements can have x and y values. The check for it being a point must go last.
        }
        else {
            var point = target;
            // eslint-disable-next-line deprecation/deprecation
            var left = point.left || point.x;
            // eslint-disable-next-line deprecation/deprecation
            var top_1 = point.top || point.y;
            targetRectangle = new _Utilities__WEBPACK_IMPORTED_MODULE_2__["Rectangle"](left, left, top_1, top_1);
        }
        if (!_isRectangleWithinBounds(targetRectangle, bounds)) {
            var outOfBounds = _getOutOfBoundsEdges(targetRectangle, bounds);
            for (var _i = 0, outOfBounds_1 = outOfBounds; _i < outOfBounds_1.length; _i++) {
                var direction = outOfBounds_1[_i];
                targetRectangle[_positioning_types__WEBPACK_IMPORTED_MODULE_3__["RectangleEdge"][direction]] = bounds[_positioning_types__WEBPACK_IMPORTED_MODULE_3__["RectangleEdge"][direction]];
            }
        }
    }
    else {
        targetRectangle = new _Utilities__WEBPACK_IMPORTED_MODULE_2__["Rectangle"](0, 0, 0, 0);
    }
    return targetRectangle;
}
/**
 * If max height is less than zero it returns the bounds height instead.
 */
function _getMaxHeightFromTargetRectangle(targetRectangle, targetEdge, gapSpace, bounds, coverTarget) {
    var maxHeight = 0;
    var directionalHint = DirectionalDictionary[targetEdge];
    // If cover target is set, then the max height should be calculated using the opposite of the target edge since
    // that's the direction that the callout will expand in.
    // For instance, if the directionalhint is bottomLeftEdge then the callout will position so it's bottom edge
    // is aligned with the bottom of the target and expand up towards the top of the screen and the calculated max height
    // is (bottom of target) - (top of screen) - gapSpace.
    var target = coverTarget ? directionalHint.targetEdge * -1 : directionalHint.targetEdge;
    if (target === _positioning_types__WEBPACK_IMPORTED_MODULE_3__["RectangleEdge"].top) {
        maxHeight = _getEdgeValue(targetRectangle, directionalHint.targetEdge) - bounds.top - gapSpace;
    }
    else if (target === _positioning_types__WEBPACK_IMPORTED_MODULE_3__["RectangleEdge"].bottom) {
        maxHeight = bounds.bottom - _getEdgeValue(targetRectangle, directionalHint.targetEdge) - gapSpace;
    }
    else {
        maxHeight = bounds.bottom - targetRectangle.top - gapSpace;
    }
    return maxHeight > 0 ? maxHeight : bounds.height;
}
function _positionElementRelative(props, elementToPosition, boundingRect, previousPositions) {
    var gap = props.gapSpace ? props.gapSpace : 0;
    var targetRect = _getTargetRect(boundingRect, props.target);
    var positionData = _getAlignmentData(_getPositionData(props.directionalHint, props.directionalHintForRTL, previousPositions), targetRect, boundingRect, props.coverTarget, props.alignTargetEdge);
    var positionedElement = _positionElementWithinBounds(_getRectangleFromElement(elementToPosition), targetRect, boundingRect, positionData, gap, props.directionalHintFixed, props.coverTarget);
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, positionedElement), { targetRectangle: targetRect });
}
function _finalizePositionData(positionedElement, hostElement, bounds, coverTarget, doNotFinalizeReturnEdge) {
    var finalizedElement = _finalizeElementPosition(positionedElement.elementRectangle, hostElement, positionedElement.targetEdge, bounds, positionedElement.alignmentEdge, coverTarget, doNotFinalizeReturnEdge);
    return {
        elementPosition: finalizedElement,
        targetEdge: positionedElement.targetEdge,
        alignmentEdge: positionedElement.alignmentEdge,
    };
}
function _positionElement(props, hostElement, elementToPosition, previousPositions) {
    var boundingRect = props.bounds
        ? _getRectangleFromIRect(props.bounds)
        : new _Utilities__WEBPACK_IMPORTED_MODULE_2__["Rectangle"](0, window.innerWidth - Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["getScrollbarWidth"])(), 0, window.innerHeight);
    var positionedElement = _positionElementRelative(props, elementToPosition, boundingRect, previousPositions);
    return _finalizePositionData(positionedElement, hostElement, boundingRect, props.coverTarget);
}
function _positionCallout(props, hostElement, callout, previousPositions, doNotFinalizeReturnEdge) {
    var beakWidth = props.isBeakVisible ? props.beakWidth || 0 : 0;
    var gap = _calculateActualBeakWidthInPixels(beakWidth) / 2 + (props.gapSpace ? props.gapSpace : 0);
    var positionProps = props;
    positionProps.gapSpace = gap;
    var boundingRect = props.bounds
        ? _getRectangleFromIRect(props.bounds)
        : new _Utilities__WEBPACK_IMPORTED_MODULE_2__["Rectangle"](0, window.innerWidth - Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["getScrollbarWidth"])(), 0, window.innerHeight);
    var positionedElement = _positionElementRelative(positionProps, callout, boundingRect, previousPositions);
    var beakPositioned = _positionBeak(beakWidth, positionedElement);
    var finalizedBeakPosition = _finalizeBeakPosition(positionedElement, beakPositioned, boundingRect);
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, _finalizePositionData(positionedElement, hostElement, boundingRect, props.coverTarget, doNotFinalizeReturnEdge)), { beakPosition: finalizedBeakPosition });
}
function _positionCard(props, hostElement, callout, previousPositions) {
    return _positionCallout(props, hostElement, callout, previousPositions, true);
}
// END PRIVATE FUNCTIONS
var __positioningTestPackage = {
    _finalizePositionData: _finalizePositionData,
    _finalizeBeakPosition: _finalizeBeakPosition,
    _calculateActualBeakWidthInPixels: _calculateActualBeakWidthInPixels,
    _positionElementWithinBounds: _positionElementWithinBounds,
    _positionBeak: _positionBeak,
    _getPositionData: _getPositionData,
    _getMaxHeightFromTargetRectangle: _getMaxHeightFromTargetRectangle,
};
/**
 * Used to position an element relative to the given positioning props.
 * If positioning has been completed before, previousPositions can be passed to ensure that the positioning element
 * repositions based on its previous targets rather than starting with directionalhint.
 */
function positionElement(props, hostElement, elementToPosition, previousPositions) {
    return _positionElement(props, hostElement, elementToPosition, previousPositions);
}
function positionCallout(props, hostElement, elementToPosition, previousPositions) {
    return _positionCallout(props, hostElement, elementToPosition, previousPositions);
}
function positionCard(props, hostElement, elementToPosition, previousPositions) {
    return _positionCard(props, hostElement, elementToPosition, previousPositions);
}
/**
 * Gets the maximum height that a rectangle can have in order to fit below or above a target.
 * If the directional hint specifies a left or right edge (i.e. leftCenter) it will limit the height to the topBorder
 * of the target given.
 * If no bounds are provided then the window is treated as the bounds.
 */
function getMaxHeight(target, targetEdge, gapSpace, bounds, coverTarget) {
    if (gapSpace === void 0) { gapSpace = 0; }
    var mouseTarget = target;
    var elementTarget = target;
    var pointTarget = target;
    var targetRect;
    var boundingRectangle = bounds
        ? _getRectangleFromIRect(bounds)
        : new _Utilities__WEBPACK_IMPORTED_MODULE_2__["Rectangle"](0, window.innerWidth - Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["getScrollbarWidth"])(), 0, window.innerHeight);
    // eslint-disable-next-line deprecation/deprecation
    var left = pointTarget.left || pointTarget.x;
    // eslint-disable-next-line deprecation/deprecation
    var top = pointTarget.top || pointTarget.y;
    // eslint-disable-next-line no-extra-boolean-cast -- may not actually be a MouseEvent
    if (!!mouseTarget.stopPropagation) {
        targetRect = new _Utilities__WEBPACK_IMPORTED_MODULE_2__["Rectangle"](mouseTarget.clientX, mouseTarget.clientX, mouseTarget.clientY, mouseTarget.clientY);
    }
    else if (left !== undefined && top !== undefined) {
        targetRect = new _Utilities__WEBPACK_IMPORTED_MODULE_2__["Rectangle"](left, left, top, top);
    }
    else {
        targetRect = _getRectangleFromElement(elementTarget);
    }
    return _getMaxHeightFromTargetRectangle(targetRect, targetEdge, gapSpace, boundingRectangle, coverTarget);
}
/**
 * Returns the opposite edge of the given RectangleEdge.
 */
function getOppositeEdge(edge) {
    return edge * -1;
}
function _getBoundsFromTargetWindow(target, targetWindow) {
    var segments = undefined;
    if (targetWindow.getWindowSegments) {
        segments = targetWindow.getWindowSegments();
    }
    // Identify if we're dealing with single screen scenarios.
    if (segments === undefined || segments.length <= 1) {
        return {
            top: 0,
            left: 0,
            right: targetWindow.innerWidth,
            bottom: targetWindow.innerHeight,
            width: targetWindow.innerWidth,
            height: targetWindow.innerHeight,
        };
    }
    // Logic for determining dual screen scenarios.
    var x = 0;
    var y = 0;
    // If the target is an Element get coordinates for its center.
    if (target !== null && !!target.getBoundingClientRect) {
        var clientRect = target.getBoundingClientRect();
        x = (clientRect.left + clientRect.right) / 2;
        y = (clientRect.top + clientRect.bottom) / 2;
    }
    // If the target is not null get x-axis and y-axis coordinates directly.
    else if (target !== null) {
        // eslint-disable-next-line deprecation/deprecation
        x = target.left || target.x;
        // eslint-disable-next-line deprecation/deprecation
        y = target.top || target.y;
    }
    var bounds = { top: 0, left: 0, right: 0, bottom: 0, width: 0, height: 0 };
    // Define which window segment are the coordinates in and calculate bounds based on that.
    for (var _i = 0, segments_1 = segments; _i < segments_1.length; _i++) {
        var segment = segments_1[_i];
        if (x && segment.left <= x && segment.right >= x && y && segment.top <= y && segment.bottom >= y) {
            bounds = {
                top: segment.top,
                left: segment.left,
                right: segment.right,
                bottom: segment.bottom,
                width: segment.width,
                height: segment.height,
            };
        }
    }
    return bounds;
}
function getBoundsFromTargetWindow(target, targetWindow) {
    return _getBoundsFromTargetWindow(target, targetWindow);
}
//# sourceMappingURL=positioning.js.map

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

/***/ "izLr":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/Dropdown/Dropdown.base.js ***!
  \****************************************************************************************************************************************************************************************************/
/*! exports provided: DropdownBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropdownBase", function() { return DropdownBase; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Utilities */ "mkpW");
/* harmony import */ var _Callout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Callout */ "ioxN");
/* harmony import */ var _Checkbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Checkbox */ "l0uo");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Button */ "epn0");
/* harmony import */ var _common_DirectionalHint__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../common/DirectionalHint */ "EE7g");
/* harmony import */ var _Dropdown_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Dropdown.types */ "51rc");
/* harmony import */ var _utilities_DropdownSizePosCache__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utilities/DropdownSizePosCache */ "4tyD");
/* harmony import */ var _FocusZone__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../FocusZone */ "NMYH");
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../Icon */ "56LG");
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_Icon__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _Label__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../Label */ "wMNn");
/* harmony import */ var _KeytipData__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../KeytipData */ "iaSa");
/* harmony import */ var _Panel__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../Panel */ "p6C6");
/* harmony import */ var _utilities_decorators_withResponsiveMode__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../utilities/decorators/withResponsiveMode */ "5qgq");
/* harmony import */ var _utilities_decorators_withResponsiveMode__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_utilities_decorators_withResponsiveMode__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _utilities_selectableOption_index__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../utilities/selectableOption/index */ "/Djz");
















var getClassNames = Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["classNamesFunction"])();
var DropdownBase = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(DropdownBase, _super);
    function DropdownBase(props) {
        var _this = _super.call(this, props) || this;
        _this._host = react__WEBPACK_IMPORTED_MODULE_1__["createRef"]();
        _this._focusZone = react__WEBPACK_IMPORTED_MODULE_1__["createRef"]();
        _this._dropDown = react__WEBPACK_IMPORTED_MODULE_1__["createRef"]();
        _this._scrollIdleDelay = 250 /* ms */;
        _this._sizePosCache = new _utilities_DropdownSizePosCache__WEBPACK_IMPORTED_MODULE_8__["DropdownSizePosCache"]();
        _this._requestAnimationFrame = Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["safeRequestAnimationFrame"])(_this);
        _this._onChange = function (event, options, index, checked, multiSelect) {
            // eslint-disable-next-line deprecation/deprecation
            var _a = _this.props, onChange = _a.onChange, onChanged = _a.onChanged;
            if (onChange || onChanged) {
                // for single-select, option passed in will always be selected.
                // for multi-select, flip the checked value
                var changedOpt = multiSelect ? Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, options[index]), { selected: !checked }) : options[index];
                onChange && onChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, event), { target: _this._dropDown.current }), changedOpt, index);
                onChanged && onChanged(changedOpt, index);
            }
        };
        /** Get either props.placeholder (new name) or props.placeHolder (old name) */
        _this._getPlaceholder = function () {
            // eslint-disable-next-line deprecation/deprecation
            return _this.props.placeholder || _this.props.placeHolder;
        };
        /** Get text in dropdown input as a string */
        _this._getTitle = function (items, _unused) {
            var _a = _this.props.multiSelectDelimiter, multiSelectDelimiter = _a === void 0 ? ', ' : _a;
            return items.map(function (i) { return i.text; }).join(multiSelectDelimiter);
        };
        /** Render text in dropdown input */
        _this._onRenderTitle = function (items) {
            return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, _this._getTitle(items));
        };
        /** Render placeholder text in dropdown input */
        _this._onRenderPlaceholder = function (props) {
            if (!_this._getPlaceholder()) {
                return null;
            }
            return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, _this._getPlaceholder());
        };
        /** Render Callout or Panel container and pass in list */
        _this._onRenderContainer = function (props) {
            var calloutProps = props.calloutProps, panelProps = props.panelProps;
            var _a = _this.props, responsiveMode = _a.responsiveMode, dropdownWidth = _a.dropdownWidth;
            var isSmall = responsiveMode <= _utilities_decorators_withResponsiveMode__WEBPACK_IMPORTED_MODULE_14__["ResponsiveMode"].medium;
            var panelStyles = _this._classNames.subComponentStyles
                ? _this._classNames.subComponentStyles.panel
                : undefined;
            return isSmall ? (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Panel__WEBPACK_IMPORTED_MODULE_13__["Panel"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ isOpen: true, isLightDismiss: true, onDismiss: _this._onDismiss, hasCloseButton: false, styles: panelStyles }, panelProps), _this._renderFocusableList(props))) : (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Callout__WEBPACK_IMPORTED_MODULE_3__["Callout"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ isBeakVisible: false, gapSpace: 0, doNotLayer: false, directionalHintFixed: false, directionalHint: _common_DirectionalHint__WEBPACK_IMPORTED_MODULE_6__["DirectionalHint"].bottomLeftEdge }, calloutProps, { className: _this._classNames.callout, target: _this._dropDown.current, onDismiss: _this._onDismiss, onScroll: _this._onScroll, onPositioned: _this._onPositioned, calloutWidth: dropdownWidth || (_this._dropDown.current ? _this._dropDown.current.clientWidth : 0) }), _this._renderFocusableList(props)));
        };
        /** Render Caret Down Icon */
        _this._onRenderCaretDown = function (props) {
            return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Icon__WEBPACK_IMPORTED_MODULE_10__["Icon"], { className: _this._classNames.caretDown, iconName: "ChevronDown", "aria-hidden": true });
        };
        /** Render List of items */
        _this._onRenderList = function (props) {
            var _a = props.onRenderItem, onRenderItem = _a === void 0 ? _this._onRenderItem : _a;
            var queue = { items: [] };
            var renderedList = [];
            var emptyQueue = function () {
                var newGroup = queue.id
                    ? [
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { role: "group", key: queue.id, "aria-labelledby": queue.id }, queue.items),
                    ]
                    : queue.items;
                renderedList = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(renderedList, newGroup);
                // Flush items and id
                queue = { items: [] };
            };
            var placeRenderedOptionIntoQueue = function (item, index) {
                /*
                  Case Header
                    empty queue if it's not already empty
                    ensure unique ID for header and set queue ID
                    push header into queue
                  Case Divider
                    push divider into queue if not first item
                    empty queue if not already empty
                  Default
                    push item into queue
                */
                switch (item.itemType) {
                    case _utilities_selectableOption_index__WEBPACK_IMPORTED_MODULE_15__["SelectableOptionMenuItemType"].Header:
                        queue.items.length > 0 && emptyQueue();
                        var id = _this._id + item.key;
                        queue.items.push(onRenderItem(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ id: id }, item), { index: index }), _this._onRenderItem));
                        queue.id = id;
                        break;
                    case _utilities_selectableOption_index__WEBPACK_IMPORTED_MODULE_15__["SelectableOptionMenuItemType"].Divider:
                        index > 0 && queue.items.push(onRenderItem(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, item), { index: index }), _this._onRenderItem));
                        queue.items.length > 0 && emptyQueue();
                        break;
                    default:
                        queue.items.push(onRenderItem(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, item), { index: index }), _this._onRenderItem));
                }
            };
            // Place options into the queue. Queue will be emptied anytime a Header or Divider is encountered
            props.options.forEach(function (item, index) {
                placeRenderedOptionIntoQueue(item, index);
            });
            // Push remaining items into all renderedList
            queue.items.length > 0 && emptyQueue();
            return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, renderedList);
        };
        _this._onRenderItem = function (item) {
            switch (item.itemType) {
                case _utilities_selectableOption_index__WEBPACK_IMPORTED_MODULE_15__["SelectableOptionMenuItemType"].Divider:
                    return _this._renderSeparator(item);
                case _utilities_selectableOption_index__WEBPACK_IMPORTED_MODULE_15__["SelectableOptionMenuItemType"].Header:
                    return _this._renderHeader(item);
                default:
                    return _this._renderOption(item);
            }
        };
        _this._renderOption = function (item) {
            var _a = _this.props.onRenderOption, onRenderOption = _a === void 0 ? _this._onRenderOption : _a;
            var _b = _this.state.selectedIndices, selectedIndices = _b === void 0 ? [] : _b;
            var isItemSelected = item.index !== undefined && selectedIndices ? selectedIndices.indexOf(item.index) > -1 : false;
            // select the right className based on the combination of selected/disabled
            var itemClassName = item.hidden // predicate: item hidden
                ? _this._classNames.dropdownItemHidden
                : isItemSelected && item.disabled === true // predicate: both selected and disabled
                    ? _this._classNames.dropdownItemSelectedAndDisabled
                    : isItemSelected // predicate: selected only
                        ? _this._classNames.dropdownItemSelected
                        : item.disabled === true // predicate: disabled only
                            ? _this._classNames.dropdownItemDisabled
                            : _this._classNames.dropdownItem;
            var _c = item.title, title = _c === void 0 ? item.text : _c;
            var multiSelectItemStyles = _this._classNames.subComponentStyles
                ? _this._classNames.subComponentStyles.multiSelectItem
                : undefined;
            return !_this.props.multiSelect ? (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Button__WEBPACK_IMPORTED_MODULE_5__["CommandButton"], { id: _this._listId + item.index, key: item.key, "data-index": item.index, "data-is-focusable": !item.disabled, disabled: item.disabled, className: itemClassName, onClick: _this._onItemClick(item), 
                // eslint-disable-next-line react/jsx-no-bind
                onMouseEnter: _this._onItemMouseEnter.bind(_this, item), 
                // eslint-disable-next-line react/jsx-no-bind
                onMouseLeave: _this._onMouseItemLeave.bind(_this, item), 
                // eslint-disable-next-line react/jsx-no-bind
                onMouseMove: _this._onItemMouseMove.bind(_this, item), role: "option", "aria-selected": isItemSelected ? 'true' : 'false', ariaLabel: item.ariaLabel, title: title, "aria-posinset": _this._sizePosCache.positionInSet(item.index), "aria-setsize": _this._sizePosCache.optionSetSize }, onRenderOption(item, _this._onRenderOption))) : (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Checkbox__WEBPACK_IMPORTED_MODULE_4__["Checkbox"], { id: _this._listId + item.index, key: item.key, "data-index": item.index, "data-is-focusable": !item.disabled, disabled: item.disabled, onChange: _this._onItemClick(item), inputProps: {
                    'aria-selected': isItemSelected,
                    onMouseEnter: _this._onItemMouseEnter.bind(_this, item),
                    onMouseLeave: _this._onMouseItemLeave.bind(_this, item),
                    onMouseMove: _this._onItemMouseMove.bind(_this, item),
                    role: 'option',
                }, label: item.text, title: title, 
                // eslint-disable-next-line react/jsx-no-bind
                onRenderLabel: _this._onRenderItemLabel.bind(_this, item), className: itemClassName, checked: isItemSelected, styles: multiSelectItemStyles, ariaPositionInSet: _this._sizePosCache.positionInSet(item.index), ariaSetSize: _this._sizePosCache.optionSetSize }));
        };
        /** Render content of item (i.e. text/icon inside of button) */
        _this._onRenderOption = function (item) {
            return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", { className: _this._classNames.dropdownOptionText }, item.text);
        };
        /** Render custom label for drop down item */
        _this._onRenderItemLabel = function (item) {
            var _a = _this.props.onRenderOption, onRenderOption = _a === void 0 ? _this._onRenderOption : _a;
            return onRenderOption(item, _this._onRenderOption);
        };
        _this._onPositioned = function (positions) {
            if (_this._focusZone.current) {
                // Focusing an element can trigger a reflow. Making this wait until there is an animation
                // frame can improve perf significantly.
                _this._requestAnimationFrame(function () {
                    var selectedIndices = _this.state.selectedIndices;
                    if (_this._focusZone.current) {
                        if (selectedIndices && selectedIndices[0] && !_this.props.options[selectedIndices[0]].disabled) {
                            var element = Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["getDocument"])().getElementById(_this._id + "-list" + selectedIndices[0]);
                            if (element) {
                                _this._focusZone.current.focusElement(element);
                            }
                        }
                        else {
                            _this._focusZone.current.focus();
                        }
                    }
                });
            }
            if (!_this.state.calloutRenderEdge || _this.state.calloutRenderEdge !== positions.targetEdge) {
                _this.setState({
                    calloutRenderEdge: positions.targetEdge,
                });
            }
        };
        _this._onItemClick = function (item) {
            return function (event) {
                if (!item.disabled) {
                    _this.setSelectedIndex(event, item.index);
                    if (!_this.props.multiSelect) {
                        // only close the callout when it's in single-select mode
                        _this.setState({
                            isOpen: false,
                        });
                    }
                }
            };
        };
        /**
         * Scroll handler for the callout to make sure the mouse events
         * for updating focus are not interacting during scroll
         */
        _this._onScroll = function () {
            if (!_this._isScrollIdle && _this._scrollIdleTimeoutId !== undefined) {
                clearTimeout(_this._scrollIdleTimeoutId);
                _this._scrollIdleTimeoutId = undefined;
            }
            else {
                _this._isScrollIdle = false;
            }
            _this._scrollIdleTimeoutId = setTimeout(function () {
                _this._isScrollIdle = true;
            }, _this._scrollIdleDelay);
        };
        _this._onMouseItemLeave = function (item, ev) {
            if (_this._shouldIgnoreMouseEvent()) {
                return;
            }
            /**
             * IE11 focus() method forces parents to scroll to top of element.
             * Edge and IE expose a setActive() function for focusable divs that
             * sets the page focus but does not scroll the parent element.
             */
            if (_this._host.current) {
                if (_this._host.current.setActive) {
                    try {
                        _this._host.current.setActive();
                    }
                    catch (e) {
                        /* no-op */
                    }
                }
                else {
                    _this._host.current.focus();
                }
            }
        };
        _this._onDismiss = function () {
            _this.setState({ isOpen: false });
        };
        _this._onDropdownBlur = function (ev) {
            // If Dropdown disabled do not proceed with this logic.
            var disabled = _this._isDisabled();
            if (disabled) {
                return;
            }
            // hasFocus tracks whether the root element has focus so always update the state.
            _this.setState({ hasFocus: false });
            if (_this.state.isOpen) {
                // Do not onBlur when the callout is opened
                return;
            }
            if (_this.props.onBlur) {
                _this.props.onBlur(ev);
            }
        };
        _this._onDropdownKeyDown = function (ev) {
            // If Dropdown disabled do not process any keyboard events.
            var disabled = _this._isDisabled();
            if (disabled) {
                return;
            }
            // Take note if we are processing an alt (option) or meta (command) keydown.
            // See comment in _shouldHandleKeyUp for reasoning.
            _this._lastKeyDownWasAltOrMeta = _this._isAltOrMeta(ev);
            if (_this.props.onKeyDown) {
                _this.props.onKeyDown(ev);
                if (ev.defaultPrevented) {
                    return;
                }
            }
            var newIndex;
            var selectedIndex = _this.state.selectedIndices.length ? _this.state.selectedIndices[0] : -1;
            var containsExpandCollapseModifier = ev.altKey || ev.metaKey;
            var isOpen = _this.state.isOpen;
            switch (ev.which) {
                case _Utilities__WEBPACK_IMPORTED_MODULE_2__["KeyCodes"].enter:
                    _this.setState({
                        isOpen: !isOpen,
                    });
                    break;
                case _Utilities__WEBPACK_IMPORTED_MODULE_2__["KeyCodes"].escape:
                    if (!isOpen) {
                        return;
                    }
                    _this.setState({
                        isOpen: false,
                    });
                    break;
                case _Utilities__WEBPACK_IMPORTED_MODULE_2__["KeyCodes"].up:
                    if (containsExpandCollapseModifier) {
                        if (isOpen) {
                            _this.setState({ isOpen: false });
                            break;
                        }
                        return;
                    }
                    if (_this.props.multiSelect) {
                        _this.setState({ isOpen: true });
                    }
                    else if (!_this._isDisabled()) {
                        newIndex = _this._moveIndex(ev, -1, selectedIndex - 1, selectedIndex);
                    }
                    break;
                case _Utilities__WEBPACK_IMPORTED_MODULE_2__["KeyCodes"].down:
                    if (containsExpandCollapseModifier) {
                        ev.stopPropagation();
                        ev.preventDefault();
                    }
                    if ((containsExpandCollapseModifier && !isOpen) || _this.props.multiSelect) {
                        _this.setState({ isOpen: true });
                    }
                    else if (!_this._isDisabled()) {
                        newIndex = _this._moveIndex(ev, 1, selectedIndex + 1, selectedIndex);
                    }
                    break;
                case _Utilities__WEBPACK_IMPORTED_MODULE_2__["KeyCodes"].home:
                    if (!_this.props.multiSelect) {
                        newIndex = _this._moveIndex(ev, 1, 0, selectedIndex);
                    }
                    break;
                case _Utilities__WEBPACK_IMPORTED_MODULE_2__["KeyCodes"].end:
                    if (!_this.props.multiSelect) {
                        newIndex = _this._moveIndex(ev, -1, _this.props.options.length - 1, selectedIndex);
                    }
                    break;
                case _Utilities__WEBPACK_IMPORTED_MODULE_2__["KeyCodes"].space:
                    // event handled in _onDropdownKeyUp
                    break;
                default:
                    return;
            }
            if (newIndex !== selectedIndex) {
                ev.stopPropagation();
                ev.preventDefault();
            }
        };
        _this._onDropdownKeyUp = function (ev) {
            // If Dropdown disabled do not process any keyboard events.
            var disabled = _this._isDisabled();
            if (disabled) {
                return;
            }
            var shouldHandleKey = _this._shouldHandleKeyUp(ev);
            var isOpen = _this.state.isOpen;
            if (_this.props.onKeyUp) {
                _this.props.onKeyUp(ev);
                if (ev.defaultPrevented) {
                    return;
                }
            }
            switch (ev.which) {
                case _Utilities__WEBPACK_IMPORTED_MODULE_2__["KeyCodes"].space:
                    _this.setState({
                        isOpen: !isOpen,
                    });
                    break;
                default:
                    if (shouldHandleKey && isOpen) {
                        _this.setState({ isOpen: false });
                    }
                    return;
            }
            ev.stopPropagation();
            ev.preventDefault();
        };
        _this._onZoneKeyDown = function (ev) {
            var elementToFocus;
            // Take note if we are processing an alt (option) or meta (command) keydown.
            // See comment in _shouldHandleKeyUp for reasoning.
            _this._lastKeyDownWasAltOrMeta = _this._isAltOrMeta(ev);
            var containsExpandCollapseModifier = ev.altKey || ev.metaKey;
            switch (ev.which) {
                case _Utilities__WEBPACK_IMPORTED_MODULE_2__["KeyCodes"].up:
                    if (containsExpandCollapseModifier) {
                        _this.setState({ isOpen: false });
                    }
                    else {
                        if (_this._host.current) {
                            elementToFocus = Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["getLastFocusable"])(_this._host.current, _this._host.current.lastChild, true);
                        }
                    }
                    break;
                // All directional keystrokes should be canceled when the zone is rendered.
                // This avoids the body scroll from reacting and thus dismissing the dropdown.
                case _Utilities__WEBPACK_IMPORTED_MODULE_2__["KeyCodes"].home:
                case _Utilities__WEBPACK_IMPORTED_MODULE_2__["KeyCodes"].end:
                case _Utilities__WEBPACK_IMPORTED_MODULE_2__["KeyCodes"].pageUp:
                case _Utilities__WEBPACK_IMPORTED_MODULE_2__["KeyCodes"].pageDown:
                    break;
                case _Utilities__WEBPACK_IMPORTED_MODULE_2__["KeyCodes"].down:
                    if (!containsExpandCollapseModifier && _this._host.current) {
                        elementToFocus = Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["getFirstFocusable"])(_this._host.current, _this._host.current.firstChild, true);
                    }
                    break;
                case _Utilities__WEBPACK_IMPORTED_MODULE_2__["KeyCodes"].escape:
                    _this.setState({ isOpen: false });
                    break;
                case _Utilities__WEBPACK_IMPORTED_MODULE_2__["KeyCodes"].tab:
                    _this.setState({ isOpen: false });
                    return;
                default:
                    return;
            }
            if (elementToFocus) {
                elementToFocus.focus();
            }
            ev.stopPropagation();
            ev.preventDefault();
        };
        _this._onZoneKeyUp = function (ev) {
            var shouldHandleKey = _this._shouldHandleKeyUp(ev);
            if (shouldHandleKey && _this.state.isOpen) {
                _this.setState({ isOpen: false });
                ev.preventDefault();
            }
        };
        _this._onDropdownClick = function (ev) {
            if (_this.props.onClick) {
                _this.props.onClick(ev);
                if (ev.defaultPrevented) {
                    return;
                }
            }
            var isOpen = _this.state.isOpen;
            var disabled = _this._isDisabled();
            if (!disabled && !_this._shouldOpenOnFocus()) {
                _this.setState({
                    isOpen: !isOpen,
                });
            }
            _this._isFocusedByClick = false; // reset
        };
        _this._onDropdownMouseDown = function () {
            _this._isFocusedByClick = true;
        };
        _this._onFocus = function (ev) {
            var _a = _this.state, isOpen = _a.isOpen, selectedIndices = _a.selectedIndices;
            var multiSelect = _this.props.multiSelect;
            var disabled = _this._isDisabled();
            if (!disabled) {
                if (!_this._isFocusedByClick && !isOpen && selectedIndices.length === 0 && !multiSelect) {
                    // Per aria: https://www.w3.org/TR/wai-aria-practices-1.1/#listbox_kbd_interaction
                    _this._moveIndex(ev, 1, 0, -1);
                }
                if (_this.props.onFocus) {
                    _this.props.onFocus(ev);
                }
                var state = { hasFocus: true };
                if (_this._shouldOpenOnFocus()) {
                    state.isOpen = true;
                }
                _this.setState(state);
            }
        };
        /**
         * Because the isDisabled prop is deprecated, we have had to repeat this logic all over the place.
         * This helper method avoids all the repetition.
         */
        _this._isDisabled = function () {
            var disabled = _this.props.disabled;
            // eslint-disable-next-line deprecation/deprecation
            var isDisabled = _this.props.isDisabled;
            // Remove this deprecation workaround at 1.0.0
            if (disabled === undefined) {
                disabled = isDisabled;
            }
            return disabled;
        };
        _this._onRenderLabel = function (props) {
            var label = props.label, required = props.required, disabled = props.disabled;
            var labelStyles = _this._classNames.subComponentStyles
                ? _this._classNames.subComponentStyles.label
                : undefined;
            return label ? (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Label__WEBPACK_IMPORTED_MODULE_11__["Label"], { className: _this._classNames.label, id: _this._labelId, required: required, styles: labelStyles, disabled: disabled }, label)) : null;
        };
        Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["initializeComponentRef"])(_this);
        var multiSelect = props.multiSelect, selectedKey = props.selectedKey, selectedKeys = props.selectedKeys, defaultSelectedKey = props.defaultSelectedKey, defaultSelectedKeys = props.defaultSelectedKeys, options = props.options;
        if (true) {
            Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["warnDeprecations"])('Dropdown', props, {
                isDisabled: 'disabled',
                onChanged: 'onChange',
                placeHolder: 'placeholder',
                onRenderPlaceHolder: 'onRenderPlaceholder',
            });
            Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["warnMutuallyExclusive"])('Dropdown', props, {
                defaultSelectedKey: 'selectedKey',
                defaultSelectedKeys: 'selectedKeys',
                selectedKeys: 'selectedKey',
            });
            if (multiSelect) {
                var warnMultiSelect = function (prop) {
                    return Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["warn"])("Dropdown property '" + prop + "' cannot be used when 'multiSelect' is true. Use '" + prop + "s' instead.");
                };
                if (selectedKey !== undefined) {
                    warnMultiSelect('selectedKey');
                }
                if (defaultSelectedKey !== undefined) {
                    warnMultiSelect('defaultSelectedKey');
                }
            }
            else {
                var warnNotMultiSelect = function (prop) {
                    return Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["warn"])("Dropdown property '" + prop + "s' cannot be used when 'multiSelect' is false/unset. Use '" + prop + "' instead.");
                };
                if (selectedKeys !== undefined) {
                    warnNotMultiSelect('selectedKey');
                }
                if (defaultSelectedKeys !== undefined) {
                    warnNotMultiSelect('defaultSelectedKey');
                }
            }
        }
        _this._id = props.id || Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["getId"])('Dropdown');
        _this._labelId = _this._id + '-label';
        _this._listId = _this._id + '-list';
        _this._optionId = _this._id + '-option';
        _this._isScrollIdle = true;
        var selectedIndices;
        if (multiSelect) {
            selectedIndices = _this._getSelectedIndexes(options, defaultSelectedKeys !== undefined ? defaultSelectedKeys : selectedKeys);
        }
        else {
            selectedIndices = _this._getSelectedIndexes(options, (defaultSelectedKey !== undefined ? defaultSelectedKey : selectedKey));
        }
        _this._sizePosCache.updateOptions(options);
        _this.state = {
            isOpen: false,
            selectedIndices: selectedIndices,
            hasFocus: false,
            calloutRenderEdge: undefined,
        };
        return _this;
    }
    Object.defineProperty(DropdownBase.prototype, "selectedOptions", {
        /**
         * All selected options
         */
        get: function () {
            var options = this.props.options;
            var selectedIndices = this.state.selectedIndices;
            return Object(_utilities_selectableOption_index__WEBPACK_IMPORTED_MODULE_15__["getAllSelectedOptions"])(options, selectedIndices);
        },
        enumerable: true,
        configurable: true
    });
    DropdownBase.prototype.componentWillUnmount = function () {
        clearTimeout(this._scrollIdleTimeoutId);
    };
    DropdownBase.prototype.UNSAFE_componentWillReceiveProps = function (newProps) {
        // In controlled component usage where selectedKey is provided, update the selectedIndex
        // state if the key or options change.
        var selectedKeyProp;
        // this does a shallow compare (assumes options are pure), for the purposes of determining whether
        // defaultSelectedKey/defaultSelectedKeys are respected.
        var didOptionsChange = newProps.options !== this.props.options;
        if (newProps.multiSelect) {
            if (didOptionsChange && newProps.defaultSelectedKeys !== undefined) {
                selectedKeyProp = 'defaultSelectedKeys';
            }
            else {
                selectedKeyProp = 'selectedKeys';
            }
        }
        else {
            if (didOptionsChange && newProps.defaultSelectedKey !== undefined) {
                selectedKeyProp = 'defaultSelectedKey';
            }
            else {
                selectedKeyProp = 'selectedKey';
            }
        }
        if (newProps[selectedKeyProp] !== undefined &&
            (newProps[selectedKeyProp] !== this.props[selectedKeyProp] || didOptionsChange)) {
            this.setState({
                selectedIndices: this._getSelectedIndexes(newProps.options, newProps[selectedKeyProp]),
            });
        }
    };
    DropdownBase.prototype.componentDidUpdate = function (prevProps, prevState) {
        if (prevState.isOpen === true && this.state.isOpen === false) {
            this._gotMouseMove = false;
            if (this.props.onDismiss) {
                this.props.onDismiss();
            }
        }
    };
    DropdownBase.prototype.render = function () {
        var _this = this;
        var _a, _b;
        var id = this._id;
        var props = this.props;
        var className = props.className, label = props.label, options = props.options, ariaLabel = props.ariaLabel, required = props.required, errorMessage = props.errorMessage, keytipProps = props.keytipProps, propStyles = props.styles, theme = props.theme, panelProps = props.panelProps, calloutProps = props.calloutProps, multiSelect = props.multiSelect, _c = props.onRenderTitle, onRenderTitle = _c === void 0 ? this._getTitle : _c, _d = props.onRenderContainer, onRenderContainer = _d === void 0 ? this._onRenderContainer : _d, _e = props.onRenderCaretDown, onRenderCaretDown = _e === void 0 ? this._onRenderCaretDown : _e, _f = props.onRenderLabel, onRenderLabel = _f === void 0 ? this._onRenderLabel : _f;
        var _g = this.state, isOpen = _g.isOpen, selectedIndices = _g.selectedIndices, calloutRenderEdge = _g.calloutRenderEdge;
        // eslint-disable-next-line deprecation/deprecation
        var onRenderPlaceholder = props.onRenderPlaceholder || props.onRenderPlaceHolder || this._getPlaceholder;
        // If our cached options are out of date update our cache
        if (options !== this._sizePosCache.cachedOptions) {
            this._sizePosCache.updateOptions(options);
        }
        var selectedOptions = Object(_utilities_selectableOption_index__WEBPACK_IMPORTED_MODULE_15__["getAllSelectedOptions"])(options, selectedIndices);
        var divProps = Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["getNativeProps"])(props, _Utilities__WEBPACK_IMPORTED_MODULE_2__["divProperties"]);
        var disabled = this._isDisabled();
        var errorMessageId = id + '-errorMessage';
        var ariaActiveDescendant = disabled
            ? undefined
            : isOpen && selectedIndices.length === 1 && selectedIndices[0] >= 0
                ? this._listId + selectedIndices[0]
                : undefined;
        var ariaAttrs = multiSelect
            ? {
                role: 'button',
            }
            : // single select
                {
                    role: 'listbox',
                    childRole: 'option',
                    ariaRequired: required,
                    ariaSetSize: this._sizePosCache.optionSetSize,
                    ariaPosInSet: this._sizePosCache.positionInSet(selectedIndices[0]),
                    ariaSelected: selectedIndices[0] === undefined ? undefined : true,
                };
        this._classNames = getClassNames(propStyles, {
            theme: theme,
            className: className,
            hasError: !!(errorMessage && errorMessage.length > 0),
            hasLabel: !!label,
            isOpen: isOpen,
            required: required,
            disabled: disabled,
            isRenderingPlaceholder: !selectedOptions.length,
            panelClassName: (_a = panelProps) === null || _a === void 0 ? void 0 : _a.className,
            calloutClassName: (_b = calloutProps) === null || _b === void 0 ? void 0 : _b.className,
            calloutRenderEdge: calloutRenderEdge,
        });
        var hasErrorMessage = !!errorMessage && errorMessage.length > 0;
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: this._classNames.root },
            onRenderLabel(this.props, this._onRenderLabel),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_KeytipData__WEBPACK_IMPORTED_MODULE_12__["KeytipData"], { keytipProps: keytipProps, disabled: disabled }, function (keytipAttributes) { return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, keytipAttributes, { "data-is-focusable": !disabled, ref: _this._dropDown, id: id, tabIndex: disabled ? -1 : 0, role: ariaAttrs.role, "aria-haspopup": "listbox", "aria-expanded": isOpen ? 'true' : 'false', "aria-label": ariaLabel, "aria-labelledby": label && !ariaLabel ? Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["mergeAriaAttributeValues"])(_this._labelId, _this._optionId) : undefined, "aria-describedby": Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["mergeAriaAttributeValues"])(keytipAttributes['aria-describedby'], hasErrorMessage ? _this._id + '-errorMessage' : undefined), "aria-activedescendant": ariaActiveDescendant, "aria-required": ariaAttrs.ariaRequired, "aria-disabled": disabled, "aria-owns": isOpen ? _this._listId : undefined }, divProps, { className: _this._classNames.dropdown, onBlur: _this._onDropdownBlur, onKeyDown: _this._onDropdownKeyDown, onKeyUp: _this._onDropdownKeyUp, onClick: _this._onDropdownClick, onMouseDown: _this._onDropdownMouseDown, onFocus: _this._onFocus }),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", { id: _this._optionId, className: _this._classNames.title, "aria-live": "polite", "aria-atomic": true, "aria-invalid": hasErrorMessage, role: ariaAttrs.childRole, "aria-setsize": ariaAttrs.ariaSetSize, "aria-posinset": ariaAttrs.ariaPosInSet, "aria-selected": ariaAttrs.ariaSelected }, // If option is selected render title, otherwise render the placeholder text
                selectedOptions.length
                    ? onRenderTitle(selectedOptions, _this._onRenderTitle)
                    : onRenderPlaceholder(props, _this._onRenderPlaceholder)),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", { className: _this._classNames.caretDownWrapper }, onRenderCaretDown(props, _this._onRenderCaretDown)))); }),
            isOpen && onRenderContainer(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, props), { onDismiss: this._onDismiss }), this._onRenderContainer),
            hasErrorMessage && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { role: "alert", id: errorMessageId, className: this._classNames.errorMessage }, errorMessage))));
    };
    DropdownBase.prototype.focus = function (shouldOpenOnFocus) {
        if (this._dropDown.current) {
            this._dropDown.current.focus();
            if (shouldOpenOnFocus) {
                this.setState({
                    isOpen: true,
                });
            }
        }
    };
    DropdownBase.prototype.setSelectedIndex = function (event, index) {
        var _this = this;
        var _a = this.props, options = _a.options, selectedKey = _a.selectedKey, selectedKeys = _a.selectedKeys, multiSelect = _a.multiSelect, notifyOnReselect = _a.notifyOnReselect;
        var _b = this.state.selectedIndices, selectedIndices = _b === void 0 ? [] : _b;
        var checked = selectedIndices ? selectedIndices.indexOf(index) > -1 : false;
        var newIndexes = [];
        index = Math.max(0, Math.min(options.length - 1, index));
        // If this is a controlled component then no state change should take place.
        if (selectedKey !== undefined || selectedKeys !== undefined) {
            this._onChange(event, options, index, checked, multiSelect);
            return;
        }
        if (!multiSelect && !notifyOnReselect && index === selectedIndices[0]) {
            return;
        }
        else if (multiSelect) {
            newIndexes = selectedIndices ? this._copyArray(selectedIndices) : [];
            if (checked) {
                var position = newIndexes.indexOf(index);
                if (position > -1) {
                    // unchecked the current one
                    newIndexes.splice(position, 1);
                }
            }
            else {
                // add the new selected index into the existing one
                newIndexes.push(index);
            }
        }
        else {
            // Set the selected option if this is an uncontrolled component
            newIndexes = [index];
        }
        event.persist();
        // Call onChange after state is updated
        this.setState({
            selectedIndices: newIndexes,
        }, function () {
            _this._onChange(event, options, index, checked, multiSelect);
        });
    };
    DropdownBase.prototype._copyArray = function (array) {
        var newArray = [];
        for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
            var element = array_1[_i];
            newArray.push(element);
        }
        return newArray;
    };
    /**
     * Finds the next valid Dropdown option and sets the selected index to it.
     * @param stepValue - Value of how many items the function should traverse.  Should be -1 or 1.
     * @param index - Index of where the search should start
     * @param selectedIndex - The selectedIndex Dropdown's state
     * @returns The next valid dropdown option's index
     */
    DropdownBase.prototype._moveIndex = function (event, stepValue, index, selectedIndex) {
        var options = this.props.options;
        // Return selectedIndex if nothing has changed or options is empty
        if (selectedIndex === index || options.length === 0) {
            return selectedIndex;
        }
        // If the user is pressing the up or down key we want to make
        // sure that the dropdown cycles through the options without
        // causing the screen to scroll. In _onDropdownKeyDown
        // at the very end is a check to see if newIndex !== selectedIndex.
        // If the index is less than 0 and we set it back to 0, then
        // newIndex will equal selectedIndex and not stop the action
        // of the key press happening and vice versa for indexes greater
        // than or equal to the options length.
        if (index >= options.length) {
            index = 0;
        }
        else if (index < 0) {
            index = options.length - 1;
        }
        var stepCounter = 0;
        // If current index is a header or divider, or disabled, increment by step
        while (options[index].itemType === _Dropdown_types__WEBPACK_IMPORTED_MODULE_7__["DropdownMenuItemType"].Header ||
            options[index].itemType === _Dropdown_types__WEBPACK_IMPORTED_MODULE_7__["DropdownMenuItemType"].Divider ||
            options[index].disabled) {
            // If stepCounter exceeds length of options, then return selectedIndex (-1)
            if (stepCounter >= options.length) {
                return selectedIndex;
            }
            // If index + stepValue is out of bounds, wrap around
            if (index + stepValue < 0) {
                index = options.length;
            }
            else if (index + stepValue >= options.length) {
                index = -1;
            }
            index = index + stepValue;
            stepCounter++;
        }
        this.setSelectedIndex(event, index);
        return index;
    };
    /** Wrap item list in a FocusZone */
    DropdownBase.prototype._renderFocusableList = function (props) {
        var _a = props.onRenderList, onRenderList = _a === void 0 ? this._onRenderList : _a, label = props.label, ariaLabel = props.ariaLabel, multiSelect = props.multiSelect;
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: this._classNames.dropdownItemsWrapper, onKeyDown: this._onZoneKeyDown, onKeyUp: this._onZoneKeyUp, ref: this._host, tabIndex: 0 },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_FocusZone__WEBPACK_IMPORTED_MODULE_9__["FocusZone"], { ref: this._focusZone, direction: _FocusZone__WEBPACK_IMPORTED_MODULE_9__["FocusZoneDirection"].vertical, id: this._listId, className: this._classNames.dropdownItems, role: "listbox", "aria-label": ariaLabel, "aria-labelledby": label && !ariaLabel ? this._labelId : undefined, "aria-multiselectable": multiSelect }, onRenderList(props, this._onRenderList))));
    };
    DropdownBase.prototype._renderSeparator = function (item) {
        var index = item.index, key = item.key;
        if (index > 0) {
            return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { role: "separator", key: key, className: this._classNames.dropdownDivider });
        }
        return null;
    };
    DropdownBase.prototype._renderHeader = function (item) {
        var _a = this.props.onRenderOption, onRenderOption = _a === void 0 ? this._onRenderOption : _a;
        var key = item.key, id = item.id;
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { id: id, key: key, className: this._classNames.dropdownItemHeader }, onRenderOption(item, this._onRenderOption)));
    };
    DropdownBase.prototype._onItemMouseEnter = function (item, ev) {
        if (this._shouldIgnoreMouseEvent()) {
            return;
        }
        var targetElement = ev.currentTarget;
        targetElement.focus();
    };
    DropdownBase.prototype._onItemMouseMove = function (item, ev) {
        var targetElement = ev.currentTarget;
        this._gotMouseMove = true;
        if (!this._isScrollIdle || document.activeElement === targetElement) {
            return;
        }
        targetElement.focus();
    };
    DropdownBase.prototype._shouldIgnoreMouseEvent = function () {
        return !this._isScrollIdle || !this._gotMouseMove;
    };
    /** Get all selected indexes for multi-select mode */
    DropdownBase.prototype._getSelectedIndexes = function (options, selectedKey) {
        if (selectedKey === undefined) {
            if (this.props.multiSelect) {
                return this._getAllSelectedIndices(options);
            }
            var selectedIndex = this._getSelectedIndex(options, null);
            return selectedIndex !== -1 ? [selectedIndex] : [];
        }
        else if (!Array.isArray(selectedKey)) {
            var selectedIndex = this._getSelectedIndex(options, selectedKey);
            return selectedIndex !== -1 ? [selectedIndex] : [];
        }
        var selectedIndices = [];
        for (var _i = 0, selectedKey_1 = selectedKey; _i < selectedKey_1.length; _i++) {
            var key = selectedKey_1[_i];
            var selectedIndex = this._getSelectedIndex(options, key);
            selectedIndex !== -1 && selectedIndices.push(selectedIndex);
        }
        return selectedIndices;
    };
    DropdownBase.prototype._getAllSelectedIndices = function (options) {
        return options
            .map(function (option, index) { return (option.selected ? index : -1); })
            .filter(function (index) { return index !== -1; });
    };
    DropdownBase.prototype._getSelectedIndex = function (options, selectedKey) {
        return Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["findIndex"])(options, function (option) {
            // eslint-disable-next-line eqeqeq
            if (selectedKey != null) {
                return option.key === selectedKey;
            }
            else {
                // eslint-disable-next-line deprecation/deprecation
                return !!option.selected || !!option.isSelected;
            }
        });
    };
    /**
     * Returns true if the key for the event is alt (Mac option) or meta (Mac command).
     */
    DropdownBase.prototype._isAltOrMeta = function (ev) {
        return ev.which === _Utilities__WEBPACK_IMPORTED_MODULE_2__["KeyCodes"].alt || ev.key === 'Meta';
    };
    /**
     * We close the menu on key up only if ALL of the following are true:
     * - Most recent key down was alt or meta (command)
     * - The alt/meta key down was NOT followed by some other key (such as down/up arrow to
     *   expand/collapse the menu)
     * - We're not on a Mac (or iOS)
     *
     * This is because on Windows, pressing alt moves focus to the application menu bar or similar,
     * closing any open context menus. There is not a similar behavior on Macs.
     */
    DropdownBase.prototype._shouldHandleKeyUp = function (ev) {
        var keyPressIsAltOrMetaAlone = this._lastKeyDownWasAltOrMeta && this._isAltOrMeta(ev);
        this._lastKeyDownWasAltOrMeta = false;
        return !!keyPressIsAltOrMetaAlone && !(Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["isMac"])() || Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["isIOS"])());
    };
    /**
     * Returns true if dropdown should set to open on focus.
     * Otherwise, isOpen state should be toggled on click
     */
    DropdownBase.prototype._shouldOpenOnFocus = function () {
        var hasFocus = this.state.hasFocus;
        var openOnKeyboardFocus = this.props.openOnKeyboardFocus;
        return !this._isFocusedByClick && openOnKeyboardFocus === true && !hasFocus;
    };
    DropdownBase.defaultProps = {
        options: [],
    };
    DropdownBase = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        _utilities_decorators_withResponsiveMode__WEBPACK_IMPORTED_MODULE_14__["withResponsiveMode"]
    ], DropdownBase);
    return DropdownBase;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));

//# sourceMappingURL=Dropdown.base.js.map

/***/ }),

/***/ "j6qd":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/KeytipData/useKeytipData.js ***!
  \******************************************************************************************************************************************************************************************************/
/*! exports provided: useKeytipData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useKeytipData", function() { return useKeytipData; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _uifabric_react_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @uifabric/react-hooks */ "v+W9");
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Utilities */ "mkpW");
/* harmony import */ var _utilities_keytips_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utilities/keytips/index */ "GKG/");





/**
 * Hook that creates attributes for components which are enabled with Keytip.
 */
function useKeytipData(options) {
    var _a, _b;
    var uniqueId = react__WEBPACK_IMPORTED_MODULE_1__["useRef"]();
    var keytipProps = options.keytipProps
        ? Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ disabled: options.disabled }, options.keytipProps) : undefined;
    var keytipManager = Object(_uifabric_react_hooks__WEBPACK_IMPORTED_MODULE_2__["useConst"])(_utilities_keytips_index__WEBPACK_IMPORTED_MODULE_4__["KeytipManager"].getInstance());
    react__WEBPACK_IMPORTED_MODULE_1__["useEffect"](function () {
        // Register Keytip in KeytipManager
        if (keytipProps) {
            uniqueId.current = keytipManager.register(keytipProps);
        }
        return function () {
            // Unregister Keytip in KeytipManager
            keytipProps && keytipManager.unregister(keytipProps, uniqueId.current);
        };
        // this is meant to run only at mount, and updates are handled separately
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    var prevOptions = Object(_uifabric_react_hooks__WEBPACK_IMPORTED_MODULE_2__["usePrevious"])(options);
    if (uniqueId.current &&
        keytipProps &&
        (((_a = prevOptions) === null || _a === void 0 ? void 0 : _a.keytipProps) !== options.keytipProps || ((_b = prevOptions) === null || _b === void 0 ? void 0 : _b.disabled) !== options.disabled)) {
        keytipManager.update(keytipProps, uniqueId.current);
    }
    var nativeKeytipProps = {
        ariaDescribedBy: undefined,
        keytipId: undefined,
    };
    if (keytipProps) {
        nativeKeytipProps = getKeytipData(keytipManager, keytipProps, options.ariaDescribedBy);
    }
    return nativeKeytipProps;
}
/**
 * Gets the aria- and data- attributes to attach to the component
 * @param keytipProps - options for Keytip
 * @param describedByPrepend - ariaDescribedBy value to prepend
 */
function getKeytipData(keytipManager, keytipProps, describedByPrepend) {
    // Add the parent overflow sequence if necessary
    var newKeytipProps = keytipManager.addParentOverflow(keytipProps);
    // Construct aria-describedby and data-ktp-id attributes
    var ariaDescribedBy = Object(_Utilities__WEBPACK_IMPORTED_MODULE_3__["mergeAriaAttributeValues"])(describedByPrepend, Object(_utilities_keytips_index__WEBPACK_IMPORTED_MODULE_4__["getAriaDescribedBy"])(newKeytipProps.keySequences));
    var keySequences = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(newKeytipProps.keySequences);
    if (newKeytipProps.overflowSetSequence) {
        keySequences = Object(_utilities_keytips_index__WEBPACK_IMPORTED_MODULE_4__["mergeOverflows"])(keySequences, newKeytipProps.overflowSetSequence);
    }
    var keytipId = Object(_utilities_keytips_index__WEBPACK_IMPORTED_MODULE_4__["sequencesToID"])(keySequences);
    return {
        ariaDescribedBy: ariaDescribedBy,
        keytipId: keytipId,
    };
}
//# sourceMappingURL=useKeytipData.js.map

/***/ }),

/***/ "jBk9":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/SpinButton/SpinButton.classNames.js ***!
  \**************************************************************************************************************************************************************************************************************/
/*! exports provided: getClassNames */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getClassNames", function() { return getClassNames; });
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Utilities */ "mkpW");
/* harmony import */ var _Styling__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Styling */ "PL71");
/* harmony import */ var _utilities_positioning__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utilities/positioning */ "gdZc");



var getClassNames = Object(_Utilities__WEBPACK_IMPORTED_MODULE_0__["memoizeFunction"])(function (styles, disabled, isFocused, keyboardSpinDirection, labelPosition, className) {
    if (labelPosition === void 0) { labelPosition = _utilities_positioning__WEBPACK_IMPORTED_MODULE_2__["Position"].start; }
    if (className === void 0) { className = undefined; }
    return {
        root: Object(_Styling__WEBPACK_IMPORTED_MODULE_1__["mergeStyles"])(styles.root, className),
        labelWrapper: Object(_Styling__WEBPACK_IMPORTED_MODULE_1__["mergeStyles"])(styles.labelWrapper, _getStyleForLabelBasedOnPosition(labelPosition, styles)),
        icon: Object(_Styling__WEBPACK_IMPORTED_MODULE_1__["mergeStyles"])(styles.icon, disabled && styles.iconDisabled),
        label: Object(_Styling__WEBPACK_IMPORTED_MODULE_1__["mergeStyles"])(styles.label),
        spinButtonWrapper: Object(_Styling__WEBPACK_IMPORTED_MODULE_1__["mergeStyles"])(styles.spinButtonWrapper, _getStyleForRootBasedOnPosition(labelPosition, styles), !disabled && [
            {
                selectors: {
                    ':hover': styles.spinButtonWrapperHovered,
                },
            },
            isFocused && {
                // This is to increase the specificity of the focus styles
                // and make it equal to that of the hover styles.
                selectors: {
                    '&&': styles.spinButtonWrapperFocused,
                },
            },
        ], disabled && styles.spinButtonWrapperDisabled),
        input: Object(_Styling__WEBPACK_IMPORTED_MODULE_1__["mergeStyles"])('ms-spinButton-input', styles.input, !disabled && {
            selectors: {
                '::selection': styles.inputTextSelected,
            },
        }, disabled && styles.inputDisabled),
        arrowBox: Object(_Styling__WEBPACK_IMPORTED_MODULE_1__["mergeStyles"])(styles.arrowButtonsContainer, disabled && styles.arrowButtonsContainerDisabled),
    };
});
/**
 * Returns the Style corresponding to the label position
 */
function _getStyleForLabelBasedOnPosition(labelPosition, styles) {
    switch (labelPosition) {
        case _utilities_positioning__WEBPACK_IMPORTED_MODULE_2__["Position"].start:
            return styles.labelWrapperStart;
        case _utilities_positioning__WEBPACK_IMPORTED_MODULE_2__["Position"].end:
            return styles.labelWrapperEnd;
        case _utilities_positioning__WEBPACK_IMPORTED_MODULE_2__["Position"].top:
            return styles.labelWrapperTop;
        case _utilities_positioning__WEBPACK_IMPORTED_MODULE_2__["Position"].bottom:
            return styles.labelWrapperBottom;
    }
}
/**
 * Returns the Style corresponding to the label position
 */
function _getStyleForRootBasedOnPosition(labelPosition, styles) {
    switch (labelPosition) {
        case _utilities_positioning__WEBPACK_IMPORTED_MODULE_2__["Position"].top:
        case _utilities_positioning__WEBPACK_IMPORTED_MODULE_2__["Position"].bottom:
            return styles.spinButtonWrapperTopBottom;
        default:
            return {};
    }
}
//# sourceMappingURL=SpinButton.classNames.js.map

/***/ }),

/***/ "k11K":
/*!****************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@uifabric/utilities@7.33.2_baa7aab8a1d5d20fe3858de8537800ba/node_modules/@uifabric/utilities/lib/warn.js ***!
  \****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Loading @uifabric/utilities/./lib/warn.js
var pkg = __webpack_require__(/*! @ms/uifabric-styling-bundle */ "fglE");
module.exports = pkg._Utilities;

/***/ }),

/***/ "l0uo":
/*!***************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/Checkbox.js ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: Checkbox, CheckboxBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Checkbox_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Checkbox/index */ "6bbY");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Checkbox", function() { return _components_Checkbox_index__WEBPACK_IMPORTED_MODULE_0__["Checkbox"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CheckboxBase", function() { return _components_Checkbox_index__WEBPACK_IMPORTED_MODULE_0__["CheckboxBase"]; });


//# sourceMappingURL=Checkbox.js.map

/***/ }),

/***/ "miSs":
/*!**************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@uifabric/react-hooks@7.13.9_c129be21209ec549b9ba61bf76d54bcc/node_modules/@uifabric/react-hooks/lib/useBoolean.js ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: useBoolean */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useBoolean", function() { return useBoolean; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useConst__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useConst */ "SKm6");


/**
 * Hook to store a value and generate callbacks for setting the value to true or false.
 * The identity of the callbacks will always stay the same.
 *
 * @param initialState - Initial value
 * @returns Array with the current value and an object containing the updater callbacks.
 */
function useBoolean(initialState) {
    var _a = react__WEBPACK_IMPORTED_MODULE_0__["useState"](initialState), value = _a[0], setValue = _a[1];
    // Storing the value in a ref is redundant but allows the `toggle` callback to have a
    // constant identity, which overall is probably better for consumers' perf.
    var valueRef = react__WEBPACK_IMPORTED_MODULE_0__["useRef"](value);
    var setTrue = Object(_useConst__WEBPACK_IMPORTED_MODULE_1__["useConst"])(function () { return function () {
        setValue(true);
        valueRef.current = true;
    }; });
    var setFalse = Object(_useConst__WEBPACK_IMPORTED_MODULE_1__["useConst"])(function () { return function () {
        setValue(false);
        valueRef.current = false;
    }; });
    var toggle = Object(_useConst__WEBPACK_IMPORTED_MODULE_1__["useConst"])(function () { return function () { return (valueRef.current ? setFalse() : setTrue()); }; });
    return [value, { setTrue: setTrue, setFalse: setFalse, toggle: toggle }];
}
//# sourceMappingURL=useBoolean.js.map

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

/***/ "nL6P":
/*!********************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@uifabric/react-hooks@7.13.9_c129be21209ec549b9ba61bf76d54bcc/node_modules/@uifabric/react-hooks/lib/useConstCallback.js ***!
  \********************************************************************************************************************************************************************************/
/*! exports provided: useConstCallback */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useConstCallback", function() { return useConstCallback; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/**
 * @deprecated Deprecated due to potential for misuse (see package readme).
 * Use `React.useCallback` instead.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function useConstCallback(callback) {
    var ref = react__WEBPACK_IMPORTED_MODULE_0__["useRef"]();
    if (!ref.current) {
        ref.current = callback;
    }
    return ref.current;
}
//# sourceMappingURL=useConstCallback.js.map

/***/ }),

/***/ "ngOG":
/*!************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@uifabric/react-hooks@7.13.9_c129be21209ec549b9ba61bf76d54bcc/node_modules/@uifabric/react-hooks/lib/useControllableValue.js ***!
  \************************************************************************************************************************************************************************************/
/*! exports provided: useControllableValue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useControllableValue", function() { return useControllableValue; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useConst__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useConst */ "SKm6");


function useControllableValue(controlledValue, defaultUncontrolledValue, onChange) {
    var _a = react__WEBPACK_IMPORTED_MODULE_0__["useState"](defaultUncontrolledValue), value = _a[0], setValue = _a[1];
    var isControlled = Object(_useConst__WEBPACK_IMPORTED_MODULE_1__["useConst"])(controlledValue !== undefined);
    var currentValue = isControlled ? controlledValue : value;
    // Duplicate the current value and onChange in refs so they're accessible from
    // setValueOrCallOnChange without creating a new callback every time
    var valueRef = react__WEBPACK_IMPORTED_MODULE_0__["useRef"](currentValue);
    var onChangeRef = react__WEBPACK_IMPORTED_MODULE_0__["useRef"](onChange);
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](function () {
        valueRef.current = currentValue;
        onChangeRef.current = onChange;
    });
    // To match the behavior of the setter returned by React.useState, this callback's identity
    // should never change. This means it MUST NOT directly reference variables that can change.
    var setValueOrCallOnChange = Object(_useConst__WEBPACK_IMPORTED_MODULE_1__["useConst"])(function () { return function (update, ev) {
        // Assuming here that TValue is not a function, because a controllable value will typically
        // be something a user can enter as input
        var newValue = typeof update === 'function' ? update(valueRef.current) : update;
        if (onChangeRef.current) {
            onChangeRef.current(ev, newValue);
        }
        if (!isControlled) {
            setValue(newValue);
        }
    }; });
    return [currentValue, setValueOrCallOnChange];
}
//# sourceMappingURL=useControllableValue.js.map

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

/***/ "qepx":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/KeytipData/KeytipData.js ***!
  \***************************************************************************************************************************************************************************************************/
/*! exports provided: KeytipData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeytipData", function() { return KeytipData; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utilities_keytips_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utilities/keytips/index */ "GKG/");
/* harmony import */ var _useKeytipData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useKeytipData */ "j6qd");



/**
 * A small element to help the target component correctly read out its aria-describedby for its Keytip
 * {@docCategory Keytips}
 */
var KeytipData = function (props) {
    var _a;
    var children = props.children, keytipDataProps = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(props, ["children"]);
    var _b = Object(_useKeytipData__WEBPACK_IMPORTED_MODULE_2__["useKeytipData"])(keytipDataProps), keytipId = _b.keytipId, ariaDescribedBy = _b.ariaDescribedBy;
    return children((_a = {},
        _a[_utilities_keytips_index__WEBPACK_IMPORTED_MODULE_1__["DATAKTP_TARGET"]] = keytipId,
        _a[_utilities_keytips_index__WEBPACK_IMPORTED_MODULE_1__["DATAKTP_EXECUTE_TARGET"]] = keytipId,
        _a['aria-describedby'] = ariaDescribedBy,
        _a));
};
//# sourceMappingURL=KeytipData.js.map

/***/ }),

/***/ "tpD7":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/KeytipData/index.js ***!
  \**********************************************************************************************************************************************************************************************/
/*! exports provided: KeytipData, useKeytipRef */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _KeytipData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./KeytipData */ "qepx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KeytipData", function() { return _KeytipData__WEBPACK_IMPORTED_MODULE_0__["KeytipData"]; });

/* harmony import */ var _useKeytipRef__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useKeytipRef */ "+eNG");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useKeytipRef", function() { return _useKeytipRef__WEBPACK_IMPORTED_MODULE_1__["useKeytipRef"]; });



//# sourceMappingURL=index.js.map

/***/ }),

/***/ "u2nG":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/Checkbox/Checkbox.js ***!
  \***********************************************************************************************************************************************************************************************/
/*! exports provided: Checkbox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Checkbox", function() { return Checkbox; });
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Utilities */ "mkpW");
/* harmony import */ var _Checkbox_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Checkbox.base */ "ElRa");
/* harmony import */ var _Checkbox_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Checkbox.styles */ "gw9X");



var Checkbox = Object(_Utilities__WEBPACK_IMPORTED_MODULE_0__["styled"])(_Checkbox_base__WEBPACK_IMPORTED_MODULE_1__["CheckboxBase"], _Checkbox_styles__WEBPACK_IMPORTED_MODULE_2__["getStyles"], undefined, { scope: 'Checkbox' });
//# sourceMappingURL=Checkbox.js.map

/***/ }),

/***/ "uuEG":
/*!****************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@fluentui/react-window-provider@1.0.1_c129be21209ec549b9ba61bf76d54bcc/node_modules/@fluentui/react-window-provider/lib/index.js ***!
  \****************************************************************************************************************************************************************************************/
/*! exports provided: WindowContext, useWindow, useDocument, WindowProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _WindowProvider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./WindowProvider */ "Lbeb");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WindowContext", function() { return _WindowProvider__WEBPACK_IMPORTED_MODULE_0__["WindowContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useWindow", function() { return _WindowProvider__WEBPACK_IMPORTED_MODULE_0__["useWindow"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useDocument", function() { return _WindowProvider__WEBPACK_IMPORTED_MODULE_0__["useDocument"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WindowProvider", function() { return _WindowProvider__WEBPACK_IMPORTED_MODULE_0__["WindowProvider"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "v+W9":
/*!*********************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@uifabric/react-hooks@7.13.9_c129be21209ec549b9ba61bf76d54bcc/node_modules/@uifabric/react-hooks/lib/index.js ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: useAsync, useBoolean, useConst, useConstCallback, useControllableValue, useForceUpdate, useId, useMergedRefs, useOnEvent, usePrevious, useRefEffect, useSetInterval, useSetTimeout, useTarget, useWarnings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _version__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./version */ "33JT");
/* harmony import */ var _useAsync__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useAsync */ "0ve4");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useAsync", function() { return _useAsync__WEBPACK_IMPORTED_MODULE_1__["useAsync"]; });

/* harmony import */ var _useBoolean__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useBoolean */ "miSs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useBoolean", function() { return _useBoolean__WEBPACK_IMPORTED_MODULE_2__["useBoolean"]; });

/* harmony import */ var _useConst__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./useConst */ "SKm6");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useConst", function() { return _useConst__WEBPACK_IMPORTED_MODULE_3__["useConst"]; });

/* harmony import */ var _useConstCallback__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./useConstCallback */ "nL6P");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useConstCallback", function() { return _useConstCallback__WEBPACK_IMPORTED_MODULE_4__["useConstCallback"]; });

/* harmony import */ var _useControllableValue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./useControllableValue */ "ngOG");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useControllableValue", function() { return _useControllableValue__WEBPACK_IMPORTED_MODULE_5__["useControllableValue"]; });

/* harmony import */ var _useForceUpdate__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./useForceUpdate */ "Z1Bs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useForceUpdate", function() { return _useForceUpdate__WEBPACK_IMPORTED_MODULE_6__["useForceUpdate"]; });

/* harmony import */ var _useId__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./useId */ "cuTR");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useId", function() { return _useId__WEBPACK_IMPORTED_MODULE_7__["useId"]; });

/* harmony import */ var _useMergedRefs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./useMergedRefs */ "xzES");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useMergedRefs", function() { return _useMergedRefs__WEBPACK_IMPORTED_MODULE_8__["useMergedRefs"]; });

/* harmony import */ var _useOnEvent__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./useOnEvent */ "S37p");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useOnEvent", function() { return _useOnEvent__WEBPACK_IMPORTED_MODULE_9__["useOnEvent"]; });

/* harmony import */ var _usePrevious__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./usePrevious */ "aBU9");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "usePrevious", function() { return _usePrevious__WEBPACK_IMPORTED_MODULE_10__["usePrevious"]; });

/* harmony import */ var _useRefEffect__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./useRefEffect */ "cB7q");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useRefEffect", function() { return _useRefEffect__WEBPACK_IMPORTED_MODULE_11__["useRefEffect"]; });

/* harmony import */ var _useSetInterval__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./useSetInterval */ "ED3/");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useSetInterval", function() { return _useSetInterval__WEBPACK_IMPORTED_MODULE_12__["useSetInterval"]; });

/* harmony import */ var _useSetTimeout__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./useSetTimeout */ "KjqC");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useSetTimeout", function() { return _useSetTimeout__WEBPACK_IMPORTED_MODULE_13__["useSetTimeout"]; });

/* harmony import */ var _useTarget__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./useTarget */ "5GBt");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useTarget", function() { return _useTarget__WEBPACK_IMPORTED_MODULE_14__["useTarget"]; });

/* harmony import */ var _useWarnings__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./useWarnings */ "DA5T");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useWarnings", function() { return _useWarnings__WEBPACK_IMPORTED_MODULE_15__["useWarnings"]; });

















//# sourceMappingURL=index.js.map

/***/ }),

/***/ "vVt9":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/SpinButton/SpinButton.styles.js ***!
  \**********************************************************************************************************************************************************************************************************/
/*! exports provided: getArrowButtonStyles, getStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getArrowButtonStyles", function() { return getArrowButtonStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStyles", function() { return getStyles; });
/* harmony import */ var _Styling__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Styling */ "PL71");
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Utilities */ "mkpW");


var ARROW_BUTTON_WIDTH = 23;
var ARROW_BUTTON_ICON_SIZE = 8;
var DEFAULT_HEIGHT = 32;
var DEFAULT_MIN_WIDTH = 86;
var LABEL_MARGIN = 10;
var _getDisabledStyles = Object(_Utilities__WEBPACK_IMPORTED_MODULE_1__["memoizeFunction"])(function (theme) {
    var _a;
    var semanticColors = theme.semanticColors;
    var SpinButtonTextColorDisabled = semanticColors.disabledText;
    var SpinButtonBackgroundColorDisabled = semanticColors.disabledBackground;
    return {
        backgroundColor: SpinButtonBackgroundColorDisabled,
        pointerEvents: 'none',
        cursor: 'default',
        color: SpinButtonTextColorDisabled,
        selectors: (_a = {
                ':after': {
                    borderColor: SpinButtonBackgroundColorDisabled,
                }
            },
            _a[_Styling__WEBPACK_IMPORTED_MODULE_0__["HighContrastSelector"]] = {
                color: 'GrayText',
            },
            _a),
    };
});
var getArrowButtonStyles = Object(_Utilities__WEBPACK_IMPORTED_MODULE_1__["memoizeFunction"])(function (theme, isUpArrow, customSpecificArrowStyles) {
    var _a, _b, _c;
    var palette = theme.palette, semanticColors = theme.semanticColors, effects = theme.effects;
    // TODO: after updating the semanticColor slots all this need to be reevaluated.
    var ArrowButtonTextColor = palette.neutralSecondary;
    var ArrowButtonTextColorHovered = semanticColors.buttonText;
    var ArrowButtonTextColorPressed = semanticColors.buttonText;
    var ArrowButtonBackgroundHovered = semanticColors.buttonBackgroundHovered;
    var ArrowButtonBackgroundPressed = semanticColors.buttonBackgroundPressed;
    var defaultArrowButtonStyles = {
        root: {
            outline: 'none',
            display: 'block',
            height: '50%',
            width: ARROW_BUTTON_WIDTH,
            padding: 0,
            backgroundColor: 'transparent',
            textAlign: 'center',
            cursor: 'default',
            color: ArrowButtonTextColor,
            selectors: {
                '&.ms-DownButton': {
                    borderRadius: "0 0 " + effects.roundedCorner2 + " 0",
                },
                '&.ms-UpButton': {
                    borderRadius: "0 " + effects.roundedCorner2 + " 0 0",
                },
            },
        },
        rootHovered: {
            backgroundColor: ArrowButtonBackgroundHovered,
            color: ArrowButtonTextColorHovered,
        },
        rootChecked: {
            backgroundColor: ArrowButtonBackgroundPressed,
            color: ArrowButtonTextColorPressed,
            selectors: (_a = {},
                _a[_Styling__WEBPACK_IMPORTED_MODULE_0__["HighContrastSelector"]] = {
                    backgroundColor: 'Highlight',
                    color: 'HighlightText',
                },
                _a),
        },
        rootPressed: {
            backgroundColor: ArrowButtonBackgroundPressed,
            color: ArrowButtonTextColorPressed,
            selectors: (_b = {},
                _b[_Styling__WEBPACK_IMPORTED_MODULE_0__["HighContrastSelector"]] = {
                    backgroundColor: 'Highlight',
                    color: 'HighlightText',
                },
                _b),
        },
        rootDisabled: {
            opacity: 0.5,
            selectors: (_c = {},
                _c[_Styling__WEBPACK_IMPORTED_MODULE_0__["HighContrastSelector"]] = {
                    color: 'GrayText',
                    opacity: 1,
                },
                _c),
        },
        icon: {
            fontSize: ARROW_BUTTON_ICON_SIZE,
            marginTop: 0,
            marginRight: 0,
            marginBottom: 0,
            marginLeft: 0,
        },
    };
    // No specific styles needed as of now.
    var defaultUpArrowButtonStyles = {};
    var defaultDownArrowButtonStyles = {};
    return Object(_Styling__WEBPACK_IMPORTED_MODULE_0__["concatStyleSets"])(defaultArrowButtonStyles, isUpArrow ? defaultUpArrowButtonStyles : defaultDownArrowButtonStyles, customSpecificArrowStyles);
});
var getStyles = Object(_Utilities__WEBPACK_IMPORTED_MODULE_1__["memoizeFunction"])(function (theme, customStyles) {
    var _a, _b;
    var palette = theme.palette, semanticColors = theme.semanticColors, effects = theme.effects, fonts = theme.fonts;
    var SpinButtonRootBorderColor = semanticColors.inputBorder;
    var SpinButtonRootBackgroundColor = semanticColors.inputBackground;
    var SpinButtonRootBorderColorHovered = semanticColors.inputBorderHovered;
    var SpinButtonRootBorderColorFocused = semanticColors.inputFocusBorderAlt;
    var SpinButtonInputTextColor = semanticColors.inputText;
    var SpinButtonInputTextColorSelected = palette.white;
    var SpinButtonInputBackgroundColorSelected = semanticColors.inputBackgroundChecked;
    var SpinButtonIconDisabledColor = semanticColors.disabledText;
    var defaultStyles = {
        root: [
            fonts.medium,
            {
                outline: 'none',
                width: '100%',
                minWidth: DEFAULT_MIN_WIDTH,
            },
        ],
        labelWrapper: {
            display: 'inline-flex',
            alignItems: 'center',
        },
        labelWrapperStart: {
            height: DEFAULT_HEIGHT,
            float: 'left',
            marginRight: LABEL_MARGIN,
        },
        labelWrapperEnd: {
            height: DEFAULT_HEIGHT,
            float: 'right',
            marginLeft: LABEL_MARGIN,
        },
        labelWrapperTop: {
            // Due to the lineHeight set on the label (below), the height of the wrapper (contains icon+label)
            // ends up 1px taller than a standard label height, causing the vertical alignment to be off when
            // the SpinButton is displayed with the label on top next to other form fields.
            // Decrease the wrapper's effective height slightly to compensate.
            marginBottom: -1,
        },
        labelWrapperBottom: {},
        icon: {
            padding: '0 5px',
            fontSize: _Styling__WEBPACK_IMPORTED_MODULE_0__["IconFontSizes"].large,
        },
        iconDisabled: {
            color: SpinButtonIconDisabledColor,
        },
        label: {
            pointerEvents: 'none',
            // centering the label with the icon by forcing the exact same height as the icon.
            lineHeight: _Styling__WEBPACK_IMPORTED_MODULE_0__["IconFontSizes"].large,
        },
        labelDisabled: {},
        spinButtonWrapper: {
            display: 'flex',
            position: 'relative',
            boxSizing: 'border-box',
            height: DEFAULT_HEIGHT,
            minWidth: DEFAULT_MIN_WIDTH,
            selectors: {
                // setting border using pseudo-element here in order to prevent:
                // input and chevron buttons to overlap border under certain resolutions
                ':after': {
                    pointerEvents: 'none',
                    content: "''",
                    position: 'absolute',
                    left: 0,
                    top: 0,
                    bottom: 0,
                    right: 0,
                    borderWidth: '1px',
                    borderStyle: 'solid',
                    borderColor: SpinButtonRootBorderColor,
                    borderRadius: effects.roundedCorner2,
                },
            },
        },
        spinButtonWrapperTopBottom: {
            width: '100%',
        },
        spinButtonWrapperHovered: {
            selectors: (_a = {
                    ':after': {
                        borderColor: SpinButtonRootBorderColorHovered,
                    }
                },
                _a[_Styling__WEBPACK_IMPORTED_MODULE_0__["HighContrastSelector"]] = {
                    selectors: {
                        ':after': {
                            borderColor: 'Highlight',
                        },
                    },
                },
                _a),
        },
        spinButtonWrapperFocused: Object(_Styling__WEBPACK_IMPORTED_MODULE_0__["getInputFocusStyle"])(SpinButtonRootBorderColorFocused, effects.roundedCorner2),
        spinButtonWrapperDisabled: _getDisabledStyles(theme),
        input: {
            boxSizing: 'border-box',
            boxShadow: 'none',
            borderStyle: 'none',
            flex: 1,
            margin: 0,
            fontSize: fonts.medium.fontSize,
            fontFamily: 'inherit',
            color: SpinButtonInputTextColor,
            backgroundColor: SpinButtonRootBackgroundColor,
            height: '100%',
            padding: '0 8px 0 9px',
            outline: 0,
            display: 'block',
            minWidth: DEFAULT_MIN_WIDTH - ARROW_BUTTON_WIDTH - 2,
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
            overflow: 'hidden',
            cursor: 'text',
            userSelect: 'text',
            borderRadius: effects.roundedCorner2 + " 0 0 " + effects.roundedCorner2,
        },
        inputTextSelected: {
            backgroundColor: SpinButtonInputBackgroundColorSelected,
            color: SpinButtonInputTextColorSelected,
            selectors: (_b = {},
                _b[_Styling__WEBPACK_IMPORTED_MODULE_0__["HighContrastSelector"]] = {
                    backgroundColor: 'Highlight',
                    borderColor: 'Highlight',
                    color: 'HighlightText',
                },
                _b),
        },
        inputDisabled: _getDisabledStyles(theme),
        arrowButtonsContainer: {
            display: 'block',
            height: '100%',
            cursor: 'default',
        },
        arrowButtonsContainerDisabled: _getDisabledStyles(theme),
    };
    return Object(_Styling__WEBPACK_IMPORTED_MODULE_0__["concatStyleSets"])(defaultStyles, customStyles);
});
//# sourceMappingURL=SpinButton.styles.js.map

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

/***/ "xzES":
/*!*****************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@uifabric/react-hooks@7.13.9_c129be21209ec549b9ba61bf76d54bcc/node_modules/@uifabric/react-hooks/lib/useMergedRefs.js ***!
  \*****************************************************************************************************************************************************************************/
/*! exports provided: useMergedRefs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useMergedRefs", function() { return useMergedRefs; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


/**
 * React hook to merge multiple React refs (either MutableRefObjects or ref callbacks) into a single ref callback that
 * updates all provided refs
 * @param refs - Refs to collectively update with one ref value.
 * @returns A function with an attached "current" prop, so that it can be treated like a RefObject.
 */
function useMergedRefs() {
    var refs = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        refs[_i] = arguments[_i];
    }
    var mergedCallback = react__WEBPACK_IMPORTED_MODULE_1__["useCallback"](function (value) {
        // Update the "current" prop hanging on the function.
        mergedCallback.current = value;
        for (var _i = 0, refs_1 = refs; _i < refs_1.length; _i++) {
            var ref = refs_1[_i];
            if (typeof ref === 'function') {
                ref(value);
            }
            else if (ref) {
                // work around the immutability of the React.Ref type
                ref.current = value;
            }
        }
    }, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(refs));
    return mergedCallback;
}
//# sourceMappingURL=useMergedRefs.js.map

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
//# sourceMappingURL=chunk.vendors~property-pane-component_[locale].js.map