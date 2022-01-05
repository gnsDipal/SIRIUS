(window["webpackJsonp_1e2cdec9_1360_4295_b73c_98d6f51866d5_0_1_0"] = window["webpackJsonp_1e2cdec9_1360_4295_b73c_98d6f51866d5_0_1_0"] || []).push([[8],{

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
//# sourceMappingURL=chunk.8_[locale].js.map