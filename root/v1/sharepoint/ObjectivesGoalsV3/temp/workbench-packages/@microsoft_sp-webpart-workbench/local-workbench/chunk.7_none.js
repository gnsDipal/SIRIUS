(window["webpackJsonp_1e2cdec9_1360_4295_b73c_98d6f51866d5_0_1_0"] = window["webpackJsonp_1e2cdec9_1360_4295_b73c_98d6f51866d5_0_1_0"] || []).push([[7],{

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

/***/ "6yAV":
/*!***************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/Dropdown.js ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: Dropdown, DropdownBase, DropdownMenuItemType, ResponsiveMode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Dropdown_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Dropdown/index */ "JAcK");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Dropdown", function() { return _components_Dropdown_index__WEBPACK_IMPORTED_MODULE_0__["Dropdown"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DropdownBase", function() { return _components_Dropdown_index__WEBPACK_IMPORTED_MODULE_0__["DropdownBase"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DropdownMenuItemType", function() { return _components_Dropdown_index__WEBPACK_IMPORTED_MODULE_0__["DropdownMenuItemType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ResponsiveMode", function() { return _components_Dropdown_index__WEBPACK_IMPORTED_MODULE_0__["ResponsiveMode"]; });


//# sourceMappingURL=Dropdown.js.map

/***/ }),

/***/ "JAcK":
/*!********************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/Dropdown/index.js ***!
  \********************************************************************************************************************************************************************************************/
/*! exports provided: Dropdown, DropdownBase, DropdownMenuItemType, ResponsiveMode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Dropdown__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dropdown */ "da6v");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Dropdown", function() { return _Dropdown__WEBPACK_IMPORTED_MODULE_0__["Dropdown"]; });

/* harmony import */ var _Dropdown_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Dropdown.base */ "izLr");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DropdownBase", function() { return _Dropdown_base__WEBPACK_IMPORTED_MODULE_1__["DropdownBase"]; });

/* harmony import */ var _Dropdown_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Dropdown.types */ "51rc");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DropdownMenuItemType", function() { return _Dropdown_types__WEBPACK_IMPORTED_MODULE_2__["DropdownMenuItemType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ResponsiveMode", function() { return _Dropdown_types__WEBPACK_IMPORTED_MODULE_2__["ResponsiveMode"]; });




//# sourceMappingURL=index.js.map

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
//# sourceMappingURL=chunk.7_[locale].js.map