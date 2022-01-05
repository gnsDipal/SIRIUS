(window["webpackJsonp_1e2cdec9_1360_4295_b73c_98d6f51866d5_0_1_0"] = window["webpackJsonp_1e2cdec9_1360_4295_b73c_98d6f51866d5_0_1_0"] || []).push([["vendors~audience-picker-chunk~spcx-panels"],{

/***/ "+th6":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/Autofill/Autofill.js ***!
  \***********************************************************************************************************************************************************************************************/
/*! exports provided: Autofill, BaseAutoFill */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Autofill", function() { return Autofill; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseAutoFill", function() { return BaseAutoFill; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Utilities */ "mkpW");



var SELECTION_FORWARD = 'forward';
var SELECTION_BACKWARD = 'backward';
/**
 * {@docCategory Autofill}
 */
var Autofill = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(Autofill, _super);
    function Autofill(props) {
        var _this = _super.call(this, props) || this;
        _this._inputElement = react__WEBPACK_IMPORTED_MODULE_1__["createRef"]();
        _this._autoFillEnabled = true;
        _this._isComposing = false;
        // Composition events are used when the character/text requires several keystrokes to be completed.
        // Some examples of this are mobile text input and langauges like Japanese or Arabic.
        // Find out more at https://developer.mozilla.org/en-US/docs/Web/Events/compositionstart
        _this._onCompositionStart = function (ev) {
            _this._isComposing = true;
            _this._autoFillEnabled = false;
        };
        // Composition events are used when the character/text requires several keystrokes to be completed.
        // Some examples of this are mobile text input and languages like Japanese or Arabic.
        // Find out more at https://developer.mozilla.org/en-US/docs/Web/Events/compositionstart
        _this._onCompositionUpdate = function () {
            if (Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["isIE11"])()) {
                _this._updateValue(_this._getCurrentInputValue(), true);
            }
        };
        // Composition events are used when the character/text requires several keystrokes to be completed.
        // Some examples of this are mobile text input and langauges like Japanese or Arabic.
        // Find out more at https://developer.mozilla.org/en-US/docs/Web/Events/compositionstart
        _this._onCompositionEnd = function (ev) {
            var inputValue = _this._getCurrentInputValue();
            _this._tryEnableAutofill(inputValue, _this.value, false, true);
            _this._isComposing = false;
            // Due to timing, this needs to be async, otherwise no text will be selected.
            _this._async.setTimeout(function () {
                // it's technically possible that the value of _isComposing is reset during this timeout,
                // so explicitly trigger this with composing=true here, since it is supposed to be the
                // update for composition end
                _this._updateValue(_this._getCurrentInputValue(), false);
            }, 0);
        };
        _this._onClick = function () {
            if (_this._value && _this._value !== '' && _this._autoFillEnabled) {
                _this._autoFillEnabled = false;
            }
        };
        _this._onKeyDown = function (ev) {
            if (_this.props.onKeyDown) {
                _this.props.onKeyDown(ev);
            }
            // If the event is actively being composed, then don't alert autofill.
            // Right now typing does not have isComposing, once that has been fixed any should be removed.
            if (!ev.nativeEvent.isComposing) {
                switch (ev.which) {
                    case _Utilities__WEBPACK_IMPORTED_MODULE_2__["KeyCodes"].backspace:
                        _this._autoFillEnabled = false;
                        break;
                    case _Utilities__WEBPACK_IMPORTED_MODULE_2__["KeyCodes"].left:
                    case _Utilities__WEBPACK_IMPORTED_MODULE_2__["KeyCodes"].right:
                        if (_this._autoFillEnabled) {
                            _this._value = _this.state.displayValue;
                            _this._autoFillEnabled = false;
                        }
                        break;
                    default:
                        if (!_this._autoFillEnabled) {
                            if (_this.props.enableAutofillOnKeyPress.indexOf(ev.which) !== -1) {
                                _this._autoFillEnabled = true;
                            }
                        }
                        break;
                }
            }
        };
        _this._onInputChanged = function (ev) {
            var value = _this._getCurrentInputValue(ev);
            if (!_this._isComposing) {
                _this._tryEnableAutofill(value, _this._value, ev.nativeEvent.isComposing);
            }
            // If it is not IE11 and currently composing, update the value
            if (!(Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["isIE11"])() && _this._isComposing)) {
                var nativeEventComposing = ev.nativeEvent.isComposing;
                var isComposing = nativeEventComposing === undefined ? _this._isComposing : nativeEventComposing;
                _this._updateValue(value, isComposing);
            }
        };
        _this._onChanged = function () {
            // Swallow this event, we don't care about it
            // We must provide it because React PropTypes marks it as required, but onInput serves the correct purpose
            return;
        };
        /**
         * Updates the current input value as well as getting a new display value.
         * @param newValue - The new value from the input
         */
        _this._updateValue = function (newValue, composing) {
            // Only proceed if the value is nonempty and is different from the old value
            // This is to work around the fact that, in IE 11, inputs with a placeholder fire an onInput event on focus
            if (!newValue && newValue === _this._value) {
                return;
            }
            _this._value = _this.props.onInputChange ? _this.props.onInputChange(newValue, composing) : newValue;
            _this.setState({
                displayValue: _this._getDisplayValue(_this._value, _this.props.suggestedDisplayValue),
            }, function () { return _this._notifyInputChange(_this._value, composing); });
        };
        Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["initializeComponentRef"])(_this);
        _this._async = new _Utilities__WEBPACK_IMPORTED_MODULE_2__["Async"](_this);
        _this._value = props.defaultVisibleValue || '';
        _this.state = {
            displayValue: props.defaultVisibleValue || '',
        };
        return _this;
    }
    Object.defineProperty(Autofill.prototype, "cursorLocation", {
        get: function () {
            if (this._inputElement.current) {
                var inputElement = this._inputElement.current;
                if (inputElement.selectionDirection !== SELECTION_FORWARD) {
                    return inputElement.selectionEnd;
                }
                else {
                    return inputElement.selectionStart;
                }
            }
            else {
                return -1;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Autofill.prototype, "isValueSelected", {
        get: function () {
            return Boolean(this.inputElement && this.inputElement.selectionStart !== this.inputElement.selectionEnd);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Autofill.prototype, "value", {
        get: function () {
            return this._value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Autofill.prototype, "selectionStart", {
        get: function () {
            return this._inputElement.current ? this._inputElement.current.selectionStart : -1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Autofill.prototype, "selectionEnd", {
        get: function () {
            return this._inputElement.current ? this._inputElement.current.selectionEnd : -1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Autofill.prototype, "inputElement", {
        get: function () {
            return this._inputElement.current;
        },
        enumerable: true,
        configurable: true
    });
    Autofill.prototype.UNSAFE_componentWillReceiveProps = function (nextProps) {
        if (this.props.updateValueInWillReceiveProps) {
            var updatedInputValue = this.props.updateValueInWillReceiveProps();
            // Don't update if we have a null value or the value isn't changing
            // the value should still update if an empty string is passed in
            if (updatedInputValue !== null && updatedInputValue !== this._value) {
                this._value = updatedInputValue;
            }
        }
        var newDisplayValue = this._getDisplayValue(this._value, nextProps.suggestedDisplayValue);
        if (typeof newDisplayValue === 'string') {
            this.setState({ displayValue: newDisplayValue });
        }
    };
    Autofill.prototype.componentDidUpdate = function () {
        var value = this._value;
        var _a = this.props, suggestedDisplayValue = _a.suggestedDisplayValue, shouldSelectFullInputValueInComponentDidUpdate = _a.shouldSelectFullInputValueInComponentDidUpdate, preventValueSelection = _a.preventValueSelection;
        var differenceIndex = 0;
        if (preventValueSelection) {
            return;
        }
        if (this._autoFillEnabled &&
            value &&
            suggestedDisplayValue &&
            this._doesTextStartWith(suggestedDisplayValue, value)) {
            var shouldSelectFullRange = false;
            if (shouldSelectFullInputValueInComponentDidUpdate) {
                shouldSelectFullRange = shouldSelectFullInputValueInComponentDidUpdate();
            }
            if (shouldSelectFullRange && this._inputElement.current) {
                this._inputElement.current.setSelectionRange(0, suggestedDisplayValue.length, SELECTION_BACKWARD);
            }
            else {
                while (differenceIndex < value.length &&
                    value[differenceIndex].toLocaleLowerCase() === suggestedDisplayValue[differenceIndex].toLocaleLowerCase()) {
                    differenceIndex++;
                }
                if (differenceIndex > 0 && this._inputElement.current) {
                    this._inputElement.current.setSelectionRange(differenceIndex, suggestedDisplayValue.length, SELECTION_BACKWARD);
                }
            }
        }
    };
    Autofill.prototype.componentWillUnmount = function () {
        this._async.dispose();
    };
    Autofill.prototype.render = function () {
        var displayValue = this.state.displayValue;
        var nativeProps = Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["getNativeProps"])(this.props, _Utilities__WEBPACK_IMPORTED_MODULE_2__["inputProperties"]);
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("input", Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ autoCapitalize: "off", autoComplete: "off", "aria-autocomplete": 'both' }, nativeProps, { ref: this._inputElement, value: displayValue, onCompositionStart: this._onCompositionStart, onCompositionUpdate: this._onCompositionUpdate, onCompositionEnd: this._onCompositionEnd, 
            // TODO (Fabric 8?) - switch to calling only onChange. See notes in TextField._onInputChange.
            onChange: this._onChanged, onInput: this._onInputChanged, onKeyDown: this._onKeyDown, onClick: this.props.onClick ? this.props.onClick : this._onClick, "data-lpignore": true })));
    };
    Autofill.prototype.focus = function () {
        this._inputElement.current && this._inputElement.current.focus();
    };
    Autofill.prototype.clear = function () {
        this._autoFillEnabled = true;
        this._updateValue('', false);
        this._inputElement.current && this._inputElement.current.setSelectionRange(0, 0);
    };
    Autofill.prototype._getCurrentInputValue = function (ev) {
        if (ev && ev.target && ev.target.value) {
            return ev.target.value;
        }
        else if (this.inputElement && this.inputElement.value) {
            return this.inputElement.value;
        }
        else {
            return '';
        }
    };
    /**
     * Attempts to enable autofill. Whether or not autofill is enabled depends on the input value,
     * whether or not any text is selected, and only if the new input value is longer than the old input value.
     * Autofill should never be set to true if the value is composing. Once compositionEnd is called, then
     * it should be completed.
     * See https://developer.mozilla.org/en-US/docs/Web/API/CompositionEvent for more information on composition.
     * @param newValue - new input value
     * @param oldValue - old input value
     * @param isComposing - if true then the text is actively being composed and it has not completed.
     * @param isComposed - if the text is a composed text value.
     */
    Autofill.prototype._tryEnableAutofill = function (newValue, oldValue, isComposing, isComposed) {
        if (!isComposing &&
            newValue &&
            this._inputElement.current &&
            this._inputElement.current.selectionStart === newValue.length &&
            !this._autoFillEnabled &&
            (newValue.length > oldValue.length || isComposed)) {
            this._autoFillEnabled = true;
        }
    };
    Autofill.prototype._notifyInputChange = function (newValue, composing) {
        if (this.props.onInputValueChange) {
            this.props.onInputValueChange(newValue, composing);
        }
    };
    /**
     * Returns a string that should be used as the display value.
     * It evaluates this based on whether or not the suggested value starts with the input value
     * and whether or not autofill is enabled.
     * @param inputValue - the value that the input currently has.
     * @param suggestedDisplayValue - the possible full value
     */
    Autofill.prototype._getDisplayValue = function (inputValue, suggestedDisplayValue) {
        var displayValue = inputValue;
        if (suggestedDisplayValue &&
            inputValue &&
            this._doesTextStartWith(suggestedDisplayValue, displayValue) &&
            this._autoFillEnabled) {
            displayValue = suggestedDisplayValue;
        }
        return displayValue;
    };
    Autofill.prototype._doesTextStartWith = function (text, startWith) {
        if (!text || !startWith) {
            return false;
        }
        return text.toLocaleLowerCase().indexOf(startWith.toLocaleLowerCase()) === 0;
    };
    Autofill.defaultProps = {
        enableAutofillOnKeyPress: [_Utilities__WEBPACK_IMPORTED_MODULE_2__["KeyCodes"].down, _Utilities__WEBPACK_IMPORTED_MODULE_2__["KeyCodes"].up],
    };
    return Autofill;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));

/**
 *  @deprecated do not use.
 * {@docCategory Autofill}
 */
var BaseAutoFill = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(BaseAutoFill, _super);
    function BaseAutoFill() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return BaseAutoFill;
}(Autofill));

//# sourceMappingURL=Autofill.js.map

/***/ }),

/***/ "135I":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/pickers/Suggestions/Suggestions.styles.js ***!
  \********************************************************************************************************************************************************************************************************************/
/*! exports provided: getStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStyles", function() { return getStyles; });
/* harmony import */ var _Styling__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../Styling */ "PL71");

var GlobalClassNames = {
    root: 'ms-Suggestions',
    suggestionsContainer: 'ms-Suggestions-container',
    title: 'ms-Suggestions-title',
    forceResolveButton: 'ms-forceResolve-button',
    searchForMoreButton: 'ms-SearchMore-button',
    spinner: 'ms-Suggestions-spinner',
    noSuggestions: 'ms-Suggestions-none',
    suggestionsAvailable: 'ms-Suggestions-suggestionsAvailable',
    isSelected: 'is-selected',
};
function getStyles(props) {
    var className = props.className, suggestionsClassName = props.suggestionsClassName, theme = props.theme, forceResolveButtonSelected = props.forceResolveButtonSelected, searchForMoreButtonSelected = props.searchForMoreButtonSelected;
    var palette = theme.palette, semanticColors = theme.semanticColors, fonts = theme.fonts;
    var classNames = Object(_Styling__WEBPACK_IMPORTED_MODULE_0__["getGlobalClassNames"])(GlobalClassNames, theme);
    var actionButtonStyles = {
        backgroundColor: 'transparent',
        border: 0,
        cursor: 'pointer',
        margin: 0,
        paddingLeft: 8,
        position: 'relative',
        borderTop: "1px solid " + palette.neutralLight,
        height: 40,
        textAlign: 'left',
        width: '100%',
        fontSize: fonts.small.fontSize,
        selectors: {
            ':hover': {
                backgroundColor: semanticColors.menuItemBackgroundPressed,
                cursor: 'pointer',
            },
            ':focus, :active': {
                backgroundColor: palette.themeLight,
            },
            '.ms-Button-icon': {
                fontSize: fonts.mediumPlus.fontSize,
                width: 25,
            },
            '.ms-Button-label': {
                margin: '0 4px 0 9px',
            },
        },
    };
    var actionButtonSelectedStyles = {
        backgroundColor: palette.themeLight,
    };
    return {
        root: [
            classNames.root,
            {
                minWidth: 260,
            },
            className,
        ],
        suggestionsContainer: [
            classNames.suggestionsContainer,
            {
                overflowY: 'auto',
                overflowX: 'hidden',
                maxHeight: 300,
                transform: 'translate3d(0,0,0)',
            },
            suggestionsClassName,
        ],
        title: [
            classNames.title,
            {
                padding: '0 12px',
                fontSize: fonts.small.fontSize,
                color: palette.themePrimary,
                lineHeight: 40,
                borderBottom: "1px solid " + semanticColors.menuItemBackgroundPressed,
            },
        ],
        forceResolveButton: [
            classNames.forceResolveButton,
            actionButtonStyles,
            forceResolveButtonSelected && [classNames.isSelected, actionButtonSelectedStyles],
        ],
        searchForMoreButton: [
            classNames.searchForMoreButton,
            actionButtonStyles,
            searchForMoreButtonSelected && [classNames.isSelected, actionButtonSelectedStyles],
        ],
        noSuggestions: [
            classNames.noSuggestions,
            {
                textAlign: 'center',
                color: palette.neutralSecondary,
                fontSize: fonts.small.fontSize,
                lineHeight: 30,
            },
        ],
        suggestionsAvailable: [classNames.suggestionsAvailable, _Styling__WEBPACK_IMPORTED_MODULE_0__["hiddenContentStyle"]],
        subComponentStyles: {
            spinner: {
                root: [
                    classNames.spinner,
                    {
                        margin: '5px 0',
                        paddingLeft: 14,
                        textAlign: 'left',
                        whiteSpace: 'nowrap',
                        lineHeight: 20,
                        fontSize: fonts.small.fontSize,
                    },
                ],
                circle: {
                    display: 'inline-block',
                    verticalAlign: 'middle',
                },
                label: {
                    display: 'inline-block',
                    verticalAlign: 'middle',
                    margin: '0 10px 0 16px',
                },
            },
        },
    };
}
//# sourceMappingURL=Suggestions.styles.js.map

/***/ }),

/***/ "13ID":
/*!************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/pickers/BasePicker.js ***!
  \************************************************************************************************************************************************************************************************/
/*! exports provided: BasePicker, BasePickerListBelow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasePicker", function() { return BasePicker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasePickerListBelow", function() { return BasePickerListBelow; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Utilities */ "mkpW");
/* harmony import */ var _FocusZone__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../FocusZone */ "NMYH");
/* harmony import */ var _Callout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Callout */ "ioxN");
/* harmony import */ var _utilities_selection_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utilities/selection/index */ "v+17");
/* harmony import */ var _Suggestions_Suggestions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Suggestions/Suggestions */ "bxdr");
/* harmony import */ var _Suggestions_Suggestions_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Suggestions/Suggestions.styles */ "135I");
/* harmony import */ var _Suggestions_SuggestionsController__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Suggestions/SuggestionsController */ "vyKu");
/* harmony import */ var _BasePicker_types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./BasePicker.types */ "EyaF");
/* harmony import */ var _Autofill_index__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Autofill/index */ "kjzS");
/* harmony import */ var _BasePicker_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./BasePicker.scss */ "kIbP");












var legacyStyles = _BasePicker_scss__WEBPACK_IMPORTED_MODULE_11__;
var getClassNames = Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["classNamesFunction"])();
/**
 * Should be removed once new picker without inheritance is created
 */
function getStyledSuggestions(suggestionsType) {
    return Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["styled"])(suggestionsType, _Suggestions_Suggestions_styles__WEBPACK_IMPORTED_MODULE_7__["getStyles"], undefined, {
        scope: 'Suggestions',
    });
}
/**
 * {@docCategory Pickers}
 */
var BasePicker = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(BasePicker, _super);
    function BasePicker(basePickerProps) {
        var _this = _super.call(this, basePickerProps) || this;
        // Refs
        _this.root = react__WEBPACK_IMPORTED_MODULE_1__["createRef"]();
        _this.input = react__WEBPACK_IMPORTED_MODULE_1__["createRef"]();
        _this.focusZone = react__WEBPACK_IMPORTED_MODULE_1__["createRef"]();
        _this.suggestionElement = react__WEBPACK_IMPORTED_MODULE_1__["createRef"]();
        /**
         * @deprecated this is no longer necessary as typescript now supports generic elements
         */
        _this.SuggestionOfProperType = _Suggestions_Suggestions__WEBPACK_IMPORTED_MODULE_6__["Suggestions"];
        // eslint-disable-next-line deprecation/deprecation
        _this._styledSuggestions = getStyledSuggestions(_this.SuggestionOfProperType);
        _this.dismissSuggestions = function (ev) {
            var selectItemFunction = function () {
                var addItemOnDismiss = true;
                if (_this.props.onDismiss) {
                    addItemOnDismiss = _this.props.onDismiss(ev, _this.suggestionStore.currentSuggestion ? _this.suggestionStore.currentSuggestion.item : undefined);
                }
                if (!ev || (ev && !ev.defaultPrevented)) {
                    // Select the first suggestion if one is available and permitted by onDismiss when user leaves.
                    if (addItemOnDismiss !== false &&
                        _this.canAddItems() &&
                        _this.suggestionStore.hasSelectedSuggestion() &&
                        _this.state.suggestedDisplayValue) {
                        _this.addItemByIndex(0);
                    }
                }
            };
            if (_this.currentPromise) {
                _this.currentPromise.then(function () { return selectItemFunction(); });
            }
            else {
                selectItemFunction();
            }
            _this.setState({ suggestionsVisible: false });
        };
        _this.refocusSuggestions = function (keyCode) {
            _this.resetFocus();
            if (_this.suggestionStore.suggestions && _this.suggestionStore.suggestions.length > 0) {
                if (keyCode === _Utilities__WEBPACK_IMPORTED_MODULE_2__["KeyCodes"].up) {
                    _this.suggestionStore.setSelectedSuggestion(_this.suggestionStore.suggestions.length - 1);
                }
                else if (keyCode === _Utilities__WEBPACK_IMPORTED_MODULE_2__["KeyCodes"].down) {
                    _this.suggestionStore.setSelectedSuggestion(0);
                }
            }
        };
        _this.onInputChange = function (value) {
            _this.updateValue(value);
            _this.setState({
                moreSuggestionsAvailable: true,
                isMostRecentlyUsedVisible: false,
            });
        };
        _this.onSuggestionClick = function (ev, item, index) {
            _this.addItemByIndex(index);
        };
        _this.onSuggestionRemove = function (ev, item, index) {
            if (_this.props.onRemoveSuggestion) {
                _this.props.onRemoveSuggestion(item);
            }
            _this.suggestionStore.removeSuggestion(index);
        };
        _this.onInputFocus = function (ev) {
            _this.selection.setAllSelected(false);
            // Only trigger all of the focus if this component isn't already focused.
            // For example when an item is selected or removed from the selected list it should be treated
            // as though the input is still focused.
            if (!_this.state.isFocused) {
                _this.setState({ isFocused: true });
                _this._userTriggeredSuggestions();
                if (_this.props.inputProps && _this.props.inputProps.onFocus) {
                    _this.props.inputProps.onFocus(ev);
                }
            }
        };
        _this.onInputBlur = function (ev) {
            if (_this.props.inputProps && _this.props.inputProps.onBlur) {
                _this.props.inputProps.onBlur(ev);
            }
        };
        _this.onBlur = function (ev) {
            if (_this.state.isFocused) {
                // Only blur the entire component if an unrelated element gets focus.
                // Otherwise treat it as though it still has focus.
                // Do nothing if the blur is coming from something
                // inside the comboBox root or the comboBox menu since
                // it we are not really bluring from the whole comboBox
                var relatedTarget = ev.relatedTarget;
                if (ev.relatedTarget === null) {
                    // In IE11, due to lack of support, event.relatedTarget is always
                    // null making every onBlur call to be "outside" of the ComboBox
                    // even when it's not. Using document.activeElement is another way
                    // for us to be able to get what the relatedTarget without relying
                    // on the event
                    relatedTarget = document.activeElement;
                }
                if (relatedTarget && !Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["elementContains"])(_this.root.current, relatedTarget)) {
                    _this.setState({ isFocused: false });
                    if (_this.props.onBlur) {
                        _this.props.onBlur(ev);
                    }
                }
            }
        };
        /**
         * Reveals suggestions any time the user clicks on the input element
         * without shifting focus.
         */
        _this.onClick = function (ev) {
            if (_this.props.inputProps !== undefined && _this.props.inputProps.onClick !== undefined) {
                _this.props.inputProps.onClick(ev);
            }
            // Only primary (left) clicks show suggestions.
            if (ev.button === 0) {
                _this._userTriggeredSuggestions();
            }
        };
        _this.onKeyDown = function (ev) {
            var keyCode = ev.which;
            switch (keyCode) {
                case _Utilities__WEBPACK_IMPORTED_MODULE_2__["KeyCodes"].escape:
                    if (_this.state.suggestionsVisible) {
                        _this.setState({ suggestionsVisible: false });
                        ev.preventDefault();
                        ev.stopPropagation();
                    }
                    break;
                case _Utilities__WEBPACK_IMPORTED_MODULE_2__["KeyCodes"].tab:
                case _Utilities__WEBPACK_IMPORTED_MODULE_2__["KeyCodes"].enter:
                    if (_this.suggestionElement.current && _this.suggestionElement.current.hasSuggestedActionSelected()) {
                        _this.suggestionElement.current.executeSelectedAction();
                    }
                    else if (!ev.shiftKey && _this.suggestionStore.hasSelectedSuggestion() && _this.state.suggestionsVisible) {
                        _this.completeSuggestion();
                        ev.preventDefault();
                        ev.stopPropagation();
                    }
                    else {
                        _this._completeGenericSuggestion();
                    }
                    break;
                case _Utilities__WEBPACK_IMPORTED_MODULE_2__["KeyCodes"].backspace:
                    if (!_this.props.disabled) {
                        _this.onBackspace(ev);
                    }
                    ev.stopPropagation();
                    break;
                case _Utilities__WEBPACK_IMPORTED_MODULE_2__["KeyCodes"].del:
                    if (!_this.props.disabled) {
                        if (_this.input.current &&
                            ev.target === _this.input.current.inputElement &&
                            _this.state.suggestionsVisible &&
                            _this.suggestionStore.currentIndex !== -1) {
                            if (_this.props.onRemoveSuggestion) {
                                _this.props.onRemoveSuggestion(_this.suggestionStore.currentSuggestion.item);
                            }
                            _this.suggestionStore.removeSuggestion(_this.suggestionStore.currentIndex);
                            _this.forceUpdate();
                        }
                        else {
                            _this.onBackspace(ev);
                        }
                    }
                    ev.stopPropagation();
                    break;
                case _Utilities__WEBPACK_IMPORTED_MODULE_2__["KeyCodes"].up:
                    if (_this.input.current && ev.target === _this.input.current.inputElement && _this.state.suggestionsVisible) {
                        if (_this.suggestionElement.current &&
                            _this.suggestionElement.current.tryHandleKeyDown(keyCode, _this.suggestionStore.currentIndex)) {
                            ev.preventDefault();
                            ev.stopPropagation();
                            _this.forceUpdate();
                        }
                        else {
                            if (_this.suggestionElement.current &&
                                _this.suggestionElement.current.hasSuggestedAction() &&
                                _this.suggestionStore.currentIndex === 0) {
                                ev.preventDefault();
                                ev.stopPropagation();
                                _this.suggestionElement.current.focusAboveSuggestions();
                                _this.suggestionStore.deselectAllSuggestions();
                                _this.forceUpdate();
                            }
                            else {
                                if (_this.suggestionStore.previousSuggestion()) {
                                    ev.preventDefault();
                                    ev.stopPropagation();
                                    _this.onSuggestionSelect();
                                }
                            }
                        }
                    }
                    break;
                case _Utilities__WEBPACK_IMPORTED_MODULE_2__["KeyCodes"].down:
                    if (_this.input.current && ev.target === _this.input.current.inputElement && _this.state.suggestionsVisible) {
                        if (_this.suggestionElement.current &&
                            _this.suggestionElement.current.tryHandleKeyDown(keyCode, _this.suggestionStore.currentIndex)) {
                            ev.preventDefault();
                            ev.stopPropagation();
                            _this.forceUpdate();
                        }
                        else {
                            if (_this.suggestionElement.current &&
                                _this.suggestionElement.current.hasSuggestedAction() &&
                                _this.suggestionStore.currentIndex + 1 === _this.suggestionStore.suggestions.length) {
                                ev.preventDefault();
                                ev.stopPropagation();
                                _this.suggestionElement.current.focusBelowSuggestions();
                                _this.suggestionStore.deselectAllSuggestions();
                                _this.forceUpdate();
                            }
                            else {
                                if (_this.suggestionStore.nextSuggestion()) {
                                    ev.preventDefault();
                                    ev.stopPropagation();
                                    _this.onSuggestionSelect();
                                }
                            }
                        }
                    }
                    break;
            }
        };
        _this.onItemChange = function (changedItem, index) {
            var items = _this.state.items;
            if (index >= 0) {
                var newItems = items;
                newItems[index] = changedItem;
                _this._updateSelectedItems(newItems);
            }
        };
        _this.onGetMoreResults = function () {
            _this.setState({
                isSearching: true,
            }, function () {
                if (_this.props.onGetMoreResults && _this.input.current) {
                    var suggestions = _this.props.onGetMoreResults(_this.input.current.value, _this.state.items);
                    var suggestionsArray = suggestions;
                    var suggestionsPromiseLike = suggestions;
                    if (Array.isArray(suggestionsArray)) {
                        _this.updateSuggestions(suggestionsArray);
                        _this.setState({ isSearching: false });
                    }
                    else if (suggestionsPromiseLike.then) {
                        suggestionsPromiseLike.then(function (newSuggestions) {
                            _this.updateSuggestions(newSuggestions);
                            _this.setState({ isSearching: false });
                        });
                    }
                }
                else {
                    _this.setState({ isSearching: false });
                }
                if (_this.input.current) {
                    _this.input.current.focus();
                }
                _this.setState({
                    moreSuggestionsAvailable: false,
                    isResultsFooterVisible: true,
                });
            });
        };
        _this.completeSelection = function (item) {
            _this.addItem(item);
            _this.updateValue('');
            if (_this.input.current) {
                _this.input.current.clear();
            }
            _this.setState({ suggestionsVisible: false });
        };
        _this.addItemByIndex = function (index) {
            _this.completeSelection(_this.suggestionStore.getSuggestionAtIndex(index).item);
        };
        _this.addItem = function (item) {
            var processedItem = _this.props.onItemSelected
                ? _this.props.onItemSelected(item)
                : item;
            if (processedItem === null) {
                return;
            }
            var processedItemObject = processedItem;
            var processedItemPromiseLike = processedItem;
            if (processedItemPromiseLike && processedItemPromiseLike.then) {
                processedItemPromiseLike.then(function (resolvedProcessedItem) {
                    var newItems = _this.state.items.concat([resolvedProcessedItem]);
                    _this._updateSelectedItems(newItems);
                });
            }
            else {
                var newItems = _this.state.items.concat([processedItemObject]);
                _this._updateSelectedItems(newItems);
            }
            _this.setState({ suggestedDisplayValue: '' });
        };
        _this.removeItem = function (item, focusNextItem) {
            var items = _this.state.items;
            var index = items.indexOf(item);
            if (index >= 0) {
                var newItems = items.slice(0, index).concat(items.slice(index + 1));
                _this._updateSelectedItems(newItems);
            }
        };
        _this.removeItems = function (itemsToRemove) {
            var items = _this.state.items;
            var newItems = items.filter(function (item) { return itemsToRemove.indexOf(item) === -1; });
            _this._updateSelectedItems(newItems);
        };
        _this._shouldFocusZoneEnterInnerZone = function (ev) {
            // If suggestions are shown const up/down keys control them, otherwise allow them through to control the focusZone.
            if (_this.state.suggestionsVisible) {
                switch (ev.which) {
                    case _Utilities__WEBPACK_IMPORTED_MODULE_2__["KeyCodes"].up:
                    case _Utilities__WEBPACK_IMPORTED_MODULE_2__["KeyCodes"].down:
                        return true;
                }
            }
            if (ev.which === _Utilities__WEBPACK_IMPORTED_MODULE_2__["KeyCodes"].enter) {
                return true;
            }
            return false;
        };
        _this._onResolveSuggestions = function (updatedValue) {
            var suggestions = _this.props.onResolveSuggestions(updatedValue, _this.state.items);
            if (suggestions !== null) {
                _this.updateSuggestionsList(suggestions, updatedValue);
            }
        };
        _this._completeGenericSuggestion = function () {
            if (_this.props.onValidateInput &&
                _this.input.current &&
                _this.props.onValidateInput(_this.input.current.value) !== _BasePicker_types__WEBPACK_IMPORTED_MODULE_9__["ValidationState"].invalid &&
                _this.props.createGenericItem) {
                var itemToConvert = _this.props.createGenericItem(_this.input.current.value, _this.props.onValidateInput(_this.input.current.value));
                _this.suggestionStore.createGenericSuggestion(itemToConvert);
                _this.completeSuggestion();
            }
        };
        /**
         * This should be called when the user does something other than use text entry to trigger suggestions.
         *
         */
        _this._userTriggeredSuggestions = function () {
            if (!_this.state.suggestionsVisible) {
                var input = _this.input.current ? _this.input.current.value : '';
                if (!input) {
                    _this.onEmptyInputFocus();
                }
                else {
                    if (_this.suggestionStore.suggestions.length === 0) {
                        _this._onResolveSuggestions(input);
                    }
                    else {
                        _this.setState({
                            isMostRecentlyUsedVisible: false,
                            suggestionsVisible: true,
                        });
                    }
                }
            }
        };
        Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["initializeComponentRef"])(_this);
        _this._async = new _Utilities__WEBPACK_IMPORTED_MODULE_2__["Async"](_this);
        var items = basePickerProps.selectedItems || basePickerProps.defaultSelectedItems || [];
        _this._id = Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["getId"])();
        _this._ariaMap = {
            selectedItems: "selected-items-" + _this._id,
            selectedSuggestionAlert: "selected-suggestion-alert-" + _this._id,
            suggestionList: "suggestion-list-" + _this._id,
            combobox: "combobox-" + _this._id,
        };
        _this.suggestionStore = new _Suggestions_SuggestionsController__WEBPACK_IMPORTED_MODULE_8__["SuggestionsController"]();
        _this.selection = new _utilities_selection_index__WEBPACK_IMPORTED_MODULE_5__["Selection"]({ onSelectionChanged: function () { return _this.onSelectionChange(); } });
        _this.selection.setItems(items);
        _this.state = {
            items: items,
            suggestedDisplayValue: '',
            isMostRecentlyUsedVisible: false,
            moreSuggestionsAvailable: false,
            isFocused: false,
            isSearching: false,
            selectedIndices: [],
        };
        return _this;
    }
    BasePicker.getDerivedStateFromProps = function (newProps) {
        if (newProps.selectedItems) {
            return { items: newProps.selectedItems };
        }
        return null;
    };
    Object.defineProperty(BasePicker.prototype, "items", {
        get: function () {
            return this.state.items;
        },
        enumerable: true,
        configurable: true
    });
    BasePicker.prototype.componentDidMount = function () {
        this.selection.setItems(this.state.items);
        this._onResolveSuggestions = this._async.debounce(this._onResolveSuggestions, this.props.resolveDelay);
    };
    BasePicker.prototype.componentDidUpdate = function (oldProps, oldState) {
        if (this.state.items && this.state.items !== oldState.items) {
            var currentSelectedIndex = this.selection.getSelectedIndices()[0];
            this.selection.setItems(this.state.items);
            if (this.state.isFocused) {
                // Reset focus and selection so that selected item stays in sync if something
                // has been removed
                if (this.state.items.length < oldState.items.length) {
                    this.selection.setIndexSelected(currentSelectedIndex, true, true);
                    this.resetFocus(currentSelectedIndex);
                }
            }
        }
    };
    BasePicker.prototype.componentWillUnmount = function () {
        if (this.currentPromise) {
            this.currentPromise = undefined;
        }
        this._async.dispose();
    };
    BasePicker.prototype.focus = function () {
        if (this.focusZone.current) {
            this.focusZone.current.focus();
        }
    };
    BasePicker.prototype.focusInput = function () {
        if (this.input.current) {
            this.input.current.focus();
        }
    };
    BasePicker.prototype.completeSuggestion = function (forceComplete) {
        if (this.suggestionStore.hasSelectedSuggestion() && this.input.current) {
            this.completeSelection(this.suggestionStore.currentSuggestion.item);
        }
        else if (forceComplete) {
            this._completeGenericSuggestion();
        }
    };
    BasePicker.prototype.render = function () {
        var _a = this.state, suggestedDisplayValue = _a.suggestedDisplayValue, isFocused = _a.isFocused, items = _a.items;
        var _b = this.props, className = _b.className, inputProps = _b.inputProps, disabled = _b.disabled, theme = _b.theme, styles = _b.styles;
        var selectedSuggestionAlertId = this.props.enableSelectedSuggestionAlert
            ? this._ariaMap.selectedSuggestionAlert
            : '';
        var suggestionsAvailable = this.state.suggestionsVisible ? this._ariaMap.suggestionList : '';
        // TODO
        // Clean this up by leaving only the first part after removing support for SASS.
        // Currently we can not remove the SASS styles from BasePicker class because it
        // might be used by consumers who created custom pickers from extending from
        // this base class and have not used the new 'styles' prop.
        // We check for 'styles' prop which is going to be injected by the 'styled' HOC
        // for every other already existing picker variant (PeoplePicker, TagPicker)
        // so that we can use the CSS-in-JS styles. If the check fails (ex: custom picker),
        // then we just use the old SASS styles instead.
        var classNames = styles
            ? getClassNames(styles, {
                theme: theme,
                className: className,
                isFocused: isFocused,
                disabled: disabled,
                inputClassName: inputProps && inputProps.className,
            })
            : {
                root: Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["css"])('ms-BasePicker', className ? className : ''),
                text: Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["css"])('ms-BasePicker-text', legacyStyles.pickerText, this.state.isFocused && legacyStyles.inputFocused),
                itemsWrapper: legacyStyles.pickerItems,
                input: Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["css"])('ms-BasePicker-input', legacyStyles.pickerInput, inputProps && inputProps.className),
                screenReaderText: legacyStyles.screenReaderOnly,
            };
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { ref: this.root, className: classNames.root, onKeyDown: this.onKeyDown, onBlur: this.onBlur },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_FocusZone__WEBPACK_IMPORTED_MODULE_3__["FocusZone"], { componentRef: this.focusZone, direction: _FocusZone__WEBPACK_IMPORTED_MODULE_3__["FocusZoneDirection"].bidirectional, shouldEnterInnerZone: this._shouldFocusZoneEnterInnerZone, role: 'combobox', id: this._ariaMap.combobox, "aria-label": this.props['aria-label'], "aria-expanded": !!this.state.suggestionsVisible, "aria-owns": suggestionsAvailable || undefined, "aria-haspopup": suggestionsAvailable && this.suggestionStore.suggestions.length > 0 ? 'listbox' : 'dialog' },
                this.getSuggestionsAlert(classNames.screenReaderText),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utilities_selection_index__WEBPACK_IMPORTED_MODULE_5__["SelectionZone"], { selection: this.selection, selectionMode: _utilities_selection_index__WEBPACK_IMPORTED_MODULE_5__["SelectionMode"].multiple },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: classNames.text },
                        items.length > 0 && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", { id: this._ariaMap.selectedItems, className: classNames.itemsWrapper, role: 'list' }, this.renderItems())),
                        this.canAddItems() && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Autofill_index__WEBPACK_IMPORTED_MODULE_10__["Autofill"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ spellCheck: false }, inputProps, { className: classNames.input, componentRef: this.input, onClick: this.onClick, onFocus: this.onInputFocus, onBlur: this.onInputBlur, onInputValueChange: this.onInputChange, suggestedDisplayValue: suggestedDisplayValue, "arial-labelledby": this.props['aria-label'] ? this._ariaMap.combobox : undefined, "aria-describedby": items.length > 0 ? this._ariaMap.selectedItems : undefined, "aria-controls": suggestionsAvailable + " " + selectedSuggestionAlertId || undefined, "aria-activedescendant": this.getActiveDescendant(), role: 'textbox', disabled: disabled, onInputChange: this.props.onInputChange })))))),
            this.renderSuggestions()));
    };
    BasePicker.prototype.canAddItems = function () {
        var items = this.state.items;
        var itemLimit = this.props.itemLimit;
        return itemLimit === undefined || items.length < itemLimit;
    };
    BasePicker.prototype.renderSuggestions = function () {
        var StyledTypedSuggestions = this._styledSuggestions;
        return this.state.suggestionsVisible && this.input ? (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Callout__WEBPACK_IMPORTED_MODULE_4__["Callout"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ isBeakVisible: false, gapSpace: 5, target: this.input.current ? this.input.current.inputElement : undefined, onDismiss: this.dismissSuggestions, directionalHint: _Callout__WEBPACK_IMPORTED_MODULE_4__["DirectionalHint"].bottomLeftEdge, directionalHintForRTL: _Callout__WEBPACK_IMPORTED_MODULE_4__["DirectionalHint"].bottomRightEdge }, this.props.pickerCalloutProps),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](StyledTypedSuggestions
            // Assumed to set in derived component's defaultProps
            , Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ 
                // Assumed to set in derived component's defaultProps
                onRenderSuggestion: this.props.onRenderSuggestionsItem, onSuggestionClick: this.onSuggestionClick, onSuggestionRemove: this.onSuggestionRemove, suggestions: this.suggestionStore.getSuggestions(), componentRef: this.suggestionElement, onGetMoreResults: this.onGetMoreResults, moreSuggestionsAvailable: this.state.moreSuggestionsAvailable, isLoading: this.state.suggestionsLoading, isSearching: this.state.isSearching, isMostRecentlyUsedVisible: this.state.isMostRecentlyUsedVisible, isResultsFooterVisible: this.state.isResultsFooterVisible, refocusSuggestions: this.refocusSuggestions, removeSuggestionAriaLabel: this.props.removeButtonAriaLabel, suggestionsListId: this._ariaMap.suggestionList, createGenericItem: this._completeGenericSuggestion }, this.props.pickerSuggestionsProps)))) : null;
    };
    BasePicker.prototype.renderItems = function () {
        var _this = this;
        var _a = this.props, disabled = _a.disabled, removeButtonAriaLabel = _a.removeButtonAriaLabel;
        var onRenderItem = this.props.onRenderItem;
        var _b = this.state, items = _b.items, selectedIndices = _b.selectedIndices;
        return items.map(function (item, index) {
            return onRenderItem({
                item: item,
                index: index,
                key: item.key ? item.key : index,
                selected: selectedIndices.indexOf(index) !== -1,
                onRemoveItem: function () { return _this.removeItem(item, true); },
                disabled: disabled,
                onItemChange: _this.onItemChange,
                removeButtonAriaLabel: removeButtonAriaLabel,
            });
        });
    };
    BasePicker.prototype.resetFocus = function (index) {
        var items = this.state.items;
        if (items.length && index >= 0) {
            var newEl = this.root.current &&
                this.root.current.querySelectorAll('[data-selection-index]')[Math.min(index, items.length - 1)];
            if (newEl && this.focusZone.current) {
                this.focusZone.current.focusElement(newEl);
            }
        }
        else if (!this.canAddItems()) {
            this.resetFocus(items.length - 1);
        }
        else {
            if (this.input.current) {
                this.input.current.focus();
            }
        }
    };
    BasePicker.prototype.onSuggestionSelect = function () {
        if (this.suggestionStore.currentSuggestion) {
            var currentValue = this.input.current ? this.input.current.value : '';
            var itemValue = this._getTextFromItem(this.suggestionStore.currentSuggestion.item, currentValue);
            this.setState({ suggestedDisplayValue: itemValue });
        }
    };
    BasePicker.prototype.onSelectionChange = function () {
        this.setState({
            selectedIndices: this.selection.getSelectedIndices(),
        });
    };
    BasePicker.prototype.updateSuggestions = function (suggestions) {
        this.suggestionStore.updateSuggestions(suggestions, 0);
        this.forceUpdate();
    };
    /**
     * Only to be called when there is nothing in the input. Checks to see if the consumer has
     * provided a function to resolve suggestions
     */
    BasePicker.prototype.onEmptyInputFocus = function () {
        var emptyResolveSuggestions = this.props.onEmptyResolveSuggestions
            ? this.props.onEmptyResolveSuggestions
            : // eslint-disable-next-line deprecation/deprecation
                this.props.onEmptyInputFocus;
        // Only attempt to resolve suggestions if it exists
        if (emptyResolveSuggestions) {
            var suggestions = emptyResolveSuggestions(this.state.items);
            this.updateSuggestionsList(suggestions);
            this.setState({
                isMostRecentlyUsedVisible: true,
                suggestionsVisible: true,
                moreSuggestionsAvailable: false,
            });
        }
    };
    BasePicker.prototype.updateValue = function (updatedValue) {
        this._onResolveSuggestions(updatedValue);
    };
    BasePicker.prototype.updateSuggestionsList = function (suggestions, updatedValue) {
        var _this = this;
        var suggestionsArray = suggestions;
        var suggestionsPromiseLike = suggestions;
        // Check to see if the returned value is an array, if it is then just pass it into the next function .
        // If the returned value is not an array then check to see if it's a promise or PromiseLike.
        // If it is then resolve it asynchronously.
        if (Array.isArray(suggestionsArray)) {
            this._updateAndResolveValue(updatedValue, suggestionsArray);
        }
        else if (suggestionsPromiseLike && suggestionsPromiseLike.then) {
            this.setState({
                suggestionsLoading: true,
            });
            // Clear suggestions
            this.suggestionStore.updateSuggestions([]);
            if (updatedValue !== undefined) {
                this.setState({
                    suggestionsVisible: this._getShowSuggestions(),
                });
            }
            else {
                this.setState({
                    suggestionsVisible: this.input.current && this.input.current.inputElement === document.activeElement,
                });
            }
            // Ensure that the promise will only use the callback if it was the most recent one.
            var promise_1 = (this.currentPromise = suggestionsPromiseLike);
            promise_1.then(function (newSuggestions) {
                if (promise_1 === _this.currentPromise) {
                    _this._updateAndResolveValue(updatedValue, newSuggestions);
                }
            });
        }
    };
    BasePicker.prototype.resolveNewValue = function (updatedValue, suggestions) {
        var _this = this;
        this.updateSuggestions(suggestions);
        var itemValue = undefined;
        if (this.suggestionStore.currentSuggestion) {
            itemValue = this._getTextFromItem(this.suggestionStore.currentSuggestion.item, updatedValue);
        }
        // Only set suggestionloading to false after there has been time for the new suggestions to flow
        // to the suggestions list. This is to ensure that the suggestions are available before aria-activedescendant
        // is set so that screen readers will read out the first selected option.
        this.setState({
            suggestedDisplayValue: itemValue,
            suggestionsVisible: this._getShowSuggestions(),
        }, function () { return _this.setState({ suggestionsLoading: false }); });
    };
    BasePicker.prototype.onChange = function (items) {
        if (this.props.onChange) {
            this.props.onChange(items);
        }
    };
    // This is protected because we may expect the backspace key to work differently in a different kind of picker.
    // This lets the subclass override it and provide it's own onBackspace. For an example see the BasePickerListBelow
    BasePicker.prototype.onBackspace = function (ev) {
        if ((this.state.items.length && !this.input.current) ||
            (this.input.current && !this.input.current.isValueSelected && this.input.current.cursorLocation === 0)) {
            if (this.selection.getSelectedCount() > 0) {
                this.removeItems(this.selection.getSelection());
            }
            else {
                this.removeItem(this.state.items[this.state.items.length - 1]);
            }
        }
    };
    BasePicker.prototype.getActiveDescendant = function () {
        if (this.state.suggestionsLoading) {
            return undefined;
        }
        var currentIndex = this.suggestionStore.currentIndex;
        // if the suggestions element has actions and the currentIndex does not point to a suggestion, return the action id
        if (currentIndex < 0 && this.suggestionElement.current && this.suggestionElement.current.hasSuggestedAction()) {
            return 'sug-selectedAction';
        }
        return currentIndex > -1 && !this.state.suggestionsLoading ? 'sug-' + currentIndex : undefined;
    };
    BasePicker.prototype.getSuggestionsAlert = function (suggestionAlertClassName) {
        if (suggestionAlertClassName === void 0) { suggestionAlertClassName = legacyStyles.screenReaderOnly; }
        var currentIndex = this.suggestionStore.currentIndex;
        if (this.props.enableSelectedSuggestionAlert) {
            var selectedSuggestion = currentIndex > -1 ? this.suggestionStore.getSuggestionAtIndex(this.suggestionStore.currentIndex) : undefined;
            var selectedSuggestionAlertText = selectedSuggestion ? selectedSuggestion.ariaLabel : undefined;
            return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: suggestionAlertClassName, role: "alert", id: this._ariaMap.selectedSuggestionAlert, "aria-live": "assertive" },
                selectedSuggestionAlertText,
                ' '));
        }
    };
    /**
     * Takes in the current updated value and either resolves it with the new suggestions
     * or if updated value is undefined then it clears out currently suggested items
     */
    BasePicker.prototype._updateAndResolveValue = function (updatedValue, newSuggestions) {
        if (updatedValue !== undefined) {
            this.resolveNewValue(updatedValue, newSuggestions);
        }
        else {
            this.suggestionStore.updateSuggestions(newSuggestions, -1);
            if (this.state.suggestionsLoading) {
                this.setState({
                    suggestionsLoading: false,
                });
            }
        }
    };
    /**
     * Controls what happens whenever there is an action that impacts the selected items.
     * If `selectedItems` is provided, this will act as a controlled component and it will not update its own state.
     */
    BasePicker.prototype._updateSelectedItems = function (items) {
        var _this = this;
        if (this.props.selectedItems) {
            // If the component is a controlled component then the controlling component will need to add or remove the items.
            this.onChange(items);
        }
        else {
            this.setState({ items: items }, function () {
                _this._onSelectedItemsUpdated(items);
            });
        }
    };
    BasePicker.prototype._onSelectedItemsUpdated = function (items) {
        this.onChange(items);
    };
    /**
     * Suggestions are normally shown after the user updates text and the text
     * is non-empty, but also when the user clicks on the input element.
     * @returns True if suggestions should be shown.
     */
    BasePicker.prototype._getShowSuggestions = function () {
        var areSuggestionsVisible = this.input.current !== undefined &&
            this.input.current !== null &&
            this.input.current.inputElement === document.activeElement &&
            this.input.current.value !== '';
        return areSuggestionsVisible;
    };
    BasePicker.prototype._getTextFromItem = function (item, currentValue) {
        if (this.props.getTextFromItem) {
            return this.props.getTextFromItem(item, currentValue);
        }
        else {
            return '';
        }
    };
    return BasePicker;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));

var BasePickerListBelow = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(BasePickerListBelow, _super);
    function BasePickerListBelow() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BasePickerListBelow.prototype.render = function () {
        var _a = this.state, suggestedDisplayValue = _a.suggestedDisplayValue, isFocused = _a.isFocused;
        var _b = this.props, className = _b.className, inputProps = _b.inputProps, disabled = _b.disabled, theme = _b.theme, styles = _b.styles;
        var selectedSuggestionAlertId = this.props.enableSelectedSuggestionAlert
            ? this._ariaMap.selectedSuggestionAlert
            : '';
        var suggestionsAvailable = this.state.suggestionsVisible ? this._ariaMap.suggestionList : '';
        // TODO
        // Clean this up by leaving only the first part after removing support for SASS.
        // Currently we can not remove the SASS styles from BasePicker class because it
        // might be used by consumers who created custom pickers from extending from
        // this base class and have not used the new 'styles' prop.
        // We check for 'styles' prop which is going to be injected by the 'styled' HOC
        // for every other already existing picker variant (PeoplePicker, TagPicker)
        // so that we can use the CSS-in-JS styles. If the check fails (ex: custom picker),
        // then we just use the old SASS styles instead.
        var classNames = styles
            ? getClassNames(styles, {
                theme: theme,
                className: className,
                isFocused: isFocused,
                inputClassName: inputProps && inputProps.className,
            })
            : {
                root: Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["css"])('ms-BasePicker', className ? className : ''),
                text: Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["css"])('ms-BasePicker-text', legacyStyles.pickerText, this.state.isFocused && legacyStyles.inputFocused),
                input: Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["css"])('ms-BasePicker-input', legacyStyles.pickerInput, inputProps && inputProps.className),
                screenReaderText: legacyStyles.screenReaderOnly,
            };
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { ref: this.root, onBlur: this.onBlur },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: classNames.root, onKeyDown: this.onKeyDown },
                this.getSuggestionsAlert(classNames.screenReaderText),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: classNames.text, "aria-owns": suggestionsAvailable || undefined, "aria-expanded": !!this.state.suggestionsVisible, "aria-haspopup": suggestionsAvailable && this.suggestionStore.suggestions.length > 0 ? 'listbox' : 'dialog', role: "combobox" },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Autofill_index__WEBPACK_IMPORTED_MODULE_10__["Autofill"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, inputProps, { className: classNames.input, componentRef: this.input, onFocus: this.onInputFocus, onBlur: this.onInputBlur, onClick: this.onClick, onInputValueChange: this.onInputChange, suggestedDisplayValue: suggestedDisplayValue, "aria-activedescendant": this.getActiveDescendant(), role: "textbox", disabled: disabled, "aria-controls": suggestionsAvailable + " " + selectedSuggestionAlertId || undefined, onInputChange: this.props.onInputChange })))),
            this.renderSuggestions(),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utilities_selection_index__WEBPACK_IMPORTED_MODULE_5__["SelectionZone"], { selection: this.selection, selectionMode: _utilities_selection_index__WEBPACK_IMPORTED_MODULE_5__["SelectionMode"].single },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_FocusZone__WEBPACK_IMPORTED_MODULE_3__["FocusZone"], { componentRef: this.focusZone, className: "ms-BasePicker-selectedItems" // just a className hook without any styles applied to it.
                    , isCircularNavigation: true, direction: _FocusZone__WEBPACK_IMPORTED_MODULE_3__["FocusZoneDirection"].bidirectional, shouldEnterInnerZone: this._shouldFocusZoneEnterInnerZone, id: this._ariaMap.selectedItems, role: 'list' }, this.renderItems()))));
    };
    BasePickerListBelow.prototype.onBackspace = function (ev) {
        // override the existing backspace method to not do anything because the list items appear below.
    };
    return BasePickerListBelow;
}(BasePicker));

//# sourceMappingURL=BasePicker.js.map

/***/ }),

/***/ "5Ne8":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/pickers/PeoplePicker/PeoplePickerItems/PeoplePickerItem.js ***!
  \*************************************************************************************************************************************************************************************************************************************/
/*! exports provided: PeoplePickerItemBase, PeoplePickerItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PeoplePickerItemBase", function() { return PeoplePickerItemBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PeoplePickerItem", function() { return PeoplePickerItem; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../Utilities */ "mkpW");
/* harmony import */ var _Persona__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../Persona */ "UXmd");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../Button */ "epn0");
/* harmony import */ var _BasePicker_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../BasePicker.types */ "EyaF");
/* harmony import */ var _PeoplePickerItem_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./PeoplePickerItem.styles */ "nGEB");







var getClassNames = Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["classNamesFunction"])();
var PeoplePickerItemBase = function (props) {
    var item = props.item, onRemoveItem = props.onRemoveItem, index = props.index, selected = props.selected, removeButtonAriaLabel = props.removeButtonAriaLabel, styles = props.styles, theme = props.theme, className = props.className, disabled = props.disabled;
    var itemId = Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["getId"])();
    var classNames = getClassNames(styles, {
        theme: theme,
        className: className,
        selected: selected,
        disabled: disabled,
        invalid: item.ValidationState === _BasePicker_types__WEBPACK_IMPORTED_MODULE_5__["ValidationState"].warning,
    });
    var personaStyles = classNames.subComponentStyles
        ? classNames.subComponentStyles.persona
        : undefined;
    var personaCoinStyles = classNames.subComponentStyles
        ? classNames.subComponentStyles.personaCoin
        : undefined;
    return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: classNames.root, "data-is-focusable": !disabled, "data-is-sub-focuszone": true, "data-selection-index": index, role: 'listitem', "aria-labelledby": 'selectedItemPersona-' + itemId },
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: classNames.itemContent, id: 'selectedItemPersona-' + itemId },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Persona__WEBPACK_IMPORTED_MODULE_3__["Persona"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ size: _Persona__WEBPACK_IMPORTED_MODULE_3__["PersonaSize"].size24, styles: personaStyles, coinProps: { styles: personaCoinStyles } }, item))),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Button__WEBPACK_IMPORTED_MODULE_4__["IconButton"], { onClick: onRemoveItem, disabled: disabled, iconProps: { iconName: 'Cancel', styles: { root: { fontSize: '12px' } } }, className: classNames.removeButton, ariaLabel: removeButtonAriaLabel })));
};
var PeoplePickerItem = Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["styled"])(PeoplePickerItemBase, _PeoplePickerItem_styles__WEBPACK_IMPORTED_MODULE_6__["getStyles"], undefined, { scope: 'PeoplePickerItem' });
//# sourceMappingURL=PeoplePickerItem.js.map

/***/ }),

/***/ "5zxV":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-shared-react@47.12.13_d89e40c38ccaa8bd6af6488f37cb196d/node_modules/@ms/odsp-shared-react/lib/components/PeoplePicker/PeoplePicker.js ***!
  \******************************************************************************************************************************************************************************************************/
/*! exports provided: PeoplePicker, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ms_shared_react_people_picker_lib_PeoplePicker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ms/shared-react-people-picker/lib/PeoplePicker */ "YbS3");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PeoplePicker", function() { return _ms_shared_react_people_picker_lib_PeoplePicker__WEBPACK_IMPORTED_MODULE_0__["PeoplePicker"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _ms_shared_react_people_picker_lib_PeoplePicker__WEBPACK_IMPORTED_MODULE_0__["PeoplePicker"]; });



//# sourceMappingURL=PeoplePicker.js.map

/***/ }),

/***/ "7mE5":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/shared-react-people-picker@1.1.20_e509c819ab980023b76e5746ec0fc9e2/node_modules/@ms/shared-react-people-picker/lib/PeoplePicker.Props.js ***!
  \****************************************************************************************************************************************************************************************************/
/*! exports provided: PeoplePickerType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PeoplePickerType", function() { return PeoplePickerType; });
var PeoplePickerType;
(function (PeoplePickerType) {
    // The standard PeoplePicker with items rendered inline.
    PeoplePickerType[PeoplePickerType["normal"] = 0] = "normal";
    // Works the same as the Standard PeoplePicker but items are rendered the picker search box.
    PeoplePickerType[PeoplePickerType["listBelow"] = 1] = "listBelow";
})(PeoplePickerType || (PeoplePickerType = {}));
//# sourceMappingURL=PeoplePicker.Props.js.map

/***/ }),

/***/ "8Kii":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/pickers/TagPicker/TagItemSuggestion.styles.js ***!
  \************************************************************************************************************************************************************************************************************************/
/*! exports provided: getStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStyles", function() { return getStyles; });
/* harmony import */ var _Styling__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../Styling */ "PL71");

var GlobalClassNames = {
    suggestionTextOverflow: 'ms-TagItem-TextOverflow',
};
function getStyles(props) {
    var className = props.className, theme = props.theme;
    var classNames = Object(_Styling__WEBPACK_IMPORTED_MODULE_0__["getGlobalClassNames"])(GlobalClassNames, theme);
    return {
        suggestionTextOverflow: [
            classNames.suggestionTextOverflow,
            {
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                maxWidth: '60vw',
                padding: '6px 12px 7px',
                whiteSpace: 'nowrap',
            },
            className,
        ],
    };
}
//# sourceMappingURL=TagItemSuggestion.styles.js.map

/***/ }),

/***/ "9Ygx":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/pickers/Suggestions/Suggestions.types.js ***!
  \*******************************************************************************************************************************************************************************************************************/
/*! exports provided: SuggestionActionType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuggestionActionType", function() { return SuggestionActionType; });
/**
 * Enum to help identify which suggestions action button is selected.
 * {@docCategory Pickers}
 */
var SuggestionActionType;
(function (SuggestionActionType) {
    /** None of the actions is selected. */
    SuggestionActionType[SuggestionActionType["none"] = 0] = "none";
    /** ForceResolve action is selected. */
    SuggestionActionType[SuggestionActionType["forceResolve"] = 1] = "forceResolve";
    /** SearchMore action is selected. */
    SuggestionActionType[SuggestionActionType["searchMore"] = 2] = "searchMore";
})(SuggestionActionType || (SuggestionActionType = {}));
//# sourceMappingURL=Suggestions.types.js.map

/***/ }),

/***/ "9kWw":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/pickers/Suggestions/SuggestionsItem.styles.js ***!
  \************************************************************************************************************************************************************************************************************************/
/*! exports provided: SuggestionsItemGlobalClassNames, getStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuggestionsItemGlobalClassNames", function() { return SuggestionsItemGlobalClassNames; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStyles", function() { return getStyles; });
/* harmony import */ var _Styling__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../Styling */ "PL71");

var SuggestionsItemGlobalClassNames = {
    root: 'ms-Suggestions-item',
    itemButton: 'ms-Suggestions-itemButton',
    closeButton: 'ms-Suggestions-closeButton',
    isSuggested: 'is-suggested',
};
function getStyles(props) {
    var _a, _b, _c;
    var className = props.className, theme = props.theme, suggested = props.suggested;
    var palette = theme.palette, semanticColors = theme.semanticColors;
    var classNames = Object(_Styling__WEBPACK_IMPORTED_MODULE_0__["getGlobalClassNames"])(SuggestionsItemGlobalClassNames, theme);
    return {
        root: [
            classNames.root,
            {
                display: 'flex',
                alignItems: 'stretch',
                boxSizing: 'border-box',
                width: '100%',
                position: 'relative',
                selectors: {
                    '&:hover': {
                        background: semanticColors.menuItemBackgroundHovered,
                    },
                    '&:hover .ms-Suggestions-closeButton': {
                        display: 'block',
                    },
                },
            },
            suggested && {
                selectors: {
                    ':after': {
                        pointerEvents: 'none',
                        content: '""',
                        position: 'absolute',
                        left: 0,
                        top: 0,
                        bottom: 0,
                        right: 0,
                        border: "1px solid " + theme.semanticColors.focusBorder,
                    },
                },
            },
            className,
        ],
        itemButton: [
            classNames.itemButton,
            {
                width: '100%',
                padding: 0,
                border: 'none',
                height: '100%',
                // Force the item button to be collapsible so it can always shrink
                // to accommodate the close button as a peer in its flex container.
                minWidth: 0,
                // Require for IE11 to truncate the component.
                overflow: 'hidden',
                selectors: (_a = {},
                    _a[_Styling__WEBPACK_IMPORTED_MODULE_0__["HighContrastSelector"]] = {
                        color: 'WindowText',
                        selectors: {
                            ':hover': {
                                background: 'Highlight',
                                color: 'HighlightText',
                                MsHighContrastAdjust: 'none',
                            },
                        },
                    },
                    _a[':hover'] = {
                        color: semanticColors.menuItemTextHovered,
                    },
                    _a),
            },
            suggested && [
                classNames.isSuggested,
                {
                    background: semanticColors.menuItemBackgroundPressed,
                    selectors: (_b = {
                            ':hover': {
                                background: semanticColors.menuDivider,
                            }
                        },
                        _b[_Styling__WEBPACK_IMPORTED_MODULE_0__["HighContrastSelector"]] = {
                            background: 'Highlight',
                            color: 'HighlightText',
                            MsHighContrastAdjust: 'none',
                        },
                        _b),
                },
            ],
        ],
        closeButton: [
            classNames.closeButton,
            {
                display: 'none',
                color: palette.neutralSecondary,
                padding: '0 4px',
                height: 'auto',
                width: 32,
                selectors: (_c = {
                        ':hover, :active': {
                            background: palette.neutralTertiaryAlt,
                            color: palette.neutralDark,
                        }
                    },
                    _c[_Styling__WEBPACK_IMPORTED_MODULE_0__["HighContrastSelector"]] = {
                        color: 'WindowText',
                    },
                    _c),
            },
            suggested && {
                selectors: {
                    ':hover, :active': {
                        background: palette.neutralTertiary,
                        color: palette.neutralPrimary,
                    },
                },
            },
        ],
    };
}
//# sourceMappingURL=SuggestionsItem.styles.js.map

/***/ }),

/***/ "AFMd":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/pickers/TagPicker/TagItemSuggestion.js ***!
  \*****************************************************************************************************************************************************************************************************************/
/*! exports provided: TagItemSuggestionBase, TagItemSuggestion */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagItemSuggestionBase", function() { return TagItemSuggestionBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagItemSuggestion", function() { return TagItemSuggestion; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../Utilities */ "mkpW");
/* harmony import */ var _TagItemSuggestion_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TagItemSuggestion.styles */ "8Kii");



var getClassNames = Object(_Utilities__WEBPACK_IMPORTED_MODULE_1__["classNamesFunction"])();
/**
 * {@docCategory TagPicker}
 */
var TagItemSuggestionBase = function (props) {
    var styles = props.styles, theme = props.theme, children = props.children;
    var classNames = getClassNames(styles, {
        theme: theme,
    });
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: classNames.suggestionTextOverflow },
        " ",
        children,
        " ");
};
var TagItemSuggestion = Object(_Utilities__WEBPACK_IMPORTED_MODULE_1__["styled"])(TagItemSuggestionBase, _TagItemSuggestion_styles__WEBPACK_IMPORTED_MODULE_2__["getStyles"], undefined, { scope: 'TagItemSuggestion' });
//# sourceMappingURL=TagItemSuggestion.js.map

/***/ }),

/***/ "AYBj":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/pickers/BasePicker.styles.js ***!
  \*******************************************************************************************************************************************************************************************************/
/*! exports provided: getStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStyles", function() { return getStyles; });
/* harmony import */ var _Styling__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Styling */ "PL71");

var GlobalClassNames = {
    root: 'ms-BasePicker',
    text: 'ms-BasePicker-text',
    itemsWrapper: 'ms-BasePicker-itemsWrapper',
    input: 'ms-BasePicker-input',
};
function getStyles(props) {
    var _a;
    var className = props.className, theme = props.theme, isFocused = props.isFocused, inputClassName = props.inputClassName, disabled = props.disabled;
    if (!theme) {
        throw new Error('theme is undefined or null in base BasePicker getStyles function.');
    }
    var semanticColors = theme.semanticColors, effects = theme.effects, fonts = theme.fonts;
    var inputBorder = semanticColors.inputBorder, inputBorderHovered = semanticColors.inputBorderHovered, inputFocusBorderAlt = semanticColors.inputFocusBorderAlt;
    var classNames = Object(_Styling__WEBPACK_IMPORTED_MODULE_0__["getGlobalClassNames"])(GlobalClassNames, theme);
    // The following lines are to create a semi-transparent color overlay for the disabled state with designer's approval.
    // @todo: investigate the performance cost of the calculation below and apply if negligible.
    //   Replacing with a static color for now.
    // const rgbColor: IRGB | undefined = cssColor(palette.neutralQuaternaryAlt);
    // const disabledOverlayColor = rgbColor ? `rgba(${rgbColor.r}, ${rgbColor.g}, ${rgbColor.b}, 0.29)` : 'transparent';
    var disabledOverlayColor = 'rgba(218, 218, 218, 0.29)';
    return {
        root: [classNames.root, className],
        text: [
            classNames.text,
            {
                display: 'flex',
                position: 'relative',
                flexWrap: 'wrap',
                alignItems: 'center',
                boxSizing: 'border-box',
                minWidth: 180,
                minHeight: 30,
                border: "1px solid " + inputBorder,
                borderRadius: effects.roundedCorner2,
            },
            !isFocused &&
                !disabled && {
                selectors: {
                    ':hover': {
                        borderColor: inputBorderHovered,
                    },
                },
            },
            isFocused && !disabled && Object(_Styling__WEBPACK_IMPORTED_MODULE_0__["getInputFocusStyle"])(inputFocusBorderAlt, effects.roundedCorner2),
            disabled && {
                borderColor: disabledOverlayColor,
                selectors: (_a = {
                        ':after': {
                            content: '""',
                            position: 'absolute',
                            top: 0,
                            right: 0,
                            bottom: 0,
                            left: 0,
                            background: disabledOverlayColor,
                        }
                    },
                    _a[_Styling__WEBPACK_IMPORTED_MODULE_0__["HighContrastSelector"]] = {
                        borderColor: 'GrayText',
                        selectors: {
                            ':after': {
                                background: 'none',
                            },
                        },
                    },
                    _a),
            },
        ],
        itemsWrapper: [
            classNames.itemsWrapper,
            {
                display: 'flex',
                flexWrap: 'wrap',
                maxWidth: '100%',
            },
        ],
        input: [
            classNames.input,
            fonts.medium,
            {
                height: 30,
                border: 'none',
                flexGrow: 1,
                outline: 'none',
                padding: '0 6px 0',
                alignSelf: 'flex-end',
                borderRadius: effects.roundedCorner2,
                backgroundColor: 'transparent',
                color: semanticColors.inputText,
                selectors: {
                    '::-ms-clear': {
                        display: 'none',
                    },
                },
            },
            inputClassName,
        ],
        screenReaderText: _Styling__WEBPACK_IMPORTED_MODULE_0__["hiddenContentStyle"],
    };
}
//# sourceMappingURL=BasePicker.styles.js.map

/***/ }),

/***/ "DT4S":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/Announced/Announced.js ***!
  \*************************************************************************************************************************************************************************************************/
/*! exports provided: Announced */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Announced", function() { return Announced; });
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Utilities */ "mkpW");
/* harmony import */ var _Announced_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Announced.base */ "nZu8");
/* harmony import */ var _Announced_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Announced.styles */ "mLzM");



var Announced = Object(_Utilities__WEBPACK_IMPORTED_MODULE_0__["styled"])(_Announced_base__WEBPACK_IMPORTED_MODULE_1__["AnnouncedBase"], _Announced_styles__WEBPACK_IMPORTED_MODULE_2__["getStyles"]);
//# sourceMappingURL=Announced.js.map

/***/ }),

/***/ "EyaF":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/pickers/BasePicker.types.js ***!
  \******************************************************************************************************************************************************************************************************/
/*! exports provided: ValidationState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidationState", function() { return ValidationState; });
/**
 * Validation state of the user's input.
 * {@docCategory Pickers}
 */
var ValidationState;
(function (ValidationState) {
    /** User input is valid. */
    ValidationState[ValidationState["valid"] = 0] = "valid";
    /** User input could be valid or invalid, its state is not known yet. */
    ValidationState[ValidationState["warning"] = 1] = "warning";
    /** User input is invalid. */
    ValidationState[ValidationState["invalid"] = 2] = "invalid";
})(ValidationState || (ValidationState = {}));
//# sourceMappingURL=BasePicker.types.js.map

/***/ }),

/***/ "JuHm":
/*!**************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/Pickers.js ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: Suggestions, SuggestionActionType, SuggestionsItem, SuggestionsController, Autofill, BaseAutoFill, BasePicker, BasePickerListBelow, ValidationState, BasePeoplePicker, MemberListPeoplePicker, NormalPeoplePickerBase, CompactPeoplePickerBase, ListPeoplePickerBase, createGenericItem, NormalPeoplePicker, CompactPeoplePicker, ListPeoplePicker, PeoplePickerItemBase, PeoplePickerItem, PeoplePickerItemSuggestionBase, PeoplePickerItemSuggestion, TagPickerBase, TagPicker, TagItemBase, TagItem, TagItemSuggestionBase, TagItemSuggestion */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_pickers_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/pickers/index */ "i7Et");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Suggestions", function() { return _components_pickers_index__WEBPACK_IMPORTED_MODULE_0__["Suggestions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SuggestionActionType", function() { return _components_pickers_index__WEBPACK_IMPORTED_MODULE_0__["SuggestionActionType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SuggestionsItem", function() { return _components_pickers_index__WEBPACK_IMPORTED_MODULE_0__["SuggestionsItem"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SuggestionsController", function() { return _components_pickers_index__WEBPACK_IMPORTED_MODULE_0__["SuggestionsController"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Autofill", function() { return _components_pickers_index__WEBPACK_IMPORTED_MODULE_0__["Autofill"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaseAutoFill", function() { return _components_pickers_index__WEBPACK_IMPORTED_MODULE_0__["BaseAutoFill"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BasePicker", function() { return _components_pickers_index__WEBPACK_IMPORTED_MODULE_0__["BasePicker"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BasePickerListBelow", function() { return _components_pickers_index__WEBPACK_IMPORTED_MODULE_0__["BasePickerListBelow"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ValidationState", function() { return _components_pickers_index__WEBPACK_IMPORTED_MODULE_0__["ValidationState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BasePeoplePicker", function() { return _components_pickers_index__WEBPACK_IMPORTED_MODULE_0__["BasePeoplePicker"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MemberListPeoplePicker", function() { return _components_pickers_index__WEBPACK_IMPORTED_MODULE_0__["MemberListPeoplePicker"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NormalPeoplePickerBase", function() { return _components_pickers_index__WEBPACK_IMPORTED_MODULE_0__["NormalPeoplePickerBase"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CompactPeoplePickerBase", function() { return _components_pickers_index__WEBPACK_IMPORTED_MODULE_0__["CompactPeoplePickerBase"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ListPeoplePickerBase", function() { return _components_pickers_index__WEBPACK_IMPORTED_MODULE_0__["ListPeoplePickerBase"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createGenericItem", function() { return _components_pickers_index__WEBPACK_IMPORTED_MODULE_0__["createGenericItem"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NormalPeoplePicker", function() { return _components_pickers_index__WEBPACK_IMPORTED_MODULE_0__["NormalPeoplePicker"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CompactPeoplePicker", function() { return _components_pickers_index__WEBPACK_IMPORTED_MODULE_0__["CompactPeoplePicker"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ListPeoplePicker", function() { return _components_pickers_index__WEBPACK_IMPORTED_MODULE_0__["ListPeoplePicker"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PeoplePickerItemBase", function() { return _components_pickers_index__WEBPACK_IMPORTED_MODULE_0__["PeoplePickerItemBase"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PeoplePickerItem", function() { return _components_pickers_index__WEBPACK_IMPORTED_MODULE_0__["PeoplePickerItem"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PeoplePickerItemSuggestionBase", function() { return _components_pickers_index__WEBPACK_IMPORTED_MODULE_0__["PeoplePickerItemSuggestionBase"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PeoplePickerItemSuggestion", function() { return _components_pickers_index__WEBPACK_IMPORTED_MODULE_0__["PeoplePickerItemSuggestion"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TagPickerBase", function() { return _components_pickers_index__WEBPACK_IMPORTED_MODULE_0__["TagPickerBase"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TagPicker", function() { return _components_pickers_index__WEBPACK_IMPORTED_MODULE_0__["TagPicker"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TagItemBase", function() { return _components_pickers_index__WEBPACK_IMPORTED_MODULE_0__["TagItemBase"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TagItem", function() { return _components_pickers_index__WEBPACK_IMPORTED_MODULE_0__["TagItem"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TagItemSuggestionBase", function() { return _components_pickers_index__WEBPACK_IMPORTED_MODULE_0__["TagItemSuggestionBase"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TagItemSuggestion", function() { return _components_pickers_index__WEBPACK_IMPORTED_MODULE_0__["TagItemSuggestion"]; });


//# sourceMappingURL=Pickers.js.map

/***/ }),

/***/ "KCw9":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/Button/BaseButton.classNames.js ***!
  \**********************************************************************************************************************************************************************************************************/
/*! exports provided: ButtonGlobalClassNames, getBaseButtonClassNames */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonGlobalClassNames", function() { return ButtonGlobalClassNames; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBaseButtonClassNames", function() { return getBaseButtonClassNames; });
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Utilities */ "mkpW");
/* harmony import */ var _Styling__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Styling */ "PL71");



var ButtonGlobalClassNames = {
    msButton: 'ms-Button',
    msButtonHasMenu: 'ms-Button--hasMenu',
    msButtonIcon: 'ms-Button-icon',
    msButtonMenuIcon: 'ms-Button-menuIcon',
    msButtonLabel: 'ms-Button-label',
    msButtonDescription: 'ms-Button-description',
    msButtonScreenReaderText: 'ms-Button-screenReaderText',
    msButtonFlexContainer: 'ms-Button-flexContainer',
    msButtonTextContainer: 'ms-Button-textContainer',
};
var getBaseButtonClassNames = Object(_Utilities__WEBPACK_IMPORTED_MODULE_0__["memoizeFunction"])(function (theme, styles, className, variantClassName, iconClassName, menuIconClassName, disabled, hasMenu, checked, expanded, isSplit) {
    var _a, _b;
    var classNames = Object(_Styling__WEBPACK_IMPORTED_MODULE_1__["getGlobalClassNames"])(ButtonGlobalClassNames, theme || {});
    var isExpanded = expanded && !isSplit;
    return Object(_Styling__WEBPACK_IMPORTED_MODULE_1__["mergeStyleSets"])({
        root: [
            classNames.msButton,
            styles.root,
            variantClassName,
            checked && ['is-checked', styles.rootChecked],
            isExpanded && [
                'is-expanded',
                styles.rootExpanded,
                {
                    selectors: (_a = {},
                        _a[":hover ." + classNames.msButtonIcon] = styles.iconExpandedHovered,
                        // menuIcon falls back to rootExpandedHovered to support original behavior
                        _a[":hover ." + classNames.msButtonMenuIcon] = styles.menuIconExpandedHovered || styles.rootExpandedHovered,
                        _a[':hover'] = styles.rootExpandedHovered,
                        _a),
                },
            ],
            hasMenu && [ButtonGlobalClassNames.msButtonHasMenu, styles.rootHasMenu],
            disabled && ['is-disabled', styles.rootDisabled],
            !disabled &&
                !isExpanded &&
                !checked && {
                selectors: (_b = {
                        ':hover': styles.rootHovered
                    },
                    _b[":hover ." + classNames.msButtonLabel] = styles.labelHovered,
                    _b[":hover ." + classNames.msButtonIcon] = styles.iconHovered,
                    _b[":hover ." + classNames.msButtonDescription] = styles.descriptionHovered,
                    _b[":hover ." + classNames.msButtonMenuIcon] = styles.menuIconHovered,
                    _b[':focus'] = styles.rootFocused,
                    _b[':active'] = styles.rootPressed,
                    _b[":active ." + classNames.msButtonIcon] = styles.iconPressed,
                    _b[":active ." + classNames.msButtonDescription] = styles.descriptionPressed,
                    _b[":active ." + classNames.msButtonMenuIcon] = styles.menuIconPressed,
                    _b),
            },
            disabled && checked && [styles.rootCheckedDisabled],
            !disabled &&
                checked && {
                selectors: {
                    ':hover': styles.rootCheckedHovered,
                    ':active': styles.rootCheckedPressed,
                },
            },
            className,
        ],
        flexContainer: [classNames.msButtonFlexContainer, styles.flexContainer],
        textContainer: [classNames.msButtonTextContainer, styles.textContainer],
        icon: [
            classNames.msButtonIcon,
            iconClassName,
            styles.icon,
            isExpanded && styles.iconExpanded,
            checked && styles.iconChecked,
            disabled && styles.iconDisabled,
        ],
        label: [classNames.msButtonLabel, styles.label, checked && styles.labelChecked, disabled && styles.labelDisabled],
        menuIcon: [
            classNames.msButtonMenuIcon,
            menuIconClassName,
            styles.menuIcon,
            checked && styles.menuIconChecked,
            disabled && !isSplit && styles.menuIconDisabled,
            !disabled &&
                !isExpanded &&
                !checked && {
                selectors: {
                    ':hover': styles.menuIconHovered,
                    ':active': styles.menuIconPressed,
                },
            },
            isExpanded && ['is-expanded', styles.menuIconExpanded],
        ],
        description: [
            classNames.msButtonDescription,
            styles.description,
            checked && styles.descriptionChecked,
            disabled && styles.descriptionDisabled,
        ],
        screenReaderText: [classNames.msButtonScreenReaderText, styles.screenReaderText],
    });
});
//# sourceMappingURL=BaseButton.classNames.js.map

/***/ }),

/***/ "LmXi":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/pickers/AutoFill/BaseAutoFill.js ***!
  \***********************************************************************************************************************************************************************************************************/
/*! exports provided: Autofill, BaseAutoFill */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Autofill_Autofill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Autofill/Autofill */ "+th6");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Autofill", function() { return _Autofill_Autofill__WEBPACK_IMPORTED_MODULE_0__["Autofill"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaseAutoFill", function() { return _Autofill_Autofill__WEBPACK_IMPORTED_MODULE_0__["BaseAutoFill"]; });

// Deprecated, import directly from the component folder now.

//# sourceMappingURL=BaseAutoFill.js.map

/***/ }),

/***/ "NLhK":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/pickers/Suggestions/SuggestionsItem.js ***!
  \*****************************************************************************************************************************************************************************************************************/
/*! exports provided: SuggestionsItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuggestionsItem", function() { return SuggestionsItem; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Utilities */ "mkpW");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../Button */ "epn0");
/* harmony import */ var _Suggestions_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Suggestions.scss */ "p3UT");





var legacyStyles = _Suggestions_scss__WEBPACK_IMPORTED_MODULE_4__;
var getClassNames = Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["classNamesFunction"])();
/**
 * {@docCategory Pickers}
 */
var SuggestionsItem = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(SuggestionsItem, _super);
    function SuggestionsItem(props) {
        var _this = _super.call(this, props) || this;
        Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["initializeComponentRef"])(_this);
        return _this;
    }
    SuggestionsItem.prototype.render = function () {
        var _a;
        var _b = this.props, suggestionModel = _b.suggestionModel, RenderSuggestion = _b.RenderSuggestion, onClick = _b.onClick, className = _b.className, id = _b.id, onRemoveItem = _b.onRemoveItem, isSelectedOverride = _b.isSelectedOverride, removeButtonAriaLabel = _b.removeButtonAriaLabel, styles = _b.styles, theme = _b.theme;
        // TODO
        // Clean this up by leaving only the first part after removing support for SASS.
        // Currently we can not remove the SASS styles from SuggestionsItem class because it
        // might be used by consumers separately from pickers extending from BasePicker
        // and have not used the new 'styles' prop. Because it's expecting a type parameter,
        // we can not use the 'styled' function without adding some helpers which can break
        // downstream consumers who did not use the new helpers.
        // We check for 'styles' prop which is going to be injected by the 'styled' HOC
        // in Suggestions when the typed SuggestionsItem class is ready to be rendered. If the
        // check passes we can use the CSS-in-JS styles. If the check fails (ex: custom picker),
        // then we just use the old SASS styles instead.
        var classNames = styles
            ? getClassNames(styles, {
                theme: theme,
                className: className,
                suggested: suggestionModel.selected || isSelectedOverride,
            })
            : {
                root: Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["css"])('ms-Suggestions-item', legacyStyles.suggestionsItem, (_a = {},
                    _a['is-suggested ' + legacyStyles.suggestionsItemIsSuggested] = suggestionModel.selected || isSelectedOverride,
                    _a), className),
                itemButton: Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["css"])('ms-Suggestions-itemButton', legacyStyles.itemButton),
                closeButton: Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["css"])('ms-Suggestions-closeButton', legacyStyles.closeButton),
            };
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: classNames.root },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Button__WEBPACK_IMPORTED_MODULE_3__["CommandButton"], { onClick: onClick, className: classNames.itemButton, id: id, "aria-selected": suggestionModel.selected, role: "option", "aria-label": suggestionModel.ariaLabel }, RenderSuggestion(suggestionModel.item, this.props)),
            this.props.showRemoveButton ? (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Button__WEBPACK_IMPORTED_MODULE_3__["IconButton"], { iconProps: { iconName: 'Cancel', styles: { root: { fontSize: '12px' } } }, title: removeButtonAriaLabel, ariaLabel: removeButtonAriaLabel, onClick: onRemoveItem, className: classNames.closeButton })) : null));
    };
    return SuggestionsItem;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));

//# sourceMappingURL=SuggestionsItem.js.map

/***/ }),

/***/ "PB+e":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/pickers/TagPicker/TagItem.js ***!
  \*******************************************************************************************************************************************************************************************************/
/*! exports provided: TagItemBase, TagItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagItemBase", function() { return TagItemBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagItem", function() { return TagItem; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../Utilities */ "mkpW");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Button */ "epn0");
/* harmony import */ var _TagItem_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TagItem.styles */ "QvHR");




var getClassNames = Object(_Utilities__WEBPACK_IMPORTED_MODULE_1__["classNamesFunction"])();
/**
 * {@docCategory TagPicker}
 */
var TagItemBase = function (props) {
    var theme = props.theme, styles = props.styles, selected = props.selected, disabled = props.disabled, enableTagFocusInDisabledPicker = props.enableTagFocusInDisabledPicker, children = props.children, className = props.className, index = props.index, onRemoveItem = props.onRemoveItem, removeButtonAriaLabel = props.removeButtonAriaLabel, _a = props.title, title = _a === void 0 ? typeof props.children === 'string' ? props.children : props.item.name : _a;
    var classNames = getClassNames(styles, {
        theme: theme,
        className: className,
        selected: selected,
        disabled: disabled,
    });
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: classNames.root, role: 'listitem', key: index, "data-selection-index": index, "data-is-focusable": (enableTagFocusInDisabledPicker || !disabled) && true },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: classNames.text, "aria-label": title, title: title }, children),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_Button__WEBPACK_IMPORTED_MODULE_2__["IconButton"], { onClick: onRemoveItem, disabled: disabled, iconProps: { iconName: 'Cancel', styles: { root: { fontSize: '12px' } } }, className: classNames.close, ariaLabel: removeButtonAriaLabel })));
};
var TagItem = Object(_Utilities__WEBPACK_IMPORTED_MODULE_1__["styled"])(TagItemBase, _TagItem_styles__WEBPACK_IMPORTED_MODULE_3__["getStyles"], undefined, {
    scope: 'TagItem',
});
//# sourceMappingURL=TagItem.js.map

/***/ }),

/***/ "Pvlj":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/shared-react-people-picker@1.1.20_e509c819ab980023b76e5746ec0fc9e2/node_modules/@ms/shared-react-people-picker/lib/PeoplePicker.resx.js ***!
  \***************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var strings = {"searchForMoreText":"Śēàŕćĥ Ďĩŕēćţōŕŷ","personNameAndEmail":"{0}, {1}","removeButtonDefaultArialLabel":"Ŕēmōvē {0}"};
strings.default = strings;
module.exports = strings;

/***/ }),

/***/ "QYKG":
/*!***********************************************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/pickers/PeoplePicker/PeoplePickerItems/PeoplePickerItemSuggestion.js ***!
  \***********************************************************************************************************************************************************************************************************************************************/
/*! exports provided: PeoplePickerItemSuggestionBase, PeoplePickerItemSuggestion */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PeoplePickerItemSuggestionBase", function() { return PeoplePickerItemSuggestionBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PeoplePickerItemSuggestion", function() { return PeoplePickerItemSuggestion; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../Utilities */ "mkpW");
/* harmony import */ var _Persona__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../Persona */ "UXmd");
/* harmony import */ var _PeoplePickerItemSuggestion_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PeoplePickerItemSuggestion.styles */ "zGTv");





var getClassNames = Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["classNamesFunction"])();
var PeoplePickerItemSuggestionBase = function (props) {
    var personaProps = props.personaProps, suggestionsProps = props.suggestionsProps, compact = props.compact, styles = props.styles, theme = props.theme, className = props.className;
    var classNames = getClassNames(styles, {
        theme: theme,
        className: (suggestionsProps && suggestionsProps.suggestionsItemClassName) || className,
    });
    var personaStyles = classNames.subComponentStyles && classNames.subComponentStyles.persona
        ? classNames.subComponentStyles.persona
        : undefined;
    return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: classNames.root },
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Persona__WEBPACK_IMPORTED_MODULE_3__["Persona"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ size: _Persona__WEBPACK_IMPORTED_MODULE_3__["PersonaSize"].size24, styles: personaStyles, className: classNames.personaWrapper, showSecondaryText: !compact }, personaProps))));
};
var PeoplePickerItemSuggestion = Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["styled"])(PeoplePickerItemSuggestionBase, _PeoplePickerItemSuggestion_styles__WEBPACK_IMPORTED_MODULE_4__["getStyles"], undefined, { scope: 'PeoplePickerItemSuggestion' });
//# sourceMappingURL=PeoplePickerItemSuggestion.js.map

/***/ }),

/***/ "QvHR":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/pickers/TagPicker/TagItem.styles.js ***!
  \**************************************************************************************************************************************************************************************************************/
/*! exports provided: getStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStyles", function() { return getStyles; });
/* harmony import */ var _Styling__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../Styling */ "PL71");
/* harmony import */ var _Button_BaseButton_classNames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Button/BaseButton.classNames */ "KCw9");
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Utilities */ "mkpW");



var GlobalClassNames = {
    root: 'ms-TagItem',
    text: 'ms-TagItem-text',
    close: 'ms-TagItem-close',
    isSelected: 'is-selected',
};
var TAG_HEIGHT = 26;
function getStyles(props) {
    var _a, _b, _c, _d;
    var className = props.className, theme = props.theme, selected = props.selected, disabled = props.disabled;
    var palette = theme.palette, effects = theme.effects, fonts = theme.fonts, semanticColors = theme.semanticColors;
    var classNames = Object(_Styling__WEBPACK_IMPORTED_MODULE_0__["getGlobalClassNames"])(GlobalClassNames, theme);
    return {
        root: [
            classNames.root,
            fonts.medium,
            Object(_Styling__WEBPACK_IMPORTED_MODULE_0__["getFocusStyle"])(theme),
            {
                boxSizing: 'content-box',
                flexShrink: '1',
                margin: 2,
                height: TAG_HEIGHT,
                lineHeight: TAG_HEIGHT,
                cursor: 'default',
                userSelect: 'none',
                display: 'flex',
                flexWrap: 'nowrap',
                maxWidth: 300,
                minWidth: 0,
                borderRadius: effects.roundedCorner2,
                color: semanticColors.inputText,
                background: !selected || disabled ? palette.neutralLighter : palette.themePrimary,
                selectors: (_a = {
                        ':hover': [
                            !disabled &&
                                !selected && {
                                color: palette.neutralDark,
                                background: palette.neutralLight,
                                selectors: {
                                    '.ms-TagItem-close': {
                                        color: palette.neutralPrimary,
                                    },
                                },
                            },
                            disabled && { background: palette.neutralLighter },
                            selected && !disabled && { background: palette.themePrimary },
                        ]
                    },
                    _a[_Styling__WEBPACK_IMPORTED_MODULE_0__["HighContrastSelector"]] = {
                        border: "1px solid " + (!selected ? 'WindowText' : 'WindowFrame'),
                    },
                    _a),
            },
            disabled && {
                selectors: (_b = {},
                    _b[_Styling__WEBPACK_IMPORTED_MODULE_0__["HighContrastSelector"]] = {
                        borderColor: 'GrayText',
                    },
                    _b),
            },
            selected &&
                !disabled && [
                classNames.isSelected,
                {
                    color: palette.white,
                },
            ],
            className,
        ],
        text: [
            classNames.text,
            {
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
                minWidth: 30,
                margin: '0 8px',
            },
            disabled && {
                selectors: (_c = {},
                    _c[_Styling__WEBPACK_IMPORTED_MODULE_0__["HighContrastSelector"]] = {
                        color: 'GrayText',
                    },
                    _c),
            },
        ],
        close: [
            classNames.close,
            {
                color: palette.neutralSecondary,
                width: 30,
                height: '100%',
                flex: '0 0 auto',
                borderRadius: Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["getRTL"])(theme)
                    ? effects.roundedCorner2 + " 0 0 " + effects.roundedCorner2
                    : "0 " + effects.roundedCorner2 + " " + effects.roundedCorner2 + " 0",
                selectors: {
                    ':hover': {
                        background: palette.neutralQuaternaryAlt,
                        color: palette.neutralPrimary,
                    },
                    ':active': {
                        color: palette.white,
                        backgroundColor: palette.themeDark,
                    },
                },
            },
            selected && {
                color: palette.white,
                selectors: {
                    ':hover': {
                        color: palette.white,
                        background: palette.themeDark,
                    },
                },
            },
            disabled && {
                selectors: (_d = {},
                    _d["." + _Button_BaseButton_classNames__WEBPACK_IMPORTED_MODULE_1__["ButtonGlobalClassNames"].msButtonIcon] = {
                        color: palette.neutralSecondary,
                    },
                    _d),
            },
        ],
    };
}
//# sourceMappingURL=TagItem.styles.js.map

/***/ }),

/***/ "UXmd":
/*!**************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/Persona.js ***!
  \**************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/office-ui-fabric-react-bundle */ "KL1q");
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
// Loading office-ui-fabric-react/./lib/Persona.js


/***/ }),

/***/ "YbS3":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/shared-react-people-picker@1.1.20_e509c819ab980023b76e5746ec0fc9e2/node_modules/@ms/shared-react-people-picker/lib/PeoplePicker.js ***!
  \**********************************************************************************************************************************************************************************************/
/*! exports provided: PeoplePicker, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PeoplePicker", function() { return PeoplePicker; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var office_ui_fabric_react_lib_Utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! office-ui-fabric-react/lib/Utilities */ "mkpW");
/* harmony import */ var office_ui_fabric_react_lib_Pickers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! office-ui-fabric-react/lib/Pickers */ "JuHm");
/* harmony import */ var _ms_odsp_datasources_lib_PeoplePicker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ms/odsp-datasources/lib/PeoplePicker */ "sQJ6");
/* harmony import */ var _ms_odsp_datasources_lib_dataSources_roleAssignments_PrincipalType__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ms/odsp-datasources/lib/dataSources/roleAssignments/PrincipalType */ "2+UY");
/* harmony import */ var _PeoplePickerDefaultItems__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./PeoplePickerDefaultItems */ "zbfv");
/* harmony import */ var _PeoplePicker_Props__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./PeoplePicker.Props */ "7mE5");
/* harmony import */ var _PeoplePicker_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./PeoplePicker.scss */ "qkZT");
/* harmony import */ var _PeoplePicker_resx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./PeoplePicker.resx */ "Pvlj");
/* harmony import */ var _PeoplePicker_resx__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_PeoplePicker_resx__WEBPACK_IMPORTED_MODULE_9__);










var PersonPicker = office_ui_fabric_react_lib_Pickers__WEBPACK_IMPORTED_MODULE_3__["BasePicker"];
var PersonPickerListBelow = office_ui_fabric_react_lib_Pickers__WEBPACK_IMPORTED_MODULE_3__["BasePickerListBelow"];
var PeoplePicker = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(PeoplePicker, _super);
    function PeoplePicker(props) {
        var _this = _super.call(this, props) || this;
        _this._onResolveSuggestions = function (value) {
            if (_this._peoplePickerSearchPromise) {
                _this._peoplePickerSearchPromise.cancel();
                _this._peoplePickerSearchPromise = undefined;
            }
            // Whitespace on ends should not go into search
            value = value.trim();
            // 1 character returns too many results so we should only search if there are 2 or more characters.
            // This is inline with the current way that the peoplepicker works in odsp-next.
            if (value.length < 2) {
                return _this.props.onResolvedSuggestions ? _this.props.onResolvedSuggestions([], value) : [];
            }
            var peoplePickerSearchResult = _this._dataProvider.search(value.trim(), _this._getPeoplePickerQueryParams());
            if (!peoplePickerSearchResult) {
                return _this.props.onResolvedSuggestions ? _this.props.onResolvedSuggestions([], value) : [];
            }
            var cachedItems = peoplePickerSearchResult.cached ? peoplePickerSearchResult.cached : [];
            _this._peoplePickerSearchPromise = peoplePickerSearchResult.promise;
            return _this._peoplePickerSearchPromise
                .then(function (personList) {
                _this._peoplePickerSearchPromise = undefined;
                return personList ? cachedItems.concat(personList) : [];
            })
                .then(function (suggestions) {
                return _this.props.onResolvedSuggestions
                    ? _this.props.onResolvedSuggestions(suggestions, value)
                    : suggestions;
            });
        };
        _this._onGetMoreResults = function (query) {
            if (_this._onGetMoreResultsClicked) {
                _this._onGetMoreResultsClicked();
            }
            var peoplePickerQueryParams;
            if (_this.props.peoplePickerQueryParams) {
                peoplePickerQueryParams = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, _this.props.peoplePickerQueryParams);
                peoplePickerQueryParams.useGraph = false;
                peoplePickerQueryParams.useSubstrate = false;
            }
            return _this._dataProvider && _this._dataProvider.sharePointSearch && peoplePickerQueryParams
                ? _this._dataProvider.sharePointSearch(query, peoplePickerQueryParams)
                : [];
        };
        if (props.dataProvider) {
            _this._dataProvider = props.dataProvider;
        }
        else {
            if (!props.context) {
                throw new Error('No pageContext available for PeoplePickerProvider.');
            }
            _this._dataProvider = new _ms_odsp_datasources_lib_PeoplePicker__WEBPACK_IMPORTED_MODULE_4__["PeoplePickerProvider"]({
                pageContext: props.context,
                peoplePickerDataSource: props.dataSource
            });
        }
        // People Picker base class only handle GetMoreResults when the PeoplePickerProvider has canUseGraph function,
        // canUseGraph is true, and no pass in onGetMoreResults callback.
        _this._handleGetMoreResultsInBaseClass =
            !!(_this._dataProvider.canUseGraph &&
                _this.props.peoplePickerQueryParams &&
                _this._dataProvider.canUseGraph(_this.props.peoplePickerQueryParams)) && !_this.props.onGetMoreResults;
        _this.state = {
            hasUnresolvedText: false,
            searchForMoreText: _this._getSearchForMoreText(_this._handleGetMoreResultsInBaseClass)
        };
        return _this;
    }
    Object.defineProperty(PeoplePicker.prototype, "selectedPeople", {
        get: function () {
            return (this._peoplePicker && this._peoplePicker.items) || [];
        },
        enumerable: true,
        configurable: true
    });
    PeoplePicker.prototype.render = function () {
        var _a = this.props, className = _a.className, onRenderItem = _a.onRenderItem, onRenderSuggestionsItem = _a.onRenderSuggestionsItem, defaultSelectedItems = _a.defaultSelectedItems, onSelectedPersonasChange = _a.onSelectedPersonasChange, suggestionsHeaderText = _a.suggestionsHeaderText, suggestionsClassName = _a.suggestionsClassName, noResultsFoundText = _a.noResultsFoundText, loadingText = _a.loadingText, inputProps = _a.inputProps, onSuggestionSelected = _a.onSuggestionSelected, suggestionsAvailableAlertText = _a.suggestionsAvailableAlertText, enableSelectedSuggestionAlert = _a.enableSelectedSuggestionAlert, selectedItems = _a.selectedItems, itemLimit = _a.itemLimit, onInputChange = _a.onInputChange, onGetMoreResults = _a.onGetMoreResults, searchForMoreText = _a.searchForMoreText, _b = _a.ariaLabel, ariaLabel = _b === void 0 ? '' : _b, pickerCalloutProps = _a.pickerCalloutProps, pickerOverrideStyles = _a.pickerOverrideStyles, theme = _a.theme, disabled = _a.disabled, onGetMoreResultsClicked = _a.onGetMoreResultsClicked;
        this._onGetMoreResultsClicked = onGetMoreResultsClicked;
        var pickerProps = {
            className: className,
            onRenderSuggestionsItem: onRenderSuggestionsItem ? onRenderSuggestionsItem : _PeoplePickerDefaultItems__WEBPACK_IMPORTED_MODULE_6__["SuggestionItemDefault"],
            onResolveSuggestions: this._onResolveSuggestions,
            defaultSelectedItems: defaultSelectedItems,
            selectedItems: selectedItems,
            onChange: onSelectedPersonasChange,
            inputProps: inputProps,
            enableSelectedSuggestionAlert: enableSelectedSuggestionAlert,
            pickerSuggestionsProps: {
                suggestionsHeaderText: suggestionsHeaderText,
                loadingText: loadingText,
                noResultsFoundText: noResultsFoundText,
                className: suggestionsClassName,
                suggestionsAvailableAlertText: suggestionsAvailableAlertText,
                searchForMoreText: searchForMoreText
                    ? searchForMoreText
                    : this._handleGetMoreResultsInBaseClass
                        ? this.state.searchForMoreText
                        : undefined
            },
            onItemSelected: onSuggestionSelected,
            itemLimit: itemLimit,
            onInputChange: onInputChange,
            onGetMoreResults: onGetMoreResults
                ? onGetMoreResults
                : this._handleGetMoreResultsInBaseClass
                    ? this._onGetMoreResults
                    : undefined,
            pickerCalloutProps: pickerCalloutProps,
            styles: pickerOverrideStyles,
            theme: theme,
            'aria-label': ariaLabel,
            disabled: disabled
        };
        switch (this.props.peoplePickerType) {
            case _PeoplePicker_Props__WEBPACK_IMPORTED_MODULE_7__["PeoplePickerType"].listBelow:
                pickerProps.onRenderItem = onRenderItem ? onRenderItem : _PeoplePickerDefaultItems__WEBPACK_IMPORTED_MODULE_6__["SelectedItemBelowDefault"];
                return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](PersonPickerListBelow, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, pickerProps, { componentRef: this._resolveRef('_peoplePicker') }));
            default:
                pickerProps.onRenderItem = onRenderItem ? onRenderItem : _PeoplePickerDefaultItems__WEBPACK_IMPORTED_MODULE_6__["SelectedItemDefault"];
                return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](PersonPicker, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, pickerProps, { componentRef: this._resolveRef('_peoplePicker') }));
        }
    };
    PeoplePicker.prototype.focusInput = function () {
        if (this._peoplePicker) {
            this._peoplePicker.focusInput();
        }
    };
    /**
     * Use the picker query params set on the props so that we're using updated values based on GetSharingInformation.
     * If, for some reason, no picker query params are set on the props, use default values as a fallback.
     */
    PeoplePicker.prototype._getPeoplePickerQueryParams = function () {
        if (this.props.peoplePickerQueryParams) {
            if (!this.props.peoplePickerQueryParams.onToggleGetMoreResults &&
                this._handleGetMoreResultsInBaseClass) {
                this.props.peoplePickerQueryParams.onToggleGetMoreResults = this._onToggleGetMoreResults;
            }
            return this.props.peoplePickerQueryParams;
        }
        return {
            allowEmailAddresses: false,
            groupID: 0,
            maximumEntitySuggestions: 30,
            // Corresponds to all sources server side.
            principalSource: 15,
            blockExternalUsers: true,
            // The enum this variable is based off of is bitwise so we can use bitwise "or" to allow for multiple
            // prinicpalTypes being returned from the search.
            // tslint thinks that all bitwise opperators are mistyped (e.g. && as & or || as |).
            // So we need to turn it off for this.
            // tslint:disable-next-line:no-bitwise
            principalType: _ms_odsp_datasources_lib_dataSources_roleAssignments_PrincipalType__WEBPACK_IMPORTED_MODULE_5__["default"].user | _ms_odsp_datasources_lib_dataSources_roleAssignments_PrincipalType__WEBPACK_IMPORTED_MODULE_5__["default"].securityGroup | _ms_odsp_datasources_lib_dataSources_roleAssignments_PrincipalType__WEBPACK_IMPORTED_MODULE_5__["default"].sharePointGroup
        };
    };
    PeoplePicker.prototype._onToggleGetMoreResults = function (showGetMoreResults) {
        if (this.state &&
            ((showGetMoreResults && !this.state.searchForMoreText) ||
                (!showGetMoreResults && this.state.searchForMoreText))) {
            this.setState({ searchForMoreText: this._getSearchForMoreText(showGetMoreResults) });
        }
    };
    PeoplePicker.prototype._getSearchForMoreText = function (showGetMoreResults) {
        return showGetMoreResults ? _PeoplePicker_resx__WEBPACK_IMPORTED_MODULE_9___default.a.searchForMoreText : undefined;
    };
    return PeoplePicker;
}(office_ui_fabric_react_lib_Utilities__WEBPACK_IMPORTED_MODULE_2__["BaseComponent"]));

/* harmony default export */ __webpack_exports__["default"] = (PeoplePicker);
//# sourceMappingURL=PeoplePicker.js.map

/***/ }),

/***/ "bxdr":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/pickers/Suggestions/Suggestions.js ***!
  \*************************************************************************************************************************************************************************************************************/
/*! exports provided: Suggestions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Suggestions", function() { return Suggestions; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Utilities */ "mkpW");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../Button */ "epn0");
/* harmony import */ var _Spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../Spinner */ "fyAn");
/* harmony import */ var _Announced__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../Announced */ "wTsj");
/* harmony import */ var _Suggestions_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Suggestions.types */ "9Ygx");
/* harmony import */ var _SuggestionsItem__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./SuggestionsItem */ "NLhK");
/* harmony import */ var _SuggestionsItem_styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./SuggestionsItem.styles */ "9kWw");
/* harmony import */ var _Suggestions_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Suggestions.scss */ "p3UT");










var legacyStyles = _Suggestions_scss__WEBPACK_IMPORTED_MODULE_9__;
var getClassNames = Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["classNamesFunction"])();
var StyledSuggestionsItem = Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["styled"])(_SuggestionsItem__WEBPACK_IMPORTED_MODULE_7__["SuggestionsItem"], _SuggestionsItem_styles__WEBPACK_IMPORTED_MODULE_8__["getStyles"], undefined, { scope: 'SuggestionItem' });
/**
 * {@docCategory Pickers}
 */
var Suggestions = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(Suggestions, _super);
    function Suggestions(suggestionsProps) {
        var _this = _super.call(this, suggestionsProps) || this;
        _this._forceResolveButton = react__WEBPACK_IMPORTED_MODULE_1__["createRef"]();
        _this._searchForMoreButton = react__WEBPACK_IMPORTED_MODULE_1__["createRef"]();
        _this._selectedElement = react__WEBPACK_IMPORTED_MODULE_1__["createRef"]();
        /**
         * Returns true if the event was handled, false otherwise
         */
        _this.tryHandleKeyDown = function (keyCode, currentSuggestionIndex) {
            var isEventHandled = false;
            var newSelectedActionType = null;
            var currentSelectedAction = _this.state.selectedActionType;
            var suggestionLength = _this.props.suggestions.length;
            if (keyCode === _Utilities__WEBPACK_IMPORTED_MODULE_2__["KeyCodes"].down) {
                switch (currentSelectedAction) {
                    case _Suggestions_types__WEBPACK_IMPORTED_MODULE_6__["SuggestionActionType"].forceResolve:
                        if (suggestionLength > 0) {
                            _this._refocusOnSuggestions(keyCode);
                            newSelectedActionType = _Suggestions_types__WEBPACK_IMPORTED_MODULE_6__["SuggestionActionType"].none;
                        }
                        else if (_this._searchForMoreButton.current) {
                            newSelectedActionType = _Suggestions_types__WEBPACK_IMPORTED_MODULE_6__["SuggestionActionType"].searchMore;
                        }
                        else {
                            newSelectedActionType = _Suggestions_types__WEBPACK_IMPORTED_MODULE_6__["SuggestionActionType"].forceResolve;
                        }
                        break;
                    case _Suggestions_types__WEBPACK_IMPORTED_MODULE_6__["SuggestionActionType"].searchMore:
                        if (_this._forceResolveButton.current) {
                            newSelectedActionType = _Suggestions_types__WEBPACK_IMPORTED_MODULE_6__["SuggestionActionType"].forceResolve;
                        }
                        else if (suggestionLength > 0) {
                            _this._refocusOnSuggestions(keyCode);
                            newSelectedActionType = _Suggestions_types__WEBPACK_IMPORTED_MODULE_6__["SuggestionActionType"].none;
                        }
                        else {
                            newSelectedActionType = _Suggestions_types__WEBPACK_IMPORTED_MODULE_6__["SuggestionActionType"].searchMore;
                        }
                        break;
                    case _Suggestions_types__WEBPACK_IMPORTED_MODULE_6__["SuggestionActionType"].none:
                        if (currentSuggestionIndex === -1 && _this._forceResolveButton.current) {
                            newSelectedActionType = _Suggestions_types__WEBPACK_IMPORTED_MODULE_6__["SuggestionActionType"].forceResolve;
                        }
                        break;
                }
            }
            else if (keyCode === _Utilities__WEBPACK_IMPORTED_MODULE_2__["KeyCodes"].up) {
                switch (currentSelectedAction) {
                    case _Suggestions_types__WEBPACK_IMPORTED_MODULE_6__["SuggestionActionType"].forceResolve:
                        if (_this._searchForMoreButton.current) {
                            newSelectedActionType = _Suggestions_types__WEBPACK_IMPORTED_MODULE_6__["SuggestionActionType"].searchMore;
                        }
                        else if (suggestionLength > 0) {
                            _this._refocusOnSuggestions(keyCode);
                            newSelectedActionType = _Suggestions_types__WEBPACK_IMPORTED_MODULE_6__["SuggestionActionType"].none;
                        }
                        break;
                    case _Suggestions_types__WEBPACK_IMPORTED_MODULE_6__["SuggestionActionType"].searchMore:
                        if (suggestionLength > 0) {
                            _this._refocusOnSuggestions(keyCode);
                            newSelectedActionType = _Suggestions_types__WEBPACK_IMPORTED_MODULE_6__["SuggestionActionType"].none;
                        }
                        else if (_this._forceResolveButton.current) {
                            newSelectedActionType = _Suggestions_types__WEBPACK_IMPORTED_MODULE_6__["SuggestionActionType"].forceResolve;
                        }
                        break;
                    case _Suggestions_types__WEBPACK_IMPORTED_MODULE_6__["SuggestionActionType"].none:
                        if (currentSuggestionIndex === -1 && _this._searchForMoreButton.current) {
                            newSelectedActionType = _Suggestions_types__WEBPACK_IMPORTED_MODULE_6__["SuggestionActionType"].searchMore;
                        }
                        break;
                }
            }
            if (newSelectedActionType !== null) {
                _this.setState({ selectedActionType: newSelectedActionType });
                isEventHandled = true;
            }
            return isEventHandled;
        };
        _this._getAlertText = function () {
            var _a = _this.props, isLoading = _a.isLoading, isSearching = _a.isSearching, suggestions = _a.suggestions, suggestionsAvailableAlertText = _a.suggestionsAvailableAlertText, noResultsFoundText = _a.noResultsFoundText;
            if (!isLoading && !isSearching) {
                if (suggestions.length > 0) {
                    return suggestionsAvailableAlertText || '';
                }
                if (noResultsFoundText) {
                    return noResultsFoundText;
                }
            }
            return '';
        };
        _this._getMoreResults = function () {
            if (_this.props.onGetMoreResults) {
                _this.props.onGetMoreResults();
            }
        };
        _this._forceResolve = function () {
            if (_this.props.createGenericItem) {
                _this.props.createGenericItem();
            }
        };
        _this._shouldShowForceResolve = function () {
            return _this.props.showForceResolve ? _this.props.showForceResolve() : false;
        };
        _this._onClickTypedSuggestionsItem = function (item, index) {
            return function (ev) {
                _this.props.onSuggestionClick(ev, item, index);
            };
        };
        _this._refocusOnSuggestions = function (keyCode) {
            if (typeof _this.props.refocusSuggestions === 'function') {
                _this.props.refocusSuggestions(keyCode);
            }
        };
        _this._onRemoveTypedSuggestionsItem = function (item, index) {
            return function (ev) {
                var onSuggestionRemove = _this.props.onSuggestionRemove;
                onSuggestionRemove(ev, item, index);
                ev.stopPropagation();
            };
        };
        Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["initializeComponentRef"])(_this);
        _this.state = {
            selectedActionType: _Suggestions_types__WEBPACK_IMPORTED_MODULE_6__["SuggestionActionType"].none,
        };
        return _this;
    }
    Suggestions.prototype.componentDidMount = function () {
        this.scrollSelected();
        this.activeSelectedElement = this._selectedElement ? this._selectedElement.current : null;
    };
    Suggestions.prototype.componentDidUpdate = function () {
        // Only scroll to selected element if the selected element has changed. Otherwise do nothing.
        // This prevents some odd behavior where scrolling the active element out of view and clicking on a selected element
        // will trigger a focus event and not give the clicked element the click.
        if (this._selectedElement.current && this.activeSelectedElement !== this._selectedElement.current) {
            this.scrollSelected();
            this.activeSelectedElement = this._selectedElement.current;
        }
    };
    Suggestions.prototype.render = function () {
        var _a, _b;
        var _this = this;
        var _c = this.props, forceResolveText = _c.forceResolveText, mostRecentlyUsedHeaderText = _c.mostRecentlyUsedHeaderText, searchForMoreText = _c.searchForMoreText, className = _c.className, moreSuggestionsAvailable = _c.moreSuggestionsAvailable, noResultsFoundText = _c.noResultsFoundText, suggestions = _c.suggestions, isLoading = _c.isLoading, isSearching = _c.isSearching, loadingText = _c.loadingText, onRenderNoResultFound = _c.onRenderNoResultFound, searchingText = _c.searchingText, isMostRecentlyUsedVisible = _c.isMostRecentlyUsedVisible, resultsMaximumNumber = _c.resultsMaximumNumber, resultsFooterFull = _c.resultsFooterFull, resultsFooter = _c.resultsFooter, _d = _c.isResultsFooterVisible, isResultsFooterVisible = _d === void 0 ? true : _d, suggestionsHeaderText = _c.suggestionsHeaderText, suggestionsClassName = _c.suggestionsClassName, theme = _c.theme, styles = _c.styles, suggestionsListId = _c.suggestionsListId;
        // TODO
        // Clean this up by leaving only the first part after removing support for SASS.
        // Currently we can not remove the SASS styles from Suggestions class because it
        // might be used by consumers separately from pickers extending from BasePicker
        // and have not used the new 'styles' prop. Because it's expecting a type parameter,
        // we can not use the 'styled' function without adding some helpers which can break
        // downstream consumers who did not use the new helpers.
        // We check for 'styles' prop which is going to be injected by the 'styled' HOC
        // in BasePicker when the typed Suggestions class is ready to be rendered. If the check
        // passes we can use the CSS-in-JS styles. If the check fails (ex: custom picker),
        // then we just use the old SASS styles instead.
        this._classNames = styles
            ? getClassNames(styles, {
                theme: theme,
                className: className,
                suggestionsClassName: suggestionsClassName,
                forceResolveButtonSelected: this.state.selectedActionType === _Suggestions_types__WEBPACK_IMPORTED_MODULE_6__["SuggestionActionType"].forceResolve,
                searchForMoreButtonSelected: this.state.selectedActionType === _Suggestions_types__WEBPACK_IMPORTED_MODULE_6__["SuggestionActionType"].searchMore,
            })
            : {
                root: Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["css"])('ms-Suggestions', className, legacyStyles.root),
                title: Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["css"])('ms-Suggestions-title', legacyStyles.suggestionsTitle),
                searchForMoreButton: Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["css"])('ms-SearchMore-button', legacyStyles.actionButton, (_a = {},
                    _a['is-selected ' + legacyStyles.buttonSelected] = this.state.selectedActionType === _Suggestions_types__WEBPACK_IMPORTED_MODULE_6__["SuggestionActionType"].searchMore,
                    _a)),
                forceResolveButton: Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["css"])('ms-forceResolve-button', legacyStyles.actionButton, (_b = {},
                    _b['is-selected ' + legacyStyles.buttonSelected] = this.state.selectedActionType === _Suggestions_types__WEBPACK_IMPORTED_MODULE_6__["SuggestionActionType"].forceResolve,
                    _b)),
                suggestionsAvailable: Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["css"])('ms-Suggestions-suggestionsAvailable', legacyStyles.suggestionsAvailable),
                suggestionsContainer: Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["css"])('ms-Suggestions-container', legacyStyles.suggestionsContainer, suggestionsClassName),
                noSuggestions: Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["css"])('ms-Suggestions-none', legacyStyles.suggestionsNone),
            };
        var spinnerStyles = this._classNames.subComponentStyles
            ? this._classNames.subComponentStyles.spinner
            : undefined;
        // TODO: cleanup after refactor of pickers to composition pattern and remove SASS support.
        var spinnerClassNameOrStyles = styles
            ? { styles: spinnerStyles }
            : { className: Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["css"])('ms-Suggestions-spinner', legacyStyles.suggestionsSpinner) };
        var noResults = function () {
            return noResultsFoundText ? react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: _this._classNames.noSuggestions }, noResultsFoundText) : null;
        };
        // MostRecently Used text should supercede the header text if it's there and available.
        var headerText = suggestionsHeaderText;
        if (isMostRecentlyUsedVisible && mostRecentlyUsedHeaderText) {
            headerText = mostRecentlyUsedHeaderText;
        }
        var footerTitle = undefined;
        if (isResultsFooterVisible) {
            footerTitle = suggestions.length >= resultsMaximumNumber ? resultsFooterFull : resultsFooter;
        }
        var hasNoSuggestions = (!suggestions || !suggestions.length) && !isLoading;
        var divProps = hasNoSuggestions || isLoading ? { role: 'dialog', id: suggestionsListId } : {};
        var forceResolveId = this.state.selectedActionType === _Suggestions_types__WEBPACK_IMPORTED_MODULE_6__["SuggestionActionType"].forceResolve ? 'sug-selectedAction' : undefined;
        var searchForMoreId = this.state.selectedActionType === _Suggestions_types__WEBPACK_IMPORTED_MODULE_6__["SuggestionActionType"].searchMore ? 'sug-selectedAction' : undefined;
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ className: this._classNames.root }, divProps),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Announced__WEBPACK_IMPORTED_MODULE_5__["Announced"], { message: this._getAlertText(), "aria-live": "polite" }),
            headerText ? react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: this._classNames.title }, headerText) : null,
            forceResolveText && this._shouldShowForceResolve() && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Button__WEBPACK_IMPORTED_MODULE_3__["CommandButton"], { componentRef: this._forceResolveButton, className: this._classNames.forceResolveButton, id: forceResolveId, onClick: this._forceResolve, "data-automationid": 'sug-forceResolve' }, forceResolveText)),
            isLoading && react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Spinner__WEBPACK_IMPORTED_MODULE_4__["Spinner"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, spinnerClassNameOrStyles, { label: loadingText })),
            hasNoSuggestions
                ? onRenderNoResultFound
                    ? onRenderNoResultFound(undefined, noResults)
                    : noResults()
                : this._renderSuggestions(),
            searchForMoreText && moreSuggestionsAvailable && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Button__WEBPACK_IMPORTED_MODULE_3__["CommandButton"], { componentRef: this._searchForMoreButton, className: this._classNames.searchForMoreButton, iconProps: { iconName: 'Search' }, id: searchForMoreId, onClick: this._getMoreResults, "data-automationid": 'sug-searchForMore' }, searchForMoreText)),
            isSearching ? react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Spinner__WEBPACK_IMPORTED_MODULE_4__["Spinner"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, spinnerClassNameOrStyles, { label: searchingText })) : null,
            footerTitle && !moreSuggestionsAvailable && !isMostRecentlyUsedVisible && !isSearching ? (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: this._classNames.title }, footerTitle(this.props))) : null));
    };
    Suggestions.prototype.hasSuggestedAction = function () {
        return !!this._searchForMoreButton.current || !!this._forceResolveButton.current;
    };
    Suggestions.prototype.hasSuggestedActionSelected = function () {
        return this.state.selectedActionType !== _Suggestions_types__WEBPACK_IMPORTED_MODULE_6__["SuggestionActionType"].none;
    };
    Suggestions.prototype.executeSelectedAction = function () {
        switch (this.state.selectedActionType) {
            case _Suggestions_types__WEBPACK_IMPORTED_MODULE_6__["SuggestionActionType"].forceResolve:
                this._forceResolve();
                break;
            case _Suggestions_types__WEBPACK_IMPORTED_MODULE_6__["SuggestionActionType"].searchMore:
                this._getMoreResults();
                break;
        }
    };
    Suggestions.prototype.focusAboveSuggestions = function () {
        if (this._forceResolveButton.current) {
            this.setState({ selectedActionType: _Suggestions_types__WEBPACK_IMPORTED_MODULE_6__["SuggestionActionType"].forceResolve });
        }
        else if (this._searchForMoreButton.current) {
            this.setState({ selectedActionType: _Suggestions_types__WEBPACK_IMPORTED_MODULE_6__["SuggestionActionType"].searchMore });
        }
    };
    Suggestions.prototype.focusBelowSuggestions = function () {
        if (this._searchForMoreButton.current) {
            this.setState({ selectedActionType: _Suggestions_types__WEBPACK_IMPORTED_MODULE_6__["SuggestionActionType"].searchMore });
        }
        else if (this._forceResolveButton.current) {
            this.setState({ selectedActionType: _Suggestions_types__WEBPACK_IMPORTED_MODULE_6__["SuggestionActionType"].forceResolve });
        }
    };
    Suggestions.prototype.focusSearchForMoreButton = function () {
        if (this._searchForMoreButton.current) {
            this._searchForMoreButton.current.focus();
        }
    };
    // TODO get the element to scroll into view properly regardless of direction.
    Suggestions.prototype.scrollSelected = function () {
        if (this._selectedElement.current && this._selectedElement.current.scrollIntoView !== undefined) {
            this._selectedElement.current.scrollIntoView(false);
        }
    };
    Suggestions.prototype._renderSuggestions = function () {
        var _this = this;
        var _a = this.props, onRenderSuggestion = _a.onRenderSuggestion, removeSuggestionAriaLabel = _a.removeSuggestionAriaLabel, suggestionsItemClassName = _a.suggestionsItemClassName, resultsMaximumNumber = _a.resultsMaximumNumber, showRemoveButtons = _a.showRemoveButtons, suggestionsContainerAriaLabel = _a.suggestionsContainerAriaLabel, suggestionsListId = _a.suggestionsListId;
        var suggestions = this.props.suggestions;
        var StyledTypedSuggestionsItem = StyledSuggestionsItem;
        var selectedIndex = -1;
        suggestions.some(function (element, index) {
            if (element.selected) {
                selectedIndex = index;
                return true;
            }
            return false;
        });
        if (resultsMaximumNumber) {
            suggestions =
                selectedIndex >= resultsMaximumNumber
                    ? suggestions.slice(selectedIndex - resultsMaximumNumber + 1, selectedIndex + 1)
                    : suggestions.slice(0, resultsMaximumNumber);
        }
        if (suggestions.length === 0) {
            return null;
        }
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: this._classNames.suggestionsContainer, id: suggestionsListId, role: "listbox", "aria-label": suggestionsContainerAriaLabel }, suggestions.map(function (suggestion, index) { return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { ref: suggestion.selected ? _this._selectedElement : undefined, key: suggestion.item.key ? suggestion.item.key : index },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](StyledTypedSuggestionsItem, { suggestionModel: suggestion, RenderSuggestion: onRenderSuggestion, onClick: _this._onClickTypedSuggestionsItem(suggestion.item, index), className: suggestionsItemClassName, showRemoveButton: showRemoveButtons, removeButtonAriaLabel: removeSuggestionAriaLabel, onRemoveItem: _this._onRemoveTypedSuggestionsItem(suggestion.item, index), id: 'sug-' + index }))); })));
    };
    return Suggestions;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));

//# sourceMappingURL=Suggestions.js.map

/***/ }),

/***/ "c+UQ":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/pickers/TagPicker/TagPicker.js ***!
  \*********************************************************************************************************************************************************************************************************/
/*! exports provided: TagPickerBase, TagPicker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagPickerBase", function() { return TagPickerBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagPicker", function() { return TagPicker; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Utilities */ "mkpW");
/* harmony import */ var _BasePicker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../BasePicker */ "13ID");
/* harmony import */ var _BasePicker_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../BasePicker.styles */ "AYBj");
/* harmony import */ var _TagItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./TagItem */ "PB+e");
/* harmony import */ var _TagItemSuggestion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./TagItemSuggestion */ "AFMd");







/**
 * {@docCategory TagPicker}
 */
var TagPickerBase = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(TagPickerBase, _super);
    function TagPickerBase(props) {
        var _this = _super.call(this, props) || this;
        Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["initializeComponentRef"])(_this);
        return _this;
    }
    TagPickerBase.defaultProps = {
        onRenderItem: function (props) { return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_TagItem__WEBPACK_IMPORTED_MODULE_5__["TagItem"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, props), props.item.name); },
        onRenderSuggestionsItem: function (props) { return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_TagItemSuggestion__WEBPACK_IMPORTED_MODULE_6__["TagItemSuggestion"], null, props.name); },
    };
    return TagPickerBase;
}(_BasePicker__WEBPACK_IMPORTED_MODULE_3__["BasePicker"]));

var TagPicker = Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["styled"])(TagPickerBase, _BasePicker_styles__WEBPACK_IMPORTED_MODULE_4__["getStyles"], undefined, {
    scope: 'TagPicker',
});
//# sourceMappingURL=TagPicker.js.map

/***/ }),

/***/ "h3HF":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/pickers/PeoplePicker/PeoplePicker.js ***!
  \***************************************************************************************************************************************************************************************************************/
/*! exports provided: BasePeoplePicker, MemberListPeoplePicker, NormalPeoplePickerBase, CompactPeoplePickerBase, ListPeoplePickerBase, createGenericItem, NormalPeoplePicker, CompactPeoplePicker, ListPeoplePicker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasePeoplePicker", function() { return BasePeoplePicker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemberListPeoplePicker", function() { return MemberListPeoplePicker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NormalPeoplePickerBase", function() { return NormalPeoplePickerBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompactPeoplePickerBase", function() { return CompactPeoplePickerBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListPeoplePickerBase", function() { return ListPeoplePickerBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createGenericItem", function() { return createGenericItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NormalPeoplePicker", function() { return NormalPeoplePicker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompactPeoplePicker", function() { return CompactPeoplePicker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListPeoplePicker", function() { return ListPeoplePicker; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Utilities */ "mkpW");
/* harmony import */ var _BasePicker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../BasePicker */ "13ID");
/* harmony import */ var _BasePicker_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../BasePicker.types */ "EyaF");
/* harmony import */ var _PeoplePickerItems_PeoplePickerItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./PeoplePickerItems/PeoplePickerItem */ "5Ne8");
/* harmony import */ var _PeoplePickerItems_PeoplePickerItemSuggestion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./PeoplePickerItems/PeoplePickerItemSuggestion */ "QYKG");
/* harmony import */ var _BasePicker_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../BasePicker.styles */ "AYBj");








/**
 * {@docCategory PeoplePicker}
 */
var BasePeoplePicker = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(BasePeoplePicker, _super);
    function BasePeoplePicker() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return BasePeoplePicker;
}(_BasePicker__WEBPACK_IMPORTED_MODULE_3__["BasePicker"]));

/**
 * {@docCategory PeoplePicker}
 */
var MemberListPeoplePicker = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(MemberListPeoplePicker, _super);
    function MemberListPeoplePicker() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return MemberListPeoplePicker;
}(_BasePicker__WEBPACK_IMPORTED_MODULE_3__["BasePickerListBelow"]));

/**
 * Standard People Picker.
 * {@docCategory PeoplePicker}
 */
var NormalPeoplePickerBase = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(NormalPeoplePickerBase, _super);
    function NormalPeoplePickerBase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /** Default props for NormalPeoplePicker. */
    NormalPeoplePickerBase.defaultProps = {
        onRenderItem: function (props) { return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_PeoplePickerItems_PeoplePickerItem__WEBPACK_IMPORTED_MODULE_5__["PeoplePickerItem"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, props)); },
        onRenderSuggestionsItem: function (personaProps, suggestionsProps) { return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_PeoplePickerItems_PeoplePickerItemSuggestion__WEBPACK_IMPORTED_MODULE_6__["PeoplePickerItemSuggestion"], { personaProps: personaProps, suggestionsProps: suggestionsProps })); },
        createGenericItem: createGenericItem,
    };
    return NormalPeoplePickerBase;
}(BasePeoplePicker));

/**
 * Compact layout. It uses personas without secondary text when displaying search results.
 * {@docCategory PeoplePicker}
 */
var CompactPeoplePickerBase = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(CompactPeoplePickerBase, _super);
    function CompactPeoplePickerBase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /** Default props for CompactPeoplePicker. */
    CompactPeoplePickerBase.defaultProps = {
        onRenderItem: function (props) { return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_PeoplePickerItems_PeoplePickerItem__WEBPACK_IMPORTED_MODULE_5__["PeoplePickerItem"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, props)); },
        onRenderSuggestionsItem: function (personaProps, suggestionsProps) { return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_PeoplePickerItems_PeoplePickerItemSuggestion__WEBPACK_IMPORTED_MODULE_6__["PeoplePickerItemSuggestion"], { personaProps: personaProps, suggestionsProps: suggestionsProps, compact: true })); },
        createGenericItem: createGenericItem,
    };
    return CompactPeoplePickerBase;
}(BasePeoplePicker));

/**
 * MemberList layout. The selected people show up below the search box.
 * {@docCategory PeoplePicker}
 */
var ListPeoplePickerBase = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ListPeoplePickerBase, _super);
    function ListPeoplePickerBase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /** Default props for ListPeoplePicker. */
    ListPeoplePickerBase.defaultProps = {
        onRenderItem: function (props) { return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_PeoplePickerItems_PeoplePickerItem__WEBPACK_IMPORTED_MODULE_5__["PeoplePickerItem"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, props)); },
        onRenderSuggestionsItem: function (personaProps, suggestionsProps) { return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_PeoplePickerItems_PeoplePickerItemSuggestion__WEBPACK_IMPORTED_MODULE_6__["PeoplePickerItemSuggestion"], { personaProps: personaProps, suggestionsProps: suggestionsProps })); },
        createGenericItem: createGenericItem,
    };
    return ListPeoplePickerBase;
}(MemberListPeoplePicker));

/**
 * {@docCategory PeoplePicker}
 */
function createGenericItem(name, currentValidationState) {
    var personaToConvert = {
        key: name,
        primaryText: name,
        imageInitials: '!',
        ValidationState: currentValidationState,
    };
    if (currentValidationState !== _BasePicker_types__WEBPACK_IMPORTED_MODULE_4__["ValidationState"].warning) {
        personaToConvert.imageInitials = Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["getInitials"])(name, Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["getRTL"])());
    }
    return personaToConvert;
}
var NormalPeoplePicker = Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["styled"])(NormalPeoplePickerBase, _BasePicker_styles__WEBPACK_IMPORTED_MODULE_7__["getStyles"], undefined, {
    scope: 'NormalPeoplePicker',
});
var CompactPeoplePicker = Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["styled"])(CompactPeoplePickerBase, _BasePicker_styles__WEBPACK_IMPORTED_MODULE_7__["getStyles"], undefined, {
    scope: 'CompactPeoplePicker',
});
var ListPeoplePicker = Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["styled"])(ListPeoplePickerBase, _BasePicker_styles__WEBPACK_IMPORTED_MODULE_7__["getStyles"], undefined, {
    scope: 'ListPeoplePickerBase',
});
//# sourceMappingURL=PeoplePicker.js.map

/***/ }),

/***/ "i7Et":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/pickers/index.js ***!
  \*******************************************************************************************************************************************************************************************/
/*! exports provided: Suggestions, SuggestionActionType, SuggestionsItem, SuggestionsController, Autofill, BaseAutoFill, BasePicker, BasePickerListBelow, ValidationState, BasePeoplePicker, MemberListPeoplePicker, NormalPeoplePickerBase, CompactPeoplePickerBase, ListPeoplePickerBase, createGenericItem, NormalPeoplePicker, CompactPeoplePicker, ListPeoplePicker, PeoplePickerItemBase, PeoplePickerItem, PeoplePickerItemSuggestionBase, PeoplePickerItemSuggestion, TagPickerBase, TagPicker, TagItemBase, TagItem, TagItemSuggestionBase, TagItemSuggestion */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Suggestions_Suggestions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Suggestions/Suggestions */ "bxdr");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Suggestions", function() { return _Suggestions_Suggestions__WEBPACK_IMPORTED_MODULE_0__["Suggestions"]; });

/* harmony import */ var _Suggestions_Suggestions_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Suggestions/Suggestions.types */ "9Ygx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SuggestionActionType", function() { return _Suggestions_Suggestions_types__WEBPACK_IMPORTED_MODULE_1__["SuggestionActionType"]; });

/* harmony import */ var _Suggestions_SuggestionsItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Suggestions/SuggestionsItem */ "NLhK");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SuggestionsItem", function() { return _Suggestions_SuggestionsItem__WEBPACK_IMPORTED_MODULE_2__["SuggestionsItem"]; });

/* harmony import */ var _Suggestions_SuggestionsController__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Suggestions/SuggestionsController */ "vyKu");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SuggestionsController", function() { return _Suggestions_SuggestionsController__WEBPACK_IMPORTED_MODULE_3__["SuggestionsController"]; });

/* harmony import */ var _AutoFill_BaseAutoFill__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./AutoFill/BaseAutoFill */ "LmXi");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Autofill", function() { return _AutoFill_BaseAutoFill__WEBPACK_IMPORTED_MODULE_4__["Autofill"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaseAutoFill", function() { return _AutoFill_BaseAutoFill__WEBPACK_IMPORTED_MODULE_4__["BaseAutoFill"]; });

/* harmony import */ var _BasePicker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./BasePicker */ "13ID");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BasePicker", function() { return _BasePicker__WEBPACK_IMPORTED_MODULE_5__["BasePicker"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BasePickerListBelow", function() { return _BasePicker__WEBPACK_IMPORTED_MODULE_5__["BasePickerListBelow"]; });

/* harmony import */ var _BasePicker_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./BasePicker.types */ "EyaF");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ValidationState", function() { return _BasePicker_types__WEBPACK_IMPORTED_MODULE_6__["ValidationState"]; });

/* harmony import */ var _PeoplePicker_PeoplePicker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./PeoplePicker/PeoplePicker */ "h3HF");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BasePeoplePicker", function() { return _PeoplePicker_PeoplePicker__WEBPACK_IMPORTED_MODULE_7__["BasePeoplePicker"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MemberListPeoplePicker", function() { return _PeoplePicker_PeoplePicker__WEBPACK_IMPORTED_MODULE_7__["MemberListPeoplePicker"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NormalPeoplePickerBase", function() { return _PeoplePicker_PeoplePicker__WEBPACK_IMPORTED_MODULE_7__["NormalPeoplePickerBase"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CompactPeoplePickerBase", function() { return _PeoplePicker_PeoplePicker__WEBPACK_IMPORTED_MODULE_7__["CompactPeoplePickerBase"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ListPeoplePickerBase", function() { return _PeoplePicker_PeoplePicker__WEBPACK_IMPORTED_MODULE_7__["ListPeoplePickerBase"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createGenericItem", function() { return _PeoplePicker_PeoplePicker__WEBPACK_IMPORTED_MODULE_7__["createGenericItem"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NormalPeoplePicker", function() { return _PeoplePicker_PeoplePicker__WEBPACK_IMPORTED_MODULE_7__["NormalPeoplePicker"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CompactPeoplePicker", function() { return _PeoplePicker_PeoplePicker__WEBPACK_IMPORTED_MODULE_7__["CompactPeoplePicker"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ListPeoplePicker", function() { return _PeoplePicker_PeoplePicker__WEBPACK_IMPORTED_MODULE_7__["ListPeoplePicker"]; });

/* harmony import */ var _PeoplePicker_PeoplePickerItems_PeoplePickerItem__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./PeoplePicker/PeoplePickerItems/PeoplePickerItem */ "5Ne8");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PeoplePickerItemBase", function() { return _PeoplePicker_PeoplePickerItems_PeoplePickerItem__WEBPACK_IMPORTED_MODULE_8__["PeoplePickerItemBase"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PeoplePickerItem", function() { return _PeoplePicker_PeoplePickerItems_PeoplePickerItem__WEBPACK_IMPORTED_MODULE_8__["PeoplePickerItem"]; });

/* harmony import */ var _PeoplePicker_PeoplePickerItems_PeoplePickerItemSuggestion__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./PeoplePicker/PeoplePickerItems/PeoplePickerItemSuggestion */ "QYKG");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PeoplePickerItemSuggestionBase", function() { return _PeoplePicker_PeoplePickerItems_PeoplePickerItemSuggestion__WEBPACK_IMPORTED_MODULE_9__["PeoplePickerItemSuggestionBase"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PeoplePickerItemSuggestion", function() { return _PeoplePicker_PeoplePickerItems_PeoplePickerItemSuggestion__WEBPACK_IMPORTED_MODULE_9__["PeoplePickerItemSuggestion"]; });

/* harmony import */ var _TagPicker_TagPicker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./TagPicker/TagPicker */ "c+UQ");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TagPickerBase", function() { return _TagPicker_TagPicker__WEBPACK_IMPORTED_MODULE_10__["TagPickerBase"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TagPicker", function() { return _TagPicker_TagPicker__WEBPACK_IMPORTED_MODULE_10__["TagPicker"]; });

/* harmony import */ var _TagPicker_TagItem__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./TagPicker/TagItem */ "PB+e");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TagItemBase", function() { return _TagPicker_TagItem__WEBPACK_IMPORTED_MODULE_11__["TagItemBase"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TagItem", function() { return _TagPicker_TagItem__WEBPACK_IMPORTED_MODULE_11__["TagItem"]; });

/* harmony import */ var _TagPicker_TagItemSuggestion__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./TagPicker/TagItemSuggestion */ "AFMd");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TagItemSuggestionBase", function() { return _TagPicker_TagItemSuggestion__WEBPACK_IMPORTED_MODULE_12__["TagItemSuggestionBase"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TagItemSuggestion", function() { return _TagPicker_TagItemSuggestion__WEBPACK_IMPORTED_MODULE_12__["TagItemSuggestion"]; });














//# sourceMappingURL=index.js.map

/***/ }),

/***/ "kC/g":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/Announced/index.js ***!
  \*********************************************************************************************************************************************************************************************/
/*! exports provided: Announced, AnnouncedBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Announced__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Announced */ "DT4S");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Announced", function() { return _Announced__WEBPACK_IMPORTED_MODULE_0__["Announced"]; });

/* harmony import */ var _Announced_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Announced.base */ "nZu8");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AnnouncedBase", function() { return _Announced_base__WEBPACK_IMPORTED_MODULE_1__["AnnouncedBase"]; });



//# sourceMappingURL=index.js.map

/***/ }),

/***/ "kIbP":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/pickers/BasePicker.scss.js ***!
  \*****************************************************************************************************************************************************************************************************/
/*! exports provided: pickerText, inputFocused, pickerInput, pickerItems, screenReaderOnly */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pickerText", function() { return pickerText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inputFocused", function() { return inputFocused; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pickerInput", function() { return pickerInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pickerItems", function() { return pickerItems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "screenReaderOnly", function() { return screenReaderOnly; });
/* harmony import */ var _microsoft_load_themed_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/load-themed-styles */ "jOlS");
/* harmony import */ var _microsoft_load_themed_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_load_themed_styles__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

Object(_microsoft_load_themed_styles__WEBPACK_IMPORTED_MODULE_0__["loadStyles"])([{ "rawString": ".pickerText_15372e87{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-sizing:border-box;box-sizing:border-box;border:1px solid " }, { "theme": "neutralTertiary", "defaultValue": "#a19f9d" }, { "rawString": ";min-width:180px;min-height:30px}.pickerText_15372e87:hover{border-color:" }, { "theme": "inputBorderHovered", "defaultValue": "#323130" }, { "rawString": "}.pickerText_15372e87.inputFocused_15372e87{position:relative;border-color:" }, { "theme": "inputFocusBorderAlt", "defaultValue": "#0078d4" }, { "rawString": "}.pickerText_15372e87.inputFocused_15372e87:after{pointer-events:none;content:'';position:absolute;left:-1px;top:-1px;bottom:-1px;right:-1px;border:2px solid " }, { "theme": "inputFocusBorderAlt", "defaultValue": "#0078d4" }, { "rawString": "}.pickerInput_15372e87{height:34px;border:none;-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;outline:0;padding:0 6px 0;-ms-flex-item-align:end;align-self:flex-end}.pickerItems_15372e87{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;max-width:100%}.screenReaderOnly_15372e87{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);border:0}" }]);
var pickerText = "pickerText_15372e87";
var inputFocused = "inputFocused_15372e87";
var pickerInput = "pickerInput_15372e87";
var pickerItems = "pickerItems_15372e87";
var screenReaderOnly = "screenReaderOnly_15372e87";
//# sourceMappingURL=BasePicker.scss.js.map

/***/ }),

/***/ "kPZl":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/shared-react-people-picker@1.1.20_e509c819ab980023b76e5746ec0fc9e2/node_modules/@ms/shared-react-people-picker/lib/PickerItem.scss.js ***!
  \*************************************************************************************************************************************************************************************************/
/*! exports provided: itemContent, peoplePickerPill, peoplePickerClose */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "itemContent", function() { return itemContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "peoplePickerPill", function() { return peoplePickerPill; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "peoplePickerClose", function() { return peoplePickerClose; });
/* harmony import */ var _microsoft_load_themed_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/load-themed-styles */ "jOlS");
/* harmony import */ var _microsoft_load_themed_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_load_themed_styles__WEBPACK_IMPORTED_MODULE_0__);
/* tslint:disable */

Object(_microsoft_load_themed_styles__WEBPACK_IMPORTED_MODULE_0__["loadStyles"])([{ "rawString": ".ms-PickerPersona-container{position:relative;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;vertical-align:top;background:" }, { "theme": "neutralLighter", "defaultValue": "#f3f2f1" }, { "rawString": ";margin:1px;vertical-align:top;white-space:nowrap;cursor:default;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.ms-PickerPersona-container::-moz-focus-inner{border:0}.ms-PickerPersona-container{outline:transparent}.ms-PickerPersona-container{position:relative}.ms-Fabric--isFocusVisible .ms-PickerPersona-container:focus:after{content:'';position:absolute;top:0;right:0;bottom:0;left:0;pointer-events:none;border:1px solid " }, { "theme": "focusBorder", "defaultValue": "#605e5c" }, { "rawString": "}.ms-PickerPersona-container:hover{background:" }, { "theme": "neutralLight", "defaultValue": "#edebe9" }, { "rawString": "}.ms-PickerPersona-container.is-selected{background:" }, { "theme": "neutralQuaternary", "defaultValue": "#d2d0ce" }, { "rawString": "}.ms-PickerPersona-container.is-selected:hover{background:" }, { "theme": "neutralQuaternaryAlt", "defaultValue": "#e1dfdd" }, { "rawString": "}.ms-PickerPersona-container.is-listbelow{width:100%}.ms-PickerItem-sideContent{display:inline-block}.ms-PickerPersona-content{-webkit-box-flex:1;-ms-flex:1;flex:1;vertical-align:middle;min-width:100px}.ms-PeoplePicker-personaContent{min-width:100px;padding:7px 12px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.od-PeoplePicker-linkedInLogo{color:#0077b5}.itemContent_54dd75b1{-webkit-box-flex:0;-ms-flex:0 1 auto;flex:0 1 auto;min-width:0;max-width:100%;overflow:hidden}.peoplePickerPill_54dd75b1{background-color:" }, { "theme": "neutralLight", "defaultValue": "#edebe9" }, { "rawString": ";height:24px;border-radius:12px;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin:4px}.peoplePickerClose_54dd75b1{border-radius:12px;height:24px;width:24px;color:" }, { "theme": "neutralSecondary", "defaultValue": "#605e5c" }, { "rawString": "}.peoplePickerClose_54dd75b1:hover{background:" }, { "theme": "neutralQuaternaryAlt", "defaultValue": "#e1dfdd" }, { "rawString": ";border-radius:12px}\n" }]);
var itemContent = "itemContent_54dd75b1";
var peoplePickerPill = "peoplePickerPill_54dd75b1";
var peoplePickerClose = "peoplePickerClose_54dd75b1";
//# sourceMappingURL=PickerItem.scss.js.map

/***/ }),

/***/ "kjzS":
/*!********************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/Autofill/index.js ***!
  \********************************************************************************************************************************************************************************************/
/*! exports provided: Autofill, BaseAutoFill */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Autofill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Autofill */ "+th6");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Autofill", function() { return _Autofill__WEBPACK_IMPORTED_MODULE_0__["Autofill"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaseAutoFill", function() { return _Autofill__WEBPACK_IMPORTED_MODULE_0__["BaseAutoFill"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "mLzM":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/Announced/Announced.styles.js ***!
  \********************************************************************************************************************************************************************************************************/
/*! exports provided: getStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStyles", function() { return getStyles; });
/* harmony import */ var _Styling__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Styling */ "PL71");

var getStyles = function (props) {
    return {
        root: props.className,
        screenReaderText: _Styling__WEBPACK_IMPORTED_MODULE_0__["hiddenContentStyle"],
    };
};
//# sourceMappingURL=Announced.styles.js.map

/***/ }),

/***/ "nGEB":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/pickers/PeoplePicker/PeoplePickerItems/PeoplePickerItem.styles.js ***!
  \********************************************************************************************************************************************************************************************************************************************/
/*! exports provided: getStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStyles", function() { return getStyles; });
/* harmony import */ var _Styling__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../Styling */ "PL71");
/* harmony import */ var _Button_BaseButton_classNames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../Button/BaseButton.classNames */ "KCw9");


var GlobalClassNames = {
    root: 'ms-PickerPersona-container',
    itemContent: 'ms-PickerItem-content',
    removeButton: 'ms-PickerItem-removeButton',
    isSelected: 'is-selected',
    isInvalid: 'is-invalid',
};
var REMOVE_BUTTON_SIZE = 24;
function getStyles(props) {
    var _a, _b, _c, _d, _e, _f, _g;
    var className = props.className, theme = props.theme, selected = props.selected, invalid = props.invalid, disabled = props.disabled;
    var palette = theme.palette, semanticColors = theme.semanticColors, fonts = theme.fonts;
    var classNames = Object(_Styling__WEBPACK_IMPORTED_MODULE_0__["getGlobalClassNames"])(GlobalClassNames, theme);
    var personaPrimaryTextStyles = [
        selected &&
            !invalid &&
            !disabled && {
            color: palette.white,
            selectors: (_a = {
                    ':hover': {
                        color: palette.white,
                    }
                },
                _a[_Styling__WEBPACK_IMPORTED_MODULE_0__["HighContrastSelector"]] = {
                    color: 'HighlightText',
                },
                _a),
        },
        ((invalid && !selected) || (invalid && selected && disabled)) && {
            color: palette.redDark,
            borderBottom: "2px dotted " + palette.redDark,
            selectors: (_b = {},
                _b["." + classNames.root + ":hover &"] = {
                    // override Persona root:hover selector
                    color: palette.redDark,
                },
                _b),
        },
        invalid &&
            selected &&
            !disabled && {
            color: palette.white,
            borderBottom: "2px dotted " + palette.white,
        },
        disabled && {
            selectors: (_c = {},
                _c[_Styling__WEBPACK_IMPORTED_MODULE_0__["HighContrastSelector"]] = {
                    color: 'GrayText',
                },
                _c),
        },
    ];
    var personaCoinInitialsStyles = [
        invalid && {
            fontSize: fonts.xLarge.fontSize,
        },
    ];
    return {
        root: [
            classNames.root,
            Object(_Styling__WEBPACK_IMPORTED_MODULE_0__["getFocusStyle"])(theme, { inset: -2 }),
            {
                borderRadius: 15,
                display: 'inline-flex',
                alignItems: 'center',
                background: palette.neutralLighter,
                margin: '1px 2px',
                cursor: 'default',
                userSelect: 'none',
                maxWidth: 300,
                verticalAlign: 'middle',
                minWidth: 0,
                selectors: (_d = {
                        ':hover': {
                            background: !selected && !disabled ? palette.neutralLight : '',
                        }
                    },
                    _d[_Styling__WEBPACK_IMPORTED_MODULE_0__["HighContrastSelector"]] = [{ border: '1px solid WindowText' }, disabled && { borderColor: 'GrayText' }],
                    _d),
            },
            selected &&
                !disabled && [
                classNames.isSelected,
                {
                    background: palette.themePrimary,
                    selectors: (_e = {},
                        _e[_Styling__WEBPACK_IMPORTED_MODULE_0__["HighContrastSelector"]] = {
                            borderColor: 'HighLight',
                            background: 'Highlight',
                            MsHighContrastAdjust: 'none',
                        },
                        _e),
                },
            ],
            invalid && [classNames.isInvalid],
            invalid &&
                selected &&
                !disabled && {
                background: palette.redDark,
            },
            className,
        ],
        itemContent: [
            classNames.itemContent,
            {
                flex: '0 1 auto',
                minWidth: 0,
                // CSS below is needed for IE 11 to properly truncate long persona names in the picker
                // and to clip the presence indicator (in all browsers)
                maxWidth: '100%',
                overflow: 'hidden',
            },
        ],
        removeButton: [
            classNames.removeButton,
            {
                borderRadius: 15,
                color: palette.neutralPrimary,
                flex: '0 0 auto',
                width: REMOVE_BUTTON_SIZE,
                height: REMOVE_BUTTON_SIZE,
                selectors: {
                    ':hover': {
                        background: palette.neutralTertiaryAlt,
                        color: palette.neutralDark,
                    },
                },
            },
            selected && [
                {
                    color: palette.white,
                    selectors: (_f = {
                            ':hover': {
                                color: palette.white,
                                background: palette.themeDark,
                            },
                            ':active': {
                                color: palette.white,
                                background: palette.themeDarker,
                            }
                        },
                        _f[_Styling__WEBPACK_IMPORTED_MODULE_0__["HighContrastSelector"]] = {
                            color: 'HighlightText',
                        },
                        _f),
                },
                invalid && {
                    selectors: {
                        ':hover': {
                            background: palette.red,
                        },
                        ':active': {
                            background: palette.redDark,
                        },
                    },
                },
            ],
            disabled && {
                selectors: (_g = {},
                    _g["." + _Button_BaseButton_classNames__WEBPACK_IMPORTED_MODULE_1__["ButtonGlobalClassNames"].msButtonIcon] = {
                        color: semanticColors.buttonText,
                    },
                    _g),
            },
        ],
        subComponentStyles: {
            persona: {
                primaryText: personaPrimaryTextStyles,
            },
            personaCoin: {
                initials: personaCoinInitialsStyles,
            },
        },
    };
}
//# sourceMappingURL=PeoplePickerItem.styles.js.map

/***/ }),

/***/ "nZu8":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/Announced/Announced.base.js ***!
  \******************************************************************************************************************************************************************************************************/
/*! exports provided: AnnouncedBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnnouncedBase", function() { return AnnouncedBase; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Utilities */ "mkpW");



var getClassNames = Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["classNamesFunction"])();
/**
 * {@docCategory Announced}
 */
var AnnouncedBase = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(AnnouncedBase, _super);
    function AnnouncedBase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AnnouncedBase.prototype.render = function () {
        var _a = this.props, message = _a.message, styles = _a.styles, _b = _a.as, Root = _b === void 0 ? 'div' : _b, className = _a.className;
        var classNames = getClassNames(styles, { className: className });
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](Root, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ role: "status", className: classNames.root }, Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["getNativeProps"])(this.props, _Utilities__WEBPACK_IMPORTED_MODULE_2__["divProperties"], ['className'])),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Utilities__WEBPACK_IMPORTED_MODULE_2__["DelayedRender"], null,
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: classNames.screenReaderText }, message))));
    };
    AnnouncedBase.defaultProps = {
        'aria-live': 'polite',
    };
    return AnnouncedBase;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));

//# sourceMappingURL=Announced.base.js.map

/***/ }),

/***/ "p3UT":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/pickers/Suggestions/Suggestions.scss.js ***!
  \******************************************************************************************************************************************************************************************************************/
/*! exports provided: root, suggestionsItem, closeButton, suggestionsItemIsSuggested, itemButton, actionButton, buttonSelected, suggestionsTitle, suggestionsContainer, suggestionsNone, suggestionsSpinner, suggestionsAvailable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "root", function() { return root; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "suggestionsItem", function() { return suggestionsItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "closeButton", function() { return closeButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "suggestionsItemIsSuggested", function() { return suggestionsItemIsSuggested; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "itemButton", function() { return itemButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actionButton", function() { return actionButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buttonSelected", function() { return buttonSelected; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "suggestionsTitle", function() { return suggestionsTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "suggestionsContainer", function() { return suggestionsContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "suggestionsNone", function() { return suggestionsNone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "suggestionsSpinner", function() { return suggestionsSpinner; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "suggestionsAvailable", function() { return suggestionsAvailable; });
/* harmony import */ var _microsoft_load_themed_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/load-themed-styles */ "jOlS");
/* harmony import */ var _microsoft_load_themed_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_load_themed_styles__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

Object(_microsoft_load_themed_styles__WEBPACK_IMPORTED_MODULE_0__["loadStyles"])([{ "rawString": ".root_a2c34ca6{min-width:260px}.suggestionsItem_a2c34ca6{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;-webkit-box-sizing:border-box;box-sizing:border-box;width:100%;position:relative;overflow:hidden}.suggestionsItem_a2c34ca6:hover{background:" }, { "theme": "neutralLighter", "defaultValue": "#f3f2f1" }, { "rawString": "}.suggestionsItem_a2c34ca6:hover .closeButton_a2c34ca6{display:block}.suggestionsItem_a2c34ca6.suggestionsItemIsSuggested_a2c34ca6{background:" }, { "theme": "neutralLight", "defaultValue": "#edebe9" }, { "rawString": "}.suggestionsItem_a2c34ca6.suggestionsItemIsSuggested_a2c34ca6:hover{background:" }, { "theme": "neutralTertiaryAlt", "defaultValue": "#c8c6c4" }, { "rawString": "}@media screen and (-ms-high-contrast:active){.suggestionsItem_a2c34ca6.suggestionsItemIsSuggested_a2c34ca6:hover{background:Highlight;color:HighlightText}}@media screen and (-ms-high-contrast:active){.suggestionsItem_a2c34ca6.suggestionsItemIsSuggested_a2c34ca6{background:Highlight;color:HighlightText;-ms-high-contrast-adjust:none}}.suggestionsItem_a2c34ca6.suggestionsItemIsSuggested_a2c34ca6 .closeButton_a2c34ca6:hover{background:" }, { "theme": "neutralTertiary", "defaultValue": "#a19f9d" }, { "rawString": ";color:" }, { "theme": "neutralPrimary", "defaultValue": "#323130" }, { "rawString": "}@media screen and (-ms-high-contrast:active){.suggestionsItem_a2c34ca6.suggestionsItemIsSuggested_a2c34ca6 .itemButton_a2c34ca6{color:HighlightText}}.suggestionsItem_a2c34ca6 .closeButton_a2c34ca6{display:none;color:" }, { "theme": "neutralSecondary", "defaultValue": "#605e5c" }, { "rawString": "}.suggestionsItem_a2c34ca6 .closeButton_a2c34ca6:hover{background:" }, { "theme": "neutralLight", "defaultValue": "#edebe9" }, { "rawString": "}.actionButton_a2c34ca6{background-color:transparent;border:0;cursor:pointer;margin:0;position:relative;border-top:1px solid " }, { "theme": "neutralLight", "defaultValue": "#edebe9" }, { "rawString": ";height:40px;width:100%;font-size:12px}[dir=ltr] .actionButton_a2c34ca6{padding-left:8px}[dir=rtl] .actionButton_a2c34ca6{padding-right:8px}html[dir=ltr] .actionButton_a2c34ca6{text-align:left}html[dir=rtl] .actionButton_a2c34ca6{text-align:right}.actionButton_a2c34ca6:hover{background-color:" }, { "theme": "neutralLight", "defaultValue": "#edebe9" }, { "rawString": ";cursor:pointer}.actionButton_a2c34ca6:active,.actionButton_a2c34ca6:focus{background-color:" }, { "theme": "themeLight", "defaultValue": "#c7e0f4" }, { "rawString": "}.actionButton_a2c34ca6 .ms-Button-icon{font-size:16px;width:25px}.actionButton_a2c34ca6 .ms-Button-label{margin:0 4px 0 9px}html[dir=rtl] .actionButton_a2c34ca6 .ms-Button-label{margin:0 9px 0 4px}.buttonSelected_a2c34ca6{background-color:" }, { "theme": "themeLight", "defaultValue": "#c7e0f4" }, { "rawString": "}.suggestionsTitle_a2c34ca6{padding:0 12px;color:" }, { "theme": "themePrimary", "defaultValue": "#0078d4" }, { "rawString": ";font-size:12px;line-height:40px;border-bottom:1px solid " }, { "theme": "neutralLight", "defaultValue": "#edebe9" }, { "rawString": "}.suggestionsContainer_a2c34ca6{overflow-y:auto;overflow-x:hidden;max-height:300px;border-bottom:1px solid " }, { "theme": "neutralLight", "defaultValue": "#edebe9" }, { "rawString": "}.suggestionsNone_a2c34ca6{text-align:center;color:#797775;font-size:12px;line-height:30px}.suggestionsSpinner_a2c34ca6{margin:5px 0;white-space:nowrap;line-height:20px;font-size:12px}html[dir=ltr] .suggestionsSpinner_a2c34ca6{padding-left:14px}html[dir=rtl] .suggestionsSpinner_a2c34ca6{padding-right:14px}html[dir=ltr] .suggestionsSpinner_a2c34ca6{text-align:left}html[dir=rtl] .suggestionsSpinner_a2c34ca6{text-align:right}.suggestionsSpinner_a2c34ca6 .ms-Spinner-circle{display:inline-block;vertical-align:middle}.suggestionsSpinner_a2c34ca6 .ms-Spinner-label{display:inline-block;margin:0 10px 0 16px;vertical-align:middle}html[dir=rtl] .suggestionsSpinner_a2c34ca6 .ms-Spinner-label{margin:0 16px 0 10px}.itemButton_a2c34ca6.itemButton_a2c34ca6{width:100%;padding:0;min-width:0;height:100%}@media screen and (-ms-high-contrast:active){.itemButton_a2c34ca6.itemButton_a2c34ca6{color:WindowText}}.itemButton_a2c34ca6.itemButton_a2c34ca6:hover{color:" }, { "theme": "neutralDark", "defaultValue": "#201f1e" }, { "rawString": "}.closeButton_a2c34ca6.closeButton_a2c34ca6{padding:0 4px;height:auto;width:32px}@media screen and (-ms-high-contrast:active){.closeButton_a2c34ca6.closeButton_a2c34ca6{color:WindowText}}.closeButton_a2c34ca6.closeButton_a2c34ca6:hover{background:" }, { "theme": "neutralTertiaryAlt", "defaultValue": "#c8c6c4" }, { "rawString": ";color:" }, { "theme": "neutralDark", "defaultValue": "#201f1e" }, { "rawString": "}.suggestionsAvailable_a2c34ca6{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);border:0}" }]);
var root = "root_a2c34ca6";
var suggestionsItem = "suggestionsItem_a2c34ca6";
var closeButton = "closeButton_a2c34ca6";
var suggestionsItemIsSuggested = "suggestionsItemIsSuggested_a2c34ca6";
var itemButton = "itemButton_a2c34ca6";
var actionButton = "actionButton_a2c34ca6";
var buttonSelected = "buttonSelected_a2c34ca6";
var suggestionsTitle = "suggestionsTitle_a2c34ca6";
var suggestionsContainer = "suggestionsContainer_a2c34ca6";
var suggestionsNone = "suggestionsNone_a2c34ca6";
var suggestionsSpinner = "suggestionsSpinner_a2c34ca6";
var suggestionsAvailable = "suggestionsAvailable_a2c34ca6";
//# sourceMappingURL=Suggestions.scss.js.map

/***/ }),

/***/ "qkZT":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/shared-react-people-picker@1.1.20_e509c819ab980023b76e5746ec0fc9e2/node_modules/@ms/shared-react-people-picker/lib/PeoplePicker.scss.js ***!
  \***************************************************************************************************************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _microsoft_load_themed_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/load-themed-styles */ "jOlS");
/* harmony import */ var _microsoft_load_themed_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_load_themed_styles__WEBPACK_IMPORTED_MODULE_0__);
/* tslint:disable */

Object(_microsoft_load_themed_styles__WEBPACK_IMPORTED_MODULE_0__["loadStyles"])([{ "rawString": ".ms-Suggestions{width:260px}\n" }]);
//# sourceMappingURL=PeoplePicker.scss.js.map

/***/ }),

/***/ "vyKu":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/pickers/Suggestions/SuggestionsController.js ***!
  \***********************************************************************************************************************************************************************************************************************/
/*! exports provided: SuggestionsController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuggestionsController", function() { return SuggestionsController; });
/**
 * {@docCategory Pickers}
 */
var SuggestionsController = /** @class */ (function () {
    function SuggestionsController() {
        var _this = this;
        this._isSuggestionModel = function (value) {
            return value.item !== undefined;
        };
        this._ensureSuggestionModel = function (suggestion) {
            if (_this._isSuggestionModel(suggestion)) {
                return suggestion;
            }
            else {
                return {
                    item: suggestion,
                    selected: false,
                    ariaLabel: suggestion.name || suggestion.primaryText,
                };
            }
        };
        this.suggestions = [];
        this.currentIndex = -1;
    }
    SuggestionsController.prototype.updateSuggestions = function (newSuggestions, selectedIndex) {
        if (newSuggestions && newSuggestions.length > 0) {
            this.suggestions = this.convertSuggestionsToSuggestionItems(newSuggestions);
            this.currentIndex = selectedIndex ? selectedIndex : 0;
            if (selectedIndex === -1) {
                this.currentSuggestion = undefined;
            }
            else if (selectedIndex !== undefined) {
                this.suggestions[selectedIndex].selected = true;
                this.currentSuggestion = this.suggestions[selectedIndex];
            }
        }
        else {
            this.suggestions = [];
            this.currentIndex = -1;
            this.currentSuggestion = undefined;
        }
    };
    /**
     * Increments the suggestion index and gets the next suggestion in the list.
     */
    SuggestionsController.prototype.nextSuggestion = function () {
        if (this.suggestions && this.suggestions.length) {
            if (this.currentIndex < this.suggestions.length - 1) {
                this.setSelectedSuggestion(this.currentIndex + 1);
                return true;
            }
            else if (this.currentIndex === this.suggestions.length - 1) {
                this.setSelectedSuggestion(0);
                return true;
            }
        }
        return false;
    };
    /**
     * Decrements the suggestion index and gets the previous suggestion in the list.
     */
    SuggestionsController.prototype.previousSuggestion = function () {
        if (this.suggestions && this.suggestions.length) {
            if (this.currentIndex > 0) {
                this.setSelectedSuggestion(this.currentIndex - 1);
                return true;
            }
            else if (this.currentIndex === 0) {
                this.setSelectedSuggestion(this.suggestions.length - 1);
                return true;
            }
        }
        return false;
    };
    SuggestionsController.prototype.getSuggestions = function () {
        return this.suggestions;
    };
    SuggestionsController.prototype.getCurrentItem = function () {
        return this.currentSuggestion;
    };
    SuggestionsController.prototype.getSuggestionAtIndex = function (index) {
        return this.suggestions[index];
    };
    SuggestionsController.prototype.hasSelectedSuggestion = function () {
        return this.currentSuggestion ? true : false;
    };
    SuggestionsController.prototype.removeSuggestion = function (index) {
        this.suggestions.splice(index, 1);
    };
    SuggestionsController.prototype.createGenericSuggestion = function (itemToConvert) {
        var itemToAdd = this.convertSuggestionsToSuggestionItems([itemToConvert])[0];
        this.currentSuggestion = itemToAdd;
    };
    SuggestionsController.prototype.convertSuggestionsToSuggestionItems = function (suggestions) {
        return Array.isArray(suggestions) ? suggestions.map(this._ensureSuggestionModel) : [];
    };
    SuggestionsController.prototype.deselectAllSuggestions = function () {
        if (this.currentIndex > -1) {
            this.suggestions[this.currentIndex].selected = false;
            this.currentIndex = -1;
        }
    };
    SuggestionsController.prototype.setSelectedSuggestion = function (index) {
        if (index > this.suggestions.length - 1 || index < 0) {
            this.currentIndex = 0;
            this.currentSuggestion.selected = false;
            this.currentSuggestion = this.suggestions[0];
            this.currentSuggestion.selected = true;
        }
        else {
            if (this.currentIndex > -1) {
                this.suggestions[this.currentIndex].selected = false;
            }
            this.suggestions[index].selected = true;
            this.currentIndex = index;
            this.currentSuggestion = this.suggestions[index];
        }
    };
    return SuggestionsController;
}());

//# sourceMappingURL=SuggestionsController.js.map

/***/ }),

/***/ "wTsj":
/*!****************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/Announced.js ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: Announced, AnnouncedBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Announced_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Announced/index */ "kC/g");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Announced", function() { return _components_Announced_index__WEBPACK_IMPORTED_MODULE_0__["Announced"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AnnouncedBase", function() { return _components_Announced_index__WEBPACK_IMPORTED_MODULE_0__["AnnouncedBase"]; });


//# sourceMappingURL=Announced.js.map

/***/ }),

/***/ "zGTv":
/*!******************************************************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/pickers/PeoplePicker/PeoplePickerItems/PeoplePickerItemSuggestion.styles.js ***!
  \******************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: getStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStyles", function() { return getStyles; });
/* harmony import */ var _Styling__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../Styling */ "PL71");
/* harmony import */ var _Suggestions_SuggestionsItem_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Suggestions/SuggestionsItem.styles */ "9kWw");


var GlobalClassNames = {
    root: 'ms-PeoplePicker-personaContent',
    personaWrapper: 'ms-PeoplePicker-Persona',
};
function getStyles(props) {
    var _a, _b, _c;
    var className = props.className, theme = props.theme;
    var classNames = Object(_Styling__WEBPACK_IMPORTED_MODULE_0__["getGlobalClassNames"])(GlobalClassNames, theme);
    var textSelectorsStyles = {
        selectors: (_a = {},
            _a["." + _Suggestions_SuggestionsItem_styles__WEBPACK_IMPORTED_MODULE_1__["SuggestionsItemGlobalClassNames"].isSuggested + " &"] = {
                selectors: (_b = {},
                    _b[_Styling__WEBPACK_IMPORTED_MODULE_0__["HighContrastSelector"]] = {
                        color: 'HighlightText',
                    },
                    _b),
            },
            _a["." + classNames.root + ":hover &"] = {
                selectors: (_c = {},
                    _c[_Styling__WEBPACK_IMPORTED_MODULE_0__["HighContrastSelector"]] = {
                        color: 'HighlightText',
                    },
                    _c),
            },
            _a),
    };
    return {
        root: [
            classNames.root,
            {
                width: '100%',
                padding: '4px 12px',
            },
            className,
        ],
        personaWrapper: [
            classNames.personaWrapper,
            {
                width: 180,
            },
        ],
        subComponentStyles: {
            persona: {
                primaryText: textSelectorsStyles,
                secondaryText: textSelectorsStyles,
            },
        },
    };
}
//# sourceMappingURL=PeoplePickerItemSuggestion.styles.js.map

/***/ }),

/***/ "zbfv":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/shared-react-people-picker@1.1.20_e509c819ab980023b76e5746ec0fc9e2/node_modules/@ms/shared-react-people-picker/lib/PeoplePickerDefaultItems.js ***!
  \**********************************************************************************************************************************************************************************************************/
/*! exports provided: SuggestionItemDefault, SelectedItemDefault, SelectedItemBelowDefault, SelectedItemBelowCustomMenu, SelectedItemWithPills */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuggestionItemDefault", function() { return SuggestionItemDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectedItemDefault", function() { return SelectedItemDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectedItemBelowDefault", function() { return SelectedItemBelowDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectedItemBelowCustomMenu", function() { return SelectedItemBelowCustomMenu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectedItemWithPills", function() { return SelectedItemWithPills; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var office_ui_fabric_react_lib_Persona__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! office-ui-fabric-react/lib/Persona */ "UXmd");
/* harmony import */ var office_ui_fabric_react_lib_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! office-ui-fabric-react/lib/Button */ "epn0");
/* harmony import */ var office_ui_fabric_react_lib_Icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! office-ui-fabric-react/lib/Icon */ "56LG");
/* harmony import */ var office_ui_fabric_react_lib_Icon__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(office_ui_fabric_react_lib_Icon__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var office_ui_fabric_react_lib_Utilities__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! office-ui-fabric-react/lib/Utilities */ "mkpW");
/* harmony import */ var _ms_odsp_utilities_lib_string_StringHelper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ms/odsp-utilities/lib/string/StringHelper */ "BY+f");
/* harmony import */ var _ms_odsp_utilities_lib_string_StringHelper__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_ms_odsp_utilities_lib_string_StringHelper__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _PickerItem_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./PickerItem.scss */ "kPZl");
/* harmony import */ var _PeoplePicker_resx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./PeoplePicker.resx */ "Pvlj");
/* harmony import */ var _PeoplePicker_resx__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_PeoplePicker_resx__WEBPACK_IMPORTED_MODULE_8__);

/* tslint:disable */

/* tslint:enable */







var PersonaPillStyles = {
    details: {
        paddingLeft: 4,
        paddingRight: 0
    }
};
var PillCloseStyles = {
    icon: {
        fontSize: 12,
        marginRight: 0
    }
};
var ImagePath = '/_layouts/15/userphoto.aspx?accountname=';
function convertIPersonToIPersonaProps(person) {
    return {
        text: person.name ? person.name : '',
        imageUrl: person.image ? person.image : '',
        tertiaryText: person.email ? person.email : '',
        secondaryText: person.job ? person.job : '',
        imageInitials: '',
        imageAlt: person.imageAlt
    };
}
var SuggestionItemDefault = function (person) {
    var personaProps = convertIPersonToIPersonaProps(person);
    return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: 'ms-PeoplePicker-personaContent' },
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](office_ui_fabric_react_lib_Persona__WEBPACK_IMPORTED_MODULE_2__["Persona"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, personaProps, { presence: office_ui_fabric_react_lib_Persona__WEBPACK_IMPORTED_MODULE_2__["PersonaPresence"].none, size: office_ui_fabric_react_lib_Persona__WEBPACK_IMPORTED_MODULE_2__["PersonaSize"].small, className: 'ms-PeoplePicker-pickerPersona' })),
        person.entityType === 4 /* linkedinUser */ && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](office_ui_fabric_react_lib_Icon__WEBPACK_IMPORTED_MODULE_4__["Icon"], { className: 'od-PeoplePicker-linkedInLogo', iconName: 'LinkedInLogo' }))));
};
var SelectedItemDefault = function (props) {
    var item = props.item, onRemoveItem = props.onRemoveItem, index = props.index, selected = props.selected, removeButtonAriaLabel = props.removeButtonAriaLabel;
    var personaProps = convertIPersonToIPersonaProps(item);
    return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: Object(office_ui_fabric_react_lib_Utilities__WEBPACK_IMPORTED_MODULE_5__["css"])('ms-PickerPersona-container', {
            'is-selected': !!selected
        }), "data-is-focusable": true, "data-selection-index": index, key: index, role: 'listitem' },
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: Object(office_ui_fabric_react_lib_Utilities__WEBPACK_IMPORTED_MODULE_5__["css"])('ms-PickerItem-content', _PickerItem_scss__WEBPACK_IMPORTED_MODULE_7__["itemContent"]) },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](office_ui_fabric_react_lib_Persona__WEBPACK_IMPORTED_MODULE_2__["Persona"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, personaProps, { presence: office_ui_fabric_react_lib_Persona__WEBPACK_IMPORTED_MODULE_2__["PersonaPresence"].none, size: office_ui_fabric_react_lib_Persona__WEBPACK_IMPORTED_MODULE_2__["PersonaSize"].extraSmall }))),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](office_ui_fabric_react_lib_Button__WEBPACK_IMPORTED_MODULE_3__["IconButton"], { onClick: onRemoveItem, iconProps: { iconName: 'Cancel' }, className: 'ms-PickerItem-content', "data-is-focusable": true, ariaLabel: removeButtonAriaLabel })));
};
var SelectedItemBelowDefault = function (props) {
    var item = props.item, onRemoveItem = props.onRemoveItem, index = props.index, selected = props.selected;
    var personaProps = convertIPersonToIPersonaProps(item);
    var pickerPersonaId = 'PickerPersonaId' + Math.floor(Math.random() * 10000);
    var removeButtonAriaLabel = _ms_odsp_utilities_lib_string_StringHelper__WEBPACK_IMPORTED_MODULE_6__["format"](_PeoplePicker_resx__WEBPACK_IMPORTED_MODULE_8___default.a.removeButtonDefaultArialLabel, item.name);
    return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: Object(office_ui_fabric_react_lib_Utilities__WEBPACK_IMPORTED_MODULE_5__["css"])('ms-PickerPersona-container is-listbelow', {
            'is-selected': !!selected
        }), "data-is-focusable": true, "data-selection-index": index, key: index, "aria-labelledby": pickerPersonaId },
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: 'ms-PickerPersona-content' },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](office_ui_fabric_react_lib_Persona__WEBPACK_IMPORTED_MODULE_2__["Persona"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ id: pickerPersonaId }, personaProps, { presence: office_ui_fabric_react_lib_Persona__WEBPACK_IMPORTED_MODULE_2__["PersonaPresence"].none, size: office_ui_fabric_react_lib_Persona__WEBPACK_IMPORTED_MODULE_2__["PersonaSize"].small }))),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: Object(office_ui_fabric_react_lib_Utilities__WEBPACK_IMPORTED_MODULE_5__["css"])('ms-PickerItem-content', _PickerItem_scss__WEBPACK_IMPORTED_MODULE_7__["itemContent"]) },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](office_ui_fabric_react_lib_Button__WEBPACK_IMPORTED_MODULE_3__["IconButton"], { onClick: onRemoveItem, iconProps: { iconName: 'Cancel' }, className: 'ms-PickerItem-content', "data-is-focusable": true, ariaLabel: removeButtonAriaLabel }))));
};
var SelectedItemBelowCustomMenu = function (props, menu) {
    var item = props.item, onRemoveItem = props.onRemoveItem, index = props.index, selected = props.selected;
    var personaProps = convertIPersonToIPersonaProps(item);
    return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: Object(office_ui_fabric_react_lib_Utilities__WEBPACK_IMPORTED_MODULE_5__["css"])('ms-PickerPersona-container is-listbelow', {
            'is-selected': !!selected
        }), "data-is-focusable": true, "data-selection-index": index, key: index },
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: 'ms-PickerPersona-content' },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](office_ui_fabric_react_lib_Persona__WEBPACK_IMPORTED_MODULE_2__["Persona"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, personaProps, { presence: office_ui_fabric_react_lib_Persona__WEBPACK_IMPORTED_MODULE_2__["PersonaPresence"].none, size: office_ui_fabric_react_lib_Persona__WEBPACK_IMPORTED_MODULE_2__["PersonaSize"].small }), menu ? menu : null)),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: 'ms-PickerItem-sideContent' },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](office_ui_fabric_react_lib_Button__WEBPACK_IMPORTED_MODULE_3__["IconButton"], { onClick: onRemoveItem, iconProps: { iconName: 'Cancel' }, className: 'ms-PickerItem-content', "data-is-focusable": false }))));
};
var SelectedItemWithPills = function (props) {
    var item = props.item, onRemoveItem = props.onRemoveItem, index = props.index;
    var imageFromEmail = item.email ? ImagePath + item.email : '';
    var personaProps = {
        text: item.name || '',
        imageUrl: item.image || imageFromEmail
    };
    var pickerPersonaId = 'PickerPersonaId' + Math.floor(Math.random() * 10000);
    var removeButtonAriaLabel = _ms_odsp_utilities_lib_string_StringHelper__WEBPACK_IMPORTED_MODULE_6__["format"](_PeoplePicker_resx__WEBPACK_IMPORTED_MODULE_8___default.a.removeButtonDefaultArialLabel, item.name);
    return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: _PickerItem_scss__WEBPACK_IMPORTED_MODULE_7__["peoplePickerPill"], "data-is-focusable": false, "data-selection-index": index, key: index, "aria-labelledby": pickerPersonaId },
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](office_ui_fabric_react_lib_Persona__WEBPACK_IMPORTED_MODULE_2__["Persona"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ id: pickerPersonaId }, personaProps, { presence: office_ui_fabric_react_lib_Persona__WEBPACK_IMPORTED_MODULE_2__["PersonaPresence"].none, size: office_ui_fabric_react_lib_Persona__WEBPACK_IMPORTED_MODULE_2__["PersonaSize"].size24, styles: PersonaPillStyles })),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](office_ui_fabric_react_lib_Button__WEBPACK_IMPORTED_MODULE_3__["IconButton"], { onClick: onRemoveItem, iconProps: { iconName: 'Cancel' }, className: _PickerItem_scss__WEBPACK_IMPORTED_MODULE_7__["peoplePickerClose"], "data-is-focusable": true, ariaLabel: removeButtonAriaLabel, styles: PillCloseStyles })));
};
//# sourceMappingURL=PeoplePickerDefaultItems.js.map

/***/ })

}]);
//# sourceMappingURL=chunk.vendors~audience-picker-chunk~spcx-panels_[locale].js.map